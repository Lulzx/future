# Thesis

← [Index](../README.md)

---

*Written 2026-07-30. Quantities reflect knowledge through mid-2026. Probabilities are subjective. Corpus maintained through autoresearch rounds - see [RESEARCH](../RESEARCH.md).*

This document is built from physical constraints upward, then the strategic games that sit on top of them, then domain by domain, then timelines and probabilities.

The construction order is itself a claim. Most AI forecasts start from capabilities - what models can do, extrapolated - and derive consequences. That order lets optimism or pessimism about the technology contaminate everything downstream, because capability estimates are the softest numbers in the whole exercise. Starting from the substrate inverts the dependency: interconnection queues, turbine order books, token counts, and capex guidance are observable and dated, and whatever capability story you tell must fit inside them. The games in [Part II](../02-games/) then constrain *behavior* given the substrate, before any domain is examined. By the time the document reaches predictions, most of the degrees of freedom have already been spent on things that can be checked.

## The argument in five steps

**1. Four inputs constrain everything: compute, energy, data, capital.** Each has a different scaling law and a different ceiling. Compute has been rising ~7–10×/yr in effective terms, but the dollar term breaks around 2029–30 at Apollo-program scale. Energy binds before capital does. High-quality data is exhausted. Inference is not a fifth ceiling - it is a **floor collapsing** (capability free on ~24-month lag). → [Part I](../01-substrate/)

**2. Data exhaustion forced the frontier onto verifiable-reward training, which creates the master asymmetry.** Capability now grows fastest where verification is cheap. AI becomes superhuman at things with a scoreboard and stays merely-good at things without one. This single fact explains most of the uneven progress across every domain below. → [Data](../01-substrate/data.md)

**3. Inference cost collapse means capability at any fixed level becomes free within ~24 months.** So no durable value accrues to *having* intelligence. → [Inference economics](../01-substrate/inference-economics.md)

**4. Therefore value concentrates in the inelastic complements** - energy, land with power, regulatory licenses, proprietary real-time data, distribution, trust and liability capacity, physical presence. Baumol's cost disease, inverted and weaponized. Most firms must adopt AI to survive and will not capture the surplus; consumers and the scarce complements will. → [Game 3](../02-games/3-firms.md)

**5. The binding constraints are institutional, not technical, from roughly 2028 onward.** Permitting, liability, licensure, organizational redesign, and human-capital formation all run slower than the technology. The sharpest harm is not unemployment but the destruction of the novice→expert pathway - and that compositional claim survives even when [demography](../09-macro/demography.md) makes *aggregate* displacement an upper bound. → [Game 4](../02-games/4-labor.md)

## How the steps interlock

The chain is not equally fragile at every link, and knowing which failures are local matters more than knowing the steps. Step 1 is the hardest to break - it is mostly physics and accounting, and even a capital-markets correction changes its timing rather than its shape. Step 2 is the load-bearing joint: if learned verification retires the master asymmetry ([Uncertainty 5](../06-uncertainties/learned-verification.md)), the domain ordering in [Part III](../03-domains/) reshuffles, though the substrate and macro chapters largely survive. Step 3 is empirically the best-attested; its failure would require inference costs to *stop* falling, which no current mechanism suggests. Step 4 inherits from 2 and 3 jointly, and has its own adversary in [complement erosion](../06-uncertainties/complement-erosion.md). Step 5 is the most conventional and the least original - institutional lag is the base-rate result for every prior general-purpose technology ([base rates](../08-method/base-rates/cycles.md)) - which is exactly why it carries the timelines. A reader scoring a miss should first ask *which step* it invalidates, then follow the [dependency index](dependencies.md); most misses will turn out to be local to a domain page, not fatal to a step.

## What this predicts

- Deflation in anything cognition-intensive; inflation in energy, land, healthcare, skilled trades. That divergence is the defining political-economy fact of the 2030s. → [Prices](../09-macro/prices.md)
- Consolidation to 3–5 frontier labs by 2029, with a fast-following open-weight tier (lag as authored ~9–15 months; measuring ~3–6 as of 2026 - see [Game 1](../02-games/1-labs.md) ground note).
- No binding international agreement before a salient accident; coordination is event-driven; finance/cyber more likely mechanisms than kinetic; **rules ≠ verification** (compute-governance trap). → [Game 2](../02-games/2-nations.md)
- A shift from generation-scarcity to verification-scarcity across information, credentialing, and media - plus a [welfare channel](../03-domains/cognitive/meaning.md) (identity, companionship) the macro stats miss.
- Robotics as the swing variable for whether growth rates actually change in the 2030s.
- Insurance and underwriting as the near-term deployment frontier, often ahead of legislation. → [Uncertainty 6](../06-uncertainties/correlated-risk.md)

## What would falsify it

**Parameter uncertainties (skewed, often toward faster/better):** recursive research acceleration (three governors: verification, physical, financial), sudden US permitting reform, institutional response to the apprenticeship gap.

**Load-bearing risks (can invalidate large branches):** Taiwanese fab continuity (~90% modelling assumption), learned verification defeating the master asymmetry, correlated-failure insurability as the real deployment ceiling, and [complement erosion](../06-uncertainties/complement-erosion.md) - the scarce-complement list having a shorter half-life than the distributional predictions assume.

→ [Part VI](../06-uncertainties/) · [Dependencies](dependencies.md) · [Part V](../05-probabilities/)

---

**Next:** [The compressed version](compressed.md) · [Part I - The Physical Substrate](../01-substrate/)
