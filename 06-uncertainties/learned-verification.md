# Uncertainty 5 - Learned verification defeats the master asymmetry

← [Part VI](README.md) · [Index](../README.md)

---

[Steelman](../08-method/steelman.md) §1 is the strongest argument against this document's framework. It deserves its own uncertainty entry - not because it is new in round 8, but because leaving the document's admitted weakest point *only* in the steelman section understates its variance relative to uncertainties 1–3.

## The claim that would break the corpus

The master asymmetry: **capability grows fastest where verification is cheap.** It orders [Part III](../03-domains/), paces the timelines, and explains why software moves before medicine and why robotics waits on data.

The objection: that asymmetry is a property of *today's* training regime (RL needs a cheap reward signal), not a law. Reward modelling, process supervision, and learned critics manufacture verification where it was expensive. If a model can reliably judge legal arguments, research directions, or management advice, **verification stops being scarce** and the domain ordering dissolves. Domains this document says lag would lag only because of a temporary property of 2020s methods.

## Why it is the highest-stakes uncertainty on the framework

Uncertainties 1–3 and 4 mis-set parameters or scenarios. **This one, if resolved against the document, falsifies the spine.** Timelines compress across physical and contested domains; the inelastic-complements story partially survives (atoms still don't care about judgments); but the *ordering* that structures the whole corpus fails.

[Steelman](../08-method/steelman.md) already stated: *"If this document is badly wrong, the most likely single reason is objection 1, and the most likely form is that it looks approximately right until roughly 2029 and then ages very poorly."*

## The best reply, and where it is weak

**Reply:** a learned verifier is only as good as what trained it - the ground-truth problem recurses one level up. Where genuine ground truth never arrives, the loop can drift confidently. Self-verification without external grounding is exactly the regime where systematic error compounds invisibly.

**Where the reply is weak:** the same recursion objection applies to human expertise, which is mostly peer-validated without external ground truth, and human expertise runs civilization. If learned verification matches peer review, that is enough for most economic purposes.

**This is not resolved.** Round 8 does not resolve it. It only promotes it to the register so it is tracked with a leading indicator rather than re-discovered every steelman pass.

## The middle case the binary framing hides

The page as originally written offered two outcomes: the asymmetry holds, or it dissolves. The more likely resolution is tiered. Verification is not one skill - checking *process* (was the reasoning well-formed, were the steps standard) is easier to learn than checking *outcome truth* in domains where feedback arrives in years (did the strategy work, was the diagnosis right for the rare case, was the research direction fertile). Learned verifiers plausibly master the first tier well before the second, because the first tier has abundant training signal and the second is starved by construction - the slow feedback that made human verification expensive also makes verifier training data scarce. If that is how it resolves, the domain ordering does not dissolve; it *bends* - process-heavy professions (compliance, documentation-driven law, protocolized medicine) move much faster than the corpus expects while taste-and-direction work stays ordered as mapped. That is a re-scoring event for half of [Part III](../03-domains/), not a framework falsification, and the corpus currently has no row for it.

**Why "approximately right until 2029" is the specific failure shape:** learned verifiers improve on the tier with data first, so early-window observations confirm the ordering even while the mechanism that will break it is compounding out of sight. The corpus would pass its own indicator checks right up until the second tier cracks. The defense against being fooled is to weight the *gap trend* between verifiable and unverifiable domains, not the level - the level will look reassuring for years either way.

## The institutional cushion

Even a full technical win does not immediately dissolve the ordering, because verification cost is priced into institutions, not just training runs. Liability rules, professional licensure, and [insurance exclusions](correlated-risk.md) all assume a human checker; a learned verifier that works must still be *accepted* by courts, regulators, and underwriters before deployment reorders. That lag is real but it is a cushion, not a wall - it converts "the ordering dissolves" into "the ordering survives as institutional fact for some years after failing as technical fact," which changes the timeline of being wrong without changing the fact of it. A corpus that leaned on this cushion as its main defense would be conceding the framework and defending the dates.

## Relationship to Uncertainty 1

[RSI](recursive-self-improvement.md) is about whether research *throughput* compounds. This uncertainty is about whether the *ordering principle* survives. They interact: a closed research loop with cheap learned verifiers is the nightmare case for continuity assumptions; a closed loop still bound by expensive verification is a productivity multiplier (Uncertainty 1's technical governor). Keeping them separate prevents conflating "faster" with "the map was wrong."

## Leading indicators

| Signal | Reading |
|---|---|
| Capability gains in domains with no cheap ground truth (open-ended legal strategy, novel research taste, management judgment) relative to verifiable domains | If the gap *closes* rather than grows, the asymmetry is weakening |
| Production deployment of AI as final decision-maker (not draft) in liability-bearing professional work | Revealed belief that verification is solved |
| Stable or improving error rates under self-critique scaffolds without external checkers | Whether the recursion is benign or drifting |
| Insurance markets pricing autonomous professional judgment | [Insurance](../03-domains/cognitive/insurance.md) as a revealed-preference read |

## What resolution forces

**If learned verification wins:** re-order [Part III](../03-domains/); pull physical and contested timelines forward; rewrite the spine sentence; re-score [Part V](../05-probabilities/) rows 1, 2, and 5 upward. Log under scoring rule 5 as a framework revision, not a parameter tweak.

**If the asymmetry holds through ~2030:** the steelman objection stays live but the base case strengthens; this uncertainty's variance drops without retiring the mechanism.

**If the tiered middle case lands:** re-score process-heavy professions (compliance, protocolized medicine, documentation law) forward without dissolving the spine; leave taste-and-direction domains ordered as mapped; update [B8](../07-indicators/diffusion/capability.md) to track *two* gaps (process vs outcome) rather than one. That is a Part III edit, not a framework rewrite - and it is the resolution shape this page now treats as most likely.

### Coupling map (read with the rest of Part VI)

| If this fires… | Effect on U5 |
|---|---|
| [U1](recursive-self-improvement.md) technical loop | Accelerates verifier training where data exists; sharpens the tier split |
| [U3](apprenticeship-gap.md) inversion path | Needs cheap learned feedback in soft domains - U5 middle/full win is a prerequisite |
| [U6](correlated-risk.md) coverage expands | Underwriters revealing belief that verification is priced; strongest commercial signal for U5 |
| [U7](complement-erosion.md) | U5 full win shortens every complement half-life at once (non-sequential erosion) |

---

**Related:** [Steelman](../08-method/steelman.md) §1 · [Data](../01-substrate/data.md) · [Uncertainty 1](recursive-self-improvement.md) · [Part III](../03-domains/) · [Scoring](../08-method/scoring.md) rule 5

**Previous:** [Uncertainty 4 - Taiwan](taiwan.md) · **Next:** [Uncertainty 6 - correlated risk](correlated-risk.md)
