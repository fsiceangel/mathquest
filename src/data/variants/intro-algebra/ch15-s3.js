// Introduction to Algebra chapter 15 — variations for the end-of-chapter
// challenge set. All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was worked out by hand and then confirmed a SECOND, independent
//    way: a sign chart is re-tested by substituting a number from each interval
//    into the ORIGINAL inequality, a completed square is re-expanded, a counting
//    answer is recounted from the other end (count the failures, subtract), a
//    vertex height is checked against its two neighbours, and an optimum
//    dimension is checked back against the fence it is supposed to use.
//  - These are the chapter's hard problems, so a variation stays hard: every
//    item combines two ideas — a sign chart plus a boundary judgement, a
//    completed square plus a backwards question, an inequality plus a count.
//  - Each distractor is one named mistake, and the name is stated at the end of
//    the solution. The traps that run through the whole file: TAKING THE
//    OUTSIDE SET WHEN THE INSIDE SET IS WANTED, INCLUDING A ZERO OF THE
//    DENOMINATOR, DROPPING A ZERO OF THE NUMERATOR, DIVIDING AN INEQUALITY BY
//    SOMETHING WHOSE SIGN IS UNKNOWN, FORGETTING THE LEADING COEFFICIENT WHILE
//    COMPLETING THE SQUARE, READING THE CONSTANT TERM AS THE MINIMUM, ANSWERING
//    WHERE INSTEAD OF WHAT, FORGETTING ZERO AND THE NEGATIVES WHILE COUNTING,
//    and PAYING FOR A SIDE THE PROBLEM GIVES AWAY FREE.
//  - No two choices inside an item name the same number or the same set, in any
//    spelling.

const challenge = [
  // c1 — a quadratic inequality wrapped in a count, with the question asking for
  // the integers that FAIL. One version rearranges first, so the factoring
  // cannot start until both sides have been collected.
  [
    {
      q: 'Of the integers from $-5$ to $5$, how many FAIL to satisfy $x^2 + 2x - 15 \\ge 0$?',
      choices: ['$4$', '$6$', '$7$', '$9$'],
      answer: 2,
      solution:
        'Factor first: $x^2 + 2x - 15 = (x+5)(x-3)$, with roots $-5$ and $3$. A product of two factors is positive outside its roots and zero at them, so the inequality HOLDS for $x \\le -5$ or $x \\ge 3$, and it FAILS strictly between: $-5 < x < 3$. The integers there are $-4, -3, -2, -1, 0, 1, 2$ — seven of them, and every one lies inside the range $-5$ to $5$. Spot-check two: $x = -4$ gives $16 - 8 - 15 = -7 < 0$ ✓ fails, and $x = 2$ gives $4 + 4 - 15 = -7 < 0$ ✓ fails. Check from the other end: of the eleven integers $-5$ through $5$, the ones that PASS are $-5$ (value $25 - 10 - 15 = 0$, and $0 \\ge 0$ ✓), $3$ (value $9 + 6 - 15 = 0$ ✓), $4$ and $5$ — four passers, so $11 - 4 = 7$ failures ✓. (The choice $9$ counts the roots $-5$ and $3$ as failures, which is what happens if you read the $\\ge$ as a plain $>$; at both of them the expression is exactly $0$, which the $\\ge$ accepts. The choice $4$ counts the passers instead of the failures. The choice $6$ skips $x = 0$ while listing — the easiest integer to forget is the one that looks like nothing.)',
    },
    {
      q: 'A number line is marked at every integer from $-2$ to $10$. At how many of those marks is the value of $x^2 - 9x + 14$ negative?',
      choices: ['$4$', '$5$', '$6$', '$9$'],
      answer: 0,
      solution:
        'Factor: $x^2 - 9x + 14 = (x-2)(x-7)$. A product of two factors is negative exactly between its roots, so the expression is negative for $2 < x < 7$. The marked integers in that window are $3, 4, 5, 6$ — four of them. Spot-check the ends of the list: $x = 3$ gives $9 - 27 + 14 = -4 < 0$ ✓ and $x = 6$ gives $36 - 54 + 14 = -4 < 0$ ✓. Check the boundaries: $x = 2$ gives $4 - 18 + 14 = 0$ and $x = 7$ gives $49 - 63 + 14 = 0$ — zero is not negative, so neither mark counts ✓. Count a second way: there are $13$ marks from $-2$ to $10$, and the expression is zero or positive at nine of them ($-2, -1, 0, 1, 2, 7, 8, 9, 10$), leaving $13 - 9 = 4$ ✓. (The choice $6$ counts the two roots as well, where the value is $0$ rather than negative. The choice $5$ keeps $x = 7$ by reading the window as $2 < x \\le 7$. The choice $9$ counts the marks where the expression is NOT negative — the complement of the question.)',
    },
    {
      q: 'How many of the integers $1, 2, 3, \\ldots, 15$ satisfy $x^2 + 4 \\ge 8x - 11$?',
      choices: ['$1$', '$12$', '$15$', '$14$'],
      answer: 3,
      solution:
        'Collect everything on one side before factoring: $x^2 + 4 \\ge 8x - 11$ becomes $x^2 - 8x + 15 \\ge 0$, which factors as $(x-3)(x-5) \\ge 0$. That holds outside the roots and at them: $x \\le 3$ or $x \\ge 5$. From the list, $1, 2, 3$ qualify (three numbers) and so do $5, 6, \\ldots, 15$ (eleven numbers), giving $3 + 11 = 14$. Check the one gap: $x = 4$ gives $16 + 4 = 20$ on the left and $32 - 11 = 21$ on the right, and $20 \\ge 21$ is false ✓ — the single failure. Count a second way: $15$ integers on the list minus that one failure is $14$ ✓. Check a root too: $x = 5$ gives $25 + 4 = 29$ and $40 - 11 = 29$, equal, which the $\\ge$ accepts ✓. (The choice $1$ reports how many integers fail instead of how many succeed. The choice $12$ throws away the roots $3$ and $5$, counting only $1, 2$ and $6$ through $15$ — that is what a strict $>$ would give. The choice $15$ assumes the whole list works and never tests the middle.)',
    },
  ],
  // c2 — a rational inequality whose numerator has to be factored first, with
  // mismatched endpoints. One version hides the quadratic in the DENOMINATOR, so
  // two of the three key points are forbidden rather than allowed.
  [
    {
      q: 'Solve $\\frac{x^2 + 3x - 10}{x - 4} \\ge 0$.',
      choices: [
        '$x \\le -5$ or $2 \\le x < 4$',
        '$-5 \\le x \\le 2$ or $x > 4$',
        '$-5 \\le x \\le 2$ or $x \\ge 4$',
        '$-5 < x < 2$ or $x > 4$',
      ],
      answer: 1,
      solution:
        'Factor the top: $\\frac{(x+5)(x-2)}{x-4}$, so the key points are $-5$, $2$ and $4$. Test one number in each of the four intervals: $x = -6$ gives $\\frac{(-1)(-8)}{-10} = -0.8 < 0$; $x = 0$ gives $\\frac{(5)(-2)}{-4} = 2.5 > 0$ ✓; $x = 3$ gives $\\frac{(8)(1)}{-1} = -8 < 0$; $x = 5$ gives $\\frac{(10)(3)}{1} = 30 > 0$ ✓. Now the boundaries, which is where this problem is won: $x = -5$ and $x = 2$ make the TOP zero, and $0 \\ge 0$ is true, so both are included; $x = 4$ makes the BOTTOM zero, so the fraction has no value there and $4$ is excluded no matter what the inequality sign says. The answer is $-5 \\le x \\le 2$ or $x > 4$. (The choice $x \\le -5$ or $2 \\le x < 4$ reads the sign chart backwards — that is the set where the fraction is $\\le 0$. The choice with $x \\ge 4$ swallows the forbidden point $4$. The choice with all four ends open discards the numerator zeros, which a $\\ge$ is happy to keep.)',
    },
    {
      q: 'For which values of $x$ is the fraction $\\frac{x^2 - x - 6}{x + 4}$ greater than or equal to zero?',
      choices: [
        '$-4 < x \\le -2$ or $x \\ge 3$',
        '$-4 \\le x \\le -2$ or $x \\ge 3$',
        '$-4 < x < -2$ or $x > 3$',
        '$x \\le -4$ or $-2 \\le x \\le 3$',
      ],
      answer: 0,
      solution:
        'The top factors as $(x-3)(x+2)$, so the key points are $-4$, $-2$ and $3$. Testing the four intervals: $x = -5$ gives $\\frac{(-8)(-3)}{-1} = -24 < 0$; $x = -3$ gives $\\frac{(-6)(-1)}{1} = 6 > 0$ ✓; $x = 0$ gives $\\frac{(-3)(2)}{4} = -1.5 < 0$; $x = 4$ gives $\\frac{(1)(6)}{8} = 0.75 > 0$ ✓. Boundaries: $-2$ and $3$ are zeros of the numerator, so the fraction is exactly $0$ there and the $\\ge$ keeps them; $-4$ is a zero of the denominator, so it is thrown out. The answer is $-4 < x \\le -2$ or $x \\ge 3$. (The choice starting $-4 \\le$ includes the point where the fraction is undefined. The choice with every end open drops the numerator zeros. The last choice is the solution of the OPPOSITE inequality, $\\le 0$ — a sign chart read the wrong way round.)',
    },
    {
      q: 'Solve $\\frac{x + 3}{x^2 - 16} \\le 0$. Careful — this time the quadratic is downstairs.',
      choices: [
        '$x \\le -4$ or $-3 \\le x \\le 4$',
        '$-4 < x \\le -3$ or $x > 4$',
        '$x < -4$ or $-3 \\le x < 4$',
        '$x < -4$ or $-3 < x < 4$',
      ],
      answer: 2,
      solution:
        'Factor the bottom: $\\frac{x+3}{(x-4)(x+4)}$, with key points $-4$, $-3$ and $4$. Test each interval: $x = -5$ gives $\\frac{-2}{(-9)(-1)} = -\\frac{2}{9} < 0$ ✓; $x = -3.5$ gives $\\frac{-0.5}{(-7.5)(0.5)} = \\frac{-0.5}{-3.75} \\approx 0.13 > 0$; $x = 0$ gives $\\frac{3}{-16} < 0$ ✓; $x = 5$ gives $\\frac{8}{(1)(9)} > 0$. The boundary rules now cut the other way from usual: $-3$ is a zero of the NUMERATOR, so the fraction equals $0$ there and the $\\le$ accepts it, while BOTH $-4$ and $4$ are zeros of the denominator and are forbidden. The answer is $x < -4$ or $-3 \\le x < 4$. (The first choice includes $-4$ and $4$, where the fraction has no value at all. The second choice is the $\\ge 0$ set. The last choice drops $x = -3$, the one boundary a $\\le$ is entitled to keep.)',
    },
  ],
  // c3 — counting integers under an inequality whose boundary is irrational, so
  // the count has to come from squares, not from a square-root button. One
  // version shifts the square; one puts a floor as well as a ceiling on $x^2$.
  [
    {
      q: 'A game awards one point for every integer whose square is less than $50$. How many points are on offer?',
      choices: ['$8$', '$15$', '$13$', '$14$'],
      answer: 1,
      solution:
        'The scoring integers are the ones with $x^2 < 50$. Rather than reach for $\\sqrt{50}$, walk up the squares: $7^2 = 49 < 50$ ✓ but $8^2 = 64 > 50$ ✗, so the largest scoring integer is $7$, and by symmetry the smallest is $-7$. That gives $-7, -6, \\ldots, 6, 7$. Count them: $7$ negatives, $7$ positives, and $0$ in the middle, so $7 + 7 + 1 = 15$. Check the count a second way, as a run of consecutive integers: from $-7$ to $7$ there are $7 - (-7) + 1 = 15$ ✓. Check a boundary: $(-7)^2 = 49 < 50$ ✓ scores, and $(-8)^2 = 64$ ✗ does not. (The choice $8$ counts only $0$ through $7$ and forgets that negative numbers have squares too. The choice $14$ counts both signs but leaves out $0$, whose square is $0 < 50$. The choice $13$ uses $\\sqrt{49} = 7$ as a strict cutoff and stops at $\\pm 6$, but $49$ really is less than $50$.)',
    },
    {
      q: 'How many integers $x$ satisfy $(x - 3)^2 \\le 40$?',
      choices: ['$7$', '$11$', '$13$', '$12$'],
      answer: 2,
      solution:
        'Let $u = x - 3$. As $x$ runs over the integers so does $u$, and the condition becomes $u^2 \\le 40$. Walk the squares: $6^2 = 36 \\le 40$ ✓ and $7^2 = 49 > 40$ ✗, so $u$ runs from $-6$ to $6$ — that is $13$ values. Each one gives exactly one $x = u + 3$, so $x$ runs from $-3$ to $9$: $9 - (-3) + 1 = 13$ integers ✓, the same count. Check both ends in the original: $x = -3$ gives $(-6)^2 = 36 \\le 40$ ✓, while $x = -4$ gives $49 > 40$ ✗; $x = 9$ gives $36 \\le 40$ ✓, while $x = 10$ gives $49$ ✗. (The choice $7$ counts only $x = 3$ through $x = 9$, the half of the window to the right of the centre. The choice $11$ treats $6$ as a forbidden value and counts $u$ from $-5$ to $5$, but $36$ is comfortably under $40$. The choice $12$ is the classic fence-post slip: subtracting $9 - (-3)$ and forgetting the $+1$.)',
    },
    {
      q: 'How many integers $x$ satisfy $x^2 > 10$ and $x^2 \\le 90$ at the same time?',
      choices: ['$6$', '$14$', '$19$', '$12$'],
      answer: 3,
      solution:
        'Handle the two conditions in terms of $|x|$. For $x^2 > 10$: $3^2 = 9$ is not more than $10$ ✗, but $4^2 = 16 > 10$ ✓, so $|x| \\ge 4$. For $x^2 \\le 90$: $9^2 = 81 \\le 90$ ✓ but $10^2 = 100 > 90$ ✗, so $|x| \\le 9$. Together $|x|$ is one of $4, 5, 6, 7, 8, 9$ — six sizes, each available with a plus sign and a minus sign, so $6 \\times 2 = 12$ integers. Check a second way by listing: $4, 5, 6, 7, 8, 9$ and $-4, -5, -6, -7, -8, -9$ is twelve numbers ✓, and $0$ is not among them since $0^2 = 0$ is not more than $10$. Spot-check the edges: $x = -4$ gives $16$, and $10 < 16 \\le 90$ ✓; $x = -3$ gives $9$, which fails the first condition ✗; $x = 9$ gives $81$ ✓; $x = 10$ gives $100$, which fails the second ✗. (The choice $6$ counts the positive values only. The choice $14$ rounds $\\sqrt{10} \\approx 3.16$ down to $3$ and lets $\\pm 3$ in, but $3^2 = 9$ is below $10$. The choice $19$ forgets the lower condition entirely and counts every integer from $-9$ to $9$.)',
    },
  ],
  // c4 — completing the square when the leading coefficient is not 1, so the
  // constant that comes out of the bracket has to be multiplied on the way. One
  // version maximises; one runs backwards from a stated minimum to a missing
  // constant.
  [
    {
      q: 'Over all real numbers $x$, what is the smallest value that $3x^2 + 12x + 20$ can take?',
      choices: ['$8$', '$16$', '$20$', '$-2$'],
      answer: 0,
      solution:
        'Factor the $3$ out of the $x$-terms before completing the square: $3x^2 + 12x + 20 = 3(x^2 + 4x) + 20 = 3\\left[(x+2)^2 - 4\\right] + 20 = 3(x+2)^2 - 12 + 20 = 3(x+2)^2 + 8$. The square is at least $0$, so the expression is at least $8$, and it equals $8$ when $x = -2$. Check by substituting: $3(4) + 12(-2) + 20 = 12 - 24 + 20 = 8$ ✓. Check the neighbours: $x = -1$ gives $3 - 12 + 20 = 11$ and $x = -3$ gives $27 - 36 + 20 = 11$ — equal heights either side, both above $8$ ✓. (The choice $16$ subtracts $4$ instead of $12$, forgetting that the $3$ outside the bracket multiplies the $-4$ inside it. The choice $20$ reads the constant term as the minimum, but $20$ is just the value at $x = 0$. The choice $-2$ says WHERE the minimum happens, not what it is.)',
    },
    {
      q: 'What is the greatest value of $-2x^2 + 20x - 43$?',
      choices: ['$-43$', '$-18$', '$5$', '$7$'],
      answer: 3,
      solution:
        'Pull out the $-2$: $-2x^2 + 20x - 43 = -2(x^2 - 10x) - 43 = -2\\left[(x-5)^2 - 25\\right] - 43 = -2(x-5)^2 + 50 - 43 = -2(x-5)^2 + 7$. Since $-2(x-5)^2$ is never positive, the expression never rises above $7$, and it reaches $7$ at $x = 5$. Check by expanding back: $-2(x^2 - 10x + 25) + 7 = -2x^2 + 20x - 50 + 7 = -2x^2 + 20x - 43$ ✓, the expression we started with. Check by substituting: $-2(25) + 100 - 43 = -50 + 57 = 7$ ✓. (The choice $-43$ reads the constant term, which is only the value at $x = 0$. The choice $-18$ carries $25$ out of the bracket without multiplying it by the $-2$, writing $-2(x-5)^2 + 25 - 43$. The choice $5$ answers WHERE the maximum happens instead of how big it is.)',
    },
    {
      q: 'The expression $4x^2 - 24x + k$ has a minimum value of $2$. What is $k$?',
      choices: ['$k = 2$', '$k = 38$', '$k = 11$', '$k = -34$'],
      answer: 1,
      solution:
        'Complete the square while carrying the unknown along: $4x^2 - 24x + k = 4(x^2 - 6x) + k = 4\\left[(x-3)^2 - 9\\right] + k = 4(x-3)^2 - 36 + k$. The square vanishes at $x = 3$, so the minimum value is $k - 36$. Setting $k - 36 = 2$ gives $k = 38$. Check forward with $k = 38$: the expression becomes $4(x-3)^2 + 2$, which is at least $2$ and equals $2$ at $x = 3$ ✓. Substitute to be sure: $4(9) - 72 + 38 = 36 - 72 + 38 = 2$ ✓, and the neighbour $x = 4$ gives $64 - 96 + 38 = 6$, safely above ✓. (The choice $k = 2$ reads the constant term as the minimum; with $k = 2$ the expression really bottoms out at $2 - 36 = -34$. The choice $k = 11$ completes the square as though the leading coefficient were $1$, solving $k - 9 = 2$. The choice $k = -34$ loses a sign and solves $k + 36 = 2$.)',
    },
  ],
  // c5 — the smallest constant that keeps a quadratic from ever going below zero.
  // The judgement is the strictness: with $\ge$ the borderline value is allowed,
  // with $>$ it is not. One version carries a leading coefficient; one asks the
  // same thing in the language of real solutions.
  [
    {
      q: 'For which values of $c$ is $x^2 + 8x + c > 0$ true for EVERY real number $x$?',
      choices: ['$c \\ge 16$', '$c > 4$', '$c > 64$', '$c > 16$'],
      answer: 3,
      solution:
        'Complete the square: $x^2 + 8x + c = (x+4)^2 + c - 16$. The square is $0$ at $x = -4$ and positive everywhere else, so the smallest the whole expression ever gets is $c - 16$. For a STRICT $> 0$ at every $x$ we need that smallest value to be strictly positive: $c - 16 > 0$, that is $c > 16$. Check the borderline: $c = 16$ gives $(x+4)^2$, which equals $0$ at $x = -4$ — not $> 0$, so $16$ itself is out ✓. Check one value that should work: $c = 17$ gives $(x+4)^2 + 1 \\ge 1 > 0$ ✓, and one that should not: $c = 10$ gives $(x+4)^2 - 6$, which is $-6$ at $x = -4$ ✗. (The choice $c \\ge 16$ lets in the one value that produces an exact zero — the whole point of the strict inequality. The choice $c > 4$ halves the $8$ but forgets to square the half. The choice $c > 64$ comes from writing the no-real-roots test as $b^2 - c < 0$, leaving the $4a$ out of $b^2 - 4ac$.)',
    },
    {
      q: 'What is the smallest value of $m$ for which $3x^2 + 18x + m \\ge 0$ holds for all real $x$?',
      choices: ['$m = 27$', '$m = 81$', '$m = 108$', '$m = 9$'],
      answer: 0,
      solution:
        'Factor the $3$ out first: $3x^2 + 18x + m = 3(x^2 + 6x) + m = 3(x+3)^2 - 27 + m$. The lowest value is $m - 27$, reached at $x = -3$, so the condition is $m - 27 \\ge 0$, that is $m \\ge 27$, and the smallest allowed value is $m = 27$. Because the inequality is $\\ge$ and not $>$, this borderline value is genuinely allowed: with $m = 27$ the expression is $3(x+3)^2$, which is exactly $0$ at $x = -3$ and positive at every other $x$ ✓. Check by substituting $m = 27$: at $x = -3$, $27 - 54 + 27 = 0$ ✓; at $x = -4$, $48 - 72 + 27 = 3 \\ge 0$ ✓; at $x = 0$, $27 \\ge 0$ ✓. Check that a smaller $m$ fails: $m = 20$ gives $3(9) - 54 + 20 = -7 < 0$ at $x = -3$ ✗. (The choice $m = 9$ completes the square without factoring the $3$ out, using $m - 9$. The choice $m = 81$ tests $18^2 - 4m \\le 0$, leaving the $a = 3$ out of $4ac$. The choice $m = 108$ tests $18^2 - 3m \\le 0$, leaving the $4$ out instead.)',
    },
    {
      q: 'The equation $x^2 + 14x + t = 0$ has no real solutions. What does that tell you about $t$?',
      choices: ['$t \\ge 49$', '$t > 49$', '$t > 7$', '$t < 49$'],
      answer: 1,
      solution:
        'Complete the square: $x^2 + 14x + t = (x+7)^2 + t - 49$, so the equation is the same as $(x+7)^2 = 49 - t$. A square of a real number is never negative, so this has no real solution exactly when the right-hand side is negative: $49 - t < 0$, that is $t > 49$. Check the borderline: $t = 49$ gives $(x+7)^2 = 0$, which does have the real solution $x = -7$, so $49$ must be excluded ✓. Check on both sides: $t = 50$ gives $(x+7)^2 = -1$, impossible for real $x$ ✓; $t = 40$ gives $(x+7)^2 = 9$, so $x = -4$ or $x = -10$ — two real solutions ✓. (The choice $t \\ge 49$ includes the one value that gives a real repeated solution. The choice $t > 7$ halves the $14$ without squaring the half. The choice $t < 49$ is exactly the set where the equation DOES have two real solutions.)',
    },
  ],
  // c6 — a fixed sum or product with the other quantity to be optimised. Each
  // version states where equality holds and checks the equality point is legal
  // under the problem's own constraint.
  [
    {
      q: 'Positive numbers $a$ and $b$ satisfy $2a + b = 24$. What is the largest possible value of $ab$?',
      choices: ['$144$', '$64$', '$72$', '$12$'],
      answer: 2,
      solution:
        'The two numbers do not carry equal weight here, so an even split is not the thing to aim for. Substitute $b = 24 - 2a$: the product is $P = a(24 - 2a) = -2a^2 + 24a = -2(a-6)^2 + 72$. The square never helps, so $P \\le 72$, with equality exactly when $a = 6$ — and then $b = 24 - 12 = 12$, so both numbers are positive and the constraint holds ✓, which makes $72$ genuinely reachable. Check the same bound from the trivial inequality, applied to the two WEIGHTED pieces $2a$ and $b$: $(2a - b)^2 \\ge 0$ gives $(2a + b)^2 \\ge 4(2a)(b) = 8ab$, so $8ab \\le 24^2 = 576$ and $ab \\le 72$, with equality only when $2a = b$ ✓. Check the neighbours: $a = 5$ gives $5 \\times 14 = 70$ and $a = 7$ gives $7 \\times 10 = 70$, both below $72$ ✓. (The choice $144$ splits the $24$ evenly into $a = b = 12$, as though the constraint read $a + b = 24$; that pair actually costs $2(12) + 12 = 36$, well over budget. The choice $64$ comes from $a = b = 8$, which IS allowed since $2(8) + 8 = 24$ — a legal split, just not the best one. The choice $12$ reports the number $b$ rather than the product.)',
    },
    {
      q: 'Two positive numbers multiply to $49$. How small can their sum be?',
      choices: ['$7$', '$49$', '$98$', '$14$'],
      answer: 3,
      solution:
        'Let the numbers be $a$ and $b$ with $ab = 49$. Start from the trivial inequality applied to $a - b$: $(a-b)^2 \\ge 0$ expands to $a^2 - 2ab + b^2 \\ge 0$. Adding $4ab$ to both sides gives $a^2 + 2ab + b^2 \\ge 4ab$, that is $(a+b)^2 \\ge 4(49) = 196$. Both numbers are positive, so $a + b$ is positive and $a + b \\ge 14$. Equality needs $a = b$, and $a = b = 7$ does multiply to $49$ and is positive, so the bound is attainable and the smallest sum is $14$ ✓. Check directly with $b = \\frac{49}{a}$: $a = 7$ gives $7 + 7 = 14$; $a = 1$ gives $1 + 49 = 50$; $a = 49$ gives $50$ again; $a = 3.5$ gives $3.5 + 14 = 17.5$ — every trial lands above $14$ ✓. (The choice $7$ reports each number instead of their sum. The choice $49$ repeats the product. The choice $98$ doubles the product instead of doubling the common value $7$.)',
    },
    {
      q: 'Real numbers $x$ and $y$ satisfy $x + y = 12$. What is the smallest possible value of $x^2 + y^2$?',
      choices: ['$36$', '$72$', '$144$', '$288$'],
      answer: 1,
      solution:
        'Substitute $y = 12 - x$ and complete the square: $x^2 + (12-x)^2 = x^2 + 144 - 24x + x^2 = 2x^2 - 24x + 144 = 2(x-6)^2 + 72$. The square is at least $0$, so $x^2 + y^2 \\ge 72$, with equality exactly at $x = 6$ — and then $y = 12 - 6 = 6$, which does satisfy $x + y = 12$, so the minimum is genuinely reached ✓. Check a second way with the identity $x^2 + y^2 = (x+y)^2 - 2xy = 144 - 2xy$: making $x^2 + y^2$ small means making $xy$ large, and $xy = x(12-x) = -(x-6)^2 + 36 \\le 36$, so $x^2 + y^2 \\ge 144 - 72 = 72$ ✓. Check with numbers: $6^2 + 6^2 = 72$; $5^2 + 7^2 = 74$; $4^2 + 8^2 = 80$ — all above ✓. (The choice $36$ is the largest value of the PRODUCT $xy$, a different quantity. The choice $144$ is $(x+y)^2$, which counts an extra $2xy$ that $x^2 + y^2$ does not include; it is also what the lopsided pair $x = 12$, $y = 0$ gives. The choice $288$ doubles the answer, as if both squares had to be counted twice.)',
    },
  ],
  // c7 — a cubic inequality solved by factoring and a sign chart, never by
  // dividing by $x$. One version has a DOUBLE root, where the sign does not flip
  // and a single point drops out of an otherwise clean interval.
  [
    {
      q: 'Solve $x^3 \\le 9x$.',
      choices: [
        '$-3 \\le x \\le 0$ or $x \\ge 3$',
        '$x \\le -3$ or $0 \\le x \\le 3$',
        '$-3 \\le x \\le 3$',
        '$x \\le 3$',
      ],
      answer: 1,
      solution:
        'Do not divide by $x$ — its sign is unknown, and dividing would throw away every negative solution. Move everything to one side and factor: $x^3 - 9x = x(x-3)(x+3) \\le 0$, with roots $-3$, $0$ and $3$. On the far right all three factors are positive, so the product is positive for $x > 3$; walking left the sign flips at each root: negative on $0 < x < 3$, positive on $-3 < x < 0$, negative on $x < -3$. The $\\le$ takes the negative pieces together with all three roots: $x \\le -3$ or $0 \\le x \\le 3$. Check in the ORIGINAL inequality: $x = -4$ gives $-64 \\le -36$ ✓; $x = 2$ gives $8 \\le 18$ ✓; $x = -1$ gives $-1 \\le -9$, false ✗ so $-1$ is correctly left out; $x = 4$ gives $64 \\le 36$, false ✗. (The first choice is the solution of the reversed inequality $x^3 \\ge 9x$. The choice $-3 \\le x \\le 3$ is what you get by cancelling an $x$ to reach $x^2 \\le 9$ — legal only when $x$ is positive, and it invents solutions like $x = -1$. The choice $x \\le 3$ cancels the $x$ and then forgets the square as well.)',
    },
    {
      q: 'Solve $2x^3 < 8x^2$.',
      choices: ['$x < 4$, $x \\ne 0$', '$x < 4$', '$0 < x < 4$', '$x > 4$'],
      answer: 0,
      solution:
        'Collect on one side: $2x^3 - 8x^2 < 0$, which factors as $2x^2(x-4) < 0$. The factor $2x^2$ is never negative, so it cannot supply the minus sign — the product is negative exactly when $2x^2$ is strictly POSITIVE and $x - 4$ is negative. That means $x < 4$ together with $x \\ne 0$. The repeated factor $x^2$ is why $0$ behaves differently from $4$: crossing a double root does not flip the sign, it just pauses at zero. Check in the original: $x = -1$ gives $-2 < 8$ ✓; $x = 3$ gives $54 < 72$ ✓; $x = 0$ gives $0 < 0$, false ✗ so $0$ must be removed; $x = 5$ gives $250 < 200$, false ✗. (The choice $x < 4$ forgets that at $x = 0$ both sides are $0$ and a strict $<$ is not satisfied. The choice $0 < x < 4$ treats the double root like an ordinary sign change and throws away the whole negative branch, though $x = -1$ plainly works. The choice $x > 4$ divides by $2x^2$ and flips the inequality, but $2x^2$ is never negative, so there is nothing to flip.)',
    },
    {
      q: 'Solve $x^3 + 2x^2 \\ge 15x$.',
      choices: [
        '$x \\le -5$ or $0 \\le x \\le 3$',
        '$x \\ge 3$',
        '$-5 \\le x \\le 0$ or $x \\ge 3$',
        '$-5 \\le x \\le 3$',
      ],
      answer: 2,
      solution:
        'Move everything across and pull out the common $x$: $x^3 + 2x^2 - 15x = x(x^2 + 2x - 15) = x(x+5)(x-3) \\ge 0$, with roots $-5$, $0$ and $3$. From the right, where all three factors are positive, the sign alternates as each root is crossed: positive for $x > 3$, negative on $0 < x < 3$, positive on $-5 < x < 0$, negative for $x < -5$. Taking the positive pieces and including the roots gives $-5 \\le x \\le 0$ or $x \\ge 3$. Check in the original: $x = -1$ gives $-1 + 2 = 1$ against $-15$, and $1 \\ge -15$ ✓; $x = 4$ gives $64 + 32 = 96$ against $60$ ✓; $x = 1$ gives $3 \\ge 15$, false ✗; $x = -6$ gives $-216 + 72 = -144$ against $-90$, and $-144 \\ge -90$ is false ✗. (The first choice is the solution set of the opposite inequality. The choice $x \\ge 3$ keeps only the rightmost piece and misses the whole interval $-5 \\le x \\le 0$. The choice $-5 \\le x \\le 3$ treats the three roots as if they bounded one single interval, ignoring the sign flip at $0$.)',
    },
  ],
  // c8 — an inequality with the variable in a denominator, compared against a
  // non-zero number. The method is always: subtract, combine into one fraction,
  // read the signs. One version keeps a strict sign, so the numerator zero goes.
  [
    {
      q: 'Solve $\\frac{5}{x + 2} \\le 1$.',
      choices: [
        '$x \\ge 3$',
        '$-2 < x \\le 3$',
        '$x < -2$ or $x \\ge 3$',
        '$x \\le -2$ or $x \\ge 3$',
      ],
      answer: 2,
      solution:
        'Never multiply through by $x + 2$: its sign is unknown, so you would not know whether to flip. Subtract instead and combine: $\\frac{5}{x+2} - 1 = \\frac{5 - (x+2)}{x+2} = \\frac{3-x}{x+2} \\le 0$. The key points are $3$ (top zero) and $-2$ (bottom zero). For $x < -2$ the top is positive and the bottom negative, so the fraction is negative ✓; between $-2$ and $3$ both are positive, so it is positive; for $x > 3$ the top is negative and the bottom positive, so it is negative ✓. Boundaries: $x = 3$ makes the fraction $0$, which the $\\le$ accepts, and the original reads $\\frac{5}{5} = 1 \\le 1$ ✓; $x = -2$ is undefined and excluded. Answer: $x < -2$ or $x \\ge 3$. Check in the original: $x = -3$ gives $\\frac{5}{-1} = -5 \\le 1$ ✓; $x = 0$ gives $2.5 \\le 1$, false ✗; $x = 4$ gives $\\frac{5}{6} \\approx 0.83 \\le 1$ ✓. (The choice $x \\ge 3$ is what multiplying by $x+2$ as though it were positive gives — it silently deletes the entire left branch, though $x = -3$ works. The choice $-2 < x \\le 3$ has the sign chart backwards. The choice $x \\le -2$ includes the forbidden point $-2$.)',
    },
    {
      q: 'Solve $\\frac{x + 6}{x - 2} \\ge 3$.',
      choices: [
        '$2 \\le x \\le 6$',
        '$x \\le 2$ or $x \\ge 6$',
        '$x \\ge 6$',
        '$2 < x \\le 6$',
      ],
      answer: 3,
      solution:
        'Subtract $3$ and combine over one denominator: $\\frac{x+6}{x-2} - 3 = \\frac{x + 6 - 3(x-2)}{x-2} = \\frac{x + 6 - 3x + 6}{x-2} = \\frac{12 - 2x}{x-2} \\ge 0$. The key points are $6$ (top zero) and $2$ (bottom zero). For $x < 2$ the top is positive and the bottom negative, so the fraction is negative; between $2$ and $6$ both are positive ✓; for $x > 6$ the top turns negative while the bottom stays positive. Boundaries: $x = 6$ gives $0$, allowed by $\\ge$, and the original reads $\\frac{12}{4} = 3 \\ge 3$ ✓; $x = 2$ is undefined. Answer: $2 < x \\le 6$. Check in the original: $x = 3$ gives $\\frac{9}{1} = 9 \\ge 3$ ✓; $x = 7$ gives $\\frac{13}{5} = 2.6 \\ge 3$, false ✗; $x = 0$ gives $\\frac{6}{-2} = -3 \\ge 3$, false ✗. (The choice $2 \\le x \\le 6$ includes the point where the fraction is undefined. The choice $x \\le 2$ or $x \\ge 6$ is the outside set, where the combined fraction is negative. The choice $x \\ge 6$ comes from multiplying by $x - 2$ and then keeping only the tail beyond the numerator zero.)',
    },
    {
      q: 'Solve $\\frac{4}{x - 3} > 2$.',
      choices: [
        '$3 < x < 5$',
        '$x < 5$',
        '$3 < x \\le 5$',
        '$x < 3$ or $x > 5$',
      ],
      answer: 0,
      solution:
        'Subtract $2$ and combine: $\\frac{4}{x-3} - 2 = \\frac{4 - 2(x-3)}{x-3} = \\frac{10 - 2x}{x-3} > 0$. The key points are $5$ (top zero) and $3$ (bottom zero), and a fraction is positive when top and bottom agree in sign — that happens between them, on $3 < x < 5$. Both ends are out, but for different reasons: at $x = 5$ the original gives $\\frac{4}{2} = 2$, which is not strictly greater than $2$, and at $x = 3$ the fraction has no value at all. Check in the original: $x = 4$ gives $\\frac{4}{1} = 4 > 2$ ✓; $x = 6$ gives $\\frac{4}{3} \\approx 1.33$, not more than $2$ ✗; $x = 2$ gives $\\frac{4}{-1} = -4$ ✗. (The choice $x < 5$ comes from multiplying by $x - 3$ as if it were positive, giving $4 > 2x - 6$; that answer wrongly admits $x = 0$, where the fraction is negative. The choice $3 < x \\le 5$ keeps the endpoint where the two sides are exactly equal, which a strict $>$ rejects. The choice $x < 3$ or $x > 5$ is the set where the combined fraction is negative.)',
    },
  ],
  // c9 — fencing, where part of the boundary is free or an inner divider eats
  // into the total. The trap is always counting the wrong number of paid sides.
  // One version asks for the DIMENSIONS instead of the area.
  [
    {
      q: 'A rectangular reading nook is roped off against a straight wall, with $44$ meters of rope covering the other three sides. Which dimensions enclose the most floor space?',
      choices: [
        '$11$ m by $11$ m',
        '$22$ m by $22$ m',
        '$8$ m by $28$ m',
        '$11$ m by $22$ m',
      ],
      answer: 3,
      solution:
        'Let $w$ be each of the two sides running out from the wall. The rope covers those two sides plus the far side, so the far side is $44 - 2w$ and the area is $A = w(44 - 2w)$. This is a downward parabola with roots $w = 0$ and $w = 22$, so its vertex sits halfway, at $w = 11$; then the far side is $44 - 22 = 22$ and the area is $11 \\times 22 = 242$ square meters. Check the rope: $11 + 11 + 22 = 44$ ✓, exactly what is available. Check the neighbours: $w = 10$ gives $10 \\times 24 = 240$ and $w = 12$ gives $12 \\times 20 = 240$ — both below $242$ ✓. Notice the best nook is twice as wide as it is deep; the free wall shifts the optimum away from a square. (The choice $11$ m by $11$ m treats the $44$ as a full perimeter and forgets the wall is free; that nook uses only $11 + 11 + 11 = 33$ m and leaves $11$ m of rope on the floor. The choice $22$ m by $22$ m would need $22 + 22 + 22 = 66$ m of rope. The choice $8$ m by $28$ m is a legal nook — $8 + 8 + 28 = 44$ ✓ — but its area is only $224$.)',
    },
    {
      q: 'A rectangular chicken run is split into two equal halves by an extra fence parallel to one pair of sides. Counting the outer sides and the divider together, the farmer uses $96$ meters of fencing. What is the largest total area, in square meters?',
      choices: ['$576$', '$384$', '$768$', '$288$'],
      answer: 1,
      solution:
        'Let $w$ be the length of the divider. The divider runs parallel to two of the outer sides, so those two sides are $w$ as well and the fencing covers three pieces of length $w$ plus two of length $L$: $3w + 2L = 96$, so $L = \\frac{96 - 3w}{2}$. The area is $A = wL = \\frac{w(96 - 3w)}{2}$, a downward parabola with roots $w = 0$ and $w = 32$; the vertex is halfway, at $w = 16$. Then $L = \\frac{96 - 48}{2} = 24$ and $A = 16 \\times 24 = 384$ square meters. Check the fencing: $3(16) + 2(24) = 48 + 48 = 96$ ✓. Check the neighbours: $w = 15$ gives $L = \\frac{51}{2} = 25.5$ and $A = 382.5$; $w = 17$ gives $L = \\frac{45}{2} = 22.5$ and $A = 382.5$ — equal, and both under $384$ ✓. (The choice $576$ is $24 \\times 24$, the answer if the divider is forgotten and all $96$ m go into four outer sides. The choice $768$ maximises $w(96 - 3w)$ and never halves it, mixing up $L$ with $2L$. The choice $288$ splits the $96$ into four equal $24$ m pieces, giving $w = 24$ and $L = 12$ — a legal run, but not the best one.)',
    },
    {
      q: 'A rectangular flower bed is edged the whole way around. An $8$ meter hedge already covers part of one side, and $68$ meters of new edging cover the rest of the boundary. What is the greatest possible area, in square meters?',
      choices: ['$289$', '$225$', '$361$', '$1444$'],
      answer: 2,
      solution:
        'The hedge is part of the boundary, so the full perimeter is $68 + 8 = 76$ meters. That means the width and the length add to $\\frac{76}{2} = 38$, and the area is $A = w(38 - w) = -(w-19)^2 + 361$. The square never helps, so $A \\le 361$, with equality at $w = 19$ — a $19 \\times 19$ square bed. That is allowed here, since the $8$ m hedge fits comfortably along a $19$ m side, so the maximum is genuinely reached ✓. Check the boundary: $19 + 19 + 19 + 19 = 76$, of which $8$ m is hedge and $68$ m is edging ✓. Check the neighbours: $18 \\times 20 = 360$ and $17 \\times 21 = 357$, both below $361$ ✓. (The choice $289$ is $17 \\times 17$, from ignoring the hedge and treating $68$ as the whole perimeter. The choice $225$ is $15 \\times 15$, from subtracting the hedge instead of adding it. The choice $1444$ is $38^2$, from using the half-perimeter as both side lengths — that bed would need $152$ meters of boundary.)',
    },
  ],
  // c10 — a thrown-object quadratic. One version carries a non-zero launch
  // height; one asks for a DURATION, so a quadratic inequality has to be solved
  // before the two times can be subtracted; one runs backwards from the peak time
  // to the missing coefficient.
  [
    {
      q: 'A model plane is launched so that its height in meters after $t$ seconds is $h = -5t^2 + 40t + 3$. How high does it get?',
      choices: ['$83$ meters', '$80$ meters', '$3$ meters', '$4$ meters'],
      answer: 0,
      solution:
        'The peak of a downward parabola is at $t = -\\frac{b}{2a} = -\\frac{40}{2(-5)} = 4$ seconds. Substituting: $h = -5(16) + 40(4) + 3 = -80 + 160 + 3 = 83$ meters. Check by completing the square: $-5(t^2 - 8t) + 3 = -5\\left[(t-4)^2 - 16\\right] + 3 = -5(t-4)^2 + 80 + 3 = -5(t-4)^2 + 83$, so the height never exceeds $83$ ✓. Check the neighbours: $h(3) = -45 + 120 + 3 = 78$ and $h(5) = -125 + 200 + 3 = 78$ — equal heights either side of the peak, both below $83$ ✓. (The choice $80$ drops the $+3$ the plane started with. The choice $3$ uses $t = -\\frac{b}{a} = 8$, forgetting the $2$; $h(8) = -320 + 320 + 3 = 3$, which is the moment the plane falls back to launch height. The choice $4$ answers WHEN the peak happens rather than how high it is.)',
    },
    {
      q: 'A toy glider’s height is $h = -5t^2 + 25t$ meters, $t$ seconds after launch. For how long is the glider at least $20$ meters above the ground?',
      choices: ['$1$ second', '$4$ seconds', '$5$ seconds', '$3$ seconds'],
      answer: 3,
      solution:
        'The condition is $-5t^2 + 25t \\ge 20$. Collect everything on one side: $0 \\ge 5t^2 - 25t + 20$, and dividing by the positive number $5$ keeps the direction: $t^2 - 5t + 4 \\le 0$, which factors as $(t-1)(t-4) \\le 0$. A product of two factors is negative or zero between the roots, so $1 \\le t \\le 4$ — the glider is high enough from the first second to the fourth, a stretch of $4 - 1 = 3$ seconds. Check the endpoints: $h(1) = -5 + 25 = 20$ ✓ exactly $20$, and $h(4) = -80 + 100 = 20$ ✓. Check inside and outside: $h(2.5) = -31.25 + 62.5 = 31.25 \\ge 20$ ✓; $h(0.5) = -1.25 + 12.5 = 11.25 < 20$ ✗. (The choices $1$ second and $4$ seconds each report one of the two times instead of the gap between them. The choice $5$ seconds is the whole flight, since $h = 0$ at $t = 0$ and again at $t = 5$ — the glider spends the first and last seconds below $20$ meters.)',
    },
    {
      q: 'A water rocket rises with height $h = -5t^2 + bt$ meters and reaches its highest point exactly $4$ seconds after launch. How high is that highest point?',
      choices: ['$40$ meters', '$80$ meters', '$160$ meters', '$0$ meters'],
      answer: 1,
      solution:
        'The peak of $h = -5t^2 + bt$ sits at $t = -\\frac{b}{2(-5)} = \\frac{b}{10}$. Setting $\\frac{b}{10} = 4$ gives $b = 40$, so the height is $h = -5t^2 + 40t$ and the peak is $h(4) = -80 + 160 = 80$ meters. Check by completing the square: $-5(t^2 - 8t) = -5(t-4)^2 + 80$, so the greatest height is $80$ at $t = 4$ ✓. Check with symmetry: $h = 0$ at $t = 0$ and at $t = 8$, and $4$ is exactly halfway between them ✓; the neighbours $h(3) = -45 + 120 = 75$ and $h(5) = -125 + 200 = 75$ agree ✓. (The choice $40$ reports $b$ itself rather than a height. The choice $160$ uses only the $40t$ term at $t = 4$ and forgets the $-5t^2$ pulling the rocket back. The choice $0$ comes from solving $\\frac{b}{5} = 4$, forgetting the $2$ in $2a$: that gives $b = 20$, and $h(4) = -80 + 80 = 0$.)',
    },
  ],
  // c11 — an inequality in a squared bracket, where the shift inside the bracket
  // has to be undone at the end. One version has a coefficient on $x$ inside the
  // square; one is a double inequality, so two windows have to be intersected.
  [
    {
      q: 'Solve $(x + 3)^2 \\ge 25$.',
      choices: [
        '$-8 \\le x \\le 2$',
        '$x \\le -5$ or $x \\ge 5$',
        '$x \\le -8$ or $x \\ge 2$',
        '$x \\ge 2$',
      ],
      answer: 2,
      solution:
        'Subtract and factor as a difference of squares: $(x+3)^2 - 25 = \\left[(x+3) - 5\\right]\\left[(x+3) + 5\\right] = (x-2)(x+8) \\ge 0$, with roots $-8$ and $2$. A product of two factors is positive outside its roots and zero at them, so the answer is $x \\le -8$ or $x \\ge 2$. Check in the original: $x = -9$ gives $(-6)^2 = 36 \\ge 25$ ✓; $x = 3$ gives $36 \\ge 25$ ✓; $x = 0$ gives $9 \\ge 25$, false ✗; and both boundaries give exactly $25$, which the $\\ge$ accepts ✓. A second route: $(x+3)^2 \\ge 25$ says $x + 3$ is at least $5$ units from $0$, so $x + 3 \\le -5$ or $x + 3 \\ge 5$, giving $x \\le -8$ or $x \\ge 2$ ✓. (The first choice is the BETWEEN set, which solves $(x+3)^2 \\le 25$ instead. The choice $x \\le -5$ or $x \\ge 5$ answers $x^2 \\ge 25$ and forgets the shift of $3$. The choice $x \\ge 2$ keeps only the branch where $x + 3 \\ge 5$ and drops the branch where $x + 3 \\le -5$.)',
    },
    {
      q: 'Solve $(2x - 1)^2 < 49$.',
      choices: [
        '$-3 < x < 4$',
        '$-7 < x < 7$',
        '$-6 < x < 8$',
        '$-3 \\le x \\le 4$',
      ],
      answer: 0,
      solution:
        'A square is less than $49$ exactly when the thing being squared is within $7$ of zero, so $-7 < 2x - 1 < 7$. Add $1$ throughout: $-6 < 2x < 8$. Divide throughout by $2$: $-3 < x < 4$. Check by factoring instead: $(2x-1)^2 - 49 = (2x - 8)(2x + 6) = 4(x-4)(x+3) < 0$, which is negative between the roots $-3$ and $4$ ✓ — the same window. Check in the original: $x = 0$ gives $1 < 49$ ✓; $x = 3$ gives $25 < 49$ ✓; $x = -3$ gives $49 < 49$, false ✗; $x = 4$ gives $49$, false ✗. (The choice $-7 < x < 7$ forgets that it is $2x - 1$, not $x$, that sits inside the square. The choice $-6 < x < 8$ undoes the $-1$ but never divides by the $2$. The choice with closed ends admits the two values where the square is exactly $49$, which a strict $<$ rejects.)',
    },
    {
      q: 'Solve the double inequality $4 \\le (x - 3)^2 < 36$.',
      choices: [
        '$-3 \\le x \\le 1$ or $5 \\le x \\le 9$',
        '$-3 < x \\le 1$ or $5 \\le x < 9$',
        '$-3 < x < 9$',
        '$1 \\le x \\le 5$',
      ],
      answer: 1,
      solution:
        'Write $u = x - 3$ and handle the two halves separately. From $u^2 \\ge 4$: $u$ is at least $2$ away from zero, so $u \\le -2$ or $u \\ge 2$. From $u^2 < 36$: $u$ is strictly within $6$ of zero, so $-6 < u < 6$. Overlapping the two: $-6 < u \\le -2$ or $2 \\le u < 6$. Adding $3$ back gives $-3 < x \\le 1$ or $5 \\le x < 9$. Notice the ends do not match: the $\\ge 4$ side is inclusive while the $< 36$ side is strict. Check in the original: $x = 1$ gives $(-2)^2 = 4$, and $4 \\le 4 < 36$ ✓; $x = 5$ gives $4$ ✓; $x = 8$ gives $25$ ✓; $x = 2$ gives $1$, and $4 \\le 1$ is false ✗; $x = 9$ gives $36$, and $36 < 36$ is false ✗; $x = -3$ gives $36$ ✗. (The first choice closes all four ends and admits $-3$ and $9$, where the square is exactly $36$. The choice $-3 < x < 9$ answers only the $< 36$ half and forgets the $\\ge 4$ half, which hollows out the middle. The choice $1 \\le x \\le 5$ is exactly that hollow middle — the values that FAIL.)',
    },
  ],
  // c12 — completing the square in two variables at once. One version puts a
  // coefficient on one of the squares; one asks WHERE as well as WHAT.
  [
    {
      q: 'What is the minimum value of $x^2 + y^2 + 6x - 12y + 50$?',
      choices: ['$5$', '$50$', '$41$', '$95$'],
      answer: 0,
      solution:
        'Complete the square in each variable separately, since neither interferes with the other: $x^2 + 6x = (x+3)^2 - 9$ and $y^2 - 12y = (y-6)^2 - 36$. The expression becomes $(x+3)^2 + (y-6)^2 + 50 - 9 - 36 = (x+3)^2 + (y-6)^2 + 5$. Each square is at least $0$, and both can be $0$ at the same time — take $x = -3$ and $y = 6$ — so the minimum $5$ is genuinely reached. Check by substituting that point into the original: $9 + 36 - 18 - 72 + 50 = 95 - 90 = 5$ ✓. Check a neighbour: $x = -2$, $y = 6$ gives $4 + 36 - 12 - 72 + 50 = 6$, one above ✓. (The choice $50$ reads the constant term, which is only the value at $x = y = 0$. The choice $41$ completes the square in $x$ and forgets to do the same for $y$, computing $50 - 9$. The choice $95$ adds the two corrections instead of subtracting them, computing $50 + 9 + 36$.)',
    },
    {
      q: 'What is the smallest value of $2x^2 + y^2 - 8x + 6y + 30$?',
      choices: ['$30$', '$17$', '$13$', '$22$'],
      answer: 2,
      solution:
        'Only the $x$-part carries a coefficient, so factor the $2$ out of it before completing the square: $2x^2 - 8x = 2(x^2 - 4x) = 2\\left[(x-2)^2 - 4\\right] = 2(x-2)^2 - 8$. The $y$-part is ordinary: $y^2 + 6y = (y+3)^2 - 9$. Together the expression is $2(x-2)^2 + (y+3)^2 + 30 - 8 - 9 = 2(x-2)^2 + (y+3)^2 + 13$. Both squares are at least $0$ and both vanish at $x = 2$, $y = -3$, so the smallest value is $13$. Check by substituting: $2(4) + 9 - 16 - 18 + 30 = 8 + 9 - 16 - 18 + 30 = 13$ ✓. Check a neighbour: $x = 3$, $y = -3$ gives $18 + 9 - 24 - 18 + 30 = 15$, above ✓. (The choice $30$ reads the constant term. The choice $17$ subtracts only $4$ for the $x$-part, forgetting that the $2$ outside multiplies the $-4$ inside. The choice $22$ handles the $x$-part correctly and then forgets the $y$-part altogether, computing $30 - 8$.)',
    },
    {
      q: 'At which point $(x, y)$ is $x^2 + y^2 + 10x - 4y + 38$ smallest, and what is its smallest value there?',
      choices: [
        '$(5, -2)$, value $9$',
        '$(-5, 2)$, value $38$',
        '$(-5, 2)$, value $67$',
        '$(-5, 2)$, value $9$',
      ],
      answer: 3,
      solution:
        'Complete both squares: $x^2 + 10x = (x+5)^2 - 25$ and $y^2 - 4y = (y-2)^2 - 4$, so the expression is $(x+5)^2 + (y-2)^2 + 38 - 25 - 4 = (x+5)^2 + (y-2)^2 + 9$. The two squares vanish together at $x = -5$, $y = 2$, and there the value is $9$. Check by substituting into the original: $25 + 4 - 50 - 8 + 38 = 67 - 58 = 9$ ✓. Check the neighbours: $(-4, 2)$ gives $16 + 4 - 40 - 8 + 38 = 10$ and $(-5, 3)$ gives $25 + 9 - 50 - 12 + 38 = 10$ — both one unit above ✓. (The choice $(5, -2)$ flips both signs; $(x+5)^2$ is zero at $-5$, not at $5$, and substituting $(5, -2)$ gives $25 + 4 + 50 + 8 + 38 = 125$, nowhere near the bottom. The choice with value $38$ reads the constant term as the minimum. The choice with value $67$ adds the corrections $25$ and $4$ instead of subtracting them.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 15,
  challenge,
}
