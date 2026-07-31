# Part V - Subjective Probabilities

← [Index](../README.md) · [Part IV](../04-timelines/)

---

Stated plainly, so they can be scored later. These are subjective estimates, not model outputs.

*Last re-score with a move: round 26 (2026-07-30), triggered by the r25 grounded contradiction. Prior full re-score: round 8. Commentary / hold passes (no number moves): rounds 12, 18, **27–30** (depth and Ground without new scoreable evidence) - [ledger](ledger.md). Per-row reasoning: [reasoning](reasoning.md). Probabilities stated elsewhere in the corpus: [register](register.md).*

| # | Claim | By 2030 | By 2040 | Δ since r0 |
|---|---|---|---|---|
| 1 | AI systems autonomously do most of a competent knowledge worker's day-to-day tasks | **50%** | **80%** | 2030 +5 |
| 2 | Measured TFP growth in the US exceeds 2%/yr sustained | **20%** | **50%** | 2030 −5; 2040 −5 |
| 3 | A major AI-attributed catastrophe (>1,000 deaths or >$100B) | **20%** | **45%** | - |
| 4 | Binding international agreement with real verification | **7%** | **28%** | 2030 −3; 2040 −7 |
| 5 | Humanoid robots at >1M units/yr deployed | **12%** | **55%** | 2030 −3; 2040 −5 |
| 6 | A serious capital-markets AI correction (>40% sector drawdown) | **45%** | **65%** | 2030 +5 |
| 7 | Existential-scale loss of human control | **1–3%** | **3–8%** | - |

Unchanged cells are as informative as moved ones: the re-score found no material new evidence, and that is logged in the [ledger](ledger.md) rather than left implicit.

## The ordering is the point

**The loss-of-control row is not the operative risk in this window. The incident row is.**

A serious AI-attributed event - cyber-physical, biological near-miss, or a large market dislocation - is roughly **an order of magnitude more likely by 2030** than full loss of control. And it is the event that determines the regulatory architecture everything else operates under for the following decade.

Planning that treats the tail risk as the main risk gets the sequencing wrong. The tail risk is real and worth work; but the architecture that will govern the tail risk gets written in response to the incident, which means the incident is upstream of everything - including of how well-prepared anyone is for the tail.

## Reading the table against the rest

- **Row 1** tracks [the agentic transition](../04-timelines/2026-2028.md) - heavily qualified by [verification cost](../01-substrate/data.md); "most tasks" arrives much earlier in verifiable domains. Nudged up on 2030: the seat→outcome pricing shift and mid-2026 junior-hiring data moved earlier than round 0 implied.
- **Row 2** is the [J-curve](../04-timelines/2028-2032.md) resolving. Nudged down: [prices](../09-macro/prices.md) argues measured TFP systematically understates welfare gains, so *clearing a measured 2% bar* is harder than the underlying productivity story; organizational redesign remains slow.
- **Row 3** is the forcing event in [Game 2](../02-games/2-nations.md). Mechanism order refined r11–12: finance and **correlated cyber/insurance** most likely; [biosecurity](../03-domains/contested/biosecurity.md) middle with worst tail; [warfare](../03-domains/contested/warfare.md) least recoverable. Numbers held - better mechanism detail, not a new base rate.
- **Row 4** is low precisely *because* row 3 is a precondition - and lower still after the compute-governance trap and the refined claim that incidents produce *rules* more reliably than *verifiability*. Held on numbers; commentary only.
- **Row 5** is the swing variable for [2032–2040](../04-timelines/2032-2040.md). Nudged down: four-file robotics decomposition (data, cost curves, supply chain, form factor) made the unstructured path look harder without changing the structured-environment lead.
- **Row 6** is the [capex test](../01-substrate/compute.md). Nudged up on 2030: [capital](../01-substrate/capital.md) financing-mix migration (cash → private credit/SPV) raises the odds that a demand disappointment becomes a *financial* event, not just a spending pause.
- **Row 7** held. [Uncertainty 1](../06-uncertainties/recursive-self-improvement.md)'s three governors argue fast takeoff is over-weighted, which bounds the upper tail without moving the point estimate enough to respecify the range.

## The rows are correlated, and the correlations carry information

The table reads as seven independent estimates; it is not. Row 6 and row 1 are linked through the same underlying variable - if agentic reliability disappoints, autonomy fails to arrive *and* the revenue miss triggers the correction, so the bad worlds cluster. Row 3 is close to a precondition for row 4, which is why row 4 cannot be read as an independent judgment about diplomacy. Row 5 and row 2 share the physical-diffusion driver: the worlds where humanoids scale are heavily overlapping with the worlds where measured TFP clears its bar. And row 7's upper tail lives almost entirely inside the worlds where [Uncertainty 1](../06-uncertainties/recursive-self-improvement.md) breaks the timeline structure - it is not spread evenly across scenarios.

The practical consequence: anyone using these numbers to price a portfolio of positions, or to compute joint probabilities by multiplication, will get the tails wrong in a known direction - the joint extremes (everything goes right, everything goes wrong) are more likely than independence implies. The corpus states marginals because marginals are scoreable; the correlation structure is stated here in words because a full joint distribution would be false precision on top of subjective inputs. Named joint worlds (best, base, worst, Taiwan break, incident-dominated, RSI, and the rest) live in [scenarios](../04-timelines/scenarios.md) - verbal joints, not a second probability table. Failure mode: the claimed correlations are themselves subjective and unscoreable until multiple rows resolve, which will take until the 2030s; treat them as the author's model of the world, one level less trustworthy than the marginals.

## What this table is not

It is not a research output, a market price, or an ensemble - it is one analyst's committed numbers, published so that being wrong is detectable. That has two use implications. First, the *deltas* and their written reasons ([ledger](ledger.md)) carry more information than the levels: a reader who disagrees with 50% on row 1 learns little from the disagreement, but a reader who sees the number move on evidence they consider irrelevant has found a real dispute about mechanism. Second, the table deliberately excludes claims the corpus argues but cannot operationalize - "value accrues to complements" has no row because no resolvable threshold survived drafting, and the honest response to an unscoreable claim is to leave it in the prose, not to launder it through a fake number. The distributed [register](register.md) exists for the middle category: claims sharp enough to score but too local for this table.

## Assumptions the table rests on

Two probabilities live outside these rows because they are *inputs* rather than outcomes:

| Assumption | Stated | Source |
|---|---|---|
| No major disruption to Taiwanese leading-edge output through 2032 | **~90%** | [Bipolar](../03-domains/contested/geopolitics/bipolar.md), [Uncertainty 4](../06-uncertainties/taiwan.md) |
| Master asymmetry (verification cost) continues to order domains | Implicit base case | [Data](../01-substrate/data.md), [Uncertainty 5](../06-uncertainties/learned-verification.md) |

If either fails, re-score the whole table; do not patch individual rows.

---

**Sections:** [Per-row reasoning and deltas](reasoning.md) · [Scoring ledger](ledger.md) · [Distributed predictions register](register.md)

**Next:** [Where this is most likely wrong](../06-uncertainties/)
