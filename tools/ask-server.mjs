#!/usr/bin/env node
/**
 * Local web UI for corpus RAG.
 *
 *   node tools/ask-server.mjs          # http://127.0.0.1:8787/ask/
 *   node tools/ask-server.mjs --port 9000
 *
 * Serves:
 *   /           → _site/ (run `node build.mjs` first)
 *   /ask/       → ask UI (source tree, always current)
 *   /rag/*      → .rag/index.json, vectors.bin, vectors.meta.json
 *   POST /api/search  { query, method?, k? } → hybrid/bm25/dense hits
 *
 * Generation (LFM2.5-350M) runs in the browser Web Worker via transformers.js v4
 * (AutoModelForCausalLM + WebGPU) — not on this server.
 */

import { createServer } from "node:http";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  ROOT,
  CACHE_DIR,
  INDEX_PATH,
  VECTORS_PATH,
  VECTORS_META_PATH,
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
  expandQuery,
  round,
} from "./rag-lib.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.join(ROOT, "_site");
const ASK_DIR = path.join(ROOT, "ask");

const args = process.argv.slice(2);
let PORT = 8787;
let HOST = "127.0.0.1";
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--port" || args[i] === "-p") PORT = Number(args[++i]);
  else if (args[i] === "--host") HOST = args[++i];
  else if (args[i] === "--help" || args[i] === "-h") {
    console.log(`Usage: node tools/ask-server.mjs [--port N] [--host 127.0.0.1]`);
    process.exit(0);
  }
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".bin": "application/octet-stream",
  ".md": "text/markdown; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".map": "application/json",
  ".woff2": "font/woff2",
};

let _index = null;
let _vectors = null;
let _embedder = null;

async function getIndex() {
  if (_index) {
    try {
      const fp = await corpusFingerprint();
      if (_index.fingerprint === fp) return _index;
    } catch {
      /* rebuild */
    }
  }
  try {
    const index = await loadIndex();
    const fp = await corpusFingerprint();
    if (index.fingerprint === fp) {
      _index = index;
      return index;
    }
    console.error("Corpus changed — rebuilding BM25 index…");
  } catch {
    console.error("Building BM25 index…");
  }
  _index = await buildIndexData();
  await saveIndex(_index);
  _vectors = null;
  console.error(`Indexed ${_index.chunks.length} passages`);
  return _index;
}

async function getVectors(index) {
  if (!(await vectorsMatchIndex(index))) {
    const err = new Error(
      `Dense vectors missing or stale. Run: node tools/embed.mjs`,
    );
    err.code = "VECTORS_STALE";
    throw err;
  }
  if (!_vectors) _vectors = await loadVectors();
  return _vectors;
}

async function embedQuery(text) {
  if (!_embedder) {
    let pipeline;
    try {
      ({ pipeline } = await import("@huggingface/transformers"));
    } catch {
      throw new Error("Missing @huggingface/transformers. Run: npm install");
    }
    console.error(`Loading query embedder (${EMBED_MODEL})…`);
    _embedder = await pipeline("feature-extraction", EMBED_MODEL, {
      dtype: "fp32",
    });
    console.error("Embedder ready.");
  }
  const truncated = text.length > 2000 ? text.slice(0, 2000) : text;
  const tensor = await _embedder(truncated, { pooling: "mean", normalize: true });
  const data = tensor.data ?? tensor;
  const arr = data instanceof Float32Array ? data : Float32Array.from(data);
  if (arr.length === EMBED_DIM) return arr;
  if (arr.length > EMBED_DIM) return arr.slice(arr.length - EMBED_DIM);
  throw new Error(`Unexpected query embed dim ${arr.length}`);
}

function stripTokens(h) {
  const { tokens, ...rest } = h;
  return { ...rest, score: round(rest.score ?? 0) };
}

async function search({ query, method = "hybrid", k = 8 }) {
  const q = String(query || "").trim();
  if (!q) {
    const e = new Error("query required");
    e.code = "BAD_REQUEST";
    throw e;
  }
  if (!["hybrid", "bm25", "dense"].includes(method)) {
    const e = new Error("method must be hybrid|bm25|dense");
    e.code = "BAD_REQUEST";
    throw e;
  }
  const topK = Math.min(Math.max(Number(k) || 8, 1), 24);
  const index = await getIndex();
  // Retrieval string may include dual-vocab expansions (open source → open-weight, …)
  const qRet = expandQuery(q);

  if (method === "bm25") {
    return {
      query: q,
      method,
      hits: retrieveBm25(index, q, topK).map(stripTokens),
    };
  }

  const { matrix, meta } = await getVectors(index);
  // Dense: embed expanded query so synonym pages surface
  const queryVec = await embedQuery(qRet);

  if (method === "dense") {
    return {
      query: q,
      method,
      hits: retrieveDense(index, queryVec, matrix, meta.dim, topK).map((h) => ({
        ...h,
        score: round(h.score),
      })),
    };
  }

  return {
    query: q,
    method: "hybrid",
    hits: retrieveHybrid(index, q, matrix, meta.dim, queryVec, topK),
  };
}

function send(res, status, body, headers = {}) {
  const data = typeof body === "string" || Buffer.isBuffer(body)
    ? body
    : JSON.stringify(body);
  res.writeHead(status, {
    "Cache-Control": "no-cache",
    ...headers,
    "Content-Length": Buffer.byteLength(data),
  });
  res.end(data);
}

function sendJson(res, status, obj) {
  send(res, status, obj, { "Content-Type": "application/json; charset=utf-8" });
}

async function readBody(req) {
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const raw = Buffer.concat(chunks).toString("utf8");
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    const e = new Error("invalid JSON body");
    e.code = "BAD_REQUEST";
    throw e;
  }
}

function safeJoin(root, urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const rel = decoded.replace(/^\/+/, "");
  const full = path.normalize(path.join(root, rel));
  if (!full.startsWith(root)) return null;
  return full;
}

async function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const type = MIME[ext] || "application/octet-stream";
  const data = await fs.readFile(filePath);
  send(res, 200, data, { "Content-Type": type });
}

async function tryStat(p) {
  try {
    return await fs.stat(p);
  } catch {
    return null;
  }
}

async function handleStatic(req, res, urlPath) {
  // Prefer live ask/ sources over a stale _site copy.
  if (urlPath === "/ask" || urlPath === "/ask/") {
    return serveFile(res, path.join(ASK_DIR, "index.html"));
  }
  if (urlPath.startsWith("/ask/")) {
    const file = safeJoin(ASK_DIR, urlPath.slice("/ask".length));
    if (!file) return send(res, 403, "Forbidden");
    const st = await tryStat(file);
    if (st?.isFile()) return serveFile(res, file);
    return send(res, 404, "Not found");
  }

  if (urlPath.startsWith("/rag/")) {
    const name = urlPath.slice("/rag/".length);
    if (!["index.json", "vectors.bin", "vectors.meta.json"].includes(name)) {
      return send(res, 404, "Not found");
    }
    const file = path.join(CACHE_DIR, name);
    const st = await tryStat(file);
    if (!st?.isFile()) {
      return sendJson(res, 404, {
        error: `Missing ${name}. Run: node tools/rag.mjs reindex && node tools/embed.mjs`,
      });
    }
    return serveFile(res, file);
  }

  // Site (built HTML)
  let file = safeJoin(SITE, urlPath === "/" ? "/index.html" : urlPath);
  if (!file) return send(res, 403, "Forbidden");
  let st = await tryStat(file);
  if (st?.isDirectory()) {
    file = path.join(file, "index.html");
    st = await tryStat(file);
  }
  if (!st?.isFile() && !path.extname(file)) {
    const withHtml = file + ".html";
    st = await tryStat(withHtml);
    if (st?.isFile()) file = withHtml;
  }
  if (!st?.isFile()) {
    // Fall back to repo root for style.css during partial builds
    if (urlPath === "/style.css") {
      const css = path.join(ROOT, "style.css");
      if (await tryStat(css)) return serveFile(res, css);
    }
    return send(res, 404, "Not found — run node build.mjs for the full site");
  }
  return serveFile(res, file);
}

const server = createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  try {
    const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
    const urlPath = url.pathname;

    if (req.method === "POST" && urlPath === "/api/search") {
      const body = await readBody(req);
      const result = await search({
        query: body.query ?? url.searchParams.get("q"),
        method: body.method || "hybrid",
        k: body.k ?? 8,
      });
      return sendJson(res, 200, result);
    }

    if (req.method === "GET" && urlPath === "/api/health") {
      const index = await getIndex();
      let dense = false;
      try {
        dense = await vectorsMatchIndex(index);
      } catch {
        dense = false;
      }
      return sendJson(res, 200, {
        ok: true,
        passages: index.N,
        files: index.files,
        dense,
        embed: EMBED_MODEL,
        gen: "onnx-community/LFM2.5-350M-ONNX (browser worker, WebGPU q4)",
      });
    }

    if (req.method === "GET" || req.method === "HEAD") {
      return handleStatic(req, res, urlPath);
    }

    return send(res, 405, "Method not allowed");
  } catch (err) {
    const status =
      err.code === "BAD_REQUEST" ? 400 :
      err.code === "VECTORS_STALE" ? 503 : 500;
    console.error(err.message || err);
    sendJson(res, status, { error: err.message || String(err) });
  }
});

server.listen(PORT, HOST, async () => {
  console.log(`Ask UI  →  http://${HOST}:${PORT}/ask/`);
  console.log(`Site    →  http://${HOST}:${PORT}/`);
  console.log(`Health  →  http://${HOST}:${PORT}/api/health`);
  try {
    const index = await getIndex();
    const dense = await vectorsMatchIndex(index);
    console.log(
      `Index   →  ${index.N} passages · dense ${dense ? "ready" : "MISSING (node tools/embed.mjs)"}`,
    );
  } catch (e) {
    console.error("Index warmup failed:", e.message);
  }
});
