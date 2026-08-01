---
title: Sell Ground Truth
dek: Generation is free and checking is not, so the durable businesses of the next decade sell verification. Here is the build list, ranked by which of it actually gets funded by 2031, and which stays an essay.
date: 2026-08-09
tags: verification, builders, startups
takeaway: The corpus's whole argument compresses to one sentence of advice: the single most useful thing to build is anything that makes verification cheap. The catch is that most verification is a public good, and public goods do not get built by default.
corpus: 02-games/5-information.md, 06-uncertainties/learned-verification.md, 01-substrate/data.md, 03-domains/cognitive/insurance.md, 07-indicators/governance.md
---

# Sell Ground Truth

A dozen posts into this blog, a reader could reasonably file the whole project under diagnosis: the scoreboard decides capability, the floor falls, the permits bind, the juniors vanish, the underwriters gate, the signals die. Very well, says the builder in the audience. What should I *make*?

The corpus has an answer, and it is not a hedge. Its hundred thousand words compress, by its own account, into one sentence of advice: **the single most useful thing to build is anything that makes verification cheap.**

The reasoning is the convergence this blog has been circling since [the first post](cheap-scoreboard.md). Verification is the bottleneck on capability, because training needs cheap ground truth. It is the bottleneck on information markets, because [the signals died](dead-signals.md) when generation got free. It is the bottleneck on hiring, on credentials, on [what insurers will cover](insurance-ceiling.md). And it is an inelastic complement, which per [the firms game](../02-games/3-firms.md) is where value accrues when everything around it gets cheap. One scarcity, five markets. Generation became free and checking did not, and every durable position in the next decade is some form of standing on that gap.

So this post is a forecast about construction: which verification infrastructure actually gets built and funded between now and 2031, which stays an essay, and the one rule that separates them.

## The rule: verification is a public good until somebody owns the loss

Here is the uncomfortable economics that the "just build verification" advice usually skips. Most verification is a commons on *both* sides. The producer of a careful check cannot capture most of its value, because the check's benefit leaks to everyone who relies on the same judgment. The corpus's [evaluator-commons argument](../02-games/5-information.md) is blunt: everyone cites the verification layer and nobody funds it, and rebuilding it requires coordination among free-riders, which is the slow kind of problem.

Which yields the sorting rule for the whole build list, worth a name because every entry below is an application of it. Call it **the Loss-Owner Rule**: verification gets built where a single party internalizes the full cost of being wrong, and stays undersupplied everywhere else. The underwriter pays when the claim is bad. The clearinghouse pays when the trade breaks. The employer pays when the hire fails. Where the loss has an owner, the checking gets funded. Where the loss is diffuse, the checking gets a conference and a white paper.

![The shop sells whistles, stopwatches, and scoreboards, and the queue outside includes everyone who just discovered their old referee stopped working.](img/scoreboard-shop.avif)

That shop is the commercial form of the whole corpus. Notice what it does not sell: content, models, generation of any kind. The queue is full of institutions that spent a century outsourcing their checking to the cost of writing, and now need it sold back to them as a product.

## The build list, sorted by that rule

**Gets built, 2027 to 2031.** Capture-time provenance: attestation chips and content credentials stamped at the sensor, because [yesterday's post](dead-signals.md) argued detection loses and attestation wins, and because camera makers, platforms, and newsrooms each own a legible loss when forgery embarrasses them. The corpus's [C8 indicator](../07-indicators/governance.md) tracks exactly this. Watch for default-on shipping in flagship phones, which is the scorecard row this post opens. Second: automated labs and instrumented data collection, the move [the scoreboard post](cheap-scoreboard.md) called buying cheaper ground truth, funded because a single lab captures the full value of the experiment reporting its own result. Third: audit and evaluation infrastructure for insurers and courts, logging, incident forensics, the measurement layer [underwriters demand as a condition of coverage](insurance-ceiling.md), funded because the carrier owns the loss. Fourth: invigilated and synchronous assessment at scale, because selective employers own their mishires and [the education page](../03-domains/cognitive/education.md) already predicts the shift by 2030.

**Stays an essay, mostly.** Public epistemic infrastructure: open fact-checking, common-good provenance registries, civic reputation systems. Diffuse loss, no owner, grant-funded at one percent of need. General-purpose "truth layers" for the open web, same diagnosis, sadder brochure. And universal detector tools, which fail the deeper way: not underfunded but structurally doomed, cycling through generations that erase their own signal.

**The swing category.** Portable, staked track records, the cryptographic apprenticeship record, the vouching graph with skin in the game. This is the one that could rebuild the outsider channel that died with the cover letter, and [the signals post](dead-signals.md) called it a design question rather than a market inevitability. It sits in the swing category because the Loss-Owner Rule stalls on it: the worker owns the loss of being unverifiable, but workers are the party least able to fund infrastructure. If an employer consortium or a guild funds it, it ships. If not, it joins the essays.

## "A model will just verify everything, and this list is a training-data snapshot"

This is the strongest objection to the entire corpus, not just this post, and it has [its own uncertainty entry](../06-uncertainties/learned-verification.md) at framework-breaking stakes. If learned verifiers get good enough, reward models, process supervision, critics that judge legal arguments and research taste, then verification stops being scarce, the scoreboard hill flattens, and a business built on selling ground truth is a business built on a temporary property of 2020s training methods.

The corpus's honest reply has three layers. The recursion layer: a learned verifier is only as good as what trained it, and where genuine ground truth never arrives, self-verification drifts confidently, so the objection assumes its own conclusion in exactly the domains that matter most. The weakness of that reply, which the corpus states against itself: human expertise is also mostly peer-validated without external ground truth, and human expertise runs civilization. If learned verification merely matches peer review, that is enough for most economic purposes.

Then the layer this post actually banks on: the likeliest resolution is *tiered*. Checking process, was the reasoning well-formed, were the steps standard, is learnable, because process has abundant training signal. Checking outcome truth in slow-feedback domains, did the strategy work, was the rare diagnosis right, is starved of training data by the same slowness that made human verification expensive there. Learned verifiers master the first tier well before the second. For a builder, that tiering is not a threat but a product boundary: everything in the first tier becomes a feature of the model stack, and everything in the second tier, outcome truth, attested provenance, staked reputation, liability-grade audit, stays scarce and stays sellable. Build on the second tier. The first tier is the models' side of the gap, and it is closing from their side.

And in the meantime, the institutional cushion: courts, licensure, and [insurance exclusions](insurance-ceiling.md) all assume a human checker, and a verifier that works must still be accepted before deployment reorders. That lag is a moat measured in years, rented rather than owned, and worth exactly its duration.

## What would prove this post wrong

- **Learned verification wins outright, untiered.** Capability gains in no-ground-truth domains close the gap with verifiable ones, a judge model takes production liability somewhere real, and the sell-ground-truth thesis becomes a stranded asset thesis. That is scorecard row 8 already on the board, and this post inherits its fate.
- **Attestation breaks in public.** A compromised attested camera is a *more* convincing forgery than an unattested file. A high-profile attestation break early could discredit the channel faster than detection discredited itself, and the gets-built list loses its flagship.
- **The provenance row misses.** If default-on capture attestation is not shipping in flagship phones by the end of 2029, the infrastructure bet was early or wrong, and C8 says so.
- **The commons gets funded anyway.** If public epistemic infrastructure draws real state or platform money at scale, the sorting rule was too cynical, and this post will be delighted to have underestimated civic capacity. The record to date is not encouraging, and the rule stands until the record changes.

---

Every gold rush produces the same joke about selling shovels. The joke is usually wrong, because shovels were never scarce.

This one is different. The scarce input is not the digging. It is knowing whether what came out of the hole is gold, and the parties who will pay to know are exactly the ones who lose money when it is not. Sell them that.
