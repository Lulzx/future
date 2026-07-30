# Per-row reasoning - what moves each probability

← [Part V](README.md) · [Index](../README.md)

---

Each row: the claim restated, what evidence would move it, what rounds 1–7 actually deposited, and the delta taken in round 8. This page is the audit trail for the table; the [ledger](ledger.md) is the compressed history.

## Row 1 - Autonomous day-to-day knowledge work

**Claim:** AI systems autonomously do most of a competent knowledge worker's day-to-day tasks.

| | By 2030 | By 2040 |
|---|---|---|
| Round 0 | 45% | 80% |
| Round 8 | **50%** | **80%** |

**What it means.** Not "can demo the task" - *does* the task as the default path in production, without a human in the loop for the majority of a competent worker's actual day. Verification-cheap domains (software, support, parts of finance) count earlier; open-ended professional judgment counts later.

**Evidence that would move it up:** seat→outcome pricing becoming the enterprise default; junior:senior posting ratios failing to recover with the cycle ([B1](../07-indicators/diffusion/labor.md)); measured task-hour substitution approaching the [Game 4](../02-games/4-labor.md) band.

**Evidence that would move it down:** METR-style negative productivity results replicating at higher capability; insurance exclusions blocking autonomous deployment in the domains that looked easy ([insurance](../03-domains/cognitive/insurance.md)); organizational redesign remaining the binder through 2030.

**Round 8 rationale.** Mid-2026 junior-hiring data and the commercial shift toward outcome pricing moved earlier than round 0 expected. Demography does not help this row (it is about task substitution, not aggregate employment). +5 on 2030; 2040 unchanged - the long-run ceiling was never the dispute.

## Row 2 - Measured US TFP >2%/yr sustained

**Claim:** Measured total factor productivity growth in the US exceeds 2%/yr on a sustained basis.

| | By 2030 | By 2040 |
|---|---|---|
| Round 0 | 25% | 55% |
| Round 8 | **20%** | **50%** |

**What it means.** *Measured* is doing real work. The [prices](../09-macro/prices.md) page argues quality-adjusted deflation and unpriced surplus systematically understate welfare-relevant productivity. Clearing an official 2% bar is therefore harder than "AI is working."

**Evidence up:** labor-productivity prints accelerating in AI-exposed sectors; J-curve language entering mainstream macro commentary with numbers behind it.

**Evidence down:** continued flat TFP despite visible deployment; central banks and statistical agencies not revising hedonic treatment of cognitive services.

**Round 8 rationale.** Round 5's macro channel and the measurement argument are new material that round 0 did not have. Organizational lag still binds for 2030. −5 / −5. Note: this is *not* a claim that AI fails - it is a claim that the *statistic* is a high bar.

## Row 3 - Major AI-attributed catastrophe

**Claim:** An event with >1,000 deaths or >$100B damage, attributed primarily to an AI system or AI-enabled process.

| | By 2030 | By 2040 |
|---|---|---|
| Round 0 | 20% | 45% |
| Round 8 | **20%** | **45%** |

**Mechanisms, ordered by likelihood:** financial / market dislocation with AI in the causal chain; correlated cyber failure; biosecurity near-miss or worse; kinetic/warfare. [Game 2](../02-games/2-nations.md) needs a *salient* incident for the regulatory story; this row is the severe subset.

**Evidence that would move it up:** autonomy deployed in high-severity domains ahead of the insurance frontier (uninsured deployment is the leading indicator of an uncontrolled one); correlated near-misses - several insureds failing the same way in one window - since correlation is what converts an incident into a catastrophe-scale one. **Down:** the insurance exclusions holding through 2030, which would mean the severity ceiling is being enforced by underwriters exactly as [Uncertainty 6](../06-uncertainties/correlated-risk.md) hopes.

**Round 8 rationale.** Insurance correlation analysis ([insurance](../03-domains/cognitive/insurance.md)) and biosecurity/cyber domain pages add mechanism detail without a clear directional shift in severity probability. Held. A "salient but sub-threshold" incident remains more likely than this row - and is enough for the Game 2 architecture claim.

## Row 4 - Binding international agreement with real verification

**Claim:** A multilateral agreement that constrains frontier training or deployment and includes a verification mechanism that would detect material cheating.

| | By 2030 | By 2040 |
|---|---|---|
| Round 0 | 10% | 35% |
| Round 8 | 8% | 30% |
| Round 26 | **7%** | **28%** |

**Why it was already low.** Row 3 is nearly a precondition (event-driven coordination). Compute governance is the only technically plausible lever and degrades with efficiency.

**Evidence that would move it up:** a compute-accounting or attestation standard actually deployed bilaterally, even at small scale, since the row's pessimism rests on the verification object being spent, not on unwillingness to sign paper; a sub-threshold incident with clearly cross-border harm. **Down:** further rounds of export-control escalation, each of which spends more of the future verification mechanism on present competition.

**Round 8 rationale.** [Bipolar](../03-domains/contested/geopolitics/bipolar.md) named the trap explicitly: the export-control lever and the future verification mechanism are the same object; competitive use is a decision to abandon verification later, being made implicitly. That is new structural reason for pessimism, not just "coordination is hard." −2 / −5.

**Round 26 rationale.** The r25 Ground pass measured the open-weight lag at ~3–6 months (Epoch AI, Jan–May 2026) against the ~9–15 the corpus carried at authoring. This row is where that lands hardest: an agreement constraining frontier training verifies a shrinking share of deployed capability when near-frontier weights circulate a quarter behind, so the verification object is not only being spent by export controls (the r8 argument), it is depreciating on its own. The move is small (−1 / −2) because the row was already priced for pessimism and one measured series is one series; the direction, not the magnitude, is the information.

## Row 5 - Humanoids >1M units/yr deployed

**Claim:** Humanoid robots deployed (not merely produced) at a rate exceeding one million units per year.

| | By 2030 | By 2040 |
|---|---|---|
| Round 0 | 15% | 60% |
| Round 8 | **12%** | **55%** |

**Evidence that would move it up:** teleoperation-to-autonomy ratios falling on *unstructured* tasks (the one number demos cannot fake); actuator and reduction-gear costs breaking their curve, since [supply chain](../03-domains/physical/robotics/supply-chain.md) binds before model quality does. **Down:** structured-environment deployments stalling on delivered $/hour despite working autonomy - that would mean even the easy branch of the fork mispriced integration and maintenance, and the humanoid path inherits the error twice over.

**Round 8 rationale.** Round 4's four-file split made the constraints separable and each harder to hand-wave: no internet of manipulation; delivered $/hour not unit price; supply chain (magnets, actuators, cells) favors manufacturing capacity over model quality; form factor is a data bet. Structured environments still lead by 5+ years - so *humanoid* at this scale by 2030 is a stretch even if warehouse robotics thrives. −3 / −5.

## Row 6 - Serious capital-markets AI correction

**Claim:** A >40% drawdown in a recognizable AI-sector equity (or AI-adjacent credit) index, with AI fundamentals in the causal chain - not merely a broad macro crash that takes AI with it.

| | By 2030 | By 2040 |
|---|---|---|
| Round 0 | 40% | 65% |
| Round 8 | **45%** | **65%** |

**Evidence that would move it up:** [A2](../07-indicators/substrate.md)'s revenue-vs-capex gap widening through 2027 while [A3](../07-indicators/substrate.md)'s financing mix keeps migrating toward structures that cannot absorb a miss quietly. **Down:** AI revenue compounding near the rate the capex implies, or the financing mix reverting to operating cash flow - either would let disappointment resolve as a spending pause rather than a drawdown that clears the 40% bar.

**Round 8 rationale.** [Capital](../01-substrate/capital.md) (round 1, deepened round 5): migration from operating-cash financing toward private credit, SPVs, and vendor financing raises the odds that disappointment becomes a *credit event* rather than a board-level pause. Hyperscaler guidance vs. revenue still the headline test ([A2](../07-indicators/substrate.md)). Form remains consolidation, not technology death. +5 on 2030; 2040 already high enough that further moves need a different claim.

## Row 7 - Existential-scale loss of human control

**Claim:** Permanent, large-scale loss of human ability to direct or halt frontier AI systems, with catastrophic civilizational consequences.

| | By 2030 | By 2040 |
|---|---|---|
| Round 0 | 1–3% | 3–8% |
| Round 8 | **1–3%** | **3–8%** |

**Evidence that would move it up:** internal research cycle times at frontier labs compressing faster than the three governors predict, since nearly all of this row's mass lives in the worlds where [Uncertainty 1](../06-uncertainties/recursive-self-improvement.md) breaks the timeline; capability evaluations losing their meaning as a control surface (models routinely sandbagging or situationally aware in testing). **Down:** verification of research outputs staying expensive as capability grows - the same asymmetry that orders Part III also governs this tail.

**Round 8 rationale.** [Uncertainty 1](../06-uncertainties/recursive-self-improvement.md) now names three governors; fast takeoff is over-weighted relative to technical plausibility alone. That *compresses* the upper tail somewhat but does not justify rewriting the range - ranges this wide already encode that uncertainty. Held, with the note that the operative planning risk remains row 3.

---

**Related:** [Ledger](ledger.md) · [Scoring rules](../08-method/scoring.md) · [Indicators](../07-indicators/)

**Next:** [Uncertainties](../06-uncertainties/)
