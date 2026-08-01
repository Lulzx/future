---
title: AI Is Superhuman Wherever the Scoreboard Is Cheap
dek: AI is superhuman at competitive programming and merely fine at telling you whether to take the job. What separates the two is the cost of checking the answer.
date: 2026-07-30
tags: verification, capability, careers
takeaway: Capability flows downhill toward cheap ground truth. Stand where the scoreboard is expensive, or own the scoreboard.
corpus: 01-substrate/data.md, 06-uncertainties/learned-verification.md, 03-domains/cognitive/software.md, 02-games/4-labor.md
---

# AI Is Superhuman Wherever the Scoreboard Is Cheap

Here is a pattern that looks completely arbitrary until you find the single rule underneath it, at which point it stops looking arbitrary forever.

AI is now superhuman at competitive programming. Superhuman at formal mathematics. Better than most professionals at finding software vulnerabilities. It plays board games at a level no human being will ever reach again, and nobody even finds that remarkable anymore.

AI is also, after all of that, roughly *fine* at telling you whether to take the job offer. Fine at sensing when a negotiation has quietly turned against you. Fine at taste.

The obvious explanation is that the first list is easy and the second list is hard. That explanation feels correct and is completely wrong. Competitive programming is not easier than having good judgment about people. Ask literally any programmer.

The real rule is stranger, and once you see it you cannot stop seeing it:

**AI becomes superhuman at anything where checking the answer is cheap, and stays mediocre at everything where checking the answer is expensive.**

Not doing. **Checking.**

To see why, we have to go back to the moment the industry ran out of internet.

## The internet ran out

For several years the recipe for a better model was gloriously simple. Get more text. Use more compute. Get a better model. It worked so reliably and for so long that people started treating it as a law of nature.

Then the text ran out.

The rough numbers: somewhere around **10^14 useful tokens** of high-quality human text exist in the world. Models had already been trained on about **10^13** of them. Which leaves one order of magnitude of headroom, and it is the *low-quality* order. The good stuff was eaten first, the way it always is.

![The remaining headroom is one order of magnitude, and it is the low quality order.](img/dry-well.avif)

That is the well. The robot is scraping the bottom of it, and what is coming up in the bucket is mud.

This did not cause a crisis and it did not slow anything down, which is the part people consistently get wrong. It caused a **redirection.** Denied more text, the frontier pivoted to synthetic data, to reinforcement learning on verifiable outcomes, and to self-play in domains where you can cheaply check whether an answer was right.

That pivot could not possibly have been neutral across domains. It made the entire enterprise dependent on something that is distributed across human activity with spectacular unevenness: **a cheap way to find out whether the answer was any good.**

## The mechanism, which is almost insultingly simple

A training loop needs a signal. Something that says *yes, more of that,* or *no, less of that.* Millions of times over.

So consider two loops.

**Loop one is code with a unit test.** The model writes code. The test runs. It passes or it fails. That is your signal. It costs approximately nothing, it takes milliseconds, it needs no human at all, and it can run **millions of times a day**, forever, all night, while everyone is asleep. Call it **the Millisecond Loop**.

**Loop two is career advice.** The model gives advice. And now, to discover whether that advice was any good, you wait six months and observe how someone's life went. Then you attempt to disentangle the effect of the advice from eleven other things that also happened. (Good luck. Nobody has ever done this convincingly, including the person whose life it was.)

Call this one **the Six-Month Loop**. It runs approximately **never.**

![Same model, same budget. The only thing that changed is what it costs to find out whether the answer was any good.](img/two-loops.avif)

Same robot. Same compute. Same everything. The one on the left has done five million reps since breakfast. The one on the right is sitting on the floor next to a clock, waiting, and will still be waiting next quarter.

There is no clever architecture that fixes a loop you cannot run.

## Which makes the whole map predictable in advance

Once you accept that capability flows toward cheap verification, you can write down where AI will be strong and weak without knowing anything at all about the models. Just order the world by how much the ground truth costs:

| Fast | Medium | Slow |
|---|---|---|
| Formal math, competitive programming | Computational chemistry, materials | Experimental biology |
| Code with tests | Narrow imaging diagnostics | Clinical judgment |
| Structured retrieval | Legal document analysis | Negotiation, taste |
| Games with defined win conditions | Forecasting with resolution | Social science, policy |
| Cyber exploits (self-verifying) | Grid dispatch and markets | Specialty harvest, last-metre delivery |

Now picture that table as a hill.

![Same robots, opposite outcomes, decided entirely by which side of the hill the work happens to sit on.](img/verification-slope.avif)

The robots sliding down the left side are not smarter than the ones straining on the right. They are the same robots. One group happens to work in a domain that grades its own homework, so gravity does the job for them. The other group is shoving rocks uphill, because every single training example needs an expensive human being to say whether it was any good.

Everything in the fast column runs a Millisecond Loop. Everything in the slow column runs a Six-Month Loop. That is the entire table.

So when a domain forecast surprises you, this is almost always why. Not model size. Not funding. Not how many brilliant people are working on the problem. Just: what does it cost to find out if the answer was right.

## "But models can make their own training data"

This is the standard objection and it deserves a real answer rather than a brush-off, because it is a genuinely good objection. It also fails in a way that makes the problem *worse*, which is the interesting part.

Unfiltered synthetic data makes models worse. A model trained on its own output drifts toward its own priors and gradually disappears up itself.

What makes synthetic data actually work, every single time it has worked, is a **filter** that discards everything except the verified-correct samples. Self-play in games. Proof-checked mathematics. Code that passes its tests. Every synthetic data success story is a success *because the domain had a cheap verifier sitting there to do the filtering.*

![Same input, same volume, and the only difference is whether there is a filter in the neck of the funnel.](img/two-funnels.avif)

Both funnels are being fed the same slurry. The one on the left has a sieve, so neat clean cubes come out the bottom. The one on the right has no sieve, so what comes out is exactly what went in.

Synthetic generation is not an escape from verification. It is an amplifier wired **in series** with it. Where ground truth is cheap it multiplies your training signal enormously. Where ground truth is expensive it multiplies approximately nothing.

The pivot to synthetic data did not dissolve the asymmetry. **It is the mechanism that created it.**

## "Then why can't the car drive itself?"

If the rule is true, autonomous driving should have been easy. It has everything the fast column has. Simulators that run millions of miles a night. Fleet telemetry by the petabyte. Defined metrics, disengagements and crashes per mile. More capital than any slow-column domain has ever seen. And it still took twenty years to reach robotaxis in a handful of carefully mapped cities.

This is the best counterexample anyone has, and it does not break the rule. It exposes what the word "cheap" was quietly carrying.

A driving simulator is a cheap scoreboard for the wrong game. It grades performance in the simulator's world, and the residue between that world and a real road, the sim-to-real gap, is exactly where the difficulty lives. The signal is cheap but it is not faithful. Meanwhile the faithful signal, what happens across millions of real miles, is cheap in the middle of the distribution and expensive at the tail, because the informative events are crashes, and you cannot run crashes all night while everyone is asleep. Driving is a Millisecond Loop welded to a Six-Month Loop, and the Six-Month half is the half that matters.

So unpack the rule, because "cheap" was doing three jobs:

**Capability flows to domains where the scoreboard is cheap, faithful, and hard to game.** Cheap: millions of attempts get scored economically. Faithful: the score measures the outcome you actually wanted. Hard to game: the model cannot raise the score without doing the task.

A unit test scores well on all three, which is why code sits at the top of the fast column. A benchmark often fails the third, which is why models ace exams that stop predicting the job. A simulator fails the second, which is why a billion simulated miles bought less than anyone expected. When a domain looks like an exception to the rule, check the three properties one at a time. Usually one of them quietly failed while the cheap part held.

## The bleak part

There is a second-order problem here that gets almost no attention, and it is the one I would most like to turn out to be wrong about.

Progress in the slow column runs on human preference and outcome labels. Somebody experienced has to look at the output and say whether it was good. Which means the Six-Month Loop does not merely run slowly. It runs on a fuel: **senior judgment.**

And senior judgment is exactly what this transition is [draining](../02-games/4-labor.md), by breaking the path that produced it. You become a senior person by spending a decade as a junior person, doing exactly the work that is being automated first.

![The slow domains run on the one resource this transition is cutting off at the source.](img/sawn-ladder.avif)

The robot has climbed to the top and is drinking from the expert's cup. The rungs that used to manufacture new experts are lying on the ground.

So the slow domains train on the very resource whose supply is being eroded, and the fast domains have no such dependency, because a unit test does not require a twenty-year career to write. That loop runs in the wrong direction. It is a reason to expect the gap between the columns to get **wider** before it gets narrower.

## Three ways to misread the table

The table is useful, which is exactly why it gets abused. Three errors, roughly in order of how often I run into them.

**One: treating benchmark progress as domain progress.** A model aces the bar exam and everyone concludes lawyers are finished. But the exam is a scoreboard and the job is not. The exam exists *because* it is cheap to grade. That is the entire reason anybody invented it.

![The exam was selected for being cheap to grade. The job was not selected for anything.](img/exam-vs-job.avif)

The robot on the left genuinely did do very well. The mess on the right is the actual job, and nobody is grading it.

**Two: averaging a domain.** Medicine is fast in narrow imaging and slow in clinical judgment. Filing the average as "medium" destroys the only useful information you had, which was the deployment path. Tools first, autonomy much later, and the boundary between them sits precisely where verification cost sits.

**Three: reading the ordering as an employment forecast.** It is not one. The table orders *capability growth*, not job destruction. Superhuman code generation can raise developer headcount through sheer demand expansion while still being the fastest column on the board. Software is the worked example, and it is the one people manage to get wrong in both directions simultaneously.

## Can you cheat your way off the slow side?

Partly. You cannot erase the table, but you can move around inside it, and the move is always the same: **go and buy cheaper ground truth.**

- **Automated labs**, so the experiment reports its own result in machine-readable form
- **Instrumented robotics**, manufacturing the interaction data that never existed publicly
- **Outcome-priced contracts**, so the customer's actual result becomes your training label

Each of these drags a domain leftward. None of them deletes a column. All of them cost real capital, which is why it happens first wherever a single buyer can fund the instrumentation and then capture the return.

Robotics shows the underlying scarcity most starkly, because of a thing that simply does not exist: **there is no internet of manipulation.**

![Text and code had a public corpus lying around for the taking. Physical interaction never did.](img/empty-shelf.avif)

Text had that vast library sitting there, free, already written. Physical interaction has an empty room and one glove. This is why robotics lags even when vision-language models transfer beautifully. The binding constraint was never model size. It is samples in the world, and nobody collected them.

## What would blow this up

One thing, and the corpus files it as a framework-level risk rather than a parameter uncertainty: **learned verification.**

If models can bootstrap reliable verifiers for the soft domains, training a judge on sparse human labels that then generalizes properly, the series wiring breaks and the amplifier runs open-loop. Expensive domains stop lagging. The table reorders. A very large fraction of the domain-by-domain forecast built on top of it fails with it.

So score it honestly, which means watching **production depth in unverifiable domains, not demos.** A judge model that impresses in an evaluation is not evidence of anything. A judge model that a company is willing to put between itself and a lawsuit is.

---

The practical version of all this is short and mildly uncomfortable.

If your work has a cheap scoreboard, something faster than you will be running that scoreboard within a few years, and the market value of being excellent at it collapses toward the cost of compute.

If your work has no cheap scoreboard, you are safer. But notice that the thing keeping you safe is the same thing that makes it hard to prove you are any good, which is its own career problem and always has been.

There is a third position, and it is the stable one.

![The players are working extremely hard. The one holding the whistle is not.](img/own-the-scoreboard.avif)

**Own the scoreboard.** Be the party that defines what counts as correct, carries the liability for that judgment, and holds the data that settles the argument. Verification is simultaneously the technical bottleneck and the economic opportunity, and that is not a coincidence. Both are downstream of the same fact: generation became free, and checking did not.
