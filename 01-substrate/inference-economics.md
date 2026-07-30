# Inference Economics - the two-year moat

← [Part I](README.md) · [Index](../README.md)

---

*Quantities current to mid-2026.*

Cost per token at fixed capability fell **~100–1000× in two years.**

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

### Consistency with the rest of Part I

| Input | Relation to inference floor |
|---|---|
| [Compute](compute.md) | Training $ can plateau while inference spend scales; revenue case can decouple from $100B runs |
| [Energy](energy.md) | Total watts still rise with Jevons; efficiency per token does not retire the campus |
| [Data](data.md) | Master asymmetry still orders *what* gets cheap; free inference on unverifiable tasks stays low-value |
| [Capital](capital.md) | Collapsing inference cost is the bull case for revenue without proportional training capex - softens correction if outcome pricing scales |

[Software](../03-domains/cognitive/software.md): seat→outcome pricing is the commercial face of "capability is free; attribution and liability are not." [B5](../07-indicators/diffusion.md) tracks that shift.

## The corollary nobody plans for

If capability is free on a two-year lag, then the correct planning question is never "what can the best model do today." It is **"what will be free in 2028, and what will still be scarce then?"** Almost all product strategy currently answers the first question.

Scarce then (framework list): energy, interconnection, licenses, trusted data, distribution, liability capacity, physical presence, verified identity, senior judgment after the apprenticeship gap. → [Assets](../09-macro/assets.md), [notation](../00-overview/notation.md)

## Open weights and the leaky bucket

Inference cost collapse + distillation compresses the [Game 2](../02-games/2-nations.md) lag: open-weight tiers sit ~9–15 months behind frontier partly because serving "good enough" is cheap. That is commercial for application builders and a security parameter for [cyber](../03-domains/contested/cybersecurity.md) / [bio](../03-domains/contested/biosecurity.md).

## What would falsify the two-year moat

- **Inference costs stop falling** at fixed capability (architectural wall, energy floor, or deliberate restriction)
- **Capability jumps so large** that "fixed level" free is irrelevant - each cohort is a new regime ([Uncertainty 1](../06-uncertainties/recursive-self-improvement.md), still subject to three governors)
- **Regulation locks frontier behind non-price barriers** that keep a durable access moat for a few labs

---

**Related:** [Game 3](../02-games/3-firms.md) · [Software](../03-domains/cognitive/software.md) · [Compute](compute.md) · [Capital](capital.md) · [Game 1](../02-games/1-labs.md) open-weight tier · [B5](../07-indicators/diffusion.md)

**Next:** [Part II - The Games](../02-games/)
