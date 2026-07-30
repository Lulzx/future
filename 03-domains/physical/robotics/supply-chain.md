# Supply Chain — why this is not an AI race

← [Robotics](README.md) · [III.B — Physical](../README.md) · [Index](../../../README.md)

---

The most common error in robotics forecasting is treating it as a continuation of the AI race, with the same players, the same constraints, and the same map. It is not, and the reason is that **a robot is 90% a manufactured object and 10% a policy.**

The policy is subject to everything in [Part I](../../../01-substrate/) — it gets cheap, it diffuses, it has a [two-year moat](../../../01-substrate/inference-economics.md). The manufactured object is subject to none of that.

## The bill of materials is the strategic map

| Component | Why it binds | Where capacity sits |
|---|---|---|
| **Actuators** — harmonic drives, cycloidal reducers, servos | Precision machining at volume; long qualification cycles | Japan historically; China at volume and closing on precision |
| **Rare-earth magnets** — NdFeB for high torque density | Processing, not ore, is the chokepoint | China, overwhelmingly, at the refining and sintering stage |
| **Battery cells** | Energy density and cycle life gate untethered operation | China, then Korea |
| **Sensors** — force/torque, tactile, depth | Currently expensive and low-volume; a cost problem, not a capability one | Fragmented |
| **Assembly** | Thousands of parts, high dexterity, tight tolerances | Wherever electronics assembly already is |

**Read the right-hand column.** It is not the same column as frontier AI capability, and that mismatch is the single most important fact about how the 2030s physical economy plays out.

## Why China's position here is stronger than in AI

In AI, the US and allied position rests on a chokepoint — advanced lithography and the accelerators downstream of it — that is genuinely narrow and genuinely defensible for some years.

In robotics **there is no equivalent chokepoint working in the same direction.** Instead:

- **Vertical integration.** A producer with domestic actuators, magnets, cells, and assembly faces a different cost curve than an integrator buying components across borders. That advantage compounds with volume rather than eroding.
- **Manufacturing tacit knowledge.** The knowledge of how to produce millions of precise mechanical assemblies reliably is exactly the kind that does not transfer through documents — the same tacit-knowledge argument made about [biosecurity](../../contested/biosecurity.md), pointing the other way.
- **A domestic market that starts the flywheel.** Industrial policy support plus a large manufacturing base means deployment can begin before unit economics work, which is precisely the cold-start condition [fleet learning](data-problem.md) requires.
- **Rare-earth processing as the mirror chokepoint.** Concentrated, hard to relocate quickly, and directly analogous to lithography in structure — just pointing in the opposite direction.

> **Prediction:** by 2032, **~70%** likely that the majority of general-purpose robot units manufactured globally are Chinese-made, largely independent of where the best policies are trained. Hardware share and software share decouple, exactly as [energy capacity decoupled from AI capability](../../../01-substrate/energy.md).

## The strategic consequences

**1. Export controls run in reverse.** The tool that constrains a rival in AI does not obviously exist in robotics, and the analogous tool — rare-earth and component restriction — is held by the other side. Policy built on the AI template will not transfer.

**2. Reshoring gets complicated.** [Geopolitics](../../contested/geopolitics.md) argues robotics enables reshoring of manufacturing to high-wage countries. True in principle. But **if the robots doing the reshoring are themselves imported from the country being reshored away from, the strategic gain is partial** — the dependency moves up a layer rather than disappearing. Reshoring assembly while importing the means of assembly is a weaker position than it appears in the announcement.

**3. The deployment data asymmetry compounds.** Whoever deploys the most units collects the most [interaction data](data-problem.md), which improves the policies, which improves the economics, which drives more deployment. If deployment volume and manufacturing capacity are correlated — and they are — **then the manufacturing advantage becomes a data advantage becomes a capability advantage.** This is the mechanism by which a hardware lead turns into a software lead, and it is the opposite of how the current AI race is structured.

## What would change this

- **Actuator innovation that routes around precision machining.** Direct-drive designs, electrohydraulic, or artificial-muscle approaches would reset the component map and devalue accumulated machining capability. Genuinely possible, entirely unproven.
- **Magnet-free or reduced-rare-earth motor designs.** Under active development for automotive reasons; robotics would inherit the benefit.
- **A Western industrial-policy response with actual volume behind it.** Announced repeatedly; the test is unit output, not funding announcements.
- **Assembly automating itself.** If robots can assemble robots, the labor-cost component of manufacturing falls and location matters less. This is the recursive case in the physical economy, and it is the most interesting long-run possibility in this section — it does for manufacturing what [recursive research acceleration](../../../06-uncertainties/recursive-self-improvement.md) would do for research.

---

**Related:** [Cost curves](cost-curves.md) · [The data problem](data-problem.md) on the deployment flywheel · [Geopolitics](../../contested/geopolitics.md) on reshoring · [Energy](../../../01-substrate/energy.md) for the same decoupling argument · [Game 2 — Nations](../../../02-games/2-nations.md)

**Next:** [Form factor](form-factor.md)
