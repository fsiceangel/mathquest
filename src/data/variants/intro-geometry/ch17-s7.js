// Introduction to Geometry chapter 17 — variations for the CHALLENGE set.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer was worked twice along routes that share no steps, and
//    the two routes had to agree before the key was written: the distance
//    formula on every side vs. a Pythagorean triple read off the grid (slot 1);
//    equal squared distances vs. the perpendicular bisector (slots 2 and 7);
//    completing the square vs. testing points in the general equation (slot 3);
//    the shoelace sum vs. a second decomposition of the same region — a
//    diagonal split, a bounding box with its corners removed, or the
//    parallelogram cross product (slot 4); the center-to-line distance vs.
//    substituting and reading the roots (slot 5); the center-to-line distance
//    vs. substituting $x = k$ and forcing a repeated root (slot 6); midpoints
//    in letters vs. a numerical spot-check (slot 8); the negative reciprocal
//    vs. a second point on the perpendicular (slot 9); the inscribed right
//    angle vs. solving for the center directly (slot 10); the radial line vs.
//    naming the nearest point on the circle outright (slot 11); two circle
//    equations vs. the perpendicular bisector of the two centers (slot 12).
//  - Every challenge item takes two linked steps: the first step produces a
//    quantity the second step consumes.
//  - Figures are coordinate grids drawn the way the chapter draws them, at
//    roughly the base set's density. Labels are plain text, never math, and no
//    figure carries the value the question asks for.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution and marked ✗.
//  - No two choices inside an item name the same value, and inside each slot
//    the three variations put the correct answer in three different positions.

const challenge = [
  // slot 1 — perimeter of a triangle: find each side with the distance formula,
  // then add. Second route reads a Pythagorean triple off the grid.
  // Lane: 8/5/5 -> 18 / 5/12/13 -> 30 / 18/15/15 -> 48.
  [
    {
      q: 'Triangle $ABC$ has vertices $A = (2, 1)$, $B = (10, 1)$, and $C = (6, 4)$. What is its perimeter?',
      fig: {
        view: [0, -1, 12, 6],
        grid: true,
        elems: [
          { t: 'poly', pts: [[2, 1], [10, 1], [6, 4]], fill: false },
          { t: 'point', p: [2, 1], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [10, 1], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 4], label: 'C', dx: 0, dy: -12 },
        ],
      },
      choices: ['$12$', '$18$', '$22$', '$10$'],
      answer: 1,
      solution:
        'Measure the three sides, then add them. Side $\\overline{AB}$ is horizontal, so its length is $10 - 2 = 8$. For the slanted sides, $AC = \\sqrt{(6 - 2)^2 + (4 - 1)^2} = \\sqrt{16 + 9} = 5$ and $BC = \\sqrt{(6 - 10)^2 + (4 - 1)^2} = \\sqrt{16 + 9} = 5$, so the perimeter is $8 + 5 + 5 = 18$ ✓. Check a second, independent way straight off the grid: $C$ sits above $(6, 1)$, the midpoint of $\\overline{AB}$, so the triangle splits into two right triangles with legs $4$ and $3$. Each of those is a $3$-$4$-$5$ triangle, so each slanted side is $5$ without any square root being computed, and the trip around the triangle is $8 + 5 + 5 = 18$ ✓. (The choice $12$ is FINDING THE AREA INSTEAD OF THE PERIMETER, $\\frac{1}{2} \\cdot 8 \\cdot 3 = 12$ ✗; the choice $22$ is WALKING THE GRID ALONG EACH SLANTED SIDE, counting $4$ across plus $3$ up as $7$ instead of $5$, for $8 + 7 + 7 = 22$ ✗; the choice $10$ is ADDING ONLY THE TWO SLANTED SIDES and forgetting the base ✗.)',
    },
    {
      q: 'Triangle $ABC$ has vertices $A = (2, 1)$, $B = (7, 1)$, and $C = (2, 13)$. What is its perimeter?',
      choices: ['$17$', '$34$', '$24$', '$30$'],
      answer: 3,
      solution:
        'Find each side, then total them. Side $\\overline{AB}$ is horizontal with length $7 - 2 = 5$, and side $\\overline{AC}$ is vertical with length $13 - 1 = 12$. The remaining side is $BC = \\sqrt{(2 - 7)^2 + (13 - 1)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$, so the perimeter is $5 + 12 + 13 = 30$ ✓. Check a second, independent way using the shape of the triangle: $\\overline{AB}$ runs across and $\\overline{AC}$ runs straight up from the same corner, so the angle at $A$ is right and the legs are $5$ and $12$. Those are two members of the $5$-$12$-$13$ triple, so the third side is $13$ and the perimeter is $30$ ✓. (The choice $17$ is ADDING ONLY THE TWO LEGS and never measuring the slanted side ✗; the choice $34$ is WALKING THE GRID ALONG THE SLANTED SIDE, counting $5$ across plus $12$ up as $17$, for $5 + 12 + 17 = 34$ ✗; the choice $24$ is SUBTRACTING THE LEGS to get the third side, $12 - 5 = 7$, instead of using the Pythagorean Theorem, for $5 + 12 + 7 = 24$ ✗.)',
    },
    {
      q: 'A garden bed is the triangle with corners $A = (-2, 1)$, $B = (16, 1)$, and $C = (7, 13)$. How much edging, in units, goes all the way around it?',
      fig: {
        view: [-4, -1, 18, 15],
        grid: true,
        elems: [
          { t: 'poly', pts: [[-2, 1], [16, 1], [7, 13]], fill: false },
          { t: 'point', p: [-2, 1], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [16, 1], label: 'B', dx: 12, dy: 12 },
          { t: 'point', p: [7, 13], label: 'C', dx: 0, dy: -12 },
        ],
      },
      choices: ['$30$', '$60$', '$48$', '$108$'],
      answer: 2,
      solution:
        'Measure the sides one at a time and add. Side $\\overline{AB}$ is horizontal, so it is $16 - (-2) = 18$ long. The slanted sides are $AC = \\sqrt{(7 - (-2))^2 + (13 - 1)^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$ and $BC = \\sqrt{(7 - 16)^2 + (13 - 1)^2} = \\sqrt{81 + 144} = 15$, giving $18 + 15 + 15 = 48$ units of edging ✓. Check a second, independent way with a triple: $C$ stands directly above $(7, 1)$, the midpoint of $\\overline{AB}$, so each half of the triangle is a right triangle with legs $9$ and $12$ — three times a $3$-$4$-$5$ triangle, so each slanted side is $3 \\cdot 5 = 15$. The total is again $18 + 15 + 15 = 48$ ✓. (The choice $30$ is ADDING ONLY THE TWO SLANTED SIDES and leaving out the base ✗; the choice $60$ is WALKING THE GRID ALONG EACH SLANTED SIDE, counting $9$ across plus $12$ up as $21$ instead of $15$, for $18 + 21 + 21 = 60$ ✗; the choice $108$ is FINDING THE AREA INSTEAD OF THE PERIMETER, $\\frac{1}{2} \\cdot 18 \\cdot 12 = 108$ ✗.)',
    },
  ],

  // slot 2 — a point on the x-axis equidistant from two given points: set the
  // squared distances equal and solve. Second route builds the perpendicular
  // bisector and reads off where it crosses the axis.
  // Lane: (1,2) & (7,4) -> (5,0) / (2,4) & (-5,3) -> (-1,0) /
  // (0,2) & (3,4) -> (7/2, 0).
  [
    {
      q: 'Which point on the $x$-axis is the same distance from $(1, 2)$ as it is from $(7, 4)$?',
      choices: ['$(4, 3)$', '$(3, 0)$', '$(5, 0)$', '$(4, 0)$'],
      answer: 2,
      solution:
        'Call the point $(x, 0)$ and set the squared distances equal: $(x - 1)^2 + 2^2 = (x - 7)^2 + 4^2$. Expanding gives $x^2 - 2x + 5 = x^2 - 14x + 65$, so $12x = 60$ and $x = 5$, putting the point at $(5, 0)$. Both squared distances come out to $16 + 4 = 20$ ✓. Check a second, independent way with the perpendicular bisector, which is exactly the set of points equidistant from the two: the midpoint is $(4, 3)$, the segment has slope $\\frac{4 - 2}{7 - 1} = \\frac{1}{3}$, so the bisector has slope $-3$ and equation $y - 3 = -3(x - 4)$, or $y = -3x + 15$. Setting $y = 0$ gives $x = 5$ ✓. (The choice $(4, 0)$ is AVERAGING THE TWO $x$-COORDINATES, $\\frac{1 + 7}{2} = 4$, a shortcut that only works when the two points sit at the same height ✗; the choice $(4, 3)$ is REPORTING THE MIDPOINT OF THE SEGMENT instead of the point on the axis ✗; the choice $(3, 0)$ is PAIRING EACH POINT WITH THE OTHER’S HEIGHT, solving $(x - 1)^2 + 16 = (x - 7)^2 + 4$ to get $12x = 36$ ✗.)',
    },
    {
      q: 'A ranger station is to be built on a straight road running along the $x$-axis, the same distance from a lookout at $(2, 4)$ as from a cabin at $(-5, 3)$. Where should it go?',
      choices: [
        '$(-1, 0)$',
        '$\\left(-\\frac{3}{2}, 0\\right)$',
        '$(-2, 0)$',
        '$\\left(-\\frac{3}{2}, \\frac{7}{2}\\right)$',
      ],
      answer: 0,
      solution:
        'Write the station as $(x, 0)$ and set the squared distances equal: $(x - 2)^2 + 4^2 = (x + 5)^2 + 3^2$. Expanding gives $x^2 - 4x + 20 = x^2 + 10x + 34$, so $-14x = 14$ and $x = -1$. The station sits at $(-1, 0)$, and both squared distances are $25$, a clean $5$ units each ✓. Check a second, independent way with the perpendicular bisector: the midpoint is $\\left(-\\frac{3}{2}, \\frac{7}{2}\\right)$ and the segment slope is $\\frac{3 - 4}{-5 - 2} = \\frac{1}{7}$, so the bisector has slope $-7$ and equation $y - \\frac{7}{2} = -7\\left(x + \\frac{3}{2}\\right)$. Putting $y = 0$ gives $-\\frac{7}{2} = -7x - \\frac{21}{2}$, so $7x = -7$ and $x = -1$ ✓. (The choice $\\left(-\\frac{3}{2}, 0\\right)$ is AVERAGING THE TWO $x$-COORDINATES, $\\frac{2 + (-5)}{2}$, which balances the sideways distances only and ignores the heights ✗; the choice $\\left(-\\frac{3}{2}, \\frac{7}{2}\\right)$ is REPORTING THE MIDPOINT OF THE SEGMENT, a point nowhere near the road ✗; the choice $(-2, 0)$ is PAIRING EACH POINT WITH THE OTHER’S HEIGHT, solving $(x - 2)^2 + 9 = (x + 5)^2 + 16$ to get $-14x = 28$ ✗.)',
    },
    {
      q: 'A sensor must be placed on the $x$-axis so that it is equally far from a beacon at $(0, 2)$ and a beacon at $(3, 4)$. What are its coordinates?',
      choices: [
        '$\\left(\\frac{3}{2}, 0\\right)$',
        '$\\left(\\frac{3}{2}, 3\\right)$',
        '$\\left(-\\frac{1}{2}, 0\\right)$',
        '$\\left(\\frac{7}{2}, 0\\right)$',
      ],
      answer: 3,
      solution:
        'Let the sensor be $(x, 0)$ and set the squared distances equal: $x^2 + 2^2 = (x - 3)^2 + 4^2$. Expanding gives $x^2 + 4 = x^2 - 6x + 25$, so $6x = 21$ and $x = \\frac{7}{2}$. Both squared distances are $\\frac{49}{4} + 4 = \\frac{65}{4}$ ✓. Check a second, independent way with the perpendicular bisector: the midpoint is $\\left(\\frac{3}{2}, 3\\right)$ and the segment slope is $\\frac{4 - 2}{3 - 0} = \\frac{2}{3}$, so the bisector has slope $-\\frac{3}{2}$ and equation $y - 3 = -\\frac{3}{2}\\left(x - \\frac{3}{2}\\right)$. Setting $y = 0$ gives $-3 = -\\frac{3}{2}x + \\frac{9}{4}$, so $\\frac{3}{2}x = \\frac{21}{4}$ and $x = \\frac{7}{2}$ ✓. (The choice $\\left(\\frac{3}{2}, 0\\right)$ is AVERAGING THE TWO $x$-COORDINATES, $\\frac{0 + 3}{2}$, which would be right only if the beacons were at the same height ✗; the choice $\\left(\\frac{3}{2}, 3\\right)$ is REPORTING THE MIDPOINT OF THE SEGMENT instead of the point on the axis ✗; the choice $\\left(-\\frac{1}{2}, 0\\right)$ is PAIRING EACH BEACON WITH THE OTHER’S HEIGHT, solving $x^2 + 16 = (x - 3)^2 + 4$ to get $6x = -3$ ✗.)',
    },
  ],

  // slot 3 — a circle in general form: complete both squares, then test the
  // candidate points. Second route skips the rewrite and feeds each point into
  // the original equation.
  // Lane: center (2,2) r 5 -> (-3,2) / center (3,-1) r 5 -> (6,-5) /
  // center (4,4) r 5 -> (0,7).
  [
    {
      q: 'Which of these points lies on the circle $x^2 + y^2 - 4x - 4y - 17 = 0$?',
      choices: ['$(3, 4)$', '$(1, 2)$', '$(6, 3)$', '$(-3, 2)$'],
      answer: 3,
      solution:
        'Complete both squares: $(x^2 - 4x + 4) + (y^2 - 4y + 4) = 17 + 4 + 4$, so $(x - 2)^2 + (y - 2)^2 = 25$ — a circle with center $(2, 2)$ and radius $5$. Now measure: $(-3, 2)$ sits $5$ units straight left of the center, since $(-3 - 2)^2 + (2 - 2)^2 = 25 + 0 = 25$, so it is on the circle ✓. Check a second, independent way without rewriting anything, by putting each point into the original equation: $(-3, 2)$ gives $9 + 4 + 12 - 8 - 17 = 0$, exactly what a point on the circle must give, while $(3, 4)$ gives $-20$, $(1, 2)$ gives $-24$, and $(6, 3)$ gives $-8$ ✓. (The choice $(3, 4)$ is MEASURING FROM THE ORIGIN INSTEAD OF FROM THE CENTER — it is $5$ units from $(0, 0)$ but only $\\sqrt{5}$ from $(2, 2)$ ✗; the choice $(1, 2)$ is READING THE CENTER STRAIGHT OFF THE SIGNS IN THE EQUATION as $(-2, -2)$, since $(1, 2)$ is $5$ units from that wrong center ✗; the choice $(6, 3)$ is FORGETTING TO ADD THE COMPLETING TERMS TO THE RIGHT SIDE, which leaves $r^2 = 17$ instead of $25$, and $(6, 3)$ is $\\sqrt{17}$ from the center ✗.)',
    },
    {
      q: 'A circular running track is described by $x^2 + y^2 - 6x + 2y - 15 = 0$. Which of these points is on the track?',
      choices: ['$(1, 4)$', '$(6, -5)$', '$(5, 0)$', '$(-4, 3)$'],
      answer: 1,
      solution:
        'Complete both squares: $(x^2 - 6x + 9) + (y^2 + 2y + 1) = 15 + 9 + 1$, so $(x - 3)^2 + (y + 1)^2 = 25$, a circle with center $(3, -1)$ and radius $5$. Test the candidate: $(6, -5)$ gives $(6 - 3)^2 + (-5 + 1)^2 = 9 + 16 = 25$, so it lies on the track — it is the $3$-$4$-$5$ triangle hanging off the center ✓. Check a second, independent way by feeding the points into the original equation: $(6, -5)$ gives $36 + 25 - 36 - 10 - 15 = 0$, while $(1, 4)$ gives $4$, $(5, 0)$ gives $-20$, and $(-4, 3)$ gives $40$ ✓. (The choice $(1, 4)$ is READING THE CENTER STRAIGHT OFF THE SIGNS IN THE EQUATION as $(-3, 1)$, from which $(1, 4)$ is indeed $5$ units away ✗; the choice $(5, 0)$ is SUBTRACTING THE COMPLETING TERMS FROM THE RIGHT SIDE INSTEAD OF ADDING THEM, which gives $r^2 = 15 - 10 = 5$, and $(5, 0)$ is $\\sqrt{5}$ from the center ✗; the choice $(-4, 3)$ is MEASURING FROM THE ORIGIN INSTEAD OF FROM THE CENTER, since $(-4, 3)$ is $5$ units from $(0, 0)$ ✗.)',
    },
    {
      q: 'A circular fountain rim satisfies $x^2 + y^2 - 8x - 8y + 7 = 0$. Which of these points sits on the rim?',
      choices: ['$(0, 7)$', '$(-1, 0)$', '$(8, 8)$', '$(3, 4)$'],
      answer: 0,
      solution:
        'Complete both squares: $(x^2 - 8x + 16) + (y^2 - 8y + 16) = -7 + 16 + 16$, so $(x - 4)^2 + (y - 4)^2 = 25$, a circle with center $(4, 4)$ and radius $5$. Test $(0, 7)$: $(0 - 4)^2 + (7 - 4)^2 = 16 + 9 = 25$, so it is on the rim ✓. Check a second, independent way by substituting into the original equation: $(0, 7)$ gives $0 + 49 - 0 - 56 + 7 = 0$, while $(-1, 0)$ gives $16$, $(8, 8)$ gives $7$, and $(3, 4)$ gives $-24$ ✓. (The choice $(-1, 0)$ is READING THE CENTER STRAIGHT OFF THE SIGNS IN THE EQUATION as $(-4, -4)$, from which $(-1, 0)$ is $5$ units away ✗; the choice $(8, 8)$ is LEAVING THE CONSTANT $7$ ON THE LEFT SIDE while completing the squares, which gives $r^2 = 32$, and $(8, 8)$ is $\\sqrt{32}$ from the center ✗; the choice $(3, 4)$ is MEASURING FROM THE ORIGIN INSTEAD OF FROM THE CENTER — it is $5$ from $(0, 0)$ but only $1$ unit from $(4, 4)$ ✗.)',
    },
  ],

  // slot 4 — shoelace area of a quadrilateral. Second routes: split on a
  // diagonal (v1), bounding box minus corner pieces (v2), and the cross-product
  // area of a parallelogram (v3).
  // Lane: (1,1),(8,2),(9,6),(2,6) -> 31 / (0,0),(7,1),(8,4),(1,5) -> 28 /
  // (2,0),(8,1),(7,7),(1,6) -> 37.
  [
    {
      q: 'What is the area of the quadrilateral with vertices $(1, 1)$, $(8, 2)$, $(9, 6)$, $(2, 6)$, taken in order?',
      fig: {
        view: [0, 0, 10, 7],
        grid: true,
        elems: [
          { t: 'poly', pts: [[1, 1], [8, 2], [9, 6], [2, 6]], fill: false },
          { t: 'point', p: [1, 1], dx: -10, dy: 10 },
          { t: 'point', p: [8, 2], dx: 12, dy: 8 },
          { t: 'point', p: [9, 6], dx: 10, dy: -8 },
          { t: 'point', p: [2, 6], dx: -10, dy: -8 },
        ],
      },
      choices: ['$31$', '$62$', '$40$', '$33$'],
      answer: 0,
      solution:
        'Run the shoelace sum around the four vertices, remembering to close the loop: $(1 \\cdot 2 - 8 \\cdot 1) + (8 \\cdot 6 - 9 \\cdot 2) + (9 \\cdot 6 - 2 \\cdot 6) + (2 \\cdot 1 - 1 \\cdot 6) = -6 + 30 + 42 - 4 = 62$, and half of that is $31$ ✓. Check a second, independent way by cutting along the diagonal from $(1, 1)$ to $(9, 6)$ and finding each triangle on its own: the triangle $(1, 1)$, $(8, 2)$, $(9, 6)$ has area $\\frac{1}{2}\\left|7 \\cdot 5 - 1 \\cdot 8\\right| = \\frac{27}{2}$, and the triangle $(1, 1)$, $(9, 6)$, $(2, 6)$ has area $\\frac{1}{2}\\left|8 \\cdot 5 - 5 \\cdot 1\\right| = \\frac{35}{2}$. Together they give $\\frac{27}{2} + \\frac{35}{2} = 31$ ✓. (The choice $62$ is FORGETTING THE FACTOR OF $\\frac{1}{2}$ at the end of the shoelace formula ✗; the choice $40$ is REPORTING THE BOUNDING BOX instead of the quadrilateral, the $8$ by $5$ rectangle from $(1, 1)$ to $(9, 6)$ ✗; the choice $33$ is FORGETTING THE WRAP-AROUND TERM that runs from $(2, 6)$ back to $(1, 1)$, which leaves a sum of $66$ ✗.)',
    },
    {
      q: 'A plot of land is the quadrilateral with corners $(0, 0)$, $(7, 1)$, $(8, 4)$, $(1, 5)$, listed in order around it. What is its area?',
      fig: {
        view: [-1, -1, 9, 6],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 1], [8, 4], [1, 5]], fill: false },
          { t: 'point', p: [0, 0], dx: -10, dy: 10 },
          { t: 'point', p: [7, 1], dx: 12, dy: 8 },
          { t: 'point', p: [8, 4], dx: 12, dy: -6 },
          { t: 'point', p: [1, 5], dx: -10, dy: -8 },
        ],
      },
      choices: ['$56$', '$40$', '$28$', '$18$'],
      answer: 2,
      solution:
        'Shoelace the four corners in order: $(0 \\cdot 1 - 7 \\cdot 0) + (7 \\cdot 4 - 8 \\cdot 1) + (8 \\cdot 5 - 1 \\cdot 4) + (1 \\cdot 0 - 0 \\cdot 5) = 0 + 20 + 36 + 0 = 56$, and half of that is $28$ ✓. Check a second, independent way with a bounding box: the plot sits inside the $8$ by $5$ rectangle from $(0, 0)$ to $(8, 5)$, area $40$. Four pieces of that rectangle stick out past the plot — a triangle of area $\\frac{7}{2}$ below the first side, a $1$ by $1$ square and a triangle of area $\\frac{3}{2}$ on the right, a triangle of area $\\frac{7}{2}$ above the third side, and a triangle of area $\\frac{5}{2}$ on the left. Those total $12$, and $40 - 12 = 28$ ✓. (The choice $56$ is FORGETTING THE FACTOR OF $\\frac{1}{2}$ at the end of the shoelace formula ✗; the choice $40$ is REPORTING THE BOUNDING BOX rather than the plot inside it ✗; the choice $18$ is STOPPING AFTER ONE OF THE TWO TRIANGLES, keeping only the triangle $(0, 0)$, $(8, 4)$, $(1, 5)$ and dropping its partner ✗.)',
    },
    {
      q: 'A quadrilateral tile has corners $(2, 0)$, $(8, 1)$, $(7, 7)$, $(1, 6)$, taken in order. What is its area?',
      fig: {
        view: [0, -1, 9, 8],
        grid: true,
        elems: [
          { t: 'poly', pts: [[2, 0], [8, 1], [7, 7], [1, 6]], fill: false },
          { t: 'point', p: [2, 0], dx: -10, dy: 10 },
          { t: 'point', p: [8, 1], dx: 12, dy: 8 },
          { t: 'point', p: [7, 7], dx: 10, dy: -8 },
          { t: 'point', p: [1, 6], dx: -10, dy: -8 },
        ],
      },
      choices: ['$74$', '$37$', '$49$', '$43$'],
      answer: 1,
      solution:
        'Shoelace all the way around, closing the loop at the end: $(2 \\cdot 1 - 8 \\cdot 0) + (8 \\cdot 7 - 7 \\cdot 1) + (7 \\cdot 6 - 1 \\cdot 7) + (1 \\cdot 0 - 2 \\cdot 6) = 2 + 49 + 35 - 12 = 74$, and half of that is $37$ ✓. Check a second, independent way by noticing the shape: the step from $(2, 0)$ to $(8, 1)$ is $(6, 1)$, and the step from $(1, 6)$ to $(7, 7)$ is also $(6, 1)$, so opposite sides match and the tile is a parallelogram with edge steps $(6, 1)$ and $(-1, 6)$. A parallelogram built on two steps has area $\\left|6 \\cdot 6 - 1 \\cdot (-1)\\right| = 37$ ✓. (The choice $74$ is FORGETTING THE FACTOR OF $\\frac{1}{2}$ at the end of the shoelace formula ✗; the choice $49$ is REPORTING THE BOUNDING BOX, the $7$ by $7$ square from $(1, 0)$ to $(8, 7)$ ✗; the choice $43$ is FORGETTING THE WRAP-AROUND TERM that runs from $(1, 6)$ back to $(2, 0)$, which leaves a sum of $86$ ✗.)',
    },
  ],

  // slot 5 — CONCEPT: how many times a line meets a circle. Route one compares
  // the center-to-line distance with the radius; route two substitutes and
  // reads the discriminant.
  // Lane: y = x + 5 vs (x-1)^2+(y+2)^2=8 -> misses / y = x - 5 vs
  // (x-2)^2+(y+1)^2=2 -> tangent / y = x - 4 vs (x-1)^2+(y+1)^2=20 -> two.
  [
    {
      q: 'Does the line $y = x + 5$ intersect the circle $(x - 1)^2 + (y + 2)^2 = 8$?',
      choices: [
        'Yes — it crosses the circle at two points',
        'Yes — it is tangent, touching at exactly one point',
        'No — the line misses the circle entirely',
        'No — the line runs through the center, so it cannot meet the circle',
      ],
      answer: 2,
      solution:
        'Compare the distance from the center to the line against the radius. The center is $(1, -2)$ and the radius is $\\sqrt{8} = 2\\sqrt{2} \\approx 2.83$. Writing the line as $x - y + 5 = 0$, the distance is $\\frac{|1 - (-2) + 5|}{\\sqrt{1^2 + (-1)^2}} = \\frac{8}{\\sqrt{2}} = 4\\sqrt{2} \\approx 5.66$. The center stands farther from the line than the radius reaches, so the line misses ✓. Check a second, independent way by substituting: $(x - 1)^2 + (x + 5 + 2)^2 = 8$ becomes $2x^2 + 12x + 50 = 8$, or $x^2 + 6x + 21 = 0$, whose discriminant is $36 - 84 = -48$. A negative discriminant means no real meeting point at all ✓. (The choice that it crosses at two points is READING THE CENTER STRAIGHT OFF THE SIGNS IN THE EQUATION as $(-1, 2)$, which sits only $\\frac{2}{\\sqrt{2}} = \\sqrt{2}$ from the line and so would be cut twice ✗; the choice tangent is SLIPPING A SIGN WHEN REARRANGING THE LINE, using $x + y + 5 = 0$, whose distance from $(1, -2)$ is $\\frac{4}{\\sqrt{2}} = 2\\sqrt{2}$ — exactly the radius ✗; the choice about the center is BELIEVING A LINE THROUGH THE CENTER AVOIDS THE CIRCLE, wrong twice over, since $(1, -2)$ is not on the line and a line through a center cuts the circle in two ✗.)',
    },
    {
      q: 'Does the line $y = x - 5$ intersect the circle $(x - 2)^2 + (y + 1)^2 = 2$?',
      choices: [
        'Yes — the line touches the circle at exactly one point',
        'No — the line misses the circle entirely',
        'Yes — it crosses the circle at two points',
        'No — the line runs through the center, so it cannot touch the circle',
      ],
      answer: 0,
      solution:
        'Measure the center-to-line distance and compare it with the radius. The center is $(2, -1)$ and the radius is $\\sqrt{2}$. With the line written as $x - y - 5 = 0$, the distance is $\\frac{|2 - (-1) - 5|}{\\sqrt{2}} = \\frac{2}{\\sqrt{2}} = \\sqrt{2}$ — equal to the radius, which is exactly the tangent case ✓. Check a second, independent way by substituting: $(x - 2)^2 + (x - 5 + 1)^2 = 2$ becomes $2x^2 - 12x + 20 = 2$, or $x^2 - 6x + 9 = 0$, which is $(x - 3)^2 = 0$. The repeated root $x = 3$ gives the single touch point $(3, -2)$, and $(3 - 2)^2 + (-2 + 1)^2 = 1 + 1 = 2$ confirms it sits on the circle ✓. (The choice that it misses is READING THE CENTER STRAIGHT OFF THE SIGNS IN THE EQUATION as $(-2, 1)$, which is $\\frac{8}{\\sqrt{2}} = 4\\sqrt{2}$ from the line and far out of reach ✗; the choice that it crosses twice is TREATING THE $2$ ON THE RIGHT AS THE RADIUS INSTEAD OF THE RADIUS SQUARED, since $\\sqrt{2}$ is less than $2$ ✗; the choice about the center is BELIEVING A LINE THROUGH THE CENTER CANNOT REACH THE CIRCLE, and $(2, -1)$ is not on this line anyway, since $2 - 5 = -3$ rather than $-1$ ✗.)',
    },
    {
      q: 'Does the line $y = x - 4$ intersect the circle $(x - 1)^2 + (y + 1)^2 = 20$?',
      choices: [
        'No — the line misses the circle entirely',
        'Yes — it is tangent, touching at exactly one point',
        'No — the line runs through the center, so it cannot reach the circle',
        'Yes — it crosses the circle at two points',
      ],
      answer: 3,
      solution:
        'Put the center-to-line distance beside the radius. The center is $(1, -1)$ and the radius is $\\sqrt{20} \\approx 4.47$. With the line as $x - y - 4 = 0$, the distance is $\\frac{|1 - (-1) - 4|}{\\sqrt{2}} = \\frac{2}{\\sqrt{2}} = \\sqrt{2} \\approx 1.41$, comfortably inside the radius, and a line that passes nearer than the radius must cut the circle twice ✓. Check a second, independent way by finding the points: substituting gives $(x - 1)^2 + (x - 3)^2 = 20$, or $2x^2 - 8x - 10 = 0$, which is $x^2 - 4x - 5 = 0$ and factors as $(x - 5)(x + 1) = 0$. That yields $(5, 1)$ and $(-1, -5)$, and both check on the circle: $16 + 4 = 20$ and $4 + 16 = 20$ ✓. (The choice that it misses is MOVING THE $20$ ACROSS WITH THE WRONG SIGN, solving $2x^2 - 8x + 30 = 0$, or $x^2 - 4x + 15 = 0$, whose discriminant $16 - 60 = -44$ looks like no solutions ✗; the choice tangent is KEEPING ONLY THE POSITIVE ROOT of $x^2 - 4x - 5 = 0$ and reporting the single point $(5, 1)$ ✗; the choice about the center is BELIEVING A LINE THROUGH THE CENTER CANNOT REACH THE CIRCLE, and $(1, -1)$ is not on the line in any case, since $1 - 4 = -3$ rather than $-1$ ✗.)',
    },
  ],

  // slot 6 — vertical tangents: find the center and radius first, then solve
  // |k - h| = r. Second route names the leftmost and rightmost points of the
  // circle and reads their x-coordinates.
  // Lane: center (3,2) r 4 -> -1, 7 / center (8,-4) r 5 -> 3, 13 /
  // center (-2,5) r 4 -> -6, 2.
  [
    {
      q: 'For which values of $k$ is the vertical line $x = k$ tangent to the circle $x^2 + y^2 - 6x - 4y - 3 = 0$?',
      choices: [
        '$k = -13$ and $k = 19$',
        '$k = -1$ and $k = 7$',
        '$k = -2$ and $k = 6$',
        '$k = 7$ only',
      ],
      answer: 1,
      solution:
        'Complete both squares first: $(x^2 - 6x + 9) + (y^2 - 4y + 4) = 3 + 9 + 4$, so $(x - 3)^2 + (y - 2)^2 = 16$, a circle with center $(3, 2)$ and radius $4$. A vertical line is tangent exactly when its distance from the center equals the radius, and the distance from $(3, 2)$ to $x = k$ is $|k - 3|$. Solving $|k - 3| = 4$ gives $k = -1$ and $k = 7$ ✓. Check a second, independent way by demanding a repeated root, using the original equation and never completing a square: putting $x = k$ into $x^2 + y^2 - 6x - 4y - 3 = 0$ gives $y^2 - 4y + (k^2 - 6k - 3) = 0$. A tangent line meets the circle once, so this quadratic in $y$ needs discriminant zero: $16 - 4(k^2 - 6k - 3) = 0$, which reduces to $k^2 - 6k - 7 = 0$ and factors as $(k - 7)(k + 1) = 0$, so $k = 7$ and $k = -1$ ✓. (The choice $k = -13$ and $k = 19$ is USING $16$ AS THE RADIUS INSTEAD OF THE RADIUS SQUARED, solving $|k - 3| = 16$ ✗; the choice $k = -2$ and $k = 6$ is MEASURING FROM THE CENTER’S $y$-COORDINATE, solving $|k - 2| = 4$ as though $x = k$ were a horizontal line ✗; the choice $k = 7$ only is FINDING THE TANGENT ON ONE SIDE AND STOPPING, though a circle has a vertical tangent at each of its two side edges ✗.)',
    },
    {
      q: 'A circular pond has its center at $(8, -4)$ and passes through the point $(8, 1)$. For which values of $k$ is the vertical line $x = k$ tangent to the pond?',
      choices: [
        '$k = -17$ and $k = 33$',
        '$k = -9$ and $k = 1$',
        '$k = 13$ only',
        '$k = 3$ and $k = 13$',
      ],
      answer: 3,
      solution:
        'Get the radius first. The point $(8, 1)$ sits directly above the center $(8, -4)$, so the radius is $1 - (-4) = 5$. A vertical line $x = k$ is tangent when its distance from the center matches the radius, and that distance is $|k - 8|$. Solving $|k - 8| = 5$ gives $k = 3$ and $k = 13$ ✓. Check a second, independent way by demanding a repeated root: the pond is $(x - 8)^2 + (y + 4)^2 = 25$, and putting $x = k$ into it gives $y^2 + 8y + \\left((k - 8)^2 - 9\\right) = 0$. A tangent meets the pond once, so the discriminant must vanish: $64 - 4\\left((k - 8)^2 - 9\\right) = 0$, which reduces to $(k - 8)^2 = 25$ and gives $k = 3$ and $k = 13$ ✓. (The choice $k = -17$ and $k = 33$ is USING THE RADIUS SQUARED, $25$, IN PLACE OF THE RADIUS, solving $|k - 8| = 25$ ✗; the choice $k = -9$ and $k = 1$ is MEASURING FROM THE CENTER’S $y$-COORDINATE, solving $|k + 4| = 5$ as though the tangent lines were horizontal ✗; the choice $k = 13$ only is FINDING THE TANGENT ON ONE SIDE AND STOPPING, missing the tangent hugging the far edge ✗.)',
    },
    {
      q: 'For which values of $k$ is the vertical line $x = k$ tangent to the circle $x^2 + y^2 + 4x - 10y + 13 = 0$?',
      choices: [
        '$k = -18$ and $k = 14$',
        '$k = -2$ and $k = 6$',
        '$k = -6$ and $k = 2$',
        '$k = 2$ only',
      ],
      answer: 2,
      solution:
        'Complete both squares: $(x^2 + 4x + 4) + (y^2 - 10y + 25) = -13 + 4 + 25$, so $(x + 2)^2 + (y - 5)^2 = 16$, giving center $(-2, 5)$ and radius $4$. A vertical line is tangent when its distance from the center equals the radius, and that distance is $|k - (-2)| = |k + 2|$. Solving $|k + 2| = 4$ gives $k = -6$ and $k = 2$ ✓. Check a second, independent way by demanding a repeated root, working from the original equation with no square completed: putting $x = k$ into $x^2 + y^2 + 4x - 10y + 13 = 0$ gives $y^2 - 10y + (k^2 + 4k + 13) = 0$, and a tangent needs discriminant zero: $100 - 4(k^2 + 4k + 13) = 0$, which reduces to $k^2 + 4k - 12 = 0$ and factors as $(k + 6)(k - 2) = 0$, so $k = -6$ and $k = 2$ ✓. (The choice $k = -18$ and $k = 14$ is USING $16$ AS THE RADIUS INSTEAD OF THE RADIUS SQUARED, solving $|k + 2| = 16$ ✗; the choice $k = -2$ and $k = 6$ is READING THE CENTER STRAIGHT OFF THE SIGNS IN THE EQUATION as $(2, -5)$ and solving $|k - 2| = 4$ ✗; the choice $k = 2$ only is FINDING THE TANGENT ON ONE SIDE AND STOPPING, leaving out the line along the other edge ✗.)',
    },
  ],

  // slot 7 — a point on a given vertical line equidistant from two points.
  // Route one sets squared distances equal; route two builds the perpendicular
  // bisector and evaluates it at the line's x-value.
  // Lane: x = 2 with (0,1),(6,7) -> (2,5) / x = 5 with (1,3),(8,4) -> (5,0) /
  // x = 4 with (1,1),(8,0) -> (4,-3).
  [
    {
      q: 'Which point on the vertical line $x = 2$ is equidistant from $(0, 1)$ and $(6, 7)$?',
      fig: {
        view: [-1, -1, 7, 9],
        grid: true,
        elems: [
          { t: 'seg', a: [2, -1], b: [2, 9], dash: true },
          { t: 'point', p: [0, 1], dx: -10, dy: -8 },
          { t: 'point', p: [6, 7], dx: 12, dy: -4 },
        ],
      },
      choices: ['$(3, 4)$', '$(2, 4)$', '$(2, 3)$', '$(2, 5)$'],
      answer: 3,
      solution:
        'Write the point as $(2, y)$ and set the squared distances equal: $(2 - 0)^2 + (y - 1)^2 = (2 - 6)^2 + (y - 7)^2$. That is $4 + y^2 - 2y + 1 = 16 + y^2 - 14y + 49$, so $12y = 60$ and $y = 5$. The point is $(2, 5)$, and both squared distances are $4 + 16 = 20$ ✓. Check a second, independent way with the perpendicular bisector: the midpoint is $(3, 4)$ and the segment slope is $\\frac{7 - 1}{6 - 0} = 1$, so the bisector has slope $-1$ and equation $y - 4 = -(x - 3)$, or $y = -x + 7$. At $x = 2$ that gives $y = 5$ ✓. (The choice $(3, 4)$ is REPORTING THE MIDPOINT OF THE SEGMENT, a point that is not even on the line $x = 2$ ✗; the choice $(2, 4)$ is AVERAGING THE TWO $y$-COORDINATES, $\\frac{1 + 7}{2} = 4$, which would only be right if the two points sat equally far to the left and right of the line ✗; the choice $(2, 3)$ is USING THE SEGMENT’S OWN SLOPE FOR THE BISECTOR instead of the negative reciprocal, which gives $y = x + 1$ and $y = 3$ at $x = 2$ ✗.)',
    },
    {
      q: 'Which point on the vertical line $x = 5$ is the same distance from $(1, 3)$ as from $(8, 4)$?',
      fig: {
        view: [0, -2, 9, 6],
        grid: true,
        elems: [
          { t: 'seg', a: [5, -2], b: [5, 6], dash: true },
          { t: 'point', p: [1, 3], dx: -10, dy: -8 },
          { t: 'point', p: [8, 4], dx: 12, dy: -4 },
        ],
      },
      choices: [
        '$\\left(\\frac{9}{2}, \\frac{7}{2}\\right)$',
        '$(5, 0)$',
        '$\\left(5, \\frac{7}{2}\\right)$',
        '$(5, 7)$',
      ],
      answer: 1,
      solution:
        'Call the point $(5, y)$ and set the squared distances equal: $(5 - 1)^2 + (y - 3)^2 = (5 - 8)^2 + (y - 4)^2$. That is $16 + y^2 - 6y + 9 = 9 + y^2 - 8y + 16$, which collapses to $25 - 6y = 25 - 8y$, so $2y = 0$ and $y = 0$. The point is $(5, 0)$, sitting $\\sqrt{16 + 9} = 5$ from each given point ✓. Check a second, independent way with the perpendicular bisector: the midpoint is $\\left(\\frac{9}{2}, \\frac{7}{2}\\right)$ and the segment slope is $\\frac{4 - 3}{8 - 1} = \\frac{1}{7}$, so the bisector has slope $-7$ and equation $y - \\frac{7}{2} = -7\\left(x - \\frac{9}{2}\\right)$. At $x = 5$ that gives $y = \\frac{7}{2} - \\frac{7}{2} = 0$ ✓. (The choice $\\left(\\frac{9}{2}, \\frac{7}{2}\\right)$ is REPORTING THE MIDPOINT OF THE SEGMENT, which does not lie on $x = 5$ ✗; the choice $\\left(5, \\frac{7}{2}\\right)$ is AVERAGING THE TWO $y$-COORDINATES, $\\frac{3 + 4}{2}$, ignoring that the two points are different distances from the line ✗; the choice $(5, 7)$ is PAIRING EACH POINT WITH THE OTHER’S SIDEWAYS GAP, solving $9 + (y - 3)^2 = 16 + (y - 4)^2$ to get $2y = 14$ ✗.)',
    },
    {
      q: 'A signal tower is to stand somewhere on the vertical line $x = 4$, equally far from a farm at $(1, 1)$ and a mill at $(8, 0)$. Where should it stand?',
      fig: {
        view: [0, -5, 9, 3],
        grid: true,
        elems: [
          { t: 'seg', a: [4, -5], b: [4, 3], dash: true },
          { t: 'point', p: [1, 1], dx: -10, dy: -8 },
          { t: 'point', p: [8, 0], dx: 12, dy: -4 },
        ],
      },
      choices: [
        '$(4, -3)$',
        '$\\left(\\frac{9}{2}, \\frac{1}{2}\\right)$',
        '$\\left(4, \\frac{1}{2}\\right)$',
        '$(4, 4)$',
      ],
      answer: 0,
      solution:
        'Write the tower as $(4, y)$ and set the squared distances equal: $(4 - 1)^2 + (y - 1)^2 = (4 - 8)^2 + (y - 0)^2$. That is $9 + y^2 - 2y + 1 = 16 + y^2$, so $10 - 2y = 16$, giving $y = -3$. The tower stands at $(4, -3)$, a distance $\\sqrt{9 + 16} = 5$ from each site ✓. Check a second, independent way with the perpendicular bisector: the midpoint is $\\left(\\frac{9}{2}, \\frac{1}{2}\\right)$ and the segment slope is $\\frac{0 - 1}{8 - 1} = -\\frac{1}{7}$, so the bisector has slope $7$ and equation $y - \\frac{1}{2} = 7\\left(x - \\frac{9}{2}\\right)$. At $x = 4$ that gives $y = \\frac{1}{2} - \\frac{7}{2} = -3$ ✓. (The choice $\\left(\\frac{9}{2}, \\frac{1}{2}\\right)$ is REPORTING THE MIDPOINT OF THE SEGMENT, which is not on the line $x = 4$ ✗; the choice $\\left(4, \\frac{1}{2}\\right)$ is AVERAGING THE TWO $y$-COORDINATES, $\\frac{1 + 0}{2}$, a shortcut that fails because the two sites are different distances from the line ✗; the choice $(4, 4)$ is PAIRING EACH SITE WITH THE OTHER’S SIDEWAYS GAP, solving $16 + (y - 1)^2 = 9 + y^2$ to get $2y = 8$ ✗.)',
    },
  ],

  // slot 8 — a midsegment length in letters. Route one works the midpoints
  // symbolically; route two is a numerical spot-check with named values, which
  // is why every variation states that a, b, c are positive.
  // Lane: (0,0),(4a,0),(2b,2c) -> 2a / (0,0),(6a,0),(2b,2c) -> 3a /
  // (0,0),(2a,0),(2b,2c), midpoints of the sides at (2a,0) -> sqrt(b^2+c^2).
  [
    {
      q: 'A triangle has vertices $(0, 0)$, $(4a, 0)$, and $(2b, 2c)$, where $a$, $b$, and $c$ are all positive. A segment joins the midpoints of the two sides that meet at $(2b, 2c)$. How long is that segment?',
      choices: ['$2a$', '$4a$', '$a$', '$2a + b$'],
      answer: 0,
      solution:
        'Find the two midpoints in letters. The side from $(0, 0)$ to $(2b, 2c)$ has midpoint $(b, c)$, and the side from $(4a, 0)$ to $(2b, 2c)$ has midpoint $\\left(\\frac{4a + 2b}{2}, c\\right) = (2a + b, c)$. Both sit at height $c$, so the segment is horizontal and its length is $(2a + b) - b = 2a$, positive because $a$ is ✓. Check a second, independent way with named numbers: take $a = 3$, $b = 1$, $c = 4$, which makes the triangle $(0, 0)$, $(12, 0)$, $(2, 8)$. The midpoints are $(1, 4)$ and $(7, 4)$, a segment of length $6$, and $2a = 2 \\cdot 3 = 6$ matches ✓. The segment is also half the base $4a$, exactly as the Midsegment Theorem promises. (The choice $4a$ is FORGETTING TO HALVE and reporting the base itself ✗; the choice $a$ is QUARTERING THE BASE INSTEAD OF HALVING IT, halving $2a$ one extra time ✗; the choice $2a + b$ is READING OFF THE RIGHT-HAND MIDPOINT’S $x$-COORDINATE without subtracting the left one ✗.)',
    },
    {
      q: 'A triangle has vertices $(0, 0)$, $(6a, 0)$, and $(2b, 2c)$, with $a$, $b$, and $c$ all positive. A segment joins the midpoints of the two sides that meet at $(2b, 2c)$. What is its length?',
      choices: ['$6a$', '$\\frac{3a}{2}$', '$3a$', '$3a + b$'],
      answer: 2,
      solution:
        'Locate the midpoints symbolically. The side from $(0, 0)$ to $(2b, 2c)$ has midpoint $(b, c)$; the side from $(6a, 0)$ to $(2b, 2c)$ has midpoint $\\left(\\frac{6a + 2b}{2}, c\\right) = (3a + b, c)$. Equal heights make the segment horizontal, so its length is $(3a + b) - b = 3a$, positive since $a$ is ✓. Check a second, independent way with named numbers: let $a = 2$, $b = 5$, $c = 3$, so the triangle is $(0, 0)$, $(12, 0)$, $(10, 6)$. The midpoints are $(5, 3)$ and $(11, 3)$, giving a length of $6$, and $3a = 3 \\cdot 2 = 6$ agrees ✓. It is half the base $6a$, as a midsegment must be. (The choice $6a$ is FORGETTING TO HALVE and quoting the base itself ✗; the choice $\\frac{3a}{2}$ is HALVING ONE TIME TOO MANY, cutting $3a$ down again ✗; the choice $3a + b$ is READING OFF THE RIGHT-HAND MIDPOINT’S $x$-COORDINATE without subtracting the left one ✗.)',
    },
    {
      q: 'In the triangle with vertices $(0, 0)$, $(2a, 0)$, and $(2b, 2c)$, where $a$, $b$, and $c$ are positive, a segment joins the midpoints of the two sides that meet at the vertex $(2a, 0)$. How long is it?',
      choices: [
        '$2\\sqrt{b^2 + c^2}$',
        '$\\sqrt{b^2 + c^2}$',
        '$b + c$',
        '$\\sqrt{a^2 + c^2}$',
      ],
      answer: 1,
      solution:
        'Work the two midpoints in letters. The side from $(0, 0)$ to $(2a, 0)$ has midpoint $(a, 0)$, and the side from $(2a, 0)$ to $(2b, 2c)$ has midpoint $(a + b, c)$. The horizontal gap between them is $(a + b) - a = b$ and the vertical gap is $c - 0 = c$, so the length is $\\sqrt{b^2 + c^2}$ ✓. Check a second, independent way with named numbers: take $a = 4$, $b = 3$, $c = 4$, making the triangle $(0, 0)$, $(8, 0)$, $(6, 8)$. The midpoints are $(4, 0)$ and $(7, 4)$, whose distance is $\\sqrt{9 + 16} = 5$, and $\\sqrt{b^2 + c^2} = \\sqrt{9 + 16} = 5$ agrees ✓. The third side, from $(0, 0)$ to $(2b, 2c)$, has length $2\\sqrt{b^2 + c^2}$, so the segment is half of it as expected. (The choice $2\\sqrt{b^2 + c^2}$ is FORGETTING TO HALVE and giving the whole third side ✗; the choice $b + c$ is ADDING THE HORIZONTAL AND VERTICAL GAPS instead of putting them through the distance formula ✗; the choice $\\sqrt{a^2 + c^2}$ is USING THE MIDPOINT’S OWN $x$-COORDINATE $a$ AS THE HORIZONTAL GAP instead of the difference $b$ ✗.)',
    },
  ],

  // slot 9 — the y-intercept of a perpendicular through a given point. Route
  // one uses point-slope with the negative reciprocal; route two swaps the
  // coefficients of the given line, fits the constant, then sets x = 0.
  // Lane: 3x + y = 12 through (2,5) -> 13/3 / x - 2y = 6 through (-2,-2) ->
  // -6 / 4x - y = 9 through (1,1) -> 5/4.
  [
    {
      q: 'A line passes through $(2, 5)$ and is perpendicular to the line $3x + y = 12$. What is its $y$-intercept?',
      choices: ['$11$', '$\\frac{13}{3}$', '$\\frac{17}{3}$', '$-1$'],
      answer: 1,
      solution:
        'Get the slope first. Rewriting $3x + y = 12$ as $y = -3x + 12$ shows a slope of $-3$, so the perpendicular slope is the negative reciprocal $\\frac{1}{3}$ — flip and negate. Through $(2, 5)$ the line is $y - 5 = \\frac{1}{3}(x - 2)$, and setting $x = 0$ gives $y = 5 - \\frac{2}{3} = \\frac{13}{3}$ ✓. Check a second, independent way without ever computing a slope: swapping the coefficients of $3x + y$ and changing one sign gives the perpendicular family $x - 3y = C$. Fitting the point, $2 - 3(5) = -13$, so the line is $x - 3y = -13$, and at $x = 0$ we get $-3y = -13$, or $y = \\frac{13}{3}$ ✓. (The choice $11$ is USING THE GIVEN LINE’S OWN SLOPE $-3$ instead of the negative reciprocal, which lands on $5 + 6 = 11$ ✗; the choice $\\frac{17}{3}$ is FLIPPING THE SLOPE BUT FORGETTING TO NEGATE IT, using $-\\frac{1}{3}$ to get $5 + \\frac{2}{3}$ ✗; the choice $-1$ is NEGATING THE SLOPE WITHOUT FLIPPING IT, using $3$ to get $5 - 6$ ✗.)',
    },
    {
      q: 'A line passes through $(-2, -2)$ and is perpendicular to the line $x - 2y = 6$. What is its $y$-intercept?',
      choices: ['$-1$', '$2$', '$-3$', '$-6$'],
      answer: 3,
      solution:
        'Find the slope of the given line: $x - 2y = 6$ rearranges to $y = \\frac{1}{2}x - 3$, so its slope is $\\frac{1}{2}$ and the perpendicular slope is $-2$. Through $(-2, -2)$ the line is $y + 2 = -2(x + 2)$, which simplifies to $y = -2x - 6$, so the $y$-intercept is $-6$ ✓. Check a second, independent way by swapping coefficients: a line perpendicular to $x - 2y = 6$ has the form $2x + y = C$. Fitting the point, $2(-2) + (-2) = -6$, so the line is $2x + y = -6$, and at $x = 0$ that reads $y = -6$ ✓. (The choice $-1$ is USING THE GIVEN LINE’S OWN SLOPE $\\frac{1}{2}$ instead of the negative reciprocal, which lands on $-2 + 1 = -1$ ✗; the choice $2$ is FLIPPING THE SLOPE BUT FORGETTING TO NEGATE IT, using $2$ to get $-2 + 4$ ✗; the choice $-3$ is NEGATING THE SLOPE WITHOUT FLIPPING IT, using $-\\frac{1}{2}$ to get $-2 - 1$ ✗.)',
    },
    {
      q: 'A line passes through $(1, 1)$ and is perpendicular to the line $4x - y = 9$. What is its $y$-intercept?',
      choices: ['$-3$', '$\\frac{3}{4}$', '$\\frac{5}{4}$', '$5$'],
      answer: 2,
      solution:
        'Start with the slope of the given line: $4x - y = 9$ becomes $y = 4x - 9$, a slope of $4$, so the perpendicular slope is $-\\frac{1}{4}$. Through $(1, 1)$ the line is $y - 1 = -\\frac{1}{4}(x - 1)$, and at $x = 0$ this gives $y = 1 + \\frac{1}{4} = \\frac{5}{4}$ ✓. Check a second, independent way with the coefficient swap: a line perpendicular to $4x - y = 9$ has the form $x + 4y = C$, and fitting the point gives $1 + 4(1) = 5$, so the line is $x + 4y = 5$. Setting $x = 0$ leaves $4y = 5$, or $y = \\frac{5}{4}$ ✓. (The choice $-3$ is USING THE GIVEN LINE’S OWN SLOPE $4$ instead of the negative reciprocal, which lands on $1 - 4 = -3$ ✗; the choice $\\frac{3}{4}$ is FLIPPING THE SLOPE BUT FORGETTING TO NEGATE IT, using $\\frac{1}{4}$ to get $1 - \\frac{1}{4}$ ✗; the choice $5$ is NEGATING THE SLOPE WITHOUT FLIPPING IT, using $-4$ to get $1 + 4$ ✗.)',
    },
  ],

  // slot 10 — radius of the circle through the origin and one point on each
  // axis. Route one: the right angle at the origin stands on a diameter.
  // Route two: build the center from the two chord bisectors and measure.
  // Lane: (10,0),(0,24) -> 13 / (16,0),(0,12) -> 10 / (14,0),(0,48) -> 25.
  [
    {
      q: 'A circle passes through $(0, 0)$, $(10, 0)$, and $(0, 24)$. What is its radius?',
      choices: ['$26$', '$17$', '$13$', '$12$'],
      answer: 2,
      solution:
        'The two sides leaving the origin run along the axes, so the triangle formed by the three points has a right angle at $(0, 0)$. An inscribed right angle always stands on a diameter, so the side opposite it — from $(10, 0)$ to $(0, 24)$ — is a diameter, and its length is $\\sqrt{100 + 576} = \\sqrt{676} = 26$. Half of that is the radius, $13$ ✓. Check a second, independent way by finding the center outright: the chord from $(0, 0)$ to $(10, 0)$ has its perpendicular bisector at $x = 5$, and the chord from $(0, 0)$ to $(0, 24)$ has its perpendicular bisector at $y = 12$, so the center is $(5, 12)$. Its distance to the origin is $\\sqrt{25 + 144} = \\sqrt{169} = 13$, and the same $13$ comes out for the other two points ✓. (The choice $26$ is REPORTING THE DIAMETER INSTEAD OF THE RADIUS ✗; the choice $17$ is TREATING THE HYPOTENUSE AS THE SUM OF THE LEGS, $10 + 24 = 34$, and halving that ✗; the choice $12$ is HALVING THE LONGER LEG, as though the segment along the $y$-axis were the diameter ✗.)',
    },
    {
      q: 'A circular arch is drawn through the three points $(0, 0)$, $(16, 0)$, and $(0, 12)$. What is the radius of that circle?',
      choices: ['$10$', '$20$', '$14$', '$8$'],
      answer: 0,
      solution:
        'The segments from the origin to the other two points lie along the axes, so the angle at $(0, 0)$ is right. An inscribed right angle sits on a diameter, so the segment from $(16, 0)$ to $(0, 12)$ is a diameter, of length $\\sqrt{256 + 144} = \\sqrt{400} = 20$. The radius is half of that, $10$ ✓. Check a second, independent way by pinning the center: the horizontal chord from $(0, 0)$ to $(16, 0)$ forces the center onto $x = 8$, and the vertical chord from $(0, 0)$ to $(0, 12)$ forces it onto $y = 6$, so the center is $(8, 6)$. Its distance to the origin is $\\sqrt{64 + 36} = \\sqrt{100} = 10$, and it is $10$ from the other two points as well ✓. (The choice $20$ is REPORTING THE DIAMETER INSTEAD OF THE RADIUS ✗; the choice $14$ is TREATING THE DIAMETER AS THE SUM OF THE TWO AXIS DISTANCES, $16 + 12 = 28$, and halving it ✗; the choice $8$ is HALVING THE LONGER AXIS DISTANCE, as though the segment along the $x$-axis were the diameter ✗.)',
    },
    {
      q: 'A circle is drawn through the origin, through $(14, 0)$, and through $(0, 48)$. How long is its radius?',
      choices: ['$50$', '$31$', '$24$', '$25$'],
      answer: 3,
      solution:
        'The two chords leaving the origin lie on the axes, making the angle at the origin a right angle. That inscribed right angle rests on a diameter, so the segment joining $(14, 0)$ and $(0, 48)$ is a diameter, with length $\\sqrt{196 + 2304} = \\sqrt{2500} = 50$. The radius is $25$ ✓. Check a second, independent way by constructing the center: the chord along the $x$-axis puts the center on $x = 7$, and the chord along the $y$-axis puts it on $y = 24$, so the center is $(7, 24)$. From there the origin is $\\sqrt{49 + 576} = \\sqrt{625} = 25$ away, matching the distance to the other two points ✓. (The choice $50$ is REPORTING THE DIAMETER INSTEAD OF THE RADIUS ✗; the choice $31$ is TREATING THE DIAMETER AS THE SUM OF THE TWO AXIS DISTANCES, $14 + 48 = 62$, and halving it ✗; the choice $24$ is HALVING THE LONGER AXIS DISTANCE, as though the segment along the $y$-axis were the diameter ✗.)',
    },
  ],

  // slot 11 — shortest distance from an OUTSIDE point to a circle: distance to
  // the center minus the radius. Each variation confirms the point is outside
  // before subtracting. Route two locates the nearest point of the circle on
  // the radial segment and measures to it.
  // Lane: 20 - 6 = 14 / 13 - 6 = 7 / 20 - 4 = 16.
  [
    {
      q: 'What is the shortest distance from the point $(18, 11)$ to the circle $(x - 2)^2 + (y + 1)^2 = 36$?',
      choices: ['$14$', '$20$', '$26$', '$16$'],
      answer: 0,
      solution:
        'The center is $(2, -1)$ and the radius is $\\sqrt{36} = 6$. The distance from the point to the center is $\\sqrt{(18 - 2)^2 + (11 + 1)^2} = \\sqrt{256 + 144} = \\sqrt{400} = 20$. Since $20 > 6$, the point lies outside the circle, so the nearest bit of the circle is $6$ units in from it along the segment toward the center, and the gap is $20 - 6 = 14$ ✓. Check a second, independent way by naming that nearest point: from the center, the step toward $(18, 11)$ is $(16, 12)$, which has length $20$, so $6$ units along it is $\\frac{6}{20}(16, 12) = \\left(\\frac{24}{5}, \\frac{18}{5}\\right)$, landing on $\\left(\\frac{34}{5}, \\frac{13}{5}\\right)$. The distance from $(18, 11)$ to that point is $\\sqrt{\\left(\\frac{56}{5}\\right)^2 + \\left(\\frac{42}{5}\\right)^2} = \\frac{\\sqrt{4900}}{5} = 14$ ✓. (The choice $20$ is MEASURING TO THE CENTER AND STOPPING, forgetting that the circle reaches out $6$ units to meet you ✗; the choice $26$ is ADDING THE RADIUS INSTEAD OF SUBTRACTING IT, which measures across to the far side of the circle ✗; the choice $16$ is USING $36$ AS THE RADIUS INSTEAD OF THE RADIUS SQUARED, giving $|20 - 36|$ ✗.)',
    },
    {
      q: 'What is the shortest distance from the point $(6, 15)$ to the circle $x^2 + y^2 - 2x - 6y - 26 = 0$?',
      choices: ['$13$', '$19$', '$7$', '$1$'],
      answer: 2,
      solution:
        'Complete both squares: $(x^2 - 2x + 1) + (y^2 - 6y + 9) = 26 + 1 + 9$, so $(x - 1)^2 + (y - 3)^2 = 36$, a circle with center $(1, 3)$ and radius $6$. The distance from $(6, 15)$ to the center is $\\sqrt{25 + 144} = \\sqrt{169} = 13$, and $13 > 6$, so the point is outside the circle. The shortest hop is therefore $13 - 6 = 7$ ✓. Check a second, independent way by walking to the nearest point of the circle: the step from the center toward $(6, 15)$ is $(5, 12)$, of length $13$, so $6$ units along it is $\\frac{6}{13}(5, 12) = \\left(\\frac{30}{13}, \\frac{72}{13}\\right)$, giving the point $\\left(\\frac{43}{13}, \\frac{111}{13}\\right)$. From $(6, 15)$ that is $\\sqrt{\\left(\\frac{35}{13}\\right)^2 + \\left(\\frac{84}{13}\\right)^2} = \\frac{\\sqrt{8281}}{13} = \\frac{91}{13} = 7$ ✓. (The choice $13$ is MEASURING TO THE CENTER AND STOPPING, ignoring that the circle already reaches $6$ units out ✗; the choice $19$ is ADDING THE RADIUS INSTEAD OF SUBTRACTING IT, which measures to the far side of the circle ✗; the choice $1$ is SUBTRACTING THE DIAMETER INSTEAD OF THE RADIUS, $13 - 12$ ✗.)',
    },
    {
      q: 'A drone hovers over $(8, 18)$ above a circular pond described by $(x + 4)^2 + (y - 2)^2 = 16$. What is the shortest distance from the drone’s position to the pond’s edge?',
      choices: ['$20$', '$16$', '$24$', '$12$'],
      answer: 1,
      solution:
        'The pond has center $(-4, 2)$ and radius $\\sqrt{16} = 4$. The distance from $(8, 18)$ to the center is $\\sqrt{(8 + 4)^2 + (18 - 2)^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20$, and since $20 > 4$ the drone is well outside the pond. The edge comes $4$ units out from the center along that line, so the shortest distance is $20 - 4 = 16$ ✓. Check a second, independent way by naming the closest point on the rim: the step from the center toward the drone is $(12, 16)$, of length $20$, so $4$ units along it is $\\frac{4}{20}(12, 16) = \\left(\\frac{12}{5}, \\frac{16}{5}\\right)$, putting the rim point at $\\left(-\\frac{8}{5}, \\frac{26}{5}\\right)$. The distance from $(8, 18)$ to it is $\\sqrt{\\left(\\frac{48}{5}\\right)^2 + \\left(\\frac{64}{5}\\right)^2} = \\frac{\\sqrt{6400}}{5} = 16$ ✓. (The choice $20$ is MEASURING TO THE CENTER AND STOPPING, forgetting the pond stretches $4$ units toward the drone ✗; the choice $24$ is ADDING THE RADIUS INSTEAD OF SUBTRACTING IT, reaching the far rim ✗; the choice $12$ is SUBTRACTING THE DIAMETER INSTEAD OF THE RADIUS, $20 - 8$ ✗.)',
    },
  ],

  // slot 12 — the points at one fixed distance from each of two given points:
  // where two equal circles meet. Route one uses the symmetry line through the
  // midpoint; route two subtracts the two circle equations.
  // Lane: 13 from (0,0),(10,0) -> (5,±12) / 10 from (0,0),(16,0) -> (8,±6) /
  // 13 from (0,0),(24,0) -> (12,±5).
  [
    {
      q: 'Which points are at distance $13$ from BOTH $(0, 0)$ and $(10, 0)$?',
      fig: {
        view: [-14, -14, 24, 14],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 13 },
          { t: 'circle', c: [10, 0], r: 13 },
          { t: 'point', p: [0, 0], dx: -10, dy: 14 },
          { t: 'point', p: [10, 0], dx: 12, dy: 14 },
        ],
      },
      choices: [
        '$(5, 13)$ and $(5, -13)$',
        '$(5, 0)$ only',
        'There are no such points',
        '$(5, 12)$ and $(5, -12)$',
      ],
      answer: 3,
      solution:
        'Each condition describes a circle of radius $13$, one about $(0, 0)$ and one about $(10, 0)$, and we want where they meet. The two centers are mirror images across the vertical line halfway between them, so any common point lies on $x = 5$. Substituting into $x^2 + y^2 = 169$ gives $25 + y^2 = 169$, so $y^2 = 144$ and $y = \\pm 12$, giving $(5, 12)$ and $(5, -12)$ ✓. Check a second, independent way by subtracting the two equations: $x^2 + y^2 = 169$ minus $(x - 10)^2 + y^2 = 169$ leaves $20x - 100 = 0$, so $x = 5$, and back-substituting again gives $y = \\pm 12$. Both points check against the second center too: $(5 - 10)^2 + 144 = 169$ ✓. (The choice $(5, 13)$ and $(5, -13)$ is FORGETTING THAT MOVING $5$ SIDEWAYS USES UP PART OF THE RADIUS, keeping the full $13$ as the height ✗; the choice $(5, 0)$ only is STOPPING AT THE MIDPOINT OF THE TWO GIVEN POINTS, which is just $5$ from each rather than $13$ ✗; the choice that there are none is CONCLUDING THE TWO CIRCLES MISS EACH OTHER, though centers $10$ apart with radii $13$ and $13$ overlap generously ✗.)',
    },
    {
      q: 'Which points are at distance $10$ from BOTH $(0, 0)$ and $(16, 0)$?',
      fig: {
        view: [-11, -11, 27, 11],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 10 },
          { t: 'circle', c: [16, 0], r: 10 },
          { t: 'point', p: [0, 0], dx: -10, dy: 14 },
          { t: 'point', p: [16, 0], dx: 12, dy: 14 },
        ],
      },
      choices: [
        '$(8, 10)$ and $(8, -10)$',
        '$(8, 6)$ and $(8, -6)$',
        '$(8, 0)$ only',
        'There are no such points',
      ],
      answer: 1,
      solution:
        'Each requirement is a circle of radius $10$, one centered at $(0, 0)$ and one at $(16, 0)$, and the answer is where the two meet. The picture is symmetric about the vertical line halfway between the centers, so any shared point has $x = 8$. Substituting into $x^2 + y^2 = 100$ gives $64 + y^2 = 100$, so $y^2 = 36$ and $y = \\pm 6$: the points are $(8, 6)$ and $(8, -6)$ ✓. Check a second, independent way by subtracting the equations: $x^2 + y^2 = 100$ minus $(x - 16)^2 + y^2 = 100$ leaves $32x - 256 = 0$, so $x = 8$, and substituting back gives $y = \\pm 6$. Measuring from the far center confirms it: $(8 - 16)^2 + 36 = 64 + 36 = 100$ ✓. (The choice $(8, 10)$ and $(8, -10)$ is FORGETTING THAT MOVING $8$ SIDEWAYS USES UP PART OF THE RADIUS, keeping the full $10$ as the height ✗; the choice $(8, 0)$ only is STOPPING AT THE MIDPOINT OF THE TWO GIVEN POINTS, which is $8$ from each and not $10$ ✗; the choice that there are none is CONCLUDING THE TWO CIRCLES MISS EACH OTHER, though centers $16$ apart with radii $10$ and $10$ do overlap ✗.)',
    },
    {
      q: 'Two anchor posts stand at $(0, 0)$ and $(24, 0)$. Which points are exactly $13$ units from each post?',
      fig: {
        view: [-14, -14, 38, 14],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 13 },
          { t: 'circle', c: [24, 0], r: 13 },
          { t: 'point', p: [0, 0], dx: -10, dy: 14 },
          { t: 'point', p: [24, 0], dx: 12, dy: 14 },
        ],
      },
      choices: [
        '$(12, 5)$ and $(12, -5)$',
        '$(12, 13)$ and $(12, -13)$',
        '$(12, 0)$ only',
        'There are no such points',
      ],
      answer: 0,
      solution:
        'Each post contributes a circle of radius $13$, and we want the points on both. The two centers sit symmetrically about the vertical line halfway between them, so any shared point has $x = 12$. Substituting into $x^2 + y^2 = 169$ gives $144 + y^2 = 169$, so $y^2 = 25$ and $y = \\pm 5$: the points are $(12, 5)$ and $(12, -5)$ ✓. Check a second, independent way by subtracting the two equations: $x^2 + y^2 = 169$ minus $(x - 24)^2 + y^2 = 169$ leaves $48x - 576 = 0$, so $x = 12$, and back-substituting returns $y = \\pm 5$. The far post agrees: $(12 - 24)^2 + 25 = 144 + 25 = 169$ ✓. (The choice $(12, 13)$ and $(12, -13)$ is FORGETTING THAT MOVING $12$ SIDEWAYS USES UP PART OF THE RADIUS, keeping the full $13$ as the height ✗; the choice $(12, 0)$ only is STOPPING AT THE MIDPOINT OF THE TWO POSTS, which is $12$ from each rather than $13$ ✗; the choice that there are none is CONCLUDING THE TWO CIRCLES MISS EACH OTHER, though centers $24$ apart with radii $13$ and $13$ still overlap, since $24 < 26$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 17,
  challenge,
}
