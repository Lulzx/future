# The Global South - the technology is free and the complements are not

← [Geopolitics](README.md) · [III.C - Contested](../README.md) · [Index](../../../README.md)

---

This is the section where the document's framework produces its most optimistic conclusion and its most pessimistic one simultaneously, and both follow from the same sentence.

**Capability at any given level becomes free within about 24 months** ([Inference economics](../../../01-substrate/inference-economics.md)). That is a genuinely radical fact for countries that have never been able to afford expertise. It is also nearly useless without the complements, and the complements are what these countries lack.

## The optimistic case, which is real

The binding constraint on human welfare in low-income countries has often been **access to expertise**, not access to knowledge. There are too few doctors, too few teachers, too few agronomists, too few lawyers, and no financially plausible path to training enough of them within a generation.

That constraint is the one AI most directly relieves:

- **Medical triage and diagnostic support** where the alternative is not a better doctor but no doctor. → [Medicine](../../physical/medicine/)
- **Tutoring at the [2-sigma](../../cognitive/education.md) effect size** where the alternative is a class of eighty with an undertrained teacher.
- **Agronomic advice** in local languages where extension services never reached. → [Agriculture](../../physical/agriculture.md)
- **Legal and administrative navigation** where the alternative is exclusion from formal systems entirely.

**The counterfactual is what makes this different from the rich-world case.** In a high-income country, AI advice substitutes for a professional and must clear that professional's standard to be useful - which is why [liability and licensure](../../cognitive/insurance.md) dominate the analysis. Where there is no professional, it substitutes for *nothing*, and the bar is very much lower.

This is, on this document's analysis, **the single largest potential welfare gain anywhere in it.** It deserves to be stated plainly, because the rest of this page is about why it is slow.

## The complements it needs, none of which are free

| Complement | Status | Why it binds |
|---|---|---|
| **Connectivity** | Improving, uneven, expensive per GB | Inference needs a round trip, or a device that can run local |
| **Electricity** | ~600M people in sub-Saharan Africa without reliable access | Charging a phone is the actual constraint |
| **Devices** | Improving, but capability is tiered by price | The best free model is unreachable on the cheapest hardware |
| **Language coverage** | Weakest exactly where need is highest | Low-resource languages have little training data and no commercial pull |
| **Credit and land tenure** | Structural, unchanged | Advice that requires capital to act on is not actionable |
| **Institutional trust** | Variable | Advice is only followed if believed |

**Every row is a development problem with a fifty-year literature, and none of them are accelerated by better models.** This is the pattern the whole document keeps producing, and it is sharpest here: [the technology arrives free and the complements do not](../../physical/agriculture.md).

The language row deserves particular attention. It is the one complement that AI could plausibly fix *itself* - synthetic data, transfer from high-resource languages, and community data collection are all viable - and it is undersupplied for the standard reason: **the people who need it most represent the least commercial value.** A public-good problem with private cost, exactly like the others in [Part II](../../../02-games/README.md), and one of the cheapest high-leverage interventions in the entire document.

## The pessimistic case, which is also real

Two mechanisms, running in the opposite direction to everything above.

**1. The ladder is gone.** [India](india.md) covers the mechanism at scale. Everywhere else it applies too: the export-services rung was the accessible entry point into the global economy for countries with young English-speaking populations and no manufacturing base. **It is being removed before most of them got onto it.** The Philippines, Kenya, Ghana, Bangladesh, and much of the Caribbean built strategies around it.

**2. Dependency at a new layer.** If a country's health, education, and agricultural advisory systems run on models built, hosted, and controlled elsewhere, that is a dependency of a kind that has no precedent. It is not like importing machinery, which you own once bought. **It is closer to importing the electricity grid and the language simultaneously**, and it can be withdrawn, repriced, or altered by parties with no accountability to the population depending on it.

Open weights partly resolve this and are therefore more strategically important for low-income countries than for anyone else - a point usually made in terms of safety, where the argument is contested, rather than in terms of sovereignty, where it is much stronger. → [Game 1](../../../02-games/1-labs.md)

## The household channel, which is where it lands first

National accounts are the wrong resolution for the pessimistic case. The export-services rung mattered to these economies less as a share of GDP than as a **source of hard-currency household income concentrated in the exact families that were climbing**, and it reaches far past the workers employed in it. Remittances from diaspora labor in tradable cognitive work, urban wages that support extended rural households, and the schooling decisions those wages fund are all downstream of the same channel. A sector that flattens its hiring therefore transmits into household consumption, into secondary and tertiary enrollment choices, and into the informal credit that is underwritten against expected future wages - none of which appear in a growth statistic for several years.

This matters for what an early warning looks like. The measurable leading signals are enrollment shifts away from IT and English-language qualifications, entry-level hiring in the outsourcing centers, and remittance volumes from countries whose diaspora works in exposed occupations. Waiting for GDP to register it means waiting past the point at which any policy response could still be preventive. *Failure mode:* remittance flows are dominated in most corridors by physical and care work rather than cognitive work, and those occupations are among the least exposed in this entire document, so the aggregate remittance series may barely move even while the cognitive-work corridors compress sharply. The signal has to be read by corridor and occupation, not in the total.

## Sovereignty at the model layer

The dependency argument above has an available answer beyond open weights, and it is being pursued: regional hosting, national compute, and locally fine-tuned models on top of foreign base weights. It is worth being clear about how much of the dependency each of those actually removes. Hosting locally removes the withdrawal risk and satisfies most data-residency rules, which is the concern regulators actually raise, but it does not remove the dependency on whoever produced the base weights and can decline to produce the next generation. Fine-tuning locally captures the language and context work that no foreign lab has commercial reason to do, which is genuine and is the highest-value layer available at low cost. Training a competitive base model domestically removes the dependency and is out of reach for almost every country in this group on power and capital grounds alone, whatever the announcements say.

**So the realistic sovereign position is: foreign base weights, domestic adaptation, domestic hosting, domestic data.** That is a meaningfully better position than API dependency and a meaningfully worse one than independence, and it is the configuration to expect. Its stability depends entirely on the open-weight tier continuing to exist, which is a decision made by a handful of foreign labs and states for reasons - see [the bipolar page](bipolar.md) on why the follower releases - that have nothing to do with the countries relying on it. **A development strategy resting on the continued strategic convenience of someone else's competitive position is not sovereignty; it is a favorable lease.**

## What would actually help

Ordered by leverage per dollar, and notable for how little any of it is about AI:

1. **Electricity and connectivity.** The unglamorous, expensive, decisive complements. Every welfare gain above is gated on them.
2. **Low-resource language capability**, funded as a public good since the market will not supply it.
3. **Locally-runnable models.** On-device capability removes the connectivity, cost, and dependency constraints at once, and is the single most valuable technical direction for this use case. The efficiency trend in [Part I](../../../01-substrate/) delivers this for free over time, which is the strongest reason for optimism here.
4. **Regulatory clarity on liability for advice given without a professional**, since the current default - apply rich-world professional standards - blocks the highest-value use cases in exactly the settings where the counterfactual is nothing at all.

> **Assessment:** meaningful welfare gains in health, education, and agriculture across low-income countries by 2035 are **~55%** likely - high, because the counterfactual is weak and the technology is free. Meaningful *growth* gains are **~25%** likely, because growth requires the complements and the ladder, and one of those is being removed.

**Welfare and growth come apart here, and most analysis conflates them.** People living better while their country's development strategy fails is an entirely coherent outcome, and on this framework it is the most likely one.

### Open-weight lag as development policy

A shorter open-weight lag (~3–6 months measured) is *good* for welfare applications on this page - cheaper, sooner local adaptation - and *bad* for any strategy that hoped frontier export controls would create a protected market for domestic base models. Development ministries that plan as if weights stay scarce for years are planning against the measured lag. The realistic program is the "favorable lease" above, hedged by on-device efficiency and power/connectivity, not by waiting for a national foundation model that never pencils.

**Electricity and connectivity still gate the free tools.** A free model behind a bad grid is a press release. Score welfare claims against rural electrification and device penetration before model-leaderboard envy.

---

**Related:** [India](india.md) · [Inference economics](../../../01-substrate/inference-economics.md) · [Education](../../cognitive/education.md) · [Medicine](../../physical/medicine/) · [Agriculture](../../physical/agriculture.md) · [Game 1 - Labs](../../../02-games/1-labs.md) on open weights

**Next:** [Warfare](../warfare.md)
