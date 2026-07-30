# Part VII — The Indicator Dashboard

← [Index](../README.md) · [Part VI](../06-uncertainties/)

---

*Baseline readings as of mid-2026.*

A forecast that cannot be checked before its horizon is not a forecast. This part converts the claims in Parts I–VI into **observables with thresholds** — things that can be read off the world on a quarterly cadence, each attached to the specific claim it would confirm or break.

The discipline: every indicator here names a **trigger value**, and every trigger names **what to revise**. An indicator that moves without changing anything you believe was decoration.

## The three families

| | Family | Answers | Cadence |
|---|---|---|---|
| A | [Substrate](substrate.md) | Are the physical and financial ceilings binding on schedule? | Quarterly |
| B | [Diffusion](diffusion.md) | Is the technology actually reaching into the economy? | Quarterly to annual |
| C | [Governance](governance.md) | Which regulatory architecture are we going to get, and when? | Event-driven |

## The five that matter most

If only five things can be tracked, track these. Each is the leading edge of a different load-bearing claim.

| Indicator | Baseline (mid-2026) | Watch for | Breaks |
|---|---|---|---|
| **Entry-level : senior posting ratio**, knowledge professions | Depressed; entry-level ~7% of large-tech hires | Failure to recover when aggregate white-collar hiring does | [Game 4](../02-games/4-labor.md) — settles the substitution-vs-cyclical split |
| **Internal research cycle time** per validated experiment at frontier labs | Not disclosed; infer from release cadence and paper throughput | Sustained >2× compression *and* physical/financial governors not binding | [Uncertainty 1](../06-uncertainties/recursive-self-improvement.md) — the RSI loop closing |
| **AI revenue run-rate vs. capex** | ~$60B (2025) revenue vs. ~$650B 2026 capex guide | Revenue CAGR falling below ~40% for two consecutive years | [Compute](../01-substrate/compute.md) and [Capital](../01-substrate/capital.md) — the correction |
| **Teleoperation-to-autonomy ratio** in deployed robots | Overwhelmingly teleoperated or scripted | Autonomy share crossing 50% on unstructured tasks | [Robotics](../03-domains/physical/robotics/) — the 2030s swing variable |
| **Grid interconnection queue length** | 5–7 yrs; ~410GW CAISO, ~380GW MISO | Any market halving its typical wait | [Energy](../01-substrate/energy.md), [Uncertainty 2](../06-uncertainties/power-permitting.md) |

### Also on the short list (rounds 5–8)

| Indicator | Family | Breaks |
|---|---|---|
| **AI liability as published insurance line** + reinsurer capacity | [C7](governance.md) | [Uncertainty 6](../06-uncertainties/correlated-risk.md); deployment frontier |
| **Leading-edge wafer share outside Taiwan** | [A6](substrate.md) | [Uncertainty 4](../06-uncertainties/taiwan.md) |
| **Cognitive vs physical services inflation gap** | [B7](diffusion.md) | [Prices](../09-macro/prices.md) two-economy claim |
| **Capability gap: verifiable vs unverifiable domains** | [B8](diffusion.md) | [Uncertainty 5](../06-uncertainties/learned-verification.md) |
| **Labor share of tax revenue** | [B10](diffusion.md) | [Fiscal](../09-macro/fiscal.md) squeeze |
| **Companion use × social contact; junior identity** | [B11](diffusion.md) | [Meaning](../03-domains/cognitive/meaning.md) welfare channel |
| **Capture-time provenance at scale** | [C8](governance.md) | [Game 5](../02-games/5-information.md) / [media](../03-domains/cognitive/media.md) enclosure vs public verification |

## How to read a dashboard without fooling yourself

Four failure modes, all of which this document is exposed to:

1. **Confirmation drift.** An indicator chosen after the fact to support a held view tests nothing. Every threshold here was set before the reading was taken; when one is revised, the revision goes in the log, not silently into the table.
2. **Measurement capture.** Once an indicator becomes salient, the thing being measured starts being managed. Benchmark scores went this way already. Prefer indicators that are expensive to fake — capital flows, physical deployments, queue positions — over self-reported ones.
3. **The perception gap.** The METR result in [Game 4](../02-games/4-labor.md) means self-reported productivity is unreliable *in a known direction*. Weight instrumented and revealed-preference measures far above surveys.
4. **Absence of movement is information.** The most common real outcome is that an indicator sits still for three years. That is a result, and it usually favors the institutional-friction case over both the acceleration and the collapse case.

## Scoring cadence

- **Quarterly** — read families A and B, update baselines, note any threshold crossed.
- **Annually** — re-score every probability in [Part V](../05-probabilities/README.md) against the dashboard and record the delta. Probabilities that never move are not being updated; they are being defended.
- **On event** — any [salient incident](../02-games/2-nations.md) triggers a full re-read of family C within the 18-month window when the architecture gets written.

---

**Next:** [A — Substrate indicators](substrate.md) · [Protocol](../RESEARCH.md)
