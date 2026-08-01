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
const EMBED_MODEL = "Xenova/all-MiniLM-L6-v2";
const EMBED_DIM = 384;
/** Keep RAG context modest for 350M on-device decode, but allow multi-source. */
const MAX_CONTEXT_CHARS = 3400;
const MAX_NEW_TOKENS = 320;
/** MiniLM embedder for client-side dense/hybrid fallback (main thread). */
const TFJS_CDN =
  "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1";

const $ = (id) => document.getElementById(id);

const el = {
  form: $("ask-form"),
  q: $("q"),
  method: $("method"),
  k: $("k"),
  generate: $("generate"),
  go: $("go"),
  retrieveOnly: $("retrieve-only"),
  loadModel: $("load-model"),
  status: $("status-line"),
  answerPanel: $("answer-panel"),
  answer: $("answer"),
  answerTag: $("answer-tag"),
  hitsPanel: $("hits-panel"),
  hits: $("hits"),
  hitsTag: $("hits-tag"),
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
let genDevice = null;
let genDtype = null;
let genModelId = GEN_MODEL;
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
  el.status.classList.remove("is-ok", "is-warn", "is-err");
  el.status.classList.add(
    kind === "err" ? "is-err" : kind === "warn" ? "is-warn" : "is-ok",
  );
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
        `Loading LFM2.5… ${Math.round(pct)}%${file ? " · " + shortFile(file) : ""}`,
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
      label: "Loading LFM2.5",
      file: msg.data || "",
      detail: "",
      indeterminate: !loadState.files.size,
      pct: aggregatePct(),
    });
    setStatus(msg.data || "Loading LFM2.5…", "warn");
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
    genModelId = msg.model || GEN_MODEL;
    setProgressUI({
      label: "LFM2.5 ready",
      pct: 100,
      file: "",
      detail: `${genDevice} · ${genDtype}`,
      done: true,
    });
    setStatus(`LFM2.5-350M ready · ${genDevice} · ${genDtype}`, "ok");
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

async function ensureGenerator() {
  if (genReady) return { device: genDevice, dtype: genDtype, model: genModelId };

  resetLoadState("LFM2.5-350M · webgpu · q4");
  setProgressUI({
    label: "Loading LFM2.5-350M",
    file: "Web Worker · WebGPU · q4 · first run ~200MB",
    detail: "",
    indeterminate: true,
  });
  setStatus("Loading LFM2.5-350M in worker (WebGPU, q4)…", "warn");

  // Prefer WebGPU; if load fails, retry wasm in a fresh worker session.
  const attempts = [
    { device: "webgpu", dtype: "q4" },
    { device: "wasm", dtype: "q4" },
  ];

  let lastErr = null;
  for (const attempt of attempts) {
    try {
      // Recreate worker between attempts so a poisoned WebGPU session is dropped
      if (genWorker && lastErr) {
        genWorker.terminate();
        genWorker = null;
        genReady = false;
      }
      resetLoadState(`LFM2.5-350M · ${attempt.device} · ${attempt.dtype}`);
      setProgressUI({
        label: `Loading LFM2.5-350M`,
        file: `${attempt.device} · ${attempt.dtype}`,
        detail: "",
        indeterminate: true,
      });
      setStatus(
        `Loading LFM2.5 (${attempt.device}, ${attempt.dtype})…`,
        "warn",
      );
      await workerRequest("load", {
        modelId: GEN_MODEL,
        device: attempt.device,
        dtype: attempt.dtype,
      }, { key: "load" });
      return { device: genDevice, dtype: genDtype, model: genModelId };
    } catch (err) {
      lastErr = err;
      console.warn(`LFM load failed on ${attempt.device}:`, err);
      genReady = false;
      setStatus(
        `Load failed on ${attempt.device} (${formatError(err)}) — trying fallback…`,
        "warn",
      );
    }
  }

  hideProgress();
  throw new Error(`Could not load LFM2.5-350M. ${formatError(lastErr)}`);
}

/* ── client corpus (static fallback) ────────────────────────────────────── */

async function ensureClientCorpus() {
  if (clientIndex && clientMatrix) return;
  setStatus("Loading /rag/index.json…", "warn");
  const indexRes = await fetch("/rag/index.json", { cache: "no-cache" });
  if (!indexRes.ok) {
    throw new Error(
      "No /rag/index.json. Run: node tools/rag.mjs reindex && npm run ask",
    );
  }
  clientIndex = await indexRes.json();
  if (!clientIndex.chunks?.[0]?.tokens) {
    throw new Error("Index missing tokens — rebuild with node tools/rag.mjs reindex");
  }

  setStatus("Loading /rag/vectors.bin…", "warn");
  const vecRes = await fetch("/rag/vectors.bin", { cache: "no-cache" });
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
    `browser · ${clientIndex.N} passages · hybrid ready · gen ${GEN_MODEL.split("/").pop()}`,
    "ok",
  );
}

let _tfjs = null;
async function loadTransformers() {
  if (_tfjs) return _tfjs;
  _tfjs = await import(TFJS_CDN);
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

async function ensureEmbedder() {
  if (embedder) return embedder;
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
const SYSTEM_PROMPT = `You are a concise analyst. Answer the user's question using only the numbered sources below. Write 2-5 plain sentences. Put real citation numbers like [1] or [2] after claims. Never invent facts. Never discuss the sources themselves ("the excerpts say…", "the documents discuss…"). Never write the placeholder [n].`;

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

function buildUserPrompt(query, hits) {
  const packed = selectContextHits(hits, 5);
  const parts = [];
  let used = 0;
  for (let i = 0; i < packed.length; i++) {
    const h = packed[i];
    const loc = h.path + (h.heading ? " · " + h.heading : "");
    const header = `Source ${i + 1} [${i + 1}] ${loc}\n`;
    const budget = MAX_CONTEXT_CHARS - used - header.length - 8;
    if (budget < 100) break;
    let body = h.text || "";
    if (body.length > budget) body = body.slice(0, budget - 1) + "…";
    parts.push(header + body);
    used += header.length + body.length + 8;
  }

  // Put the question last (recency helps small models stay on task).
  return `Sources:
${parts.join("\n\n")}

Question: ${query}

Answer the question in 2-5 sentences using the sources. Cite like [1] or [2]. Do not mention "excerpts" or "sources" as a topic. Start with the answer:`;
}

/** Clean common 350M failure modes in the streamed answer. */
function cleanGeneratedAnswer(text) {
  let t = String(text || "").trim();
  // Literal placeholder citations
  t = t.replace(/\[n\]/gi, "");
  // Meta openers the small model loves
  t = t.replace(
    /^(Based on (the )?(excerpts?|sources?|documents?|corpus)[^.]*\.\s*)+/i,
    "",
  );
  t = t.replace(
    /^(The (excerpts?|sources?|documents?) (primarily |mainly )?(discuss|describe|highlight|mention)[^.]*\.\s*)+/i,
    "",
  );
  t = t.replace(/\s+/g, " ").trim();
  return t;
}

async function generateAnswer(query, hits, onToken) {
  if (!hits.length) {
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
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: buildUserPrompt(query, hits) },
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
      model: `${result.model || GEN_MODEL} · ${result.device || genDevice || "webgpu"}`,
    };
  } catch (err) {
    if (genDevice !== "webgpu") throw new Error(formatError(err));

    // WebGPU decoded OK at load but failed mid-generate — hard switch to WASM.
    setStatus(`${formatError(err)} — reloading on WASM…`, "warn");
    genReady = false;
    if (genWorker) {
      genWorker.terminate();
      genWorker = null;
    }
    resetLoadState("LFM2.5-350M · wasm · q4");
    setProgressUI({
      label: "Loading LFM2.5 on WASM",
      file: "webgpu generate failed",
      detail: "",
      indeterminate: true,
    });
    await workerRequest(
      "load",
      { modelId: GEN_MODEL, device: "wasm", dtype: "q4" },
      { key: "load" },
    );
    const result = await runOnce();
    const text = cleanGeneratedAnswer(result.output) || "(empty)";
    onToken?.(text);
    return {
      text,
      model: `${result.model || GEN_MODEL} · wasm (fallback)`,
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
    // citation markers [1]
    t = t.replace(/\[(\d+)\]/g, '<span class="cite">[$1]</span>');
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

function renderHits(hits, method) {
  el.hitsPanel.hidden = false;
  const scoreLabel =
    method === "hybrid" ? "rrf" : method === "dense" ? "cos" : "bm25";
  el.hitsTag.textContent = `${hits.length} · ${method}`;
  el.hits.innerHTML = hits
    .map((h) => {
      const loc =
        h.heading && h.heading !== h.title
          ? `${escapeHtml(h.title)} · ${escapeHtml(h.heading)}`
          : escapeHtml(h.title || h.path);
      const tags = [];
      if (h.methods?.length) tags.push(h.methods.join("+"));
      if (h.bm25 != null) tags.push(`bm25=${h.bm25}`);
      if (h.dense != null) tags.push(`cos=${h.dense}`);
      const meta = [
        `${scoreLabel}=${h.score}`,
        escapeHtml(h.path),
        ...tags,
      ].join(" · ");
      return `<li>
        <div class="hit-head">
          <a class="hit-title" href="${escapeHtml(mdToHref(h.path))}">${loc}</a>
          <span class="hit-meta">${meta}</span>
        </div>
        <div class="hit-text md-body">${renderMarkdown(h.text)}</div>
      </li>`;
    })
    .join("");
}

function renderAnswer(text, model, streaming) {
  el.answerPanel.hidden = false;
  el.answerTag.textContent = model || "";
  el.answer.classList.toggle("is-streaming", !!streaming);
  // Answers are mostly prose; still run light markdown + cite highlighting
  el.answer.innerHTML = text
    ? `<div class="md-body">${renderMarkdown(text)}</div>`
    : "&nbsp;";
}

function setBusy(on) {
  busy = on;
  el.go.disabled = on;
  el.retrieveOnly.disabled = on;
  el.loadModel.disabled = on;
}

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
  el.answerPanel.hidden = true;
  el.hitsPanel.hidden = true;
  setStatus("Retrieving…", "warn");

  try {
    const result = await search(query, method, k);
    renderHits(result.hits, result.method);
    setStatus(
      `Retrieved ${result.hits.length} · ${result.method}${apiOk ? " · server" : " · browser"}`,
      "ok",
    );

    if (withGenerate) {
      renderAnswer("", "generating…", true);
      setStatus("Generating with LFM2.5…", "warn");
      const answer = await generateAnswer(query, result.hits, (partial) => {
        renderAnswer(partial, `${GEN_MODEL.split("/").pop()} · streaming`, true);
      });
      renderAnswer(answer.text, answer.model, false);
      setStatus(
        answer.model
          ? `Done · ${answer.model}`
          : `Done · retrieval only`,
        "ok",
      );
    }
  } catch (err) {
    console.error(err);
    const msg = formatError(err);
    setStatus(msg, "err");
    el.answerPanel.hidden = false;
    renderAnswer(`Error: ${msg}`, null, false);
  } finally {
    setBusy(false);
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
  });
});

// Cmd/Ctrl+Enter to submit
el.q.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
    e.preventDefault();
    el.form.requestSubmit();
  }
});

probeApi();
