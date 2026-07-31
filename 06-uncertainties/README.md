# Part VI - Where This Analysis Is Most Likely Wrong

← [Index](../README.md) · [Part V](../05-probabilities/)

---

Seven live uncertainties, ordered by a mix of **variance** and **how much of the corpus they take with them if they resolve against the base case.** Everything else sits on firmer ground; these are where it would actually be revised. Together, 5 and 7 red-team the two halves of the spine - by design, so that invariant 6 is satisfied by audit rather than by accident.

The seven are not the same kind of object, and reading them as a flat list understates the structure. **1 through 3 are parameter uncertainties:** the model is right, a dial is mis-set, and resolution means re-scoring numbers. **4 is a scenario uncertainty:** an external event that zeroes the analysis without the analysis having been wrong about anything. **5 and 7 are framework uncertainties:** the spine itself fails, and resolution means rewriting the ordering principle, not adjusting its outputs. **6 is a global-constraint uncertainty:** a mechanism the corpus originally filed as one domain page turns out to gate every other page's timeline. The register is ordered by blast radius within each kind, which is why the framework entries sit mid-table despite carrying the most: their probability of firing is lower than the parameter entries', but nothing else survives them intact.

| | Uncertainty | If it resolves toward | Leading indicator |
|---|---|---|---|
| 1 | [Recursive research acceleration](recursive-self-improvement.md) | Faster - Part I ceilings stop binding | Internal research cycle time per validated experiment |
| 2 | [Power permitting politics](power-permitting.md) | Faster - skewed, can only loosen | Grid interconnection queue length |
| 3 | [Apprenticeship gap response](apprenticeship-gap.md) | Better - could invert the prediction | Entry-level : senior posting ratios through 2029 |
| 4 | [Taiwan / leading-edge fab](taiwan.md) | Worse - invalidates the whole document | Capacity share outside TW; crisis *and* gray-zone (insurance, licenses, slip) |
| 5 | [Learned verification](learned-verification.md) | Framework-false - master asymmetry fails | Capability gap closing in unverifiable domains |
| 6 | [Correlated-failure insurability](correlated-risk.md) | Deployment frontier is financial, not technical | AI liability line; reinsurer capacity; backstop proposals |
| 7 | [Complement erosion](complement-erosion.md) | Faster - value flows to consumers, not complement-owners | Datacenter-node prices vs load; robot cost curves; license liberalization |

**Asymmetry note, revised.** Uncertainties 1–3 are still skewed toward *faster or better* than the base case. **Uncertainty 4 is skewed toward worse and is not optional.** Uncertainties 5–6 can cut either way: 5 toward much faster domain penetration if the spine fails; 6 toward slower deployment than capability implies, or a sudden unlock after a state backstop. Uncertainty 7 is skewed toward *better for consumers, worse for the corpus's distributional predictions* - erosion of the scarce-complement list is mostly abundance.

A document that spends most of its length on constraints can still read as pessimistic when half its error bars point the other way - but it is no longer honest to say *all* of them do.

**The entries are not independent, and the joint outcomes matter more than the marginals.** 5 firing accelerates 7 (verification stops sequencing complement erosion, so every row decays at once) and dissolves the strongest counter in 3 (learned feedback becomes trustworthy exactly where apprenticeship needs it). 6 resolving to a state backstop removes the balance-sheet floor under deployment at the same moment 5 would be removing the verification floor - the fastest world in the register is not any single entry firing but 5 and 6 firing together. In the other direction, 4 dominates everything: no combination of favorable resolutions elsewhere survives it, which is why it alone carries the "invalidates the whole document" label. A future re-score pass should check the joint cases, not just walk the table row by row - the corpus's real tail risk lives in the correlations.

## Also worth naming

**Institutional friction may be overweighted throughout.**

I assumed diffusion resembles past general-purpose technologies. Software-delivered, self-serve, zero-marginal-cost distribution may genuinely break the historical pattern - the electrification analogy carries a physical-retooling cost that AI adoption largely does not. If so, the [2028–2032](../04-timelines/2028-2032.md) diffusion lag is too long.

Against that, [Game 4](../02-games/4-labor.md) notes the METR result: measured productivity effects are frequently negative even where perceived effects are strongly positive. Adoption speed and benefit realization are not the same variable, and the second is what the diffusion argument is really about.

I have deliberately left both sides of this in rather than resolving it. It is genuinely unresolved. (It is close to Uncertainty 5 in spirit - both say the continuity method systematically overstates friction - but institutional friction can fail even if verification cost remains the ordering principle.)

---

### Gray-zone Taiwan is now operational

[Uncertainty 4](taiwan.md) carries a crisis table *and* a gray-zone table (freight insurance, export licenses, delivery slip, ASP step-ups, dual-sourcing). Ground passes should read the gray-zone rows before fleet trackers. Soft fail of the *consumed* assumption (supply to modeled buyers) can leave crisis indicators green.

### Sceptic reading order

[U5](learned-verification.md) + [U7](complement-erosion.md) (spine) → [U4](taiwan.md) (zero condition) → [U1](recursive-self-improvement.md) (parameter variance) → rest. Do not start with U2/U3 alone; they move numbers, not the framework.

**Start with:** [Uncertainty 1 - recursive research acceleration](recursive-self-improvement.md)

**Next:** [Part VII - The Indicator Dashboard](../07-indicators/), which turns the checkable subset of these into observables.
