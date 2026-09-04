// Counting & Probability chapter 10 — variations for §10.3 Probability Using Areas.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every curved boundary is sampled from the same exact geometry the solution
//    computes with, so figures are to scale by construction; the favorable
//    region is the filled polygon and the quantity asked is never labeled.
//  - Every key was computed in closed form, cross-checked by a 1M-sample Monte
//    Carlo of the stated condition, and matched against the shoelace area of
//    the drawn polygon before choices were written: direct area vs. a split
//    into right triangles or a complement (slot 1); the sector formula vs. a
//    bounding-box scaling (slot 2); an inner-copy complement vs. adding strips
//    and corners (slot 3); corner triangles vs. slicing or independence
//    (slot 4); area ratio vs. the square of the radius ratio (slot 5); a
//    trapezoid vs. a strip minus corner triangles (slot 6); the incircle or
//    semicircle area vs. a scaling shortcut (slot 7); corner triangles vs.
//    slicing or conditioning (slot 8); failure triangles vs. casework on who
//    is first or similarity (slot 9); a complement over three corners vs.
//    slicing or a rotated rectangle (slot 10).
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution and marked ✗, in the order the distractors appear.

const rd = (v) => Math.round(v * 1000) / 1000
const arcPts = (cx, cy, r, from, to, n = 48) => {
  const pts = []
  for (let i = 0; i <= n; i++) {
    const a = ((from + ((to - from) * i) / n) * Math.PI) / 180
    pts.push([rd(cx + r * Math.cos(a)), rd(cy + r * Math.sin(a))])
  }
  return pts
}
const circlePts = (cx, cy, r, n = 72) => arcPts(cx, cy, r, 0, 360, n).slice(0, n)
// A region with a hole: trace the outer boundary one way and the hole the other
// way, joined by a bridge from outer[0] to inner[0] (zero length when they touch).
const ring = (outer, inner) => [...outer, outer[0], inner[0], ...inner.slice(1).reverse(), inner[0]]
const box = (w, h, x = 0, y = 0) => ({ t: 'poly', pts: [[x, y], [x + w, y], [x + w, y + h], [x, y + h]], fill: false })
const lab = (x, y, text, dx = 0, dy = 0) => ({ t: 'label', p: [x, y], text, dx, dy })
const frame = (w, h) => {
  const pad = 0.14 * Math.max(w, h)
  return [-pad, -pad, w + pad, h + pad]
}

const s103 = [
  // slot 1 — a straight-sided shape spanning the full height of a rectangle.
  // Lane: triangle with base 9 / trapezoid / reversed, find the base.
  [
    {
      q: 'A triangle is drawn inside a $10$ by $8$ rectangle as shown, with a base of length $9$ along the bottom side and its top vertex on the top side. A point is chosen at random in the rectangle. What is the probability that it lies inside the triangle?',
      fig: {
        view: frame(10, 8),
        elems: [
          box(10, 8),
          { t: 'poly', pts: [[0.5, 0], [9.5, 0], [4, 8]] },
          lab(5, 0, '10', 0, 16),
          lab(0, 4, '8', -12, 4),
          lab(5, 0, '9', 0, -6),
        ],
      },
      choices: ['$\\frac{9}{10}$', '$\\frac{1}{2}$', '$\\frac{9}{40}$', '$\\frac{9}{20}$'],
      answer: 3,
      solution:
        'The rectangle has area $10 \\cdot 8 = 80$. The triangle’s height is the full $8$ no matter where the top vertex sits, so its area is $\\frac{1}{2} \\cdot 9 \\cdot 8 = 36$, and the probability is $\\frac{36}{80} = \\frac{9}{20}$ ✓. Check a second, independent way by splitting the triangle along the vertical line through its top vertex: that makes two right triangles with the same height $8$ and bases $3.5$ and $5.5$, with areas $14$ and $22$, so the triangle has area $14 + 22 = 36$ and the probability is again $\\frac{36}{80} = \\frac{9}{20}$ ✓. (The choice $\\frac{9}{10}$ is FORGETTING THE $\\frac{1}{2}$ IN THE TRIANGLE FORMULA ✗; the choice $\\frac{1}{2}$ is USING THE RECTANGLE’S FULL WIDTH $10$ AS THE BASE ✗; the choice $\\frac{9}{40}$ is HALVING THE TRIANGLE’S AREA A SECOND TIME ✗.)',
    },
    {
      q: 'A trapezoid is drawn inside a $10$ by $6$ rectangle as shown, spanning the full height of the rectangle, with parallel sides of lengths $8$ (along the bottom side) and $4$ (along the top side). A point is chosen at random in the rectangle. What is the probability that it lies inside the trapezoid?',
      fig: {
        view: frame(10, 6),
        elems: [
          box(10, 6),
          { t: 'poly', pts: [[1, 0], [9, 0], [6.5, 6], [2.5, 6]] },
          lab(5, 0, '10', 0, 16),
          lab(0, 3, '6', -12, 4),
          lab(5, 0, '8', 0, -6),
          lab(4.5, 6, '4', 0, 12),
        ],
      },
      choices: ['$\\frac{4}{5}$', '$\\frac{3}{5}$', '$\\frac{2}{5}$', '$\\frac{3}{10}$'],
      answer: 1,
      solution:
        'The rectangle has area $60$, and the trapezoid’s height is the full $6$, so its area is $\\frac{8 + 4}{2} \\cdot 6 = 36$. The probability is $\\frac{36}{60} = \\frac{3}{5}$ ✓. Check a second, independent way with the complement: the two pieces of the rectangle outside the trapezoid are themselves trapezoids of height $6$, one with parallel sides $1$ and $2.5$ (area $10.5$) and one with parallel sides $1$ and $3.5$ (area $13.5$). Together they cover $24$, leaving $60 - 24 = 36$ inside, so the probability is $\\frac{36}{60} = \\frac{3}{5}$ ✓. (The choice $\\frac{4}{5}$ is USING ONLY THE BOTTOM SIDE, as though the shape were an $8$ by $6$ rectangle ✗; the choice $\\frac{2}{5}$ is USING ONLY THE TOP SIDE ✗; the choice $\\frac{3}{10}$ is HALVING THE TRAPEZOID’S AREA AGAIN, treating it like a triangle ✗.)',
    },
    {
      q: 'A triangle is drawn inside a $14$ by $8$ rectangle as shown, with a base of length $b$ along the bottom side and its top vertex on the top side. A point chosen at random in the rectangle lies inside the triangle with probability $\\frac{2}{7}$. What is $b$?',
      fig: {
        view: frame(14, 8),
        elems: [
          box(14, 8),
          { t: 'poly', pts: [[3, 0], [11, 0], [7, 8]] },
          lab(7, 0, '14', 0, 16),
          lab(0, 4, '8', -12, 4),
        ],
      },
      choices: ['$8$', '$4$', '$32$', '$16$'],
      answer: 0,
      solution:
        'The rectangle has area $14 \\cdot 8 = 112$ and the triangle’s height is the full $8$, so $\\frac{\\frac{1}{2} \\cdot b \\cdot 8}{112} = \\frac{4b}{112} = \\frac{2}{7}$, which gives $4b = 32$ and $b = 8$ ✓. Check a second, independent way by finding the favorable area first: it must be $\\frac{2}{7} \\cdot 112 = 32$, and a triangle of height $8$ with area $32$ has base $\\frac{2 \\cdot 32}{8} = 8$ ✓. (The choice $4$ is FORGETTING THE $\\frac{1}{2}$, solving $8b = 32$ ✗; the choice $32$ is REPORTING THE TRIANGLE’S AREA instead of its base ✗; the choice $16$ is USING HALF THE RECTANGLE’S HEIGHT for the triangle, as though the top vertex sat halfway up ✗.)',
    },
  ],
  // slot 2 — a circular piece anchored to a side or corner of a rectangle.
  // Lane: corner quarter circle / bottom semicircle / reversed, find the radius.
  [
    {
      q: 'A quarter circle of radius $4$ is drawn inside an $8$ by $4$ rectangle, centered at one corner of the rectangle, as shown. A point is chosen at random in the rectangle. What is the probability that it lies inside the quarter circle?',
      fig: {
        view: frame(8, 4),
        elems: [
          box(8, 4),
          { t: 'poly', pts: [[0, 0], ...arcPts(0, 0, 4, 0, 90)] },
          lab(4, 0, '8', 0, 16),
          lab(0, 2, '4', -12, 4),
        ],
      },
      choices: ['$\\frac{\\pi}{4}$', '$\\frac{\\pi}{8}$', '$\\frac{\\pi}{16}$', '$\\frac{\\pi}{2}$'],
      answer: 1,
      solution:
        'The rectangle has area $32$, and a quarter of a circle of radius $4$ has area $\\frac{1}{4} \\cdot 16\\pi = 4\\pi$, so the probability is $\\frac{4\\pi}{32} = \\frac{\\pi}{8}$ ✓. Check a second, independent way by scaling: the quarter circle lies entirely inside the $4$ by $4$ square at its corner, where it covers the familiar fraction $\\frac{\\pi}{4}$, and that square is exactly half the rectangle, so the probability is $\\frac{\\pi}{4} \\cdot \\frac{1}{2} = \\frac{\\pi}{8}$ ✓. (The choice $\\frac{\\pi}{4}$ is DIVIDING BY THE $4$ BY $4$ SQUARE instead of the whole rectangle ✗; the choice $\\frac{\\pi}{16}$ is TREATING THE REGION AS AN EIGHTH-CIRCLE, halving once too often ✗; the choice $\\frac{\\pi}{2}$ is FORGETTING THE $\\frac{1}{4}$ and using the whole circle’s area ✗.)',
    },
    {
      q: 'A semicircle of radius $3$ is drawn inside a $9$ by $5$ rectangle with its diameter along the bottom side, as shown. A point is chosen at random in the rectangle. What is the probability that it lies inside the semicircle?',
      fig: {
        view: frame(9, 5),
        elems: [
          box(9, 5),
          { t: 'poly', pts: arcPts(4.5, 0, 3, 0, 180) },
          { t: 'seg', a: [4.5, 0], b: [6.6, 2.142], dash: true },
          lab(4.5, 0, '9', 0, 16),
          lab(0, 2.5, '5', -12, 4),
          lab(5.55, 1.071, '3', 10, -2),
        ],
      },
      choices: ['$\\frac{\\pi}{5}$', '$\\frac{2\\pi}{5}$', '$\\frac{\\pi}{20}$', '$\\frac{\\pi}{10}$'],
      answer: 3,
      solution:
        'The rectangle has area $45$, and half of a circle of radius $3$ has area $\\frac{1}{2} \\cdot 9\\pi = \\frac{9\\pi}{2}$, so the probability is $\\frac{9\\pi/2}{45} = \\frac{\\pi}{10}$ ✓. Check a second, independent way by scaling: the semicircle sits inside its $6$ by $3$ bounding rectangle, where it covers $\\frac{9\\pi/2}{18} = \\frac{\\pi}{4}$ of the area, and that box is $\\frac{18}{45} = \\frac{2}{5}$ of the whole rectangle, so the probability is $\\frac{\\pi}{4} \\cdot \\frac{2}{5} = \\frac{\\pi}{10}$ ✓. (The choice $\\frac{\\pi}{5}$ is FORGETTING THE $\\frac{1}{2}$ and using the whole circle ✗; the choice $\\frac{2\\pi}{5}$ is USING THE DIAMETER $6$ AS THE RADIUS ✗; the choice $\\frac{\\pi}{20}$ is HALVING AGAIN, as though only a quarter circle were shaded ✗.)',
    },
    {
      q: 'A quarter circle of radius $r$ is drawn inside a square of side $10$, centered at one corner of the square, as shown. A point chosen at random in the square lies inside the quarter circle with probability $\\frac{\\pi}{8}$. What is $r$?',
      fig: {
        view: frame(10, 10),
        elems: [
          box(10, 10),
          { t: 'poly', pts: [[0, 0], ...arcPts(0, 0, Math.sqrt(50), 0, 90)] },
          lab(5, 0, '10', 0, 16),
          lab(0, 5, '10', -12, 4),
        ],
      },
      choices: ['$\\frac{5\\sqrt{2}}{2}$', '$50$', '$5\\sqrt{2}$', '$5$'],
      answer: 2,
      solution:
        'The square has area $100$, so $\\frac{\\pi r^2 / 4}{100} = \\frac{\\pi}{8}$ gives $r^2 = \\frac{4 \\cdot 100}{8} = 50$ and $r = \\sqrt{50} = 5\\sqrt{2}$ ✓. Check a second, independent way by comparing with a full-size quarter circle: radius $10$ would cover $\\frac{25\\pi}{100} = \\frac{\\pi}{4}$ of the square, and $\\frac{\\pi}{8}$ is exactly half that area, so $r^2$ must be half of $10^2$, giving $r = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$ ✓; since $5\\sqrt{2} < 10$, the quarter circle fits. (The choice $\\frac{5\\sqrt{2}}{2}$ is DROPPING THE $\\frac{1}{4}$, solving $\\pi r^2 = \\frac{\\pi}{8} \\cdot 100$ ✗; the choice $50$ is REPORTING $r^2$ INSTEAD OF $r$ ✗; the choice $5$ is SIMPLIFYING $\\sqrt{50}$ TO $5$, losing the $\\sqrt{2}$ ✗.)',
    },
  ],
  // slot 3 — the border band within a fixed distance of at least one side.
  // Lane: square side 10, width 2 / rectangle 12 by 8, width 1 / reversed, find the width.
  [
    {
      q: 'A point is chosen at random inside a square of side $10$. What is the probability that it is within $2$ units of at least one side of the square?',
      fig: {
        view: frame(10, 10),
        elems: [
          box(10, 10),
          { t: 'poly', pts: ring([[10, 5], [10, 10], [0, 10], [0, 0], [10, 0]], [[8, 5], [8, 8], [2, 8], [2, 2], [8, 2]]) },
          lab(5, 0, '10', 0, 16),
          lab(5, 9, '2', 0, 4),
        ],
      },
      choices: ['$\\frac{16}{25}$', '$\\frac{9}{25}$', '$\\frac{12}{25}$', '$\\frac{4}{5}$'],
      answer: 0,
      solution:
        'The points farther than $2$ from every side form an inner square of side $10 - 4 = 6$, area $36$, so the border has area $100 - 36 = 64$ and the probability is $\\frac{64}{100} = \\frac{16}{25}$ ✓. Check a second, independent way by building the border from pieces: four $2$ by $6$ strips along the sides ($48$) plus four $2$ by $2$ corner squares ($16$) tile it exactly, giving $48 + 16 = 64$ and again $\\frac{16}{25}$ ✓. (The choice $\\frac{9}{25}$ is REPORTING THE COMPLEMENT, the inner square ✗; the choice $\\frac{12}{25}$ is FORGETTING THE FOUR CORNER SQUARES ✗; the choice $\\frac{4}{5}$ is ADDING FOUR FULL $2$ BY $10$ STRIPS, counting every corner twice ✗.)',
    },
    {
      q: 'A point is chosen at random inside a $12$ by $8$ rectangle. What is the probability that it is within $1$ unit of at least one side of the rectangle?',
      fig: {
        view: frame(12, 8),
        elems: [
          box(12, 8),
          { t: 'poly', pts: ring([[12, 4], [12, 8], [0, 8], [0, 0], [12, 0]], [[11, 4], [11, 7], [1, 7], [1, 1], [11, 1]]) },
          lab(6, 0, '12', 0, 16),
          lab(0, 4, '8', -12, 4),
          lab(6, 7.5, '1', 0, 4),
        ],
      },
      choices: ['$\\frac{19}{96}$', '$\\frac{5}{8}$', '$\\frac{3}{8}$', '$\\frac{5}{12}$'],
      answer: 2,
      solution:
        'Moving in by $1$ on every side leaves an inner $10$ by $6$ rectangle of area $60$, so the border has area $96 - 60 = 36$ and the probability is $\\frac{36}{96} = \\frac{3}{8}$ ✓. Check a second, independent way by tiling the border: the top and bottom strips are each $12$ by $1$ ($24$ total), and what remains of the left and right edges are $1$ by $6$ strips ($12$ total), for $24 + 12 = 36$ and again $\\frac{36}{96} = \\frac{3}{8}$ ✓. (The choice $\\frac{19}{96}$ is SHRINKING EACH DIMENSION BY ONLY $1$, using an $11$ by $7$ inner rectangle ✗; the choice $\\frac{5}{8}$ is REPORTING THE COMPLEMENT ✗; the choice $\\frac{5}{12}$ is ADDING FOUR FULL-LENGTH STRIPS, double-counting the corners ✗.)',
    },
    {
      q: 'A point is chosen at random inside a square of side $9$. It is within $w$ units of at least one side with probability $\\frac{5}{9}$, where $w < 4.5$, as shown. What is $w$?',
      fig: {
        view: frame(9, 9),
        elems: [
          box(9, 9),
          { t: 'poly', pts: ring([[9, 4.5], [9, 9], [0, 9], [0, 0], [9, 0]], [[7.5, 4.5], [7.5, 7.5], [1.5, 7.5], [1.5, 1.5], [7.5, 1.5]]) },
          lab(4.5, 0, '9', 0, 16),
        ],
      },
      choices: ['$3$', '$\\frac{3}{2}$', '$6$', '$\\frac{5}{4}$'],
      answer: 1,
      solution:
        'The inner square has side $9 - 2w$, and landing there has probability $1 - \\frac{5}{9} = \\frac{4}{9}$, so $\\frac{(9 - 2w)^2}{81} = \\frac{4}{9}$, giving $(9 - 2w)^2 = 36$, $9 - 2w = 6$, and $w = \\frac{3}{2}$ ✓. Check a second, independent way by tiling the border: four $w$ by $(9 - 2w)$ strips plus four $w$ by $w$ corners give area $4w(9 - 2w) + 4w^2 = 36w - 4w^2$, and setting that equal to $\\frac{5}{9} \\cdot 81 = 45$ gives $4w^2 - 36w + 45 = 0$, so $w = \\frac{36 \\pm 24}{8}$, and only $w = \\frac{3}{2}$ is less than $4.5$ ✓. (The choice $3$ is SHRINKING THE SIDE BY $w$ INSTEAD OF $2w$, solving $9 - w = 6$ ✗; the choice $6$ is REPORTING THE INNER SQUARE’S SIDE ✗; the choice $\\frac{5}{4}$ is ADDING FOUR FULL $9w$ STRIPS with their corner overlaps, solving $36w = 45$ ✗.)',
    },
  ],
  // slot 4 — two independent numbers as one point in a square, straight-line cuts.
  // Lane: x+y below a bound / both above a bound / derived, a band between two sum lines.
  [
    {
      q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 5]$, independently. What is the probability that $x + y < 3$?',
      fig: {
        view: frame(5, 5),
        elems: [
          box(5, 5),
          { t: 'poly', pts: [[0, 0], [3, 0], [0, 3]] },
          lab(2.5, 0, '5', 0, 16),
          lab(0, 2.5, '5', -12, 4),
          lab(5, 0, 'x', 14, 4),
          lab(0, 5, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{9}{25}$', '$\\frac{3}{5}$', '$\\frac{9}{50}$', '$\\frac{9}{100}$'],
      answer: 2,
      solution:
        'The pair $(x, y)$ is a random point in a $5 \\times 5$ square of area $25$, and $x + y < 3$ is the triangle below the line from $(3, 0)$ to $(0, 3)$, with area $\\frac{1}{2} \\cdot 3 \\cdot 3 = \\frac{9}{2}$. The probability is $\\frac{9/2}{25} = \\frac{9}{50}$ ✓. Check a second, independent way by zooming in on the $3 \\times 3$ corner square: the line $x + y = 3$ is its diagonal, so it cuts exactly half of that square, and the corner square is $\\frac{9}{25}$ of the whole, giving $\\frac{1}{2} \\cdot \\frac{9}{25} = \\frac{9}{50}$ ✓. (The choice $\\frac{9}{25}$ is USING THE WHOLE $3 \\times 3$ SQUARE, forgetting the half ✗; the choice $\\frac{3}{5}$ is TREATING IT AS ONE NUMBER ON A SEGMENT, comparing lengths $3$ and $5$ ✗; the choice $\\frac{9}{100}$ is HALVING THE TRIANGLE’S AREA A SECOND TIME ✗.)',
    },
    {
      q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 6]$, independently. What is the probability that both $x > 2$ and $y > 2$?',
      fig: {
        view: frame(6, 6),
        elems: [
          box(6, 6),
          { t: 'poly', pts: [[2, 2], [6, 2], [6, 6], [2, 6]] },
          { t: 'seg', a: [2, 0], b: [2, 2], dash: true },
          { t: 'seg', a: [0, 2], b: [2, 2], dash: true },
          lab(3, 0, '6', 0, 16),
          lab(0, 3, '6', -12, 4),
          lab(6, 0, 'x', 14, 4),
          lab(0, 6, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{4}{9}$', '$\\frac{2}{3}$', '$\\frac{1}{9}$', '$\\frac{5}{9}$'],
      answer: 0,
      solution:
        'In the $6 \\times 6$ square of area $36$, the condition holds exactly on the $4 \\times 4$ sub-square with both coordinates above $2$, area $16$, so the probability is $\\frac{16}{36} = \\frac{4}{9}$ ✓. Check a second, independent way with independence: $P(x > 2) = \\frac{4}{6} = \\frac{2}{3}$ and likewise for $y$, and since the two choices are independent the answer is $\\frac{2}{3} \\cdot \\frac{2}{3} = \\frac{4}{9}$ ✓. (The choice $\\frac{2}{3}$ is CHECKING ONLY ONE OF THE TWO CONDITIONS ✗; the choice $\\frac{1}{9}$ is THE REGION WHERE BOTH CONDITIONS FAIL, the opposite corner ✗; the choice $\\frac{5}{9}$ is REPORTING THE COMPLEMENT ✗.)',
    },
    {
      q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 4]$, independently. What is the probability that $2 < x + y < 5$?',
      fig: {
        view: frame(4, 4),
        elems: [
          box(4, 4),
          { t: 'poly', pts: [[2, 0], [4, 0], [4, 1], [1, 4], [0, 4], [0, 2]] },
          lab(2, 0, '4', 0, 16),
          lab(0, 2, '4', -12, 4),
          lab(4, 0, 'x', 14, 4),
          lab(0, 4, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{7}{8}$', '$\\frac{23}{32}$', '$\\frac{3}{32}$', '$\\frac{19}{32}$'],
      answer: 3,
      solution:
        'In the $4 \\times 4$ square of area $16$, the band between the lines $x + y = 2$ and $x + y = 5$ is the square minus two corner triangles: the corner below $x + y = 2$ has legs $2$ (area $2$), and the corner above $x + y = 5$ has legs $3$ (area $\\frac{9}{2}$), since that line crosses the square at $(1, 4)$ and $(4, 1)$. The favorable area is $16 - 2 - \\frac{9}{2} = \\frac{19}{2}$ and the probability is $\\frac{19/2}{16} = \\frac{19}{32}$ ✓. Check a second, independent way by slicing along $x$: the favorable $y$-length is $2 + x$ for $x \\in [0, 1]$, then $3$ for $x \\in [1, 2]$, then $5 - x$ for $x \\in [2, 4]$, totaling $\\frac{5}{2} + 3 + 4 = \\frac{19}{2}$, so the probability is again $\\frac{19}{32}$ ✓. (The choice $\\frac{7}{8}$ is DROPPING THE UPPER CUT $x + y < 5$ ✗; the choice $\\frac{23}{32}$ is DROPPING THE LOWER CUT $x + y > 2$ ✗; the choice $\\frac{3}{32}$ is GIVING THE UPPER TRIANGLE LEGS $5$, ignoring that the square clips it to legs $3$ ✗.)',
    },
  ],
  // slot 5 — concentric circles: hit the disk, miss the disk, or find its radius.
  // Lane: center disk / outside the inner circle / reversed, find the bullseye radius.
  [
    {
      q: 'A circular mat has radius $10$, and a concentric disk of radius $4$ is printed at its center. A point is chosen at random on the mat. What is the probability that it lies on the printed disk?',
      fig: {
        view: [-11.5, -11.5, 11.5, 11.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 10 },
          { t: 'poly', pts: circlePts(0, 0, 4) },
          { t: 'seg', a: [0, 0], b: [-7.071, 7.071], dash: true },
          { t: 'seg', a: [0, 0], b: [4, 0], dash: true },
          { t: 'point', p: [0, 0] },
          lab(-3.536, 3.536, '10', -12, -4),
          lab(2, 0, '4', 0, -6),
        ],
      },
      choices: ['$\\frac{2}{5}$', '$\\frac{4}{25}$', '$\\frac{16}{25}$', '$\\frac{21}{25}$'],
      answer: 1,
      solution:
        'The areas are $\\pi \\cdot 4^2 = 16\\pi$ and $\\pi \\cdot 10^2 = 100\\pi$, so the probability is $\\frac{16\\pi}{100\\pi} = \\frac{4}{25}$ ✓. Check a second, independent way by scaling: the disk is a copy of the mat shrunk by the factor $\\frac{4}{10} = \\frac{2}{5}$, and areas scale by the square of that factor, so the probability is $\\left(\\frac{2}{5}\\right)^2 = \\frac{4}{25}$ ✓. (The choice $\\frac{2}{5}$ is COMPARING RADII instead of areas ✗; the choice $\\frac{16}{25}$ is USING THE DISK’S DIAMETER $8$ AS ITS RADIUS ✗; the choice $\\frac{21}{25}$ is REPORTING THE COMPLEMENT, missing the disk ✗.)',
    },
    {
      q: 'A circular target has radius $8$, and a concentric inner circle of radius $5$ is drawn on it. A dart hits a random point on the target. What is the probability that it lands OUTSIDE the inner circle?',
      fig: {
        view: [-9.5, -9.5, 9.5, 9.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 8 },
          { t: 'poly', pts: ring(circlePts(0, 0, 8), circlePts(0, 0, 5)) },
          { t: 'seg', a: [0, 0], b: [-5.657, 5.657], dash: true },
          { t: 'seg', a: [0, 0], b: [5, 0], dash: true },
          { t: 'point', p: [0, 0] },
          lab(-2.828, 2.828, '8', -10, -4),
          lab(2.5, 0, '5', 0, -6),
        ],
      },
      choices: ['$\\frac{25}{64}$', '$\\frac{3}{8}$', '$\\frac{5}{8}$', '$\\frac{39}{64}$'],
      answer: 3,
      solution:
        'The favorable region is the ring between the circles, with area $64\\pi - 25\\pi = 39\\pi$, so the probability is $\\frac{39\\pi}{64\\pi} = \\frac{39}{64}$ ✓. Check a second, independent way with the complement: landing inside the inner circle is a shrunk copy of the target with ratio $\\frac{5}{8}$, probability $\\left(\\frac{5}{8}\\right)^2 = \\frac{25}{64}$, so landing outside it has probability $1 - \\frac{25}{64} = \\frac{39}{64}$ ✓. (The choice $\\frac{25}{64}$ is REPORTING THE COMPLEMENT, landing inside ✗; the choice $\\frac{3}{8}$ is USING THE DIFFERENCE OF RADII $8 - 5$ over $8$ ✗; the choice $\\frac{5}{8}$ is COMPARING RADII instead of areas ✗.)',
    },
    {
      q: 'A circular target has radius $12$, and its bullseye is a concentric circle of radius $r$, as shown. A dart hits a random point on the target, and it lands on the bullseye with probability $\\frac{1}{16}$. What is $r$?',
      fig: {
        view: [-13.5, -13.5, 13.5, 13.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 12 },
          { t: 'poly', pts: circlePts(0, 0, 3) },
          { t: 'seg', a: [0, 0], b: [-8.485, 8.485], dash: true },
          { t: 'point', p: [0, 0] },
          lab(-4.243, 4.243, '12', -12, -4),
        ],
      },
      choices: ['$9$', '$\\frac{3}{4}$', '$3$', '$\\frac{3}{2}$'],
      answer: 2,
      solution:
        'The probability is the ratio of areas, $\\frac{\\pi r^2}{144\\pi} = \\frac{r^2}{144} = \\frac{1}{16}$, so $r^2 = 9$ and $r = 3$ ✓. Check a second, independent way by scaling: $\\frac{1}{16} = \\left(\\frac{1}{4}\\right)^2$, so the bullseye is the target shrunk by the factor $\\frac{1}{4}$, and $r = \\frac{12}{4} = 3$ ✓. (The choice $9$ is REPORTING $r^2$ INSTEAD OF $r$ ✗; the choice $\\frac{3}{4}$ is COMPARING RADII LINEARLY, solving $\\frac{r}{12} = \\frac{1}{16}$ ✗; the choice $\\frac{3}{2}$ is TAKING $\\frac{1}{16}$ OF THE DIAMETER $24$ ✗.)',
    },
  ],
  // slot 6 — closest-side and closest-point regions inside a rectangle.
  // Lane: closer to the bottom side / closer to one of two marked points / reversed, find the width.
  [
    {
      q: 'A point is chosen at random inside a $14$ by $6$ rectangle. What is the probability that it is closer to the bottom side than to each of the other three sides?',
      fig: {
        view: frame(14, 6),
        elems: [
          box(14, 6),
          { t: 'poly', pts: [[0, 0], [14, 0], [11, 3], [3, 3]] },
          { t: 'seg', a: [0, 0], b: [3, 3], dash: true },
          { t: 'seg', a: [14, 0], b: [11, 3], dash: true },
          lab(7, 0, '14', 0, 16),
          lab(0, 3, '6', -12, 4),
        ],
      },
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{25}{56}$', '$\\frac{11}{28}$'],
      answer: 3,
      solution:
        'Put the bottom-left corner at the origin. Closer to the bottom than the top means $y < 3$; closer than the left side means $y < x$; closer than the right side means $y < 14 - x$. Those three cuts leave the trapezoid with vertices $(0, 0)$, $(14, 0)$, $(11, 3)$, $(3, 3)$, whose parallel sides are $14$ and $8$ with height $3$, area $\\frac{14 + 8}{2} \\cdot 3 = 33$, so the probability is $\\frac{33}{84} = \\frac{11}{28}$ ✓. Check a second, independent way with the complement inside the bottom strip: the strip $y < 3$ has area $42$, and the corner bisectors $y = x$ and $y = 14 - x$ shave off two right triangles with legs $3$, total $9$, leaving $42 - 9 = 33$ and again $\\frac{33}{84} = \\frac{11}{28}$ ✓. (The choice $\\frac{1}{2}$ is STOPPING AFTER THE TOP-SIDE COMPARISON, keeping the whole bottom half ✗; the choice $\\frac{1}{4}$ is BORROWING A SQUARE’S FOUR-WAY SYMMETRY, which a $14$ by $6$ rectangle does not have ✗; the choice $\\frac{25}{56}$ is SHAVING ONLY ONE OF THE TWO CORNERS ✗.)',
    },
    {
      q: 'A rectangular park is $9$ units wide and $6$ units tall, with snack stands at the points $P(2, 3)$ and $Q(8, 3)$, measured from the bottom-left corner. A picnicker sits at a random point of the park. What is the probability that the picnicker is closer to $P$ than to $Q$?',
      fig: {
        view: frame(9, 6),
        elems: [
          box(9, 6),
          { t: 'poly', pts: [[0, 0], [5, 0], [5, 6], [0, 6]] },
          { t: 'seg', a: [5, 0], b: [5, 6], dash: true },
          { t: 'point', p: [2, 3], label: 'P', dx: 0, dy: -8 },
          { t: 'point', p: [8, 3], label: 'Q', dx: 0, dy: -8 },
          lab(4.5, 0, '9', 0, 16),
          lab(0, 3, '6', -12, 4),
        ],
      },
      choices: ['$\\frac{1}{2}$', '$\\frac{5}{9}$', '$\\frac{4}{9}$', '$\\frac{2}{9}$'],
      answer: 1,
      solution:
        'The points closer to $P$ than to $Q$ lie on $P$’s side of the perpendicular bisector of $\\overline{PQ}$. Since $P$ and $Q$ are at the same height, that bisector is the vertical line $x = 5$, so the favorable region is the $5$ by $6$ piece on the left, area $30$ of $54$, and the probability is $\\frac{30}{54} = \\frac{5}{9}$ ✓. Check a second, independent way by dropping a coordinate: the comparison $\\sqrt{(x-2)^2 + (y-3)^2} < \\sqrt{(x-8)^2 + (y-3)^2}$ has the same $(y - 3)^2$ on both sides, so it is a condition on $x$ alone, $|x - 2| < |x - 8|$, which holds exactly for $x < 5$ — a stretch of length $5$ out of $9$, probability $\\frac{5}{9}$ ✓. (The choice $\\frac{1}{2}$ is ASSUMING AN EVEN SPLIT, which fails because the stands sit off-center ✗; the choice $\\frac{4}{9}$ is REPORTING THE COMPLEMENT, closer to $Q$ ✗; the choice $\\frac{2}{9}$ is SHADING ONLY THE POINTS LEFT OF $P$ ✗.)',
    },
    {
      q: 'A rectangle is $w$ units wide and $4$ units tall, where $w \\ge 4$. A point chosen at random inside it is closer to the bottom side than to each of the other three sides with probability $\\frac{3}{10}$. What is $w$?',
      fig: {
        view: frame(5, 4),
        elems: [
          box(5, 4),
          { t: 'poly', pts: [[0, 0], [5, 0], [3, 2], [2, 2]] },
          { t: 'seg', a: [0, 0], b: [2, 2], dash: true },
          { t: 'seg', a: [5, 0], b: [3, 2], dash: true },
          lab(0, 2, '4', -12, 4),
        ],
      },
      choices: ['$5$', '$\\frac{5}{2}$', '$10$', '$\\frac{24}{5}$'],
      answer: 0,
      solution:
        'The favorable region is the trapezoid below $y = 2$, $y = x$, and $y = w - x$, with parallel sides $w$ and $w - 4$ and height $2$, area $\\frac{w + (w - 4)}{2} \\cdot 2 = 2w - 4$. Setting $\\frac{2w - 4}{4w} = \\frac{3}{10}$ gives $20w - 40 = 12w$, so $8w = 40$ and $w = 5$ ✓. Check a second, independent way by splitting off the corners: the bottom half $y < 2$ alone has probability $\\frac{2w}{4w} = \\frac{1}{2}$, and the two corner triangles with legs $2$ remove $\\frac{2 \\cdot 2}{4w} = \\frac{1}{w}$, so $\\frac{1}{2} - \\frac{1}{w} = \\frac{3}{10}$ gives $\\frac{1}{w} = \\frac{1}{5}$ and $w = 5$ ✓. (The choice $\\frac{5}{2}$ is SHAVING ONLY $1$ FROM EACH END of the strip, using sides $w$ and $w - 2$ ✗; the choice $10$ is USING ONLY THE TOP SIDE $w - 4$, taking the area to be $2(w - 4)$ ✗; the choice $\\frac{24}{5}$ is IGNORING THE TOP SIDE so the two bisectors meet at height $\\frac{w}{2}$, solving $\\frac{w}{16} = \\frac{3}{10}$ ✗.)',
    },
  ],
  // slot 7 — a circle determined by the enclosing shape itself.
  // Lane: semicircle filling the height / incircle of a right triangle / reversed, find the width.
  [
    {
      q: 'A semicircle of radius $3$ is drawn inside an $8$ by $3$ rectangle with its diameter along the bottom side, so its top just reaches the top side, as shown. A point is chosen at random in the rectangle. What is the probability that it lies inside the semicircle?',
      fig: {
        view: frame(8, 3),
        elems: [
          box(8, 3),
          { t: 'poly', pts: arcPts(4, 0, 3, 0, 180) },
          lab(4, 0, '8', 0, 16),
          lab(0, 1.5, '3', -12, 4),
        ],
      },
      choices: ['$\\frac{3\\pi}{8}$', '$\\frac{3\\pi}{4}$', '$\\frac{3\\pi}{16}$', '$\\frac{3\\pi}{32}$'],
      answer: 2,
      solution:
        'The rectangle has area $24$, and half of a circle of radius $3$ has area $\\frac{1}{2} \\cdot 9\\pi = \\frac{9\\pi}{2}$, so the probability is $\\frac{9\\pi/2}{24} = \\frac{3\\pi}{16}$ ✓. Check a second, independent way by scaling: inside its own $6$ by $3$ bounding box the semicircle covers $\\frac{9\\pi/2}{18} = \\frac{\\pi}{4}$, and that box is $\\frac{18}{24} = \\frac{3}{4}$ of the rectangle, so the probability is $\\frac{\\pi}{4} \\cdot \\frac{3}{4} = \\frac{3\\pi}{16}$ ✓. (The choice $\\frac{3\\pi}{8}$ is FORGETTING THE $\\frac{1}{2}$ and using the whole circle ✗; the choice $\\frac{3\\pi}{4}$ is USING THE DIAMETER $6$ AS THE RADIUS ✗; the choice $\\frac{3\\pi}{32}$ is HALVING AGAIN, as though only a quarter circle were shaded ✗.)',
    },
    {
      q: 'A right triangle has legs of lengths $6$ and $8$, and its inscribed circle — the circle inside the triangle tangent to all three sides — is drawn, as shown. A point is chosen at random inside the triangle. What is the probability that it lies inside the inscribed circle?',
      fig: {
        view: frame(6, 8),
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [0, 8]], fill: false },
          { t: 'poly', pts: circlePts(2, 2, 2) },
          lab(3, 0, '6', 0, 16),
          lab(0, 4, '8', -12, 4),
        ],
      },
      choices: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{12}$', '$\\frac{2\\pi}{3}$', '$\\frac{\\pi}{24}$'],
      answer: 0,
      solution:
        'The hypotenuse is $\\sqrt{6^2 + 8^2} = 10$, and for a right triangle the inradius is $r = \\frac{6 + 8 - 10}{2} = 2$. The triangle has area $\\frac{1}{2} \\cdot 6 \\cdot 8 = 24$ and the circle has area $4\\pi$, so the probability is $\\frac{4\\pi}{24} = \\frac{\\pi}{6}$ ✓. Check a second, independent way through $A = rs$: the semiperimeter is $s = \\frac{6 + 8 + 10}{2} = 12$, so $r = \\frac{A}{s} = \\frac{24}{12} = 2$, and the probability is $\\frac{\\pi r^2}{rs} = \\frac{\\pi r}{s} = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$ ✓. (The choice $\\frac{\\pi}{12}$ is FORGETTING THE $\\frac{1}{2}$ IN THE TRIANGLE’S AREA, dividing by $48$ ✗; the choice $\\frac{2\\pi}{3}$ is DIVIDING THE AREA BY A LEG to get $r = 4$ ✗; the choice $\\frac{\\pi}{24}$ is HALVING THE INRADIUS to $r = 1$ ✗.)',
    },
    {
      q: 'A semicircle is drawn inside a rectangle that is $w$ units wide and $5$ units tall, with its diameter being the entire bottom side, and the semicircle fits inside the rectangle, as shown. A point chosen at random in the rectangle lies inside the semicircle with probability $\\frac{\\pi}{4}$. What is $w$?',
      fig: {
        view: frame(10, 5),
        elems: [
          box(10, 5),
          { t: 'poly', pts: arcPts(5, 0, 5, 0, 180) },
          lab(0, 2.5, '5', -12, 4),
        ],
      },
      choices: ['$\\frac{5}{2}$', '$5$', '$20$', '$10$'],
      answer: 3,
      solution:
        'The radius is $\\frac{w}{2}$, so the semicircle has area $\\frac{1}{2}\\pi\\left(\\frac{w}{2}\\right)^2 = \\frac{\\pi w^2}{8}$, and $\\frac{\\pi w^2 / 8}{5w} = \\frac{\\pi w}{40} = \\frac{\\pi}{4}$ gives $w = 10$ ✓. Check a second, independent way by solving for the radius $r = \\frac{w}{2}$ first: the rectangle is $2r$ by $5$, so $\\frac{\\pi r^2 / 2}{10r} = \\frac{\\pi r}{20} = \\frac{\\pi}{4}$ gives $r = 5$, and $w = 2r = 10$; the bulge of height $5$ just reaches the top, so it fits ✓. (The choice $\\frac{5}{2}$ is USING $w$ ITSELF AS THE RADIUS ✗; the choice $5$ is FORGETTING THE SEMICIRCLE’S $\\frac{1}{2}$, using a whole circle ✗; the choice $20$ is HALVING TWICE, solving $\\frac{\\pi w}{80} = \\frac{\\pi}{4}$ ✗.)',
    },
  ],
  // slot 8 — |x−y| bands, including unequal windows and an extra restriction.
  // Lane: differ by at least 3 / unequal windows within 2 / derived, band plus a floor on both.
  [
    {
      q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 8]$, independently. What is the probability that they differ by at least $3$?',
      fig: {
        view: frame(8, 8),
        elems: [
          box(8, 8),
          { t: 'poly', pts: [[0, 3], [5, 8], [0, 8]] },
          { t: 'poly', pts: [[3, 0], [8, 0], [8, 5]] },
          lab(4, 0, '8', 0, 16),
          lab(0, 4, '8', -12, 4),
          lab(8, 0, 'x', 14, 4),
          lab(0, 8, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{25}{64}$', '$\\frac{39}{64}$', '$\\frac{9}{64}$', '$\\frac{25}{32}$'],
      answer: 0,
      solution:
        'In the $8 \\times 8$ square, $|x - y| \\ge 3$ is the pair of corner triangles above $y = x + 3$ and below $y = x - 3$, each with legs $8 - 3 = 5$, total area $2 \\cdot \\frac{25}{2} = 25$, so the probability is $\\frac{25}{64}$ ✓. Check a second, independent way through the band’s area by slicing: for $x \\in [0, 3]$ the allowed $y$-length in the band $|x - y| < 3$ is $x + 3$, for $x \\in [3, 5]$ it is $6$, and for $x \\in [5, 8]$ it is $11 - x$; those integrate to $13.5 + 12 + 13.5 = 39$, so the band has probability $\\frac{39}{64}$ and the answer is $1 - \\frac{39}{64} = \\frac{25}{64}$ ✓. (The choice $\\frac{39}{64}$ is REPORTING THE COMPLEMENT, the band ✗; the choice $\\frac{9}{64}$ is GIVING THE TRIANGLES LEGS $3$ instead of $5$ ✗; the choice $\\frac{25}{32}$ is FORGETTING THE $\\frac{1}{2}$, counting each triangle as a full $5$ by $5$ square ✗.)',
    },
    {
      q: 'A taxi reaches a corner at a random time $x$ minutes into a $10$-minute span, and its passenger reaches the corner at a random time $y$ minutes into the FIRST $5$ minutes of that span, independently. They connect if they arrive within $2$ minutes of each other, that is, if $|x - y| \\le 2$. What is the probability that they connect?',
      fig: {
        view: frame(10, 5),
        elems: [
          box(10, 5),
          { t: 'poly', pts: [[0, 0], [2, 0], [7, 5], [3, 5], [0, 2]] },
          lab(5, 0, '10', 0, 16),
          lab(0, 2.5, '5', -12, 4),
          lab(10, 0, 'x', 14, 4),
          lab(0, 5, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{2}{5}$', '$\\frac{16}{25}$', '$\\frac{9}{25}$', '$\\frac{9}{50}$'],
      answer: 2,
      solution:
        'The pair $(x, y)$ is a random point in a $10 \\times 5$ rectangle of area $50$. Slice by $y$: for $y \\in [0, 2]$ the allowed $x$-stretch is $[0, y + 2]$, length $y + 2$, and for $y \\in [2, 5]$ it is the full $[y - 2, y + 2]$, length $4$. The favorable area is $\\int$-free by geometry: the first part is a trapezoid worth $2 + 4 = 6$, the second $3 \\cdot 4 = 12$, total $18$, so the probability is $\\frac{18}{50} = \\frac{9}{25}$ ✓. Check a second, independent way with a parallelogram: the band $y - 2 \\le x \\le y + 2$ across the full height $5$ is a parallelogram of base $4$ and height $5$, area $20$, but the part with $x < 0$ — a triangle with legs $2$ at the left edge — is outside the rectangle, so the favorable area is $20 - 2 = 18$ and again $\\frac{18}{50} = \\frac{9}{25}$ ✓. (The choice $\\frac{2}{5}$ is KEEPING THE WHOLE PARALLELOGRAM, ignoring the clipped corner ✗; the choice $\\frac{16}{25}$ is REPORTING THE COMPLEMENT ✗; the choice $\\frac{9}{50}$ is DIVIDING BY A $10 \\times 10$ SQUARE instead of the true rectangle ✗.)',
    },
    {
      q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 6]$, independently. What is the probability that they differ by at least $2$ AND both numbers are at least $2$?',
      fig: {
        view: frame(6, 6),
        elems: [
          box(6, 6),
          { t: 'poly', pts: [[4, 2], [6, 2], [6, 4]] },
          { t: 'poly', pts: [[2, 4], [4, 6], [2, 6]] },
          { t: 'seg', a: [2, 2], b: [6, 2], dash: true },
          { t: 'seg', a: [2, 2], b: [2, 6], dash: true },
          lab(3, 0, '6', 0, 16),
          lab(0, 3, '6', -12, 4),
          lab(6, 0, 'x', 14, 4),
          lab(0, 6, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{4}{9}$', '$\\frac{1}{9}$', '$\\frac{16}{81}$', '$\\frac{1}{4}$'],
      answer: 1,
      solution:
        'Both conditions confine the point to the sub-square $[2, 6] \\times [2, 6]$, and inside it $|x - y| \\ge 2$ cuts two corner triangles: $x - y \\ge 2$ gives the triangle $(4, 2)$, $(6, 2)$, $(6, 4)$ with legs $2$, and $y - x \\ge 2$ its mirror image, total area $2 \\cdot 2 = 4$. The probability is $\\frac{4}{36} = \\frac{1}{9}$ ✓. Check a second, independent way by conditioning: $P(\\text{both} \\ge 2) = \\left(\\frac{4}{6}\\right)^2 = \\frac{4}{9}$, and given that, the point is uniform in a side-$4$ square where differing by at least $2$ keeps two triangles with legs $2$ out of area $16$, probability $\\frac{4}{16} = \\frac{1}{4}$; the product is $\\frac{4}{9} \\cdot \\frac{1}{4} = \\frac{1}{9}$ ✓. (The choice $\\frac{4}{9}$ is DROPPING ONE CONDITION — each condition alone happens to have this probability ✗; the choice $\\frac{16}{81}$ is MULTIPLYING THE TWO PROBABILITIES as though the conditions were independent, but they interact ✗; the choice $\\frac{1}{4}$ is DIVIDING BY THE SUB-SQUARE’S AREA $16$ instead of $36$ ✗.)',
    },
  ],
  // slot 9 — meeting problems with unequal patience or unequal windows.
  // Lane: waits 15 and 25 / unequal windows within 5 / reversed, find the shared wait.
  [
    {
      q: 'Cara and Dan each arrive at a library at a random time during the same $60$-minute window, independently. Whoever comes first waits for the other, but Cara will wait only $15$ minutes while Dan will wait $25$ minutes. What is the probability that they meet?',
      fig: {
        view: frame(60, 60),
        elems: [
          box(60, 60),
          { t: 'poly', pts: [[0, 0], [25, 0], [60, 35], [60, 60], [45, 60], [0, 15]] },
          lab(30, 0, '60', 0, 16),
          lab(0, 30, '60', -14, 4),
          lab(30, 0, 'Cara (min)', 0, 32),
          lab(0, 60, 'Dan (min)', 0, -10),
        ],
      },
      choices: ['$\\frac{7}{16}$', '$\\frac{95}{144}$', '$\\frac{79}{144}$', '$\\frac{65}{144}$'],
      answer: 2,
      solution:
        'Let $x$ and $y$ be Cara’s and Dan’s arrival minutes. If Cara is first they meet when $y - x \\le 15$; if Dan is first, when $x - y \\le 25$. The failures are two corner triangles of the $60 \\times 60$ square: $y - x > 15$ has legs $45$ (area $\\frac{2025}{2}$) and $x - y > 25$ has legs $35$ (area $\\frac{1225}{2}$), so the meeting region has area $3600 - \\frac{2025 + 1225}{2} = 1975$ and the probability is $\\frac{1975}{3600} = \\frac{79}{144}$ ✓. Check a second, independent way by casework on who is first: Cara first and meeting is the strip $0 \\le y - x \\le 15$, the half-square above the diagonal (area $1800$) minus the legs-$45$ triangle, $1800 - \\frac{2025}{2} = \\frac{1575}{2}$; Dan first and meeting is $1800 - \\frac{1225}{2} = \\frac{2375}{2}$; the sum is $1975$, probability $\\frac{79}{144}$ ✓. (The choice $\\frac{7}{16}$ is GIVING BOTH PEOPLE CARA’S $15$-MINUTE PATIENCE ✗; the choice $\\frac{95}{144}$ is GIVING BOTH DAN’S $25$ ✗; the choice $\\frac{65}{144}$ is REPORTING THE COMPLEMENT ✗.)',
    },
    {
      q: 'Eli arrives at a plaza at a random time $x$ minutes into a $40$-minute span, and Fay arrives at a random time $y$ minutes into the FIRST $20$ minutes of that span, independently. They meet if they arrive within $5$ minutes of each other, that is, if $|x - y| \\le 5$. What is the probability that they meet?',
      fig: {
        view: frame(40, 20),
        elems: [
          box(40, 20),
          { t: 'poly', pts: [[0, 0], [5, 0], [25, 20], [15, 20], [0, 5]] },
          lab(20, 0, '40', 0, 16),
          lab(0, 10, '20', -14, 4),
          lab(30, 0, 'Eli (min)', 0, 32),
          lab(0, 20, 'Fay (min)', 0, -10),
        ],
      },
      choices: ['$\\frac{15}{64}$', '$\\frac{1}{4}$', '$\\frac{49}{64}$', '$\\frac{7}{16}$'],
      answer: 0,
      solution:
        'The pair $(x, y)$ is a random point in a $40 \\times 20$ rectangle of area $800$. Slice by $y$: for $y \\in [0, 5]$ the allowed $x$-stretch is $[0, y + 5]$, and those lengths sum to a trapezoid worth $\\frac{5 + 10}{2} \\cdot 5 = \\frac{75}{2}$; for $y \\in [5, 20]$ the full stretch $[y - 5, y + 5]$ of length $10$ fits, worth $150$. The favorable area is $\\frac{75}{2} + 150 = \\frac{375}{2}$, so the probability is $\\frac{375/2}{800} = \\frac{15}{64}$ ✓. Check a second, independent way with a parallelogram: the band $y - 5 \\le x \\le y + 5$ across height $20$ is a parallelogram of base $10$ and height $20$, area $200$, and only the left triangle with legs $5$ (area $\\frac{25}{2}$) pokes out at $x < 0$, so the favorable area is $200 - \\frac{25}{2} = \\frac{375}{2}$ and again $\\frac{15}{64}$ ✓. (The choice $\\frac{1}{4}$ is KEEPING THE WHOLE PARALLELOGRAM, ignoring the clipped corner ✗; the choice $\\frac{49}{64}$ is REPORTING THE COMPLEMENT ✗; the choice $\\frac{7}{16}$ is PUTTING BOTH ARRIVALS IN THE $20$-MINUTE WINDOW ✗.)',
    },
    {
      q: 'Two friends each arrive at a fountain at a random time during the same $60$-minute window, independently, and each waits exactly $w$ minutes for the other before leaving. They meet with probability $\\frac{7}{16}$. What is $w$?',
      fig: {
        view: frame(60, 60),
        elems: [
          box(60, 60),
          { t: 'poly', pts: [[0, 0], [15, 0], [60, 45], [60, 60], [45, 60], [0, 15]] },
          lab(30, 0, '60', 0, 16),
          lab(0, 30, '60', -14, 4),
        ],
      },
      choices: ['$45$', '$\\frac{105}{4}$', '$\\frac{135}{4}$', '$15$'],
      answer: 3,
      solution:
        'With arrival minutes $x$ and $y$, they meet when $|x - y| \\le w$, and the misses are two corner triangles with legs $60 - w$. So the meeting area is $3600 - (60 - w)^2$, and $\\frac{3600 - (60 - w)^2}{3600} = \\frac{7}{16}$ gives $(60 - w)^2 = \\frac{9}{16} \\cdot 3600 = 2025$, so $60 - w = 45$ and $w = 15$ ✓. Check a second, independent way by similarity: the two miss triangles assemble into a square-corner pair similar to the whole square’s halves with ratio $\\frac{60 - w}{60}$, so the miss probability is that ratio squared; a miss probability of $1 - \\frac{7}{16} = \\frac{9}{16} = \\left(\\frac{3}{4}\\right)^2$ forces $\\frac{60 - w}{60} = \\frac{3}{4}$, and $w = 60 - 45 = 15$ ✓. (The choice $45$ is REPORTING $60 - w$, the triangle leg ✗; the choice $\\frac{105}{4}$ is SKIPPING THE SQUARE, solving $\\frac{60 - w}{60} = \\frac{9}{16}$ ✗; the choice $\\frac{135}{4}$ is SWAPPING MEET AND MISS as well, solving $\\frac{60 - w}{60} = \\frac{7}{16}$ ✗.)',
    },
  ],
  // slot 10 — triangle-side conditions on two random lengths.
  // Lane: sides x, y, 5 on [0,8] / rods on [0,4] with a 5 / derived, perimeter capped.
  [
    {
      q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 8]$, independently. What is the probability that segments of lengths $x$, $y$, and $5$ can be the three sides of a triangle?',
      fig: {
        view: frame(8, 8),
        elems: [
          box(8, 8),
          { t: 'poly', pts: [[5, 0], [8, 3], [8, 8], [3, 8], [0, 5]] },
          lab(4, 0, '8', 0, 16),
          lab(0, 4, '8', -12, 4),
          lab(8, 0, 'x', 14, 4),
          lab(0, 8, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{103}{128}$', '$\\frac{85}{128}$', '$\\frac{55}{64}$', '$\\frac{43}{128}$'],
      answer: 1,
      solution:
        'The triangle conditions are $x + y > 5$, $x < y + 5$, and $y < x + 5$. In the $8 \\times 8$ square the failures are three disjoint corners: $x + y < 5$ is a triangle with legs $5$ (area $\\frac{25}{2}$), and each of $x - y > 5$ and $y - x > 5$ is a triangle with legs $3$ (area $\\frac{9}{2}$ each). The favorable area is $64 - \\frac{25}{2} - 9 = \\frac{85}{2}$ and the probability is $\\frac{85/2}{64} = \\frac{85}{128}$ ✓. Check a second, independent way by slicing the pentagon: for $x \\in [0, 3]$ the allowed $y$-stretch $(5 - x, 5 + x)$ has length $2x$ (total $9$); for $x \\in [3, 5]$ it is $(5 - x, 8]$, length $3 + x$ (total $14$); for $x \\in [5, 8]$ it is $(x - 5, 8]$, length $13 - x$ (total $\\frac{39}{2}$); the sum is $\\frac{85}{2}$, probability $\\frac{85}{128}$ ✓. (The choice $\\frac{103}{128}$ is CHECKING ONLY $x + y > 5$ ✗; the choice $\\frac{55}{64}$ is CHECKING ONLY $|x - y| < 5$ ✗; the choice $\\frac{43}{128}$ is REPORTING THE COMPLEMENT ✗.)',
    },
    {
      q: 'Two rods have random lengths $x$ and $y$, each chosen at random from $[0, 4]$ independently, and a third rod has length $5$. What is the probability that the three rods can be joined end to end to form a triangle?',
      fig: {
        view: frame(4, 4),
        elems: [
          box(4, 4),
          { t: 'poly', pts: [[4, 1], [4, 4], [1, 4]] },
          lab(2, 0, '4', 0, 16),
          lab(0, 2, '4', -12, 4),
          lab(4, 0, 'x', 14, 4),
          lab(0, 4, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{9}{16}$', '$\\frac{23}{32}$', '$\\frac{1}{2}$', '$\\frac{9}{32}$'],
      answer: 3,
      solution:
        'Since $x$ and $y$ are at most $4$, both $x < y + 5$ and $y < x + 5$ hold automatically, so the only condition with teeth is $x + y > 5$. In the $4 \\times 4$ square that is the corner triangle above the line through $(1, 4)$ and $(4, 1)$, with legs $3$ and area $\\frac{9}{2}$, so the probability is $\\frac{9/2}{16} = \\frac{9}{32}$ ✓. Check a second, independent way by slicing: for $x \\in [1, 4]$ the allowed $y$-stretch $(5 - x, 4]$ has length $x - 1$, and those lengths total $\\frac{1}{2} \\cdot 3 \\cdot 3 = \\frac{9}{2}$ (a growing ramp from $0$ to $3$), giving $\\frac{9}{32}$ again ✓. (The choice $\\frac{9}{16}$ is FORGETTING THE $\\frac{1}{2}$, using a $3$ by $3$ square ✗; the choice $\\frac{23}{32}$ is REPORTING THE COMPLEMENT ✗; the choice $\\frac{1}{2}$ is USING $x + y > 4$, mixing the interval length into the triangle inequality ✗.)',
    },
    {
      q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 6]$, independently. What is the probability that segments of lengths $x$, $y$, and $3$ can be the three sides of a triangle whose perimeter is LESS than $9$?',
      fig: {
        view: frame(6, 6),
        elems: [
          box(6, 6),
          { t: 'poly', pts: [[3, 0], [4.5, 1.5], [1.5, 4.5], [0, 3]] },
          lab(3, 0, '6', 0, 16),
          lab(0, 3, '6', -12, 4),
          lab(6, 0, 'x', 14, 4),
          lab(0, 6, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{5}{8}$', '$\\frac{3}{8}$', '$\\frac{1}{4}$', '$\\frac{3}{4}$'],
      answer: 2,
      solution:
        'The triangle conditions with side $3$ are $x + y > 3$ and $|x - y| < 3$, and the perimeter condition $x + y + 3 < 9$ means $x + y < 6$. The strip $3 < x + y < 6$ is a triangle with legs $6$ minus one with legs $3$, area $18 - \\frac{9}{2} = \\frac{27}{2}$; the parts of it with $|x - y| \\ge 3$ are two side triangles with vertices like $(3, 0)$, $(6, 0)$, $(4.5, 1.5)$, area $\\frac{9}{4}$ each. The favorable area is $\\frac{27}{2} - \\frac{9}{2} = 9$ and the probability is $\\frac{9}{36} = \\frac{1}{4}$ ✓. Check a second, independent way by recognizing the region as a rectangle: its sides lie on the four lines $x + y = 3$, $x + y = 6$, $x - y = 3$, and $y - x = 3$; the first pair are parallel at distance $\\frac{3}{\\sqrt{2}}$, the second pair at distance $\\frac{6}{\\sqrt{2}}$, so the area is $\\frac{3}{\\sqrt{2}} \\cdot \\frac{6}{\\sqrt{2}} = 9$, and again $\\frac{9}{36} = \\frac{1}{4}$ ✓. (The choice $\\frac{5}{8}$ is DROPPING THE PERIMETER CONDITION entirely ✗; the choice $\\frac{3}{8}$ is KEEPING ONLY THE SUM STRIP and forgetting $|x - y| < 3$ ✗; the choice $\\frac{3}{4}$ is REPORTING THE COMPLEMENT ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 10,
  sections: {
    '10.3': s103,
  },
}
