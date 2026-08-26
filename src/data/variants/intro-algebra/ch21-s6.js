// Introduction to Algebra chapter 21 — variations for the CHALLENGE set
// (Sequences & Series).
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - EVERY CHALLENGE ITEM KEEPS ITS TWO STEPS. A section drill asks one thing;
//    these ask two. A term count is found AND then fed into a sum. A ratio is
//    recovered AND then walked backwards to a first term. A repeating block is
//    turned into a fraction AND then reduced. A range is converted into an
//    index range AND then counted. Nothing here finishes in one move.
//  - COUNT THE STEPS, NOT THE TERMS. Walking from the first term to the $n$th
//    takes $n - 1$ moves, and walking from the first multiple in a range to the
//    last one leaves a count of last-index minus first-index PLUS ONE. Those
//    two off-by-ones are opposite in direction and both are always live.
//  - THE DIRECTION OF EACH QUESTION IS PRESERVED. Where the base problem hands
//    over the first term and the sum and asks for the RATIO, every variation
//    does the same; where it pins a negative middle term with an extra
//    condition, every variation pins one too. A variation never turns into the
//    easier question that lives one level down.
//  - A GEOMETRIC MIDDLE TERM HAS TWO CANDIDATES. Squaring never chooses between
//    them; only the stated sign condition does, and the solution says out loud
//    which candidate the condition throws away.
//  - Every answer is verified TWO independent ways and the second route is
//    written into the solution: a pairing count beside a sum formula, a prime
//    factorisation beside a division, a shift-and-subtract beside a running
//    total, a decimal check beside a telescope, a floor-division count beside a
//    hand-found first and last multiple.
//  - Nine traps run through this chapter, and every distractor is one of them,
//    named in the solution with its wrong arithmetic worked out. THE EXTRA STEP:
//    multiplying $d$ or $r$ by $n$ instead of $n - 1$. THE MISSING STEP: one
//    hop short. THE FENCEPOST: counting gaps and calling them terms. THE
//    UNHALVED SUM: leaving out the $\frac{1}{2}$ in $\frac{n}{2}(a + \ell)$.
//    THE DROPPED TAIL: summing every term but the last. THE HALF-TURNED RATIO:
//    reporting $1 - r$ where $r$ was asked for. THE STRAY BLOCK: giving a
//    repeating decimal a denominator of $100$ or $999$ when $99$ is the one that
//    fits. THE ADDED TAIL: adding the two survivors of a telescope instead of
//    subtracting. THE LOST LEFTOVER: forgetting the denominator a shifted
//    telescoping product leaves behind.
//  - No two choices inside an item name the same value, even written two ways.
//  - No shop, company, or brand is ever named.

const challenge = [
  // c1 — the $n$th term of an arithmetic sequence for a large $n$, where the
  //      step count $n - 1$ is the whole game. v1 uses a two-digit difference,
  //      v2 a small one with a bigger start, v3 the largest $n$ of the three so
  //      the extra step costs the most.
  [
    {
      q: 'What is the $40$th term of the arithmetic sequence $9, 20, 31, \\ldots$?',
      choices: ['$427$', '$438$', '$449$', '$429$'],
      answer: 1,
      solution:
        'Read off the two ingredients first: the first term is $a = 9$ and the common difference is $d = 20 - 9 = 11$ (confirm it on the next gap, $31 - 20 = 11$ ✓). Now the step count, which is where this problem is won or lost: reaching the $40$th term takes $40 - 1 = 39$ steps, because the first term is already there before any stepping happens. So the $40$th term is $9 + 39 \\times 11 = 9 + 429 = 438$. Second route, by building a formula in $n$ instead of counting hops: every term has the form $9 + 11(n - 1) = 11n - 2$, and a quick sanity check confirms it — at $n = 1$ it gives $11 - 2 = 9$ ✓ and at $n = 3$ it gives $33 - 2 = 31$ ✓. Then the $40$th term is $11 \\times 40 - 2 = 440 - 2 = 438$ ✓, the same value from an expression that never mentions a step at all. (THE EXTRA STEP takes $40$ hops and answers $9 + 440 = 449$, which is really the $41$st term ✗. THE MISSING STEP takes $38$ hops and answers $9 + 418 = 427$, the $39$th term ✗. Choice $429$ is $39 \\times 11$ with the first term never added back on ✗.)',
    },
    {
      q: 'What is the $25$th term of the arithmetic sequence $12, 18, 24, \\ldots$?',
      choices: ['$162$', '$150$', '$144$', '$156$'],
      answer: 3,
      solution:
        'Here $a = 12$ and $d = 18 - 12 = 6$, and the next gap agrees: $24 - 18 = 6$ ✓. Reaching the $25$th term takes $24$ steps, not $25$ — the first term costs nothing to arrive at. So the $25$th term is $12 + 24 \\times 6 = 12 + 144 = 156$. Second route, using a landmark term instead of the first one: the $5$th term is $12 + 4 \\times 6 = 36$, and from the $5$th to the $25$th is $25 - 5 = 20$ more steps, giving $36 + 20 \\times 6 = 36 + 120 = 156$ ✓. Two different starting points, the same landing place, which is exactly what a constant step guarantees. (THE EXTRA STEP takes $25$ hops and answers $12 + 150 = 162$ ✗. THE MISSING STEP takes $23$ hops and answers $12 + 138 = 150$ ✗. Choice $144$ is $24 \\times 6$, the total distance travelled, with the starting point forgotten ✗.)',
    },
    {
      q: 'What is the $50$th term of the arithmetic sequence $4, 17, 30, \\ldots$?',
      choices: ['$654$', '$628$', '$641$', '$637$'],
      answer: 2,
      solution:
        'The first term is $a = 4$ and the common difference is $d = 17 - 4 = 13$, which the next gap confirms: $30 - 17 = 13$ ✓. The $50$th term sits $49$ steps out, so it equals $4 + 49 \\times 13$. Compute the product carefully: $49 \\times 13 = 49 \\times 10 + 49 \\times 3 = 490 + 147 = 637$, so the term is $4 + 637 = 641$. Second route, by formula: the terms are $4 + 13(n - 1) = 13n - 9$, which returns $13 - 9 = 4$ at $n = 1$ ✓ and $26 - 9 = 17$ at $n = 2$ ✓. Then the $50$th term is $13 \\times 50 - 9 = 650 - 9 = 641$ ✓ — and notice the two routes multiply different numbers ($49 \\times 13$ against $50 \\times 13$), so agreeing is real evidence. (THE EXTRA STEP answers $4 + 50 \\times 13 = 654$ ✗. THE MISSING STEP answers $4 + 48 \\times 13 = 628$ ✗. Choice $637$ is the distance $49 \\times 13$ without the first term added ✗.)',
    },
  ],

  // c2 — sum an arithmetic series given only its first term, its last term, and
  //      its step: the term count has to be found before the sum formula can be
  //      used at all. v1 has the most terms, v2 the fewest, v3 an odd count with
  //      a clean middle term so the pairing check has a leftover.
  [
    {
      q: 'Compute $5 + 14 + 23 + \\cdots + 95$.',
      choices: ['$550$', '$500$', '$600$', '$275$'],
      answer: 0,
      solution:
        'The step is $d = 14 - 5 = 9$, so before summing anything we must count the terms: $n = \\frac{95 - 5}{9} + 1 = 10 + 1 = 11$. That $+1$ is the whole first step — $10$ counts the gaps, and a fence with $10$ gaps carries $11$ posts. Now the sum: $\\frac{n}{2}(\\text{first} + \\text{last}) = \\frac{11}{2}(5 + 95) = 11 \\times 50 = 550$. Second route, by pairing the ends by hand: $5 + 95 = 100$, $14 + 86 = 100$, $23 + 77 = 100$, $32 + 68 = 100$, $41 + 59 = 100$ — five pairs worth $500$ — and the middle term $50$ has no partner, so the total is $500 + 50 = 550$ ✓. The leftover middle term is itself a check that the count is odd, as $11$ should be. (THE FENCEPOST uses $n = 10$ and answers $10 \\times 50 = 500$ ✗. Choice $600$ counts $12$ terms, one too many, and lands past the end of the list ✗. Choice $275$ halves twice, computing $\\frac{11 \\times 50}{2}$ as though the formula needed another division ✗.)',
    },
    {
      q: 'Compute $4 + 15 + 26 + \\cdots + 92$.',
      choices: ['$384$', '$480$', '$216$', '$432$'],
      answer: 3,
      solution:
        'The step is $d = 15 - 4 = 11$. Count first: $n = \\frac{92 - 4}{11} + 1 = 8 + 1 = 9$ terms. Then sum: $\\frac{9}{2}(4 + 92) = \\frac{9 \\times 96}{2} = 9 \\times 48 = 432$. Second route, by writing the list out and pairing, which is cheap with only nine terms: $4, 15, 26, 37, 48, 59, 70, 81, 92$ — nine of them ✓, confirming the count without any formula. Pair the ends: $4 + 92 = 96$, $15 + 81 = 96$, $26 + 70 = 96$, $37 + 59 = 96$, four pairs giving $384$, plus the unpaired middle $48$, for a total of $432$ ✓. (THE FENCEPOST uses $n = 8$ and answers $8 \\times 48 = 384$ ✗ — which is exactly the four-pair subtotal, the sum with its middle term missing. Choice $480$ counts $10$ terms ✗. Choice $216$ halves a second time ✗.)',
    },
    {
      q: 'Compute $7 + 13 + 19 + \\cdots + 91$.',
      choices: ['$686$', '$735$', '$784$', '$1470$'],
      answer: 1,
      solution:
        'The step is $d = 13 - 7 = 6$, so the count is $n = \\frac{91 - 7}{6} + 1 = 14 + 1 = 15$ terms. The sum is $\\frac{15}{2}(7 + 91) = \\frac{15 \\times 98}{2} = 15 \\times 49 = 735$. Second route, through the average rather than the pairing: an arithmetic list is balanced around its middle, so its average is the middle term, and with $15$ terms the middle one is the $8$th, namely $7 + 7 \\times 6 = 49$. Fifteen terms averaging $49$ give $15 \\times 49 = 735$ ✓ — the same answer with no first-plus-last in sight, and the fact that the middle term equals $\\frac{7 + 91}{2} = 49$ is a second confirmation that the count is right. (THE FENCEPOST uses $n = 14$ and answers $14 \\times 49 = 686$ ✗. Choice $784$ uses $16$ terms ✗. THE UNHALVED SUM computes $15 \\times 98 = 1470$, counting every term twice ✗.)',
    },
  ],

  // c3 — the sum of a whole named family of numbers, where the count has to be
  //      recovered from the description before any formula applies. v1 is the
  //      odds and their square, v2 the multiples of $6$ pulled out as a common
  //      factor, v3 the odds again but described by a range, so the count is one
  //      more inference away.
  [
    {
      q: 'What is the sum of the first $45$ positive odd numbers?',
      choices: ['$2070$', '$1035$', '$2025$', '$2116$'],
      answer: 2,
      solution:
        'The odd numbers stack into perfect squares: $1 = 1^2$, $1 + 3 = 2^2$, $1 + 3 + 5 = 3^2$, and in general the first $n$ odd numbers sum to $n^2$. So the answer is $45^2 = 2025$. Second route, without that pattern at all. The $45$th odd number is $2 \\times 45 - 1 = 89$, so we are summing $1 + 3 + \\cdots + 89$, and the series formula gives $\\frac{45}{2}(1 + 89) = \\frac{45 \\times 90}{2} = 45 \\times 45 = 2025$ ✓. The formula quietly reproduces the square, which is exactly why the pattern is true. (Choice $2070 = 45 \\times 46$ uses the EVENS rule $n(n+1)$ on an odd list ✗ — that rule sums $2 + 4 + \\cdots + 90$, a different pile. Choice $1035 = \\frac{45 \\times 46}{2}$ sums $1 + 2 + \\cdots + 45$, the counting numbers rather than the odd ones ✗. Choice $2116 = 46^2$ is THE FENCEPOST, one odd number too many ✗.)',
    },
    {
      q: 'What is the sum of the first $50$ positive multiples of $6$?',
      choices: ['$7650$', '$1275$', '$15300$', '$7956$'],
      answer: 0,
      solution:
        'Write the list out in factored form: $6 + 12 + 18 + \\cdots + 300 = 6(1 + 2 + 3 + \\cdots + 50)$. The inner sum is $\\frac{50 \\times 51}{2} = 1275$, so the total is $6 \\times 1275 = 7650$. Pulling the $6$ out first is what keeps the arithmetic small. Second route, straight through the series formula with no factoring: the $50$th multiple of $6$ is $6 \\times 50 = 300$, so the sum is $\\frac{50}{2}(6 + 300) = 25 \\times 306 = 7650$ ✓. (Choice $1275$ stops at the inner sum and forgets to multiply by $6$ ✗. THE UNHALVED SUM computes $50 \\times 306 = 15300$ ✗. Choice $7956 = 6 \\times 1326$ is THE FENCEPOST, summing $1$ through $51$ inside the parentheses ✗.)',
    },
    {
      q: 'What is the sum of all the odd numbers from $1$ to $139$?',
      choices: ['$4970$', '$5041$', '$4761$', '$4900$'],
      answer: 3,
      solution:
        'The count comes first, and the range is what hides it: the odd numbers here are $1, 3, 5, \\ldots, 139$, so $n = \\frac{139 - 1}{2} + 1 = 69 + 1 = 70$. The first $n$ odd numbers sum to $n^2$, so the total is $70^2 = 4900$. Second route, confirming the count from the other end and then using the series formula: the $k$th odd number is $2k - 1$, and $2k - 1 = 139$ gives $k = 70$ ✓, so $139$ really is the $70$th odd number. Then $\\frac{70}{2}(1 + 139) = 35 \\times 140 = 4900$ ✓ — the same total from a route that never squares anything. (Choice $4970 = 70 \\times 71$ applies the EVENS rule $n(n+1)$ to an odd list ✗. Choice $5041 = 71^2$ is THE FENCEPOST, counting one odd number too many ✗. Choice $4761 = 69^2$ counts the gaps instead of the terms ✗.)',
    },
  ],

  // c4 — a geometric sequence pinned by two non-adjacent terms, asked for the
  //      FIRST term, so the ratio has to be recovered and then walked backwards.
  //      v1 has a whole-number ratio, v2 a negative one whose sign has to be
  //      argued for, v3 a fractional one where stepping back means multiplying
  //      by an improper fraction.
  [
    {
      q: 'A geometric sequence has $3$rd term $32$ and $6$th term $2048$. What is its first term?',
      choices: ['$8$', '$2$', '$128$', '$\\frac{1}{2}$'],
      answer: 1,
      solution:
        'From the $3$rd term to the $6$th is $6 - 3 = 3$ multiplications, so $32 \\cdot r^3 = 2048$, giving $r^3 = 64$ and $r = 4$. Now the second step, and it runs BACKWARDS: from the $3$rd term to the $1$st is $2$ multiplications undone, so divide twice, $\\frac{32}{4^2} = \\frac{32}{16} = 2$. Second route, through prime factorisations, which never guesses a cube root: $32 = 2^5$ and $2048 = 2^{11}$, so $r^3 = 2^{11 - 5} = 2^6$ and therefore $r = 2^2 = 4$ ✓. Then build the sequence forward from $2$ and check both given terms: $2, 8, 32, 128, 512, 2048$ — the $3$rd is $32$ ✓ and the $6$th is $2048$ ✓. (Choice $8$ steps back only ONCE, stopping at the $2$nd term ✗. Choice $128$ steps FORWARD from the $3$rd term instead of backwards ✗. Choice $\\frac{1}{2}$ steps back three times, dividing by $r^3$ where the gap is only two ✗.)',
    },
    {
      q: 'A geometric sequence has $2$nd term $-24$ and $5$th term $192$. What is its first term?',
      choices: ['$-12$', '$48$', '$12$', '$3$'],
      answer: 2,
      solution:
        'From the $2$nd term to the $5$th is $3$ multiplications: $-24 \\cdot r^3 = 192$, so $r^3 = \\frac{192}{-24} = -8$ and $r = -2$ — a cube root keeps the sign of what it started with, so a negative cube has a negative root. Step back once from the $2$nd term: the first term is $\\frac{-24}{-2} = 12$. Second route, arguing the sign before touching the arithmetic. The $5$th term is $a r^4$, and $r^4$ is positive whatever $r$ is, so $a r^4 = 192 > 0$ forces $a > 0$. But the $2$nd term $a r$ is negative, so $r$ must be negative. Sizes alone give $|r|^3 = 8$, hence $|r| = 2$, so $r = -2$ and $a = \\frac{-24}{-2} = 12$ ✓. Check forward: $12, -24, 48, -96, 192$ ✓ — the signs alternate exactly as a negative ratio demands. (Choice $-12$ is THE LOST SIGN, solving with $r = 2$ ✗. Choice $48$ steps FORWARD to the $3$rd term ✗. Choice $3$ divides by $r^3 = -8$ instead of by $r$, stepping back three places from a term that is only one place out ✗.)',
    },
    {
      q: 'A geometric sequence has $3$rd term $72$ and $6$th term $243$. What is its first term?',
      choices: ['$32$', '$48$', '$108$', '$\\frac{64}{3}$'],
      answer: 0,
      solution:
        'Three multiplications separate the two given terms: $72 \\cdot r^3 = 243$, so $r^3 = \\frac{243}{72} = \\frac{27}{8}$ and $r = \\frac{3}{2}$, since $3^3 = 27$ and $2^3 = 8$. Stepping back two places from the $3$rd term means dividing by $r$ twice, which is multiplying by $\\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$: the first term is $72 \\times \\frac{4}{9} = 32$. Second route, by prime factorisation and a forward check: $72 = 2^3 \\cdot 3^2$ and $243 = 3^5$, so $r^3 = \\frac{3^5}{2^3 \\cdot 3^2} = \\frac{3^3}{2^3}$, giving $r = \\frac{3}{2}$ ✓ with no fraction arithmetic guessed at. Building forward from $32$: $32, 48, 72, 108, 162, 243$ — the $3$rd term is $72$ ✓ and the $6$th is $243$ ✓. (Choice $48$ steps back only once ✗. Choice $108$ steps forward instead of back ✗. Choice $\\frac{64}{3}$ divides by $r^3$, three steps back where two were needed ✗.)',
    },
  ],

  // c5 — an infinite geometric series with the first term and the SUM given,
  //      asked for the RATIO. The direction matters: this is the reverse of the
  //      section-level question, which hands over the ratio and asks for the
  //      first term. v1 and v2 keep the ratio positive, v3 makes the sum SMALLER
  //      than the first term, which forces a negative ratio.
  [
    {
      q: 'An infinite geometric series has first term $21$ and sum $28$. What is the common ratio?',
      choices: ['$\\frac{3}{4}$', '$\\frac{4}{3}$', '$\\frac{1}{3}$', '$\\frac{1}{4}$'],
      answer: 3,
      solution:
        'Start from $\\frac{a}{1 - r} = S$, which here reads $\\frac{21}{1 - r} = 28$. Solve for the DENOMINATOR first: $1 - r = \\frac{21}{28} = \\frac{3}{4}$. That is not the answer — one more step remains, and it is the step the question is built around: $r = 1 - \\frac{3}{4} = \\frac{1}{4}$. Since $\\left|\\frac{1}{4}\\right| < 1$, the series really does converge, so the formula was legal to use. Second route, from a completely different identity. Peel the first term off the sum: what is left, $ar + ar^2 + \\cdots$, is the whole sum multiplied by $r$, so $S - a = rS$ and therefore $r = \\frac{S - a}{S} = \\frac{28 - 21}{28} = \\frac{7}{28} = \\frac{1}{4}$ ✓. Sanity check by adding: $21 + 5.25 + 1.3125 + 0.328\\ldots$ is already $27.89\\ldots$ and climbing toward $28$ ✓. (THE HALF-TURNED RATIO reports $\\frac{3}{4}$, the value of $1 - r$ ✗. Choice $\\frac{4}{3}$ flips the fraction, computing $\\frac{28}{21}$ ✗ — and no ratio bigger than $1$ can give a finite sum at all. Choice $\\frac{1}{3}$ divides the leftover by the wrong number, $\\frac{S - a}{a} = \\frac{7}{21}$ ✗.)',
    },
    {
      q: 'An infinite geometric series has first term $14$ and sum $42$. What is the common ratio?',
      choices: ['$\\frac{1}{3}$', '$\\frac{2}{3}$', '$3$', '$2$'],
      answer: 1,
      solution:
        'The formula gives $\\frac{14}{1 - r} = 42$, so $1 - r = \\frac{14}{42} = \\frac{1}{3}$, and then the step that finishes the job: $r = 1 - \\frac{1}{3} = \\frac{2}{3}$. Check the convergence condition: $\\left|\\frac{2}{3}\\right| < 1$ ✓, so the sum really is a number. Second route, using $S - a = rS$: everything after the first term is $r$ times the whole series, so $r = \\frac{42 - 14}{42} = \\frac{28}{42} = \\frac{2}{3}$ ✓. A third confirmation costs nothing here — with $r = \\frac{2}{3}$ the series is $14 + \\frac{28}{3} + \\frac{56}{9} + \\cdots$, and the partial sums $14$, $23.33\\ldots$, $29.55\\ldots$, $33.70\\ldots$ climb steadily toward $42$ without passing it ✓. (THE HALF-TURNED RATIO reports $\\frac{1}{3}$ ✗. Choice $3$ inverts the fraction, computing $\\frac{42}{14}$ ✗, and a ratio of $3$ makes the terms grow forever. Choice $2$ divides the leftover by the first term, $\\frac{28}{14}$, instead of by the sum ✗.)',
    },
    {
      q: 'An infinite geometric series has first term $30$ and sum $24$. What is the common ratio?',
      choices: ['$\\frac{1}{4}$', '$\\frac{5}{4}$', '$-\\frac{1}{4}$', '$-\\frac{1}{5}$'],
      answer: 2,
      solution:
        'Notice something before computing anything: the sum $24$ is SMALLER than the first term $30$, so the terms after the first must pull the total down — the ratio has to be negative. Now the algebra: $\\frac{30}{1 - r} = 24$ gives $1 - r = \\frac{30}{24} = \\frac{5}{4}$, so $r = 1 - \\frac{5}{4} = -\\frac{1}{4}$, negative exactly as predicted, and $\\left|-\\frac{1}{4}\\right| < 1$ so the series converges ✓. Second route, via $S - a = rS$: $r = \\frac{24 - 30}{24} = \\frac{-6}{24} = -\\frac{1}{4}$ ✓. Check by adding the first few terms: $30 - 7.5 + 1.875 - 0.469 + \\cdots = 23.906\\ldots$, closing in on $24$ from alternating sides ✓. (Choice $\\frac{1}{4}$ is THE LOST SIGN, and a positive ratio would make the sum exceed $30$, not fall short of it ✗. THE HALF-TURNED RATIO reports $\\frac{5}{4}$, the value of $1 - r$ ✗ — and a ratio above $1$ has no finite sum. Choice $-\\frac{1}{5}$ divides the leftover by the first term, $\\frac{-6}{30}$, instead of by the sum ✗.)',
    },
  ],

  // c6 — a two-digit repeating block turned into a fraction and then REDUCED,
  //      so the item has two steps: the $99$ denominator and the cancelling.
  //      v1 reduces by $9$, v2 by $9$ to a different denominator, v3 by $3$ so
  //      the surviving denominator is $33$ rather than $11$.
  [
    {
      q: 'Write $0.\\overline{81}$ as a fraction in lowest terms.',
      choices: ['$\\frac{9}{11}$', '$\\frac{81}{100}$', '$\\frac{9}{10}$', '$\\frac{3}{37}$'],
      answer: 0,
      solution:
        'A two-digit block repeats, so expand it as a geometric series: $0.818181\\ldots = \\frac{81}{100} + \\frac{81}{10000} + \\cdots$, with first term $\\frac{81}{100}$ and ratio $\\frac{1}{100}$. The sum is $\\frac{81/100}{1 - 1/100} = \\frac{81/100}{99/100} = \\frac{81}{99}$. Then the second step the question asks for: reduce. Both are divisible by $9$, so $\\frac{81}{99} = \\frac{9}{11}$. Second route, with no series at all. Let $x = 0.\\overline{81}$. Multiplying by $100$ shifts exactly one block: $100x = 81.\\overline{81}$. Subtract the original: $99x = 81$, so $x = \\frac{81}{99} = \\frac{9}{11}$ ✓. Confirm by dividing back: $9 \\div 11 = 0.8181\\ldots$ ✓. (THE STRAY BLOCK answers $\\frac{81}{100}$, which is $0.81$ exactly — a decimal that stops, with no repeating tail ✗. Choice $\\frac{9}{10} = 0.9$ uses a denominator of $90$, the pattern for a decimal with one non-repeating digit in front ✗. Choice $\\frac{3}{37} = \\frac{81}{999}$ treats the block as three digits long ✗.)',
    },
    {
      q: 'Write $0.\\overline{36}$ as a fraction in lowest terms.',
      choices: ['$\\frac{9}{25}$', '$\\frac{2}{5}$', '$\\frac{4}{111}$', '$\\frac{4}{11}$'],
      answer: 3,
      solution:
        'The repeating block is two digits long, so the denominator to aim for is $99$: $0.363636\\ldots = \\frac{36}{100} + \\frac{36}{10000} + \\cdots = \\frac{36/100}{99/100} = \\frac{36}{99}$. Reduce by $9$: $\\frac{36}{99} = \\frac{4}{11}$. Second route, by shifting and subtracting. With $x = 0.\\overline{36}$, the number $100x = 36.\\overline{36}$ has the identical tail, so $100x - x = 36$, giving $99x = 36$ and $x = \\frac{36}{99} = \\frac{4}{11}$ ✓. Divide back to be sure: $4 \\div 11 = 0.3636\\ldots$ ✓. (THE STRAY BLOCK answers $\\frac{9}{25} = \\frac{36}{100} = 0.36$, the block with its tail cut off ✗. Choice $\\frac{2}{5} = \\frac{36}{90} = 0.4$ borrows the $90$ pattern, which belongs to decimals like $0.3\\overline{6}$, not to this one ✗. Choice $\\frac{4}{111} = \\frac{36}{999}$ uses a three-digit denominator for a two-digit block ✗.)',
    },
    {
      q: 'Write $0.\\overline{24}$ as a fraction in lowest terms.',
      choices: ['$\\frac{6}{25}$', '$\\frac{4}{15}$', '$\\frac{8}{33}$', '$\\frac{8}{333}$'],
      answer: 2,
      solution:
        'Two repeating digits mean a denominator of $99$: $0.242424\\ldots = \\frac{24/100}{99/100} = \\frac{24}{99}$. Now reduce, and here the common factor is only $3$, not $9$ — the digit sum of $24$ is $6$, so $24$ is divisible by $3$ but not by $9$. Dividing top and bottom by $3$ gives $\\frac{8}{33}$, and that is as far as it goes since $8$ and $33$ share no factor. Second route, shift and subtract: with $x = 0.\\overline{24}$, we get $100x = 24.\\overline{24}$, so $99x = 24$ and $x = \\frac{24}{99} = \\frac{8}{33}$ ✓. Check by long division: $8 \\div 33 = 0.2424\\ldots$ ✓. (THE STRAY BLOCK answers $\\frac{6}{25} = \\frac{24}{100} = 0.24$, the terminating version ✗. Choice $\\frac{4}{15} = \\frac{24}{90}$ uses the $90$ pattern ✗. Choice $\\frac{8}{333} = \\frac{24}{999}$ stretches the block to three digits, which would describe $0.\\overline{024}$ ✗.)',
    },
  ],

  // c7 — a telescoping sum over a range that starts well away from $1$, so the
  //      surviving pieces are two fractions that must then be subtracted and
  //      reduced. v1 and v2 land on unrelated denominators, v3 stretches the
  //      range so that adding the terms one by one is plainly hopeless.
  [
    {
      q: 'Compute $\\frac{1}{6 \\cdot 7} + \\frac{1}{7 \\cdot 8} + \\cdots + \\frac{1}{13 \\cdot 14}$.',
      choices: ['$\\frac{5}{21}$', '$\\frac{2}{21}$', '$\\frac{1}{84}$', '$\\frac{7}{78}$'],
      answer: 1,
      solution:
        'Split every term with the identity $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$. The sum becomes $\\left(\\frac{1}{6} - \\frac{1}{7}\\right) + \\left(\\frac{1}{7} - \\frac{1}{8}\\right) + \\cdots + \\left(\\frac{1}{13} - \\frac{1}{14}\\right)$, and every interior fraction appears once positive and once negative. What survives is first minus last: $\\frac{1}{6} - \\frac{1}{14}$. Then the second step, the subtraction itself: the least common denominator is $42$, so $\\frac{7}{42} - \\frac{3}{42} = \\frac{4}{42} = \\frac{2}{21}$. Second route, by adding the eight terms as decimals and comparing: $\\frac{1}{42} + \\frac{1}{56} + \\frac{1}{72} + \\frac{1}{90} + \\frac{1}{110} + \\frac{1}{132} + \\frac{1}{156} + \\frac{1}{182}$ comes to $0.023810 + 0.017857 + 0.013889 + 0.011111 + 0.009091 + 0.007576 + 0.006410 + 0.005495 = 0.095238$, and $\\frac{2}{21} = 0.095238\\ldots$ ✓ — brute force agrees with the telescope to six places. (THE ADDED TAIL computes $\\frac{1}{6} + \\frac{1}{14} = \\frac{10}{42} = \\frac{5}{21}$, adding the survivors instead of subtracting ✗. Choice $\\frac{1}{84}$ multiplies the two survivors ✗. Choice $\\frac{7}{78} = \\frac{1}{6} - \\frac{1}{13}$ stops the telescope one term early, using the last DENOMINATOR pair’s first factor ✗.)',
    },
    {
      q: 'Compute $\\frac{1}{8 \\cdot 9} + \\frac{1}{9 \\cdot 10} + \\cdots + \\frac{1}{15 \\cdot 16}$.',
      choices: ['$\\frac{3}{16}$', '$\\frac{1}{128}$', '$\\frac{7}{120}$', '$\\frac{1}{16}$'],
      answer: 3,
      solution:
        'Split each term as $\\frac{1}{n} - \\frac{1}{n+1}$ and let the middle cancel: everything from $\\frac{1}{9}$ through $\\frac{1}{15}$ appears once with each sign, so the sum collapses to $\\frac{1}{8} - \\frac{1}{16}$. Now subtract: $\\frac{2}{16} - \\frac{1}{16} = \\frac{1}{16}$. Second route, by a general rule read off the endpoints. Summing $\\frac{1}{n(n+1)}$ from $n = a$ to $n = b$ always leaves $\\frac{1}{a} - \\frac{1}{b+1} = \\frac{b + 1 - a}{a(b+1)}$, so with $a = 8$ and $b = 15$ the answer is $\\frac{16 - 8}{8 \\times 16} = \\frac{8}{128} = \\frac{1}{16}$ ✓ — and the numerator $8$ is the number of terms, which is a built-in check on the count. A decimal spot-check closes it: $0.013889 + 0.011111 + 0.009091 + 0.007576 + 0.006410 + 0.005495 + 0.004762 + 0.004167 = 0.0625 = \\frac{1}{16}$ ✓. (THE ADDED TAIL computes $\\frac{1}{8} + \\frac{1}{16} = \\frac{3}{16}$ ✗. Choice $\\frac{1}{128}$ multiplies the survivors ✗. Choice $\\frac{7}{120} = \\frac{1}{8} - \\frac{1}{15}$ subtracts the wrong endpoint, using $15$ where the last term’s split ends at $\\frac{1}{16}$ ✗.)',
    },
    {
      q: 'Compute $\\frac{1}{20 \\cdot 21} + \\frac{1}{21 \\cdot 22} + \\cdots + \\frac{1}{29 \\cdot 30}$.',
      choices: ['$\\frac{1}{60}$', '$\\frac{1}{12}$', '$\\frac{1}{600}$', '$\\frac{9}{580}$'],
      answer: 0,
      solution:
        'Ten terms, and not one of them needs to be added. Split each as $\\frac{1}{n} - \\frac{1}{n+1}$; the pieces from $\\frac{1}{21}$ to $\\frac{1}{29}$ each cancel against a neighbour, leaving $\\frac{1}{20} - \\frac{1}{30}$. Over the common denominator $60$ that is $\\frac{3}{60} - \\frac{2}{60} = \\frac{1}{60}$. Second route, verifying the collapse itself on a short prefix instead of trusting it. The first three terms are $\\frac{1}{420} + \\frac{1}{462} + \\frac{1}{506}$, which the telescope claims should equal $\\frac{1}{20} - \\frac{1}{23} = \\frac{3}{460}$. In decimals: $0.0023810 + 0.0021645 + 0.0019763 = 0.0065217$, and $\\frac{3}{460} = 0.0065217\\ldots$ ✓. The mechanism checks out on a piece we can actually add by hand, so it may be trusted on the whole ✓. (THE ADDED TAIL computes $\\frac{1}{20} + \\frac{1}{30} = \\frac{5}{60} = \\frac{1}{12}$ ✗. Choice $\\frac{1}{600}$ multiplies the two survivors ✗. Choice $\\frac{9}{580} = \\frac{1}{20} - \\frac{1}{29}$ ends the telescope at the last factor written down instead of one past it ✗.)',
    },
  ],

  // c8 — counting the multiples of a fixed number strictly inside a range. Two
  //      steps: find the first and last multiples that qualify, then count the
  //      indices between them WITH the $+1$. v1, v2 and v3 change the multiplier
  //      and the window; none of the four endpoints is itself a multiple, so the
  //      word "between" never has to be argued over.
  [
    {
      q: 'How many multiples of $6$ are there between $200$ and $800$?',
      choices: ['$99$', '$101$', '$100$', '$133$'],
      answer: 2,
      solution:
        'Find the two ends of the run first. Since $6 \\times 33 = 198$ is below $200$ and $6 \\times 34 = 204$ is above it, the first qualifying multiple is $204$. At the top, $6 \\times 134 = 804$ overshoots while $6 \\times 133 = 798$ fits, so the last is $798$. Now the count, and this is where the $+1$ lives: the multipliers run $34, 35, \\ldots, 133$, so there are $133 - 34 + 1 = 100$ of them. Second route, by counting from zero and subtracting, which never needs a first or last multiple to be found by hand: the multiples of $6$ up to $799$ number $\\left\\lfloor \\frac{799}{6} \\right\\rfloor = 133$, and those up to $200$ number $\\left\\lfloor \\frac{200}{6} \\right\\rfloor = 33$. Subtracting removes exactly the ones at or below $200$: $133 - 33 = 100$ ✓. (THE FENCEPOST computes $133 - 34 = 99$ and forgets that both ends of the run are themselves multiples ✗. Choice $101$ adds one too many, as though $198$ or $804$ belonged ✗. Choice $133$ counts every multiple of $6$ from $6$ upward and never removes the ones below $200$ ✗.)',
    },
    {
      q: 'How many multiples of $9$ are there between $150$ and $600$?',
      choices: ['$50$', '$49$', '$51$', '$66$'],
      answer: 0,
      solution:
        'Locate the ends: $9 \\times 16 = 144$ is too small and $9 \\times 17 = 153$ clears $150$, so the run starts at $153$. At the top, $9 \\times 67 = 603$ is too big while $9 \\times 66 = 594$ fits, so it ends at $594$. The multipliers run from $17$ to $66$, giving $66 - 17 + 1 = 50$ multiples. Second route, by floor division: $\\left\\lfloor \\frac{599}{9} \\right\\rfloor = 66$ counts the multiples of $9$ up to $599$, and $\\left\\lfloor \\frac{150}{9} \\right\\rfloor = 16$ counts those up to $150$; the difference is $66 - 16 = 50$ ✓. The two routes disagree about nothing, and notice they lean on different quantities — one on a first and last multiple, the other on two divisions. (THE FENCEPOST answers $66 - 17 = 49$ ✗. Choice $51$ counts one extra, letting $144$ or $603$ into a window neither is inside ✗. Choice $66$ counts every multiple of $9$ from $9$ up to $594$, ignoring the lower end of the range entirely ✗.)',
    },
    {
      q: 'How many multiples of $11$ are there between $300$ and $900$?',
      choices: ['$53$', '$54$', '$55$', '$81$'],
      answer: 1,
      solution:
        'The first multiple of $11$ past $300$: $11 \\times 27 = 297$ falls short, so it is $11 \\times 28 = 308$. The last before $900$: $11 \\times 82 = 902$ overshoots, so it is $11 \\times 81 = 891$. The multipliers run $28$ through $81$, a count of $81 - 28 + 1 = 54$. Second route, by floor division: $\\left\\lfloor \\frac{899}{11} \\right\\rfloor = 81$ and $\\left\\lfloor \\frac{300}{11} \\right\\rfloor = 27$, so the count is $81 - 27 = 54$ ✓. Notice this second route has no $+1$ in it at all — the subtraction of two counts handles the fencepost automatically, which is exactly why it is worth knowing as a check. (THE FENCEPOST answers $81 - 28 = 53$ ✗. Choice $55$ stretches the run by one at one end ✗. Choice $81$ counts all the multiples of $11$ from $11$ to $891$ and forgets to remove the $27$ that sit below $300$ ✗.)',
    },
  ],

  // c9 — summing a finite geometric series by shift-and-subtract, where the
  //      ratio is not $2$, so the division at the end cannot be skipped. v1 has
  //      ratio $4$ starting at $1$, v2 ratio $4$ with a first term that is not
  //      $1$, v3 a NEGATIVE ratio so the terms alternate and the subtraction
  //      turns into a division by $-3$.
  [
    {
      q: 'Compute $1 + 4 + 16 + 64 + \\cdots + 4096$.',
      choices: ['$16383$', '$1365$', '$21845$', '$5461$'],
      answer: 3,
      solution:
        'The terms are the powers of $4$: $4^0, 4^1, \\ldots, 4^6$, and $4^6 = 4096$, so there are $7$ of them. Call the sum $S$ and multiply by the ratio: $4S = 4 + 16 + \\cdots + 4096 + 16384$. Subtracting the original cancels everything in the middle: $4S - S = 16384 - 1$, so $3S = 16383$ and — here is the step a ratio of $2$ would have hidden — divide by $3$ to get $S = 5461$. Second route, a running total straight down the list: $1 + 4 = 5$, $+16 = 21$, $+64 = 85$, $+256 = 341$, $+1024 = 1365$, $+4096 = 5461$ ✓. Seven terms added, the same answer, and no formula involved. (Choice $16383$ stops at $3S$ and never divides ✗. THE DROPPED TAIL answers $1365$, the total of the first six terms with $4096$ left out ✗. Choice $21845$ is THE FENCEPOST going the other way, summing eight powers through $4^7 = 16384$ ✗.)',
    },
    {
      q: 'Compute $2 + 8 + 32 + \\cdots + 2048$.',
      choices: ['$8190$', '$2730$', '$682$', '$10922$'],
      answer: 1,
      solution:
        'The ratio is $\\frac{8}{2} = 4$ and the terms are $2 \\cdot 4^{n-1}$; since $2048 = 2 \\times 1024 = 2 \\cdot 4^5$, there are $6$ terms. Shift and subtract: $4S = 8 + 32 + \\cdots + 2048 + 8192$, so $4S - S = 8192 - 2$, giving $3S = 8190$ and $S = 2730$. Second route, by adding the six terms directly: $2 + 8 = 10$, $+32 = 42$, $+128 = 170$, $+512 = 682$, $+2048 = 2730$ ✓. A third glance confirms the shape — every term is twice the corresponding power of $4$, so the sum should be twice $1 + 4 + \\cdots + 1024 = 1365$, and $2 \\times 1365 = 2730$ ✓. (Choice $8190$ reports $3S$, forgetting to divide by the ratio minus one ✗. THE DROPPED TAIL answers $682$, the first five terms with $2048$ missing ✗. Choice $10922$ adds a seventh term, $8192$, that the list never reaches ✗.)',
    },
    {
      q: 'Compute $1 - 2 + 4 - 8 + \\cdots + 256$.',
      choices: ['$511$', '$-171$', '$171$', '$-85$'],
      answer: 2,
      solution:
        'The ratio is $\\frac{-2}{1} = -2$: each term is the previous one doubled and flipped in sign. The terms are $(-2)^0$ through $(-2)^8 = 256$, so there are $9$ of them, and the last is positive because $8$ is even. Shift and subtract with the negative ratio: $-2S = -2 + 4 - 8 + \\cdots + 256 - 512$, and subtracting gives $-2S - S = -512 - 1$, so $-3S = -513$ and $S = 171$. Second route, a running total, which is the honest way to be sure the signs behaved: $1 - 2 = -1$, $+4 = 3$, $-8 = -5$, $+16 = 11$, $-32 = -21$, $+64 = 43$, $-128 = -85$, $+256 = 171$ ✓. The partial sums swing above and below zero and land on $171$ ✓. (Choice $511$ ignores the minus signs and sums $1 + 2 + \\cdots + 256$ ✗. Choice $-171$ mishandles the division by $-3$ and keeps a sign that cancelled ✗. THE DROPPED TAIL answers $-85$, the running total one term early, before the final $+256$ ✗.)',
    },
  ],

  // c10 — a training plan whose daily counts form an arithmetic sequence, asked
  //       for the TOTAL: the last day has to be found first, then the series
  //       summed. v1 and v2 climb at different rates over different lengths, v3
  //       counts DOWN, so the difference is negative and the last day is the
  //       smallest number in the plan.
  [
    {
      q: 'Tomas starts a push-up plan with $12$ push-ups on day $1$ and adds $6$ more each day. How many push-ups does he do in total over the first $20$ days?',
      choices: ['$1440$', '$1380$', '$2760$', '$1254$'],
      answer: 1,
      solution:
        'Two steps, and the first one is the trap. Day $20$ is $19$ steps after day $1$, not $20$, so it carries $12 + 19 \\times 6 = 12 + 114 = 126$ push-ups. Now sum the twenty days: $\\frac{20}{2}(12 + 126) = 10 \\times 138 = 1380$. Second route, splitting the plan into a flat part and a growing part. Every day includes the original $12$, which is $20 \\times 12 = 240$ push-ups, and on top of that day $k$ adds $6(k-1)$, so the extras total $6(0 + 1 + 2 + \\cdots + 19) = 6 \\times \\frac{19 \\times 20}{2} = 6 \\times 190 = 1140$. Together: $240 + 1140 = 1380$ ✓ — the same total from a decomposition that never asks what day $20$ looks like. (THE EXTRA STEP puts $12 + 20 \\times 6 = 132$ on day $20$ and answers $10 \\times 144 = 1440$ ✗. THE UNHALVED SUM answers $20 \\times 138 = 2760$ ✗. Choice $1254$ is the total for $19$ days, stopping one day short ✗.)',
    },
    {
      q: 'Wren’s training plan calls for $25$ squats on day $1$ and $9$ more squats on each following day. How many squats does the plan add up to over $16$ days?',
      choices: ['$1552$', '$2960$', '$1320$', '$1480$'],
      answer: 3,
      solution:
        'Find the last day first. Day $16$ sits $15$ steps out, so it calls for $25 + 15 \\times 9 = 25 + 135 = 160$ squats. Then the total: $\\frac{16}{2}(25 + 160) = 8 \\times 185 = 1480$. Second route, by flat part plus growth: the $25$ that every day carries contributes $16 \\times 25 = 400$, and the daily extras contribute $9(0 + 1 + \\cdots + 15) = 9 \\times \\frac{15 \\times 16}{2} = 9 \\times 120 = 1080$. Adding, $400 + 1080 = 1480$ ✓. A rough check agrees too: the plan averages $\\frac{25 + 160}{2} = 92.5$ squats a day over $16$ days, and $16 \\times 92.5 = 1480$ ✓. (THE EXTRA STEP uses $25 + 16 \\times 9 = 169$ for day $16$ and answers $8 \\times 194 = 1552$ ✗. THE UNHALVED SUM answers $16 \\times 185 = 2960$ ✗. Choice $1320$ totals only $15$ days, leaving the last day out ✗.)',
    },
    {
      q: 'Yara’s plan starts with $90$ jump-rope skips on day $1$ and drops by $6$ skips each day for $13$ days. How many skips does the whole plan come to?',
      choices: ['$702$', '$663$', '$1404$', '$684$'],
      answer: 0,
      solution:
        'The plan counts DOWN, so the common difference is $d = -6$, and the last day is the smallest. Day $13$ is $12$ steps out: $90 - 12 \\times 6 = 90 - 72 = 18$ skips, comfortably above zero, so the plan never runs out of skips. Total: $\\frac{13}{2}(90 + 18) = \\frac{13 \\times 108}{2} = 13 \\times 54 = 702$. Second route, through the middle day instead of the ends: with an odd number of days the average day is the middle one, day $7$, which calls for $90 - 6 \\times 6 = 54$ skips — and $54$ is indeed $\\frac{90 + 18}{2}$ ✓. Thirteen days averaging $54$ give $13 \\times 54 = 702$ ✓. (THE EXTRA STEP puts $90 - 13 \\times 6 = 12$ on day $13$ and answers $13 \\times 51 = 663$ ✗. THE UNHALVED SUM answers $13 \\times 108 = 1404$ ✗. Choice $684$ is the twelve-day total, $\\frac{12}{2}(90 + 24) = 684$, one day short ✗.)',
    },
  ],

  // c11 — a telescoping PRODUCT that must first be rewritten factor by factor,
  //       and whose range does not start at $1$, so a leftover denominator or
  //       numerator survives. v1 climbs from $\frac{1}{5}$, v2 flips the sign to
  //       $1 - \frac{1}{n}$ so the leftover moves upstairs, v3 climbs again from
  //       a start that makes the final quotient a whole number.
  [
    {
      q: 'Compute the product $\\left(1 + \\frac{1}{5}\\right)\\left(1 + \\frac{1}{6}\\right)\\left(1 + \\frac{1}{7}\\right) \\cdots \\left(1 + \\frac{1}{60}\\right)$.',
      choices: ['$61$', '$12$', '$\\frac{61}{5}$', '$\\frac{61}{6}$'],
      answer: 2,
      solution:
        'Rewrite every factor before doing anything else: $1 + \\frac{1}{n} = \\frac{n+1}{n}$. The product becomes $\\frac{6}{5} \\cdot \\frac{7}{6} \\cdot \\frac{8}{7} \\cdots \\frac{61}{60}$, and now each numerator cancels the denominator of the next fraction. Everything from $6$ to $60$ disappears, and what survives is the very last numerator over the very first denominator: $\\frac{61}{5}$. The leftover $5$ downstairs is the point of starting at $\\frac{1}{5}$ rather than $\\frac{1}{1}$. Second route, by shrinking the problem until it can be checked by hand: $\\left(1 + \\frac{1}{5}\\right)\\left(1 + \\frac{1}{6}\\right) = \\frac{6}{5} \\cdot \\frac{7}{6} = \\frac{7}{5}$, and one more factor gives $\\frac{7}{5} \\cdot \\frac{8}{7} = \\frac{8}{5}$. The pattern is unmistakable — after the factor ending at $n$, the product is $\\frac{n+1}{5}$ — and at $n = 60$ that reads $\\frac{61}{5}$ ✓. (THE LOST LEFTOVER answers $61$, cancelling the opening $5$ that has nothing to cancel against ✗. Choice $12 = \\frac{60}{5}$ uses the last DENOMINATOR on top instead of the last numerator ✗. Choice $\\frac{61}{6}$ starts the cancelling one factor late, as though the product began at $\\left(1 + \\frac{1}{6}\\right)$ ✗.)',
    },
    {
      q: 'Compute the product $\\left(1 - \\frac{1}{4}\\right)\\left(1 - \\frac{1}{5}\\right)\\left(1 - \\frac{1}{6}\\right) \\cdots \\left(1 - \\frac{1}{40}\\right)$.',
      choices: ['$\\frac{3}{40}$', '$\\frac{1}{40}$', '$\\frac{1}{10}$', '$\\frac{1}{13}$'],
      answer: 0,
      solution:
        'The minus sign turns each factor the other way up: $1 - \\frac{1}{n} = \\frac{n-1}{n}$. So the product is $\\frac{3}{4} \\cdot \\frac{4}{5} \\cdot \\frac{5}{6} \\cdots \\frac{39}{40}$, where now each DENOMINATOR cancels the numerator of the next fraction. All of $4$ through $39$ vanish, leaving the first numerator over the last denominator: $\\frac{3}{40}$. Second route, on a shortened version: $\\frac{3}{4} \\cdot \\frac{4}{5} = \\frac{3}{5}$, then $\\frac{3}{5} \\cdot \\frac{5}{6} = \\frac{3}{6} = \\frac{1}{2}$, then $\\frac{1}{2} \\cdot \\frac{6}{7} = \\frac{3}{7}$. Every partial product has a $3$ on top and the current last denominator underneath ✓, so stopping at $\\frac{39}{40}$ gives $\\frac{3}{40}$ ✓. Compare with the $1 + \\frac{1}{n}$ version: there the leftover was a denominator, here it is a numerator — the direction of the cancelling has flipped. (Choice $\\frac{1}{40}$ is the answer to the product that STARTS at $1 - \\frac{1}{2}$, whose leading numerator is $1$ ✗. Choice $\\frac{1}{10} = \\frac{4}{40}$ takes the leading factor as $\\frac{4}{5}$ ✗. Choice $\\frac{1}{13} = \\frac{3}{39}$ stops one factor early ✗.)',
    },
    {
      q: 'Compute the product $\\left(1 + \\frac{1}{3}\\right)\\left(1 + \\frac{1}{4}\\right)\\left(1 + \\frac{1}{5}\\right) \\cdots \\left(1 + \\frac{1}{80}\\right)$.',
      choices: ['$81$', '$\\frac{81}{4}$', '$\\frac{80}{3}$', '$27$'],
      answer: 3,
      solution:
        'Each factor is $1 + \\frac{1}{n} = \\frac{n+1}{n}$, so the product reads $\\frac{4}{3} \\cdot \\frac{5}{4} \\cdot \\frac{6}{5} \\cdots \\frac{81}{80}$. Every numerator meets its match in the next denominator, and only the outermost pieces survive: $\\frac{81}{3}$. That is the second step — the quotient still has to be carried out — and it comes to $27$. Second route, on a miniature copy: $\\frac{4}{3} \\cdot \\frac{5}{4} = \\frac{5}{3}$ and one more factor gives $\\frac{5}{3} \\cdot \\frac{6}{5} = \\frac{6}{3} = 2$. So after the factor ending at $n$ the product is $\\frac{n+1}{3}$ ✓, and at $n = 80$ that is $\\frac{81}{3} = 27$ ✓. (THE LOST LEFTOVER answers $81$, dropping the $3$ that never cancels ✗. Choice $\\frac{81}{4}$ starts the cancelling one factor late ✗. Choice $\\frac{80}{3}$ keeps the last denominator on top instead of the last numerator ✗.)',
    },
  ],

  // c12 — a geometric middle term whose square has TWO roots, with an extra
  //       condition pinning the negative one. v1 and v2 climb, v3 descends, so
  //       the ratio is a negative fraction rather than a negative whole number,
  //       but every one of them answers to the sign condition, not to the
  //       square root alone.
  [
    {
      q: 'The numbers $2, x, 50$ form a geometric sequence, and $x$ is negative. What is $x$?',
      choices: ['$10$', '$-10$', '$26$', '$-26$'],
      answer: 1,
      solution:
        'A geometric middle term satisfies $\\frac{x}{2} = \\frac{50}{x}$, since both fractions are the common ratio. Cross-multiplying gives $x^2 = 2 \\times 50 = 100$, so $x = 10$ or $x = -10$ — squaring cannot tell them apart, and it never can. The extra condition is what decides: $x$ is negative, so $x = -10$. Second route, working from the ratio instead of the middle term: three terms with ratio $r$ mean $2r^2 = 50$, so $r^2 = 25$ and $r = \\pm 5$. A negative middle term forces $r = -5$, and then $x = 2 \\times (-5) = -10$ ✓. Check the whole sequence: $2, -10, 50$, where $-10 \\times (-5) = 50$ ✓ — two sign flips put the last term back above zero, which is why a negative middle term is possible at all. (Choice $10$ is the positive root, thrown out by the condition the problem states ✗. Choice $26 = \\frac{2 + 50}{2}$ is the ARITHMETIC mean, right for a sequence that adds and wrong for one that multiplies ✗. Choice $-26$ is that same average with a minus sign pasted on, which fixes the sign but not the method ✗.)',
    },
    {
      q: 'The numbers $4, x, 64$ form a geometric sequence, and $x$ is negative. What is $x$?',
      choices: ['$16$', '$34$', '$-16$', '$-34$'],
      answer: 2,
      solution:
        'The middle term of a geometric sequence squares to the product of its neighbours: $x^2 = 4 \\times 64 = 256$, so $x = 16$ or $x = -16$. The stated condition picks the negative one: $x = -16$. Second route, through the ratio: $4r^2 = 64$ gives $r^2 = 16$ and $r = \\pm 4$, and a negative middle term needs $r = -4$, so $x = 4 \\times (-4) = -16$ ✓. Verify forward: $4, -16, 64$, and $-16 \\times (-4) = 64$ ✓. Notice the sequence is perfectly legitimate even though it dips below zero in the middle — a negative ratio makes the signs alternate, and by the third term the alternation has come back around. (Choice $16$ ignores the sign condition ✗. Choice $34 = \\frac{4 + 64}{2}$ is the arithmetic mean, the tool for sequences that ADD ✗. Choice $-34$ negates that average, borrowing the right sign from the wrong calculation ✗.)',
    },
    {
      q: 'The numbers $18, x, 8$ form a geometric sequence, and $x$ is negative. What is $x$?',
      choices: ['$-12$', '$12$', '$13$', '$-13$'],
      answer: 0,
      solution:
        'This sequence shrinks, but the rule is unchanged: $x^2 = 18 \\times 8 = 144$, so $x = 12$ or $x = -12$, and the condition selects $x = -12$. Second route, through the ratio: $18r^2 = 8$ gives $r^2 = \\frac{8}{18} = \\frac{4}{9}$, so $r = \\pm\\frac{2}{3}$, and a negative middle term forces $r = -\\frac{2}{3}$. Then $x = 18 \\times \\left(-\\frac{2}{3}\\right) = -12$ ✓, and the next step confirms the end: $-12 \\times \\left(-\\frac{2}{3}\\right) = 8$ ✓. A shrinking sequence and an alternating one at the same time — the size falls by a third at every step while the sign flips. (Choice $12$ is the positive root the condition rules out ✗. Choice $13 = \\frac{18 + 8}{2}$ is the arithmetic mean ✗. Choice $-13$ is that average made negative, which satisfies the sign condition without satisfying the sequence: $\\frac{-13}{18}$ and $\\frac{8}{-13}$ are not equal ✗.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 21,
  challenge,
}
