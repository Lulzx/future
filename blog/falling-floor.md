---
title: You Cannot Own a Falling Floor
dek: Inference cost at fixed capability fell 100–1000× in two years. Every business whose moat is model access now has a published expiry date.
date: 2026-08-01
tags: inference, moats, unit economics
takeaway: A moat that depreciates on a published schedule is not a moat. It is a lease, and everybody can read the term.
corpus: 01-substrate/inference-economics.md, 02-games/3-firms.md, 01-substrate/compute.md, 02-games/1-labs.md
---

# You Cannot Own a Falling Floor

Start with the number, because almost nobody prices off it.

Cost per token **at fixed capability** fell roughly **100–1000× in two years**. That range is deliberately conservative against the measured one. Epoch AI's price-trend series across 2023–25 finds declines of **9× to 900× per year** depending on the task and the capability threshold you hold constant, with a median around **50×/yr**, and the steepest part of the curve starting after January 2024.

Hold that phrase, *at fixed capability*. It is doing all the work. The claim is not that AI gets cheaper in some vague sense. It is that a specific level of intelligence, once it exists, becomes nearly free on a schedule you can put in a spreadsheet.

Every other constraint in this business is a ceiling. Compute has one. Energy has one. Data has one. This is the only input that is a **floor collapsing**, and it is the number the rest of the forecast leans on hardest.

## Why "costs are collapsing" and "capex is exploding" are both true

The most common analytical error in AI right now is treating these two facts as contradictory and picking a side. They are the same fact seen from two ends. Jevons: make cognition cheap and the world consumes vastly more of it, so **total spend rises while unit price collapses**.

| Observation | The naive read | The correct read |
|---|---|---|
| $/token falling | AI is unprofitable | Volume explodes, so spend rises anyway |
| Capex rising | Contradicts the above | Capacity for the volume that just appeared |
| Wrapper margins compressing | The models failed | Capability commoditized on schedule |

The third row is where most of the money is being lost, so the mechanism deserves to be stated bluntly. Margin compression at the application layer is not evidence that something broke. It is the system working as designed, arriving on time.

## Three mechanisms, three different expiry dates

"100–1000× in two years" is not one process, and if you want to know whether it continues you have to ask which component you are betting on. They come apart under stress.

| Mechanism | What it is | How durable |
|---|---|---|
| **Hardware** | $/FLOP plus serving-stack utilization | Manufacturing cadence. Steady, slow, unlikely to stop or accelerate |
| **Distillation** | Compressing frontier behavior into small models | Largest single contributor, and visibly bounded. You cannot distill below the capability the task actually needs, so it exhausts *per tier* while repeating for each new tier |
| **Competition** | Several near-equivalent vendors converting cost into price | The fragile one. A market-structure fact, not a technical one |

Only the third can fail suddenly, and its failure mode is the one that matters commercially.

## The distinction almost everyone collapses

**Costs falling is close to physics. Prices falling is politics.**

Costs will almost certainly keep falling, because hardware and distillation grind away regardless of who wins. Whether *prices* follow is a question about market structure, and market structure is exactly the thing under active contest. Consolidation to three to five frontier labs, plus regulatory moats that raise the cost of entry, would restore pricing power without a single technical change.

So the two-year moat is a **cost claim** that becomes a **product-strategy claim** only when competition transmits it into price. Score serving costs and serving prices as two separate series. The scenario where the moat survives technically but dies commercially is the [labs endgame](../02-games/1-labs.md), and it is not remote.

Current evidence runs the other way. Open-weight models sit only about **3–6 months behind the frontier**. Epoch AI's January–May 2026 comparison puts the average lag near **four months**, roughly six under a stricter comparison rule. That figure has been *shortening*: earlier versions of this analysis carried 9–15 months. Fast-following is keeping the model layer competitive, which is why surplus passes *through* the model layer rather than pooling in it.

## The collapse is uneven, and the unevenness is predictable

The headline number hides a gradient. Prices fall fastest where models are substitutable, which by the [verification asymmetry](../01-substrate/data.md) means the benchmarkable work. Where output quality is hard to verify, buyers cannot compare vendors, switching carries real risk, and price stays sticky.

The floor collapses fastest underneath the tasks that were automated first. It is the same gradient that governs capability, showing up a second time as a pricing fact. If your product sits in verifiable territory, you are on the fast side of both curves, the good one and the bad one.

## What this kills

Anything whose value proposition is *we have access to a smart model* has a two-year moat, maximum. Frontier access is a wasting asset that depreciates on a known schedule.

Specifically dead:

- Wrappers whose differentiation is model access
- Products differentiated by capability rather than by data, distribution, or workflow lock-in
- Pricing power based on being early to a capability tier

Treat this as an engineering constraint on product design, not a market-timing tip. Any feature whose only differentiation is "we call a smarter model" must either be rebuilt every generation as a pure cost center, or be wrapped in a complement before the lag closes: proprietary workflow data, evaluation harnesses the buyer cannot port, distribution defaults, liability you will actually carry.

The test is observable. Products that fail it show high churn the moment a cheaper equivalent tier lands. Products that pass it stay sticky through the next open-weight release.

## The planning question almost nobody asks

If capability is free on a two-year lag, then the right question is never *what can the best model do today*.

It is: **what will be free in 2028, and what will still be scarce then?**

Almost all product strategy in this industry answers the first question. The scarce list is short, boring, and has barely moved: energy, interconnection, licenses, trusted real-time data, distribution, liability capacity, physical presence, verified identity, and senior judgment after the apprenticeship gap does its damage.

Six of those are owned by capital rather than earned by labor. That is a separate and uncomfortable argument, made [elsewhere in the corpus](../09-macro/assets.md).

## What would falsify this

State it plainly, because a claim that cannot be caught failing is marketing:

- **Inference costs stop falling** at fixed capability, through an architectural wall, an energy floor, or deliberate restriction.
- **Capability jumps get so large** that "fixed level free" stops mattering, because each cohort is a new regime rather than a cheaper version of the last.
- **Regulation locks the frontier behind non-price barriers**, giving a few labs a durable access moat that no amount of falling cost erodes.

The first would be visible in published serving prices within two quarters. The third would be visible in legislative text before it is visible in a P&L.

---

All of this is one instance of a more general result: as cognition approaches free, value concentrates in the inelastic complements. Adoption becomes mandatory and the return becomes defensive. You spend to not die, not to win. That is [the Red Queen](../02-games/3-firms.md), and it is the normal outcome for a general-purpose technology. Electricity, containerization, ERP, and the internet all ran the same way.

The mistake is not being wrong about how good the models get. Almost everyone is roughly right about that now. The mistake is assuming that being right about capability tells you anything about who gets paid.
