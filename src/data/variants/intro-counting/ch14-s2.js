// Counting & Probability chapter 14 — variations for section 14.3
// (The Theorem). All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions: a coefficient is read after the
//    expression is expanded completely and like terms are combined, and a
//    named unknown ($n$ or $c$) is stated positive whenever the key needs it.
//  - Every keyed answer is reached twice along routes that share no steps:
//    the one-term formula against a factor-choice count, a Pascal recurrence,
//    a full row listing, a stepwise multiplication, or a monotone march.
//  - Each distractor is one named slip — a lost sign, a wrong binomial index,
//    a forgotten numeric power, a misplaced exponent — named in CAPS.

const s143 = [
  // slot 1 — recognizing a genuine term
  [
    {
      q: 'Which of the following is a term in the expansion of $(a+b)^8$?',
      choices: ['$56a^5b^3$', '$70a^5b^3$', '$28a^6b^3$', '$56a^4b^3$'],
      answer: 0,
      solution:
        'Route one, the theorem. Every term of $(a+b)^8$ has the form $\\binom{8}{k}a^{8-k}b^k$: the exponents must add to $8$ and the coefficient must be the matching binomial coefficient. In $56a^5b^3$ the exponents give $5 + 3 = 8$ and $\\binom{8}{3} = 56$, so it is a term ✓. Route two, count the products. Multiplying out the eight factors gives $2^8 = 256$ products, and a product equals $a^5b^3$ once for each way to choose which $3$ of the $8$ factors donate a $b$: $\\frac{8\\cdot 7\\cdot 6}{3\\cdot 2\\cdot 1} = 56$ of them, so combining like terms produces exactly $56a^5b^3$ ✓. (The choice $70a^5b^3$ USES $\\binom{8}{4}$, WHICH BELONGS TO $a^4b^4$ ✗; in $28a^6b^3$ THE EXPONENTS ADD TO $9$, so no such term exists ✗; in $56a^4b^3$ THE EXPONENTS ADD TO $7$, one short of the power ✗.)',
    },
    {
      q: 'Which of the following is a term in the expansion of $(a-b)^7$?',
      choices: ['$35a^4b^3$', '$-21a^4b^3$', '$-35a^4b^3$', '$-35a^3b^3$'],
      answer: 2,
      solution:
        'Route one, the theorem with $-b$. Every term of $(a-b)^7$ is $\\binom{7}{k}a^{7-k}(-b)^k$; for $k = 3$ this is $\\binom{7}{3}a^4(-1)^3b^3 = -35a^4b^3$, so that is a term ✓. Route two, count the products. Choosing which $3$ of the $7$ factors donate $-b$ can be done in $35$ ways, and each such product is $a^4(-b)^3 = -a^4b^3$; the sign is negative because $-b$ is taken an odd number of times, so the combined term is $-35a^4b^3$ ✓. (The choice $35a^4b^3$ DROPS THE SIGN OF $(-b)^3$ ✗; $-21a^4b^3$ USES $\\binom{7}{2}$, which pairs with $b^2$ ✗; in $-35a^3b^3$ THE EXPONENTS ADD TO $6$, not $7$ ✗.)',
    },
    {
      q: 'For a positive integer $n$, one term in the expansion of $(a+b)^n$ is $715a^9b^4$. What is $n$?',
      choices: ['$12$', '$13$', '$14$', '$9$'],
      answer: 1,
      solution:
        'Route one, add the exponents. In every term of $(a+b)^n$ the exponents of $a$ and $b$ add to $n$, so $n = 9 + 4 = 13$; as a check, $\\binom{13}{4} = \\frac{13\\cdot 12\\cdot 11\\cdot 10}{24} = 715$, matching the coefficient ✓. Route two, march the coefficient. The coefficient of the $b^4$ term of $(a+b)^n$ is $\\binom{n}{4}$, and these grow with $n$: $\\binom{11}{4} = 330$, $\\binom{12}{4} = 495$, $\\binom{13}{4} = 715$. Only $n = 13$ gives $715$, and then $a$ carries $13 - 4 = 9$, matching $a^9$ ✓. (The choice $12$ ASSUMES THE EXPONENTS ADD TO $n + 1$ ✗; $14$ ASSUMES THEY ADD TO $n - 1$, confusing $n$ with the count of terms ✗; $9$ READS $n$ OFF THE LARGER EXPONENT ALONE ✗.)',
    },
  ],
  // slot 2 — locating a coefficient inside one expansion
  [
    {
      q: 'In the expansion of $(x+3)^4$, which power of $x$ has coefficient $54$?',
      choices: ['$x$', '$x^3$', '$x^2$', '$x^0$ (the constant term)'], answer: 2,
      solution:
        'Route one, one term. The term with $x^j$ is $\\binom{4}{j}x^j\\cdot 3^{4-j}$, and for $x^2$ this gives $\\binom{4}{2}\\cdot 3^2 = 6\\cdot 9 = 54$ ✓. Route two, the whole row. From $x^4$ down to the constant the coefficients are $1$, $4\\cdot 3 = 12$, $6\\cdot 9 = 54$, $4\\cdot 27 = 108$, $3^4 = 81$; the only $54$ in the list sits on $x^2$ ✓. (CHOOSING $x^3$ GRABS THE ENTRY ONE STEP TOO HIGH — its coefficient is $\\binom{4}{3}\\cdot 3 = 12$ ✗; $x$ CARRIES $108 = 2\\cdot 54$, so picking it MATCHES $54$ AGAINST HALF THE TRUE COEFFICIENT ✗; the constant term is $3^4 = 81$, CHOSEN WHEN THE BIGGEST POWER OF $3$ IS EXPECTED TO MARK THE SPOT ✗.)',
    },
    {
      q: 'In the expansion of $(4x+1)^5$, which power of $x$ has coefficient $640$?',
      choices: ['$x^3$', '$x^4$', '$x^5$', '$x^2$'],
      answer: 0,
      solution:
        'Route one, one term. The term with $x^j$ is $\\binom{5}{j}(4x)^j\\cdot 1^{5-j}$, with coefficient $\\binom{5}{j}4^j$; for $x^3$ this is $10\\cdot 64 = 640$ ✓. Route two, the whole row. From the top: $x^5$ has $4^5 = 1024$, $x^4$ has $5\\cdot 256 = 1280$, $x^3$ has $10\\cdot 64 = 640$, $x^2$ has $10\\cdot 16 = 160$, $x$ has $5\\cdot 4 = 20$, and the constant is $1$. Only $x^3$ carries $640$ ✓. (CHOOSING $x^2$ PUTS THE POWER OF $4$ ON THE WRONG SIDE — with $4^{5-j}$ instead of $4^j$, the $x^2$ entry would read $10\\cdot 4^3 = 640$ ✗; $x^4$ CARRIES $1280$, picked after DROPPING ONE FACTOR OF $2$ ✗; $x^5$ EXPECTS THE TOP POWER TO CARRY THE MATCH, but its coefficient is $1024$ ✗.)',
    },
    {
      q: 'When $(x+3)^4$ is expanded and like terms are combined, what is the largest of its five coefficients?',
      choices: ['$54$', '$81$', '$6$', '$108$'],
      answer: 3,
      solution:
        'Route one, list all five. The coefficient of $x^j$ is $\\binom{4}{j}3^{4-j}$: from $x^4$ down, $1$, $12$, $54$, $108$, $81$. The largest is $108$, on the $x$ term ✓. Route two, ratios. Stepping down from $x^j$ to $x^{j-1}$ multiplies the coefficient by $\\frac{3j}{5-j}$: the factors are $12$, $\\frac{9}{2}$, $2$, $\\frac{3}{4}$. The coefficients climb while the factor exceeds $1$ and fall only on the last step, so the peak is one step before the constant: $\\binom{4}{1}3^3 = 108$ ✓. (The choice $54$ EXPECTS THE MIDDLE TERM TO BE LARGEST, but the $3$’s push the peak toward the constant side ✗; $81 = 3^4$ IS ONLY THE CONSTANT TERM, beaten by $108$ ✗; $6$ IS THE LARGEST BINOMIAL COEFFICIENT ALONE, ignoring the powers of $3$ ✗.)',
    },
  ],
  // slot 3 — a negative one inside the binomial
  [
    {
      q: 'What is the coefficient of $y^7$ in the expansion of $(y-1)^9$?',
      choices: ['$36$', '$-36$', '$84$', '$-84$'],
      answer: 0,
      solution:
        'Route one, the theorem. With $a = y$ and $b = -1$, the $y^7$ term needs $b$ exactly twice: $\\binom{9}{2}y^7(-1)^2 = 36y^7$, so the coefficient is $36$ ✓. Route two, row and signs. Row $9$ of Pascal’s triangle begins $1, 9, 36$, and the signs of $(y-1)^9$ alternate $+, -, +$ starting from $+y^9$; two steps down, $y^7$ takes the third entry with a plus sign: $+36$ ✓. (The choice $-36$ ASSUMES EVERY TERM AFTER THE FIRST IS NEGATIVE, but only the odd powers of $-1$ are ✗; $84$ USES $\\binom{9}{3}$, the $y^6$ entry ✗; $-84$ STACKS BOTH SLIPS ✗.)',
    },
    {
      q: 'What is the coefficient of $t^5$ in the expansion of $(t-2)^7$?',
      choices: ['$-84$', '$140$', '$84$', '$-42$'],
      answer: 2,
      solution:
        'Route one, the theorem. With $a = t$ and $b = -2$, the $t^5$ term needs $b$ twice: $\\binom{7}{2}t^5(-2)^2 = 21\\cdot 4\\, t^5 = 84t^5$ ✓. Route two, count the products. A product equals $t^5$ times numbers exactly when $2$ of the $7$ factors donate their $-2$: there are $21$ such choices, each contributing $(-2)(-2) = 4$, and an even count of minus signs makes every one positive, so the combined coefficient is $21\\cdot 4 = 84$ ✓. (The choice $-84$ PUTS A MINUS ON AN EVEN POWER OF $-2$ ✗; $140$ USES $\\binom{7}{3}$, the binomial coefficient that belongs to $t^4$ ✗; $-42$ TAKES $-2$ ONCE INSTEAD OF SQUARED ✗.)',
    },
    {
      q: 'For a positive integer $n$, the coefficient of $y^{n-2}$ in the expansion of $(y-1)^n$ is $105$. What is $n$?',
      choices: ['$14$', '$15$', '$210$', 'No such $n$ exists'],
      answer: 1,
      solution:
        'Route one, solve the equation. The $y^{n-2}$ term is $\\binom{n}{2}y^{n-2}(-1)^2$, so $\\binom{n}{2} = 105$, giving $n(n-1) = 210 = 15\\cdot 14$ and $n = 15$ ✓. Route two, triangular numbers. $\\binom{n}{2}$ is the sum $1 + 2 + \\cdots + (n-1)$, and $1 + 2 + \\cdots + 14 = \\frac{14\\cdot 15}{2} = 105$, so $n - 1 = 14$ and $n = 15$; the sign is positive since $(-1)^2 = 1$ ✓. (The choice $14$ SOLVES $\\frac{n(n+1)}{2} = 105$, the triangular number one row off ✗; $210$ STOPS AT THE PRODUCT $n(n-1)$ WITHOUT SOLVING ✗; the last choice BELIEVES THE MINUS SIGN MAKES THE COEFFICIENT NEGATIVE, but $-1$ appears an even number of times ✗.)',
    },
  ],
  // slot 4 — a number multiplying the variable
  [
    {
      q: 'What is the coefficient of $x^2$ in the expansion of $(2x+1)^5$?',
      choices: ['$20$', '$10$', '$40$', '$80$'],
      answer: 2,
      solution:
        'Route one, the theorem. With $a = 2x$ and $b = 1$, the $x^2$ term is $\\binom{5}{3}(2x)^2\\cdot 1^3 = 10\\cdot 4x^2 = 40x^2$ ✓. Route two, split the power. $(2x+1)^5 = (2x+1)^2(2x+1)^3 = (4x^2+4x+1)(8x^3+12x^2+6x+1)$; the $x^2$ products are $4x^2\\cdot 1$, $4x\\cdot 6x$, and $1\\cdot 12x^2$, giving $4 + 24 + 12 = 40$ ✓. (The choice $20$ USES $2$ INSTEAD OF $2^2$ ✗; $10$ FORGETS THE $2$ ENTIRELY, keeping only the binomial coefficient ✗; $80$ USES $2^3$, the power that belongs to the $x^3$ term ✗.)',
    },
    {
      q: 'What is the coefficient of $a^2b^3$ in the expansion of $(a+2b)^5$?',
      choices: ['$80$', '$40$', '$10$', '$32$'],
      answer: 0,
      solution:
        'Route one, the theorem. The second thing being raised is $2b$, so the $b^3$ term is $\\binom{5}{3}a^2(2b)^3 = 10\\cdot 8\\, a^2b^3 = 80a^2b^3$ ✓. Route two, count the products. Choosing which $3$ of the $5$ factors donate $2b$ can be done in $10$ ways, and each such product is $a^2\\cdot 2^3\\, b^3 = 8a^2b^3$, so combining gives $10\\cdot 8 = 80$ ✓. (The choice $40$ USES $2^2$ INSTEAD OF $2^3$ ✗; $10$ FORGETS THE $2$, leaving the bare binomial coefficient ✗; $32 = 2^5$ DROPS THE BINOMIAL COEFFICIENT AND RAISES $2$ TO THE FULL FIFTH POWER ✗.)',
    },
    {
      q: 'For a positive number $c$, the coefficient of $x^2$ in the expansion of $(cx+1)^5$ is $90$. What is $c$?',
      choices: ['$9$', '$18$', '$5$', '$3$'],
      answer: 3,
      solution:
        'Route one, solve the equation. The $x^2$ term is $\\binom{5}{3}(cx)^2\\cdot 1^3 = 10c^2x^2$, so $10c^2 = 90$, $c^2 = 9$, and since $c$ is positive, $c = 3$ ✓. Route two, march the values. The coefficient $10c^2$ grows with $c$: $c = 1$ gives $10$, $c = 2$ gives $40$, $c = 3$ gives $90$ — the march lands on $90$ exactly at $c = 3$, and can never return ✓. (The choice $9$ SOLVES $10c = 90$, DROPPING THE SQUARE ON $c$ ✗; $18$ SETS THE COEFFICIENT OF $x$, which is $5c$, EQUAL TO $90$ ✗; $5$ CONFUSES $c$ WITH THE EXPONENT ✗.)',
    },
  ],
  // slot 5 — number and sign together
  [
    {
      q: 'What is the coefficient of $x^3$ in the expansion of $(2x-1)^5$?',
      choices: ['$-80$', '$80$', '$40$', '$20$'],
      answer: 1,
      solution:
        'Route one, the theorem. With $a = 2x$ and $b = -1$, the $x^3$ term is $\\binom{5}{2}(2x)^3(-1)^2 = 10\\cdot 8x^3\\cdot 1 = 80x^3$ ✓. Route two, count the products. A product lands on $x^3$ when $3$ of the $5$ factors donate $2x$ and the other two donate $-1$: there are $10$ such choices, each equal to $8x^3\\cdot(-1)^2 = 8x^3$, and the even count of minus signs keeps everything positive, so the coefficient is $80$ ✓. (The choice $-80$ GIVES THE EVEN POWER OF $-1$ A MINUS SIGN ✗; $40$ USES $2^2$ INSTEAD OF $2^3$ ✗; $20$ TAKES THE $2$ ONLY ONCE ✗.)',
    },
    {
      q: 'What is the coefficient of $x^4$ in the expansion of $(1-3x)^5$?',
      choices: ['$-405$', '$135$', '$15$', '$405$'],
      answer: 3,
      solution:
        'Route one, the theorem. With $a = 1$ and $b = -3x$, the $x^4$ term is $\\binom{5}{4}(-3x)^4 = 5\\cdot 81x^4 = 405x^4$; the power is even, so the sign is positive ✓. Route two, build up stepwise. $(1-3x)^2 = 1 - 6x + 9x^2$, so $(1-3x)^4 = (1-6x+9x^2)^2$ has $x^4$ coefficient $9\\cdot 9 = 81$ and $x^3$ coefficient $2(-6)(9) = -108$. Then $(1-3x)^5 = (1-3x)^4(1-3x)$ gives $x^4$ coefficient $81\\cdot 1 + (-108)(-3) = 81 + 324 = 405$ ✓. (The choice $-405$ EXPECTS A MINUS ON A TERM WITH $(-3)^4$ ✗; $135$ USES $3^3$ INSTEAD OF $3^4$ ✗; $15$ TAKES THE $3$ ONLY ONCE ✗.)',
    },
    {
      q: 'For a positive integer $n$, the coefficient of $x^{n-1}$ in the expansion of $(2x-1)^n$ is $-192$. What is $n$?',
      choices: ['$96$', '$7$', '$6$', '$3$'],
      answer: 2,
      solution:
        'Route one, march the values. The $x^{n-1}$ term is $\\binom{n}{1}(2x)^{n-1}(-1) = -n\\cdot 2^{n-1}x^{n-1}$, so $n\\cdot 2^{n-1} = 192$. Marching: $n = 4$ gives $32$, $n = 5$ gives $80$, $n = 6$ gives $6\\cdot 32 = 192$ ✓, and the values only grow, so $n = 6$ is the only solution ✓. Route two, factor. $192 = 2^6\\cdot 3 = 6\\cdot 2^5$, and the required shape $n\\cdot 2^{n-1}$ demands that the leftover factor after the power of two equal $n$ itself: $n = 6$ pairs with $2^{n-1} = 2^5$ consistently, since $6 - 1 = 5$ ✓. (The choice $96$ SOLVES $2n = 192$, TREATING $2^{n-1}$ AS A SINGLE FACTOR OF $2$ ✗; $7$ READS $n - 1 = 6$ OFF $2^6$ BUT LEAVES THE FACTOR $3$ UNMATCHED ✗; $3$ GRABS THE ODD FACTOR OF $192$, though $3\\cdot 2^2 = 12$ ✗.)',
    },
  ],
  // slot 6 — two-variable coefficients from one binomial coefficient
  [
    {
      q: 'What is the coefficient of $x^4y^8$ in the expansion of $(x+y)^{12}$?',
      choices: ['$792$', '$220$', '$11880$', '$495$'],
      answer: 3,
      solution:
        'Route one, the theorem. The exponents $4 + 8 = 12$ match, so the coefficient is $\\binom{12}{8} = \\binom{12}{4} = \\frac{12\\cdot 11\\cdot 10\\cdot 9}{24} = 495$ ✓. Route two, Pascal’s recurrence. $\\binom{12}{4} = \\binom{11}{3} + \\binom{11}{4} = 165 + 330 = 495$, computing each of the smaller entries from row $11$ ✓. (The choice $792$ USES $\\binom{12}{5}$ ✗; $220$ USES $\\binom{12}{3}$, PAIRING THE WRONG INDEX WITH $y^8$ ✗; $11880 = 12\\cdot 11\\cdot 10\\cdot 9$ FORGETS TO DIVIDE BY $4!$ ✗.)',
    },
    {
      q: 'What is the coefficient of $a^5b^6$ in the expansion of $(a+b)^{11}$?',
      choices: ['$330$', '$462$', '$924$', '$55440$'],
      answer: 1,
      solution:
        'Route one, the theorem. The exponents $5 + 6 = 11$ match, so the coefficient is $\\binom{11}{6} = \\binom{11}{5} = \\frac{11\\cdot 10\\cdot 9\\cdot 8\\cdot 7}{120} = 462$ ✓. Route two, Pascal’s recurrence. $\\binom{11}{6} = \\binom{10}{5} + \\binom{10}{6} = 252 + 210 = 462$, each summand read from row $10$ ✓. (The choice $330$ USES $\\binom{11}{4}$, the wrong entry of the row ✗; $924$ IS $\\binom{12}{6}$, from MISCOUNTING THE POWER AS $12$ ✗; $55440 = 11\\cdot 10\\cdot 9\\cdot 8\\cdot 7$ FORGETS TO DIVIDE BY $5!$ ✗.)',
    },
    {
      q: 'For a positive integer $n$, the coefficient of $x^2y^{n-2}$ in the expansion of $(x+y)^n$ is $325$. What is $n$?',
      choices: ['$26$', '$25$', '$650$', '$13$'],
      answer: 0,
      solution:
        'Route one, solve the equation. The coefficient of $x^2y^{n-2}$ is $\\binom{n}{n-2} = \\binom{n}{2} = \\frac{n(n-1)}{2} = 325$, so $n(n-1) = 650 = 26\\cdot 25$ and $n = 26$ ✓. Route two, triangular numbers. $\\binom{n}{2} = 1 + 2 + \\cdots + (n-1)$, and $1 + 2 + \\cdots + 25 = \\frac{25\\cdot 26}{2} = 325$, so $n - 1 = 25$ and $n = 26$ ✓. (The choice $25$ SOLVES $\\frac{n(n+1)}{2} = 325$, shifting the triangle by one row ✗; $650$ REPORTS THE PRODUCT $n(n-1)$ WITHOUT SOLVING ✗; $13$ GRABS A FACTOR FROM $325 = 13\\cdot 25$ ✗.)',
    },
  ],
  // slot 7 — numbers on both letters
  [
    {
      q: 'What is the coefficient of $a^2b^3$ in the expansion of $(a-3b)^5$?',
      choices: ['$-270$', '$270$', '$-90$', '$-30$'],
      answer: 0,
      solution:
        'Route one, the theorem. The second thing being raised is $-3b$, so the $b^3$ term is $\\binom{5}{3}a^2(-3b)^3 = 10\\cdot(-27)a^2b^3 = -270a^2b^3$ ✓. Route two, count the products. A product equals numbers times $a^2b^3$ exactly when $3$ of the $5$ factors donate $-3b$: there are $10$ such choices, each worth $(-3)^3 = -27$, and the odd count of minus signs makes every one negative, so the coefficient is $10\\cdot(-27) = -270$ ✓. (The choice $270$ DROPS THE SIGN OF $(-3)^3$ ✗; $-90$ KEEPS THE MINUS BUT USES $3^2$ INSTEAD OF $3^3$ ✗; $-30$ TAKES THE $-3$ ONLY ONCE ✗.)',
    },
    {
      q: 'What is the coefficient of $x^3y^2$ in the expansion of $(2x+3y)^5$?',
      choices: ['$1080$', '$360$', '$720$', '$60$'],
      answer: 2,
      solution:
        'Route one, the theorem. The term with $y^2$ is $\\binom{5}{2}(2x)^3(3y)^2 = 10\\cdot 8x^3\\cdot 9y^2 = 720x^3y^2$ ✓. Route two, count the products. Choosing which $2$ of the $5$ factors donate $3y$ can be done in $10$ ways, and each such product is $(2x)^3(3y)^2 = 72\\, x^3y^2$, so combining gives $10\\cdot 72 = 720$ ✓. (The choice $1080$ SWAPS THE POWERS, using $2^2\\cdot 3^3$ ✗; $360$ USES $2^2$ INSTEAD OF $2^3$ ✗; $60$ TAKES EACH NUMBER ONLY ONCE, $10\\cdot 2\\cdot 3$ ✗.)',
    },
    {
      q: 'For a positive number $c$, the coefficient of $a^4b^2$ in the expansion of $(a-cb)^6$ is $60$. What is $c$?',
      choices: ['$4$', '$2$', '$-2$', '$\\sqrt{2}$'],
      answer: 1,
      solution:
        'Route one, solve the equation. The $b^2$ term is $\\binom{6}{2}a^4(-cb)^2 = 15c^2a^4b^2$, so $15c^2 = 60$, $c^2 = 4$, and since $c$ is positive, $c = 2$ ✓. Route two, march the values. The coefficient $15c^2$ grows with $c$: $c = 1$ gives $15$ and $c = 2$ gives $60$ — the march hits $60$ exactly at $c = 2$ and never again ✓. (The choice $4$ SOLVES $15c = 60$, DROPPING THE SQUARE ON $c$ ✗; $-2$ KEEPS THE MINUS FROM $-cb$, but $(-c)^2$ is positive and $c$ is stated positive ✗; $\\sqrt{2}$ RAISES $c$ TO THE FOURTH POWER — the exponent that belongs to $a$ — solving $15c^4 = 60$ ✗.)',
    },
  ],
  // slot 8 — a power of x inside the binomial
  [
    {
      q: 'What is the coefficient of $x^4$ in the expansion of $(x^2+2)^6$?',
      choices: ['$60$', '$30$', '$240$', '$480$'],
      answer: 2,
      solution:
        'Route one, the theorem. Here $a = x^2$, so $x^4 = a^2$ and $b = 2$ appears $6 - 2 = 4$ times: the term is $\\binom{6}{4}(x^2)^2\\cdot 2^4 = 15\\cdot 16\\, x^4 = 240x^4$ ✓. Route two, count the products. Each of the six factors donates either $x^2$ or $2$; a product lands on $x^4$ exactly when $2$ of the $6$ donate $x^2$, which happens in $15$ ways, each worth $2^4 = 16$ from the other four factors, so the coefficient is $15\\cdot 16 = 240$ ✓. (The choice $60$ IGNORES THE SQUARE ON $x$, computing the $x^4$ term of $(x+2)^6$ ✗; $30$ TAKES THE $2$ ONLY ONCE ✗; $480$ USES $2^5$ INSTEAD OF $2^4$ ✗.)',
    },
    {
      q: 'What is the coefficient of $x^9$ in the expansion of $(x^3+2)^4$?',
      choices: ['$8$', '$32$', '$4$', '$2$'],
      answer: 0,
      solution:
        'Route one, the theorem. Here $a = x^3$, so $x^9 = a^3$ and $b = 2$ appears once: the term is $\\binom{4}{1}(x^3)^3\\cdot 2 = 4\\cdot 2\\, x^9 = 8x^9$ ✓. Route two, substitute. With $u = x^3$, $(u+2)^4 = u^4 + 8u^3 + 24u^2 + 32u + 16$, and $x^9 = u^3$, whose coefficient reads directly as $8$ ✓. (The choice $32$ PAIRS $x^9$ WITH $2^3$, the coefficient that belongs to $x^3$ ✗; $4$ FORGETS THE $2$, keeping only the binomial coefficient ✗; $2$ DROPS THE BINOMIAL COEFFICIENT ✗.)',
    },
    {
      q: 'For a positive integer $n$, the coefficient of $x^{2n-2}$ in the expansion of $(x^2+3)^n$ is $54$. What is $n$?',
      choices: ['$6$', '$27$', '$4$', '$18$'],
      answer: 3,
      solution:
        'Route one, solve the equation. Since $x^{2n-2} = (x^2)^{n-1}$, the $3$ appears exactly once: the term is $\\binom{n}{1}(x^2)^{n-1}\\cdot 3 = 3n\\, x^{2n-2}$, so $3n = 54$ and $n = 18$ ✓. Route two, count the products and check. A product lands on $x^{2n-2}$ exactly when a single factor donates its $3$ — one choice per factor, $n$ in all, each worth $3$. At $n = 18$ that is $18\\cdot 3 = 54$ ✓, and the count $3n$ grows with $n$, so no other $n$ works ✓. (The choice $6$ PAIRS $x^{2n-2}$ WITH $3^2$, solving $9n = 54$ ✗; $27$ SOLVES $2n = 54$, reading the coefficient off the exponent ✗; $4$ USES THE $x^{2n-4}$ TERM, solving $\\binom{n}{2}\\cdot 9 = 54$ ✗.)',
    },
  ],
  // slot 9 — a reciprocal inside the binomial
  [
    {
      q: 'What is the coefficient of $x^4$ in the expansion of $\\left(x + \\frac{1}{x}\\right)^8$?',
      choices: ['$70$', '$8$', '$56$', '$28$'],
      answer: 3,
      solution:
        'Route one, the exponent equation. The term with $k$ copies of $\\frac{1}{x}$ is $\\binom{8}{k}x^{8-k}x^{-k} = \\binom{8}{k}x^{8-2k}$; setting $8 - 2k = 4$ gives $k = 2$, so the coefficient is $\\binom{8}{2} = 28$ ✓. Route two, walk the exponents. The exponents fall by $2$ from $8$: the terms carry $x^8, x^6, x^4, \\ldots$ with row-$8$ coefficients $1, 8, 28, 56, 70, \\ldots$, so $x^4$, third on the list, takes $28$ ✓. (The choice $70$ SETS $k = 4$ TO MATCH THE TARGET EXPONENT — that is the constant term ✗; $8$ IS $\\binom{8}{1}$, the coefficient of $x^6$ ✗; $56$ IS $\\binom{8}{3}$, the coefficient of $x^2$ ✗.)',
    },
    {
      q: 'What is the coefficient of $x^3$ in the expansion of $\\left(x + \\frac{2}{x}\\right)^5$?',
      choices: ['$5$', '$10$', '$40$', '$20$'],
      answer: 1,
      solution:
        'Route one, the exponent equation. The term with $k$ copies of $\\frac{2}{x}$ is $\\binom{5}{k}x^{5-k}\\left(\\frac{2}{x}\\right)^k = \\binom{5}{k}2^k x^{5-2k}$; setting $5 - 2k = 3$ gives $k = 1$, so the coefficient is $\\binom{5}{1}\\cdot 2 = 10$ ✓. Route two, list all six terms. They are $x^5$, $5\\cdot 2\\, x^3 = 10x^3$, $10\\cdot 4\\, x = 40x$, $\\frac{80}{x}$, $\\frac{80}{x^3}$, $\\frac{32}{x^5}$ — the $x^3$ coefficient reads $10$ ✓. (The choice $5$ FORGETS THE $2$ ✗; $40$ IS THE COEFFICIENT OF $x$, from $k = 2$ ✗; $20$ USES $2^2$ WITH $\\binom{5}{1}$ ✗.)',
    },
    {
      q: 'For a positive integer $n$, the coefficient of $x^{n-2}$ in the expansion of $\\left(x + \\frac{1}{x}\\right)^n$ is $20$. What is $n$?',
      choices: ['$20$', '$5$', '$22$', '$10$'],
      answer: 0,
      solution:
        'Route one, the exponent equation. The term with $k$ copies of $\\frac{1}{x}$ is $\\binom{n}{k}x^{n-2k}$; setting $n - 2k = n - 2$ gives $k = 1$, so the coefficient is $\\binom{n}{1} = n$, and $n = 20$ ✓. Route two, count the products. A product equals $x^{n-2}$ exactly when one single factor donates its $\\frac{1}{x}$, dropping the exponent from $n$ by $2$; there are $n$ ways to pick that factor, each worth $1$, so the coefficient is $n$. Checking, in $\\left(x + \\frac{1}{x}\\right)^{20}$ the $x^{18}$ term is indeed $20x^{18}$ ✓. (The choice $5$ USES $\\binom{n}{2}$ WITHOUT THE HALVING, solving $n(n-1) = 20$ ✗; $22$ SETS THE EXPONENT $n - 2$ EQUAL TO $20$ instead of the coefficient ✗; $10$ HALVES, AS IF THE SYMMETRIC TERM DOUBLED the coefficient ✗.)',
    },
  ],
  // slot 10 — sums and differences of mirror expansions
  [
    {
      q: 'What is the coefficient of $x^3$ when $(1+3x)^5 - (1-3x)^5$ is expanded and simplified?',
      choices: ['$270$', '$540$', '$0$', '$1080$'],
      answer: 1,
      solution:
        'Route one, expand each side. In $(1+3x)^5$ the $x^3$ term is $\\binom{5}{3}(3x)^3 = 10\\cdot 27x^3 = 270x^3$; in $(1-3x)^5$ it is $\\binom{5}{3}(-3x)^3 = -270x^3$, since the power is odd. Subtracting, $270 - (-270) = 540$ ✓. Route two, parity. Replacing $x$ with $-x$ swaps the two expansions, so the difference flips sign: every even power cancels and every odd power doubles. The $x^3$ coefficient is therefore twice that of $(1+3x)^5$ alone, and counting products — $10$ ways to choose which $3$ factors donate $3x$, each worth $27$ — gives $2\\cdot 270 = 540$ ✓. (The choice $270$ FORGETS THAT THE SUBTRACTION DOUBLES the odd-power terms ✗; $0$ TREATS $x^3$ AS AN EVEN POWER, the ones that cancel ✗; $1080$ DOUBLES TWICE ✗.)',
    },
    {
      q: 'What is the coefficient of $x^4$ when $(1+x)^8 + (1-x)^8$ is expanded and simplified?',
      choices: ['$70$', '$0$', '$280$', '$140$'],
      answer: 3,
      solution:
        'Route one, expand each side. In $(1+x)^8$ the $x^4$ coefficient is $\\binom{8}{4} = 70$, and in $(1-x)^8$ it is $\\binom{8}{4}(-1)^4 = 70$ as well; adding gives $140$ ✓. Route two, parity. Replacing $x$ with $-x$ swaps the two summands, so the sum is unchanged: odd powers cancel and even powers double. The answer is $2\\binom{8}{4}$, and Pascal’s recurrence gives $\\binom{8}{4} = \\binom{7}{3} + \\binom{7}{4} = 35 + 35 = 70$, so the coefficient is $140$ ✓. (The choice $70$ FORGETS THAT THE SUM DOUBLES the even-power terms ✗; $0$ CONFUSES THE EVEN POWERS WITH THE ODD ONES, which are what cancel ✗; $280$ DOUBLES TWICE ✗.)',
    },
    {
      q: 'What is the coefficient of $x^4$ when $(1+2x)^7 - (1-2x)^7$ is expanded and simplified?',
      choices: ['$1120$', '$560$', '$0$', '$70$'],
      answer: 2,
      solution:
        'Route one, expand each side. In $(1+2x)^7$ the $x^4$ term is $\\binom{7}{4}(2x)^4 = 35\\cdot 16x^4 = 560x^4$; in $(1-2x)^7$ it is $\\binom{7}{4}(-2x)^4 = 560x^4$ as well, since the fourth power wipes out the sign. Subtracting, $560 - 560 = 0$ ✓. Route two, parity. Call the difference $g(x)$; replacing $x$ with $-x$ swaps the two expansions, so $g(-x) = -g(x)$. An expression with that symmetry contains only odd powers of $x$, and $x^4$ is even, so its coefficient must be $0$ ✓. (The choice $1120$ TREATS $x^4$ LIKE AN ODD POWER AND DOUBLES $560$ ✗; $560$ IGNORES THE SECOND EXPANSION ENTIRELY ✗; $70$ COMBINES $\\binom{7}{4}$ WITH A SINGLE $2$ and forgets the cancellation ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 14, sections: { '14.3': s143 } }
