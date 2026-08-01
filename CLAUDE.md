# Working in this repo

Three things live here, and they have different rules.

1. **The corpus** — a ~100,000-word forecast in `00-overview/` … `09-macro/`.
   Atomic pages, hand-maintained, governed by invariants.
2. **The blog** — [Ground Truth](blog/_style-guide.md), in `blog/`. Essays that
   take one claim out of the corpus and put current numbers against it.
3. **`/ask`** — browser RAG over the corpus. Retrieval in `tools/`, UI in `ask/`.

Everything is static. `build.mjs` renders markdown to HTML with a hand-rolled
parser, `deploy.sh` runs invariants, builds, and rsyncs to the host.

```
node build.mjs        # → _site/
./check-invariants.sh # corpus rules, also regenerates catalog.json
./deploy.sh [--check] # invariants + build + rsync, --check verifies live
```

Never hand-edit `_site/`. It is deleted and rebuilt every time.

## Invariants

`check-invariants.sh` enforces the corpus rules: a parent nav link near the
top, a 180-line cap, ≤10 content files per directory, ≤3 directory levels, and
no broken internal links. `deploy.sh` runs it first and `set -e` means a
failure blocks the deploy.

`blog/` and this file are exempt from the *corpus* rules. The blog carries its
own page chrome and has no length ceiling, so the nav and line-cap checks would
be nonsense there.

Link resolution is scoped differently, by whether a file ships rather than by
directory. Anything published is checked, including blog posts. Never-published
working material is not: this file, and any `_`-prefixed draft. So a broken
link in a post fails the build, and a stale link in a draft does not block you.

Check 7 rewrites `catalog.json`, which drives the Find dialog. It covers the
corpus only; `build.mjs` folds the blog posts in at build time.

## Authoring a blog post

Create `blog/<slug>.md` with front matter. That is the whole workflow.

```
---
title: ...
dek: one or two sentences, shown under the title and in the feed
date: YYYY-MM-DD
tags: comma, separated
takeaway: the one line worth keeping, rendered in a box at the foot
corpus: 01-substrate/data.md, 02-games/4-labor.md
---
```

- Visibility is the date, nothing else. Every post builds and ships. The
  index and the older/newer chain stamp each entry with `data-post-date`, and
  the client script hides future ones at view time, so a post surfaces on its
  date with no rebuild. `blog/archives/` lists every post, future ones
  badged. Only the RSS feed and the Find catalog are build-time gated, so
  they pick up a new post at the next deploy. New posts are dated one day
  after the previous post.
- `corpus:` renders as a "Where this comes from" source list. A claim with no
  corpus page behind it should not be in the post.
- A leading `# Title` in the body is stripped, since the header renders
  `title:`. Keep it so the file still reads on GitHub.
- Files starting with `_` are working material, not posts. That is how
  `_style-guide.md` sits next to the posts without publishing.
- `page: true` makes a standing page instead of a post: blog chrome and an
  "Updated" date, but no feed entry, no row in the post table, no place in
  the older/newer chain. `forecasts.md` (the scorecard, reviewed quarterly)
  and `framework.md` (the concept map, updated whenever a post coins a name)
  are the two that exist. Keep both current when posts change.
- Posts are built separately from the corpus: no section numbering, no reading
  order, their own masthead. Do not add them to the corpus walk.

Read [the style guide](blog/_style-guide.md) before writing. It defines the
Wait But Why voice, where we deliberately break it, and a pre-publish
checklist.

## Illustrations

Drawings are part of the argument, not decoration. Set up the question, show
the image, then refer to what is actually in the frame.

Generated with Codex image generation, passing two real Wait But Why drawings
as references so the style is shown rather than described:

```
codex exec -s workspace-write -i ref1.png -i ref2.png - < prompt.md
```

Rules that matter, each learned the hard way:

- **Greyscale only.** Black linework, white ground, flat mid grey `#c8c8c8`
  fills, no frame, no panel colour. Greyscale is what lets the dark theme
  invert the images instead of burning a white rectangle into a black page.
- **No text inside the drawing.** Image models garble lettering and a
  misspelling is permanent. The caption carries the meaning. Only
  `cost-vs-price` has words, and only two.
- **Lossless AVIF.** On flat line art it beats PNG by ~80% *and* ties lossy
  q75, so there is no reason to trade quality away. 24 images total 1.5M.
  `PIL` handles it: `im.convert("L").save(out, "AVIF", lossless=True)`.
- Run several `codex exec` batches in parallel. They race on
  `~/.codex/models_cache.json`; if that throws schema errors, delete it and it
  refetches cleanly.

`build.mjs` copies `blog/img/` into the output. A markdown line containing only
an image becomes a `<figure>` with the alt text as the caption, so write the
alt text as a real caption that adds a fact.

## Writing

Run the `unsloppify` skill on any prose deliverable, posts included. Its
precedence ladder settles conflicts: **facts beat quoted material beats the
requested voice beats domain register beats any anti-slop rule.**

The blog voice deliberately keeps devices a generic slop filter flags, such as
self-answered questions and short punch paragraphs. Keep them where they are
doing rhythmic work, cut them where they are reflex.

House mechanical rules, in the corpus and the blog: **no em dashes, no
semicolons, no middle dots.** Use commas, colons, or a new sentence.

The scanner only catches literal phrases. Structural tells need a real read, so
follow the skill's procedure: read the structure, then read in sections, then
collect *every* finding before rewriting anything. Do not treat a flagged line
as handled because you touched part of it.

## Verifying

Existence and parse checks are not verification. Render it and look.

- `qlmanage` square-crops thumbnails and will silently hide a third of a wide
  image. Use headless Chrome for a true-aspect screenshot:
  `--headless --screenshot=out.png --window-size=1200,700 file://...`
- To check the dark theme, stamp `data-theme="dark"` on `<html>` in a copy of
  the built page. That is what the theme toggle does.
- After deploying, curl the new URLs for status *and* content type. AVIF
  should come back `image/avif`.
