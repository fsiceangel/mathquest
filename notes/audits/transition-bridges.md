# Independent practice at four main-path gaps

Added 2026-09-30: `src/data/transition/bridges.js` contains four sets of four independently answerable multiple-choice problems. Statistics and distributions progress through levels 2, 2, 3, 3; restricted digits and Pascal paths progress through levels 1, 2, 3, 3. Direct product-rule and single-right-step warmups retain L1 rather than receiving inflated bridge ratings. These are practice after the existing worked examples and before the target group, not replacements for the target problems or new claims of empirical difficulty validation. No original textbook questions are reproduced.

## Targets and intended transfer

| Set | Existing target | Missing step now practised |
| --- | --- | --- |
| statistics-construction | `prealgebra/13/worksheet/10/4`, L4; preceding main-path work tops out at L2 | Convert mean to total, locate the two middle entries, combine constraints, and verify a completed sorted list before open construction. |
| restricted-last-digits | `intro-counting/1/challenge/12/3`, L4; this round has L1 and L3–L4 but no L2 | Reserve restricted slots first, distinguish zero from nonzero endings, and sum disjoint cases. |
| restricted-distributions | `intro-counting/5/5.4/5/3` and `/10/3`, L4 and L3 | Distinguish identical objects from distinct objects, eliminate empty boxes, and isolate a special object before distributing the rest. |
| pascal-paths | `intro-counting/12/12.3/4/3` and `/9/3`, L3; direct entry-reading is L1 | Match paths to right-step positions, count a fixed endpoint, then combine or exclude endpoints. |

These exercises do not claim to make every challenge in the corresponding groups routine. In particular, Counting 5.4 round 3 also includes L5 unlabeled integer partitions; that optional extension remains substantially harder and is not the purpose of this bridge.

## Independent answer verification

Answer indexes in the data are zero-based. Every row below supplies a direct derivation independently of the stored key. All four choices are distinct; the derived numeric value occurs once in each choice list.

| Set / problem | Independent calculation and uniqueness | Correct option |
| --- | --- | --- |
| statistics / 1 | Mean fixes total 24; missing central value 7; sorted central entries 5 and 7 yield median 6. | B: 6 |
| statistics / 2 | Median equation 6+x=16 fixes x=10, between 6 and 12. Total 48 divided by 6 is 8. | A: 8 |
| statistics / 3 | Total 45 minus known sum 26 gives a+b=19. Together with b−a=5 this uniquely gives a=7,b=12; order holds. | C: 12 |
| statistics / 4 | Total 54 minus known sum 34 gives a+b=20. Range gives b−a=12, so a=4,b=16. Order, median 8, total 54 and range 12 all hold. | D: 16 |
| last digits / 1 | Two choices for final digit, three for first, two for middle; all 12 codes distinct. | C: 12 |
| last digits / 2 | Exhaustive set is 10,12,20,30,32. | B: 5 |
| last digits / 3 | Exhaustive set is 105,120,125,150,205,210,215,250,510,520: 10 integers. | A: 10 |
| last digits / 4 | Legal tails are only 25 and 50. Tail 25 leaves first choices 1,3,4, each with three second choices: 9. Tail 50 leaves four first choices, each with three second choices: 12. Total 21. | D: 21 |
| distributions / 1 | All 16 binary assignments minus two constant assignments gives 14. | C: 14 |
| distributions / 2 | Ordered bowl totals (2,5),(3,4),(4,3),(5,2) give four divisions. | B: 4 |
| distributions / 3 | Unique empty box: three choices. Each remaining pair receives a nonconstant length-three binary assignment: six choices. Product 18. | D: 18 |
| distributions / 4 | Star's box: three choices. Remaining toys occupy the two other boxes in six nonconstant binary assignments. Product 18. | A: 18 |
| Pascal / 1 | Four binary strings of length four have weight one: RLLL,LRLL,LLRL,LLLR. | B: 4 |
| Pascal / 2 | First bit fixed R; remaining four-bit suffix must have weight two, hence 6 choices. | C: 6 |
| Pascal / 3 | Weights 0,1,5 among five-bit strings occur 1,5,1 times, respectively; sum 7. | C: 7 |
| Pascal / 4 | All 64 six-bit strings minus weights 2 and 4, each with 15 strings, leaves 34. | D: 34 |

The structural differences include inverse statistical constraints, case distinctions caused by leading zero, changing object identity, choosing an empty or singleton box, a fixed first step, and complementary endpoint counts. The sets therefore do more than substitute numbers into the original target questions. Full transfer still requires completing the original target independently, and should be checked against learner performance.
