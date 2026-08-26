// Introduction to Algebra chapter 22 — variations for section 22.3
// (Symmetry). All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was worked twice by two genuinely different routes. When the two
//    numbers come out rational they were found by factoring $t^2 - st + p$ and
//    substituted back; when they come out irrational the value was re-derived
//    from a SECOND identity instead — $(x+y)^2 - 2xy$ against a direct
//    factorisation, $(r+k)(s+k)$ against evaluating the quadratic at $-k$,
//    $\frac{r}{s} + \frac{s}{r}$ against $\frac{(r+s)^2}{rs} - 2$.
//  - Every quadratic here is monic, so Vieta reads straight off the
//    coefficients: $r + s = -b$ and $rs = c$.
//  - Each distractor is one named mistake, named at the end of the solution,
//    and that mistake really does produce that choice. The traps running
//    through this section are: FORGETTING TO SUBTRACT, SUBTRACTING ONE COPY OF
//    xy, SUBTRACTING 4xy, SUBTRACTING ONLY 2xy, MATCHED THE PRODUCT ONLY,
//    MATCHED THE SUM ONLY, THE SIGN-FLIPPED PAIR, THE UPSIDE-DOWN FRACTION,
//    MULTIPLYING THE RECIPROCALS, ADDING SUM AND PRODUCT, THE PRODUCT ON TOP,
//    MULTIPLYING INSTEAD OF DIVIDING, DIVIDING THE WRONG WAY ROUND, SPOOKED BY
//    THE MINUS SIGN, SPOOKED BY THE FRACTION, SPOOKED BY THE EXPONENTS,
//    SPOOKED BY THE UNEVEN POWERS, SPOOKED BY THE MIXTURE, STOPPED AT THE
//    SQUARE, ANSWERING WITH THE ROOT, DROPPING THE CORRECTION TERM,
//    SUBTRACTING 3xy INSTEAD OF 3xy(x+y), ONE COPY OF xy(x+y), DROPPED THE
//    CROSS TERM, DROPPED THE CONSTANT, THE SIGN-FLIPPED SUM, THE SIGN-FLIPPED
//    CROSS TERM, THE ADDED CORRECTION, THE CROSS-TERM PRODUCT, FORGETTING TO
//    HALVE, DIVIDING BY THE PRODUCT SQUARED, and NO DIVISION AT ALL.
//  - No two choices inside an item name the same value.

const s223 = [
  // s3 — the flagship identity: sum and product in, $x^2 + y^2$ out. Gentle.
  [
    {
      q: 'If $x + y = 11$ and $xy = 24$, what is $x^2 + y^2$?',
      choices: ['$73$', '$121$', '$97$', '$25$'],
      answer: 0,
      solution:
        'Square the sum and correct for the cross terms: $(x + y)^2 = x^2 + 2xy + y^2$, so $x^2 + y^2 = (x + y)^2 - 2xy = 121 - 48 = 73$ ✓. Check a second, independent way by finding the numbers themselves. Running Vieta backwards, they are the roots of $t^2 - 11t + 24 = 0$, which factors as $(t - 3)(t - 8) = 0$, so the numbers are $3$ and $8$ — and $9 + 64 = 73$ ✓, with $3 + 8 = 11$ ✓ and $3 \\times 8 = 24$ ✓. (The choice $121$ is FORGETTING TO SUBTRACT the cross terms at all, which answers $(x + y)^2$; the choice $97$ is SUBTRACTING ONE COPY OF $xy$ when the expansion carries two; the choice $25$ is SUBTRACTING $4xy$, which computes $(x - y)^2$ instead — a real number here, since $8 - 3 = 5$, but not the one asked for.)',
    },
    {
      q: 'If $x + y = 15$ and $xy = 44$, what is $x^2 + y^2$?',
      choices: ['$225$', '$181$', '$137$', '$49$'],
      answer: 2,
      solution:
        'The identity does it in one line: $x^2 + y^2 = (x + y)^2 - 2xy = 225 - 88 = 137$ ✓. Check a second, independent way by digging out the numbers. They are the roots of $t^2 - 15t + 44 = 0 = (t - 4)(t - 11)$, so they are $4$ and $11$, and $16 + 121 = 137$ ✓. (The choice $225$ is FORGETTING TO SUBTRACT, leaving $(x + y)^2$; the choice $181$ is SUBTRACTING ONE COPY OF $xy$ instead of two; the choice $49$ is SUBTRACTING $4xy$, the recipe for $(x - y)^2$ — and $11 - 4 = 7$ does square to $49$, which is exactly why the slip goes unnoticed ✗.)',
    },
    {
      q: 'If $x + y = 18$ and $xy = 65$, what is $x^2 + y^2$?',
      choices: ['$324$', '$259$', '$64$', '$194$'],
      answer: 3,
      solution:
        'Use $x^2 + y^2 = (x + y)^2 - 2xy = 324 - 130 = 194$ ✓. Check a second, independent way by naming the numbers: they satisfy $t^2 - 18t + 65 = 0 = (t - 5)(t - 13)$, so they are $5$ and $13$, and $25 + 169 = 194$ ✓ with $5 + 13 = 18$ ✓. (The choice $324$ is FORGETTING TO SUBTRACT; the choice $259$ is SUBTRACTING ONE COPY OF $xy$; the choice $64$ is SUBTRACTING $4xy$, which lands on $(x - y)^2 = (13 - 5)^2$.)',
    },
  ],
  // s3 — Vieta run backwards: a sum and a product name a pair, and a candidate
  // pair has to pass BOTH tests.
  [
    {
      q: 'Two numbers have sum $13$ and product $36$. What are they?',
      choices: ['$3$ and $12$', '$4$ and $9$', '$6$ and $7$', '$-4$ and $-9$'],
      answer: 1,
      solution:
        'Run Vieta backwards: two numbers with sum $13$ and product $36$ are the roots of $t^2 - 13t + 36 = 0$. Factor it — we need two numbers multiplying to $36$ and adding to $13$, and $4$ and $9$ do it: $(t - 4)(t - 9) = 0$ ✓. Check a second, independent way without factoring, by testing the pair directly against both requirements: $4 + 9 = 13$ ✓ and $4 \\times 9 = 36$ ✓, and since a quadratic has at most two roots, no other pair can work. (The choice $3$ and $12$ is MATCHED THE PRODUCT ONLY — $3 \\times 12 = 36$ ✓ but $3 + 12 = 15$ ✗; the choice $6$ and $7$ is MATCHED THE SUM ONLY — $6 + 7 = 13$ ✓ but $6 \\times 7 = 42$ ✗; the choice $-4$ and $-9$ is THE SIGN-FLIPPED PAIR, from writing $t^2 + 13t + 36 = 0$, and its sum is $-13$ ✗.)',
    },
    {
      q: 'Priya is thinking of two numbers whose sum is $16$ and whose product is $60$. What are her numbers?',
      choices: ['$5$ and $12$', '$7$ and $9$', '$6$ and $10$', '$-6$ and $-10$'],
      answer: 2,
      solution:
        'Her numbers are the roots of $t^2 - 16t + 60 = 0$. We want a factor pair of $60$ adding to $16$: the pairs are $1 \\cdot 60$, $2 \\cdot 30$, $3 \\cdot 20$, $4 \\cdot 15$, $5 \\cdot 12$, $6 \\cdot 10$, and only $6 + 10$ hits $16$, so $(t - 6)(t - 10) = 0$ ✓. Check a second, independent way by substituting into both conditions: $6 + 10 = 16$ ✓ and $6 \\times 10 = 60$ ✓. (The choice $5$ and $12$ is MATCHED THE PRODUCT ONLY, since $5 + 12 = 17$ ✗; the choice $7$ and $9$ is MATCHED THE SUM ONLY, since $7 \\times 9 = 63$ ✗; the choice $-6$ and $-10$ is THE SIGN-FLIPPED PAIR — the product survives the double sign change but the sum becomes $-16$ ✗.)',
    },
    {
      q: 'Rohan writes down two numbers with sum $19$ and product $84$. Which pair did he write?',
      choices: ['$6$ and $14$', '$8$ and $11$', '$-7$ and $-12$', '$7$ and $12$'],
      answer: 3,
      solution:
        'The pair are the roots of $t^2 - 19t + 84 = 0$. Hunt through the factor pairs of $84$ for one that adds to $19$: $1 + 84$, $2 + 42$, $3 + 28$, $4 + 21$, $6 + 14$, $7 + 12$ — and $7 + 12 = 19$ ✓, so $(t - 7)(t - 12) = 0$. Check a second, independent way by testing the pair against both conditions straight away: $7 + 12 = 19$ ✓ and $7 \\times 12 = 84$ ✓. (The choice $6$ and $14$ is MATCHED THE PRODUCT ONLY, with sum $20$ ✗; the choice $8$ and $11$ is MATCHED THE SUM ONLY, with product $88$ ✗; the choice $-7$ and $-12$ is THE SIGN-FLIPPED PAIR, whose sum is $-19$ ✗.)',
    },
  ],
  // s3 — the reciprocal identity $\frac{1}{x} + \frac{1}{y} = \frac{x+y}{xy}$,
  // read forwards in two of the three and backwards in the middle one.
  [
    {
      q: 'If $x + y = 14$ and $xy = 48$, what is $\\frac{1}{x} + \\frac{1}{y}$?',
      choices: ['$\\frac{7}{24}$', '$\\frac{24}{7}$', '$\\frac{1}{48}$', '$62$'],
      answer: 0,
      solution:
        'Put the two fractions over a common denominator: $\\frac{1}{x} + \\frac{1}{y} = \\frac{y}{xy} + \\frac{x}{xy} = \\frac{x + y}{xy} = \\frac{14}{48} = \\frac{7}{24}$ ✓ — the SUM lands on top, the PRODUCT on the bottom. Check a second, independent way by finding the numbers and adding the reciprocals outright: they are the roots of $t^2 - 14t + 48 = 0 = (t - 6)(t - 8)$, so they are $6$ and $8$, and $\\frac{1}{6} + \\frac{1}{8} = \\frac{4}{24} + \\frac{3}{24} = \\frac{7}{24}$ ✓. (The choice $\\frac{24}{7}$ is THE UPSIDE-DOWN FRACTION, product over sum, and it is bigger than $1$ even though both reciprocals here are small ✗; the choice $\\frac{1}{48}$ is MULTIPLYING THE RECIPROCALS, $\\frac{1}{x} \\cdot \\frac{1}{y} = \\frac{1}{xy}$, when the question adds them; the choice $62$ is ADDING SUM AND PRODUCT, $14 + 48$.)',
    },
    {
      q: 'Two numbers satisfy $x + y = 17$ and $\\frac{1}{x} + \\frac{1}{y} = \\frac{17}{6}$. What is $xy$?',
      choices: ['$\\frac{289}{6}$', '$6$', '$17$', '$\\frac{1}{6}$'],
      answer: 1,
      solution:
        'The identity $\\frac{1}{x} + \\frac{1}{y} = \\frac{x + y}{xy}$ turns the second fact into $\\frac{17}{xy} = \\frac{17}{6}$, so $xy = \\frac{x + y}{\\frac{1}{x} + \\frac{1}{y}} = \\frac{17}{\\frac{17}{6}} = 17 \\times \\frac{6}{17} = 6$ ✓. Check a second, independent way without the identity at all: multiply $\\frac{1}{x} + \\frac{1}{y} = \\frac{17}{6}$ through by $6xy$ to clear every denominator, giving $6y + 6x = 17xy$, that is $6(x + y) = 17xy$. With $x + y = 17$ that reads $102 = 17xy$, so $xy = 6$ ✓. (These two numbers are irrational — $t^2 - 17t + 6 = 0$ has discriminant $265$, which is not a perfect square — so there is no clean pair to substitute, and the identity is what does the verifying.) (The choice $17$ is THE PRODUCT ON TOP, reading $\\frac{17}{6}$ as $\\frac{xy}{x+y}$ when the sum is what sits upstairs; the choice $\\frac{289}{6}$ is MULTIPLYING INSTEAD OF DIVIDING, $17 \\times \\frac{17}{6}$; the choice $\\frac{1}{6}$ is DIVIDING THE WRONG WAY ROUND, $\\frac{17/6}{17}$.)',
    },
    {
      q: 'If $x + y = 20$ and $xy = 64$, what is $\\frac{1}{x} + \\frac{1}{y}$?',
      choices: ['$\\frac{16}{5}$', '$\\frac{1}{64}$', '$84$', '$\\frac{5}{16}$'],
      answer: 3,
      solution:
        'Combine over a common denominator: $\\frac{1}{x} + \\frac{1}{y} = \\frac{x + y}{xy} = \\frac{20}{64} = \\frac{5}{16}$ ✓. Check a second, independent way by finding the numbers and adding directly: $t^2 - 20t + 64 = 0 = (t - 4)(t - 16)$, so they are $4$ and $16$, and $\\frac{1}{4} + \\frac{1}{16} = \\frac{4}{16} + \\frac{1}{16} = \\frac{5}{16}$ ✓. (The choice $\\frac{16}{5}$ is THE UPSIDE-DOWN FRACTION; the choice $\\frac{1}{64}$ is MULTIPLYING THE RECIPROCALS instead of adding them; the choice $84$ is ADDING SUM AND PRODUCT, $20 + 64$.)',
    },
  ],
  // s3 — spotting the one expression the swap actually changes. The three
  // symmetric decoys are dressed up to LOOK lopsided.
  [
    {
      q: 'Which expression is NOT symmetric in $x$ and $y$ (that is, swapping $x$ and $y$ changes it)?',
      choices: ['$x^2 - y^2$', '$x^2y^2$', '$\\frac{x}{y} + \\frac{y}{x}$', '$(x - y)^2$'],
      answer: 0,
      solution:
        'Swap $x$ and $y$ in each one and see what comes back. $x^2 - y^2$ becomes $y^2 - x^2$, its own negation — different unless it happens to be $0$, so this is the odd one out ✓. Meanwhile $x^2y^2$ becomes $y^2x^2$, unchanged ✓; $\\frac{x}{y} + \\frac{y}{x}$ becomes $\\frac{y}{x} + \\frac{x}{y}$, the same two pieces in the other order ✓; and $(x - y)^2$ becomes $(y - x)^2$, which is the same number because squaring erases the sign ✓. Check a second, independent way with a concrete pair, $x = 5$ and $y = 2$, then $x = 2$ and $y = 5$: $x^2 - y^2$ reads $21$ then $-21$ ✗ different, while $x^2y^2$ reads $100$ both times, $\\frac{x}{y} + \\frac{y}{x}$ reads $\\frac{29}{10}$ both times, and $(x - y)^2$ reads $9$ both times ✓. (Choosing $(x - y)^2$ is being SPOOKED BY THE MINUS SIGN — the square repairs the damage, which is exactly why $(x - y)^2 = (x + y)^2 - 4xy$ can be written from the sum and the product; choosing $\\frac{x}{y} + \\frac{y}{x}$ is being SPOOKED BY THE FRACTION, when the swap is already built into the pair of terms; choosing $x^2y^2$ is being SPOOKED BY THE EXPONENTS, when a product of squares is as even-handed as $xy$ itself.)',
    },
    {
      q: 'Exactly one of these expressions changes when $x$ and $y$ trade places. Which one?',
      choices: ['$x^3 + y^3$', '$\\frac{x}{y}$', '$x^2y + xy^2$', '$|x - y|$'],
      answer: 1,
      solution:
        'Apply the swap to each. $\\frac{x}{y}$ becomes $\\frac{y}{x}$, its own reciprocal, and a number and its reciprocal agree only in the special cases $\\pm 1$ — so this is the one that changes ✓. The others hold: $x^3 + y^3$ becomes $y^3 + x^3$ ✓; $x^2y + xy^2$ becomes $y^2x + yx^2$, the same two terms reordered ✓ (it is just $xy(x + y)$, built from the product and the sum); $|x - y|$ becomes $|y - x|$, and absolute value throws away the sign ✓. Check a second, independent way with $x = 6$ and $y = 3$ against $x = 3$ and $y = 6$: $\\frac{x}{y}$ reads $2$ then $\\frac{1}{2}$ ✗, while $x^3 + y^3$ reads $243$ both ways, $x^2y + xy^2$ reads $162$ both ways, and $|x - y|$ reads $3$ both ways ✓. (Choosing $|x - y|$ is being SPOOKED BY THE MINUS SIGN, but the bars undo the flip; choosing $x^2y + xy^2$ is being SPOOKED BY THE UNEVEN POWERS, when the two terms are swaps of each other; choosing $x^3 + y^3$ is being SPOOKED BY THE EXPONENTS, when a plain sum never notices the order of its terms.)',
    },
    {
      q: 'Which of these expressions fails to survive swapping $x$ and $y$?',
      choices: ['$xy + x + y$', '$x^4 + y^4$', '$2x + y$', '$\\frac{1}{x^2} + \\frac{1}{y^2}$'],
      answer: 2,
      solution:
        'Swap and compare. $2x + y$ becomes $2y + x$, and those agree only when $x = y$ — so it is not symmetric ✓. The rest are untouched: $xy + x + y$ becomes $yx + y + x$ ✓; $x^4 + y^4$ becomes $y^4 + x^4$ ✓; $\\frac{1}{x^2} + \\frac{1}{y^2}$ becomes $\\frac{1}{y^2} + \\frac{1}{x^2}$ ✓. Check a second, independent way with $x = 3$ and $y = 1$ against $x = 1$ and $y = 3$: $2x + y$ reads $7$ then $5$ ✗, while $xy + x + y$ reads $7$ both ways, $x^4 + y^4$ reads $82$ both ways, and $\\frac{1}{x^2} + \\frac{1}{y^2}$ reads $\\frac{10}{9}$ both ways ✓. The tell is the lopsided COEFFICIENT: $x$ is being treated better than $y$. (Choosing $\\frac{1}{x^2} + \\frac{1}{y^2}$ is being SPOOKED BY THE FRACTION; choosing $xy + x + y$ is being SPOOKED BY THE MIXTURE, when the expression is literally the product plus the sum, our two symmetric building blocks; choosing $x^4 + y^4$ is being SPOOKED BY THE EXPONENTS.)',
    },
  ],
  // s3 — Vieta straight off a monic quadratic, then $r^2 + s^2$. The roots are
  // deliberately irrational, so the identity is the only way through.
  [
    {
      q: 'Let $r$ and $s$ be the roots of $x^2 - 16x + 5 = 0$. What is $r^2 + s^2$?',
      choices: ['$256$', '$246$', '$251$', '$236$'],
      answer: 1,
      solution:
        'Vieta reads the coefficients of a monic quadratic straight off: $r + s = 16$ and $rs = 5$. Then $r^2 + s^2 = (r + s)^2 - 2rs = 256 - 10 = 246$ ✓. The roots themselves are irrational — the discriminant is $256 - 20 = 236$, and $15^2 = 225$ while $16^2 = 256$, so $236$ is not a perfect square — which means there is no tidy pair to substitute. Check a second, independent way through a different identity: $(r - s)^2 = (r + s)^2 - 4rs = 256 - 20 = 236$, and adding $2rs = 10$ to that turns $r^2 - 2rs + s^2$ into $r^2 + s^2$, giving $236 + 10 = 246$ ✓ — the same total reached from the DIFFERENCE side instead of the sum side. (The choice $256$ is FORGETTING TO SUBTRACT, answering $(r + s)^2$; the choice $251$ is SUBTRACTING ONE COPY OF $rs$; the choice $236$ is SUBTRACTING $4rs$, which is $(r - s)^2$ rather than $r^2 + s^2$.)',
    },
    {
      q: 'Let $r$ and $s$ be the roots of $x^2 - 18x + 7 = 0$. What is $r^2 + s^2$?',
      choices: ['$324$', '$317$', '$310$', '$296$'],
      answer: 2,
      solution:
        'Vieta gives $r + s = 18$ and $rs = 7$, so $r^2 + s^2 = (r + s)^2 - 2rs = 324 - 14 = 310$ ✓, and the quadratic formula never gets used. Check a second, independent way from the difference identity: $(r - s)^2 = (r + s)^2 - 4rs = 324 - 28 = 296$, and $r^2 + s^2 = (r - s)^2 + 2rs = 296 + 14 = 310$ ✓. The roots are irrational — the discriminant $296$ sits between $17^2 = 289$ and $18^2 = 324$ — yet this symmetric combination is a whole number, which is the whole point of the technique. (The choice $324$ is FORGETTING TO SUBTRACT; the choice $317$ is SUBTRACTING ONE COPY OF $rs$; the choice $296$ is SUBTRACTING $4rs$, the recipe for $(r - s)^2$.)',
    },
    {
      q: 'Let $r$ and $s$ be the roots of $x^2 - 11x + 3 = 0$. What is $r^2 + s^2$?',
      choices: ['$121$', '$118$', '$109$', '$115$'],
      answer: 3,
      solution:
        'Vieta: $r + s = 11$ and $rs = 3$. Then $r^2 + s^2 = (r + s)^2 - 2rs = 121 - 6 = 115$ ✓. Check a second, independent way through the difference: $(r - s)^2 = (r + s)^2 - 4rs = 121 - 12 = 109$, and restoring the two copies of $rs$ gives $r^2 + s^2 = 109 + 6 = 115$ ✓. The discriminant is $109$, not a perfect square, so the roots are irrational and no substitution is available — the identities carry the whole argument. (The choice $121$ is FORGETTING TO SUBTRACT; the choice $118$ is SUBTRACTING ONE COPY OF $rs$; the choice $109$ is SUBTRACTING $4rs$, which answers $(r - s)^2$.)',
    },
  ],
  // s3 — the difference identity, which needs $4xy$ and not $2xy$. The middle
  // one asks for the size of the difference, not its square.
  [
    {
      q: 'If $x + y = 15$ and $xy = 50$, what is $(x - y)^2$?',
      choices: ['$25$', '$125$', '$5$', '$225$'],
      answer: 0,
      solution:
        'Expand and rebuild: $(x - y)^2 = x^2 - 2xy + y^2$, and since $(x + y)^2 = x^2 + 2xy + y^2$, the two differ by $4xy$. So $(x - y)^2 = (x + y)^2 - 4xy = 225 - 200 = 25$ ✓. Check a second, independent way by finding the numbers: $t^2 - 15t + 50 = 0 = (t - 5)(t - 10)$, so they are $5$ and $10$, and $(5 - 10)^2 = (-5)^2 = 25$ ✓. (The choice $125$ is SUBTRACTING ONLY $2xy$, which produces $x^2 + y^2 = 25 + 100$ instead of the squared difference; the choice $5$ is ANSWERING WITH THE ROOT, $|x - y|$, when the question asked for its square; the choice $225$ is FORGETTING TO SUBTRACT at all.)',
    },
    {
      q: 'If $x + y = 19$ and $xy = 78$, what is $|x - y|$?',
      choices: ['$49$', '$7$', '$205$', '$19$'],
      answer: 1,
      solution:
        'Get the square first, then take the root: $(x - y)^2 = (x + y)^2 - 4xy = 361 - 312 = 49$, so $|x - y| = \\sqrt{49} = 7$ ✓. Check a second, independent way by pinning down the numbers: $t^2 - 19t + 78 = 0 = (t - 6)(t - 13)$, so they are $6$ and $13$, and $|6 - 13| = 7$ ✓ — with $6 + 13 = 19$ ✓ and $6 \\times 13 = 78$ ✓ confirming the pair. (The choice $49$ is STOPPED AT THE SQUARE, giving $(x - y)^2$ when the question asked for the size of the difference; the choice $205$ is SUBTRACTING ONLY $2xy$, which is $x^2 + y^2 = 36 + 169$; the choice $19$ is FORGETTING TO SUBTRACT under the radical, since $\\sqrt{(x+y)^2} = x + y$ hands back the sum.)',
    },
    {
      q: 'If $x + y = 13$ and $xy = 22$, what is $(x - y)^2$?',
      choices: ['$169$', '$125$', '$9$', '$81$'],
      answer: 3,
      solution:
        'The difference identity needs four copies of the product: $(x - y)^2 = (x + y)^2 - 4xy = 169 - 88 = 81$ ✓. Check a second, independent way by finding the numbers: $t^2 - 13t + 22 = 0 = (t - 2)(t - 11)$, so they are $2$ and $11$, and $(2 - 11)^2 = 81$ ✓. (The choice $125$ is SUBTRACTING ONLY $2xy$, which computes $x^2 + y^2 = 4 + 121$; the choice $9$ is ANSWERING WITH THE ROOT — $|x - y| = 9$ is true, but it is not the square; the choice $169$ is FORGETTING TO SUBTRACT.)',
    },
  ],
  // s3 — the cube identity $x^3 + y^3 = (x+y)^3 - 3xy(x+y)$, where the whole
  // difficulty is remembering how big the correction term is.
  [
    {
      q: 'If $x + y = 17$ and $xy = 60$, what is $x^3 + y^3$?',
      choices: ['$1853$', '$4913$', '$4733$', '$3893$'],
      answer: 0,
      solution:
        'Expanding gives $(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$, and the two middle terms collect into $3xy(x + y)$. So $x^3 + y^3 = (x + y)^3 - 3xy(x + y) = 17^3 - 3(60)(17) = 4913 - 3060 = 1853$ ✓. Check a second, independent way by cubing the numbers themselves: $t^2 - 17t + 60 = 0 = (t - 5)(t - 12)$, so they are $5$ and $12$, and $125 + 1728 = 1853$ ✓. (The choice $4913$ is DROPPING THE CORRECTION TERM, hoping $(x + y)^3$ equals $x^3 + y^3$; the choice $4733$ is SUBTRACTING $3xy$ INSTEAD OF $3xy(x+y)$, taking away $180$ when the middle terms weigh $3060$; the choice $3893$ is ONE COPY OF $xy(x+y)$ removed instead of three.)',
    },
    {
      q: 'If $x + y = 14$ and $xy = 40$, what is $x^3 + y^3$?',
      choices: ['$2744$', '$2624$', '$1064$', '$2184$'],
      answer: 2,
      solution:
        'Use $x^3 + y^3 = (x + y)^3 - 3xy(x + y) = 14^3 - 3(40)(14) = 2744 - 1680 = 1064$ ✓. Check a second, independent way by finding and cubing: $t^2 - 14t + 40 = 0 = (t - 4)(t - 10)$, so the numbers are $4$ and $10$, and $64 + 1000 = 1064$ ✓. (The choice $2744$ is DROPPING THE CORRECTION TERM entirely; the choice $2624$ is SUBTRACTING $3xy$ INSTEAD OF $3xy(x+y)$, taking off only $120$; the choice $2184$ is ONE COPY OF $xy(x+y)$, $2744 - 560$, when the expansion leaves three.)',
    },
    {
      q: 'If $x + y = 15$ and $xy = 26$, what is $x^3 + y^3$?',
      choices: ['$3375$', '$3297$', '$2985$', '$2205$'],
      answer: 3,
      solution:
        'Apply the cube identity: $x^3 + y^3 = (x + y)^3 - 3xy(x + y) = 15^3 - 3(26)(15) = 3375 - 1170 = 2205$ ✓. Check a second, independent way by locating the numbers and cubing them: $t^2 - 15t + 26 = 0 = (t - 2)(t - 13)$, so they are $2$ and $13$, and $8 + 2197 = 2205$ ✓. (The choice $3375$ is DROPPING THE CORRECTION TERM; the choice $3297$ is SUBTRACTING $3xy$ INSTEAD OF $3xy(x+y)$, a mere $78$; the choice $2985$ is ONE COPY OF $xy(x+y)$, $3375 - 390$.)',
    },
  ],
  // s3 — an unfamiliar shifted product turned into sum-and-product material by
  // expanding, with the "plug the shift into the quadratic" trick as the check.
  [
    {
      q: 'Let $r$ and $s$ be the roots of $x^2 - 18x + 5 = 0$. What is $(r + 3)(s + 3)$?',
      choices: ['$68$', '$14$', '$59$', '$-40$'],
      answer: 0,
      solution:
        'Expand before panicking: $(r + 3)(s + 3) = rs + 3r + 3s + 9 = rs + 3(r + s) + 9$, which is pure sum-and-product material. Vieta gives $r + s = 18$ and $rs = 5$, so the value is $5 + 54 + 9 = 68$ ✓. Check a second, independent way with a trick that never mentions Vieta: a monic quadratic factors as $x^2 - 18x + 5 = (x - r)(x - s)$, so substituting $x = -3$ gives $(-3 - r)(-3 - s) = (r + 3)(s + 3)$, because the two sign flips cancel. That substitution reads $9 + 54 + 5 = 68$ ✓. The roots are irrational — the discriminant is $324 - 20 = 304$ — so this identity route is the verification. (The choice $14$ is DROPPED THE CROSS TERM, keeping only $rs + 9$; the choice $59$ is DROPPED THE CONSTANT, stopping at $rs + 3(r+s)$; the choice $-40$ is THE SIGN-FLIPPED SUM, reading $r + s = -18$ off the quadratic instead of $18$.)',
    },
    {
      q: 'Let $r$ and $s$ be the roots of $x^2 - 11x + 6 = 0$. What is $(r - 2)(s - 2)$?',
      choices: ['$32$', '$-12$', '$-16$', '$10$'],
      answer: 1,
      solution:
        'Expand: $(r - 2)(s - 2) = rs - 2r - 2s + 4 = rs - 2(r + s) + 4$. Vieta gives $r + s = 11$ and $rs = 6$, so the value is $6 - 22 + 4 = -12$ ✓ — negative, which makes sense: one root is near $0.57$ and the other near $10.4$, so one factor is negative and the other positive. Check a second, independent way by substituting into the quadratic itself: since $x^2 - 11x + 6 = (x - r)(x - s)$, putting $x = 2$ gives $(2 - r)(2 - s) = 4 - 22 + 6 = -12$, and $(2 - r)(2 - s) = (r - 2)(s - 2)$ because both factors flip sign ✓. The discriminant is $121 - 24 = 97$, not a perfect square, so the roots are irrational and there is no clean pair to substitute. (The choice $32$ is THE SIGN-FLIPPED CROSS TERM, $rs + 2(r+s) + 4$, which is what $(r + 2)(s + 2)$ would give; the choice $-16$ is DROPPED THE CONSTANT, stopping at $6 - 22$; the choice $10$ is DROPPED THE CROSS TERM, keeping only $rs + 4$.)',
    },
    {
      q: 'Let $r$ and $s$ be the roots of $x^2 - 14x + 3 = 0$. What is $(r + 1)(s + 1)$?',
      choices: ['$4$', '$17$', '$18$', '$-10$'],
      answer: 2,
      solution:
        'Expand first: $(r + 1)(s + 1) = rs + r + s + 1$. Vieta gives $r + s = 14$ and $rs = 3$, so the value is $3 + 14 + 1 = 18$ ✓. Check a second, independent way by evaluating the quadratic at $x = -1$: from $x^2 - 14x + 3 = (x - r)(x - s)$ we get $(-1 - r)(-1 - s) = (r + 1)(s + 1)$, and the left side is $1 + 14 + 3 = 18$ ✓. The discriminant is $196 - 12 = 184$, not a perfect square, so the roots are irrational and the identity does the verifying. (The choice $4$ is DROPPED THE CROSS TERM, $rs + 1$; the choice $17$ is DROPPED THE CONSTANT, $rs + (r + s)$; the choice $-10$ is THE SIGN-FLIPPED SUM, using $r + s = -14$.)',
    },
  ],
  // s3 — two steps: recover the product from the sum and $x^2 + y^2$ first,
  // THEN run the cube identity. The halving is where students fall.
  [
    {
      q: 'If $x + y = 20$ and $x^2 + y^2 = 328$, what is $x^3 + y^3$?',
      choices: ['$6560$', '$5840$', '$8000$', '$3680$'],
      answer: 1,
      solution:
        'The cube identity needs the product, which is not given, so recover it first: $(x + y)^2 = x^2 + 2xy + y^2$ reads $400 = 328 + 2xy$, so $2xy = 72$ and $xy = 36$. Now $x^3 + y^3 = (x + y)^3 - 3xy(x + y) = 8000 - 3(36)(20) = 8000 - 2160 = 5840$ ✓. Check a second, independent way by finding the numbers and cubing them: they are the roots of $t^2 - 20t + 36 = 0 = (t - 2)(t - 18)$, so they are $2$ and $18$, and indeed $4 + 324 = 328$ ✓ and $8 + 5832 = 5840$ ✓. (The choice $6560$ is THE CROSS-TERM PRODUCT, $(x + y)(x^2 + y^2) = 20 \\times 328$, which is $x^3 + y^3$ plus the leftovers $x^2y + xy^2$; the choice $8000$ is DROPPING THE CORRECTION TERM and answering $(x + y)^3$; the choice $3680$ is FORGETTING TO HALVE, taking $xy = 400 - 328 = 72$ and running the identity with double the product.)',
    },
    {
      q: 'If $x + y = 13$ and $x^2 + y^2 = 89$, what is $x^3 + y^3$?',
      choices: ['$1157$', '$2197$', '$637$', '$-923$'],
      answer: 2,
      solution:
        'Recover the product first: $169 = 89 + 2xy$, so $2xy = 80$ and $xy = 40$. Then $x^3 + y^3 = 13^3 - 3(40)(13) = 2197 - 1560 = 637$ ✓. Check a second, independent way by identifying the numbers: $t^2 - 13t + 40 = 0 = (t - 5)(t - 8)$, so they are $5$ and $8$ — and $25 + 64 = 89$ ✓ confirms the given, while $125 + 512 = 637$ ✓ confirms the answer. (The choice $1157$ is THE CROSS-TERM PRODUCT, $13 \\times 89$; the choice $2197$ is DROPPING THE CORRECTION TERM; the choice $-923$ is FORGETTING TO HALVE, using $xy = 80$, which drives the answer negative — an impossibility for two positive numbers ✗.)',
    },
    {
      q: 'If $x + y = 16$ and $x^2 + y^2 = 178$, what is $x^3 + y^3$?',
      choices: ['$2848$', '$4096$', '$352$', '$2224$'],
      answer: 3,
      solution:
        'First get the product: $256 = 178 + 2xy$, so $2xy = 78$ and $xy = 39$. Then $x^3 + y^3 = 16^3 - 3(39)(16) = 4096 - 1872 = 2224$ ✓. Check a second, independent way by naming the numbers: $t^2 - 16t + 39 = 0 = (t - 3)(t - 13)$, so they are $3$ and $13$, giving $9 + 169 = 178$ ✓ and $27 + 2197 = 2224$ ✓. (The choice $2848$ is THE CROSS-TERM PRODUCT, $16 \\times 178$, which overshoots by $x^2y + xy^2$; the choice $4096$ is DROPPING THE CORRECTION TERM; the choice $352$ is FORGETTING TO HALVE, running the identity with $xy = 78$.)',
    },
  ],
  // s3 — the hardest slot: two layers of symmetry, where a quotient expression
  // has to be rebuilt from $r + s$ and $rs$ before anything can be computed.
  [
    {
      q: 'Let $r$ and $s$ be the roots of $x^2 - 19x + 1 = 0$. What is $\\frac{r}{s} + \\frac{s}{r}$?',
      choices: ['$359$', '$361$', '$357$', '$363$'],
      answer: 0,
      solution:
        'Combine the two fractions over $rs$: $\\frac{r}{s} + \\frac{s}{r} = \\frac{r^2 + s^2}{rs}$. Vieta gives $r + s = 19$ and $rs = 1$, so $r^2 + s^2 = (r + s)^2 - 2rs = 361 - 2 = 359$, and dividing by $rs = 1$ leaves $359$ ✓. Check a second, independent way by rewriting the whole expression before any numbers go in: $\\frac{r^2 + s^2}{rs} = \\frac{(r + s)^2 - 2rs}{rs} = \\frac{(r + s)^2}{rs} - 2 = \\frac{361}{1} - 2 = 359$ ✓ — the correction has become a bare $-2$ rather than a subtraction inside the numerator. The discriminant is $361 - 4 = 357$, not a perfect square, so the roots are irrational and these identities are the verification. (The choice $361$ is FORGETTING TO SUBTRACT the $2rs$; the choice $357$ is SUBTRACTING $4rs$, which answers $\\frac{(r-s)^2}{rs}$; the choice $363$ is THE ADDED CORRECTION, a sign slip giving $\\frac{(r+s)^2}{rs} + 2$.)',
    },
    {
      q: 'Let $r$ and $s$ be the roots of $x^2 - 20x + 2 = 0$. What is $\\frac{1}{r^2} + \\frac{1}{s^2}$?',
      choices: ['$100$', '$198$', '$99$', '$98$'],
      answer: 2,
      solution:
        'Combine over the common denominator $r^2s^2$: $\\frac{1}{r^2} + \\frac{1}{s^2} = \\frac{s^2 + r^2}{(rs)^2}$. Vieta gives $r + s = 20$ and $rs = 2$, so $r^2 + s^2 = 400 - 4 = 396$ and $(rs)^2 = 4$, making the value $\\frac{396}{4} = 99$ ✓. Check a second, independent way by squaring the reciprocal sum instead: $\\left(\\frac{1}{r} + \\frac{1}{s}\\right)^2 = \\frac{1}{r^2} + \\frac{2}{rs} + \\frac{1}{s^2}$, and $\\frac{1}{r} + \\frac{1}{s} = \\frac{r + s}{rs} = \\frac{20}{2} = 10$, so $\\frac{1}{r^2} + \\frac{1}{s^2} = 10^2 - \\frac{2}{rs} = 100 - 1 = 99$ ✓ — a route through the reciprocals that never forms $r^2 + s^2$ at all. The discriminant is $400 - 8 = 392$, not a perfect square, so the roots are irrational. (The choice $100$ is FORGETTING TO SUBTRACT, answering $\\left(\\frac{1}{r} + \\frac{1}{s}\\right)^2$; the choice $198$ is dividing by $rs$ instead of DIVIDING BY THE PRODUCT SQUARED, which answers $\\frac{r}{s} + \\frac{s}{r}$; the choice $98$ is SUBTRACTING $4rs$ in the numerator, $\\frac{392}{4}$.)',
    },
    {
      q: 'Let $r$ and $s$ be the roots of $x^2 - 17x + 17 = 0$. What is $\\frac{r^2}{s} + \\frac{s^2}{r}$?',
      choices: ['$289$', '$14$', '$4046$', '$238$'],
      answer: 3,
      solution:
        'Put both terms over $rs$: $\\frac{r^2}{s} + \\frac{s^2}{r} = \\frac{r^3 + s^3}{rs}$. Vieta gives $r + s = 17$ and $rs = 17$, so the cube identity gives $r^3 + s^3 = (r + s)^3 - 3rs(r + s) = 4913 - 3(17)(17) = 4913 - 867 = 4046$, and dividing by $rs = 17$ gives $\\frac{4046}{17} = 238$ ✓. Check a second, independent way through the factorisation of a sum of cubes: $r^3 + s^3 = (r + s)(r^2 - rs + s^2)$, so $\\frac{r^3 + s^3}{rs} = \\frac{(r+s)(r^2 - rs + s^2)}{rs}$, and here $r + s$ and $rs$ are both $17$, so they cancel outright and the answer is simply $r^2 - rs + s^2$. That equals $(289 - 34) - 17 = 255 - 17 = 238$ ✓ — reached without ever computing $4913$. The discriminant is $289 - 68 = 221$, not a perfect square, so the roots are irrational. (The choice $289$ is DROPPING THE CORRECTION TERM, $\\frac{(r+s)^3}{rs} = \\frac{4913}{17}$; the choice $14$ is DIVIDING BY THE PRODUCT SQUARED, $\\frac{4046}{289}$, when only one copy of $rs$ sits in the denominator; the choice $4046$ is NO DIVISION AT ALL, answering $r^3 + s^3$ and leaving the denominator behind.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 22,
  sections: {
    '22.3': s223,
  },
}
