# Logistics - solved in the planner, unsolved in the last hundred metres

← [III.B - Physical](README.md) · [Index](../../README.md)

---

Logistics splits more cleanly than any other domain into a part that AI finishes and a part it barely touches, and the split falls exactly where the [master asymmetry](../../01-substrate/data.md) says it should.

**Planning has cheap, immediate, unambiguous ground truth.** Did the route take less fuel? Did the container arrive? Did the warehouse pick rate rise? These are measured automatically, resolve in hours, and are optimized against continuously. This half is effectively done - and was largely done before the current wave, by operations research.

**Handling has expensive ground truth and unstructured physics.** A mixed pallet, a damaged carton, an unlabelled item, a customer's front step in the rain. Each is a one-off, each requires manipulation of objects with unknown properties, and the failure modes are physical rather than informational.

## Where the labor actually is

This matters because the employment is nearly all in the second half.

| Function | Share of sector labor | AI exposure |
|---|---|---|
| Planning, routing, scheduling, brokerage | Low | Very high - largely realized |
| Long-haul line movement | Moderate | High, but gated on autonomy regulation |
| Warehouse picking and packing | High | Moderate - structured but manipulation-bound |
| Final delivery and handling | Highest | Low before ~2032 |

**Freight brokerage is the most exposed white-collar occupation in the physical economy.** It is pure information arbitrage - matching loads to capacity, negotiating rates over the phone - with an immediate P&L signal on every transaction. It has the ground-truth profile of [finance](../cognitive/finance.md) attached to the wage profile of the middle class, and it is being compressed now.

Same pattern as [law](../cognitive/law.md) / [software](../cognitive/software.md) middle hollow - analytical matching dies; relationship and exception handling lag.

The reason brokerage survived this long is instructive, because it is the reason several other intermediaries will not. Brokers persisted through two decades of digital freight marketplaces not because matching was hard but because the market is thin, fragmented, and full of counterparties whose reliability is not documented anywhere. The broker's asset was a private reputation ledger held in their head and their phone. What changes now is that the ledger becomes explicit: telematics, on-time records, and transaction history make counterparty reliability a queryable attribute rather than a relationship. **The intermediary was pricing an information asymmetry, and the asymmetry is being measured away rather than out-thought.** Any occupation whose moat is undocumented knowledge of who is trustworthy should read this as the template, and the timing signal is instrumentation of the counterparties, not model capability.

## Long-haul autonomy: a regulatory story, not a technical one

Highway driving is the most structured driving that exists: limited access, no pedestrians, consistent markings, predictable actors. Hub-to-hub autonomous freight with human drivers handling the first and last legs is a well-defined problem with a well-defined economic case.

What gates it is **liability and jurisdiction**, not capability. A truck crosses state lines; the insurance, the licensing, and the tort exposure change as it does. This is the [insurance](../cognitive/insurance.md) argument in its purest form - the deployment frontier is drawn by underwriters and state legislatures, and the technology has been waiting on the far side of it for years. → [C6](../../07-indicators/governance.md), [C7](../../07-indicators/governance.md)

> **Prediction:** driver-out hub-to-hub freight at commercial scale on major US corridors by **2030 (~55%)**, with the binding constraint being state-level regulation and insurance capacity rather than autonomy performance. Full door-to-door autonomy remains a 2035+ question.

[Demography](../../09-macro/demography.md) and driver shortages pull adoption the way Japan pulls care automation - scarcity politics differ from white-collar displacement politics.

## Warehouse: structured robotics first

Warehouses, ports, and cross-docks are where [robotics](robotics/) commercial viability arrives first in the [2028–2032](../../04-timelines/2028-2032.md) window. Structure → repetition → samples. Teleoperation-to-autonomy ratios matter more than demo videos.

Picking still hits deformable objects and mixed SKUs; packing and sortation advance faster. Labor share stays high until unstructured manipulation clears - same wall as [agriculture](agriculture.md) specialty harvest.

## The last hundred metres

Everything from the delivery vehicle to the door is the hard part: stairs, gates, dogs, apartment buildings, packages that must not be left in the rain, and a recipient who may or may not be present. It has no structure, no repetition, and no cheap ground truth.

This is the same wall as specialty crop harvesting and general-purpose [manipulation](robotics/). **The economy's physical labor is concentrated in exactly the interactions that are hardest to learn**, which is the central reason the [2032–2040](../../04-timelines/2032-2040.md) period is uncertain rather than the 2026–2032 one.

## Supply chains as an information problem

The more interesting medium-term change is not automation of movement but **compression of the planning horizon.**

Global supply chains carry enormous buffer inventory because coordination across many firms, languages, jurisdictions, and systems is slow and error-prone. Much of that buffer is a tax on communication cost. If negotiation, documentation, customs classification, exception handling, and multi-party rescheduling all become cheap, working capital tied up in inventory falls economy-wide.

> That is a genuine, large, and mostly unmodelled macroeconomic effect: **a one-time release of working capital across the whole traded economy**, showing up as improved return on capital rather than as measured productivity.

Against it: the 2020s taught every operator that thin buffers are fragile, and the political direction of travel is toward redundancy and reshoring. **Efficiency gains may be spent on resilience rather than banked** - which is a rational choice and one that makes the effect invisible in the statistics. → [Prices](../../09-macro/prices.md), [Geopolitics](../contested/geopolitics/)

A sharper objection to the working-capital story: buffer inventory is not only a communication tax, it is insurance against variance, and better coordination reduces the variance a firm can see rather than the variance that exists. A supply chain that is jointly optimized end to end is also more tightly coupled, with less slack anywhere to absorb a shock, which is the configuration that failed loudly in 2020 and 2021. So the release of working capital and the increase in fragility are the same event described twice. If the optimization is adopted broadly and a shock follows, the observed sequence will be a few years of improved return on capital followed by a correlated disruption that erases several years of the gain - and it will be attributed to the shock rather than to the coupling that amplified it. This is [Uncertainty 6](../../06-uncertainties/correlated-risk.md) in physical form, and it is why the prediction here is stated as a one-time release rather than a permanent improvement.

### Cyber and OT

[Cybersecurity](../contested/cybersecurity.md): ports, yards, and warehouse WMS/OT are critical infrastructure with long capital cycles. Offense trough hits logistics visibility and safety systems; correlated downtime is an insurance and Game 2 candidate.

## The strategic layer

Logistics is where the economics meet [geopolitics](../contested/geopolitics/). Port automation, chokepoint control, sanctions compliance, and trade-route reconfiguration are all being reshaped simultaneously, and the actor best positioned is whoever controls both the physical infrastructure and the data flowing over it.

Note what that describes: **infrastructure plus proprietary real-time flow data** - two [inelastic complements](../../02-games/3-firms.md) in the same hand. The framework predicts value concentrates there, and it does. Same data-complement story as farm equipment OEMs in [agriculture](agriculture.md).

## What to watch

| Signal | Reading |
|---|---|
| Hub-to-hub autonomous miles without safety driver | Regulatory + insurance gate → [B12](../../07-indicators/diffusion/capability.md) |
| Warehouse teleop-to-autonomy ratio | Structured robotics → [B12](../../07-indicators/diffusion/capability.md) |
| Brokerage headcount / margin vs load volume | White-collar physical compression |
| Inventory / sales ratios (if resilience not binding) | Working-capital release |
| Port and yard automation share by region | Geopolitical capacity |

## Failure modes

- **If multi-state insurance and liability clear early**, the 2030 hub-to-hub ~55% was low.
- **If reshoring and buffers dominate**, the working-capital release never appears in aggregates.
- **If last-metre robots work in apartments**, the 2035+ door-to-door claim was too slow - rare but timeline-shifting.

---

**Related:** [Robotics](robotics/) · [Agriculture](agriculture.md) · [Insurance](../cognitive/insurance.md) · [Cybersecurity](../contested/cybersecurity.md) · [Geopolitics](../contested/geopolitics/) · [2032–2040](../../04-timelines/2032-2040.md) · [Finance](../cognitive/finance.md)

**Next:** [III.C - Contested domains](../contested/)
