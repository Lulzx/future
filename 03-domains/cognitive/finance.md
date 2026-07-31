# Finance

← [III.A - Cognitive](README.md) · [Part III](../README.md) · [Index](../../README.md)

---

Already the most automated domain, so **marginal change in trading is smaller than expected.** The obvious target has been hit repeatedly for thirty years.

## Where the change actually is

The middle and back office: compliance, underwriting, research, due diligence. Plus the collapse of information-asymmetry rents - a large share of finance's historical margin came from knowing something first or knowing it more cheaply, and that margin compresses toward zero.

| Layer | AI effect | Who captures |
|---|---|---|
| High-frequency / quant trading | Incremental; already saturated | Incumbents with data + latency |
| Research / sell-side notes | Compresses hard | Buy-side time; platforms |
| Credit underwriting / KYC / AML | High - structured data, clear loss | Scale banks, cloud risk stacks |
| Compliance / surveillance | High - text + pattern | Same; vendor Red Queen |
| Advisory / relationship | Slow - trust, liability, regulation | Humans + brand |
| Market structure / stability | **Correlation risk** | Public good; underprovided |

Ground truth is often **cheap** (P&L, defaults, fills). That is why finance moved early. The residual moats are fiduciary duty, balance-sheet capacity, licenses, and distribution - [Game 3](../../02-games/3-firms.md) inelastic complements.

### Why the research rent actually compresses

The asymmetry-rent claim deserves its mechanism. Sell-side research was already a dead margin walking before models arrived: MiFID II (EU, 2018) forced research to be priced separately from execution, and the revealed willingness to pay collapsed - buyers had been paying for access and the relationship, not the analysis. AI finishes the job from the other side: when a competent read of a filing, a transcript, or a credit doc costs approximately nothing, anyone still charging for analysis must actually be selling something else - primary access to management, the right to be wrong with someone else's signature on it, or distribution to clients who cannot run the tools. Those are all [Game 3](../../02-games/3-firms.md) complements, not analysis. The failure mode: if differentiated data access (expert networks, alternative data exclusives) re-creates the asymmetry one layer down, the rent relocates rather than compresses, and the buy-side pays the same total in a different line item.

### Advisory survives on liability, not on empathy

The slow row in the table is usually explained as "clients want a human." The more durable explanation is structural: a fiduciary is a legal person who can be sued, sanctioned, and barred, and the client's protection is precisely that the advisor has something to lose. An advisory model with no assets and no license offers advice with no recourse, which for large sums is a worse product at any accuracy level. This predicts the observable shape: AI eats the preparation of advice everywhere at once, while the delivery and ownership of advice stays human until the [insurance](insurance.md) and regulatory stack agrees to hold someone else accountable. It also predicts that advisory headcount thins from the bottom (paraplanners, associate advisors) while the client-facing layer persists - the same hollowing as [law](law.md), one notch slower.

## The systemic risk nobody prices

If many institutions run correlated models on correlated data, you get **synchronized behavior** - the mechanism behind every flash crash.

This is not a hypothetical extension of existing risk; it is a qualitative change in it. Diversity of strategy is what makes markets absorb shocks. Model monoculture removes it, and does so invisibly, because each institution's risk model evaluates its own position rather than the correlation structure across positions.

The reference class exists. In August 2007 the quant equity funds discovered, over roughly one week, that they had independently converged on the same factor exposures; the unwind was violent precisely because every risk system had certified every portfolio as diversified while the *population* of portfolios was not. That episode required only shared statistical technique and shared data. Foundation models are a stronger convergence force on both axes - shared weights, shared training corpora, synchronized updates - and they add a third: shared *reasoning*, so that responses to a novel shock correlate even off the training distribution. Nothing in current supervisory practice measures the population-level object; stress tests are run institution by institution, which is exactly the blind spot.

> **Model monoculture is a financial stability risk that is currently unpriced.**

This is also among the most plausible candidates for the "salient accident" in [Game 2](../../02-games/2-nations.md) - a large market dislocation is more likely than kinetic or biological events, arrives faster, and produces the same regulatory forcing function. Refined order of mechanisms: finance and [correlated cyber/insurance](../contested/cybersecurity.md) first; bio middle; warfare least recoverable.

### Same shape as insurance correlation

[Insurance](insurance.md) / [Uncertainty 6](../../06-uncertainties/correlated-risk.md): few foundation models, synchronized updates, shared failure modes. Finance adds **shared factor exposures and crowded trades**. A model-driven selloff can be the correlated event that opens the Game 2 window *and* the insurance exclusion cycle in the same quarter.

## Capex, credit, and the AI sector itself

Finance is not only a domain AI transforms - it is the **channel that funds AI**:

- [Capital](../../01-substrate/capital.md) financing mix (cash → private credit / SPV) determines whether a demand miss is a pause or a credit event
- [Part V](../../05-probabilities/) row 6 - sector correction - is a finance claim with AI fundamentals in the causal chain
- [Rates](../../09-macro/rates.md) - success can raise neutral rates and tighten the next round of capex (financial governor on [RSI](../../06-uncertainties/recursive-self-improvement.md))

> **Prediction:** the first major "AI incident" that writes 2030s rules is more likely to be **labeled a market or credit event with AI in the narrative** than a pure model-misalignment story - even when models are in the causal chain. Political branding follows the agency with jurisdiction (Treasury, SEC, central bank), not the research taxonomy.

## Labor and the apprenticeship gap

Front-office junior research and middle-office analyst roles compress like law. Sales and relationship roles lag. Regulatory headcount may **rise** after incidents even as analytical headcount falls - [state capacity](../contested/state-capacity.md) hiring into the measurement gap.

## What to watch

| Signal | Reading |
|---|---|
| Herding metrics / factor crowding in model-using funds | Monoculture building |
| AI-sector credit spreads and SPV disclosure | [A3](../../07-indicators/substrate.md) fragility |
| Compliance headcount vs research headcount at large banks | Labor composition |
| Speed of post-incident rulemaking after a dislocation | Game 2 window |
| Outcome-priced AI vendor contracts in banks | [B5](../../07-indicators/diffusion/economy.md) reliability belief |

## Failure modes

- **If strategy diversity is preserved** (many models, many scaffolds, human overlays), monoculture risk was overstated.
- **If trading was never the margin** and advisory proves AI-proof longer than claimed, the "already automated" premise overstates residual disruption.
- **If a pure cyber incident** hits finance harder than model herding, the forcing event is still financial *jurisdiction* but different mechanism - still Game 2, different shelf draft.

### Why finance is the incident favourite

Among candidate forcing events, finance has three structural advantages for becoming the political brand: **existing agencies** with crisis muscle memory, **fast feedback** (P&L and market prices resolve in days, not years), and **correlated-balance-sheet channels** that make one firm's model problem everyone's funding problem ([Uncertainty 6](../../06-uncertainties/correlated-risk.md)). A clinical AI harm may be worse in welfare terms and still write slower rules because the institutional path is state medical boards, not the Fed. That is why the prediction above is about *labeling and jurisdiction*, not about which failure is most likely in raw probability.

**Herding metrics are the pre-incident series.** Factor crowding and model-share concentration in funds using the same scaffolds move before any crash - watch them the way the page watches AI-sector credit spreads.

---

**Related:** [Game 2](../../02-games/2-nations.md) · [Capital](../../01-substrate/capital.md) · [Insurance](insurance.md) · [Cybersecurity](../contested/cybersecurity.md) · [Rates](../../09-macro/rates.md) · [Part V](../../05-probabilities/) · [Uncertainty 6](../../06-uncertainties/correlated-risk.md)

**Next:** [Science](science.md)
