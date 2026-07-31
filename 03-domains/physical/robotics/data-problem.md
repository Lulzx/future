# The Data Problem - there is no internet of manipulation

← [Robotics](README.md) · [III.B - Physical](../README.md) · [Index](../../../README.md)

---

Every other constraint in robotics is downstream of this one, so it is worth being precise about what the constraint actually is.

**It is not that manipulation data is scarce. It is that manipulation data cannot be copied.**

Text scaled because one person's writing trains every model forever at zero marginal cost. A grasp attempt trains one policy, on one robot, in one configuration, and producing the next one requires a second physical trial in real time. The economics of the two data types are not the same kind of thing.

## The arithmetic

Frontier language models trained on the order of 10^13 tokens of human text, accumulated free over decades.

The comparable robotics corpora are measured in **thousands of hours** of demonstration - perhaps 10^7 seconds of interaction. That is six orders of magnitude of gap, and unlike the text case, closing it costs money linearly. There is no archive to discover, no crawl to run, no decade of accumulated output sitting on public servers waiting to be indexed.

**Worse, the data does not transfer cleanly.** A policy trained on one robot's kinematics, one gripper, one camera placement, and one lighting condition degrades on all of them. Text has no equivalent of the embodiment gap. The corpus is not only small; it is fragmented across incompatible hardware.

There is a third property, less discussed than scarcity or fragmentation, that may matter more than either: **manipulation data goes stale in a way text does not.** A sentence written in 2010 trains a model in 2026 as well as it ever did. A grasp trajectory recorded on a gripper that has since been redesigned, or in a warehouse whose packaging has since changed, describes a world that no longer exists. Every hardware revision partially invalidates the corpus collected on the previous revision, which means the collecting party is running to stand still and cannot simply accumulate. This is the mechanism behind an otherwise odd observation - that robotics groups keep re-collecting data they already have - and it is a structural argument for freezing hardware earlier than engineering instinct wants to, because a mediocre platform that stays fixed accumulates a usable corpus and an improving one does not.

The strategic version of the same point: **hardware iteration speed and data accumulation are in direct tension.** A competitor who ships better actuators every year may be destroying more corpus value than the improvement is worth, and a competitor who ships a frozen platform at volume may be building the only asset that compounds.

## The four ways out, ranked by how well they are working

### 1. Teleoperation - expensive, working, and the current answer

A human wears a rig or drives a controller; the robot records. Data quality is excellent, and it is the backbone of nearly every impressive demo of the last three years.

But the cost structure is brutal: it is **human labor at roughly 1:1 with robot operating time**, which means collecting the data costs more than the labor being automated, until the policy generalizes. That is a bet, not a business, and it only pays if generalization arrives.

**The important consequence: teleoperation data collection is itself a large and growing employer**, and one that is invisible in every automation forecast. There is a real, if temporary, occupation created by automating occupations.

### 2. Simulation - cheap, scalable, and stuck on contact

Simulation is nearly free and parallelizes without limit. It works well for locomotion, navigation, and whole-body control, where the relevant physics is rigid-body dynamics that simulators model accurately.

It works badly for **contact-rich manipulation** - friction, deformation, compliance, slip, and the behavior of soft or articulated objects. These are precisely the physics that simulators approximate poorly and precisely the physics that manipulation consists of.

Domain randomization narrows the sim-to-real gap by training across randomized parameters rather than accurate ones. It genuinely works, and it degrades exactly where the physics is least well-modelled - which is the same place the task is hardest. **Simulation is strongest where the problem is easiest.**

### 3. Video - abundant, and missing the two things that matter

There are billions of hours of humans manipulating objects on the internet. This is the most attractive escape hatch and it has an obvious defect: **video contains no forces and no failures.**

- **No forces.** You cannot see grip pressure, weight, or compliance. The visible trajectory is a fraction of the control problem, and often the easy fraction.
- **No failures.** Uploaded video is overwhelmingly of things going right. Learning a robust policy requires the distribution of ways things go wrong, which is exactly what nobody records or posts.
- **No embodiment correspondence.** A human hand is not a two-finger gripper, and the mapping between them is not a solved problem.

Video pretraining is nonetheless real and useful - it teaches object affordances, scene understanding, and plausible task decomposition. **It gets you the plan and not the execution**, which is a fair description of where the field currently sits.

### 4. Fleet learning - the one that could actually break the constraint

Deployed robots collect data continuously; the fleet shares a policy; each unit's experience improves all of them. This is the only mechanism in the list with the compounding property that made text scaling work.

It also has a **cold-start problem that is the whole difficulty**: the fleet must be economically viable *before* the data exists to make it viable. That is why structured environments matter so much - a warehouse task is repetitive enough to be worth deploying at today's capability, which starts the flywheel that eventually reaches unstructured tasks.

> **This is the single most important dynamic in robotics.** Whoever gets a large fleet doing real work first accumulates an asset nobody can buy, copy, or catch up to quickly - proprietary real-time interaction data, which is the [inelastic complement](../../../02-games/3-firms.md) in its purest form. It is also why the winner is unlikely to be whoever has the best model.

The flywheel has a defect that is rarely acknowledged by the people describing it. **A deployed fleet collects data from the distribution it already handles well**, because a fleet is only deployed where it succeeds often enough to be worth paying for. The failures that would teach it the hard cases are the ones the deployment was scoped to avoid, so the marginal value of the millionth warehouse trial is far below the value of the first, and the data has the same self-selection problem as clinical outcome records. Fleet learning compounds capability *within* an environment far better than it extends capability *across* environments, which is consistent with what a decade of autonomous driving fleet miles actually produced: superb performance in mapped, benign conditions and stubbornly slow progress on the tail.

That does not defeat the argument, but it changes what the flywheel is worth. It is a strong moat and a weak escape route: excellent for defending a warehouse business against a competitor, much less useful for getting from warehouses to kitchens. The transfer question is therefore not a footnote to fleet learning but the thing fleet learning depends on, which routes straight back to cross-embodiment and cross-environment generalization below.

## What would falsify the pessimistic read

- **Cross-embodiment transfer working well.** If policies trained across heterogeneous robot fleets transfer to new hardware without substantial retraining, the fragmentation problem dissolves and the effective corpus is the union of everyone's data rather than the intersection. This is an active research area with genuine recent progress and is the most likely way the timeline compresses.
- **Simulation closing the contact gap.** Differentiable and learned simulators for deformable and contact-rich physics would convert the constraint from physical to computational - which is the one substitution this document treats as always available.
- **Tactile sensing at scale.** Much of the missing information is force and texture. Cheap, durable, high-resolution tactile skin would make video-scale pretraining far more useful by supplying the missing channel at fine-tuning time.

**Any one of these landing moves the [2032–2040](../../../04-timelines/2032-2040.md) estimate years earlier.** They are the highest-variance items in the physical half of this document.

### Teleop is a measurement, not a shame

High teleoperation share in "autonomous" fleets is the honest baseline, not a failure. It is how the cold-start problem gets paid for: humans provide the success distribution the fleet later learns from, at a cost that only works if utilization and wages justify the robot-plus-operator stack. Watch the **teleop-to-autonomy ratio falling in production settings** ([robotics hub](README.md) indicator family, [B12](../../../07-indicators/diffusion/capability.md)) - not demo videos with no operator in frame. A rising teleop share at constant deployment is a regression; a falling share at rising deployment is the flywheel.

**Fleet learning is a moat inside a domain, not a bridge between them.** Millionth warehouse pick teaches warehouse; it does not teach kitchens. Treat cross-environment transfer as a separate research event from fleet scale.

---

**Related:** [Cost curves](cost-curves.md) · [Form factor](form-factor.md) on why humanoids are a data strategy · [Data](../../../01-substrate/data.md) for the general asymmetry · [Agriculture](../agriculture.md) and [Logistics](../logistics.md) for structured-environment fleets

**Next:** [Cost curves](cost-curves.md)
