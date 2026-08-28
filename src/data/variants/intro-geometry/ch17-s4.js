// Introduction to Geometry chapter 17 — variations for section 17.4 (Proofs with
// Analytic Geometry). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every answer here is symbolic in $a$, $b$, $c$ or is a sentence about
//    method, so each keyed answer is reached twice along routes that share no
//    steps: once by the general algebra in letters, and once independently —
//    by a numerical spot-check with stated positive values, by measuring a
//    drawn instance, or by arguing from what the placement has to guarantee.
//  - Letters are assumed positive, and the problem says so whenever the answer
//    depends on it (a square root of $a^2$ is $a$ only when $a > 0$).
//  - Figures are coordinate-exact and their labels are plain text — "(2a, 0)",
//    never LaTeX — since figure labels are drawn straight into the SVG.
//  - Each distractor is one named mistake, named in CAPS. For the questions
//    whose answer is a sentence, the wrong choices are plausible but wrong
//    reasons, and the solution says why each reason fails.

const s174 = [
  // s1 — choosing a smart general placement for a named shape.
  [
    {
      q: 'You want to prove a fact about every square. Which placement of the four vertices is the standard smart choice? Assume $a$ is positive.',
      choices: [
        '$(0, 0)$, $(a, 0)$, $(a, b)$, $(0, b)$',
        '$(1, 1)$, $(a, 1)$, $(a, a)$, $(1, a)$',
        '$(0, 0)$, $(a, 0)$, $(a, 2a)$, $(0, 2a)$',
        '$(0, 0)$, $(a, 0)$, $(a, a)$, $(0, a)$',
      ],
      answer: 3,
      solution:
        'Route one, ask what the placement has to guarantee: a square needs four right angles and four equal sides, and it must stay general — one letter, free to be any positive number. Park a corner at the origin and run the two sides through it along the axes, and the right angle at the origin comes free. Give both of those sides the same letter $a$ and the equal-sides condition comes free as well, which forces the far corner to $(a, a)$. The placement is $(0, 0)$, $(a, 0)$, $(a, a)$, $(0, a)$ ✓. Check a second, independent way, by measuring a drawn instance: take $a = 6$ and plot $(0, 0)$, $(6, 0)$, $(6, 6)$, $(0, 6)$. The bottom side is $6 - 0 = 6$, the right side is $6 - 0 = 6$, and so are the top and left sides; consecutive sides are one horizontal and one vertical, so all four angles are right angles. Four equal sides and four right angles is a square, and nothing in that measuring used the value $6$ except as a stand-in for $a$ ✓. (The choice $(0, 0)$, $(a, 0)$, $(a, b)$, $(0, b)$ is USING TWO DIFFERENT LETTERS FOR THE TWO SIDE LENGTHS, which is the general rectangle and is a square only in the one case $b = a$ ✗; the choice $(1, 1)$, $(a, 1)$, $(a, a)$, $(1, a)$ is REFUSING THE FREE GIFT OF THE ORIGIN, since starting at $(1, 1)$ turns every side length into $a - 1$ and every later subtraction into a longer one for no gain ✗; the choice $(0, 0)$, $(a, 0)$, $(a, 2a)$, $(0, 2a)$ is MAKING ONE PAIR OF SIDES TWICE THE OTHER, which pins the figure to a single non-square shape twice as tall as it is wide ✗.)',
    },
    {
      q: 'A proof is supposed to work for every right triangle. Which placement of the three vertices sets that up with the fewest letters and no leftover constants? Assume $a$ and $b$ are positive.',
      choices: [
        '$(0, 0)$, $(a, 0)$, $(b, c)$',
        '$(0, 0)$, $(a, 0)$, $(0, b)$',
        '$(0, 0)$, $(a, 0)$, $(0, a)$',
        '$(2, 3)$, $(a, 3)$, $(2, b)$',
      ],
      answer: 1,
      solution:
        'Route one, ask what the placement has to guarantee: a right triangle needs exactly one built-in condition, a right angle, and everything else must stay free. Put the right-angle vertex at the origin and send the two legs out along the axes; the axes already meet at a right angle, so the condition is built in and costs nothing. The legs then need separate letters, because a right triangle’s legs are allowed to differ, giving $(0, 0)$, $(a, 0)$, $(0, b)$ ✓. Check a second, independent way, by measuring a drawn instance and testing generality: take $a = 8$ and $b = 3$, so the vertices are $(0, 0)$, $(8, 0)$, $(0, 3)$. The leg from $(0, 0)$ to $(8, 0)$ is horizontal and the leg from $(0, 0)$ to $(0, 3)$ is vertical, so they are perpendicular and the triangle is right. Swapping in any other positive pair changes the two leg lengths to whatever you like, so the family reaches every right triangle, tall or squat ✓. (The choice $(0, 0)$, $(a, 0)$, $(b, c)$ is PLACING THE THIRD VERTEX AT A FREE POINT, which describes any triangle at all and never forces a right angle — with $b = 1$ and $c = 1$ and $a = 5$ no angle is right ✗; the choice $(0, 0)$, $(a, 0)$, $(0, a)$ is SPENDING ONE LETTER ON BOTH LEGS, which builds the right angle but also forces the legs equal, so the proof would cover only right triangles with a pair of equal legs ✗; the choice $(2, 3)$, $(a, 3)$, $(2, b)$ is PARKING THE RIGHT-ANGLE VERTEX AWAY FROM THE ORIGIN, so the legs measure $a - 2$ and $b - 3$ and every step of the proof carries a subtraction that buys nothing ✗.)',
    },
    {
      q: 'You are about to prove something about the midpoints of the sides of every rectangle. Which placement of the rectangle keeps those midpoints free of fractions? Assume $a$ and $b$ are positive.',
      choices: [
        '$(0, 0)$, $(2a, 0)$, $(2a, 2b)$, $(0, 2b)$',
        '$(0, 0)$, $(a, 0)$, $(a, b)$, $(0, b)$',
        '$(0, 0)$, $(2a, 0)$, $(2b, 2a)$, $(0, 2b)$',
        '$(0, 0)$, $(2a, 0)$, $(2a, 2a)$, $(0, 2a)$',
      ],
      answer: 0,
      solution:
        'Route one, ask what the placement has to guarantee: the figure must be a general rectangle — corner at the origin, sides on the axes, two independent letters — and taking a midpoint halves each coordinate, so every coordinate you write should already carry a factor of $2$. Doubling both letters gives $(0, 0)$, $(2a, 0)$, $(2a, 2b)$, $(0, 2b)$, and $2a$ is exactly as general as $a$ because $a$ may be any positive number ✓. Check a second, independent way, by taking the midpoints and looking: the four sides of that rectangle have midpoints $\\left(\\frac{0 + 2a}{2}, 0\\right) = (a, 0)$, $\\left(2a, \\frac{0 + 2b}{2}\\right) = (2a, b)$, $(a, 2b)$, and $(0, b)$. Every one of the eight numbers is a whole letter expression — not a fraction in sight ✓. (The choice $(0, 0)$, $(a, 0)$, $(a, b)$, $(0, b)$ is IGNORING THAT MIDPOINTS DIVIDE BY TWO, so its side midpoints come out as $\\left(\\frac{a}{2}, 0\\right)$ and $\\left(0, \\frac{b}{2}\\right)$ and the fractions ride along through the whole proof ✗; the choice $(0, 0)$, $(2a, 0)$, $(2b, 2a)$, $(0, 2b)$ is SWAPPING THE LETTERS SO OPPOSITE CORNERS DISAGREE — the corner above $(2a, 0)$ would have to be $(2a, 2b)$, so those four points are not the corners of a rectangle at all ✗; the choice $(0, 0)$, $(2a, 0)$, $(2a, 2a)$, $(0, 2a)$ is SPENDING ONE LETTER ON BOTH SIDES, which narrows the theorem to squares and proves nothing about a rectangle that is longer than it is tall ✗.)',
    },
  ],
  // s2 — the length of a diagonal, straight from the distance formula.
  [
    {
      q: 'A square is placed at $(0, 0)$, $(a, 0)$, $(a, a)$, and $(0, a)$, where $a$ is positive. How long is the diagonal from $(0, 0)$ to $(a, a)$?',
      fig: {
        view: [-1.5, -1.5, 5.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [4, 4], [0, 4]], fill: false },
          { t: 'seg', a: [0, 0], b: [4, 4], dash: true },
          { t: 'label', p: [0, 0], text: '(0, 0)', dx: -8, dy: 16 },
          { t: 'label', p: [4, 0], text: '(a, 0)', dx: 10, dy: 16 },
          { t: 'label', p: [4, 4], text: '(a, a)', dx: 12, dy: -8 },
          { t: 'label', p: [0, 4], text: '(0, a)', dx: -10, dy: -10 },
        ],
      },
      choices: ['$2a$', '$2a^2$', '$a\\sqrt{2}$', '$a$'],
      answer: 2,
      solution:
        'Route one, run the distance formula in letters: from $(0, 0)$ to $(a, a)$ the horizontal gap is $a - 0 = a$ and the vertical gap is $a - 0 = a$, so the length is $\\sqrt{a^2 + a^2} = \\sqrt{2a^2} = a\\sqrt{2}$. The last step needs $a$ to be positive, which the problem grants, so the square root of $a^2$ is $a$ itself ✓. Check a second, independent way, with numbers: put $a = 5$, so the square is $(0, 0)$, $(5, 0)$, $(5, 5)$, $(0, 5)$. The diagonal cuts a right triangle with legs $5$ and $5$, and the Pythagorean Theorem gives a hypotenuse of $\\sqrt{25 + 25} = \\sqrt{50} = 5\\sqrt{2} \\approx 7.07$. The formula $a\\sqrt{2}$ at $a = 5$ reads $5\\sqrt{2}$, the same number ✓. (The choice $2a$ is ADDING THE TWO LEGS INSTEAD OF USING THE PYTHAGOREAN THEOREM, which measures the walk along two sides rather than the cut across — at $a = 5$ it reads $10$, far past the true $7.07$ ✗; the choice $2a^2$ is STOPPING AT THE SQUARED LENGTH and never taking the square root, since $a^2 + a^2 = 2a^2$ ✗; the choice $a$ is MEASURING A SIDE RATHER THAN THE DIAGONAL, the distance from $(0, 0)$ to $(a, 0)$ ✗.)',
    },
    {
      q: 'A rectangle is placed at $(0, 0)$, $(2a, 0)$, $(2a, 2b)$, and $(0, 2b)$, where $a$ and $b$ are positive. How long is the diagonal from $(0, 0)$ to $(2a, 2b)$?',
      fig: {
        view: [-1.5, -1.5, 7.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 4], [0, 4]], fill: false },
          { t: 'seg', a: [0, 0], b: [6, 4], dash: true },
          { t: 'label', p: [0, 0], text: '(0, 0)', dx: -8, dy: 16 },
          { t: 'label', p: [6, 0], text: '(2a, 0)', dx: 12, dy: 16 },
          { t: 'label', p: [6, 4], text: '(2a, 2b)', dx: 14, dy: -8 },
          { t: 'label', p: [0, 4], text: '(0, 2b)', dx: -12, dy: -10 },
        ],
      },
      choices: ['$2\\sqrt{a^2 + b^2}$', '$2a + 2b$', '$4a^2 + 4b^2$', '$\\sqrt{a^2 + b^2}$'],
      answer: 0,
      solution:
        'Route one, run the distance formula in letters: the horizontal gap is $2a - 0 = 2a$ and the vertical gap is $2b - 0 = 2b$, so the diagonal is $\\sqrt{(2a)^2 + (2b)^2} = \\sqrt{4a^2 + 4b^2} = \\sqrt{4(a^2 + b^2)} = 2\\sqrt{a^2 + b^2}$, where pulling the $2$ out front is just $\\sqrt{4X} = 2\\sqrt{X}$ ✓. Check a second, independent way, with numbers: put $a = 3$ and $b = 4$, so the rectangle is $(0, 0)$, $(6, 0)$, $(6, 8)$, $(0, 8)$. Its diagonal closes a right triangle with legs $6$ and $8$, the famous $6$–$8$–$10$ triangle, so the diagonal is $10$. The formula $2\\sqrt{a^2 + b^2}$ at $a = 3$, $b = 4$ reads $2\\sqrt{9 + 16} = 2 \\cdot 5 = 10$ ✓. (The choice $2a + 2b$ is ADDING THE TWO SIDES INSTEAD OF USING THE PYTHAGOREAN THEOREM, which at $a = 3$, $b = 4$ reads $14$ — the trip around the corner, not across ✗; the choice $4a^2 + 4b^2$ is LEAVING OFF THE SQUARE ROOT and reporting the squared length, $100$ instead of $10$ ✗; the choice $\\sqrt{a^2 + b^2}$ is HALVING THE COORDINATES BEFORE MEASURING, which finds the distance from $(0, 0)$ to the rectangle’s center $(a, b)$ — exactly half of the diagonal, $5$ instead of $10$ ✗.)',
    },
    {
      q: 'A rectangle is placed at $(0, 0)$, $(2a, 0)$, $(2a, 3b)$, and $(0, 3b)$, where $a$ and $b$ are positive. How long is the diagonal from $(0, 0)$ to $(2a, 3b)$?',
      fig: {
        view: [-1.5, -1.5, 5.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [4, 6], [0, 6]], fill: false },
          { t: 'seg', a: [0, 0], b: [4, 6], dash: true },
          { t: 'label', p: [0, 0], text: '(0, 0)', dx: -8, dy: 16 },
          { t: 'label', p: [4, 0], text: '(2a, 0)', dx: 12, dy: 16 },
          { t: 'label', p: [4, 6], text: '(2a, 3b)', dx: 14, dy: -8 },
          { t: 'label', p: [0, 6], text: '(0, 3b)', dx: -12, dy: -10 },
        ],
      },
      choices: ['$2a + 3b$', '$4a^2 + 9b^2$', '$\\sqrt{2a^2 + 3b^2}$', '$\\sqrt{4a^2 + 9b^2}$'],
      answer: 3,
      solution:
        'Route one, run the distance formula in letters: the horizontal gap is $2a$ and the vertical gap is $3b$, so the diagonal measures $\\sqrt{(2a)^2 + (3b)^2}$. Squaring a product squares both parts, giving $(2a)^2 = 4a^2$ and $(3b)^2 = 9b^2$, so the diagonal is $\\sqrt{4a^2 + 9b^2}$ ✓. Check a second, independent way, with numbers: put $a = 2$ and $b = 1$, so the rectangle is $(0, 0)$, $(4, 0)$, $(4, 3)$, $(0, 3)$. Its diagonal closes a right triangle with legs $4$ and $3$, so it measures $5$. The formula $\\sqrt{4a^2 + 9b^2}$ at $a = 2$, $b = 1$ reads $\\sqrt{16 + 9} = \\sqrt{25} = 5$ ✓. (The choice $2a + 3b$ is ADDING THE TWO SIDES INSTEAD OF USING THE PYTHAGOREAN THEOREM, giving $7$ where the true length is $5$ ✗; the choice $4a^2 + 9b^2$ is FORGETTING THE SQUARE ROOT, reporting $25$ rather than $5$ ✗; the choice $\\sqrt{2a^2 + 3b^2}$ is SQUARING ONLY THE LETTER AND NOT THE NUMBER IN FRONT OF IT, reading $(2a)^2$ as $2a^2$; at $a = 2$, $b = 1$ it gives $\\sqrt{8 + 3} = \\sqrt{11} \\approx 3.32$ ✗.)',
    },
  ],
  // s3 — why a chosen placement is the smart one; the answer is a sentence.
  [
    {
      q: 'A coordinate proof about a right triangle begins by putting one vertex at the origin. What does that choice buy you?',
      choices: [
        'Because a proof only counts as valid when one of the vertices sits at the origin',
        'Because a vertex at $(0, 0)$ makes every distance from it a distance formula with nothing to subtract',
        'Because the origin is the one point in the plane whose coordinates are known before the proof starts',
        'Because putting a vertex at the origin forces the two sides through it to be perpendicular',
      ],
      answer: 1,
      solution:
        'Route one, look at what the formulas do with a zero: the distance from $(0, 0)$ to any point $(p, q)$ is $\\sqrt{(p - 0)^2 + (q - 0)^2} = \\sqrt{p^2 + q^2}$. Both subtractions vanish, so a length from that vertex is read straight off the other point’s coordinates. Slopes behave the same way — the slope from $(0, 0)$ to $(p, q)$ is just $\\frac{q}{p}$. The gain is arithmetic that disappears, so the answer is that a vertex at $(0, 0)$ makes every distance from it a distance formula with nothing to subtract ✓. Check a second, independent way, by pricing the same triangle in two positions: place a right triangle at $(0, 0)$, $(a, 0)$, $(0, b)$ and its hypotenuse is $\\sqrt{a^2 + b^2}$ after one line of work. Slide the identical triangle to $(3, 5)$, $(a + 3, 5)$, $(3, b + 5)$ and the same hypotenuse becomes $\\sqrt{(a + 3 - 3)^2 + (b + 5 - 5)^2}$ — the same answer reached through four extra subtractions that all cancel. The origin removes exactly that busywork ✓. (The reason about validity fails because SLIDING THE AXES CHANGES NO LENGTH AND NO ANGLE, so a proof done with the vertex somewhere else is every bit as valid, only messier ✗; the reason about known coordinates fails because YOU ARE THE ONE HANDING OUT EVERY SET OF COORDINATES IN A COORDINATE PROOF — the other vertices get names like $(a, 0)$ that are just as usable ✗; the reason about perpendicularity fails because TWO SEGMENTS LEAVING THE ORIGIN CAN MEET AT ANY ANGLE AT ALL, as $(0, 0)$, $(4, 0)$, $(1, 1)$ shows; what forces the right angle is putting the two sides on the axes, not the vertex on the origin ✗.)',
    },
    {
      q: 'A coordinate proof about a parallelogram lays one of its sides flat along the $x$-axis. Why is that a good move?',
      choices: [
        'Because a parallelogram has to have one horizontal side before it can be graphed',
        'Because the $x$-axis is the only line in the plane whose equation is simple enough to use in a proof',
        'Because a side on the $x$-axis makes the other three sides horizontal too',
        'Because a side along the $x$-axis makes that side’s length just the difference of two $x$-coordinates',
      ],
      answer: 3,
      solution:
        'Route one, measure such a side in letters: the endpoints of a side on the $x$-axis look like $(p, 0)$ and $(q, 0)$, so the distance formula gives $\\sqrt{(q - p)^2 + (0 - 0)^2} = |q - p|$. The whole square-root machine collapses into one subtraction, and any later slope or midpoint along that side is just as cheap. So the payoff is that a side along the $x$-axis makes that side’s length just the difference of two $x$-coordinates ✓. Check a second, independent way, on a placed parallelogram: put it at $(0, 0)$, $(a, 0)$, $(a + b, c)$, $(b, c)$. The bottom side reads off as $a - 0 = a$ with no work at all, while the slanted side from $(a, 0)$ to $(a + b, c)$ costs a full $\\sqrt{b^2 + c^2}$. Same figure, same proof, and the horizontal side is the cheap one ✓. (The reason about needing a horizontal side fails because A PARALLELOGRAM MAY SIT AT ANY TILT WHATSOEVER — the proof turns the axes to meet the shape, it does not turn the shape to meet the axes ✗; the reason about equations fails because EVERY LINE IN A COORDINATE PROOF GETS AN EQUATION YOU WRITE YOURSELF, and $y = 4$ or $x = -2$ are just as simple as $y = 0$; the gain is in the coordinates of the endpoints, not in the equation of the line ✗; the reason about the other sides fails because ONLY THE OPPOSITE SIDE TURNS HORIZONTAL — in $(0, 0)$, $(a, 0)$, $(a + b, c)$, $(b, c)$ the two remaining sides both climb from height $0$ to height $c$ ✗.)',
    },
    {
      q: 'A coordinate proof about rectangles always starts the same way: one corner at the origin, two sides along the axes. Why does proving the theorem for a rectangle in that one position prove it for every rectangle?',
      choices: [
        'Because the letters $a$ and $b$ may be any numbers at all, so the placement already covers rectangles at every tilt',
        'Because rectangles at other tilts have the same area, and area is what a coordinate proof works with',
        'Because every rectangle can be slid and turned onto that position without any length changing',
        'Because a theorem only has to be checked in one example before it counts as proved',
      ],
      answer: 2,
      solution:
        'Route one, argue from rigid motions: take any rectangle anywhere on the plane. Slide it until one corner lands on the origin, then turn it about that corner until one side lies along the positive $x$-axis; the neighboring side, being perpendicular to it, then runs up the $y$-axis. Sliding and turning change no length, no angle, and no ratio, so any statement about lengths, slopes, or midpoints is true of the original if and only if it is true of the moved copy. That is why every rectangle can be slid and turned onto that position without any length changing ✓. Check a second, independent way, by moving one tilted rectangle by hand: the corners $(2, 1)$, $(10, 7)$, $(7, 11)$, $(-1, 5)$ make a rectangle sitting at a slant, with one side measuring $\\sqrt{64 + 36} = 10$, the next measuring $\\sqrt{9 + 16} = 5$, and both diagonals measuring $\\sqrt{125}$. Slide it by $(x, y) \\to (x - 2, y - 1)$ and then turn it about the origin until its long side lies on the positive $x$-axis, and the corners become $(0, 0)$, $(10, 0)$, $(10, 5)$, $(0, 5)$ — a placed rectangle whose sides are $10$ and $5$ and whose diagonals are $\\sqrt{100 + 25} = \\sqrt{125}$. Every measurement survived the trip, so a theorem proved in the placed position is a theorem about the tilted one ✓. (The reason about the letters fails because THE LETTERS BUY EVERY SIZE BUT NOT A SINGLE TILT — every rectangle in the family $(0, 0)$, $(a, 0)$, $(a, b)$, $(0, b)$ still has its sides parallel to the axes, and what reaches the tilted ones is the rigid motion ✗; the reason about area fails because A COORDINATE PROOF IS USUALLY ABOUT LENGTHS, SLOPES, OR MIDPOINTS RATHER THAN AREA, and two rectangles of equal area need not be congruent at all — a $1 \\times 12$ and a $3 \\times 4$ share an area of $12$ ✗; the reason about one example fails because ONE EXAMPLE IS NEVER A PROOF; what rescues this argument is that the placement loses no generality, not that a single case would be enough ✗.)',
    },
  ],
  // s4 — a distance measured from the midpoint of a hypotenuse.
  [
    {
      q: 'A right triangle has its legs on the axes, with vertices $(0, 0)$, $(2a, 0)$, and $(0, 2b)$, where $a$ and $b$ are positive. Let $M = (a, b)$ be the midpoint of the hypotenuse and let $N = (a, 0)$ be the midpoint of the leg along the $x$-axis. How long is $\\overline{MN}$?',
      fig: {
        view: [-1.5, -1.5, 7.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [0, 4]], fill: false },
          { t: 'seg', a: [3, 2], b: [3, 0], dash: true },
          { t: 'point', p: [3, 2], label: 'M', dx: 14, dy: -4 },
          { t: 'point', p: [3, 0], label: 'N', dx: 12, dy: 16 },
          { t: 'label', p: [0, 0], text: '(0, 0)', dx: -10, dy: 16 },
          { t: 'label', p: [6, 0], text: '(2a, 0)', dx: 10, dy: 16 },
          { t: 'label', p: [0, 4], text: '(0, 2b)', dx: -12, dy: -10 },
        ],
      },
      choices: ['$b$', '$a$', '$\\sqrt{a^2 + b^2}$', '$2b$'],
      answer: 0,
      solution:
        'Route one, run the distance formula in letters: from $M(a, b)$ to $N(a, 0)$ the horizontal gap is $a - a = 0$ and the vertical gap is $b - 0 = b$, so the length is $\\sqrt{0^2 + b^2} = \\sqrt{b^2} = b$. That last step is where the positivity of $b$ is spent: the square root of $b^2$ is $b$ itself only because $b > 0$ ✓. Check a second, independent way, by reading the picture as a height: $M$ and $N$ share the first coordinate $a$, so $\\overline{MN}$ is a vertical segment, and the length of a vertical segment is simply the gap between the two heights. $M$ sits at height $b$ and $N$ sits on the $x$-axis at height $0$, so the gap is $b$. With $a = 4$ and $b = 3$ the triangle is $(0, 0)$, $(8, 0)$, $(0, 6)$, and the segment from $M(4, 3)$ straight down to $N(4, 0)$ is $3$ units long, matching $b = 3$ ✓. (The choice $a$ is MEASURING TO THE MIDPOINT OF THE WRONG LEG, from $M(a, b)$ across to $(0, b)$ on the $y$-axis, which gives $a$ — at $a = 4$, $b = 3$ that reads $4$ instead of $3$ ✗; the choice $\\sqrt{a^2 + b^2}$ is MEASURING FROM $M$ TO A VERTEX RATHER THAN TO A MIDPOINT, namely the distance from $M$ to the origin, which reads $5$ in the same example ✗; the choice $2b$ is FORGETTING THAT $M$ IS A MIDPOINT and using the full height $2b$ of the triangle, which reads $6$ ✗.)',
    },
    {
      q: 'A right triangle has its legs on the axes, with vertices $(0, 0)$, $(2a, 0)$, and $(0, 2b)$, where $a$ and $b$ are positive. Its hypotenuse has midpoint $M = (a, b)$. How far is $M$ from the vertex $(2a, 0)$?',
      fig: {
        view: [-1.5, -1.5, 7.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [0, 4]], fill: false },
          { t: 'seg', a: [3, 2], b: [6, 0], dash: true },
          { t: 'point', p: [3, 2], label: 'M', dx: -14, dy: -6 },
          { t: 'label', p: [0, 0], text: '(0, 0)', dx: -10, dy: 16 },
          { t: 'label', p: [6, 0], text: '(2a, 0)', dx: 10, dy: 16 },
          { t: 'label', p: [0, 4], text: '(0, 2b)', dx: -12, dy: -10 },
        ],
      },
      choices: ['$a + b$', '$a^2 + b^2$', '$\\sqrt{a^2 + b^2}$', '$\\sqrt{4a^2 + b^2}$'],
      answer: 2,
      solution:
        'Route one, run the distance formula in letters: from $M(a, b)$ to $(2a, 0)$ the horizontal gap is $2a - a = a$ and the vertical gap is $0 - b = -b$, so the distance is $\\sqrt{a^2 + (-b)^2} = \\sqrt{a^2 + b^2}$ ✓. Check a second, independent way, with numbers: put $a = 4$ and $b = 3$, so the triangle is $(0, 0)$, $(8, 0)$, $(0, 6)$ and $M = (4, 3)$. Walking from $M$ to $(8, 0)$ takes $4$ across and $3$ down, a $3$–$4$–$5$ right triangle, so the distance is $5$. The formula $\\sqrt{a^2 + b^2}$ reads $\\sqrt{16 + 9} = 5$ ✓. (This is the pretty fact underneath the problem: the same $\\sqrt{a^2 + b^2}$ is the distance from $M$ to the origin and to $(0, 2b)$ as well, so the hypotenuse midpoint is the center of a circle through all three vertices.) (The choice $a + b$ is ADDING THE TWO GAPS INSTEAD OF USING THE PYTHAGOREAN THEOREM, which reads $7$ where the true distance is $5$ ✗; the choice $a^2 + b^2$ is DROPPING THE SQUARE ROOT, reporting $25$ ✗; the choice $\\sqrt{4a^2 + b^2}$ is STARTING FROM THE MIDPOINT OF THE VERTICAL LEG $(0, b)$ INSTEAD OF FROM $M$, since that point is $2a$ across and $b$ down from $(2a, 0)$; at $a = 4$, $b = 3$ it reads $\\sqrt{64 + 9} = \\sqrt{73} \\approx 8.54$ ✗.)',
    },
    {
      q: 'A right triangle has its legs on the axes, with vertices $(0, 0)$, $(a, 0)$, and $(0, b)$, where $a$ and $b$ are positive. How far is the origin from the midpoint of the hypotenuse?',
      fig: {
        view: [-1.5, -1.5, 7.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [0, 4]], fill: false },
          { t: 'seg', a: [0, 0], b: [3, 2], dash: true },
          { t: 'point', p: [3, 2], label: 'M', dx: 14, dy: -4 },
          { t: 'label', p: [0, 0], text: '(0, 0)', dx: -10, dy: 16 },
          { t: 'label', p: [6, 0], text: '(a, 0)', dx: 10, dy: 16 },
          { t: 'label', p: [0, 4], text: '(0, b)', dx: -10, dy: -10 },
        ],
      },
      choices: ['$\\sqrt{a^2 + b^2}$', '$\\frac{\\sqrt{a^2 + b^2}}{2}$', '$\\frac{a + b}{2}$', '$\\frac{a^2 + b^2}{4}$'],
      answer: 1,
      solution:
        'Route one, find the midpoint and then measure: the hypotenuse joins $(a, 0)$ to $(0, b)$, so its midpoint is $M = \\left(\\frac{a + 0}{2}, \\frac{0 + b}{2}\\right) = \\left(\\frac{a}{2}, \\frac{b}{2}\\right)$. The distance from the origin is $\\sqrt{\\left(\\frac{a}{2}\\right)^2 + \\left(\\frac{b}{2}\\right)^2} = \\sqrt{\\frac{a^2 + b^2}{4}} = \\frac{\\sqrt{a^2 + b^2}}{2}$ ✓. Check a second, independent way, with numbers: put $a = 6$ and $b = 8$, so the triangle is $(0, 0)$, $(6, 0)$, $(0, 8)$ and $M = (3, 4)$. The distance from the origin to $(3, 4)$ is $\\sqrt{9 + 16} = 5$. Meanwhile the whole hypotenuse runs from $(6, 0)$ to $(0, 8)$, a length of $\\sqrt{36 + 64} = 10$, and $5$ is exactly half of it — which is what $\\frac{\\sqrt{a^2 + b^2}}{2}$ says ✓. (The choice $\\sqrt{a^2 + b^2}$ is MEASURING THE WHOLE HYPOTENUSE instead of the half-segment from the origin to its midpoint, giving $10$ where the answer is $5$ ✗; the choice $\\frac{a + b}{2}$ is AVERAGING THE TWO LEGS instead of running the distance formula, giving $7$ ✗; the choice $\\frac{a^2 + b^2}{4}$ is FORGETTING THE SQUARE ROOT after squaring both halves, giving $25$ ✗.)',
    },
  ],
  // s5 — complete a parallelogram from three of its vertices.
  [
    {
      q: 'A parallelogram $ABCD$ has its vertices listed in order around the figure, with $A(0, 0)$, $B(a, 0)$, and $C(b, c)$, where $a$, $b$, and $c$ are positive. Which point is $D$, the vertex opposite $B$?',
      choices: ['$(a + b, c)$', '$(a - b, c)$', '$(b - a, c)$', '$\\left(\\frac{b}{2}, \\frac{c}{2}\\right)$'],
      answer: 2,
      solution:
        'Route one, copy a side as a shift: in a parallelogram listed $A$, $B$, $C$, $D$ the side $\\overline{AD}$ is opposite $\\overline{BC}$, so going from $C$ to $D$ has to be the very same move as going from $B$ to $A$. That move is $(0 - a, 0 - 0) = (-a, 0)$, and applying it to $C(b, c)$ gives $D = (b - a, c + 0) = (b - a, c)$ ✓. Check a second, independent way, with numbers and a slope test: take $a = 3$, $b = 5$, $c = 4$, so $A(0, 0)$, $B(3, 0)$, $C(5, 4)$, and the candidate $D(2, 4)$. Side $\\overline{AB}$ runs from $(0, 0)$ to $(3, 0)$ — three across, zero up. Side $\\overline{DC}$ runs from $(2, 4)$ to $(5, 4)$ — three across, zero up. The two are parallel and equally long, which is enough to force a parallelogram, and the remaining pair $\\overline{AD}$ and $\\overline{BC}$ are both a move of $(2, 4)$ as well ✓. (The choice $(a + b, c)$ is APPLYING THE SHIFT FROM $A$ TO $B$ WHEN THE SIDE CALLS FOR THE SHIFT FROM $B$ TO $A$, adding $(a, 0)$ to $C$ instead of subtracting it — in the example it reads $(8, 4)$, which sits on the far side of $C$ and makes $ABCD$ cross itself ✗; the choice $(a - b, c)$ is REVERSING THE HORIZONTAL SUBTRACTION, writing $a - b$ where the shift asks for $b - a$, which reads $(-2, 4)$ instead of $(2, 4)$ ✗; the choice $\\left(\\frac{b}{2}, \\frac{c}{2}\\right)$ is FINDING THE CENTER OF THE PARALLELOGRAM — the midpoint of diagonal $\\overline{AC}$ — rather than the missing corner, reading $(2.5, 2)$ ✗.)',
    },
    {
      q: 'Three vertices of a parallelogram are $(0, 0)$, $(2a, 0)$, and $(2b, 2c)$, where $a$, $b$, and $c$ are positive and both of the named vertices are adjacent to the origin. Which point is the fourth vertex, the one opposite $(0, 0)$?',
      choices: ['$(2a + 2b, 2c)$', '$(2b - 2a, 2c)$', '$(a + b, c)$', '$(2a + 2c, 2b)$'],
      answer: 0,
      solution:
        'Route one, copy a side as a shift: the side from the origin to $(2b, 2c)$ is a move of $(2b, 2c)$, and the side opposite it starts at $(2a, 0)$ and must be the same move. So the far vertex is $(2a + 2b, 0 + 2c) = (2a + 2b, 2c)$ ✓. Check a second, independent way, with numbers and a slope test: take $a = 2$, $b = 3$, $c = 1$, giving $(0, 0)$, $(4, 0)$, $(6, 2)$, and the candidate $(10, 2)$. The bottom side runs from $(0, 0)$ to $(4, 0)$, four across and level; the top side runs from $(6, 2)$ to $(10, 2)$, four across and level. Both slanted sides climb by $(6, 2)$. Two pairs of parallel, equal sides is a parallelogram ✓. (The choice $(2b - 2a, 2c)$ is SUBTRACTING THE SHIFT INSTEAD OF ADDING IT, landing at $(2, 2)$, which sits off to the left of the figure instead of at the far corner ✗; the choice $(a + b, c)$ is HALVING EVERYTHING and so landing on the center of the parallelogram — the midpoint of the diagonal from the origin — which reads $(5, 1)$ ✗; the choice $(2a + 2c, 2b)$ is SWAPPING $b$ AND $c$ while adding the second vertex on, reading $(6, 6)$ ✗.)',
    },
    {
      q: 'A parallelogram $PQRS$ has its vertices listed in order around the figure, with $P(0, 0)$, $Q(a, 0)$, and $R(a + b, c)$, where $a$, $b$, and $c$ are positive. Which point is $S$?',
      choices: ['$(2a + b, c)$', '$(b - a, c)$', '$\\left(\\frac{a + b}{2}, \\frac{c}{2}\\right)$', '$(b, c)$'],
      answer: 3,
      solution:
        'Route one, copy a side as a shift: the side $\\overline{PS}$ is opposite $\\overline{QR}$, so the move from $P$ to $S$ equals the move from $Q$ to $R$, which is $(a + b - a, c - 0) = (b, c)$. Applying that move to $P(0, 0)$ gives $S = (b, c)$ ✓. Check a second, independent way, with numbers and a slope test: take $a = 4$, $b = 1$, $c = 3$, giving $P(0, 0)$, $Q(4, 0)$, $R(5, 3)$, and the candidate $S(1, 3)$. Side $\\overline{PQ}$ is four across and level, and side $\\overline{SR}$ runs from $(1, 3)$ to $(5, 3)$ — also four across and level. One pair of sides that are both parallel and equally long forces a parallelogram ✓. (The choice $(2a + b, c)$ is ADDING THE STEP FROM $P$ TO $Q$ ONTO $R$ instead of subtracting it, landing at $(9, 3)$, a point beyond $R$ rather than beside $P$ ✗; the choice $(b - a, c)$ is SUBTRACTING THE STEP $(a, 0)$ FROM $R$ TWICE OVER, landing at $(-3, 3)$ ✗; the choice $\\left(\\frac{a + b}{2}, \\frac{c}{2}\\right)$ is FINDING WHERE THE DIAGONALS CROSS — the midpoint of $\\overline{PR}$ — rather than the missing corner, reading $(2.5, 1.5)$ ✗.)',
    },
  ],
  // s6 — the placement that puts a shape’s own symmetry on display.
  [
    {
      q: 'You are proving a theorem about an equilateral triangle. Which placement both shows off the symmetry and really does produce an equilateral triangle? Assume $a$ is positive.',
      choices: [
        'Base vertices $(-a, 0)$ and $(a, 0)$, apex $(0, a)$',
        'Base vertices $(-a, 0)$ and $(a, 0)$, apex $(0, a\\sqrt{3})$',
        'Base vertices $(0, 0)$ and $(2a, 0)$, apex $(a, 2a)$',
        'Vertices $(0, 0)$, $(a, 0)$, and $(0, a)$',
      ],
      answer: 1,
      solution:
        'Route one, straddle the $y$-axis and then solve for the height: putting the base endpoints at $(-a, 0)$ and $(a, 0)$ makes the $y$-axis the line of symmetry, so the apex belongs on it at $(0, h)$. The base is then $2a$ long, and each slanted side is $\\sqrt{a^2 + h^2}$. Equilateral demands $\\sqrt{a^2 + h^2} = 2a$, so $a^2 + h^2 = 4a^2$, giving $h^2 = 3a^2$ and $h = a\\sqrt{3}$ because both $a$ and $h$ are positive. The placement is base $(-a, 0)$ and $(a, 0)$ with apex $(0, a\\sqrt{3})$ ✓. Check a second, independent way, by measuring all three sides of a drawn instance: take $a = 2$, so the vertices are $(-2, 0)$, $(2, 0)$, and $(0, 2\\sqrt{3}) \\approx (0, 3.46)$. The base runs from $-2$ to $2$, length $4$. The left side measures $\\sqrt{2^2 + (2\\sqrt{3})^2} = \\sqrt{4 + 12} = \\sqrt{16} = 4$, and by the mirror image across the $y$-axis the right side measures $4$ as well. Three sides of length $4$ ✓. (The choice with apex $(0, a)$ is SETTING THE HEIGHT EQUAL TO THE HALF-BASE, which gives slanted sides of $\\sqrt{a^2 + a^2} = a\\sqrt{2} \\approx 1.41a$ against a base of $2a$ — symmetric, but not equilateral ✗; the choice with apex $(a, 2a)$ is SETTING THE HEIGHT EQUAL TO THE WHOLE BASE, giving slanted sides of $\\sqrt{a^2 + 4a^2} = a\\sqrt{5} \\approx 2.24a$ against a base of $2a$, and its line of symmetry is $x = a$ rather than the $y$-axis, so none of the symmetry comes for free ✗; the choice $(0, 0)$, $(a, 0)$, $(0, a)$ is BUILDING THE RIGHT ISOSCELES TRIANGLE, whose sides are $a$, $a$, and $a\\sqrt{2}$ — two equal sides is one short of three ✗.)',
    },
    {
      q: 'You are proving a theorem about an isosceles right triangle. Which placement builds in both the right angle and the pair of equal legs? Assume $a$, $b$, and $c$ are positive.',
      choices: [
        'Legs on the axes: $(0, 0)$, $(a, 0)$, $(0, b)$',
        'Base vertices $(-a, 0)$ and $(a, 0)$, apex $(0, b)$',
        'Vertices $(0, 0)$, $(a, 0)$, and $(b, c)$',
        'Legs on the axes: $(0, 0)$, $(a, 0)$, $(0, a)$',
      ],
      answer: 3,
      solution:
        'Route one, count the conditions the shape carries: an isosceles right triangle asks for two things at once — a right angle and two equal legs — so the placement must build in both and leave nothing else assumed. Sending the two legs out from the origin along the axes makes them perpendicular for free, and naming both of them $a$ makes them equal. That is exactly $(0, 0)$, $(a, 0)$, $(0, a)$, and the single free letter $a$ still reaches every size ✓. Check a second, independent way, by measuring a drawn instance: take $a = 5$, so the vertices are $(0, 0)$, $(5, 0)$, $(0, 5)$. One leg is horizontal and one is vertical, so the angle at the origin is right; both legs measure $5$; the hypotenuse joins $(5, 0)$ to $(0, 5)$ and measures $\\sqrt{25 + 25} = 5\\sqrt{2}$. The line $y = x$ reflects the figure onto itself, swapping the two legs, so the symmetry is on display too ✓. (The choice $(0, 0)$, $(a, 0)$, $(0, b)$ is SPENDING TWO LETTERS ON THE LEGS, which builds the right angle but drops the isosceles condition — at $a = 5$, $b = 2$ the legs are unequal ✗; the choice with base $(\\pm a, 0)$ and apex $(0, b)$ is BUILDING THE SYMMETRY BUT NOT THE RIGHT ANGLE, since the apex angle is right only in the one case $b = a$ and $b$ is left free ✗; the choice $(0, 0)$, $(a, 0)$, $(b, c)$ is REACHING FOR THE ALL-PURPOSE TRIANGLE, which assumes neither the right angle nor the equal legs and so proves nothing about this shape ✗.)',
    },
    {
      q: 'You are proving a theorem about a rhombus. Which placement makes both of its diagonals and its symmetry easiest to work with? Assume $a$, $b$, and $c$ are positive.',
      choices: [
        'A vertex at the origin: $(0, 0)$, $(a, 0)$, $(a + b, c)$, $(b, c)$',
        'Sides on the axes: $(0, 0)$, $(a, 0)$, $(a, b)$, $(0, b)$',
        'Diagonals on the axes: $(\\pm a, 0)$ and $(0, \\pm b)$',
        'Diagonals on the axes and equal in length: $(\\pm a, 0)$ and $(0, \\pm a)$',
      ],
      answer: 2,
      solution:
        'Route one, put the shape’s own lines of symmetry on the axes: a rhombus is folded onto itself by each of its diagonals, so lay the diagonals along the axes. The vertices become $(a, 0)$, $(0, b)$, $(-a, 0)$, $(0, -b)$, and every side then measures $\\sqrt{a^2 + b^2}$ — for instance the side from $(a, 0)$ to $(0, b)$ is $\\sqrt{a^2 + b^2}$, and each of the other three is the same computation with signs that square away. Four equal sides, both diagonals sitting on axes, two free letters ✓. Check a second, independent way, by measuring a drawn instance: take $a = 4$ and $b = 3$, giving $(4, 0)$, $(0, 3)$, $(-4, 0)$, $(0, -3)$. The four sides measure $\\sqrt{16 + 9} = 5$ apiece. The diagonals are the segment from $(-4, 0)$ to $(4, 0)$, length $8$, and the segment from $(0, -3)$ to $(0, 3)$, length $6$ — different lengths, so the figure is a rhombus and not a square ✓. (The choice $(0, 0)$, $(a, 0)$, $(a + b, c)$, $(b, c)$ is PLACING THE GENERAL PARALLELOGRAM, whose sides measure $a$ and $\\sqrt{b^2 + c^2}$ and are equal only if you add that condition by hand ✗; the choice $(0, 0)$, $(a, 0)$, $(a, b)$, $(0, b)$ is PLACING A RECTANGLE, whose sides measure $a$ and $b$ and so are unequal except in the single case $a = b$ ✗; the choice with $(\\pm a, 0)$ and $(0, \\pm a)$ is SPENDING ONE LETTER ON BOTH DIAGONALS, which makes the two diagonals equal and narrows the figure to a square ✗.)',
    },
  ],
  // s7 — the midpoint quadrilateral; the answer depends on the starting shape.
  [
    {
      q: 'Start from a rectangle and join the midpoints of its four sides in order. The quadrilateral you get is always a:',
      fig: {
        view: [-1.5, -1.5, 9.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 5], [0, 5]], fill: false },
          { t: 'poly', pts: [[4, 0], [8, 2.5], [4, 5], [0, 2.5]], fill: false },
          { t: 'point', p: [4, 0], dx: 0, dy: 16 },
          { t: 'point', p: [8, 2.5], dx: 14, dy: 4 },
          { t: 'point', p: [4, 5], dx: 0, dy: -10 },
          { t: 'point', p: [0, 2.5], dx: -14, dy: 4 },
        ],
      },
      choices: ['rectangle', 'square', 'trapezoid with exactly one pair of parallel sides', 'rhombus'],
      answer: 3,
      solution:
        'Route one, place the rectangle and measure the four new sides: use $(0, 0)$, $(2a, 0)$, $(2a, 2b)$, $(0, 2b)$ with $a$ and $b$ positive, so the side midpoints are $(a, 0)$, $(2a, b)$, $(a, 2b)$, and $(0, b)$. From $(a, 0)$ to $(2a, b)$ is $\\sqrt{a^2 + b^2}$; from $(2a, b)$ to $(a, 2b)$ is $\\sqrt{a^2 + b^2}$; the remaining two sides repeat the same computation. Four equal sides make a rhombus ✓. Check a second, independent way, with numbers, and check the angles while you are there: take the rectangle $(0, 0)$, $(10, 0)$, $(10, 4)$, $(0, 4)$, whose midpoints are $(5, 0)$, $(10, 2)$, $(5, 4)$, $(0, 2)$. All four sides measure $\\sqrt{25 + 4} = \\sqrt{29}$. The side from $(5, 0)$ to $(10, 2)$ has slope $\\frac{2}{5}$ and the next side has slope $-\\frac{2}{5}$; their product is $-\\frac{4}{25}$, not $-1$, so the corners are not right angles. Equal sides without right angles is a rhombus ✓. (The choice rectangle is EXPECTING THE NEW FIGURE TO INHERIT THE OLD ONE’S RIGHT ANGLES, but its sides run parallel to the rectangle’s diagonals, and those diagonals cross at a right angle only when the rectangle is a square ✗; the choice square is DEMANDING THE RIGHT ANGLES ON TOP OF THE EQUAL SIDES, and only the equal sides come free ✗; the choice trapezoid with exactly one pair of parallel sides is OVERLOOKING THAT BOTH PAIRS OF OPPOSITE SIDES ARE MIDSEGMENTS, each parallel to one of the two diagonals, so both pairs are parallel ✗.)',
    },
    {
      q: 'Start from a rhombus and join the midpoints of its four sides in order. The quadrilateral you get is always a:',
      fig: {
        view: [-1.5, -1.5, 9.5, 7.5],
        elems: [
          { t: 'poly', pts: [[4, 0], [8, 3], [4, 6], [0, 3]], fill: false },
          { t: 'poly', pts: [[6, 1.5], [6, 4.5], [2, 4.5], [2, 1.5]], fill: false },
          { t: 'point', p: [6, 1.5], dx: 14, dy: 4 },
          { t: 'point', p: [6, 4.5], dx: 14, dy: 0 },
          { t: 'point', p: [2, 4.5], dx: -14, dy: 0 },
          { t: 'point', p: [2, 1.5], dx: -14, dy: 4 },
        ],
      },
      choices: ['rhombus', 'rectangle', 'square', 'kite that is not a parallelogram'],
      answer: 1,
      solution:
        'Route one, place the rhombus on its own diagonals: with $a$ and $b$ positive, put the vertices at $(a, 0)$, $(0, b)$, $(-a, 0)$, $(0, -b)$, which makes all four sides $\\sqrt{a^2 + b^2}$ and so is a genuine rhombus. Its side midpoints, taken in order, are $\\left(\\frac{a}{2}, \\frac{b}{2}\\right)$, $\\left(-\\frac{a}{2}, \\frac{b}{2}\\right)$, $\\left(-\\frac{a}{2}, -\\frac{b}{2}\\right)$, and $\\left(\\frac{a}{2}, -\\frac{b}{2}\\right)$. Two of those sides are horizontal and two are vertical, so all four corners are right angles: a rectangle ✓. Check a second, independent way, with numbers, and check the side lengths while you are there: take the rhombus $(5, 0)$, $(0, 3)$, $(-5, 0)$, $(0, -3)$, whose four sides all measure $\\sqrt{25 + 9} = \\sqrt{34}$. Its midpoints are $(2.5, 1.5)$, $(-2.5, 1.5)$, $(-2.5, -1.5)$, $(2.5, -1.5)$ — a figure $5$ wide and $3$ tall with horizontal and vertical sides. Right angles, unequal side lengths: a rectangle that is not a square ✓. (The choice rhombus is EXPECTING THE NEW FIGURE TO COPY THE OLD ONE’S EQUAL SIDES, but the new side lengths are half the two diagonals, and a rhombus has two diagonals of different lengths unless it is a square ✗; the choice square is ASKING FOR EQUAL SIDES ON TOP OF THE RIGHT ANGLES, which would need the rhombus’s two diagonals to match — in the example they are $10$ and $6$ ✗; the choice kite that is not a parallelogram is FORGETTING THAT THE MIDPOINT FIGURE OF ANY QUADRILATERAL IS ALWAYS A PARALLELOGRAM, so it can never be a kite of that sort ✗.)',
    },
    {
      q: 'Start from a square and join the midpoints of its four sides in order. The quadrilateral you get is always a:',
      fig: {
        view: [-1.5, -1.5, 7.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 6], [0, 6]], fill: false },
          { t: 'poly', pts: [[3, 0], [6, 3], [3, 6], [0, 3]], fill: false },
          { t: 'point', p: [3, 0], dx: 0, dy: 16 },
          { t: 'point', p: [6, 3], dx: 14, dy: 4 },
          { t: 'point', p: [3, 6], dx: 0, dy: -10 },
          { t: 'point', p: [0, 3], dx: -14, dy: 4 },
        ],
      },
      choices: ['square', 'rhombus that is not a square', 'rectangle that is not a square', 'parallelogram with no right angles'],
      answer: 0,
      solution:
        'Route one, place the square and check both sides and angles: use $(0, 0)$, $(2a, 0)$, $(2a, 2a)$, $(0, 2a)$ with $a$ positive, so the side midpoints are $(a, 0)$, $(2a, a)$, $(a, 2a)$, and $(0, a)$. Each new side measures $\\sqrt{a^2 + a^2} = a\\sqrt{2}$, so all four are equal. The side from $(a, 0)$ to $(2a, a)$ has slope $\\frac{a}{a} = 1$ and the next side, from $(2a, a)$ to $(a, 2a)$, has slope $\\frac{a}{-a} = -1$; their product is $-1$, so the corners are right angles. Equal sides plus right angles is a square ✓. Check a second, independent way, with numbers: take the square $(0, 0)$, $(8, 0)$, $(8, 8)$, $(0, 8)$, whose midpoints are $(4, 0)$, $(8, 4)$, $(4, 8)$, $(0, 4)$. Each side measures $\\sqrt{16 + 16} = \\sqrt{32}$, and the two diagonals of the new figure run from $(4, 0)$ to $(4, 8)$ and from $(0, 4)$ to $(8, 4)$ — both of length $8$, perpendicular, and crossing at each other’s midpoint $(4, 4)$. Equal, perpendicular, bisecting diagonals belong to a square ✓. (The choice rhombus that is not a square is STOPPING AFTER THE EQUAL SIDES and never testing the angles, which the square’s perpendicular diagonals make right ✗; the choice rectangle that is not a square is STOPPING AFTER THE RIGHT ANGLES and never testing the sides, which the square’s equal diagonals make equal ✗; the choice parallelogram with no right angles is QUOTING THE GENERAL RULE FOR AN ARBITRARY QUADRILATERAL and ignoring everything the square adds ✗.)',
    },
  ],
  // s8 — choosing what to compute for a stated proof; the answer is a sentence.
  [
    {
      q: 'To prove with coordinates that the diagonals of a rhombus are perpendicular, what should you compute?',
      choices: [
        'The slopes of both diagonals, showing their product is $-1$',
        'The lengths of both diagonals, showing they are equal',
        'The midpoint of each diagonal, showing the two midpoints agree',
        'The lengths of all four sides, showing they are equal',
      ],
      answer: 0,
      solution:
        'Route one, translate the goal into coordinate language: “perpendicular” is a statement about direction, and the tool that measures direction is slope. Two lines are perpendicular exactly when their slopes multiply to $-1$, so the computation to run is the slope of each diagonal followed by their product. That is the slopes of both diagonals, showing their product is $-1$ ✓. Check a second, independent way, by carrying that computation out on a placed rhombus: put it at $(0, 0)$, $(5, 0)$, $(8, 4)$, $(3, 4)$, where all four sides measure $5$, since $\\sqrt{3^2 + 4^2} = 5$. One diagonal joins $(0, 0)$ to $(8, 4)$, slope $\\frac{4}{8} = \\frac{1}{2}$; the other joins $(5, 0)$ to $(3, 4)$, slope $\\frac{4}{-2} = -2$. Their product is $\\frac{1}{2} \\cdot (-2) = -1$, and the claim is settled by exactly those two slopes ✓. (The reason about equal lengths fails because EQUAL DIAGONALS IS THE RECTANGLE STATEMENT, NOT THE RHOMBUS ONE, and in the example the diagonals measure $\\sqrt{80}$ and $\\sqrt{20}$ — unequal, while still perpendicular ✗; the reason about matching midpoints fails because A SHARED MIDPOINT PROVES THE DIAGONALS BISECT EACH OTHER, which is already true of every parallelogram and says nothing about the angle they cross at ✗; the reason about the four sides fails because THAT RE-PROVES THE FIGURE IS A RHOMBUS, which the problem hands you for free, and it never mentions the diagonals ✗.)',
    },
    {
      q: 'A parallelogram is placed at $(0, 0)$, $(a, 0)$, $(a + b, c)$, and $(b, c)$, with $a$, $b$, and $c$ positive. To prove with coordinates that its diagonals bisect each other, what should you compute?',
      choices: [
        'The lengths of both diagonals, showing each equals $\\sqrt{(a + b)^2 + c^2}$',
        'The slopes of both diagonals, showing their product is $-1$',
        'The midpoint of each diagonal, showing both equal $\\left(\\frac{a + b}{2}, \\frac{c}{2}\\right)$',
        'The slopes of the two pairs of opposite sides, showing each pair matches',
      ],
      answer: 2,
      solution:
        'Route one, translate the goal into coordinate language: “the diagonals bisect each other” says each diagonal is cut in half by the other, which happens exactly when the two diagonals share one point and that point is the middle of both. The midpoint formula names the middle of a segment outright, so run it twice and compare. That is the midpoint of each diagonal, showing both equal $\\left(\\frac{a + b}{2}, \\frac{c}{2}\\right)$ ✓. Check a second, independent way, by carrying that computation out with numbers: take $a = 6$, $b = 2$, $c = 3$, giving the parallelogram $(0, 0)$, $(6, 0)$, $(8, 3)$, $(2, 3)$. One diagonal joins $(0, 0)$ to $(8, 3)$, midpoint $(4, 1.5)$; the other joins $(6, 0)$ to $(2, 3)$, midpoint $(4, 1.5)$. One point serves as the middle of both segments, so each diagonal passes through the other’s midpoint and the theorem is proved by those two midpoints alone ✓. (The reason about equal lengths fails because THE TWO DIAGONALS OF A PARALLELOGRAM ARE NOT EVEN EQUAL IN GENERAL — in the example they measure $\\sqrt{73}$ and $\\sqrt{25} = 5$ — and equal lengths would not say that either one is cut in half ✗; the reason about slopes multiplying to $-1$ fails because PERPENDICULAR DIAGONALS BELONG TO A RHOMBUS, and here the product is $\\frac{3}{8} \\cdot \\left(-\\frac{3}{4}\\right) = -\\frac{9}{32}$, yet the bisecting still holds ✗; the reason about the sides fails because MATCHING SLOPES ON OPPOSITE SIDES PROVES THE FIGURE IS A PARALLELOGRAM, which is given, and never locates the crossing point of the diagonals ✗.)',
    },
    {
      q: 'A trapezoid is placed with both of its bases lying along horizontal lines. To prove with coordinates that the segment joining the midpoints of its two legs is parallel to the bases, what should you compute?',
      choices: [
        'The lengths of the two legs, showing they are equal',
        'The slope of the midsegment, showing it equals $0$ just as both bases do',
        'The length of the midsegment, showing it is the average of the two bases',
        'The midpoint of each diagonal, showing the two midpoints agree',
      ],
      answer: 1,
      solution:
        'Route one, translate the goal into coordinate language: “parallel” is a statement about direction, and two lines are parallel exactly when their slopes match. The bases were laid along horizontal lines, so each base has slope $0$; the job is therefore to find the midpoints of the two legs, run the slope formula on the segment joining them, and see $0$ come out. That is the slope of the midsegment, showing it equals $0$ just as both bases do ✓. Check a second, independent way, by carrying that computation out with numbers: take the trapezoid $(0, 0)$, $(10, 0)$, $(8, 4)$, $(3, 4)$, whose bases sit on $y = 0$ and $y = 4$. The leg from $(10, 0)$ to $(8, 4)$ has midpoint $(9, 2)$ and the leg from $(3, 4)$ to $(0, 0)$ has midpoint $(1.5, 2)$. The slope between them is $\\frac{2 - 2}{9 - 1.5} = \\frac{0}{7.5} = 0$, matching both bases, so the midsegment is parallel to them ✓. (The reason about equal legs fails because THAT WOULD ADD AN ISOSCELES ASSUMPTION THE THEOREM NEVER MAKES — in the example the legs measure $\\sqrt{20}$ and $5$, unequal, and the midsegment is parallel to the bases all the same ✗; the reason about the midsegment’s length fails because A LENGTH NEVER ESTABLISHES A DIRECTION; the averaging fact is true here, $7.5 = \\frac{10 + 5}{2}$, but a segment of length $7.5$ could point any way at all ✗; the reason about the diagonals fails because THE DIAGONALS OF A TRAPEZOID DO NOT SHARE A MIDPOINT — in the example they are $(4, 2)$ and $(6.5, 2)$ — and the claim to prove concerns the segment joining the midpoints of the legs ✗.)',
    },
  ],
  // s9 — the midpoint of a named side, written in letters.
  [
    {
      q: 'A triangle has vertices $(0, 0)$, $(2a, 0)$, and $(2b, 2c)$, where $a$, $b$, and $c$ are positive. What is the midpoint of the side connecting $(0, 0)$ and $(2b, 2c)$?',
      choices: ['$(2b, 2c)$', '$(a + b, c)$', '$(b, c)$', '$(b, 2c)$'],
      answer: 2,
      solution:
        'Route one, average the coordinates one at a time: the midpoint of a segment averages the two first coordinates and averages the two second coordinates. Here that is $\\left(\\frac{0 + 2b}{2}, \\frac{0 + 2c}{2}\\right) = (b, c)$. The doubled letters were chosen for exactly this moment, so the halving leaves no fractions behind ✓. Check a second, independent way, with numbers: take $a = 3$, $b = 2$, $c = 5$, so the triangle is $(0, 0)$, $(6, 0)$, $(4, 10)$ and the side in question runs from $(0, 0)$ to $(4, 10)$. Walking that side takes $4$ across and $10$ up, so half the walk is $2$ across and $5$ up, landing on $(2, 5)$. The formula $(b, c)$ at $b = 2$, $c = 5$ reads $(2, 5)$ ✓. (The choice $(2b, 2c)$ is ADDING THE COORDINATES WITHOUT HALVING THEM, which hands back the endpoint $(4, 10)$ itself ✗; the choice $(a + b, c)$ is TAKING THE MIDPOINT OF A DIFFERENT SIDE, the one from $(2a, 0)$ to $(2b, 2c)$, which reads $(5, 5)$ in the example ✗; the choice $(b, 2c)$ is HALVING ONLY THE FIRST COORDINATE and leaving the second at full height, reading $(2, 10)$ ✗.)',
    },
    {
      q: 'A triangle has vertices $(0, 0)$, $(2a, 0)$, and $(2b, 2c)$, where $a$, $b$, and $c$ are positive. What is the midpoint of the side that lies along the $x$-axis?',
      choices: ['$(a, 0)$', '$(2a, 0)$', '$(a, c)$', '$(a + b, c)$'],
      answer: 0,
      solution:
        'Route one, average the coordinates one at a time: the side along the $x$-axis joins $(0, 0)$ to $(2a, 0)$, so its midpoint is $\\left(\\frac{0 + 2a}{2}, \\frac{0 + 0}{2}\\right) = (a, 0)$ ✓. Check a second, independent way, by reading the picture: both endpoints of that side sit on the $x$-axis, so the whole side is a horizontal segment from $0$ to $2a$ and its middle is the number halfway between them, which is $a$, still at height $0$. With $a = 3$ the side runs from $(0, 0)$ to $(6, 0)$ and its middle is $(3, 0)$, matching $(a, 0)$ ✓. (The choice $(2a, 0)$ is ADDING THE COORDINATES WITHOUT HALVING THEM, which hands back the endpoint $(6, 0)$ ✗; the choice $(a, c)$ is BORROWING A HEIGHT FROM THE THIRD VERTEX, though both endpoints of this side sit at height $0$ and no average of two zeros is $c$ ✗; the choice $(a + b, c)$ is TAKING THE MIDPOINT OF A DIFFERENT SIDE ENTIRELY, the one from $(2a, 0)$ to $(2b, 2c)$ ✗.)',
    },
    {
      q: 'A triangle has vertices $(0, 0)$, $(4a, 0)$, and $(2b, 4c)$, where $a$, $b$, and $c$ are positive. What is the midpoint of the side connecting $(4a, 0)$ and $(2b, 4c)$?',
      choices: ['$(4a + 2b, 4c)$', '$(b, 2c)$', '$(2a + b, 4c)$', '$(2a + b, 2c)$'],
      answer: 3,
      solution:
        'Route one, average the coordinates one at a time: the midpoint is $\\left(\\frac{4a + 2b}{2}, \\frac{0 + 4c}{2}\\right)$. Splitting the first fraction gives $\\frac{4a}{2} + \\frac{2b}{2} = 2a + b$, and the second gives $2c$, so the midpoint is $(2a + b, 2c)$ ✓. Check a second, independent way, with numbers: take $a = 2$, $b = 3$, $c = 1$, so the triangle is $(0, 0)$, $(8, 0)$, $(6, 4)$ and the side runs from $(8, 0)$ to $(6, 4)$. Walking that side takes $2$ to the left and $4$ up, so half the walk is $1$ left and $2$ up, landing on $(7, 2)$. The formula $(2a + b, 2c)$ reads $(4 + 3, 2) = (7, 2)$ ✓. (The choice $(4a + 2b, 4c)$ is ADDING THE COORDINATES WITHOUT DIVIDING BY $2$, reading $(14, 4)$ — a point outside the triangle altogether ✗; the choice $(b, 2c)$ is TAKING THE MIDPOINT OF THE WRONG SIDE, the one from $(0, 0)$ to $(2b, 4c)$, which reads $(3, 2)$ ✗; the choice $(2a + b, 4c)$ is HALVING ONLY THE FIRST COORDINATE, reading $(7, 4)$ and leaving the point up at the top vertex’s height ✗.)',
    },
  ],
  // s10 — both diagonal midpoints land on one shared point.
  [
    {
      q: 'A rectangle has vertices $(0, 0)$, $(a, 0)$, $(a, b)$, and $(0, b)$, where $a$ and $b$ are positive. To show that its diagonals bisect each other you compute the midpoint of each diagonal. What do both midpoints equal?',
      choices: ['$(a, b)$', '$\\left(\\frac{a}{2}, \\frac{b}{2}\\right)$', '$\\left(\\frac{a}{2}, 0\\right)$', '$\\left(\\frac{b}{2}, \\frac{a}{2}\\right)$'],
      answer: 1,
      solution:
        'Route one, run the midpoint formula on each diagonal: one diagonal joins $(0, 0)$ to $(a, b)$, giving $\\left(\\frac{0 + a}{2}, \\frac{0 + b}{2}\\right) = \\left(\\frac{a}{2}, \\frac{b}{2}\\right)$. The other joins $(a, 0)$ to $(0, b)$, giving $\\left(\\frac{a + 0}{2}, \\frac{0 + b}{2}\\right) = \\left(\\frac{a}{2}, \\frac{b}{2}\\right)$ — the very same point, so each diagonal is cut in half by the other ✓. Check a second, independent way, with numbers: take $a = 8$ and $b = 6$, so the rectangle is $(0, 0)$, $(8, 0)$, $(8, 6)$, $(0, 6)$. Walking the diagonal from $(0, 0)$ to $(8, 6)$ takes $8$ across and $6$ up, so its middle is $4$ across and $3$ up at $(4, 3)$. Walking the other diagonal from $(8, 0)$ to $(0, 6)$ takes $8$ left and $6$ up, so its middle is $4$ left of $8$ and $3$ up, again $(4, 3)$. The formula $\\left(\\frac{a}{2}, \\frac{b}{2}\\right)$ reads $(4, 3)$ ✓. (The choice $(a, b)$ is ADDING THE ENDPOINTS AND FORGETTING TO DIVIDE BY $2$, which names the far corner $(8, 6)$ instead of the center ✗; the choice $\\left(\\frac{a}{2}, 0\\right)$ is MIDPOINTING A SIDE RATHER THAN A DIAGONAL, namely the bottom side from $(0, 0)$ to $(a, 0)$, which reads $(4, 0)$ ✗; the choice $\\left(\\frac{b}{2}, \\frac{a}{2}\\right)$ is SWAPPING THE TWO LETTERS while writing the midpoint down, reading $(3, 4)$ instead of $(4, 3)$ ✗.)',
    },
    {
      q: 'A square has vertices $(0, 0)$, $(2a, 0)$, $(2a, 2a)$, and $(0, 2a)$, where $a$ is positive. You compute the midpoint of each of its two diagonals. What do both midpoints equal?',
      choices: ['$(2a, 2a)$', '$(a, 0)$', '$(2a, a)$', '$(a, a)$'],
      answer: 3,
      solution:
        'Route one, run the midpoint formula on each diagonal: one diagonal joins $(0, 0)$ to $(2a, 2a)$, giving $\\left(\\frac{0 + 2a}{2}, \\frac{0 + 2a}{2}\\right) = (a, a)$. The other joins $(2a, 0)$ to $(0, 2a)$, giving $\\left(\\frac{2a + 0}{2}, \\frac{0 + 2a}{2}\\right) = (a, a)$ — one shared point ✓. Check a second, independent way, with numbers: take $a = 5$, so the square is $(0, 0)$, $(10, 0)$, $(10, 10)$, $(0, 10)$. The square is $10$ wide and $10$ tall, so its center sits $5$ in from the left edge and $5$ up from the bottom, at $(5, 5)$. Both diagonals of a square run corner to corner through that center and are cut in half there, and the formula $(a, a)$ at $a = 5$ reads $(5, 5)$ ✓. (The choice $(2a, 2a)$ is ADDING THE ENDPOINTS WITHOUT DIVIDING BY $2$, which names the opposite corner $(10, 10)$ ✗; the choice $(a, 0)$ is MIDPOINTING A SIDE RATHER THAN A DIAGONAL, the bottom side from $(0, 0)$ to $(2a, 0)$, reading $(5, 0)$ ✗; the choice $(2a, a)$ is HALVING ONLY THE SECOND COORDINATE, reading $(10, 5)$, which sits out on the right edge ✗.)',
    },
    {
      q: 'A parallelogram has vertices $(0, 0)$, $(2a, 0)$, $(2a + 2b, 2c)$, and $(2b, 2c)$, where $a$, $b$, and $c$ are positive and the doubled letters keep the halving clean. What do the midpoints of its two diagonals equal?',
      choices: ['$(2a + 2b, 2c)$', '$(a, 0)$', '$(a + b, c)$', '$(a + b, 2c)$'],
      answer: 2,
      solution:
        'Route one, run the midpoint formula on each diagonal: one diagonal joins $(0, 0)$ to $(2a + 2b, 2c)$, giving $\\left(\\frac{2a + 2b}{2}, \\frac{2c}{2}\\right) = (a + b, c)$. The other joins $(2a, 0)$ to $(2b, 2c)$, giving $\\left(\\frac{2a + 2b}{2}, \\frac{0 + 2c}{2}\\right) = (a + b, c)$. Both diagonals have the same middle, which is precisely what “the diagonals bisect each other” means ✓. Check a second, independent way, with numbers: take $a = 3$, $b = 1$, $c = 2$, so the parallelogram is $(0, 0)$, $(6, 0)$, $(8, 4)$, $(2, 4)$. Walking from $(0, 0)$ to $(8, 4)$ takes $8$ across and $4$ up, so that diagonal’s middle is $(4, 2)$. Walking from $(6, 0)$ to $(2, 4)$ takes $4$ left and $4$ up, so that diagonal’s middle is $(6 - 2, 0 + 2) = (4, 2)$ as well. The formula $(a + b, c)$ reads $(3 + 1, 2) = (4, 2)$ ✓. (The choice $(2a + 2b, 2c)$ is ADDING THE ENDPOINTS WITHOUT DIVIDING BY $2$, which names the far vertex $(8, 4)$ rather than the center ✗; the choice $(a, 0)$ is MIDPOINTING A SIDE RATHER THAN A DIAGONAL, the side along the $x$-axis, which reads $(3, 0)$ ✗; the choice $(a + b, 2c)$ is HALVING ONLY THE FIRST COORDINATE, reading $(4, 4)$, which sits up on the top side instead of in the middle ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 17,
  sections: { '17.4': s174 },
}
