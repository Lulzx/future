# Autoresearch Protocol

*How this corpus grows. Read before editing.*

This repository is maintained by a repeating loop rather than a one-time write. Each pass reviews what exists, finds the weakest joint, expands it, and splits anything that has outgrown its file. The protocol below is what keeps that loop from producing sprawl.

---

## 1. The loop

Each **round** executes five steps in order:

| Step | Action | Output |
|---|---|---|
| **Review** | Re-read the corpus map and the open queue. Find claims that are asserted but not argued, links that point at thin pages, and numbers that have aged. | A ranked gap list |
| **Ground** | For any claim with a quantity in it, check it against a current source. Quantities decay faster than arguments. | Updated figures + provenance |
| **Expand** | Write into the top gaps. Depth before breadth: a shallow page that is linked from four places is worth more work than a new page nobody links to. | New/expanded files |
| **Split** | Apply the thresholds in §2. Any file or directory over cap gets decomposed. | Restructured tree |
| **Reconcile** | Fix every inbound link, update parent index tables, update the round log in §5. | Consistent tree |

A round is not complete until step 5. Half-applied rounds are the main way a corpus like this rots.

## 2. Thresholds

**File size.**

| Lines | State | Action |
|---|---|---|
| < 60 | Thin | Candidate for expansion; a stub is a debt |
| 60–130 | Healthy | Leave alone |
| 130–180 | Soft cap | Look for a natural seam; split if one exists |
| > 180 | Hard cap | Must split this round |

**Caveat on the line count, learned in round 7.** Lines are a proxy for content and a poor one in a corpus written in long paragraphs: a dense 40-line page can carry more argument than a listy 90-line one. Treat `< 60` as a *flag to go look*, never as an instruction to pad. The real test is the one in §3 - **does the page contain more than one argument that deserves its own room?** [Compressed](00-overview/compressed.md) is 22 lines and is exactly the right length; pre-split [medicine](03-domains/physical/medicine/) was 35 lines with four arguments (promoted in round 9).

**Scope.** Size thresholds apply to content files. Meta files - `RESEARCH.md`, `HISTORY.md` - are exempt; they grow by accretion of records, not arguments, and have no seams to split on.

**Directory size.** Maximum **10 content files** per directory, excluding `README.md`. At 11, introduce a subdirectory layer grouped by kind, not by alphabet.

**Depth.** Maximum 3 directory levels below root (`part/group/subgroup/file.md`). Deeper than that means the taxonomy is wrong, not that the content is too big.

## 3. How to split

A split is a *promotion*, not a chop. The file being split becomes a directory whose `README.md` is a hub, and the seams become children.

```
03-domains/medicine.md            →   03-domains/medicine/README.md      (hub: the argument)
  (over hard cap)                     03-domains/medicine/diagnostics.md
                                      03-domains/medicine/delivery.md
                                      03-domains/medicine/drug-discovery.md
```

Rules:

1. **Split on argument seams, never on length.** If the only way to divide a file is arbitrary, it is one idea and should stay one file - accept the overage and note it in the log.
2. **The hub keeps the thesis.** A reader who stops at `README.md` should have the whole claim, just without the evidence.
3. **Every child carries the standard header and footer** (§4). No orphans.
4. **Inbound links must be repaired in the same round.** `grep -rn "old-path"` before declaring done.
5. **Balance.** After a split, no child should be more than ~3× the size of its smallest sibling. If one is, the seam was wrong.

## 4. File conventions

Every content file:

```markdown
# Title

← [Parent](README.md) · [Index](../README.md)

---

<body>

---

**Related:** <cross-links> · **Next:** <linear-read link>
```

- **Claims carry quantities where quantities exist**, and quantities carry a direction of uncertainty.
- **Externally sourced quantities name their source where they appear** (inline or in the file's header note), not only in the round log - the log gets archived; the file is where the next Ground pass will look.
- **Predictions are set off as blockquotes** so they can be found and scored later.
- **Every strong claim gets a stated failure mode.** A page with no way to be wrong is not doing work.
- **Cross-link forward and backward.** The corpus is a graph; the directory tree is only a filing convenience.

## 5. Round log

| Round | Date | Focus | Files after | Lines after |
|---|---|---|---|---|
| 0–15 | 2026-07-30 | Bootstrap through domain breadth, promotions, and depth passes - archived in [HISTORY.md](HISTORY.md) | 82 | 5,547 |
| 16 | 2026-07-30 | C8 provenance; inference+Part I; games/thesis/compressed sync | 82 | 5,613 |
| 17 | 2026-07-30 | [B12](07-indicators/diffusion/capability.md) physical diffusion; [compute](01-substrate/compute.md)+[data](01-substrate/data.md); reader Find + [catalog.json](catalog.json) | 82 | 5,683 |
| 18 | 2026-07-30 | Re-score mode: [register](05-probabilities/register.md) of 16 distributed probabilities (invariant-4 closure); r13–17 hold pass in [ledger](05-probabilities/ledger.md); prices/assets ↔ B7/B12 sync | 83 | 5,762 |
| 19 | 2026-07-30 | Stamped the two flagged predictions - [energy](01-substrate/energy.md) 2029 (~65%), [agriculture](03-domains/physical/agriculture.md) 2032 (~70%) - with written rationale at source; register rows added | 83 | 5,759 |
| 20 | 2026-07-30 | First live Ground pass: [B1](07-indicators/diffusion/labor.md) refreshed to Mar-2026 NY Fed data; PJM +76% y/y added to [energy](01-substrate/energy.md); Intersect $4.75B confirmed. Round log 0–15 archived to [HISTORY.md](HISTORY.md) | 84 | 5,781 |
| 21 | 2026-07-30 | Spine red-team completed: [Uncertainty 7 - complement erosion](06-uncertainties/complement-erosion.md) gives the spine's second half its adversarial entry (5+7 now cover both halves). Provenance retrofit on [energy](01-substrate/energy.md) per new §4 convention | 85 | 5,840 |
| 22 | 2026-07-30 | Corpus-wide depth pass: every content file expanded in place (no new files, no splits, no probability changes). Eight parallel batches by part; thin-file debt cleared - every former sub-60 content page now argues its claims or was left tight by the §2 caveat | 85 | 6,640 |
| 23 | 2026-07-30 | Split `diffusion.md` (169, over soft cap since r17): promoted to [diffusion/](07-indicators/diffusion/README.md) with children [labor](07-indicators/diffusion/labor.md) (B1/B6/B10/B11), [economy](07-indicators/diffusion/economy.md) (B2/B3/B5/B7), [capability](07-indicators/diffusion/capability.md) (B4/B8/B9/B12); ~50 inbound links remapped by indicator label | 88 | 6,703 |
| 24 | 2026-07-30 | Split `base-rates.md` (134): promoted to [base-rates/](08-method/base-rates/README.md) with children [cycles](08-method/base-rates/cycles.md) (classes 1–2), [social-response](08-method/base-rates/social-response.md) (classes 3, 5, 6), [winters](08-method/base-rates/winters.md) (class 4); global class numbering preserved because other pages cite classes by number | 91 | 6,758 |
| 25 | 2026-07-30 | Second live Ground pass (3 parallel verifiers): A-family baselines, compute/inference, macro/robotics figures refreshed with named sources. First grounded contradiction: open-weight lag ~3–6 months (Epoch AI) vs the authored ~9–15 - logged in the [ledger](05-probabilities/ledger.md), ground-noted at [source](02-games/1-labs.md), predictions left as written | 91 | 6,777 |
| 26 | 2026-07-30 | Re-score pass triggered by the r25 contradiction: [row 4](05-probabilities/reasoning.md) moved −1/−2 to 7%/28% (verification covers a shrinking capability share when weights circulate ~3–6 months behind); six holds with written reasons in the [ledger](05-probabilities/ledger.md). First table move since r8. A1 baseline softened to "estimate, not disclosure" | 91 | 6,801 |
| 27 | 2026-07-31 | Depth + Ground: thin base-rates children and U3/U7 cleared past the r22 short flag; B-economy/B-capability instrumentation; Game 3 scoring cross-section; capital/timeline capex synced to ~$700–725B mid-2026 guidance; Find UI restored on static site (mobile-ready) | 91 | 6,934 |
| 28 | 2026-07-31 | Depth on 60–80 band: Taiwan gray-zone indicator table; U5 coupling map + middle-case resolution; U2 scoring joint; Game 1 lag→contest; data misread rules; India escapes; B-labor joints; assets↔U7; fiscal×state capacity; winters scoring matrix; form-factor vs growth fork | 91 | 7,033 |
| 29 | 2026-07-31 | Depth continues: Europe shelf-readiness; bipolar open-weight coupling; compute wall movers; delivery/global-south sign flip; insurance soft-market caveat; RSI re-score gate; Gulf labor contradiction; robotics fully-loaded cost + teleop + shipments; scoring partial-credit; finance incident favourite; law process/judgment; energy behind-the-meter; 2028–32 political split | 91 | 7,112 |
| 30 | 2026-07-31 | Domain depth sweep: education/science/meaning; warfare/cyber/bio; ag/logistics/energy-sector; prices/Game5; timelines 2032–40; A6↔Taiwan gray zone; dependencies high-centrality debt; Game 2 jurisdiction brand; soft-cap notes on state-capacity/governance | 91 | 7,189 |
| 31 | 2026-07-31 | Hub/index hygiene: Games lag table + reading order; Part V/ledger r27–31 holds; indicator capex sync + Taiwan gray-zone shortlist; medicine/robotics hubs; Part I/IV/VIII/IX READMEs; U3 export ladders; media mid-tier | 91 | 7,248 |
| 32 | 2026-07-31 | Thin-hub depth: base-rates/cognitive/diffusion/uncertainties/overview READMEs; geopolitics lag coupling; Part III↔Part V; steelman U5 middle; B4×B12; cycles scrutiny≠correction; software review scarce; U7 warehouse discipline; energy interruptible | 91 | 7,333 |
| 33 | 2026-07-31 | Content shallow band + notation: U2 routing; medicine stack; supply-chain reshoring; capital/Game3 scoring discipline; B-economy circularity; U1/U3/U5/U7 filters; India revenue/employment; register Taiwan cluster; notation new terms; compressed gray-zone | 91 | 7,377 |
| 34 | 2026-07-31 | Mid-band 75–95: substrate data/inference/compute; robotics form/cost/data; U6 monoculture; bipolar per-layer; demography unconditional; Europe power; B1 export hubs; global-south grid; insurance/finance; Games 1/4/5; assets/fiscal; 2026–28 evidence family; winters B5 | **91** | **7419** |
| 35 | 2026-07-31 | Domain scoring filters: education/science/meaning/law/software/media; warfare/cyber/bio; ag/logistics/energy-sector; timelines evidence families; rates/prices; Game 2 rules≠verification; Gulf counter-cyclical; scoring evidence-by-period; Taiwan shield decay | **91** | **7465** |

*End-state counts exact at round close; intermediate approximate.*

### Split and revision notes

**Splits and early revisions (r1–r15):** archived in [HISTORY.md](HISTORY.md).

**Round 20:** the Ground step ran against live sources for the first time. Verified exactly: Intersect $4.75B (announced 2025-12-22, closing H1 2026); the +267% wholesale figure (Bloomberg node analysis, 2020–25), now paired with the fresher PJM +76% y/y print with datacenter load named as primary driver by the market monitor. Refreshed: B1 baseline to NY Fed March 2026 (recent-grad unemployment 5.6% vs ~4.3% overall; entry-level postings −35% since early 2023). No grounded quantity contradicted an argument - the numbers moved within the direction the corpus already claimed.

*Invariants at r20 close: **84 files, 5,781 lines, 0 broken links** - [check-invariants.sh](check-invariants.sh).*

**Round 21:** an external review of this protocol flagged that invariant 6 had an audit gap - [Uncertainty 5](06-uncertainties/learned-verification.md) red-teams *capability grows fastest where verification is cheap*, but nothing red-teamed *value accrues to what intelligence cannot manufacture*. Uncertainty 7 closes it, built from the corpus's own claims (robotics as swing variable, inference collapse, license repricing): the scarce-complement list has a half-life, and the distributional predictions in [assets](09-macro/assets.md)/[prices](09-macro/prices.md) are the exposed surface. Provenance retrofit was scoped to r20-grounded figures only (Bloomberg attribution, Intersect deal date); ungrounded quantities get sourced when a Ground pass touches them.

*Invariants at r21 close: 85 files, 5,840 lines, 0 broken links.*

**Round 22:** an expansion-only round run as eight parallel batches, one per part grouping, on an explicit instruction to deepen every document. Discipline held corpus-wide: no file was created, moved, or split; no probability value, register row, or indicator trigger changed; new quantities carry dates and named sources at point of use (e.g. 2018 FDA autonomous-retinopathy clearance in [diagnostics](03-domains/physical/medicine/diagnostics.md), LBNL Queued Up 2024 in [power-permitting](06-uncertainties/power-permitting.md)); new claims otherwise stay qualitative to preserve invariant 4. The typical addition is a mechanism or reference class behind a claim that was previously asserted (quant-quake 2007 for model monoculture, MOOC completion for education, line-shaft electrification for management turnover) plus a stated failure mode. Two files were deliberately left short of the 60-line flag ([apprenticeship-gap](06-uncertainties/apprenticeship-gap.md) 57, [complement-erosion](06-uncertainties/complement-erosion.md) 55) under the §2 no-padding caveat; [diffusion](07-indicators/diffusion/README.md) (169) and [base-rates](08-method/base-rates/README.md) (134) were excluded from growth as over/near soft cap.

*Invariants at r22 close: 85 files, 6,640 lines, 0 broken links.*

**Round 23:** the seam in `diffusion.md` was the object of measurement, not the indicator format - the twelve B-indicators watch three different things (people and institutions, the firm/statistical ledger, the capability frontier), and the joint-reading patterns that matter (B1×B10×B7, B4 without B12, B5 before B2) now live in the hub, which per §3 keeps the thesis. Children are balanced (57–71 lines) and each ends under the 130 ceiling with room to grow at the next Ground pass. Inbound links were remapped by indicator label (every reference in the corpus names its Bn at point of link, which made the repair mechanical and checkable); historical round-log rows in this file were remapped too, since the checker verifies them.

*Invariants at r23 close: 88 files, 6,703 lines, 0 broken links.*

**Round 24:** the seam in `base-rates.md` is what kind of history each class draws on - technology/capital cycles (1–2), societal absorption (3, 5, 6), and the field's own funding history (4, the longest and most self-contained section). The children keep the original global class numbers rather than renumbering per file, because §3 and §6 are cited by number elsewhere in the corpus; the hub's index table is now the canonical map from number to page. Section-labeled inbound links were retargeted to the owning child (thesis's GPT-diffusion citation to cycles, Game 2's §3 citations to social-response, demography's §6 to social-response, scoring's aviation example to social-response); generic links went to the hub. With this split no content file remains above the 130 soft-cap line.

*Invariants at r24 close: 91 files, 6,758 lines, 0 broken links.*

**Round 25:** the Review step found expansion debt cleared and the tree coherent post-split, so the round went to the next-weakest joint: quantities never live-verified. Verified or refreshed with sources at point of use: hyperscaler 2026 capex ~$700–725B (company guidance, mid-2026); CAISO queue ~523GW and the gas-share shift (LBNL Queued Up 2026); A5's depreciation divergence (Amazon shortening to 5yr per 10-K Feb-2025, Meta extending to ~5.5yr); training-compute 4–5×/yr and the ~3×/yr efficiency term (Epoch AI); China 54% of 2024 robot installs (IFR World Robotics 2025); rare-earth ~91%/~94% concentration (IEA 2024); agriculture 0.8% US GDP / 26.1% global employment (USDA ERS, World Bank); fully-loaded labor +43% over wages (BLS ECEC Mar-2026). One figure was contradicted rather than confirmed: the open-weight lag (~3–6 months vs authored ~9–15). Handling followed the scoring rules - descriptive baselines updated with provenance, stamped predictions left as written with a ground note at source, and the contradiction logged in the Part V ledger as the corpus's first. A1's "$1B disclosed run" could not be verified as a disclosure and is flagged for softening next Ground pass.

*Invariants at r25 close: 91 files, 6,777 lines, 0 broken links.*

**Round 26:** the open queue's re-score trigger fired (r25's grounded contradiction), so this round ran the Part V pass it had been holding for. One move: row 4 (binding agreement with real verification) from 8%/30% to 7%/28%, on the mechanism that the lag compression measures the verification object depreciating on its own, independent of the export-control spending r8 priced. Six holds, each with named evidence - including the deliberate hold on row 6, where the widened dollar gap between capex and revenue looks like evidence-up until the ratio is checked (revenue roughly doubled y/y), and on row 3, where the direction is up but a single measured series with no severity datapoint is below the moving bar. Register untouched (the lag was never probability-stamped). A1's baseline now says what it is: a third-party estimate, not a disclosure.

*Invariants at r26 close: **91 files, 6,801 lines, 0 broken links.***

**Round 27:** Review found post-split thin debt in [cycles](08-method/base-rates/cycles.md) / [social-response](08-method/base-rates/social-response.md) (44 lines each) and the deliberately-short U3/U7 flags from r22. Expand step restored mechanism depth: Solow/J-curve structure and capex-boom scoring in class 1–2; shelf-readiness and China-shock political transfer in class 3/5/6; U7 dated-horizon table; U3 sectoral shape + secondary signals; B2/B3/B5/B7 joint readings and series notes; Game 3 falsification cross-section; capital correction clocks; capability contamination rules. Ground step: hyperscaler 2026 capex re-synced at source to ~$700–725B (company guidance through mid-2026: Amazon ~$200B, Microsoft ~$190B, Alphabet ~$180–205B, Meta ~$125–145B) in [capital](01-substrate/capital.md) and [2026–2028](04-timelines/2026-2028.md) - matches the A2 baseline already held at that range since r25. No probability moves (re-score mode holds). Separately restored the reader Find control dropped in the static-HTML migration: button + dialog + `/`/`s` shortcut, root-relative catalog from nested pages, mobile tap targets and iOS input sizing. No splits required (nothing near soft cap).

*Invariants at r27 close: **91 files, 6,934 lines, 0 broken links.***

**Round 28:** continued the depth pass on the healthy-but-shallow band. Headline addition: [Taiwan](06-uncertainties/taiwan.md) now has an operational gray-zone indicator table (freight insurance, export-license denials, delivery slippage, ASP step-ups, dual-sourcing risk spend) - the r27 queue item closed in-file rather than waiting for a Ground pass to invent it. Elsewhere: U5 middle-case resolution path and Part VI coupling map; power-permitting joint-scoring rules; Game 1 over-dissipation under a depreciating prize after lag compression; data-table misread rules; drug-discovery dual-use joint; India path escapes + discriminating test; B-labor joint readings; assets dated against U7; fiscal interventions gated on state capacity; winters pattern matrix; humanoid form factor demoted relative to the growth fork; diagnostics checklist vs leaderboard; Game 4 comparative-advantage wage caveat. No splits, no probability moves, no new files.

*Invariants at r28 close: **91 files, 7,033 lines, 0 broken links.***

**Round 29:** second consecutive depth pass on the mid band - geopolitics (Europe as shelf-readiness lab, bipolar lag-as-coupling-constant, Gulf ecosystem vs campus, global-south lag-as-development-policy), substrate (compute wall movers, energy behind-the-meter routing), medicine delivery counterfactual sign-flip for low-resource settings, insurance soft-market non-falsifier, RSI what-fires-what map, robotics fully-loaded labor comparison + teleop measurement + shipment scoring, law process/judgment as U5 middle case, finance as incident-jurisdiction favourite, scoring/register partial-clause rules, 2028–32 two-economy-as-politics. No new files, no splits, no probability moves.

*Invariants at r29 close: **91 files, 7,112 lines, 0 broken links.***

**Round 30:** domain-wide depth sweep rather than a single theme - cognitive (assessment-as-product, paper flood, B11 scoring discipline), contested (attritable manufacturing race, cyber adoption trough, bio asymmetric clocks, Game 2 jurisdiction branding), physical (land rent in ag, hands-on-box logistics, energy load vs tool pages), macro/method (headline CPI hide, costly signaling as product design, 2032–40 fork on delivered work, A6 vs gray zone, dependencies debt table for U7/lag/Taiwan). Soft-cap hygiene notes on [state capacity](03-domains/contested/state-capacity.md) and [governance](07-indicators/governance.md) rather than padding them. No probability moves, no splits, no new files.

*Invariants at r30 close: **91 files, 7,189 lines, 0 broken links.***

**Round 31:** hub and index pass after four content-depth rounds - the risk was parent pages falling behind children. Updated [Games](02-games/README.md) open-weight lag to measured ~3–6 months and added reading order; [Part V](05-probabilities/) + [ledger](05-probabilities/ledger.md) + [reasoning](05-probabilities/reasoning.md) explicit r27–31 hold block (rule 5); [indicators](07-indicators/README.md) capex baseline → ~$700–725B and Taiwan gray-zone on the short list; medicine hub sign-flip + robotics fifth watch; substrate behind-the-meter note; timelines evidence-by-period table; method partial-credit; macro U7 twin; U3 export-ladder scope; media mid-tier casualty. No probability moves, no splits.

*Invariants at r31 close: **91 files, 7,248 lines, 0 broken links.***

**Round 32:** thin-hub expansion - parent READMEs still sub-45 lines after r31 got mechanism depth: base-rates class composition for Part V rows; diffusion contamination hierarchy + A×B reminder; cognitive process/judgment reading order; uncertainties gray-zone + sceptic order; overview site Find note; geopolitics lag-as-coupling; Part III↔Part V use rule; contested lag floor; physical fully-loaded cost. Content top-ups: steelman U5 middle as default watch; B4×B12 fork; cycles investor-scrutiny ≠ correction; software review scarcity; U7 warehouse ≠ list-death; energy interruptible training; social-response mixture harms. No probability moves, no splits.

*Invariants at r32 close: **91 files, 7,333 lines, 0 broken links.***

**Round 33:** content-file shallow band scoring filters - power-permitting interruptible/behind-the-meter as routing; drug-discovery preclinical≠health; liability indemnity signal; diagnostics fees+headcount; delivery payer-threshold; supply-chain reshoring-with-imports; capital skepticism≠A3; Game 3 SaaS example; economy circularity filter; U5 not-on-benchmarks; U1 lag≠RSI; U3 definition drift; U7 land residual; India revenue/employment decoupling; register Taiwan cluster; [notation](00-overview/notation.md) admits complement half-life, gray-zone Taiwan, process/outcome verification, behind-the-meter; compressed/thesis gray-zone one-liners. Ledger hold block extended to r27–33. No probability moves, no splits.

*Invariants at r33 close: **91 files, 7,377 lines, 0 broken links.***


**Round 34:** mid-band depth (75–95 lines) across substrate, robotics, uncertainties, geopolitics, macro, games, and early timeline - scoring filters: synthetic data doesn't erase columns; prices vs costs on inference moat; A6 vs Taiwan gray zone; humanoid as data bet; U6 monoculture; bipolar per-layer choice; demography unconditional; Europe industrial electricity; B1 export hubs; global-south grid gate; insurance prices all domains; finance herding; Game 1 clause scoring; Game 4 weak 50/30/20 prior; Game 5 label theatre; assets housed/unhoused; fiscal demography floor; 2026–28 financial evidence family; winters outcome-revenue vaccine. No probability moves, no splits.

*Invariants at r34 close: **91 files, 7419 lines, 0 broken links.***


**Round 35:** domain scoring filters across cognitive (assessment product, automated labs, status prestige, UPL, context debt, presence premium), contested (crisis-stability tax, memory-safe share, screening coverage, Gulf counter-cyclical, rules≠verification), physical (season sample rate, insured routes, OT freeze), timelines (evidence families), macro (rates~row2, B7 eight quarters), Taiwan shield decay vs consequence. No probability moves, no splits.

*Invariants at r35 close: **91 files, 7465 lines, 0 broken links.***

**Protocol revision (post-r20, 2026-07-30):** provenance convention added to §4 (sources named at point of use, not only in the archived round log); meta-file exemption made explicit in §2; §2 depth example corrected to `part/group/subgroup/file.md` (the tree already used 3 directory levels, e.g. `physical/medicine/`); depth added as invariant 7 and to the checker; `HISTORY.md` added to the hard-cap exemption; §7 now marks which invariants are machine-enforced.

## 6. Open queue

**High**

1. **Stay in re-score mode** - next Part V pass when real time has passed or an indicator trigger fires, not before; new domains only on demonstrated need.
2. **Quarterly Ground cadence** - repeat the r20 live-source pass on A/B/C indicator baselines; next natural window Q4 2026.

**Medium**
- FOAK energy R&D only past soft cap; harden B12 baselines when public data exists.
- Continue depth on healthy-but-shallow pages (60–80 line band) when the loop runs - mechanism and failure modes, not padding.
- Next Ground pass should *read* the Taiwan gray-zone table (now in-file as of r28), not invent it.

**Low**
- Fancy reader features beyond Find (restored r27).

**Retired (r1–r21):** earlier items in [HISTORY.md](HISTORY.md); recent: B12; compute/data; catalog Find; macro↔indicator sync; register; prediction stamps; log archive; first live Ground pass; spine red-team (U7); r27 thin-file clearance + Find restore; r28 Taiwan gray-zone table.

## 7. Invariants

Things that must remain true after every round. ⚙ marks the ones [check-invariants.sh](check-invariants.sh) enforces; the rest are honor-system and belong in the Review step's checklist.

1. Every file is reachable from `README.md` in ≤ 3 clicks.
2. ⚙ Every file has a working `← Parent` link.
3. ⚙ No file exceeds the hard cap without a logged exemption.
4. Every probability stated anywhere appears in [Part V](05-probabilities/) or links to it. *(Not machine-checked: a bare `%` is usually a growth rate, not a probability, so a grep would mostly false-positive.)*
5. Every quantity has a date attached, explicitly or by the file's header note.
6. The spine of the argument - *capability grows fastest where verification is cheap; value accrues to what intelligence cannot manufacture* - is never contradicted silently. If a round produces evidence against it, that goes in [Part VI](06-uncertainties/), not into a footnote.
7. ⚙ No file sits more than 3 directory levels below root (§2 depth cap).

---

← [Index](README.md)
