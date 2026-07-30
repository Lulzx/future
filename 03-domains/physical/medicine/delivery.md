# Delivery - consumer triage and the formal system

← [Medicine](README.md) · [III.B - Physical](../README.md) · [Index](../../../README.md)

---

Expect enormous **consumer-side** change: AI as first-line triage, roughly free, and better than the median GP visit for *informational* purposes.

This routes *around* the formal system faster than it changes it - the same pattern as every prior information technology in medicine (WebMD, patient forums, direct-to-consumer labs), but at much larger magnitude and higher average quality.

## Two systems, one body

| | Consumer path | Formal path |
|---|---|---|
| **Speed** | Immediate | Weeks for non-urgent |
| **Cost at margin** | Near zero | Visit + system overhead |
| **Authority to act** | None (advice only) | Licensure, prescribing, procedures |
| **Liability** | Disclaimed | Insured professional |
| **Ground truth used** | Text, wearable, photo | Exam, labs, imaging, longitudinal chart |

The consumer path wins on information. The formal path keeps a monopoly on **action** - prescriptions, admissions, procedures, sick notes, insurance authorization. That split is stable until one of three things moves: regulation opens prescribing channels, liability attaches to consumer tools, or the formal system prices itself out of routine care entirely.

The comparison in that table is also unfair to the formal path in a way worth stating, because it is the strongest argument against the consumer story. "Better than the median GP visit for informational purposes" holds when the input is a well-described complaint from an articulate patient. It degrades sharply when the clinically important signal is something the patient did not think to mention, could not describe, or is actively wrong about: the gait, the smell, the affect, the abdomen that is rigid, the story that does not fit. A physician's advantage is not only the exam but the fact that the exam is unprompted, and the consumer path samples only what the user chose to type. **The consumer tool is superior on the average presentation and structurally blind on the presentations that kill people**, which is precisely the distribution where the formal system earns its cost.

That asymmetry is why the two systems have not merged and probably will not on the current path. The consumer layer is good at the frequent and cheap; the formal layer exists for the rare and expensive; and the interface between them - deciding which case is which - is the actual clinical skill and the part neither side has automated.

## The friction is the politics

The gap between what a motivated patient can know and what the system will act on becomes a significant source of friction and political pressure.

Concrete forms already visible:

- Patients arriving with differential lists and guideline citations that the visit slot cannot absorb
- Demand for tests the model suggested and the clinician considers low-value
- Distrust when the formal answer contradicts the free one without a shared evidence trail
- In low-resource settings, the free tool as *the* care layer, not a supplement → [Global South](../../contested/geopolitics/global-south.md)

> **Prediction:** by 2030, a majority of outpatient encounters in high-internet populations are preceded by patient-side model consultation. The formal system's response is a mix of integration (tools inside the EHR), containment (liability warnings, documentation burden), and backlash (scope-of-practice fights) - not indifference.

## What the formal system actually optimizes

Healthcare has never been bottlenecked on knowing what to do in the abstract. It is bottlenecked on **who is permitted to do it and who pays.** → [Liability](liability.md)

Adding intelligence to scheduling, documentation, prior auth, and coding compresses administrative load - real, large, and mostly invisible to patients. Adding intelligence to diagnosis without changing who may prescribe or operate produces better-informed waiting rooms, not shorter queues.

**Planning compresses; handling does not** - the same split as [logistics](../logistics.md) and [agriculture](../agriculture.md). Treatment *planning* and documentation move; the procedure, the bed, the nurse-hour, and the licensed signature do not.

## Care work and demography

[Demography](../../../09-macro/demography.md) makes delivery *worse* as a labor problem: elder-care demand rises, care-worker supply falls, and robotics reaches unstructured care last. AI triage and monitoring can stretch licensed capacity; they cannot turn a missing nurse into a present one.

The acute 2030s shortage is care and skilled clinical support, not diagnostic radiologists. Consumer AI that reduces unnecessary visits helps the queue; consumer AI that increases demand for reassurance visits hurts it. Net effect is an empirical question worth tracking, not a settled claim.

The direction is not obvious, and the historical base rate points the wrong way for the optimistic case. Every prior improvement in patient-side medical information - the pamphlet, the helpline, the search engine, the wearable - increased contact with the system rather than reducing it, because information about a symptom generates worry more reliably than it generates reassurance, and because a tool that recommends escalation on ambiguity is the only kind that survives its own liability review. A triage system that is tuned to avoid missing anything will, mechanically, send more people in. **The tuning parameter is set by whoever bears the cost of a miss, and in the consumer path that is nobody**, which biases every deployed system toward over-referral into a system that is already capacity-constrained. This is the strongest reason to expect the net effect on queues to be negative before it is positive, and it reverses only if payers gain enough control over the triage layer to set that parameter themselves.

## Failure modes

- **If scope-of-practice expands** (pharmacist prescribing, nurse-led AI protocols, model-authorized refills), the formal monopoly on action softens and delivery timelines compress.
- **If insurers require** model triage before covering a visit, the consumer path is absorbed into the formal path - integration by force of payment.
- **If a salient consumer-AI medical harm** lands, the regulatory response may freeze the consumer path for a cycle. → [Game 2](../../../02-games/2-nations.md)

---

**Related:** [Diagnostics](diagnostics.md) · [Liability](liability.md) · [Demography](../../../09-macro/demography.md) · [Global South](../../contested/geopolitics/global-south.md) · [Prices](../../../09-macro/prices.md) on healthcare in the inflating basket

**Next:** [Drug discovery](drug-discovery.md)
