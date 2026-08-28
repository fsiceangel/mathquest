// Introduction to Geometry chapter 16 — variations for section 16.3 (Reflections).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is worked twice along routes that share no arithmetic:
//    once through the coordinate rule for the mirror, and once by measuring the
//    perpendicular distance from the point to the mirror line and stepping that
//    same distance out the far side. The second route never reuses the first
//    route’s subtraction; it counts squares.
//  - The rules in play are $(x, y) \to (x, -y)$ over the x-axis,
//    $(x, y) \to (-x, y)$ over the y-axis, $(x, y) \to (y, x)$ over $y = x$,
//    $(x, y) \to (2a - x, y)$ over the vertical line $x = a$, and
//    $(x, y) \to (x, 2b - y)$ over the horizontal line $y = b$.
//  - Two mirrors in a row over parallel vertical lines $x = a$ then $x = b$ make
//    the translation $(x, y) \to (x + 2(b - a), y)$ — twice the gap, in the
//    direction that carries the first mirror to the second. The order matters,
//    and reversing it flips the sign.
//  - Figures are drawn on the coordinate grid. Every mirror the question names
//    is drawn as a dashed line sitting exactly on that line, the starting point
//    is marked and labeled in plain text, and the image is never drawn or
//    labeled — that is what the student is asked to find.
//  - Each distractor is one named mistake, named in CAPS at the end.

const R2 = (x) => Math.round(x * 100) / 100

// A regular n-gon, drawn with one vertex straight up so the picture never hints
// at how the lines of symmetry fall.
function regularPolyFig(n, r = 4) {
  const pts = []
  for (let i = 0; i < n; i++) {
    const a = ((90 + (360 * i) / n) * Math.PI) / 180
    pts.push([R2(r * Math.cos(a)), R2(r * Math.sin(a))])
  }
  return { view: [-r - 1, -r - 1, r + 1, r + 1], elems: [{ t: 'poly', pts }] }
}

// A single marked point on the grid, with an optional dashed mirror line.
function ptFig(view, p, label, dx, dy, mirrors = []) {
  return { view, grid: true, elems: [...mirrors, { t: 'point', p, label, dx, dy }] }
}

const vLine = (a, y0, y1) => ({ t: 'seg', a: [a, y0], b: [a, y1], dash: true })
const hLine = (b, x0, x1) => ({ t: 'seg', a: [x0, b], b: [x1, b], dash: true })
const diag = (t0, t1) => ({ t: 'seg', a: [t0, t0], b: [t1, t1], dash: true })

const s163 = [
  // s1 — reflect a single point over the x-axis.
  [
    {
      q: 'A kite is flying at the point $(-5, 6)$ above a still lake whose surface runs along the x-axis. Where does the kite’s reflection in the water appear?',
      fig: ptFig([-8, -8, 2, 8], [-5, 6], 'K', -12, -6),
      choices: ['$(5, 6)$', '$(-5, -6)$', '$(5, -6)$', '$(6, -5)$'],
      answer: 1,
      solution:
        'Route one, the coordinate rule: a mirror lying on the x-axis sends $(x, y) \\to (x, -y)$, so the kite at $(-5, 6)$ has its reflection at $(-5, -6)$ ✓. Route two, count squares to the mirror and back: the kite sits $6$ units above the water line, so its reflection sits $6$ units below it, at height $-6$. A horizontal mirror moves nothing sideways, so the first coordinate stays $-5$, giving $(-5, -6)$ ✓. (The choice $(5, 6)$ is REFLECTING OVER THE Y-AXIS, which flips the coordinate the water leaves alone ✗; the choice $(5, -6)$ is NEGATING BOTH COORDINATES, a half-turn about the origin rather than a flip over one line ✗; the choice $(6, -5)$ is TRADING THE COORDINATES, which is the rule for the mirror $y = x$ ✗.)',
    },
    {
      q: 'On a harbor chart the x-axis marks the shoreline. A red buoy is anchored at $(12, -7)$, and a green buoy is placed at the mirror image of the red one across the shoreline. What are the green buoy’s coordinates?',
      fig: ptFig([-2, -9, 14, 9], [12, -7], 'R', 12, 6),
      choices: ['$(-12, -7)$', '$(-12, 7)$', '$(12, 7)$', '$(-7, 12)$'],
      answer: 2,
      solution:
        'Route one, the coordinate rule: the shoreline is the x-axis, and that mirror sends $(x, y) \\to (x, -y)$, so $(12, -7) \\to (12, 7)$ ✓. Route two, count squares to the mirror and back: the red buoy lies $7$ units below the shoreline, so the green buoy lies $7$ units above it, at height $7$, and neither buoy moves left or right, so both sit at $x = 12$: the green buoy is at $(12, 7)$ ✓. (The choice $(-12, -7)$ is REFLECTING OVER THE Y-AXIS instead of the shoreline ✗; the choice $(-12, 7)$ is NEGATING BOTH COORDINATES, which is a half-turn about the origin ✗; the choice $(-7, 12)$ is TRADING THE COORDINATES, the rule for the mirror $y = x$ ✗.)',
    },
    {
      q: 'A cave survey plots the tip of a sunken probe at $(-10, -11)$ on a grid whose x-axis is the level of the cave floor. Directly above the tip, a marker is hung so that it is the mirror image of the tip across the floor line. Where is the marker?',
      fig: ptFig([-13, -13, 2, 13], [-10, -11], 'T', -12, 6),
      choices: ['$(10, -11)$', '$(10, 11)$', '$(-11, -10)$', '$(-10, 11)$'],
      answer: 3,
      solution:
        'Route one, the coordinate rule: the floor line is the x-axis, whose mirror rule is $(x, y) \\to (x, -y)$, so $(-10, -11) \\to (-10, 11)$ ✓. Route two, count squares to the mirror and back: the tip sits $11$ units below the floor line, so its image stands $11$ units above it, at height $11$; a horizontal mirror never shifts a point sideways, so the first coordinate stays $-10$, giving $(-10, 11)$ ✓. (The choice $(10, -11)$ is REFLECTING OVER THE Y-AXIS, flipping the coordinate this mirror leaves alone ✗; the choice $(10, 11)$ is NEGATING BOTH COORDINATES, a half-turn about the origin ✗; the choice $(-11, -10)$ is TRADING THE COORDINATES, the rule for the mirror $y = x$ ✗.)',
    },
  ],
  // s2 — reflect a single point over the y-axis.
  [
    {
      q: 'A ranger station stands at $(7, -4)$ on a park map. A second station is built so that the y-axis is the mirror line between the two. What are the coordinates of the second station?',
      choices: ['$(-7, -4)$', '$(7, 4)$', '$(-7, 4)$', '$(-4, 7)$'],
      answer: 0,
      solution:
        'Route one, the coordinate rule: the y-axis mirror sends $(x, y) \\to (-x, y)$, so $(7, -4) \\to (-7, -4)$ ✓. Route two, count squares to the mirror and back: the first station is $7$ units right of the y-axis, so the second is $7$ units left of it, at $x = -7$. A vertical mirror moves nothing up or down, so the height stays $-4$, giving $(-7, -4)$ ✓. (The choice $(7, 4)$ is REFLECTING OVER THE X-AXIS, which flips the coordinate this mirror leaves alone ✗; the choice $(-7, 4)$ is NEGATING BOTH COORDINATES, a half-turn about the origin rather than one flip ✗; the choice $(-4, 7)$ is TRADING THE COORDINATES, the rule for the mirror $y = x$ ✗.)',
    },
    {
      q: 'A warehouse robot is parked at $(-9, -6)$. A twin robot is placed on the far side of the y-axis, the same distance from it, so that the two are mirror images. Where is the twin?',
      choices: ['$(-9, 6)$', '$(9, 6)$', '$(-6, -9)$', '$(9, -6)$'],
      answer: 3,
      solution:
        'Route one, the coordinate rule: reflecting over the y-axis sends $(x, y) \\to (-x, y)$, so $(-9, -6) \\to (9, -6)$ ✓. Route two, count squares to the mirror and back: the parked robot is $9$ units left of the y-axis, so the twin stands $9$ units right of it, at $x = 9$, and a vertical mirror leaves the height untouched at $-6$: the twin is at $(9, -6)$ ✓. (The choice $(-9, 6)$ is REFLECTING OVER THE X-AXIS instead ✗; the choice $(9, 6)$ is NEGATING BOTH COORDINATES, a half-turn about the origin ✗; the choice $(-6, -9)$ is TRADING THE COORDINATES, the rule for the mirror $y = x$ ✗.)',
    },
    {
      q: 'A stage designer marks a spotlight at $(13, 8)$ on the plan and wants a matching spotlight so that the y-axis is the line of symmetry of the pair. Where does the matching spotlight go?',
      choices: ['$(13, -8)$', '$(-13, 8)$', '$(-13, -8)$', '$(8, 13)$'],
      answer: 1,
      solution:
        'Route one, the coordinate rule: the y-axis mirror sends $(x, y) \\to (-x, y)$, so $(13, 8) \\to (-13, 8)$ ✓. Route two, count squares to the mirror and back: the first spotlight hangs $13$ units right of the y-axis, so its match hangs $13$ units left of it, at $x = -13$; a vertical mirror changes no heights, so both sit at $y = 8$, giving $(-13, 8)$ ✓. (The choice $(13, -8)$ is REFLECTING OVER THE X-AXIS, flipping the coordinate this mirror keeps ✗; the choice $(-13, -8)$ is NEGATING BOTH COORDINATES, a half-turn about the origin ✗; the choice $(8, 13)$ is TRADING THE COORDINATES, the rule for the mirror $y = x$ ✗.)',
    },
  ],
  // s3 — count the lines of symmetry of a regular polygon.
  [
    {
      q: 'A coaster is cut as a regular heptagon — seven equal sides, seven equal angles. Along how many different lines can it be folded so that the two halves land exactly on each other?',
      fig: regularPolyFig(7),
      choices: ['$14$', '$3$', '$7$', '$6$'],
      answer: 2,
      solution:
        'Route one, one fold line per vertex: every line of symmetry runs through the center, and for a shape with an odd number of sides each such line enters at a vertex and leaves through the midpoint of the side opposite. Seven vertices give seven fold lines, so the answer is $7$ ✓. Route two, count the points the fold lines touch instead: a fold line meets the boundary at two special points, and the only special points are the $7$ vertices and the $7$ side midpoints, which is $14$ points in all. Every one of them lies on exactly one fold line and every fold line uses two of them, so there are $\\frac{14}{2} = 7$ lines ✓. (The choice $14$ is COUNTING EACH LINE TWICE, once from each end ✗; the choice $3$ is PAIRING UP THE VERTICES, as though a fold line always joined two corners — with an odd number of sides no fold line does ✗; the choice $6$ is SUBTRACTING ONE, as though the count were always one less than the number of sides ✗.)',
    },
    {
      q: 'A garden paving stone is a regular octagon. How many lines of symmetry does it have?',
      fig: regularPolyFig(8),
      choices: ['$8$', '$16$', '$4$', '$7$'],
      answer: 0,
      solution:
        'Route one, sort the lines into two families: with an even number of sides, some lines of symmetry join opposite vertices and the rest join the midpoints of opposite sides. Eight vertices make $4$ opposite pairs and eight sides make $4$ opposite pairs, so there are $4 + 4 = 8$ lines ✓. Route two, count the points the lines touch instead: a line of symmetry meets the boundary at two special points, and the special points are the $8$ vertices and the $8$ side midpoints, $16$ in all. Each line uses two of them and none is left over, so there are $\\frac{16}{2} = 8$ lines ✓. (The choice $16$ is COUNTING EACH LINE TWICE, once from each end ✗; the choice $4$ is KEEPING ONLY THE VERTEX-TO-VERTEX LINES and forgetting the four that run midpoint to midpoint ✗; the choice $7$ is SUBTRACTING ONE, as though the count were one less than the number of sides ✗.)',
    },
    {
      q: 'A clock face is built as a regular polygon with twelve equal sides. How many lines of symmetry does that face have?',
      fig: regularPolyFig(12),
      choices: ['$24$', '$6$', '$11$', '$12$'],
      answer: 3,
      solution:
        'Route one, sort the lines into two families: with an even number of sides, a line of symmetry either joins two opposite vertices or joins the midpoints of two opposite sides. Twelve vertices make $6$ opposite pairs and twelve sides make $6$ opposite pairs, so there are $6 + 6 = 12$ lines ✓. Route two, count the points the lines touch instead: each line meets the boundary at two special points, and the special points are the $12$ vertices and the $12$ side midpoints, $24$ altogether. Every line claims two of them and every point is claimed, so there are $\\frac{24}{2} = 12$ lines ✓. (The choice $24$ is COUNTING EACH LINE TWICE, once from each end ✗; the choice $6$ is KEEPING ONLY THE VERTEX-TO-VERTEX LINES and dropping the six midpoint-to-midpoint ones ✗; the choice $11$ is SUBTRACTING ONE, as though the count were one less than the number of sides ✗.)',
    },
  ],
  // s4 — reflect a single point over the line y = x.
  [
    {
      q: 'A chess app draws the line $y = x$ across its board and reflects every piece over it when the players swap sides. A knight stands at $(-2, 9)$. Where does the knight end up after the swap?',
      fig: ptFig([-4, -4, 11, 11], [-2, 9], 'N', -12, -6, [diag(-4, 11)]),
      choices: ['$(2, -9)$', '$(9, -2)$', '$(-2, -9)$', '$(2, 9)$'],
      answer: 1,
      solution:
        'Route one, the coordinate rule: the mirror $y = x$ trades the coordinates, $(x, y) \\to (y, x)$, so the knight at $(-2, 9)$ lands at $(9, -2)$ ✓. Route two, check the mirror really sits halfway: the midpoint of $(-2, 9)$ and $(9, -2)$ is $\\left(\\frac{7}{2}, \\frac{7}{2}\\right)$, which lies on $y = x$, and the segment joining the two points drops $11$ as it runs $11$ to the right, a slope of $-1$, so it crosses $y = x$ at a right angle — start and image are mirror partners ✓. (The choice $(2, -9)$ is NEGATING BOTH COORDINATES, a half-turn about the origin rather than a fold ✗; the choice $(-2, -9)$ is REFLECTING OVER THE X-AXIS, a mirror the question never names ✗; the choice $(2, 9)$ is REFLECTING OVER THE Y-AXIS instead of the slanted line ✗.)',
    },
    {
      q: 'A quilt block is folded along the line $y = x$ so that the two halves match. One corner of the pattern sits at $(11, -5)$. Onto which point does that corner fold?',
      fig: ptFig([-7, -7, 13, 13], [11, -5], 'C', 12, 6, [diag(-7, 13)]),
      choices: ['$(5, -11)$', '$(11, 5)$', '$(-5, 11)$', '$(-11, -5)$'],
      answer: 2,
      solution:
        'Route one, the coordinate rule: folding over $y = x$ trades the coordinates, $(x, y) \\to (y, x)$, so $(11, -5) \\to (-5, 11)$ ✓. Route two, check the fold line really sits halfway: the midpoint of $(11, -5)$ and $(-5, 11)$ is $(3, 3)$, a point on $y = x$, and the segment between them rises $16$ while running $16$ to the left, a slope of $-1$, so it meets the fold line square on ✓. (The choice $(5, -11)$ is REFLECTING OVER $y = -x$, trading the coordinates and then flipping both signs ✗; the choice $(11, 5)$ is REFLECTING OVER THE X-AXIS ✗; the choice $(-11, -5)$ is REFLECTING OVER THE Y-AXIS ✗.)',
    },
    {
      q: 'A skater traces the line $y = x$ across the ice and then repeats her whole path as a mirror image on the other side of that line. One turn of the original path is at $(-6, -7)$. Where is the matching turn of the mirrored path?',
      fig: ptFig([-9, -9, 2, 2], [-6, -7], 'T', -12, -6, [diag(-9, 2)]),
      choices: ['$(-7, -6)$', '$(7, 6)$', '$(-6, 7)$', '$(6, -7)$'],
      answer: 0,
      solution:
        'Route one, the coordinate rule: the mirror $y = x$ trades the coordinates, $(x, y) \\to (y, x)$, so $(-6, -7) \\to (-7, -6)$ ✓. Route two, check the mirror really sits halfway: the midpoint of $(-6, -7)$ and $(-7, -6)$ is $\\left(-\\frac{13}{2}, -\\frac{13}{2}\\right)$, which lies on $y = x$, and the tiny segment joining them rises $1$ while running $1$ to the left, a slope of $-1$, so it crosses the mirror at a right angle ✓. (The choice $(7, 6)$ is REFLECTING OVER $y = -x$, which trades and then negates ✗; the choice $(-6, 7)$ is REFLECTING OVER THE X-AXIS ✗; the choice $(6, -7)$ is REFLECTING OVER THE Y-AXIS ✗.)',
    },
  ],
  // s5 — reflect a single point over a vertical line x = a.
  [
    {
      q: 'A model railway has a mirrored backdrop standing along the vertical line $x = 1$. A signal post is at $(5, -3)$. Where does its reflection in the backdrop appear?',
      fig: ptFig([-5, -6, 8, 3], [5, -3], 'P', 12, 6, [vLine(1, -6, 3)]),
      choices: ['$(-4, -3)$', '$(-5, -3)$', '$(5, 5)$', '$(-3, -3)$'],
      answer: 3,
      solution:
        'Route one, the coordinate rule: a mirror on the vertical line $x = a$ sends $(x, y) \\to (2a - x, y)$, and here $a = 1$, so $x \\to 2(1) - 5 = -3$ while $y$ is untouched, giving $(-3, -3)$ ✓. Route two, count squares to the mirror and back: the post stands $5 - 1 = 4$ units right of the backdrop, so its reflection stands $4$ units left of it, at $x = 1 - 4 = -3$; a vertical mirror never changes a height, so the image is $(-3, -3)$ ✓. (The choice $(-4, -3)$ is USING $a - x$ INSTEAD OF $2a - x$, which lands the mirror on the image rather than halfway ✗; the choice $(-5, -3)$ is REFLECTING OVER THE Y-AXIS, forgetting the backdrop sits one unit to the right of it ✗; the choice $(5, 5)$ is REFLECTING OVER THE HORIZONTAL LINE $y = 1$, which flips the wrong coordinate ✗.)',
    },
    {
      q: 'A hall of mirrors has one mirror running along the vertical line $x = -2$. A lantern hangs at $(-6, 8)$. Where does the lantern’s image in that mirror hang?',
      fig: ptFig([-8, -2, 4, 10], [-6, 8], 'L', -12, -6, [vLine(-2, -2, 10)]),
      choices: ['$(4, 8)$', '$(2, 8)$', '$(6, 8)$', '$(-6, -12)$'],
      answer: 1,
      solution:
        'Route one, the coordinate rule: reflecting over $x = a$ sends $(x, y) \\to (2a - x, y)$, and with $a = -2$ that is $x \\to 2(-2) - (-6) = -4 + 6 = 2$, so the image is $(2, 8)$ ✓. Route two, count squares to the mirror and back: the lantern hangs $-2 - (-6) = 4$ units left of the mirror, so its image hangs $4$ units right of it, at $x = -2 + 4 = 2$, and a vertical mirror leaves the height at $8$: the image is $(2, 8)$ ✓. (The choice $(4, 8)$ is USING $a - x$ INSTEAD OF $2a - x$ ✗; the choice $(6, 8)$ is REFLECTING OVER THE Y-AXIS instead of the mirror the question names ✗; the choice $(-6, -12)$ is REFLECTING OVER THE HORIZONTAL LINE $y = -2$, mirroring in the wrong direction ✗.)',
    },
    {
      q: 'A folding screen stands along the vertical line $x = 6$ on a floor plan. A vase sits at $(9, 4)$. If the screen were a mirror, where would the reflected vase appear?',
      fig: ptFig([1, -1, 11, 7], [9, 4], 'V', 12, -6, [vLine(6, -1, 7)]),
      choices: ['$(-3, 4)$', '$(-9, 4)$', '$(3, 4)$', '$(9, 8)$'],
      answer: 2,
      solution:
        'Route one, the coordinate rule: the mirror $x = a$ sends $(x, y) \\to (2a - x, y)$, and with $a = 6$ that is $x \\to 2(6) - 9 = 3$, so the image is $(3, 4)$ ✓. Route two, count squares to the mirror and back: the vase sits $9 - 6 = 3$ units right of the screen, so its reflection sits $3$ units left of it, at $x = 6 - 3 = 3$; nothing rises or falls in a vertical mirror, so the image is $(3, 4)$ ✓. (The choice $(-3, 4)$ is USING $a - x$ INSTEAD OF $2a - x$ ✗; the choice $(-9, 4)$ is REFLECTING OVER THE Y-AXIS rather than the screen ✗; the choice $(9, 8)$ is REFLECTING OVER THE HORIZONTAL LINE $y = 6$, flipping the coordinate this mirror keeps ✗.)',
    },
  ],
  // s6 — reflect one named vertex of a triangle over an axis.
  [
    {
      q: 'Triangle $ABC$ has vertices $A(1, 2)$, $B(4, 2)$, and $C(4, 6)$. The whole triangle is reflected over the x-axis. What is the image of $C$?',
      fig: {
        view: [-1, -7, 6, 7],
        grid: true,
        elems: [
          { t: 'poly', pts: [[1, 2], [4, 2], [4, 6]] },
          { t: 'point', p: [1, 2], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [4, 2], label: 'B', dx: 12, dy: 10 },
          { t: 'point', p: [4, 6], label: 'C', dx: 12, dy: -4 },
        ],
      },
      choices: ['$(4, -6)$', '$(-4, 6)$', '$(-4, -6)$', '$(6, 4)$'],
      answer: 0,
      solution:
        'Route one, the coordinate rule: reflecting over the x-axis sends $(x, y) \\to (x, -y)$, so $C(4, 6) \\to (4, -6)$ ✓. Route two, count squares to the mirror and back: $C$ sits $6$ units above the x-axis, so its image sits $6$ units below it, at $y = -6$, and a horizontal mirror shifts nothing sideways, so the image keeps $x = 4$, giving $(4, -6)$ ✓. As a bonus check on the whole triangle, $A$ and $B$ both drop to height $-2$ and the image reads $A \\to B \\to C$ the opposite way around — the orientation reversal every reflection produces. (The choice $(-4, 6)$ is REFLECTING OVER THE Y-AXIS instead of the x-axis ✗; the choice $(-4, -6)$ is NEGATING BOTH COORDINATES, a half-turn about the origin ✗; the choice $(6, 4)$ is TRADING THE COORDINATES, the rule for the mirror $y = x$ ✗.)',
    },
    {
      q: 'Triangle $ABC$ has vertices $A(-3, 1)$, $B(2, 1)$, and $C(2, 5)$. The triangle is reflected over the y-axis. Where does $C$ land?',
      fig: {
        view: [-5, -1, 5, 6],
        grid: true,
        elems: [
          { t: 'poly', pts: [[-3, 1], [2, 1], [2, 5]] },
          { t: 'point', p: [-3, 1], label: 'A', dx: -12, dy: 10 },
          { t: 'point', p: [2, 1], label: 'B', dx: 12, dy: 10 },
          { t: 'point', p: [2, 5], label: 'C', dx: 12, dy: -4 },
        ],
      },
      choices: ['$(2, -5)$', '$(-2, 5)$', '$(-2, -5)$', '$(5, 2)$'],
      answer: 1,
      solution:
        'Route one, the coordinate rule: reflecting over the y-axis sends $(x, y) \\to (-x, y)$, so $C(2, 5) \\to (-2, 5)$ ✓. Route two, count squares to the mirror and back: $C$ stands $2$ units right of the y-axis, so its image stands $2$ units left of it, at $x = -2$, and a vertical mirror leaves every height alone, so the image stays at $y = 5$, giving $(-2, 5)$ ✓. A quick look at the rest of the triangle agrees: $A(-3, 1)$ swings out to $(3, 1)$ and $B(2, 1)$ crosses to $(-2, 1)$, so the image is the same triangle read backwards. (The choice $(2, -5)$ is REFLECTING OVER THE X-AXIS instead of the y-axis ✗; the choice $(-2, -5)$ is NEGATING BOTH COORDINATES, a half-turn about the origin ✗; the choice $(5, 2)$ is TRADING THE COORDINATES, the rule for the mirror $y = x$ ✗.)',
    },
    {
      q: 'Triangle $ABC$ has vertices $A(-4, -1)$, $B(1, -1)$, and $C(1, -6)$. A reflection over the y-axis carries the triangle to a new position. What is the image of $C$?',
      fig: {
        view: [-6, -8, 6, 2],
        grid: true,
        elems: [
          { t: 'poly', pts: [[-4, -1], [1, -1], [1, -6]] },
          { t: 'point', p: [-4, -1], label: 'A', dx: -12, dy: -4 },
          { t: 'point', p: [1, -1], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [1, -6], label: 'C', dx: 12, dy: 8 },
        ],
      },
      choices: ['$(1, 6)$', '$(-1, 6)$', '$(-6, 1)$', '$(-1, -6)$'],
      answer: 3,
      solution:
        'Route one, the coordinate rule: the y-axis mirror sends $(x, y) \\to (-x, y)$, so $C(1, -6) \\to (-1, -6)$ ✓. Route two, count squares to the mirror and back: $C$ lies $1$ unit right of the y-axis, so its image lies $1$ unit left of it, at $x = -1$, and a vertical mirror changes no heights, so the image stays $6$ units below the x-axis at $y = -6$, giving $(-1, -6)$ ✓. The other vertices behave the same way — $A(-4, -1)$ goes to $(4, -1)$ and $B(1, -1)$ goes to $(-1, -1)$ — so the image is a congruent triangle facing the opposite way. (The choice $(1, 6)$ is REFLECTING OVER THE X-AXIS instead of the y-axis ✗; the choice $(-1, 6)$ is NEGATING BOTH COORDINATES, a half-turn about the origin ✗; the choice $(-6, 1)$ is TRADING THE COORDINATES, the rule for the mirror $y = x$ ✗.)',
    },
  ],
  // s7 — concept: which transformations keep a figure reading the same way around.
  [
    {
      q: 'A figure is moved so that its image reads around in the same order as the original: where the original goes counterclockwise from corner to corner, so does the image. Which of these is guaranteed to do that?',
      choices: ['a reflection over the y-axis', 'a reflection followed by a translation', 'a rotation followed by a reflection', 'a translation'],
      answer: 3,
      solution:
        'Route one, by what each move does: a translation slides every point the same distance in the same direction, so no part of the figure is ever turned over and the image must read around the same way ✓. Route two, a concrete test: take the triangle $A(0, 0)$, $B(2, 0)$, $C(0, 1)$, which reads counterclockwise from $A$ to $B$ to $C$, and slide it by $(x, y) \\to (x + 5, y - 3)$. The image is $A\'(5, -3)$, $B\'(7, -3)$, $C\'(5, -2)$ — the same triangle with $B\'$ to the right of $A\'$ and $C\'$ above, so the reading order is still counterclockwise ✓. (The choice “a reflection over the y-axis” is TAKING A SINGLE MIRROR TO BE HARMLESS, when one flip is exactly what reverses the reading order ✗; the choice “a reflection followed by a translation” is HOPING A SLIDE UNDOES A FLIP, but a slide cannot turn anything back over, so the pair still reverses ✗; the choice “a rotation followed by a reflection” is ASSUMING THE TWO CANCEL, when the turn keeps the order and the mirror reverses it, leaving a reversal ✗.)',
    },
    {
      q: 'Below are four pairs of transformations. In which pair does each of the two transformations, used on its own, leave a figure reading around the same way it did before?',
      choices: ['a translation and a rotation', 'a translation and a reflection', 'a rotation and a reflection', 'a reflection over the x-axis and a reflection over the y-axis'],
      answer: 0,
      solution:
        'Route one, by what each move does: a translation slides the figure without turning it, and a rotation turns the whole plane as one rigid sheet; neither one ever lifts the figure and lays it down face down, so each keeps the reading order ✓. Route two, a concrete test on both members of the pair: the triangle $A(1, 0)$, $B(3, 0)$, $C(1, 2)$ reads counterclockwise. Sliding by $(x, y) \\to (x - 4, y + 1)$ gives $(-3, 1)$, $(-1, 1)$, $(-3, 3)$ — the same picture shifted, still counterclockwise. Turning it $90^\\circ$ counterclockwise with $(x, y) \\to (-y, x)$ gives $(0, 1)$, $(0, 3)$, $(-2, 1)$, where $B\'$ is now straight above $A\'$ and $C\'$ is to the left, which is again counterclockwise ✓. (The choice “a translation and a reflection” is TREATING A MIRROR AS ORDER-PRESERVING, when a reflection is the one move that reverses it ✗; the choice “a rotation and a reflection” makes the SAME MISTAKE ABOUT THE MIRROR, even though the rotation half of the pair is fine ✗; the choice “a reflection over the x-axis and a reflection over the y-axis” is ARGUING FROM THE COMBINATION — the two together do restore the order, but the question asks about each one alone, and alone each reverses it ✗.)',
    },
    {
      q: 'A logo and its image are congruent, but the image reads around the opposite way: the original runs clockwise from one corner to the next while the image runs counterclockwise. Which single transformation could have produced that image?',
      choices: ['a translation', 'a reflection', 'a rotation of $180^\\circ$ about the origin', 'a translation followed by a rotation'],
      answer: 1,
      solution:
        'Route one, by what each move does: a reflection flips the figure over its mirror line, turning it into the sort of copy a left hand is of a right hand, and that is the one move on the list that reverses the reading order ✓. Route two, a concrete test: the triangle $A(1, 1)$, $B(4, 1)$, $C(1, 3)$ reads counterclockwise. Mirroring it in the y-axis gives $A\'(-1, 1)$, $B\'(-4, 1)$, $C\'(-1, 3)$, where $B\'$ now lies to the left of $A\'$ with $C\'$ still above, so the reading order has flipped to clockwise — the reversal the question describes ✓. (The choice “a translation” is EXPECTING A SLIDE TO TURN A FIGURE OVER, which it never does ✗; the choice “a rotation of $180^\\circ$ about the origin” is CONFUSING A HALF-TURN WITH A FLIP — it sends $(x, y) \\to (-x, -y)$, which looks upside down but still reads around the same way ✗; the choice “a translation followed by a rotation” is STACKING TWO ORDER-PRESERVING MOVES and expecting a reversal to appear out of nowhere ✗.)',
    },
  ],
  // s8 — reflect a single point over a horizontal line y = b.
  [
    {
      q: 'A drone flying at the point $(-2, 7)$ is tracked by a camera whose horizon line on the display is the line $y = 3$. Where does the drone’s reflection across that horizon appear?',
      fig: ptFig([-5, -3, 3, 9], [-2, 7], 'D', -12, -6, [hLine(3, -5, 3)]),
      choices: ['$(-2, -4)$', '$(-2, -7)$', '$(-2, -1)$', '$(8, 7)$'],
      answer: 2,
      solution:
        'Route one, the coordinate rule: a mirror on the horizontal line $y = b$ sends $(x, y) \\to (x, 2b - y)$, and here $b = 3$, so $y \\to 2(3) - 7 = -1$ while $x$ is untouched, giving $(-2, -1)$ ✓. Route two, count squares to the mirror and back: the drone flies $7 - 3 = 4$ units above the horizon line, so its reflection sits $4$ units below it, at $y = 3 - 4 = -1$; a horizontal mirror never shifts a point sideways, so the image is $(-2, -1)$ ✓. (The choice $(-2, -4)$ is USING $b - y$ INSTEAD OF $2b - y$, which puts the mirror on the image instead of halfway between ✗; the choice $(-2, -7)$ is REFLECTING OVER THE X-AXIS, forgetting the horizon sits three units higher ✗; the choice $(8, 7)$ is REFLECTING OVER THE VERTICAL LINE $x = 3$, flipping the coordinate this mirror keeps ✗.)',
    },
    {
      q: 'A canal runs along the horizontal line $y = 3$ on a town map. A bakery is at $(7, -4)$, and a bench is placed at the bakery’s mirror image across the canal. Where is the bench?',
      fig: ptFig([-1, -6, 10, 12], [7, -4], 'B', 12, 8, [hLine(3, -1, 10)]),
      choices: ['$(7, 7)$', '$(7, 4)$', '$(-1, -4)$', '$(7, 10)$'],
      answer: 3,
      solution:
        'Route one, the coordinate rule: reflecting over $y = b$ sends $(x, y) \\to (x, 2b - y)$, and with $b = 3$ that is $y \\to 2(3) - (-4) = 6 + 4 = 10$, so the bench is at $(7, 10)$ ✓. Route two, count squares to the mirror and back: the bakery sits $3 - (-4) = 7$ units below the canal, so the bench sits $7$ units above it, at $y = 3 + 7 = 10$, and a horizontal mirror moves nothing left or right, so the bench keeps $x = 7$: it is at $(7, 10)$ ✓. (The choice $(7, 7)$ is USING $b - y$ INSTEAD OF $2b - y$ ✗; the choice $(7, 4)$ is REFLECTING OVER THE X-AXIS rather than the canal ✗; the choice $(-1, -4)$ is REFLECTING OVER THE VERTICAL LINE $x = 3$, mirroring in the wrong direction ✗.)',
    },
    {
      q: 'A greenhouse roof beam lies along the horizontal line $y = 4$ on a cross-section drawing. A hanging basket is drawn at $(-8, 10)$. If the beam acted as a mirror, where would the basket’s image be?',
      fig: ptFig([-11, -4, 2, 12], [-8, 10], 'H', -12, -6, [hLine(4, -11, 2)]),
      choices: ['$(-8, -2)$', '$(-8, -6)$', '$(-8, -10)$', '$(16, 10)$'],
      answer: 0,
      solution:
        'Route one, the coordinate rule: the mirror $y = b$ sends $(x, y) \\to (x, 2b - y)$, and with $b = 4$ that is $y \\to 2(4) - 10 = -2$, so the image is $(-8, -2)$ ✓. Route two, count squares to the mirror and back: the basket hangs $10 - 4 = 6$ units above the beam, so its image sits $6$ units below it, at $y = 4 - 6 = -2$; a horizontal mirror leaves every left-right position alone, so the image is $(-8, -2)$ ✓. (The choice $(-8, -6)$ is USING $b - y$ INSTEAD OF $2b - y$ ✗; the choice $(-8, -10)$ is REFLECTING OVER THE X-AXIS instead of the beam ✗; the choice $(16, 10)$ is REFLECTING OVER THE VERTICAL LINE $x = 4$, flipping the coordinate the beam keeps ✗.)',
    },
  ],
  // s9 — two reflections over parallel vertical mirrors.
  [
    {
      q: 'A design program takes the marker $P(-3, 4)$, reflects it over the line $x = -1$, and then reflects that image over the line $x = 2$. Where does the marker finish?',
      fig: ptFig([-5, -1, 5, 7], [-3, 4], 'P', -12, -6, [vLine(-1, -1, 7), vLine(2, -1, 7)]),
      choices: ['$(3, 4)$', '$(-9, 4)$', '$(1, 4)$', '$(0, 4)$'],
      answer: 0,
      solution:
        'Route one, one mirror at a time: over $x = -1$ the rule $x \\to 2(-1) - x$ sends $(-3, 4)$ to $(1, 4)$; over $x = 2$ the rule $x \\to 2(2) - x$ sends $(1, 4)$ to $(3, 4)$ ✓. Route two, the two-mirror shortcut: reflecting over two parallel lines is a single slide of twice the distance between them, headed from the first mirror toward the second. The mirrors are $2 - (-1) = 3$ apart and the second is to the right of the first, so every point slides $6$ units right: $-3 + 6 = 3$, and the height never changes, giving $(3, 4)$ ✓. (The choice $(-9, 4)$ is TAKING THE MIRRORS IN THE OTHER ORDER, which slides $6$ units the other way ✗; the choice $(1, 4)$ is STOPPING AFTER THE FIRST MIRROR ✗; the choice $(0, 4)$ is SLIDING ONE GAP INSTEAD OF TWO, moving $3$ right where the pair of mirrors moves $6$ ✗.)',
    },
    {
      q: 'A printing stamp is centered at $P(8, -3)$. The plate is flipped over the line $x = 5$, and the flipped plate is then flipped over the line $x = 9$. Where is the center of the stamp now?',
      fig: ptFig([0, -6, 18, 4], [8, -3], 'P', 10, 12, [vLine(5, -6, 4), vLine(9, -6, 4)]),
      choices: ['$(0, -3)$', '$(2, -3)$', '$(16, -3)$', '$(12, -3)$'],
      answer: 2,
      solution:
        'Route one, one mirror at a time: over $x = 5$ the rule $x \\to 2(5) - x$ sends $(8, -3)$ to $(2, -3)$; over $x = 9$ the rule $x \\to 2(9) - x$ sends $(2, -3)$ to $(16, -3)$ ✓. Route two, the two-mirror shortcut: two parallel mirrors act as one slide of twice the gap, running from the first mirror toward the second. The gap is $9 - 5 = 4$ and the second mirror is to the right, so the slide is $8$ units right: $8 + 8 = 16$, with the height untouched, giving $(16, -3)$ ✓. (The choice $(0, -3)$ is TAKING THE MIRRORS IN THE OTHER ORDER, sliding $8$ units left instead ✗; the choice $(2, -3)$ is STOPPING AFTER THE FIRST MIRROR ✗; the choice $(12, -3)$ is SLIDING ONE GAP INSTEAD OF TWO ✗.)',
    },
    {
      q: 'Two mirrored walls in a gallery stand along the lines $x = -3$ and $x = 4$. A sculpture at $P(2, -7)$ is first reflected in the wall at $x = -3$, and that image is then reflected in the wall at $x = 4$. Where does the second image stand?',
      fig: ptFig([-6, -10, 18, 2], [2, -7], 'P', 10, 12, [vLine(-3, -10, 2), vLine(4, -10, 2)]),
      choices: ['$(-12, -7)$', '$(16, -7)$', '$(-8, -7)$', '$(9, -7)$'],
      answer: 1,
      solution:
        'Route one, one mirror at a time: over $x = -3$ the rule $x \\to 2(-3) - x$ sends $(2, -7)$ to $(-8, -7)$; over $x = 4$ the rule $x \\to 2(4) - x$ sends $(-8, -7)$ to $(16, -7)$ ✓. Route two, the two-mirror shortcut: a pair of parallel mirrors makes one slide of twice the distance between them, aimed from the first mirror toward the second. The walls are $4 - (-3) = 7$ apart and the second is to the right, so the slide is $14$ units right: $2 + 14 = 16$, and nothing moves vertically, giving $(16, -7)$ ✓. (The choice $(-12, -7)$ is TAKING THE MIRRORS IN THE OTHER ORDER, a $14$-unit slide to the left ✗; the choice $(-8, -7)$ is STOPPING AFTER THE FIRST MIRROR ✗; the choice $(9, -7)$ is SLIDING ONE GAP INSTEAD OF TWO ✗.)',
    },
  ],
  // s10 — reflect over y = x, then over the y-axis.
  [
    {
      q: 'The point $(6, -2)$ is reflected over the line $y = x$, and the image of that reflection is then reflected over the y-axis. What is the final image?',
      fig: ptFig([-4, -4, 8, 8], [6, -2], 'P', 12, 8, [diag(-4, 8)]),
      choices: ['$(-2, 6)$', '$(2, 6)$', '$(-2, -6)$', '$(2, -6)$'],
      answer: 1,
      solution:
        'Route one, one mirror at a time: over $y = x$ the coordinates trade, so $(6, -2) \\to (-2, 6)$; over the y-axis the first coordinate flips, so $(-2, 6) \\to (2, 6)$ ✓. Route two, the two-mirror shortcut: both mirrors pass through the origin, so together they make a rotation about the origin through twice the angle between them. The line $y = x$ meets the y-axis at $45^\\circ$, so the pair is a $90^\\circ$ counterclockwise turn, $(x, y) \\to (-y, x)$, which sends $(6, -2)$ to $(2, 6)$; and a turn about the origin keeps the distance from the origin, with $\\sqrt{36 + 4} = \\sqrt{4 + 36}$ before and after ✓. (The choice $(-2, 6)$ is STOPPING AFTER THE FIRST MIRROR ✗; the choice $(-2, -6)$ is TAKING THE MIRRORS IN THE OTHER ORDER, which gives a quarter-turn the other way ✗; the choice $(2, -6)$ is FLIPPING BOTH SIGNS AT THE SECOND STEP, a half-turn where the y-axis mirror flips only the first coordinate ✗.)',
    },
    {
      q: 'A pattern-making tool reflects the point $(-4, 9)$ over the line $y = x$, then reflects the result over the y-axis. Where does the point end up?',
      fig: ptFig([-10, -10, 10, 10], [-4, 9], 'P', -12, -6, [diag(-10, 10)]),
      choices: ['$(9, -4)$', '$(9, 4)$', '$(-9, 4)$', '$(-9, -4)$'],
      answer: 3,
      solution:
        'Route one, one mirror at a time: over $y = x$ the coordinates trade, so $(-4, 9) \\to (9, -4)$; over the y-axis the first coordinate flips, so $(9, -4) \\to (-9, -4)$ ✓. Route two, the two-mirror shortcut: both mirrors run through the origin, so the pair is a rotation about the origin through twice the $45^\\circ$ angle between them — a $90^\\circ$ counterclockwise turn, $(x, y) \\to (-y, x)$, sending $(-4, 9)$ to $(-9, -4)$. The distance from the origin is $\\sqrt{16 + 81}$ at the start and $\\sqrt{81 + 16}$ at the finish, as a rotation demands ✓. (The choice $(9, -4)$ is STOPPING AFTER THE FIRST MIRROR ✗; the choice $(9, 4)$ is TAKING THE MIRRORS IN THE OTHER ORDER ✗; the choice $(-9, 4)$ is FLIPPING BOTH SIGNS AT THE SECOND STEP instead of only the first coordinate ✗.)',
    },
    {
      q: 'An animator sends the point $(-7, -5)$ through two mirrors in turn: first the line $y = x$, then the y-axis. What is the final position?',
      fig: ptFig([-9, -9, 7, 7], [-7, -5], 'P', -12, 8, [diag(-9, 7)]),
      choices: ['$(-5, -7)$', '$(-5, 7)$', '$(5, -7)$', '$(5, 7)$'],
      answer: 2,
      solution:
        'Route one, one mirror at a time: over $y = x$ the coordinates trade, so $(-7, -5) \\to (-5, -7)$; over the y-axis the first coordinate flips, so $(-5, -7) \\to (5, -7)$ ✓. Route two, the two-mirror shortcut: the two mirrors cross at the origin at an angle of $45^\\circ$, so together they turn the plane $90^\\circ$ counterclockwise about the origin, $(x, y) \\to (-y, x)$, which sends $(-7, -5)$ to $(5, -7)$; the distance from the origin is $\\sqrt{49 + 25}$ before and $\\sqrt{25 + 49}$ after, exactly as a rotation requires ✓. (The choice $(-5, -7)$ is STOPPING AFTER THE FIRST MIRROR ✗; the choice $(-5, 7)$ is TAKING THE MIRRORS IN THE OTHER ORDER ✗; the choice $(5, 7)$ is FLIPPING BOTH SIGNS AT THE SECOND STEP rather than only the first coordinate ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 16,
  sections: { '16.3': s163 },
}
