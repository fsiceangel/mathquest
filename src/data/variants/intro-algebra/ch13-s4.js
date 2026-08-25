// Introduction to Algebra chapter 13 — variations for the chapter worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE: each variation carries a question, an
//    `answer` STRING, and a solution. Nothing is offered to pick from, so all of
//    the teaching lives in the solution. There are no `choices` keys here.
//  - Every key was worked out by hand and then confirmed a SECOND, independent
//    way. For a solved quadratic the second check is the sum-and-product rule
//    (roots add to $-b/a$ and multiply to $c/a$), which touches every root at
//    once and catches a dropped sign that substitution of a single root would
//    miss. For a rewritten expression the second check is a numeric test at a
//    value AWAY from the vertex, so a wrong constant cannot hide.
//  - A variation changes the numbers AND, where it makes sense, the direction:
//    hand back a root and ask for the missing coefficient, ask for the constant
//    that produces a given minimum, ask when a ball is at a given height rather
//    than at zero, ask for a maximum instead of a minimum.
//  - Four traps run through the file. THE MISSING TWIN: unsquaring, and setting
//    a discriminant to zero, both hand back TWO numbers, never one. THE UNDONE
//    COEFFICIENT: a $\pm$ describes the whole bracket, so $2x + 1$ still has to
//    be untangled, and $2a$ under the formula bar is not $2$. THE UNSCALED
//    CORNER: whatever you add inside the parentheses gets multiplied by the
//    number you factored out. THE UNMOVED SIDE: the formula and factoring only
//    read equations that already say $= 0$.
//  - The base worksheet carries no figures, so neither does this file.

const worksheet = [
  // w1 — unsquare a squared binomial. The middle variation runs backwards from a
  //      known root, and the last hides a coefficient inside the bracket.
  [
    {
      q: 'Solve $(x-3)^2 = 64$.',
      answer: '$x = 11$ or $x = -5$',
      solution:
        'Whatever $x - 3$ happens to be, it squares to $64$ — and two different numbers do that, $8$ and $-8$. So $x - 3 = \\pm 8$, giving $x = 3 + 8 = 11$ or $x = 3 - 8 = -5$. Check both in the original equation: $(11-3)^2 = 8^2 = 64$ ✓ and $(-5-3)^2 = (-8)^2 = 64$ ✓. Now check a second, independent way. Expanding turns the equation into $x^2 - 6x + 9 = 64$, that is $x^2 - 6x - 55 = 0$, whose roots must add to $-\\frac{b}{a} = 6$ and multiply to $\\frac{c}{a} = -55$. Ours give $11 + (-5) = 6$ ✓ and $11 \\times (-5) = -55$ ✓. THE MISSING TWIN is the trap here: answering $x = 11$ alone because $\\sqrt{64} = 8$. The equation asks which numbers square to $64$, and $-8$ answers that just as well as $8$ does, so a whole solution would vanish.',
    },
    {
      q: 'One solution of $(x+7)^2 = c$ is $x = -2$. Find $c$ and the other solution.',
      answer: '$c = 25$; the other solution is $x = -12$',
      solution:
        'A solution makes the equation true, so feed it in: $(-2+7)^2 = 5^2 = 25$, and therefore $c = 25$. Now solve the whole equation: $(x+7)^2 = 25$ means $x + 7 = \\pm 5$, so $x = -2$ (the root we were handed) or $x = -12$. Check the new one: $(-12+7)^2 = (-5)^2 = 25$ ✓. Check the pair a different way, without unsquaring at all: expanded, the equation is $x^2 + 14x + 49 = 25$, that is $x^2 + 14x + 24 = 0$, so the roots must add to $-14$ and multiply to $24$. Ours add to $-2 + (-12) = -14$ ✓ and multiply to $(-2)(-12) = 24$ ✓. The trap is answering $x = 2$, flipping the sign of the known root instead of reflecting it. Test that: $(2+7)^2 = 81 \\ne 25$ ✗. The two solutions sit an equal distance either side of $-7$, not either side of $0$ — and $-2$ is $5$ above $-7$, so its partner is $5$ below.',
    },
    {
      q: 'Solve $(2x+1)^2 = 49$.',
      answer: '$x = 3$ or $x = -4$',
      solution:
        'Unsquare first, then untangle the inside. Since the bracket squares to $49$, we get $2x + 1 = \\pm 7$. From $2x + 1 = 7$: $2x = 6$, so $x = 3$. From $2x + 1 = -7$: $2x = -8$, so $x = -4$. Check in the original: $(2 \\cdot 3 + 1)^2 = 7^2 = 49$ ✓ and $(2(-4)+1)^2 = (-7)^2 = 49$ ✓. Check a second way with sum and product: expanding gives $4x^2 + 4x + 1 = 49$, that is $4x^2 + 4x - 48 = 0$, whose roots must add to $-\\frac{4}{4} = -1$ and multiply to $\\frac{-48}{4} = -12$. Ours: $3 + (-4) = -1$ ✓ and $3 \\times (-4) = -12$ ✓. THE UNDONE COEFFICIENT is the trap: reading $\\pm 7$ as the answer for $x$ and reporting $x = 6$ or $x = -8$. Test $x = 6$: $(2 \\cdot 6 + 1)^2 = 169$ ✗, nowhere near $49$. The $\\pm 7$ describes $2x+1$, not $x$.',
    },
  ],
  // w2 — the half-and-square rule. The middle variation runs it backwards from
  //      the constant, and the last has an odd middle coefficient.
  [
    {
      q: 'What must be added to $x^2 - 14x$ to make a perfect square? Write the resulting square.',
      answer: '$49$; the result is $(x-7)^2$',
      solution:
        'Take half the middle coefficient and square it. Half of $-14$ is $-7$, and $(-7)^2 = 49$, so add $49$: the trinomial $x^2 - 14x + 49$ is the perfect square $(x-7)^2$. Check by expanding: $(x-7)^2 = x^2 - 7x - 7x + 49 = x^2 - 14x + 49$ ✓ — the middle term comes out to exactly $-14x$. Check numerically as well, at $x = 1$: the trinomial gives $1 - 14 + 49 = 36$, and $(1-7)^2 = (-6)^2 = 36$ ✓. Two traps live here. Squaring the whole $14$ gives $196$, but $x^2 - 14x + 196$ would need a middle term of $-28x$ to be a square ✗ — at $x = 1$ it reads $183$, while $(x-14)^2$ reads $169$. And writing the answer as $(x+7)^2$ flips the middle term to $+14x$ ✗; the sign inside the binomial is the sign of the middle term.',
    },
    {
      q: 'The trinomial $x^2 + bx + 121$ is a perfect square, and $b$ is positive. Find $b$ and write the trinomial as a square.',
      answer: '$b = 22$; the trinomial is $(x+11)^2$',
      solution:
        'This runs the rule backwards. A perfect square looks like $(x+a)^2 = x^2 + 2ax + a^2$, so the constant $121$ has to be $a^2$, giving $a = 11$ (the positive one, since $b$ must come out positive). Then the middle coefficient is $b = 2a = 22$. Check by expanding: $(x+11)^2 = x^2 + 22x + 121$ ✓. Check forward with the half-and-square test too: half of $22$ is $11$, and $11^2 = 121$, which matches the constant ✓. The trap is answering $b = 11$ — copying the number that gets squared instead of doubling it. Test it: for $x^2 + 11x + 121$, half of $11$ is $\\frac{11}{2}$, and $\\left(\\frac{11}{2}\\right)^2 = \\frac{121}{4}$, which is nowhere near $121$ ✗. (If $b$ were allowed to be negative, $b = -22$ would work too, giving $(x-11)^2$ — the problem ruled that out on purpose.)',
    },
    {
      q: 'What must be added to $x^2 + 5x$ to make a perfect square? Write the resulting square.',
      answer: '$\\frac{25}{4}$; the result is $\\left(x + \\frac{5}{2}\\right)^2$',
      solution:
        'The rule does not change when the middle coefficient is odd — the numbers simply stop being whole, and that is fine. Half of $5$ is $\\frac{5}{2}$, and $\\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}$, so add $\\frac{25}{4}$ to get $\\left(x + \\frac{5}{2}\\right)^2$. Check by expanding: $\\left(x + \\frac{5}{2}\\right)^2 = x^2 + 2 \\cdot \\frac{5}{2} x + \\frac{25}{4} = x^2 + 5x + \\frac{25}{4}$ ✓. Check numerically at $x = 2$: the trinomial gives $4 + 10 + \\frac{25}{4} = \\frac{81}{4}$, and $\\left(2 + \\frac{5}{2}\\right)^2 = \\left(\\frac{9}{2}\\right)^2 = \\frac{81}{4}$ ✓. The trap is rounding the fraction away and answering $25$, as if the constant always had to be a whole number. Test it: $x^2 + 5x + 25$ would need a middle term of $10x$ to be a square, and at $x = 2$ it reads $39$ while $(x+5)^2$ reads $49$ ✗.',
    },
  ],
  // w3 — solve by factoring. The middle variation hands back a root and asks for
  //      the missing constant; the last must be rearranged before it factors.
  [
    {
      q: 'Solve $x^2 + 3x - 18 = 0$ using any method.',
      answer: '$x = 3$ or $x = -6$',
      solution:
        'Factoring is the fastest tool when the coefficients are small whole numbers. Hunt for two numbers with product $-18$ and sum $+3$: that is $6$ and $-3$. So $x^2 + 3x - 18 = (x+6)(x-3) = 0$, and a product is zero only when one of its factors is, giving $x = -6$ or $x = 3$. Check by substituting into the original: $9 + 9 - 18 = 0$ ✓ and $36 - 18 - 18 = 0$ ✓. Check independently with the quadratic formula, which never needs the factoring to work out: the discriminant is $9 - 4(1)(-18) = 9 + 72 = 81$, so $x = \\frac{-3 \\pm 9}{2}$, giving $3$ and $-6$ ✓. The trap is copying the numbers out of the factors without flipping their signs and answering $x = 6$ or $x = -3$. Test $x = 6$: $36 + 18 - 18 = 36 \\ne 0$ ✗. The factor $(x+6)$ is zero at $x = -6$, the opposite of the number written inside it.',
    },
    {
      q: 'The number $x = -5$ is one solution of $x^2 + x + k = 0$. Find $k$ and the other solution.',
      answer: '$k = -20$; the other solution is $x = 4$',
      solution:
        'A solution makes the equation true, so substitute it and solve for the unknown constant: $(-5)^2 + (-5) + k = 0$, that is $25 - 5 + k = 0$, so $k = -20$. The equation is really $x^2 + x - 20 = 0$, which factors as $(x+5)(x-4) = 0$ — two numbers with product $-20$ and sum $1$ are $5$ and $-4$ — so the other solution is $x = 4$. Check by substituting: $16 + 4 - 20 = 0$ ✓. Check the pair a second way with sum and product: the roots of $x^2 + x - 20$ must add to $-1$ and multiply to $-20$, and $-5 + 4 = -1$ ✓ while $(-5)(4) = -20$ ✓. The trap is assuming the second root is the mirror image, $x = +5$. That pair would add to $0$ and multiply to $-25$, so it belongs to $x^2 - 25 = 0$, an equation with no $x$ term at all — and substituting $x = 5$ here gives $25 + 5 - 20 = 10 \\ne 0$ ✗.',
    },
    {
      q: 'Solve $x^2 = 5x + 24$.',
      answer: '$x = 8$ or $x = -3$',
      solution:
        'Get everything onto one side before you factor anything, because the zero-product rule only reads equations that say $= 0$: $x^2 - 5x - 24 = 0$. Two numbers with product $-24$ and sum $-5$ are $-8$ and $3$, so $(x-8)(x+3) = 0$ and $x = 8$ or $x = -3$. Check in the ORIGINAL form, which is where the question lives: for $x = 8$ the left side is $64$ and the right side is $40 + 24 = 64$ ✓; for $x = -3$ the left is $9$ and the right is $-15 + 24 = 9$ ✓. Check again with sum and product: the roots of $x^2 - 5x - 24$ should add to $5$ and multiply to $-24$, and $8 + (-3) = 5$ ✓ with $8 \\times (-3) = -24$ ✓. THE UNMOVED SIDE is the trap: factoring the printed equation as $x \\cdot x = 5x + 24$ and cancelling an $x$, or reading $x^2 = 5x$ and concluding $x = 5$. Test $x = 5$: the left side is $25$ but the right side is $49$ ✗.',
    },
  ],
  // w4 — completing the square with irrational roots. The last variation has an
  //      odd middle coefficient, so the halves become fractions.
  [
    {
      q: 'Solve $x^2 - 8x + 5 = 0$ by completing the square.',
      answer: '$x = 4 + \\sqrt{11}$ or $x = 4 - \\sqrt{11}$',
      solution:
        'Move the constant across first: $x^2 - 8x = -5$. Half of $-8$ is $-4$, and $(-4)^2 = 16$, so add $16$ to BOTH sides — an equation is a balance scale: $x^2 - 8x + 16 = -5 + 16$, that is $(x-4)^2 = 11$. Unsquare with both signs: $x - 4 = \\pm\\sqrt{11}$, so $x = 4 \\pm \\sqrt{11}$. Check with sum and product, which tests both roots at once: they should add to $-\\frac{b}{a} = 8$ and multiply to $\\frac{c}{a} = 5$. Sum: $(4+\\sqrt{11}) + (4-\\sqrt{11}) = 8$ ✓, the radicals cancelling. Product: $(4+\\sqrt{11})(4-\\sqrt{11}) = 16 - 11 = 5$ ✓. The trap is landing on $x = -4 \\pm \\sqrt{11}$, borrowing the $-4$ from the halving step. The bracket is $(x-4)$, so solving $x - 4 = \\pm\\sqrt{11}$ ADDS $4$; the wrong pair would add to $-8$ ✗ instead of $8$.',
    },
    {
      q: 'Solve $x^2 + 10x - 3 = 0$ by completing the square, and simplify the radicals.',
      answer: '$x = -5 + 2\\sqrt{7}$ or $x = -5 - 2\\sqrt{7}$',
      solution:
        'Move the constant: $x^2 + 10x = 3$. Half of $10$ is $5$, and $5^2 = 25$, so add $25$ to both sides: $(x+5)^2 = 3 + 25 = 28$. Unsquare: $x + 5 = \\pm\\sqrt{28}$, and $\\sqrt{28} = \\sqrt{4 \\cdot 7} = 2\\sqrt{7}$, so $x = -5 \\pm 2\\sqrt{7}$. Check with sum and product: the roots should add to $-10$ and multiply to $-3$. Sum: $-5 + (-5) = -10$ ✓. Product: $(-5)^2 - (2\\sqrt{7})^2 = 25 - 4 \\cdot 7 = 25 - 28 = -3$ ✓. The trap is carrying the $-3$ across without flipping its sign, which gives $(x+5)^2 = 25 - 3 = 22$ and the roots $-5 \\pm \\sqrt{22}$. Those multiply to $25 - 22 = 3$ ✗, a positive constant, when the equation clearly needs $-3$.',
    },
    {
      q: 'Solve $x^2 - 3x - 5 = 0$ by completing the square.',
      answer: '$x = \\frac{3 + \\sqrt{29}}{2}$ or $x = \\frac{3 - \\sqrt{29}}{2}$',
      solution:
        'An odd middle coefficient just means fractions, and the method does not mind them. Move the constant: $x^2 - 3x = 5$. Half of $-3$ is $-\\frac{3}{2}$, whose square is $\\frac{9}{4}$, so add $\\frac{9}{4}$ to both sides: $\\left(x - \\frac{3}{2}\\right)^2 = 5 + \\frac{9}{4} = \\frac{29}{4}$. Unsquare: $x - \\frac{3}{2} = \\pm\\frac{\\sqrt{29}}{2}$, since $\\sqrt{\\frac{29}{4}} = \\frac{\\sqrt{29}}{2}$. So $x = \\frac{3 \\pm \\sqrt{29}}{2}$. Check with sum and product: the roots should add to $3$ and multiply to $-5$. Sum: $\\frac{3+\\sqrt{29}}{2} + \\frac{3-\\sqrt{29}}{2} = \\frac{6}{2} = 3$ ✓. Product: $\\frac{3^2 - 29}{4} = \\frac{-20}{4} = -5$ ✓. The trap is adding $9$ instead of $\\frac{9}{4}$ — squaring the whole $-3$ rather than its half. The trinomial $x^2 - 3x + 9$ is not a square at all: half of $-3$ squared is $\\frac{9}{4}$, and at $x = 0$ that version reads $9$ while $\\left(x-\\frac{3}{2}\\right)^2$ reads $\\frac{9}{4}$ ✗.',
    },
  ],
  // w5 — the discriminant as a solution counter. One negative, one zero, and one
  //      run backwards: the discriminant is given, the constant is not.
  [
    {
      q: 'Compute the discriminant of $2x^2 - 6x + 5 = 0$. How many real solutions does the equation have?',
      answer: 'The discriminant is $-4$; there are no real solutions',
      solution:
        'Read off $a = 2$, $b = -6$, $c = 5$, keeping every sign. Then $b^2 - 4ac = (-6)^2 - 4(2)(5) = 36 - 40 = -4$. A negative discriminant sends the formula to $\\sqrt{-4}$, and no real number squares to a negative, so there are no real solutions. Check a completely different way by completing the square: $2x^2 - 6x + 5 = 2\\left(x^2 - 3x\\right) + 5 = 2\\left(x - \\frac{3}{2}\\right)^2 - \\frac{9}{2} + 5 = 2\\left(x - \\frac{3}{2}\\right)^2 + \\frac{1}{2}$. A square is never negative, so the expression is always at least $\\frac{1}{2}$ and can never reach $0$ ✓ — the same verdict, reached without the discriminant. The trap is adding $4ac$ instead of subtracting it and reporting $36 + 40 = 76$, which would announce two real solutions. Test that claim where the quadratic is smallest, $x = \\frac{3}{2}$: it gives $\\frac{9}{2} - 9 + 5 = \\frac{1}{2}$, not $0$ ✗ — the expression never even touches the axis.',
    },
    {
      q: 'Compute the discriminant of $4x^2 - 20x + 25 = 0$. How many real solutions does the equation have?',
      answer: 'The discriminant is $0$; there is exactly one real solution',
      solution:
        'Here $a = 4$, $b = -20$, $c = 25$, so $b^2 - 4ac = (-20)^2 - 4(4)(25) = 400 - 400 = 0$. A discriminant of zero makes the $\\pm\\sqrt{0}$ in the formula add and subtract nothing, so the two solutions collapse into one: $x = \\frac{20}{8} = \\frac{5}{2}$. Check by factoring, which uses no discriminant at all: $4x^2 - 20x + 25 = (2x-5)^2$, since $(2x-5)(2x-5) = 4x^2 - 10x - 10x + 25$ ✓. A square is zero only when the thing being squared is, so $2x = 5$ and $x = \\frac{5}{2}$ — one root, appearing twice ✓. The trap is reading a discriminant of $0$ as "no solutions", the verdict that belongs to a NEGATIVE discriminant. Test it: $x = \\frac{5}{2}$ gives $4 \\cdot \\frac{25}{4} - 50 + 25 = 25 - 50 + 25 = 0$ ✗ for that claim — a solution plainly exists.',
    },
    {
      q: 'The equation $x^2 - 5x + c = 0$ has discriminant $9$. Find $c$, and then find both solutions.',
      answer: '$c = 4$; the solutions are $x = 1$ and $x = 4$',
      solution:
        'Write the discriminant with $c$ still a letter: $(-5)^2 - 4(1)(c) = 25 - 4c$. Set that equal to $9$: $25 - 4c = 9$, so $4c = 16$ and $c = 4$. Now solve $x^2 - 5x + 4 = 0$; it factors as $(x-1)(x-4) = 0$, so $x = 1$ and $x = 4$. Check the discriminant with $c = 4$: $25 - 16 = 9$ ✓. Check the roots by substituting into the equation: $1 - 5 + 4 = 0$ ✓ and $16 - 20 + 4 = 0$ ✓. There is a third check worth knowing: when the discriminant is $D$ and $a = 1$, the two roots sit $\\sqrt{D}$ apart, and $4 - 1 = 3 = \\sqrt{9}$ ✓. The trap is treating $(-5)^2$ as $-25$, which gives $-25 - 4c = 9$ and $c = -\\frac{17}{2}$. Test that value: $25 - 4\\left(-\\frac{17}{2}\\right) = 25 + 34 = 59 \\ne 9$ ✗. Squaring a negative always lands you somewhere positive.',
    },
  ],
  // w6 — the quadratic formula with a leading coefficient. The last variation
  //      has to be moved to one side before the formula can be read off.
  [
    {
      q: 'Solve $2x^2 - 7x + 3 = 0$ with the quadratic formula.',
      answer: '$x = 3$ or $x = \\frac{1}{2}$',
      solution:
        'Read off $a = 2$, $b = -7$, $c = 3$. The discriminant is $(-7)^2 - 4(2)(3) = 49 - 24 = 25$, and $\\sqrt{25} = 5$. Then $x = \\frac{7 \\pm 5}{2(2)} = \\frac{7 \\pm 5}{4}$, giving $x = \\frac{12}{4} = 3$ or $x = \\frac{2}{4} = \\frac{1}{2}$. Check by substituting into the original: $2(9) - 21 + 3 = 18 - 18 = 0$ ✓ and $2\\left(\\frac{1}{4}\\right) - \\frac{7}{2} + 3 = \\frac{1}{2} - \\frac{7}{2} + 3 = 0$ ✓. Check a second way with sum and product: the roots should add to $-\\frac{b}{a} = \\frac{7}{2}$ and multiply to $\\frac{c}{a} = \\frac{3}{2}$, and $3 + \\frac{1}{2} = \\frac{7}{2}$ ✓ with $3 \\times \\frac{1}{2} = \\frac{3}{2}$ ✓. THE UNDONE COEFFICIENT is the trap: dividing by $2$ instead of $2a = 4$, which gives $6$ and $1$. Test $x = 1$: $2 - 7 + 3 = -2 \\ne 0$ ✗.',
    },
    {
      q: 'Solve $4x^2 + 4x - 3 = 0$ with the quadratic formula.',
      answer: '$x = \\frac{1}{2}$ or $x = -\\frac{3}{2}$',
      solution:
        'Here $a = 4$, $b = 4$, $c = -3$. The discriminant is $4^2 - 4(4)(-3) = 16 + 48 = 64$, so $\\sqrt{64} = 8$ and $x = \\frac{-4 \\pm 8}{2(4)} = \\frac{-4 \\pm 8}{8}$. That gives $x = \\frac{4}{8} = \\frac{1}{2}$ or $x = \\frac{-12}{8} = -\\frac{3}{2}$. Check by substituting: $4\\left(\\frac{1}{4}\\right) + 2 - 3 = 1 + 2 - 3 = 0$ ✓ and $4\\left(\\frac{9}{4}\\right) - 6 - 3 = 9 - 9 = 0$ ✓. Check with sum and product: the roots should add to $-\\frac{4}{4} = -1$ and multiply to $-\\frac{3}{4}$, and $\\frac{1}{2} - \\frac{3}{2} = -1$ ✓ with $\\frac{1}{2} \\times \\left(-\\frac{3}{2}\\right) = -\\frac{3}{4}$ ✓. The trap is subtracting when $c$ is already negative: writing $16 - 48 = -32$ and declaring no real solutions. But $-4ac = -4(4)(-3) = +48$ — two minus signs make a plus — and the equation obviously does have solutions, as the substitution above shows ✗ for that verdict.',
    },
    {
      q: 'Solve $5x^2 = 3 - 14x$ with the quadratic formula.',
      answer: '$x = \\frac{1}{5}$ or $x = -3$',
      solution:
        'The formula only speaks to equations that already say $= 0$, so move everything to one side first: $5x^2 + 14x - 3 = 0$, giving $a = 5$, $b = 14$, $c = -3$. The discriminant is $14^2 - 4(5)(-3) = 196 + 60 = 256$, and $\\sqrt{256} = 16$. Then $x = \\frac{-14 \\pm 16}{2(5)} = \\frac{-14 \\pm 16}{10}$, so $x = \\frac{2}{10} = \\frac{1}{5}$ or $x = \\frac{-30}{10} = -3$. Check in the ORIGINAL equation: for $x = \\frac{1}{5}$ the left side is $5 \\cdot \\frac{1}{25} = \\frac{1}{5}$ and the right side is $3 - \\frac{14}{5} = \\frac{15-14}{5} = \\frac{1}{5}$ ✓; for $x = -3$ the left is $45$ and the right is $3 + 42 = 45$ ✓. Check again with sum and product: the roots of $5x^2 + 14x - 3$ should add to $-\\frac{14}{5}$ and multiply to $-\\frac{3}{5}$, and $\\frac{1}{5} - 3 = -\\frac{14}{5}$ ✓ with $\\frac{1}{5} \\times (-3) = -\\frac{3}{5}$ ✓. THE UNMOVED SIDE is the trap, in its sneakiest form: moving the terms across but flipping only one sign, ending at $5x^2 + 14x + 3 = 0$. Test $x = -3$ there: $45 - 42 + 3 = 6 \\ne 0$ ✗. Both terms cross the equals sign, so both change sign.',
    },
  ],
  // w7 — the a(x-h)^2 + k form. The middle variation opens downward and asks for
  //      a MAXIMUM, and the last runs backwards from a given minimum.
  [
    {
      q: 'Rewrite $3x^2 + 18x + 25$ in the form $a(x-h)^2 + k$, and state its minimum value.',
      answer: '$3(x+3)^2 - 2$; the minimum value is $-2$',
      solution:
        'Pull the $3$ out of the $x$ terms only: $3(x^2 + 6x) + 25$. Inside the parentheses we need $\\left(\\frac{6}{2}\\right)^2 = 9$ — but adding $9$ in there really adds $3 \\times 9 = 27$ to the whole expression, so subtract $27$ outside to stay balanced: $3(x^2 + 6x + 9) + 25 - 27 = 3(x+3)^2 - 2$. Check by expanding: $3(x^2+6x+9) - 2 = 3x^2 + 18x + 27 - 2 = 3x^2 + 18x + 25$ ✓. Check numerically at $x = 1$, well away from the vertex: the original gives $3 + 18 + 25 = 46$ and the new form gives $3(4)^2 - 2 = 48 - 2 = 46$ ✓. Since $3(x+3)^2$ is never negative and is $0$ exactly at $x = -3$, the smallest value the expression can take is $-2$. THE UNSCALED CORNER is the trap: subtracting only $9$ and writing $3(x+3)^2 + 16$. Test that at $x = 1$: $3(16) + 16 = 64 \\ne 46$ ✗ — whatever goes in inside the parentheses is multiplied by the $3$ standing outside.',
    },
    {
      q: 'Rewrite $-2x^2 + 12x - 5$ in the form $a(x-h)^2 + k$, and state its maximum value.',
      answer: '$-2(x-3)^2 + 13$; the maximum value is $13$',
      solution:
        'Factor $-2$ out of the $x$ terms, sign and all: $-2(x^2 - 6x) - 5$. Inside we need $\\left(\\frac{-6}{2}\\right)^2 = 9$, and adding $9$ in there really adds $-2 \\times 9 = -18$, so ADD $18$ outside to compensate: $-2(x-3)^2 - 5 + 18 = -2(x-3)^2 + 13$. Check by expanding: $-2(x^2 - 6x + 9) + 13 = -2x^2 + 12x - 18 + 13 = -2x^2 + 12x - 5$ ✓. Check numerically at $x = 5$: the original gives $-50 + 60 - 5 = 5$, and the new form gives $-2(2)^2 + 13 = -8 + 13 = 5$ ✓. Because $a = -2$ is negative, $-2(x-3)^2$ is never positive, so the expression is at most $13$ — and it reaches $13$ at $x = 3$. That is a MAXIMUM: this quadratic has no smallest value at all, since it dives without bound as $x$ runs away. The trap is subtracting $18$ out of habit instead of adding it, giving $-2(x-3)^2 - 23$; at $x = 5$ that reads $-8 - 23 = -31 \\ne 5$ ✗.',
    },
    {
      q: 'The expression $2x^2 + 12x + c$ has minimum value $5$. Find $c$.',
      answer: '$c = 23$',
      solution:
        'Complete the square while $c$ is still a letter. Factor the $2$ out of the $x$ terms: $2(x^2 + 6x) + c$. Inside we need $\\left(\\frac{6}{2}\\right)^2 = 9$, which costs $2 \\times 9 = 18$ outside: $2(x+3)^2 - 18 + c$. The square is never negative and hits $0$ at $x = -3$, so the minimum value of the whole expression is $c - 18$. Set $c - 18 = 5$ and get $c = 23$. Check by putting $x = -3$ into $2x^2 + 12x + 23$: $18 - 36 + 23 = 5$ ✓. Check that it really is the bottom by testing a neighbour, $x = -2$: $8 - 24 + 23 = 7$, which is larger ✓, so the value $5$ is not being beaten nearby. THE UNSCALED CORNER is the trap again: forgetting that the $2$ multiplies the $9$, computing the minimum as $c - 9$, and answering $c = 14$. Test it: $2x^2 + 12x + 14$ at $x = -3$ gives $18 - 36 + 14 = -4$, not $5$ ✗.',
    },
  ],
  // w8 — force a double root by setting the discriminant to zero. The middle
  //      variation puts the unknown at b (two answers!), the last one at a.
  [
    {
      q: 'Find the value of $k$ for which $2x^2 + 20x + k = 0$ has exactly one solution, and find that solution.',
      answer: '$k = 50$; the solution is $x = -5$',
      solution:
        'Exactly one solution means the discriminant is zero: $20^2 - 4(2)(k) = 400 - 8k = 0$, so $8k = 400$ and $k = 50$. When the discriminant vanishes, the $\\pm\\sqrt{0}$ contributes nothing and the formula collapses to $x = \\frac{-b}{2a} = \\frac{-20}{4} = -5$. Check by substituting into $2x^2 + 20x + 50 = 0$: $2(25) - 100 + 50 = 50 - 100 + 50 = 0$ ✓. Check a second, independent way by factoring: $2x^2 + 20x + 50 = 2(x^2 + 10x + 25) = 2(x+5)^2$, a perfect square whose only zero is $x = -5$ ✓. The trap is forgetting that $a = 2$ and writing $400 - 4k = 0$, which gives $k = 100$. Test that: the discriminant of $2x^2 + 20x + 100$ is $400 - 800 = -400$, so that equation has NO solutions ✗, not one.',
    },
    {
      q: 'Find all values of $m$ for which $x^2 + mx + 49 = 0$ has exactly one solution, and give the solution in each case.',
      answer: '$m = 14$ with solution $x = -7$, or $m = -14$ with solution $x = 7$',
      solution:
        'Set the discriminant to zero: $m^2 - 4(1)(49) = m^2 - 196 = 0$, so $m^2 = 196$ and $m = \\pm 14$ — unsquaring always hands back two numbers. Take them one at a time. With $m = 14$: $x^2 + 14x + 49 = (x+7)^2 = 0$, so $x = -7$. With $m = -14$: $x^2 - 14x + 49 = (x-7)^2 = 0$, so $x = 7$. Check by substitution. For $m = 14$ and $x = -7$: $49 + 14(-7) + 49 = 49 - 98 + 49 = 0$ ✓. For $m = -14$ and $x = 7$: $49 - 14(7) + 49 = 49 - 98 + 49 = 0$ ✓. Check the roots a different way with $x = \\frac{-b}{2a}$: $\\frac{-14}{2} = -7$ ✓ and $\\frac{14}{2} = 7$ ✓. THE MISSING TWIN is the trap: reporting $m = 14$ alone. The value $m = -14$ satisfies $m^2 = 196$ just as well, and $(x-7)^2$ is every bit as much a perfect square as $(x+7)^2$ is.',
    },
    {
      q: 'Find the value of $k$ (with $k \\ne 0$) for which $kx^2 - 20x + 25 = 0$ has exactly one solution, and find that solution.',
      answer: '$k = 4$; the solution is $x = \\frac{5}{2}$',
      solution:
        'The unknown sits in the $a$ slot this time, but the condition is unchanged: $(-20)^2 - 4(k)(25) = 400 - 100k = 0$, so $k = 4$. The single root is $x = \\frac{-b}{2a} = \\frac{20}{2(4)} = \\frac{20}{8} = \\frac{5}{2}$. Check by substituting into $4x^2 - 20x + 25 = 0$: $4\\left(\\frac{25}{4}\\right) - 20 \\cdot \\frac{5}{2} + 25 = 25 - 50 + 25 = 0$ ✓. Check independently by factoring: $4x^2 - 20x + 25 = (2x-5)^2$, since $(2x-5)(2x-5) = 4x^2 - 10x - 10x + 25$ ✓, and that is zero only when $2x = 5$ ✓. THE UNDONE COEFFICIENT is the trap: computing the root as $\\frac{-b}{2} = 10$, forgetting that the denominator is $2a$ and $a$ is now $4$. Test $x = 10$: $4(100) - 200 + 25 = 225 \\ne 0$ ✗.',
    },
  ],
  // w9 — two numbers from a product plus one more fact, with irrational answers.
  //      Difference, then sum, then a rectangle.
  [
    {
      q: 'Two positive numbers differ by $6$ and have a product of $20$. Find both numbers exactly.',
      answer: 'The numbers are $\\sqrt{29} - 3$ and $\\sqrt{29} + 3$',
      solution:
        'Let the smaller number be $x$; then the larger is $x + 6$, and the product gives $x(x+6) = 20$, that is $x^2 + 6x - 20 = 0$. Nothing factors here, so use the formula: the discriminant is $36 + 80 = 116$, and $\\sqrt{116} = \\sqrt{4 \\cdot 29} = 2\\sqrt{29}$, so $x = \\frac{-6 \\pm 2\\sqrt{29}}{2} = -3 \\pm \\sqrt{29}$. Since $\\sqrt{29}$ is a bit more than $5$, only $x = \\sqrt{29} - 3$ is positive; the larger number is $x + 6 = \\sqrt{29} + 3$. Check both conditions directly against the story, not against the equation: their product is $(\\sqrt{29}-3)(\\sqrt{29}+3) = 29 - 9 = 20$ ✓, and their difference is $(\\sqrt{29}+3) - (\\sqrt{29}-3) = 6$ ✓. The trap is keeping the other root, $-3 - \\sqrt{29}$, as a second answer. It solves the equation honestly, but the problem asked for POSITIVE numbers and $-3 - \\sqrt{29} \\approx -8.4$ ✗. Algebra offers; the story decides.',
    },
    {
      q: 'Two numbers have a sum of $8$ and a product of $13$. Find both numbers exactly.',
      answer: 'The numbers are $4 + \\sqrt{3}$ and $4 - \\sqrt{3}$',
      solution:
        'Numbers with a known sum and product are exactly the two roots of a quadratic you can build from them. Since the roots of $x^2 + bx + c$ add to $-b$ and multiply to $c$, we want $x^2 - 8x + 13 = 0$ — the sum enters with its sign flipped, the product does not. The discriminant is $64 - 52 = 12$, and $\\sqrt{12} = 2\\sqrt{3}$, so $x = \\frac{8 \\pm 2\\sqrt{3}}{2} = 4 \\pm \\sqrt{3}$. Check both conditions straight from the story: $(4+\\sqrt{3}) + (4-\\sqrt{3}) = 8$ ✓ and $(4+\\sqrt{3})(4-\\sqrt{3}) = 16 - 3 = 13$ ✓. Check the setup a second way by naming the numbers $x$ and $8 - x$: then $x(8-x) = 13$ becomes $8x - x^2 = 13$, that is $x^2 - 8x + 13 = 0$ — the same equation ✓. The trap is copying the sum straight into $b$ and solving $x^2 + 8x + 13 = 0$. Its roots are $-4 \\pm \\sqrt{3}$, which add to $-8$ ✗, the wrong sign entirely.',
    },
    {
      q: 'A rectangle is $3$ units longer than it is wide and has area $20$. Find its exact dimensions.',
      answer: 'The width is $\\frac{\\sqrt{89} - 3}{2}$ and the length is $\\frac{\\sqrt{89} + 3}{2}$',
      solution:
        'Let the width be $w$; then the length is $w + 3$ and the area gives $w(w+3) = 20$, that is $w^2 + 3w - 20 = 0$. The discriminant is $9 + 80 = 89$, which is not a perfect square, so this rectangle has irrational sides: $w = \\frac{-3 \\pm \\sqrt{89}}{2}$. A width must be positive, so $w = \\frac{\\sqrt{89}-3}{2}$, and the length is $w + 3 = \\frac{\\sqrt{89}-3+6}{2} = \\frac{\\sqrt{89}+3}{2}$. Check the area: $\\frac{(\\sqrt{89}-3)(\\sqrt{89}+3)}{4} = \\frac{89-9}{4} = \\frac{80}{4} = 20$ ✓. Check the other condition too: the sides differ by $\\frac{(\\sqrt{89}+3) - (\\sqrt{89}-3)}{2} = \\frac{6}{2} = 3$ ✓. The trap is assuming an area of $20$ must come from whole numbers and answering $4$ by $5$: those do have area $20$, but they differ by $1$, not $3$ ✗. (For scale, $\\sqrt{89} \\approx 9.43$, so the rectangle is roughly $3.2$ by $6.2$.)',
    },
  ],
  // w10 — projectile heights. One landing, one peak, and one that asks for the
  //       times at a given height, where BOTH roots survive the story.
  [
    {
      q: 'A ball is thrown from a platform and its height after $t$ seconds is $h = -5t^2 + 12t + 9$. When does it hit the ground?',
      answer: '$t = 3$ seconds',
      solution:
        'Hitting the ground means a height of $0$, so solve $-5t^2 + 12t + 9 = 0$. Multiply through by $-1$ to make the leading coefficient friendly: $5t^2 - 12t - 9 = 0$. The discriminant is $144 + 4(5)(9) = 144 + 180 = 324 = 18^2$, so $t = \\frac{12 \\pm 18}{10}$, giving $t = 3$ or $t = -\\frac{3}{5}$. Negative time is before the throw ever happened, so the ball lands at $t = 3$ seconds. Check in the original height formula: $-5(9) + 36 + 9 = -45 + 45 = 0$ ✓. Check the root pair a second way with sum and product: the roots of $5t^2 - 12t - 9$ should add to $\\frac{12}{5}$ and multiply to $-\\frac{9}{5}$, and $3 - \\frac{3}{5} = \\frac{12}{5}$ ✓ with $3 \\times \\left(-\\frac{3}{5}\\right) = -\\frac{9}{5}$ ✓. The trap is multiplying only the first term by $-1$ and solving $5t^2 + 12t + 9 = 0$, whose discriminant is $144 - 180 = -36$ — that version claims the ball never lands at all ✗.',
    },
    {
      q: 'A ball is thrown so that its height after $t$ seconds is $h = -5t^2 + 20t + 12$. When does it reach its highest point, and how high is that?',
      answer: 'At $t = 2$ seconds, at a height of $32$',
      solution:
        'Complete the square to expose the peak. Factor $-5$ out of the $t$ terms: $-5(t^2 - 4t) + 12$. Inside we need $\\left(\\frac{-4}{2}\\right)^2 = 4$, and adding $4$ in there really adds $-5 \\times 4 = -20$, so add $20$ back outside: $h = -5(t-2)^2 + 20 + 12 = -5(t-2)^2 + 32$. Since $-5(t-2)^2$ is never positive and equals $0$ exactly at $t = 2$, the greatest height is $32$, reached at $t = 2$ seconds. Check by putting $t = 2$ into the original formula: $-20 + 40 + 12 = 32$ ✓. Check that it really is the peak by testing a time on each side: at $t = 1$, $h = -5 + 20 + 12 = 27$, and at $t = 3$, $h = -45 + 60 + 12 = 27$ — both lower ✓, and equal, as they should be for two times the same distance from the turning point. The trap is answering that the maximum height is $2$. That is WHEN the peak happens, not how high it is — and it would put the ball lower at its peak than at launch, where $h = 12$ ✗.',
    },
    {
      q: 'A stone is launched from the ground and its height after $t$ seconds is $h = -5t^2 + 25t$. At what times is the stone $30$ units above the ground?',
      answer: '$t = 2$ seconds and $t = 3$ seconds',
      solution:
        'Set the height to $30$ rather than to $0$: $-5t^2 + 25t = 30$. Move everything to one side, $-5t^2 + 25t - 30 = 0$, then divide by $-5$ to get $t^2 - 5t + 6 = 0$. That factors as $(t-2)(t-3) = 0$, so $t = 2$ or $t = 3$. Both are real times after the launch, so BOTH count: the stone passes $30$ on the way up at $t = 2$ and again on the way back down at $t = 3$. Check each in the original formula: $-5(4) + 50 = -20 + 50 = 30$ ✓ and $-5(9) + 75 = -45 + 75 = 30$ ✓. Check the pair with sum and product too: the roots of $t^2 - 5t + 6$ should add to $5$ and multiply to $6$, and $2 + 3 = 5$ ✓ with $2 \\times 3 = 6$ ✓. The trap is throwing one answer away out of habit, the way you would discard a negative time in a landing problem. Nothing is wrong with $t = 3$: the stone is in the air until $t = 5$, where $h = -125 + 125 = 0$, so both times fall inside the flight ✗ for any single-answer claim.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 13,
  worksheet,
}
