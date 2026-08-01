---
title: Fast Takeoff Has Three Brakes, and Two Are Not Technical
dek: The scenario where AI research feeds on itself is the highest-variance question in the whole forecast, and the number that would answer it is measured only inside frontier labs. Here is how to watch it from outside, and why the likeliest fast outcome is a fast decade, not a discontinuity.
date: 2026-08-14
tags: takeoff, research, risk
takeaway: A closed research loop still has to pass three governors, verification, physics, and finance, and only the first is technical. Watch for the frontier pulling away while the governors strain. Anything else is a productivity multiplier diffusing on schedule.
corpus: 06-uncertainties/recursive-self-improvement.md, 01-substrate/compute.md, 09-macro/rates.md, 01-substrate/data.md, 01-substrate/energy.md
---

# Fast Takeoff Has Three Brakes, and Two Are Not Technical

Every forecast in this blog carries an asterisk that has never been made explicit, so this post is the asterisk.

Seventeen posts of constraint-first argument, permits, underwriters, org charts, denominators, all assume that AI capability arrives at roughly the pace it has been arriving, fast but continuous, leaving institutions time to lag behind it in the ways the corpus so carefully maps. There is one variable that could void that assumption wholesale, and [the corpus's own uncertainty register](../06-uncertainties/recursive-self-improvement.md) is blunt about its rank: **it has a wider effect on outcomes than all the others combined**, and it is the one the authors have the least ability to estimate from outside a frontier lab.

The variable is whether AI research is beginning to feed on itself. Models already write substantial fractions of the labs' new code, optimize training runs and kernels, survey literature, and generate and triage experiments. Nobody disputes the direction. The question that matters is which of two regimes it settles into: a **productivity multiplier**, where researchers get a large, roughly linear speedup, enormously valuable, structurally boring, or a **feedback loop with a short doubling time**, where each generation of models meaningfully shortens the time to the next. The first regime changes budgets. The second changes everything: the capex wall in [the substrate](../01-substrate/compute.md) is a claim about dollars per unit of capability, and that ratio is exactly what a loop attacks, so [every timeline the blog leans on](line-shaft.md) compresses and the institutional-lag backbone snaps.

![Each robot builds the next, smaller and faster. The human engineer started the line and is already optional.](img/shrinking-line.avif)

That assembly line is the whole debate in one image. Everything turns on one question about it: is each handoff faster than the last, or just another handoff.

So this is the post where the blog stops assuming the answer and states how it watches the question.

## The number that matters is private

Start with the honest epistemic problem, because it shapes everything downstream. The leading indicator for a closing loop is **internal research cycle time per validated experiment**. Not benchmark scores, which measure the *output* of the process. Cycle time measures the process itself, the thing that would be compounding, and the two can diverge for years: by the time output moves discontinuously, cycle time will have been moving for a while.

That number is not public. The thing that matters most is measured only inside organizations with the least incentive to publish it honestly, and, worse, the incentive points different directions depending on the week, understate for safety optics, overstate for fundraising. The corpus's rule for adversarial epistemics like this: update on *revealed behavior*, capex commitments, talent hoarding, government briefings, not on public claims in either direction. And do not treat the absence of public evidence as evidence of absence.

![The gauge that answers the question is bolted to the wall inside. Everyone outside is measuring the smoke.](img/locked-gauge.avif)

That drawing is the epistemic situation without editorial: one dial, indoors, watched by the people who own the building, and a crowd outside inferring from the chimney. The rest of this post is about being smart about the smoke.

## Three governors, one of them technical

Here is the corpus's central contribution to a debate that is usually conducted as if the only question were technical. Suppose the loop closes. It still has to run through three governors, and the framing omission of the entire fast-takeoff literature is that two of them are not technical at all.

**The verification governor.** A research loop needs to know whether an experiment worked. Where that judgment is cheap, kernel optimization, architecture search, benchmark performance, the loop can run at machine speed. Where it requires knowing whether a research *direction* was right, [the master asymmetry](cheap-scoreboard.md) applies to AI research itself: the Six-Month Loop does not spare the people who built it. So the loop accelerates the parts of research with cheap ground truth and leaves the taste-and-direction parts where they were, which is the multiplier regime, not the takeoff regime. Whether that ceiling sits high enough to matter is the genuine technical crux.

**The physical governor.** A closed loop still needs [chips from fabs](taiwan-gray-zone.md) and [power through substations](silicon-electrons-permits.md). Efficiency substitutes for dollars, but it does not substitute for a transformer with a three-year lead time. A research loop that outruns its own supply chain converts into queued capacity, not deployed capability.

**The financial governor.** The newest to the corpus and the least discussed anywhere: if the loop starts working, returns on capital rise, which [raises the neutral rate](success-tax.md), which raises the cost of financing the next round of infrastructure. **Success makes the next step more expensive to fund.** That is negative feedback on takeoff speed operating through the bond market, entirely independent of how the technical question resolves.

![One straining engine, and the brake levers are held by a researcher, a lineworker, and a banker. Only one of them wears a lab coat.](img/three-brakes.avif)

Look at who is holding the levers in that drawing: a researcher, a lineworker, and a banker. The takeoff debate argues endlessly with the first one and forgets the other two exist. Together the three argue that fast-takeoff scenarios are **over-weighted relative to their technical plausibility**, not because the technical case is wrong but because two of its three brakes are missing from the model. The honest caveat, stated as the corpus states it: these are *rate* limits, not ceilings. None of them says the loop cannot close. They say that if it does, the observable consequence is likelier to be **a decade of unusually fast progress than a discontinuity**, and those are meaningfully different things to prepare for.

## How to watch a private number from outside

Now the practical part: the proxies, each named so it can be scored rather than gestured at.

**Decoupling of output from headcount.** If a lab's release cadence and result quality rise while research headcount stays flat, something other than people is producing the marginal research. Hiring data and org-size reporting are public even when cycle time is not.

**The follower gap.** A genuinely compounding loop is private by construction: it should *widen* the frontier lab's lead, because compounding compounds. The observed pattern is the opposite, and this blog [already carries it](falling-floor.md): the open-weight tier trails the frontier by three to six months, and the gap has been shrinking. The corpus is emphatic about the reading, and it is the single most common error in takeoff discourse right now: **a narrowing follower gap is not evidence of recursive self-improvement. It is evidence against it**, the signature of a shared productivity multiplier diffusing with the methods, a loop that behaves like a public good.

![The leader is straining. The pack is drafting three to six months back, and one of them is yawning.](img/peloton.avif)

That race is the measured 2026 pattern. A real takeoff looks like the leader vanishing up the road while the pack argues about gearing. Nobody has vanished.

**Strain on the governors themselves.** This is the falsifiable heart of the framework. Rates, interconnection queues, and the verifiable-versus-unverifiable capability gap are all public series, and the governor model makes a prediction with teeth: real loop progress should show up as *strain*, capital costs rising, queues lengthening, verifiable domains pulling further ahead, before it shows up as discontinuity. Put the two positive signals together and you get **the Takeoff Signature**: the frontier pulling away from followers *while* the governors visibly strain. That conjunction is what would move the map. A quiet takeoff with relaxed governors is the one pattern the model says should not exist, so observing it would falsify not just the estimate but the framework, which is exactly what a good indicator is for.

## "You cannot rule out the discontinuity from outside"

Correct, and this post does not. What it can do is name the two mistakes that dominate public reasoning about it.

The first is scoring the wrong evidence, covered above: release-day hype, benchmark jumps, and follower-gap compression all get read as loop evidence when they are respectively noise, output, and *counter*-evidence.

The second is subtler, and the corpus files it as the counter-argument the technical debate underweights: **rising difficulty**. Each doubling of research throughput consumes the easiest remaining wins. If the difficulty of the next capability increment rises about as fast as throughput compounds, which is what the long history of log-linear scaling curves suggests, then a closed loop yields exponential input growth against exponentially rising cost per result, and the observable output stays roughly linear. Read that twice, because it is the strangest sentence in the whole uncertainty: **the loop closing and progress staying steady are compatible.** From outside, "the loop failed to close" and "the loop closed against rising difficulty" may not be distinguishable for years. Anyone who tells you the absence of visible takeoff settles the question, in either direction, has not done the arithmetic.

![Running faster, gaining nothing, because the stairs move too. From the rail, that looks exactly like standing still.](img/down-escalator.avif)

The robot on that escalator may be sprinting twice as fast as last year. From where the bored attendant leans, it has not moved. Both readings are correct, which is the maddening epistemic core of this whole uncertainty.

What resolution would force, per the corpus: if the technical trigger fires *and* the governors are not binding, pull every timeline forward, re-read the capex wall as soft, and treat [learned verification](../06-uncertainties/learned-verification.md) as urgent, since a closed loop with cheap learned verifiers is the one genuine discontinuity case in the register. If the technical trigger fires and the governors bind, log a local research win and leave the map alone. The conjunction moves the map. The first conjunct alone does not.

## What would prove this post wrong

- **The Takeoff Signature appears.** Frontier pulling away, governors straining, by the scorecard row's end-2029 horizon. The row resolves against this post's 80%, and the corpus rewrites its timelines wholesale, which it has pre-committed to doing rather than explaining the evidence away.
- **A quiet takeoff.** Capability jumps discontinuously with no prior governor strain and no widening gap. Worse than being wrong about the estimate, this breaks the governor model itself, and the honest response is written in advance: the framework failed, not just the number.
- **Revealed behavior diverges from public posture.** If labs' capex, hoarding, and briefing behavior starts implying a much shorter internal doubling time than their public research suggests, weight the behavior. This post pre-registers that rule so it cannot be quietly abandoned later.
- **The multiplier is bigger than "boring."** If AI-accelerated research holds the current regime but at 5x rather than 1.5x, the institutional-lag posts in this blog age faster than their falsifiers anticipated even with no loop at all. Continuity of regime is not continuity of pace.

---

The fast-takeoff debate is usually staged as physics against physics, one side's exponential against the other's ceiling.

The corpus's contribution is smaller and more useful: two of the three brakes are a supply chain and a bond market, both public, both measurable, both already carrying half this blog. Watch the brakes. The engine will not send a press release.
