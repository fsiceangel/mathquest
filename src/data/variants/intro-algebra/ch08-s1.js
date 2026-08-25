// Introduction to Algebra chapter 8 — variations for sections 8.1 and 8.2. All
// problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was re-derived from the question text alone and then checked
//    FORWARD: a quadrant answer is re-read off the two signs, a distance is
//    re-measured from the answer back to both endpoints, and every point claimed
//    to be on a line is substituted into that line inside the solution text.
//  - Every distractor is a named mistake. The recurring ones for these two
//    sections are: reading the pair backwards (up-down before sideways), losing
//    a minus sign when subtracting a negative, reporting a distance as negative
//    because the endpoints were subtracted in the wrong order, solving for the
//    OTHER axis (x-intercept when the y-intercept was asked for), putting the
//    right number on the wrong axis, and swapping which variable a one-variable
//    equation pins down. No two distractors in an item come from mistakes that
//    land on the same value.
//  - Figures are coordinate-exact: every plotted point and every line endpoint
//    is a lattice point that satisfies the numbers in its own question, and each
//    view window is at most 12 units wide so the grid draws one line per unit.
//    Figure labels are plain text.
//  - The three variations of a base problem always use three DIFFERENT answer
//    positions, so no position can dominate a quiz that mixes base and variant.

const s81 = [
  // p1 — name the quadrant from the pair of signs
  [
    {
      q: 'In which quadrant does the point $(-8, 3)$ lie?',
      choices: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
      answer: 1,
      solution:
        'Read the address in order. The $x$-coordinate is $-8$, so walk $8$ steps LEFT of the origin; the $y$-coordinate is $3$, so go $3$ steps UP. Left and up is the upper-left region, Quadrant II. Check it forward: Quadrant II is exactly the $(-, +)$ corner, and $(-8, 3)$ is $(-, +)$. ✓ (Quadrant I comes from dropping the minus sign and treating the point as $(8, 3)$; Quadrant III comes from assuming that one minus sign makes BOTH coordinates negative; Quadrant IV comes from reading the pair backwards as $(3, -8)$ — order matters in an ordered pair.)',
    },
    {
      q: 'Which of these points lies in Quadrant III?',
      choices: ['$(-6, 4)$', '$(6, -4)$', '$(-6, -4)$', '$(6, 4)$'],
      answer: 2,
      solution:
        'Quadrant III is the lower-left corner, so it needs $(-, -)$: a negative $x$ AND a negative $y$. Only $(-6, -4)$ has both. Check it forward: $x = -6$ is $6$ left of the origin and $y = -4$ is $4$ below it, which is lower-left. ✓ (The point $(-6, 4)$ is left but UP, so Quadrant II — the trap for a student who checks only the first sign; the point $(6, -4)$ is right and down, Quadrant IV — the trap for a student who checks only the second sign; the point $(6, 4)$ has no minus signs at all and sits in Quadrant I.)',
    },
    {
      q: 'In which quadrant does the point $(7, -1)$ lie?',
      choices: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
      answer: 3,
      solution:
        'The $x$-coordinate $7$ is positive, so the point is $7$ steps RIGHT; the $y$-coordinate $-1$ is negative, so it is $1$ step DOWN. Right and down is the lower-right region, Quadrant IV. Check it forward: Quadrant IV is the $(+, -)$ corner, and $(7, -1)$ is $(+, -)$. ✓ (Quadrant I comes from ignoring the minus sign on $-1$; Quadrant II comes from reading the pair backwards as $(-1, 7)$; Quadrant III comes from letting one minus sign drag both coordinates below zero. A small coordinate like $-1$ is still genuinely negative — being close to the axis does not put the point on it.)',
    },
  ],
  // p2 — points sitting ON an axis belong to no quadrant
  [
    {
      q: 'Where does the point $(-6, 0)$ lie?',
      choices: ['On the $x$-axis', 'On the $y$-axis', 'In Quadrant II', 'At the origin'],
      answer: 0,
      solution:
        'A $y$-coordinate of $0$ means no up-or-down movement at all, so the point stays at the height of the $x$-axis: it sits ON the $x$-axis, $6$ units left of the origin. Check it forward: starting at $(0, 0)$, walk $6$ left and $0$ up, and you never leave the horizontal axis. ✓ (Choosing the $y$-axis swaps the roles of the two coordinates — it is the $x$-coordinate that would have to be $0$ for that; Quadrant II treats the leftward move as enough to enter a quadrant, but a point on an axis belongs to NO quadrant; "at the origin" would need BOTH coordinates to be $0$, and here only one is.)',
    },
    {
      q: 'A point has $x$-coordinate $0$ and $y$-coordinate $-7$. Where is it?',
      choices: [
        'On the $x$-axis, $7$ units left of the origin',
        'In Quadrant IV',
        'At the origin',
        'On the $y$-axis, $7$ units below the origin',
      ],
      answer: 3,
      solution:
        'The point is $(0, -7)$. An $x$-coordinate of $0$ means no sideways movement, so the point stays on the vertical axis; the $y$-coordinate $-7$ carries it $7$ units DOWN. It lies on the $y$-axis, $7$ below the origin. Check it forward: from $(0, 0)$, move $0$ sideways and $7$ down. ✓ (The first choice swaps the axes and turns a downward move into a leftward one; Quadrant IV would need a positive $x$, and $0$ is not positive — points on an axis are in no quadrant; "at the origin" would require both coordinates to be $0$.)',
    },
    {
      q: 'In which quadrant does the point $(0, -4)$ lie?',
      choices: [
        'Quadrant III',
        'Quadrant IV',
        'No quadrant — it is on the $y$-axis',
        'No quadrant — it is on the $x$-axis',
      ],
      answer: 2,
      solution:
        'This is a trick worth spotting: the question assumes a quadrant, but $x = 0$ puts the point directly below the origin, on the $y$-axis, and axis points belong to no quadrant at all. Check it forward: the solutions of "$x = 0$" are $(0, 5)$, $(0, -4)$, $(0, 0)$, ... all on the vertical axis. ✓ (Quadrant III comes from seeing a minus sign and heading for the lower-left; Quadrant IV comes from treating $x = 0$ as positive and heading for the lower-right; "on the $x$-axis" swaps which axis a zero $x$-coordinate pins you to.)',
    },
  ],
  // p3 — read a plotted point off the grid
  [
    {
      q: 'What are the coordinates of point $P$ shown in the graph?',
      fig: {
        view: [-5, -5, 5, 5],
        grid: true,
        elems: [{ t: 'point', p: [4, -3], label: 'P', dx: -14, dy: 16 }],
      },
      choices: ['$(4, -3)$', '$(-3, 4)$', '$(4, 3)$', '$(-4, -3)$'],
      answer: 0,
      solution:
        'Read sideways first, then up-down. From the origin, $P$ is $4$ units RIGHT, so $x = 4$; then $3$ units DOWN, so $y = -3$. The coordinates are $(4, -3)$. Check it forward: walking $4$ right and $3$ down from $(0, 0)$ lands exactly on the plotted dot. ✓ (The pair $(-3, 4)$ reads up-down before sideways, swapping the two numbers; the pair $(4, 3)$ measures the drop correctly but forgets that DOWN is negative; the pair $(-4, -3)$ reads the sideways move as leftward.)',
    },
    {
      q: 'What are the coordinates of point $Q$ shown in the graph?',
      fig: {
        view: [-5, -5, 5, 5],
        grid: true,
        elems: [{ t: 'point', p: [-2, -4], label: 'Q', dx: 12, dy: 14 }],
      },
      choices: ['$(-4, -2)$', '$(2, 4)$', '$(-2, 4)$', '$(-2, -4)$'],
      answer: 3,
      solution:
        'From the origin, $Q$ is $2$ units LEFT ($x = -2$) and $4$ units DOWN ($y = -4$), so the coordinates are $(-2, -4)$. Check it forward: $2$ left and $4$ down from $(0, 0)$ lands on the dot, deep in the lower-left region. ✓ (The pair $(-4, -2)$ swaps the two numbers by reading the vertical move first; the pair $(2, 4)$ drops both minus signs and describes a point in the opposite corner; the pair $(-2, 4)$ keeps the leftward move but turns the drop into a climb.)',
    },
    {
      q: 'Point $M$ is plotted below. Starting at $M$, you move $3$ units right and $2$ units down. What are the coordinates of the point you land on?',
      fig: {
        view: [-7, -2, 4, 7],
        grid: true,
        elems: [{ t: 'point', p: [-4, 5], label: 'M', dx: 12, dy: -8 }],
      },
      choices: ['$(-7, 7)$', '$(-1, 3)$', '$(-1, 7)$', '$(-7, 3)$'],
      answer: 1,
      solution:
        'First read $M$ off the grid: $4$ left and $5$ up, so $M = (-4, 5)$. Moving RIGHT adds to $x$: $-4 + 3 = -1$. Moving DOWN subtracts from $y$: $5 - 2 = 3$. You land on $(-1, 3)$. Check it forward: from $(-1, 3)$, going $3$ left and $2$ up returns to $(-4, 5)$, which is $M$. ✓ (The point $(-7, 7)$ reverses both directions, subtracting for "right" and adding for "down"; the point $(-1, 7)$ gets the rightward step right but treats "down" as up; the point $(-7, 3)$ gets the drop right but moves left instead of right.)',
    },
  ],
  // p4 — distance along a horizontal line
  [
    {
      q: 'What is the distance between $(-3, -8)$ and $(9, -8)$?',
      choices: ['$6$', '$-12$', '$12$', '$13$'],
      answer: 2,
      solution:
        'Both points have $y$-coordinate $-8$, so the segment is horizontal and the distance is the gap between the $x$-coordinates: $9 - (-3) = 9 + 3 = 12$. Check it forward: from $-3$, walking $12$ units right lands on $9$. ✓ (The value $6$ comes from dropping the minus sign and computing $9 - 3$; the value $-12$ comes from subtracting in the wrong order, $-3 - 9$, and a distance is never negative; the value $13$ comes from counting the grid DOTS from one endpoint to the other, $-3, -2, \\ldots, 9$, instead of the steps between them — there is always one more dot than step.)',
    },
    {
      q: 'The points $(-4, 1)$ and $(k, 1)$ are $7$ units apart, and $k > -4$. What is $k$?',
      choices: ['$-11$', '$3$', '$7$', '$11$'],
      answer: 1,
      solution:
        'Both points sit at height $1$, so the segment is horizontal and $k$ is $7$ units away from $-4$ along the number line. Since $k > -4$, move to the RIGHT: $k = -4 + 7 = 3$. Check it forward: the distance from $(-4, 1)$ to $(3, 1)$ is $3 - (-4) = 7$. ✓ (The value $-11$ moves $7$ units the wrong way, to the left, which the condition $k > -4$ rules out; the value $7$ reports the distance itself and forgets that the walk starts at $-4$, not at $0$; the value $11$ drops the minus sign on $-4$ and computes $4 + 7$.)',
    },
    {
      q: 'A ladybug walks in a straight line from $(-11, 4)$ to $(-2, 4)$. How far does it walk?',
      choices: ['$9$', '$13$', '$-9$', '$10$'],
      answer: 0,
      solution:
        'The two points share the height $y = 4$, so the walk is horizontal and its length is $-2 - (-11) = -2 + 11 = 9$. Check it forward: from $-11$, walking $9$ units right lands on $-2$. ✓ (The value $13$ adds the two distances-from-zero, $11 + 2$ — that trick works only when the endpoints are on OPPOSITE sides of zero, and here both are on the left; the value $-9$ subtracts in the wrong order, $-11 - (-2)$, and a walk cannot have negative length; the value $10$ counts the grid dots $-11, -10, \\ldots, -2$ rather than the steps between them.)',
    },
  ],
  // p5 — distance along a vertical line
  [
    {
      q: 'What is the distance between $(5, -4)$ and $(5, 8)$?',
      choices: ['$4$', '$-12$', '$0$', '$12$'],
      answer: 3,
      solution:
        'The $x$-coordinates match, so the segment is vertical and the distance is the gap in $y$: $8 - (-4) = 8 + 4 = 12$. Check it forward: from height $-4$, climbing $12$ reaches height $8$. ✓ (The value $4$ comes from dropping the minus sign and computing $8 - 4$; the value $-12$ subtracts in the wrong order, $-4 - 8$, and reports a negative distance; the value $0$ comes from subtracting the wrong pair — the $x$-coordinates, $5 - 5$ — which for a vertical segment tells you only that it IS vertical.)',
    },
    {
      q: 'A window-washing platform rises straight up from $(3, -6)$ to $(3, 5)$ on a grid where one unit is one metre. How many metres does it rise?',
      choices: ['$1$', '$11$', '$-11$', '$6$'],
      answer: 1,
      solution:
        'Both positions share $x = 3$, so the platform moves straight up and the rise is $5 - (-6) = 5 + 6 = 11$ metres. Check it forward: it climbs $6$ metres to reach height $0$, then $5$ more to reach height $5$, and $6 + 5 = 11$. ✓ (The value $1$ drops the minus sign and computes $6 - 5$; the value $-11$ subtracts in the wrong order, $-6 - 5$, and a rise measured upward cannot be negative; the value $6$ stops at the $x$-axis and forgets the part of the climb above it.)',
    },
    {
      q: 'The points $(6, -3)$ and $(6, t)$ are $9$ units apart, and $t$ is negative. What is $t$?',
      choices: ['$6$', '$-9$', '$-12$', '$12$'],
      answer: 2,
      solution:
        'The $x$-coordinates match, so the segment is vertical and $t$ is $9$ units from $-3$. Going UP gives $-3 + 9 = 6$, which is positive and so is ruled out; going DOWN gives $t = -3 - 9 = -12$, which is negative as required. Check it forward: the distance from $(6, -3)$ to $(6, -12)$ is $-3 - (-12) = 9$. ✓ (The value $6$ is the upward answer, correct in size but rejected by the condition that $t$ is negative; the value $-9$ reports the distance with a minus sign glued on and forgets the start at $-3$; the value $12$ has the right size but the wrong sign, placing the point above the axis.)',
    },
  ],
  // p6 — midpoint of a horizontal or vertical segment
  [
    {
      q: 'What is the midpoint of the segment from $(-9, 4)$ to $(3, 4)$?',
      choices: ['$(-3, 4)$', '$(-6, 4)$', '$(-3, 2)$', '$(4, -3)$'],
      answer: 0,
      solution:
        'The segment is horizontal, so the midpoint keeps $y = 4$ and averages the $x$-coordinates: $\\frac{-9 + 3}{2} = \\frac{-6}{2} = -3$. The midpoint is $(-3, 4)$. Check it forward: it is $-3 - (-9) = 6$ units from the left endpoint and $3 - (-3) = 6$ from the right one — equal, as a midpoint must be. ✓ (The point $(-6, 4)$ SUBTRACTS the coordinates, $\\frac{-9 - 3}{2}$, instead of averaging them; the point $(-3, 2)$ halves the $y$-coordinate too, but $y$ never changes along a horizontal segment; the point $(4, -3)$ has the right two numbers written in the wrong order.)',
    },
    {
      q: 'What is the midpoint of the segment from $(-5, -8)$ to $(-5, 2)$?',
      choices: ['$(-5, -5)$', '$(-5, 5)$', '$(-5, -3)$', '$(-3, -5)$'],
      answer: 2,
      solution:
        'The $x$-coordinates match, so the segment is vertical: keep $x = -5$ and average the $y$-coordinates, $\\frac{-8 + 2}{2} = \\frac{-6}{2} = -3$. The midpoint is $(-5, -3)$. Check it forward: it is $-3 - (-8) = 5$ above the bottom endpoint and $2 - (-3) = 5$ below the top one. ✓ (The point $(-5, -5)$ subtracts instead of averaging, $\\frac{-8 - 2}{2}$; the point $(-5, 5)$ drops the minus sign before averaging, $\\frac{8 + 2}{2}$, and lands above both endpoints, which no midpoint can do; the point $(-3, -5)$ writes the two numbers in the wrong order.)',
    },
    {
      q: 'The midpoint of a horizontal segment is $(1, 7)$, and one endpoint is $(-4, 7)$. What is the other endpoint?',
      choices: ['$(-9, 7)$', '$(-3, 7)$', '$(-1.5, 7)$', '$(6, 7)$'],
      answer: 3,
      solution:
        'This runs the midpoint idea backwards. The known endpoint is $1 - (-4) = 5$ units to the LEFT of the midpoint, so the other endpoint must be $5$ units to the RIGHT of it: $1 + 5 = 6$, giving $(6, 7)$. Check it forward: the midpoint of $(-4, 7)$ and $(6, 7)$ is $\\left(\\frac{-4 + 6}{2}, 7\\right) = (1, 7)$. ✓ (The point $(-9, 7)$ steps $5$ further out from the given endpoint instead of stepping past the midpoint; the point $(-3, 7)$ ADDS the two known $x$-values, $1 + (-4)$, instead of doubling the midpoint and subtracting; the point $(-1.5, 7)$ averages the midpoint with the endpoint, which finds the middle of only half the segment.)',
    },
  ],
  // p7 — signs of a rearranged pair decide the quadrant
  [
    {
      q: 'The point $(p, q)$ lies in Quadrant IV. In which quadrant does $(q, p)$ lie?',
      choices: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
      answer: 1,
      solution:
        'Quadrant IV is the $(+, -)$ corner, so $p$ is positive and $q$ is negative. Now $(q, p)$ has a NEGATIVE $x$-coordinate and a POSITIVE $y$-coordinate — left and up, which is Quadrant II. Check it forward with a concrete pair: $(5, -2)$ is in Quadrant IV, and $(-2, 5)$ is indeed in Quadrant II. ✓ (Quadrant IV assumes swapping the coordinates changes nothing, but the two slots have different jobs; Quadrant III keeps the sign of $q$ correct yet also drags $p$ below zero; Quadrant I ignores both signs.)',
    },
    {
      q: 'The point $(u, v)$ lies in Quadrant III. In which quadrant does $(-u, v)$ lie?',
      choices: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
      answer: 3,
      solution:
        'Quadrant III is the $(-, -)$ corner, so $u$ is negative and $v$ is negative. The opposite of a negative number is positive, so $-u$ is POSITIVE while $v$ stays negative: right and down, which is Quadrant IV. Check it forward with a concrete pair: $(-3, -6)$ is in Quadrant III, and $(3, -6)$ is in Quadrant IV. ✓ (Quadrant III comes from seeing the written minus sign in $-u$ and assuming the value is negative, when negating a negative makes it positive; Quadrant II flips $v$ instead of $u$; Quadrant I flips both.)',
    },
    {
      q: 'The point $(m, n)$ lies in Quadrant II. In which quadrant does $(-m, n)$ lie?',
      choices: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
      answer: 0,
      solution:
        'Quadrant II is the $(-, +)$ corner, so $m$ is negative and $n$ is positive. Then $-m$ is POSITIVE and $n$ is still positive: right and up, which is Quadrant I. Check it forward with a concrete pair: $(-7, 2)$ is in Quadrant II, and $(7, 2)$ is in Quadrant I. ✓ (Quadrant II assumes the change does nothing; Quadrant III reads the written minus in $-m$ as making the value negative, but $m$ was already negative and $-m$ undoes that; Quadrant IV flips the sign of $n$ rather than of $m$.)',
    },
  ],
  // p8 — complete a rectangle whose sides are horizontal and vertical
  [
    {
      q: 'Three corners of a rectangle are shown at $A(-5, -2)$, $B(1, -2)$, and $C(1, 4)$. What are the coordinates of the fourth corner?',
      fig: {
        view: [-7, -4, 3, 6],
        grid: true,
        elems: [
          { t: 'point', p: [-5, -2], label: 'A', dx: -12, dy: 14 },
          { t: 'point', p: [1, -2], label: 'B', dx: 12, dy: 14 },
          { t: 'point', p: [1, 4], label: 'C', dx: 12, dy: -8 },
          { t: 'seg', a: [-5, -2], b: [1, -2], dash: true },
          { t: 'seg', a: [1, -2], b: [1, 4], dash: true },
        ],
      },
      choices: ['$(-5, -4)$', '$(4, -5)$', '$(-5, 4)$', '$(-2, 4)$'],
      answer: 2,
      solution:
        'The missing corner sits directly above $A$, so it shares $A$\'s $x$-coordinate, $x = -5$; and directly left of $C$, so it shares $C$\'s $y$-coordinate, $y = 4$. That is $(-5, 4)$. Check it forward: the four corners $(-5, -2)$, $(1, -2)$, $(1, 4)$, $(-5, 4)$ give two horizontal sides of length $6$ and two vertical sides of length $6$ — a closed rectangle (in fact a square). ✓ (The point $(-5, -4)$ keeps $C$\'s $4$ but flips its sign, which drops the corner below the bottom side; the point $(4, -5)$ writes the correct two numbers in the wrong order; the point $(-2, 4)$ borrows the wrong coordinate from $A$, taking its $y$-value $-2$ to be the new $x$.)',
    },
    {
      q: 'A rectangle has horizontal and vertical sides. Two OPPOSITE corners are $(-3, 1)$ and $(5, 7)$. What are the other two corners?',
      choices: [
        '$(5, 1)$ and $(-3, 7)$',
        '$(-3, 5)$ and $(1, 7)$',
        '$(1, 5)$ and $(7, -3)$',
        '$(5, 7)$ and $(-3, 1)$',
      ],
      answer: 0,
      solution:
        'A rectangle with horizontal and vertical sides uses only two different $x$-values, $-3$ and $5$, and two different $y$-values, $1$ and $7$. The given corners use the pairings $(-3, 1)$ and $(5, 7)$, so the remaining two corners take the other pairings: $(5, 1)$ and $(-3, 7)$. Check it forward: the four corners $(-3, 1)$, $(5, 1)$, $(5, 7)$, $(-3, 7)$ form a rectangle $8$ wide and $6$ tall, and the two given points are diagonally opposite in it. ✓ (The choice $(-3, 5)$ and $(1, 7)$ pairs the two $x$-values together and the two $y$-values together, which scrambles the coordinates; the choice $(1, 5)$ and $(7, -3)$ is the correct answer with every pair written backwards; the last choice simply repeats the two corners we were already given.)',
    },
    {
      q: 'Three corners of a rectangle are shown at $D(-3, 5)$, $E(-3, -1)$, and $F(6, -1)$. What are the coordinates of the fourth corner?',
      fig: {
        view: [-5, -3, 7, 7],
        grid: true,
        elems: [
          { t: 'point', p: [-3, 5], label: 'D', dx: -12, dy: -8 },
          { t: 'point', p: [-3, -1], label: 'E', dx: -12, dy: 14 },
          { t: 'point', p: [6, -1], label: 'F', dx: 12, dy: 14 },
          { t: 'seg', a: [-3, 5], b: [-3, -1], dash: true },
          { t: 'seg', a: [-3, -1], b: [6, -1], dash: true },
        ],
      },
      choices: ['$(5, 6)$', '$(6, 5)$', '$(6, -5)$', '$(-6, 5)$'],
      answer: 1,
      solution:
        'The missing corner must sit directly above $F$, sharing $x = 6$, and directly right of $D$, sharing $y = 5$. That is $(6, 5)$. Check it forward: the corners $(-3, 5)$, $(-3, -1)$, $(6, -1)$, $(6, 5)$ give two horizontal sides of length $9$ and two vertical sides of length $6$, so the figure closes up. ✓ (The point $(5, 6)$ writes the two numbers in the wrong order; the point $(6, -5)$ keeps $D$\'s $5$ but flips its sign, landing below the bottom side; the point $(-6, 5)$ flips the sign of $F$\'s $x$-coordinate instead of copying it.)',
    },
  ],
  // p9 — split a segment in a given ratio
  [
    {
      q: 'Points $A(-8, 5)$ and $B(7, 5)$ are the endpoints of a segment. Point $C$ lies on the segment, twice as far from $B$ as from $A$. What are the coordinates of $C$?',
      choices: ['$(2, 5)$', '$(-0.5, 5)$', '$(-3, 5)$', '$(5, -3)$'],
      answer: 2,
      solution:
        'The segment is horizontal with length $7 - (-8) = 15$, and it keeps $y = 5$ throughout. "Twice as far from $B$ as from $A$" means $AC : CB = 1 : 2$, so the $15$ splits into $5$ and $10$. Starting at $x = -8$ and moving $5$ right gives $C = (-3, 5)$. Check it forward: $C$ is $-3 - (-8) = 5$ from $A$ and $7 - (-3) = 10$ from $B$, and $10 = 2 \\times 5$. ✓ (The point $(2, 5)$ applies the ratio backwards, putting the long piece next to $A$; the point $(-0.5, 5)$ is the midpoint, from halving the segment instead of cutting it into three equal parts; the point $(5, -3)$ has the right numbers in the wrong order.)',
    },
    {
      q: 'Points $P(4, -5)$ and $Q(4, 11)$ are the endpoints of a segment. Point $M$ lies on the segment, three times as far from $P$ as from $Q$. What are the coordinates of $M$?',
      choices: ['$(4, -1)$', '$(4, 3)$', '$(7, 4)$', '$(4, 7)$'],
      answer: 3,
      solution:
        'The segment is vertical with length $11 - (-5) = 16$, and $x = 4$ all the way along. "Three times as far from $P$ as from $Q$" means $PM : MQ = 3 : 1$, so the $16$ splits into $12$ and $4$. Starting at $y = -5$ and climbing $12$ gives $M = (4, 7)$. Check it forward: $M$ is $7 - (-5) = 12$ from $P$ and $11 - 7 = 4$ from $Q$, and $12 = 3 \\times 4$. ✓ (The point $(4, -1)$ uses the ratio backwards, putting the short piece next to $P$; the point $(4, 3)$ is the midpoint, from splitting the segment in half instead of into four equal parts; the point $(7, 4)$ has the two numbers in the wrong order.)',
    },
    {
      q: 'Point $C$ at $(1, -6)$ lies on the horizontal segment joining $A(-11, -6)$ to $B$, and $C$ is exactly $\\frac{3}{4}$ of the way from $A$ to $B$. What are the coordinates of $B$?',
      choices: ['$(37, -6)$', '$(5, -6)$', '$(10, -6)$', '$(13, -6)$'],
      answer: 1,
      solution:
        'First measure the part we can see: $AC = 1 - (-11) = 12$, and that is $\\frac{3}{4}$ of the whole segment. So one quarter is $12 \\div 3 = 4$, the whole segment is $4 \\times 4 = 16$, and $B$ sits $16$ right of $A$: $B = (-11 + 16, -6) = (5, -6)$. Check it forward: $AC = 12$, $CB = 5 - 1 = 4$, the total is $16$, and $\\frac{3}{4} \\times 16 = 12 = AC$. ✓ (The point $(37, -6)$ treats $AC$ as $\\frac{1}{4}$ of the segment instead of $\\frac{3}{4}$, stretching it to $48$; the point $(10, -6)$ adds $\\frac{3}{4}$ of $12$ onto $C$ rather than working out the whole length; the point $(13, -6)$ treats $C$ as the MIDpoint and doubles $AC$.)',
    },
  ],
  // p10 — perimeter and area from rectangle vertices
  [
    {
      q: 'A rectangle has vertices $(-5, 2)$, $(4, 2)$, $(4, -3)$, and $(-5, -3)$. What is its perimeter?',
      choices: ['$45$', '$14$', '$18$', '$28$'],
      answer: 3,
      solution:
        'The width is the horizontal gap, $4 - (-5) = 9$; the height is the vertical gap, $2 - (-3) = 5$. Perimeter is the whole way around: $2(9 + 5) = 2 \\times 14 = 28$. Check it forward: walking the four sides gives $9 + 5 + 9 + 5 = 28$. ✓ (The value $45$ is $9 \\times 5$, the AREA rather than the perimeter; the value $14$ adds the width and height but forgets that each side appears twice; the value $18$ doubles only the width and leaves the two vertical sides out.)',
    },
    {
      q: 'A rectangle has vertices $(-2, -4)$, $(6, -4)$, $(6, h)$, and $(-2, h)$, where $h > -4$, and its perimeter is $30$. What is $h$?',
      choices: ['$7$', '$10$', '$3$', '$-11$'],
      answer: 2,
      solution:
        'The width is $6 - (-2) = 8$. From $2(\\text{width} + \\text{height}) = 30$ we get $\\text{width} + \\text{height} = 15$, so the height is $15 - 8 = 7$. The top side is $7$ ABOVE the bottom side at $y = -4$, so $h = -4 + 7 = 3$. Check it forward: the rectangle with corners at heights $-4$ and $3$ is $8$ wide and $7$ tall, and $2(8 + 7) = 30$. ✓ (The value $7$ reports the height and forgets that the bottom side starts at $-4$, not at $0$; the value $10$ subtracts both widths from $30$ but never halves, using a height of $14$; the value $-11$ measures the height downward, which the condition $h > -4$ rules out.)',
    },
    {
      q: 'A rectangle has vertices $(-4, -1)$, $(3, -1)$, $(3, 5)$, and $(-4, 5)$. What is its area?',
      choices: ['$42$', '$26$', '$13$', '$84$'],
      answer: 0,
      solution:
        'The width is $3 - (-4) = 7$ and the height is $5 - (-1) = 6$, so the area is $7 \\times 6 = 42$ square units. Check it forward: the rectangle covers $7$ columns of $6$ unit squares each, and $7 \\times 6 = 42$. ✓ (The value $26$ is $2(7 + 6)$, the PERIMETER rather than the area; the value $13$ adds the width and height instead of multiplying them; the value $84$ doubles the area, mixing in the "multiply by $2$" step that belongs to a perimeter.)',
    },
  ],
]

const s82 = [
  // p1 — test candidate points in x + y = c
  [
    {
      q: 'Which point is on the line $x + y = -3$?',
      choices: ['$(-4, 7)$', '$(4, -7)$', '$(4, 7)$', '$(-3, -3)$'],
      answer: 1,
      solution:
        'Substitute each pair and see which one makes the left side equal $-3$. For $(4, -7)$: $4 + (-7) = -3$. ✓ That is the one. (The pair $(-4, 7)$ has both signs flipped and gives $-4 + 7 = 3$, the opposite of what we want; the pair $(4, 7)$ drops the minus sign on the $y$-coordinate and gives $11$; the pair $(-3, -3)$ assumes both coordinates must equal the constant on the right, and gives $-6$.)',
    },
    {
      q: 'Which point is a solution of $x - y = 9$?',
      choices: ['$(4, -5)$', '$(-4, 5)$', '$(4, 5)$', '$(9, 4)$'],
      answer: 0,
      solution:
        'Substitute and watch the double negative. For $(4, -5)$: $4 - (-5) = 4 + 5 = 9$. ✓ (The pair $(-4, 5)$ flips both signs and gives $-4 - 5 = -9$ — the right size but the wrong sign, which does not count; the pair $(4, 5)$ loses the minus on the $y$-coordinate and gives $4 - 5 = -1$; the pair $(9, 4)$ copies the constant $9$ into the $x$-slot and hopes for the best, giving $9 - 4 = 5$.)',
    },
    {
      q: 'Which of these points is NOT a solution of $2x + y = 10$?',
      choices: ['$(3, 4)$', '$(0, 10)$', '$(5, 0)$', '$(4, 3)$'],
      answer: 3,
      solution:
        'Substitute all four. $(3, 4)$: $6 + 4 = 10$ ✓ on the line. $(0, 10)$: $0 + 10 = 10$ ✓ on the line. $(5, 0)$: $10 + 0 = 10$ ✓ on the line. $(4, 3)$: $8 + 3 = 11 \\ne 10$, so $(4, 3)$ is the odd one out. The mistake this catches is assuming the order inside a pair does not matter: $(3, 4)$ works but its reverse $(4, 3)$ does not, because the $x$-slot is doubled and the $y$-slot is not. Each of the other three checks out exactly, so none of them can be the answer.',
    },
  ],
  // p2 — test candidate points when both variables carry coefficients
  [
    {
      q: 'Which point is a solution of $3x - 2y = 6$?',
      choices: ['$(4, 3)$', '$(2, 3)$', '$(3, 4)$', '$(4, -3)$'],
      answer: 0,
      solution:
        'Substitute into the left side and look for $6$. For $(4, 3)$: $3(4) - 2(3) = 12 - 6 = 6$. ✓ (The pair $(2, 3)$ gives $6 - 6 = 0$; the pair $(3, 4)$ is the correct pair written backwards and gives $9 - 8 = 1$, a reminder that the coefficients $3$ and $2$ are attached to particular slots; the pair $(4, -3)$ mishandles the subtraction sign, since $-2(-3) = +6$ makes the left side $18$, not $6$.)',
    },
    {
      q: 'Which point is a solution of $5x + 3y = 1$?',
      choices: ['$(2, 3)$', '$(2, -3)$', '$(-2, 3)$', '$(3, 2)$'],
      answer: 1,
      solution:
        'Substitute into the left side and look for $1$. For $(2, -3)$: $5(2) + 3(-3) = 10 - 9 = 1$. ✓ (The pair $(2, 3)$ drops the minus sign and gives $10 + 9 = 19$; the pair $(-2, 3)$ attaches the minus to the wrong coordinate and gives $-10 + 9 = -1$, the right size but the wrong sign; the pair $(3, 2)$ swaps the two coordinates, sending the bigger coefficient to the wrong slot, and gives $15 + 6 = 21$.)',
    },
    {
      q: 'The point $(-4, 3)$ is a solution of which equation?',
      choices: ['$2x + 3y = -1$', '$2x - 3y = 1$', '$2x + 3y = 1$', '$3x + 2y = 1$'],
      answer: 2,
      solution:
        'This runs the check in the other direction: hold the point fixed and test the equations. For $2x + 3y = 1$ the left side is $2(-4) + 3(3) = -8 + 9 = 1$, which matches the right side exactly. ✓ (The equation $2x + 3y = -1$ has the correct left side but the wrong constant — it is what a student gets by computing $8 - 9$ instead of $-8 + 9$; the equation $2x - 3y = 1$ subtracts, giving $-8 - 9 = -17$; the equation $3x + 2y = 1$ swaps the two coefficients, giving $-12 + 6 = -6$.)',
    },
  ],
  // p3 — the graph of a one-variable equation y = c
  [
    {
      q: 'What does the graph of $y = -5$ look like?',
      choices: [
        'A vertical line through $(-5, 0)$',
        'A horizontal line through $(0, -5)$',
        'A single point at $(0, -5)$',
        'A line through the origin that drops $5$ for each step right',
      ],
      answer: 1,
      solution:
        'The equation says nothing about $x$, so EVERY point at height $-5$ qualifies: $(0, -5)$, $(3, -5)$, $(-7, -5)$, and so on. Those points sweep out a horizontal line $5$ units below the $x$-axis. Check it forward: pick any $x$ you like, say $x = 12$; the point $(12, -5)$ satisfies $y = -5$, so the graph must stretch out to the right forever. ✓ (The vertical line through $(-5, 0)$ swaps the roles of the two variables — that is the graph of $x = -5$; the single point forgets that $x$ is free to be anything; the last choice reads the equation as $y = -5x$, turning the constant into a slope.)',
    },
    {
      q: 'Which equation has a graph that is a horizontal line $4$ units BELOW the $x$-axis?',
      choices: ['$x = -4$', '$x = 4$', '$y = -4$', '$y = 4$'],
      answer: 2,
      solution:
        'A horizontal line holds the HEIGHT fixed, and height is $y$; being below the $x$-axis makes that height negative. So the equation is $y = -4$. Check it forward: the solutions of $y = -4$ include $(0, -4)$, $(6, -4)$, and $(-6, -4)$ — all at depth $4$, forming a horizontal line. ✓ (The equation $x = -4$ has the right number but the wrong variable, and pins $x$ instead, giving a VERTICAL line; $x = 4$ misses on both counts; $y = 4$ picks the right variable but places the line $4$ units ABOVE the axis.)',
    },
    {
      q: 'The graphs of $y = 7$ and $x = 7$ are drawn on the same grid. What is true of them?',
      choices: [
        'They are the same line',
        'They are parallel and never meet',
        'They meet at exactly one point, $(7, 0)$',
        'They meet at exactly one point, $(7, 7)$',
      ],
      answer: 3,
      solution:
        'The graph of $y = 7$ is horizontal (every point at height $7$) and the graph of $x = 7$ is vertical (every point $7$ to the right). A horizontal line and a vertical line cross exactly once, and the crossing point must satisfy both equations at the same time: $x = 7$ and $y = 7$, so it is $(7, 7)$. Check it forward: $(7, 7)$ has $y$-coordinate $7$ ✓ and $x$-coordinate $7$ ✓, so it lies on both. (Calling them the same line treats the two equations as saying the same thing, but one fixes height and the other fixes sideways position; calling them parallel assumes both one-variable equations point the same way; the point $(7, 0)$ lies on $x = 7$ but has height $0$, so it fails $y = 7$.)',
    },
  ],
  // p4 — the graph of a one-variable equation x = c
  [
    {
      q: 'What does the graph of $x = 6$ look like?',
      choices: [
        'A horizontal line through $(6, 0)$',
        'A horizontal line through $(0, 6)$',
        'A vertical line through $(6, 0)$',
        'A vertical line through $(0, 6)$',
      ],
      answer: 2,
      solution:
        'The equation fixes $x$ at $6$ and lets $y$ roam free, so the solutions are $(6, 0)$, $(6, 4)$, $(6, -9)$, ... — every point $6$ units right of the $y$-axis. Stacked up, they form a VERTICAL line, and it crosses the $x$-axis at $(6, 0)$. Check it forward: $(6, -9)$ has $x$-coordinate $6$, so it is on the graph, and it sits far below $(6, 0)$ — the graph runs up and down, not side to side. ✓ (Both "horizontal" choices swap which variable is being held still; the choice through $(0, 6)$ also puts the $6$ in the wrong slot, describing a point on the $y$-axis instead.)',
    },
    {
      q: 'A line contains the points $(-3, 1)$, $(-3, 8)$, and $(-3, -4)$. What is its equation?',
      choices: ['$x = -3$', '$y = -3$', '$x = 1$', '$y = x - 3$'],
      answer: 0,
      solution:
        'What do the three points share? Their $x$-coordinates are all $-3$, while their $y$-coordinates are all different. The one rule that every listed point obeys is $x = -3$, a vertical line. Check it forward: each of $(-3, 1)$, $(-3, 8)$, $(-3, -4)$ has $x$-coordinate $-3$ ✓, and any other point with $x = -3$, such as $(-3, 100)$, belongs too. (The equation $y = -3$ takes the shared number but attaches it to the wrong variable, and only $(-3, -4)$ comes anywhere near it; $x = 1$ grabs the first $y$-value by mistake; $y = x - 3$ assumes a line always needs both variables, but it fails at $(-3, 1)$, since $-3 - 3 = -6 \\ne 1$.)',
    },
    {
      q: 'Which point does NOT lie on the graph of $x = -7$?',
      choices: ['$(-7, 0)$', '$(-7, -7)$', '$(-7, 12)$', '$(0, -7)$'],
      answer: 3,
      solution:
        'Membership in $x = -7$ depends on one thing only: the $x$-coordinate must be $-7$. The first three points all have $x = -7$ ✓, no matter what their heights are. The point $(0, -7)$ has $x$-coordinate $0$, so it fails — its $-7$ is sitting in the $y$-slot, which would put it on the HORIZONTAL line $y = -7$ instead. Check it forward: $(0, -7)$ is on the $y$-axis, and the vertical line $x = -7$ never touches the $y$-axis, so the two cannot share a point.',
    },
  ],
  // p5 — intercepts of ax + by = c, and running that backwards
  [
    {
      q: 'Where does the line $5x - 4y = 20$ cross the $x$-axis?',
      choices: ['$(0, -5)$', '$(4, 0)$', '$(0, 4)$', '$(-5, 0)$'],
      answer: 1,
      solution:
        'Every point on the $x$-axis has $y = 0$. Substituting gives $5x - 0 = 20$, so $x = 4$ and the crossing point is $(4, 0)$. Check it forward: $5(4) - 4(0) = 20$. ✓ (The point $(0, -5)$ answers the OTHER question — setting $x = 0$ gives $-4y = 20$, so $(0, -5)$ is where the line crosses the $y$-axis; the point $(0, 4)$ has the right number in the wrong slot, which puts it on the wrong axis entirely; the point $(-5, 0)$ takes the $y$-intercept\'s number and parks it on the $x$-axis.)',
    },
    {
      q: 'Where does the line $2x + 7y = -14$ cross the $y$-axis?',
      choices: ['$(-7, 0)$', '$(0, 2)$', '$(-2, 0)$', '$(0, -2)$'],
      answer: 3,
      solution:
        'Every point on the $y$-axis has $x = 0$. Substituting gives $7y = -14$, so $y = -2$ and the crossing point is $(0, -2)$. Check it forward: $2(0) + 7(-2) = -14$. ✓ (The point $(-7, 0)$ solves for the wrong axis — setting $y = 0$ gives $2x = -14$, the $x$-intercept; the point $(0, 2)$ loses the minus sign when dividing $-14$ by $7$; the point $(-2, 0)$ has the right number sitting in the $x$-slot, which places it on the wrong axis.)',
    },
    {
      q: 'The line $ax - 3y = 18$ crosses the $x$-axis at $(-6, 0)$. What is $a$?',
      choices: ['$-3$', '$3$', '$-108$', '$6$'],
      answer: 0,
      solution:
        'The point $(-6, 0)$ must satisfy the equation, so substitute it: $a(-6) - 3(0) = 18$, which is $-6a = 18$, giving $a = -3$. Check it forward: the line $-3x - 3y = 18$ at $(-6, 0)$ gives $18 - 0 = 18$. ✓ (The value $3$ loses the minus sign when dividing $18$ by $-6$; the value $-108$ multiplies $18$ by $-6$ instead of dividing; the value $6$ divides $18$ by the coefficient $3$ that already belongs to $y$, using the wrong number entirely.)',
    },
  ],
  // p6 — one coordinate is given, solve for the other
  [
    {
      q: 'The point $(-5, y)$ is on the line $3x + y = 4$. What is $y$?',
      choices: ['$-11$', '$-19$', '$19$', '$11$'],
      answer: 2,
      solution:
        'Substitute $x = -5$: $3(-5) + y = 4$, so $-15 + y = 4$. Add $15$ to both sides: $y = 19$. Check it forward: $3(-5) + 19 = -15 + 19 = 4$. ✓ (The value $-11$ subtracts the $15$ instead of adding it back, computing $4 - 15$; the value $-19$ has the right size but the wrong sign, from moving the $-15$ across without changing it; the value $11$ subtracts in the wrong order, computing $15 - 4$.)',
    },
    {
      q: 'The point $(x, -3)$ is on the line $4x - 5y = 7$. What is $x$?',
      choices: ['$-2$', '$2$', '$5.5$', '$-8$'],
      answer: 0,
      solution:
        'Substitute $y = -3$: $4x - 5(-3) = 7$. Since $-5 \\times -3 = +15$, this is $4x + 15 = 7$, so $4x = -8$ and $x = -2$. Check it forward: $4(-2) - 5(-3) = -8 + 15 = 7$. ✓ (The value $2$ loses the minus sign when dividing $-8$ by $4$; the value $5.5$ comes from the sign slip $-5(-3) = -15$, which gives $4x = 22$; the value $-8$ stops one step early and reports $4x$ instead of $x$.)',
    },
    {
      q: 'The point $(x, 4)$ is on the line $x + 2y = 3$. What is $x$?',
      choices: ['$5$', '$-5$', '$-1$', '$11$'],
      answer: 1,
      solution:
        'Substitute $y = 4$: $x + 2(4) = 3$, so $x + 8 = 3$ and $x = 3 - 8 = -5$. Check it forward: $-5 + 2(4) = -5 + 8 = 3$. ✓ (The value $5$ has the right size but the wrong sign, from computing $8 - 3$; the value $-1$ forgets the coefficient $2$ and uses $x + 4 = 3$; the value $11$ adds the $8$ instead of subtracting it, computing $3 + 8$.)',
    },
  ],
  // p7 — read the equation of a graphed line off two marked points
  [
    {
      q: 'The graph below shows a straight line through two marked points. Which equation describes it?',
      fig: {
        view: [-3, -3, 5, 4],
        grid: true,
        elems: [
          { t: 'line', a: [0, 2], b: [3, -1] },
          { t: 'point', p: [0, 2], label: '(0, 2)', dx: -22, dy: -8 },
          { t: 'point', p: [3, -1], label: '(3, -1)', dx: 16, dy: 14 },
        ],
      },
      choices: ['$y = x + 2$', '$y = -x - 2$', '$y = -2x + 2$', '$y = -x + 2$'],
      answer: 3,
      solution:
        'Two points pin down a line, so test the two marked ones. For $y = -x + 2$: at $x = 0$, $y = 0 + 2 = 2$ ✓, and at $x = 3$, $y = -3 + 2 = -1$ ✓. Both marked points fit, so this is the line. (The equation $y = x + 2$ passes through $(0, 2)$ but climbs instead of falling, giving $y = 5$ at $x = 3$ — the picture clearly drops; $y = -x - 2$ falls correctly but starts at $(0, -2)$, on the wrong side of the origin; $y = -2x + 2$ falls twice as steeply and gives $y = -4$ at $x = 3$.)',
    },
    {
      q: 'Which equation has the line below as its graph?',
      fig: {
        view: [-4, -2, 4, 5],
        grid: true,
        elems: [
          { t: 'line', a: [-2, 1], b: [2, 3] },
          { t: 'point', p: [-2, 1], label: '(-2, 1)', dx: -4, dy: 16 },
          { t: 'point', p: [2, 3], label: '(2, 3)', dx: 14, dy: -8 },
        ],
      },
      choices: ['$y = 2x + 2$', '$y = -\\frac{1}{2}x + 2$', '$y = \\frac{1}{2}x + 2$', '$y = \\frac{1}{2}x - 2$'],
      answer: 2,
      solution:
        'Test both marked points. For $y = \\frac{1}{2}x + 2$: at $x = -2$, $y = -1 + 2 = 1$ ✓, and at $x = 2$, $y = 1 + 2 = 3$ ✓. Both fit, so this is the line. It matches the picture too — the line gains $2$ in height over a run of $4$, a gentle climb of $\\frac{1}{2}$ per step. (The equation $y = 2x + 2$ swaps the rise and the run, using $\\frac{4}{2}$ instead of $\\frac{2}{4}$, and gives $y = -2$ at $x = -2$; $y = -\\frac{1}{2}x + 2$ has the size right but makes the line fall; $y = \\frac{1}{2}x - 2$ has the correct steepness but crosses the $y$-axis $2$ below the origin instead of $2$ above it.)',
    },
    {
      q: 'Which equation describes the line drawn on the grid below?',
      fig: {
        view: [-4, -4, 4, 6],
        grid: true,
        elems: [
          { t: 'line', a: [-1, 4], b: [2, -2] },
          { t: 'point', p: [-1, 4], label: '(-1, 4)', dx: -14, dy: -8 },
          { t: 'point', p: [2, -2], label: '(2, -2)', dx: 8, dy: 16 },
        ],
      },
      choices: ['$2x - y = 2$', '$2x + y = 2$', '$x + 2y = 2$', '$2x + y = -2$'],
      answer: 1,
      solution:
        'Substitute both marked points into each equation. For $2x + y = 2$: the point $(-1, 4)$ gives $-2 + 4 = 2$ ✓, and the point $(2, -2)$ gives $4 - 2 = 2$ ✓. Both work, so this is the line. (The equation $2x - y = 2$ subtracts and gives $-2 - 4 = -6$ at the first point; the equation $x + 2y = 2$ attaches the coefficient $2$ to the wrong variable and gives $-1 + 8 = 7$; the equation $2x + y = -2$ has the correct left side but the wrong constant, since both points make it $2$, not $-2$.)',
    },
  ],
  // p8 — find another lattice point on a graphed line
  [
    {
      q: 'Which of these points lies on the line shown?',
      fig: {
        view: [-5, -3, 7, 5],
        grid: true,
        elems: [
          { t: 'line', a: [-3, 4], b: [3, 0] },
          { t: 'point', p: [-3, 4], label: '(-3, 4)', dx: -6, dy: -12 },
          { t: 'point', p: [3, 0], label: '(3, 0)', dx: 14, dy: 14 },
        ],
      },
      choices: ['$(0, 2)$', '$(2, 0)$', '$(0, 3)$', '$(0, 4)$'],
      answer: 0,
      solution:
        'From $(-3, 4)$ to $(3, 0)$ the line runs $6$ right while dropping $4$, so it falls $2$ for every $3$ steps right. Starting at $(-3, 4)$ and taking one such step lands on $(0, 2)$. Check it forward with the equation: those two points satisfy $2x + 3y = 6$, and $(0, 2)$ gives $0 + 6 = 6$ ✓. (The point $(2, 0)$ writes the answer\'s numbers in the wrong order and gives $4 + 0 = 4$; the point $(0, 3)$ copies the number $3$ from the $x$-intercept and uses it as the height; the point $(0, 4)$ borrows the height of the labelled left-hand point without walking the line back to the $y$-axis.)',
    },
    {
      q: 'The line shown below passes through the two marked points. Which of these points is also on it?',
      fig: {
        view: [-6, -4, 6, 4],
        grid: true,
        elems: [
          { t: 'line', a: [-4, -2], b: [2, 1] },
          { t: 'point', p: [-4, -2], label: '(-4, -2)', dx: 4, dy: 16 },
          { t: 'point', p: [2, 1], label: '(2, 1)', dx: 14, dy: -8 },
        ],
      },
      choices: ['$(0, 1)$', '$(1, 2)$', '$(2, 0)$', '$(4, 2)$'],
      answer: 3,
      solution:
        'From $(-4, -2)$ to $(2, 1)$ the line runs $6$ right and rises $3$, so it climbs $1$ for every $2$ steps right. Continuing from $(2, 1)$ by $2$ right and $1$ up lands on $(4, 2)$. Check it forward: the two marked points and $(4, 2)$ all satisfy $x - 2y = 0$, since $4 - 2(2) = 0$ ✓. (The point $(0, 1)$ misreads where the line meets the $y$-axis — the line passes through the ORIGIN, so its height there is $0$; the point $(1, 2)$ swaps the rise and the run, climbing $2$ for each step right; the point $(2, 0)$ treats the labelled point $(2, 1)$ as if it sat on the $x$-axis.)',
    },
    {
      q: 'The line shown passes through $(-2, 5)$ and $(4, -1)$. Which of these points is also on it?',
      fig: {
        view: [-4, -3, 6, 7],
        grid: true,
        elems: [
          { t: 'line', a: [-2, 5], b: [4, -1] },
          { t: 'point', p: [-2, 5], label: '(-2, 5)', dx: -8, dy: -10 },
          { t: 'point', p: [4, -1], label: '(4, -1)', dx: 4, dy: 16 },
        ],
      },
      choices: ['$(0, -3)$', '$(-1, 2)$', '$(1, 2)$', '$(5, 0)$'],
      answer: 2,
      solution:
        'From $(-2, 5)$ to $(4, -1)$ the line runs $6$ right and drops $6$, so it falls exactly $1$ for each step right. Its equation is therefore $x + y = 3$, since both given points satisfy it: $-2 + 5 = 3$ ✓ and $4 + (-1) = 3$ ✓. Now test $(1, 2)$: $1 + 2 = 3$ ✓, so it is on the line. (The point $(0, -3)$ flips the sign of the height where the line crosses the $y$-axis, which is really $(0, 3)$; the point $(-1, 2)$ is the answer with its coordinates swapped and gives $-1 + 2 = 1$; the point $(5, 0)$ steps right from $(4, -1)$ but rises instead of falling, and gives $5 + 0 = 5$.)',
    },
  ],
  // p9 — a point whose two coordinates are tied together by one unknown
  [
    {
      q: 'The point $(k, 3k)$ lies on the line $2x + y = 20$. What is $k$?',
      choices: ['$20$', '$4$', '$10$', '$12$'],
      answer: 1,
      solution:
        'Substitute $x = k$ and $y = 3k$: $2k + 3k = 20$, so $5k = 20$ and $k = 4$. Check it forward: $k = 4$ makes the point $(4, 12)$, and $2(4) + 12 = 8 + 12 = 20$. ✓ (The value $20$ simply copies the constant from the right side; the value $10$ forgets the $y$-term entirely and solves $2k = 20$; the value $12$ reports the $y$-coordinate $3k$ rather than $k$ itself.)',
    },
    {
      q: 'The point $(2t, t)$ lies on the line $x - 3y = 6$. What is $t$?',
      choices: ['$-6$', '$6$', '$1.2$', '$-12$'],
      answer: 0,
      solution:
        'Substitute $x = 2t$ and $y = t$: $2t - 3t = 6$, so $-t = 6$ and $t = -6$. Check it forward: $t = -6$ makes the point $(-12, -6)$, and $-12 - 3(-6) = -12 + 18 = 6$. ✓ (The value $6$ loses the minus sign when dividing by $-1$; the value $1.2$ adds the two terms instead of subtracting, solving $5t = 6$; the value $-12$ reports the $x$-coordinate $2t$ rather than $t$ itself.)',
    },
    {
      q: 'The point $(n, n + 4)$ lies on the line $3x - 2y = 7$. What is $n$?',
      choices: ['$-1$', '$5.5$', '$19$', '$15$'],
      answer: 3,
      solution:
        'Substitute $x = n$ and $y = n + 4$: $3n - 2(n + 4) = 7$. Distribute carefully — the $-2$ multiplies BOTH parts: $3n - 2n - 8 = 7$, so $n - 8 = 7$ and $n = 15$. Check it forward: $n = 15$ makes the point $(15, 19)$, and $3(15) - 2(19) = 45 - 38 = 7$. ✓ (The value $-1$ comes from $-2 \\times 4 = +8$, a sign slip inside the distribution; the value $5.5$ drops the coefficient $2$ and solves $3n - (n + 4) = 7$; the value $19$ reports the $y$-coordinate $n + 4$ rather than $n$.)',
    },
  ],
  // p10 — the y-intercept of ax + by = c, and running that backwards
  [
    {
      q: 'Where does the line $5x - 2y = 30$ cross the $y$-axis?',
      choices: ['$(0, 15)$', '$(6, 0)$', '$(0, -15)$', '$(-15, 0)$'],
      answer: 2,
      solution:
        'On the $y$-axis, $x = 0$. Substituting gives $-2y = 30$, so $y = -15$ and the crossing point is $(0, -15)$. Check it forward: $5(0) - 2(-15) = 0 + 30 = 30$. ✓ (The point $(0, 15)$ loses the minus sign when dividing $30$ by $-2$; the point $(6, 0)$ answers the other question — setting $y = 0$ gives $5x = 30$, the $x$-intercept; the point $(-15, 0)$ has the right number sitting in the $x$-slot, putting it on the wrong axis.)',
    },
    {
      q: 'Where does the line $7x + 4y = -28$ cross the $y$-axis?',
      choices: ['$(0, 7)$', '$(0, -7)$', '$(-4, 0)$', '$(-7, 0)$'],
      answer: 1,
      solution:
        'On the $y$-axis, $x = 0$. Substituting gives $4y = -28$, so $y = -7$ and the crossing point is $(0, -7)$. Check it forward: $7(0) + 4(-7) = -28$. ✓ (The point $(0, 7)$ drops the minus sign on the constant; the point $(-4, 0)$ solves for the wrong axis — setting $y = 0$ gives $7x = -28$, the $x$-intercept; the point $(-7, 0)$ has the right number in the wrong slot.)',
    },
    {
      q: 'The line $9x + by = 18$ crosses the $y$-axis at $(0, -6)$. What is $b$?',
      choices: ['$-3$', '$3$', '$-108$', '$-\\frac{1}{3}$'],
      answer: 0,
      solution:
        'The point $(0, -6)$ must satisfy the equation, so substitute it: $9(0) + b(-6) = 18$, which is $-6b = 18$, giving $b = -3$. Check it forward: the line $9x - 3y = 18$ at $(0, -6)$ gives $0 + 18 = 18$. ✓ (The value $3$ loses the minus sign when dividing $18$ by $-6$; the value $-108$ multiplies $18$ by $-6$ instead of dividing; the value $-\\frac{1}{3}$ flips the division, computing $\\frac{-6}{18}$.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 8,
  sections: { '8.1': s81, '8.2': s82 },
}
