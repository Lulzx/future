---
title: "No Night, No Neighbors"
dek: Solar is the cheapest electricity ever sold, for about a quarter of the day. The cost of firming the other three quarters, plus the politics of every terrestrial site, is the case for putting datacenters in orbit, and in June SpaceX turned that case into a product.
date: 2026-07-29
tags: energy, datacenters, space
takeaway: Orbit is the one site with no night and no neighbors. Whether it is the future stopped being a physics question in June 2026 and became a question about the price of a kilogram.
corpus: 01-substrate/energy.md, 06-uncertainties/power-permitting.md, 01-substrate/inference-economics.md, 01-substrate/capital.md
---

# No Night, No Neighbors

In April 2021, a consortium led by ACWA Power agreed to sell electricity from the Al Shuaibah solar project in Saudi Arabia for **1.04 US cents per kilowatt-hour.**

Stop on that number the way you would stop on a misprint, because it reads like one. A cent. Coal at its historic best cost several times that. Nuclear, gas, hydro, anything your grandparents' grid was built on, none of it ever came close. The cheapest electricity ever sold by anyone, anywhere, in the entire history of selling electricity, comes off a photovoltaic panel sitting in a desert doing nothing.

And the price is still falling. Panels are a manufactured good on a learning curve, like chips, like batteries, and manufactured goods on learning curves only go one direction.

So here is a fair question. The [last post](silicon-electrons-permits.md) spent four thousand words on datacenters strangling on interconnection queues and turbine order books. If the cheapest power in history is lying on the ground in every desert on earth, why is anyone queuing at all?

Because the sun sets.

## The cheapest power plant in history has an attendance problem

A US utility-scale solar plant runs at a capacity factor around **25%**, per EIA generator data. Clouds, winter, the angle of the morning, and above all the plain fact of night. The panel is rated for a number it delivers about a quarter of the time.

Think of it as an employee. Brilliant, absurdly cheap, and works a six-hour shift with no advance notice of sick days.

![The cheapest power plant in history works a short shift and does not answer the phone at night. The building it feeds never closes.](img/sun-punch-clock.avif)

That is the sun punching out in the drawing, and the little building holding the plug is a datacenter, which is the worst possible customer for a six-hour employee. The [corpus energy page](../01-substrate/energy.md) runs through why: a 1GW campus draws what 800,000 homes draw, and it draws it at 3am. Training can pause. Inference serving, the part [carrying customer SLAs](../01-substrate/inference-economics.md), cannot. The load is as close to perfectly flat as any load humanity has ever built.

Flat demand, quarter-time supply. Something has to fill the gap, and the something has a price.

## The Night Tax costs more than the electricity

Call it **the Night Tax**: everything you have to buy so that quarter-time power can serve an always-on load. Batteries, overbuilt panels, backup gas, some blend. The tax runs larger than the electricity it firms.

Run the arithmetic once and it stops being abstract. To carry a 1GW campus through one night you need roughly 16 gigawatt-hours of storage, plus several gigawatts of extra panels to charge it during the day. The largest battery facility on earth, Edwards & Sanborn in California, stores about **3.3 GWh**.

One campus. Five of the biggest battery ever built. Per night. Assuming tomorrow is sunny.

![A cheap panel, and towering over it, the pile of batteries that lets the panel keep its promises after dark.](img/night-tax.avif)

That pile in the drawing is the Night Tax made visible, and it is why the firmed product costs a multiple of the headline cent, which is why hyperscalers desperate for carbon-free power are restarting Three Mile Island and ordering small modular reactors instead of just buying more of the cheapest electricity in history. Nobody skips the record-setting price by accident. **They are not paying for the electricity. They are paying for the night.**

## Pay the tax in full and you are still somebody's neighbor

Suppose you pay it. Panels, batteries, backup, all of it, behind the meter so the [Permit Window](silicon-electrons-permits.md) never sees you. You still have not escaped, because every site on the map shares one feature that has nothing to do with engineering.

Somebody lives next to it.

Call this one **the Neighbor Problem**. Every terrestrial watt sits in a jurisdiction, upstream of a ratepayer, within reach of a commissioner. The last post laid out the receipts: wholesale power up **+267%** at the most affected US nodes over 2020 to 2025 per Bloomberg, PJM wholesale costs up **~76% year-on-year** into early 2026 with the market monitor naming datacenter load as the driver, and [the corpus's standing bet](../06-uncertainties/power-permitting.md) that the electricity bill regulates American AI before capability politics does. The AEP Ohio tariff already showed how fast one rate case moves compared to any reform.

The Night Tax is physics and the Neighbor Problem is politics, and the build-out is currently paying both at once. Which is the setup for an objection you should absolutely be making right now.

## "Fine, then burn gas until the reactors show up"

That is the actual industry plan, and it is not stupid. Gas dodges the Night Tax entirely, nuclear dodges it forever. If this were only about the night, the story would end here.

But look at what each option pays instead. Gas turbine order books are full **into 2030**, and every on-site gas plant is a ratepayer story and a siting fight waiting to happen. The Three Mile Island restart is one plant. SMRs at scale are a 2030s technology on their own vendors' timelines. Every one of these escapes the tax by walking deeper into the Neighbor Problem, into the queue, the hearing, the rate case, the five-to-seven-year line at the Permit Window.

So do the exercise this blog exists for. Forget the technologies and write down what the perfect site would need. Sun that never sets, so the tax is zero. No grid, so there is no queue. No jurisdiction, so there is no window to queue at. No neighbors, so there is no bill for a campaign ad to photograph.

Read the list back. No site on the map has all four.

One place does. It starts 550 kilometers straight up.

## In June the biggest launch company on earth made it a product

On 24 June 2026, SpaceX confirmed the name **Starmind** for an orbital AI datacenter constellation, per [Aviation Week](https://aviationweek.com/space/commercial-space/spacex-brands-data-center-satellites-starmind) and a video on its own site. The first-generation satellite, AI1, is 20 meters tall with a 70-meter deployed wingspan, wider than a 747. Each one delivers about **120 kW** of compute, roughly one NVIDIA GB300 rack, and a single Starship is meant to deploy 30 to 50 of them. Two prototypes target early 2027, with the Gigasat factory in Bastrop, Texas planned to be running by the end of that year.

And SpaceX is late. Starcloud flew an H100 to orbit in November 2025 and [raised a $170M Series A in March](https://techcrunch.com/2026/03/30/starcloud-raises-170-million-series-ato-build-data-centers-in-space). Google announced Project Suncatcher, TPUs on satellites, in November 2025, with its own 2027 prototypes. Three organizations that do not copy each other's homework arrived at the same answer within a year.

The reason is the list above. In the dawn-dusk sun-synchronous orbits these designs use, a panel sees the sun over 99% of the year at full space intensity, about 1361 watts per square meter with no atmosphere and no weather in the way. Google's Suncatcher paper puts the annual yield at up to **eight times** the same panel on mid-latitude ground. The Night Tax is zero, permanently, by orbital mechanics. And nobody in low earth orbit pays a rate case.

Now dramatize the ambition properly, because the number SpaceX gave investors deserves it. The claim is **100 GW of new compute capacity per year** once Starship flies at rate, a million tonnes of hardware annually at 100 kW per tonne. The entire United States nets about thirty gigawatts of new grid capacity a year. One company is claiming it will add three American grids' worth of AI power annually, from a place with no interconnection queue, because there is no interconnection.

## "You cannot send a repair truck to orbit"

Correct, and the list of things wrong with this plan is not short. Radiation flips bits and ages silicon. Vacuum has no convective cooling, which is why each AI1 carries **110 square meters** of deployable liquid radiators, half a tennis court of plumbing, to shed the heat of one rack.

![One rack of compute, and the enormous wings it needs just to stay cool where there is no air.](img/rack-with-wings.avif)

Look at the proportions in that drawing. The rack is the small thing. Almost everything you launch is wings, radiators and panels, overhead that a building on earth gets for free from air and water.

Here is why the objection is weaker than it sounds: **the repair truck stopped visiting terrestrial racks too.** At hyperscale, a failed server is drained and swapped, not repaired, and an AI accelerator is economically dead in three to five years regardless, obsoleted long before it breaks. That is precisely Starlink's fleet model, 8,000+ satellites launched, five-year design lives, deorbit and replace. Orbit does not need datacenter hardware to become immortal. It needs it to survive about as long as it was going to matter anyway.

The honest caveat is the shape of the compute. Training wants thousands of racks on one fat interconnect, which orbit does badly for now. Inference wants many small nodes near users, which a constellation with laser crosslinks does naturally, and from 550 kilometers the light-lag is single-digit milliseconds. Starmind is pitched as inference first for exactly this reason. Orbit does not have to replace the terrestrial build-out. It has to absorb the growth, and [the growth is the inference side](../01-substrate/inference-economics.md).

## The whole question reduces to the price of a kilogram

The corpus's most-used sentence is that the bottleneck migrates, silicon to electrons to permits. Follow the logic of this post to the end and it migrates once more.

Silicon, electrons, permits, kilograms.

At 100 kW per tonne, a kilogram launched carries 100 watts of compute. On a Falcon 9 at roughly $3,000 per kilogram of list-price capacity, that is **$30 per watt** spent before the first token, against roughly $10 to 15 per watt for a complete terrestrial campus. Dead on arrival. At the few hundred dollars per kilogram Starship is designed to reach, the same watt rides up for two or three dollars, and the arithmetic flips from absurd to unfair.

![Four barriers now. The last one is a scale, and it only asks one question.](img/fourth-gate.avif)

The fourth gate in the drawing is a weighing scale, and notice what kind of gate it is. A permit is an institutional constraint, and the last post showed why those do not yield to money. A kilogram is an industrial constraint, a factory-and-learning-curve problem, which is the one category of problem the launch industry has spent twenty years demonstrating it can grind down on schedule. **The escape from the queue is trading a constraint nobody can buy their way past for one somebody can.**

> **Prediction:** by 31 December 2030, more than **100 MW** of AI compute is operating in orbit, measured by public operator disclosures and satellite tracking. **~60%** confidence. That is under a thousand AI1-class satellites, about twenty Starship launches' worth, against a claimed run-rate a thousand times higher. The miss scenario is the price of the kilogram refusing to fall, which is measurable years before the resolution date.

## How this is wrong

Four ways, in descending order of how much they worry me.

1. **The kilogram stays expensive.** Every projection in this post is downstream of Starship reaching rapid full reuse at a few hundred dollars per kilogram or less. If that stalls above roughly $500, orbital compute stays a niche for a decade and this post joins the scorecard's losses. Watch the price actually charged to customers, not the aspirational one.
2. **The Permit Window opens.** [Uncertainty 2](../06-uncertainties/power-permitting.md) is explicit that the terrestrial constraint is skewed toward loosening, because it is statute, not physics. Real permitting reform plus cheap firmed solar shrinks orbit's entire reason to exist. The strongest argument for orbital datacenters is a US institutional failure, and institutions sometimes stop failing.
3. **The fleet economics leak.** Radiation-driven failure rates, radiator micrometeoroid damage, or insurance pricing could tax the constellation harder than the night ever taxed the desert. The AI1 prototypes' failure telemetry in 2027 is the first real data point.
4. **The Natick precedent.** Microsoft proved underwater datacenters worked, with hardware failure rates an eighth of land, and killed the program anyway because operational weirdness beat the efficiency gain. Demos are not deployment. The tell that this is different will be a hyperscaler other than SpaceX signing for orbital capacity with money.

Watch those four series, prototype telemetry, customer launch pricing, third-party offtake, and the permitting indicators the corpus already tracks, and you will know which way this resolved years before anyone announces it.

---

For as long as there has been a grid, the iron rule of siting was that you build where the power is cheap and the neighbors are few. Everyone read that rule as a statement about geography.

It was a statement about queues, bills, and hearings, and there is exactly one place left where none of the three exist. The datacenter of 2035 is not sited where power is cheapest. It is sited where nobody can say no, and that place is falling around the planet at eight kilometers a second, in permanent sunshine, with no one next door.
