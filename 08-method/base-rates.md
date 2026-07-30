# Base Rates — the reference classes underneath the estimates

← [Part VIII](README.md) · [Index](../README.md)

---

Every probability in [Part V](../05-probabilities/README.md) starts from a reference class and then gets adjusted. This page states the classes and the adjustments, so both can be attacked separately.

The discipline that matters: **name the class before looking at the case.** A reference class picked after forming a view is a rationalization with a citation attached.

## 1. General-purpose technology diffusion

| Technology | Invention → measurable TFP effect | Rate limit |
|---|---|---|
| Steam | ~80 years | Capital stock replacement |
| Electricity | ~40 years | Factory redesign around unit drive |
| Computing | ~25 years | Software, and complementary skills |
| ERP / enterprise software | ~10 years | Process re-engineering |
| Internet | ~10–15 years | Business model discovery |

**The trend is real: each cycle is faster.** Extrapolating gives AI something like 5–10 years to measurable aggregate effect, which puts the signal in 2029–33 — the basis for the [2028–2032](../04-timelines/2028-2032.md) claim and for [Part V](../05-probabilities/README.md) row 2's low 2030 number.

**Adjustment, faster:** AI ships over existing rails, self-serves, needs no physical retooling, and has by far the fastest adoption curve of any technology in the table.

**Adjustment, slower:** the rate limit in every row above was never the technology — it was **organizational redesign**, which runs at the speed of management turnover and has not obviously accelerated. The [METR result](../02-games/4-labor.md) is direct evidence that adoption and benefit realization are separate variables.

These two adjustments point in opposite directions and roughly cancel, which is why the base case sits close to the naive extrapolation. That is a weak reason to believe it, and it is stated as such.

## 2. Infrastructure capex booms

Railways (1840s, 1870s), electrification, telecoms (1990s), shale (2010s). The pattern is consistent enough to be useful:

- **Over-build relative to near-term demand is the norm, not the exception**
- **A financial correction occurs, usually triggered by credit rather than by demand**
- **The physical asset survives the correction and gets used**
- **Equity holders are largely wiped out; the technology is not**

This is where the "~40% chance of a serious correction that resets the timeline by 2–4 years without killing the technology" figure comes from. Note it is a **conjunction of a high-probability event (correction) and a specific mechanism (credit)** — see [Capital](../01-substrate/capital.md).

**Adjustment:** AI capex has an unusually short-lived core asset. Rail track lasts a century; accelerators last 3–6 years. That makes the correction *sharper* and the surviving-asset argument *weaker* than the reference class implies — except for the [rising share in power and shells](../01-substrate/capital.md), which behaves like the classic case.

## 3. Regulatory response cycles

| Domain | Forcing event | Architecture written |
|---|---|---|
| Aviation safety | Successive fatal crashes | Within ~2 years of each |
| Nuclear power | Three Mile Island, Chernobyl | 18 months–3 years |
| Financial regulation | 1929, 2008 | 12–24 months |
| Pharmaceuticals | Elixir sulfanilamide, thalidomide | 12–24 months |
| Data privacy | Accumulated scandal, no single event | ~15 years, and weakly |

The pattern is **event-driven, fast once triggered, and shaped by whatever was already drafted.** This is the entire basis for [Game 2](../02-games/2-nations.md)'s central claim and for the emphasis in [C2](../07-indicators/governance.md) on shelf-readiness.

**The privacy row is the important exception.** Where harm is diffuse and gradual rather than concentrated and salient, no window opens at all and regulation arrives late, weak, and fragmented. **If AI harms turn out to be diffuse — labor displacement, epistemic degradation, gradual dependency — the correct reference class is privacy, not aviation**, and the [Game 2](../02-games/2-nations.md) prediction is wrong in an important way: there is no forcing event and no architecture, just drift.

That is a live possibility and it is underweighted in this document.

## 4. AI winters — failure archaeology

The winter analogy is the most-abused reference class in AI forecasting. Used loosely, it says "hype always dies." Used carefully, it asks **what specifically killed funding last time**, and whether those kill conditions are present now.

### What ended each cycle

| Cycle | Rough dates | What was promised | What actually bound | What killed the money |
|---|---|---|---|---|
| **1st winter** | ~1973–80 | General problem-solving, machine translation, battlefield automation | Combinatorial explosion; weak compute; brittle symbolic systems | Lighthill (UK), Mansfield Amendment / DARPA pullback (US): **no path from demo to deployable system** |
| **2nd winter** | ~1987–93 | Expert systems everywhere; Japan’s Fifth Generation | Knowledge-engineering cost; narrow transfer; hardware (Lisp machines) overtaken | Expert-system ROI failed at scale; **maintenance cost > value**; specialized hardware market collapsed |
| **Minor dips** | ~1990s–2000s; 2010s agent hype | AGI-adjacent branding; “AI winter over” narratives | Same: capability below commercial threshold for the sold use case | Product-market mismatch, not a field-wide funding freeze |

**The shared structure is not “people got bored of AI.”** It is:

1. **Capability plateaued below the threshold of a paying use case** (or the use case required integration the demos skipped)
2. **Funding had been justified on crossing that threshold soon**
3. **When the miss became undeniable, the money left** — often via government program cancellation or enterprise budget cycles, not via a philosophical reassessment

Secondary kill factors that recur:

- **Specialized stack stranded** (Lisp machines; any hardware that only makes sense if the software thesis wins)
- **Evaluation was theatrical** — demos in constrained environments that did not survive contact with open-world cost
- **Substitute technology won the budget** (conventional software, simpler stats, better process design)

### What did *not* end the winters

- Proof that intelligence is impossible
- Exhaustion of interesting research questions
- Permanent public rejection of the idea

Research continued through every winter at lower amplitude. Winters are **commercial and procurement events**, not ontological ones. That is why the right analogy for 2027–29 is closer to [capex boom corrections](#2-infrastructure-capex-booms) than to 1974 — *if* revenue is real.

### Diagnostic for this cycle

| Kill condition from history | Present in mid-2020s? |
|---|---|
| No revenue attached to deployed capability | **No** — material revenue, usage, task performance |
| Capability stuck below sold threshold | **Mixed** — strong on verifiable tasks; weak on open-ended autonomy sold as near |
| Funding justified only on next threshold crossing | **Partially** — train-run scale and AGI timelines still do this for a share of capital |
| Specialized stack with no residual value | **Partially** — accelerators depreciate fast; power/shells do not → [Capital](../01-substrate/capital.md) |
| Government single-buyer cancels | **Low** — civilian commercial demand dominates; sovereign is additive |

**By the historical test, a full capability winter is the wrong base rate.** The matching pattern is: **correction that culls over-build and secondary labs while leaving deployed capability and the research line intact.** That is why [Compute](../01-substrate/compute.md) and [Part V](../05-probabilities/) row 6 model a capital-markets event, not a field death.

### How a winter-shaped event could still arrive

Failure archaeology also names the paths that would *make* this cycle rhyme with 1987:

- **Revenue quality collapses** — seat-priced option-value subscriptions churn when CFOs cut “AI” as a line item; outcome-priced revenue does not. → [B5](../07-indicators/diffusion.md)
- **Agent demos never clear unsupervised production reliability** while capex assumed they would — threshold miss with modern branding
- **Energy/politics** freeze deployment capacity so that model progress cannot convert to revenue at the assumed rate → [Energy](../01-substrate/energy.md)
- **A salient incident** freezes enterprise adoption for a cycle even though capability is real → [Game 2](../02-games/2-nations.md)

> **Prior to carry forward:** P(full winter \| historical structure) is low given revenue; P(sharp capital correction with consolidation) is the reference-class central case; P(adoption freeze after incident) is a separate mechanism that can *look* like a winter in the statistics without being one in the research pipeline.

**Adjustment:** revenue *quality* matters more than revenue quantity. Seat-priced subscriptions bought on option value behave differently in a downturn than usage priced against a measured outcome.

## 5. Labor displacement episodes

The China shock is the closest well-studied analogue, and the lesson taken from it here is specifically about **concentration, not aggregate**: aggregate employment effects were modest and locally the effects were severe, persistent, and politically decisive. Adjustment costs were far higher than trade models assumed because labor is not geographically or occupationally mobile on the timescale the shock arrives.

Two adjustments for the AI case, in opposite directions:

- **Worse:** exposure is occupational and cohort-based rather than geographic, so it hits people who cannot move away from it. And it lands on the entry rung specifically — see [Game 4](../02-games/4-labor.md).
- **Better:** cognitive workers are more geographically mobile, better credentialed, and better capitalized than displaced manufacturing workers were. The absorption capacity is genuinely higher.

## 6. Demographics — the counterweight (integrated round 7)

Every advanced economy has a shrinking working-age population through the 2030s. Full treatment: [Demography](../09-macro/demography.md).

**Result carried into the priors:** aggregate displacement estimates are an **upper bound**; the [apprenticeship-gap](../06-uncertainties/apprenticeship-gap.md) compositional claim is untouched and is a larger share of total harm than the pre-demography document implied. Adoption politics may be easier in labor-scarce economies than US-centric analysis assumes.

---

**Related:** [Part V — Probabilities](../05-probabilities/) · [Steelman](steelman.md) · [Scoring](scoring.md) · [Capital](../01-substrate/capital.md) · [Demography](../09-macro/demography.md)

**Next:** [Steelman](steelman.md)
