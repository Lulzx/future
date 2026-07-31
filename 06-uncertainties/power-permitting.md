# Uncertainty 2 - The political feasibility of rapid power permitting in the US

← [Part VI](README.md) · [Index](../README.md)

---

[Part I](../01-substrate/energy.md) treats the energy constraint as roughly fixed through 2030.

**That is a statement about politics, not physics.**

Interconnection queues, NEPA review, and transmission siting are all statutory and revisable. A serious permitting reform, a national-security framing of datacenter buildout, or federal preemption of transmission siting could compress a 5-year timeline to 2.

## The asymmetry matters

This constraint **can loosen suddenly and cannot tighten much further.** Queues are already near their practical maximum; the legal machinery is already fully engaged. There is far more room to move in one direction than the other.

So the distribution is **skewed toward faster** than the base case assumes. If I am wrong about energy, I am almost certainly wrong in the direction of having been too pessimistic.

## The force pushing the other way

Electricity price increases in datacenter-dense regions are generating genuine local political backlash - and this is something I have probably **underweighted at the state level.**

Federal preemption is a national-politics story that moves in one direction. Retail rate increases are a state-politics story that moves in the other, faster, and with a much shorter feedback loop between the cost being felt and the vote being cast. State utility commissions can impose siting conditions, rate structures, and moratoria that no federal reform straightforwardly overrides.

The two forces are not symmetric in speed: backlash is faster than reform. Reform requires a coalition to pass a statute and then survive implementation; backlash requires one rate case in one state. The AEP Ohio datacenter tariff (settled 2025) is the template: a state commission imposing minimum-take obligations and long commitments on datacenter load, arrived at faster than any federal reform has moved, and copied more easily than any federal reform can preempt.

## What reform can and cannot compress

The "skewed toward faster" claim needs a decomposition it did not originally have. The constraint has two layers, and legislation reaches only one of them.

**The statutory layer** - NEPA review, interconnection study queues, transmission siting authority - is revisable by ordinary politics, and the queue arithmetic makes the upside large: roughly 2.6 TW of generation and storage sat in US interconnection queues at end-2023 (LBNL, Queued Up 2024 edition), several multiples of what any demand scenario needs. Reform does not have to create supply; it has to release supply that already applied.

**The industrial layer** - large power transformers, HV cable, gas and steam turbines, and the skilled crews that install them - does not read statutes. Lead times on large transformers and heavy turbine orders were being quoted in years, not quarters, through 2025, and a permitting miracle converts the constraint from legal to industrial rather than removing it. The honest version of the asymmetry: **maximal political loosening buys back perhaps half the timeline, because the second layer was always going to bind next.** A page that says "can only loosen" without this caveat is overclaiming.

There is also precedent discipline available. Permitting reform has passed before - NEPA amendments in the 2023 Fiscal Responsibility Act - and produced measured acceleration far smaller than headline expectations, because implementation, litigation, and agency staffing diluted it. Statutes loosen suddenly; throughput loosens slowly.

## What resolution forces

**If reform fires** (federal preemption of transmission siting, or a national-security carve-out for datacenter interconnection): revise [energy](../01-substrate/energy.md)'s fixed-through-2030 ceiling, pull the compute-gated dates in [Part IV](../04-timelines/) forward, and mark the energy row of the [complement list](../09-macro/assets.md) as eroding early - this uncertainty firing is one of the mechanisms [Uncertainty 7](complement-erosion.md) tracks.

**If backlash wins the race:** the national ceiling stays but its geography changes - buildout routes to permissive states, behind-the-meter gas, and the [Gulf](../03-domains/contested/geopolitics/gulf.md), and the binding constraint becomes reputational and local rather than federal. The corpus keeps its dates but must relocate its map.

## The demand side can move too

Both forces above operate on supply, but the constraint is a ratio, and the denominator is not fixed. The [inference collapse](../01-substrate/inference-economics.md) attacks power demand per unit of delivered capability from inside the technology, with no statute required: a sufficiently steep efficiency curve relieves the permitting fight without anyone winning it. The corpus should not treat that as clean relief, though - cheaper inference historically rebounds into more inference, and the load forecasts driving the buildout already assume some of the efficiency gain. The honest reading is that demand-side movement changes *which* projects in the queue matter (inference-shaped, latency-sensitive, distributed) more than it changes the total, which is why the queue indicator below is worth reading by project type and not just by terawatts.

This also sets the coupling to the rest of the register: this uncertainty is upstream of the energy row in [Uncertainty 7](complement-erosion.md) (permitting reform is one of the two erosion mechanisms for that row) and of every compute-gated date in [Part IV](../04-timelines/). It is the parameter uncertainty with the shortest feedback loop to observable data, which makes it the cheapest one in the register to keep honestly scored.

**Failure mode of this page:** treating US politics as the whole game. The energy constraint the corpus prices is US-shaped; Gulf and Chinese buildouts route around it entirely, and a US permitting stalemate that merely offshores training capacity loosens the global constraint while appearing, from inside US data, to confirm it.

## Leading indicators

| Signal | Reading |
|---|---|
| Grid interconnection queue length (and composition: generation vs storage vs load) | The headline constraint loosening or not |
| Turbine and transformer lead times | Whether industrial capacity is responding |
| State-level siting moratoria and special rate classes for datacenters | Backlash converting into binding constraint |
| Federal preemption of transmission siting | The single change that would most move the base case |
| Behind-the-meter / captive generation share of new datacenter MW | Routing around the queue without reform |
| Gulf and non-US training-capacity announcements that cite power as the reason | Offshoring of the constraint (failure mode above firing) |

**How to score without fooling yourself.** Queue length falling because projects *withdrew* is not reform. Lead times falling because demand paused is not industrial expansion. The joint that matters is: queue throughput up *and* turbine/transformer deliveries up *and* retail-rate backlash not spawning new moratoria. Any one alone is noise.

**Interruptible training** (curtail on peak) and **behind-the-meter** MW can loosen *buyer* capacity while public queue stats stay red - score them as routing, not as "reform fired." → [Energy](../01-substrate/energy.md)

---

**Previous:** [Uncertainty 1](recursive-self-improvement.md) · **Next:** [Uncertainty 3](apprenticeship-gap.md)
