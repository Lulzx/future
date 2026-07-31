# Data - and the master asymmetry

← [Part I](README.md) · [Index](../README.md)

---

*Quantities current to mid-2026.*

High-quality human text is essentially exhausted - roughly 10^14 useful tokens against models already trained on 10^13. The remaining headroom is one order of magnitude, and it is the *low-quality* order.

The frontier therefore moved to synthetic data, RL on verifiable outcomes, and self-play in domains with cheap ground truth.

## The asymmetry this created

That redirection is the most consequential structural fact in the document, because it is not neutral across domains.

**Capability now grows fastest where verification is cheap.**

This is why math, code, and formal reasoning improved far faster than taste, judgment, and long-horizon planning. A training loop needs a signal. Where the signal is a unit test, a proof checker, or a benchmark score, the loop runs millions of times per day. Where the signal is "did this advice actually help a human over six months," the loop runs approximately never.

## What it predicts

Expect AI to become **superhuman at things with a scoreboard and remain merely-good at things without one.**

Roughly ordered by how cheap the ground truth is:

| Fast | Medium | Slow |
|---|---|---|
| Formal math, competitive programming | Computational chemistry, materials | Experimental biology |
| Code with tests | Narrow imaging diagnostics | Clinical judgment |
| Structured retrieval | Legal document analysis | Negotiation, taste |
| Games with defined win conditions | Forecasting with resolution | Social science, policy |
| Cyber exploits (self-verifying) | Grid dispatch / markets | Specialty harvest, last-metre delivery |

This ordering runs through every section of [Part III](../03-domains/). When a domain prediction there looks surprising, the explanation is almost always the cost of ground truth in that domain. → [Dependencies](../00-overview/dependencies.md) spine row

## Why synthetic data does not dissolve the constraint

The obvious rejoinder - "models will just generate their own training data" - fails in a way that *reinforces* the asymmetry rather than escaping it. Unfiltered synthetic data degrades models toward their own priors; what makes synthetic data work in practice is a filter that keeps only verified-correct samples. Self-play in games, proof-checked mathematics, and test-passing code are all synthetic-data successes, and every one of them is a success *because* the domain has a cheap verifier to do the filtering. Synthetic generation is an amplifier wired in series with verification: where ground truth is cheap it multiplies the training signal enormously, and where ground truth is expensive it multiplies approximately nothing. The frontier's pivot to synthetic data is therefore not an escape from the master asymmetry - it is the mechanism that sharpened it.

The same logic explains why the slow column is doubly stuck. Progress on taste, judgment, and long-horizon advice runs on human preference and outcome labels, which are expensive precisely because they consume the scarce senior judgment that [Game 4](../02-games/4-labor.md) says is thinning. The slow domains train on the very resource whose supply the transition is eroding - a feedback loop the fast domains simply do not have.

Failure mode: if models prove able to *bootstrap* verifiers for soft domains - training a judge on sparse human labels that then generalizes reliably - the series wiring breaks and the amplifier runs open-loop. That is [Uncertainty 5](../06-uncertainties/learned-verification.md) in training-pipeline form, and it is the strongest version of that objection.

## The second-order effect

Because verification is now the scarce input to *capability*, and - separately - verification is becoming the scarce input to *information markets* ([Game 5](../02-games/5-information.md)), the same word names both the technical bottleneck and the economic opportunity. That convergence is not a coincidence; both are downstream of generation becoming cheap. → [Compressed](../00-overview/compressed.md), [C8](../07-indicators/governance.md)

## What would retire the asymmetry

[Uncertainty 5](../06-uncertainties/learned-verification.md) / [steelman](../08-method/steelman.md) §1: if learned verifiers are good enough that expensive domains stop lagging, **Part III reorders** and this page's spine claim fails. Track with [B8](../07-indicators/diffusion/capability.md) (production depth in unverifiable domains, not demos).

Partial escape without killing the asymmetry: **buy cheaper ground truth** - automated labs ([science](../03-domains/cognitive/science.md)), instrumented robotics data ([robotics](../03-domains/physical/robotics/)), outcome-priced contracts ([B5](../07-indicators/diffusion/economy.md)). That moves a domain left in the table; it does not erase the table.

## Interaction with the rest of Part I

| Input | Link |
|---|---|
| [Compute](compute.md) | Effective compute amplifies wherever verification already works |
| [Energy](energy.md) | Does not create labels; only powers the loops that use them |
| [Capital](capital.md) | Funds data factories and labs; cannot print ground truth |
| [Inference](inference-economics.md) | Makes verified capability free on a lag; unverified fluency also gets cheaper (Game 5 problem) |

## Robotics special case

There is **no internet of manipulation.** Text and code had public corpora; physical interaction does not. That is why [robotics](../03-domains/physical/robotics/) lags even when vision-language models transfer well - the binding constraint is samples in the world, not model size. → [B12](../07-indicators/diffusion/capability.md)

### How to misread the table

Three common errors. **(1) Treating benchmark progress as domain progress** - a model can ace a legal exam and still sit in the medium column for negotiation and strategy, because the exam is a scoreboard and the job is not. **(2) Averaging a domain** - medicine is fast in narrow imaging and slow in clinical judgment; filing the average as "medium" hides the deployment path (tools first, autonomy later). **(3) Assuming the ordering is a forecast of employment** - superhuman code generation can raise developer headcount via Jevons while still being the fastest column; [software](../03-domains/cognitive/software.md) is the worked example. The table orders *capability growth*, not job destruction.

---

**Related:** [Science](../03-domains/cognitive/science.md) · [Game 5](../02-games/5-information.md) · [Uncertainty 5](../06-uncertainties/learned-verification.md) · [Notation](../00-overview/notation.md) · [Compressed](../00-overview/compressed.md)

**Next:** [Capital](capital.md)
