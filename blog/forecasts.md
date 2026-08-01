---
title: The Scorecard
dek: Every claim on this blog that can be caught failing, held still long enough to be graded. Each one carries a probability, a resolution date, and the rule it resolves by.
date: 2026-08-14
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
| 18 | A salient AI-attributed incident occurs | 75% | Dec 2031 |
| 19 | Binding rules follow the incident within 18 months | 85% | conditional |
| 20 | Selective hiring reverts to witnessed assessment | 70% | Dec 2030 |
| 21 | The productivity step-up beats the demographic tide on rates | 30% | Dec 2035 |
| 22 | Capture-time attestation ships default-on in flagship phones | 55% | Dec 2029 |
| 23 | A productivity step-up is visible in official statistics | 20% | Dec 2030 |
| 24 | The first large robot fleets are structured-setting fleets | 80% | Dec 2030 |
| 25 | Trades wages outgrow credentialed professional wages | 70% | Dec 2035 |
| 26 | China keeps a majority of global robot installations | 75% | Dec 2030 |
| 27 | No takeoff signature appears | 80% | Dec 2029 |

Rows 1 through 9 opened 1 August 2026, and each post since has brought one or two: through row 27 on 14 August. All twenty-seven open.

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

## 18. A salient AI-attributed incident occurs by the end of 2031

[The incident post](incident-window.md) carries [the corpus's expectation](../02-games/2-nations.md) of a serious AI-attributed incident, most plausibly financial, correlated-cyber, or a biological near-miss, in the 2027 to 2031 window.

**Resolves yes if**, by 31 December 2031, a single event causing large, widely reported harm (fatalities, losses above $1B, or a declared emergency) is attributed to an AI system as a proximate cause by official investigation or by consensus reporting in major outlets. Attribution is the load-bearing clause: diffuse harms, gradual displacement, and contested causation do not count, which is exactly the privacy-class failure mode the post names.

A no here is not good news exactly, since the diffuse-harm world produces late, weak, fragmented rules instead. Opened at 75%.

## 19. Within 18 months of that incident, binding rules are enacted or formally proposed

The corpus's refined prediction, conditional on row 18.

**Resolves only if** row 18 resolves yes. **Then resolves yes if**, within 18 months of the incident, binding AI rules are enacted or formally introduced in the incident's jurisdiction, addressed to the incident's mechanism. **Resolves no** if the window passes with hearings and voluntary frameworks only, which would confirm the theatre branch.

Opened at 85%. The corpus's sharper sub-claim, that ~50% of the operative technical content is industry-originated absent a public measurement institution, is noted here for the annotation but not scored, because origin attribution of statutory text is not cleanly resolvable.

## 20. By the end of 2030, selective hiring and education revert to witnessed assessment

[The signals post](dead-signals.md) applies the Witness Test forward, and [the education page](../03-domains/cognitive/education.md) predicts the reversion by 2030.

**Resolves yes if**, by 31 December 2030, credible surveys or reporting show a majority of selective employers in exposed knowledge professions (law, consulting, software, finance) weight supervised work samples, invigilated or synchronous assessment, or in-person evaluation over asynchronous application materials as the primary screen. The signal is the screen's weight, not its existence: take-homes surviving as a formality does not save the row. Opened at 70%.

## 21. The productivity step-up beats the demographic tide on rates by 2035

[The success-tax post](success-tax.md) carries [the corpus's rates claim](../09-macro/rates.md) at face value.

**Resolves yes if**, by 31 December 2035, ten-year real rates (TIPS or equivalent) in the US are sustained more than 100 basis points above their 2015 to 2024 average for at least eight consecutive quarters, in a period where measured productivity growth has visibly accelerated, per the row 23 test or its successor series. The joint condition is deliberate: rates rising on fiscal stress alone resolves this row no, with the annotation saying so. Opened at 30%.

## 22. Capture-time attestation ships default-on in most flagship phones by the end of 2029

[The build post](what-to-build.md) argues detection loses and attestation wins, and stakes the gets-built list on this row. It is the blog's sharpening of [C8](../07-indicators/governance.md), which tracks provenance infrastructure rather than detector accuracy.

**Resolves yes if**, by 31 December 2029, a majority of new flagship smartphones from the top five global vendors by unit share ship with cryptographic content credentials (C2PA-style capture attestation) enabled by default for the built-in camera. Opt-in features, journalist-only hardware, and platform-side labeling do not count. Default-on at capture is the whole claim. Opened at 55%.

## 23. A productivity step-up is visible in official statistics by 2030

[The line-shaft post](line-shaft.md) argues the J-curve resolves on management-cohort turnover, which is why this row's probability is low despite the blog's general thesis that the technology works.

**Resolves yes if**, by 31 December 2030, US trend TFP or labor-productivity growth in the official series runs at least half a percentage point above its 2015 to 2024 average over a rolling three-year window. Opened at 20%, matching the corpus's own probability row, and the post is on record that a no here plus widening between-firm dispersion is the mechanism *succeeding*, not failing. The dispersion reading goes in the annotation either way.

## 24. The first large robot fleets are in structured, high-turnover settings

[The delivered-hour post](delivered-hour.md) carries [the cost-curves prediction](../03-domains/physical/robotics/cost-curves.md): warehousing, logistics yards, and food processing before construction, retail, or care.

**Resolves yes if**, on 31 December 2030, the largest deployed fleets of mobile or humanoid robots outside automotive manufacturing, measured by units in commercial service per public disclosures and industry tracking, are concentrated in warehousing, logistics, or food processing rather than construction, retail, or care. Teleoperated units count only where the operator ratio is disclosed and autonomy is the majority mode, per the post's own filter. Opened at 80%.

## 25. Real wage growth in licensed trades outpaces credentialed cognitive professions, 2026 to 2035

[The ownership post](seventh-row.md) carries [the corpus's least intuitive checkable claim](../09-macro/assets.md) at its published confidence, and [the demography post](missing-workers.md) arrives at the same prediction independently, which is why it gets a row despite the long horizon.

**Resolves yes if** cumulative real wage growth from 2026 through 2035, per BLS occupational wage series deflated by CPI, is higher for licensed skilled trades (electricians, plumbers and pipefitters, HVAC technicians, powerline workers, as a group) than for credentialed cognitive professions (lawyers, accountants and auditors, financial and management analysts, as a group). Composition effects are the known hazard: the comparison uses median wages within occupations, not averages across a changing mix.

The claim is explicitly conditioned on robotics staying out of unstructured physical work through the window. If row 24's world extends to unstructured settings early, this row is expected to fail, and the annotation will say which condition broke. Opened at 70%.

## 26. China keeps a majority of global industrial-robot installations through 2030

[The demography post](missing-workers.md) argues labor scarcity pulls automation in, and that the pull is strongest where the workforce contraction is largest. China took 54% of global installations in 2024 (IFR World Robotics, 2025), with domestic makers outselling foreign suppliers at home for the first time.

**Resolves yes if** China's share of annual global industrial-robot installations, per IFR World Robotics, is at or above 50% in the 2030 report year. **Resolves no** below that, which would say the scarcity-pull mechanism is weaker than the demographic arithmetic implies, or that substitution moved elsewhere faster. Opened at 75%.

## 27. No takeoff signature appears by the end of 2029

[The three-governors post](three-governors.md) defines the signature of genuine recursive acceleration as a conjunction: the frontier pulling away from followers *while* the public governors strain. Either alone is noise. A narrowing follower gap is evidence against.

**Resolves yes if**, through 31 December 2029, the measured frontier-to-open-weight lag (Epoch AI's stricter equivalence rule, or its named successor) stays at or below 12 months. **Resolves no if** the lag exceeds 12 months for two consecutive published readings *and* at least two governor-strain signals are concurrently visible: real rates up more than 100 basis points from their 2024 to 2026 average, US interconnection queues lengthening year over year, or the verifiable-versus-unverifiable capability gap widening per the corpus's B8 tracking. A widening lag with relaxed governors resolves neither way and gets logged as the anomaly the governor model says should not happen.

A no here is the biggest single rewrite this scorecard can take, and the blog has pre-committed to taking it as a rewrite rather than an explanation. Opened at 80%.

---

Nothing above is hedged in the prose because all of the hedging is in the numbers. That is where hedging belongs.

The next review is 1 November 2026.
