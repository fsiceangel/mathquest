// Introduction to Algebra chapter 19 — variations for section 19.1
// (Exponential Functions). All problems and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every key was worked twice by two different routes, and the second route
//    is written out in the solution. Powers were computed as repeated
//    multiplication AND by splitting the exponent (or by rewriting the base);
//    growth and decay stories were computed with a single power AND by
//    stepping through the table one period at a time; "find the base" answers
//    were found by dividing neighbouring outputs AND by substituting the base
//    back in; "solve for x" answers were found by matching powers AND by
//    walking the chain of outputs and counting the steps.
//  - Every answer is exact. Nothing here rounds: the decimals that appear
//    ($38.4$, $102.4$-style numbers) are exact products of a terminating
//    decimal with a power of $2$.
//  - Each distractor is one named mistake, named at the end of the solution,
//    and that mistake really does produce that choice. The traps running
//    through this section are: MULTIPLYING THE BASE BY THE EXPONENT, SWAPPING
//    THE BASE AND THE EXPONENT, STOPPING ONE FACTOR SHORT, TAKING ONE FACTOR
//    TOO MANY, DROPPING THE COEFFICIENT, RAISING THE COEFFICIENT TOO,
//    TREATING $b^0$ AS $0$ OR AS THE WHOLE FUNCTION, ANSWERING WITH $f(1)$,
//    LETTING A NEGATIVE EXPONENT MAKE A NEGATIVE OUTPUT, IGNORING THE MINUS
//    IN THE EXPONENT, FLIPPING THE COEFFICIENT TOO, JUDGING GROWTH BY THE
//    COEFFICIENT, CALLING A NEGATIVE COEFFICIENT DECAY, MULTIPLYING BY THE
//    NUMBER OF PERIODS, SUBTRACTING INSTEAD OF DIVIDING, DIVIDING IN THE
//    WRONG ORDER, AVERAGING TWO OUTPUTS, ANSWERING WITH THE BASE, and
//    REPORTING THE POWER INSTEAD OF THE EXPONENT.
//  - No two choices inside an item name the same number.

const s191 = [
  // p1 — a bare power: the exponent counts factors, it is not a multiplier.
  [
    {
      q: 'If $f(x) = 3^x$, what is $f(4)$?',
      choices: ['$12$', '$27$', '$64$', '$81$'],
      answer: 3,
      solution:
        'The exponent counts factors, so $f(4) = 3^4$ means four $3$s multiplied together: $3 \\cdot 3 = 9$, then $9 \\cdot 3 = 27$, then $27 \\cdot 3 = 81$. Check a second, independent way by splitting the exponent in half: $3^4 = 3^2 \\cdot 3^2 = 9 \\cdot 9 = 81$ ✓ — same number, and no factor was counted twice. (The choice $12$ is MULTIPLYING THE BASE BY THE EXPONENT, $3 \\times 4$; the choice $27$ STOPS ONE FACTOR SHORT at $3^3$; the choice $64$ SWAPS THE BASE AND THE EXPONENT and computes $4^3$.)',
    },
    {
      q: 'If $f(x) = 5^x$, what is $f(3)$?',
      choices: ['$15$', '$125$', '$25$', '$243$'],
      answer: 1,
      solution:
        'Three factors of $5$: $5 \\cdot 5 = 25$, then $25 \\cdot 5 = 125$, so $f(3) = 125$. Check a second, independent way by starting from $f(0) = 5^0 = 1$ and multiplying by $5$ once per step: $1 \\to 5 \\to 25 \\to 125$. That is three steps, landing on $f(3) = 125$ ✓. (The choice $15$ is MULTIPLYING THE BASE BY THE EXPONENT, $5 \\times 3$; the choice $25$ STOPS ONE FACTOR SHORT at $5^2$; the choice $243$ SWAPS THE BASE AND THE EXPONENT and computes $3^5$.)',
    },
    {
      q: 'If $h(x) = 4^x$, what is $h(3)$?',
      choices: ['$64$', '$12$', '$16$', '$81$'],
      answer: 0,
      solution:
        'Three factors of $4$: $4 \\cdot 4 = 16$, then $16 \\cdot 4 = 64$, so $h(3) = 64$. Check a second, independent way by rewriting the base as a power of $2$: $4 = 2^2$, so $4^3 = (2^2)^3 = 2^6 = 64$ ✓ — a completely different multiplication, same answer. (The choice $12$ is MULTIPLYING THE BASE BY THE EXPONENT, $4 \\times 3$; the choice $16$ STOPS ONE FACTOR SHORT at $4^2$; the choice $81$ SWAPS THE BASE AND THE EXPONENT and computes $3^4$.)',
    },
  ],
  // p2 — the zero power is 1, so f(0) is always the coefficient out front.
  [
    {
      q: 'If $f(x) = 8 \\cdot 4^x$, what is $f(0)$?',
      choices: ['$0$', '$1$', '$8$', '$32$'],
      answer: 2,
      solution:
        'Any nonzero base raised to the $0$ power is $1$, so $4^0 = 1$ and $f(0) = 8 \\cdot 1 = 8$. The value at $x = 0$ is always the number out front — that is why it is called the starting value. Check a second, independent way by walking backwards from $f(1)$: $f(1) = 8 \\cdot 4 = 32$, and stepping DOWN by one in $x$ divides by the base, so $f(0) = 32 \\div 4 = 8$ ✓. (The choice $0$ is TREATING $4^0$ AS $0$; the choice $1$ takes $4^0 = 1$ and then forgets the coefficient, reporting the power alone; the choice $32$ is ANSWERING WITH $f(1)$.)',
    },
    {
      q: 'If $g(x) = 12 \\cdot \\left(\\frac{1}{2}\\right)^x$, what is $g(0)$?',
      choices: ['$12$', '$6$', '$1$', '$0$'],
      answer: 0,
      solution:
        'The zero power rule does not care that the base is a fraction: $\\left(\\frac{1}{2}\\right)^0 = 1$, so $g(0) = 12 \\cdot 1 = 12$. Check a second, independent way by walking backwards from $g(1)$: each step up in $x$ halves the output, so $g(1) = 6$, and stepping back down doubles it, giving $g(0) = 12$ ✓. (The choice $6$ is ANSWERING WITH $g(1)$; the choice $1$ reports the power $\\left(\\frac{1}{2}\\right)^0$ and DROPS THE COEFFICIENT; the choice $0$ is TREATING A ZERO EXPONENT AS A ZERO OUTPUT.)',
    },
    {
      q: 'For which of these functions is $f(0) = 6$?',
      choices: ['$f(x) = 6^x$', '$f(x) = 2 \\cdot 6^x$', '$f(x) = 3 \\cdot 2^x$', '$f(x) = 6 \\cdot 2^x$'],
      answer: 3,
      solution:
        'For $f(x) = a \\cdot b^x$ the output at $x = 0$ is $a$, because $b^0 = 1$ wipes the power away. So we want the function whose coefficient is $6$: that is $f(x) = 6 \\cdot 2^x$ ✓. Check a second, independent way by evaluating all four at $x = 0$ and comparing: $6^0 = 1$, $2 \\cdot 6^0 = 2$, $3 \\cdot 2^0 = 3$, and $6 \\cdot 2^0 = 6$ ✓ — four different values, exactly one of them $6$. (The choice $6^x$ has no coefficient written, so its starting value is $1$, not $6$ — the $6$ is the BASE; the choice $2 \\cdot 6^x$ makes the same swap the other way round; the choice $3 \\cdot 2^x$ multiplies the coefficient by the base to get $6$, which is $f(1)$, not $f(0)$.)',
    },
  ],
  // p3 — coefficient times power: the exponent belongs to the base alone.
  [
    {
      q: 'If $f(x) = 3 \\cdot 2^x$, what is $f(4)$?',
      choices: ['$16$', '$24$', '$48$', '$1296$'],
      answer: 2,
      solution:
        'Power first, then multiply: $2^4 = 16$, so $f(4) = 3 \\cdot 16 = 48$. Check a second, independent way by stepping: the starting value is $f(0) = 3$, and each step up in $x$ doubles it, so $3 \\to 6 \\to 12 \\to 24 \\to 48$ — four doublings, ending at $48$ ✓. (The choice $24$ treats the exponent as a factor, $3 \\cdot 2 \\cdot 4$; the choice $1296$ RAISES THE COEFFICIENT TOO, computing $(3 \\cdot 2)^4 = 6^4$; the choice $16$ DROPS THE COEFFICIENT and reports $2^4$ alone.)',
    },
    {
      q: 'If $g(x) = 7 \\cdot 3^x$, what is $g(2)$?',
      choices: ['$63$', '$42$', '$9$', '$441$'],
      answer: 0,
      solution:
        'Power first: $3^2 = 9$, so $g(2) = 7 \\cdot 9 = 63$. The exponent belongs to the $3$ only — the $7$ just sits out front. Check a second, independent way by stepping from the starting value $g(0) = 7$ and tripling twice: $7 \\to 21 \\to 63$ ✓. (The choice $42$ treats the exponent as a factor, $7 \\cdot 3 \\cdot 2$; the choice $441$ RAISES THE COEFFICIENT TOO, computing $(7 \\cdot 3)^2 = 21^2$; the choice $9$ DROPS THE COEFFICIENT and reports $3^2$ alone.)',
    },
    {
      q: 'If $h(x) = 5 \\cdot 4^x$, what is $h(2)$?',
      choices: ['$16$', '$40$', '$400$', '$80$'],
      answer: 3,
      solution:
        'Power first: $4^2 = 16$, so $h(2) = 5 \\cdot 16 = 80$. Check a second, independent way by stepping from $h(0) = 5$ and multiplying by $4$ twice: $5 \\to 20 \\to 80$ ✓. (The choice $40$ treats the exponent as a factor, $5 \\cdot 4 \\cdot 2$; the choice $400$ RAISES THE COEFFICIENT TOO, computing $(5 \\cdot 4)^2 = 20^2$; the choice $16$ DROPS THE COEFFICIENT and reports $4^2$ alone.)',
    },
  ],
  // p4 — only the base decides growth or decay.
  [
    {
      q: 'One of the four functions below shrinks toward zero as $x$ climbs. Which one is it?',
      choices: [
        '$f(x) = 2 \\cdot (0.75)^x$',
        '$f(x) = 0.5 \\cdot 3^x$',
        '$f(x) = 4 \\cdot (1.5)^x$',
        '$f(x) = -3 \\cdot 2^x$',
      ],
      answer: 0,
      solution:
        'Decay means the base sits strictly between $0$ and $1$, so each step multiplies the output by less than $1$ and shrinks it. Only $0.75$ does that, so $f(x) = 2 \\cdot (0.75)^x$ is the decaying one ✓. Check a second, independent way by watching two actual outputs of each: $2 \\to 1.5$ shrinks ✓; $0.5 \\to 1.5$ grows; $4 \\to 6$ grows; and $-3 \\to -6$ moves further from zero, so it is growing in size, not decaying. (The choice $0.5 \\cdot 3^x$ is JUDGING GROWTH BY THE COEFFICIENT — the small $0.5$ only gives it a small start, while the base $3$ still triples it every step; the choice $4 \\cdot (1.5)^x$ reads the decimal point as a sign of shrinking, but $1.5$ is bigger than $1$; the choice $-3 \\cdot 2^x$ is CALLING A NEGATIVE COEFFICIENT DECAY, and a minus sign in front is not a base between $0$ and $1$.)',
    },
    {
      q: 'Which of these functions shows exponential GROWTH?',
      choices: [
        '$f(x) = 10 \\cdot (0.4)^x$',
        '$f(x) = \\frac{1}{3} \\cdot 5^x$',
        '$f(x) = 8 \\cdot \\left(\\frac{1}{4}\\right)^x$',
        '$f(x) = 100 \\cdot (0.99)^x$',
      ],
      answer: 1,
      solution:
        'Growth means a base bigger than $1$. Reading only the bases: $0.4$, $5$, $\\frac{1}{4}$, and $0.99$ — exactly one of them, the $5$, is bigger than $1$, so $f(x) = \\frac{1}{3} \\cdot 5^x$ grows ✓. Check a second, independent way by comparing $f(0)$ with $f(1)$ in each: $10 \\to 4$ shrinks, $\\frac{1}{3} \\to \\frac{5}{3}$ grows ✓, $8 \\to 2$ shrinks, and $100 \\to 99$ shrinks. One climber, three shrinkers. (The choice $10 \\cdot (0.4)^x$ starts high, but a big starting value is not growth; the choice $8 \\cdot \\left(\\frac{1}{4}\\right)^x$ has a whole-number coefficient hiding a fraction base; the choice $100 \\cdot (0.99)^x$ is JUDGING GROWTH BY THE COEFFICIENT — the base $0.99$ is just under $1$, so it creeps downward.)',
    },
    {
      q: 'Which function below is an example of exponential decay?',
      choices: [
        '$f(x) = 7 \\cdot (1.1)^x$',
        '$f(x) = 0.6 \\cdot 4^x$',
        '$f(x) = 3 \\cdot 2^{-x}$',
        '$f(x) = 5 \\cdot \\left(\\frac{5}{4}\\right)^x$',
      ],
      answer: 2,
      solution:
        'A negative sign in the exponent is a base in disguise: $2^{-x} = \\left(\\frac{1}{2}\\right)^x$, because a negative exponent makes a reciprocal. That base is between $0$ and $1$, so $f(x) = 3 \\cdot 2^{-x}$ decays ✓. Check a second, independent way by listing outputs at $x = 0, 1, 2$: $3, \\frac{3}{2}, \\frac{3}{4}$ — halving every step, shrinking but staying positive ✓, while the others read $7, 7.7, 8.47$ and $0.6, 2.4, 9.6$ and $5, \\frac{25}{4}, \\frac{125}{16}$, all climbing. (The choice $7 \\cdot (1.1)^x$ grows slowly, and slow growth is still growth; the choice $0.6 \\cdot 4^x$ is JUDGING GROWTH BY THE COEFFICIENT; the choice $5 \\cdot \\left(\\frac{5}{4}\\right)^x$ has a fraction base, but $\\frac{5}{4}$ is bigger than $1$ — the test is where the base sits relative to $1$, not whether it is written as a fraction.)',
    },
  ],
  // p5 — a negative exponent makes a small POSITIVE output.
  [
    {
      q: 'If $f(x) = 3^x$, what is $f(-2)$?',
      choices: ['$-9$', '$\\frac{1}{9}$', '$-6$', '$-\\frac{1}{9}$'],
      answer: 1,
      solution:
        'A negative exponent means a reciprocal: $3^{-2} = \\frac{1}{3^2} = \\frac{1}{9}$. Check a second, independent way by stepping down through a table, since each step DOWN in $x$ divides by $3$: $3^1 = 3$, $3^0 = 1$, $3^{-1} = \\frac{1}{3}$, $3^{-2} = \\frac{1}{9}$ ✓ — the outputs shrink toward zero and never turn negative. (The choice $-9$ is LETTING A NEGATIVE EXPONENT MAKE A NEGATIVE OUTPUT, reading $3^{-2}$ as $-(3^2)$; the choice $-6$ is MULTIPLYING THE BASE BY THE EXPONENT, $3 \\times (-2)$; the choice $-\\frac{1}{9}$ takes the reciprocal correctly but keeps a minus sign that was never there.)',
    },
    {
      q: 'If $f(x) = 6^x$, what is $f(-2)$?',
      choices: ['$\\frac{1}{36}$', '$-36$', '$-\\frac{1}{36}$', '$\\frac{1}{12}$'],
      answer: 0,
      solution:
        'Flip and then square: $6^{-2} = \\frac{1}{6^2} = \\frac{1}{36}$. Check a second, independent way by moving the minus sign into the base first: $6^{-2} = \\left(\\frac{1}{6}\\right)^2 = \\frac{1}{6} \\cdot \\frac{1}{6} = \\frac{1}{36}$ ✓ — reciprocal first or power first, the answer is the same. (The choice $-36$ is LETTING A NEGATIVE EXPONENT MAKE A NEGATIVE OUTPUT; the choice $-\\frac{1}{36}$ flips correctly but drags a minus sign along; the choice $\\frac{1}{12}$ is MULTIPLYING THE BASE BY THE EXPONENT downstairs, $\\frac{1}{6 \\times 2}$, instead of squaring the $6$.)',
    },
    {
      q: 'If $f(x) = 4 \\cdot 2^x$, what is $f(-2)$?',
      choices: ['$16$', '$-1$', '$\\frac{1}{16}$', '$1$'],
      answer: 3,
      solution:
        'The negative exponent belongs to the $2$ only: $2^{-2} = \\frac{1}{4}$, so $f(-2) = 4 \\cdot \\frac{1}{4} = 1$. Check a second, independent way by stepping down from the starting value: $f(0) = 4$, and each step DOWN in $x$ halves the output, so $f(-1) = 2$ and $f(-2) = 1$ ✓. (The choice $16$ is IGNORING THE MINUS IN THE EXPONENT and computing $4 \\cdot 2^2$; the choice $-1$ gets the size right but LETS THE NEGATIVE EXPONENT MAKE A NEGATIVE OUTPUT; the choice $\\frac{1}{16}$ FLIPS THE COEFFICIENT TOO, computing $\\frac{1}{4 \\cdot 2^2}$ instead of leaving the $4$ upstairs.)',
    },
  ],
  // p6 — repeated growth: multiply by the factor once per period.
  [
    {
      q: 'A pond starts with $25$ lily pads, and the number of lily pads triples every day. How many lily pads are there after $3$ days?',
      choices: ['$75$', '$225$', '$675$', '$2025$'],
      answer: 2,
      solution:
        'Tripling every day for $3$ days means multiplying by $3$ three times: $25 \\cdot 3^3 = 25 \\cdot 27 = 675$ lily pads. Check a second, independent way by walking day by day: $25 \\to 75 \\to 225 \\to 675$, which is three arrows and so three days ✓. (The choice $75$ triples once and stops, using only the first day; the choice $225$ treats the exponent as a factor, multiplying by $3 \\times 3 = 9$ instead of by $3^3 = 27$; the choice $2025$ TAKES ONE PERIOD TOO MANY, $25 \\cdot 3^4$.)',
    },
    {
      q: 'On Monday, $6$ children in the drama club know the punchline of a joke. Each day after that, four times as many children know it as knew it the day before. How many children know the punchline $3$ days later?',
      choices: ['$384$', '$72$', '$96$', '$1536$'],
      answer: 0,
      solution:
        'Four times as many each day for $3$ days means three multiplications by $4$: $6 \\cdot 4^3 = 6 \\cdot 64 = 384$ children. Check a second, independent way by walking day by day: $6 \\to 24 \\to 96 \\to 384$ — three arrows for three days ✓. (The choice $72$ treats the exponent as a factor, $6 \\cdot 4 \\cdot 3$; the choice $96$ STOPS ONE DAY SHORT at $6 \\cdot 4^2$; the choice $1536$ TAKES ONE DAY TOO MANY, $6 \\cdot 4^4$.)',
    },
    {
      q: 'In a video game your score starts at $40$ points, and it doubles each time you clear a level. What is your score after clearing $5$ levels?',
      choices: ['$200$', '$640$', '$2560$', '$1280$'],
      answer: 3,
      solution:
        'Five levels means five doublings: $40 \\cdot 2^5 = 40 \\cdot 32 = 1280$ points. Check a second, independent way by doubling level by level and counting the arrows: $40 \\to 80 \\to 160 \\to 320 \\to 640 \\to 1280$ — five arrows, five levels ✓. (The choice $200$ is MULTIPLYING BY THE NUMBER OF PERIODS, $40 \\cdot 5$, instead of by $2^5$; the choice $640$ STOPS ONE LEVEL SHORT at $40 \\cdot 2^4$; the choice $2560$ TAKES ONE LEVEL TOO MANY, $40 \\cdot 2^6$.)',
    },
  ],
  // p7 — the base is the RATIO of neighbouring outputs, never the difference.
  [
    {
      q: 'An exponential function $g(x) = a \\cdot b^x$ satisfies $g(0) = 6$ and $g(1) = 24$. What is the base $b$?',
      choices: ['$4$', '$18$', '$6$', '$24$'],
      answer: 0,
      solution:
        'One step up in $x$ multiplies the output by $b$, so $b$ is the ratio of neighbours: $b = \\frac{g(1)}{g(0)} = \\frac{24}{6} = 4$. Check a second, independent way by substituting back: $g(0) = 6$ tells us $a = 6$, and then $g(1) = 6 \\cdot 4^1 = 24$ ✓, matching the data we were handed. (The choice $18$ is the DIFFERENCE $24 - 6$, which is what a linear function would care about — exponential functions climb by ratios; the choice $6$ is ANSWERING WITH THE COEFFICIENT $a$; the choice $24$ copies the output $g(1)$ straight out of the question.)',
    },
    {
      q: 'An exponential function $f(x) = a \\cdot b^x$ satisfies $f(1) = 10$ and $f(2) = 50$. What is the base $b$?',
      choices: ['$40$', '$\\frac{1}{5}$', '$5$', '$10$'],
      answer: 2,
      solution:
        'The two inputs are one apart, so their outputs still differ by exactly one factor of $b$: $b = \\frac{f(2)}{f(1)} = \\frac{50}{10} = 5$. Check a second, independent way by finding $a$ and rebuilding the function: $f(1) = a \\cdot 5 = 10$ gives $a = 2$, and then $f(2) = 2 \\cdot 5^2 = 2 \\cdot 25 = 50$ ✓ — both given values come out right. (The choice $40$ is the DIFFERENCE $50 - 10$; the choice $\\frac{1}{5}$ is DIVIDING IN THE WRONG ORDER, $\\frac{10}{50}$; the choice $10$ copies the output $f(1)$.)',
    },
    {
      q: 'An exponential function $f(x) = a \\cdot b^x$ satisfies $f(0) = 80$ and $f(1) = 20$. What is the base $b$?',
      choices: ['$4$', '$\\frac{1}{4}$', '$-60$', '$60$'],
      answer: 1,
      solution:
        'The rule is the same when the outputs shrink: $b = \\frac{f(1)}{f(0)} = \\frac{20}{80} = \\frac{1}{4}$. A base between $0$ and $1$ is exactly what decay looks like. Check a second, independent way by substituting back: $a = 80$, so $f(1) = 80 \\cdot \\frac{1}{4} = 20$ ✓, and the next output would be $f(2) = 5$, still shrinking by the same factor. (The choice $4$ is DIVIDING IN THE WRONG ORDER, $\\frac{80}{20}$ — that base would make the function grow, not shrink; the choice $-60$ is the DIFFERENCE $20 - 80$; the choice $60$ is that same difference with the sign dropped.)',
    },
  ],
  // p8 — the middle output is a ratio step, not an average.
  [
    {
      q: 'An exponential function $f(x) = a \\cdot b^x$ with $b > 0$ satisfies $f(0) = 5$ and $f(2) = 45$. What is $f(1)$?',
      choices: ['$25$', '$15$', '$9$', '$22.5$'],
      answer: 1,
      solution:
        'From $f(0) = 5$ we get $a = 5$. Then $f(2) = 5b^2 = 45$, so $b^2 = 9$ and, since $b > 0$, $b = 3$. That makes $f(1) = 5 \\cdot 3 = 15$. Check a second, independent way by testing whether the three outputs really climb by one steady ratio: $5, 15, 45$ — and $\\frac{15}{5} = 3$ while $\\frac{45}{15} = 3$ ✓, the same factor twice. (The choice $25$ is AVERAGING THE TWO OUTPUTS, $\\frac{5 + 45}{2}$, which is how a LINEAR function would fill the gap; the choice $9$ reports $b^2$, the total growth factor, instead of an output; the choice $22.5$ halves $f(2)$.)',
    },
    {
      q: 'An exponential function $f(x) = a \\cdot b^x$ with $b > 0$ satisfies $f(0) = 2$ and $f(2) = 50$. What is $f(1)$?',
      choices: ['$26$', '$25$', '$5$', '$10$'],
      answer: 3,
      solution:
        'From $f(0) = 2$ we get $a = 2$. Then $2b^2 = 50$, so $b^2 = 25$ and $b = 5$ (the positive root, since $b > 0$), giving $f(1) = 2 \\cdot 5 = 10$. Check a second, independent way with the middle-output identity: for equally spaced inputs, $f(1) \\cdot f(1)$ must equal $f(0) \\cdot f(2)$, because both products collect the same two factors of $b$. Here $10 \\cdot 10 = 100$ and $2 \\cdot 50 = 100$ ✓. (The choice $26$ is AVERAGING THE TWO OUTPUTS, $\\frac{2 + 50}{2}$; the choice $25$ halves $f(2)$ — which also happens to be $b^2$, the two-step growth factor, not an output; the choice $5$ is ANSWERING WITH THE BASE instead of with $f(1)$.)',
    },
    {
      q: 'An exponential function $f(x) = a \\cdot b^x$ with $b > 0$ satisfies $f(0) = 81$ and $f(2) = 9$. What is $f(1)$?',
      choices: ['$45$', '$72$', '$27$', '$\\frac{1}{3}$'],
      answer: 2,
      solution:
        'From $f(0) = 81$ we get $a = 81$. Then $81b^2 = 9$, so $b^2 = \\frac{9}{81} = \\frac{1}{9}$ and $b = \\frac{1}{3}$, giving $f(1) = 81 \\cdot \\frac{1}{3} = 27$. Check a second, independent way by testing the ratios of the finished list $81, 27, 9$: $\\frac{27}{81} = \\frac{1}{3}$ and $\\frac{9}{27} = \\frac{1}{3}$ ✓ — one steady shrinking factor, exactly what a decaying exponential does. (The choice $45$ is AVERAGING THE TWO OUTPUTS, $\\frac{81 + 9}{2}$, which treats the drop as a straight line; the choice $72$ SUBTRACTS INSTEAD OF DIVIDING, $81 - 9$; the choice $\\frac{1}{3}$ is ANSWERING WITH THE BASE instead of with $f(1)$.)',
    },
  ],
  // p9 — a tiny starting value times a big power of 2 is still exact.
  [
    {
      q: 'A strand of thread is $0.5$ mm thick. Each time it is folded, the thickness doubles. After $8$ folds, how thick is the folded thread?',
      choices: ['$4$ mm', '$64$ mm', '$128$ mm', '$256$ mm'],
      answer: 2,
      solution:
        'Eight folds means eight doublings: $0.5 \\cdot 2^8 = 0.5 \\cdot 256 = 128$ mm. Check a second, independent way by folding one at a time and counting: $0.5 \\to 1 \\to 2 \\to 4 \\to 8 \\to 16 \\to 32 \\to 64 \\to 128$ — that is eight arrows ✓, and the last one lands on $128$ mm. (The choice $4$ mm is MULTIPLYING BY THE NUMBER OF FOLDS, $0.5 \\cdot 8$; the choice $64$ mm STOPS ONE FOLD SHORT at $0.5 \\cdot 2^7$; the choice $256$ mm TAKES ONE FOLD TOO MANY, $0.5 \\cdot 2^9$.)',
    },
    {
      q: 'A paper napkin is $0.25$ mm thick, and every fold doubles its thickness. How thick is the napkin after $10$ folds?',
      choices: ['$256$ mm', '$2.5$ mm', '$128$ mm', '$512$ mm'],
      answer: 0,
      solution:
        'Ten folds means ten doublings: $0.25 \\cdot 2^{10} = 0.25 \\cdot 1024 = 256$ mm — more than $25$ centimetres from a napkin! Check a second, independent way by writing the decimal as a fraction and cancelling powers of $2$: $0.25 = \\frac{1}{4} = \\frac{1}{2^2}$, so the thickness is $\\frac{2^{10}}{2^2} = 2^8 = 256$ ✓. (The choice $2.5$ mm is MULTIPLYING BY THE NUMBER OF FOLDS, $0.25 \\cdot 10$; the choice $128$ mm STOPS ONE FOLD SHORT at $0.25 \\cdot 2^9$; the choice $512$ mm TAKES ONE FOLD TOO MANY, $0.25 \\cdot 2^{11}$.)',
    },
    {
      q: 'A drop of oil on water covers $0.3$ square cm, and the oily patch doubles in area every minute. How large is the patch after $7$ minutes?',
      choices: ['$2.1$ square cm', '$19.2$ square cm', '$76.8$ square cm', '$38.4$ square cm'],
      answer: 3,
      solution:
        'Seven minutes means seven doublings: $0.3 \\cdot 2^7 = 0.3 \\cdot 128 = 38.4$ square cm. Check a second, independent way by clearing the decimal first: $0.3 = \\frac{3}{10}$, so the area is $\\frac{3 \\cdot 128}{10} = \\frac{384}{10} = 38.4$ ✓ — an exact answer, nothing rounded. (The choice $2.1$ square cm is MULTIPLYING BY THE NUMBER OF MINUTES, $0.3 \\cdot 7$; the choice $19.2$ square cm STOPS ONE MINUTE SHORT at $0.3 \\cdot 2^6$; the choice $76.8$ square cm TAKES ONE MINUTE TOO MANY, $0.3 \\cdot 2^8$.)',
    },
  ],
  // p10 — count the steps: the answer is the exponent, not the value.
  [
    {
      q: 'Let $f(x) = 54 \\cdot \\left(\\frac{1}{3}\\right)^x$. For what value of $x$ does $f(x) = 2$?',
      choices: ['$2$', '$3$', '$4$', '$27$'],
      answer: 1,
      solution:
        'Each step up in $x$ divides the output by $3$, so walk down the chain and count the arrows: $54 \\to 18 \\to 6 \\to 2$. Three divisions, so $x = 3$. Check a second, independent way by matching powers: $f(x) = 2$ means $\\frac{54}{3^x} = 2$, so $3^x = \\frac{54}{2} = 27 = 3^3$, giving $x = 3$ ✓. (The choice $2$ COPIES THE TARGET VALUE $2$ instead of counting steps; the choice $4$ takes one division too many and overshoots to $\\frac{2}{3}$; the choice $27$ reports the power $3^x = 27$ rather than the exponent $x$.)',
    },
    {
      q: 'Let $f(x) = 5 \\cdot 2^x$. For what value of $x$ does $f(x) = 320$?',
      choices: ['$6$', '$5$', '$7$', '$64$'],
      answer: 0,
      solution:
        'Divide the target by the starting value to see how much growing is needed: $\\frac{320}{5} = 64$, and $64 = 2^6$, so $x = 6$. Check a second, independent way by doubling from the start and counting the arrows: $5 \\to 10 \\to 20 \\to 40 \\to 80 \\to 160 \\to 320$ — six arrows ✓. (The choice $5$ STOPS ONE DOUBLING SHORT, reaching only $160$; the choice $7$ takes one doubling too many and overshoots to $640$; the choice $64$ is REPORTING THE POWER $2^x = 64$ INSTEAD OF THE EXPONENT $x$.)',
    },
    {
      q: 'Let $f(x) = 64 \\cdot \\left(\\frac{1}{4}\\right)^x$. For what value of $x$ does $f(x) = 1$?',
      choices: ['$2$', '$4$', '$3$', '$6$'],
      answer: 2,
      solution:
        'Each step up in $x$ divides the output by $4$: $64 \\to 16 \\to 4 \\to 1$. Three divisions, so $x = 3$. Check a second, independent way by matching powers: $f(x) = 1$ means $\\frac{64}{4^x} = 1$, so $4^x = 64 = 4^3$ and $x = 3$ ✓. (The choice $2$ STOPS ONE STEP SHORT, at $4$ rather than $1$; the choice $4$ takes one step too many and lands on $\\frac{1}{4}$; the choice $6$ divides by $2$ each time instead of by $4$ — halving does take $6$ steps to get from $64$ down to $1$, but this function quarters.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 19,
  sections: {
    '19.1': s191,
  },
}
