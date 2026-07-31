# III.A - Cognitive Domains

← [Part III](../README.md) · [Index](../../README.md)

---

Domains where the work product is **symbol manipulation**: text, code, numbers, arguments, images. The output can be inspected without touching anything physical, which means adoption is gated by trust and liability rather than by hardware.

These are the domains where change is happening **now**, and where the shape is most consistent: the diagnostic layer compresses, the accountability layer does not.

## The domains

| Domain | Ground truth | Human moat | Timing |
|---|---|---|---|
| [Software](software.md) | Cheap (tests) | Architecture, integration, judgment | Now |
| [Law](law.md) | Moderate | Standing, liability, negotiation | Now |
| [Finance](finance.md) | Cheap (P&L) | Fiduciary responsibility | Largely done |
| [Science](science.md) | Varies wildly by field | Experimental throughput | Bottlenecked on wet lab |
| [Education](education.md) | Weak | Childcare, socialization, motivation | Slow, institutional |
| [Media & culture](media.md) | None | Provenance, presence | Now |
| [Insurance](insurance.md) | Cheap and historical | Balance sheet, regulatory capital | Now, quietly |
| [Startups](startups/) | Cheap for demos; expensive for durable PMF | Complements (data, license, distribution, atoms) | Now; formation first |
| [Meaning, work, relationships](meaning.md) | Weak / contested | Status, presence, costly care | Now; under-measured |

## What unifies them

**The ground-truth gradient is visible in a single table.** Software and finance sit at the cheap end - a test suite and a P&L are both automatic, immediate, and unarguable - and both moved first and fastest. Media sits at the other end with no ground truth at all, and it did not so much transform as **flood**. Education is the anomaly: weak ground truth, enormous known effect size, and near-zero adoption speed, because the constraint there is not verification but the fact that the building serves three purposes and AI addresses one. [Meaning](meaning.md) sits beside media and education: welfare moves even when GDP does not, and the statistics will under-count it.

**What survives is answerable, not difficult.** Across every row of the table, the work that persists is the work someone must be accountable for: the signature, the license, the fiduciary duty, the standing before a court. This is why capability benchmarks systematically mispredict adoption order in these domains - they rank tasks by difficulty, while the economy ranks them by who absorbs the loss when the output is wrong. The accountability layer reprices on renewal cycles, rulemaking cycles, and professional-rules cycles, none of which are synchronized to model releases. The lag between demonstration and deployment is therefore not friction to be engineered away; it is the institutions doing their job, and it is longest exactly where the stakes are highest. The failure mode of this framing: if liability migrates to model providers wholesale (watch [C6](../../07-indicators/governance.md)), the accountability moat thins in every row at once, and this table's Timing column compresses together rather than domain by domain.

**Insurance is the domain to watch and the one usually missed.** It is the institution that converts uncertainty into price, which makes it the mechanism by which every other prediction in this document gets a number attached. Liability for autonomous systems will be priced by underwriters years before it is settled by courts. → [Insurance](insurance.md)

**The section's welfare ledger is split, and the halves move on different clocks.** Software, finance, law, and insurance are mostly stories about producer surplus reallocating - who captures the margin when the analytical layer compresses. Education, media, and meaning are mostly stories about consumer welfare and identity moving in ways national statistics record badly or not at all: the tutored child, the flooded feed, the missing junior rung. The first half shows up in earnings calls within quarters; the second accumulates for years before it surfaces, usually as politics rather than as data ([meaning](meaning.md) makes this the explicit prediction). Reading only the first half is how a forecast ends up right about GDP and wrong about the decade.

**[Startups](startups/) is the formation layer of the first half.** When building software is cheap, attempts flood and durable rent concentrates in whoever still owns an inelastic complement - Game 3 applied to firm *birth*, not only firm survival. Read it after [software](software.md) if the question is "who forms the AI-native firm, and what do they own?"

### Process vs judgment (U5 middle case)

Several rows will not dissolve whole if [learned verification](../../06-uncertainties/learned-verification.md) only masters *process* checks. Law, compliance-heavy finance, protocolized medicine-adjacent work, and education assessment are process-heavy; negotiation, taste, research direction, and meaning are not. Expect within-domain re-scoring (process compresses, judgment holds) before framework rewrite. Score with [B8](../../07-indicators/diffusion/capability.md) as two gaps when the middle case lands.

### Reading order

[Software](software.md) (template) → [Startups](startups/) (formation under cheap cognition) → [Insurance](insurance.md) (deployment frontier) → [Law](law.md)/[Finance](finance.md) → [Education](education.md)/[Media](media.md)/[Meaning](meaning.md) for the welfare half. [Science](science.md) anytime for the automated-labs prize.

---

**Next:** [Software](software.md) → [III.B - Physical domains](../physical/)
