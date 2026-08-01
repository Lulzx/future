/**
 * Ask UI — hybrid retrieval + LFM2.5-350M generation.
 *
 * Retrieval: POST /api/search (ask-server) or /rag/* client-side.
 * Generation: Web Worker (lfm-worker.js) using transformers.js v4
 *   AutoTokenizer + AutoModelForCausalLM + WebGPU q4 + shader warmup
 *   (Liquid docs / sitammeur/lfm2.5-jp-web pattern).
 */

import {
  retrieveBm25,
  retrieveDense,
  retrieveHybrid,
  expandQuery,
} from "./client-retrieve.mjs";

const GEN_MODEL = "onnx-community/LFM2.5-350M-ONNX";
/** Phones and tablets get the 230M sibling: 201 MB of weights instead of 280,
 *  and far less memory pressure when Safari has no WebGPU and falls to wasm. */
const GEN_MODEL_MOBILE = "LiquidAI/LFM2.5-230M-ONNX";
const EMBED_MODEL = "Xenova/all-MiniLM-L6-v2";
const EMBED_DIM = 384;
/** Keep RAG context modest for 350M on-device decode, but allow multi-source. */
const MAX_CONTEXT_CHARS = 3400;
const MAX_NEW_TOKENS = 320;
/** MiniLM embedder for client-side dense/hybrid fallback (main thread). */
const TFJS_CDN =
  "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1";

const $ = (id) => document.getElementById(id);

/* ── device / model selection ───────────────────────────────────────────── */

/** iPadOS Safari reports itself as a Mac, so touch points settle it. */
function isMobileDevice() {
  if (navigator.userAgentData?.mobile) return true;
  if (/iPhone|iPod|Android/i.test(navigator.userAgent)) return true;
  const iPadish =
    /Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
  if (iPadish || /iPad/.test(navigator.userAgent)) return true;
  return (
    matchMedia("(pointer: coarse)").matches &&
    matchMedia("(max-width: 1024px)").matches
  );
}

/** ?model=230m / 350m forces a build, for testing on a desktop. */
function chooseModel() {
  const forced = new URLSearchParams(location.search).get("model");
  if (forced === "230m") return GEN_MODEL_MOBILE;
  if (forced === "350m") return GEN_MODEL;
  if (forced?.includes("/")) return forced;
  return isMobileDevice() ? GEN_MODEL_MOBILE : GEN_MODEL;
}

const shortModel = (id) => String(id || "").split("/").pop();

/** ?dtype=q4f32 etc, for testing quantisations without an edit-deploy cycle. */
const forcedDtype = () => new URLSearchParams(location.search).get("dtype");

const el = {
  form: $("ask-form"),
  q: $("q"),
  qCount: $("q-count"),
  composer: $("composer"),
  method: $("method"),
  k: $("k"),
  generate: $("generate"),
  websearch: $("websearch"),
  optsSummary: $("opts-summary"),
  webHits: $("web-hits"),
  webHead: $("web-head"),
  webTag: $("web-tag"),
  go: $("go"),
  retrieveOnly: $("retrieve-only"),
  loadModel: $("load-model"),
  status: $("status-line"),
  statusWrap: $("status-wrap"),
  chatLog: $("chat-log"),
  chatEmpty: $("chat-empty"),
  hits: $("hits"),
  hitsTag: $("hits-tag"),
  hitsEmpty: $("hits-empty"),
  toggleHits: $("toggle-hits"),
  panel: $("hits-panel"),
  activity: $("activity"),
  activityTag: $("activity-tag"),
  activityEmpty: $("activity-empty"),
  closePanel: $("close-panel"),
  openPanel: $("open-panel"),
  sheetToggle: $("sheet-toggle"),
  sheetBackdrop: $("sheet-backdrop"),
  helpBtn: $("help-btn"),
  helpDialog: $("help-dialog"),
  helpClose: $("help-close"),
  theme: $("theme"),
  loadProgress: $("load-progress"),
  loadLabel: $("load-label"),
  loadPct: $("load-pct"),
  loadBar: $("load-bar"),
  loadFill: $("load-fill"),
  loadFile: $("load-file"),
  loadDetail: $("load-detail"),
};

let apiOk = false;
let clientIndex = null;
let clientMatrix = null;
let clientDim = EMBED_DIM;
let embedder = null;
let busy = false;

/** @type {Worker | null} */
let genWorker = null;
let genReady = false;
/** Set once every build has failed here, so we stop retrying on each ask. */
let genUnavailable = false;
let genDevice = null;
let genDtype = null;
let genModelId = chooseModel();
/** @type {Map<string, { resolve: Function, reject: Function, onUpdate?: Function }>} */
const workerWaiters = new Map();

/* ── theme ──────────────────────────────────────────────────────────────── */

(function initTheme() {
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-theme", stored);
  function toggle() {
    const isDark =
      root.getAttribute("data-theme") === "dark" ||
      (!root.getAttribute("data-theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    const next = isDark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }
  el.theme?.addEventListener("click", toggle);
  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    if (e.key === "t") toggle();
  });
})();

/* ── status ─────────────────────────────────────────────────────────────── */

function setStatus(text, kind = "ok") {
  el.status.textContent = text;
  const cls = kind === "err" ? "is-err" : kind === "warn" ? "is-warn" : "is-ok";
  for (const node of [el.status, el.statusWrap]) {
    if (!node) continue;
    node.classList.remove("is-ok", "is-warn", "is-err");
    node.classList.add(cls);
  }
}

/* ── load progress bar ──────────────────────────────────────────────────── */

/** Per-file download tracker for multi-shard model loads. */
const loadState = {
  files: new Map(), // file -> { loaded, total, progress }
  phase: "",
};

function formatBytes(n) {
  if (n == null || !Number.isFinite(n) || n < 0) return "";
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

function shortFile(name) {
  if (!name) return "";
  const base = String(name).split("/").pop();
  return base.length > 42 ? base.slice(0, 20) + "…" + base.slice(-18) : base;
}

function showProgress() {
  if (!el.loadProgress) return;
  el.loadProgress.hidden = false;
  el.loadProgress.classList.remove("is-done");
}

function hideProgress(delayMs = 0) {
  if (!el.loadProgress) return;
  const go = () => {
    el.loadProgress.hidden = true;
    el.loadProgress.classList.remove("is-done", "is-indeterminate");
  };
  if (delayMs > 0) setTimeout(go, delayMs);
  else go();
}

function setProgressUI({
  label,
  pct,
  file,
  detail,
  indeterminate = false,
  done = false,
}) {
  if (!el.loadProgress) return;
  showProgress();
  el.loadProgress.classList.toggle("is-indeterminate", !!indeterminate && !done);
  el.loadProgress.classList.toggle("is-done", !!done);

  if (label != null) el.loadLabel.textContent = label;

  const clamped =
    pct == null || !Number.isFinite(pct)
      ? null
      : Math.max(0, Math.min(100, pct));

  if (done) {
    el.loadPct.textContent = "100%";
    el.loadFill.style.width = "100%";
    el.loadBar?.setAttribute("aria-valuenow", "100");
  } else if (indeterminate || clamped == null) {
    el.loadPct.textContent = "…";
    el.loadFill.style.width = "32%";
    el.loadBar?.removeAttribute("aria-valuenow");
  } else {
    const rounded = Math.round(clamped);
    el.loadPct.textContent = `${rounded}%`;
    el.loadFill.style.width = `${clamped}%`;
    el.loadBar?.setAttribute("aria-valuenow", String(rounded));
  }

  if (file != null) el.loadFile.textContent = file;
  if (detail != null) el.loadDetail.textContent = detail;
}

function resetLoadState(phase = "") {
  loadState.files.clear();
  loadState.phase = phase;
}

/** Aggregate transformers.js progress_callback events into one bar. */
function onModelProgress(p) {
  if (!p) return;

  const status = p.status || "";
  const file = p.file || p.name || "";

  if (status === "initiate" || status === "download") {
    if (file && !loadState.files.has(file)) {
      loadState.files.set(file, { loaded: 0, total: p.total || 0, progress: 0 });
    }
    setProgressUI({
      label: loadState.phase || "Downloading LFM2.5",
      file: shortFile(file),
      detail: file ? "starting…" : "",
      indeterminate: loadState.files.size === 0,
      pct: aggregatePct(),
    });
    return;
  }

  if (status === "progress") {
    const loaded = Number(p.loaded) || 0;
    const total = Number(p.total) || 0;
    // Prefer byte ratio; fall back to progress (0–100 or 0–1 depending on version).
    let progress;
    if (total > 0) {
      progress = (loaded / total) * 100;
    } else if (p.progress != null) {
      const raw = Number(p.progress);
      progress = raw >= 0 && raw <= 1 ? raw * 100 : raw;
    } else {
      progress = 0;
    }

    if (file) {
      loadState.files.set(file, {
        loaded,
        total,
        progress: Math.max(0, Math.min(100, progress)),
      });
    }

    const pct = aggregatePct();
    const bytes = aggregateBytes();
    setProgressUI({
      label: loadState.phase || "Downloading LFM2.5",
      pct,
      file: shortFile(file),
      detail: bytes,
      indeterminate: pct == null,
    });
    if (pct != null) {
      setStatus(
        `Loading ${shortModel(chooseModel())}… ${Math.round(pct)}%${file ? " · " + shortFile(file) : ""}`,
        "warn",
      );
    }
    return;
  }

  if (status === "done") {
    if (file) {
      const prev = loadState.files.get(file) || { loaded: 0, total: 0, progress: 0 };
      loadState.files.set(file, {
        loaded: prev.total || prev.loaded,
        total: prev.total || prev.loaded,
        progress: 100,
      });
    }
    const pct = aggregatePct();
    setProgressUI({
      label: loadState.phase || "Downloading LFM2.5",
      pct: pct ?? 100,
      file: shortFile(file),
      detail: file ? "cached" : "",
      indeterminate: false,
    });
    return;
  }

  if (status === "ready") {
    setProgressUI({
      label: "Model ready",
      pct: 100,
      file: "",
      detail: genDevice || "",
      done: true,
    });
  }
}

function aggregatePct() {
  if (!loadState.files.size) return null;
  let weighted = 0;
  let weight = 0;
  let simple = 0;
  let n = 0;
  for (const f of loadState.files.values()) {
    const p = Math.max(0, Math.min(100, f.progress || 0));
    simple += p;
    n++;
    if (f.total > 0) {
      weighted += p * f.total;
      weight += f.total;
    }
  }
  if (weight > 0) return weighted / weight;
  if (n > 0) return simple / n;
  return null;
}

function aggregateBytes() {
  let loaded = 0;
  let total = 0;
  for (const f of loadState.files.values()) {
    loaded += f.loaded || 0;
    total += f.total || 0;
  }
  if (total > 0) return `${formatBytes(loaded)} / ${formatBytes(total)}`;
  if (loaded > 0) return formatBytes(loaded);
  return `${loadState.files.size} file${loadState.files.size === 1 ? "" : "s"}`;
}

async function probeApi() {
  try {
    const res = await fetch("/api/health", { cache: "no-cache" });
    if (!res.ok) throw new Error(String(res.status));
    const h = await res.json();
    apiOk = true;
    const dense = h.dense ? "dense ready" : "dense missing";
    setStatus(
      `server · ${h.passages} passages · ${dense} · gen worker LFM2.5 (WebGPU)`,
      h.dense ? "ok" : "warn",
    );
    return true;
  } catch {
    apiOk = false;
    setStatus("no search API — /rag/ in browser · gen = WebGPU worker", "warn");
    return false;
  }
}

/* ── LFM worker (v4 AutoModel + WebGPU) ─────────────────────────────────── */

function getGenWorker() {
  if (genWorker) return genWorker;
  genWorker = new Worker(new URL("./lfm-worker.js", import.meta.url), {
    type: "module",
  });
  genWorker.onmessage = (e) => onWorkerMessage(e.data || {});
  genWorker.onerror = (err) => {
    console.error("LFM worker error", err);
    setStatus(`Worker error: ${err.message || err}`, "err");
    // Reject any pending load/generate
    for (const [id, w] of workerWaiters) {
      w.reject(new Error(err.message || "Worker failed"));
      workerWaiters.delete(id);
    }
  };
  return genWorker;
}

function onWorkerMessage(msg) {
  const { status } = msg;

  if (status === "progress" && msg.progress) {
    onModelProgress(msg.progress);
    return;
  }

  if (status === "loading") {
    setProgressUI({
      label: `Loading ${shortModel(chooseModel())}`,
      file: msg.data || "",
      detail: "",
      indeterminate: !loadState.files.size,
      pct: aggregatePct(),
    });
    setStatus(msg.data || `Loading ${shortModel(chooseModel())}…`, "warn");
    return;
  }

  if (status === "webgpu-ok") {
    setStatus("WebGPU available", "ok");
    return;
  }

  if (status === "webgpu-fail") {
    setStatus(`WebGPU unavailable: ${msg.error || "no adapter"}`, "warn");
    return;
  }

  if (status === "start") {
    setStatus("Generating…", "warn");
    return;
  }

  if (status === "update") {
    const w = workerWaiters.get("generate");
    if (w?.onUpdate && msg.output != null) w.onUpdate(msg.output);
    return;
  }

  if (status === "ready") {
    genReady = true;
    genDevice = msg.device || "webgpu";
    genDtype = msg.dtype || "q4";
    genModelId = msg.model || chooseModel();
    setProgressUI({
      label: `${shortModel(genModelId)} ready`,
      pct: 100,
      file: "",
      detail: `${genDevice} · ${genDtype}`,
      done: true,
    });
    setStatus(`${shortModel(genModelId)} ready · ${genDevice} · ${genDtype}`, "ok");
    hideProgress(900);
    const w = workerWaiters.get("load");
    if (w) {
      workerWaiters.delete("load");
      w.resolve(msg);
    }
    return;
  }

  if (status === "complete") {
    const w = workerWaiters.get("generate");
    if (w) {
      workerWaiters.delete("generate");
      w.resolve(msg);
    }
    return;
  }

  if (status === "error") {
    const err = new Error(msg.error || msg.raw || "LFM worker error");
    console.error("LFM worker:", msg);
    if (msg.phase === "load") {
      genReady = false;
      hideProgress();
      const w = workerWaiters.get("load");
      if (w) {
        workerWaiters.delete("load");
        w.reject(err);
      }
    } else {
      const w = workerWaiters.get("generate");
      if (w) {
        workerWaiters.delete("generate");
        w.reject(err);
      }
    }
    setStatus(formatError(err), "err");
  }
}

function workerRequest(type, data, { key, onUpdate } = {}) {
  const id = key || type;
  return new Promise((resolve, reject) => {
    if (workerWaiters.has(id)) {
      workerWaiters.get(id).reject(new Error("Superseded"));
      workerWaiters.delete(id);
    }
    workerWaiters.set(id, { resolve, reject, onUpdate });
    getGenWorker().postMessage({ type, data });
  });
}

/** Single-flight: a click during warm-up joins the in-flight load. */
let genLoading = null;
function ensureGenerator() {
  if (genReady) {
    return Promise.resolve({
      device: genDevice,
      dtype: genDtype,
      model: genModelId,
    });
  }
  genLoading ??= loadGenerator().finally(() => {
    genLoading = null;
  });
  return genLoading;
}

/**
 * Load order, and why it is this way.
 *
 * Every LFM2.5 ONNX export quantises the embedding table with
 * GatherBlockQuantized, and onnxruntime-web ships no wasm kernel for that op —
 * q4 and q8 alike fail with "Could not find an implementation" the moment
 * WebGPU is absent. That is what broke generation on tablets: the wasm
 * "fallback" could never have worked. So devices without WebGPU get SmolLM2,
 * whose export runs on wasm; it is markedly weaker, and the tag says which
 * model answered.
 *
 * q4f16 is 243 MB against q4's 280 MB and decodes faster, but needs the
 * WebGPU shader-f16 feature, so q4 stays as the WebGPU fallback.
 */
const WASM_MODEL = "HuggingFaceTB/SmolLM2-135M-Instruct";

function loadAttempts() {
  const dtype = forcedDtype();
  const device = new URLSearchParams(location.search).get("device");
  const model = chooseModel();
  if (dtype || device) {
    return [{ model, device: device || "webgpu", dtype: dtype || "q4" }];
  }
  return [
    { model, device: "webgpu", dtype: "q4f16" },
    { model, device: "webgpu", dtype: "q4" },
    { model: WASM_MODEL, device: "wasm", dtype: "q4" },
  ];
}

async function loadGenerator() {
  const attempts = loadAttempts();

  resetLoadState(`${shortModel(attempts[0].model)} · loading`);
  setProgressUI({
    label: `Loading ${shortModel(attempts[0].model)}`,
    file: "Web Worker · WebGPU q4f16 · first run ~243MB",
    detail: "",
    indeterminate: true,
  });

  let lastErr = null;
  for (const attempt of attempts) {
    const name = shortModel(attempt.model);
    try {
      // Recreate worker between attempts so a poisoned session is dropped
      if (genWorker && lastErr) {
        genWorker.terminate();
        genWorker = null;
        genReady = false;
      }
      resetLoadState(`${name} · ${attempt.device} · ${attempt.dtype}`);
      setProgressUI({
        label: `Loading ${name}`,
        file: `${attempt.device} · ${attempt.dtype}`,
        detail: "",
        indeterminate: true,
      });
      setStatus(`Loading ${name} (${attempt.device}, ${attempt.dtype})…`, "warn");
      await workerRequest("load", {
        modelId: attempt.model,
        device: attempt.device,
        dtype: attempt.dtype,
      }, { key: "load" });
      return { device: genDevice, dtype: genDtype, model: genModelId };
    } catch (err) {
      lastErr = err;
      console.warn(`${name} load failed on ${attempt.device}/${attempt.dtype}:`, err);
      genReady = false;
      setStatus(
        `${name} failed on ${attempt.device} (${formatError(err)}) — trying the next build…`,
        "warn",
      );
    }
  }

  hideProgress();
  genUnavailable = true;
  throw new Error(
    `No generator would load on this device. ${formatError(lastErr)}`,
  );
}

/* ── client corpus (static fallback) ────────────────────────────────────── */

/**
 * The index and the vector matrix are a few MB and change only when the
 * corpus is reindexed, so keep them in the Cache Storage API and serve
 * cache-first. A conditional request revalidates in the background: the
 * current session runs on the cached copy either way, and a changed corpus
 * lands on the next load.
 */
const RAG_CACHE = "ask-rag-v1";
let ragCacheHits = 0;

async function ragCache() {
  // Unavailable in insecure contexts and some private windows.
  if (typeof caches === "undefined") return null;
  try {
    const cache = await caches.open(RAG_CACHE);
    const names = await caches.keys();
    await Promise.all(
      names.filter((n) => n.startsWith("ask-rag-") && n !== RAG_CACHE)
        .map((n) => caches.delete(n)),
    );
    return cache;
  } catch {
    return null;
  }
}

async function revalidate(cache, url, cached) {
  const headers = {};
  const etag = cached.headers.get("etag");
  const lastMod = cached.headers.get("last-modified");
  if (etag) headers["If-None-Match"] = etag;
  else if (lastMod) headers["If-Modified-Since"] = lastMod;
  if (!etag && !lastMod) return;
  try {
    const res = await fetch(url, { headers, cache: "no-cache" });
    if (res.status === 304 || !res.ok) return;
    await cache.put(url, res.clone());
    setStatus("Corpus index updated — reload to use it", "warn");
  } catch {
    /* offline: the cached copy stands */
  }
}

/** Cache-first fetch with optional byte progress on a cold download. */
async function fetchRag(url, label) {
  const cache = await ragCache();
  const hit = cache ? await cache.match(url) : null;
  if (hit) {
    ragCacheHits++;
    revalidate(cache, url, hit);
    return hit;
  }

  const res = await fetch(url);
  if (!res.ok) return res;
  if (cache) await cache.put(url, res.clone());

  // Stream the copy we return so the bar moves on the first (cold) load.
  const total = Number(res.headers.get("content-length")) || 0;
  if (!total || !res.body) return res;
  resetLoadState(label);
  let loaded = 0;
  const reader = res.body.getReader();
  const chunks = [];
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    loaded += value.length;
    setProgressUI({
      label,
      pct: (loaded / total) * 100,
      file: url,
      detail: `${formatBytes(loaded)} / ${formatBytes(total)}`,
    });
  }
  hideProgress();
  return new Response(new Blob(chunks), { headers: res.headers });
}

let corpusLoading = null;
function ensureClientCorpus() {
  if (clientIndex && clientMatrix) return Promise.resolve();
  corpusLoading ??= loadClientCorpus().finally(() => {
    corpusLoading = null;
  });
  return corpusLoading;
}

async function loadClientCorpus() {
  setStatus("Loading corpus index…", "warn");
  const indexRes = await fetchRag("/rag/index.json", "Corpus index");
  if (!indexRes.ok) {
    throw new Error(
      "No /rag/index.json. Run: node tools/rag.mjs reindex && npm run ask",
    );
  }
  clientIndex = await indexRes.json();
  if (!clientIndex.chunks?.[0]?.tokens) {
    throw new Error("Index missing tokens — rebuild with node tools/rag.mjs reindex");
  }

  setStatus("Loading corpus vectors…", "warn");
  const vecRes = await fetchRag("/rag/vectors.bin", "Corpus vectors");
  if (!vecRes.ok) {
    throw new Error("No /rag/vectors.bin. Run: node tools/embed.mjs");
  }
  const buf = await vecRes.arrayBuffer();
  clientMatrix = new Float32Array(buf);
  clientDim = EMBED_DIM;
  const expected = clientIndex.N * clientDim;
  if (clientMatrix.length < expected) {
    throw new Error(
      `vectors.bin short: ${clientMatrix.length} < ${expected}`,
    );
  }
  setStatus(
    `browser · ${clientIndex.N} passages${ragCacheHits >= 2 ? " (cached)" : ""} · hybrid ready · gen ${shortModel(chooseModel())}`,
    "ok",
  );
}

let _tfjs = null;
async function loadTransformers() {
  if (_tfjs) return _tfjs;
  _tfjs = await import(TFJS_CDN);
  // Keep MiniLM's weights in the browser cache across visits (the default,
  // stated explicitly so it survives a library upgrade changing it).
  if (_tfjs.env) _tfjs.env.useBrowserCache = true;
  return _tfjs;
}

/** Turn ORT/WebGPU numeric throws into something readable. */
function formatError(err) {
  if (err == null) return "Unknown error";
  if (typeof err === "number") {
    return (
      `Runtime error ${err}` +
      (err === 10290344 || err > 1e6
        ? " — usually WebGPU OOM or an unsupported op. Retrying on WASM or shortening context often fixes it."
        : "")
    );
  }
  if (typeof err === "string") return err;
  const bits = [];
  if (err.message) bits.push(err.message);
  else if (err.name) bits.push(err.name);
  if (err.code != null && String(err.code) !== err.message) {
    bits.push(`code ${err.code}`);
  }
  if (err.cause) bits.push(formatError(err.cause));
  // Some ORT builds put the real code only on stack / toString
  const raw = String(err);
  if (bits.length === 0) return raw;
  const msg = bits.join(" · ");
  if (/^\d+$/.test(msg.trim())) {
    return formatError(Number(msg.trim()));
  }
  return msg;
}

let embedderLoading = null;
function ensureEmbedder() {
  if (embedder) return Promise.resolve(embedder);
  embedderLoading ??= loadEmbedder().finally(() => {
    embedderLoading = null;
  });
  return embedderLoading;
}

async function loadEmbedder() {
  setStatus(`Loading query embedder (${EMBED_MODEL})…`, "warn");
  const { pipeline } = await loadTransformers();
  embedder = await pipeline("feature-extraction", EMBED_MODEL, {
    dtype: "fp32",
    device: (await hasWebGPU()) ? "webgpu" : "wasm",
  });
  return embedder;
}

async function embedQuery(text) {
  const ext = await ensureEmbedder();
  const truncated = text.length > 2000 ? text.slice(0, 2000) : text;
  const tensor = await ext(truncated, { pooling: "mean", normalize: true });
  const data = tensor.data ?? tensor;
  const arr = data instanceof Float32Array ? data : Float32Array.from(data);
  if (arr.length === EMBED_DIM) return arr;
  if (arr.length > EMBED_DIM) return arr.slice(arr.length - EMBED_DIM);
  throw new Error(`Unexpected embed dim ${arr.length}`);
}

async function hasWebGPU() {
  try {
    if (!navigator.gpu) return false;
    const adapter = await navigator.gpu.requestAdapter();
    return !!adapter;
  } catch {
    return false;
  }
}

/* ── retrieval ──────────────────────────────────────────────────────────── */

async function searchApi(query, method, k) {
  const res = await fetch("/api/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, method, k }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `search ${res.status}`);
  return data;
}

async function searchClient(query, method, k) {
  await ensureClientCorpus();
  // Dual-vocab expansion for dense (BM25 expands inside retrieveBm25)
  const qRet = expandQuery(query);
  if (method === "bm25") {
    return {
      query,
      method,
      hits: retrieveBm25(clientIndex, query, k).map((h) => ({
        ...h,
        score: Math.round(h.score * 1000) / 1000,
      })),
    };
  }
  const queryVec = await embedQuery(qRet);
  if (method === "dense") {
    return {
      query,
      method,
      hits: retrieveDense(clientIndex, queryVec, clientMatrix, clientDim, k).map(
        (h) => ({ ...h, score: Math.round(h.score * 1000) / 1000 }),
      ),
    };
  }
  return {
    query,
    method: "hybrid",
    hits: retrieveHybrid(
      clientIndex,
      query,
      clientMatrix,
      clientDim,
      queryVec,
      k,
    ),
  };
}

async function search(query, method, k) {
  if (apiOk) {
    try {
      return await searchApi(query, method, k);
    } catch (err) {
      console.warn("API search failed, falling back to client:", err);
      apiOk = false;
    }
  }
  return searchClient(query, method, k);
}

/* ── generation prompts ─────────────────────────────────────────────────── */

/**
 * Keep this short — LFM2.5-350M follows long rule lists poorly and starts
 * talking about "the excerpts" or writing literal "[n]" placeholders.
 */
/** Used when the corpus has nothing on the question and we say so. */
const GENERAL_SYSTEM_PROMPT = `You are a concise, helpful assistant. Answer the user's question directly in 2-4 plain sentences. If you do not know, say so rather than guessing. Never use bracket citations or reference numbers.`;

const SYSTEM_PROMPT = `You are a concise analyst. Answer the user's question using only the sources below. Write 2-5 plain sentences of prose. Never use bracket citations or reference numbers of any kind — no [1], no [2], no [n]. Never invent facts. Never discuss the sources themselves ("the excerpts say…", "the documents discuss…"). Start directly with the answer.`;

/** Soft floor so generation is not dominated by weak tail hits. */
function selectContextHits(hits, max = 6) {
  if (!hits?.length) return [];
  const top = hits[0].score || 0;
  const floor = top > 0 ? top * 0.4 : 0;
  const out = [];
  const seen = new Set();
  for (const h of hits) {
    if (out.length >= max) break;
    if (seen.has(h.path)) continue;
    if (out.length > 0 && top > 0 && (h.score || 0) < floor) continue;
    seen.add(h.path);
    out.push(h);
  }
  return out.length ? out : hits.slice(0, Math.min(max, hits.length));
}

function buildUserPrompt(query, hits, mode = "answer", web = []) {
  // No corpus context: a plain question for the model to answer on its own.
  if (mode === "general") {
    return `Question: ${query}

Answer in 2-4 sentences of plain prose from your own knowledge. If you are not sure, say so plainly. Do not invent citations or references.`;
  }

  // Web snippets are short; give the corpus most of the budget.
  const packed = selectContextHits(hits, web.length ? 4 : 5);
  const parts = [];
  let used = 0;
  for (let i = 0; i < packed.length; i++) {
    const h = packed[i];
    const loc = h.path + (h.heading ? " · " + h.heading : "");
    const header = `Source ${i + 1} — ${loc}\n`;
    const budget = MAX_CONTEXT_CHARS - used - header.length - 8;
    if (budget < 100) break;
    let body = h.text || "";
    if (body.length > budget) body = body.slice(0, budget - 1) + "…";
    parts.push(header + body);
    used += header.length + body.length + 8;
  }

  // Web snippets go in their own block, labelled, so the model (and anyone
  // reading the trace) can tell corpus claims from things found on the web.
  for (const r of web.slice(0, 3)) {
    const line = `Web — ${r.domain}: ${r.title}. ${r.snippet || ""}`;
    if (used + line.length > MAX_CONTEXT_CHARS) break;
    parts.push(line.slice(0, 400));
    used += Math.min(line.length, 400);
  }

  // Put the instruction last (recency helps small models stay on task).
  if (mode === "highlight") {
    return `Sources:
${parts.join("\n\n")}

Pick the single most striking claim in the sources and explain it in 2-4 sentences of plain prose: what it claims and the mechanism behind it. Be specific and concrete. State the claim directly — do not open with "the most striking claim is". Do not use bracket citations such as [1] or [2]. Do not mention "excerpts" or "sources" as a topic. Start with the claim itself:`;
  }

  return `Sources:
${parts.join("\n\n")}

Question: ${query}

Answer the question in 2-5 sentences of plain prose using the sources. Do not use bracket citations such as [1] or [2]. Do not mention "excerpts" or "sources" as a topic. Start with the answer:`;
}

/** Clean common 350M failure modes in the streamed answer. */
function cleanGeneratedAnswer(text) {
  let t = String(text || "").trim();
  // Strip every bracket citation — the UI shows sources in their own column.
  t = t.replace(/\s*\[\s*(?:\d+|n)\s*\]/gi, "");
  // Meta openers the small model loves
  t = t.replace(
    /^(Based on (the )?(excerpts?|sources?|documents?|corpus)[^.]*\.\s*)+/i,
    "",
  );
  t = t.replace(
    /^(The (excerpts?|sources?|documents?) (primarily |mainly )?(discuss|describe|highlight|mention)[^.]*\.\s*)+/i,
    "",
  );
  // Highlight-mode preamble: "The most striking claim is that X" → "X"
  t = t.replace(
    /^((the|one|a) (most |single most )?(striking|notable|interesting) claim (here )?is( that)?)[:,]?\s*/i,
    "",
  );
  t = t.replace(/\s+/g, " ").trim();
  // Tidy the gaps a removed citation leaves behind
  t = t.replace(/\s+([,.;:!?])/g, "$1");
  t = t.replace(/^[\s,.;:—-]+/, "");
  if (t) t = t[0].toUpperCase() + t.slice(1);
  return t;
}

async function generateAnswer(query, hits, onToken, mode = "answer", web = []) {
  if (!hits.length && mode !== "general") {
    return {
      text: "No relevant passages found in the corpus for that query.",
      model: null,
    };
  }

  await ensureGenerator();

  // Reset worker multi-turn state between independent asks
  try {
    getGenWorker().postMessage({ type: "reset" });
  } catch {
    /* worker not up yet — ensureGenerator will create it */
  }

  const messages = [
    {
      role: "system",
      content: mode === "general" ? GENERAL_SYSTEM_PROMPT : SYSTEM_PROMPT,
    },
    { role: "user", content: buildUserPrompt(query, hits, mode, web) },
  ];

  const runOnce = () =>
    workerRequest(
      "generate",
      { messages, max_new_tokens: MAX_NEW_TOKENS },
      {
        key: "generate",
        onUpdate: (partial) => onToken?.(cleanGeneratedAnswer(partial) || partial),
      },
    );

  try {
    const result = await runOnce();
    const text = cleanGeneratedAnswer(result.output) || "(empty)";
    onToken?.(text);
    return {
      text,
      model: `${result.model || genModelId} · ${result.device || genDevice || "webgpu"}`,
    };
  } catch (err) {
    if (genDevice !== "webgpu") throw new Error(formatError(err));

    // WebGPU decoded OK at load but failed mid-generate — hard switch to wasm.
    // LFM2.5 cannot run there (quantised embeddings), so this is SmolLM2 too.
    setStatus(`${formatError(err)} — reloading on WASM…`, "warn");
    genReady = false;
    if (genWorker) {
      genWorker.terminate();
      genWorker = null;
    }
    resetLoadState(`${shortModel(WASM_MODEL)} · wasm · q4`);
    setProgressUI({
      label: `Loading ${shortModel(WASM_MODEL)} on WASM`,
      file: "webgpu generate failed",
      detail: "",
      indeterminate: true,
    });
    await workerRequest(
      "load",
      { modelId: WASM_MODEL, device: "wasm", dtype: "q4" },
      { key: "load" },
    );
    const result = await runOnce();
    const text = cleanGeneratedAnswer(result.output) || "(empty)";
    onToken?.(text);
    return {
      text,
      model: `${result.model || genModelId} · wasm (fallback)`,
    };
  }
}

/* ── render ─────────────────────────────────────────────────────────────── */

function mdToHref(mdPath) {
  let html;
  if (mdPath === "README.md") html = "../";
  else if (mdPath.endsWith("/README.md")) {
    html = "../" + mdPath.slice(0, -"README.md".length);
  } else {
    html = "../" + mdPath.replace(/\.md$/, ".html");
  }
  return html;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Lightweight markdown → HTML for corpus excerpts (tables, lists, emphasis). */
function renderMarkdown(src) {
  if (!src) return "";
  const text = String(src).replace(/\r\n/g, "\n");
  const lines = text.split("\n");
  const out = [];
  let i = 0;

  const inline = (s) => {
    let t = escapeHtml(s);
    // code
    t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
    // bold / italic
    t = t.replace(/\*\*\*((?:[^*]|\*(?!\*))+?)\*\*\*/g, "<strong><em>$1</em></strong>");
    t = t.replace(/\*\*((?:[^*]|\*(?!\*))+?)\*\*/g, "<strong>$1</strong>");
    t = t.replace(/(^|[^*\w])\*([^*\n]+)\*(?![*\w])/g, "$1<em>$2</em>");
    // links [text](url) — internal .md → site paths
    t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
      let h = href.trim();
      if (h.endsWith(".md") || h.includes(".md#") || h.endsWith("/")) {
        // leave relative as plain text if not resolvable from root
        return `<span class="md-linkish">${label}</span>`;
      }
      if (/^https?:\/\//i.test(h)) {
        return `<a href="${escapeHtml(h)}" rel="noopener noreferrer" target="_blank">${label}</a>`;
      }
      return `<span class="md-linkish">${label}</span>`;
    });
    return t;
  };

  const isTableSep = (line) =>
    /^\s*\|?[\s:|-]*-[\s:|-]*\|?/.test(line) && line.includes("-");
  const splitRow = (line) =>
    line
      .replace(/^\s*\|/, "")
      .replace(/\|\s*$/, "")
      .split("|")
      .map((c) => c.trim());

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    // fenced code
    if (/^```/.test(line)) {
      const buf = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
      i++;
      out.push(`<pre><code>${escapeHtml(buf.join("\n"))}</code></pre>`);
      continue;
    }

    // table
    if (
      line.includes("|") &&
      i + 1 < lines.length &&
      isTableSep(lines[i + 1])
    ) {
      const head = splitRow(line);
      i += 2;
      const body = [];
      while (i < lines.length && lines[i].includes("|") && lines[i].trim()) {
        body.push(splitRow(lines[i++]));
      }
      const th = head.map((c) => `<th>${inline(c)}</th>`).join("");
      const rows = body
        .map(
          (r) =>
            "<tr>" + r.map((c) => `<td>${inline(c)}</td>`).join("") + "</tr>",
        )
        .join("");
      out.push(
        `<div class="md-table"><table><thead><tr>${th}</tr></thead><tbody>${rows}</tbody></table></div>`,
      );
      continue;
    }

    // headings
    const hm = line.match(/^(#{1,4})\s+(.*)$/);
    if (hm) {
      const lvl = Math.min(hm[1].length + 2, 5); // h3–h5 inside card
      out.push(`<h${lvl} class="md-h">${inline(hm[2])}</h${lvl}>`);
      i++;
      continue;
    }

    // blockquote
    if (/^\s{0,3}>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^\s{0,3}>\s?/.test(lines[i])) {
        buf.push(lines[i].replace(/^\s{0,3}>\s?/, ""));
        i++;
      }
      out.push(`<blockquote>${inline(buf.join(" "))}</blockquote>`);
      continue;
    }

    // lists
    if (/^\s*[-*+]\s+/.test(line) || /^\s*\d+[.)]\s+/.test(line)) {
      const ordered = /^\s*\d+[.)]\s+/.test(line);
      const items = [];
      while (i < lines.length) {
        const m = lines[i].match(
          ordered ? /^\s*\d+[.)]\s+(.*)$/ : /^\s*[-*+]\s+(.*)$/,
        );
        if (!m) break;
        items.push(`<li>${inline(m[1])}</li>`);
        i++;
      }
      out.push(
        ordered ? `<ol>${items.join("")}</ol>` : `<ul>${items.join("")}</ul>`,
      );
      continue;
    }

    // paragraph (merge wrapped lines)
    const buf = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^#{1,4}\s/.test(lines[i]) &&
      !/^\s{0,3}>\s?/.test(lines[i]) &&
      !/^\s*[-*+]\s+/.test(lines[i]) &&
      !/^\s*\d+[.)]\s+/.test(lines[i]) &&
      !/^```/.test(lines[i]) &&
      !(lines[i].includes("|") && isTableSep(lines[i + 1] || ""))
    ) {
      buf.push(lines[i++]);
    }
    out.push(`<p>${inline(buf.join(" "))}</p>`);
  }

  return out.join("") || `<p>${inline(text)}</p>`;
}

/** "02-games/4-labor.md" → "02 games" — the corpus section, as a kicker. */
function sectionOf(path) {
  const dir = String(path || "").split("/")[0] || "";
  return dir.replace(/\.md$/, "").replace(/[-_]/g, " ");
}

/** First couple of lines of a passage as plain text, for the collapsed card. */
function previewOf(text) {
  return String(text || "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*[-*+>|]\s*/gm, "")
    .replace(/[*_`\[\]]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 220);
}

function renderHits(hits, method) {
  const scoreLabel =
    method === "hybrid" ? "rrf" : method === "dense" ? "cos" : "bm25";
  el.hitsTag.textContent = hits.length ? `${hits.length} · ${method}` : "";
  el.hitsEmpty.hidden = hits.length > 0;
  if (el.toggleHits) {
    el.toggleHits.hidden = hits.length === 0;
    el.toggleHits.textContent = "Expand";
    el.toggleHits.setAttribute("aria-expanded", "false");
  }

  const top = hits[0]?.score || 0;
  el.hits.innerHTML = hits
    .map((h, i) => {
      const loc =
        h.heading && h.heading !== h.title
          ? `${escapeHtml(h.title)} · ${escapeHtml(h.heading)}`
          : escapeHtml(h.title || h.path);
      const tags = [];
      if (h.methods?.length) tags.push(h.methods.join("+"));
      if (h.bm25 != null) tags.push(`bm25=${h.bm25}`);
      if (h.dense != null) tags.push(`cos=${h.dense}`);
      const pct = top > 0 ? Math.max(4, Math.round(((h.score || 0) / top) * 100)) : 0;
      return `<li>
        <details class="hit">
          <summary>
            <span class="hit-n">${i + 1}</span>
            <span class="hit-kicker">${escapeHtml(sectionOf(h.path))}</span>
            <a class="hit-title" href="${escapeHtml(mdToHref(h.path))}">${loc}</a>
            <span class="hit-score">${scoreLabel} ${h.score}</span>
            <span class="hit-preview">${escapeHtml(previewOf(h.text))}</span>
            <span class="hit-sub">
              <span class="hit-path">${escapeHtml(h.path)}</span>
              ${tags.length ? `<span class="hit-tags">${escapeHtml(tags.join(" · "))}</span>` : ""}
            </span>
            <span class="hit-meter"><span style="width:${pct}%"></span></span>
          </summary>
          <div class="hit-body">
            <div class="hit-text md-body">${renderMarkdown(h.text)}</div>
            <a class="hit-open" href="${escapeHtml(mdToHref(h.path))}">Open page →</a>
          </div>
        </details>
      </li>`;
    })
    .join("");
}

/* ── web search (DuckDuckGo Lite via same-origin proxy) ─────────────────── */

/**
 * DuckDuckGo sends no CORS headers, so the browser cannot call it directly;
 * /api/websearch on this origin fetches and parses Lite's HTML. Without that
 * route (a plain static host) the feature reports itself unavailable rather
 * than failing silently.
 */
async function webSearch(query, n = 5) {
  const res = await fetch(
    `/api/websearch?q=${encodeURIComponent(query)}&n=${n}`,
    { headers: { Accept: "application/json, text/html" } },
  );
  if (res.status === 404) {
    throw Object.assign(new Error("No web search proxy on this host"), {
      code: "NO_PROXY",
    });
  }
  if (!res.ok) {
    const body = await res.clone().json().catch(() => ({}));
    throw new Error(body.error || `Web search failed (${res.status})`);
  }

  // The ask server returns parsed JSON; a bare Caddy reverse_proxy hands back
  // DuckDuckGo's own HTML, so handle both.
  const type = res.headers.get("content-type") || "";
  if (type.includes("json")) return (await res.json()).results || [];
  return parseLiteHtml(await res.text(), n);
}

/** DDG wraps every href in /l/?uddg=<target>; sponsored ones go via y.js. */
function unwrapDdg(href) {
  const m = /[?&]uddg=([^&]+)/.exec(href || "");
  if (!m) return href?.startsWith("//") ? `https:${href}` : href || "";
  try {
    return decodeURIComponent(m[1]);
  } catch {
    return href;
  }
}

const IS_AD = /(^|\/)y\.js|[?&]ad_(domain|provider|type)=|bing\.com\/aclick/i;

function parseLiteHtml(html, limit) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const nodes = doc.querySelectorAll(".result-link, .result-snippet");
  const out = [];
  let pending = null;
  for (const node of nodes) {
    if (node.classList.contains("result-link")) {
      if (pending) out.push(pending);
      const url = unwrapDdg(node.getAttribute("href"));
      pending = IS_AD.test(url)
        ? null
        : {
            title: node.textContent.trim(),
            url,
            domain: (() => {
              try {
                return new URL(url).hostname.replace(/^www\./, "");
              } catch {
                return "web";
              }
            })(),
            snippet: "",
          };
    } else if (pending) {
      pending.snippet = node.textContent.replace(/\s+/g, " ").trim();
      out.push(pending);
      pending = null;
    }
    if (out.length >= limit) break;
  }
  if (pending && out.length < limit) out.push(pending);
  return out.filter((r) => r.url && r.title);
}

function renderWebHits(results) {
  const has = results.length > 0;
  el.webHead.hidden = !has;
  el.webHits.hidden = !has;
  el.webTag.textContent = has ? `${results.length} · duckduckgo` : "";
  el.webHits.innerHTML = results
    .map(
      (r, i) => `<li>
        <details class="hit">
          <summary>
            <span class="hit-n">w${i + 1}</span>
            <span class="hit-kicker">${escapeHtml(r.domain || "web")}</span>
            <a class="hit-title" href="${escapeHtml(r.url)}"
               rel="noopener noreferrer" target="_blank">${escapeHtml(r.title)}</a>
            <span class="hit-preview">${escapeHtml(r.snippet || "")}</span>
          </summary>
          <div class="hit-body">
            <div class="hit-text">${escapeHtml(r.snippet || "")}</div>
            <a class="hit-open" href="${escapeHtml(r.url)}"
               rel="noopener noreferrer" target="_blank">Open ${escapeHtml(r.domain || "link")} →</a>
          </div>
        </details>
      </li>`,
    )
    .join("");
}

function clearWebHits() {
  el.webHead.hidden = true;
  el.webHits.hidden = true;
  el.webHits.innerHTML = "";
}

function showHitsSkeleton(n = 4) {
  el.hitsEmpty.hidden = true;
  if (el.toggleHits) el.toggleHits.hidden = true;
  el.hitsTag.textContent = "retrieving…";
  el.hits.innerHTML = Array.from(
    { length: n },
    () =>
      `<li class="skeleton"><div class="skeleton-line"></div><div class="skeleton-line"></div><div class="skeleton-line"></div></li>`,
  ).join("");
}

/* ── activity trace ─────────────────────────────────────────────────────── */

/**
 * A running log of what the pipeline actually did — query expansion, each
 * retriever, the fusion, the decode — with timings. Retrieval here is several
 * stages deep, and without this the only feedback is a spinner.
 */
const activity = {
  t0: 0,
  current: null,

  reset() {
    this.t0 = performance.now();
    this.current = null;
    el.activity.innerHTML = "";
    el.activityEmpty.hidden = true;
    el.activityTag.textContent = "";
  },

  /** Open a step; it stays "running" until step()/done()/fail() is called. */
  step(text, { sub = false } = {}) {
    this.settle();
    const li = document.createElement("li");
    li.className = `is-running${sub ? " is-sub" : ""}`;
    li.innerHTML = `<span class="act-mark">▸</span><span class="act-text"></span><span class="act-time"></span>`;
    li.querySelector(".act-text").textContent = text;
    el.activity.appendChild(li);
    el.activityEmpty.hidden = true;
    this.current = li;
    this.tick();
    return li;
  },

  /** Mark the open step finished, optionally rewriting its label. */
  settle(text) {
    if (!this.current) return;
    const li = this.current;
    li.classList.remove("is-running");
    li.classList.add("is-done");
    li.querySelector(".act-mark").textContent = "✓";
    if (text) li.querySelector(".act-text").textContent = text;
    li.querySelector(".act-time").textContent = fmtSecs(
      performance.now() - this.t0,
    );
    this.current = null;
  },

  fail(text) {
    const li = this.current || this.step(text);
    li.classList.remove("is-running", "is-done");
    li.classList.add("is-fail");
    li.querySelector(".act-mark").textContent = "✕";
    if (text) li.querySelector(".act-text").textContent = text;
    this.current = null;
    this.tick();
  },

  done(text = "Done") {
    this.settle();
    const li = this.step(text);
    li.classList.remove("is-running");
    li.classList.add("is-done");
    li.querySelector(".act-mark").textContent = "✓";
    li.querySelector(".act-time").textContent = fmtSecs(
      performance.now() - this.t0,
    );
    this.current = null;
    this.tick();
  },

  tick() {
    el.activityTag.textContent = fmtSecs(performance.now() - this.t0);
  },
};

function fmtSecs(ms) {
  const s = ms / 1000;
  return s < 10 ? `${s.toFixed(1)}s` : `${Math.round(s)}s`;
}

/* ── chat transcript ────────────────────────────────────────────────────── */

/** The assistant bubble currently being written to. */
let currentBot = null;

function clockLabel() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * Wide layout scrolls the transcript inside its own column (the composer is
 * pinned to the viewport); narrow layout scrolls the page. Follow whichever
 * one is live.
 */
function scrollHost() {
  const log = el.chatLog;
  return log && log.scrollHeight > log.clientHeight + 4 ? log : null;
}

function atBottom() {
  const host = scrollHost();
  if (host) {
    return host.scrollTop + host.clientHeight >= host.scrollHeight - 160;
  }
  return (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 160
  );
}

function scrollToLatest(force = false) {
  if (!force && !atBottom()) return;
  requestAnimationFrame(() => {
    const host = scrollHost();
    if (host) {
      host.scrollTo({ top: host.scrollHeight, behavior: "smooth" });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  });
}

function appendRow(kind, author, avatar) {
  el.chatEmpty?.remove();
  const li = document.createElement("li");
  li.className = `msg-row is-${kind}`;
  li.innerHTML = `
    <div class="msg-avatar" aria-hidden="true">${avatar}</div>
    <div class="msg-body">
      <div class="msg-head">
        <span class="msg-author">${author}</span>
        <span class="msg-time">${clockLabel()}</span>
      </div>
      <div class="msg-content"></div>
    </div>`;
  el.chatLog.appendChild(li);
  return li;
}

function appendUserMessage(text) {
  const row = appendRow("user", "You", "YOU");
  row.querySelector(".msg-content").textContent = text;
  scrollToLatest(true);
  return row;
}

/** Open an assistant bubble; subsequent renderAnswer() calls fill it. */
function startBotMessage(label = "thinking") {
  const row = appendRow("bot", "Corpus", "▚");
  const content = row.querySelector(".msg-content");
  content.innerHTML = `<span class="thinking"><span>·</span><span>·</span><span>·</span></span>`;

  const foot = document.createElement("div");
  foot.className = "msg-foot";
  foot.innerHTML = `<span class="tag"></span>`;
  row.querySelector(".msg-body").appendChild(foot);

  currentBot = { row, content, foot, tag: foot.querySelector(".tag") };
  currentBot.tag.textContent = label;
  scrollToLatest(true);
  return currentBot;
}

function renderAnswer(text, model, streaming) {
  if (!currentBot) startBotMessage();
  currentBot.row.classList.toggle("is-streaming", !!streaming);
  currentBot.tag.textContent = model || "";
  if (text) {
    currentBot.content.innerHTML = `<div class="md-body">${renderMarkdown(text)}</div>`;
  }
  scrollToLatest();
}

/** Finish the current bubble: stop the caret, add a copy affordance. */
function endBotMessage({ text, model, sources } = {}) {
  if (!currentBot) return;
  currentBot.row.classList.remove("is-streaming");
  if (model != null) currentBot.tag.textContent = model;

  if (sources != null) {
    const s = document.createElement("button");
    s.type = "button";
    s.className = "btn-icon";
    s.textContent = `${sources} source${sources === 1 ? "" : "s"}`;
    s.addEventListener("click", showPanel);
    currentBot.foot.appendChild(s);
  }
  if (text) {
    const copy = document.createElement("button");
    copy.type = "button";
    copy.className = "btn-icon";
    copy.textContent = "Copy";
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(text);
        copy.textContent = "Copied";
        setTimeout(() => (copy.textContent = "Copy"), 1200);
      } catch {
        copy.textContent = "Failed";
      }
    });
    currentBot.foot.appendChild(copy);
  }
  currentBot = null;
}

function setBusy(on) {
  busy = on;
  el.go.disabled = on;
  el.retrieveOnly.disabled = on;
  el.loadModel.disabled = on;
  el.go.textContent = on ? "…" : "Ask";
}

/* ── input triage ───────────────────────────────────────────────────────── */

const SMALL_TALK =
  /^(hi|hey+|hello|yo|sup|hola|howdy|good (morning|afternoon|evening)|thanks?|thank you|ty|ok(ay)?|cool|nice|test(ing)?|ping|\?+|help)[\s!.?]*$/i;

/** Greetings retrieve eight arbitrary passages and get an essay back. */
function isSmallTalk(q) {
  return SMALL_TALK.test(q.trim());
}

/**
 * "Tell me something interesting" is a real request with no topical anchor,
 * so retrieval scores it like noise. Route it to a topic instead of refusing.
 */
const OPEN_ENDED =
  /\b(tell me (something|anything)|something interesting|anything interesting|surprise me|what('s| is) interesting|what should i (know|read|ask)|where (do|should) i start|give me (something|an example)|what('s| is) (this|it) about|what does (this|it) say|summar(y|ise|ize)|overview|tl;?dr|random|pick (one|something))\b/i;

function isOpenEnded(q) {
  return OPEN_ENDED.test(q);
}

/** Real topics from the corpus, so the seed retrieval lands somewhere good. */
const HIGHLIGHT_SEEDS = [
  "the master asymmetry in data",
  "energy is the constraint that bites before capital",
  "inference economics and the two-year moat",
  "labs as a Tullock contest, not a prisoner's dilemma",
  "comparative advantage does not guarantee a wage",
  "the collapse of costly signaling",
  "the apprenticeship gap and junior hiring",
  "insurance prices the whole transition",
  "state capacity as the precondition for governance",
  "Taiwan and leading-edge fabrication",
  "robotics cost curves and the economic threshold",
  "verification and trust as the scarce input",
  "the Global South and the missing complements",
  "cheap founding and expensive moats",
  "the Red Queen: adoption does not mean profit",
  "nations as a security dilemma with a leaky bucket",
];

let lastSeed = -1;
function pickSeed() {
  let i = lastSeed;
  while (i === lastSeed && HIGHLIGHT_SEEDS.length > 1) {
    i = Math.floor(Math.random() * HIGHLIGHT_SEEDS.length);
  }
  lastSeed = i;
  return HIGHLIGHT_SEEDS[i];
}

const SMALL_TALK_REPLY =
  "I answer questions about the forecast corpus — the games, domains, timelines, probabilities and indicators on this site. Ask me something like *why juniors stop getting hired*, *will energy or capital bind first*, or *what happens if Taiwan fabs fail*.";

/* ── actions ────────────────────────────────────────────────────────────── */

async function run({ withGenerate }) {
  if (busy) return;
  const query = el.q.value.trim();
  if (!query) {
    el.q.focus();
    return;
  }
  const method = el.method.value;
  const k = Number(el.k.value) || 8;

  setBusy(true);
  appendUserMessage(query);
  el.q.value = "";
  autoGrow();
  updateCount();

  if (isSmallTalk(query)) {
    startBotMessage("");
    renderAnswer(SMALL_TALK_REPLY, "no retrieval", false);
    endBotMessage({});
    activity.reset();
    activity.step("Greeting — skipped retrieval");
    activity.settle();
    setStatus("Ready", "ok");
    setBusy(false);
    el.q.focus();
    return;
  }

  // An open-ended ask has no topic to retrieve on, so give it one.
  const openEnded = isOpenEnded(query);
  const seed = openEnded ? pickSeed() : query;

  startBotMessage("retrieving…");
  clearWebHits();
  showHitsSkeleton(Math.min(k, 5));
  setStatus("Retrieving…", "warn");

  activity.reset();
  if (openEnded) {
    activity.step(`Open-ended — picking a topic: ${seed}`);
    activity.settle();
  }
  activity.step(
    method === "hybrid"
      ? "BM25 + dense → RRF"
      : method === "dense"
        ? "Dense · MiniLM 384-d"
        : "BM25 · exact terms",
  );

  const started = performance.now();

  try {
    const result = await search(seed, method, k);
    renderHits(result.hits, result.method);
    const where = apiOk ? "server" : "browser";
    activity.settle(`Retrieved ${result.hits.length} passages · ${where}`);
    const files = new Set(result.hits.map((h) => h.path)).size;
    activity.step(`${files} file${files === 1 ? "" : "s"} matched`, { sub: true });
    activity.settle();
    setStatus(
      `Retrieved ${result.hits.length} · ${result.method} · ${where}`,
      "ok",
    );

    // Optional, off by default: this is the one step that leaves the machine.
    let web = [];
    if (el.websearch?.checked) {
      activity.step("DuckDuckGo Lite");
      try {
        web = await webSearch(seed, 5);
        renderWebHits(web);
        activity.settle(`Web · ${web.length} result${web.length === 1 ? "" : "s"}`);
      } catch (err) {
        clearWebHits();
        activity.fail(
          err.code === "NO_PROXY"
            ? "Web search needs the ask server (no proxy here)"
            : `Web search: ${formatError(err)}`,
        );
      }
    }

    // Generation already proved impossible here — answer with retrieval and
    // say so once, rather than failing the same way on every ask.
    if (withGenerate && genUnavailable) {
      const secs = ((performance.now() - started) / 1000).toFixed(1);
      activity.step("Generation unavailable on this device");
      activity.settle();
      renderAnswer(
        `This browser cannot run the answer model — it needs WebGPU, or a wasm build the runtime supports. Retrieval still works: the ${result.hits.length} best passages for that question are in **Sources**.`,
        `retrieval only · ${secs}s`,
        false,
      );
      endBotMessage({ sources: result.hits.length });
      setStatus("Retrieval only — no generator on this device", "warn");
      return;
    }

    if (!withGenerate) {
      const secs = ((performance.now() - started) / 1000).toFixed(1);
      if (web.length) {
        renderAnswer(
          `Retrieved ${result.hits.length} passages and ${web.length} web results — see **Sources**.`,
          `${result.method} · web · ${secs}s`,
          false,
        );
        endBotMessage({ sources: result.hits.length + web.length });
        return;
      }
      renderAnswer(
        result.hits.length
          ? `Retrieved ${result.hits.length} passages — see **Sources**.`
          : "Nothing in the corpus matched that query.",
        `${result.method} · ${secs}s`,
        false,
      );
      endBotMessage({ sources: result.hits.length });
      return;
    }

    // Always answer from whatever retrieval actually matched, however loosely
    // ranked — a weak-match refusal is worse than a grounded best effort, and
    // the passages are shown alongside so the reader can judge the fit.
    // The model-knowledge path is reserved for retrieval returning nothing.
    const offCorpus = !result.hits.length && !web.length;
    if (offCorpus) {
      activity.settle();
      activity.step("No passages retrieved — answering from model knowledge");
      activity.settle();
    }

    renderAnswer("", "generating…", true);
    setStatus("Generating with LFM2.5…", "warn");
    activity.step(`${shortModel(genModelId)} · ${genDevice || "webgpu"} · decoding`);
    const answer = await generateAnswer(
      offCorpus ? query : seed,
      offCorpus ? [] : result.hits,
      (partial) => {
        renderAnswer(partial, `${shortModel(genModelId)} · streaming`, true);
        activity.tick();
      },
      offCorpus ? "general" : openEnded ? "highlight" : "answer",
      web,
    );
    const secs = ((performance.now() - started) / 1000).toFixed(1);
    const tag =
      (answer.model ? `${answer.model} · ` : "") +
      (offCorpus ? "not from the corpus · " : "") +
      (openEnded ? "highlight · " : "") +
      (web.length ? "corpus + web · " : "") +
      `${secs}s`;
    const body = offCorpus
      ? `${answer.text}\n\n*Retrieval returned no passages, so this is the model's own knowledge — not a claim from the forecast.*`
      : answer.text;
    renderAnswer(body, tag, false);
    endBotMessage({
      text: answer.text,
      model: tag,
      sources: offCorpus ? null : result.hits.length,
    });
    activity.settle(`Generated ${answer.text.length} chars`);
    activity.done();
    setStatus(answer.model ? `Done · ${answer.model}` : "Done", "ok");
  } catch (err) {
    console.error(err);
    const msg = formatError(err);
    setStatus(msg, "err");
    activity.fail(msg);
    if (currentBot) currentBot.row.classList.add("is-error");
    renderAnswer(`**Error** — ${msg}`, "failed", false);
    endBotMessage({});
  } finally {
    endBotMessage({});
    setBusy(false);
    el.q.focus();
  }
}

el.form.addEventListener("submit", (e) => {
  e.preventDefault();
  run({ withGenerate: el.generate.checked });
});

el.retrieveOnly.addEventListener("click", () => {
  run({ withGenerate: false });
});

el.loadModel.addEventListener("click", async () => {
  if (busy) return;
  setBusy(true);
  try {
    await ensureGenerator();
  } catch (err) {
    const msg = formatError(err);
    setStatus(msg, "err");
    setProgressUI({
      label: "Load failed",
      file: msg,
      detail: "",
      indeterminate: false,
      pct: 0,
    });
    el.loadProgress?.classList.remove("is-done");
  } finally {
    setBusy(false);
  }
});

document.querySelectorAll("button.example").forEach((btn) => {
  btn.addEventListener("click", () => {
    el.q.value = btn.getAttribute("data-q") || "";
    el.q.focus();
    autoGrow();
    updateCount();
  });
});

/* ── composer behaviour ─────────────────────────────────────────────────── */

function autoGrow() {
  el.q.style.height = "auto";
  el.q.style.height = `${el.q.scrollHeight}px`;
}

function updateCount() {
  if (!el.qCount) return;
  const n = el.q.value.length;
  el.qCount.textContent = n > 1600 ? `${n}/2000` : "";
}

el.q.addEventListener("input", () => {
  autoGrow();
  updateCount();
});
el.q.addEventListener("focus", () => el.composer?.classList.add("is-focused"));
el.q.addEventListener("blur", () => el.composer?.classList.remove("is-focused"));

// Cmd/Ctrl+Enter to submit
el.q.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
    e.preventDefault();
    el.form.requestSubmit();
  }
});

// On narrow screens the dock is fixed to the window; publish its height so
// the page can reserve exactly that much room at the bottom.
const dock = document.querySelector(".chat-dock");
if (dock && "ResizeObserver" in window) {
  new ResizeObserver(() => {
    document.documentElement.style.setProperty(
      "--dock-h",
      `${dock.offsetHeight}px`,
    );
  }).observe(dock);
}

/* ── options summary ────────────────────────────────────────────────────── */

function syncOptsSummary() {
  if (!el.optsSummary) return;
  el.optsSummary.textContent =
    `${el.method.value} · ${el.k.value} hits · generate ${el.generate.checked ? "on" : "off"}` +
    (el.websearch?.checked ? " · web on" : "");
}
[el.method, el.k, el.generate, el.websearch].forEach((node) =>
  node?.addEventListener("change", syncOptsSummary),
);
syncOptsSummary();

/* ── panel: column on wide screens, bottom sheet on narrow ──────────────── */

const isNarrow = () => window.matchMedia("(max-width: 61.99rem)").matches;

function showPanel() {
  if (isNarrow()) {
    document.body.classList.add("sheet-open");
    el.sheetBackdrop.hidden = false;
    el.panel.scrollTop = 0;
  } else {
    document.body.classList.remove("panel-hidden");
    localStorage.removeItem("ask-panel-hidden");
    el.openPanel.hidden = true;
  }
}

function hidePanel() {
  if (isNarrow()) {
    document.body.classList.remove("sheet-open");
    el.sheetBackdrop.hidden = true;
  } else {
    document.body.classList.add("panel-hidden");
    localStorage.setItem("ask-panel-hidden", "1");
    el.openPanel.hidden = false;
  }
}

if (localStorage.getItem("ask-panel-hidden")) {
  document.body.classList.add("panel-hidden");
  el.openPanel.hidden = false;
}

el.closePanel?.addEventListener("click", hidePanel);
el.openPanel?.addEventListener("click", showPanel);
el.sheetToggle?.addEventListener("click", () =>
  document.body.classList.contains("sheet-open") ? hidePanel() : showPanel(),
);
el.sheetBackdrop?.addEventListener("click", hidePanel);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && document.body.classList.contains("sheet-open")) {
    hidePanel();
  }
});
// Leaving the narrow layout should not strand the sheet state.
window.matchMedia("(max-width: 61.99rem)").addEventListener("change", () => {
  document.body.classList.remove("sheet-open");
  el.sheetBackdrop.hidden = true;
});

/* ── sources: expand / collapse all ─────────────────────────────────────── */

el.toggleHits?.addEventListener("click", () => {
  const expand = el.toggleHits.getAttribute("aria-expanded") !== "true";
  el.hits.querySelectorAll("details.hit").forEach((d) => (d.open = expand));
  el.toggleHits.setAttribute("aria-expanded", String(expand));
  el.toggleHits.textContent = expand ? "Collapse" : "Expand";
});

/* ── help modal ─────────────────────────────────────────────────────────── */

function openHelp() {
  if (!el.helpDialog) return;
  if (typeof el.helpDialog.showModal === "function") el.helpDialog.showModal();
  else el.helpDialog.setAttribute("open", "");
}
function closeHelp() {
  if (typeof el.helpDialog?.close === "function") el.helpDialog.close();
  else el.helpDialog?.removeAttribute("open");
}
el.helpBtn?.addEventListener("click", openHelp);
el.helpClose?.addEventListener("click", closeHelp);
// Click outside the panel (on the backdrop) closes it.
el.helpDialog?.addEventListener("click", (e) => {
  if (e.target === el.helpDialog) closeHelp();
});

/* ── page shortcuts ─────────────────────────────────────────────────────── */

document.addEventListener("keydown", (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const t = e.target;
  const typing =
    t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));
  if (e.key === "?" && !typing) {
    e.preventDefault();
    el.helpDialog?.open ? closeHelp() : openHelp();
  } else if (e.key === "/" && !typing) {
    e.preventDefault();
    el.q.focus();
  }
});

/* ── warm up on load ────────────────────────────────────────────────────── */

/**
 * Pull everything an ask needs before the first ask: the corpus (a few MB),
 * the query embedder, then the generator (280 MB, or 201 MB of LFM2.5-230M
 * on phones and tablets; cached after the
 * first visit). Ordered cheapest-first so retrieval works while the model is
 * still coming down, and each step is independent — a failed generator still
 * leaves retrieval usable.
 */
async function warmUp() {
  activity.reset();
  activity.step("Checking search API");

  if (await probeApi()) {
    activity.settle("Search API ready");
  } else {
    activity.settle("No search API — running in-browser");
    try {
      activity.step("Corpus index + vectors");
      await ensureClientCorpus();
      activity.settle(`Corpus ready · ${clientIndex.N} passages`);
    } catch (err) {
      activity.fail(formatError(err));
      setStatus(formatError(err), "err");
      return;
    }
    try {
      activity.step("Query embedder · MiniLM 384-d");
      await ensureEmbedder();
      activity.settle("Embedder ready");
    } catch (err) {
      console.warn("embedder preload failed", err);
      activity.fail("Embedder unavailable — BM25 only");
    }
  }

  if (!el.generate.checked) return;
  // Don't spend someone's metered data on a 280 MB model unprompted.
  if (navigator.connection?.saveData) {
    activity.step("Save-Data on — model loads on first ask");
    activity.settle();
    setStatus("Retrieval ready · Save-Data on, press Ask to load the model", "ok");
    return;
  }
  try {
    activity.step(`${shortModel(chooseModel())} · WebGPU q4`);
    await ensureGenerator();
    activity.settle(`Model ready · ${genDevice} · ${genDtype}`);
  } catch (err) {
    console.warn("generator preload failed", err);
    activity.fail(formatError(err));
    setStatus(`${formatError(err)} — press Ask to retry`, "warn");
  }
}

autoGrow();
// Let first paint land before saturating the network.
if (document.readyState === "complete") setTimeout(warmUp, 200);
else window.addEventListener("load", () => setTimeout(warmUp, 200));
