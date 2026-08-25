// Introduction to Algebra chapter 11 — variations for sections 11.1 and 11.2.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was re-derived from the question text alone and then checked
//    FORWARD: every expansion is multiplied back out term by term, every
//    factorization is expanded again, and every mental-arithmetic answer is
//    confirmed a second way (long multiplication or a last-digit check).
//  - Each distractor is one named mistake, named in a parenthetical at the end
//    of the solution. The traps running through this pair of sections are:
//    DROPPING THE MIDDLE TERM $2ab$, using $ab$ INSTEAD OF $2ab$, forgetting to
//    SQUARE THE COEFFICIENT of $x$, making the last term NEGATIVE in a square,
//    ADDING the correction instead of SUBTRACTING it in a straddling product,
//    using the NUMBER ITSELF instead of its square root, and stopping ONE ROUND
//    EARLY when a factor is still a difference of squares.
//  - No two choices inside an item name the same value, even written two ways.

const s111 = [
  // p1 — expand the square of a sum
  [
    {
      q: 'Expand $(x+4)^2$.',
      choices: ['$x^2 + 16$', '$x^2 + 4x + 16$', '$x^2 + 8x + 16$', '$x^2 + 8x + 8$'],
      answer: 2,
      solution:
        'Use $(a+b)^2 = a^2 + 2ab + b^2$ with $a = x$ and $b = 4$. The three pieces are $x^2$, then $2 \\cdot x \\cdot 4 = 8x$, then $4^2 = 16$, so $(x+4)^2 = x^2 + 8x + 16$. Check forward at $x = 1$: $(1+4)^2 = 25$, and $1 + 8 + 16 = 25$ ✓. (The choice $x^2 + 16$ DROPS THE MIDDLE TERM, and $1 + 16 = 17 \\ne 25$; the choice $x^2 + 4x + 16$ uses $ab = 4$ instead of $2ab = 8$, and $1 + 4 + 16 = 21$; the choice $x^2 + 8x + 8$ doubles the $4$ a second time instead of squaring it, and $1 + 8 + 8 = 17$.)',
    },
    {
      q: 'Expand $(y+6)^2$.',
      choices: ['$y^2 + 12y + 36$', '$y^2 + 36$', '$y^2 + 6y + 36$', '$y^2 + 12y + 6$'],
      answer: 0,
      solution:
        'With $a = y$ and $b = 6$: the square is $y^2$, the middle term is $2 \\cdot y \\cdot 6 = 12y$, and the last term is $6^2 = 36$. So $(y+6)^2 = y^2 + 12y + 36$. Check forward at $y = 1$: $(1+6)^2 = 49$, and $1 + 12 + 36 = 49$ ✓. (The choice $y^2 + 36$ DROPS THE MIDDLE TERM — the single most common mistake in this whole chapter; the choice $y^2 + 6y + 36$ uses $ab$ where $2ab$ belongs; the choice $y^2 + 12y + 6$ copies the $6$ into the last slot instead of squaring it.)',
    },
    {
      q: 'A square patio has side length $m + 9$ feet. Which expression gives its area, in square feet?',
      choices: ['$m^2 + 81$', '$m^2 + 9m + 81$', '$m^2 + 18m + 18$', '$m^2 + 18m + 81$'],
      answer: 3,
      solution:
        'The area of a square is (side)$^2$, so we need $(m+9)^2 = m^2 + 2 \\cdot m \\cdot 9 + 9^2 = m^2 + 18m + 81$. Check forward with $m = 1$: the patio is $10$ feet on a side, so the area is $100$ square feet, and $1 + 18 + 81 = 100$ ✓. (The choice $m^2 + 81$ DROPS THE MIDDLE TERM and would say a $10$-foot square has area $82$; the choice $m^2 + 9m + 81$ uses $ab$ instead of $2ab$; the choice $m^2 + 18m + 18$ doubles the $9$ where it should be squared.)',
    },
  ],
  // p2 — expand the square of a difference
  [
    {
      q: 'Expand $(x-4)^2$.',
      choices: ['$x^2 - 16$', '$x^2 - 8x + 16$', '$x^2 - 8x - 16$', '$x^2 + 8x + 16$'],
      answer: 1,
      solution:
        'Only the middle term picks up the minus sign: $(x-4)^2 = x^2 - 2 \\cdot x \\cdot 4 + 4^2 = x^2 - 8x + 16$. The last term is $+16$ because $(-4)(-4)$ is positive. Check forward at $x = 1$: $(1-4)^2 = 9$, and $1 - 8 + 16 = 9$ ✓. (The choice $x^2 - 16$ DROPS THE MIDDLE TERM, and $1 - 16 = -15$, which is not even positive; the choice $x^2 - 8x - 16$ makes the LAST TERM NEGATIVE, forgetting that a negative times a negative is positive; the choice $x^2 + 8x + 16$ is $(x+4)^2$ — the minus never made it into the middle term.)',
    },
    {
      q: 'Expand $(y-7)^2$.',
      choices: ['$y^2 - 49$', '$y^2 + 14y + 49$', '$y^2 - 14y + 49$', '$y^2 - 14y - 49$'],
      answer: 2,
      solution:
        'Use $(a-b)^2 = a^2 - 2ab + b^2$ with $a = y$ and $b = 7$: $y^2 - 14y + 49$. Check forward at $y = 1$: $(1-7)^2 = 36$, and $1 - 14 + 49 = 36$ ✓. (The choice $y^2 - 49$ DROPS THE MIDDLE TERM; the choice $y^2 + 14y + 49$ loses the minus sign on the middle term and gives $1 + 14 + 49 = 64$; the choice $y^2 - 14y - 49$ makes the LAST TERM NEGATIVE and gives $1 - 14 - 49 = -62$.)',
    },
    {
      q: 'Expand $(2-t)^2$.',
      choices: ['$4 - 2t + t^2$', '$4 - 4t - t^2$', '$4 + 4t + t^2$', '$4 - 4t + t^2$'],
      answer: 3,
      solution:
        'The formula does not care which letter comes first. With $a = 2$ and $b = t$: $a^2 = 4$, the middle term is $-2 \\cdot 2 \\cdot t = -4t$, and the last term is $t^2$. So $(2-t)^2 = 4 - 4t + t^2$. Check forward at $t = 1$: $(2-1)^2 = 1$, and $4 - 4 + 1 = 1$ ✓. (The choice $4 - 2t + t^2$ uses $ab = 2t$ instead of $2ab = 4t$, and $4 - 2 + 1 = 3$; the choice $4 - 4t - t^2$ makes the LAST TERM NEGATIVE, and $4 - 4 - 1 = -1$; the choice $4 + 4t + t^2$ is $(2+t)^2$, and $4 + 4 + 1 = 9$.)',
    },
  ],
  // p3 — square a number just above a round one
  [
    {
      q: 'Compute $41^2$ by writing $41 = 40 + 1$.',
      choices: ['$1681$', '$1601$', '$1641$', '$1680$'],
      answer: 0,
      solution:
        '$(40+1)^2 = 40^2 + 2 \\cdot 40 \\cdot 1 + 1^2 = 1600 + 80 + 1 = 1681$. Check forward the long way: $41 \\cdot 41 = 41 \\cdot 40 + 41 = 1640 + 41 = 1681$ ✓. (The choice $1601$ DROPS THE MIDDLE TERM; the choice $1641$ uses $ab = 40$ instead of $2ab = 80$; the choice $1680$ forgets the final $1^2$ — and a number ending in $1$ must have a square ending in $1$, which rules it out on sight.)',
    },
    {
      q: 'Compute $52^2$ by writing $52 = 50 + 2$.',
      choices: ['$2504$', '$2604$', '$2700$', '$2704$'],
      answer: 3,
      solution:
        '$(50+2)^2 = 2500 + 2 \\cdot 50 \\cdot 2 + 4 = 2500 + 200 + 4 = 2704$. Check forward: $52 \\cdot 52 = 52 \\cdot 50 + 52 \\cdot 2 = 2600 + 104 = 2704$ ✓. (The choice $2504$ DROPS THE MIDDLE TERM; the choice $2604$ uses $ab = 100$ instead of $2ab = 200$; the choice $2700$ forgets the final $2^2 = 4$, and the last digit of the answer has to be the last digit of $2 \\cdot 2$, namely $4$.)',
    },
    {
      q: 'Compute $71^2$ in your head by writing $71 = 70 + 1$.',
      choices: ['$4901$', '$5041$', '$4971$', '$5040$'],
      answer: 1,
      solution:
        '$(70+1)^2 = 4900 + 2 \\cdot 70 \\cdot 1 + 1 = 4900 + 140 + 1 = 5041$. Check forward: $71 \\cdot 71 = 71 \\cdot 70 + 71 = 4970 + 71 = 5041$ ✓. (The choice $4901$ DROPS THE MIDDLE TERM; the choice $4971$ uses $ab = 70$ instead of $2ab = 140$; the choice $5040$ forgets the final $1$, and a square of a number ending in $1$ must end in $1$.)',
    },
  ],
  // p4 — the middle term when the leading coefficient is not 1
  [
    {
      q: 'What is the middle term when $(5x+2)^2$ is expanded?',
      choices: ['$7x$', '$10x$', '$20x$', '$4x$'],
      answer: 2,
      solution:
        'The middle term is $2ab$ with $a = 5x$ and $b = 2$: that is $2 \\cdot 5x \\cdot 2 = 20x$. The full expansion is $25x^2 + 20x + 4$, and checking forward at $x = 1$ gives $(5+2)^2 = 49 = 25 + 20 + 4$ ✓. (The choice $10x$ uses $ab = 10x$ and forgets to double; the choice $4x$ FORGETS THE COEFFICIENT, treating $a$ as $x$ instead of $5x$; the choice $7x$ adds $5$ and $2$ instead of multiplying.)',
    },
    {
      q: 'What is the middle term when $(4x-3)^2$ is expanded?',
      choices: ['$-12x$', '$-24x$', '$24x$', '$-6x$'],
      answer: 1,
      solution:
        'The middle term is $-2ab$ with $a = 4x$ and $b = 3$: that is $-2 \\cdot 4x \\cdot 3 = -24x$. The full expansion is $16x^2 - 24x + 9$, and at $x = 1$ that is $16 - 24 + 9 = 1 = (4-3)^2$ ✓. (The choice $-12x$ uses $ab$ and forgets to double; the choice $24x$ loses the minus sign, and $16 + 24 + 9 = 49 \\ne 1$; the choice $-6x$ FORGETS THE COEFFICIENT, treating $a$ as $x$ rather than $4x$.)',
    },
    {
      q: 'When $(3x+5)^2$ is expanded, what is the sum of its three coefficients?',
      choices: ['$34$', '$49$', '$58$', '$64$'],
      answer: 3,
      solution:
        'Expand first: $(3x+5)^2 = (3x)^2 + 2 \\cdot 3x \\cdot 5 + 5^2 = 9x^2 + 30x + 25$, so the coefficients add to $9 + 30 + 25 = 64$. Check forward with a shortcut: the sum of the coefficients is always the value at $x = 1$, and $(3 \\cdot 1 + 5)^2 = 8^2 = 64$ ✓. (The choice $34$ DROPS THE MIDDLE TERM and adds only $9 + 25$; the choice $49$ uses $ab = 15$ instead of $2ab = 30$; the choice $58$ FORGETS TO SQUARE THE COEFFICIENT, writing $3x^2$ instead of $9x^2$, and adds $3 + 30 + 25$.)',
    },
  ],
  // p5 — square a number just below a round one
  [
    {
      q: 'Compute $39^2$ by writing $39 = 40 - 1$.',
      choices: ['$1601$', '$1521$', '$1519$', '$1520$'],
      answer: 1,
      solution:
        '$(40-1)^2 = 1600 - 2 \\cdot 40 \\cdot 1 + 1 = 1600 - 80 + 1 = 1521$. Check forward: $39 \\cdot 39 = 39 \\cdot 40 - 39 = 1560 - 39 = 1521$ ✓. (The choice $1601$ DROPS THE MIDDLE TERM; the choice $1519$ makes the LAST TERM NEGATIVE, subtracting the $1$ instead of adding it; the choice $1520$ forgets the final $+1$ — and a number ending in $9$ has a square ending in $1$, since $9 \\cdot 9 = 81$, so an answer ending in $0$ is wrong on sight.)',
    },
    {
      q: 'Compute $98^2$ by writing $98 = 100 - 2$.',
      choices: ['$9996$', '$9600$', '$9604$', '$9804$'],
      answer: 2,
      solution:
        '$(100-2)^2 = 10000 - 2 \\cdot 100 \\cdot 2 + 4 = 10000 - 400 + 4 = 9604$. Check forward: $98 \\cdot 98 = 98 \\cdot 100 - 98 \\cdot 2 = 9800 - 196 = 9604$ ✓. (The choice $9996$ DROPS THE MIDDLE TERM and computes only $10000 - 4$; the choice $9804$ uses $ab = 200$ instead of $2ab = 400$; the choice $9600$ forgets the final $2^2 = 4$.)',
    },
    {
      q: 'Compute $199^2$ by writing $199 = 200 - 1$.',
      choices: ['$40001$', '$39600$', '$39801$', '$39601$'],
      answer: 3,
      solution:
        '$(200-1)^2 = 40000 - 2 \\cdot 200 \\cdot 1 + 1 = 40000 - 400 + 1 = 39601$. Check forward: $199 \\cdot 199 = 199 \\cdot 200 - 199 = 39800 - 199 = 39601$ ✓. (The choice $40001$ DROPS THE MIDDLE TERM; the choice $39801$ uses $ab = 200$ instead of $2ab = 400$; the choice $39600$ forgets the final $+1$, and a square ending in $9 \\cdot 9$ must end in $1$.)',
    },
  ],
  // p6 — recognize a perfect-square trinomial
  [
    {
      q: 'Which of these trinomials is a perfect square?',
      choices: ['$x^2 + 6x + 36$', '$x^2 + 12x + 36$', '$x^2 + 13x + 36$', '$x^2 + 12x + 144$'],
      answer: 1,
      solution:
        'Run the middle-term check on each one: the ends must be squares, and the middle must be $2$ times the product of their square roots. For $x^2 + 12x + 36$ the ends give $x$ and $6$, and $2 \\cdot x \\cdot 6 = 12x$ — a match, so it equals $(x+6)^2$. Check forward at $x = 1$: $1 + 12 + 36 = 49 = 7^2$ ✓. (The choice $x^2 + 6x + 36$ uses $ab$ instead of $2ab$, so its middle should be $12x$; the choice $x^2 + 13x + 36$ has the sum of the factor pair $4$ and $9$ in the middle, which factors as $(x+4)(x+9)$, not a square; the choice $x^2 + 12x + 144$ has ends $x$ and $12$, which would need a middle of $24x$.)',
    },
    {
      q: 'Three of these four trinomials are NOT perfect squares. Which one IS?',
      choices: ['$y^2 + 16y + 64$', '$y^2 + 8y + 64$', '$y^2 + 16y + 256$', '$y^2 + 20y + 64$'],
      answer: 0,
      solution:
        'The ends of $y^2 + 16y + 64$ are $y$ and $8$, and $2 \\cdot y \\cdot 8 = 16y$ matches the middle term, so $y^2 + 16y + 64 = (y+8)^2$. Check forward at $y = 1$: $1 + 16 + 64 = 81 = 9^2$ ✓. (The choice $y^2 + 8y + 64$ uses $ab = 8$ instead of $2ab = 16$; the choice $y^2 + 16y + 256$ has ends $y$ and $16$, so it would need a middle of $32y$; the choice $y^2 + 20y + 64$ comes from the factor pair $4$ and $16$, so it is $(y+4)(y+16)$ — two different factors, not a square.)',
    },
    {
      q: 'The trinomial $x^2 + kx + 121$ is a perfect square, and $k$ is positive. What is $k$?',
      choices: ['$11$', '$121$', '$242$', '$22$'],
      answer: 3,
      solution:
        'The ends must be squares of something: $x^2 = (x)^2$ and $121 = 11^2$. The middle-term check then forces $k x = 2 \\cdot x \\cdot 11 = 22x$, so $k = 22$. Check forward: $x^2 + 22x + 121 = (x+11)^2$, and at $x = 1$ that is $1 + 22 + 121 = 144 = 12^2$ ✓. (The choice $11$ uses $ab$ instead of $2ab$ — it is $b$ itself, not twice $b$; the choice $121$ copies the constant term straight into the middle slot; the choice $242$ doubles the constant instead of doubling its square root.)',
    },
  ],
  // p7 — find the constant that completes the square
  [
    {
      q: 'For what value of $c$ is $x^2 + 14x + c$ a perfect square?',
      choices: ['$7$', '$196$', '$49$', '$28$'],
      answer: 2,
      solution:
        'We need $2 \\cdot x \\cdot b = 14x$, so $b = 7$, and then $c = b^2 = 49$. Check forward: $x^2 + 14x + 49 = (x+7)^2$, and at $x = 1$ that is $1 + 14 + 49 = 64 = 8^2$ ✓. (The choice $7$ finds $b$ correctly but forgets to SQUARE it; the choice $196$ squares the whole middle coefficient, $14^2$, instead of half of it; the choice $28$ doubles the middle coefficient instead of halving and squaring.)',
    },
    {
      q: 'For what value of $c$ is $x^2 - 24x + c$ a perfect square?',
      choices: ['$144$', '$576$', '$12$', '$48$'],
      answer: 0,
      solution:
        'A negative middle term means the square is $(x-b)^2$. We need $2 \\cdot x \\cdot b = 24x$, so $b = 12$ and $c = 12^2 = 144$. Check forward: $x^2 - 24x + 144 = (x-12)^2$, and at $x = 1$ that is $1 - 24 + 144 = 121 = 11^2$ ✓. (The choice $12$ stops at $b$ without squaring; the choice $576$ squares the whole middle coefficient, $24^2$; the choice $48$ doubles the middle coefficient. Note that $c$ is positive even though the middle term is negative, since $c = b^2$.)',
    },
    {
      q: 'What number must be added to $x^2 + 20x$ to make it a perfect square?',
      choices: ['$10$', '$400$', '$40$', '$100$'],
      answer: 3,
      solution:
        'Half of the middle coefficient is $10$, and squaring gives $100$. Then $x^2 + 20x + 100 = (x+10)^2$. Check forward at $x = 1$: $1 + 20 + 100 = 121 = 11^2$ ✓. (The choice $10$ halves the coefficient but forgets to SQUARE it; the choice $400$ squares $20$ without halving first; the choice $40$ doubles the coefficient instead. The rule is always halve, THEN square.)',
    },
  ],
  // p8 — square a three- or four-digit number near a round one
  [
    {
      q: 'Compute $302^2$.',
      choices: ['$90004$', '$91204$', '$90604$', '$91200$'],
      answer: 1,
      solution:
        'Write $302 = 300 + 2$: then $302^2 = 300^2 + 2 \\cdot 300 \\cdot 2 + 2^2 = 90000 + 1200 + 4 = 91204$. Check forward: $302 \\cdot 302 = 302 \\cdot 300 + 302 \\cdot 2 = 90600 + 604 = 91204$ ✓. (The choice $90004$ DROPS THE MIDDLE TERM — the classic trap; the choice $90604$ uses $ab = 600$ instead of $2ab = 1200$; the choice $91200$ forgets the final $2^2 = 4$, and the answer must end in $4$ because $2 \\cdot 2 = 4$.)',
    },
    {
      q: 'Compute $407^2$.',
      choices: ['$160049$', '$162849$', '$165649$', '$165600$'],
      answer: 2,
      solution:
        'Write $407 = 400 + 7$: then $407^2 = 160000 + 2 \\cdot 400 \\cdot 7 + 49 = 160000 + 5600 + 49 = 165649$. Check forward: $407 \\cdot 407 = 407 \\cdot 400 + 407 \\cdot 7 = 162800 + 2849 = 165649$ ✓. (The choice $160049$ DROPS THE MIDDLE TERM; the choice $162849$ uses $ab = 2800$ instead of $2ab = 5600$; the choice $165600$ forgets the final $7^2 = 49$, and a number ending in $7$ has a square ending in $9$.)',
    },
    {
      q: 'Compute $1004^2$.',
      choices: ['$1{,}000{,}016$', '$1{,}004{,}016$', '$1{,}008{,}000$', '$1{,}008{,}016$'],
      answer: 3,
      solution:
        'Write $1004 = 1000 + 4$: then $1004^2 = 1{,}000{,}000 + 2 \\cdot 1000 \\cdot 4 + 16 = 1{,}000{,}000 + 8000 + 16 = 1{,}008{,}016$. Check forward: $1004 \\cdot 1004 = 1004 \\cdot 1000 + 1004 \\cdot 4 = 1{,}004{,}000 + 4016 = 1{,}008{,}016$ ✓. (The choice $1{,}000{,}016$ DROPS THE MIDDLE TERM; the choice $1{,}004{,}016$ uses $ab = 4000$ instead of $2ab = 8000$; the choice $1{,}008{,}000$ forgets the final $4^2 = 16$.)',
    },
  ],
  // p9 — move between a sum, a product, and a sum of squares
  [
    {
      q: 'If $a + b = 9$ and $ab = 14$, what is $a^2 + b^2$?',
      choices: ['$53$', '$81$', '$67$', '$109$'],
      answer: 0,
      solution:
        'Square the sum: $(a+b)^2 = a^2 + 2ab + b^2 = 81$. Now take the extra middle piece back off: $a^2 + b^2 = 81 - 2ab = 81 - 28 = 53$. Check forward: the numbers with sum $9$ and product $14$ are $2$ and $7$, and $4 + 49 = 53$ ✓. (The choice $81$ stops at $(a+b)^2$ and never subtracts, which would claim $a^2 + b^2 = (a+b)^2$; the choice $67$ subtracts $ab$ ONCE instead of twice; the choice $95$ ADDS $2ab$ instead of subtracting it.)',
    },
    {
      q: 'If $m - n = 6$ and $mn = 7$, what is $m^2 + n^2$?',
      choices: ['$36$', '$43$', '$50$', '$22$'],
      answer: 2,
      solution:
        'This time square the DIFFERENCE: $(m-n)^2 = m^2 - 2mn + n^2 = 36$. The middle piece was subtracted, so add it back: $m^2 + n^2 = 36 + 2mn = 36 + 14 = 50$. Check forward: the numbers with difference $6$ and product $7$ are $7$ and $1$, and $49 + 1 = 50$ ✓. (The choice $36$ stops at $(m-n)^2$; the choice $43$ adds $mn$ ONCE instead of twice; the choice $22$ SUBTRACTS $2mn$, which is the move for a sum, not a difference — the sign flips because the middle term of $(m-n)^2$ is already negative.)',
    },
    {
      q: 'If $x + y = 12$ and $x^2 + y^2 = 90$, what is $xy$?',
      choices: ['$54$', '$27$', '$117$', '$45$'],
      answer: 1,
      solution:
        'Run the identity backwards. $(x+y)^2 = x^2 + 2xy + y^2$, so $144 = 90 + 2xy$, giving $2xy = 54$ and $xy = 27$. Check forward: the numbers with sum $12$ and product $27$ are $3$ and $9$, and $9 + 81 = 90$ ✓. (The choice $54$ finds $2xy$ correctly but forgets to HALVE it; the choice $117$ adds where it should subtract, computing $\\frac{144 + 90}{2}$; the choice $45$ halves $x^2 + y^2$ instead of halving $2xy$.)',
    },
  ],
  // p10 — combine two squared binomials
  [
    {
      q: 'Simplify $(a+b)^2 + (a-b)^2$.',
      choices: ['$2a^2 + 2b^2$', '$2a^2 + 4ab + 2b^2$', '$a^2 + b^2$', '$4ab$'],
      answer: 0,
      solution:
        'Expand both and add: $(a^2 + 2ab + b^2) + (a^2 - 2ab + b^2)$. The $+2ab$ and $-2ab$ cancel, leaving $2a^2 + 2b^2$. Check forward with $a = 2$ and $b = 3$: $25 + 1 = 26$, and $2 \\cdot 4 + 2 \\cdot 9 = 8 + 18 = 26$ ✓. (The choice $2a^2 + 4ab + 2b^2$ adds the two middle terms as if both were positive, and it gives $8 + 24 + 18 = 50$; the choice $a^2 + b^2$ forgets that each square contributes its own $a^2$ and $b^2$, giving only $13$; the choice $4ab$ is the answer to the SUBTRACTION version of this problem, and $4 \\cdot 6 = 24 \\ne 26$.)',
    },
    {
      q: 'Simplify $(x+5)^2 - (x-5)^2$.',
      choices: ['$10x$', '$50$', '$20x$', '$0$'],
      answer: 2,
      solution:
        'Expand both: $(x^2 + 10x + 25) - (x^2 - 10x + 25)$. The $x^2$ and $25$ terms cancel, and $10x - (-10x) = 20x$. Check forward at $x = 1$: $36 - 16 = 20$, and $20 \\cdot 1 = 20$ ✓. (The choice $10x$ subtracts the two middle terms as if the second one were positive, forgetting that subtracting a negative adds; the choice $0$ assumes everything cancels, but only the matching terms do; the choice $50$ keeps the constants and cancels the $x$ terms, which is backwards.)',
    },
    {
      q: 'Simplify $(2x+y)^2 - (2x-y)^2$.',
      choices: ['$4xy$', '$8xy$', '$2xy$', '$4x^2 + 2y^2$'],
      answer: 1,
      solution:
        'Expand both: $(4x^2 + 4xy + y^2) - (4x^2 - 4xy + y^2)$. The $4x^2$ and $y^2$ terms cancel, leaving $4xy + 4xy = 8xy$. Check forward at $x = 1$, $y = 1$: $(2+1)^2 - (2-1)^2 = 9 - 1 = 8$, and $8 \\cdot 1 \\cdot 1 = 8$ ✓. (The choice $4xy$ FORGETS THE COEFFICIENT, using $a = x$ instead of $a = 2x$ in the pattern $4ab$; the choice $2xy$ counts the middle term only once instead of twice; the choice $4x^2 + 2y^2$ adds the two squares instead of subtracting them, and $4 + 2 = 6 \\ne 8$.)',
    },
  ],
]

const s112 = [
  // p1 — factor a plain difference of squares
  [
    {
      q: 'Factor $x^2 - 144$.',
      choices: ['$(x+12)(x-12)$', '$(x-12)^2$', '$(x+12)^2$', '$(x+144)(x-1)$'],
      answer: 0,
      solution:
        'Since $144 = 12^2$, this is $x^2 - 12^2$, a square minus a square, so it splits into a sum times a difference: $(x+12)(x-12)$. Multiply back out to check: $x^2 - 12x + 12x - 144 = x^2 - 144$ ✓ — the middle terms cancel, which is why the answer has no middle term. (The choice $(x-12)^2$ expands to $x^2 - 24x + 144$, which has an unwanted middle term and the wrong sign on the constant; $(x+12)^2$ expands to $x^2 + 24x + 144$; the choice $(x+144)(x-1)$ uses THE NUMBER ITSELF instead of its square root and expands to $x^2 + 143x - 144$.)',
    },
    {
      q: 'Factor $y^2 - 100$.',
      choices: ['$(y-10)^2$', '$(y+10)^2$', '$(y+10)(y-10)$', '$(y+50)(y-2)$'],
      answer: 2,
      solution:
        'Here $100 = 10^2$, so $y^2 - 100 = (y+10)(y-10)$. Multiply back out: $y^2 - 10y + 10y - 100 = y^2 - 100$ ✓. (The choice $(y-10)^2$ expands to $y^2 - 20y + 100$ and $(y+10)^2$ expands to $y^2 + 20y + 100$ — a perfect square always carries a middle term, and ours has none; the choice $(y+50)(y-2)$ grabs a random factor pair of $100$ and expands to $y^2 + 48y - 100$.)',
    },
    {
      q: 'Which product expands to $x^2 - 64$?',
      choices: ['$(x-8)(x-8)$', '$(x-8)(x+8)$', '$(x+8)(x+8)$', '$(x+64)(x-1)$'],
      answer: 1,
      solution:
        'Read the formula from right to left: $a^2 - b^2$ comes from $(a-b)(a+b)$, and here $a = x$, $b = 8$. Multiply $(x-8)(x+8)$ out: $x^2 + 8x - 8x - 64 = x^2 - 64$ ✓ — the cross terms are opposites, so they vanish. (The choice $(x-8)(x-8)$ has the SAME sign twice and expands to $x^2 - 16x + 64$; $(x+8)(x+8)$ expands to $x^2 + 16x + 64$; the choice $(x+64)(x-1)$ uses THE NUMBER ITSELF instead of its square root and expands to $x^2 + 63x - 64$.)',
    },
  ],
  // p2 — multiply two numbers that straddle a round one
  [
    {
      q: 'Compute $63 \\times 57$.',
      choices: ['$3609$', '$3591$', '$3600$', '$3597$'],
      answer: 1,
      solution:
        'The two factors straddle $60$: they are $60 + 3$ and $60 - 3$. So the product is $60^2 - 3^2 = 3600 - 9 = 3591$. Check forward: $63 \\cdot 57 = 63 \\cdot 60 - 63 \\cdot 3 = 3780 - 189 = 3591$ ✓. (The choice $3609$ ADDS the correction instead of subtracting it — a number just above and a number just below $60$ multiply to LESS than $60^2$; the choice $3600$ forgets the correction entirely; the choice $3597$ subtracts $b = 3$ instead of $b^2 = 9$.)',
    },
    {
      q: 'Compute $84 \\times 76$.',
      choices: ['$6416$', '$6400$', '$6396$', '$6384$'],
      answer: 3,
      solution:
        'Both factors sit $4$ away from $80$, so the product is $(80+4)(80-4) = 80^2 - 4^2 = 6400 - 16 = 6384$. Check forward: $84 \\cdot 76 = 84 \\cdot 80 - 84 \\cdot 4 = 6720 - 336 = 6384$ ✓. (The choice $6416$ ADDS the $16$ instead of subtracting it; the choice $6400$ forgets the correction; the choice $6396$ subtracts $b = 4$ rather than $b^2 = 16$.)',
    },
    {
      q: 'A rectangle measures $27$ centimeters by $33$ centimeters. What is its area, in square centimeters?',
      choices: ['$891$', '$909$', '$900$', '$897$'],
      answer: 0,
      solution:
        'Area is length times width, and $27$ and $33$ straddle $30$: $(30-3)(30+3) = 900 - 9 = 891$. Check forward: $27 \\cdot 33 = 27 \\cdot 30 + 27 \\cdot 3 = 810 + 81 = 891$ ✓. Notice the rectangle has the same perimeter as a $30$ by $30$ square but LESS area — the missing $9$ square centimeters is exactly the $b^2$ in the formula. (The choice $909$ ADDS the $9$; the choice $900$ is the square’s area, with no correction at all; the choice $897$ subtracts $3$ instead of $3^2$.)',
    },
  ],
  // p3 — decide whether the pattern applies at all
  [
    {
      q: 'Which of these expressions CANNOT be factored as a difference of squares?',
      choices: ['$9x^2 - 1$', '$x^2 - 100$', '$4x^2 + 25$', '$x^4 - 1$'],
      answer: 2,
      solution:
        'The pattern needs one square MINUS another square. $4x^2 + 25$ is a SUM of squares, and there is no factoring formula for that, so it is the odd one out. (The choice $9x^2 - 1$ is $(3x)^2 - 1^2 = (3x+1)(3x-1)$; the choice $x^2 - 100$ is $(x+10)(x-10)$; the choice $x^4 - 1$ is $(x^2)^2 - 1^2 = (x^2+1)(x^2-1)$, and it even splits a second time into $(x^2+1)(x+1)(x-1)$. Only the plus sign blocks the formula.)',
    },
    {
      q: 'Which of these can be written as $a^2 - b^2$ for some expressions $a$ and $b$?',
      choices: ['$16x^2 - 40$', '$16x^2 + 49$', '$16x^3 - 49$', '$16x^2 - 49$'],
      answer: 3,
      solution:
        'Both terms have to be squares, and the sign between them has to be a minus. In $16x^2 - 49$ we have $16x^2 = (4x)^2$ and $49 = 7^2$, so it is $(4x+7)(4x-7)$. Multiply back out: $16x^2 - 28x + 28x - 49 = 16x^2 - 49$ ✓. (The choice $16x^2 - 40$ has a minus sign but $40$ is not a perfect square; the choice $16x^2 + 49$ is a SUM of squares; the choice $16x^3 - 49$ has a cube, and $x^3$ is not the square of anything with a whole-number exponent.)',
    },
    {
      q: 'Which expression equals $(6x+5)(6x-5)$?',
      choices: ['$6x^2 - 25$', '$36x^2 - 25$', '$36x^2 + 25$', '$36x^2 - 60x + 25$'],
      answer: 1,
      solution:
        'Multiply term by term: $6x \\cdot 6x = 36x^2$, then $6x \\cdot (-5) = -30x$ and $5 \\cdot 6x = +30x$, which cancel, and finally $5 \\cdot (-5) = -25$. So the product is $36x^2 - 25$. Check forward at $x = 1$: $(6+5)(6-5) = 11 \\cdot 1 = 11$, and $36 - 25 = 11$ ✓. (The choice $6x^2 - 25$ FORGETS TO SQUARE THE COEFFICIENT; the choice $36x^2 + 25$ makes $5 \\cdot (-5)$ positive; the choice $36x^2 - 60x + 25$ is $(6x-5)^2$, which would need the same sign in both parentheses.)',
    },
  ],
  // p4 — difference of squares with a coefficient
  [
    {
      q: 'Factor $16x^2 - 25$.',
      choices: ['$(4x-5)^2$', '$(16x+5)(x-5)$', '$(4x+25)(4x-1)$', '$(4x+5)(4x-5)$'],
      answer: 3,
      solution:
        'Write both terms as squares: $16x^2 = (4x)^2$ and $25 = 5^2$. With $a = 4x$ and $b = 5$ the pattern gives $(4x+5)(4x-5)$. Multiply back out: $16x^2 - 20x + 20x - 25 = 16x^2 - 25$ ✓. (The choice $(4x-5)^2$ expands to $16x^2 - 40x + 25$, which has a middle term; the choice $(16x+5)(x-5)$ never takes the square root of $16x^2$ and expands to $16x^2 - 75x - 25$; the choice $(4x+25)(4x-1)$ uses THE NUMBER ITSELF instead of $\\sqrt{25} = 5$ and expands to $16x^2 + 96x - 25$.)',
    },
    {
      q: 'Factor $49y^2 - 4$.',
      choices: ['$(7y-2)^2$', '$(49y+2)(y-2)$', '$(7y+2)(7y-2)$', '$(7y+4)(7y-1)$'],
      answer: 2,
      solution:
        'Both terms are squares: $49y^2 = (7y)^2$ and $4 = 2^2$, so $49y^2 - 4 = (7y+2)(7y-2)$. Multiply back out: $49y^2 - 14y + 14y - 4 = 49y^2 - 4$ ✓. (The choice $(7y-2)^2$ expands to $49y^2 - 28y + 4$ — a perfect square, not a difference of squares; the choice $(49y+2)(y-2)$ splits the $49$ off instead of taking its square root and expands to $49y^2 - 96y - 4$; the choice $(7y+4)(7y-1)$ uses $4$ itself instead of $\\sqrt{4} = 2$ and expands to $49y^2 + 21y - 4$.)',
    },
    {
      q: 'Factor $9 - 25x^2$.',
      choices: ['$(3+5x)(3-5x)$', '$(5x+3)(5x-3)$', '$(3-5x)^2$', '$(9+5x)(1-5x)$'],
      answer: 0,
      solution:
        'The square being subtracted is the one with the minus sign in front of it, so here $a = 3$ and $b = 5x$: $9 - 25x^2 = 3^2 - (5x)^2 = (3+5x)(3-5x)$. Multiply back out: $9 - 15x + 15x - 25x^2 = 9 - 25x^2$ ✓. (The choice $(5x+3)(5x-3)$ expands to $25x^2 - 9$, which is the OPPOSITE of what we want — check at $x = 1$: the original is $-16$, but that product is $+16$; the choice $(3-5x)^2$ expands to $9 - 30x + 25x^2$; the choice $(9+5x)(1-5x)$ never takes the square root of $9$ and expands to $9 - 40x - 25x^2$.)',
    },
  ],
  // p5 — factor first, then divide
  [
    {
      q: 'Compute $\\frac{45^2 - 15^2}{30}$.',
      choices: ['$30$', '$60$', '$900$', '$1800$'],
      answer: 1,
      solution:
        'Never square first when you can factor first: $45^2 - 15^2 = (45+15)(45-15) = 60 \\times 30 = 1800$, and $1800 \\div 30 = 60$. Even quicker, the $45 - 15 = 30$ cancels the denominator outright, leaving $45 + 15 = 60$. Check forward the long way: $2025 - 225 = 1800$, and $1800 \\div 30 = 60$ ✓. (The choice $1800$ factors correctly but forgets to DIVIDE; the choice $900$ is $(45-15)^2$ — a difference of squares is not the square of the difference; the choice $30$ is that same $900$ divided by $30$, and it is also the factor that was supposed to cancel.)',
    },
    {
      q: 'Compute $\\frac{58^2 - 42^2}{8}$.',
      choices: ['$100$', '$200$', '$1600$', '$32$'],
      answer: 1,
      solution:
        'Factor the top: $58^2 - 42^2 = (58+42)(58-42) = 100 \\times 16 = 1600$. Then $1600 \\div 8 = 200$. Check forward the long way: $3364 - 1764 = 1600$ ✓, and $1600 \\div 8 = 200$ ✓. (The choice $1600$ stops before dividing; the choice $100$ reports only the factor $58 + 42$ and drops the rest; the choice $32$ uses $(58-42)^2 = 256$ for the numerator, then divides by $8$ — but the difference of squares is not the square of the difference.)',
    },
    {
      q: 'The number $n$ satisfies $\\frac{88^2 - 12^2}{n} = 100$. What is $n$?',
      choices: ['$100$', '$7600$', '$760$', '$76$'],
      answer: 3,
      solution:
        'Factor the top first: $88^2 - 12^2 = (88+12)(88-12) = 100 \\times 76 = 7600$. We need $\\frac{7600}{n} = 100$, so $n = 76$. Check forward: $\\frac{7600}{76} = 100$ ✓. (The choice $100$ names the OTHER factor, the one that is already used up producing the $100$ on the right; the choice $7600$ is the numerator itself, which would make the fraction equal $1$; the choice $760$ slips a place value, and $\\frac{7600}{760} = 10$, not $100$.)',
    },
  ],
  // p6 — a product straddling a large round number
  [
    {
      q: 'Compute $997 \\times 1003$.',
      choices: ['$999{,}991$', '$1{,}000{,}009$', '$999{,}997$', '$999{,}999$'],
      answer: 0,
      solution:
        'The factors sit $3$ below and $3$ above $1000$, so the product is $(1000-3)(1000+3) = 1{,}000{,}000 - 9 = 999{,}991$. Check forward: $997 \\times 1003 = 997 \\times 1000 + 997 \\times 3 = 997{,}000 + 2991 = 999{,}991$ ✓. (The choice $1{,}000{,}009$ ADDS the $9$ instead of subtracting it; the choice $999{,}997$ subtracts $b = 3$ rather than $b^2 = 9$; the choice $999{,}999$ subtracts $1$, as if the two factors were $1$ away from $1000$.)',
    },
    {
      q: 'Compute $995 \\times 1005$.',
      choices: ['$1{,}000{,}025$', '$999{,}995$', '$999{,}975$', '$1{,}000{,}000$'],
      answer: 2,
      solution:
        'Both factors are $5$ away from $1000$: $(1000-5)(1000+5) = 1{,}000{,}000 - 25 = 999{,}975$. Check forward: $995 \\times 1005 = 995 \\times 1000 + 995 \\times 5 = 995{,}000 + 4975 = 999{,}975$ ✓. (The choice $1{,}000{,}025$ ADDS the $25$; the choice $999{,}995$ subtracts $b = 5$ instead of $b^2 = 25$; the choice $1{,}000{,}000$ leaves out the correction entirely, which would mean $995 \\times 1005 = 1000 \\times 1000$.)',
    },
    {
      q: 'Compute $198 \\times 202$.',
      choices: ['$40{,}004$', '$39{,}998$', '$40{,}000$', '$39{,}996$'],
      answer: 3,
      solution:
        'The factors straddle $200$, each $2$ away: $(200-2)(200+2) = 40{,}000 - 4 = 39{,}996$. Check forward: $198 \\times 202 = 198 \\times 200 + 198 \\times 2 = 39{,}600 + 396 = 39{,}996$ ✓. (The choice $40{,}004$ ADDS the $4$; the choice $39{,}998$ subtracts $b = 2$ instead of $b^2 = 4$; the choice $40{,}000$ forgets the correction, but a pair straddling $200$ always falls short of $200^2$.)',
    },
  ],
  // p7 — keep factoring until nothing is left
  [
    {
      q: 'Which is the COMPLETE factorization of $x^4 - 625$, with every factor broken down as far as possible?',
      choices: ['$(x^2+25)(x^2-25)$', '$(x^2+25)(x+5)(x-5)$', '$(x^2-25)^2$', '$(x+25)(x-25)$'],
      answer: 1,
      solution:
        'Since $625 = 25^2$, the first split is $x^4 - 625 = (x^2+25)(x^2-25)$. But $x^2 - 25$ is itself a difference of squares, so keep going: $(x^2+25)(x+5)(x-5)$. The leftover $x^2 + 25$ is a SUM of squares and cannot be broken down, so now we are finished. (The choice $(x^2+25)(x^2-25)$ stops ONE ROUND EARLY; the choice $(x^2-25)^2$ expands to $x^4 - 50x^2 + 625$, which has an extra middle term and the wrong sign; the choice $(x+25)(x-25)$ uses $25$ where the square root of $625$ belongs and expands to only $x^2 - 625$.)',
    },
    {
      q: 'Factor $x^4 - 10000$ completely.',
      choices: ['$(x^2+100)(x^2-100)$', '$(x^2-100)^2$', '$(x^2+100)(x+10)(x-10)$', '$(x+100)(x-100)$'],
      answer: 2,
      solution:
        'Note $10000 = 100^2$, so the first split is $(x^2+100)(x^2-100)$. Then $x^2 - 100 = (x+10)(x-10)$, giving $(x^2+100)(x+10)(x-10)$. The factor $x^2 + 100$ is a sum of squares and stops there. Check forward at $x = 0$: the original is $-10000$, and $(100)(10)(-10) = -10000$ ✓. (The choice $(x^2+100)(x^2-100)$ stops ONE ROUND EARLY; the choice $(x^2-100)^2$ expands to $x^4 - 200x^2 + 10000$; the choice $(x+100)(x-100)$ forgets that the leading term is $x^4$, not $x^2$, and expands to $x^2 - 10000$.)',
    },
    {
      q: 'Factor $16x^4 - 1$ completely.',
      choices: ['$(4x^2+1)(2x+1)(2x-1)$', '$(4x^2+1)(4x^2-1)$', '$(4x^2-1)^2$', '$(4x^2+1)(2x-1)^2$'],
      answer: 0,
      solution:
        'Write $16x^4 = (4x^2)^2$, so the first split is $(4x^2+1)(4x^2-1)$. Now $4x^2 - 1 = (2x)^2 - 1^2 = (2x+1)(2x-1)$, giving $(4x^2+1)(2x+1)(2x-1)$. The factor $4x^2 + 1$ is a sum of squares, so we stop. Check forward at $x = 1$: the original is $16 - 1 = 15$, and $(5)(3)(1) = 15$ ✓. (The choice $(4x^2+1)(4x^2-1)$ stops ONE ROUND EARLY — it is equal to the original, but the job was to break it all the way down; the choice $(4x^2-1)^2$ SQUARES the first split instead of writing a sum times a difference, and at $x = 1$ it gives $9 \\ne 15$; the choice $(4x^2+1)(2x-1)^2$ makes that same mistake on the SECOND split, using the same sign twice, and gives $5 \\cdot 1 = 5$ at $x = 1$.)',
    },
  ],
  // p8 — use the factored form without finding the letters
  [
    {
      q: 'If $m + n = 14$ and $m - n = 5$, what is $m^2 - n^2$?',
      choices: ['$70$', '$19$', '$9$', '$196$'],
      answer: 0,
      solution:
        'There is no need to find $m$ and $n$ separately. Since $m^2 - n^2 = (m+n)(m-n)$, the answer is $14 \\times 5 = 70$. Check forward: the numbers are $m = 9.5$ and $n = 4.5$, and $90.25 - 20.25 = 70$ ✓ — the shortcut works even when $m$ and $n$ are not whole numbers. (The choice $19$ ADDS the two given values instead of multiplying them; the choice $9$ subtracts them; the choice $196$ is $14^2$, using only the sum and squaring it.)',
    },
    {
      q: 'If $a + b = 25$ and $a - b = 4$, what is $b^2 - a^2$?',
      choices: ['$100$', '$-21$', '$-100$', '$29$'],
      answer: 2,
      solution:
        'Watch the order! First get $a^2 - b^2 = (a+b)(a-b) = 25 \\times 4 = 100$. The question asks for $b^2 - a^2$, which is the opposite, so the answer is $-100$. Check forward: $a = 14.5$ and $b = 10.5$, so $b^2 - a^2 = 110.25 - 210.25 = -100$ ✓. (The choice $100$ ignores the SWAPPED ORDER; since $a$ is bigger than $b$, $b^2 - a^2$ has to be negative; the choice $-21$ subtracts the two given values as $4 - 25$; the choice $29$ adds them.)',
    },
    {
      q: 'The numbers $a$ and $b$ satisfy $a + b = 18$ and $a^2 - b^2 = 54$. What is $a - b$?',
      choices: ['$36$', '$3$', '$72$', '$972$'],
      answer: 1,
      solution:
        'Use the formula backwards: $a^2 - b^2 = (a+b)(a-b)$, so $54 = 18 \\times (a-b)$ and $a - b = 3$. Check forward: $a = 10.5$ and $b = 7.5$ give $a + b = 18$ ✓ and $110.25 - 56.25 = 54$ ✓. (The choice $36$ subtracts the given numbers, $54 - 18$; the choice $72$ adds them; the choice $972$ multiplies them, which is the move for the FORWARD version of this problem, not the backward one.)',
    },
  ],
  // p9 — cancel a factor after factoring the numerator
  [
    {
      q: 'Simplify $\\frac{x^2 - 25}{x - 5}$ (assume $x \\neq 5$).',
      choices: ['$x + 5$', '$x - 5$', '$x + 25$', '$x^2 + 5$'],
      answer: 0,
      solution:
        'Factor the top: $x^2 - 25 = (x+5)(x-5)$. The factor $x - 5$ cancels with the bottom, leaving $x + 5$. Check forward at $x = 6$: $\\frac{36-25}{1} = 11$, and $6 + 5 = 11$ ✓. (The choice $x - 5$ cancels the WRONG factor and keeps the one that matched the denominator, and it gives $1$ at $x = 6$; the choice $x + 25$ uses the number instead of its square root; the choice $x^2 + 5$ cancels only part of the numerator, which is not how cancelling works.)',
    },
    {
      q: 'Simplify $\\frac{4x^2 - 1}{2x + 1}$ (assume $x \\neq -\\frac{1}{2}$).',
      choices: ['$2x + 1$', '$2x - 1$', '$4x - 1$', '$2x^2 - 1$'],
      answer: 1,
      solution:
        'The top is a difference of squares: $4x^2 - 1 = (2x+1)(2x-1)$. Cancelling the $2x+1$ leaves $2x - 1$. Check forward at $x = 1$: $\\frac{4-1}{3} = 1$, and $2 - 1 = 1$ ✓. (The choice $2x + 1$ keeps the factor that cancelled instead of the one that survived, and it gives $3$ at $x = 1$; the choice $4x - 1$ FORGETS TO SQUARE-ROOT the coefficient, using $4x$ where $2x$ belongs; the choice $2x^2 - 1$ cancels only the number in front of $x^2$.)',
    },
    {
      q: 'For which value of $k$ does $\\frac{x^2 - k}{x + 6}$ simplify to $x - 6$?',
      choices: ['$6$', '$12$', '$36$', '$-36$'],
      answer: 2,
      solution:
        'Work backwards: if the fraction equals $x - 6$, then the numerator must be $(x+6)(x-6) = x^2 - 36$. Matching that with $x^2 - k$ gives $k = 36$. Check forward at $x = 1$: $\\frac{1 - 36}{7} = \\frac{-35}{7} = -5$, and $1 - 6 = -5$ ✓. (The choice $6$ copies the number from the denominator without squaring it; the choice $12$ doubles it instead of squaring; the choice $-36$ gets the sign backwards — the numerator is written as $x^2 - k$, so $k$ itself is the positive $36$.)',
    },
  ],
  // p10 — a difference of squares hiding among large numbers
  [
    {
      q: 'Compute $505^2 - 495^2$.',
      choices: ['$10{,}000$', '$1000$', '$100$', '$20{,}000$'],
      answer: 0,
      solution:
        'Factor instead of squaring: $505^2 - 495^2 = (505+495)(505-495) = 1000 \\times 10 = 10{,}000$. Squaring both numbers by hand would work, but this turns the job into one line. (The choice $1000$ reports only the sum factor and forgets to multiply by the difference; the choice $100$ is $(505-495)^2$, and a difference of squares is not the square of the difference; the choice $20{,}000$ doubles the correct answer, as if the difference were $20$ rather than $10$.)',
    },
    {
      q: 'Compute $1001^2 - 999^2$.',
      choices: ['$2000$', '$4$', '$4000$', '$2002$'],
      answer: 2,
      solution:
        'Factor first: $1001^2 - 999^2 = (1001+999)(1001-999) = 2000 \\times 2 = 4000$. Check forward: $1001^2 = 1{,}002{,}001$ and $999^2 = 998{,}001$, and $1{,}002{,}001 - 998{,}001 = 4000$ ✓. (The choice $2000$ names only the sum factor; the choice $4$ is $(1001-999)^2$; the choice $2002$ adds the two original numbers to $2$ instead of multiplying, mixing up the two factors.)',
    },
    {
      q: 'For some number $n$, the value of $n^2 - (n-2)^2$ is $196$. What is $n$?',
      choices: ['$14$', '$49$', '$98$', '$50$'],
      answer: 3,
      solution:
        'Treat it as a difference of squares with $a = n$ and $b = n - 2$: $n^2 - (n-2)^2 = \\big(n + (n-2)\\big)\\big(n - (n-2)\\big) = (2n-2)(2) = 4n - 4$. Setting $4n - 4 = 196$ gives $4n = 200$ and $n = 50$. Check forward: $50^2 - 48^2 = 2500 - 2304 = 196$ ✓. (The choice $49$ solves $4n = 196$ and forgets the $-4$; the choice $98$ is $196 \\div 2$, using only one of the two factors; the choice $14$ is $\\sqrt{196}$, as if the whole expression were a single square.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 11,
  sections: {
    '11.1': s111,
    '11.2': s112,
  },
}
