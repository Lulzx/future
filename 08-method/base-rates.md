# Base Rates — the reference classes underneath the estimates

← [Part VIII](README.md) · [Index](../README.md)

---

Every probability in [Part V](../05-probabilities/README.md) starts from a reference class and then gets adjusted. This page states the classes and the adjustments, so both can be attacked separately.

The discipline that matters: **name the class before looking at the case.** A reference class picked after forming a view is a rationalization with a citation attached.

## 1. General-purpose technology diffusion

| Technology | Invention → measurable TFP effect | Rate limit |
|---|---|---|
| Steam | ~80 years | Capital stock replacement |
| Electricity | ~40 years | Factory redesign around unit drive |
| Computing | ~25 years | Software, and complementary skills |
| ERP / enterprise software | ~10 years | Process re-engineering |
| Internet | ~10–15 years | Business model discovery |

**The trend is real: each cycle is faster.** Extrapolating gives AI something like 5–10 years to measurable aggregate effect, which puts the signal in 2029–33 — the basis for the [2028–2032](../04-timelines/2028-2032.md) claim and for [Part V](../05-probabilities/README.md) row 2's low 2030 number.

**Adjustment, faster:** AI ships over existing rails, self-serves, needs no physical retooling, and has by far the fastest adoption curve of any technology in the table.

**Adjustment, slower:** the rate limit in every row above was never the technology — it was **organizational redesign**, which runs at the speed of management turnover and has not obviously accelerated. The [METR result](../02-games/4-labor.md) is direct evidence that adoption and benefit realization are separate variables.

These two adjustments point in opposite directions and roughly cancel, which is why the base case sits close to the naive extrapolation. That is a weak reason to believe it, and it is stated as such.

## 2. Infrastructure capex booms

Railways (1840s, 1870s), electrification, telecoms (1990s), shale (2010s). The pattern is consistent enough to be useful:

- **Over-build relative to near-term demand is the norm, not the exception**
- **A financial correction occurs, usually triggered by credit rather than by demand**
- **The physical asset survives the correction and gets used**
- **Equity holders are largely wiped out; the technology is not**

This is where the "~40% chance of a serious correction that resets the timeline by 2–4 years without killing the technology" figure comes from. Note it is a **conjunction of a high-probability event (correction) and a specific mechanism (credit)** — see [Capital](../01-substrate/capital.md).

**Adjustment:** AI capex has an unusually short-lived core asset. Rail track lasts a century; accelerators last 3–6 years. That makes the correction *sharper* and the surviving-asset argument *weaker* than the reference class implies — except for the [rising share in power and shells](../01-substrate/capital.md), which behaves like the classic case.

## 3. Regulatory response cycles

| Domain | Forcing event | Architecture written |
|---|---|---|
| Aviation safety | Successive fatal crashes | Within ~2 years of each |
| Nuclear power | Three Mile Island, Chernobyl | 18 months–3 years |
| Financial regulation | 1929, 2008 | 12–24 months |
| Pharmaceuticals | Elixir sulfanilamide, thalidomide | 12–24 months |
| Data privacy | Accumulated scandal, no single event | ~15 years, and weakly |

The pattern is **event-driven, fast once triggered, and shaped by whatever was already drafted.** This is the entire basis for [Game 2](../02-games/2-nations.md)'s central claim and for the emphasis in [C2](../07-indicators/governance.md) on shelf-readiness.

**The privacy row is the important exception.** Where harm is diffuse and gradual rather than concentrated and salient, no window opens at all and regulation arrives late, weak, and fragmented. **If AI harms turn out to be diffuse — labor displacement, epistemic degradation, gradual dependency — the correct reference class is privacy, not aviation**, and the [Game 2](../02-games/2-nations.md) prediction is wrong in an important way: there is no forcing event and no architecture, just drift.

That is a live possibility and it is underweighted in this document.

## 4. AI winters

Four cycles of over-promise and retrenchment (roughly 1974, 1987, and two smaller). What ended each was consistent: **capability plateaued below the threshold required for a commercially viable application, while funding was justified on claims about the threshold being crossed.**

The diagnostic question is therefore not "is there hype" — there always is — but **"is there revenue attached to deployed capability."** By that test the current cycle is materially unlike previous ones: there is real revenue, real usage, and real measured task performance. That is the strongest single argument against the winter analogy and it is why the correction described in [Compute](../01-substrate/compute.md) is modelled as a **capital-markets event rather than a capability winter.**

**Adjustment:** revenue quality matters more than revenue quantity. Seat-priced subscriptions bought on option value behave differently in a downturn than usage priced against a measured outcome. → [B5](../07-indicators/diffusion.md)

## 5. Labor displacement episodes

The China shock is the closest well-studied analogue, and the lesson taken from it here is specifically about **concentration, not aggregate**: aggregate employment effects were modest and locally the effects were severe, persistent, and politically decisive. Adjustment costs were far higher than trade models assumed because labor is not geographically or occupationally mobile on the timescale the shock arrives.

Two adjustments for the AI case, in opposite directions:

- **Worse:** exposure is occupational and cohort-based rather than geographic, so it hits people who cannot move away from it. And it lands on the entry rung specifically — see [Game 4](../02-games/4-labor.md).
- **Better:** cognitive workers are more geographically mobile, better credentialed, and better capitalized than displaced manufacturing workers were. The absorption capacity is genuinely higher.

## 6. Demographics — the counterweight this document underweights

Every advanced economy has a shrinking working-age population through the 2030s. Japan, Korea, Germany, Italy, and China are already contracting; the US is flat only because of immigration.

This is a **large, highly predictable, opposite-signed force** to everything in [Game 4](../02-games/4-labor.md), and the document does not currently integrate it. Under a shrinking labor force, automation is absorbed as a substitute for workers who were never going to exist rather than as a displacement of workers who do.

> **Provisional view:** demographics do not change the [apprenticeship-gap](../06-uncertainties/apprenticeship-gap.md) conclusion, because that is about the *composition* of hiring rather than its level — a shrinking workforce does not restore the junior rung if the junior tasks are gone. But they materially soften the aggregate displacement conclusion, and possibly by more than the estimate in [Game 4](../02-games/4-labor.md) allows.

This is flagged in the [open queue](../RESEARCH.md) as the highest-value unwritten section.

---

**Related:** [Part V — Probabilities](../05-probabilities/README.md) · [Steelman](steelman.md) · [Scoring](scoring.md) · [Capital](../01-substrate/capital.md)

**Next:** [Steelman](steelman.md)
