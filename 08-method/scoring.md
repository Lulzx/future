# Scoring — how to hold this document accountable

← [Part VIII](README.md) · [Index](../README.md)

---

Predictions that cannot be scored are decoration. This page specifies how each claim resolves, what counts as a miss, and the specific ways this framework will try to avoid admitting one.

## Resolution rules

**A blockquoted prediction resolves.** Every `>` block in the corpus is a scoreable claim. Prose is context.

**Ranges resolve at the midpoint unless a threshold is stated.** "12–18% of task-hours" scores against 15%. "By 2029" means by 2029-12-31.

**Directional claims resolve against the counterfactual, not the level.** "Value accrues to inelastic complements" is not scored by whether energy prices rose — they might rise for unrelated reasons — but by whether they rose *relative to* cognition-intensive prices. Most of this document's claims are relative and must be scored relative.

**A claim is a miss if it was right for the wrong reason.** If the [correction](../01-substrate/capital.md) arrives in 2028 but is triggered by a macro shock rather than by AI revenue disappointing, the timing was lucky and the mechanism was wrong. Log it as a miss with a note. Mechanism accuracy is the point; a framework that gets outcomes right through wrong mechanisms will fail on the next question.

## The scoring ledger

Maintained per [protocol](../RESEARCH.md) §5. Each entry: claim, source page, resolution date, outcome, and — the important column — **what the framework should have said.**

| Field | Why |
|---|---|
| Claim, verbatim | Prevents retroactive rewording, the most common self-deception |
| Source page | Locates the reasoning that produced it |
| Resolution date and criterion | Fixed at authoring time, never after |
| Outcome | Hit / miss / right-for-wrong-reason / unresolvable |
| Framework correction | The only field that produces learning |

**Unresolvable is a real and common outcome, and it is a mild indictment.** A claim that cannot be settled by evidence was underspecified when written. Count them; a rising unresolvable rate means the writing is drifting toward safety.

## The five ways this document will dodge

Named in advance, because the point of naming them is to make them harder to use.

1. **"Early, not wrong."** The universal escape. **Rule: a timing claim that misses its stated date by more than 3 years is a miss**, regardless of what happens afterward. Directional vindication at an arbitrary horizon is not a forecast.
2. **Reference-class swapping.** When [aviation](base-rates.md) stops fitting the regulatory prediction, reaching for privacy instead. **Rule: the class is fixed at authoring. Changing it is a logged revision with a stated reason, not an interpretation.**
3. **Scope narrowing.** [Game 3](../02-games/3-firms.md)'s narrowing to "competitive markets specifically" in the [steelman](steelman.md) is exactly this move. It is legitimate *once*, done explicitly, in advance of the resolution. It is not legitimate afterward.
4. **Indicator substitution.** Quietly promoting whichever [indicator](../07-indicators/) happens to be confirming. **Rule: the five headline indicators are fixed; changes go in the round log.**
5. **Probability inertia.** The subtlest. A probability that never moves is not being updated; it is being defended. **Rule: annual re-scoring of every row in [Part V](../05-probabilities/README.md), and a row that hasn't moved in two years requires a written justification for why no evidence bore on it.**

## Calibration targets

Over a sufficient number of resolved claims:

| Stated confidence | Should be right |
|---|---|
| ~90% | ~9 in 10 |
| ~60% | ~6 in 10 |
| ~20% | ~2 in 10 |

The 60% band is where this document lives and where calibration is hardest to fake. **Being right on 90% of the 60% claims is not good performance — it is evidence of systematic under-confidence**, which is its own failure and usually a sign of hedging to avoid scoreable error.

## The first claims due

| Due | Claim | Source |
|---|---|---|
| 2027–28 | Junior hiring fails to recover with aggregate white-collar hiring | [Game 4](../02-games/4-labor.md), [B1](../07-indicators/diffusion.md) |
| 2028 | No frontier training run above $5B → the capex ceiling was evadable | [A1](../07-indicators/substrate.md) |
| 2028 | Revenue above ~$200B/yr run-rate | [A2](../07-indicators/substrate.md) |
| 2027–2031 | A salient AI-attributed incident occurs | [Game 2](../02-games/2-nations.md), [C1](../07-indicators/governance.md) |
| 2029 | Consolidation to 3–5 frontier labs; open-weight tier 9–15 months behind | [Game 1](../02-games/1-labs.md) |
| 2029 | >40% of new US frontier capacity on owned or bilaterally-contracted generation | [Energy](../01-substrate/energy.md) |
| 2030 | AI-specific liability coverage exists as a material line with published rates | [Insurance](../03-domains/cognitive/insurance.md) |

The first two resolve within about eighteen months of writing and are the earliest real test. **If both miss, the framework's treatment of institutional friction and capital ceilings is wrong in the same direction — toward slowness — and the whole timeline should shift, not just those two rows.**

---

**Related:** [Part V — Probabilities](../05-probabilities/README.md) · [Part VII — Indicators](../07-indicators/) · [Steelman](steelman.md) · [Protocol](../RESEARCH.md)

**Next:** [Index](../README.md)
