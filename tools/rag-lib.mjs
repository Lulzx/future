/**
 * Shared corpus chunking, BM25, dense cosine, and hybrid (RRF) retrieval.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const CACHE_DIR = path.join(ROOT, ".rag");
export const INDEX_PATH = path.join(CACHE_DIR, "index.json");
export const VECTORS_PATH = path.join(CACHE_DIR, "vectors.bin");
export const VECTORS_META_PATH = path.join(CACHE_DIR, "vectors.meta.json");

/** Small, fast bi-encoder; same model for build-time docs + query-time. */
export const EMBED_MODEL = "Xenova/all-MiniLM-L6-v2";
export const EMBED_DIM = 384;

const SKIP_DIRS = new Set(["_site", ".git", ".rag", "node_modules", "tools", "ask"]);
const SKIP_FILES = new Set(["HISTORY.md"]);

export const STOP = new Set(
  `a an the and or but if in on of to for with from by as is are was were be been being
   it this that these those at into than then so not no nor such own same too very
   can could should would may might will shall do does did done have has had
   i you he she we they them their our your my me him her us
   about over under again further more most other some any each few both
   what which who whom when where why how all`.split(/\s+/),
);

export function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9$%./\-]+/g, " ")
    .split(/\s+/)
    .map((t) => t.replace(/^[-./]+|[-./]+$/g, ""))
    .filter((t) => t.length > 1 && !STOP.has(t));
}

export function extractTitle(text, rel) {
  const m = text.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : rel;
}

export function cleanChunk(s) {
  return s
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/`{1,3}/g, "")
    .replace(/\s+\n/g, "\n")
    .trim();
}

/** Split on ## headings, then into ~paragraph blocks under each section. */
export function chunkMarkdown(text, title) {
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  const sections = [];
  let heading = title;
  let buf = [];

  const flush = () => {
    const body = buf.join("\n").trim();
    buf = [];
    if (!body) return;
    if (/^←\s*\[/.test(body) && body.length < 200) return;
    if (/^\*\*Next:\*\*/.test(body)) return;

    const paras = body
      .split(/\n{2,}/)
      .map((p) => p.trim())
      .filter(Boolean);

    let acc = "";
    for (const p of paras) {
      if (acc && (acc + "\n\n" + p).length > 900) {
        sections.push({ heading, text: cleanChunk(acc) });
        acc = p;
      } else {
        acc = acc ? acc + "\n\n" + p : p;
      }
    }
    if (acc) sections.push({ heading, text: cleanChunk(acc) });
  };

  for (const line of lines) {
    const hm = line.match(/^#{1,3}\s+(.+)$/);
    if (hm) {
      flush();
      heading = hm[1].replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").trim();
      continue;
    }
    buf.push(line);
  }
  flush();
  return sections;
}

export async function listMarkdown(dir = ROOT, base = "") {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const ent of entries) {
    if (ent.name.startsWith(".")) continue;
    const rel = base ? `${base}/${ent.name}` : ent.name;
    if (ent.isDirectory()) {
      if (SKIP_DIRS.has(ent.name)) continue;
      out.push(...(await listMarkdown(path.join(dir, ent.name), rel)));
    } else if (ent.name.endsWith(".md") && !SKIP_FILES.has(ent.name)) {
      out.push(rel);
    }
  }
  return out.sort();
}

export async function corpusFingerprint() {
  const files = await listMarkdown();
  const h = createHash("sha256");
  for (const rel of files) {
    const st = await fs.stat(path.join(ROOT, rel));
    h.update(`${rel}:${st.size}:${st.mtimeMs}\n`);
  }
  return h.digest("hex").slice(0, 16);
}

/** Full BM25 index with tokens (CLI cache). */
export async function buildIndexData() {
  const files = await listMarkdown();
  const chunks = [];
  let id = 0;

  for (const rel of files) {
    const text = await fs.readFile(path.join(ROOT, rel), "utf8");
    const title = extractTitle(text, rel);
    for (const chunk of chunkMarkdown(text, title)) {
      const tokens = tokenize(chunk.text);
      if (tokens.length < 8) continue;
      chunks.push({
        id: id++,
        path: rel,
        title,
        heading: chunk.heading,
        text: chunk.text,
        tokens,
      });
    }
  }

  const df = {};
  for (const c of chunks) {
    for (const t of new Set(c.tokens)) df[t] = (df[t] || 0) + 1;
  }

  const avgdl = chunks.reduce((s, c) => s + c.tokens.length, 0) / Math.max(chunks.length, 1);
  return {
    version: 1,
    builtAt: new Date().toISOString(),
    fingerprint: await corpusFingerprint(),
    files: files.length,
    avgdl,
    N: chunks.length,
    df,
    chunks,
  };
}

export async function saveIndex(index) {
  await fs.mkdir(CACHE_DIR, { recursive: true });
  await fs.writeFile(INDEX_PATH, JSON.stringify(index));
}

export async function loadIndex() {
  const raw = await fs.readFile(INDEX_PATH, "utf8");
  return JSON.parse(raw);
}

/* ── BM25 ────────────────────────────────────────────────────────────────── */

export function bm25Score(queryTokens, docTokens, df, N, avgdl, k1 = 1.2, b = 0.75) {
  if (!queryTokens.length || !docTokens.length) return 0;
  const tf = new Map();
  for (const t of docTokens) tf.set(t, (tf.get(t) || 0) + 1);
  const dl = docTokens.length;
  let score = 0;
  for (const q of queryTokens) {
    const f = tf.get(q) || 0;
    if (!f) continue;
    const n = df[q] || 0;
    const idf = Math.log(1 + (N - n + 0.5) / (n + 0.5));
    const denom = f + k1 * (1 - b + b * (dl / avgdl));
    score += idf * ((f * (k1 + 1)) / denom);
  }
  return score;
}

export function retrieveBm25(index, query, k) {
  const qTokens = tokenize(query);
  const scored = index.chunks.map((c) => ({
    id: c.id,
    path: c.path,
    title: c.title,
    heading: c.heading,
    text: c.text,
    score: bm25Score(qTokens, c.tokens, index.df, index.N, index.avgdl),
    method: "bm25",
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored.filter((c) => c.score > 0).slice(0, k);
}

/** Alias used by older CLI code. */
export const retrievePassages = retrieveBm25;

/* ── Dense ───────────────────────────────────────────────────────────────── */

export function cosineSimilarity(a, b) {
  let dot = 0;
  for (let i = 0; i < a.length; i++) dot += a[i] * b[i];
  return dot; // assumes L2-normalized
}

/**
 * Rank chunks by cosine vs query vector.
 * @param {Float32Array} queryVec length dim
 * @param {Float32Array} matrix N * dim, row-major, L2-normalized
 */
export function retrieveDense(index, queryVec, matrix, dim, k) {
  const n = index.chunks.length;
  if (matrix.length < n * dim) {
    throw new Error(`vectors.bin too short: ${matrix.length} < ${n * dim}`);
  }
  const scored = new Array(n);
  for (let i = 0; i < n; i++) {
    let dot = 0;
    const base = i * dim;
    for (let d = 0; d < dim; d++) dot += queryVec[d] * matrix[base + d];
    const c = index.chunks[i];
    scored[i] = {
      id: c.id,
      path: c.path,
      title: c.title,
      heading: c.heading,
      text: c.text,
      score: dot,
      method: "dense",
    };
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, k);
}

/* ── Hybrid (RRF) ────────────────────────────────────────────────────────── */

/**
 * Reciprocal Rank Fusion over one or more ranked lists.
 * Each list item needs a stable `id`.
 */
export function rrfFuse(lists, { k = 60, topK = 8 } = {}) {
  const map = new Map();
  for (const list of lists) {
    list.forEach((item, rank) => {
      const cur = map.get(item.id) || {
        id: item.id,
        path: item.path,
        title: item.title,
        heading: item.heading,
        text: item.text,
        score: 0,
        bm25: null,
        dense: null,
        methods: [],
      };
      cur.score += 1 / (k + rank + 1);
      if (item.method === "bm25") cur.bm25 = item.score;
      if (item.method === "dense") cur.dense = item.score;
      if (item.method && !cur.methods.includes(item.method)) {
        cur.methods.push(item.method);
      }
      // keep richest text/path fields
      if (!cur.text && item.text) cur.text = item.text;
      map.set(item.id, cur);
    });
  }
  return [...map.values()]
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((h) => ({
      id: h.id,
      path: h.path,
      title: h.title,
      heading: h.heading,
      text: h.text,
      score: round(h.score),
      bm25: h.bm25 != null ? round(h.bm25) : null,
      dense: h.dense != null ? round(h.dense) : null,
      methods: h.methods,
      method: "hybrid",
    }));
}

/**
 * Hybrid retrieve: BM25 ∪ dense → RRF.
 * `candidatePool` is how many to take from each retriever before fusion.
 */
export function retrieveHybrid(index, query, matrix, dim, queryVec, k, candidatePool = 40) {
  const pool = Math.max(k, candidatePool);
  const bm25 = retrieveBm25(index, query, pool);
  const dense = retrieveDense(index, queryVec, matrix, dim, pool);
  return rrfFuse([bm25, dense], { topK: k });
}

export function round(n) {
  return Math.round(n * 1000) / 1000;
}

/* ── Vectors I/O ─────────────────────────────────────────────────────────── */

export async function loadVectors() {
  const meta = JSON.parse(await fs.readFile(VECTORS_META_PATH, "utf8"));
  const buf = await fs.readFile(VECTORS_PATH);
  const matrix = new Float32Array(buf.buffer, buf.byteOffset, buf.byteLength / 4);
  return { meta, matrix };
}

export async function vectorsMatchIndex(index) {
  try {
    const meta = JSON.parse(await fs.readFile(VECTORS_META_PATH, "utf8"));
    return (
      meta.fingerprint === index.fingerprint &&
      meta.n === index.N &&
      meta.model === EMBED_MODEL &&
      meta.dim === EMBED_DIM
    );
  } catch {
    return false;
  }
}

/**
 * Browser / static export: chunks + BM25 stats + float16 vectors (base64).
 */
export async function buildBrowserCorpus(index, matrix, dim) {
  const n = index.chunks.length;
  const f16 = new Uint16Array(n * dim);
  for (let i = 0; i < n * dim; i++) {
    f16[i] = float32ToFloat16(matrix[i]);
  }
  return {
    version: 2,
    retrieval: "hybrid",
    builtAt: new Date().toISOString(),
    fingerprint: index.fingerprint,
    files: index.files,
    avgdl: index.avgdl,
    N: index.N,
    df: index.df,
    embed: { model: EMBED_MODEL, dim },
    chunks: index.chunks.map(({ id, path, title, heading, text, tokens }) => ({
      id,
      path,
      title,
      heading,
      text,
      len: tokens.length,
    })),
    // float16 little-endian row-major, base64
    vectors_f16_b64: Buffer.from(f16.buffer).toString("base64"),
  };
}

/** IEEE float16 encode (for shipping). */
export function float32ToFloat16(val) {
  const f32 = new Float32Array(1);
  const u32 = new Uint32Array(f32.buffer);
  f32[0] = val;
  const x = u32[0];
  const sign = (x >>> 16) & 0x8000;
  let exp = ((x >>> 23) & 0xff) - 127 + 15;
  let mant = x & 0x7fffff;
  if (exp <= 0) {
    if (exp < -10) return sign;
    mant = (mant | 0x800000) >> (1 - exp);
    return sign | ((mant + 0x1000) >> 13);
  }
  if (exp >= 31) return sign | 0x7c00;
  return sign | (exp << 10) | ((mant + 0x1000) >> 13);
}

export function float16ToFloat32(h) {
  const s = (h & 0x8000) << 16;
  let e = (h >> 10) & 0x1f;
  let m = h & 0x3ff;
  if (e === 0) {
    if (m === 0) return s ? -0 : 0;
    e = 1;
    while (!(m & 0x400)) {
      m <<= 1;
      e--;
    }
    m &= 0x3ff;
    e = e - 15 + 127;
  } else if (e === 31) {
    const u = s | 0x7f800000 | (m << 13);
    return new Float32Array(new Uint32Array([u]).buffer)[0];
  } else {
    e = e - 15 + 127;
  }
  const u = s | (e << 23) | (m << 13);
  return new Float32Array(new Uint32Array([u]).buffer)[0];
}
