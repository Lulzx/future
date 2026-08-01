/**
 * LFM2.5 generation worker — pattern from Liquid docs + sitammeur/lfm2.5-jp-web:
 *   AutoTokenizer + AutoModelForCausalLM, WebGPU q4, shader warmup, chat template.
 *
 * Runs off the UI thread so model load / decode do not freeze the page.
 */
import {
  AutoTokenizer,
  AutoModelForCausalLM,
  TextStreamer,
  InterruptableStoppingCriteria,
} from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.2.0";

const DEFAULT_MODEL = "onnx-community/LFM2.5-350M-ONNX";

class LfmPipeline {
  static model_id = DEFAULT_MODEL;
  static tokenizer = null;
  static model = null;
  static device = null;
  static dtype = null;

  static async getInstance({
    modelId = DEFAULT_MODEL,
    device = "webgpu",
    dtype = "q4",
    progress_callback = null,
  } = {}) {
    this.model_id = modelId;

    this.tokenizer ??= AutoTokenizer.from_pretrained(this.model_id, {
      progress_callback,
    });

    this.model ??= AutoModelForCausalLM.from_pretrained(this.model_id, {
      dtype,
      device,
      progress_callback,
    });

    this.device = device;
    this.dtype = dtype;
    return Promise.all([this.tokenizer, this.model]);
  }

  static reset() {
    this.tokenizer = null;
    this.model = null;
    this.device = null;
    this.dtype = null;
  }
}

const stopping_criteria = new InterruptableStoppingCriteria();
let past_key_values_cache = null;
let ready = false;

function post(msg) {
  self.postMessage(msg);
}

async function checkWebGPU() {
  try {
    if (!navigator.gpu) {
      throw new Error("WebGPU is not available in this browser");
    }
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) {
      throw new Error("WebGPU is not supported (no adapter found)");
    }
    post({ status: "webgpu-ok" });
    return true;
  } catch (e) {
    post({ status: "webgpu-fail", error: String(e?.message || e) });
    return false;
  }
}

/**
 * Load tokenizer + model, then run a 1-token warmup to compile WebGPU shaders
 * (required by Liquid / transformers.js demos).
 */
async function load({ modelId, device, dtype } = {}) {
  ready = false;
  past_key_values_cache = null;
  LfmPipeline.reset();

  const useDevice = device || "webgpu";
  const useDtype = dtype || "q4";
  const useModel = modelId || DEFAULT_MODEL;

  post({
    status: "loading",
    data: `Loading ${useModel.split("/").pop()} (${useDevice}, ${useDtype})…`,
  });

  const progress_callback = (p) => {
    // Forward transformers.js download progress to the main thread as-is
    post({ status: "progress", progress: p });
  };

  try {
    const [tokenizer, model] = await LfmPipeline.getInstance({
      modelId: useModel,
      device: useDevice,
      dtype: useDtype,
      progress_callback,
    });

    post({
      status: "loading",
      data: "Compiling shaders (warmup)…",
    });

    // Shader / graph warmup — matches lfm2.5-jp-web worker.js
    const warm = tokenizer("a");
    await model.generate({ ...warm, max_new_tokens: 1 });

    ready = true;
    post({
      status: "ready",
      device: useDevice,
      dtype: useDtype,
      model: useModel,
    });
  } catch (err) {
    ready = false;
    LfmPipeline.reset();
    post({
      status: "error",
      phase: "load",
      error: formatErr(err),
      raw: err && typeof err === "object" ? String(err.message || err) : String(err),
    });
  }
}

async function generate({ messages, max_new_tokens = 320 } = {}) {
  if (!ready) {
    post({ status: "error", phase: "generate", error: "Model not loaded" });
    return;
  }

  try {
    const [tokenizer, model] = await LfmPipeline.getInstance();

    // Stateless Q&A: never reuse KV across different questions (avoids bleed / one-liners).
    past_key_values_cache = null;
    stopping_criteria.reset();

    const inputs = tokenizer.apply_chat_template(messages, {
      add_generation_prompt: true,
      return_dict: true,
    });

    let startTime;
    let numTokens = 0;
    let tps = 0;

    const token_callback_function = () => {
      startTime ??= performance.now();
      if (numTokens++ > 0) {
        tps = (numTokens / (performance.now() - startTime)) * 1000;
      }
    };

    // TextStreamer callback receives the decoded text so far (or chunks)
    let streamed = "";
    const callback_function = (output) => {
      if (typeof output === "string") {
        // Some versions pass full decoded assistant text, others pass deltas.
        // Prefer growing stream: if output starts with streamed, treat as full.
        if (output.startsWith(streamed)) streamed = output;
        else streamed += output;
      }
      post({
        status: "update",
        output: streamed,
        tps,
        numTokens,
      });
    };

    const streamer = new TextStreamer(tokenizer, {
      skip_prompt: true,
      skip_special_tokens: true,
      callback_function,
      token_callback_function,
    });

    post({ status: "start" });

    const result = await model.generate({
      ...inputs,
      // No past_key_values — each Ask is independent
      do_sample: false,
      temperature: 0.1,
      top_k: 50,
      repetition_penalty: 1.05,
      max_new_tokens,
      streamer,
      stopping_criteria,
      return_dict_in_generate: true,
    });

    let text = streamed;
    if (!text && result?.sequences) {
      const decoded = tokenizer.batch_decode(result.sequences, {
        skip_special_tokens: true,
      });
      text = decoded?.[0] || "";
      // Strip any residual prompt echo: take last assistant turn if ChatML-like
      const parts = text.split(/assistant\s*\n/i);
      if (parts.length > 1) text = parts[parts.length - 1].trim();
    }

    post({
      status: "complete",
      output: (text || "").trim(),
      tps,
      numTokens,
      device: LfmPipeline.device,
      dtype: LfmPipeline.dtype,
      model: LfmPipeline.model_id,
    });
  } catch (err) {
    post({
      status: "error",
      phase: "generate",
      error: formatErr(err),
      raw: String(err?.message || err),
    });
  }
}

function formatErr(err) {
  if (err == null) return "Unknown error";
  if (typeof err === "number") {
    return `Runtime error ${err} (WebGPU/ORT)`;
  }
  if (typeof err === "string") return err;
  if (err.message) return err.message;
  return String(err);
}

self.addEventListener("message", async (e) => {
  const { type, data } = e.data || {};
  switch (type) {
    case "check":
      await checkWebGPU();
      break;
    case "load":
      await load(data || {});
      break;
    case "generate":
      await generate(data || {});
      break;
    case "interrupt":
      stopping_criteria.interrupt();
      break;
    case "reset":
      past_key_values_cache = null;
      stopping_criteria.reset();
      break;
    default:
      break;
  }
});
