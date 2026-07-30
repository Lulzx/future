# Rates and Returns - why success is self-limiting

← [Part IX](README.md) · [Index](../README.md)

---

Every capex projection in [Part I](../01-substrate/) implicitly holds financing costs fixed. That assumption does enormous work and is almost never stated, let alone defended.

**It is wrong in a specific and interesting direction: the better AI works, the more expensive it becomes to finance.**

## The mechanism

The real neutral rate - the rate consistent with full employment and stable prices - is set, over long horizons, by the balance of desired saving against desired investment. Productivity growth raises the return on capital, which raises desired investment, which raises the rate that clears the market.

So if AI delivers a genuine productivity step-up:

1. Returns on capital rise across the economy, not only in AI
2. Desired investment rises with them
3. The neutral rate rises
4. **Every long-duration asset gets discounted more harshly - including the AI infrastructure build itself**

This is not a paradox and it is not new. **It is how every genuine general-purpose technology has behaved.** Railway and electrification booms both ran through capital-market crises without the underlying technology failing, and in both cases rising rates were part of the mechanism rather than an unrelated shock.

## Three forces, pointing in different directions

The net effect is genuinely contested, which is why this section argues rather than asserts.

| Force | Direction on rates | Magnitude | Confidence |
|---|---|---|---|
| **Productivity step-up** | Up | Large if it lands at all | Conditional - see [Part V](../05-probabilities/README.md) row 2 |
| **Demographics** | Down | Large and highly predictable | High |
| **Capital-income concentration** | Down | Moderate | Moderate |
| **Fiscal deterioration** | Up | Moderate to large | Moderate - see [Fiscal](fiscal.md) |

**The demographic force is the one that has been winning for thirty years** and it does not stop: shrinking working-age populations across every advanced economy, with high savings and falling investment demand. That is the secular-stagnation story and it is well-evidenced.

**The concentration force is subtle and matters.** If [Game 3](../02-games/3-firms.md) is right that gains accrue to capital and to consumers rather than to labor, then income shifts toward high-savings-propensity holders. Higher aggregate saving pushes rates *down*, partially offsetting the productivity effect. **The distribution of the gains feeds back into the price of capital** - a link almost nothing in the AI-forecasting literature makes. → [Assets](assets.md)

> **Assessment:** a productivity step-up sufficient to raise real rates by more than ~100bp against the demographic tide is **~30%** likely by 2035 - between [Part V](../05-probabilities/) row 2's 20% by 2030 and 50% by 2040, since it is nearly the same claim wearing different clothes. Note what this implies: **the most likely world is one where AI works well enough to matter and rates stay low anyway**, because demographics dominate.

## The self-limiting loop, stated properly

Combine this with [Capital](../01-substrate/capital.md) and a feedback loop appears that no linear projection captures:

```
AI capex  →  productivity  →  higher returns on capital  →  higher rates
   ↑                                                            │
   └──────────  more expensive to finance the next round  ←──────┘
```

Two consequences worth stating separately:

- **Capex projections that extrapolate spend without adjusting the discount rate overstate the out-years.** The $100B training run in [Compute](../01-substrate/compute.md) is priced at today's cost of capital. If the technology works, that cost rises before the run happens.
- **The loop is stabilizing, not explosive.** This is a *negative* feedback: success dampens the rate of further investment. That argues against the fastest takeoff scenarios on purely financial grounds, independent of any technical constraint - and it is a mechanism the [RSI](../06-uncertainties/recursive-self-improvement.md) discussion does not consider.

**That is the most useful thing in this section.** The recursive-acceleration debate is conducted almost entirely in technical terms, and there is a financial governor on it that operates regardless of how the technical question resolves.

## Equity: the duration problem

Most of the AI trade's value sits in terminal-value assumptions - cash flows far in the future. Long-duration equity is the most rate-sensitive asset class there is.

That creates a genuinely awkward configuration: **the fundamental case improving and the discount rate rising are the same event.** Whether the trade works depends on which term moves more, and the market can be correct about the technology and wrong about the price for years.

This is the cleanest available explanation of how the [~40% correction](../01-substrate/compute.md) happens **without the technology disappointing at all.** Rate-driven multiple compression looks identical, from the inside, to a technology thesis failing - and the two will be confused constantly in commentary. → [Scoring](../08-method/scoring.md) on right-for-the-wrong-reason.

## What to watch

- **Real yields at the long end**, against productivity data. If real 10-year yields rise while TFP is flat, it's fiscal or term premium, not productivity - different story entirely.
- **The spread between AI-infrastructure debt and comparable-duration corporate credit.** Widening spreads are the earliest signal of the credit-event mechanism in [Capital](../01-substrate/capital.md).
- **Depreciation schedules and lease structures.** A shift toward leasing rather than owning accelerators is a bet on falling residual values - a revealed view about the rate and technology environment. → [A5](../07-indicators/substrate.md)

---

**Related:** [Capital](../01-substrate/capital.md) · [Compute](../01-substrate/compute.md) · [Assets](assets.md) · [Fiscal](fiscal.md) · [Uncertainty 1 - RSI](../06-uncertainties/recursive-self-improvement.md) on the financial governor

**Next:** [Prices and the two economies](prices.md)
