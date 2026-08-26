// Introduction to Algebra chapter 16 — variations for sections 16.1 (The
// Machine) and 16.2 (Combining Functions).
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was derived from the question text alone and then confirmed a
//    SECOND, INDEPENDENT way: an evaluation is re-run through the rule, a
//    solved input is fed forward through the machine, and a domain or range
//    claim is tested at a boundary point and at a point just outside it.
//  - Each distractor is one named mistake, named at the end of the solution,
//    and that mistake really does produce that number. The traps running
//    through these two sections are: ADDING BEFORE MULTIPLYING (grouping the
//    input with the constant), SQUARING A NEGATIVE AS NEGATIVE, DOUBLING
//    INSTEAD OF SQUARING, RUNNING THE MACHINE FORWARD when the question asks
//    for the input, ANSWERING WITH THE OUTPUT, ADDING TO THE OUTPUT INSTEAD OF
//    THE INPUT, FLIPPING THE SIGN OF A KEY POINT, DROPPING A BOUNDARY that a
//    $\ge$ allows, LOSING THE NEGATIVE BRANCH of a square root or a squared
//    equation, FAILING TO DISTRIBUTE A MINUS SIGN across a whole rule,
//    COMPOSING INSTEAD OF COMBINING, and DIVIDING BY $x$ (which deletes the
//    root $x = 0$).
//  - No two choices inside an item name the same number or the same set, even
//    when written two different ways.

const s161 = [
  // p1 — evaluate a linear machine at a number.
  [
    {
      q: 'The machine $h$ follows the rule $h(x) = 4x + 7$. What comes out when $6$ goes in?',
      choices: ['$31$', '$52$', '$34$', '$46$'],
      answer: 0,
      solution:
        'Replace every $x$ with $6$: $h(6) = 4(6) + 7 = 24 + 7 = 31$. Check a second, independent way by reading the rule as instructions — "quadruple, then add $7$": four sixes make $24$, and seven more makes $31$ ✓. (The choice $52$ comes from ADDING BEFORE MULTIPLYING, $4(6+7)$; the choice $34$ multiplies the two constants and adds the input, $4 \\times 7 + 6$; the choice $46$ swaps the roles of $4$ and $7$, computing $7(6) + 4$.)',
    },
    {
      q: 'A machine follows the rule $m(x) = 4x + 3$. Which input makes it output $27$?',
      choices: ['$24$', '$6$', '$111$', '$30$'],
      answer: 1,
      solution:
        'The machine multiplies by $4$ and then adds $3$, so undo those steps backwards: $27 - 3 = 24$, and $24 \\div 4 = 6$. Check a second, independent way by running $6$ forward through the rule: $m(6) = 4(6) + 3 = 27$ ✓. (The choice $24$ subtracts the $3$ but FORGETS TO DIVIDE; the choice $111$ is $m(27)$, RUNNING THE MACHINE FORWARD instead of backwards; the choice $30$ ADDS THE $3$ INSTEAD OF SUBTRACTING it and then forgets to divide.)',
    },
    {
      q: 'A taxi’s fare machine is $c(n) = 2n + 9$, where $n$ is the number of kilometres travelled and the output is the fare in dollars. What is $c(8)$?',
      choices: ['$\\$34$', '$\\$74$', '$\\$17$', '$\\$25$'],
      answer: 3,
      solution:
        'Feed in $n = 8$: $c(8) = 2(8) + 9 = 16 + 9 = 25$, so the fare is $\\$25$. Check a second, independent way with the story: eight kilometres at $\\$2$ each is $\\$16$, plus the flat $\\$9$, giving $\\$25$ ✓. (The choice $\\$34$ comes from ADDING BEFORE MULTIPLYING, $2(8+9)$; the choice $\\$74$ swaps the two constants, computing $9(8) + 2$; the choice $\\$17$ adds the flat fee to the distance but FORGETS TO DOUBLE.)',
    },
  ],
  // p2 — a machine that subtracts its input from a constant.
  [
    {
      q: 'A machine subtracts whatever it is given from $20$, so its rule is $d(x) = 20 - x$. What is $d(13)$?',
      choices: ['$-7$', '$7$', '$33$', '$13$'],
      answer: 1,
      solution:
        'Substitute: $d(13) = 20 - 13 = 7$. Check a second, independent way against the description — the output plus the input should rebuild $20$, and $7 + 13 = 20$ ✓. (The choice $-7$ SUBTRACTS IN THE WRONG ORDER, computing $13 - 20$; the choice $33$ adds instead of subtracting; the choice $13$ just echoes the input, as though the machine did nothing.)',
    },
    {
      q: 'A machine follows the rule $r(x) = 12 - x$. Which input produces the output $-5$?',
      choices: ['$7$', '$-17$', '$17$', '$-5$'],
      answer: 2,
      solution:
        'We need $12 - x = -5$. Add $x$ to both sides and add $5$ to both sides: $12 + 5 = x$, so $x = 17$. Check a second, independent way by running $17$ forward: $r(17) = 12 - 17 = -5$ ✓. (The choice $7$ DROPS THE MINUS SIGN ON THE OUTPUT and solves $12 - x = 5$; the choice $-17$ isolates $x$ with the wrong sign, writing $x = -5 - 12$; the choice $-5$ is ANSWERING WITH THE OUTPUT rather than the input.)',
    },
    {
      q: 'In a game you start with $15$ points, and the machine $s(x) = 15 - x$ reports your score after losing $x$ points. What does the machine report for $x = 20$?',
      choices: ['$5$', '$35$', '$20$', '$-5$'],
      answer: 3,
      solution:
        'Substitute: $s(20) = 15 - 20 = -5$, a score of $5$ below zero. Check a second, independent way with the story: losing $15$ of the points brings you to $0$, and the last $5$ points lost push you to $-5$ ✓. (The choice $5$ SUBTRACTS IN THE WRONG ORDER, computing $20 - 15$; the choice $35$ adds instead of subtracting; the choice $20$ echoes the input.)',
    },
  ],
  // p3 — a squared input, with a negative number going in.
  [
    {
      q: 'If $h(x) = x^2 + 6$, what is $h(-4)$?',
      choices: ['$22$', '$-10$', '$-2$', '$4$'],
      answer: 0,
      solution:
        'Square first, then add: $h(-4) = (-4)^2 + 6 = 16 + 6 = 22$. Check a second, independent way by noting that $(-4)^2$ and $4^2$ are the same number, so $h(-4) = h(4) = 16 + 6 = 22$ ✓. (The choice $-10$ comes from SQUARING A NEGATIVE AS NEGATIVE, reading $(-4)^2$ as $-16$; the choice $-2$ comes from DOUBLING INSTEAD OF SQUARING, $2(-4) + 6$; the choice $4$ squares the sum instead of the input, $(-4 + 6)^2$.)',
    },
    {
      q: 'The machine $n(x) = x^2 - 5$ produces the output $20$. Which of these numbers could have been the input?',
      choices: ['$15$', '$25$', '$-5$', '$10$'],
      answer: 2,
      solution:
        'We need $x^2 - 5 = 20$, so $x^2 = 25$. Both $5$ and $-5$ square to $25$, and $-5$ is the one on the list. Check a second, independent way by running $-5$ forward: $(-5)^2 - 5 = 25 - 5 = 20$ ✓. (The choice $15$ comes from subtracting $5$ from the output and stopping, ignoring the square; the choice $25$ solves $x^2 = 25$ but FORGETS TO TAKE THE SQUARE ROOT, and $25^2 - 5 = 620$; the choice $10$ halves the output instead of rooting it, and $10^2 - 5 = 95$.)',
    },
    {
      q: 'A machine doubles the square of its input and then subtracts $1$: $k(x) = 2x^2 - 1$. What does it output for the input $-3$?',
      choices: ['$-19$', '$35$', '$-7$', '$17$'],
      answer: 3,
      solution:
        'Follow the rule in order: square, then double, then subtract $1$. $(-3)^2 = 9$, twice that is $18$, and $18 - 1 = 17$. Check a second, independent way by substituting straight in: $2(-3)^2 - 1 = 2(9) - 1 = 17$ ✓. (The choice $-19$ comes from SQUARING A NEGATIVE AS NEGATIVE, using $-9$; the choice $35$ squares the doubled input, $(2 \\cdot (-3))^2 - 1$; the choice $-7$ comes from DOUBLING INSTEAD OF SQUARING, $2(-3) - 1$.)',
    },
  ],
  // p4 — the defining rule: one output per input.
  [
    {
      q: 'On Monday a function machine is fed the number $3$ and it produces $8$. On Tuesday the very same machine is fed $3$ again. What must come out?',
      choices: ['Exactly $8$ again', 'Any number at all', 'Some number other than $8$', 'Either $8$ or $-8$'],
      answer: 0,
      solution:
        'A function follows a fixed rule, so the same input always produces the same output: the machine must give $8$ again. Check a second, independent way with a formula: if the rule happened to be $f(x) = x + 5$, then $f(3) = 8$ today, tomorrow, and forever ✓. (The choices "any number at all" and "some number other than $8$" would let one input have two different outputs, which no function may do; the choice "either $8$ or $-8$" also gives the input two possible outputs.)',
    },
    {
      q: 'Four machines are described by the pairs they produce. Which description could NOT belong to a function?',
      choices: [
        'It sends $1 \\to 6$ and $3 \\to 6$',
        'It sends $2 \\to 7$ and $2 \\to 9$',
        'It sends $0 \\to 0$ and $5 \\to 1$',
        'It sends $-1 \\to 4$ and $1 \\to 4$',
      ],
      answer: 1,
      solution:
        'The second description feeds in the single input $2$ and gets two different outputs, $7$ and $9$ — that breaks the one-output-per-input rule, so it is not a function. Check a second, independent way by seeing that the other three are all fine: two DIFFERENT inputs sharing an output is allowed, which is what the first and last describe, and the third simply lists two unrelated pairs ✓. (Choosing the first or last means reading the rule BACKWARDS, banning repeated outputs instead of repeated inputs.)',
    },
    {
      q: 'A machine sends two different inputs, $4$ and $-4$, to the same output $9$. Is it still a function?',
      choices: [
        'No — a function may never repeat an output',
        'No — a function must be able to run backwards',
        'Yes — different inputs are allowed to share an output',
        'Only if the two inputs are opposites of each other',
      ],
      answer: 2,
      solution:
        'The rule bans one input having two outputs; it says nothing against two inputs sharing one output. So the machine is still a function. Check a second, independent way with a familiar example: $f(x) = x^2 - 7$ sends both $4$ and $-4$ to $9$, and squaring is certainly a function ✓. (The first two choices INVENT EXTRA REQUIREMENTS — repeated outputs are legal, and running backwards is not part of the definition; the last choice pretends the rule depends on the inputs being opposites, but any two inputs may share an output.)',
    },
  ],
  // p5 — the placeholder: feeding in a letter or a described rule.
  [
    {
      q: 'If $g(x) = 5x + 2$, what is $g(t)$?',
      choices: ['$5t$', '$5t + 2$', '$t + 2$', '$7t$'],
      answer: 1,
      solution:
        'The letter fed in does not matter: the rule is "quintuple the input, then add $2$", so $g(t) = 5t + 2$. Check a second, independent way with a number, $t = 3$: the formula gives $5(3) + 2 = 17$, and $g(3) = 5(3) + 2 = 17$ ✓. (The choice $5t$ DROPS THE CONSTANT; the choice $t + 2$ drops the multiplier; the choice $7t$ COMBINES $5$ AND $2$ as though they were like terms, and at $t = 3$ it gives $21$, not $17$.)',
    },
    {
      q: 'If $h(x) = 4 - x$, what is $h(m)$?',
      choices: ['$m - 4$', '$4m$', '$4 - m$', '$4 + m$'],
      answer: 2,
      solution:
        'Put $m$ wherever $x$ stood: $h(m) = 4 - m$. Check a second, independent way with a number, $m = 6$: the formula gives $4 - 6 = -2$, and $h(6) = 4 - 6 = -2$ ✓. (The choice $m - 4$ SUBTRACTS IN THE WRONG ORDER and gives $2$ at $m = 6$; the choice $4m$ turns the subtraction into multiplication; the choice $4 + m$ flips the sign of the input.)',
    },
    {
      q: 'A machine’s rule is "multiply the input by $6$, then subtract $5$." Which expression is the machine’s output for the input $n$?',
      choices: ['$6n - 30$', '$5 - 6n$', '$n - 5$', '$6n - 5$'],
      answer: 3,
      solution:
        'Translate the sentence in order: multiplying gives $6n$, and subtracting $5$ gives $6n - 5$. Check a second, independent way with a number, $n = 4$: the words say $6 \\times 4 = 24$, then $24 - 5 = 19$, and the expression gives $6(4) - 5 = 19$ ✓. (The choice $6n - 30$ SUBTRACTS FIRST, $6(n - 5)$, which is $-6$ at $n = 4$; the choice $5 - 6n$ subtracts in the wrong order; the choice $n - 5$ forgets the multiplier.)',
    },
  ],
  // p6 — feeding a whole expression into the machine.
  [
    {
      q: 'If $g(x) = x^2$, what is $g(x - 3)$?',
      choices: ['$x^2 - 6x + 9$', '$x^2 - 9$', '$x^2 - 3$', '$x^2 - 6x - 9$'],
      answer: 0,
      solution:
        'Substitute the whole expression, parentheses and all: $g(x-3) = (x-3)^2 = x^2 - 6x + 9$. Check a second, independent way with a number, $x = 5$: the inside becomes $2$, so the true value is $2^2 = 4$, and $25 - 30 + 9 = 4$ ✓. (The choice $x^2 - 9$ SQUARES EACH TERM SEPARATELY and gives $16$ at $x = 5$; the choice $x^2 - 3$ subtracts $3$ FROM THE OUTPUT instead of the input; the choice $x^2 - 6x - 9$ mishandles the sign of the last term, giving $-14$ at $x = 5$.)',
    },
    {
      q: 'If $f(x) = x^2 + 2$, what is $f(x + 3)$?',
      choices: ['$x^2 + 11$', '$x^2 + 6x + 11$', '$x^2 + 5$', '$x^2 + 6x + 9$'],
      answer: 1,
      solution:
        'Replace the $x$ inside the rule with $x + 3$: $f(x+3) = (x+3)^2 + 2 = x^2 + 6x + 9 + 2 = x^2 + 6x + 11$. Check a second, independent way with a number, $x = 1$: the inside becomes $4$, so the true value is $16 + 2 = 18$, and $1 + 6 + 11 = 18$ ✓. (The choice $x^2 + 11$ SQUARES EACH TERM SEPARATELY, giving $12$ at $x = 1$; the choice $x^2 + 5$ ADDS $3$ TO THE OUTPUT, which is $f(x) + 3$; the choice $x^2 + 6x + 9$ expands the square correctly but LOSES THE $+2$.)',
    },
    {
      q: 'A machine squares whatever it is given. Which expression is what it produces when the expression $2x$ is fed in?',
      choices: ['$2x^2$', '$x^2 + 2x$', '$4x$', '$4x^2$'],
      answer: 3,
      solution:
        'Squaring $2x$ squares both factors: $(2x)^2 = 2^2 \\cdot x^2 = 4x^2$. Check a second, independent way with a number, $x = 3$: the machine receives $6$ and returns $36$, and $4(3)^2 = 36$ ✓. (The choice $2x^2$ squares only the $x$, giving $18$ at $x = 3$; the choice $x^2 + 2x$ ADDS TO THE OUTPUT instead of feeding the expression in; the choice $4x$ squares only the $2$.)',
    },
  ],
  // p7 — domain: a zero denominator is the only danger.
  [
    {
      q: 'What is the domain of $h(x) = \\frac{7}{x + 4}$?',
      choices: [
        'All $x$ except $x = -4$',
        'All $x$ except $x = 4$',
        'All real numbers',
        'Only $x > -4$',
      ],
      answer: 0,
      solution:
        'The only forbidden move is dividing by zero, and $x + 4 = 0$ exactly when $x = -4$. Every other real number is a legal input, so the domain is all $x$ except $x = -4$. Check a second, independent way by testing the two rivals: at $x = 4$ the machine gives $\\frac{7}{8}$, a perfectly good number ✓, while at $x = -4$ it asks for $\\frac{7}{0}$, which has no value ✗. (The choice naming $x = 4$ FLIPS THE SIGN OF THE KEY POINT; "all real numbers" forgets the ban entirely; the choice $x > -4$ throws away every input below $-4$, but $x = -10$ gives $\\frac{7}{-6}$, which is fine.)',
    },
    {
      q: 'The machine $m(x) = \\frac{x}{2x - 6}$ breaks for exactly one input. Which one?',
      choices: ['$x = 6$', '$x = 3$', '$x = -3$', '$x = 0$'],
      answer: 1,
      solution:
        'The machine breaks where the denominator is zero: $2x - 6 = 0$ gives $2x = 6$, so $x = 3$. Check a second, independent way by substituting: at $x = 3$ the bottom is $2(3) - 6 = 0$ ✗, while the neighbour $x = 4$ gives $\\frac{4}{2}= 2$, a fine value ✓. (The choice $x = 6$ READS THE DENOMINATOR AS $x - 6$, ignoring the coefficient; the choice $x = -3$ flips the sign of the key point; the choice $x = 0$ confuses a ZERO ON TOP with a zero on the bottom — $\\frac{0}{-6} = 0$ is a legal output.)',
    },
    {
      q: 'A machine computes $\\frac{12}{n - 8}$, and $n$ may be any whole number. Which statement is true?',
      choices: [
        'Every whole number is a legal input',
        'Only whole numbers greater than $8$ are legal',
        'Every whole number except $n = 8$ is legal',
        'Only whole numbers less than $8$ are legal',
      ],
      answer: 2,
      solution:
        'The denominator $n - 8$ is zero only at $n = 8$, so that single input is banned and all the others are fine. Check a second, independent way by testing one input on each side of the ban: $n = 5$ gives $\\frac{12}{-3} = -4$ ✓ and $n = 20$ gives $\\frac{12}{12} = 1$ ✓, so neither side may be thrown out. (The first choice forgets the ban; the second and fourth choices each DELETE A WHOLE SIDE of the number line, and the two test values above show both sides contain legal inputs.)',
    },
  ],
  // p8 — domain: a square root needs a nonnegative inside.
  [
    {
      q: 'What is the domain of $g(x) = \\sqrt{x + 5}$?',
      choices: ['$x \\ge -5$', '$x \\ge 5$', '$x > -5$', '$x \\le -5$'],
      answer: 0,
      solution:
        'The inside of a square root may not be negative: $x + 5 \\ge 0$, so $x \\ge -5$. Check a second, independent way at the boundary and just past it: $x = -5$ gives $\\sqrt{0} = 0$, which is legal ✓, while $x = -6$ gives $\\sqrt{-1}$, which is not ✗. (The choice $x \\ge 5$ FLIPS THE SIGN OF THE KEY POINT and wrongly bans $x = 0$, where $\\sqrt{5}$ is perfectly fine; the choice $x > -5$ DROPS THE BOUNDARY that $\\sqrt{0}$ allows; the choice $x \\le -5$ points the inequality the wrong way and admits $x = -6$, just rejected ✗.)',
    },
    {
      q: 'For which inputs does $\\sqrt{8 - x}$ have a real value?',
      choices: ['$x \\ge 8$', '$x \\le -8$', '$x \\le 8$', '$x < 8$'],
      answer: 2,
      solution:
        'Require $8 - x \\ge 0$, so $8 \\ge x$, that is $x \\le 8$. Notice the direction: here it is the LARGE inputs that make the inside negative. Check a second, independent way at the boundary and just past it: $x = 8$ gives $\\sqrt{0} = 0$ ✓, while $x = 9$ gives $\\sqrt{-1}$ ✗. (The choice $x \\ge 8$ points the inequality the wrong way; the choice $x \\le -8$ also flips the sign of the key point and wrongly bans $x = 0$, where $\\sqrt{8}$ is fine; the choice $x < 8$ DROPS THE BOUNDARY, but $\\sqrt{0}$ is legal.)',
    },
    {
      q: 'Which of these numbers is NOT a legal input for $h(x) = \\sqrt{2x - 6}$?',
      choices: ['$3$', '$4$', '$10$', '$2$'],
      answer: 3,
      solution:
        'A legal input needs $2x - 6 \\ge 0$, that is $x \\ge 3$. The only listed number below $3$ is $2$. Check a second, independent way by substituting: $2(2) - 6 = -2$, and $\\sqrt{-2}$ has no real value ✗. (The choice $3$ sits exactly at the boundary and gives $\\sqrt{0} = 0$, which is legal — calling it illegal is DROPPING THE BOUNDARY; the choices $4$ and $10$ give $\\sqrt{2}$ and $\\sqrt{14}$, both fine.)',
    },
  ],
  // p9 — range: what the machine can actually produce.
  [
    {
      q: 'What is the range of $g(x) = x^2 - 5$, where the input may be any real number?',
      choices: ['All $y \\ge 5$', 'All $y \\ge -5$', 'All $y > -5$', 'All real numbers'],
      answer: 1,
      solution:
        'The square $x^2$ is never negative, so its smallest value is $0$ at $x = 0$, and the output there is $-5$. Every larger value is reachable, so the range is all $y \\ge -5$. Check a second, independent way by hunting for a smaller output: solving $x^2 - 5 = -6$ needs $x^2 = -1$, which no real input can do ✗. (The choice $y \\ge 5$ FLIPS THE SIGN of the lowest output; the choice $y > -5$ DROPS THE LOWEST OUTPUT, but $x = 0$ produces exactly $-5$; "all real numbers" forgets that a square can never be negative.)',
    },
    {
      q: 'What is the smallest output the machine $f(x) = 3x^2 + 2$ can ever produce?',
      choices: ['$0$', '$5$', '$2$', 'There is no smallest output'],
      answer: 2,
      solution:
        'Since $x^2 \\ge 0$ for every real input, $3x^2 \\ge 0$ too, so the output is at least $2$ — and the input $x = 0$ hits that value exactly: $f(0) = 2$. Check a second, independent way with a nearby input: $f(0.1) = 3(0.01) + 2 = 2.03$, larger than $2$ ✓. (The choice $0$ forgets the $+2$; the choice $5$ is $f(1)$, assuming the smallest input worth trying is $1$; the last choice ignores that squares have a floor — outputs cannot fall forever.)',
    },
    {
      q: 'The machine $h(x) = 4 - x^2$ accepts any real input. Which description fits its outputs?',
      choices: ['All $y \\ge 4$', 'All real numbers', 'All $y \\ge 0$', 'All $y \\le 4$'],
      answer: 3,
      solution:
        'Because $x^2 \\ge 0$, subtracting it from $4$ can only lower the result: the largest output is $4$, reached at $x = 0$, and everything below is reachable too. So the range is all $y \\le 4$. Check a second, independent way with two inputs: $h(3) = 4 - 9 = -5$, so outputs really do go below zero ✓, while no input gives $5$, since $4 - x^2 = 5$ needs $x^2 = -1$ ✗. (The choice $y \\ge 4$ points the description the wrong way; "all real numbers" ignores the ceiling at $4$; the choice $y \\ge 0$ forgets that the machine SUBTRACTS the square, so negative outputs are common.)',
    },
  ],
  // p10 — applying a machine several times in a row.
  [
    {
      q: 'If $f(x) = 8 - x$, what is $f(f(f(f(3))))$?',
      choices: ['$3$', '$5$', '$8$', '$-3$'],
      answer: 0,
      solution:
        'Work from the inside out: $f(3) = 5$, then $f(5) = 3$, then $f(3) = 5$, then $f(5) = 3$. The answer is $3$. Check a second, independent way with the pattern: applying $f$ twice returns the starting number, since $f(f(x)) = 8 - (8 - x) = x$, and four applications are two such round trips ✓. (The choice $5$ counts an ODD number of applications; the choice $8$ mistakes the constant in the rule for the answer; the choice $-3$ flips the sign of the starting number.)',
    },
    {
      q: 'If $g(x) = 2x - 1$, what is $g(g(g(2)))$?',
      choices: ['$5$', '$9$', '$3$', '$15$'],
      answer: 1,
      solution:
        'Inside out: $g(2) = 3$, then $g(3) = 5$, then $g(5) = 9$. Check a second, independent way by tracking distance from $1$: the rule doubles how far the input sits above $1$, and $2$ is $1$ above, so three doublings reach $1 + 8 = 9$ ✓. (The choice $5$ STOPS ONE APPLICATION EARLY; the choice $3$ stops after a single application; the choice $15$ comes from doubling three times first and subtracting once, $2^3 \\cdot 2 - 1$.)',
    },
    {
      q: 'A machine follows the rule $f(x) = 10 - x$. Starting from a number $n$ and pressing the machine three times in a row gives $4$. What is $n$?',
      choices: ['$4$', '$14$', '$6$', '$-6$'],
      answer: 2,
      solution:
        'Applying this machine twice returns the original number, since $10 - (10 - n) = n$. So three presses do the same job as one press: $10 - n = 4$, giving $n = 6$. Check a second, independent way by pressing forward from $6$: $f(6) = 4$, $f(4) = 6$, $f(6) = 4$ ✓. (The choice $4$ assumes THREE PRESSES RETURN THE INPUT, which is what an even number of presses does; the choice $14$ solves $n - 10 = 4$, subtracting in the wrong order; the choice $-6$ flips the sign of the answer.)',
    },
  ],
]

const s162 = [
  // p1 — a formula for the sum of two machines.
  [
    {
      q: 'If $p(x) = 4x - 5$ and $q(x) = 2x + 9$, what is $(p + q)(x)$?',
      choices: ['$6x + 14$', '$6x + 4$', '$2x + 4$', '$6x - 4$'],
      answer: 1,
      solution:
        'Add the two rules and collect like terms: $(4x - 5) + (2x + 9) = 6x + 4$, since $4x + 2x = 6x$ and $-5 + 9 = 4$. Check a second, independent way at $x = 2$: $p(2) = 3$ and $q(2) = 13$, so the sum is $16$, and $6(2) + 4 = 16$ ✓. (The choice $6x + 14$ ADDS THE CONSTANTS AS $5 + 9$, ignoring the minus, and gives $26$ at $x = 2$; the choice $2x + 4$ SUBTRACTS the $x$-terms instead of adding them; the choice $6x - 4$ flips the sign of the constant.)',
    },
    {
      q: 'Machines $u(x) = x + 7$ and $v(x) = 3x - 2$ are run on the same input and their two outputs are added. What single rule does the combined machine follow?',
      choices: ['$4x + 9$', '$4x - 5$', '$4x + 5$', '$3x + 5$'],
      answer: 2,
      solution:
        'Combine the rules: $(x + 7) + (3x - 2) = 4x + 5$, since $x + 3x = 4x$ and $7 - 2 = 5$. Check a second, independent way at $x = 3$: $u(3) = 10$ and $v(3) = 7$, so the sum is $17$, and $4(3) + 5 = 17$ ✓. (The choice $4x + 9$ ADDS THE CONSTANTS AS $7 + 2$, giving $21$ at $x = 3$; the choice $4x - 5$ subtracts the constants in the wrong order; the choice $3x + 5$ treats $x + 3x$ as $3x$.)',
    },
    {
      q: 'Two machines follow the rules $m(x) = 6 - x$ and $n(x) = 5x - 6$. Which rule does $(m + n)$ follow?',
      choices: ['$4x + 12$', '$-4x$', '$4x - 12$', '$4x$'],
      answer: 3,
      solution:
        'Add the rules: $(6 - x) + (5x - 6) = 4x + 0 = 4x$, since $-x + 5x = 4x$ and $6 - 6 = 0$. Check a second, independent way at $x = 5$: $m(5) = 1$ and $n(5) = 19$, so the sum is $20$, and $4(5) = 20$ ✓. (The choice $4x + 12$ reads the second constant as $+6$, computing $6 + 6$; the choice $-4x$ SUBTRACTS the $x$-terms, $-1 - 5$; the choice $4x - 12$ computes $-6 - 6$ for the constants.)',
    },
  ],
  // p2 — a sum evaluated at a single input.
  [
    {
      q: 'If $f(x) = x^2$ and $g(x) = 5x$, what is $(f + g)(3)$?',
      choices: ['$24$', '$14$', '$135$', '$225$'],
      answer: 0,
      solution:
        'Run each machine on $3$ and add: $f(3) = 9$ and $g(3) = 15$, so the sum is $24$. Check a second, independent way by building the combined rule first, $x^2 + 5x$, and then substituting: $9 + 15 = 24$ ✓. (The choice $14$ adds $9$ and $5$, FORGETTING TO FINISH $g$; the choice $135$ MULTIPLIES the outputs, $9 \\times 15$; the choice $225$ is $f(g(3))$ — COMPOSING INSTEAD OF COMBINING.)',
    },
    {
      q: 'If $f(x) = x^2 - 1$ and $g(x) = 4x$, what is $(f + g)(2)$?',
      choices: ['$12$', '$11$', '$24$', '$-5$'],
      answer: 1,
      solution:
        'Evaluate each machine at $2$: $f(2) = 4 - 1 = 3$ and $g(2) = 8$. Their sum is $11$. Check a second, independent way with the combined rule $x^2 + 4x - 1$: at $x = 2$ that is $4 + 8 - 1 = 11$ ✓. (The choice $12$ LOSES THE $-1$; the choice $24$ MULTIPLIES the outputs, $3 \\times 8$; the choice $-5$ subtracts the outputs instead of adding them.)',
    },
    {
      q: 'A workshop’s material cost is $c(n) = n^2$ dollars and its labour cost is $t(n) = 2n$ dollars for $n$ chairs. What does the combined cost machine $(c + t)$ output for $n = 5$?',
      choices: ['$\\$30$', '$\\$15$', '$\\$35$', '$\\$250$'],
      answer: 2,
      solution:
        'Run both machines on $5$ and add the outputs: $c(5) = 25$ and $t(5) = 10$, so the total is $\\$35$. Check a second, independent way with the combined rule $n^2 + 2n$: at $n = 5$ that is $25 + 10 = 35$ ✓. (The choice $\\$30$ adds $25$ and $5$, FORGETTING TO DOUBLE in the labour machine; the choice $\\$15$ adds $5$ and $10$, forgetting to square in the material machine; the choice $\\$250$ MULTIPLIES the two outputs.)',
    },
  ],
  // p3 — a difference formula: the minus must reach every term.
  [
    {
      q: 'If $f(x) = 7x$ and $g(x) = 3x - 5$, what is $(f - g)(x)$?',
      choices: ['$4x + 5$', '$4x - 5$', '$10x - 5$', '$4x$'],
      answer: 0,
      solution:
        'Subtract the entire rule for $g$: $7x - (3x - 5) = 7x - 3x + 5 = 4x + 5$. The minus sign hits both terms, which is where the $+5$ comes from. Check a second, independent way at $x = 2$: $f(2) = 14$ and $g(2) = 1$, so the difference is $13$, and $4(2) + 5 = 13$ ✓. (The choice $4x - 5$ FAILS TO DISTRIBUTE THE MINUS and gives $3$ at $x = 2$; the choice $10x - 5$ adds the rules instead of subtracting; the choice $4x$ drops the constant altogether.)',
    },
    {
      q: 'If $p(x) = 2x + 3$ and $q(x) = 5x - 1$, what is $(q - p)(x)$?',
      choices: ['$3x + 2$', '$7x + 2$', '$3x - 4$', '$-3x + 4$'],
      answer: 2,
      solution:
        'Careful with the order — this is $q$ minus $p$: $(5x - 1) - (2x + 3) = 5x - 1 - 2x - 3 = 3x - 4$. Check a second, independent way at $x = 4$: $q(4) = 19$ and $p(4) = 11$, so the difference is $8$, and $3(4) - 4 = 8$ ✓. (The choice $3x + 2$ FAILS TO DISTRIBUTE THE MINUS, computing $-1 + 3$; the choice $7x + 2$ adds the rules; the choice $-3x + 4$ is $(p - q)(x)$, the SUBTRACTION IN THE WRONG ORDER, and gives $-8$ at $x = 4$.)',
    },
    {
      q: 'Machine $f$ outputs $9x$ and machine $g$ outputs $4x + 6$ on the same input $x$. By how much does $f$’s output exceed $g$’s?',
      choices: ['$5x + 6$', '$13x + 6$', '$5x$', '$5x - 6$'],
      answer: 3,
      solution:
        '"Exceeds by" means subtract: $9x - (4x + 6) = 9x - 4x - 6 = 5x - 6$. Check a second, independent way at $x = 3$: $f(3) = 27$ and $g(3) = 18$, a gap of $9$, and $5(3) - 6 = 9$ ✓. (The choice $5x + 6$ FAILS TO DISTRIBUTE THE MINUS and gives $21$ at $x = 3$; the choice $13x + 6$ adds the rules; the choice $5x$ forgets the constant entirely.)',
    },
  ],
  // p4 — a product evaluated at a single input.
  [
    {
      q: 'If $f(x) = x + 4$ and $g(x) = x - 2$, what is $(f \\cdot g)(3)$?',
      choices: ['$7$', '$8$', '$5$', '$21$'],
      answer: 0,
      solution:
        'Run both machines on $3$, then multiply: $f(3) = 7$ and $g(3) = 1$, so the product is $7 \\times 1 = 7$. Check a second, independent way with the combined rule $(x+4)(x-2) = x^2 + 2x - 8$: at $x = 3$ that is $9 + 6 - 8 = 7$ ✓. (The choice $8$ ADDS the outputs; the choice $5$ is $f(g(3))$ — COMPOSING INSTEAD OF MULTIPLYING; the choice $21$ multiplies one output by the input, $7 \\times 3$.)',
    },
    {
      q: 'If $f(x) = 2x$ and $g(x) = x + 5$, what is $(f \\cdot g)(4)$?',
      choices: ['$17$', '$72$', '$18$', '$13$'],
      answer: 1,
      solution:
        'Evaluate both machines at $4$: $f(4) = 8$ and $g(4) = 9$. Multiply the outputs: $8 \\times 9 = 72$. Check a second, independent way with the combined rule $2x(x+5) = 2x^2 + 10x$: at $x = 4$ that is $32 + 40 = 72$ ✓. (The choice $17$ ADDS the outputs; the choice $18$ is $f(g(4))$ — COMPOSING INSTEAD OF MULTIPLYING; the choice $13$ mashes the rules into $2x + 5$.)',
    },
    {
      q: 'A rectangle’s width in centimetres is given by $w(x) = x + 2$ and its height by $h(x) = 2x$. What is its area in square centimetres when $x = 5$?',
      choices: ['$17$', '$34$', '$12$', '$70$'],
      answer: 3,
      solution:
        'Area is width times height, so run both machines and multiply: $w(5) = 7$ and $h(5) = 10$, giving $70$ square centimetres. Check a second, independent way with the combined rule $(x+2)(2x) = 2x^2 + 4x$: at $x = 5$ that is $50 + 20 = 70$ ✓. (The choice $17$ ADDS the two outputs; the choice $34$ is the perimeter, $2(7 + 10)$; the choice $12$ is $w(h(5))$ — COMPOSING INSTEAD OF MULTIPLYING.)',
    },
  ],
  // p5 — a difference at a single input, where order decides the sign.
  [
    {
      q: 'If $f(x) = x^2 + 5$ and $g(x) = 6x$, what is $(f - g)(2)$?',
      choices: ['$-3$', '$3$', '$21$', '$-8$'],
      answer: 0,
      solution:
        'Evaluate each machine at $2$: $f(2) = 4 + 5 = 9$ and $g(2) = 12$. Subtract in the stated order: $9 - 12 = -3$. Check a second, independent way with the combined rule $x^2 - 6x + 5$: at $x = 2$ that is $4 - 12 + 5 = -3$ ✓. (The choice $3$ is $(g - f)(2)$ — the SUBTRACTION IN THE WRONG ORDER; the choice $21$ adds the outputs; the choice $-8$ LOSES THE $+5$.)',
    },
    {
      q: 'If $f(x) = x^2 - 3$ and $g(x) = 2x$, what is $(f - g)(5)$?',
      choices: ['$-12$', '$12$', '$32$', '$15$'],
      answer: 1,
      solution:
        'Evaluate each machine at $5$: $f(5) = 25 - 3 = 22$ and $g(5) = 10$. Then $(f - g)(5) = 22 - 10 = 12$. Check a second, independent way with the combined rule $x^2 - 2x - 3$: at $x = 5$ that is $25 - 10 - 3 = 12$ ✓. (The choice $-12$ is $(g - f)(5)$ — the SUBTRACTION IN THE WRONG ORDER; the choice $32$ adds the outputs; the choice $15$ LOSES THE $-3$.)',
    },
    {
      q: 'Over the first $t$ minutes a tank gains $f(t) = t^2$ litres and loses $g(t) = 5t$ litres. What is $(f - g)(6)$, the net gain in litres?',
      choices: ['$-6$', '$66$', '$6$', '$1080$'],
      answer: 2,
      solution:
        'Run both machines on $6$: the tank gains $f(6) = 36$ litres and loses $g(6) = 30$ litres, so the net gain is $36 - 30 = 6$ litres. Check a second, independent way with the combined rule $t^2 - 5t$: at $t = 6$ that is $36 - 30 = 6$ ✓. (The choice $-6$ is $(g - f)(6)$ — the SUBTRACTION IN THE WRONG ORDER, which would say the tank lost water; the choice $66$ adds the outputs; the choice $1080$ multiplies them.)',
    },
  ],
  // p6 — a formula for the product of two machines.
  [
    {
      q: 'If $f(x) = x$ and $g(x) = x - 7$, what is $(f \\cdot g)(x)$?',
      choices: ['$x^2 - 7$', '$x^2 - 7x$', '$2x - 7$', '$x^2 + 7x$'],
      answer: 1,
      solution:
        'Multiply the rules and distribute: $x(x - 7) = x^2 - 7x$. Check a second, independent way at $x = 3$: $f(3) = 3$ and $g(3) = -4$, so the product is $-12$, and $9 - 21 = -12$ ✓. (The choice $x^2 - 7$ MULTIPLIES ONLY THE FIRST TERM and gives $2$ at $x = 3$; the choice $2x - 7$ adds the rules instead of multiplying; the choice $x^2 + 7x$ flips the sign of the second term.)',
    },
    {
      q: 'If $f(x) = 3x$ and $g(x) = x + 4$, what is $(f \\cdot g)(x)$?',
      choices: ['$3x^2 + 4$', '$3x^2 + 4x$', '$3x^2 + 12x$', '$3x + 12$'],
      answer: 2,
      solution:
        'Multiply and distribute the $3x$ across both terms: $3x(x + 4) = 3x^2 + 12x$. Check a second, independent way at $x = 2$: $f(2) = 6$ and $g(2) = 6$, so the product is $36$, and $12 + 24 = 36$ ✓. (The choice $3x^2 + 4$ leaves the $4$ untouched, giving $16$ at $x = 2$; the choice $3x^2 + 4x$ FORGETS TO MULTIPLY THE $4$ BY $3$, giving $20$; the choice $3x + 12$ never squares anything, as though the rules had been added.)',
    },
    {
      q: 'Which pair of machines has product $(f \\cdot g)(x) = x^2 + 6x$?',
      choices: [
        '$f(x) = x$ and $g(x) = 6x$',
        '$f(x) = x^2$ and $g(x) = 6x$',
        '$f(x) = x + 2$ and $g(x) = x + 3$',
        '$f(x) = x$ and $g(x) = x + 6$',
      ],
      answer: 3,
      solution:
        'Factor the target: $x^2 + 6x = x(x + 6)$, so one machine outputs $x$ and the other outputs $x + 6$. Check a second, independent way at $x = 4$, where the target is $16 + 24 = 40$: the winning pair gives $4 \\times 10 = 40$ ✓. (The first choice multiplies to $6x^2$, which is $96$ at $x = 4$; the second gives $6x^3$, which is $384$; the third choice MULTIPLIES THE CONSTANTS INSTEAD OF ADDING THEM in the middle term, producing $x^2 + 5x + 6$, which is $42$.)',
    },
  ],
  // p7 — a quotient evaluated at a single input.
  [
    {
      q: 'If $f(x) = x^2 - 4$ and $g(x) = x - 2$, what is $\\frac{f}{g}(5)$?',
      choices: ['$7$', '$21$', '$3$', '$63$'],
      answer: 0,
      solution:
        'Evaluate each machine at $5$: $f(5) = 25 - 4 = 21$ and $g(5) = 3$. Divide the outputs: $\\frac{21}{3} = 7$. Check a second, independent way by simplifying first: $\\frac{x^2-4}{x-2} = \\frac{(x-2)(x+2)}{x-2} = x + 2$ wherever it is defined, and $5 + 2 = 7$ ✓. (The choice $21$ stops at the numerator, FORGETTING TO DIVIDE; the choice $3$ ANSWERS WITH THE DENOMINATOR; the choice $63$ multiplies the outputs instead of dividing.)',
    },
    {
      q: 'If $f(x) = 6x$ and $g(x) = x - 1$, what is $\\frac{f}{g}(3)$?',
      choices: ['$17$', '$9$', '$\\frac{1}{9}$', '$36$'],
      answer: 1,
      solution:
        'Evaluate each machine at $3$: $f(3) = 18$ and $g(3) = 2$. Divide: $\\frac{18}{2} = 9$. Check a second, independent way by multiplying back — if the quotient is $9$, then $9 \\times g(3) = 9 \\times 2 = 18 = f(3)$ ✓. (The choice $17$ mashes the two rules into $6x - 1$; the choice $\\frac{1}{9}$ DIVIDES IN THE WRONG ORDER, $\\frac{g(3)}{f(3)}$; the choice $36$ multiplies the outputs instead of dividing.)',
    },
    {
      q: 'Let $f(x) = x^2 - 25$ and $g(x) = x + 5$. For which input does $\\frac{f}{g}$ produce the output $3$?',
      choices: ['$-2$', '$3$', '$-8$', '$8$'],
      answer: 3,
      solution:
        'Simplify the quotient: $\\frac{x^2-25}{x+5} = \\frac{(x-5)(x+5)}{x+5} = x - 5$ for every input except $x = -5$. Setting $x - 5 = 3$ gives $x = 8$. Check a second, independent way by running $8$ through both machines: $f(8) = 64 - 25 = 39$ and $g(8) = 13$, and $\\frac{39}{13} = 3$ ✓. (The choice $-2$ solves $x + 5 = 3$, using the DENOMINATOR AS THE WHOLE QUOTIENT; the choice $3$ is ANSWERING WITH THE OUTPUT; the choice $-8$ attaches the wrong sign when undoing the subtraction.)',
    },
  ],
  // p8 — the domain of a quotient: hunt every zero of the denominator.
  [
    {
      q: 'If $f(x) = x - 2$ and $g(x) = x^2 - 16$, what is the domain of $\\frac{f}{g}$?',
      choices: [
        'All $x$ except $x = 4$ and $x = -4$',
        'All $x$ except $x = 4$',
        'All $x$ except $x = 2$',
        'All real numbers',
      ],
      answer: 0,
      solution:
        'The denominator is zero when $x^2 = 16$, which happens at BOTH $x = 4$ and $x = -4$, so both inputs must go. Check a second, independent way by substituting: at $x = -4$ the bottom is $16 - 16 = 0$ ✗, while at $x = 2$ the bottom is $-12$ and the quotient is $\\frac{0}{-12} = 0$, a perfectly good output ✓. (The choice naming only $x = 4$ LOSES THE NEGATIVE ROOT; the choice naming $x = 2$ bans a ZERO ON TOP, which is harmless; "all real numbers" forgets the ban entirely.)',
    },
    {
      q: 'For $f(x) = x + 1$ and $g(x) = x^2 - 5x$, which inputs must be thrown out of the domain of $\\frac{f}{g}$?',
      choices: [
        'Only $x = 5$',
        'Only $x = 0$',
        '$x = 0$ and $x = 5$',
        '$x = -1$, $x = 0$, and $x = 5$',
      ],
      answer: 2,
      solution:
        'Factor the denominator: $x^2 - 5x = x(x - 5)$, which is zero at $x = 0$ and at $x = 5$. Both inputs are banned. Check a second, independent way by substituting: at $x = 0$ the bottom is $0$ ✗, at $x = 5$ the bottom is $25 - 25 = 0$ ✗, and at $x = -1$ the bottom is $6$, so $\\frac{0}{6} = 0$ is fine ✓. (Each of the first two choices LOSES ONE ROOT, which is what happens if you divide the equation by $x$; the last choice also bans the NUMERATOR ZERO at $x = -1$, but zero on top is allowed.)',
    },
    {
      q: 'Let $f(x) = x^2 - 1$ and $g(x) = x - 7$. Which statement about $\\frac{f}{g}$ is true?',
      choices: [
        'It is undefined at $x = 1$ and at $x = -1$',
        'It is undefined everywhere except at $x = 7$',
        'It is defined for every real number',
        'It is undefined at $x = 7$ and nowhere else',
      ],
      answer: 3,
      solution:
        'Only a zero denominator can break a quotient, and $x - 7 = 0$ only at $x = 7$. Check a second, independent way by substituting: at $x = 7$ the quotient asks for $\\frac{48}{0}$ ✗, while at $x = 1$ it is $\\frac{0}{-6} = 0$ and at $x = -1$ it is $\\frac{0}{-8} = 0$, both fine ✓. (The first choice bans the NUMERATOR ZEROS, which are harmless; the second choice has the situation exactly backwards; the third choice forgets the ban.)',
    },
  ],
  // p9 — recovering the missing machine from a combination.
  [
    {
      q: 'Suppose $(f + g)(x) = 7x - 1$ and $g(x) = 3x + 4$. What is $f(x)$?',
      choices: ['$4x - 5$', '$4x + 3$', '$10x + 3$', '$4x + 5$'],
      answer: 0,
      solution:
        'Since $f(x) + g(x) = 7x - 1$, subtract $g$ from both sides: $f(x) = (7x - 1) - (3x + 4) = 4x - 5$. Check a second, independent way by adding back: $(4x - 5) + (3x + 4) = 7x - 1$ ✓. (The choice $4x + 3$ FAILS TO DISTRIBUTE THE MINUS, computing $-1 + 4$; the choice $10x + 3$ adds the two rules instead of subtracting; the choice $4x + 5$ flips the sign of the constant, and adding it back gives $7x + 9$ ✗.)',
    },
    {
      q: 'Suppose $(p + q)(x) = 6x + 5$ and $p(x) = x - 2$. What is $q(x)$?',
      choices: ['$5x + 3$', '$5x + 7$', '$7x + 3$', '$5x - 7$'],
      answer: 1,
      solution:
        'Subtract $p$ from the sum: $q(x) = (6x + 5) - (x - 2) = 6x + 5 - x + 2 = 5x + 7$. Check a second, independent way by adding back: $(x - 2) + (5x + 7) = 6x + 5$ ✓. (The choice $5x + 3$ FAILS TO DISTRIBUTE THE MINUS, computing $5 - 2$; the choice $7x + 3$ adds the rules instead of subtracting; the choice $5x - 7$ flips the sign of the constant, and adding it back gives $6x - 9$ ✗.)',
    },
    {
      q: 'Suppose $(f - g)(x) = 2x + 9$ and $f(x) = 5x + 4$. What is $g(x)$?',
      choices: ['$3x + 13$', '$7x + 13$', '$3x - 5$', '$3x + 5$'],
      answer: 2,
      solution:
        'From $f(x) - g(x) = 2x + 9$ we get $g(x) = f(x) - (2x + 9) = (5x + 4) - (2x + 9) = 3x - 5$. Check a second, independent way by subtracting forward: $(5x + 4) - (3x - 5) = 2x + 9$ ✓. (The choice $3x + 13$ FAILS TO DISTRIBUTE THE MINUS, computing $4 + 9$; the choice $7x + 13$ adds the two expressions; the choice $3x + 5$ flips the sign of the constant, and subtracting it forward gives $2x - 1$ ✗.)',
    },
  ],
  // p10 — where a combined machine outputs zero: never divide by x.
  [
    {
      q: 'If $f(x) = x^2$ and $g(x) = 5x$, for which inputs is $(f - g)(x) = 0$?',
      choices: ['$x = 5$ only', '$x = 0$ and $x = 5$', '$x = 0$ only', '$x = -5$ and $x = 5$'],
      answer: 1,
      solution:
        'We need $x^2 - 5x = 0$. Factor rather than divide: $x(x - 5) = 0$, so $x = 0$ or $x = 5$. Check a second, independent way by substituting: at $x = 0$ both machines output $0$ ✓, and at $x = 5$ both output $25$ ✓. (The choice $x = 5$ only comes from DIVIDING BOTH SIDES BY $x$, which silently deletes the root $x = 0$; the choice $x = 0$ only keeps the other root and loses this one; the choice $x = \\pm 5$ treats the equation as $x^2 = 25$, but $(-5)^2 - 5(-5) = 50$ ✗.)',
    },
    {
      q: 'The machines $f(x) = x^2 + 3x$ and $g(x) = 4x$ agree for exactly two inputs. Which are they?',
      choices: ['$x = 1$ only', '$x = 0$ only', '$x = 0$ and $x = 1$', '$x = -1$ and $x = 0$'],
      answer: 2,
      solution:
        'Agreeing means $x^2 + 3x = 4x$, so $x^2 - x = 0$, and factoring gives $x(x - 1) = 0$: the inputs are $0$ and $1$. Check a second, independent way by substituting: at $x = 0$ both machines output $0$ ✓, and at $x = 1$ both output $4$ ✓. (The choice $x = 1$ only comes from DIVIDING BOTH SIDES BY $x$ and losing the root $x = 0$; the choice $x = 0$ only keeps just one root; the choice with $x = -1$ mishandles the sign, and there $f(-1) = -2$ while $g(-1) = -4$ ✗.)',
    },
    {
      q: 'The machine $g$ ignores its input and always outputs $9$, while $f(x) = x^2$. For which inputs is $(f - g)(x) = 0$?',
      choices: ['$x = 3$ only', '$x = 0$ and $x = 3$', '$x = 9$ only', '$x = 3$ and $x = -3$'],
      answer: 3,
      solution:
        'We need $x^2 - 9 = 0$, so $x^2 = 9$, and two numbers square to $9$: $x = 3$ and $x = -3$. Check a second, independent way by substituting: $f(3) = 9 = g(3)$ ✓ and $f(-3) = 9 = g(-3)$ ✓. (The choice $x = 3$ only LOSES THE NEGATIVE ROOT; the choice $x = 9$ only forgets to take a square root, and $81 - 9 = 72$ ✗; the choice including $x = 0$ ignores that $f(0) = 0$, which is nowhere near $9$.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 16,
  sections: {
    '16.1': s161,
    '16.2': s162,
  },
}
