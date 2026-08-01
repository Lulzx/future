---
title: "The Bottleneck Migrates: Silicon → Electrons → Permits"
dek: For thirty years the binding constraint was chip supply. By 2028 it is interconnection queues, turbine order books, and environmental review.
date: 2026-07-28
tags: energy, datacenters, policy
takeaway: The variance across US markets is larger than the variance across countries. That is how you know the constraint is not physics.
corpus: 01-substrate/energy.md, 06-uncertainties/power-permitting.md, 01-substrate/compute.md, 03-domains/contested/geopolitics/bipolar.md
---

# The Bottleneck Migrates: Silicon → Electrons → Permits

Let us start with a number that does not sound like a number about AI at all.

A single 1GW datacenter campus draws roughly what **800,000 homes** draw.

![One building. All of those houses. The scale is genuinely difficult to hold in your head.](img/gw-scale.avif)

That is not a metaphor and it is not rounded up for effect. One building on one side of the scale, an entire city's worth of houses on the other, and the thing balances.

Which means that at some point, quite recently, the AI industry stopped being a software industry and became an industry that consumes electricity at the scale of medium-sized nations. And when that happened, the thing standing between a company and its next model stopped being anything the company knows how to fix.

Because the supply chain behind that gigawatt is measured in years:

- US grid interconnection queues for large new loads: **5 to 7 years**
- Gas turbine order books: full **into 2030**
- Transformers: **2 to 3 year** lead times

There is a sentence that people in this industry find genuinely difficult to internalize, so it is worth saying plainly.

**You cannot software-engineer your way past a substation.**

## The queue, quantified

"Interconnection queue" is one of those abstractions that hides how badly the arithmetic fails. So here it is, as of 2026:

| Market | Queue volume | Typical wait |
|---|---|---|
| CAISO | ~410 GW | 5 to 6 years |
| MISO | ~380 GW | ~5 years |
| ERCOT | n/a | 3 to 4 years for >75MW campus loads |

Now put the other number next to it. A hyperscale facility is **built in 1 to 3 years.**

Read those two facts together, because their relationship is the entire article:

**It takes longer to get permission to plug the thing in than to build the thing.**

![The building is done. The queue is not. This is where the schedule actually lives.](img/build-vs-permission.avif)

The datacenter is finished. It is gleaming. The cable is lying on the ground. And the figure at the front of the queue holding the other end of that cable has grown a beard.

On interconnection and construction bottlenecks alone, roughly **30 to 50% of planned 2026 AI datacenter capacity is expected to slip to 2028.**

That is not a forecast about model capability. It is a forecast about paperwork. It moves the capability timeline anyway.

## ERCOT is the tell

Go back to that table and look at it as evidence rather than as data.

ERCOT clears the same class of load in 3 to 4 years that takes CAISO 5 to 6. ERCOT's advantage is not geography. It is not weather, or capital, or engineering talent, or how clever anyone is. It is a **different regulatory structure.** That is the whole difference.

![Identical buildings. Identical physics. Completely different calendars.](img/same-building-different-door.avif)

A gigawatt in Texas and a gigawatt in California are the same physics and a totally different calendar.

Which gives us the observation that carries the whole piece:

**The variance across US markets is larger than the variance across countries.**

Sit with that. When the spread *within* one country exceeds the spread *between* countries, you are not looking at a resource constraint. Resources do not respect state lines that precisely. You are looking at an institutional one.

And that means the bottleneck has been quietly moving this whole time:

**Silicon, then electrons, then permits.**

By 2028 the rate-limiting step on frontier AI in the United States is environmental review, transmission rights-of-way, and turbine manufacturing. Export controls address *China's* bottleneck. They do approximately nothing about America's.

![Three barriers, each narrower than the last, and the queue is at the one nobody optimized for.](img/three-gates.avif)

The first gate you walk through. The second you turn sideways for. The third has a service window, a bored clerk behind it, and a line that goes back five to seven years. Call it **the Permit Window**, because you are going to be seeing a lot of it.

Which produces a sentence that would have sounded completely absurd in 2023 and now sets the schedule for the most capitalized industry on earth:

**AI progress is partly a function of American administrative law.**

## When the queue is the constraint, leave the queue

Faced with a five-year line, a sufficiently rich company does the obvious thing. It stops queuing.

![The rational response to an unmovable queue is to stop being in it.](img/behind-the-meter.avif)

This is precisely what 2025 to 2026 capital allocation shows:

- **Direct generation ownership.** Alphabet's ~**$4.75B** acquisition of Intersect Power, announced 2025-12-22 and closing H1 2026, which moves risk out of grid queues and into owned generation-plus-storage packages.
- **Nuclear restarts and offtakes.** Microsoft's Three Mile Island restart, plus Amazon and Google contracting small modular reactors for carbon-free baseload.
- **On-site gas.** Fastest to deploy, worst politically, and the default once the schedule genuinely binds.

Notice what that does to the identity of these companies.

![The job quietly stopped being the job it was hired to be.](img/lab-becomes-utility.avif)

**A frontier lab is becoming a power company with a research division attached.** The relevant competence shifts from ML engineering toward project finance, EPC management, and regulatory affairs. Expect org charts to follow the constraint within about two years of it binding, which means you can watch this happen in hiring pages before you can read about it anywhere else.

> **Prediction:** by 2029, **>40%** of new frontier-training capacity in the US is powered by generation the operator owns or has contracted bilaterally, rather than grid supply procured at tariff. The grid becomes the backup, not the source. **~65%** confidence. This mostly extrapolates capital already committed by mid-2026. The miss scenario is permitting reform making tariff supply competitive again, not a reversal of intent.

## Why the supply chain refuses to fix itself

The textbook response to a demand spike is capacity expansion. Turbine and transformer manufacturers should be building new plants right now, frantically.

They are doing it slowly and late. And here is the uncomfortable part: **they are being rational.**

Heavy electrical equipment plants take years to build and decades to pay back. The demand signal in front of them is one sector's five-year build-out with a widely discussed correction scenario attached to it. Manufacturers who overbuilt into previous electricity booms ate decade-long busts, and the firms still standing today are precisely the ones that learned that lesson and are not about to unlearn it for you.

So those order books full into 2030 are being served by overtime and brownfield debottlenecking rather than new factories. Which produces a very specific and very annoying outcome:

![Demand surges. The queue stretches. The factory stays exactly the same size.](img/stretching-queue.avif)

The supply chain converts a demand surge into **queue length rather than volume.** Backlogs stretch, prices rise, capacity barely moves.

This is the industrial-base version of the permitting problem, and they rhyme: both are institutions optimized for a stable grid being asked to price a spike they have excellent historical reasons to distrust. Sovereign-backed offtake guarantees or defense-production-style procurement would change the manufacturers' arithmetic overnight, which is why equipment lead times belong on the same watch list as statutes.

## The catch inside the escape hatch

Behind-the-meter is not free, and it has a physical dependency the strategy discussion tends to skip. **Islanded loads still need firm backup**, and grid-scale storage or redundant generation adds real cost to the headline $/MW figures.

Worse, the load mix is shifting underneath the argument. Training tolerates interruption, because nobody minds if a training run pauses for four hours during peak. Inference serving does not tolerate interruption at all, because it carries customer SLAs and somebody is waiting for the response right now.

As demand expansion shifts the mix from training toward serving, the interruptibility advantage that makes curtailment-tolerant interconnection cheap erodes. The industry's flexibility story is truest in exactly the phase of the build-out that is ending first.

## The electricity bill is the regulation

Now for the part that will dominate the politics long before it dominates the engineering, and which almost nobody in AI is tracking.

Wholesale electricity costs near US datacenter concentrations have risen sharply. On the order of **+267%** at the most affected nodes over 2020 to 2025, per Bloomberg's node analysis. On PJM, the largest US market, average wholesale cost rose roughly **76% year-on-year** into early 2026, with the market monitor naming datacenter load growth as the primary driver.

![The benefits are national and diffuse. The costs are local and arrive monthly.](img/electricity-bill.avif)

That is the seed of the backlash, and the mechanism is simple enough to survive contact with a campaign advertisement. A large inflexible load arrives in a constrained market, clears at the top of the supply stack, and every ratepayer in the zone sees it on a bill once a month, forever.

So here is the prediction that I think is most underpriced by people who work in AI:

**The most likely source of binding domestic AI regulation in the US is the electricity bill, not safety, labor, or copyright.**

Electricity price is the single channel through which this entire abstraction touches a median voter's budget on a monthly cycle. Expect state-level siting restrictions, ratepayer-protection rules, and special large-load tariffs well before any federal capability regulation shows up. All of them administered, in the end, at the Permit Window.

## The geopolitical consequence

Countries that can build power quickly gain a structural advantage **that has nothing whatsoever to do with their AI research talent:**

- **China**, at roughly **300GW/yr** of generation additions, about an order of magnitude above US net additions, with permitting that functions as an instrument of policy rather than an obstacle to it
- **Gulf states**, with sovereign capital, abundant gas, and minimal permitting friction
- **A second tier** of India, Brazil, and Indonesia, which have the additions but not yet the transmission or the demand-side buyers

This decouples AI *capacity* from AI *capability*. A country can lead in published research and still be unable to deploy at scale, or the exact reverse. Most existing analysis quietly assumes these are the same thing.

## Why this could all loosen fast

This is politics, not physics, and that cuts hard against the pessimistic reading.

Interconnection queues, environmental review, and transmission siting are statutory and revisable. The constraint can loosen suddenly, and it cannot tighten much further, so the distribution is skewed toward **faster** than the base case here assumes. Two more things push the same way:

- **Load flexibility is nearly free and barely used.** Training is interruptible. A datacenter willing to curtail during peak hours can interconnect far faster than one demanding firm capacity, and the industry has only just started pricing this.
- **Efficiency compounds on the demand side too.** Those GW figures assume today's FLOPs-per-watt. Three years of accelerator efficiency gains at historical rates cut the energy per unit of capability substantially, even as total draw rises.

Demand expansion still wins on the total. But the ceiling moves.

## What to actually watch

Three series, not one, because they can diverge and the divergence is the informative part:

1. **Queue length**, which is the political constraint
2. **Behind-the-meter share of new MW**, which is the routing path around it
3. **Interruptible share of new datacenter contracts**, which is the fix that is nearly free and barely used

Queue length can look completely stuck while training capacity grows fine, if the money has simply routed around the public rate case. Read all three or you will misread the first.

---

The failure mode of this whole analysis is treating every delayed datacenter announcement as proof the wall arrived early. Discretionary delay, chip allocation, and power queues can each slip a project without the economic ceiling binding at all.

But the direction is not seriously in doubt.

For thirty years the question in this industry was whether you could get the chips. For the next ten it is whether you can get the interconnect. And that question is answered by a state public utility commission, on a timeline set by statute rather than by anyone's roadmap, by people who have never once been to a launch event and are not going to start now.
