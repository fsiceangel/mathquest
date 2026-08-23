// Introduction to Algebra — Chapter 5: Multi-Variable Linear Equations
// All problems, explanations, and examples are original MathQuest content.

const s51 = {
  id: '5.1',
  title: 'Introduction to Two-Variable Linear Equations',
  learn: {
    concepts: [
      {
        heading: 'One equation, many solutions',
        body: 'An equation like $x + y = 10$ has TWO unknowns, and a solution is a pair of values, written $(x, y)$. There are lots of them: $(1, 9)$, $(4, 6)$, $(10, 0)$, even $(-3, 13)$. Pick any $x$ you like, and the equation tells you what $y$ must be.',
      },
      {
        heading: 'Checking a pair',
        body: 'To test whether a pair is a solution, substitute both values and see if the equation is true. Does $(3, 5)$ satisfy $2x + y = 11$? Plug in: $2(3) + 5 = 11$. Yes! Does it satisfy $3x - y = 2$? Plug in: $3(3) - 5 = 4$, not $2$ — so no.',
      },
      {
        heading: 'A second equation pins things down',
        body: 'One equation leaves infinitely many solution pairs. But if a pair must satisfy TWO equations at once, the choices usually narrow down to exactly one pair. Two equations that must both be true are called a system of equations.',
      },
      {
        heading: 'Ordered means ordered',
        body: 'The pair $(3, 5)$ means $x = 3$ and $y = 5$ — the first number is always $x$ and the second is always $y$. The pair $(5, 3)$ is a different pair, and it may satisfy completely different equations. Order matters!',
      },
    ],
    examples: [
      {
        problem: 'Find three different solutions of $x + y = 10$.',
        steps: [
          'Choose any value for $x$, then figure out what $y$ must be.',
          'If $x = 1$, then $y = 9$. If $x = 4$, then $y = 6$. If $x = 10$, then $y = 0$.',
          'Each pair checks out: $1 + 9 = 10$, $4 + 6 = 10$, and $10 + 0 = 10$. We could keep going forever!',
        ],
        answer: '$(1, 9)$, $(4, 6)$, and $(10, 0)$ all work (and there are infinitely many more)',
      },
      {
        problem: 'Is $(3, 5)$ a solution of $2x + y = 11$? Is it a solution of $3x - y = 2$?',
        steps: [
          'Substitute $x = 3$ and $y = 5$ into the first equation: $2(3) + 5 = 6 + 5 = 11$. True, so yes.',
          'Now the second: $3(3) - 5 = 9 - 5 = 4$, but the equation wants $2$. False, so no.',
          'A pair can satisfy one equation and fail another — that is exactly why a second equation is so useful.',
        ],
        answer: '$(3, 5)$ satisfies $2x + y = 11$ but not $3x - y = 2$',
      },
      {
        problem: 'Which pair satisfies BOTH $x + y = 7$ and $x - y = 3$?',
        steps: [
          'List solutions of $x + y = 7$: $(1, 6)$, $(2, 5)$, $(3, 4)$, $(4, 3)$, $(5, 2)$, $(6, 1)$, ...',
          'Now test each in $x - y = 3$: only $(5, 2)$ gives $5 - 2 = 3$.',
          'The second equation cut the endless list down to a single pair.',
        ],
        answer: '$(5, 2)$ is the only pair satisfying both equations',
      },
    ],
  },
  problems: [
    {
      q: 'If $x = 4$ in the equation $x + y = 11$, what is $y$?',
      choices: ['$15$', '$7$', '$4$', '$-7$'],
      answer: 1,
      solution: 'Substitute $x = 4$: then $4 + y = 11$, so $y = 11 - 4 = 7$. Check: $4 + 7 = 11$. ✓',
    },
    {
      q: 'Which ordered pair is a solution of $x + y = 9$?',
      choices: ['$(4, 5)$', '$(5, 3)$', '$(6, 4)$', '$(2, 8)$'],
      answer: 0,
      solution: 'Test each pair by adding: $4 + 5 = 9$. ✓ The others give $5 + 3 = 8$, $6 + 4 = 10$, and $2 + 8 = 10$ — none of them equal $9$.',
    },
    {
      q: 'Which equation does the pair $(3, 2)$ satisfy?',
      choices: ['$x + 2y = 8$', '$x - y = 5$', '$2x + y = 8$', '$3x + 2y = 10$'],
      answer: 2,
      solution: 'Substitute $x = 3$ and $y = 2$ into each: $2x + y = 2(3) + 2 = 8$. ✓ The others give $3 + 4 = 7$, $3 - 2 = 1$, and $9 + 4 = 13$, so they fail.',
    },
    {
      q: 'If $x$ and $y$ can be any numbers at all, how many solution pairs does $x + y = 6$ have?',
      choices: ['One', 'Two', 'Six', 'Infinitely many'],
      answer: 3,
      solution: 'For every choice of $x$ there is a matching $y = 6 - x$: pairs like $(0, 6)$, $(1.5, 4.5)$, $(-2, 8)$, and so on forever. One equation with two unknowns has infinitely many solutions.',
    },
    {
      q: 'Which pair satisfies BOTH $x + y = 10$ and $x - y = 4$?',
      choices: ['$(7, 3)$', '$(3, 7)$', '$(6, 4)$', '$(8, 2)$'],
      answer: 0,
      solution: 'All four pairs sum to $10$, so the second equation must decide. Only $(7, 3)$ gives $7 - 3 = 4$. ✓ Careful with $(3, 7)$: it gives $3 - 7 = -4$, which has the wrong sign — order matters in a pair!',
    },
    {
      q: 'The pair $(a, 4)$ is a solution of $3x + y = 19$. What is $a$?',
      choices: ['$4$', '$5$', '$15$', '$6$'],
      answer: 1,
      solution: 'The pair tells us $y = 4$, so substitute: $3a + 4 = 19$, which gives $3a = 15$, so $a = 5$. Check: $3(5) + 4 = 19$. ✓',
    },
    {
      q: 'Which of these pairs is a solution of $2x + 3y = 12$?',
      choices: ['$(2, 3)$', '$(4, 1)$', '$(1, 4)$', '$(3, 2)$'],
      answer: 3,
      solution: 'Test $(3, 2)$: $2(3) + 3(2) = 6 + 6 = 12$. ✓ The swapped pair $(2, 3)$ gives $4 + 9 = 13$ — swapping $x$ and $y$ changes the value because their coefficients are different.',
    },
    {
      q: 'How many pairs satisfy both $x + y = 8$ and $2x + 2y = 16$?',
      choices: ['Exactly one', 'None', 'Infinitely many', 'Exactly two'],
      answer: 2,
      solution: 'Divide the second equation by $2$ and it becomes $x + y = 8$ — the very same equation! The "second equation" adds no new information, so every solution of $x + y = 8$ works, and there are infinitely many.',
    },
    {
      q: 'The pair $(k, 2k)$ is a solution of $x + y = 12$. What is $k$?',
      choices: ['$4$', '$6$', '$3$', '$8$'],
      answer: 0,
      solution: 'Here $x = k$ and $y = 2k$, so $k + 2k = 12$, which means $3k = 12$ and $k = 4$. Check: the pair is $(4, 8)$ and $4 + 8 = 12$. ✓',
    },
    {
      q: 'How many solutions does $x + y = 10$ have if $x$ and $y$ must both be POSITIVE whole numbers?',
      choices: ['$10$', '$9$', '$8$', 'Infinitely many'],
      answer: 1,
      solution: 'Now $x$ can only be $1, 2, 3, \\ldots, 9$ (it must be positive, and $y = 10 - x$ must be positive too). That is $9$ pairs: $(1, 9)$ through $(9, 1)$. Restricting the numbers turns infinitely many solutions into just a few.',
    },
  ],
}

const s52 = {
  id: '5.2',
  title: 'Substitution',
  learn: {
    concepts: [
      {
        heading: 'The big idea: replace, then solve',
        body: 'If one equation tells you $y = x + 3$, you may replace $y$ with $x + 3$ everywhere in the other equation. Suddenly that equation has only ONE variable — and you already know how to solve those!',
      },
      {
        heading: 'Solve for a variable first',
        body: 'If neither equation hands you a variable alone, make one. From $x + 2y = 10$ you can write $x = 10 - 2y$. Aim for a variable whose coefficient is $1$ — that way you avoid fractions.',
      },
      {
        heading: 'Parentheses are your seatbelt',
        body: 'When you substitute an expression, wrap it in parentheses. Replacing $y$ in $3x - y$ with $10 - 2x$ gives $3x - (10 - 2x)$, and the minus sign must hit BOTH terms inside. Skipping the parentheses is the number one substitution slip.',
      },
      {
        heading: 'Finish the job — find both values',
        body: 'Solving for $x$ is only half the answer. Substitute your $x$ back into the simpler equation to get $y$, then check the pair in BOTH original equations. A pair that only satisfies one equation is not a solution of the system.',
      },
    ],
    examples: [
      {
        problem: 'Solve the system $y = x + 3$ and $x + y = 11$.',
        steps: [
          'The first equation says $y$ IS $x + 3$, so replace $y$ in the second: $x + (x + 3) = 11$.',
          'Combine: $2x + 3 = 11$, so $2x = 8$ and $x = 4$.',
          'Back-substitute: $y = 4 + 3 = 7$.',
          'Check both equations: $7 = 4 + 3$ ✓ and $4 + 7 = 11$ ✓.',
        ],
        answer: '$(x, y) = (4, 7)$',
      },
      {
        problem: 'Solve the system $x + 2y = 10$ and $3x - y = 9$.',
        steps: [
          'Neither variable is alone, so solve the first equation for $x$ (its coefficient is $1$): $x = 10 - 2y$.',
          'Substitute into the second, with parentheses: $3(10 - 2y) - y = 9$, which is $30 - 6y - y = 9$.',
          'So $30 - 7y = 9$, giving $7y = 21$ and $y = 3$. Then $x = 10 - 2(3) = 4$.',
          'Check: $4 + 2(3) = 10$ ✓ and $3(4) - 3 = 9$ ✓.',
        ],
        answer: '$(x, y) = (4, 3)$',
      },
      {
        problem: 'Solve the system $y = 2x - 1$ and $x + 3y = 18$.',
        steps: [
          'Substitute $2x - 1$ for $y$: $x + 3(2x - 1) = 18$. The $3$ must multiply the whole expression!',
          'Distribute: $x + 6x - 3 = 18$, so $7x = 21$ and $x = 3$.',
          'Then $y = 2(3) - 1 = 5$. Check: $3 + 3(5) = 18$ ✓.',
        ],
        answer: '$(x, y) = (3, 5)$',
      },
    ],
  },
  problems: [
    {
      q: 'Use substitution to solve $y = x + 2$ and $x + y = 10$. What is $x$?',
      choices: ['$6$', '$5$', '$4$', '$8$'],
      answer: 2,
      solution: 'Replace $y$ with $x + 2$: then $x + (x + 2) = 10$, so $2x + 2 = 10$, $2x = 8$, and $x = 4$. (Then $y = 6$ — make sure you report the variable that was asked for!) Check: $4 + 6 = 10$. ✓',
    },
    {
      q: 'Solve $y = 3x$ and $x + y = 20$. What is $y$?',
      choices: ['$5$', '$4$', '$60$', '$15$'],
      answer: 3,
      solution: 'Substitute: $x + 3x = 20$, so $4x = 20$ and $x = 5$. Then $y = 3(5) = 15$. Check: $5 + 15 = 20$. ✓ ($5$ is $x$, not $y$.)',
    },
    {
      q: 'What is $x + 2y = 14$ solved for $x$?',
      choices: ['$x = 14 - 2y$', '$x = 14 + 2y$', '$x = 2y - 14$', '$x = 7 - y$'],
      answer: 0,
      solution: 'Subtract $2y$ from both sides: $x = 14 - 2y$. (The choice $x = 7 - y$ comes from dividing by $2$ — but only the $y$-term had a $2$, so there is nothing to divide the whole equation by.)',
    },
    {
      q: 'After substituting $y = x - 1$ into $2x + y = 11$, which one-variable equation do you get?',
      choices: ['$3x + 1 = 11$', '$3x - 1 = 11$', '$2x - 1 = 11$', '$x - 1 = 11$'],
      answer: 1,
      solution: 'Replace $y$: $2x + (x - 1) = 11$, which combines to $3x - 1 = 11$. Keep the $-1$! Dropping it (or flipping it to $+1$) is exactly the slip parentheses prevent.',
    },
    {
      q: 'Solve the system $y = 2x$ and $3x + 2y = 28$.',
      choices: ['$(4, 8)$', '$(8, 4)$', '$(2, 4)$', '$(4, 6)$'],
      answer: 0,
      solution: 'Substitute: $3x + 2(2x) = 28$, so $3x + 4x = 7x = 28$ and $x = 4$. Then $y = 2(4) = 8$, giving $(4, 8)$. Check: $3(4) + 2(8) = 12 + 16 = 28$. ✓ The pair $(8, 4)$ has the coordinates backwards.',
    },
    {
      q: 'Solve $x = y + 5$ and $x + y = 21$. What is $x$?',
      choices: ['$8$', '$16$', '$5$', '$13$'],
      answer: 3,
      solution: 'Substitute: $(y + 5) + y = 21$, so $2y + 5 = 21$, $2y = 16$, and $y = 8$. Then $x = 8 + 5 = 13$. Check: $13 + 8 = 21$. ✓ ($8$ is $y$ — the question asks for $x$.)',
    },
    {
      q: 'Solve $2x + y = 16$ and $y = x + 1$. What is $y$?',
      choices: ['$5$', '$6$', '$11$', '$7$'],
      answer: 1,
      solution: 'Substitute: $2x + (x + 1) = 16$, so $3x + 1 = 16$, $3x = 15$, and $x = 5$. Then $y = 5 + 1 = 6$. Check: $2(5) + 6 = 16$. ✓',
    },
    {
      q: 'If $x + 3y = 24$ and $x = 3y$, what is $x + y$?',
      choices: ['$12$', '$4$', '$16$', '$24$'],
      answer: 2,
      solution: 'Substitute $x = 3y$ into the first equation: $3y + 3y = 24$, so $6y = 24$ and $y = 4$. Then $x = 3(4) = 12$, and $x + y = 12 + 4 = 16$. Check: $12 + 3(4) = 24$. ✓',
    },
    {
      q: 'If $4x + 3y = 33$ and $y = 2x + 1$, what is the product $xy$?',
      choices: ['$10$', '$3$', '$7$', '$21$'],
      answer: 3,
      solution: 'Substitute with parentheses: $4x + 3(2x + 1) = 33$, so $4x + 6x + 3 = 33$, $10x = 30$, and $x = 3$. Then $y = 2(3) + 1 = 7$, so $xy = 3 \\times 7 = 21$. Check: $4(3) + 3(7) = 12 + 21 = 33$. ✓',
    },
    {
      q: 'Solve $2x + 5y = 30$ and $x - y = 1$. What is $x$?',
      choices: ['$5$', '$4$', '$9$', '$6$'],
      answer: 0,
      solution: 'The second equation rearranges to $x = y + 1$. Substitute: $2(y + 1) + 5y = 30$, so $2y + 2 + 5y = 30$, $7y = 28$, and $y = 4$. Then $x = 4 + 1 = 5$. Check both: $2(5) + 5(4) = 30$ ✓ and $5 - 4 = 1$ ✓.',
    },
  ],
}

const s53 = {
  id: '5.3',
  title: 'Elimination',
  learn: {
    concepts: [
      {
        heading: 'Add equations to make a variable vanish',
        body: 'You may add two true equations — left side plus left side, right side plus right side — and the result is still true. If one equation has $+y$ and the other has $-y$, adding cancels the $y$ terms completely: from $x + y = 12$ and $x - y = 4$, adding gives $2x = 16$.',
      },
      {
        heading: 'Subtract when the terms match',
        body: 'If both equations contain the SAME term, subtract instead. From $2x + 3y = 19$ and $2x + y = 13$, subtracting removes the $2x$ from each and leaves $2y = 6$. Subtract every term — including the right-hand sides.',
      },
      {
        heading: 'Scale first if nothing matches',
        body: 'No matching terms? Make some! Multiplying an entire equation by a number keeps it true. To eliminate $y$ from $3x + 2y = 16$ and $x + y = 6$, double the second equation to get $2x + 2y = 12$ — now the $2y$ terms match and you can subtract.',
      },
      {
        heading: 'Choose the easier target',
        body: 'Look at both variables and eliminate the one that takes less work — ideally one whose coefficients already match, or are opposites, or where scaling just ONE equation is enough. A moment of planning saves a page of arithmetic.',
      },
    ],
    examples: [
      {
        problem: 'Solve the system $x + y = 12$ and $x - y = 4$.',
        steps: [
          'The $y$ terms are $+y$ and $-y$ — opposites! Add the equations: $(x + y) + (x - y) = 12 + 4$.',
          'The $y$ terms cancel: $2x = 16$, so $x = 8$.',
          'Substitute back: $8 + y = 12$, so $y = 4$.',
          'Check: $8 + 4 = 12$ ✓ and $8 - 4 = 4$ ✓.',
        ],
        answer: '$(x, y) = (8, 4)$',
      },
      {
        problem: 'Solve the system $2x + 3y = 19$ and $2x + y = 13$.',
        steps: [
          'Both equations have $2x$, so subtract the second from the first: $(2x + 3y) - (2x + y) = 19 - 13$.',
          'That leaves $2y = 6$, so $y = 3$.',
          'Substitute into $2x + y = 13$: $2x + 3 = 13$, so $x = 5$.',
          'Check: $2(5) + 3(3) = 10 + 9 = 19$ ✓.',
        ],
        answer: '$(x, y) = (5, 3)$',
      },
      {
        problem: 'Solve the system $3x + 2y = 16$ and $x + y = 6$.',
        steps: [
          'No terms match yet. Multiply the second equation by $2$: it becomes $2x + 2y = 12$.',
          'Now subtract it from the first: $(3x + 2y) - (2x + 2y) = 16 - 12$, so $x = 4$.',
          'Then $4 + y = 6$ gives $y = 2$. Check: $3(4) + 2(2) = 12 + 4 = 16$ ✓.',
        ],
        answer: '$(x, y) = (4, 2)$',
      },
    ],
  },
  problems: [
    {
      q: 'Solve $x + y = 10$ and $x - y = 2$ by adding the equations. What is $x$?',
      choices: ['$6$', '$4$', '$5$', '$12$'],
      answer: 0,
      solution: 'Adding cancels the $y$ terms: $2x = 12$, so $x = 6$. (Then $y = 4$.) Check: $6 + 4 = 10$ ✓ and $6 - 4 = 2$ ✓.',
    },
    {
      q: 'Solve $x + y = 15$ and $x - y = 5$. What is $y$?',
      choices: ['$10$', '$20$', '$5$', '$15$'],
      answer: 2,
      solution: 'Add the equations: $2x = 20$, so $x = 10$. Then $10 + y = 15$ gives $y = 5$. Check: $10 - 5 = 5$. ✓ ($10$ is $x$ — read the question twice!)',
    },
    {
      q: 'Which single move eliminates $y$ from the system $3x + y = 14$ and $2x - y = 6$?',
      choices: ['Subtract the second equation from the first', 'Add the two equations', 'Multiply the first equation by $2$, then add', 'Substitute $y = x$ into the first equation'],
      answer: 1,
      solution: 'The $y$ terms are $+y$ and $-y$, so simply adding cancels them: $5x = 20$. Subtracting instead gives $x + 2y = 8$ — both variables survive. And $y = x$ is not information we were given!',
    },
    {
      q: 'Solve $2x + y = 11$ and $x + y = 7$. What is $y$?',
      choices: ['$4$', '$7$', '$2$', '$3$'],
      answer: 3,
      solution: 'Both equations have $+y$, so subtract: $(2x + y) - (x + y) = 11 - 7$, leaving $x = 4$. Then $4 + y = 7$ gives $y = 3$. Check: $2(4) + 3 = 11$. ✓',
    },
    {
      q: 'Solve the system $3x + 2y = 22$ and $3x - 2y = 14$.',
      choices: ['$(2, 6)$', '$(6, 2)$', '$(6, 4)$', '$(4, 2)$'],
      answer: 1,
      solution: 'Add to cancel the $y$ terms: $6x = 36$, so $x = 6$. Then $3(6) + 2y = 22$ gives $2y = 4$, so $y = 2$: the pair is $(6, 2)$. Check the second equation: $18 - 4 = 14$. ✓',
    },
    {
      q: 'Solve $2x + 3y = 16$ and $x + 3y = 11$. What is $x$?',
      choices: ['$5$', '$2$', '$3$', '$11$'],
      answer: 0,
      solution: 'The $3y$ terms match, so subtract: $(2x + 3y) - (x + 3y) = 16 - 11$, leaving $x = 5$. (Then $3y = 6$, so $y = 2$.) Check: $2(5) + 3(2) = 16$. ✓',
    },
    {
      q: 'To eliminate $x$ from $2x + 5y = 19$ and $3x + 2y = 12$, what should you do before subtracting?',
      choices: ['Multiply the first by $2$ and the second by $5$', 'Multiply the first by $5$ and the second by $2$', 'Multiply the first by $3$ and the second by $2$', 'Add the equations as they are'],
      answer: 2,
      solution: 'To cancel the $x$ terms, make both coefficients $6$: multiply the first equation by $3$ (giving $6x + 15y = 57$) and the second by $2$ (giving $6x + 4y = 24$). The pair of multipliers $2$ and $5$ would make the $y$ coefficients match instead — that eliminates $y$, not $x$.',
    },
    {
      q: 'Solve $3x + 4y = 25$ and $x + 2y = 11$. What is $y$?',
      choices: ['$3$', '$7$', '$5$', '$4$'],
      answer: 3,
      solution: 'Double the second equation: $2x + 4y = 22$. Subtract from the first: $x = 3$. Then $3 + 2y = 11$ gives $2y = 8$, so $y = 4$. Check: $3(3) + 4(4) = 9 + 16 = 25$. ✓',
    },
    {
      q: 'If $5x + 2y = 26$ and $3x - 2y = 6$, what is $x + y$?',
      choices: ['$4$', '$7$', '$3$', '$12$'],
      answer: 1,
      solution: 'Add to cancel $y$: $8x = 32$, so $x = 4$. Then $5(4) + 2y = 26$ gives $2y = 6$, so $y = 3$. The question asks for $x + y = 4 + 3 = 7$. Check: $3(4) - 2(3) = 6$. ✓',
    },
    {
      q: 'If $4x + 3y = 30$ and $3x + 4y = 26$, what is $x + y$?',
      choices: ['$8$', '$4$', '$56$', '$6$'],
      answer: 0,
      solution: 'Here is a beautiful shortcut: ADD the equations to get $7x + 7y = 56$, then divide by $7$: $x + y = 8$. No need to find $x$ and $y$ separately! (They are $x = 6$, $y = 2$ if you are curious — and $6 + 2 = 8$. ✓)',
    },
  ],
}

const s54 = {
  id: '5.4',
  title: 'Word Problems',
  learn: {
    concepts: [
      {
        heading: 'Name your unknowns first',
        body: 'Start every word problem by declaring what your letters mean: "Let $a$ be the number of adult tickets and $c$ the number of child tickets." A clear naming sentence keeps you from solving beautifully for the wrong thing.',
      },
      {
        heading: 'Two unknowns need two facts',
        body: 'Hunt the story for two separate pieces of information. Usually one sentence counts THINGS ("$12$ tickets were sold") and another counts VALUE ("the tickets cost $\\$75$ in all"). Each fact becomes one equation.',
      },
      {
        heading: 'The count equation and the value equation',
        body: 'For coins and tickets, the count equation just adds the quantities: $a + c = 12$. The value equation multiplies each quantity by what one is worth: $8a + 5c = 75$. Keep units consistent — with coins, working entirely in cents avoids decimals.',
      },
      {
        heading: 'Answer the actual question',
        body: 'After solving, reread the question. If it asks for the number of dimes, do not report the nickels — and if it asks for a total or a difference, one more step remains. Finish by checking your answer against the STORY, not just your equations.',
      },
    ],
    examples: [
      {
        problem: 'Two numbers have a sum of $30$ and a difference of $6$. Find them.',
        steps: [
          'Let the numbers be $x$ and $y$ with $x$ larger. The facts say $x + y = 30$ and $x - y = 6$.',
          'Add the equations: $2x = 36$, so $x = 18$. Then $y = 30 - 18 = 12$.',
          'Check against the story: $18 + 12 = 30$ ✓ and $18 - 12 = 6$ ✓.',
        ],
        answer: 'The numbers are $18$ and $12$',
      },
      {
        problem: 'A theater sells adult tickets for $\\$8$ and child tickets for $\\$5$. It sold $12$ tickets for a total of $\\$75$. How many adult tickets were sold?',
        steps: [
          'Let $a$ be adult tickets and $c$ be child tickets. Count: $a + c = 12$. Value: $8a + 5c = 75$.',
          'Multiply the count equation by $5$: $5a + 5c = 60$. Subtract from the value equation: $3a = 15$, so $a = 5$.',
          'Then $c = 12 - 5 = 7$. Check: $8(5) + 5(7) = 40 + 35 = 75$. ✓',
        ],
        answer: '$5$ adult tickets (and $7$ child tickets)',
      },
      {
        problem: 'A jar holds $14$ coins, all nickels and dimes, worth $95$ cents. How many dimes are there?',
        steps: [
          'Let $n$ be nickels and $d$ be dimes. Count: $n + d = 14$. Value in cents: $5n + 10d = 95$.',
          'Multiply the count equation by $5$: $5n + 5d = 70$. Subtract: $5d = 25$, so $d = 5$.',
          'Then $n = 9$. Check: $9$ nickels and $5$ dimes make $45 + 50 = 95$ cents. ✓',
        ],
        answer: '$5$ dimes',
      },
    ],
  },
  problems: [
    {
      q: 'Two numbers add up to $20$, and one is $4$ more than the other. What is the larger number?',
      choices: ['$8$', '$16$', '$10$', '$12$'],
      answer: 3,
      solution: 'Let the smaller number be $x$; the larger is $x + 4$. Then $x + (x + 4) = 20$, so $2x = 16$ and $x = 8$. The LARGER number is $8 + 4 = 12$. Check: $12 + 8 = 20$ and $12 - 8 = 4$. ✓',
    },
    {
      q: 'Two numbers have a sum of $25$ and a difference of $5$. What is the smaller number?',
      choices: ['$15$', '$10$', '$20$', '$5$'],
      answer: 1,
      solution: 'With $x + y = 25$ and $x - y = 5$, adding gives $2x = 30$, so $x = 15$ and $y = 10$. The smaller number is $10$. Check: $15 + 10 = 25$ and $15 - 10 = 5$. ✓',
    },
    {
      q: 'Pencils cost $\\$2$ and pens cost $\\$3$. Lena buys $5$ items for $\\$12$. How many pens did she buy?',
      choices: ['$2$', '$3$', '$5$', '$1$'],
      answer: 0,
      solution: 'Let $p$ be pencils and $q$ be pens: $p + q = 5$ and $2p + 3q = 12$. Double the first: $2p + 2q = 10$. Subtract: $q = 2$, so she bought $2$ pens (and $3$ pencils). Check: $2(3) + 3(2) = 6 + 6 = 12$. ✓',
    },
    {
      q: 'Ben is $3$ years older than Amy, and their ages add up to $21$. How old is Ben?',
      choices: ['$9$', '$15$', '$12$', '$18$'],
      answer: 2,
      solution: 'Let Amy be $a$; Ben is $a + 3$. Then $a + (a + 3) = 21$, so $2a = 18$ and $a = 9$. Ben is $9 + 3 = 12$. Check: $12 + 9 = 21$. ✓ ($9$ is Amy’s age — the question asks about Ben.)',
    },
    {
      q: 'A museum sells adult tickets for $\\$9$ and student tickets for $\\$4$. It sold $11$ tickets for $\\$74$. How many adult tickets were sold?',
      choices: ['$5$', '$11$', '$7$', '$6$'],
      answer: 3,
      solution: 'Count: $a + s = 11$. Value: $9a + 4s = 74$. Multiply the count by $4$: $4a + 4s = 44$. Subtract: $5a = 30$, so $a = 6$ and $s = 5$. Check: $9(6) + 4(5) = 54 + 20 = 74$. ✓',
    },
    {
      q: 'A piggy bank holds $14$ coins, all nickels and dimes, worth exactly $\\$1.00$. How many dimes are inside?',
      choices: ['$6$', '$8$', '$14$', '$4$'],
      answer: 0,
      solution: 'Work in cents: $n + d = 14$ and $5n + 10d = 100$. Multiply the count by $5$: $5n + 5d = 70$. Subtract: $5d = 30$, so $d = 6$ and $n = 8$. Check: $8$ nickels and $6$ dimes make $40 + 60 = 100$ cents. ✓',
    },
    {
      q: 'A farm has chickens and cows — $15$ heads and $44$ legs in all. How many cows are there?',
      choices: ['$8$', '$7$', '$15$', '$6$'],
      answer: 1,
      solution: 'Heads: $c + w = 15$. Legs: $2c + 4w = 44$. Double the head equation: $2c + 2w = 30$. Subtract: $2w = 14$, so $w = 7$ cows (and $c = 8$ chickens). Check: $2(8) + 4(7) = 16 + 28 = 44$ legs. ✓',
    },
    {
      q: 'The sum of two numbers is $36$, and the larger is twice the smaller. What is the larger number?',
      choices: ['$12$', '$18$', '$24$', '$30$'],
      answer: 2,
      solution: 'Let the smaller be $s$; the larger is $2s$. Then $s + 2s = 36$, so $3s = 36$ and $s = 12$. The larger number is $2(12) = 24$. Check: $24 + 12 = 36$ and $24$ is twice $12$. ✓',
    },
    {
      q: 'A shop blends $\\$6$-per-kg beans with $\\$9$-per-kg beans to make $10$ kg of blend worth $\\$72$. How many kg of the $\\$9$ beans are used?',
      choices: ['$4$', '$6$', '$10$', '$3$'],
      answer: 0,
      solution: 'Let $x$ be kg of $\\$6$ beans and $y$ be kg of $\\$9$ beans: $x + y = 10$ and $6x + 9y = 72$. Multiply the first by $6$: $6x + 6y = 60$. Subtract: $3y = 12$, so $y = 4$ (and $x = 6$). Check: $6(6) + 9(4) = 36 + 36 = 72$. ✓',
    },
    {
      q: 'A two-digit number has digits that add up to $11$, and its tens digit is $3$ more than its units digit. What is the number?',
      choices: ['$47$', '$83$', '$65$', '$74$'],
      answer: 3,
      solution: 'Let $t$ and $u$ be the tens and units digits: $t + u = 11$ and $t - u = 3$. Add: $2t = 14$, so $t = 7$ and $u = 4$ — the number is $74$. Check: $7 + 4 = 11$ ✓ and $7 - 4 = 3$ ✓. ($47$ swaps the digits; $83$ has digit sum $11$ but difference $5$.)',
    },
  ],
}

const s55 = {
  id: '5.5',
  title: 'More Linear Equations in Disguise',
  learn: {
    concepts: [
      {
        heading: 'Clear the fractions first',
        body: 'An equation like $\\frac{x+y}{2} = 6$ is a linear equation wearing a costume. Multiply both sides by $2$ and the disguise falls away: $x + y = 12$. Always tidy each equation into the form (number)$x$ + (number)$y$ = (number) before you solve the system.',
      },
      {
        heading: 'Proportions unfold too',
        body: 'A proportion like $\\frac{x}{y} = \\frac{3}{2}$ cross-multiplies into $2x = 3y$ — a perfectly ordinary linear equation. Pair it with a second fact like $x + y = 20$ and solve as usual.',
      },
      {
        heading: 'When the equations contradict: no solution',
        body: 'Sometimes cleaning up reveals a contradiction. If one equation says $x + y = 5$ and another says $x + y = 8$, no pair of numbers can make one sum equal two different totals. Such a system has NO solution.',
      },
      {
        heading: 'When the equations agree completely: infinitely many',
        body: 'And sometimes cleaning up reveals the two equations are secretly the SAME: $x + y = 5$ and $3x + 3y = 15$ carry identical information. Every solution of one solves the other, so there are infinitely many. The tell in both special cases: eliminating a variable wipes out BOTH variables, leaving something like $0 = 3$ (no solution) or $0 = 0$ (infinitely many).',
      },
    ],
    examples: [
      {
        problem: 'Solve the system $\\frac{x+y}{2} = 6$ and $\\frac{x-y}{3} = 2$.',
        steps: [
          'Clear each fraction: multiply the first equation by $2$ to get $x + y = 12$, and the second by $3$ to get $x - y = 6$.',
          'Now it is a familiar sum-and-difference system. Add: $2x = 18$, so $x = 9$, and then $y = 3$.',
          'Check in the ORIGINAL equations: $\\frac{9+3}{2} = 6$ ✓ and $\\frac{9-3}{3} = 2$ ✓.',
        ],
        answer: '$(x, y) = (9, 3)$',
      },
      {
        problem: 'Two numbers satisfy $\\frac{x}{y} = \\frac{3}{2}$ and $x + y = 20$. Find them.',
        steps: [
          'Cross-multiply the proportion: $2x = 3y$.',
          'From the second equation, $x = 20 - y$. Substitute: $2(20 - y) = 3y$, so $40 - 2y = 3y$ and $40 = 5y$.',
          'So $y = 8$ and $x = 12$. Check: $\\frac{12}{8} = \\frac{3}{2}$ ✓ and $12 + 8 = 20$ ✓.',
        ],
        answer: '$(x, y) = (12, 8)$',
      },
      {
        problem: 'How many solutions does the system $x + y = 5$ and $2x + 2y = 16$ have?',
        steps: [
          'Divide the second equation by $2$: it says $x + y = 8$.',
          'But the first says $x + y = 5$. The same sum cannot equal both $5$ and $8$.',
          'If you try elimination, subtracting gives $0 = 3$ — an impossibility, the signature of a system with no solution.',
        ],
        answer: 'No solution — the equations contradict each other',
      },
    ],
  },
  problems: [
    {
      q: 'Multiplying both sides of $\\frac{x+y}{2} = 5$ by $2$ gives which equation?',
      choices: ['$x + y = 10$', '$x + y = 5$', '$x + y = 7$', '$x + y = 3$'],
      answer: 0,
      solution: 'Multiplying both sides by $2$ cancels the denominator on the left and doubles the right: $x + y = 10$. (Leaving the right side as $5$ is the classic slip — both sides must be multiplied.)',
    },
    {
      q: 'Solve $\\frac{x}{2} + \\frac{y}{2} = 6$ and $x - y = 4$. What is $x$?',
      choices: ['$4$', '$6$', '$8$', '$12$'],
      answer: 2,
      solution: 'Multiply the first equation by $2$: $x + y = 12$. Add to $x - y = 4$: $2x = 16$, so $x = 8$ (and $y = 4$). Check: $\\frac{8}{2} + \\frac{4}{2} = 4 + 2 = 6$. ✓',
    },
    {
      q: 'How many solutions does the system $x + y = 7$ and $x + y = 9$ have?',
      choices: ['Exactly one', 'None', 'Two', 'Infinitely many'],
      answer: 1,
      solution: 'The same sum $x + y$ cannot equal $7$ and $9$ at the same time. Subtracting the equations gives $0 = 2$, which is impossible — so the system has no solution.',
    },
    {
      q: 'How many solutions does the system $2x + 2y = 10$ and $x + y = 5$ have?',
      choices: ['None', 'Exactly one', 'Exactly two', 'Infinitely many'],
      answer: 3,
      solution: 'Divide the first equation by $2$ — it becomes $x + y = 5$, the same as the second. Two copies of one equation give only one piece of information, so infinitely many pairs work: $(0, 5)$, $(1, 4)$, $(2.5, 2.5)$, and so on.',
    },
    {
      q: 'Solve the system $\\frac{x+y}{3} = 4$ and $\\frac{x-y}{2} = 3$.',
      choices: ['$(9, 3)$', '$(3, 9)$', '$(6, 6)$', '$(7, 5)$'],
      answer: 0,
      solution: 'Clear fractions: $x + y = 12$ and $x - y = 6$. Add: $2x = 18$, so $x = 9$ and $y = 3$. Check the originals: $\\frac{9+3}{3} = 4$ ✓ and $\\frac{9-3}{2} = 3$ ✓. The pair $(3, 9)$ makes the second difference negative.',
    },
    {
      q: 'Two numbers satisfy $\\frac{x}{y} = 2$ and $x + y = 18$. What is $x$?',
      choices: ['$6$', '$12$', '$9$', '$36$'],
      answer: 1,
      solution: 'The proportion says $x = 2y$. Substitute: $2y + y = 18$, so $3y = 18$ and $y = 6$. Then $x = 12$. Check: $\\frac{12}{6} = 2$ ✓ and $12 + 6 = 18$ ✓. ($6$ is $y$, not $x$.)',
    },
    {
      q: 'Solve $\\frac{x}{4} + \\frac{y}{4} = 3$ and $x - y = 2$. What is $y$?',
      choices: ['$7$', '$12$', '$5$', '$6$'],
      answer: 2,
      solution: 'Multiply the first equation by $4$: $x + y = 12$. With $x - y = 2$, adding gives $2x = 14$, so $x = 7$ and $y = 12 - 7 = 5$. Check: $\\frac{7}{4} + \\frac{5}{4} = \\frac{12}{4} = 3$. ✓',
    },
    {
      q: 'Which system has NO solution?',
      choices: ['$x + y = 3$ and $x + y = 8$', '$x + y = 3$ and $x - y = 1$', '$x + y = 3$ and $2x + 2y = 6$', '$x = 1$ and $y = 2$'],
      answer: 0,
      solution: 'A sum cannot equal $3$ and $8$ at once, so the first system is impossible. The second solves to $(2, 1)$, the fourth is already solved, and in the third the second equation is just the first doubled — that one has infinitely many solutions, which is very different from none!',
    },
    {
      q: 'Solve $\\frac{2x+y}{5} = 3$ and $\\frac{x+2y}{4} = 3$. What is $x$?',
      choices: ['$3$', '$5$', '$9$', '$6$'],
      answer: 3,
      solution: 'Clear fractions: $2x + y = 15$ and $x + 2y = 12$. Double the first: $4x + 2y = 30$. Subtract the second: $3x = 18$, so $x = 6$ (and $y = 15 - 12 = 3$). Check: $\\frac{12+3}{5} = 3$ ✓ and $\\frac{6+6}{4} = 3$ ✓.',
    },
    {
      q: 'For what value of $k$ does the system $x + y = 4$ and $2x + 2y = k$ have infinitely many solutions?',
      choices: ['$4$', '$8$', '$2$', 'Any value of $k$'],
      answer: 1,
      solution: 'The second equation is the first multiplied by $2$ — provided the right side got doubled too. That needs $k = 2 \\times 4 = 8$. Then the equations are identical and every solution of $x + y = 4$ works. For any other $k$, they contradict and there is no solution at all.',
    },
  ],
}

const s56 = {
  id: '5.6',
  title: 'More Variables',
  learn: {
    concepts: [
      {
        heading: 'Three variables, same ideas',
        body: 'Systems with three unknowns obey the same rules: substitute, add, subtract, scale. With friendly structure you rarely need brute force — look at the SHAPE of the system before diving in.',
      },
      {
        heading: 'The add-everything trick',
        body: 'In a symmetric system like $x + y = 5$, $y + z = 8$, $x + z = 7$, each variable appears in exactly two equations. Add all three: every variable gets counted twice, so $2(x + y + z) = 20$, giving $x + y + z = 10$ in one stroke.',
      },
      {
        heading: 'Subtract to peel off one variable',
        body: 'Once you know $x + y + z = 10$ and also $x + y = 5$, subtracting hands you $z = 5$ instantly. Each original equation peels off one variable this way — three quick subtractions and the whole system is solved.',
      },
      {
        heading: 'Sometimes the target is an expression',
        body: 'If a question asks for $x + y + z$ (not the separate values), you may not need the individual variables at all. Combining whole equations often reaches the target directly — solving for each variable one by one can be the LONG way.',
      },
    ],
    examples: [
      {
        problem: 'Solve the system $x + y = 5$, $y + z = 8$, $x + z = 7$.',
        steps: [
          'Add all three equations. Each variable appears twice, so $2x + 2y + 2z = 20$, which means $x + y + z = 10$.',
          'Subtract each original equation from this total: $z = 10 - 5 = 5$, then $x = 10 - 8 = 2$, then $y = 10 - 7 = 3$.',
          'Check all three: $2 + 3 = 5$ ✓, $3 + 5 = 8$ ✓, $2 + 5 = 7$ ✓.',
        ],
        answer: '$(x, y, z) = (2, 3, 5)$',
      },
      {
        problem: 'Solve the chain: $x = 2$, $x + y = 6$, $y + z = 9$.',
        steps: [
          'The first equation hands us $x = 2$ for free.',
          'Feed it into the second: $2 + y = 6$, so $y = 4$.',
          'Feed THAT into the third: $4 + z = 9$, so $z = 5$. Each answer unlocks the next equation, like a row of dominoes.',
        ],
        answer: '$(x, y, z) = (2, 4, 5)$',
      },
      {
        problem: 'If $a + b = 11$, $b + c = 13$, and $a + c = 12$, find $a + b + c$ without finding $a$, $b$, or $c$.',
        steps: [
          'Add the three equations: $(a + b) + (b + c) + (a + c) = 11 + 13 + 12 = 36$.',
          'The left side is $2a + 2b + 2c$, so $2(a + b + c) = 36$.',
          'Divide by $2$: $a + b + c = 18$. We never needed the individual values!',
        ],
        answer: '$a + b + c = 18$',
      },
    ],
  },
  problems: [
    {
      q: 'If $x = 3$, $x + y = 8$, and $y + z = 12$, what is $z$?',
      choices: ['$5$', '$12$', '$7$', '$9$'],
      answer: 2,
      solution: 'Chain through: $x = 3$ gives $3 + y = 8$, so $y = 5$. Then $5 + z = 12$, so $z = 7$. Check: $5 + 7 = 12$. ✓ ($5$ is $y$ — one more domino to go!)',
    },
    {
      q: 'If $x + y = 9$, $y + z = 11$, and $x + z = 10$, what is $x + y + z$?',
      choices: ['$15$', '$30$', '$10$', '$20$'],
      answer: 0,
      solution: 'Add all three equations: each variable appears twice, so $2(x + y + z) = 9 + 11 + 10 = 30$. Divide by $2$: $x + y + z = 15$. (Forgetting to halve is the classic slip — $30$ counts everyone twice.)',
    },
    {
      q: 'If $a + b = 7$, $b + c = 9$, and $a + c = 8$, what is $c$?',
      choices: ['$3$', '$4$', '$12$', '$5$'],
      answer: 3,
      solution: 'Add all three: $2(a + b + c) = 24$, so $a + b + c = 12$. Subtract $a + b = 7$: $c = 12 - 7 = 5$. Check: then $a = 3$, $b = 4$, and $b + c = 4 + 5 = 9$ ✓, $a + c = 3 + 5 = 8$ ✓.',
    },
    {
      q: 'If $x + y + z = 20$ and $x + y = 13$, what is $z$?',
      choices: ['$13$', '$7$', '$33$', '$6$'],
      answer: 1,
      solution: 'Subtract the second equation from the first: $(x + y + z) - (x + y) = 20 - 13$, so $z = 7$. The whole group minus the pair leaves just $z$.',
    },
    {
      q: 'If $x + y = 10$, $y + z = 14$, and $x + z = 12$, what is $y$?',
      choices: ['$6$', '$4$', '$8$', '$18$'],
      answer: 0,
      solution: 'Add all three: $2(x + y + z) = 36$, so $x + y + z = 18$. Subtract the equation WITHOUT $y$, namely $x + z = 12$: $y = 18 - 12 = 6$. Check: then $x = 4$ and $z = 8$, and indeed $4 + 6 = 10$ ✓, $6 + 8 = 14$ ✓.',
    },
    {
      q: 'If $y = 2x$, $z = 2y$, and $x + y + z = 21$, what is $z$?',
      choices: ['$3$', '$6$', '$12$', '$9$'],
      answer: 2,
      solution: 'Write everything in terms of $x$: $y = 2x$ and $z = 2y = 4x$. Then $x + 2x + 4x = 7x = 21$, so $x = 3$, $y = 6$, and $z = 12$. Check: $3 + 6 + 12 = 21$. ✓',
    },
    {
      q: 'If $a + b = 12$, $b + c = 17$, and $a + c = 15$, which of $a$, $b$, $c$ is the largest, and what is its value?',
      choices: ['$a$, which is $7$', '$c$, which is $10$', '$b$, which is $5$', '$c$, which is $22$'],
      answer: 1,
      solution: 'Add all three: $2(a + b + c) = 44$, so $a + b + c = 22$. Peel off each variable: $c = 22 - 12 = 10$, $a = 22 - 17 = 5$, $b = 22 - 15 = 7$. The largest is $c = 10$. Check: $5 + 7 = 12$ ✓, $7 + 10 = 17$ ✓, $5 + 10 = 15$ ✓.',
    },
    {
      q: 'If $x + y + z = 25$, $y = x + 2$, and $z = x + 5$, what is $z$?',
      choices: ['$6$', '$8$', '$14$', '$11$'],
      answer: 3,
      solution: 'Substitute both expressions into the first equation: $x + (x + 2) + (x + 5) = 25$, so $3x + 7 = 25$, $3x = 18$, and $x = 6$. Then $z = 6 + 5 = 11$ (and $y = 8$). Check: $6 + 8 + 11 = 25$. ✓',
    },
    {
      q: 'If $2x + y + z = 16$, $x + 2y + z = 17$, and $x + y + 2z = 19$, what is $x + y + z$?',
      choices: ['$13$', '$52$', '$16$', '$12$'],
      answer: 0,
      solution: 'Add all three equations: each variable appears four times in total, so $4(x + y + z) = 16 + 17 + 19 = 52$, giving $x + y + z = 13$. (Bonus: subtracting $13$ from each equation gives $x = 3$, $y = 4$, $z = 6$ — and $3 + 4 + 6 = 13$. ✓)',
    },
    {
      q: 'If $x + y = 3$, $y + z = 5$, and $z + w = 7$, what is $w + x$?',
      choices: ['$10$', '$7$', '$5$', '$4$'],
      answer: 2,
      solution: 'Group cleverly: $(x + y) + (z + w) = 3 + 7 = 10$, so all four variables sum to $10$. But $(y + z) + (w + x)$ is the SAME four variables, so it also equals $10$. Since $y + z = 5$, we get $w + x = 10 - 5 = 5$. No individual values needed!',
    },
  ],
}

const challenge = [
  {
    q: 'If $x + y = 16$ and $x - y = 6$, what is the product $xy$?',
    choices: ['$66$', '$55$', '$45$', '$80$'],
    answer: 1,
    solution: 'Add the equations: $2x = 22$, so $x = 11$ and $y = 16 - 11 = 5$. The product is $11 \\times 5 = 55$. Check: $11 - 5 = 6$. ✓',
  },
  {
    q: 'Solve $3x + y = 17$ and $x + y = 9$. What is $y$?',
    choices: ['$4$', '$9$', '$13$', '$5$'],
    answer: 3,
    solution: 'Subtract the second equation from the first: $2x = 8$, so $x = 4$. Then $4 + y = 9$ gives $y = 5$. Check: $3(4) + 5 = 17$. ✓',
  },
  {
    q: 'Solve the system $y = 3x - 2$ and $2x + y = 18$.',
    choices: ['$(4, 10)$', '$(10, 4)$', '$(4, 8)$', '$(5, 13)$'],
    answer: 0,
    solution: 'Substitute: $2x + (3x - 2) = 18$, so $5x = 20$ and $x = 4$. Then $y = 3(4) - 2 = 10$, giving $(4, 10)$. Check: $2(4) + 10 = 18$. ✓ The pair $(5, 13)$ fits $y = 3x - 2$ but gives $2(5) + 13 = 23$, failing the second equation.',
  },
  {
    q: 'A stadium sold $200$ tickets — adults at $\\$7$ and children at $\\$4$ — for a total of $\\$1130$. How many child tickets were sold?',
    choices: ['$110$', '$100$', '$90$', '$80$'],
    answer: 2,
    solution: 'Count: $a + c = 200$. Value: $7a + 4c = 1130$. Multiply the count by $4$: $4a + 4c = 800$. Subtract: $3a = 330$, so $a = 110$ and $c = 200 - 110 = 90$. Check: $7(110) + 4(90) = 770 + 360 = 1130$. ✓',
  },
  {
    q: 'Solve $\\frac{x+y}{4} = 3$ and $\\frac{x-y}{2} = 4$. What is $x$?',
    choices: ['$10$', '$2$', '$12$', '$8$'],
    answer: 0,
    solution: 'Clear fractions: $x + y = 12$ and $x - y = 8$. Add: $2x = 20$, so $x = 10$ (and $y = 2$). Check: $\\frac{10+2}{4} = 3$ ✓ and $\\frac{10-2}{2} = 4$ ✓.',
  },
  {
    q: 'How many solutions does the system $2x + 3y = 6$ and $4x + 6y = 12$ have?',
    choices: ['None', 'Exactly one', 'Exactly two', 'Infinitely many'],
    answer: 3,
    solution: 'Divide the second equation by $2$: it becomes $2x + 3y = 6$, identical to the first. One equation in two unknowns has infinitely many solutions, so the system does too.',
  },
  {
    q: 'The average of two numbers is $14$, and their difference is $6$. What is the larger number?',
    choices: ['$14$', '$17$', '$11$', '$20$'],
    answer: 1,
    solution: 'An average of $14$ means the SUM is $28$: $x + y = 28$, with $x - y = 6$. Add: $2x = 34$, so $x = 17$ (and $y = 11$). Check: the average of $17$ and $11$ is $\\frac{28}{2} = 14$. ✓',
  },
  {
    q: 'If $p + q = 15$, $q + r = 20$, and $p + r = 17$, what is $q$?',
    choices: ['$6$', '$11$', '$9$', '$26$'],
    answer: 2,
    solution: 'Add all three: $2(p + q + r) = 52$, so $p + q + r = 26$. Subtract the equation without $q$, namely $p + r = 17$: $q = 26 - 17 = 9$. Check: then $p = 6$, $r = 11$, and $6 + 9 = 15$ ✓, $9 + 11 = 20$ ✓.',
  },
  {
    q: 'Solve $5x + 3y = 45$ and $2x + 3y = 27$. What is $x$?',
    choices: ['$6$', '$5$', '$3$', '$9$'],
    answer: 0,
    solution: 'The $3y$ terms match, so subtract: $3x = 18$ and $x = 6$. (Then $3y = 27 - 12 = 15$, so $y = 5$.) Check: $5(6) + 3(5) = 30 + 15 = 45$. ✓',
  },
  {
    q: 'For what value of $k$ does the system $x + 2y = 5$ and $3x + 6y = k$ have infinitely many solutions?',
    choices: ['$5$', '$3$', '$10$', '$15$'],
    answer: 3,
    solution: 'The left side of the second equation is $3$ times the left side of the first, so the right side must be tripled too: $k = 3 \\times 5 = 15$. Then the equations are identical. Any other $k$ creates a contradiction and no solution.',
  },
  {
    q: 'A jar of $25$ coins, all nickels and quarters, is worth $\\$3.05$. How many quarters are in the jar?',
    choices: ['$16$', '$9$', '$12$', '$8$'],
    answer: 1,
    solution: 'Work in cents: $n + q = 25$ and $5n + 25q = 305$. Divide the value equation by $5$: $n + 5q = 61$. Subtract the count equation: $4q = 36$, so $q = 9$ (and $n = 16$). Check: $5(16) + 25(9) = 80 + 225 = 305$ cents. ✓',
  },
  {
    q: 'Three siblings’ ages pair up like this: the first two sum to $24$, the last two sum to $28$, and the first and third sum to $26$. How old is the oldest sibling?',
    choices: ['$13$', '$11$', '$15$', '$39$'],
    answer: 2,
    solution: 'With ages $A + B = 24$, $B + C = 28$, $A + C = 26$: add all three to get $2(A + B + C) = 78$, so $A + B + C = 39$. Peel off: $C = 39 - 24 = 15$, $A = 39 - 28 = 11$, $B = 39 - 26 = 13$. The oldest is $15$. Check: $11 + 13 = 24$ ✓, $13 + 15 = 28$ ✓, $11 + 15 = 26$ ✓.',
  },
]

const worksheet = [
  {
    q: 'Solve the system $x + y = 14$ and $x - y = 2$.',
    answer: '$(x, y) = (8, 6)$',
    solution: 'Add the equations to cancel $y$: $2x = 16$, so $x = 8$. Then $8 + y = 14$ gives $y = 6$. Check: $8 - 6 = 2$. ✓',
  },
  {
    q: 'Solve the system $y = x + 4$ and $x + y = 18$.',
    answer: '$(x, y) = (7, 11)$',
    solution: 'Substitute: $x + (x + 4) = 18$, so $2x = 14$ and $x = 7$. Then $y = 7 + 4 = 11$. Check: $7 + 11 = 18$. ✓',
  },
  {
    q: 'Solve the system $2x + y = 13$ and $x + y = 8$.',
    answer: '$(x, y) = (5, 3)$',
    solution: 'Subtract the second equation from the first: $x = 5$. Then $5 + y = 8$ gives $y = 3$. Check: $2(5) + 3 = 13$. ✓',
  },
  {
    q: 'Write down two DIFFERENT solution pairs of the equation $x + y = 9$.',
    answer: 'Any two distinct pairs summing to $9$, such as $(1, 8)$ and $(4, 5)$',
    solution: 'Pick any $x$ and let $y = 9 - x$: for instance $(1, 8)$ and $(4, 5)$, since $1 + 8 = 9$ and $4 + 5 = 9$. One equation in two unknowns has infinitely many solutions, so any two correct pairs earn full credit.',
  },
  {
    q: 'A theater sold $10$ tickets — adults at $\\$6$ and children at $\\$4$ — for $\\$52$. How many of each ticket were sold?',
    answer: '$6$ adult tickets and $4$ child tickets',
    solution: 'Count: $a + c = 10$. Value: $6a + 4c = 52$. Multiply the count by $4$: $4a + 4c = 40$. Subtract: $2a = 12$, so $a = 6$ and $c = 4$. Check: $6(6) + 4(4) = 36 + 16 = 52$. ✓',
  },
  {
    q: 'Solve the system $\\frac{x+y}{2} = 8$ and $\\frac{x-y}{4} = 1$.',
    answer: '$(x, y) = (10, 6)$',
    solution: 'Clear the fractions: $x + y = 16$ and $x - y = 4$. Add: $2x = 20$, so $x = 10$ and $y = 6$. Check the originals: $\\frac{10+6}{2} = 8$ ✓ and $\\frac{10-6}{4} = 1$ ✓.',
  },
  {
    q: 'Solve the system $3x + 2y = 26$ and $2x + 5y = 32$.',
    answer: '$(x, y) = (6, 4)$',
    solution: 'Scale both equations to match the $y$ coefficients: multiply the first by $5$ ($15x + 10y = 130$) and the second by $2$ ($4x + 10y = 64$). Subtract: $11x = 66$, so $x = 6$. Then $3(6) + 2y = 26$ gives $2y = 8$, so $y = 4$. Check: $2(6) + 5(4) = 12 + 20 = 32$. ✓',
  },
  {
    q: 'A collection of $18$ coins, all dimes and quarters, is worth $\\$3.00$. How many of each coin are there?',
    answer: '$10$ dimes and $8$ quarters',
    solution: 'Work in cents: $d + q = 18$ and $10d + 25q = 300$. Divide the value equation by $5$: $2d + 5q = 60$. Double the count equation: $2d + 2q = 36$. Subtract: $3q = 24$, so $q = 8$ and $d = 10$. Check: $10(10) + 25(8) = 100 + 200 = 300$ cents. ✓',
  },
  {
    q: 'If $a + b = 13$, $b + c = 16$, and $a + c = 15$, find $a$, $b$, and $c$.',
    answer: '$a = 6$, $b = 7$, $c = 9$',
    solution: 'Add all three equations: $2(a + b + c) = 44$, so $a + b + c = 22$. Subtract each pair equation: $c = 22 - 13 = 9$, $a = 22 - 16 = 6$, $b = 22 - 15 = 7$. Check: $6 + 7 = 13$ ✓, $7 + 9 = 16$ ✓, $6 + 9 = 15$ ✓.',
  },
  {
    q: 'For which values of $k$ does the system $2x + y = 7$ and $4x + 2y = k$ have NO solution?',
    answer: 'Every $k$ except $14$ (if $k = 14$ there are infinitely many solutions)',
    solution: 'Divide the second equation by $2$: it says $2x + y = \\frac{k}{2}$. The first says $2x + y = 7$. If $\\frac{k}{2} \\neq 7$ — that is, $k \\neq 14$ — the two equations contradict and no pair works. If $k = 14$, the equations are identical and there are infinitely many solutions; there is no $k$ that gives exactly one.',
  },
]

export default {
  id: 'intro-algebra-ch05',
  book: 'intro-algebra',
  number: 5,
  title: 'Multi-Variable Linear Equations',
  intro:
    'One equation with two unknowns has endless solutions — but add a second equation, and suddenly the answer snaps into focus. In this chapter you will learn two powerful ways to solve systems of equations, substitution and elimination, and then use them to crack word problems, disguised equations, and even systems with three or more variables.',
  sections: [s51, s52, s53, s54, s55, s56],
  challenge,
  worksheet,
}
