/**
 * Browser-side BM25 + dense + RRF (mirrors tools/rag-lib.mjs).
 * Used when /api/search is unavailable (static deploy).
 */

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

export function retrieveDense(index, queryVec, matrix, dim, k) {
  const n = index.chunks.length;
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
      if (!cur.text && item.text) cur.text = item.text;
      map.set(item.id, cur);
    });
  }
  const round = (n) => Math.round(n * 1000) / 1000;
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

export function retrieveHybrid(index, query, matrix, dim, queryVec, k, pool = 40) {
  const p = Math.max(k, pool);
  return rrfFuse(
    [retrieveBm25(index, query, p), retrieveDense(index, queryVec, matrix, dim, p)],
    { topK: k },
  );
}
