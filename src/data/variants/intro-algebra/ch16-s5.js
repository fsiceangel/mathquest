// Introduction to Algebra chapter 16 — variations for the chapter worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE: each variation carries a question, an
//    `answer` STRING, and a solution. Nothing is offered to pick from, so all of
//    the teaching lives in the solution. There are no `choices` keys here, and
//    no `answer` is a bare number.
//  - Every key was worked out by hand and then confirmed a SECOND, independent
//    way. A composition is confirmed by running the OTHER order and showing the
//    two results differ. An inverse is confirmed in both directions — the
//    solution runs $f(f^{-1}(x))$ and $f^{-1}(f(x))$ and lands on $x$ each time,
//    and it says which inputs are allowed. A step rule is confirmed by climbing
//    one step at a time as well as by the one-jump shortcut.
//  - A variation changes the numbers AND, where it makes sense, the direction:
//    ask for the undo machine as a rule instead of a value, hand over the output
//    and ask which input produced it, walk a step rule backwards, ask for the
//    inner machine instead of the outer one.
//  - Four traps run through the file. THE OUTSIDE-IN SLIP: doing the outer
//    machine first, which answers a different question — $f(g(x))$ is not
//    $g(f(x))$, and every composition here is checked both ways to prove it.
//    THE STOLEN SIGN: a negative input squares to a positive, and subtracting a
//    negative adds. THE RECIPROCAL MIX-UP: reading $f^{-1}$ as $\frac{1}{f}$,
//    when the $-1$ is only notation for the undo machine. THE FENCE POST: the
//    number of STEPS between two inputs is the gap, not the count of inputs.
//  - Both sides of an invented operation are computed whenever the question is
//    about order, so the verdict rests on two finished numbers, never on one.

const worksheet = [
  // w1 — evaluate a linear machine. The last variation feeds in a negative and
  //      has the input subtracted rather than added.
  [
    {
      q: 'If $h(x) = 6x - 11$, find $h(4)$.',
      answer: '$13$',
      solution:
        'The rule says "multiply the input by $6$, then subtract $11$." Put $4$ everywhere $x$ stood: $h(4) = 6(4) - 11 = 24 - 11 = 13$. Check the two steps in the other order to be sure the multiplication really came first: $6 \\times 4 = 24$, and $24$ is $11$ above $13$ ✓. The trap is subtracting inside the multiplication and computing $6(4 - 11) = 6(-7) = -42$. There are no parentheses around $x - 11$ in the rule, so the $6$ multiplies the input alone ✗.',
    },
    {
      q: 'A ticket booth charges by the rule $p(n) = 7n + 5$, where $n$ is the number of tickets. Find $p(9)$.',
      answer: '$68$',
      solution:
        'A function does not care whether its letter is $x$ or $n$ — the rule is "seven times the input, plus five." Substitute $9$: $p(9) = 7(9) + 5 = 63 + 5 = 68$. Check a second way by climbing: each extra ticket adds $7$, and $p(1) = 12$, so eight more tickets add $8 \\times 7 = 56$, giving $12 + 56 = 68$ ✓. The trap is adding before multiplying and writing $7(9 + 5) = 98$. Multiplication comes first here; the $+5$ is a fixed charge added at the very end ✗.',
    },
    {
      q: 'The machine $m(x) = 9 - 2x$ takes a number in and sends a number out. What comes out when $-3$ goes in?',
      answer: '$15$',
      solution:
        'Feed $-3$ into the rule, keeping the sign with the number: $m(-3) = 9 - 2(-3) = 9 - (-6) = 9 + 6 = 15$. Check by going forwards from a friendly input: $m(0) = 9$, and every time the input drops by $1$ the output rises by $2$, so dropping from $0$ to $-3$ raises the output by $6$, landing on $15$ ✓. THE STOLEN SIGN is the trap: computing $9 - 6 = 3$ as though the input were $+3$. Subtracting twice a NEGATIVE number adds, so the output climbs above $9$ rather than falling below it ✗.',
    },
  ],
  // w2 — evaluate a squaring machine at a negative input. The middle variation
  //      doubles the square, the last carries a second term that stays negative.
  [
    {
      q: 'If $g(x) = x^2 - 6$, find $g(-4)$.',
      answer: '$10$',
      solution:
        'Square first, then subtract: $g(-4) = (-4)^2 - 6 = 16 - 6 = 10$. The square of $-4$ is $+16$, because a negative times a negative is positive. Check against the twin input: $g(4) = 16 - 6 = 10$ as well ✓ — a squaring machine sends $x$ and $-x$ to the same place, which is exactly why the sign of the input vanishes here. THE STOLEN SIGN is the trap: writing $-16 - 6 = -22$, which squares the $4$ and then hangs the minus on the outside. The minus sign is part of the number being squared ✗.',
    },
    {
      q: 'If $p(x) = 2x^2 + 1$, find $p(-3)$.',
      answer: '$19$',
      solution:
        'Three steps, in order: square the input, double the result, then add $1$. So $p(-3) = 2(-3)^2 + 1 = 2(9) + 1 = 18 + 1 = 19$. Check with the twin input: $p(3) = 2(9) + 1 = 19$ ✓, the same output, as a square demands. The trap is doubling before squaring and computing $(2 \\cdot -3)^2 + 1 = 36 + 1 = 37$. The $2$ sits outside the square, so it goes second ✗.',
    },
    {
      q: 'If $q(x) = x^2 + 4x$, what is $q(-5)$?',
      answer: '$5$',
      solution:
        'Both terms hold the input, so substitute into both: $q(-5) = (-5)^2 + 4(-5) = 25 - 20 = 5$. The squared term turns positive; the linear term stays negative. Check by factoring the rule, which never touches the arithmetic above: $q(x) = x(x + 4)$, so $q(-5) = (-5)(-1) = 5$ ✓. The trap is letting the minus sign leak into the first term and writing $-25 - 20 = -45$. Only the term with a single $x$ keeps the sign of the input ✗.',
    },
  ],
  // w3 — combine two machines. The middle variation subtracts (order matters),
  //      the last asks for a formula instead of a value.
  [
    {
      q: 'If $f(x) = 5x - 2$ and $g(x) = x + 6$, find $(f + g)(3)$.',
      answer: '$22$',
      solution:
        'Run both machines on the same input and add the outputs: $f(3) = 15 - 2 = 13$ and $g(3) = 9$, so $(f+g)(3) = 13 + 9 = 22$. Check the other road, which combines first: $(f+g)(x) = (5x - 2) + (x + 6) = 6x + 4$, and $6(3) + 4 = 22$ ✓ — the two roads agree, as they always must. The trap is feeding the output of one machine into the other, computing $g(f(3)) = g(13) = 19$. A sum runs the machines side by side on the SAME input; it never chains them ✗.',
    },
    {
      q: 'If $f(x) = x^2 + 1$ and $g(x) = 4x$, find $(f - g)(5)$.',
      answer: '$6$',
      solution:
        'Evaluate each machine at $5$: $f(5) = 25 + 1 = 26$ and $g(5) = 20$. Subtract in the order written — $f$ minus $g$: $26 - 20 = 6$. Check by combining first: $(f-g)(x) = x^2 + 1 - 4x$, and at $x = 5$ that is $25 + 1 - 20 = 6$ ✓. The trap is reversing the subtraction and answering $20 - 26 = -6$. The letters are not interchangeable: $(f-g)$ takes $f$ first, and swapping them flips the sign of every answer ✗.',
    },
    {
      q: 'If $f(x) = 2x + 7$ and $g(x) = 3x - 4$, find a formula for $(f + g)(x)$.',
      answer: '$(f+g)(x) = 5x + 3$',
      solution:
        'Add the two rules and collect like terms: $(2x + 7) + (3x - 4) = 5x + 3$, since $2x + 3x = 5x$ and $7 - 4 = 3$. Check the finished formula against a test input, worked both ways: $f(2) = 11$ and $g(2) = 2$, so the outputs add to $13$, and the formula gives $5(2) + 3 = 13$ ✓. A second input for safety: $f(0) = 7$, $g(0) = -4$, sum $3$; the formula gives $3$ ✓. The trap is adding the $x$-terms to the constants and writing $8x$ or $12$. Only like terms combine — the $x$-terms with each other, the plain numbers with each other ✗.',
    },
  ],
  // w4 — the same two machines in both orders. The middle variation squares on
  //      one side, the last asks for formulas rather than values.
  [
    {
      q: 'Let $f(x) = 3x$ and $g(x) = x + 4$. Work out $f(g(2))$ and $g(f(2))$.',
      answer: '$f(g(2)) = 18$ and $g(f(2)) = 10$',
      solution:
        'Read each expression from the inside out. For $f(g(2))$ the inner machine is $g$, so $g$ runs FIRST: $g(2) = 6$, and then $f(6) = 18$. For $g(f(2))$ the inner machine is $f$, so $f$ runs first: $f(2) = 6$, and then $g(6) = 10$. The two results differ, which settles that the order changes the answer here. Check with formulas, which never mention the number $2$: $f(g(x)) = 3(x + 4) = 3x + 12$, giving $3(2) + 12 = 18$ ✓, while $g(f(x)) = 3x + 4$, giving $6 + 4 = 10$ ✓ — two different rules. THE OUTSIDE-IN SLIP is the trap: tripling first in $f(g(2))$ because $f$ is written first. The machine closest to the number goes first ✗.',
    },
    {
      q: 'Let $p(x) = x - 5$ and $q(x) = x^2$. Find $p(q(4))$ and $q(p(4))$.',
      answer: '$p(q(4)) = 11$ and $q(p(4)) = 1$',
      solution:
        'For $p(q(4))$ the inner machine is $q$: square first, $q(4) = 16$, then subtract five, $p(16) = 11$. For $q(p(4))$ the inner machine is $p$: subtract first, $p(4) = -1$, then square, $q(-1) = 1$. The answers $11$ and $1$ are far apart, so the order plainly matters. Check with formulas: $p(q(x)) = x^2 - 5$ gives $16 - 5 = 11$ ✓, and $q(p(x)) = (x - 5)^2$ gives $(-1)^2 = 1$ ✓. Two traps. Squaring $-1$ to $-1$ loses the rule that a negative times a negative is positive ✗. And answering $1$ for the first expression means the machines ran in the wrong order — that value belongs to the other question ✗.',
    },
    {
      q: 'Let $f(x) = 4x + 1$ and $g(x) = x - 3$. Find formulas for $f(g(x))$ and $g(f(x))$.',
      answer: '$f(g(x)) = 4x - 11$ and $g(f(x)) = 4x - 2$',
      solution:
        'For $f(g(x))$, $g$ runs first, so its whole rule goes into the $x$-slot of $f$: $f(x - 3) = 4(x - 3) + 1 = 4x - 12 + 1 = 4x - 11$. For $g(f(x))$, $f$ runs first, so its rule goes into $g$: $g(4x + 1) = (4x + 1) - 3 = 4x - 2$. Same slope, different constants — the two compositions are different functions. Check both at a test input: $g(5) = 2$ then $f(2) = 9$, and the first formula gives $20 - 11 = 9$ ✓; $f(5) = 21$ then $g(21) = 18$, and the second gives $20 - 2 = 18$ ✓. The trap is dropping the parentheses and writing $4x - 3 + 1 = 4x - 2$ for the first one, which multiplies only the $x$ by $4$ and leaves the $-3$ untouched. The $4$ must reach both terms of $g$ ✗.',
    },
  ],
  // w5 — the undo machine. The middle variation describes the machine in words,
  //      the last asks for one value of the inverse instead of the whole rule.
  [
    {
      q: 'Find the inverse of $f(x) = 5x - 4$.',
      answer: '$f^{-1}(x) = \\frac{x + 4}{5}$',
      solution:
        'Undo the steps in reverse order. The machine multiplies by $5$ and then subtracts $4$, so the undo machine adds $4$ back first and then divides by $5$: $f^{-1}(x) = \\frac{x + 4}{5}$. The swap-and-solve method agrees: from $x = 5y - 4$, add $4$ to get $x + 4 = 5y$, then divide by $5$. Verify in BOTH directions, which is what makes it an inverse. Forward then back: $f^{-1}(f(x)) = \\frac{(5x - 4) + 4}{5} = \\frac{5x}{5} = x$ ✓. Back then forward: $f(f^{-1}(x)) = 5 \\cdot \\frac{x + 4}{5} - 4 = (x + 4) - 4 = x$ ✓. Nothing is ever divided by a variable and no root is taken, so every real number is a legal input for both machines — there is no domain restriction to record. THE RECIPROCAL MIX-UP is the trap: answering $\\frac{1}{5x - 4}$. Test it at $x = 1$: $f(1) = 1$, and the undo machine should return $1$, but $\\frac{1}{1} = 1$ agrees only by accident — at $x = 2$, $f(2) = 6$ while $\\frac{1}{6}$ is nowhere near $2$ ✗.',
    },
    {
      q: 'A machine $g$ halves its input and then adds $6$. Write a rule for the machine that undoes $g$.',
      answer: '$g^{-1}(x) = 2x - 12$',
      solution:
        'First write $g$ in symbols: halving then adding six is $g(x) = \\frac{x}{2} + 6$. The undo machine reverses the steps in the opposite order: subtract $6$ first, then double. That gives $g^{-1}(x) = 2(x - 6) = 2x - 12$. Verify both ways. Forward then back: $g^{-1}(g(x)) = 2\\left(\\frac{x}{2} + 6\\right) - 12 = x + 12 - 12 = x$ ✓. Back then forward: $g(g^{-1}(x)) = \\frac{2x - 12}{2} + 6 = (x - 6) + 6 = x$ ✓. Both rules accept every real number — halving and doubling are safe everywhere — so no inputs need to be banned. A number check for good measure: $g(10) = 11$ and $g^{-1}(11) = 22 - 12 = 10$ ✓. The trap is undoing in the same order the machine worked, halving and then adding: that gives $\\frac{x}{2} + 6$ again, the original machine, which sends $10$ to $11$ instead of bringing it home ✗.',
    },
    {
      q: 'If $f(x) = 4x + 9$, find $f^{-1}(1)$.',
      answer: '$-2$',
      solution:
        'The question asks which input produced the output $1$, so solve $4x + 9 = 1$: subtract $9$ to get $4x = -8$, then divide by $4$ for $x = -2$. Check forwards: $f(-2) = -8 + 9 = 1$ ✓. Check with the full undo rule as well: reversing the steps gives $f^{-1}(x) = \\frac{x - 9}{4}$, and $\\frac{1 - 9}{4} = \\frac{-8}{4} = -2$ ✓. That rule passes both tests: $f^{-1}(f(x)) = \\frac{(4x + 9) - 9}{4} = x$ ✓ and $f(f^{-1}(x)) = 4 \\cdot \\frac{x - 9}{4} + 9 = x$ ✓, and since neither machine divides by a variable, both work for every real number, with no excluded inputs. The trap is running the machine forwards and answering $f(1) = 13$. The little $-1$ points the arrow backwards: it asks for the input, not the output ✗.',
    },
  ],
  // w6 — an invented operation. The last variation runs backwards from a given
  //      result to the missing number.
  [
    {
      q: 'Define $a \\odot b = 2a^2 - b$. Find $5 \\odot 8$.',
      answer: '$42$',
      solution:
        'The left number is squared and then doubled; the right number is simply taken away at the end. Substituting $a = 5$ and $b = 8$: $2(5^2) - 8 = 2(25) - 8 = 50 - 8 = 42$. Check the two positions really do different jobs by computing the other order: $8 \\odot 5 = 2(64) - 5 = 128 - 5 = 123$, nothing like $42$ ✓ — so the numbers must be kept where they were written. The trap is sweeping the subtraction inside the doubling and computing $2(25 - 8) = 2(17) = 34$. The $2$ multiplies the square alone, and the right number stands outside it ✗.',
    },
    {
      q: 'Define $a \\otimes b = 2ab + a$. Find $3 \\otimes 5$.',
      answer: '$33$',
      solution:
        'Substitute $a = 3$ and $b = 5$ into the rule: $2(3)(5) + 3 = 30 + 3 = 33$. The extra $+a$ at the end picks up the LEFT number only. Check the other order, which shows the two slots are not interchangeable: $5 \\otimes 3 = 2(5)(3) + 5 = 30 + 5 = 35$ ✓ — the products match but the tails do not. The trap is adding the right number at the end and getting $30 + 5 = 35$ for the printed question. Read the definition letter by letter: the lone term is $a$ ✗.',
    },
    {
      q: 'Define $a \\nabla b = 4a - b$. If $7 \\nabla x = 19$, find $x$.',
      answer: '$9$',
      solution:
        'Write out what the operation says with $7$ on the left: $7 \\nabla x = 4(7) - x = 28 - x$. Set that equal to the given result: $28 - x = 19$, so $x = 28 - 19 = 9$. Check by computing the operation with the answer in place: $7 \\nabla 9 = 28 - 9 = 19$ ✓. The trap is quadrupling the wrong number, treating the unknown as the left entry: that would read $4x - 7 = 19$ and give $x = \\frac{26}{4}$, which fails the check, since $7 \\nabla 6.5 = 28 - 6.5 = 21.5$ ✗. The $4$ belongs to whatever stands on the left of the symbol, and that is the $7$.',
    },
  ],
  // w7 — a step rule. The middle variation climbs backwards, the last steps down.
  [
    {
      q: 'A function satisfies $f(x + 1) = f(x) + 7$ and $f(1) = 3$. Find $f(15)$.',
      answer: '$101$',
      solution:
        'Each time the input grows by $1$, the output grows by $7$. Going from input $1$ to input $15$ takes $15 - 1 = 14$ steps, so the output gains $14 \\times 7 = 98$: $f(15) = 3 + 98 = 101$. Check the first few steps by hand against a formula: $f(2) = 10$, $f(3) = 17$, $f(4) = 24$, and the pattern $f(x) = 7x - 4$ matches all of them ✓; that formula gives $f(15) = 105 - 4 = 101$ ✓. THE FENCE POST is the trap: counting $15$ steps and answering $3 + 105 = 108$. Count the GAPS between the two inputs, not the inputs themselves — from $1$ to $15$ there are $14$ gaps ✗.',
    },
    {
      q: 'A function satisfies $g(n + 1) = g(n) + 6$ and $g(10) = 50$. Find $g(2)$.',
      answer: '$2$',
      solution:
        'This time the known value sits above the one we want, so the climb runs downhill: each step DOWN in the input takes $6$ off the output. From input $10$ to input $2$ is $8$ steps, so the output drops by $8 \\times 6 = 48$: $g(2) = 50 - 48 = 2$. Check by climbing back up from the answer: $g(3) = 8$, $g(4) = 14$, $g(5) = 20$, $g(6) = 26$, $g(7) = 32$, $g(8) = 38$, $g(9) = 44$, $g(10) = 50$ ✓ — it lands exactly on the value we were given. The trap is adding instead of subtracting and answering $98$. The rule builds larger outputs as the input grows, so going backwards must make the output smaller ✗.',
    },
    {
      q: 'A function satisfies $h(x + 1) = h(x) - 4$ and $h(1) = 100$. Find $h(12)$.',
      answer: '$56$',
      solution:
        'The step is negative here: every increase of $1$ in the input costs the output $4$. From input $1$ to input $12$ is $11$ steps, so the output falls by $11 \\times 4 = 44$: $h(12) = 100 - 44 = 56$. Check with a formula built from the pattern: $h(2) = 96$ and $h(3) = 92$, which fits $h(x) = 104 - 4x$; that rule gives $h(1) = 100$ ✓ and $h(12) = 104 - 48 = 56$ ✓. The trap is treating the step as an addition out of habit and answering $144$. The rule subtracts, so a bigger input means a smaller output ✗.',
    },
  ],
  // w8 — recover a machine from a composition. The middle variation asks for the
  //      INNER machine, the last has an inner rule that shifts instead of scales.
  [
    {
      q: 'Suppose $g(x) = 5x$ and $f$ is a linear function with $f(g(x)) = 15x + 4$. Find $f(x)$.',
      answer: '$f(x) = 3x + 4$',
      solution:
        'The inner machine is $g$, so $g$ runs first and $f$ is handed the number $5x$. We need the rule that turns $5x$ into $15x + 4$: tripling gives $15x$, and then $4$ is added, so $f(x) = 3x + 4$. Check the composition in the order the question used: $f(g(x)) = f(5x) = 3(5x) + 4 = 15x + 4$ ✓. Check the reverse order too, to see the order was not a detail we could ignore: $g(f(x)) = 5(3x + 4) = 15x + 20$, which is a different function ✗ for this problem — the question named $f(g(x))$, with $g$ inside. The trap is taking the slope straight from the target and writing $f(x) = 15x + 4$: that would give $f(5x) = 75x + 4$, five times too steep ✗. Divide the outer slope by the inner one.',
    },
    {
      q: 'Suppose $f(x) = 4x - 3$ and $f(g(x)) = 8x + 5$. Find $g(x)$.',
      answer: '$g(x) = 2x + 2$',
      solution:
        'Now the missing machine is the INNER one. Since $g$ runs first, $f$ receives $g(x)$ and produces $4 \\cdot g(x) - 3$, and that must equal $8x + 5$. Solve for $g(x)$: add $3$ to both sides for $4 \\cdot g(x) = 8x + 8$, then divide by $4$ to get $g(x) = 2x + 2$. Check in the stated order: $f(g(x)) = f(2x + 2) = 4(2x + 2) - 3 = 8x + 8 - 3 = 8x + 5$ ✓. The other order gives $g(f(x)) = 2(4x - 3) + 2 = 8x - 4$, a different rule ✓ — so it did matter which machine was named as the inner one. The trap is dividing only the $x$-term and writing $g(x) = 2x + 8$, which sends the composition to $8x + 32 - 3 = 8x + 29$ ✗. Every term on the right gets divided by $4$.',
    },
    {
      q: 'Suppose $g(x) = x + 2$ and $f$ is a linear function with $f(g(x)) = 3x + 1$. Find $f(x)$.',
      answer: '$f(x) = 3x - 5$',
      solution:
        'The inner machine shifts the input up by $2$, so $f$ is fed the number $x + 2$ and must return $3x + 1$. Name the number $f$ receives: let $u = x + 2$, so $x = u - 2$. Then $f(u) = 3(u - 2) + 1 = 3u - 6 + 1 = 3u - 5$, which means $f(x) = 3x - 5$. Check in the order the question used, with $g$ inside: $f(g(x)) = f(x + 2) = 3(x + 2) - 5 = 3x + 6 - 5 = 3x + 1$ ✓. The other order is different: $g(f(x)) = (3x - 5) + 2 = 3x - 3$ ✓ not the same function, so the inside machine had to be $g$. The trap is copying the constant across and writing $f(x) = 3x + 1$: that gives $f(x + 2) = 3x + 7$, six too high ✗. The shift inside gets multiplied by the outer slope on its way out.',
    },
  ],
  // w9 — test an invented operation for commutativity. Each variation computes
  //      both orders in full before ruling.
  [
    {
      q: 'Define $a \\ominus b = 5a - b$. Compute $4 \\ominus 1$ and $1 \\ominus 4$, then say whether $\\ominus$ is commutative.',
      answer: '$4 \\ominus 1 = 19$ but $1 \\ominus 4 = 1$, so $\\ominus$ is not commutative',
      solution:
        'The left number is multiplied by $5$; the right number is subtracted as it stands. With $4$ on the left: $4 \\ominus 1 = 5(4) - 1 = 20 - 1 = 19$. With $1$ on the left: $1 \\ominus 4 = 5(1) - 4 = 5 - 4 = 1$. The two results are $19$ and $1$, so swapping the inputs changed the answer, and a single mismatched pair is all it takes to rule out commutativity. Check the arithmetic a second way: the two answers should differ by $5(4) - 1 - (5(1) - 4) = 19 - 1 = 18$, and $20 - 1 = 19$ against $5 - 4 = 1$ does differ by $18$ ✓. The trap is deciding from the shape of the rule that subtraction alone settles it. The verdict rests on the two finished numbers, and here they were computed in full ✗ for any answer that skips one side.',
    },
    {
      q: 'Define $a \\bullet b = a^2 - b^2$. Find $5 \\bullet 3$ and $3 \\bullet 5$, and decide whether $\\bullet$ is commutative.',
      answer: '$5 \\bullet 3 = 16$ but $3 \\bullet 5 = -16$, so $\\bullet$ is not commutative',
      solution:
        'Both entries get squared, but only the right one is taken away. With $5$ on the left: $5 \\bullet 3 = 25 - 9 = 16$. With $3$ on the left: $3 \\bullet 5 = 9 - 25 = -16$. The results are opposites, not equals, so the operation is not commutative. Check the pattern in general, which explains the sign flip: $b \\bullet a = b^2 - a^2 = -(a^2 - b^2) = -(a \\bullet b)$, and indeed $-16$ is the negative of $16$ ✓. The trap is calling the operation commutative because both numbers are squared and squares ignore signs. Squaring is even-handed, but the SUBTRACTION that follows is not ✗.',
    },
    {
      q: 'Define $a \\oplus b = 2a + 3b$. Compute $1 \\oplus 6$ and $6 \\oplus 1$, then state whether $\\oplus$ is commutative.',
      answer: '$1 \\oplus 6 = 20$ but $6 \\oplus 1 = 15$, so $\\oplus$ is not commutative',
      solution:
        'The left number is doubled and the right number is tripled, so the two positions carry different weights. With $1$ on the left: $1 \\oplus 6 = 2(1) + 3(6) = 2 + 18 = 20$. With $6$ on the left: $6 \\oplus 1 = 2(6) + 3(1) = 12 + 3 = 15$. Since $20 \\ne 15$, the operation is not commutative. Check with a second pair, which must also disagree if the rule really is lopsided: $2 \\oplus 5 = 4 + 15 = 19$ while $5 \\oplus 2 = 10 + 6 = 16$ ✓, another mismatch. The trap is calling the rule commutative because it is built only from addition and multiplication. The two inputs meet different multipliers before the addition happens, and one mismatched pair sinks the property ✗.',
    },
  ],
  // w10 — a machine composed with itself. The middle variation squares, the last
  //      has a negative slope so the outputs jump either side.
  [
    {
      q: 'If $f(x) = 3x - 2$, find $f(f(f(2)))$.',
      answer: '$28$',
      solution:
        'Work from the innermost bracket outward, one pass at a time. First $f(2) = 6 - 2 = 4$. Feed that back in: $f(4) = 12 - 2 = 10$. Once more: $f(10) = 30 - 2 = 28$. Check with a formula for two passes, built independently: $f(f(x)) = 3(3x - 2) - 2 = 9x - 8$, so $f(f(2)) = 18 - 8 = 10$ ✓, matching the second pass, and the third pass on $10$ gives $28$ ✓. The trap is applying the rule once to a tripled input, computing $3(3(3 \\cdot 2)) - 2 = 52$. Each pass subtracts its own $2$, so the subtraction happens three times ✗.',
    },
    {
      q: 'If $g(x) = x^2 - 1$, find $g(g(3))$.',
      answer: '$63$',
      solution:
        'Inner pass first: $g(3) = 9 - 1 = 8$. Now that output becomes the new input: $g(8) = 64 - 1 = 63$. Check with a formula for the double pass: $g(g(x)) = (x^2 - 1)^2 - 1$, and at $x = 3$ that is $8^2 - 1 = 63$ ✓. The trap is squaring twice and subtracting once, computing $3^4 - 1 = 80$. The $-1$ belongs to the rule, so it is applied on every pass, and the second squaring acts on $8$, not on $9$ ✗.',
    },
    {
      q: 'If $h(x) = 10 - 3x$, find $h(h(h(1)))$.',
      answer: '$43$',
      solution:
        'Three passes, inside out, watching the signs. First $h(1) = 10 - 3 = 7$. Second $h(7) = 10 - 21 = -11$. Third $h(-11) = 10 - 3(-11) = 10 + 33 = 43$. Check the middle result with a two-pass formula: $h(h(x)) = 10 - 3(10 - 3x) = 10 - 30 + 9x = 9x - 20$, so $h(h(1)) = 9 - 20 = -11$ ✓, matching the second pass, and $h(-11) = 43$ ✓. THE STOLEN SIGN is the trap on the last pass: writing $10 - 33 = -23$. The input is negative, and subtracting three times a negative number adds ✗.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 16,
  worksheet,
}
