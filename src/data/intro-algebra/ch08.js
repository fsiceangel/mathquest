// Introduction to Algebra — Chapter 8: Graphing Lines
// All problems, explanations, and examples are original MathQuest content.

const s81 = {
  id: '8.1',
  title: 'The Number Line and the Cartesian Plane',
  learn: {
    concepts: [
      {
        heading: 'Two number lines make a plane',
        body: 'Cross a horizontal number line (the $x$-axis) with a vertical one (the $y$-axis) and you get the Cartesian plane. Every point gets an address $(x, y)$: walk $x$ steps sideways from the origin $(0, 0)$, then $y$ steps up or down. Order matters — $(2, 5)$ and $(5, 2)$ are different points!',
      },
      {
        heading: 'The four quadrants',
        body: 'The axes slice the plane into four quadrants, numbered counterclockwise starting from the upper right. Quadrant I has $(+, +)$, Quadrant II has $(-, +)$, Quadrant III has $(-, -)$, and Quadrant IV has $(+, -)$. Points ON an axis, like $(3, 0)$ or $(0, -2)$, belong to no quadrant at all.',
      },
      {
        heading: 'Distances along a grid line',
        body: 'If two points share a $y$-coordinate, they sit on the same horizontal line, and the distance between them is just how far apart their $x$-coordinates are: from $(-4, 2)$ to $(5, 2)$ is $5 - (-4) = 9$. Same idea vertically when the $x$-coordinates match.',
      },
      {
        heading: 'Midpoints the easy way',
        body: 'The midpoint of a horizontal or vertical segment sits exactly halfway along, so average the coordinate that changes and keep the one that does not. The midpoint of the segment from $(1, 6)$ to $(9, 6)$ is $\\left(\\frac{1+9}{2}, 6\\right) = (5, 6)$.',
      },
    ],
    examples: [
      {
        problem: 'In which quadrant does the point $(-3, 5)$ lie?',
        steps: [
          'The $x$-coordinate is $-3$, so the point sits to the LEFT of the $y$-axis.',
          'The $y$-coordinate is $5$, so the point sits ABOVE the $x$-axis.',
          'Left and up is the upper-left region: Quadrant II.',
        ],
        answer: '$(-3, 5)$ lies in Quadrant II',
      },
      {
        problem: 'Find the distance between $(-4, 2)$ and $(5, 2)$.',
        steps: [
          'Both points have $y$-coordinate $2$, so they lie on the same horizontal line.',
          'The distance is the gap between the $x$-coordinates: from $-4$ up to $5$.',
          'That gap is $5 - (-4) = 5 + 4 = 9$.',
        ],
        answer: 'The distance is $9$',
      },
      {
        problem: 'Find the midpoint of the segment from $(2, -7)$ to $(2, 3)$.',
        steps: [
          'The $x$-coordinates match, so the segment is vertical and the midpoint keeps $x = 2$.',
          'Average the $y$-coordinates: $\\frac{-7 + 3}{2} = \\frac{-4}{2} = -2$.',
          'So the midpoint is $(2, -2)$. Check: it is $5$ units from each endpoint.',
        ],
        answer: 'The midpoint is $(2, -2)$',
      },
    ],
  },
  problems: [
    {
      q: 'In which quadrant does the point $(4, -6)$ lie?',
      choices: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
      answer: 3,
      solution: 'The $x$-coordinate $4$ is positive (right of the $y$-axis) and the $y$-coordinate $-6$ is negative (below the $x$-axis). Right and down is the lower-right region: Quadrant IV.',
    },
    {
      q: 'Where does the point $(0, 5)$ lie?',
      choices: ['On the $x$-axis', 'On the $y$-axis', 'In Quadrant I', 'In Quadrant II'],
      answer: 1,
      solution: 'An $x$-coordinate of $0$ means no sideways movement at all — the point sits directly above the origin, on the $y$-axis. Points on an axis belong to no quadrant.',
    },
    {
      q: 'What are the coordinates of point $A$ shown in the graph?',
      fig: {
        view: [-5, -5, 5, 5],
        grid: true,
        elems: [{ t: 'point', p: [-3, 2], label: 'A', dx: 8, dy: -8 }],
      },
      choices: ['$(-3, 2)$', '$(2, -3)$', '$(3, 2)$', '$(-2, 3)$'],
      answer: 0,
      solution: 'Point $A$ is $3$ units LEFT of the origin ($x = -3$) and $2$ units UP ($y = 2$). Always read sideways first, then up-down: $(-3, 2)$.',
    },
    {
      q: 'What is the distance between $(-1, 4)$ and $(7, 4)$?',
      choices: ['$6$', '$7$', '$8$', '$4$'],
      answer: 2,
      solution: 'The $y$-coordinates match, so the segment is horizontal. The distance is the gap in $x$: $7 - (-1) = 8$. (Subtracting a negative adds!)',
    },
    {
      q: 'What is the distance between $(3, -5)$ and $(3, 6)$?',
      choices: ['$1$', '$11$', '$-11$', '$9$'],
      answer: 1,
      solution: 'The $x$-coordinates match, so the segment is vertical. The gap in $y$ is $6 - (-5) = 11$. A distance is never negative, so $-11$ cannot be right.',
    },
    {
      q: 'What is the midpoint of the segment from $(-6, 2)$ to $(10, 2)$?',
      choices: ['$(2, 2)$', '$(4, 2)$', '$(8, 2)$', '$(2, 8)$'],
      answer: 0,
      solution: 'The segment is horizontal, so keep $y = 2$ and average the $x$-coordinates: $\\frac{-6 + 10}{2} = 2$. The midpoint is $(2, 2)$. Check: it is $8$ units from each endpoint.',
    },
    {
      q: 'The point $(a, b)$ lies in Quadrant II. In which quadrant does $(b, a)$ lie?',
      choices: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
      answer: 3,
      solution: 'Quadrant II means $a$ is negative and $b$ is positive. The point $(b, a)$ has a positive $x$-coordinate and a negative $y$-coordinate — that is right and down, Quadrant IV.',
    },
    {
      q: 'Three corners of a rectangle are shown at $A(-2, 1)$, $B(4, 1)$, and $C(4, 5)$. What are the coordinates of the fourth corner?',
      fig: {
        view: [-4, -1, 6, 7],
        grid: true,
        elems: [
          { t: 'point', p: [-2, 1], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [4, 1], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [4, 5], label: 'C', dx: 10, dy: -8 },
          { t: 'seg', a: [-2, 1], b: [4, 1], dash: true },
          { t: 'seg', a: [4, 1], b: [4, 5], dash: true },
        ],
      },
      choices: ['$(-2, 5)$', '$(4, -2)$', '$(-2, -5)$', '$(5, -2)$'],
      answer: 0,
      solution: 'The fourth corner must sit directly above $A$ (sharing $x = -2$) and directly left of $C$ (sharing $y = 5$). That point is $(-2, 5)$, which makes all four sides horizontal or vertical.',
    },
    {
      q: 'Points $A(-5, -3)$ and $B(7, -3)$ are endpoints of a segment. Point $C$ lies on the segment, twice as far from $A$ as from $B$. What are the coordinates of $C$?',
      choices: ['$(1, -3)$', '$(-1, -3)$', '$(3, -3)$', '$(4, -3)$'],
      answer: 2,
      solution: 'The segment is horizontal with length $7 - (-5) = 12$. Split it in the ratio $2 : 1$: the piece from $A$ to $C$ is $8$ and from $C$ to $B$ is $4$. Start at $x = -5$ and move $8$ right: $C = (3, -3)$. Check: $C$ is $8$ from $A$ and $4$ from $B$, and $8 = 2 \\times 4$.',
    },
    {
      q: 'A rectangle has vertices $(-3, -1)$, $(4, -1)$, $(4, 3)$, and $(-3, 3)$. What is its perimeter?',
      choices: ['$28$', '$22$', '$11$', '$18$'],
      answer: 1,
      solution: 'The width is $4 - (-3) = 7$ and the height is $3 - (-1) = 4$. The perimeter is $2(7 + 4) = 22$. (Choosing $7 \\times 4 = 28$ would be the area, not the perimeter!)',
    },
  ],
}

const s82 = {
  id: '8.2',
  title: 'Introduction to Graphing Linear Equations',
  learn: {
    concepts: [
      {
        heading: 'An equation is a club; its graph is the membership list',
        body: 'A solution of an equation like $2x + 3y = 6$ is a pair $(x, y)$ that makes it true. Plot ALL the solutions and a picture appears. For any equation of the form $ax + by = c$ (with $a$ and $b$ not both zero), that picture is a straight line — which is why such equations are called linear.',
      },
      {
        heading: 'Checking if a point is on a line',
        body: 'No graphing needed: just substitute! The point $(2, -1)$ is on the line $3x + 4y = 2$ because $3(2) + 4(-1) = 6 - 4 = 2$. If the two sides do not match, the point is off the line.',
      },
      {
        heading: 'Two points determine the line',
        body: 'Since the graph is a straight line, finding just two solutions lets you draw the whole thing. The easiest two are often the intercepts: set $y = 0$ to find where the line crosses the $x$-axis, and $x = 0$ for the $y$-axis. A third point makes a great check — if it is not on your line, something slipped.',
      },
      {
        heading: 'Horizontal and vertical lines',
        body: 'The equation $y = 3$ says nothing about $x$, so EVERY point with $y$-coordinate $3$ qualifies: a horizontal line. Likewise $x = -2$ collects all points with $x$-coordinate $-2$: a vertical line. One-variable equations still make perfectly good lines in the plane.',
      },
    ],
    examples: [
      {
        problem: 'Is the point $(2, -1)$ on the line $3x + 4y = 2$?',
        steps: [
          'Substitute $x = 2$ and $y = -1$ into the left side.',
          '$3(2) + 4(-1) = 6 - 4 = 2$.',
          'That matches the right side exactly, so the point is a solution — it is on the line.',
        ],
        answer: 'Yes, $(2, -1)$ is on the line',
      },
      {
        problem: 'Graph the line $2x + 3y = 6$.',
        steps: [
          'Find the intercepts. Set $y = 0$: then $2x = 6$, so $x = 3$, giving the point $(3, 0)$.',
          'Set $x = 0$: then $3y = 6$, so $y = 2$, giving the point $(0, 2)$.',
          'Plot both intercepts and draw the line through them, as shown.',
        ],
        answer: 'The line passes through $(3, 0)$ and $(0, 2)$',
        fig: {
          view: [-2, -2, 5, 4],
          grid: true,
          elems: [
            { t: 'line', a: [0, 2], b: [3, 0] },
            { t: 'point', p: [3, 0], label: '(3, 0)', dx: 14, dy: 14 },
            { t: 'point', p: [0, 2], label: '(0, 2)', dx: -22, dy: -8 },
          ],
        },
      },
      {
        problem: 'Describe the graph of $y = -4$.',
        steps: [
          'The equation puts no restriction on $x$ — any value works, as long as $y = -4$.',
          'So the solutions are $(0, -4)$, $(1, -4)$, $(-5, -4)$, and so on: every point at height $-4$.',
          'Those points form a horizontal line, $4$ units below the $x$-axis.',
        ],
        answer: 'A horizontal line through $(0, -4)$',
      },
    ],
  },
  problems: [
    {
      q: 'Which point is on the line $x + y = 7$?',
      choices: ['$(4, 2)$', '$(3, 4)$', '$(7, 1)$', '$(-3, 4)$'],
      answer: 1,
      solution: 'Test each pair: $3 + 4 = 7$. ✓ The others give $6$, $8$, and $1$ — none equals $7$.',
    },
    {
      q: 'Which point is a solution of $2x - y = 12$?',
      choices: ['$(5, -2)$', '$(5, 2)$', '$(-5, 2)$', '$(6, 1)$'],
      answer: 0,
      solution: 'Substitute $(5, -2)$: $2(5) - (-2) = 10 + 2 = 12$. ✓ Watch the signs: subtracting $-2$ ADDS $2$. The pair $(5, 2)$ gives only $10 - 2 = 8$.',
    },
    {
      q: 'What does the graph of $y = 3$ look like?',
      choices: ['A vertical line', 'A line through the origin', 'A single point', 'A horizontal line'],
      answer: 3,
      solution: 'Every point with $y$-coordinate $3$ is a solution, no matter its $x$-coordinate: $(0, 3)$, $(1, 3)$, $(-2, 3)$, ... Those points sweep out a horizontal line $3$ units above the $x$-axis.',
    },
    {
      q: 'What does the graph of $x = -2$ look like?',
      choices: [
        'A horizontal line through $(0, -2)$',
        'A vertical line through $(-2, 0)$',
        'A horizontal line through $(-2, 0)$',
        'A vertical line through $(0, -2)$',
      ],
      answer: 1,
      solution: 'The equation fixes $x$ at $-2$ and lets $y$ roam free, so the graph is the vertical line of all points $(-2, y)$. It crosses the $x$-axis at $(-2, 0)$.',
    },
    {
      q: 'Where does the line $3x + 2y = 12$ cross the $x$-axis?',
      choices: ['$(0, 6)$', '$(6, 0)$', '$(4, 0)$', '$(0, 4)$'],
      answer: 2,
      solution: 'On the $x$-axis, $y = 0$. Substitute: $3x = 12$, so $x = 4$. The crossing point is $(4, 0)$. (The point $(0, 6)$ is where it crosses the $y$-axis instead.)',
    },
    {
      q: 'The point $(-3, y)$ is on the line $2x + y = 1$. What is $y$?',
      choices: ['$7$', '$-5$', '$5$', '$-7$'],
      answer: 0,
      solution: 'Substitute $x = -3$: $2(-3) + y = 1$, so $-6 + y = 1$ and $y = 7$. Check: $-6 + 7 = 1$. ✓',
    },
    {
      q: 'Which equation describes the line shown?',
      fig: {
        view: [-4, -4, 4, 4],
        grid: true,
        elems: [
          { t: 'line', a: [0, -1], b: [2, 3] },
          { t: 'point', p: [0, -1], label: '(0, -1)', dx: 16, dy: 8 },
          { t: 'point', p: [2, 3], label: '(2, 3)', dx: 18, dy: 0 },
        ],
      },
      choices: ['$y = 2x - 1$', '$y = -2x - 1$', '$y = 2x + 1$', '$y = x - 2$'],
      answer: 0,
      solution: 'Test the two marked points. For $y = 2x - 1$: at $x = 0$, $y = -1$ ✓, and at $x = 2$, $y = 4 - 1 = 3$ ✓. Both points work, and two points pin down the line. The other equations each miss at least one of the marked points.',
    },
    {
      q: 'Which of the following points lies on the line shown?',
      fig: {
        view: [-5, -4, 5, 4],
        grid: true,
        elems: [
          { t: 'line', a: [-4, 3], b: [2, 0] },
          { t: 'point', p: [-4, 3], label: '(-4, 3)', dx: 0, dy: -12 },
          { t: 'point', p: [2, 0], label: '(2, 0)', dx: 14, dy: 14 },
        ],
      },
      choices: ['$(1, 0)$', '$(2, 1)$', '$(0, 1)$', '$(0, 2)$'],
      answer: 2,
      solution: 'From $(-4, 3)$ to $(2, 0)$ the line drops $1$ unit for every $2$ units right. Starting at $(2, 0)$ and backing up $2$ units left raises it $1$: the line passes through $(0, 1)$. You can also find the equation, $x + 2y = 2$, and check: $0 + 2(1) = 2$. ✓',
    },
    {
      q: 'The point $(k, 2k)$ lies on the line $3x + y = 15$. What is $k$?',
      choices: ['$5$', '$-3$', '$15$', '$3$'],
      answer: 3,
      solution: 'Substitute $x = k$ and $y = 2k$: $3k + 2k = 15$, so $5k = 15$ and $k = 3$. Check: the point $(3, 6)$ gives $9 + 6 = 15$. ✓',
    },
    {
      q: 'Where does the line $4x - 3y = 24$ cross the $y$-axis?',
      choices: ['$(0, 8)$', '$(0, -8)$', '$(-8, 0)$', '$(6, 0)$'],
      answer: 1,
      solution: 'On the $y$-axis, $x = 0$. Substitute: $-3y = 24$, so $y = -8$. The crossing point is $(0, -8)$ — do not lose the minus sign when dividing by $-3$!',
    },
  ],
}

const s83 = {
  id: '8.3',
  title: 'Using Slope in Problems',
  learn: {
    concepts: [
      {
        heading: 'Slope measures steepness',
        body: 'The slope of a line is $\\frac{\\text{rise}}{\\text{run}}$: how much the line climbs (rise) for each step it takes to the right (run). A slope of $2$ means up $2$ for every $1$ right; a slope of $\\frac{1}{3}$ means a gentle climb of $1$ for every $3$ right.',
      },
      {
        heading: 'Slope from two points',
        body: 'Between $(x_1, y_1)$ and $(x_2, y_2)$, the rise is $y_2 - y_1$ and the run is $x_2 - x_1$, so the slope is $\\frac{y_2 - y_1}{x_2 - x_1}$. Either point may go first — just keep the SAME order on top and bottom, or the sign will flip on you.',
      },
      {
        heading: 'Reading the sign of a slope',
        body: 'Positive slope: the line climbs as you move right. Negative slope: it falls. Zero slope: a flat, horizontal line (rise is $0$). A vertical line has UNDEFINED slope, because its run is $0$ and dividing by zero is forbidden.',
      },
      {
        heading: 'Slope is a rate of change',
        body: 'In a story, slope answers "how fast?" If a graph shows distance versus time, its slope is speed. If a candle\'s height drops $2$ cm every hour, the height graph is a line with slope $-2$. Units matter: slope is always (change in $y$) per (one unit of $x$).',
      },
    ],
    examples: [
      {
        problem: 'Find the slope of the line through $(1, 2)$ and $(4, 8)$.',
        steps: [
          'Rise: $8 - 2 = 6$. Run: $4 - 1 = 3$.',
          'Slope $= \\frac{\\text{rise}}{\\text{run}} = \\frac{6}{3} = 2$.',
          'Sanity check: both coordinates grow as we move right, so a positive slope makes sense.',
        ],
        answer: 'The slope is $2$',
      },
      {
        problem: 'Find the slope of the line shown.',
        steps: [
          'Pick two lattice points on the line: $(-3, 2)$ and $(3, -2)$.',
          'Rise: $-2 - 2 = -4$. Run: $3 - (-3) = 6$.',
          'Slope $= \\frac{-4}{6} = -\\frac{2}{3}$. The line falls as we move right, so a negative slope is exactly what we should see.',
        ],
        answer: 'The slope is $-\\frac{2}{3}$',
        fig: {
          view: [-5, -4, 5, 4],
          grid: true,
          elems: [
            { t: 'line', a: [-3, 2], b: [3, -2] },
            { t: 'point', p: [-3, 2], label: '(-3, 2)', dx: -6, dy: -12 },
            { t: 'point', p: [3, -2], label: '(3, -2)', dx: 8, dy: 14 },
          ],
        },
      },
      {
        problem: 'A candle is $20$ cm tall. Three hours later it is $14$ cm tall. If it burns at a steady rate, what is the slope of its height-versus-time graph?',
        steps: [
          'The height changed by $14 - 20 = -6$ cm while time changed by $3$ hours.',
          'Slope $= \\frac{-6}{3} = -2$ cm per hour.',
          'The negative sign tells the story: the candle is SHRINKING by $2$ cm each hour.',
        ],
        answer: 'The slope is $-2$ cm per hour',
      },
    ],
  },
  problems: [
    {
      q: 'What is the slope of the line through $(0, 0)$ and $(2, 6)$?',
      choices: ['$\\frac{1}{3}$', '$2$', '$3$', '$6$'],
      answer: 2,
      solution: 'Rise over run: $\\frac{6 - 0}{2 - 0} = \\frac{6}{2} = 3$. (Careful: $\\frac{1}{3}$ is run over rise — upside down!)',
    },
    {
      q: 'What is the slope of the line through $(1, 5)$ and $(4, 11)$?',
      choices: ['$2$', '$\\frac{1}{2}$', '$3$', '$6$'],
      answer: 0,
      solution: 'Rise: $11 - 5 = 6$. Run: $4 - 1 = 3$. Slope $= \\frac{6}{3} = 2$.',
    },
    {
      q: 'What is the slope of a horizontal line?',
      choices: ['$0$', 'Undefined', '$1$', '$-1$'],
      answer: 0,
      solution: 'A horizontal line never rises: the rise is $0$ for any run, so the slope is $\\frac{0}{\\text{run}} = 0$. (It is the VERTICAL line whose slope is undefined.)',
    },
    {
      q: 'What is the slope of the line through $(-1, 4)$ and $(3, -4)$?',
      choices: ['$2$', '$-\\frac{1}{2}$', '$-2$', '$-8$'],
      answer: 2,
      solution: 'Rise: $-4 - 4 = -8$. Run: $3 - (-1) = 4$. Slope $= \\frac{-8}{4} = -2$. The line falls steeply as it moves right.',
    },
    {
      q: 'What is the slope of the vertical line $x = 4$?',
      choices: ['$0$', '$4$', '$1$', 'Undefined'],
      answer: 3,
      solution: 'Any two points on this line, like $(4, 0)$ and $(4, 5)$, have run $4 - 4 = 0$. Slope would require dividing by $0$, which is impossible — so the slope is undefined, not zero.',
    },
    {
      q: 'What is the slope of the line shown?',
      fig: {
        view: [-4, -4, 4, 4],
        grid: true,
        elems: [
          { t: 'line', a: [-2, -1], b: [2, 2] },
          { t: 'point', p: [-2, -1], label: '(-2, -1)', dx: 6, dy: 16 },
          { t: 'point', p: [2, 2], label: '(2, 2)', dx: -6, dy: -12 },
        ],
      },
      choices: ['$\\frac{4}{3}$', '$\\frac{3}{4}$', '$-\\frac{3}{4}$', '$\\frac{2}{3}$'],
      answer: 1,
      solution: 'Use the marked lattice points $(-2, -1)$ and $(2, 2)$. Rise: $2 - (-1) = 3$. Run: $2 - (-2) = 4$. Slope $= \\frac{3}{4}$. The line climbs gently, so a positive slope less than $1$ fits the picture.',
    },
    {
      q: 'A sunflower was $12$ cm tall on day $3$ and $27$ cm tall on day $8$, growing at a steady rate. How fast did it grow?',
      choices: ['$3$ cm per day', '$5$ cm per day', '$\\frac{1}{3}$ cm per day', '$15$ cm per day'],
      answer: 0,
      solution: 'The growth rate is a slope: $\\frac{27 - 12}{8 - 3} = \\frac{15}{5} = 3$ cm per day. ($15$ cm is the TOTAL growth, not the rate; $5$ is the number of days.)',
    },
    {
      q: 'The line through $(3, k)$ and $(5, 9)$ has slope $4$. What is $k$?',
      choices: ['$17$', '$5$', '$-1$', '$1$'],
      answer: 3,
      solution: 'Set up the slope: $\\frac{9 - k}{5 - 3} = 4$, so $9 - k = 8$ and $k = 1$. Check: from $(3, 1)$ to $(5, 9)$ the rise is $8$ and the run is $2$, and $\\frac{8}{2} = 4$. ✓',
    },
    {
      q: 'At 2 pm the temperature is $18^\\circ$ and falling steadily by $3^\\circ$ per hour. At what time will the temperature reach $6^\\circ$?',
      choices: ['5 pm', '6 pm', '7 pm', '8 pm'],
      answer: 1,
      solution: 'The temperature must fall $18 - 6 = 12$ degrees. At $3$ degrees per hour, that takes $\\frac{12}{3} = 4$ hours. Four hours after 2 pm is 6 pm.',
    },
    {
      q: 'The points $(1, 2)$, $(3, 8)$, and $(5, k)$ all lie on one line. What is $k$?',
      choices: ['$11$', '$12$', '$14$', '$16$'],
      answer: 2,
      solution: 'From $(1, 2)$ to $(3, 8)$: slope $= \\frac{8 - 2}{3 - 1} = 3$. Points on one line all share this slope, so from $(3, 8)$, moving $2$ right must rise $2 \\times 3 = 6$: $k = 8 + 6 = 14$. Check with the outer pair: $\\frac{14 - 2}{5 - 1} = 3$. ✓',
    },
  ],
}

const s84 = {
  id: '8.4',
  title: 'Find the Equation',
  learn: {
    concepts: [
      {
        heading: 'A slope and a point pin down a line',
        body: 'If a line has slope $m$, then between a fixed point $(x_1, y_1)$ on it and any other point $(x, y)$ on it, rise over run must equal $m$: that gives $y - y_1 = m(x - x_1)$. This is called point-slope form, and it turns "slope plus one point" straight into an equation.',
      },
      {
        heading: 'From two points: slope first',
        body: 'Given two points, first compute the slope $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Then feed $m$ and EITHER point into point-slope form — both choices give the same line. Finish by checking that the other point satisfies your equation.',
      },
      {
        heading: 'Tidying up: slope-intercept form',
        body: 'Solving for $y$ puts the equation in slope-intercept form $y = mx + b$. It wears its personality on its sleeve: $m$ is the slope and $b$ is where the line crosses the $y$-axis. For example, $y - 5 = 3(x - 2)$ unpacks to $y = 3x - 1$.',
      },
      {
        heading: 'Horizontal and vertical lines are special',
        body: 'A horizontal line through $(5, -2)$ has equation $y = -2$: slope $0$, so the $mx$ term vanishes. A vertical line through $(3, 7)$ has equation $x = 3$ — and since its slope is undefined, it has NO slope-intercept form at all.',
      },
    ],
    examples: [
      {
        problem: 'Find the equation of the line with slope $3$ through the point $(2, 5)$.',
        steps: [
          'Point-slope form: $y - 5 = 3(x - 2)$.',
          'Distribute: $y - 5 = 3x - 6$.',
          'Add $5$ to both sides: $y = 3x - 1$. Check: at $x = 2$, $y = 6 - 1 = 5$. ✓',
        ],
        answer: '$y = 3x - 1$',
      },
      {
        problem: 'Find the equation of the line through $(1, 7)$ and $(3, 3)$.',
        steps: [
          'Slope first: $m = \\frac{3 - 7}{3 - 1} = \\frac{-4}{2} = -2$.',
          'Use point-slope with $(1, 7)$: $y - 7 = -2(x - 1)$, so $y = -2x + 9$.',
          'Check the OTHER point: at $x = 3$, $y = -6 + 9 = 3$. ✓ Both points fit.',
        ],
        answer: '$y = -2x + 9$',
      },
      {
        problem: 'Find the equation of the vertical line through $(-4, 6)$.',
        steps: [
          'A vertical line collects all points with the same $x$-coordinate.',
          'Here that shared value is $x = -4$; the $y$-coordinate $6$ plays no role.',
        ],
        answer: '$x = -4$',
      },
    ],
  },
  problems: [
    {
      q: 'Which equation describes the line with slope $2$ and $y$-intercept $(0, 5)$?',
      choices: ['$y = 5x + 2$', '$y = 2x + 5$', '$y = 2x - 5$', '$y = 5x - 2$'],
      answer: 1,
      solution: 'In $y = mx + b$, the slope $m$ multiplies $x$ and the $y$-intercept is $b$. Slope $2$ and intercept $5$ give $y = 2x + 5$. (Swapping their roles gives $y = 5x + 2$, a much steeper line!)',
    },
    {
      q: 'A line has slope $-3$ and passes through $(0, 4)$. What is its equation?',
      choices: ['$y = -3x + 4$', '$y = 3x + 4$', '$y = 4x - 3$', '$y = -3x - 4$'],
      answer: 0,
      solution: 'The point $(0, 4)$ IS the $y$-intercept, so $b = 4$, and $m = -3$: $y = -3x + 4$.',
    },
    {
      q: 'What is the equation of the horizontal line through $(5, -2)$?',
      choices: ['$x = 5$', '$y = 5$', '$x = -2$', '$y = -2$'],
      answer: 3,
      solution: 'A horizontal line keeps the same HEIGHT everywhere, so it fixes the $y$-coordinate: $y = -2$. The $5$ just tells us one spot the line passes through.',
    },
    {
      q: 'A line has slope $4$ and passes through $(1, 6)$. What is its equation?',
      choices: ['$y = 4x + 2$', '$y = 4x - 2$', '$y = 4x + 6$', '$y = 4x + 10$'],
      answer: 0,
      solution: 'Point-slope: $y - 6 = 4(x - 1)$, so $y = 4x + 2$. Check: at $x = 1$, $y = 4 + 2 = 6$. ✓ ($y = 4x + 6$ is tempting, but $6$ is the height at $x = 1$, not at $x = 0$.)',
    },
    {
      q: 'What is the equation of the vertical line through $(3, 7)$?',
      choices: ['$y = 7$', '$x = 7$', '$x = 3$', '$y = 3$'],
      answer: 2,
      solution: 'A vertical line fixes the $x$-coordinate, and this one passes through points with $x = 3$. Its equation is $x = 3$ — no slope-intercept form exists, since the slope is undefined.',
    },
    {
      q: 'Which equation describes the line through $(2, 3)$ and $(4, 7)$?',
      choices: ['$y = 2x + 1$', '$y = 2x - 1$', '$y = \\frac{1}{2}x + 2$', '$y = 2x + 3$'],
      answer: 1,
      solution: 'Slope: $\\frac{7 - 3}{4 - 2} = 2$. Point-slope with $(2, 3)$: $y - 3 = 2(x - 2)$, so $y = 2x - 1$. Check $(4, 7)$: $2(4) - 1 = 7$. ✓',
    },
    {
      q: 'Write $2x - 3y = 12$ in slope-intercept form.',
      choices: [
        '$y = \\frac{2}{3}x - 4$',
        '$y = -\\frac{2}{3}x + 4$',
        '$y = \\frac{3}{2}x - 6$',
        '$y = \\frac{2}{3}x + 4$',
      ],
      answer: 0,
      solution: 'Solve for $y$: $-3y = -2x + 12$, and dividing by $-3$ flips every sign: $y = \\frac{2}{3}x - 4$. Both the slope and the intercept change sign in that last division — a classic place to slip.',
    },
    {
      q: 'Which equation describes the line through $(-1, 5)$ and $(2, -4)$?',
      choices: ['$y = -3x - 2$', '$y = 3x + 8$', '$y = -3x + 2$', '$y = -\\frac{1}{3}x + 2$'],
      answer: 2,
      solution: 'Slope: $\\frac{-4 - 5}{2 - (-1)} = \\frac{-9}{3} = -3$. Point-slope with $(-1, 5)$: $y - 5 = -3(x + 1)$, so $y = -3x + 2$. Check $(2, -4)$: $-6 + 2 = -4$. ✓',
    },
    {
      q: 'A line has slope $\\frac{1}{2}$ and passes through $(-4, 3)$. What is its equation?',
      choices: [
        '$y = \\frac{1}{2}x + 1$',
        '$y = \\frac{1}{2}x + 5$',
        '$y = \\frac{1}{2}x - 5$',
        '$y = 2x + 11$',
      ],
      answer: 1,
      solution: 'Point-slope: $y - 3 = \\frac{1}{2}(x + 4)$, so $y = \\frac{1}{2}x + 2 + 3 = \\frac{1}{2}x + 5$. Check: at $x = -4$, $y = -2 + 5 = 3$. ✓',
    },
    {
      q: 'Which equation describes the line through $(3, 4)$ and $(-3, -4)$?',
      choices: [
        '$y = \\frac{3}{4}x$',
        '$y = \\frac{4}{3}x + 1$',
        '$y = \\frac{3}{4}x + 1$',
        '$y = \\frac{4}{3}x$',
      ],
      answer: 3,
      solution: 'Slope: $\\frac{-4 - 4}{-3 - 3} = \\frac{-8}{-6} = \\frac{4}{3}$. The two points are opposites, so their midpoint is the origin — the line passes through $(0, 0)$ and $b = 0$: $y = \\frac{4}{3}x$. Check $(3, 4)$: $\\frac{4}{3}(3) = 4$. ✓',
    },
  ],
}

const s85 = {
  id: '8.5',
  title: 'Slope and Intercepts',
  learn: {
    concepts: [
      {
        heading: 'Slope-intercept form is a name tag',
        body: 'When a line is written as $y = mx + b$, you can read off its two vital statistics instantly: the slope is $m$ (the coefficient of $x$) and the $y$-intercept is $(0, b)$. So $y = -2x + 6$ has slope $-2$ and crosses the $y$-axis at $(0, 6)$.',
      },
      {
        heading: 'Finding intercepts of any equation',
        body: 'The $x$-intercept is where the line meets the $x$-axis, so set $y = 0$ and solve. The $y$-intercept is where it meets the $y$-axis, so set $x = 0$. This recipe works no matter what form the equation is in.',
      },
      {
        heading: 'Intercepts of $ax + by = c$',
        body: 'For $ax + by = c$, setting $y = 0$ gives $x = \\frac{c}{a}$, and setting $x = 0$ gives $y = \\frac{c}{b}$. So $5x - 2y = 10$ has $x$-intercept $(2, 0)$ and $y$-intercept $(0, -5)$ — two free points, enough to draw the line.',
      },
      {
        heading: 'Sketching from $y = mx + b$',
        body: 'To sketch $y = mx + b$: start at $(0, b)$ on the $y$-axis, then use the slope as marching orders. For $m = \\frac{1}{2}$, go right $2$ and up $1$ to land on a second point; connect and extend. Negative slope? March right and DOWN instead.',
      },
    ],
    examples: [
      {
        problem: 'Find the slope, $y$-intercept, and $x$-intercept of $y = -2x + 6$.',
        steps: [
          'Read the name tag: slope $m = -2$ and $y$-intercept $(0, 6)$.',
          'For the $x$-intercept, set $y = 0$: $0 = -2x + 6$, so $x = 3$.',
          'The line falls from $(0, 6)$ to $(3, 0)$, dropping $2$ for each step right — matching $m = -2$.',
        ],
        answer: 'Slope $-2$, $y$-intercept $(0, 6)$, $x$-intercept $(3, 0)$',
      },
      {
        problem: 'Find both intercepts of $5x - 2y = 10$.',
        steps: [
          'Set $y = 0$: $5x = 10$, so $x = 2$. The $x$-intercept is $(2, 0)$.',
          'Set $x = 0$: $-2y = 10$, so $y = -5$. The $y$-intercept is $(0, -5)$.',
        ],
        answer: '$x$-intercept $(2, 0)$ and $y$-intercept $(0, -5)$',
      },
      {
        problem: 'Sketch the line $y = \\frac{1}{2}x - 1$.',
        steps: [
          'Start at the $y$-intercept, $(0, -1)$.',
          'The slope $\\frac{1}{2}$ says: go right $2$, up $1$. That lands on $(2, 0)$.',
          'Draw the line through those two points, as shown.',
        ],
        answer: 'The line passes through $(0, -1)$ and $(2, 0)$',
        fig: {
          view: [-4, -4, 4, 3],
          grid: true,
          elems: [
            { t: 'line', a: [0, -1], b: [2, 0] },
            { t: 'point', p: [0, -1], label: '(0, -1)', dx: -22, dy: 12 },
            { t: 'point', p: [2, 0], label: '(2, 0)', dx: 14, dy: -8 },
          ],
        },
      },
    ],
  },
  problems: [
    {
      q: 'What is the slope of the line $y = 7x - 3$?',
      choices: ['$-3$', '$7$', '$3$', '$-7$'],
      answer: 1,
      solution: 'In $y = mx + b$, the slope is the coefficient of $x$: here $m = 7$. The $-3$ is the $y$-intercept, not the slope.',
    },
    {
      q: 'What is the $y$-intercept of the line $y = 4x + 9$?',
      choices: ['$(0, 4)$', '$(9, 0)$', '$(4, 0)$', '$(0, 9)$'],
      answer: 3,
      solution: 'At the $y$-axis, $x = 0$, so $y = 4(0) + 9 = 9$. The $y$-intercept is $(0, 9)$ — the constant term $b$, sitting at $x = 0$.',
    },
    {
      q: 'What is the $x$-intercept of the line $y = 2x - 8$?',
      choices: ['$(4, 0)$', '$(0, -8)$', '$(-4, 0)$', '$(8, 0)$'],
      answer: 0,
      solution: 'Set $y = 0$: $0 = 2x - 8$, so $x = 4$. The $x$-intercept is $(4, 0)$. ($(0, -8)$ is the $y$-intercept — the other axis!)',
    },
    {
      q: 'What are the slope and $y$-intercept of $y = -x + 2$?',
      choices: [
        'Slope $1$, $y$-intercept $(0, 2)$',
        'Slope $-1$, $y$-intercept $(0, 2)$',
        'Slope $2$, $y$-intercept $(0, -1)$',
        'Slope $-1$, $y$-intercept $(0, -2)$',
      ],
      answer: 1,
      solution: 'Think of $-x$ as $(-1)x$: the slope is $-1$, and the constant $2$ gives the $y$-intercept $(0, 2)$.',
    },
    {
      q: 'What are the $x$- and $y$-intercepts of $3x + 5y = 15$?',
      choices: [
        '$(5, 0)$ and $(0, 3)$',
        '$(3, 0)$ and $(0, 5)$',
        '$(15, 0)$ and $(0, 15)$',
        '$(-5, 0)$ and $(0, -3)$',
      ],
      answer: 0,
      solution: 'Set $y = 0$: $3x = 15$, so the $x$-intercept is $(5, 0)$. Set $x = 0$: $5y = 15$, so the $y$-intercept is $(0, 3)$. Each intercept comes from dividing $15$ by the OTHER variable\'s missing partner — it is easy to swap them by accident.',
    },
    {
      q: 'Which equation describes the line shown?',
      fig: {
        view: [-2, -3, 6, 4],
        grid: true,
        elems: [
          { t: 'line', a: [0, 2], b: [4, -1] },
          { t: 'point', p: [0, 2], label: '(0, 2)', dx: -20, dy: -8 },
          { t: 'point', p: [4, -1], label: '(4, -1)', dx: 12, dy: 12 },
        ],
      },
      choices: [
        '$y = -\\frac{4}{3}x + 2$',
        '$y = \\frac{3}{4}x + 2$',
        '$y = -\\frac{3}{4}x + 2$',
        '$y = -\\frac{3}{4}x - 2$',
      ],
      answer: 2,
      solution: 'The line crosses the $y$-axis at $(0, 2)$, so $b = 2$. From $(0, 2)$ to $(4, -1)$ it falls $3$ while running $4$, so $m = -\\frac{3}{4}$. Equation: $y = -\\frac{3}{4}x + 2$. Check $(4, -1)$: $-3 + 2 = -1$. ✓',
    },
    {
      q: 'What is the slope of the line $4x + 2y = 10$?',
      choices: ['$4$', '$-4$', '$2$', '$-2$'],
      answer: 3,
      solution: 'Solve for $y$: $2y = -4x + 10$, so $y = -2x + 5$. The slope is $-2$. (The $4$ in front of $x$ is NOT the slope until $y$ stands alone!)',
    },
    {
      q: 'The line $y = mx + 6$ has $x$-intercept $(2, 0)$. What is $m$?',
      choices: ['$-3$', '$3$', '$-6$', '$-\\frac{1}{3}$'],
      answer: 0,
      solution: 'The point $(2, 0)$ is on the line, so $0 = 2m + 6$, giving $m = -3$. It makes sense: the line must FALL from $(0, 6)$ down to $(2, 0)$, dropping $6$ over a run of $2$.',
    },
    {
      q: 'For what value of $c$ does the line $2x + cy = 12$ have $y$-intercept $(0, 3)$?',
      choices: ['$6$', '$4$', '$3$', '$-4$'],
      answer: 1,
      solution: 'The point $(0, 3)$ must satisfy the equation: $2(0) + 3c = 12$, so $c = 4$. Check: $2x + 4y = 12$ at $x = 0$ gives $y = 3$. ✓',
    },
    {
      q: 'A line has slope $-2$ and $y$-intercept $(0, b)$ with $b > 0$. The $x$-coordinate of its $x$-intercept plus the $y$-coordinate of its $y$-intercept equals $9$. What is $b$?',
      choices: ['$3$', '$9$', '$6$', '$4$'],
      answer: 2,
      solution: 'The line is $y = -2x + b$. Its $x$-intercept: $0 = -2x + b$ gives $x = \\frac{b}{2}$. So $\\frac{b}{2} + b = 9$, meaning $\\frac{3b}{2} = 9$ and $b = 6$. Check: intercepts $(3, 0)$ and $(0, 6)$, and $3 + 6 = 9$. ✓',
    },
  ],
}

const s86 = {
  id: '8.6',
  title: 'Comparing Lines',
  learn: {
    concepts: [
      {
        heading: 'Parallel lines: same slope, different lines',
        body: 'Two lines are parallel exactly when they have the same slope but different $y$-intercepts — same tilt, never touching. So $y = 3x - 2$ and $y = 3x + 7$ are parallel: every point of one sits exactly $9$ above the other.',
      },
      {
        heading: 'Perpendicular lines: slopes multiply to $-1$',
        body: 'Two lines meet at a right angle exactly when their slopes multiply to $-1$. That makes the slopes negative reciprocals: flip the fraction AND flip the sign. Perpendicular to slope $\\frac{2}{5}$ is slope $-\\frac{5}{2}$. (Special case: horizontal and vertical lines are perpendicular, even though "undefined" breaks the product rule.)',
      },
      {
        heading: 'Where do two lines cross?',
        body: 'The intersection point is the one $(x, y)$ pair that satisfies BOTH equations. If both are solved for $y$, set the right sides equal, solve for $x$, then substitute back to find $y$. Always check the point in the equation you did not use.',
      },
      {
        heading: 'Same line in disguise',
        body: 'Two equations can describe one single line: $2x + 3y = 6$ and $4x + 6y = 12$ have exactly the same solutions, because the second is just the first multiplied by $2$. If one equation is a nonzero multiple of the other, the "two" lines share every point.',
      },
    ],
    examples: [
      {
        problem: 'Are the lines $y = 3x - 2$ and $6x - 2y = 10$ parallel?',
        steps: [
          'Put the second line in slope-intercept form: $-2y = -6x + 10$, so $y = 3x - 5$.',
          'Both lines have slope $3$, but different $y$-intercepts ($-2$ versus $-5$).',
          'Same slope, different lines — parallel.',
        ],
        answer: 'Yes, both have slope $3$, so they are parallel',
      },
      {
        problem: 'What is the slope of a line perpendicular to $y = \\frac{2}{5}x + 1$?',
        steps: [
          'The given slope is $\\frac{2}{5}$; call the perpendicular slope $m$.',
          'Perpendicular slopes multiply to $-1$: $\\frac{2}{5} \\cdot m = -1$.',
          'So $m = -\\frac{5}{2}$: flip the fraction and flip the sign.',
        ],
        answer: 'The perpendicular slope is $-\\frac{5}{2}$',
      },
      {
        problem: 'Find the intersection of $y = 2x - 3$ and $y = -x + 6$.',
        steps: [
          'At the crossing point both formulas give the same $y$, so set them equal: $2x - 3 = -x + 6$.',
          'Add $x$ and add $3$: $3x = 9$, so $x = 3$.',
          'Substitute back: $y = 2(3) - 3 = 3$. Check in the other line: $-3 + 6 = 3$. ✓',
        ],
        answer: 'The lines cross at $(3, 3)$',
      },
    ],
  },
  problems: [
    {
      q: 'What is the slope of any line parallel to $y = 4x - 7$?',
      choices: ['$-4$', '$\\frac{1}{4}$', '$4$', '$-7$'],
      answer: 2,
      solution: 'Parallel lines have EQUAL slopes, so the slope is $4$ — no flipping, no sign change. (Those moves belong to perpendicular lines.)',
    },
    {
      q: 'A line has slope $3$. What is the slope of a line perpendicular to it?',
      choices: ['$-3$', '$-\\frac{1}{3}$', '$\\frac{1}{3}$', '$3$'],
      answer: 1,
      solution: 'The slopes must multiply to $-1$: $3 \\cdot m = -1$ gives $m = -\\frac{1}{3}$. Flip AND negate — doing only one of the two ($-3$ or $\\frac{1}{3}$) is the classic trap.',
    },
    {
      q: 'Which line is parallel to $y = -2x + 1$?',
      choices: ['$y = 2x + 1$', '$y = -2x + 5$', '$y = \\frac{1}{2}x + 1$', '$y = -\\frac{1}{2}x + 5$'],
      answer: 1,
      solution: 'Parallel means the same slope, $-2$. Only $y = -2x + 5$ has it; the different intercept ($5$ instead of $1$) makes it a genuinely different, parallel line.',
    },
    {
      q: 'What is the slope of a line perpendicular to $y = \\frac{3}{4}x - 2$?',
      choices: ['$-\\frac{3}{4}$', '$\\frac{4}{3}$', '$\\frac{3}{4}$', '$-\\frac{4}{3}$'],
      answer: 3,
      solution: 'Flip $\\frac{3}{4}$ to $\\frac{4}{3}$ and negate: $-\\frac{4}{3}$. Check: $\\frac{3}{4} \\cdot \\left(-\\frac{4}{3}\\right) = -1$. ✓',
    },
    {
      q: 'Where do the lines $y = x + 1$ and $y = 3x - 5$ intersect?',
      choices: ['$(3, 4)$', '$(4, 3)$', '$(2, 3)$', '$(3, -4)$'],
      answer: 0,
      solution: 'Set the right sides equal: $x + 1 = 3x - 5$, so $6 = 2x$ and $x = 3$. Then $y = 3 + 1 = 4$. Check the other line: $3(3) - 5 = 4$. ✓ The intersection is $(3, 4)$.',
    },
    {
      q: 'Which equation describes the SAME line as $2x + 3y = 6$?',
      choices: ['$4x + 6y = 12$', '$2x + 3y = 12$', '$4x + 6y = 6$', '$3x + 2y = 6$'],
      answer: 0,
      solution: 'Multiply every term of $2x + 3y = 6$ by $2$: $4x + 6y = 12$. Same solutions, same line. The others change the balance: $2x + 3y = 12$ is parallel but shifted, and $3x + 2y = 6$ has a different slope entirely.',
    },
    {
      q: 'Lines $m$ and $n$ are shown. Where do they intersect?',
      fig: {
        view: [-4, -3, 5, 5],
        grid: true,
        elems: [
          { t: 'line', a: [-2, -2], b: [2, 2] },
          { t: 'line', a: [-2, 4], b: [3, -1] },
          { t: 'label', p: [3.1, 3.4], text: 'm', dx: 0, dy: 0 },
          { t: 'label', p: [3.8, -1.4], text: 'n', dx: 8, dy: 0 },
        ],
      },
      choices: ['$(0, 2)$', '$(2, 0)$', '$(1, 1)$', '$(0, 0)$'],
      answer: 2,
      solution: 'Line $m$ climbs through $(-2, -2)$ and $(2, 2)$: that is $y = x$. Line $n$ falls through $(-2, 4)$ and $(3, -1)$: slope $-1$ with $y$-intercept $2$, so $y = -x + 2$. Setting $x = -x + 2$ gives $x = 1$, $y = 1$: the lines cross at $(1, 1)$, just as the picture shows.',
    },
    {
      q: 'Which equation describes the line through $(1, 2)$ that is parallel to $y = 5x + 1$?',
      choices: ['$y = 5x - 3$', '$y = 5x + 2$', '$y = -\\frac{1}{5}x + 2$', '$y = 5x + 3$'],
      answer: 0,
      solution: 'Parallel means slope $5$. Through $(1, 2)$: $y - 2 = 5(x - 1)$, so $y = 5x - 3$. Check: at $x = 1$, $y = 5 - 3 = 2$. ✓',
    },
    {
      q: 'Which equation describes the line through the origin perpendicular to $2x + y = 7$?',
      choices: ['$y = -2x$', '$y = 2x$', '$y = \\frac{1}{2}x$', '$y = -\\frac{1}{2}x$'],
      answer: 2,
      solution: 'First find the given slope: $y = -2x + 7$, slope $-2$. The perpendicular slope satisfies $-2m = -1$, so $m = \\frac{1}{2}$. Through the origin, $b = 0$: $y = \\frac{1}{2}x$.',
    },
    {
      q: 'For what value of $k$ are the lines $y = kx + 2$ and $3x + 2y = 8$ perpendicular?',
      choices: ['$-\\frac{2}{3}$', '$\\frac{3}{2}$', '$-\\frac{3}{2}$', '$\\frac{2}{3}$'],
      answer: 3,
      solution: 'Rewrite the second line: $2y = -3x + 8$, so its slope is $-\\frac{3}{2}$. Perpendicular means $k \\cdot \\left(-\\frac{3}{2}\\right) = -1$, so $k = \\frac{2}{3}$. Check: $\\frac{2}{3} \\cdot \\left(-\\frac{3}{2}\\right) = -1$. ✓',
    },
  ],
}

const challenge = [
  {
    q: 'Points $A(-3, 4)$ and $B(5, 4)$ are the endpoints of a segment. What is its midpoint?',
    choices: ['$(1, 4)$', '$(2, 4)$', '$(4, 1)$', '$(1, 0)$'],
    answer: 0,
    solution: 'The segment is horizontal, so keep $y = 4$ and average the $x$-coordinates: $\\frac{-3 + 5}{2} = 1$. The midpoint is $(1, 4)$, exactly $4$ units from each endpoint.',
  },
  {
    q: 'A line passes through $(2, -1)$ and $(6, 7)$. Which of these points is also on it?',
    choices: ['$(4, 3)$', '$(3, 4)$', '$(5, 4)$', '$(4, -3)$'],
    answer: 0,
    solution: 'Slope: $\\frac{7 - (-1)}{6 - 2} = \\frac{8}{4} = 2$, so the line is $y - (-1) = 2(x - 2)$, or $y = 2x - 5$. Test $(4, 3)$: $2(4) - 5 = 3$. ✓ In fact $(4, 3)$ is the midpoint of the two given points.',
  },
  {
    q: 'What is the slope of the line shown?',
    fig: {
      view: [-4, -4, 4, 4],
      grid: true,
      elems: [
        { t: 'line', a: [-2, 3], b: [2, -3] },
        { t: 'point', p: [-2, 3], label: '(-2, 3)', dx: -8, dy: -12 },
        { t: 'point', p: [2, -3], label: '(2, -3)', dx: 10, dy: 12 },
      ],
    },
    choices: ['$\\frac{3}{2}$', '$-\\frac{2}{3}$', '$-\\frac{3}{2}$', '$\\frac{2}{3}$'],
    answer: 2,
    solution: 'Use the marked points $(-2, 3)$ and $(2, -3)$. Rise: $-3 - 3 = -6$. Run: $2 - (-2) = 4$. Slope $= \\frac{-6}{4} = -\\frac{3}{2}$. The line falls steeply to the right, so a negative slope with size bigger than $1$ matches the picture.',
  },
  {
    q: 'The line $5x - 4y = 20$ and the two axes enclose a triangle. What is its area?',
    choices: ['$20$', '$9$', '$10$', '$40$'],
    answer: 2,
    solution: 'The intercepts are the triangle\'s corners: $y = 0$ gives $(4, 0)$, and $x = 0$ gives $(0, -5)$. The legs along the axes have lengths $4$ and $5$, so the area is $\\frac{1}{2} \\cdot 4 \\cdot 5 = 10$.',
  },
  {
    q: 'For what value of $k$ does the point $(k, k + 1)$ lie on the line $2x + y = 10$?',
    choices: ['$\\frac{10}{3}$', '$4$', '$3$', '$2$'],
    answer: 2,
    solution: 'Substitute: $2k + (k + 1) = 10$, so $3k = 9$ and $k = 3$. Check: the point $(3, 4)$ gives $6 + 4 = 10$. ✓',
  },
  {
    q: 'Line $\\ell$ passes through $(0, 6)$ and $(4, 0)$. What is the slope of any line perpendicular to $\\ell$?',
    choices: ['$\\frac{2}{3}$', '$-\\frac{2}{3}$', '$\\frac{3}{2}$', '$-\\frac{3}{2}$'],
    answer: 0,
    solution: 'The slope of $\\ell$ is $\\frac{0 - 6}{4 - 0} = -\\frac{3}{2}$. A perpendicular slope $m$ satisfies $-\\frac{3}{2}m = -1$, so $m = \\frac{2}{3}$ — flip the fraction and flip the sign.',
  },
  {
    q: 'Where do the lines $2x + y = 11$ and $y = x - 1$ intersect?',
    choices: ['$(3, 4)$', '$(5, 4)$', '$(4, 5)$', '$(4, 3)$'],
    answer: 3,
    solution: 'Substitute $y = x - 1$ into the first equation: $2x + (x - 1) = 11$, so $3x = 12$ and $x = 4$. Then $y = 4 - 1 = 3$. Check: $2(4) + 3 = 11$. ✓ The lines cross at $(4, 3)$.',
  },
  {
    q: 'A pool holds $2400$ liters at noon and drains steadily. At 12:08 pm it holds $1800$ liters. At this rate, how long after noon will the pool be empty?',
    choices: ['$24$ minutes', '$32$ minutes', '$40$ minutes', '$30$ minutes'],
    answer: 1,
    solution: 'The drain rate is a slope: $\\frac{1800 - 2400}{8} = -75$ liters per minute. Emptying $2400$ liters takes $\\frac{2400}{75} = 32$ minutes. Check: $32 \\times 75 = 2400$. ✓',
  },
  {
    q: 'A line has $y$-intercept $(0, -3)$ and $x$-intercept $(6, 0)$. Which equation describes it?',
    choices: ['$2x - y = 6$', '$x + 2y = 6$', '$x - 2y = 6$', '$2x + y = -6$'],
    answer: 2,
    solution: 'Test both intercepts in $x - 2y = 6$: the point $(0, -3)$ gives $0 + 6 = 6$ ✓ and $(6, 0)$ gives $6 - 0 = 6$ ✓. In slope-intercept form the line is $y = \\frac{1}{2}x - 3$: climbing $3$ over a run of $6$ from one intercept to the other.',
  },
  {
    q: 'Which equation describes the SAME line as $y = \\frac{2}{3}x + 4$?',
    choices: ['$2x - 3y = -12$', '$2x - 3y = 12$', '$2x + 3y = -12$', '$3x - 2y = -12$'],
    answer: 0,
    solution: 'Clear the fraction: multiply $y = \\frac{2}{3}x + 4$ by $3$ to get $3y = 2x + 12$, which rearranges to $2x - 3y = -12$. Check with the $y$-intercept $(0, 4)$: $0 - 12 = -12$. ✓',
  },
  {
    q: 'A triangle has vertices $(0, 0)$, $(6, 0)$, and $(6, 8)$. What is its perimeter?',
    choices: ['$14$', '$28$', '$48$', '$24$'],
    answer: 3,
    solution: 'Two sides run along grid directions: length $6$ (horizontal) and length $8$ (vertical), meeting at a right angle at $(6, 0)$. The third side is the hypotenuse of a $6$-$8$-$10$ right triangle, so it has length $10$. Perimeter: $6 + 8 + 10 = 24$.',
  },
  {
    q: 'The parallel lines $y = 2x + 3$ and $y = 2x - 5$ never meet. At any given $x$-value, how far is the first line above the second?',
    choices: ['$2$', '$8$', '$-8$', '$4$'],
    answer: 1,
    solution: 'At any $x$, the heights are $2x + 3$ and $2x - 5$. Subtract: $(2x + 3) - (2x - 5) = 8$. The $2x$ terms cancel — that constant vertical gap of $8$ is exactly WHY equal slopes mean the lines never meet.',
  },
]

const worksheet = [
  {
    q: 'In which quadrant does the point $(-7, -2)$ lie?',
    answer: 'Quadrant III',
    solution: 'Both coordinates are negative: left of the $y$-axis and below the $x$-axis. That is the lower-left region, Quadrant III.',
  },
  {
    q: 'Find the distance between the points $(-3, 5)$ and $(9, 5)$.',
    answer: '$12$',
    solution: 'The $y$-coordinates match, so the distance is the gap in $x$: $9 - (-3) = 12$.',
  },
  {
    q: 'Find the midpoint of the segment from $(4, -6)$ to $(4, 10)$.',
    answer: '$(4, 2)$',
    solution: 'The segment is vertical, so keep $x = 4$ and average the $y$-coordinates: $\\frac{-6 + 10}{2} = 2$. The midpoint is $(4, 2)$.',
  },
  {
    q: 'Is the point $(3, -2)$ on the line $4x + 5y = 2$? Explain how you know.',
    answer: 'Yes',
    solution: 'Substitute: $4(3) + 5(-2) = 12 - 10 = 2$, which matches the right side. The point is a solution of the equation, so it is on the line.',
  },
  {
    q: 'Find the $x$-intercept and the $y$-intercept of the line $2x - 5y = 20$.',
    answer: '$x$-intercept $(10, 0)$; $y$-intercept $(0, -4)$',
    solution: 'Set $y = 0$: $2x = 20$, so $x = 10$. Set $x = 0$: $-5y = 20$, so $y = -4$. Watch the sign when dividing by $-5$.',
  },
  {
    q: 'Find the slope of the line through $(-2, 3)$ and $(4, -9)$.',
    answer: '$-2$',
    solution: 'Rise: $-9 - 3 = -12$. Run: $4 - (-2) = 6$. Slope $= \\frac{-12}{6} = -2$.',
  },
  {
    q: 'Find the equation of the line with slope $-\\frac{1}{2}$ that passes through $(6, 1)$. Write your answer in slope-intercept form.',
    answer: '$y = -\\frac{1}{2}x + 4$',
    solution: 'Point-slope: $y - 1 = -\\frac{1}{2}(x - 6)$, so $y = -\\frac{1}{2}x + 3 + 1 = -\\frac{1}{2}x + 4$. Check: at $x = 6$, $y = -3 + 4 = 1$. ✓',
  },
  {
    q: 'A climbing gym charges a one-time fee of $\\$30$ to join, plus $\\$15$ per month. Write an equation for the total cost $C$ after $m$ months, and find the total cost after $8$ months.',
    answer: '$C = 15m + 30$; after $8$ months the total is $\\$150$',
    solution: 'The monthly charge is the slope ($15$ per month) and the joining fee is the starting value, so $C = 15m + 30$. At $m = 8$: $C = 120 + 30 = 150$ dollars.',
  },
  {
    q: 'Find the equation of the line through $(8, 3)$ that is perpendicular to $y = 4x - 1$.',
    answer: '$y = -\\frac{1}{4}x + 5$',
    solution: 'The given slope is $4$, so the perpendicular slope is $-\\frac{1}{4}$ (flip and negate: $4 \\cdot (-\\frac{1}{4}) = -1$). Point-slope: $y - 3 = -\\frac{1}{4}(x - 8)$, so $y = -\\frac{1}{4}x + 2 + 3 = -\\frac{1}{4}x + 5$.',
  },
  {
    q: 'Find the point where the lines $y = 3x - 7$ and $y = -2x + 8$ intersect.',
    answer: '$(3, 2)$',
    solution: 'Set the right sides equal: $3x - 7 = -2x + 8$, so $5x = 15$ and $x = 3$. Then $y = 3(3) - 7 = 2$. Check the other line: $-2(3) + 8 = 2$. ✓',
  },
]

export default {
  id: 'intro-algebra-ch08',
  book: 'intro-algebra',
  number: 8,
  title: 'Graphing Lines',
  intro:
    'Until now, equations have lived in symbols — this chapter gives them pictures. You will see that every linear equation draws a straight line, learn to measure a line\'s steepness with slope, and discover how two numbers, a slope and an intercept, capture everything about a line.',
  sections: [s81, s82, s83, s84, s85, s86],
  challenge,
  worksheet,
}
