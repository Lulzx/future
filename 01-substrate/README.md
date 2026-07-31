# Part I - The Physical Substrate

← [Index](../README.md)

---

Everything downstream depends on four inputs: **compute, energy, data, capital**. Each has a different scaling law and a different ceiling.

The order matters. These are not four parallel concerns - they are a relay. Compute constrained the field through ~2024. Data exhaustion redirected it in 2024–25. Energy binds from ~2026. Capital tests the whole thing around 2027–29. And the character of each ceiling determines what the games in [Part II](../02-games/) can and cannot do.

## Sections

| | Constraint | Binds when | Character |
|---|---|---|---|
| [Compute](compute.md) | Effective compute ~7–10×/yr; dollar term breaks at Apollo scale | 2029–30 | Financial, possibly evadable via efficiency |
| [Energy](energy.md) | Interconnect queues, turbines, transformers | ~2026 onward | Physical *and* regulatory; skewed toward loosening - sector-side effects in [energy sector](../03-domains/physical/energy-sector.md) |
| [Data](data.md) | High-quality human text exhausted | Already binding | Redirected rather than blocking - and it created the master asymmetry |
| [Capital](capital.md) | Not a ceiling - a continuously re-priced verdict | 2027–29 | Financial and reversible; the only input that can run backwards |
| [Inference economics](inference-economics.md) | Not a ceiling - a floor collapsing | Continuous | Sets the two-year moat on any capability |

## Two of these are not constraints

Compute, energy, and data are ceilings - they cap what is possible. [Capital](capital.md) and [inference economics](inference-economics.md) are not, and reading them as ceilings is a common error.

**Capital is a verdict**: there is no physical limit on the flow, only a continuously re-priced judgment about repayment. It is the fastest-moving input and the only one that can reverse. **Inference cost is a floor collapsing**: it does not constrain anything, it sets the depreciation schedule on every capability advantage anyone holds.

The practical difference: a ceiling tells you what cannot happen, a verdict tells you what someone currently believes, and a collapsing floor tells you how long your advantage lasts. Forecasts that treat all five rows alike get the timing wrong in both directions.

**Relay + floor together:** energy binds the *build*; inference collapse sets the *moat life* of whatever you built; capital re-prices whether the next build is allowed. → [2026–2028](../04-timelines/2026-2028.md) capex test, [Rates](../09-macro/rates.md) financial governor.

## The inputs are coupled, not parallel

Reading the five rows as independent misses most of the dynamics. The couplings do the work:

**Energy × capital.** The energy constraint is what converts capital from a verdict into a commitment. Money queued behind a 5-year interconnection wait cannot exit on an earnings cycle; it is already poured into shells and substations. So the tighter energy binds, the more the capital stack shifts toward long-lived physical assets - which is exactly the shift that bounds the downside of a correction ([capital](capital.md) on the physical-asset residual).

**Data × compute.** Effective compute is only an engine where a training signal exists. Past data exhaustion, marginal FLOPs concentrate on verifiable domains, which *narrows* what the compute curve buys even as it steepens. This is why the 7–10×/yr figure and "progress feels uneven" coexist without contradiction.

**Inference × capital.** The collapsing floor is simultaneously the bull case and the bear case for the capex test: it destroys pricing power at any fixed capability (bear), while Jevons expansion of consumption is the only plausible route to the revenue bar (bull). Which effect dominates is close to *the* question of [2026–2028](../04-timelines/2026-2028.md), and it cannot be settled from either page alone.

**The relay metaphor's failure mode.** A relay implies each constraint hands off cleanly to the next. The couplings above mean they can instead bind *simultaneously* - an energy-delayed build raises capex per delivered FLOP just as the capital verdict is being re-priced. The base case here assumes sequential binding; the compounding case is the pessimistic tail, and it is tracked jointly by [A2 and A4](../07-indicators/substrate.md) rather than by any single indicator.

**Behind-the-meter routing.** When A4 (queue) looks stuck, check whether new MW is arriving as captive generation that never enters the public queue ([energy](energy.md)). Slack in the political series with tight physical capacity is a different story from both tight.

## The one thing to take from Part I

Data exhaustion forced the frontier onto verifiable-reward training. That produced the asymmetry that runs through this entire document: **capability grows fastest where verification is cheap.** Math, code, and formal reasoning race ahead. Taste, judgment, long-horizon physical interaction, and anything whose ground truth is expensive or contested lag badly.

Every domain prediction in [Part III](../03-domains/) is downstream of that sentence. [Uncertainty 5](../06-uncertainties/learned-verification.md) is the claim that would reorder them.

---

**Next:** [Compute](compute.md) → [Part II - The Games](../02-games/)
