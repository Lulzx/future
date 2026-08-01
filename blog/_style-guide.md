# Ground Truth house style

The voice is Wait But Why applied to constraint-first analysis. This file is
the working definition, derived by reading three Tim Urban posts closely and
pulling out what actually recurs, rather than what people assume the style is.

Sources read for the signature:

- [Being a Toddler Is Weird](https://waitbutwhy.com/2025/10/toddler.html) (2025)
- [The AI Revolution: The Road to Superintelligence](https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html) (2015)
- [Why Procrastinators Procrastinate](https://waitbutwhy.com/2013/10/why-procrastinators-procrastinate.html) (2013)

The build ignores any file here starting with `_`, so this is versioned
alongside the posts without being published as one.

---

## 1. The signature, as observed

### Never open with the thesis

Urban opens with a concrete scene, a question, or a joke, and withholds the
actual subject for several paragraphs. `Why Procrastinators` opens by quoting
dictionary advice and then mocking it. `The AI Revolution` opens with *"What
does it feel like to stand here?"* over a picture.

The reader should be curious before they are informed.

> Ours: *"Imagine you own the only ladder in town."* The post is about
> inference cost. The word inference does not appear for four paragraphs.

### Name things, and capitalise the names

This is the most distinctive move in the whole style and the easiest to skip.
Urban invents an agent or object, gives it a proper name, and then uses that
name as real vocabulary for the rest of the piece: the **Instant Gratification
Monkey**, the **Panic Monster**, the **Dark Playground**, the **Rational
Decision-Maker**, the **Die Progress Unit**.

A named concept is portable. Readers quote it, argue with it, and bring it to
the next post.

> Ours: **The Ladder Guy** and the **Two-Year Clock**, the **Millisecond
> Loop** against the **Six-Month Loop**, the **Permit Window**.
>
> A coinage that appears once is a flourish. Introduce it in bold, then use it
> plainly at least twice more, or drop it.

### Voice the reader's objection in the reader's own words

Do not describe an objection. Say it the way a skeptical reader would say it,
then take it seriously.

Urban: *"are you thinking, 'Cool….but nahhhhhhh'?"* and *"A lot of you are
probably reading this article while in the Dark Playground."*

> Ours: the section heading *"But models can make their own training data"*,
> followed by conceding it is a good objection before answering it.

### Rhythm by violent variation

Long, winding, comma-heavy explanatory sentences, then a three-word paragraph.
The short one lands because the long ones set it up.

Urban: *"He doesn't understand."* as its own paragraph.

> Ours: *"Not the wall. The ground."* and *"Not doing. **Checking.**"*

### Bold the punchline, not the keywords

Bold marks the one sentence in a section you would keep if you kept nothing
else. It is a spoken emphasis, not a highlighter. Bolding six terms per
paragraph destroys the signal.

> Ours: **You cannot software-engineer your way past a substation.**

### Headings are sentences, not labels

`The Road From ANI to AGI`, not `Background`. A heading should be readable as
a claim on its own, so the table of contents doubles as an argument outline.

> Ours: *Cost is not price, and this is the whole ballgame*, *The internet ran
> out*, *Why the supply chain refuses to fix itself*.

### Parenthetical asides as mini-essays

Urban interrupts himself constantly, often for a joke, sometimes for a real
caveat. The aside is where the writer's personality lives.

### Dramatise a number before using it

Never let a large number pass as a statistic. Stop, point at it, and make the
reader feel the scale before moving on.

> Ours: *"Sit with that for a second, because the reflex is to skim past it as
> one more big AI number, and it is not one more big AI number."*

### Extend one analogy rather than stacking many

One image, worked hard across the piece, beats five clever comparisons. The
ladder returns. The hill returns. The queue returns.

### End abruptly

No summary, no recap, no "in conclusion". Urban either cuts to a joke
(*"Anyway, gotta go."*) or lands one reframing sentence and stops.

> Ours: *"The mistake is assuming that being right about capability tells you
> anything whatsoever about who gets paid."*

---

## 2. Where we deliberately diverge

The style is a delivery mechanism. The thing being delivered is a forecast with
falsifiers attached, so four rules override the voice.

**Every number keeps its source.** Urban can write "a lot". We write the figure,
the series, and the date. If a sentence would be funnier without the citation,
it keeps the citation.

**Every post says how it could be wrong.** A falsifier section is mandatory and
does not get cut for pace. This has no Wait But Why equivalent, and it is the
reason the blog exists.

**Every post grounds out in the corpus.** The `corpus:` front-matter field
renders as a source list. The prose links into specific pages. A claim with no
page behind it should not be in the post.

**No em dashes, no semicolons, no middle dots.** Urban uses em dashes heavily.
The corpus does not, and the blog matches the corpus.

Two smaller divergences:

- **Images get captions.** Urban usually leaves drawings uncaptioned. Ours
  carry a caption because it doubles as alt text, and because the caption is a
  chance to add a fact rather than repeat the paragraph above.
- **No footnotes or blue boxes.** The renderer has no mechanism for them, and
  asides do the same job inline.

---

## 3. Working with the illustrations

The drawings are part of the argument, not decoration. That imposes an order of
operations.

**Set up, show, then talk about it.** The paragraph before an image should
create the question the image answers. The paragraph after should refer to what
is actually in the frame, by name.

> *"Two of those are chains. One of them is a thread."* → image → *"Hardware
> and distillation are engineering facts."*

**Refer to the drawing as a drawing.** Point at things in it: *"The robot has
climbed to the top and is drinking from the expert's cup. The rungs that used
to manufacture new experts are lying on the ground."*

**One idea per image.** If the caption needs a conjunction to explain what is
happening, the composition is doing two jobs and should be split.

**The picture carries the joke, not lettering inside it.** Generated text is
unreliable and misspellings are permanent. Only `cost-vs-price` carries words,
and only two of them.

House visual rules, for regenerating: black linework, white ground, flat mid
grey (#c8c8c8) fills, no frame, no panel colour, thick uneven hand-drawn
strokes, big round heads, tiny dot eyes. Greyscale only, which is what lets the
dark theme invert them instead of glaring.

---

## 4. Checklist before publishing

1. Does the opening withhold the thesis for at least three paragraphs?
2. Is there at least one named, capitalised concept a reader could quote?
3. Is the reader's best objection stated in the reader's voice?
4. Is there a paragraph under five words doing rhythmic work?
5. Is bold reserved for punchlines, at most one per section?
6. Does every heading read as a claim?
7. Is each big number dramatised before it is used?
8. Does the piece ride one analogy rather than five?
9. Does it end on a reframe with no summary?
10. Does every image have setup before and a reference after?
11. Is there a falsifier section, and does every number still have its source?
12. Zero em dashes, semicolons, and middle dots?

Then run the slop pass, remembering the precedence: facts beat quoted material
beats requested voice beats domain register beats any anti-slop rule. This
voice deliberately keeps devices a generic slop filter would flag, including
self-answered questions and short punch paragraphs. Keep them where they are
doing rhythmic work. Cut them where they are reflex.
