# Cost Curves - the threshold is economic, not technical

← [Robotics](README.md) · [III.B - Physical](../README.md) · [Index](../../../README.md)

---

The interesting threshold is not "can it do the task." It is **"does delivered cost per hour cross the local wage."** Almost all public discussion of robotics is about the first question and almost all of the economics is in the second.

## The naive calculation, and why it misleads

A humanoid at **$200k does nothing.** At **$20k with a 5-year life**, it looks like labor at roughly **$3/hr** - and at that price the adoption question appears to answer itself across most of the developed world.

That calculation is the one usually quoted and it is wrong in a specific, correctable way: **it divides capital cost by calendar hours rather than by productive hours, and it omits everything except the robot.**

## The delivered-cost model

The number that actually matters:

```
delivered $/hr  =  (amortized capital + energy + maintenance + integration + supervision)
                   ─────────────────────────────────────────────────────────────────────
                              utilization × task success rate
```

Every term in the denominator is the one that kills the naive figure.

| Term | Naive assumption | Realistic today |
|---|---|---|
| **Utilization** | ~100% | 20–50% - shift patterns, charging, changeover, idle time |
| **Task success rate** | ~100% | Well below 1 on unstructured tasks; each failure costs a human intervention |
| **Integration** | Zero | Often exceeding the hardware cost - fixturing, workflow redesign, safety certification |
| **Supervision** | Zero | The teleoperation ratio; a "deployed" fleet frequently has humans in the loop |
| **Maintenance** | Negligible | Actuators and end-effectors are consumables under real duty cycles |

Apply realistic values and the $3/hr figure becomes **$12–25/hr** - which is not below the wage in most developed markets, which is why deployment is slower than the unit-price trend suggests.

**This is the same error as reading AI capex from model capability.** The technology's cost curve is not the system's cost curve, and the gap between them is where all the institutional friction lives.

## Why the wage comparison is the wrong comparison anyway

Even at parity, substitution does not follow. Three reasons, all of which favor humans longer than the arithmetic implies:

- **Robots replace tasks, not jobs.** A role is a bundle. Automating 70% of it at parity cost saves nothing if the remaining 30% still requires a person on site for a full shift. → the same composition argument as [Game 4](../../../02-games/4-labor.md).
- **Flexibility has option value.** A human redeploys to a new task in minutes at zero capital cost. A robot requires integration work. In variable-demand environments the option value of flexible labor is large and rarely priced.
- **The comparison should be to fully-loaded cost, which cuts the other way.** Wages understate labor cost by 25–40% once benefits, turnover, training, scheduling, and workplace-injury liability are included. In high-turnover, high-injury settings - warehousing, meatpacking, materials handling - **the real crossover arrives considerably earlier than the wage comparison implies.**

The third point is why the first deployments cluster where they do. **The economics work first where labor is expensive to *employ*, not where it is expensive to pay.**

## Where the curve actually bends

Falling unit prices matter less than these three, in order:

1. **Task success rate.** It sits in the denominator and it is the term with the most headroom. Going from 90% to 99% success is a 10× reduction in intervention frequency and does more for delivered cost than halving the hardware price. This is where [the data problem](data-problem.md) converts directly into economics.
2. **Utilization.** Multi-shift operation and reduced changeover time are pure margin. Structured environments win here mechanically - a warehouse runs 20 hours a day and a construction site does not.
3. **Integration cost.** Currently bespoke per deployment. This is a software and standards problem, and it is the one most likely to fall fast once volume justifies the tooling.

> **Prediction:** the first genuinely large deployments are **not** in the lowest-wage tasks. They are in **high-turnover, high-injury, high-utilization, structured** settings where the fully-loaded cost of employment is far above the wage and the environment can be engineered around the machine. Warehousing, logistics yards, and food processing before construction, retail, or care.

## The China exception

The delivered-cost model has a term that is not technological at all: **who manufactures the robot.** A vertically integrated producer with domestic actuator, magnet, and cell supply faces a materially different cost curve than one assembling imported components, and the gap is larger than any plausible software advantage. → [Supply chain](supply-chain.md)

This is the point at which robotics economics stops being a technology question and becomes an industrial-policy one.

---

**Related:** [The data problem](data-problem.md) on the success-rate term · [Supply chain](supply-chain.md) · [Game 4 - Labor](../../../02-games/4-labor.md) on task-versus-job composition · [Logistics](../logistics.md)

**Next:** [Supply chain](supply-chain.md)
