# Intro Algebra independent answer audit

Audit date: 2026-09-30. Scope: 5,961 current problem instances, including all four rounds of section practice, challenges and worksheets, plus 105 checkpoints. This document concerns mathematical answer correctness; textbook correspondence and difficulty progression are separate audits.

Result: **5,961 verified, 0 needs-review, 0 possible-error**. The ledger has exactly 5,961 distinct IDs and every digest matches the current exported source. All 5,081 multiple-choice/checkpoint items have a verified key and unique correct option; all 880 worksheet answers have a verified key match.

| Chapter | Verified / total | Chapter | Verified / total |
|---|---:|---|---:|
| 1 | 408 / 408 | 12 | 208 / 208 |
| 2 | 248 / 248 | 13 | 248 / 248 |
| 3 | 248 / 248 | 14 | 168 / 168 |
| 4 | 288 / 288 | 15 | 248 / 248 |
| 5 | 328 / 328 | 16 | 328 / 328 |
| 6 | 288 / 288 | 17 | 208 / 208 |
| 7 | 248 / 248 | 18 | 168 / 168 |
| 8 | 328 / 328 | 19 | 248 / 248 |
| 9 | 288 / 288 | 20 | 288 / 288 |
| 10 | 288 / 288 | 21 | 288 / 288 |
| 11 | 288 / 288 | 22 | 208 / 208 |
| Checkpoints | 105 / 105 | **Total** | **5,961 / 5,961** |

## Evidence and replay

`intro-algebra-source.json` is exported from the actual content inventory. Each item contains its full problem object and SHA-256 digest. `intro-algebra-ledger.jsonl` records one result per item. A verified result must be obtained by an independent stem-based calculation, symbolic proof, finite enumeration, or an explicitly written mathematical derivation. Authored solutions are not used as an oracle for calculating expected answers.

The automatic solver compares every multiple-choice option with its derived result and requires a unique matching option. Special comparison types preserve ordered coordinates, distinguish equations from expressions, retain variable labels, and check all components of worksheet answers. Hand-reviewed cases include semantic options, domain restrictions, extrema, physical constraints, graphical metadata and extended word problems. These receipts are in `intro-algebra-reviewed.json` and chapter-specific `intro-algebra-ch*-reviewed.json` files; the older checkpoint receipts remain in `intro-algebra-manual.json`.

All saved receipts are tied to the complete source digest. Changed source invalidates the receipt instead of silently retaining its verified status. The hand-derivation replay script rejects attempts to rebind an existing receipt to changed source without a new review. The main solver publishes its ledger atomically, retaining the last complete ledger if interrupted.

Run serially:

```text
node scripts/audit/answers/export-algebra.mjs
python scripts/audit/answers/algebra.py
```

The main script accepts chapter numbers for an incremental run. Unselected rows survive only if their source digests remain current. Do not run multiple writers against the same ledger concurrently. Manual evidence scripts are authoring/replay tools, not substitutes for reviewing newly changed questions.

## Corrections during the remaining-answer audit

- 10.3, question 3, round 4: specified a difference of squares of monomials with integer coefficients; over real coefficients another listed expression also qualifies.
- 11.3, question 1, round 4: specified the cube of a monomial with integer coefficients, removing the analogous coefficient-domain ambiguity.
- 15.1, question 4, round 4 and chapter 15 challenge 5, round 4: asked for exactly the full possible-value set, removing weaker but true range statements.
- 15.2, question 2, round 2: specified exclusion because the fraction is undefined. The former wording also allowed a defined value that failed the inequality.
- 19.2, question 8, rounds 2 and 3: added positive principal and positive interest-rate assumptions. A zero rate otherwise makes simple and compound balances equal indefinitely.
- 19.3, question 8, rounds 1 and 2: fixed the comparison time at one year; compounding-frequency comparisons previously lacked a holding period.
- Chapter 6: the parallel reviewer specified positive numbers in all four rounds of 6.4 question 9 to exclude undefined zero-denominator percentage change.
- Chapter 9: the parallel reviewer clarified seven questions to require exactly all possible values, eliminating simultaneous weaker true choices.
- Chapter 20 worksheet 2, round 3: restored the requested absolute-value equation to the supplied answer, alongside both roots.

The chapter-specific evidence files document further reviewer findings. Earlier changes already present in the working tree are not attributed to this continuation.

## Limits of the claim

Verified means the recorded answer is mathematically supported for the audited stem, with the recorded option or worksheet checks. It does not certify every sentence of the authored explanation or rendered diagram pixels. The symbolic solver screens some numerical claims in explanations, but this is not a complete prose-proof audit. Mathematical diagram metadata is checked where used; a browser-level visual review is a different task. Full coverage of answers is also not a claim that the difficulty ramp is already smooth.
