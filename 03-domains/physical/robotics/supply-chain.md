# Supply Chain - why this is not an AI race

← [Robotics](README.md) · [III.B - Physical](../README.md) · [Index](../../../README.md)

---

The most common error in robotics forecasting is treating it as a continuation of the AI race, with the same players, the same constraints, and the same map. It is not, and the reason is that **a robot is 90% a manufactured object and 10% a policy.**

The policy is subject to everything in [Part I](../../../01-substrate/) - it gets cheap, it diffuses, it has a [two-year moat](../../../01-substrate/inference-economics.md). The manufactured object is subject to none of that.

## The bill of materials is the strategic map

| Component | Why it binds | Where capacity sits |
|---|---|---|
| **Actuators** - harmonic drives, cycloidal reducers, servos | Precision machining at volume; long qualification cycles | Japan historically; China at volume and closing on precision |
| **Rare-earth magnets** - NdFeB for high torque density | Processing, not ore, is the chokepoint | China, overwhelmingly: ~91% of refined rare-earth output and ~94% of sintered NdFeB magnet production (IEA, 2024 data) |
| **Battery cells** | Energy density and cycle life gate untethered operation | China, then Korea |
| **Sensors** - force/torque, tactile, depth | Currently expensive and low-volume; a cost problem, not a capability one | Fragmented |
| **Assembly** | Thousands of parts, high dexterity, tight tolerances | Wherever electronics assembly already is |

**Read the right-hand column.** It is not the same column as frontier AI capability, and that mismatch is the single most important fact about how the 2030s physical economy plays out.

The mismatch is not an accident of the present moment; it follows from what each capability is made of. Frontier AI capability concentrates where there is capital, researchers, and electricity, all of which are mobile and can be assembled in a few years. Manufacturing capability concentrates where there is an existing supplier ecosystem, a trained workforce, and accumulated process knowledge, none of which are mobile and all of which took decades to build. **A country can buy its way into the first column and has to grow its way into the second.** That is why the corpus treats the AI race as contestable and the robotics race as substantially decided by conditions that predate it.

The cost structure reinforces the same conclusion. In a frontier model, nearly all of the cost is fixed and the marginal copy is free, so a late entrant with enough capital can reach parity in one training run. In a robot, most of the cost is variable and sits in components, so advantage accrues through volume and yield learning that cannot be skipped by spending more per unit. These are different economies and they reward different players, which is the whole content of this page.

## Why China's position here is stronger than in AI

In AI, the US and allied position rests on a chokepoint - advanced lithography and the accelerators downstream of it - that is genuinely narrow and genuinely defensible for some years.

In robotics **there is no equivalent chokepoint working in the same direction.** Instead:

- **Vertical integration.** A producer with domestic actuators, magnets, cells, and assembly faces a different cost curve than an integrator buying components across borders. That advantage compounds with volume rather than eroding.
- **Manufacturing tacit knowledge.** The knowledge of how to produce millions of precise mechanical assemblies reliably is exactly the kind that does not transfer through documents - the same tacit-knowledge argument made about [biosecurity](../../contested/biosecurity.md), pointing the other way.
- **A domestic market that starts the flywheel.** Industrial policy support plus a large manufacturing base means deployment can begin before unit economics work, which is precisely the cold-start condition [fleet learning](data-problem.md) requires.
- **Rare-earth processing as the mirror chokepoint.** Concentrated, hard to relocate quickly, and directly analogous to lithography in structure - just pointing in the opposite direction.

> **Prediction:** by 2032, **~70%** likely that the majority of general-purpose robot units manufactured globally are Chinese-made, largely independent of where the best policies are trained. Hardware share and software share decouple, exactly as [energy capacity decoupled from AI capability](../../../01-substrate/energy.md).

## The strategic consequences

**1. Export controls run in reverse.** The tool that constrains a rival in AI does not obviously exist in robotics, and the analogous tool - rare-earth and component restriction - is held by the other side. Policy built on the AI template will not transfer.

**1a. The chokepoint asymmetry is not symmetric in time, either.** Lithography restrictions bite immediately because there is no substitute and no stockpile worth the name. Rare-earth restrictions bite on a delay, because magnets can be stockpiled, designs can be partially substituted, and non-Chinese processing capacity exists at small scale and can be expanded with capital over a few years rather than a few decades. That difference cuts against the mirror-chokepoint framing above and is the strongest argument that this section overstates the durability of the position: the correct reading is that the robotics chokepoint is real but shallower than the semiconductor one, and it functions as a cost and timing weapon rather than a denial weapon.

**2. Reshoring gets complicated.** [Geopolitics](../../contested/geopolitics/) argues robotics enables reshoring of manufacturing to high-wage countries. True in principle. But **if the robots doing the reshoring are themselves imported from the country being reshored away from, the strategic gain is partial** - the dependency moves up a layer rather than disappearing. Reshoring assembly while importing the means of assembly is a weaker position than it appears in the announcement.

**3. The deployment data asymmetry compounds.** Whoever deploys the most units collects the most [interaction data](data-problem.md), which improves the policies, which improves the economics, which drives more deployment. If deployment volume and manufacturing capacity are correlated - and they are - **then the manufacturing advantage becomes a data advantage becomes a capability advantage.** This is the mechanism by which a hardware lead turns into a software lead, and it is the opposite of how the current AI race is structured.

## What would change this

- **Actuator innovation that routes around precision machining.** Direct-drive designs, electrohydraulic, or artificial-muscle approaches would reset the component map and devalue accumulated machining capability. Genuinely possible, entirely unproven.
- **Magnet-free or reduced-rare-earth motor designs.** Under active development for automotive reasons; robotics would inherit the benefit.
- **A Western industrial-policy response with actual volume behind it.** Announced repeatedly; the test is unit output, not funding announcements.
- **Component supply proving less scarce than modelled.** Every item in the bill of materials above is a manufactured good with an expandable supply curve, not a natural monopoly. Harmonic drives are scarce because demand has been small and qualification cycles long, not because the physics is hard; a credible multi-year order book is the thing that has always caused capacity to appear. If humanoid volumes materialize, the component map at the top of this page describes the starting conditions rather than the equilibrium, and the strategic conclusions weaken accordingly. **This is the most likely way this page is wrong**, and the signal is capacity announcements from second-source suppliers followed by actual shipments, not by tooling installed.
- **Assembly automating itself.** If robots can assemble robots, the labor-cost component of manufacturing falls and location matters less. This is the recursive case in the physical economy, and it is the most interesting long-run possibility in this section - it does for manufacturing what [recursive research acceleration](../../../06-uncertainties/recursive-self-improvement.md) would do for research.

---

**Related:** [Cost curves](cost-curves.md) · [The data problem](data-problem.md) on the deployment flywheel · [Geopolitics](../../contested/geopolitics/) on reshoring · [Energy](../../../01-substrate/energy.md) for the same decoupling argument · [Game 2 - Nations](../../../02-games/2-nations.md)

**Next:** [Form factor](form-factor.md)
