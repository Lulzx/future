# III.B - Physical Domains

← [Part III](../README.md) · [Index](../../README.md)

---

Domains where the work terminates in **atoms**: a body, a machine, a field, a container. Here the ground truth is expensive not because it is contested but because obtaining it requires an experiment in the physical world that runs at physical-world speed.

This is where the [master asymmetry](../../01-substrate/data.md) bites hardest. There is no internet of manipulation, no corpus of ten trillion tokens describing what a bolt feels like when it is about to strip. The data has to be generated, one interaction at a time, in real time.

## The domains

| Domain | Ground truth | Human moat | Timing |
|---|---|---|---|
| [Medicine](medicine/) | Mixed - cheap in imaging, expensive in outcomes | Licensure, liability, hands, procedure | Consumer now; institutional slow |
| [Robotics](robotics/) | Expensive; no internet of manipulation | Everything unstructured | 2032–2040 |
| [Energy sector](energy-sector.md) | Cheap in markets; expensive in plants & permits | Wires, sites, interconnection, licensed ops | Ops now; atoms slow |
| [Agriculture](agriculture.md) | Seasonal - one experiment per year | Land, water, biology's clock | Slow and underrated |
| [Logistics](logistics.md) | Cheap in planning, expensive in execution | The last hundred metres | Planning now; handling 2030s |

## The five clocks

Each domain has a rate limit set by something other than compute, and naming them side by side is the fastest way to see why this group resists a single timeline.

| Domain | The clock | Can capital shorten it? |
|---|---|---|
| [Medicine](medicine/) | Trial duration, licensure, and outcome horizons measured in years | Barely; money buys parallel trials, not faster biology |
| [Robotics](robotics/) | Physical trials at 1:1 with real time | Yes, linearly and expensively - the whole [data problem](robotics/data-problem.md) |
| [Energy sector](energy-sector.md) | Permitting, interconnection studies, first-of-a-kind construction | Partly, and mostly by exiting the process rather than accelerating it |
| [Agriculture](agriculture.md) | One season | No; replication across fields substitutes for time |
| [Logistics](logistics.md) | Regulatory jurisdiction, then unstructured handling | The first yes, the second no |

Read the right-hand column and the investment logic falls out. Where capital can buy time, capital floods in and the forecast is a cost curve. Where it cannot, the forecast is a calendar, and the only lever is starting earlier. **The domains that look slow because of institutions can be argued with; the domains that are slow because of biology or physics cannot**, and conflating the two is the most common error in physical-AI forecasting in both directions.

## What unifies them

**The clock is not yours.** A software model can run a million training episodes overnight. A crop gives one data point per season. A clinical outcome resolves in five years. A container ship crosses an ocean in three weeks. In every domain here, **the rate limit on learning is set by a physical process that does not care about compute budgets** - which is why these are the domains where the capability curve and the deployment curve diverge most sharply.

**The division of labor is the same everywhere: planning compresses, handling does not.** Route optimization, treatment planning, yield modeling, dispatch, and warehouse scheduling are all essentially solved problems that were merely expensive. Picking up an unfamiliar object, palpating an abdomen, building a substation, and pruning a vine are not, and they are the parts that consume most of the labor hours. [Energy](energy-sector.md) is the pure case: AI both *is* the load and *runs* the grid that must absorb it - see also the constraint page in [Part I](../../01-substrate/energy.md).

**The learning curve here is linear where the cognitive one is superlinear.** In text, an extra dollar of compute buys more data throughput indefinitely, because the corpus is already collected and copying it is free. In every domain on this page, an extra dollar buys one more physical trial, and the next dollar buys exactly one more. That is the deep reason these domains behave differently, and it is not a fact about current model quality: it would still hold if models were twice as capable tomorrow. The only escapes are the ones catalogued in [the data problem](robotics/data-problem.md), and each of them is a bet that some cheap signal substitutes for the expensive one.

**Structure is the currency.** Every fast case in this group is a case where the environment was made repetitive enough that trials became samples: a row-crop field, a warehouse aisle, a highway lane, a screening imaging protocol. Every slow case is one where the environment resists being made repetitive: a strawberry plant, an apartment stairwell, an abdomen, a first-of-a-kind reactor build. This gives a practical test that beats reading capability claims - **ask what was done to the environment, not what was done to the model.** A deployment that required no environmental engineering is either operating in a naturally structured setting or is not yet autonomous.

**Failure mode for this framing.** It assumes structure has to be built deliberately and expensively. If general manipulation policies transfer across environments the way language models transfer across topics, then structure stops being the currency and the ordering on this page compresses toward the cognitive one. That is the crux flagged in [form factor](robotics/form-factor.md) and the highest-variance item in the corpus. The framing here is the base case, not a physical law.

**One number summarizes the whole group.** If a single series had to stand in for all five domains, it would be the teleoperation-to-autonomy ratio in commercial deployments, because it is the only widely-generated figure that separates capability under supervision from capability without it, and supervision is the cost that decides every case here. It has the further merit of being expensive to fake once disclosed, and its absence from a deployment announcement is itself the reading. → [B12](../../07-indicators/diffusion.md)

**Whether this group moves in the 2030s is the single largest open question in the document.** Everything in [Part III.A](../cognitive/) is priced in; the growth-rate consequences of AI depend almost entirely on whether the domains here follow. → [Robotics](robotics/), [2032–2040](../../04-timelines/2032-2040.md)

## Who captures the gain

The capture story is more uniform here than in the cognitive domains, and it is the harder half of the [spine](../../00-overview/thesis.md) to argue with. In each of these five domains the scarce complement is a physical position rather than a skill: land and water rights in [agriculture](agriculture.md), interconnection and generation sites in [energy](energy-sector.md), infrastructure and flow data in [logistics](logistics.md), licensed capacity and the balance sheet behind it in [medicine](medicine/), and manufacturing capacity in [robotics](robotics/). None of those are manufacturable by intelligence, and none of them reprice on a software cycle.

The consequence is that the physical domains are where the distributional prediction is most confident and the productivity prediction is least. Output effects depend on whether handling automates, which is genuinely uncertain. Capture effects depend only on who holds the complement, which is already observable today. Where a page here states a timing claim with hedging and a capture claim without it, that asymmetry is deliberate. → [Assets](../../09-macro/assets.md), [Uncertainty 7](../../06-uncertainties/complement-erosion.md) for the case against the durability of that list

---

**Next:** [Medicine](medicine/) → [III.C - Contested domains](../contested/)
