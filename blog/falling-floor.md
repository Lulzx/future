---
title: You Cannot Own a Falling Floor
dek: Inference cost at a fixed capability fell 100 to 1000 times in two years, on a published schedule. Any product whose moat is model access has about two years of shelf life.
date: 2026-08-01
tags: inference, moats, unit economics
takeaway: A moat that depreciates on a published schedule is not a moat. It is a lease, and everybody can read the term.
corpus: 01-substrate/inference-economics.md, 02-games/3-firms.md, 01-substrate/compute.md, 02-games/1-labs.md
---

# You Cannot Own a Falling Floor

Imagine you own the only ladder in town.

It is a genuinely great ladder. People pay you to stand on it, because from up there you can see over the wall, and nobody else can. You are, in a real and defensible sense, The Ladder Guy. You have a business. You have a pitch deck. The deck has a slide about your ladder.

Now imagine that every year, without anyone doing anything about it, **the ground rises.**

Not the wall. The ground.

Year one, you are still meaningfully higher than everybody else and life is good. Year two, people are standing on ordinary kitchen stools and seeing roughly what you see. By year three the ground is level with the top of your ladder, and there is a crowd up there, and they are on their phones, and several of them are wondering why you are still holding a ladder.

![A capability tier holds its level. Everything else rises to meet it, on a schedule you can read in advance.](img/floor-falling.avif)

This is not a metaphor about AI. This is just what has been happening, on a schedule, in public, with published numbers, for about three years.

## The number

Cost per token **at fixed capability** fell roughly **100 to 1000× in two years.**

Sit with that for a second, because the reflex is to skim past it as one more big AI number, and it is not one more big AI number. Epoch AI's price-trend series across 2023 to 2025 measured declines of **9× to 900× per year**, depending on the task and where you set the capability bar, with a median somewhere around **50× per year**, and the steepest part of the whole curve arriving after January 2024.

Now, the four words doing all the work in that sentence are *at fixed capability*, so let us be annoyingly precise about them, because almost every bad argument in this industry comes from skipping them.

The claim is **not** "AI is getting cheaper," which is vague and which everyone already nods along to. The claim is much weirder and much more specific:

**Pick a level of intelligence. Any level. Once it exists at all, it becomes nearly free within about two years.** Not cheaper. Not 30% cheaper. Approximately free, on a timeline you could put in a spreadsheet and show your CFO.

Everything else in this business is a ceiling. Compute has one. Energy has one. Data has one. They are all constraints pressing down from above.

Inference cost is the only input in the entire stack that moves the other way. It is not a ceiling. **It is a floor, and it is collapsing.**

## Why two obviously contradictory things are both true

Here is a thing that confuses smart people constantly, and the confusion is completely reasonable, and there is a clean answer.

Fact one: the cost of AI is collapsing.
Fact two: AI capital spending is exploding.

These look like they cannot both be true. So people pick a side, and then they build an entire worldview on the side they picked, and then they argue with the people who picked the other one, forever, on the internet.

They are the same fact. You are just looking at it from two ends.

The name for this is Jevons paradox, and it is very old and very boring and it explains almost everything: **when you make something dramatically cheaper, the world consumes so much more of it that total spending goes up, not down.**

![Unit price falling and total spend rising are the same fact seen from two ends.](img/jevons.avif)

The nineteenth-century version was coal. Better steam engines used less coal per unit of work, everyone assumed coal demand would fall, and instead coal demand went vertical, because suddenly it made sense to put a steam engine in absolutely everything.

The 2026 version is tokens. Which gives us a small translation table, because each of these gets misread in a specific and expensive way:

| What you observe | The naive read | What is actually happening |
|---|---|---|
| $/token falling | AI is unprofitable | Volume explodes, so total spend rises anyway |
| Capex rising | Contradicts the above | Capacity for the volume that just appeared |
| Wrapper margins compressing | The models failed | Capability commoditized exactly on schedule |

That third row is where most of the money is currently being lost, so it deserves to be said plainly: **margin compression at the application layer is not evidence that something went wrong.** It is the system working precisely as designed, arriving precisely on time. It was on the schedule. Nobody read the schedule.

## Three engines, three different expiry dates

"100 to 1000× in two years" sounds like one big force, and it is not. It is three separate things happening at once, and they have completely different lifespans, and if you are betting on this continuing you should know which one you are actually betting on.

**Engine one is hardware.** Dollars per FLOP, plus getting better at keeping the servers busy. This one grinds forward on a manufacturing cadence. Slow, steady, unglamorous, and very unlikely to either stop or suddenly accelerate. It is the tortoise.

**Engine two is distillation.** Squeezing the behavior of an enormous frontier model down into a small cheap one. This is the single biggest contributor, and it has a hard visible limit: you cannot distill below the capability the task actually needs. So it exhausts itself for any given tier of capability, then starts over for the next tier. It is less an engine than a series of controlled explosions.

**Engine three is competition.** Several vendors of roughly equivalent models, all undercutting each other, converting falling costs into falling prices.

Two of those are chains. One of them is a thread.

![Two of the three mechanisms are structural. The third is a market condition, and it can end without any technical change at all.](img/three-ropes.avif)

Hardware and distillation are engineering facts. They keep happening whether or not anyone wants them to. Competition is not an engineering fact. Competition is a **market condition**, and market conditions can end on a Tuesday.

## Cost is not price, and this is the whole ballgame

**Costs falling is close to physics. Prices falling is politics.**

Costs are going to keep falling. Hardware and distillation do not care about anyone's business model, and they will keep grinding.

Whether *prices* follow is an entirely separate question, and it is a question about market structure, and market structure is exactly the thing currently being fought over. Consolidate to three to five frontier labs, add regulatory moats that make it expensive to be a new entrant, and you can hold prices up indefinitely without a single technical thing changing.

So **the Two-Year Clock** is a *cost* claim. It only becomes a *product-strategy* claim when competition transmits that cost into price. Track those as two separate lines, because the scenario where the moat survives technically but dies commercially is a real one. It is the [labs endgame](../02-games/1-labs.md), and it is not some remote tail risk.

![The gap between the two lines is the whole commercial question.](img/cost-vs-price.avif)

Right now, though, the evidence runs the other way, and it runs hard.

Open-weight models sit roughly **3 to 6 months behind the frontier.** Epoch AI's January to May 2026 comparison puts the average lag near **four months**, about six if you use a stricter rule for what counts as equivalent.

And here is the part that should alarm anyone whose plan depends on a gap: **that number has been shrinking.** Earlier versions of this analysis carried 9 to 15 months. It is now four.

![The lag between frontier and open weights has been shrinking, not growing.](img/fast-follower.avif)

The fast followers are keeping the model layer competitive, which is why the surplus keeps passing *through* the model layer instead of pooling up inside it.

## Which brings us to the awkward part

The Two-Year Clock is running on everybody, including the people who have not noticed it. If capability at a fixed level becomes nearly free in about two years, then anything whose entire value proposition is *we have access to a smart model* has a moat with a maximum duration of about two years.

Frontier access is not an asset. It is a **wasting asset**, depreciating on a schedule that is published, in public, by researchers, for free.

Which rules out:

- Wrappers whose differentiation is model access
- Products differentiated by capability rather than by data, distribution, or workflow lock-in
- Pricing power that comes from being early to a capability tier

![When the capability inside becomes free, a product whose only differentiation was access to it has nothing left in the middle.](img/empty-wrapper.avif)

Please read this as an engineering constraint on product design rather than as a market-timing tip. It is not "sell before 2028." It is a design rule: **any feature whose only differentiation is "we call a smarter model" must either be rebuilt every generation as a pure cost center, or be wrapped in something that does not get cheaper before the lag closes.**

Things that do not get cheaper: proprietary workflow data, evaluation harnesses your buyer cannot port elsewhere, distribution defaults, and liability you will genuinely carry when it goes wrong.

The nice thing is that this is observable rather than theoretical. Products that fail the test show a spike in churn the moment a cheaper equivalent tier arrives. Products that pass it sail through the next open-weight release and barely notice.

## So what is actually left?

If capability is free on a two-year lag, then the planning question is never *what can the best model do today.* By the time you ship, everyone will have it.

The question is:

**What will be free in 2028, and what will still be scarce then?**

Almost all product strategy in this industry is currently answering the first question with enormous energy and answering the second one not at all.

The scarce list, meanwhile, is short and boring and has barely changed in years: energy, interconnection, licenses, trusted real-time data, distribution, liability capacity, physical presence, verified identity, and senior judgment once the apprenticeship gap has finished doing its damage.

![Almost everything becomes abundant. The interesting question is what is behind the glass.](img/scarce-cabinet.avif)

Six of the nine things on that list are owned by capital rather than earned by labor, which is a separate and more uncomfortable argument, made [elsewhere in the corpus](../09-macro/assets.md).

## How you would know if this is wrong

A claim that cannot be caught failing is marketing, so here is what would falsify this one:

- **Inference costs stop falling** at fixed capability. An architectural wall, an energy floor, or a deliberate decision to restrict.
- **Capability jumps get so enormous** that "a fixed level becomes free" stops being interesting, because each new cohort is a genuinely new regime rather than a cheaper version of the old one.
- **Regulation locks the frontier behind non-price barriers**, handing a few labs a durable access moat that no amount of falling cost can erode.

The first would show up in published serving prices within about two quarters. The third would show up in legislative text long before it showed up in anybody's P&L.

---

There is a second consequence here, and it is arguably worse, and it falls on the companies *adopting* AI rather than the ones selling it.

Where entry is not blocked, the cost saving does not stay with the firm that spent the money. It passes straight through to buyers. Which means adoption becomes mandatory and the return becomes purely defensive. **You spend to not die, not to win.**

![Everyone adopts, everyone spends, and nobody gains a step on anybody.](img/red-queen.avif)

This is [the Red Queen](../02-games/3-firms.md), and before you decide it is some strange new AI pathology, it is the completely standard outcome for a general-purpose technology. Electricity did this. Containerization did this. ERP did this. The internet did this. Everyone had to buy it, almost nobody got rich from buying it, and the surplus went to customers and to whoever owned the few scarce things.

Which leaves the actual mistake people are making, and it is not the one they think.

The mistake is not being wrong about how good the models will get. Almost everyone is roughly right about that now, including the skeptics.

The mistake is assuming that being right about capability tells you anything whatsoever about who gets paid.
