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
| 17 | 2026-07-30 | [B12](07-indicators/diffusion.md) physical diffusion; [compute](01-substrate/compute.md)+[data](01-substrate/data.md); reader Find + [catalog.json](catalog.json) | 82 | 5,683 |
| 18 | 2026-07-30 | Re-score mode: [register](05-probabilities/register.md) of 16 distributed probabilities (invariant-4 closure); r13–17 hold pass in [ledger](05-probabilities/ledger.md); prices/assets ↔ B7/B12 sync | 83 | 5,762 |
| 19 | 2026-07-30 | Stamped the two flagged predictions - [energy](01-substrate/energy.md) 2029 (~65%), [agriculture](03-domains/physical/agriculture.md) 2032 (~70%) - with written rationale at source; register rows added | 83 | 5,759 |
| 20 | 2026-07-30 | First live Ground pass: [B1](07-indicators/diffusion.md) refreshed to Mar-2026 NY Fed data; PJM +76% y/y added to [energy](01-substrate/energy.md); Intersect $4.75B confirmed. Round log 0–15 archived to [HISTORY.md](HISTORY.md) | 84 | 5,781 |
| 21 | 2026-07-30 | Spine red-team completed: [Uncertainty 7 - complement erosion](06-uncertainties/complement-erosion.md) gives the spine's second half its adversarial entry (5+7 now cover both halves). Provenance retrofit on [energy](01-substrate/energy.md) per new §4 convention | **85** | **5,840** |

*End-state counts exact at round close; intermediate approximate.*

### Split and revision notes

**Splits and early revisions (r1–r15):** archived in [HISTORY.md](HISTORY.md).

**Round 20:** the Ground step ran against live sources for the first time. Verified exactly: Intersect $4.75B (announced 2025-12-22, closing H1 2026); the +267% wholesale figure (Bloomberg node analysis, 2020–25), now paired with the fresher PJM +76% y/y print with datacenter load named as primary driver by the market monitor. Refreshed: B1 baseline to NY Fed March 2026 (recent-grad unemployment 5.6% vs ~4.3% overall; entry-level postings −35% since early 2023). No grounded quantity contradicted an argument - the numbers moved within the direction the corpus already claimed.

*Invariants at r20 close: **84 files, 5,781 lines, 0 broken links** - [check-invariants.sh](check-invariants.sh).*

**Round 21:** an external review of this protocol flagged that invariant 6 had an audit gap - [Uncertainty 5](06-uncertainties/learned-verification.md) red-teams *capability grows fastest where verification is cheap*, but nothing red-teamed *value accrues to what intelligence cannot manufacture*. Uncertainty 7 closes it, built from the corpus's own claims (robotics as swing variable, inference collapse, license repricing): the scarce-complement list has a half-life, and the distributional predictions in [assets](09-macro/assets.md)/[prices](09-macro/prices.md) are the exposed surface. Provenance retrofit was scoped to r20-grounded figures only (Bloomberg attribution, Intersect deal date); ungrounded quantities get sourced when a Ground pass touches them.

*Invariants at r21 close: **85 files, 5,840 lines, 0 broken links.***

**Protocol revision (post-r20, 2026-07-30):** provenance convention added to §4 (sources named at point of use, not only in the archived round log); meta-file exemption made explicit in §2; §2 depth example corrected to `part/group/subgroup/file.md` (the tree already used 3 directory levels, e.g. `physical/medicine/`); depth added as invariant 7 and to the checker; `HISTORY.md` added to the hard-cap exemption; §7 now marks which invariants are machine-enforced.

## 6. Open queue

**High**

1. **Stay in re-score mode** - next Part V pass when real time has passed or an indicator trigger fires, not before; new domains only on demonstrated need.
2. **Quarterly Ground cadence** - repeat the r20 live-source pass on A/B/C indicator baselines; next natural window Q4 2026.

**Medium**
- FOAK energy R&D only past soft cap; harden B12 baselines when public data exists.

**Low**
- Fancy reader features beyond Find.

**Retired (r1–r21):** earlier items in [HISTORY.md](HISTORY.md); recent: B12; compute/data; catalog Find; macro↔indicator sync; register; prediction stamps; log archive; first live Ground pass; spine red-team (U7).

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
