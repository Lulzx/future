# Drug discovery - preclinical speed, clinical wall

← [Medicine](README.md) · [III.B - Physical](../README.md) · [Index](../../../README.md)

---

Real acceleration in target identification, structure prediction, and molecular design. That sentence is true and often followed by a fantasy about timelines collapsing to years. The fantasy skips where drugs actually fail.

## Where the failures are

> **~60% of clinical failures are efficacy or toxicity in humans**, which AI cannot predict without better biology - biology that still has to be measured in organisms, not only in models of organisms.

In silico progress moves the early funnel: more candidates, cheaper prioritization, better structures. It does not move the clock on Phase II/III, manufacturing scale-up, or regulators reading multi-year safety data.

> **Estimate:** **~20–30% cost reduction in preclinical** by the early 2030s, and **minimal change to the ~10-year, ~$2B clinical gauntlet** before ~2032.

After 2032 the clinical side can move if automated experimentation and better translational models land - that is a [science](../../cognitive/science.md) bottleneck, not a pharma-marketing bottleneck.

## The rate limiter is wet lab and recruitment

| Stage | What AI helps | What still binds |
|---|---|---|
| Target ID / design | A lot | Biological validity of the target |
| Preclinical in vitro / in vivo | Throughput, design of experiments | Animal models, assay development |
| Phase I–III | Protocol design, site selection, document generation | Patient recruitment, endpoints, safety clocks |
| Approval / manufacturing | Dossier drafting | Process validation, inspection |

**Whoever industrializes automated experimentation captures the largest available prize** - same conclusion as [Science](../../cognitive/science.md), for the same reason. Hypothesis generation is no longer scarce; experimental cycle time is.

## Why cheaper candidates may not mean more approvals

There is a counterintuitive consequence of making the early funnel cheap that the optimistic case usually skips. If candidate generation costs collapse while clinical capacity stays fixed, the constraint moves from *having* a good molecule to *choosing* which of many to spend a decade and a billion dollars testing. The industry's selection process is already the weakest link in the chain, as evidenced by the failure rate quoted above, and nothing about generating ten times more candidates improves it. Abundance upstream of an unchanged filter raises throughput at the filter's input, not its output.

The optimistic reply is that better selection is exactly what models should be good at, and in principle it is. The catch is that selection quality is validated only by the clinical outcome, so improving the filter requires the very feedback loop that runs on a ten-year clock. **The one part of the pipeline where better prediction would pay most is the part where ground truth is most expensive**, which is the master asymmetry stating the case against its own most attractive application.

A second-order effect worth watching: if candidate abundance is real, the scarce asset shifts to clinical trial infrastructure - patient access, site networks, regulatory relationships, and the capital to run parallel programs. Those are the inelastic complements in pharma, they are held by incumbents, and the framework predicts value accrues there rather than to the design tools. That is consistent with what the deal structures have looked like: discovery platforms license to large pharma rather than displacing it.

## What "AI drug" headlines measure

They measure **entry into the pipeline** or **preclinical milestones**, not reduction in expected time-to-approval for a new molecular entity. Those are different random variables. A flood of AI-designed candidates can coexist with an unchanged median approval timeline if the clinical wall does not move.

Watch for:

- Time from target hypothesis to IND-enabling package (should fall)
- Phase II success rates (should not rise much without better translational biology)
- Share of trials using adaptive designs and digital endpoints (institutional absorption)
- Automated lab capex and utilization in pharma and CROs (the real swing variable)

## Connection to the rest of medicine

Faster preclinical discovery does not fix [delivery](delivery.md). A cheaper candidate still meets reimbursement, licensure, and care-capacity constraints on the way to patients. The consumer-side diagnostic boom and the drug-discovery boom can both be real while population health moves slowly - because health is produced by the delivery system, not by the molecule inventory.

## Failure modes

- **If translational models** (organoids, digital twins with validated prediction) raise Phase II success rates, the 20–30% preclinical claim understates the total impact and the post-2032 clinical wall softens earlier.
- **If automated labs** remain boutique, the science bottleneck claim strengthens and drug AI stays a design tool.
- **If regulators accept** novel evidence packages (in silico primary evidence), the institutional clock moves - low probability before a major framework rewrite, which is event-driven. → [Game 2](../../../02-games/2-nations.md)

### Dual-use is not a sidebar

The same stack that shortens design cycles for legitimate candidates shortens them for [biosecurity](../../contested/biosecurity.md) threat agents. The binding public-interest question is not whether AI "helps drug discovery" - it does, where verification is cheap - but whether the *marginal* capability is more valuable in the clinic or more dangerous in the wrong hands, given that screening and synthesis barriers sit elsewhere in the chain. A page that celebrates preclinical throughput without naming that joint is incomplete; a page that freezes discovery over dual-use without pricing the disease burden is incomplete the other way. The corpus's answer is layered barriers and state capacity, not a discovery freeze - see the biosecurity chain table.

### Preclinical is not health

A decade of cheaper candidates with flat Phase II success and flat population outcomes is the base case, not a paradox. Score this page on **validated experiments and automated-lab utilization**, not press releases of "AI-designed" molecules that still die in humans. Health is produced in [delivery](delivery.md); this page only changes the molecule inventory rate.

---

**Related:** [Science](../../cognitive/science.md) · [Data](../../../01-substrate/data.md) · [Biosecurity](../../contested/biosecurity.md) · [2032–2040](../../../04-timelines/2032-2040.md)

**Next:** [Liability and licensure](liability.md)
