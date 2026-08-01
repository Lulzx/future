---
title: "No Night, No Neighbors"
dek: Solar is the cheapest electricity ever sold, for about a quarter of the day. The cost of firming the other three quarters, plus the politics of every terrestrial site, is the case for putting datacenters in orbit, and in June SpaceX turned that case into a product.
date: 2026-07-29
tags: energy, datacenters, space
takeaway: Orbit is the one site with no night and no neighbors. Whether it is the future stopped being a physics question in June 2026 and became a question about the price of a kilogram.
corpus: 01-substrate/energy.md, 06-uncertainties/power-permitting.md, 01-substrate/inference-economics.md, 01-substrate/capital.md
---

# No Night, No Neighbors

I want you to look at a number that should not exist.

In April 2021, a consortium led by ACWA Power agreed to sell electricity from the Al Shuaibah solar project in Saudi Arabia for **1.04 US cents per kilowatt-hour.**

A cent. One. And four hundredths of another one.

Stop. Do not skim past this the way you skim past every other energy number that has ever scrolled past your face. Coal at its historic best cost several times that. Nuclear, gas, hydro, the entire menu your grandparents' grid was built on, none of it ever came close. The cheapest electricity ever sold by anyone, anywhere, in the entire history of the human practice of selling electricity, comes off a flat panel sitting in a desert, doing nothing, making no noise, employing almost nobody.

And the price is still falling. Panels are a manufactured good on a learning curve, like chips, like batteries, and manufactured goods on learning curves only go one direction, which is down, forever, until physics or tariffs intervene, and so far neither has been rude enough.

So here is a completely fair question. The [last post](silicon-electrons-permits.md) spent four thousand words explaining why datacenters are currently strangling on interconnection queues and turbine order books. If the cheapest power in the history of power is just lying on the ground in every desert on earth, why is anyone standing in a queue at all?

Because the sun sets.

## Your power plant works a six-hour shift and does not call in

A US utility-scale solar plant runs at a capacity factor around **25%**, per EIA generator data. Clouds. Winter. The wrong angle of morning light. And above all, the plain fact of night. The panel is rated for a number it actually delivers about a quarter of the time.

Think of it as an employee.

Brilliant. Absurdly cheap. Works a six-hour shift. Gives you no advance notice of sick days. Goes home the second the light goes funny, and if you call after dark the phone just rings.

![The cheapest power plant in history works a short shift and does not answer the phone at night. The building it feeds never closes.](img/sun-punch-clock.avif)

That is the sun punching out in the drawing. The little building holding the plug is a datacenter, which is the single worst possible customer for a six-hour employee. The [corpus energy page](../01-substrate/energy.md) runs through why: a 1GW campus draws what 800,000 homes draw, and it draws it at 3am, because the building does not care what time it is. Training can pause. Inference serving, the part [carrying customer SLAs](../01-substrate/inference-economics.md), cannot. The load is as close to perfectly flat as any load humanity has ever built.

Flat demand. Quarter-time supply.

Something has to fill the gap. And the something has a price.

## You are not buying the electricity. You are buying the night.

Call it **the Night Tax**: everything you have to buy so that quarter-time power can serve an always-on load. Batteries. Overbuilt panels. Backup gas. Some miserable blend of all three.

The tax runs larger than the electricity it firms. That is not a vibe. That is arithmetic.

To carry a 1GW campus through one night you need roughly 16 gigawatt-hours of storage, plus about three to four gigawatts of extra panels to charge that stack in a short solar day. The largest battery facility on earth, Edwards & Sanborn in California, stores about **3.3 GWh**.

One campus.
Five of the biggest battery ever built.
Per night.
Assuming tomorrow is sunny.

![A cheap panel, and towering over it, the pile of batteries that lets the panel keep its promises after dark.](img/night-tax.avif)

That pile in the drawing is the Night Tax made visible. Lazard's recent unsubsidized band for utility solar-plus-storage sits around **six to fifteen cents** per kilowatt-hour, and that pairing is typically a four-hour battery, not a sixteen-hour night. Against a desert PPA at a cent, the firmed product is an order of magnitude more expensive.

Which is why hyperscalers who would love to buy the cheapest electricity in history are instead restarting Three Mile Island and ordering small modular reactors. Nobody skips a record-setting price by accident.

**They are not paying for the electricity. They are paying for the night.**

## Even if you pay it, somebody still lives next door

Suppose you pay the Night Tax in full. Panels, batteries, backup, all of it, behind the meter so the [Permit Window](silicon-electrons-permits.md) never even sees you.

You still have not escaped.

Because every site on the map shares one feature that has nothing to do with engineering.

Somebody lives next to it.

Call this one **the Neighbor Problem**. Every terrestrial watt sits in a jurisdiction, upstream of a ratepayer, within reach of a commissioner who has to run for re-election in a place where "my power bill went up" is a campaign ad that writes itself. The last post laid out the receipts: wholesale power up **+267%** at the most affected US nodes over 2020 to 2025 per Bloomberg, PJM wholesale costs up **~76% year-on-year** into early 2026 with the market monitor naming datacenter load as the driver, and [the corpus's standing bet](../06-uncertainties/power-permitting.md) that the electricity bill regulates American AI before capability politics does. The AEP Ohio tariff already showed how fast one rate case moves compared to any reform.

The Night Tax is physics. The Neighbor Problem is politics. The build-out is currently paying both at once, which is a terrible business model and also, at the moment, the only one on the ground.

## "Fine, then just burn gas until the reactors show up"

That is the actual industry plan.

And it is not stupid. Gas dodges the Night Tax entirely. Nuclear dodges it forever. If this were only about the night, the story would end here, and I would not be writing this, and you would not be reading it, and we would all be doing something else with our Tuesday.

But look at what each option pays instead.

Gas turbine order books are full **into 2030**, and every on-site gas plant is a ratepayer story and a siting fight waiting to happen. The Three Mile Island restart is one plant. SMRs at scale are a 2030s technology on their own vendors' timelines. Every one of these escapes the tax by walking deeper into the Neighbor Problem: into the queue, the hearing, the rate case, the five-to-seven-year line at the Permit Window.

So do the exercise this blog exists for. Forget the technologies. Write down what the perfect site would need.

Sun that never sets, so the Night Tax is zero. No grid interconnection, so there is no five-to-seven-year plug-in queue. No ratepayer next door, so the Neighbor Problem has nothing to attach to. A licensing surface that is federal and technical rather than local and political: spectrum filings and launch permits, not county hearings and rate cases.

Read the list back.

No site on the map has that combination.

One place comes closest.

It starts 550 kilometers straight up.

## Then, in June, someone put a price tag on it

On 24 June 2026, SpaceX confirmed the name **Starmind** for an orbital AI datacenter constellation, per [Aviation Week](https://aviationweek.com/space/commercial-space/spacex-brands-data-center-satellites-starmind) and a video on its own site. The first-generation satellite, AI1, is 20 meters tall with a 70-meter deployed wingspan, which is wider than a 747. Each one delivers about **120 kW** of compute, roughly one NVIDIA GB300 rack, and a single Starship is meant to deploy 30 to 50 of them. Two prototypes target early 2027, with the Gigasat factory in Bastrop, Texas planned to be running by the end of that year.

And SpaceX is late.

Starcloud flew an H100 to orbit in November 2025 and [raised a $170M Series A in March](https://techcrunch.com/2026/03/30/starcloud-raises-170-million-series-ato-build-data-centers-in-space). Google announced Project Suncatcher, TPUs on satellites, in November 2025, with its own 2027 prototypes. Three organizations that do not copy each other's homework arrived at the same answer within a year, which is usually a sign either that everyone is wrong in the same fun way, or that the answer is real.

The reason is the list above.

In the dawn-dusk sun-synchronous orbits these designs use, a panel sees the sun over 99% of the year at full space intensity, about 1361 watts per square meter, with no atmosphere and no weather in the way. Google's Suncatcher paper puts the annual yield at up to **eight times** the same panel on mid-latitude ground. The Night Tax is zero. Permanently. By orbital mechanics. And nobody in low earth orbit pays a rate case. (They still file with the FCC, and they still share the sky with debris, astronomy, and every other constellation. That is real. It is also not the Permit Window, and it is not a commissioner answering to a ratepayer who just opened their bill.)

Now sit with the ambition number, because the number SpaceX gave investors is the kind of number your brain wants to file under "sci-fi slide" and walk past.

The claim is **100 GW of new compute capacity per year** once Starship flies at rate. At the roughly **70 kW per tonne** SpaceX lists as AI1 vehicle efficiency, that is about 1.4 million tonnes of hardware annually.

The entire United States nets about thirty gigawatts of new grid capacity a year.

One company is claiming it will add three American grids' worth of AI power annually, from a place with no interconnection queue, because there is no interconnection.

## "You cannot send a repair truck to orbit"

Correct.

And the list of things wrong with this plan is not short. Radiation flips bits and ages silicon. Vacuum has no convective cooling, which is why each AI1 carries **110 square meters** of deployable liquid radiators, half a tennis court of plumbing, just to shed the heat of one rack.

![One rack of compute, and the enormous wings it needs just to stay cool where there is no air.](img/rack-with-wings.avif)

Look at the proportions in that drawing. The rack is the small thing. Almost everything you launch is wings, radiators, and panels. Overhead that a building on earth gets for free from air and water and the basic fact of existing at the bottom of an atmosphere.

Here is why the objection is weaker than it sounds:

**The repair truck stopped visiting terrestrial racks too.**

At hyperscale, a failed server is drained and swapped, not repaired. An AI accelerator is economically dead in three to five years regardless, obsoleted long before it breaks. That is precisely Starlink's fleet model: 8,000+ satellites launched, five-year design lives, deorbit and replace. Orbit does not need datacenter hardware to become immortal. It needs it to survive about as long as it was going to matter anyway.

The honest caveat is the shape of the compute. Training wants thousands of racks on one fat interconnect, which orbit does badly for now. Inference wants many small nodes, which a constellation with laser crosslinks does naturally, and from 550 kilometers the satellite link itself is single-digit milliseconds, not the fat fabric a training cluster needs. Starmind is pitched as inference first for exactly this reason.

Orbit does not have to replace the terrestrial build-out.

It has to absorb the growth.

And [the growth is the inference side](../01-substrate/inference-economics.md).

## The whole question reduces to the price of a kilogram

The corpus's most-used sentence is that the bottleneck migrates: silicon to electrons to permits. Follow the logic of this post to the end and it migrates once more.

Silicon. Electrons. Permits. Kilograms.

At 70 kW per tonne, a kilogram launched carries 70 watts of compute. On a Falcon 9 at roughly $3,000 per kilogram of list-price capacity, that is about **$43 per watt** spent on launch before the first token, against roughly $10 to 15 per watt for a complete terrestrial campus.

Dead on arrival.

At the few hundred dollars per kilogram Starship is designed to reach, the same watt rides up for four or five dollars, and the arithmetic flips from absurd to competitive, then unfair if the price keeps falling.

![Four barriers now. The last one is a scale, and it only asks one question.](img/fourth-gate.avif)

The fourth gate in the drawing is a weighing scale, and notice what kind of gate it is. A permit is an institutional constraint, and the last post showed why those do not yield to money. A kilogram is an industrial constraint, a factory-and-learning-curve problem, which is the one category of problem the launch industry has spent twenty years demonstrating it can grind down on schedule.

**The escape from the queue is trading a constraint nobody can buy their way past for one somebody can.**

> **Prediction:** by 31 December 2030, more than **100 MW** of AI compute is operating in orbit, measured by public operator disclosures and satellite tracking. **~60%** confidence. That is under a thousand AI1-class satellites, about twenty Starship launches' worth, against a claimed run-rate a thousand times higher. The miss scenario is the price of the kilogram refusing to fall, which is measurable years before the resolution date.

## How this is wrong

Four ways, in descending order of how much they worry me.

1. **The kilogram stays expensive.** Every projection in this post is downstream of Starship reaching rapid full reuse at a few hundred dollars per kilogram or less. If that stalls above roughly $500, orbital compute stays a niche for a decade and this post joins the scorecard's losses. Watch the price actually charged to customers, not the aspirational one.
2. **The Permit Window opens.** [Uncertainty 2](../06-uncertainties/power-permitting.md) is explicit that the terrestrial constraint is skewed toward loosening, because it is statute, not physics. Real permitting reform plus cheap firmed solar shrinks orbit's entire reason to exist. The strongest argument for orbital datacenters is a US institutional failure, and institutions sometimes stop failing.
3. **The fleet economics leak.** Radiation-driven failure rates, radiator micrometeoroid damage, or insurance pricing could tax the constellation harder than the night ever taxed the desert. The AI1 prototypes' failure telemetry in 2027 is the first real data point.
4. **The Natick precedent.** Microsoft proved underwater datacenters worked, with hardware failure rates an eighth of land, and killed the program anyway because operational weirdness beat the efficiency gain. Demos are not deployment. The tell that this is different will be a hyperscaler other than SpaceX signing for orbital capacity with money.

Watch those four series (prototype telemetry, customer launch pricing, third-party offtake, and the permitting indicators the corpus already tracks) and you will know which way this resolved years before anyone announces it.

---

For as long as there has been a grid, the iron rule of siting was that you build where the power is cheap and the neighbors are few. Everyone read that rule as a statement about geography.

It was a statement about queues, bills, and hearings.

There is exactly one place left where those three do not set the schedule. The datacenter of 2035 is not sited where power is cheapest. It is sited where the ratepayer cannot say no, and that place is falling around the planet at eight kilometers a second, in permanent sunshine, with no one next door.
