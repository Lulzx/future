---
title: The Scorecard
dek: Every claim on this blog that can be caught failing, held still long enough to be graded. Each one carries a probability, a resolution date, and the rule it resolves by.
date: 2026-08-05
tags: forecasts, method
page: true
takeaway: A forecast that cannot lose is marketing. Everything on this page can lose.
corpus: 07-indicators/README.md, 06-uncertainties/README.md, 01-substrate/inference-economics.md, 06-uncertainties/taiwan.md, 01-substrate/energy.md, 02-games/4-labor.md, 01-substrate/capital.md, 03-domains/cognitive/insurance.md, 09-macro/prices.md
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
| 9 | Over 100 MW of AI compute operating in orbit | 60% | Dec 2030 |
| 10 | Junior hiring misses the next white-collar recovery | 65% | conditional |
| 11 | No professional body mandates AI-era training ratios | 80% | Dec 2029 |
| 12 | If a correction comes, a credit event fires first | 65% | conditional |
| 13 | The frontier consolidates to 3 to 5 labs | 70% | Dec 2029 |
| 14 | AI liability is a distinct insurance line with published rates | 70% | Dec 2030 |
| 15 | First correlated AI loss brings a backstop bill within 18 months | 75% | conditional |
| 16 | The cognitive-physical price split shows in official statistics | 70% | Dec 2030 |
| 17 | A major central bank revises its target | 50% | Dec 2035 |

Rows 1 through 9 opened 1 August 2026, then two rows with each post since: 10 and 11 on 2 August, 12 and 13 on 3 August, 14 and 15 on 4 August, 16 and 17 on 5 August. All seventeen open.

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

## 9. By the end of 2030, more than 100 MW of AI compute is operating in orbit

[No Night, No Neighbors](no-night-no-neighbors.md) argues the datacenter build-out escapes the Permit Window vertically, and carries this prediction at the confidence it was published at. The bar is set far below SpaceX's stated ambitions on purpose: 100 MW is under a thousand AI1-class satellites, about twenty Starship launches' worth, against a claimed eventual run-rate of 100 GW a year.

**Resolves yes if** publicly disclosed, independently trackable orbital compute capacity in active service exceeds 100 MW of IT load on 31 December 2030, summed across all operators, per operator disclosures cross-checked against satellite tracking. Ground-relay and communications payloads do not count, compute payloads do.

The post names the miss scenario: launch cost per kilogram staying above roughly $500. Opened at 60%. Corpus: [energy](../01-substrate/energy.md), [power permitting](../06-uncertainties/power-permitting.md).

## 10. If white-collar hiring recovers before 2029, junior hiring misses the recovery

[Every Junior Job Was Secretly Two Products](two-products.md) calls this the Recovery Test, and the corpus calls the underlying ratio [the single highest-value indicator in the document](../07-indicators/diffusion/labor.md), because it separates three explanations that currently look identical: AI substitution, rate-cycle mean reversion, and remote-work training collapse. A conditional row, like row 7, because the test only runs if the recovery arrives.

**Resolves only if**, by 31 December 2028, aggregate US white-collar hiring recovers: Indeed's professional-occupation postings, or JOLTS openings for professional and business services, up year over year for two consecutive quarters. **Then resolves yes if** entry-level postings (zero to one year of experience, Indeed Hiring Lab series) are still down year over year through that same window, or the entry-level share of US software postings is still below 10% (it was 4.5% in Q1 2026). **Resolves no** if junior postings recover within two quarters of the aggregate.

A no here is good news and gets said as such: it would mean the junior collapse was mostly cycle, and the corpus's 50% substitution estimate falls with it. Opened at 65%. Corpus: [the labor game](../02-games/4-labor.md), [labor indicators](../07-indicators/diffusion/labor.md).

## 11. Through 2029, no professional body mandates training ratios in response to AI

The same post's scorecard-of-responses observes that as of August 2026 no professional body has moved, and [the corpus's speed ordering](../06-uncertainties/apprenticeship-gap.md) says guild mandates are the slowest response on the menu. Medicine's residency system took decades to formalize.

**Resolves yes if**, by 31 December 2029, no major professional body in law, accounting, or engineering in the US or UK (state bars or the ABA, AICPA or ICAEW, or an equivalent licensing institution) has adopted a binding requirement on junior training intake or supervision ratios that its own text or contemporaneous statements tie to AI displacement of junior work. Voluntary guidance, reports, and consultations do not count. A binding rule does, whatever it is called.

**Resolves no** is the hopeful branch: the commons failure getting a collective fix inside the corpus window, faster than the medical precedent suggests. Opened at 80%.

## 12. If a 2027 to 2029 correction arrives, its proximate trigger is a credit event, not an earnings miss

[The AI Race Ends in a Refinancing](capex-verdict.md) carries [the corpus's claim](../01-substrate/capital.md) that the equity story is well covered and the debt story is where the leverage is. A conditional row: it only scores if the correction happens.

**Resolves only if**, before 31 December 2029, US AI infrastructure investment contracts materially: aggregate hyperscaler capex guidance falling year over year, or two consecutive quarters of falling AI datacenter starts per public tracking. **Then resolves yes if** the contraction was preceded or accompanied, within two quarters, by a default, restructuring, or forced collateral liquidation in AI-adjacent structured finance (a neocloud, SPV, or vendor-financing vehicle) reported by major financial press. **Resolves no** if the contraction arrives as a spending pause with no such credit event in the window.

If no correction comes, the row stays open and scores nothing, which is the correct outcome for a conditional. Opened at 65%, matching the corpus.

## 13. By the end of 2029, the frontier has consolidated to three to five labs

The same post carries [Game 1's](../02-games/1-labs.md) standing prediction at its published shape: capital intensity forces consolidation, and a correction culls by financing type.

**Resolves yes if**, on 31 December 2029, five or fewer organizations globally have trained a model within one generation of the frontier in the preceding twelve months, counting a lab and its controlling investor as one organization, per Epoch AI or equivalent public capability tracking. Labs that merged, pivoted away from frontier training, or moved under state or hyperscaler control since 2026 count toward the consolidation, however the press frames the transaction.

The miss scenario: training costs falling faster than capital concentrates, keeping a dozen credible frontier players funded. That world is also the world where row 2 keeps resolving yes, which would be informative tension. Opened at 70%.

## 14. By the end of 2030, AI-specific liability coverage is a distinct line with published rates

[The insurance post](insurance-ceiling.md) argues underwriters govern deployment before legislators do. This is [the corpus's](../03-domains/cognitive/insurance.md) visible-half prediction, carried at its published confidence.

**Resolves yes if**, by 31 December 2030, at least three major carriers or a recognized market (Lloyd's syndicates count) offer standalone AI liability products with rate structures observable in filings, market reports, or broker publications, and the line is material enough to be reported as its own category by at least one industry data source. Riders buried in cyber or E&O policies do not count. Opened at 70%.

## 15. The first correlated AI loss event produces a state-backstop proposal within 18 months

The same post predicts the terrorism-reinsurance template becomes the standing proposal after the first event, inside [the 18-month window](../02-games/2-nations.md) the corpus assigns to post-incident politics. Conditional, like rows 7 and 12.

**Resolves only if** a single AI failure mode produces insured or insurable losses across 100 or more distinct organizations within one quarter, attributed to one model or provider by credible reporting. **Then resolves yes if**, within 18 months, legislation is formally introduced in the US or EU proposing a public backstop or reinsurance facility for correlated AI liability. **Resolves no** if 18 months pass with no such bill.

Opened at 75%. The event itself carries no probability here: this row scores the response, not the disaster.

## 16. The price split shows up in official statistics by the end of 2030

[The two-economies post](two-economies.md) forecasts the cognitive-physical divergence becomes the defining political fact of the 2030s. Politics cannot be scored, but [the corpus's indicator](../07-indicators/diffusion/economy.md) can: the split has to appear in the numbers first, and it has to sustain.

**Resolves yes if**, by 31 December 2030, a cognitive basket of US CPI or PCE components (software, information services, professional and technical services) has diverged from a physical basket (energy, shelter, medical care services, household maintenance and repair) by a cumulative relative price change, sustained over at least eight consecutive quarters, visible in the published component series without seasonal gymnastics. The eight-quarter bar is the corpus's own noise rule: one energy spike or discount season does not count. Opened at 70%.

## 17. A major central bank formally revises its target definition or tolerance band by 2035

The same post carries the corpus's ~50% at face value, and it is the longest-dated row on the board.

**Resolves yes if**, by 31 December 2035, the Federal Reserve, ECB, Bank of England, or Bank of Japan formally changes its inflation target definition, its target index, or its stated tolerance band, in an announced framework revision that its own communications tie at least in part to relative-price divergence or measurement concerns. A routine framework review that reaffirms the status quo resolves no. Opened at 50%, which is the honest way of saying this one is a coin flip and the interesting part is being on the record about the mechanism rather than the outcome.

---

Nothing above is hedged in the prose because all of the hedging is in the numbers. That is where hedging belongs.

The next review is 1 November 2026.
