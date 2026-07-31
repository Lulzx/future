# Software Engineering

← [III.A - Cognitive](README.md) · [Part III](../README.md) · [Index](../../README.md)

---

Most-affected large profession. Not because coding disappears, but because **the unit of work changes** from writing code to specifying, reviewing, and integrating.

## The numbers that matter

Expect **2–4× throughput on greenfield** and **near-zero gain on legacy integration.** The ratio between those is where the real story is - it means the benefit is concentrated in new work and in organizations without accumulated context debt, which is very nearly the opposite of where most engineering labor currently sits.

Total developer employment probably **rises through 2030** (Jevons on software demand), while composition shifts hard toward senior/architectural and away from junior/implementation.

| Work type | AI leverage | Employment pressure |
|---|---|---|
| Greenfield features, boilerplate, tests | High | Junior implementation ↓ |
| Legacy integration, partial rewrites | Low–medium | Sticky; context is the moat |
| Architecture, incident judgment, multi-team design | Low (verification expensive) | Senior demand ↑ |
| Spec / review / eval harnesses | Medium–high | New hybrid roles |

## The bottleneck migrates to review

Amdahl's law applies to the team, not just the machine: if generation speeds up 5× and review does not, review becomes the schedule. This is already the observed shape in AI-heavy teams - pull requests queue at the senior engineers whose approval makes the code real, and the organization's effective throughput is the throughput of its trust, not of its typing. Three consequences follow. First, the economic premium moves to whatever makes verification cheap - test coverage, typed interfaces, deterministic builds, observability - so codebases *built to be checked* compound their advantage over codebases that must be understood. Second, the pressure to automate review itself is enormous and partially self-defeating: model-reviewed model code collapses the independence that made review a control ([Uncertainty 5](../../06-uncertainties/learned-verification.md) in miniature). Third, "senior demand ↑" in the table above is really *reviewer* demand, and reviewing is a skill trained by doing the work that juniors no longer do - the apprenticeship gap eating its own antidote.

The open-source commons shows the failure mode early and in public. Maintainers are a review bottleneck with no budget, and the flood arrived first as noise: the curl project publicly documented a wave of AI-generated bogus vulnerability reports through its bug bounty (2024, per maintainer Daniel Stenberg), each costing scarce expert hours to refute. Free generation plus expensive verification is a tax levied by the many on the few, and volunteer infrastructure pays it first. If the commons responds by closing - reputation-gated contribution, paid triage - the open-by-default era of software ends not by license change but by review economics.

### Junior employment as the leading edge of Game 4

Software is where [Game 4](../../02-games/4-labor.md) is measurable first, because the junior task set (boilerplate, tests, first-draft PRs) is exactly the high-leverage greenfield row in the table, and because posting data is liquid. The [B1](../../07-indicators/diffusion/labor.md) baseline already shows the leading edge; the software-specific claim is that *stabilization of junior software postings while other knowledge professions keep falling* would mean the inversion path in [Uncertainty 3](../../06-uncertainties/apprenticeship-gap.md) is live here first - dense AI feedback compressing the path to competence where verification is cheapest. Continued decline in junior software postings through 2029, even in a hiring recovery, is the commons-failure path at its purest.

**Review is the scarce seat.** Amdahl on the team means senior PR capacity sets throughput. Tools that flood generation without shrinking review time raise queue length, not shipped value - the open-source bogus-report tax scaled to every company that hires juniors as "AI amplifiers" without growing reviewer headcount.

## What it does to SaaS

Software's marginal cost falls toward zero, threatening the SaaS model - per-seat pricing, high margin, defended by switching cost.

If a bespoke internal tool costs $5k instead of $500k, **the long tail of vertical SaaS gets eaten from below.** The vendors that survive hold something other than the software: proprietary data, a compliance position, a network, or distribution. → [Game 3](../../02-games/3-firms.md)

### Seat → outcome (timeline consistency)

[2026–2028](../../04-timelines/2026-2028.md) and [B5](../../07-indicators/diffusion/economy.md): the commercial signature of agentic reliability is **pricing on outcomes, not seats**. Software is the first large market where that shift is visible.

| Pricing | Assumes | Breaks when |
|---|---|---|
| Per-seat | Human operator per license | Agents do the work; headcount ≠ value |
| Usage / tokens | Metered cognition | Race to zero on inference ([inference economics](../../01-substrate/inference-economics.md)) |
| Outcome / success fee | Attributable results + liability | Reliability and indemnity unclear |

Vendors that cannot reprice watch ARR per customer fall while usage rises. Buyers that accept outcome pricing reveal belief that unsupervised work is real - more honest than benchmarks.

## The apprenticeship problem is sharpest here

This domain is the leading indicator for [Game 4](../../02-games/4-labor.md) because the exposure is cleanest: AI is best at exactly the work that used to be how people learned. Boilerplate, first-pass implementation, test writing, and bug triage were never economically valuable in themselves - they were the tuition.

Removing them is efficient for every individual team and quietly catastrophic for the pipeline.

Aligned with [law](law.md) (same pyramid economics) and [education](education.md) (credentials + missing junior years). Mid-2026 data already shows junior software postings and entry-level tech hire shares collapsing - see Game 4 tables.

> **Discriminating test (shared with labor):** if junior eng hiring fails to recover when aggregate tech hiring does (~2027–28), substitution share was large. → [B1](../../07-indicators/diffusion/labor.md)

### Uncertainty 3 here first

[Uncertainty 3](../../06-uncertainties/apprenticeship-gap.md): AI as dense mentor could *shorten* novice→expert if feedback is grounded (tests, types, prod metrics). Software has the cheapest ground truth for that inversion - [science](science.md)-like verification on code. If the inversion fails here, it is unlikely to save law or consulting.

## Security and supply chain

[Cybersecurity](../contested/cybersecurity.md): model-written code at volume without review expands the vuln surface; autonomous fix loops help only if verification holds. SBOMs, signing, and least-privilege tools become inelastic complements to cheap generation.

## What to watch

| Signal | Reading |
|---|---|
| Entry-level eng posting share | Apprenticeship gap |
| Seat vs outcome revenue mix at major AI-devtool vendors | Agentic commercial threshold |
| Vertical SaaS churn / internal-tool build rates | Long-tail SaaS eaten |
| Time-to-merge / incident rates with AI-heavy PRs | Throughput vs quality |
| Intern / new-grad conversion rates at large tech | Pipeline health |

## Failure modes

- **If legacy integration unlocks** (better repo-scale agents), the 2–4× only-on-greenfield claim was too pessimistic and employment composition shifts faster.
- **If junior hiring recovers with the cycle**, Game 4's software canary was cyclical noise.
- **If outcome pricing stays niche**, agentic reliability was overstated for production; seat SaaS lasts longer.

**Context debt is the moat that generation cannot buy.** Greenfield throughput without integration into decades of partial systems is demo economics. Score production PRs merged into brownfield repos and incident rates after agent merges - not greenfield benchmark suites alone.

---

**Related:** [Game 4](../../02-games/4-labor.md) · [Game 3](../../02-games/3-firms.md) · [Inference economics](../../01-substrate/inference-economics.md) · [Law](law.md) · [Cybersecurity](../contested/cybersecurity.md) · [2026–2028](../../04-timelines/2026-2028.md) · [B1](../../07-indicators/diffusion/labor.md) · [B5](../../07-indicators/diffusion/economy.md)

**Next:** [Law](law.md)
