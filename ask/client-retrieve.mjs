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

function pathWeight(path) {
  if (!path) return 1;
  if (path === "README.md") return 0.55;
  if (path.endsWith("/README.md")) {
    return path.split("/").length <= 2 ? 0.65 : 0.8;
  }
  if (path === "HISTORY.md" || path === "RESEARCH.md") return 0.5;
  return 1;
}

export function retrieveBm25(index, query, k) {
  const qTokens = tokenize(query);
  const scored = index.chunks.map((c) => {
    const raw = bm25Score(qTokens, c.tokens, index.df, index.N, index.avgdl);
    return {
      id: c.id,
      path: c.path,
      title: c.title,
      heading: c.heading,
      text: c.text,
      score: raw * pathWeight(c.path),
      method: "bm25",
    };
  });
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
      score: dot * pathWeight(c.path),
      method: "dense",
    };
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, k);
}

export function rrfFuse(lists, { k = 60, topK = 8, groupBy = "path" } = {}) {
  const map = new Map();
  const round = (n) => Math.round(n * 1000) / 1000;
  for (const list of lists) {
    const seenInList = new Set();
    list.forEach((item, rank) => {
      const key = groupBy === "id" ? String(item.id) : item.path;
      if (seenInList.has(key)) return;
      seenInList.add(key);
      const cur = map.get(key) || {
        id: item.id,
        path: item.path,
        title: item.title,
        heading: item.heading,
        text: item.text,
        score: 0,
        bestRank: Infinity,
        bm25: null,
        dense: null,
        methods: [],
      };
      cur.score += 1 / (k + rank + 1);
      if (rank < cur.bestRank) {
        cur.bestRank = rank;
        cur.id = item.id;
        cur.heading = item.heading;
        cur.text = item.text;
        cur.title = item.title || cur.title;
      }
      if (item.method === "bm25") {
        cur.bm25 = cur.bm25 == null ? item.score : Math.max(cur.bm25, item.score);
      }
      if (item.method === "dense") {
        cur.dense = cur.dense == null ? item.score : Math.max(cur.dense, item.score);
      }
      if (item.method && !cur.methods.includes(item.method)) {
        cur.methods.push(item.method);
      }
      map.set(key, cur);
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

export function retrieveHybrid(index, query, matrix, dim, queryVec, k, pool = 40) {
  const p = Math.max(k, pool);
  return rrfFuse(
    [retrieveBm25(index, query, p), retrieveDense(index, queryVec, matrix, dim, p)],
    { topK: k },
  );
}
