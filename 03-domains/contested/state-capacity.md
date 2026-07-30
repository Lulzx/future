# State Capacity — the precondition for every governance claim

← [III.C — Contested](README.md) · [Index](../../README.md)

---

Every governance argument in this document assumes a state capable of acting. [Game 2](../../02-games/2-nations.md) predicts an architecture written in the 18 months after a salient accident. [Energy](../../01-substrate/energy.md) predicts electricity politics arriving before capability regulation. [Insurance](../cognitive/insurance.md) predicts a state backstop after the first correlated event.

**None of that happens well unless the state can hire, understand, and enforce.** That capability is currently the weakest link in the entire chain, and it is almost never analyzed at the same resolution as model evals.

## Four capacities, not one

| Capacity | Question | Failure mode |
|---|---|---|
| **Measurement** | Can the state independently verify claims about systems? | Rules without inspection → theatre |
| **Talent** | Can it hire or borrow people who understand the stack? | Capture by default; industry drafts the regime |
| **Adoption** | Can it use AI on its own workloads? | Private sector pulls away; public backlogs persist |
| **Enforcement** | Can it impose costs on non-compliant actors across borders? | Law on paper; leakage in practice |

Most "AI governance" debate is about what the rules should *say*. This page is about whether any rule can be *real*.

## 1. Measurement — the first problem

A regulator cannot enforce what it cannot measure. Right now, no government can independently verify:

- The scale of a training run
- The capability of a deployed system
- Whether a stated safety evaluation was conducted as described
- Whether a model contributed to a specific harm

Every one of those is currently established by **self-report from the regulated entity.** That is the structural situation in pharmaceutical approval before the FDA had inspection authority, and in financial reporting before independent audit — and both took decades and a scandal each to fix.

**The highest-leverage governance investment available is not rulemaking. It is measurement capability** — the technical ability to check claims independently. Without it, any architecture written in the post-incident window is unenforceable, and unenforceable rules produce compliance theatre plus a false sense of resolution, which is worse than no rules at all.

Compute governance as verification ([C3](../../07-indicators/governance.md), [bipolar trap](geopolitics/bipolar.md)) only works if someone can audit chips, clusters, or attestations. That is a measurement institution problem before it is a treaty problem.

## 2. Talent — stated honestly

The state needs people who understand this technology deeply, and it is competing for them against employers paying an order of magnitude more, at a moment when the [scarce input has opinions](../../02-games/1-labs.md) about where it works.

This isn't new — the same gap exists in financial regulation, aviation, and pharma — but the compensation ratio is more extreme and the technical half-life is shorter. Three partial mitigations, none sufficient alone:

- **Rotational secondments** rather than permanent hiring, accepting the conflict-of-interest cost as the price of competence
- **Concentrated technical units** with independent pay authority — how central banks and a few defense research organizations solved analogous problems
- **Buying measurement rather than building it** — funding independent third-party evaluation, which pushes the verification problem one layer out rather than solving it

Without talent, [C2 shelf-readiness](../../07-indicators/governance.md) is empty: the post-incident window fills with whatever draft industry had ready.

## 3. Adoption — the irony

Government is unusually well-suited to the current technology, and unusually badly positioned to adopt it.

**Suited**, because a large share of state activity is exactly the [cheap-ground-truth cognitive work](../../01-substrate/data.md) that compresses: benefits adjudication, permit review, tax examination, procurement analysis, translation, case backlog triage, records management. Backlogs are the state's characteristic failure mode, and backlogs are precisely what abundant cognition dissolves.

**Badly positioned**, because of procurement cycles measured in years, legacy systems measured in decades, civil-service rules that make redeployment slow, and an asymmetric error regime: a wrongly-denied benefit is a headline, a slowly-processed one is a statistic. That asymmetry rationally produces extreme caution, and extreme caution is expensive when the alternative is a queue.

> **Prediction:** the largest realized public-sector gains through 2032 are in **backlog clearance** — permits, courts, benefits, immigration, veterans' claims — rather than in anything resembling policy analysis. Boring, unglamorous, and worth more than most of what gets announced.

### The permitting loop

**Permitting throughput is a state-capacity question, and permitting is the binding constraint on [energy](../../01-substrate/energy.md), which is the binding constraint on AI itself.** A state that used AI to clear its own permitting backlog would be relieving the constraint on the technology by deploying the technology. That is the single highest-leverage administrative intervention available and it requires no new statutory authority in many jurisdictions — only procurement and willingness.

Same logic applies to grid studies ([energy sector](../physical/energy-sector.md)), court dockets ([law](../cognitive/law.md)), and licensing boards that gate [medicine](../physical/medicine/liability.md).

## 4. Enforcement — borders and balance sheets

Even a competent measurer faces:

- **Cross-border leakage** — weights, talent, and inference APIs move; national rules face [Game 2](../../02-games/2-nations.md) diffusion
- **Corporate structure** — SPVs, cloud regions, and vendor chains blur who is the regulated entity ([capital](../../01-substrate/capital.md) financing mix)
- **Unequal counterparties** — fining a startup is easy; compelling a hyperscaler or a sovereign lab is politics

Enforcement capacity is why [insurance](../cognitive/insurance.md) and liability often bind first: they do not need a new agency, only courts and underwriters. State capacity still matters for the backstop after correlated failure ([Uncertainty 6](../../06-uncertainties/correlated-risk.md)).

## Variance across states

| Type | Measurement | Adoption | Implication |
|---|---|---|---|
| **High-capacity administrative states** (parts of N. Europe, Singapore, etc.) | Medium–high | Medium | Can run real regimes if they choose; politics may still refuse |
| **High-tech, fragmented states** (US federal) | Uneven by agency | Low–medium | Electricity politics and state-level rules outrun federal capability policy |
| **High-build, party-state** (China) | Different transparency problem | High where prioritized | Capacity without liberal verification; [bipolar](geopolitics/bipolar.md) asymmetry |
| **Low-capacity / debt-stressed** | Low | Low | Rules imported, unenforced; [Global South](geopolitics/global-south.md) lives with private governance |

**"Regulation arrives" is not a single global event.** It is a distribution over state types. The corpus's US-centric Game 2 timeline is a claim about one high-salience jurisdiction, not a world average.

## The uncomfortable part

If the state cannot measure, cannot hire, and cannot adopt, then the [Game 2](../../02-games/2-nations.md) prediction needs a caveat it does not currently carry.

The architecture written in the post-incident window will be **written by whoever has the technical capacity to draft it** — which, absent state capability, means the regulated industry, standards bodies it funds, or a small number of civil-society organizations with fewer resources than either.

That is not necessarily a bad outcome; industry drafting produced workable regimes in aviation and finance. But it is a **different** outcome from the one implied by "regulation arrives," and it should be predicted explicitly rather than discovered later. **Capture is not a risk to the process; under low state capacity, it is the default shape of the process.**

## What would change this

- **A well-funded, technically credible measurement institution** — NIST-analogue for capability evaluation, with inspection authority and independent pay scales. Cheap relative to its leverage; currently the biggest gap.
- **Procurement reform that lets the state buy software on software timelines.** Repeatedly attempted, repeatedly stalled; precondition for public benefit from any of this.
- **A visible backlog-clearance success.** Nothing changes bureaucratic behavior like a peer agency demonstrably solving a problem everyone shares.
- **Pay and status for technical civil service** sufficient to staff the measurement layer — without which secondments remain the only path and capture remains structural.

## Indicators

| Signal | Reading |
|---|---|
| Independent eval / red-team capacity funded inside government | Measurement layer real or not |
| Time-to-hire for technical roles in AI-relevant agencies | Talent gap |
| Permit / docket clearance rates where AI tools deployed | Adoption working |
| Post-incident rule text authorship (agency vs industry consortium) | Capture vs capacity |
| Interconnection queue movement after "AI for government" programs | Permitting loop closed or rhetorical |

---

**Related:** [Game 2 — Nations](../../02-games/2-nations.md) · [Energy constraint](../../01-substrate/energy.md) · [Energy sector](../physical/energy-sector.md) · [Law](../cognitive/law.md) · [Uncertainty 2](../../06-uncertainties/power-permitting.md) · [Governance indicators](../../07-indicators/governance.md) · [Europe](geopolitics/europe.md) as rule-setter vs builder

**Next:** [Part IV — Timelines](../../04-timelines/)
