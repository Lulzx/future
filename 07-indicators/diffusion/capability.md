# Diffusion - The Capability Frontier (B4, B8, B9, B12)

← [B - Diffusion](README.md) · [Part VII](../README.md)

---

The leading edge: how long agents run unsupervised, whether the verifiable/unverifiable gap holds, whether the research loop itself compresses, and whether any of it reaches atoms. These four are the family's earliest movers and its most demo-contaminated - every entry insists on production deployment over demonstration for exactly that reason.

## B4 - Agent reliability

| | |
|---|---|
| **Baseline** | Reliable on short, verifiable, well-scoped tasks; degrades sharply with horizon |
| **Trigger - the transition lands** | Multi-hour autonomous task completion at >90% success without human checkpoints, in production |
| **Trigger - plateau** | Horizon length stalls for >18 months despite capability gains elsewhere |
| **Revises** | [2026–2028](../../04-timelines/2026-2028.md), [Software](../../03-domains/cognitive/software.md), [Part V](../../05-probabilities/README.md) row 1 |

Measure **task horizon at fixed reliability**, not benchmark scores. The economically relevant question is never "can it do this" but "can it do this unsupervised for four hours without a failure that costs more than the labor saved." Those diverge, and the second is what firms actually buy.

**Contamination to refuse.** Demo videos, supervised "agent" product tours, and benchmark suites with hidden retry budgets do not move this indicator. Prefer: production incident rates, human-handoff frequency per task-hour, and whether the buyer removed the checkpoint *after* a measured pilot rather than as a launch claim.

## B8 - Verifiable vs unverifiable domain gap

| | |
|---|---|
| **Baseline** | Large gap: software/math/code far ahead of open-ended professional judgment and physical manipulation |
| **Trigger - asymmetry holds** | Gap stable or widening as measured by production deployment depth (not demos) |
| **Trigger - asymmetry fails** | Production autonomous decision-making in liability-bearing unverifiable domains without cheap external ground truth |
| **Revises** | [Uncertainty 5](../../06-uncertainties/learned-verification.md), [Steelman](../../08-method/steelman.md) §1, ordering of [Part III](../../03-domains/) |

Pair with insurance and liability: if underwriters cover autonomous professional judgment, they are revealing a belief that verification is solved enough to price.

**Gap construction.** Prefer *production deployment depth* (share of workflow run without human sign-off in liability-bearing settings) over capability evals. A model that writes strong legal strategy memos in a lab eval but cannot be the final signer does not close the gap. Closing requires the institutional stack - licensure, liability, insurance - to accept the output, which is why this indicator is coupled to [C6](../governance.md) and [Uncertainty 5](../../06-uncertainties/learned-verification.md)'s institutional cushion.

## B9 - Research cycle time (RSI governor panel)

| | |
|---|---|
| **Baseline** | Not disclosed; infer from release cadence, paper throughput, and hiring of research engineers |
| **Trigger - technical loop** | Sustained >2× compression in time per validated experiment at frontier labs |
| **Physical governor check** | Cycle compression coexists with queued power/fabs - capability not deployable at the new rate |
| **Financial governor check** | Cycle compression coexists with rising real hurdle rates on training clusters ([A7](../substrate.md)) |
| **Revises** | [Uncertainty 1](../../06-uncertainties/recursive-self-improvement.md) - all three governors, not only the technical one |

Headline RSI talk tracks only the first row. The document's revision in round 7 requires reading all three before moving timelines. Compression with either governor binding is a *local* technical win that does not pull [Part IV](../../04-timelines/) forward until the governors clear.

## B12 - Physical diffusion (atoms, not demos)

| | |
|---|---|
| **Baseline** | Warehouse/port autonomy rising but teleop-heavy; specialty harvest still human; hub-to-hub driver-out freight pilot-scale, multi-state insurance incomplete |
| **Cadence** | Quarterly industry reports + regulator filings |
| **Trigger - warehouse path** | Autonomy share of *unstructured* warehouse pick tasks crosses ~50% (not sortation alone) |
| **Trigger - freight path** | Driver-out hub-to-hub commercial service on major US corridors with published insurance (not geofenced pilots only) |
| **Trigger - harvest path** | Specialty crop harvest robots at delivered $/hour competitive with local wage *at scale* (not demos) |
| **Trigger - lag confirms** | Through 2032, structured environments commercial while last-metre and specialty harvest still labor-bound |
| **Revises** | [Robotics](../../03-domains/physical/robotics/), [Logistics](../../03-domains/physical/logistics.md), [Agriculture](../../03-domains/physical/agriculture.md), [2032–2040](../../04-timelines/2032-2040.md), [Part V](../../05-probabilities/) row 5 |

This is the III.B companion to the headline teleoperation ratio. **Prefer delivered work metrics and insurance-enabled routes over unit sales.** Structured-first is the base case; early unstructured success pulls the growth fork forward.

Secondary: port automation share by region (geopolitical capacity); farmland equipment autonomy miles.

### B4 × B12 is the fork

Agents that clear multi-hour verifiable cognitive work (B4) without physical diffusion (B12) confirm the cognitive/physical split - high Part V row 1, low row 5 pressure. Both firing early is the high-growth branch of [2032–2040](../../04-timelines/2032-2040.md). B12 without B4 is unlikely under this framework (atoms harder than symbols); if observed, re-check measurement contamination on B12 first.

---

**Related:** [Uncertainty 5](../../06-uncertainties/learned-verification.md) · [Uncertainty 1](../../06-uncertainties/recursive-self-improvement.md) · [Robotics](../../03-domains/physical/robotics/) · [Part IV - Timelines](../../04-timelines/)

**Next:** [C - Governance indicators](../governance.md)
