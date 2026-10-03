# Counting independent answer audit — all answers verified

Current coverage: **3195 / 3195 answers independently computed and compared**, 0 need review, 0 mismatches. This answer audit is separate from the difficulty/stem review and from sentence-by-sentence explanation review. The ledger contains all 780 base questions, 2340 variants, and 75 checkpoints; absence of an independent model never counts as a pass.

| Chapter | Questions | Answer verified | Remaining |
|---|---:|---:|---:|
| 1 | 248 | 248 | 0 |
| 2 | 248 | 248 | 0 |
| 3 | 208 | 208 | 0 |
| 4 | 208 | 208 | 0 |
| 5 | 208 | 208 | 0 |
| 6 | 128 | 128 | 0 |
| 7 | 208 | 208 | 0 |
| 8 | 288 | 288 | 0 |
| 9 | 128 | 128 | 0 |
| 10 | 168 | 168 | 0 |
| 11 | 208 | 208 | 0 |
| 12 | 248 | 248 | 0 |
| 13 | 248 | 248 | 0 |
| 14 | 248 | 248 | 0 |
| 15 | 128 | 128 | 0 |
| Checkpoints | 75 | 75 | 0 |

Run `node scripts/audit/answers/export-counting.mjs` then `python scripts/audit/answers/counting.py`. The TSV models encode mathematics read from each stem, never numbers extracted from its solution. Symbolic expansion, exact rational arithmetic, Pascal recurrence, occupancy convolution, and exhaustive integer-triple enumeration compute answers. Every MC choice is compared, so keyed correctness and uniqueness are separate checks. Multi-part answers retain their ordered components. Source SHA-256 is the full digest of JavaScript `JSON.stringify(p)` after omitting `calibration` and `variants`; digest pins invalidate a result if source content changes. `--pin-new` records newly authored models only, never silently updates an existing pin.

Confirmed repairs: chapter 14 challenge #9 base / round 2 / round 4 omitted a lower bound on n, admitting a vacuous zero-coefficient equality. Added n>=3 / n>=4 / n>=2 respectively; intended answers remain 14 / 23 / 27. Chapter 2 section 2.2 #4 round 4 and #6 round 4 omitted an integer restriction on inverse thresholds k/N, otherwise whole real intervals solve the counting equations; added positive-integer domains, with intended keys 5 and 10 unchanged. Chapter 15 worksheet #3 round 4 and #7 round 4 likewise lacked integer domains for k/n: the original conditions admitted every real value in [26,27) and [13,14), respectively. Added positive-integer domains; answers 26 and 13 unchanged.

The resumed audit completed chapters 2, 3, 6, 7, 8, 9, 10, 11, 15 and all five checkpoints. Models include exhaustive digit/seat/multiset/path enumeration, exact rotation/reflection orbits (including repeated colors), hypergeometric position subsets, stopped-game sample spaces, weighted binomial outcomes, exact convex polygon clipping for geometric probability, and bounded occupancy convolution. Every division inside a model is evaluated symbolically to avoid floating-point equality claims. Diagram-dependent models transcribe actual coordinates or labels from the figure data; this certifies the encoded geometry, not a separate visual-layout inspection.

**Explanation and acceptance limits:** `answer-verified` proves the modeled mathematical answer and (for MC) exactly one listed choice, not every sentence in the stored explanation. Detailed solution review remains separately `needs-review` until actually read and checked. Worksheet comparisons certify the stored key; the UI acceptance normalizer is outside this book-only audit. Inverse problems carry uniqueness arguments in their evidence. Any remaining record is explicitly unresolved; no difficulty receipt or assertion of “two routes” is treated as proof.

Original-source evidence: [intro-counting-source.md](intro-counting-source.md) records actual visual inspection of the local DJVU contents, matching all 15 chapter titles and instructional sections, including source hashes and printed page numbers. This establishes chapter/section structure, not identity with publisher exercise numbers.
