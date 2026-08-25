// Introduction to Algebra chapter 12 — variations for sections 12.1 and 12.2.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was re-derived from the question text alone and then checked a
//    SECOND, INDEPENDENT way: every power of $i$ is confirmed both by the
//    remainder-mod-4 rule and by walking the cycle out, every square root of a
//    negative is confirmed by squaring the answer back, and every equation
//    solution is substituted into the original equation. Checks are never run
//    at a point where the expression collapses to zero — a zero check passes
//    for almost any wrong answer, so it proves nothing.
//  - Each distractor is one named mistake, named in a parenthetical at the end
//    of the solution, and the named mistake really does produce that number.
//    The traps running through this pair of sections are: MISREADING WHICH
//    OPERATION the equation uses, FORGETTING TO SIMPLIFY a perfect square,
//    treating the number systems as SEPARATE BOXES instead of nested ones,
//    FORGETTING THE NEGATIVE TWIN of a square root, DROPPING THE MINUS SIGN
//    when $i^2$ is replaced by $-1$, using $\sqrt{-a}\sqrt{-b} = \sqrt{ab}$
//    (which is false for positive $a$ and $b$), COUNTING THE CYCLE FROM THE
//    WRONG END when reducing a power of $i$, and SQUARING ONLY THE $i$ while
//    leaving the coefficient alone.
//  - No two choices inside an item name the same value, even written two ways.

const s121 = [
  // p1 — which number system does this equation force us to invent?
  [
    {
      q: 'Sam writes the equation $n + 12 = 5$. Which kind of number does its solution force us to invent, beyond the counting numbers?',
      choices: ['Negative numbers', 'Fractions', 'Irrational numbers', 'Imaginary numbers'],
      answer: 0,
      solution:
        'Subtract $12$ from both sides: $n = 5 - 12 = -7$. Check it a second way by substituting: $-7 + 12 = 5$ ✓. A counting number is never below $1$, so this equation needs the negatives — and once you have them you have the integers. (Choosing “Fractions” comes from MISREADING the equation as $12n = 5$, which really would need $\\frac{5}{12}$; “Irrational numbers” comes from reading it as $n^2 = 5$; “Imaginary numbers” comes from reading it as $n^2 + 5 = 0$. Only a square of an unknown ever reaches that far up the tower.)',
    },
    {
      q: 'Which of these equations CANNOT be solved with an integer, so that fractions had to be invented?',
      choices: ['$x + 8 = 3$', '$x - 4 = 9$', '$x^2 = 16$', '$6x = 15$'],
      answer: 3,
      solution:
        'Solve each one. $x + 8 = 3$ gives $x = -5$; $x - 4 = 9$ gives $x = 13$; $x^2 = 16$ gives $x = 4$ or $x = -4$; and $6x = 15$ gives $x = \\frac{15}{6} = \\frac{5}{2}$. Only that last one is not an integer. Check it a second way by substituting: $6 \\times \\frac{5}{2} = \\frac{30}{2} = 15$ ✓. (Choosing $x + 8 = 3$ comes from thinking a NEGATIVE answer is not an integer — but $-5$ is a perfectly good integer; choosing $x - 4 = 9$ comes from not solving at all, since $13$ is even a counting number; choosing $x^2 = 16$ comes from assuming every square root is a fraction, but $16$ is a perfect square.)',
    },
    {
      q: 'A recipe splits $7$ cups of flour equally between $2$ batches, so the cups per batch solves $2c = 7$. What kind of number is $c$?',
      choices: ['An integer', 'A rational number that is not an integer', 'An irrational number', 'An imaginary number'],
      answer: 1,
      solution:
        'Divide both sides by $2$: $c = \\frac{7}{2}$, which is $3.5$ cups. That is a fraction of integers, so it is rational — but it sits between $3$ and $4$, so it is not an integer. Check a second way: two batches of $3.5$ cups make $3.5 + 3.5 = 7$ cups ✓. (“An integer” comes from ROUNDING $3.5$ to $3$ or $4$, and neither doubles to $7$; “An irrational number” comes from thinking any answer with a decimal point cannot be a fraction, but $3.5 = \\frac{7}{2}$; “An imaginary number” comes from confusing “not a whole number” with “not a real number”.)',
    },
  ],
  // p2 — solve a one-step equation whose answer is a fraction
  [
    {
      q: 'What is the solution of $6x = 9$?',
      choices: ['$x = \\frac{2}{3}$', '$x = 54$', '$x = 3$', '$x = \\frac{3}{2}$'],
      answer: 3,
      solution:
        'Divide both sides by $6$: $x = \\frac{9}{6} = \\frac{3}{2}$. Check a second way by substituting back: $6 \\times \\frac{3}{2} = \\frac{18}{2} = 9$ ✓. No integer works, since $6 \\times 1 = 6$ is too small and $6 \\times 2 = 12$ is too big. (The choice $\\frac{2}{3}$ FLIPS THE FRACTION, dividing $6$ by $9$ instead of $9$ by $6$; the choice $54$ MULTIPLIES the two numbers instead of dividing; the choice $3$ SUBTRACTS, computing $9 - 6$.)',
    },
    {
      q: 'For which value of $k$ does the equation $8x = k$ have the solution $x = \\frac{5}{4}$?',
      choices: ['$10$', '$\\frac{5}{32}$', '$32$', '$40$'],
      answer: 0,
      solution:
        'Run the equation forward instead of backward: $k = 8 \\times \\frac{5}{4} = \\frac{40}{4} = 10$. Check a second, independent way by solving $8x = 10$ from scratch: $x = \\frac{10}{8} = \\frac{5}{4}$ ✓. (The choice $\\frac{5}{32}$ DIVIDES by $8$ instead of multiplying, giving $\\frac{5}{4} \\div 8 = \\frac{5}{32}$; the choice $32$ multiplies $8$ by the DENOMINATOR $4$; the choice $40$ multiplies $8$ by the NUMERATOR $5$ and forgets to divide by $4$.)',
    },
    {
      q: 'Three identical bricks together weigh $8$ kilograms, so the weight $w$ of one brick satisfies $3w = 8$. What is $w$?',
      choices: ['$w = 24$', '$w = 5$', '$w = \\frac{8}{3}$', '$w = \\frac{3}{8}$'],
      answer: 2,
      solution:
        'Divide both sides by $3$: $w = \\frac{8}{3}$ kilograms, a little under $2.7$. Check a second way by adding three bricks up: $\\frac{8}{3} + \\frac{8}{3} + \\frac{8}{3} = \\frac{24}{3} = 8$ ✓. (The choice $24$ MULTIPLIES $3$ by $8$ instead of dividing — that is the weight of three whole piles, not one brick; the choice $5$ SUBTRACTS, computing $8 - 3$, and three $5$-kilogram bricks would weigh $15$; the choice $\\frac{3}{8}$ FLIPS THE FRACTION.)',
    },
  ],
  // p3 — place a number in the tower
  [
    {
      q: 'Which of these numbers is a rational number but NOT an integer?',
      choices: ['$\\sqrt{16}$', '$-3$', '$\\frac{4}{5}$', '$\\sqrt{5}$'],
      answer: 2,
      solution:
        '$\\frac{4}{5}$ is a fraction of integers, so it is rational, and it sits between $0$ and $1$, so it is not an integer. Check the others a second way by simplifying each first: $\\sqrt{16} = 4$, an integer; $-3$ is already an integer; and $\\sqrt{5} \\approx 2.236$, which never settles into a fraction because $5$ is not a perfect square. (The choice $\\sqrt{16}$ comes from FORGETTING TO SIMPLIFY a perfect square before classifying; the choice $-3$ comes from thinking negatives are shut out of the integers; the choice $\\sqrt{5}$ comes from thinking a square-root sign always means a fraction.)',
    },
    {
      q: 'Which of these numbers is real but NOT rational?',
      choices: ['$\\sqrt{36}$', '$\\sqrt{10}$', '$-\\frac{9}{4}$', '$0$'],
      answer: 1,
      solution:
        'Since $10$ is not a perfect square — it lands between $3^2 = 9$ and $4^2 = 16$ — the number $\\sqrt{10} \\approx 3.162$ cannot be written as a fraction of integers, so it is irrational. It is still real: you can point to it on the number line. Check the others a second way by writing each as a fraction: $\\sqrt{36} = 6 = \\frac{6}{1}$, $-\\frac{9}{4}$ is already a fraction, and $0 = \\frac{0}{1}$. (The choice $\\sqrt{36}$ comes from FORGETTING TO SIMPLIFY, since $6 \\times 6 = 36$; the choice $-\\frac{9}{4}$ comes from thinking a negative fraction is not rational; the choice $0$ comes from thinking zero is left out of the rationals.)',
    },
    {
      q: 'Which statement about the number $\\sqrt{144}$ is true?',
      choices: [
        'It is irrational, because $144$ is not a perfect square',
        'It is irrational, because a square root can never be written as a fraction',
        'It is a natural number, but not a rational number',
        'It is an integer, and therefore rational as well',
      ],
      answer: 3,
      solution:
        'Simplify before you classify: $\\sqrt{144} = 12$, because $12 \\times 12 = 144$. Check that a second way: $12 \\times 12 = 12 \\times 10 + 12 \\times 2 = 120 + 24 = 144$ ✓. So $\\sqrt{144}$ is the integer $12$, and every integer is rational since $12 = \\frac{12}{1}$. (The first choice comes from not recognising that $144$ IS a perfect square; the second comes from the blanket belief that every square root is irrational, which $\\sqrt{9} = 3$ already disproves; the third treats the systems as SEPARATE BOXES, but they are nested — every natural number is also an integer and also rational.)',
    },
  ],
  // p4 — spot the rational among irrationals
  [
    {
      q: 'Exactly one of these four numbers is rational. Which one?',
      choices: ['$\\sqrt{100}$', '$\\sqrt{3}$', '$\\pi + 1$', '$\\sqrt{2} \\cdot \\sqrt{3}$'],
      answer: 0,
      solution:
        '$\\sqrt{100} = 10$, since $10 \\times 10 = 100$, and $10 = \\frac{10}{1}$ is a fraction of integers. Check a second way: $10$ is a whole number you can land on by counting, so it is certainly rational ✓. (The choice $\\sqrt{3}$ comes from mistaking $3$ for a perfect square, but $\\sqrt{3} \\approx 1.732$; the choice $\\pi + 1$ comes from thinking adding a whole number tames an irrational, but $\\pi + 1 \\approx 4.14159\\ldots$ still never repeats; the choice $\\sqrt{2} \\cdot \\sqrt{3}$ comes from assuming any two irrationals multiply to something rational — here the product is $\\sqrt{6} \\approx 2.449$, and $6$ is not a perfect square.)',
    },
    {
      q: 'Which of these numbers is irrational?',
      choices: ['$\\frac{22}{7}$', '$0.125$', '$\\sqrt{15}$', '$\\sqrt{64}$'],
      answer: 2,
      solution:
        'The number $15$ sits between the perfect squares $9$ and $16$, so $\\sqrt{15} \\approx 3.873$ is not a whole number and cannot be written as a fraction of integers. Check a second way: if $\\sqrt{15}$ were a whole number it would have to be $3$ or $4$, but $3^2 = 9$ and $4^2 = 16$, and neither is $15$ ✓. (The choice $\\frac{22}{7}$ comes from remembering it as a stand-in for $\\pi$, but a fraction of integers is rational by definition; the choice $0.125$ comes from thinking decimals are irrational, but $0.125 = \\frac{1}{8}$; the choice $\\sqrt{64}$ comes from FORGETTING TO SIMPLIFY, since $\\sqrt{64} = 8$.)',
    },
    {
      q: 'Kai adds two numbers and gets a rational answer even though a square root is involved. Which pair did he use?',
      choices: ['$\\sqrt{2}$ and $\\sqrt{2}$', '$\\sqrt{3}$ and $\\sqrt{12}$', '$\\pi$ and $3.14$', '$\\sqrt{5}$ and $6 - \\sqrt{5}$'],
      answer: 3,
      solution:
        'Add the last pair: $\\sqrt{5} + (6 - \\sqrt{5}) = 6$, because the two copies of $\\sqrt{5}$ are opposites and cancel. Check a second way with decimals: $\\sqrt{5} \\approx 2.236$ and $6 - \\sqrt{5} \\approx 3.764$, and $2.236 + 3.764 = 6.000$ ✓. (The first pair gives $2\\sqrt{2} \\approx 2.828$, not $2$ — that choice comes from thinking $\\sqrt{2} + \\sqrt{2}$ collapses to $\\sqrt{4}$; the second pair gives $\\sqrt{3} + 2\\sqrt{3} = 3\\sqrt{3} \\approx 5.196$, and that choice comes from thinking a whole-number coefficient makes a number rational; the third pair comes from believing $3.14$ IS $\\pi$, but $\\pi + 3.14 \\approx 6.2816$, still irrational.)',
    },
  ],
  // p5 — what kind of number solves x^2 = c?
  [
    {
      q: 'A square garden has area $18$ square meters, so its side length $s$ satisfies $s^2 = 18$. What kind of number is $s$?',
      choices: ['An integer', 'A rational number that is not an integer', 'An irrational number', 'An imaginary number'],
      answer: 2,
      solution:
        'The side is $s = \\sqrt{18} \\approx 4.243$ meters. Since $18$ lies between the perfect squares $16$ and $25$, no whole number squares to it, and in fact $\\sqrt{18} = 3\\sqrt{2}$, which is irrational. Check a second way: $4.243 \\times 4.243 \\approx 18.0$ ✓, while $4 \\times 4 = 16$ and $5 \\times 5 = 25$ both miss. (“An integer” comes from ROUNDING $\\sqrt{18}$ to $4$, whose square is only $16$; “a rational number that is not an integer” comes from thinking any decimal must be a fraction; “an imaginary number” comes from confusing an awkward real number with a non-real one — $18$ is positive, so nothing imaginary is needed.)',
    },
    {
      q: 'For which value of $c$ does the equation $x^2 = c$ have a positive solution that is an INTEGER?',
      choices: ['$c = 81$', '$c = 8$', '$c = \\frac{81}{4}$', '$c = -81$'],
      answer: 0,
      solution:
        'We need $c$ to be a perfect square, and $81 = 9^2$, so $x = 9$. Check a second way by substituting: $9^2 = 81$ ✓. (The choice $c = 8$ mistakes $8$ for a perfect square, but $\\sqrt{8} = 2\\sqrt{2} \\approx 2.83$ is irrational; the choice $c = \\frac{81}{4}$ SETTLES FOR A RATIONAL, since $\\sqrt{\\frac{81}{4}} = \\frac{9}{2} = 4.5$, which is not an integer; the choice $c = -81$ forgets that a real number squared is never negative, so that equation has no real solution at all.)',
    },
    {
      q: 'The equation $x^2 = 40$ has two real solutions. Which statement describes them?',
      choices: ['Both are rational', 'Both are irrational', 'One is rational and one is irrational', 'There are no real solutions'],
      answer: 1,
      solution:
        'The solutions are $\\sqrt{40}$ and $-\\sqrt{40}$, that is, about $6.325$ and $-6.325$. Since $40$ sits between the perfect squares $36$ and $49$, neither one is a fraction of integers, so both are irrational. Check a second way: $6.325 \\times 6.325 \\approx 40.0$ ✓, and squaring $-6.325$ gives the same thing, since a negative times a negative is positive. (“Both are rational” mistakes $40$ for a perfect square; “one rational and one irrational” imagines the minus sign changes what kind of number it is, but negating never turns an irrational into a fraction; “no real solutions” confuses this with $x^2 = -40$, where the right side is negative.)',
    },
  ],
  // p6 — which equation escapes the real numbers?
  [
    {
      q: 'Which of these equations has no real solution?',
      choices: ['$x^2 = 36$', '$x^2 = -36$', '$x^2 = 0$', '$x + 36 = 0$'],
      answer: 1,
      solution:
        'Squaring a real number never gives a negative result: positives square to positives, negatives also square to positives, and $0^2 = 0$. So $x^2 = -36$ has no real solution. Check the others a second way by naming an actual solution for each: $x = 6$ works in $x^2 = 36$ since $6^2 = 36$ ✓, $x = 0$ works in $x^2 = 0$, and $x = -36$ works in $x + 36 = 0$ ✓. (Choosing $x^2 = 36$ forgets that $36$ is positive; choosing $x^2 = 0$ comes from thinking zero does not count as a solution; choosing $x + 36 = 0$ comes from thinking a NEGATIVE answer means no answer.)',
    },
    {
      q: 'Which of these equations DOES have a real solution?',
      choices: ['$x^2 + 9 = 0$', '$x^2 = -1$', '$x^2 + 25 = 16$', '$x^2 - 25 = 0$'],
      answer: 3,
      solution:
        'Rearrange the last one: $x^2 = 25$, so $x = 5$ or $x = -5$. Check at the rearranged step, where nothing has collapsed to zero yet: $5^2 = 25$ ✓ and $(-5)^2 = 25$ ✓, so both really do satisfy $x^2 = 25$. Compare with a losing candidate: for $x^2 + 25 = 16$ the same move gives $x^2 = -9$, and no real number squares to $-9$ ✗. (The choice $x^2 + 9 = 0$ rearranges to $x^2 = -9$, and picking it comes from taking $\\sqrt{9} = 3$ and ignoring the minus sign; the choice $x^2 = -1$ is the very equation that has no real solution — it is what forced people to invent $i$; the choice $x^2 + 25 = 16$ really means $x^2 = -9$, and picking it comes from MOVING THE $25$ ACROSS WITHOUT CHANGING ITS SIGN, which would give the solvable-looking $x^2 = 41$.)',
    },
    {
      q: 'For which values of $c$ does $x^2 = c$ have exactly ONE real solution?',
      choices: ['Every $c$ greater than $0$', 'Every $c$ less than $0$', 'Only $c = 0$', 'No value of $c$'],
      answer: 2,
      solution:
        'When $c$ is positive there are two solutions, $\\sqrt{c}$ and $-\\sqrt{c}$; when $c$ is negative there are none, since no real square is negative. Only $c = 0$ leaves exactly one, namely $x = 0$, because $\\sqrt{0}$ and $-\\sqrt{0}$ are the same number. Check a second way with a real case: $c = 9$ gives both $3$ and $-3$, so $9$ is not the answer ✓, while $c = 0$ gives only $x = 0$. (“Every $c$ greater than $0$” FORGETS THE NEGATIVE TWIN of a square root; “every $c$ less than $0$” counts a negative right side as giving one solution instead of none; “no value of $c$” overlooks the special case $c = 0$.)',
    },
  ],
  // p7 — classify a decimal or a simplified fraction
  [
    {
      q: 'How is the number $-2.4$ best described?',
      choices: ['Rational', 'Irrational', 'An integer', 'A natural number'],
      answer: 0,
      solution:
        'A terminating decimal is always a fraction in disguise: $-2.4 = -\\frac{24}{10} = -\\frac{12}{5}$, a fraction of integers, so it is rational. Check a second way by dividing: $12 \\div 5 = 2.4$ ✓, so $-\\frac{12}{5} = -2.4$. (“Irrational” comes from thinking any number with a decimal point cannot be a fraction; “an integer” comes from ROUNDING $-2.4$ to $-2$, which is a different number; “a natural number” comes from forgetting that the naturals are the positive whole numbers $1, 2, 3, \\ldots$ and never include a negative.)',
    },
    {
      q: 'Which of these best describes the number $\\frac{18}{6}$?',
      choices: ['Irrational', 'A rational number that is not an integer', 'A natural number that is not rational', 'An integer'],
      answer: 3,
      solution:
        'Simplify before classifying: $\\frac{18}{6} = 3$, a whole number. Check a second way by multiplying back: $3 \\times 6 = 18$ ✓. So this number is an integer — and, being an integer, it is rational too, but “an integer” is the sharpest description offered. (“Irrational” comes from thinking a fraction bar signals an irrational number; “a rational number that is not an integer” comes from FORGETTING TO SIMPLIFY the fraction first; “a natural number that is not rational” treats the systems as SEPARATE BOXES, but they are nested — every natural number is rational.)',
    },
    {
      q: 'Which of these numbers is NOT rational?',
      choices: ['$-8$', '$\\sqrt{50}$', '$2.6$', '$\\frac{0}{7}$'],
      answer: 1,
      solution:
        'Since $50$ lies between the perfect squares $49$ and $64$, the number $\\sqrt{50} \\approx 7.071$ is irrational. Check a second way: $\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$, and $\\sqrt{2}$ is the classic irrational, so five of them is irrational as well ✓. (The choice $-8$ comes from thinking negatives are not rational, but $-8 = \\frac{-8}{1}$; the choice $2.6$ comes from thinking decimals are not rational, but $2.6 = \\frac{13}{5}$; the choice $\\frac{0}{7}$ comes from thinking zero is not rational, but $\\frac{0}{7} = 0 = \\frac{0}{1}$.)',
    },
  ],
  // p8 — true/false about how the systems nest
  [
    {
      q: 'Which of these statements is TRUE?',
      choices: [
        'Every rational number is a natural number',
        'No rational number is an integer',
        'Every natural number is a rational number',
        'Every irrational number is also rational',
      ],
      answer: 2,
      solution:
        'Any natural number $n$ can be written as $\\frac{n}{1}$, which is a fraction of integers, so it is rational. Check a second way with a concrete case: $7 = \\frac{7}{1}$ ✓, and the same trick works for every counting number. (The first choice REVERSES THE NESTING — $\\frac{1}{2}$ is rational but is not a counting number; the second treats the systems as SEPARATE BOXES, but $5 = \\frac{5}{1}$ is both rational and an integer; the fourth confuses the two look-alike words, and $\\sqrt{2}$ is irrational precisely because it is not rational.)',
    },
    {
      q: 'Which of these statements is FALSE?',
      choices: ['Every integer is a real number', 'Every real number is rational', 'Some rational numbers are negative', 'Zero is an integer'],
      answer: 1,
      solution:
        'The real numbers fill the whole number line, and some of the points on it — such as $\\sqrt{2} \\approx 1.414$ and $\\pi$ — are not fractions of integers. So “every real number is rational” is false. Check a second way: if $\\sqrt{2}$ were rational the equation $x^2 = 2$ would have a fraction solution, and no fraction squares to exactly $2$ ✓. (Calling the first statement false forgets that the integers sit INSIDE the reals; calling the third false forgets that $-\\frac{3}{4}$ is a perfectly good rational; calling the fourth false forgets that the integers run $\\ldots, -1, 0, 1, \\ldots$ and include zero.)',
    },
    {
      q: 'Mia claims, “If a number is not an integer, then it must be irrational.” Which number shows that her claim is false?',
      choices: ['$\\frac{3}{4}$', '$\\sqrt{2}$', '$-6$', '$\\sqrt{-1}$'],
      answer: 0,
      solution:
        'A counterexample has to be not an integer AND not irrational. The number $\\frac{3}{4} = 0.75$ sits between $0$ and $1$, so it is not an integer, yet it is a fraction of integers, so it is rational. Check a second way: multiply back, $\\frac{3}{4} \\times 4 = 3$, so it really is the ratio of two whole numbers ✓. (The choice $\\sqrt{2}$ AGREES with Mia — it is not an integer and it IS irrational — so it cannot disprove her; the choice $-6$ IS an integer, so her claim says nothing about it; the choice $\\sqrt{-1}$ steps outside the real numbers entirely, where the labels “integer” and “irrational” do not even apply.)',
    },
  ],
  // p9 — irrational pieces that combine into something rational
  [
    {
      q: 'What is $(\\sqrt{7} + 4) - \\sqrt{7}$, and what kind of number is it?',
      choices: [
        '$4\\sqrt{7}$, an irrational number',
        '$4$, an irrational number',
        '$2\\sqrt{7} + 4$, an irrational number',
        '$4$, a rational number',
      ],
      answer: 3,
      solution:
        'The $+\\sqrt{7}$ and the $-\\sqrt{7}$ are opposites, so they cancel and leave exactly $4$ — a rational number. Check a second way with decimals: $\\sqrt{7} \\approx 2.6458$, so $\\sqrt{7} + 4 \\approx 6.6458$, and $6.6458 - 2.6458 = 4.0000$ ✓. Irrational pieces can cancel each other out. (The choice $4\\sqrt{7} \\approx 10.58$ MULTIPLIES the leftovers instead of cancelling them; the choice “$4$, an irrational number” gets the arithmetic right but assumes anything born from a square root stays irrational; the choice $2\\sqrt{7} + 4 \\approx 9.29$ ADDS the two roots instead of subtracting.)',
    },
    {
      q: 'Two irrational numbers are multiplied and the product turns out to be rational. Which pair does that?',
      choices: ['$\\sqrt{3}$ and $\\sqrt{5}$', '$\\pi$ and $\\sqrt{2}$', '$\\sqrt{6}$ and $\\sqrt{6}$', '$1 + \\sqrt{2}$ and $\\sqrt{2}$'],
      answer: 2,
      solution:
        'A square root times itself undoes the root: $\\sqrt{6} \\cdot \\sqrt{6} = 6$, which is rational. Check a second way with decimals: $\\sqrt{6} \\approx 2.449$, and $2.449 \\times 2.449 \\approx 5.998$, which rounds to $6$ ✓. (The first pair gives $\\sqrt{15} \\approx 3.873$, and choosing it comes from assuming any two roots multiply to a whole number — but $15$ is not a perfect square; the second pair gives about $4.443$, and choosing it comes from thinking a root can cancel $\\pi$; the fourth pair gives $\\sqrt{2} + 2 \\approx 3.414$, and choosing it comes from letting the two $\\sqrt{2}$s pair off while FORGETTING THE LEFTOVER $1 \\cdot \\sqrt{2}$.)',
    },
    {
      q: 'Can an irrational number plus a rational number ever be rational?',
      choices: [
        'No — such a sum is always irrational',
        'Yes, whenever the rational number is $0$',
        'Yes, whenever the rational number is negative',
        'Yes, whenever the irrational number is a square root',
      ],
      answer: 0,
      solution:
        'Suppose an irrational $x$ and a rational $r$ added to a rational total $t$. Then $x = t - r$, and a rational minus a rational is rational — so $x$ would have been rational after all. That contradiction means the sum is always irrational. Check a second way with a real case: $\\sqrt{2} + 3 \\approx 4.4142$, whose digits never settle into a repeating pattern ✓. (“Whenever the rational number is $0$” fails because adding $0$ changes nothing: $\\sqrt{2} + 0 = \\sqrt{2}$, still irrational; “whenever the rational number is negative” fails because $\\sqrt{2} - 1 \\approx 0.4142$ is still irrational; “whenever the irrational number is a square root” fails because $\\pi$ and $\\sqrt{2}$ behave exactly alike here.)',
    },
  ],
  // p10 — name the smallest system that holds the solution
  [
    {
      q: 'Which equation has a solution that is an integer but NOT a counting number?',
      choices: ['$x + 4 = 11$', '$3x = 8$', '$x^2 = 3$', '$x + 11 = 4$'],
      answer: 3,
      solution:
        'Solve the last one: $x = 4 - 11 = -7$. That is an integer, and since the counting numbers start at $1$, it is not one of them. Check a second way by substituting: $-7 + 11 = 4$ ✓. (The choice $x + 4 = 11$ gives $x = 7$, which is already a counting number, so no new system is needed; the choice $3x = 8$ gives $x = \\frac{8}{3}$, which needs the RATIONALS rather than the integers; the choice $x^2 = 3$ gives $x = \\sqrt{3} \\approx 1.732$, which needs the irrationals.)',
    },
    {
      q: 'What is the smallest number system on our tower — naturals, integers, rationals, reals — that contains the solution of $4x - 3 = 0$?',
      choices: ['The naturals', 'The rationals', 'The integers', 'The irrationals'],
      answer: 1,
      solution:
        'Add $3$ to both sides and divide by $4$: $x = \\frac{3}{4}$. That is not a whole number, since it sits between $0$ and $1$, but it is a fraction of integers, so the rationals are the first system big enough. Check at the step before the zero, where the numbers still discriminate: the equation says $4x = 3$, and $4 \\times \\frac{3}{4} = 3$ ✓, while $4 \\times 1 = 4$ ✗. (“The naturals” comes from reading a solution of $3$ or $4$ straight off the equation; “the integers” comes from ROUNDING $\\frac{3}{4}$ to $1$, and $4 \\times 1 - 3 = 1$, not $0$; “the irrationals” comes from thinking any number that is not whole must be irrational.)',
    },
    {
      q: 'What is the smallest number system on our tower that contains BOTH solutions of $x^2 = 64$?',
      choices: ['The naturals', 'The rationals', 'The integers', 'The reals'],
      answer: 2,
      solution:
        'The two solutions are $8$ and $-8$, since $8^2 = 64$ and $(-8)^2 = 64$ as well. The number $8$ is a counting number, but $-8$ is not, so we need the integers — and both fit there. Check a second way: $-8$ times $-8$ is a negative times a negative, which is positive, giving $64$ ✓. (“The naturals” reports only the positive root and FORGETS THE NEGATIVE TWIN; “the rationals” climbs one level too high, since both roots are already integers; “the reals” jumps to the very top just because a square appeared.)',
    },
  ],
]

const s122 = [
  // p1 — the defining property of i
  [
    {
      q: 'Which equation is the definition of the number $i$?',
      choices: ['$i^2 = -1$', '$i^2 = 1$', '$i = -1$', '$i^2 = i$'],
      answer: 0,
      solution:
        'The whole point of inventing $i$ was to solve $x^2 = -1$, so $i$ is declared to be a number with $i^2 = -1$. Check a second way by asking what the other options would buy us: if $i^2$ were $1$, then $i$ would just be $1$ or $-1$ and we would have invented nothing new. (The choice $i^2 = 1$ copies the true fact $(-1)^2 = 1$ onto the wrong symbol; the choice $i = -1$ confuses $i$ itself with its square; the choice $i^2 = i$ assumes squaring leaves $i$ alone, which is only true of $0$ and $1$.)',
    },
    {
      q: 'Compute $(-i) \\cdot (-i)$.',
      choices: ['$1$', '$-1$', '$i$', '$-i$'],
      answer: 1,
      solution:
        'A negative times a negative is positive, so the two minus signs give $+1$ and we are left with $i \\cdot i = i^2 = -1$. Check a second way: $(-i)^2 = (-1)^2 \\cdot i^2 = 1 \\cdot (-1) = -1$ ✓. So $-i$ squares to $-1$ just as $i$ does — both are square roots of $-1$. (The choice $1$ handles the minus signs and then STOPS, forgetting that $i^2$ is still $-1$; the choice $i$ imagines the two minus signs cancel and leave a lone $i$; the choice $-i$ comes from multiplying only one factor, that is, forgetting to square at all.)',
    },
    {
      q: 'For which exponent $n$ from $1$ to $4$ is $i^n = -1$?',
      choices: ['$n = 1$', '$n = 3$', '$n = 4$', '$n = 2$'],
      answer: 3,
      solution:
        'Walk the first four powers: $i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$. Only $n = 2$ gives $-1$. Check a second way: $i^2 = -1$ is the defining property of $i$, and none of the other three values on the list is $-1$ ✓. (The choice $n = 1$ mistakes $i$ itself for $-1$; the choice $n = 3$ gives $-i$, and picking it means DROPPING THE $i$ and keeping only the sign; the choice $n = 4$ gives $+1$, and picking it means losing the minus sign.)',
    },
  ],
  // p2 — square root of a negative number
  [
    {
      q: 'Simplify $\\sqrt{-81}$.',
      choices: ['$-9$', '$9$', '$9i$', '$81i$'],
      answer: 2,
      solution:
        'Pull the $i$ out front: $\\sqrt{-81} = i\\sqrt{81} = 9i$, since $9 \\times 9 = 81$. Check a second way by squaring the answer: $(9i)^2 = 81i^2 = 81 \\times (-1) = -81$ ✓. (The choice $-9$ lets the minus sign escape the radical, but $(-9)^2 = +81$, not $-81$; the choice $9$ DROPS THE MINUS SIGN entirely, and $9^2 = 81$; the choice $81i$ FORGETS TO TAKE THE SQUARE ROOT of $81$, and $(81i)^2 = -6561$.)',
    },
    {
      q: 'For which positive number $k$ is $\\sqrt{-k} = 12i$?',
      choices: ['$k = 12$', '$k = 24$', '$k = \\sqrt{12}$', '$k = 144$'],
      answer: 3,
      solution:
        'Since $\\sqrt{-k} = i\\sqrt{k}$, we need $\\sqrt{k} = 12$, so $k = 12^2 = 144$. Check a second way by squaring the given value: $(12i)^2 = 144i^2 = -144$, so the number under the radical must be $-144$ ✓. (The choice $k = 12$ copies the coefficient without squaring it, and $\\sqrt{-12} = 2i\\sqrt{3} \\approx 3.46i$; the choice $k = 24$ DOUBLES instead of squaring; the choice $k = \\sqrt{12}$ takes a square root where a square belongs, which is exactly backwards.)',
    },
    {
      q: 'A student writes $\\sqrt{-121} = -11$. What is the correct value?',
      choices: ['$11$', '$11i$', '$121i$', '$-11i$'],
      answer: 1,
      solution:
        'The rule is $\\sqrt{-k} = i\\sqrt{k}$ for positive $k$, so $\\sqrt{-121} = i\\sqrt{121} = 11i$, since $11 \\times 11 = 121$. Check a second way by squaring: $(11i)^2 = 121i^2 = -121$ ✓, while the student’s $-11$ squares to $+121$ ✗. (The choice $11$ DROPS THE MINUS SIGN under the radical; the choice $121i$ forgets to take the square root of $121$; the choice $-11i$ carries the student’s stray minus sign into the answer, but the radical sign asks for the principal root $i\\sqrt{121} = +11i$.)',
    },
  ],
  // p3 — a small odd power of i
  [
    {
      q: 'What is $i^5$?',
      choices: ['$-1$', '$1$', '$-i$', '$i$'],
      answer: 3,
      solution:
        'Split off a full cycle: $i^5 = i^4 \\cdot i = 1 \\cdot i = i$. Check a second way by walking the cycle out one step at a time: $i, -1, -i, 1, i$ — the fifth entry is $i$ ✓. (The choice $-1$ is an OFF-BY-ONE in the cycle: the remainder is $1$, but reading the second entry of the list instead of the first lands on $-1$; the choice $1$ reduces all the way to $i^4 = 1$ and FORGETS THE LEFTOVER factor of $i$; the choice $-i$ reduces the exponent by $2$ instead of by a full cycle of $4$, landing on $i^3 = -i$.)',
    },
    {
      q: 'What is $i^7$?',
      choices: ['$-i$', '$i$', '$1$', '$-1$'],
      answer: 0,
      solution:
        'Divide the exponent by $4$: $7 = 4 \\times 1 + 3$, so $i^7 = i^4 \\cdot i^3 = 1 \\cdot (-i) = -i$. Check a second way by walking the cycle: $i, -1, -i, 1, i, -1, -i$ — the seventh entry is $-i$ ✓. (The choice $i$ reduces correctly to $i^3$ but then mis-remembers $i^3$ as $i$, DROPPING THE MINUS SIGN; the choice $1$ reduces to $i^4 = 1$ and forgets the leftover $i^3$; the choice $-1$ keeps the sign of $i^3$ but DROPS THE $i$.)',
    },
    {
      q: 'Which of these powers of $i$ equals $-i$?',
      choices: ['$i^4$', '$i^6$', '$i^{11}$', '$i^9$'],
      answer: 2,
      solution:
        'Take each exponent modulo $4$: $4$ leaves $0$, $6$ leaves $2$, $11$ leaves $3$, and $9$ leaves $1$. Only a remainder of $3$ gives $-i$, so the answer is $i^{11}$. Check a second way: $i^{11} = (i^4)^2 \\cdot i^3 = 1 \\cdot (-i) = -i$ ✓. (The choice $i^4$ equals $1$, and picking it comes from thinking the cycle ends on $-i$; the choice $i^6$ equals $-1$, and picking it comes from mistaking $-1$ for $-i$; the choice $i^9$ equals $i$, and picking it comes from LOSING THE MINUS SIGN.)',
    },
  ],
  // p4 — powers of i that land back on 1
  [
    {
      q: 'What is $i^8$?',
      choices: ['$i$', '$1$', '$-1$', '$-i$'],
      answer: 1,
      solution:
        'Two full cycles: $i^8 = i^4 \\cdot i^4 = 1 \\times 1 = 1$. Check a second way with a different grouping: $i^8 = (i^2)^4 = (-1)^4 = 1$, since an even power of $-1$ is positive ✓. (The choice $i$ comes from reducing to $i^0$ and reading $i^0$ as $i$ instead of $1$; the choice $-1$ comes from DIVIDING the exponent by $4$ — $8 \\div 4 = 2$ — and reporting $i^2$; the choice $-i$ is an off-by-one that lands on the third entry of the cycle instead of the fourth.)',
    },
    {
      q: 'Which of these powers of $i$ is equal to $1$?',
      choices: ['$i^{14}$', '$i^{19}$', '$i^{16}$', '$i^{21}$'],
      answer: 2,
      solution:
        'A power of $i$ is $1$ exactly when the exponent is a multiple of $4$, and $16 = 4 \\times 4$. Check a second way: $i^{16} = (i^2)^8 = (-1)^8 = 1$ ✓. (The choice $i^{14}$ has remainder $2$, so it equals $-1$, and picking it comes from thinking every even exponent gives $1$; the choice $i^{19}$ has remainder $3$, so it equals $-i$; the choice $i^{21}$ has remainder $1$, so it equals $i$, and picking it comes from thinking the cycle restarts at $1$ one step after a multiple of $4$ instead of at $i$.)',
    },
    {
      q: 'What is the value of $i^{100} \\div i^{98}$?',
      choices: ['$-1$', '$1$', '$i$', '$-i$'],
      answer: 0,
      solution:
        'Dividing powers subtracts exponents: $i^{100} \\div i^{98} = i^{2} = -1$. Check a second, independent way by evaluating each power first: $100$ is a multiple of $4$ so $i^{100} = 1$, and $98 = 4 \\times 24 + 2$ so $i^{98} = -1$; then $1 \\div (-1) = -1$ ✓. (The choice $1$ cancels $i^{98}$ against $i^{100}$ and forgets the TWO leftover factors of $i$; the choice $i$ keeps only ONE leftover factor instead of two; the choice $-i$ subtracts to get $2$ but then reads the third entry of the cycle instead of the second.)',
    },
  ],
  // p5 — adding pure imaginary numbers
  [
    {
      q: 'Compute $9i - 4i$.',
      choices: ['$5$', '$13i$', '$-5i$', '$5i$'],
      answer: 3,
      solution:
        'Treat $i$ like a unit you are counting: nine of them minus four of them leaves five of them, so $9i - 4i = 5i$. Check a second way with the distributive law: $9i - 4i = (9-4)i = 5i$ ✓. (The choice $5$ DROPS THE $i$, as if the units cancelled along with the numbers; the choice $13i$ ADDS instead of subtracting; the choice $-5i$ subtracts in the wrong order, computing $4 - 9$.)',
    },
    {
      q: 'Compute $\\sqrt{-16} + \\sqrt{-4}$.',
      choices: ['$20i$', '$6i$', '$2i\\sqrt{5}$', '$-6$'],
      answer: 1,
      solution:
        'Convert each root first: $\\sqrt{-16} = 4i$ and $\\sqrt{-4} = 2i$. Then add like units: $4i + 2i = 6i$. Check a second way by squaring the pieces back: $(4i)^2 = -16$ ✓ and $(2i)^2 = -4$ ✓, so the two conversions were right, and $4 + 2 = 6$. (The choice $20i$ adds $16$ and $4$ under the radicals and never takes the square root; the choice $2i\\sqrt{5}$ is $\\sqrt{-20}$, from merging the two radicals into one — but roots do not add that way, since $\\sqrt{20} \\approx 4.47$ while the true total is $6$; the choice $-6$ gets $6i$ and then replaces the lone $i$ with $-1$, but only $i^2$ becomes $-1$, never a single $i$.)',
    },
    {
      q: 'The sum $7i + z$ equals $2i$. What is $z$?',
      choices: ['$9i$', '$-9i$', '$-5i$', '$5i$'],
      answer: 2,
      solution:
        'Subtract $7i$ from both sides: $z = 2i - 7i = (2-7)i = -5i$. Check a second way by substituting back: $7i + (-5i) = (7-5)i = 2i$ ✓. (The choice $9i$ ADDS $7$ and $2$ instead of subtracting; the choice $-9i$ adds them and then flips the sign; the choice $5i$ subtracts in the wrong order, computing $7 - 2$, and $7i + 5i = 12i$, not $2i$.)',
    },
  ],
  // p6 — multiplying two pure imaginary numbers
  [
    {
      q: 'Compute $(4i)(6i)$.',
      choices: ['$-24$', '$24$', '$24i$', '$-24i$'],
      answer: 0,
      solution:
        'Multiply the numbers and the $i$s separately: $(4i)(6i) = 24i^2$, and $i^2 = -1$, so the answer is $-24$. Check a second, independent way by dividing back: $\\dfrac{-24}{6i} = \\dfrac{-4}{i} = \\dfrac{-4i}{i^2} = \\dfrac{-4i}{-1} = 4i$ ✓, which is the factor we started with. (The choice $24$ DROPS THE MINUS SIGN that $i^2 = -1$ supplies; the choice $24i$ multiplies the numbers but keeps only one $i$; the choice $-24i$ uses $i^2 = -1$ and then hangs on to an extra $i$ as well.)',
    },
    {
      q: 'Compute $(-3i)(7i)$.',
      choices: ['$-21$', '$21i$', '$-21i$', '$21$'],
      answer: 3,
      solution:
        'First the numbers: $(-3)(7) = -21$. Then the $i$s: $i \\cdot i = i^2 = -1$. So the product is $-21 \\times (-1) = 21$ — a positive real number. Check a second, independent way by dividing back: $\\dfrac{21}{7i} = \\dfrac{3}{i} = \\dfrac{3i}{i^2} = \\dfrac{3i}{-1} = -3i$ ✓. (The choice $-21$ multiplies the coefficients and then forgets that $i^2 = -1$ flips the sign a second time; the choice $21i$ flips the sign but also keeps a stray $i$; the choice $-21i$ multiplies the coefficients and keeps one $i$, never using $i^2 = -1$ at all.)',
    },
    {
      q: 'For which number $b$ is $(5i)(bi) = 35$?',
      choices: ['$7$', '$-7$', '$7i$', '$-\\frac{7}{5}$'],
      answer: 1,
      solution:
        'Expand the left side: $(5i)(bi) = 5b\\,i^2 = -5b$. Setting $-5b = 35$ gives $b = -7$. Check a second way by substituting: $(5i)(-7i) = -35i^2 = -35 \\times (-1) = 35$ ✓. (The choice $7$ gives $(5i)(7i) = 35i^2 = -35$ — the right size but the WRONG SIGN; the choice $7i$ smuggles an extra $i$ into $b$, giving $(5i)(7i \\cdot i) = (5i)(-7) = -35i$, which is not even real; the choice $-\\frac{7}{5}$ divides by $25$, the square of $5$, instead of dividing by $5$.)',
    },
  ],
  // p7 — reduce a medium-sized power of i
  [
    {
      q: 'What is $i^{58}$?',
      choices: ['$1$', '$i$', '$-1$', '$-i$'],
      answer: 2,
      solution:
        'Divide by $4$: $58 = 4 \\times 14 + 2$, so $i^{58} = (i^4)^{14} \\cdot i^2 = 1 \\cdot (-1) = -1$. Check a second, independent way by grouping in pairs instead: $i^{58} = (i^2)^{29} = (-1)^{29} = -1$, since an odd power of $-1$ is negative ✓. (The choice $1$ uses that pair grouping but treats $(-1)^{29}$ as positive, forgetting that $29$ is odd; the choice $i$ takes the remainder as $1$ rather than $2$; the choice $-i$ takes the remainder as $3$, one step too far around the cycle.)',
    },
    {
      q: 'What is $i^{75}$?',
      choices: ['$-i$', '$i$', '$1$', '$-1$'],
      answer: 0,
      solution:
        'Divide by $4$: $75 = 4 \\times 18 + 3$, so $i^{75} = i^3 = -i$. Check a second, independent way by counting down instead of up: $76$ is a multiple of $4$, so $i^{76} = 1$, and therefore $i^{75} = \\dfrac{i^{76}}{i} = \\dfrac{1}{i} = -i$, because $i \\times (-i) = -i^2 = 1$ ✓. (The choice $i$ reaches $i^3$ but mis-remembers it as $i$, dropping the minus sign; the choice $1$ reduces all the way to $i^{72} = 1$ and forgets the leftover $i^3$; the choice $-1$ keeps the sign of $i^3$ but drops the $i$.)',
    },
    {
      q: 'A whole number $n$ satisfies $i^n = 1$ and $50 < n < 56$. What is $n$?',
      choices: ['$51$', '$52$', '$53$', '$54$'],
      answer: 1,
      solution:
        'A power of $i$ equals $1$ exactly when the exponent is a multiple of $4$, and the only multiple of $4$ strictly between $50$ and $56$ is $52 = 4 \\times 13$. Check a second, independent way: $i^{52} = (i^2)^{26} = (-1)^{26} = 1$, since $26$ is even ✓. (The choice $51$ has remainder $3$ and gives $-i$ — it stops one short of the multiple of $4$; the choice $53$ has remainder $1$ and gives $i$ — it overshoots by one; the choice $54$ has remainder $2$ and gives $-1$, and picking it comes from thinking any even exponent returns $1$.)',
    },
  ],
  // p8 — solve x^2 = a negative number
  [
    {
      q: 'Solve $x^2 = -36$.',
      choices: [
        '$x = 6$ or $x = -6$',
        '$x = 36i$ or $x = -36i$',
        '$x = -6i$ only',
        '$x = 6i$ or $x = -6i$',
      ],
      answer: 3,
      solution:
        'We need a number whose square is $-36$. Try $x = 6i$: $(6i)^2 = 36i^2 = -36$ ✓. The negative twin works too: $(-6i)^2 = 36i^2 = -36$ ✓, since squaring erases the sign out front. So there are two solutions. (The choice $x = \\pm 6$ solves $x^2 = 36$ instead, DROPPING THE MINUS SIGN on the right; the choice $x = \\pm 36i$ forgets to take the square root of $36$, and $(36i)^2 = -1296$; the choice “$-6i$ only” reports one root and FORGETS THE TWIN.)',
    },
    {
      q: 'For which value of $c$ does $x^2 = c$ have the two solutions $x = 11i$ and $x = -11i$?',
      choices: ['$c = 11$', '$c = 121$', '$c = -121$', '$c = -11$'],
      answer: 2,
      solution:
        'Square one of the given solutions: $(11i)^2 = 121i^2 = -121$, so $c = -121$. Check a second way with the other solution: $(-11i)^2 = 121i^2 = -121$ ✓ — both roots give the same $c$, as they must. (The choice $c = 11$ copies the coefficient without squaring it; the choice $c = 121$ squares correctly but LOSES THE MINUS SIGN that $i^2$ supplies, and $x^2 = 121$ would give the real solutions $\\pm 11$; the choice $c = -11$ remembers the minus but forgets to square.)',
    },
    {
      q: 'Solve $2x^2 + 50 = 0$.',
      choices: [
        '$x = 5i$ or $x = -5i$',
        '$x = 5$ or $x = -5$',
        '$x = 25i$ or $x = -25i$',
        '$x = 50i$ or $x = -50i$',
      ],
      answer: 0,
      solution:
        'Subtract $50$ and divide by $2$: $2x^2 = -50$, so $x^2 = -25$. Now check the candidate against that middle equation, where nothing collapses to zero: $(5i)^2 = 25i^2 = -25$ ✓, and $(-5i)^2 = -25$ ✓ as well. A second, independent look: the real candidate $x = 5$ gives $x^2 = 25$, which is $+25$, not $-25$ ✗, so it fails before we ever reach the zero. (The choice $x = \\pm 5$ moves the $50$ across WITHOUT CHANGING ITS SIGN, solving $2x^2 = 50$; the choice $x = \\pm 25i$ stops at $x^2 = -25$ and reads the $25$ off as the answer without taking a square root; the choice $x = \\pm 50i$ reads the $50$ straight out of the equation, dividing by neither $2$ nor a square root.)',
    },
  ],
  // p9 — a giant power of i
  [
    {
      q: 'What is $i^{1000}$?',
      choices: ['$i$', '$1$', '$-1$', '$-i$'],
      answer: 1,
      solution:
        'Since $1000 = 4 \\times 250$, the exponent is a whole number of cycles: $i^{1000} = (i^4)^{250} = 1^{250} = 1$. Check a second, independent way by pairing instead: $i^{1000} = (i^2)^{500} = (-1)^{500} = 1$, since $500$ is even ✓. (The choice $i$ comes from reducing to $i^0$ and reading it as $i$ rather than $1$; the choice $-1$ uses the pairing but treats $(-1)^{500}$ as negative, forgetting that an even power of $-1$ is positive; the choice $-i$ is an off-by-one that lands on the third entry of the cycle instead of the fourth.)',
    },
    {
      q: 'What is $i^{2023}$?',
      choices: ['$1$', '$i$', '$-i$', '$-1$'],
      answer: 2,
      solution:
        'Divide by $4$: $2023 = 4 \\times 505 + 3$, since $4 \\times 505 = 2020$. So $i^{2023} = i^3 = -i$. Check a second, independent way by counting down from a multiple of $4$: $2024 = 4 \\times 506$, so $i^{2024} = 1$, and $i^{2023} = \\dfrac{1}{i} = -i$, because $i \\times (-i) = 1$ ✓. (The choice $1$ reduces to $i^{2020} = 1$ and forgets the leftover $i^3$; the choice $i$ reaches $i^3$ and then drops its minus sign; the choice $-1$ reads the remainder as $2$ instead of $3$.)',
    },
    {
      q: 'What is $2 \\cdot i^{1234}$?',
      choices: ['$2$', '$2i$', '$-2i$', '$-2$'],
      answer: 3,
      solution:
        'First reduce the power: $1234 = 4 \\times 308 + 2$, since $4 \\times 308 = 1232$, so $i^{1234} = i^2 = -1$. Then $2 \\times (-1) = -2$. Check a second, independent way by pairing: $i^{1234} = (i^2)^{617} = (-1)^{617} = -1$, since $617$ is odd ✓, and doubling gives $-2$. (The choice $2$ treats the even exponent as a full cycle, using $i^{1234} = 1$; the choice $2i$ uses a remainder of $1$, giving $i$; the choice $-2i$ uses a remainder of $3$, giving $-i$ — one step too far around the cycle.)',
    },
  ],
  // p10 — combine squares of imaginary numbers
  [
    {
      q: 'Compute $(5i)^2 + (4i)^2$.',
      choices: ['$-41$', '$41$', '$-9$', '$-41i$'],
      answer: 0,
      solution:
        'Square each piece: $(5i)^2 = 25i^2 = -25$ and $(4i)^2 = 16i^2 = -16$. Adding gives $-25 + (-16) = -41$. Check a second, independent way using square roots: $5i = \\sqrt{-25}$ and $4i = \\sqrt{-16}$, so squaring returns $-25$ and $-16$ ✓, and $25 + 16 = 41$ confirms the size. (The choice $41$ squares the coefficients but forgets that $i^2 = -1$ makes each term negative; the choice $-9$ adds the coefficients instead of their squares, computing $-(5+4)$; the choice $-41i$ replaces $i^2$ with $-1$ and then keeps a stray $i$ anyway.)',
    },
    {
      q: 'Compute $(6i)^2 - (2i)^2$.',
      choices: ['$-40$', '$40$', '$32$', '$-32$'],
      answer: 3,
      solution:
        'Square each piece: $(6i)^2 = 36i^2 = -36$ and $(2i)^2 = 4i^2 = -4$. Subtracting gives $-36 - (-4) = -36 + 4 = -32$. Check a second, independent way with the difference-of-squares pattern: $(6i)^2 - (2i)^2 = (6i + 2i)(6i - 2i) = (8i)(4i) = 32i^2 = -32$ ✓. (The choice $-40$ ADDS the two negatives instead of subtracting, computing $-36 + (-4)$; the choice $40$ adds them and drops the minus signs as well; the choice $32$ gets the size right but forgets the final $i^2 = -1$ in $(8i)(4i)$.)',
    },
    {
      q: 'For which positive number $b$ does $(bi)^2 + (3i)^2 = -34$?',
      choices: ['$b = 25$', '$b = \\sqrt{43}$', '$b = 5$', '$b = -5$'],
      answer: 2,
      solution:
        'Expand: $(bi)^2 = b^2 i^2 = -b^2$ and $(3i)^2 = 9i^2 = -9$, so the equation is $-b^2 - 9 = -34$. Add $9$ to both sides: $-b^2 = -25$, so $b^2 = 25$ and the positive answer is $b = 5$. Check a second way by substituting: $(5i)^2 + (3i)^2 = -25 + (-9) = -34$ ✓. (The choice $b = 25$ solves for $b^2$ and reports it instead of $b$; the choice $b = \\sqrt{43}$ ADDS the $9$ instead of subtracting, giving $b^2 = 34 + 9 = 43$; the choice $b = -5$ is the negative twin, which the word “positive” rules out.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 12,
  sections: {
    '12.1': s121,
    '12.2': s122,
  },
}
