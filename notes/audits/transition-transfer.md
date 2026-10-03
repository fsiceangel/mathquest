# Mixed-topic transition exercises

Source: `src/data/transition/transfer.js`. Authored and independently recalculated on 2026-09-30. These are original companion exercises, not reproduced textbook or contest questions.

Two sets contain 12 questions each. In each set, questions 1–4 are L2, 5–10 are L3, and 11–12 are L4. Each set includes `read-data`, `spatial`, `optimization`, `discrete`, and `method-choice`. Skills are metadata and are not disclosed as solution hints in the question. The design emphasizes geometry and algebra rather than adding more routine counting exercises. These levels are editorial judgments, not difficulty estimates measured from student responses.

Each question has four distinct choices and exactly one correct choice. The table records an independent derivation, including attainment and exclusion where a question asks for an optimum. Full solutions are in the source.

| ID | Answer | Independent verification and uniqueness |
| --- | --- | --- |
| transfer-1/1 | 6 | Chart values are 5, 8, 6, 3. Required total 28 minus current total 22 is 6. Only choice 6 matches. |
| transfer-1/2 | 57 | 60 cubes initially; exactly three cubes in a complete vertical column. Subtract 3. |
| transfer-1/3 | 72 cm | Difference of two ratio units is 18; eight units total 72. |
| transfer-1/4 | 3 | Ceiling of 45/8 is six packs, yielding 48; remainder after distribution is 3. |
| transfer-1/5 | 64 square cm | Inclusion-exclusion: 40 + 40 − 16 = 64. The overlap is explicitly a 4 by 4 square. |
| transfer-1/6 | 9 hours | B − A = 8 − h. It is negative exactly when h > 8; the smallest permitted integer is 9. Enumerated positive hours as a separate check. |
| transfer-1/7 | 56 square m | Enumerate positive unordered integer pairs with sum 15: products 14, 26, 36, 44, 50, 54, 56. Only 7 by 8 attains the maximum. |
| transfer-1/8 | 4 | Frequency-weighted total 62 for ten members; new total must be 66 for eleven. Additional score 4. |
| transfer-1/9 | 36 dollars | Retained proportion (2/3)(3/4) = 1/2; 18 divided by 1/2 is 36. |
| transfer-1/10 | 64 cubic cm | Base dimensions 8 by 4, height 2. Both base dimensions lose twice the cut size. |
| transfer-1/11 | 106 dollars | Exhaustively enumerated 0 ≤ s ≤ 20 and 0 ≤ l ≤ 13 under both bead constraints. Unique optimum (s,l) = (2,12), sales 106. Independent upper-bound proof: 2R = 5(2s+3l)+l ≤ 213, so integer R ≤ 106; construction attains it. |
| transfer-1/12 | 72 | Parallel bases give similar opposite triangles with height ratio 1:2. AOB height = 16/6 = 8/3; total height 8; trapezoid area 18×8/2 = 72. Figure coordinates independently have total height 8, diagonal crossing at (6,16/3), top-triangle area 8, and total area 72. |
| transfer-2/1 | 2–3 p.m. | Consecutive changes are +12, −4, +15. The last interval is uniquely greatest. All necessary data are stated in the question. |
| transfer-2/2 | 8 | Enumerated coordinates in {0,1,2}³; exactly three painted faces means all three coordinates are boundary coordinates, giving 2³ = 8. |
| transfer-2/3 | 3 dollars | Subtract the two purchases: notebook = 4; pen = 7 − 4 = 3. |
| transfer-2/4 | 6 | Five loaded crossings carry at most 45; six suffice with groups 9,9,9,9,9,5. Only passenger-carrying crossings are counted, excluding ambiguity about ferry returns. |
| transfer-2/5 | 16/25 | Unshaded interior is 3²; border is 25 − 9 = 16. All four fractional choices differ. |
| transfer-2/6 | 13 dollars | Enumerated nonnegative pack counts; cheapest feasible pair is one four-pack and two seven-packs. Full analytic cases by seven-pack count 0,1,2,≥3 have minimum costs 15,14,13,≥15. |
| transfer-2/7 | 4 km | Hypotenuse of 6–8 right triangle is 10; route length 14; difference 4. |
| transfer-2/8 | Hour 1–2 | Graph coordinates (0,0),(1,2),(2,8),(3,5). On the explicitly stated straight road on one side of home, speeds are absolute slopes 2,6,3. Middle interval is uniquely fastest. Question was corrected during author review to exclude circular routes with the same radial distances. |
| transfer-2/9 | 3000 cubic cm | Fully submerged object's displacement is base area 1000 times rise 3. No spill and vertical sides explicitly ensure the calculation. |
| transfer-2/10 | 7 | Exhaustively checked integer wins 0 through 12: 7w−2(12−w)=39 holds only at w=7. |
| transfer-2/11 | 20 cm | Reflect one destination corner through the side containing P. Triangle inequality lower-bounds every broken route by sqrt(12²+16²)=20. The straight route crosses the allowed side at its midpoint, proving attainment, not merely a bound. |
| transfer-2/12 | 4 pairs | Enumerated unordered positive integer pairs with area 81–99 and perimeter divisible by 10. Minimum perimeter 40; precisely (6,14),(7,13),(8,12),(9,11). A perimeter ≤30 has maximum integer area 56, so smaller admissible perimeter cannot qualify. |

Validation performed: imported the module in Node; checked both lengths, exact level sequences, complete five-skill coverage, and four distinct options for every problem. Independently recalculated the numerical answers using Python integer/Fraction arithmetic, including exhaustive finite searches for both purchase/production optimizations, integer win counts, and admissible rectangle pairs. Numeric answer values rather than stored answer indices were used for these calculations. The root reviewer separately checks the integration and answer mapping.

Figures use the existing declarative `Fig` renderer. `poly` with `closed: false` is supported and renders a polyline. Chart heights, labels, coordinates, and triangle areas were checked mathematically; this author pass does not claim a browser screenshot review of the final page layout.
