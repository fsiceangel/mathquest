// Introduction to Geometry chapter 17 — variations for the printable worksheet.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key and no answer
//    index anywhere in this file. Answers copy the base worksheet’s formatting:
//    the paired sentence 'Distance $= 20$; midpoint $= (3, 9)$' where two
//    quantities are asked for, 'Center $(4, -3)$, radius $5$' for a circle read
//    out of general form, 'Area $= 20$' for an area, a bare equation
//    '$y = -\frac{4}{3}x + 9$' for a line, a bare value '$\frac{60}{13}$' for a
//    distance, the list '$(4, 3)$ and $(-3, -4)$' for a pair of points, and
//    '$k = 10$ or $k = -10$' for the two tangency values.
//  - Every answer was worked twice by two genuinely different routes, and the
//    routes had to agree before the key was written: run-and-rise vs. stepping
//    out from the middle (slot 1); completing both squares vs. reading the
//    center and radius straight off the general-form coefficients (slot 2);
//    midpoint-plus-negative-reciprocal vs. forcing the two squared distances
//    equal (slot 3); the shoelace sum vs. peeling three corner triangles off the
//    bounding box (slot 4); squared side lengths vs. slopes (slot 5); the area
//    of the intercept triangle vs. the point-line distance formula (slot 6);
//    substitution into the circle vs. the chord’s midpoint plus half its length
//    (slot 7); a zero discriminant vs. setting the center-to-line distance equal
//    to the radius (slot 8); matching the shift vectors of opposite sides vs.
//    showing both diagonals share a midpoint (slot 9); equal squared distances
//    vs. crossing the perpendicular bisector with the $y$-axis (slot 10).
//  - Worksheet items carry no distractors, so each solution closes with a short
//    confirmation instead: measuring both halves of the segment (slot 1),
//    substituting a point that must sit on the circle (slot 2), pricing both
//    endpoints from a point of the bisector (slot 3), an area recount after
//    sliding one vertex to the origin (slot 4), an area cross-check
//    (slot 5), the leg-times-leg equals hypotenuse-times-height identity
//    (slot 6), substituting both points back into line and circle (slot 7),
//    solving the tangent case and watching it produce one repeated root
//    (slot 8), matching the lengths of opposite sides (slot 9), and measuring
//    both distances from the point found (slot 10).
//  - Figures follow the base worksheet: coordinate grids with exact lattice
//    coordinates, drawn for the six slots that carry one in the base (slots 1,
//    4, 5, 7, 9, 10). No figure ever plots the point the question asks for, so
//    the midpoint, the side midpoints, and the intersection points are left for
//    the student to place; each `view` still contains every point the answer
//    names. Figure labels are plain text.
//  - Pin deviations: none. Every keyed answer is the pinned one, with bare
//    LaTeX pins wrapped in $…$ the way the base worksheet writes them.

const worksheet = [
  // slot 1 — distance and midpoint of one segment, both parts answered.
  //          Lanes: (-3, 1) to (9, 17) -> 20 and (3, 9);
  //          (0, 0) to (18, 24) -> 30 and (9, 12);
  //          (2, -9) to (12, 15) -> 26 and (7, 3).
  [
    {
      q: 'A zip line runs as a straight cable from $(-3, 1)$ to $(9, 17)$ on a park map, where one unit is one meter. How long is the cable, and where is its midpoint?',
      fig: {
        w: 220,
        view: [-5, -1, 11, 19],
        grid: true,
        elems: [
          { t: 'seg', a: [-3, 1], b: [9, 17] },
          { t: 'point', p: [-3, 1], label: 'A', dx: -12, dy: 8 },
          { t: 'point', p: [9, 17], label: 'B', dx: 12, dy: -6 },
        ],
      },
      answer: 'Distance $= 20$; midpoint $= (3, 9)$',
      solution:
        'Run and rise first: the run is $9 - (-3) = 12$ and the rise is $17 - 1 = 16$, so the cable measures $\\sqrt{12^2 + 16^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20$ meters — a $12$-$16$-$20$ right triangle, which is $3$-$4$-$5$ scaled by $4$. Averaging the coordinates puts the midpoint at $\\left(\\frac{-3 + 9}{2}, \\frac{1 + 17}{2}\\right) = (3, 9)$ ✓. Second route, working outward from the middle: half the run is $6$ and half the rise is $8$, so stepping that far from $(-3, 1)$ reaches $(-3 + 6, 1 + 8) = (3, 9)$, and stepping the same amount back from $(9, 17)$ reaches $(9 - 6, 17 - 8) = (3, 9)$ — the same point from both ends, which is exactly what makes it the midpoint. That half-step is a $6$-$8$-$10$ triangle, so it covers $10$ meters, and the full cable is twice that, $20$ ✓. Check by measuring both halves: $(3, 9)$ sits $\\sqrt{6^2 + 8^2} = 10$ from each end, and $10 + 10 = 20$, matching the length found the first way.',
    },
    {
      q: 'Find the distance between $(0, 0)$ and $(18, 24)$, and the midpoint of the segment joining them.',
      fig: {
        w: 220,
        view: [-2, -2, 20, 26],
        grid: true,
        elems: [
          { t: 'seg', a: [0, 0], b: [18, 24] },
          { t: 'point', p: [0, 0], label: 'O', dx: -12, dy: 12 },
          { t: 'point', p: [18, 24], label: 'B', dx: 12, dy: -6 },
        ],
      },
      answer: 'Distance $= 30$; midpoint $= (9, 12)$',
      solution:
        'Run and rise first: the run is $18 - 0 = 18$ and the rise is $24 - 0 = 24$, so the distance is $\\sqrt{18^2 + 24^2} = \\sqrt{324 + 576} = \\sqrt{900} = 30$ — an $18$-$24$-$30$ right triangle, which is $3$-$4$-$5$ scaled by $6$. Averaging the coordinates puts the midpoint at $\\left(\\frac{0 + 18}{2}, \\frac{0 + 24}{2}\\right) = (9, 12)$ ✓. Second route, working outward from the middle: half the run is $9$ and half the rise is $12$, so stepping that far from $(0, 0)$ reaches $(9, 12)$, and stepping the same amount back from $(18, 24)$ reaches $(18 - 9, 24 - 12) = (9, 12)$ — one point reached from both ends. That half-step is a $9$-$12$-$15$ triangle, so it covers $15$ units and the whole segment covers $30$ ✓. Check by measuring both halves: $(9, 12)$ sits $\\sqrt{9^2 + 12^2} = 15$ from each endpoint, and $15 + 15 = 30$. Because one endpoint is the origin, the midpoint is simply half of the other endpoint, which is a useful shortcut to remember.',
    },
    {
      q: 'A survey stake stands at $(2, -9)$ and a second stake stands at $(12, 15)$. Find the distance between the stakes and the midpoint of the segment they determine.',
      fig: {
        w: 220,
        view: [0, -11, 14, 17],
        grid: true,
        elems: [
          { t: 'seg', a: [2, -9], b: [12, 15] },
          { t: 'point', p: [2, -9], label: 'P', dx: -12, dy: 10 },
          { t: 'point', p: [12, 15], label: 'Q', dx: 12, dy: -6 },
        ],
      },
      answer: 'Distance $= 26$; midpoint $= (7, 3)$',
      solution:
        'Run and rise first: the run is $12 - 2 = 10$ and the rise is $15 - (-9) = 24$, so the distance is $\\sqrt{10^2 + 24^2} = \\sqrt{100 + 576} = \\sqrt{676} = 26$ — a $10$-$24$-$26$ right triangle, which is $5$-$12$-$13$ scaled by $2$. Averaging the coordinates puts the midpoint at $\\left(\\frac{2 + 12}{2}, \\frac{-9 + 15}{2}\\right) = (7, 3)$ ✓. Second route, working outward from the middle: half the run is $5$ and half the rise is $12$, so stepping that far from $(2, -9)$ reaches $(2 + 5, -9 + 12) = (7, 3)$, and stepping the same amount back from $(12, 15)$ reaches $(12 - 5, 15 - 12) = (7, 3)$ — the same landing spot from either end. That half-step is a $5$-$12$-$13$ triangle covering $13$ units, so the whole segment covers $26$ ✓. Check by measuring both halves: $(7, 3)$ sits $\\sqrt{5^2 + 12^2} = 13$ from each stake, and $13 + 13 = 26$. The rise here is negative-to-positive, so subtracting a negative is what makes the rise $24$ rather than $6$.',
    },
  ],

  // slot 2 — center and radius from general form, by completing both squares.
  //          Lanes: x^2 + y^2 - 8x + 6y = 0 -> (4, -3), r = 5;
  //          x^2 + y^2 + 2x + 12y + 21 = 0 -> (-1, -6), r = 4;
  //          x^2 + y^2 - 14x - 4y + 17 = 0 -> (7, 2), r = 6.
  [
    {
      q: 'Find the center and radius of the circle $x^2 + y^2 - 8x + 6y = 0$.',
      answer: 'Center $(4, -3)$, radius $5$',
      solution:
        'Complete both squares. Half of $-8$ is $-4$ and half of $6$ is $3$, so add $16$ and $9$ to both sides: $(x^2 - 8x + 16) + (y^2 + 6y + 9) = 0 + 16 + 9$, which is $(x - 4)^2 + (y + 3)^2 = 25$. The center reads off with the signs flipped from what stands inside the parentheses, giving $(4, -3)$, and the radius is $\\sqrt{25} = 5$ ✓. Second route, straight from the coefficients: a circle written $x^2 + y^2 + Dx + Ey + F = 0$ has center $\\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$ and radius $\\sqrt{\\left(\\frac{D}{2}\\right)^2 + \\left(\\frac{E}{2}\\right)^2 - F}$. Here $D = -8$, $E = 6$, $F = 0$, so the center is $(4, -3)$ and the radius is $\\sqrt{16 + 9 - 0} = \\sqrt{25} = 5$ ✓. Check with a point that must lie on the circle: $(9, -3)$ is $5$ to the right of the center, and substituting gives $81 + 9 - 72 - 18 = 0$, so it satisfies the equation. The missing constant term is a signal in itself — with $F = 0$ the origin satisfies the equation, and sure enough $(0, 0)$ is $\\sqrt{16 + 9} = 5$ from the center.',
    },
    {
      q: 'A circular pond is described on a site plan by $x^2 + y^2 + 2x + 12y + 21 = 0$. Find its center and radius.',
      answer: 'Center $(-1, -6)$, radius $4$',
      solution:
        'Complete both squares. Half of $2$ is $1$ and half of $12$ is $6$, so add $1$ and $36$ to both sides: $(x^2 + 2x + 1) + (y^2 + 12y + 36) = -21 + 1 + 36$, which is $(x + 1)^2 + (y + 6)^2 = 16$. Flipping the signs inside the parentheses gives the center $(-1, -6)$, and the radius is $\\sqrt{16} = 4$ ✓. Second route, straight from the coefficients: for $x^2 + y^2 + Dx + Ey + F = 0$ the center is $\\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$ and the radius is $\\sqrt{\\left(\\frac{D}{2}\\right)^2 + \\left(\\frac{E}{2}\\right)^2 - F}$. With $D = 2$, $E = 12$, $F = 21$ that is the center $(-1, -6)$ and the radius $\\sqrt{1 + 36 - 21} = \\sqrt{16} = 4$ ✓. Check with a point that must lie on the pond’s edge: $(3, -6)$ is $4$ to the right of the center, and substituting gives $9 + 36 + 6 - 72 + 21 = 0$. The pond never reaches the origin: the center is $\\sqrt{1 + 36} = \\sqrt{37} \\approx 6.1$ away and the radius is only $4$.',
    },
    {
      q: 'Find the center and radius of the circle $x^2 + y^2 - 14x - 4y + 17 = 0$.',
      answer: 'Center $(7, 2)$, radius $6$',
      solution:
        'Complete both squares. Half of $-14$ is $-7$ and half of $-4$ is $-2$, so add $49$ and $4$ to both sides: $(x^2 - 14x + 49) + (y^2 - 4y + 4) = -17 + 49 + 4$, which is $(x - 7)^2 + (y - 2)^2 = 36$. The center is $(7, 2)$ and the radius is $\\sqrt{36} = 6$ ✓. Second route, straight from the coefficients: for $x^2 + y^2 + Dx + Ey + F = 0$ the center is $\\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$ and the radius is $\\sqrt{\\left(\\frac{D}{2}\\right)^2 + \\left(\\frac{E}{2}\\right)^2 - F}$. With $D = -14$, $E = -4$, $F = 17$ that is the center $(7, 2)$ and the radius $\\sqrt{49 + 4 - 17} = \\sqrt{36} = 6$ ✓. Check with a point that must lie on the circle: $(7, 8)$ is $6$ straight above the center, and substituting gives $49 + 64 - 98 - 32 + 17 = 0$. The constant $17$ is positive and smaller than $49 + 4$, which is what leaves a positive number under the square root and guarantees a genuine circle rather than a single point or nothing at all.',
    },
  ],

  // slot 3 — equation of a perpendicular bisector from two endpoints.
  //          Lanes: (-1, 2) and (7, 8) -> y = -4/3 x + 9;
  //          (-1, 8) and (9, 4) -> y = 5/2 x - 4;
  //          (3, -1) and (7, 9) -> y = -2/5 x + 6.
  [
    {
      q: 'Find the equation of the perpendicular bisector of the segment with endpoints $(-1, 2)$ and $(7, 8)$.',
      answer: '$y = -\\frac{4}{3}x + 9$',
      solution:
        'Midpoint and negative reciprocal. The midpoint is $\\left(\\frac{-1 + 7}{2}, \\frac{2 + 8}{2}\\right) = (3, 5)$, and the segment’s slope is $\\frac{8 - 2}{7 - (-1)} = \\frac{6}{8} = \\frac{3}{4}$, so the bisector has slope $-\\frac{4}{3}$. Point-slope gives $y - 5 = -\\frac{4}{3}(x - 3)$, and distributing turns that into $y = -\\frac{4}{3}x + 4 + 5 = -\\frac{4}{3}x + 9$ ✓. Second route, from the definition of the bisector as the set of points equally far from both ends: a point $(x, y)$ qualifies exactly when $(x + 1)^2 + (y - 2)^2 = (x - 7)^2 + (y - 8)^2$. Expanding both sides gives $x^2 + 2x + 1 + y^2 - 4y + 4 = x^2 - 14x + 49 + y^2 - 16y + 64$; the squared terms cancel, leaving $2x - 4y + 5 = -14x - 16y + 113$, so $16x + 12y = 108$, or $4x + 3y = 27$. Solving for $y$ gives $y = -\\frac{4}{3}x + 9$ ✓. Check the answer by pricing both endpoints from a point of the line: $(0, 9)$ lies on it, and $\\sqrt{1 + 49} = \\sqrt{50}$ measures the trip to $(-1, 2)$ while $\\sqrt{49 + 1} = \\sqrt{50}$ measures the trip to $(7, 8)$ — equal, as required.',
    },
    {
      q: 'Two sensors are planted at $(-1, 8)$ and $(9, 4)$. A patrol path is laid down so that every point of it is the same distance from both sensors. Find the equation of that path.',
      answer: '$y = \\frac{5}{2}x - 4$',
      solution:
        'Midpoint and negative reciprocal. The midpoint of the two sensors is $\\left(\\frac{-1 + 9}{2}, \\frac{8 + 4}{2}\\right) = (4, 6)$, and the segment joining them has slope $\\frac{4 - 8}{9 - (-1)} = \\frac{-4}{10} = -\\frac{2}{5}$, so the path perpendicular to it has slope $\\frac{5}{2}$. Point-slope gives $y - 6 = \\frac{5}{2}(x - 4)$, which becomes $y = \\frac{5}{2}x - 10 + 6 = \\frac{5}{2}x - 4$ ✓. Second route, from the equal-distance condition itself: a point $(x, y)$ is equally far from both sensors exactly when $(x + 1)^2 + (y - 8)^2 = (x - 9)^2 + (y - 4)^2$. Expanding gives $x^2 + 2x + 1 + y^2 - 16y + 64 = x^2 - 18x + 81 + y^2 - 8y + 16$; the squared terms cancel and leave $2x - 16y + 65 = -18x - 8y + 97$, so $20x - 8y = 32$, or $5x - 2y = 8$, and solving for $y$ gives $y = \\frac{5}{2}x - 4$ ✓. Check by pricing both sensors from a point of the path: $(0, -4)$ lies on it, and the trips measure $\\sqrt{1 + 144} = \\sqrt{145}$ and $\\sqrt{81 + 64} = \\sqrt{145}$ — equal, so the patrol really is impartial.',
    },
    {
      q: 'Find the equation of the perpendicular bisector of the segment with endpoints $(3, -1)$ and $(7, 9)$.',
      answer: '$y = -\\frac{2}{5}x + 6$',
      solution:
        'Midpoint and negative reciprocal. The midpoint is $\\left(\\frac{3 + 7}{2}, \\frac{-1 + 9}{2}\\right) = (5, 4)$, and the segment’s slope is $\\frac{9 - (-1)}{7 - 3} = \\frac{10}{4} = \\frac{5}{2}$, so the bisector has slope $-\\frac{2}{5}$. Point-slope gives $y - 4 = -\\frac{2}{5}(x - 5)$, which becomes $y = -\\frac{2}{5}x + 2 + 4 = -\\frac{2}{5}x + 6$ ✓. Second route, from the definition of the bisector as the set of points equally far from both ends: $(x, y)$ qualifies exactly when $(x - 3)^2 + (y + 1)^2 = (x - 7)^2 + (y - 9)^2$. Expanding gives $x^2 - 6x + 9 + y^2 + 2y + 1 = x^2 - 14x + 49 + y^2 - 18y + 81$; the squared terms cancel and leave $-6x + 2y + 10 = -14x - 18y + 130$, so $8x + 20y = 120$, or $2x + 5y = 30$, and solving for $y$ gives $y = -\\frac{2}{5}x + 6$ ✓. Check by pricing both endpoints from a point of the line: $(0, 6)$ lies on it, and the trips measure $\\sqrt{9 + 49} = \\sqrt{58}$ and $\\sqrt{49 + 9} = \\sqrt{58}$ — equal, as the bisector requires.',
    },
  ],

  // slot 4 — area of a triangle from three vertices.
  //          Lanes: (1, 1), (7, 2), (3, 8) -> 20;
  //          (2, 1), (9, 2), (4, 8) -> 47/2;
  //          (1, 2), (9, 3), (5, 9) -> 26.
  [
    {
      q: 'Find the area of the triangle with vertices $(1, 1)$, $(7, 2)$, and $(3, 8)$.',
      fig: {
        view: [0, 0, 8, 9],
        grid: true,
        elems: [
          { t: 'poly', pts: [[1, 1], [7, 2], [3, 8]], fill: false },
          { t: 'point', p: [1, 1], dx: -10, dy: 10 },
          { t: 'point', p: [7, 2], dx: 12, dy: 6 },
          { t: 'point', p: [3, 8], dx: 0, dy: -12 },
        ],
      },
      answer: 'Area $= 20$',
      solution:
        'Shoelace, taking the vertices in the order given: $\\frac{1}{2}\\left|1(2 - 8) + 7(8 - 1) + 3(1 - 2)\\right| = \\frac{1}{2}\\left|-6 + 49 - 3\\right| = \\frac{1}{2}(40) = 20$ ✓. Second route, by carving the triangle out of its bounding box: the box runs from $(1, 1)$ to $(7, 8)$, so it measures $6$ by $7$ and has area $42$. Three right triangles fill the leftover space. Between $(1, 1)$ and $(7, 2)$ the corner at $(7, 1)$ makes legs of $6$ and $1$, area $3$; between $(7, 2)$ and $(3, 8)$ the corner at $(7, 8)$ makes legs of $4$ and $6$, area $12$; between $(3, 8)$ and $(1, 1)$ the corner at $(1, 8)$ makes legs of $2$ and $7$, area $7$. Subtracting, $42 - 3 - 12 - 7 = 20$ ✓. Check by sliding a vertex to the origin, which never changes an area: subtracting $(1, 1)$ from every vertex leaves $(0, 0)$, $(6, 1)$, $(2, 7)$, and a triangle with one vertex at the origin has area $\\frac{1}{2}\\left|6 \\cdot 7 - 1 \\cdot 2\\right| = \\frac{1}{2}(40) = 20$.',
    },
    {
      q: 'A triangular garden bed has corners at $(2, 1)$, $(9, 2)$, and $(4, 8)$ on a plot map. Find its area.',
      fig: {
        view: [1, 0, 10, 9],
        grid: true,
        elems: [
          { t: 'poly', pts: [[2, 1], [9, 2], [4, 8]], fill: false },
          { t: 'point', p: [2, 1], dx: -10, dy: 10 },
          { t: 'point', p: [9, 2], dx: 12, dy: 6 },
          { t: 'point', p: [4, 8], dx: 0, dy: -12 },
        ],
      },
      answer: 'Area $= \\frac{47}{2}$',
      solution:
        'Shoelace, taking the corners in the order given: $\\frac{1}{2}\\left|2(2 - 8) + 9(8 - 1) + 4(1 - 2)\\right| = \\frac{1}{2}\\left|-12 + 63 - 4\\right| = \\frac{47}{2}$ ✓. Second route, by carving the bed out of its bounding box: the box runs from $(2, 1)$ to $(9, 8)$, so it is $7$ by $7$ with area $49$. Between $(2, 1)$ and $(9, 2)$ the corner at $(9, 1)$ makes legs of $7$ and $1$, area $\\frac{7}{2}$; between $(9, 2)$ and $(4, 8)$ the corner at $(9, 8)$ makes legs of $5$ and $6$, area $15$; between $(4, 8)$ and $(2, 1)$ the corner at $(2, 8)$ makes legs of $2$ and $7$, area $7$. Subtracting, $49 - \\frac{7}{2} - 15 - 7 = \\frac{47}{2}$ ✓. Check by sliding a corner to the origin, which never changes an area: subtracting $(2, 1)$ leaves $(0, 0)$, $(7, 1)$, $(2, 7)$, whose area is $\\frac{1}{2}\\left|7 \\cdot 7 - 1 \\cdot 2\\right| = \\frac{47}{2}$. A half-unit answer is perfectly normal here — only the doubled area has to be a whole number when the vertices are lattice points.',
    },
    {
      q: 'Find the area of the triangle with vertices $(1, 2)$, $(9, 3)$, and $(5, 9)$.',
      fig: {
        view: [0, 1, 10, 10],
        grid: true,
        elems: [
          { t: 'poly', pts: [[1, 2], [9, 3], [5, 9]], fill: false },
          { t: 'point', p: [1, 2], dx: -10, dy: 10 },
          { t: 'point', p: [9, 3], dx: 12, dy: 6 },
          { t: 'point', p: [5, 9], dx: 0, dy: -12 },
        ],
      },
      answer: 'Area $= 26$',
      solution:
        'Shoelace, taking the vertices in the order given: $\\frac{1}{2}\\left|1(3 - 9) + 9(9 - 2) + 5(2 - 3)\\right| = \\frac{1}{2}\\left|-6 + 63 - 5\\right| = \\frac{1}{2}(52) = 26$ ✓. Second route, by carving the triangle out of its bounding box: the box runs from $(1, 2)$ to $(9, 9)$, so it is $8$ by $7$ with area $56$. Between $(1, 2)$ and $(9, 3)$ the corner at $(9, 2)$ makes legs of $8$ and $1$, area $4$; between $(9, 3)$ and $(5, 9)$ the corner at $(9, 9)$ makes legs of $4$ and $6$, area $12$; between $(5, 9)$ and $(1, 2)$ the corner at $(1, 9)$ makes legs of $4$ and $7$, area $14$. Subtracting, $56 - 4 - 12 - 14 = 26$ ✓. Check by sliding a vertex to the origin, which never changes an area: subtracting $(1, 2)$ leaves $(0, 0)$, $(8, 1)$, $(4, 7)$, whose area is $\\frac{1}{2}\\left|8 \\cdot 7 - 1 \\cdot 4\\right| = \\frac{1}{2}(52) = 26$.',
    },
  ],

  // slot 5 — classify a triangle as precisely as possible, naming the right
  //          angle when there is one.
  //          Lanes: (0, 0), (8, 4), (-2, 4) -> scalene right at (0, 0);
  //          (2, 1), (10, 1), (6, 8) -> isosceles, not right;
  //          (4, 4), (8, 7), (1, 8) -> isosceles right at (4, 4).
  [
    {
      q: 'Classify the triangle with vertices $(0, 0)$, $(8, 4)$, and $(-2, 4)$ as precisely as you can, and say where the right angle is if there is one.',
      fig: {
        view: [-4, -2, 10, 6],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 4], [-2, 4]], fill: false },
          { t: 'point', p: [0, 0], dx: 4, dy: 14 },
          { t: 'point', p: [8, 4], dx: 12, dy: -6 },
          { t: 'point', p: [-2, 4], dx: -12, dy: -6 },
        ],
      },
      answer: 'A scalene right triangle, with the right angle at $(0, 0)$',
      solution:
        'Squared side lengths settle both questions at once. From $(0, 0)$ to $(8, 4)$: $64 + 16 = 80$. From $(0, 0)$ to $(-2, 4)$: $4 + 16 = 20$. From $(8, 4)$ to $(-2, 4)$: $100 + 0 = 100$. All three are different, so no two sides match and the triangle is scalene, and $80 + 20 = 100$ is exactly the Pythagorean relation, so the angle facing the longest side is right — that angle sits at $(0, 0)$ ✓. Second route, by slopes: the side from $(0, 0)$ to $(8, 4)$ has slope $\\frac{1}{2}$ and the side from $(0, 0)$ to $(-2, 4)$ has slope $-2$, and $\\frac{1}{2} \\cdot (-2) = -1$, so those two sides meet at a right angle at $(0, 0)$. No other vertex can hold it, because the third side is horizontal with slope $0$ and a slope of $0$ never multiplies with anything to give $-1$. The lengths $\\sqrt{80} = 4\\sqrt{5}$, $\\sqrt{20} = 2\\sqrt{5}$, and $10$ are three different numbers, confirming scalene ✓. Check by computing the area two ways: with the legs as base and height it is $\\frac{1}{2} \\cdot 2\\sqrt{5} \\cdot 4\\sqrt{5} = \\frac{1}{2} \\cdot 8 \\cdot 5 = 20$, and the shoelace sum gives $\\frac{1}{2}\\left|0(4 - 4) + 8(4 - 0) + (-2)(0 - 4)\\right| = \\frac{1}{2}(40) = 20$ — the same number, which only happens when the two named sides really are the legs.',
    },
    {
      q: 'A sail is cut as a triangle with corners at $(2, 1)$, $(10, 1)$, and $(6, 8)$. Classify the triangle as precisely as you can, and say where the right angle is if there is one.',
      fig: {
        view: [1, 0, 11, 9],
        grid: true,
        elems: [
          { t: 'poly', pts: [[2, 1], [10, 1], [6, 8]], fill: false },
          { t: 'point', p: [2, 1], dx: -10, dy: 10 },
          { t: 'point', p: [10, 1], dx: 12, dy: 10 },
          { t: 'point', p: [6, 8], dx: 0, dy: -12 },
        ],
      },
      answer: 'An acute isosceles triangle; there is no right angle',
      solution:
        'Squared side lengths settle both questions at once. From $(2, 1)$ to $(10, 1)$: $64 + 0 = 64$. From $(2, 1)$ to $(6, 8)$: $16 + 49 = 65$. From $(10, 1)$ to $(6, 8)$: $16 + 49 = 65$. Two sides match and the third does not, so the sail is isosceles but not equilateral. For a right angle we would need one squared length to equal the sum of the other two, but $64 + 65 = 129 \\neq 65$ and $65 + 65 = 130 \\neq 64$, so there is none ✓. Second route, by position and slopes: the midpoint of the horizontal side is $(6, 1)$, and the top corner $(6, 8)$ sits straight above it, so the vertical line $x = 6$ is the perpendicular bisector of that side and the top corner is equally far from both of its ends — isosceles. The two slanted sides have slopes $\\frac{8 - 1}{6 - 2} = \\frac{7}{4}$ and $\\frac{8 - 1}{6 - 10} = -\\frac{7}{4}$, whose product is $-\\frac{49}{16}$, not $-1$; the third side is horizontal and neither slanted side is vertical, so no pair of sides is perpendicular ✓. Check by testing each angle for size: comparing the square of the side facing an angle with the sum of the other two squares gives $65 < 129$, $65 < 129$, and $64 < 130$, so every angle is acute and the triangle is not right. The two equal sides measure $\\sqrt{65} \\approx 8.06$ against a base of $8$ — very close, but not equal, so it is not equilateral either.',
    },
    {
      q: 'Classify the triangle with vertices $(4, 4)$, $(8, 7)$, and $(1, 8)$ as precisely as you can, and say where the right angle is if there is one.',
      fig: {
        view: [0, 2, 10, 10],
        grid: true,
        elems: [
          { t: 'poly', pts: [[4, 4], [8, 7], [1, 8]], fill: false },
          { t: 'point', p: [4, 4], dx: 0, dy: 14 },
          { t: 'point', p: [8, 7], dx: 12, dy: 6 },
          { t: 'point', p: [1, 8], dx: -12, dy: 0 },
        ],
      },
      answer: 'An isosceles right triangle, with the right angle at $(4, 4)$',
      solution:
        'Squared side lengths settle both questions at once. From $(4, 4)$ to $(8, 7)$: $16 + 9 = 25$. From $(4, 4)$ to $(1, 8)$: $9 + 16 = 25$. From $(8, 7)$ to $(1, 8)$: $49 + 1 = 50$. Two sides are equal, so the triangle is isosceles, and $25 + 25 = 50$ is the Pythagorean relation, so the angle between those two equal sides is right — and they meet at $(4, 4)$ ✓. Second route, by slopes: the side from $(4, 4)$ to $(8, 7)$ has slope $\\frac{3}{4}$ and the side from $(4, 4)$ to $(1, 8)$ has slope $\\frac{8 - 4}{1 - 4} = -\\frac{4}{3}$, and $\\frac{3}{4} \\cdot \\left(-\\frac{4}{3}\\right) = -1$, so those sides are perpendicular at $(4, 4)$. Both of them run $3$ one way and $4$ the other, so both measure $5$ — equal legs ✓. Check with the signature of an isosceles right triangle: its hypotenuse should be a leg times $\\sqrt{2}$, and $\\sqrt{50} = 5\\sqrt{2}$ is exactly the leg $5$ times $\\sqrt{2}$. The area agrees too: $\\frac{1}{2} \\cdot 5 \\cdot 5 = \\frac{25}{2}$, and the shoelace sum gives $\\frac{1}{2}\\left|4(7 - 8) + 8(8 - 4) + 1(4 - 7)\\right| = \\frac{1}{2}(25) = \\frac{25}{2}$.',
    },
  ],

  // slot 6 — distance from the origin to the line through two intercepts.
  //          Lanes: (12, 0) and (0, 5) -> 60/13;
  //          (20, 0) and (0, 15) -> 12;
  //          (6, 0) and (0, 8) -> 24/5.
  [
    {
      q: 'A straight cable is stretched from the point $(12, 0)$ to the point $(0, 5)$. How close does the cable come to the origin?',
      answer: '$\\frac{60}{13}$',
      solution:
        'Area method. The cable and the two axis pieces enclose a right triangle whose legs are $12$ and $5$, so its area is $\\frac{1}{2} \\cdot 12 \\cdot 5 = 30$, and its hypotenuse — the cable itself — measures $\\sqrt{144 + 25} = \\sqrt{169} = 13$. Reading the same area with the cable as the base, the height drawn to it is the distance we want: $\\frac{2 \\cdot 30}{13} = \\frac{60}{13}$ ✓. Second route, by the point-line distance formula. A line with $x$-intercept $12$ and $y$-intercept $5$ is $\\frac{x}{12} + \\frac{y}{5} = 1$; clearing denominators gives $5x + 12y = 60$, or $5x + 12y - 60 = 0$. The distance from $(0, 0)$ is $\\frac{\\left|5(0) + 12(0) - 60\\right|}{\\sqrt{5^2 + 12^2}} = \\frac{60}{13}$ ✓. Check with the identity that leg times leg equals hypotenuse times height in any right triangle: $5 \\cdot 12 = 60$ and $13 \\cdot \\frac{60}{13} = 60$ — the same product. The answer is about $4.6$, comfortably shorter than either of the two trips to the ends of the cable, which is what a perpendicular has to be.',
    },
    {
      q: 'Find the distance from the origin to the line through $(20, 0)$ and $(0, 15)$.',
      answer: '$12$',
      solution:
        'Area method. The line and the two axis pieces enclose a right triangle whose legs are $20$ and $15$, so its area is $\\frac{1}{2} \\cdot 20 \\cdot 15 = 150$, and its hypotenuse measures $\\sqrt{400 + 225} = \\sqrt{625} = 25$. Reading the same area with the hypotenuse as base, the height drawn to it is $\\frac{2 \\cdot 150}{25} = 12$ ✓. Second route, by the point-line distance formula. A line with $x$-intercept $20$ and $y$-intercept $15$ is $\\frac{x}{20} + \\frac{y}{15} = 1$; multiplying through by $60$ gives $3x + 4y = 60$, or $3x + 4y - 60 = 0$. The distance from $(0, 0)$ is $\\frac{\\left|-60\\right|}{\\sqrt{9 + 16}} = \\frac{60}{5} = 12$ ✓. Check with the identity that leg times leg equals hypotenuse times height: $20 \\cdot 15 = 300$ and $25 \\cdot 12 = 300$ — the same product. Notice the triangle is a $15$-$20$-$25$, which is $3$-$4$-$5$ scaled by $5$, and the distance $12$ is shorter than both intercept distances as it must be.',
    },
    {
      q: 'A ramp is laid along the line joining $(6, 0)$ to $(0, 8)$. Find the shortest distance from the origin to that line.',
      answer: '$\\frac{24}{5}$',
      solution:
        'Area method. The ramp and the two axis pieces enclose a right triangle whose legs are $6$ and $8$, so its area is $\\frac{1}{2} \\cdot 6 \\cdot 8 = 24$, and its hypotenuse measures $\\sqrt{36 + 64} = \\sqrt{100} = 10$. Reading the same area with the ramp as base, the height drawn to it is $\\frac{2 \\cdot 24}{10} = \\frac{24}{5}$ ✓. Second route, by the point-line distance formula. A line with $x$-intercept $6$ and $y$-intercept $8$ is $\\frac{x}{6} + \\frac{y}{8} = 1$; multiplying through by $24$ gives $4x + 3y = 24$, or $4x + 3y - 24 = 0$. The distance from $(0, 0)$ is $\\frac{\\left|-24\\right|}{\\sqrt{16 + 9}} = \\frac{24}{5}$ ✓. Check with the identity that leg times leg equals hypotenuse times height: $6 \\cdot 8 = 48$ and $10 \\cdot \\frac{24}{5} = 48$ — the same product. The value $\\frac{24}{5} = 4.8$ sits between $0$ and $6$, shorter than the trip to either end of the ramp.',
    },
  ],

  // slot 7 — every intersection point of a slanted line with a circle centered
  //          at the origin.
  //          Lanes: y = x - 1 against x^2 + y^2 = 25 -> (4, 3) and (-3, -4);
  //          y = x + 2 against x^2 + y^2 = 10 -> (1, 3) and (-3, -1);
  //          y = x - 6 against x^2 + y^2 = 20 -> (2, -4) and (4, -2).
  [
    {
      q: 'Find all points where the line $y = x - 1$ intersects the circle $x^2 + y^2 = 25$.',
      fig: {
        view: [-6, -6, 6, 6],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'line', a: [-4, -5], b: [5, 4] },
        ],
      },
      answer: '$(4, 3)$ and $(-3, -4)$',
      solution:
        'Substitute the line into the circle. Replacing $y$ by $x - 1$ gives $x^2 + (x - 1)^2 = 25$, which expands to $2x^2 - 2x + 1 = 25$, so $2x^2 - 2x - 24 = 0$ and, halving, $x^2 - x - 12 = 0$. That factors as $(x - 4)(x + 3) = 0$, so $x = 4$ with $y = 4 - 1 = 3$, or $x = -3$ with $y = -3 - 1 = -4$. The points are $(4, 3)$ and $(-3, -4)$ ✓. Second route, through the chord’s midpoint. The perpendicular dropped from the center to a chord bisects it, and the center here is the origin, so the chord’s midpoint lies on the line through the origin perpendicular to $y = x - 1$, namely $y = -x$. Setting $-x = x - 1$ gives $x = \\frac{1}{2}$ and $y = -\\frac{1}{2}$, so the midpoint is $\\left(\\frac{1}{2}, -\\frac{1}{2}\\right)$. The distance from the origin to $x - y - 1 = 0$ is $\\frac{1}{\\sqrt{2}}$, so half the chord measures $\\sqrt{25 - \\frac{1}{2}} = \\sqrt{\\frac{49}{2}} = \\frac{7}{\\sqrt{2}}$. Travelling that far from the midpoint in the direction $\\left(\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}\\right)$ shifts both coordinates by $\\frac{7}{2}$, landing on $\\left(\\frac{1}{2} + \\frac{7}{2}, -\\frac{1}{2} + \\frac{7}{2}\\right) = (4, 3)$ and, going the other way, $(-3, -4)$ ✓. Check both points against both conditions: $16 + 9 = 25$ and $9 + 16 = 25$ put them on the circle, while $3 = 4 - 1$ and $-4 = -3 - 1$ put them on the line.',
    },
    {
      q: 'A circular window is described by $x^2 + y^2 = 10$, and a straight brace runs along the line $y = x + 2$. Find every point where the brace meets the window.',
      fig: {
        view: [-5, -5, 5, 5],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: Math.sqrt(10) },
          { t: 'line', a: [-4, -2], b: [3, 5] },
        ],
      },
      answer: '$(1, 3)$ and $(-3, -1)$',
      solution:
        'Substitute the line into the circle. Replacing $y$ by $x + 2$ gives $x^2 + (x + 2)^2 = 10$, which expands to $2x^2 + 4x + 4 = 10$, so $2x^2 + 4x - 6 = 0$ and, halving, $x^2 + 2x - 3 = 0$. That factors as $(x + 3)(x - 1) = 0$, so $x = 1$ with $y = 1 + 2 = 3$, or $x = -3$ with $y = -3 + 2 = -1$. The brace meets the window at $(1, 3)$ and $(-3, -1)$ ✓. Second route, through the chord’s midpoint. The perpendicular from the center bisects the chord, and the center is the origin, so the midpoint lies on $y = -x$. Setting $-x = x + 2$ gives $x = -1$ and $y = 1$, so the midpoint is $(-1, 1)$. The distance from the origin to $x - y + 2 = 0$ is $\\frac{2}{\\sqrt{2}} = \\sqrt{2}$, so half the chord measures $\\sqrt{10 - 2} = 2\\sqrt{2}$. Travelling that far from the midpoint in the direction $\\left(\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}\\right)$ shifts both coordinates by $2$, landing on $(1, 3)$ and, going the other way, $(-3, -1)$ ✓. Check both points against both conditions: $1 + 9 = 10$ and $9 + 1 = 10$ put them on the window, while $3 = 1 + 2$ and $-1 = -3 + 2$ put them on the brace.',
    },
    {
      q: 'Find all points where the line $y = x - 6$ meets the circle $x^2 + y^2 = 20$.',
      fig: {
        view: [-6, -7, 7, 6],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: Math.sqrt(20) },
          { t: 'line', a: [0, -6], b: [6, 0] },
        ],
      },
      answer: '$(2, -4)$ and $(4, -2)$',
      solution:
        'Substitute the line into the circle. Replacing $y$ by $x - 6$ gives $x^2 + (x - 6)^2 = 20$, which expands to $2x^2 - 12x + 36 = 20$, so $2x^2 - 12x + 16 = 0$ and, halving, $x^2 - 6x + 8 = 0$. That factors as $(x - 2)(x - 4) = 0$, so $x = 2$ with $y = 2 - 6 = -4$, or $x = 4$ with $y = 4 - 6 = -2$. The points are $(2, -4)$ and $(4, -2)$ ✓. Second route, through the chord’s midpoint. The perpendicular from the center bisects the chord, and the center is the origin, so the midpoint lies on $y = -x$. Setting $-x = x - 6$ gives $x = 3$ and $y = -3$, so the midpoint is $(3, -3)$. The distance from the origin to $x - y - 6 = 0$ is $\\frac{6}{\\sqrt{2}} = 3\\sqrt{2}$, and $\\left(3\\sqrt{2}\\right)^2 = 18$, so half the chord measures $\\sqrt{20 - 18} = \\sqrt{2}$. Travelling that far from the midpoint in the direction $\\left(\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}\\right)$ shifts both coordinates by $1$, landing on $(4, -2)$ and, going the other way, $(2, -4)$ ✓. Check both points against both conditions: $4 + 16 = 20$ and $16 + 4 = 20$ put them on the circle, while $-4 = 2 - 6$ and $-2 = 4 - 6$ put them on the line. The chord is short here because the line passes close to the rim.',
    },
  ],

  // slot 8 — values of k making y = mx + k tangent to a circle at the origin,
  //          using k^2 = r^2(1 + m^2).
  //          Lanes: m = 2, r^2 = 20 -> k = ±10;
  //          m = 3, r^2 = 5 -> k = ±5*sqrt(2);
  //          m = 4, r^2 = 17 -> k = ±17.
  [
    {
      q: 'For which values of $k$ is the line $y = 2x + k$ tangent to the circle $x^2 + y^2 = 20$?',
      answer: '$k = 10$ or $k = -10$',
      solution:
        'Force the substitution to have one repeated root. Replacing $y$ by $2x + k$ gives $x^2 + (2x + k)^2 = 20$, which tidies to $5x^2 + 4kx + (k^2 - 20) = 0$. A line is tangent exactly when this meets the circle once, so the discriminant must vanish: $(4k)^2 - 4(5)(k^2 - 20) = 16k^2 - 20k^2 + 400 = 400 - 4k^2 = 0$, giving $k^2 = 100$ and $k = 10$ or $k = -10$ ✓. Second route, by distance. Tangency means the center sits exactly one radius away from the line. Writing the line as $2x - y + k = 0$, the distance from the origin is $\\frac{|k|}{\\sqrt{2^2 + (-1)^2}} = \\frac{|k|}{\\sqrt{5}}$, and the radius is $\\sqrt{20} = 2\\sqrt{5}$. Setting them equal gives $|k| = 2\\sqrt{5} \\cdot \\sqrt{5} = 10$, so $k = \\pm 10$ ✓. Check by solving the tangent case and watching the two roots collapse into one: with $k = 10$ the quadratic is $5x^2 + 40x + 80 = 0$, or $x^2 + 8x + 16 = 0$, which is $(x + 4)^2 = 0$ — a single $x = -4$, giving $y = 2(-4) + 10 = 2$ and $16 + 4 = 20$, a point right on the circle. The value $k = -10$ touches at the mirror point $(4, -2)$: one tangent line rides above the circle and one below.',
    },
    {
      q: 'A straight rod lies along the line $y = 3x + k$ and just grazes a circular disc described by $x^2 + y^2 = 5$. For which values of $k$ does this happen?',
      answer: '$k = 5\\sqrt{2}$ or $k = -5\\sqrt{2}$',
      solution:
        'Force the substitution to have one repeated root. Replacing $y$ by $3x + k$ gives $x^2 + (3x + k)^2 = 5$, which tidies to $10x^2 + 6kx + (k^2 - 5) = 0$. Grazing means the rod meets the disc’s rim just once, so the discriminant must vanish: $(6k)^2 - 4(10)(k^2 - 5) = 36k^2 - 40k^2 + 200 = 200 - 4k^2 = 0$, giving $k^2 = 50$ and $k = 5\\sqrt{2}$ or $k = -5\\sqrt{2}$ ✓. Second route, by distance. Grazing means the center is exactly one radius from the rod. Writing the line as $3x - y + k = 0$, the distance from the origin is $\\frac{|k|}{\\sqrt{3^2 + (-1)^2}} = \\frac{|k|}{\\sqrt{10}}$, and the radius is $\\sqrt{5}$. Setting them equal gives $|k| = \\sqrt{5} \\cdot \\sqrt{10} = \\sqrt{50} = 5\\sqrt{2}$ ✓. Check by solving the tangent case and watching the two roots collapse into one: with $k = 5\\sqrt{2}$ the quadratic is $10x^2 + 30\\sqrt{2}\\,x + 45 = 0$, or $2x^2 + 6\\sqrt{2}\\,x + 9 = 0$, whose discriminant is $72 - 72 = 0$. Its single root is $x = -\\frac{3\\sqrt{2}}{2}$, with $y = 3x + 5\\sqrt{2} = \\frac{\\sqrt{2}}{2}$, and $\\frac{18}{4} + \\frac{2}{4} = 5$ places that point exactly on the rim.',
    },
    {
      q: 'For which values of $k$ is the line $y = 4x + k$ tangent to the circle $x^2 + y^2 = 17$?',
      answer: '$k = 17$ or $k = -17$',
      solution:
        'Force the substitution to have one repeated root. Replacing $y$ by $4x + k$ gives $x^2 + (4x + k)^2 = 17$, which tidies to $17x^2 + 8kx + (k^2 - 17) = 0$. Tangency means one meeting point, so the discriminant must vanish: $(8k)^2 - 4(17)(k^2 - 17) = 64k^2 - 68k^2 + 1156 = 1156 - 4k^2 = 0$, giving $k^2 = 289$ and $k = 17$ or $k = -17$ ✓. Second route, by distance. Tangency means the center is exactly one radius from the line. Writing the line as $4x - y + k = 0$, the distance from the origin is $\\frac{|k|}{\\sqrt{4^2 + (-1)^2}} = \\frac{|k|}{\\sqrt{17}}$, and the radius is $\\sqrt{17}$. Setting them equal gives $|k| = \\sqrt{17} \\cdot \\sqrt{17} = 17$ ✓. Check by solving the tangent case and watching the two roots collapse into one: with $k = 17$ the quadratic is $17x^2 + 136x + 272 = 0$, or $x^2 + 8x + 16 = 0$, which is $(x + 4)^2 = 0$ — a single $x = -4$, giving $y = 4(-4) + 17 = 1$ and $16 + 1 = 17$, a point exactly on the circle. Here $1 + m^2 = 1 + 16 = 17$ matches the squared radius $17$, so $k^2 = 17 \\cdot 17 = 289$ and the answer comes out a whole number.',
    },
  ],

  // slot 9 — the four side midpoints of a quadrilateral form a parallelogram.
  //          Lanes: (0,0), (6,0), (10,8), (2,10);
  //          (0,0), (10,0), (12,6), (4,10);
  //          (-2,0), (6,0), (8,6), (0,8).
  [
    {
      q: 'A quadrilateral has vertices $(0, 0)$, $(6, 0)$, $(10, 8)$, and $(2, 10)$, in order. Find the midpoints of its four sides and verify that they form a parallelogram.',
      fig: {
        view: [-1, -1, 11, 11],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [10, 8], [2, 10]], fill: false },
          { t: 'point', p: [0, 0], dx: -10, dy: 12 },
          { t: 'point', p: [6, 0], dx: 10, dy: 12 },
          { t: 'point', p: [10, 8], dx: 12, dy: 0 },
          { t: 'point', p: [2, 10], dx: -6, dy: -10 },
        ],
      },
      answer: 'Midpoints $(3, 0)$, $(8, 4)$, $(6, 9)$, $(1, 5)$; opposite sides are the same shift, so it is a parallelogram',
      solution:
        'Average each pair of neighbouring vertices. The side from $(0, 0)$ to $(6, 0)$ has midpoint $(3, 0)$; from $(6, 0)$ to $(10, 8)$, midpoint $(8, 4)$; from $(10, 8)$ to $(2, 10)$, midpoint $(6, 9)$; from $(2, 10)$ back to $(0, 0)$, midpoint $(1, 5)$. Now compare opposite sides as shifts: going from $(3, 0)$ to $(8, 4)$ is a shift of $(5, 4)$, and going from $(1, 5)$ to $(6, 9)$ is the same shift $(5, 4)$. One pair of opposite sides parallel and equal already forces a parallelogram, and the other pair agrees too — both $(8, 4)$ to $(6, 9)$ and $(3, 0)$ to $(1, 5)$ are shifts of $(-2, 5)$ ✓. Second route, through the diagonals: a quadrilateral is a parallelogram exactly when its diagonals bisect each other. The diagonal from $(3, 0)$ to $(6, 9)$ has midpoint $\\left(\\frac{9}{2}, \\frac{9}{2}\\right)$, and the diagonal from $(8, 4)$ to $(1, 5)$ has midpoint $\\left(\\frac{9}{2}, \\frac{9}{2}\\right)$ as well — the same point, so each diagonal cuts the other in half ✓. Check the side lengths: $(3, 0)$ to $(8, 4)$ and $(1, 5)$ to $(6, 9)$ both measure $\\sqrt{25 + 16} = \\sqrt{41}$, while the other pair both measure $\\sqrt{4 + 25} = \\sqrt{29}$ — opposite sides equal, exactly as a parallelogram demands.',
    },
    {
      q: 'The corners of a garden plot are at $(0, 0)$, $(10, 0)$, $(12, 6)$, and $(4, 10)$, taken in order around the plot. Locate the midpoint of each of the four edges and show that those four midpoints are the vertices of a parallelogram.',
      fig: {
        view: [-1, -1, 13, 11],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [12, 6], [4, 10]], fill: false },
          { t: 'point', p: [0, 0], dx: -10, dy: 12 },
          { t: 'point', p: [10, 0], dx: 10, dy: 12 },
          { t: 'point', p: [12, 6], dx: 12, dy: 0 },
          { t: 'point', p: [4, 10], dx: -6, dy: -10 },
        ],
      },
      answer: 'Midpoints $(5, 0)$, $(11, 3)$, $(8, 8)$, $(2, 5)$; opposite sides are the same shift, so it is a parallelogram',
      solution:
        'Average each pair of neighbouring corners. The edge from $(0, 0)$ to $(10, 0)$ has midpoint $(5, 0)$; from $(10, 0)$ to $(12, 6)$, midpoint $(11, 3)$; from $(12, 6)$ to $(4, 10)$, midpoint $(8, 8)$; from $(4, 10)$ back to $(0, 0)$, midpoint $(2, 5)$. Now compare opposite sides as shifts: going from $(5, 0)$ to $(11, 3)$ is a shift of $(6, 3)$, and going from $(2, 5)$ to $(8, 8)$ is the same shift $(6, 3)$. One pair of opposite sides parallel and equal already forces a parallelogram, and the other pair agrees — both $(11, 3)$ to $(8, 8)$ and $(5, 0)$ to $(2, 5)$ are shifts of $(-3, 5)$ ✓. Second route, through the diagonals: a quadrilateral is a parallelogram exactly when its diagonals bisect each other. The diagonal from $(5, 0)$ to $(8, 8)$ has midpoint $\\left(\\frac{13}{2}, 4\\right)$, and the diagonal from $(11, 3)$ to $(2, 5)$ has midpoint $\\left(\\frac{13}{2}, 4\\right)$ too — one shared crossing point that halves both ✓. Check the side lengths: $(5, 0)$ to $(11, 3)$ and $(2, 5)$ to $(8, 8)$ both measure $\\sqrt{36 + 9} = 3\\sqrt{5}$, while the other pair both measure $\\sqrt{9 + 25} = \\sqrt{34}$ — opposite sides equal, as a parallelogram demands. The original plot is nothing special, yet the midpoints always behave.',
    },
    {
      q: 'A quadrilateral has vertices $(-2, 0)$, $(6, 0)$, $(8, 6)$, and $(0, 8)$, in order. Find the midpoints of its four sides and verify that they form a parallelogram.',
      fig: {
        view: [-3, -1, 9, 9],
        grid: true,
        elems: [
          { t: 'poly', pts: [[-2, 0], [6, 0], [8, 6], [0, 8]], fill: false },
          { t: 'point', p: [-2, 0], dx: -12, dy: 10 },
          { t: 'point', p: [6, 0], dx: 10, dy: 12 },
          { t: 'point', p: [8, 6], dx: 12, dy: 0 },
          { t: 'point', p: [0, 8], dx: -6, dy: -10 },
        ],
      },
      answer: 'Midpoints $(2, 0)$, $(7, 3)$, $(4, 7)$, $(-1, 4)$; opposite sides are the same shift, so it is a parallelogram',
      solution:
        'Average each pair of neighbouring vertices. The side from $(-2, 0)$ to $(6, 0)$ has midpoint $(2, 0)$; from $(6, 0)$ to $(8, 6)$, midpoint $(7, 3)$; from $(8, 6)$ to $(0, 8)$, midpoint $(4, 7)$; from $(0, 8)$ back to $(-2, 0)$, midpoint $(-1, 4)$. Now compare opposite sides as shifts: going from $(2, 0)$ to $(7, 3)$ is a shift of $(5, 3)$, and going from $(-1, 4)$ to $(4, 7)$ is the same shift $(5, 3)$. One pair of opposite sides parallel and equal already forces a parallelogram, and the other pair agrees — both $(7, 3)$ to $(4, 7)$ and $(2, 0)$ to $(-1, 4)$ are shifts of $(-3, 4)$ ✓. Second route, through the diagonals: a quadrilateral is a parallelogram exactly when its diagonals bisect each other. The diagonal from $(2, 0)$ to $(4, 7)$ has midpoint $\\left(3, \\frac{7}{2}\\right)$, and the diagonal from $(7, 3)$ to $(-1, 4)$ has midpoint $\\left(3, \\frac{7}{2}\\right)$ as well ✓. Check the side lengths: $(2, 0)$ to $(7, 3)$ and $(-1, 4)$ to $(4, 7)$ both measure $\\sqrt{25 + 9} = \\sqrt{34}$, while the other pair both measure $\\sqrt{9 + 16} = 5$ — opposite sides equal. A midpoint may land on a negative coordinate, as $(-1, 4)$ does here, without disturbing the pattern at all.',
    },
  ],

  // slot 10 — the point on the y-axis equidistant from two given points.
  //           Lanes: (2, 0) and (4, 6) -> (0, 4);
  //           (4, 0) and (6, 4) -> (0, 9/2);
  //           (6, 0) and (2, 4) -> (0, -2).
  [
    {
      q: 'Find the point on the $y$-axis that is the same distance from $(2, 0)$ as it is from $(4, 6)$.',
      fig: {
        view: [-2, -1, 6, 8],
        grid: true,
        elems: [
          { t: 'seg', a: [2, 0], b: [4, 6], dash: true },
          { t: 'point', p: [2, 0], dx: 10, dy: 12 },
          { t: 'point', p: [4, 6], dx: 12, dy: 0 },
        ],
      },
      answer: '$(0, 4)$',
      solution:
        'Call the point $(0, y)$ and set the squared distances equal, which avoids square roots entirely: $2^2 + y^2 = 4^2 + (y - 6)^2$. Expanding the right side gives $16 + y^2 - 12y + 36$, so $4 + y^2 = y^2 - 12y + 52$. The $y^2$ terms cancel, leaving $4 = 52 - 12y$, so $12y = 48$ and $y = 4$. The point is $(0, 4)$ ✓. Second route, by building the perpendicular bisector and crossing it with the axis: every point equidistant from the two given points lies on their perpendicular bisector. The midpoint is $\\left(\\frac{2 + 4}{2}, \\frac{0 + 6}{2}\\right) = (3, 3)$ and the segment’s slope is $\\frac{6 - 0}{4 - 2} = 3$, so the bisector has slope $-\\frac{1}{3}$ and equation $y - 3 = -\\frac{1}{3}(x - 3)$, that is $y = -\\frac{1}{3}x + 4$. Setting $x = 0$ to meet the $y$-axis gives $y = 4$ ✓. Check by measuring both distances from $(0, 4)$: to $(2, 0)$ it is $\\sqrt{4 + 16} = \\sqrt{20}$, and to $(4, 6)$ it is $\\sqrt{16 + 4} = \\sqrt{20}$ — equal, so the point really is impartial between them.',
    },
    {
      q: 'A relay tower must stand somewhere on the $y$-axis, equally far from ground stations at $(4, 0)$ and $(6, 4)$. Find the point where it belongs.',
      fig: {
        view: [-2, -1, 8, 6],
        grid: true,
        elems: [
          { t: 'seg', a: [4, 0], b: [6, 4], dash: true },
          { t: 'point', p: [4, 0], dx: 10, dy: 12 },
          { t: 'point', p: [6, 4], dx: 12, dy: 0 },
        ],
      },
      answer: '$\\left(0, \\frac{9}{2}\\right)$',
      solution:
        'Call the tower $(0, y)$ and set the squared distances equal, which avoids square roots entirely: $4^2 + y^2 = 6^2 + (y - 4)^2$. Expanding the right side gives $36 + y^2 - 8y + 16$, so $16 + y^2 = y^2 - 8y + 52$. The $y^2$ terms cancel, leaving $16 = 52 - 8y$, so $8y = 36$ and $y = \\frac{9}{2}$. The tower belongs at $\\left(0, \\frac{9}{2}\\right)$ ✓. Second route, by building the perpendicular bisector and crossing it with the axis: every point equally far from the two stations lies on their perpendicular bisector. The midpoint is $\\left(\\frac{4 + 6}{2}, \\frac{0 + 4}{2}\\right) = (5, 2)$ and the segment’s slope is $\\frac{4 - 0}{6 - 4} = 2$, so the bisector has slope $-\\frac{1}{2}$ and equation $y - 2 = -\\frac{1}{2}(x - 5)$, that is $y = -\\frac{1}{2}x + \\frac{9}{2}$. Setting $x = 0$ gives $y = \\frac{9}{2}$ ✓. Check by measuring both distances from $\\left(0, \\frac{9}{2}\\right)$: the squared distance to $(4, 0)$ is $16 + \\frac{81}{4} = \\frac{145}{4}$, and to $(6, 4)$ it is $36 + \\frac{1}{4} = \\frac{145}{4}$ — equal, both distances being $\\frac{\\sqrt{145}}{2}$. A half-integer answer is fine; the $y$-axis has no reason to meet the bisector at a lattice point.',
    },
    {
      q: 'Find the point on the $y$-axis that is equidistant from $(6, 0)$ and $(2, 4)$.',
      fig: {
        view: [-2, -4, 8, 6],
        grid: true,
        elems: [
          { t: 'seg', a: [6, 0], b: [2, 4], dash: true },
          { t: 'point', p: [6, 0], dx: 12, dy: 10 },
          { t: 'point', p: [2, 4], dx: -6, dy: -10 },
        ],
      },
      answer: '$(0, -2)$',
      solution:
        'Call the point $(0, y)$ and set the squared distances equal, which avoids square roots entirely: $6^2 + y^2 = 2^2 + (y - 4)^2$. Expanding the right side gives $4 + y^2 - 8y + 16$, so $36 + y^2 = y^2 - 8y + 20$. The $y^2$ terms cancel, leaving $36 = 20 - 8y$, so $8y = -16$ and $y = -2$. The point is $(0, -2)$ ✓. Second route, by building the perpendicular bisector and crossing it with the axis: every point equidistant from the two given points lies on their perpendicular bisector. The midpoint is $\\left(\\frac{6 + 2}{2}, \\frac{0 + 4}{2}\\right) = (4, 2)$ and the segment’s slope is $\\frac{4 - 0}{2 - 6} = -1$, so the bisector has slope $1$ and equation $y - 2 = x - 4$, that is $y = x - 2$. Setting $x = 0$ gives $y = -2$ ✓. Check by measuring both distances from $(0, -2)$: to $(6, 0)$ it is $\\sqrt{36 + 4} = \\sqrt{40}$, and to $(2, 4)$ it is $\\sqrt{4 + 36} = \\sqrt{40}$ — equal, both being $2\\sqrt{10}$. The answer sits below the origin even though neither given point lies below the $x$-axis, because the bisector slopes down as it travels left.',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 17,
  worksheet,
}
