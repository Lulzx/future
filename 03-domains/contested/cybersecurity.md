# Cybersecurity - where verification is cheapest, for both sides

← [III.C - Contested](README.md) · [Index](../../README.md)

---

Cybersecurity is the domain where the [master asymmetry](../../01-substrate/data.md) is most extreme, and understanding why explains most of what is about to happen.

**An exploit verifies itself.** You run it; it works or it doesn't; you know in milliseconds; the signal is unambiguous and free. This is the ideal training regime - better than code with tests, comparable to formal math - and it means offensive capability improves at the maximum rate the technology allows.

**Security does not verify itself.** "This system is secure" is a claim about the non-existence of something, confirmable only by not being breached, for an unbounded period, against an unknown adversary. There is no scoreboard for it, so defensive capability improves at the slow rate.

Same technology, opposite feedback structures. That is the entire dynamic.

## The near-term picture: offense-favoring

Three effects, all live now:

- **Vulnerability discovery scales.** Fuzzing and static analysis guided by models find bugs faster and in more places, including in the long tail of software nobody was auditing. The bugs were always there; discovery cost was the only thing keeping them latent.
- **Exploit development compresses.** The gap between a disclosed vulnerability and a working exploit - historically the defender's grace period - shrinks toward zero. Patch windows were an artifact of attacker labor cost, and that cost is collapsing.
- **Social engineering becomes free and personalized.** Phishing, voice cloning, and pretexting at scale, in the target's language and register, referencing real relationships. This is [Game 5](../../02-games/5-information.md) applied by an adversary: every asynchronous, unwitnessed identity signal is now forgeable.

The floor rises everywhere: **the least competent attacker now operates at what was recently a mid-tier level.** Volume goes up sharply, and the marginal target - the small business, the county government, the rural hospital - is far less defended than the marginal attacker is now capable.

### OT and the physical edge

IT compromises were already expensive. AI-assisted offense against **operational technology** - substations, plants, hospitals, water - is where cyber meets [energy sector](../physical/energy-sector.md), [medicine/delivery](../physical/medicine/delivery.md), and [warfare](warfare.md). Capital cycles are long, patching is rare, and staff is thin. The trough years (below) are worst here.

## The medium-term picture: defense-favoring, on a lag

The pessimistic read stops at the paragraph above. The structural argument runs the other way, for three reasons.

**1. The defender owns the source.** Most vulnerabilities are found by reading code. The defender has all of it, plus the build system, plus the tests, plus the ability to fix rather than merely find. Attacker-side capability applies to the attack surface; defender-side capability applies to the whole codebase. **Once the tooling matures, the asymmetry of access favors the defense** - and the enormous stock of latent vulnerabilities in existing code is a one-time inheritance that gets steadily drained, not a permanent condition.

**2. Memory-safe languages and formal methods stop being too expensive.** Whole vulnerability classes are eliminable by construction. What blocked that was never knowledge - it was the labor cost of rewriting and verifying. That cost is exactly what falls. **Formal verification is the ideal AI target** for the same reason exploitation is: a proof checker is cheap, immediate ground truth.

**3. Response time compresses.** Detection, triage, containment, and remediation are the parts of the defensive loop where human latency dominates. Autonomous response closes the loop at machine speed. It also introduces its own failure mode - an autonomous defender taking destructive action on a false positive is a self-inflicted incident, and this will happen publicly at least once.

> **Prediction:** a sharp deterioration through **2026–2029** as offensive capability diffuses faster than defensive tooling is adopted, followed by **structural improvement in the 2030s** as memory-safe rewrites and verification compound. Roughly **60%** confidence in that shape. The trough is the dangerous part, and it is where the [salient incident](../../02-games/2-nations.md) most plausibly originates - especially as a **correlated multi-insured cyber event**. → [Uncertainty 6](../../06-uncertainties/correlated-risk.md)

## The asymmetry that does not close

The above is about software defects. It does not address the part that is structural.

**The attacker needs one path; the defender needs all of them.** That is not fixed by better tooling; it is a property of the game. What tooling changes is the cost per path, and it lowers it for both sides at once.

Two consequences:

- **Concentration.** Defense-in-depth built on cheap cognition favors large, well-instrumented, centrally-managed estates. Small and mid-sized organizations fall further behind, because the defensive gains require integration work that the offensive gains do not. Expect **security to accelerate cloud and platform consolidation** - another instance of value accruing to distribution and scale rather than to the technology itself. → [Game 3](../../02-games/3-firms.md)
- **Critical infrastructure lags worst.** Water, power, hospitals, and municipal systems run old software on long capital cycles with no security staff. They receive the full offensive improvement and almost none of the defensive one. **This is where the gap between attacker and defender capability is widest and where the consequences are physical.**

## The trough is distributional, and the statistics will hide it

The prediction above describes a deterioration followed by a recovery, and the natural way to check it is to count incidents. That check will not work, for a reason worth stating because it applies to every quantity in this domain.

**Reported incidents are a product of the threat and the detection and the disclosure regime, and all three are moving at once.** Better detection converts silent compromises into reported ones, and disclosure mandates convert reported-internally into reported-publicly. A rising count is therefore compatible with an unchanged threat environment, and a flat count is compatible with a much worse one. Nothing in the public incident data can distinguish these, which is why this page leans on premiums and exclusions instead: an underwriter changing exclusion language has been paid to form a view and loses money for holding a wrong one.

The distributional point is the more important half. The defensive gains described above accrue to organizations that can integrate them, and the offensive gains accrue to anyone. So the expected shape of the trough is not uniformly worse but **increasingly bimodal**: hyperscalers, banks, and large well-instrumented estates pulling away while the county government, the rural hospital, the mid-market manufacturer, and the water utility receive the full offensive improvement and almost none of the defensive one. Aggregate loss statistics dominated by large-organization outcomes can improve for the whole period while the modal victim's situation gets considerably worse.

This is why the policy instrument that matters is not a standard but a **subsidy or a shared service**. The entities in the exposed half do not fail to buy defensive tooling because they disagree about the risk; they fail because there is no one to run it, and a minimum-controls mandate imposed on an organization with no security staff produces a compliance document rather than a defended network. Pooled security operations for public and small entities is the intervention with the best ratio of harm averted to money spent in this domain, and it is a state-capacity question rather than a technology one. → [State capacity](state-capacity.md)

*Failure mode:* if the defensive gains arrive predominantly through the platform layer - cloud providers, operating systems, browsers, and managed services shipping the improvement to every customer by default - then the bimodality argument is much too pessimistic, because the exposed half consumes its defense as an undifferentiated product rather than integrating it. That is the single most important thing to watch on this page, and the early evidence is mixed: default-secure platform improvements have been real, and the exposed entities' worst systems are precisely the ones not on those platforms.

## Identity, software supply chain, and Game 5

Three attack surfaces that are not "find a buffer overflow":

| Surface | Mechanism | Defensive complement |
|---|---|---|
| **Identity** | Voice/video/deepfake + social graph | Synchronous verification, hardware keys, institutional vouching |
| **Software supply chain** | Malicious or compromised dependencies at machine-written scale | Provenance, SBOM, signing, reproducible builds |
| **Model/API layer** | Prompt injection, tool abuse, poisoned RAG | Least privilege for tools; treat model I/O as untrusted |

The first is pure [Game 5](../../02-games/5-information.md). The second is [software](../cognitive/software.md) economics meeting offense. The third is new: **the AI system is itself an attack surface and an attack tool**, which makes "secure the perimeter" incomplete even for mature estates.

## The insurance channel is the real regulator

Cyber insurance already prices this, badly, and its mispricing history - NotPetya, MOVEit, CrowdStrike - is the best available preview of how AI risk gets absorbed. Underwriters respond to correlated loss by excluding it, and exclusions define what gets deployed. → [Insurance](../cognitive/insurance.md), [C7](../../07-indicators/governance.md)

Watch **premium movements and exclusion language**, not vendor announcements. Premiums are a market-clearing estimate of real risk, produced by people who lose money for being wrong; vendor claims are marketing.

A first **AI-attributed correlated cyber loss** is a leading candidate for the Game 2 window - more likely than kinetic, more recoverable than bio, more technical than a pure market crash. The draft that should be on the shelf is liability + disclosure + minimum controls for critical sectors, not only "AI safety" in the model sense.

## Interaction with state capacity

[State capacity](state-capacity.md): most governments cannot measure their own attack surface, hire enough analysts, or procure defensive tooling on software timescales. The trough therefore hits **public and mid-market** hardest while hyperscalers and banks pull away. Capture risk on post-incident cyber rules is high: the operators who can draft them are the large cloud and security vendors.

## What to watch

| Signal | Reading |
|---|---|
| Time-to-exploit after disclosure | Offensive compression |
| Memory-safe rewrite share in critical codebases | Defensive structural path |
| Cyber premiums + AI/autonomy exclusions | Insurance frontier |
| Ransomware / destructive incidents in OT / healthcare / munis | Trough severity |
| Autonomous-response false-positive incidents | New defensive failure mode |

## Failure modes

- **If defense tooling ships and is adopted as fast as offense**, the trough is shallow and the 2026–29 claim is too pessimistic.
- **If formal methods / memory safety stall** on legacy and liability, the 2030s recovery does not arrive.
- **If the first big incident is model-layer** (tool-using agent causing mass loss), regulation targets AI products more than classical vuln management - different architecture.

---

**Related:** [Warfare](warfare.md) · [Biosecurity](biosecurity.md) · [Game 5](../../02-games/5-information.md) · [Game 2](../../02-games/2-nations.md) · [Insurance](../cognitive/insurance.md) · [Software](../cognitive/software.md) · [Energy sector](../physical/energy-sector.md) · [C1 / C7](../../07-indicators/governance.md)

**Next:** [Biosecurity](biosecurity.md)
