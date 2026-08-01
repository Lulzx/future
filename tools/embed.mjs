#!/usr/bin/env node
/**
 * Build dense embeddings for every corpus passage (MiniLM, 384-d).
 *
 * Usage:
 *   node tools/embed.mjs
 *   node tools/embed.mjs --force
 *
 * Writes:
 *   .rag/vectors.bin        Float32Array N×dim, L2-normalized
 *   .rag/vectors.meta.json
 *
 * Requires: npm i  (installs @huggingface/transformers)
 */

import { promises as fs } from "node:fs";
import path from "node:path";
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
} from "./rag-lib.mjs";

const force = process.argv.includes("--force");

main().catch((err) => {
  console.error(err.stack || err.message || err);
  process.exit(1);
});

async function main() {
  let index;
  try {
    index = await loadIndex();
    const fp = await corpusFingerprint();
    if (index.fingerprint !== fp) {
      console.error("Corpus changed — rebuilding BM25 index…");
      index = await buildIndexData();
      await saveIndex(index);
    }
  } catch {
    console.error("Building BM25 index…");
    index = await buildIndexData();
    await saveIndex(index);
  }

  if (!force && (await vectorsMatchIndex(index))) {
    console.log(`Embeddings up to date (${index.N} × ${EMBED_DIM}) → ${path.relative(ROOT, VECTORS_PATH)}`);
    return;
  }

  console.error(`Loading embedder ${EMBED_MODEL}…`);
  const embed = await createEmbedder();

  console.error(`Embedding ${index.N} passages…`);
  const matrix = new Float32Array(index.N * EMBED_DIM);
  const batchSize = 32;
  let done = 0;

  for (let i = 0; i < index.chunks.length; i += batchSize) {
    const batch = index.chunks.slice(i, i + batchSize);
    const texts = batch.map((c) => truncateForEmbed(c.text));
    const vecs = await embed(texts);
    for (let j = 0; j < vecs.length; j++) {
      matrix.set(vecs[j], (i + j) * EMBED_DIM);
    }
    done += batch.length;
    if (done % 128 === 0 || done === index.N) {
      console.error(`  ${done}/${index.N}`);
    }
  }

  await fs.mkdir(CACHE_DIR, { recursive: true });
  await fs.writeFile(VECTORS_PATH, Buffer.from(matrix.buffer));
  await fs.writeFile(
    VECTORS_META_PATH,
    JSON.stringify(
      {
        model: EMBED_MODEL,
        dim: EMBED_DIM,
        n: index.N,
        fingerprint: index.fingerprint,
        builtAt: new Date().toISOString(),
      },
      null,
      2,
    ),
  );

  const mb = (matrix.byteLength / (1024 * 1024)).toFixed(2);
  console.log(`Wrote ${index.N} vectors (${mb} MB) → ${path.relative(ROOT, VECTORS_PATH)}`);
}

function truncateForEmbed(text, maxChars = 2000) {
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars);
}

async function createEmbedder() {
  let pipeline;
  try {
    ({ pipeline } = await import("@huggingface/transformers"));
  } catch {
    console.error(`
Missing dependency. From the repo root run:

  npm install

(@huggingface/transformers provides the MiniLM embedder)
`);
    process.exit(1);
  }

  const extractor = await pipeline("feature-extraction", EMBED_MODEL, {
    dtype: "fp32",
  });

  return async function embed(texts) {
    const out = [];
    for (const t of texts) {
      const tensor = await extractor(t, { pooling: "mean", normalize: true });
      // transformers.js returns Tensor with .data
      const data = tensor.data ?? tensor.tolist?.()?.[0] ?? tensor;
      const arr = data instanceof Float32Array ? data : Float32Array.from(data);
      if (arr.length !== EMBED_DIM) {
        // sometimes shape is [1, dim]
        const flat = arr.length > EMBED_DIM ? arr.slice(arr.length - EMBED_DIM) : arr;
        if (flat.length !== EMBED_DIM) {
          throw new Error(`Unexpected embed dim ${arr.length}, expected ${EMBED_DIM}`);
        }
        out.push(flat);
      } else {
        out.push(arr);
      }
    }
    return out;
  };
}
