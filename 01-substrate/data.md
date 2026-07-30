# Data — and the master asymmetry

← [Part I](README.md) · [Index](../README.md)

---

High-quality human text is essentially exhausted — roughly 10^14 useful tokens against models already trained on 10^13. The remaining headroom is one order of magnitude, and it is the *low-quality* order.

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

This ordering runs through every section of [Part III](../03-domains/). When a domain prediction there looks surprising, the explanation is almost always the cost of ground truth in that domain.

## The second-order effect

Because verification is now the scarce input to *capability*, and — separately — verification is becoming the scarce input to *information markets* ([Game 5](../02-games/5-information.md)), the same word names both the technical bottleneck and the economic opportunity. That convergence is not a coincidence; both are downstream of generation becoming cheap.

---

**Related:** [Science](../03-domains/science.md) on automated experimentation as the way to buy cheap ground truth · [Game 5](../02-games/5-information.md) · [Compressed version](../00-overview/compressed.md)
