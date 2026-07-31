# Diagnostics - the radiology template

← [Medicine](README.md) · [III.B - Physical](../README.md) · [Index](../../../README.md)

---

Diagnostics are already superhuman on narrow imaging tasks - and radiologist employment *grew*.

That combination is the most-cited counterexample to "AI will replace professionals," and it is usually misread. The correct reading is narrower and more useful: **substituting the reading step does not substitute the job**, and the job is what employment statistics count.

## Two reasons, both general

**1. Reading images was never the whole job.** Protocol selection, incidental findings, multidisciplinary conferences, procedural work, communication with referring clinicians, and the residual judgment when the image is ambiguous or the patient is not - those absorb the hours the model frees. Compressing one task reallocates time inside the role rather than deleting the role, until the *entire* task bundle is automatable and *liability transfers*. Neither has happened.

**2. Liability does not transfer to a model.** Someone licensed has to sign. That is not a technical claim; it is an institutional one, and it is load-bearing for employment even where pure diagnostic accuracy favors the machine. → [Liability](liability.md)

Both reasons generalize. Law, finance, insurance underwriting, and consulting show the same shape: the analytical layer compresses, the accountability layer does not. → [Part III patterns](../../README.md)

There is a third reason, less often given and more specific to imaging: **the model's errors are not distributed like a human's.** A radiologist's misses cluster around subtle findings and fatigue; a model's cluster around distribution shift, scanner make, positioning, and populations under-represented in training. That difference is what makes a model a genuine complement in the near term - two error distributions with low correlation catch more together than either alone - and it is also what makes full substitution institutionally hard, because the residual model errors are the kind that look indefensible in retrospect. A missed lesion a tired human also would have missed is a tragedy; a missed lesion caused by an unfamiliar scanner is a defect. Courts and boards respond to the second far more harshly than the accuracy statistics justify, and that asymmetry is a real constraint rather than a bias to be corrected.

## Where ground truth is cheap vs. expensive

| Diagnostic class | Ground truth | AI position |
|---|---|---|
| Narrow imaging (CXR, mammo, retinal) | Cheap - labels abundant, tasks bounded | Superhuman or near on many benchmarks; deployed |
| Lab interpretation, ECG, path slides | Moderate - structured, but context-heavy | Strong; still human-signed |
| Differential diagnosis from narrative | Expensive - outcomes delayed, multi-causal | Assistive; quality varies with documentation |
| Prognosis and treatment response | Expensive - long horizon, confounders | Weak relative to marketing claims |

The master asymmetry orders this table. Where labels are cheap and the task is closed, capability arrives early. Where the label is "did the patient do better in five years," capability waits on data the system does not systematically collect.

Two things about that bottom half are worth stating plainly, because they are the reason it does not resolve on its own. First, the missing labels are missing by institutional design rather than by accident: fragmented records, discontinuous coverage, and the absence of any party whose job it is to find out what happened to a patient after discharge. Nobody is paid to close the loop, so the loop stays open. Second, the labels that do exist are selected. Outcomes are recorded densely for patients who came back, and patients come back for reasons correlated with both their illness and their access. A model trained on that record learns the health system's referral patterns as much as it learns biology, and it will look accurate in validation on the same distribution that generated the bias.

This is why prognostic and treatment-response claims should be read with more suspicion than diagnostic ones even when the reported accuracy is higher. **The reported number is a statement about the evaluation set, and in the bottom half of the table the evaluation set is a product of the thing being evaluated.**

## What employment growth does *not* prove

It does not prove diagnostics are safe from headcount pressure forever. It proves that **through mid-2020s deployment, the complementary tasks and the liability shell absorbed the productivity gain as volume and quality rather than as layoffs.**

The pressure shows up first where the job *was* mostly the reading step: teleradiology piece-rate work, screening programs optimized for throughput, markets that already unbundled interpretation from clinical contact. Watch those segments, not academic medical center headcount, for the leading edge of substitution.

The mechanism by which growth turns into pressure is worth naming, because it is not layoffs. Demand for imaging is induced rather than fixed: cheaper reading means lower thresholds for ordering, which means more studies, which is how the productivity gain got absorbed as volume rather than headcount. That absorption has a limit, and the limit is not technological. It is whoever pays. Once a payer notices that study volume is rising faster than diagnostic yield, the response is a price cut per study or a utilization control, and at that point the same capability that grew the profession starts compressing its income without touching its headcount. **Employment and earnings come apart, and the employment series - the one everyone cites - is the less informative of the two.**

There is also a training-pipeline effect that shows up years before any headcount change. The reading step is how junior radiologists build pattern libraries, so a system that pre-reads and pre-annotates removes the volume of unassisted cases through which judgment was acquired. The senior cohort's skill was formed under the old regime and is unaffected; the cohort behind it is formed under the new one. This is the [apprenticeship gap](../../../06-uncertainties/apprenticeship-gap.md) in a licensed setting, and it is largely invisible for a decade, which is exactly how long it takes to matter.

> **Prediction:** radiologist and pathologist employment in high-income countries continues to grow through ~2030 in aggregate, while **real fees per study fall** and work intensity rises - the Red Queen inside a licensed profession. → [Game 3](../../../02-games/3-firms.md)

## The autonomous exception, and what it teaches

There is already one place where the template does not hold: autonomous diabetic retinopathy screening, which received FDA clearance to produce a diagnostic result without a physician over-read in 2018 and has an associated payment code. It is worth understanding why that case cleared when nothing else has, because the conditions are specific and they form a checklist rather than a precedent.

The task is a single closed question with a binary output. The image is captured on a standardized device under controlled conditions, so distribution shift is bounded by hardware rather than by clinical variety. The failure cost is asymmetric in the safe direction: a false positive sends a patient to an ophthalmologist they were going to be referred to anyway, and the screening population was largely going unscreened. And the counterfactual was not a physician but nobody, which removes the displacement politics entirely.

**Read that as the specification for the next twenty autonomous clearances.** Closed question, controlled capture, benign false-positive path, and an unserved population rather than an incumbent to displace. Screening programs meet it; diagnostic workup in a general population does not, and no amount of accuracy improvement changes which side of the line a task falls on. This is why the corpus expects autonomy to spread through screening modalities in the specific order those four conditions are satisfiable, rather than through whichever task the models happen to be best at.

## Failure modes

- **If liability shifts to model providers** via statute or insurance, the employment cushion thins fast in high-volume imaging. → [C6](../../../07-indicators/governance.md)
- **If reimbursement unbundles** "AI read" from "physician over-read" at a price that makes the human optional, the template breaks for screening modalities first.
- **If outcome-linked diagnostics** (not just image labels) get cheap ground truth from longitudinal records, the expensive half of the table moves up.

### Ordering is a checklist, not a leaderboard

The retinopathy template is deliberately boring. Models will keep posting spectacular results on open diagnostic challenges that fail one or more of the four conditions (open question, uncontrolled capture, costly false positive, incumbent displacement). Those results move benchmarks and do not move this page's deployment order. When scoring "AI in diagnostics is faster than the corpus expected," ask which condition flipped - usually none have, and the surprise was a demo.

---

**Related:** [Liability](liability.md) · [Delivery](delivery.md) · [Law](../../cognitive/law.md) · [Insurance](../../cognitive/insurance.md)

**Next:** [Delivery](delivery.md)
