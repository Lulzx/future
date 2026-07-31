# Inference Economics - the two-year moat

← [Part I](README.md) · [Index](../README.md)

---

*Quantities current to mid-2026.*

Cost per token at fixed capability fell **~100–1000× in two years.** The stated range is conservative against the measured one: Epoch AI's price-trend series (2023–25 data) finds 9–900× *per year* depending on task and threshold, median ~50×/yr, with the fastest declines starting after January 2024.

This is the most consequential number in the entire analysis and the one people ignore. It is not a ceiling like the others in Part I - it is a floor collapsing.

## Jevons applies

Cheaper cognition means vastly more of it consumed, so **total spend rises even as unit price collapses.** This is why "inference costs are falling" and "AI capex is exploding" are both true and not in tension. It is also why unit-economics arguments about AI businesses tend to mislead in both directions.

| Observation | Naive read | Correct read |
|---|---|---|
| $/token ↓ | AI unprofitable | Volume explodes (Jevons) |
| Capex ↑ | Contradiction | Capacity for more inference + training |
| Margin pressure on wrappers | Models failed | Capability commoditized on schedule |

## The strategic implication

**Intelligence at any given capability level becomes free within ~24 months of arriving.**

Anything you build on "we have access to a smart model" has a two-year moat, maximum. Frontier access is a wasting asset that depreciates on a known schedule.

What this kills:

- Wrappers whose value is model access
- Products differentiated by capability rather than by data, distribution, or workflow lock-in
- Pricing power based on being early to a capability tier

What survives is anything holding an input that does *not* get cheaper - which is the whole subject of [Game 3](../02-games/3-firms.md).

### The two-year moat as a product strategy rule

Treat the moat as an engineering constraint on product design, not a market-timing tip. Any feature whose only differentiation is "we call a smarter model" must either (a) be rebuilt every generation as a cost center, or (b) be wrapped in a complement before the lag closes - proprietary workflow data, evaluation harnesses the buyer cannot port, distribution defaults, liability the vendor will actually carry. Products that fail this test show up in the data as high churn when a cheaper equivalent tier lands; products that pass show up as stickiness that survives the next open-weight release. [B5](../07-indicators/diffusion/economy.md) (outcome pricing) is the commercial form of the same test: vendors only accept outcome risk when they believe the complement stack, not the model, is doing the work.

## Three stacked mechanisms, three different exhaustion points

"~100–1000× in two years" is not one process, and its durability depends on which component you ask about. **Hardware** ($/FLOP plus serving-stack utilization) improves on a manufacturing cadence - steady, slow, unlikely to stop, unlikely to accelerate. **Distillation and small-model substitution** - compressing frontier behavior into cheap models - is the largest single contributor and the one with a visible limit: you cannot distill below the capability actually needed for the task, so it exhausts per-capability-tier even as it repeats for each new tier. **Competition** converts both into price: with several near-equivalent providers and open-weight alternatives now only ~3–6 months behind (Epoch AI, Jan–May 2026: ~4-month average lag, ~6 under a stricter comparison rule - down from the ~9–15 months this page previously carried), serving margins compress toward cost. Only the third mechanism is fragile - consolidation to 3–5 labs plus regulatory moats could restore pricing power without any technical change. So the precise form of the falsifier matters: *costs* almost certainly keep falling; whether *prices* follow is a market-structure question, and [Game 1](../02-games/1-labs.md) consolidation is the scenario where the two-year moat survives technically but dies commercially.

The distribution of the collapse is also uneven in a way the headline hides. Prices fall fastest exactly where models are substitutable - which, by the [master asymmetry](data.md), is the verifiable, benchmarkable work. Where output quality is hard to verify, buyers cannot compare providers, switching is risky, and price stays sticky. The floor collapses fastest under the tasks that were automated first: the same gradient, appearing a second time as a pricing fact.

### Consistency with the rest of Part I

| Input | Relation to inference floor |
|---|---|
| [Compute](compute.md) | Training $ can plateau while inference spend scales; revenue case can decouple from $100B runs |
| [Energy](energy.md) | Total watts still rise with Jevons; efficiency per token does not retire the campus |
| [Data](data.md) | Master asymmetry still orders *what* gets cheap; free inference on unverifiable tasks stays low-value |
| [Capital](capital.md) | Collapsing inference cost is the bull case for revenue without proportional training capex - softens correction if outcome pricing scales |

[Software](../03-domains/cognitive/software.md): seat→outcome pricing is the commercial face of "capability is free; attribution and liability are not." [B5](../07-indicators/diffusion/economy.md) tracks that shift.

## The corollary nobody plans for

If capability is free on a two-year lag, then the correct planning question is never "what can the best model do today." It is **"what will be free in 2028, and what will still be scarce then?"** Almost all product strategy currently answers the first question.

Scarce then (framework list): energy, interconnection, licenses, trusted data, distribution, liability capacity, physical presence, verified identity, senior judgment after the apprenticeship gap. → [Assets](../09-macro/assets.md), [notation](../00-overview/notation.md)

## Open weights and the leaky bucket

Inference cost collapse + distillation compresses the [Game 2](../02-games/2-nations.md) lag: open-weight tiers sit only ~3–6 months behind frontier (Epoch AI, 2026) partly because serving "good enough" is cheap - and the lag has shortened, not lengthened, since this corpus first carried the figure. That is commercial for application builders and a security parameter for [cyber](../03-domains/contested/cybersecurity.md) / [bio](../03-domains/contested/biosecurity.md).

## What would falsify the two-year moat

- **Inference costs stop falling** at fixed capability (architectural wall, energy floor, or deliberate restriction)
- **Capability jumps so large** that "fixed level" free is irrelevant - each cohort is a new regime ([Uncertainty 1](../06-uncertainties/recursive-self-improvement.md), still subject to three governors)
- **Regulation locks frontier behind non-price barriers** that keep a durable access moat for a few labs

**Prices can stick while costs fall** if the model layer consolidates - [Game 1](../02-games/1-labs.md) endgame. Score serving *prices* and *costs* separately; the two-year moat is a cost claim that only becomes a product-strategy claim when competition transmits it into price.

---

**Related:** [Game 3](../02-games/3-firms.md) · [Software](../03-domains/cognitive/software.md) · [Compute](compute.md) · [Capital](capital.md) · [Game 1](../02-games/1-labs.md) open-weight tier · [B5](../07-indicators/diffusion/economy.md)

**Next:** [Part II - The Games](../02-games/)
