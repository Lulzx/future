# Uncertainty 6 - Correlated-failure insurability as the deployment frontier

← [Part VI](README.md) · [Index](../README.md)

---

[Insurance](../03-domains/cognitive/insurance.md) argued that **underwriters price AI risk before legislators do**, and that exclusions - not coverage - define where AI actually deploys. The variance that belongs in this register is narrower and sharper: **whether correlated failure is insurable at any price the real economy will pay.**

If it is not, the deployment frontier is a reinsurance and sovereign-backstop problem, not a capability problem. That would make every [Part III](../03-domains/) timeline too slow *or* too fast depending on how states respond - and the corpus had been treating insurance as a domain page rather than a global constraint.

## The structural problem

Insurance works when losses are independent. AI risk is correlated by construction:

- A small number of foundation models sit under a huge number of insureds
- A single failure mode manifests everywhere the model is deployed
- Update cycles are synchronized - everyone gets the new version at once

This is cyber risk's shape, which the industry already handles badly (NotPetya, MOVEit, CrowdStrike). AI concentration is worse: fewer effective providers, deeper integration, faster propagation.

## Why the variance is high

Three branches, with very different consequences for the rest of the document:

| Branch | What happens | Effect on timelines |
|---|---|---|
| **Private capacity forms** | AI-specific liability becomes a material line with published rates; aggregate limits bite but deployable | [Part V](../05-probabilities/) insurance-linked claims vindicated; deployment tracks capability more closely |
| **Reinsurance is the ceiling** | A handful of reinsurers set the economy-wide deployment cap | Slower than capability; geographic and sectoral rationing of autonomy |
| **State backstop after first correlated event** | Terrorism-reinsurance template legislated in the [18-month window](../02-games/2-nations.md) | Binary: either unlocks deployment or loads it with political conditions |

Round 0 had no view on which branch. The insurance page (round 2) predicts branch 1 at ~70% by 2030 for the *existence* of a line, while flagging that correlation could still force branch 2–3 for the high-severity tail. **The open uncertainty is the tail, not the product category.**

## The second-order claim that makes this load-bearing

If AI liability is expensive to insure, **the inelastic complement in most domains is not expertise - it is the balance sheet that can absorb residual risk.**

That reframes human moats from capability claims into financial ones, and financial arrangements change on an underwriting cycle, not a training cycle. It is the most plausible mechanism by which [Part III](../03-domains/) timelines turn out far too slow - or, after a backstop, far too cautious.

## Leading indicators

| Signal | Reading |
|---|---|
| AI-specific liability as published commercial line with rate tables | Branch 1 forming |
| Aggregate limits and event exclusions tightening at renewal | Correlation being priced in |
| Reinsurer public commentary / withdrawal from AI-adjacent cyber | Branch 2 binding |
| Model-provider indemnification breadth in enterprise contracts | Whether risk stays with labs or spills to insureds |
| Legislative proposals for AI terrorism-style backstop | Branch 3 preparing, usually post-event |

## Anatomy of the first correlated event

The adversarial case is sharper when the event is specified rather than gestured at. The ingredients are all standing conditions: a synchronized update pushed to every deployment at once, agentic write-access to production systems rather than draft output, and a failure mode subtle enough to run for days before detection. The CrowdStrike outage of July 2024 is the dry run - one vendor, one update, millions of machines, and insured losses widely estimated at a small fraction of the economic loss, most of which fell into exclusions and retentions. The AI version differs in one respect that matters to underwriters: CrowdStrike failed *loudly and instantly*, which capped the loss window at hours. A model-driven failure that corrupts decisions rather than crashing machines has a detection lag measured in days or weeks, and loss scales with the lag. Terrorism insurance is the other anchor: private capacity withdrew essentially overnight after September 2001 and returned only under the TRIA backstop - which is why the branch table above treats post-event withdrawal-then-backstop as a template with precedent, not speculation.

The pre-event pricing problem cuts both ways, and this is the part the corpus should hold with the least confidence. With no loss history, insurers either overprice (deployment slower than capability justifies, branch 2 arriving early and unnecessarily) or underprice (capacity looks abundant right up until the first event vaporizes it, branch 1 appearing confirmed and then failing in a week). **Both errors generate years of indicator readings that look like a resolved uncertainty.** A published rate table is only weak evidence for branch 1 until it has survived an event; the indicator that actually discriminates is renewal behavior *after* the first loss, and there is no way to observe it early.

## The coupling to complement erosion

[Uncertainty 7](complement-erosion.md) lists liability capacity among the slowest-eroding complements, and this page is why: a balance sheet that can absorb correlated residual risk is not manufacturable by intelligence at any capability level - it is manufacturable only by accumulation or by sovereign fiat. If this uncertainty resolves to branch 2, the balance-sheet row becomes the *most* durable complement on the list and the distributional predictions in [assets](../09-macro/assets.md) concentrate further (reinsurers and states as the ultimate complement-owners). If it resolves to branch 3, a legislative act erases the scarcity overnight - the same political repricing risk U7 flags for licenses. The two pages disagree productively: U7 says political scarcity is the least durable kind; this page says the political act requires a triggering catastrophe, which puts a floor under the timeline.

## What would falsify the constraint story

- **Model providers indemnify broadly** at scale - risk internalized, insurance channel never binds.
- **Deployment diversity** (different models, scaffolds, failure modes) makes correlation overstated - capacity arrives like ordinary professional liability.
- **No correlated event through 2032** and steady expansion of coverage limits - the structural argument was theoretically neat and empirically mild.

## Relationship to other uncertainties

- **Uncertainty 1 (RSI):** faster capability without insurability just piles uninsured deployment pressure; the governors on takeoff do not include this one and should be read alongside it for *deployed* takeoff.
- **Game 2 incident window:** the first correlated insurance event may *be* the salient incident that writes the 2030s architecture - financial rather than kinetic.
- **Steelman §1 / Uncertainty 5:** if learned verification makes autonomous professional judgment reliable, insurers may cover what they currently exclude - coupling verification progress to the deployment frontier through a balance-sheet channel.
- **Uncertainty 7:** liability capacity is one of the slow-eroding complements. If this page fires (coverage never arrives at scale), that row's half-life lengthens - scarce complement stays scarce for a balance-sheet reason, not a technical one. If coverage arrives, the row erodes by underwriting rather than by statute.

### What "fires" looks like in the data

Three signatures, in rising severity. **(1) Exclusion language** spreads from specialty lines into ordinary professional liability and cyber - the quiet form, already partly present. **(2) Aggregate limits and co-insurance** appear on AI-assisted work even where coverage nominally exists - capacity without usable limits is capacity in name only. **(3) A correlated loss event** that hits multiple insureds on the same model generation - the event that converts a theoretical argument into a reinsurance market freeze. [C6](../07-indicators/governance.md) and the insurance page's product watch are the leading indicators; waiting for (3) to score this uncertainty is waiting for the resolution event itself.

**Monoculture is the underwriting input.** Herding on the same model family, scaffold, and update schedule is what turns independent professional risk into catastrophe risk. Watch model-share concentration in deployed enterprise stacks the way finance watches factor crowding - [finance](../03-domains/cognitive/finance.md) monoculture table applies here with different labels.

---

**Related:** [Insurance](../03-domains/cognitive/insurance.md) · [Game 2](../02-games/2-nations.md) · [Game 1](../02-games/1-labs.md) on liability · [Governance indicators](../07-indicators/governance.md) · [2028–2032](../04-timelines/2028-2032.md)

**Previous:** [Uncertainty 5](learned-verification.md) · **Next:** [Uncertainty 7 - complement erosion](complement-erosion.md)
