# Prealgebra — checkpoint lanes

One row per slot. `archetype` fixes the idea and the twist that hides it; the author
picks the scenario, the numbers and the key. `chapter` is the covered chapter the
problem leans on (the `chapter` tag in the file); the `topic` named in the archetype
column is the `topic` tag — keep it, the topic mix is balanced on purpose (never more
than 4 of 15 on one topic). `fig` says whether a figure is required.

Rules recap (full text in `notes/checkpoint-spec.md`): bands A #1–3, B #4–7, C #8–11,
D #12–15; choices ascending; every distractor a named wrong route; stems never name
the technique; nothing reuses a library stem, number set or figure; keys verified
by brute force. No archetype below repeats another checkpoint or an arena lane — do not
drift into a neighbor's row.

## Checkpoint 1 — after chapter 3, covers 1–3

slot | band | archetype | chapter | fig
---|---|---|---|---
1 | A | (arithmetic) Two friends add $2+4+\cdots+40$ and $1+3+\cdots+39$; asked how much bigger one total is — pair term by term, no series formula; the "sum both" trap. | 1 | no
2 | A | (number theory) Two-digit numbers whose prime factorization uses exactly the primes 2 and 7, each at least once; asked how many — list by powers of 2; the "any multiple of 14" trap. | 3 | no
3 | A | (patterns) How many perfect squares up to 400 end in the digit 6 — a square's units digit depends only on the root's units digit (4 or 6); the "roots up to 400" trap. | 2 | no
4 | B | (counting) Numbers from 1 to 100 that are multiples of 6 but NOT of 4 — complementary count through the lcm 12, not a listing; "subtract multiples of 4" trap. | 3 | no
5 | B | (algebra) Three unknown numbers given only their three pairwise sums; asked for the largest one — add all three, halve, subtract each pair; "largest pairwise sum halved" trap. | 1 | no
6 | B | (patterns) A 2×2 block circled on a 7-column number grid (figure, only part of the grid shown); the block's four numbers have a given sum; asked for one corner — offsets 1, 7, 8 give $4x+16$. | 1 | yes
7 | B | (number theory) Two primes sum to an odd number like 99; asked for their product — parity forces one prime to be 2; "two odd primes" distractors. | 3 | no
8 | C | (logic) 3×3 grid (figure) in which every row and every column has the same product; several cells filled with small composites; find the empty cell by prime-factor bookkeeping across a row and a column. | 3 | yes
9 | C | (arithmetic) Trailing zeros of $1\times2\times\cdots\times25$ — count factors of 5, with 25 contributing two; "count multiples of 5" and "count multiples of 10" traps. | 3 | no
10 | C | (arithmetic) Digit sum of $10^{20}-2026$ (or similar) — the borrow chain makes a long run of 9s; asked for the digit sum, not the number; off-by-one on the run length. | 2 | no
11 | C | (arithmetic) Order powers with different bases and exponents ($2^{40}, 3^{30}, 5^{20}, 7^{10}$ style); asked which is largest — rewrite to a common exponent; "largest base" and "largest exponent" traps. | 2 | no
12 | D | (number theory) Two numbers have gcd 6 and lcm 360 (or similar); asked for the smallest possible SUM — enumerate coprime factor pairs of lcm/gcd, compare sums; "gcd + lcm" and the product identity are the traps. | 3 | no
13 | D | (logic) Write a number like 45 as a sum of consecutive integers, negatives allowed, using as many terms as possible; asked for the number of terms — the block $-44,\dots,44$ cancels (extremal + invariant); "positive terms only" trap. | 1 | no
14 | D | (patterns) Count squares of every size on a 4×6 grid (figure) — the square-grid sum of squares must be generalized to $(4-k)(6-k)$; "unit squares only" and "4×4 formula" traps. | 2 | yes
15 | D | (number theory) Smallest n such that $1+2+\cdots+n$ is a multiple of 100 — $n(n+1)$ must carry 8 and 25 on different factors (two interacting constraints); "n = 25" and "n = 100" traps. | 3 | no

Newest-three (ch 1–3) count: 15. Reach-back count: not applicable — nothing precedes the
newest three at cp1; as a proxy, lanes leaning on ch 1–2: 8 (slots 1, 3, 5, 6, 10, 11, 13, 14).

Avoid (library stems a lazy author drifts into): "How many multiples of 8 from 1 to 100";
"$N = 2^3\cdot3^2\cdot5$, how many divisors"; "units digit of $7^{2026}$"; "$25^2-24^2$
without squaring".

## Checkpoint 2 — after chapter 6, covers 1–6

slot | band | archetype | chapter | fig
---|---|---|---|---
1 | A | (fractions) A tank is $\frac34$ full; after a stated number of liters is drawn it is $\frac58$ full; asked for the capacity — the difference of the two fractions is what the drawn amount represents; "divide by $\frac34$" trap. | 4 | no
2 | A | (arithmetic) Moving a number's decimal point one place right increases it by a stated amount; asked for the number — the increase is $9x$, not $10x$. | 6 | no
3 | A | (number theory) Of the unit fractions $\frac12, \frac13, \dots, \frac1{20}$, how many give terminating decimals — the denominator's primes must be only 2 and 5; "even denominators" trap. | 6 | no
4 | B | (algebra) Two inequalities in one unknown, one with the variable on both sides, fence in a window; asked how many integers satisfy both — strict vs non-strict ends, off-by-one. | 5 | no
5 | B | (fractions) Number line (figure) with two marked fractions and twelfth ticks; asked how many fractions with denominator 12 lie strictly between them AND are in lowest terms — the reducible twelfths are the trap. | 4 | yes
6 | B | (arithmetic) A 10×10 grid (figure) with a decimal fraction of its cells shaded; then a fraction of the shaded cells is unshaded; asked how many cells stay shaded — decimal times fraction; "subtract the fraction" trap. | 6 | yes
7 | B | (algebra) Rectangle (figure, sides labeled $w$ and $2w+3$) with a given perimeter; asked for the AREA — solving for $w$ is only the first step; "answer $w$" and "used $2w+3$ as the perimeter" traps. | 5 | yes
8 | C | (fractions) Reverse fraction-of-a-group: $\frac25$ of a class are boys, half the class wear glasses, $\frac34$ of the boys do; asked what fraction of the GIRLS do — subtract, then divide by the girls' share; "divide by the whole" trap. | 4 | no
9 | C | (number theory) A two-digit number whose reversal exceeds it by a stated multiple of 9, with the digit sum given; asked for the number — the reversal difference is $9(b-a)$, then a two-fact system; "reversed answer" trap. | 3 | no
10 | C | (patterns) A quantity is multiplied by $\frac23$ (or similar) at each step; asked the first step at which it drops below a decimal threshold — powers of a fraction against a decimal; off-by-one on the step. | 4 | no
11 | C | (algebra) Same total two ways: at $k$ each the group is short by $a$, at $m$ each there is $b$ left over; asked for the TOTAL cost, not the head count — the head count is the tempting wrong answer. | 5 | no
12 | D | (number theory) How many of $\frac1{60}, \frac2{60}, \dots, \frac{59}{60}$ are in lowest terms — complement of "shares a factor with 60" by inclusion–exclusion over three primes; "subtract multiples of 2, 3, 5" trap. | 3 | no
13 | D | (arithmetic) Choose three numbers from a signed list (two large negatives, small positives) to make the largest product — two negatives beat three positives; casework by sign pattern; "three largest" trap. | 1 | no
14 | D | (number theory) How many digits does $2^{20}\cdot5^{18}$ (or similar) have — pair factors into a power of 10 times a small leftover; "20 digits" and "38 digits" traps. | 2 | no
15 | D | (logic) Three cups; each in turn pours into the other two as much as each already holds; all three end equal; asked for the starting amount of the first cup — work backwards through three doubling transfers; "one transfer only" trap. | 5 | no

Newest-three (ch 4–6) count: 11 (slots 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 15). Reach-back
count: 4 (slots 9, 12, 13, 14).

Avoid: "Ribbon 7.2 m cut into 0.45 m pieces"; a bare "solve $3(2x-5)=4x+7$"; "which of
these fractions terminates as a decimal"; "$x\times\frac25=8$, find $x$".

## Checkpoint 3 — after chapter 9, covers 1–9

slot | band | archetype | chapter | fig
---|---|---|---|---
1 | A | (rates) A speed given in km per hour, asked in meters per second (or the reverse) — two unit conversions chained; "×1000 only" and "÷60 only" traps. | 7 | no
2 | A | (percents) 15% of a number exceeds 10% of the same number by a stated amount; asked for the number — the difference of the percents is the working percent; "divide by 15%" trap. | 8 | no
3 | A | (arithmetic) A square (figure) whose area is a non-square integer; asked which whole number its PERIMETER is closest to — estimate the root to one decimal, then ×4; "side" and "×2" traps. | 9 | yes
4 | B | (rates) A tap delivers a decimal volume in a number of seconds; asked the MINUTES needed for a larger volume — scale by the volume ratio, then convert seconds; "answer in seconds" trap. | 7 | no
5 | B | (percents) A is 25% more than B; asked what percent less B is than A — the base switches (20%, not 25%); "same percent" trap. | 8 | no
6 | B | (number theory) Two numbers are in ratio 4:9 and have gcd 7; asked for their sum (or lcm) — coprime ratio parts make the scale factor equal the gcd; "gcd × 13 = the lcm" style traps. | 3 | no
7 | B | (ratios) Red:blue = 2:3 in a jar of stated size; a fraction of the red are removed; asked for the new ratio — turn the ratio into counts first; "subtract from the ratio parts" trap. | 7 | no
8 | C | (percents) Marked up 60% then sold at 25% off; asked the profit as a percent of COST — chain the multipliers; "60 − 25 = 35" and "percent of tag price" traps. | 8 | no
9 | C | (arithmetic) Two squares of non-square integer areas set side by side on a line (figure); asked the total width in simplest radical form — simplify each root, then combine like radicals; "$\sqrt{a+b}$" trap. | 9 | yes
10 | C | (ratios) Moving a fixed number of items from one jar to the other changes the ratio from 3:2 to 1:1; asked for the TOTAL — set up $3x-k=2x+k$; "answer $x$" and "one jar" traps. | 7 | no
11 | C | (rates) Out at one speed, back at double the speed; asked the average speed for the round trip — no distance given, choose one; the average of the two speeds is the trap. | 7 | no
12 | D | (ratios) $a:b$ and $b:c$ given with unlike middle terms; $a+b+c$ known only to lie in a range; asked for $c$ — merge the ratios, then the part count forces the total (two interacting constraints); "unmerged parts" trap. | 7 | no
13 | D | (algebra) Items at a decimal price; a percent discount applies only when the pre-discount total passes a threshold; asked the most items affordable on a budget — two branches, and the discount can bring a larger count under budget; "no discount" trap. | 5 | no
14 | D | (fractions) How many fractions with denominator at most 12, in lowest terms, lie strictly between $\frac25$ and $\frac12$ — organized listing denominator by denominator with decimal comparison; "count reducible ones" trap. | 4 | no
15 | D | (percents) 70% like A, 80% like B, 90% like C (three-circle Venn outline, figure); asked the SMALLEST possible percent liking all three — bound via complements: at most 10+20+30 = 60% miss at least one; "multiply the percents" trap. | 8 | yes

Newest-three (ch 7–9) count: 12 (slots 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 15). Reach-back
count: 3 (slots 6, 13, 14).

Avoid: "red:blue = 3:4 and blue:green = 4:7, find red:green" as a bare merge; "price goes up
50% then down 50%"; "$\sqrt{20}$ is between which two consecutive integers"; "after a 20%
discount a backpack costs \$48, original price".

## Checkpoint 4 — after chapter 12, covers 1–12

Geometry is the newest block but the topic cap still holds: only the four rows tagged
(geometry) carry that tag; the other ch 10–12 rows are tagged by the idea that does the
work (percents, ratios, counting, algebra, number theory, patterns).

slot | band | archetype | chapter | fig
---|---|---|---|---
1 | A | (geometry) Angle between the hands of a clock at a half-hour time — the hour hand has moved off its hour mark; "hour hand on the number" trap. | 10 | no
2 | A | (percents) A square's side grows by 10%; asked the percent growth of its AREA — 21%, not 20%; "double the percent" trap. | 11 | no
3 | A | (geometry) Rhombus (figure) with both diagonals labeled; asked the perimeter — the diagonals bisect each other at right angles, so half-diagonals form a right triangle; "full diagonals as legs" trap. | 12 | yes
4 | B | (ratios) Two concentric circles with radii in ratio 2:5; asked what fraction of the larger disk the ring is — area scales with the square of the ratio; "$\frac35$" trap. | 11 | no
5 | B | (patterns) A robot walks straight, turns 24° left, repeats; asked how many turns until it first faces its starting direction again — exterior angles total 360; "interior angle" and "360/24 − 1" traps. | 10 | no
6 | B | (arithmetic) A square with a whole-number side has a diagonal strictly between two given lengths; asked how many sides are possible — divide the bounds by $\sqrt2$ and round inward; end-point traps. | 9 | no
7 | B | (counting) Grid points on the boundary of a rectangle with whole-number sides; asked how many — the perimeter count with each corner taken once; "area", "perimeter", "perimeter + 4" traps. | 11 | no
8 | C | (geometry) Five-pointed star (figure); asked the SUM of the five tip angles — exterior angles of the inner pentagon, or two triangle sums; "540" and "360" traps. | 10 | yes
9 | C | (percents) A rectangle's length rises 25% and its width falls 20%; the area is unchanged — asked the percent change in the PERIMETER for stated dimensions; the "0%" area answer is the trap. | 8 | no
10 | C | (ratios) A diagonal splits a trapezoid (figure, parallel sides labeled) into two triangles; asked the ratio of their areas — same height, so it equals the ratio of the bases; "ratio of the legs" and "squared ratio" traps. | 11 | yes
11 | C | (algebra) A ladder's foot slides out and its top drops a stated distance; asked how far the foot moved — Pythagoras twice with two different triples; "top drop = foot slide" trap. | 12 | no
12 | D | (geometry) A 30-60-90 and a 45-45-90 triangle share a side (figure); one outer length given; asked another length in radical form — chain through the shared side; "wrong leg is shared" trap. | 12 | yes
13 | D | (number theory) Right triangles with whole-number sides having one leg equal to 12; asked how many — $144=(c-b)(c+b)$ with both factors even, casework on factor pairs; "only 5-12-13" and "count 6-8-10 scaled" traps. | 12 | no
14 | D | (counting) Lattice points strictly INSIDE a circle of radius 2.5 (or similar) centered at a grid point (figure) — case on $x$, bound $y$ by Pythagoras; boundary points and the "square of radius" count are the traps. | 12 | yes
15 | D | (number theory) For how many $n\ge3$ does a regular $n$-gon have a whole-number interior angle — $360/n$ must be an integer, so count the divisors of 360 and drop 1 and 2; "count divisors of 180" trap. | 3 | no

Newest-three (ch 10–12) count: 12 (slots 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14).
Reach-back count: 3 (slots 6, 9, 15).

Avoid: "17-foot ladder, foot 8 feet from the wall, how high"; "L-shaped room, 8×5 joined
to 4×3"; "each interior angle is 156°, how many sides"; "square with perimeter 36, diagonal".

## Checkpoint 5 — after chapter 15, covers 1–15

slot | band | archetype | chapter | fig
---|---|---|---|---
1 | A | (statistics) Seven consecutive odd numbers with a given mean; asked for the largest — the mean is the middle term; "mean + 7" trap. | 13 | no
2 | A | (counting) Pages 1 through 150 (or similar) are numbered; asked how many DIGITS are printed — three cases by digit count; "150" and "one digit per page" traps. | 14 | no
3 | A | (patterns) Matchstick figures (figure, first three shown) grow by a constant; asked WHICH figure uses a stated count — inverse of the nth-term rule; off-by-one on the starting figure. | 15 | yes
4 | B | (probability) A two-digit number is chosen at random; probability its digits differ by exactly 2 (or a similar digit condition) — the sample space is 90, not 99 or 100. | 14 | no
5 | B | (statistics) A class mean is known and the mean of the top $k$ scores is known; asked the mean of the REST — subtract totals, divide by the remaining count; "average of the two means" trap. | 13 | no
6 | B | (logic) At each of three gates a traveler hands over half the apples plus one more; a stated number remain; asked for the start — work backwards with "add one, then double"; "double then add one" trap. | 15 | no
7 | B | (counting) Road map (figure) from home to school through two junctions with a bypass; asked the number of routes — casework by which junction is used, sum of products; "multiply everything" trap. | 14 | yes
8 | C | (probability) A divisor of 60 (or similar) is chosen at random; probability it is odd — divisor counting from the factorization; "$\frac1{60}$ denominators" and "count odd numbers up to 60" traps. | 3 | no
9 | C | (statistics) A five-number list with one unknown $x$ has mean equal to median; asked the positive $x$ — casework on where $x$ falls in the order (only one branch survives). | 13 | no
10 | C | (patterns) Each term is the sum of the previous two; two later terms are given; asked the FIRST term — work backwards through the recurrence; "forward from the given pair" trap. | 15 | no
11 | C | (counting) Three points on one line and four on a parallel line (figure); asked how many triangles have their vertices among them — two cases, counting pairs; "$\binom{7}{3}$" trap (collinear triples). | 14 | yes
12 | D | (probability) Two different numbers drawn from 1 to N; probability their sum is a multiple of 5 — group by remainder mod 5 and count pairs by cases. Pick N NOT a multiple of 5 (1–18, 1–22) so the residue classes are unequal and the "$\frac15$ by symmetry" guess is a distractor, not the key. | 14 | no
13 | D | (statistics) Ten positive whole numbers have mean 5; asked the GREATEST number of them that can exceed 8 — extremal bound from the total with the rest at their minimum; "half of them" trap. | 13 | no
14 | D | (geometry) An ant crawls on the outside of a box (figure, three dimensions given) from one corner to the opposite corner; asked the shortest path — unfold and compare the candidate nets; the space diagonal and the edge path are the traps. | 12 | yes
15 | D | (ratios) A rectangle is cut by one horizontal and one vertical line into four rectangles (figure); three areas labeled; asked the fourth — opposite pieces share side ratios, so products of opposite areas are equal; "sum pattern" trap. | 11 | yes

Newest-three (ch 13–15) count: 12 (slots 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13).
Reach-back count: 3 (slots 8, 14, 15).

Avoid: "Ana eats half, then Ben eats half of what is left" (half-only chains); "two dice,
probability the sum is 7"; "five whole numbers with mean 8 and median 5, largest possible"
(the arena also owns maximize-under-mean-and-median); "units digit of $3^{2026}+7^{2026}$".

