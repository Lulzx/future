# Game 5 - Information: the collapse of costly signaling

← [Part II](README.md) · [Index](../README.md)

---

Signaling equilibria require that the signal be expensive for the low type.

AI collapses the cost of producing the signal **without collapsing the cost of possessing the underlying quality.** That gap is the entire phenomenon. The signal and the substance have come apart, and every institution that relied on them moving together is now running on a broken instrument.

## Dead or dying as signals

- The college essay
- The cover letter
- The take-home assignment
- The photograph as evidence
- The recorded voice as identity
- Most written credentials
- Product reviews
- The SEO article
- The cold email
- The polished GitHub contribution graph
- The "thought leadership" post

Note what these have in common: all are *asynchronous* and *unwitnessed*. That is the diagnostic. A signal survives to the extent that its production is observed or costly in a way generation cannot fake.

## From generation-scarcity to verification-scarcity

The equilibrium response is a shift in what is scarce. What replaces the dead signals:

- In-person and synchronous evaluation
- Cryptographic provenance - C2PA-style content credentials, hardware attestation at capture
- Track records with stakes attached
- Reputation graphs
- Institutional vouching

Notably, these are all *older* technologies socially. We are heading back toward **guilds, apprenticeships, and personal reputation - mediated by cryptography.** The pre-modern solutions to the trust problem were built for a world where documents could be forged and strangers could not be checked, which is the world we are re-entering.

### Cost structure inversion

**Teaching and drafting get cheaper; assessing and authenticating get more expensive.** Institutions that cannot fund the second stop credentialing meaningfully rather than pay for it. That is the mechanism behind [B6](../07-indicators/diffusion/labor.md) and the quiet hollowing of asynchronous education and hiring filters. → [Education](../03-domains/cognitive/education.md), [Game 4](4-labor.md)

### The evaluator side is a commons too

The signaling story is usually told from the sender's side, but the evaluators are playing their own game and it is a familiar one. Careful verification is costly to the evaluator who performs it and its benefits leak to everyone who relies on the same judgment - other employers trusting a past employer's title, other readers trusting a publication's fact-check, other lenders trusting a rating. Each evaluator's rational move is to free-ride on the presumed diligence of others while quietly cheapening its own checks; the equilibrium is a verification layer that everyone cites and nobody funds. That is why the response to signal collapse is slower than the collapse itself: the senders' equilibrium broke overnight, but rebuilding requires evaluators to *coordinate* on new costly procedures, and coordination among free-riders is the harder problem. Expect verification to be rebuilt first where a single party internalizes the full cost of being wrong - underwriting, security clearance, high-stakes hiring - and last where checking was always subsidized by professional pride.

### Detection loses; attestation is the stable equilibrium

Within the verification response, the two technical strategies are not symmetric. *Detection* (classifying finished content as synthetic) is a move in an adversarial game against generators that improve precisely by minimizing the signal detectors need - the detector's loss function is inside the generator's training loop. Each detector generation is a temporary advantage that its own deployment erodes. *Attestation* (cryptographically binding content to a capture device or identity at creation) does not play that game at all: it makes no claim about content statistics, only about provenance, so generator improvement is irrelevant to it. The prediction: institutions that bet on detection will cycle through tools and quietly abandon them; durable infrastructure converges on attestation plus reputation, which is why [C8](../07-indicators/governance.md) tracks provenance adoption rather than detector accuracy. **Failure mode:** attestation moves the trust problem to key custody and capture-hardware integrity rather than solving it - a compromised attested camera is a *more* convincing forgery than an unattested file, so a high-profile attestation break could discredit the whole channel faster than detection ever discredited itself.

## The lemons dynamic on the open web

Expect an Akerlof result in open content: as the share of synthetic, unverified material rises, the *average* value of unverified content falls, driving readers to walled gardens with provenance - accelerating enclosure of the open web.

Well underway. **~85% likely to be substantially complete by 2030.**

This is a genuine loss and it is not obviously recoverable. The open web worked because the cost of publishing was low enough to be democratic and high enough to be a filter. AI removed the second half.

[Media](../03-domains/cognitive/media.md) lives inside this dynamic daily. The political consequence is not only "more misinformation" - it is **retreat from shared public evidence** toward authenticated channels and tribal epistemic clubs.

## Synthetic intimacy and the signal of relationship

The same logic hits companionship and care. A message that *sounds* like care is now free; care that costs time is not. Institutions and people who used linguistic warmth as a proxy for commitment lose the proxy.

The welfare and mental-health channel is developed in [Meaning, work, and relationships](../03-domains/cognitive/meaning.md). The information-economics claim that belongs here: **relationship signals cheapen on the text channel and concentrate on costly channels** (time, presence, shared risk). That is isomorphic to the credential story, applied to attachment rather than hiring.

## The distributional sting: the cheap signals were the democratic ones

The signals that died were disproportionately the ones outsiders could use. A strong cover letter, a polished portfolio, a well-argued cold email - these were precisely the channels through which someone without networks, institutional pedigree, or geographic proximity could demonstrate quality. The replacements - in-person evaluation, institutional vouching, reputation graphs, track records with stakes - all price in proximity and prior access. Verification-scarcity is therefore not distributionally neutral: it shifts screening weight back toward who you know and where you already are, a quiet regression toward the pre-meritocratic filters the cheap signals had partially displaced. **Failure mode:** cheap cryptographic attestation of genuinely earned track records (verifiable credentials with stakes, portable reputation) could rebuild an outsider channel better than the one that died; whether it does is a design question, not a market inevitability, which is exactly why it lands on the *build* list below.

## Why this is the conclusion of the whole document

Verification is simultaneously:

- the bottleneck on **capability** ([Data](../01-substrate/data.md) - training needs cheap ground truth)
- the bottleneck on **information markets** (this section)
- the bottleneck on **hiring and credentialing** ([Game 4](4-labor.md))
- an inelastic complement, so where **value accrues** ([Game 3](3-firms.md))
- the spine of **learned-verification risk** ([Uncertainty 5](../06-uncertainties/learned-verification.md)) - if models become good verifiers, this game changes character

All of these converge because all are downstream of generation becoming free. That convergence is why the [compressed version](../00-overview/compressed.md) ends where it does: *the single most useful thing to build is anything that makes verification cheap.*

## Failure modes

- **Provenance becomes universal and cheap** (attestation in every sensor and model) - lemons dynamic slows; open web partially recovers.
- **Learned verification is good enough** for high-stakes text - institutions stop paying for synchronous assessment; [Uncertainty 5](../06-uncertainties/learned-verification.md) wins.
- **Enclosure completes** without good provenance inside the walls - private gardens with the same forgery problem, just gated.

### Costly signaling reappears as product design

When text is free, markets reprice *costly to fake* signals: live presence, long-horizon reputation, cryptographic provenance, invigilated performance, physical co-location. That is why education drifts to oral exams, media to authenticated creators, hiring to work samples, and platforms to walled gardens - not because people suddenly hate AI, but because cheap signals stop clearing. Builders who treat "more generation" as the product fight this page; builders who sell verification infrastructure are this page's commercial form. → [C8](../07-indicators/governance.md), [compressed](../00-overview/compressed.md)

**Labeling without attestation is theatre.** Mandates that require "AI-generated" tags without capture-time cryptography are the privacy-class miss applied to media - compliance cost, spoofable signal. Score C8's infrastructure trigger, not the existence of a label law.

---

**Related:** [Media & culture](../03-domains/cognitive/media.md) · [Education](../03-domains/cognitive/education.md) · [Meaning](../03-domains/cognitive/meaning.md) · [Compressed version](../00-overview/compressed.md) · [Uncertainty 5](../06-uncertainties/learned-verification.md) · [B6](../07-indicators/diffusion/labor.md) · [C8 provenance](../07-indicators/governance.md)

**Next:** [Part III - Domains](../03-domains/)
