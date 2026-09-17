# Introduction to Algebra — checkpoint lanes

Seven checkpoints, `src/data/checkpoints/intro-algebra/cp1.js` … `cp7.js`, after chapters
3, 6, 9, 12, 15, 18, 22. Rules are in `notes/checkpoint-spec.md`; the shapes the Arena
already owns are in the lane table of `notes/arena-spec.md` and must not be echoed.

Conventions in the tables below:

- `archetype` names the idea and the twist that hides it; the `[topic]` tag at the end is
  the `topic` field to use (no topic appears more than 4 times in a checkpoint — keep it).
- `chapter` is the covered chapter the problem leans on; it goes in the `chapter` field.
- `fig` yes means a figure is required (coordinate grid, graph, or geometric setup).
- Every lane is a story or a puzzle in which the algebra is the tool. The stem never says
  "solve", "factor", "simplify" or names a technique. Prealgebra is assumed and free.
- Band D must not be guessable from the choices: build the distractors from the routes a
  student takes when they miss the hidden constraint.
- Near-neighbours across checkpoints are deliberate and are flagged in the lane text
  (e.g. two digit puzzles, two clock puzzles); the twist named is what keeps them apart, so
  do not drift toward the neighbour's twist.

## Checkpoint 1 — after chapter 3, covers 1–3

| slot | band | archetype | chapter | fig |
|---|---|---|---|---|
| 1 | A | A full bottle and a half-full bottle are weighed — find the empty bottle; the twist is that "half full" halves the liquid, not the total [algebra] | 3 | no |
| 2 | A | A cube's volume is given as a power of 2 (say 2^12 cm³) — find its surface area; the edge is a cube root read as a fractional exponent, then 6·edge² stays in exponent form [arithmetic] | 1 | yes |
| 3 | A | Rectangle whose sides are expressions in x with the perimeter known — asked for the area, so solving the equation is only the first step [geometry] | 3 | yes |
| 4 | B | A magician's "think of a number" routine (double, add 10, halve, subtract the start…) — show the routine is an identity and read off the constant, or spot the one step that makes the result depend on the start [algebra] | 2 | no |
| 5 | B | Two candles of different lengths burning at different rates — after how long are they the same height; rates are given as "burns out in h hours", so rate = length/h must be extracted first [rates] | 3 | no |
| 6 | B | A two-digit number whose digit reversal changes it by a stated amount, plus one more relation between the digits — the reversal difference is 9(a−b), so the puzzle is one linear equation (neighbour: cp3 slot 9 is the three-digit, three-variable version) [number theory] | 3 | no |
| 7 | B | A ribbon cut into three pieces with mixed relations (second is 3 more than twice the first, third is …) — asked for the longest piece, which is not the variable [algebra] | 3 | no |
| 8 | C | Test average with an unknown number of tests: "one more test at 84 would make the average X; at 100 it would make it Y" — the two facts pin the count of tests already taken [statistics] | 3 | no |
| 9 | C | Order three towers like 2^300, 3^200, 5^100 in a size story (grains, bytes) — rewrite to a common exponent and compare the bases [number theory] | 1 | no |
| 10 | C | A linear rule from two readings (rental cost at 3 days and at 7 days) — predict a third; only the rate over the gap is needed, the intercept is a detour [patterns] | 3 | no |
| 11 | C | A clock that loses k minutes every real hour, set right at a known time — when it shows a given time, what is the real time (a linear map between clock time and real time) (neighbour: cp2 slot 15 is hands-angle rates, not a slow clock) [rates] | 3 | yes |
| 12 | D | "6 per pen leaves 4 sheep over; 7 per pen leaves one pen with only 3" — count the pens; the integer constraint and the reading of "one pen partly filled" are the whole problem [number theory] | 3 | no |
| 13 | D | A formula a(x+3) + b(x−2) that must agree with 5x + 4 for every input — find a − b by substituting the zeros x = 2 and x = −3 instead of expanding; the trap is matching only one coefficient [algebra] | 2 | no |
| 14 | D | Estate division: the first heir gets 1 coin plus 1/7 of the rest, the second 2 coins plus 1/7 of the rest, … and every share is equal — find the total (equating two consecutive shares is one linear equation; the number of heirs falls out) [fractions] | 3 | no |
| 15 | D | A total written as 2^a + 2^b with a > b in a story about doubling tokens — find a + b, or count the totals below a bound that can be written this way; the argument is uniqueness of binary representation [number theory] | 1 | no |

Newest three chapters (1–3): 15 of 15. Reach-back: not applicable (no chapter before 1);
slots 2, 9, 12, 14 lean on Prealgebra number sense.

Avoid (library stems from chapters 1–3):
- the alternating sum 100 − 99 + 98 − 97 + … (ch1)
- "Dev is three times as old as his sister and 12 years older" and any two-person age stem (ch3; the Arena also owns two-person ages)
- the sum of four consecutive even integers / the dimes-and-quarters jar (ch3; the Arena owns consecutive integers and two-coin puzzles)

## Checkpoint 2 — after chapter 6, covers 1–6

| slot | band | archetype | chapter | fig |
|---|---|---|---|---|
| 1 | A | A recipe scaled by a ratio with a unit conversion in the middle (cups to millilitres, or a serving count that is not a whole multiple of the original) [ratios] | 6 | no |
| 2 | A | The final price after a percent discount and then a percent tax is given — recover the sticker price (undo two multiplicative steps; the trap is netting the two percents) [percents] | 6 | no |
| 3 | A | A rectangle cut by one horizontal and one vertical line into four rectangles; three areas known, find the fourth — opposite products are equal, xy·wz = xz·wy [geometry] | 4 | yes |
| 4 | B | A quiz scores +5 right, −2 wrong, 0 blank; the number of questions, blanks and the score are given — how many right (one unknown once blanks are removed; the trap is treating blanks as wrong) [algebra] | 3 | no |
| 5 | B | A ratio with a transfer: marbles move from one bag to the other so the total is fixed and the ratio goes from 5:3 to 1:1 (or similar) — find the total; the fixed total is the second equation [ratios] | 6 | no |
| 6 | B | A price rises x% then falls x% and ends 9% (or 4%, 16%) below where it started — find x; (1+x)(1−x) = 1 − x², so x² is read straight off [percents] | 6 | no |
| 7 | B | Bacteria that triple every 20 minutes fill a dish at a known time — when was it 1/27 (or 1/9) full? Count exponents backward; the trap is dividing the time by 27 [patterns] | 1 | no |
| 8 | C | Three unknown prices, three basket totals — asked for a fourth basket that is a linear combination of the three (find the combination; the individual prices are never needed and may not even be determined) [algebra] | 5 | no |
| 9 | C | Race handicaps: A beats B by 10 m over 100 m, B beats C by 10 m over 100 m — by how much does A beat C? Compose the speed ratios; the trap is adding metres [ratios] | 6 | no |
| 10 | C | A rectangle's length grows by a and width shrinks by b with area unchanged; a second such change is also area-neutral — the xy terms cancel and two linear equations in the sides remain [geometry] | 4 | yes |
| 11 | C | Insert one pair of parentheses into a fixed expression like 2·3 + 4·5 − 6 — how many distinct values can result, or largest minus smallest? Order of operations as a puzzle; brute-force the key [logic] | 1 | no |
| 12 | D | "I am twice as old as you were when I was as old as you are now"; the sum of the two ages is given — two equations whose invariant is the constant age gap (not the Arena's now-and-later two-person age shape: the reference time is defined by the gap itself) [algebra] | 5 | no |
| 13 | D | Four unknown weights; the six pairwise sums are listed unlabelled — recover the largest weight (the two extreme sums identify the extreme pairs; the total is the six sums over 3; the middle two sums are the ambiguity) [logic] | 5 | no |
| 14 | D | A faded receipt: three items at whole-cent prices, three line totals given, one digit of one total smudged — find the smudged digit; only one digit makes the solution whole cents [logic] | 5 | no |
| 15 | D | Clock hands: at what time between 3 and 4 o'clock are the hands first opposite (or first overlapping)? The minute hand gains 5.5° per minute — a rate problem in disguise, with the clock face as the figure [rates] | 6 | yes |

Newest three chapters (4–6): 12 of 15. Reach-back (1–3): 3 (slots 4, 7, 11).

Avoid (library stems from chapters 1–6):
- chickens and cows, 15 heads and 44 legs (ch5) — any two-species heads-and-legs count
- a + b = 7, b + c = 9, a + c = 8 and the pairwise-sum triple (ch5; slot 13 is four items with unlabelled sums, which is a different problem — keep it that way)
- two successive discounts 20% then 25% (ch6) and the brother–sister ages 4:7 summing to 33 (ch6)

## Checkpoint 3 — after chapter 9, covers 1–9

| slot | band | archetype | chapter | fig |
|---|---|---|---|---|
| 1 | A | A wire strung between two lattice-point posts on a grid (a line through two points) — where does it meet the ground line (the x-axis)? Slope, then intercept; the trap is reporting the y-intercept [geometry] | 8 | yes |
| 2 | A | A ride with a fixed fee plus a per-km rate must stay under a budget — the farthest whole-km ride (a linear inequality, then round down; the trap rounds up) [rates] | 9 | no |
| 3 | A | A square lawn of area 45 (or 72, 98) — its exact perimeter in the form k√m; a story that needs √45 = 3√5 [number theory] | 1 | no |
| 4 | B | Worker-days with a mid-job change: 8 workers planned for 15 days; after 5 days two leave — how many extra days? Inverse proportion applied to the remaining work only [rates] | 7 | no |
| 5 | B | A fence line such as 3x + 4y = 24 closes off a triangular corner with the two axes — the area of the corner from the intercepts alone (not the Arena's three-vertex grid triangle) [geometry] | 8 | yes |
| 6 | B | Membership plan vs pay-per-visit: two linear cost rules — the break-even count, then the number of visits at which one plan is cheaper by a stated amount [algebra] | 5 | no |
| 7 | B | Joint proportion: carpet cost ∝ length × width (or work ∝ people × hours) — one factor up 50%, the other down 20%: the net factor, then a value [ratios] | 7 | no |
| 8 | C | Maximize a·b when a + 2b = N over whole numbers, in a purchasing or enclosure story — the vertex of a parabola, then step to the nearest integers (the trap is the unconstrained a = b) [number theory] | 9 | no |
| 9 | C | A three-digit number: digit sum, one digit equal to the sum of the other two, and reversing changes it by a stated amount — a three-variable system in which the reversal fact is 99(a − c) (neighbour: cp1 slot 6 is two-digit, one variable) [number theory] | 5 | no |
| 10 | C | A trip at two hypothetical speeds: "5 km/h faster arrives 1 h early, 5 km/h slower arrives 2 h late" — two equations in v and t in which vt cancels; find the distance [rates] | 7 | no |
| 11 | C | A rectangle with two adjacent sides lying along lines like y = 2x + 1 and its perpendicular through a given vertex — the fourth vertex or the area via perpendicular slopes [geometry] | 8 | yes |
| 12 | D | Two constraints (a budget and a space limit) on two products; maximize profit over whole numbers — the best integer point is not always the corner, and the choices include the corner's rounded value [algebra] | 9 | no |
| 13 | D | Ten distinct positive integers sum to S — the smallest possible largest one; the bound 1 + 2 + … + 9 + x ≤ S must be matched by a construction (extremal argument) [number theory] | 9 | no |
| 14 | D | Count lattice points strictly inside the triangle cut off by a line like 3x + 5y = 30 and the axes — column by column with floors; the boundary points are the trap (figure shows the triangle on a grid, not the points) [counting] | 8 | yes |
| 15 | D | Escalator: walking up counts 20 steps, running at twice the pace counts 30 — how many steps are visible? Relative rates with a hidden escalator speed that cancels [rates] | 7 | no |

Newest three chapters (7–9): 12 of 15. Reach-back (1–6): 3 (slots 3, 6, 9).

Avoid (library stems from chapters 1–9):
- two trains 210 miles apart travelling toward each other (ch7; the Arena also owns two travellers meeting)
- Priya paints a mural in 12 days, with a friend they finish in … (ch7; the Arena owns two-workers-together)
- temperature 18° at 2 pm falling 3° per hour (ch8), and "two whole numbers add up to 12, largest product" (ch9)

## Checkpoint 4 — after chapter 12, covers 1–12

| slot | band | archetype | chapter | fig |
|---|---|---|---|---|
| 1 | A | A pointer turns 90° counterclockwise each move (multiplying by i), starting at (1, 0) — where is it after 2026 moves? The i^n cycle, with the four positions drawn [patterns] | 12 | yes |
| 2 | A | √(31·29 + 1) or √(47·53 + 9) posed as the side of a square whose area is "a product plus a small square" — (a−b)(a+b) + b² = a², no multiplying out [arithmetic] | 11 | no |
| 3 | A | A rectangle whose length exceeds its width by a given amount, area given — asked for the perimeter (factor, reject the negative root, then answer the unasked quantity) [geometry] | 10 | yes |
| 4 | B | Two numbers with a known sum and product from a story — their positive difference via (x−y)² = (x+y)² − 4xy, without solving for either [algebra] | 10 | no |
| 5 | B | "p% of A equals q% of B" together with A + B = S — find A (the cross-percent equality is one ratio, then a split) [percents] | 6 | no |
| 6 | B | Scaling a tiled square by a ratio k:1 raises the tile count by 44% (or the area by 69%) — find k from k² = 1.44; the trap is k = 1.44 or 1.22 [ratios] | 6 | no |
| 7 | B | (x + yi)(2 − i) = 5 + 5i as a "secret pair" story — match real and imaginary parts to a 2×2 system; report x + y [algebra] | 12 | no |
| 8 | C | 100² − 99² + 98² − 97² + … + 2² − 1² in a checkerboard or tile story — each pair is a difference of squares and what remains is an arithmetic series [arithmetic] | 11 | no |
| 9 | C | A uniform border of width w around a rectangular photo; the border's area equals (or is a stated fraction of) the photo's — a quadratic in w after expansion; the figure shows the frame with the photo's sides labelled [geometry] | 10 | yes |
| 10 | C | A round trip on a river: distance, still-water speed and total time known — find the current; d/(v+c) + d/(v−c) = T collapses to c² = … [rates] | 7 | no |
| 11 | C | A robot steps 1 east then turns 90° left before every step — its net displacement after n steps is 1 + i + i² + … + i^(n−1); the sum of a cycle, and n mod 4 decides it (not slot 1's single power) [patterns] | 12 | no |
| 12 | D | 1/x + 1/y = 1/12 in positive integers (two hoses or two resistors) — rewrite as (x−12)(y−12) = 144 and count by divisors; the trap is missing the "add the constant and factor" step and counting the negative factor pairs [number theory] | 11 | no |
| 13 | D | x² − kx + 36 (or similar) has two positive integer roots — the sum of all possible k (Vieta over factor pairs; whether repeated roots count is the casework) [algebra] | 10 | no |
| 14 | D | A square root of 21 + 20i with integer parts: (a + bi)² matched gives a² − b² and 2ab — two interacting conditions with a sign choice; report a + b for the root with a > 0 [algebra] | 12 | no |
| 15 | D | The largest prime factor of 3^8 − 1 (or 2^12 − 1, 5^6 − 1) by repeated difference of squares and a sum or difference of cubes — the trap stops factoring one step early [number theory] | 11 | no |

Newest three chapters (10–12): 12 of 15. Reach-back (1–9): 3 (slots 5, 6, 10).

Avoid (library stems from chapters 1–12):
- the product of two consecutive positive integers is 72 (ch10; the Arena also owns this) and 51² − 49² (ch10/11)
- x + y = 10, xy = 21 → x² + y², and a + b = 5, ab = 6 → a³ + b³ (ch11) — sums of powers from sum-and-product are the library's shape; slot 4 asks for the difference, nothing else
- xy + 2x + 2y = 32 count the pairs (ch11), and i^47 / i + i² + i³ + i⁴ as bare computations (ch12)

## Checkpoint 5 — after chapter 15, covers 1–15

| slot | band | archetype | chapter | fig |
|---|---|---|---|---|
| 1 | A | A sprinkler at (a, b) reaches r metres — is a given spot inside, on, or outside its reach, or which of five listed spots gets wet? Squared distance against r², no square roots [geometry] | 14 | yes |
| 2 | A | A ball thrown upward from a balcony just grazes a ceiling (touches the height H exactly once) — the launch speed from a zero discriminant [rates] | 13 | no |
| 3 | A | Profit P(n) = −n² + 30n − 200 (or similar) is positive for how many whole production levels n? A quadratic inequality read as a count of integers strictly between the roots [counting] | 15 | no |
| 4 | B | A parabolic arch with feet at x = 0 and x = 20 and a known peak — its height at a given x; use y = a·x(x − 20), the intercept form, not vertex form [geometry] | 14 | yes |
| 5 | B | A rectangle with area 6 and one side √3 + 1 — the other side and then the perimeter; rationalize and simplify to a + b√3 [algebra] | 11 | no |
| 6 | B | A spiral in which each step multiplies the position by (1 + i): after how many steps is the distance from the origin 16, or first past 100? The modulus multiplies by √2 each step (not the fixed-length rotation of cp4) [patterns] | 12 | no |
| 7 | B | A relation like x² + y² − 2x + 4y + 5 = 0 hidden in a story ("the only pair that satisfies…") — complete two squares, a sum of squares is zero, report x + y [logic] | 15 | no |
| 8 | C | A quadratic with parameter k in which one root is twice the other (or exceeds it by 3) — find k from the root relation plus Vieta; the trap uses only one Vieta relation [algebra] | 13 | no |
| 9 | C | A straight path crosses a parabolic arch at two points — the distance between the crossings (solve line = parabola, then the distance formula; the trap reports the horizontal gap) [geometry] | 14 | yes |
| 10 | C | Stopping distance ∝ speed²: speed up 20%, by what percent does stopping distance grow, and what speed doubles it? Direct proportion with a square, then a square root [rates] | 7 | no |
| 11 | C | x² + 6x + y² − 4y = 12 in integers — complete the squares to a circle of radius 5 and count the lattice points on it (the 3-4-5 structure gives 12; the trap counts only the axis points) [counting] | 13 | no |
| 12 | D | Total cost = a·x + b/x (crates per trip against the number of trips) — the minimum via (√(ax) − √(b/x))² ≥ 0, giving 2√(ab); the choices include the value at a "nice" x [algebra] | 15 | no |
| 13 | D | For how many integers n is n² + 8n + 20 (or n² + 6n + 13) a perfect square? Complete the square, then a difference of squares with a small constant; negative n are the trap [number theory] | 13 | no |
| 14 | D | A circle tangent to both axes passes through (1, 2) — the sum (or product) of the possible radii; (r−1)² + (r−2)² = r², then Vieta on that quadratic, no need to find either circle [geometry] | 14 | yes |
| 15 | D | Roots r, s of x² − (k − 2)x + k (or similar) — the k that minimizes r² + s²; Vieta then the vertex, and the discriminant must be checked at that k (choose numbers so the vertex k either gives real roots or the check is the point of the problem) [algebra] | 13 | no |

Newest three chapters (13–15): 12 of 15. Reach-back (1–12): 3 (slots 5, 6, 10).

Avoid (library stems from chapters 1–15):
- the ball kicked with h = −5t² + 30t (ch13) and the two consecutive odd integers with product 143 (ch13)
- 36 m of fence for a rectangle / 100 m of fence against a garden wall (ch15) — any fenced-enclosure maximum
- "how many integers satisfy x² − 4x − 12 < 0" as a bare inequality (ch15), and the parabola through (0, 5) and (6, 5) asked for its axis (ch14)

## Checkpoint 6 — after chapter 18, covers 1–18

| slot | band | archetype | chapter | fig |
|---|---|---|---|---|
| 1 | A | Two machines, "double" and "add 3", run in either order — for which input do both orders agree? f(g(x)) = g(f(x)) is one linear equation; the trap answers "never" [logic] | 16 | no |
| 2 | A | A box's volume as the product of three linear dimensions in x — the degree and the coefficient of x² (or the constant term) without expanding everything [patterns] | 18 | no |
| 3 | A | The graph of f is a broken line through labelled lattice points — read f(f(2)) or f(3) − f(−1) straight from the picture; the trap reads x for y [geometry] | 17 | yes |
| 4 | B | Three successive percent changes, one of them an increase — the single equivalent percent change (a composition of scalings; the trap adds the percents) [percents] | 6 | no |
| 5 | B | A rule f(n + 1) = 2f(n) − 1 (or 3f(n) − 2) with f(1) given, as a chain-letter or tree story — f(10); the twist is that f(n) − 1 is geometric, so no need to iterate [patterns] | 16 | no |
| 6 | B | A triangle-shaped graph of f is shown; the graph of y = f(x − 2) + 1 (or y = 2f(x)) — where does a named vertex land, or what is the new enclosed area? The sign of the shift is the trap [geometry] | 17 | yes |
| 7 | B | A quadratic rule with p(0), p(1), p(2) given as a table of outputs — find p(5); constant second differences, or a 3×3 system [patterns] | 5 | no |
| 8 | C | f(x) + 2f(1/x) = 3x for all x ≠ 0 — find f(2) by substituting x and 1/x and solving the pair; the trap plugs in x = 2 alone [algebra] | 16 | no |
| 9 | C | The coefficient of x³ in (1 + x)²(1 + 2x)³ as a "ways to pick" reading — choose which factors contribute an x; never expand [counting] | 18 | no |
| 10 | C | The graph of f is shown — how many x satisfy f(x) = x? Draw y = x and count crossings (fixed points), including the one that sits on a flat piece [geometry] | 17 | yes |
| 11 | C | Tables of f and g on {1, 2, 3, 4} — for how many x is f(g(x)) = g(f(x))? Brute-force the key in node; the trap confuses composition with product [logic] | 16 | no |
| 12 | D | A polynomial with integer coefficients has p(2) = 5 and p(6) = 9 (or similar) — which listed value of p(10) is impossible? a − b divides p(a) − p(b) because a^n − b^n factors; the solution must show the divisibility [number theory] | 11 | no |
| 13 | D | f(xy) = f(x) + f(y) on positive integers with f(2) and f(3) given (a "score of a product" story) — f(72), and the twist f(1) = 0 from f(1·1) if the choices need it [algebra] | 16 | no |
| 14 | D | The graph of f is a broken line shown on a grid — count the solutions of f(f(x)) = 0: first the roots of f, then the preimages of each root; a root with no preimage is the trap [geometry] | 17 | yes |
| 15 | D | (x² + ax + b)(x² + cx + d) = x⁴ + x² + 1 (or x⁴ + 4) with integer a, b, c, d — match coefficients; integrality forces the pair; report a + b + c + d or one coefficient, and the choices include the value from a wrong sign choice [algebra] | 18 | no |

Newest three chapters (16–18): 12 of 15. Reach-back (1–15): 3 (slots 4, 7, 12).

Avoid (library stems from chapters 1–18):
- f(g(x)) = 6x + 7 with g(x) = 2x + 1, find f; and f(2x) = x + 5, find f(6) (ch16)
- the Fibonacci-style f(n) = f(n−1) + f(n−2) table and the custom operation a △ b = ab − a (ch16)
- the graph with the dashed line y = 1, count solutions (ch17), and the sum of the coefficients of (x² − 3x + 1)² (ch18)

## Checkpoint 7 — after chapter 22, covers 1–22

| slot | band | archetype | chapter | fig |
|---|---|---|---|---|
| 1 | A | x is not an integer and ⌊x⌋ + ⌈x⌉ = 9 (a "rounded down plus rounded up" story) — which of five values could x be, or how many integers lie in its range [number theory] | 20 | no |
| 2 | A | A rumor doubles every hour from 5 people — after how many full hours does it first exceed 5000? "How many doublings" is a log read as a count, and the ceiling is the trap [patterns] | 19 | no |
| 3 | A | A rectangle with area 1 and perimeter 6 — the sum of the squares of its sides; the sides are x and 1/x, so x + 1/x = 3 and the identity does the rest [algebra] | 22 | no |
| 4 | B | How many digits does 2^20 · 5^18 (or 4^10 · 5^16) have? Pair the 2s with the 5s to leave a power of 10 times a small number; the trap is 2^20·5^18 ≈ 10^19 [number theory] | 19 | no |
| 5 | B | A repeating decimal with a delay, 0.1(6) or 0.2(45) repeating, as a fraction in lowest terms — an infinite geometric series whose first term and ratio are read from the digits [fractions] | 21 | no |
| 6 | B | The V-graph y = |x − a| − b and a horizontal line y = c — the area of the triangle they enclose; the base comes from solving |x − a| = b + c, and the figure shows the V and the line [geometry] | 20 | yes |
| 7 | B | For how many integers x is (x + 1)/(x − 2) (or (2x + 3)/(x − 1)) an integer? Rewrite as 1 + 3/(x − 2); divisors of 3, negatives included [number theory] | 20 | no |
| 8 | C | A square with a quarter-scale copy nested in a corner forever (figure shows three levels) — the total shaded area S satisfies S = a + S/4; self-similarity as one equation, not a summed series [geometry] | 22 | yes |
| 9 | C | √a − √b = c is known for a pair in a story, together with a − b — find √a + √b by the conjugate product (a − b = (√a − √b)(√a + √b)), then a itself [algebra] | 11 | no |
| 10 | C | Odd numbers arranged in rows 1 / 3 5 / 7 9 11 / … — the sum of row n (it is n³) or the first number in row 20 (row lengths are an arithmetic series) [patterns] | 21 | no |
| 11 | C | ⌊√1⌋ + ⌊√2⌋ + … + ⌊√50⌋ (or the count of n ≤ 100 with ⌊√n⌋ odd) — group by the value of the floor; the trap is the last, short block [counting] | 20 | no |
| 12 | D | x + y + z = 6, x² + y² + z² = 14, xyz = 6 from a "three numbers" story — find x³ + y³ + z³ through the symmetric identities; the trap is trying to find x, y, z [algebra] | 22 | no |
| 13 | D | A payment plan pays k · 2^k on day k (or k · 3^k) — the total after n days; multiply by the ratio and subtract (shift-and-subtract), leaving a geometric series (not the Arena's telescoping shapes) [patterns] | 21 | no |
| 14 | D | A warehouse placed on a straight road with shops at positions 1, 2, …, n (figure: the road with the shops) — minimize |x − 1| + … + |x − n|; the median argument, and for even n the minimum is attained on a whole interval [logic] | 20 | yes |
| 15 | D | For how many positive integers k ≤ 100 is √(k + √(k + √(k + …))) an integer? The self-similar equation x² − x = k means k = x(x − 1); count consecutive-integer products up to the bound [number theory] | 22 | no |

Newest three chapters (20–22): 12 of 15. Reach-back (1–19): 3 (slots 2, 4, 9).

Avoid (library stems from chapters 1–22):
- paper folding 0.1 mm thick (ch19) and the courier charging per started kilogram (ch20)
- the log stack with one fewer log per row (ch21; the Arena owns arithmetic-series stories) and 1/(2·3) + … + 1/(9·10) (ch21; the Arena owns telescoping)
- √(30 + √(30 + …)) and 3 + 1/(3 + …) as bare evaluations (ch22), and x − 1/x = 3 → x² + 1/x² (ch22; slot 3 hides it in a rectangle — keep the story)
