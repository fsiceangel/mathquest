// Introduction to Algebra chapter 10 — variations for section 10.5,
// "Extensions and Applications". All problems and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every key was re-derived from the question text alone and then checked
//    FORWARD: each root is substituted back into the ORIGINAL equation (or back
//    into the story), and every factorization is multiplied back out.
//  - Word problems here almost always produce two algebraic roots. When only
//    one fits the story, the solution NAMES the rejected root and says why the
//    story refuses it — a length cannot be negative, a count must be positive,
//    you cannot trim 19 inches off a 9-inch side.
//  - Three traps run through the whole section: STOPPING AT $y$ instead of
//    finishing the trip back to $x$, ACCEPTING a negative value of $x^2$, and
//    ANSWERING THE WRONG QUANTITY (a leg instead of the area, the new side
//    instead of the increase). Each distractor is one named mistake.
//  - No two choices inside an item name the same value, and no two are the same
//    string.

const s105 = [
  // p1 — carry out a substitution correctly (y = x^2, or y = a repeated expression)
  [
    {
      q: 'To solve $x^4 - 10x^2 + 9 = 0$, Marcus substitutes $y = x^2$. Which equation does he get?',
      choices: [
        '$y^2 - 10x^2 + 9 = 0$',
        '$y^4 - 10y^2 + 9 = 0$',
        '$y^2 - 10y + 9 = 0$',
        '$y^2 - 10y - 9 = 0$',
      ],
      answer: 2,
      solution:
        'A substitution has to replace the variable EVERYWHERE. Since $y = x^2$, the middle term $x^2$ becomes $y$, and the first term is $x^4 = (x^2)^2 = y^2$. So the whole equation turns into $y^2 - 10y + 9 = 0$ ✓, an ordinary quadratic Marcus already knows how to factor. (The choice $y^2 - 10x^2 + 9 = 0$ leaves a stray $x^2$ behind, so the job is only half done and the equation still has two different letters in it; the choice $y^4 - 10y^2 + 9 = 0$ just renames $x$ as $y$ instead of using $y = x^2$, which changes nothing at all; the choice $y^2 - 10y - 9 = 0$ flips the sign of the constant, but substituting never touches the coefficients.)',
    },
    {
      q: 'Nadia is solving $(x - 4)^2 + 6(x - 4) - 7 = 0$ and lets $y = x - 4$. Which equation does she get?',
      choices: [
        '$y^2 + 6y - 7 = 0$',
        '$y^2 + 6(x - 4) - 7 = 0$',
        '$(y - 4)^2 + 6(y - 4) - 7 = 0$',
        '$y^2 + 6y + 7 = 0$',
      ],
      answer: 0,
      solution:
        'The expression $x - 4$ shows up twice, once squared and once by itself. Replacing BOTH copies with $y$ gives $y^2 + 6y - 7 = 0$ ✓, which factors as $(y + 7)(y - 1) = 0$. (The choice $y^2 + 6(x - 4) - 7 = 0$ swaps only the squared copy and leaves the other one behind; the choice $(y - 4)^2 + 6(y - 4) - 7 = 0$ writes $y$ where $x$ used to be, which is renaming the variable rather than substituting for the whole expression $x - 4$; the choice $y^2 + 6y + 7 = 0$ changes the constant from $-7$ to $+7$, but a substitution copies the numbers exactly as they are.)',
    },
    {
      q: 'After letting $y = x^2$, Dario\'s equation turns into $y^2 - 7y + 12 = 0$. Which equation did he start with?',
      choices: [
        '$x^2 - 7x + 12 = 0$',
        '$x^4 - 7x + 12 = 0$',
        '$x^8 - 7x^4 + 12 = 0$',
        '$x^4 - 7x^2 + 12 = 0$',
      ],
      answer: 3,
      solution:
        'Run the substitution backwards. Wherever there is a $y$, put back $x^2$: the term $y^2$ becomes $(x^2)^2 = x^4$, and the term $7y$ becomes $7x^2$. So the original was $x^4 - 7x^2 + 12 = 0$ ✓. Check it forward: substituting $y = x^2$ into $x^4 - 7x^2 + 12 = 0$ really does give $y^2 - 7y + 12 = 0$ ✓. (The choice $x^2 - 7x + 12 = 0$ just rewrites $y$ as $x$ without undoing the squaring; the choice $x^4 - 7x + 12 = 0$ turns $y^2$ into $x^4$ but forgets that the lone $y$ is also $x^2$; the choice $x^8 - 7x^4 + 12 = 0$ undoes the substitution as if $y$ were $x^4$.)',
    },
  ],
  // p2 — undo the substitution all the way and collect ALL four roots
  [
    {
      q: 'What are ALL the solutions of $x^4 - 20x^2 + 64 = 0$?',
      choices: [
        '$x = 4$ or $x = 16$',
        '$x = 2$ or $x = 4$ only',
        '$x = 2, -2, 4, -4$',
        '$x = 4$ or $x = -4$ only',
      ],
      answer: 2,
      solution:
        'Let $y = x^2$, so the equation becomes $y^2 - 20y + 64 = 0$. We need two numbers with sum $-20$ and product $64$: those are $-4$ and $-16$, so $(y - 4)(y - 16) = 0$ and $y = 4$ or $y = 16$. But $y$ is not the answer — undo the substitution! $x^2 = 4$ gives $x = \\pm 2$ and $x^2 = 16$ gives $x = \\pm 4$, four solutions in all. Check two of them forward: $x = 2$ gives $16 - 80 + 64 = 0$ ✓ and $x = 4$ gives $256 - 320 + 64 = 0$ ✓. (The choice $x = 4$ or $x = 16$ stops at the $y$ values and never travels back to $x$; the choice $x = 2$ or $x = 4$ only keeps the positive square roots and drops both negative twins; the choice $x = \\pm 4$ only handles one of the two $y$ values and forgets the other.)',
    },
    {
      q: 'What are ALL the solutions of $x^4 - 45x^2 + 324 = 0$?',
      choices: [
        '$x = 6, -6, 3, -3$',
        '$x = 36$ or $x = 9$',
        '$x = 6$ or $x = 3$ only',
        '$x = 6$ or $x = -6$ only',
      ],
      answer: 0,
      solution:
        'With $y = x^2$ the equation becomes $y^2 - 45y + 324 = 0$. Two numbers with sum $-45$ and product $324$ are $-36$ and $-9$, so $(y - 36)(y - 9) = 0$ and $y = 36$ or $y = 9$. Now finish the trip back: $x^2 = 36$ gives $x = \\pm 6$, and $x^2 = 9$ gives $x = \\pm 3$ ✓. Check forward: $x = 6$ gives $1296 - 1620 + 324 = 0$ ✓ and $x = 3$ gives $81 - 405 + 324 = 0$ ✓. (The choice $x = 36$ or $x = 9$ reports the $y$ values as if they were $x$; the choice $x = 6$ or $x = 3$ only forgets that every positive $y$ hands back TWO values of $x$; the choice $x = \\pm 6$ only uses one $y$ value and throws the other away.)',
    },
    {
      q: 'Which of these is NOT a solution of $x^4 - 26x^2 + 25 = 0$?',
      choices: ['$x = -5$', '$x = 25$', '$x = 1$', '$x = -1$'],
      answer: 1,
      solution:
        'Substitute $y = x^2$: $y^2 - 26y + 25 = 0$ factors as $(y - 1)(y - 25) = 0$, so $y = 1$ or $y = 25$. Undoing the substitution gives $x = \\pm 1$ and $x = \\pm 5$ — four solutions, and $25$ is not among them. Check $x = 25$ forward to be sure: $25^4 - 26 \\cdot 25^2 + 25 = 390625 - 16250 + 25 = 374400 \\ne 0$, so it really is NOT a solution ✓. (The choices $x = -5$, $x = 1$, and $x = -1$ all check out: $625 - 650 + 25 = 0$ and $1 - 26 + 25 = 0$. The value $25$ is tempting precisely because it IS one of the $y$ values — reporting a $y$ as if it were an $x$ is the classic slip here.)',
    },
  ],
  // p3 — translate a story into the equation (do not confuse area with perimeter)
  [
    {
      q: 'A rectangular garden has width $w$ meters and length $w + 4$ meters, and its area is $45$ square meters. Which equation should you solve?',
      choices: [
        '$w^2 + 4w + 45 = 0$',
        '$w^2 + 4w - 45 = 0$',
        '$2w + 2(w + 4) = 45$',
        '$w^2 - 4w - 45 = 0$',
      ],
      answer: 1,
      solution:
        'Area is width times length, so $w(w + 4) = 45$. Expanding gives $w^2 + 4w = 45$, and moving the $45$ across gives $w^2 + 4w - 45 = 0$ ✓. (It factors as $(w + 9)(w - 5) = 0$, so the width is $5$ and the length is $9$: $5 \\cdot 9 = 45$ ✓.) (The choice $w^2 + 4w + 45 = 0$ ADDS the $45$ instead of subtracting it when moving it across the equals sign; the choice $2w + 2(w + 4) = 45$ would be right if $45$ were the PERIMETER — always check which measurement the story hands you; the choice $w^2 - 4w - 45 = 0$ makes the length $w - 4$ instead of $w + 4$, which describes a garden shorter than it is wide.)',
    },
    {
      q: 'A rectangular poster is $3$ cm narrower than it is tall. Its height is $h$ cm and its area is $54$ square cm. Which equation should you solve?',
      choices: [
        '$h^2 - 3h + 54 = 0$',
        '$h^2 + 3h - 54 = 0$',
        '$h^2 - 3h - 54 = 0$',
        '$2h + 2(h - 3) = 54$',
      ],
      answer: 2,
      solution:
        'The width is $3$ less than the height, so the width is $h - 3$, and area is height times width: $h(h - 3) = 54$. Expanding and moving the $54$ over gives $h^2 - 3h - 54 = 0$ ✓. (It factors as $(h - 9)(h + 6) = 0$, so $h = 9$ and the width is $6$: $9 \\cdot 6 = 54$ ✓.) (The choice $h^2 - 3h + 54 = 0$ adds the $54$ instead of subtracting it; the choice $h^2 + 3h - 54 = 0$ writes the width as $h + 3$, making the poster WIDER than it is tall, the opposite of the story; the choice $2h + 2(h - 3) = 54$ is the perimeter equation, not the area equation.)',
    },
    {
      q: 'Which of these stories leads to the equation $n^2 + 7n - 60 = 0$?',
      choices: [
        'A rectangle is $7$ cm longer than it is wide, its width is $n$ cm, and its perimeter is $60$ cm.',
        'A rectangle\'s length is $7$ cm less than its width $n$ cm, and its area is $60$ square cm.',
        'One number is $7$ more than a number $n$, and the two numbers add to $60$.',
        'A rectangle is $7$ cm longer than it is wide, its width is $n$ cm, and its area is $60$ square cm.',
      ],
      answer: 3,
      solution:
        'Work forward from the last story: the width is $n$, so the length is $n + 7$, and the area gives $n(n + 7) = 60$. Expanding and moving the $60$ across gives $n^2 + 7n - 60 = 0$ ✓ — an exact match. (It factors as $(n + 12)(n - 5) = 0$, so $n = 5$ and the length is $12$: $5 \\cdot 12 = 60$ ✓.) (The first choice uses the PERIMETER, which gives the linear equation $2n + 2(n + 7) = 60$ — no $n^2$ anywhere; the second choice makes the length $n - 7$, which multiplies out to $n^2 - 7n - 60 = 0$, with the middle sign wrong; the third choice never multiplies anything, so it gives $n + (n + 7) = 60$, another linear equation. A quadratic appears only when two quantities MULTIPLY.)',
    },
  ],
  // p4 — "a number and its square" — both roots survive
  [
    {
      q: 'A number squared is $12$ more than the number itself. Find ALL such numbers.',
      choices: ['$4$ only', '$4$ and $-3$', '$-4$ and $3$', '$4$ and $3$'],
      answer: 1,
      solution:
        'Call the number $x$. The story says $x^2 = x + 12$, so $x^2 - x - 12 = 0$. We need sum $-1$ and product $-12$: the numbers $-4$ and $3$, giving $(x - 4)(x + 3) = 0$ and $x = 4$ or $x = -3$. Now check BOTH in the story: $4^2 = 16$ and $4 + 12 = 16$ ✓; $(-3)^2 = 9$ and $-3 + 12 = 9$ ✓. Nothing here forbids negative numbers, so both survive. (The choice $4$ only throws away a perfectly good negative solution out of habit; the choice $-4$ and $3$ flips both signs, and $(-4)^2 = 16$ while $-4 + 12 = 8$, so it fails; the choice $4$ and $3$ keeps the correct $4$ but copies the $3$ straight out of the factor $x + 3$ instead of flipping it, and $9 \\ne 15$.)',
    },
    {
      q: 'The square of a number is $14$ more than $5$ times the number. Find ALL such numbers.',
      choices: ['$7$ only', '$-7$ and $2$', '$7$ and $2$', '$7$ and $-2$'],
      answer: 3,
      solution:
        'The story says $x^2 = 5x + 14$, so $x^2 - 5x - 14 = 0$. Sum $-5$ and product $-14$ give the numbers $-7$ and $2$, so $(x - 7)(x + 2) = 0$ and $x = 7$ or $x = -2$. Check both in the story: $7^2 = 49$ and $5(7) + 14 = 49$ ✓; $(-2)^2 = 4$ and $5(-2) + 14 = 4$ ✓. Both are real numbers with no rule against them, so keep both. (The choice $7$ only discards the negative solution even though the story allows it; the choice $-7$ and $2$ has both signs flipped, and $(-7)^2 = 49$ while $5(-7) + 14 = -21$; the choice $7$ and $2$ copies the $2$ out of the factor $x + 2$ without flipping it, and $4 \\ne 24$.)',
    },
    {
      q: 'One number whose square is $30$ more than the number itself is $6$. What is the other such number?',
      choices: ['$5$', '$-6$', '$-5$', '$30$'],
      answer: 2,
      solution:
        'The story says $x^2 = x + 30$, so $x^2 - x - 30 = 0$. Sum $-1$ and product $-30$ give $-6$ and $5$, so $(x - 6)(x + 5) = 0$ and the two numbers are $x = 6$ (the one we were given) and $x = -5$. Check the new one in the story: $(-5)^2 = 25$ and $-5 + 30 = 25$ ✓. (The choice $5$ has the right size but the wrong sign — it copies the $5$ out of the factor $x + 5$ instead of flipping it, and $25 \\ne 35$; the choice $-6$ just negates the number we were handed, and $36 \\ne 24$; the choice $30$ reads the constant term as if it were a solution, and $900 \\ne 60$.)',
    },
  ],
  // p5 — consecutive integers, with the negative pair rejected by the story
  [
    {
      q: 'The product of two consecutive positive integers is $110$. What is the LARGER of the two?',
      choices: ['$11$', '$10$', '$-10$', '$55$'],
      answer: 0,
      solution:
        'Let the smaller integer be $n$, so the next one is $n + 1$ and $n(n + 1) = 110$. That is $n^2 + n - 110 = 0$, and sum $1$ with product $-110$ gives $11$ and $-10$, so $(n + 11)(n - 10) = 0$ and $n = 10$ or $n = -11$. The root $n = -11$ must be REJECTED: it describes the pair $-11$ and $-10$, and the story asks for POSITIVE integers. So the integers are $10$ and $11$, and the larger is $11$. Check: $10 \\cdot 11 = 110$ ✓. (The choice $10$ names the smaller integer, answering the wrong half of the question; the choice $-10$ is the larger member of the rejected negative pair — its product is $110$ too, but the story rules it out; the choice $55$ is half of $110$, which would be right only if the two numbers were equal to each other.)',
    },
    {
      q: 'Two consecutive positive integers multiply to $156$. What are they?',
      choices: ['$13$ and $14$', '$12$ and $13$', '$-13$ and $-12$', '$12$ and $14$'],
      answer: 1,
      solution:
        'Let the smaller be $n$: then $n(n + 1) = 156$, so $n^2 + n - 156 = 0$. Sum $1$ and product $-156$ give $13$ and $-12$, so $(n + 13)(n - 12) = 0$ and $n = 12$ or $n = -13$. Reject $n = -13$, since the story asks for positive integers. The pair is $12$ and $13$, and the check is $12 \\cdot 13 = 156$ ✓. (The choice $13$ and $14$ slides one step too far, and $13 \\cdot 14 = 182$; the choice $-13$ and $-12$ is the rejected root written out — its product really is $156$, but negatives are not allowed here; the choice $12$ and $14$ is not a consecutive pair at all, and $12 \\cdot 14 = 168$.)',
    },
    {
      q: 'The product of two consecutive positive EVEN integers is $168$. What is the smaller one?',
      choices: ['$14$', '$-14$', '$84$', '$12$'],
      answer: 3,
      solution:
        'Consecutive even integers are $2$ apart, so if the smaller is $n$ the larger is $n + 2$ and $n(n + 2) = 168$. That gives $n^2 + 2n - 168 = 0$, and sum $2$ with product $-168$ gives $14$ and $-12$, so $(n + 14)(n - 12) = 0$ and $n = 12$ or $n = -14$. Reject $n = -14$, because the story asks for positive integers. The pair is $12$ and $14$, and the check is $12 \\cdot 14 = 168$ ✓. (The choice $14$ names the LARGER integer instead of the smaller; the choice $-14$ is the rejected root, the smaller member of the negative pair $-14$ and $-12$; the choice $84$ is half of $168$, which treats the two integers as if one of them were $2$.)',
    },
  ],
  // p6 — substitute for a repeated expression, then finish the trip back to x
  [
    {
      q: 'Solve $(x - 3)^2 - 7(x - 3) + 12 = 0$.',
      choices: [
        '$x = 3$ or $x = 4$',
        '$x = 0$ or $x = 1$',
        '$x = 6$ or $x = 7$',
        '$x = -3$ or $x = -4$',
      ],
      answer: 2,
      solution:
        'The expression $x - 3$ appears twice, so let $y = x - 3$. The equation becomes $y^2 - 7y + 12 = 0$, which factors as $(y - 3)(y - 4) = 0$, so $y = 3$ or $y = 4$. Now undo the substitution: $x - 3 = 3$ gives $x = 6$, and $x - 3 = 4$ gives $x = 7$. Check forward in the ORIGINAL equation: $x = 6$ gives $3^2 - 7(3) + 12 = 9 - 21 + 12 = 0$ ✓, and $x = 7$ gives $16 - 28 + 12 = 0$ ✓. (The choice $x = 3$ or $x = 4$ reports the $y$ values and never finishes the trip back; the choice $x = 0$ or $x = 1$ SUBTRACTS $3$ when undoing instead of adding it, and $x = 0$ gives $9 + 21 + 12 = 42 \\ne 0$; the choice $x = -3$ or $x = -4$ copies the numbers out of the factors with the signs unflipped and stops at $y$ as well.)',
    },
    {
      q: 'Solve $(x + 5)^2 - 2(x + 5) - 8 = 0$.',
      choices: [
        '$x = 4$ or $x = -2$',
        '$x = -1$ or $x = -7$',
        '$x = 9$ or $x = 3$',
        '$x = -4$ or $x = 2$',
      ],
      answer: 1,
      solution:
        'Let $y = x + 5$, so the equation becomes $y^2 - 2y - 8 = 0$. Sum $-2$ and product $-8$ give $-4$ and $2$, so $(y - 4)(y + 2) = 0$ and $y = 4$ or $y = -2$. Undo the substitution by SUBTRACTING $5$: $x + 5 = 4$ gives $x = -1$, and $x + 5 = -2$ gives $x = -7$. Check forward in the original: $x = -1$ gives $4^2 - 2(4) - 8 = 16 - 8 - 8 = 0$ ✓, and $x = -7$ gives $(-2)^2 - 2(-2) - 8 = 4 + 4 - 8 = 0$ ✓. (The choice $x = 4$ or $x = -2$ stops at $y$; the choice $x = 9$ or $x = 3$ ADDS $5$ to each $y$ instead of subtracting, and $x = 9$ gives $196 - 28 - 8 \\ne 0$; the choice $x = -4$ or $x = 2$ copies the numbers straight out of the factors instead of flipping them, and it stops at $y$ too.)',
    },
    {
      q: 'One solution of $(x - 6)^2 + 3(x - 6) - 10 = 0$ is $x = 8$. What is the other solution?',
      choices: ['$x = 1$', '$x = -5$', '$x = 11$', '$x = -11$'],
      answer: 0,
      solution:
        'Let $y = x - 6$. The equation becomes $y^2 + 3y - 10 = 0$, and sum $3$ with product $-10$ gives $5$ and $-2$, so $(y + 5)(y - 2) = 0$ and $y = 2$ or $y = -5$. Undo the substitution by ADDING $6$: $y = 2$ gives $x = 8$ (that is the solution we were handed) and $y = -5$ gives $x = 1$. Check the new one forward in the original: $(1 - 6)^2 + 3(1 - 6) - 10 = 25 - 15 - 10 = 0$ ✓. (The choice $x = -5$ reports the $y$ value instead of the $x$ value; the choice $x = 11$ subtracts the $-5$ instead of adding it, computing $6 - (-5)$, and $(11 - 6)^2 + 3(11 - 6) - 10 = 25 + 15 - 10 = 30 \\ne 0$; the choice $x = -11$ uses the $y$-equation\'s root sum of $-3$ on the $x$ values, but shifting the roots shifts their sum too.)',
    },
  ],
  // p7 — height model: the quadratic hits the same height twice, and both times count
  [
    {
      q: 'A firework rises so that its height after $t$ seconds is $64t - 16t^2$ feet. At what time or times is the firework $48$ feet up?',
      choices: ['$t = 1$ only', '$t = 3$ only', '$t = 1$ and $t = 3$', '$t = 2$ only'],
      answer: 2,
      solution:
        'Set the height equal to $48$: $64t - 16t^2 = 48$. Move everything to one side: $16t^2 - 64t + 48 = 0$, and divide by $16$ to get $t^2 - 4t + 3 = 0$, which factors as $(t - 1)(t - 3) = 0$. So $t = 1$ or $t = 3$. Both are real moments in the flight, so neither is rejected: check forward, $64(1) - 16(1) = 48$ ✓ and $64(3) - 16(9) = 192 - 144 = 48$ ✓. The firework passes $48$ feet going up at $t = 1$ and again coming down at $t = 3$. (The choices $t = 1$ only and $t = 3$ only each keep one half of the flight and throw the other away — nothing in the story rules either time out; the choice $t = 2$ only names the moment the firework is at its HIGHEST, which is $64$ feet, not $48$.)',
    },
    {
      q: 'A water balloon is launched from a catapult, and its height after $t$ seconds is $80t - 16t^2$ feet. When is the balloon $96$ feet high?',
      choices: ['$t = 2$ only', '$t = 2$ and $t = 3$', '$t = 2.5$ only', '$t = 0$ and $t = 5$'],
      answer: 1,
      solution:
        'Set $80t - 16t^2 = 96$ and move everything to one side: $16t^2 - 80t + 96 = 0$. Divide by $16$: $t^2 - 5t + 6 = 0$, which factors as $(t - 2)(t - 3) = 0$, so $t = 2$ or $t = 3$. Check forward: $80(2) - 16(4) = 160 - 64 = 96$ ✓ and $80(3) - 16(9) = 240 - 144 = 96$ ✓. Both times are during the flight, so both are answers. (The choice $t = 2$ only keeps the trip up and forgets the trip down; the choice $t = 2.5$ only names the peak of the flight, where the height is $100$ feet; the choice $t = 0$ and $t = 5$ solves $80t - 16t^2 = 0$ instead — those are the moments the balloon is on the GROUND, at the launch and the landing.)',
    },
    {
      q: 'A toy drone climbs and falls so that its height after $t$ seconds is $24t - 4t^2$ meters. It passes a height of $32$ meters twice. How many seconds apart are those two moments?',
      choices: ['$6$ seconds', '$4$ seconds', '$8$ seconds', '$2$ seconds'],
      answer: 3,
      solution:
        'First find the two times. Set $24t - 4t^2 = 32$, so $4t^2 - 24t + 32 = 0$, and dividing by $4$ gives $t^2 - 6t + 8 = 0$, which factors as $(t - 2)(t - 4) = 0$. So the drone is at $32$ meters at $t = 2$ and again at $t = 4$. Check forward: $24(2) - 4(4) = 48 - 16 = 32$ ✓ and $24(4) - 4(16) = 96 - 64 = 32$ ✓. The question asks for the GAP between them: $4 - 2 = 2$ seconds ✓. (The choice $6$ seconds ADDS the two times instead of subtracting them; the choice $4$ seconds reports the later time itself rather than the gap; the choice $8$ seconds multiplies the two times together.)',
    },
  ],
  // p8 — grow or shrink both dimensions by the same amount; one root is impossible
  [
    {
      q: 'A rectangular vegetable patch measures $7$ m by $5$ m. The gardener extends BOTH the length and the width by the same amount $x$ meters, and the new area is $80$ square meters. What is $x$?',
      choices: ['$x = -15$', '$x = 3$', '$x = 10$', '$x = 8$'],
      answer: 1,
      solution:
        'The new sides are $7 + x$ and $5 + x$, so $(7 + x)(5 + x) = 80$. Expanding gives $x^2 + 12x + 35 = 80$, so $x^2 + 12x - 45 = 0$. Sum $12$ and product $-45$ give $15$ and $-3$, so $(x + 15)(x - 3) = 0$ and $x = 3$ or $x = -15$. REJECT $x = -15$: you cannot extend a $5$-meter side by $-15$ meters, since that would leave a side of length $-10$. So $x = 3$, and the check is $10 \\cdot 8 = 80$ ✓. (The choice $x = -15$ reports the rejected root as if the story allowed it; the choice $x = 10$ is the new LENGTH rather than the amount added; the choice $x = 8$ is the new WIDTH — both answer a different question than the one asked.)',
    },
    {
      q: 'A square photo has sides of $6$ inches. A frame of the same width $x$ inches is added all the way around it, and the framed picture covers $100$ square inches in total. What is $x$?',
      choices: ['$x = 2$', '$x = 4$', '$x = -8$', '$x = 10$'],
      answer: 0,
      solution:
        'The frame adds $x$ inches on the left AND $x$ inches on the right, so each side of the framed picture is $6 + 2x$, and $(6 + 2x)^2 = 100$. Expanding: $4x^2 + 24x + 36 = 100$, so $4x^2 + 24x - 64 = 0$, and dividing by $4$ gives $x^2 + 6x - 16 = 0$, which factors as $(x + 8)(x - 2) = 0$. So $x = 2$ or $x = -8$. REJECT $x = -8$: a frame cannot have negative width. Check $x = 2$ forward: the framed side is $6 + 4 = 10$ and $10^2 = 100$ ✓. (The choice $x = 4$ solves $6 + x = 10$, forgetting that the frame widens the picture on BOTH sides; the choice $x = -8$ is the rejected root; the choice $x = 10$ is the outer side length, not the width of the frame.)',
    },
    {
      q: 'A sheet of poster board measures $12$ inches by $9$ inches. Mira trims the same amount $x$ inches off the length and off the width, leaving a piece with area $70$ square inches. What is $x$?',
      choices: ['$x = 19$', '$x = 7$', '$x = 10$', '$x = 2$'],
      answer: 3,
      solution:
        'After trimming, the sides are $12 - x$ and $9 - x$, so $(12 - x)(9 - x) = 70$. Expanding: $108 - 21x + x^2 = 70$, so $x^2 - 21x + 38 = 0$. Sum $-21$ and product $38$ give $-19$ and $-2$, so $(x - 19)(x - 2) = 0$ and $x = 2$ or $x = 19$. REJECT $x = 19$: you cannot trim $19$ inches off a side that is only $9$ inches long — the algebra happily multiplies $(12 - 19)(9 - 19) = (-7)(-10) = 70$, but two negative side lengths are not a real piece of poster board. So $x = 2$, and the check is $10 \\cdot 7 = 70$ ✓. (The choice $x = 19$ is that rejected root; the choice $x = 7$ is the new WIDTH and the choice $x = 10$ is the new LENGTH — both are real measurements of the trimmed piece, but neither is the amount trimmed off.)',
    },
  ],
  // p9 — hard: a negative value of x^2 must be thrown away
  [
    {
      q: 'What are ALL the real solutions of $x^4 = 5x^2 + 36$?',
      choices: [
        '$x = 3, -3, 2, -2$',
        '$x = 3$ or $x = -3$',
        '$x = 3$ only',
        '$x = 9$ or $x = -4$',
      ],
      answer: 1,
      solution:
        'Move everything to one side first: $x^4 - 5x^2 - 36 = 0$. With $y = x^2$ this is $y^2 - 5y - 36 = 0$, and sum $-5$ with product $-36$ gives $-9$ and $4$, so $(y - 9)(y + 4) = 0$ and $y = 9$ or $y = -4$. Now undo the substitution carefully. $x^2 = 9$ gives $x = \\pm 3$, but $x^2 = -4$ must be REJECTED: no real number squares to a negative. So only two solutions survive. Check forward in the original: $3^4 = 81$ and $5(9) + 36 = 81$ ✓, and $(-3)^4 = 81$ as well ✓. (The choice $x = 3, -3, 2, -2$ treats $x^2 = -4$ as if it gave $x = \\pm 2$, but $2^4 = 16$ while $5(4) + 36 = 56$; the choice $x = 3$ only drops the negative twin of a perfectly good root; the choice $x = 9$ or $x = -4$ reports the $y$ values instead of the $x$ values.)',
    },
    {
      q: 'What are ALL the real solutions of $x^4 + 5x^2 - 36 = 0$?',
      choices: [
        '$x = 2, -2, 3, -3$',
        '$x = 4$ or $x = -9$',
        '$x = 2$ or $x = -2$',
        '$x = 2$ only',
      ],
      answer: 2,
      solution:
        'Substitute $y = x^2$: the equation becomes $y^2 + 5y - 36 = 0$. Sum $5$ and product $-36$ give $9$ and $-4$, so $(y + 9)(y - 4) = 0$ and $y = 4$ or $y = -9$. Undo the substitution: $x^2 = 4$ gives $x = \\pm 2$, while $x^2 = -9$ is REJECTED, because a real square is never negative. Check forward: $2^4 + 5(2^2) - 36 = 16 + 20 - 36 = 0$ ✓ and $(-2)^4 + 5(-2)^2 - 36 = 0$ ✓. Two real solutions in all. (The choice $x = 2, -2, 3, -3$ accepts $x^2 = -9$ as if it gave $x = \\pm 3$, but $3^4 + 5(9) - 36 = 81 + 45 - 36 = 90 \\ne 0$; the choice $x = 4$ or $x = -9$ stops at the $y$ values; the choice $x = 2$ only forgets the negative twin.)',
    },
    {
      q: 'Kai substitutes $y = x^2$ into $x^4 - 2x^2 - 8 = 0$ and correctly finds $y = 4$ and $y = -2$. How many real values of $x$ do these two results give?',
      choices: ['Two', 'Four', 'One', 'Zero'],
      answer: 0,
      solution:
        'Each $y$ has to be sent back through $x^2 = y$, and the number of $x$ values depends on the sign of $y$. From $x^2 = 4$ we get $x = 2$ and $x = -2$, two values. From $x^2 = -2$ we get nothing real, since no real number squares to a negative — that root is REJECTED. So the total is two ✓. Check forward: $2^4 - 2(2^2) - 8 = 16 - 8 - 8 = 0$ ✓ and $(-2)^4 - 2(-2)^2 - 8 = 0$ ✓. (The choice Four assumes every $y$ hands back two values of $x$, which is only true for POSITIVE values of $y$; the choice One counts $x = 2$ and forgets its negative twin; the choice Zero throws away both results because one of them failed, but $y = 4$ is perfectly usable.)',
    },
  ],
  // p10 — hard: Pythagorean setup, reject the negative root, then answer the asked quantity
  [
    {
      q: 'A right triangle has legs of lengths $x$ and $x + 3$, and its hypotenuse is $15$. What is the AREA of the triangle?',
      choices: ['$108$', '$54$', '$21$', '$90$'],
      answer: 1,
      solution:
        'The Pythagorean theorem gives $x^2 + (x + 3)^2 = 15^2$, so $x^2 + x^2 + 6x + 9 = 225$, that is $2x^2 + 6x - 216 = 0$. Divide by $2$: $x^2 + 3x - 108 = 0$, and sum $3$ with product $-108$ gives $12$ and $-9$, so $(x + 12)(x - 9) = 0$ and $x = 9$ or $x = -12$. REJECT $x = -12$, because a leg cannot have a negative length. So the legs are $9$ and $12$, and the check is $81 + 144 = 225$ ✓. The area of a right triangle is half the product of its legs: $\\frac{1}{2} \\cdot 9 \\cdot 12 = 54$ ✓. (The choice $108$ multiplies the legs but forgets the $\\frac{1}{2}$ — that is the area of the whole rectangle, not the triangle; the choice $21$ ADDS the legs instead of multiplying them; the choice $90$ uses the hypotenuse in place of a leg, computing $\\frac{1}{2} \\cdot 12 \\cdot 15$, but the hypotenuse is not a leg.)',
    },
    {
      q: 'A rectangular kite frame is $7$ cm taller than it is wide, and a straight rod runs from one corner to the opposite corner, measuring $17$ cm. How TALL is the kite?',
      choices: ['$8$', '$-15$', '$15$', '$17$'],
      answer: 2,
      solution:
        'The rod is the diagonal, and it cuts the rectangle into two right triangles whose legs are the width and the height. Let the width be $x$, so the height is $x + 7$ and $x^2 + (x + 7)^2 = 17^2$. Expanding: $2x^2 + 14x + 49 = 289$, so $2x^2 + 14x - 240 = 0$, and dividing by $2$ gives $x^2 + 7x - 120 = 0$. Sum $7$ and product $-120$ give $15$ and $-8$, so $(x + 15)(x - 8) = 0$ and $x = 8$ or $x = -15$. REJECT $x = -15$: a width cannot be negative. The width is $8$, so the HEIGHT is $8 + 7 = 15$ ✓, and the check is $64 + 225 = 289 = 17^2$ ✓. (The choice $8$ is the width, not the height — the question asks for the taller measurement; the choice $-15$ is the rejected root; the choice $17$ copies the diagonal, which is the longest segment in the picture but not a side of the kite.)',
    },
    {
      q: 'A rectangular tablet screen is $4$ inches wider than it is tall, and its diagonal measures $20$ inches. What is the PERIMETER of the screen?',
      choices: ['$28$', '$192$', '$64$', '$56$'],
      answer: 3,
      solution:
        'The diagonal makes a right triangle with the height and the width. Let the height be $x$, so the width is $x + 4$ and $x^2 + (x + 4)^2 = 20^2$. Expanding: $2x^2 + 8x + 16 = 400$, so $2x^2 + 8x - 384 = 0$, and dividing by $2$ gives $x^2 + 4x - 192 = 0$. Sum $4$ and product $-192$ give $16$ and $-12$, so $(x + 16)(x - 12) = 0$ and $x = 12$ or $x = -16$. REJECT $x = -16$, since a height cannot be negative. The screen is $12$ by $16$, and the check is $144 + 256 = 400 = 20^2$ ✓. Its perimeter is $2(12 + 16) = 56$ inches ✓. (The choice $28$ adds the height and the width but forgets that a rectangle has two of each; the choice $192$ is the AREA, $12 \\cdot 16$, not the distance around; the choice $64$ computes $2(12 + 20)$, using the diagonal as if it were a side.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 10,
  sections: { '10.5': s105 },
}
