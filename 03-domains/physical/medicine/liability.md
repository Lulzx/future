# Liability and licensure - authorization as the bottleneck

← [Medicine](README.md) · [III.B - Physical](../README.md) · [Index](../../../README.md)

---

The binding constraint on AI in medicine is not intelligence. It is **supply of licensed capacity and reimbursement rules.**

Healthcare has never been bottlenecked on knowing what to do; it is bottlenecked on who is permitted to do it and who pays. Adding intelligence to a system constrained on authorization changes less than capability benchmarks imply.

## Three layers of the moat

| Layer | What it is | Who sets it | Speed of change |
|---|---|---|---|
| **Licensure** | Legal monopoly on acts (diagnose, prescribe, operate) | Legislatures, medical boards | Slow; political |
| **Liability** | Who pays when the act harms | Courts, statutes, contracts | Slow; then jumps on precedent |
| **Insurance** | Who will underwrite the residual risk | Underwriters, reinsurers | Continuous; repriced at renewal |

Capability attacks none of these directly. A model that outperforms a median physician still cannot sign a chart, still does not hold a DEA number, and still may be uninsurable as an autonomous actor. → [Insurance](../../cognitive/insurance.md), [Uncertainty 6](../../../06-uncertainties/correlated-risk.md)

## The financial moat, restated

**What protects the incumbent professional is often not skill - it is that a malpractice policy exists covering a licensed human and does not yet cover an autonomous system.**

That reframes the human moat from a capability claim into a balance-sheet claim. Balance sheets reprice faster than residencies train. A single underwriting shift or a precedent-setting judgment can move the [diagnostics](diagnostics.md) employment story more than another generation of model quality.

The reason no carrier writes autonomous clinical risk today is not squeamishness; it is that the risk has the wrong statistical shape for the existing product. Malpractice works as a line of business because physician errors are close to independent: one clinician's bad day does not correlate with another's, so a book of thousands of policies diversifies. A deployed model does not have bad days independently. Every instance shares weights, prompts, and update schedule, so a systematic failure is one event affecting the entire book simultaneously. That converts a diversifiable risk into something closer to catastrophe cover, which requires reinsurance capacity, aggregate limits, and a loss history that does not exist. → [Uncertainty 6](../../../06-uncertainties/correlated-risk.md)

This matters for forecasting because it says what the unlock looks like. It is not a carrier becoming braver. It is either a vendor with a balance sheet large enough to self-insure and a commercial reason to do it, or a statutory cap that bounds aggregate exposure, or enough deployment history for the tail to be priced. The first is available today to a handful of firms and is the path to watch. **A model provider offering indemnity is a stronger signal than any benchmark result**, because it means someone with full access to the failure data is willing to bet capital on the failure rate.

> **Watch [C6](../../../07-indicators/governance.md):** a judgment or statute assigning liability for autonomous clinical harm. Provider-side liability collapses the moat in high-volume domains; professional-side liability entrenches it for a decade.

## Reimbursement is the other gate

Even when a tool is accurate and a human will sign, **payment rules** decide deployment. Codes, prior auth, and site-of-service differentials determine whether the hospital buys the system or shelves the pilot.

AI that reduces cost but also reduces billable RVUs faces a perverse incentive inside fee-for-service. AI that increases throughput under a fixed professional fee is adopted as speed-up. The same model meets opposite fates under different payment regimes - which is why deployment maps to payer policy more than to leaderboard rank.

The clean prediction from this is that **capitated and salaried systems adopt clinical AI years ahead of fee-for-service ones**, because in a capitated system avoided care is retained revenue and in a fee-for-service system it is forgone revenue. The same is true across borders: national systems with global budgets have the incentive structure that fee-for-service markets lack, and are held back instead by procurement capacity and IT estate rather than by economics. This gives a testable ordering that has nothing to do with which country has the better models, and it predicts that the earliest large-scale clinical deployments look institutionally boring rather than technologically impressive.

The failure mode for the reimbursement claim is that payment codes are not fixed. If a dedicated payment category for autonomous interpretation is established at a price above its delivered cost, the perverse incentive inverts overnight and adoption becomes a margin opportunity rather than a margin threat. Autonomous diabetic retinopathy screening is the existing template for how such a code gets created, and the question is only how far the template generalizes.

## Why this is not permanent safety

Licensure and liability are **chosen** constraints. They can be rewritten after a crisis, a fiscal crunch, or a rural access collapse. [Demography](../../../09-macro/demography.md) raises the odds of rewrite: a care shortage makes "only physicians may X" politically expensive.

The base case is still slow change through 2030. The tail is a scope-of-practice and liability rewrite in the [18-month window](../../../02-games/2-nations.md) after a salient incident - or after a fiscal event that makes the status quo unaffordable.

## Failure modes for the "authorization binds" claim

- **Enterprise indemnification by model providers** at scale - risk leaves the hospital balance sheet.
- **Safe harbors** for AI-assisted standard-of-care when the human follows a certified system.
- **Workforce emergency rules** (pandemic-style) that expand who may act with model support.

Any of these would make [delivery](delivery.md) timelines look too pessimistic without the diagnostic models getting smarter.

## Coupling to complement erosion

Licensure and liability capacity are the political rows on the [complement list](../../../09-macro/assets.md). They do not erode by model quality; they reprice by statute and by underwriting. That makes medicine the cleanest domain in which to watch [Uncertainty 7](../../../06-uncertainties/complement-erosion.md)'s political channel: a single scope-of-practice expansion or a carrier product for autonomous reads is more informative about the half-life of those rows than another generation of diagnostic benchmarks. The same event is also a [C6](../../../07-indicators/governance.md) trigger. Score it once, revise both pages.

---

**Related:** [Diagnostics](diagnostics.md) · [Insurance](../../cognitive/insurance.md) · [Law](../../cognitive/law.md) · [Game 1](../../../02-games/1-labs.md) · [C6 Liability](../../../07-indicators/governance.md) · [State capacity](../../contested/state-capacity.md)

**Back to:** [Medicine hub](README.md) · **Next:** [Robotics](../robotics/)
