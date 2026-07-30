# United States and China - asymmetric bottlenecks

← [Geopolitics](README.md) · [III.C - Contested](../README.md) · [Index](../../../README.md)

---

The framing that dominates coverage - a race with a finish line - is the wrong shape. **Each side holds a chokepoint on the other, the chokepoints are on different inputs, and both decay on different schedules.** That is not a race; it is a mutual constraint with a clock attached.

## The two chokepoints

| | US-held | China-held |
|---|---|---|
| **What** | Advanced lithography and the accelerators downstream | Power build-out, rare-earth processing, manufacturing scale |
| **Narrowness** | Extremely narrow - a handful of firms, one critical supplier | Broad but deep; hard to replicate quickly |
| **Decays by** | Domestic substitution + algorithmic efficiency reducing the need | Western industrial policy, on a decade-plus timescale |
| **Binds on** | Training capability | Deployment capacity, and all of [robotics](../../physical/robotics/supply-chain.md) |

**These are not symmetric and they do not cancel.** The US chokepoint is sharper but wasting: every gain in [algorithmic efficiency](../../../01-substrate/compute.md) reduces how much frontier capability requires frontier silicon, and every year of domestic substitution effort narrows the gap. The Chinese chokepoint is blunter but durable: [~300GW/yr of generation additions](../../../01-substrate/energy.md) and rare-earth processing concentration are not replicated on a research timeline.

> **The uncomfortable implication:** the US advantage is on the axis that [diffuses](../../../02-games/2-nations.md) at 30–50%/yr, and China's is on the axis that has to be physically built. Over a ten-year horizon the second is the more defensible asset, which is close to the opposite of how the contest is usually described.

## What each side's constraint actually is

**The US bottleneck is domestic and legal.** [Energy](../../../01-substrate/energy.md) makes the case: 5–7 year interconnection queues, turbine backlogs, transmission siting. By 2028 the rate-limiting step on US frontier AI is environmental review, not chip supply - and no export control affects that. **The US is constrained by the US.** → [Uncertainty 2](../../../06-uncertainties/power-permitting.md), [State capacity](../state-capacity.md)

**The China bottleneck is imported and narrowing.** Access to leading-edge accelerators, gated by controls that leak, degrade with efficiency gains, and are being routed around. The direction of travel is toward the constraint mattering less, not more.

Both sides are therefore working on the wrong problem relative to their own binding constraint: the US spends political capital on export controls that address China's bottleneck while its own goes unaddressed, and China spends on domestic silicon while its structural advantages compound unattended.

The symmetry is not accidental and it is worth naming, because it predicts what neither side will do. **Each government is optimizing the constraint it can attribute to a foreign adversary rather than the one it would have to fix at home.** Export controls are legible, attributable, and satisfying; interconnection queue reform is a fight with domestic landowners, utilities, and litigants, with no foreign villain and no announcement moment. Chinese domestic-silicon investment has the same political shape in reverse: it is the answer to an externally imposed humiliation, whereas the harder problem - converting enormous deployed capacity into broad economic absorption, the third axis on [the hub page](README.md) - is a story about household demand and firm-level reorganization that no industrial ministry can claim credit for. The prediction that follows is that both bottlenecks persist longer than a rational planner would allow, and that the first side to treat its own constraint as the strategic priority gains more than either gains from any control regime.

## The compute-governance trap

[Game 2](../../../02-games/2-nations.md) noted that compute governance is the only technically plausible verification lever and that it weakens as efficiency improves. The bilateral version is worse:

**The lever and the leverage are the same object.** Accelerator controls are simultaneously the West's strategic advantage *and* the only mechanism by which any future arms-control regime could be verified. Using it hard as a competitive weapon accelerates the substitution that destroys it as a verification tool.

There is no version of this where both objectives are served. **The competitive use of export controls is, mechanically, a decision to give up on verifiable arms control later** - and that trade is being made implicitly, by people optimizing for the near-term objective, without anyone stating it.

## Why the follower gives the weights away

The configuration below treats the open-weight tier as the coupling mechanism between the two ecosystems, and that deserves an argument rather than an assertion, because releasing frontier-adjacent weights looks like unilateral disarmament and is not.

**Commoditizing your competitor's complement is a standard and well-understood move**, and it is the same logic [Game 1](../../../02-games/1-labs.md) applies to labs, operating at the level of states. If a rival's strategic position rests on selling access to models, then weights good enough to substitute for that access collapse the price of the layer the rival monetizes, while leaving your own position - which rests on manufacturing, power, and deployment scale - untouched. The follower on capability therefore has a structural incentive to release, and the leader has a structural incentive not to, entirely independent of anyone's stated views about openness. Any explanation of open-weight releases that runs through ideology or safety philosophy is explaining a decision that the competitive arithmetic already determines.

Three consequences follow. Standards and tooling accumulate around whichever weights are freely available, which is a durable form of influence that no export control touches. The [open-weight lag](../../../02-games/2-nations.md) (~3–6 months as of 2026, Epoch AI) becomes a policy variable rather than a natural constant, since a state that wants the lag short can subsidize it. And compute-based verification degrades further, because the actors a treaty would most want to observe are the ones that need the least training compute to reach a given capability.

*Failure mode:* this assumes the follower stays a follower. A state that believes it has taken the capability lead has the leader's incentives, and the release policy should invert - so a sustained shift toward closed frontier releases from the currently-open side is evidence about perceived relative position, and is a cleaner signal of it than any benchmark table.

## Taiwan, priced honestly

Every projection in this document assumes Taiwanese fabrication continues. That assumption is doing more work than any other single input, and it is not an AI question.

- **A blockade or conflict removes the majority of leading-edge capacity** for a period measured in years, not months. No amount of announced fab construction elsewhere changes the near-term arithmetic - the [2026–2028](../../../04-timelines/2026-2028.md) and [2028–2032](../../../04-timelines/2028-2032.md) periods have no substitute.
- **It is the one scenario that invalidates the entire document**, and unlike the uncertainties in [Part VI](../../../06-uncertainties/), it is not skewed toward better outcomes.
- **AI cuts both ways on the probability.** Better ISR and autonomous systems make a blockade more detectable and more costly; they also compress decision timelines in exactly the way [Warfare](../warfare.md) identifies as escalatory.

> **Stated so it can be scored:** this document assumes **~90%** no major disruption to Taiwanese leading-edge output through 2032. That is not a confident geopolitical judgment; it is a modelling assumption, and everything downstream inherits it. Promoted to [Uncertainty 4](../../../06-uncertainties/taiwan.md) in round 8 so the register accounts for it.

## The most likely 2030s configuration

Not a winner, and not decoupling either - **partial bifurcation with asymmetric dependence:**

- **Two capability ecosystems**, closer than the controls intend, with the open-weight tier acting as the coupling mechanism between them
- **Diverging capacity**, favoring whoever builds power fastest, which structurally favors China and the Gulf
- **Third countries choosing per-layer**, not per-bloc - Chinese hardware and Western models, or the reverse, depending on the layer and the price
- **Robotics as the mirror image of AI**, with the dependency arrow reversed → [Supply chain](../../physical/robotics/supply-chain.md)

The last point is the one most likely to surprise. **A Western reshoring program executed with imported robots is a weaker strategic position than it appears**, and the announcements will not say so.

---

**Related:** [Energy](../../../01-substrate/energy.md) · [Game 2 - Nations](../../../02-games/2-nations.md) · [Robotics supply chain](../../physical/robotics/supply-chain.md) · [Warfare](../warfare.md) · [Compute](../../../01-substrate/compute.md)

**Next:** [India](india.md)
