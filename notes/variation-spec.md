# Counting & Probability — variation spec (template for every chapter)

Every base problem in `src/data/intro-counting/chNN.js` gets three variations, so a
student who repeats a chapter meets a different problem set each time: base = round 1,
v1 = round 2, v2 = round 3, v3 = round 4.

## Files

| file | contents |
|---|---|
| `src/data/variants/intro-counting/chNN-sK.js` | `sections: { 'N.M': [[v1, v2, v3], … ×10] }` for the K-th authored section |
| `src/data/variants/intro-counting/chNN-cw.js` | `challenge: [[v1, v2, v3], … ×12]` |
| `src/data/variants/intro-counting/chNN-ws.js` | `worksheet: [[v1, v2, v3], … ×10]` |

Module shape: `export default { book: 'intro-counting', number: N, sections?, challenge?, worksheet? }`.
MC items are `{ q, fig?, choices: [4 strings], answer: <0-3>, solution }`. Worksheet items
are free response `{ q, fig?, answer: '<LaTeX string>', solution }` — **no `choices`, and
`answer` is a string, never a number.**

## Binding rules

1. **Keys are pinned** in the chapter’s pin file `notes/pins/intro-counting-chNN.md`. If a pinned key is
   wrong, or duplicates an existing base problem, **STOP and report — do not silently
   retarget.** A different value than the pin means one of us made an arithmetic error and
   it must be resolved, not papered over.
2. **Answer index is derived, not chosen.** With base index `b`: `v1 = (b+1)%4`,
   `v2 = (b+3)%4`, `v3 = (b+2)%4`. The pin file spells out every row.
3. **Lanes.** v1 = same technique, fresh numbers and scenario. v2 = same technique, a
   different scenario shape (different objects being counted). v3 = *reversed* or *derived*:
   give what was asked and ask for something that was given, or ask the natural follow-up.
   Each variation must be a genuinely different problem — never the base with one number
   changed, never a uniform rescaling, never a restatement.
4. **Key distinctness.** Within a round (all v1 across the whole chapter, likewise all v2,
   all v3) no two items may share a key as a normalized string. Within a slot the four keys
   base | v1 | v2 | v3 must all differ. The pin file is designed to satisfy both; the audit
   `node scripts/audit/keys.mjs intro-counting NN` and `node scripts/audit/slots.mjs intro-counting NN` verify.
5. **Two independent routes per solution.** Every `solution` gives two genuinely different
   derivations (for counting: e.g. constructive vs complementary, casework vs a formula,
   direct vs a bijection), each ending in ✓, then names each wrong choice’s trap in CAPS
   ending in ✗. Route two must not re-import route one’s result.
6. **Brute-force every key** in node before writing choices; for symmetry and restriction
   problems enumerate the objects directly. Conventions (distinguishable? order? repeats?
   zero allowed?) are settled explicitly in the stem.
7. **House style.** Curly apostrophes (’) inside words. "center". Never the word "actually".
   No self-correcting prose. `\frac`, `\binom{n}{k}`, `n!`, `\$`, `\%`.
8. **Figures** only where the base problem has one or a grid/region is needed; DSL in
   `src/components/Fig.jsx`; `view` at uniform scale; never label the quantity asked.
9. **Originality.** Nothing reuses a stem, number set, or scenario from `chNN.js` —
   including its worked learn examples — or from any other variation in the chapter.
10. **Never name** a textbook, publisher, competition, or other project anywhere,
    including comments.
11. **Economy.** Write each file in a few large chunks, never echo file contents back, final
    message under 20 lines: any pin you are stopping on, then the answer-position counts.

## Audit suite (run from the repo root after the wave settles)

```
node scripts/validate-content.mjs --only intro-counting/chNN
node scripts/audit/figures.mjs intro-counting NN --var
AR=2 node scripts/audit/cross-file.mjs intro-counting NN
node scripts/audit/keys.mjs intro-counting NN
node scripts/audit/slots.mjs intro-counting NN
```

Each round must report "distinct keys, 0 repeated"; slots must report "0 adjacent-repeat slot(s)".

## Pin file format (`notes/pins/intro-counting-chNN.md`, written by the pin designer)

For each of the chapter’s tables (one per section, challenge, worksheet):

```
## §N.M <title> — chNN-sK.js
base indices: b1 b2 … b10
v1 indices:   …
v2 indices:   …
v3 indices:   …

| slot | v1 | v2 | v3 |
| 1 | <one-line scenario with all givens>. **KEY: $…$** | … | *Reversed:* … **KEY: $…$** |
```

Every KEY is brute-force verified by the designer before it is written. The designer also
lists an "already taken" inventory (every number set and scenario used by the base chapter
and its learn examples) and checks the three rounds for key collisions before handing off.
