// Introduction to Algebra chapter 13 — variations for the end-of-chapter
// challenge set. All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was worked out by hand and then confirmed a SECOND, independent
//    way: a root goes back into the ORIGINAL equation, a pair of roots is tested
//    against sum $= -\frac{b}{a}$ and product $= \frac{c}{a}$, a completed square
//    is expanded again, and a minimum is compared with the value at a neighbour.
//  - A completed-square identity is never checked at the vertex, where both sides
//    collapse — the test point is always somewhere the two sides carry weight.
//  - These are the chapter's hard problems, so a variation stays hard: leading
//    coefficients stay, the roots stay irrational or complex where the base
//    problem's were, and the final division by $2a$ is never free.
//  - Each distractor is one named mistake, and the name is stated at the end of
//    the solution. The traps that run through the whole file: DROPPING THE MINUS
//    BRANCH OF A SQUARE ROOT, STOPPING BEFORE THE DIVISION BY $2a$, DIVIDING ONLY
//    PART OF A NUMERATOR, USING $+b$ WHERE THE FORMULA SAYS $-b$, FORGETTING THAT
//    A FACTORED-OUT COEFFICIENT MULTIPLIES WHATEVER YOU ADD INSIDE, and ANSWERING
//    WHERE A MINIMUM HAPPENS INSTEAD OF WHAT IT IS.
//  - No two choices inside an item name the same number or the same value.

const challenge = [
  // c1 — unsquaring with $\pm$. One version reverses the question and hides the
  // shift; one puts a coefficient on $x$ so the final division still has to happen.
  [
    {
      q: 'Solve $(x+4)^2 = 121$.',
      choices: ['$x = 7$ only', '$x = 7$ or $x = -15$', '$x = -7$ or $x = 15$', '$x = 117$ or $x = -125$'],
      answer: 1,
      solution:
        'The quantity $x + 4$ squares to $121$, so $x + 4$ is either $11$ or $-11$: write $x + 4 = \\pm 11$. From $x + 4 = 11$ we get $x = 7$; from $x + 4 = -11$ we get $x = -15$. Check both in the original equation: $(7+4)^2 = 11^2 = 121$ ✓ and $(-15+4)^2 = (-11)^2 = 121$ ✓. Check a second, independent way — expand first: $x^2 + 8x + 16 = 121$ becomes $x^2 + 8x - 105 = 0$, whose roots must add to $-8$ and multiply to $-105$. Our pair does: $7 + (-15) = -8$ ✓ and $7 \\times (-15) = -105$ ✓. (The choice $x = 7$ only drops the minus branch of the square root, losing half the answer; the choice $x = -7$ or $x = 15$ shifts the wrong way, solving $x - 4 = \\pm 11$ as though the binomial were $x - 4$; the choice $x = 117$ or $x = -125$ never takes the square root of $121$ at all, writing $x = -4 \\pm 121$.)',
    },
    {
      q: 'The two solutions of $(x-a)^2 = 49$ are $x = 12$ and $x = -2$. What is $a$?',
      choices: ['$a = 7$', '$a = 10$', '$a = 5$', '$a = -5$'],
      answer: 2,
      solution:
        'Unsquaring gives $x - a = \\pm 7$, so the two solutions are $a + 7$ and $a - 7$ — they sit the same distance on either side of $a$. That means $a$ is exactly halfway between them: $a = \\frac{12 + (-2)}{2} = 5$. Check forward in the original equation: $(12-5)^2 = 7^2 = 49$ ✓ and $(-2-5)^2 = (-7)^2 = 49$ ✓. Check a different way, using the gap instead of the middle: the solutions differ by $12 - (-2) = 14$, and unsquaring always produces a gap of $2\\sqrt{49} = 14$ ✓, so the $49$ is consistent too. (The choice $a = 7$ reports $\\sqrt{49}$ instead of the centre, and $(x-7)^2 = 49$ would give $14$ and $0$, not $12$ and $-2$; the choice $a = 10$ takes the SUM of the two solutions and forgets to halve it; the choice $a = -5$ reads the binomial as $x + a$, flipping the sign of the shift.)',
    },
    {
      q: 'Solve $(3x-2)^2 = 25$.',
      choices: ['$x = 7$ or $x = -3$', '$x = 1$ or $x = -\\frac{7}{3}$', '$x = \\frac{7}{3}$ only', '$x = \\frac{7}{3}$ or $x = -1$'],
      answer: 3,
      solution:
        'Unsquare first: $3x - 2 = \\pm 5$. From $3x - 2 = 5$ we get $3x = 7$, so $x = \\frac{7}{3}$. From $3x - 2 = -5$ we get $3x = -3$, so $x = -1$. Check both in the original equation: $\\left(3 \\cdot \\frac{7}{3} - 2\\right)^2 = (7-2)^2 = 25$ ✓ and $(3(-1) - 2)^2 = (-5)^2 = 25$ ✓. Check independently by expanding: $9x^2 - 12x + 4 = 25$ gives $9x^2 - 12x - 21 = 0$, or $3x^2 - 4x - 7 = 0$ after dividing by $3$ — its roots must add to $\\frac{4}{3}$ and multiply to $-\\frac{7}{3}$, and $\\frac{7}{3} + (-1) = \\frac{4}{3}$ ✓ with $\\frac{7}{3} \\times (-1) = -\\frac{7}{3}$ ✓. (The choice $x = 7$ or $x = -3$ stops at $3x$ and forgets the final division by $3$; the choice $x = 1$ or $x = -\\frac{7}{3}$ solves $3x + 2 = \\pm 5$, flipping the sign of the $2$ inside; the choice $x = \\frac{7}{3}$ only drops the minus branch of the square root.)',
    },
  ],
  // c2 — completing the square as a rewrite. One version asks for a combination of
  // $h$ and $k$ instead of the form itself; one carries a leading coefficient, so
  // what you add inside is multiplied on the way out.
  [
    {
      q: 'Rewrite $x^2 + 14x + 20$ in the form $(x+h)^2 + k$.',
      choices: ['$(x+7)^2 - 29$', '$(x+7)^2 + 20$', '$(x+14)^2 - 29$', '$(x+7)^2 - 69$'],
      answer: 0,
      solution:
        'Half of $14$ is $7$, so the square you want is $(x+7)^2 = x^2 + 14x + 49$. That build-up hands you a constant of $49$, but the expression only has $20$, so you must give back the difference: $20 - 49 = -29$. The answer is $(x+7)^2 - 29$. Check by expanding: $x^2 + 14x + 49 - 29 = x^2 + 14x + 20$ ✓. Check a second way, at a test value where nothing collapses — take $x = 1$: the original is $1 + 14 + 20 = 35$, and the rewrite is $(1+7)^2 - 29 = 64 - 29 = 35$ ✓. (The choice $(x+7)^2 + 20$ builds the square but never pays for the $49$ it introduced — at $x = 1$ it reads $84$ ✗; the choice $(x+14)^2 - 29$ forgets to halve the $14$; the choice $(x+7)^2 - 69$ subtracts $49$ from $-20$ instead of from $+20$, flipping the sign of the constant it started with.)',
    },
    {
      q: 'When $x^2 - 10x + 32$ is written in the form $(x-h)^2 + k$, what is $h + k$?',
      choices: ['$37$', '$2$', '$12$', '$-2$'],
      answer: 2,
      solution:
        'Half of $-10$ is $-5$, so $(x-5)^2 = x^2 - 10x + 25$ and $h = 5$. Building that square used up $25$ of the $32$, leaving $k = 32 - 25 = 7$. So the form is $(x-5)^2 + 7$ and $h + k = 5 + 7 = 12$. Check the rewrite by expanding: $x^2 - 10x + 25 + 7 = x^2 - 10x + 32$ ✓. Check independently at $x = 2$, well away from the vertex: the original is $4 - 20 + 32 = 16$, and the rewrite is $(2-5)^2 + 7 = 9 + 7 = 16$ ✓. (The choice $37$ uses $k = 32$, never paying back the $25$ the square introduced; the choice $2$ reads $h$ as $-5$ from the binomial $x - 5$, but the form is $(x-h)^2$, so $h$ is $+5$; the choice $-2$ computes $k$ backwards as $25 - 32 = -7$.)',
    },
    {
      q: 'Rewrite $3x^2 - 18x + 4$ in the form $a(x-h)^2 + k$.',
      choices: ['$3(x-3)^2 - 5$', '$3(x-3)^2 + 4$', '$3(x-3)^2 - 27$', '$3(x-3)^2 - 23$'],
      answer: 3,
      solution:
        'Pull the $3$ out of the $x$ terms first: $3(x^2 - 6x) + 4$. Inside, half of $-6$ is $-3$ and $(-3)^2 = 9$, so you add $9$ inside — but the $3$ out front multiplies it, so you really added $3 \\times 9 = 27$ and must subtract $27$ outside to stay balanced: $3(x^2 - 6x + 9) + 4 - 27 = 3(x-3)^2 - 23$. Check by expanding: $3x^2 - 18x + 27 - 23 = 3x^2 - 18x + 4$ ✓. Check again at $x = 1$, away from the vertex: the original is $3 - 18 + 4 = -11$, and the rewrite is $3(1-3)^2 - 23 = 12 - 23 = -11$ ✓. (The choice $3(x-3)^2 - 5$ subtracts only the $9$ that went in, forgetting that the $3$ outside triples it; the choice $3(x-3)^2 + 4$ pays nothing back at all — at $x = 1$ it reads $16$ ✗; the choice $3(x-3)^2 - 27$ subtracts the $27$ correctly but loses the original constant $4$ on the way.)',
    },
  ],
  // c3 — the discriminant as a counter. One version hunts through four equations
  // for the one that dodges the reals; one hides the count behind a rearrangement.
  [
    {
      q: 'How many real solutions does $3x^2 - 12x + 12 = 0$ have?',
      choices: ['Two', 'One', 'None', 'Infinitely many'],
      answer: 1,
      solution:
        'Read off $a = 3$, $b = -12$, $c = 12$. The discriminant is $(-12)^2 - 4(3)(12) = 144 - 144 = 0$. A discriminant of zero means the $\\pm$ in the formula adds and subtracts nothing, so there is exactly ONE solution, $x = \\frac{12}{6} = 2$. Check without the discriminant at all: divide by $3$ to get $x^2 - 4x + 4 = (x-2)^2 = 0$, and only $0$ squares to $0$, so $x = 2$ is the lone root ✓. Confirm nothing else works by testing a nearby value: at $x = 3$ the left side is $27 - 36 + 12 = 3 \\ne 0$ ✗. (The choice Two comes from computing $4ac$ as $4 \\times 12 = 48$ and forgetting the $a$, which leaves $144 - 48 = 96 > 0$; the choice None comes from writing $b^2$ as $-12^2 = -144$ instead of $(-12)^2 = 144$, giving $-288 < 0$; the choice Infinitely many belongs to an identity like $0 = 0$ — a genuine quadratic has at most two solutions.)',
    },
    {
      q: 'Exactly one of these equations has NO real solutions. Which one?',
      choices: ['$3x^2 - 2x + 1 = 0$', '$x^2 - 4x + 4 = 0$', '$2x^2 + 5x - 1 = 0$', '$x^2 + 6x + 8 = 0$'],
      answer: 0,
      solution:
        'Compute one discriminant each. For $3x^2 - 2x + 1$: $(-2)^2 - 4(3)(1) = 4 - 12 = -8 < 0$, so no real solutions. For $x^2 - 4x + 4$: $16 - 16 = 0$, one solution. For $2x^2 + 5x - 1$: $25 - 4(2)(-1) = 25 + 8 = 33 > 0$, two solutions. For $x^2 + 6x + 8$: $36 - 32 = 4 > 0$, two solutions. The winner is $3x^2 - 2x + 1 = 0$. Check it a completely different way, with no discriminant: complete the square, $3\\left(x^2 - \\frac{2}{3}x\\right) + 1 = 3\\left(x - \\frac{1}{3}\\right)^2 - \\frac{1}{3} + 1 = 3\\left(x - \\frac{1}{3}\\right)^2 + \\frac{2}{3}$, which is at least $\\frac{2}{3}$ for every real $x$ and therefore never $0$ ✓. (The choice $x^2 - 4x + 4 = 0$ is $(x-2)^2 = 0$, picked by anyone who thinks a discriminant of zero means no solutions — it has one, $x = 2$; the choice $2x^2 + 5x - 1 = 0$ tempts the belief that a negative constant blocks real roots, but its roots are $\\frac{-5 \\pm \\sqrt{33}}{4}$, both real; the choice $x^2 + 6x + 8 = 0$ is what you pick if you forget to SQUARE $b$, since $6 - 32 = -26$ looks negative — really it factors as $(x+2)(x+4)$, with roots $-2$ and $-4$.)',
    },
    {
      q: 'How many real solutions does $x^2 + 7 = 6x$ have?',
      choices: ['None', 'One', 'It cannot be determined without solving', 'Two'],
      answer: 3,
      solution:
        'Get everything on one side FIRST: $x^2 - 6x + 7 = 0$, so $a = 1$, $b = -6$, $c = 7$. The discriminant is $36 - 28 = 8$, which is positive, so there are TWO real solutions. Check by completing the square instead: $x^2 - 6x + 9 = -7 + 9$ gives $(x-3)^2 = 2$, so $x = 3 \\pm \\sqrt{2}$ — two different real numbers ✓. Verify one of them in the ORIGINAL equation, with the $6x$ still on the right: for $x = 3 + \\sqrt{2}$, $x^2 = 9 + 6\\sqrt{2} + 2 = 11 + 6\\sqrt{2}$, so the left side is $18 + 6\\sqrt{2}$, and the right side is $6(3 + \\sqrt{2}) = 18 + 6\\sqrt{2}$ ✓. (The choice None applies the formula before moving the $6x$ over, reading $b = 0$ and $c = 7$ for a discriminant of $-28$ — the classic trap of this problem; the choice One comes from writing $(x-3)^2 = 2$ and then taking only the positive square root, dropping the minus branch; the choice It cannot be determined without solving gives up on the discriminant, whose whole purpose is to settle the count before any solving happens.)',
    },
  ],
  // c4 — the quadratic formula with an irrational answer. One version runs the
  // formula backwards from a printed answer; one carries a leading coefficient so
  // the fraction must be reduced from BOTH terms of the numerator.
  [
    {
      q: 'Solve $x^2 - 3x - 1 = 0$.',
      choices: [
        '$x = \\frac{3 \\pm \\sqrt{13}}{2}$',
        '$x = \\frac{-3 \\pm \\sqrt{13}}{2}$',
        '$x = \\frac{3 \\pm \\sqrt{5}}{2}$',
        '$x = 3 \\pm \\sqrt{13}$',
      ],
      answer: 0,
      solution:
        'Here $a = 1$, $b = -3$, $c = -1$. The discriminant is $(-3)^2 - 4(1)(-1) = 9 + 4 = 13$ — subtracting a negative ADDS. The formula starts with $-b = 3$, so $x = \\frac{3 \\pm \\sqrt{13}}{2}$, and $13$ has no square factors, so nothing simplifies. Check with sum and product, which never touches the formula again: the roots must add to $-\\frac{b}{a} = 3$, and $\\frac{3+\\sqrt{13}}{2} + \\frac{3-\\sqrt{13}}{2} = 3$ ✓; they must multiply to $\\frac{c}{a} = -1$, and $\\frac{(3)^2 - (\\sqrt{13})^2}{4} = \\frac{9-13}{4} = -1$ ✓. (The choice $\\frac{-3 \\pm \\sqrt{13}}{2}$ uses $+b$ where the formula says $-b$; the choice $\\frac{3 \\pm \\sqrt{5}}{2}$ computes the discriminant as $9 - 4 = 5$, subtracting where the negative $c$ makes it an addition; the choice $3 \\pm \\sqrt{13}$ never divides by $2a$.)',
    },
    {
      q: 'The solutions of $x^2 + bx + c = 0$ are $x = \\frac{-5 \\pm \\sqrt{17}}{2}$. What are $b$ and $c$?',
      choices: ['$b = -5$, $c = 2$', '$b = 10$, $c = 2$', '$b = 5$, $c = 2$', '$b = 5$, $c = -2$'],
      answer: 2,
      solution:
        'Add the two roots: $\\frac{-5+\\sqrt{17}}{2} + \\frac{-5-\\sqrt{17}}{2} = \\frac{-10}{2} = -5$. Since the sum equals $-b$, we get $b = 5$. Multiply them, using the difference of squares: $\\frac{(-5)^2 - (\\sqrt{17})^2}{4} = \\frac{25-17}{4} = 2$, and the product equals $c$, so $c = 2$. Check forward by running the formula on $x^2 + 5x + 2 = 0$: the discriminant is $25 - 8 = 17$ and $-b = -5$, giving $x = \\frac{-5 \\pm \\sqrt{17}}{2}$ ✓ — exactly the printed answer. (The choice $b = -5$ reads the sum of the roots as $b$ itself, forgetting the minus sign in $-\\frac{b}{a}$; the choice $b = 10$ adds only the numerators, $-5$ and $-5$, and never divides by the $2$ underneath; the choice $c = -2$ multiplies the roots as $\\frac{17-25}{4}$, subtracting the difference of squares in the wrong order.)',
    },
    {
      q: 'Solve $2x^2 + 6x + 1 = 0$ and simplify fully.',
      choices: [
        '$x = \\frac{-3 \\pm 2\\sqrt{7}}{2}$',
        '$x = \\frac{-6 \\pm 2\\sqrt{7}}{2}$',
        '$x = \\frac{3 \\pm \\sqrt{7}}{2}$',
        '$x = \\frac{-3 \\pm \\sqrt{7}}{2}$',
      ],
      answer: 3,
      solution:
        'With $a = 2$, $b = 6$, $c = 1$, the discriminant is $36 - 8 = 28$, and $\\sqrt{28} = \\sqrt{4 \\cdot 7} = 2\\sqrt{7}$. The formula gives $x = \\frac{-6 \\pm 2\\sqrt{7}}{4}$. Every one of the three parts — the $-6$, the $2\\sqrt{7}$, and the $4$ — is even, so divide all of them by $2$: $x = \\frac{-3 \\pm \\sqrt{7}}{2}$. Check with sum and product: the roots add to $\\frac{-3+\\sqrt{7}}{2} + \\frac{-3-\\sqrt{7}}{2} = -3$, matching $-\\frac{b}{a} = -\\frac{6}{2} = -3$ ✓, and multiply to $\\frac{9-7}{4} = \\frac{1}{2}$, matching $\\frac{c}{a} = \\frac{1}{2}$ ✓. (The choice $\\frac{-3 \\pm 2\\sqrt{7}}{2}$ cancels the $2$ out of the $-6$ and the $4$ but leaves the $2\\sqrt{7}$ untouched — cancel from every term of the top or from none; the choice $\\frac{-6 \\pm 2\\sqrt{7}}{2}$ divides by $2$ instead of by $2a = 4$; the choice $\\frac{3 \\pm \\sqrt{7}}{2}$ uses $+b$ where the formula says $-b$.)',
    },
  ],
  // c5 — a discriminant of zero, i.e. a perfect square in disguise. Every version
  // has a double root that is a fraction, so the division by $2a$ is unavoidable.
  [
    {
      q: 'Solve $9x^2 + 24x + 16 = 0$.',
      choices: ['$x = \\frac{4}{3}$ only', '$x = -\\frac{4}{3}$ only', '$x = \\pm\\frac{4}{3}$', '$x = -\\frac{3}{4}$ only'],
      answer: 1,
      solution:
        'The discriminant is $24^2 - 4(9)(16) = 576 - 576 = 0$, so the $\\pm$ contributes nothing and there is exactly one solution: $x = \\frac{-24}{2(9)} = \\frac{-24}{18} = -\\frac{4}{3}$. Check by spotting the perfect square instead: $9x^2 + 24x + 16 = (3x+4)^2$, since $(3x)^2 = 9x^2$, $4^2 = 16$, and the middle term $2(3x)(4) = 24x$ matches ✓. So $3x + 4 = 0$ and $x = -\\frac{4}{3}$, a double root. Confirm a rival fails: at $x = \\frac{4}{3}$ the left side is $9 \\cdot \\frac{16}{9} + 32 + 16 = 64 \\ne 0$ ✗. (The choice $x = \\frac{4}{3}$ only loses the minus sign that $-b$ puts in front; the choice $x = \\pm\\frac{4}{3}$ insists on two roots even though the discriminant is zero — and we just saw $\\frac{4}{3}$ give $64$, not $0$; the choice $x = -\\frac{3}{4}$ turns the fraction upside down, solving $3x + 4 = 0$ as though the $3$ belonged on top.)',
    },
    {
      q: 'Solve $16x^2 = 40x - 25$.',
      choices: ['$x = \\frac{5}{2}$ only', '$x = \\frac{4}{5}$ only', '$x = \\frac{5}{4}$ only', '$x = \\frac{5}{4}$ or $x = -\\frac{5}{4}$'],
      answer: 2,
      solution:
        'Move everything to one side first: $16x^2 - 40x + 25 = 0$. The discriminant is $(-40)^2 - 4(16)(25) = 1600 - 1600 = 0$, so there is exactly one solution: $x = \\frac{40}{2(16)} = \\frac{40}{32} = \\frac{5}{4}$. Check in the ORIGINAL equation, where neither side is zero: the left side is $16 \\cdot \\frac{25}{16} = 25$, and the right side is $40 \\cdot \\frac{5}{4} - 25 = 50 - 25 = 25$ ✓ — both sides read $25$. Check the structure a second way: $16x^2 - 40x + 25 = (4x-5)^2$, since $2(4x)(5) = 40x$ ✓, so $\\frac{5}{4}$ is a double root. (The choice $x = \\frac{5}{2}$ divides by $a = 16$ instead of $2a = 32$; at $x = \\frac{5}{2}$ the two sides read $100$ and $75$ ✗; the choice $x = \\frac{4}{5}$ flips the fraction; the choice $x = \\pm\\frac{5}{4}$ hands a $\\pm$ to a discriminant of zero — and $x = -\\frac{5}{4}$ gives $25$ on the left but $-75$ on the right ✗.)',
    },
    {
      q: 'Solve $12x^2 + 12x + 3 = 0$.',
      choices: ['$x = \\frac{1}{2}$ only', '$x = -2$ only', '$x = \\frac{1}{2}$ or $x = -\\frac{1}{2}$', '$x = -\\frac{1}{2}$ only'],
      answer: 3,
      solution:
        'The discriminant is $12^2 - 4(12)(3) = 144 - 144 = 0$: exactly one solution, $x = \\frac{-12}{2(12)} = -\\frac{1}{2}$. Check by factoring instead — divide the whole equation by $3$ to get $4x^2 + 4x + 1 = 0$, which is $(2x+1)^2 = 0$ because $2(2x)(1) = 4x$ ✓, so $2x + 1 = 0$ and $x = -\\frac{1}{2}$, a double root. Substitute into the ORIGINAL: $12 \\cdot \\frac{1}{4} - 6 + 3 = 3 - 6 + 3 = 0$ ✓. (The choice $x = \\frac{1}{2}$ only drops the minus from $-b = -12$, and it gives $3 + 6 + 3 = 12 \\ne 0$ ✗; the choice $x = -2$ solves $2x + 1 = 0$ upside down, reading the answer as $-\\frac{2}{1}$; the choice $x = \\pm\\frac{1}{2}$ attaches a $\\pm$ to a discriminant of zero, and the positive one has just been shown to fail.)',
    },
  ],
  // c6 — force a double root by setting the discriminant to zero. The parameter
  // moves around: it is the middle coefficient, then the leading one, then buried
  // inside a bracket, and only a SQUARED parameter earns the $\pm$.
  [
    {
      q: 'For which values of $m$ does $3x^2 + mx + 12 = 0$ have exactly one solution?',
      choices: ['$m = \\pm 12$', '$m = 12$ only', '$m = 144$', '$m = 0$'],
      answer: 0,
      solution:
        'Exactly one solution means the discriminant is zero: $m^2 - 4(3)(12) = m^2 - 144 = 0$, so $m^2 = 144$ and $m = \\pm 12$ — unsquaring always offers two numbers. Check both: with $m = 12$ the equation is $3x^2 + 12x + 12 = 3(x^2 + 4x + 4) = 3(x+2)^2$, a perfect square with the single root $x = -2$ ✓; with $m = -12$ it is $3(x-2)^2$, single root $x = 2$ ✓. Confirm the expansion independently: $3(x+2)^2 = 3x^2 + 12x + 12$ ✓, matching the original coefficients. (The choice $m = 12$ only keeps the positive branch and throws away a working value of $m$; the choice $m = 144$ stops at $m^2 = 144$ and never takes the square root; the choice $m = 0$ assumes the middle term must vanish, but $3x^2 + 12 = 0$ has NO real solutions at all.)',
    },
    {
      q: 'For which value of $a$ (with $a \\ne 0$) does $ax^2 - 20x + 25 = 0$ have exactly one solution?',
      choices: ['$a = 100$', '$a = 4$', '$a = 16$', '$a = \\pm 4$'],
      answer: 1,
      solution:
        'Set the discriminant to zero: $(-20)^2 - 4(a)(25) = 400 - 100a = 0$, so $100a = 400$ and $a = 4$. Check: $4x^2 - 20x + 25 = (2x-5)^2$, since $2(2x)(5) = 20x$ ✓ — a perfect square with the single root $x = \\frac{5}{2}$. Check that root in the original equation as well: $4 \\cdot \\frac{25}{4} - 50 + 25 = 25 - 50 + 25 = 0$ ✓. (The choice $a = 100$ leaves the $c$ out of $4ac$, solving $400 - 4a = 0$; the choice $a = 16$ leaves the $4$ out, solving $400 - 25a = 0$; the choice $a = \\pm 4$ copies the $\\pm$ habit from problems where the PARAMETER IS SQUARED — here $a$ appears to the first power, and $a = -4$ gives a discriminant of $400 + 400 = 800 > 0$, which means two solutions, not one.)',
    },
    {
      q: 'For which values of $k$ does $x^2 + (k+1)x + 9 = 0$ have exactly one solution?',
      choices: ['$k = \\pm 6$', '$k = 5$ only', '$k = \\pm 5$', '$k = 5$ or $k = -7$'],
      answer: 3,
      solution:
        'The middle coefficient is the whole bracket $k+1$, so the discriminant is $(k+1)^2 - 4(1)(9) = (k+1)^2 - 36$. Set it to zero: $(k+1)^2 = 36$, so $k + 1 = \\pm 6$. That is two separate equations: $k + 1 = 6$ gives $k = 5$, and $k + 1 = -6$ gives $k = -7$. Check both by building the quadratic: $k = 5$ makes the middle coefficient $6$, so $x^2 + 6x + 9 = (x+3)^2$ ✓ with the single root $-3$; $k = -7$ makes it $-6$, so $x^2 - 6x + 9 = (x-3)^2$ ✓ with the single root $3$. (The choice $k = \\pm 6$ stops at $k+1$ and forgets to subtract the $1$; the choice $k = 5$ only drops the minus branch; the choice $k = \\pm 5$ assumes the two answers must be opposites, but the shift by $1$ moves the pair off centre — and $k = -5$ leaves $x^2 - 4x + 9$, whose discriminant is $16 - 36 = -20 < 0$, so it has no real solutions at all.)',
    },
  ],
  // c7 — symmetric functions of the roots, answered from sum and product without
  // ever finding the roots. One version uses reciprocals; one uses the squared gap.
  [
    {
      q: 'The two roots of $x^2 - 8x + 5 = 0$ are $r$ and $s$. What is $r^2 + s^2$?',
      choices: ['$54$', '$59$', '$74$', '$64$'],
      answer: 0,
      solution:
        'The shortcuts give $r + s = -\\frac{-8}{1} = 8$ and $rs = \\frac{5}{1} = 5$. Squaring the sum produces exactly one extra piece: $(r+s)^2 = r^2 + 2rs + s^2$, so $r^2 + s^2 = (r+s)^2 - 2rs = 64 - 10 = 54$. Check by actually finding the roots, which is a completely separate route: the discriminant is $64 - 20 = 44$, so $r, s = \\frac{8 \\pm \\sqrt{44}}{2} = 4 \\pm \\sqrt{11}$. Then $(4+\\sqrt{11})^2 = 16 + 8\\sqrt{11} + 11 = 27 + 8\\sqrt{11}$ and $(4-\\sqrt{11})^2 = 27 - 8\\sqrt{11}$, and the roots of the radical cancel: $27 + 27 = 54$ ✓. (The choice $59$ subtracts only one copy of $rs$, but the middle term of a square is $2rs$; the choice $74$ adds $2rs$ instead of subtracting it; the choice $64$ reports $(r+s)^2$ and never removes the middle term at all.)',
    },
    {
      q: 'The two roots of $x^2 - 7x + 3 = 0$ are $r$ and $s$. What is $\\frac{1}{r} + \\frac{1}{s}$?',
      choices: ['$\\frac{3}{7}$', '$\\frac{7}{3}$', '$-\\frac{7}{3}$', '$\\frac{1}{7}$'],
      answer: 1,
      solution:
        'Put the two reciprocals over a common denominator: $\\frac{1}{r} + \\frac{1}{s} = \\frac{s + r}{rs}$. That is the sum over the product, and the shortcuts hand you both: $r + s = 7$ and $rs = 3$, so the answer is $\\frac{7}{3}$. Check numerically with the actual roots: the discriminant is $49 - 12 = 37$, so $r = \\frac{7+\\sqrt{37}}{2} \\approx 6.5414$ and $s \\approx 0.4586$. Then $\\frac{1}{r} \\approx 0.1529$ and $\\frac{1}{s} \\approx 2.1805$, which add to about $2.3334$ — and $\\frac{7}{3} \\approx 2.3333$ ✓. (The choice $\\frac{3}{7}$ turns the fraction upside down, computing product over sum; the choice $-\\frac{7}{3}$ takes the sum of the roots to be $b = -7$ instead of $-\\frac{b}{a} = 7$; the choice $\\frac{1}{7}$ is $\\frac{1}{r+s}$, and adding fractions is never as simple as adding their denominators.)',
    },
    {
      q: 'The two roots of $2x^2 - 5x - 6 = 0$ are $r$ and $s$. What is $(r-s)^2$?',
      choices: ['$49$', '$-\\frac{23}{4}$', '$\\frac{73}{4}$', '$\\frac{25}{4}$'],
      answer: 2,
      solution:
        'Divide by $a$ before using the shortcuts: $r + s = -\\frac{-5}{2} = \\frac{5}{2}$ and $rs = \\frac{-6}{2} = -3$. Now $(r-s)^2 = r^2 - 2rs + s^2$, while $(r+s)^2 = r^2 + 2rs + s^2$, so the two differ by $4rs$: $(r-s)^2 = (r+s)^2 - 4rs = \\frac{25}{4} - 4(-3) = \\frac{25}{4} + 12 = \\frac{73}{4}$. Check by solving: the discriminant is $25 + 48 = 73$, so the roots are $\\frac{5 \\pm \\sqrt{73}}{4}$, their difference is $\\frac{2\\sqrt{73}}{4} = \\frac{\\sqrt{73}}{2}$, and squaring gives $\\frac{73}{4}$ ✓. (The choice $49$ uses $r + s = 5$ and $rs = -6$, forgetting that both shortcuts divide by $a = 2$; the choice $-\\frac{23}{4}$ subtracts $12$ instead of adding it, mishandling the minus already inside $rs = -3$ — and a squared quantity can never be negative, which is the tell; the choice $\\frac{25}{4}$ is $(r+s)^2$, dropping the $4rs$ correction entirely.)',
    },
  ],
  // c8 — complex roots. Divide by the leading coefficient (or by $2a$) all the way
  // to the end, and keep the shift on the correct side. One version runs backwards
  // from a single given root using the conjugate pair.
  [
    {
      q: 'Solve $x^2 + 4x + 13 = 0$ over the complex numbers.',
      choices: ['$x = 2 \\pm 3i$', '$x = -2 \\pm 3i$', '$x = -4 \\pm 6i$', '$x = -2 \\pm 6i$'],
      answer: 1,
      solution:
        'The discriminant is $16 - 52 = -36$, so $\\sqrt{-36} = 6i$ and $x = \\frac{-4 \\pm 6i}{2}$. Divide BOTH parts of the numerator by $2$: $x = -2 \\pm 3i$. Check by substituting into the original equation: for $x = -2 + 3i$, $x^2 = 4 - 12i + 9i^2 = 4 - 12i - 9 = -5 - 12i$, so $x^2 + 4x + 13 = (-5 - 12i) + (-8 + 12i) + 13 = 0$ ✓. Check a second, independent way with sum and product: the roots add to $-4$, matching $-\\frac{b}{a}$ ✓, and multiply to $(-2)^2 + 3^2 = 4 + 9 = 13$, matching $\\frac{c}{a}$ ✓. (The choice $2 \\pm 3i$ uses $+b$ where the formula says $-b$; the choice $-4 \\pm 6i$ stops before dividing by $2a = 2$; the choice $-2 \\pm 6i$ divides only the real part of the numerator and leaves the imaginary part alone.)',
    },
    {
      q: 'One solution of $x^2 + bx + c = 0$ is $x = 3 - 2i$, where $b$ and $c$ are real numbers. What is $b + c$?',
      choices: ['$19$', '$-1$', '$7$', '$\\sqrt{13} - 6$'],
      answer: 2,
      solution:
        'When the coefficients are real, complex roots arrive in conjugate pairs, so the other root is $3 + 2i$. The roots add to $6$, and the sum is $-b$, so $b = -6$. The roots multiply to $(3-2i)(3+2i) = 9 - 6i + 6i - 4i^2 = 9 + 4 = 13$, and the product is $c$, so $c = 13$. Then $b + c = -6 + 13 = 7$. Check by rebuilding the quadratic and testing the given root: the equation is $x^2 - 6x + 13 = 0$, and for $x = 3 - 2i$ we get $x^2 = 9 - 12i + 4i^2 = 5 - 12i$, so $5 - 12i - 6(3-2i) + 13 = 5 - 12i - 18 + 12i + 13 = 0$ ✓. (The choice $19$ sets $b$ equal to the sum $6$ instead of $-6$; the choice $-1$ multiplies the conjugates as $9 - 4 = 5$, replacing $i^2$ with $+1$, and then adds $-6$; the choice $\\sqrt{13} - 6$ uses the distance $|3-2i| = \\sqrt{13}$ for $c$, but the product of a conjugate pair is that distance SQUARED.)',
    },
    {
      q: 'Solve $5x^2 - 20x + 45 = 0$ over the complex numbers.',
      choices: ['$x = -2 \\pm i\\sqrt{5}$', '$x = 2 \\pm 5i$', '$x = 10 \\pm 5i\\sqrt{5}$', '$x = 2 \\pm i\\sqrt{5}$'],
      answer: 3,
      solution:
        'Divide the whole equation by $5$ first so the square can be completed: $x^2 - 4x + 9 = 0$. Half of $-4$ is $-2$, so add $4$ to both sides of $x^2 - 4x = -9$: $(x-2)^2 = -5$. A square equal to a negative is fine among the complex numbers: $x - 2 = \\pm i\\sqrt{5}$, so $x = 2 \\pm i\\sqrt{5}$. Check by substituting into the ORIGINAL equation: for $x = 2 + i\\sqrt{5}$, $x^2 = 4 + 4i\\sqrt{5} + 5i^2 = -1 + 4i\\sqrt{5}$, so $5x^2 = -5 + 20i\\sqrt{5}$ and $-20x = -40 - 20i\\sqrt{5}$; adding $45$ gives $(-5 - 40 + 45) + (20i\\sqrt{5} - 20i\\sqrt{5}) = 0$ ✓. Check again with sum and product: the roots add to $4 = -\\frac{-20}{5}$ ✓ and multiply to $2^2 + (\\sqrt{5})^2 = 9 = \\frac{45}{5}$ ✓. (The choice $-2 \\pm i\\sqrt{5}$ flips the sign while undoing the shift, but $x - 2 = \\pm i\\sqrt{5}$ means ADDING $2$; the choice $2 \\pm 5i$ never takes the square root of the $5$; the choice $10 \\pm 5i\\sqrt{5}$ divides the formula’s numerator by $2$ instead of by $2a = 10$.)',
    },
  ],
  // c9 — a product story that becomes a quadratic. Every version has a second
  // root the story forbids, and each version asks for a different thing: the sum,
  // the larger integer, the width.
  [
    {
      q: 'Two consecutive positive even integers have a product of $168$. What is their sum?',
      choices: ['$26$', '$12$', '$-26$', '$25$'],
      answer: 0,
      solution:
        'Consecutive even integers differ by $2$, so call them $n$ and $n+2$: then $n(n+2) = 168$, or $n^2 + 2n - 168 = 0$. Look for two numbers with product $-168$ and sum $2$: they are $14$ and $-12$, so the equation factors as $(n+14)(n-12) = 0$ and $n = 12$ or $n = -14$. The problem says positive, so $n = 12$, the integers are $12$ and $14$, and their sum is $26$. Check: $12 \\times 14 = 168$ ✓ and both are even and two apart ✓. Check the pair a second way, from the answers themselves: two numbers with sum $26$ and product $168$ are the roots of $y^2 - 26y + 168 = 0$, whose discriminant is $676 - 672 = 4$, giving $y = \\frac{26 \\pm 2}{2} = 14$ and $12$ ✓. (The choice $12$ reports the smaller integer instead of the sum the question asked for; the choice $-26$ keeps the root $n = -14$, which the word "positive" rules out; the choice $25$ comes from estimating with $\\sqrt{168} \\approx 12.96$ and grabbing $12$ and $13$, but those are not both even and their product is $156$, not $168$ ✗.)',
    },
    {
      q: 'The product of two consecutive positive odd integers is $255$. What is the larger one?',
      choices: ['$15$', '$17$', '$-15$', '$85$'],
      answer: 1,
      solution:
        'Consecutive odd integers also differ by $2$, so $n(n+2) = 255$, or $n^2 + 2n - 255 = 0$. Two numbers with product $-255$ and sum $2$ are $17$ and $-15$, so $(n+17)(n-15) = 0$ and $n = 15$ or $n = -17$. Positive means $n = 15$, so the integers are $15$ and $17$ and the LARGER is $17$. Check: $15 \\times 17 = 255$ ✓, both odd, two apart ✓. Check a second way, with no factoring of the quadratic at all: numbers two apart with product $255$ sit either side of some centre $c$, so $c^2 - 1 = 255$, giving $c^2 = 256$ and $c = 16$ — the integers are $15$ and $17$ ✓. (The choice $15$ reports the smaller integer; the choice $-15$ keeps the rejected root $n = -17$ and gives the larger of THAT pair; the choice $85$ grabs the factor pair $3 \\times 85 = 255$ without checking that the factors are two apart.)',
    },
    {
      q: 'A rectangle’s length is $3$ more than twice its width, and its area is $65$. What is the width?',
      choices: ['$13$', '$10$', '$-\\frac{13}{2}$', '$5$'],
      answer: 3,
      solution:
        'Let the width be $w$; then the length is $2w + 3$ and the area gives $w(2w+3) = 65$, that is $2w^2 + 3w - 65 = 0$. The discriminant is $9 + 4(2)(65) = 9 + 520 = 529 = 23^2$, so $w = \\frac{-3 \\pm 23}{4}$, giving $w = 5$ or $w = -\\frac{13}{2}$. A width cannot be negative, so $w = 5$. Check the story: the length is $2(5) + 3 = 13$, and $5 \\times 13 = 65$ ✓. Check the algebra independently with sum and product: the two roots should add to $-\\frac{3}{2}$, and $5 + \\left(-\\frac{13}{2}\\right) = -\\frac{3}{2}$ ✓; they should multiply to $\\frac{-65}{2}$, and $5 \\times \\left(-\\frac{13}{2}\\right) = -\\frac{65}{2}$ ✓. (The choice $13$ gives the length instead of the width; the choice $10$ divides by $2$ instead of by $2a = 4$, turning $\\frac{-3+23}{4}$ into $\\frac{20}{2}$; the choice $-\\frac{13}{2}$ is the root the story forbids — a rectangle cannot have negative width.)',
    },
  ],
  // c10 — the projectile model. One version lands the ball, one catches it at a
  // given height on the way up, and one runs backwards to the launch height.
  [
    {
      q: 'A ball thrown from a roof has height $h = -5t^2 + 30t + 80$ metres after $t$ seconds. When does it hit the ground?',
      choices: ['$t = 8$', '$t = 3$', '$t = -2$', '$t = 16$'],
      answer: 0,
      solution:
        'Hitting the ground means $h = 0$: $-5t^2 + 30t + 80 = 0$. Divide everything by $-5$ to make life easy: $t^2 - 6t - 16 = 0$. Two numbers with product $-16$ and sum $-6$ are $-8$ and $2$, so $(t-8)(t+2) = 0$ and $t = 8$ or $t = -2$. Negative time is before the throw, so the ball lands after $8$ seconds. Check in the ORIGINAL height formula: $h(8) = -5(64) + 240 + 80 = -320 + 320 = 0$ ✓. Check the factoring independently with sum and product: the roots of $t^2 - 6t - 16$ must add to $6$ and multiply to $-16$, and $8 + (-2) = 6$ ✓ with $8 \\times (-2) = -16$ ✓. (The choice $t = 3$ is when the ball is HIGHEST, the halfway point $\\frac{8 + (-2)}{2}$, where $h = 125$, not $0$; the choice $t = -2$ is the root the story forbids; the choice $t = 16$ comes from reading $t(t-6) = 16$ and setting one factor equal to $16$ — that trick only works against a zero, and $h(16) = -1280 + 480 + 80 = -720 \\ne 0$ ✗.)',
    },
    {
      q: 'A ball kicked from the ground has height $h = -5t^2 + 35t$ metres after $t$ seconds. At what time is it $50$ metres high on the way UP?',
      choices: ['$t = 5$', '$t = 7$', '$t = 2$', '$t = 3.5$'],
      answer: 2,
      solution:
        'Set the height to $50$, not to $0$: $-5t^2 + 35t = 50$. Bring everything to one side and divide by $-5$: $t^2 - 7t + 10 = 0$, which factors as $(t-2)(t-5) = 0$. So the ball is $50$ metres up at $t = 2$ and again at $t = 5$ — once climbing, once falling. The peak is halfway between them, at $t = 3.5$, so the earlier time $t = 2$ is the one on the way up. Check in the original formula: $h(2) = -20 + 70 = 50$ ✓, and $h(5) = -125 + 175 = 50$ ✓ — both really are $50$, which is why the phrase "on the way up" is doing real work. (The choice $t = 5$ is the same height on the way DOWN, after the peak at $3.5$; the choice $t = 7$ solves $h = 0$ instead of $h = 50$, since $-5t(t-7) = 0$ gives $t = 0$ or $t = 7$; the choice $t = 3.5$ is the peak time, where the height is $-5(12.25) + 122.5 = 61.25$, not $50$ ✗.)',
    },
    {
      q: 'A ball thrown from a ledge has height $h = -5t^2 + 30t + c$ metres after $t$ seconds, and it hits the ground exactly $7$ seconds after the throw. From what height was it thrown?',
      choices: ['$245$', '$80$', '$-455$', '$35$'],
      answer: 3,
      solution:
        'The throw height is $h(0) = c$, so we need $c$. Hitting the ground at $t = 7$ means $h(7) = 0$: $-5(49) + 30(7) + c = 0$, that is $-245 + 210 + c = 0$, so $c = 35$. Check by solving the finished model: $-5t^2 + 30t + 35 = -5(t^2 - 6t - 7) = -5(t-7)(t+1)$, which is zero at $t = 7$ ✓ (and at $t = -1$, before the throw). Check the launch height a second way, straight from the formula: $h(0) = -5(0) + 30(0) + 35 = 35$ ✓. (The choice $245$ drops the $30t$ term, solving $-245 + c = 0$; the choice $80$ is the MAXIMUM height, reached at $t = 3$ where $h = -45 + 90 + 35 = 80$ — high above the ledge, not on it; the choice $-455$ treats $-5t^2$ as $(-5t)^2 = +245$, solving $245 + 210 + c = 0$.)',
    },
  ],
  // c11 — the vertex value. One version minimises, one maximises a downward
  // parabola, one buries the parabola inside an area story. In all three the trap
  // is answering WHERE instead of WHAT.
  [
    {
      q: 'What is the minimum value of $2x^2 - 16x + 5$?',
      choices: ['$-27$', '$5$', '$4$', '$-11$'],
      answer: 0,
      solution:
        'Factor the $2$ out of the $x$ terms: $2(x^2 - 8x) + 5$. Inside, half of $-8$ is $-4$ and $(-4)^2 = 16$; adding $16$ inside really adds $2 \\times 16 = 32$, so subtract $32$ outside: $2(x-4)^2 + 5 - 32 = 2(x-4)^2 - 27$. Since $2(x-4)^2 \\ge 0$ and equals $0$ exactly at $x = 4$, the smallest value the expression can take is $-27$. Check by evaluating the original at $x = 4$: $2(16) - 64 + 5 = 32 - 64 + 5 = -27$ ✓. Check that it really is the bottom by testing both neighbours: at $x = 3$, $18 - 48 + 5 = -25$, and at $x = 5$, $50 - 80 + 5 = -25$ — both larger than $-27$ ✓. (The choice $5$ reads off the constant term, which is only the value at $x = 0$; the choice $4$ is WHERE the minimum happens, not what it is; the choice $-11$ subtracts only the $16$ added inside, forgetting that the $2$ out front doubles it.)',
    },
    {
      q: 'What is the maximum value of $-x^2 + 10x - 18$?',
      choices: ['$5$', '$7$', '$-18$', '$43$'],
      answer: 1,
      solution:
        'The leading coefficient is negative, so this parabola opens downward and has a highest point. Factor $-1$ out of the $x$ terms: $-(x^2 - 10x) - 18$. Inside, half of $-10$ is $-5$ and $(-5)^2 = 25$; adding $25$ inside really adds $-25$, so add $25$ back outside: $-(x-5)^2 + 25 - 18 = -(x-5)^2 + 7$. Since $-(x-5)^2 \\le 0$, the expression never exceeds $7$, and it reaches $7$ at $x = 5$. Check in the original: $-25 + 50 - 18 = 7$ ✓. Check both neighbours: at $x = 4$, $-16 + 40 - 18 = 6$, and at $x = 6$, $-36 + 60 - 18 = 6$ — both smaller ✓. (The choice $5$ is WHERE the maximum happens; the choice $-18$ is the constant term, the value at $x = 0$, which is far below the top; the choice $43$ adds $25$ and $18$ instead of subtracting, losing track of the sign the $-18$ carries.)',
    },
    {
      q: 'A rectangle has perimeter $40$, so its two side lengths are $x$ and $20 - x$. What is the largest area it can have?',
      choices: ['$20$', '$10$', '$400$', '$100$'],
      answer: 3,
      solution:
        'The area is $A = x(20-x) = -x^2 + 20x$. Complete the square: $-(x^2 - 20x) = -\\left[(x-10)^2 - 100\\right] = -(x-10)^2 + 100$. Since $-(x-10)^2 \\le 0$, the area never passes $100$, and it hits $100$ when $x = 10$ — the rectangle is a $10$ by $10$ square. Check the value directly: $10 \\times 10 = 100$, and the perimeter is $2(10+10) = 40$ ✓. Check that nothing beats it by trying two other legal shapes: $x = 9$ gives $9 \\times 11 = 99$, and $x = 12$ gives $12 \\times 8 = 96$ — both smaller ✓. (The choice $20$ is the sum of the two sides, half the perimeter, which is a length and not an area; the choice $10$ is the side length WHERE the maximum happens; the choice $400$ uses $20$ for both sides, but then the perimeter would be $80$, twice what the problem allows.)',
    },
  ],
  // c12 — an equation with the unknown in a denominator. Clearing the fraction
  // turns it into a quadratic; the last version squares the relation instead of
  // solving it, so the roots never have to be found.
  [
    {
      q: 'A positive number $x$ satisfies $x - \\dfrac{1}{x} = 3$. What is $x$?',
      choices: [
        '$x = \\frac{3 + \\sqrt{13}}{2}$',
        '$x = \\frac{3 \\pm \\sqrt{13}}{2}$',
        '$x = \\frac{3 + \\sqrt{5}}{2}$',
        '$x = \\frac{-3 + \\sqrt{13}}{2}$',
      ],
      answer: 0,
      solution:
        'Multiply both sides by $x$ to clear the fraction: $x^2 - 1 = 3x$, so $x^2 - 3x - 1 = 0$. The discriminant is $9 + 4 = 13$, giving $x = \\frac{3 \\pm \\sqrt{13}}{2}$. Now use the word "positive": since $\\sqrt{13} \\approx 3.606$, the minus branch is $\\frac{3-3.606}{2} \\approx -0.303$, which is negative and must be thrown out. Only $x = \\frac{3+\\sqrt{13}}{2}$ survives. Check it exactly in the ORIGINAL equation: $\\frac{1}{x} = \\frac{2}{3+\\sqrt{13}} = \\frac{2(\\sqrt{13}-3)}{13-9} = \\frac{\\sqrt{13}-3}{2}$, so $x - \\frac{1}{x} = \\frac{(3+\\sqrt{13}) - (\\sqrt{13}-3)}{2} = \\frac{6}{2} = 3$ ✓. (The choice with $\\pm$ keeps both roots and ignores the word "positive"; the choice $\\frac{3+\\sqrt{5}}{2}$ computes the discriminant as $9 - 4 = 5$, subtracting when the negative $c$ makes it an addition; the choice $\\frac{-3+\\sqrt{13}}{2}$ uses $+b$ where the formula says $-b$ — it is positive too, about $0.303$, but it gives $x - \\frac{1}{x} = -3$, not $3$ ✗.)',
    },
    {
      q: 'A positive number $x$ satisfies $x + \\dfrac{4}{x} = 7$. What is $x$?',
      choices: [
        '$x = \\frac{7 \\pm \\sqrt{65}}{2}$',
        '$x = \\frac{7 \\pm \\sqrt{33}}{2}$',
        '$x = \\frac{-7 \\pm \\sqrt{33}}{2}$',
        '$x = 7 \\pm \\sqrt{33}$',
      ],
      answer: 1,
      solution:
        'Multiply through by $x$: $x^2 + 4 = 7x$, so $x^2 - 7x + 4 = 0$. The discriminant is $49 - 16 = 33$, giving $x = \\frac{7 \\pm \\sqrt{33}}{2}$. Both branches are positive, since the roots multiply to $4 > 0$ and add to $7 > 0$, so both are genuine answers. Check with the structure of the problem, which is prettier than substituting: if $x$ is one root, then $\\frac{4}{x}$ is the other (their product is $4$), so the equation $x + \\frac{4}{x} = 7$ is exactly the statement that the roots add to $7$ — and $-\\frac{b}{a} = 7$ ✓. Check numerically too: $\\sqrt{33} \\approx 5.745$, so $x \\approx 6.372$ and $\\frac{4}{x} \\approx 0.628$, which add to $7.000$ ✓. (The choice $\\frac{7 \\pm \\sqrt{65}}{2}$ computes the discriminant as $49 + 16$, forgetting that moving $+4$ across makes $c = +4$; the choice $\\frac{-7 \\pm \\sqrt{33}}{2}$ uses $+b$ instead of $-b$, and both of its branches are negative; the choice $7 \\pm \\sqrt{33}$ never divides by $2a$.)',
    },
    {
      q: 'A positive number $x$ satisfies $x + \\dfrac{1}{x} = 4$. What is $x^2 + \\dfrac{1}{x^2}$?',
      choices: ['$16$', '$18$', '$14$', '$8$'],
      answer: 2,
      solution:
        'Square both sides — and remember that squaring a two-part sum leaves a middle term: $\\left(x + \\frac{1}{x}\\right)^2 = x^2 + 2 \\cdot x \\cdot \\frac{1}{x} + \\frac{1}{x^2} = x^2 + 2 + \\frac{1}{x^2}$. The middle term is exactly $2$, because $x$ and $\\frac{1}{x}$ multiply to $1$. So $16 = x^2 + 2 + \\frac{1}{x^2}$, giving $x^2 + \\frac{1}{x^2} = 14$. Check by actually finding $x$: clearing the fraction gives $x^2 - 4x + 1 = 0$, so $x = 2 + \\sqrt{3}$ (taking the positive root larger than $1$). Then $x^2 = 7 + 4\\sqrt{3}$, and $\\frac{1}{x} = 2 - \\sqrt{3}$ since $(2+\\sqrt{3})(2-\\sqrt{3}) = 1$, so $\\frac{1}{x^2} = 7 - 4\\sqrt{3}$. Adding: $7 + 7 = 14$ ✓. (The choice $16$ squares the $4$ and forgets to remove the middle term; the choice $18$ adds the $2$ instead of subtracting it, moving it to the wrong side; the choice $8$ doubles the $4$, treating squaring as doubling.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 13,
  challenge,
}
