// Counting & Probability chapter 14 — variations for section 14.4
// (Applications of the Binomial Theorem). All problems and solutions are
// original MathQuest content.
//
// House rules for this file:
//  - Every stem settles its conventions: "the coefficient of $x^k$" means after
//    full expansion and combining of like terms; "the constant term" is the term
//    with exponent $0$; decimal answers are exact values, never rounded.
//  - Every keyed answer is reached twice along routes that share no steps: the
//    one-term binomial formula against a factor-out-$x$ rewrite, a squaring
//    trick, a convolution sum, or straight multiplication. Route two never
//    reuses route one’s number.
//  - Each distractor is one named slip — losing a sign, using the wrong power
//    of the constant, stopping the expansion early, reading the wrong term —
//    and the slip is named in CAPS.

const s144 = [
  // slot 1 — coefficients near the top of a big expansion
  [
    {
      q: 'What is the coefficient of $x^{48}$ in the expansion of $(x+1)^{50}$?',
      choices: ['$2450$', '$1225$', '$50$', '$19600$'],
      answer: 1,
      solution:
        'Route one, the binomial formula. The coefficient of $x^{48}$ is $\\binom{50}{48} = \\binom{50}{2} = \\frac{50\\cdot 49}{2} = 1225$ ✓. Route two, count the positions of the two $1$s. A product equals $x^{48}$ exactly when two of the $50$ factors supply a $1$. If the later of those two factors is factor number $m$, the earlier one can be any of the $m - 1$ factors before it, so the count is $1 + 2 + \\cdots + 49 = \\frac{49\\cdot 50}{2} = 1225$ ✓. (The choice $2450$ is $50\\cdot 49$, FORGETTING TO DIVIDE BY $2$ ✗; $50$ is $\\binom{50}{1}$, the coefficient of $x^{49}$, READING THE WRONG TERM ✗; $19600$ is $\\binom{50}{3}$, the coefficient of $x^{47}$ ✗.)',
    },
    {
      q: 'What is the coefficient of $x^{58}$ in the expansion of $(x+2)^{60}$?',
      choices: ['$1770$', '$3540$', '$14160$', '$7080$'],
      answer: 3,
      solution:
        'Route one, the binomial formula. Two of the $60$ factors supply a $2$; the choice of which two contributes $\\binom{60}{2} = 1770$, and each chosen factor multiplies in a $2$, so the coefficient is $1770\\cdot 2^2 = 7080$ ✓. Route two, square the base first. Since $(x+2)^{60} = \\left((x+2)^2\\right)^{30} = (x^2 + 4x + 4)^{30}$, a product equal to $x^{58}$ takes either $29$ copies of $x^2$ and one $4$ (in $30$ ways, worth $30\\cdot 4 = 120$) or $28$ copies of $x^2$ and two $4x$’s (in $\\binom{30}{2} = 435$ ways, worth $435\\cdot 16 = 6960$). Adding, $120 + 6960 = 7080$ ✓. (The choice $1770$ FORGETS THE FACTOR $2^2$ ✗; $3540$ multiplies by $2$ instead of $2^2$, USING THE $2$ ONLY ONCE ✗; $14160$ uses $2^3$, PUTTING THE WRONG EXPONENT ON THE $2$ ✗.)',
    },
    {
      q: 'For a positive integer $n$, the coefficient of $x^{n-2}$ in the expansion of $(x+1)^n$ is $1128$. What is $n$?',
      choices: ['$47$', '$49$', '$48$', '$34$'],
      answer: 2,
      solution:
        'Route one, factor the doubled equation. The coefficient of $x^{n-2}$ is $\\binom{n}{2} = \\frac{n(n-1)}{2}$, so $n(n-1) = 2256$. Two consecutive integers with product $2256$ sit on either side of $\\sqrt{2256} \\approx 47.5$, and indeed $48\\cdot 47 = 2256$, so $n = 48$ ✓. Route two, the quadratic formula. From $n^2 - n - 2256 = 0$, $n = \\frac{1 + \\sqrt{1 + 4\\cdot 2256}}{2} = \\frac{1 + \\sqrt{9025}}{2} = \\frac{1 + 95}{2} = 48$ ✓. (The choice $47$ TAKES THE SMALLER OF THE TWO CONSECUTIVE FACTORS, which is $n - 1$ ✗; $49$ overshoots by one the same way, since $49\\cdot 48 = 2352 \\ne 2256$ ✗; $34$ rounds $\\sqrt{1128}$, FORGETTING TO DOUBLE before taking the square root ✗.)',
    },
  ],
  // slot 2 — quick powers by splitting the base
  [
    {
      q: 'Using the expansion of $(100+2)^3$, what is $102^3$?',
      choices: ['$1061208$', '$1060608$', '$1030608$', '$1061202$'],
      answer: 0,
      solution:
        'Route one, expand. Row $3$ of Pascal’s triangle is $1, 3, 3, 1$, so $(100+2)^3 = 100^3 + 3\\cdot 100^2\\cdot 2 + 3\\cdot 100\\cdot 2^2 + 2^3 = 1000000 + 60000 + 1200 + 8 = 1061208$ ✓. Route two, multiply directly. $102\\cdot 102 = 10404$, and $10404\\cdot 102 = 1040400 + 20808 = 1061208$ ✓. (The choice $1060608$ uses $3\\cdot 100\\cdot 2 = 600$ for the third term, FORGETTING TO SQUARE THE $2$ ✗; $1030608$ also drops the factor $2$ from the second term, USING THE $2$ TO THE FIRST POWER THROUGHOUT ✗; $1061202$ ends in $2$ instead of $2^3 = 8$, FORGETTING TO CUBE THE LAST TERM ✗.)',
    },
    {
      q: 'Using the expansion of $(100-2)^3$, what is $98^3$?',
      choices: ['$941208$', '$938792$', '$941192$', '$970592$'],
      answer: 2,
      solution:
        'Route one, expand with alternating signs. $(100-2)^3 = 100^3 - 3\\cdot 100^2\\cdot 2 + 3\\cdot 100\\cdot 2^2 - 2^3 = 1000000 - 60000 + 1200 - 8 = 941192$ ✓. Route two, multiply directly. $98\\cdot 98 = 9604$, and $9604\\cdot 98 = 960400 - 19208 = 941192$ ✓. (The choice $941208$ ADDS THE FINAL $2^3$ INSTEAD OF SUBTRACTING it ✗; $938792$ subtracts every term after the first, IGNORING THAT THE SIGNS ALTERNATE ✗; $970592$ uses $3\\cdot 100^2 = 30000$ and $3\\cdot 100\\cdot 2 = 600$ for the middle terms, DROPPING ONE FACTOR OF $2$ FROM EACH MIDDLE TERM ✗.)',
    },
    {
      q: 'Using the expansion of $(100+1)^4$, what is $101^4$?',
      choices: ['$103030001$', '$104060401$', '$104040401$', '$104000401$'],
      answer: 1,
      solution:
        'Route one, expand. Row $4$ of Pascal’s triangle is $1, 4, 6, 4, 1$, so $(100+1)^4 = 100^4 + 4\\cdot 100^3 + 6\\cdot 100^2 + 4\\cdot 100 + 1 = 100000000 + 4000000 + 60000 + 400 + 1 = 104060401$ ✓. The row’s entries appear as the digit pairs $04, 06, 04, 01$ because the base is $100$. Route two, square twice. $101^2 = 10201$, and $101^4 = 10201^2 = (10000 + 201)^2 = 100000000 + 2\\cdot 10000\\cdot 201 + 201^2 = 100000000 + 4020000 + 40401 = 104060401$ ✓. (The choice $103030001$ USES ROW $3$’S ENTRIES $1, 3, 3, 1$ instead of row $4$ ✗; $104040401$ puts a $4$ in the middle, REPLACING THE CENTER ENTRY $6$ WITH $4$ ✗; $104000401$ SKIPS THE MIDDLE TERM $6\\cdot 100^2$ entirely ✗.)',
    },
  ],
  // slot 3 — constant terms and near-constant terms
  [
    {
      q: 'What is the constant term in the expansion of $\\left(x + \\frac{2}{x}\\right)^6$?',
      choices: ['$60$', '$160$', '$240$', '$20$'],
      answer: 1,
      solution:
        'Route one, the general term. It is $\\binom{6}{k}x^{6-k}\\left(\\frac{2}{x}\\right)^k = \\binom{6}{k}2^k x^{6-2k}$, and the exponent is $0$ when $k = 3$, giving $\\binom{6}{3}\\cdot 2^3 = 20\\cdot 8 = 160$ ✓. Route two, square the base first. $\\left(x + \\frac{2}{x}\\right)^6 = \\left(x^2 + 4 + \\frac{4}{x^2}\\right)^3$, and a constant product from three factors takes either three $4$s ($4^3 = 64$) or one of each part ($3! = 6$ orders, each worth $x^2\\cdot 4\\cdot \\frac{4}{x^2} = 16$, so $6\\cdot 16 = 96$). Adding, $64 + 96 = 160$ ✓. (The choice $60$ is the $k = 2$ term $\\binom{6}{2}\\cdot 2^2$, SOLVING THE EXPONENT EQUATION WRONG ✗; $240$ is the $k = 4$ term $\\binom{6}{4}\\cdot 2^4$, which multiplies $x^{-2}$, not a constant ✗; $20$ is $\\binom{6}{3}$ alone, FORGETTING THE $2^3$ ✗.)',
    },
    {
      q: 'What is the constant term in the expansion of $\\left(2x - \\frac{3}{x}\\right)^4$?',
      choices: ['$-216$', '$54$', '$24$', '$216$'],
      answer: 3,
      solution:
        'Route one, the general term. It is $\\binom{4}{k}(2x)^{4-k}\\left(-\\frac{3}{x}\\right)^k = \\binom{4}{k}2^{4-k}(-3)^k x^{4-2k}$, and the exponent is $0$ when $k = 2$: $\\binom{4}{2}\\cdot 2^2\\cdot(-3)^2 = 6\\cdot 4\\cdot 9 = 216$ ✓. Route two, square the base first. $\\left(2x - \\frac{3}{x}\\right)^4 = \\left(4x^2 - 12 + \\frac{9}{x^2}\\right)^2$, whose constant term collects $(-12)^2 = 144$ and the two cross products $4x^2\\cdot\\frac{9}{x^2} = 36$ each, so $144 + 2\\cdot 36 = 216$ ✓. (The choice $-216$ ASSIGNS A NEGATIVE SIGN even though $k = 2$ is even, so $(-3)^2$ is positive ✗; $54$ is $6\\cdot 9$, FORGETTING THE $2^2$ ✗; $24$ is $6\\cdot 4$, FORGETTING THE $(-3)^2$ ✗.)',
    },
    {
      q: 'The expansion of $\\left(x + \\frac{2}{x}\\right)^5$ has no constant term. What is the coefficient of $\\frac{1}{x}$ in that expansion?',
      choices: ['$40$', '$10$', '$80$', '$32$'],
      answer: 2,
      solution:
        'Route one, the general term. It is $\\binom{5}{k}x^{5-k}\\left(\\frac{2}{x}\\right)^k = \\binom{5}{k}2^k x^{5-2k}$, and the exponent is $-1$ when $k = 3$, giving $\\binom{5}{3}\\cdot 2^3 = 10\\cdot 8 = 80$ ✓. Route two, peel off one factor. Write the fifth power as $\\left(x^2 + 4 + \\frac{4}{x^2}\\right)^2\\left(x + \\frac{2}{x}\\right)$. In the squared trinomial the constant term is $2\\cdot 4 + 16 = 24$ and the $x^{-2}$ coefficient is $2\\cdot 4\\cdot 4 = 32$. An $x^{-1}$ overall comes from $\\frac{2}{x}$ times the constant ($2\\cdot 24 = 48$) or $x$ times the $x^{-2}$ part ($32$), and $48 + 32 = 80$ ✓. (The choice $40$ is the $k = 2$ term $\\binom{5}{2}\\cdot 2^2$, which is the coefficient of $x$, READING THE WRONG TERM ✗; $10$ is $\\binom{5}{3}$ alone, FORGETTING THE $2^3$ ✗; $32$ is $2^5$, the coefficient of $x^{-5}$ ✗.)',
    },
  ],
  // slot 4 — exact decimal powers
  [
    {
      q: 'What is the exact value of $1.03^3$?',
      choices: ['$1.09$', '$1.0927$', '$1.090027$', '$1.092727$'],
      answer: 3,
      solution:
        'Route one, expand $(1 + 0.03)^3$ with row $3$ of Pascal’s triangle: $1 + 3(0.03) + 3(0.03)^2 + (0.03)^3 = 1 + 0.09 + 0.0027 + 0.000027 = 1.092727$ ✓. Route two, multiply whole numbers. $103^2 = 10609$, then $103^3 = 10609\\cdot 103 = 1060900 + 31827 = 1092727$, and shifting six decimal places gives $1.092727$ ✓. (The choice $1.09$ STOPS AFTER TWO TERMS of the expansion ✗; $1.0927$ STOPS AFTER THREE TERMS ✗; $1.090027$ SKIPS THE $3(0.03)^2$ TERM ✗.)',
    },
    {
      q: 'What is the exact value of $0.97^3$?',
      choices: ['$0.91$', '$0.912673$', '$0.9127$', '$0.912727$'],
      answer: 1,
      solution:
        'Route one, expand $(1 - 0.03)^3$ with alternating signs: $1 - 3(0.03) + 3(0.03)^2 - (0.03)^3 = 1 - 0.09 + 0.0027 - 0.000027 = 0.912673$ ✓. Route two, multiply whole numbers. $97^2 = 9409$, then $97^3 = 9409\\cdot 97 = 940900 - 28227 = 912673$, and shifting six decimal places gives $0.912673$ ✓. (The choice $0.9127$ STOPS AFTER THREE TERMS ✗; $0.91$ STOPS AFTER TWO TERMS ✗; $0.912727$ ADDS THE FINAL $(0.03)^3$ INSTEAD OF SUBTRACTING it ✗.)',
    },
    {
      q: 'What is the exact value of $2.01^4$, computed from $(2 + 0.01)^4$?',
      choices: ['$16.32240801$', '$16.3224$', '$16.32$', '$16.322408$'],
      answer: 0,
      solution:
        'Route one, expand with row $4$ of Pascal’s triangle: $(2 + 0.01)^4 = 2^4 + 4\\cdot 2^3(0.01) + 6\\cdot 2^2(0.01)^2 + 4\\cdot 2(0.01)^3 + (0.01)^4 = 16 + 0.32 + 0.0024 + 0.000008 + 0.00000001 = 16.32240801$ ✓. Route two, square twice with whole numbers. $201^2 = 40401$, then $201^4 = 40401^2 = (40000 + 401)^2 = 1600000000 + 2\\cdot 40000\\cdot 401 + 401^2 = 1600000000 + 32080000 + 160801 = 1632240801$, and shifting eight decimal places gives $16.32240801$ ✓. (The choice $16.3224$ STOPS AFTER THREE TERMS ✗; $16.32$ STOPS AFTER TWO TERMS ✗; $16.322408$ SKIPS THE FINAL $(0.01)^4$ TERM ✗.)',
    },
  ],
  // slot 5 — one coefficient with a negative part
  [
    {
      q: 'What is the coefficient of $x^4$ in the expansion of $(3-x)^6$?',
      choices: ['$135$', '$-135$', '$1215$', '$15$'],
      answer: 0,
      solution:
        'Route one, the binomial formula with $a = 3$ and $b = -x$. The $x^4$ term is $\\binom{6}{4}\\cdot 3^2\\cdot(-x)^4 = 15\\cdot 9\\cdot x^4$, so the coefficient is $135$ ✓. Route two, flip the base. Because the power is even, $(3-x)^6 = (x-3)^6$, whose general term is $\\binom{6}{k}x^{6-k}(-3)^k$; taking $k = 2$ gives $\\binom{6}{2}(-3)^2 = 15\\cdot 9 = 135$ ✓. (The choice $-135$ ASSIGNS A NEGATIVE SIGN even though $(-x)^4$ is positive ✗; $1215$ uses $3^4$ instead of $3^2$, PUTTING THE WRONG EXPONENT ON THE $3$ ✗; $15$ is $\\binom{6}{4}$ alone, FORGETTING THE $3^2$ ✗.)',
    },
    {
      q: 'What is the coefficient of $x^3$ in the expansion of $(1-2x)^6$?',
      choices: ['$160$', '$-20$', '$-160$', '$240$'],
      answer: 2,
      solution:
        'Route one, the binomial formula with $b = -2x$. The $x^3$ term is $\\binom{6}{3}(-2x)^3 = 20\\cdot(-8)x^3$, so the coefficient is $-160$ ✓. Route two, square the base first. $(1-2x)^6 = (1 - 4x + 4x^2)^3$, and a product equal to $x^3$ takes either three $-4x$’s (one way, worth $(-4)^3 = -64$) or one of each part ($3! = 6$ orders, each worth $1\\cdot(-4x)\\cdot 4x^2 = -16x^3$, so $-96$). Adding, $-64 - 96 = -160$ ✓. (The choice $160$ LOSES THE SIGN of $(-2)^3$ ✗; $-20$ is $\\binom{6}{3}\\cdot(-1)$, FORGETTING THE $2^3$ ✗; $240$ is the coefficient of $x^4$, READING THE WRONG TERM ✗.)',
    },
    {
      q: 'In the expansion of $(2-x)^7$, which power of $x$ has coefficient $672$?',
      choices: ['$x^5$', '$x^2$', '$x^3$', '$x^4$'],
      answer: 1,
      solution:
        'Route one, solve from the general term. The $x^k$ coefficient is $\\binom{7}{k}2^{7-k}(-1)^k$, which is positive only for even $k$. Testing $k = 2$: $\\binom{7}{2}\\cdot 2^5 = 21\\cdot 32 = 672$ ✓. Route two, factor the target. $672 = 21\\cdot 32 = \\binom{7}{2}\\cdot 2^5$, and the exponents fit the pattern only as $k = 2$ with $7 - k = 5$; checking the other even option, $k = 4$ gives $\\binom{7}{4}\\cdot 2^3 = 280 \\ne 672$, so the power is $x^2$ ✓. (The choice $x^5$ has coefficient $\\binom{7}{5}\\cdot 2^2\\cdot(-1)^5 = -84$, and PICKING IT SWAPS THE TWO EXPONENTS besides losing the sign ✗; $x^3$ has coefficient $-560$, negative because $k$ is ODD ✗; $x^4$ has coefficient $280$, which MISREADS $\\binom{7}{4}\\cdot 2^3$ AS $672$ ✗.)',
    },
  ],
  // slot 6 — constant terms with two powers of x in play
  [
    {
      q: 'What is the constant term in the expansion of $\\left(x^2 - \\frac{1}{x}\\right)^9$?',
      choices: ['$0$', '$-84$', '$84$', '$126$'],
      answer: 2,
      solution:
        'Route one, the general term. It is $\\binom{9}{k}(x^2)^{9-k}\\left(-\\frac{1}{x}\\right)^k = \\binom{9}{k}(-1)^k x^{18-3k}$, and the exponent is $0$ when $k = 6$, giving $\\binom{9}{6}(-1)^6 = 84$ ✓. Route two, cube the base first. $\\left(x^2 - \\frac{1}{x}\\right)^9 = \\left(x^6 - 3x^3 + 3 - \\frac{1}{x^3}\\right)^3$, and a constant product from three factors takes three $3$s ($3^3 = 27$), or one each of $-3x^3$, $3$, $-\\frac{1}{x^3}$ ($3! = 6$ orders, each worth $9$, so $54$), or one $x^6$ and two $-\\frac{1}{x^3}$’s ($3$ arrangements, each worth $1$). Adding, $27 + 54 + 3 = 84$ ✓. (The choice $0$ would be right only if $18 - 3k = 0$ had no integer solution, but $k = 6$ works, WRONGLY CONCLUDING NO TERM EXISTS ✗; $-84$ ASSIGNS A NEGATIVE SIGN even though $k = 6$ is even ✗; $126$ is $\\binom{9}{4}$, the $k = 4$ term, which multiplies $x^6$, SOLVING THE EXPONENT EQUATION WRONG ✗.)',
    },
    {
      q: 'What is the constant term in the expansion of $\\left(2x^3 - \\frac{1}{x^3}\\right)^4$?',
      choices: ['$24$', '$-24$', '$96$', '$6$'],
      answer: 0,
      solution:
        'Route one, the general term. It is $\\binom{4}{k}(2x^3)^{4-k}\\left(-\\frac{1}{x^3}\\right)^k = \\binom{4}{k}2^{4-k}(-1)^k x^{12-6k}$, and the exponent is $0$ when $k = 2$: $\\binom{4}{2}\\cdot 2^2\\cdot(-1)^2 = 6\\cdot 4 = 24$ ✓. Route two, substitute and square. With $y = x^3$ the expression is $\\left(2y - \\frac{1}{y}\\right)^4 = \\left(4y^2 - 4 + \\frac{1}{y^2}\\right)^2$, whose constant term collects $(-4)^2 = 16$ and the two cross products $4y^2\\cdot\\frac{1}{y^2} = 4$ each, so $16 + 2\\cdot 4 = 24$ ✓. (The choice $-24$ ASSIGNS A NEGATIVE SIGN even though $k = 2$ is even ✗; $96$ is $6\\cdot 2^4$, PUTTING THE WRONG EXPONENT ON THE $2$ ✗; $6$ is $\\binom{4}{2}$ alone, FORGETTING THE $2^2$ ✗.)',
    },
    {
      q: 'The expansion of $\\left(x^3 - \\frac{1}{x}\\right)^{10}$ has no constant term. What is the coefficient of $x^2$ in that expansion?',
      choices: ['$120$', '$210$', '$45$', '$-120$'],
      answer: 3,
      solution:
        'Route one, the general term. It is $\\binom{10}{k}(x^3)^{10-k}\\left(-\\frac{1}{x}\\right)^k = \\binom{10}{k}(-1)^k x^{30-4k}$, and the exponent is $2$ when $k = 7$, giving $\\binom{10}{7}(-1)^7 = -120$ ✓. (Indeed $30 - 4k = 0$ has no integer solution, which is why there is no constant term.) Route two, factor out the fraction. $\\left(x^3 - \\frac{1}{x}\\right)^{10} = \\frac{(x^4 - 1)^{10}}{x^{10}}$, so the $x^2$ coefficient here is the $x^{12}$ coefficient of $(x^4 - 1)^{10}$: three of the ten factors supply an $x^4$ and seven supply a $-1$, giving $\\binom{10}{3}(-1)^7 = -120$ ✓. (The choice $120$ LOSES THE SIGN of $(-1)^7$ ✗; $210$ is $\\binom{10}{6}$, the coefficient of $x^6$, SOLVING THE EXPONENT EQUATION WRONG ✗; $45$ is $\\binom{10}{8}$, the coefficient of $x^{-2}$, READING THE WRONG TERM ✗.)',
    },
  ],
  // slot 7 — sums and differences of near-round powers
  [
    {
      q: 'Using the expansions of $(20+1)^3$ and $(20-1)^3$, what is $21^3 - 19^3$?',
      choices: ['$2400$', '$1201$', '$16120$', '$2402$'],
      answer: 3,
      solution:
        'Route one, expand both. $(20+1)^3 = 20^3 + 3\\cdot 20^2 + 3\\cdot 20 + 1$ and $(20-1)^3 = 20^3 - 3\\cdot 20^2 + 3\\cdot 20 - 1$. Subtracting, the even-power terms cancel and the odd-power terms double: $2(3\\cdot 400 + 1) = 2\\cdot 1201 = 2402$ ✓. Route two, factor the difference of cubes. $21^3 - 19^3 = (21 - 19)(21^2 + 21\\cdot 19 + 19^2) = 2(441 + 399 + 361) = 2\\cdot 1201 = 2402$ ✓. (The choice $1201$ FORGETS THAT THE SUBTRACTION DOUBLES the surviving terms ✗; $2400$ DROPS THE FINAL $1^3$ TERM ✗; $16120$ keeps the even-power terms instead, WHICH IS $21^3 + 19^3$ ✗.)',
    },
    {
      q: 'Using the expansions of $(10+2)^3$ and $(10-2)^3$, what is $12^3 + 8^3$?',
      choices: ['$2000$', '$2240$', '$1120$', '$1216$'],
      answer: 1,
      solution:
        'Route one, expand both. $(10+2)^3 = 10^3 + 3\\cdot 10^2\\cdot 2 + 3\\cdot 10\\cdot 4 + 8$ and $(10-2)^3 = 10^3 - 3\\cdot 10^2\\cdot 2 + 3\\cdot 10\\cdot 4 - 8$. Adding, the terms with an odd power of $2$ cancel and the others double: $2(1000 + 120) = 2240$ ✓. Route two, factor the sum of cubes. $12^3 + 8^3 = (12 + 8)(12^2 - 12\\cdot 8 + 8^2) = 20(144 - 96 + 64) = 20\\cdot 112 = 2240$ ✓. (The choice $1120$ FORGETS THAT THE ADDITION DOUBLES the surviving terms ✗; $2000$ DROPS THE $3\\cdot 10\\cdot 2^2$ TERM ✗; $1216$ keeps the other terms instead, WHICH IS $12^3 - 8^3$ ✗.)',
    },
    {
      q: 'Using the expansions of $(30+1)^3$ and $(30-1)^3$, what is $31^3 - 29^3$?',
      choices: ['$5402$', '$5400$', '$2701$', '$54180$'],
      answer: 0,
      solution:
        'Route one, expand both. $(30+1)^3 = 30^3 + 3\\cdot 30^2 + 3\\cdot 30 + 1$ and $(30-1)^3 = 30^3 - 3\\cdot 30^2 + 3\\cdot 30 - 1$. Subtracting, the even-power terms cancel and the odd-power terms double: $2(3\\cdot 900 + 1) = 2\\cdot 2701 = 5402$ ✓. Route two, compute the cubes directly. $31^3 = 31\\cdot 961 = 29791$ and $29^3 = 29\\cdot 841 = 24389$, so $31^3 - 29^3 = 29791 - 24389 = 5402$ ✓. (The choice $2701$ FORGETS THAT THE SUBTRACTION DOUBLES the surviving terms ✗; $5400$ DROPS THE FINAL $1^3$ TERM ✗; $54180$ keeps the even-power terms instead, WHICH IS $31^3 + 29^3$ ✗.)',
    },
  ],
  // slot 8 — coefficients in products of expansions
  [
    {
      q: 'What is the coefficient of $x^2$ when $(1+x)^3(1+x)^4$ is expanded?',
      choices: ['$35$', '$15$', '$18$', '$21$'],
      answer: 3,
      solution:
        'Route one, combine the factors. The product is $(1+x)^7$, whose $x^2$ coefficient is $\\binom{7}{2} = 21$ ✓. Route two, multiply term by term. Pick $x^i$ from the first factor and $x^{2-i}$ from the second: $\\binom{3}{0}\\binom{4}{2} + \\binom{3}{1}\\binom{4}{1} + \\binom{3}{2}\\binom{4}{0} = 6 + 12 + 3 = 21$ ✓. (The choice $35$ is $\\binom{7}{3}$, the coefficient of $x^3$, READING THE WRONG TERM ✗; $15$ is $\\binom{6}{2}$, ADDING THE EXPONENTS WRONG to a total power of $6$ ✗; $18$ DROPS THE LAST PRODUCT $\\binom{3}{2}\\binom{4}{0} = 3$ in the sum ✗.)',
    },
    {
      q: 'What is the coefficient of $x^4$ when $(1+x)^6(1+x)^6$ is expanded?',
      choices: ['$792$', '$495$', '$225$', '$480$'],
      answer: 1,
      solution:
        'Route one, combine the factors. The product is $(1+x)^{12}$, whose $x^4$ coefficient is $\\binom{12}{4} = 495$ ✓. Route two, multiply term by term. Pick $x^i$ from one factor and $x^{4-i}$ from the other: $\\binom{6}{0}\\binom{6}{4} + \\binom{6}{1}\\binom{6}{3} + \\binom{6}{2}\\binom{6}{2} + \\binom{6}{3}\\binom{6}{1} + \\binom{6}{4}\\binom{6}{0} = 15 + 120 + 225 + 120 + 15 = 495$ ✓. (The choice $225$ keeps only the middle product $\\binom{6}{2}\\binom{6}{2}$, TAKING $x^2$ FROM EACH FACTOR AS THE ONLY OPTION ✗; $792$ is $\\binom{12}{5}$, the coefficient of $x^5$, READING THE WRONG TERM ✗; $480$ DROPS THE FIRST PRODUCT $\\binom{6}{0}\\binom{6}{4} = 15$ in the sum ✗.)',
    },
    {
      q: 'For a positive integer $n$, the coefficient of $x^2$ when $(1+x)^3(1+x)^n$ is expanded is $190$. What is $n$?',
      choices: ['$17$', '$20$', '$19$', '$22$'],
      answer: 0,
      solution:
        'Route one, combine and factor. The product is $(1+x)^{n+3}$, so $\\binom{n+3}{2} = 190$ and $(n+3)(n+2) = 380 = 20\\cdot 19$. Two consecutive integers with product $380$ are $20$ and $19$, so $n + 3 = 20$ and $n = 17$ ✓. Route two, sum the products and solve the quadratic. The $x^2$ coefficient is $\\binom{3}{2} + \\binom{3}{1}n + \\binom{n}{2} = 3 + 3n + \\frac{n(n-1)}{2} = 190$, so $n^2 + 5n - 374 = 0$ and $n = \\frac{-5 + \\sqrt{25 + 1496}}{2} = \\frac{-5 + 39}{2} = 17$ ✓. (The choice $20$ solves $\\binom{n}{2} = 190$, IGNORING THE $(1+x)^3$ FACTOR ✗; $19$ is the other consecutive factor of $380$, which equals $n + 2$, STOPPING ONE STEP EARLY ✗; $22$ is $\\frac{5 + 39}{2}$, FLIPPING A SIGN in the quadratic formula ✗.)',
    },
  ],
  // slot 9 — products with a sign-alternating factor
  [
    {
      q: 'What is the coefficient of $x^2$ when $(1+x)^2(1-x)^3$ is expanded?',
      choices: ['$2$', '$10$', '$-2$', '$-3$'],
      answer: 2,
      solution:
        'Route one, multiply term by term. Pick $x^i$ from $(1+x)^2$, with coefficients $1, 2, 1$, and $x^{2-i}$ from $(1-x)^3$, with coefficients $1, -3, 3, -1$: the sum is $1\\cdot 3 + 2\\cdot(-3) + 1\\cdot 1 = 3 - 6 + 1 = -2$ ✓. Route two, pair the factors. $(1+x)^2(1-x)^3 = (1-x^2)^2(1-x) = (1 - 2x^2 + x^4)(1-x)$, and the only $x^2$ contribution is $-2x^2\\cdot 1$, so the coefficient is $-2$ ✓. (The choice $2$ LOSES THE SIGN ✗; $10$ is $3 + 6 + 1$, IGNORING THE MINUS SIGNS in the second factor ✗; $-3$ DROPS THE LAST PRODUCT $1\\cdot 1$ in the sum ✗.)',
    },
    {
      q: 'What is the coefficient of $x^2$ when $(1+3x)^2(1-2x)^2$ is expanded?',
      choices: ['$-11$', '$37$', '$11$', '$-20$'],
      answer: 0,
      solution:
        'Route one, multiply term by term. $(1+3x)^2 = 1 + 6x + 9x^2$ and $(1-2x)^2 = 1 - 4x + 4x^2$, so the $x^2$ coefficient of the product is $1\\cdot 4 + 6\\cdot(-4) + 9\\cdot 1 = 4 - 24 + 9 = -11$ ✓. Route two, pair the factors first. $(1+3x)^2(1-2x)^2 = \\left((1+3x)(1-2x)\\right)^2 = (1 + x - 6x^2)^2$, whose $x^2$ term collects $2\\cdot 1\\cdot(-6x^2)$ and $(x)^2$: the coefficient is $-12 + 1 = -11$ ✓. (The choice $11$ LOSES THE SIGN ✗; $37$ is $4 + 24 + 9$, IGNORING THE MINUS SIGNS in the second factor ✗; $-20$ is $4 - 24$, DROPPING THE $9x^2\\cdot 1$ PRODUCT ✗.)',
    },
    {
      q: 'What is the coefficient of $x^6$ when $(1+x)^3(1-x)^4$ is expanded?',
      choices: ['$1$', '$0$', '$7$', '$-1$'],
      answer: 3,
      solution:
        'Route one, pair the factors. $(1+x)^3(1-x)^4 = (1-x^2)^3(1-x) = (1 - 3x^2 + 3x^4 - x^6)(1-x)$, and the only $x^6$ contribution is $-x^6\\cdot 1$, so the coefficient is $-1$ ✓. Route two, multiply term by term. Pick $x^i$ from $(1+x)^3$ and $x^{6-i}$ from $(1-x)^4$, whose coefficients are $1, -4, 6, -4, 1$; only $i = 2$ and $i = 3$ leave an exponent the second factor can supply: $\\binom{3}{2}\\cdot 1 + \\binom{3}{3}\\cdot(-4) = 3 - 4 = -1$ ✓. (The choice $1$ LOSES THE SIGN ✗; $0$ wrongly concludes no $x^6$ term exists BECAUSE NEITHER FACTOR ALONE REACHES DEGREE $6$, though the degree-$7$ product does ✗; $7$ is $\\binom{7}{6}$, IGNORING THE MINUS SIGNS as if the product were $(1+x)^7$ ✗.)',
    },
  ],
  // slot 10 — constant terms and coefficients with larger leading numbers
  [
    {
      q: 'What is the constant term in the expansion of $\\left(3x - \\frac{1}{x^2}\\right)^6$?',
      choices: ['$1215$', '$-1215$', '$135$', '$15$'],
      answer: 0,
      solution:
        'Route one, the general term. It is $\\binom{6}{k}(3x)^{6-k}\\left(-\\frac{1}{x^2}\\right)^k = \\binom{6}{k}3^{6-k}(-1)^k x^{6-3k}$, and the exponent is $0$ when $k = 2$: $\\binom{6}{2}\\cdot 3^4\\cdot(-1)^2 = 15\\cdot 81 = 1215$ ✓. Route two, factor out the fraction. $\\left(3x - \\frac{1}{x^2}\\right)^6 = \\frac{(3x^3 - 1)^6}{x^{12}}$, so the constant term here is the $x^{12}$ coefficient of $(3x^3 - 1)^6$: four of the six factors supply a $3x^3$ and two supply a $-1$, giving $\\binom{6}{4}\\cdot 3^4\\cdot(-1)^2 = 15\\cdot 81 = 1215$ ✓. (The choice $-1215$ ASSIGNS A NEGATIVE SIGN even though $k = 2$ is even ✗; $135$ is $15\\cdot 3^2$, PUTTING THE WRONG EXPONENT ON THE $3$ ✗; $15$ is $\\binom{6}{2}$ alone, FORGETTING THE $3^4$ ✗.)',
    },
    {
      q: 'What is the constant term in the expansion of $\\left(x^2 + \\frac{2}{x^3}\\right)^5$?',
      choices: ['$10$', '$80$', '$40$', '$20$'],
      answer: 2,
      solution:
        'Route one, the general term. It is $\\binom{5}{k}(x^2)^{5-k}\\left(\\frac{2}{x^3}\\right)^k = \\binom{5}{k}2^k x^{10-5k}$, and the exponent is $0$ when $k = 2$: $\\binom{5}{2}\\cdot 2^2 = 10\\cdot 4 = 40$ ✓. Route two, factor out the fraction. $\\left(x^2 + \\frac{2}{x^3}\\right)^5 = \\frac{(x^5 + 2)^5}{x^{15}}$, so the constant term here is the $x^{15}$ coefficient of $(x^5 + 2)^5$: three of the five factors supply an $x^5$ and two supply a $2$, giving $\\binom{5}{3}\\cdot 2^2 = 10\\cdot 4 = 40$ ✓. (The choice $80$ is the $k = 3$ term $\\binom{5}{3}\\cdot 2^3$, which multiplies $x^{-5}$, READING THE WRONG TERM ✗; $10$ is $\\binom{5}{2}$ alone, FORGETTING THE $2^2$ ✗; $20$ is $\\binom{5}{2}\\cdot 2$, USING THE $2$ ONLY ONCE ✗.)',
    },
    {
      q: 'What is the coefficient of $x^3$ in the expansion of $\\left(2x - \\frac{1}{x^2}\\right)^9$?',
      choices: ['$2304$', '$4608$', '$-4608$', '$36$'],
      answer: 1,
      solution:
        'Route one, the general term. It is $\\binom{9}{k}(2x)^{9-k}\\left(-\\frac{1}{x^2}\\right)^k = \\binom{9}{k}2^{9-k}(-1)^k x^{9-3k}$, and the exponent is $3$ when $k = 2$: $\\binom{9}{2}\\cdot 2^7\\cdot(-1)^2 = 36\\cdot 128 = 4608$ ✓. Route two, factor out the fraction. $\\left(2x - \\frac{1}{x^2}\\right)^9 = \\frac{(2x^3 - 1)^9}{x^{18}}$, so the $x^3$ coefficient here is the $x^{21}$ coefficient of $(2x^3 - 1)^9$: seven of the nine factors supply a $2x^3$ and two supply a $-1$, giving $\\binom{9}{7}\\cdot 2^7\\cdot(-1)^2 = 36\\cdot 128 = 4608$ ✓. (The choice $-4608$ ASSIGNS A NEGATIVE SIGN even though $k = 2$ is even ✗; $2304$ is $36\\cdot 2^6$, PUTTING THE WRONG EXPONENT ON THE $2$ ✗; $36$ is $\\binom{9}{2}$ alone, FORGETTING THE $2^7$ ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 14, sections: { '14.4': s144 } }
