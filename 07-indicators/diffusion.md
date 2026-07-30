# B - Diffusion Indicators

← [Part VII](README.md) · [Index](../README.md)

---

*Baselines as of mid-2026. Cadence: quarterly to annual.*

These test the central timeline claim: that from ~2028 the binding constraint is **institutional absorption, not model capability** ([Part IV](../04-timelines/)). They are harder to read than the substrate indicators because most of the available data is self-reported and therefore biased in the direction [Game 4](../02-games/4-labor.md) identifies.

**Rule for this family: weight instrumented and revealed-preference measures above surveys, always.**

## B1 - Entry-level to senior posting ratio

| | |
|---|---|
| **Baseline** | Entry-level ~7% of large-tech new hires (2024); recent-grad unemployment 5.6% (Mar 2026, NY Fed) vs ~4.3% overall; US entry-level postings −35% since early 2023; 22–25 year-olds in exposed occupations −16% relative employment |
| **Trigger - structural** | Ratio fails to recover when aggregate white-collar hiring recovers |
| **Trigger - cyclical** | Ratio recovers within two quarters of aggregate hiring |
| **Revises** | [Game 4](../02-games/4-labor.md), [Uncertainty 3](../06-uncertainties/apprenticeship-gap.md), [Education](../03-domains/cognitive/education.md) |

The single highest-value indicator in the document, because it **discriminates between three hypotheses that currently look identical**: AI substitution, rate-cycle mean reversion, and remote-work-driven training collapse. The discriminating test is the next hiring recovery, expected around 2027–28.

## B2 - Measured productivity

| | |
|---|---|
| **Baseline** | No clear AI signal in aggregate TFP |
| **Trajectory assumed** | J-curve; signal emerges 2029–32, not before |
| **Trigger - fast diffusion** | Sustained US TFP growth >2%/yr before 2029 |
| **Trigger - slow diffusion** | No signal by 2033 |
| **Revises** | [2028–2032](../04-timelines/2028-2032.md), [Part V](../05-probabilities/README.md) row 2 |

Expect this to say nothing for years. **That silence is the base case, not a surprise** - every general-purpose technology has shown the same lag, and reading early flatness as failure is the most common forecasting error in this literature.

## B3 - Firm-level margin dispersion

| | |
|---|---|
| **Baseline** | No large systematic margin lift at median adopters |
| **Trigger - Red Queen confirmed** | Adoption rises, prices fall, margins flat |
| **Trigger - Red Queen broken** | Sustained margin expansion at adopters in competitive industries |
| **Revises** | [Game 3](../02-games/3-firms.md) - the surplus-capture argument |

This is the cleanest available test of the document's most contrarian claim. [Game 3](../02-games/3-firms.md) predicts adoption without profit; the naive view predicts both. **Watch dispersion, not the mean** - if the gains accrue to the scarce complements, the mean stays flat while the top decile pulls away, which looks like nothing happening in aggregate data.

## B4 - Agent reliability

| | |
|---|---|
| **Baseline** | Reliable on short, verifiable, well-scoped tasks; degrades sharply with horizon |
| **Trigger - the transition lands** | Multi-hour autonomous task completion at >90% success without human checkpoints, in production |
| **Trigger - plateau** | Horizon length stalls for >18 months despite capability gains elsewhere |
| **Revises** | [2026–2028](../04-timelines/2026-2028.md), [Software](../03-domains/cognitive/software.md), [Part V](../05-probabilities/README.md) row 1 |

Measure **task horizon at fixed reliability**, not benchmark scores. The economically relevant question is never "can it do this" but "can it do this unsupervised for four hours without a failure that costs more than the labor saved." Those diverge, and the second is what firms actually buy.

## B5 - Outcome-priced contracting

| | |
|---|---|
| **Baseline** | Overwhelmingly seat- and token-priced |
| **Trigger** | Material revenue share priced on delivered outcomes with liability attached |
| **Revises** | [Capital](../01-substrate/capital.md) revenue case; [Law](../03-domains/cognitive/law.md); [Game 3](../02-games/3-firms.md) |

A sleeper indicator. Vendors will only accept outcome pricing when they believe reliability is real, and buyers will only pay it when they can attribute results. **The pricing model is a revealed belief about reliability** - more honest than any benchmark, because someone is betting on it.

## B6 - Assessment reversion

| | |
|---|---|
| **Baseline** | Asynchronous written assessment collapsing across education and hiring |
| **Trigger** | Majority of selective institutions or large employers moving to synchronous, invigilated, or oral evaluation |
| **Revises** | [Game 5](../02-games/5-information.md), [Education](../03-domains/cognitive/education.md) |

Tests the "guilds mediated by cryptography" claim directly. The cost side is what to watch: **teaching gets cheaper while assessing gets more expensive**, and institutions that cannot fund the second will stop credentialing meaningfully rather than pay for it.

## B7 - The two-economy price split

| | |
|---|---|
| **Baseline** | Cognitive services soft or deflating; energy, shelter, care, trades firm or rising |
| **Trigger - claim confirmed** | Sustained divergence: CPI/PCE components for software/info services fall or lag while energy+shelter+care outpace for 8+ quarters |
| **Trigger - claim fails** | Uniform inflation or deflation across both baskets |
| **Revises** | [Prices](../09-macro/prices.md), [2028–2032](../04-timelines/2028-2032.md), [Assets](../09-macro/assets.md) |

This is the macro expression of [Game 3](../02-games/3-firms.md). Prefer **relative** component moves over headline CPI. Headline can look fine while both halves of the claim are true.

## B8 - Verifiable vs unverifiable domain gap

| | |
|---|---|
| **Baseline** | Large gap: software/math/code far ahead of open-ended professional judgment and physical manipulation |
| **Trigger - asymmetry holds** | Gap stable or widening as measured by production deployment depth (not demos) |
| **Trigger - asymmetry fails** | Production autonomous decision-making in liability-bearing unverifiable domains without cheap external ground truth |
| **Revises** | [Uncertainty 5](../06-uncertainties/learned-verification.md), [Steelman](../08-method/steelman.md) §1, ordering of [Part III](../03-domains/) |

Pair with insurance and liability: if underwriters cover autonomous professional judgment, they are revealing a belief that verification is solved enough to price.

## B9 - Research cycle time (RSI governor panel)

| | |
|---|---|
| **Baseline** | Not disclosed; infer from release cadence, paper throughput, and hiring of research engineers |
| **Trigger - technical loop** | Sustained >2× compression in time per validated experiment at frontier labs |
| **Physical governor check** | Cycle compression coexists with queued power/fabs - capability not deployable at the new rate |
| **Financial governor check** | Cycle compression coexists with rising real hurdle rates on training clusters ([A7](substrate.md)) |
| **Revises** | [Uncertainty 1](../06-uncertainties/recursive-self-improvement.md) - all three governors, not only the technical one |

Headline RSI talk tracks only the first row. The document's revision in round 7 requires reading all three before moving timelines.

## B10 - Labor share of tax base / public revenue mix

| | |
|---|---|
| **Baseline** | Advanced-economy revenue still dominated by labor income and payroll; capital share of tax take lower and more volatile |
| **Cadence** | Annual (budget and national-accounts releases) |
| **Trigger - squeeze on** | Labor-related tax share of total revenue falls materially over a rolling 5-year window while capital/consumption shares rise *and* transfer + debt-service outlays rise |
| **Trigger - claim fails** | Labor tax share stable through 2032 despite AI diffusion and ageing |
| **Revises** | [Fiscal](../09-macro/fiscal.md), [Demography](../09-macro/demography.md), [State capacity](../03-domains/contested/state-capacity.md) |

This is the slow companion to the labor and price stories. [Fiscal](../09-macro/fiscal.md) argues three pressures arrive together: narrower easy-to-collect base, higher transfer demand, demographics. B10 does not prove AI caused the shift - ageing alone can move it - but **joint movement with B1 (junior hiring) and B7 (price split)** is the AI-relevant pattern.

Secondary reads (same page in spirit):

- Interest expense / revenue after any neutral-rate rise ([Rates](../09-macro/rates.md))
- Adoption of consumption-tax expansion vs capital-income tightening (tests the "path of least resistance" prediction)

## B11 - Meaning and relationship channels

| | |
|---|---|
| **Baseline** | Weak official stats; companion-app usage rising; youth loneliness elevated in several high-income series; career confidence soft in exposed majors |
| **Cadence** | Annual surveys + platform disclosures; event-driven on regulation |
| **Trigger - substitution concern** | Rising companion-app engagement *with* falling in-person social time / friendship counts in the same cohorts (not engagement alone) |
| **Trigger - complement reading** | Companion use concentrated among high-isolation groups with stable or rising human contact elsewhere |
| **Trigger - identity channel** | Junior hiring stays depressed *and* self-reported career identity/confidence in exposed fields keeps falling after aggregate hiring recovers ([B1](diffusion.md)) |
| **Trigger - policy** | Binding rules on companion AI for minors in major markets |
| **Revises** | [Meaning](../03-domains/cognitive/meaning.md), [Game 5](../02-games/5-information.md), [Education](../03-domains/cognitive/education.md), [Media](../03-domains/cognitive/media.md) |

These are **noisier than A-family indicators** - self-report and platform metrics are gameable. Weight joint movement with B1 and B6 over any single loneliness headline. The point is to put the welfare channel on the dashboard so it cannot be forgotten when scoring only TFP and headcount.

Secondary reads:

- Mid-tier creative employment / rate cards ([Media](../03-domains/cognitive/media.md) barbell)
- Live-event prices vs streaming ARPU (presence premium)
- Share of mental-health encounters noting AI companion use ([Medicine - delivery](../03-domains/physical/medicine/delivery.md))

## B12 - Physical diffusion (atoms, not demos)

| | |
|---|---|
| **Baseline** | Warehouse/port autonomy rising but teleop-heavy; specialty harvest still human; hub-to-hub driver-out freight pilot-scale, multi-state insurance incomplete |
| **Cadence** | Quarterly industry reports + regulator filings |
| **Trigger - warehouse path** | Autonomy share of *unstructured* warehouse pick tasks crosses ~50% (not sortation alone) |
| **Trigger - freight path** | Driver-out hub-to-hub commercial service on major US corridors with published insurance (not geofenced pilots only) |
| **Trigger - harvest path** | Specialty crop harvest robots at delivered $/hour competitive with local wage *at scale* (not demos) |
| **Trigger - lag confirms** | Through 2032, structured environments commercial while last-metre and specialty harvest still labor-bound |
| **Revises** | [Robotics](../03-domains/physical/robotics/), [Logistics](../03-domains/physical/logistics.md), [Agriculture](../03-domains/physical/agriculture.md), [2032–2040](../04-timelines/2032-2040.md), [Part V](../05-probabilities/) row 5 |

This is the III.B companion to the headline teleoperation ratio. **Prefer delivered work metrics and insurance-enabled routes over unit sales.** Structured-first is the base case; early unstructured success pulls the growth fork forward.

Secondary: port automation share by region (geopolitical capacity); farmland equipment autonomy miles.

---

**Related:** [Game 3](../02-games/3-firms.md) · [Game 4](../02-games/4-labor.md) · [Meaning](../03-domains/cognitive/meaning.md) · [Robotics](../03-domains/physical/robotics/) · [Part IV - Timelines](../04-timelines/) · [Part IX](../09-macro/) · [Fiscal](../09-macro/fiscal.md)

**Next:** [C - Governance indicators](governance.md)
