# C - Governance Indicators

← [Part VII](README.md) · [Index](../README.md)

---

*Baselines as of mid-2026. Cadence: event-driven.*

[Game 2](../02-games/2-nations.md) argues that coordination is event-driven rather than reason-driven: the architecture governing the 2030s gets written in the **18 months following a salient accident**. This family therefore has an unusual structure - most of it sits still, and then all of it moves at once.

**The purpose of watching it during the quiet period is to know which draft is on the shelf when the window opens.**

## C1 - The incident

| | |
|---|---|
| **Baseline** | No AI-attributed event large enough to force a legislative cycle |
| **Assumed window** | 2027–2031 |
| **Most likely mechanism** | A market dislocation - [Finance](../03-domains/cognitive/finance.md) has the fastest loops, the least human latency, and the most correlated positioning |
| **Least recoverable** | [Warfare](../03-domains/contested/warfare.md) - an escalation event has no rollback |
| **Revises** | [Part V](../05-probabilities/README.md) row 3; everything in family C downstream of it |

Watch for **near-misses**, which are more informative than the eventual hit and arrive earlier: cyber intrusions with autonomous lateral movement, biological synthesis screening failures, flash dislocations traced to correlated model-driven positioning. A near-miss that gets publicly attributed is a small version of the forcing event and produces a small version of the regulatory response.

One distortion to guard against: **attribution is itself contested terrain.** Whether an event counts as "AI-attributed" is decided politically after the fact, by actors with positions to defend - which means C1 can fire late (a genuine AI incident laundered into operator error) or early (an ordinary failure branded as AI to serve a regulatory agenda). The indicator tracks the public attribution, because that is what opens the legislative window; the analyst should separately track whether the attribution was earned, because that determines whether the resulting architecture addresses a real mechanism.

## C2 - Shelf-readiness of the response

| | |
|---|---|
| **Baseline** | Fragmented; no consensus architecture drafted and defensible |
| **Trigger - prepared** | A coherent, technically literate regime published and endorsed across factions *before* the incident |
| **Trigger - unprepared** | The window opens with only advocacy positions available |
| **Revises** | The quality, not the timing, of 2030s governance |

The most actionable item in the document. **The window will be short and whatever is ready will win** - this is the observed pattern in aviation, nuclear power, financial regulation, and pharmaceutical approval alike. Drafting quality now determines outcomes later far more than advocacy volume does.

## C3 - Compute governance viability

| | |
|---|---|
| **Baseline** | Export controls on accelerators; no verification regime for training |
| **Trigger - viable** | On-chip attestation or location verification deployed at scale |
| **Trigger - dead** | Frontier capability routinely reached below any plausible reporting threshold |
| **Revises** | [Game 2](../02-games/2-nations.md), [Part V](../05-probabilities/README.md) row 4 |

The lever weakens exactly as the stakes rise: **algorithmic efficiency and inference-heavy methods both erode the correlation between "large training cluster" and "frontier capability,"** which is the correlation the entire compute-governance approach rests on. Track efficiency gains as an indicator of governance feasibility, not just of capability.

## C4 - Diffusion rate of frontier capability

| | |
|---|---|
| **Baseline** | Open-weight tier ~3–6 months behind frontier (Epoch AI, Jan–May 2026; down from the ~9–15 months carried at authoring) |
| **Trigger - controls working** | Gap widening past ~24 months |
| **Trigger - controls failing** | Gap closing below ~6 months |
| **Revises** | [Game 1](../02-games/1-labs.md), [Game 2](../02-games/2-nations.md) |

Leads decay at maybe 30–50%/yr absent extraordinary security. This measures whether that decay rate is being changed by policy or merely described by it. **A lead you cannot hold is a commercial asset, not a strategic one** - and the width of this gap is the difference between the two.

## C5 - Electricity-price politics

| | |
|---|---|
| **Baseline** | Wholesale prices up sharply at datacenter-adjacent nodes; localized political reaction |
| **Trigger** | Large-load tariffs, siting moratoria, or ratepayer-protection statutes in two or more major markets |
| **Revises** | [Energy](../01-substrate/energy.md), [2028–2032](../04-timelines/2028-2032.md) |

The argument here is that **this arrives before any federal capability regulation does**, because it is the only channel through which AI touches a median voter's budget monthly. If federal safety regulation lands first, that ordering claim was wrong and the political model in [Game 2](../02-games/2-nations.md) needs revisiting.

## C6 - Liability allocation

| | |
|---|---|
| **Baseline** | Unresolved; contracts allocate by negotiation, courts have not settled it |
| **Trigger** | A precedent-setting judgment or statute assigning liability for autonomous system harm |
| **Revises** | [Law](../03-domains/cognitive/law.md), [Medicine](../03-domains/physical/medicine/), [Game 1](../02-games/1-labs.md), and every "human retains the part where someone can be sued" claim in [Part III](../03-domains/) |

Underrated because it is slow and unglamorous. But **the accountability layer is the human moat in most of Part III**, and its width is set entirely by where liability lands. A ruling that shifts liability onto model providers collapses that moat in several domains simultaneously; one that keeps it with the deploying professional entrenches it for a decade.

## C7 - AI liability insurance capacity

| | |
|---|---|
| **Baseline** | No material AI-specific commercial line with published rates; cyber forms used as imperfect substitute; correlation poorly modeled |
| **Trigger - private capacity** | Distinct AI liability line with published rate tables and growing limits |
| **Trigger - correlation binds** | Aggregate limits / event exclusions tighten; reinsurer withdrawal; or first correlated multi-insured loss event |
| **Trigger - state backstop** | Terrorism-reinsurance-style proposal enacted or seriously drafted post-event |
| **Revises** | [Insurance](../03-domains/cognitive/insurance.md), [Uncertainty 6](../06-uncertainties/correlated-risk.md), [2028–2032](../04-timelines/2028-2032.md) deployment frontier |

**The exclusions define the deployment frontier** more tightly than capability demos. C6 is precedent; C7 is price and availability. Together they say whether the moat is legal doctrine or balance-sheet arithmetic.

## C3b - Compute-governance trap (export controls vs verification)

| | |
|---|---|
| **Baseline** | Accelerator export controls used as competitive instrument; no bilateral verification regime |
| **Trigger - trap deepens** | Tighter controls + accelerating domestic substitution / efficiency that shrink the controlled set's relevance |
| **Trigger - trap acknowledged** | Official linkage of control regimes to a future verification architecture (even aspirational) |
| **Revises** | [Bipolar](../03-domains/contested/geopolitics/bipolar.md), [Part V](../05-probabilities/) row 4, [C3](governance.md) |

Round 6 named the mechanism: the lever and the future arms-control verification tool are the same object. C3 tracks technical viability; this row tracks whether policy is spending the option.

## C8 - Provenance and synthetic-media infrastructure

| | |
|---|---|
| **Baseline** | C2PA and similar standards exist; adoption uneven; easy to strip; platforms inconsistent |
| **Trigger - infrastructure real** | Major platforms + device makers ship default capture-time attestation *and* consumer-visible trust UX at scale |
| **Trigger - theatre** | Labeling mandates without attestation (easy spoof, high compliance cost, low trust effect) |
| **Trigger - enclosure path** | Verified content retreats almost entirely into walled gardens; open web treated as unverified by default |
| **Revises** | [Game 5](../02-games/5-information.md), [Media](../03-domains/cognitive/media.md), [Compressed](../00-overview/compressed.md), [B6](diffusion/labor.md), [B11](diffusion/labor.md) |

[Game 5](../02-games/5-information.md) and [media](../03-domains/cognitive/media.md) argue authenticity becomes a product and that open unverified content goes lemons. **C8 is whether society builds the public good (point-of-capture provenance) or only private gardens.** Differs from B6 (assessment reversion in education/hiring): C8 is *content and identity* infrastructure for the feed and the courtroom.

Watch legislation that mandates labels without requiring hard attestation - that is the privacy-class failure mode applied to media (rules without measurement). → [State capacity](../03-domains/contested/state-capacity.md)

**Near soft cap:** prefer editing existing C-rows over adding new ones; a future split would separate incident/architecture (C1–C4) from liability/provenance (C5–C8) if growth continues.

---

**Related:** [Game 2 - Nations](../02-games/2-nations.md) · [Part V - Probabilities](../05-probabilities/) · [Warfare](../03-domains/contested/warfare.md) · [Finance](../03-domains/cognitive/finance.md) · [Insurance](../03-domains/cognitive/insurance.md) · [Media](../03-domains/cognitive/media.md) · [Game 5](../02-games/5-information.md)

**Next:** [Part VII index](README.md) · [Protocol](../RESEARCH.md)
