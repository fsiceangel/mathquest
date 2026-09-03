// Counting & Probability chapter 14 — variations for section 14.5
// (Using the Binomial Theorem in Identities). All problems and solutions are
// original MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions: where a sum stops or starts early
//    it says so, "row $n$" means row $n$ of Pascal’s triangle, and unknowns are
//    stated positive when the answer needs it.
//  - Every keyed answer is reached twice along routes that share no steps: a
//    substitution into the Binomial Theorem against a direct evaluation of the
//    terms, a complement count, a bijection, or a product-of-expansions
//    argument. Route two never reuses route one’s number.
//  - Each distractor is one named slip — forgetting a missing term, dropping a
//    sign, skipping the halving step, matching the wrong exponent — and the
//    slip is named in CAPS.

const s145 = [
  // slot 1 — row sums that stop or start early
  [
    {
      q: 'What is $\\binom{9}{0} + \\binom{9}{1} + \\binom{9}{2} + \\cdots + \\binom{9}{8}$? Note that the sum stops at $\\binom{9}{8}$.',
      choices: ['$512$', '$510$', '$511$', '$256$'],
      answer: 2,
      solution:
        'Route one, complete the row. Setting $a = b = 1$ in the Binomial Theorem gives $\\binom{9}{0} + \\cdots + \\binom{9}{9} = 2^9 = 512$. This sum leaves out only the last term $\\binom{9}{9} = 1$, so it equals $512 - 1 = 511$ ✓. Route two, add the nine terms directly. Row $9$ of Pascal’s triangle begins $1, 9, 36, 84, 126, 126, 84, 36, 9$, and $1 + 9 + 36 + 84 + 126 + 126 + 84 + 36 + 9 = 511$ ✓. (The choice $512$ FORGETS THAT $\\binom{9}{9}$ IS MISSING ✗; $510$ REMOVES $\\binom{9}{0}$ AS WELL, though it is part of the sum ✗; $256$ is $2^8$, USING $n = 8$ because the sum has nine terms ✗.)',
    },
    {
      q: 'What is $\\binom{7}{2} + \\binom{7}{3} + \\binom{7}{4} + \\cdots + \\binom{7}{7}$? Note that the sum starts at $\\binom{7}{2}$.',
      choices: ['$120$', '$128$', '$127$', '$121$'],
      answer: 0,
      solution:
        'Route one, complete the row. With $a = b = 1$ the full row sums to $2^7 = 128$. This sum is missing the first two terms $\\binom{7}{0} = 1$ and $\\binom{7}{1} = 7$, so it equals $128 - 1 - 7 = 120$ ✓. Route two, add the six terms directly. They are $21, 35, 35, 21, 7, 1$, and $21 + 35 + 35 + 21 + 7 + 1 = 120$ ✓. (The choice $128$ is the FULL ROW, ignoring that two terms are missing ✗; $127$ REMOVES ONLY $\\binom{7}{0}$ and forgets $\\binom{7}{1}$ ✗; $121$ REMOVES ONLY $\\binom{7}{1}$ and forgets $\\binom{7}{0}$ ✗.)',
    },
    {
      q: 'For a positive integer $n$, $\\binom{n}{0} + \\binom{n}{1} + \\cdots + \\binom{n}{n-1} = 16383$. Note that the sum stops at $\\binom{n}{n-1}$. What is $n$?',
      choices: ['$13$', '$15$', '$7$', '$14$'],
      answer: 3,
      solution:
        'Route one, complete the row. The full row sums to $2^n$, and this sum omits only $\\binom{n}{n} = 1$, so $2^n - 1 = 16383$ and $2^n = 16384 = 2^{14}$, giving $n = 14$ ✓. Route two, count subsets. The sum counts every subset of an $n$-element set except the full set itself, so the set has $16383 + 1 = 16384$ subsets in all. Each element is either in or out of a subset, one factor of $2$ per element, and halving $16384$ repeatedly reaches $1$ after exactly $14$ halvings, so $n = 14$ ✓. (The choice $13$ is OFF BY ONE LOW, checking $2^{13} - 1 = 8191$ ✗; $15$ is OFF BY ONE HIGH ✗; $7$ TREATS THE SUM AS $4^n$, as if each term carried a factor $3^k$, since $4^7 = 16384$ ✗.)',
    },
  ],
  // slot 2 — alternating sums that stop early
  [
    {
      q: 'What is $\\binom{9}{0} - \\binom{9}{1} + \\binom{9}{2} - \\cdots - \\binom{9}{7}$, with signs alternating? Note that the sum stops at $-\\binom{9}{7}$.',
      choices: ['$0$', '$8$', '$-9$', '$-8$'],
      answer: 3,
      solution:
        'Route one, complete the alternating row. With $a = 1$, $b = -1$ the full alternating sum is $(1-1)^9 = 0$. The two missing terms are $+\\binom{9}{8} = 9$ and $-\\binom{9}{9} = -1$, which total $8$, so this sum is $0 - 8 = -8$ ✓. Route two, add the eight terms directly: $1 - 9 + 36 - 84 + 126 - 126 + 84 - 36 = -8$ ✓. (The choice $0$ IGNORES THE MISSING TERMS and reports the full alternating sum ✗; $8$ FLIPS THE SIGN when moving the missing terms across ✗; $-9$ ACCOUNTS ONLY FOR $\\binom{9}{8}$ and forgets $\\binom{9}{9}$ ✗.)',
    },
    {
      q: 'What is $\\binom{12}{0} - \\binom{12}{1} + \\binom{12}{2} - \\cdots + \\binom{12}{10}$, with signs alternating? Note that the sum stops at $+\\binom{12}{10}$.',
      choices: ['$0$', '$11$', '$-11$', '$12$'],
      answer: 1,
      solution:
        'Route one, complete the alternating row. With $a = 1$, $b = -1$ the full alternating sum is $(1-1)^{12} = 0$. The missing terms are $-\\binom{12}{11} = -12$ and $+\\binom{12}{12} = 1$, which total $-11$, so this sum is $0 - (-11) = 11$ ✓. Route two, add the eleven terms directly: $1 - 12 + 66 - 220 + 495 - 792 + 924 - 792 + 495 - 220 + 66 = 11$ ✓. (The choice $0$ IGNORES THE MISSING TERMS ✗; $-11$ FLIPS THE SIGN, reporting the missing terms’ total instead of its negative ✗; $12$ ACCOUNTS ONLY FOR $\\binom{12}{11}$ and forgets $\\binom{12}{12}$ ✗.)',
    },
    {
      q: 'What is $\\binom{11}{0} - \\binom{11}{1} + \\binom{11}{2} - \\binom{11}{3} + \\binom{11}{4} - \\binom{11}{5}$?',
      choices: ['$-252$', '$252$', '$0$', '$-462$'],
      answer: 0,
      solution:
        'Route one, complete the alternating row. With $a = 1$, $b = -1$ the full alternating sum over row $11$ is $(1-1)^{11} = 0$, so this sum is the negative of the remaining terms $k = 6$ through $11$. Those are $+462 - 330 + 165 - 55 + 11 - 1 = 252$, so the stated sum is $-252$ ✓. Route two, add the six terms directly: $1 - 11 + 55 - 165 + 330 - 462 = -252$ ✓. (The choice $252$ FLIPS THE SIGN, reporting the tail instead of the head ✗; $0$ TREATS THE SUM AS THE FULL ROW, though it stops at $k = 5$ ✗; $-462$ is the LAST TERM ALONE ✗.)',
    },
  ],
  // slot 3 — even- and odd-index entries of a row
  [
    {
      q: 'What is $\\binom{12}{2} + \\binom{12}{4} + \\binom{12}{6} + \\binom{12}{8} + \\binom{12}{10}$?',
      choices: ['$2048$', '$2046$', '$2047$', '$4094$'],
      answer: 1,
      solution:
        'Route one, halve the row. Substituting $a = 1$, $b = -1$ shows the even-index entries of row $12$ total the same as the odd-index entries, so the even-index entries total $\\frac{2^{12}}{2} = 2048$. This sum leaves out $\\binom{12}{0}$ and $\\binom{12}{12}$, each equal to $1$, so it is $2048 - 2 = 2046$ ✓. Route two, add the five entries directly: $66 + 495 + 924 + 495 + 66 = 2046$ ✓. (The choice $2048$ FORGETS TO REMOVE THE TWO END ENTRIES ✗; $2047$ REMOVES ONLY ONE of them ✗; $4094$ FORGETS TO HALVE, using $2^{12} - 2$ ✗.)',
    },
    {
      q: 'What is $\\binom{13}{1} + \\binom{13}{3} + \\binom{13}{5} + \\cdots + \\binom{13}{13}$, the sum of every odd-index entry of row $13$ of Pascal’s triangle?',
      choices: ['$8192$', '$4095$', '$2048$', '$4096$'],
      answer: 3,
      solution:
        'Route one, halve the row. Substituting $a = 1$, $b = -1$ gives an alternating sum of $0$, so the odd-index entries of row $13$ total the same as the even-index entries; together they make $2^{13} = 8192$, so the odd-index entries total $\\frac{8192}{2} = 4096$ ✓. Route two, a toggle bijection. The odd-index entries count the odd-size subsets of a $13$-element set. Fix one element and pair each subset with the subset obtained by adding or removing that element: every pair holds one odd-size and one even-size subset, so exactly half of all $2^{13}$ subsets are odd-size, which is $4096$ ✓. (The choice $8192$ is the WHOLE ROW, not just the odd-index entries ✗; $4095$ WRONGLY REMOVES $\\binom{13}{13}$, which is an odd-index entry and belongs ✗; $2048$ HALVES TWICE ✗.)',
    },
    {
      q: 'For a positive integer $n$, the sum $\\binom{n}{0} + \\binom{n}{2} + \\binom{n}{4} + \\cdots$ of every even-index entry of row $n$ of Pascal’s triangle equals $32768$. What is $n$?',
      choices: ['$15$', '$17$', '$16$', '$14$'],
      answer: 2,
      solution:
        'Route one, halve the row. The even-index entries of row $n$ total $\\frac{2^n}{2} = 2^{n-1}$, so $2^{n-1} = 32768 = 2^{15}$ and $n = 16$ ✓. Route two, test $n = 16$ by counting subsets. The even-index entries of row $16$ count the even-size subsets of a $16$-element set; toggling a fixed element pairs the even-size subsets with the odd-size ones, so there are $\\frac{2^{16}}{2} = \\frac{65536}{2} = 32768$ of them, a match, while $n = 15$ gives $16384$ and $n = 17$ gives $65536$ ✓. (The choice $15$ FORGETS TO HALVE, solving $2^n = 32768$ ✗; $17$ HALVES TWICE, solving $2^{n-2} = 32768$ ✗; $14$ DOUBLES WHERE IT SHOULD HALVE, solving $2^{n+1} = 32768$ ✗.)',
    },
  ],
  // slot 4 — sums that are a binomial power in disguise
  [
    {
      q: 'What is $\\binom{5}{0}2^5 + \\binom{5}{1}2^4\\cdot 3 + \\binom{5}{2}2^3\\cdot 3^2 + \\binom{5}{3}2^2\\cdot 3^3 + \\binom{5}{4}2\\cdot 3^4 + \\binom{5}{5}3^5$?',
      choices: ['$7776$', '$275$', '$3125$', '$1$'],
      answer: 2,
      solution:
        'Route one, match the shape. Each term is $\\binom{5}{k}a^{5-k}b^k$ with $a = 2$ and $b = 3$, so the sum is $(2+3)^5 = 5^5 = 3125$ ✓. Route two, add the six terms directly: $32 + 240 + 720 + 1080 + 810 + 243 = 3125$ ✓. (The choice $7776$ is $6^5$, MULTIPLYING $2 \\cdot 3$ instead of adding ✗; $275$ is $2^5 + 3^5$, the TWO END TERMS ALONE ✗; $1$ is $(3-2)^5$, READING A MINUS SIGN that is not there ✗.)',
    },
    {
      q: 'What is $\\binom{4}{0}5^4 - \\binom{4}{1}5^3\\cdot 3 + \\binom{4}{2}5^2\\cdot 3^2 - \\binom{4}{3}5\\cdot 3^3 + \\binom{4}{4}3^4$?',
      choices: ['$16$', '$4096$', '$706$', '$-16$'],
      answer: 0,
      solution:
        'Route one, match the shape. Each term is $\\binom{4}{k}5^{4-k}(-3)^k$, so $a = 5$, $b = -3$ and the sum is $(5-3)^4 = 2^4 = 16$ ✓. Route two, add the five terms directly: $625 - 1500 + 1350 - 540 + 81 = 16$ ✓. (The choice $4096$ is $(5+3)^4$, IGNORING THE ALTERNATING SIGNS ✗; $706$ is $5^4 + 3^4$, the TWO END TERMS ALONE ✗; $-16$ GETS THE SIGN WRONG: a fourth power of $5 - 3$ is positive ✗.)',
    },
    {
      q: 'What is $\\binom{4}{0}3^4 - \\binom{4}{1}3^3\\cdot 2 + \\binom{4}{2}3^2\\cdot 2^2 - \\binom{4}{3}3\\cdot 2^3 + \\binom{4}{4}2^4$?',
      choices: ['$625$', '$-1$', '$97$', '$1$'],
      answer: 3,
      solution:
        'Route one, match the shape. Each term is $\\binom{4}{k}3^{4-k}(-2)^k$, so $a = 3$, $b = -2$ and the sum is $(3-2)^4 = 1^4 = 1$ ✓. Route two, add the five terms directly: $81 - 216 + 216 - 96 + 16 = 1$ ✓. (The choice $625$ is $(3+2)^4$, IGNORING THE ALTERNATING SIGNS ✗; $-1$ APPLIES AN ODD-POWER SIGN to the even power $4$ ✗; $97$ is $3^4 + 2^4$, the TWO END TERMS ALONE ✗.)',
    },
  ],
  // slot 5 — coefficient sums by substituting 1
  [
    {
      q: 'When $(3x - y)^4$ is expanded and like terms are combined, what is the sum of all its coefficients?',
      choices: ['$16$', '$256$', '$81$', '$0$'],
      answer: 0,
      solution:
        'Route one, substitute $1$ for every variable. The sum of a polynomial’s coefficients is its value when every variable is $1$, so the sum is $(3\\cdot 1 - 1)^4 = 2^4 = 16$ ✓. Route two, expand. $(3x - y)^4 = 81x^4 - 108x^3y + 54x^2y^2 - 12xy^3 + y^4$, and $81 - 108 + 54 - 12 + 1 = 16$ ✓. (The choice $256$ is $4^4$, IGNORING THE MINUS SIGN ✗; $81$ is the FIRST COEFFICIENT ALONE ✗; $0$ ASSUMES THE MINUS SIGN CANCELS EVERYTHING, which happens only when the two parts are equal ✗.)',
    },
    {
      q: 'When $(2x^2 - x - 2)^3$ is expanded and like terms are combined, what is the sum of all its coefficients?',
      choices: ['$1$', '$125$', '$-1$', '$8$'],
      answer: 2,
      solution:
        'Route one, substitute $x = 1$. The sum of the coefficients is the value at $x = 1$, which is $(2 - 1 - 2)^3 = (-1)^3 = -1$ ✓. Route two, expand. Multiplying out gives $(2x^2 - x - 2)^3 = 8x^6 - 12x^5 - 18x^4 + 23x^3 + 18x^2 - 12x - 8$, and $8 - 12 - 18 + 23 + 18 - 12 - 8 = -1$ ✓. (The choice $1$ DROPS THE SIGN of the odd power ✗; $125$ is $(2+1+2)^3$, IGNORING BOTH MINUS SIGNS ✗; $8$ is $2^3$, the LEADING COEFFICIENT ALONE ✗.)',
    },
    {
      q: 'When $(3x - y)^6$ is expanded and like terms are combined, what is the sum of the coefficients of the terms with even powers of $y$?',
      choices: ['$4096$', '$2080$', '$2016$', '$64$'],
      answer: 1,
      solution:
        'Route one, average two substitutions. At $x = y = 1$ the polynomial is $(3-1)^6 = 64$; at $x = 1$, $y = -1$ it is $(3+1)^6 = 4096$, where the odd powers of $y$ have flipped sign. Adding cancels the odd-power terms and doubles the even ones, so the even-power total is $\\frac{64 + 4096}{2} = 2080$ ✓. Route two, add the even-power coefficients directly. They are $\\binom{6}{0}3^6 = 729$, $\\binom{6}{2}3^4 = 1215$, $\\binom{6}{4}3^2 = 135$, and $\\binom{6}{6} = 1$, and $729 + 1215 + 135 + 1 = 2080$ ✓. (The choice $4096$ is the value at $y = -1$ alone, the UNSIGNED SUM ✗; $2016$ HALVES THE DIFFERENCE, which is the odd-power total ✗; $64$ is the FULL SIGNED COEFFICIENT SUM, not the even-power part ✗.)',
    },
  ],
  // slot 6 — sums with a signed ratio
  [
    {
      q: 'What is $\\sum_{k=0}^{6}\\binom{6}{k}(-3)^k$?',
      choices: ['$64$', '$4096$', '$-64$', '$729$'],
      answer: 0,
      solution:
        'Route one, match the shape. This is the Binomial Theorem with $a = 1$ and $b = -3$, so the sum is $(1-3)^6 = (-2)^6 = 64$ ✓. Route two, add the seven terms directly: $1 - 18 + 135 - 540 + 1215 - 1458 + 729 = 64$ ✓. (The choice $4096$ is $4^6$, IGNORING THE SIGN of $b$ ✗; $-64$ TREATS THE EVEN POWER AS NEGATIVE ✗; $729$ is $3^6$, the FINAL TERM ALONE ✗.)',
    },
    {
      q: 'What is $\\sum_{k=0}^{4}\\binom{4}{k}(-5)^k$?',
      choices: ['$1296$', '$-256$', '$256$', '$625$'],
      answer: 2,
      solution:
        'Route one, match the shape. This is the Binomial Theorem with $a = 1$ and $b = -5$, so the sum is $(1-5)^4 = (-4)^4 = 256$ ✓. Route two, add the five terms directly: $1 - 20 + 150 - 500 + 625 = 256$ ✓. (The choice $1296$ is $6^4$, IGNORING THE SIGN of $b$ ✗; $-256$ TREATS THE EVEN POWER AS NEGATIVE ✗; $625$ is $5^4$, the FINAL TERM ALONE ✗.)',
    },
    {
      q: 'What is $\\sum_{k=0}^{4}\\binom{4}{k}7^{4-k}(-4)^k$?',
      choices: ['$14641$', '$81$', '$-81$', '$2401$'],
      answer: 1,
      solution:
        'Route one, match the shape. Each term is $\\binom{4}{k}a^{4-k}b^k$ with $a = 7$ and $b = -4$, so the sum is $(7-4)^4 = 3^4 = 81$ ✓. Route two, add the five terms directly: $2401 - 5488 + 4704 - 1792 + 256 = 81$ ✓. (The choice $14641$ is $11^4$, IGNORING THE SIGN of $b$ ✗; $-81$ TREATS THE EVEN POWER AS NEGATIVE ✗; $2401$ is $7^4$, the FIRST TERM ALONE ✗.)',
    },
  ],
  // slot 7 — descending-power sums
  [
    {
      q: 'What is $\\binom{6}{0}5^6 + \\binom{6}{1}5^5 + \\binom{6}{2}5^4 + \\cdots + \\binom{6}{6}$?',
      choices: ['$15625$', '$46656$', '$7776$', '$46655$'],
      answer: 1,
      solution:
        'Route one, match the shape. The power of $5$ is $5^{6-k}$, so $a = 5$ and $b = 1$: the sum is $(5+1)^6 = 6^6 = 46656$ ✓. Route two, add the seven terms directly: $15625 + 18750 + 9375 + 2500 + 375 + 30 + 1 = 46656$ ✓. (The choice $15625$ is $5^6$, the FIRST TERM ALONE ✗; $7776$ is $6^5$, SWAPPING BASE AND EXPONENT roles ✗; $46655$ WRONGLY DROPS the final term $\\binom{6}{6} = 1$, which the sum includes ✗.)',
    },
    {
      q: 'What is $\\binom{9}{0}2^9 + \\binom{9}{1}2^8 + \\binom{9}{2}2^7 + \\cdots + \\binom{9}{9}$?',
      choices: ['$512$', '$6561$', '$19682$', '$19683$'],
      answer: 3,
      solution:
        'Route one, match the shape. The power of $2$ is $2^{9-k}$, so $a = 2$ and $b = 1$: the sum is $(2+1)^9 = 3^9 = 19683$ ✓. Route two, add the ten terms directly: $512 + 2304 + 4608 + 5376 + 4032 + 2016 + 672 + 144 + 18 + 1 = 19683$ ✓. (The choice $512$ is $2^9$, the FIRST TERM ALONE ✗; $6561$ is $3^8$, an OFF-BY-ONE EXPONENT ✗; $19682$ WRONGLY DROPS the final term $\\binom{9}{9} = 1$, which the sum includes ✗.)',
    },
    {
      q: 'What is $\\sum_{k=0}^{7}\\binom{7}{k}3^{7-k}2^k$?',
      choices: ['$2187$', '$279936$', '$78125$', '$128$'],
      answer: 2,
      solution:
        'Route one, match the shape. Each term is $\\binom{7}{k}a^{7-k}b^k$ with $a = 3$ and $b = 2$, so the sum is $(3+2)^7 = 5^7 = 78125$ ✓. Route two, add the eight terms directly: $2187 + 10206 + 20412 + 22680 + 15120 + 6048 + 1344 + 128 = 78125$ ✓. (The choice $2187$ is $3^7$, the FIRST TERM ALONE ✗; $279936$ is $6^7$, MULTIPLYING $3 \\cdot 2$ instead of adding ✗; $128$ is $2^7$, the LAST TERM ALONE ✗.)',
    },
  ],
  // slot 8 — reversed: recover n from the total
  [
    {
      q: 'For a positive integer $n$, $\\sum_{k=0}^{n}\\binom{n}{k}5^k = 1296$. What is $n$?',
      choices: ['$5$', '$3$', '$2$', '$4$'],
      answer: 3,
      solution:
        'Route one, collapse the sum. The sum is $(1+5)^n = 6^n$, so $6^n = 1296 = 6^4$ and $n = 4$ ✓. Route two, test $n = 4$ directly. For $n = 4$ the terms are $1, 20, 150, 500, 625$, which add to $1296$, a match; $n = 3$ gives $6^3 = 216$, too small, and $n = 5$ gives $6^5 = 7776$, too large ✓. (The choice $5$ is OFF BY ONE HIGH, reaching $7776$ ✗; $3$ is OFF BY ONE LOW, reaching $216$ ✗; $2$ USES $36$ AS THE BASE, solving $36^n = 1296$ ✗.)',
    },
    {
      q: 'For a positive integer $n$, the sum of all the coefficients of the expansion of $(x+2)^n$ is $2187$. What is $n$?',
      choices: ['$6$', '$7$', '$8$', '$11$'],
      answer: 1,
      solution:
        'Route one, substitute $x = 1$. The coefficient sum is the value at $x = 1$, which is $(1+2)^n = 3^n$, so $3^n = 2187 = 3^7$ and $n = 7$ ✓. Route two, test $n = 7$ directly. The coefficients of $(x+2)^7$ are $\\binom{7}{k}2^k$: $1, 14, 84, 280, 560, 672, 448, 128$, which add to $2187$, a match, while $n = 6$ gives $729$ and $n = 8$ gives $6561$ ✓. (The choice $6$ is OFF BY ONE LOW ✗; $8$ is OFF BY ONE HIGH ✗; $11$ TREATS THE SUM AS $2^n$, ignoring the $2$ in $x + 2$, since $2^{11} = 2048$ falls nearest ✗.)',
    },
    {
      q: 'For a positive integer $n$, $\\binom{n}{0} + \\binom{n}{1} + \\cdots + \\binom{n}{n} = 524288$. What is $n$?',
      choices: ['$19$', '$18$', '$20$', '$12$'],
      answer: 0,
      solution:
        'Route one, collapse the sum. With $a = b = 1$ the full row sums to $2^n$, so $2^n = 524288$. Since $2^{10} = 1024$ and $512 \\cdot 1024 = 524288$, we get $2^n = 2^9 \\cdot 2^{10} = 2^{19}$ and $n = 19$ ✓. Route two, count subsets. The sum counts all subsets of an $n$-element set, and halving $524288$ repeatedly reaches $1$ after exactly $19$ halvings, so a $19$-element set has $524288$ subsets and $n = 19$ ✓. (The choice $18$ is OFF BY ONE LOW, since $2^{18} = 262144$ ✗; $20$ is OFF BY ONE HIGH, since $2^{20} = 1048576$ ✗; $12$ TREATS THE SUM AS $3^n$, as if each term carried a factor $2^k$, since $3^{12} = 531441$ lands close ✗.)',
    },
  ],
  // slot 9 — even- or odd-k terms of a weighted sum
  [
    {
      q: 'What is $\\binom{5}{0} + \\binom{5}{2}3^2 + \\binom{5}{4}3^4$, the sum of the terms of $\\sum_{k=0}^{5}\\binom{5}{k}3^k$ with even $k$?',
      choices: ['$496$', '$528$', '$512$', '$1024$'],
      answer: 0,
      solution:
        'Route one, average two substitutions. Substituting $b = 3$ gives $(1+3)^5 = 1024$ for the full sum, and substituting $b = -3$ gives $(1-3)^5 = -32$, in which the odd-$k$ terms have flipped sign. Adding cancels the odd terms and doubles the even ones, so the even-$k$ sum is $\\frac{1024 + (-32)}{2} = 496$ ✓. Route two, add the three terms directly: $1 + 10\\cdot 9 + 5\\cdot 81 = 1 + 90 + 405 = 496$ ✓. (The choice $528$ MISHANDLES THE SIGN of $(1-3)^5$, computing $\\frac{1024 + 32}{2}$ ✗; $512$ HALVES $1024$ WITHOUT ADDING the second substitution ✗; $1024$ is the FULL SUM, odd terms included ✗.)',
    },
    {
      q: 'What is $\\binom{6}{1}3 + \\binom{6}{3}3^3 + \\binom{6}{5}3^5$, the sum of the terms of $\\sum_{k=0}^{6}\\binom{6}{k}3^k$ with odd $k$?',
      choices: ['$2080$', '$2048$', '$2016$', '$4096$'],
      answer: 2,
      solution:
        'Route one, subtract two substitutions. Substituting $b = 3$ gives $(1+3)^6 = 4096$, and substituting $b = -3$ gives $(1-3)^6 = 64$, in which the odd-$k$ terms have flipped sign. Subtracting cancels the even terms and doubles the odd ones, so the odd-$k$ sum is $\\frac{4096 - 64}{2} = 2016$ ✓. Route two, add the three terms directly: $6\\cdot 3 + 20\\cdot 27 + 6\\cdot 243 = 18 + 540 + 1458 = 2016$ ✓. (The choice $2080$ ADDS WHERE IT SHOULD SUBTRACT, giving the even-$k$ sum ✗; $2048$ HALVES $4096$ WITHOUT SUBTRACTING the $64$ ✗; $4096$ is the FULL SUM, even terms included ✗.)',
    },
    {
      q: 'What is $\\binom{7}{1}2 + \\binom{7}{3}2^3 + \\binom{7}{5}2^5 + \\binom{7}{7}2^7$, the sum of the terms of $\\sum_{k=0}^{7}\\binom{7}{k}2^k$ with odd $k$?',
      choices: ['$1093$', '$1094$', '$2187$', '$2188$'],
      answer: 1,
      solution:
        'Route one, subtract two substitutions. Substituting $b = 2$ gives $(1+2)^7 = 2187$, and substituting $b = -2$ gives $(1-2)^7 = -1$. Subtracting cancels the even-$k$ terms and doubles the odd ones, so the odd-$k$ sum is $\\frac{2187 - (-1)}{2} = \\frac{2188}{2} = 1094$ ✓. Route two, add the four terms directly: $7\\cdot 2 + 35\\cdot 8 + 21\\cdot 32 + 1\\cdot 128 = 14 + 280 + 672 + 128 = 1094$ ✓. (The choice $1093$ MISHANDLES THE SIGN of $(1-2)^7$, computing $\\frac{2187 - 1}{2}$ ✗; $2187$ is the FULL SUM ✗; $2188$ FORGETS TO HALVE ✗.)',
    },
  ],
  // slot 10 — products of two expansions
  [
    {
      q: 'What is $\\binom{6}{0}\\binom{6}{2} + \\binom{6}{1}\\binom{6}{1} + \\binom{6}{2}\\binom{6}{0}$?',
      choices: ['$924$', '$66$', '$36$', '$51$'],
      answer: 1,
      solution:
        'Route one, a product of expansions. Each product $\\binom{6}{k}\\binom{6}{2-k}$ picks $x^k$ from one copy of $(1+x)^6$ and $x^{2-k}$ from the other, so the sum is the coefficient of $x^2$ in $(1+x)^6(1+x)^6 = (1+x)^{12}$, which is $\\binom{12}{2} = 66$ ✓. Route two, add the three products directly: $1\\cdot 15 + 6\\cdot 6 + 15\\cdot 1 = 15 + 36 + 15 = 66$ ✓. (The choice $924$ is $\\binom{12}{6}$, MATCHING THE WRONG EXPONENT ✗; $36$ is the MIDDLE PRODUCT ALONE ✗; $51$ DROPS ONE END PRODUCT ✗.)',
    },
    {
      q: 'What is $\\binom{5}{0}\\binom{8}{3} + \\binom{5}{1}\\binom{8}{2} + \\binom{5}{2}\\binom{8}{1} + \\binom{5}{3}\\binom{8}{0}$?',
      choices: ['$715$', '$220$', '$196$', '$286$'],
      answer: 3,
      solution:
        'Route one, a product of expansions. Each product $\\binom{5}{k}\\binom{8}{3-k}$ picks $x^k$ from $(1+x)^5$ and $x^{3-k}$ from $(1+x)^8$, so the sum is the coefficient of $x^3$ in $(1+x)^5(1+x)^8 = (1+x)^{13}$, which is $\\binom{13}{3} = 286$ ✓. Route two, add the four products directly: $1\\cdot 56 + 5\\cdot 28 + 10\\cdot 8 + 10\\cdot 1 = 56 + 140 + 80 + 10 = 286$ ✓. (The choice $715$ is $\\binom{13}{4}$, an OFF-BY-ONE EXPONENT ✗; $220$ is $\\binom{12}{3}$, ADDING THE ROW NUMBERS AS $5 + 8 - 1$ ✗; $196$ KEEPS ONLY THE FIRST TWO PRODUCTS ✗.)',
    },
    {
      q: 'What is $\\binom{7}{0}^2 + \\binom{7}{1}^2 + \\binom{7}{2}^2 + \\cdots + \\binom{7}{7}^2$?',
      choices: ['$16384$', '$128$', '$3432$', '$3003$'],
      answer: 2,
      solution:
        'Route one, a product of expansions. Since $\\binom{7}{k} = \\binom{7}{7-k}$, each square is $\\binom{7}{k}\\binom{7}{7-k}$, which picks $x^k$ from one copy of $(1+x)^7$ and $x^{7-k}$ from the other. The sum is therefore the coefficient of $x^7$ in $(1+x)^7(1+x)^7 = (1+x)^{14}$, which is $\\binom{14}{7} = 3432$ ✓. Route two, add the eight squares directly: $1 + 49 + 441 + 1225 + 1225 + 441 + 49 + 1 = 3432$ ✓. (The choice $16384$ is $(2^7)^2$, SQUARING THE ROW SUM instead of summing the squares ✗; $128$ FORGETS TO SQUARE, giving the plain row sum ✗; $3003$ is $\\binom{14}{6}$, MATCHING THE WRONG EXPONENT ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 14, sections: { '14.5': s145 } }
