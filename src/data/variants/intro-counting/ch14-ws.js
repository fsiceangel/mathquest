// Counting chapter 14 — variations for the printable worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key and no answer
//    index anywhere in this file. Answers copy the base worksheet’s formatting:
//    a bare value such as '$-35$' or an exact fraction such as '$\frac{1}{128}$'.
//  - Every key was computed exactly in node (BigInt binomial coefficients,
//    Laurent expansions for constant terms, integer powers for the numeric
//    slots) before the stem was written, and every key matches its pin.
//    Pin deviations: none.
//  - Every solution runs two genuinely different routes that each end ✓, and
//    route two never re-imports route one’s number: the general-term formula
//    vs. a count of raw products or a full row-of-Pascal expansion (slots 1–2);
//    the binomial expansion vs. repeated squaring (slot 3); solving the
//    exponent equation vs. clearing denominators first (slots 4 and 7); the
//    substitution identity vs. adding the entries directly (slots 5–6 and 10);
//    a coefficient-list convolution vs. regrouping the factors into a
//    different product (slot 8); solving for n vs. rebuilding the row
//    (slot 9). The solution then names the most tempting wrong answer’s trap
//    in CAPS, ending ✗.
//  - Conventions are settled in every stem: "the coefficient of $x^k$" means
//    after full expansion and combining of like terms; "the constant term" is
//    the term with exponent $0$; where a sum stops early the stem says so;
//    unknowns are stated positive; decimal and fraction answers are exact.

const worksheet = [
  // slot 1 — a coefficient in (a - b)^n.
  //          Lanes: a^4b^3 in (a-b)^7 -> -35; a^3b^2 in (a-3b)^5 -> 90;
  //          reversed: coefficient of a^{n-2}b^2 in (a-b)^n is 276 -> n = 24.
  [
    {
      q: 'What is the coefficient of $a^6b^3$ in the expansion of $(a-b)^9$, after all like terms are combined?',
      answer: '$-84$',
      solution:
        'General term. Write $(a-b)^9 = (a+(-b))^9$, so the term with $b^3$ is $\\binom{9}{3}a^6(-b)^3 = 84a^6\\cdot(-b^3) = -84a^6b^3$, and the coefficient is $-84$ ✓. Second route, by counting raw products. Multiplying out the nine factors gives $2^9$ products; the ones matching $a^6b^3$ are those where exactly $3$ of the $9$ factors contribute their $-b$, and there are $\\binom{9}{3} = 84$ such choices. Each such product carries three minus signs, which multiply to one overall minus, so together they give $-84a^6b^3$ ✓. DROPPING THE SIGN and reporting $\\binom{9}{3} = 84$ forgets that $-b$ is raised to an odd power ✗.',
    },
    {
      q: 'What is the coefficient of $a^3b^2$ in the expansion of $(a-3b)^5$, after all like terms are combined?',
      answer: '$90$',
      solution:
        'General term. The term with $b^2$ is $\\binom{5}{2}a^3(-3b)^2 = 10\\cdot 9\\,a^3b^2 = 90a^3b^2$, so the coefficient is $90$ ✓. Second route, by counting raw products. Among the $2^5$ products from the five factors, choose which $2$ factors contribute $-3b$: there are $\\binom{5}{2} = 10$ ways, and each chosen pair multiplies to $(-3b)(-3b) = 9b^2$, the two minus signs cancelling. So the like terms are $10$ copies of $9a^3b^2$, totalling $90a^3b^2$ ✓. TURNING THE ANSWER NEGATIVE BECAUSE OF THE MINUS SIGN forgets that $(-3)^2 = +9$; an even power of a negative is positive, so $-90$ is wrong ✗.',
    },
    {
      q: 'For a positive integer $n$, the coefficient of $a^{n-2}b^2$ in the expansion of $(a-b)^n$ is $276$. What is $n$?',
      answer: '$24$',
      solution:
        'Set up the term. The $b^2$ term of $(a-b)^n$ is $\\binom{n}{2}a^{n-2}(-b)^2 = \\binom{n}{2}a^{n-2}b^2$, positive since the power of $-b$ is even. So $\\binom{n}{2} = 276$, meaning $\\frac{n(n-1)}{2} = 276$ and $n(n-1) = 552$. Two consecutive integers with product $552$ sit near $\\sqrt{552} \\approx 23.5$, and indeed $24 \\cdot 23 = 552$, so $n = 24$ ✓. Second route, by climbing the second column of Pascal’s triangle: $\\binom{22}{2} = 231$, $\\binom{23}{2} = 253$, $\\binom{24}{2} = 276$ — a hit at row $24$, and the column is strictly increasing, so no other row works ✓. SOLVING $\\frac{n(n+1)}{2} = 276$ INSTEAD mixes up $\\binom{n}{2}$ with $\\binom{n+1}{2}$; since $\\frac{23\\cdot 24}{2} = 276$, it gives $23$ ✗.',
    },
  ],

  // slot 2 — a single coefficient of a small binomial power.
  //          Lanes: x^2 in (x-3)^4 -> 54; x^3 in (2x-1)^4 -> -32;
  //          derived: sum of the x^3 and x^2 coefficients of (x-2)^5 -> -40.
  [
    {
      q: 'What is the coefficient of $x^2$ in the expansion of $(x-3)^4$?',
      answer: '$54$',
      solution:
        'General term. The $x^2$ term is $\\binom{4}{2}x^2(-3)^2 = 6\\cdot 9\\,x^2 = 54x^2$, so the coefficient is $54$ ✓. Second route, by expanding the whole thing with row $4$ of Pascal’s triangle, $1, 4, 6, 4, 1$: $(x-3)^4 = x^4 - 4\\cdot 3x^3 + 6\\cdot 9x^2 - 4\\cdot 27x + 81 = x^4 - 12x^3 + 54x^2 - 108x + 81$, and the $x^2$ coefficient reads off as $54$ ✓. MAKING THE ANSWER NEGATIVE BECAUSE OF THE MINUS IN $x-3$ ignores that $(-3)^2 = +9$, giving $-54$ ✗.',
    },
    {
      q: 'What is the coefficient of $x^3$ in the expansion of $(2x-1)^4$?',
      answer: '$-32$',
      solution:
        'General term. The $x^3$ term is $\\binom{4}{1}(2x)^3(-1)^1 = 4\\cdot 8x^3\\cdot(-1) = -32x^3$, so the coefficient is $-32$ ✓. Second route, by full expansion with row $4$: $(2x-1)^4 = (2x)^4 - 4(2x)^3 + 6(2x)^2 - 4(2x) + 1 = 16x^4 - 32x^3 + 24x^2 - 8x + 1$, and the $x^3$ coefficient is $-32$ ✓. FORGETTING TO CUBE THE $2$ inside $(2x)^3$ computes $\\binom{4}{1}\\cdot 2\\cdot(-1) = -8$; the $2$ travels with the $x$ and must be raised to the same power, so $-8$ is wrong ✗.',
    },
    {
      q: 'In the expansion of $(x-2)^5$, what is the sum of the coefficient of $x^3$ and the coefficient of $x^2$?',
      answer: '$-40$',
      solution:
        'Two general terms. The $x^3$ term is $\\binom{5}{2}x^3(-2)^2 = 10\\cdot 4x^3 = 40x^3$ and the $x^2$ term is $\\binom{5}{3}x^2(-2)^3 = 10\\cdot(-8)x^2 = -80x^2$, so the requested sum is $40 + (-80) = -40$ ✓. Second route, by expanding everything with row $5$, coefficients $1, 5, 10, 10, 5, 1$: $(x-2)^5 = x^5 - 10x^4 + 40x^3 - 80x^2 + 80x - 32$. Reading off, the two middle coefficients are $40$ and $-80$, and $40 - 80 = -40$ ✓. ADDING THE SIZES $40 + 80 = 120$ throws away the sign of the $x^2$ coefficient; $(-2)^3$ is negative, so the coefficients partly cancel instead of piling up ✗.',
    },
  ],

  // slot 3 — computing an integer power by expanding a nearby round number.
  //          Lanes: 19^4 = (20-1)^4 -> 130321; 41^3 = (40+1)^3 -> 68921;
  //          derived: 22^4 = (20+2)^4 -> 234256.
  [
    {
      q: 'Compute $19^4$ exactly by expanding $(20-1)^4$.',
      answer: '$130321$',
      solution:
        'Expand with row $4$, coefficients $1, 4, 6, 4, 1$, and alternating signs from the $-1$: $(20-1)^4 = 20^4 - 4\\cdot 20^3 + 6\\cdot 20^2 - 4\\cdot 20 + 1 = 160000 - 32000 + 2400 - 80 + 1 = 130321$ ✓. Second route, by squaring twice: $19^2 = 361$, and $361^2 = (360+1)^2 = 129600 + 720 + 1 = 130321$ ✓. ADDING EVERY TERM WITH A PLUS SIGN, $160000 + 32000 + 2400 + 80 + 1 = 194481$, expands $(20+1)^4$ instead — that is $21^4$, not $19^4$; the powers of $-1$ must alternate the signs ✗.',
    },
    {
      q: 'Compute $41^3$ exactly by expanding $(40+1)^3$.',
      answer: '$68921$',
      solution:
        'Expand with row $3$, coefficients $1, 3, 3, 1$: $(40+1)^3 = 40^3 + 3\\cdot 40^2 + 3\\cdot 40 + 1 = 64000 + 4800 + 120 + 1 = 68921$ ✓. Second route, by ordinary multiplication: $41^2 = 1681$, and $41^3 = 1681\\cdot 41 = 1681\\cdot 40 + 1681 = 67240 + 1681 = 68921$ ✓. DROPPING THE BINOMIAL COEFFICIENTS, as if $(a+b)^3$ were $a^3 + a^2b + ab^2 + b^3$, gives $64000 + 1600 + 40 + 1 = 65641$; the middle terms each appear $3$ times, not once ✗.',
    },
    {
      q: 'Compute $22^4$ exactly by expanding $(20+2)^4$.',
      answer: '$234256$',
      solution:
        'Expand with row $4$: $(20+2)^4 = 20^4 + 4\\cdot 20^3\\cdot 2 + 6\\cdot 20^2\\cdot 2^2 + 4\\cdot 20\\cdot 2^3 + 2^4 = 160000 + 64000 + 9600 + 640 + 16 = 234256$ ✓. Second route, by squaring twice: $22^2 = 484$, and $484^2 = (480+4)^2 = 230400 + 3840 + 16 = 234256$ ✓. LEAVING THE POWERS OFF THE $2$, so every term uses a single factor of $2$ or none, wrecks the tail of the expansion: the $2$ must be squared, cubed, and raised to the fourth right along with the shrinking powers of $20$, and skipping that collapses the last three terms far below their true values ✗.',
    },
  ],

  // slot 4 — constant terms and coefficients of Laurent binomials.
  //          Lanes: constant of (2x^2 - 1/x)^9 -> 672; constant of (x - 3/x^2)^6 -> 135;
  //          derived: coefficient of x^3 in (2x^2 - 1/x)^6 -> -160.
  [
    {
      q: 'What is the constant term in the expansion of $\\left(2x^2 - \\frac{1}{x}\\right)^9$? (The constant term is the term whose power of $x$ is $0$.)',
      answer: '$672$',
      solution:
        'General term. The $k$th term is $\\binom{9}{k}(2x^2)^{9-k}\\left(-\\frac{1}{x}\\right)^k = \\binom{9}{k}2^{9-k}(-1)^k x^{18-3k}$, constant when $18 - 3k = 0$, so $k = 6$: $\\binom{9}{6}\\cdot 2^3\\cdot(-1)^6 = 84\\cdot 8 = 672$ ✓. Second route, by clearing the denominator first: $\\left(2x^2 - \\frac{1}{x}\\right)^9 = \\frac{(2x^3-1)^9}{x^9}$, so the constant term of the original equals the coefficient of $x^9$ in $(2x^3-1)^9$. There the term $\\binom{9}{j}(2x^3)^{9-j}(-1)^j$ carries $x^{27-3j}$, which is $x^9$ at $j = 6$: $\\binom{9}{6}2^3 = 672$ ✓. TURNING THE ANSWER NEGATIVE BECAUSE OF THE SUBTRACTION forgets that $(-1)^6 = +1$: the $\\frac{1}{x}$ factor is used an even number of times, so $-672$ is wrong ✗.',
    },
    {
      q: 'What is the constant term in the expansion of $\\left(x - \\frac{3}{x^2}\\right)^6$? (The constant term is the term whose power of $x$ is $0$.)',
      answer: '$135$',
      solution:
        'General term. The $k$th term is $\\binom{6}{k}x^{6-k}\\left(-\\frac{3}{x^2}\\right)^k = \\binom{6}{k}(-3)^k x^{6-3k}$, constant when $6 - 3k = 0$, so $k = 2$: $\\binom{6}{2}(-3)^2 = 15\\cdot 9 = 135$ ✓. Second route, by clearing the denominator: $\\left(x - \\frac{3}{x^2}\\right)^6 = \\frac{(x^3-3)^6}{x^{12}}$, so the constant term of the original is the coefficient of $x^{12}$ in $(x^3-3)^6$. The term $\\binom{6}{j}(x^3)^{6-j}(-3)^j$ carries $x^{18-3j}$, which is $x^{12}$ at $j = 2$: $\\binom{6}{2}(-3)^2 = 135$ ✓. READING $(-3)^2$ AS $-9$ flips the sign of a squared quantity and gives $-135$; two minus signs multiply to a plus ✗.',
    },
    {
      q: 'What is the coefficient of $x^3$ in the expansion of $\\left(2x^2 - \\frac{1}{x}\\right)^6$?',
      answer: '$-160$',
      solution:
        'General term. The $k$th term is $\\binom{6}{k}(2x^2)^{6-k}\\left(-\\frac{1}{x}\\right)^k = \\binom{6}{k}2^{6-k}(-1)^k x^{12-3k}$, and $12 - 3k = 3$ at $k = 3$: $\\binom{6}{3}\\cdot 2^3\\cdot(-1)^3 = 20\\cdot 8\\cdot(-1) = -160$ ✓. Second route, by clearing the denominator: $\\left(2x^2 - \\frac{1}{x}\\right)^6 = \\frac{(2x^3-1)^6}{x^6}$, so the wanted coefficient is the coefficient of $x^9$ in $(2x^3-1)^6$. The term $\\binom{6}{j}(2x^3)^{6-j}(-1)^j$ carries $x^{18-3j}$, which is $x^9$ at $j = 3$: $\\binom{6}{3}2^3(-1)^3 = -160$ ✓. DROPPING THE SIGN gives $160$; here the $-\\frac{1}{x}$ factor is used three times, an odd number, so the term really is negative ✗.',
    },
  ],

  // slot 5 — alternate entries of a row of Pascal's triangle, with a stated stop.
  //          Lanes: even-index row 11 stopping at C(11,8) -> 1013;
  //          odd-index row 8 (complete) -> 128;
  //          derived: odd-index row 12 stopping at C(12,9) -> 2036.
  [
    {
      q: 'What is $\\binom{11}{0} + \\binom{11}{2} + \\binom{11}{4} + \\binom{11}{6} + \\binom{11}{8}$? Note that the sum stops at $\\binom{11}{8}$ and does not include $\\binom{11}{10}$.',
      answer: '$1013$',
      solution:
        'Use the two substitutions. Setting $a = b = 1$ in $(a+b)^{11}$ gives the full row sum $2^{11} = 2048$; setting $a = 1$, $b = -1$ gives $0$, so the even-index entries and the odd-index entries each total $\\frac{2048}{2} = 1024$. The complete even-index sum is $\\binom{11}{0} + \\binom{11}{2} + \\cdots + \\binom{11}{10} = 1024$, and our sum leaves off $\\binom{11}{10} = \\binom{11}{1} = 11$, so it equals $1024 - 11 = 1013$ ✓. Second route, by adding the entries directly: $\\binom{11}{0} = 1$, $\\binom{11}{2} = 55$, $\\binom{11}{4} = 330$, $\\binom{11}{6} = 462$, $\\binom{11}{8} = 165$, and $1 + 55 + 330 + 462 + 165 = 1013$ ✓. ANSWERING $1024$ ignores the note that the sum stops at $\\binom{11}{8}$: the missing final entry $\\binom{11}{10} = 11$ must be subtracted from the half-row total ✗.',
    },
    {
      q: 'What is $\\binom{8}{1} + \\binom{8}{3} + \\binom{8}{5} + \\binom{8}{7}$, the sum of every odd-index entry of row $8$ of Pascal’s triangle?',
      answer: '$128$',
      solution:
        'Use the two substitutions. Setting $a = b = 1$ in $(a+b)^8$ gives the full row sum $2^8 = 256$; setting $a = 1$, $b = -1$ gives $0$, so the even-index entries exactly balance the odd-index entries. Each half is $\\frac{256}{2} = 2^7 = 128$, and the odd-index entries listed here are the complete odd half, so the sum is $128$ ✓. Second route, by adding directly: $\\binom{8}{1} = 8$, $\\binom{8}{3} = 56$, $\\binom{8}{5} = 56$, $\\binom{8}{7} = 8$, and $8 + 56 + 56 + 8 = 128$ ✓. ANSWERING $256$ hands over the whole row instead of half of it: the even-index entries $\\binom{8}{0}, \\binom{8}{2}, \\ldots$ are not in this sum ✗.',
    },
    {
      q: 'What is $\\binom{12}{1} + \\binom{12}{3} + \\binom{12}{5} + \\binom{12}{7} + \\binom{12}{9}$? Note that the sum stops at $\\binom{12}{9}$ and does not include $\\binom{12}{11}$.',
      answer: '$2036$',
      solution:
        'Use the two substitutions. The full row sum of row $12$ is $2^{12} = 4096$, and the alternating sum is $0$, so the odd-index entries total $\\frac{4096}{2} = 2048$. The complete odd-index sum runs through $\\binom{12}{11}$, and our sum leaves that entry off; since $\\binom{12}{11} = \\binom{12}{1} = 12$, the answer is $2048 - 12 = 2036$ ✓. Second route, by adding the entries directly: $\\binom{12}{1} = 12$, $\\binom{12}{3} = 220$, $\\binom{12}{5} = 792$, $\\binom{12}{7} = 792$, $\\binom{12}{9} = 220$, and $12 + 220 + 792 + 792 + 220 = 2036$ ✓. ANSWERING $2048$ overlooks the stated stop: $\\binom{12}{11} = 12$ is part of the odd half-row but not part of this sum, so it must come off ✗.',
    },
  ],

  // slot 6 — recognizing a written-out expansion as (a+b)^n.
  //          Lanes: (5-1)^4 -> 256; (2+5)^4 -> 2401;
  //          reversed: (c-1)^5 = 1024 -> c = 5.
  [
    {
      q: 'What is $\\binom{4}{0}5^4 - \\binom{4}{1}5^3 + \\binom{4}{2}5^2 - \\binom{4}{3}5 + \\binom{4}{4}$?',
      answer: '$256$',
      solution:
        'Recognize the expansion. Each term is $\\binom{4}{k}5^{4-k}(-1)^k$, which is exactly the binomial expansion of $(5 + (-1))^4 = 4^4 = 256$ ✓. Second route, by computing every term: $625 - 4\\cdot 125 + 6\\cdot 25 - 4\\cdot 5 + 1 = 625 - 500 + 150 - 20 + 1 = 256$ ✓. IGNORING THE ALTERNATING SIGNS and summing $\\binom{4}{k}5^{4-k}$ evaluates $(5+1)^4 = 1296$ instead; the minus signs mark $b = -1$, not $b = 1$ ✗.',
    },
    {
      q: 'What is $\\binom{4}{0}2^4 + \\binom{4}{1}2^3\\cdot 5 + \\binom{4}{2}2^2\\cdot 5^2 + \\binom{4}{3}2\\cdot 5^3 + \\binom{4}{4}5^4$?',
      answer: '$2401$',
      solution:
        'Recognize the expansion. Each term is $\\binom{4}{k}2^{4-k}5^k$, exactly the binomial expansion of $(2+5)^4 = 7^4 = 2401$ ✓. Second route, by computing every term: $16 + 4\\cdot 8\\cdot 5 + 6\\cdot 4\\cdot 25 + 4\\cdot 2\\cdot 125 + 625 = 16 + 160 + 600 + 1000 + 625 = 2401$ ✓. COLLAPSING THE SUM TO ITS TWO END TERMS, $2^4 + 5^4 = 641$, throws away the three middle terms; the binomial theorem says $(2+5)^4$ is the whole five-term sum, not just the pure powers ✗.',
    },
    {
      q: 'For a positive integer $c$, $\\sum_{k=0}^{5}\\binom{5}{k}c^{5-k}(-1)^k = 1024$. What is $c$?',
      answer: '$5$',
      solution:
        'Recognize the expansion. The sum is the binomial expansion of $(c + (-1))^5 = (c-1)^5$, so $(c-1)^5 = 1024$. Since $4^5 = 1024$, we get $c - 1 = 4$ and $c = 5$ ✓. Second route, by prime factoring: $1024 = 2^{10} = \\left(2^2\\right)^5 = 4^5$, so the fifth root of $1024$ is $4$; the equation $(c-1)^5 = 4^5$ forces $c - 1 = 4$ because fifth powers of positive integers are strictly increasing, and again $c = 5$ ✓. MATCHING $1024 = 2^{10}$ TO THE WRONG EXPONENT and setting $c - 1 = 2$ gives $c = 3$; but $(3-1)^5 = 2^5 = 32$, far from $1024$ — the base must be the fifth root, not the smallest prime ✗.',
    },
  ],

  // slot 7 — one coefficient of (x^2 + 1/x)^n.
  //          Lanes: x in (x^2+1/x)^11 -> 330; 1/x^3 in (x^2+1/x)^9 -> 36;
  //          derived: x^12 in (x^2+1/x)^12 -> 495.
  [
    {
      q: 'What is the coefficient of $x$ in the expansion of $\\left(x^2 + \\frac{1}{x}\\right)^{11}$?',
      answer: '$330$',
      solution:
        'General term. The $k$th term is $\\binom{11}{k}(x^2)^{11-k}x^{-k} = \\binom{11}{k}x^{22-3k}$, and $22 - 3k = 1$ at $k = 7$, so the coefficient is $\\binom{11}{7} = \\binom{11}{4} = 330$ ✓. Second route, by clearing the denominator: $\\left(x^2 + \\frac{1}{x}\\right)^{11} = \\frac{(x^3+1)^{11}}{x^{11}}$, so the coefficient of $x$ in the original is the coefficient of $x^{12}$ in $(x^3+1)^{11}$. That expansion is $\\sum_j\\binom{11}{j}x^{3j}$, and $3j = 12$ at $j = 4$: $\\binom{11}{4} = 330$ ✓. GRABBING $k = 1$ BECAUSE THE TARGET IS $x^1$ gives $\\binom{11}{1} = 11$; the index $k$ counts how many $\\frac{1}{x}$ factors are chosen, not the exponent of the answer, and must come from solving $22 - 3k = 1$ ✗.',
    },
    {
      q: 'What is the coefficient of $\\frac{1}{x^3}$ in the expansion of $\\left(x^2 + \\frac{1}{x}\\right)^9$?',
      answer: '$36$',
      solution:
        'General term. The $k$th term is $\\binom{9}{k}(x^2)^{9-k}x^{-k} = \\binom{9}{k}x^{18-3k}$, and $18 - 3k = -3$ at $k = 7$, so the coefficient is $\\binom{9}{7} = \\binom{9}{2} = 36$ ✓. Second route, by clearing the denominator: $\\left(x^2 + \\frac{1}{x}\\right)^9 = \\frac{(x^3+1)^9}{x^9}$, so the coefficient of $x^{-3}$ in the original is the coefficient of $x^6$ in $(x^3+1)^9$. That expansion is $\\sum_j\\binom{9}{j}x^{3j}$, and $3j = 6$ at $j = 2$: $\\binom{9}{2} = 36$ ✓. GRABBING $k = 3$ BECAUSE OF THE $3$ IN $\\frac{1}{x^3}$ gives $\\binom{9}{3} = 84$; the exponent equation $18 - 3k = -3$ is what fixes $k$, and it says $k = 7$, not $3$ ✗.',
    },
    {
      q: 'What is the coefficient of $x^{12}$ in the expansion of $\\left(x^2 + \\frac{1}{x}\\right)^{12}$?',
      answer: '$495$',
      solution:
        'General term. The $k$th term is $\\binom{12}{k}(x^2)^{12-k}x^{-k} = \\binom{12}{k}x^{24-3k}$, and $24 - 3k = 12$ at $k = 4$, so the coefficient is $\\binom{12}{4} = 495$ ✓. Second route, by clearing the denominator: $\\left(x^2 + \\frac{1}{x}\\right)^{12} = \\frac{(x^3+1)^{12}}{x^{12}}$, so the coefficient of $x^{12}$ in the original is the coefficient of $x^{24}$ in $(x^3+1)^{12}$. That expansion is $\\sum_j\\binom{12}{j}x^{3j}$, and $3j = 24$ at $j = 8$: $\\binom{12}{8} = \\binom{12}{4} = 495$ ✓. GRABBING $k = 6$ BECAUSE $x^{12}$ IS HALFWAY TO $x^{24}$ gives $\\binom{12}{6} = 924$; the exponent drops by $3$ per step, not by $2$, so the halfway guess misses the equation $24 - 3k = 12$, whose solution is $k = 4$ ✗.',
    },
  ],

  // slot 8 — the x^2 or x^4 coefficient of a product of two binomial powers.
  //          Lanes: x^2 of (1+3x)^3(1-2x)^2 -> -5; x^2 of (1+2x)^4(1-3x)^2 -> -15;
  //          derived: x^4 of (1+3x)^4(1-x)^2 -> -81.
  [
    {
      q: 'What is the coefficient of $x^2$ when $(1+3x)^3(1-2x)^2$ is expanded and like terms are combined?',
      answer: '$-5$',
      solution:
        'Convolve the coefficient lists. From $(1+3x)^3$ the coefficients of $1, x, x^2$ are $1, 9, 27$; from $(1-2x)^2$ they are $1, -4, 4$. The $x^2$ coefficient of the product pairs the exponents that add to $2$: $27\\cdot 1 + 9\\cdot(-4) + 1\\cdot 4 = 27 - 36 + 4 = -5$ ✓. Second route, by regrouping the factors: $(1+3x)^3(1-2x)^2 = \\big((1+3x)(1-2x)\\big)^2(1+3x) = (1+x-6x^2)^2(1+3x)$. Squaring, the coefficients of $1, x, x^2$ in $(1+x-6x^2)^2$ are $1, 2, 1 - 12 = -11$; multiplying by $(1+3x)$, the $x^2$ coefficient is $-11\\cdot 1 + 2\\cdot 3 = -5$ ✓. FORGETTING THE CROSS TERM $9\\cdot(-4)$ and pairing only the pure $x^2$ pieces with the constants gives $27 + 4 = 31$; an $x$ from each factor also multiplies to $x^2$ and must be included ✗.',
    },
    {
      q: 'What is the coefficient of $x^2$ when $(1+2x)^4(1-3x)^2$ is expanded and like terms are combined?',
      answer: '$-15$',
      solution:
        'Convolve the coefficient lists. From $(1+2x)^4$ the coefficients of $1, x, x^2$ are $1, 8, 24$; from $(1-3x)^2$ they are $1, -6, 9$. The $x^2$ coefficient of the product is $24\\cdot 1 + 8\\cdot(-6) + 1\\cdot 9 = 24 - 48 + 9 = -15$ ✓. Second route, by regrouping: $(1+2x)^4(1-3x)^2 = \\big((1+2x)(1-3x)\\big)^2(1+2x)^2 = (1-x-6x^2)^2(1+4x+4x^2)$. In $(1-x-6x^2)^2$ the coefficients of $1, x, x^2$ are $1, -2, 1 - 12 = -11$; pairing with $1, 4, 4$ gives $-11\\cdot 1 + (-2)\\cdot 4 + 1\\cdot 4 = -15$ ✓. FORGETTING THE CROSS TERM $8\\cdot(-6)$ gives $24 + 9 = 33$; the product of an $x$ term from each factor lands squarely in $x^2$ and here it is large and negative ✗.',
    },
    {
      q: 'What is the coefficient of $x^4$ when $(1+3x)^4(1-x)^2$ is expanded and like terms are combined?',
      answer: '$-81$',
      solution:
        'Convolve the coefficient lists. From $(1+3x)^4$ the coefficients of $1, x, x^2, x^3, x^4$ are $1, 12, 54, 108, 81$; from $(1-x)^2$ they are $1, -2, 1$. The $x^4$ coefficient of the product pairs exponents summing to $4$: $81\\cdot 1 + 108\\cdot(-2) + 54\\cdot 1 = 81 - 216 + 54 = -81$ ✓. Second route, by regrouping: $(1+3x)^4(1-x)^2 = \\big((1+3x)(1-x)\\big)^2(1+3x)^2 = (1+2x-3x^2)^2(1+6x+9x^2)$. Squaring, $(1+2x-3x^2)^2 = 1 + 4x - 2x^2 - 12x^3 + 9x^4$; pairing with $1, 6, 9$ for the $x^4$ coefficient gives $9\\cdot 1 + (-12)\\cdot 6 + (-2)\\cdot 9 = 9 - 72 - 18 = -81$ ✓. SKIPPING THE MIDDLE PAIRING $108\\cdot(-2)$ gives $81 + 54 = 135$; the $x^3$ term of the first factor times the $x$ term of the second is the dominant contribution here, and it is negative ✗.',
    },
  ],

  // slot 9 — the coefficient of x^k in (1+cx)^n, solving for n or evaluating.
  //          Lanes: x^2 coeff of (1+3x)^n is 324 -> n = 9;
  //          x^3 coeff of (1+2x)^n is 2912 -> n = 14;
  //          derived: x^3 coeff of (1+2x)^8 -> 448.
  [
    {
      q: 'For a positive integer $n$, the coefficient of $x^2$ in the expansion of $(1+3x)^n$ is $324$. What is $n$?',
      answer: '$9$',
      solution:
        'Set up the term. The $x^2$ term of $(1+3x)^n$ is $\\binom{n}{2}(3x)^2 = 9\\binom{n}{2}x^2$, so $9\\binom{n}{2} = 324$ and $\\binom{n}{2} = 36$. Then $n(n-1) = 72 = 9\\cdot 8$, so $n = 9$ ✓. Second route, by walking the second column of Pascal’s triangle against the factor $9$: row $8$ gives $9\\cdot\\binom{8}{2} = 9\\cdot 28 = 252$, too small; row $9$ gives $9\\cdot\\binom{9}{2} = 9\\cdot 36 = 324$, a hit; and the column only grows from there, so $n = 9$ is the only solution ✓. SOLVING $\\frac{n(n+1)}{2} = 36$ INSTEAD of $\\frac{n(n-1)}{2} = 36$ trades $\\binom{n}{2}$ for $\\binom{n+1}{2}$ and gives $n = 8$; check: the $x^2$ coefficient of $(1+3x)^8$ is $252$, not $324$ ✗.',
    },
    {
      q: 'For a positive integer $n$, the coefficient of $x^3$ in the expansion of $(1+2x)^n$ is $2912$. What is $n$?',
      answer: '$14$',
      solution:
        'Set up the term. The $x^3$ term of $(1+2x)^n$ is $\\binom{n}{3}(2x)^3 = 8\\binom{n}{3}x^3$, so $8\\binom{n}{3} = 2912$ and $\\binom{n}{3} = 364$. Then $n(n-1)(n-2) = 6\\cdot 364 = 2184$, and since $\\sqrt[3]{2184}$ is a little under $13$, try $n = 14$: $14\\cdot 13\\cdot 12 = 2184$, a hit, so $n = 14$ ✓. Second route, by climbing the third column of Pascal’s triangle: $\\binom{12}{3} = 220$, $\\binom{13}{3} = 286$, $\\binom{14}{3} = 364$ — a hit at row $14$, and the column is strictly increasing so no other row gives $364$ ✓. SETTING $n^3 \\approx 2184$ AND ROUNDING gives $n = 13$ (since $13^3 = 2197$); but $13\\cdot 12\\cdot 11 = 1716 \\ne 2184$ — the product $n(n-1)(n-2)$ sits below $n^3$, so the estimate must be tested one row higher ✗.',
    },
    {
      q: 'What is the coefficient of $x^3$ in the expansion of $(1+2x)^8$?',
      answer: '$448$',
      solution:
        'General term. The $x^3$ term is $\\binom{8}{3}(2x)^3 = 56\\cdot 8\\,x^3 = 448x^3$, so the coefficient is $448$ ✓. Second route, by squaring $(1+2x)^4$. First, $(1+2x)^4 = 1 + 8x + 24x^2 + 32x^3 + 16x^4$. Squaring, the $x^3$ coefficient of the product pairs exponents summing to $3$: $2(1\\cdot 32) + 2(8\\cdot 24) = 64 + 384 = 448$ ✓. FORGETTING TO CUBE THE $2$ computes $\\binom{8}{3}\\cdot 2 = 112$; the $2$ rides inside $(2x)^3$ and contributes $2^3 = 8$, not a single factor of $2$ ✗.',
    },
  ],

  // slot 10 — evaluating a binomial sum as an exact fraction.
  //          Lanes: (1+1/3)^6 -> 4096/729; (1-1/2)^7 -> 1/128;
  //          derived: (1+3/2)^5 -> 3125/32.
  [
    {
      q: 'Evaluate $\\sum_{k=0}^{6}\\binom{6}{k}\\left(\\frac{1}{3}\\right)^k$. Give an exact fraction.',
      answer: '$\\frac{4096}{729}$',
      solution:
        'Recognize the theorem with $a = 1$ and $b = \\frac{1}{3}$: the sum is $\\left(1 + \\frac{1}{3}\\right)^6 = \\left(\\frac{4}{3}\\right)^6 = \\frac{4^6}{3^6} = \\frac{4096}{729}$ ✓. Second route, by putting every term over $729 = 3^6$: the numerators are $\\binom{6}{k}3^{6-k}$, namely $729, 6\\cdot 243 = 1458, 15\\cdot 81 = 1215, 20\\cdot 27 = 540, 15\\cdot 9 = 135, 6\\cdot 3 = 18, 1$, and $729 + 1458 + 1215 + 540 + 135 + 18 + 1 = 4096$, so the sum is $\\frac{4096}{729}$ ✓. KEEPING ONLY THE END TERMS, $1 + \\left(\\frac{1}{3}\\right)^6 = \\frac{730}{729}$, throws away the five middle terms of the expansion; a sixth power of a sum is nothing like the sum of the sixth powers ✗.',
    },
    {
      q: 'Evaluate $\\sum_{k=0}^{7}\\binom{7}{k}\\left(-\\frac{1}{2}\\right)^k$. Give an exact fraction.',
      answer: '$\\frac{1}{128}$',
      solution:
        'Recognize the theorem with $a = 1$ and $b = -\\frac{1}{2}$: the sum is $\\left(1 - \\frac{1}{2}\\right)^7 = \\left(\\frac{1}{2}\\right)^7 = \\frac{1}{128}$ ✓. Second route, by putting every term over $128 = 2^7$: the numerators are $\\binom{7}{k}(-1)^k2^{7-k}$, namely $128, -448, 672, -560, 280, -84, 14, -1$, and $128 - 448 + 672 - 560 + 280 - 84 + 14 - 1 = 1$, so the sum is $\\frac{1}{128}$ ✓. DROPPING THE MINUS SIGN evaluates $\\left(1 + \\frac{1}{2}\\right)^7 = \\frac{2187}{128}$; the alternating signs come from $b = -\\frac{1}{2}$ and change the answer completely ✗.',
    },
    {
      q: 'Evaluate $\\sum_{k=0}^{5}\\binom{5}{k}\\left(\\frac{3}{2}\\right)^k$. Give an exact fraction.',
      answer: '$\\frac{3125}{32}$',
      solution:
        'Recognize the theorem with $a = 1$ and $b = \\frac{3}{2}$: the sum is $\\left(1 + \\frac{3}{2}\\right)^5 = \\left(\\frac{5}{2}\\right)^5 = \\frac{5^5}{2^5} = \\frac{3125}{32}$ ✓. Second route, by putting every term over $32 = 2^5$: the numerators are $\\binom{5}{k}3^k2^{5-k}$, namely $32, 5\\cdot 3\\cdot 16 = 240, 10\\cdot 9\\cdot 8 = 720, 10\\cdot 27\\cdot 4 = 1080, 5\\cdot 81\\cdot 2 = 810, 243$, and $32 + 240 + 720 + 1080 + 810 + 243 = 3125$, so the sum is $\\frac{3125}{32}$ ✓. KEEPING ONLY THE END TERMS, $1 + \\left(\\frac{3}{2}\\right)^5 = \\frac{275}{32}$, forgets the four middle terms that the binomial theorem supplies — most of the total lives there ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 14,
  worksheet,
}
