/**
 * Ask UI — hybrid retrieval + LFM2.5-350M generation (WebGPU).
 *
 * Retrieval: prefer POST /api/search (ask-server); fall back to /rag/* client-side.
 * Generation: onnx-community/LFM2.5-350M-ONNX via @huggingface/transformers CDN.
 */

import {
  retrieveBm25,
  retrieveDense,
  retrieveHybrid,
} from "./client-retrieve.mjs";

const GEN_MODEL = "onnx-community/LFM2.5-350M-ONNX";
const EMBED_MODEL = "Xenova/all-MiniLM-L6-v2";
const EMBED_DIM = 384;

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
};

let apiOk = false;
let clientIndex = null;
let clientMatrix = null;
let clientDim = EMBED_DIM;
let embedder = null;
let generator = null;
let genDevice = null;
let busy = false;

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

async function probeApi() {
  try {
    const res = await fetch("/api/health", { cache: "no-cache" });
    if (!res.ok) throw new Error(String(res.status));
    const h = await res.json();
    apiOk = true;
    const dense = h.dense ? "dense ready" : "dense missing";
    setStatus(
      `server · ${h.passages} passages · ${dense} · gen ${GEN_MODEL.split("/").pop()}`,
      h.dense ? "ok" : "warn",
    );
    return true;
  } catch {
    apiOk = false;
    setStatus("no API — will use static /rag/ in browser", "warn");
    return false;
  }
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

async function loadTransformers() {
  // ESM CDN — same package as the Node embed path
  return import("https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.7.2");
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
  const queryVec = await embedQuery(query);
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

/* ── generation (LFM2.5) ────────────────────────────────────────────────── */

const SYSTEM_PROMPT = `You answer questions using ONLY the provided corpus excerpts from "The Next Fifteen Years" forecast document.

Rules:
1. Prefer quoting or closely paraphrasing the excerpts. When you quote, use exact wording in quotation marks.
2. Cite sources inline as [n] matching the excerpt numbers.
3. If the excerpts do not contain enough to answer, say what is missing — do not invent claims, numbers, or probabilities.
4. Keep the voice tight and analytical, matching the corpus. No preamble.
5. When the corpus states a probability, range, or named uncertainty, preserve it exactly.`;

function buildUserPrompt(query, hits) {
  const context = hits
    .map(
      (h, i) =>
        `[${i + 1}] (${h.path}${h.heading ? " · " + h.heading : ""})\n${h.text}`,
    )
    .join("\n\n---\n\n");
  return `Question: ${query}

Corpus excerpts:
${context}

Answer from the excerpts only.`;
}

async function ensureGenerator(onProgress) {
  if (generator) return generator;
  const webgpu = await hasWebGPU();
  genDevice = webgpu ? "webgpu" : "wasm";
  onProgress?.(
    `Loading LFM2.5-350M (${genDevice}${webgpu ? ", q4" : ""})… first run downloads ~200MB`,
  );
  const { pipeline } = await loadTransformers();
  generator = await pipeline("text-generation", GEN_MODEL, {
    dtype: "q4",
    device: genDevice,
    progress_callback: (p) => {
      if (!p) return;
      if (p.status === "progress" && p.progress != null) {
        onProgress?.(
          `LFM2.5 ${p.file || ""} ${Math.round(p.progress)}%`,
        );
      } else if (p.status === "ready" || p.status === "done") {
        onProgress?.(`LFM2.5 ready (${genDevice})`);
      }
    },
  });
  onProgress?.(`LFM2.5-350M ready · ${genDevice}`);
  return generator;
}

async function generateAnswer(query, hits, onToken) {
  if (!hits.length) {
    return {
      text: "No relevant passages found in the corpus for that query.",
      model: null,
    };
  }
  const gen = await ensureGenerator((msg) => setStatus(msg, "warn"));
  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: buildUserPrompt(query, hits) },
  ];

  let streamed = "";
  const { TextStreamer } = await loadTransformers();
  const streamer = new TextStreamer(gen.tokenizer, {
    skip_prompt: true,
    skip_special_tokens: true,
    callback_function: (text) => {
      // TextStreamer may pass cumulative or delta depending on version;
      // prefer treating as full decoded stream piece.
      if (typeof text === "string") {
        // library often calls with the new chunk only
        streamed += text;
        onToken?.(streamed);
      }
    },
  });

  const output = await gen(messages, {
    max_new_tokens: 512,
    do_sample: false,
    temperature: 0.1,
    top_k: 50,
    repetition_penalty: 1.05,
    streamer,
  });

  let text =
    output?.[0]?.generated_text?.at?.(-1)?.content ||
    output?.[0]?.generated_text ||
    streamed;
  if (Array.isArray(text)) {
    const last = text[text.length - 1];
    text = last?.content || String(last);
  }
  if (typeof text !== "string") text = streamed || "(empty)";
  text = text.trim();
  if (streamed && streamed.trim().length >= text.length) text = streamed.trim();
  return { text, model: `${GEN_MODEL} · ${genDevice}` };
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

function renderHits(hits, method) {
  el.hitsPanel.hidden = false;
  const scoreLabel =
    method === "hybrid" ? "rrf" : method === "dense" ? "cos" : "bm25";
  el.hitsTag.textContent = `${hits.length} · ${method}`;
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
        <div class="hit-text">${escapeHtml(h.text)}</div>
      </li>`;
    })
    .join("");
}

function renderAnswer(text, model, streaming) {
  el.answerPanel.hidden = false;
  el.answerTag.textContent = model || "";
  el.answer.classList.toggle("is-streaming", !!streaming);
  // Light-touch: highlight [n] citations
  const html = escapeHtml(text).replace(
    /\[(\d+)\]/g,
    '<span class="cite">[$1]</span>',
  );
  el.answer.innerHTML = html || "&nbsp;";
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
    setStatus(err.message || String(err), "err");
    el.answerPanel.hidden = false;
    renderAnswer(`Error: ${err.message || err}`, null, false);
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
    await ensureGenerator((msg) => setStatus(msg, "warn"));
    setStatus(`LFM2.5-350M ready · ${genDevice}`, "ok");
  } catch (err) {
    setStatus(err.message || String(err), "err");
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
