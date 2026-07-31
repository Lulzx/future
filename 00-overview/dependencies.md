# Reverse dependency index

← [Part 0](README.md) · [Index](../README.md)

---

**Claim → pages that rest on it.** When a claim is falsified, re-read every dependent page; do not patch one leaf. Companion to [scoring](../08-method/scoring.md) rule 5.

*Not exhaustive. High-centrality claims only. Updated through round 13.*

## Spine

| Claim | Dependents |
|---|---|
| **Master asymmetry** (verify-cheap → capability-fast) | Entire [Part III](../03-domains/) ordering; [timelines](../04-timelines/); [Uncertainty 5](../06-uncertainties/learned-verification.md) if it fails; [steelman](../08-method/steelman.md) §1 |
| **Value → inelastic complements** | [Game 3](../02-games/3-firms.md); [Assets](../09-macro/assets.md); [Prices](../09-macro/prices.md); domain "moat" sections; [Startups](../03-domains/cognitive/startups/) (formation + selection) |
| **Institutional lag > capability from ~2028** | [2028–2032](../04-timelines/2028-2032.md); [Part V](../05-probabilities/) row 2; [steelman](../08-method/steelman.md) §3 |

## Substrate

| Claim | Dependents |
|---|---|
| **Energy / permits bind before chips (US)** | [Energy](../01-substrate/energy.md); [Uncertainty 2](../06-uncertainties/power-permitting.md); [bipolar](../03-domains/contested/geopolitics/bipolar.md); [A4](../07-indicators/substrate.md); timelines 26–28 |
| **Capex wall / revenue test** | [Compute](../01-substrate/compute.md); [Capital](../01-substrate/capital.md); [Part V](../05-probabilities/) row 6; [A2](../07-indicators/substrate.md); [2026–2028](../04-timelines/2026-2028.md) |
| **Financing mix → credit-event form** | [Capital](../01-substrate/capital.md); [Finance](../03-domains/cognitive/finance.md); [A3](../07-indicators/substrate.md) |

## Games

| Claim | Dependents |
|---|---|
| **No binding intl agreement before salient accident** | [Game 2](../02-games/2-nations.md); [Part V](../05-probabilities/) rows 3–4; [C1–C2](../07-indicators/governance.md); governance sections in cyber/bio/finance |
| **Compute-governance trap** | [Bipolar](../03-domains/contested/geopolitics/bipolar.md); [Game 2](../02-games/2-nations.md); [Part V](../05-probabilities/) row 4; [C3b](../07-indicators/governance.md) |
| **Apprenticeship gap (composition)** | [Game 4](../02-games/4-labor.md); [Uncertainty 3](../06-uncertainties/apprenticeship-gap.md); [law](../03-domains/cognitive/law.md); [education](../03-domains/cognitive/education.md); [meaning](../03-domains/cognitive/meaning.md); [B1](../07-indicators/diffusion/labor.md) |
| **Aggregate labor displacement as upper bound** | [Game 4](../02-games/4-labor.md) + [demography](../09-macro/demography.md); softens only the aggregate claim |
| **Signaling collapse / verification scarce** | [Game 5](../02-games/5-information.md); [education](../03-domains/cognitive/education.md); [media](../03-domains/cognitive/media.md); [compressed](compressed.md); [B6](../07-indicators/diffusion/labor.md) |

## Uncertainties and underlying assumptions

| Claim | Dependents |
|---|---|
| **Taiwan ~90% continuity through 2032** | Nearly all compute-gated claims; [Uncertainty 4](../06-uncertainties/taiwan.md); [A6](../07-indicators/substrate.md); [Part V](../05-probabilities/) assumptions table |
| **Three RSI governors** | [Uncertainty 1](../06-uncertainties/recursive-self-improvement.md); all timeline dates; [B9](../07-indicators/diffusion/capability.md); [Part V](../05-probabilities/) row 7 tail interpretation |
| **Correlated risk uninsurable at scale** | [Insurance](../03-domains/cognitive/insurance.md); [Uncertainty 6](../06-uncertainties/correlated-risk.md); deployment frontiers in law/medicine/cyber; [C7](../07-indicators/governance.md) |
| **Learned verification fails to retire asymmetry** | Domain ordering; [Uncertainty 5](../06-uncertainties/learned-verification.md); [B8](../07-indicators/diffusion/capability.md) |

## Domain swing variables

| Claim | Dependents |
|---|---|
| **Robotics data/cost/supply/form** | [Robotics](../03-domains/physical/robotics/); [2032–2040](../04-timelines/2032-2040.md); [Part V](../05-probabilities/) row 5; geopolitics reshoring |
| **Automated labs = 2030s prize** | [Science](../03-domains/cognitive/science.md); [drug discovery](../03-domains/physical/medicine/drug-discovery.md); [biosecurity](../03-domains/contested/biosecurity.md) defense half; growth branch of 2032–40 |
| **Cyber offense trough 2026–29 then defense** | [Cybersecurity](../03-domains/contested/cybersecurity.md); Game 2 incident priors; insurance |
| **Bio offense–defense clocks diverge** | [Biosecurity](../03-domains/contested/biosecurity.md); Part V row 3 mechanism mix |

## How to use

1. A prediction **misses** → find its parent claim in the left column.
2. Open every dependent link; mark which inherit the miss.
3. Log the framework correction in [ledger](../05-probabilities/ledger.md) / [RESEARCH](../RESEARCH.md) per scoring rules - one upstream fix, not twenty silent edits.

**Worked example.** Suppose the 2029 behind-the-meter prediction in [energy](../01-substrate/energy.md) misses because permitting reform makes tariff supply competitive again. The parent claim is "energy / permits bind before chips" in the substrate table. Its dependents split on inspection: [Uncertainty 2](../06-uncertainties/power-permitting.md) *anticipated* exactly this skew, so it scores as a called shot, not a miss; the [bipolar](../03-domains/contested/geopolitics/bipolar.md) page loses its "US self-constrains" paragraph but keeps its structure; the [2026–2028](../04-timelines/2026-2028.md) timeline moves left. One miss, three different inheritances. That asymmetry - dependents inherit a miss *differently* - is why the index maps pages rather than propagating a single truth value, and why step 2 says *mark which*, not *mark all*.

**What the index deliberately leaves out.** Low-centrality claims are excluded even when pages cite them, because an index that lists everything ranks nothing - the value here is the ranking, and a maintenance burden that grows with corpus size would eventually make the index wrong, which is worse than incomplete. The "updated through round 13" stamp above is therefore a feature to check, not an apology: when a *new* high-centrality claim appears (as [complement erosion](../06-uncertainties/complement-erosion.md) did in round 21), the Review step owes this page a row before the round closes.

### High-centrality additions since the stamp

| Parent claim | Major dependents |
|---|---|
| **Complement list has a half-life (U7)** | [Assets](../09-macro/assets.md); [prices](../09-macro/prices.md); Game 3 distributional read; U5 as accelerant |
| **Open-weight lag ~3–6 months (measured)** | Game 1 prize; Game 2 leakage; Part V row 4; bipolar coupling; global-south lease |
| **Gray-zone Taiwan (soft assumption fail)** | Compute risk premium; timelines in quarters; A6 not sufficient alone |

These rows do not replace the stamp; they are the debt the stamp records. A future round that rewrites the full table should fold them into the main index and reset the stamp.

---

**Related:** [Notation](notation.md) · [Scoring](../08-method/scoring.md) · [Protocol](../RESEARCH.md)

**Next:** [Thesis](thesis.md)
