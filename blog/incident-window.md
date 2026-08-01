---
title: The Incident Picks the Rules
dek: A serious AI-attributed incident is likelier than not by 2031, and the regulatory architecture of the 2030s gets written in the 18 months after it. Which rules win was decided earlier, by what was sitting on the shelf.
date: 2026-08-06
tags: governance, incidents, policy
takeaway: Coordination is event-driven, the window after the event is about 18 months, and whatever draft is ready when it opens is what becomes law. The quality of the 2030s regime is being set now, in documents nobody is reading.
corpus: 02-games/2-nations.md, 04-timelines/2028-2032.md, 03-domains/contested/state-capacity.md, 07-indicators/governance.md
---

# The Incident Picks the Rules

Here is a strange pattern in how modern societies govern dangerous technologies, and once you see it you will find it everywhere: the rulebook is always written second.

Aviation safety architecture, nuclear regulation, financial oversight, pharmaceutical approval. In every case, the governing regime arrived after a disaster, drafted by people reacting to one specific, vivid failure rather than to a general argument about risk. Decades of careful essays about what could go wrong achieved approximately nothing, and then one crash, one meltdown, one collapse produced in months what the essays could not produce in years. Sarbanes-Oxley passed nine months after Enron. Dodd-Frank arrived about twenty-two months after Lehman. The 737 MAX grounding-and-reform cycle ran on the same clock.

[The corpus](../02-games/2-nations.md) compresses the pattern into four words: **coordination is event-driven.** Not reason-driven. And it commits to the forecast this post is about, so here it is up front, where it can lose.

A serious AI-attributed incident, most plausibly financial, a correlated cyber event, or a biological near-miss, arrives between 2027 and 2031. The regulatory architecture that governs AI through the 2030s gets written in roughly the **18 months** after it. And, the part that matters if you can act on it: the quality of that architecture was mostly determined *before* the incident, by which drafts were mature enough to move when the window opened.

## Why 18 months, and not five years or five weeks

The window is not a metaphor. It has a mechanism: political salience decays. After a disaster, there is a period in which legislators must be seen to act, opposition is suspended, and the question on the table is not whether to regulate but which text to vote on. That period runs out. After roughly two years an incident stops being a mandate and becomes a talking point, and the machinery returns to its default state, which is gridlock.

So the constraint inside the window is readiness, not wisdom. Whatever text is mature, defensible, and technically complete when the window opens is what passes, drafting quality be damned. Call the two objects in this race **the Window** and **the Shelf**: a short period in which anything ready can become law, and the stack of pre-written architectures waiting for it.

![The window is open, the light is pouring in, and the only person who matters is the one who arrives holding a finished draft.](img/open-window.avif)

Look at who is moving in that drawing and who is just waking up. The sprinting figure did not become influential when the window opened. They became influential years earlier, when they finished the binder. Everyone still at their desk will spend the window writing a first draft, and the window does not last long enough for first drafts.

## The incident picks its own author

Here is the forecast's second layer, and it is the one almost no one prices: *which* incident arrives determines *whose* shelf gets used, because jurisdiction follows the mechanism of the failure.

| The incident | Who holds the pen | What the regime emphasizes |
|---|---|---|
| Market dislocation with AI in the chain | Treasuries, market regulators, central banks | Disclosure, model risk, liability |
| Correlated insurance or cyber event | Insurers and reinsurers, then legislatures | Backstops, coverage terms, audit |
| Consumer or clinical harm | Health and product-safety agencies | Approval gates, professional sign-off |
| Kinetic event involving autonomy | Defense and export-control establishments | Controls, classification, military rules |

The corpus ranks finance and insurance as the most likely forcing events, not because they are the worst risks but because their feedback is fastest and their institutions already have crisis muscle. Warfare is the least likely and the least recoverable. And the ranking implies something uncomfortable: the 2030s regime will be well fitted to whichever war happened to come first, and thinly fitted to everything else. A finance-triggered event produces model-risk rules that say nearly nothing about biosecurity. The architecture you get depends on which failure got the microphone, not on which risk was largest in expectation.

## "Surely the experts write the rules either way"

Someone writes them. The question is who, and [the state-capacity page](../03-domains/contested/state-capacity.md) gives the cold answer: the text that wins is the text that is ready *and technically literate*, and if the state cannot measure, hire, or draft, then the ready-and-literate text is industry's.

The corpus puts a number on it: within 18 months of a salient incident in a major jurisdiction, binding rules get enacted or formally proposed at high probability, but roughly **50% of the operative technical content is industry-originated** unless a public measurement institution already exists. That outcome will not be reported as regulation failing to arrive. It arrives, with hearings and signatures. It is regulation as capture by default, and it is the modal case, because in most jurisdictions the only people who can define an evaluation, an audit, or a compute threshold in enforceable language currently work for the companies being regulated.

Which converts this post's forecast into advice for exactly one audience. If you work on AI governance, the deliverable that matters is not advocacy, a framework, or a post like this one. It is statute-shaped text, defensible in committee, sitting finished in a drawer. The window will not wait for it to be written.

## What the rules can and cannot reach

One more asymmetry, from the [leaky-bucket structure](../02-games/2-nations.md) of the whole game. Open weights and distillation mean that post-incident rules in one bloc do not contain capability globally. So whatever passes will bind what can be enforced locally: liability, procurement, deployment licensing, power siting. It will not bind what would require global verification of training runs, because no verification regime exists and the lever that could have built one, compute tracking, is being spent as a race instrument instead.

Expect the resulting architecture to look lopsided and to be described as a failure of nerve. It will actually be a map of enforceability. Immobile, capital-intensive layers, frontier training, grid interconnection, get real rules. Mobile layers, deployment, fine-tuning, talent, leak to whichever middle power declines to adopt the rules, and middle powers face standing rents for declining. The enforceable residue is local. That is also why [the insurance post](insurance-ceiling.md) matters as much as this one: liability and coverage are the local instruments, and they were binding before the legislature sat down.

## What would prove this post wrong

- **No incident by the end of 2031.** The event-driven claim weakens and the corpus logs a revision. The alternative reference class is privacy regulation: harms that stay diffuse, gradual, and unattributable produce rules that are late, weak, and fragmented, with no window at all. This is the live failure mode the corpus admits it may underweight.
- **A binding international agreement with real verification before any incident.** The central claim fails cleanly, and it would be the best possible way to be wrong.
- **The incident produces only theatre.** Statutes pass with no measurement capacity behind them, nothing binds, and the state-capacity caveat swallows the prediction. Rules without inspectors are paper.
- **The 18-month clock runs long.** If a major incident occurs and the two-year mark passes with neither enactment nor formal proposal, the salience-decay mechanism was miscalibrated, whatever eventually passes.

The scorecard carries two rows: the incident arriving by 2031, and, conditional on it, binding rules enacted or formally proposed inside 18 months.

---

Nobody can schedule the incident. That is the half everyone argues about, and it is the half that matters least, because it is not actionable and the other half is.

The window's opening date is unknown. What comes through it is being decided now, in documents with no readers. If you want to know how the 2030s get governed, do not watch the risk. Watch the Shelf.
