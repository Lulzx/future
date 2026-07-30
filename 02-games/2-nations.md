# Game 2 - Nations: a security dilemma with a leaky bucket

← [Part II](README.md) · [Index](../README.md)

---

Standard arms-race logic says: race. But AI differs from nuclear weapons in three ways that change the equilibrium - and each one degrades a different pillar of the arms-control model that people reach for by analogy.

## Three structural differences

- **Diffusion.** Capability leaks via weights, papers, people, and distillation. Leads decay at maybe **30–50%/yr** absent extraordinary security. Export controls attempt to convert a leaky lead into a durable one - with mixed and decaying success. A lead you cannot hold is not a strategic asset; it is a temporary commercial one.

- **Dual-use with civilian dominance.** ~95% of value is commercial. This makes AI harder to control than fissile material, because the infrastructure, talent, and supply chain are all civilian by default. It also means economic coupling runs deeper: the same constraint that would slow a rival slows your own economy.

- **No verification regime.** Training runs are not detectable like enrichment cascades. Any treaty faces a verification problem nobody has solved. Compute governance - tracking accelerators - is the only technically plausible lever, and it degrades as efficiency improves and as inference-heavy approaches substitute for training-heavy ones. The lever weakens exactly as the stakes rise.

## Why the nuclear analogy fails at the deterrence layer too

The three differences above break arms *control*; a fourth breaks arms-race *stability*. Nuclear bipolarity stabilized because both sides could count the other's arsenal well enough, second-strike capability made first moves suicidal, and the escalation ladder was legible. AI has none of these: capability is opaque even to its owner until evaluation, nobody knows whether a lead confers a decisive first-mover advantage or a temporary commercial one, and there is no shared ladder. Under opacity, each side's rational move is to plan against the *worst-case estimate* of the rival's covert progress - so both race harder than either's true position warrants. Secrecy is itself the destabilizer: credibly demonstrating restraint would require exactly the transparency into training runs that neither security establishment will grant, so even two genuinely restrained rivals cannot communicate restraint. This is a spiral model, not a deterrence model, and it runs on beliefs rather than capabilities - which means capability plateaus do not automatically cool it. **Failure mode:** if evaluation regimes mature to where capability can be credibly demonstrated without disclosure (structured evals, third-party attestation), the opacity spiral weakens and this paragraph overstates the instability.

## Consequence

> **No meaningful binding international agreement before a salient accident.**

Coordination is **event-driven, not reason-driven**. This is the historical pattern for aviation safety, nuclear power, financial regulation, and pharmaceutical approval alike - in every case the governing architecture was written after a disaster, not before one, and by people reacting to a specific salient failure rather than to a general risk argument. → [Base rates](../08-method/base-rates.md) §3

Expect a serious AI-attributed incident - cyber-physical, biological near-miss, or a market event - in **2027–2031**, and expect the regulatory architecture governing the 2030s to be written in the **18 months after it.**

The practical implication: the highest-leverage governance work right now is not advocacy. It is having the good version of the architecture drafted, defensible, and on the shelf before the window opens, because the window will be short and whatever is ready will win. → [C2](../07-indicators/governance.md)

## The compute-governance trap

[Bipolar](../03-domains/contested/geopolitics/bipolar.md) states it for the US–China dyad; it belongs in Game 2 because it is a structural property of the only verification lever:

**The competitive instrument and the future arms-control instrument are the same object.** Accelerator export controls are simultaneously how the West tries to hold a lead *and* the only technically plausible way to verify a later agreement. Using the lever hard as a race tool accelerates substitution (efficiency, domestic stacks, open weights) that **destroys it as a verification tool**.

There is no path where both objectives are maximized. Competitive use is, mechanically, a decision to give up verifiable control later - usually made by people optimizing the near-term race without stating the trade. That is why [Part V](../05-probabilities/) row 4 stays low even conditional on incidents: the incident produces *rules*; it does not produce *verifiability*. → [C3](../07-indicators/governance.md), [C3b](../07-indicators/governance.md)

## What counts as the salient incident

The original list was cyber-physical, biological near-miss, or market event. Rounds 2–10 add mechanisms that can open the same window:

| Mechanism | Recoverable? | Who writes the draft |
|---|---|---|
| **Financial / market dislocation** with AI in the causal chain | Mostly | Treasuries, market regulators, central banks |
| **Correlated insurance / cyber event** - shared model failure across many insureds | Partially | Insurers, reinsurers, then legislatures on backstop → [Uncertainty 6](../06-uncertainties/correlated-risk.md), [C7](../07-indicators/governance.md) |
| **Consumer or clinical harm** (companion, medical advice) | Partially | Health and product-safety agencies → [Meaning](../03-domains/cognitive/meaning.md) |
| **Kinetic / escalation** involving autonomy | **No** | Defense and national-security establishments → [Warfare](../03-domains/contested/warfare.md) |
| **Biosecurity near-miss** | Barely | Health + security hybrid → [Biosecurity](../03-domains/contested/biosecurity.md) |

**Finance and insurance are the most likely forcing events; warfare is the least recoverable.** The architecture you get depends on *which* incident opens the window - not on which risk was largest in expectation. A market event produces disclosure and liability rules; a kinetic event produces export and military constraints. Shelf-ready drafts should not assume a single genre of crisis.

Electricity-price politics ([Energy](../01-substrate/energy.md)) may bind *before* any of these as domestic regulation - but that is state-level ratepayer politics, not the international architecture Game 2 is about. Both can be true.

## Diffuse harm and the privacy reference class

If the dominant harms are gradual - labor displacement, epistemic degradation, dependency - **there may be no salient accident at all.** The correct reference class is then privacy regulation: late, weak, fragmented. → [Base rates](../08-method/base-rates.md) §3

That is a live failure mode for the whole Game 2 claim. The document underweights it relative to the aviation analogy. Indicator: years of rising diffuse harm metrics with no legislative super-cycle.

## State capacity and who actually writes the rules

[State capacity](../03-domains/contested/state-capacity.md) adds a caveat the short form of Game 2 omitted:

Even when the window opens, **the text that wins is the text that is ready and technically literate.** If the state cannot measure, hire, or draft, the architecture is written by industry consortia, funded standards bodies, or thin civil-society shops. That is not "regulation failed to arrive" - it is **regulation as capture by default**.

> **Refined prediction:** within 18 months of a salient AI-attributed incident in a major jurisdiction, binding rules are enacted *or* formally proposed at high probability - but **~50%** of the operative technical content is industry-originated unless a measurement institution already exists.

Shelf-readiness therefore includes **public-interest drafts**, not only lab policy blogs. → [C2](../07-indicators/governance.md)

## Interaction with the leaky bucket

Open weights and distillation mean post-incident rules in one bloc do not contain capability globally. The bucket still leaks. So national architectures will skew toward:

- **What can be enforced locally** - liability, procurement, power siting, deployment licensing
- **Not** what would require global verification of training

That reinforces low odds on [Part V](../05-probabilities/) row 4 and high importance of [insurance](../03-domains/cognitive/insurance.md) and domestic administrative law.

## Middle powers are rule-takers with an arbitrage option

Game 2 is usually told as a dyad, but most states are neither contestant nor bystander: they are venues. The [Gulf](../03-domains/contested/geopolitics/gulf.md) sells energy and capital to both blocs; [India](../03-domains/contested/geopolitics/india.md) sells talent and a market; small jurisdictions sell regulatory permissiveness the way flags of convenience sold it to shipping. The structural consequence: any bloc-level rule strict enough to bind creates an immediate arbitrage rent for whichever middle power declines to adopt it, and middle powers face weak incentives to decline that rent. Post-incident architectures will therefore bind capital-intensive, immobile layers (frontier training, grid interconnection) far better than mobile ones (deployment, fine-tuning, talent) - a second, independent reason the enforceable residue is local rather than global.

## Failure modes for Game 2

- **No incident by 2031** and still no binding regime - event-driven claim weakens; privacy class wins
- **Incident produces only theatre** - measurement capacity absent; [state capacity](../03-domains/contested/state-capacity.md) prediction confirmed
- **Pre-incident binding treaty with real verification** - the central claim fails cleanly (score it)
- **Compute governance revives** via on-chip attestation at scale - trap partially escapes; revisit row 4

---

**Related:** [Energy](../01-substrate/energy.md) · [Geopolitics](../03-domains/contested/geopolitics/) · [Bipolar](../03-domains/contested/geopolitics/bipolar.md) · [State capacity](../03-domains/contested/state-capacity.md) · [Insurance](../03-domains/cognitive/insurance.md) · [Warfare](../03-domains/contested/warfare.md) · [Part V](../05-probabilities/) · [Governance indicators](../07-indicators/governance.md)

**Next:** [Game 3 - Firms](3-firms.md)
