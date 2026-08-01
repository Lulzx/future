---
title: The Scorecard
dek: Every claim on this blog that can be caught failing, held still long enough to be graded. Each one carries a probability, a resolution date, and the rule it resolves by.
date: 2026-08-01
tags: forecasts, method
page: true
takeaway: A forecast that cannot lose is marketing. Everything on this page can lose.
corpus: 07-indicators/README.md, 06-uncertainties/README.md, 01-substrate/inference-economics.md, 06-uncertainties/taiwan.md, 06-uncertainties/learned-verification.md, 01-substrate/energy.md
---

# The Scorecard

The corpus underneath this blog states its assumptions with probabilities attached, and the [indicator dashboard](../07-indicators/README.md) tracks what would move them. The posts then make claims of their own on top, and every post says what evidence would change its conclusion.

But a falsifier without a date and a number has an exit. "This would change my mind" can always be renegotiated after the fact, because nothing was written down about when, or how much, or measured by whom. This page removes the exits.

The rules:

- The claim and its resolution rule are written before the outcome is known, and never edited afterward. A resolved row gets a verdict and an annotation, not a rewrite.
- The probability can move. Every move gets logged with a date and a reason.
- A row resolves by its written rule, not by whether the spirit of the claim felt right at the time. If the rule turns out to have measured the wrong thing, that scores as a loss and gets said plainly.
- Reviewed quarterly, on the same cadence as the dashboard. Once five rows have resolved, this page carries a Brier score.

Several of these rules sharpen claims the posts made loosely. That sharpening is part of the point. Where the sharp version was harder to commit to than the loose version, that gap was information, and it is noted in the row.

## The board

| # | Forecast | p | Resolves |
|---|---|---|---|
| 1 | Open-weight lag is still six months or less | 70% | Dec 2027 |
| 2 | Cost at fixed capability keeps falling 10× a year or faster | 85% | Mar 2028 |
| 3 | At least 30% of planned 2026 datacenter capacity slips to 2028 | 75% | Dec 2027 |
| 4 | Over 40% of new frontier-training power is owned or bilateral | 65% | Dec 2029 |
| 5 | Electricity politics regulates AI in the US before capability politics | 75% | Dec 2029 |
| 6 | No major disruption to Taiwanese leading-edge output | 90% | Dec 2032 |
| 7 | If Taiwan supply breaks, repricing moves before anything kinetic | 70% | conditional |
| 8 | No learned judge carries production liability in a slow domain | 80% | Dec 2028 |

All eight opened 1 August 2026. All eight open.

## 1. The open-weight lag is still six months or shorter at the end of 2027

[You Cannot Own a Falling Floor](falling-floor.md) rests on open-weight models staying close behind the frontier. Epoch AI's January to May 2026 comparison put the average lag near four months, about six on a stricter equivalence rule, down from 9 to 15 months in earlier analyses.

**Resolves yes if** the last lag figure Epoch AI publishes in 2027, on its stricter equivalence rule, is six months or shorter. If the series is discontinued, the nearest public replacement gets named here before it is used.

The lag has only shrunk since it was first measured, so the miss scenario is not technical: it is regulatory, or a leading open-weight lab going closed. Opened at 70%. Corpus: [inference economics](../01-substrate/inference-economics.md).

## 2. Cost at a fixed capability keeps falling at ten times a year or faster

The same post reports a median decline around 50× a year across Epoch's price-trend series. This row asks for much less than the trend, deliberately, because the claim that matters downstream is only that the floor keeps falling fast.

**Resolves yes if** the median annual decline in price at fixed capability across the tasks in Epoch's price-trend series, for calendar 2027, is 10× or steeper. Resolves March 2028, once the full-year data is published.

A miss here is the post's first falsifier arriving: an architectural wall, an energy floor, or coordinated pricing. Opened at 85%.

## 3. At least 30% of the datacenter capacity planned for 2026 slips into 2028

[The Bottleneck Migrates](silicon-electrons-permits.md) carries the estimate that 30 to 50% of planned 2026 AI datacenter capacity slips to 2028, on interconnection and construction bottlenecks alone.

**Resolves yes if** at least 30% of the US AI datacenter capacity that was publicly slated in early 2026 for energization that year is still not serving load on 31 December 2027, per LBNL, SemiAnalysis, or equivalent public tracking.

This is the nearest-term row on the board and the one most exposed to a definitional fight over "planned," which is why the baseline is fixed to early-2026 announcements. Opened at 75%. Corpus: [energy](../01-substrate/energy.md), [substrate indicators](../07-indicators/substrate.md).

## 4. By the end of 2029, over 40% of new US frontier-training capacity runs on power the operator owns or contracts bilaterally

Carried over verbatim from the prediction already published in the bottleneck post, at the confidence it was published at.

**Resolves yes if** more than 40% of new-in-2029 US frontier-training capacity, in MW, is powered by generation the operator owns or has contracted bilaterally rather than grid supply procured at tariff, per public disclosures and filings.

The post names the miss scenario: permitting reform making tariff supply competitive again, not a reversal of intent. Opened at 65%.

## 5. The electricity bill regulates AI in the US before capability does

The bottleneck post calls the electricity bill the most likely source of binding domestic AI regulation. Loose versions of that claim are unfalsifiable, so here is the sharp one.

**Resolves yes if**, by 31 December 2029, ten or more US states have enacted large-load tariffs, datacenter siting restrictions, or ratepayer-protection rules aimed at datacenter load, and no federal statute regulating frontier-model capability has taken effect. **Resolves no** the day such a federal statute binds first, whenever that is.

Opened at 75%. The ten-state threshold is the part doing the work, and it was chosen before counting current statehouse activity, not after.

## 6. No major disruption to Taiwanese leading-edge output through 2032

This is the corpus's [standing assumption](../06-uncertainties/taiwan.md), stated there at ~90% and stated loosely, "no major disruption." A scorecard row needs a definition, so:

**Resolves no if** Taiwanese leading-edge output falls 25% or more below trend for two consecutive quarters, from cross-strait action, sabotage, or supply weaponisation. Anything smaller or shorter resolves yes.

[The Taiwan post](taiwan-gray-zone.md) argues this number can hold on its own terms while the forecast still fails for actual buyers. That gap is exactly what row 7 exists to catch. Opened at 90%, matching the corpus.

## 7. If Taiwan-linked disruption arrives before 2033, repricing moves before anything kinetic

The Taiwan post's central claim is that the likely failure is a valve, not a switch: insurance, licences, and rationing, rather than an invasion. A conditional row is the honest way to score a claim about *how* something breaks.

**Resolves only if** a Taiwan-linked disruption materially delays accelerator or leading-edge supply before 2033. **Then resolves yes if** the disruption is itself non-kinetic, or if war-risk premia on strait routes and export-licence delay rates had been moving for at least two quarters before any kinetic event. **Resolves no** if a kinetic event arrives with less than two quarters of prior movement in those series.

If nothing breaks, this row stays open forever and scores nothing, which is the correct outcome for a conditional. Opened at 70%.

## 8. Through 2028, no learned judge carries production liability in a slow-verification domain

[The scoreboard post](cheap-scoreboard.md) names learned verification as the one development that would blow up its whole table, and says to score it on production depth rather than demos. So:

**Resolves no if**, by 31 December 2028, a company operating in clinical judgment, legal advice, or negotiation runs a learned verifier in production, at scale, with the operator carrying legal liability for its unreviewed judgments. A judge model sitting behind a human reviewer does not count, and neither does an impressive evaluation.

A no here would be bad for this page and very good for the world's slow domains, which is a trade worth being on the record about. Opened at 80%. Corpus: [learned verification](../06-uncertainties/learned-verification.md).

---

Nothing above is hedged in the prose because all of the hedging is in the numbers. That is where hedging belongs.

The next review is 1 November 2026.
