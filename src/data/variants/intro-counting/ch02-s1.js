// Introduction to Counting chapter 2 — variations for section 2.2
// (Casework). All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every stem settles its conventions: coins, dice, and spinners are
//    named or ordered, so (2, 5) and (5, 2) are different outcomes;
//    "at most" and "at least" are inclusive; "only the number of each
//    matters" means unordered purchase counts; two triangles with the
//    same three side lengths are the same triangle; integers are never
//    padded with leading zeros.
//  - Every keyed answer is reached twice along routes that share no
//    steps: a casework split against a complement, casing on a
//    different variable, a bijection, or a closed formula. Route two
//    never borrows route one’s number.
//  - Each distractor is one named slip — a lost case, a double-counted
//    boundary, an off-by-one in the condition — and the slip is named
//    in CAPS.

const s22 = [
  // s1 — coins and spinners, "at most one" by cases.
  [
    {
      q: 'A penny, a nickel, a dime, and a quarter are each flipped once. In how many ways can the four coins land so that at most one of them shows tails?',
      choices: ['$4$', '$11$', '$16$', '$5$'],
      answer: 3,
      solution:
        'Route one, casework on the number of tails. Zero tails: every coin shows heads, $1$ way. Exactly one tail: choose which of the four named coins shows it, $4$ ways. The cases are disjoint, so add: $1 + 4 = 5$ ✓. Route two, complementary. Four different coins land in $2^4 = 16$ ways. The landings with two or more tails number $\\binom{4}{2} + \\binom{4}{3} + \\binom{4}{4} = 6 + 4 + 1 = 11$, and $16 - 11 = 5$ ✓. (The value $4$ FORGETS THE ZERO-TAIL CASE, all heads ✗. The value $11$ IS THE COMPLEMENT, the landings with two or more tails ✗. The value $16$ IS THE TOTAL, ignoring the condition ✗.)',
    },
    {
      q: 'A spinner with three equal sections colored red, green, and blue is spun $5$ times, and the sequence of colors is recorded. How many of the possible sequences show red at most once?',
      choices: ['$80$', '$112$', '$243$', '$32$'],
      answer: 1,
      solution:
        'Route one, casework on the number of reds. No red: every spin is green or blue, $2^5 = 32$ sequences. Exactly one red: choose which of the $5$ spins it is and fill the other four with green or blue, $5 \\cdot 2^4 = 80$. Add the disjoint cases: $32 + 80 = 112$ ✓. Route two, complementary. There are $3^5 = 243$ sequences in all. Those with at least two reds number $\\binom{5}{2} \\cdot 2^3 + \\binom{5}{3} \\cdot 2^2 + \\binom{5}{4} \\cdot 2 + \\binom{5}{5} = 80 + 40 + 10 + 1 = 131$, and $243 - 131 = 112$ ✓. (The value $80$ DROPS THE ZERO-RED CASE ✗. The value $243$ IS THE TOTAL, ignoring the condition ✗. The value $32$ READS "AT MOST ONCE" AS "NEVER" ✗.)',
    },
    {
      q: 'Each of $n$ different coins is flipped once. There are exactly $9$ ways for the coins to land so that at most one of them shows heads. What is $n$?',
      choices: ['$8$', '$9$', '$7$', '$10$'],
      answer: 0,
      solution:
        'Route one, count in terms of $n$. Zero heads happens in $1$ way and exactly one head in $n$ ways (choose the coin), so at most one head happens in $n + 1$ ways. Solve $n + 1 = 9$: $n = 8$ ✓. Route two, test values directly. With $8$ coins, all tails is $1$ landing and a single head can sit on any of the $8$ coins: $1 + 8 = 9$ landings ✓. The neighbors fail — $7$ coins give $8$ ways and $9$ coins give $10$ — so $n = 8$ is the only answer. (The value $9$ FORGETS THE ALL-TAILS LANDING and solves $n = 9$ ✗. The value $7$ COUNTS THE ALL-TAILS LANDING TWICE, solving $n + 2 = 9$ ✗. The value $10$ ADDS THE $1$ INSTEAD OF SUBTRACTING IT, computing $9 + 1$ ✗.)',
    },
  ],
  // s2 — dice and spinner sums by cases on the sum.
  [
    {
      q: 'A red die and a blue die are rolled. How many of the $36$ possible rolls have a sum that is a multiple of $4$?',
      choices: ['$8$', '$9$', '$3$', '$5$'],
      answer: 1,
      solution:
        'Route one, casework on the sum, which runs from $2$ to $12$; the multiples of $4$ in range are $4$, $8$, and $12$. Sum $4$: $(1,3), (2,2), (3,1)$ — $3$ rolls. Sum $8$: $(2,6), (3,5), (4,4), (5,3), (6,2)$ — $5$ rolls. Sum $12$: $(6,6)$ — $1$ roll. Add: $3 + 5 + 1 = 9$ ✓. Route two, casework on the red die. Red $1$: blue $3$ — $1$ roll. Red $2$: blue $2$ or $6$ — $2$. Red $3$: blue $1$ or $5$ — $2$. Red $4$: blue $4$ — $1$. Red $5$: blue $3$ — $1$. Red $6$: blue $2$ or $6$ — $2$. Add: $1 + 2 + 2 + 1 + 1 + 2 = 9$ ✓. (The value $8$ DROPS THE SUM-$12$ ROLL $(6,6)$ ✗. The value $3$ COUNTS THE QUALIFYING SUMS, not the rolls that give them ✗. The value $5$ COUNTS ONLY THE SUM-$8$ CASE ✗.)',
    },
    {
      q: 'Two spinners each have $8$ equal sections numbered $1$ through $8$. Each spinner is spun once, and the result is recorded as an ordered pair (first spinner, second spinner). How many of the $64$ pairs have a sum that is a multiple of $6$?',
      choices: ['$5$', '$11$', '$9$', '$10$'],
      answer: 3,
      solution:
        'Route one, casework on the sum, which runs from $2$ to $16$; the multiples of $6$ in range are $6$ and $12$. Sum $6$: the first spinner shows $1$ through $5$ with the second determined — $5$ pairs. Sum $12$: the first spinner shows $4$ through $8$ — $5$ pairs. Add: $5 + 5 = 10$ ✓. Route two, casework on the first spinner. Showing $1$, $2$, or $3$: one partner each ($5$, $4$, $3$). Showing $4$: partners $2$ and $8$ — $2$. Showing $5$: partners $1$ and $7$ — $2$. Showing $6$, $7$, or $8$: one partner each ($6$, $5$, $4$). Add: $1 + 1 + 1 + 2 + 2 + 1 + 1 + 1 = 10$ ✓. (The value $5$ COUNTS ONLY SUM $6$, missing sum $12$ ✗. The value $11$ COUNTS THE PAIR $(6,6)$ TWICE, once for each spinner ✗. The value $9$ FORGETS THE PAIR $(6,6)$ when listing sum $12$ ✗.)',
    },
    {
      q: 'A red die and a blue die are rolled. For exactly one integer $k > 1$, exactly $9$ of the $36$ possible rolls have a sum that is a multiple of $k$. What is $k$?',
      choices: ['$3$', '$6$', '$4$', '$5$'],
      answer: 2,
      solution:
        'Route one, test $k = 4$ by cases on the sum. The multiples of $4$ from $2$ to $12$ are $4$, $8$, and $12$, giving $3 + 5 + 1 = 9$ rolls ✓. Route two, eliminate the other candidates. $k = 2$: half of all rolls, $18$. $k = 3$: sums $3, 6, 9, 12$ give $2 + 5 + 4 + 1 = 12$. $k = 5$: sums $5$ and $10$ give $4 + 3 = 7$. $k = 6$: sums $6$ and $12$ give $5 + 1 = 6$. Every $k \\ge 7$ has at most one qualifying sum, hence at most $6$ rolls. Only $k = 4$ gives $9$ ✓. (The value $3$ GIVES $12$ ROLLS, from sums $3, 6, 9, 12$ ✗. The value $6$ GIVES $6$ ROLLS, from sums $6$ and $12$ ✗. The value $5$ GIVES $7$ ROLLS, from sums $5$ and $10$ ✗.)',
    },
  ],
  // s3 — digit pairs a fixed distance apart.
  [
    {
      q: 'How many two-digit positive integers have two digits that differ by exactly $3$?',
      choices: ['$13$', '$12$', '$7$', '$14$'],
      answer: 0,
      solution:
        'Route one, casework on which digit is bigger. Tens digit larger: it runs from $3$ to $9$ with the units digit $3$ less, giving $30, 41, 52, 63, 74, 85, 96$ — $7$ numbers. Units digit larger: the tens digit runs from $1$ to $6$, giving $14, 25, 36, 47, 58, 69$ — $6$ numbers. Add: $7 + 6 = 13$ ✓. Route two, casework on the tens digit $t$: the units digit must be $t - 3$ or $t + 3$, kept between $0$ and $9$. For $t = 1$ or $2$ only $t + 3$ survives; for $t = 3$ through $6$ both survive; for $t = 7, 8, 9$ only $t - 3$ survives. Add: $1 + 1 + 2 + 2 + 2 + 2 + 1 + 1 + 1 = 13$ ✓. (The value $12$ DROPS $30$, forgetting the units digit may be $0$ ✗. The value $7$ COUNTS ONLY THE TENS-LARGER CASE ✗. The value $14$ ALLOWS TENS DIGIT $0$, counting the string $03$ as a two-digit number ✗.)',
    },
    {
      q: 'How many three-digit positive integers have a hundreds digit and a units digit that differ by exactly $7$? The tens digit is unrestricted.',
      choices: ['$30$', '$60$', '$50$', '$20$'],
      answer: 2,
      solution:
        'Route one, count the (hundreds, units) pairs and multiply by the free tens digit. Hundreds digit larger: $(7,0), (8,1), (9,2)$ — $3$ pairs. Units digit larger: $(1,8), (2,9)$ — $2$ pairs. That is $5$ pairs, each with $10$ choices for the tens digit: $5 \\cdot 10 = 50$ ✓. Route two, start from unordered digit pairs $7$ apart: $\\{0,7\\}, \\{1,8\\}, \\{2,9\\}$. Each fills (hundreds, units) in $2$ orders, $6$ assignments, but the one with hundreds digit $0$ is not a three-digit number, leaving $5$. Multiply by the $10$ tens digits: $50$ ✓. (The value $60$ ALLOWS HUNDREDS DIGIT $0$, keeping all $6$ assignments ✗. The value $30$ COUNTS ONLY THE HUNDREDS-LARGER PAIRS ✗. The value $20$ COUNTS ONLY THE UNITS-LARGER PAIRS ✗.)',
    },
    {
      q: 'How many two-digit positive integers have two digits that differ by $7$ or more?',
      choices: ['$5$', '$9$', '$6$', '$12$'],
      answer: 1,
      solution:
        'Route one, casework on the difference. Difference $7$: $18, 29, 70, 81, 92$ — $5$ numbers. Difference $8$: $19, 80, 91$ — $3$. Difference $9$: $90$ — $1$. Add: $5 + 3 + 1 = 9$ ✓. Route two, casework on the tens digit $t$. $t = 1$: units $8$ or $9$ — $2$. $t = 2$: units $9$ — $1$. $t = 3$ through $6$: no units digit sits far enough on either side — $0$. $t = 7$: units $0$ — $1$. $t = 8$: units $0$ or $1$ — $2$. $t = 9$: units $0$, $1$, or $2$ — $3$. Add: $2 + 1 + 1 + 2 + 3 = 9$ ✓. (The value $5$ READS THE CONDITION AS "EXACTLY $7$" ✗. The value $6$ FORGETS THE UNITS DIGIT MAY BE $0$, dropping $70, 80, 90$ ✗. The value $12$ ALLOWS TENS DIGIT $0$, adding the strings $07, 08, 09$ ✗.)',
    },
  ],
  // s4 — one digit or die at least k more than the other.
  [
    {
      q: 'How many two-digit positive integers have a units digit that is at least $4$ more than the tens digit?',
      choices: ['$21$', '$10$', '$15$', '$36$'],
      answer: 2,
      solution:
        'Route one, casework on the tens digit $t$. The units digit runs from $t + 4$ to $9$, which is $6 - t$ choices, and $t$ can be $1$ through $5$. Add: $5 + 4 + 3 + 2 + 1 = 15$ ✓. Route two, casework on the units digit $u$, which must be at least $5$. The tens digit runs from $1$ to $u - 4$, so $u = 5, 6, 7, 8, 9$ give $1, 2, 3, 4, 5$ numbers. Add: $1 + 2 + 3 + 4 + 5 = 15$ ✓. (The value $21$ READS "AT LEAST $4$ MORE" AS "AT LEAST $3$ MORE" ✗. The value $10$ READS IT AS "MORE THAN $4$ MORE", a strict inequality ✗. The value $36$ IGNORES THE $4$ and counts every number whose units digit is larger at all ✗.)',
    },
    {
      q: 'A red die and a blue die are rolled. In how many of the $36$ possible rolls does the red die show at least $3$ more than the blue die?',
      choices: ['$6$', '$10$', '$3$', '$12$'],
      answer: 0,
      solution:
        'Route one, casework on the blue die. Blue $1$: red $4, 5, 6$ — $3$ rolls. Blue $2$: red $5$ or $6$ — $2$. Blue $3$: red $6$ — $1$. Blue $4$ or higher leaves no red value. Add: $3 + 2 + 1 = 6$ ✓. Route two, casework on the gap, red minus blue, which must be $3$, $4$, or $5$. Gap $3$: $(4,1), (5,2), (6,3)$. Gap $4$: $(5,1), (6,2)$. Gap $5$: $(6,1)$. Add: $3 + 2 + 1 = 6$ ✓. (The value $10$ READS "AT LEAST $3$ MORE" AS "AT LEAST $2$ MORE" ✗. The value $3$ READS IT AS "MORE THAN $3$ MORE", a strict inequality ✗. The value $12$ COUNTS BOTH DIRECTIONS, letting either die be the big one ✗.)',
    },
    {
      q: 'Exactly $15$ two-digit positive integers have a tens digit that is at least $k$ more than the units digit. What is $k$?',
      choices: ['$4$', '$6$', '$3$', '$5$'],
      answer: 3,
      solution:
        'Route one, count in terms of $k$. For tens digit $t \\ge k$ the units digit runs from $0$ to $t - k$, so the count is $(t - k + 1)$ summed over $t = k, \\ldots, 9$: the triangular number $1 + 2 + \\cdots + (10 - k) = \\frac{(10-k)(11-k)}{2}$. Solve $(10-k)(11-k) = 30$: the consecutive factors are $5 \\cdot 6$, so $k = 5$ ✓. Route two, test values directly. $k = 5$: tens digits $5$ through $9$ give $1, 2, 3, 4, 5$ numbers, and $1 + 2 + 3 + 4 + 5 = 15$ ✓. The neighbors fail — $k = 4$ gives $21$ and $k = 6$ gives $10$ — and the count only falls as $k$ grows, so $k = 5$ is the only answer. (The value $4$ GIVES $21$ NUMBERS ✗. The value $6$ GIVES $10$ NUMBERS ✗. The value $3$ GIVES $28$ NUMBERS ✗.)',
    },
  ],
  // s5 — spending or packing with two fixed sizes.
  [
    {
      q: 'At a bake sale, muffins cost $\\$4$ each and pies cost $\\$6$ each. In how many ways can Theo spend exactly $\\$60$? (Only the number of each item matters, and he may buy none of one kind.)',
      choices: ['$11$', '$6$', '$5$', '$16$'],
      answer: 1,
      solution:
        'Route one, casework on the number of pies $p$. The remaining $60 - 6p$ dollars must be a nonnegative multiple of $4$; since $60$ is a multiple of $4$ and $6p$ is one exactly when $p$ is even, $p$ must be even: $p = 0, 2, 4, 6, 8, 10$. Each leaves a whole number of muffins, so there are $6$ ways ✓. Route two, casework on the number of muffins $m$. The remaining $60 - 4m$ must be a multiple of $6$, which forces $m$ to be a multiple of $3$: $m = 0, 3, 6, 9, 12, 15$ — again $6$ ways, and the two lists pair up, $p = 10$ with $m = 0$ and so on ✓. (The value $11$ COUNTS EVERY PIE COUNT FROM $0$ TO $10$, including the odd ones that strand money ✗. The value $5$ DROPS THE ALL-MUFFIN PURCHASE, $p = 0$ ✗. The value $16$ COUNTS EVERY MUFFIN COUNT FROM $0$ TO $15$ without the divisibility check ✗.)',
    },
    {
      q: 'A crate of $48$ identical apples is packed into bags, each bag holding exactly $4$ apples or exactly $6$ apples. Every apple is bagged and every bag is full. If only the number of bags of each size matters, how many packings are possible?',
      choices: ['$9$', '$4$', '$13$', '$5$'],
      answer: 3,
      solution:
        'Route one, casework on the number of six-apple bags $s$. The remaining $48 - 6s$ apples must be a nonnegative multiple of $4$, which happens exactly when $s$ is even: $s = 0, 2, 4, 6, 8$ — $5$ packings ✓. Route two, casework on the number of four-apple bags $f$. The remaining $48 - 4f$ must be a multiple of $6$, which forces $f$ to be a multiple of $3$: $f = 0, 3, 6, 9, 12$ — the same $5$ packings met from the other side ✓. (The value $9$ COUNTS EVERY $s$ FROM $0$ TO $8$, including odd values that strand apples ✗. The value $4$ DROPS THE ALL-SIXES PACKING, $s = 8$ ✗. The value $13$ COUNTS EVERY $f$ FROM $0$ TO $12$ without the divisibility check ✗.)',
    },
    {
      q: 'Child tickets cost $\\$4$ and adult tickets cost $\\$7$. A group paid exactly $\\$75$ and included at least one child and at least one adult. How many pairs (number of children, number of adults) are possible?',
      choices: ['$4$', '$2$', '$3$', '$10$'],
      answer: 2,
      solution:
        'Route one, work modulo $4$. With $c$ children and $a$ adults, $4c + 7a = 75$ gives $7a \\equiv 75$, that is $3a \\equiv 3 \\pmod 4$, so $a \\equiv 1 \\pmod 4$: $a = 1, 5, 9$, since the next value $a = 13$ costs $\\$91$ alone. These give $c = 17, 10, 3$, all at least $1$ — $3$ pairs ✓. Route two, sweep the adult count from $1$ to $10$ (eleven adults cost $\\$77$, too much) and check each leftover: $75 - 7a = 68, 61, 54, 47, 40, 33, 26, 19, 12, 5$. Only $68$, $40$, and $12$ are positive multiples of $4$ — $3$ pairs ✓. (The value $4$ INCLUDES $a = 13$ from the modular list, though $7 \\cdot 13 = 91$ already exceeds $\\$75$ ✗. The value $2$ STOPS THE MODULAR LIST AT $a = 5$, missing $a = 9$ ✗. The value $10$ COUNTS EVERY ADULT COUNT FROM $1$ TO $10$ without checking that the leftover is a multiple of $4$ ✗.)',
    },
  ],
  // s6 — lattice points under a line or curve.
  [
    {
      q: 'How many ordered pairs of positive integers $(a, b)$ satisfy $2a + 3b \\le 20$?',
      choices: ['$33$', '$24$', '$26$', '$27$'],
      answer: 3,
      solution:
        'Route one, casework on $b$. For each $b$ the count of $a$ is the largest integer with $2a \\le 20 - 3b$: $b = 1$ gives $8$, then $7, 5, 4, 2, 1$ for $b = 2, \\ldots, 6$. Add: $8 + 7 + 5 + 4 + 2 + 1 = 27$ ✓. Route two, casework on $a$. For each $a$ the count of $b$ is the largest integer with $3b \\le 20 - 2a$: $a = 1$ gives $6$, then $5, 4, 4, 3, 2, 2, 1$ for $a = 2, \\ldots, 8$. Add: $6 + 5 + 4 + 4 + 3 + 2 + 2 + 1 = 27$ ✓. (The value $33$ ALLOWS $a = 0$, adding six pairs on the axis ✗. The value $24$ READS THE INEQUALITY AS STRICT ✗. The value $26$ DROPS THE PAIR $(1, 6)$, which hits $20$ exactly ✗.)',
    },
    {
      q: 'How many ordered pairs of positive integers $(m, n)$ satisfy $mn \\le 12$?',
      choices: ['$29$', '$35$', '$19$', '$34$'],
      answer: 1,
      solution:
        'Route one, casework on $m$. For each $m$ there are $\\lfloor 12/m \\rfloor$ choices of $n$: $12, 6, 4, 3, 2, 2$ for $m = 1, \\ldots, 6$, then $1$ each for $m = 7, \\ldots, 12$. Add: $12 + 6 + 4 + 3 + 2 + 2 + 6 = 35$ ✓. Route two, casework on the product $k = mn$. The pairs with product exactly $k$ number $d(k)$, the count of divisors of $k$, and $d(1), \\ldots, d(12) = 1, 2, 2, 3, 2, 4, 2, 4, 3, 4, 2, 6$. Add: $35$ ✓. (The value $29$ READS THE INEQUALITY AS STRICT, dropping the six pairs with product exactly $12$ ✗. The value $19$ COUNTS UNORDERED PAIRS, merging $(2, 5)$ with $(5, 2)$ ✗. The value $34$ FORGETS THE PAIR $(12, 1)$ ✗.)',
    },
    {
      q: 'The number of ordered pairs of positive integers $(a, b)$ satisfying $a + 3b \\le N$ is exactly $12$. What is $N$?',
      choices: ['$10$', '$11$', '$9$', '$12$'], answer: 0,
      solution:
        'Route one, test $N = 10$ by cases on $b$. $b = 1$: $a \\le 7$, seven pairs. $b = 2$: $a \\le 4$, four. $b = 3$: $a = 1$, one. Add: $7 + 4 + 1 = 12$ ✓. Route two, watch the count grow with $N$: each pair stays valid when $N$ rises, so the count never falls. $N = 9$ gives $6 + 3 = 9$, $N = 10$ gives $12$, and $N = 11$ gives $8 + 5 + 2 = 15$, so $N = 10$ is the only answer ✓. (The value $9$ ALLOWS $a = 0$, where $N = 9$ gives $7 + 4 + 1 = 12$ ✗. The value $11$ READS THE INEQUALITY AS STRICT, counting $a + 3b < 11$ ✗. The value $12$ ECHOES THE TARGET COUNT instead of solving for $N$ ✗.)',
    },
  ],
  // s7 — integer triangles by longest side.
  [
    {
      q: 'How many triangles have integer side lengths and perimeter $20$? Two triangles with the same three side lengths count as the same triangle.',
      choices: ['$8$', '$7$', '$33$', '$13$'],
      answer: 0,
      solution:
        'Route one, casework on the longest side $c$. The other two sides add to $20 - c$ and must beat $c$, so $c \\le 9$; also $3c \\ge 20$ forces $c \\ge 7$. $c = 9$: the others add to $11$, neither above $9$: $\\{2,9\\}, \\{3,8\\}, \\{4,7\\}, \\{5,6\\}$ — $4$. $c = 8$: sum $12$: $\\{4,8\\}, \\{5,7\\}, \\{6,6\\}$ — $3$. $c = 7$: sum $13$: $\\{6,7\\}$ — $1$. Add: $4 + 3 + 1 = 8$ ✓. Route two, casework on the shortest side $a$. $a = 1$ is impossible: the other two would differ by less than $1$, forcing an equal pair with odd sum $19$. $a = 2$: $(2,9,9)$. $a = 3$: $(3,8,9)$. $a = 4$: $(4,7,9), (4,8,8)$. $a = 5$: $(5,6,9), (5,7,8)$. $a = 6$: $(6,6,8), (6,7,7)$. Add: $1 + 1 + 2 + 2 + 2 = 8$ ✓. (The value $7$ LOSES THE $c = 7$ TRIANGLE $(6,7,7)$ ✗. The value $33$ IGNORES THE TRIANGLE INEQUALITY, counting every way to split $20$ into three sides ✗. The value $13$ ALLOWS DEGENERATE TRIANGLES with two sides adding to exactly the third ✗.)',
    },
    {
      q: 'How many triangles have integer side lengths, each side at most $6$? Two triangles with the same three side lengths count as the same triangle.',
      choices: ['$56$', '$12$', '$34$', '$22$'],
      answer: 2,
      solution:
        'Route one, casework on the longest side $c$. With sides $a \\le b \\le c$ and $a + b > c$: $c = 1$ gives $1$ triangle, $c = 2$ gives $2$, $c = 3$ gives $4$, $c = 4$ gives $6$, $c = 5$ gives $9$, and $c = 6$ gives $12$. Add: $1 + 2 + 4 + 6 + 9 + 12 = 34$ ✓. Route two, complementary. The triples $a \\le b \\le c \\le 6$ number $\\binom{8}{3} = 56$ (choosing a multiset of three sides from six lengths). The failures have $a + b \\le c$: for $c = 2, 3, 4, 5, 6$ there are $1, 2, 4, 6, 9$ of them, $22$ in all, and $56 - 22 = 34$ ✓. (The value $56$ IGNORES THE TRIANGLE INEQUALITY, counting every multiset of sides ✗. The value $22$ IS THE COMPLEMENT, the triples that fail to close ✗. The value $12$ COUNTS ONLY THE $c = 6$ CASE ✗.)',
    },
    {
      q: 'What is the smallest perimeter $P$ for which there are at least $10$ different triangles with integer side lengths and perimeter $P$? Two triangles with the same three side lengths count as the same triangle.',
      choices: ['$18$', '$19$', '$20$', '$21$'],
      answer: 1,
      solution:
        'Route one, count perimeter $19$ by longest side $c$, where $7 \\le c \\le 9$. $c = 9$: the others add to $10$: $\\{1,9\\}, \\{2,8\\}, \\{3,7\\}, \\{4,6\\}, \\{5,5\\}$ — $5$. $c = 8$: sum $11$: $\\{3,8\\}, \\{4,7\\}, \\{5,6\\}$ — $3$. $c = 7$: sum $12$: $\\{5,7\\}, \\{6,6\\}$ — $2$. Total $5 + 3 + 2 = 10$, at least $10$ ✓. Route two, check that no smaller perimeter reaches $10$. For an even perimeter, the two shorter sides beat the longest by at least $2$ (both gaps share the perimeter’s parity), so shrinking every side by $1$ pairs those triangles exactly with the triangles of perimeter $3$ less. Counting the odd perimeters directly: $15$ gives $7$ and $17$ gives $8$ (smaller ones give fewer), so $16$ gives the count of $13$, which is $5$, and $18$ gives the count of $15$, which is $7$. Every perimeter up to $18$ stays at $8$ or below, so $19$ is the smallest ✓. (The value $18$ ASSUMES THE COUNT GROWS WITH PERIMETER — perimeter $18$ has only $7$ triangles ✗. The value $20$ has only $8$ triangles, matching perimeter $17$ ✗. The value $21$ has $12$ triangles BUT IS NOT THE SMALLEST such perimeter ✗.)',
    },
  ],
  // s8 — large digit sums by multiset or by deficit.
  [
    {
      q: 'How many three-digit positive integers have digits that add up to $24$?',
      choices: ['$18$', '$10$', '$9$', '$12$'],
      answer: 1,
      solution:
        'Route one, casework on the set of digits, which must be large. Two $9$s: third digit $6$, set $\\{9,9,6\\}$ — $3$ orders. One $9$: the others add to $15$ with neither above $8$: $\\{9,8,7\\}$ — $3! = 6$ orders. No $9$: digits at most $8$ adding to $24$: $\\{8,8,8\\}$ — $1$ order. No digit is $0$, so every order counts. Add: $3 + 6 + 1 = 10$ ✓. Route two, casework on the hundreds digit $h$, with tens and units adding to $24 - h$, so $h \\ge 6$. $h = 6$: only $99$ — $1$ number. $h = 7$: pairs for $17$ — $2$. $h = 8$: pairs for $16$ — $3$. $h = 9$: pairs for $15$ — $4$. Add: $1 + 2 + 3 + 4 = 10$ ✓. (The value $18$ GIVES EVERY DIGIT SET $6$ ORDERS, though two sets have repeats ✗. The value $9$ MISSES THE SET $\\{8,8,8\\}$ ✗. The value $12$ GIVES $\\{8,8,8\\}$ THREE ORDERS instead of one ✗.)',
    },
    {
      q: 'How many four-digit positive integers have digits that add up to $33$?',
      choices: ['$15$', '$36$', '$12$', '$20$'],
      answer: 3,
      solution:
        'Route one, casework on the number of $9$s. Three $9$s: fourth digit $6$, set $\\{9,9,9,6\\}$ — $4$ orders. Two $9$s: the others add to $15$ with neither above $8$: $\\{9,9,8,7\\}$ — $\\frac{4!}{2!} = 12$ orders. One $9$: the rest add to $24$ with all at most $8$: $\\{9,8,8,8\\}$ — $4$ orders. No $9$: at most $32 < 33$, impossible. Add: $4 + 12 + 4 = 20$ ✓. Route two, count deficits from all nines. Write each digit as $9 - e_i$; then $e_1 + e_2 + e_3 + e_4 = 36 - 33 = 3$ with each $e_i \\ge 0$, and the leading digit $9 - e_1 \\ge 6$ is never $0$. Nonnegative solutions: $\\binom{3 + 3}{3} = \\binom{6}{3} = 20$ ✓. (The value $15$ USES $\\binom{6}{2}$, the wrong stars-and-bars count ✗. The value $36$ GIVES ALL THREE DIGIT SETS $12$ ORDERS ✗. The value $12$ COUNTS ONLY THE SET $\\{9,9,8,7\\}$ ✗.)',
    },
    {
      q: 'How many three-digit positive integers have digits that add up to $22$?',
      choices: ['$18$', '$30$', '$21$', '$15$'], answer: 2,
      solution:
        'Route one, casework on the set of digits. With two digits equal: $\\{9,9,4\\}$, $\\{8,8,6\\}$, $\\{8,7,7\\}$ — $3$ orders each, $9$ numbers. With all digits different: $\\{9,8,5\\}$, $\\{9,7,6\\}$ — $6$ orders each, $12$ numbers. No digit is $0$ (two digits add to at most $18 < 22$), so every order counts. Add: $9 + 12 = 21$ ✓. Route two, count deficits from all nines. Write each digit as $9 - e_i$; then $e_1 + e_2 + e_3 = 27 - 22 = 5$ with each $e_i \\ge 0$, every digit at least $4$ so no zero appears anywhere. Nonnegative solutions: $\\binom{5 + 2}{2} = \\binom{7}{2} = 21$ ✓. (The value $30$ GIVES ALL FIVE DIGIT SETS $6$ ORDERS ✗. The value $18$ DROPS THE SET $\\{8,7,7\\}$ ✗. The value $15$ DROPS TWO OF THE REPEATED-DIGIT SETS ✗.)',
    },
  ],
  // s9 — exactly k copies of a digit or letter.
  [
    {
      q: 'How many integers from $1$ to $9999$ have exactly three digits equal to $5$? (Do not pad with leading zeros; $555$ has three digits.)',
      choices: ['$35$', '$32$', '$40$', '$36$'],
      answer: 3,
      solution:
        'Route one, casework on the number of digits. Three-digit: only $555$ — $1$ number. Four-digit: one position is not a $5$. If it is the thousands place, that digit is $1$–$9$ except $5$: $8$ numbers. If it is one of the other three places, the thousands digit is $5$ and the odd digit out has $9$ choices: $3 \\cdot 9 = 27$. Shorter numbers cannot hold three $5$s. Add: $1 + 8 + 27 = 36$ ✓. Route two, pad every number to a four-digit string from $0000$ to $9999$. Leading zeros are not $5$s, so a number has exactly three $5$s exactly when its padded string does. Strings: choose the three positions for the $5$s, $\\binom{4}{3} = 4$, and fill the last position with any of $9$ non-$5$ digits: $4 \\cdot 9 = 36$ ✓. (The value $35$ FORGETS THE THREE-DIGIT NUMBER $555$ ✗. The value $32$ USES $8$ CHOICES FOR THE ODD DIGIT IN EVERY POSITION, though only the thousands place bans $0$ ✗. The value $40$ LETS THE FOURTH DIGIT ALSO BE $5$, counting $5555$ four times ✗.)',
    },
    {
      q: 'How many strings of $4$ letters, each letter A, B, or C (repeats allowed), contain exactly two A’s?',
      choices: ['$6$', '$24$', '$54$', '$48$'],
      answer: 1,
      solution:
        'Route one, place the A’s, then fill. Choose which two of the four positions hold A: $\\binom{4}{2} = 6$. Each remaining position takes B or C: $2^2 = 4$. Multiply: $6 \\cdot 4 = 24$ ✓. Route two, casework on the multiset of letters. The string is an arrangement of A, A, and two letters from $\\{$B, C$\\}$. Both B: arrangements of AABB, $\\frac{4!}{2! \\, 2!} = 6$. Both C: likewise $6$. One of each: arrangements of AABC, $\\frac{4!}{2!} = 12$. Add: $6 + 6 + 12 = 24$ ✓. (The value $6$ PLACES THE A’S BUT FORGETS TO FILL the other two positions ✗. The value $54$ FILLS THE OTHER POSITIONS FROM ALL THREE LETTERS, letting extra A’s sneak in ✗. The value $48$ TREATS THE TWO A’S AS DIFFERENT LETTERS, ordering them $4 \\cdot 3$ ways ✗.)',
    },
    {
      q: 'How many integers from $1$ to $9999$ have exactly two digits equal to $9$? (Do not pad with leading zeros; $99$ has two digits.)',
      choices: ['$486$', '$459$', '$485$', '$384$'],
      answer: 0,
      solution:
        'Route one, casework on the number of digits. Two-digit: only $99$ — $1$. Three-digit: the non-$9$ position is the hundreds place ($8$ choices, $1$–$8$) or the tens or units place ($9$ choices each): $8 + 9 + 9 = 26$. Four-digit: if the thousands digit is a $9$, pick the other $9$ among three places and fill two free places with non-$9$s: $3 \\cdot 9 \\cdot 9 = 243$; if not, the thousands digit has $8$ choices, the two $9$s sit in $\\binom{3}{2} = 3$ ways, and the last place has $9$: $8 \\cdot 3 \\cdot 9 = 216$. Add: $1 + 26 + 243 + 216 = 486$ ✓. Route two, pad every number to a four-digit string from $0000$ to $9999$. Leading zeros are not $9$s, so the padded string has exactly two $9$s exactly when the number does. Strings: $\\binom{4}{2} \\cdot 9 \\cdot 9 = 6 \\cdot 81 = 486$ ✓. (The value $459$ COUNTS ONLY THE FOUR-DIGIT NUMBERS ✗. The value $485$ FORGETS $99$ ITSELF ✗. The value $384$ USES $8$ CHOICES FOR BOTH FREE DIGITS, though only the leading place bans $0$ ✗.)',
    },
  ],
  // s10 — fixed digit products and factor triples.
  [
    {
      q: 'How many positive integers less than $1000$ have digits whose product is $36$?',
      choices: ['$24$', '$21$', '$33$', '$23$'],
      answer: 0,
      solution:
        'Route one, casework on the number of digits. No single digit is $36$. Two digits: $\\{4,9\\}$ in $2$ orders and $\\{6,6\\}$ in $1$ — $3$ numbers. Three digits: the sets are $\\{1,4,9\\}$ and $\\{2,3,6\\}$ with $3! = 6$ orders each, and $\\{1,6,6\\}$, $\\{2,2,9\\}$, $\\{3,3,4\\}$ with $3$ orders each — $12 + 9 = 21$. Add: $3 + 21 = 24$ ✓. Route two, casework on the largest digit. Largest $9$: $49, 94$; the orders of $\\{1,4,9\\}$, $6$; the orders of $\\{2,2,9\\}$, $3$ — $11$. Largest $6$: $66$; the orders of $\\{1,6,6\\}$, $3$; the orders of $\\{2,3,6\\}$, $6$ — $10$. Largest $4$: the orders of $\\{3,3,4\\}$ — $3$. Add: $11 + 10 + 3 = 24$ ✓. (The value $21$ FORGETS THE TWO-DIGIT NUMBERS ✗. The value $33$ GIVES EVERY THREE-DIGIT SET $6$ ORDERS, though three sets have repeats ✗. The value $23$ FORGETS $66$ ✗.)',
    },
    {
      q: 'How many ordered triples of positive integers $(a, b, c)$ satisfy $abc = 72$?',
      choices: ['$16$', '$12$', '$60$', '$40$'],
      answer: 2,
      solution:
        'Route one, split the prime factorization $72 = 2^3 \\cdot 3^2$. The three $2$s spread over $a, b, c$ in $\\binom{3 + 2}{2} = 10$ ways and the two $3$s in $\\binom{2 + 2}{2} = 6$ ways, independently: $10 \\cdot 6 = 60$ ✓. Route two, casework on $a$, a divisor of $72$; the pairs $(b, c)$ then number $d(72/a)$, the divisor count of $72/a$. Over $a = 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72$ that gives $12 + 9 + 8 + 6 + 6 + 3 + 4 + 4 + 3 + 2 + 2 + 1 = 60$ ✓. (The value $16$ ADDS THE TWO STARS-AND-BARS COUNTS instead of multiplying them ✗. The value $12$ COUNTS ONLY THE CHOICES FOR ONE FACTOR, the divisors of $72$ ✗. The value $40$ SPREADS THE $3$s WITH THE WRONG BARS, $\\binom{4}{1} = 4$ ways ✗.)',
    },
    {
      q: 'How many positive integers less than $1000$ have digits whose product is $16$?',
      choices: ['$12$', '$15$', '$21$', '$14$'],
      answer: 1,
      solution:
        'Route one, casework on the number of digits. No single digit is $16$. Two digits: $\\{2,8\\}$ in $2$ orders and $\\{4,4\\}$ in $1$ — $3$ numbers. Three digits: $\\{1,2,8\\}$ with $3! = 6$ orders, and $\\{1,4,4\\}$, $\\{2,2,4\\}$ with $3$ orders each — $12$. Add: $3 + 12 = 15$ ✓. Route two, casework on the largest digit. Largest $8$: $28, 82$, and the $6$ orders of $\\{1,2,8\\}$ — $8$. Largest $4$: $44$, the $3$ orders of $\\{1,4,4\\}$, and the $3$ orders of $\\{2,2,4\\}$ — $7$. Add: $8 + 7 = 15$ ✓. (The value $12$ FORGETS THE TWO-DIGIT NUMBERS ✗. The value $21$ GIVES EVERY THREE-DIGIT SET $6$ ORDERS, though two sets have repeats ✗. The value $14$ FORGETS $44$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 2,
  sections: {
    '2.2': s22,
  },
}
