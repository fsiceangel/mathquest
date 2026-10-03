# Prealgebra independent answer audit

2026-09-30: **4,075 / 4,075** current item versions verified: 1,000 base items,
3,000 variants, and 75 checkpoints across 15 chapters. There are no pending or
unresolved answer errors in the current ledger.

## Evidence

`prealgebra-source.json` is exported from the actual registry. Each ledger row
in `prealgebra-ledger.jsonl` includes the complete source SHA-256, method,
derived result, key comparison, and multiple-choice uniqueness result.

`scripts/audit/answers/prealgebra.py`, `prealgebra_models.py`, and the number
models solve recognized stem structures. The chapter TSV files and
`prealgebra_manual.py` provide independently transcribed calculations and
source-pinned semantic proofs for remaining items. They cover exact fractions,
signs, inequalities, rounding, units, clocks, rates, integer bounds, geometry,
statistics and constructed data sets. Checkpoint models additionally enumerate
finite configurations and candidates where appropriate. Expected calculations
are derived from the question, not taken from its solution or answer index.

All numeric choices are compared, including equivalent forms. Semantic options
retain explicit reasoning for the selected position and exclusion of the other
choices. Worksheet constructions check validity rather than pretending every
construction has a unique answer. Source pins prevent changed questions or
options from inheriting the old manual proof.

Replay from the repository root with Python and SymPy installed:

```text
node scripts/audit/answers/export-prealgebra.mjs
python scripts/audit/answers/prealgebra.py
npm run audit:answers
```

`--record-new-digests` is only for newly completed manual reviews. It does not
approve a changed item with an existing pin. A changed item requires a new
mathematical review before replacing its pin.

## Corrections in this continuation

- 3.1 question 10, round 3: explicitly exclude the starting flash. Multiples
  of 40 within the next 300 seconds give seven subsequent flashes.
- 5.4 question 5, round 4: describe two consecutively numbered pages being
  read, rather than an open book whose facing pages would have incompatible
  pagination. The intended pages remain 47 and 48.
- 12.3 question 2, base: ask for the most specific shape name. A square also
  satisfies the definitions of rectangle and rhombus.
- Checkpoint 4 question 8: specify the vertices of a convex pentagon in order,
  supplying the geometric condition needed for the star-angle argument.

Earlier difficulty and content corrections remain documented in
`../audits/prealgebra.md`; they are not all attributed to this continuation.

## Limits

Answer verification is not a sentence-by-sentence proofread of all explanations,
a pixel-level check of all rendered diagrams, or an empirical measure of how
hard a child will find each question. Graphical coordinates and labels were
checked where used in a derivation. Textbook chapter alignment and difficulty
progression are documented separately in `../audits/README.md`.
