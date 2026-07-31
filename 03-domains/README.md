# Part III - Domain by Domain

← [Index](../README.md) · [Part II](../02-games/)

---

Nineteen domains (counting regional geopolitics as one heading, and startups as the formation layer), each read through the same two lenses from earlier parts: **how cheap is ground truth here** ([Data](../01-substrate/data.md)) and **what is the inelastic complement** ([Game 3](../02-games/3-firms.md)).

Where a prediction here looks surprising, the explanation is almost always one of those two.

## Three groups

The grouping is an argument, not an alphabet. Each group has a different relationship to ground truth, and that relationship - not the industry label - determines the shape of the transition.

| Group | What defines it | What follows |
|---|---|---|
| [**A - Cognitive**](cognitive/) | The output is symbols; verification is inspection | Fast, happening now, gated by trust and liability |
| [**B - Physical**](physical/) | The output is atoms; verification requires a physical experiment | Slow, gated by a clock you don't control |
| [**C - Contested**](contested/) | An adversary optimizes against you with the same tools | The question is the offense–defense balance, not capability |

### [A - Cognitive](cognitive/)
[Software](cognitive/software.md) · [Law](cognitive/law.md) · [Finance](cognitive/finance.md) · [Science](cognitive/science.md) · [Education](cognitive/education.md) · [Media & culture](cognitive/media.md) · [Insurance](cognitive/insurance.md) · [Startups](cognitive/startups/) · [Meaning](cognitive/meaning.md)

### [B - Physical](physical/)
[Medicine](physical/medicine/) · [Robotics](physical/robotics/) · [Energy sector](physical/energy-sector.md) · [Agriculture](physical/agriculture.md) · [Logistics](physical/logistics.md)

### [C - Contested](contested/)
[Geopolitics](contested/geopolitics/) · [Warfare](contested/warfare.md) · [Cybersecurity](contested/cybersecurity.md) · [Biosecurity](contested/biosecurity.md) · [State capacity](contested/state-capacity.md)

## The ground-truth ordering, in one table

| Domain | Ground truth | Human moat | Timing |
|---|---|---|---|
| [Cybersecurity](contested/cybersecurity.md) | Free - exploits verify themselves | None on offense; integration on defense | Now |
| [Software](cognitive/software.md) | Cheap (tests) | Architecture, integration, judgment | Now |
| [Startups](cognitive/startups/) | Cheap for demos; expensive for durable PMF | Complements (data, license, distribution, atoms) | Now; formation first |
| [Finance](cognitive/finance.md) | Cheap (P&L) | Fiduciary responsibility | Largely done |
| [Insurance](cognitive/insurance.md) | Cheap and historical | Balance sheet, regulatory capital | Now, quietly |
| [Warfare](contested/warfare.md) | Cheap and brutal | Escalation judgment | Now |
| [Law](cognitive/law.md) | Moderate | Standing, liability, negotiation | Now |
| [Logistics](physical/logistics.md) | Cheap in planning, expensive in handling | The last hundred metres | Split |
| [Medicine](physical/medicine/) | Mixed | Licensure, liability, hands | Consumer now; institutional slow |
| [Science](cognitive/science.md) | Varies wildly by field | Experimental throughput | Bottlenecked on wet lab |
| [Biosecurity](contested/biosecurity.md) | Expensive; catastrophic to get wrong | Materials, tacit lab skill | Now, quietly |
| [Agriculture](physical/agriculture.md) | Seasonal - one experiment per year | Land, water, biology's clock | Slow |
| [Education](cognitive/education.md) | Weak | Childcare, socialization, motivation | Slow, institutional |
| [Media & culture](cognitive/media.md) | None | Provenance, presence | Now |
| [Meaning](cognitive/meaning.md) | Weak / contested | Status, presence, costly care | Now; under-measured |
| [Energy sector](physical/energy-sector.md) | Cheap in markets; expensive in plants | Wires, sites, interconnection | Ops now; atoms slow |
| [Robotics](physical/robotics/) | Expensive; no internet of manipulation | Everything unstructured | 2032–2040 |
| [State capacity](contested/state-capacity.md) | Weak | - | The precondition for the rest |
| [Geopolitics](contested/geopolitics/) | N/A | - | 2030s structural break |

**Read the table top to bottom and the thesis reads itself.** The ordering is by cost of ground truth, and it predicts the timing column almost perfectly. Where it doesn't - education and media, which have terrible ground truth and are moving fast anyway - the explanation is that the change there is not capability arriving but a **signal collapsing** ([Game 5](../02-games/5-information.md)), which is a different mechanism.

The table is doing more work than a summary. It is a **falsifiable ordering**: it says that if you rank domains by what it costs to learn whether an output was correct, you get the deployment sequence for free, without knowing anything about the industry. That claim is cheap to test and expensive to be wrong about, which is the right shape for a prediction the corpus depends on. It would be falsified by a domain that moves fast on capability alone while its verification stays expensive and no signal is collapsing underneath it. Agriculture would be the cleanest such case, which is why [it is treated as a natural experiment](physical/agriculture.md) rather than as one more sector page.

The ordering also predicts *what kind* of evidence to distrust. In cheap-ground-truth domains, benchmark scores and vendor claims are roughly honest because the market corrects them quickly: a trading model that does not make money stops being deployed. In expensive-ground-truth domains, the same claims can survive for years without contact with reality, because the outcome that would refute them resolves after the sales cycle closes. **Read leaderboards in the top half of the table and read deployment audits in the bottom half.**

## Where the grouping leaks

The three groups are a claim about verification, not about industry, so several domains sit awkwardly and the awkwardness is informative rather than embarrassing.

**Cybersecurity is filed as contested but has the cheapest ground truth in the corpus.** An exploit either lands or it does not, in seconds, for free. That is why it moves faster than anything in group A despite being classified with the slow, adversarial domains: the contested label describes who is optimizing against you, not how hard it is to learn. When the two axes disagree, ground truth wins on timing and adversarial structure wins on outcome.

**Medicine is filed as physical, and its fastest-moving layer is purely cognitive.** Imaging, documentation, coding, and triage are symbol work with cheap labels; the physical part is the examination, the procedure, and the five-year outcome. A domain page is a bundle of layers with different verification costs, and the page is filed by the layer that binds. Where the reader finds a prediction surprising, checking which layer it applies to resolves most of the surprise.

**State capacity is not a domain at all**, and is filed here because there is nowhere better. It is the precondition on which several other pages' timelines depend: permitting, liability rewrites, scope-of-practice changes, and standards bodies all sit inside it. Treating it as a peer of logistics understates it.

## The patterns across all eighteen

Five things recur:

1. **The diagnostic layer compresses; the accountability layer does not.** Radiology, law, finance, insurance, and consulting all show the same shape - AI absorbs the analysis and the human retains the part where someone can be sued.
2. **Consumer-side change outruns institutional change,** often by years, because institutions carry licensure and liability and individuals do not.
3. **The middle gets hollowed.** Competent commercial work is the most exposed layer in nearly every domain; genuine expertise and pure commodity both survive.
4. **Planning compresses; handling does not.** The clean split in [logistics](physical/logistics.md) recurs in agriculture, medicine, and manufacturing. Optimization was always the tractable half, and it is not where the labor hours are.
5. **The moat is usually financial, not cognitive.** In most domains, what protects the incumbent professional is that a liability instrument exists covering a licensed human and does not yet cover an autonomous system. → [Insurance](cognitive/insurance.md). That is a much more fragile moat than a skill, and it can be repriced in a single underwriting cycle.

**The five patterns are not independent, and that is the risk.** Patterns 1 and 5 are the same claim seen from two sides: the accountability layer survives because an insurance contract exists for it. Pattern 2 follows from pattern 5, because individuals carry no liability instrument to reprice. So a single event in the underwriting market - one precedent-setting judgment, one carrier deciding autonomous clinical or driving risk is writable at a price - propagates through three of the five simultaneously rather than through one at a time. The corpus treats this as [Uncertainty 6](../06-uncertainties/correlated-risk.md) and it is the main reason these patterns should not be read as five separate pieces of evidence for the same conclusion.

**Failure mode for the whole part.** The domain pages assume the unit of change is the task and that roles re-bundle around whatever is left. If instead the unit of change is the *firm* - if AI-native entrants rebuild the whole workflow rather than selling tools into the existing one - then task-level analysis systematically underestimates speed, because an entrant does not have to route around licensure and liability that it never inherited. The corpus's most exposed pages under that reading are the ones where the moat is procedural rather than physical: [law](cognitive/law.md), [insurance](cognitive/insurance.md), and the administrative half of [medicine](physical/medicine/). Watch entrant share, not incumbent headcount. The entrant path is treated as its own object in [Startups](cognitive/startups/) - cheap founding, expensive moats, and which complements still mint durable firms.

### How to use this part with Part V

Domain pages rarely carry their own main-table rows; they feed mechanisms into rows 1, 3, 5 and the [register](../05-probabilities/register.md). A domain miss that does not change a scored probability is still a miss - log it under scoring rule 5 as local, not silent. The reverse: a Part V move that does not touch any domain page is a smell that the table and the prose have decoupled.

---

**Next:** [A - Cognitive domains](cognitive/) → [Part IV - Timelines](../04-timelines/)
