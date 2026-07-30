# Compute

← [Part I](README.md) · [Index](../README.md)

---

*Quantities current to mid-2026.*

Frontier training compute grew ~4–5× per year for roughly fifteen years (Epoch AI, 2010–24 series; ~4.4×/yr since 2010). That decomposes into:

- ~1.35×/yr in hardware performance per dollar
- ~2.5–3×/yr in dollars spent
- ~3×/yr in algorithmic efficiency (fewer FLOPs for equal capability)

Multiply and you get "effective compute" rising ~7–10×/yr - the real engine behind capability jumps that feel discontinuous.

## The dollar term is the one that breaks

Largest training runs went ~$10M (2020) → ~$100M (2023) → ~$1B (2025). The ladder matches Epoch AI's cost series (~2.4×/yr growth since 2016; Grok 4 compute ~$0.5B, Epoch, Sep 2025). Extrapolate: ~$10B around 2027–28, ~$100B around 2029–30.

A $100B run is ~0.33% of US GDP - Apollo program scale, spent on a single artifact that depreciates in 18 months. You can do that once as a national project. You cannot do it annually as a business unless revenue justifies it.

## The central financial question of the decade

**Does AI revenue reach roughly $400–700B/yr by 2030?**

At ~$60B in 2025, that requires sustained 45–55% CAGR. Enterprise software has never done that at scale. Cloud did roughly that from a smaller base.

> **Estimate:** ~60% likely it clears the bar. ~40% we get a 2027–2029 capital markets correction that doesn't kill the technology but resets the timeline by 2–4 years and kills half the labs. → [Part V](../05-probabilities/) row 6 (~45% by 2030 after r8 re-score - financing-mix risk)

## Two caveats that cut against the pessimistic read

Both decouple revenue from training-run cost:

- **Inference and application-layer spend can scale faster than frontier training spend** once agents are reliable enough to sell on outcomes rather than seats. The revenue base is not gated on the $100B run; the $100B run is gated on the revenue base. These can decouple for several years. → [Inference economics](inference-economics.md), [B5](../07-indicators/diffusion/economy.md)
- **Algorithmic efficiency and test-time compute stretch the effective-compute curve without proportional dollar growth.** If reasoning-at-inference substitutes for parameters-at-training, the capex extrapolation above overstates the required spend, possibly by an order of magnitude. → [A1](../07-indicators/substrate.md) slow trigger

A correction remains plausible, but its likely form is *consolidation* - culling secondary labs and forcing mergers - rather than a halt to capability progress. **The technology does not un-invent itself in a drawdown; the cap table changes.** → [Capital](capital.md) (credit-event form ~65% if correction lands), [Game 1](../02-games/1-labs.md)

## The softest term in the decomposition

Of the three multiplicands, the ~3×/yr algorithmic-efficiency term deserves the least confidence, and it is doing the most work. It is measured by asking how many FLOPs a newer method needs to match an older benchmark score - which makes it hostage to the benchmarks. The published estimate itself carries the warning: Epoch AI (Ho et al. 2024) puts the halving time of compute-per-capability at ~8 months with a 95% interval of 5 to 14 months, an uncertainty band wide enough to contain both the optimistic and pessimistic readings of this page. Where benchmarks saturate or leak into training data, "equal capability" becomes unmeasurable, and the efficiency estimate inherits that fog. The term is also an *average over a moving frontier*: efficiency gains historically concentrate in whatever the field is optimizing this year, so past 3×/yr on next-token prediction does not automatically carry over to long-horizon agentic tasks, where the optimization pressure only arrived around 2025. If the true forward-looking term is 1.5× rather than 3×, effective compute growth roughly halves and every capability-timing estimate downstream slips by years without any visible change in spending. There is no clean indicator for this - [A1](../07-indicators/substrate.md) catches the dollar term, not the efficiency term - so this page flags it as its own least-verifiable input.

Test-time compute cuts the other way and changes the *shape* of the risk. To the extent reasoning-at-inference substitutes for parameters-at-training, capex migrates from a few concentrated training runs toward distributed serving fleets - spending that scales with revenue rather than ahead of it. That is a financially safer structure (failure arrives as margin compression, not a stranded artifact), and its cost falls on the collapsing floor of [inference economics](inference-economics.md) rather than the rising wall of this page. The 2029–30 "wall" is therefore best read as the break point of one financing pattern, not of capability progress.

## What actually binds first

| Constraint | When | Page |
|---|---|---|
| Energy / interconnect | ~2026 onward in US | [Energy](energy.md) |
| Capital verdict | 2027–29 | [Capital](capital.md) |
| Training $ extrapolation | 2029–30 if still linear | this page |
| Taiwan leading-edge capacity | always load-bearing | [A6](../07-indicators/substrate.md), [Uncertainty 4](../06-uncertainties/taiwan.md) |

By 2028 the US rate-limiter is closer to permits than to chips - export controls address China's bottleneck, not America's. → [Bipolar](../03-domains/contested/geopolitics/bipolar.md)

## RSI and the three governors

If [Uncertainty 1](../06-uncertainties/recursive-self-improvement.md) closes the research loop, efficiency substitutes for dollars and this page's wall softens. Still gated by verification (of research quality), physical fabs/power, and the [financial governor](../09-macro/rates.md) (success raises hurdle rates). → [B9](../07-indicators/diffusion/capability.md)

## What to watch

| Signal | Indicator |
|---|---|
| Frontier run cost | [A1](../07-indicators/substrate.md) |
| Revenue vs capex | [A2](../07-indicators/substrate.md) |
| Financing mix | [A3](../07-indicators/substrate.md) |
| Non-TW advanced wafer share | [A6](../07-indicators/substrate.md) |

---

**Related:** [Energy](energy.md) · [Capital](capital.md) · [Inference economics](inference-economics.md) · [Game 1](../02-games/1-labs.md) · [2026–2028](../04-timelines/2026-2028.md) · [Part V](../05-probabilities/)

**Next:** [Energy](energy.md)
