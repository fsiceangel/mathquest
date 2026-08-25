// Introduction to Algebra chapter 5 — variations for sections 5.1, 5.2 and 5.3.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every solution pair was substituted back into BOTH original equations with
//    exact integer arithmetic, not just the equation it was solved from.
//  - Every system was checked to be independent: the two equations are never
//    multiples of each other (which would give infinitely many solutions) and
//    never parallel (which would give none). Each has the unique pair claimed.
//  - Every distractor is the output of a named mistake — the OTHER variable's
//    value, a sign slip while eliminating, stopping before the final division,
//    adding where subtraction was needed, or reporting a sum instead of the
//    single value asked for. No two choices in an item share a VALUE.
//  - Numbers were chosen so the named wrong method never lands on the key, and
//    so that x and y are never equal (a system with x = y hides swap errors).
//  - Solution pairs are integers throughout, matching the base chapter.

const s51 = [
  // p1 — substitute a known value into a two-variable equation
  [
    {
      q: 'If $x = 6$ in the equation $x + y = 15$, what is $y$?',
      choices: ['$9$', '$21$', '$6$', '$-9$'],
      answer: 0,
      solution:
        'Substitute $x = 6$: the equation becomes $6 + y = 15$, so $y = 15 - 6 = 9$. Check: $6 + 9 = 15$. ✓ The choice $21$ adds the two given numbers instead of subtracting. The choice $6$ just repeats the value of $x$ — but the question asks for $y$. The choice $-9$ subtracts backwards, computing $6 - 15$.',
    },
    {
      q: 'If $y = 8$ in the equation $x + y = 20$, what is $x$?',
      choices: ['$28$', '$8$', '$12$', '$-12$'],
      answer: 2,
      solution:
        'This time the SECOND coordinate is given. Substitute $y = 8$: $x + 8 = 20$, so $x = 20 - 8 = 12$. Check: $12 + 8 = 20$. ✓ The choice $28$ adds instead of subtracting. The choice $8$ hands back the value that was already given. The choice $-12$ comes from computing $8 - 20$ with the subtraction the wrong way round.',
    },
    {
      q: 'If $x = 7$ in the equation $x + y = 4$, what is $y$?',
      choices: ['$11$', '$3$', '$7$', '$-3$'],
      answer: 3,
      solution:
        'Substitute $x = 7$: $7 + y = 4$, so $y = 4 - 7 = -3$. A solution pair is allowed to contain negative numbers! Check: $7 + (-3) = 4$. ✓ The choice $11$ adds $7 + 4$. The choice $3$ subtracts backwards ($7 - 4$) and so loses the minus sign. The choice $7$ repeats $x$.',
    },
  ],
  // p2 — recognise a solution pair of a single equation
  [
    {
      q: 'Which ordered pair is a solution of $x + y = 13$?',
      choices: ['$(6, 6)$', '$(8, 5)$', '$(9, 5)$', '$(4, 7)$'],
      answer: 1,
      solution:
        'Add the coordinates of each pair and look for $13$: $8 + 5 = 13$. ✓ The others give $6 + 6 = 12$, $9 + 5 = 14$, and $4 + 7 = 11$ — close, but a solution has to hit the total exactly.',
    },
    {
      q: 'Which ordered pair is a solution of $x + y = 20$?',
      choices: ['$(10, 8)$', '$(13, 6)$', '$(12, 8)$', '$(14, 7)$'],
      answer: 2,
      solution:
        'Add each pair: $12 + 8 = 20$. ✓ The others give $10 + 8 = 18$, $13 + 6 = 19$, and $14 + 7 = 21$. Every one of them is off by a little, which is exactly why you must add rather than eyeball.',
    },
    {
      q: 'Which ordered pair is a solution of $x - y = 6$?',
      choices: ['$(4, 10)$', '$(11, 4)$', '$(8, 3)$', '$(10, 4)$'],
      answer: 3,
      solution:
        'Now we SUBTRACT, first coordinate minus second: $10 - 4 = 6$. ✓ The pair $(4, 10)$ gives $4 - 10 = -6$ — the right size but the wrong sign, because the coordinates are in the wrong order. The pair $(11, 4)$ gives $7$ and $(8, 3)$ gives $5$.',
    },
  ],
  // p3 — which equation does a given pair satisfy
  [
    {
      q: 'Which equation does the pair $(2, 5)$ satisfy?',
      choices: ['$x + 2y = 12$', '$2x + y = 12$', '$x - y = 3$', '$3x + y = 12$'],
      answer: 0,
      solution:
        'Substitute $x = 2$ and $y = 5$ into each. First: $2 + 2(5) = 2 + 10 = 12$. ✓ The others give $2(2) + 5 = 9$, $2 - 5 = -3$, and $3(2) + 5 = 11$. Notice how differently the same pair behaves once the coefficients move around.',
    },
    {
      q: 'Which equation does the pair $(4, 3)$ satisfy?',
      choices: ['$3x + 2y = 17$', '$2x + 3y = 17$', '$x + y = 8$', '$4x - y = 17$'],
      answer: 1,
      solution:
        'Substitute $x = 4$ and $y = 3$: the second choice gives $2(4) + 3(3) = 8 + 9 = 17$. ✓ Swapping the coefficients gives $3(4) + 2(3) = 18$, so the first choice fails by one. The others give $4 + 3 = 7$ and $4(4) - 3 = 13$.',
    },
    {
      q: 'Which equation does the pair $(5, 1)$ satisfy?',
      choices: ['$2x + 3y = 7$', '$x + 3y = 7$', '$2x - 3y = 7$', '$3x - 2y = 7$'],
      answer: 2,
      solution:
        'Substitute $x = 5$ and $y = 1$: the third choice gives $2(5) - 3(1) = 10 - 3 = 7$. ✓ The first choice adds where it should subtract: $10 + 3 = 13$. The fourth swaps the coefficients: $3(5) - 2(1) = 13$. The second gives $5 + 3 = 8$.',
    },
  ],
  // p4 — how many solutions does one two-variable equation have
  [
    {
      q: 'If $x$ and $y$ may be any numbers at all, how many solution pairs does $2x + y = 9$ have?',
      choices: ['Infinitely many', 'One', 'Two', 'Nine'],
      answer: 0,
      solution:
        'Pick any $x$ you like and the equation tells you $y = 9 - 2x$: $(0, 9)$, $(1, 7)$, $(4, 1)$, $(-2, 13)$, and on forever. One equation with two unknowns never pins both of them down, so there are infinitely many pairs. The coefficient $2$ changes which pairs work, not how many.',
    },
    {
      q: 'If $x$ and $y$ may be any numbers at all, how many pairs satisfy $x - y = 4$?',
      choices: ['Four', 'Infinitely many', 'One', 'None'],
      answer: 1,
      solution:
        'Choose any $x$ and set $y = x - 4$: $(4, 0)$, $(10, 6)$, $(0, -4)$, $(1.5, -2.5)$, and so on forever — infinitely many. The answer "four" reads the number on the right of the equation as a count of solutions, which it is not.',
    },
    {
      q: 'How many values of $y$ make $x + y = 15$ true when $x = 7$?',
      choices: ['Infinitely many', 'None', 'Exactly one', 'Two'],
      answer: 2,
      solution:
        'Once $x$ is pinned to $7$, the equation reads $7 + y = 15$, and only $y = 8$ works. That is the whole point of a second piece of information: the equation ALONE has infinitely many pairs, but fixing $x$ leaves exactly one $y$.',
    },
  ],
  // p5 — which pair satisfies both equations of a system
  [
    {
      q: 'Which pair satisfies BOTH $x + y = 14$ and $x - y = 6$?',
      choices: ['$(9, 5)$', '$(10, 4)$', '$(4, 10)$', '$(8, 6)$'],
      answer: 1,
      solution:
        'All four pairs add to $14$, so the first equation cannot decide — the second one must. Only $(10, 4)$ gives $10 - 4 = 6$. ✓ The pair $(4, 10)$ gives $4 - 10 = -6$: same size, wrong sign, because the coordinates are swapped. The pair $(9, 5)$ gives a difference of $4$ and $(8, 6)$ gives $2$.',
    },
    {
      q: 'Which pair satisfies BOTH $x + y = 12$ and $x - y = 2$?',
      choices: ['$(5, 7)$', '$(8, 4)$', '$(7, 5)$', '$(9, 3)$'],
      answer: 2,
      solution:
        'Every choice sums to $12$, so test the difference: $7 - 5 = 2$. ✓ The pair $(5, 7)$ is the same two numbers in the wrong order and gives $-2$. The pairs $(8, 4)$ and $(9, 3)$ give differences of $4$ and $6$. Order matters — $(x, y)$ is not the same as $(y, x)$.',
    },
    {
      q: 'Which pair satisfies BOTH $x + y = 9$ and $2x + y = 13$?',
      choices: ['$(6, 3)$', '$(5, 4)$', '$(3, 6)$', '$(4, 5)$'],
      answer: 3,
      solution:
        'All four pairs sum to $9$, so use the second equation. Test $(4, 5)$: $2(4) + 5 = 8 + 5 = 13$. ✓ The swapped pair $(5, 4)$ gives $2(5) + 4 = 14$, and $(6, 3)$ gives $15$, and $(3, 6)$ gives $12$. Because $x$ carries the coefficient $2$, swapping the coordinates changes the value.',
    },
  ],
  // p6 — one coordinate is a letter; solve for it
  [
    {
      q: 'The pair $(a, 6)$ is a solution of $2x + y = 20$. What is $a$?',
      choices: ['$7$', '$13$', '$14$', '$6$'],
      answer: 0,
      solution:
        'The pair says $x = a$ and $y = 6$, so $2a + 6 = 20$. Subtract: $2a = 14$, and divide: $a = 7$. Check: $2(7) + 6 = 20$. ✓ The choice $13$ ADDS the $6$ instead of subtracting it ($2a = 26$). The choice $14$ stops at $2a = 14$ and forgets the last division. The choice $6$ repeats the $y$-coordinate.',
    },
    {
      q: 'The pair $(4, b)$ is a solution of $x + 2y = 18$. What is $b$?',
      choices: ['$14$', '$7$', '$9$', '$11$'],
      answer: 1,
      solution:
        'Here the FIRST coordinate is known: $4 + 2b = 18$, so $2b = 14$ and $b = 7$. Check: $4 + 2(7) = 4 + 14 = 18$. ✓ The choice $14$ stops at $2b = 14$ without halving. The choice $9$ ignores the $4$ altogether and solves $2b = 18$. The choice $11$ adds the $4$ rather than subtracting it ($2b = 22$).',
    },
    {
      q: 'The pair $(a, -4)$ is a solution of $2x + y = 10$. What is $a$?',
      choices: ['$3$', '$14$', '$-4$', '$7$'],
      answer: 3,
      solution:
        'Substitute $y = -4$: $2a - 4 = 10$. Add $4$ to both sides: $2a = 14$, so $a = 7$. Check: $2(7) + (-4) = 14 - 4 = 10$. ✓ The choice $3$ treats the $-4$ as $+4$ and solves $2a = 6$. The choice $14$ stops one step early. The choice $-4$ repeats the coordinate that was given.',
    },
  ],
  // p7 — test pairs against an equation with two coefficients
  [
    {
      q: 'Which of these pairs is a solution of $3x + 2y = 18$?',
      choices: ['$(4, 3)$', '$(3, 4)$', '$(6, 2)$', '$(2, 5)$'],
      answer: 0,
      solution:
        'Test $(4, 3)$: $3(4) + 2(3) = 12 + 6 = 18$. ✓ The swapped pair $(3, 4)$ gives $9 + 8 = 17$ — swapping matters because $x$ and $y$ have different coefficients. The pair $(6, 2)$ gives $18 + 4 = 22$ and $(2, 5)$ gives $6 + 10 = 16$.',
    },
    {
      q: 'Which of these pairs is a solution of $4x + y = 14$?',
      choices: ['$(6, 2)$', '$(2, 6)$', '$(2, 4)$', '$(4, 2)$'],
      answer: 1,
      solution:
        'Test $(2, 6)$: $4(2) + 6 = 8 + 6 = 14$. ✓ The swapped pair $(6, 2)$ gives $24 + 2 = 26$, which is wildly different — the coefficient $4$ sits on $x$, so it matters a great deal which number is which. The pair $(2, 4)$ gives $12$ and $(4, 2)$ gives $18$.',
    },
    {
      q: 'Which of these pairs is a solution of $5x - 2y = 11$?',
      choices: ['$(2, 3)$', '$(1, 3)$', '$(3, 2)$', '$(3, -2)$'],
      answer: 2,
      solution:
        'Test $(3, 2)$: $5(3) - 2(2) = 15 - 4 = 11$. ✓ The swapped pair $(2, 3)$ gives $10 - 6 = 4$. The pair $(3, -2)$ flips the sign of $y$ and gives $15 + 4 = 19$ — subtracting a negative adds. The pair $(1, 3)$ gives $5 - 6 = -1$.',
    },
  ],
  // p8 — counting the solutions of a system (same line / parallel / crossing)
  [
    {
      q: 'How many pairs satisfy both $x + y = 5$ and $3x + 3y = 15$?',
      choices: ['Infinitely many', 'Exactly one', 'None', 'Exactly three'],
      answer: 0,
      solution:
        'Divide the second equation by $3$: it becomes $x + y = 5$, the very same equation as the first. The "second" equation repeats what we already knew, so it narrows nothing down and every solution of $x + y = 5$ works — infinitely many. The choice "exactly three" is tempting only because of the $3$ in front, which is not a count.',
    },
    {
      q: 'How many pairs satisfy both $x + y = 6$ and $2x + 2y = 20$?',
      choices: ['Exactly one', 'None', 'Infinitely many', 'Exactly two'],
      answer: 1,
      solution:
        'Divide the second equation by $2$: it says $x + y = 10$. But the first says $x + y = 6$, and one sum cannot be both $6$ and $10$. The equations contradict each other, so NO pair works. Watch the right-hand side: doubling the left side of $x + y = 6$ should have produced $12$, not $20$.',
    },
    {
      q: 'How many pairs satisfy both $x + y = 9$ and $x - y = 1$?',
      choices: ['None', 'Infinitely many', 'Two', 'Exactly one'],
      answer: 3,
      solution:
        'These two equations really do say different things, so they pin the pair down. Adding them gives $2x = 10$, so $x = 5$ and then $y = 4$. Check both: $5 + 4 = 9$ ✓ and $5 - 4 = 1$ ✓. Exactly one pair — the usual outcome when neither equation is a copy of the other.',
    },
  ],
  // p9 — the two coordinates are linked expressions in one letter
  [
    {
      q: 'The pair $(k, 3k)$ is a solution of $x + y = 20$. What is $k$?',
      choices: ['$5$', '$15$', '$10$', '$17$'],
      answer: 0,
      solution:
        'Here $x = k$ and $y = 3k$, so $k + 3k = 20$, which is $4k = 20$ and $k = 5$. Check: the pair is $(5, 15)$ and $5 + 15 = 20$. ✓ The choice $15$ is the SECOND coordinate, not $k$. The choice $10$ halves $20$, as if the pair were $(k, k)$. The choice $17$ subtracts the $3$ instead of dividing by $4$.',
    },
    {
      q: 'The pair $(2k, 3k)$ is a solution of $x + y = 30$. What is $k$?',
      choices: ['$12$', '$6$', '$18$', '$15$'],
      answer: 1,
      solution:
        'Add the coordinates: $2k + 3k = 5k = 30$, so $k = 6$. Check: the pair is $(12, 18)$ and $12 + 18 = 30$. ✓ The choice $12$ is the first coordinate $2k$ and $18$ is the second coordinate $3k$ — both are real numbers in this problem, just not the one asked for. The choice $15$ halves $30$.',
    },
    {
      q: 'The pair $(k, k + 4)$ is a solution of $x + y = 18$. What is $k$?',
      choices: ['$11$', '$9$', '$7$', '$14$'],
      answer: 2,
      solution:
        'Add the coordinates: $k + (k + 4) = 2k + 4 = 18$. Subtract the $4$: $2k = 14$, so $k = 7$. Check: the pair is $(7, 11)$ and $7 + 11 = 18$. ✓ The choice $11$ is the second coordinate. The choice $9$ forgets the $+4$ and just halves $18$. The choice $14$ stops at $2k = 14$.',
    },
  ],
  // p10 — counting solutions once the numbers are restricted
  [
    {
      q: 'How many solutions does $x + y = 7$ have if $x$ and $y$ must both be POSITIVE whole numbers?',
      choices: ['$6$', '$7$', '$8$', 'Infinitely many'],
      answer: 0,
      solution:
        'Now $x$ can only be $1, 2, 3, 4, 5, 6$ — it must be positive, and $y = 7 - x$ must be positive too, which rules out $x = 7$. That is $6$ pairs, from $(1, 6)$ to $(6, 1)$. The choice $7$ wrongly allows $(7, 0)$, and the choice $8$ allows both $(0, 7)$ and $(7, 0)$; zero is not positive.',
    },
    {
      q: 'How many solutions does $x + y = 5$ have if $x$ and $y$ must be whole numbers and zero IS allowed?',
      choices: ['$4$', '$5$', '$6$', 'Infinitely many'],
      answer: 2,
      solution:
        'With zero allowed, $x$ may be $0, 1, 2, 3, 4, 5$, and each choice fixes $y = 5 - x$. That is $6$ pairs: $(0, 5)$, $(1, 4)$, $(2, 3)$, $(3, 2)$, $(4, 1)$, $(5, 0)$. The choice $5$ forgets one of the two ends, and the choice $4$ forgets both ends. Counting problems love to hide an extra case at the edges.',
    },
    {
      q: 'How many solutions does $x + y = 12$ have if $x$ and $y$ must both be POSITIVE whole numbers?',
      choices: ['$12$', '$13$', 'Infinitely many', '$11$'],
      answer: 3,
      solution:
        'Here $x$ runs from $1$ up to $11$, since $y = 12 - x$ must also be positive. That is $11$ pairs, $(1, 11)$ through $(11, 1)$. The choice $12$ includes the illegal pair $(12, 0)$, and $13$ includes $(0, 12)$ as well. Restricting to positive whole numbers turns infinitely many solutions into a short list.',
    },
  ],
]

const s52 = [
  // p1 — substitute y = x + c into a sum, report x
  [
    {
      q: 'Use substitution to solve $y = x + 6$ and $x + y = 20$. What is $x$?',
      choices: ['$7$', '$13$', '$10$', '$14$'],
      answer: 0,
      solution:
        'Replace $y$ with $x + 6$ in the second equation: $x + (x + 6) = 20$, so $2x + 6 = 20$, $2x = 14$, and $x = 7$. Then $y = 7 + 6 = 13$. Check BOTH: $13 = 7 + 6$ ✓ and $7 + 13 = 20$ ✓. The choice $13$ is $y$, not $x$. The choice $10$ halves $20$ and forgets the $+6$ entirely. The choice $14$ stops at $2x = 14$.',
    },
    {
      q: 'Use substitution to solve $y = x + 4$ and $x + y = 16$. What is $y$?',
      choices: ['$6$', '$10$', '$8$', '$20$'],
      answer: 1,
      solution:
        'Substitute: $x + (x + 4) = 16$, so $2x + 4 = 16$, $2x = 12$, and $x = 6$. The question wants $y$, so go one step further: $y = 6 + 4 = 10$. Check both: $10 = 6 + 4$ ✓ and $6 + 10 = 16$ ✓. The choice $6$ stops at $x$. The choice $8$ halves $16$, ignoring the $+4$. The choice $20$ adds $16 + 4$.',
    },
    {
      q: 'Use substitution to solve $y = x - 5$ and $x + y = 17$. What is $x$?',
      choices: ['$6$', '$22$', '$12$', '$11$'],
      answer: 3,
      solution:
        'Substitute: $x + (x - 5) = 17$, so $2x - 5 = 17$. Add $5$ to both sides: $2x = 22$, so $x = 11$, and then $y = 11 - 5 = 6$. Check both: $6 = 11 - 5$ ✓ and $11 + 6 = 17$ ✓. The choice $6$ is $y$ — and it is also what you get if you subtract the $5$ instead of adding it, so that slip lands you on the wrong variable twice over. The choice $22$ stops at $2x = 22$, and $12$ comes from $17 - 5$.',
    },
  ],
  // p2 — substitute a multiple, report the variable that was NOT solved first
  [
    {
      q: 'Solve $y = 4x$ and $x + y = 25$. What is $y$?',
      choices: ['$5$', '$20$', '$100$', '$21$'],
      answer: 1,
      solution:
        'Substitute: $x + 4x = 25$, so $5x = 25$ and $x = 5$. Then $y = 4(5) = 20$. Check both: $20 = 4(5)$ ✓ and $5 + 20 = 25$ ✓. The choice $5$ is $x$ — the most common slip in this whole section is reporting the variable you found first. The choice $100$ multiplies $25$ by $4$, and $21$ subtracts $4$ from $25$.',
    },
    {
      q: 'Solve $x = 2y$ and $x + y = 27$. What is $x$?',
      choices: ['$9$', '$54$', '$18$', '$25$'],
      answer: 2,
      solution:
        'This time $x$ is the one written in terms of the other letter, so substitute for $x$: $2y + y = 27$, giving $3y = 27$ and $y = 9$. Then $x = 2(9) = 18$. Check both: $18 = 2(9)$ ✓ and $18 + 9 = 27$ ✓. The choice $9$ is $y$. The choice $54$ doubles $27$, and $25$ subtracts $2$ from $27$.',
    },
    {
      q: 'Solve $y = 5x$ and $x + y = 24$. What is $x$?',
      choices: ['$4$', '$20$', '$19$', '$12$'],
      answer: 0,
      solution:
        'Substitute: $x + 5x = 24$, so $6x = 24$ and $x = 4$. (Then $y = 20$.) Check both: $20 = 5(4)$ ✓ and $4 + 20 = 24$ ✓. The choice $20$ is $y$. The choice $19$ subtracts $5$ from $24$ instead of dividing by $6$. The choice $12$ halves $24$, as though the equation were $y = x$.',
    },
  ],
  // p3 — rearrange one equation to isolate a variable
  [
    {
      q: 'What is $x + 3y = 21$ solved for $x$?',
      choices: ['$x = 21 + 3y$', '$x = 21 - 3y$', '$x = 3y - 21$', '$x = 7 - y$'],
      answer: 1,
      solution:
        'Subtract $3y$ from both sides: $x = 21 - 3y$. Check at $y = 2$: the original says $x + 6 = 21$, so $x = 15$, and $21 - 3(2) = 15$ ✓. Check at $y = -1$: the original gives $x = 24$, and $21 + 3 = 24$ ✓. The choice $x = 21 + 3y$ moves the term across without changing its sign. The choice $x = 3y - 21$ subtracts in the wrong direction. The choice $x = 7 - y$ divides the whole equation by $3$, but only the $y$-term had a $3$ to lose.',
    },
    {
      q: 'What is $2x + y = 16$ solved for $y$?',
      choices: ['$y = 2x - 16$', '$y = 16 + 2x$', '$y = 16 - 2x$', '$y = 8 - x$'],
      answer: 2,
      solution:
        'Subtract $2x$ from both sides: $y = 16 - 2x$. Check at $x = 3$: the original says $6 + y = 16$, so $y = 10$, and $16 - 6 = 10$ ✓. Check at $x = -2$: the original gives $y = 20$, and $16 + 4 = 20$ ✓. The choice $y = 16 + 2x$ forgets to flip the sign. The choice $y = 2x - 16$ subtracts backwards. The choice $y = 8 - x$ halves everything, but the lone $y$ was never doubled.',
    },
    {
      q: 'What is $x - 4y = 9$ solved for $x$?',
      choices: ['$x = 9 - 4y$', '$x = 4y - 9$', '$x = 9 + y$', '$x = 9 + 4y$'],
      answer: 3,
      solution:
        'The term to move is $-4y$, so ADD $4y$ to both sides: $x = 9 + 4y$. Check at $y = 2$: the original says $x - 8 = 9$, so $x = 17$, and $9 + 8 = 17$ ✓. Check at $y = -3$: the original gives $x = -3$, and $9 - 12 = -3$ ✓. The choice $x = 9 - 4y$ carries the minus sign across instead of undoing it. The choice $x = 4y - 9$ subtracts backwards, and $x = 9 + y$ loses the $4$.',
    },
  ],
  // p4 — what one-variable equation does the substitution produce
  [
    {
      q: 'After substituting $y = x - 4$ into $3x + y = 20$, which one-variable equation do you get?',
      choices: ['$4x - 4 = 20$', '$4x + 4 = 20$', '$3x - 4 = 20$', '$4x = 20$'],
      answer: 0,
      solution:
        'Replace $y$: $3x + (x - 4) = 20$. Combining the $x$ terms gives $4x - 4 = 20$ (whose solution is $x = 6$). The choice $4x + 4 = 20$ flips the sign of the constant, and lands on $x = 4$ instead. The choice $3x - 4 = 20$ forgets that the substituted expression contributes an $x$ of its own. The choice $4x = 20$ drops the $-4$ altogether.',
    },
    {
      q: 'After substituting $x = y + 3$ into $2x + 5y = 24$, which one-variable equation do you get?',
      choices: ['$7y - 6 = 24$', '$7y + 3 = 24$', '$7y + 6 = 24$', '$5y + 6 = 24$'],
      answer: 2,
      solution:
        'Wrap the substitution in parentheses: $2(y + 3) + 5y = 24$. Distribute: $2y + 6 + 5y = 24$, which combines to $7y + 6 = 24$. The choice $7y + 3 = 24$ multiplies only the $y$ by $2$ and leaves the $3$ alone — the classic missing-parentheses slip. The choice $7y - 6 = 24$ flips the constant. The choice $5y + 6 = 24$ loses the $2y$ that the substitution brought in.',
    },
    {
      q: 'After substituting $y = 2x + 1$ into $3x + 4y = 25$, which one-variable equation do you get?',
      choices: ['$11x + 1 = 25$', '$5x + 4 = 25$', '$11x - 4 = 25$', '$11x + 4 = 25$'],
      answer: 3,
      solution:
        'Substitute with parentheses: $3x + 4(2x + 1) = 25$. Distribute the $4$ to BOTH terms: $3x + 8x + 4 = 25$, which is $11x + 4 = 25$. The choice $11x + 1 = 25$ multiplies only the $2x$ by $4$. The choice $5x + 4 = 25$ does the opposite and multiplies only the $1$, leaving $3x + 2x$. The choice $11x - 4 = 25$ gets the arithmetic right but the sign wrong.',
    },
  ],
  // p5 — solve a system by substitution and report the whole pair
  [
    {
      q: 'Solve the system $y = 2x$ and $4x + 3y = 30$.',
      choices: ['$(6, 2)$', '$(3, 6)$', '$(2, 4)$', '$(6, 3)$'],
      answer: 1,
      solution:
        'Substitute: $4x + 3(2x) = 30$, so $4x + 6x = 10x = 30$ and $x = 3$. Then $y = 2(3) = 6$, giving $(3, 6)$. Check BOTH: $6 = 2(3)$ ✓ and $4(3) + 3(6) = 12 + 18 = 30$ ✓. The pair $(6, 2)$ satisfies only the second equation ($24 + 6 = 30$) — a warning that checking one equation is not enough. The pair $(2, 4)$ satisfies only the first. The pair $(6, 3)$ is the answer with its coordinates reversed and satisfies neither.',
    },
    {
      q: 'Solve the system $y = 4x$ and $2x + 3y = 42$.',
      choices: ['$(12, 3)$', '$(2, 8)$', '$(3, 12)$', '$(6, 10)$'],
      answer: 2,
      solution:
        'Substitute: $2x + 3(4x) = 42$, so $2x + 12x = 14x = 42$ and $x = 3$. Then $y = 4(3) = 12$, giving $(3, 12)$. Check BOTH: $12 = 4(3)$ ✓ and $2(3) + 3(12) = 6 + 36 = 42$ ✓. The pair $(2, 8)$ satisfies $y = 4x$ but gives $4 + 24 = 28$ in the second equation. The pair $(6, 10)$ satisfies the second equation but not the first. The pair $(12, 3)$ is the key reversed.',
    },
    {
      q: 'Solve the system $x = 3y$ and $2x + 5y = 44$.',
      choices: ['$(12, 4)$', '$(4, 12)$', '$(6, 2)$', '$(7, 6)$'],
      answer: 0,
      solution:
        'Substitute for $x$: $2(3y) + 5y = 44$, so $6y + 5y = 11y = 44$ and $y = 4$. Then $x = 3(4) = 12$, giving $(12, 4)$. Check BOTH: $12 = 3(4)$ ✓ and $2(12) + 5(4) = 24 + 20 = 44$ ✓. The pair $(4, 12)$ reverses the coordinates. The pair $(6, 2)$ satisfies $x = 3y$ but gives only $22$ in the second equation. The pair $(7, 6)$ satisfies the second equation but not the first.',
    },
  ],
  // p6 — x written in terms of y, report the requested variable
  [
    {
      q: 'Solve $x = y + 7$ and $x + y = 25$. What is $x$?',
      choices: ['$16$', '$9$', '$18$', '$32$'],
      answer: 0,
      solution:
        'Substitute for $x$: $(y + 7) + y = 25$, so $2y + 7 = 25$, $2y = 18$, and $y = 9$. Then $x = 9 + 7 = 16$. Check both: $16 = 9 + 7$ ✓ and $16 + 9 = 25$ ✓. The choice $9$ is $y$, the value you find first. The choice $18$ stops at $2y = 18$. The choice $32$ adds $25 + 7$.',
    },
    {
      q: 'Solve $x = y + 3$ and $x + y = 19$. What is $y$?',
      choices: ['$11$', '$8$', '$16$', '$22$'],
      answer: 1,
      solution:
        'Substitute: $(y + 3) + y = 19$, so $2y + 3 = 19$, $2y = 16$, and $y = 8$. Check both: $x = 8 + 3 = 11$, and $11 + 8 = 19$ ✓. The choice $11$ is $x$ — read the question twice before answering. The choice $16$ stops at $2y = 16$, and $22$ adds $19 + 3$ instead of subtracting.',
    },
    {
      q: 'Solve $y = x + 9$ and $x + y = 31$. What is $y$?',
      choices: ['$11$', '$22$', '$20$', '$40$'],
      answer: 2,
      solution:
        'Substitute: $x + (x + 9) = 31$, so $2x + 9 = 31$, $2x = 22$, and $x = 11$. Then $y = 11 + 9 = 20$. Check both: $20 = 11 + 9$ ✓ and $11 + 20 = 31$ ✓. The choice $11$ is $x$. The choice $22$ stops at $2x = 22$. The choice $40$ adds $31 + 9$.',
    },
  ],
  // p7 — substitute into an equation whose x carries a coefficient
  [
    {
      q: 'Solve $3x + y = 22$ and $y = x + 2$. What is $y$?',
      choices: ['$7$', '$5$', '$8$', '$12$'],
      answer: 0,
      solution:
        'Substitute: $3x + (x + 2) = 22$, so $4x + 2 = 22$, $4x = 20$, and $x = 5$. Then $y = 5 + 2 = 7$. Check both: $3(5) + 7 = 22$ ✓ and $7 = 5 + 2$ ✓. The choice $5$ is $x$. The choice $8$ comes from subtracting the $2$ instead of adding it ($4x = 24$, $x = 6$, $y = 8$) — a pair that fails the first equation, since $18 + 8 = 26$. The choice $12$ is $x + y$, not $y$.',
    },
    {
      q: 'Solve $4x + y = 30$ and $y = x + 5$. What is $y$?',
      choices: ['$5$', '$12$', '$10$', '$15$'],
      answer: 2,
      solution:
        'Substitute: $4x + (x + 5) = 30$, so $5x + 5 = 30$, $5x = 25$, and $x = 5$. Then $y = 5 + 5 = 10$. Check both: $4(5) + 10 = 30$ ✓ and $10 = 5 + 5$ ✓. The choice $12$ comes from the sign slip $5x = 35$, giving $x = 7$ and $y = 12$ — and $4(7) + 12 = 40$, so it fails. The choice $5$ is $x$, and $15$ is $x + y$.',
    },
    {
      q: 'Solve $2x + 3y = 23$ and $x = y + 4$. What is $x$?',
      choices: ['$3$', '$15$', '$10$', '$7$'],
      answer: 3,
      solution:
        'Substitute with parentheses: $2(y + 4) + 3y = 23$, so $2y + 8 + 3y = 23$, giving $5y = 15$ and $y = 3$. Then $x = 3 + 4 = 7$. Check both: $2(7) + 3(3) = 14 + 9 = 23$ ✓ and $7 = 3 + 4$ ✓. The choice $3$ is $y$. The choice $15$ stops at $5y = 15$. The choice $10$ is $x + y$.',
    },
  ],
  // p8 — solve, then combine the two values
  [
    {
      q: 'If $x + 2y = 20$ and $x = 2y$, what is $x + y$?',
      choices: ['$5$', '$10$', '$20$', '$15$'],
      answer: 3,
      solution:
        'Substitute $x = 2y$ into the first equation: $2y + 2y = 20$, so $4y = 20$ and $y = 5$. Then $x = 2(5) = 10$, and $x + y = 10 + 5 = 15$. Check both: $10 + 2(5) = 20$ ✓ and $10 = 2(5)$ ✓. The choices $10$ and $5$ are $x$ and $y$ separately — the question asks for their sum. The choice $20$ repeats the total from the first equation.',
    },
    {
      q: 'If $2x + y = 36$ and $y = 2x$, what is $x + y$?',
      choices: ['$27$', '$9$', '$18$', '$36$'],
      answer: 0,
      solution:
        'Substitute: $2x + 2x = 36$, so $4x = 36$ and $x = 9$. Then $y = 2(9) = 18$, and $x + y = 9 + 18 = 27$. Check both: $2(9) + 18 = 36$ ✓ and $18 = 2(9)$ ✓. The choices $9$ and $18$ are the individual values, and $36$ is the right-hand side of the first equation, not the sum of the variables.',
    },
    {
      q: 'If $x + 4y = 32$ and $x = 4y$, what is $x - y$?',
      choices: ['$20$', '$12$', '$16$', '$4$'],
      answer: 1,
      solution:
        'Substitute: $4y + 4y = 32$, so $8y = 32$ and $y = 4$. Then $x = 4(4) = 16$, and the question asks for the DIFFERENCE: $x - y = 16 - 4 = 12$. Check both: $16 + 4(4) = 32$ ✓ and $16 = 4(4)$ ✓. The choice $20$ is $x + y$ — the wrong combination. The choices $16$ and $4$ are $x$ and $y$ on their own.',
    },
  ],
  // p9 — substitute a two-term expression, then report a product
  [
    {
      q: 'If $3x + 2y = 34$ and $y = 2x + 3$, what is the product $xy$?',
      choices: ['$44$', '$15$', '$4$', '$11$'],
      answer: 0,
      solution:
        'Substitute with parentheses: $3x + 2(2x + 3) = 34$, so $3x + 4x + 6 = 34$, giving $7x = 28$ and $x = 4$. Then $y = 2(4) + 3 = 11$, so $xy = 4 \\times 11 = 44$. Check both: $3(4) + 2(11) = 12 + 22 = 34$ ✓ and $11 = 2(4) + 3$ ✓. The choice $15$ is the SUM $x + y$, not the product. The choices $4$ and $11$ are the values themselves.',
    },
    {
      q: 'If $2x + 3y = 30$ and $y = 3x - 1$, what is the product $xy$?',
      choices: ['$11$', '$24$', '$3$', '$8$'],
      answer: 1,
      solution:
        'Substitute with parentheses: $2x + 3(3x - 1) = 30$, so $2x + 9x - 3 = 30$, giving $11x = 33$ and $x = 3$. Then $y = 3(3) - 1 = 8$, so $xy = 3 \\times 8 = 24$. Check both: $2(3) + 3(8) = 6 + 24 = 30$ ✓ and $8 = 3(3) - 1$ ✓. The choice $11$ is $x + y$. The choices $3$ and $8$ are $x$ and $y$ separately.',
    },
    {
      q: 'If $2x + 5y = 36$ and $x = y + 4$, what is the product $xy$?',
      choices: ['$12$', '$8$', '$32$', '$4$'],
      answer: 2,
      solution:
        'Substitute with parentheses: $2(y + 4) + 5y = 36$, so $2y + 8 + 5y = 36$, giving $7y = 28$ and $y = 4$. Then $x = 4 + 4 = 8$, so $xy = 8 \\times 4 = 32$. Check both: $2(8) + 5(4) = 16 + 20 = 36$ ✓ and $8 = 4 + 4$ ✓. The choice $12$ is the sum $x + y$. The choices $8$ and $4$ are the two values on their own.',
    },
  ],
  // p10 — rearrange a difference equation first, then substitute
  [
    {
      q: 'Solve $3x + 2y = 34$ and $x - y = 3$. What is $x$?',
      choices: ['$8$', '$5$', '$13$', '$25$'],
      answer: 0,
      solution:
        'Rearrange the second equation into $x = y + 3$, then substitute: $3(y + 3) + 2y = 34$, so $3y + 9 + 2y = 34$, giving $5y = 25$ and $y = 5$. Then $x = 5 + 3 = 8$. Check BOTH: $3(8) + 2(5) = 24 + 10 = 34$ ✓ and $8 - 5 = 3$ ✓. The choice $5$ is $y$. The choice $25$ stops at $5y = 25$. The choice $13$ is $x + y$.',
    },
    {
      q: 'Solve $2x + 3y = 27$ and $x - y = 1$. What is $y$?',
      choices: ['$6$', '$5$', '$11$', '$25$'],
      answer: 1,
      solution:
        'The second equation gives $x = y + 1$. Substitute: $2(y + 1) + 3y = 27$, so $2y + 2 + 3y = 27$, giving $5y = 25$ and $y = 5$. Then $x = 6$. Check BOTH: $2(6) + 3(5) = 12 + 15 = 27$ ✓ and $6 - 5 = 1$ ✓. The choice $6$ is $x$. The choice $25$ stops at $5y = 25$, and $11$ is $x + y$.',
    },
    {
      q: 'Solve $3x + 4y = 33$ and $x - y = 4$. What is $x$?',
      choices: ['$3$', '$10$', '$7$', '$21$'],
      answer: 2,
      solution:
        'Rearrange: $x = y + 4$. Substitute: $3(y + 4) + 4y = 33$, so $3y + 12 + 4y = 33$, giving $7y = 21$ and $y = 3$. Then $x = 3 + 4 = 7$. Check BOTH: $3(7) + 4(3) = 21 + 12 = 33$ ✓ and $7 - 3 = 4$ ✓. The choice $3$ is $y$. The choice $21$ stops at $7y = 21$. The choice $10$ is $x + y$.',
    },
  ],
]

const s53 = [
  // p1 — add a sum equation and a difference equation
  [
    {
      q: 'Solve $x + y = 18$ and $x - y = 4$ by adding the equations. What is $x$?',
      choices: ['$7$', '$11$', '$22$', '$9$'],
      answer: 1,
      solution:
        'Adding the equations cancels the $y$ terms, because $+y$ and $-y$ are opposites: $2x = 22$, so $x = 11$. Then $11 + y = 18$ gives $y = 7$. Check BOTH: $11 + 7 = 18$ ✓ and $11 - 7 = 4$ ✓. The choice $7$ is $y$. The choice $22$ stops at $2x = 22$ without halving. The choice $9$ halves $18$, as if $x$ and $y$ were equal.',
    },
    {
      q: 'Solve $x + y = 20$ and $x - y = 6$. What is $y$?',
      choices: ['$13$', '$26$', '$7$', '$14$'],
      answer: 2,
      solution:
        'Add the equations: $2x = 26$, so $x = 13$. Then $13 + y = 20$ gives $y = 7$. Check BOTH: $13 + 7 = 20$ ✓ and $13 - 7 = 6$ ✓. The choice $13$ is $x$, the value you reach first. The choice $26$ stops at $2x = 26$. The choice $14$ stops at $2y = 14$, which is what SUBTRACTING the equations gives.',
    },
    {
      q: 'Solve $a + b = 9$ and $a - b = 15$. What is $b$?',
      choices: ['$12$', '$3$', '$-6$', '$-3$'],
      answer: 3,
      solution:
        'Add the equations: $2a = 24$, so $a = 12$. Then $12 + b = 9$ gives $b = -3$. A negative value is perfectly allowed. Check BOTH: $12 + (-3) = 9$ ✓ and $12 - (-3) = 15$ ✓. The choice $12$ is $a$. The choice $3$ drops the minus sign. The choice $-6$ stops at $2b = 9 - 15 = -6$.',
    },
  ],
  // p2 — sum and difference again, asking for the other variable
  [
    {
      q: 'Solve $x + y = 24$ and $x - y = 6$. What is $y$?',
      choices: ['$9$', '$15$', '$12$', '$30$'],
      answer: 0,
      solution:
        'Add the equations: $2x = 30$, so $x = 15$. Then $15 + y = 24$ gives $y = 9$. Check BOTH: $15 + 9 = 24$ ✓ and $15 - 9 = 6$ ✓. The choice $15$ is $x$. The choice $30$ forgets to halve. The choice $12$ splits $24$ evenly, which would only be right if the difference were $0$.',
    },
    {
      q: 'Solve $m + n = 30$ and $m - n = 12$. What is $m$?',
      choices: ['$9$', '$21$', '$15$', '$42$'],
      answer: 1,
      solution:
        'The letters changed but the method did not. Add: $2m = 42$, so $m = 21$. Then $21 + n = 30$ gives $n = 9$. Check BOTH: $21 + 9 = 30$ ✓ and $21 - 9 = 12$ ✓. The choice $9$ is $n$. The choice $42$ stops at $2m = 42$, and $15$ halves $30$ as though the two numbers were equal.',
    },
    {
      q: 'Solve $x + y = 11$ and $x - y = 3$. What is $y$?',
      choices: ['$7$', '$14$', '$8$', '$4$'],
      answer: 3,
      solution:
        'Add: $2x = 14$, so $x = 7$. Then $7 + y = 11$ gives $y = 4$. Check BOTH: $7 + 4 = 11$ ✓ and $7 - 4 = 3$ ✓. The choice $7$ is $x$. The choice $14$ stops at $2x = 14$. The choice $8$ stops at $2y = 8$, the result of subtracting the equations.',
    },
  ],
  // p3 — choose the move that eliminates a named variable
  [
    {
      q: 'Which single move eliminates $x$ from the system $5x + 2y = 26$ and $5x - 3y = 11$?',
      choices: [
        'Add the two equations',
        'Subtract the second equation from the first',
        'Multiply the first equation by $5$, then add',
        'Multiply the second equation by $2$, then add',
      ],
      answer: 1,
      solution:
        'Both equations contain exactly $5x$, so subtracting removes it: $(5x + 2y) - (5x - 3y) = 26 - 11$ gives $5y = 15$, so $y = 3$ and then $5x = 20$, $x = 4$. Check BOTH: $5(4) + 2(3) = 26$ ✓ and $5(4) - 3(3) = 11$ ✓. Adding would give $10x - y = 37$, with both variables still alive. Scaling first only makes the $x$ terms mismatch.',
    },
    {
      q: 'Which single move eliminates $y$ from the system $4x + 3y = 26$ and $x + y = 8$?',
      choices: [
        'Add the two equations as they are',
        'Subtract the second equation from the first',
        'Multiply the second equation by $3$, then subtract it from the first',
        'Multiply the first equation by $3$, then subtract the second',
      ],
      answer: 2,
      solution:
        'The $y$ terms are $3y$ and $y$, which do not match yet. Tripling the second equation gives $3x + 3y = 24$; subtracting that from the first leaves $x = 2$, and then $y = 6$. Check BOTH: $4(2) + 3(6) = 8 + 18 = 26$ ✓ and $2 + 6 = 8$ ✓. Subtracting as they are leaves $3x + 2y = 18$. Tripling the FIRST equation makes the $y$ terms $9y$ and $y$ — further apart than before.',
    },
    {
      q: 'Which single move eliminates $x$ from the system $2x + 7y = 28$ and $x - 3y = 1$?',
      choices: [
        'Add the two equations',
        'Subtract the second equation from the first',
        'Multiply the first equation by $2$, then subtract',
        'Multiply the second equation by $2$, then subtract it from the first',
      ],
      answer: 3,
      solution:
        'Doubling the second equation gives $2x - 6y = 2$, matching the $2x$ in the first. Subtracting leaves $13y = 26$, so $y = 2$ and $x = 1 + 3(2) = 7$. Check BOTH: $2(7) + 7(2) = 14 + 14 = 28$ ✓ and $7 - 3(2) = 1$ ✓. Adding gives $3x + 4y = 29$. Subtracting as they are gives $x + 10y = 27$. Doubling the FIRST equation makes the $x$ terms $4x$ and $x$, which is worse.',
    },
  ],
  // p4 — subtract when a term already matches
  [
    {
      q: 'Solve $3x + y = 22$ and $x + y = 10$. What is $y$?',
      choices: ['$4$', '$6$', '$12$', '$10$'],
      answer: 0,
      solution:
        'Both equations have $+y$, so subtract the second from the first: $(3x + y) - (x + y) = 22 - 10$, leaving $2x = 12$ and $x = 6$. Then $6 + y = 10$ gives $y = 4$. Check BOTH: $3(6) + 4 = 22$ ✓ and $6 + 4 = 10$ ✓. The choice $6$ is $x$. The choice $12$ stops at $2x = 12$. The choice $10$ repeats the total from the second equation.',
    },
    {
      q: 'Solve $4x + y = 27$ and $x + y = 12$. What is $x$?',
      choices: ['$7$', '$5$', '$15$', '$12$'],
      answer: 1,
      solution:
        'Subtract the second equation from the first — remember to subtract the right-hand sides too: $3x = 15$, so $x = 5$. Then $5 + y = 12$ gives $y = 7$. Check BOTH: $4(5) + 7 = 27$ ✓ and $5 + 7 = 12$ ✓. The choice $7$ is $y$. The choice $15$ stops at $3x = 15$. The choice $12$ copies the second right-hand side.',
    },
    {
      q: 'Solve $5x + 2y = 31$ and $3x + 2y = 21$. What is $y$?',
      choices: ['$5$', '$10$', '$3$', '$6$'],
      answer: 2,
      solution:
        'The $2y$ terms are identical, so subtract: $(5x + 2y) - (3x + 2y) = 31 - 21$, leaving $2x = 10$ and $x = 5$. Then $3(5) + 2y = 21$ gives $2y = 6$, so $y = 3$. Check BOTH: $5(5) + 2(3) = 25 + 6 = 31$ ✓ and $3(5) + 2(3) = 21$ ✓. The choice $5$ is $x$, $10$ stops at $2x = 10$, and $6$ stops at $2y = 6$.',
    },
  ],
  // p5 — matched coefficients with opposite signs; report the pair
  [
    {
      q: 'Solve the system $4x + 3y = 32$ and $4x - 3y = 8$.',
      choices: ['$(5, 4)$', '$(4, 5)$', '$(5, -4)$', '$(5, 12)$'],
      answer: 0,
      solution:
        'The $y$ terms are opposites, so add: $8x = 40$ and $x = 5$. Then $4(5) + 3y = 32$ gives $3y = 12$, so $y = 4$: the pair is $(5, 4)$. Check BOTH: $20 + 12 = 32$ ✓ and $20 - 12 = 8$ ✓. The pair $(4, 5)$ has the coordinates reversed. The pair $(5, -4)$ comes from a sign slip, $3y = 8 - 20 = -12$. The pair $(5, 12)$ stops at $3y = 12$ and reports $12$ as $y$.',
    },
    {
      q: 'Solve the system $3x + 4y = 17$ and $3x - 4y = 1$.',
      choices: ['$(2, 3)$', '$(3, 2)$', '$(3, -2)$', '$(3, 8)$'],
      answer: 1,
      solution:
        'Add the equations to cancel the $y$ terms: $6x = 18$, so $x = 3$. Then $3(3) + 4y = 17$ gives $4y = 8$ and $y = 2$: the pair is $(3, 2)$. Check BOTH: $9 + 8 = 17$ ✓ and $9 - 8 = 1$ ✓. The pair $(2, 3)$ is the key reversed. The pair $(3, -2)$ comes from the sign slip $4y = 1 - 9 = -8$. The pair $(3, 8)$ forgets to divide $4y = 8$ by $4$.',
    },
    {
      q: 'Solve the system $5x + 2y = 26$ and $5x - 2y = 14$.',
      choices: ['$(3, 4)$', '$(4, -3)$', '$(4, 3)$', '$(4, 6)$'],
      answer: 2,
      solution:
        'Add: $10x = 40$, so $x = 4$. Then $5(4) + 2y = 26$ gives $2y = 6$ and $y = 3$: the pair is $(4, 3)$. Check BOTH: $20 + 6 = 26$ ✓ and $20 - 6 = 14$ ✓. The pair $(3, 4)$ reverses the coordinates. The pair $(4, -3)$ comes from the sign slip $2y = 14 - 20 = -6$. The pair $(4, 6)$ stops at $2y = 6$.',
    },
  ],
  // p6 — subtract to remove a matching term, report the other variable
  [
    {
      q: 'Solve $5x + 2y = 32$ and $2x + 2y = 20$. What is $x$?',
      choices: ['$6$', '$4$', '$12$', '$10$'],
      answer: 1,
      solution:
        'The $2y$ terms match, so subtract: $(5x + 2y) - (2x + 2y) = 32 - 20$, leaving $3x = 12$ and $x = 4$. Then $2(4) + 2y = 20$ gives $2y = 12$, so $y = 6$. Check BOTH: $5(4) + 2(6) = 20 + 12 = 32$ ✓ and $2(4) + 2(6) = 20$ ✓. The choice $6$ is $y$. The choice $12$ stops at $3x = 12$. The choice $10$ halves $20$, as if $x$ and $y$ were equal.',
    },
    {
      q: 'Solve $4x + 5y = 52$ and $4x + 2y = 28$. What is $y$?',
      choices: ['$3$', '$24$', '$8$', '$11$'],
      answer: 2,
      solution:
        'Both equations start with $4x$, so subtract: $3y = 52 - 28 = 24$, giving $y = 8$. Then $4x + 2(8) = 28$ gives $4x = 12$, so $x = 3$. Check BOTH: $4(3) + 5(8) = 12 + 40 = 52$ ✓ and $4(3) + 2(8) = 28$ ✓. The choice $3$ is $x$. The choice $24$ stops at $3y = 24$. The choice $11$ is $x + y$.',
    },
    {
      q: 'Solve $3x + 7y = 41$ and $3x + 2y = 16$. What is $x$?',
      choices: ['$5$', '$25$', '$6$', '$2$'],
      answer: 3,
      solution:
        'The $3x$ terms match, so subtract: $5y = 41 - 16 = 25$, giving $y = 5$. Then $3x + 2(5) = 16$ gives $3x = 6$, so $x = 2$. Check BOTH: $3(2) + 7(5) = 6 + 35 = 41$ ✓ and $3(2) + 2(5) = 16$ ✓. The choice $5$ is $y$. The choice $25$ stops at $5y = 25$, and $6$ stops at $3x = 6$.',
    },
  ],
  // p7 — plan the scaling before eliminating
  [
    {
      q: 'To eliminate $x$ from $3x + 4y = 26$ and $5x + 2y = 20$, what should you do before subtracting?',
      choices: [
        'Multiply the first by $5$ and the second by $3$',
        'Multiply the first by $2$ and the second by $4$',
        'Multiply the first by $3$ and the second by $5$',
        'Add the equations as they are',
      ],
      answer: 0,
      solution:
        'To cancel the $x$ terms, make both coefficients $15$: multiply the first equation by $5$ (giving $15x + 20y = 130$) and the second by $3$ (giving $15x + 6y = 60$). Subtracting leaves $14y = 70$, so $y = 5$ and $x = 2$. Check BOTH: $3(2) + 4(5) = 26$ ✓ and $5(2) + 2(5) = 20$ ✓. The multipliers $2$ and $4$ match the $y$ coefficients instead, so they eliminate $y$. Multiplying each equation by its OWN $x$ coefficient gives $9x$ and $25x$, which match nothing.',
    },
    {
      q: 'To eliminate $y$ from $4x + 3y = 27$ and $5x + 2y = 25$, what should you do before subtracting?',
      choices: [
        'Multiply the first by $3$ and the second by $2$',
        'Multiply the first by $2$ and the second by $3$',
        'Multiply the first by $5$ and the second by $4$',
        'Subtract the equations as they are',
      ],
      answer: 1,
      solution:
        'The $y$ coefficients are $3$ and $2$, and their least common multiple is $6$: multiply the first equation by $2$ ($8x + 6y = 54$) and the second by $3$ ($15x + 6y = 75$). Subtracting leaves $7x = 21$, so $x = 3$ and $y = 5$. Check BOTH: $4(3) + 3(5) = 27$ ✓ and $5(3) + 2(5) = 25$ ✓. The multipliers $3$ and $2$ are the swapped pair and give $9y$ and $4y$. The multipliers $5$ and $4$ match the $x$ terms, eliminating the wrong variable.',
    },
    {
      q: 'To eliminate $x$ from $6x + 5y = 43$ and $4x + 3y = 27$, what is the smallest pair of multipliers that works?',
      choices: [
        'Multiply the first by $3$ and the second by $5$',
        'Multiply the first by $3$ and the second by $2$',
        'Add the equations as they are',
        'Multiply the first by $2$ and the second by $3$',
      ],
      answer: 3,
      solution:
        'The $x$ coefficients are $6$ and $4$, whose least common multiple is $12$: multiply the first by $2$ ($12x + 10y = 86$) and the second by $3$ ($12x + 9y = 81$). Subtracting leaves $y = 5$, and then $6x = 43 - 25 = 18$, so $x = 3$. Check BOTH: $6(3) + 5(5) = 18 + 25 = 43$ ✓ and $4(3) + 3(5) = 27$ ✓. The multipliers $3$ and $5$ match the $y$ coefficients at $15y$, eliminating $y$ instead. The multipliers $3$ and $2$ are the pair above with the numbers swapped, giving $18x$ and $8x$.',
    },
  ],
  // p8 — scale one equation, then eliminate
  [
    {
      q: 'Solve $5x + 2y = 29$ and $x + y = 7$. What is $y$?',
      choices: ['$2$', '$5$', '$15$', '$7$'],
      answer: 0,
      solution:
        'Double the second equation: $2x + 2y = 14$. Subtract it from the first: $3x = 15$, so $x = 5$. Then $5 + y = 7$ gives $y = 2$. Check BOTH: $5(5) + 2(2) = 25 + 4 = 29$ ✓ and $5 + 2 = 7$ ✓. The choice $5$ is $x$. The choice $15$ stops at $3x = 15$. The choice $7$ repeats the total from the second equation.',
    },
    {
      q: 'Solve $2x + 5y = 31$ and $x + 2y = 13$. What is $x$?',
      choices: ['$5$', '$3$', '$8$', '$13$'],
      answer: 1,
      solution:
        'Double the second equation: $2x + 4y = 26$. Subtract from the first: $y = 5$. Then $x + 2(5) = 13$ gives $x = 3$. Check BOTH: $2(3) + 5(5) = 6 + 25 = 31$ ✓ and $3 + 10 = 13$ ✓. The choice $5$ is $y$, the variable that survives the elimination. The choice $8$ is $x + y$, and $13$ copies a right-hand side.',
    },
    {
      q: 'Solve $4x + 3y = 29$ and $2x + y = 13$. What is $y$?',
      choices: ['$5$', '$8$', '$3$', '$10$'],
      answer: 2,
      solution:
        'Double the second equation: $4x + 2y = 26$. Subtract from the first: $y = 3$. Then $2x + 3 = 13$ gives $2x = 10$, so $x = 5$. Check BOTH: $4(5) + 3(3) = 20 + 9 = 29$ ✓ and $2(5) + 3 = 13$ ✓. The choice $5$ is $x$. The choice $8$ is $x + y$, and $10$ stops at $2x = 10$.',
    },
  ],
  // p9 — eliminate, then combine the two values
  [
    {
      q: 'If $4x + 3y = 27$ and $2x - 3y = 9$, what is $x - y$?',
      choices: ['$5$', '$7$', '$6$', '$1$'],
      answer: 0,
      solution:
        'The $3y$ terms are opposites, so add: $6x = 36$ and $x = 6$. Then $4(6) + 3y = 27$ gives $3y = 3$, so $y = 1$. The question asks for the DIFFERENCE: $x - y = 6 - 1 = 5$. Check BOTH: $4(6) + 3(1) = 27$ ✓ and $2(6) - 3(1) = 9$ ✓. The choice $7$ is the sum $x + y$ — the wrong combination. The choices $6$ and $1$ are the individual values.',
    },
    {
      q: 'If $3x + 4y = 26$ and $5x - 4y = 22$, what is $x + y$?',
      choices: ['$6$', '$2$', '$8$', '$12$'],
      answer: 2,
      solution:
        'Add to cancel the $y$ terms: $8x = 48$, so $x = 6$. Then $3(6) + 4y = 26$ gives $4y = 8$, so $y = 2$, and $x + y = 8$. Check BOTH: $3(6) + 4(2) = 18 + 8 = 26$ ✓ and $5(6) - 4(2) = 30 - 8 = 22$ ✓. The choices $6$ and $2$ are $x$ and $y$ on their own, and $12$ is their PRODUCT rather than their sum.',
    },
    {
      q: 'If $2x + 5y = 24$ and $7x - 5y = 39$, what is $x + y$?',
      choices: ['$7$', '$5$', '$2$', '$9$'],
      answer: 3,
      solution:
        'Add to cancel the $y$ terms: $9x = 63$, so $x = 7$. Then $2(7) + 5y = 24$ gives $5y = 10$, so $y = 2$, and $x + y = 9$. Check BOTH: $2(7) + 5(2) = 14 + 10 = 24$ ✓ and $7(7) - 5(2) = 49 - 10 = 39$ ✓. The choices $7$ and $2$ are the separate values, and $5$ is the difference $x - y$.',
    },
  ],
  // p10 — the add-and-divide shortcut for a symmetric system
  [
    {
      q: 'If $5x + 2y = 36$ and $2x + 5y = 27$, what is $x + y$?',
      choices: ['$63$', '$9$', '$6$', '$3$'],
      answer: 1,
      solution:
        'Add the equations: $7x + 7y = 63$, and dividing by $7$ gives $x + y = 9$ in one stroke — no need to find $x$ and $y$ separately. The choice $63$ is the total before dividing by $7$. (If you are curious, $x = 6$ and $y = 3$; check BOTH: $5(6) + 2(3) = 30 + 6 = 36$ ✓ and $2(6) + 5(3) = 12 + 15 = 27$ ✓, and $6 + 3 = 9$. ✓) The choices $6$ and $3$ are the individual values.',
    },
    {
      q: 'If $3x + 5y = 41$ and $5x + 3y = 47$, what is $x + y$?',
      choices: ['$88$', '$7$', '$11$', '$3$'],
      answer: 2,
      solution:
        'Add the equations: $8x + 8y = 88$, so dividing by $8$ gives $x + y = 11$. The choice $88$ forgets that last division. The choice $3$ comes from SUBTRACTING instead: $2x - 2y = 6$ gives $x - y = 3$, a true statement but not what was asked. (For the record $x = 7$ and $y = 4$; check BOTH: $3(7) + 5(4) = 21 + 20 = 41$ ✓ and $5(7) + 3(4) = 35 + 12 = 47$ ✓.) The choice $7$ is $x$ alone.',
    },
    {
      q: 'If $6x + 5y = 45$ and $5x + 6y = 43$, what is $x + y$?',
      choices: ['$88$', '$2$', '$5$', '$8$'],
      answer: 3,
      solution:
        'Adding gives $11x + 11y = 88$, so $x + y = 88 \\div 11 = 8$. The choice $88$ stops before dividing. The choice $2$ comes from subtracting the equations: $x - y = 2$, which is the difference, not the sum. (Indeed $x = 5$ and $y = 3$; check BOTH: $6(5) + 5(3) = 30 + 15 = 45$ ✓ and $5(5) + 6(3) = 25 + 18 = 43$ ✓.) The choice $5$ is $x$ alone.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 5,
  sections: {
    '5.1': s51,
    '5.2': s52,
    '5.3': s53,
  },
}
