# Introduction to Algebra — difficulty and transition audit

Date: 2026-09-22. Starting point: a learner who has finished Beast Academy, follows the supplied AoPS textbook, and wants a natural transition to AMC 8.

## Completed chapter-agent follow-up

A second independent pass has read **all 4,392 variant stems and keyed answers in all 22 chapters**, together with all 1,464 corresponding base stems. Each variant was compared with its base rating and prerequisites; nontrivial route explanations were inspected, including all initially level-3-or-higher variants and newly identified method changes. All 22 chapters carry `variantReview.status = 'stem-reviewed'`: **122 variants have explicit demand/scope exceptions and 4,270 were judged equivalent to their calibrated base**. This status is a full stem/prerequisite/demand comparison, **not independent proof of every answer or every distractor**. Graph-dependent variants had their figure specifications compared with the keyed coordinates; this is not a render/accessibility certification.

Exact variant coverage by chapter: 1:306, 2:186, 3:186, 4:216, 5:246, 6:216, 7:186, 8:246, 9:216, 10:216, 11:216, 12:156, 13:186, 14:126, 15:186, 16:246, 17:156, 18:126, 19:186, 20:216, 21:216, 22:156. Total: **4,392/4,392**. The first phase had checked all bases/checkpoints but only targeted variants; this completed phase supersedes that variant-coverage limitation.

Chapters 17–22 follow-up: inverse radical functions now differ from inverse linear rules; polynomial coefficient recovery is distinguished from simple expansion; different-rate compounding comparisons require comparing actual factors; and the cube-root towers in 22.2 #5 require a cubic route absent from their square-root base. Conversely, 22.1 #8 round 2 is ruled out by a simple lower bound (L4 → L2/bridge), and round 3 loses a quadratic when the x terms cancel (L4 → L3). Straightforward repeated tasks were calibrated consistently: direct floor/ceiling intervals, supplied-input piecewise evaluation, ordinary sequence sums, and supplied-sum/product cube identities do not become harder merely because they occur in a challenge or worksheet.

Additional content repairs: 18.2 #1 round 3 now specifies an exponent identity for every positive real m, avoiding the m=1 exception; chapter 18 challenge #12 round 3 now requires integers a,b, since the previous unrestricted wording permits two different requested sums. Chapter 19 §19.3 #1 round 4 asks for the nominal annual rate, and #8 round 3 replaces an invalid informal interest bound with a correct numerical bound; round 4 specifies equality at whole-year endpoints. Chapter 21 §21.4 #9 rounds 2/4 specify that pendulum/metronome distances are measured along the arc. Chapter 1 labels sections 1.6–1.8 as MathQuest supplements. Chapter 12 now explains how to choose the added square before its first complex-quadratic worked example.

Chapters 9–16 follow-up: explicit exceptions now distinguish direct inputs from recovered parameters, given intermediate results from full quadratic solving, single rationalizations from paired conjugate expressions, and simple domain bounds from combined root/denominator conditions. Base-family consistency corrections include 10.2 #9 (substitute a root, L2), 11.5 #6 (routine signed grouping, L2), 15.4 #7 (ordinary four-sided fencing, L2/bridge), 15 worksheet #8 (rational sign analysis starting at zero, L2), and 16 worksheet #5 (a symbolic two-operation inverse, L2). Chapter 11 difference-of-squares recognition now specifies monomials with integer coefficients, avoiding multiple valid answers with radicals. Chapter 13 §13.4 #8 round 4 now explicitly excludes zero: otherwise the linear equation at $k=0$ also has exactly one solution. Chapter 13 §13.3 #6 round 4 now derives the other root from the known product, instead of assuming its unknown real coefficient is rational. Chapter 14 two tangent-intercept stems now say “meet” rather than “cross.” These changes preserve all keyed answer indices.

Additional concrete gaps in chapters 6–8: reversing both markup and discount (6 challenge 8 round 3); a draining pipe and reverse work rates (7.4/10 round 4, 7 worksheet 6 round 4); recovering intercepts from triangle area (8 challenge 4 round 3); and recovering a right-triangle leg from perimeter by Pythagoras plus one squaring step (8 challenge 11 round 3). These variants now have explicit demand overrides. Some variants are easier: the vertical-line perpendicular in chapter 8 challenge 6 round 4 is direct recognition. The chapter 8 parallel-line displacement stem now explicitly says **vertically**, resolving an ambiguity with perpendicular distance. Chapter 6 challenge 4 round 3 now asks for the percentage, matching its percentage answer choices.

New changes in this pass: §2.1 #7 round 4 translates a verbal expression and then evaluates it (L1 → L2); §5.3 #3 rounds 3/4 must scale an equation before elimination (L1 → L2); chapter 5 challenge #8 round 4 asks for a difference already supplied by subtracting two pair sums (L2 → L1). Chapter 2 §2.1 #7 round 3 had a distractor-check arithmetic typo, `2 + 9(2) = 18`, corrected to 20 without changing the answer. The two chapter 5 multi-action elimination stems now say “procedure” instead of “single move.” Existing first-pass overrides are retained.

## Conclusion

The existing chapter sequence mostly follows the supplied textbook, but the site's questions do **not** reproduce its difficulty profile. Of 1,464 base questions, **430 are level 1, 892 level 2, 140 level 3, and two level 4**. No base item warrants level 5. The 4,392 variants have **1,250/2,688/450/4/0** items at levels 1/2/3/4/5. Conversely, the 105 checkpoint items have **1/30/46/27/1** at those levels. The largest instructional gap is therefore **routine chapter work → substantial mixed checkpoint reasoning**, rather than a smooth rise through the chapters. Calibrated labels make the gap visible; they do not by themselves supply the additional mixed reasoning practice.

The advanced algebra topics must remain available in textbook order. Their presence should not make them compulsory preparation for AMC 8 or eligible for a core mixed paper. Topic scope and cognitive demand are independent: evaluating `i²` or `log₂ 8` is level 1 after instruction, while still belonging to the extension strand.

The machine-readable companion is `src/data/calibration/intro-algebra.js`. It supplies all base ratings, all checkpoint ratings, prerequisite references, per-item scope exceptions, and **122 variant exceptions (52 section, 70 challenge/worksheet)**. Unlisted variants now inherit their base with recorded `variant-equivalent` review status, not unreviewed provisional inheritance. These are editorial judgments, not measured solve times or empirical student calibration.

## Textbook comparison

Read the OCR text layer of the user's local file:

`E:\baiduyun\ebooks\ebookforclemie\textbook\l1\Richard Rusczyk - Introduction to algebra (the art of problem solving) (2007, AoPS Incorporated) - libgen.li.djvu`

Calibre's bundled `calibre.ebooks.djvu.djvu.DJVUFile` successfully decoded the text. Reviewed the instructions to learners and teachers, printed pages iii–vi, and the complete contents, printed pages ix–xiv. The book distinguishes section exercises, review, and substantially harder challenge problems, encourages an attempt before reading instruction, and treats some supplementary sections separately. Its general recommendation is linear textbook coverage. This audit preserves that course organization; the AMC 8 subset is an additional practice route, not a substitute table of contents.

The 22 chapter titles and ordinary section order align closely. A concrete exception is chapter 1: the book has sections 1.1–1.5 and **1.6 Summary**, whereas the repository adds **1.6 Exponents, 1.7 Fractional Exponents, and 1.8 Radicals**. These are site supplements, not exact textbook section correspondences. Their stable IDs were retained; their titles now say **MathQuest supplement**, and the chapter introduction explains the mapping. The book's 10.4 title also explicitly says “of a Quadratic,” which the shorter repository title omits without changing its subject.

Do not equate the site's `challenge` arrays with the original book's Challenge Problems. For example, site chapter 4 challenge 12 only rearranges the Fahrenheit formula, chapter 7 challenge 9 asks the factor from doubling an inverse-square distance, and chapter 8 challenge 12 asks the vertical separation of parallel lines with the same slope. These are level 2, 1, and 1 respectively.

## Coverage and limitations

| Collection | Inventory | Completed work |
|---|---:|---|
| Section bases | 980, in 98 sections | Every stem and keyed answer inspected for conceptual demand; all have explicit ratings and scope |
| Chapter challenges | 264 | Every stem and keyed answer inspected; explicit ratings and collection/item scope |
| Worksheets | 220 | Every stem and keyed answer inspected; explicit ratings and collection/item scope |
| Variants | 4,392 | Every stem and keyed answer compared with its base; nontrivial method routes inspected; 122 explicit exceptions, 4,270 equivalent inherited ratings |
| Checkpoints | 105 | Every stem, keyed answer and supplied main solution route reviewed; explicit ratings and item scope exceptions |

The first phase's targeted reading covered all 294 variants of section question 10 plus 112 length-flagged stems, with additional reported exceptions. Length was used to prioritize reading, never to assign demand. The completed chapter-by-chapter pass subsequently covered all variant slots and all rounds, including every challenge and worksheet variant.

This is **not** an independent re-solve of all 5,961 questions. Every variant now has an editorial demand/scope comparison, but there are no student-response data to validate those judgments empirically. Figures were read through their specifications and problem/solution context, not exhaustively rendered and visually certified. Lesson examples and distractors were not all independently re-solved. These limitations matter before describing the complete bank as mathematically verified.

Further verification should focus on independent mathematical proof of answers/distractors, rendered figures, and student observations; **no chapter remains pending for full variant-stem demand comparison**. Advanced topics remain scope-separated from the AMC practice route even when their numerical demand is low.

## Difficulty rubric and chapter inventory

1 = one direct step or recognition; 2 = a short routine chain or simple setup; 3 = combined knowledge, a hidden method, or a material model choice; 4 = insight or organized branches; 5 = sustained difficult casework. Ratings assume the stated prerequisites have been learned. Length of algebraic notation and chapter number are not proxies for difficulty.

In the following table, `L1/L2/L3/L4/L5` counts section bases, challenges, and worksheets together. `core/bridge/extension` counts include per-item scope overrides.

| Chapter | Title | Base items | L1/L2/L3/L4/L5 | core/bridge/extension |
|---|---|---:|---|---|
| 1 | Follow the Rules | 102 | 40/61/1/0/0 | 60/24/18 |
| 2 | x Marks the Spot | 62 | 30/32/0/0/0 | 62/0/0 |
| 3 | One-Variable Linear Equations | 62 | 6/51/5/0/0 | 40/22/0 |
| 4 | More Variables | 72 | 25/47/0/0/0 | 30/42/0 |
| 5 | Multi-Variable Linear Equations | 82 | 12/62/8/0/0 | 40/42/0 |
| 6 | Ratios and Percents | 72 | 10/41/21/0/0 | 72/0/0 |
| 7 | Proportion | 62 | 17/31/14/0/0 | 52/10/0 |
| 8 | Graphing Lines | 82 | 31/49/2/0/0 | 20/50/12 |
| 9 | Introduction to Inequalities | 72 | 29/37/6/0/0 | 20/44/8 |
| 10 | Quadratic Equations — Part 1 | 72 | 16/46/10/0/0 | 0/1/71 |
| 11 | Special Factorizations | 72 | 22/43/7/0/0 | 0/27/45 |
| 12 | Complex Numbers | 52 | 23/24/5/0/0 | 10/0/42 |
| 13 | Quadratic Equations — Part 2 | 62 | 13/44/5/0/0 | 0/0/62 |
| 14 | Graphing Quadratics | 42 | 12/28/2/0/0 | 0/0/42 |
| 15 | More Inequalities | 62 | 10/39/13/0/0 | 2/3/57 |
| 16 | Functions | 82 | 20/59/3/0/0 | 10/50/22 |
| 17 | Graphing Functions | 52 | 29/23/0/0/0 | 1/14/37 |
| 18 | Polynomials | 42 | 12/30/0/0/0 | 0/0/42 |
| 19 | Exponents and Logarithms | 62 | 21/36/5/0/0 | 20/25/17 |
| 20 | Special Functions | 72 | 33/25/14/0/0 | 2/44/26 |
| 21 | Sequences & Series | 72 | 16/50/6/0/0 | 44/19/9 |
| 22 | Special Manipulations | 52 | 3/34/13/2/0 | 1/13/38 |

Totals: **1,464 base items; 486 core, 430 bridge, 548 extension**. Variants: **1,458 core, 1,293 bridge, 1,641 extension**. These conservative scope choices preserve later accessible material without labeling all of a late chapter advanced. For example, chapter 19 integer growth/percentages and chapter 21 finite sequences remain accessible while logarithms and infinite sums are separated.

## Specific gaps and prerequisite decisions

| Evidence | Gap | Handling |
|---|---|---|
| §1.5 one/two-step equations → chapter 2 and §3.1 repeat very elementary work | After Beast Academy, this may be unnecessary repetition rather than progress | Use a diagnostic to choose review depth; retain the textbook chapters |
| §1.7 fractional powers and §1.8 #7/#9 rationalization appear in the opening chapter | Symbolic prerequisite expansion does not create harder contest reasoning | Fractional powers and rationalization marked extension; ordinary root work remains bridge |
| §3.3 #8 tickets, #10 changing ages; §6.2 #6/#9/#10 changing ratios; §7.4 #6/#8/#9 rates | A supplied equation becomes an independently chosen model | Mark these actual setup demands at level 3; do not infer level solely from slot |
| §8.6 negative reciprocal slopes and §9.4 plane half-regions | Formal coordinate algebra is additional scope | Excluded from the core random route; coordinate reading remains available |
| §9.5 #10 bounded integer optimization → cp3 #12 two simultaneous resource bounds | One short search becomes thirteen constrained cases | Distinct levels 3 and 4; supply untimed intermediate practice before a timed checkpoint |
| §10.4 Vieta, §11.3 cubes, §11.5 product completion, chapters 12–15 | Advanced topic coverage is not a needed linear AMC 8 ladder | Preserve in book order as extension; retain small arithmetic-identity exceptions |
| §12.3 #10, challenge #9, worksheet #8 | Solving a complex quadratic uses square completion before the dedicated chapter 13 method | Mark extension; added a local concept explaining half the linear coefficient and adding its square to both sides before the existing worked example |
| §16.3 #9 recovering an outer rule vs #10 a two-step table lookup | The final slot is easier than the previous slot | Explicit levels 3 then 2 |
| §19.4 `log₂8` versus cp2 #14 smudged receipt | Advanced notation is much easier than a three-variable/integer-constraint puzzle | Level 1 extension versus level 5 bridge; no topic-index difficulty shortcut |
| §21.4 finite sums/repeating decimals mixed with infinite sums | One section spans different scope requirements | Per-item scope overrides preserve finite problems |
| §22.1 #8 and worksheet #8 | Two successive squarings produce several candidates requiring checks | The only two level-4 base items; extension |

The official checkpoint specification is internally inconsistent on pacing: its stated minimum bands total at least **43 minutes** for 15 questions (`3×1 + 4×2 + 4×3 + 4×5`), while the papers advertise 25 minutes. This audit does not turn these editorial estimates into observed solve times. An untimed first encounter and an optional timed repeat are a more defensible transition than a mandatory 25-minute pass gate.

## Concrete repairs made

1. **§21.1 #10, base and all three variants:** added “increasing.” Without it, the given sum and largest term allow both signs of the common difference: base `±10`, variants `±8`, `±12`, `±13`. Keys remain unchanged after the missing condition is supplied.
2. **Chapter 16 challenge #5, base and all three variants:** supplied the necessary linear/quadratic assumption on the unknown function. Previously division by a vanishing factor left its value at the excluded input undetermined; e.g. the base product `(x−3)g(x)=x²−9` does not constrain `g(3)`. The assumption now makes the requested full function unique.
3. **Checkpoint 3 #8:** replaced the premature parabola-vertex solution with the already taught fixed-sum product argument. `2b+l=53`, so `(2b)l≤26×27`; the feasible choice `b=13,l=27` gives area 351.
4. **Checkpoint 3 #12:** replaced the assertion that a few nearby stock combinations are optimal with exhaustive bounded reasoning. Planter counts `0…12` give best profits `70,72,81,83,92,101,103,112,114,116,118,113,108`. This proves the existing key 118.
5. **Chapter 22 challenge #9, rounds 2–4:** made convergence an explicit premise. Removed numerical iterations presented as a convergence proof. Round 4 previously required an untaught power-tower convergence threshold and incorrectly described sufficiently small positive bases as racing to infinity. Its replacement gives a convergent tower limit `3/2` and asks for `x³=9/4`, an algebraic self-similarity calculation. The collection remains extension.

No textbook problems were copied. No chapters were deleted or reordered. The known mathematical ambiguities were repaired rather than hidden by difficulty labels.

## Variant differences

The calibration records 52 section overrides and 70 challenge/worksheet overrides. Representative differences include:

| Stable item reference | Base → variant demand | Result |
|---|---|---|
| §1.5 #7 round 4 | Supplied two-sided equation → construct two pricing models | 2 → 3 |
| §5.6 #10 round 4 | Alternating three pair sums → simply add first and third sums | 3 → 1 |
| §6.3 #10 round 4 | Two-stage per-day conversion → one division by 24 | 2 → 1 |
| §8.1 #3 round 4 | Read a plotted point → then move in two directions | 1 → 2 |
| §8.1 #10 round 3 | Compute perimeter → recover a missing coordinate from it | 2 → 3 |
| §9.2 #10 round 4 | Compare two different radical sums → identical roots immediately combine | 3 → 1 |
| §18.2 #10 round 3 | Evaluate a product at 1 → recover a missing parameter | 2 → 3 |

Implemented challenge/worksheet exceptions include chapter 12 challenge #3 round 3 (recover a parameter making a square pure imaginary); chapter 14 challenge #3 round 3 (recover the parabola coefficient from a vertex and point, 1 → 2); chapter 14 worksheet #3 round 4 (recover a parameter before finding intercepts, 2 → 3); chapter 14 worksheet #6 round 4 (recover a negative coordinate before classifying another point, 2 → 3); and chapter 17 challenge #5 round 4 (radical inverse plus its domain, 2 → 3). These remain extension. Each exception has a stable source reference and a method-based reason in the manifest.

## Verification performed

- Imported all 22 chapter modules, all algebra variant modules and all 7 checkpoints; variant section IDs match the base chapters. Every base slot has three variants.
- Checked calibration coverage: exactly 98 ten-item section arrays, 22 twelve-item challenge arrays, 22 ten-item worksheet arrays, and seven fifteen-item checkpoint arrays; values are in 1–5.
- The initial keyword scope screen was followed by full reading of all 4,392 stems against their bases. All 22 chapter review markers and all 122 exceptions were imported and counted; no algebra variant remains at unreviewed `inherited` status.
- Recomputed the repaired integer optimization and the new power-tower identity; independently checked the two families of missing assumptions.
- `node scripts/validate-content.mjs --only intro-algebra` passed with **0 warnings**, including complete three-variant coverage for the 1,464 algebra base slots. The validator also reports repository-wide structural totals; this is not proof that every mathematical answer is correct.
- `git diff --check` on the algebra content paths found no whitespace errors.

Remaining work is explicit: independent proof of all answer/distractor claims, render checks for all figures, additional mixed reasoning practice before the hardest checkpoints, and student-response observations to test these editorial difficulty estimates. Full stem-level difficulty/scope review and the reported collection-variant overrides are complete.
