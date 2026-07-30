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

**Caveat on the line count, learned in round 7.** Lines are a proxy for content and a poor one in a corpus written in long paragraphs: a dense 40-line page can carry more argument than a listy 90-line one. Treat `< 60` as a *flag to go look*, never as an instruction to pad. The real test is the one in §3 — **does the page contain more than one argument that deserves its own room?** [Compressed](00-overview/compressed.md) is 22 lines and is exactly the right length; pre-split [medicine](03-domains/physical/medicine/) was 35 lines with four arguments (promoted in round 9).

**Directory size.** Maximum **10 content files** per directory, excluding `README.md`. At 11, introduce a subdirectory layer grouped by kind, not by alphabet.

**Depth.** Maximum 3 levels below root (`part/group/file.md`). Deeper than that means the taxonomy is wrong, not that the content is too big.

## 3. How to split

A split is a *promotion*, not a chop. The file being split becomes a directory whose `README.md` is a hub, and the seams become children.

```
03-domains/medicine.md            →   03-domains/medicine/README.md      (hub: the argument)
  (over hard cap)                     03-domains/medicine/diagnostics.md
                                      03-domains/medicine/delivery.md
                                      03-domains/medicine/drug-discovery.md
```

Rules:

1. **Split on argument seams, never on length.** If the only way to divide a file is arbitrary, it is one idea and should stay one file — accept the overage and note it in the log.
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
- **Predictions are set off as blockquotes** so they can be found and scored later.
- **Every strong claim gets a stated failure mode.** A page with no way to be wrong is not doing work.
- **Cross-link forward and backward.** The corpus is a graph; the directory tree is only a filing convenience.

## 5. Round log

| Round | Date | Focus | Files after | Lines after |
|---|---|---|---|---|
| 0 | 2026-07-30 | Initial corpus — substrate, games, domains, timelines, probabilities, uncertainties | 34 | 1,195 |
| 1 | 2026-07-30 | Filled the declared-but-missing fourth input ([capital](01-substrate/capital.md)); re-grounded [energy](01-substrate/energy.md) and [labor](02-games/4-labor.md) against mid-2026 data; promoted the root indicator table into [Part VII](07-indicators/) with trigger values | 40 | ~1,800 |
| 2 | 2026-07-30 | Domain breadth — [insurance](03-domains/cognitive/insurance.md), [agriculture](03-domains/physical/agriculture.md), [logistics](03-domains/physical/logistics.md), [cybersecurity](03-domains/contested/cybersecurity.md), [biosecurity](03-domains/contested/biosecurity.md), [state capacity](03-domains/contested/state-capacity.md). `03-domains/` hit the 10-file cap and split into cognitive / physical / contested, with all inbound links rewritten | 49 | ~2,100 |
| 3 | 2026-07-30 | Method and falsifiability — [Part VIII](08-method/): reference classes, the three strongest arguments against the framework, resolution rules and the five dodges. Added [Part 0 hub](00-overview/README.md) | 54 | 2,568 |
| 4 | 2026-07-30 | [Robotics](03-domains/physical/robotics/) promoted to a directory — the swing variable for the 2030s was 37 lines. Split into [the data problem](03-domains/physical/robotics/data-problem.md), [cost curves](03-domains/physical/robotics/cost-curves.md), [supply chain](03-domains/physical/robotics/supply-chain.md), [form factor](03-domains/physical/robotics/form-factor.md) | 58 | ~3,000 |
| 5 | 2026-07-30 | [Part IX](09-macro/) — the macro-financial channel, the largest structural hole in the corpus. Rates, prices, assets, fiscal | 63 | 3,180 |
| 6 | 2026-07-30 | [Geopolitics](03-domains/contested/geopolitics/) promoted to a directory — the non-US, non-China world was one paragraph. [US–China](03-domains/contested/geopolitics/bipolar.md), [India](03-domains/contested/geopolitics/india.md), [Europe](03-domains/contested/geopolitics/europe.md), [Gulf](03-domains/contested/geopolitics/gulf.md), [Global South](03-domains/contested/geopolitics/global-south.md) | 68 | ~3,900 |
| 7 | 2026-07-30 | [Demography](09-macro/demography.md) integrated as the counterweight to [Game 4](02-games/4-labor.md); the financial governor folded back into [Uncertainty 1](06-uncertainties/recursive-self-improvement.md) | 69 | 3,615 |
| 8 | 2026-07-30 | [Timelines](04-timelines/) synthesized against rounds 1–7; [Part V](05-probabilities/) re-scored and promoted (table + reasoning + ledger); uncertainties 4–6 added ([Taiwan](06-uncertainties/taiwan.md), [learned verification](06-uncertainties/learned-verification.md), [correlated risk](06-uncertainties/correlated-risk.md)) | 74 | 4,187 |
| 9 | 2026-07-30 | [Medicine](03-domains/physical/medicine/) promoted (diagnostics / delivery / drug-discovery / liability); [indicators](07-indicators/) absorb macro, Taiwan, insurance, RSI governors; [Game 1](02-games/1-labs.md) and [Game 5](02-games/5-information.md) expanded | 78 | 4,573 |
| 10 | 2026-07-30 | [Energy sector](03-domains/physical/energy-sector.md); [meaning](03-domains/cognitive/meaning.md); [warfare](03-domains/contested/warfare.md) + [state capacity](03-domains/contested/state-capacity.md) depth | 80 | 4,874 |
| 11 | 2026-07-30 | Winter archaeology; Game 2 pass; B10 fiscal indicator | 80 | 4,956 |
| 12 | 2026-07-30 | Cyber+bio depth; education×meaning; Part V commentary hold | 80 | 5,084 |
| 13 | 2026-07-30 | [Law](03-domains/cognitive/law.md)+[finance](03-domains/cognitive/finance.md)+[science](03-domains/cognitive/science.md); [notation](00-overview/notation.md)+[dependencies](00-overview/dependencies.md) | **82** | **5,353** |

*End-state counts exact at round close; intermediate approximate.*

### Split and revision notes

**Splits:** r2 domain groups; r4 robotics; r6 geopolitics; r8 Part V; r9 medicine.

**Revisions (rule 5):** r3 Game 3 scope; r7 labor+RSI; r8 Part V numbers; r12 Part V hold.

**r5–r12:** macro; demography; timelines+uncertainties; indicators+Games 1/5; energy/meaning/warfare/state; winters+Game2+B10; cyber/bio/education.

**Round 13:** law (layers, insurance moat, apprenticeship canary); finance (monoculture, capex channel, Game 2); science (automated labs, drug+bio bridges); [notation](00-overview/notation.md) + [dependencies](00-overview/dependencies.md).

*Invariants at r13 close: **82 files, 5,353 lines, 0 broken links**. RESEARCH.md protocol-ledger exemption continues.*

## 6. Open queue

**High**

1. **Media** depth vs Game 5 / meaning / education.
2. **Software** consistency pass (apprenticeship + outcome pricing).
3. **Automate invariants** check script (links, caps, parent headers).

**Medium**
- Energy sector split; meaning indicators in Part VII.
- Agriculture / logistics if still thin vs medicine/robotics.

**Low**
- Archive RESEARCH history.

**Retired (r1–r13):** … + law/finance/science; notation; dependency index.

## 7. Invariants

Things that must remain true after every round.

1. Every file is reachable from `README.md` in ≤ 3 clicks.
2. Every file has a working `← Parent` link.
3. No file exceeds the hard cap without a logged exemption.
4. Every probability stated anywhere appears in [Part V](05-probabilities/) or links to it.
5. Every quantity has a date attached, explicitly or by the file's header note.
6. The spine of the argument — *capability grows fastest where verification is cheap; value accrues to what intelligence cannot manufacture* — is never contradicted silently. If a round produces evidence against it, that goes in [Part VI](06-uncertainties/), not into a footnote.

---

← [Index](README.md)
