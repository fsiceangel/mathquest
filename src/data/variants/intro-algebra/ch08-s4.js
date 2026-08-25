// Introduction to Algebra chapter 8 — variations for the 12 CHALLENGE problems.
// All problems and solutions are original MathQuest content.
//
// House rules for this file (the same ones the 8.5/8.6 sections file held to):
//  - Every key was re-derived from the question text alone, then checked FORWARD:
//    the point is substituted back into the equation, the rate is replayed against
//    both readings, the perimeter is rebuilt leg by leg. No key is trusted because
//    the solution says so.
//  - Slope is always rise over run, measured in the SAME direction for both parts.
//    Two named traps get their own distractor in nearly every item: the SIGN trap
//    (a fall is a negative rise; dividing by a negative flips every sign) and the
//    RECIPROCAL trap (flipping the fraction belongs to perpendicular lines only).
//  - Every item that could be answered by pattern-matching a form instead got its
//    direction reversed — the midpoint is given and an endpoint is missing, the
//    area is given and a coefficient is missing, the crossing point is given and
//    the constant is missing. Same skill, run the other way.
//  - Figures are coordinate-exact: every marked point satisfies the line it sits
//    on, every plotted feature lies inside the stated view, and label text is
//    plain text, never math markup.
//  - Every distractor is a named mistake — the parallel slope where perpendicular
//    was asked, forgetting the one-half in a triangle's area, reading the run as
//    the rise, answering the question next door — and no two choices in an item
//    share a VALUE (checked numerically, not as text).

const challenge = [
  // c1 — the midpoint of an axis-parallel segment (one variation runs backwards)
  [
    {
      q: 'Points $P(-11, 6)$ and $Q(3, 6)$ are the endpoints of a segment. What is its midpoint?',
      choices: ['$(-8, 6)$', '$(7, 6)$', '$(-4, 6)$', '$(6, -4)$'],
      answer: 2,
      solution:
        'Both endpoints have $y = 6$, so the segment is horizontal and the midpoint keeps that same height. Average the coordinate that changes: $\\frac{-11 + 3}{2} = \\frac{-8}{2} = -4$. The midpoint is $(-4, 6)$. Check it forward: from $-11$ to $-4$ is $7$ units, and from $-4$ to $3$ is also $7$ units — dead centre. ✓ (The choice $(-8, 6)$ adds the two $x$-coordinates but forgets to halve; the choice $(7, 6)$ reports HALF THE LENGTH of the segment instead of the midpoint\'s address; the choice $(6, -4)$ has the right two numbers written in the wrong order, and order always matters in a coordinate pair.)',
    },
    {
      q: 'The midpoint of a horizontal segment $RS$ is $(2, -5)$, and one endpoint is $R(-6, -5)$. What are the coordinates of $S$?',
      choices: ['$(-14, -5)$', '$(-2, -5)$', '$(4, -5)$', '$(10, -5)$'],
      answer: 3,
      solution:
        'The midpoint sits halfway, so whatever walk takes you from $R$ to the midpoint must be repeated to reach $S$. From $x = -6$ to $x = 2$ is a walk of $8$ units to the RIGHT, so keep going $8$ more: $2 + 8 = 10$. The height never changes, so $S = (10, -5)$. Check it forward: the midpoint of $(-6, -5)$ and $(10, -5)$ is $\\left(\\frac{-6 + 10}{2}, -5\\right) = (2, -5)$. ✓ (The choice $(-14, -5)$ walks the $8$ units the wrong way, landing on the far side of $R$; the choice $(-2, -5)$ averages $R$ with the midpoint, which finds the middle of only the first half; the choice $(4, -5)$ doubles the midpoint\'s $x$ but forgets to subtract $R$\'s $x$.)',
    },
    {
      q: 'A vertical segment has endpoints $(7, -2)$ and $(7, 11)$. Where is its midpoint?',
      choices: ['$(7, 9)$', '$(7, 4.5)$', '$(7, 6.5)$', '$(4.5, 7)$'],
      answer: 1,
      solution:
        'Both endpoints have $x = 7$, so the segment is vertical and the midpoint keeps that same $x$. Average the heights: $\\frac{-2 + 11}{2} = \\frac{9}{2} = 4.5$. The midpoint is $(7, 4.5)$. Check it forward: from $-2$ up to $4.5$ is $6.5$ units, and from $4.5$ up to $11$ is $6.5$ units too. ✓ (The choice $(7, 9)$ adds the two heights but forgets to halve; the choice $(7, 6.5)$ reports HALF THE LENGTH rather than the midpoint\'s height; the choice $(4.5, 7)$ has the coordinates swapped.)',
    },
  ],

  // c2 — a third point on the line through two given points (one reversed, one NOT-item)
  [
    {
      q: 'A line passes through $(-3, 5)$ and $(5, 1)$. Which of these points is also on it?',
      choices: ['$(1, 7)$', '$(3, 1)$', '$(0, 3)$', '$(1, 3)$'],
      answer: 3,
      solution:
        'First find the slope: $m = \\frac{1 - 5}{5 - (-3)} = \\frac{-4}{8} = -\\frac{1}{2}$. Now test a choice by measuring its slope back to a known point. From $(-3, 5)$ to $(1, 3)$: $\\frac{3 - 5}{1 - (-3)} = \\frac{-2}{4} = -\\frac{1}{2}$, a match. Check it forward from the OTHER known point too: from $(1, 3)$ to $(5, 1)$ is $\\frac{1 - 3}{5 - 1} = \\frac{-2}{4} = -\\frac{1}{2}$. ✓ (The choice $(1, 7)$ uses slope $+\\frac{1}{2}$, climbing where this line falls — the SIGN trap; the choice $(3, 1)$ is the point $(1, 3)$ with its coordinates swapped; the choice $(0, 3)$ guesses that the line crosses the $y$-axis at the average of the two given heights, but stepping $3$ units right from $(-3, 5)$ at slope $-\\frac{1}{2}$ lands at $y = 3.5$, not $3$.)',
    },
    {
      q: 'The points $(-2, 1)$, $(4, 4)$, and $(12, t)$ all lie on one line. What is $t$?',
      choices: ['$8$', '$7$', '$20$', '$12$'],
      answer: 0,
      solution:
        'Three points on one line all share the same slope, so measure it from the pair you know completely: $m = \\frac{4 - 1}{4 - (-2)} = \\frac{3}{6} = \\frac{1}{2}$. From $(4, 4)$ to $x = 12$ is a run of $8$, and half of $8$ is a rise of $4$, so $t = 4 + 4 = 8$. Check it forward against the FIRST point: $\\frac{8 - 1}{12 - (-2)} = \\frac{7}{14} = \\frac{1}{2}$. ✓ (The choice $7$ repeats the earlier rise of $3$ without noticing the run grew from $6$ to $8$; the choice $20$ flips the slope to $2$ and multiplies the run instead of halving it — the RECIPROCAL trap; the choice $12$ treats the slope as $1$ and simply copies the $x$-coordinate.)',
    },
    {
      q: 'A line passes through $(1, -2)$ and $(4, 4)$. Which of these points is NOT on that line?',
      choices: ['$(0, -4)$', '$(3, 2)$', '$(0, 2)$', '$(5, 6)$'],
      answer: 2,
      solution:
        'Find the line first, then test every choice — with a NOT question you cannot stop at the first one that works. The slope is $\\frac{4 - (-2)}{4 - 1} = \\frac{6}{3} = 2$, and from $(1, -2)$ stepping one unit left gives the $y$-intercept $-2 - 2 = -4$, so the line is $y = 2x - 4$. Test each: $(0, -4)$ gives $2(0) - 4 = -4$ ✓; $(3, 2)$ gives $2(3) - 4 = 2$ ✓; $(5, 6)$ gives $2(5) - 4 = 6$ ✓; but $(0, 2)$ needs $y = -4$, not $2$, so $(0, 2)$ is the odd one out. (The three points that DO lie on the line are the tempting stopping places: $(0, -4)$ is the $y$-intercept, $(3, 2)$ sits between the given points, and $(5, 6)$ is one step past the second one. The trap in $(0, 2)$ is that it is the genuine $x$-intercept $(2, 0)$ with its coordinates swapped.)',
    },
  ],

  // c3 — read a slope straight off a graph (three figures)
  [
    {
      q: 'The graph shows a line drawn through two marked lattice points. What is the slope of that line?',
      fig: {
        view: [-4, -4, 4, 4],
        grid: true,
        elems: [
          { t: 'line', a: [-3, -1], b: [3, 3] },
          { t: 'point', p: [-3, -1], label: '(-3, -1)', dx: 8, dy: 18 },
          { t: 'point', p: [3, 3], label: '(3, 3)', dx: -52, dy: -8 },
        ],
      },
      choices: ['$\\frac{3}{2}$', '$\\frac{2}{3}$', '$-\\frac{2}{3}$', '$\\frac{4}{3}$'],
      answer: 1,
      solution:
        'Travel from the left point to the right one and count. The run is $3 - (-3) = 6$ steps right, and the rise is $3 - (-1) = 4$ steps up. Slope is rise over run: $\\frac{4}{6} = \\frac{2}{3}$. Check it forward: starting at $(-3, -1)$ and taking two runs of $3$ with a rise of $2$ each lands at $(0, 1)$, then $(3, 3)$ — right on the second marked point. ✓ (The choice $\\frac{3}{2}$ divides run by rise — the RECIPROCAL trap; the choice $-\\frac{2}{3}$ has the size right but the sign wrong, and this line clearly climbs to the right; the choice $\\frac{4}{3}$ uses the true rise of $4$ over a run counted only from the $y$-axis to $x = 3$.)',
    },
    {
      q: 'What is the slope of the graphed line?',
      fig: {
        view: [-5, -4, 5, 4],
        grid: true,
        elems: [
          { t: 'line', a: [-4, 2], b: [4, -2] },
          { t: 'point', p: [-4, 2], label: '(-4, 2)', dx: 8, dy: -10 },
          { t: 'point', p: [4, -2], label: '(4, -2)', dx: -56, dy: 18 },
        ],
      },
      choices: ['$-2$', '$\\frac{1}{2}$', '$2$', '$-\\frac{1}{2}$'],
      answer: 3,
      solution:
        'Read the two marked points, $(-4, 2)$ and $(4, -2)$, and go left to right. The run is $4 - (-4) = 8$ steps right; the height changes from $2$ down to $-2$, a rise of $-2 - 2 = -4$. Slope $= \\frac{-4}{8} = -\\frac{1}{2}$. Check it forward: from $(-4, 2)$, eight runs of $1$ each dropping $\\frac{1}{2}$ gives a total drop of $4$, landing at $(4, -2)$. ✓ (The choice $-2$ divides run by rise and keeps the minus — the RECIPROCAL trap; the choice $\\frac{1}{2}$ has the right size but the wrong sign, and a line sliding downhill to the right must be negative; the choice $2$ makes both mistakes at once.)',
    },
    {
      q: 'The line in the graph runs through the marked points $(-2, 4)$ and $(1, -2)$. For each single unit you move to the right along this line, how far does it drop?',
      fig: {
        view: [-4, -3, 4, 5],
        grid: true,
        elems: [
          { t: 'line', a: [-2, 4], b: [1, -2] },
          { t: 'point', p: [-2, 4], label: '(-2, 4)', dx: 8, dy: -10 },
          { t: 'point', p: [1, -2], label: '(1, -2)', dx: 10, dy: 18 },
        ],
      },
      choices: ['$2$ units', '$3$ units', '$\\frac{1}{2}$ unit', '$6$ units'],
      answer: 0,
      solution:
        'The question is asking for the size of the slope in plain words. From $(-2, 4)$ to $(1, -2)$ the run is $1 - (-2) = 3$ steps right and the height falls from $4$ to $-2$, a drop of $6$. Spread that drop evenly over the $3$ steps: $\\frac{6}{3} = 2$ units per step. Check it forward: from $(-2, 4)$, dropping $2$ per step gives $(-1, 2)$, then $(0, 0)$, then $(1, -2)$ — exactly the second marked point. ✓ (The choice $3$ reports the RUN instead of the drop; the choice $\\frac{1}{2}$ divides run by drop, the RECIPROCAL trap; the choice $6$ is the TOTAL drop across all three steps, not the drop per single step.)',
    },
  ],

  // c4 — the triangle a line cuts off with the two axes (one reversed: area given, find a coefficient)
  [
    {
      q: 'The line $3x + 5y = 30$ forms a triangle with the $x$-axis and the $y$-axis. What is the area of that triangle?',
      choices: ['$30$', '$60$', '$16$', '$15$'],
      answer: 0,
      solution:
        'The triangle\'s two legs run along the axes, so find where the line meets each one. Set $y = 0$: $3x = 30$, so $x = 10$ and the line hits $(10, 0)$. Set $x = 0$: $5y = 30$, so $y = 6$ and the line hits $(0, 6)$. The right angle sits at the origin, so the legs are $10$ and $6$: area $= \\frac{1}{2}(10)(6) = 30$. Check it forward: both intercepts satisfy the equation, since $3(10) + 5(0) = 30$ and $3(0) + 5(6) = 30$. ✓ (The choice $60$ multiplies the legs but forgets the $\\frac{1}{2}$ that every triangle needs; the choice $16$ ADDS the two legs instead of multiplying them; the choice $15$ halves the constant $30$ from the equation, which is not a length at all.)',
    },
    {
      q: 'The line $2x + by = 12$, where $b > 0$, forms a triangle of area $18$ with the two axes. What is $b$?',
      choices: ['$\\frac{1}{2}$', '$4$', '$2$', '$6$'],
      answer: 2,
      solution:
        'Write both legs first. Setting $y = 0$ gives $2x = 12$, so the horizontal leg is $6$ — it does not depend on $b$ at all. Setting $x = 0$ gives $by = 12$, so the vertical leg is $\\frac{12}{b}$. Then $\\frac{1}{2}(6)\\left(\\frac{12}{b}\\right) = \\frac{36}{b} = 18$, which gives $b = 2$. Check it forward: with $b = 2$ the line is $2x + 2y = 12$, meeting the axes at $(6, 0)$ and $(0, 6)$, and $\\frac{1}{2}(6)(6) = 18$. ✓ (The choice $\\frac{1}{2}$ comes from writing the vertical leg as $12b$ instead of $\\frac{12}{b}$; the choice $4$ forgets the $\\frac{1}{2}$ and solves $\\frac{72}{b} = 18$; the choice $6$ misreads $b$ itself as the $y$-intercept and solves $\\frac{1}{2}(6)(b) = 18$.)',
    },
    {
      q: 'The line $y = -\\frac{4}{3}x + 8$ cuts off a triangle with the two axes. What is the area of that triangle?',
      choices: ['$48$', '$24$', '$14$', '$32$'],
      answer: 1,
      solution:
        'The equation is already in slope-intercept form, so the $y$-intercept is right there: the line meets the $y$-axis at $(0, 8)$, a vertical leg of $8$. For the other leg set $y = 0$: $\\frac{4}{3}x = 8$, so $x = 8 \\cdot \\frac{3}{4} = 6$ and the line meets $(6, 0)$. Area $= \\frac{1}{2}(6)(8) = 24$. Check it forward: at $x = 6$ the line gives $-\\frac{4}{3}(6) + 8 = -8 + 8 = 0$. ✓ (The choice $48$ multiplies the legs but drops the $\\frac{1}{2}$; the choice $14$ adds the legs instead of multiplying; the choice $32$ assumes the $x$-intercept is $8$ as well, which would need a slope of $-1$.)',
    },
  ],

  // c5 — a point whose two coordinates are linked, sitting on a given line
  [
    {
      q: 'The point $(t, t - 2)$ lies on the line $3x + 2y = 21$. What is $t$?',
      choices: ['$\\frac{21}{5}$', '$\\frac{17}{5}$', '$3$', '$5$'],
      answer: 3,
      solution:
        'The point is on the line, so its coordinates must satisfy the equation. Substitute $x = t$ and $y = t - 2$: $3t + 2(t - 2) = 21$. Distribute carefully: $3t + 2t - 4 = 21$, so $5t = 25$ and $t = 5$. Check it forward: $t = 5$ makes the point $(5, 3)$, and $3(5) + 2(3) = 15 + 6 = 21$. ✓ (The choice $\\frac{21}{5}$ drops the $-4$ entirely and solves $5t = 21$; the choice $\\frac{17}{5}$ moves the $-4$ across without flipping its sign, solving $5t = 17$; the choice $3$ is the point\'s HEIGHT $t - 2$, which answers the question next door.)',
    },
    {
      q: 'The point $(2k, k + 1)$ lies on the line $4x - y = 13$. What is the value of $k$?',
      choices: ['$\\frac{12}{7}$', '$2$', '$3$', '$\\frac{4}{3}$'],
      answer: 1,
      solution:
        'Substitute $x = 2k$ and $y = k + 1$ into the equation: $4(2k) - (k + 1) = 13$. The minus sign in front of the parentheses hits BOTH terms: $8k - k - 1 = 13$, so $7k = 14$ and $k = 2$. Check it forward: $k = 2$ makes the point $(4, 3)$, and $4(4) - 3 = 16 - 3 = 13$. ✓ (The choice $\\frac{12}{7}$ subtracts the $1$ from $13$ on the wrong side, solving $7k = 12$; the choice $3$ reports $k + 1$, the point\'s height, rather than $k$ itself; the choice $\\frac{4}{3}$ forgets to distribute the minus over the $1$ and also mishandles the $8k$, landing on $9k = 12$.)',
    },
    {
      q: 'A point of the form $(n, 2n + 3)$ lies on the line $x + y = 18$. What are the coordinates of that point?',
      choices: ['$(7, 17)$', '$(5, 10)$', '$(5, 13)$', '$(6, 12)$'],
      answer: 2,
      solution:
        'Substitute the linked coordinates into the line: $n + (2n + 3) = 18$, so $3n + 3 = 18$, giving $3n = 15$ and $n = 5$. The height is then $2(5) + 3 = 13$, so the point is $(5, 13)$. Check it forward: $5 + 13 = 18$ ✓, and the height really is three more than double the $x$-value. ✓ (The choice $(7, 17)$ flips the sign of the $+3$, solving $3n = 21$; the choice $(5, 10)$ finds $n$ correctly but writes the height as $2n$, forgetting the $+3$; the choice $(6, 12)$ sits on the line but has $y = 2x$, ignoring the $+3$ in the description of the point.)',
    },
  ],

  // c6 — the slope of a perpendicular line (one reversed, one vertical-line case)
  [
    {
      q: 'Line $\\ell$ passes through $(-2, 1)$ and $(4, -3)$. What is the slope of any line perpendicular to $\\ell$?',
      choices: ['$-\\frac{2}{3}$', '$\\frac{2}{3}$', '$\\frac{3}{2}$', '$-\\frac{3}{2}$'],
      answer: 2,
      solution:
        'First get $\\ell$\'s own slope: $m = \\frac{-3 - 1}{4 - (-2)} = \\frac{-4}{6} = -\\frac{2}{3}$. Perpendicular slopes are negative reciprocals — flip the fraction AND change the sign — so the answer is $\\frac{3}{2}$. Check it forward by multiplying: $-\\frac{2}{3} \\times \\frac{3}{2} = -1$, exactly what perpendicular slopes must give. ✓ (The choice $-\\frac{2}{3}$ is $\\ell$\'s own slope, which belongs to PARALLEL lines; the choice $\\frac{2}{3}$ changes only the sign and forgets to flip; the choice $-\\frac{3}{2}$ flips but keeps the minus, and its product with $-\\frac{2}{3}$ is $+1$, not $-1$.)',
    },
    {
      q: 'Line $j$ passes through $(1, 5)$ and $(7, q)$, and $j$ is perpendicular to a line of slope $\\frac{3}{4}$. What is $q$?',
      choices: ['$-3$', '$13$', '$\\frac{1}{2}$', '$\\frac{19}{2}$'],
      answer: 0,
      solution:
        'Perpendicular to slope $\\frac{3}{4}$ means $j$ has slope $-\\frac{4}{3}$: flip and negate. From $(1, 5)$ to $(7, q)$ the run is $7 - 1 = 6$, so the rise is $-\\frac{4}{3}(6) = -8$, and $q = 5 - 8 = -3$. Check it forward: the slope from $(1, 5)$ to $(7, -3)$ is $\\frac{-3 - 5}{6} = \\frac{-8}{6} = -\\frac{4}{3}$, and $-\\frac{4}{3} \\times \\frac{3}{4} = -1$. ✓ (The choice $13$ flips the fraction but keeps it positive, climbing $8$ instead of dropping $8$; the choice $\\frac{1}{2}$ negates without flipping, using slope $-\\frac{3}{4}$; the choice $\\frac{19}{2}$ uses the PARALLEL slope $\\frac{3}{4}$ and climbs $4.5$.)',
    },
    {
      q: 'Line $\\ell$ passes through $(4, -1)$ and $(4, 6)$. What is the slope of a line perpendicular to $\\ell$?',
      choices: ['Undefined', '$-1$', '$7$', '$0$'],
      answer: 3,
      solution:
        'Both points have $x = 4$, so $\\ell$ is a VERTICAL line — its run is zero and its own slope is undefined. A line perpendicular to a vertical line is horizontal, and a horizontal line never rises, so its slope is $\\frac{0}{\\text{run}} = 0$. Check it forward: a horizontal line such as $y = 6$ does meet the vertical line $x = 4$ at a right angle, and its slope is $0$. ✓ (The choice "Undefined" copies $\\ell$\'s own slope instead of the perpendicular one; the choice $-1$ quotes the product rule $m_1 m_2 = -1$ as if it were the answer, but that rule cannot even be applied when one slope is undefined; the choice $7$ is the vertical gap between the two given points, a length rather than a slope.)',
    },
  ],

  // c7 — where two lines cross (one reversed: the crossing is given, find the constant)
  [
    {
      q: 'At what point do the lines $3x - y = 8$ and $y = x + 2$ cross?',
      choices: ['$(5, 7)$', '$(7, 5)$', '$(3, 5)$', '$(5, 3)$'],
      answer: 0,
      solution:
        'The crossing point is on BOTH lines, so substitute the second equation into the first: $3x - (x + 2) = 8$. The minus hits both terms: $3x - x - 2 = 8$, so $2x = 10$ and $x = 5$. Then $y = 5 + 2 = 7$. Check it forward in the equation we substituted into: $3(5) - 7 = 15 - 7 = 8$. ✓ (The choice $(7, 5)$ has the coordinates swapped; the choice $(3, 5)$ loses the minus on the $2$, solving $3x - x + 2 = 8$; the choice $(5, 3)$ finds $x = 5$ correctly but computes the height from $y = x - 2$.)',
    },
    {
      q: 'The lines $y = 4x - 9$ and $y = -2x + c$ cross at a point where $x = 2$. What is $c$?',
      choices: ['$-1$', '$-5$', '$1$', '$3$'],
      answer: 3,
      solution:
        'Use the line you know completely to find the crossing point: at $x = 2$, $y = 4(2) - 9 = -1$, so the lines meet at $(2, -1)$. That point must also satisfy the second line: $-1 = -2(2) + c = -4 + c$, so $c = 3$. Check it forward: with $c = 3$ the second line at $x = 2$ gives $-2(2) + 3 = -1$, matching the first line exactly. ✓ (The choice $-1$ reports the crossing HEIGHT instead of the constant; the choice $-5$ uses $+2x$ and solves $-1 = 4 + c$; the choice $1$ forgets to multiply the $-2$ by the $2$, solving $-1 = -2 + c$.)',
    },
    {
      q: 'Where do the lines $x + 2y = 13$ and $3x - 2y = 7$ intersect?',
      choices: ['$(4, 5)$', '$(5, 4)$', '$(5, -4)$', '$(5, 8)$'],
      answer: 1,
      solution:
        'The $y$-terms are already opposites, so simply add the two equations: $(x + 3x) + (2y - 2y) = 13 + 7$, which is $4x = 20$ and $x = 5$. Put that back in the first equation: $5 + 2y = 13$, so $2y = 8$ and $y = 4$. The lines meet at $(5, 4)$. Check it forward in the SECOND equation: $3(5) - 2(4) = 15 - 8 = 7$. ✓ (The choice $(4, 5)$ has the coordinates swapped; the choice $(5, -4)$ slips a sign, reading $-2y = -8$ from the second equation without dividing correctly; the choice $(5, 8)$ stops at $2y = 8$ and reports $2y$ as if it were $y$.)',
    },
  ],

  // c8 — a steady-rate story (one asks for the starting value, one for a clock time)
  [
    {
      q: 'A tank is filling at a steady rate. It holds $900$ litres when the pump starts, and $1200$ litres six minutes later. The tank is full at $3000$ litres. How many minutes after the pump starts does the tank fill up?',
      choices: ['$60$ minutes', '$42$ minutes', '$36$ minutes', '$7$ minutes'],
      answer: 1,
      solution:
        'A steady rate is a slope: the water rose $1200 - 900 = 300$ litres in $6$ minutes, so the rate is $\\frac{300}{6} = 50$ litres per minute. Starting from $900$, the tank still needs $3000 - 900 = 2100$ litres, which takes $\\frac{2100}{50} = 42$ minutes. Check it forward: after $42$ minutes the tank holds $900 + 50(42) = 900 + 2100 = 3000$ litres, and at $6$ minutes it holds $900 + 300 = 1200$, matching the second reading. ✓ (The choice $60$ divides the full $3000$ by the rate, ignoring the head start of $900$ litres already in the tank; the choice $36$ measures the remaining $1800$ litres from the SECOND reading but forgets to add back the first $6$ minutes; the choice $7$ divides $2100$ by the $300$-litre gain instead of by the per-minute rate.)',
    },
    {
      q: 'A candle burns down at a steady rate. Four minutes after it was lit it stands $21$ cm tall, and twelve minutes after it was lit it stands $15$ cm tall. How tall was the candle when it was lit?',
      choices: ['$24$ cm', '$27$ cm', '$18$ cm', '$21$ cm'],
      answer: 0,
      solution:
        'The height fell $21 - 15 = 6$ cm across $12 - 4 = 8$ minutes, so the rate is $\\frac{6}{8} = 0.75$ cm per minute of burning. The moment it was lit is $4$ minutes BEFORE the first reading, so the candle was taller then: $21 + 4(0.75) = 21 + 3 = 24$ cm. Check it forward: from $24$ cm, four minutes of burning gives $24 - 3 = 21$ cm ✓, and twelve minutes gives $24 - 9 = 15$ cm ✓. (The choice $27$ divides the $6$ cm by the $4$ minutes instead of by the $8$ minutes between readings; the choice $18$ walks the rate the wrong way, subtracting $3$ when going back in time; the choice $21$ reports the four-minute height as though the candle were lit at that moment.)',
    },
    {
      q: 'A cup of cocoa cools at a steady rate. At $6{:}00$ pm it reads $105$ °F, and at $6{:}20$ pm it reads $95$ °F. At what time will it read $80$ °F?',
      choices: ['6:25 pm', '6:30 pm', '6:50 pm', '7:10 pm'],
      answer: 2,
      solution:
        'The cocoa lost $105 - 95 = 10$ °F in $20$ minutes, so the rate is $\\frac{10}{20} = 0.5$ °F per minute. From the $6{:}00$ pm reading of $105$ °F down to $80$ °F is a drop of $25$ °F, which takes $\\frac{25}{0.5} = 50$ minutes: $6{:}00$ pm $+$ $50$ minutes $=$ $6{:}50$ pm. Check it forward from the OTHER reading: at $6{:}20$ pm it is $95$ °F, and $6{:}50$ pm is $30$ minutes later, so it drops another $0.5(30) = 15$ °F to $95 - 15 = 80$ °F. ✓ (The choice 6:25 pm reads the $25$-degree drop as $25$ minutes; the choice 6:30 pm computes the correct leftover $30$ minutes from the second reading but adds it to $6{:}00$ pm; the choice 7:10 pm finds the correct $50$ minutes but counts them from $6{:}20$ pm instead of from $6{:}00$ pm.)',
    },
  ],

  // c9 — the equation of a line from its two intercepts (one asked in slope-intercept form)
  [
    {
      q: 'A line crosses the $x$-axis at $(-4, 0)$ and the $y$-axis at $(0, 6)$. Which equation describes this line?',
      choices: ['$3x - 2y = 12$', '$3x - 2y = -12$', '$2x - 3y = -12$', '$3x + 2y = 12$'],
      answer: 1,
      solution:
        'The slope from $(-4, 0)$ to $(0, 6)$ is $\\frac{6 - 0}{0 - (-4)} = \\frac{6}{4} = \\frac{3}{2}$, and the $y$-intercept is $6$, so $y = \\frac{3}{2}x + 6$. Clear the fraction by doubling: $2y = 3x + 12$, and move the $x$-term across: $3x - 2y = -12$. Check it forward with BOTH intercepts: $3(-4) - 2(0) = -12$ ✓ and $3(0) - 2(6) = -12$ ✓. (The choice $3x - 2y = 12$ has the constant\'s sign wrong; its intercepts are $(4, 0)$ and $(0, -6)$; the choice $2x - 3y = -12$ swaps the coefficients, giving intercepts $(-6, 0)$ and $(0, 4)$; the choice $3x + 2y = 12$ describes the line through $(4, 0)$ and $(0, 6)$, which slopes downhill instead of up.)',
    },
    {
      q: 'Write the equation of the line through $(0, 8)$ and $(5, 0)$ in slope-intercept form.',
      choices: [
        '$y = \\frac{8}{5}x + 8$',
        '$y = -\\frac{5}{8}x + 8$',
        '$y = -\\frac{8}{5}x + 8$',
        '$y = -\\frac{8}{5}x + 5$',
      ],
      answer: 2,
      solution:
        'The point $(0, 8)$ is on the $y$-axis, so $b = 8$ straight away. The slope from $(0, 8)$ to $(5, 0)$ is $\\frac{0 - 8}{5 - 0} = -\\frac{8}{5}$, so the line is $y = -\\frac{8}{5}x + 8$. Check it forward at $x = 5$: $-\\frac{8}{5}(5) + 8 = -8 + 8 = 0$, which is the second point. ✓ (The choice $y = \\frac{8}{5}x + 8$ loses the minus, sending the line uphill even though it falls from $8$ down to $0$; the choice $y = -\\frac{5}{8}x + 8$ divides run by rise — the RECIPROCAL trap; the choice $y = -\\frac{8}{5}x + 5$ puts the $x$-intercept in the $b$ seat, but $b$ must be the height where $x = 0$.)',
    },
    {
      q: 'A line has $x$-intercept $(3, 0)$ and $y$-intercept $(0, 5)$. Which equation describes it?',
      choices: ['$3x + 5y = 15$', '$5x - 3y = 15$', '$x + y = 8$', '$5x + 3y = 15$'],
      answer: 3,
      solution:
        'Test candidates against both intercepts, or build it directly: the slope is $\\frac{5 - 0}{0 - 3} = -\\frac{5}{3}$, so $y = -\\frac{5}{3}x + 5$; tripling gives $3y = -5x + 15$, that is $5x + 3y = 15$. Check it forward with both intercepts: $5(3) + 3(0) = 15$ ✓ and $5(0) + 3(5) = 15$ ✓. (The choice $3x + 5y = 15$ swaps the coefficients and so swaps the intercepts to $(5, 0)$ and $(0, 3)$; the choice $5x - 3y = 15$ has the wrong sign on the $y$-term, putting the $y$-intercept at $(0, -5)$; the choice $x + y = 8$ just adds the two intercept numbers, and its own intercepts are $(8, 0)$ and $(0, 8)$.)',
    },
  ],

  // c10 — the same line written in a different form (one reversed: find the constant that matches)
  [
    {
      q: 'Which equation describes the same line as $y = -\\frac{3}{4}x + 2$?',
      choices: ['$3x + 4y = 8$', '$3x - 4y = 8$', '$3x + 4y = 2$', '$4x + 3y = 8$'],
      answer: 0,
      solution:
        'Clear the fraction first: multiply every term by $4$ to get $4y = -3x + 8$, then move the $x$-term across: $3x + 4y = 8$. Check it forward on two points of the original line. At $x = 0$ it gives $y = 2$, and $3(0) + 4(2) = 8$ ✓. At $x = 4$ it gives $y = -3 + 2 = -1$, and $3(4) + 4(-1) = 12 - 4 = 8$ ✓. (The choice $3x - 4y = 8$ flips the sign of the $y$-term, which turns the slope positive; the choice $3x + 4y = 2$ multiplies the $x$-term by $4$ but forgets to scale the constant; the choice $4x + 3y = 8$ swaps the coefficients, giving slope $-\\frac{4}{3}$.)',
    },
    {
      q: 'The equations $y = \\frac{5}{2}x - 3$ and $10x - 4y = d$ describe exactly the same line. What is $d$?',
      choices: ['$-3$', '$6$', '$-12$', '$12$'],
      answer: 3,
      solution:
        'Rewrite the first equation without fractions: doubling gives $2y = 5x - 6$, so $5x - 2y = 6$. The target has $10x$, which is twice $5x$, so multiply the WHOLE equation by $2$: $10x - 4y = 12$. That makes $d = 12$. Check it forward on two points of the original line. At $x = 0$, $y = -3$, and $10(0) - 4(-3) = 12$ ✓. At $x = 2$, $y = 5 - 3 = 2$, and $10(2) - 4(2) = 20 - 8 = 12$ ✓. (The choice $-3$ copies the slope-intercept constant straight across; the choice $6$ stops at $5x - 2y = 6$ and forgets to double the constant along with everything else; the choice $-12$ has the right size but the wrong sign.)',
    },
    {
      q: 'Rewrite $3x - 5y = 20$ in slope-intercept form.',
      choices: [
        '$y = \\frac{5}{3}x - 4$',
        '$y = -\\frac{3}{5}x + 4$',
        '$y = \\frac{3}{5}x - 4$',
        '$y = \\frac{3}{5}x + 4$',
      ],
      answer: 2,
      solution:
        'Isolate $y$. Subtract $3x$: $-5y = -3x + 20$. Now divide EVERY term by $-5$, which flips the sign of each one: $y = \\frac{3}{5}x - 4$. Check it forward: at $x = 0$ the form gives $y = -4$, and $3(0) - 5(-4) = 20$ ✓; at $x = 5$ it gives $y = 3 - 4 = -1$, and $3(5) - 5(-1) = 15 + 5 = 20$ ✓. (The choice $y = \\frac{5}{3}x - 4$ flips the slope fraction upside down; the choice $y = -\\frac{3}{5}x + 4$ divides by $5$ instead of $-5$, so both signs come out wrong; the choice $y = \\frac{3}{5}x + 4$ divides the $x$-term by $-5$ but the constant by $+5$, treating the two terms differently.)',
    },
  ],

  // c11 — lengths on a coordinate grid, using a Pythagorean triple (one reversed, one a diagonal)
  [
    {
      q: 'A triangle has vertices $(1, -4)$, $(1, 5)$, and $(13, -4)$. What is its perimeter?',
      choices: ['$54$', '$21$', '$108$', '$36$'],
      answer: 3,
      solution:
        'Two of the sides run along grid lines, so measure them by subtracting. The vertical side from $(1, -4)$ to $(1, 5)$ is $5 - (-4) = 9$ long; the horizontal side from $(1, -4)$ to $(13, -4)$ is $13 - 1 = 12$ long. Those two meet at $(1, -4)$ in a right angle, so the third side is the hypotenuse: $\\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$. Perimeter $= 9 + 12 + 15 = 36$. Check it forward: $9$-$12$-$15$ is just the $3$-$4$-$5$ triple tripled, and $9^2 + 12^2 = 225 = 15^2$. ✓ (The choice $54$ is the AREA, $\\frac{1}{2}(9)(12)$; the choice $21$ adds only the two sides you can read off the grid and forgets the slanted one; the choice $108$ multiplies the two legs instead of adding all three sides.)',
    },
    {
      q: 'A right triangle has vertices $(0, 0)$, $(0, 5)$, and $(w, 0)$, where $w > 0$. Its perimeter is $30$. What is $w$?',
      choices: ['$12.5$', '$12$', '$13$', '$25$'],
      answer: 1,
      solution:
        'The right angle sits at the origin, so the legs are $5$ and $w$ and the hypotenuse is $\\sqrt{25 + w^2}$. The perimeter gives $5 + w + \\sqrt{25 + w^2} = 30$, so $\\sqrt{25 + w^2} = 25 - w$. Square both sides: $25 + w^2 = 625 - 50w + w^2$, the $w^2$ terms cancel, and $50w = 600$, so $w = 12$. Check it forward: the legs $5$ and $12$ give a hypotenuse of $\\sqrt{25 + 144} = \\sqrt{169} = 13$, and $5 + 12 + 13 = 30$. ✓ (The choice $25$ is $30 - 5$, forgetting that the hypotenuse also eats part of the perimeter; the choice $12.5$ splits the leftover $25$ evenly between the leg and the hypotenuse, but the hypotenuse is always the longer of the two; the choice $13$ is the hypotenuse rather than the leg the question asked for.)',
    },
    {
      q: 'A rectangle has vertices $(-2, -4)$, $(6, -4)$, $(6, 11)$, and $(-2, 11)$. How long is each of its diagonals?',
      choices: ['$17$', '$23$', '$46$', '$120$'],
      answer: 0,
      solution:
        'Read the side lengths off the grid: the width is $6 - (-2) = 8$ and the height is $11 - (-4) = 15$. A diagonal joins opposite corners and is the hypotenuse of a right triangle with those two sides as legs: $\\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$. Check it forward: $17^2 = 289$ and $64 + 225 = 289$ ✓, and $8$-$15$-$17$ is a genuine right-triangle triple. (The choice $23$ adds the two sides instead of using the Pythagorean theorem — and a straight-line diagonal must be SHORTER than going around two sides; the choice $46$ is the rectangle\'s perimeter; the choice $120$ is its area.)',
    },
  ],

  // c12 — the constant vertical gap between two parallel lines (one reversed: gap given, find the intercept)
  [
    {
      q: 'Two parallel lines are drawn: $y = -3x + 7$ and $y = -3x - 2$. At any chosen $x$-value, how much higher is the first line than the second?',
      choices: ['$-3$', '$5$', '$9$', '$-9$'],
      answer: 2,
      solution:
        'Because both lines have slope $-3$ they fall in lockstep, so the gap between them never changes. Subtract the heights at the same $x$: $(-3x + 7) - (-3x - 2) = 7 + 2 = 9$. The $x$-terms cancel, which is exactly why the answer does not depend on where you look. Check it forward at two places: at $x = 0$ the heights are $7$ and $-2$, a gap of $9$ ✓; at $x = 2$ they are $1$ and $-8$, again a gap of $9$ ✓. (The choice $-3$ reports the shared SLOPE instead of the gap; the choice $5$ computes $7 - 2$, forgetting that the second intercept is negative; the choice $-9$ subtracts in the wrong order, and a line cannot be a negative amount higher than another when it is genuinely above it.)',
    },
    {
      q: 'The line $y = \\frac{1}{2}x + c$ is parallel to $y = \\frac{1}{2}x - 4$ and lies $6$ units below it. What is $c$?',
      choices: ['$2$', '$-10$', '$-6$', '$-2$'],
      answer: 1,
      solution:
        'Parallel lines share a slope, and both already have slope $\\frac{1}{2}$, so only the intercept is in question. Sitting $6$ units BELOW means every height is $6$ smaller, so $c = -4 - 6 = -10$. Check it forward at $x = 0$: the given line is at $-4$ and the new line is at $-10$, a drop of $6$ ✓; at $x = 4$ they are at $-2$ and $-8$, again a drop of $6$ ✓. (The choice $2$ moves $6$ units UP instead of down; the choice $-6$ writes down the size of the gap as the intercept and ignores the given line\'s own intercept of $-4$; the choice $-2$ computes $4 - 6$, dropping the minus sign on the $4$.)',
    },
    {
      q: 'At $x = 6$, how far apart vertically are the lines $y = 5x - 4$ and $y = 5x + 11$?',
      choices: ['$15$', '$7$', '$67$', '$30$'],
      answer: 0,
      solution:
        'Plug $x = 6$ into each line: the first gives $5(6) - 4 = 26$ and the second gives $5(6) + 11 = 41$. The vertical distance is $41 - 26 = 15$. Check it forward somewhere else — the lines are parallel, both with slope $5$, so the gap should be the same everywhere: at $x = 0$ the heights are $-4$ and $11$, again a gap of $15$. ✓ (The choice $7$ computes $11 - 4$, forgetting that the first intercept is $-4$; the choice $67$ ADDS the two heights instead of subtracting; the choice $30$ is just $5 \\times 6$, the shared part that cancels out of the difference.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 8,
  challenge,
}
