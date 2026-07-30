# Biosecurity - the asymmetry that does not resolve

← [III.C - Contested](README.md) · [Index](../../README.md)

---

Biology is the one domain in this document where the offense–defense balance does not plausibly recover, and the reason is structural rather than technical.

**Attack and defense operate on different clocks.** Designing a pathogen is increasingly a computational problem. Developing, trialling, manufacturing, and distributing a countermeasure is a physical, regulatory, and logistical problem measured in months to years. AI compresses the first term far more than the second, because the first has cheap computational ground truth and the second is gated on biology, factories, and institutions. → [Medicine](../physical/medicine/), [Drug discovery](../physical/medicine/drug-discovery.md)

That gap is the whole concern, and it widens rather than narrows as the technology improves.

## Where the actual barrier sits

The barrier to biological harm has never been primarily informational. It is **tacit knowledge, materials access, and laboratory skill** - the things that do not transfer through text and that are why the historical record of attempted bioterrorism is a record of failure.

AI erodes the first of those meaningfully. A model that can troubleshoot a failing protocol, explain why a step didn't work, and suggest the fix is substituting for the mentorship that tacit knowledge normally requires. That is the [apprenticeship channel](../../02-games/4-labor.md) running in the wrong direction: the same mechanism that might rescue novice professionals also lowers the skill floor for harm.

It does **not** erode materials access or the physical requirement for a competent laboratory. Those remain real, and they remain the best available control point.

### The chain, step by step

| Step | AI effect | Best control |
|---|---|---|
| Ideation / motivation | Lowers search cost; not the historical barrier | Culture, law (weak) |
| Design | Compresses computational design | Eval and access policy (leaky) |
| Protocol / troubleshooting | **Largest AI effect** - substitutes for mentorship | Lab practice norms; hard to regulate |
| Acquisition of materials | Little direct effect | **Synthesis screening**, select-agent rules |
| Synthesis / production | Indirect via protocol help | Screening + physical security |
| Delivery / dissemination | Separate logistics problem | Public health + security |

Two consequences:

- **Uplift is a bad frame in isolation.** "Can a model provide information a determined actor couldn't find" was the right question in 2023 and is the wrong one now. The right question is **where in the chain the marginal barrier sits**, and whether AI lowers *that* step. Mostly it lowers protocol and troubleshooting - middle of the chain, not the ends.
- **Screening is the highest-leverage intervention available.** Nucleic-acid synthesis screening is a genuine chokepoint: a small number of providers, a technically tractable check, and no requirement for international consensus to start. It is undersupplied for the standard [public-good reason](../../02-games/README.md) - private cost, diffuse benefit - and it is among the most cost-effective items in this document.

## Why this is the least-discussed serious risk

Compared to the attention allocated to loss-of-control scenarios, biological risk gets a fraction of the discussion, and the ordering is difficult to defend on the numbers. It sits closer in time, has a well-understood mechanism, has historical precedent for how bad pandemics get, and - unlike most of [Part V](../../05-probabilities/)'s tail - has known, cheap, partial mitigations available today.

The likely explanation for the neglect is information hazard: **the topic is genuinely hard to discuss publicly without contributing to the problem**, so serious analysis happens in closed settings and public discourse defaults to the risks that can be safely elaborated. That is a rational response to a real constraint, and it produces a systematically distorted public risk picture.

> **Assessment:** a serious AI-attributable biological *incident* - a near-miss, a screening failure, or a non-state actor progressing further than they otherwise would have - is meaningfully more likely by 2032 than loss-of-control scenarios, and meaningfully less likely than a [financial](../cognitive/finance.md) or [cyber](cybersecurity.md) incident. It is the middle probability band of [Part V](../../05-probabilities/) row 3 mechanisms, and the one with the worst tail if it scales.

## The defensive side is real and worth stating

The same capabilities that create the concern are the strongest tools available against it, and the asymmetry is not total:

- **Pathogen surveillance** - metagenomic sequencing plus anomaly detection could compress outbreak detection from weeks to days, which is the highest-value defensive intervention that exists because everything downstream scales with it
- **Countermeasure design** - structure prediction and generative design have already changed antibody and vaccine timelines materially → [Science](../cognitive/science.md)
- **Manufacturing and trial acceleration** - the slow term in the equation, and where defensive investment has the highest marginal value precisely because it is where AI helps least on its own → [Drug discovery](../physical/medicine/drug-discovery.md)

**The gap is not in design; it is in the physical and regulatory pipeline.** That is where the defensive investment should go, and it is the least glamorous part.

## Interaction with Game 2 and state capacity

A bio near-miss is a candidate [Game 2](../../02-games/2-nations.md) forcing event - less likely than cyber/finance, worse if it opens the window under panic. The architecture written then skews toward access controls and lab rules, not compute treaties.

[State capacity](state-capacity.md) binds hard: screening enforcement, stockpile logistics, and trial authorization are administrative. A high-capacity state can run surveillance and manufacturing surge; a low-capacity one imports rules and fails to staff them. International coordination faces the same verification problems as AI generally - plus dual-use research politics.

## What would change this assessment

- **Synthesis screening becoming universal and technically robust.** Achievable, checkable, raises the acquisition barrier - the part of the chain AI does not lower.
- **Rapid-response manufacturing capacity.** Standing capability to produce and distribute a novel countermeasure in weeks rather than a year converts the timeline asymmetry from structural into merely difficult. Expensive, dual-use in the good sense, justified on pandemic grounds alone.
- **Evidence that tacit-knowledge barriers hold.** If model assistance does not meaningfully substitute for wet-lab mentorship, the concern narrows. Empirically testable; being tested.
- **Automated labs at scale without access controls** - would *worsen* the assessment by compressing production, not only design. → [Science](../cognitive/science.md)

## What to watch (non-hazardous)

| Signal | Reading |
|---|---|
| Share of synthesis providers with robust screening | Control point health |
| Time from novel pathogen detection to sequenced alert | Surveillance defense |
| Countermeasure design-to-IND timelines | Defensive design half |
| Public funding for surge manufacturing | Whether the slow term is resourced |
| Lab-accident and near-miss disclosure regimes | Learning rate on physical risk |

---

**Related:** [Cybersecurity](cybersecurity.md) · [Medicine](../physical/medicine/) · [Science](../cognitive/science.md) · [Game 2](../../02-games/2-nations.md) · [Game 4](../../02-games/4-labor.md) · [Part V](../../05-probabilities/) · [State capacity](state-capacity.md)

**Next:** [State capacity](state-capacity.md)
