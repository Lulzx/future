---
title: The Framework
dek: The posts on this blog keep using the same handful of named concepts. This page says what each one claims, how they fit into one model, and where each claim grounds out in the corpus.
date: 2026-08-11
tags: method, concepts
page: true
takeaway: One model, asked as thirteen questions. Every post is an answer to one of them.
corpus: 00-overview/README.md, 01-substrate/inference-economics.md, 01-substrate/energy.md, 01-substrate/capital.md, 02-games/3-firms.md, 02-games/4-labor.md, 03-domains/cognitive/insurance.md, 09-macro/prices.md, 06-uncertainties/taiwan.md
---

# The Framework

Each post here reads on its own, but they are not independent essays. They are one model, taken apart into pieces small enough to argue with. If you are new, read these three in this order:

1. [AI Is Superhuman Wherever the Scoreboard Is Cheap](cheap-scoreboard.md), the capability model
2. [You Cannot Own a Falling Floor](falling-floor.md), the economic model
3. [The Bottleneck Migrates](silicon-electrons-permits.md), the physical model

Together they say where AI capability goes next, why having it stops being worth anything, and what scarce thing the race runs into instead. [The Taiwan post](taiwan-gray-zone.md) is the risk model underneath all three: the one assumption that, if it fails, takes the rest of the document with it. [The two-products post](two-products.md) is the people model: what the same transition does to the pipeline that manufactures senior judgment. And a run of forecast posts extends it forward: [the money](capex-verdict.md), [the deployment gate](insurance-ceiling.md), [the price index](two-economies.md), [the rulebook](incident-window.md), [the trust stack](dead-signals.md), [the cost of money](success-tax.md), [the build list](what-to-build.md), [the org chart](line-shaft.md), and [the robot-hour](delivered-hour.md).

The model itself fits in thirteen questions. Everything on this blog, and most of the corpus, is an answer to one of them.

## Where does capability go next?

Wherever checking the answer is cheap. A training loop needs a signal, and domains split by what that signal costs: **the Millisecond Loop**, where a unit test or a proof checker grades millions of attempts a day for free, against **the Six-Month Loop**, where finding out whether the advice was any good takes half a year and an argument. Capability flows downhill toward the cheap side, which is why the same model is superhuman at competitive programming and merely fine at judgment. "Cheap" is shorthand for three properties, cheap, faithful, and hard to game, and the post stress-tests all three against autonomous driving, the strongest counterexample on offer.

The corpus grounds this in [the data wall](../01-substrate/data.md) and files the one development that would break it, learned verification, as a [framework-level risk](../06-uncertainties/learned-verification.md).

## What happens to the price of what it can already do?

It collapses, on a schedule. Cost per token at fixed capability fell roughly 100 to 1000× in two years, which is **the falling floor**: pick any level of intelligence, and once it exists at all it is nearly free within about two years. **The Two-Year Clock** is the product-design consequence, and it runs on everybody. A moat made of model access depreciates on a published schedule.

The cost decline is close to physics. The *price* decline is politics, carried by open-weight competition, and the corpus tracks the two lines separately in [inference economics](../01-substrate/inference-economics.md).

## Who captures the surplus?

Mostly not the people spending the money. When every firm has to adopt and none gains an edge by adopting, spending becomes defensive: **the Red Queen**, the standard fate of a general-purpose technology, argued in [the firms game](../02-games/3-firms.md). The surplus passes through to customers and to whoever owns the short list of things that do not get cheaper: energy, distribution, licences, liability capacity, trusted data, senior judgment.

The stable position is to **own the scoreboard**: be the party that defines correct, carries the liability for that judgment, and holds the data that settles the argument.

## Where does the next senior come from?

Currently, nowhere. Junior work was **the Bundle**: a deliverable the firm paid for, and the slow manufacture of a senior professional, sold together because they could not be produced apart. AI lets firms buy the deliverable alone, so each one rationally stops buying the training, and the profession's pipeline dries up while the existing stock of seniors keeps every dashboard green for a decade. The discriminator is **the Recovery Test**: if entry-level hiring misses the next white-collar hiring recovery, around 2027 to 2028, the cut was substitution rather than cycle. Grounded in [the labor game](../02-games/4-labor.md) and [the apprenticeship gap](../06-uncertainties/apprenticeship-gap.md).

## Who is paying, and when do they stop?

Increasingly, lenders, and lenders stop suddenly. Compute, energy, and data are constraints, but capital is **the Verdict**: a continuously re-priced judgment about repayment, the only input that can reverse. And even success does not relax it: a real productivity boom raises the neutral rate, **the Success Tax**, so the build gets discounted hardest in the world where it works, with only **the Demographic Tide** holding the rate down. The build's financing has been migrating from hyperscaler operating cash toward private credit and SPVs, structures whose failure mode is a credit event rather than a spending pause, and headline AI revenue carries **the Echo**, a reflection of the capex financing it. If the 2027 to 2029 correction arrives, it culls by financing type rather than research quality, and the surviving field is smaller and more state-adjacent. Grounded in [capital](../01-substrate/capital.md) and [the labs game](../02-games/1-labs.md).

## What physical constraint binds next?

Not chips. The bottleneck migrates, silicon to electrons to permits, and by 2028 the rate-limiting step on US frontier AI is **the Permit Window**: interconnection queues, environmental review, turbine order books. The tell is that variance across US power markets exceeds variance across countries, which is how you know the constraint is institutional rather than physical. Grounded in [energy](../01-substrate/energy.md).

[The orbital post](no-night-no-neighbors.md) extends the migration one step, to kilograms. Terrestrial power pays **the Night Tax**, the firming cost that makes always-on solar a multiple of its record-cheap headline price, and **the Neighbor Problem**, the ratepayer, commissioner, and hearing attached to every site on the map. Orbit pays neither in that form. It still files with the FCC and shares the sky, but what actually prices the bet is launch mass, an industrial constraint rather than a local institutional one, the kind that factories and learning curves grind down.

## Who signs off on deployment?

An underwriter, before any legislator. A firm deploying autonomy needs coverage, the quote requires a view on failure and correlation, and the view becomes a condition that binds at every renewal. **The Exclusion Map**, what policies refuse to cover, charts where autonomy actually operates, and because correlated failure is the uninsurable core, aggregate capacity converges to **the Insurance Ceiling**: what a handful of reinsurance treaties will bear. The precedent is steam boilers and electrical fire, where insurers wrote the code decades before governments did. Grounded in [insurance](../03-domains/cognitive/insurance.md) and [correlated risk](../06-uncertainties/correlated-risk.md).

## Who writes the rules, and when?

Whoever finished drafting before the disaster. Coordination is event-driven: a salient AI-attributed incident is expected by 2031, and the regulatory architecture of the 2030s gets written in **the Window**, roughly 18 months of post-incident salience in which whatever text is ready can pass. The winning text comes off **the Shelf**, the stack of pre-written architectures, and if no public-interest draft is on it, industry's is. Which incident arrives decides whose shelf gets used. Grounded in [the nations game](../02-games/2-nations.md) and [state capacity](../03-domains/contested/state-capacity.md).

## What still counts as proof?

Only what is witnessed or costly to fake. **The Witness Test** sorts every signal: asynchronous, unwitnessed artifacts (essays, cover letters, reviews, photographs) are dead as evidence, and the replacements are pre-modern: synchronous evaluation, vouching, staked track records, provenance stamped at capture. The rebuild follows **the Loss-Owner Rule**: verification gets funded where one party eats the full cost of being wrong, and stays an essay where the loss is diffuse. Grounded in [the information game](../02-games/5-information.md), with [learned verification](../06-uncertainties/learned-verification.md) as the standing threat to the whole section.

## When does it show up in the numbers?

When the managers turn over, not when the models improve. Installing a copilot is bolting an electric motor to a line-shaft factory: **the Line-Shaft Problem** is that the floor plan, spans of control, junior pipelines, review structures, is where the productivity lives, and incumbents whose expertise the old floor plan encodes do not redesign it. Statistics move by cohort replacement, which is why the corpus holds a visible step-up by 2030 at only 20%. **The Dispersion Test** discriminates: widening between-firm productivity gaps mean the mechanism is working, a rising mean with flat dispersion means it was wrong. Grounded in [the 2028 to 2032 timeline](../04-timelines/2028-2032.md).

## When do the atoms get cheap?

When **the Delivered Hour** crosses fully-loaded labor cost, not when the robot's sticker price falls. Delivered cost divides everything (capital, integration, supervision) by utilization times success rate, which converts three-dollar arithmetic into twelve to twenty-five real dollars, and locates the first big deployments in structured, high-turnover, high-injury settings. Physical presence is the one complement ordinary people own, so this denominator decides how the distribution story ends. Grounded in [robot cost curves](../03-domains/physical/robotics/cost-curves.md) and [complement erosion](../06-uncertainties/complement-erosion.md).

## What does it do to the cost of living?

Splits it along one axis: cognition deflates, everything intelligence cannot manufacture inflates. The gains arrive as **the Ambient Discount**, unpriced and unnoticed, while the costs arrive as the most salient bills a household has, so the statistics mismeasure the transition and the politics run on the half that hurts. A central bank with one rate and an averaged index is set wrong for both halves at once. Grounded in [prices](../09-macro/prices.md).

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
| The Night Tax | Firming quarter-time solar for an always-on load costs more than the solar | [Orbital](no-night-no-neighbors.md) |
| The Neighbor Problem | Every terrestrial watt answers to a ratepayer, a commissioner, and a hearing | [Orbital](no-night-no-neighbors.md) |
| The Gray Zone | Taiwan fails by repricing long before it fails by invasion | [Taiwan](taiwan-gray-zone.md) |
| Scored vs consumed | The assumption you scored is weaker than the one your conclusions rest on | [Taiwan](taiwan-gray-zone.md) |
| The Green Dashboard | Indicators built for the dramatic failure stay green through the actual one | [Taiwan](taiwan-gray-zone.md) |
| The Bundle | Junior work sold a deliverable and manufactured a senior in one purchase | [Two products](two-products.md) |
| The Recovery Test | If juniors miss the next white-collar recovery, the cut was substitution, not cycle | [Two products](two-products.md) |
| The Verdict | Capital is the only input that can change its mind, and it reverses in quarters | [Refinancing](capex-verdict.md) |
| The Echo | Headline AI revenue contains a reflection of the capex financing it | [Refinancing](capex-verdict.md) |
| The Exclusion Map | What insurers refuse to cover charts where autonomy actually operates | [Insurance](insurance-ceiling.md) |
| The Insurance Ceiling | Economy-wide deployment converges to what reinsurance treaties will bear | [Insurance](insurance-ceiling.md) |
| The Ambient Discount | The gains arrive unpriced and unnoticed while the costs arrive as bills | [Two economies](two-economies.md) |
| The Window | Regulation passes in the ~18 months of salience after an incident, or not at all | [Incident](incident-window.md) |
| The Shelf | Whatever architecture is fully drafted when the Window opens is what becomes law | [Incident](incident-window.md) |
| The Witness Test | A signal survives if its production is observed, or costly in a way generation cannot fake | [Signals](dead-signals.md) |
| The Success Tax | A real productivity boom raises the rate that discounts the boom's own infrastructure | [Success tax](success-tax.md) |
| The Demographic Tide | Shrinking workforces and old savers push rates down harder than AI pushes them up | [Success tax](success-tax.md) |
| The Loss-Owner Rule | Verification gets funded where one party eats the full cost of being wrong | [Build](what-to-build.md) |
| The Line-Shaft Problem | The tool is new, the floor plan is not, and the floor plan is where the productivity lives | [Line shaft](line-shaft.md) |
| The Dispersion Test | Widening between-firm gaps confirm the redesign story, a rising mean with flat gaps refutes it | [Line shaft](line-shaft.md) |
| The Delivered Hour | A robot's real cost divides everything by utilization and success rate, not by calendar | [Delivered hour](delivered-hour.md) |

If a future post coins something and it is not on this list within a week, that is a bug in this page.
