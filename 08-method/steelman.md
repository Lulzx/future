# Steelman - the strongest arguments against this document

← [Part VIII](README.md) · [Index](../README.md)

---

[Part VI](../06-uncertainties/) lists the live uncertainties the document already concedes - parameters and scenarios. This page is different: these are the arguments that say the **framework** is wrong, not that a parameter in it is mis-set.

Each is stated in its strongest form, then answered honestly - including where the answer is weak.

Selection was not by loudness. Each of the three earns its place by passing three tests at once: it attacks a load-bearing element rather than a detail, it names a mechanism rather than a mood, and it makes at least one prediction that differs from this document's - so that evidence, not taste, can settle it. Most common objections fail the third test; "it's all hype" and "it's all inevitable" are both unfalsifiable in the forms usually offered, which is why neither appears here despite dominating the public argument.

## 1. "Verification cost stops being the ordering principle"

**The argument.** The master asymmetry is a claim about *today's* training regime. It holds because RL needs a cheap reward signal. But reward modelling, process supervision, and learned critics are all attempts to manufacture verification where it was expensive - and they are working better each year. If a model can reliably judge the quality of a legal argument, a research direction, or a piece of management advice, then verification stops being scarce, and with it the entire ordering of [Part III](../03-domains/) dissolves. The domains this document says lag do so only because of a temporary property of the current method.

**Why it's strong.** It attacks the load-bearing claim directly, it has a plausible mechanism, and it has empirical support: capability in "unverifiable" domains has improved considerably more than a strict reading of the asymmetry would predict. Long-form writing, strategic reasoning, and open-ended research assistance have all advanced without cheap ground truth.

**The answer.** A learned verifier is only as good as what trained it, so this recurses rather than resolves - it moves the ground-truth problem one level up rather than eliminating it, and where genuine ground truth never arrives, the loop can drift confidently. Self-verification without external grounding is exactly the regime where systematic error compounds invisibly.

**Where the answer is weak.** The same recursion objection applies to human expertise, which is also mostly peer-validated without external ground truth, and human expertise works well enough to run civilization. If learned verification is as good as peer review, that is sufficient for most economic purposes. **This is the most serious objection in the document and it is not resolved.** → [Uncertainty 5](../06-uncertainties/learned-verification.md) (promoted from this section in round 8); interacts with but is distinct from [Uncertainty 1](../06-uncertainties/recursive-self-improvement.md).

## 2. "The competitive-dissipation result is wrong because these markets aren't competitive"

**The argument.** [Game 3](../02-games/3-firms.md) assumes Bertrand-ish competition, which delivers the surplus to consumers. But most of the actual economy is oligopolistic, differentiated, and switching-cost-protected. In concentrated markets, a cost reduction available to all incumbents raises margins rather than cutting prices, because nobody has an incentive to start the price war. Measured industry concentration has been *rising* for two decades. So the prediction should be **margin expansion at incumbents**, and the "AI is a bubble because earnings aren't up" argument gets resolved in favor of the bulls, not by the mechanism this document gives.

**Why it's strong.** The empirical premise is correct - concentration is high and rising - and the model in [Game 3](../02-games/3-firms.md) is the textbook case rather than the observed one. It also makes a cleanly opposite prediction, which is rare and valuable.

**The answer.** Both can be true at once, and the resolution is dispersion rather than the mean: consumer surplus in competitive segments, margin expansion in concentrated ones. That is why [B3](../07-indicators/diffusion/economy.md) specifies watching **dispersion, not the average** - the two hypotheses look identical in aggregate data and completely different in the cross-section.

**Where the answer is weak.** It is close to unfalsifiable as stated. If margins rise the document says "concentrated markets," and if they don't it says "Red Queen." **The honest position: [Game 3](../02-games/3-firms.md) is a claim about competitive markets specifically, and its scope should be narrowed to say so** rather than presented as a general result. That is a correction, not a defense.

**Scope note (round 27):** [Game 3](../02-games/3-firms.md) now states the scoring cross-section explicitly - adoption / margins / prices read together, with dispersion as the test - so objection 2 is no longer free to claim unfalsifiability against a single mean. The remaining weakness is measurement: "competitive sector" is itself a judgment call at the boundary.

## 3. "Institutional friction is a cope"

**The argument.** Every one of this document's slow timelines rests on institutions being slow. But that inference comes from technologies that required physical retooling, capital replacement, or coordinated standard-setting. AI requires none of those. It is distributed instantly, self-serves, needs no procurement to try, and diffuses through individuals rather than organizations - a worker adopts it whether or not the employer has a policy. The diffusion analogy is simply the wrong reference class, and every date in [Part IV](../04-timelines/) is 3–5 years late.

**Why it's strong.** Consumer adoption of AI tools has been the fastest of any technology ever measured, by a wide margin. And the mechanism - bottom-up individual adoption rather than top-down organizational deployment - genuinely has no precedent in the reference class.

**The answer.** Individual adoption is not the same as organizational benefit realization, and the second is what productivity statistics measure. The [METR result](../02-games/4-labor.md) is the sharpest evidence: enthusiastic individual adoption coexisting with *negative* measured productivity. Adoption speed tells you about the tool's accessibility; it tells you nothing about the redesign of the workflows around it.

**Where the answer is weak.** METR is one study, on one population, at one capability level, and it is being asked to carry an enormous amount of weight throughout this document. **If it fails to replicate at higher capability, the institutional-friction argument loses its best empirical support** and this objection substantially wins. That replication is the single most valuable piece of research anyone could run against this document.

## How each objection resolves

None of these needs to remain a matter of judgment for long; each is wired to a different part of the [dashboard](../07-indicators/README.md), and the wiring was chosen so that both sides should accept the verdict in advance.

**Objection 1** resolves through [B8](../07-indicators/diffusion/capability.md), the capability gap between verifiable and unverifiable domains. If that gap closes and stays closed under blinded evaluation - not benchmark scores, which the objection itself predicts will be gamed - then the asymmetry is dying and the document's domain ordering with it. If the gap persists while learned-verifier methods proliferate, the recursion answer is holding.

**Objection 2** resolves through [B3](../07-indicators/diffusion/economy.md)'s dispersion reading. Margin expansion concentrated in high-concentration industries while competitive segments pass gains through is the split verdict both hypotheses should accept. Uniform margin expansion everywhere is objection 2 winning outright, and the scope-narrowing correction below becomes a euphemism for a miss.

**Objection 3** resolves through replication. The [METR result](../02-games/4-labor.md) re-run at higher capability, on production work rather than study conditions, is the single experiment that most moves this document's confidence in either direction - and it is cheap relative to what rides on it. Until it exists, [B2](../07-indicators/diffusion/economy.md)-style instrumented productivity measures are the proxy.

## The pattern in all three answers

Each objection says the same thing in a different register: **this document's method - rate limits, reference classes, payoff structures - systematically predicts continuity, and the case for discontinuity cannot be made from inside it.**

That is a fair criticism and it does not have a good answer. The mitigation is to state it plainly ([Part VIII](README.md)), give the discontinuity cases their own section ([Part VI](../06-uncertainties/)), and attach falsifiable triggers to the continuity claims ([Part VII](../07-indicators/)) so that being wrong is detectable early rather than in retrospect.

**If this document is badly wrong, the most likely single reason is objection 1**, and the most likely form is that it looks approximately right until roughly 2029 and then ages very poorly.

---

**Related:** [Part VI - Uncertainties](../06-uncertainties/) · [Base rates](base-rates/README.md) · [Scoring](scoring.md) · [Game 3](../02-games/3-firms.md)

**Next:** [Scoring](scoring.md)
