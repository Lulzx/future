# Capital - the input that is not scarce, and why that is the problem

← [Part I](README.md) · [Index](../README.md)

---

*Quantities current to mid-2026.*

Capital is named as the fourth input alongside compute, energy, and data. It behaves unlike the other three, and the difference is the whole point of this page.

**Compute, energy, and data are constraints. Capital is not - capital is a verdict.** There is no physical ceiling on how much money can flow into AI infrastructure. There is only a continuously re-priced judgment about whether the flow will be repaid. That makes capital the fastest-moving of the four inputs and the only one that can reverse.

## The scale, as of mid-2026

The four largest hyperscalers guided to roughly **$700–725B of combined 2026 capex** (company guidance through mid-2026: Amazon ~$200B, Microsoft ~$190B, Alphabet ~$180–205B, Meta ~$125–145B; earlier-year prints sat ~$635–670B and have been revised up). Of that, on the order of **$240B+** is physical plant - land, shells, power, cooling, and construction - rather than silicon. Cumulative 2025–2030 hyperscaler capex forecasts from sell-side houses have been revised into the multi-trillion range; the point for this page is direction and financing mix, not any single cumulative total.

Two derived facts matter more than the headline:

- **Cost per megawatt is rising, not falling.** Shell-and-core is around **$11.3M/MW** in 2026 against ~$7.7M/MW in 2020, and all-in AI-density campuses land at **$9–12M/MW**. Learning curves are not operating here, because the binding inputs - turbines, transformers, skilled electrical labor, interconnection rights - are the ones with no learning curve. See [Energy](energy.md).
- **A rising share of the spend is in long-lived assets.** Silicon depreciates in 3–6 years; substations, shells, and transmission rights last 30. This quietly changes the risk profile of a correction: a drawdown strands the chips and leaves behind powered land, which is precisely the [inelastic complement](../02-games/3-firms.md) that appreciates afterward.

## Three sources of capital, three different failure modes

| Source | Discipline | Fails by |
|---|---|---|
| **Hyperscaler operating cash flow** | High - it competes with buybacks and is visible quarterly | Board patience. Reverses in one earnings cycle. |
| **Private credit, SPVs, and vendor financing** | Low - off-balance-sheet, lightly disclosed | Credit event. Reverses violently and with contagion. |
| **Sovereign and quasi-sovereign** | Very low - the return is strategic, not financial | Political turnover. Reverses on a five-year cycle, or not at all. |

The migration of AI financing **from the first row toward the second** during 2025–26 is the single most important thing to watch in the capital stack. Operating-cash-funded capex is self-limiting and legible. Debt-funded capex secured against depreciating accelerators is neither, and it is the structure that turns a demand disappointment into a financial event rather than a spending pause.

> **Prediction:** if the 2027–29 correction described in [Compute](compute.md) arrives, its proximate trigger is **~65% likely to be a credit event in AI-adjacent structured finance** rather than an earnings miss at a hyperscaler. The equity story is well-covered; the debt story is where the leverage is.

## Circularity, and why the verdict is getting harder to read

A verdict is only as good as the evidence it prices, and by mid-2026 the evidence has a circularity problem. Chip vendors invest in model labs that commit the proceeds to chip purchases; hyperscalers book cloud revenue from labs they have equity stakes in; neocloud operators borrow against accelerator collateral whose resale value depends on the same demand the borrowing is meant to serve. None of this is fraudulent and all of it is precedented - vendor financing looked identical in the late-1990s telecom build - but it means headline "AI revenue" contains an echo of the capex itself, and the true external-demand signal is smaller and noisier than the reported one. The 45–55% CAGR question in [Compute](compute.md) has to be answered net of this echo, and almost no public figure is.

The failure mode of this paragraph: circularity is also what *early* genuine demand looks like, since an ecosystem bootstrapping real capacity finances itself in exactly these patterns. The test is not the structure but the exit - whether end-customer revenue (outcome-priced contracts, [B5](../07-indicators/diffusion/economy.md)) grows into the financing or the financing rolls onto new lenders. [A3](../07-indicators/substrate.md) watches the mix precisely because the structure alone cannot be scored.

## Why the sovereign row changes the game

A private firm stops spending when the NPV goes negative. A state does not, because it is not buying an NPV - it is buying the option not to be dependent on someone else's compute. That is a strategic good, and strategic goods are bought at prices that make no commercial sense.

The consequence: **the capital ceiling is not a ceiling in any jurisdiction where the state is a buyer.** Gulf sovereign wealth, Chinese state-directed lending, and increasingly European and Indian industrial policy all sit outside the discipline that would otherwise cap the [$100B training run](compute.md). This is the mechanism by which the compute extrapolation survives a commercial correction - the buyer changes.

It also means a correction is **differentially destructive**. It culls exactly the labs that are financed commercially, and leaves standing those financed strategically. The post-correction map is therefore more state-adjacent than the pre-correction map, with everything that implies for [Game 2](../02-games/2-nations.md).

## The interest-rate channel nobody prices

Every capex projection in this document implicitly assumes financing costs stay near their mid-2020s range. That assumption does real work and is rarely stated.

If AI does deliver the TFP step-up in [Part V](../05-probabilities/README.md) row 2, the *first* macroeconomic consequence is a **higher real neutral rate** - higher productivity growth raises the return on capital everywhere, which raises the rate at which all of this is discounted. That is self-limiting in a specific and underappreciated way:

**Success raises the cost of the capital required to continue.** The better the technology works, the more expensive it becomes to finance the next round of it. This is not a paradox; it is how every genuine general-purpose technology has behaved, and it is why railway and electrification booms both ran through capital-market crises without the underlying technology failing.

## What a correction does and does not reset

If the credit-event path fires, three clocks reset and one does not. **Secondary-lab financing** freezes for years - pure-plays and neoclouds are the casualty class. **Hyperscaler board patience** shortens for a cycle, which cuts train-run ambition more than inference capacity already built. **Vendor and SPV markets** reprice collateral haircuts, which is the transmission into the broader credit system. What does *not* reset: the research line at state-adjacent and cash-rich labs, the powered land (often more valuable after a cull of competing demand), and the open-weight diffusion already in the wild. That is why [class 2](../08-method/base-rates/cycles.md) and [winters](../08-method/base-rates/winters.md) both insist on scoring a *capital* winter rather than a capability winter, and why [Part V](../05-probabilities/README.md) row 6's 2–4 year timeline slip is a financing claim, not a science claim.

## What would falsify the pessimistic read

- **Revenue per dollar of capex improving.** If inference revenue scales super-linearly against infrastructure spend - plausible if agents are sold on outcomes rather than seats - the capital question dissolves without a correction. See [Inference economics](inference-economics.md).
- **Depreciation schedules proving conservative.** If accelerators retain useful life past six years because inference demand absorbs older silicon, the effective capital intensity of the whole build falls sharply.
- **The physical-asset residual being large.** Powered land with interconnection is worth more in 2032 than it cost in 2026 under nearly every scenario. If the majority of spend is really that, the downside is bounded in a way the headline numbers hide.
- **Financing mix migrates back to operating cash.** If the 2025–26 drift into private credit reverses, the credit-event path loses its fuel even if revenue disappoints - a spending pause replaces a financial event.

**Investor skepticism in earnings Q&A is not A3 firing.** Scrutiny of the spend can rise for years while financing mix still drifts toward SPVs. Score [A3](../07-indicators/substrate.md) on mix and collateral structure, not on the tone of analyst questions. → [cycles](../08-method/base-rates/cycles.md)

---

**Related:** [Compute](compute.md) on the capex wall · [Energy](energy.md) on what the money cannot buy quickly · [Game 3 - Firms](../02-games/3-firms.md) on where returns land · [Finance](../03-domains/cognitive/finance.md)

**Next:** [Inference economics](inference-economics.md)
