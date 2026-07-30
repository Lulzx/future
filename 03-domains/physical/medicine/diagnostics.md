# Diagnostics - the radiology template

← [Medicine](README.md) · [III.B - Physical](../README.md) · [Index](../../../README.md)

---

Diagnostics are already superhuman on narrow imaging tasks - and radiologist employment *grew*.

That combination is the most-cited counterexample to "AI will replace professionals," and it is usually misread. The correct reading is narrower and more useful: **substituting the reading step does not substitute the job**, and the job is what employment statistics count.

## Two reasons, both general

**1. Reading images was never the whole job.** Protocol selection, incidental findings, multidisciplinary conferences, procedural work, communication with referring clinicians, and the residual judgment when the image is ambiguous or the patient is not - those absorb the hours the model frees. Compressing one task reallocates time inside the role rather than deleting the role, until the *entire* task bundle is automatable and *liability transfers*. Neither has happened.

**2. Liability does not transfer to a model.** Someone licensed has to sign. That is not a technical claim; it is an institutional one, and it is load-bearing for employment even where pure diagnostic accuracy favors the machine. → [Liability](liability.md)

Both reasons generalize. Law, finance, insurance underwriting, and consulting show the same shape: the analytical layer compresses, the accountability layer does not. → [Part III patterns](../../README.md)

## Where ground truth is cheap vs. expensive

| Diagnostic class | Ground truth | AI position |
|---|---|---|
| Narrow imaging (CXR, mammo, retinal) | Cheap - labels abundant, tasks bounded | Superhuman or near on many benchmarks; deployed |
| Lab interpretation, ECG, path slides | Moderate - structured, but context-heavy | Strong; still human-signed |
| Differential diagnosis from narrative | Expensive - outcomes delayed, multi-causal | Assistive; quality varies with documentation |
| Prognosis and treatment response | Expensive - long horizon, confounders | Weak relative to marketing claims |

The master asymmetry orders this table. Where labels are cheap and the task is closed, capability arrives early. Where the label is "did the patient do better in five years," capability waits on data the system does not systematically collect.

## What employment growth does *not* prove

It does not prove diagnostics are safe from headcount pressure forever. It proves that **through mid-2020s deployment, the complementary tasks and the liability shell absorbed the productivity gain as volume and quality rather than as layoffs.**

The pressure shows up first where the job *was* mostly the reading step: teleradiology piece-rate work, screening programs optimized for throughput, markets that already unbundled interpretation from clinical contact. Watch those segments, not academic medical center headcount, for the leading edge of substitution.

> **Prediction:** radiologist and pathologist employment in high-income countries continues to grow through ~2030 in aggregate, while **real fees per study fall** and work intensity rises - the Red Queen inside a licensed profession. → [Game 3](../../../02-games/3-firms.md)

## Failure modes

- **If liability shifts to model providers** via statute or insurance, the employment cushion thins fast in high-volume imaging. → [C6](../../../07-indicators/governance.md)
- **If reimbursement unbundles** "AI read" from "physician over-read" at a price that makes the human optional, the template breaks for screening modalities first.
- **If outcome-linked diagnostics** (not just image labels) get cheap ground truth from longitudinal records, the expensive half of the table moves up.

---

**Related:** [Liability](liability.md) · [Delivery](delivery.md) · [Law](../../cognitive/law.md) · [Insurance](../../cognitive/insurance.md)

**Next:** [Delivery](delivery.md)
