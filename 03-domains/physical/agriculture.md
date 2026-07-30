# Agriculture — one experiment per year

← [III.B — Physical](README.md) · [Index](../../README.md)

---

Agriculture is the cleanest natural experiment in the whole document, because it isolates a single variable: **what happens when the ground truth is cheap to observe but slow to arrive?**

Sensing is nearly free — satellites, drones, soil probes, yield monitors, and machine telemetry produce enormous volumes of data. But the outcome that matters resolves **once per season.** A model that wants to learn what actually raises yield gets one supervised example per field per year, and that example is confounded by weather it cannot control and cannot repeat.

This is the opposite of the software case, where the loop runs a million times a day. Same technology, same intent, and a learning rate three or four orders of magnitude apart.

## What is already working

The parts that don't need the seasonal loop:

- **Perception.** Weed-versus-crop discrimination, disease identification, ripeness assessment, livestock monitoring. These have cheap, immediate ground truth and are largely solved.
- **Precision application.** See-and-spray systems cut herbicide volumes by large fractions — a genuine, measurable, deployed win, and one of the clearest positive-externality cases anywhere in this document.
- **Machine autonomy in structured fields.** A row-crop field is the most structured outdoor environment that exists: flat, gridded, obstacle-poor, and geofenced. Autonomy arrives here well before it arrives on a street.
- **Administrative load.** Compliance paperwork, subsidy applications, traceability documentation, and market analysis are ordinary cognitive work and compress like every other kind.

## What is not, and won't quickly

- **Agronomic decision-making** — the seasonal-loop problem above. Simulation helps and is improving, but crop models are calibrated against the same scarce field trials, so simulation inherits the data scarcity rather than escaping it.
- **Specialty crop harvesting.** Strawberries, asparagus, tree fruit, and vine crops require delicate manipulation of deformable objects in unstructured, occluded environments — the hardest open problem in [robotics](robotics/), attached to the lowest-margin employer of the most vulnerable labor force. That combination is why it stays unsolved.
- **Breeding cycles.** Genomic prediction is genuinely improving, but the validation still requires growing the plant. Biology sets the clock.

## The economics are the real constraint

Farm operating margins are thin and volatile, capital cycles run 10–20 years on equipment, and the median operator is in their late fifties. Adoption is gated by **capital availability and trust**, not by capability.

The distributional consequence is stark and follows directly from [Game 3](../../02-games/3-firms.md): if all producers adopt yield-improving technology, output rises, prices fall, and **the surplus goes to consumers and to input suppliers, not to farmers.** Agriculture has run this exact loop for two centuries — the Green Revolution, mechanization, hybrid seed — and the outcome has been the same every time: enormous aggregate welfare gain, continued consolidation, and no durable margin improvement at the farm.

**The inelastic complement in agriculture is land and water rights.** That is where value accrues, and it is why farmland has behaved as a financial asset for decades regardless of what happened to farm income.

> **Prediction:** by 2032, AI-driven agricultural productivity gains are **real and measurable** — plausibly 5–15% on yield-per-input in adopting operations — and **almost entirely captured by consumers, landowners, and equipment manufacturers**, with farm operating margins statistically unchanged.

## Why it matters more than its GDP share suggests

Agriculture is ~1% of US GDP and ~25% of employment globally. The gains are concentrated where the sector is largest, which means **this is one of the few chapters in this document where the largest welfare effects land in low- and middle-income countries.**

The obstacle there is not model capability, which is free. It is smartphone penetration, connectivity, extension services, credit access, and land tenure security. Every one of those is a development problem with a fifty-year literature, and none of them are accelerated by better models.

That is the pattern the whole document keeps producing: **the technology arrives free and the complements do not.** → [Geopolitics](../contested/geopolitics/)

## Two risks specific to this domain

- **Monoculture of advice.** If most operators in a region follow recommendations from the same model, planting and treatment decisions correlate. Correlated agronomic decisions are how pest resistance and price crashes both happen. This is the [insurance correlation problem](../cognitive/insurance.md) with a biological substrate.
- **Data asymmetry.** Equipment manufacturers hold the yield and telemetry data. That is proprietary real-time flow data — a canonical [inelastic complement](../../02-games/3-firms.md) — and control over it is being contested in exactly the way the framework predicts.

---

**Related:** [Robotics](robotics/) on the manipulation bottleneck · [Logistics](logistics.md) · [Game 3 — Firms](../../02-games/3-firms.md) on why producers don't capture it · [Geopolitics](../contested/geopolitics/)

**Next:** [Logistics](logistics.md)
