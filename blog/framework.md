---
title: The Framework
dek: The posts on this blog keep using the same handful of named concepts. This page says what each one claims, how they fit into one model, and where each claim grounds out in the corpus.
date: 2026-08-01
tags: method, concepts
page: true
takeaway: One model, asked as five questions. Every post is an answer to one of them.
corpus: 00-overview/README.md, 01-substrate/inference-economics.md, 01-substrate/data.md, 01-substrate/energy.md, 02-games/3-firms.md, 06-uncertainties/taiwan.md
---

# The Framework

Each post here reads on its own, but they are not independent essays. They are one model, taken apart into pieces small enough to argue with. If you are new, read these three in this order:

1. [AI Is Superhuman Wherever the Scoreboard Is Cheap](cheap-scoreboard.md), the capability model
2. [You Cannot Own a Falling Floor](falling-floor.md), the economic model
3. [The Bottleneck Migrates](silicon-electrons-permits.md), the physical model

Together they say where AI capability goes next, why having it stops being worth anything, and what scarce thing the race runs into instead. [The Taiwan post](taiwan-gray-zone.md) is the risk model underneath all three: the one assumption that, if it fails, takes the rest of the document with it.

The model itself fits in five questions. Everything on this blog, and most of the corpus, is an answer to one of them.

## Where does capability go next?

Wherever checking the answer is cheap. A training loop needs a signal, and domains split by what that signal costs: **the Millisecond Loop**, where a unit test or a proof checker grades millions of attempts a day for free, against **the Six-Month Loop**, where finding out whether the advice was any good takes half a year and an argument. Capability flows downhill toward the cheap side, which is why the same model is superhuman at competitive programming and merely fine at judgment. "Cheap" is shorthand for three properties, cheap, faithful, and hard to game, and the post stress-tests all three against autonomous driving, the strongest counterexample on offer.

The corpus grounds this in [the data wall](../01-substrate/data.md) and files the one development that would break it, learned verification, as a [framework-level risk](../06-uncertainties/learned-verification.md).

## What happens to the price of what it can already do?

It collapses, on a schedule. Cost per token at fixed capability fell roughly 100 to 1000× in two years, which is **the falling floor**: pick any level of intelligence, and once it exists at all it is nearly free within about two years. **The Two-Year Clock** is the product-design consequence, and it runs on everybody. A moat made of model access depreciates on a published schedule.

The cost decline is close to physics. The *price* decline is politics, carried by open-weight competition, and the corpus tracks the two lines separately in [inference economics](../01-substrate/inference-economics.md).

## Who captures the surplus?

Mostly not the people spending the money. When every firm has to adopt and none gains an edge by adopting, spending becomes defensive: **the Red Queen**, the standard fate of a general-purpose technology, argued in [the firms game](../02-games/3-firms.md). The surplus passes through to customers and to whoever owns the short list of things that do not get cheaper: energy, distribution, licences, liability capacity, trusted data, senior judgment.

The stable position is to **own the scoreboard**: be the party that defines correct, carries the liability for that judgment, and holds the data that settles the argument.

## What physical constraint binds next?

Not chips. The bottleneck migrates, silicon to electrons to permits, and by 2028 the rate-limiting step on US frontier AI is **the Permit Window**: interconnection queues, environmental review, turbine order books. The tell is that variance across US power markets exceeds variance across countries, which is how you know the constraint is institutional rather than physical. Grounded in [energy](../01-substrate/energy.md).

## What would break all of this?

Two different kinds of failure, and they get separate instruments.

The first is being wrong about an assumption. The big one is Taiwan, and the trap there is **the Gray Zone**: the likely failure is not the invasion everyone watches for but a repricing, insurance premia and export licences, a valve rather than a switch. The general lesson is the **scored versus consumed** gap: the assumption you wrote down and scored is often weaker than the one your conclusions actually rest on, and **the Green Dashboard** will glow green all the way through the failure of the second one. That audit method comes from [the Taiwan page](../06-uncertainties/taiwan.md) and applies well beyond it.

The second is being wrong about a forecast, which is what [the scorecard](forecasts.md) exists to catch: every claim that can be caught failing, with a probability, a resolution date, and a frozen rule.

## The lexicon

For reference, every named concept in one place. The claim column is deliberately one sentence. The post is where it earns it.

| Concept | The claim, in one line | Where |
|---|---|---|
| Millisecond Loop, Six-Month Loop | Capability tracks the cost of checking answers, not the difficulty of producing them | [Scoreboard](cheap-scoreboard.md) |
| Own the scoreboard | The durable position is defining correct and carrying the liability for it | [Scoreboard](cheap-scoreboard.md) |
| The falling floor | Any fixed capability level becomes nearly free within about two years | [Falling floor](falling-floor.md) |
| The Two-Year Clock | A moat made of model access has a published expiry date | [Falling floor](falling-floor.md) |
| The Red Queen | Mandatory adoption with no relative gain, so the surplus passes through to buyers | [Falling floor](falling-floor.md) |
| The Permit Window | The binding constraint on US AI is administrative, not physical | [Bottleneck](silicon-electrons-permits.md) |
| The Gray Zone | Taiwan fails by repricing long before it fails by invasion | [Taiwan](taiwan-gray-zone.md) |
| Scored vs consumed | The assumption you scored is weaker than the one your conclusions rest on | [Taiwan](taiwan-gray-zone.md) |
| The Green Dashboard | Indicators built for the dramatic failure stay green through the actual one | [Taiwan](taiwan-gray-zone.md) |

If a future post coins something and it is not on this list within a week, that is a bug in this page.
