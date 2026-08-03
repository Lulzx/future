# The Takeoff Signature Panel — build spec, v2

Working draft, `_`-prefixed so it never publishes and never joins the corpus
walk. Supersedes the scratchpad draft of 2026-08-03.

---

## 0. The goal

Operationalize the measurement of automated AI research into a **living,
public, independent** indicator system. Each word is a mechanism, not a mood:

- **Living.** Quarterly readings, append-only files, a state flag that
  recomputes on every build, and staleness that renders as staleness. The
  panel is never "done", it is either current or visibly rotting.
- **Public.** Every reading carries a `source_url` a stranger can open. The
  raw-to-state transform is code in this repo, runnable standalone. Anyone
  running it on the same files gets the same answer or has found a bug.
- **Independent.** No series depends on a lab telling us anything. Where a
  third party maintains the ruler (Epoch, METR, LBNL, FRED), the panel
  transcribes their published number with a citation rather than re-deriving
  a private variant, because a ruler we control is a ruler we could bend.

One honesty clause up front, from `06-uncertainties/recursive-self-improvement.md`:
the core variable, research cycle time inside frontier labs, is private by
construction and may stay unobservable from outside for years. This panel does
not pretend otherwise. It measures the named public proxies and the governors,
and section 10 is the ladder toward the loop itself as pieces of it become
computable.

---

## 1. The claim under measurement

Composite of `blog/framework.md:87` and
`06-uncertainties/recursive-self-improvement.md` §"Watching a private number
from outside" (paraphrase, not a quotation):

A strengthening research loop shows up as the frontier pulling away from
followers while the governors visibly strain. A quiet takeoff with relaxed
governors is the pattern the governor model says should not exist.

Two arms, and the conjunction is the whole point.

- **Arm P, pull-away.** Is the frontier compounding faster than the followers
  who share its methods?
- **Arm G, governor strain.** Are verification, physics, and finance being
  pushed harder to buy the same increment?

The panel publishes both arms separately and always. It never publishes a
single blended number, because a blend can hide the conjunction, and the
conjunction is the falsifiable content.

**What would embarrass this panel.** Arm P firing with Arm G relaxed. That
reading says the governor model is wrong, not merely mis-estimated. In v2 this
is a computed state (`anomaly`, section 5), not a paragraph of intent, so the
embarrassment is machine-detectable and prints itself.

---

## 2. The design rule that anchors everything

**The panel is the resolution machinery for scorecard row 27. It computes the
row's frozen rule exactly. It does not define a rival one.**

Row 27 (`blog/forecasts.md:250`) is already committed, with numbers:

- **Resolves yes** if the frontier-to-open-weight lag, per Epoch AI's stricter
  equivalence rule or its named successor, stays at or below 12 months through
  31 December 2029.
- **Resolves no** if the lag exceeds 12 months for two consecutive published
  readings *and* at least two of three governor-strain signals are
  concurrently visible: real rates up more than 100 basis points from their
  2024 to 2026 average, US interconnection queues lengthening year over year,
  or the B8 verifiable-versus-unverifiable gap widening.
- A widening lag with relaxed governors resolves neither way and gets logged
  as the anomaly.

The v1 draft invented its own trigger (270/180 days on a hand-frozen task
basket) and then proposed retro-wiring row 27 to it. That violates the
scorecard's own freeze rule and would have put two conflicting rulers in
public. v2 inverts the dependency: the row's numbers are the panel's triggers,
the row's named sources are the panel's sources, and the row gains nothing but
a link to the panel as the place where its rule is computed and charted. No
row edit, no divergence possible.

Two consequences worth stating:

- The hand-frozen six-task basket from v1 is demoted to the **named-successor
  fallback**: it gets built only if Epoch stops publishing or changes its
  equivalence rule, and its method note is written now, while nothing is at
  stake, so the fallback is pre-committed rather than improvised under
  pressure.
- Series split into **resolving** and **context**. Resolving series are the
  ones row 27's rule names, and only they feed the state flag. Context series
  inform the quarterly prose and the watch commentary but can never flip the
  state. This is the containment mechanism for gameable series (section 4,
  P2): a lab optimizing against a context series moves a chart, not a
  resolution.

---

## 3. Data model

One file per series, `indicators/series/<id>.json`. Append-only. The git
history is the audit trail, which is most of what "independent" means here:
a threshold cannot be moved quietly, because moving it is a commit with a diff.

```json
{
  "id": "follower-gap",
  "arm": "P",
  "resolving": true,
  "title": "Frontier-to-open-weight lag",
  "unit": "months",
  "direction": "up-is-pull-away",
  "cadence": "quarterly",
  "stale_after_days": 200,
  "trigger": {
    "rule": "lag exceeds 12 months for two consecutive published readings",
    "committed": "2026-08-14",
    "source": "blog/forecasts.md row 27, frozen at open",
    "revises": "06-uncertainties/recursive-self-improvement.md"
  },
  "ruler": {
    "maintainer": "Epoch AI, stricter equivalence rule",
    "fallback": "indicators/method/follower-gap-basket.md"
  },
  "method": "indicators/method/follower-gap.md",
  "readings": [
    {
      "date": "2026-08-03",
      "value": 5.5,
      "source_url": "https://…",
      "self_reported": false,
      "note": "Epoch dashboard read, stricter rule"
    }
  ],
  "revisions": []
}
```

Field rules that carry weight:

- `direction` is stated per series and the arm math sign-corrects from it.
  For the follower gap, **up is pull-away**: a widening lag is the RSI-positive
  direction, a narrowing one is the evidence-against pattern the corpus is
  emphatic about. (The v1 draft had this inverted in its schema example, which
  would have sign-flipped Arm P at implementation. The direction note now
  lives in the schema *and* the method note so the two can be cross-checked.)
- `resolving` marks whether the series feeds the state flag (section 2). The
  panel renders resolving and context series in visibly different registers.
- `source_url` is **required on every reading**. A reading without one does
  not render. This is the single mechanism that makes the panel checkable by
  a stranger.
- `self_reported: true` marks any number originating with a lab. It renders
  with a visible flag and is excluded from arm scoring. `07-indicators/README.md`
  already commits to weighting instrumented above self-reported, so this
  enforces a rule the corpus has already made.
- `revisions` is how anything under `trigger` changes. Editing `trigger.rule`
  in place without a matching `revisions` entry is a lint failure, not a style
  issue. For resolving series there is a harder rule: `trigger` fields tied to
  row 27 may not change at all while the row is open, because the row is
  frozen and the panel is its computation.
- `stale_after_days` makes rot visible. A reading past its window renders as
  stale rather than as a flat line, which is the difference between "nothing
  moved" and "nobody looked". `07-indicators/README.md:60` states that absence
  of movement is information, and that is only true when it is real absence.

Method notes are prose and want to be markdown, so they live in
`indicators/method/<id>.md`. That path would otherwise join the corpus walk,
so `mdFiles()` in `build.mjs` gains an `indicators` skip alongside the `blog`
one, and each of the six `skip = {...}` sets in `check-invariants.sh` gains
`'indicators'`. Seven one-line edits, matching the precedent `blog` already
set.

---

## 4. The slice 1 series

Four series, chosen on one criterion: computable now, from public sources,
without a lab telling us anything. Three are resolving because row 27 names
them. One is context.

### P1. Frontier-to-open-weight lag — resolving

Epoch AI's published lag under the stricter equivalence rule, transcribed
quarterly with the dashboard URL as the source.

- **Direction:** up is pull-away. A narrowing lag is evidence *against* RSI,
  per `recursive-self-improvement.md:70`, and the panel must never silently
  invert it.
- **Trigger (row 27's, frozen):** lag above 12 months for two consecutive
  published readings.
- **Ruler risk, stated:** the panel does not control Epoch. If Epoch stops
  publishing or materially changes the equivalence rule, the pre-committed
  basket fallback activates, runs in parallel with the last Epoch readings
  where possible, and the splice is published as a break in the series, not
  smoothed over.

### G1. Finance governor — resolving

Long real rates against their committed 2024 to 2026 average baseline, read
from FRED (10-year TIPS yield), with the hyperscaler and datacenter credit
spread shown as a context component on the same card.

- **Trigger (row 27's, frozen):** real rates more than 100 basis points above
  the 2024 to 2026 average. The baseline window is committed in the series
  file and never re-anchored.
- **Why it matters:** it is the cheapest series to keep current, it is
  impossible for a lab to manage, and it carries the argument original to this
  corpus. `success-tax.md` and `09-macro/rates.md` own the claim.

### G2. Physics governor, interconnection queues — resolving

US interconnection queue depth and duration, from LBNL's annual Queued Up
report.

- **Trigger (row 27's, frozen):** queues lengthening year over year.
- **Cadence:** annual, because the source is annual. `stale_after_days: 430`.
  The panel renders the true cadence rather than faking a quarterly pulse.
- **Why it is in slice 1:** row 27's no-condition needs *two* concurrent
  governor signals. With only G1 implemented, the panel could never compute a
  no, only fail to. G1 plus G2 makes the two-of-three test computable. The
  missing third (B8) means slice 1 can under-detect strain but never
  over-detect it, which is the conservative side to err on for a row opened
  at 80%.

### P2. Autonomous task horizon — context, never resolving

Task length a frontier model completes at fixed reliability, from METR's
published time-horizon results, with doubling time fitted across readings.

- **Why it is here at all:** it is the only public series that faces research
  automation directly rather than through its side effects, and the goal of
  this system is to measure automated research, not only its shadows.
- **Why it can never resolve anything:** it is the most demo-contaminated and
  capture-exposed series in the panel, precisely because it is the number
  labs most want to move (`07-indicators/README.md:58`, failure mode 2). And
  the corpus's own standard, B8 in `07-indicators/diffusion/capability.md:18`,
  is task horizon *in production deployment*, not in evals. This series is
  the eval-side shadow of that standard and its card says so on its face.
  Context status is the containment: a gamed rise here changes commentary,
  never state.

Arm G still rests on two legs rather than three, and the panel says so on its
face rather than implying coverage it does not have. B8 arrives in slice 2.

---

## 5. State machine and index math

Two layers, both deliberately dull.

**Layer 1, the state flag.** A pure function of the resolving series,
implementing row 27's logic verbatim:

- `P-condition` = P1 above 12 months for two consecutive published readings.
- `G-condition` = at least two governor signals concurrently visible (G1, G2,
  and B8 once slice 2 adds it).
- State:
  - `absent` — P-condition false.
  - `watch` — P1 above 12 months for one reading, persistence not yet met.
  - `present` — P-condition and G-condition both true. Row 27 resolves no.
  - `anomaly` — P-condition true, G-condition false. Row 27 resolves neither
    way, and the panel prints, in the banner, that this is the pattern the
    governor model says should not exist. The embarrassment clause from
    section 1, as code.

**Layer 2, trend display.** Each series is z-scored against its own committed
baseline window, never a rolling one, because a rolling baseline lets a slow
drift normalise itself into invisibility. Arm P and Arm G render as
sign-corrected mean z-scores, for the chart, not for the state. The state
never reads layer 2.

The panel prints both arms, the state, and every component. Anyone running
the code on the same files gets the same answer or has found a bug.

---

## 6. Repo layout and build hook

```
indicators/
  series/follower-gap.json
  series/task-horizon.json
  series/finance-governor.json
  series/interconnection-queues.json
  method/<id>.md                    (skip-set change, section 3)
  method/follower-gap-basket.md     (the pre-committed Epoch fallback)
  readings/2026-Q3.md               (quarterly log, prose, what moved and why)
tools/indicators.mjs                (load, validate, state, arms, SVG)
blog/takeoff-signature.md           (page: true, the public panel)
```

**The page is a standing blog page, not a corpus page.** `page: true` is the
shape `forecasts.md` and `framework.md` already use: blog chrome, an "Updated"
date, no feed entry, no place in the older/newer chain. It also sidesteps the
180-line cap and the reading order, both of which would be wrong for a page
that grows a row every quarter.

**Build hook.** `build.mjs` gains one directive. A fence with info-string
`panel` in a blog page is replaced with generated HTML:

````
```panel
takeoff-signature
```
````

The parser already dispatches on fence info-strings (`RE_FENCE`,
`build.mjs:141`), so this is a small branch in the block parser plus a call
into `tools/indicators.mjs`. The generator returns: the state banner, one
card per series with a sparkline, current value, trigger text, resolving or
context badge, and last-read date, and a source table with one row per
reading carrying its URL.

**Sparklines are inline SVG using `currentColor`, not images.** The AVIF
invert filter at `style.css:941` exists for raster drawings. An SVG that
inherits the text colour adapts to both themes with no filter and stays
crisp, which satisfies the greyscale rule without its machinery.

**Failure behaviour:** a missing or malformed series file fails the build
loudly. A panel that silently renders three of four series is worse than no
panel, because it reads as complete.

---

## 7. Independence, stated as mechanisms

Every one of these is checkable by someone who does not trust us:

- Every reading carries a public `source_url`.
- The raw-to-state transform is code in the repo, runnable standalone.
- Triggers carry a `committed` date preceding the readings that test them,
  and the resolving triggers are copies of a row frozen in public since
  August 2026.
- Data files are append-only, and revisions are entries rather than edits.
- Lab-originated numbers are flagged and excluded from scoring.
- Rulers are third-party where possible (Epoch, METR, LBNL, FRED), and each
  has a named, pre-committed fallback so a ruler dying cannot become an
  excuse to improvise a friendlier one.

Lint, as check 8 in `check-invariants.sh`: series JSON parses, every reading
has a source URL, no reading is future-dated, `trigger.committed` precedes
the earliest reading, any `trigger` change since the previous commit has a
matching `revisions` entry, and resolving series' triggers match the frozen
row text byte for byte where they quote it.

---

## 8. Operating cadence

Quarterly, aligned with the dashboard and scorecard reviews, one commit:

1. Append a reading to each due series with its source URL. G2 is annual and
   will usually show as current-but-unchanged, which is itself information.
2. Write `indicators/readings/YYYY-Qn.md`: what moved, what did not, any
   trigger crossed, and one paragraph on the context series.
3. Rebuild. The state flag recomputes itself.
4. Append a line to row 27's annotation log in `forecasts.md`. Never edit
   the row.

Event-driven reads on top of the cadence: an Epoch methodology change, a
state transition, or (slice 2) a verification-governor event such as a
learned judge taking on production liability. Events get a dated entry in the
quarterly log even when they arrive mid-quarter.

---

## 9. Ties back into what exists

- **Row 27** gains one thing only: a link to the panel as the place its
  frozen rule is computed and charted. The rule itself does not change,
  which is the point of section 2.
- **B9** (`07-indicators/diffusion/capability.md:35`) gains a link to the
  panel as its public proxy layer. B9 keeps saying the true number is
  private. The panel is not a replacement for it and must not be written as
  one.
- **`framework.md`** gains a row for the panel under The Takeoff Signature.
- **`recursive-self-improvement.md`** already names the proxies in
  "Watching a private number from outside". The panel implements the
  follower gap and the governors, cites that page as its source, and does
  not restate the argument.
- **`three-governors.md`** is the post that committed the signature and the
  most-common-error framing (narrowing gap read as loop evidence). The
  panel's P1 card should carry that framing in one line, because the panel
  will be read by people who have not read the post.

---

## 10. The ladder toward the loop itself

The goal is measuring automated AI research. Slice 1 measures its shadows,
because the shadows are what is public today. Each later slice climbs one
rung closer to the loop, and each rung has an explicit gate so it ships when
it is ready rather than when it is wished for.

- **Slice 2a, B8 verifiable-gap series.** The third governor signal, scored
  from production deployment depth per `capability.md:22`. Hand-scored
  against public deployment and insurance evidence, so its gate is a method
  note that survives review, not a data feed.
- **Slice 2b, verification-governor events.** Learned judges carrying
  production liability, underwriters pricing autonomous judgment. Event
  entries, not a time series.
- **Slice 3, output-per-researcher decoupling.** The first proxy named in
  `recursive-self-improvement.md:60` and the closest public shadow of the
  loop. Deferred because the headcount denominator is the weakest public
  number in the design. Gate: a method note that names its sources (org-size
  reporting, hiring data, author counts on lab publications), quantifies
  their lag and error, and survives one quarterly cycle as a shadow
  calculation before the series renders.
- **Slice 3, cycle-time inference.** B9's release-cadence and
  paper-throughput inference, the nearest public approach to the private
  number. Same gate as decoupling.
- **Not on the ladder: anything requiring lab cooperation.** If labs start
  publishing instrumented research-automation metrics, those enter as
  `self_reported: true` context series and nothing more, per the standing
  weighting rule.

Automation of the quarterly read is also deferred until the manual ritual
has run twice and the shape has stopped changing. A launch post waits until
the panel has two readings, so it can show a line rather than a promise.

---

## 11. Build order

1. Schema plus the four series files, one seed reading each, sourced.
2. `indicators/method/` notes for all four, plus the pre-committed basket
   fallback for P1.
3. `tools/indicators.mjs`: load, validate, state machine, arm z-scores, SVG.
4. `build.mjs` fence directive plus the panel generator.
5. `blog/takeoff-signature.md` with `page: true`, prose plus the fence.
6. `check-invariants.sh` check 8, and the `indicators` skip in the six
   existing skip sets and in `mdFiles()`.
7. Row 27 annotation link, B9 link, framework row, one-line cross-reference
   from `three-governors.md`.
8. Render and look, both themes, per the CLAUDE.md verification rule.
   Headless Chrome screenshot, not `qlmanage`. Curl the deployed URLs for
   status and content type.

Roughly a day of work. Steps 2 and 5 are the ones that need judgment, and
step 2 is where the fallback basket earns its keep. The rest is mechanical.

---

## 12. Known failure modes of the panel itself

- **Arm G rests on two legs until slice 2.** A rates move plus a queue move
  is the entire strain reading. Stated on the page. The asymmetry is at
  least conservative: missing B8 can delay a `present`, never manufacture
  one.
- **The panel inherits Epoch's choices.** P1's equivalence rule is theirs,
  and a rule change on their side is a break in our series. The
  pre-committed fallback and the published-splice rule are the whole
  defence, and they cost continuity when used.
- **The context series is the most gameable thing here**, and its defence is
  structural rather than statistical: it cannot touch the state. The residual
  risk is rhetorical, a gamed P2 chart shaping how readers feel about an
  `absent` state, and the card's caveat is the only counter.
- **A frozen baseline ages.** The 2024 to 2026 rates baseline and any future
  basket both decay in relevance by 2029. The committed-window rule means
  decay arrives as a published discontinuity, never as a quiet re-anchor.
- **The panel could be right about the conjunction and wrong about the
  proxies.** Nothing in slice 1 observes research cycle time. If the loop
  closes and none of these series moves, the panel misses it, and
  `recursive-self-improvement.md` says that outcome may not be
  distinguishable from outside for years. The ladder in section 10 narrows
  this hole one rung at a time. It does not close it, and the page says so.
