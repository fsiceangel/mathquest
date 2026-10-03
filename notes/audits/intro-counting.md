# Counting & Probability difficulty and transition audit

Audit date: 2026-09-22. Starting point: completed Beast Academy; retain the textbook chapter route, with a separate route toward AMC 8. This is an editorial assessment of mathematical demand, not calibration from student response times or success rates.

## Coverage and limits

- Read and individually rated every base problem stem and keyed answer: 45 sections × 10, 15 challenges × 12, and 15 worksheets × 10 = **780** problems. Read and rated all **75** checkpoint stems and keyed answers. The 855 ratings are explicit, not inferred from item position.
- Imported and screened all **2,340** variants using concept fingerprints from both stems and solutions: expectation, repeated-state probability, geometry, polynomial expansion, inclusion-exclusion, symmetry, distributions, casework, adjacency, combinations, divisibility, and advanced algebra/centroid reasoning. Compared each fingerprint to its own base slot. This screen finds candidates; it does not prove semantic equivalence or mathematical correctness.
- The second pass is now complete: read **all 2,340 variant stems**, round by round and chapter by chapter, and compared their mathematical route and prerequisites with the base. Nontrivial inverse tasks, changed restrictions, dependencies, stopping conditions, symmetries and geometry were checked against their solutions. All 15 chapters now have a `stem-reviewed` receipt for rounds 2, 3 and 4. Matching variants retain a reviewed base-equivalent level; differing section, challenge and worksheet variants have explicit level/scope overrides. This is **full stem and difficulty review, not independent proof of every answer or every solution sentence**. Detailed evidence and limits are in `intro-counting-ch01.md` through `intro-counting-ch15.md`.
- Independently enumerated or exactly computed all **43** arena problems tagged counting, probability, number theory, or logic. `node scripts/audit/verify-arena.mjs` checks all four sets, asserts complete topic coverage and unique correct choices, and passed 43/43. This is independent answer verification, separate from content-schema validation.
- The supplied Counting DJVU exists. Calibre's `DJVUFile.get_text` returned **0 characters** for this particular file. The textbook's printed contents and prerequisite prose therefore have **not** been verified from the original. Chapter identities below are verified against the repository's authoring specification and actual modules. No full textbook copy was created.

| Chapter | Base items rated | Variants screened | Variant stems read and compared | Remaining full-stem review |
|---|---:|---:|---:|---:|
| 1 | 62 | 186 | 186 | 0 |
| 2 | 62 | 186 | 186 | 0 |
| 3 | 52 | 156 | 156 | 0 |
| 4 | 52 | 156 | 156 | 0 |
| 5 | 52 | 156 | 156 | 0 |
| 6 | 32 | 96 | 96 | 0 |
| 7 | 52 | 156 | 156 | 0 |
| 8 | 72 | 216 | 216 | 0 |
| 9 | 32 | 96 | 96 | 0 |
| 10 | 42 | 126 | 126 | 0 |
| 11 | 52 | 156 | 156 | 0 |
| 12 | 62 | 186 | 186 | 0 |
| 13 | 62 | 186 | 186 | 0 |
| 14 | 62 | 186 | 186 | 0 |
| 15 | 32 | 96 | 96 | 0 |
| **Total** | **780** | **2,340** | **2,340** | **0** |

The former 2,024-stem queue has been read in full. Automated import/fingerprint screening and semantic stem review are distinct coverage layers; both are complete. Independent mathematical re-solving remains selective, as documented below and in the chapter reports.

## Rating and scope rules

Levels: 1 = one direct operation or direct taught formula; 2 = a short setup or two steps; 3 = combine concepts or identify an implicit method; 4 = an insight or organized multi-branch reasoning; 5 = long interacting casework or a demanding challenge. The notation or size of the integer alone does not set the level. A directly substituted binomial coefficient may be level 1 while still outside the required route.

`core` means direct preparation, `bridge` means a useful intermediate contest technique, and `extension` means optional enrichment for the stated goal. Extension is a route decision, **not** a claim that the technique can never appear in a competition problem. Textbook study should retain all chapters. Random AMC 8 practice should exclude extension items, including extension variants of otherwise eligible slots.

## Concrete gaps and routing decisions

| Location | Evidence from the actual problem | Decision |
|---|---|---|
| 1.3 #7–10 | #7 counts a two-divisor union in a three-digit interval; #8 adds a third divisor; #9 switches to zero-free digit complements; #10 complements a three-divisor union. | Levels 3,3,3,4. Require multiplication and overlap counting; do not promote automatically because a student finished #1–3. |
| 1.5 #3 vs #7–10 | #3 is only `8!/6!`; #7 is a three-person block, #9 a forbidden adjacent pair, #10 constrained first and last digits. | Levels 1 vs 3. Chapter position and factorial notation do not identify demand. |
| 2.2 #7 | Integer triangles of perimeter 15 require unordered side triples **and** the triangle inequality. | Level 4. Introduce the triangle inequality explicitly before this item if it is not in the student's diagnostic knowledge; the counting lesson alone does not teach it. |
| 2.3 #3 round 4 | Base: contains digit 5. Variant: contains both 5 and 0, with four-digit leading-position restriction. | Base 2, variant 4: two missing-digit exclusions with overlap. |
| 3.4 #10; chapter-3 challenge #9/#12 | Square colorings up to rotation, hexagon colorings up to rotation, and repeated-color bracelets have unequal orbit sizes. | Levels 4–5, extension, with actual variant overrides. Ordinary distinct-person circular seating stays bridge. Never divide blindly by the number of symmetries. |
| 4.3 #1–6 | Most items directly substitute into one combination. | Level 1 despite the later chapter. Round-4 inverse pool-size questions receive separate levels 2–3. |
| 5.2 #8–10 | Multiple blocked points, diagonal steps, or three blocked points require a table or inclusion-exclusion. | Level 4 bridge. Teach node-by-node path totals before requiring a formula for overlaps. |
| 5.4 #8/#9 | Identical objects in unlabeled containers vs distinct objects in unlabeled containers are different sample spaces. | Level 4. Explicitly settle both kinds of distinguishability; enumeration is the bridge. |
| 6.2 #1–10 | All are mixed restricted counting; no direct drill remains. | Levels 3–4. Offer after the relevant chapter-2 through chapter-5 skills, not as a mandatory first contest checkpoint. |
| 7.2 #9/#10 | Odd divisor count characterizes squares; two hypothetical red-chip changes create two linked constraints. | Levels 3 and 4. Require number-theory and ratio/equation preparation; basic probability ratios alone are insufficient. |
| 8.4 #3 round 4 | Base HTTH with fair coins is direct. Variant gives `p>1/2` and `p²(1−p)²=4/81`, then asks for p. | Base 1, variant 4 and extension. This is a genuine algebra prerequisite jump. |
| 8.5 #1/#4 round 4; 8.6 #2 round 4 | Recover an unknown without-replacement bag composition; or invert `p(1−p)=6/25`. | Level 4 extension variants. A forward probability slot must not silently imply readiness for its inverse equation. |
| 8.6 #3/#4 round 4; 8.5 #8 round 4 | Condition on an observed outcome, then infer which earlier branch occurred. | Levels 3–4. Added a worked equal-outcome bag example in 8.5 that restricts the sample space and derives joint divided by observed probability. |
| 8.6 #10; 9.2 #10 | Unlimited play until a two-point lead or until one alternating player wins. | Extension. Finite tree items earlier in the same sections remain bridge via item-level scopes. |
| 10.2 #9 | `PA·PB>16` becomes an interval defined by a quadratic inequality. | Level 4 extension. Length probability itself is still bridge. |
| 10.3 #5 vs #9/#10 | A concentric bullseye is one area ratio; unequal waiting times and random triangle sides require a coordinate region. | Levels 1 vs 4. Supply a coordinate rectangle and boundary lines as worked bridges. |
| Chapter 11 | Direct weighted averages coexist with indicator expectations, optimal choices and stopping-game payoffs. | Keep the entire chapter as optional extension. Low computational difficulty does not make formal expectation a required milestone. |
| Chapter 12 | Triangle row lookups are direct, while reverse row inference, parity and symbolic identities introduce separate reasoning. | Preserve bridge pattern/subset work; mark formal identity section 12.4 and selected symbolic tasks extension. |
| Chapter 13 | 13.2/13.3 can list small distributions; 13.4/13.5 generalize stars-and-bars and hockey-stick sums. | First two sections bridge; formal general identities extension. An inverse total is not automatically the same level as forward substitution. |
| Chapter 14 | Polynomial expansion, Laurent terms, and coefficient extraction assume exponent arithmetic and distributivity. | Extension throughout, with explicit algebra prerequisites. Preserve levels 1–4 within the optional strand. |
| 15.2 #1 round 4 | Count all-odd digits below 1000 in the base; find the 100th such integer in the variant. | Base 2, variant 4: unranking requires length blocks and digit blocks. |
| Chapter-15 challenge #7 | Average nearest-side distance for a uniform point in a rectangle uses centroid/average-height facts not taught in the counting progression. | Base level 5 extension. Round 4 asks an inner-rectangle probability and is explicitly L3 bridge. |

Collection-level variant overrides now cover the observed drift: fixed endpoint trophies, equal-product inventories, finite probability replacing continuous expectation, and simpler divisibility complements all receive their actual demand. A change of subject with similar demand, such as triangle counting to tilted-square enumeration, remains reviewed L5 with its separate method acknowledged. Scope can change in either direction: repeated-color bracelets replace distinct-object necklaces with extension tasks, while finite first-pair and first-round questions replace indefinite stopping extensions with bridge tasks.

The final ordering audit found four main-route teaching gaps that numerical sorting alone could not fill. Added worked bridges in 1.4 (restricted units digit before the tens digit, L2), 3.2 (two repeated-letter adjacency exclusions and their overlap, L4), 5.4 (two labeled boxes both nonempty, L2), and 12.3 (right-step count identifies one Pascal endpoint, L2). Section 3.2 #10 rounds 3/4 retain their true L5 and are explicit long-run extensions. These examples are actual lesson content, not lowered labels. Earlier new examples also cover small triple distributions in chapter 2, monotonicity of binomial rows in chapter 4, and rotation/reflection classes in chapter 3.

## Checkpoints are not automatically smooth timed bridges

The repository checkpoint spec assigns #1–3 at least 1 minute, #4–7 at least 2, #8–11 at least 3, and #12–15 at least 5. Its **minimum implied total is 43 minutes**, but every counting checkpoint declares 25 minutes. Those authored solve-time bands are not empirical data; they nevertheless contradict the fixed 25-minute target. Timing and placement should be adjusted using the actual level inventory and subsequent student evidence, not the slot bands.

Actual reversals are clear: checkpoint 1 #12 rotational tile orbits and #13 five derangements are level 5, then #14 is a direct two-pair half-turn code construction at level 3. Checkpoint 3 #12 is an unlimited-game recurrence at level 5, while #13 is only two finite stopping branches at level 4. Checkpoint 5 #5 is six years of compound multiplication at level 2, whereas #6 needs tilted-square enumeration at level 4. The calibration keeps these facts instead of assigning levels from question numbers.

Item scope overrides exclude checkpoint 1 #12/#13, checkpoint 3 #12, selected expected-value/continuous-probability tasks in checkpoint 4, and polynomial/expectation/parity-extraction tasks in checkpoint 5 from the default AMC route. They remain available on the textbook route.

## Minimal content fixes made

- Chapter 5, section 5.4 #1/#5/#10: explicitly stated that assignment to a hook/shelf/bracelet matters and order within a container does not. Existing keys are retained; ambiguous physical arrangements previously suggested an extra ordering count.
- Chapter 11, section 11.2 #6 round 4: asks for the number of plays whose **expected total** payout is $420. The old wording asked how long until accumulated payout reaches $420, which invites a stopping-time/overshoot interpretation. Existing key 168 is retained for the clarified intended question.
- Arena set 1 #20: made coin fairness and independence explicit. Arena set 4 #9: made angular uniformity explicit.
- Arena set 2 #21: corrected the explanation's initial line classification to include triangles using one line through A and both BC and BF. The figure and key 15 already passed independent coordinate enumeration.
- Chapter 3 worksheet #9 round 2: corrected a stated smallest number to `6111668`; fixed a false lesson claim about `16/4` not being integral; clarified the reflection fixing a pair of red positions. Independent enumeration checked 33 selected chapter-3 keys, including rotation/reflection classes and constrained repeated letters.
- Chapter 5 challenge #12 round 3: corrected the reflected path's color totals; the numerical key stays unchanged. Two variant assignment stems now explicitly exclude ordering inside containers.
- Chapter 10 worksheet #8 round 3: replaced trigonometry with the equilateral-triangle median and Pythagorean argument. The extra geometry prerequisite remains extension.
- Chapter 15 challenge #12 round 4: strengthened the independence proof using the bijection between permutations and successive relative ranks. Pairwise independence by itself would not justify the required product of three record events.

## Next verification work

The complete stem/difficulty pass is finished. Remaining verification is deeper: independently prove any additional risky keys, inspect the original DJVU visually or with OCR before claiming exact textbook prerequisite alignment, and collect student response data before claiming measured smoothness or an AMC 8 readiness threshold. All 3,195 counting-bank items have editorial difficulty/scope metadata; this is not a claim that all their answer keys have been independently proved.
