# Game 3 - Firms: the Red Queen, and why adoption doesn't mean profit

← [Part II](README.md) · [Index](../README.md)

---

The most misunderstood dynamic in the entire subject.

Consider a competitive industry where all firms can adopt AI at cost *c* and reduce marginal cost by *Δ*. In Bertrand-ish competition, prices fall to the new marginal cost. Every firm must adopt to survive. **Nobody captures the surplus - consumers do.**

## Why this resolves the current argument

This is why "AI will make companies hugely profitable" is mostly wrong.

And it is why "AI is a bubble because firms report no earnings lift" is *also* wrong.

The gains are real. They land in consumer surplus and in whoever holds the genuinely scarce input. The absence of a large earnings lift at the median adopter is not evidence of a bubble - **it is exactly what competitive markets predict when a general-purpose input gets cheaper.** Expecting otherwise is expecting firms to capture rents in markets where entry is not blocked.

The corollary is uncomfortable for adopters: the investment is mandatory and the return is defensive. You spend to not die, not to win. That is the Red Queen, and it is a perfectly normal outcome in the history of general-purpose technologies - electricity, containerization, ERP, the internet all ran the same way.

## So where does value actually accrue?

By elimination - to whatever AI does *not* make abundant:

- **Energy**, and the right to build it
- **Land**, especially with power, water, and zoning
- **Regulatory licenses**, and the liability shield that comes with them
- **Proprietary flow data** - real-time, not historical
- **Distribution and default placement**
- **Trust, brand, and the capacity to be sued**
- **Physical bodies in physical space**, until robotics matures

This is Baumol's cost disease inverted and weaponized. **As cognition approaches free, all value concentrates in the inelastic complements.**

If one sentence carries through the next decade, that's it.

## Where the Bertrand result does not apply

The scope condition does real work, so state it precisely. Surplus escapes to producers wherever entry is blocked or price competition is muted:

- **Regulated and licensed oligopolies** (healthcare delivery, law, banking, utilities): the cost reduction arrives but prices are set by reimbursement schedules, fee customs, or rate cases, so the adopter keeps the spread until the regulator or client notices. Here AI is margin, at least for a pricing cycle.
- **Network-effect and default-placement businesses**: competition is for position, not price, so cheaper cognition widens the moat of whoever already holds distribution rather than eroding it.
- **Monopolized upstream input**: if frontier models consolidated to a single practical vendor, the Bertrand logic would run upstream and the model vendor would tax the whole adopter layer. [Inference economics](../01-substrate/inference-economics.md) argues the moat is short (fast-following keeps the model layer itself competitive), which is why this document expects surplus to pass *through* the model layer rather than pool in it.

The two-economy split in [Prices](../09-macro/prices.md) is this section restated as macro: the competitive tradables deflate, the licensed and land-linked sectors keep their prices, and measured inflation becomes a ratio between the two.

## The transient rent, and who eats the adoption cost

Bertrand is the end state, not the path. During diffusion, an early adopter holds a real cost advantage with a half-life set by rivals' adoption lag - quarters to a few years depending on sector reorganization friction ([Game 4](4-labor.md) covers why the friction is organizational). So the honest pitch to an adopter is not "no gains" but "a temporary spread that decays to zero, which you must nonetheless buy." Two second-order effects follow:

1. **Over-adoption is its own dissipation.** Because the investment is defensive and the counterfactual is unobservable, boards mandate adoption under competitive fear rather than measured return. Spending above the optimizing level - consultant-led programs, shelfware seats, tool churn - is the firm-level analogue of Game 1's over-dissipation, and it is why survey-measured "AI spend" will persistently exceed anything visible in productivity statistics.
2. **The adoption cost is recurring, not one-time.** Model generations turn over in months; integrations, evals, and retraining recur with them. The *c* in the model is closer to a subscription than a capex, which lowers the equilibrium net benefit to adopters further than the static story suggests.

## How to score the Red Queen without cheating

Three observables, not one. **Adoption** (surveyed use, seat counts) can rise while **margins** (B3) stay flat and **prices** (B7 cognitive basket) fall - that is the base case and it is *not* a bubble. Adoption rising with margins expanding in competitive sectors is the Red Queen broken. Adoption rising with margins expanding only in concentrated/licensed sectors is the scope condition working as written - Game 3 still holds where it claimed to hold. The [steelman](../08-method/steelman.md) §2 objection (markets aren't competitive) is scored by this cross-section, not by the average: uniform margin expansion everywhere falsifies; dispersion confirms the split.

The consumer-surplus claim is harder to observe directly. The proxy is relative prices: if competitive cognitive services deflate while complements inflate, surplus is leaving the adopter layer somewhere. Whether it lands with consumers or with complement-owners is the [assets](../09-macro/assets.md) / [Uncertainty 7](../06-uncertainties/complement-erosion.md) question, not a Game 3 failure.

## Failure modes

- **Incumbent capture of distribution**: if a handful of platforms intermediate AI for whole sectors and hold defaults, surplus stops at the platform instead of reaching consumers - the mechanism is intact but the beneficiary changes.
- **Model-layer consolidation** below the point of effective competition - the upstream-monopoly case above; watch pricing power at the API layer rather than rhetoric.
- **Regulated sectors expand** as a share of the economy (aging pushes healthcare share up) - then the exception outgrows the rule and the aggregate consumer-surplus claim weakens even though every mechanism here still operates.
- **Complement erosion runs fast**: the list this page routes surplus to is itself temporary - [Uncertainty 7](../06-uncertainties/complement-erosion.md). Game 3's *mechanism* (competitive dissipation) can hold while its *distributional implication* softens toward consumer abundance.

**SaaS is the worked example.** Seat-priced software with no data/distribution/compliance moat is Red Queen pure: adopt or die, margins flat, prices soft. Outcome pricing ([B5](../07-indicators/diffusion/economy.md)) is the escape hatch when reliability is real - not a different game, a different pricing of the same one. → [Software](../03-domains/cognitive/software.md)

---

**Related:** [Inference economics](../01-substrate/inference-economics.md) on the two-year moat · [Software](../03-domains/cognitive/software.md) for the SaaS case · [Startups](../03-domains/cognitive/startups/) for Game 3 applied to firm birth · [Prices](../09-macro/prices.md) · [Compressed version](../00-overview/compressed.md)

**Next:** [Game 4 - Labor](4-labor.md)
