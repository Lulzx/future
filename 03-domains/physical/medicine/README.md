# Medicine

← [III.B - Physical](../README.md) · [Part III](../../README.md) · [Index](../../../README.md)

---

## The argument in four claims

> **1. Diagnostics compress; employment does not.** Narrow imaging is already superhuman, and radiologist headcount grew. Reading was never the whole job, and liability does not transfer to a model. → [Diagnostics](diagnostics.md)
>
> **2. The binding constraint is authorization, not intelligence.** Licensed capacity and reimbursement rules bottleneck healthcare; adding models to a system constrained on who may act changes less than it should. → [Liability and licensure](liability.md)
>
> **3. Consumer-side change outruns the formal system.** Free, first-line triage routes *around* institutions faster than it reforms them - the same pattern as every prior information technology in medicine, at larger magnitude. → [Delivery](delivery.md)
>
> **4. Drug discovery accelerates preclinical; the clinical gauntlet barely moves.** ~60% of failures are human efficacy/toxicity. Wet-lab throughput and trial recruitment rate-limit, not model quality. → [Drug discovery](drug-discovery.md)

## The radiology template

That first claim is the template for every professional domain in this document: AI compresses the diagnostic and documentation layers, leaving **licensure, liability, physical examination, and procedure** as the human moat.

The moat is more fragile than it looks. In most of [Part III](../../README.md) it is financial - a malpractice policy exists for a licensed human and does not yet cover an autonomous system - and financial arrangements reprice on an underwriting cycle. → [Insurance](../../cognitive/insurance.md), [Uncertainty 6](../../../06-uncertainties/correlated-risk.md)

Medicine is the best test case for the template precisely because it is the domain where the moat looks most like competence and is most clearly something else. A radiologist's protection is not that no system reads images as well; on several narrow tasks systems demonstrably do. It is that the act of signing carries transferable legal risk and a market exists to price that risk for a licensed human and does not yet exist for a vendor. Anyone arguing that the profession is safe on capability grounds is arguing the wrong case, and will be surprised in the direction the [liability page](liability.md) describes.

## Why medicine is filed under physical

The filing is a claim about which layer binds. Most of the visible AI activity in healthcare is symbol work - imaging, notes, coding, prior authorization, triage - and by verification cost that belongs in the [cognitive group](../../cognitive/). What keeps medicine on the physical side is that the outcomes which would validate the symbol work are physical and slow: whether the patient did better resolves in years, cannot be simulated, and is confounded by everything the system did not record. So the domain has a cheap-label layer running at software speed sitting on top of an expensive-label layer running at biological speed, and predictions that conflate the two are the standard error in this sector.

That structure also explains the sector's characteristic pathology. Because the fast layer produces measurable outputs (reports drafted, encounters triaged, minutes saved) and the slow layer produces the outcomes anyone actually wants, adoption gets justified on the metric that is cheap to observe. Health systems can therefore accumulate real efficiency gains at the documentation layer for a decade while population health moves imperceptibly, and both facts will be true at once.

## Where the four arguments sit on the clock

| Layer | Ground truth | Moves when |
|---|---|---|
| [Diagnostics](diagnostics.md) | Cheap in imaging; expensive in outcomes | Already; employment still grows |
| [Delivery / consumer triage](delivery.md) | Cheap for information; expensive for action | Now, outside the formal system |
| [Liability & licensure](liability.md) | Institutional | Slow; set by courts and boards |
| [Drug discovery](drug-discovery.md) | Cheap in silico; expensive in humans | Preclinical now; clinical after automated labs |

**Consumer knowledge and institutional action diverge.** The gap between what a motivated patient can know and what the system will act on is a source of friction and political pressure through the 2030s - not a temporary lag.

## Failure mode for the hub argument

All four claims assume the system being changed is the incumbent one. The reading that would break them is an entrant reading: a payer, a retail health chain, or a national system in a country with unified purchasing rebuilds primary care around model-first triage with physicians as an escalation layer, rather than inserting tools into existing clinics. Nothing in the four claims prevents that, because such an entrant does not inherit the fee schedule that makes efficiency unprofitable or the malpractice book that makes autonomy uninsurable; it writes both from scratch. The corpus's base case is slow institutional change because incumbents dominate high-income healthcare, and that base case is weakest wherever purchasing is concentrated enough for one decision to move the whole market. Watch single-payer systems and large integrated payers, not hospital pilots.

## What to watch

| Signal | Reading |
|---|---|
| A model provider offering clinical indemnity | The balance-sheet moat is being tested; the strongest single signal on this page → [C6](../../../07-indicators/governance.md) |
| New payment codes for autonomous interpretation | Reimbursement inverting from obstacle to incentive |
| Capitated and national systems vs fee-for-service adoption | Whether payment structure predicts deployment as claimed |
| Real fee per study vs practitioner headcount | The [diagnostics](diagnostics.md) prediction resolving through price rather than employment |
| Phase II success rates | Whether [drug discovery](drug-discovery.md) acceleration reached the part that matters |
| Outpatient encounters preceded by model consultation | The [delivery](delivery.md) prediction, and the direction of its effect on queues |

## Sections

| | |
|---|---|
| [Diagnostics](diagnostics.md) | The radiology template, and why superhuman reading coexists with more radiologists |
| [Delivery](delivery.md) | Consumer triage, the formal system, and the political pressure in the gap |
| [Drug discovery](drug-discovery.md) | Preclinical acceleration, clinical wall, automated labs |
| [Liability and licensure](liability.md) | Authorization as bottleneck; the balance-sheet moat |

---

**Related:** [Science](../../cognitive/science.md) · [Data](../../../01-substrate/data.md) · [Insurance](../../cognitive/insurance.md) · [Game 3](../../../02-games/3-firms.md) · [Global South](../../contested/geopolitics/global-south.md) on free diagnostic support

**Next:** [Diagnostics](diagnostics.md)
