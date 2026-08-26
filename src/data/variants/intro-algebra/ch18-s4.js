// Introduction to Algebra chapter 18 — variations for the chapter worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE: each variation carries a question, an
//    `answer` STRING, and a solution. Nothing is offered to pick from, so the
//    whole teaching load sits in the solution. There are no `choices` keys in
//    this file, and no `answer` is a bare number.
//  - EVERY key was worked out by hand and then confirmed a SECOND, independent
//    way. The standard confirmation for a sum, a difference, or a product is
//    NUMERICAL: substitute one specific input (usually $x = 2$) into the
//    ORIGINAL expression and into the finished answer, and watch the same
//    number come out both times. A rearranged polynomial is confirmed the same
//    way. A missing coefficient is confirmed by putting it back and rebuilding
//    the given fact. A single extracted coefficient is confirmed by expanding
//    the entire product independently and reading the term off. An evaluation
//    is confirmed by the nested (factored-out-$x$) form, which does the same
//    arithmetic in a different order.
//  - A variation changes the numbers AND, where it makes sense, the direction:
//    hand over the value and ask for the missing coefficient, ask which
//    constant makes a sum collapse, ask for the sum in standard form instead
//    of only its degree, wrap the multiplication in an area.
//  - Six traps run through the file. THE HALF-DISTRIBUTED MINUS: subtracting
//    only the first term of the second polynomial and leaving the rest of its
//    signs alone — every subtraction item here writes the negated polynomial
//    out in full before combining. THE FIRST-TERM DEGREE: reading the degree
//    off whichever term happens to be written first instead of hunting for the
//    largest exponent. THE MULTIPLIED EXPONENTS: turning $x^3 \cdot x^5$ into
//    $x^{15}$ when powers of the same variable ADD. THE SHORT DISTRIBUTION: a
//    monomial or a binomial that reaches the first term of its partner and
//    stops, so middle terms go missing. THE LOST SIGN AT A NEGATIVE INPUT:
//    dropping the parentheses around a negative substitution, which flips the
//    even powers and the middle term. THE MISSED PAIR: extracting one
//    coefficient from a product but listing only some of the term pairs whose
//    degrees add to the target.
//  - Nothing here is settled by how an answer looks. Every claim is settled by
//    a second computation that has to agree.

const worksheet = [
  // w1 — standard form and what you can read off it. The variations ask for
  //      three different readings: the degree, the two edge coefficients, and
  //      the coefficient of a power that is not even present.
  [
    {
      q: 'Write $11x^2 - 4x^5 + 9 - x^3$ in standard form, and state its degree.',
      answer: '$-4x^5 - x^3 + 11x^2 + 9$; degree $5$',
      solution:
        'Standard form lists the terms from the highest exponent down to the lowest, and each sign travels with its own term. The exponents present are $2$, $5$, $3$, $0$, so the order is $5$, $3$, $2$, $0$: $-4x^5 - x^3 + 11x^2 + 9$. The leading term is $-4x^5$, so the degree is $5$. Second check, by evaluation at $x = 2$: the original gives $11(4) - 4(32) + 9 - 8 = 44 - 128 + 9 - 8 = -83$, and the rearranged form gives $-4(32) - 8 + 11(4) + 9 = -128 - 8 + 44 + 9 = -83$ ✓ — reordering may not change the value, and it did not. THE FIRST-TERM DEGREE is the trap: answering degree $2$ because $11x^2$ is written first ✗. The degree is the largest exponent anywhere in the polynomial, no matter where the writer parked it.',
    },
    {
      q: 'Write $8 - 6x + 13x^3 - x^2$ in standard form, then state its leading coefficient and its constant term.',
      answer: '$13x^3 - x^2 - 6x + 8$; leading coefficient $13$, constant term $8$',
      solution:
        'Sort by exponent, highest first: the degree-$3$ term $13x^3$, then $-x^2$, then $-6x$, then the plain number $8$. That gives $13x^3 - x^2 - 6x + 8$. The leading coefficient is the number on the leading term, $13$, and the constant term is the piece with no variable, $8$. Second check, by evaluation at $x = 2$: the original gives $8 - 12 + 13(8) - 4 = 8 - 12 + 104 - 4 = 96$, and the standard form gives $104 - 4 - 12 + 8 = 96$ ✓. Two traps. Calling the leading coefficient $8$ reads the front of the ORIGINAL line instead of the front of the standard form ✗ — $8$ has no variable at all, so it can never lead. And calling the coefficient of $x^2$ "nothing" misses that $-x^2$ means $-1$ times $x^2$ ✗.',
    },
    {
      q: 'Write $-x + 24 + 7x^6 - 5x^2$ in standard form, then state its degree and the coefficient of $x^2$.',
      answer: '$7x^6 - 5x^2 - x + 24$; degree $6$; the coefficient of $x^2$ is $-5$',
      solution:
        'Descending exponents give $7x^6 - 5x^2 - x + 24$, so the leading term is $7x^6$ and the degree is $6$. Now find the $x^2$ term. It is $-5x^2$, and the minus sign belongs to that term and travels with it wherever the term is moved, so the coefficient is $-5$, not $5$. Rewriting every subtraction as an addition makes the signs impossible to misread: $7x^6 + (-5)x^2 + (-1)x + 24$, and the number sitting against $x^2$ in that list is $-5$ ✓. Second check, by evaluation at $x = 2$: the original gives $-2 + 24 + 7(64) - 5(4) = -2 + 24 + 448 - 20 = 450$, and the standard form gives $448 - 20 - 2 + 24 = 450$ ✓ — reordering the terms did not change the value, which is what standard form promises. Two traps. Answering $5$ drops the sign ✗ — test it by putting $+5x^2$ into the polynomial instead, which would read $448 + 20 - 2 + 24 = 490$ at $x = 2$, not $450$. And answering $-1$ grabs the neighbouring term $-x$ ✗, whose coefficient is hidden but belongs to $x$, not to $x^2$.',
    },
  ],

  // w2 — adding. One four-term pair, one three-way sum, one where the constant
  //      terms wipe each other out and the answer has a hole in it.
  [
    {
      q: 'Add: $(4x^3 - 9x^2 + 7x - 11) + (-6x^3 + 2x^2 + 15)$.',
      answer: '$-2x^3 - 7x^2 + 7x + 4$',
      solution:
        'Line the terms up by degree, remembering that the second polynomial has no $x$ term at all (its $x$ coefficient is $0$). Cubes: $4x^3 + (-6x^3) = -2x^3$. Squares: $-9x^2 + 2x^2 = -7x^2$. Plain $x$: $7x + 0 = 7x$. Constants: $-11 + 15 = 4$. The sum is $-2x^3 - 7x^2 + 7x + 4$. Second check, by evaluation at $x = 2$: the first polynomial gives $32 - 36 + 14 - 11 = -1$, the second gives $-48 + 8 + 15 = -25$, and $-1 + (-25) = -26$; the answer gives $-16 - 28 + 14 + 4 = -26$ ✓. The trap is combining $-9x^2$ with $7x$ because they sit next to each other, or dropping the $7x$ on the grounds that the second polynomial has nothing to pair it with ✗. Only terms with the SAME exponent combine, and a term with no partner survives untouched.',
    },
    {
      q: 'Add these three polynomials: $(x^2 - 14x + 6) + (5x^2 + 9x - 21) + (-3x^2 + 2x + 8)$.',
      answer: '$3x^2 - 3x - 7$',
      solution:
        'Adding three at once works exactly like adding two — gather each degree across all three. Squares: $1 + 5 - 3 = 3$, giving $3x^2$. The $x$ terms: $-14 + 9 + 2 = -3$, giving $-3x$. Constants: $6 - 21 + 8 = -7$. The total is $3x^2 - 3x - 7$. Second check, by evaluation at $x = 2$: the three polynomials give $4 - 28 + 6 = -18$, then $20 + 18 - 21 = 17$, then $-12 + 4 + 8 = 0$, and $-18 + 17 + 0 = -1$; the answer gives $12 - 6 - 7 = -1$ ✓. The trap is stopping after two polynomials and forgetting the third — which here is easy to do, since the third happens to be worth $0$ at $x = 2$ ✗. It is not worth $0$ everywhere: at $x = 1$ it is worth $-3 + 2 + 8 = 7$, and leaving it out would give $6x^2 - 5x - 15$, which is wrong in all three coefficients.',
    },
    {
      q: 'Add: $(-2x^4 + 7x - 13) + (9x^4 - x^3 + 5x + 13)$. Write the answer in standard form.',
      answer: '$7x^4 - x^3 + 12x$',
      solution:
        'By degree: $-2x^4 + 9x^4 = 7x^4$; the $-x^3$ has no partner, so it stays; there are no $x^2$ terms; $7x + 5x = 12x$; and the constants are $-13 + 13 = 0$, so the constant term vanishes and is simply not written. The sum is $7x^4 - x^3 + 12x$. Second check, by evaluation at $x = 2$: the first polynomial gives $-32 + 14 - 13 = -31$, the second gives $144 - 8 + 10 + 13 = 159$, and $-31 + 159 = 128$; the answer gives $112 - 8 + 24 = 128$ ✓. The trap is writing $\\ldots + 12x + 26$ by adding the two $13$s as if the first were positive ✗ — one is $-13$ and one is $+13$, which is precisely why the constant disappears. Also note the degree stayed at $4$: the leading terms $-2x^4$ and $9x^4$ do not cancel, so nothing collapses up top.',
    },
  ],

  // w3 — subtracting, the chapter's biggest sign hazard. The middle variation
  //      flips the direction with "subtract FROM", which reverses the order.
  [
    {
      q: 'Subtract: $(7x^3 - 5x^2 + 12) - (2x^3 + 6x^2 - 4x - 9)$.',
      answer: '$5x^3 - 11x^2 + 4x + 21$',
      solution:
        'Write the negated second polynomial out in full before combining anything — every one of its four terms flips: $-(2x^3 + 6x^2 - 4x - 9) = -2x^3 - 6x^2 + 4x + 9$. Now the problem is a plain addition: $7x^3 - 5x^2 + 0x + 12 - 2x^3 - 6x^2 + 4x + 9$. Combining, $7x^3 - 2x^3 = 5x^3$, $-5x^2 - 6x^2 = -11x^2$, $0 + 4x = 4x$, and $12 + 9 = 21$. Second check, by evaluation at $x = 2$: the first polynomial gives $56 - 20 + 12 = 48$, the second gives $16 + 24 - 8 - 9 = 23$, and $48 - 23 = 25$; the answer gives $40 - 44 + 8 + 21 = 25$ ✓. THE HALF-DISTRIBUTED MINUS is the trap: flipping only the leading term and copying the rest, which produces $5x^3 + x^2 - 4x + 21$ ✗. Test that at $x = 2$: $40 + 4 - 8 + 21 = 57$, nowhere near $25$. The minus belongs to all four terms, including the last.',
    },
    {
      q: 'Subtract $(-4x^2 + 9x - 17)$ from $(x^3 - 4x^2 + 3)$.',
      answer: '$x^3 - 9x + 20$',
      solution:
        '"Subtract $A$ from $B$" means $B - A$ — the polynomial you subtract FROM goes first. So this is $(x^3 - 4x^2 + 3) - (-4x^2 + 9x - 17)$. Negate the second in full: $+4x^2 - 9x + 17$; note that $-4x^2$ becomes $+4x^2$ and $-17$ becomes $+17$. Combining: $x^3$ has no partner and stays, $-4x^2 + 4x^2 = 0$ so the squares vanish, $0 - 9x = -9x$, and $3 + 17 = 20$. The answer is $x^3 - 9x + 20$. Second check, by evaluation at $x = 2$: the two given polynomials are worth $8 - 16 + 3 = -5$ and $-16 + 18 - 17 = -15$, and $-5 - (-15) = 10$; the answer gives $8 - 18 + 20 = 10$ ✓. The trap is subtracting in the order the sentence names them, computing $(-4x^2 + 9x - 17) - (x^3 - 4x^2 + 3) = -x^3 + 9x - 20$ ✗ — the exact negative of the truth, worth $-10$ at $x = 2$. Read the word "from" before you pick up the pencil.',
    },
    {
      q: 'Simplify: $(2x^4 - x^3 + 8x - 25) - (5x^4 - x^3 - 6x^2 + 11)$.',
      answer: '$-3x^4 + 6x^2 + 8x - 36$',
      solution:
        'Negate the second polynomial term by term: $-5x^4 + x^3 + 6x^2 - 11$. All four signs turned over, including the $-6x^2$, which became $+6x^2$. Now combine: $2x^4 - 5x^4 = -3x^4$; $-x^3 + x^3 = 0$, so the cubes disappear; the $+6x^2$ has no partner and survives; $8x$ has no partner and survives; $-25 - 11 = -36$. The answer is $-3x^4 + 6x^2 + 8x - 36$. Second check, by evaluation at $x = 2$: the first polynomial gives $32 - 8 + 16 - 25 = 15$, the second gives $80 - 8 - 24 + 11 = 59$, and $15 - 59 = -44$; the answer gives $-48 + 24 + 16 - 36 = -44$ ✓. Two traps. Writing $-2x^3$ for the cubes treats the subtraction as an addition ✗ — subtracting $-x^3$ from $-x^3$ leaves nothing. And ending with $-25 + 11 = -14$ lets the minus reach the third term and quit before the fourth ✗.',
    },
  ],

  // w4 — evaluating. Every route is checked a second time with the nested
  //      form, which reorders the arithmetic completely. The last variation
  //      runs backwards: the value is given and a coefficient is missing.
  [
    {
      q: 'Evaluate $g(x) = -2x^2 + 7x - 9$ at $x = -6$.',
      answer: '$-123$',
      solution:
        'Substitute with parentheses around the negative input, so no sign can go missing: $g(-6) = -2(-6)^2 + 7(-6) - 9$. Square FIRST: $(-6)^2 = 36$, so the first term is $-2(36) = -72$. The middle term is $7(-6) = -42$. Then $-72 - 42 - 9 = -123$. Second check by a different route — factor an $x$ out of the first two terms and write $g(x) = x(-2x + 7) - 9$, which does the same arithmetic in a completely different order: at $x = -6$ the bracket is $12 + 7 = 19$, so $g(-6) = (-6)(19) - 9 = -114 - 9 = -123$ ✓. THE LOST SIGN AT A NEGATIVE INPUT is the trap: writing $-2 \\cdot -6^2$ without parentheses and reading it as $-2(-36) = +72$, which gives $72 - 42 - 9 = 21$ ✗. The exponent attaches to the whole $(-6)$, and a square is never negative.',
    },
    {
      q: 'If $h(x) = x^3 - 5x^2 + 4x + 30$, what is $h(-4)$?',
      answer: '$-130$',
      solution:
        'Substitute in parentheses: $h(-4) = (-4)^3 - 5(-4)^2 + 4(-4) + 30$. Take the powers one at a time — $(-4)^3 = -64$ because an odd power of a negative stays negative, and $(-4)^2 = +16$ because an even power turns positive. So $h(-4) = -64 - 5(16) - 16 + 30 = -64 - 80 - 16 + 30 = -130$. Second check by the nested form $h(x) = ((x - 5)x + 4)x + 30$, which never raises anything to a power: $-4 - 5 = -9$; $-9 \\times (-4) = 36$; $36 + 4 = 40$; $40 \\times (-4) = -160$; $-160 + 30 = -130$ ✓. The trap is letting the two powers share a sign — reading $(-4)^2$ as $-16$ gives $-64 + 80 - 16 + 30 = 30$ ✗, and reading $(-4)^3$ as $+64$ gives $64 - 80 - 16 + 30 = -2$ ✗. Odd powers keep the minus, even powers destroy it.',
    },
    {
      q: 'For $p(x) = 4x^2 + bx - 13$, it is known that $p(-5) = 47$. Find $b$.',
      answer: '$b = 8$',
      solution:
        'Evaluate the parts you can and leave $b$ standing: $p(-5) = 4(-5)^2 + b(-5) - 13 = 4(25) - 5b - 13 = 87 - 5b$. Set that equal to the value you were handed: $87 - 5b = 47$, so $5b = 40$ and $b = 8$. Second check, by rebuilding the given fact from scratch with the finished coefficient — with $b = 8$ the polynomial is $4x^2 + 8x - 13$, and $p(-5) = 4(25) + 8(-5) - 13 = 100 - 40 - 13 = 47$ ✓, which is exactly what the question stated. The trap is writing the middle term as $+5b$ because "two negatives make a positive," which gives $87 + 5b = 47$ and $b = -8$ ✗. Test that: with $b = -8$ the value at $-5$ would be $100 + 40 - 13 = 127$, not $47$. Only ONE negative is in play at this stage, since $b$ has no sign of its own yet — the sign it turns out to carry is the answer, not something to assume up front.',
    },
  ],

  // w5 — a monomial hits EVERY term. Signs and exponents both change, and the
  //      last variation buys the same skill with an area.
  [
    {
      q: 'Multiply: $-5x^4(3x^3 - 2x + 7)$.',
      answer: '$-15x^7 + 10x^5 - 35x^4$',
      solution:
        'The monomial reaches all three terms. Multiply coefficients and ADD exponents each time: $-5x^4 \\cdot 3x^3 = -15x^7$; $-5x^4 \\cdot (-2x) = +10x^5$, where two negatives make the middle term positive; $-5x^4 \\cdot 7 = -35x^4$. The product is $-15x^7 + 10x^5 - 35x^4$. Second check, by evaluation at $x = 2$: the monomial is $-5(16) = -80$ and the trinomial is $24 - 4 + 7 = 27$, so the product should be $-80 \\times 27 = -2160$; the answer gives $-15(128) + 10(32) - 35(16) = -1920 + 320 - 560 = -2160$ ✓. Two traps. THE MULTIPLIED EXPONENTS turns $x^4 \\cdot x^3$ into $x^{12}$ ✗ — four $x$s beside three $x$s make seven $x$s, so the exponents add. And keeping the middle term negative gives $-10x^5$ ✗, which would make the value at $x = 2$ equal $-2800$.',
    },
    {
      q: 'Multiply: $-x^2(8x^5 + x^3 - 13x - 6)$.',
      answer: '$-8x^7 - x^5 + 13x^3 + 6x^2$',
      solution:
        'Here the multiplier is $-x^2$, which means $-1 \\cdot x^2$ — the invisible coefficient is $-1$, so every term keeps its size and flips its sign, while the exponent climbs by $2$. Term by term: $-x^2 \\cdot 8x^5 = -8x^7$; $-x^2 \\cdot x^3 = -x^5$; $-x^2 \\cdot (-13x) = +13x^3$; $-x^2 \\cdot (-6) = +6x^2$. Second check, by evaluation at $x = 2$: the multiplier is $-4$ and the four-term polynomial is $256 + 8 - 26 - 6 = 232$, so the product should be $-928$; the answer gives $-1024 - 32 + 104 + 24 = -928$ ✓. THE SHORT DISTRIBUTION is the trap in a four-term problem: reaching the first two terms and losing steam, or flipping only the first sign ✗. Every one of the four signs turned over — count the terms in your answer and make sure there are still four.',
    },
    {
      q: 'A rectangle has width $3x^2$ and length $5x^3 - 7x + 12$. Write its area as a polynomial in standard form.',
      answer: '$15x^5 - 21x^3 + 36x^2$',
      solution:
        'Area is width times length, so distribute $3x^2$ across all three terms of the length: $3x^2 \\cdot 5x^3 = 15x^5$; $3x^2 \\cdot (-7x) = -21x^3$; $3x^2 \\cdot 12 = 36x^2$. The area is $15x^5 - 21x^3 + 36x^2$, and it is already in descending order. Second check, by evaluation at $x = 2$: the width is $3(4) = 12$ and the length is $40 - 14 + 12 = 38$, so the area should be $12 \\times 38 = 456$; the answer gives $15(32) - 21(8) + 36(4) = 480 - 168 + 144 = 456$ ✓. The trap is answering $15x^5 - 7x + 12$, letting the width multiply only the leading term ✗ — that would be worth $480 - 14 + 12 = 478$ at $x = 2$, not $456$. Every term of the length spans the same width, so every term gets multiplied.',
    },
  ],

  // w6 — two binomials, four little products, and the middle terms combine.
  //      The variations run monic, then with both leading coefficients doing
  //      work, then with one factor written constant-first so the finished
  //      product leads with a negative.
  [
    {
      q: 'Multiply: $(x - 11)(x + 4)$.',
      answer: '$x^2 - 7x - 44$',
      solution:
        'Four products, one for each pairing: $x \\cdot x = x^2$, $x \\cdot 4 = 4x$, $-11 \\cdot x = -11x$, $-11 \\cdot 4 = -44$. The two middle terms combine: $4x - 11x = -7x$. The product is $x^2 - 7x - 44$. Second check, by evaluation at $x = 2$: the factors are worth $-9$ and $6$, whose product is $-54$; the answer gives $4 - 14 - 44 = -54$ ✓. The trap is adding the constants as if both were positive and writing $15x$, or making the constant term $+44$ ✗. The signs are opposite: $-11$ and $+4$ ADD to $-7$ for the middle term and MULTIPLY to $-44$ for the constant. A quick sanity read: one factor is negative at $x = 2$ and one is positive, so the product must come out negative, and $-54$ does.',
    },
    {
      q: 'Multiply: $(5x + 8)(4x - 3)$.',
      answer: '$20x^2 + 17x - 24$',
      solution:
        'Four products again, but now both leading coefficients do work: $5x \\cdot 4x = 20x^2$, $5x \\cdot (-3) = -15x$, $8 \\cdot 4x = 32x$, $8 \\cdot (-3) = -24$. The middle terms have opposite signs, so they partly cancel: $-15x + 32x = 17x$. The product is $20x^2 + 17x - 24$. Second check, by evaluation at $x = 2$: the factors are worth $18$ and $5$, so the product is $90$; the answer gives $80 + 34 - 24 = 90$ ✓. Two traps. Adding the middle terms as $15x + 32x = 47x$ ignores the minus on the $3$ ✗ — that would give $80 + 94 - 24 = 150$ at $x = 2$, not $90$. And writing $20x^2 - 24$, as though the middles always cancel, is a habit picked up from a sum times a difference ✗; the middles only vanish when the two products match exactly, and $-15$ and $32$ do not.',
    },
    {
      q: 'Multiply $(6 - x)(x + 15)$, and write the answer in standard form.',
      answer: '$-x^2 - 9x + 90$',
      solution:
        'The first factor is written with its constant in front, which changes nothing about the method: still four products. $6 \\cdot x = 6x$; $6 \\cdot 15 = 90$; $-x \\cdot x = -x^2$; $-x \\cdot 15 = -15x$. The middles combine to $6x - 15x = -9x$, and standard form puts the highest power first: $-x^2 - 9x + 90$. Second check, by evaluation at $x = 2$: the factors are worth $4$ and $17$, so the product is $68$; the answer gives $-4 - 18 + 90 = 68$ ✓. The trap is reading $(6 - x)$ as $(x - 6)$ because that looks more familiar ✗ — that swap gives $x^2 + 9x - 90$, the exact negative of the truth, worth $-68$ at $x = 2$. The term being subtracted is the $x$, so the $x^2$ term comes out NEGATIVE, and the leading coefficient of the answer is $-1$.',
    },
  ],

  // w7 — binomial times trinomial: SIX products before anything combines. The
  //      third variation puts a negative leading coefficient in the trinomial.
  [
    {
      q: 'Multiply: $(3x + 4)(x^2 - 6x + 2)$.',
      answer: '$3x^3 - 14x^2 - 18x + 8$',
      solution:
        'Two terms times three terms is six products, and all six get written before anything combines. The $3x$ gives $3x^3 - 18x^2 + 6x$. The $4$ gives $4x^2 - 24x + 8$. Now collect: the squares are $-18x^2 + 4x^2 = -14x^2$, and the $x$ terms are $6x - 24x = -18x$. The product is $3x^3 - 14x^2 - 18x + 8$. Second check, by evaluation at $x = 2$: the factors are worth $10$ and $4 - 12 + 2 = -6$, so the product is $-60$; the answer gives $24 - 56 - 36 + 8 = -60$ ✓. The trap is letting the $4$ skip the middle term of the trinomial, which loses $-24x$ and gives $3x^3 - 14x^2 + 6x + 8$ ✗ — worth $24 - 56 + 12 + 8 = -12$ at $x = 2$, so the numerical check catches it at once. Two free sanity marks: the leading term must be $3x \\cdot x^2 = 3x^3$ and the constant must be $4 \\cdot 2 = 8$, and both check out.',
    },
    {
      q: 'Multiply: $(x - 8)(2x^2 + 7x - 3)$.',
      answer: '$2x^3 - 9x^2 - 59x + 24$',
      solution:
        'Six products. The $x$ gives $2x^3 + 7x^2 - 3x$. The $-8$ gives $-16x^2 - 56x + 24$ — note that $-8 \\cdot (-3) = +24$, so the constant comes out positive. Collect: $7x^2 - 16x^2 = -9x^2$ and $-3x - 56x = -59x$. The product is $2x^3 - 9x^2 - 59x + 24$. Second check, by evaluation at $x = 2$: the factors are worth $-6$ and $8 + 14 - 3 = 19$, so the product is $-114$; the answer gives $16 - 36 - 118 + 24 = -114$ ✓. The trap is forgetting that the $-8$ carries its minus into all three of its products, which turns the constant into $-24$ and the middle into $+56x$ ✗. Check the constant term the free way: it is always the product of the two constant terms, $(-8)(-3) = +24$, which settles the sign without expanding anything.',
    },
    {
      q: 'Multiply: $(x - 6)(-2x^2 + x + 15)$.',
      answer: '$-2x^3 + 13x^2 + 9x - 90$',
      solution:
        'A negative leading coefficient does not change the method, only the bookkeeping. The $x$ gives $-2x^3 + x^2 + 15x$. The $-6$ gives $+12x^2 - 6x - 90$, since $-6 \\cdot (-2x^2) = +12x^2$ and $-6 \\cdot x = -6x$ and $-6 \\cdot 15 = -90$. Collect: $x^2 + 12x^2 = 13x^2$ and $15x - 6x = 9x$. The product is $-2x^3 + 13x^2 + 9x - 90$. Second check, by evaluation at $x = 2$: the factors are worth $-4$ and $-8 + 2 + 15 = 9$, so the product is $-36$; the answer gives $-16 + 52 + 18 - 90 = -36$ ✓. The trap is writing $-12x^2$ for the second batch ✗, treating $-6$ times $-2x^2$ as negative; that would give $-16 - 44 + 18 - 90 = -132$ at $x = 2$ and miss by a mile. Two negatives multiply to a positive, and it is the largest term in the middle.',
    },
  ],

  // w8 — pull ONE coefficient out of a product. Every solution lists all the
  //      pairs, then expands the whole product independently to confirm.
  [
    {
      q: 'Without expanding fully, find the coefficient of $x^2$ in $(3x^2 - 7x + 4)(x^2 + 5x - 6)$.',
      answer: '$-49$',
      solution:
        'Only pairs of terms whose degrees ADD to $2$ can build an $x^2$, so list them all: degree $2$ with degree $0$ gives $3x^2 \\cdot (-6) = -18x^2$; degree $1$ with degree $1$ gives $-7x \\cdot 5x = -35x^2$; degree $0$ with degree $2$ gives $4 \\cdot x^2 = 4x^2$. Adding the coefficients: $-18 - 35 + 4 = -49$. Second check, by expanding the whole product independently: $3x^2$ gives $3x^4 + 15x^3 - 18x^2$, $-7x$ gives $-7x^3 - 35x^2 + 42x$, and $4$ gives $4x^2 + 20x - 24$, so the full expansion is $3x^4 + 8x^3 - 49x^2 + 62x - 24$ — and its $x^2$ coefficient is $-49$ ✓. That expansion passes its own numerical test at $x = 2$: the factors are worth $2$ and $8$, product $16$, while $48 + 64 - 196 + 124 - 24 = 16$ ✓. THE MISSED PAIR is the trap: finding two of the three pairs and answering $-53$ or $-14$ ✗. Three pairs of degrees add to $2$ here, and all three must be counted.',
    },
    {
      q: 'Find the coefficient of $x^4$ in $(2x^3 + x^2 - 5x + 8)(x^2 - 3x + 6)$.',
      answer: '$-5$',
      solution:
        'Hunt for degree pairs adding to $4$. From the first factor, $2x^3$ needs a degree-$1$ partner: $2x^3 \\cdot (-3x) = -6x^4$. Next, $x^2$ needs a degree-$2$ partner: $x^2 \\cdot x^2 = x^4$, contributing $+1$. Then $-5x$ would need a degree-$3$ partner and $8$ would need a degree-$4$ partner, and the second factor has neither, so those two contribute nothing. Total: $-6 + 1 = -5$. Second check, by full expansion: $2x^3$ gives $2x^5 - 6x^4 + 12x^3$, $x^2$ gives $x^4 - 3x^3 + 6x^2$, $-5x$ gives $-5x^3 + 15x^2 - 30x$, and $8$ gives $8x^2 - 24x + 48$, so the product is $2x^5 - 5x^4 + 4x^3 + 29x^2 - 54x + 48$ ✓ — the $x^4$ coefficient is $-5$. The expansion checks out at $x = 2$: the factors are worth $18$ and $4$, product $72$, while $64 - 80 + 32 + 116 - 108 + 48 = 72$ ✓. The trap is stopping at the first pair and answering $-6$, or counting a $-5x$ pairing that has no partner to pair with ✗.',
    },
    {
      q: 'Find the coefficient of $x^5$ in $(3x^3 - 2x^2 + 7)(x^3 + 5x^2 - 4x + 1)$.',
      answer: '$13$',
      solution:
        'The first factor holds degrees $3$, $2$ and $0$ — there is no $x$ term in it at all. Now list the pairs whose degrees add to $5$. Degree $3$ with degree $2$: $3x^3 \\cdot 5x^2 = 15x^5$, contributing $15$. Degree $2$ with degree $3$: $-2x^2 \\cdot x^3 = -2x^5$, contributing $-2$. The constant $7$ would need a degree-$5$ partner, and the second factor tops out at degree $3$, so it contributes nothing. Total: $15 - 2 = 13$. Second check, by expanding the whole product independently: $3x^3$ gives $3x^6 + 15x^5 - 12x^4 + 3x^3$, $-2x^2$ gives $-2x^5 - 10x^4 + 8x^3 - 2x^2$, and $7$ gives $7x^3 + 35x^2 - 28x + 7$, so the product is $3x^6 + 13x^5 - 22x^4 + 18x^3 + 33x^2 - 28x + 7$ ✓, with $13$ sitting on the $x^5$ term. That expansion holds up at $x = 2$: the factors are worth $23$ and $21$, product $483$, while $192 + 416 - 352 + 144 + 132 - 56 + 7 = 483$ ✓. Two traps. Stopping at the first pair answers $15$ ✗. And pairing the missing $x$ term of the first factor with the $-4x$ of the second invents a contribution out of nothing ✗ — a degree that is absent has coefficient $0$, so it can add only $0$ to any coefficient.',
    },
  ],

  // w9 — the degree of a sum can drop, sometimes a long way. The middle
  //      variation runs backwards: choose the constant that forces the drop.
  [
    {
      q: 'Let $f(x) = 8x^4 - 3x^3 + 11x - 6$ and $g(x) = -8x^4 + 3x^3 - 11x + 20$. What is the degree of $f(x) + g(x)$?',
      answer: '$0$',
      solution:
        'Add by degree and watch the collapse: $8x^4 + (-8x^4) = 0$; $-3x^3 + 3x^3 = 0$; there are no $x^2$ terms; $11x + (-11x) = 0$. Everything with a variable cancels, and all that survives is $-6 + 20 = 14$. A nonzero constant is a degree-$0$ polynomial, so the degree of the sum is $0$. Second check, by evaluation at two different inputs — if the sum really is the constant $14$, it must give $14$ everywhere. At $x = 2$: $f = 128 - 24 + 22 - 6 = 120$ and $g = -128 + 24 - 22 + 20 = -106$, and $120 - 106 = 14$ ✓. At $x = 1$: $f = 8 - 3 + 11 - 6 = 10$ and $g = -8 + 3 - 11 + 20 = 4$, and $10 + 4 = 14$ ✓. Same value at both inputs, as a constant must. The trap is answering $4$ because both polynomials have degree $4$ ✗. The degree of a sum is AT MOST the larger degree, never guaranteed to equal it — check the leading terms before you answer.',
    },
    {
      q: 'Let $p(x) = 6x^5 - x^4 + 9x^2 - 2$ and $q(x) = kx^5 + x^4 - 9x^2 + 7$. For what value of $k$ does $p(x) + q(x)$ have degree $0$?',
      answer: '$k = -6$',
      solution:
        'Add everything that does not involve $k$ first: $-x^4 + x^4 = 0$, so the fourth powers cancel on their own; $9x^2 + (-9x^2) = 0$, so the squares cancel too; and $-2 + 7 = 5$. That leaves the sum equal to $(6 + k)x^5 + 5$, and the only term still in doubt is the leading one. Degree $0$ means no power of $x$ survives at all, so $6 + k = 0$ and $k = -6$. Second check, by putting the value back and testing at two different inputs — with $k = -6$ the sum should be the constant $5$ everywhere. At $x = 2$: $p = 192 - 16 + 36 - 2 = 210$ and $q = -192 + 16 - 36 + 7 = -205$, and $210 - 205 = 5$ ✓. At $x = 3$: $p = 1458 - 81 + 81 - 2 = 1456$ and $q = -1458 + 81 - 81 + 7 = -1451$, and $1456 - 1451 = 5$ ✓. The trap is answering $k = 6$, copying the coefficient instead of opposing it ✗ — that gives $12x^5 + 5$, which has degree $5$, the highest possible outcome rather than the lowest. To cancel a $+6$, you need its opposite.',
    },
    {
      q: 'Add $u(x) = -3x^4 + 10x^3 - 4x + 21$ and $v(x) = 3x^4 - 10x^3 + 7x^2 + 4x - 6$. Write the sum in standard form and state its degree.',
      answer: '$7x^2 + 15$; degree $2$',
      solution:
        'Go down the degrees one at a time: $-3x^4 + 3x^4 = 0$, so the fourth powers cancel; $10x^3 + (-10x^3) = 0$, so the cubes cancel as well; the $7x^2$ has no partner and survives; $-4x + 4x = 0$, so the $x$ terms disappear too; and $21 - 6 = 15$. Only two terms are left standing: $7x^2 + 15$, whose highest surviving exponent is $2$. Second check, by evaluation at $x = 2$: $u = -48 + 80 - 8 + 21 = 45$ and $v = 48 - 80 + 28 + 8 - 6 = -2$, and $45 - 2 = 43$; the answer gives $28 + 15 = 43$ ✓. Two traps. Answering degree $4$ assumes a sum keeps the degree of the polynomials that built it ✗ — three separate cancellations happened here. Answering degree $8$ adds the two degrees ✗; degrees add when polynomials MULTIPLY, never when they are added. Count what survives before naming the degree.',
    },
  ],

  // w10 — the sum of all the coefficients is the value at x = 1. Each key is
  //       confirmed BOTH by the shortcut and by a real expansion; the last
  //       variation runs the shortcut backwards to recover a coefficient.
  [
    {
      q: 'What is the sum of all the coefficients of the expansion of $(3x - 5)^3$?',
      answer: '$-8$',
      solution:
        'Substituting $x = 1$ turns every power of $x$ into $1$, so the value of a polynomial at $1$ IS the sum of its coefficients. Here that is $(3 \\cdot 1 - 5)^3 = (-2)^3 = -8$, and no expansion is needed. Second check, by expanding for real and adding the coefficients one at a time: $(3x - 5)^3 = 27x^3 - 135x^2 + 225x - 125$, and $27 - 135 + 225 - 125 = -8$ ✓ — the two routes agree. Two traps. Answering $8$ forgets that an odd power of a negative stays negative ✗. Answering $-2$ stops after evaluating the bracket and never cubes it ✗ — the exponent applies to the whole answer, so finish the job.',
    },
    {
      q: 'What is the sum of all the coefficients of the expansion of $(x - 4)^4$?',
      answer: '$81$',
      solution:
        'Substituting $x = 1$ turns every power of $x$ into $1$, so the value at $1$ IS the sum of the coefficients — and the factored form can be evaluated without expanding anything: $(1 - 4)^4 = (-3)^4 = 81$. The fourth power is EVEN, so the negative inside comes out positive. Second check, by expanding for real and adding the coefficients one at a time. Square once: $(x - 4)^2 = x^2 - 8x + 16$. Square that result: $(x^2 - 8x + 16)^2 = x^4 - 16x^3 + 96x^2 - 256x + 256$, where the $96$ collects $64$ from $(-8x)^2$ and $32$ from the two copies of $x^2 \\cdot 16$. Adding those coefficients: $1 - 16 + 96 - 256 + 256 = 81$ ✓ — the shortcut and the long road agree. Two traps. Answering $-81$ lets the minus survive an even power ✗; four negative factors multiply to a positive, and a quick way to see it is that $(-3)^4 = (-3)^2 \\cdot (-3)^2 = 9 \\cdot 9$. Answering $-3$ stops after evaluating the bracket and never raises it to the fourth power ✗ — the exponent applies to the whole bracket, so finish the job.',
    },
    {
      q: 'The coefficients of $p(x) = 5x^4 - 3x^3 + ax^2 - 8x + 12$ add up to $23$. Find $a$.',
      answer: '$a = 17$',
      solution:
        'The sum of the coefficients is $p(1)$, so run the shortcut with $a$ still standing: $p(1) = 5 - 3 + a - 8 + 12 = 6 + a$. Setting that equal to $23$ gives $a = 17$. Second check, by adding the five coefficients directly once the blank is filled — the coefficients of $5x^4 - 3x^3 + 17x^2 - 8x + 12$ are $5$, $-3$, $17$, $-8$, and $12$, and $5 - 3 = 2$, $2 + 17 = 19$, $19 - 8 = 11$, $11 + 12 = 23$ ✓, matching what the question promised. The trap is reading the coefficients off as sizes and ignoring their signs: $5 + 3 + a + 8 + 12 = 28 + a$ leads to $a = -5$ ✗. Test that: with $a = -5$ the coefficients are $5$, $-3$, $-5$, $-8$, $12$, which add to $1$, not $23$. Every coefficient enters the sum WITH its own sign, minus signs included.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 18,
  worksheet,
}
