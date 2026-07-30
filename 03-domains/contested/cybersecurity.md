# Cybersecurity — where verification is cheapest, for both sides

← [III.C — Contested](README.md) · [Index](../../README.md)

---

Cybersecurity is the domain where the [master asymmetry](../../01-substrate/data.md) is most extreme, and understanding why explains most of what is about to happen.

**An exploit verifies itself.** You run it; it works or it doesn't; you know in milliseconds; the signal is unambiguous and free. This is the ideal training regime — better than code with tests, comparable to formal math — and it means offensive capability improves at the maximum rate the technology allows.

**Security does not verify itself.** "This system is secure" is a claim about the non-existence of something, confirmable only by not being breached, for an unbounded period, against an unknown adversary. There is no scoreboard for it, so defensive capability improves at the slow rate.

Same technology, opposite feedback structures. That is the entire dynamic.

## The near-term picture: offense-favoring

Three effects, all live now:

- **Vulnerability discovery scales.** Fuzzing and static analysis guided by models find bugs faster and in more places, including in the long tail of software nobody was auditing. The bugs were always there; discovery cost was the only thing keeping them latent.
- **Exploit development compresses.** The gap between a disclosed vulnerability and a working exploit — historically the defender's grace period — shrinks toward zero. Patch windows were an artifact of attacker labor cost, and that cost is collapsing.
- **Social engineering becomes free and personalized.** Phishing, voice cloning, and pretexting at scale, in the target's language and register, referencing real relationships. This is [Game 5](../../02-games/5-information.md) applied by an adversary: every asynchronous, unwitnessed identity signal is now forgeable.

The floor rises everywhere: **the least competent attacker now operates at what was recently a mid-tier level.** Volume goes up sharply, and the marginal target — the small business, the county government, the rural hospital — is far less defended than the marginal attacker is now capable.

## The medium-term picture: defense-favoring, on a lag

The pessimistic read stops at the paragraph above. The structural argument runs the other way, for three reasons.

**1. The defender owns the source.** Most vulnerabilities are found by reading code. The defender has all of it, plus the build system, plus the tests, plus the ability to fix rather than merely find. Attacker-side capability applies to the attack surface; defender-side capability applies to the whole codebase. **Once the tooling matures, the asymmetry of access favors the defense** — and the enormous stock of latent vulnerabilities in existing code is a one-time inheritance that gets steadily drained, not a permanent condition.

**2. Memory-safe languages and formal methods stop being too expensive.** Whole vulnerability classes are eliminable by construction. What blocked that was never knowledge — it was the labor cost of rewriting and verifying. That cost is exactly what falls. **Formal verification is the ideal AI target** for the same reason exploitation is: a proof checker is cheap, immediate ground truth.

**3. Response time compresses.** Detection, triage, containment, and remediation are the parts of the defensive loop where human latency dominates. Autonomous response closes the loop at machine speed. It also introduces its own failure mode — an autonomous defender taking destructive action on a false positive is a self-inflicted incident, and this will happen publicly at least once.

> **Prediction:** a sharp deterioration through **2026–2029** as offensive capability diffuses faster than defensive tooling is adopted, followed by **structural improvement in the 2030s** as memory-safe rewrites and verification compound. Roughly **60%** confidence in that shape. The trough is the dangerous part, and it is where the [salient incident](../../02-games/2-nations.md) most plausibly originates.

## The asymmetry that does not close

The above is about software defects. It does not address the part that is structural.

**The attacker needs one path; the defender needs all of them.** That is not fixed by better tooling; it is a property of the game. What tooling changes is the cost per path, and it lowers it for both sides at once.

Two consequences:

- **Concentration.** Defense-in-depth built on cheap cognition favors large, well-instrumented, centrally-managed estates. Small and mid-sized organizations fall further behind, because the defensive gains require integration work that the offensive gains do not. Expect **security to accelerate cloud and platform consolidation** — another instance of value accruing to distribution and scale rather than to the technology itself.
- **Critical infrastructure lags worst.** Water, power, hospitals, and municipal systems run old software on long capital cycles with no security staff. They receive the full offensive improvement and almost none of the defensive one. **This is where the gap between attacker and defender capability is widest and where the consequences are physical.** → [Warfare](warfare.md)

## The insurance channel is the real regulator

Cyber insurance already prices this, badly, and its mispricing history — NotPetya, MOVEit, CrowdStrike — is the best available preview of how AI risk gets absorbed. Underwriters respond to correlated loss by excluding it, and exclusions define what gets deployed. → [Insurance](../cognitive/insurance.md)

Watch **premium movements and exclusion language**, not vendor announcements. Premiums are a market-clearing estimate of real risk, produced by people who lose money for being wrong; vendor claims are marketing.

---

**Related:** [Warfare](warfare.md) · [Biosecurity](biosecurity.md) · [Game 5 — Information](../../02-games/5-information.md) on identity signals · [Insurance](../cognitive/insurance.md) · [Software](../cognitive/software.md) · [Governance indicators](../../07-indicators/governance.md) C1

**Next:** [Biosecurity](biosecurity.md)
