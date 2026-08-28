// Introduction to Geometry chapter 17 — variations for section 17.1 (Lines).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is reached twice along routes that share no steps:
//    once by driving the formula (slope, midpoint, distance, negative
//    reciprocal), and once by an independent second route — stepping the line
//    out square by square, halving the trip between two points, scaling a
//    known right triangle, turning a step vector a quarter turn, reading a
//    slope off two intercepts, or setting two squared distances equal.
//  - Figures are coordinate-exact: a point drawn at (4, -1) sits at (4, -1) in
//    the view box. Labels are plain text, never LaTeX, and a figure never
//    carries the very number the question asks for.
//  - Each distractor is one named mistake — putting the run on top, forgetting
//    to halve, forgetting the square root, flipping without negating, using an
//    endpoint instead of the midpoint — and it is named in CAPS.

const s171 = [
  // s1 — the slope of the line through two given points.
  [
    {
      q: 'A ramp is drawn on a coordinate grid so that it passes through $(2, 1)$ and $(4, 9)$. What is the slope of the ramp?',
      fig: {
        view: [0, -2, 6, 12],
        grid: true,
        elems: [
          { t: 'line', a: [1.5, -1], b: [4.5, 11] },
          { t: 'point', p: [2, 1], dx: 14, dy: 4 },
          { t: 'point', p: [4, 9], dx: 14, dy: 4 },
        ],
      },
      choices: ['$\\frac{1}{4}$', '$8$', '$4$', '$-4$'],
      answer: 2,
      solution:
        'Route one, rise over run: subtract both coordinates in the same order, second point minus first. The rise is $9 - 1 = 8$ and the run is $4 - 2 = 2$, so $m = \\frac{8}{2} = 4$ ✓. Check a second, independent way, by stepping the ramp out one square at a time: a line lifts by the same amount on every single step to the right, and the trip from $(2, 1)$ to $(4, 9)$ is two steps right and $8$ up, so one step must lift it $8 \\div 2 = 4$. Stepping right once from $(2, 1)$ reaches $(3, 5)$, and stepping right once more reaches $(4, 9)$ — the second given point exactly, so the climb per step is $4$ ✓. (The choice $\\frac{1}{4}$ is PUTTING THE RUN ON TOP, dividing $2$ by $8$ ✗; the choice $8$ is REPORTING THE RISE ALONE and never dividing by the run ✗; the choice $-4$ is SUBTRACTING THE TWO COORDINATES IN OPPOSITE ORDERS, computing $\\frac{1 - 9}{4 - 2}$ ✗.)',
    },
    {
      q: 'A zip line hangs in a straight path through the points $(-3, 8)$ and $(1, 0)$. What is its slope?',
      fig: {
        view: [-5, -3, 3, 10],
        grid: true,
        elems: [
          { t: 'line', a: [-3.5, 9], b: [2.5, -3] },
          { t: 'point', p: [-3, 8], dx: 14, dy: 4 },
          { t: 'point', p: [1, 0], dx: 14, dy: 12 },
        ],
      },
      choices: ['$-2$', '$2$', '$-8$', '$-\\frac{1}{2}$'],
      answer: 0,
      solution:
        'Route one, rise over run: keep one order throughout, second point minus first. The rise is $0 - 8 = -8$ and the run is $1 - (-3) = 4$, so $m = \\frac{-8}{4} = -2$ ✓. Check a second, independent way, by stepping the path out one square at a time: the whole trip from $(-3, 8)$ to $(1, 0)$ is four steps right and $8$ down, and a straight path drops the same amount on each step, so one step right drops it $8 \\div 4 = 2$. Walking right from $(-3, 8)$ gives $(-2, 6)$, then $(-1, 4)$, then $(0, 2)$, then $(1, 0)$ — the second given point exactly, so each step right costs $2$ of height and the slope is $-2$ ✓. (The choice $2$ is SUBTRACTING THE TWO COORDINATES IN OPPOSITE ORDERS, computing $\\frac{8 - 0}{1 - (-3)}$ and losing the downhill sign ✗; the choice $-8$ is REPORTING THE RISE ALONE and never dividing by the run ✗; the choice $-\\frac{1}{2}$ is PUTTING THE RUN ON TOP, dividing $4$ by $-8$ ✗.)',
    },
    {
      q: 'A rain gutter runs in a straight line through $(-4, -1)$ and $(6, 4)$. What is the slope of the gutter?',
      fig: {
        view: [-6, -3, 8, 6],
        grid: true,
        elems: [
          { t: 'line', a: [-5, -1.5], b: [7, 4.5] },
          { t: 'point', p: [-4, -1], dx: 4, dy: 16 },
          { t: 'point', p: [6, 4], dx: 12, dy: 12 },
        ],
      },
      choices: ['$2$', '$5$', '$-\\frac{1}{2}$', '$\\frac{1}{2}$'],
      answer: 3,
      solution:
        'Route one, rise over run: subtract in one steady order, second point minus first. The rise is $4 - (-1) = 5$ and the run is $6 - (-4) = 10$, so $m = \\frac{5}{10} = \\frac{1}{2}$ ✓. Check a second, independent way, by stepping the gutter out one square at a time: the trip from $(-4, -1)$ to $(6, 4)$ is ten steps right and $5$ up, and a line rises equally on every step, so one step right lifts it $5 \\div 10 = \\frac{1}{2}$. Two steps right therefore lift it a full square: from $(-4, -1)$ that gives $(-2, 0)$, then $(0, 1)$, $(2, 2)$, $(4, 3)$, $(6, 4)$ — the second given point exactly, so the rise per step is $\\frac{1}{2}$ ✓. (The choice $2$ is PUTTING THE RUN ON TOP, dividing $10$ by $5$ ✗; the choice $5$ is REPORTING THE RISE ALONE and never dividing by the run ✗; the choice $-\\frac{1}{2}$ is SUBTRACTING THE TWO COORDINATES IN OPPOSITE ORDERS, computing $\\frac{-1 - 4}{6 - (-4)}$ ✗.)',
    },
  ],
  // s2 — the midpoint of a segment given its two endpoints.
  [
    {
      q: 'A rope bridge is anchored at $(-1, 2)$ and at $(7, 6)$. A lantern hangs at the exact middle of the bridge. Where is the lantern?',
      choices: ['$(6, 8)$', '$(3, 4)$', '$(4, 2)$', '$(3, 8)$'],
      answer: 1,
      solution:
        'Route one, average each coordinate on its own: the middle sits halfway across, at $\\frac{-1 + 7}{2} = \\frac{6}{2} = 3$, and halfway up, at $\\frac{2 + 6}{2} = \\frac{8}{2} = 4$. The lantern hangs at $(3, 4)$ ✓. Check a second, independent way, by walking half the trip: going from $(-1, 2)$ to $(7, 6)$ takes $8$ squares right and $4$ squares up, so the middle is reached after half of each, $4$ right and $2$ up. From $(-1, 2)$ that lands on $(-1 + 4, 2 + 2) = (3, 4)$, and the same half-trip taken again from there gives $(7, 6)$, the far anchor ✓. (The choice $(6, 8)$ is ADDING THE COORDINATES AND FORGETTING TO DIVIDE BY $2$ ✗; the choice $(4, 2)$ is HALVING THE DIFFERENCES INSTEAD OF THE SUMS, taking $\\frac{7 - (-1)}{2}$ and $\\frac{6 - 2}{2}$, which measures the half-trip rather than naming the point ✗; the choice $(3, 8)$ is AVERAGING THE FIRST COORDINATES BUT ONLY ADDING THE SECOND ONES ✗.)',
    },
    {
      q: 'On a map, a hiking trail runs straight from a campsite at $(-5, 2)$ to a lookout at $(3, 10)$. A water station stands at the midpoint of the trail. What are its coordinates?',
      choices: ['$(-2, 12)$', '$(4, 4)$', '$(-1, 12)$', '$(-1, 6)$'],
      answer: 3,
      solution:
        'Route one, average each coordinate on its own: across, $\\frac{-5 + 3}{2} = \\frac{-2}{2} = -1$; up, $\\frac{2 + 10}{2} = \\frac{12}{2} = 6$. The water station stands at $(-1, 6)$ ✓. Check a second, independent way, by walking half the trip: from the campsite to the lookout is $8$ squares right and $8$ squares up, so half the trip is $4$ right and $4$ up. From $(-5, 2)$ that reaches $(-5 + 4, 2 + 4) = (-1, 6)$, and repeating the half-trip from there reaches $(3, 10)$, the lookout ✓. (The choice $(-2, 12)$ is ADDING THE COORDINATES AND FORGETTING TO DIVIDE BY $2$ ✗; the choice $(4, 4)$ is HALVING THE DIFFERENCES INSTEAD OF THE SUMS, taking $\\frac{3 - (-5)}{2}$ and $\\frac{10 - 2}{2}$, which describes the half-trip and not the place ✗; the choice $(-1, 12)$ is AVERAGING THE FIRST COORDINATES BUT ONLY ADDING THE SECOND ONES ✗.)',
    },
    {
      q: 'A submarine cable is laid straight from a buoy at $(10, -7)$ to a buoy at $(2, 3)$. A repeater box sits at the midpoint of the cable. Where is the repeater box?',
      choices: ['$(12, -4)$', '$(4, -5)$', '$(6, -2)$', '$(6, -4)$'],
      answer: 2,
      solution:
        'Route one, average each coordinate on its own: across, $\\frac{10 + 2}{2} = \\frac{12}{2} = 6$; up, $\\frac{-7 + 3}{2} = \\frac{-4}{2} = -2$. The repeater box sits at $(6, -2)$ ✓. Check a second, independent way, by walking half the trip: the cable runs $8$ squares left and $10$ squares up, so half of it is $4$ left and $5$ up. From $(10, -7)$ that lands on $(10 - 4, -7 + 5) = (6, -2)$, and the same half-trip again lands on $(2, 3)$, the far buoy ✓. (The choice $(12, -4)$ is ADDING THE COORDINATES AND FORGETTING TO DIVIDE BY $2$ ✗; the choice $(4, -5)$ is HALVING THE DIFFERENCES INSTEAD OF THE SUMS, taking $\\frac{10 - 2}{2}$ and $\\frac{-7 - 3}{2}$ ✗; the choice $(6, -4)$ is AVERAGING THE FIRST COORDINATES BUT ONLY ADDING THE SECOND ONES ✗.)',
    },
  ],
  // s3 — the distance from the origin to a lattice point.
  [
    {
      q: 'A kite is flown from a stake at the origin, and its tip sits at the point $(15, 20)$. How far is the tip from the stake?',
      choices: ['$625$', '$35$', '$\\sqrt{35}$', '$25$'],
      answer: 3,
      solution:
        'Route one, build the right triangle and use the Pythagorean Theorem: walk $15$ right from the origin, then $20$ up. Those two legs meet at a right angle and the string is the hypotenuse, so its length squared is $15^2 + 20^2 = 225 + 400 = 625$, and the length itself is $\\sqrt{625} = 25$ ✓. Check a second, independent way, by scaling a triangle you already know: $15 = 5 \\cdot 3$ and $20 = 5 \\cdot 4$, so this triangle is a $3$–$4$–$5$ right triangle with every side stretched by a factor of $5$. Stretching multiplies every length by the same factor, so the hypotenuse is $5 \\cdot 5 = 25$ ✓. (The choice $625$ is FORGETTING THE SQUARE ROOT and reporting the distance squared ✗; the choice $35$ is ADDING THE TWO LEGS, which measures the bent path along the legs rather than the straight string ✗; the choice $\\sqrt{35}$ is ADDING THE COORDINATES BEFORE THE SQUARE ROOT instead of adding their squares ✗.)',
    },
    {
      q: 'A drone lifts off from the origin of a coordinate map and hovers above the point $(8, 15)$. How far from the origin is that point?',
      choices: ['$289$', '$17$', '$23$', '$\\sqrt{23}$'],
      answer: 1,
      solution:
        'Route one, build the right triangle and use the Pythagorean Theorem: the legs from the origin measure $8$ across and $15$ up, so the straight-line distance $d$ satisfies $d^2 = 8^2 + 15^2 = 64 + 225 = 289$, and $d = \\sqrt{289} = 17$ ✓. Check a second, independent way, by squeezing the answer between two bounds: a hypotenuse is always longer than either leg and always shorter than the two legs added together, so $d$ lies strictly between $15$ and $23$. Of the four candidates only $17$ sits in that window, and squaring it confirms the fit, since $17^2 = 289$ matches $64 + 225$ exactly ✓. (The choice $289$ is FORGETTING THE SQUARE ROOT and reporting the distance squared ✗; the choice $23$ is ADDING THE TWO LEGS, the length of the bent path along the axes ✗; the choice $\\sqrt{23}$ is ADDING THE COORDINATES BEFORE THE SQUARE ROOT instead of adding their squares ✗.)',
    },
    {
      q: 'A searchlight stands at the origin and shines on a marker at $(10, 24)$. How long is the beam?',
      choices: ['$26$', '$676$', '$34$', '$\\sqrt{34}$'],
      answer: 0,
      solution:
        'Route one, build the right triangle and use the Pythagorean Theorem: the legs measure $10$ across and $24$ up, so the beam length $d$ satisfies $d^2 = 10^2 + 24^2 = 100 + 576 = 676$, giving $d = \\sqrt{676} = 26$ ✓. Check a second, independent way, by scaling a triangle you already know: $10 = 2 \\cdot 5$ and $24 = 2 \\cdot 12$, so this is a $5$–$12$–$13$ right triangle with every side doubled. Doubling every side doubles the hypotenuse, so the beam is $2 \\cdot 13 = 26$ ✓. (The choice $676$ is FORGETTING THE SQUARE ROOT and reporting the length squared ✗; the choice $34$ is ADDING THE TWO LEGS, which measures the bent path along the axes and not the beam ✗; the choice $\\sqrt{34}$ is ADDING THE COORDINATES BEFORE THE SQUARE ROOT instead of adding their squares ✗.)',
    },
  ],
  // s4 — the distance between two points, with a negative coordinate in the run.
  [
    {
      q: 'What is the distance between $(-4, 1)$ and $(5, 13)$?',
      fig: {
        view: [-6, -1, 7, 15],
        grid: true,
        elems: [
          { t: 'seg', a: [-4, 1], b: [5, 13] },
          { t: 'seg', a: [-4, 1], b: [5, 1], dash: true },
          { t: 'seg', a: [5, 1], b: [5, 13], dash: true },
          { t: 'right', at: [5, 1], from: [-4, 1], to: [5, 13] },
          { t: 'point', p: [-4, 1], dx: -12, dy: 10 },
          { t: 'point', p: [5, 13], dx: 12, dy: -6 },
        ],
      },
      choices: ['$\\sqrt{145}$', '$15$', '$225$', '$21$'],
      answer: 1,
      solution:
        'Route one, run the distance formula: the run is $5 - (-4) = 9$ and the rise is $13 - 1 = 12$, so $d = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$ ✓. Check a second, independent way, by scaling a triangle you already know: the legs $9$ and $12$ are $3 \\cdot 3$ and $3 \\cdot 4$, so the dashed right triangle is a $3$–$4$–$5$ triangle with every side tripled, and its hypotenuse is $3 \\cdot 5 = 15$ ✓. (The choice $\\sqrt{145}$ is DROPPING THE MINUS SIGN IN THE RUN, treating it as $5 - 4 = 1$ and computing $\\sqrt{1 + 144}$ ✗; the choice $225$ is FORGETTING THE SQUARE ROOT and reporting the distance squared ✗; the choice $21$ is ADDING THE TWO LEGS instead of using them as legs of a right triangle ✗.)',
    },
    {
      q: 'A tunnel is bored in a straight line from $(-3, -2)$ to $(9, 14)$ on a survey grid. How long is the tunnel?',
      fig: {
        view: [-5, -4, 11, 16],
        grid: true,
        elems: [
          { t: 'seg', a: [-3, -2], b: [9, 14] },
          { t: 'seg', a: [-3, -2], b: [9, -2], dash: true },
          { t: 'seg', a: [9, -2], b: [9, 14], dash: true },
          { t: 'right', at: [9, -2], from: [-3, -2], to: [9, 14] },
          { t: 'point', p: [-3, -2], dx: -12, dy: 10 },
          { t: 'point', p: [9, 14], dx: 12, dy: -6 },
        ],
      },
      choices: ['$2\\sqrt{73}$', '$400$', '$28$', '$20$'],
      answer: 3,
      solution:
        'Route one, run the distance formula: the run is $9 - (-3) = 12$ and the rise is $14 - (-2) = 16$, so $d = \\sqrt{12^2 + 16^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20$ ✓. Check a second, independent way, by scaling a triangle you already know: the legs $12$ and $16$ are $4 \\cdot 3$ and $4 \\cdot 4$, so the dashed right triangle is a $3$–$4$–$5$ triangle with every side multiplied by $4$, and its hypotenuse is $4 \\cdot 5 = 20$ ✓. (The choice $2\\sqrt{73}$ is DROPPING THE MINUS SIGN IN THE RUN, treating it as $9 - 3 = 6$ and computing $\\sqrt{36 + 256}$ ✗; the choice $400$ is FORGETTING THE SQUARE ROOT and reporting the length squared ✗; the choice $28$ is ADDING THE TWO LEGS, which measures the bent path around the corner ✗.)',
    },
    {
      q: 'A cable car travels in a straight line from a station at $(-8, 4)$ to a station at $(12, 25)$. How far does it travel?',
      choices: ['$841$', '$41$', '$29$', '$\\sqrt{457}$'],
      answer: 2,
      solution:
        'Route one, run the distance formula: the run is $12 - (-8) = 20$ and the rise is $25 - 4 = 21$, so $d = \\sqrt{20^2 + 21^2} = \\sqrt{400 + 441} = \\sqrt{841} = 29$ ✓. Check a second, independent way, by squeezing the answer between two bounds and then testing it: the straight route is longer than either leg of the right triangle and shorter than both legs walked in turn, so it lies strictly between $21$ and $41$. That rules out $841$ and $41$ at once and leaves $29$ and $\\sqrt{457}$, and squaring settles which: $29^2 = 841$ agrees with $400 + 441$ on the nose, while $457$ does not ✓. (The choice $841$ is FORGETTING THE SQUARE ROOT and reporting the distance squared ✗; the choice $41$ is ADDING THE TWO LEGS instead of treating them as legs of a right triangle ✗; the choice $\\sqrt{457}$ is DROPPING THE MINUS SIGN IN THE RUN, treating it as $12 - 8 = 4$ and computing $\\sqrt{16 + 441}$ ✗.)',
    },
  ],
  // s5 — the slope of a line perpendicular to a given line.
  [
    {
      q: 'A line is perpendicular to $y = -4x + 7$. What is its slope?',
      choices: ['$\\frac{1}{4}$', '$-\\frac{1}{4}$', '$4$', '$-4$'],
      answer: 0,
      solution:
        'Route one, take the negative reciprocal: the given line has slope $-4 = -\\frac{4}{1}$. Flipping it gives $-\\frac{1}{4}$, and negating that gives $\\frac{1}{4}$. The product test confirms it: $(-4) \\cdot \\frac{1}{4} = -1$ ✓. Check a second, independent way, by turning a step arrow a quarter turn: from any point on the given line, going $1$ square right and $4$ squares down keeps you on it. Turn that arrow a quarter turn counterclockwise and the $1$ across becomes $1$ up while the $4$ down becomes $4$ across, so the turned arrow goes $4$ right and $1$ up. An arrow of $4$ right and $1$ up has rise over run equal to $\\frac{1}{4}$ ✓. (The choice $-\\frac{1}{4}$ is FLIPPING THE SLOPE WITHOUT NEGATING IT ✗; the choice $4$ is NEGATING THE SLOPE WITHOUT FLIPPING IT ✗; the choice $-4$ is COPYING THE GIVEN SLOPE UNCHANGED, which describes a parallel line rather than a perpendicular one ✗.)',
    },
    {
      q: 'A road is laid perpendicular to the road $y = \\frac{2}{5}x - 3$. What is the slope of the new road?',
      choices: ['$\\frac{5}{2}$', '$-\\frac{2}{5}$', '$-\\frac{5}{2}$', '$\\frac{2}{5}$'],
      answer: 2,
      solution:
        'Route one, take the negative reciprocal: the given road has slope $\\frac{2}{5}$. Flipping it gives $\\frac{5}{2}$, and negating that gives $-\\frac{5}{2}$. The product test confirms it: $\\frac{2}{5} \\cdot \\left(-\\frac{5}{2}\\right) = -1$ ✓. Check a second, independent way, by turning a step arrow a quarter turn: travelling $5$ squares right and $2$ squares up keeps you on the given road. Turn that arrow a quarter turn counterclockwise: the $5$ across becomes $5$ up and the $2$ up becomes $2$ left, so the turned arrow goes $2$ left and $5$ up. Its rise over run is $\\frac{5}{-2} = -\\frac{5}{2}$ ✓. (The choice $\\frac{5}{2}$ is FLIPPING THE SLOPE WITHOUT NEGATING IT ✗; the choice $-\\frac{2}{5}$ is NEGATING THE SLOPE WITHOUT FLIPPING IT ✗; the choice $\\frac{2}{5}$ is COPYING THE GIVEN SLOPE UNCHANGED, which builds a parallel road instead of a perpendicular one ✗.)',
    },
    {
      q: 'A fence post line is perpendicular to $y = -\\frac{2}{3}x + 5$. What is the slope of the fence post line?',
      choices: ['$-\\frac{3}{2}$', '$\\frac{3}{2}$', '$\\frac{2}{3}$', '$-\\frac{2}{3}$'],
      answer: 1,
      solution:
        'Route one, take the negative reciprocal: the given line has slope $-\\frac{2}{3}$. Flipping it gives $-\\frac{3}{2}$, and negating that gives $\\frac{3}{2}$. The product test confirms it: $\\left(-\\frac{2}{3}\\right) \\cdot \\frac{3}{2} = -1$ ✓. Check a second, independent way, by turning a step arrow a quarter turn: going $3$ squares right and $2$ squares down keeps you on the given line. Turn that arrow a quarter turn counterclockwise: the $3$ across becomes $3$ up and the $2$ down becomes $2$ across, so the turned arrow goes $2$ right and $3$ up. Its rise over run is $\\frac{3}{2}$ ✓. (The choice $-\\frac{3}{2}$ is FLIPPING THE SLOPE WITHOUT NEGATING IT ✗; the choice $\\frac{2}{3}$ is NEGATING THE SLOPE WITHOUT FLIPPING IT ✗; the choice $-\\frac{2}{3}$ is COPYING THE GIVEN SLOPE UNCHANGED, the slope of a parallel line ✗.)',
    },
  ],
  // s6 — pick the line parallel to one given in standard form.
  [
    {
      q: 'Which line is parallel to the line $3x + 4y = 24$?',
      choices: ['$y = \\frac{4}{3}x + 5$', '$y = \\frac{3}{4}x + 5$', '$y = -\\frac{3}{4}x + 5$', '$y = -\\frac{4}{3}x + 5$'],
      answer: 2,
      solution:
        'Route one, solve for $y$ and read the slope: from $3x + 4y = 24$ we get $4y = -3x + 24$, so $y = -\\frac{3}{4}x + 6$ and the slope is $-\\frac{3}{4}$. Parallel lines carry the identical slope, and the only choice with slope $-\\frac{3}{4}$ is $y = -\\frac{3}{4}x + 5$ ✓. Check a second, independent way, by reading the slope off two points of the given line: setting $y = 0$ gives $3x = 24$, so $(8, 0)$ is on it, and setting $x = 0$ gives $4y = 24$, so $(0, 6)$ is on it. The slope through those two points is $\\frac{6 - 0}{0 - 8} = -\\frac{3}{4}$, matching $y = -\\frac{3}{4}x + 5$ ✓. (The choice $y = \\frac{4}{3}x + 5$ is USING THE NEGATIVE RECIPROCAL, the slope of a perpendicular line ✗; the choice $y = \\frac{3}{4}x + 5$ is DROPPING THE MINUS SIGN when dividing $-3x$ by $4$ ✗; the choice $y = -\\frac{4}{3}x + 5$ is FLIPPING THE FRACTION, reading run over rise ✗.)',
    },
    {
      q: 'Which line is parallel to the line $2x - 5y = 20$?',
      choices: ['$y = \\frac{2}{5}x - 1$', '$y = -\\frac{2}{5}x - 1$', '$y = \\frac{5}{2}x - 1$', '$y = -\\frac{5}{2}x - 1$'],
      answer: 0,
      solution:
        'Route one, solve for $y$ and read the slope: from $2x - 5y = 20$ we get $-5y = -2x + 20$, and dividing every term by $-5$ gives $y = \\frac{2}{5}x - 4$, so the slope is $\\frac{2}{5}$. A parallel line must carry that same slope, and the only choice that does is $y = \\frac{2}{5}x - 1$ ✓. Check a second, independent way, by reading the slope off two points of the given line: setting $y = 0$ gives $2x = 20$, so $(10, 0)$ is on it, and setting $x = 0$ gives $-5y = 20$, so $(0, -4)$ is on it. The slope through those two points is $\\frac{-4 - 0}{0 - 10} = \\frac{2}{5}$, matching $y = \\frac{2}{5}x - 1$ ✓. (The choice $y = -\\frac{2}{5}x - 1$ is MISHANDLING THE DIVISION BY A NEGATIVE, since $-2x$ divided by $-5$ is positive ✗; the choice $y = \\frac{5}{2}x - 1$ is FLIPPING THE FRACTION, reading run over rise ✗; the choice $y = -\\frac{5}{2}x - 1$ is USING THE NEGATIVE RECIPROCAL, the slope of a perpendicular line ✗.)',
    },
    {
      q: 'Which line is parallel to the line $5x + 2y = 20$?',
      choices: ['$y = \\frac{5}{2}x + 3$', '$y = \\frac{2}{5}x + 3$', '$y = -\\frac{2}{5}x + 3$', '$y = -\\frac{5}{2}x + 3$'],
      answer: 3,
      solution:
        'Route one, solve for $y$ and read the slope: from $5x + 2y = 20$ we get $2y = -5x + 20$, so $y = -\\frac{5}{2}x + 10$ and the slope is $-\\frac{5}{2}$. Parallel lines share that slope exactly, and the only choice with it is $y = -\\frac{5}{2}x + 3$ ✓. Check a second, independent way, by reading the slope off two points of the given line: setting $y = 0$ gives $5x = 20$, so $(4, 0)$ is on it, and setting $x = 0$ gives $2y = 20$, so $(0, 10)$ is on it. The slope through those two points is $\\frac{10 - 0}{0 - 4} = -\\frac{5}{2}$, matching $y = -\\frac{5}{2}x + 3$ ✓. (The choice $y = \\frac{5}{2}x + 3$ is DROPPING THE MINUS SIGN when dividing $-5x$ by $2$ ✗; the choice $y = \\frac{2}{5}x + 3$ is USING THE NEGATIVE RECIPROCAL, the slope of a perpendicular line ✗; the choice $y = -\\frac{2}{5}x + 3$ is FLIPPING THE FRACTION, reading run over rise ✗.)',
    },
  ],
  // s7 — recover the far endpoint from one endpoint and the midpoint.
  [
    {
      q: 'The midpoint of $\\overline{PQ}$ is $M = (5, 3)$, and $P = (1, 5)$. What is $Q$?',
      choices: ['$(3, 4)$', '$(-3, 7)$', '$(6, 8)$', '$(9, 1)$'],
      answer: 3,
      solution:
        'Route one, take the step from $P$ to $M$ and take it again: going from $(1, 5)$ to $(5, 3)$ is a step of $4$ right and $2$ down. The midpoint is exactly halfway, so the second half of the trip is the same step once more: $Q = (5 + 4, 3 - 2) = (9, 1)$ ✓. Check a second, independent way, by solving the midpoint equations: writing $Q = (q_1, q_2)$, the midpoint rule demands $\\frac{1 + q_1}{2} = 5$ and $\\frac{5 + q_2}{2} = 3$. The first gives $1 + q_1 = 10$, so $q_1 = 9$; the second gives $5 + q_2 = 6$, so $q_2 = 1$. That is $Q = (9, 1)$ ✓. (The choice $(3, 4)$ is TAKING THE MIDPOINT OF $P$ AND $M$, which is halfway to halfway ✗; the choice $(-3, 7)$ is DOUBLING THE WRONG POINT, computing $2P - M$ as though $P$ were the middle ✗; the choice $(6, 8)$ is ADDING $P$ AND $M$ COORDINATE BY COORDINATE instead of doubling $M$ and subtracting $P$ ✗.)',
    },
    {
      q: 'A seesaw balances on a pivot at $M = (2, 6)$, which is the midpoint of the plank $\\overline{PQ}$. One end sits at $P = (6, 4)$. Where is the other end $Q$?',
      choices: ['$(4, 5)$', '$(-2, 8)$', '$(10, 2)$', '$(8, 10)$'],
      answer: 1,
      solution:
        'Route one, take the step from $P$ to $M$ and take it again: going from $(6, 4)$ to $(2, 6)$ is a step of $4$ left and $2$ up. The pivot is exactly halfway along the plank, so repeating that step reaches the far end: $Q = (2 - 4, 6 + 2) = (-2, 8)$ ✓. Check a second, independent way, by solving the midpoint equations: writing $Q = (q_1, q_2)$, the midpoint rule demands $\\frac{6 + q_1}{2} = 2$ and $\\frac{4 + q_2}{2} = 6$. The first gives $6 + q_1 = 4$, so $q_1 = -2$; the second gives $4 + q_2 = 12$, so $q_2 = 8$. That is $Q = (-2, 8)$ ✓. (The choice $(4, 5)$ is TAKING THE MIDPOINT OF $P$ AND $M$, only half as far as the far end ✗; the choice $(10, 2)$ is DOUBLING THE WRONG POINT, computing $2P - M$ as though $P$ were the pivot ✗; the choice $(8, 10)$ is ADDING $P$ AND $M$ COORDINATE BY COORDINATE instead of doubling $M$ and subtracting $P$ ✗.)',
    },
    {
      q: 'A straight fence runs from a post $P = (2, 5)$ to a post $Q$, and the gate at its midpoint is at $M = (6, 1)$. What are the coordinates of $Q$?',
      choices: ['$(10, -3)$', '$(4, 3)$', '$(-2, 9)$', '$(8, 6)$'],
      answer: 0,
      solution:
        'Route one, take the step from $P$ to $M$ and take it again: going from $(2, 5)$ to $(6, 1)$ is a step of $4$ right and $4$ down. The gate stands exactly halfway along the fence, so one more identical step reaches the far post: $Q = (6 + 4, 1 - 4) = (10, -3)$ ✓. Check a second, independent way, by solving the midpoint equations: writing $Q = (q_1, q_2)$, the midpoint rule demands $\\frac{2 + q_1}{2} = 6$ and $\\frac{5 + q_2}{2} = 1$. The first gives $2 + q_1 = 12$, so $q_1 = 10$; the second gives $5 + q_2 = 2$, so $q_2 = -3$. That is $Q = (10, -3)$ ✓. (The choice $(4, 3)$ is TAKING THE MIDPOINT OF $P$ AND $M$, which stops halfway to the gate’s own halfway ✗; the choice $(-2, 9)$ is DOUBLING THE WRONG POINT, computing $2P - M$ as though $P$ were the gate ✗; the choice $(8, 6)$ is ADDING $P$ AND $M$ COORDINATE BY COORDINATE instead of doubling $M$ and subtracting $P$ ✗.)',
    },
  ],
  // s8 — the equation of a perpendicular bisector.
  [
    {
      q: 'What is the equation of the perpendicular bisector of the segment from $(2, 1)$ to $(4, 7)$?',
      fig: {
        view: [-1, 0, 8, 8],
        grid: true,
        elems: [
          { t: 'seg', a: [2, 1], b: [4, 7] },
          { t: 'line', a: [0, 5], b: [6, 3] },
          { t: 'point', p: [2, 1], dx: -10, dy: -8 },
          { t: 'point', p: [4, 7], dx: 12, dy: -6 },
          { t: 'point', p: [3, 4], label: 'M', dx: 12, dy: 12 },
        ],
      },
      choices: ['$y = -\\frac{1}{3}x + 5$', '$y = \\frac{1}{3}x + 3$', '$y = 3x - 5$', '$y = -\\frac{1}{3}x + \\frac{5}{3}$'],
      answer: 0,
      solution:
        'Route one, gather the midpoint and the perpendicular slope: the midpoint is $\\left(\\frac{2 + 4}{2}, \\frac{1 + 7}{2}\\right) = (3, 4)$, and the segment’s slope is $\\frac{7 - 1}{4 - 2} = 3$, so the bisector’s slope is $-\\frac{1}{3}$. Point-slope form gives $y - 4 = -\\frac{1}{3}(x - 3)$, which tidies to $y = -\\frac{1}{3}x + 5$ ✓. Check a second, independent way, from the equal-distance description: the perpendicular bisector is exactly the set of points the same distance from both endpoints, so set the squared distances equal: $(x - 2)^2 + (y - 1)^2 = (x - 4)^2 + (y - 7)^2$. Expanding gives $x^2 - 4x + 4 + y^2 - 2y + 1 = x^2 - 8x + 16 + y^2 - 14y + 49$, so $-4x - 2y + 5 = -8x - 14y + 65$, hence $4x + 12y = 60$, or $x + 3y = 15$, which is $y = -\\frac{1}{3}x + 5$ ✓. (The choice $y = \\frac{1}{3}x + 3$ is FLIPPING THE SLOPE WITHOUT NEGATING IT, though it does pass through the midpoint ✗; the choice $y = 3x - 5$ is KEEPING THE SEGMENT’S OWN SLOPE, which draws the line containing the segment rather than its bisector ✗; the choice $y = -\\frac{1}{3}x + \\frac{5}{3}$ is USING THE ENDPOINT $(2, 1)$ INSTEAD OF THE MIDPOINT with the right slope ✗.)',
    },
    {
      q: 'A water pipe must be laid so that every point of it is equally far from a well at $(7, 2)$ and a well at $(1, 6)$. What is the equation of the pipe?',
      fig: {
        view: [-1, -3, 9, 8],
        grid: true,
        elems: [
          { t: 'seg', a: [7, 2], b: [1, 6] },
          { t: 'line', a: [0, -2], b: [6, 7] },
          { t: 'point', p: [7, 2], dx: 12, dy: 6 },
          { t: 'point', p: [1, 6], dx: -10, dy: -8 },
          { t: 'point', p: [4, 4], label: 'M', dx: 14, dy: 10 },
        ],
      },
      choices: ['$y = -\\frac{3}{2}x + 10$', '$y = -\\frac{2}{3}x + \\frac{20}{3}$', '$y = \\frac{3}{2}x - 2$', '$y = \\frac{3}{2}x + \\frac{9}{2}$'],
      answer: 2,
      solution:
        'Route one, gather the midpoint and the perpendicular slope: the pipe is the perpendicular bisector of the segment joining the wells. Its midpoint is $\\left(\\frac{7 + 1}{2}, \\frac{2 + 6}{2}\\right) = (4, 4)$, and the segment’s slope is $\\frac{6 - 2}{1 - 7} = -\\frac{2}{3}$, so the pipe’s slope is $\\frac{3}{2}$. Point-slope form gives $y - 4 = \\frac{3}{2}(x - 4)$, which tidies to $y = \\frac{3}{2}x - 2$ ✓. Check a second, independent way, straight from the equal-distance condition: set $(x - 7)^2 + (y - 2)^2 = (x - 1)^2 + (y - 6)^2$. Expanding gives $-14x + 49 - 4y + 4 = -2x + 1 - 12y + 36$, so $-14x - 4y + 53 = -2x - 12y + 37$, hence $8y = 12x - 16$, or $y = \\frac{3}{2}x - 2$ ✓. (The choice $y = -\\frac{3}{2}x + 10$ is FLIPPING THE SLOPE WITHOUT NEGATING IT, still through the midpoint ✗; the choice $y = -\\frac{2}{3}x + \\frac{20}{3}$ is KEEPING THE SEGMENT’S OWN SLOPE, which joins the wells rather than staying equally far from both ✗; the choice $y = \\frac{3}{2}x + \\frac{9}{2}$ is USING THE ENDPOINT $(1, 6)$ INSTEAD OF THE MIDPOINT with the right slope ✗.)',
    },
    {
      q: 'What is the equation of the perpendicular bisector of the segment from $(1, 2)$ to $(5, 4)$?',
      fig: {
        view: [-1, -2, 7, 10],
        grid: true,
        elems: [
          { t: 'seg', a: [1, 2], b: [5, 4] },
          { t: 'line', a: [0, 9], b: [5, -1] },
          { t: 'point', p: [1, 2], dx: -10, dy: 10 },
          { t: 'point', p: [5, 4], dx: 12, dy: 8 },
          { t: 'point', p: [3, 3], label: 'M', dx: 14, dy: 10 },
        ],
      },
      choices: ['$y = 2x - 3$', '$y = -2x + 9$', '$y = \\frac{1}{2}x + \\frac{3}{2}$', '$y = -2x + 4$'],
      answer: 1,
      solution:
        'Route one, gather the midpoint and the perpendicular slope: the midpoint is $\\left(\\frac{1 + 5}{2}, \\frac{2 + 4}{2}\\right) = (3, 3)$, and the segment’s slope is $\\frac{4 - 2}{5 - 1} = \\frac{1}{2}$, so the bisector’s slope is $-2$. Point-slope form gives $y - 3 = -2(x - 3)$, which tidies to $y = -2x + 9$ ✓. Check a second, independent way, from the equal-distance description: a point is on the bisector exactly when it is the same distance from both endpoints, so set $(x - 1)^2 + (y - 2)^2 = (x - 5)^2 + (y - 4)^2$. Expanding gives $-2x + 1 - 4y + 4 = -10x + 25 - 8y + 16$, so $-2x - 4y + 5 = -10x - 8y + 41$, hence $8x + 4y = 36$, or $2x + y = 9$, which is $y = -2x + 9$ ✓. (The choice $y = 2x - 3$ is FLIPPING THE SLOPE WITHOUT NEGATING IT, though it does run through the midpoint ✗; the choice $y = \\frac{1}{2}x + \\frac{3}{2}$ is KEEPING THE SEGMENT’S OWN SLOPE, the line that contains the segment ✗; the choice $y = -2x + 4$ is USING THE ENDPOINT $(1, 2)$ INSTEAD OF THE MIDPOINT with the right slope ✗.)',
    },
  ],
  // s9 — locate the right angle of a triangle from its vertices.
  [
    {
      q: 'Triangle $ABC$ has vertices $A = (0, 0)$, $B = (8, 4)$, and $C = (3, -6)$. At which vertex is the right angle?',
      fig: {
        view: [-1, -7, 9, 5],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 4], [3, -6]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: -6 },
          { t: 'point', p: [8, 4], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [3, -6], label: 'C', dx: 4, dy: 16 },
        ],
      },
      choices: ['$B$', '$C$', '$A$', 'There is no right angle'],
      answer: 2,
      solution:
        'Route one, multiply slopes at each corner: $\\overline{AB}$ has slope $\\frac{4 - 0}{8 - 0} = \\frac{1}{2}$, $\\overline{AC}$ has slope $\\frac{-6 - 0}{3 - 0} = -2$, and $\\overline{BC}$ has slope $\\frac{-6 - 4}{3 - 8} = 2$. The pair meeting at $A$ multiplies to $\\frac{1}{2} \\cdot (-2) = -1$, so those two sides are perpendicular and the right angle sits at $A$ ✓. Check a second, independent way, with squared side lengths: $AB^2 = 8^2 + 4^2 = 80$, $AC^2 = 3^2 + 6^2 = 45$, and $BC^2 = 5^2 + 10^2 = 125$. Since $80 + 45 = 125$, the converse of the Pythagorean Theorem makes $\\overline{BC}$ the hypotenuse, and the right angle is at the vertex $\\overline{BC}$ misses, namely $A$ ✓. (The choice $B$ is ACCEPTING A SLOPE PRODUCT OF $+1$, since at $B$ the slopes $\\frac{1}{2}$ and $2$ multiply to $1$ rather than $-1$ ✗; the choice $C$ is READING ONE SLOPE AS RUN OVER RISE, since flipping $-2$ into $-\\frac{1}{2}$ makes the corner at $C$ look perpendicular ✗; the choice that there is no right angle is TESTING ONLY THE CORNERS $B$ AND $C$ and never the pair of sides that meets at $A$ ✗.)',
    },
    {
      q: 'Triangle $ABC$ has vertices $A = (0, 4)$, $B = (5, -6)$, and $C = (-3, -2)$. At which vertex is the right angle?',
      fig: {
        view: [-4, -7, 6, 5],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 4], [5, -6], [-3, -2]], fill: false },
          { t: 'point', p: [0, 4], label: 'A', dx: 4, dy: -10 },
          { t: 'point', p: [5, -6], label: 'B', dx: 12, dy: 8 },
          { t: 'point', p: [-3, -2], label: 'C', dx: -14, dy: 0 },
        ],
      },
      choices: ['$C$', '$A$', '$B$', 'There is no right angle'],
      answer: 0,
      solution:
        'Route one, multiply slopes at each corner: $\\overline{CA}$ has slope $\\frac{4 - (-2)}{0 - (-3)} = 2$, $\\overline{CB}$ has slope $\\frac{-6 - (-2)}{5 - (-3)} = -\\frac{1}{2}$, and $\\overline{AB}$ has slope $\\frac{-6 - 4}{5 - 0} = -2$. The pair meeting at $C$ multiplies to $2 \\cdot \\left(-\\frac{1}{2}\\right) = -1$, so the right angle sits at $C$ ✓. Check a second, independent way, with squared side lengths: $CA^2 = 3^2 + 6^2 = 45$, $CB^2 = 8^2 + 4^2 = 80$, and $AB^2 = 5^2 + 10^2 = 125$. Since $45 + 80 = 125$, the converse of the Pythagorean Theorem makes $\\overline{AB}$ the hypotenuse, and the right angle belongs to the vertex $\\overline{AB}$ leaves out, namely $C$ ✓. (The choice $B$ is ACCEPTING A SLOPE PRODUCT OF $+1$, since at $B$ the slopes $-\\frac{1}{2}$ and $-2$ multiply to $1$ rather than $-1$ ✗; the choice $A$ is READING ONE SLOPE AS RUN OVER RISE, since flipping the slope $2$ of $\\overline{AC}$ into $\\frac{1}{2}$ makes the corner at $A$ look perpendicular ✗; the choice that there is no right angle is TESTING ONLY THE CORNERS $A$ AND $B$ and never the pair of sides that meets at $C$ ✗.)',
    },
    {
      q: 'Triangle $ABC$ has vertices $A = (5, 6)$, $B = (1, -2)$, and $C = (-5, 1)$. At which vertex is the right angle?',
      fig: {
        view: [-6, -3, 6, 7],
        grid: true,
        elems: [
          { t: 'poly', pts: [[5, 6], [1, -2], [-5, 1]], fill: false },
          { t: 'point', p: [5, 6], label: 'A', dx: 12, dy: -4 },
          { t: 'point', p: [1, -2], label: 'B', dx: 10, dy: 14 },
          { t: 'point', p: [-5, 1], label: 'C', dx: -14, dy: 0 },
        ],
      },
      choices: ['$A$', '$C$', 'There is no right angle', '$B$'],
      answer: 3,
      solution:
        'Route one, multiply slopes at each corner: $\\overline{BA}$ has slope $\\frac{6 - (-2)}{5 - 1} = 2$, $\\overline{BC}$ has slope $\\frac{1 - (-2)}{-5 - 1} = -\\frac{1}{2}$, and $\\overline{AC}$ has slope $\\frac{1 - 6}{-5 - 5} = \\frac{1}{2}$. The pair meeting at $B$ multiplies to $2 \\cdot \\left(-\\frac{1}{2}\\right) = -1$, so the right angle sits at $B$ ✓. Check a second, independent way, with squared side lengths: $BA^2 = 4^2 + 8^2 = 80$, $BC^2 = 6^2 + 3^2 = 45$, and $AC^2 = 10^2 + 5^2 = 125$. Since $80 + 45 = 125$, the converse of the Pythagorean Theorem makes $\\overline{AC}$ the hypotenuse, and the right angle sits at the vertex $\\overline{AC}$ skips, namely $B$ ✓. (The choice $A$ is ACCEPTING A SLOPE PRODUCT OF $+1$, since at $A$ the slopes $2$ and $\\frac{1}{2}$ multiply to $1$ rather than $-1$ ✗; the choice $C$ is READING ONE SLOPE AS RUN OVER RISE, since flipping the slope $-\\frac{1}{2}$ of $\\overline{CB}$ into $-2$ makes the corner at $C$ look perpendicular ✗; the choice that there is no right angle is TESTING ONLY THE CORNERS $A$ AND $C$ and never the pair of sides that meets at $B$ ✗.)',
    },
  ],
  // s10 — the point of the y-axis equidistant from two given points.
  [
    {
      q: 'Which point on the $y$-axis is equidistant from $(1, 0)$ and $(3, 4)$?',
      choices: ['$(0, 2)$', '$(0, -3)$', '$(0, 6)$', '$(0, 3)$'],
      answer: 3,
      solution:
        'Route one, set the squared distances equal: call the point $(0, y)$. Then $1^2 + (y - 0)^2 = 3^2 + (y - 4)^2$, so $1 + y^2 = 9 + y^2 - 8y + 16$, which leaves $1 = 25 - 8y$ and $8y = 24$, giving $y = 3$. The point is $(0, 3)$, and both squared distances come to $10$ ✓. Check a second, independent way, through the perpendicular bisector: every point equidistant from the two given points lies on their perpendicular bisector. The midpoint of $(1, 0)$ and $(3, 4)$ is $(2, 2)$, the segment’s slope is $\\frac{4 - 0}{3 - 1} = 2$, so the bisector has slope $-\\frac{1}{2}$ and equation $y - 2 = -\\frac{1}{2}(x - 2)$, that is $y = -\\frac{1}{2}x + 3$. Setting $x = 0$ crosses the $y$-axis at $(0, 3)$ ✓. (The choice $(0, 2)$ is AVERAGING THE TWO GIVEN $y$-COORDINATES, but equidistant points sit on a perpendicular bisector, not at the average height ✗; the choice $(0, -3)$ is SUBTRACTING THE TWO SQUARED DISTANCES IN THE WRONG ORDER, which flips the sign of the answer ✗; the choice $(0, 6)$ is DROPPING THE FACTOR OF $2$ WHEN COLLECTING THE $y$-TERMS, dividing $24$ by $4$ instead of by $8$ ✗.)',
    },
    {
      q: 'A radio mast is to be built on the $y$-axis so that it is the same distance from a town at $(1, 5)$ as from a town at $(5, 2)$. Where should the mast go?',
      choices: ['$\\left(0, \\frac{7}{2}\\right)$', '$\\left(0, -\\frac{1}{2}\\right)$', '$\\left(0, \\frac{1}{2}\\right)$', '$(0, -1)$'],
      answer: 1,
      solution:
        'Route one, set the squared distances equal: call the mast $(0, y)$. Then $1^2 + (y - 5)^2 = 5^2 + (y - 2)^2$, so $1 + y^2 - 10y + 25 = 25 + y^2 - 4y + 4$, which leaves $26 - 10y = 29 - 4y$, hence $-3 = 6y$ and $y = -\\frac{1}{2}$. Both squared distances then come to $\\frac{125}{4}$ ✓. Check a second, independent way, through the perpendicular bisector: the mast must lie on the perpendicular bisector of the segment joining the towns. That segment has midpoint $\\left(3, \\frac{7}{2}\\right)$ and slope $\\frac{2 - 5}{5 - 1} = -\\frac{3}{4}$, so the bisector has slope $\\frac{4}{3}$ and equation $y - \\frac{7}{2} = \\frac{4}{3}(x - 3)$. Setting $x = 0$ gives $y = \\frac{7}{2} - 4 = -\\frac{1}{2}$, so the mast belongs at $\\left(0, -\\frac{1}{2}\\right)$ ✓. (The choice $\\left(0, \\frac{7}{2}\\right)$ is AVERAGING THE TWO GIVEN $y$-COORDINATES, which lands on the segment’s midpoint height rather than on the $y$-axis crossing ✗; the choice $\\left(0, \\frac{1}{2}\\right)$ is SUBTRACTING THE TWO SQUARED DISTANCES IN THE WRONG ORDER, which flips the sign of the answer ✗; the choice $(0, -1)$ is DROPPING THE FACTOR OF $2$ WHEN COLLECTING THE $y$-TERMS, dividing $-3$ by $3$ instead of by $6$ ✗.)',
    },
    {
      q: 'Which point on the $y$-axis is equidistant from $(1, 1)$ and $(3, 2)$?',
      choices: ['$\\left(0, \\frac{11}{2}\\right)$', '$\\left(0, \\frac{3}{2}\\right)$', '$\\left(0, -\\frac{11}{2}\\right)$', '$(0, 11)$'],
      answer: 0,
      solution:
        'Route one, set the squared distances equal: call the point $(0, y)$. Then $1^2 + (y - 1)^2 = 3^2 + (y - 2)^2$, so $1 + y^2 - 2y + 1 = 9 + y^2 - 4y + 4$, which leaves $2 - 2y = 13 - 4y$, hence $2y = 11$ and $y = \\frac{11}{2}$. Both squared distances then come to $\\frac{85}{4}$ ✓. Check a second, independent way, through the perpendicular bisector: the point must lie on the perpendicular bisector of the segment joining $(1, 1)$ and $(3, 2)$. That segment has midpoint $\\left(2, \\frac{3}{2}\\right)$ and slope $\\frac{2 - 1}{3 - 1} = \\frac{1}{2}$, so the bisector has slope $-2$ and equation $y - \\frac{3}{2} = -2(x - 2)$. Setting $x = 0$ gives $y = \\frac{3}{2} + 4 = \\frac{11}{2}$, so the point is $\\left(0, \\frac{11}{2}\\right)$ ✓. (The choice $\\left(0, \\frac{3}{2}\\right)$ is AVERAGING THE TWO GIVEN $y$-COORDINATES instead of following the perpendicular bisector out to the axis ✗; the choice $\\left(0, -\\frac{11}{2}\\right)$ is SUBTRACTING THE TWO SQUARED DISTANCES IN THE WRONG ORDER, which flips the sign of the answer ✗; the choice $(0, 11)$ is DROPPING THE FACTOR OF $2$ WHEN COLLECTING THE $y$-TERMS, dividing $11$ by $1$ instead of by $2$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 17,
  sections: { '17.1': s171 },
}
