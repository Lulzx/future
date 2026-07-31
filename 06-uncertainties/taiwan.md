# Uncertainty 4 - Taiwan and leading-edge fabrication

← [Part VI](README.md) · [Index](../README.md)

---

Every projection in this document assumes Taiwanese fabrication continues. **That assumption is doing more work than any other single input, and it is not an AI question.**

It is listed here, not only in [bipolar](../03-domains/contested/geopolitics/bipolar.md), because an uncertainty that invalidates the entire corpus belongs in the uncertainty register - not buried as a modelling footnote on a regional page.

## What the assumption is

> **~90%** - no major disruption to Taiwanese leading-edge output through 2032.

That is not a confident geopolitical judgment. It is a modelling assumption, stated so it can be scored, and everything downstream inherits it: training-run cost curves, the US–China chokepoint analysis, robotics electronics supply, the capex test, and every timeline date.

## What failure looks like

- **A blockade or conflict removes the majority of leading-edge capacity** for a period measured in years, not months.
- No amount of announced fab construction in the US, Japan, or Europe changes the near-term arithmetic. The [2026–2028](../04-timelines/2026-2028.md) and [2028–2032](../04-timelines/2028-2032.md) periods have no substitute at volume.
- Secondary effects: accelerator prices discontinuous; open-weight and closed ecosystems both starved; [robotics supply chain](../03-domains/physical/robotics/supply-chain.md) reorders around remaining nodes; the [Gulf](../03-domains/contested/geopolitics/gulf.md) capacity bet and every hyperscaler schedule slip together.

**This is the one scenario that invalidates the entire document**, and unlike uncertainties 1–3 it is **not skewed toward better outcomes.**

## The binary framing hides the modal bad outcome

"No major disruption" versus "capacity removed for years" is a scenario pair, not a distribution. Between them sits a family of gray-zone outcomes that are individually more probable than invasion and collectively more probable than either endpoint: a quarantine or inspection regime that throttles rather than stops shipments; cyber or sabotage events that cut fab output for months; an escalation spiral that leaves fabs running but makes insurers, shippers, and export regulators treat the strait as a war-risk zone. These do not zero the arithmetic - they reprice it. Accelerator supply becomes rationed and politically allocated rather than absent; the [capex test](../01-substrate/compute.md) inflates rather than fails; timelines slip quarters rather than years, but with a persistent risk premium that never fully unwinds.

The gray zone is also where the assumption can fail *without any crisis at all*: an export-control stair-step that fully bifurcates the ecosystem, or Taiwan itself weaponizing supply in a negotiation, degrades the "continues for everyone" reading of the assumption while every crisis indicator stays green. The 90% is worded about disruption; the corpus consumes it as "supply keeps flowing to the buyers the corpus models," which is a stronger claim than the one being scored. That gap between the stated and the consumed assumption is itself an audit finding.

## The strongest counter, and its decay

The standing argument for the 90% is interdependence: the silicon shield, under which all parties lose too much for deliberate disruption to be rational, plus the observable fact that deterrence has held through every crisis to date. The counter is genuinely strong - blockades are not accidents, and the loss function is visible to every actor. But the corpus should notice that the shield *decays on the corpus's own timeline*: every wafer of leading-edge capacity qualified outside Taiwan lowers the cost of disruption to the buyer side, and the AI race raises the perceived cost of *not* acting for the side losing it. The same substitution progress the corpus tracks as risk reduction (consequence shrinking) is also shield erosion (probability rising). The two effects run through the same indicator and partially cancel; scoring one without the other flatters the trend.

## AI cuts both ways on the probability

Better ISR and autonomous systems make a blockade more detectable and more costly. They also compress decision timelines in exactly the way [warfare](../03-domains/contested/warfare.md) identifies as escalatory. Net effect on the 90% is genuinely unclear; the point of stating 90% is not precision but **inheritance** - readers should know what they are accepting.

## Why it sat outside Part VI until round 8

The corpus treated it as a background condition rather than a live uncertainty. That was a category error. Background conditions that can zero the analysis are uncertainties; they are just ones the author would rather not re-derive every page. Naming it here does not improve the geopolitical estimate. It fixes the accounting.

## Leading indicators

### Crisis path (binary failure)

| Signal | Reading |
|---|---|
| Amphibious / blockade-relevant PLA activity and US/TW posture | Direct |
| Leading-edge capacity share outside Taiwan (actual wafers, not announced fabs) | How fast the assumption can be retired |
| Export-control and sanctions stair-steps around semiconductor equipment | Political temperature |
| Corporate multi-region fab qualification progress (yield, not ribbon-cuttings) | Substitution lag |

### Gray-zone path (modal bad outcome)

These are the indicators the failure-mode paragraph used to only name. Score them on a quarterly Ground pass *before* fleet trackers:

| Signal | Reading if it moves |
|---|---|
| **War-risk / strait freight insurance** premia and denial rates | Shippers pricing ambiguity; capacity still "available" but expensive |
| **Export-license denial and delay rates** on advanced-node tools and wafers (US, NL, JP public stats where available) | Bifurcation without a crisis headline |
| **Delivery-schedule slippage** on accelerator and foundry orders (company guidance vs prior quarter) | Soft rationing |
| **Spot and contract ASP step-ups** for leading-edge wafers without a demand spike story | Political allocation premium |
| **Corporate dual-sourcing spend** announced as *risk*, not capacity expansion | Revealed belief the 90% is eroding |

A gray-zone miss can leave every crisis indicator green while the corpus's *consumed* assumption ("supply keeps flowing to the buyers we model") is already false. That is the audit finding above, operationalized.

## What would revise the rest of the corpus

If the assumption fails: stop patching individual domains. Re-score [Part V](../05-probabilities/) from scratch, rewrite [Part IV](../04-timelines/) with multi-year slips on every compute-gated claim, and treat [bipolar](../03-domains/contested/geopolitics/bipolar.md) capacity bifurcation as the base case rather than a scenario.

If leading-edge capacity outside Taiwan crosses a meaningful share of advanced wafers *before* a crisis: lower the variance of this uncertainty without changing the point estimate of disruption probability - the *consequence* of disruption shrinks.

If gray-zone indicators fire without crisis: do not wait for invasion language. Reprice [compute](../01-substrate/compute.md) and timeline slips in quarters, raise the risk premium on every train-run schedule, and treat open-weight vs closed bifurcation as accelerated. The 90% line item may still "hold" under a disruption reading while the document is already wrong for operators.

**Shield decay vs consequence shrink.** Every wafer of leading-edge capacity outside Taiwan lowers disruption *consequence* (A6) and can raise disruption *incentive* for the side losing monopoly - the two effects run through the same indicator and partially cancel. Score both arrows.

**Failure mode of this page:** watching for invasion when the modal failure is ambiguity - now partially mitigated by the gray-zone table, but only if Ground passes actually read it.

---

**Related:** [Bipolar](../03-domains/contested/geopolitics/bipolar.md) · [Compute](../01-substrate/compute.md) · [Robotics supply chain](../03-domains/physical/robotics/supply-chain.md) · [Warfare](../03-domains/contested/warfare.md) · [Part V](../05-probabilities/) assumptions

**Previous:** [Uncertainty 3](apprenticeship-gap.md) · **Next:** [Uncertainty 5 - learned verification](learned-verification.md)
