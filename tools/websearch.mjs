/**
 * DuckDuckGo Lite search, server-side.
 *
 * The browser cannot call DuckDuckGo directly — lite.duckduckgo.com sends no
 * CORS headers — so the page calls /api/websearch on its own origin and this
 * fetches and parses the Lite HTML. Lite is a no-JavaScript page whose markup
 * is a plain results table, which is why it is the one worth scraping.
 *
 * In production the same path is served by a Caddy reverse_proxy; see
 * deploy/caddy-websearch.conf.
 */

const ENDPOINT = "https://lite.duckduckgo.com/lite/";
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/126.0 Safari/537.36";

const ENTITIES = {
  amp: "&", lt: "<", gt: ">", quot: '"', "#39": "'", "#x27": "'", nbsp: " ",
};

function decode(s) {
  return String(s || "")
    .replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (m, e) => {
      if (ENTITIES[e.toLowerCase()]) return ENTITIES[e.toLowerCase()];
      if (/^#x/i.test(e)) return String.fromCodePoint(parseInt(e.slice(2), 16));
      if (/^#/.test(e)) return String.fromCodePoint(Number(e.slice(1)));
      return m;
    })
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Every result href is a redirect: //duckduckgo.com/l/?uddg=<encoded target>.
 * Unwrap it so the page links (and the model sees) the real destination.
 */
function unwrap(href) {
  const h = decode(href);
  const m = /[?&]uddg=([^&]+)/.exec(h);
  if (!m) return h.startsWith("//") ? `https:${h}` : h;
  try {
    return decodeURIComponent(m[1]);
  } catch {
    return h;
  }
}

/** Sponsored results route through y.js / bing aclick once unwrapped. */
function isAd(url) {
  return /(^|\/)y\.js|[?&]ad_(domain|provider|type)=|bing\.com\/aclick/i.test(url);
}

function domainOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

/**
 * Lite's results are a table of alternating link and snippet cells:
 *   <a rel="nofollow" href="URL" class='result-link'>TITLE</a>
 *   <td class='result-snippet'>SNIPPET</td>
 * Walk them in document order and pair each link with the snippet that
 * follows it.
 */
export function parseLite(html, limit = 6) {
  const out = [];
  const re =
    /<a[^>]+href="([^"]+)"[^>]*class=['"]result-link['"][^>]*>([\s\S]*?)<\/a>|<td[^>]*class=['"]result-snippet['"][^>]*>([\s\S]*?)<\/td>/gi;

  let pending = null;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (m[1] !== undefined) {
      if (pending) out.push(pending); // link with no snippet of its own
      const url = unwrap(m[1]);
      pending = isAd(url)
        ? null
        : { title: decode(m[2]), url, domain: domainOf(url), snippet: "" };
    } else if (pending) {
      pending.snippet = decode(m[3]);
      out.push(pending);
      pending = null;
    }
    if (out.length >= limit) break;
  }
  if (pending && out.length < limit) out.push(pending);
  return out.filter((r) => r.url && r.title);
}

export async function webSearch(query, { limit = 6, signal } = {}) {
  const q = String(query || "").trim();
  if (!q) return { query: q, results: [] };

  const res = await fetch(`${ENDPOINT}?q=${encodeURIComponent(q)}`, {
    headers: { "User-Agent": UA, Accept: "text/html" },
    signal,
  });
  if (!res.ok) {
    throw Object.assign(new Error(`DuckDuckGo returned ${res.status}`), {
      code: "UPSTREAM",
    });
  }
  return { query: q, results: parseLite(await res.text(), limit) };
}
