# Distributed predictions register

← [Part V](README.md) · [Index](../README.md)

---

The seven-row [table](README.md) is not the only place this corpus commits to numbers. Domain pages state their own probability-stamped predictions in blockquotes, per the [file conventions](../RESEARCH.md). Invariant 4 requires every such probability to appear in Part V or link to it; this page is where they appear. It is also the feeder for the [resolution log](ledger.md) - when a claim below comes due, it gets scored there under the same [rules](../08-method/scoring.md) as the main table.

The [first claims due](../08-method/scoring.md) table in Part VIII is the near-term subset of this register plus the indicator triggers; this page is the complete set of confidence-stamped claims.

## The register

Ordered by due date. "P" is the stated confidence at the source; the source page carries the full claim and its failure mode.

| Due | P | Claim (short) | Where |
|---|---|---|---|
| 2029 | ~65% | >40% of new US frontier-training capacity on owned or bilateral generation | [Energy](../01-substrate/energy.md) |
| 2030 | ~55% | Driver-out hub-to-hub freight at commercial scale on major US corridors | [Logistics](../03-domains/physical/logistics.md) |
| 2030 | ~60% | Binding rules on companion AI for minors in major markets | [Meaning](../03-domains/cognitive/meaning.md) |
| 2030 | ~70% | AI-specific liability coverage as a material line with published rates | [Insurance](../03-domains/cognitive/insurance.md) |
| 2032 | ~60% | Cyber: deterioration 2026–29, then structural improvement in the 2030s | [Cybersecurity](../03-domains/contested/cybersecurity.md) |
| 2032 | ~70% | Majority of general-purpose robot units manufactured globally are Chinese-made | [Robotics - supply chain](../03-domains/physical/robotics/supply-chain.md) |
| 2032 | ~70% | Agricultural yield gains real (5–15% per input) while farm operating margins stay statistically unchanged | [Agriculture](../03-domains/physical/agriculture.md) |
| 2032 | ~90% | No major disruption to Taiwanese leading-edge output *(input assumption)* | [Uncertainty 4](../06-uncertainties/taiwan.md) |
| 2035 | ~15% | Meaningful UBI in a major economy | [Fiscal](../09-macro/fiscal.md) |
| 2035 | ~30% | Gulf capacity converts into broad domestic economic transformation | [Gulf](../03-domains/contested/geopolitics/gulf.md) |
| 2035 | ~30% | Productivity step-up raises real rates >100bp against the demographic tide | [Rates](../09-macro/rates.md) → row 2 |
| 2035 | ~50% | A major central bank formally revises its target definition or tolerance band | [Prices](../09-macro/prices.md) |
| 2035 | ~55% / ~25% | Global South: meaningful welfare gains / meaningful growth gains | [Global South](../03-domains/contested/geopolitics/global-south.md) |
| 2035 | ~70% | Licensed-trades real wage growth outpaces credentialed cognitive professions | [Assets](../09-macro/assets.md) |
| 2040 | 40 / 45 / 15 | Growth outcome forks: materially higher / meaningful / disappointment | [2032–2040](../04-timelines/2032-2040.md) |

**Conditional claims** - scoreable only if their trigger fires:

| Condition | P | Claim (short) | Where |
|---|---|---|---|
| The 2027–29 correction arrives | ~65% | Proximate trigger is a credit event in AI-adjacent structured finance | [Capital](../01-substrate/capital.md) |
| A salient incident occurs | ~50% | Operative technical content of the response is industry-originated | [Game 2](../02-games/2-nations.md) |

**Decompositions** - attribution splits, not event probabilities; scored on mechanism accuracy:

| Split | Claim | Where |
|---|---|---|
| 50 / 30 / 20 | Entry-level hiring decline: AI substitution / cyclical / work-organization - flagged at source as the number most likely to be revised | [Game 4](../02-games/4-labor.md) |

*Round 19 closed the two flags this page opened in round 18: the energy 2029 and agriculture 2032 predictions were stamped (~65%, ~70%) at source and moved into the table above.*

## Reading the register as a set

Three cautions apply to the table above that do not apply to any single row read alone.

**Shared inputs cluster the outcomes.** The ~90% Taiwan row is not one prediction among sixteen; it is an input sitting under most of the others. The robotics supply-chain claim, the cyber trajectory, the growth fork, and every compute-gated date inherit it, so the register's failure modes are correlated through it - if that row resolves badly, the correct response is the full-table re-score the [main table](README.md) mandates, not row-by-row scoring of claims whose common assumption failed. A second, softer cluster runs through permitting: the energy 2029 claim, the rates claim, and parts of the growth fork all lean on [Uncertainty 2](../06-uncertainties/power-permitting.md) resolving the way the corpus expects.

**The tildes are load-bearing.** Every "~" marks a number elicited to the nearest 5 or 10 points, stated at the source page in the course of an argument rather than through the deliberation the seven main rows got. Calibration analysis should bucket them accordingly - a ~65% register claim resolving false is one point of evidence about a 60-70 band, not a Brier-score catastrophe. The compensating discipline is volume: sixteen roughly-stated claims scored together say more about calibration than seven carefully-stated ones, which is why [scoring](../08-method/scoring.md) judges the bands across both pages jointly.

**Resolution will be contested for about a third of these.** "Commercial scale," "material line," "broad transformation" have judgment in them. The scoring rule already anticipates this - the source page carries the operational definition and the failure mode - but a register reader should know in advance which rows are crisp (Taiwan, Chinese-made majority, published insurance rates) and which will need the resolution argued in the [ledger](ledger.md) rather than looked up. A claim whose resolution essay exceeds its original argument was a badly specified claim, and logging that is itself framework correction.

## How this page is maintained

Any round that adds a probability-stamped blockquote anywhere in the corpus must add a row here in the same round (Reconcile step). When a claim resolves, its row moves to the [resolution log](ledger.md) with the outcome and the framework correction. Calibration is judged across this register *and* the main table together - the [scoring](../08-method/scoring.md) 60% band lives mostly on this page.

**Partial resolution rule:** if a blockquote bundles clauses (e.g. consolidation *and* lag), score each clause when it becomes decidable - do not wait for the whole sentence. Document partials in the [ledger](ledger.md); leave the source blockquote as authored until a re-score round rewrites it under scoring rule 5. That is how the open-weight lag was handled in r25–26 without laundering the miss.

---

**Related:** [Main table](README.md) · [Ledger](ledger.md) · [Scoring](../08-method/scoring.md) · [Indicators](../07-indicators/)

**Next:** [Ledger](ledger.md)
