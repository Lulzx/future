# III.C - Contested Domains

← [Part III](../README.md) · [Index](../../README.md)

---

Domains with an **adversary**: another intelligence optimizing against you, in real time, using the same tools. This changes the analysis fundamentally and it is why these are grouped apart.

In [III.A](../cognitive/) and [III.B](../physical/), capability improvement is straightforwardly good for the user. Here it is not, because **the opponent gets the same improvement on the same schedule.** The question is never "what can AI do" but "what does AI do to the offense–defense balance," and that is a different question with a different answer in each domain below.

## The domains

| Domain | Ground truth | Offense–defense shift | Timing |
|---|---|---|---|
| [Geopolitics](geopolitics/) - [US–China](geopolitics/bipolar.md), [India](geopolitics/india.md), [Europe](geopolitics/europe.md), [Gulf](geopolitics/gulf.md), [Global South](geopolitics/global-south.md) | N/A | - | 2030s structural break |
| [Warfare](warfare.md) | Cheap and brutal | Toward offense; escalation judgment is the moat | Now |
| [Cybersecurity](cybersecurity.md) | Very cheap - exploits verify themselves | Contested; likely defense-favoring at equilibrium | Now |
| [Biosecurity](biosecurity.md) | Expensive to obtain, catastrophic to get wrong | Toward offense; asymmetric | Now, quietly |
| [State capacity](state-capacity.md) | Weak | - | The binding constraint on everything else |

## The four things that differ here

**1. Ground truth is cheap for the attacker and expensive for the defender.** An exploit either works or it doesn't - perfect, immediate, automatic verification, which is exactly the regime where [capability grows fastest](../../01-substrate/data.md). "Did the system stay secure" has no such signal; it is an absence, confirmable only by the passage of time. **The asymmetry in learning rates follows directly from the asymmetry in feedback**, and it recurs in every domain in this group.

**2. Diffusion is the threat model, not the business model.** Everywhere else in [Part III](../README.md), capability spreading is how value gets realized. Here it is how risk gets realized. This is what makes [Game 2](../../02-games/2-nations.md)'s leaky-bucket result matter: an open-weight lag now measured at ~3–6 months (Epoch AI, 2026) is a commercial detail in software and a security parameter here - and its shortening tightens this part's timelines while it loosens Part II's.

**3. The counterparty adapts.** Static defenses are the only kind that gets built, and adaptive attackers are the only kind that shows up. Every prediction in this group therefore has a shorter half-life than anything in the other two groups.

**4. Attribution is the hinge, and it is loosening.** Deterrence is a claim about consequences, and consequences require knowing who acted. Cheap capable tooling raises the number of plausible authors of any given act: an intrusion, a designed pathogen, or a coordinated drone attack that a decade ago implied a state programme now implies weights, a modest budget, and someone competent. That cuts twice. It weakens deterrence against the small actor, who was never deterrable by threat of retaliation and is now materially more capable. And it weakens deterrence between large actors, because a state can no longer be confident that the attacker it is preparing to punish is the attacker it was actually hit by. [Warfare](warfare.md) treats compressed decision time as the escalation risk; ambiguous authorship is the other half of the same problem, since a fast decision taken on a mistaken attribution is precisely the failure the nuclear era spent fifty years engineering time into the loop to prevent. *Failure mode:* forensics has cheap ground truth too once an incident is in hand, and if provenance and attribution tooling improves faster than obfuscation, attribution degrades far less than this predicts and deterrence reverts to roughly its pre-AI condition.

## What the group predicts jointly

Read together these pages make one prediction rather than five: **the near term degrades in every domain here, and the medium term diverges by domain according to whether the defensive task has a verifiable form.**

The near-term degradation is a pure diffusion result and requires no assumption about frontier progress at all. Offensive competence at what was recently an expert level is available to the marginal actor within the [open-weight lag](../../02-games/2-nations.md), while defensive competence requires integration into an existing estate, budget authority, and someone to run it. The offense side of every domain in this group buys capability; the defense side has to *deploy* it, and deployment is the slow, institutional, complement-hungry activity that this document keeps finding to be the real constraint.

The divergence afterwards splits on one question. Where the defensive job can be turned into something a machine can check - a proof that a memory-safety class is absent, a screened synthesis order, a formally specified control invariant - defense eventually gets the same fast feedback loop that offense started with, and [cybersecurity](cybersecurity.md) argues it wins at equilibrium. Where the defensive job is irreducibly physical and institutional - manufacturing and distributing a countermeasure, hardening a substation, deciding whether an ambiguous radar return warrants a response - the asymmetry persists, because no amount of cheap cognition compresses the slow term. That is why [biosecurity](biosecurity.md) is the pessimistic page in this group and cybersecurity is not, despite biology having the more expensive ground truth.

**The trough is also the governance window.** [Game 2](../../02-games/2-nations.md) expects regulatory architecture to be written in the roughly 18 months after a salient incident, and this group is where the salient incident comes from. Which domain supplies it substantially determines what gets written: a correlated cyber loss produces liability and minimum-controls rules, a bio near-miss produces access and laboratory rules, a kinetic accident produces rules written under wartime politics. The mechanisms are not equally likely and they are much less equally *recoverable*, which is why the ordering by probability is the wrong ordering to plan against.

## Where this group is most likely wrong

The offense-favoring conclusion is derived from feedback structure rather than measured from outcomes, and there is a specific way that derivation misleads. **Defensive investment is elastic to visible loss in a way offensive investment is not elastic to anything.** Premiums, budgets, and statutes all respond to incidents, so a bad enough trough funds its own exit, and the funding arrives concentrated on whichever domain produced the incident. If that response is fast, the trough is shallower than these pages imply and the aggregate damage lands mostly on the actors too small to be part of the response - which is a distributional claim rather than a severity one, and a much less dramatic story than the one the framework tells.

The second way to be wrong is measurement. Every quantity available in these domains is a *reported* incident count, and reporting improves at the same time as both offense and defense. A flat breach count is compatible with a much worse threat environment and better detection, or with a stable environment and a disclosure regime that grew teeth. Where possible, the pages here anchor on prices - premiums, exclusions, exchange ratios - because those are produced by parties who lose money for being wrong.

## Why [geopolitics](geopolitics/) leads the group

It is filed first because it is the substrate the other four run on, not because it is the most adversarial. Whether cyber defense consolidates into a few platforms, whether synthesis screening becomes universal, and whether autonomy norms constrain anyone are all questions about which states can act and which states are being acted upon - and the answers are set by the capability, capacity, and absorption positions that [the geopolitics hub](geopolitics/) lays out. A cyber policy is a state's policy; a state that cannot build power, cannot hire engineers, and cannot enforce across a border has a different menu than one that can.

The reverse dependency is weaker but real: the offense-favoring near term is itself a force on the geopolitical map, because it raises the value of the two things scarce states cannot buy quickly - defended critical infrastructure and institutional trust - and lowers the value of the one thing they can, which is access to the models themselves.

## Why [state capacity](state-capacity.md) is filed here

It is not adversarial in the same sense, but it is contested - and it is the **precondition for every governance claim in the document.** [Game 2](../../02-games/2-nations.md) predicts regulatory architecture written in an 18-month window after a salient incident. Whether that architecture is any good, and whether it can be enforced at all, is a question about the technical and institutional capability of the state, which currently receives almost no attention relative to its leverage.

### Lag compression raises the offense floor

Open-weight lag ~3–6 months means defensive institutions must absorb capability that was frontier last quarter. That does not change which domain supplies the salient incident, but it shortens the time between "available to sophisticated actors" and "available to the margin." Score trough severity with lag as a parameter, not as a constant from 2023.

---

**Next:** [Geopolitics](geopolitics/) → [Part IV - Timelines](../../04-timelines/)
