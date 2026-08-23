// Introduction to Algebra — Chapter 3: One-Variable Linear Equations
// All problems, explanations, and examples are original MathQuest content.

const s31 = {
  id: '3.1',
  title: 'Solving Linear Equations I',
  learn: {
    concepts: [
      {
        heading: 'An equation is a balance scale',
        body: 'An equation says two expressions have the same value. To keep the scale balanced, whatever you do to one side, you must do to the other: add the same number, subtract the same number, multiply or divide both sides by the same nonzero number. Every solving move is one of these.',
      },
      {
        heading: 'Undo operations in reverse order',
        body: 'The expression $3x - 5$ is built by first multiplying by $3$, then subtracting $5$. To solve $3x - 5 = 16$, unwrap in the opposite order: first undo the subtraction (add $5$ to both sides), then undo the multiplication (divide both sides by $3$). Last operation on gets undone first — like taking off shoes before socks.',
      },
      {
        heading: 'Fractional coefficients: multiply by the reciprocal',
        body: 'To solve $\\frac{2}{5}x = 8$, you could divide by $\\frac{2}{5}$ — but it is quicker to multiply both sides by the reciprocal $\\frac{5}{2}$, since $\\frac{5}{2} \\cdot \\frac{2}{5} = 1$. Negative coefficients work the same way: to solve $-\\frac{2}{3}x = 10$, multiply both sides by $-\\frac{3}{2}$.',
      },
      {
        heading: 'Always check by substitution',
        body: 'A solution is a value that makes the equation TRUE. So checking is easy: put your answer back into the original equation and see whether both sides match. This catches sign slips before they cost you — make it a habit!',
      },
    ],
    examples: [
      {
        problem: 'Solve $x + 7 = 3$.',
        steps: [
          'The $+7$ is the only thing between us and $x$, so undo it: subtract $7$ from both sides.',
          '$x + 7 - 7 = 3 - 7$, which simplifies to $x = -4$.',
          'Check by substitution: $-4 + 7 = 3$. Both sides match, so $-4$ really is the solution.',
        ],
        answer: '$x = -4$',
      },
      {
        problem: 'Solve $3x - 5 = 16$.',
        steps: [
          'Undo in reverse order. The last operation was subtracting $5$, so add $5$ to both sides first: $3x = 21$.',
          'Now undo the multiplication: divide both sides by $3$ to get $x = 7$.',
          'Check: $3(7) - 5 = 21 - 5 = 16$. It works!',
        ],
        answer: '$x = 7$',
      },
      {
        problem: 'Solve $-\\frac{2}{3}x = 10$.',
        steps: [
          'The coefficient of $x$ is $-\\frac{2}{3}$, so multiply both sides by its reciprocal, $-\\frac{3}{2}$.',
          'On the left, $-\\frac{3}{2} \\cdot \\left(-\\frac{2}{3}\\right) = 1$, leaving just $x$. On the right, $-\\frac{3}{2} \\cdot 10 = -15$.',
          'Check: $-\\frac{2}{3} \\cdot (-15) = \\frac{30}{3} = 10$. ✓',
        ],
        answer: '$x = -15$',
      },
    ],
  },
  problems: [
    {
      q: 'Solve $x - 9 = 4$.',
      choices: ['$x = -5$', '$x = 13$', '$x = 5$', '$x = -13$'],
      answer: 1,
      solution: 'Undo the $-9$ by adding $9$ to both sides: $x = 4 + 9 = 13$. Check: $13 - 9 = 4$. ✓ (Subtracting $9$ instead would give $-5$, but that undoes the operation in the same direction rather than reversing it.)',
    },
    {
      q: 'Solve $x + 6 = -2$.',
      choices: ['$x = 8$', '$x = 4$', '$x = -4$', '$x = -8$'],
      answer: 3,
      solution: 'Subtract $6$ from both sides: $x = -2 - 6 = -8$. Check: $-8 + 6 = -2$. ✓ Keep the signs straight: $-2 - 6$ moves further into the negatives, not back toward zero.',
    },
    {
      q: 'Solve $5x = -35$.',
      choices: ['$x = -7$', '$x = 7$', '$x = -30$', '$x = -40$'],
      answer: 0,
      solution: 'The $5$ multiplies $x$, so divide both sides by $5$: $x = \\frac{-35}{5} = -7$. Check: $5 \\times (-7) = -35$. ✓ (Subtracting $5$ would give $-40$, but subtraction cannot undo multiplication.)',
    },
    {
      q: 'Solve $\\frac{x}{4} = -3$.',
      choices: ['$x = -\\frac{3}{4}$', '$x = 12$', '$x = -12$', '$x = -7$'],
      answer: 2,
      solution: '$x$ is divided by $4$, so multiply both sides by $4$: $x = -3 \\times 4 = -12$. Check: $\\frac{-12}{4} = -3$. ✓ Dividing by $4$ instead would give $-\\frac{3}{4}$ — that repeats the operation instead of undoing it.',
    },
    {
      q: 'Solve $2x + 9 = 1$.',
      choices: ['$x = -4$', '$x = 5$', '$x = 4$', '$x = -5$'],
      answer: 0,
      solution: 'First undo the $+9$: subtract $9$ from both sides to get $2x = 1 - 9 = -8$. Then divide by $2$: $x = -4$. Check: $2(-4) + 9 = -8 + 9 = 1$. ✓ (Adding $9$ instead of subtracting leads to $2x = 10$ and $x = 5$ — always move the constant in the opposite direction.)',
    },
    {
      q: 'Solve $7 - 3x = 22$.',
      choices: ['$x = 5$', '$x = -\\frac{29}{3}$', '$x = -5$', '$x = \\frac{29}{3}$'],
      answer: 2,
      solution: 'Subtract $7$ from both sides: $-3x = 15$. Now divide by $-3$ — the coefficient is negative three, not three: $x = \\frac{15}{-3} = -5$. Check: $7 - 3(-5) = 7 + 15 = 22$. ✓ Dropping the minus sign at the last step gives $5$, which does not check: $7 - 15 = -8$, not $22$.',
    },
    {
      q: 'Solve $\\frac{2}{5}x = 8$.',
      choices: ['$x = \\frac{16}{5}$', '$x = 20$', '$x = 40$', '$x = 4$'],
      answer: 1,
      solution: 'Multiply both sides by the reciprocal $\\frac{5}{2}$: $x = 8 \\cdot \\frac{5}{2} = \\frac{40}{2} = 20$. Check: $\\frac{2}{5} \\cdot 20 = \\frac{40}{5} = 8$. ✓ Multiplying by $5$ alone gives $40$, but that only clears the denominator — the factor of $2$ still needs to come off.',
    },
    {
      q: 'Solve $6x + 5 = 2$.',
      choices: ['$x = \\frac{1}{2}$', '$x = -3$', '$x = \\frac{7}{6}$', '$x = -\\frac{1}{2}$'],
      answer: 3,
      solution: 'Subtract $5$: $6x = -3$. Divide by $6$: $x = \\frac{-3}{6} = -\\frac{1}{2}$. Check: $6 \\cdot \\left(-\\frac{1}{2}\\right) + 5 = -3 + 5 = 2$. ✓ Solutions do not have to be whole numbers — fractions are perfectly good answers.',
    },
    {
      q: 'Solve $\\frac{3}{4}x - 5 = -11$.',
      choices: ['$x = -8$', '$x = -\\frac{9}{2}$', '$x = 8$', '$x = -\\frac{64}{3}$'],
      answer: 0,
      solution: 'Add $5$ to both sides: $\\frac{3}{4}x = -6$. Multiply by the reciprocal $\\frac{4}{3}$: $x = -6 \\cdot \\frac{4}{3} = -8$. Check: $\\frac{3}{4}(-8) - 5 = -6 - 5 = -11$. ✓ Multiplying by $\\frac{3}{4}$ again would give $-\\frac{9}{2}$ — remember, only the reciprocal cancels the coefficient.',
    },
    {
      q: 'Solve $2 - \\frac{3}{2}x = -7$.',
      choices: ['$x = -6$', '$x = 6$', '$x = \\frac{27}{2}$', '$x = -\\frac{10}{3}$'],
      answer: 1,
      solution: 'Subtract $2$ from both sides: $-\\frac{3}{2}x = -9$. Multiply by the reciprocal of $-\\frac{3}{2}$, which is $-\\frac{2}{3}$: $x = -9 \\cdot \\left(-\\frac{2}{3}\\right) = 6$. Check: $2 - \\frac{3}{2}(6) = 2 - 9 = -7$. ✓ Two negatives on that last step multiply to a positive — count the signs carefully.',
    },
  ],
}

const s32 = {
  id: '3.2',
  title: 'Solving Linear Equations II',
  learn: {
    concepts: [
      {
        heading: 'Variables on both sides: gather them',
        body: 'When $x$ appears on both sides, add or subtract a multiple of $x$ from both sides to collect all the $x$s in one place. In $5x - 4 = 2x + 11$, subtracting $2x$ from both sides leaves $3x - 4 = 11$ — now it is a two-step equation you already know how to solve.',
      },
      {
        heading: 'Distribute before you solve',
        body: 'You cannot move pieces out of parentheses one at a time. In $3(2x - 5) = 4x + 1$, first distribute: $3 \\cdot 2x - 3 \\cdot 5 = 6x - 15$. The $3$ multiplies EVERY term inside — forgetting the second term is the single most common slip in this chapter.',
      },
      {
        heading: 'Several parentheses: distribute each, then combine',
        body: 'For something like $2(3x + 4) - 5(x - 2)$, distribute each group separately, watching signs: $6x + 8 - 5x + 10$. Note that $-5$ times $-2$ is $+10$. Then combine like terms: $x + 18$. Only after the equation is tidy should you start moving terms across the equals sign.',
      },
      {
        heading: 'Three possible endings',
        body: 'Most linear equations end with $x = (\\text{number})$: exactly one solution. But sometimes the variables vanish entirely. If you are left with a false statement like $-6 = 5$, no value of $x$ works: no solution. If you are left with a true statement like $18 = 18$, every value of $x$ works: infinitely many solutions.',
      },
    ],
    examples: [
      {
        problem: 'Solve $5x - 4 = 2x + 11$.',
        steps: [
          'Gather the $x$s: subtract $2x$ from both sides to get $3x - 4 = 11$.',
          'Add $4$ to both sides: $3x = 15$. Divide by $3$: $x = 5$.',
          'Check in the ORIGINAL equation: left side $5(5) - 4 = 21$, right side $2(5) + 11 = 21$. Both sides agree. ✓',
        ],
        answer: '$x = 5$',
      },
      {
        problem: 'Solve $3(2x - 5) = 4x + 1$.',
        steps: [
          'Distribute first: $6x - 15 = 4x + 1$.',
          'Subtract $4x$ from both sides: $2x - 15 = 1$. Add $15$: $2x = 16$, so $x = 8$.',
          'Check: $3(2 \\cdot 8 - 5) = 3(11) = 33$ and $4(8) + 1 = 33$. ✓',
        ],
        answer: '$x = 8$',
      },
      {
        problem: 'Solve $2(3x + 4) - 5(x - 2) = x + 18$.',
        steps: [
          'Distribute both groups, watching signs: $6x + 8 - 5x + 10 = x + 18$.',
          'Combine like terms on the left: $x + 18 = x + 18$.',
          'Subtracting $x$ from both sides gives $18 = 18$ — always true, no matter what $x$ is. Every value of $x$ is a solution.',
        ],
        answer: 'Infinitely many solutions — the equation is an identity',
      },
    ],
  },
  problems: [
    {
      q: 'Solve $4x = x + 12$.',
      choices: ['$x = 3$', '$x = 12$', '$x = 4$', '$x = -4$'],
      answer: 2,
      solution: 'Subtract $x$ from both sides to gather the variables: $3x = 12$, so $x = 4$. Check: $4(4) = 16$ and $4 + 12 = 16$. ✓',
    },
    {
      q: 'Solve $7x - 3 = 5x + 9$.',
      choices: ['$x = 6$', '$x = 3$', '$x = 1$', '$x = -6$'],
      answer: 0,
      solution: 'Subtract $5x$: $2x - 3 = 9$. Add $3$: $2x = 12$, so $x = 6$. Check: $7(6) - 3 = 39$ and $5(6) + 9 = 39$. ✓ (Subtracting the $3$ instead of adding it would give $2x = 6$ and $x = 3$ — that value gives $18$ and $24$, which do not match.)',
    },
    {
      q: 'Solve $2(x + 5) = 24$.',
      choices: ['$x = \\frac{19}{2}$', '$x = 17$', '$x = 12$', '$x = 7$'],
      answer: 3,
      solution: 'Either distribute ($2x + 10 = 24$, so $2x = 14$) or divide both sides by $2$ first ($x + 5 = 12$). Both roads give $x = 7$. Check: $2(7 + 5) = 2(12) = 24$. ✓ The choice $\\frac{19}{2}$ comes from writing $2x + 5 = 24$ — the $2$ must multiply the $5$ as well.',
    },
    {
      q: 'Solve $3(x - 4) = 15$.',
      choices: ['$x = \\frac{19}{3}$', '$x = 9$', '$x = 5$', '$x = 3$'],
      answer: 1,
      solution: 'Distribute: $3x - 12 = 15$, so $3x = 27$ and $x = 9$. Check: $3(9 - 4) = 3(5) = 15$. ✓ Note that $5$ is the value of $x - 4$, not of $x$ itself — one more step is needed.',
    },
    {
      q: 'Solve $9 - 2x = 3x - 6$.',
      choices: ['$x = -3$', '$x = 15$', '$x = \\frac{3}{5}$', '$x = 3$'],
      answer: 3,
      solution: 'Add $2x$ to both sides: $9 = 5x - 6$. Add $6$: $15 = 5x$, so $x = 3$. Check: $9 - 2(3) = 3$ and $3(3) - 6 = 3$. ✓ ($15$ is the value of $5x$ along the way — remember to finish with the division.)',
    },
    {
      q: 'Solve $4(2x - 1) = 5x + 11$.',
      choices: ['$x = 5$', '$x = -5$', '$x = \\frac{15}{13}$', '$x = \\frac{7}{3}$'],
      answer: 0,
      solution: 'Distribute: $8x - 4 = 5x + 11$. Subtract $5x$: $3x - 4 = 11$. Add $4$: $3x = 15$, so $x = 5$. Check: $4(2 \\cdot 5 - 1) = 4(9) = 36$ and $5(5) + 11 = 36$. ✓',
    },
    {
      q: 'How many solutions does $3(2x + 4) = 6x + 12$ have?',
      choices: ['Exactly one', 'None', 'Infinitely many', 'Exactly two'],
      answer: 2,
      solution: 'Distribute the left side: $6x + 12 = 6x + 12$. The two sides are identical, so the equation is true for EVERY value of $x$ — try $x = 0$, $x = 1$, anything! An equation like this is called an identity, and it has infinitely many solutions.',
    },
    {
      q: 'Solve $2(4x - 3) = 8x + 5$.',
      choices: ['$x = 0$', 'No solution — the equation is never true', 'Infinitely many solutions', '$x = \\frac{11}{16}$'],
      answer: 1,
      solution: 'Distribute: $8x - 6 = 8x + 5$. Subtract $8x$ from both sides and the variable disappears: $-6 = 5$. That statement is false no matter what $x$ is, so no value can ever balance this equation. It has no solution.',
    },
    {
      q: 'Solve $5(x - 2) - 3(x + 4) = 8$.',
      choices: ['$x = 3$', '$x = 5$', '$x = 13$', '$x = 15$'],
      answer: 3,
      solution: 'Distribute both groups, watching the signs on the second: $5x - 10 - 3x - 12 = 8$. Combine: $2x - 22 = 8$, so $2x = 30$ and $x = 15$. Check: $5(13) - 3(19) = 65 - 57 = 8$. ✓ The trap is $-3 \\cdot 4$: it gives $-12$, not $+12$.',
    },
    {
      q: 'Solve $6 - 2(x - 3) = 4(x + 3) - 2x$.',
      choices: ['$x = 0$', 'The equation has no solution', 'Every value of $x$ works', '$x = 6$'],
      answer: 0,
      solution: 'Simplify each side. Left: $6 - 2x + 6 = 12 - 2x$. Right: $4x + 12 - 2x = 2x + 12$. So $12 - 2x = 2x + 12$. Add $2x$ to both sides: $12 = 4x + 12$, so $4x = 0$ and $x = 0$. Check: $6 - 2(-3) = 12$ and $4(3) - 0 = 12$. ✓ Zero is a perfectly good solution — one solution, and it happens to be $0$. That is different from "no solution"!',
    },
  ],
}

const s33 = {
  id: '3.3',
  title: 'Word Problems',
  learn: {
    concepts: [
      {
        heading: 'Name your variable first',
        body: 'Every translation starts the same way: write "Let $n$ = ..." and say exactly what the variable counts. Then convert the story phrase by phrase: "three more than twice a number" becomes $2n + 3$, "seven less than a number" becomes $n - 7$ (not $7 - n$!), and "is" becomes $=$.',
      },
      {
        heading: 'Ages: everyone gets older together',
        body: 'In $n$ years, EVERY person in the problem is $n$ years older — and $n$ years ago, everyone was $n$ years younger. If Maya is $m$ now, she is $m + 5$ in five years. Age differences never change, but age ratios do — that is what makes age problems interesting.',
      },
      {
        heading: 'Money and tickets: quantity times price',
        body: 'If a group buys $a$ adult tickets at $\\$9$ each, that costs $9a$ dollars. When you know the total number of tickets, one variable is enough: with $10$ tickets total and $a$ of them adult, the other $10 - a$ are child tickets. Total cost equations almost build themselves.',
      },
      {
        heading: 'Consecutive integers and perimeters',
        body: 'Consecutive integers step by $1$: call them $n$, $n + 1$, $n + 2$. Consecutive EVEN integers step by $2$: $n$, $n + 2$, $n + 4$ — and consecutive odd integers step by $2$ as well! For rectangles, remember the perimeter uses each side twice: $P = 2(\\ell + w)$.',
      },
    ],
    examples: [
      {
        problem: 'Three more than twice a number is $19$. What is the number?',
        steps: [
          'Let $n$ be the number. "Twice a number" is $2n$, and "three more than" that is $2n + 3$.',
          '"Is $19$" gives the equation $2n + 3 = 19$.',
          'Subtract $3$: $2n = 16$. Divide by $2$: $n = 8$. Check against the story: twice $8$ is $16$, and three more is $19$. ✓',
        ],
        answer: 'The number is $8$',
      },
      {
        problem: 'Maya is $4$ years older than her brother. In $5$ years, the sum of their ages will be $30$. How old is Maya now?',
        steps: [
          'Let $b$ be the brother’s age now, so Maya is $b + 4$. In $5$ years they will be $b + 5$ and $b + 9$ — both of them age!',
          'The future sum gives $(b + 5) + (b + 9) = 30$, so $2b + 14 = 30$.',
          'Then $2b = 16$ and $b = 8$, so Maya is $8 + 4 = 12$. Check: in five years they are $13$ and $17$, and $13 + 17 = 30$. ✓',
        ],
        answer: 'Maya is $12$ years old',
      },
      {
        problem: 'A family buys twice as many $\\$5$ child tickets as $\\$8$ adult tickets and spends $\\$54$ in total. How many adult tickets did they buy?',
        steps: [
          'Let $a$ be the number of adult tickets, so there are $2a$ child tickets.',
          'Cost equation: $8a + 5(2a) = 54$, which simplifies to $8a + 10a = 18a = 54$.',
          'So $a = 3$: three adult tickets (and six child tickets). Check: $3 \\cdot 8 + 6 \\cdot 5 = 24 + 30 = 54$. ✓',
        ],
        answer: '$3$ adult tickets',
      },
    ],
  },
  problems: [
    {
      q: 'Seven less than a number is $15$. What is the number?',
      choices: ['$8$', '$22$', '$-8$', '$15$'],
      answer: 1,
      solution: '"Seven less than a number" is $n - 7$, so the equation is $n - 7 = 15$. Add $7$: $n = 22$. Check: $22 - 7 = 15$. ✓ (Reading it as $7 - n$ would lead to $-8$ — the phrase "less than" flips the order.)',
    },
    {
      q: 'Five times a number, decreased by $4$, is $26$. What is the number?',
      choices: ['$\\frac{22}{5}$', '$5$', '$6$', '$30$'],
      answer: 2,
      solution: 'The equation is $5n - 4 = 26$. Add $4$: $5n = 30$. Divide by $5$: $n = 6$. Check: $5(6) - 4 = 26$. ✓ ($30$ is the value of $5n$, not $n$; and $\\frac{22}{5}$ comes from subtracting the $4$ instead of adding it.)',
    },
    {
      q: 'The sum of three consecutive integers is $48$. What is the largest of the three?',
      choices: ['$17$', '$16$', '$15$', '$18$'],
      answer: 0,
      solution: 'Let the integers be $n$, $n + 1$, $n + 2$. Then $3n + 3 = 48$, so $3n = 45$ and $n = 15$. The integers are $15, 16, 17$, and the LARGEST is $17$. Check: $15 + 16 + 17 = 48$. ✓ Read the question twice — it asks for the largest, not the first.',
    },
    {
      q: 'A number plus half of itself equals $36$. What is the number?',
      choices: ['$18$', '$12$', '$72$', '$24$'],
      answer: 3,
      solution: 'The equation is $n + \\frac{n}{2} = 36$, which combines to $\\frac{3}{2}n = 36$. Multiply by $\\frac{2}{3}$: $n = 24$. Check: $24 + 12 = 36$. ✓',
    },
    {
      q: 'Dev is three times as old as his sister, and Dev is $12$ years older than she is. How old is Dev?',
      choices: ['$6$', '$18$', '$24$', '$12$'],
      answer: 1,
      solution: 'Let $s$ be the sister’s age. "Three times as old" gives Dev $= 3s$, and "12 years older" gives Dev $= s + 12$. So $3s = s + 12$, which means $2s = 12$ and $s = 6$. Dev is $3 \\cdot 6 = 18$. Check: $18$ is both three times $6$ and twelve more than $6$. ✓ ($6$ is the sister’s age — the question asks for Dev.)',
    },
    {
      q: 'Lena has $\\$3$ more than twice as much money as Sam. Together they have $\\$36$. How much does Lena have?',
      choices: ['$\\$25$', '$\\$11$', '$\\$23$', '$\\$13$'],
      answer: 0,
      solution: 'Let $s$ be Sam’s money, so Lena has $2s + 3$. Together: $s + (2s + 3) = 36$, so $3s = 33$ and $s = 11$. Lena has $2(11) + 3 = 25$ dollars. Check: $11 + 25 = 36$. ✓ ($\\$11$ is Sam’s amount — one more step gets Lena’s.)',
    },
    {
      q: 'A rectangle’s length is $5$ cm more than its width, and its perimeter is $38$ cm. What is the width?',
      choices: ['$12$ cm', '$16.5$ cm', '$7$ cm', '$9.5$ cm'],
      answer: 2,
      solution: 'Let $w$ be the width, so the length is $w + 5$. Perimeter counts each side twice: $2(w + w + 5) = 38$, so $2(2w + 5) = 38$, giving $2w + 5 = 19$ and $w = 7$. Check: sides $7$ and $12$ give perimeter $2(19) = 38$. ✓ ($16.5$ comes from writing $w + (w + 5) = 38$ — that is only half the perimeter.)',
    },
    {
      q: 'Movie tickets cost $\\$9$ for adults and $\\$6$ for kids. A group of $10$ people paid $\\$75$ in total. How many adults were in the group?',
      choices: ['$3$', '$6$', '$4$', '$5$'],
      answer: 3,
      solution: 'Let $a$ be the number of adults, so there are $10 - a$ kids. Cost: $9a + 6(10 - a) = 75$. Distribute: $9a + 60 - 6a = 75$, so $3a = 15$ and $a = 5$. Check: $5$ adults and $5$ kids cost $45 + 30 = 75$ dollars. ✓',
    },
    {
      q: 'The sum of four consecutive even integers is $92$. What is the greatest of them?',
      choices: ['$20$', '$26$', '$24$', '$28$'],
      answer: 1,
      solution: 'Consecutive even integers step by $2$: let them be $n$, $n+2$, $n+4$, $n+6$. Then $4n + 12 = 92$, so $4n = 80$ and $n = 20$. The integers are $20, 22, 24, 26$; the greatest is $26$. Check: $20 + 22 + 24 + 26 = 92$. ✓',
    },
    {
      q: 'Ava is $11$ and her mom is $39$. In how many years will her mom be exactly three times Ava’s age?',
      choices: ['$3$', '$6$', '$2$', '$4$'],
      answer: 0,
      solution: 'In $n$ years Ava will be $11 + n$ and her mom will be $39 + n$ — both of them age! The condition is $39 + n = 3(11 + n)$. Distribute: $39 + n = 33 + 3n$, so $6 = 2n$ and $n = 3$. Check: in $3$ years they are $14$ and $42$, and $42 = 3 \\times 14$. ✓',
    },
  ],
}

const s34 = {
  id: '3.4',
  title: 'Linear Equations in Disguise',
  learn: {
    concepts: [
      {
        heading: 'Proportions: cross-multiply',
        body: 'An equation of the form $\\frac{A}{B} = \\frac{C}{D}$ can be rewritten as $AD = BC$ — this is called cross-multiplying, and it works because you are really multiplying both sides by $BD$. So $\\frac{2x+1}{3} = \\frac{x-4}{5}$ becomes $5(2x+1) = 3(x-4)$: a linear equation with the fractions gone. Keep parentheses around each whole numerator!',
      },
      {
        heading: 'Many denominators: multiply by a common one',
        body: 'For an equation like $\\frac{x}{2} + \\frac{x}{3} = 10$, multiply EVERY term on both sides by a common denominator (here $6$): $3x + 2x = 60$. One multiplication clears all the fractions at once. The least common denominator keeps the numbers smallest, but any common multiple works.',
      },
      {
        heading: 'Variables downstairs: cross-multiply, but check',
        body: 'An equation like $\\frac{4}{x} = \\frac{6}{x+1}$ has variables in the denominators. Cross-multiplying still turns it linear: $4(x+1) = 6x$. One caution: values that make a denominator zero (here $x = 0$ and $x = -1$) are excluded — they can never be solutions, so if your algebra produces one, it must be thrown out.',
      },
      {
        heading: 'Nested parentheses: work from the inside out',
        body: 'For $2(3(x-1) + 4)$, simplify the innermost layer first: $3(x-1) = 3x - 3$, so the inside is $3x + 1$, and the whole thing is $6x + 2$. Peel one layer at a time and no equation of this kind can tangle you up.',
      },
    ],
    examples: [
      {
        problem: 'Solve $\\frac{x+3}{4} = \\frac{2x-1}{6}$.',
        steps: [
          'Cross-multiply, keeping each numerator in parentheses: $6(x + 3) = 4(2x - 1)$.',
          'Distribute: $6x + 18 = 8x - 4$. Subtract $6x$ and add $4$: $22 = 2x$, so $x = 11$.',
          'Check: $\\frac{11+3}{4} = \\frac{14}{4} = \\frac{7}{2}$ and $\\frac{22-1}{6} = \\frac{21}{6} = \\frac{7}{2}$. ✓',
        ],
        answer: '$x = 11$',
      },
      {
        problem: 'Solve $\\frac{x}{2} + \\frac{x}{3} = 10$.',
        steps: [
          'The denominators are $2$ and $3$, so multiply every term by $6$: $6 \\cdot \\frac{x}{2} + 6 \\cdot \\frac{x}{3} = 6 \\cdot 10$.',
          'That clears all fractions: $3x + 2x = 60$, so $5x = 60$ and $x = 12$.',
          'Check: $\\frac{12}{2} + \\frac{12}{3} = 6 + 4 = 10$. ✓',
        ],
        answer: '$x = 12$',
      },
      {
        problem: 'Solve $\\frac{4}{x} = \\frac{6}{x+1}$.',
        steps: [
          'First note the excluded values: $x \\neq 0$ and $x \\neq -1$, since those would make a denominator zero.',
          'Cross-multiply: $4(x + 1) = 6x$, so $4x + 4 = 6x$, giving $4 = 2x$ and $x = 2$.',
          'Since $2$ is not an excluded value, it is a genuine solution. Check: $\\frac{4}{2} = 2$ and $\\frac{6}{3} = 2$. ✓',
        ],
        answer: '$x = 2$',
      },
    ],
  },
  problems: [
    {
      q: 'Solve $\\frac{x}{3} = \\frac{8}{12}$.',
      choices: ['$x = 24$', '$x = 4$', '$x = 3$', '$x = 2$'],
      answer: 3,
      solution: 'Cross-multiply: $12x = 3 \\cdot 8 = 24$, so $x = 2$. Check: $\\frac{2}{3} = \\frac{8}{12}$ — both equal two-thirds. ✓ ($24$ is the cross product itself; the division finishes the job.)',
    },
    {
      q: 'Solve $\\frac{x+2}{5} = 3$.',
      choices: ['$x = 13$', '$x = 17$', '$x = 1$', '$x = 15$'],
      answer: 0,
      solution: 'Multiply both sides by $5$: $x + 2 = 15$. Subtract $2$: $x = 13$. Check: $\\frac{13+2}{5} = \\frac{15}{5} = 3$. ✓ ($15$ is the value of $x + 2$, and $17$ comes from adding the $2$ instead of subtracting.)',
    },
    {
      q: 'Solve $\\frac{x}{4} = \\frac{x-6}{2}$.',
      choices: ['$x = 4$', '$x = 12$', '$x = -12$', '$x = 8$'],
      answer: 1,
      solution: 'Cross-multiply: $2x = 4(x - 6)$. Distribute: $2x = 4x - 24$. Subtract $4x$: $-2x = -24$, so $x = 12$. Check: $\\frac{12}{4} = 3$ and $\\frac{12-6}{2} = 3$. ✓ Watch the final division: negative divided by negative is positive.',
    },
    {
      q: 'Solve $\\frac{x}{2} - \\frac{x}{5} = 3$.',
      choices: ['$x = 30$', '$x = 1$', '$x = 10$', '$x = \\frac{30}{7}$'],
      answer: 2,
      solution: 'Multiply every term by $10$: $5x - 2x = 30$, so $3x = 30$ and $x = 10$. Check: $\\frac{10}{2} - \\frac{10}{5} = 5 - 2 = 3$. ✓ (The choice $\\frac{30}{7}$ comes from ADDING $5x + 2x$ — keep the minus sign.)',
    },
    {
      q: 'Solve $\\frac{2x-1}{3} = \\frac{x+4}{2}$.',
      choices: ['$x = 14$', '$x = 5$', '$x = \\frac{11}{4}$', '$x = -14$'],
      answer: 0,
      solution: 'Cross-multiply with parentheses: $2(2x - 1) = 3(x + 4)$. Distribute: $4x - 2 = 3x + 12$. Subtract $3x$ and add $2$: $x = 14$. Check: $\\frac{28-1}{3} = 9$ and $\\frac{14+4}{2} = 9$. ✓ The parentheses matter — cross-multiplying only the first term of a numerator leads to answers like $5$.',
    },
    {
      q: 'Solve $\\frac{10}{x} = 4$. (Note that $x = 0$ is excluded.)',
      choices: ['$x = 40$', '$x = \\frac{2}{5}$', '$x = -\\frac{5}{2}$', '$x = \\frac{5}{2}$'],
      answer: 3,
      solution: 'Multiply both sides by $x$: $10 = 4x$, so $x = \\frac{10}{4} = \\frac{5}{2}$. Check: $10 \\div \\frac{5}{2} = 10 \\cdot \\frac{2}{5} = 4$. ✓ ($\\frac{2}{5}$ is the reciprocal of the answer — a classic flip to watch for.)',
    },
    {
      q: 'Solve $\\frac{3}{x} = \\frac{5}{x+4}$.',
      choices: ['$x = -6$', '$x = 6$', '$x = -\\frac{3}{2}$', '$x = 2$'],
      answer: 1,
      solution: 'Excluded values: $x \\neq 0$ and $x \\neq -4$. Cross-multiply: $3(x + 4) = 5x$, so $3x + 12 = 5x$, giving $12 = 2x$ and $x = 6$. Check: $\\frac{3}{6} = \\frac{1}{2}$ and $\\frac{5}{10} = \\frac{1}{2}$. ✓ (The choice $2$ comes from writing $3x + 4 = 5x$ — the $3$ must multiply the $4$ too.)',
    },
    {
      q: 'Solve $\\frac{x}{2} + \\frac{x+7}{3} = 9$.',
      choices: ['$x = \\frac{47}{5}$', '$x = \\frac{68}{5}$', '$x = 8$', '$x = 40$'],
      answer: 2,
      solution: 'Multiply every term by $6$: $3x + 2(x + 7) = 54$. Distribute: $3x + 2x + 14 = 54$, so $5x = 40$ and $x = 8$. Check: $\\frac{8}{2} + \\frac{8+7}{3} = 4 + 5 = 9$. ✓ (The choice $\\frac{47}{5}$ comes from writing $2x + 7$ — the $2$ must multiply the whole numerator $x + 7$.)',
    },
    {
      q: 'Solve $2(3(x - 1) + 4) = 5x + 9$.',
      choices: ['$x = 7$', '$x = 11$', '$x = 8$', '$x = -7$'],
      answer: 0,
      solution: 'Inside out: $3(x - 1) = 3x - 3$, so the inner expression is $3x - 3 + 4 = 3x + 1$. Then the left side is $2(3x + 1) = 6x + 2$. Now solve $6x + 2 = 5x + 9$: subtract $5x$ and $2$ to get $x = 7$. Check: $2(3(6) + 4) = 2(22) = 44$ and $5(7) + 9 = 44$. ✓',
    },
    {
      q: 'Solve $\\frac{5}{x-2} = \\frac{7}{x+2}$.',
      choices: ['$x = 2$', '$x = 12$', '$x = -12$', '$x = \\frac{1}{6}$'],
      answer: 1,
      solution: 'Excluded values: $x \\neq 2$ and $x \\neq -2$. Cross-multiply: $5(x + 2) = 7(x - 2)$, so $5x + 10 = 7x - 14$. Then $24 = 2x$ and $x = 12$, which is not excluded. Check: $\\frac{5}{10} = \\frac{1}{2}$ and $\\frac{7}{14} = \\frac{1}{2}$. ✓ Notice that $x = 2$ appears as a tempting choice precisely because it is forbidden — it would divide by zero.',
    },
  ],
}

const challenge = [
  {
    q: 'Solve $3(x - 4) + 2(x + 5) = 23$.',
    choices: ['$x = \\frac{21}{5}$', '$x = \\frac{17}{5}$', '$x = 5$', '$x = 7$'],
    answer: 2,
    solution: 'Distribute both groups: $3x - 12 + 2x + 10 = 23$. Combine: $5x - 2 = 23$, so $5x = 25$ and $x = 5$. Check: $3(1) + 2(10) = 3 + 20 = 23$. ✓ (The choice $\\frac{21}{5}$ comes from combining $-12 + 10$ as $+2$.)',
  },
  {
    q: 'Solve $\\frac{4x-1}{3} = \\frac{2x+5}{2}$.',
    choices: ['$x = \\frac{17}{2}$', '$x = \\frac{13}{8}$', '$x = 8$', '$x = \\frac{13}{2}$'],
    answer: 0,
    solution: 'Cross-multiply: $2(4x - 1) = 3(2x + 5)$, so $8x - 2 = 6x + 15$. Subtract $6x$ and add $2$: $2x = 17$, giving $x = \\frac{17}{2}$. Check: $\\frac{4 \\cdot \\frac{17}{2} - 1}{3} = \\frac{33}{3} = 11$ and $\\frac{17 + 5}{2} = 11$. ✓ Fractional answers are fine — trust the algebra.',
  },
  {
    q: 'The sum of five consecutive odd integers is $105$. What is the middle one?',
    choices: ['$19$', '$21$', '$23$', '$17$'],
    answer: 1,
    solution: 'Let the middle integer be $m$; the five are $m-4$, $m-2$, $m$, $m+2$, $m+4$. Their sum telescopes to $5m = 105$, so $m = 21$. Check: $17 + 19 + 21 + 23 + 25 = 105$. ✓ Centering the variable on the middle term makes the extra terms cancel — a beautiful shortcut.',
  },
  {
    q: 'Solve $7 - 2(3x - 4) = 4x - 5$.',
    choices: ['$x = -2$', '$x = \\frac{2}{5}$', '$x = \\frac{4}{5}$', '$x = 2$'],
    answer: 3,
    solution: 'Distribute the $-2$ to BOTH terms: $7 - 6x + 8 = 15 - 6x$. So $15 - 6x = 4x - 5$, giving $20 = 10x$ and $x = 2$. Check: $7 - 2(6 - 4) = 7 - 4 = 3$ and $4(2) - 5 = 3$. ✓ (The choice $\\frac{2}{5}$ comes from turning $-2 \\cdot (-4)$ into $-8$ instead of $+8$.)',
  },
  {
    q: 'Solve $\\frac{2}{x+3} = \\frac{8}{5x}$.',
    choices: ['$x = -12$', '$x = 12$', '$x = \\frac{24}{13}$', '$x = 3$'],
    answer: 1,
    solution: 'Excluded values: $x \\neq -3$ and $x \\neq 0$. Cross-multiply: $2 \\cdot 5x = 8(x + 3)$, so $10x = 8x + 24$, giving $2x = 24$ and $x = 12$. Check: $\\frac{2}{15}$ on the left, and $\\frac{8}{60} = \\frac{2}{15}$ on the right. ✓',
  },
  {
    q: 'How many solutions does $4(x + 2) - 3 = 2(2x - 1) + 7$ have?',
    choices: ['Only $x = 0$', 'No solution', 'Every value of $x$ is a solution', 'Only $x = 5$'],
    answer: 2,
    solution: 'Simplify each side. Left: $4x + 8 - 3 = 4x + 5$. Right: $4x - 2 + 7 = 4x + 5$. The two sides are identical, so the equation is an identity: every value of $x$ makes it true, and there are infinitely many solutions.',
  },
  {
    q: 'A father is $26$ years older than his daughter. In $6$ years, he will be exactly three times her age. How old is the daughter now?',
    choices: ['$7$', '$13$', '$10$', '$6$'],
    answer: 0,
    solution: 'Let $d$ be the daughter’s age now, so the father is $d + 26$. In $6$ years: $d + 32 = 3(d + 6)$. Distribute: $d + 32 = 3d + 18$, so $14 = 2d$ and $d = 7$. Check: in $6$ years she is $13$ and he is $39 = 3 \\times 13$. ✓ ($13$ is her age in six years — the question asks about now.)',
  },
  {
    q: 'Solve $\\frac{x}{2} - \\frac{x-4}{3} = 2$.',
    choices: ['$x = -4$', '$x = 20$', '$x = 12$', '$x = 4$'],
    answer: 3,
    solution: 'Multiply every term by $6$: $3x - 2(x - 4) = 12$. Distribute carefully: $3x - 2x + 8 = 12$, so $x = 4$. Check: $\\frac{4}{2} - \\frac{0}{3} = 2 - 0 = 2$. ✓ (The choice $20$ comes from writing $-2(x-4)$ as $-2x - 8$ — the minus times minus gives PLUS eight.)',
  },
  {
    q: 'A jar holds only dimes ($10$ cents) and quarters ($25$ cents). There are $3$ more quarters than dimes, and the coins are worth $\\$2.85$ in total. How many dimes are in the jar?',
    choices: ['$9$', '$6$', '$3$', '$12$'],
    answer: 1,
    solution: 'Let $d$ be the number of dimes, so there are $d + 3$ quarters. In cents: $10d + 25(d + 3) = 285$. Distribute: $35d + 75 = 285$, so $35d = 210$ and $d = 6$. Check: $6$ dimes ($60$ cents) plus $9$ quarters ($225$ cents) is $285$ cents. ✓ ($9$ is the number of quarters.)',
  },
  {
    q: 'Solve $5 - (2 - 3(x - 1)) = 2x - 6$.',
    choices: ['$x = -6$', '$x = 6$', '$x = \\frac{12}{5}$', '$x = -\\frac{6}{5}$'],
    answer: 0,
    solution: 'Inside out: $3(x-1) = 3x - 3$, so $2 - (3x - 3) = 5 - 3x$, and then $5 - (5 - 3x) = 3x$. The equation collapses to $3x = 2x - 6$, so $x = -6$. Check: $5 - (2 - 3(-7)) = 5 - 23 = -18$ and $2(-6) - 6 = -18$. ✓ Each subtraction flips every sign inside its parentheses — track them one layer at a time.',
  },
  {
    q: 'Solve $\\frac{6}{x} = \\frac{4}{x-1}$.',
    choices: ['$x = -3$', '$x = \\frac{3}{5}$', '$x = 3$', '$x = \\frac{1}{3}$'],
    answer: 2,
    solution: 'Excluded values: $x \\neq 0$ and $x \\neq 1$. Cross-multiply: $6(x - 1) = 4x$, so $6x - 6 = 4x$, giving $2x = 6$ and $x = 3$. Check: $\\frac{6}{3} = 2$ and $\\frac{4}{2} = 2$. ✓',
  },
  {
    q: 'A triangle has sides of length $x$, $x + 4$, and $2x - 1$, and its perimeter is $39$. What is the length of its longest side?',
    choices: ['$9$', '$13$', '$19$', '$17$'],
    answer: 3,
    solution: 'Perimeter: $x + (x + 4) + (2x - 1) = 4x + 3 = 39$, so $4x = 36$ and $x = 9$. The sides are $9$, $13$, and $2(9) - 1 = 17$; the longest is $17$. Check: $9 + 13 + 17 = 39$. ✓ ($9$ is just $x$ — the question asks for the longest side.)',
  },
]

const worksheet = [
  {
    q: 'Solve $4x - 7 = 21$.',
    answer: '$x = 7$',
    solution: 'Add $7$ to both sides: $4x = 28$. Divide by $4$: $x = 7$. Check: $4(7) - 7 = 21$. ✓',
  },
  {
    q: 'Solve $-3x + 8 = 23$.',
    answer: '$x = -5$',
    solution: 'Subtract $8$: $-3x = 15$. Divide by $-3$: $x = -5$. Check: $-3(-5) + 8 = 15 + 8 = 23$. ✓',
  },
  {
    q: 'Solve $6x - 5 = 2x + 19$.',
    answer: '$x = 6$',
    solution: 'Subtract $2x$ from both sides: $4x - 5 = 19$. Add $5$: $4x = 24$, so $x = 6$. Check: $6(6) - 5 = 31$ and $2(6) + 19 = 31$. ✓',
  },
  {
    q: 'Solve $2(x + 7) = 3x - 1$.',
    answer: '$x = 15$',
    solution: 'Distribute: $2x + 14 = 3x - 1$. Subtract $2x$ and add $1$: $15 = x$. Check: $2(22) = 44$ and $3(15) - 1 = 44$. ✓',
  },
  {
    q: 'Nine more than four times a number is $45$. What is the number?',
    answer: '$9$',
    solution: 'Let $n$ be the number: $4n + 9 = 45$. Subtract $9$: $4n = 36$, so $n = 9$. Check: four times $9$ is $36$, and nine more is $45$. ✓',
  },
  {
    q: 'Solve $\\frac{x}{5} + 3 = 8$.',
    answer: '$x = 25$',
    solution: 'Subtract $3$: $\\frac{x}{5} = 5$. Multiply by $5$: $x = 25$. Check: $\\frac{25}{5} + 3 = 5 + 3 = 8$. ✓',
  },
  {
    q: 'Solve $\\frac{3x - 2}{4} = \\frac{x + 6}{2}$.',
    answer: '$x = 14$',
    solution: 'Cross-multiply with parentheses: $2(3x - 2) = 4(x + 6)$. Distribute: $6x - 4 = 4x + 24$. Subtract $4x$ and add $4$: $2x = 28$, so $x = 14$. Check: $\\frac{42 - 2}{4} = 10$ and $\\frac{14 + 6}{2} = 10$. ✓',
  },
  {
    q: 'Dad is $50$ and Jo is $12$. In how many years will Dad be exactly three times Jo’s age?',
    answer: '$7$ years',
    solution: 'In $n$ years they will be $50 + n$ and $12 + n$. Set up $50 + n = 3(12 + n)$: distribute to get $50 + n = 36 + 3n$, so $14 = 2n$ and $n = 7$. Check: in $7$ years they are $57$ and $19$, and $57 = 3 \\times 19$. ✓',
  },
  {
    q: 'Solve $\\frac{9}{x} = \\frac{12}{x + 2}$. (State the excluded values first.)',
    answer: '$x = 6$ (with $x \\neq 0$ and $x \\neq -2$ excluded)',
    solution: 'The excluded values are $x = 0$ and $x = -2$, which would make a denominator zero. Cross-multiply: $9(x + 2) = 12x$, so $9x + 18 = 12x$, giving $18 = 3x$ and $x = 6$. Since $6$ is not excluded, it is a genuine solution. Check: $\\frac{9}{6} = \\frac{3}{2}$ and $\\frac{12}{8} = \\frac{3}{2}$. ✓',
  },
  {
    q: 'Solve $3(2(x + 1) - 5) = 4x + 7$.',
    answer: '$x = 8$',
    solution: 'Inside out: $2(x + 1) = 2x + 2$, so the inner expression is $2x + 2 - 5 = 2x - 3$. The left side becomes $3(2x - 3) = 6x - 9$. Solve $6x - 9 = 4x + 7$: subtract $4x$ and add $9$ to get $2x = 16$, so $x = 8$. Check: $3(2(9) - 5) = 3(13) = 39$ and $4(8) + 7 = 39$. ✓',
  },
]

export default {
  id: 'intro-algebra-ch03',
  book: 'intro-algebra',
  number: 3,
  title: 'One-Variable Linear Equations',
  intro:
    'Solving equations is the heart of algebra: you know two expressions are equal, and you work backwards to discover the number hiding inside. In this chapter you will master the balance-scale moves that solve any linear equation — even ones dressed up in fractions, parentheses, or word-problem costumes.',
  sections: [s31, s32, s33, s34],
  challenge,
  worksheet,
}
