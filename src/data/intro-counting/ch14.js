// Counting & Probability — Chapter 14: The Binomial Theorem
// All problems, explanations, and examples are original MathQuest content.

const s142 = {
  id: '14.2',
  title: 'A Little Algebra',
  learn: {
    concepts: [
      {
        heading: 'Multiply it all the way out',
        body: 'To expand $(a+b)^2$, write it as $(a+b)(a+b)$ and let every term of the first factor meet every term of the second: $a\\cdot a + a\\cdot b + b\\cdot a + b\\cdot b = a^2 + 2ab + b^2$. One more factor gives $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$. Notice what never happens: $(a+b)^2$ is not $a^2 + b^2$. The cross terms are the whole point.',
      },
      {
        heading: 'Every term is a choice of factors',
        body: 'Look at $(a+b)(a+b)(a+b)$. Each product in the full multiplication takes one letter from each of the three factors. The term $ab^2$ appears once for every way to decide which two of the three factors hand over a $b$ (the other hands over an $a$). That is $\\binom{3}{2} = 3$ ways, so the coefficient of $ab^2$ is $3$. Coefficients are counts of factor-choices.',
      },
      {
        heading: 'The coefficients are a row of Pascal’s triangle',
        body: 'The coefficients of $(a+b)^3$ are $1, 3, 3, 1$, and those of $(a+b)^4$ are $1, 4, 6, 4, 1$ — rows $3$ and $4$ of Pascal’s triangle. This is no coincidence: the coefficient of $a^{n-k}b^k$ is the number of ways to pick which $k$ of the $n$ factors give a $b$, which is $\\binom{n}{k}$, and $\\binom{n}{k}$ is exactly what fills row $n$.',
      },
      {
        heading: 'Substituting is where the slips live',
        body: 'The pattern works for any two things in place of $a$ and $b$. For $(2x-1)^3$ take $a = 2x$ and $b = -1$, then substitute into $a^3 + 3a^2b + 3ab^2 + b^3$. Two things go wrong constantly: $(2x)^2$ is $4x^2$, not $2x^2$ — the $2$ gets squared too — and a negative $b$ makes every term with an odd power of $b$ negative, so the signs alternate.',
      },
    ],
    examples: [
      {
        problem: 'Expand $(x+3)^2$.',
        steps: [
          'Use $(a+b)^2 = a^2 + 2ab + b^2$ with $a = x$ and $b = 3$.',
          'The pieces are $x^2$, then $2\\cdot x\\cdot 3 = 6x$, then $3^2 = 9$.',
          'So $(x+3)^2 = x^2 + 6x + 9$; the middle term $6x$ is the one people drop.',
        ],
        answer: '$x^2 + 6x + 9$',
      },
      {
        problem: 'Expand $(2x-1)^3$.',
        steps: [
          'Take $a = 2x$ and $b = -1$ in $a^3 + 3a^2b + 3ab^2 + b^3$.',
          'Compute each power carefully: $a^3 = 8x^3$, $a^2 = 4x^2$, $b^2 = 1$, $b^3 = -1$.',
          'Assemble: $8x^3 + 3(4x^2)(-1) + 3(2x)(1) + (-1) = 8x^3 - 12x^2 + 6x - 1$.',
          'The signs alternate because $b$ is negative and odd powers of $b$ stay negative.',
        ],
        answer: '$8x^3 - 12x^2 + 6x - 1$',
      },
      {
        problem: 'Without multiplying everything out, find the coefficient of $a^2b^2$ in $(a+b)^4$.',
        steps: [
          'Write $(a+b)^4 = (a+b)(a+b)(a+b)(a+b)$; each product picks one letter from each factor.',
          'A product equals $a^2b^2$ exactly when two of the four factors contribute $b$ and the other two contribute $a$.',
          'Choosing which two factors give the $b$: $\\binom{4}{2} = 6$ ways, so the coefficient is $6$.',
          'Check against Pascal’s triangle: row $4$ is $1, 4, 6, 4, 1$, and $6$ sits in the middle.',
        ],
        answer: 'The coefficient is $6$.',
      },
    ],
  },
  problems: [
    {
      q: 'Which of the following equals $(x+y)^2 - (x-y)^2$?',
      choices: ['$4xy$', '$0$', '$2x^2 + 2y^2$', '$2xy$'],
      answer: 0,
      solution: 'Expand both squares: $(x+y)^2 = x^2 + 2xy + y^2$ and $(x-y)^2 = x^2 - 2xy + y^2$. Subtracting, the $x^2$ and $y^2$ terms cancel and $2xy - (-2xy) = 4xy$. The answer $0$ comes from dropping both cross terms, as if each square were $x^2 + y^2$; $2xy$ forgets the $2$ in $2ab$; and $2x^2 + 2y^2$ is the sum of the two squares, not the difference.',
    },
    {
      q: 'When $(a+b)(a+b)(a+b)$ is multiplied out completely, before any like terms are combined, how many products are there in all?',
      choices: ['$4$', '$6$', '$8$', '$9$'],
      answer: 2,
      solution: 'Each product takes one letter from each of the three factors, and each factor offers $2$ choices, so there are $2\\cdot 2\\cdot 2 = 8$ products. Combining like terms collapses them to the four terms $a^3, a^2b, ab^2, b^3$ with coefficients $1, 3, 3, 1$, which add back up to $8$. The answer $4$ counts the terms after combining; $6$ is $3\\cdot 2$ and $9$ is $3^2$, neither of which is how the choices multiply.',
    },
    {
      q: 'Which of the following equals $(2x+1)^2$?',
      choices: ['$2x^2 + 4x + 1$', '$4x^2 + 4x + 1$', '$4x^2 + 2x + 1$', '$4x^2 + 1$'],
      answer: 1,
      solution: 'With $a = 2x$ and $b = 1$: $a^2 = (2x)^2 = 4x^2$, $2ab = 2(2x)(1) = 4x$, $b^2 = 1$. So $(2x+1)^2 = 4x^2 + 4x + 1$. The choice $2x^2$ forgets to square the $2$; $2x$ as the middle term forgets to double; $4x^2 + 1$ drops the cross term entirely.',
    },
    {
      q: 'Which of the following equals $(x-2)^3$?',
      choices: ['$x^3 - 8$', '$x^3 + 6x^2 + 12x + 8$', '$x^3 - 6x^2 - 12x - 8$', '$x^3 - 6x^2 + 12x - 8$'],
      answer: 3,
      solution: 'Take $a = x$ and $b = -2$ in $a^3 + 3a^2b + 3ab^2 + b^3$: $x^3 + 3x^2(-2) + 3x(4) + (-8) = x^3 - 6x^2 + 12x - 8$. The signs alternate because only odd powers of $-2$ are negative; making every sign negative, or every sign positive, are the two common mistakes, and $x^3 - 8$ ignores the middle terms altogether.',
    },
    {
      q: 'Imagine multiplying out $(a+b)^5 = (a+b)(a+b)(a+b)(a+b)(a+b)$ completely, before combining like terms, so that there are $32$ products in all. How many of those $32$ products equal $a^2b^3$?',
      choices: ['$5$', '$10$', '$20$', '$6$'],
      answer: 1,
      solution: 'A product equals $a^2b^3$ exactly when three of the five factors supply a $b$ and the other two supply an $a$. Choosing which three factors supply the $b$ can be done in $\\binom{5}{3} = 10$ ways, so $10$ of the $32$ products are $a^2b^3$. That is also why the coefficient of $a^2b^3$ in the expansion is $10$. The answer $20$ treats the three chosen factors as ordered when they are not.',
    },
    {
      q: 'What is the coefficient of $x^2$ when $(x+3)^3$ is expanded?',
      choices: ['$9$', '$3$', '$27$', '$6$'],
      answer: 0,
      solution: 'The $x^2$ term of $a^3 + 3a^2b + 3ab^2 + b^3$ with $a = x$, $b = 3$ is $3a^2b = 3\\cdot x^2\\cdot 3 = 9x^2$. So the coefficient is $9$. Forgetting to multiply by $b$ leaves $3$; $27$ is the constant term $3^3$, and $6$ comes from adding $3 + 3$ instead of multiplying.',
    },
    {
      q: 'Which of the following equals $(3x-2y)^2$?',
      choices: ['$9x^2 - 6xy + 4y^2$', '$9x^2 + 12xy + 4y^2$', '$9x^2 - 12xy + 4y^2$', '$3x^2 - 12xy + 2y^2$'],
      answer: 2,
      solution: 'With $a = 3x$ and $b = -2y$: $a^2 = 9x^2$, $2ab = 2(3x)(-2y) = -12xy$, $b^2 = (-2y)^2 = 4y^2$. So $(3x-2y)^2 = 9x^2 - 12xy + 4y^2$. Forgetting the $2$ in $2ab$ gives $-6xy$; losing the sign gives $+12xy$; and $3x^2$ with $2y^2$ forgets to square the coefficients.',
    },
    {
      q: 'What is the coefficient of $x^4$ when $(x^2 + x)^3$ is expanded?',
      choices: ['$1$', '$6$', '$0$', '$3$'],
      answer: 3,
      solution: 'Factor first: $(x^2 + x)^3 = \\left(x(x+1)\\right)^3 = x^3(x+1)^3 = x^3(x^3 + 3x^2 + 3x + 1) = x^6 + 3x^5 + 3x^4 + x^3$. The coefficient of $x^4$ is $3$. Expanding directly, $x^4$ comes from choosing $x^2$ from one factor and $x$ from the other two, which can be done in $\\binom{3}{1} = 3$ ways. The answer $1$ is the coefficient of $x^3$ or $x^6$, and $6$ counts the choice with the factors in order.',
    },
    {
      q: 'What is the coefficient of $x^5$ when $(x^2 + 2x + 1)^3$ is expanded?',
      choices: ['$3$', '$15$', '$6$', '$12$'],
      answer: 2,
      solution: 'Recognize the base as a perfect square: $x^2 + 2x + 1 = (x+1)^2$, so the expression is $(x+1)^6$, whose $x^5$ coefficient is $\\binom{6}{5} = 6$. Directly, an $x^5$ product takes $x^2$ from two of the three factors and $2x$ from the third; there are $3$ ways to choose that third factor, each worth $2$, so $3\\cdot 2 = 6$. The answer $3$ forgets the $2$ in $2x$; $12$ uses $2^2$, as if two factors gave the $2x$; $15$ is $\\binom{6}{4}$, the coefficient of $x^4$.',
    },
    {
      q: 'What is the coefficient of $x^4$ when $(x+1)^3(x-1)^3$ is expanded?',
      choices: ['$3$', '$-3$', '$-6$', '$0$'],
      answer: 1,
      solution: 'Pair the factors before expanding: $(x+1)^3(x-1)^3 = \\left((x+1)(x-1)\\right)^3 = (x^2 - 1)^3$. Now take $a = x^2$, $b = -1$ in $a^3 + 3a^2b + 3ab^2 + b^3$: $x^6 - 3x^4 + 3x^2 - 1$. The coefficient of $x^4$ is $-3$. Losing the sign gives $3$; $-6$ comes from doubling instead of using the binomial coefficient $3$; and $0$ is the coefficient of every odd power, not of $x^4$.',
    },
  ],
}
const s143 = {
  id: '14.3',
  title: 'The Theorem',
  learn: {
    concepts: [
      {
        heading: 'The Binomial Theorem',
        body: 'For any positive integer $n$, $(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k = \\binom{n}{0}a^n + \\binom{n}{1}a^{n-1}b + \\binom{n}{2}a^{n-2}b^2 + \\cdots + \\binom{n}{n}b^n$. In every term the exponents of $a$ and $b$ add to $n$, and the coefficient $\\binom{n}{k}$ counts the ways to choose which $k$ of the $n$ factors donate a $b$. There are $n+1$ terms, one for each $k$ from $0$ to $n$.',
      },
      {
        heading: 'Reading off one term',
        body: 'You never need the whole expansion to get one coefficient. The term containing $b^k$ is $\\binom{n}{k}a^{n-k}b^k$ — find $k$ from the exponent you want, and the rest follows. The coefficient of $a^ib^j$ (with $i + j = n$) is $\\binom{n}{j}$, which equals $\\binom{n}{i}$ by symmetry. If $i + j \\ne n$, no such term exists and the coefficient is $0$.',
      },
      {
        heading: 'Numbers hide inside $a$ and $b$',
        body: 'For $(2x-3)^4$, the theorem applies with $a = 2x$ and $b = -3$: the term with $b^k$ is $\\binom{4}{k}(2x)^{4-k}(-3)^k$. The $2$ gets raised to the power $4-k$ along with the $x$, and $(-3)^k$ carries a sign. So the coefficient of $x^3$ is $\\binom{4}{1}\\cdot 2^3\\cdot(-3) = -96$, not $4\\cdot 2\\cdot 3$. Write the powers of every number out before multiplying.',
      },
      {
        heading: 'Signs and symmetry',
        body: 'When $b$ is negative, $(-c)^k$ is positive for even $k$ and negative for odd $k$, so the terms of $(a-c)^n$ alternate in sign starting with $+a^n$. And because $\\binom{n}{k} = \\binom{n}{n-k}$, the list of coefficients of $(a+b)^n$ reads the same backwards. Use symmetry as a check: if your coefficients do not mirror, a power was miscalculated.',
      },
    ],
    examples: [
      {
        problem: 'What is the coefficient of $a^3b^2$ in the expansion of $(a+b)^5$?',
        steps: [
          'The term with $b^2$ is $\\binom{5}{2}a^{3}b^{2}$, and the exponents $3 + 2 = 5$ match $n$.',
          'Compute $\\binom{5}{2} = \\frac{5\\cdot 4}{2} = 10$.',
          'So the coefficient is $10$, which is also the third entry of row $5$ of Pascal’s triangle.',
        ],
        answer: 'The coefficient is $10$.',
      },
      {
        problem: 'What is the coefficient of $x^2$ in the expansion of $(x+4)^5$?',
        steps: [
          'With $a = x$ and $b = 4$, the term containing $x^2$ has $a^2$, so $b$ appears $5 - 2 = 3$ times: $k = 3$.',
          'That term is $\\binom{5}{3}x^2\\cdot 4^3 = 10\\cdot x^2\\cdot 64$.',
          'So the coefficient of $x^2$ is $10\\cdot 64 = 640$.',
        ],
        answer: 'The coefficient is $640$.',
      },
      {
        problem: 'Find the term containing $x^3$ in the expansion of $(2x-3)^4$.',
        steps: [
          'Take $a = 2x$ and $b = -3$; for $x^3$ we need $a^3$, so $k = 1$.',
          'The term is $\\binom{4}{1}(2x)^3(-3)^1 = 4\\cdot 8x^3\\cdot(-3)$.',
          'Multiply: $4\\cdot 8\\cdot(-3) = -96$, so the term is $-96x^3$.',
          'The sign is negative because $-3$ appears an odd number of times.',
        ],
        answer: '$-96x^3$',
      },
    ],
  },
  problems: [
    {
      q: 'Which of the following is a term in the expansion of $(a+b)^6$?',
      choices: ['$15a^3b^2$', '$20a^4b^2$', '$6a^5b^2$', '$15a^4b^2$'],
      answer: 3,
      solution: 'Every term of $(a+b)^6$ has the form $\\binom{6}{k}a^{6-k}b^k$, so the exponents must add to $6$ and the coefficient must be the matching binomial coefficient. In $15a^4b^2$ the exponents add to $6$ and $\\binom{6}{2} = 15$, so it is a term. The exponents of $15a^3b^2$ add to $5$ and those of $6a^5b^2$ add to $7$, so neither appears; $20a^4b^2$ has the right exponents but uses $\\binom{6}{3}$, which belongs to $a^3b^3$.',
    },
    {
      q: 'In the expansion of $(x+2)^4$, which power of $x$ has coefficient $32$?',
      choices: ['$x^3$', '$x$', '$x^2$', '$x^0$ (the constant term)'],
      answer: 1,
      solution: 'The term with $x^j$ is $\\binom{4}{j}x^j\\cdot 2^{4-j}$, since the other $4 - j$ factors each contribute a $2$. Listing them: $x^4$ has coefficient $1$, $x^3$ has $4\\cdot 2 = 8$, $x^2$ has $6\\cdot 4 = 24$, $x$ has $4\\cdot 8 = 32$, and the constant term is $16$. So the coefficient $32$ belongs to $x$. Choosing $x^3$ comes from putting the power of $2$ on the wrong side, $2^j$ instead of $2^{4-j}$; $x^2$ has the neighboring coefficient $24$; the constant term is $2^4 = 16$.',
    },
    {
      q: 'What is the coefficient of $y^5$ in the expansion of $(y-1)^7$?',
      choices: ['$-21$', '$35$', '$-35$', '$21$'],
      answer: 3,
      solution: 'With $a = y$ and $b = -1$, the $y^5$ term needs $b$ twice: $\\binom{7}{2}y^5(-1)^2 = 21y^5$. Since $(-1)^2 = 1$, the coefficient is $21$. The answer $-21$ assumes every term of $(y-1)^7$ after the first is negative, but only the odd powers of $-1$ are; $35$ and $-35$ use $\\binom{7}{3}$, which belongs to $y^4$.',
    },
    {
      q: 'What is the coefficient of $x^2$ in the expansion of $(3x+1)^4$?',
      choices: ['$18$', '$54$', '$36$', '$6$'],
      answer: 1,
      solution: 'Take $a = 3x$ and $b = 1$. The term with $x^2$ has $a^2 = (3x)^2 = 9x^2$ and $b^2 = 1$, with coefficient $\\binom{4}{2} = 6$. So the coefficient of $x^2$ is $6\\cdot 9 = 54$. Using $3$ instead of $3^2$ gives $18$; $36$ is $4\\cdot 9$ with the wrong binomial coefficient; $6$ forgets the $3$ entirely.',
    },
    {
      q: 'What is the coefficient of $x^4$ in the expansion of $(2x-1)^6$?',
      choices: ['$240$', '$-240$', '$120$', '$96$'],
      answer: 0,
      solution: 'With $a = 2x$ and $b = -1$, the $x^4$ term has $a^4 = 16x^4$ and $b^2 = (-1)^2 = 1$, with coefficient $\\binom{6}{2} = 15$. So the coefficient is $15\\cdot 16\\cdot 1 = 240$. It is positive because $-1$ appears an even number of times; $-240$ gets the sign wrong, $120$ uses $2^3$ instead of $2^4$, and $96$ uses $\\binom{6}{1}$.',
    },
    {
      q: 'What is the coefficient of $x^3y^7$ in the expansion of $(x+y)^{10}$?',
      choices: ['$210$', '$45$', '$120$', '$720$'],
      answer: 2,
      solution: 'The exponents $3 + 7 = 10$ match, so the coefficient is $\\binom{10}{7} = \\binom{10}{3} = \\frac{10\\cdot 9\\cdot 8}{6} = 120$. The answer $720$ is $10\\cdot 9\\cdot 8$ without dividing by $3!$; $210$ is $\\binom{10}{4}$; $45$ is $\\binom{10}{2}$.',
    },
    {
      q: 'What is the coefficient of $a^3b^3$ in the expansion of $(a-2b)^6$?',
      choices: ['$160$', '$-40$', '$-120$', '$-160$'],
      answer: 3,
      solution: 'The second thing being raised is $-2b$, so the term with $b^3$ is $\\binom{6}{3}a^3(-2b)^3 = 20\\cdot a^3\\cdot(-8)b^3 = -160a^3b^3$. The coefficient is $-160$. Forgetting the sign gives $160$; using $-2$ instead of $(-2)^3$ gives $-40$; using $\\binom{6}{2}$ gives $-120$.',
    },
    {
      q: 'What is the coefficient of $x^6$ in the expansion of $(x^2+3)^5$?',
      choices: ['$270$', '$90$', '$30$', '$10$'],
      answer: 1,
      solution: 'Here $a = x^2$, so $x^6 = a^3$ and $b = 3$ appears $5 - 3 = 2$ times. The term is $\\binom{5}{2}(x^2)^3\\cdot 3^2 = 10\\cdot 9\\cdot x^6 = 90x^6$. The answer $270$ treats $x^6$ as needing $k = 3$ and uses $3^3$; $30$ uses $3$ instead of $3^2$; $10$ forgets the $3$ altogether.',
    },
    {
      q: 'What is the coefficient of $x^2$ in the expansion of $\\left(x + \\frac{1}{x}\\right)^6$?',
      choices: ['$20$', '$6$', '$15$', '$30$'],
      answer: 2,
      solution: 'The term with $k$ copies of $\\frac{1}{x}$ is $\\binom{6}{k}x^{6-k}x^{-k} = \\binom{6}{k}x^{6-2k}$. For $x^2$ we need $6 - 2k = 2$, so $k = 2$, and the coefficient is $\\binom{6}{2} = 15$. The answer $20$ is $\\binom{6}{3}$, which is the constant term; $6$ is $\\binom{6}{1}$, the coefficient of $x^4$; $30$ forgets to divide in $\\binom{6}{2}$.',
    },
    {
      q: 'What is the coefficient of $x^5$ when $(1+2x)^7 - (1-2x)^7$ is expanded and simplified?',
      choices: ['$1344$', '$672$', '$0$', '$2688$'],
      answer: 0,
      solution: 'In $(1+2x)^7$ the $x^5$ term is $\\binom{7}{5}(2x)^5 = 21\\cdot 32x^5 = 672x^5$. In $(1-2x)^7$ it is $\\binom{7}{5}(-2x)^5 = -672x^5$, because the power is odd. Subtracting, $672 - (-672) = 1344$. The answer $672$ forgets the subtraction doubles the odd-power terms; $0$ is what happens to the even powers, which cancel; $2688$ doubles twice.',
    },
  ],
}
const s144 = {
  id: '14.4',
  title: 'Applications of the Binomial Theorem',
  learn: {
    concepts: [
      {
        heading: 'One coefficient of $(x+c)^n$',
        body: 'The coefficient of $x^k$ in $(x+c)^n$ is $\\binom{n}{k}c^{n-k}$: choose the $k$ factors that supply an $x$, and every other factor supplies a $c$. Two checks keep this honest — the exponent on $c$ is $n - k$, not $k$, and a negative $c$ raised to an odd power flips the sign. Nothing else in the expansion needs to be written down.',
      },
      {
        heading: 'The constant term',
        body: 'When both parts carry $x$, as in $\\left(x^2 + \\frac{2}{x}\\right)^6$, the general term is $\\binom{6}{k}(x^2)^{6-k}\\left(\\frac{2}{x}\\right)^k = \\binom{6}{k}2^k x^{12-3k}$. The constant term is the one with exponent $0$: solve $12 - 3k = 0$ to get $k = 4$. If the equation has no integer solution between $0$ and $n$, the constant term is $0$ — do not force a $k$ that does not exist.',
      },
      {
        heading: 'Quick powers by splitting the base',
        body: 'A number just off a round one can be raised to a power by hand: $11^4 = (10+1)^4 = 10^4 + 4\\cdot 10^3 + 6\\cdot 10^2 + 4\\cdot 10 + 1 = 14641$, and $1.01^5 = (1 + 0.01)^5 = 1 + 5(0.01) + 10(0.0001) + \\cdots = 1.0510100501$. The binomial coefficients of row $n$ appear as the digits until they reach $10$ and start to carry. For $9^4$ use $(10 - 1)^4$ and alternate the signs.',
      },
      {
        heading: 'Coefficients as counts, and products of expansions',
        body: 'In $(1+x)^n$ the coefficient of $x^k$ is $\\binom{n}{k}$, the number of $k$-element subsets of $n$ things. So a coefficient in a product like $(1+x)^4(1+x)^5$ can be found two ways: multiply to get $(1+x)^9$ and read off $\\binom{9}{k}$, or pick $x^i$ from the first factor and $x^{k-i}$ from the second and add over all $i$. When the two factors are different, only the second way works, and it is just a short sum.',
      },
    ],
    examples: [
      {
        problem: 'What is the coefficient of $x^3$ in the expansion of $(x+2)^6$?',
        steps: [
          'Choose the $3$ factors that give an $x$: $\\binom{6}{3} = 20$ ways.',
          'The other $6 - 3 = 3$ factors each give a $2$, contributing $2^3 = 8$.',
          'The coefficient is $20\\cdot 8 = 160$.',
        ],
        answer: 'The coefficient is $160$.',
      },
      {
        problem: 'Compute $9^4$ by writing $9$ as $10 - 1$.',
        steps: [
          'Expand $(10-1)^4$ with row $4$ of Pascal’s triangle, $1, 4, 6, 4, 1$, and alternating signs.',
          'The terms are $10^4 - 4\\cdot 10^3 + 6\\cdot 10^2 - 4\\cdot 10 + 1 = 10000 - 4000 + 600 - 40 + 1$.',
          'Adding: $10000 - 4000 = 6000$, then $+600 = 6600$, then $-40 = 6560$, then $+1 = 6561$.',
        ],
        answer: '$9^4 = 6561$',
      },
      {
        problem: 'Find the constant term in the expansion of $\\left(x^2 + \\frac{2}{x}\\right)^6$.',
        steps: [
          'The general term is $\\binom{6}{k}(x^2)^{6-k}\\left(\\frac{2}{x}\\right)^k = \\binom{6}{k}2^k x^{12-2k-k} = \\binom{6}{k}2^k x^{12-3k}$.',
          'The constant term has exponent $0$, so $12 - 3k = 0$ and $k = 4$.',
          'Substitute $k = 4$: $\\binom{6}{4}\\cdot 2^4 = 15\\cdot 16 = 240$.',
        ],
        answer: 'The constant term is $240$.',
      },
    ],
  },
  problems: [
    {
      q: 'What is the coefficient of $x^{98}$ in the expansion of $(x+1)^{100}$?',
      choices: ['$4950$', '$9900$', '$100$', '$161700$'],
      answer: 0,
      solution: 'Choose the $98$ factors that supply an $x$; the other $2$ supply a $1$. The coefficient is $\\binom{100}{98} = \\binom{100}{2} = \\frac{100\\cdot 99}{2} = 4950$. The answer $9900$ forgets to divide by $2$; $100$ is $\\binom{100}{1}$, the coefficient of $x^{99}$; $161700$ is $\\binom{100}{3}$, the coefficient of $x^{97}$.',
    },
    {
      q: 'Using the expansion of $(100+1)^3$, what is $101^3$?',
      choices: ['$1003001$', '$1030030$', '$1300301$', '$1030301$'],
      answer: 3,
      solution: 'Row $3$ of Pascal’s triangle is $1, 3, 3, 1$, so $(100+1)^3 = 100^3 + 3\\cdot 100^2 + 3\\cdot 100 + 1 = 1000000 + 30000 + 300 + 1 = 1030301$. The digits $1, 3, 3, 1$ appear in the answer, spaced two places apart because the base is $100$. The other choices place the $3$s in the wrong columns.',
    },
    {
      q: 'What is the constant term in the expansion of $\\left(x + \\frac{2}{x}\\right)^5$?',
      choices: ['$0$', '$40$', '$32$', '$10$'],
      answer: 0,
      solution: 'The general term is $\\binom{5}{k}x^{5-k}\\left(\\frac{2}{x}\\right)^k = \\binom{5}{k}2^kx^{5-2k}$. A constant term needs $5 - 2k = 0$, but $5$ is odd, so no integer $k$ works: every term has an odd exponent, and the constant term is $0$. The answer $40$ is the $k = 2$ term $\\binom{5}{2}\\cdot 2^2 = 40$, which is the coefficient of $x$, not a constant; $32$ is $2^5$, the coefficient of $x^{-5}$; $10$ is $\\binom{5}{2}$ without its power of $2$.',
    },
    {
      q: 'What is the exact value of $1.02^4$?',
      choices: ['$1.08$', '$1.0824$', '$1.08243216$', '$1.08240016$'],
      answer: 2,
      solution: 'Write $1.02^4 = (1 + 0.02)^4 = 1 + 4(0.02) + 6(0.02)^2 + 4(0.02)^3 + (0.02)^4 = 1 + 0.08 + 0.0024 + 0.000032 + 0.00000016 = 1.08243216$. Stopping after two terms gives $1.08$; after three gives $1.0824$; the choice $1.08240016$ skips the $4(0.02)^3$ term.',
    },
    {
      q: 'What is the coefficient of $x^5$ in the expansion of $(2-x)^7$?',
      choices: ['$84$', '$-672$', '$-21$', '$-84$'],
      answer: 3,
      solution: 'Take $a = 2$ and $b = -x$. The term with $x^5$ is $\\binom{7}{5}\\cdot 2^{2}\\cdot(-x)^5 = 21\\cdot 4\\cdot(-1)x^5 = -84x^5$. The coefficient is $-84$: negative because $-x$ appears five times. Losing the sign gives $84$; $-672$ uses $2^5$ instead of $2^2$; $-21$ forgets the $2^2$.',
    },
    {
      q: 'What is the constant term in the expansion of $\\left(x^3 - \\frac{1}{x}\\right)^8$?',
      choices: ['$-28$', '$28$', '$56$', '$0$'],
      answer: 1,
      solution: 'The general term is $\\binom{8}{k}(x^3)^{8-k}\\left(-\\frac{1}{x}\\right)^k = \\binom{8}{k}(-1)^kx^{24-4k}$. The exponent is $0$ when $k = 6$, so the constant term is $\\binom{8}{6}(-1)^6 = 28$. Since $k$ is even the sign is positive, not $-28$; $56$ is $\\binom{8}{5}$, which belongs to $x^4$; and $0$ would be right only if $24 - 4k = 0$ had no integer solution.',
    },
    {
      q: 'Using the expansions of $(10+1)^4$ and $(10-1)^4$, what is $11^4 - 9^4$?',
      choices: ['$8000$', '$4040$', '$8080$', '$21202$'],
      answer: 2,
      solution: 'Row $4$ of Pascal’s triangle gives $(10+1)^4 = 10^4 + 4\\cdot 10^3 + 6\\cdot 10^2 + 4\\cdot 10 + 1$ and $(10-1)^4 = 10^4 - 4\\cdot 10^3 + 6\\cdot 10^2 - 4\\cdot 10 + 1$. Subtracting, the even-power terms cancel and the odd-power terms double: $2(4\\cdot 1000 + 4\\cdot 10) = 2\\cdot 4040 = 8080$. Check: $14641 - 6561 = 8080$. The answer $4040$ forgets that the subtraction doubles those terms; $8000$ drops the $4\\cdot 10$ term; $21202$ keeps the even-power terms instead, which is $11^4 + 9^4$.',
    },
    {
      q: 'What is the coefficient of $x^3$ when $(1+x)^4(1+x)^5$ is expanded?',
      choices: ['$56$', '$126$', '$84$', '$74$'],
      answer: 2,
      solution: 'The product is $(1+x)^9$, whose $x^3$ coefficient is $\\binom{9}{3} = 84$. Multiplying term by term gives the same total: pick $x^i$ from the first factor and $x^{3-i}$ from the second, $\\binom{4}{0}\\binom{5}{3} + \\binom{4}{1}\\binom{5}{2} + \\binom{4}{2}\\binom{5}{1} + \\binom{4}{3}\\binom{5}{0} = 10 + 40 + 30 + 4 = 84$. The answer $126$ is $\\binom{9}{4}$; $56$ is $\\binom{8}{3}$, from adding the exponents wrong; $74$ drops the last product in the sum.',
    },
    {
      q: 'What is the coefficient of $x^2$ when $(1+x)^3(1-x)^4$ is expanded?',
      choices: ['$3$', '$-3$', '$9$', '$-9$'],
      answer: 1,
      solution: 'Pick $x^i$ from $(1+x)^3$ and $x^{2-i}$ from $(1-x)^4$, whose coefficients alternate: $1, -4, 6, -4, 1$. The sum is $\\binom{3}{0}\\cdot 6 + \\binom{3}{1}\\cdot(-4) + \\binom{3}{2}\\cdot 1 = 6 - 12 + 3 = -3$. Alternatively, $(1+x)^3(1-x)^4 = (1-x^2)^3(1-x)$, whose $x^2$ coefficient is $-3$. Ignoring the minus signs in the second factor gives $6 + 12 + 3 = 21$; the choice $3$ loses the sign; $9$ and $-9$ come from dropping the middle product.',
    },
    {
      q: 'What is the constant term in the expansion of $\\left(2x - \\frac{1}{x^2}\\right)^9$?',
      choices: ['$5376$', '$-672$', '$-2688$', '$-5376$'],
      answer: 3,
      solution: 'The general term is $\\binom{9}{k}(2x)^{9-k}\\left(-\\frac{1}{x^2}\\right)^k = \\binom{9}{k}2^{9-k}(-1)^k x^{9-3k}$. The exponent is $0$ when $k = 3$, so the constant term is $\\binom{9}{3}\\cdot 2^6\\cdot(-1)^3 = 84\\cdot 64\\cdot(-1) = -5376$. Forgetting the odd power of $-1$ gives $5376$; $-2688$ uses $2^5$; $-672$ uses $2^3$, as if the exponent on $2$ were $k$ rather than $9 - k$.',
    },
  ],
}
const s145 = {
  id: '14.5',
  title: 'Using the Binomial Theorem in Identities',
  learn: {
    concepts: [
      {
        heading: 'Plug in $a = b = 1$',
        body: 'The theorem is true for every $a$ and $b$, so we may pick convenient ones. With $a = b = 1$ every power collapses to $1$ and $(1+1)^n = \\sum_{k=0}^{n}\\binom{n}{k}$, so $\\binom{n}{0} + \\binom{n}{1} + \\cdots + \\binom{n}{n} = 2^n$. This is the row-sum fact from Pascal’s triangle, and it says that an $n$-element set has $2^n$ subsets in all. Remember that the $k = 0$ term is part of the sum; a sum that starts at $k = 1$ equals $2^n - 1$.',
      },
      {
        heading: 'Plug in $a = 1$, $b = -1$',
        body: 'With $a = 1$ and $b = -1$ we get $(1-1)^n = \\sum_{k=0}^{n}\\binom{n}{k}(-1)^k$, so for $n \\ge 1$ the alternating sum $\\binom{n}{0} - \\binom{n}{1} + \\binom{n}{2} - \\cdots = 0$. Moving the negative terms across says the even-index entries and the odd-index entries of row $n$ have the same total; since together they make $2^n$, each half is $2^{n-1}$.',
      },
      {
        heading: 'Other substitutions',
        body: 'Any sum of the form $\\sum \\binom{n}{k}c^k$ is $(1+c)^n$ in disguise: $c = 2$ gives $\\sum\\binom{n}{k}2^k = 3^n$, and $c = -2$ gives $(-1)^n$. A sum with $c^{n-k}$ instead is $(c+1)^n$. To evaluate a sum, match its shape to $\\binom{n}{k}a^{n-k}b^k$ and read off $a$ and $b$; then the whole sum is a single power.',
      },
      {
        heading: 'Proving an identity by substitution',
        body: 'To prove something about binomial coefficients, look for a choice of $a$ and $b$, or a product of two expansions, that produces the sum. For instance, comparing the $x^n$ coefficient on both sides of $(1+x)^n(1+x)^n = (1+x)^{2n}$ gives $\\sum_{k=0}^{n}\\binom{n}{k}^2 = \\binom{2n}{n}$. Sums over only the even $k$ come from adding the $c$ and $-c$ substitutions and halving, since the odd terms cancel.',
      },
    ],
    examples: [
      {
        problem: 'Evaluate $\\binom{7}{0} + \\binom{7}{1} + \\binom{7}{2} + \\cdots + \\binom{7}{7}$.',
        steps: [
          'This is the theorem with $n = 7$ and $a = b = 1$, since $1^{7-k}\\cdot 1^k = 1$ for every $k$.',
          'So the sum is $(1+1)^7 = 2^7 = 128$.',
          'As a check, row $7$ of Pascal’s triangle is $1, 7, 21, 35, 35, 21, 7, 1$, which adds to $128$.',
        ],
        answer: '$128$',
      },
      {
        problem: 'Evaluate $\\binom{6}{0} + \\binom{6}{2} + \\binom{6}{4} + \\binom{6}{6}$.',
        steps: [
          'Substituting $a = 1$, $b = -1$ gives $\\binom{6}{0} - \\binom{6}{1} + \\binom{6}{2} - \\cdots + \\binom{6}{6} = 0$, so the even-index entries and the odd-index entries have equal totals.',
          'All the entries together add to $2^6 = 64$.',
          'So the even-index entries alone add to $\\frac{64}{2} = 32$; indeed $1 + 15 + 15 + 1 = 32$.',
        ],
        answer: '$32$',
      },
      {
        problem: 'Evaluate $\\sum_{k=0}^{5}\\binom{5}{k}2^k = \\binom{5}{0} + 2\\binom{5}{1} + 4\\binom{5}{2} + 8\\binom{5}{3} + 16\\binom{5}{4} + 32\\binom{5}{5}$.',
        steps: [
          'Match the shape $\\binom{5}{k}a^{5-k}b^k$: the factor $2^k$ means $b = 2$, and there is no visible power of $a$, so $a = 1$.',
          'The sum is therefore $(1+2)^5 = 3^5$.',
          'So the value is $243$; adding the six terms directly, $1 + 10 + 40 + 80 + 80 + 32 = 243$, confirms it.',
        ],
        answer: '$243$',
      },
    ],
  },
  problems: [
    {
      q: 'What is $\\binom{8}{0} + \\binom{8}{1} + \\binom{8}{2} + \\cdots + \\binom{8}{7}$? Note that the sum stops at $\\binom{8}{7}$.',
      choices: ['$256$', '$255$', '$128$', '$254$'],
      answer: 1,
      solution: 'Setting $a = b = 1$ gives the full row: $\\binom{8}{0} + \\cdots + \\binom{8}{8} = 2^8 = 256$. This sum leaves out the last term $\\binom{8}{8} = 1$, so it equals $256 - 1 = 255$. The answer $256$ ignores the missing term; $254$ also removes a $\\binom{8}{0}$ that is still there; $128$ is $2^7$, from counting eight terms and using $n = 7$.',
    },
    {
      q: 'What is $\\binom{7}{0} - \\binom{7}{1} + \\binom{7}{2} - \\binom{7}{3} + \\binom{7}{4} - \\binom{7}{5} + \\binom{7}{6}$? Note that the sum stops at $\\binom{7}{6}$.',
      choices: ['$0$', '$-1$', '$1$', '$127$'],
      answer: 2,
      solution: 'With $a = 1$, $b = -1$ the full alternating sum is $(1-1)^7 = 0$. The full sum ends with $-\\binom{7}{7} = -1$, which this sum leaves out, so this sum is $0 - (-1) = 1$. The answer $0$ ignores the missing term; $-1$ gets its sign backwards; $127$ adds the seven terms without their signs.',
    },
    {
      q: 'What is $\\binom{10}{2} + \\binom{10}{4} + \\binom{10}{6} + \\binom{10}{8}$?',
      choices: ['$510$', '$512$', '$511$', '$1022$'],
      answer: 0,
      solution: 'Substituting $a = 1$, $b = -1$ shows the even-index entries of row $10$ total the same as the odd-index ones, so the even-index entries total $\\frac{2^{10}}{2} = 512$. This sum leaves out $\\binom{10}{0}$ and $\\binom{10}{10}$, each equal to $1$, so it is $512 - 2 = 510$. Directly, $45 + 210 + 210 + 45 = 510$. The answer $512$ forgets to remove the two end entries; $511$ removes only one; $1022$ forgets to halve.',
    },
    {
      q: 'What is $\\binom{4}{0}3^4 + \\binom{4}{1}3^3\\cdot 2 + \\binom{4}{2}3^2\\cdot 2^2 + \\binom{4}{3}3\\cdot 2^3 + \\binom{4}{4}2^4$?',
      choices: ['$1296$', '$625$', '$97$', '$1$'],
      answer: 1,
      solution: 'Each term has the shape $\\binom{4}{k}a^{4-k}b^k$ with $a = 3$ and $b = 2$, so the sum is $(3+2)^4 = 5^4 = 625$. Directly, $81 + 216 + 216 + 96 + 16 = 625$. The answer $1296$ is $6^4$, from multiplying $3\\cdot 2$ instead of adding; $97$ is $3^4 + 2^4$, the two end terms alone; $1$ is $(3-2)^4$, reading a minus sign that is not there.',
    },
    {
      q: 'When $(2x - y)^6$ is expanded and like terms are combined, what is the sum of all its coefficients?',
      choices: ['$729$', '$64$', '$0$', '$1$'],
      answer: 3,
      solution: 'The sum of the coefficients of any polynomial is its value when every variable is set to $1$, because each term then reduces to its coefficient. So the sum is $(2\\cdot 1 - 1)^6 = 1^6 = 1$. The answer $729$ is $3^6$, which ignores the minus sign; $64$ is $2^6$, the first coefficient alone; $0$ comes from thinking the minus sign cancels everything, which only happens when the two parts are equal.',
    },
    {
      q: 'What is $\\sum_{k=0}^{5}\\binom{5}{k}(-2)^k = \\binom{5}{0} - 2\\binom{5}{1} + 4\\binom{5}{2} - 8\\binom{5}{3} + 16\\binom{5}{4} - 32\\binom{5}{5}$?',
      choices: ['$1$', '$243$', '$-243$', '$-1$'],
      answer: 3,
      solution: 'This is the theorem with $a = 1$ and $b = -2$: the sum is $(1-2)^5 = (-1)^5 = -1$. The answer $1$ forgets that an odd power of $-1$ is negative; $243$ is $3^5$, which ignores the sign of $b$; $-243$ is $(-3)^5$, as if $a$ were $-1$.',
    },
    {
      q: 'What is $\\binom{7}{0}3^7 + \\binom{7}{1}3^6 + \\binom{7}{2}3^5 + \\cdots + \\binom{7}{6}3 + \\binom{7}{7}$?',
      choices: ['$16384$', '$2187$', '$8192$', '$4096$'],
      answer: 0,
      solution: 'The power of $3$ is $3^{7-k}$, so match $a = 3$, $b = 1$: the sum is $(3+1)^7 = 4^7 = 16384$. The answer $2187$ is $3^7$, the first term alone; $8192$ and $4096$ are $2^{13}$ and $2^{12}$, from miscounting $4^7 = 2^{14}$.',
    },
    {
      q: 'For a positive integer $n$, $\\sum_{k=0}^{n}\\binom{n}{k}3^k = 1024$. What is $n$?',
      choices: ['$10$', '$4$', '$5$', '$6$'],
      answer: 2,
      solution: 'The sum is $(1+3)^n = 4^n$, so $4^n = 1024 = 4^5$ and $n = 5$. The answer $10$ solves $2^n = 1024$, as if the multipliers were not there; $4$ and $6$ are off-by-one guesses at the power of $4$ ($4^4 = 256$, $4^6 = 4096$).',
    },
    {
      q: 'What is $\\binom{6}{0} + \\binom{6}{2}2^2 + \\binom{6}{4}2^4 + \\binom{6}{6}2^6$, the sum of the terms of $\\sum_{k=0}^{6}\\binom{6}{k}2^k$ with even $k$?',
      choices: ['$729$', '$364$', '$243$', '$365$'],
      answer: 3,
      solution: 'Substituting $b = 2$ gives $(1+2)^6 = 729$ for the full sum, and substituting $b = -2$ gives $(1-2)^6 = 1$, in which the odd-$k$ terms have flipped sign. Adding the two cancels the odd terms and doubles the even ones, so the even-$k$ sum is $\\frac{729 + 1}{2} = 365$. Directly, $1 + 15\\cdot 4 + 15\\cdot 16 + 64 = 1 + 60 + 240 + 64 = 365$. The answer $364$ halves $729 - 1$, which is the odd-$k$ sum; $729$ is the whole sum; $243$ is $3^5$.',
    },
    {
      q: 'What is $\\binom{7}{0}\\binom{7}{3} + \\binom{7}{1}\\binom{7}{2} + \\binom{7}{2}\\binom{7}{1} + \\binom{7}{3}\\binom{7}{0}$?',
      choices: ['$364$', '$924$', '$70$', '$182$'],
      answer: 0,
      solution: 'Each product $\\binom{7}{k}\\binom{7}{3-k}$ picks $x^k$ from one copy of $(1+x)^7$ and $x^{3-k}$ from the other, so the sum is the coefficient of $x^3$ in $(1+x)^7(1+x)^7 = (1+x)^{14}$, which is $\\binom{14}{3} = 364$. Directly, $35 + 147 + 147 + 35 = 364$. The answer $924$ is $\\binom{14}{7}$, matching the wrong exponent; $70$ keeps only the two end products; $182$ counts each pair of equal products once instead of twice.',
    },
  ],
}
const challenge = [
  {
    q: 'What is the coefficient of $x^2y^2$ when $(x+y)^4 + (x+y)^5$ is expanded and simplified?',
    choices: ['$16$', '$10$', '$6$', '$12$'],
    answer: 2,
    solution: 'In $(x+y)^4$ the coefficient of $x^2y^2$ is $\\binom{4}{2} = 6$. In $(x+y)^5$ every term has exponents adding to $5$, so there is no $x^2y^2$ term at all. The coefficient is $6 + 0 = 6$. The answer $16$ adds $\\binom{5}{2} = 10$ as if $(x+y)^5$ contributed an $x^2y^2$ term; $10$ takes that nonexistent term alone; $12$ doubles the correct count.',
  },
  {
    q: 'What is the coefficient of $x$ when $(x-3)^3$ is expanded?',
    choices: ['$-27$', '$9$', '$-9$', '$27$'],
    answer: 3,
    solution: 'The term with a single $x$ has $b = -3$ appearing twice: $\\binom{3}{2}x(-3)^2 = 3\\cdot 9x = 27x$. The coefficient is $27$, positive because $-3$ is squared. The answer $-27$ misjudges the sign; $9$ and $-9$ forget the binomial coefficient $3$.',
  },
  {
    q: 'What is $\\binom{6}{0}2^6 - \\binom{6}{1}2^5 + \\binom{6}{2}2^4 - \\binom{6}{3}2^3 + \\binom{6}{4}2^2 - \\binom{6}{5}2 + \\binom{6}{6}$?',
    choices: ['$1$', '$729$', '$64$', '$-1$'],
    answer: 0,
    solution: 'Match the shape $\\binom{6}{k}a^{6-k}b^k$: the power of $2$ is $2^{6-k}$, so $a = 2$, and the alternating sign is $(-1)^k$, so $b = -1$. The sum is $(2-1)^6 = 1$. The answer $729$ is $(2+1)^6$, ignoring the signs; $64$ is $2^6$, the first term alone; $-1$ would need an odd exponent, but $6$ is even.',
  },
  {
    q: 'What is the exact value of $0.99^3$?',
    choices: ['$0.97$', '$0.970299$', '$0.9703$', '$0.970301$'],
    answer: 1,
    solution: 'Write $0.99^3 = (1 - 0.01)^3 = 1 - 3(0.01) + 3(0.01)^2 - (0.01)^3 = 1 - 0.03 + 0.0003 - 0.000001 = 0.970299$. Stopping after two terms gives $0.97$, after three gives $0.9703$; the choice $0.970301$ adds the last term instead of subtracting it.',
  },
  {
    q: 'What is the coefficient of $x^4$ in the expansion of $(2x+3)^5$?',
    choices: ['$80$', '$720$', '$30$', '$240$'],
    answer: 3,
    solution: 'Four of the five factors give $2x$ and one gives $3$: $\\binom{5}{4}(2x)^4\\cdot 3 = 5\\cdot 16\\cdot 3\\,x^4 = 240x^4$. The answer $80$ forgets the $3$; $720$ uses $3^2$ as if two factors gave a $3$; $30$ uses $2$ instead of $2^4$.',
  },
  {
    q: 'What is the constant term in the expansion of $\\left(x - \\frac{1}{x}\\right)^8$?',
    choices: ['$-70$', '$70$', '$56$', '$0$'],
    answer: 1,
    solution: 'The general term is $\\binom{8}{k}x^{8-k}\\left(-\\frac{1}{x}\\right)^k = \\binom{8}{k}(-1)^kx^{8-2k}$, which is constant when $k = 4$. That term is $\\binom{8}{4}(-1)^4 = 70$. Since $k$ is even the sign is positive, ruling out $-70$; $56$ is $\\binom{8}{3}$; $0$ would need $8 - 2k = 0$ to have no integer solution.',
  },
  {
    q: 'What is the coefficient of $x^6$ when $(1+x^2)^5(1-x^3)^2$ is expanded?',
    choices: ['$11$', '$10$', '$9$', '$20$'],
    answer: 0,
    solution: 'The first factor has only even powers, $\\binom{5}{j}x^{2j}$, and the second is $1 - 2x^3 + x^6$. To make $x^6$, pair $x^6$ from the first factor with the $1$, giving $\\binom{5}{3} = 10$, or the $1$ from the first factor with $x^6$ from the second, giving $1$; the middle term $-2x^3$ would need an $x^3$ from the first factor, which does not exist. The coefficient is $10 + 1 = 11$. The answer $10$ forgets the $x^6$ term of the second factor; $9$ gives that term the wrong sign; $20$ doubles the first product as if $-2x^3$ could be paired with something.',
  },
  {
    q: 'For a positive integer $n$, $\\sum_{k=0}^{n}\\binom{n}{k}(-3)^k = 64$. What is $n$?',
    choices: ['$6$', '$3$', '$4$', '$8$'],
    answer: 0,
    solution: 'The sum is $(1-3)^n = (-2)^n$. For this to equal $64$ we need an even $n$ with $2^n = 64$, so $n = 6$. The answer $3$ solves $4^n = 64$ as if the base were $1 + 3$; $4$ and $8$ give $16$ and $256$.',
  },
  {
    q: 'In the expansion of $(1+x)^n$, the coefficient of $x^3$ is exactly four times the coefficient of $x^2$. What is $n$?',
    choices: ['$12$', '$8$', '$6$', '$14$'],
    answer: 3,
    solution: 'We need $\\binom{n}{3} = 4\\binom{n}{2}$. Since $\\binom{n}{3} = \\binom{n}{2}\\cdot\\frac{n-2}{3}$, this says $\\frac{n-2}{3} = 4$, so $n = 14$. Check: $\\binom{14}{3} = 364$ and $\\binom{14}{2} = 91$, and $364 = 4\\cdot 91$. The answer $12$ solves $n - 2 = 10$ from a wrong ratio; $8$ and $6$ come from guessing small rows.',
  },
  {
    q: 'What is the constant term in the expansion of $\\left(x + \\frac{1}{x}\\right)^6\\left(x - \\frac{1}{x}\\right)^4$?',
    choices: ['$120$', '$12$', '$-12$', '$6$'],
    answer: 1,
    solution: 'Pair each factor of $x - \\frac{1}{x}$ with one factor of $x + \\frac{1}{x}$: each pair multiplies to $x^2 - \\frac{1}{x^2}$, so the whole expression equals $\\left(x^2 - \\frac{1}{x^2}\\right)^4\\left(x + \\frac{1}{x}\\right)^2$. The first factor expands to $x^8 - 4x^4 + 6 - \\frac{4}{x^4} + \\frac{1}{x^8}$ and the second to $x^2 + 2 + \\frac{1}{x^2}$; no exponent $\\pm 8, \\pm 4$ can cancel an exponent $\\pm 2$, so the only constant product is $6\\cdot 2 = 12$. The answer $120$ multiplies the constant terms of the two original factors, $\\binom{6}{3} = 20$ and $\\binom{4}{2} = 6$, as if no cross terms could combine; $6$ forgets the middle coefficient $2$ of $\\left(x + \\frac{1}{x}\\right)^2$; $-12$ misjudges the sign of the middle term of $\\left(x^2 - \\frac{1}{x^2}\\right)^4$, which carries $(-1)^2 = +1$.',
  },
  {
    q: 'What is the coefficient of $x^2$ when $(1+x)^2 + (1+x)^3 + (1+x)^4 + \\cdots + (1+x)^{10}$ is expanded and simplified?',
    choices: ['$120$', '$55$', '$165$', '$220$'],
    answer: 2,
    solution: 'The coefficient of $x^2$ in $(1+x)^m$ is $\\binom{m}{2}$, so the answer is $\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{10}{2}$. By the hockey stick identity this sum is $\\binom{11}{3} = 165$. Directly, $1 + 3 + 6 + 10 + 15 + 21 + 28 + 36 + 45 = 165$. The answer $120$ is $\\binom{10}{3}$, stopping one row early; $220$ is $\\binom{12}{3}$, going one row too far; $55$ is $\\binom{11}{2}$, the wrong lower index.',
  },
  {
    q: 'What is the constant term in the expansion of $\\left(x + 2 + \\frac{1}{x}\\right)^5$?',
    choices: ['$250$', '$210$', '$252$', '$32$'],
    answer: 2,
    solution: 'Multiply inside by $x$ and divide outside by $x^5$: $\\left(x + 2 + \\frac{1}{x}\\right)^5 = \\frac{(x^2 + 2x + 1)^5}{x^5} = \\frac{(x+1)^{10}}{x^5}$. The constant term of the original is therefore the coefficient of $x^5$ in $(x+1)^{10}$, which is $\\binom{10}{5} = 252$. The answer $32$ is $2^5$, the product of the middle terms alone, which is only one of the ways to reach a constant; $210$ is $\\binom{10}{4}$; $250$ is $32 + 218$ from an incomplete casework.',
  },
]

const worksheet = [
  {
    q: 'What is the coefficient of $a^2b^4$ in the expansion of $(a-b)^6$?',
    answer: '$15$',
    solution: 'The term with $b^4$ is $\\binom{6}{4}a^2(-b)^4 = 15a^2b^4$, since $(-b)^4 = b^4$. The coefficient is $15$, positive because $-b$ is raised to an even power.',
  },
  {
    q: 'What is the coefficient of $x^3$ in the expansion of $(x-2)^5$?',
    answer: '$40$',
    solution: 'The $x^3$ term has $b = -2$ appearing twice: $\\binom{5}{2}x^3(-2)^2 = 10\\cdot 4x^3 = 40x^3$. The sign is positive because $-2$ is squared.',
  },
  {
    q: 'Compute $21^4$ by expanding $(20+1)^4$.',
    answer: '$194481$',
    solution: 'Row $4$ of Pascal’s triangle gives $(20+1)^4 = 20^4 + 4\\cdot 20^3 + 6\\cdot 20^2 + 4\\cdot 20 + 1 = 160000 + 32000 + 2400 + 80 + 1 = 194481$.',
  },
  {
    q: 'What is the constant term in the expansion of $\\left(2x^2 - \\frac{1}{x}\\right)^6$?',
    answer: '$60$',
    solution: 'The general term is $\\binom{6}{k}(2x^2)^{6-k}\\left(-\\frac{1}{x}\\right)^k = \\binom{6}{k}2^{6-k}(-1)^kx^{12-3k}$, which is constant when $k = 4$: $\\binom{6}{4}\\cdot 2^2\\cdot(-1)^4 = 15\\cdot 4 = 60$.',
  },
  {
    q: 'What is $\\binom{9}{1} + \\binom{9}{3} + \\binom{9}{5} + \\binom{9}{7}$? Note that the sum stops at $\\binom{9}{7}$.',
    answer: '$255$',
    solution: 'By the substitution $a = 1$, $b = -1$, the odd-index entries of row $9$ total half of $2^9$, which is $256$. This sum leaves out $\\binom{9}{9} = 1$, so it equals $256 - 1 = 255$.',
  },
  {
    q: 'What is $\\binom{5}{0}4^5 - \\binom{5}{1}4^4 + \\binom{5}{2}4^3 - \\binom{5}{3}4^2 + \\binom{5}{4}4 - \\binom{5}{5}$?',
    answer: '$243$',
    solution: 'Each term is $\\binom{5}{k}4^{5-k}(-1)^k$, so $a = 4$ and $b = -1$, and the sum is $(4-1)^5 = 3^5 = 243$.',
  },
  {
    q: 'What is the coefficient of $x^3$ in the expansion of $\\left(x^2 + \\frac{1}{x}\\right)^{12}$?',
    answer: '$792$',
    solution: 'The general term is $\\binom{12}{k}(x^2)^{12-k}x^{-k} = \\binom{12}{k}x^{24-3k}$. For $x^3$ we need $24 - 3k = 3$, so $k = 7$, and the coefficient is $\\binom{12}{7} = \\binom{12}{5} = 792$.',
  },
  {
    q: 'What is the coefficient of $x^2$ when $(1+3x)^4(1-x)^2$ is expanded?',
    answer: '$31$',
    solution: 'From $(1+3x)^4$ the coefficients of $1, x, x^2$ are $1, 12, 54$; from $(1-x)^2$ they are $1, -2, 1$. The $x^2$ coefficient of the product is $54\\cdot 1 + 12\\cdot(-2) + 1\\cdot 1 = 54 - 24 + 1 = 31$.',
  },
  {
    q: 'For a positive integer $n$, the coefficient of $x^2$ in the expansion of $(1+2x)^n$ is $112$. What is $n$?',
    answer: '$8$',
    solution: 'The $x^2$ term is $\\binom{n}{2}(2x)^2 = 4\\binom{n}{2}x^2$, so $4\\binom{n}{2} = 112$ and $\\binom{n}{2} = 28 = \\frac{8\\cdot 7}{2}$. Thus $n = 8$.',
  },
  {
    q: 'Evaluate $\\sum_{k=0}^{8}\\binom{8}{k}\\left(\\frac{1}{2}\\right)^k$. Give an exact fraction.',
    answer: '$\\frac{6561}{256}$',
    solution: 'This is the theorem with $a = 1$ and $b = \\frac{1}{2}$: the sum is $\\left(1 + \\frac{1}{2}\\right)^8 = \\left(\\frac{3}{2}\\right)^8 = \\frac{3^8}{2^8} = \\frac{6561}{256}$.',
  },
]

export default {
  id: 'intro-counting-ch14',
  book: 'intro-counting',
  number: 14,
  title: 'The Binomial Theorem',
  intro:
    'Multiply out $(a+b)^4$ and the coefficients $1, 4, 6, 4, 1$ stare back at you — a row of Pascal’s triangle. This chapter explains why counting and algebra meet there, then uses the connection to read off any term of $(a+b)^n$ without expanding, to compute powers like $11^4$ in your head, and to prove identities about binomial coefficients just by plugging in numbers.',
  sections: [s142, s143, s144, s145],
  challenge,
  worksheet,
}
