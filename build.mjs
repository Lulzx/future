#!/usr/bin/env node
/*
 * Pre-render the corpus to static HTML.
 *
 * Ports the markdown parser that used to live in the client-side reader
 * (index.html) and runs it at build time instead, so every page is plain
 * HTML that any fetcher can read — no JavaScript required. The raw .md
 * files are copied alongside the .html and stay fetchable at the same URLs.
 *
 * Mapping:  README.md → index.html,  a/README.md → a/index.html,
 *           a/b.md → a/b.html.  Internal links become relative .html links
 *           (README targets become directory URLs).
 *
 * Usage: node build.mjs        # writes _site/
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(ROOT, "_site");
const REPO = "https://github.com/Lulzx/future";
const SITE = "The Next Fifteen Years";
const DEFAULT_DOC = "README.md";

/* ── path resolution ─────────────────────────────────────────────────────── */

function normalize(p) {
  const out = [];
  for (const part of p.split("/")) {
    if (part === "" || part === ".") continue;
    if (part === "..") { out.pop(); continue; }
    out.push(part);
  }
  return out.join("/");
}

function dirname(p) {
  const i = p.lastIndexOf("/");
  return i === -1 ? "" : p.slice(0, i);
}

// Resolve an href found inside `base` (a doc path) to "doc[#hash]", or null
// if the link is external / an anchor.
function resolveDoc(href, base) {
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("//") || href.startsWith("#")) {
    return null;
  }
  const [rawPath, hash] = href.split("#");
  let target = normalize(dirname(base) + "/" + rawPath);
  if (rawPath.endsWith("/") || !/\.[a-z0-9]+$/i.test(rawPath)) {
    target = normalize(target + "/README.md");
  }
  if (!target.endsWith(".md")) return null;
  return hash ? target + "#" + hash : target;
}

// Where a doc renders to.
function outPath(doc) {
  if (doc === "README.md") return "index.html";
  if (doc.endsWith("/README.md")) return doc.slice(0, -"README.md".length) + "index.html";
  return doc.replace(/\.md$/, ".html");
}

// Relative URL from one doc's page to another's (directory URL for READMEs).
function relHref(fromDoc, toDoc, hash) {
  let rel = path.posix.relative(dirname(outPath(fromDoc)) || ".", outPath(toDoc));
  if (rel.endsWith("index.html")) rel = rel.slice(0, -"index.html".length);
  if (rel === "") rel = "./";
  return rel + (hash ? "#" + hash : "");
}

/* ── inline ──────────────────────────────────────────────────────────────── */

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;")
          .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function inline(src, base) {
  const codes = [];
  const S0 = "\uE000", S1 = "\uE001";
  let s = src.replace(/(`+)([\s\S]*?)\1/g, (_, __, body) => {
    codes.push(body.trim());
    return S0 + (codes.length - 1) + S1;
  });

  s = escapeHtml(s);

  s = s.replace(/\[([^\]]*)\]\(([^)\s]+)\)/g, (m, text, href) => {
    const doc = resolveDoc(href, base);
    if (doc) {
      const [p, h] = doc.split("#");
      return `<a href="${relHref(base, p, h)}">${text}</a>`;
    }
    if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("//")) {
      return `<a href="${href}" rel="noopener noreferrer" target="_blank">${text}</a>`;
    }
    return `<a href="${href}">${text}</a>`;
  });

  s = s.replace(/&lt;(https?:\/\/[^\s>]+)&gt;/g,
      '<a href="$1" rel="noopener noreferrer" target="_blank">$1</a>');

  // Emphasis: allow single-star italics nested inside double-star bold
  // (e.g. **What "best" does *not* mean here:**). The old [^*]+ form
  // stopped at the first inner *, leaving raw ** on the page.
  s = s.replace(/\*\*\*((?:[^*]|\*(?!\*))+?)\*\*\*/g, (_, inner) =>
    `<strong><em>${inner}</em></strong>`);
  s = s.replace(/\*\*((?:[^*]|\*(?!\*))+?)\*\*/g, (_, inner) => {
    const withEm = inner.replace(/(^|[^*\w])\*([^*\n]+)\*(?![*\w])/g, "$1<em>$2</em>");
    return `<strong>${withEm}</strong>`;
  });
  s = s.replace(/(^|[^*\w])\*([^*\n]+)\*(?![*\w])/g, "$1<em>$2</em>");
  s = s.replace(/==([^=\n]+)==/g, "<mark>$1</mark>");
  s = s.replace(/~~([^~]+)~~/g, "<del>$1</del>");

  s = s.replace(/\uE000(\d+)\uE001/g, (_, i) => `<code>${escapeHtml(codes[+i])}</code>`);
  return s;
}

/* ── blocks ──────────────────────────────────────────────────────────────── */

const RE_HEADING   = /^(#{1,6})\s+(.*)$/;
const RE_HR        = /^\s{0,3}(-{3,}|\*{3,}|_{3,})\s*$/;
const RE_FENCE     = /^\s*(```|~~~)(.*)$/;
const RE_QUOTE     = /^\s{0,3}>\s?(.*)$/;
const RE_UL        = /^(\s*)[-*+]\s+(.*)$/;
const RE_OL        = /^(\s*)(\d+)[.)]\s+(.*)$/;
const RE_TROW      = /^\s*\|(.*)\|\s*$/;
const RE_TSEP      = /^\s*\|?[\s:|-]*-[\s:|-]*\|?\s*$/;
const RE_IMG_ONLY  = /^!\[([^\]]*)\]\(([^)\s]+)\)\s*$/;

function splitRow(line) {
  return line.replace(/^\s*\|/, "").replace(/\|\s*$/, "")
             .split("|").map(c => c.trim());
}

function slug(text) {
  return text.toLowerCase().replace(/`/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
}

function tableClasses(head, body) {
  const cols = Math.max(head.length, ...body.map(r => r.length), 0);
  const widths = [];
  for (let c = 0; c < cols; c++) {
    let w = (head[c] || "").length;
    for (const r of body) w = Math.max(w, (r[c] || "").length);
    widths.push(w);
  }
  const widest = widths.indexOf(Math.max(...widths));
  return widths.map((w, i) =>
    i === widest ? "width-auto" : (w <= 14 ? "width-min" : ""));
}

function parse(lines, base) {
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) { i++; continue; }

    const fence = line.match(RE_FENCE);
    if (fence) {
      const marker = fence[1];
      const buf = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith(marker)) buf.push(lines[i++]);
      i++;
      out.push(`<pre><code>${escapeHtml(buf.join("\n"))}</code></pre>`);
      continue;
    }

    if (RE_HR.test(line)) { out.push("<hr>"); i++; continue; }

    const h = line.match(RE_HEADING);
    if (h) {
      const level = h[1].length;
      const raw = h[2].trim();
      const id = slug(raw);
      const anchor = `<a class="anchor" href="#${id}" aria-label="Link to this section">#</a>`;
      out.push(`<h${level} id="${id}">${inline(raw, base)}${anchor}</h${level}>`);
      i++;
      continue;
    }

    if (RE_TROW.test(line) && i + 1 < lines.length && RE_TSEP.test(lines[i + 1])) {
      const head = splitRow(line);
      i += 2;
      const body = [];
      while (i < lines.length && RE_TROW.test(lines[i])) body.push(splitRow(lines[i++]));
      const cls = tableClasses(head, body);
      const klass = c => cls[c] ? ` class="${cls[c]}"` : "";
      const th = head.map((c, n) => `<th${klass(n)}>${inline(c, base)}</th>`).join("");
      const rows = body.map(r =>
        "<tr>" + r.map((c, n) => `<td${klass(n)}>${inline(c, base)}</td>`).join("") + "</tr>").join("");
      const headEmpty = head.every(c => c === "");
      out.push(
        `<div class="table-scroll"><table>` +
        (headEmpty ? "" : `<thead><tr>${th}</tr></thead>`) +
        `<tbody>${rows}</tbody></table></div>`
      );
      continue;
    }

    if (RE_QUOTE.test(line)) {
      const buf = [];
      while (i < lines.length && RE_QUOTE.test(lines[i])) {
        buf.push(lines[i].match(RE_QUOTE)[1]);
        i++;
      }
      out.push(`<blockquote>${parse(buf, base).join("\n")}</blockquote>`);
      continue;
    }

    if (RE_UL.test(line) || RE_OL.test(line)) {
      const ordered = RE_OL.test(line);
      const baseIndent = (line.match(ordered ? RE_OL : RE_UL)[1] || "").length;
      const items = [];
      while (i < lines.length) {
        const cur = lines[i];
        const mu = cur.match(RE_UL), mo = cur.match(RE_OL);
        const m = ordered ? mo : mu;
        const anyM = mu || mo;
        if (!anyM) {
          if (cur.trim() && items.length && !RE_HR.test(cur) && !RE_HEADING.test(cur) && !RE_TROW.test(cur) && !RE_QUOTE.test(cur)) {
            items[items.length - 1].lines.push(cur.trim());
            i++;
            continue;
          }
          break;
        }
        const indent = (anyM[1] || "").length;
        if (indent > baseIndent) {
          const sub = [];
          while (i < lines.length) {
            const nm = lines[i].match(RE_UL) || lines[i].match(RE_OL);
            if (!nm || (nm[1] || "").length <= baseIndent) break;
            sub.push(lines[i].slice(baseIndent + 1));
            i++;
          }
          if (items.length) items[items.length - 1].sub = parse(sub, base).join("\n");
          continue;
        }
        if ((mu && ordered) || (mo && !ordered)) break;
        items.push({ lines: [ordered ? mo[3] : mu[2]], sub: "" });
        i++;
      }
      const tag = ordered ? "ol" : "ul";
      const html = items.map(it =>
        `<li>${inline(it.lines.join(" "), base)}${it.sub}</li>`).join("");
      out.push(`<${tag}>${html}</${tag}>`);
      continue;
    }

    const img = line.trim().match(RE_IMG_ONLY);
    if (img) {
      out.push(`<figure><img src="${escapeHtml(img[2])}" alt="${escapeHtml(img[1])}">` +
               (img[1] ? `<figcaption>${inline(img[1], base)}</figcaption>` : "") +
               `</figure>`);
      i++;
      continue;
    }

    const buf = [];
    while (i < lines.length && lines[i].trim() &&
           !RE_HEADING.test(lines[i]) && !RE_HR.test(lines[i]) &&
           !RE_QUOTE.test(lines[i]) && !RE_FENCE.test(lines[i]) &&
           !RE_UL.test(lines[i]) && !RE_OL.test(lines[i]) &&
           !RE_IMG_ONLY.test(lines[i].trim()) &&
           !(RE_TROW.test(lines[i]) && RE_TSEP.test(lines[i + 1] || ""))) {
      buf.push(lines[i++]);
    }
    if (buf.length) out.push(`<p>${inline(buf.join("\n"), base)}</p>`);
    else i++;
  }

  return out;
}

function render(md, base) {
  return parse(md.replace(/\r\n?/g, "\n").split("\n"), base);
}

/* ══════════════════════════════════════════════════════════════════════════
   Post-render passes — same transforms the reader used to do on the DOM,
   done here on the block strings instead.
   ══════════════════════════════════════════════════════════════════════════ */

function stripTags(s) {
  return s.replace(/<[^>]*>/g, "");
}

/* `> **Prediction:** …` — hoist the label onto the box border. */
function labelCallouts(blocks) {
  return blocks.map(b => b.replace(
    /^<blockquote><p><strong>([^<]{1,28}):<\/strong>\s*/,
    (_, label) => `<blockquote data-label="${label}"><p>`));
}

/* §1, §1.1 … on h2/h3, plus the heading list for the TOC. */
function numberSections(blocks) {
  const heads = [];
  let h2 = 0, h3 = 0;
  const out = blocks.map(b => b.replace(
    /<h([23]) id="([^"]+)">([\s\S]*?)<a class="anchor"/g,
    (m, level, id, inner) => {
      let sec;
      if (level === "2") { h2++; h3 = 0; sec = "§" + h2; }
      else { h3++; sec = h2 ? `§${h2}.${h3}` : `§${h3}`; }
      heads.push({ level: +level, id, sec, text: stripTags(inner).trim() });
      return `<h${level} id="${id}" data-sec="${sec}">${inner}<a class="anchor"`;
    }));
  return { blocks: out, heads };
}

/* A tree-drawn table of contents, from the page's own h2/h3. */
function tocHtml(heads) {
  if (heads.length < 3) return null;
  const items = [];
  for (const h of heads) {
    const label = h.sec ? `<span class="sec">${h.sec}</span> ` : "";
    const entry = `${label}<a href="#${h.id}">${h.text}</a>`;
    if (h.level === 2 || !items.length) items.push({ entry, kids: [] });
    else items[items.length - 1].kids.push(entry);
  }
  const html = items.map(it =>
    `<li>${it.entry}` +
    (it.kids.length ? `<ul>${it.kids.map(k => `<li>${k}</li>`).join("")}</ul>` : "") +
    `</li>`).join("");
  return `<details class="toc" open><summary>Contents</summary><ul class="tree">${html}</ul></details>`;
}

/* Style the corpus's `← [Parent] · [Index]` strip and drop hand-written
   `**Next:**` / `**Previous:**` lines — sequential prev/next comes from
   the reading-order algorithm, not from those markers. */
function tidyNavChrome(blocks) {
  for (let i = 0; i < blocks.length; i++) {
    if (/^<p>←/.test(blocks[i])) {
      blocks[i] = blocks[i].replace(/^<p>/, `<p class="nav-up">`);
      break;
    }
  }

  for (let i = blocks.length - 1; i >= 0; i--) {
    if (/^<p><strong>(?:Next|Previous):<\/strong>/.test(blocks[i])) {
      blocks.splice(i, 1);
      if (i > 0 && blocks[i - 1] === "<hr>") blocks.splice(i - 1, 1);
      // keep scanning: some pages have both Next and Previous on one line
      // (already matched) or a lone Previous; one pass from the end is enough
      break;
    }
  }

  // a dateline in italics near the top reads as metadata, not prose
  let seen = 0;
  for (let i = 0; i < blocks.length && seen < 4; i++) {
    if (!blocks[i].startsWith("<p")) continue;
    seen++;
    if (/^<p><em>[\s\S]*<\/em><\/p>$/.test(blocks[i])) {
      blocks[i] = blocks[i].replace(/^<p>/, `<p class="dateline">`);
      break;
    }
  }
}

function pagenavHtml(nav) {
  const cell = (dir, link) => link
    ? `<div class="cell"><span class="dir">${dir}</span><a href="${link.href}">${escapeHtml(link.text)}</a></div>`
    : `<div class="cell empty"><span class="dir">${dir}</span> - </div>`;
  return `<nav class="pagenav grid">` +
    cell("← Prev", nav.prev) +
    cell("Next →", nav.next) +
  `</nav>`;
}

/* ══════════════════════════════════════════════════════════════════════════
   Reading order — DFS over hub READMEs, children ordered by first local
   link appearance, then leftover siblings alphabetically.
   ══════════════════════════════════════════════════════════════════════════ */

const LINK_RE = /\[([^\]]*)\]\(([^)\s]+)\)/g;

function titleOf(md, fallback) {
  const m = md.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : fallback;
}

/** Short label for the prev/next footer (drop long subtitles). */
function navLabel(title) {
  // "Game 1 - Labs: a Tullock contest…" → "Game 1 - Labs"
  // "Compute" stays "Compute"
  const cut = title.split(/:\s+/)[0].trim();
  return cut || title;
}

/** Is `target` a direct structural child of the hub at `hubDoc`? */
function isLocalChild(hubDoc, target) {
  if (target === hubDoc) return false;
  const hubDir = dirname(hubDoc);

  if (!hubDir) {
    // Root: top-level files, or one-segment package READMEs (00-overview/README.md).
    if (!target.includes("/")) return true;
    const parts = target.split("/");
    return parts.length === 2 && parts[1] === "README.md";
  }

  if (!target.startsWith(hubDir + "/")) return false;
  const rest = target.slice(hubDir.length + 1);
  if (!rest.includes("/")) return true; // sibling file
  // Immediate subdirectory, represented by its README only.
  const parts = rest.split("/");
  return parts.length === 2 && parts[1] === "README.md";
}

/**
 * Resolve a markdown href under hubDoc to a local child path, collapsing
 * deep links into a subdir (e.g. startups/ideas.md → startups/README.md)
 * when that README exists.
 */
function resolveLocalChild(href, hubDoc, docSet) {
  const resolved = resolveDoc(href, hubDoc);
  if (!resolved) return null;
  const target = resolved.split("#")[0];
  if (!docSet.has(target)) return null;

  if (isLocalChild(hubDoc, target)) return target;

  // Deep link under a local subdir → that subdir's README, if present.
  const hubDir = dirname(hubDoc);
  if (!hubDir || !target.startsWith(hubDir + "/")) return null;
  const rest = target.slice(hubDir.length + 1);
  const sub = rest.split("/")[0];
  if (!sub) return null;
  const subReadme = hubDir + "/" + sub + "/README.md";
  if (docSet.has(subReadme) && isLocalChild(hubDoc, subReadme)) return subReadme;
  return null;
}

/**
 * Prefer the ## Contents block when present (root index), so prose links
 * earlier in the page do not scramble package order.
 */
function structuralRegion(md) {
  const start = md.search(/^##\s+Contents\s*$/m);
  if (start === -1) return md;
  let region = md.slice(start);
  const end = region.search(/\n---\s*\n/);
  if (end !== -1) region = region.slice(0, end);
  return region;
}

/**
 * Children of a hub: `linked` in first-appearance order from the structural
 * region, then alpha `leftovers` not mentioned there.
 */
function orderedChildren(hubDoc, md, docSet) {
  const linked = [];
  const seen = new Set();
  const region = structuralRegion(md);

  for (const m of region.matchAll(new RegExp(LINK_RE.source, "g"))) {
    const child = resolveLocalChild(m[2], hubDoc, docSet);
    if (!child || seen.has(child)) continue;
    seen.add(child);
    linked.push(child);
  }

  const leftovers = [];
  for (const doc of docSet) {
    if (seen.has(doc) || doc === hubDoc) continue;
    if (!isLocalChild(hubDoc, doc)) continue;
    leftovers.push(doc);
  }
  leftovers.sort((a, b) => a.localeCompare(b));
  return { linked, leftovers, all: linked.concat(leftovers) };
}

/** First target of a hand-written `**Next:**` line, if any. */
function explicitNext(doc, md, docSet) {
  const line = md.match(/^\*\*Next:\*\*\s*(.+)$/m);
  if (!line) return null;
  const link = line[1].match(/\[([^\]]*)\]\(([^)\s]+)\)/);
  if (!link) return null;
  const resolved = resolveDoc(link[2], doc);
  if (!resolved) return null;
  const target = resolved.split("#")[0];
  return docSet.has(target) ? target : null;
}

/**
 * Follow `**Next:**` only to a peer in the same directory, or into an
 * immediate subdirectory hub — never across parts via a stray link.
 */
function isNearby(from, to) {
  const fromDir = dirname(from);
  const toDir = dirname(to);
  if (fromDir === toDir) return true;
  return to.endsWith("/README.md") && dirname(toDir) === fromDir;
}

/**
 * Linear reading order for the whole corpus.
 * Returns { order: string[], titles: Map<doc,string> }.
 *
 * Algorithm:
 * 1. DFS from the root README.
 * 2. At each hub (README), children are local links in structural order
 *    (## Contents when present; else whole page), then alpha leftovers.
 * 3. After placing any page, follow its `**Next:**` into an unvisited
 *    nearby page that is NOT already a linked child of the active hub
 *    (hub table order wins over stale Next; Next still chains leftovers
 *    like ideas-verification → ideas-atoms).
 */
function buildReadingOrder(docSet, sources) {
  const order = [];
  const visited = new Set();
  const titles = new Map();

  for (const [doc, md] of sources) {
    titles.set(doc, navLabel(titleOf(md, doc)));
  }

  /**
   * @param {string} doc
   * @param {Set<string>|null} linkedSiblings hub children discovered via
   *   links (not leftovers). Explicit Next into this set is ignored so a
   *   stale Next cannot reorder the hub table.
   */
  function visit(doc, linkedSiblings = null) {
    if (visited.has(doc) || !docSet.has(doc)) return;
    visited.add(doc);
    order.push(doc);

    const md = sources.get(doc) || "";

    if (doc === DEFAULT_DOC || doc.endsWith("/README.md")) {
      const { linked, leftovers } = orderedChildren(doc, md, docSet);
      const linkedSet = new Set(linked);
      for (const k of linked) visit(k, linkedSet);
      for (const k of leftovers) visit(k, linkedSet);
    }

    const next = explicitNext(doc, md, docSet);
    if (
      next &&
      !visited.has(next) &&
      isNearby(doc, next) &&
      !(linkedSiblings && linkedSiblings.has(next))
    ) {
      visit(next, linkedSiblings);
    }
  }

  visit(DEFAULT_DOC);

  // Orphans (unlinked meta docs, etc.) — stable alpha tail.
  const orphans = [...docSet].filter(d => !visited.has(d)).sort((a, b) => a.localeCompare(b));
  for (const d of orphans) visit(d);

  return { order, titles };
}

/** prev/next link objects for a doc, relative to that doc's page. */
function sequentialNav(doc, order, titles) {
  const i = order.indexOf(doc);
  if (i === -1) return { prev: null, next: null };
  const link = (other) => other
    ? { href: relHref(doc, other), text: titles.get(other) || other }
    : null;
  return {
    prev: link(i > 0 ? order[i - 1] : null),
    next: link(i < order.length - 1 ? order[i + 1] : null),
  };
}

/* ══════════════════════════════════════════════════════════════════════════
   Page chrome
   ══════════════════════════════════════════════════════════════════════════ */

function breadcrumb(doc) {
  const segs = doc.split("/");
  const out = [`<a href="${relHref(doc, DEFAULT_DOC)}">future</a>`];
  let acc = "";
  segs.forEach((seg, idx) => {
    acc = acc ? acc + "/" + seg : seg;
    const last = idx === segs.length - 1;
    if (last) out.push(`<span>${escapeHtml(seg)}</span>`);
    else out.push(`<a href="${relHref(doc, acc + "/README.md")}">${escapeHtml(seg)}</a>`);
  });
  return out.join(`<span class="sep"> / </span>`);
}

// Relative path from a rendered page up to the site root ("" at root, "../" one deep).
function rootPrefix(doc) {
  const d = dirname(outPath(doc));
  if (!d) return "";
  return "../".repeat(d.split("/").length);
}

// Client script: theme, ← → paging, Find (catalog search), and redirect for
// old `#/path.md` deep links. Content never depends on it.
function clientScript(doc) {
  const catalogUrl = rootPrefix(doc) + "catalog.json";
  const root = rootPrefix(doc);
  return `<script>
(function () {
  "use strict";
  var CATALOG_URL = ${JSON.stringify(catalogUrl)};
  var ROOT = ${JSON.stringify(root)};

  var m = location.hash.match(/^#\\/?(.+\\.md)(?:#(.*))?$/);
  if (m) {
    var p = m[1].replace(/(^|\\/)README\\.md$/, "$1").replace(/\\.md$/, ".html");
    location.replace("/" + p + (m[2] ? "#" + m[2] : ""));
    return;
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* ── theme ─────────────────────────────────────────────────────────────── */
  var rootEl = document.documentElement;
  var stored = localStorage.getItem("theme");
  if (stored) rootEl.setAttribute("data-theme", stored);
  function toggleTheme() {
    var isDark = rootEl.getAttribute("data-theme") === "dark" ||
      (!rootEl.getAttribute("data-theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    var next = isDark ? "light" : "dark";
    rootEl.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }
  var themeBtn = document.getElementById("theme");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  /* ── find / catalog ────────────────────────────────────────────────────── */
  var findDialog = document.getElementById("find-dialog");
  var findInput  = document.getElementById("find-input");
  var findList   = document.getElementById("find-results");
  var findBtn    = document.getElementById("find");
  var catalog = null;
  var findHits = [];
  var findSel = 0;

  function mdToHref(mdPath) {
    var html;
    if (mdPath === "README.md") html = "./";
    else if (mdPath.slice(-10) === "/README.md") html = mdPath.slice(0, -"README.md".length);
    else html = mdPath.replace(/\\.md$/, ".html");
    return ROOT + html;
  }

  async function ensureCatalog() {
    if (catalog) return catalog;
    var res = await fetch(CATALOG_URL, { cache: "no-cache" });
    if (!res.ok) throw new Error("catalog.json " + res.status);
    catalog = await res.json();
    return catalog;
  }

  function scoreEntry(q, entry) {
    var t = entry.title.toLowerCase();
    var p = entry.path.toLowerCase();
    if (t === q || p === q) return 100;
    if (t.indexOf(q) === 0 || p.indexOf(q) === 0) return 80;
    if (t.indexOf(q) !== -1 || p.indexOf(q) !== -1) return 50;
    var parts = q.split(/\\s+/).filter(Boolean);
    if (parts.length > 1 && parts.every(function (w) {
      return t.indexOf(w) !== -1 || p.indexOf(w) !== -1;
    })) return 40;
    return 0;
  }

  function renderFindHits() {
    findList.innerHTML = findHits.map(function (e, i) {
      return '<li role="option" class="' + (i === findSel ? "is-active" : "") + '" data-i="' + i + '">' +
        '<a href="' + escapeHtml(mdToHref(e.path)) + '">' +
        '<span class="find-title">' + escapeHtml(e.title) + '</span>' +
        '<span class="find-path">' + escapeHtml(e.path) + '</span></a></li>';
    }).join("") || '<li class="find-empty">No matches</li>';
  }

  function runFind() {
    var q = findInput.value.trim().toLowerCase();
    if (!catalog) return;
    if (!q) {
      findHits = catalog.slice(0, 40);
    } else {
      findHits = catalog
        .map(function (e) { return { e: e, s: scoreEntry(q, e) }; })
        .filter(function (x) { return x.s > 0; })
        .sort(function (a, b) {
          return b.s - a.s || a.e.path.localeCompare(b.e.path);
        })
        .slice(0, 40)
        .map(function (x) { return x.e; });
    }
    findSel = 0;
    renderFindHits();
  }

  async function openFind() {
    try {
      await ensureCatalog();
    } catch (err) {
      alert("Could not load catalog.json: " + err.message);
      return;
    }
    findInput.value = "";
    runFind();
    if (typeof findDialog.showModal === "function") findDialog.showModal();
    else findDialog.setAttribute("open", "");
    // Defer focus so mobile keyboards open after the dialog paints.
    setTimeout(function () { findInput.focus(); }, 0);
  }

  function closeFind() {
    if (findDialog.open) findDialog.close();
  }

  function goFindSel() {
    var e = findHits[findSel];
    if (!e) return;
    closeFind();
    location.href = mdToHref(e.path);
  }

  if (findBtn) findBtn.addEventListener("click", openFind);
  if (findInput) findInput.addEventListener("input", runFind);
  if (findList) findList.addEventListener("click", function (e) {
    var a = e.target.closest("a");
    if (a) closeFind();
  });
  if (findDialog) {
    findDialog.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") {
        findSel = Math.min(findHits.length - 1, findSel + 1);
        renderFindHits();
        e.preventDefault();
      } else if (e.key === "ArrowUp") {
        findSel = Math.max(0, findSel - 1);
        renderFindHits();
        e.preventDefault();
      } else if (e.key === "Enter") {
        goFindSel();
        e.preventDefault();
      }
    });
    // method=dialog closes on submit; stop empty submits from racing navigation.
    var form = document.getElementById("find-form");
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      goFindSel();
    });
  }

  /* ── keys ──────────────────────────────────────────────────────────────── */
  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var t = e.target;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    if (e.key === "t") { toggleTheme(); return; }
    if (e.key === "/" || e.key === "s") { openFind(); e.preventDefault(); return; }
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    var sel = e.key === "ArrowLeft"
      ? ".pagenav .cell:first-child:not(.empty) a"
      : ".pagenav .cell:last-child:not(.empty) a";
    var go = document.querySelector(sel);
    if (go) { location.href = go.href; e.preventDefault(); }
  });
})();
</script>`;
}

function page(doc, title, bodyClass, contentHtml) {
  const stylesheet = relHref(doc, DEFAULT_DOC) === "./"
    ? "style.css"
    : path.posix.relative(dirname(outPath(doc)), "style.css");
  const urlPath = "/" + outPath(doc).replace(/(^|\/)index\.html$/, "$1");
  const srcHref = path.posix.relative(dirname(outPath(doc)) || ".", doc);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<meta name="description" content="A fifteen-year forecast built from first principles.">
<meta name="color-scheme" content="light dark">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>▚</text></svg>">
<link rel="stylesheet" href="${stylesheet}">
</head>
<body>

<div class="debug-grid" aria-hidden="true"></div>

<header class="masthead">
  <table class="width-auto">
    <tbody>
      <tr>
        <td class="width-auto" colspan="2">
          <h1><a href="${relHref(doc, DEFAULT_DOC)}">${SITE}</a></h1>
          <span class="subtitle">A forecast built from first principles</span>
        </td>
      </tr>
      <tr>
        <th class="width-min">Section</th>
        <td class="width-auto crumb" id="crumb">${breadcrumb(doc)}</td>
      </tr>
      <tr class="keys-row">
        <th class="width-min">Keys</th>
        <td class="width-auto meta">
          <kbd>←</kbd> <kbd>→</kbd> page · <kbd>/</kbd> find · <kbd>t</kbd> theme
        </td>
      </tr>
    </tbody>
  </table>
</header>

<hr>

<main id="content" class="${bodyClass}">
${contentHtml}
</main>

<footer class="statusbar">
  <div class="statusbar-inner">
    <span class="sb-path" id="sb-path">${escapeHtml(urlPath)}</span>
    <span class="sb-actions">
      <a class="sb-link" href="${rootPrefix(doc)}ask/" title="Ask the corpus (RAG)">Ask</a>
      <button id="find" type="button" title="Find a page (/)">Find</button>
      <button id="theme" type="button" title="Toggle light / dark (t)">Theme</button>
      <a class="sb-link" href="${srcHref}">Src</a>
    </span>
  </div>
</footer>

<dialog id="find-dialog" class="find-dialog" aria-label="Find a page">
  <form method="dialog" class="find-form" id="find-form">
    <label class="find-label" for="find-input">Find page</label>
    <input id="find-input" type="search" enterkeyhint="go" autocomplete="off"
      spellcheck="false" placeholder="Title or path…" aria-controls="find-results">
    <ul id="find-results" class="find-results" role="listbox"></ul>
    <p class="find-hint"><kbd>↑</kbd><kbd>↓</kbd> select · <kbd>Enter</kbd> open · <kbd>Esc</kbd> close</p>
  </form>
</dialog>

${clientScript(doc)}

</body>
</html>
`;
}

/* ══════════════════════════════════════════════════════════════════════════
   Build
   ══════════════════════════════════════════════════════════════════════════ */

async function mdFiles() {
  const found = [];
  async function walk(dir) {
    for (const e of await fs.readdir(dir, { withFileTypes: true })) {
      if (e.name.startsWith(".") || e.name === "_site" || e.name === "node_modules") continue;
      const full = path.join(dir, e.name);
      if (e.isDirectory()) await walk(full);
      else if (e.name.endsWith(".md")) found.push(path.relative(ROOT, full).split(path.sep).join("/"));
    }
  }
  await walk(ROOT);
  return found.sort();
}

async function buildDoc(doc, md, nav) {
  const isIndex = doc === DEFAULT_DOC;

  let blocks = render(md, doc);
  blocks = labelCallouts(blocks);

  let heads = [];
  if (!isIndex) ({ blocks, heads } = numberSections(blocks));

  tidyNavChrome(blocks);

  if (!isIndex) {
    const toc = tocHtml(heads);
    if (toc) {
      // after the title block: the first rule, or the h1
      let at = blocks.findIndex(b => b === "<hr>");
      if (at === -1) at = blocks.findIndex(b => b.startsWith("<h1"));
      blocks.splice(at + 1, 0, toc);
    }
  }

  blocks.push(pagenavHtml(nav));
  blocks.push(`<p class="msg"><a href="${REPO}/blob/main/${doc}" rel="noopener noreferrer" target="_blank">View markdown source</a></p>`);

  const h1 = blocks.find(b => b.startsWith("<h1"));
  const h1Text = h1 ? stripTags(h1).replace(/#$/, "").trim() : doc;
  const title = isIndex ? h1Text : `${h1Text} · ${SITE}`;

  const html = page(doc, title, isIndex ? "index" : "numbered", blocks.join("\n"));
  const out = path.join(OUT, outPath(doc));
  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(out, html);
}

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  for (const ent of await fs.readdir(src, { withFileTypes: true })) {
    if (ent.name.startsWith(".")) continue;
    const from = path.join(src, ent.name);
    const to = path.join(dest, ent.name);
    if (ent.isDirectory()) await copyDir(from, to);
    else await fs.copyFile(from, to);
  }
}

async function copyStatic(docs) {
  for (const f of [...docs, "style.css", "catalog.json", "check-invariants.sh"]) {
    const out = path.join(OUT, f);
    await fs.mkdir(path.dirname(out), { recursive: true });
    await fs.copyFile(path.join(ROOT, f), out);
  }

  // Ask UI (RAG + LFM2.5) — not part of the markdown corpus.
  const askSrc = path.join(ROOT, "ask");
  try {
    await fs.access(askSrc);
    await copyDir(askSrc, path.join(OUT, "ask"));
  } catch {
    /* optional */
  }

  // Prebuilt retrieval assets for static / browser fallback.
  const ragSrc = path.join(ROOT, ".rag");
  try {
    await fs.access(path.join(ragSrc, "index.json"));
    const ragOut = path.join(OUT, "rag");
    await fs.mkdir(ragOut, { recursive: true });
    for (const name of ["index.json", "vectors.bin", "vectors.meta.json"]) {
      const from = path.join(ragSrc, name);
      try {
        await fs.copyFile(from, path.join(ragOut, name));
      } catch {
        /* vectors optional until embed.mjs has run */
      }
    }
  } catch {
    /* optional until reindex */
  }
}

const docs = await mdFiles();
const docSet = new Set(docs);
const sources = new Map();
for (const doc of docs) {
  sources.set(doc, await fs.readFile(path.join(ROOT, doc), "utf8"));
}

const { order, titles } = buildReadingOrder(docSet, sources);

await fs.rm(OUT, { recursive: true, force: true });
for (const doc of docs) {
  await buildDoc(doc, sources.get(doc), sequentialNav(doc, order, titles));
}
await copyStatic(docs);
console.log(`built ${docs.length} pages → _site/ (${order.length} in reading order)`);
