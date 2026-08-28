// Introduction to Geometry chapter 16 — variations for section 16.2 (Rotations).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is worked twice along routes that share no steps: once
//    through the coordinate rule the section teaches, and once by walking the
//    grid — reading the point as so many units east and so many units north of
//    the center, then turning those two legs — or by rotating the image back
//    and landing on the point the problem started from.
//  - Every coordinate figure is a grid drawn with exact lattice points; the
//    regular-polygon figures in slot 7 carry no grid and use computed vertices
//    rounded to three decimals, since a regular n-gon has no lattice form. The
//    point the question asks for is never plotted and never labeled; only the
//    given point, the given triangle, or the given center appears.
//  - Each distractor is one named mistake, named in CAPS at the end.

const R3 = (x) => Math.round(x * 1000) / 1000

// A regular n-gon centered at the origin, first vertex straight up.
function regPolyFig(n, r = 3) {
  const pts = []
  for (let i = 0; i < n; i++) {
    const a = ((90 + (360 * i) / n) * Math.PI) / 180
    pts.push([R3(r * Math.cos(a)), R3(r * Math.sin(a))])
  }
  return {
    view: [-r - 1, -r - 1, r + 1, r + 1],
    elems: [{ t: 'poly', pts }, { t: 'point', p: [0, 0] }],
  }
}

// One plotted point with a spoke back to the origin, on a grid.
function spokeFig(view, p, label, dx, dy) {
  return {
    view,
    grid: true,
    elems: [
      { t: 'seg', a: [0, 0], b: p, dash: true },
      { t: 'point', p, label, dx, dy },
    ],
  }
}

const s162 = [
  // s1 — a single point through a 90 degree counterclockwise turn about the origin.
  [
    {
      q: 'A tile in a puzzle game sits at $(6, -3)$ on the board’s coordinate grid. The player spins the whole board $90^\\circ$ counterclockwise about the origin. Where does the tile end up?',
      fig: spokeFig([-2, -5, 8, 8], [6, -3], 'T', 12, 6),
      choices: ['$(3, 6)$', '$(-3, -6)$', '$(-6, 3)$', '$(-3, 6)$'],
      answer: 0,
      solution:
        'Route one, the coordinate rule: a $90^\\circ$ counterclockwise turn about the origin is $(x, y) \\to (-y, x)$, so $(6, -3) \\to (3, 6)$ ✓. Check a second, independent way, by walking the grid: from the origin the tile lies $6$ units east and $3$ units south. A quarter turn counterclockwise carries east to north and south to east, so the two legs become $6$ north and $3$ east, which is the point $(3, 6)$ ✓. (The choice $(-3, -6)$ is TURNING CLOCKWISE, the rule $(x, y) \\to (y, -x)$, which would drop the tile into Quadrant III ✗; the choice $(-6, 3)$ is A HALF TURN INSTEAD OF A QUARTER ✗; the choice $(-3, 6)$ is SWAPPING THE COORDINATES BUT LEAVING BOTH SIGNS ALONE, which folds the board over the line $y = x$ rather than turning it ✗.)',
    },
    {
      q: 'On a radar screen the origin marks the tower and a weather balloon shows at $(-7, -2)$. The operator rotates the display $90^\\circ$ counterclockwise about the tower. At which coordinates does the balloon then appear?',
      fig: spokeFig([-9, -9, 4, 3], [-7, -2], 'B', -12, -4),
      choices: ['$(-2, -7)$', '$(-2, 7)$', '$(2, -7)$', '$(7, 2)$'],
      answer: 2,
      solution:
        'Route one, the coordinate rule: a $90^\\circ$ counterclockwise turn about the origin is $(x, y) \\to (-y, x)$, so $(-7, -2) \\to (2, -7)$ ✓. Check a second, independent way, by walking the grid: the balloon sits $7$ units west and $2$ units south of the tower. A quarter turn counterclockwise carries west to south and south to east, so the legs become $7$ south and $2$ east, which is the point $(2, -7)$ ✓. (The choice $(-2, 7)$ is TURNING CLOCKWISE, the rule $(x, y) \\to (y, -x)$ ✗; the choice $(7, 2)$ is A HALF TURN INSTEAD OF A QUARTER ✗; the choice $(-2, -7)$ is SWAPPING THE COORDINATES BUT LEAVING BOTH SIGNS ALONE, a fold over the line $y = x$ rather than a turn ✗.)',
    },
    {
      q: 'A robot arm bolted to the floor at the origin holds a gripper at $(-4, 9)$. The arm swings $90^\\circ$ counterclockwise about the bolt. Where is the gripper afterward?',
      fig: spokeFig([-11, -6, 4, 11], [-4, 9], 'G', -10, -6),
      choices: ['$(9, 4)$', '$(4, -9)$', '$(9, -4)$', '$(-9, -4)$'],
      answer: 3,
      solution:
        'Route one, the coordinate rule: a $90^\\circ$ counterclockwise turn about the origin is $(x, y) \\to (-y, x)$, so $(-4, 9) \\to (-9, -4)$ ✓. Check a second, independent way, by walking the grid: the gripper stands $4$ units west and $9$ units north of the bolt. A quarter turn counterclockwise carries west to south and north to west, so the legs become $4$ south and $9$ west, which is the point $(-9, -4)$ ✓. (The choice $(9, 4)$ is TURNING CLOCKWISE, the rule $(x, y) \\to (y, -x)$ ✗; the choice $(4, -9)$ is A HALF TURN INSTEAD OF A QUARTER ✗; the choice $(9, -4)$ is SWAPPING THE COORDINATES BUT LEAVING BOTH SIGNS ALONE, which folds the arm over the line $y = x$ ✗.)',
    },
  ],
  // s2 — a single point through a 180 degree turn about the origin.
  [
    {
      q: 'A chess-style piece rests at $(-8, -5)$ on a coordinate board whose center is the origin. The board is turned $180^\\circ$ so that the other player faces it. Where is the piece now?',
      fig: spokeFig([-10, -7, 10, 7], [-8, -5], 'P', -12, -4),
      choices: ['$(8, -5)$', '$(8, 5)$', '$(-8, 5)$', '$(5, -8)$'],
      answer: 1,
      solution:
        'Route one, the coordinate rule: a $180^\\circ$ rotation about the origin is $(x, y) \\to (-x, -y)$, so $(-8, -5) \\to (8, 5)$ ✓. Check a second, independent way, through the midpoint: a half turn carries every point straight through the center to the opposite side at the same distance, so the origin must be the midpoint of the piece and its image. The midpoint of $(-8, -5)$ and $(8, 5)$ is $\\left(\\frac{-8 + 8}{2}, \\frac{-5 + 5}{2}\\right) = (0, 0)$, exactly the center of the board ✓. (The choice $(8, -5)$ is NEGATING ONLY THE FIRST COORDINATE, which folds the board over the $y$-axis ✗; the choice $(-8, 5)$ is NEGATING ONLY THE SECOND COORDINATE, a fold over the $x$-axis ✗; the choice $(5, -8)$ is A QUARTER TURN, the rule $(x, y) \\to (-y, x)$, with the coordinates swapped where a half turn swaps nothing ✗.)',
    },
    {
      q: 'A lamp hangs above a stage at the point $(11, -4)$ on the stage plan, and the whole rig is rotated $180^\\circ$ about the origin at center stage. Where does the lamp hang after the rotation?',
      fig: spokeFig([-13, -6, 13, 6], [11, -4], 'L', 12, 6),
      choices: ['$(-11, -4)$', '$(11, 4)$', '$(-11, 4)$', '$(4, 11)$'],
      answer: 2,
      solution:
        'Route one, the coordinate rule: a $180^\\circ$ rotation about the origin is $(x, y) \\to (-x, -y)$, so $(11, -4) \\to (-11, 4)$ ✓. Check a second, independent way, through the midpoint: a half turn sends every point straight through the center to the far side at the same distance, so center stage is the midpoint of the lamp and its image. The midpoint of $(11, -4)$ and $(-11, 4)$ is $\\left(\\frac{11 - 11}{2}, \\frac{-4 + 4}{2}\\right) = (0, 0)$ ✓. (The choice $(-11, -4)$ is NEGATING ONLY THE FIRST COORDINATE, a fold over the $y$-axis ✗; the choice $(11, 4)$ is NEGATING ONLY THE SECOND COORDINATE, a fold over the $x$-axis ✗; the choice $(4, 11)$ is A QUARTER TURN, the rule $(x, y) \\to (-y, x)$, which swaps coordinates that a half turn leaves in place ✗.)',
    },
    {
      q: 'A drone hovers at $(6, 13)$ on a survey grid whose origin is the launch pad. The flight computer applies a $180^\\circ$ rotation about the launch pad to every waypoint. Which point replaces the drone’s waypoint?',
      fig: spokeFig([-8, -15, 8, 15], [6, 13], 'D', 12, 4),
      choices: ['$(-6, 13)$', '$(-13, 6)$', '$(6, -13)$', '$(-6, -13)$'],
      answer: 3,
      solution:
        'Route one, the coordinate rule: a $180^\\circ$ rotation about the origin is $(x, y) \\to (-x, -y)$, so $(6, 13) \\to (-6, -13)$ ✓. Check a second, independent way, through the midpoint: a half turn carries every point straight through the center to the opposite side at the same distance, so the launch pad is the midpoint of the waypoint and its image. The midpoint of $(6, 13)$ and $(-6, -13)$ is $\\left(\\frac{6 - 6}{2}, \\frac{13 - 13}{2}\\right) = (0, 0)$ ✓. (The choice $(-6, 13)$ is NEGATING ONLY THE FIRST COORDINATE, a fold over the $y$-axis ✗; the choice $(6, -13)$ is NEGATING ONLY THE SECOND COORDINATE, a fold over the $x$-axis ✗; the choice $(-13, 6)$ is A QUARTER TURN, the rule $(x, y) \\to (-y, x)$, which swaps coordinates that a half turn leaves in place ✗.)',
    },
  ],
  // s3 — the smallest rotation carrying a regular polygon onto itself.
  [
    {
      q: 'A stop-sign blank is a regular octagon. What is the smallest positive angle you can turn it about its center so that it lands exactly on top of the outline it started in?',
      choices: ['$90^\\circ$', '$40^\\circ$', '$45^\\circ$', '$22.5^\\circ$'],
      answer: 2,
      solution:
        'Route one, divide the full turn into slots: a regular octagon has $8$ identical corners spaced evenly around its center, so one slot of turn is $\\frac{360^\\circ}{8} = 45^\\circ$ ✓. Check a second, independent way, by testing the answer forward and ruling out anything smaller: repeating a $45^\\circ$ turn gives $45^\\circ, 90^\\circ, 135^\\circ, \\ldots, 360^\\circ$, and each of those carries every corner onto another corner. A turn of less than $45^\\circ$ would move the top corner to a spot strictly between it and its neighbor, where the octagon has no corner at all, so the outline could not match; $45^\\circ$ is therefore the first angle that works ✓. (The choice $90^\\circ$ is TURNING TWO SLOTS AT ONCE, a genuine symmetry but not the smallest one ✗; the choice $40^\\circ$ is DIVIDING $360$ BY $9$, one more than the number of corners ✗; the choice $22.5^\\circ$ is HALVING THE CORRECT SLOT, as though the octagon had $16$ corners ✗.)',
    },
    {
      q: 'The face of a clock is marked as a regular $12$-gon, one vertex at each hour. What is the smallest positive rotation about its center that carries the $12$-gon onto itself?',
      choices: ['$36^\\circ$', '$60^\\circ$', '$15^\\circ$', '$30^\\circ$'],
      answer: 3,
      solution:
        'Route one, divide the full turn into slots: a regular $12$-gon has $12$ identical vertices spaced evenly around its center, so one slot of turn is $\\frac{360^\\circ}{12} = 30^\\circ$ ✓. Check a second, independent way, by testing the answer forward and ruling out anything smaller: repeating a $30^\\circ$ turn gives $30^\\circ, 60^\\circ, 90^\\circ, \\ldots, 360^\\circ$, and every one of those carries each vertex onto another vertex — this is the hour hand stepping from one hour mark to the next. A turn of less than $30^\\circ$ would leave the top vertex between two hour marks, where the $12$-gon has no vertex, so nothing smaller can work ✓. (The choice $60^\\circ$ is TURNING TWO SLOTS AT ONCE, a real symmetry but not the smallest ✗; the choice $36^\\circ$ is DIVIDING $360$ BY $10$, miscounting the vertices ✗; the choice $15^\\circ$ is HALVING THE CORRECT SLOT, as though there were $24$ vertices ✗.)',
    },
    {
      q: 'A carnival prize wheel is built as a regular $20$-gon, with one prize printed on each side. Through what smallest positive angle can the wheel be turned about its hub so that the outline of the wheel is unchanged?',
      choices: ['$36^\\circ$', '$18^\\circ$', '$9^\\circ$', '$20^\\circ$'],
      answer: 1,
      solution:
        'Route one, divide the full turn into slots: a regular $20$-gon has $20$ identical sides spaced evenly around the hub, so one slot of turn is $\\frac{360^\\circ}{20} = 18^\\circ$ ✓. Check a second, independent way, by testing the answer forward and ruling out anything smaller: repeating an $18^\\circ$ turn gives $18^\\circ, 36^\\circ, 54^\\circ, \\ldots, 360^\\circ$, and each of those carries every corner of the wheel onto another corner. A turn of less than $18^\\circ$ would leave the top corner between two corners of the original outline, so the two outlines could not match, which makes $18^\\circ$ the first angle that works ✓. (The choice $36^\\circ$ is TURNING TWO SLOTS AT ONCE, a symmetry of the wheel but not the smallest one ✗; the choice $20^\\circ$ is REPORTING THE NUMBER OF SIDES AS THE ANGLE ✗; the choice $9^\\circ$ is HALVING THE CORRECT SLOT, as though the wheel had $40$ corners ✗.)',
    },
  ],
  // s4 — a single point through a 270 degree counterclockwise turn about the origin.
  [
    {
      q: 'A kite is caught at the point $(-3, 5)$ in a wind field that swings everything $270^\\circ$ counterclockwise about the origin. Where does the kite go?',
      fig: spokeFig([-5, -2, 7, 7], [-3, 5], 'K', -10, -6),
      choices: ['$(-5, -3)$', '$(3, -5)$', '$(5, -3)$', '$(5, 3)$'],
      answer: 3,
      solution:
        'Route one, the coordinate rule: a $270^\\circ$ counterclockwise turn about the origin is $(x, y) \\to (y, -x)$, so $(-3, 5) \\to (5, 3)$ ✓. Check a second, independent way, by walking the grid: three quarters of a turn counterclockwise leaves you where one quarter clockwise would, and the kite lies $3$ units west and $5$ units north of the origin. A quarter turn clockwise carries west to north and north to east, so the legs become $3$ north and $5$ east, which is the point $(5, 3)$ ✓. (The choice $(-5, -3)$ is TURNING ONE QUARTER COUNTERCLOCKWISE INSTEAD OF THREE, the rule $(x, y) \\to (-y, x)$ ✗; the choice $(3, -5)$ is A HALF TURN, only two of the three quarters ✗; the choice $(5, -3)$ is SWAPPING THE COORDINATES BUT LEAVING BOTH SIGNS ALONE, a fold over the line $y = x$ rather than a turn ✗.)',
    },
    {
      q: 'A camera mounted at the origin of a floor plan points at a marker at $(8, 5)$. The mount rotates $270^\\circ$ counterclockwise. Where does the marker sit in the rotated plan?',
      fig: spokeFig([-2, -10, 10, 7], [8, 5], 'M', 12, 4),
      choices: ['$(-5, 8)$', '$(5, -8)$', '$(-8, -5)$', '$(5, 8)$'],
      answer: 1,
      solution:
        'Route one, the coordinate rule: a $270^\\circ$ counterclockwise turn about the origin is $(x, y) \\to (y, -x)$, so $(8, 5) \\to (5, -8)$ ✓. Check a second, independent way, by walking the grid: three quarters counterclockwise ends where one quarter clockwise ends, and the marker lies $8$ units east and $5$ units north of the mount. A quarter turn clockwise carries east to south and north to east, so the legs become $8$ south and $5$ east, which is the point $(5, -8)$ ✓. (The choice $(-5, 8)$ is TURNING ONE QUARTER COUNTERCLOCKWISE INSTEAD OF THREE, the rule $(x, y) \\to (-y, x)$ ✗; the choice $(-8, -5)$ is A HALF TURN, only two of the three quarters ✗; the choice $(5, 8)$ is SWAPPING THE COORDINATES BUT LEAVING BOTH SIGNS ALONE, a fold over the line $y = x$ ✗.)',
    },
    {
      q: 'A ride at a fair carries a car at the point $(-7, -6)$ around the central hub at the origin, through $270^\\circ$ counterclockwise. Where does the car stop?',
      fig: spokeFig([-9, -8, 4, 9], [-7, -6], 'C', -12, -4),
      choices: ['$(-6, 7)$', '$(6, -7)$', '$(7, 6)$', '$(-6, -7)$'],
      answer: 0,
      solution:
        'Route one, the coordinate rule: a $270^\\circ$ counterclockwise turn about the origin is $(x, y) \\to (y, -x)$, so $(-7, -6) \\to (-6, 7)$ ✓. Check a second, independent way, by walking the grid: three quarters counterclockwise ends where one quarter clockwise ends, and the car starts $7$ units west and $6$ units south of the hub. A quarter turn clockwise carries west to north and south to west, so the legs become $7$ north and $6$ west, which is the point $(-6, 7)$ ✓. (The choice $(6, -7)$ is TURNING ONE QUARTER COUNTERCLOCKWISE INSTEAD OF THREE, the rule $(x, y) \\to (-y, x)$ ✗; the choice $(7, 6)$ is A HALF TURN, only two of the three quarters ✗; the choice $(-6, -7)$ is SWAPPING THE COORDINATES BUT LEAVING BOTH SIGNS ALONE, a fold over the line $y = x$ ✗.)',
    },
  ],
  // s5 — one named vertex of a triangle through a 90 degree counterclockwise turn.
  [
    {
      q: 'A sail is cut as triangle $ABC$ with $A(2, 1)$, $B(6, 1)$, and $C(6, 4)$ on the pattern grid. The pattern is rotated $90^\\circ$ counterclockwise about the origin. What are the coordinates of the image of $C$?',
      fig: {
        view: [-6, -1, 8, 7],
        grid: true,
        elems: [
          { t: 'poly', pts: [[2, 1], [6, 1], [6, 4]] },
          { t: 'point', p: [2, 1], label: 'A', dx: -8, dy: 14 },
          { t: 'point', p: [6, 1], label: 'B', dx: 10, dy: 14 },
          { t: 'point', p: [6, 4], label: 'C', dx: 12, dy: -4 },
        ],
      },
      choices: ['$(4, -6)$', '$(-4, 6)$', '$(-6, -4)$', '$(4, 6)$'],
      answer: 1,
      solution:
        'Route one, the coordinate rule: every vertex obeys the same $90^\\circ$ counterclockwise rule $(x, y) \\to (-y, x)$, so $C(6, 4) \\to (-4, 6)$ ✓. Check a second, independent way, by walking the grid: $C$ lies $6$ units east and $4$ units north of the origin, and a quarter turn counterclockwise carries east to north and north to west, so the legs become $6$ north and $4$ west, the point $(-4, 6)$. That also agrees with the quadrant: the whole sail sits in Quadrant I, and a quarter turn counterclockwise swings Quadrant I into Quadrant II, where the first coordinate is negative and the second is positive ✓. (The choice $(4, -6)$ is TURNING CLOCKWISE, which would swing the sail into Quadrant IV ✗; the choice $(-6, -4)$ is A HALF TURN INSTEAD OF A QUARTER, landing in Quadrant III ✗; the choice $(4, 6)$ is SWAPPING THE COORDINATES BUT LEAVING BOTH SIGNS ALONE, which never leaves Quadrant I ✗.)',
    },
    {
      q: 'A stained-glass shard is triangle $ABC$ with $A(-1, 2)$, $B(3, 2)$, and $C(3, 7)$. The whole design is turned $90^\\circ$ counterclockwise about the origin. Where does $C$ land?',
      fig: {
        view: [-8, -1, 5, 9],
        grid: true,
        elems: [
          { t: 'poly', pts: [[-1, 2], [3, 2], [3, 7]] },
          { t: 'point', p: [-1, 2], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [3, 2], label: 'B', dx: 10, dy: 14 },
          { t: 'point', p: [3, 7], label: 'C', dx: 12, dy: -4 },
        ],
      },
      choices: ['$(7, -3)$', '$(-3, -7)$', '$(-7, 3)$', '$(7, 3)$'],
      answer: 2,
      solution:
        'Route one, the coordinate rule: every vertex obeys the same $90^\\circ$ counterclockwise rule $(x, y) \\to (-y, x)$, so $C(3, 7) \\to (-7, 3)$ ✓. Check a second, independent way, by walking the grid: $C$ lies $3$ units east and $7$ units north of the origin, and a quarter turn counterclockwise carries east to north and north to west, so the legs become $3$ north and $7$ west, the point $(-7, 3)$. The quadrant agrees: $C$ sits in Quadrant I, and a quarter turn counterclockwise carries Quadrant I into Quadrant II ✓. (The choice $(7, -3)$ is TURNING CLOCKWISE, which puts the image of $C$ in Quadrant IV ✗; the choice $(-3, -7)$ is A HALF TURN INSTEAD OF A QUARTER, landing in Quadrant III ✗; the choice $(7, 3)$ is SWAPPING THE COORDINATES BUT LEAVING BOTH SIGNS ALONE, which never leaves Quadrant I ✗.)',
    },
    {
      q: 'A trapdoor panel is triangle $ABC$ with $A(3, -2)$, $B(8, -2)$, and $C(8, 4)$ on the builder’s grid. The panel is swung $90^\\circ$ counterclockwise about the origin. What are the coordinates of the image of $C$?',
      fig: {
        view: [-6, -4, 10, 7],
        grid: true,
        elems: [
          { t: 'poly', pts: [[3, -2], [8, -2], [8, 4]] },
          { t: 'point', p: [3, -2], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [8, -2], label: 'B', dx: 12, dy: 10 },
          { t: 'point', p: [8, 4], label: 'C', dx: 12, dy: -4 },
        ],
      },
      choices: ['$(4, -8)$', '$(-8, -4)$', '$(4, 8)$', '$(-4, 8)$'],
      answer: 3,
      solution:
        'Route one, the coordinate rule: every vertex obeys the same $90^\\circ$ counterclockwise rule $(x, y) \\to (-y, x)$, so $C(8, 4) \\to (-4, 8)$ ✓. Check a second, independent way, by walking the grid: $C$ lies $8$ units east and $4$ units north of the origin, and a quarter turn counterclockwise carries east to north and north to west, so the legs become $8$ north and $4$ west, the point $(-4, 8)$. The quadrant agrees: $C$ sits in Quadrant I, and a quarter turn counterclockwise swings Quadrant I into Quadrant II ✓. (The choice $(4, -8)$ is TURNING CLOCKWISE, which swings the image of $C$ into Quadrant IV ✗; the choice $(-8, -4)$ is A HALF TURN INSTEAD OF A QUARTER, landing in Quadrant III ✗; the choice $(4, 8)$ is SWAPPING THE COORDINATES BUT LEAVING BOTH SIGNS ALONE, which never leaves Quadrant I ✗.)',
    },
  ],
  // s6 — rewriting a clockwise rotation as a counterclockwise one.
  [
    {
      q: 'A turntable is turned $120^\\circ$ clockwise. A counterclockwise turn through which angle would leave it in exactly the same position?',
      choices: ['$240^\\circ$', '$120^\\circ$', '$60^\\circ$', '$270^\\circ$'],
      answer: 0,
      solution:
        'Route one, take the clockwise turn out of a full turn: going all the way around is $360^\\circ$ and changes nothing, so travelling $120^\\circ$ of the way around clockwise ends where the remaining $360^\\circ - 120^\\circ = 240^\\circ$ counterclockwise ends ✓. Check a second, independent way, by tracking one point by its direction angle: a mark starting at the east position, at direction $0^\\circ$, is carried to direction $0^\\circ - 120^\\circ = -120^\\circ$ by the clockwise turn, and to direction $0^\\circ + 240^\\circ = 240^\\circ$ by the counterclockwise one. Those two readings differ by $240 - (-120) = 360$, one whole revolution, so they name the very same spot on the turntable ✓. (The choice $120^\\circ$ is COPYING THE CLOCKWISE MEASURE AND CHANGING ONLY THE WORD, which turns the mark the wrong way ✗; the choice $60^\\circ$ is SUBTRACTING FROM A HALF TURN, $180^\\circ - 120^\\circ$, instead of a full turn ✗; the choice $270^\\circ$ is QUOTING THE MEMORIZED FACT THAT $90^\\circ$ CLOCKWISE IS $270^\\circ$ COUNTERCLOCKWISE, which answers a different question ✗.)',
    },
    {
      q: 'A dial on a safe is rotated $45^\\circ$ clockwise. Which counterclockwise rotation puts the dial in the identical position?',
      choices: ['$45^\\circ$', '$315^\\circ$', '$135^\\circ$', '$270^\\circ$'],
      answer: 1,
      solution:
        'Route one, take the clockwise turn out of a full turn: a whole revolution of $360^\\circ$ leaves the dial as it was, so $45^\\circ$ clockwise finishes where $360^\\circ - 45^\\circ = 315^\\circ$ counterclockwise finishes ✓. Check a second, independent way, by tracking one point by its direction angle: the pointer starting straight up, at direction $90^\\circ$, is carried to $90^\\circ - 45^\\circ = 45^\\circ$ by the clockwise turn, and to $90^\\circ + 315^\\circ = 405^\\circ$ by the counterclockwise one. Since $405 - 45 = 360$, exactly one revolution, both readings describe the same pointer position ✓. (The choice $45^\\circ$ is COPYING THE CLOCKWISE MEASURE AND CHANGING ONLY THE WORD, which turns the dial the wrong way ✗; the choice $135^\\circ$ is SUBTRACTING FROM A HALF TURN, $180^\\circ - 45^\\circ$, instead of a full turn ✗; the choice $270^\\circ$ is QUOTING THE MEMORIZED FACT THAT $90^\\circ$ CLOCKWISE IS $270^\\circ$ COUNTERCLOCKWISE, a different question ✗.)',
    },
    {
      q: 'A crane cab swivels $210^\\circ$ clockwise. Through what counterclockwise angle could the operator have swivelled instead to face the same direction?',
      choices: ['$210^\\circ$', '$270^\\circ$', '$150^\\circ$', '$30^\\circ$'],
      answer: 2,
      solution:
        'Route one, take the clockwise turn out of a full turn: a complete revolution of $360^\\circ$ brings the cab back to where it began, so $210^\\circ$ clockwise faces the same way as $360^\\circ - 210^\\circ = 150^\\circ$ counterclockwise ✓. Check a second, independent way, by tracking the boom by its direction angle: a boom starting north, at direction $90^\\circ$, is carried to $90^\\circ - 210^\\circ = -120^\\circ$ by the clockwise swivel, and to $90^\\circ + 150^\\circ = 240^\\circ$ by the counterclockwise one. Those differ by $240 - (-120) = 360$, one full revolution, so the boom points the same way either way ✓. (The choice $210^\\circ$ is COPYING THE CLOCKWISE MEASURE AND CHANGING ONLY THE WORD, which swings the boom the wrong way ✗; the choice $30^\\circ$ is SUBTRACTING A HALF TURN FROM THE ANGLE, $210^\\circ - 180^\\circ$, instead of subtracting the angle from a full turn ✗; the choice $270^\\circ$ is QUOTING THE MEMORIZED FACT THAT $90^\\circ$ CLOCKWISE IS $270^\\circ$ COUNTERCLOCKWISE, which answers a different question ✗.)',
    },
  ],
  // s7 — the order of rotational symmetry of a regular polygon.
  [
    {
      q: 'A brass coaster is cut as a regular nonagon, a polygon with nine equal sides. What is its order of rotational symmetry?',
      fig: regPolyFig(9),
      choices: ['$8$', '$18$', '$9$', '$1$'],
      answer: 2,
      solution:
        'Route one, the rule for regular polygons: a regular polygon with $n$ sides has rotational symmetry of order $n$, and the nonagon has $n = 9$, so the order is $9$ ✓. Check a second, independent way, by listing the turns that work: the smallest one is $\\frac{360^\\circ}{9} = 40^\\circ$, and the turns that carry the coaster onto itself are its multiples $40^\\circ, 80^\\circ, 120^\\circ, 160^\\circ, 200^\\circ, 240^\\circ, 280^\\circ, 320^\\circ$ and $360^\\circ$. Counting them gives nine ✓. (The choice $8$ is DROPPING THE FULL TURN FROM THE COUNT, but the $360^\\circ$ rotation is always counted in the order ✗; the choice $18$ is ADDING IN THE NINE LINES OF SYMMETRY, which are reflections rather than rotations ✗; the choice $1$ is COUNTING ONLY THE FULL TURN, as though no smaller rotation matched the outline ✗.)',
    },
    {
      q: 'A decorative window is framed as a regular $15$-gon. What is its order of rotational symmetry?',
      fig: regPolyFig(15),
      choices: ['$15$', '$14$', '$30$', '$24$'],
      answer: 0,
      solution:
        'Route one, the rule for regular polygons: a regular polygon with $n$ sides has rotational symmetry of order $n$, and here $n = 15$, so the order is $15$ ✓. Check a second, independent way, by listing the turns that work: the smallest one is $\\frac{360^\\circ}{15} = 24^\\circ$, and the rotations that carry the frame onto itself are its multiples $24^\\circ, 48^\\circ, 72^\\circ, \\ldots, 360^\\circ$. Since $24 \\times 15 = 360$, that list runs from the first multiple to the fifteenth, which is fifteen rotations ✓. (The choice $14$ is DROPPING THE FULL TURN FROM THE COUNT, though the $360^\\circ$ rotation belongs to the order ✗; the choice $30$ is ADDING IN THE FIFTEEN LINES OF SYMMETRY, which are reflections rather than rotations ✗; the choice $24$ is REPORTING THE SMALLEST ANGLE IN DEGREES INSTEAD OF THE NUMBER OF ROTATIONS ✗.)',
    },
    {
      q: 'A sea-glass pendant is ground into a regular $14$-gon. What is its order of rotational symmetry?',
      fig: regPolyFig(14),
      choices: ['$13$', '$28$', '$7$', '$14$'],
      answer: 3,
      solution:
        'Route one, the rule for regular polygons: a regular polygon with $n$ sides has rotational symmetry of order $n$, and here $n = 14$, so the order is $14$ ✓. Check a second, independent way, by listing the turns that work: the smallest one is $\\frac{360^\\circ}{14} = \\frac{180^\\circ}{7}$, and the rotations that carry the pendant onto itself are its multiples, one for each step a corner can take around to another corner. A corner has exactly $14$ corner positions to land on, itself included after a full turn, so the count is $14$ ✓. (The choice $13$ is DROPPING THE FULL TURN FROM THE COUNT, though the $360^\\circ$ rotation belongs to the order ✗; the choice $28$ is ADDING IN THE FOURTEEN LINES OF SYMMETRY, which are reflections rather than rotations ✗; the choice $7$ is COUNTING ONLY EVERY OTHER TURN, the ones that carry a corner to a corner two steps along ✗.)',
    },
  ],
  // s8 — running a 90 degree counterclockwise rotation backwards to the pre-image.
  [
    {
      q: 'A design program rotated a logo $90^\\circ$ counterclockwise about the origin, and one anchor of the logo now sits at $P\'(3, -8)$. Where was that anchor before the rotation?',
      fig: spokeFig([-10, -10, 5, 3], [3, -8], "P'", 12, 6),
      choices: ['$(8, 3)$', '$(-3, 8)$', '$(-8, 3)$', '$(-8, -3)$'],
      answer: 3,
      solution:
        'Route one, undo the turn: reversing a $90^\\circ$ counterclockwise rotation means turning $90^\\circ$ clockwise, which is the rule $(x, y) \\to (y, -x)$. Applying it to $P\'(3, -8)$ gives $(-8, -3)$ ✓. Check a second, independent way, by running that candidate forwards on the grid: the point $(-8, -3)$ lies $8$ units west and $3$ units south of the origin, and a quarter turn counterclockwise carries west to south and south to east, so its legs become $8$ south and $3$ east — the point $(3, -8)$, exactly where the anchor was found ✓. (The choice $(8, 3)$ is ROTATING THE IMAGE ANOTHER QUARTER TURN FORWARD instead of backward ✗; the choice $(-3, 8)$ is A HALF TURN, which undoes nothing here ✗; the choice $(-8, 3)$ is SWAPPING THE COORDINATES AND NEGATING NEITHER, which folds the image over the line $y = x$ rather than turning it back ✗.)',
    },
    {
      q: 'A game rotates the whole map $90^\\circ$ counterclockwise about the origin whenever a level begins. A treasure chest shows on the rotated map at $(9, 4)$. What were the chest’s coordinates on the map before the level began?',
      fig: spokeFig([-3, -11, 11, 6], [9, 4], 'Q', 12, 4),
      choices: ['$(-4, 9)$', '$(4, -9)$', '$(-9, -4)$', '$(4, 9)$'],
      answer: 1,
      solution:
        'Route one, undo the turn: reversing a $90^\\circ$ counterclockwise rotation means turning $90^\\circ$ clockwise, the rule $(x, y) \\to (y, -x)$. Applying it to $(9, 4)$ gives $(4, -9)$ ✓. Check a second, independent way, by running that candidate forwards on the grid: the point $(4, -9)$ lies $4$ units east and $9$ units south of the origin, and a quarter turn counterclockwise carries east to north and south to east, so its legs become $4$ north and $9$ east — the point $(9, 4)$, exactly where the chest shows ✓. (The choice $(-4, 9)$ is ROTATING THE IMAGE ANOTHER QUARTER TURN FORWARD instead of backward ✗; the choice $(-9, -4)$ is A HALF TURN, which does not undo a quarter turn ✗; the choice $(4, 9)$ is SWAPPING THE COORDINATES AND NEGATING NEITHER, a fold over the line $y = x$ rather than a turn back ✗.)',
    },
    {
      q: 'A survey plot was recorded after the plan had been rotated $90^\\circ$ counterclockwise about the origin, and one corner stake reads $(-12, 5)$ on that record. Where does the stake stand on the original plan?',
      fig: spokeFig([-14, -3, 8, 14], [-12, 5], 'S', -12, -6),
      choices: ['$(-5, -12)$', '$(12, -5)$', '$(5, 12)$', '$(5, -12)$'],
      answer: 2,
      solution:
        'Route one, undo the turn: reversing a $90^\\circ$ counterclockwise rotation means turning $90^\\circ$ clockwise, the rule $(x, y) \\to (y, -x)$. Applying it to $(-12, 5)$ gives $(5, 12)$ ✓. Check a second, independent way, by running that candidate forwards on the grid: the point $(5, 12)$ lies $5$ units east and $12$ units north of the origin, and a quarter turn counterclockwise carries east to north and north to west, so its legs become $5$ north and $12$ west — the point $(-12, 5)$, exactly the reading on the record ✓. (The choice $(-5, -12)$ is ROTATING THE RECORDED POINT ANOTHER QUARTER TURN FORWARD instead of backward ✗; the choice $(12, -5)$ is A HALF TURN, which does not undo a quarter turn ✗; the choice $(5, -12)$ is SWAPPING THE COORDINATES AND NEGATING NEITHER, a fold over the line $y = x$ ✗.)',
    },
  ],
  // s9 — two rotations about the origin, one after the other.
  [
    {
      q: 'A marker at $(-8, 3)$ is rotated $180^\\circ$ about the origin, and the result is then rotated $90^\\circ$ counterclockwise about the origin. Where does the marker finish?',
      fig: spokeFig([-10, -2, 5, 10], [-8, 3], 'M', -12, -4),
      choices: ['$(3, 8)$', '$(8, -3)$', '$(-3, -8)$', '$(-3, 8)$'],
      answer: 0,
      solution:
        'Route one, add the angles: two rotations about the same center combine into one rotation of the summed angle, and $180^\\circ + 90^\\circ = 270^\\circ$ counterclockwise, whose rule is $(x, y) \\to (y, -x)$. That sends $(-8, 3)$ straight to $(3, 8)$ ✓. Check a second, independent way, one rotation at a time: the half turn sends $(-8, 3)$ to $(8, -3)$ by flipping both signs, and the quarter turn then sends $(8, -3)$ to $(3, 8)$ by the rule $(x, y) \\to (-y, x)$ ✓. (The choice $(8, -3)$ is STOPPING AFTER THE HALF TURN and never doing the quarter turn ✗; the choice $(-3, -8)$ is DOING ONLY THE QUARTER TURN, applying $(x, y) \\to (-y, x)$ to the original marker ✗; the choice $(-3, 8)$ is SWAPPING THE COORDINATES OF THE HALF-TURN IMAGE WITHOUT CHANGING A SIGN ✗.)',
    },
    {
      q: 'A drill bit at $(5, -11)$ on a machinist’s grid is first rotated $180^\\circ$ about the origin, and the result is then rotated $90^\\circ$ counterclockwise about the origin. What are its final coordinates?',
      fig: spokeFig([-13, -13, 7, 3], [5, -11], 'D', 12, 6),
      choices: ['$(-5, 11)$', '$(11, 5)$', '$(11, -5)$', '$(-11, -5)$'],
      answer: 3,
      solution:
        'Route one, add the angles: rotations about the same center add, and $180^\\circ + 90^\\circ = 270^\\circ$ counterclockwise, whose rule is $(x, y) \\to (y, -x)$. That sends $(5, -11)$ straight to $(-11, -5)$ ✓. Check a second, independent way, one rotation at a time: the half turn flips both signs and sends $(5, -11)$ to $(-5, 11)$, and the quarter turn then sends $(-5, 11)$ to $(-11, -5)$ by the rule $(x, y) \\to (-y, x)$ ✓. (The choice $(-5, 11)$ is STOPPING AFTER THE HALF TURN ✗; the choice $(11, 5)$ is DOING ONLY THE QUARTER TURN, applying $(x, y) \\to (-y, x)$ to the original point ✗; the choice $(11, -5)$ is SWAPPING THE COORDINATES OF THE HALF-TURN IMAGE WITHOUT CHANGING A SIGN ✗.)',
    },
    {
      q: 'A beacon plotted at $(9, 7)$ is rotated $180^\\circ$ about the origin, and that image is then rotated $90^\\circ$ counterclockwise about the origin. Where does the beacon end up?',
      fig: spokeFig([-2, -11, 11, 9], [9, 7], 'B', 12, 4),
      choices: ['$(-9, -7)$', '$(7, -9)$', '$(-7, 9)$', '$(-7, -9)$'],
      answer: 1,
      solution:
        'Route one, add the angles: rotations about the same center add, and $180^\\circ + 90^\\circ = 270^\\circ$ counterclockwise, whose rule is $(x, y) \\to (y, -x)$. That sends $(9, 7)$ straight to $(7, -9)$ ✓. Check a second, independent way, one rotation at a time: the half turn flips both signs and sends $(9, 7)$ to $(-9, -7)$, and the quarter turn then sends $(-9, -7)$ to $(7, -9)$ by the rule $(x, y) \\to (-y, x)$ ✓. (The choice $(-9, -7)$ is STOPPING AFTER THE HALF TURN ✗; the choice $(-7, 9)$ is DOING ONLY THE QUARTER TURN, applying $(x, y) \\to (-y, x)$ to the original beacon ✗; the choice $(-7, -9)$ is SWAPPING THE COORDINATES OF THE HALF-TURN IMAGE WITHOUT CHANGING A SIGN ✗.)',
    },
  ],
  // s10 — a 180 degree rotation about a center that is not the origin.
  [
    {
      q: 'A seesaw plank is pinned to the ground at $C(4, 5)$, and one end of the plank is at $A(7, 3)$. The plank is swung $180^\\circ$ about the pin. Where is that end of the plank afterward?',
      fig: {
        view: [-1, -1, 9, 9],
        grid: true,
        elems: [
          { t: 'seg', a: [7, 3], b: [4, 5], dash: true },
          { t: 'point', p: [7, 3], label: 'A', dx: 12, dy: 4 },
          { t: 'point', p: [4, 5], label: 'C', dx: -10, dy: -6 },
        ],
      },
      choices: ['$(-7, -3)$', '$(11, 8)$', '$(1, 7)$', '$(1, 3)$'],
      answer: 2,
      solution:
        'Route one, the rule for a half turn about $C(a, b)$: it sends $(x, y) \\to (2a - x, 2b - y)$, so $A(7, 3)$ goes to $(2 \\cdot 4 - 7, 2 \\cdot 5 - 3) = (1, 7)$ ✓. Check a second, independent way, by walking through the pin: a half turn about $C$ carries $A$ straight through $C$ to the far side at the same distance, so $C$ is the midpoint of $A$ and its image. Going from $A(7, 3)$ to $C(4, 5)$ is $3$ left and $2$ up, and repeating that trip from $C$ lands on $(1, 7)$. The midpoint of $(7, 3)$ and $(1, 7)$ is $\\left(\\frac{7 + 1}{2}, \\frac{3 + 7}{2}\\right) = (4, 5)$, the pin itself ✓. (The choice $(-7, -3)$ is ROTATING ABOUT THE ORIGIN, but the pin here is $C(4, 5)$ ✗; the choice $(11, 8)$ is TREATING THE CENTER AS A TRANSLATION AND ADDING IT, $(7 + 4, 3 + 5)$ ✗; the choice $(1, 3)$ is MAKING THE DOUBLE TRIP HORIZONTALLY ONLY and forgetting the vertical half of it ✗.)',
    },
    {
      q: 'A compass needle is fixed at $C(1, -2)$ and its tip is at $A(-4, 6)$. The needle is turned $180^\\circ$ about the fixed point. What are the coordinates of the tip after the turn?',
      fig: {
        view: [-6, -12, 8, 8],
        grid: true,
        elems: [
          { t: 'seg', a: [-4, 6], b: [1, -2], dash: true },
          { t: 'point', p: [-4, 6], label: 'A', dx: -10, dy: -6 },
          { t: 'point', p: [1, -2], label: 'C', dx: 12, dy: 4 },
        ],
      },
      choices: ['$(6, -10)$', '$(4, -6)$', '$(-3, 4)$', '$(6, 6)$'],
      answer: 0,
      solution:
        'Route one, the rule for a half turn about $C(a, b)$: it sends $(x, y) \\to (2a - x, 2b - y)$, so $A(-4, 6)$ goes to $(2 \\cdot 1 + 4, 2 \\cdot (-2) - 6) = (6, -10)$ ✓. Check a second, independent way, by walking through the fixed point: a half turn about $C$ carries the tip straight through $C$ to the far side at the same distance, so $C$ is the midpoint of the tip and its image. Going from $A(-4, 6)$ to $C(1, -2)$ is $5$ right and $8$ down, and repeating that trip from $C$ lands on $(6, -10)$. The midpoint of $(-4, 6)$ and $(6, -10)$ is $\\left(\\frac{-4 + 6}{2}, \\frac{6 - 10}{2}\\right) = (1, -2)$, the fixed point ✓. (The choice $(4, -6)$ is ROTATING ABOUT THE ORIGIN, but the needle is pinned at $C(1, -2)$ ✗; the choice $(-3, 4)$ is TREATING THE CENTER AS A TRANSLATION AND ADDING IT, $(-4 + 1, 6 - 2)$ ✗; the choice $(6, 6)$ is MAKING THE DOUBLE TRIP HORIZONTALLY ONLY and leaving the height untouched ✗.)',
    },
    {
      q: 'A hinge sits at $C(3, 1)$ on a floor plan and a gate latch is at $A(-2, -5)$. The gate is rotated $180^\\circ$ about the hinge. Where does the latch come to rest?',
      fig: {
        view: [-4, -7, 10, 9],
        grid: true,
        elems: [
          { t: 'seg', a: [-2, -5], b: [3, 1], dash: true },
          { t: 'point', p: [-2, -5], label: 'A', dx: -10, dy: 6 },
          { t: 'point', p: [3, 1], label: 'C', dx: -10, dy: -6 },
        ],
      },
      choices: ['$(2, 5)$', '$(1, -4)$', '$(8, -5)$', '$(8, 7)$'],
      answer: 3,
      solution:
        'Route one, the rule for a half turn about $C(a, b)$: it sends $(x, y) \\to (2a - x, 2b - y)$, so $A(-2, -5)$ goes to $(2 \\cdot 3 + 2, 2 \\cdot 1 + 5) = (8, 7)$ ✓. Check a second, independent way, by walking through the hinge: a half turn about $C$ carries the latch straight through $C$ to the far side at the same distance, so $C$ is the midpoint of the latch and its image. Going from $A(-2, -5)$ to $C(3, 1)$ is $5$ right and $6$ up, and repeating that trip from $C$ lands on $(8, 7)$. The midpoint of $(-2, -5)$ and $(8, 7)$ is $\\left(\\frac{-2 + 8}{2}, \\frac{-5 + 7}{2}\\right) = (3, 1)$, the hinge itself ✓. (The choice $(2, 5)$ is ROTATING ABOUT THE ORIGIN, but the gate turns about $C(3, 1)$ ✗; the choice $(1, -4)$ is TREATING THE CENTER AS A TRANSLATION AND ADDING IT, $(-2 + 3, -5 + 1)$ ✗; the choice $(8, -5)$ is MAKING THE DOUBLE TRIP HORIZONTALLY ONLY and leaving the height untouched ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 16,
  sections: { '16.2': s162 },
}
