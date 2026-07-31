# Warfare

← [III.C - Contested](README.md) · [Part III](../README.md) · [Index](../../README.md)

---

Autonomy in munitions is already here, and the cost-exchange ratio strongly favors the cheap attacker. That sentence is the floor. The ceiling is crisis stability when decision loops outrun deliberation - the sharpest instance of the structural risk in the [compressed version](../../00-overview/compressed.md).

## The ratio that inverts a century of doctrine

A **$50k drone destroying a $5M vehicle** is a 100:1 exchange ratio.

Military-industrial logic since roughly 1945 has run on exquisite platforms: fewer, better, more expensive systems, each one a concentration of capability. That logic holds only while the platform survives contact with cheap threats. At 100:1, it doesn't.

Expect **mass-precision to dominate exquisite-platform doctrine**, and defense budgets to shift toward attritable systems. This is a slow, contested shift - procurement bureaucracies and industrial bases are built around the old logic and will defend it - but the arithmetic is not in question.

| Old logic | New arithmetic |
|---|---|
| Survivability of the platform | Acceptable loss rate of the swarm |
| Peak capability per unit | Capability × quantity × replacement rate |
| Long procurement cycles | Continuous software + airframe iteration |
| Scarce trained pilots / crews | Scarce autonomy stack + munitions inventory |

Industrial bases that can produce **attritable mass** (airframes, motors, warheads, radios) gain relative to those optimized only for exquisite platforms. That industrial question couples to [robotics supply chain](../physical/robotics/supply-chain.md) and to [geopolitics](geopolitics/) - manufacturing depth is strategy.

The sharper form of the industrial claim is **magazine depth**. An exchange ratio only matters if you can keep making the exchange, and a doctrine built on accepting loss rates is a doctrine that consumes inventory continuously rather than in a short opening campaign. Every recent conflict has ended up as a production race whose binding constraints were unglamorous: energetics, solid rocket motors, machine tools, and the specific chips inside seekers. **None of those are relieved by better models, and all of them take years of capital investment to expand**, which means the industrial adjustment lags the doctrinal one by most of a decade even where the doctrinal argument is already accepted. The country that wins the arithmetic on paper and cannot sustain the resupply has bought the analysis without the capability.

## The crisis-stability problem

The more serious issue is not cost. It is time.

Autonomous systems **compress decision timelines below human deliberation speed** - precisely the condition under which accidental escalation happens. Every historical near-miss in nuclear command and control was resolved by a human having enough time to doubt the system. Remove the time and you remove the mechanism.

Layers of the problem:

1. **Sensor-to-shooter compression** - less time between detection and engagement
2. **Swarm coordination** - engagement patterns that no single officer authored in detail
3. **Dual-use ISR and autonomy** - the same stack that stabilizes (better early warning) can destabilize (use-or-lose pressures, compressed OODA)
4. **Nuclear C2 adjacency** - even when AI is kept off the release trigger, it enters warning, targeting support, and conventional operations that change nuclear thresholds

This is not a claim that "killer robots cause nuclear war." It is a claim that **the error-correction mechanism that made the nuclear age survivable was time**, and autonomy spends that budget.

## The human comes out of the loop for physical reasons, not doctrinal ones

The debate over autonomy is usually conducted as though keeping a human in the loop were a policy choice that militaries could simply make. The contested-spectrum argument says otherwise, and it is the most important thing on this page.

**A remotely operated system requires a working radio link, and the link is the first thing an opponent attacks.** Jamming, spoofing, and directional denial are cheap, mature, and improving, and they degrade exactly the control channel that human supervision depends on. In a heavily contested electromagnetic environment the choice is not between an autonomous system and a supervised one; it is between an autonomous system and one that does not function. Autonomy is therefore not a preference that norms can talk militaries out of - **it is the countermeasure to the countermeasure**, and its adoption rate is set by adversary electronic-warfare capability rather than by anyone's ethics review.

This has an uncomfortable consequence for the mitigations usually proposed. Mandatory human latency and geo-fenced autonomy are coherent for the side that is not currently being jammed, which means they are coherent in peacetime and degrade precisely when they matter. Any regime that survives contact has to be designed for the case where the link is gone by assumption, which pushes the control point away from real-time supervision and toward what can be constrained *before* launch: engagement envelopes, target-class restrictions, geographic and temporal bounds, and self-deactivation defaults. Those are auditable in a way that "a human approved it" is not, since the approval is unobservable after the fact and the envelope is a property of the system.

*Failure mode:* if link resilience improves faster than denial - mesh relays, optical and low-probability-of-intercept links, autonomous relay aircraft - then supervised operation survives in contested space and the physical necessity argument weakens into a cost argument. Watch whether procurement funds communications resilience or on-board autonomy when it has to choose; the budget reveals which side of this the operators believe.

## Offense–defense balance by layer

| Layer | Shift | Why |
|---|---|---|
| Tactical conventional (UAV, loitering munitions) | Toward offense / attrition | Cheap attackers, expensive defenders, learning from every engagement |
| Air & missile defense | Contested | Interceptors can also get cheaper; cost curve race |
| Cyber-enabled military ops | See [cybersecurity](cybersecurity.md) | Same tools both sides; defense may win at equilibrium, offense wins early |
| Strategic / nuclear stability | Toward instability if timelines compress | Human doubt needs minutes; autonomy sells milliseconds |
| Industrial production | Toward states with manufacturing depth | Mass beats exquisite when loss rates are high |

**The human moat is escalation judgment** - not aiming. That judgment is exactly the slow, costly, non-verifiable cognitive work the master asymmetry says models handle worst, and exactly the work you cannot safely delegate when the downside is irreversible.

## Interaction with Game 2 and Taiwan

An accidental escalation is one of the candidate "salient accidents" that would trigger the regulatory response in [Game 2](../../02-games/2-nations.md). Unlike a market dislocation, this one is **not recoverable**, which is why the asymmetry between mechanisms matters more than their relative probabilities. → [Part V](../../05-probabilities/) row 3

[Uncertainty 4 / Taiwan](../../06-uncertainties/taiwan.md): AI cuts both ways on the probability of major disruption - better ISR and autonomy make blockade more detectable and more costly; they also compress decision timelines in the escalatory direction. The ~90% continuity assumption is not a warfare forecast; warfare is one of the ways it fails.

[Bipolar](geopolitics/bipolar.md) robotics point: a Western force structure that depends on imported attritable systems has a different vulnerability map than one that only worried about chips.

## Proliferation and the open stack

Open-weight models and commercial drones lower the floor for non-state and small-state capability. The constraint moves toward **materials, explosives regulation, and radio spectrum** - physical complements - not toward "access to AI." That is Game 3 logic applied to violence: intelligence is not the scarce input in the improvised attacker stack.

Export controls on frontier models do little to a $50k airframe with a commodity guidance stack. Controls on actuators, energetics, and specialized chips for seekers matter more and are harder to romanticize as AI policy.

## What to watch

| Signal | Reading |
|---|---|
| Share of munitions budgets on attritable vs exquisite | Doctrine shifting or stuck |
| Documented autonomy in the kill chain (level of human approval) | Timeline compression |
| Near-miss reports involving automated engagement | Stability tax becoming visible |
| Domestic production capacity for cheap airframes / one-way attack UAVs | Industrial base adapting |
| Open-weight + commercial drone use in conflicts | Proliferation floor |

## Failure modes

- **If defense cost curves** (directed energy, cheap interceptors, EW) bend faster than attack, the 100:1 story is temporary and mass-precision is less revolutionary than claimed.
- **If norms and C2 design** deliberately re-insert time (mandatory human latency, geo-fenced autonomy), the crisis-stability claim softens for states that adopt them - and creates a disadvantage against states that do not.
- **If the first salient AI incident is kinetic**, Game 2's architecture is written under wartime politics, not financial ones - a different and harsher institutional path.

### Attritable mass is a manufacturing race

Doctrine that depends on cheap one-way systems is a [robotics supply chain](../physical/robotics/supply-chain.md) claim in uniform: actuators, airframes, explosives chemistry, and assembly throughput, not model quality. States that can surge production of attritable systems hold a different deterrence map than states that can only surge exquisite platforms. Score munitions budgets *and* domestic production capacity for cheap systems together; a doctrine paper without a factory is not a resolved indicator.

---

**Related:** [Game 2 - Nations](../../02-games/2-nations.md) · [Bipolar](geopolitics/bipolar.md) · [Robotics supply chain](../physical/robotics/supply-chain.md) · [Cybersecurity](cybersecurity.md) · [Uncertainty 4](../../06-uncertainties/taiwan.md) · [Part V](../../05-probabilities/) · [Compressed version](../../00-overview/compressed.md)

**Next:** [Cybersecurity](cybersecurity.md)
