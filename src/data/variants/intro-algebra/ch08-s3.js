// Introduction to Algebra chapter 8 — variations for sections 8.5 and 8.6. All
// problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was re-derived from the question text alone and then checked
//    FORWARD: an intercept is substituted back into the equation, a slope is
//    re-read off two points that satisfy the equation, a perpendicular pair is
//    multiplied out to $-1$, and an intersection point is tested in the line
//    that was NOT used to find it.
//  - Two named traps run through the whole file and are kept apart on purpose.
//    The SIGN trap: dividing by a negative coefficient flips every sign, and a
//    negative $x_1$ turns $x - x_1$ into $x + x_1$. The RECIPROCAL trap: rise
//    over run, never run over rise, and "flip the fraction" belongs to
//    perpendicular lines only — never to parallel ones.
//  - Every distractor is one named mistake, and no two distractors inside an
//    item come from mistakes that land on the same value. Slope-only and
//    intercept-only errors are deliberately separated so a student can tell
//    which half of $y = mx + b$ went wrong.
//  - Figures are coordinate-exact: every line is drawn through two lattice
//    points that satisfy its equation, and every solution re-derives the
//    equation from those same lattice points. Figure labels are plain text.

const s85 = [
  // p1 — read the slope straight off slope-intercept form
  [
    {
      q: 'What is the slope of the line $y = -5x + 8$?',
      choices: ['$-5$', '$5$', '$8$', '$-8$'],
      answer: 0,
      solution:
        'In $y = mx + b$ the slope is whatever multiplies $x$, sign and all, so $m = -5$. Check it forward: at $x = 0$ the line is at $y = 8$, and at $x = 1$ it is at $y = 3$ — a drop of $5$ for one step right. ✓ (The choice $5$ drops the minus sign, but the line falls; the choice $8$ reports the $y$-intercept instead of the slope; the choice $-8$ reports that same intercept with a stray minus attached.)',
    },
    {
      q: 'A line is written as $y = 6 - 4x$. What is its slope?',
      choices: ['$6$', '$4$', '$-4$', '$-6$'],
      answer: 2,
      solution:
        'Reorder into $y = mx + b$ first: $y = -4x + 6$. The slope is $m = -4$. Check it forward: at $x = 0$, $y = 6$; at $x = 1$, $y = 6 - 4 = 2$ — down $4$ for one step right. ✓ (The choice $6$ grabs the number written first, which is really the $y$-intercept; the choice $4$ takes the coefficient of $x$ without the minus sitting in front of it; the choice $-6$ negates the intercept.)',
    },
    {
      q: 'Which of these lines has slope $-\\frac{1}{2}$?',
      choices: [
        '$y = \\frac{1}{2}x - 3$',
        '$y = 3x - \\frac{1}{2}$',
        '$y = -2x + 3$',
        '$y = -\\frac{1}{2}x + 3$',
      ],
      answer: 3,
      solution:
        'The slope is the coefficient of $x$, so $-\\frac{1}{2}$ must sit there: $y = -\\frac{1}{2}x + 3$. Check it forward: at $x = 0$, $y = 3$; at $x = 2$, $y = -1 + 3 = 2$ — down $1$ over a run of $2$, which is $-\\frac{1}{2}$. ✓ (The first choice has the right size but the wrong sign; the second swaps the roles of $m$ and $b$, parking $-\\frac{1}{2}$ at the $y$-intercept; the third is the RECIPROCAL trap, flipping $\\frac{1}{2}$ into a slope of $-2$, a far steeper fall.)',
    },
  ],
  // p2 — the y-intercept
  [
    {
      q: 'What is the $y$-intercept of the line $y = -6x + 5$?',
      choices: ['$(5, 0)$', '$(0, 5)$', '$(0, -6)$', '$(-6, 0)$'],
      answer: 1,
      solution:
        'The $y$-axis is where $x = 0$, so substitute: $y = -6(0) + 5 = 5$. The $y$-intercept is $(0, 5)$. ✓ (The choice $(5, 0)$ has the right number on the wrong axis — that point sits on the $x$-axis; the choice $(0, -6)$ mistakes the slope for the intercept; the choice $(-6, 0)$ makes both mistakes at once.)',
    },
    {
      q: 'The line $y = \\frac{1}{2}x - 8$ meets the $y$-axis at which point?',
      choices: ['$(0, 8)$', '$(-8, 0)$', '$(0, -8)$', '$(16, 0)$'],
      answer: 2,
      solution:
        'Set $x = 0$: $y = \\frac{1}{2}(0) - 8 = -8$, so the line crosses at $(0, -8)$. ✓ (The choice $(0, 8)$ loses the minus sign; the choice $(-8, 0)$ puts the right number on the $x$-axis; the choice $(16, 0)$ is the $x$-intercept, found by setting $y = 0$ instead of $x = 0$.)',
    },
    {
      q: 'Which of these lines has $y$-intercept $(0, -4)$?',
      choices: ['$y = 7x - 4$', '$y = -4x + 7$', '$y = 7x + 4$', '$x = -4$'],
      answer: 0,
      solution:
        'The $y$-intercept is the constant term $b$, so we need $b = -4$: that is $y = 7x - 4$. Check it forward: at $x = 0$, $y = -4$. ✓ (The choice $y = -4x + 7$ puts $-4$ in the slope’s seat, so it really crosses at $(0, 7)$; the choice $y = 7x + 4$ has the wrong sign and crosses at $(0, 4)$; the choice $x = -4$ is a vertical line meeting the $x$-axis at $(-4, 0)$, and it never passes through $(0, -4)$ at all.)',
    },
  ],
  // p3 — the x-intercept
  [
    {
      q: 'What is the $x$-intercept of the line $y = 3x + 12$?',
      choices: ['$(4, 0)$', '$(-4, 0)$', '$(0, 12)$', '$(0, -4)$'],
      answer: 1,
      solution:
        'Set $y = 0$: $0 = 3x + 12$, so $3x = -12$ and $x = -4$. The $x$-intercept is $(-4, 0)$. Check it forward: $3(-4) + 12 = 0$. ✓ (The choice $(4, 0)$ is the SIGN trap — it forgets that $12$ becomes $-12$ when it moves across; the choice $(0, 12)$ is the $y$-intercept, the other axis entirely; the choice $(0, -4)$ writes the right number as a $y$-coordinate.)',
    },
    {
      q: 'Where does the line $y = -\\frac{1}{2}x + 5$ cross the $x$-axis?',
      choices: ['$(0, 5)$', '$(-10, 0)$', '$(2.5, 0)$', '$(10, 0)$'],
      answer: 3,
      solution:
        'Set $y = 0$: $0 = -\\frac{1}{2}x + 5$, so $\\frac{1}{2}x = 5$ and $x = 10$. The crossing point is $(10, 0)$. Check it forward: $-\\frac{1}{2}(10) + 5 = -5 + 5 = 0$. ✓ (The choice $(0, 5)$ is the $y$-intercept; the choice $(-10, 0)$ keeps a stray minus sign; the choice $(2.5, 0)$ MULTIPLIES $5$ by $\\frac{1}{2}$ instead of dividing by it.)',
    },
    {
      q: 'The line $y = 4x + b$ has $x$-intercept $(3, 0)$. What is $b$?',
      choices: ['$12$', '$-3$', '$-12$', '$-\\frac{3}{4}$'],
      answer: 2,
      solution:
        'The point $(3, 0)$ is on the line, so $0 = 4(3) + b = 12 + b$, giving $b = -12$. Check it forward: $y = 4x - 12$ at $x = 3$ gives $12 - 12 = 0$. ✓ (The choice $12$ never moves the $12$ across the equals sign; the choice $-3$ mistakes $b$ for the negative of the $x$-intercept, but $b$ lives on the $y$-axis; the choice $-\\frac{3}{4}$ divides $3$ by $4$ where it should multiply.)',
    },
  ],
  // p4 — slope and intercept together, from one equation or back to one
  [
    {
      q: 'What are the slope and $y$-intercept of $y = 8 - x$?',
      choices: [
        'Slope $-1$, $y$-intercept $(0, 8)$',
        'Slope $1$, $y$-intercept $(0, 8)$',
        'Slope $8$, $y$-intercept $(0, -1)$',
        'Slope $-1$, $y$-intercept $(0, -8)$',
      ],
      answer: 0,
      solution:
        'Rewrite as $y = -x + 8$ and read $-x$ as $(-1)x$: the slope is $-1$, and the constant $8$ gives the $y$-intercept $(0, 8)$. Check it forward: at $x = 0$, $y = 8$; at $x = 1$, $y = 7$ — down $1$ per step right. ✓ (The second choice misses the invisible minus in front of $x$; the third swaps the roles of $m$ and $b$; the fourth flips the sign of the intercept only.)',
    },
    {
      q: 'What are the slope and $y$-intercept of $y = -\\frac{x}{3} + 6$?',
      choices: [
        'Slope $-3$, $y$-intercept $(0, 6)$',
        'Slope $\\frac{1}{3}$, $y$-intercept $(0, 6)$',
        'Slope $-\\frac{1}{3}$, $y$-intercept $(0, 6)$',
        'Slope $6$, $y$-intercept $\\left(0, -\\frac{1}{3}\\right)$',
      ],
      answer: 2,
      solution:
        'The term $-\\frac{x}{3}$ means $-\\frac{1}{3}x$, so the slope is $-\\frac{1}{3}$ and the constant $6$ gives the $y$-intercept $(0, 6)$. Check it forward: at $x = 0$, $y = 6$; at $x = 3$, $y = -1 + 6 = 5$ — down $1$ over a run of $3$. ✓ (The first choice is the RECIPROCAL trap, reading the $3$ downstairs as a slope of $-3$; the second drops the minus sign; the fourth swaps $m$ and $b$.)',
    },
    {
      q: 'Which line has slope $-\\frac{2}{5}$ and $y$-intercept $(0, -1)$?',
      choices: [
        '$y = \\frac{2}{5}x - 1$',
        '$y = -\\frac{2}{5}x + 1$',
        '$y = -x - \\frac{2}{5}$',
        '$y = -\\frac{2}{5}x - 1$',
      ],
      answer: 3,
      solution:
        'Put the slope in the $m$ seat and the intercept in the $b$ seat: $y = -\\frac{2}{5}x - 1$. Check it forward: at $x = 0$, $y = -1$ ✓, and at $x = 5$, $y = -2 - 1 = -3$, a fall of $2$ over a run of $5$. ✓ (The first choice loses the minus on the SLOPE; the second loses the minus on the INTERCEPT; the third swaps the two roles, giving slope $-1$ and intercept $\\left(0, -\\frac{2}{5}\\right)$.)',
    },
  ],
  // p5 — both intercepts of a standard-form equation
  [
    {
      q: 'What are the $x$- and $y$-intercepts of $4x + 3y = 24$?',
      choices: [
        '$(8, 0)$ and $(0, 6)$',
        '$(6, 0)$ and $(0, 8)$',
        '$(24, 0)$ and $(0, 24)$',
        '$(-6, 0)$ and $(0, -8)$',
      ],
      answer: 1,
      solution:
        'Set $y = 0$: $4x = 24$, so the $x$-intercept is $(6, 0)$. Set $x = 0$: $3y = 24$, so the $y$-intercept is $(0, 8)$. Check both forward: $4(6) + 0 = 24$ ✓ and $0 + 3(8) = 24$ ✓. (The first choice divides by the WRONG coefficient each time, swapping the two answers; the third never divides at all; the fourth attaches minus signs the equation does not call for.)',
    },
    {
      q: 'What are the $x$- and $y$-intercepts of $2x - 7y = 14$?',
      choices: [
        '$(7, 0)$ and $(0, 2)$',
        '$(-2, 0)$ and $(0, 7)$',
        '$(7, 0)$ and $(0, -2)$',
        '$(14, 0)$ and $(0, 14)$',
      ],
      answer: 2,
      solution:
        'Set $y = 0$: $2x = 14$, so the $x$-intercept is $(7, 0)$. Set $x = 0$: $-7y = 14$, so $y = -2$ and the $y$-intercept is $(0, -2)$. Check both forward: $2(7) - 0 = 14$ ✓ and $0 - 7(-2) = 14$ ✓. (The first choice is the SIGN trap, losing the minus when dividing by $-7$; the second swaps the two intercepts and moves the minus with them; the fourth forgets to divide at all.)',
    },
    {
      q: 'Which equation has $x$-intercept $(4, 0)$ and $y$-intercept $(0, -3)$?',
      choices: ['$4x - 3y = 12$', '$3x + 4y = 12$', '$3x - 4y = -12$', '$3x - 4y = 12$'],
      answer: 3,
      solution:
        'Test both points in $3x - 4y = 12$: at $(4, 0)$, $12 - 0 = 12$ ✓, and at $(0, -3)$, $0 + 12 = 12$ ✓. Both intercepts fit, so this is the line. (The first choice pairs each number with the wrong variable and lands at $(3, 0)$ and $(0, -4)$; the second flips the sign of the $y$-term, giving $y$-intercept $(0, 3)$; the third flips the sign of the constant, giving $(-4, 0)$ and $(0, 3)$.)',
    },
  ],
  // p6 — read a line off a graph
  [
    {
      q: 'Which equation belongs to the graphed line?',
      fig: {
        view: [-3, -5, 5, 3],
        grid: true,
        elems: [
          { t: 'line', a: [0, -3], b: [2, 1] },
          { t: 'point', p: [0, -3], label: '(0, -3)', dx: -52, dy: 6 },
          { t: 'point', p: [2, 1], label: '(2, 1)', dx: 12, dy: -8 },
        ],
      },
      choices: ['$y = 2x - 3$', '$y = \\frac{1}{2}x - 3$', '$y = -2x - 3$', '$y = 2x + 3$'],
      answer: 0,
      solution:
        'The line crosses the $y$-axis at $(0, -3)$, so $b = -3$. From $(0, -3)$ to $(2, 1)$ it rises $4$ while running $2$, so $m = \\frac{4}{2} = 2$, giving $y = 2x - 3$. Check the second marked point: $2(2) - 3 = 1$. ✓ (The choice $y = \\frac{1}{2}x - 3$ is the RECIPROCAL trap, dividing run by rise; the choice $y = -2x - 3$ makes the line fall when the picture clearly climbs; the choice $y = 2x + 3$ flips the sign of the intercept.)',
    },
    {
      q: 'Which equation describes the line in the graph?',
      fig: {
        view: [-2, -3, 7, 6],
        grid: true,
        elems: [
          { t: 'line', a: [0, 4], b: [3, 2] },
          { t: 'point', p: [0, 4], label: '(0, 4)', dx: -48, dy: -6 },
          { t: 'point', p: [3, 2], label: '(3, 2)', dx: 12, dy: -8 },
        ],
      },
      choices: [
        '$y = -\\frac{3}{2}x + 4$',
        '$y = -\\frac{2}{3}x + 4$',
        '$y = \\frac{2}{3}x + 4$',
        '$y = -\\frac{2}{3}x - 4$',
      ],
      answer: 1,
      solution:
        'The line meets the $y$-axis at $(0, 4)$, so $b = 4$. From $(0, 4)$ to $(3, 2)$ it falls $2$ while running $3$, so $m = -\\frac{2}{3}$ and the equation is $y = -\\frac{2}{3}x + 4$. Check the second marked point: $-\\frac{2}{3}(3) + 4 = -2 + 4 = 2$. ✓ (The first choice is the RECIPROCAL trap, swapping rise and run; the third loses the minus although the line clearly falls; the fourth flips the sign of the intercept.)',
    },
    {
      q: 'The line shown has equation $y = mx + b$. What is $m + b$?',
      fig: {
        view: [-3, -3, 6, 7],
        grid: true,
        elems: [
          { t: 'line', a: [0, 5], b: [2, 1] },
          { t: 'point', p: [0, 5], label: '(0, 5)', dx: -48, dy: -6 },
          { t: 'point', p: [2, 1], label: '(2, 1)', dx: 12, dy: 16 },
        ],
      },
      choices: ['$7$', '$4.5$', '$-10$', '$3$'],
      answer: 3,
      solution:
        'The line crosses the $y$-axis at $(0, 5)$, so $b = 5$. From $(0, 5)$ to $(2, 1)$ it falls $4$ over a run of $2$, so $m = -2$. Then $m + b = -2 + 5 = 3$. Check the equation forward: $y = -2x + 5$ gives $y = 1$ at $x = 2$, matching the second marked point. ✓ (The choice $7$ reads the slope as $+2$ even though the line falls; the choice $4.5$ is the RECIPROCAL trap, using $m = -\\frac{1}{2}$; the choice $-10$ multiplies $m$ and $b$ instead of adding them.)',
    },
  ],
  // p7 — the slope hides until y stands alone
  [
    {
      q: 'What is the slope of the line $6x - 3y = 9$?',
      choices: ['$2$', '$-2$', '$6$', '$\\frac{1}{2}$'],
      answer: 0,
      solution:
        'Solve for $y$: $-3y = -6x + 9$, and dividing by $-3$ flips both signs to give $y = 2x - 3$, so the slope is $2$. Check it forward on the original equation: $(0, -3)$ works, since $0 - 3(-3) = 9$, and $(2, 1)$ works, since $12 - 3 = 9$; between them the slope is $\\frac{1 - (-3)}{2 - 0} = 2$. ✓ (The choice $-2$ is the SIGN trap, forgetting that dividing by a NEGATIVE flips the sign; the choice $6$ reads the coefficient of $x$ before $y$ stands alone; the choice $\\frac{1}{2}$ divides run by rise.)',
    },
    {
      q: 'What is the slope of the line $5x + 4y = 20$?',
      choices: ['$\\frac{5}{4}$', '$-\\frac{5}{4}$', '$5$', '$-\\frac{4}{5}$'],
      answer: 1,
      solution:
        'Solve for $y$: $4y = -5x + 20$, so $y = -\\frac{5}{4}x + 5$ and the slope is $-\\frac{5}{4}$. Check it forward with the two intercepts, $(4, 0)$ and $(0, 5)$, both of which satisfy the equation: $\\frac{5 - 0}{0 - 4} = -\\frac{5}{4}$. ✓ (The choice $\\frac{5}{4}$ forgets that $5x$ turns negative when it crosses the equals sign; the choice $5$ reads the coefficient of $x$ straight off the standard form; the choice $-\\frac{4}{5}$ is the RECIPROCAL trap, flipping the fraction upside down.)',
    },
    {
      q: 'The line $ax + 2y = 8$ has slope $3$. What is $a$?',
      choices: ['$6$', '$3$', '$-6$', '$-\\frac{2}{3}$'],
      answer: 2,
      solution:
        'Solve for $y$ first: $2y = -ax + 8$, so $y = -\\frac{a}{2}x + 4$ and the slope is $-\\frac{a}{2}$. Setting $-\\frac{a}{2} = 3$ gives $a = -6$. Check it forward: $-6x + 2y = 8$ becomes $y = 3x + 4$, whose slope really is $3$. ✓ (The choice $6$ misses the minus that appears when $ax$ crosses the equals sign; the choice $3$ reads $a$ as the slope itself; the choice $-\\frac{2}{3}$ is the RECIPROCAL trap, solving $-\\frac{2}{a} = 3$.)',
    },
  ],
  // p8 — one intercept is given, recover the missing letter
  [
    {
      q: 'The line $y = mx - 12$ has $x$-intercept $(4, 0)$. What is $m$?',
      choices: ['$-3$', '$3$', '$\\frac{1}{3}$', '$-\\frac{1}{3}$'],
      answer: 1,
      solution:
        'The point $(4, 0)$ is on the line, so $0 = 4m - 12$, giving $4m = 12$ and $m = 3$. Check it forward: $y = 3x - 12$ at $x = 4$ gives $12 - 12 = 0$. ✓ The sign fits the picture too — the line must CLIMB from $(0, -12)$ up to $(4, 0)$, rising $12$ over a run of $4$. (The choice $-3$ treats the $-12$ as $+12$; the choice $\\frac{1}{3}$ is the RECIPROCAL trap, dividing run by rise as $\\frac{4}{12}$; the choice $-\\frac{1}{3}$ makes both mistakes at once.)',
    },
    {
      q: 'The line $y = mx + 10$ has $x$-intercept $(-5, 0)$. What is $m$?',
      choices: ['$-2$', '$\\frac{1}{2}$', '$2$', '$-\\frac{1}{2}$'],
      answer: 2,
      solution:
        'Substitute $(-5, 0)$: $0 = -5m + 10$, so $5m = 10$ and $m = 2$. Check it forward: $y = 2x + 10$ at $x = -5$ gives $-10 + 10 = 0$. ✓ The line rises $10$ while running $5$, from $(-5, 0)$ up to $(0, 10)$. (The choice $-2$ drops the minus on the $x$-coordinate and solves $0 = 5m + 10$; the choice $\\frac{1}{2}$ is the RECIPROCAL trap, dividing run by rise as $\\frac{5}{10}$; the choice $-\\frac{1}{2}$ makes both mistakes at once.)',
    },
    {
      q: 'The line $y = -4x + b$ has $x$-intercept $(3, 0)$. What is $b$?',
      choices: ['$-12$', '$\\frac{3}{4}$', '$3$', '$12$'],
      answer: 3,
      solution:
        'Substitute $(3, 0)$: $0 = -4(3) + b = -12 + b$, so $b = 12$. Check it forward: $y = -4x + 12$ at $x = 3$ gives $-12 + 12 = 0$. ✓ (The choice $-12$ stops at $-4 \\times 3$ and never moves it across; the choice $\\frac{3}{4}$ divides $3$ by $4$ instead of multiplying; the choice $3$ mistakes $b$ for the $x$-intercept, but $b$ is measured on the $y$-axis.)',
    },
  ],
  // p9 — an unknown coefficient, pinned down by one intercept
  [
    {
      q: 'For what value of $a$ does the line $ax + 5y = 30$ have $x$-intercept $(3, 0)$?',
      choices: ['$10$', '$6$', '$90$', '$\\frac{1}{10}$'],
      answer: 0,
      solution:
        'The point $(3, 0)$ must satisfy the equation: $3a + 5(0) = 30$, so $3a = 30$ and $a = 10$. Check it forward: $10x + 5y = 30$ at $y = 0$ gives $10x = 30$, so $x = 3$. ✓ (The choice $6$ answers the $y$-intercept question instead, solving $5y = 30$; the choice $90$ multiplies $30$ by $3$ where it should divide; the choice $\\frac{1}{10}$ flips the division into $\\frac{3}{30}$.)',
    },
    {
      q: 'For what value of $b$ does the line $7x + by = 21$ have $y$-intercept $(0, -3)$?',
      choices: ['$7$', '$-3$', '$-7$', '$-63$'],
      answer: 2,
      solution:
        'Substitute $(0, -3)$: $7(0) + b(-3) = 21$, so $-3b = 21$ and $b = -7$. Check it forward: $7x - 7y = 21$ at $x = 0$ gives $-7y = 21$, so $y = -3$. ✓ (The choice $7$ is the SIGN trap, losing the minus when dividing by $-3$; the choice $-3$ copies the intercept straight into the coefficient slot; the choice $-63$ multiplies $21$ by $-3$ instead of dividing.)',
    },
    {
      q: 'The line $4x - 3y = k$ has $x$-intercept $(-2, 0)$. What is $k$?',
      choices: ['$8$', '$6$', '$-2$', '$-8$'],
      answer: 3,
      solution:
        'Substitute $(-2, 0)$: $4(-2) - 3(0) = k$, so $k = -8$. Check it forward: $4x - 3y = -8$ at $y = 0$ gives $4x = -8$, so $x = -2$. ✓ (The choice $8$ drops the minus on the $x$-coordinate; the choice $6$ feeds $-2$ into the $y$-slot instead, computing $-3(-2)$; the choice $-2$ copies the intercept straight into $k$.)',
    },
  ],
  // p10 — the two intercepts of one line, tied together by a sentence
  [
    {
      q: 'A line has slope $3$ and $y$-intercept $(0, b)$ with $b > 0$. The $x$-coordinate of its $x$-intercept plus the $y$-coordinate of its $y$-intercept equals $10$. What is $b$?',
      choices: ['$15$', '$7.5$', '$-5$', '$10$'],
      answer: 0,
      solution:
        'The line is $y = 3x + b$. Its $x$-intercept comes from $0 = 3x + b$, so $x = -\\frac{b}{3}$. The sentence says $-\\frac{b}{3} + b = 10$, that is $\\frac{2b}{3} = 10$, so $b = 15$. Check it forward: $y = 3x + 15$ has $x$-intercept $(-5, 0)$ and $y$-intercept $(0, 15)$, and $-5 + 15 = 10$. ✓ (The choice $7.5$ is the SIGN trap, solving $\\frac{b}{3} + b = 10$; the choice $-5$ is the RECIPROCAL trap, using $-3b$ for the $x$-intercept, and it also breaks the requirement $b > 0$; the choice $10$ just repeats the total, as if the $x$-intercept were $0$.)',
    },
    {
      q: 'A line has slope $-2$ and $y$-intercept $(0, b)$ with $b > 0$. The $y$-coordinate of its $y$-intercept is $6$ more than the $x$-coordinate of its $x$-intercept. What is $b$?',
      choices: ['$4$', '$12$', '$6$', '$-6$'],
      answer: 1,
      solution:
        'The line is $y = -2x + b$, so its $x$-intercept comes from $0 = -2x + b$, giving $x = \\frac{b}{2}$. The sentence says $b = \\frac{b}{2} + 6$, so $\\frac{b}{2} = 6$ and $b = 12$. Check it forward: $y = -2x + 12$ has $x$-intercept $(6, 0)$ and $y$-intercept $(0, 12)$, and $12$ is indeed $6$ more than $6$. ✓ (The choice $4$ is the SIGN trap, solving $b = -\\frac{b}{2} + 6$; the choice $6$ assumes the $x$-intercept sits at $0$; the choice $-6$ is the RECIPROCAL trap, using $2b$ for the $x$-intercept, and it also breaks $b > 0$.)',
    },
    {
      q: 'A line has slope $\\frac{2}{3}$, $y$-intercept $(0, b)$, and $x$-intercept $(a, 0)$, and $a + b = -5$. What is $a$?',
      choices: ['$-3$', '$10$', '$-5$', '$-15$'],
      answer: 3,
      solution:
        'The line is $y = \\frac{2}{3}x + b$, so its $x$-intercept satisfies $0 = \\frac{2}{3}a + b$, giving $a = -\\frac{3b}{2}$. Then $-\\frac{3b}{2} + b = -5$ becomes $-\\frac{b}{2} = -5$, so $b = 10$ and $a = -15$. Check it forward: $y = \\frac{2}{3}x + 10$ at $x = -15$ gives $-10 + 10 = 0$ ✓, and $-15 + 10 = -5$ ✓. (The choice $-3$ is the SIGN trap, using $a = \\frac{3b}{2}$; the choice $10$ is the RECIPROCAL trap, using the flipped slope $\\frac{3}{2}$ so that $a = -\\frac{2b}{3}$; the choice $-5$ just repeats the total.)',
    },
  ],
]

const s86 = [
  // p1 — parallel means EQUAL slopes
  [
    {
      q: 'What is the slope of any line parallel to $y = -6x + 2$?',
      choices: ['$-6$', '$6$', '$\\frac{1}{6}$', '$2$'],
      answer: 0,
      solution:
        'Parallel lines have EQUAL slopes, so copy the coefficient of $x$ exactly: $-6$. Check it forward: $y = -6x + 9$ has the same slope and sits exactly $7$ above $y = -6x + 2$ at every $x$, so the two never meet. ✓ (The choice $6$ flips the sign and the choice $\\frac{1}{6}$ flips the fraction — those are halves of the PERPENDICULAR move, not the parallel one; the choice $2$ reports the $y$-intercept.)',
    },
    {
      q: 'Line $\\ell$ has slope $\\frac{2}{7}$. What is the slope of any line parallel to $\\ell$?',
      choices: ['$-\\frac{7}{2}$', '$\\frac{2}{7}$', '$\\frac{7}{2}$', '$-\\frac{2}{7}$'],
      answer: 1,
      solution:
        'Parallel means the same tilt, so the slope is unchanged: $\\frac{2}{7}$. Check it forward: two lines that each rise $2$ for every $7$ they run keep a constant vertical gap, so they never touch. ✓ (The choice $-\\frac{7}{2}$ is the PERPENDICULAR slope, flipped and negated; the choice $\\frac{7}{2}$ flips only; the choice $-\\frac{2}{7}$ negates only.)',
    },
    {
      q: 'Which of these lines is NOT parallel to $y = 3x + 4$?',
      choices: ['$y = 3x - 4$', '$6x - 2y = 10$', '$y = 3x$', '$y = -3x + 4$'],
      answer: 3,
      solution:
        'Parallel requires slope $3$. The first and third choices show slope $3$ outright, and $6x - 2y = 10$ becomes $-2y = -6x + 10$, that is $y = 3x - 5$, also slope $3$. Only $y = -3x + 4$ has a different slope, $-3$, so it is the odd one out. Check it forward: setting $3x + 4 = -3x + 4$ gives $6x = 0$, so those two lines really do cross, at $(0, 4)$ — and a line that crosses is not parallel. ✓ (Each of the other three keeps a constant vertical gap from $y = 3x + 4$ forever.)',
    },
  ],
  // p2 — perpendicular means the slopes multiply to -1
  [
    {
      q: 'A line has slope $-5$. What is the slope of a line perpendicular to it?',
      choices: ['$\\frac{1}{5}$', '$-\\frac{1}{5}$', '$5$', '$-5$'],
      answer: 0,
      solution:
        'Perpendicular slopes multiply to $-1$: from $-5 \\cdot m = -1$ we get $m = \\frac{1}{5}$. Check it forward: $-5 \\cdot \\frac{1}{5} = -1$. ✓ Flip the fraction AND flip the sign — two moves, not one. (The choice $-\\frac{1}{5}$ flips only, and $-5 \\cdot \\left(-\\frac{1}{5}\\right) = 1$, not $-1$; the choice $5$ negates only; the choice $-5$ is the PARALLEL slope.)',
    },
    {
      q: 'A line has slope $\\frac{1}{4}$. What is the slope of a line perpendicular to it?',
      choices: ['$4$', '$-\\frac{1}{4}$', '$-4$', '$\\frac{1}{4}$'],
      answer: 2,
      solution:
        'Solve $\\frac{1}{4} \\cdot m = -1$: $m = -4$. Check it forward: $\\frac{1}{4} \\cdot (-4) = -1$. ✓ (The choice $4$ flips the fraction but leaves the sign alone; the choice $-\\frac{1}{4}$ flips the sign but leaves the fraction alone; the choice $\\frac{1}{4}$ is the PARALLEL slope, whose product would be $\\frac{1}{16}$.)',
    },
    {
      q: 'Two lines are perpendicular, and one of them has slope $-\\frac{2}{9}$. What is the product of the two slopes?',
      choices: ['$1$', '$\\frac{4}{81}$', '$0$', '$-1$'],
      answer: 3,
      solution:
        'For ANY pair of perpendicular lines that both have slopes, the product is $-1$ — the given slope never matters. Check it forward: the perpendicular slope here is $\\frac{9}{2}$, and $-\\frac{2}{9} \\cdot \\frac{9}{2} = -1$. ✓ (The choice $1$ is what flipping the fraction WITHOUT flipping the sign would give; the choice $\\frac{4}{81}$ multiplies the slope by itself; the choice $0$ confuses a perpendicular pair with a horizontal line, whose slope is $0$.)',
    },
  ],
  // p3 — pick the parallel line out of a list
  [
    {
      q: 'Which line is parallel to $y = \\frac{1}{3}x - 4$?',
      choices: [
        '$y = \\frac{1}{3}x + 2$',
        '$y = 3x - 4$',
        '$y = -3x - 4$',
        '$y = -\\frac{1}{3}x + 2$',
      ],
      answer: 0,
      solution:
        'Parallel means the same slope, $\\frac{1}{3}$, with a different $y$-intercept — and only $y = \\frac{1}{3}x + 2$ qualifies. Check it forward: at any $x$ the two heights differ by $\\left(\\frac{1}{3}x + 2\\right) - \\left(\\frac{1}{3}x - 4\\right) = 6$, a gap that never closes. ✓ (The choice $y = 3x - 4$ flips the fraction; the choice $y = -3x - 4$ is PERPENDICULAR, since $\\frac{1}{3} \\cdot (-3) = -1$; the choice $y = -\\frac{1}{3}x + 2$ negates the slope only.)',
    },
    {
      q: 'Which line is parallel to $2x + y = 9$?',
      choices: ['$y = 2x + 9$', '$y = \\frac{1}{2}x - 9$', '$y = -2x + 3$', '$x + 2y = 9$'],
      answer: 2,
      solution:
        'Rewrite the given line as $y = -2x + 9$, so its slope is $-2$. The only choice with slope $-2$ is $y = -2x + 3$, and its different intercept makes it a genuinely separate line. Check it forward: $-2x + 9 = -2x + 3$ would need $9 = 3$, so the two never cross. ✓ (The choice $y = 2x + 9$ forgets that $2x$ turns negative when it moves across; the choice $y = \\frac{1}{2}x - 9$ is PERPENDICULAR, since $-2 \\cdot \\frac{1}{2} = -1$; the choice $x + 2y = 9$ becomes $y = -\\frac{1}{2}x + \\frac{9}{2}$, flipping the fraction while keeping the sign.)',
    },
    {
      q: 'For what value of $t$ is the line $y = tx + 5$ parallel to $4x - 2y = 7$?',
      choices: ['$-2$', '$-\\frac{1}{2}$', '$4$', '$2$'],
      answer: 3,
      solution:
        'Rewrite the second line: $-2y = -4x + 7$, so $y = 2x - \\frac{7}{2}$ and its slope is $2$. Parallel means equal slopes, so $t = 2$. Check it forward: $y = 2x + 5$ and $y = 2x - \\frac{7}{2}$ have the same slope but different intercepts, so they run side by side forever. ✓ (The choice $-2$ is the SIGN trap, forgetting that dividing by $-2$ flips both signs; the choice $-\\frac{1}{2}$ is the PERPENDICULAR slope; the choice $4$ reads the coefficient of $x$ before $y$ stands alone.)',
    },
  ],
  // p4 — perpendicular slopes, with a rewrite or a reversal
  [
    {
      q: 'What is the slope of a line perpendicular to $y = -\\frac{5}{6}x + 1$?',
      choices: ['$\\frac{6}{5}$', '$-\\frac{6}{5}$', '$\\frac{5}{6}$', '$-\\frac{5}{6}$'],
      answer: 0,
      solution:
        'Flip $-\\frac{5}{6}$ to $-\\frac{6}{5}$, then flip the sign: $\\frac{6}{5}$. Check it forward: $-\\frac{5}{6} \\cdot \\frac{6}{5} = -\\frac{30}{30} = -1$. ✓ (The choice $-\\frac{6}{5}$ flips the fraction but keeps the sign, giving a product of $+1$; the choice $\\frac{5}{6}$ flips the sign but not the fraction; the choice $-\\frac{5}{6}$ is the PARALLEL slope.)',
    },
    {
      q: 'What is the slope of a line perpendicular to $3x + 4y = 8$?',
      choices: ['$-\\frac{4}{3}$', '$\\frac{4}{3}$', '$\\frac{3}{4}$', '$-\\frac{3}{4}$'],
      answer: 1,
      solution:
        'Put the line in slope-intercept form first: $4y = -3x + 8$, so $y = -\\frac{3}{4}x + 2$ and its slope is $-\\frac{3}{4}$. Flip and negate to get $\\frac{4}{3}$. Check it forward: $-\\frac{3}{4} \\cdot \\frac{4}{3} = -1$. ✓ (The choice $-\\frac{4}{3}$ flips without negating; the choice $\\frac{3}{4}$ negates without flipping; the choice $-\\frac{3}{4}$ is the PARALLEL slope.)',
    },
    {
      q: 'A line perpendicular to $y = mx + 2$ has slope $\\frac{7}{2}$. What is $m$?',
      choices: ['$\\frac{2}{7}$', '$-\\frac{7}{2}$', '$-\\frac{2}{7}$', '$\\frac{7}{2}$'],
      answer: 2,
      solution:
        'The two slopes multiply to $-1$: $m \\cdot \\frac{7}{2} = -1$, so $m = -\\frac{2}{7}$. Check it forward: $-\\frac{2}{7} \\cdot \\frac{7}{2} = -1$. ✓ (The choice $\\frac{2}{7}$ flips the fraction without flipping the sign; the choice $-\\frac{7}{2}$ flips the sign without flipping the fraction; the choice $\\frac{7}{2}$ would make the two lines PARALLEL, not perpendicular.)',
    },
  ],
  // p5 — where two lines cross
  [
    {
      q: 'Where do the lines $y = 2x - 1$ and $y = -x + 8$ intersect?',
      choices: ['$(5, 3)$', '$(3, 5)$', '$(9, 17)$', '$(3, 7)$'],
      answer: 1,
      solution:
        'Set the right sides equal: $2x - 1 = -x + 8$. Adding $x$ to both sides gives $3x - 1 = 8$, so $3x = 9$ and $x = 3$; then $y = 2(3) - 1 = 5$. Check in the line NOT used: $-3 + 8 = 5$. ✓ The crossing point is $(3, 5)$. (The choice $(5, 3)$ swaps the coordinates; the choice $(9, 17)$ writes $2x - x$ instead of $2x + x$ when moving $-x$ across; the choice $(3, 7)$ finds $x$ correctly but then substitutes into $2x + 1$.)',
    },
    {
      q: 'Where do the lines $y = 3x - 2$ and $x + y = 10$ intersect?',
      choices: ['$(7, 3)$', '$(2, 4)$', '$(3, 7)$', '$(4, 10)$'],
      answer: 2,
      solution:
        'Substitute the first equation into the second: $x + (3x - 2) = 10$, so $4x = 12$ and $x = 3$; then $y = 3(3) - 2 = 7$. Check in the equation NOT used for $y$: $3 + 7 = 10$. ✓ The lines cross at $(3, 7)$. (The choice $(7, 3)$ swaps the coordinates; the choice $(2, 4)$ writes $x + 3x + 2 = 10$, losing the minus sign; the choice $(4, 10)$ reads $x + y = 10$ as $y = 10$ and solves $3x - 2 = 10$.)',
    },
    {
      q: 'The lines $y = 5x - 4$ and $y = 2x + k$ cross at the point where $x = 3$. What is $k$?',
      choices: ['$13$', '$11$', '$-5$', '$5$'],
      answer: 3,
      solution:
        'At $x = 3$ the first line gives $y = 5(3) - 4 = 11$, so the crossing point is $(3, 11)$. That point lies on the second line too: $11 = 2(3) + k = 6 + k$, so $k = 5$. Check it forward: $y = 2x + 5$ at $x = 3$ gives $11$, matching. ✓ (The choice $13$ comes from subtracting the equations as $3x + 4 = k$ instead of $3x - 4 = k$; the choice $11$ reports the $y$-coordinate instead of $k$; the choice $-5$ runs the last step backwards, computing $6 - 11$.)',
    },
  ],
  // p6 — the same line wearing a different coat
  [
    {
      q: 'Which equation describes the SAME line as $5x - 2y = 8$?',
      choices: ['$15x - 6y = 8$', '$15x - 6y = 24$', '$5x - 2y = 24$', '$2x - 5y = 8$'],
      answer: 1,
      solution:
        'Multiply EVERY term by $3$: $15x - 6y = 24$. Check it forward: the point $(2, 1)$ satisfies $5(2) - 2(1) = 8$, and it also satisfies $15(2) - 6(1) = 30 - 6 = 24$. ✓ (The choice $15x - 6y = 8$ scales only the left side; the choice $5x - 2y = 24$ scales only the right side — either one changes which points fit; the choice $2x - 5y = 8$ swaps the two coefficients, which changes the slope entirely.)',
    },
    {
      q: 'Which equation describes the SAME line as $y = \\frac{3}{5}x - 2$?',
      choices: ['$3x - 5y = -10$', '$3x + 5y = 10$', '$3x - 5y = 10$', '$5x - 3y = 10$'],
      answer: 2,
      solution:
        'Clear the fraction: multiplying through by $5$ gives $5y = 3x - 10$, which rearranges to $3x - 5y = 10$. Check it forward on two points of the original line: $(0, -2)$ gives $0 + 10 = 10$ ✓, and $(5, 1)$ gives $15 - 5 = 10$ ✓, while $\\frac{3}{5}(5) - 2 = 1$ confirms $(5, 1)$ is on the original. (The choice $3x - 5y = -10$ flips the sign of the constant; the choice $3x + 5y = 10$ flips the sign of the $y$-term; the choice $5x - 3y = 10$ swaps the two coefficients.)',
    },
    {
      q: 'For what value of $n$ do $3x - 4y = 7$ and $9x + ny = 21$ describe the same line?',
      choices: ['$12$', '$-4$', '$-\\frac{4}{3}$', '$-12$'],
      answer: 3,
      solution:
        'The second equation must be the first multiplied by one number. Comparing $3x$ with $9x$, and $7$ with $21$, that number is $3$, so $-4y$ must become $-12y$ and $n = -12$. Check it forward: dividing $9x - 12y = 21$ by $3$ gives exactly $3x - 4y = 7$. ✓ (The choice $12$ loses the minus sign; the choice $-4$ copies the original coefficient without scaling it; the choice $-\\frac{4}{3}$ DIVIDES by $3$ where it should multiply.)',
    },
  ],
  // p7 — compare two lines drawn on one grid
  [
    {
      q: 'Lines $p$ and $q$ are shown. Where do they intersect?',
      fig: {
        view: [-3, -3, 5, 6],
        grid: true,
        elems: [
          { t: 'line', a: [-1, -2], b: [3, 2] },
          { t: 'line', a: [0, 5], b: [3, -1] },
          { t: 'label', p: [4.4, 3.7], text: 'p', dx: 0, dy: 0 },
          { t: 'label', p: [3.7, -1.4], text: 'q', dx: 0, dy: 0 },
        ],
      },
      choices: ['$(2, 1)$', '$(1, 2)$', '$(2, -1)$', '$(0, -1)$'],
      answer: 0,
      solution:
        'Line $p$ runs through $(-1, -2)$ and $(3, 2)$, rising $1$ for each step right and crossing the $y$-axis at $(0, -1)$, so $p$ is $y = x - 1$. Line $q$ runs through $(0, 5)$ and $(3, -1)$, falling $2$ per step right, so $q$ is $y = -2x + 5$. Setting $x - 1 = -2x + 5$ gives $3x = 6$, so $x = 2$ and $y = 1$. Check in $q$: $-4 + 5 = 1$. ✓ The lines meet at $(2, 1)$, exactly where the picture shows. (The choice $(1, 2)$ swaps the coordinates; the choice $(2, -1)$ flips the sign of $y$; the choice $(0, -1)$ is where line $p$ crosses the $y$-axis, not where the two lines meet.)',
    },
    {
      q: 'Lines $p$ and $q$ are graphed. At which point do they cross?',
      fig: {
        view: [-3, -4, 6, 6],
        grid: true,
        elems: [
          { t: 'line', a: [0, -1], b: [2, 3] },
          { t: 'line', a: [0, 5], b: [4, 1] },
          { t: 'label', p: [3.9, 5.2], text: 'p', dx: 0, dy: 0 },
          { t: 'label', p: [5.5, 0.3], text: 'q', dx: 0, dy: 0 },
        ],
      },
      choices: ['$(3, 2)$', '$(2, 3)$', '$(0, -1)$', '$(5, 0)$'],
      answer: 1,
      solution:
        'Line $p$ climbs through $(0, -1)$ and $(2, 3)$, gaining $2$ per step right, so $p$ is $y = 2x - 1$. Line $q$ falls through $(0, 5)$ and $(4, 1)$, losing $1$ per step right, so $q$ is $y = -x + 5$. Setting $2x - 1 = -x + 5$ gives $3x = 6$, so $x = 2$ and $y = 3$. Check in $q$: $-2 + 5 = 3$. ✓ They cross at $(2, 3)$. (The choice $(3, 2)$ swaps the coordinates; the choice $(0, -1)$ is where $p$ meets the $y$-axis and the choice $(5, 0)$ is where $q$ meets the $x$-axis — both are crossings with an AXIS, not with the other line.)',
    },
    {
      q: 'What is true of the two lines shown?',
      fig: {
        view: [-4, -4, 5, 5],
        grid: true,
        elems: [
          { t: 'line', a: [-2, -1], b: [2, 1] },
          { t: 'line', a: [0, 3], b: [2, -1] },
          { t: 'point', p: [-2, -1], label: '(-2, -1)', dx: -14, dy: 20 },
          { t: 'point', p: [2, 1], label: '(2, 1)', dx: 10, dy: -8 },
          { t: 'point', p: [0, 3], label: '(0, 3)', dx: -48, dy: -6 },
          { t: 'point', p: [2, -1], label: '(2, -1)', dx: 10, dy: 20 },
        ],
      },
      choices: [
        'The lines are parallel',
        'The lines have the same $y$-intercept',
        'The lines are the same line',
        'The lines are perpendicular',
      ],
      answer: 3,
      solution:
        'Read each slope from the marked points. The first line goes from $(-2, -1)$ to $(2, 1)$: rise $2$, run $4$, slope $\\frac{1}{2}$. The second goes from $(0, 3)$ to $(2, -1)$: rise $-4$, run $2$, slope $-2$. Their product is $\\frac{1}{2} \\cdot (-2) = -1$, so the lines are perpendicular. ✓ (They are not parallel, since their slopes differ; they are not the same line; and their $y$-intercepts differ too — the first is $y = \\frac{1}{2}x$, crossing at $(0, 0)$, while the second crosses at $(0, 3)$.)',
    },
  ],
  // p8 — parallel to a given line, through a given point
  [
    {
      q: 'Which equation describes the line through $(2, -3)$ that is parallel to $y = -4x + 6$?',
      choices: ['$y = -4x - 3$', '$y = -4x + 5$', '$y = 4x - 11$', '$y = -4x + 11$'],
      answer: 1,
      solution:
        'Parallel means slope $-4$. Point-slope through $(2, -3)$: $y + 3 = -4(x - 2)$, so $y + 3 = -4x + 8$ and $y = -4x + 5$. Check it forward: at $x = 2$, $y = -8 + 5 = -3$. ✓ (The choice $y = -4x - 3$ drops the point’s $y$-value into the $b$ seat, but $-3$ is the height at $x = 2$, not at $x = 0$; the choice $y = 4x - 11$ loses the minus on the slope; the choice $y = -4x + 11$ writes $y - 3$ instead of $y + 3$ on the left.)',
    },
    {
      q: 'Which equation describes the line through $(-2, 7)$ that is parallel to $2x + y = 1$?',
      choices: ['$y = -2x + 7$', '$y = 2x + 11$', '$y = -2x + 3$', '$y = -2x + 11$'],
      answer: 2,
      solution:
        'Rewrite the given line as $y = -2x + 1$, so the slope is $-2$. Point-slope through $(-2, 7)$: $y - 7 = -2(x + 2)$, so $y - 7 = -2x - 4$ and $y = -2x + 3$. Check it forward: at $x = -2$, $y = 4 + 3 = 7$. ✓ (The choice $y = -2x + 7$ copies the point’s $y$-value into the $b$ seat; the choice $y = 2x + 11$ forgets that $2x$ turns negative when it crosses the equals sign; the choice $y = -2x + 11$ is the SIGN trap, writing $x - 2$ instead of $x + 2$ for a negative $x$-coordinate.)',
    },
    {
      q: 'A line parallel to $2x - 3y = 9$ passes through $(3, 5)$. What is its $y$-intercept?',
      choices: ['$(0, 5)$', '$(0, -3)$', '$(0, 7)$', '$(0, 3)$'],
      answer: 3,
      solution:
        'Rewrite the given line: $-3y = -2x + 9$, so $y = \\frac{2}{3}x - 3$ and the slope is $\\frac{2}{3}$. Our line is $y = \\frac{2}{3}x + b$; putting in $(3, 5)$ gives $5 = 2 + b$, so $b = 3$ and the $y$-intercept is $(0, 3)$. Check it forward: $y = \\frac{2}{3}x + 3$ at $x = 3$ gives $2 + 3 = 5$. ✓ (The choice $(0, 5)$ copies the point’s height, which belongs at $x = 3$; the choice $(0, -3)$ copies the GIVEN line’s intercept; the choice $(0, 7)$ is the SIGN trap, using slope $-\\frac{2}{3}$ and forgetting that dividing by $-3$ flips both signs.)',
    },
  ],
  // p9 — perpendicular to a given line, through a given point
  [
    {
      q: 'Which equation describes the line through the origin perpendicular to $y = -\\frac{1}{3}x + 5$?',
      choices: ['$y = 3x$', '$y = -3x$', '$y = \\frac{1}{3}x$', '$y = 3x + 5$'],
      answer: 0,
      solution:
        'The perpendicular slope satisfies $-\\frac{1}{3} \\cdot m = -1$, so $m = 3$. Through the origin the intercept is $0$, giving $y = 3x$. Check it forward: $-\\frac{1}{3} \\cdot 3 = -1$ ✓, and at $x = 0$ the line is at $y = 0$ ✓. (The choice $y = -3x$ flips the fraction without flipping the sign; the choice $y = \\frac{1}{3}x$ flips the sign without flipping the fraction; the choice $y = 3x + 5$ has the right slope but drags the given line’s intercept along, so it misses the origin.)',
    },
    {
      q: 'Which equation describes the line through $(0, 0)$ perpendicular to $3x - y = 4$?',
      choices: ['$y = \\frac{1}{3}x$', '$y = -\\frac{1}{3}x$', '$y = -3x$', '$y = -\\frac{1}{3}x - 4$'],
      answer: 1,
      solution:
        'Rewrite the given line: $-y = -3x + 4$, so $y = 3x - 4$ and its slope is $3$. The perpendicular slope is $-\\frac{1}{3}$, and through $(0, 0)$ the intercept is $0$: $y = -\\frac{1}{3}x$. Check it forward: $3 \\cdot \\left(-\\frac{1}{3}\\right) = -1$ ✓, and the line does pass through the origin ✓. (The choice $y = \\frac{1}{3}x$ flips the fraction without flipping the sign; the choice $y = -3x$ flips the sign without flipping the fraction; the choice $y = -\\frac{1}{3}x - 4$ has the right slope but keeps the given line’s constant, so it misses the origin.)',
    },
    {
      q: 'Which equation describes the line through $(4, 1)$ perpendicular to $y = 2x - 5$?',
      choices: [
        '$y = -\\frac{1}{2}x + 1$',
        '$y = 2x - 7$',
        '$y = -2x + 9$',
        '$y = -\\frac{1}{2}x + 3$',
      ],
      answer: 3,
      solution:
        'The perpendicular slope satisfies $2m = -1$, so $m = -\\frac{1}{2}$. Point-slope through $(4, 1)$: $y - 1 = -\\frac{1}{2}(x - 4)$, so $y = -\\frac{1}{2}x + 2 + 1 = -\\frac{1}{2}x + 3$. Check it forward: at $x = 4$, $y = -2 + 3 = 1$ ✓, and $2 \\cdot \\left(-\\frac{1}{2}\\right) = -1$ ✓. (The choice $y = -\\frac{1}{2}x + 1$ copies the point’s height into the $b$ seat; the choice $y = 2x - 7$ is PARALLEL to the given line instead of perpendicular; the choice $y = -2x + 9$ flips the sign of the slope without flipping the fraction.)',
    },
  ],
  // p10 — solve for the letter that makes the pair parallel or perpendicular
  [
    {
      q: 'For what value of $k$ are the lines $y = kx - 1$ and $5x - 4y = 12$ perpendicular?',
      choices: ['$-\\frac{4}{5}$', '$\\frac{4}{5}$', '$-\\frac{5}{4}$', '$\\frac{5}{4}$'],
      answer: 0,
      solution:
        'Rewrite the second line: $-4y = -5x + 12$, so $y = \\frac{5}{4}x - 3$ and its slope is $\\frac{5}{4}$. Perpendicular means $k \\cdot \\frac{5}{4} = -1$, so $k = -\\frac{4}{5}$. Check it forward: $-\\frac{4}{5} \\cdot \\frac{5}{4} = -1$. ✓ (The choice $\\frac{4}{5}$ flips the fraction without flipping the sign; the choice $-\\frac{5}{4}$ flips the sign without flipping the fraction; the choice $\\frac{5}{4}$ would make the lines PARALLEL.)',
    },
    {
      q: 'For what value of $k$ are the lines $2x + ky = 6$ and $y = 4x + 1$ perpendicular?',
      choices: ['$-8$', '$8$', '$\\frac{1}{2}$', '$\\frac{1}{8}$'],
      answer: 1,
      solution:
        'Rewrite the first line: $ky = -2x + 6$, so $y = -\\frac{2}{k}x + \\frac{6}{k}$ and its slope is $-\\frac{2}{k}$. Perpendicular to slope $4$ means $-\\frac{2}{k} \\cdot 4 = -1$, that is $-\\frac{8}{k} = -1$, so $k = 8$. Check it forward: $2x + 8y = 6$ becomes $y = -\\frac{1}{4}x + \\frac{3}{4}$, and $4 \\cdot \\left(-\\frac{1}{4}\\right) = -1$ ✓. (The choice $-8$ loses the minus that appears when $2x$ moves across, using slope $\\frac{2}{k}$; the choice $\\frac{1}{2}$ takes the perpendicular slope to be $-4$, negating without flipping; the choice $\\frac{1}{8}$ flips the fraction at the very last step.)',
    },
    {
      q: 'For what value of $k$ are the lines $y = (k - 1)x + 5$ and $6x + 3y = 9$ parallel?',
      choices: ['$3$', '$-2$', '$-1$', '$\\frac{3}{2}$'],
      answer: 2,
      solution:
        'Rewrite the second line: $3y = -6x + 9$, so $y = -2x + 3$ and its slope is $-2$. Parallel means equal slopes: $k - 1 = -2$, so $k = -1$. Check it forward: $k = -1$ makes the first line $y = -2x + 5$, same slope as $y = -2x + 3$ but a different intercept, so the two never meet. ✓ (The choice $3$ reads the slope as $+2$, forgetting the minus on $6x$; the choice $-2$ reports the SLOPE instead of $k$; the choice $\\frac{3}{2}$ uses the PERPENDICULAR slope $\\frac{1}{2}$, solving $k - 1 = \\frac{1}{2}$.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 8,
  sections: { '8.5': s85, '8.6': s86 },
}
