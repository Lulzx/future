# Game 1 - Labs: a Tullock contest, not a prisoner's dilemma

← [Part II](README.md) · [Index](../README.md)

---

People call the lab race a prisoner's dilemma. It isn't. A PD has a cooperative equilibrium that's stable under enforcement.

This is a **contest**: the prize is winner-take-most market position, effort translates to probability of winning, and - critically - the marginal return to effort is highest when competitors are close. Contest theory predicts **over-dissipation**: aggregate spend exceeds the prize value. That's exactly what we observe.

The distinction is not academic. PD framing implies that the fix is an enforceable agreement. Contest framing implies that the fix is changing the prize structure or the number of contestants - and that absent that, spending is rational at the firm level all the way past the point where it is collectively wasteful.

## Why the PD frame keeps winning the rhetoric

It is morally convenient: if the problem is a missing agreement, the solution is diplomacy. Contest theory is colder: **with this prize and this technology, racing is equilibrium behavior**, and safety spends only what private incentives force. The policy implication is to change payoffs (liability, procurement, capital access), not to exhort restraint.

Export controls and compute governance try to change the contest from outside. They also [degrade the only future verification lever](../03-domains/contested/geopolitics/bipolar.md) - a trap Game 2 and Part V row 4 inherit.

## What contest theory actually predicts here

Three standard results map cleanly onto observed behavior, which is the reason to trust the frame:

1. **Dissipation scales with closeness.** In a Tullock contest, aggregate effort is maximal when contestants are evenly matched and falls off as one pulls ahead. This predicts spending surges whenever a rival demonstrates parity (each capability leapfrog triggers a budget response) and predicts that a durable capability gap, if one ever opened, would *cool* the race rather than heat it. The observed pattern since 2023 - training budgets ratcheting after every rival release - is the evenly-matched regime.
2. **Asymmetric outside options sort who over-spends.** A pure-play lab's continuation value outside the contest is roughly zero; a hyperscaler's is its existing business. Standard results say the player with the worse outside option rationally spends a *larger share* of its resources on the contest. That is the mechanism behind the consolidation prediction below: pure-plays are structurally the over-extended players, so a funding shock culls them first, not because they are worse at research but because their balance sheets are all contest.
3. **The prize is partly constructed by the contestants.** Winner-take-most is an assumption about markets, not a law. If [inference economics](../01-substrate/inference-economics.md) holds and frontier advantage decays in months, the true prize is smaller than contestants behave as if it is - which makes the observed spend *over*-dissipation twice over. The alternative reading, that contestants are buying a small chance of a decisive, compounding lead ([Uncertainty 1](../06-uncertainties/recursive-self-improvement.md)), is the only way to rationalize current spend as an expected-value bet rather than a trap. Which reading is right is not settleable now; the spend is consistent with both rational lottery-ticket purchase and classic contest over-dissipation.

**Failure mode for the frame itself:** if one lab opens a gap the others visibly cannot close and spending *still* accelerates, the contest model is missing something - most likely that the contestants are playing for state patronage rather than market prize, at which point Game 2 has absorbed Game 1.

## The safety undersupply, and three things that push back

Safety is a public good with private cost, so it's undersupplied relative to social optimum. But three forces push back harder than the naive model suggests:

1. **Liability.** A lab that ships something that kills people internalizes it - if plaintiffs can reach them and insurers price the risk. Insurance markets price continuously rather than after a legislative cycle. → [Insurance](../03-domains/cognitive/insurance.md), [Uncertainty 6](../06-uncertainties/correlated-risk.md)
2. **Talent.** Researchers have preferences and are mobile. This is a real constraint on lab behavior, and it is unusual for an industry: the scarce input has opinions about how it is used.
3. **Capability–safety complementarity.** A model that reliably follows instructions is both safer and more commercially valuable. Alignment and usefulness are correlated goods over much of the range - genuinely lucky, and **not guaranteed to hold at higher capability.**

That third one carries the optimistic case and it is the one most likely to fail quietly. If the correlation breaks, the undersupply becomes real and there is no market mechanism left to correct it.

### Where liability actually binds

[C6](../07-indicators/governance.md) is the indicator. Until precedent assigns autonomous harm, contracts allocate by negotiation and labs push risk downstream to deployers. **Enterprise indemnification breadth is the revealed map of how much labs believe their own reliability claims.** Narrow indemnification + broad marketing is the equilibrium to expect in a contest; the opposite would be news.

## Open weights as the coupling mechanism

The contest is not only closed labs racing each other. A large open-weight tier sits close behind frontier - measured at **~3–6 months** as of 2026 (Epoch AI, Jan–May series; the corpus originally carried ~9–15 months) - set by the ratio of frontier training spend to distillation cost. The stability assumption behind the original figure is what the shortening challenges: the gap compressed rather than holding.

Open weights:

- **Couple** the US and Chinese ecosystems despite controls ([bipolar](../03-domains/contested/geopolitics/bipolar.md))
- **Set the floor** for [Global South](../03-domains/contested/geopolitics/global-south.md) and startup application layers
- **Weaken** compute governance as a verification story (capability without a reportable cluster)

Closing the open tier would require a different contest structure (criminalization, liability for release) that no major jurisdiction has fully chosen.

## Capital intensity and who exits

> **Consolidation to 3–5 frontier labs globally by 2029** (capital intensity), with a large fast-following open-weight tier **~9–15 months behind**.

A [correction](../01-substrate/capital.md) is **differentially destructive**: commercially financed labs exit; strategically financed ones (sovereign, hyperscaler, state-directed) remain. Post-correction the contest has fewer players and more state adjacency - which changes Game 2 more than it changes the capability curve.

Sovereign buyers sit outside NPV discipline. That is how the [$100B training run](../01-substrate/compute.md) can survive a commercial winter: the buyer changes.

Consolidation does not end the contest; it changes its currency. With 3–5 players, most of them state-adjacent, the contest prize shifts from market position toward strategic position, tacit coordination on price becomes feasible in the commercial layer, and the safety-relevant competition migrates into Game 2 where the players are governments. The endgame of Game 1 is not a winner - it is a handoff.

## Prediction

> Consolidation to **3–5 frontier labs globally by 2029**, open-weight tier **~9–15 months behind**, gap stable rather than collapsing.

> If the 2027–29 correction arrives, **majority of pure-play frontier labs** either merge, pivot to applications, or become state-adjacent within 24 months of the trough.

*Ground note (r25): the lag clause is running wrong in the direction of faster diffusion - Epoch AI (Jan–May 2026) measures ~3–6 months, so "gap stable" is already violated even though the consolidation clause is unresolved. The prediction text stays as authored and scores as written; the ledger note is the revision channel, not the blockquote.*

## Failure modes

- **Prize structure changes** (procurement only from audited labs; strict liability on frontier release) - contest intensity falls.
- **Capability–safety correlation breaks** - private undersupply of safety becomes first-order; talent and liability may not compensate.
- **Open-weight gap closes below ~6 months** - controls failing; [C4](../07-indicators/governance.md) trigger. *Already partially live at ~3–6 months measured; the failure mode is now about whether it stays there or compresses further, not whether it can happen.*

### What the lag compression does to the contest

A shorter open-weight lag shrinks the private prize (frontier access is a thinner wasting asset - [inference economics](../01-substrate/inference-economics.md)) while raising the social stakes of every release (capability reaches the application layer and the rival ecosystem faster). Rational contestants may therefore *increase* closed-frontier spend to buy a temporary lead even as the lead is worth less - classic over-dissipation under a depreciating prize. The policy implication from the PD frame (agree to slow down) gets harder, not easier: verification of any slowdown is weaker when weights and distillations circulate in months. That is why [Part V](../05-probabilities/README.md) row 4 moved in r26 and why Game 1 and Game 2 must be read as a coupled system after the lag miss.

**Score consolidation and lag separately.** The authored blockquote still pairs them; [scoring](../08-method/scoring.md) partial-credit rule and the register require clause-level resolution. Lag already missed; consolidation is still open through 2029.

---

**Related:** [Compute](../01-substrate/compute.md) · [Capital](../01-substrate/capital.md) · [Game 2 - Nations](2-nations.md) · [Insurance](../03-domains/cognitive/insurance.md) · [Uncertainty 1 - RSI](../06-uncertainties/recursive-self-improvement.md)

**Next:** [Game 2 - Nations](2-nations.md)
