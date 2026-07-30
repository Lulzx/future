# Base Rates - AI Winters, Failure Archaeology (class 4)

← [Base rates](README.md) · [Part VIII](../README.md)

---

The winter analogy is the most-abused reference class in AI forecasting. Used loosely, it says "hype always dies." Used carefully, it asks **what specifically killed funding last time**, and whether those kill conditions are present now.

## What ended each cycle

| Cycle | Rough dates | What was promised | What actually bound | What killed the money |
|---|---|---|---|---|
| **1st winter** | ~1973–80 | General problem-solving, machine translation, battlefield automation | Combinatorial explosion; weak compute; brittle symbolic systems | Lighthill (UK), Mansfield Amendment / DARPA pullback (US): **no path from demo to deployable system** |
| **2nd winter** | ~1987–93 | Expert systems everywhere; Japan’s Fifth Generation | Knowledge-engineering cost; narrow transfer; hardware (Lisp machines) overtaken | Expert-system ROI failed at scale; **maintenance cost > value**; specialized hardware market collapsed |
| **Minor dips** | ~1990s–2000s; 2010s agent hype | AGI-adjacent branding; “AI winter over” narratives | Same: capability below commercial threshold for the sold use case | Product-market mismatch, not a field-wide funding freeze |

**The shared structure is not “people got bored of AI.”** It is:

1. **Capability plateaued below the threshold of a paying use case** (or the use case required integration the demos skipped)
2. **Funding had been justified on crossing that threshold soon**
3. **When the miss became undeniable, the money left** - often via government program cancellation or enterprise budget cycles, not via a philosophical reassessment

Secondary kill factors that recur:

- **Specialized stack stranded** (Lisp machines; any hardware that only makes sense if the software thesis wins)
- **Evaluation was theatrical** - demos in constrained environments that did not survive contact with open-world cost
- **Substitute technology won the budget** (conventional software, simpler stats, better process design)

## What did *not* end the winters

- Proof that intelligence is impossible
- Exhaustion of interesting research questions
- Permanent public rejection of the idea

Research continued through every winter at lower amplitude. Winters are **commercial and procurement events**, not ontological ones. That is why the right analogy for 2027–29 is closer to [capex boom corrections](cycles.md) than to 1974 - *if* revenue is real.

## Diagnostic for this cycle

| Kill condition from history | Present in mid-2020s? |
|---|---|
| No revenue attached to deployed capability | **No** - material revenue, usage, task performance |
| Capability stuck below sold threshold | **Mixed** - strong on verifiable tasks; weak on open-ended autonomy sold as near |
| Funding justified only on next threshold crossing | **Partially** - train-run scale and AGI timelines still do this for a share of capital |
| Specialized stack with no residual value | **Partially** - accelerators depreciate fast; power/shells do not → [Capital](../../01-substrate/capital.md) |
| Government single-buyer cancels | **Low** - civilian commercial demand dominates; sovereign is additive |

**By the historical test, a full capability winter is the wrong base rate.** The matching pattern is: **correction that culls over-build and secondary labs while leaving deployed capability and the research line intact.** That is why [Compute](../../01-substrate/compute.md) and [Part V](../../05-probabilities/) row 6 model a capital-markets event, not a field death.

## How a winter-shaped event could still arrive

Failure archaeology also names the paths that would *make* this cycle rhyme with 1987:

- **Revenue quality collapses** - seat-priced option-value subscriptions churn when CFOs cut “AI” as a line item; outcome-priced revenue does not. → [B5](../../07-indicators/diffusion/economy.md)
- **Agent demos never clear unsupervised production reliability** while capex assumed they would - threshold miss with modern branding
- **Energy/politics** freeze deployment capacity so that model progress cannot convert to revenue at the assumed rate → [Energy](../../01-substrate/energy.md)
- **A salient incident** freezes enterprise adoption for a cycle even though capability is real → [Game 2](../../02-games/2-nations.md)

> **Prior to carry forward:** P(full winter \| historical structure) is low given revenue; P(sharp capital correction with consolidation) is the reference-class central case; P(adoption freeze after incident) is a separate mechanism that can *look* like a winter in the statistics without being one in the research pipeline.

**Adjustment:** revenue *quality* matters more than revenue quantity. Seat-priced subscriptions bought on option value behave differently in a downturn than usage priced against a measured outcome.

---

**Related:** [Cycles](cycles.md) · [Capital](../../01-substrate/capital.md) · [Compute](../../01-substrate/compute.md) · [Part V](../../05-probabilities/) row 6 · [Uncertainty 6](../../06-uncertainties/correlated-risk.md)

**Next:** [Steelman](../steelman.md)
