#!/usr/bin/env node
/**
 * Corpus RAG — hybrid retrieval (BM25 + dense MiniLM → RRF).
 *
 * Usage:
 *   node tools/rag.mjs "energy vs capital constraint"
 *   node tools/rag.mjs --method bm25 "master asymmetry"
 *   node tools/rag.mjs --method dense "why juniors stop getting hired"
 *   node tools/rag.mjs --method hybrid "what binds first"   # default
 *   node tools/rag.mjs ask "Will energy or capital bind first?"
 *   node tools/rag.mjs reindex
 *   node tools/embed.mjs   # build dense vectors (required for dense/hybrid)
 *
 * Env:
 *   XAI_API_KEY   required for `ask`
 *   XAI_MODEL     default grok-4.5
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import {
  ROOT,
  CACHE_DIR,
  INDEX_PATH,
  EMBED_MODEL,
  EMBED_DIM,
  buildIndexData,
  saveIndex,
  loadIndex,
  corpusFingerprint,
  vectorsMatchIndex,
  loadVectors,
  retrieveBm25,
  retrieveDense,
  retrieveHybrid,
  tokenize,
  bm25Score,
  round,
} from "./rag-lib.mjs";

const args = process.argv.slice(2);
const flags = {
  k: 8,
  mode: "passages", // passages | sentences
  method: "hybrid", // hybrid | bm25 | dense
  reindex: false,
  ask: false,
  json: false,
};

const positional = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === "reindex") flags.reindex = true;
  else if (a === "ask") flags.ask = true;
  else if (a === "--json") flags.json = true;
  else if (a === "--k" || a === "-k") flags.k = Number(args[++i]);
  else if (a === "--mode") flags.mode = args[++i];
  else if (a === "--method") flags.method = args[++i];
  else if (a === "--help" || a === "-h") {
    console.log(`Usage:
  node tools/rag.mjs [ask] [reindex] [--method hybrid|bm25|dense]
                     [--k N] [--mode passages|sentences] [--json] <query>

  node tools/embed.mjs [--force]   # build dense index (once)

Methods:
  hybrid  BM25 + MiniLM dense, fused with RRF (default)
  bm25    lexical only
  dense   semantic only

Examples:
  node tools/rag.mjs "What constrains AI growth?"
  node tools/rag.mjs --method bm25 "master asymmetry"
  node tools/rag.mjs --method dense "why juniors stop getting hired"
  node tools/rag.mjs ask "Will energy or capital bind first?"`);
    process.exit(0);
  } else if (a.startsWith("-")) {
    die(`Unknown flag: ${a}`);
  } else {
    positional.push(a);
  }
}

if (!["hybrid", "bm25", "dense"].includes(flags.method)) {
  die(`--method must be hybrid|bm25|dense (got ${flags.method})`);
}

const query = positional.join(" ").trim();
if (!flags.reindex && !query) {
  die("Pass a query, or `reindex`. Try --help.");
}

main().catch((err) => {
  console.error(err.stack || err.message || err);
  process.exit(1);
});

async function main() {
  const index = flags.reindex ? await rebuildIndex() : await loadOrBuildIndex();

  if (flags.reindex && !query) {
    console.log(
      `Indexed ${index.chunks.length} passages from ${index.files} files → ${path.relative(ROOT, INDEX_PATH)}`,
    );
    console.log(`Next: node tools/embed.mjs   # dense vectors for hybrid/dense`);
    return;
  }

  let hits;
  if (flags.mode === "sentences") {
    hits = await retrieveSentences(index, query, flags.k, flags.method);
  } else {
    hits = await retrieve(index, query, flags.k, flags.method);
  }

  if (flags.ask) {
    const answer = await generateAnswer(query, hits);
    if (flags.json) {
      console.log(JSON.stringify({ query, method: flags.method, answer, hits }, null, 2));
    } else {
      printAnswer(answer, hits);
    }
    return;
  }

  if (flags.json) {
    console.log(JSON.stringify({ query, method: flags.method, hits }, null, 2));
  } else {
    printHits(query, hits);
  }
}

async function retrieve(index, query, k, method) {
  if (method === "bm25") {
    return retrieveBm25(index, query, k).map(stripTokens);
  }

  const { matrix, meta } = await ensureVectors(index);
  const queryVec = await embedQuery(query);

  if (method === "dense") {
    return retrieveDense(index, queryVec, matrix, meta.dim, k).map((h) => ({
      ...h,
      score: round(h.score),
    }));
  }

  // hybrid
  return retrieveHybrid(index, query, matrix, meta.dim, queryVec, k);
}

async function retrieveSentences(index, query, k, method) {
  const passages = await retrieve(index, query, Math.max(k * 2, 16), method);
  const qTokens = tokenize(query);
  const sentences = [];

  for (const p of passages) {
    for (const sent of splitSentences(p.text)) {
      if (sent.length < 40) continue;
      const tokens = tokenize(sent);
      if (tokens.length < 5) continue;
      const score = bm25Score(qTokens, tokens, index.df, index.N, index.avgdl);
      const boosted = score + 0.05 * (p.score || 0);
      if (boosted <= 0) continue;
      sentences.push({
        path: p.path,
        title: p.title,
        heading: p.heading,
        text: sent,
        score: round(boosted),
        methods: p.methods || [p.method || method],
      });
    }
  }

  sentences.sort((a, b) => b.score - a.score);
  const out = [];
  const seen = new Set();
  for (const s of sentences) {
    const key = s.text.slice(0, 80);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(s);
    if (out.length >= k) break;
  }
  return out;
}

function stripTokens(h) {
  const { tokens, ...rest } = h;
  return { ...rest, score: round(rest.score) };
}

/* ── Index / vectors ─────────────────────────────────────────────────────── */

async function loadOrBuildIndex() {
  try {
    const index = await loadIndex();
    const fingerprint = await corpusFingerprint();
    if (index.fingerprint === fingerprint) return index;
    console.error("Corpus changed — rebuilding index…");
  } catch {
    console.error("Building index…");
  }
  return rebuildIndex();
}

async function rebuildIndex() {
  const index = await buildIndexData();
  await saveIndex(index);
  console.error(`Indexed ${index.chunks.length} passages · ${index.files} files`);
  return index;
}

async function ensureVectors(index) {
  if (!(await vectorsMatchIndex(index))) {
    die(
      `Dense vectors missing or stale for this corpus.\n` +
        `  Run:  node tools/embed.mjs\n` +
        `  (uses ${EMBED_MODEL}, ~25MB first download)`,
    );
  }
  return loadVectors();
}

let _embedder = null;
async function embedQuery(text) {
  if (!_embedder) {
    let pipeline;
    try {
      ({ pipeline } = await import("@huggingface/transformers"));
    } catch {
      die(`Missing @huggingface/transformers. Run: npm install`);
    }
    console.error(`Loading query embedder (${EMBED_MODEL})…`);
    const extractor = await pipeline("feature-extraction", EMBED_MODEL, {
      dtype: "fp32",
    });
    _embedder = extractor;
  }
  const truncated = text.length > 2000 ? text.slice(0, 2000) : text;
  const tensor = await _embedder(truncated, { pooling: "mean", normalize: true });
  const data = tensor.data ?? tensor;
  const arr = data instanceof Float32Array ? data : Float32Array.from(data);
  if (arr.length === EMBED_DIM) return arr;
  if (arr.length > EMBED_DIM) return arr.slice(arr.length - EMBED_DIM);
  throw new Error(`Unexpected query embed dim ${arr.length}`);
}

/* ── Generate (xAI) ──────────────────────────────────────────────────────── */

async function generateAnswer(query, hits) {
  const key = process.env.XAI_API_KEY;
  if (!key) {
    die(
      "ask mode needs XAI_API_KEY.\n  export XAI_API_KEY=...   # https://console.x.ai\nOr run without `ask` to get corpus excerpts only.",
    );
  }
  if (!hits.length) {
    return { text: "No relevant passages found in the corpus for that query.", model: null };
  }

  const model = process.env.XAI_MODEL || "grok-4.5";
  const context = hits
    .map((h, i) => `[${i + 1}] (${h.path}${h.heading ? " · " + h.heading : ""})\n${h.text}`)
    .join("\n\n---\n\n");

  const system = `You answer questions using ONLY the provided corpus excerpts from "The Next Fifteen Years" forecast document.

Rules:
1. Prefer quoting or closely paraphrasing the excerpts. When you quote, use exact wording in quotation marks.
2. Cite sources inline as [n] matching the excerpt numbers.
3. If the excerpts do not contain enough to answer, say what is missing — do not invent claims, numbers, or probabilities.
4. Keep the voice tight and analytical, matching the corpus. No preamble.
5. When the corpus states a probability, range, or named uncertainty, preserve it exactly.`;

  const user = `Question: ${query}

Corpus excerpts:
${context}

Answer from the excerpts only.`;

  const res = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    die(`xAI API ${res.status}: ${body.slice(0, 400)}`);
  }
  const data = await res.json();
  const text = data.choices?.[0]?.message?.content?.trim() || "(empty response)";
  return { text, model };
}

/* ── Print ───────────────────────────────────────────────────────────────── */

function printHits(query, hits) {
  console.log(`Query:  ${query}`);
  console.log(`Method: ${flags.method}  ·  hits=${hits.length}\n`);
  if (!hits.length) {
    console.log("No matches. Try broader terms or `node tools/rag.mjs reindex`.");
    return;
  }
  for (let i = 0; i < hits.length; i++) {
    const h = hits[i];
    const loc = h.heading && h.heading !== h.title ? `${h.path} · ${h.heading}` : h.path;
    const tags = [];
    if (h.methods?.length) tags.push(h.methods.join("+"));
    else if (h.method) tags.push(h.method);
    if (h.bm25 != null) tags.push(`bm25=${h.bm25}`);
    if (h.dense != null) tags.push(`cos=${h.dense}`);
    const tag = tags.length ? ` (${tags.join(" · ")})` : "";
    const scoreLabel = flags.method === "hybrid" ? "rrf" : flags.method === "dense" ? "cos" : "bm25";
    console.log(`── ${i + 1}. [${scoreLabel}=${h.score}] ${loc}${tag}`);
    console.log(indent(h.text, "   "));
    console.log();
  }
  console.log("Tip: `npm run ask` → http://127.0.0.1:8787/ask/  (LFM2.5 WebGPU generate)");
  console.log("     or `node tools/rag.mjs ask \"…\"` (needs XAI_API_KEY).");
}

function printAnswer(answer, hits) {
  console.log(answer.text);
  console.log();
  console.log("── Sources ──");
  for (let i = 0; i < hits.length; i++) {
    const h = hits[i];
    const loc = h.heading && h.heading !== h.title ? `${h.path} · ${h.heading}` : h.path;
    const preview = h.text.replace(/\s+/g, " ").slice(0, 120);
    console.log(`[${i + 1}] ${loc}`);
    console.log(`    ${preview}${h.text.length > 120 ? "…" : ""}`);
  }
  if (answer.model) console.log(`\n(model: ${answer.model})`);
}

function splitSentences(text) {
  const blocks = text.split(/\n+/);
  const out = [];
  for (const block of blocks) {
    const b = block.trim();
    if (!b) continue;
    if (/^[-*|]|\d+\.\s/.test(b) || b.includes("|")) {
      out.push(b);
      continue;
    }
    const parts = b.split(/(?<=[.!?])\s+(?=[A-Z"“(])/);
    for (const p of parts) {
      const t = p.trim();
      if (t) out.push(t);
    }
  }
  return out;
}

function indent(s, prefix) {
  return s
    .split("\n")
    .map((l) => prefix + l)
    .join("\n");
}

function die(msg) {
  console.error(msg);
  process.exit(1);
}
