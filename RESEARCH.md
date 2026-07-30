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
| 5 | 2026-07-30 | [Part IX](09-macro/) — the macro-financial channel, the largest structural hole in the corpus. Rates, prices, assets, fiscal | **63** | **3,180** |

*End-state counts are exact; intermediate rounds are approximate, since rounds ran in one sitting.*

### Split and revision notes

**Round 2 split:** `03-domains/{16 files}` → `03-domains/{cognitive,physical,contested}/`. Seam is cost-and-source of ground truth (symbols / atoms / adversary), not industry label. 29 files had links rewritten; validated with a resolver pass over every markdown link in the tree.

**Round 3 revision:** [steelman](08-method/steelman.md) §2 concedes that [Game 3](02-games/3-firms.md)'s scope should be narrowed to competitive markets specifically. Logged here because per [scoring](08-method/scoring.md) rule 3, a scope narrowing is legitimate once, in advance, and on the record.

**Round 4 split:** `03-domains/physical/robotics.md` → `robotics/{README,data-problem,cost-curves,supply-chain,form-factor}.md`. Seam is the four distinct constraints (data / economics / manufacturing / embodiment), each of which was one compressed paragraph in the original. 10 files had links rewritten from `robotics.md` to `robotics/`.

**Round 5 note:** [Part IX](09-macro/) closes a loop the corpus had been leaving open — [Capital](01-substrate/capital.md) raised the neutral-rate feedback and nothing followed through. The finding worth flagging: there is a **financial governor on recursive acceleration** ([rates](09-macro/rates.md)) that the [RSI discussion](06-uncertainties/recursive-self-improvement.md) does not consider, and it operates regardless of how the technical question resolves. That should be integrated into [Uncertainty 1](06-uncertainties/recursive-self-improvement.md) in a future round.

*Invariants §7 verified at the close of round 5: **63 files, 3,180 lines, 0 broken links**, no file over the hard cap, no directory over the 10-file cap, every file reachable from the index in ≤3 clicks.*

## 6. Open queue

Ordered by expected value of the next round's work.

**High** — next round starts here

1. **The non-US, non-China world.** Currently a paragraph inside [geopolitics](03-domains/contested/geopolitics.md). India, the EU, the Gulf, and the Global South each have a *different* binding constraint — talent, regulation, capital, and connectivity respectively — and the document's US-centrism is admitted in [Part VIII](08-method/) but not fixed. `geopolitics.md` should become a directory.
2. **Demography as counterweight.** Flagged in [base rates](08-method/base-rates.md) §6 and again in [rates](09-macro/rates.md), integrated nowhere. Shrinking working-age populations are a large, predictable, opposite-signed force to [Game 4](02-games/4-labor.md), and the aggregate displacement estimate may be too pessimistic because of it. Deserves its own page, probably in [Part IX](09-macro/).
3. **The financial governor on RSI.** [Rates](09-macro/rates.md) established that success raises the cost of financing further success — a negative feedback on takeoff speed that [Uncertainty 1](06-uncertainties/recursive-self-improvement.md) does not consider. Integrate it there.
4. **`04-timelines/` is the weakest part of the corpus.** Three files, ~30 lines each, each carrying more claims than it argues, and now the only part with no links to its [indicators](07-indicators/) or [macro consequences](09-macro/). Each should be ~120.

**Medium**
- **The energy industry as a domain**, not just a constraint. [Part I](01-substrate/) treats power as something AI consumes; it is also the sector AI most changes (grid optimization, siting, exploration, fusion/fission R&D).
- **Meaning, mental health, and relationships.** [Game 5](02-games/5-information.md) covers the epistemic collapse; nothing covers what abundant synthetic companionship and the loss of vocational identity do to people. Genuinely hard to write well, which is why it is missing.
- **Failure archaeology**, deepening [base rates](08-method/base-rates.md) §4 — what specifically ended each AI winter, in enough detail to be a usable prior.

**Low**
- `notation.md` for recurring shorthand (effective compute, ground-truth cost, inelastic complement, the master asymmetry).
- **Reverse dependency index**: claim → every page that rests on it. Would make [scoring](08-method/scoring.md) far sharper, since a single falsified claim should visibly propagate.
- Automate invariants §7 as a check script rather than a manual pass.

**Retired**
- ~~Missing fourth input (capital)~~ — round 1.
- ~~Indicators with trigger values~~ — round 1, [Part VII](07-indicators/).
- ~~Method / base rates / falsifiability~~ — round 3, [Part VIII](08-method/).
- ~~Robotics is too thin to carry the 2030s~~ — round 4, now a four-file directory.
- ~~The macro-financial channel is absent~~ — round 5, [Part IX](09-macro/).

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
