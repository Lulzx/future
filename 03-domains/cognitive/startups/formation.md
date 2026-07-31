# Formation - the cost of starting collapses

← [Startups](README.md) · [III.A](../README.md) · [Index](../../../README.md)

---

For most of the software era, founding a company had a characteristic shape: raise enough capital to hire a team that could build a product over 12–24 months, then sell it. That shape rested on a fact that is no longer true - **writing the product was expensive.** When generation, scaffolding, design drafts, legal boilerplate, and first-pass go-to-market materials all approach free, the formation economics invert. The scarce inputs become taste, distribution access, domain trust, and the ability to absorb liability - not engineering headcount.

## What actually gets cheaper

Not everything. Distinguish ruthlessly:

| Cost item | Trajectory under cheap cognition | Residual |
|---|---|---|
| Greenfield product code | Collapses hard (2–10× throughput; more for boilerplate-heavy work) | Integration into real customer systems |
| Design / marketing / pitch materials | Collapses hard | Taste, brand, and channel access |
| Legal scaffolding (standard contracts, policies) | Collapses for commodity forms | Negotiation, jurisdiction, novel risk |
| Diligence and market research | Collapses for desk research | Proprietary access, live customer truth |
| Sales cycle into enterprises | Barely moves | Relationships, security review, procurement |
| Licensed / physical / regulated entry | Barely moves | Permits, capital equipment, balance sheet |
| Raising a fundable narrative | Gets *cheaper to fake* | Investor verification of moat |

The formation shock is therefore **asymmetric by category**. A pure digital tool for a consumer or SMB can be born for low five figures and a few person-months. A medical device, a bank, a robotics company, or a regulated marketplace still pays the old prices - or higher, because the complementary inputs ([energy](../../../01-substrate/energy.md), skilled trades, licensure) are inflating. → [Selection](selection.md) for the category consequences.

## Team size as the leading indicator

If the formation claim is right, **median technical headcount at seed for software startups falls through the late 2020s**, and the solo / two-person seed becomes common rather than eccentric. The mechanism is not "AI replaces founders"; it is that the work that used to require a small eng team (CRUD, auth, billing, admin, basic mobile) is exactly the high-leverage greenfield row in [software](../software.md).

Three second-order effects follow:

1. **Equity math changes.** Fewer early employees means less dilution for a given raise - or, more often, smaller raises because less payroll is needed to reach the same demo. Seed checks that once funded eighteen months of five engineers fund three years of two people and a lot of inference spend.
2. **The "technical co-founder" premium compresses** for commodity product shapes and *rises* for systems that still require deep architecture, security judgment, or brownfield integration. The market will misprice this for years by treating all "AI-built" demos as equivalent.
3. **Founder apprenticeship thins.** Junior eng roles were how many eventual founders learned production judgment. As those roles hollow ([Game 4](../../../02-games/4-labor.md), [software](../software.md)), the pipeline of people who have *shipped and operated* under load shrinks even as the pipeline of people who can *demo* expands. Formation gets easier; competent formation does not automatically.

> **Prediction:** by 2029, among US software seed rounds, **≥40%** of newly funded companies have ≤3 full-time technical staff at close (~65% confidence). Falsifier: sustained median team sizes at seed that look like 2019–22 norms despite tool adoption.

## Idea-to-ship is not idea-to-revenue

The dangerous confusion in the formation literature is treating "we shipped" as "we started a company." Shipping is now the easy part for symbol products. Revenue still requires a customer who will pay, switch, integrate, and stay - and those frictions did not collapse with the code:

- **Switching cost and workflow embedding** still take quarters to years inside enterprises.
- **Trust and liability** still require a balance sheet or a license ([insurance](../insurance.md)).
- **Distribution** still sits with platforms, brands, and default placements ([Game 3](../../../02-games/3-firms.md)).
- **Ground truth about product-market fit** is still expensive: only revenue, retention, and unit economics resolve it, and those resolve slowly.

So the observable pattern should be: **more products, shorter time-to-demo, similar or longer time-to-durable-revenue, higher early death rate.** That is selection pressure rising, not "startups are booming" in any welfare-relevant sense. Count surviving firms with positive contribution margin at year three, not GitHub repos or Product Hunt launches.

### The capital intensity bifurcation

Formation capital splits into two regimes:

| Regime | Example | Capital role |
|---|---|---|
| **Near-zero formation** | Vertical tool, agent wrapper, content product | Capital buys *distribution and time*, not product |
| **Still capital-heavy** | Robotics, biotech, energy services, regulated finance | Capital buys atoms, licenses, and multi-year proof |

In the first regime, the old "raise to build" story is obsolete; over-raising is a governance failure that funds vanity burn. In the second, AI may help the research and software layers but does not remove the physical or regulatory clock - [drug discovery](../../physical/medicine/drug-discovery.md), [robotics](../../physical/robotics/), [energy sector](../../physical/energy-sector.md). Confusing the two regimes is how both founders and LPs misallocate: they fund near-zero-formation companies as if they needed heavy R&D, and starve capital-heavy companies because the demo looked slow next to a weekend SaaS.

## What formation collapse does *not* imply

- **It does not imply higher aggregate startup success rates.** Lower cost of attempt raises the number of attempts; the bar for *customer* adoption may rise as the market floods.
- **It does not imply the end of technical skill.** Architecture, security, evaluation harnesses, and brownfield integration remain scarce - they are just no longer the binding constraint on *starting*.
- **It does not imply that "anyone can found."** Taste, domain access, sales skill, and reputation still gate outcomes; the tools equalize implementation, not judgment.
- **It does not imply VC is obsolete.** It implies VC's diligence target moves - from "can they build" to "will anyone care and can they hold." → [Venture](venture.md)

## Failure modes

- **If brownfield and enterprise integration open up** as fast as greenfield (full-repo agents that safely ship into legacy estates), formation cost collapse spreads into the sticky half of software and employment composition shifts faster than [software](../software.md) claims - more startups become real threats to incumbents, not just demo farms.
- **If platform or model vendors absorb the formation layer** (one-click "start a business" that keeps the customer relationship upstream), independent formation collapses into tenancy and this page's independent-firm framing weakens.
- **If junior hiring and founder pipelines recover together**, the apprenticeship-thinning claim was cyclical noise rather than structural.

**Months-to-first-dollar and months-to-churn beat months-to-MVP.** Score formation health on revenue and retention cohorts, not on demo velocity - demo velocity is what got cheap, and measuring the cheap thing always looks like a boom.

---

**Related:** [Software](../software.md) · [Game 4](../../../02-games/4-labor.md) · [Game 3](../../../02-games/3-firms.md) · [Selection](selection.md) · [Venture](venture.md) · [2026–2028](../../../04-timelines/2026-2028.md)

**Next:** [Selection](selection.md)
