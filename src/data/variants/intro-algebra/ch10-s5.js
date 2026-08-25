// Introduction to Algebra chapter 10 — variations for the chapter worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE: each variation carries a question, an
//    `answer` string, and a solution. Nothing is offered to pick from, so all
//    of the teaching lives in the solution. There are no `choices` keys here.
//  - Every key was re-derived from the question text alone and then pushed
//    FORWARD: each claimed root is substituted back into the ORIGINAL equation
//    and shown to give $0$, every factorization is multiplied back out term by
//    term, every sum-and-product claim is re-checked against the actual roots
//    (or against the equation after dividing by $a$), and every word problem is
//    re-measured — the recovered dimensions are multiplied back to the area.
//  - Answers are written so there is exactly one sensible way to fill the blank:
//    two roots are named with "or", dimensions carry their units, and a story
//    that rejects a root names only the survivor.
//  - A variation changes the numbers AND the framing, and where it makes sense
//    the direction too: ask for the perimeter instead of the dimensions, ask
//    for a root that is three times the other instead of twice.
//  - Three traps run through the file. THE MISSING TWIN: undoing a square keeps
//    both signs. COPYING THE SIGN: a factor $(x + 5)$ gives the root $-5$, not
//    $5$. THE HALFWAY STOP: after a substitution, $y$ is not the answer — the
//    trip back to $x$ has to be finished.
//  - The base worksheet carries no figures, so neither does this file.

const worksheet = [
  // w1 — undo a square and keep BOTH roots; the last two variations hide the
  //      square behind a coefficient that must be divided away first.
  [
    {
      q: 'Solve $x^2 = 144$.',
      answer: '$x = 12$ or $x = -12$',
      solution:
        'We want every number whose square is $144$. The friendly one is $12$, since $12 \\cdot 12 = 144$. But squaring erases the minus sign, so the negative twin works too: $(-12)^2 = 144$. That gives two solutions, $x = 12$ or $x = -12$. Check forward: $12^2 = 144$ ✓ and $(-12)^2 = 144$ ✓. Stopping at $12$ alone is THE MISSING TWIN trap — every positive number has two square roots.',
    },
    {
      q: 'Solve $x^2 - 225 = 0$.',
      answer: '$x = 15$ or $x = -15$',
      solution:
        'Get the square by itself first: add $225$ to both sides to get $x^2 = 225$. Now $15 \\cdot 15 = 225$, so $x = 15$ works, and so does its negative twin $x = -15$. Check forward in the ORIGINAL equation: $15^2 - 225 = 225 - 225 = 0$ ✓, and $(-15)^2 - 225 = 225 - 225 = 0$ ✓.',
    },
    {
      q: 'Solve $4x^2 = 196$.',
      answer: '$x = 7$ or $x = -7$',
      solution:
        'The $x^2$ is wearing a coefficient, so peel it off first: divide both sides by $4$ to get $x^2 = 49$. Then $x = 7$ or $x = -7$, because both square to $49$. Check forward in the original: $4 \\cdot 7^2 = 4 \\cdot 49 = 196$ ✓, and $4 \\cdot (-7)^2 = 4 \\cdot 49 = 196$ ✓. Taking the square root of $196$ before dividing would give $14$, which is not a solution: $4 \\cdot 196 = 784$, nowhere near $196$.',
    },
  ],
  // w2 — factor a monic quadratic by hunting for a sum and a product; the third
  //      variation flips both numbers negative.
  [
    {
      q: 'Factor $x^2 + 9x + 20$.',
      answer: '$(x + 4)(x + 5)$',
      solution:
        'We need two numbers that ADD to $9$ and MULTIPLY to $20$. Both the sum and the product are positive, so both numbers are positive. The pairs multiplying to $20$ are $1 \\cdot 20$ (sum $21$), $2 \\cdot 10$ (sum $12$), and $4 \\cdot 5$ (sum $9$) — the last one wins. Check forward by expanding: $(x + 4)(x + 5) = x^2 + 5x + 4x + 20 = x^2 + 9x + 20$ ✓.',
    },
    {
      q: 'Factor $x^2 + 11x + 24$.',
      answer: '$(x + 3)(x + 8)$',
      solution:
        'Hunt for two positive numbers with sum $11$ and product $24$. Try the pairs that multiply to $24$: $1 \\cdot 24$ (sum $25$), $2 \\cdot 12$ (sum $14$), $3 \\cdot 8$ (sum $11$) — found them — and $4 \\cdot 6$ (sum $10$). Check forward: $(x + 3)(x + 8) = x^2 + 8x + 3x + 24 = x^2 + 11x + 24$ ✓. Notice $4$ and $6$ have the right product but the wrong sum, so the product alone never settles it.',
    },
    {
      q: 'Factor $x^2 - 10x + 21$.',
      answer: '$(x - 3)(x - 7)$',
      solution:
        'The product $21$ is positive, so the two numbers share a sign; the sum $-10$ is negative, so that shared sign is MINUS. We need sum $-10$ and product $21$: the pairs are $-1$ and $-21$ (sum $-22$) or $-3$ and $-7$ (sum $-10$). Check forward: $(x - 3)(x - 7) = x^2 - 7x - 3x + 21 = x^2 - 10x + 21$ ✓. Using $+3$ and $+7$ would build $x^2 + 10x + 21$, with the middle term pointing the wrong way.',
    },
  ],
  // w3 — solve a monic quadratic whose constant is NEGATIVE, so the two numbers
  //      have opposite signs and the roots flip sign out of the factors.
  [
    {
      q: 'Solve $x^2 - 3x - 40 = 0$.',
      answer: '$x = 8$ or $x = -5$',
      solution:
        'We need two numbers with sum $-3$ and product $-40$. A negative product means opposite signs, and a negative sum means the bigger one is the negative one: $-8$ and $5$. So the equation becomes $(x - 8)(x + 5) = 0$, and a product is zero only when a factor is zero, giving $x = 8$ or $x = -5$. Watch the COPYING THE SIGN trap — the factor $(x + 5)$ produces the root $-5$. Check forward: $8^2 - 3(8) - 40 = 64 - 24 - 40 = 0$ ✓, and $(-5)^2 - 3(-5) - 40 = 25 + 15 - 40 = 0$ ✓.',
    },
    {
      q: 'Solve $x^2 + 4x - 45 = 0$.',
      answer: '$x = 5$ or $x = -9$',
      solution:
        'Sum $4$, product $-45$. Opposite signs again, and this time the sum is positive, so the bigger number is the positive one: $9$ and $-5$. Factor: $(x + 9)(x - 5) = 0$, so $x = -9$ or $x = 5$. Check forward: $5^2 + 4(5) - 45 = 25 + 20 - 45 = 0$ ✓, and $(-9)^2 + 4(-9) - 45 = 81 - 36 - 45 = 0$ ✓.',
    },
    {
      q: 'Solve $x^2 - 6x - 27 = 0$.',
      answer: '$x = 9$ or $x = -3$',
      solution:
        'We need sum $-6$ and product $-27$. The pairs multiplying to $-27$ are $\\pm 1$ with $\\mp 27$ and $\\pm 3$ with $\\mp 9$; the one summing to $-6$ is $-9$ and $3$. Factor: $(x - 9)(x + 3) = 0$, so $x = 9$ or $x = -3$. Check forward: $9^2 - 6(9) - 27 = 81 - 54 - 27 = 0$ ✓, and $(-3)^2 - 6(-3) - 27 = 9 + 18 - 27 = 0$ ✓.',
    },
  ],
  // w4 — pull out the common factor FIRST, then finish with difference of
  //      squares. Skipping step one leaves an unfactorable-looking mess.
  [
    {
      q: 'Factor $3x^2 - 48$ completely.',
      answer: '$3(x - 4)(x + 4)$',
      solution:
        'Both terms share a factor of $3$, so pull it out before anything else: $3x^2 - 48 = 3(x^2 - 16)$. What is left inside is a difference of two squares, $x^2 - 4^2$, which always splits as $(x - 4)(x + 4)$. So the complete factorization is $3(x - 4)(x + 4)$. Check forward by expanding back: $(x - 4)(x + 4) = x^2 + 4x - 4x - 16 = x^2 - 16$, and $3(x^2 - 16) = 3x^2 - 48$ ✓.',
    },
    {
      q: 'Factor $2x^2 - 72$ completely.',
      answer: '$2(x - 6)(x + 6)$',
      solution:
        'Common factor first: every term is even, so $2x^2 - 72 = 2(x^2 - 36)$. Now $x^2 - 36 = x^2 - 6^2$ is a difference of squares, giving $(x - 6)(x + 6)$. Altogether, $2(x - 6)(x + 6)$. Check forward: $(x - 6)(x + 6) = x^2 - 36$, and doubling gives $2x^2 - 72$ ✓. Guessing $2(x - 36)(x + 36)$ would expand to $2x^2 - 2592$, which is a good reminder to square the number, not copy it.',
    },
    {
      q: 'Factor $6x^2 - 24$ completely.',
      answer: '$6(x - 2)(x + 2)$',
      solution:
        'The largest factor shared by $6x^2$ and $24$ is $6$: $6x^2 - 24 = 6(x^2 - 4)$. Inside, $x^2 - 4 = x^2 - 2^2$ is a difference of squares, so it splits into $(x - 2)(x + 2)$, and the answer is $6(x - 2)(x + 2)$. Check forward: $(x - 2)(x + 2) = x^2 + 2x - 2x - 4 = x^2 - 4$, and $6(x^2 - 4) = 6x^2 - 24$ ✓. Pulling out only $2$ would leave $2(3x^2 - 12)$, which is true but not finished — "completely" means keep going.',
    },
  ],
  // w5 — read the sum and product of the roots straight off the coefficients,
  //      dividing both by the leading coefficient a.
  [
    {
      q: 'Without solving, find the sum and the product of the roots of $3x^2 - 12x + 5 = 0$.',
      answer: 'Sum $= 4$, product $= \\frac{5}{3}$',
      solution:
        'Here $a = 3$, $b = -12$, and $c = 5$. The sum of the roots is $-\\frac{b}{a} = -\\frac{-12}{3} = 4$, and the product is $\\frac{c}{a} = \\frac{5}{3}$. Two things to keep hold of: the built-in minus sign on the sum, and the division by $a$ on BOTH numbers. Check forward: dividing the whole equation by $3$ gives $x^2 - 4x + \\frac{5}{3} = 0$, and a quadratic in the form $x^2 - (\\text{sum})x + (\\text{product}) = 0$ reads off its sum as $4$ and its product as $\\frac{5}{3}$ ✓.',
    },
    {
      q: 'Without solving, find the sum and the product of the roots of $2x^2 + 5x - 12 = 0$.',
      answer: 'Sum $= -\\frac{5}{2}$, product $= -6$',
      solution:
        'With $a = 2$, $b = 5$, $c = -12$: the sum is $-\\frac{b}{a} = -\\frac{5}{2}$ and the product is $\\frac{c}{a} = \\frac{-12}{2} = -6$. Check forward — this one happens to factor, so we can meet the roots in person: $2x^2 + 5x - 12 = (2x - 3)(x + 4)$, whose roots are $\\frac{3}{2}$ and $-4$. Their sum is $\\frac{3}{2} - 4 = -\\frac{5}{2}$ ✓ and their product is $\\frac{3}{2} \\cdot (-4) = -6$ ✓. Answering $-12$ for the product would forget to divide by $a$.',
    },
    {
      q: 'Without solving, find the sum and the product of the roots of $5x^2 - 8x + 3 = 0$.',
      answer: 'Sum $= \\frac{8}{5}$, product $= \\frac{3}{5}$',
      solution:
        'Read off $a = 5$, $b = -8$, $c = 3$. Sum $= -\\frac{b}{a} = -\\frac{-8}{5} = \\frac{8}{5}$, and product $= \\frac{c}{a} = \\frac{3}{5}$. Check forward with the actual roots: $5x^2 - 8x + 3 = (5x - 3)(x - 1)$, so the roots are $\\frac{3}{5}$ and $1$. Their sum is $\\frac{3}{5} + 1 = \\frac{8}{5}$ ✓ and their product is $\\frac{3}{5} \\cdot 1 = \\frac{3}{5}$ ✓. Notice the sum came out POSITIVE even though $b$ was negative — that is the minus sign in the formula doing its job.',
    },
  ],
  // w6 — solve with a leading coefficient: split the middle term using two
  //      numbers with product ac, then group. One root is a fraction.
  [
    {
      q: 'Solve $2x^2 - 5x - 12 = 0$.',
      answer: '$x = 4$ or $x = -\\frac{3}{2}$',
      solution:
        'With $a = 2$ we hunt for two numbers whose product is $ac = 2 \\cdot (-12) = -24$ and whose sum is $b = -5$: those are $-8$ and $3$. Split the middle term and group: $2x^2 - 8x + 3x - 12 = 2x(x - 4) + 3(x - 4) = (2x + 3)(x - 4) = 0$. From $2x + 3 = 0$ we get $x = -\\frac{3}{2}$ — solve the little equation all the way, do not just flip the $3$ — and from $x - 4 = 0$ we get $x = 4$. Check forward: $2(4)^2 - 5(4) - 12 = 32 - 20 - 12 = 0$ ✓, and $2\\left(\\frac{9}{4}\\right) - 5\\left(-\\frac{3}{2}\\right) - 12 = \\frac{9}{2} + \\frac{15}{2} - 12 = 12 - 12 = 0$ ✓.',
    },
    {
      q: 'Solve $3x^2 - 7x - 6 = 0$.',
      answer: '$x = 3$ or $x = -\\frac{2}{3}$',
      solution:
        'We need product $ac = 3 \\cdot (-6) = -18$ and sum $-7$: the numbers $-9$ and $2$. Split and group: $3x^2 - 9x + 2x - 6 = 3x(x - 3) + 2(x - 3) = (3x + 2)(x - 3) = 0$. So $3x = -2$, giving $x = -\\frac{2}{3}$, or $x = 3$. Check forward: $3(3)^2 - 7(3) - 6 = 27 - 21 - 6 = 0$ ✓, and $3 \\cdot \\frac{4}{9} - 7\\left(-\\frac{2}{3}\\right) - 6 = \\frac{4}{3} + \\frac{14}{3} - 6 = 6 - 6 = 0$ ✓.',
    },
    {
      q: 'Solve $5x^2 + 9x - 2 = 0$.',
      answer: '$x = \\frac{1}{5}$ or $x = -2$',
      solution:
        'Product $ac = 5 \\cdot (-2) = -10$ and sum $9$: the numbers $10$ and $-1$. Split the middle term and group: $5x^2 + 10x - x - 2 = 5x(x + 2) - 1(x + 2) = (5x - 1)(x + 2) = 0$. That gives $5x = 1$, so $x = \\frac{1}{5}$, or $x = -2$. Check forward: $5\\left(\\frac{1}{25}\\right) + 9\\left(\\frac{1}{5}\\right) - 2 = \\frac{1}{5} + \\frac{9}{5} - 2 = 2 - 2 = 0$ ✓, and $5(-2)^2 + 9(-2) - 2 = 20 - 18 - 2 = 0$ ✓. Grouping needs the two brackets to match exactly — that is why the $-1$ is factored out rather than $+1$.',
    },
  ],
  // w7 — the identity r^2 + s^2 = (r + s)^2 - 2rs, fed by the coefficients. The
  //      third variation has a NEGATIVE product, so subtracting 2rs adds.
  [
    {
      q: 'If $r$ and $s$ are the roots of $x^2 - 8x + 5 = 0$, find $r^2 + s^2$.',
      answer: '$54$',
      solution:
        'The coefficients hand us the sum and product for free: $r + s = 8$ and $rs = 5$. The roots themselves are ugly, but we never need them, because $r^2 + s^2 = (r + s)^2 - 2rs$ — expand $(r + s)^2 = r^2 + 2rs + s^2$ and you can see the extra $2rs$ that has to come back off. Substitute: $8^2 - 2(5) = 64 - 10 = 54$. Check forward: the roots really are $4 + \\sqrt{11}$ and $4 - \\sqrt{11}$, and $(4 + \\sqrt{11})^2 + (4 - \\sqrt{11})^2 = (16 + 8\\sqrt{11} + 11) + (16 - 8\\sqrt{11} + 11) = 54$ ✓.',
    },
    {
      q: 'If $r$ and $s$ are the roots of $x^2 + 5x + 3 = 0$, find $r^2 + s^2$.',
      answer: '$19$',
      solution:
        'From the coefficients, $r + s = -5$ (remember the minus sign — it is $-b$, and $b$ is $+5$) and $rs = 3$. Then $r^2 + s^2 = (r + s)^2 - 2rs = (-5)^2 - 2(3) = 25 - 6 = 19$. Squaring the negative sum makes it positive, which is exactly right: $r^2$ and $s^2$ can never add to something negative. Check forward: the roots are $\\frac{-5 + \\sqrt{13}}{2}$ and $\\frac{-5 - \\sqrt{13}}{2}$, and their squares are $\\frac{25 - 10\\sqrt{13} + 13}{4}$ and $\\frac{25 + 10\\sqrt{13} + 13}{4}$, which add to $\\frac{76}{4} = 19$ ✓.',
    },
    {
      q: 'If $r$ and $s$ are the roots of $x^2 + 6x - 5 = 0$, find $r^2 + s^2$.',
      answer: '$46$',
      solution:
        'Read off $r + s = -6$ and $rs = -5$. Now be careful with the identity: $r^2 + s^2 = (r + s)^2 - 2rs = (-6)^2 - 2(-5) = 36 + 10 = 46$. Subtracting a negative ADDS, so this answer is bigger than $(r + s)^2$, not smaller. Check forward: the roots are $-3 + \\sqrt{14}$ and $-3 - \\sqrt{14}$, and $(9 - 6\\sqrt{14} + 14) + (9 + 6\\sqrt{14} + 14) = 46$ ✓.',
    },
  ],
  // w8 — quartic in disguise: substitute y = x^2, solve, then travel back to x.
  //      The third variation produces a y that no real x can make.
  [
    {
      q: 'Find all real solutions of $x^4 - 20x^2 + 64 = 0$.',
      answer: '$x = 2$, $x = -2$, $x = 4$, or $x = -4$',
      solution:
        'Let $y = x^2$. Then $x^4 = (x^2)^2 = y^2$, and the equation turns into the friendly $y^2 - 20y + 64 = 0$. We need sum $-20$ and product $64$: the numbers $-4$ and $-16$, so $(y - 4)(y - 16) = 0$ and $y = 4$ or $y = 16$. Do not stop here — that is THE HALFWAY STOP. Travel back: $x^2 = 4$ gives $x = \\pm 2$, and $x^2 = 16$ gives $x = \\pm 4$, four solutions in all. Check forward: $2^4 - 20(2^2) + 64 = 16 - 80 + 64 = 0$ ✓, and $4^4 - 20(4^2) + 64 = 256 - 320 + 64 = 0$ ✓. The negatives work automatically, since only even powers of $x$ appear.',
    },
    {
      q: 'Find all real solutions of $x^4 - 34x^2 + 225 = 0$.',
      answer: '$x = 3$, $x = -3$, $x = 5$, or $x = -5$',
      solution:
        'Substitute $y = x^2$ so that $x^4 = y^2$: the equation becomes $y^2 - 34y + 225 = 0$. Two numbers with sum $-34$ and product $225$: $-9$ and $-25$. So $(y - 9)(y - 25) = 0$ and $y = 9$ or $y = 25$. Undo the substitution: $x^2 = 9$ gives $x = \\pm 3$ and $x^2 = 25$ gives $x = \\pm 5$. Check forward: $3^4 - 34(3^2) + 225 = 81 - 306 + 225 = 0$ ✓, and $5^4 - 34(5^2) + 225 = 625 - 850 + 225 = 0$ ✓.',
    },
    {
      q: 'Find all real solutions of $x^4 = 11x^2 + 80$.',
      answer: '$x = 4$ or $x = -4$',
      solution:
        'First move everything to one side, because factoring needs a zero: $x^4 - 11x^2 - 80 = 0$. Now let $y = x^2$: $y^2 - 11y - 80 = 0$. Sum $-11$, product $-80$: the numbers $-16$ and $5$, so $(y - 16)(y + 5) = 0$ and $y = 16$ or $y = -5$. Travelling back, $x^2 = 16$ gives $x = \\pm 4$ — but $x^2 = -5$ gives NOTHING real, because a real number squared is never negative. So only two solutions survive. Check forward in the original: $4^4 = 256$ and $11(4^2) + 80 = 176 + 80 = 256$ ✓; the same arithmetic works for $x = -4$, since $(-4)^2 = 16$ too ✓.',
    },
  ],
  // w9 — rectangle story: one side described in terms of the other, area given.
  //      The negative root is always named and thrown out. The last variation
  //      asks for the perimeter instead of the dimensions.
  [
    {
      q: 'A rectangular vegetable patch is $4$ metres longer than it is wide, and its area is $96$ square metres. Find its dimensions.',
      answer: 'Width $8$ metres and length $12$ metres',
      solution:
        'Give the unknown a name: let the width be $w$ metres, so the length is $w + 4$ metres. Area is width times length, so $w(w + 4) = 96$. Expand and move everything to one side: $w^2 + 4w - 96 = 0$. We need sum $4$ and product $-96$: the numbers $12$ and $-8$, so $(w + 12)(w - 8) = 0$ and $w = -12$ or $w = 8$. A garden cannot be $-12$ metres wide, so that root is thrown out even though the algebra produced it. The width is $8$ metres and the length is $8 + 4 = 12$ metres. Check forward: $8 \\cdot 12 = 96$ square metres ✓, and $12$ really is $4$ more than $8$ ✓.',
    },
    {
      q: 'A rectangular rug is $5$ feet longer than it is wide and covers $66$ square feet of floor. Find its dimensions.',
      answer: 'Width $6$ feet and length $11$ feet',
      solution:
        'Let the width be $w$ feet; then the length is $w + 5$ feet, and the area gives $w(w + 5) = 66$. Rearranged: $w^2 + 5w - 66 = 0$. Sum $5$, product $-66$: the numbers $11$ and $-6$, so $(w + 11)(w - 6) = 0$ and $w = -11$ or $w = 6$. A rug cannot have a width of $-11$ feet, so we reject that root and keep $w = 6$. The rug is $6$ feet wide and $6 + 5 = 11$ feet long. Check forward: $6 \\cdot 11 = 66$ square feet ✓, and the length beats the width by exactly $5$ ✓.',
    },
    {
      q: 'A rectangular poster is $7$ centimetres taller than it is wide, and its area is $120$ square centimetres. What is its perimeter?',
      answer: '$46$ centimetres',
      solution:
        'The question asks for the perimeter, but we still have to find the sides first. Let the width be $w$ centimetres, so the height is $w + 7$ centimetres and $w(w + 7) = 120$, that is $w^2 + 7w - 120 = 0$. We need sum $7$ and product $-120$: the numbers $15$ and $-8$, so $(w + 15)(w - 8) = 0$ and $w = -15$ or $w = 8$. A width of $-15$ centimetres is impossible, so $w = 8$ and the height is $15$. Now finish the actual question: the perimeter is $2(8 + 15) = 2 \\cdot 23 = 46$ centimetres. Check forward: $8 \\cdot 15 = 120$ square centimetres ✓, the height is $7$ more than the width ✓, and walking all four sides gives $8 + 15 + 8 + 15 = 46$ ✓.',
    },
  ],
  // w10 — the roots are related to each other; use the sum from the coefficients
  //      to pin them down, then read k as their product. The hardest item.
  [
    {
      q: 'One root of $x^2 - 15x + k = 0$ is twice the other. Find $k$.',
      answer: '$k = 50$',
      solution:
        'Name the smaller root $r$; then the other is $2r$. For $x^2 + bx + c = 0$ the roots add to $-b$, so here they add to $15$: $r + 2r = 3r = 15$, giving $r = 5$. The roots are $5$ and $10$. And the roots multiply to $c$, which is $k$, so $k = 5 \\cdot 10 = 50$. Check forward: $x^2 - 15x + 50 = (x - 5)(x - 10)$, which really does have roots $5$ and $10$, and $10$ really is twice $5$ ✓.',
    },
    {
      q: 'One root of $x^2 + 9x + k = 0$ is twice the other. Find $k$.',
      answer: '$k = 18$',
      solution:
        'Let the roots be $r$ and $2r$. Their sum is $-b = -9$, so $3r = -9$ and $r = -3$ — a NEGATIVE root, which is fine; "twice" simply means $2 \\cdot (-3) = -6$. The roots are $-3$ and $-6$, and $k$ is their product: $k = (-3)(-6) = 18$, positive because two negatives multiply to a positive. Check forward: $x^2 + 9x + 18 = (x + 3)(x + 6)$, whose roots are $-3$ and $-6$ ✓, and $-6$ is twice $-3$ ✓.',
    },
    {
      q: 'One root of $x^2 - 16x + k = 0$ is three times the other. Find $k$.',
      answer: '$k = 48$',
      solution:
        'This time call the roots $r$ and $3r$, so their sum is $4r$, not $3r$ — count the copies carefully. The coefficients say the sum is $16$, so $4r = 16$ and $r = 4$, making the roots $4$ and $12$. Then $k$ is the product: $k = 4 \\cdot 12 = 48$. Check forward: $x^2 - 16x + 48 = (x - 4)(x - 12)$, roots $4$ and $12$ ✓, and $12$ is three times $4$ ✓.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 10,
  worksheet,
}
