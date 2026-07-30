# A - Substrate Indicators

← [Part VII](README.md) · [Index](../README.md)

---

*Baselines as of mid-2026. Cadence: quarterly.*

These test whether the ceilings in [Part I](../01-substrate/) bind on the schedule the document assumes. All four are relatively hard to fake, because each is downstream of a capital commitment or a physical object.

## A1 - Frontier training run cost

| | |
|---|---|
| **Baseline** | ~$1B largest disclosed run (2025) |
| **Trajectory assumed** | ~$10B by 2027–28, ~$100B by 2029–30 |
| **Trigger - slower** | No run above $5B by end-2028 |
| **Trigger - faster** | A credible >$20B single run before 2028 |
| **Revises** | [Compute](../01-substrate/compute.md); the whole capex-wall argument |

The slow trigger is the more informative one. If frontier spend plateaus while capability keeps improving, **test-time compute and algorithmic efficiency substituted for scale** - which retires the capital ceiling as a binding constraint and moves the entire analysis toward the optimistic case without any correction occurring.

## A2 - Revenue against capex

| | |
|---|---|
| **Baseline** | ~$60B AI revenue run-rate (2025); ~$635–670B hyperscaler capex guided for 2026 |
| **Trajectory assumed** | 45–55% CAGR to $400–700B/yr by 2030 |
| **Trigger - correction** | Two consecutive years below ~40% CAGR |
| **Trigger - vindication** | Revenue above ~$200B/yr by 2028 |
| **Revises** | [Compute](../01-substrate/compute.md), [Capital](../01-substrate/capital.md), [Part V](../05-probabilities/README.md) row 6 |

Read the **composition**, not just the total. Seat-priced assistant revenue and outcome-priced agent revenue have different ceilings; the second is what the $400–700B case requires, and it is the one that would show up as unusually high revenue per customer rather than unusually many customers.

## A3 - The financing mix

| | |
|---|---|
| **Baseline** | Migrating from operating cash flow toward private credit, SPVs, and vendor financing |
| **Trigger - fragility** | Majority of new AI infrastructure funded off-balance-sheet |
| **Trigger - discipline** | A large operator publicly cutting capex guidance on ROI grounds |
| **Revises** | [Capital](../01-substrate/capital.md) - determines whether a downturn is a pause or a credit event |

This is the least-watched indicator with the highest information content. **A spending slowdown funded by cash flow is a decision; the same slowdown funded by debt is an accident.** The second propagates; the first does not.

## A4 - Interconnection and power

| | |
|---|---|
| **Baseline** | 5–7 yr queues; ~410GW CAISO, ~380GW MISO; 3–4 yrs ERCOT for >75MW |
| **Secondary** | Wholesale prices at datacenter-adjacent nodes up ~267%; 30–50% of 2026 capacity slipping to 2028 |
| **Trigger - loosening** | Any major market halving typical wait, or federal transmission-siting preemption enacted |
| **Trigger - tightening** | State-level large-load moratoria in two or more of TX, VA, GA, OH |
| **Revises** | [Energy](../01-substrate/energy.md), [Uncertainty 2](../06-uncertainties/power-permitting.md), [Geopolitics](../03-domains/contested/geopolitics/) |

Track the **behind-the-meter share** alongside the queue. If operators route around the grid faster than the grid reforms, the queue stops being the binding constraint and the political fight relocates from siting to ratepayer allocation. Those are different fights with different timelines.

## A5 - Accelerator efficiency and depreciation

| | |
|---|---|
| **Baseline** | ~1.35×/yr performance per dollar; 3–6 yr assumed useful life |
| **Trigger - bullish** | Operators extending depreciation schedules past six years |
| **Trigger - bearish** | Write-downs of prior-generation inventory |
| **Revises** | [Capital](../01-substrate/capital.md) - capital intensity of the whole build |

Depreciation-schedule changes are disclosed in filings, arrive before the underlying reality is common knowledge, and are one of the few places where an operator has to state what it actually believes about hardware longevity.

## A6 - Leading-edge capacity outside Taiwan

| | |
|---|---|
| **Baseline** | Vast majority of leading-edge logic wafers still Taiwan-concentrated; announced multi-region fabs years from volume at node |
| **Trigger - assumption softens** | Non-TW share of advanced wafers crosses a material threshold (double-digit % of leading-edge) *with yields*, not ribbon-cuttings |
| **Trigger - assumption fails** | Blockade, kinetic conflict, or multi-quarter interruption of TW leading-edge output |
| **Revises** | [Uncertainty 4](../06-uncertainties/taiwan.md), [Bipolar](../03-domains/contested/geopolitics/bipolar.md), every compute-gated timeline |

This is the load-bearing geographic assumption of the corpus, stated at **~90%** continuity through 2032. A6 does not predict geopolitics; it tracks whether the *consequence* of disruption is shrinking (substitution) and whether disruption has occurred (binary).

## A7 - Real rates and AI capex cost of capital

| | |
|---|---|
| **Baseline** | Real rates elevated vs 2010s; AI build financed under mid-2020s WACC assumptions |
| **Trigger - financial governor binds** | Sustained rise in real yields coinciding with AI-related return narratives, raising hurdle rates on multi-year campus builds |
| **Trigger - demographics win** | Real rates stay low or fall despite visible AI deployment and productivity chatter |
| **Revises** | [Rates](../09-macro/rates.md), [Capital](../01-substrate/capital.md), [Uncertainty 1](../06-uncertainties/recursive-self-improvement.md) financial governor |

The document's claim: success can raise the neutral rate and make the next round of infrastructure more expensive to fund - a negative feedback on takeoff that is not technical. A7 is how you see it in markets rather than in papers.

---

**Related:** [Part I - Substrate](../01-substrate/) · [Capital](../01-substrate/capital.md) · [Energy](../01-substrate/energy.md) · [Part IX - Macro](../09-macro/)

**Next:** [B - Diffusion indicators](diffusion.md)
