// Introduction to Algebra chapter 11 — variations for the chapter worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE: each variation carries a question, an
//    `answer` STRING, and a solution. Nothing is offered to pick from, so all of
//    the teaching lives in the solution. There are no `choices` keys here.
//  - Every key was worked out by hand from the question text alone and then
//    pushed FORWARD: every factorization is multiplied back out, every mental
//    square and product is confirmed against the plain multiplication, every
//    rationalized fraction is checked against a decimal estimate of the
//    original, and every integer pair is substituted back into the equation it
//    came from.
//  - Answers are written so there is exactly one sensible way to fill the blank:
//    a radical is left in simplest form, a fraction is reduced, and when an
//    equation has more than one integer solution EVERY pair is named.
//  - A variation changes the numbers AND, where it makes sense, the direction:
//    multiply out instead of factor, start from the squared quantity and work
//    back, divide a DIFFERENCE of cubes instead of a sum.
//  - Four traps run through the file. THE MISSING MIDDLE: $(a \pm b)^2$ has a
//    $2ab$ term and dropping it is the classic slip. THE SIGN SWAP: in the cube
//    formulas the trinomial's middle sign is the OPPOSITE of the binomial's.
//    THE HALF-DONE RADICAL: rationalizing is not finished until the fraction is
//    reduced and the root is simplified. THE CRISS-CROSS: the coefficient of $x$
//    lands in the factor holding $y$, and the other way round.
//  - The base worksheet carries no figures, so neither does this file.

const worksheet = [
  // w1 — square a number in your head by leaning on a nearby round number. Two
  //      of the three lean DOWN, one leans UP, and all three need the middle term.
  [
    {
      q: 'Compute $87^2$ in your head by writing $87 = 90 - 3$.',
      answer: '$7569$',
      solution:
        'Use $(a-b)^2 = a^2 - 2ab + b^2$ with $a = 90$ and $b = 3$. The three pieces are $90^2 = 8100$, then $2 \\cdot 90 \\cdot 3 = 540$ (this one gets subtracted), then $3^2 = 9$. Putting them together: $8100 - 540 + 9 = 7569$. Check forward the long way: $87 \\cdot 80 = 6960$ and $87 \\cdot 7 = 609$, and $6960 + 609 = 7569$ ✓. Skipping the middle term would leave $8109$, which is THE MISSING MIDDLE trap.',
    },
    {
      q: 'Compute $38^2$ in your head by writing $38 = 40 - 2$.',
      answer: '$1444$',
      solution:
        'With $a = 40$ and $b = 2$: $40^2 = 1600$, the middle term is $2 \\cdot 40 \\cdot 2 = 160$, and the last piece is $2^2 = 4$. Since we are squaring a difference, only the middle term is subtracted: $1600 - 160 + 4 = 1444$. Notice the last term comes back POSITIVE, because $(-2)(-2) = +4$. Check forward: $38 \\cdot 38 = 38 \\cdot 40 - 38 \\cdot 2 = 1520 - 76 = 1444$ ✓.',
    },
    {
      q: 'Compute $112^2$ in your head by writing $112 = 110 + 2$.',
      answer: '$12544$',
      solution:
        'This time it is a SUM, so every piece is added: $(a+b)^2 = a^2 + 2ab + b^2$ with $a = 110$, $b = 2$. That gives $110^2 = 12100$, then $2 \\cdot 110 \\cdot 2 = 440$, then $2^2 = 4$. Adding: $12100 + 440 + 4 = 12544$. Check forward: $112 \\cdot 112 = 112 \\cdot 100 + 112 \\cdot 12 = 11200 + 1344 = 12544$ ✓. A quick last-digit check also helps — $2 \\times 2 = 4$, so the answer must end in $4$.',
    },
  ],
  // w2 — a product of two numbers that straddle a round one, turned into one
  //      easy square minus a tiny one. The gap grows from 3 to 4 to 5.
  [
    {
      q: 'Compute $83 \\times 77$ using the difference of squares.',
      answer: '$6391$',
      solution:
        'The two numbers sit the same distance either side of $80$: they are $80 + 3$ and $80 - 3$. So $(80+3)(80-3) = 80^2 - 3^2 = 6400 - 9 = 6391$. The middle terms $+80 \\cdot 3$ and $-80 \\cdot 3$ cancel each other, which is exactly why this works. Check forward: $83 \\cdot 77 = 83 \\cdot 80 - 83 \\cdot 3 = 6640 - 249 = 6391$ ✓. The answer is a little LESS than $6400$, never more.',
    },
    {
      q: 'Compute $54 \\times 46$ using the difference of squares.',
      answer: '$2484$',
      solution:
        'Find the number halfway between them: $54$ and $46$ are both $4$ away from $50$. So the product is $(50+4)(50-4) = 50^2 - 4^2 = 2500 - 16 = 2484$. Check forward: $54 \\cdot 46 = 50 \\cdot 46 + 4 \\cdot 46 = 2300 + 184 = 2484$ ✓. Only the DIFFERENCE from the midpoint gets squared and subtracted — subtracting $4$ instead of $16$ is the usual slip.',
    },
    {
      q: 'Compute $305 \\times 295$ using the difference of squares.',
      answer: '$89975$',
      solution:
        'Big numbers, same idea: $305$ and $295$ straddle $300$ at a distance of $5$. So $(300+5)(300-5) = 300^2 - 5^2 = 90000 - 25 = 89975$. Doing this multiplication by hand would take a whole column of digits; the formula turns it into one subtraction. Check forward: $305 \\cdot 295 = 305 \\cdot 300 - 305 \\cdot 5 = 91500 - 1525 = 89975$ ✓.',
    },
  ],
  // w3 — difference of squares with a coefficient. The third variation runs the
  //      formula BACKWARDS: multiply the pair out instead of factoring.
  [
    {
      q: 'Factor $49x^2 - 64$.',
      answer: '$(7x+8)(7x-8)$',
      solution:
        'Check that both terms really are squares: $49x^2 = (7x)^2$ because $7 \\cdot 7 = 49$ and $x \\cdot x = x^2$, and $64 = 8^2$. Now $a^2 - b^2 = (a+b)(a-b)$ with $a = 7x$ and $b = 8$, giving $(7x+8)(7x-8)$. Check forward by expanding: $(7x+8)(7x-8) = 49x^2 - 56x + 56x - 64 = 49x^2 - 64$ ✓ — the two middle terms wipe each other out.',
    },
    {
      q: 'Factor $36y^2 - 121$.',
      answer: '$(6y+11)(6y-11)$',
      solution:
        'Hunt for the square roots of the two ends: $36y^2 = (6y)^2$ and $121 = 11^2$. A difference of squares always splits into a sum times a difference, so $36y^2 - 121 = (6y+11)(6y-11)$. Check forward: $(6y+11)(6y-11) = 36y^2 - 66y + 66y - 121 = 36y^2 - 121$ ✓. Writing $(6y-11)^2$ instead would produce an unwanted $-132y$ in the middle.',
    },
    {
      q: 'Multiply out $(10x + 7)(10x - 7)$.',
      answer: '$100x^2 - 49$',
      solution:
        'This is the same formula read left to right instead of right to left. Multiply term by term: $100x^2 - 70x + 70x - 49$. The two middle pieces are equal in size and opposite in sign, so they vanish and only $100x^2 - 49$ survives. Check forward at $x = 1$: the original is $(17)(3) = 51$, and $100 - 49 = 51$ ✓. Whenever you see a sum times the matching difference, expect the middle to disappear.',
    },
  ],
  // w4 — sum and difference of cubes. One difference, one sum with a coefficient,
  //      one difference written with the constant in front.
  [
    {
      q: 'Factor $x^3 - 216$.',
      answer: '$(x-6)(x^2 + 6x + 36)$',
      solution:
        'First spot the cube: $216 = 6 \\cdot 6 \\cdot 6 = 6^3$, so this is $x^3 - 6^3$. Use $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$ with $a = x$ and $b = 6$. The trinomial pieces are $x^2$, then $+ (x)(6) = 6x$, then $6^2 = 36$. So the answer is $(x-6)(x^2 + 6x + 36)$. Watch THE SIGN SWAP: the binomial keeps the minus, so the middle of the trinomial turns PLUS. Check forward at $x = 1$: the original is $1 - 216 = -215$, and $(-5)(1 + 6 + 36) = (-5)(43) = -215$ ✓.',
    },
    {
      q: 'Factor $125y^3 + 8$.',
      answer: '$(5y+2)(25y^2 - 10y + 4)$',
      solution:
        'Both terms are cubes, coefficients and all: $125y^3 = (5y)^3$ since $5^3 = 125$, and $8 = 2^3$. Use $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ with $a = 5y$ and $b = 2$. The pieces are $(5y)^2 = 25y^2$, then $-(5y)(2) = -10y$, then $2^2 = 4$. So $125y^3 + 8 = (5y+2)(25y^2 - 10y + 4)$. The binomial took the plus, so the trinomial middle flips to minus — and it is just ONE copy of $ab$, not two. Check forward at $y = 1$: the original is $133$, and $(7)(25 - 10 + 4) = (7)(19) = 133$ ✓.',
    },
    {
      q: 'Factor $64 - y^3$.',
      answer: '$(4-y)(16 + 4y + y^2)$',
      solution:
        'The cube is in the second slot this time, but nothing changes: $64 = 4^3$, so this is $4^3 - y^3$, a difference of cubes with $a = 4$ and $b = y$. The formula gives $(4-y)(4^2 + 4y + y^2) = (4-y)(16 + 4y + y^2)$. Keep $a$ and $b$ in the order they appear — swapping them would give $(y-4)$, the exact opposite. Check forward at $y = 1$: the original is $64 - 1 = 63$, and $(3)(16 + 4 + 1) = (3)(21) = 63$ ✓.',
    },
  ],
  // w5 — rationalize a single-root denominator and then REDUCE. The third
  //      variation hides a simplifiable root in the denominator.
  [
    {
      q: 'Rationalize and simplify $\\frac{12}{\\sqrt{10}}$.',
      answer: '$\\frac{6\\sqrt{10}}{5}$',
      solution:
        'Multiply top and bottom by $\\sqrt{10}$ — that is multiplying by $1$ in disguise, so the value never changes: $\\frac{12}{\\sqrt{10}} \\times \\frac{\\sqrt{10}}{\\sqrt{10}} = \\frac{12\\sqrt{10}}{10}$. Now do not stop — THE HALF-DONE RADICAL trap. The numbers $12$ and $10$ share a factor of $2$, so reduce to $\\frac{6\\sqrt{10}}{5}$. Check forward with decimals: $\\sqrt{10} \\approx 3.162$, so the original is $\\frac{12}{3.162} \\approx 3.795$, and $\\frac{6(3.162)}{5} \\approx 3.795$ ✓.',
    },
    {
      q: 'Rationalize and simplify $\\frac{21}{\\sqrt{14}}$.',
      answer: '$\\frac{3\\sqrt{14}}{2}$',
      solution:
        'Multiply top and bottom by $\\sqrt{14}$: the bottom becomes $\\sqrt{14} \\times \\sqrt{14} = 14$ and the top becomes $21\\sqrt{14}$, giving $\\frac{21\\sqrt{14}}{14}$. Both $21$ and $14$ are divisible by $7$, so reduce: $\\frac{3\\sqrt{14}}{2}$. Only the whole numbers cancel — the $\\sqrt{14}$ on top is not the same thing as the $14$ on the bottom, so it stays. Check forward: $\\sqrt{14} \\approx 3.742$, the original is $\\frac{21}{3.742} \\approx 5.612$, and $\\frac{3(3.742)}{2} \\approx 5.612$ ✓.',
    },
    {
      q: 'Rationalize and simplify $\\frac{20}{\\sqrt{50}}$.',
      answer: '$2\\sqrt{2}$',
      solution:
        'Simplify the root before doing anything else: $\\sqrt{50} = \\sqrt{25} \\times \\sqrt{2} = 5\\sqrt{2}$. So the fraction is $\\frac{20}{5\\sqrt{2}} = \\frac{4}{\\sqrt{2}}$. Now rationalize: $\\frac{4}{\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{4\\sqrt{2}}{2} = 2\\sqrt{2}$. Every trace of a fraction is gone! Check forward: $\\sqrt{50} \\approx 7.071$, so the original is $\\frac{20}{7.071} \\approx 2.828$, and $2\\sqrt{2} \\approx 2.828$ ✓.',
    },
  ],
  // w6 — factor a four-term expression by grouping. Different letters each time,
  //      and the last two carry minus signs into the grouping.
  [
    {
      q: 'Factor $xy + 10x + 7y + 70$.',
      answer: '$(x+7)(y+10)$',
      solution:
        'Split the four terms into two pairs and pull a factor out of each: $x(y+10) + 7(y+10)$. Both pairs now wear the same coat, $y+10$, so pull that out too: $(x+7)(y+10)$. Notice THE CRISS-CROSS — the $10$ from $10x$ ends up next to $y$, and the $7$ from $7y$ ends up next to $x$. Check forward by expanding: $(x+7)(y+10) = xy + 10x + 7y + 70$ ✓.',
    },
    {
      q: 'Factor $ab - 6a + 11b - 66$.',
      answer: '$(a+11)(b-6)$',
      solution:
        'Group the first two and the last two, taking each minus sign along for the ride: $a(b-6) + 11(b-6)$. The shared factor is $b-6$, so the answer is $(a+11)(b-6)$. Check forward: $(a+11)(b-6) = ab - 6a + 11b - 66$ ✓. A second check with numbers, $a = 1$ and $b = 1$: the original is $1 - 6 + 11 - 66 = -60$, and $(12)(-5) = -60$ ✓.',
    },
    {
      q: 'Factor $mn + 4m - 9n - 36$.',
      answer: '$(m-9)(n+4)$',
      solution:
        'From the first pair pull out $m$: $m(n+4)$. From the second pair the shared piece is $-9$, and pulling out a NEGATIVE flips both signs inside: $-9n - 36 = -9(n+4)$. Now both groups show $n+4$: $m(n+4) - 9(n+4) = (m-9)(n+4)$. Check forward: $(m-9)(n+4) = mn + 4m - 9n - 36$ ✓. Pulling out $+9$ instead would leave $9(n+4)$, which is $9n+36$ — the wrong sign on both terms.',
    },
  ],
  // w7 — rationalize a two-term denominator that has a COEFFICIENT on the root.
  //      One answer stays a fraction, one reduces to whole numbers, and one has a
  //      denominator that comes out NEGATIVE.
  [
    {
      q: 'Rationalize $\\frac{7}{3\\sqrt{2} - 4}$.',
      answer: '$\\frac{21\\sqrt{2} + 28}{2}$',
      solution:
        'The denominator has two terms, so use its conjugate — the same expression with the middle sign flipped, $3\\sqrt{2} + 4$. Multiply top and bottom by it. The bottom becomes a difference of squares: $(3\\sqrt{2})^2 - 4^2 = 9 \\cdot 2 - 16 = 18 - 16 = 2$. Careful there — squaring $3\\sqrt{2}$ squares the $3$ as well. The top becomes $7(3\\sqrt{2} + 4) = 21\\sqrt{2} + 28$. So the answer is $\\frac{21\\sqrt{2} + 28}{2}$, and nothing reduces because $21$ is odd. Check forward: $3\\sqrt{2} \\approx 4.243$, so the original is $\\frac{7}{0.243} \\approx 28.8$, and $\\frac{21(1.414) + 28}{2} \\approx \\frac{57.7}{2} \\approx 28.8$ ✓.',
    },
    {
      q: 'Rationalize and simplify $\\frac{6}{2\\sqrt{5} - 4}$.',
      answer: '$3\\sqrt{5} + 6$',
      solution:
        'Multiply top and bottom by the conjugate $2\\sqrt{5} + 4$. The bottom is $(2\\sqrt{5})^2 - 4^2 = 4 \\cdot 5 - 16 = 20 - 16 = 4$, and the top is $6(2\\sqrt{5} + 4) = 12\\sqrt{5} + 24$. Now reduce: every part of $\\frac{12\\sqrt{5} + 24}{4}$ is divisible by $4$, giving $3\\sqrt{5} + 6$. Both terms on top have to be divided, not just the first one. Check forward: $2\\sqrt{5} \\approx 4.472$, so the original is $\\frac{6}{0.472} \\approx 12.7$, and $3(2.236) + 6 \\approx 12.7$ ✓.',
    },
    {
      q: 'Rationalize and simplify $\\frac{9}{5 + 2\\sqrt{7}}$.',
      answer: '$6\\sqrt{7} - 15$',
      solution:
        'The conjugate is $5 - 2\\sqrt{7}$. The bottom becomes $5^2 - (2\\sqrt{7})^2 = 25 - 4 \\cdot 7 = 25 - 28 = -3$ — negative, which is perfectly allowed, since the root part was the bigger one. The top becomes $9(5 - 2\\sqrt{7}) = 45 - 18\\sqrt{7}$. Divide by $-3$, flipping both signs: $\\frac{45 - 18\\sqrt{7}}{-3} = -15 + 6\\sqrt{7}$, which is tidier written as $6\\sqrt{7} - 15$. Check forward: $2\\sqrt{7} \\approx 5.292$, so the original is $\\frac{9}{10.292} \\approx 0.874$, and $6(2.646) - 15 \\approx 15.87 - 15 = 0.87$ ✓.',
    },
  ],
  // w8 — square a quantity plus its reciprocal, where the middle term collapses
  //      to a plain number. The third variation runs the trip backwards.
  [
    {
      q: 'If $x - \\frac{1}{x} = 5$, what is $x^2 + \\frac{1}{x^2}$?',
      answer: '$27$',
      solution:
        'Square both sides of what we were given. Using $(a-b)^2 = a^2 - 2ab + b^2$ with $a = x$ and $b = \\frac{1}{x}$: $\\left(x - \\frac{1}{x}\\right)^2 = x^2 - 2 \\cdot x \\cdot \\frac{1}{x} + \\frac{1}{x^2}$. The middle term is the magic bit — $x \\cdot \\frac{1}{x} = 1$, so it is simply $-2$. That gives $x^2 - 2 + \\frac{1}{x^2} = 25$, and adding $2$ to both sides gives $x^2 + \\frac{1}{x^2} = 27$. Note the answer is BIGGER than $25$ here, because a minus sign in front of the $2$ has to be undone by adding.',
    },
    {
      q: 'If $a + \\frac{1}{a} = 7$, what is $a^2 + \\frac{1}{a^2}$?',
      answer: '$47$',
      solution:
        'Square both sides: $\\left(a + \\frac{1}{a}\\right)^2 = a^2 + 2 \\cdot a \\cdot \\frac{1}{a} + \\frac{1}{a^2} = a^2 + 2 + \\frac{1}{a^2}$, and that equals $7^2 = 49$. The middle term collapses to $2$ because $a$ and $\\frac{1}{a}$ cancel. Subtract it: $a^2 + \\frac{1}{a^2} = 49 - 2 = 47$. Answering $49$ is THE MISSING MIDDLE trap in disguise — squaring a sum is never just squaring the two pieces.',
    },
    {
      q: 'If $x^2 + \\frac{1}{x^2} = 23$ and $x > 0$, what is $x + \\frac{1}{x}$?',
      answer: '$5$',
      solution:
        'This time we know the squared version and want the original, so run the same identity in reverse. We know $\\left(x + \\frac{1}{x}\\right)^2 = x^2 + 2 + \\frac{1}{x^2}$, and the right side is $23 + 2 = 25$. So $\\left(x + \\frac{1}{x}\\right)^2 = 25$, which means $x + \\frac{1}{x}$ is $5$ or $-5$. Since $x$ is positive, both $x$ and $\\frac{1}{x}$ are positive and so is their sum, so the answer is $5$. Check forward: if $x + \\frac{1}{x} = 5$ then squaring gives $x^2 + 2 + \\frac{1}{x^2} = 25$, so $x^2 + \\frac{1}{x^2} = 23$ ✓.',
    },
  ],
  // w9 — add the magic constant, factor, and hunt through the factor pairs. The
  //      first has a unique pair; the last two have two pairs each, and the third
  //      carries a negative coefficient.
  [
    {
      q: 'Find all pairs of positive integers $(x, y)$ with $xy + 5x + 2y = 111$.',
      answer: '$(x, y) = (9, 6)$',
      solution:
        'The magic constant is the product of the two coefficients, $5 \\cdot 2 = 10$. Add it to BOTH sides: $xy + 5x + 2y + 10 = 121$. The left side now factors by grouping: $x(y+5) + 2(y+5) = (x+2)(y+5)$, so $(x+2)(y+5) = 121$. Remember THE CRISS-CROSS — the $5$ went with $y$ and the $2$ went with $x$. Since $121 = 11^2$, its only divisors are $1$, $11$, and $121$. Because $x \\geq 1$ we need $x + 2 \\geq 3$, and because $y \\geq 1$ we need $y + 5 \\geq 6$. The pair $11 \\times 11$ is the only one clearing both bars, so $x = 9$ and $y = 6$. Check forward: $9 \\cdot 6 + 5 \\cdot 9 + 2 \\cdot 6 = 54 + 45 + 12 = 111$ ✓.',
    },
    {
      q: 'Find all pairs of positive integers $(x, y)$ with $xy + 6x + 5y = 68$.',
      answer: '$(x, y) = (2, 8)$ or $(x, y) = (9, 1)$',
      solution:
        'Add the magic constant $6 \\cdot 5 = 30$ to both sides: $xy + 6x + 5y + 30 = 98$, and the left side factors as $x(y+6) + 5(y+6) = (x+5)(y+6)$. So $(x+5)(y+6) = 98$. With $x \\geq 1$ we need $x + 5 \\geq 6$, and with $y \\geq 1$ we need $y + 6 \\geq 7$. List the factor pairs of $98$: $1 \\times 98$, $2 \\times 49$, $7 \\times 14$, $14 \\times 7$, $49 \\times 2$, $98 \\times 1$. Only $7 \\times 14$ and $14 \\times 7$ have BOTH numbers at least $7$. From $x + 5 = 7$, $y + 6 = 14$ we get $(2, 8)$; from $x + 5 = 14$, $y + 6 = 7$ we get $(9, 1)$. Check forward: $16 + 12 + 40 = 68$ ✓ and $9 + 54 + 5 = 68$ ✓. Two pairs, so naming only one leaves the job half done.',
    },
    {
      q: 'Find all pairs of positive integers $(x, y)$ with $xy - 2x + 5y = 44$.',
      answer: '$(x, y) = (12, 4)$ or $(x, y) = (29, 3)$',
      solution:
        'A negative coefficient does not scare the trick — the magic constant is still the product, $(-2)(5) = -10$. Adding $-10$ to both sides means subtracting $10$: $xy - 2x + 5y - 10 = 34$, and grouping gives $x(y-2) + 5(y-2) = (x+5)(y-2)$. So $(x+5)(y-2) = 34 = 2 \\cdot 17$. Since $x \\geq 1$, the factor $x + 5$ is at least $6$ and definitely positive, so $y - 2$ must be positive too. The divisors of $34$ are $1$, $2$, $17$, $34$. If $y - 2 = 1$ then $x + 5 = 34$, giving $(29, 3)$. If $y - 2 = 2$ then $x + 5 = 17$, giving $(12, 4)$. The other two splits force $x + 5$ to be $2$ or $1$, which is impossible. Check forward: $12 \\cdot 4 - 24 + 20 = 48 - 24 + 20 = 44$ ✓ and $29 \\cdot 3 - 58 + 15 = 87 - 58 + 15 = 44$ ✓.',
    },
  ],
  // w10 — divide a sum or difference of cubes by its matching binomial, so the
  //      trinomial is all that is left. The middle one is a DIFFERENCE, and its
  //      divisor is written as a plain number instead of a sum.
  [
    {
      q: 'Compute $\\frac{25^3 + 15^3}{25 + 15}$ without a calculator.',
      answer: '$475$',
      solution:
        'Cubing $25$ and $15$ by hand would be a chore, so factor first. Since $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$, dividing by $a + b$ cancels the binomial and leaves just $a^2 - ab + b^2$. With $a = 25$ and $b = 15$: $625 - 375 + 225 = 475$. Check forward the long way: $25^3 = 15625$ and $15^3 = 3375$, so the fraction is $\\frac{19000}{40} = 475$ ✓.',
    },
    {
      q: 'Compute $\\frac{90^3 - 60^3}{30}$ without a calculator.',
      answer: '$17100$',
      solution:
        'The bottom looks like a plain number, but notice that $30 = 90 - 60$ — it is the matching binomial in disguise. Since $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$, dividing by $a - b$ leaves $a^2 + ab + b^2$. Mind THE SIGN SWAP: this is the DIFFERENCE formula, so the middle term of the trinomial is $+ab$. With $a = 90$ and $b = 60$: $8100 + 5400 + 3600 = 17100$. Check forward: $90^3 = 729000$ and $60^3 = 216000$, so the fraction is $\\frac{513000}{30} = 17100$ ✓.',
    },
    {
      q: 'Compute $\\frac{12^3 + 8^3}{20}$ without a calculator.',
      answer: '$112$',
      solution:
        'Look at the denominator first: $20 = 12 + 8$, which is exactly the binomial hiding inside a sum of cubes. So $\\frac{12^3 + 8^3}{12 + 8} = 12^2 - 12 \\cdot 8 + 8^2 = 144 - 96 + 64 = 112$. The middle term is subtracted because this is the SUM formula, whose trinomial middle takes the opposite sign from the binomial. Check forward: $12^3 = 1728$ and $8^3 = 512$, so the fraction is $\\frac{2240}{20} = 112$ ✓.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 11,
  worksheet,
}
