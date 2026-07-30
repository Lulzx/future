# Energy — the constraint that bites before capital does

← [Part I](README.md) · [Index](../README.md)

---

*Quantities current to mid-2026.*

A 1GW datacenter campus draws what ~800,000 homes draw. And the supply chain behind that gigawatt is measured in years, not quarters:

- US grid interconnection queues for large new loads run **5–7 years**
- Gas turbine order books are full **into 2030**
- Transformers have **2–3 year** lead times

You cannot software-engineer your way past a substation.

## The queue, quantified

The abstraction "interconnection queue" hides how badly the arithmetic fails. As of 2026:

| Market | Queue volume | Typical wait |
|---|---|---|
| CAISO | ~410 GW | 5–6 years |
| MISO | ~380 GW | ~5 years |
| ERCOT | — | 3–4 years for >75MW campus loads |

Against that, a hyperscale facility is **built in 1–3 years**. The construction cycle is shorter than the permission cycle, which means the binding constraint is not the thing being built. Roughly **30–50% of planned 2026 AI datacenter capacity is expected to slip to 2028** on interconnection and construction bottlenecks alone.

ERCOT's position in that table is the tell. Its advantage is not geography, weather, or capital — it is a different regulatory structure. **The variance across US markets is larger than the variance across countries**, which tells you the constraint is institutional.

## The bottleneck migrates

This is the single most underrated fact in AI forecasting: **the bottleneck migrates from silicon → electrons → permits.**

By 2028 the rate-limiting step on frontier AI in the US is not chip supply. It is environmental review, transmission rights-of-way, and turbine manufacturing. These are legal and industrial constraints, and they respond to entirely different levers than anything the labs control.

The corollary is that AI progress becomes partly a **function of American administrative law** — a sentence that would have sounded absurd in 2023 and is now load-bearing.

## The escape hatch: behind the meter

When a queue is the constraint, the response is to leave the queue. That is what 2025–26 capital allocation shows:

- **Direct generation ownership** — Alphabet's ~$4.75B acquisition of Intersect Power moves risk from grid queues into owned generation-plus-storage packages.
- **Nuclear restarts and offtakes** — Microsoft's Three Mile Island restart; Amazon and Google contracting small modular reactors for carbon-free baseload.
- **On-site gas** — fastest to deploy, worst politically, and the default when the schedule binds.

This changes who the players are. **A frontier lab is becoming a power company with a research division attached**, and the relevant competence shifts from ML engineering toward project finance, EPC management, and regulatory affairs. Expect org charts to follow the constraint within two years of it binding.

> **Prediction:** by 2029, **>40%** of new frontier-training capacity in the US is powered by generation the operator owns or has contracted bilaterally, rather than by grid supply procured at tariff. The grid becomes the backup, not the source.

## The political economy of the electricity bill

The constraint has a consumer-facing side that will dominate the politics well before it dominates the engineering. Wholesale electricity costs near US datacenter concentrations have risen sharply — on the order of **+267%** at the most affected nodes.

That number is the seed of the backlash. The mechanism is simple and hard to argue against in public: a large inflexible load arrives in a constrained market, clears at the top of the supply stack, and every ratepayer in the zone sees it on their bill. The benefits are national and diffuse; the costs are local and itemized monthly.

**This is the most likely source of binding domestic AI regulation in the US — not safety, not labor, not copyright.** Electricity prices are the one channel through which the abstraction touches a median voter's budget on a monthly cycle. Expect state-level siting restrictions, ratepayer-protection rules, and special large-load tariffs to arrive before any federal capability regulation does. → [2028–2032](../04-timelines/2028-2032.md)

## The geopolitical consequence

Countries that can build power fast gain structural advantage **that has nothing to do with their AI research talent**:

- **China**, at ~300GW/yr of generation additions — roughly an order of magnitude above US net additions, with permitting that is an instrument of policy rather than an obstacle to it
- **Gulf states**, with sovereign capital, abundant gas, and minimal permitting friction
- **A second tier** — India, Brazil, Indonesia — with the additions but not yet the transmission or the demand-side buyers

This decouples AI capacity from AI capability. A country can have world-class researchers and no ability to deploy them at scale, or the reverse. Most existing analysis conflates the two. → [Geopolitics](../03-domains/contested/geopolitics/)

## Caveat: this is politics, not physics

Interconnection queues, NEPA review, and transmission siting are statutory and revisable. The constraint can loosen suddenly and cannot tighten much further — so the distribution is skewed toward *faster* than the base case here assumes.

Two things cut further against the pessimistic read:

- **Load flexibility is nearly free and barely used.** Training is interruptible. A datacenter willing to curtail during peak hours can interconnect far faster than one demanding firm capacity, and the industry has only begun to price this.
- **Efficiency compounds on the demand side too.** The GW figures assume today's FLOPs-per-watt. Three years of accelerator efficiency gains at historical rates cut the energy per unit of capability substantially even as total draw rises. Jevons still wins on the total, but the ceiling moves.

→ Treated at length in [Uncertainty 2: power permitting](../06-uncertainties/power-permitting.md)

---

**Related:** [Compute](compute.md) · [Capital](capital.md) on what the money buys · [Geopolitics](../03-domains/contested/geopolitics/) · [2028–2032](../04-timelines/2028-2032.md) on electricity price backlash

**Next:** [Data](data.md)
