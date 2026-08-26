// Introduction to Algebra chapter 16 — variations for the end-of-chapter
// challenge set. All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was worked out by hand and then confirmed a SECOND, independent
//    way: a composition is recomputed in the OTHER order (and the wrong-order
//    value is then used as a distractor), an inverse is checked both as
//    $f(f^{-1}(x)) = x$ and as $f^{-1}(f(x)) = x$, a recursive climb is redone
//    as a single leap, a factoring is re-multiplied, and a table lookup is
//    re-read from the other machine.
//  - These are the chapter's hard problems, so a variation stays hard: every
//    item combines two ideas — an evaluation plus a comparison, a composition
//    plus a subtraction, an inverse plus a fraction, a domain plus a
//    denominator, a decomposition plus a swapped-order trap.
//  - Each distractor is one named mistake, and the name is stated at the end of
//    the solution. The traps that run through the whole file: RUNNING THE
//    MACHINES IN THE WRONG ORDER, SQUARING A NEGATIVE AND KEEPING THE MINUS,
//    SUBTRACTING IN THE WRONG DIRECTION, RUNNING A MACHINE FORWARD WHEN THE
//    QUESTION ASKED FOR ITS INVERSE, UNDOING THE STEPS IN THE ORDER THEY WERE
//    DONE INSTEAD OF IN REVERSE, TREATING $f^{-1}$ AS A RECIPROCAL, COUNTING
//    FENCE POSTS INSTEAD OF GAPS, SUBTRACTING WHERE A DIVISION WAS NEEDED,
//    ANSWERING WITH THE INNER MACHINE'S OUTPUT, and READING THE CONSTANT TERM
//    AS THE ANSWER.
//  - No two choices inside an item name the same number or the same rule, in
//    any spelling.

const challenge = [
  // c1 — evaluating a quadratic rule at a negative input, where the trap is the
  // sign of the square. Each version adds a second step so that one careful
  // substitution is never enough: a difference of two outputs, or a comparison.
  [
    {
      q: 'A machine follows the rule $f(x) = x^2 + 5x$. What is $f(-4) - f(2)$?',
      choices: ['$-18$', '$18$', '$10$', '$-50$'],
      answer: 0,
      solution:
        'Run the machine twice, keeping the parentheses around the negative input. $f(-4) = (-4)^2 + 5(-4) = 16 - 20 = -4$, since the square of $-4$ is $+16$. $f(2) = 2^2 + 5(2) = 4 + 10 = 14$. Now subtract in the order asked: $f(-4) - f(2) = -4 - 14 = -18$. Check a second way by combining first: $f(-4) - f(2) = \\left[(-4)^2 - 2^2\\right] + 5\\left[(-4) - 2\\right] = (16 - 4) + 5(-6) = 12 - 30 = -18$ ✓. (The choice $18$ subtracts the other way round, $f(2) - f(-4)$. The choice $10$ adds the two outputs instead of subtracting them. The choice $-50$ comes from writing $(-4)^2 = -16$, keeping a minus sign the square destroys.)',
    },
    {
      q: 'For the rule $g(x) = 3x - x^2$, how much bigger is $g(-1)$ than $g(-5)$?',
      choices: ['$-44$', '$-36$', '$36$', '$12$'],
      answer: 2,
      solution:
        'Run the machine at both inputs, then compare. $g(-5) = 3(-5) - (-5)^2 = -15 - 25 = -40$, since $(-5)^2 = +25$ and the rule subtracts it. $g(-1) = 3(-1) - (-1)^2 = -3 - 1 = -4$. The amount by which $g(-1)$ beats $g(-5)$ is $g(-1) - g(-5) = -4 - (-40) = -4 + 40 = 36$. Check a second way: on a number line, climbing from $-40$ up to $-4$ is a climb of $36$ ✓. (The choice $-36$ subtracts the other way round, reporting $g(-5) - g(-1)$. The choice $-44$ reads $-4 - (-40)$ as $-4 - 40$, dropping the double negative. The choice $12$ writes $(-5)^2 = -25$ and $(-1)^2 = -1$, which turns the two outputs into $10$ and $-2$.)',
    },
    {
      q: 'A machine uses the rule $m(x) = x^2 - 4x + 1$. Which of the two inputs $-3$ and $5$ produces the larger output, and what is that output?',
      choices: ['$x = 5$, output $6$', '$x = -3$, output $-2$', '$x = 5$, output $46$', '$x = -3$, output $22$'],
      answer: 3,
      solution:
        'Run both inputs through the rule. For $x = -3$: $(-3)^2 - 4(-3) + 1 = 9 + 12 + 1 = 22$ — the square gives $+9$ and subtracting $-12$ adds, so both middle steps push the output up. For $x = 5$: $5^2 - 4(5) + 1 = 25 - 20 + 1 = 6$. So $-3$ wins with an output of $22$. Check a second way by completing the square: $m(x) = (x-2)^2 - 3$, so $m(-3) = (-5)^2 - 3 = 22$ ✓ and $m(5) = 3^2 - 3 = 6$ ✓; the input further from $2$ produces the bigger output, and $-3$ is $5$ away while $5$ is only $3$ away. (The choice $x = 5$, output $6$ assumes the bigger input must give the bigger output. The choice $x = -3$, output $-2$ computes $9 - 12 + 1$, forgetting that $-4x$ is positive when $x$ is negative. The choice $x = 5$, output $46$ makes the same sign slip at $x = 5$, computing $25 + 20 + 1$.)',
    },
  ],
  // c2 — a numerical composition where the inner machine hands a NEGATIVE number
  // to the outer one. Every version computes the other order as well, so the
  // wrong-order value can be offered as the headline distractor.
  [
    {
      q: 'Two machines are $p(x) = x^2 + 2x$ and $q(x) = 1 - x$. What is $p(q(4))$?',
      choices: ['$3$', '$-23$', '$-15$', '$15$'],
      answer: 0,
      solution:
        'The inner machine is $q$, so it runs first: $q(4) = 1 - 4 = -3$. Feed that into $p$: $p(-3) = (-3)^2 + 2(-3) = 9 - 6 = 3$. Check the other order to be sure it is a different journey: $p(4) = 16 + 8 = 24$, then $q(24) = 1 - 24 = -23$, so $q(p(4)) = -23 \\ne 3$ ✓ — order matters. (The choice $-23$ is exactly that other order. The choice $-15$ writes $(-3)^2 = -9$, giving $-9 - 6$. The choice $15$ computes the inner machine backwards as $4 - 1 = 3$ and then finds $p(3) = 9 + 6$.)',
    },
    {
      q: 'Let $u(x) = 3x - 5$ and $v(x) = x^2$. What is $v(u(4)) - u(v(4))$?',
      choices: ['$-6$', '$6$', '$92$', '$0$'],
      answer: 1,
      solution:
        'Build each composition separately, always running the inner machine first. For $v(u(4))$: $u(4) = 12 - 5 = 7$, then $v(7) = 49$. For $u(v(4))$: $v(4) = 16$, then $u(16) = 48 - 5 = 43$. Subtract in the order written: $49 - 43 = 6$. Check with formulas instead of numbers: $v(u(x)) = (3x-5)^2 = 9x^2 - 30x + 25$ and $u(v(x)) = 3x^2 - 5$, so the difference is $6x^2 - 30x + 30$, which at $x = 4$ is $96 - 120 + 30 = 6$ ✓. (The choice $-6$ subtracts the other way round. The choice $92$ adds the two compositions instead of subtracting. The choice $0$ assumes the two orders must agree — the whole point of this problem is that they do not.)',
    },
    {
      q: 'A number is sent through $s(x) = 6x - 2$ and the result is then sent through $r(x) = \\frac{x}{2} + 4$. If the number is $4$, what comes out at the end?',
      choices: ['$34$', '$13$', '$15$', '$11$'],
      answer: 2,
      solution:
        'The machines run $s$ first and $r$ second, which is the composition $r(s(4))$. First $s(4) = 24 - 2 = 22$. Then $r(22) = \\frac{22}{2} + 4 = 11 + 4 = 15$. Check with a formula: $r(s(x)) = \\frac{6x-2}{2} + 4 = 3x - 1 + 4 = 3x + 3$, and $3(4) + 3 = 15$ ✓. Check the other order too: $r(4) = 2 + 4 = 6$, then $s(6) = 36 - 2 = 34$, a different answer ✓. (The choice $34$ runs the machines in the opposite order. The choice $13$ adds before dividing, computing $\\frac{22 + 4}{2}$. The choice $11$ halves the $22$ and forgets the $+4$.)',
    },
  ],
  // c3 — an inverse asked as "which input produced this output", so the machine
  // has to be run backwards. One version hides a negative coefficient, one has a
  // fractional rule, and one applies the undo machine twice.
  [
    {
      q: 'A machine triples its input and subtracts the result from $7$, so its rule is $f(x) = 7 - 3x$. Which input does this machine send to $-8$?',
      choices: ['$15$', '$5$', '$-5$', '$31$'],
      answer: 1,
      solution:
        'Running the machine backwards means solving $7 - 3x = -8$. Subtract $7$: $-3x = -15$. Divide by $-3$: $x = 5$. Check forwards: $f(5) = 7 - 15 = -8$ ✓. Check the general undo machine as well: $f^{-1}(x) = \\frac{7 - x}{3}$, so $f^{-1}(-8) = \\frac{15}{3} = 5$ ✓, and $f^{-1}(f(x)) = \\frac{7 - (7 - 3x)}{3} = x$ ✓ while $f(f^{-1}(x)) = 7 - 3 \\cdot \\frac{7-x}{3} = x$ ✓. (The choice $31$ runs the machine forward on $-8$: $7 + 24 = 31$. The choice $-5$ divides $-15$ by $3$ instead of by $-3$. The choice $15$ stops at $-3x = -15$ and never divides at all.)',
    },
    {
      q: 'If $g(x) = \\frac{2x}{3} + 1$, what is $g^{-1}(5)$?',
      choices: ['$\\frac{13}{3}$', '$4$', '$6$', '$\\frac{13}{2}$'],
      answer: 2,
      solution:
        'Ask which input gives the output $5$: solve $\\frac{2x}{3} + 1 = 5$. Subtract $1$ to get $\\frac{2x}{3} = 4$, multiply by $3$ to get $2x = 12$, then divide by $2$: $x = 6$. Check forwards: $g(6) = \\frac{12}{3} + 1 = 4 + 1 = 5$ ✓. Check the formula both ways: $g^{-1}(x) = \\frac{3(x-1)}{2}$, so $g\\left(g^{-1}(x)\\right) = \\frac{2}{3} \\cdot \\frac{3(x-1)}{2} + 1 = x$ ✓ and $g^{-1}(g(x)) = \\frac{3\\left(\\frac{2x}{3} + 1 - 1\\right)}{2} = x$ ✓. (The choice $\\frac{13}{3}$ runs the machine forward on $5$. The choice $\\frac{13}{2}$ undoes the steps in the order they were done — multiplying by $\\frac{3}{2}$ first and only then subtracting $1$ — instead of in reverse. The choice $4$ subtracts the $1$ and stops, never undoing the $\\frac{2}{3}$.)',
    },
    {
      q: 'If $h(x) = \\frac{x - 1}{4}$, what is $h^{-1}\\left(h^{-1}(2)\\right)$?',
      choices: ['$9$', '$27$', '$33$', '$37$'],
      answer: 3,
      solution:
        'First build the undo machine. From $x = \\frac{y-1}{4}$ we get $4x = y - 1$, so $h^{-1}(x) = 4x + 1$. Check both directions: $h\\left(h^{-1}(x)\\right) = \\frac{(4x+1) - 1}{4} = x$ ✓ and $h^{-1}(h(x)) = 4 \\cdot \\frac{x-1}{4} + 1 = x$ ✓; every real number is a legal input for both, since nothing is divided by a variable. Now apply the undo machine twice: $h^{-1}(2) = 8 + 1 = 9$, then $h^{-1}(9) = 36 + 1 = 37$. Check by running $h$ forward twice from $37$: $h(37) = \\frac{36}{4} = 9$ ✓ and $h(9) = \\frac{8}{4} = 2$ ✓, landing back on the starting number. (The choice $9$ stops after one application. The choice $33$ forgets the inner $+1$, computing $4(4 \\cdot 2) + 1$. The choice $27$ uses the wrong undo machine $4x - 1$, which gives $7$ and then $27$.)',
    },
  ],
  // c4 — a recursive rule climbed over several steps. The count of steps is the
  // trap (gaps, not fence posts). One version climbs by a factor of 3, one runs
  // BACKWARDS down the chain, and one mixes a doubling with an added constant.
  [
    {
      q: 'A function satisfies $f(n + 1) = 3f(n)$ for every $n$, and $f(2) = 4$. What is $f(6)$?',
      choices: ['$324$', '$972$', '$108$', '$16$'],
      answer: 0,
      solution:
        'Each step up in the input multiplies the output by $3$. Climb one step at a time: $f(3) = 12$, $f(4) = 36$, $f(5) = 108$, $f(6) = 324$. Check with one leap instead: from $f(2)$ to $f(6)$ is $6 - 2 = 4$ steps, so $f(6) = 4 \\times 3^4 = 4 \\times 81 = 324$ ✓. (The choice $972$ counts $5$ steps instead of $4$ — count the gaps, not the inputs. The choice $108$ counts only $3$ steps and stops at $f(5)$. The choice $16$ reads the rule as "add $3$ each time," giving $4, 7, 10, 13, 16$.)',
    },
    {
      q: 'A function satisfies $g(x + 1) = 2g(x)$ for every $x$, and $g(6) = 96$. What is $g(2)$?',
      choices: ['$12$', '$6$', '$1536$', '$3$'],
      answer: 1,
      solution:
        'The rule doubles the output as the input goes UP, so walking back down the chain halves it each time. From $g(6) = 96$: $g(5) = 48$, $g(4) = 24$, $g(3) = 12$, $g(2) = 6$. Check by climbing forward from the answer: $6 \\to 12 \\to 24 \\to 48 \\to 96$ ✓, four doublings that land exactly on $g(6) = 96$. Check with one leap: $6 - 2 = 4$ steps, so $g(2) = \\frac{96}{2^4} = \\frac{96}{16} = 6$ ✓. (The choice $1536$ doubles four times instead of halving, going the wrong way along the chain. The choice $12$ halves only three times. The choice $3$ halves five times, walking one step too far to $g(1)$.)',
    },
    {
      q: 'A function satisfies $f(x + 1) = 2f(x) + 1$ for every $x$, and $f(1) = 1$. What is $f(4)$?',
      choices: ['$8$', '$9$', '$31$', '$15$'],
      answer: 3,
      solution:
        'The rule doubles AND adds $1$ at every step, so both jobs must be done each time. $f(2) = 2(1) + 1 = 3$, then $f(3) = 2(3) + 1 = 7$, then $f(4) = 2(7) + 1 = 15$. Check a second way by spotting the pattern: the values $1, 3, 7, 15$ are each one less than a power of two, so $f(x) = 2^x - 1$; testing that formula in the rule gives $2\\left(2^x - 1\\right) + 1 = 2^{x+1} - 1$ ✓, and $f(4) = 16 - 1 = 15$ ✓. (The choice $8$ doubles three times and never adds the $1$. The choice $9$ doubles three times and adds the $1$ only once at the end. The choice $31$ takes four steps instead of three, landing on $f(5)$.)',
    },
  ],
  // c5 — a product or quotient of two functions is given along with one factor,
  // and the other has to be recovered by FACTORING, never by subtracting. One
  // version pulls out a constant first; one runs the quotient backwards.
  [
    {
      q: 'Suppose $f(x) = x + 3$ and $(f \\cdot g)(x) = x^2 + 7x + 12$. What is $g(x)$?',
      choices: ['$g(x) = x^2 + 6x + 9$', '$g(x) = x + 4$', '$g(x) = x + 7$', '$g(x) = x - 4$'],
      answer: 1,
      solution:
        'A product of functions is a product of their rules, so we need $(x + 3) \\cdot g(x) = x^2 + 7x + 12$ — a division, not a subtraction. Factor the right side: two numbers multiplying to $12$ and adding to $7$ are $3$ and $4$, so $x^2 + 7x + 12 = (x+3)(x+4)$ and therefore $g(x) = x + 4$. Check by multiplying back out: $(x+3)(x+4) = x^2 + 4x + 3x + 12 = x^2 + 7x + 12$ ✓. Check one number too: at $x = 1$, $f(1) = 4$ and $g(1) = 5$, and $4 \\times 5 = 20 = 1 + 7 + 12$ ✓. (The choice $x^2 + 6x + 9$ subtracts $f$ from the product instead of dividing. The choice $x + 7$ reads the middle coefficient off as the constant, but $(x+3)(x+7) = x^2 + 10x + 21$. The choice $x - 4$ flips a sign and gives $x^2 - x - 12$.)',
    },
    {
      q: 'Suppose $g(x) = x - 2$ and $(f \\cdot g)(x) = 2x^2 - 8$. What is $f(x)$?',
      choices: ['$f(x) = x + 2$', '$f(x) = 2x - 4$', '$f(x) = 2x + 4$', '$f(x) = 2x^2 - x - 6$'],
      answer: 2,
      solution:
        'Pull the common factor out first: $2x^2 - 8 = 2\\left(x^2 - 4\\right) = 2(x-2)(x+2)$, using the difference of squares. One factor of $x - 2$ is exactly $g$, so what remains is $f(x) = 2(x + 2) = 2x + 4$. Check by multiplying back: $(2x+4)(x-2) = 2x^2 - 4x + 4x - 8 = 2x^2 - 8$ ✓. Check one number: at $x = 3$, $f(3) = 10$ and $g(3) = 1$, and $10 \\times 1 = 10 = 18 - 8$ ✓. (The choice $x + 2$ forgets the factor of $2$ and gives only $x^2 - 4$. The choice $2x - 4$ flips a sign and gives $2x^2 - 8x + 8$. The choice $2x^2 - x - 6$ subtracts $g$ from the product instead of dividing by it.)',
    },
    {
      q: 'Suppose $g(x) = x + 2$ and $\\frac{f}{g}(x) = x - 5$. What is $f(x)$, and which input must be kept out of the quotient’s domain?',
      choices: ['$f(x) = 2x - 3$, exclude $x = -2$', '$f(x) = x^2 - 10$, exclude $x = 5$', '$f(x) = x^2 + 7x + 10$, exclude $x = -2$', '$f(x) = x^2 - 3x - 10$, exclude $x = -2$'],
      answer: 3,
      solution:
        'A quotient is undone by multiplying: from $\\frac{f(x)}{g(x)} = x - 5$ we get $f(x) = (x - 5)(x + 2) = x^2 + 2x - 5x - 10 = x^2 - 3x - 10$. The excluded input comes from the DENOMINATOR: $g(x) = x + 2$ is zero at $x = -2$, so that input is thrown out no matter how tidy the quotient looks. Check by dividing back: at $x = 4$, $f(4) = 16 - 12 - 10 = -6$ and $g(4) = 6$, and $\\frac{-6}{6} = -1 = 4 - 5$ ✓. (The choice $x^2 + 7x + 10$ multiplies by $x + 5$ instead of $x - 5$. The choice $x^2 - 10$ multiplies only the first terms and the last terms, skipping the middle, and it bans $x = 5$ — a zero of the quotient rule, which is harmless. The choice $2x - 3$ adds the two rules instead of multiplying them.)',
    },
  ],
  // c6 — an invented operation whose two sides have different jobs. Each version
  // uses a symbol and a rule that appear nowhere else in the chapter. Two are
  // nested (so the grouping matters), and one runs backwards to a missing input.
  [
    {
      q: 'Define $a \\boxplus b = a + 2b - ab$. What is $(5 \\boxplus 2) \\boxplus 3$?',
      choices: ['$8$', '$-1$', '$2$', '$4$'],
      answer: 0,
      solution:
        'Work the parentheses first: $5 \\boxplus 2 = 5 + 2(2) - 5(2) = 5 + 4 - 10 = -1$. That result becomes the LEFT number of the next step: $-1 \\boxplus 3 = -1 + 2(3) - (-1)(3) = -1 + 6 + 3 = 8$, since subtracting $-3$ adds. Check the last step a second way with the factored form $a \\boxplus b = a + b(2 - a)$: with $a = -1$ and $b = 3$ that is $-1 + 3(3) = 8$ ✓. (The choice $-1$ groups the other way, $5 \\boxplus (2 \\boxplus 3)$: since $2 \\boxplus 3 = 2 + 6 - 6 = 2$, that route gives $5 \\boxplus 2 = -1$ — a reminder that this operation is not associative. The choice $2$ subtracts the $3$ instead of adding it, missing the double negative. The choice $4$ swaps the two sides in the second step, computing $3 \\boxplus (-1)$.)',
    },
    {
      q: 'Define $a \\odot b = b^2 - 2a$. What is $(3 \\odot 5) \\odot 4$?',
      choices: ['$30$', '$-22$', '$-7$', '$19$'],
      answer: 1,
      solution:
        'The RIGHT number is squared and the left one is doubled and subtracted. Inside first: $3 \\odot 5 = 5^2 - 2(3) = 25 - 6 = 19$. Then that $19$ takes the left-hand seat: $19 \\odot 4 = 4^2 - 2(19) = 16 - 38 = -22$. Check the final step by rewriting: $b^2 - 2a$ with $b = 4$ gives $16 - 2a$, and $16 - 38 = -22$ ✓. (The choice $30$ groups the other way: $5 \\odot 4 = 16 - 10 = 6$, then $3 \\odot 6 = 36 - 6 = 30$. The choice $-7$ reads the rule as $a^2 - 2b$, squaring the wrong side: that gives $9 - 10 = -1$ and then $1 - 8 = -7$. The choice $19$ stops after the parentheses and never runs the second step.)',
    },
    {
      q: 'Define $a \\nabla b = 2ab - b$. Which number $x$ satisfies $x \\nabla 4 = 20$?',
      choices: ['$2$', '$\\frac{5}{2}$', '$3$', '$\\frac{7}{2}$'],
      answer: 2,
      solution:
        'Substitute $a = x$ and $b = 4$ into the definition: $x \\nabla 4 = 2 \\cdot x \\cdot 4 - 4 = 8x - 4$. Set that equal to $20$: $8x - 4 = 20$, so $8x = 24$ and $x = 3$. Check forwards: $3 \\nabla 4 = 2(3)(4) - 4 = 24 - 4 = 20$ ✓. Check with the factored form $a \\nabla b = b(2a - 1)$: with $b = 4$ that is $4(2a-1) = 20$, so $2a - 1 = 5$ and $a = 3$ ✓. (The choice $2$ subtracts the $4$ from $20$ instead of adding it, solving $8x = 16$. The choice $\\frac{5}{2}$ drops the $-b$ entirely and solves $8x = 20$. The choice $\\frac{7}{2}$ reads the rule as $2(ab - b)$, solving $8x - 8 = 20$.)',
    },
  ],
  // c7 — the undo machine for a rule with a fraction in it. Every key is checked
  // in BOTH directions. One version asks for the whole formula, two for a single
  // value, and the traps are the reciprocal and the order in which steps unwind.
  [
    {
      q: 'If $f(x) = \\frac{2x - 5}{3}$, what is $f^{-1}(x)$?',
      choices: ['$\\frac{3x + 5}{2}$', '$\\frac{3x - 5}{2}$', '$\\frac{2x + 5}{3}$', '$\\frac{3}{2x - 5}$'],
      answer: 0,
      solution:
        'Write $y = \\frac{2x-5}{3}$ and swap the roles: $x = \\frac{2y-5}{3}$. Multiply by $3$: $3x = 2y - 5$. Add $5$: $3x + 5 = 2y$. Divide by $2$: $y = \\frac{3x+5}{2}$, so $f^{-1}(x) = \\frac{3x+5}{2}$. Check both directions, which is what makes an inverse an inverse. Forward then back: $f\\left(f^{-1}(x)\\right) = \\frac{2 \\cdot \\frac{3x+5}{2} - 5}{3} = \\frac{3x + 5 - 5}{3} = x$ ✓. Back then forward: $f^{-1}(f(x)) = \\frac{3 \\cdot \\frac{2x-5}{3} + 5}{2} = \\frac{2x - 5 + 5}{2} = x$ ✓. No input is ever divided by a variable, so both formulas accept every real number. (The choice $\\frac{3x-5}{2}$ subtracts the $5$ instead of adding it back. The choice $\\frac{2x+5}{3}$ fixes the sign but never swaps the $2$ and the $3$, so it undoes nothing. The choice $\\frac{3}{2x-5}$ treats $f^{-1}$ as a reciprocal — the $-1$ is notation, not an exponent.)',
    },
    {
      q: 'If $g(x) = \\frac{x}{4} - 3$, what is $g^{-1}(-1)$?',
      choices: ['$-16$', '$8$', '$-\\frac{13}{4}$', '$-7$'],
      answer: 1,
      solution:
        'Ask which input the machine sends to $-1$: solve $\\frac{x}{4} - 3 = -1$. Add $3$ to both sides: $\\frac{x}{4} = 2$. Multiply by $4$: $x = 8$. Check forwards: $g(8) = \\frac{8}{4} - 3 = 2 - 3 = -1$ ✓. Check the general undo machine in both directions: $g^{-1}(x) = 4(x + 3)$, so $g\\left(g^{-1}(x)\\right) = \\frac{4(x+3)}{4} - 3 = x$ ✓ and $g^{-1}(g(x)) = 4\\left(\\frac{x}{4} - 3 + 3\\right) = x$ ✓. (The choice $-16$ subtracts the $3$ instead of adding it, reaching $\\frac{x}{4} = -4$. The choice $-\\frac{13}{4}$ runs the machine forward on $-1$. The choice $-7$ undoes the steps in the order they were done, multiplying by $4$ first and then subtracting $3$.)',
    },
    {
      q: 'If $f(x) = \\frac{3x + 1}{2}$, what is $f^{-1}(8)$?',
      choices: ['$1$', '$\\frac{25}{2}$', '$\\frac{16}{3}$', '$5$'],
      answer: 3,
      solution:
        'Solve $\\frac{3x+1}{2} = 8$. Multiply both sides by $2$: $3x + 1 = 16$. Subtract $1$: $3x = 15$, so $x = 5$. Check forwards: $f(5) = \\frac{16}{2} = 8$ ✓. Check the undo machine both ways: $f^{-1}(x) = \\frac{2x - 1}{3}$, so $f\\left(f^{-1}(x)\\right) = \\frac{3 \\cdot \\frac{2x-1}{3} + 1}{2} = \\frac{2x - 1 + 1}{2} = x$ ✓ and $f^{-1}(f(x)) = \\frac{2 \\cdot \\frac{3x+1}{2} - 1}{3} = \\frac{3x + 1 - 1}{3} = x$ ✓; every real number is allowed in both. And $f^{-1}(8) = \\frac{16 - 1}{3} = 5$ ✓. (The choice $\\frac{25}{2}$ runs the machine forward on $8$. The choice $1$ divides the $8$ by $2$ instead of multiplying, solving $3x + 1 = 4$. The choice $\\frac{16}{3}$ forgets to subtract the $1$.)',
    },
  ],
  // c8 — a domain question with TWO dangers to police at once, or one danger
  // hidden behind a quadratic. Every version turns on whether the borderline
  // input is legal, which is where a square root and a denominator disagree.
  [
    {
      q: 'What is the domain of $f(x) = \\frac{\\sqrt{x + 4}}{x - 1}$?',
      choices: ['All $x \\ge -4$ except $x = 1$', 'All $x \\ge -4$', 'All $x > -4$ except $x = 1$', 'All real numbers except $x = 1$'],
      answer: 0,
      solution:
        'Two rules have to hold at the same time. The square root needs a nonnegative inside: $x + 4 \\ge 0$, so $x \\ge -4$, and the borderline $x = -4$ is fine because $\\sqrt{0} = 0$. The denominator must not be zero: $x - 1 \\ne 0$, so $x = 1$ is banned even though the square root is perfectly happy there. Putting both together: all $x \\ge -4$ except $x = 1$. Spot-check: $x = -4$ gives $\\frac{0}{-5} = 0$ ✓ legal; $x = -5$ gives $\\sqrt{-1}$ ✗; $x = 1$ gives $\\frac{\\sqrt 5}{0}$ ✗; $x = 5$ gives $\\frac{3}{4}$ ✓. (The choice "all $x \\ge -4$" polices the root and forgets the denominator. The choice with $x > -4$ throws away $x = -4$, where the root is legally zero. The choice "all real numbers except $x = 1$" polices the denominator and forgets the root.)',
    },
    {
      q: 'What is the domain of $g(x) = \\sqrt{x^2 - 9}$?',
      choices: ['All $x$ with $-3 \\le x \\le 3$', 'All $x \\ge 3$', 'All $x$ with $x \\le -3$ or $x \\ge 3$', 'All real numbers'],
      answer: 2,
      solution:
        'The inside must be nonnegative: $x^2 - 9 \\ge 0$, that is $x^2 \\ge 9$. Factor rather than guess: $(x-3)(x+3) \\ge 0$, a product that is positive OUTSIDE its roots and zero at them, so $x \\le -3$ or $x \\ge 3$. Both borderline inputs are allowed, since each makes the inside exactly $0$. Spot-check every region: $x = -4$ gives $\\sqrt{7}$ ✓; $x = -3$ gives $\\sqrt 0 = 0$ ✓; $x = 0$ gives $\\sqrt{-9}$ ✗; $x = 3$ gives $0$ ✓; $x = 5$ gives $\\sqrt{16} = 4$ ✓. (The choice $-3 \\le x \\le 3$ is exactly the set of inputs that BREAK the machine. The choice $x \\ge 3$ keeps only the right-hand branch and forgets that squaring a large negative also produces a big positive. The choice "all real numbers" assumes a square makes everything safe, but $x^2 - 9$ dips below zero near the origin.)',
    },
    {
      q: 'What is the domain of $h(x) = \\frac{6}{\\sqrt{4 - x}}$?',
      choices: ['$x \\le 4$', '$x > 4$', 'All $x$ except $x = 4$', '$x < 4$'],
      answer: 3,
      solution:
        'The square root sits in the denominator, so it must be more than just legal — it must be nonzero. Two conditions collapse into one: $4 - x \\ge 0$ keeps the root real, and $\\sqrt{4-x} \\ne 0$ rules out $4 - x = 0$. Together they force $4 - x > 0$, that is $x < 4$. Notice the direction: LARGE $x$ is what makes the inside negative here. Spot-check: $x = 3$ gives $\\frac{6}{1} = 6$ ✓; $x = 0$ gives $\\frac{6}{2} = 3$ ✓; $x = 4$ gives $\\frac{6}{0}$ ✗; $x = 5$ gives $\\sqrt{-1}$ ✗. (The choice $x \\le 4$ admits $x = 4$, where the root is $0$ and the fraction has no value. The choice $x > 4$ has the inequality backwards and keeps only inputs that make the inside negative. The choice "all $x$ except $x = 4$" bans the zero of the denominator but lets in every $x$ above $4$ as well.)',
    },
  ],
  // c9 — composition read off tables rather than formulas. One version chains
  // three lookups, one mixes a table with a formula, and one runs the whole
  // composition BACKWARDS from a required output to the input that produced it.
  [
    {
      q: 'Two functions are given by tables: $f(1) = 3$, $f(2) = 5$, $f(3) = 2$, $f(4) = 1$, and $g(1) = 4$, $g(2) = 1$, $g(3) = 3$, $g(4) = 2$. What is $g(f(3))$?',
      choices: ['$2$', '$1$', '$3$', '$5$'],
      answer: 1,
      solution:
        'The inner machine is $f$, so look it up first: $f(3) = 2$. Now feed that output into $g$: $g(2) = 1$. Check the other order, which uses the very same tables: $g(3) = 3$, then $f(3) = 2$, so $f(g(3)) = 2 \\ne 1$ ✓ — the two orders really do disagree. (The choice $2$ is that other order, $f(g(3))$. The choice $3$ looks up only the inner machine and reports $g(3)$ without ever finishing. The choice $5$ runs $f$ twice, computing $f(f(3)) = f(2) = 5$ instead of switching to $g$ for the second step.)',
    },
    {
      q: 'A table gives $f(1) = 6$, $f(2) = 4$, $f(3) = 5$, $f(4) = 3$, and a formula gives $g(x) = 5 - x$. What is $f\\left(g(f(4))\\right)$?',
      choices: ['$0$', '$2$', '$4$', '$6$'],
      answer: 2,
      solution:
        'Peel the layers from the inside out, three lookups in a row. Innermost: $f(4) = 3$ from the table. Middle: $g(3) = 5 - 3 = 2$ from the formula. Outermost: $f(2) = 4$ from the table again. Check by rebuilding the chain forwards: $4 \\to 3 \\to 2 \\to 4$ ✓, and every intermediate value ($3$ and $2$) is an input the table lists, so no step falls off the edge. (The choice $0$ applies the machines as $g(f(f(4)))$, computing $f(3) = 5$ and then $g(5) = 0$. The choice $2$ stops one step early, reporting $g(f(4))$. The choice $6$ skips the innermost machine and computes $f(g(4)) = f(1) = 6$.)',
    },
    {
      q: 'Two functions are given by tables: $f(1) = 2$, $f(2) = 3$, $f(3) = 4$, $f(4) = 1$, and $g(1) = 4$, $g(2) = 2$, $g(3) = 1$, $g(4) = 3$. For which input $x$ is $f(g(x)) = 1$?',
      choices: ['$x = 2$', '$x = 3$', '$x = 4$', '$x = 1$'],
      answer: 3,
      solution:
        'Run the composition on all four inputs, inner machine first. $x = 1$: $g(1) = 4$ and $f(4) = 1$ ✓. $x = 2$: $g(2) = 2$ and $f(2) = 3$. $x = 3$: $g(3) = 1$ and $f(1) = 2$. $x = 4$: $g(4) = 3$ and $f(3) = 4$. Only $x = 1$ works. Check backwards instead: $f$ outputs $1$ only at the input $4$, so we need $g(x) = 4$, and the $g$ table gives that at $x = 1$ ✓ — the same answer by the other route. (The choice $x = 2$ solves the reversed composition $g(f(x)) = 1$. The choice $x = 4$ solves $f(x) = 1$ and ignores $g$ altogether. The choice $x = 3$ solves only the inner equation $g(x) = 1$.)',
    },
  ],
  // c10 — one half of a composition is missing. Version 1 hunts the inner
  // machine, version 2 the OUTER one (which needs a substitution, not a
  // division), and version 3 hides the missing machine under a square.
  [
    {
      q: 'If $f(x) = 3x - 2$ and $f(g(x)) = 6x + 7$, what is $g(x)$?',
      choices: ['$g(x) = 2x + 3$', '$g(x) = 6x + 9$', '$g(x) = 2x + \\frac{7}{3}$', '$g(x) = 2x + 9$'],
      answer: 0,
      solution:
        'The outer machine triples its input and subtracts $2$, and its input here is the whole of $g(x)$: $3 \\cdot g(x) - 2 = 6x + 7$. Add $2$ to both sides: $3 \\cdot g(x) = 6x + 9$. Divide every term by $3$: $g(x) = 2x + 3$. Check by composing: $f(2x + 3) = 3(2x+3) - 2 = 6x + 9 - 2 = 6x + 7$ ✓. Check one number: $g(1) = 5$ and $f(5) = 13 = 6(1) + 7$ ✓. (The choice $6x + 9$ stops before dividing by $3$. The choice $2x + \\frac{7}{3}$ divides by $3$ without first adding the $2$ back. The choice $2x + 9$ divides only the $x$-term and leaves the constant alone.)',
    },
    {
      q: 'If $g(x) = x - 4$ and $f(g(x)) = 5x - 12$, what is $f(x)$?',
      choices: ['$f(x) = 5x - 32$', '$f(x) = 5x + 8$', '$f(x) = 5x - 12$', '$f(x) = 5x - 8$'],
      answer: 1,
      solution:
        'This time the MISSING machine is the outer one, so give the inner output a name: let $u = x - 4$, which means $x = u + 4$. The relation $f(x - 4) = 5x - 12$ becomes $f(u) = 5(u + 4) - 12 = 5u + 20 - 12 = 5u + 8$. Renaming the placeholder, $f(x) = 5x + 8$. Check by composing: $f(x - 4) = 5(x-4) + 8 = 5x - 20 + 8 = 5x - 12$ ✓. Check one number: $g(6) = 2$ and $f(2) = 18 = 5(6) - 12$ ✓. (The choice $5x - 32$ substitutes $x = u - 4$, moving the shift the wrong way. The choice $5x - 12$ mistakes the composed rule for the outer machine itself. The choice $5x - 8$ loses a sign while collecting $20 - 12$.)',
    },
    {
      q: 'If $f(x) = x^2 + 1$ and $f(g(x)) = 9x^2 - 6x + 2$, which of these could $g(x)$ be?',
      choices: ['$g(x) = 9x^2 - 6x + 1$', '$g(x) = 3x + 1$', '$g(x) = 3x - 1$', '$g(x) = 9x^2 - 6x + 3$'],
      answer: 2,
      solution:
        'The outer machine squares its input and adds $1$, so $\\left(g(x)\\right)^2 + 1 = 9x^2 - 6x + 2$. Subtract $1$: $\\left(g(x)\\right)^2 = 9x^2 - 6x + 1$. That right side is a perfect square, since $9x^2 = (3x)^2$, $1 = (-1)^2$ and the middle term $-6x$ is $2(3x)(-1)$: it equals $(3x-1)^2$. So $g(x) = 3x - 1$ fits. Check by composing: $f(3x-1) = (3x-1)^2 + 1 = 9x^2 - 6x + 1 + 1 = 9x^2 - 6x + 2$ ✓. Check one number: $g(2) = 5$ and $f(5) = 26 = 36 - 12 + 2$ ✓. (The other square root, $1 - 3x$, works too — squaring erases the sign — but it is not among the choices. The choice $9x^2 - 6x + 1$ stops before undoing the square. The choice $3x + 1$ squares to $9x^2 + 6x + 1$, whose middle term has the wrong sign. The choice $9x^2 - 6x + 3$ adds the $1$ instead of subtracting it.)',
    },
  ],
  // c11 — decomposing a built-up rule into an inner and an outer machine. The
  // headline distractor in every version is the SAME two machines in the wrong
  // order, and each solution composes the offered pair to show what it produces.
  [
    {
      q: 'Which pair writes $h(x) = \\frac{1}{2x - 5}$ as $h(x) = f(g(x))$?',
      choices: [
        '$f(x) = \\frac{1}{x}$ and $g(x) = 2x - 5$',
        '$f(x) = 2x - 5$ and $g(x) = \\frac{1}{x}$',
        '$f(x) = \\frac{1}{2x}$ and $g(x) = x - 5$',
        '$f(x) = \\frac{1}{x} - 5$ and $g(x) = 2x$',
      ],
      answer: 0,
      solution:
        'Ask what happens to $x$ first. It is doubled and then $5$ is taken away — that whole expression is the inner machine, $g(x) = 2x - 5$. Only afterwards is the result flipped upside down, so the outer machine is $f(x) = \\frac{1}{x}$. Check: $f(g(x)) = \\frac{1}{2x-5} = h(x)$ ✓, and at $x = 4$ both sides give $\\frac{1}{3}$ ✓. (The swapped pair $f(x) = 2x - 5$, $g(x) = \\frac{1}{x}$ builds $\\frac{2}{x} - 5$ instead — the reciprocal taken first. The pair $\\frac{1}{2x}$ with $x - 5$ gives $\\frac{1}{2(x-5)} = \\frac{1}{2x - 10}$, doubling after the subtraction. The pair $\\frac{1}{x} - 5$ with $2x$ gives $\\frac{1}{2x} - 5$, which subtracts outside the fraction.)',
    },
    {
      q: 'Which pair writes $h(x) = (4x - 3)^2 + 1$ as $h(x) = f(g(x))$?',
      choices: [
        '$f(x) = 4x - 3$ and $g(x) = x^2 + 1$',
        '$f(x) = x^2$ and $g(x) = 4x - 2$',
        '$f(x) = x^2 + 1$ and $g(x) = 4x - 3$',
        '$f(x) = 4x^2 - 3$ and $g(x) = x + 1$',
      ],
      answer: 2,
      solution:
        'Peel the rule from the outside in. The last thing done to $x$ is "square it, then add $1$" — that is the outer machine $f(x) = x^2 + 1$. Everything sitting inside the square is the inner machine: $g(x) = 4x - 3$. Check: $f(g(x)) = (4x-3)^2 + 1 = h(x)$ ✓, and at $x = 2$ both give $25 + 1 = 26$ ✓. (The swapped pair $f(x) = 4x - 3$, $g(x) = x^2 + 1$ builds $4\\left(x^2+1\\right) - 3 = 4x^2 + 1$. The pair $x^2$ with $4x - 2$ gives $(4x-2)^2$, which loses the $+1$ and mis-copies the $3$. The pair $4x^2 - 3$ with $x + 1$ gives $4(x+1)^2 - 3$, which squares before multiplying by $4$.)',
    },
    {
      q: 'A rule $h(x) = 3(x - 1)^2 - 4$ is built by running one machine and then another. Which pair does it, inner machine first?',
      choices: [
        'inner $g(x) = 3x^2 - 4$, outer $f(x) = x - 1$',
        'inner $g(x) = x^2 - 1$, outer $f(x) = 3x - 4$',
        'inner $g(x) = 3(x - 1)$, outer $f(x) = x^2 - 4$',
        'inner $g(x) = x - 1$, outer $f(x) = 3x^2 - 4$',
      ],
      answer: 3,
      solution:
        'Track a single number through the rule, say $x = 5$. First $1$ is subtracted, giving $4$; then that $4$ is squared, tripled and reduced by $4$, giving $3(16) - 4 = 44$. So the inner machine is $g(x) = x - 1$ and the outer machine does the rest: $f(x) = 3x^2 - 4$. Check with algebra: $f(g(x)) = 3(x-1)^2 - 4 = h(x)$ ✓, and $h(5) = 3(16) - 4 = 44$ ✓ matches the walk-through. (The swapped pair — inner $3x^2 - 4$, outer $x - 1$ — builds $3x^2 - 5$. The pair inner $x^2 - 1$, outer $3x - 4$ builds $3x^2 - 7$, squaring before the subtraction. The pair inner $3(x-1)$, outer $x^2 - 4$ builds $9(x-1)^2 - 4$, because tripling before the square triples twice.)',
    },
  ],
  // c12 — a linear function that is its own inverse. The engine of every version
  // is that $f(a) = b$ forces $f(b) = a$, which pins the slope at $-1$. One
  // version asks for the slope itself, from the algebra of $f(f(x)) = x$.
  [
    {
      q: 'A linear function $f$ is its own inverse, and $f(1) = 6$. What is $f(4)$?',
      choices: ['$3$', '$9$', '$4$', '$7$'],
      answer: 0,
      solution:
        'Being its own inverse means $f$ undoes itself, so $f(1) = 6$ forces $f(6) = 1$. A line through $(1, 6)$ and $(6, 1)$ has slope $\\frac{1 - 6}{6 - 1} = -1$, so $f(x) = -x + b$; from $f(1) = 6$ we get $b = 7$ and $f(x) = -x + 7$. Then $f(4) = -4 + 7 = 3$. Check that the rule really undoes itself: $f(f(x)) = -(-x + 7) + 7 = x$ ✓ for every $x$, and $f(3) = 4$ ✓, so $4$ and $3$ swap places just as $1$ and $6$ do. (The choice $9$ takes the slope to be $+1$, using $f(x) = x + 5$; that machine shifts by $5$ every time and applying it twice shifts by $10$. The choice $4$ assumes an own-inverse function must be $f(x) = x$, which would contradict $f(1) = 6$. The choice $7$ reports the constant $b$ instead of the output at $4$.)',
    },
    {
      q: 'A linear function $g$ satisfies $g(g(x)) = x$ for every $x$, and $g(-2) = 5$. What is $g(8)$?',
      choices: ['$15$', '$-5$', '$8$', '$3$'],
      answer: 1,
      solution:
        'The condition $g(g(x)) = x$ says $g$ is its own undo machine, so $g(-2) = 5$ forces $g(5) = -2$. The line through $(-2, 5)$ and $(5, -2)$ has slope $\\frac{-2 - 5}{5 - (-2)} = \\frac{-7}{7} = -1$, so $g(x) = -x + b$; from $g(-2) = 5$ we get $2 + b = 5$ and $b = 3$, giving $g(x) = -x + 3$. Then $g(8) = -8 + 3 = -5$. Check the defining property: $g(g(x)) = -(-x + 3) + 3 = x$ ✓, and check the pair: $g(-5) = 5 + 3 = 8$ ✓, so $8$ and $-5$ swap. (The choice $15$ uses slope $+1$, giving $g(x) = x + 7$, which never returns a number to its starting place. The choice $8$ assumes $g$ must be the identity. The choice $3$ reports the constant $b$.)',
    },
    {
      q: 'The linear function $f(x) = mx + 8$ is its own inverse. What is $m$?',
      choices: ['$m = 1$', '$m = -8$', '$m = -\\frac{1}{8}$', '$m = -1$'],
      answer: 3,
      solution:
        'Compose the machine with itself and demand that the result be the input: $f(f(x)) = m(mx + 8) + 8 = m^2 x + 8m + 8$, and this must equal $x$ for every $x$. Matching the $x$-terms gives $m^2 = 1$, so $m = 1$ or $m = -1$; matching the constants gives $8m + 8 = 0$, so $m = -1$. Only $m = -1$ satisfies both, and it does: $f(x) = -x + 8$ gives $f(f(x)) = -(-x + 8) + 8 = x$ ✓. Check with numbers: $f(3) = 5$ and $f(5) = 3$ ✓, a genuine swap. (The choice $m = 1$ solves $m^2 = 1$ and ignores the constant equation; that machine is $f(x) = x + 8$, which shifts by $16$ when applied twice. The choice $m = -8$ copies the sign onto the wrong number, confusing the slope with the constant. The choice $m = -\\frac{1}{8}$ treats the inverse as a reciprocal of the constant term.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 16,
  challenge,
}
