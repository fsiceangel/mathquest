// Introduction to Algebra chapter 12 — variations for the chapter worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE: each variation carries a question, an
//    `answer` STRING, and a solution. Nothing is offered to pick from, so all of
//    the teaching lives in the solution. There are no `choices` keys here.
//  - Every key was worked out by hand and then confirmed a SECOND, independent
//    way: a simplified root is squared back, a product is redone with the
//    $(ac-bd) + (ad+bc)i$ rule, a quotient is multiplied back into the divisor,
//    a power of $i$ is recomputed through $i^2 = -1$ instead of $i^4 = 1$, and
//    the roots of a quadratic are tested against the sum-and-product rule as
//    well as by substitution.
//  - Answers are written so there is exactly one sensible way to fill the blank:
//    complex numbers appear in $a + bi$ form, radicals are fully simplified, and
//    when an equation has two solutions BOTH are named.
//  - A variation changes the numbers AND, where it makes sense, the direction:
//    build the quadratic from its roots instead of solving it, hand back the
//    number that was squared, multiply where the base problem divided.
//  - Five traps run through the file. THE ROOT SHORTCUT: $\sqrt{a}\sqrt{b} =
//    \sqrt{ab}$ is only legal when neither number is negative, and using it on
//    two negatives flips the sign. THE VANISHING $i^2$: every $i^2$ must turn
//    into $-1$, and a leftover $i^2$ (or one quietly read as $+1$) wrecks the
//    real part. THE HALF-DONE MINUS: a subtraction sign belongs to BOTH parts of
//    the number behind it. THE MISSING TWIN: a square equal to a negative has
//    two complex roots, never one. THE MISSING MIDDLE: squaring $a \pm bi$ needs
//    the $2ab$ term.
//  - The base worksheet carries no figures, so neither does this file.

const worksheet = [
  // w1 — square roots of negative numbers. The middle variation runs the rule
  //      backwards, and the last one hides a perfect square inside the radicand.
  [
    {
      q: 'Simplify $\\sqrt{-121}$.',
      answer: '$11i$',
      solution:
        'The rule for a positive $k$ is $\\sqrt{-k} = i\\sqrt{k}$, so $\\sqrt{-121} = i\\sqrt{121} = 11i$. Check it a second way by squaring the answer, since squaring undoes a square root: $(11i)^2 = 121i^2 = 121 \\times (-1) = -121$ ✓, exactly what was under the radical. The trap is answering $-11$. That would need $(-11)^2 = -121$, but a negative times a negative is positive, so $(-11)^2 = +121$ ✗. No number on the number line can do this job, which is precisely why $i$ was invented.',
    },
    {
      q: 'A positive number $k$ satisfies $\\sqrt{-k} = 15i$. What is $k$?',
      answer: '$225$',
      solution:
        'This runs the rule backwards. Since $\\sqrt{-k} = i\\sqrt{k}$, we need $i\\sqrt{k} = 15i$, so $\\sqrt{k} = 15$ and therefore $k = 15^2 = 225$. Check forward: $\\sqrt{-225} = i\\sqrt{225} = 15i$ ✓. Check once more by squaring: $(15i)^2 = 225i^2 = -225$ ✓, and $-225$ is indeed $-k$. The trap is answering $-225$: the minus sign is already written inside the radical in $\\sqrt{-k}$, and the question said $k$ itself is positive.',
    },
    {
      q: 'Simplify $\\sqrt{-98}$.',
      answer: '$7i\\sqrt{2}$',
      solution:
        'There are two jobs here, so do them one at a time. First the minus sign: $\\sqrt{-98} = i\\sqrt{98}$. Then tidy the root — $98 = 49 \\times 2$ and $49$ is a perfect square, so $\\sqrt{98} = \\sqrt{49}\\sqrt{2} = 7\\sqrt{2}$ (both numbers here are positive, so that split is legal). Putting the pieces together gives $7i\\sqrt{2}$. Check by squaring: $(7i\\sqrt{2})^2 = 49 \\cdot i^2 \\cdot 2 = 49(-1)(2) = -98$ ✓. Stopping at $i\\sqrt{98}$ leaves the answer half simplified, and writing $7\\sqrt{2}$ without the $i$ throws away the whole point of the problem.',
    },
  ],
  // w2 — powers of i reduced with the cycle of four. The middle variation asks
  //      for the EXPONENT instead of the value, and the last lands on remainder 0.
  [
    {
      q: 'Compute $i^{111}$.',
      answer: '$-i$',
      solution:
        'The powers of $i$ march around a circle of length four — $i, -1, -i, 1$ — and then start over, so only the remainder of the exponent divided by $4$ matters. Here $111 = 4 \\times 27 + 3$, a remainder of $3$, so $i^{111} = (i^4)^{27} \\cdot i^3 = i^3 = -i$. Check a second way that never touches $i^4$: $i^{111} = (i^2)^{55} \\cdot i = (-1)^{55} \\cdot i = -i$ ✓, because $55$ is odd. The trap is using the QUOTIENT instead of the remainder: $111 \\div 4$ gives $27$, but $i^{27}$ is not the answer — it is the leftover $3$ that picks the spot on the circle.',
    },
    {
      q: 'For exactly one exponent $n$ with $50 \\le n \\le 53$, the power $i^n$ equals $-i$. Which $n$ is it?',
      answer: '$n = 51$',
      solution:
        'Walk the four exponents through the cycle. $50 = 4 \\times 12 + 2$, so $i^{50} = i^2 = -1$. Then $i^{51} = i^3 = -i$ ✓, $i^{52} = i^4 = 1$, and $i^{53} = i^5 = i$. Only $n = 51$ works, and four exponents in a row always hand out all four values exactly once. Check $n = 51$ a second way: $i^{51} = (i^2)^{25} \\cdot i = (-1)^{25} \\cdot i = -i$ ✓. The trap is expecting $-i$ at an even exponent: an even power of $i$ is always real ($1$ or $-1$) and an odd power is always imaginary ($i$ or $-i$).',
    },
    {
      q: 'Compute $i^{68}$.',
      answer: '$1$',
      solution:
        'Divide the exponent by $4$: $68 = 4 \\times 17$ with nothing left over. A remainder of zero means we land on $i^4$, so $i^{68} = (i^4)^{17} = 1^{17} = 1$. Check a second way with $i^2$: $i^{68} = (i^2)^{34} = (-1)^{34} = 1$ ✓, since raising $-1$ to an even power gives $1$. The trap is reading a remainder of $0$ as an answer of $0$. A power of $i$ is never zero — it is always one of the four values $i$, $-1$, $-i$, $1$.',
    },
  ],
  // w3 — adding and subtracting in a + bi form. One sum, one difference, and one
  //      that asks for the MISSING addend.
  [
    {
      q: 'Compute $(7 - 4i) + (-2 + 9i)$.',
      answer: '$5 + 5i$',
      solution:
        'Real parts travel with real parts and imaginary parts with imaginary parts — they ride in separate lanes and never merge. Real: $7 + (-2) = 5$. Imaginary: $-4 + 9 = 5$. The sum is $5 + 5i$. Check a second way by dropping the brackets and regrouping the four terms as $7 - 2 - 4i + 9i$: the plain numbers give $5$ and the $i$ terms give $5i$ ✓. The trap is squashing the answer into a single number like $10$; $5 + 5i$ can no more be combined than $5 + 5x$ can.',
    },
    {
      q: 'Compute $(5 - 3i) - (8 + 6i)$.',
      answer: '$-3 - 9i$',
      solution:
        'The subtraction sign belongs to BOTH parts of $8 + 6i$, so the expression is really $5 - 3i - 8 - 6i$. Real: $5 - 8 = -3$. Imaginary: $-3 - 6 = -9$. The difference is $-3 - 9i$. Check the answer by adding it back to what we subtracted: $(-3 - 9i) + (8 + 6i) = 5 - 3i$ ✓, which is exactly where we started. THE HALF-DONE MINUS is the trap here: handing the minus only to the $8$ gives $-3 + 3i$, and adding that back produces $5 + 9i$ ✗, not the original number.',
    },
    {
      q: 'What complex number must be added to $4 - 7i$ to give $10 + 2i$?',
      answer: '$6 + 9i$',
      solution:
        'Call the mystery number $z$. Undoing an addition means subtracting, so $z = (10 + 2i) - (4 - 7i)$. Real: $10 - 4 = 6$. Imaginary: $2 - (-7) = 2 + 7 = 9$. So $z = 6 + 9i$. Check forward, which is the direction the question actually describes: $(4 - 7i) + (6 + 9i) = 10 + 2i$ ✓. The double negative is where slips happen — subtracting $-7i$ ADDS $7i$, so the imaginary part grows rather than shrinks. Answering $6 - 5i$ means that sign was missed.',
    },
  ],
  // w4 — products of pure imaginary numbers, where the answer lands back on the
  //      real line. The middle one is the chapter's signature radical trap, and
  //      the last asks for the hidden factor.
  [
    {
      q: 'Compute $(5i)(7i)$.',
      answer: '$-35$',
      solution:
        'Multiply the plain numbers and the $i$s separately: $5 \\times 7 = 35$ and $i \\times i = i^2$, so the product is $35i^2$. Now use the golden rule $i^2 = -1$: the product is $-35$, a real number with no $i$ left anywhere. Check with the general multiplication rule $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$, taking $a = 0$, $b = 5$, $c = 0$, $d = 7$: the real part is $0 - 35 = -35$ and the imaginary part is $0 + 0 = 0$ ✓. THE VANISHING $i^2$ is the trap: leaving $35i^2$ as the final answer, or reading it as $+35$, throws away the sign flip that makes imaginary numbers interesting.',
    },
    {
      q: 'Compute $\\sqrt{-16} \\cdot \\sqrt{-25}$.',
      answer: '$-20$',
      solution:
        'Convert each radical into an imaginary number FIRST, then multiply: $\\sqrt{-16} = 4i$ and $\\sqrt{-25} = 5i$, so the product is $(4i)(5i) = 20i^2 = -20$. This is THE ROOT SHORTCUT trap, the signature mistake of this chapter: the rule $\\sqrt{a}\\sqrt{b} = \\sqrt{ab}$ only holds when neither number is negative. Applying it here would give $\\sqrt{(-16)(-25)} = \\sqrt{400} = 20$ ✗ — the right size but the wrong sign. Check the real answer by dividing back: since $i \\times (-i) = -i^2 = 1$, we have $\\dfrac{1}{i} = -i$, so $\\dfrac{-20}{4i} = -5 \\cdot \\dfrac{1}{i} = -5(-i) = 5i$ ✓, which is the other factor.',
    },
    {
      q: 'Find the real number $k$ so that $(3i)(ki) = 21$.',
      answer: '$k = -7$',
      solution:
        'Multiply first and leave $k$ sitting where it is: $(3i)(ki) = 3k \\, i^2 = -3k$. We need $-3k = 21$, so $k = -7$. Check forward: $(3i)(-7i) = -21i^2 = -21 \\times (-1) = 21$ ✓. The trap is answering $k = 7$, which feels right because $3 \\times 7 = 21$ — but $(3i)(7i) = 21i^2 = -21$ ✗. Multiplying two pure imaginary numbers always flips the sign of the product of their coefficients, so to finish POSITIVE you must start with opposite signs.',
    },
  ],
  // w5 — conjugates. One straight, one asking for the number whose conjugate is
  //      given, and one where the real part is zero.
  [
    {
      q: 'What is the conjugate of $9 - 4i$?',
      answer: '$9 + 4i$',
      solution:
        'The conjugate keeps the real part untouched and flips the sign of the imaginary part only, so $9 - 4i$ becomes $9 + 4i$. Check with the property that makes conjugates worth having: a number times its conjugate must be the real number $a^2 + b^2$. Multiply them out: $(9 - 4i)(9 + 4i) = 81 + 36i - 36i - 16i^2 = 81 + 16 = 97$, and $9^2 + 4^2 = 81 + 16 = 97$ ✓. The trap is answering $-9 + 4i$: flipping BOTH signs is negation, a different move that would send the number to the opposite side of zero.',
    },
    {
      q: 'The conjugate of a complex number $z$ is $-5 - 8i$. What is $z$?',
      answer: '$-5 + 8i$',
      solution:
        'Conjugating is a mirror, and stepping through a mirror twice puts you back where you began. So $z$ is the conjugate of $-5 - 8i$, which is $-5 + 8i$. Check forward: the conjugate of $-5 + 8i$ keeps the $-5$ and flips $+8i$ to $-8i$, giving $-5 - 8i$ ✓, exactly the number the question named. Check a second way with the product rule: $z$ times its conjugate should be $(-5)^2 + 8^2 = 89$, and $(-5 + 8i)(-5 - 8i) = 25 + 40i - 40i - 64i^2 = 25 + 64 = 89$ ✓. Notice the real part stayed negative the whole time — the conjugate never touches it.',
    },
    {
      q: 'What is the conjugate of $-8i$?',
      answer: '$8i$',
      solution:
        'Write the number in standard form before doing anything: $-8i = 0 + (-8)i$, so the real part is $0$ and the imaginary part is $-8$. Flip the sign of the imaginary part only and you get $0 + 8i$, or simply $8i$. Check with the product rule: a number times its conjugate should be $a^2 + b^2 = 0^2 + (-8)^2 = 64$, and $(-8i)(8i) = -64i^2 = 64$ ✓. Two traps live here. Answering $-8i$ assumes a number with no real part has no conjugate — it does. Answering $8$ drops the $i$; the conjugate of a pure imaginary number is still pure imaginary.',
    },
  ],
  // w6 — multiplying two complex numbers. The middle one is a SQUARE, and the
  //      last one leads with a negative real part.
  [
    {
      q: 'Compute $(4 + i)(2 - 3i)$.',
      answer: '$11 - 10i$',
      solution:
        'Distribute all four products, exactly as you would for two binomials: $4 \\cdot 2 + 4 \\cdot (-3i) + i \\cdot 2 + i \\cdot (-3i) = 8 - 12i + 2i - 3i^2$. Replace $i^2$ with $-1$, so $-3i^2$ becomes $+3$. Collect: real $8 + 3 = 11$, imaginary $-12i + 2i = -10i$. The product is $11 - 10i$. Check with the rule $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$: the real part is $4 \\cdot 2 - 1 \\cdot (-3) = 8 + 3 = 11$ and the imaginary part is $4 \\cdot (-3) + 1 \\cdot 2 = -10$ ✓. THE VANISHING $i^2$ trap would leave $-3i^2$ as $-3$ and report $5 - 10i$ — a real part off by $6$.',
    },
    {
      q: 'Compute $(3 - 2i)^2$.',
      answer: '$5 - 12i$',
      solution:
        'Squaring means multiplying the number by itself, so use $(a - b)^2 = a^2 - 2ab + b^2$ with $a = 3$ and $b = 2i$: $3^2 - 2(3)(2i) + (2i)^2 = 9 - 12i + 4i^2$. Since $4i^2 = -4$, the answer is $5 - 12i$. Check by plain distribution instead of the formula: $(3 - 2i)(3 - 2i) = 9 - 6i - 6i + 4i^2 = 9 - 12i - 4 = 5 - 12i$ ✓. THE MISSING MIDDLE is the trap: squaring only the two pieces gives $9 + 4i^2 = 5$ and loses the entire $-12i$, so the answer would not even be a complex number any more.',
    },
    {
      q: 'Compute $(-1 + 3i)(2 + 4i)$.',
      answer: '$-14 + 2i$',
      solution:
        'Distribute carefully, carrying the leading minus along: $(-1)(2) + (-1)(4i) + 3i(2) + 3i(4i) = -2 - 4i + 6i + 12i^2$. Then $12i^2 = -12$. Real: $-2 - 12 = -14$. Imaginary: $-4i + 6i = 2i$. The product is $-14 + 2i$. Check with the rule $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$: the real part is $(-1)(2) - (3)(4) = -2 - 12 = -14$ and the imaginary part is $(-1)(4) + (3)(2) = -4 + 6 = 2$ ✓. Watch the direction the last term pushes: $12i^2$ makes the real part MORE negative, so an answer of $10 + 2i$ means $i^2$ was read as $+1$.',
    },
  ],
  // w7 — divide by multiplying with the conjugate. One answer is pure imaginary,
  //      one has a negative real part, and one starts from a plain numerator.
  [
    {
      q: 'Write $\\dfrac{5 + 10i}{2 - i}$ in the form $a + bi$.',
      answer: '$5i$',
      solution:
        'Multiply top and bottom by the conjugate of the bottom, $2 + i$ — that is multiplying by $1$ in disguise, so the value never changes. Bottom: $(2 - i)(2 + i) = 2^2 + 1^2 = 5$, a real number as promised. Top: $(5 + 10i)(2 + i) = 10 + 5i + 20i + 10i^2 = 10 + 25i - 10 = 25i$. So the quotient is $\\dfrac{25i}{5} = 5i$, which is $0 + 5i$ — the real part is honestly zero here. Check by multiplying back: $5i(2 - i) = 10i - 5i^2 = 5 + 10i$ ✓, the numerator we started with. The trap is multiplying by the denominator itself instead of its conjugate: $(2 - i)(2 - i) = 3 - 4i$ still carries an $i$, so nothing has been gained.',
    },
    {
      q: 'Write $\\dfrac{-1 + 7i}{3 - i}$ in the form $a + bi$.',
      answer: '$-1 + 2i$',
      solution:
        'The conjugate of $3 - i$ is $3 + i$. Bottom: $(3 - i)(3 + i) = 3^2 + 1^2 = 10$. Top: $(-1 + 7i)(3 + i) = -3 - i + 21i + 7i^2 = -3 + 20i - 7 = -10 + 20i$. Now divide EVERY part by $10$: $\\dfrac{-10 + 20i}{10} = -1 + 2i$. Check by multiplying back into the divisor: $(-1 + 2i)(3 - i) = -3 + i + 6i - 2i^2 = -3 + 7i + 2 = -1 + 7i$ ✓, the original numerator. Dividing only the first term would give $-1 + 20i$, and that check would fail loudly.',
    },
    {
      q: 'Write $\\dfrac{20}{3 - i}$ in the form $a + bi$.',
      answer: '$6 + 2i$',
      solution:
        'A bare number on top changes nothing about the method. Multiply top and bottom by the conjugate $3 + i$. Bottom: $3^2 + 1^2 = 10$. Top: $20(3 + i) = 60 + 20i$. So the quotient is $\\dfrac{60 + 20i}{10} = 6 + 2i$. Check by multiplying back: $(6 + 2i)(3 - i) = 18 - 6i + 6i - 2i^2 = 18 + 2 = 20$ ✓ — the middle terms cancel and $-2i^2$ adds $2$. The trap is splitting the fraction as $\\dfrac{20}{3} - \\dfrac{20}{i}$. A sum in the DENOMINATOR cannot be split apart like that, which is the whole reason the conjugate trick exists.',
    },
  ],
  // w8 — quadratics with complex roots. The last variation runs backwards:
  //      build the quadratic from the pair of roots it is supposed to have.
  [
    {
      q: 'Solve $x^2 + 8x + 25 = 0$.',
      answer: '$x = -4 + 3i$ or $x = -4 - 3i$',
      solution:
        'Complete the square. Half of $8$ is $4$ and $4^2 = 16$, so add $16$ to both sides of $x^2 + 8x = -25$: $x^2 + 8x + 16 = -25 + 16$, that is $(x + 4)^2 = -9$. A square equal to a negative number has no real answer, but it has two complex ones, since $(3i)^2 = 9i^2 = -9$ and $(-3i)^2 = -9$ as well. So $x + 4 = \\pm 3i$, giving $x = -4 + 3i$ or $x = -4 - 3i$. Check the first root by substituting: $(-4 + 3i)^2 = 16 - 24i + 9i^2 = 7 - 24i$, and $7 - 24i + 8(-4 + 3i) + 25 = 7 - 24i - 32 + 24i + 25 = 0$ ✓. Check both roots at once a completely different way: for $x^2 + bx + c$ the roots must add to $-b$ and multiply to $c$. They add to $-8$ ✓, and they multiply to $(-4)^2 + 3^2 = 25$ ✓, because a number times its conjugate is $a^2 + b^2$. THE MISSING TWIN is the trap — naming only $-4 + 3i$ leaves half the answer on the table.',
    },
    {
      q: 'Solve $x^2 - 6x + 34 = 0$.',
      answer: '$x = 3 + 5i$ or $x = 3 - 5i$',
      solution:
        'Half of $-6$ is $-3$, and $(-3)^2 = 9$, so $x^2 - 6x + 9 = -34 + 9$, giving $(x - 3)^2 = -25$. Then $x - 3 = \\pm 5i$, so $x = 3 + 5i$ or $x = 3 - 5i$. Substitute the first root to check: $(3 + 5i)^2 = 9 + 30i + 25i^2 = -16 + 30i$, and $-16 + 30i - 6(3 + 5i) + 34 = -16 + 30i - 18 - 30i + 34 = 0$ ✓. Check again without substituting at all: the two roots must add to $6$ and multiply to $34$. They add to $6$ ✓ and multiply to $3^2 + 5^2 = 34$ ✓. The trap is writing $\\sqrt{-25} = -5$. The square root of $-25$ is $5i$; the plus-or-minus in front comes from the two twins, not from the minus sign inside the radical.',
    },
    {
      q: 'A quadratic $x^2 + px + q = 0$ with real numbers $p$ and $q$ has the two solutions $x = -1 + 6i$ and $x = -1 - 6i$. Find $p$ and $q$.',
      answer: '$p = 2$ and $q = 37$',
      solution:
        'This is the same skill run backwards — build the quadratic from its roots instead of digging the roots out of it. If those two numbers are the solutions, the quadratic factors as $\\bigl(x - (-1 + 6i)\\bigr)\\bigl(x - (-1 - 6i)\\bigr) = (x + 1 - 6i)(x + 1 + 6i)$. Treat $x + 1$ as a single lump: this is a quantity times its conjugate, so it equals $(x + 1)^2 + 6^2 = x^2 + 2x + 1 + 36 = x^2 + 2x + 37$. That gives $p = 2$ and $q = 37$. Check a second way with the sum-and-product rule: the roots add to $-2$ and $p$ is the NEGATIVE of that sum, so $p = 2$ ✓; the roots multiply to $(-1)^2 + 6^2 = 37$, so $q = 37$ ✓. Check once more by solving the quadratic we just built: $(x + 1)^2 = -36$ gives $x = -1 \\pm 6i$ ✓, the very roots we were handed. The trap is setting $p$ equal to the sum itself and answering $p = -2$.',
    },
  ],
  // w9 — collect a sum of powers of i with coefficients attached. The last one
  //      pushes the exponents up so the cycle has to be used.
  [
    {
      q: 'Compute $i^2 + 2i^3 + 3i^4 + 4i^5$.',
      answer: '$2 + 2i$',
      solution:
        'Write out each power using the cycle: $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, and $i^5 = i$ because the cycle has restarted. The sum becomes $-1 + 2(-i) + 3(1) + 4(i) = -1 - 2i + 3 + 4i$. Real: $-1 + 3 = 2$. Imaginary: $-2i + 4i = 2i$. The total is $2 + 2i$. Check a different way by factoring $i^2$ out of every term first: $i^2(1 + 2i + 3i^2 + 4i^3) = -(1 + 2i - 3 - 4i) = -(-2 - 2i) = 2 + 2i$ ✓. The coefficients $2$, $3$, $4$ are ordinary numbers and never join the cycle — only the powers of $i$ do, so $2i^3$ means $2 \\times (-i)$, not $(2i)^3$.',
    },
    {
      q: 'Compute $5i^3 + 2i^4 - 3i^6$.',
      answer: '$5 - 5i$',
      solution:
        'Reduce each power with the cycle of four. $i^3 = -i$, so $5i^3 = -5i$. $i^4 = 1$, so $2i^4 = 2$. For $i^6$, the remainder of $6$ divided by $4$ is $2$, so $i^6 = i^2 = -1$, which makes $-3i^6 = -3 \\times (-1) = +3$. Collect: real $2 + 3 = 5$, imaginary $-5i$. The answer is $5 - 5i$. Check $i^6$ a second, independent way: $i^6 = (i^3)^2 = (-i)^2 = i^2 = -1$ ✓, and check $2i^4$ by writing $i^4 = i^2 \\cdot i^2 = (-1)(-1) = 1$ ✓. The double negative in $-3i^6$ is the trap: the minus written in front and the minus hiding inside $i^6$ multiply into a PLUS, so answering $-1 - 5i$ means one of them was counted twice.',
    },
    {
      q: 'Compute $i^{18} + 3i^{19} - 2i^{20}$.',
      answer: '$-3 - 3i$',
      solution:
        'Big exponents, same little cycle — only the remainder after dividing by $4$ matters. $18 = 4 \\times 4 + 2$, so $i^{18} = i^2 = -1$. Next, $19 = 4 \\times 4 + 3$, so $i^{19} = i^3 = -i$ and $3i^{19} = -3i$. Finally $20 = 4 \\times 5$ exactly, so $i^{20} = 1$ and $-2i^{20} = -2$. Collect: real $-1 - 2 = -3$, imaginary $-3i$. The answer is $-3 - 3i$. Check all three powers a second way using only $i^2 = -1$: $i^{18} = (i^2)^9 = (-1)^9 = -1$ ✓, $i^{20} = (i^2)^{10} = (-1)^{10} = 1$ ✓, and $i^{19} = i^{18} \\cdot i = -i$ ✓. A remainder of $0$ sends $i^{20}$ to $1$, never to $0$, so the $-2$ really does belong in the real part.',
    },
  ],
  // w10 — recover the real numbers a and b hiding inside a product or quotient.
  //       The last variation reverses the base problem: multiply, do not divide.
  [
    {
      q: 'Find real numbers $a$ and $b$ so that $(a + bi)(1 + 2i) = 10$.',
      answer: '$a = 2$ and $b = -4$',
      solution:
        'The unknown number is $\\dfrac{10}{1 + 2i}$. Multiply top and bottom by the conjugate $1 - 2i$: the bottom becomes $1^2 + 2^2 = 5$ and the top becomes $10(1 - 2i) = 10 - 20i$. So $a + bi = \\dfrac{10 - 20i}{5} = 2 - 4i$, which means $a = 2$ and $b = -4$. Check forward: $(2 - 4i)(1 + 2i) = 2 + 4i - 4i - 8i^2 = 2 + 8 = 10$ ✓. Check a second way with no division at all: expanding gives $(a + bi)(1 + 2i) = (a - 2b) + (2a + b)i$, and for that to equal $10 = 10 + 0i$ we need $2a + b = 0$ and $a - 2b = 10$. From $b = -2a$ the second equation becomes $a + 4a = 10$, so $a = 2$ and $b = -4$ ✓. The trap is answering $b = -4i$; $b$ is the real number sitting NEXT to the $i$, not the whole imaginary part.',
    },
    {
      q: 'Find real numbers $a$ and $b$ so that $(a + bi)(3 - i) = 5 + 5i$.',
      answer: '$a = 1$ and $b = 2$',
      solution:
        'Divide to isolate the unknown: $a + bi = \\dfrac{5 + 5i}{3 - i}$. Multiply top and bottom by the conjugate $3 + i$: the bottom is $3^2 + 1^2 = 10$ and the top is $(5 + 5i)(3 + i) = 15 + 5i + 15i + 5i^2 = 10 + 20i$. So $a + bi = \\dfrac{10 + 20i}{10} = 1 + 2i$, giving $a = 1$ and $b = 2$. Check forward: $(1 + 2i)(3 - i) = 3 - i + 6i - 2i^2 = 3 + 5i + 2 = 5 + 5i$ ✓. Check a second way by matching parts: $(a + bi)(3 - i) = (3a + b) + (3b - a)i$, so $3a + b = 5$ and $3b - a = 5$. The second equation gives $a = 3b - 5$, and feeding that into the first gives $3(3b - 5) + b = 5$, that is $10b - 15 = 5$, so $b = 2$ and then $a = 3(2) - 5 = 1$ ✓. Two complex numbers are equal only when BOTH parts match, which is why one equation was never going to be enough.',
    },
    {
      q: 'Find real numbers $a$ and $b$ so that $\\dfrac{a + bi}{2 + 3i} = 4 - i$.',
      answer: '$a = 11$ and $b = 10$',
      solution:
        'This one runs the usual problem backwards: the unknown is on TOP, so multiply instead of dividing. From $\\dfrac{a + bi}{2 + 3i} = 4 - i$ we get $a + bi = (4 - i)(2 + 3i)$. Distribute: $8 + 12i - 2i - 3i^2 = 8 + 10i + 3 = 11 + 10i$. So $a = 11$ and $b = 10$. Check by carrying out the division the long way: for $\\dfrac{11 + 10i}{2 + 3i}$, multiply top and bottom by $2 - 3i$; the bottom is $2^2 + 3^2 = 13$ and the top is $(11 + 10i)(2 - 3i) = 22 - 33i + 20i - 30i^2 = 52 - 13i$, so the quotient is $\\dfrac{52 - 13i}{13} = 4 - i$ ✓. The trap is treating $-3i^2$ as $-3$: it is $+3$, it lands in the REAL part, and missing it would give $a = 5$ instead of $11$.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 12,
  worksheet,
}
