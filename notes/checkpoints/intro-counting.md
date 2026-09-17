# Checkpoint lanes — Introduction to Counting & Probability

Read `notes/checkpoint-spec.md` first; it binds. This file fixes, for each of the five
checkpoints, the idea and the chapter of every slot. The author picks the scenario, the
numbers, and the key, verifies the key by brute force in node, and writes fresh — nothing
from `src/data/intro-counting/`, its variations (`notes/pins/intro-counting-chNN.md`), the
four arena papers, or another checkpoint. The stem never names the technique; each
archetype below is written as "idea — the twist that hides it", and the twist is the
point. Bands: A = slots 1–3, B = 4–7, C = 8–11, D = 12–15. Prealgebra is assumed and may
be used freely (it counts toward neither quota). Two to four figures per paper, where the
table says `yes`.

Shapes already owned by the arena papers, which no checkpoint may take: outfit/menu product
rule with one restriction; handshakes among $n$ people; complement probability from a bag;
rectangles in a small grid; single-event unequal spinner; plain lattice paths on a small
grid; lattice paths with one forbidden corner on a larger grid; three-digit numbers with a
digit condition; arrangements with two people kept together; committees of two with one
forbidden pairing; two dice with a sum condition; two draws without replacement matching;
three coins with "at least two" of something; two numbers from a set with an even product;
two spinners combined; a random point in a region by area; integers $1$–$100$ with a
two-part digit property; triangles in a figure; identical items with a minimum per
person; ordered pairs under a linear bound; the painted cube; seating or coloring with an
adjacency constraint; a three-stage random process by full casework.

## Checkpoint 1 — after chapter 3, covers 1–3

slot | band | archetype | chapter | fig
---|---|---|---|---
1 | A | count an arithmetic list in disguise — house numbers on one side of a street run $7, 11, 15, \ldots$ past $200$; asked how many are two-digit, so BOTH ends of the window must be solved for, not read off | 1 | no
2 | A | two-set overlap in a survey — the given data are "both" and "neither" plus the total, and the quantity asked is "exactly one of the two", which is neither the union nor either set | 1 | no
3 | A | product rule with a forced factor — symbol strings (letters or colored beads) whose first and last symbol must agree, and one interior position is barred one symbol; the matching end contributes a factor of $1$ | 1 | no
4 | B | casework on the first coordinate — ordered pairs of positive integers with a PRODUCT bound ($ab \le N$), posed as rectangles of integer sides fitting an area budget with orientation mattering | 2 | no
5 | B | constructive count with a hidden range restriction — digital-clock displays (12-hour, $1{:}00$ to $12{:}59$) containing a specified digit exactly once; the hour and minute ranges are the trap, not the digit | 2 | no
6 | B | permutations of a multiset with a mirror — how many arrangements of a given multiset of digits read the same backward; the odd count forces the middle and halves the rest | 3 | no
7 | B | pairs where an item may pair with itself — two-scoop cones from $n$ flavors where both scoops may match, unordered: $\binom{n}{2} + n$, with $n^2$ and $\binom{n}{2}$ as the two traps | 3 | no
8 | C | complement of two extremes — four-symbol codes (digits or letters) that are neither all different nor all the same; the count in between is total minus both ends | 2 | no
9 | C | circular seating with an "opposite" constraint — an even number of chairs around a table, two named people must sit directly across; fixing one seat kills the rotation and leaves one seat for the other | 3 | yes
10 | C | unordered placement with a symmetry — two identical tokens on the cells of a $3 \times 3$ board, no shared row or column; the ordered count halves, and forgetting to halve is the top trap | 3 | yes
11 | C | ordered pairs on a loop — a circular line of $12$ stations, ordered (start, end) pairs whose ride is at most $4$ stops the short way; wraparound makes the straight-line count wrong | 1 | no
12 | D | colorings up to rotation — the four cells of a $2 \times 2$ board each painted one of $3$ colors, boards the same if a rotation matches them; casework by orbit size, not a formula ($24$) | 3 | yes
13 | D | nothing in its own place — five-digit numbers using $1$–$5$ once each with no digit in its natural position; complementary count with an inclusion–exclusion or a listing by cycle shape ($44$), the "$5! - 5 \cdot 4!$" slip is the trap | 2 | no
14 | D | codes that survive a half-turn — four-digit codes that read as the same code when the card is rotated $180^\circ$ (only $0, 1, 6, 8, 9$ survive, $6 \leftrightarrow 9$), and a code may not start with $0$; a bijection between first and last, second and third | 2 | no
15 | D | two interacting constraints on a coin sequence — seven flips with more heads than tails AND no two tails adjacent; casework on the number of tails, then a gaps placement for each case | 2 | no

Newest-three count (chapters 1–3): 15. Reach-back count: not applicable — every covered
chapter is one of the newest three; nothing older exists to reach back to.

Avoid (library and variation scenarios a lazy author drifts into): arrangements of the
letters of a named word (COCOON, BANANA, TATTOO and their variants) — use digits or objects
and a twist, never "arrangements of the letters of …"; a round table where one named
person sits next to or refuses to sit next to another; "how many integers from $1$ to $N$
contain the digit $d$ at least once" and its multiples-of-$k$ cousins.

## Checkpoint 2 — after chapter 6, covers 1–6

slot | band | archetype | chapter | fig
---|---|---|---|---
1 | A | product of two combinations minus a banned combo — choose $2$ of $6$ toppings and $1$ of $3$ sauces, but one particular topping–sauce pairing is not offered; the subtraction is over combos containing the banned topping, not $1$ | 4 | no
2 | A | grid paths, round trip — right/up paths from $A$ to $B$ on a small grid, then a return path (down/left) that must differ from the outgoing one: $N(N-1)$; $N^2$ and $2N$ are the traps | 5 | yes
3 | A | multiset row with forced ends — identical red and identical blue balloons in a row where both ends must be red; place the ends, then arrange the rest | 3 | no
4 | B | package-deal committee — two named people must be both in or both out of a $k$-committee from $n$; sum of two combinations, and "$\binom{n-2}{k-2}$ alone" is the trap | 4 | no
5 | B | every child gets something — four DIFFERENT prizes handed to three named children, nobody empty-handed; $3^4$ minus the assignments that skip a child, with the double-subtracted "skip two" cases added back | 2 | no
6 | B | product of combinations from a split deck — a hand of $10$ cards holds $3$ face cards; choose $3$ to discard so that exactly one is a face card, $\binom{3}{1}\binom{7}{2}$; "at least one" and $\binom{10}{3}$ are the traps | 5 | no
7 | B | subsets of every size — a shop lets a customer add any set of $n$ optional extras; how many orders have at least two extras: $2^n - 1 - n$, the row-sum identity in a story | 4 | no
8 | C | strictly decreasing digit strings with the zero twist — positive integers up to $999$ whose digits strictly decrease left to right; a final $0$ is allowed but a leading $0$ is not, so the count is $\binom{10}{1} + \binom{10}{2} + \binom{10}{3}$ with the one-digit case subtle | 6 | no
9 | C | two identical courts — from $8$ players, fill two doubles courts that are not distinguishable, four players sit out; $\binom{8}{2}\binom{6}{2}/2$, forgetting the $/2$ or dividing by $4!$ are the traps | 5 | no
10 | C | shortest paths on a box — walk along the edges of a $2 \times 2 \times 1$ (or $3 \times 2 \times 1$) block lattice from one corner to the opposite corner, always moving away; arrangements of three step types, a multinomial | 5 | yes
11 | C | three-set survey — three clubs, given each club's size, the "exactly two clubs" totals, and the "all three" count; asked for members in no club (inclusion–exclusion where the pairwise terms must be rebuilt from "exactly two") | 1 | no
12 | D | a necklace of letters — strings of length $4$ over $\{A, B, C\}$ with no two adjacent symbols equal AND the first differing from the last (the string is read around a circle); the two constraints interact, $18$ | 6 | no
13 | D | paths under a wall — right/up paths from $(0,0)$ to $(4,4)$ that never rise above the diagonal $y = x$; counted cell by cell with the cutoff, $14$; the unconstrained $70$ and its half are traps | 5 | yes
14 | D | subsets avoiding a difference — subsets of $\{1, \ldots, 10\}$ containing no two elements that differ by exactly $5$; the elements pair up $\{k, k+5\}$ and each pair offers three choices, $3^5$ | 6 | no
15 | D | mixed identical and distinct objects — three identical red balls and two different blue balls into three labeled boxes, no box empty; product of a stars-and-bars count and a $3^2$ count, then a complement for empties by cases | 5 | no

Newest-three count (chapters 4–6): 12. Reach-back count (chapters 1–3): 3 (slots 3, 5, 11).

Avoid: committees "with Priya and Raj both on it" / "at least $k$ girls" / "Tia only if
Uma" — every committee lane above has its own twist and none is one of these; paths on a
grid through a marked corner $P$ or around a corner marked ✕ (the arena also owns
those); the round-table seatings with Ana, Ben, Cal, Dee and the row where none of them
are adjacent.

## Checkpoint 3 — after chapter 9, covers 1–9

slot | band | archetype | chapter | fig
---|---|---|---|---
1 | A | probability from a real calendar — a random day of a non-leap year lands in a $31$-day month; the reading step is knowing $7$ such months, $217/365$; $7/12$ is the trap | 7 | no
2 | A | addition rule run backward — a class survey gives $P(\text{team})$, $P(\text{band})$ and $P(\text{team or band})$; asked for the probability of both, so the overlap is solved for from the formula | 8 | no
3 | A | a random committee contains you — a $k$-committee chosen at random from $n$; probability a named member is on it is $k/n$ by symmetry, and the $\binom{n-1}{k-1}/\binom{n}{k}$ route confirms it | 4 | no
4 | B | the second draw is as good as the first — raffle tickets with $w$ winners among $n$, drawn one at a time without replacement; probability the SECOND ticket is a winner equals $w/n$, found by adding the two dependent branches | 8 | no
5 | B | one unequal spinner spun twice — sectors of unequal size (figure); probability the two spins land on different colors is $1 - \sum p_i^2$, and $\sum p_i^2$ itself is the trap | 8 | yes
6 | B | exactly one of three independent events — three unrelated events with different probabilities (a late bus, a rainy morning, a forgotten lunch); "exactly one happens" needs three products, and "at least one" (the complement of none) is the trap | 8 | no
7 | B | a random grid path with matching first and last steps — every right/up path from $A$ to $B$ equally likely; probability the first step and the last step go the same direction, counted by fixing both ends (figure) | 5 | yes
8 | C | the last coin out — a purse holds $2$ gold and $4$ silver coins; coins are drawn one at a time without replacement until both gold coins are out; probability the very last coin drawn is gold ($2/6$ by symmetry, the stopping rule is a distraction) | 9 | no
9 | C | two random lockers share a wall — two lockers chosen at random from a $4 \times 4$ block (figure); probability they are side by side, horizontally or vertically: $24/\binom{16}{2}$, and counting $16 \cdot 4$ ordered neighbors is the trap | 7 | yes
10 | C | all the special books on one side — $12$ different books shelved in random order, $3$ of them a set; probability the whole set lands among the left $6$ positions, $\binom{6}{3}/\binom{12}{3}$; "either side" doubles it and is a companion trap | 9 | no
11 | C | union of a digit property and a divisibility — a random integer from $1$ to $100$ either contains the digit $7$ or is a multiple of $7$; inclusion–exclusion where the overlap ($7, 70, 77$) must be listed by hand | 1 | no
12 | D | win by two — from a tied score, points are won with probability $p \ne 1/2$ independently; the first to lead by two wins. Probability the favorite wins is $p^2/(p^2 + q^2)$, found by the "the next two points either decide it or reset it" argument | 8 | no
13 | D | draw until both colors have appeared — a bag with $3$ red and $3$ blue, drawn without replacement, stopping when both colors have been seen; probability the process stops on exactly the fourth draw (a stopping-rule tree, two symmetric branches) | 8 | no
14 | D | all ranks and all suits different — a $12$-card deck of $3$ suits $\times$ $4$ ranks, a random $3$-card hand; probability the three cards have pairwise different ranks AND pairwise different suits, $\binom{4}{3} \cdot 3!/\binom{12}{3}$; the constraints interact through the suit assignment | 9 | no
15 | D | gifts around a circle — six people around a table each pass a gift to a random neighbor (left or right, by a coin); probability nobody receives two gifts: only "everyone left" or "everyone right" work, $2/64$, a bijection nobody sees at first | 9 | no

Newest-three count (chapters 7–9): 12. Reach-back count (chapters 1–6): 3 (slots 3, 7, 11).

Avoid: two standard dice with a sum/product/larger-number condition (the library has a
dozen, the arena owns the sum); Ana and Ben taking turns at a spinner or die until one
wins; socks or gloves drawn from a drawer of pairs; a deck turned over one card at a time
or dealt to four players.

## Checkpoint 4 — after chapter 12, covers 1–12

slot | band | archetype | chapter | fig
---|---|---|---|---
1 | A | rounding a random real — a number chosen at random from $[0, 10]$; probability the nearest integer is even; the end intervals $[0, 0.5)$ and $(9.5, 10]$ are half-length, and $1/2$ is the trap | 10 | no
2 | A | the fair prize — a game with a known entry fee and a known chance of winning; asked what prize makes the game fair (expected gain zero), so the unknown is the payout, not the expectation | 11 | no
3 | A | smudged rows — two consecutive rows of the triangle are shown with several entries blanked (figure); recover a specific blank by the addition rule, where one blank depends on another blank | 12 | yes
4 | B | a point on the boundary — a point chosen at random on the PERIMETER of a square of side $s$ (figure); probability it lies within distance $1$ of some corner, a length ratio on the boundary, $8/(4s)$; using area is the trap | 10 | yes
5 | B | expected count from a dependent draw — $3$ marbles drawn without replacement from $4$ red and $5$ blue; expected number of red is $3 \cdot 4/9$ by symmetry, while the direct three-term sum is the confirming route and $3 \cdot 4/8$ is the trap | 11 | no
6 | B | even-sized delegations — a club of $n$ must send a delegation with an even number of members, at least two; $2^{n-1} - 1$, the identity that even-sized subsets are half of all subsets | 12 | no
7 | B | handshakes minus partners — $2n$ people arrive as $n$ pairs; everyone shakes hands with everyone except their own partner; $\binom{2n}{2} - n$, and $\binom{2n}{2} - 2n$ is the trap | 3 | no
8 | C | a triangle that exists — a real number $x$ chosen at random from $[0, 12]$; probability that $3$, $8$, and $x$ can be the sides of a triangle; the interval $(5, 11)$ comes from the triangle inequality, no figure needed | 10 | no
9 | C | lattice points inside a circle — how many points with integer coordinates lie strictly inside $x^2 + y^2 = 20$; casework on $x$ from $-4$ to $4$, with the axis rows and the boundary points as the traps | 2 | no
10 | C | chords crossing inside — $n$ points on a circle, every pair joined by a chord, no three chords concurrent; the number of crossing points inside is $\binom{n}{4}$, because each crossing is a choice of four endpoints | 6 | no
11 | C | more teachers than students — a committee of $4$ from $4$ teachers and $4$ students; the "more teachers" and "more students" counts are equal by symmetry, so the answer is $\left(\binom{8}{4} - \binom{4}{2}^2\right)/2$, a two-group identity plus symmetry | 12 | no
12 | D | a stick broken twice — two independent random cuts on a unit stick; probability the three pieces form a triangle, $1/4$, by drawing the region in the unit square (figure of the region is the author's choice; the stick itself may be shown) | 10 | yes
13 | D | keep or roll again — roll a die, then either keep the number or roll once more and take the second result; with best play, the expected value is $4.25$ (re-roll on $1, 2, 3$); $3.5$ and $4$ are the traps | 11 | no
14 | D | a topping is featured — from $n$ available toppings choose any nonempty set, then mark one of the chosen as "featured"; count by size gives $\sum k\binom{n}{k}$ and the answer is $n \cdot 2^{n-1}$, a count-two-ways identity | 12 | no
15 | D | the smallest of three — three different numbers chosen at random from $1$ through $10$; expected value of the smallest, $11/4$, by a hockey-stick sum or by the gaps symmetry ("four gaps share $8$ non-chosen numbers equally") | 11 | no

Newest-three count (chapters 10–12): 12. Reach-back count (chapters 1–9): 3 (slots 7, 9, 10).

Avoid: two numbers chosen independently from $[0, 6]$ (or two friends arriving between
noon and 1:00) — the meeting-time square; "a game costs $\$N$, spin/roll, expected gain"
with no twist; "which row of the triangle contains $210$" and its position/entry lookups.

## Checkpoint 5 — after chapter 15, covers 1–15

slot | band | archetype | chapter | fig
---|---|---|---|---
1 | A | the coefficients add up — the sum of all coefficients of $(3x - 2)^5$ (or similar) by substituting $x = 1$; the trap is expanding, the twist is that the answer is a single small power | 14 | no
2 | A | a pyramid of cannonballs — triangular layers of $1, 3, 6, \ldots$ stacked $n$ high (figure); the total is a hockey-stick sum, $\binom{n+2}{3}$, and adding by hand is the check | 13 | yes
3 | A | orders using exactly two flavors — six scoops from four flavors, unordered, counted only when exactly two flavors appear; choose the flavors, then split $6$ into two positive parts, $\binom{4}{2} \cdot 5$ | 13 | no
4 | B | the tallest is early — $3$-person groups from $10$ students standing in height order; how many groups have their tallest member among the first $6$; the sum $\binom{2}{2} + \cdots + \binom{5}{2}$ collapses to $\binom{6}{3}$ (hockey stick as a bijection) | 13 | no
5 | B | a row of the triangle with carries — compute $11^5$ (or $101^4$) from a row of the triangle, where a two-digit entry forces a carry; reading $1\,5\,10\,10\,5\,1$ as $1510105$ is the trap | 14 | no
6 | B | squares in a dot lattice, tilted ones included — a $4 \times 4$ array of dots (figure); count squares with all four corners on dots, including the tilted ones; $14$ axis-aligned plus $6$ tilted, casework by side vector | 2 | yes
7 | B | two children tie — $10$ identical stickers to three children so that two named children receive the same number; casework on the shared amount, $6$ cases, $6$ | 13 | no
8 | C | a trinomial coefficient — the coefficient of $x^3$ in $(1 + x + x^2)^4$; group as $((1 + x) + x^2)^4$ and sum over how many $x^2$ factors are used; the $\binom{4}{3}$ guess is the trap | 14 | no
9 | C | solutions with an order — non-negative integer solutions of $x + y + z + w = 10$ with $x \ge y$; the total by stars and bars, then $(\text{total} + \#\{x = y\})/2$ by symmetry, where $\#\{x = y\}$ is itself a small stars-and-bars sum | 13 | no
10 | C | subsets with an odd sum — how many subsets of $\{1, 2, \ldots, 12\}$ have an odd sum; toggling the element $1$ pairs odd-sum with even-sum subsets, so exactly half, $2^{11}$; casework on the odd elements is the confirming route | 12 | no
11 | C | expected gap between two dice — two standard dice, expected value of the positive difference $\lvert a - b\rvert$, $35/18$; summing over the $36$ cells organized by difference, and $E[\max] - E[\min]$ as the elegant route | 11 | no
12 | D | no child gets a majority — $10$ identical coins to three children so that no child receives more than the other two combined (no share above $5$); symmetry plus a complement over the three "someone has $6$ or more" cases, which cannot overlap | 13 | no
13 | D | an even number of white flags — a row of $7$ flags each red, blue, or white; how many rows have an even number of white flags; $\left((2+1)^7 + (2-1)^7\right)/2 = 1094$, the binomial theorem at $x = -1$ | 14 | no
14 | D | tiling a strip — the number of ways to tile a $2 \times 7$ strip with $1 \times 2$ dominoes (figure); the last column is one vertical domino or a pair of horizontals, a recursion nobody sees at first, $21$; do not present it as steps or jumps | 15 | yes
15 | D | sum divisible by three — $3$-element subsets of $\{1, \ldots, 9\}$ whose sum is a multiple of $3$; the residue classes have three elements each, so the count is "one from each class" plus "all three from one class", $27 + 3 = 30$ | 15 | no

Newest-three count (chapters 13–15): 12. Reach-back count (chapters 1–12): 3 (slots 6, 10, 11).

Avoid: "ordered triples of non-negative integers with $x + y + z = n$" stated bare, and
the identical-candies-to-named-children stems with an at-least/at-most/even clause (the
library has a dozen and the arena owns the minimum-per-person shape) — every ch13 lane
above carries a symmetry or bijection twist instead; "the coefficient of $x^k$ in
$(ax + b)^n$" asked flat; the frog that jumps $1$ or $2$ and the token on the number line
(slot 14 must stay a tiling, not a walk).
