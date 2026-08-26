// Introduction to Algebra chapter 16 — variations for sections 16.3
// (Composition) and 16.4 (Inverse Functions).
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was derived from the question text and then confirmed a SECOND,
//    INDEPENDENT way. For a composition, the other order is computed in full so
//    the "wrong order" distractor is provably a different number or a different
//    expression. For an inverse, BOTH round trips are checked: the claimed
//    inverse is fed the output of the machine, and the machine is fed the output
//    of the claimed inverse, and both must return the starting number.
//  - Where a function needs a restricted domain before it can be reversed, the
//    restriction is named in the solution rather than left implicit.
//  - A variation changes the numbers AND, where it makes sense, the framing or
//    the direction: a story instead of notation, ask for the inner machine
//    instead of the outer one, hand back the composite and ask for a missing
//    piece, ask which of two orders is larger.
//  - Seven traps run through these two sections, and every distractor is one of
//    them, named in the solution with its wrong route worked out. THE WRONG
//    ORDER: running the outer machine first, which is a different composition.
//    THE HALF RUN: stopping after the inner machine and reporting its output.
//    THE LONE OUTER: skipping the inner machine and applying only the outer one
//    to the original input. THE SIGN SLIP: losing a minus sign under a square,
//    or reversing a subtraction. THE RECIPROCAL: reading $f^{-1}$ as
//    $\frac{1}{f}$, which the $-1$ does not mean. THE FORWARD RUN: computing
//    $f(a)$ when $f^{-1}(a)$ was asked for. THE UNDONE STEP: reversing only one
//    of a two-step machine's steps, or reversing both in the wrong order.
//  - No two choices inside an item name the same value, even written two ways.

const s163 = [
  // p1 — inner machine first, numeric. v1 narrates the chain, v2 uses fresh
  //      letters, v3 tells a story about two named machines.
  [
    {
      q: 'A number is dropped into the tripler $g(x) = 3x$, and whatever comes out is dropped into the adder $f(x) = x + 4$. If the starting number is $2$, what leaves the adder?',
      choices: ['$6$', '$12$', '$18$', '$10$'],
      answer: 3,
      solution:
        'The tripler runs first because its output is what the adder receives: $g(2) = 3 \\cdot 2 = 6$, and then $f(6) = 6 + 4 = 10$. Check a second way by writing the chained rule once and using it: $f(g(x)) = 3x + 4$, so at $x = 2$ the value is $6 + 4 = 10$ ✓. (THE WRONG ORDER runs the adder first: $f(2) = 6$, then $g(6) = 18$ — a genuinely different number, which is why the order has to be read carefully ✗. THE HALF RUN reports the tripler’s output $6$ and never uses the adder ✗. The choice $12$ comes from running the two machines side by side on $2$ and adding their outputs, $6 + 6$, which is a sum of functions rather than a chain ✗.)',
    },
    {
      q: 'If $p(x) = x - 5$ and $q(x) = 4x$, what number does $p(q(3))$ produce?',
      choices: ['$7$', '$-8$', '$12$', '$-2$'],
      answer: 0,
      solution:
        'Read the nesting from the inside out: $q$ is inside, so $q(3) = 4 \\cdot 3 = 12$, and then $p(12) = 12 - 5 = 7$. Check a second way with the chained rule: $p(q(x)) = 4x - 5$, and $4(3) - 5 = 7$ ✓. (THE WRONG ORDER computes $q(p(3))$: $p(3) = -2$ and $q(-2) = -8$ ✗. THE HALF RUN stops at $q(3) = 12$ ✗. THE LONE OUTER skips $q$ entirely and reports $p(3) = -2$ ✗.)',
    },
    {
      q: 'Marco sends $5$ through a doubling machine $d(x) = 2x$, then sends that result through a take-away-seven machine $t(x) = x - 7$. What number does Marco finish with?',
      choices: ['$-4$', '$10$', '$3$', '$-2$'],
      answer: 2,
      solution:
        'Doubling happens first: $d(5) = 10$. Feeding that into the second machine gives $t(10) = 10 - 7 = 3$. Check a second way with the combined rule $t(d(x)) = 2x - 7$, which at $x = 5$ gives $10 - 7 = 3$ ✓. (THE WRONG ORDER sends $5$ through the subtractor first: $t(5) = -2$, then $d(-2) = -4$ ✗. THE HALF RUN reports the doubler’s $10$ ✗. THE LONE OUTER reports $t(5) = -2$, using only the second machine ✗.)',
    },
  ],
  // p2 — the same two machines in the OTHER order. v1 keeps notation, v2 uses a
  //      squaring outer machine, v3 is a two-machine story.
  [
    {
      q: 'With $f(x) = x + 6$ and $g(x) = 5x$, what is the value of $g(f(2))$?',
      choices: ['$16$', '$40$', '$8$', '$10$'],
      answer: 1,
      solution:
        'Here $f$ sits inside, so it runs first: $f(2) = 2 + 6 = 8$, and then $g(8) = 5 \\cdot 8 = 40$. Check a second way with the chained rule: $g(f(x)) = 5(x + 6) = 5x + 30$, and $5(2) + 30 = 40$ ✓. (THE WRONG ORDER computes $f(g(2))$: $g(2) = 10$, then $f(10) = 16$ ✗. THE HALF RUN reports $f(2) = 8$ ✗. THE LONE OUTER reports $g(2) = 10$ without ever adding the $6$ ✗.)',
    },
    {
      q: 'Let $h(x) = x - 1$ and $k(x) = x^2$. What is $k(h(5))$?',
      choices: ['$24$', '$25$', '$16$', '$4$'],
      answer: 2,
      solution:
        'Subtract first, square second: $h(5) = 4$, and $k(4) = 4^2 = 16$. Check a second way with the chained rule $k(h(x)) = (x - 1)^2$, which at $x = 5$ is $4^2 = 16$ ✓. (THE WRONG ORDER squares first: $k(5) = 25$, then $h(25) = 24$ ✗. THE LONE OUTER squares the original input and reports $25$ ✗. THE HALF RUN stops at $h(5) = 4$ ✗.)',
    },
    {
      q: 'Two label machines stand in a row. The first prints $n - 3$ for whatever number $n$ it is handed, and the second triples whatever the first one printed. If $7$ goes into the first machine, what does the second machine print?',
      choices: ['$18$', '$4$', '$21$', '$12$'],
      answer: 3,
      solution:
        'The first machine acts on $7$: it prints $7 - 3 = 4$. The second machine triples that: $3 \\cdot 4 = 12$. Check a second way with the combined rule $3(n - 3) = 3n - 9$, which at $n = 7$ gives $21 - 9 = 12$ ✓. (THE WRONG ORDER tripled first and subtracted after: $3 \\cdot 7 = 21$, then $21 - 3 = 18$ ✗. THE HALF RUN reports the first machine’s $4$ ✗. THE LONE OUTER only triples and reports $21$ ✗.)',
    },
  ],
  // p3 — a formula for the composition of two linear machines. v3 flips to the
  //      other order so the inner machine is the named one.
  [
    {
      q: 'If $f(x) = 5x$ and $g(x) = x - 3$, which formula equals $f(g(x))$?',
      choices: ['$5x - 15$', '$5x - 3$', '$5x + 15$', '$x - 15$'],
      answer: 0,
      solution:
        'Substitute the whole rule for $g$ wherever $f$ has an $x$: $f(g(x)) = 5(x - 3) = 5x - 15$. Check a second way with a test number: $g(4) = 1$ and $f(1) = 5$, and the formula gives $5(4) - 15 = 5$ ✓. (THE WRONG ORDER gives $g(f(x)) = 5x - 3$, which at $x = 4$ is $17$, not $5$ ✗. The choice $5x + 15$ distributes the $5$ but flips the sign of the $-3$ ✗. The choice $x - 15$ multiplies only the constant by $5$ and leaves the $x$ alone ✗.)',
    },
    {
      q: 'Let $f(x) = x + 4$ and $g(x) = 2x$. What is a formula for $f(g(x))$?',
      choices: ['$2x + 8$', '$2x + 4$', '$2x$', '$x + 8$'],
      answer: 1,
      solution:
        'The inner machine doubles, and the outer machine then adds $4$ to that doubled value: $f(g(x)) = (2x) + 4 = 2x + 4$. Check a second way with a test number: $g(3) = 6$ and $f(6) = 10$, and the formula gives $2(3) + 4 = 10$ ✓. (THE WRONG ORDER gives $g(f(x)) = 2(x + 4) = 2x + 8$, which at $x = 3$ is $14$ ✗. The choice $2x$ forgets the outer machine’s $+4$ ✗. The choice $x + 8$ doubles the constant instead of the variable ✗.)',
    },
    {
      q: 'Given $f(x) = x - 1$ and $g(x) = 4x$, build the formula for $g(f(x))$.',
      choices: ['$4x - 1$', '$4x + 4$', '$x - 4$', '$4x - 4$'],
      answer: 3,
      solution:
        'Now $f$ is the inner machine, so its whole rule goes into $g$: $g(f(x)) = 4(x - 1) = 4x - 4$. Check a second way with a test number: $f(3) = 2$ and $g(2) = 8$, and the formula gives $4(3) - 4 = 8$ ✓. (THE WRONG ORDER gives $f(g(x)) = 4x - 1$, worth $11$ at $x = 3$ ✗. The choice $4x + 4$ multiplies correctly but flips the sign ✗. The choice $x - 4$ multiplies only the constant by $4$ ✗.)',
    },
  ],
  // p4 — both orders at once, so the student must see that they differ. v2 asks
  //      which order is larger instead of listing both values.
  [
    {
      q: 'Take $f(x) = x + 2$ and $g(x) = 3x$. Which line below reports both compositions at the input $4$ correctly?',
      choices: [
        '$f(g(4)) = 14$ and $g(f(4)) = 18$',
        '$f(g(4)) = 18$ and $g(f(4)) = 14$',
        'Both $f(g(4))$ and $g(f(4))$ equal $14$',
        'Both $f(g(4))$ and $g(f(4))$ equal $18$',
      ],
      answer: 0,
      solution:
        'For $f(g(4))$ the tripler runs first: $g(4) = 12$, then $f(12) = 14$. For $g(f(4))$ the adder runs first: $f(4) = 6$, then $g(6) = 18$. Check a second way with the two chained rules: $f(g(x)) = 3x + 2$ gives $14$ at $x = 4$, and $g(f(x)) = 3(x + 2) = 3x + 6$ gives $18$ ✓. (THE WRONG ORDER produces the swapped line ✗, and the two "both equal" lines claim the compositions agree, which the rules $3x + 2$ and $3x + 6$ never do ✗.)',
    },
    {
      q: 'Let $f(x) = x - 4$ and $g(x) = 2x$. Compare $f(g(6))$ with $g(f(6))$ — which is bigger, and by how much?',
      choices: [
        'They are equal',
        '$f(g(6))$ is larger, by $4$',
        '$g(f(6))$ is larger, by $4$',
        'Neither can be found without a formula for $f(g(x))$',
      ],
      answer: 1,
      solution:
        'Compute both. For $f(g(6))$: $g(6) = 12$, then $f(12) = 8$. For $g(f(6))$: $f(6) = 2$, then $g(2) = 4$. So $f(g(6)) = 8$ beats $g(f(6)) = 4$ by $8 - 4 = 4$. Check a second way with the chained rules: $f(g(x)) = 2x - 4$ gives $8$ at $x = 6$, and $g(f(x)) = 2(x - 4) = 2x - 8$ gives $4$ ✓. (The "equal" choice ignores that $2x - 4$ and $2x - 8$ never agree ✗, and the swapped choice reverses which order wins ✗. A formula is convenient but not required — plugging in $6$ answers the question on its own ✗.)',
    },
    {
      q: 'Suppose $f(x) = x^2$ and $g(x) = x + 1$. Which line reports both compositions at the input $3$ correctly?',
      choices: [
        '$f(g(3)) = 10$ and $g(f(3)) = 16$',
        'Both $f(g(3))$ and $g(f(3))$ equal $16$',
        '$f(g(3)) = 16$ and $g(f(3)) = 10$',
        'Both $f(g(3))$ and $g(f(3))$ equal $10$',
      ],
      answer: 2,
      solution:
        'For $f(g(3))$, add first and square second: $g(3) = 4$, then $f(4) = 16$. For $g(f(3))$, square first and add second: $f(3) = 9$, then $g(9) = 10$. Check a second way with the chained rules: $f(g(x)) = (x + 1)^2$ gives $4^2 = 16$, and $g(f(x)) = x^2 + 1$ gives $9 + 1 = 10$ ✓. (THE WRONG ORDER produces the swapped line ✗, and the "both equal" lines claim $(x + 1)^2$ and $x^2 + 1$ agree, which fails at every input except $x = 0$ ✗.)',
    },
  ],
  // p5 — a negative number meets a square, so the sign trap is live.
  [
    {
      q: 'Let $f(x) = x^2$ and $g(x) = x - 5$. What number does $f(g(2))$ produce?',
      choices: ['$9$', '$-9$', '$-1$', '$4$'],
      answer: 0,
      solution:
        'Subtract first: $g(2) = 2 - 5 = -3$. Then square: $f(-3) = (-3)^2 = 9$, because a negative times a negative is positive. Check a second way with the chained rule $f(g(x)) = (x - 5)^2$, which at $x = 2$ is $(-3)^2 = 9$ ✓. (THE SIGN SLIP carries the minus sign through the square and reports $-9$ ✗. THE WRONG ORDER squares first: $f(2) = 4$, then $g(4) = -1$ ✗. THE LONE OUTER squares the original input and reports $4$ ✗.)',
    },
    {
      q: 'If $f(x) = x^2 + 1$ and $g(x) = x - 4$, what is $f(g(1))$?',
      choices: ['$-8$', '$10$', '$-2$', '$2$'],
      answer: 1,
      solution:
        'Inner machine first: $g(1) = 1 - 4 = -3$. Then $f(-3) = (-3)^2 + 1 = 9 + 1 = 10$. Check a second way with the chained rule $f(g(x)) = (x - 4)^2 + 1$, which at $x = 1$ is $9 + 1 = 10$ ✓. (THE SIGN SLIP squares $-3$ as $-9$ and lands on $-8$ ✗. THE WRONG ORDER computes $g(f(1))$: $f(1) = 2$, then $g(2) = -2$ ✗. THE LONE OUTER reports $f(1) = 2$ ✗.)',
    },
    {
      q: 'The input $-4$ is fed into $g(x) = 2x + 3$, and the result is fed into $f(x) = x^2$. What comes out?',
      choices: ['$-25$', '$35$', '$16$', '$25$'],
      answer: 3,
      solution:
        'First $g(-4) = 2(-4) + 3 = -8 + 3 = -5$. Then $f(-5) = (-5)^2 = 25$. Check a second way with the chained rule $f(g(x)) = (2x + 3)^2$, which at $x = -4$ is $(-5)^2 = 25$ ✓. (THE SIGN SLIP keeps the minus sign and reports $-25$ ✗. THE WRONG ORDER squares first: $f(-4) = 16$, then $g(16) = 35$ ✗. THE LONE OUTER stops at $f(-4) = 16$ ✗.)',
    },
  ],
  // p6 — composition formulas where one machine squares, so the two orders look
  //      dramatically different. v2 asks for the expanded square.
  [
    {
      q: 'Take $f(x) = x^2$ and $g(x) = 3x + 2$. Which expression is the formula for the composition $g(f(x))$?',
      choices: ['$9x^2 + 12x + 4$', '$3x^2 + 2$', '$9x^2 + 2$', '$3x^3 + 2x^2$'],
      answer: 1,
      solution:
        'The inner machine is $f$, so its output $x^2$ is what $g$ receives: $g(x^2) = 3x^2 + 2$. Check a second way with a test number: $f(2) = 4$ and $g(4) = 14$, and the formula gives $3(4) + 2 = 14$ ✓. (THE WRONG ORDER gives $f(g(x)) = (3x + 2)^2 = 9x^2 + 12x + 4$, worth $64$ at $x = 2$ ✗. The choice $9x^2 + 2$ squares the coefficient $3$ as well as the $x$, which substituting never does ✗. The choice $3x^3 + 2x^2$ is the PRODUCT $f(x) \\cdot g(x)$, not a chain ✗.)',
    },
    {
      q: 'Let $g(x) = x + 3$ and $f(x) = x^2$. Write the expanded formula for $f(g(x))$.',
      choices: ['$x^2 + 3$', '$x^2 + 9$', '$x^2 + 6x + 9$', '$2x + 6$'],
      answer: 2,
      solution:
        'Substitute the whole inner rule: $f(g(x)) = (x + 3)^2$, and expanding gives $x^2 + 6x + 9$. Check a second way with a test number: $g(2) = 5$ and $f(5) = 25$, and the formula gives $4 + 12 + 9 = 25$ ✓. (THE WRONG ORDER gives $g(f(x)) = x^2 + 3$, worth $7$ at $x = 2$ ✗. The choice $x^2 + 9$ squares the two terms separately and loses the middle term $6x$ ✗. The choice $2x + 6$ doubles $x + 3$ instead of squaring it ✗.)',
    },
    {
      q: 'Suppose $f(x) = x^2 - 2$ and $g(x) = 4x$. Which formula gives $f(g(x))$?',
      choices: ['$4x^2 - 8$', '$4x^2 - 2$', '$8x^2 - 2$', '$16x^2 - 2$'],
      answer: 3,
      solution:
        'The inner machine hands $f$ the value $4x$, and $f$ squares whatever it gets before subtracting $2$: $f(4x) = (4x)^2 - 2 = 16x^2 - 2$. Check a second way with a test number: $g(1) = 4$ and $f(4) = 14$, and the formula gives $16 - 2 = 14$ ✓. (THE WRONG ORDER gives $g(f(x)) = 4(x^2 - 2) = 4x^2 - 8$, worth $-4$ at $x = 1$ ✗. The choice $4x^2 - 2$ squares the $x$ but forgets to square the $4$ ✗. The choice $8x^2 - 2$ doubles the $4$ instead of squaring it ✗.)',
    },
  ],
  // p7 — a machine composed with itself.
  [
    {
      q: 'The machine $f(x) = 3x - 2$ is run once, and its output is immediately run through the very same machine again. If the first input is $4$, what is the final output?',
      choices: ['$28$', '$10$', '$34$', '$20$'],
      answer: 0,
      solution:
        'First pass: $f(4) = 3(4) - 2 = 10$. Second pass, using $10$ as the new input: $f(10) = 3(10) - 2 = 28$. Check a second way with the doubled-up rule: $f(f(x)) = 3(3x - 2) - 2 = 9x - 8$, which at $x = 4$ gives $36 - 8 = 28$ ✓. (THE HALF RUN reports the first pass, $10$ ✗. The choice $34$ triples twice but subtracts $2$ only once, that is $9(4) - 2$ ✗. The choice $20$ doubles the first output instead of rerunning the machine ✗.)',
    },
    {
      q: 'If $f(x) = x^2 - 1$, what is $f(f(2))$?',
      choices: ['$3$', '$9$', '$8$', '$15$'],
      answer: 2,
      solution:
        'Inside first: $f(2) = 4 - 1 = 3$. Then feed $3$ back in: $f(3) = 9 - 1 = 8$. Check a second way with the doubled-up rule: $f(f(x)) = (x^2 - 1)^2 - 1$, which at $x = 2$ is $3^2 - 1 = 8$ ✓. (The choice $9$ squares the first output but forgets the second $-1$ ✗. The choice $15$ squares twice and subtracts once, that is $(2^2)^2 - 1$ ✗. THE HALF RUN reports $f(2) = 3$ ✗.)',
    },
    {
      q: 'Ana feeds $1$ into the machine $m(x) = 2x + 3$, then feeds the answer back into the same machine. What number does Ana get?',
      choices: ['$5$', '$7$', '$8$', '$13$'],
      answer: 3,
      solution:
        'First pass: $m(1) = 2(1) + 3 = 5$. Second pass: $m(5) = 2(5) + 3 = 13$. Check a second way with the doubled-up rule: $m(m(x)) = 2(2x + 3) + 3 = 4x + 9$, which at $x = 1$ gives $13$ ✓. (THE HALF RUN reports the first pass, $5$ ✗. The choice $7$ doubles twice but adds $3$ only once, that is $4(1) + 3$ ✗. The choice $8$ doubles once and adds $3$ twice, that is $2(1) + 6$ ✗.)',
    },
  ],
  // p8 — decomposition: read the layers of a built-up machine. v1 cubes, v2
  //      takes a reciprocal, v3 divides.
  [
    {
      q: 'The machine $h(x) = (x - 6)^3$ is built from two simpler machines run in a row. Which pair rebuilds it as $h(x) = f(g(x))$?',
      choices: [
        '$f(x) = x^3$ and $g(x) = x - 6$',
        '$f(x) = x - 6$ and $g(x) = x^3$',
        '$f(x) = x^3 - 216$ and $g(x) = x$',
        '$f(x) = x^3$ and $g(x) = 6 - x$',
      ],
      answer: 0,
      solution:
        'Ask what happens to $x$ first: $6$ is subtracted, so the inner machine is $g(x) = x - 6$. Only afterwards is the result cubed, so the outer machine is $f(x) = x^3$. Check a second way at $x = 8$: $h(8) = 2^3 = 8$, and $f(g(8)) = f(2) = 8$ ✓. (Swapping the layers gives $f(g(x)) = x^3 - 6$, which at $x = 8$ is $506$ ✗. The choice $x^3 - 216$ assumes $(x - 6)^3 = x^3 - 6^3$, but at $x = 8$ that reads $296$ ✗. The last choice flips the inner subtraction to $6 - x$, giving $(6 - 8)^3 = -8$ ✗.)',
    },
    {
      q: 'Which pair of machines, inner one first, builds $h(x) = \\frac{1}{x + 4}$ as $h(x) = f(g(x))$?',
      choices: [
        '$f(x) = x + 4$ and $g(x) = \\frac{1}{x}$',
        '$f(x) = \\frac{1}{x}$ and $g(x) = x + 4$',
        '$f(x) = \\frac{1}{x} + 4$ and $g(x) = x$',
        '$f(x) = \\frac{1}{x + 4}$ and $g(x) = x + 4$',
      ],
      answer: 1,
      solution:
        'The input first has $4$ added to it — that is the inner machine $g(x) = x + 4$ — and the sum is then flipped upside down, so the outer machine is $f(x) = \\frac{1}{x}$. Check a second way at $x = 1$: $h(1) = \\frac{1}{5}$, and $f(g(1)) = f(5) = \\frac{1}{5}$ ✓. (Swapping the layers gives $\\frac{1}{x} + 4$, which at $x = 1$ is $5$ ✗, and the third choice writes exactly that same swapped machine with a do-nothing inner machine ✗. The last choice adds $4$ twice: $f(g(x)) = \\frac{1}{x + 8}$, worth $\\frac{1}{9}$ at $x = 1$ ✗.)',
    },
    {
      q: 'Which pair of machines, run inner one first, produces $h(x) = \\frac{x + 9}{4}$?',
      choices: [
        '$f(x) = x + 9$ and $g(x) = \\frac{x}{4}$',
        '$f(x) = \\frac{x}{4} + 9$ and $g(x) = x$',
        '$f(x) = \\frac{x}{4}$ and $g(x) = x + 9$',
        '$f(x) = \\frac{x}{4}$ and $g(x) = x - 9$',
      ],
      answer: 2,
      solution:
        'The bar divides the ENTIRE sum, so the adding must happen first: inner machine $g(x) = x + 9$, outer machine $f(x) = \\frac{x}{4}$. Check a second way at $x = 3$: $h(3) = \\frac{12}{4} = 3$, and $f(g(3)) = f(12) = 3$ ✓. (Swapping the layers divides first and adds after, giving $\\frac{x}{4} + 9$, worth $9.75$ at $x = 3$ ✗, and the second choice is that same swapped machine written in one piece ✗. The last choice flips the inner sign, giving $\\frac{x - 9}{4} = -1.5$ at $x = 3$ ✗.)',
    },
  ],
  // p9 — hard: the composite is handed back and one machine is missing. v2 asks
  //      for the INNER machine instead of the outer one.
  [
    {
      q: 'A linear machine $f$ satisfies $f(g(x)) = 12x - 5$, where $g(x) = 3x - 2$. What is $f(x)$?',
      choices: ['$f(x) = 4x - 5$', '$f(x) = 4x + 3$', '$f(x) = 12x - 5$', '$f(x) = 4x - 3$'],
      answer: 1,
      solution:
        'Write $f(x) = ax + b$. Then $f(g(x)) = a(3x - 2) + b = 3ax + (b - 2a)$. Matching the $x$-terms gives $3a = 12$, so $a = 4$; matching the constants gives $b - 8 = -5$, so $b = 3$. Check a second way by rebuilding the composite from scratch: $f(3x - 2) = 4(3x - 2) + 3 = 12x - 8 + 3 = 12x - 5$ ✓. (The choice $4x - 5$ lifts the constant straight out of the composite, but it rebuilds as $12x - 13$ ✗. The choice $12x - 5$ copies the composite itself and rebuilds as $36x - 29$ ✗. The choice $4x - 3$ flips the sign of $b$ and rebuilds as $12x - 11$ ✗.)',
    },
    {
      q: 'Suppose $f(x) = 2x - 3$ and the chain $f(g(x))$ simplifies to $8x + 1$. Which machine is $g$?',
      choices: ['$g(x) = 8x + 4$', '$g(x) = 4x - 1$', '$g(x) = 4x + 2$', '$g(x) = 8x + 1$'],
      answer: 2,
      solution:
        'Since $f$ doubles its input and then subtracts $3$, the chain reads $2 \\cdot g(x) - 3 = 8x + 1$. Undo those steps on the right: add $3$ to get $2 \\cdot g(x) = 8x + 4$, then halve to get $g(x) = 4x + 2$. Check a second way by rebuilding: $f(4x + 2) = 2(4x + 2) - 3 = 8x + 4 - 3 = 8x + 1$ ✓. (THE UNDONE STEP adds the $3$ but never halves, giving $8x + 4$, which rebuilds as $16x + 5$ ✗, or subtracts the $3$ instead of adding it, giving $4x - 1$, which rebuilds as $8x - 5$ ✗. The choice $8x + 1$ copies the composite ✗.)',
    },
    {
      q: 'The inner machine is $g(x) = x + 4$, and running it into a linear machine $f$ gives $f(g(x)) = 5x + 13$. Find the rule for $f$.',
      choices: ['$f(x) = 5x + 9$', '$f(x) = 5x + 13$', '$f(x) = 5x + 17$', '$f(x) = 5x - 7$'],
      answer: 3,
      solution:
        'Write $f(x) = ax + b$, so $f(g(x)) = a(x + 4) + b = ax + (4a + b)$. Matching $x$-terms gives $a = 5$, and matching constants gives $20 + b = 13$, so $b = -7$. Check a second way by rebuilding: $f(x + 4) = 5(x + 4) - 7 = 5x + 20 - 7 = 5x + 13$ ✓. (The choice $5x + 9$ subtracts the inner constant $4$ instead of $4a = 20$, and rebuilds as $5x + 29$ ✗. The choice $5x + 13$ copies the composite and rebuilds as $5x + 33$ ✗. The choice $5x + 17$ adds $4$ where it should have subtracted $20$, and rebuilds as $5x + 37$ ✗.)',
    },
  ],
  // p10 — composition read off a table instead of a formula.
  [
    {
      q: 'A function is listed in a table: $f(1) = 3$, $f(2) = 4$, $f(3) = 2$, $f(4) = 1$. What is $f(f(2))$?',
      choices: ['$1$', '$4$', '$2$', '$3$'],
      answer: 0,
      solution:
        'Look up the inner value first: the row for input $2$ says $f(2) = 4$. Now look up $4$: the row for input $4$ says $f(4) = 1$. So $f(f(2)) = 1$. Check a second way by tracing the arrows: $2 \\to 4 \\to 1$ ✓. (THE HALF RUN stops at the first lookup and answers $4$ ✗. The choice $2$ reports the original input, as though the two lookups cancelled ✗. The choice $3$ reads the row for input $1$ instead of the row for input $4$ ✗.)',
    },
    {
      q: 'Two functions are given by tables: $f(1) = 3$, $f(2) = 1$, $f(3) = 4$, $f(4) = 2$, and $g(1) = 2$, $g(2) = 4$, $g(3) = 3$, $g(4) = 1$. What is $f(g(1))$?',
      choices: ['$3$', '$1$', '$2$', '$4$'],
      answer: 1,
      solution:
        'The inner machine is $g$: its row for input $1$ gives $g(1) = 2$. Feed that into $f$: the row for input $2$ gives $f(2) = 1$. So $f(g(1)) = 1$. Check a second way by tracing: $1 \\xrightarrow{g} 2 \\xrightarrow{f} 1$ ✓. (THE WRONG ORDER computes $g(f(1))$: $f(1) = 3$, then $g(3) = 3$ ✗. THE HALF RUN reports $g(1) = 2$ ✗. The choice $4$ reads $g$’s row for input $2$ instead of $f$’s ✗.)',
    },
    {
      q: 'The table for $f$ reads $f(1) = 4$, $f(2) = 1$, $f(3) = 2$, $f(4) = 3$. Compute $f(f(3))$.',
      choices: ['$2$', '$3$', '$4$', '$1$'],
      answer: 3,
      solution:
        'Inner lookup first: $f(3) = 2$. Now use $2$ as the new input: $f(2) = 1$. So $f(f(3)) = 1$. Check a second way by tracing the arrows: $3 \\to 2 \\to 1$ ✓. (THE HALF RUN stops at $f(3) = 2$ ✗. The choice $3$ reports the original input ✗. The choice $4$ reads the row for input $1$, which is one lookup too far along the chain ✗.)',
    },
  ],
]

const s164 = [
  // p1 — the undo machine for a single addition or subtraction.
  [
    {
      q: 'If $f(x) = x - 9$, which rule is $f^{-1}(x)$?',
      choices: ['$x + 9$', '$x - 9$', '$9 - x$', '$\\frac{1}{x - 9}$'],
      answer: 0,
      solution:
        'The machine takes $9$ away, so its undo machine puts $9$ back: $f^{-1}(x) = x + 9$. Verify both round trips: $f(f^{-1}(x)) = (x + 9) - 9 = x$ ✓ and $f^{-1}(f(x)) = (x - 9) + 9 = x$ ✓, so the pair really cancels in either order. (The choice $x - 9$ repeats the original machine, which sends $4$ to $-5$ and then to $-14$ ✗. The choice $9 - x$ reverses the subtraction instead of undoing it, and $9 - (4 - 9) = 14 \\ne 4$ ✗. THE RECIPROCAL reads the $-1$ as an exponent, but $\\frac{1}{x - 9}$ is a completely different machine ✗.)',
    },
    {
      q: 'A stamping machine adds $12$ to every number it is handed. Which rule describes the machine that undoes the stamping?',
      choices: ['$\\frac{x}{12}$', '$x - 12$', '$12 - x$', '$x + 12$'],
      answer: 1,
      solution:
        'Adding $12$ is undone by taking $12$ back off, so the undo rule is $x - 12$. Verify both round trips with $s(x) = x + 12$ and $s^{-1}(x) = x - 12$: $s(s^{-1}(x)) = (x - 12) + 12 = x$ ✓ and $s^{-1}(s(x)) = (x + 12) - 12 = x$ ✓. (The choice $x + 12$ stamps a second time instead of undoing ✗. The choice $12 - x$ flips the subtraction: starting at $5$, the machine gives $17$, and $12 - 17 = -5$, not $5$ ✗. The choice $\\frac{x}{12}$ undoes a multiplication, but this machine never multiplied ✗.)',
    },
    {
      q: 'Suppose $h(x) = 6 + x$. Which formula is $h^{-1}(x)$?',
      choices: ['$6 - x$', '$6 + x$', '$x - 6$', '$\\frac{1}{6 + x}$'],
      answer: 2,
      solution:
        'Writing the rule as $x + 6$ makes the single step obvious: it adds $6$, so the inverse subtracts $6$, giving $h^{-1}(x) = x - 6$. Verify both round trips: $h(h^{-1}(x)) = 6 + (x - 6) = x$ ✓ and $h^{-1}(h(x)) = (6 + x) - 6 = x$ ✓. (The choice $6 + x$ repeats the machine ✗. The choice $6 - x$ subtracts in the wrong direction: $h(2) = 8$, and $6 - 8 = -2 \\ne 2$ ✗. THE RECIPROCAL treats the $-1$ as an exponent and gives $\\frac{1}{6 + x}$, which sends $8$ to $\\frac{1}{14}$ ✗.)',
    },
  ],
  // p2 — the undo machine for a single multiplication or division.
  [
    {
      q: 'If $f(x) = 5x$, what is $f^{-1}(x)$?',
      choices: ['$\\frac{x}{5}$', '$\\frac{1}{5x}$', '$5x$', '$x - 5$'],
      answer: 0,
      solution:
        'Multiplying by $5$ is undone by dividing by $5$: $f^{-1}(x) = \\frac{x}{5}$. Verify both round trips: $f(f^{-1}(x)) = 5 \\cdot \\frac{x}{5} = x$ ✓ and $f^{-1}(f(x)) = \\frac{5x}{5} = x$ ✓. (THE RECIPROCAL gives $\\frac{1}{5x}$, which sends the output $f(3) = 15$ to $\\frac{1}{75}$ rather than back to $3$ ✗. The choice $5x$ repeats the machine ✗. The choice $x - 5$ undoes an addition that never happened: $15 - 5 = 10 \\ne 3$ ✗.)',
    },
    {
      q: 'The machine $g$ halves every number it is given, so $g(x) = \\frac{x}{2}$. Which rule is $g^{-1}(x)$?',
      choices: ['$\\frac{x}{2}$', '$\\frac{2}{x}$', '$2x$', '$x + 2$'],
      answer: 2,
      solution:
        'Halving is undone by doubling, so $g^{-1}(x) = 2x$. Verify both round trips: $g(g^{-1}(x)) = \\frac{2x}{2} = x$ ✓ and $g^{-1}(g(x)) = 2 \\cdot \\frac{x}{2} = x$ ✓. (The choice $\\frac{x}{2}$ halves a second time: $g(10) = 5$, and halving again gives $2.5$ ✗. The choice $\\frac{2}{x}$ is a reciprocal in disguise and sends $5$ to $0.4$ ✗. The choice $x + 2$ undoes a subtraction the machine never performed ✗.)',
    },
    {
      q: 'A photocopier enlarges every length by a factor of $8$. Which rule describes the machine that undoes the enlargement?',
      choices: ['$8x$', '$\\frac{1}{8x}$', '$x - 8$', '$\\frac{x}{8}$'],
      answer: 3,
      solution:
        'The copier’s rule is $c(x) = 8x$, and scaling up by $8$ is undone by scaling down by $8$: $c^{-1}(x) = \\frac{x}{8}$. Verify both round trips: $c(c^{-1}(x)) = 8 \\cdot \\frac{x}{8} = x$ ✓ and $c^{-1}(c(x)) = \\frac{8x}{8} = x$ ✓. (The choice $8x$ enlarges again, turning a $3$ cm line into $24$ cm and then $192$ cm ✗. THE RECIPROCAL gives $\\frac{1}{8x}$, sending $24$ to $\\frac{1}{192}$ ✗. The choice $x - 8$ subtracts where it should divide: $24 - 8 = 16 \\ne 3$ ✗.)',
    },
  ],
  // p3 — evaluating the inverse at a point, without building its formula.
  [
    {
      q: 'If $f(x) = 3x - 2$, what is $f^{-1}(13)$?',
      choices: ['$37$', '$5$', '$\\frac{11}{3}$', '$\\frac{1}{13}$'],
      answer: 1,
      solution:
        'The question asks which input produced the output $13$, so solve $3x - 2 = 13$: add $2$ to get $3x = 15$, then divide to get $x = 5$. Verify both round trips using $f^{-1}(x) = \\frac{x + 2}{3}$: $f(f^{-1}(x)) = 3 \\cdot \\frac{x + 2}{3} - 2 = x$ ✓ and $f^{-1}(f(x)) = \\frac{3x - 2 + 2}{3} = x$ ✓; in particular $f(5) = 13$ ✓. (THE FORWARD RUN computes $f(13) = 37$ ✗. THE UNDONE STEP subtracts the $2$ instead of adding it, giving $\\frac{11}{3}$ ✗. THE RECIPROCAL answers $\\frac{1}{13}$ ✗.)',
    },
    {
      q: 'The machine $f(x) = 5x + 4$ printed the number $34$. What number was fed into it?',
      choices: ['$174$', '$\\frac{38}{5}$', '$6$', '$30$'],
      answer: 2,
      solution:
        'Run the steps backwards: the machine added $4$ last, so take that off first — $34 - 4 = 30$ — and then undo the multiplication, $30 \\div 5 = 6$. Verify both round trips using $f^{-1}(x) = \\frac{x - 4}{5}$: $f(f^{-1}(x)) = 5 \\cdot \\frac{x - 4}{5} + 4 = x$ ✓ and $f^{-1}(f(x)) = \\frac{5x + 4 - 4}{5} = x$ ✓; in particular $f(6) = 34$ ✓. (THE FORWARD RUN computes $f(34) = 174$ ✗. THE UNDONE STEP stops after subtracting and answers $30$ ✗, or adds the $4$ instead of subtracting it, giving $\\frac{38}{5}$ ✗.)',
    },
    {
      q: 'Given $f(x) = 10 - 2x$, find $f^{-1}(4)$.',
      choices: ['$2$', '$7$', '$-3$', '$3$'],
      answer: 3,
      solution:
        'Solve $10 - 2x = 4$: subtract $10$ to get $-2x = -6$, then divide by $-2$ to get $x = 3$. Verify both round trips using $f^{-1}(x) = \\frac{10 - x}{2}$: $f(f^{-1}(x)) = 10 - 2 \\cdot \\frac{10 - x}{2} = 10 - 10 + x = x$ ✓ and $f^{-1}(f(x)) = \\frac{10 - (10 - 2x)}{2} = \\frac{2x}{2} = x$ ✓; in particular $f(3) = 4$ ✓. (THE FORWARD RUN computes $f(4) = 2$ ✗. The choice $7$ comes from $\\frac{4 + 10}{2}$, adding where the rule subtracts ✗. The choice $-3$ comes from $\\frac{4 - 10}{2}$, dividing by $2$ instead of $-2$ ✗.)',
    },
  ],
  // p4 — the defining property of an inverse, stated three different ways.
  [
    {
      q: 'A machine $f$ has an inverse $f^{-1}$. What number is $f^{-1}(f(6))$?',
      choices: ['$6$', '$\\frac{1}{6}$', '$1$', '$0$'],
      answer: 0,
      solution:
        'Whatever $f$ does to $6$, the inverse immediately undoes, so the number that comes out is the number that went in: $f^{-1}(f(6)) = 6$. Check a second way with a concrete machine: if $f(x) = 4x - 1$, then $f(6) = 23$ and $f^{-1}(23) = \\frac{23 + 1}{4} = 6$ ✓ — and the same thing happens for any invertible $f$. (THE RECIPROCAL suggests $\\frac{1}{6}$ or the product $1$, but the $-1$ is not an exponent and the two machines are chained, not multiplied ✗. The choice $0$ imagines the machines cancelling to nothing, yet the inverse returns the input, not zero ✗.)',
    },
    {
      q: 'Which statement about a machine $f$ and its inverse $f^{-1}$ is TRUE for every invertible $f$?',
      choices: [
        '$f^{-1}(x) = \\frac{1}{f(x)}$ for every $x$',
        '$f(f^{-1}(x)) = x$ for every $x$ that $f^{-1}$ accepts',
        '$f^{-1}(x) = -f(x)$ for every $x$',
        '$f^{-1}(f(x)) = 1$ for every $x$',
      ],
      answer: 1,
      solution:
        'The defining property of an inverse is that the two machines cancel in either order: $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$. Check a second way with a concrete pair, $f(x) = x + 5$ and $f^{-1}(x) = x - 5$: $f(f^{-1}(9)) = f(4) = 9$ ✓ and $f^{-1}(f(9)) = f^{-1}(14) = 9$ ✓. (That same pair sinks the others: $\\frac{1}{f(9)} = \\frac{1}{14}$ while $f^{-1}(9) = 4$ ✗; $-f(9) = -14$, also not $4$ ✗; and $f^{-1}(f(9)) = 9$, not $1$ ✗.)',
    },
    {
      q: 'In the notation $f^{-1}(x)$, what is the little $-1$ telling you to do?',
      choices: [
        'Multiply the whole machine by $-1$',
        'Compute $\\frac{1}{f(x)}$, the reciprocal of the output',
        'Shift the graph of $f$ down by $1$',
        'Run the machine backwards, undoing whatever $f$ did',
      ],
      answer: 3,
      solution:
        'The $-1$ is a name, not an exponent: $f^{-1}$ is the undo machine, the one that satisfies $f^{-1}(f(x)) = x$ and $f(f^{-1}(x)) = x$. Check a second way with $f(x) = 3x$, whose inverse is $\\frac{x}{3}$: $f(2) = 6$ and $\\frac{6}{3} = 2$, back where we started ✓. (THE RECIPROCAL would give $\\frac{1}{3x}$, which sends $6$ to $\\frac{1}{18}$ ✗. Multiplying by $-1$ gives $-3x$, sending $6$ to $-18$ ✗. Shifting down by $1$ gives $3x - 1$, sending $6$ to $17$ ✗.)',
    },
  ],
  // p5 — a full formula for the inverse of a two-step linear machine. v3 hands
  //      back the inverse and asks for the original machine.
  [
    {
      q: 'If $f(x) = 3x + 6$, what is $f^{-1}(x)$?',
      choices: ['$\\frac{x - 6}{3}$', '$\\frac{x + 6}{3}$', '$3x - 6$', '$\\frac{1}{3x + 6}$'],
      answer: 0,
      solution:
        'Swap and solve: from $x = 3y + 6$, subtract $6$ to get $x - 6 = 3y$, then divide by $3$ to get $y = \\frac{x - 6}{3}$. Verify both round trips: $f(f^{-1}(x)) = 3 \\cdot \\frac{x - 6}{3} + 6 = (x - 6) + 6 = x$ ✓ and $f^{-1}(f(x)) = \\frac{3x + 6 - 6}{3} = x$ ✓. (The choice $\\frac{x + 6}{3}$ flips the sign, sending the output $f(2) = 12$ to $6$ instead of $2$ ✗. The choice $3x - 6$ keeps the multiplication instead of reversing it, sending $12$ to $30$ ✗. THE RECIPROCAL gives $\\frac{1}{3x + 6}$ ✗.)',
    },
    {
      q: 'Find the inverse of the machine $f(x) = 7 - 2x$.',
      choices: ['$\\frac{x - 7}{2}$', '$\\frac{x + 7}{2}$', '$\\frac{7 - x}{2}$', '$2x + 7$'],
      answer: 2,
      solution:
        'Swap and solve: from $x = 7 - 2y$, move the term to get $2y = 7 - x$, then halve to get $y = \\frac{7 - x}{2}$. Verify both round trips: $f(f^{-1}(x)) = 7 - 2 \\cdot \\frac{7 - x}{2} = 7 - (7 - x) = x$ ✓ and $f^{-1}(f(x)) = \\frac{7 - (7 - 2x)}{2} = \\frac{2x}{2} = x$ ✓. (Take $f(2) = 3$ as a test output. The choice $\\frac{x - 7}{2}$ reverses the subtraction and gives $-2$ ✗; $\\frac{x + 7}{2}$ gives $5$ ✗; $2x + 7$ multiplies instead of dividing and gives $13$ ✗ — none of them return $2$.)',
    },
    {
      q: 'The undo machine for a linear function $f$ is $f^{-1}(x) = \\frac{x - 3}{5}$. What is $f(x)$?',
      choices: ['$5x - 3$', '$\\frac{x + 3}{5}$', '$5x + 15$', '$5x + 3$'],
      answer: 3,
      solution:
        'The inverse subtracts $3$ and then divides by $5$, so $f$ must reverse those two steps in the opposite order: multiply by $5$ first, then add $3$, giving $f(x) = 5x + 3$. Verify both round trips: $f^{-1}(f(x)) = \\frac{5x + 3 - 3}{5} = x$ ✓ and $f(f^{-1}(x)) = 5 \\cdot \\frac{x - 3}{5} + 3 = (x - 3) + 3 = x$ ✓. (Test with $f^{-1}(13) = 2$, so $f(2)$ must be $13$. The choice $5x - 3$ gives $7$ ✗, $\\frac{x + 3}{5}$ gives $1$ ✗, and $5x + 15$ adds before multiplying and gives $25$ ✗.)',
    },
  ],
  // p6 — when a machine cannot be run backwards. v2 asks for the domain
  //      restriction that repairs it; v3 uses a table.
  [
    {
      q: 'Each of these machines accepts every real number as an input. Which one has NO inverse?',
      choices: ['$f(x) = 4x$', '$f(x) = x^4$', '$f(x) = x - 8$', '$f(x) = \\frac{x}{2} + 1$'],
      answer: 1,
      solution:
        'A machine can be reversed only when every output comes from a single input. For $f(x) = x^4$, both $2$ and $-2$ produce $16$, so an undo machine fed $16$ would have to return two different numbers at once — impossible for a function. Check the other three by naming their inverses: $4x$ is undone by $\\frac{x}{4}$ ✓, $x - 8$ by $x + 8$ ✓, and $\\frac{x}{2} + 1$ by $2(x - 1)$ ✓, and each of those pairs cancels in both orders. (Fast growth, positive-only outputs, and similar features are irrelevant — sharing an output is the one thing that blocks an inverse ✗.)',
    },
    {
      q: 'The machine $f(x) = x^2$ cannot be reversed while every real number is allowed as an input. Restricting the inputs to which set repairs it?',
      choices: [
        'All $x$ except $x = 0$',
        'All $x$ with $x \\ne 1$',
        'All $x$ with $x \\ge 0$',
        'No restriction can make it invertible',
      ],
      answer: 2,
      solution:
        'The trouble is that $a$ and $-a$ always share an output. Keeping only the inputs with $x \\ge 0$ throws away one member of every such pair, and then each output comes from exactly one input, with undo machine $f^{-1}(x) = \\sqrt{x}$. Verify both round trips on that restricted domain: $f(f^{-1}(x)) = (\\sqrt{x})^2 = x$ for $x \\ge 0$ ✓ and $f^{-1}(f(x)) = \\sqrt{x^2} = x$ because $x$ is not negative ✓. (Removing only $x = 0$ leaves $3$ and $-3$ both sending to $9$ ✗, and removing only $x = 1$ leaves the same problem ✗. The last choice gives up too early — the restriction above works ✗.)',
    },
    {
      q: 'A table lists $f(1) = 5$, $f(2) = 7$, $f(3) = 5$, $f(4) = 9$. Why can this machine not be run backwards?',
      choices: [
        'Its outputs are all odd numbers',
        'It gives no output for the input $0$',
        'The outputs do not climb by a constant amount',
        'The output $5$ is produced by two different inputs',
      ],
      answer: 3,
      solution:
        'Scan the output column: $5$ appears twice, once from the input $1$ and once from the input $3$. An undo machine handed $5$ would have to answer both $1$ and $3$, and a function is allowed only one output per input, so no inverse exists. Check a second way by noting that the other three outputs, $7$ and $9$, each come from exactly one input — repairing the table would only require changing the row that repeats ✓. (Odd outputs are no obstacle: $f(x) = 2x + 1$ has only odd outputs and is perfectly invertible ✗. A missing input simply is not part of the domain ✗. Uneven steps are fine too — a table can jump irregularly and still be reversible ✗.)',
    },
  ],
  // p7 — a two-step machine whose steps must be undone in reverse order.
  [
    {
      q: 'If $f(x) = \\frac{x}{5} - 2$, what is $f^{-1}(x)$?',
      choices: ['$5x + 10$', '$5x - 10$', '$\\frac{x}{5} + 2$', '$5x + 2$'],
      answer: 0,
      solution:
        'The machine divides by $5$ and then subtracts $2$, so the undo machine adds $2$ FIRST and multiplies by $5$ second: $f^{-1}(x) = 5(x + 2) = 5x + 10$. Verify both round trips: $f(f^{-1}(x)) = \\frac{5x + 10}{5} - 2 = (x + 2) - 2 = x$ ✓ and $f^{-1}(f(x)) = 5\\left(\\frac{x}{5} - 2 + 2\\right) = x$ ✓. (Test with $f(15) = 1$. The choice $5x - 10$ gives $-5$ ✗, $\\frac{x}{5} + 2$ repeats the division and gives $2.2$ ✗, and $5x + 2$ multiplies only the $x$ by $5$ and gives $7$ ✗.)',
    },
    {
      q: 'Find $f^{-1}(x)$ for the machine $f(x) = \\frac{x + 6}{3}$.',
      choices: ['$3x + 6$', '$3x - 6$', '$\\frac{x - 6}{3}$', '$\\frac{3}{x + 6}$'],
      answer: 1,
      solution:
        'This machine adds $6$ and then divides by $3$, so the undo machine multiplies by $3$ first and subtracts $6$ second: $f^{-1}(x) = 3x - 6$. Verify both round trips: $f(f^{-1}(x)) = \\frac{3x - 6 + 6}{3} = \\frac{3x}{3} = x$ ✓ and $f^{-1}(f(x)) = 3 \\cdot \\frac{x + 6}{3} - 6 = (x + 6) - 6 = x$ ✓. (Test each rival on the output $f(9) = 5$, which must be sent back to $9$. The choice $3x + 6$ gives $21$ ✗, $\\frac{x - 6}{3}$ gives $-\\frac{1}{3}$ ✗, and $\\frac{3}{x + 6}$ gives $\\frac{3}{11}$ ✗.)',
    },
    {
      q: 'A club takes a donation of $d$ dollars, keeps a flat handling fee of $\\$4$, and splits the rest evenly between two charities, so each charity receives $s = \\frac{d - 4}{2}$ dollars. Which formula recovers the donation $d$ from one charity’s share $s$?',
      choices: ['$d = 2s - 4$', '$d = \\frac{s + 4}{2}$', '$d = 2s + 4$', '$d = s + 4$'],
      answer: 2,
      solution:
        'Undo the steps in reverse: the last thing done was the halving, so double first, $2s = d - 4$, and then put the fee back, $d = 2s + 4$. Verify both round trips: starting from $d$, a share of $s = \\frac{d - 4}{2}$ rebuilds as $2 \\cdot \\frac{d - 4}{2} + 4 = d$ ✓, and starting from $s$, a donation of $2s + 4$ produces a share of $\\frac{2s + 4 - 4}{2} = s$ ✓. Numerically, a $\\$30$ donation leaves $\\$26$ to split, so each charity gets $\\$13$, and $2(13) + 4 = 30$ ✓. (The choice $2s - 4$ subtracts the fee a second time and gives $\\$22$ ✗. The choice $\\frac{s + 4}{2}$ repeats the machine’s own steps instead of reversing them and gives $\\$8.50$ ✗. The choice $s + 4$ forgets that only half the money reached this charity and gives $\\$17$ ✗.)',
    },
  ],
  // p8 — machines that are their own inverse.
  [
    {
      q: 'Which function undoes itself — that is, satisfies $g(g(x)) = x$ for every input?',
      choices: ['$g(x) = 12 - x$', '$g(x) = x + 12$', '$g(x) = 3x$', '$g(x) = x - 12$'],
      answer: 0,
      solution:
        'Apply $g(x) = 12 - x$ twice: $g(g(x)) = 12 - (12 - x) = x$, so it is its own inverse. Check a second way with numbers: $g(5) = 7$ and $g(7) = 5$ — the machine swaps numbers in pairs ✓. (Running $x + 12$ twice adds $24$, so $5$ lands on $29$ ✗; running $x - 12$ twice subtracts $24$ and sends $5$ to $-19$ ✗; running $3x$ twice multiplies by $9$ and sends $5$ to $45$ ✗.)',
    },
    {
      q: 'Which of these machines returns every nonzero number to exactly where it started when it is run twice in a row?',
      choices: ['$g(x) = x + 1$', '$g(x) = \\frac{1}{x}$', '$g(x) = 2x$', '$g(x) = x^2$'],
      answer: 1,
      solution:
        'Apply $g(x) = \\frac{1}{x}$ twice: $g(g(x)) = \\frac{1}{\\frac{1}{x}} = x$ for every $x \\ne 0$, so this machine is its own inverse on the nonzero numbers. Check a second way with numbers: $g(4) = \\frac{1}{4}$ and $g\\left(\\frac{1}{4}\\right) = 4$ ✓. (Running $x + 1$ twice adds $2$, sending $4$ to $6$ ✗. Running $2x$ twice quadruples, sending $4$ to $16$ ✗. Running $x^2$ twice raises to the fourth power, sending $4$ to $256$ ✗.)',
    },
    {
      q: 'Three of the machines below change at least one number when they are run twice. Which one leaves every number exactly where it started?',
      choices: ['$g(x) = x^3$', '$g(x) = x + 7$', '$g(x) = 3 - 2x$', '$g(x) = -x$'],
      answer: 3,
      solution:
        'Apply $g(x) = -x$ twice: $g(g(x)) = -(-x) = x$, so the machine is its own inverse. Check a second way with numbers: $g(6) = -6$ and $g(-6) = 6$ ✓. (Running $x^3$ twice gives $x^9$, so $2$ becomes $512$ ✗. Running $x + 7$ twice adds $14$ ✗. Running $3 - 2x$ twice gives $3 - 2(3 - 2x) = 4x - 3$, which sends $2$ to $5$ rather than back to $2$ ✗.)',
    },
  ],
  // p9 — hard: the undo machine applied twice.
  [
    {
      q: 'For $f(x) = 2x + 3$, what is $f^{-1}(f^{-1}(21))$?',
      choices: ['$3$', '$9$', '$45$', '$12$'],
      answer: 0,
      solution:
        'Build the undo machine first: from $x = 2y + 3$ we get $f^{-1}(x) = \\frac{x - 3}{2}$. Apply it twice: $f^{-1}(21) = \\frac{18}{2} = 9$, then $f^{-1}(9) = \\frac{6}{2} = 3$. Verify by running the forward machine back up the chain: $f(3) = 9$ ✓ and $f(9) = 21$ ✓, so both undo steps were genuine reversals. (The choice $9$ stops after one undo ✗. THE FORWARD RUN computes $f(21) = 45$ ✗. THE UNDONE STEP adds the $3$ instead of subtracting it, giving $\\frac{24}{2} = 12$ ✗.)',
    },
    {
      q: 'The number $59$ is fed into the undo machine of $f(x) = 4x - 1$, and that result is fed into the same undo machine again. What comes out?',
      choices: ['$15$', '$235$', '$4$', '$\\frac{29}{2}$'],
      answer: 2,
      solution:
        'The undo machine is $f^{-1}(x) = \\frac{x + 1}{4}$. First pass: $\\frac{60}{4} = 15$. Second pass: $\\frac{16}{4} = 4$. Verify by climbing back with the forward machine: $f(4) = 15$ ✓ and $f(15) = 59$ ✓. (The choice $15$ reports only the first pass ✗. THE FORWARD RUN computes $f(59) = 235$ ✗. THE UNDONE STEP subtracts the $1$ instead of adding it, giving $\\frac{58}{4} = \\frac{29}{2}$ ✗.)',
    },
    {
      q: 'Let $f(x) = 3x + 1$. Evaluate $f^{-1}(f^{-1}(22))$.',
      choices: ['$7$', '$67$', '$\\frac{23}{3}$', '$2$'],
      answer: 3,
      solution:
        'The undo machine is $f^{-1}(x) = \\frac{x - 1}{3}$. Apply it twice: $f^{-1}(22) = \\frac{21}{3} = 7$, then $f^{-1}(7) = \\frac{6}{3} = 2$. Verify by running the forward machine back up: $f(2) = 7$ ✓ and $f(7) = 22$ ✓. (The choice $7$ stops after one undo ✗. THE FORWARD RUN computes $f(22) = 67$ ✗. THE UNDONE STEP adds the $1$ instead of subtracting it, giving $\\frac{23}{3}$ ✗.)',
    },
  ],
  // p10 — hard: two clues, one of them written through the inverse.
  [
    {
      q: 'A linear machine $f$ satisfies $f(2) = 9$ and $f^{-1}(15) = 4$. What is $f(5)$?',
      choices: ['$24$', '$18$', '$21$', '$12$'],
      answer: 1,
      solution:
        'Translate the second clue: $f^{-1}(15) = 4$ means $f(4) = 15$. Between the inputs $2$ and $4$ the output climbs $15 - 9 = 6$ over $2$ steps, so the slope is $3$, and $f(x) = 3x + b$ with $3(2) + b = 9$, giving $b = 3$. So $f(x) = 3x + 3$ and $f(5) = 18$. Verify both clues: $f(2) = 9$ ✓ and $f(4) = 15$ ✓, and $f^{-1}(x) = \\frac{x - 3}{3}$ sends $15$ back to $4$ ✓. (The choice $21$ uses $6$ per step instead of dividing the climb by the $2$-step gap ✗. The choice $24$ treats the $9$ as the constant term, giving $3(5) + 9$ ✗. The choice $12$ answers $f(3)$ rather than $f(5)$ ✗.)',
    },
    {
      q: 'A linear machine $f$ has $f^{-1}(3) = 1$ and $f^{-1}(11) = 5$. What is $f^{-1}(21)$?',
      choices: ['$43$', '$20$', '$10$', '$\\frac{21}{2}$'],
      answer: 2,
      solution:
        'Read the clues forwards: $f(1) = 3$ and $f(5) = 11$. The output climbs $8$ across $4$ steps, so the slope is $2$, and $f(x) = 2x + b$ with $2(1) + b = 3$, giving $b = 1$, so $f(x) = 2x + 1$. Then $f^{-1}(21)$ solves $2x + 1 = 21$, giving $x = 10$. Verify: $f(10) = 21$ ✓, and both clues hold, $f(1) = 3$ ✓ and $f(5) = 11$ ✓. (THE FORWARD RUN computes $f(21) = 43$ ✗. THE UNDONE STEP subtracts the $1$ but forgets to halve, giving $20$ ✗, or halves without subtracting, giving $\\frac{21}{2}$ ✗.)',
    },
    {
      q: 'A linear machine sends $0$ to $-4$, and its undo machine satisfies $f^{-1}(6) = 5$. What is $f(3)$?',
      choices: ['$\\frac{1}{2}$', '$6$', '$\\frac{7}{2}$', '$2$'],
      answer: 3,
      solution:
        'The first clue says $f(0) = -4$, so the constant term is $-4$. The second clue says $f(5) = 6$, so $5a - 4 = 6$, giving $a = 2$ and $f(x) = 2x - 4$. Then $f(3) = 6 - 4 = 2$. Verify both clues: $f(0) = -4$ ✓ and $f(5) = 6$ ✓, and $f^{-1}(x) = \\frac{x + 4}{2}$ sends $6$ back to $5$ ✓. (Misreading $f^{-1}(6) = 5$ as $f(6) = 5$ gives the slope $\\frac{5 - (-4)}{6} = \\frac{3}{2}$ and the answer $\\frac{1}{2}$ ✗. Dropping the constant term gives $f(x) = 2x$ and the answer $6$ ✗. The choice $\\frac{7}{2}$ is $f^{-1}(3)$, the wrong direction ✗.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 16,
  sections: {
    '16.3': s163,
    '16.4': s164,
  },
}
