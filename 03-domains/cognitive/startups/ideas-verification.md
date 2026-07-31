# Ideas - verification and trust

← [Ideas](ideas.md) · [Startups](README.md) · [Index](../../../README.md)

---

[Game 5](../../../02-games/5-information.md) and the [compressed version](../../../00-overview/compressed.md): generation is free; **verification is scarce**. These companies sell the scarce side.

## 1. Provenance at the sensor

**Why now.** Deepfakes and synthetic media made post-hoc "is this real?" inference a losing arms race. Attestation has to happen at capture, not in moderation queues after the flood. → [C8](../../../07-indicators/governance.md), [media](../media.md)

**Build this.** Hardware + firmware + cloud that cryptographically signs photo/video/audio at the device, with a verifier API banks, newsrooms, courts, and insurers can call. Start in one high-stakes vertical (insurance claims, remote notarization, clinical imaging chain of custody).

**Own this.** Device trust roots, verifier default placement, and the audit trail data - not a "detector model."

**Not this.** Another AI deepfake classifier trained on last month's generators.

**Dead if.** Platforms ship free, universal capture attestation that commodity hardware adopts - you become a checkbox, not a company.

## 2. Proving a human is present

**Why now.** Voice and video clones turn "I saw them / heard them" into a non-signal. Fraud, hiring, dating, capital markets, and customer support all need a live human-presence layer that is not a CAPTCHA. YC's Fall 2026 RFS names the same problem; the corpus frames it as costly signaling collapse ([Game 5](../../../02-games/5-information.md)).

**Build this.** A privacy-preserving presence protocol: liveness + optional institutional identity, usable inside Zoom/phone/bank flows, with liability terms for false accepts.

**Own this.** The protocol default, the certified device or biometric path, and the indemnity relationship with relying parties.

**Not this.** A chatbot that "guesses" bot probability from text.

**Dead if.** One OS vendor or payments network makes presence a free platform primitive and locks the API.

## 3. Review as a product (software)

**Why now.** Generation throughput made senior review the schedule bottleneck ([software](../software.md)). Teams that buy more coding agents without buying review capacity just lengthen the PR queue.

**Build this.** Tools and services that shrink *time-to-trusted-merge*: behavioral eval harnesses on the customer's suite, risk-ranked review, incident-linked learning, optional insured review for high-severity paths. Sell to orgs drowning in AI PRs and to open-source maintainers paying the bogus-report tax.

**Own this.** Customer eval corpora, production outcome labels, and (if you underwrite) the risk book - not "LGTM from a model."

**Not this.** Autocomplete that files more PRs.

**Dead if.** End-to-end agents merge to prod with measured incident rates at human or better *without* external review scaffolding - then review was a transition rent ([U5](../../../06-uncertainties/learned-verification.md)).

## 4. Eval infrastructure with skin in the game

**Why now.** Benchmarks are marketing; buyers need continuous, task-specific, adversarial evals tied to contracts ([B5](../../../07-indicators/diffusion/economy.md) outcome pricing).

**Build this.** An eval cloud where enterprises define workflows, run scheduled red-teams, and gate model/version promotion - with optional warranty products that pay when evals pass but production fails.

**Own this.** Proprietary task suites, longitudinal failure data, and warranty capital if you go there.

**Not this.** A leaderboard website.

**Dead if.** Model vendors give away credible, independent, per-customer eval that buyers trust as much as third parties - rare, but watch enterprise contracts.

## 5. Accountability routing for agents

**Why now.** Agent chains blur causation across user, deployer, model vendor, and tool provider ([insurance](../insurance.md)). Claims and governance need a legible "who signed."

**Build this.** Runtime that forces designated human or corporate principals at high-severity actions, logs decision provenance for insurers and courts, and exports the artifact underwriters already ask for.

**Own this.** The enterprise default for agent governance, the log format regulators recognize, and partnerships with carriers.

**Not this.** A policy PDF generator.

**Dead if.** One hyperscaler's agent platform becomes the de facto auditable runtime and refuses interop.

## 6. Institutional vouching markets

**Why now.** Asynchronous credentials (degrees, follower counts, polished applications) are cheap to fake. High-stakes matching needs reputation that **costs something to stake** ([Game 5](../../../02-games/5-information.md), [education](../education.md)).

**Build this.** Markets or networks where professionals and firms stake bond-like reputation on claims (this candidate can do X; this vendor hit SLA Y), with slashing or insurance when wrong. Start in hiring, vendor procurement, or expert networks.

**Own this.** The stake ledger, dispute resolution, and the density of stakers in a vertical.

**Not this.** Another endorsement button with no downside.

**Dead if.** Synchronous evaluation (live work trials) fully replaces reputation intermediaries in your vertical.

## 7. Self-maintaining integration tissue

**Why now.** APIs churn; agentic coding can open PRs; the missing layer is provider-to-customer change application (YC RFS: self-maintaining APIs). This is verification of *compatibility*, not of truth.

**Build this.** Agents with scoped repo access that watch vendor changelogs, propose and test upgrades, and only merge when customer eval suites pass - Dependabot for semantic API and agent-tool breakages.

**Own this.** Cross-customer break graphs and vendor-specific repair playbooks.

**Not this.** A prettier changelog email.

**Dead if.** Every major API ships formal contracts + automated customer migration as a free vendor feature.

## 8. Multiplayer agent sessions

**Why now.** Long-running agents are team work stuck in single-player chat (YC RFS: multiplayer AI). Shared state, handoff, and audit beat a thousand private threads.

**Build this.** Real-time shared agent workspaces for eng, support, sales, or legal - presence, permissions, replay, and compliance export.

**Own this.** Team graph + workflow data inside the session substrate; become the default place agent work happens.

**Not this.** Transcript sharing links.

**Dead if.** The dominant productivity suite ships good enough multiplayer agents as a free tier.

---

**Related:** [Compressed](../../../00-overview/compressed.md) · [Game 5](../../../02-games/5-information.md) · [Software](../software.md) · [Insurance](../insurance.md) · [C8](../../../07-indicators/governance.md)

**Next:** [Atoms & substrate](ideas-atoms.md)
