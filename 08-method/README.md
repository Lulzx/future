# Part VIII - Method

← [Index](../README.md) · [Part VII](../07-indicators/)

---

Where the numbers come from, what reference classes they lean on, and how to tell when this document is wrong rather than merely early.

A forecast without a stated method is an opinion with decimal places. This part exists so that the probabilities in [Part V](../05-probabilities/README.md) can be criticized on their construction rather than only on their conclusions.

## Sections

| | | |
|---|---|---|
| [Base rates](base-rates/README.md) | Reference classes - GPT diffusion, capex booms, regulatory cycles, **AI winter failure archaeology**, labor shocks, demographics | Where the priors come from |
| [Steelman](steelman.md) | The strongest versions of the three arguments against this document | Where it is most likely wrong for reasons it does not already admit |
| [Scoring](scoring.md) | How claims resolve, what counts as a miss, and the errors this framework is structurally prone to | How to hold it accountable |

## The four moves that generate every estimate here

1. **Find the physical or institutional rate limit.** Not "what is possible" but "what is the slowest necessary step." Almost every over-optimistic AI forecast fails by modelling the fast step. → [Part I](../01-substrate/)
2. **Identify the payoff structure, then predict behavior from it** rather than from stated intentions. Contest, security dilemma, Bertrand competition, commons tragedy, signaling collapse. → [Part II](../02-games/)
3. **Price the ground truth.** For any capability claim, ask what the training signal is and what it costs per sample. This single question orders [the domains](../03-domains/) correctly. → [Data](../01-substrate/data.md)
4. **Anchor on the historical reference class**, then adjust explicitly and say by how much. → [Base rates](base-rates/README.md)

## The three assumptions doing the most work

Stated plainly because they are the joints where this breaks:

| Assumption | If wrong | Where treated |
|---|---|---|
| Institutional absorption is slower than technical capability from ~2028 | Every timeline is too long | [Steelman](steelman.md), [Part VI](../06-uncertainties/) |
| Verification cost keeps ordering capability growth | The domain rankings scramble | [Data](../01-substrate/data.md), [Uncertainty 1](../06-uncertainties/recursive-self-improvement.md) |
| Competitive markets pass AI gains to consumers | Value concentration in [Game 3](../02-games/3-firms.md) inverts | [Steelman](steelman.md) |

## Parameter errors, framework errors, and where each lives

The corpus separates two ways of being wrong because they demand different responses. A **parameter error** - a date too early, a probability mis-set, a domain mis-ranked - lives in [Part VI](../06-uncertainties/) and gets fixed by re-scoring against the [dashboard](../07-indicators/README.md). A **framework error** - the four moves themselves generating systematically wrong answers - lives in the [steelman](steelman.md) and cannot be fixed by re-scoring, because the re-scoring machinery is built out of the same four moves. [Scoring](scoring.md) is the tripwire between the two: an isolated miss revises a row, but a run of misses that share a direction is evidence about the framework, and the rule there is that correlated misses revise the method, not just the numbers it produced.

The moves are also ordered deliberately. The rate limit comes first because it caps what any incentive analysis can deliver; payoffs come before domains because behavior under incentives generalizes while sector detail does not; and the reference class comes last because it is the check on the other three, not a substitute for them. An estimate that skips straight to move 4 is an analogy, not a forecast.

## How to disagree with this document productively

Locate the disagreement at one of the four moves. Every conclusion here is downstream of a rate limit claimed, a payoff structure assumed, a verification cost priced, or a reference class chosen - so disputing a conclusion without naming which move produced it is unanswerable, and answering it would be theater. The highest-value disagreements name a different reference class and argue why it fits better, because move 4 is the least constrained of the four and carries the most hidden freedom. The lowest-value disagreements assert a different conclusion at a similar confidence, which exchanges no information at all. The [steelman](steelman.md) page is this advice applied to the document by itself.

## What the numbers are made from, and what they are not

Every estimate here is built from public information: filings, statistical releases, disclosed prices, published research, observable deployments. Nothing rests on private access, and that is a bias with a known direction, not merely a limitation. **Public-source forecasting systematically underweights whatever the best-informed parties have an incentive not to disclose** - internal capability trajectories, true unit economics, the real state of safety incidents. Where the corpus reasons about lab internals (as in [Uncertainty 1](../06-uncertainties/recursive-self-improvement.md)), it does so from external proxies like release cadence and hiring, and those claims deserve one notch less confidence than the same-sounding claims built on filings. The compensating advantage: public-source claims are checkable by any reader, which is what makes the [scoring](scoring.md) regime possible at all. A forecast built on privileged access cannot be audited; this one can, and that trade was made deliberately.

## What this document is bad at, admitted upfront

- **Discontinuities.** The method is built on rate limits and reference classes, which by construction predicts continuity. If this transition is genuinely unlike its reference classes, the method fails silently and confidently. That is the deepest problem and it has no fix from inside the method.
- **Timing precision.** The directional claims are far stronger than the dates. Treat every year given as ±2 and every year past 2032 as a scenario label rather than a forecast.
- **Non-US institutions.** The regulatory, labor-market, and permitting analysis is US-centric because that is where the reference data is. The EU, India, and China each run different institutional clocks. → open queue in the [protocol](../RESEARCH.md).
- **Second-order political reaction.** The document predicts economic pressure well and predicts what politics does with it poorly. Political responses to distributional shocks are historically the least forecastable part of any such transition.

### Partial credit is mandatory

Bundled predictions (consolidation *and* lag; incident *and* architecture) must score by clause when one clause becomes decidable ([scoring](scoring.md), [register](../05-probabilities/register.md)). Waiting for the whole sentence is a dodge. The open-weight lag is the worked example: already wrong as written, logged in r25–26 without rewriting every blockquote that contained it.

---

**Next:** [Base rates](base-rates/README.md) · [Protocol](../RESEARCH.md)
