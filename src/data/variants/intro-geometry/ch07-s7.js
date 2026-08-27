// Introduction to Geometry chapter 7 — variations for the CHALLENGE set.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every answer was worked twice by two genuinely different routes, and the
//    two routes had to agree before the key was written. The pairs used are:
//    coordinate distance between the two centers vs. the distance relation
//    IO^2 = R(R - 2r) (slot 1); coordinate sums 3G = A + B + C vs. stepping
//    from the midpoint of AB three times the gap to G (slot 2); midpoint of
//    the hypotenuse vs. intersecting two perpendicular bisectors, then a
//    three-way distance check (slot 3); Area = rs vs. the fan decomposition
//    into three triangles of height r (slot 4); s = r + 2R then Area = rs
//    vs. solving for the legs with Pythagoras and sum-product (slot 5); two
//    midsegment halvings vs. the composed 1:4 similarity checked on a
//    concrete midpoint pair (slot 6); the circumradius argument vs. the
//    coordinate half-hypotenuse identity (slot 7); six equal median slices
//    vs. the centroid sitting at one-third height (slot 8); the axis of
//    symmetry argument vs. explicit center coordinates for an isosceles
//    example and a scalene counterexample (slot 9); Heron then h = 2A/b vs.
//    solving for the exact foot of the altitude (slot 10); half base times
//    height then r = A/s vs. the point-to-line distance from the exact
//    incenter (slot 11); r = (a + b - c)/2 vs. r = A/s, then the 45-degree
//    bisector stretch by root two (slot 12).
//  - Every figure is coordinate-exact: each incenter is drawn at (r, r) from
//    its right angle or at (half base, r) on an isosceles axis, each
//    circumcenter at the true hypotenuse midpoint, and each altitude foot at
//    its computed x-coordinate.
//  - Figure labels are plain text: bare numerals and the letters of points.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS.
//  - No two choices inside an item name the same value, and across the base
//    problem and its three variations every one of the four answer positions
//    is used exactly once.

const challenge = [
  // slot 1 — incenter-to-circumcenter distance in a right triangle at the
  // origin. Lane: 2√5 / (5√5)/2 / 3√5.
  [
    {
      q: 'Right triangle $PQR$ has its right angle at $P(0, 0)$, with $Q(16, 0)$ and $R(0, 12)$. Point $I$ is the center of its inscribed circle and point $O$ is the center of its circumscribed circle. What is the distance $IO$?',
      fig: {
        view: [-2.5, -2.5, 18, 14],
        alt: 'Right triangle with legs 16 and 12, incircle centered at I, circumcenter O on the hypotenuse',
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [0, 12]], fill: false },
          { t: 'right', at: [0, 0], from: [16, 0], to: [0, 12] },
          { t: 'circle', c: [4, 4], r: 4 },
          { t: 'seg', a: [4, 4], b: [8, 6], dash: true },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 12 },
          { t: 'label', p: [0, 6], text: '12', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [0, 12], label: 'R', dx: -10, dy: -8 },
          { t: 'point', p: [4, 4], label: 'I', dx: -2, dy: -12 },
          { t: 'point', p: [8, 6], label: 'O', dx: 10, dy: -6 },
        ],
      },
      choices: ['$4\\sqrt{2}$', '$6$', '$2\\sqrt{5}$', '$2\\sqrt{13}$'],
      answer: 2,
      solution:
        'The hypotenuse is $QR = \\sqrt{16^2 + 12^2} = \\sqrt{400} = 20$, so the inradius is $r = \\frac{16 + 12 - 20}{2} = 4$ and the incenter sits at $I(4, 4)$, distance $4$ from both legs. The circumcenter of a right triangle is the midpoint of the hypotenuse: $O(8, 6)$. So $IO = \\sqrt{(8 - 4)^2 + (6 - 4)^2} = \\sqrt{20} = 2\\sqrt{5}$ ✓. Check a second, independent way with the distance relation between the two centers, $IO^2 = R(R - 2r)$: here $R = 10$, so $IO^2 = 10(10 - 8) = 20$ ✓ — the same $2\\sqrt{5}$ with no coordinates at all. (The choice $4\\sqrt{2}$ is MEASURING FROM I TO THE RIGHT-ANGLE VERTEX instead of to $O$; the choice $6$ is SUBTRACTING THE TWO RADII $10 - 4$; the choice $2\\sqrt{13}$ comes from DIVIDING THE AREA BY THE FULL PERIMETER, which wrongly shrinks the incenter to $(2, 2)$.)',
    },
    {
      q: 'A machinist’s drawing shows a right triangular plate with corners at $A(0, 0)$, $B(20, 0)$, and $C(0, 15)$, the right angle at $A$. A circular hole is bored tangent to all three edges, and a circular rim is scribed through all three corners. How far apart are the centers of the hole and the rim?',
      fig: {
        view: [-3, -3, 22.5, 17],
        alt: 'Right triangular plate with legs 20 and 15, inscribed hole centered at I, rim center O on the hypotenuse',
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [0, 15]], fill: false },
          { t: 'right', at: [0, 0], from: [20, 0], to: [0, 15] },
          { t: 'circle', c: [5, 5], r: 5 },
          { t: 'seg', a: [5, 5], b: [10, 7.5], dash: true },
          { t: 'label', p: [10, 0], text: '20', dx: 0, dy: 12 },
          { t: 'label', p: [0, 7.5], text: '15', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [20, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 15], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [5, 5], label: 'I', dx: -2, dy: -12 },
          { t: 'point', p: [10, 7.5], label: 'O', dx: 10, dy: -6 },
        ],
      },
      choices: ['$\\frac{5\\sqrt{13}}{2}$', '$\\frac{5\\sqrt{5}}{2}$', '$\\frac{15\\sqrt{5}}{2}$', '$7.5$'],
      answer: 1,
      solution:
        'The hypotenuse is $\\sqrt{20^2 + 15^2} = \\sqrt{625} = 25$, so the hole’s radius is $r = \\frac{20 + 15 - 25}{2} = 5$, putting its center at $I(5, 5)$. The rim passes through all three corners, so its center is the hypotenuse midpoint $O(10, 7.5)$. Then $IO = \\sqrt{5^2 + 2.5^2} = \\sqrt{\\frac{125}{4}} = \\frac{5\\sqrt{5}}{2}$ ✓. Check a second, independent way with $IO^2 = R(R - 2r)$, where $R = 12.5$: $12.5(12.5 - 10) = 31.25 = \\frac{125}{4}$ ✓ — the coordinate answer confirmed without coordinates. (The choice $\\frac{5\\sqrt{13}}{2}$ comes from DIVIDING THE AREA BY THE FULL PERIMETER, which drops the hole’s center to $(2.5, 2.5)$; the choice $\\frac{15\\sqrt{5}}{2}$ is FLIPPING THE SIGN in the check to $R(R + 2r)$; the choice $7.5$ is SUBTRACTING THE TWO RADII.)',
    },
    {
      q: 'In right triangle $DEF$, legs $DE = 24$ and $DF = 18$ meet at the right angle $D(0, 0)$, with $E(24, 0)$ and $F(0, 18)$. The incenter $I$ and the circumcenter $O$ are both marked. How long is the segment joining the two centers?',
      fig: {
        view: [-3, -3, 26, 20],
        alt: 'Right triangle with legs 24 and 18, incircle centered at I, circumcenter O on the hypotenuse',
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [0, 18]], fill: false },
          { t: 'right', at: [0, 0], from: [24, 0], to: [0, 18] },
          { t: 'circle', c: [6, 6], r: 6 },
          { t: 'seg', a: [6, 6], b: [12, 9], dash: true },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 12 },
          { t: 'label', p: [0, 9], text: '18', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [0, 18], label: 'F', dx: -10, dy: -8 },
          { t: 'point', p: [6, 6], label: 'I', dx: -2, dy: -12 },
          { t: 'point', p: [12, 9], label: 'O', dx: 10, dy: -6 },
        ],
      },
      choices: ['$3\\sqrt{13}$', '$9$', '$3\\sqrt{21}$', '$3\\sqrt{5}$'],
      answer: 3,
      solution:
        'The hypotenuse is $EF = \\sqrt{24^2 + 18^2} = \\sqrt{900} = 30$, so $r = \\frac{24 + 18 - 30}{2} = 6$ and $I(6, 6)$, while the circumcenter is the hypotenuse midpoint $O(12, 9)$. So $IO = \\sqrt{6^2 + 3^2} = \\sqrt{45} = 3\\sqrt{5}$ ✓. Check a second, independent way with $IO^2 = R(R - 2r)$: with $R = 15$, that is $15(15 - 12) = 45$ ✓ — same answer from a formula that never sees the coordinates. (The choice $3\\sqrt{13}$ comes from DIVIDING THE AREA BY THE FULL PERIMETER, which puts the incenter at $(3, 3)$; the choice $9$ is SUBTRACTING THE TWO RADII $15 - 6$; the choice $3\\sqrt{21}$ is TREATING THE TWO RADII AS LEGS and computing $\\sqrt{R^2 - r^2}$.)',
    },
  ],

  // slot 2 — centroid plus two vertices, recover the third vertex.
  // Lane: (4,9) / (4,5) / (6,9).
  [
    {
      q: 'A kinetic sculpture hangs three equal weights at $A(1, 1)$, $B(4, 2)$, and a third point $C$. For the piece to hang level, the balance point of the three weights — their centroid — must land exactly at $G(3, 4)$. Where must $C$ go?',
      choices: ['$(1, 5)$', '$(5, 7)$', '$(3.5, 6.5)$', '$(4, 9)$'],
      answer: 3,
      solution:
        'The centroid averages the three positions, so the coordinate sums must be three times $G$: $x_A + x_B + x_C = 9$ and $y_A + y_B + y_C = 12$. That forces $x_C = 9 - 1 - 4 = 4$ and $y_C = 12 - 1 - 2 = 9$, so $C(4, 9)$ ✓. Check a second, independent way along the median: the midpoint of $\\overline{AB}$ is $M(2.5, 1.5)$, and $C$ sits on ray $MG$ three times as far from $M$ as $G$ is, so $C = M + 3(G - M) = (2.5 + 1.5,\\ 1.5 + 7.5) = (4, 9)$ ✓. (The choice $(1, 5)$ is DOUBLING G INSTEAD OF TRIPLING, computing $2G - A - B$; the choice $(5, 7)$ is TREATING G AS THE MIDPOINT OF A AND C; the choice $(3.5, 6.5)$ is TREATING G AS THE MIDPOINT OF C AND THE MIDPOINT OF $\\overline{AB}$.)',
    },
    {
      q: 'Three delivery drones hover over a warehouse district at $A(2, 0)$, $B(9, 1)$, and a third position $C$ that has dropped off the tracking screen. Dispatch still shows the average of the three positions: $(5, 2)$. Recover $C$.',
      choices: ['$(4, 5)$', '$(-1, 3)$', '$(8, 4)$', '$(4.5, 3.5)$'],
      answer: 0,
      solution:
        'The average of the three positions is their centroid, so the sums are three times it: $x$-sum $= 15$ and $y$-sum $= 6$. Then $x_C = 15 - 2 - 9 = 4$ and $y_C = 6 - 0 - 1 = 5$, so $C(4, 5)$ ✓. Check a second, independent way through the median: the midpoint of $\\overline{AB}$ is $M(5.5, 0.5)$, and $C = M + 3(G - M) = (5.5 - 1.5,\\ 0.5 + 4.5) = (4, 5)$ ✓ — and the average $\\left(\\frac{2 + 9 + 4}{3}, \\frac{0 + 1 + 5}{3}\\right) = (5, 2)$ closes the loop. (The choice $(-1, 3)$ is DOUBLING G INSTEAD OF TRIPLING; the choice $(8, 4)$ is TREATING G AS THE MIDPOINT OF A AND C; the choice $(4.5, 3.5)$ is TREATING G AS THE MIDPOINT OF C AND THE MIDPOINT OF $\\overline{AB}$.)',
    },
    {
      q: 'The three medians of a triangle cross at $(4, 4)$. Two of the triangle’s vertices are $(0, 2)$ and $(6, 1)$. What is the third vertex?',
      choices: ['$(2, 5)$', '$(5, 6.5)$', '$(6, 9)$', '$(8, 6)$'],
      answer: 2,
      solution:
        'The medians cross at the centroid, the average of the vertices, so the coordinate sums are $3 \\cdot 4 = 12$ in each direction. The third vertex is $(12 - 0 - 6,\\ 12 - 2 - 1) = (6, 9)$ ✓. Check a second, independent way with the $2:1$ median split: the midpoint of the known side is $M(3, 1.5)$, and the far vertex lies three times the gap from $M$ to the centroid: $(3, 1.5) + 3(1, 2.5) = (6, 9)$ ✓. (The choice $(2, 5)$ is DOUBLING THE CENTROID INSTEAD OF TRIPLING; the choice $(5, 6.5)$ is TREATING THE CENTROID AS THE MIDPOINT OF THE THIRD VERTEX AND $M$; the choice $(8, 6)$ is TREATING THE CENTROID AS THE MIDPOINT OF THE THIRD VERTEX AND $(0, 2)$.)',
    },
  ],

  // slot 3 — the point equidistant from the three vertices of a right
  // triangle. Lane: (6,5) / (7,5) / (3,7).
  [
    {
      q: 'A town will place one drinking fountain the same distance from three schools, located at $A(0, 0)$, $B(12, 0)$, and $C(12, 10)$ on the town map. Where should the fountain $F$ go?',
      fig: {
        view: [-1.5, -1.5, 14, 12],
        alt: 'Right triangle with vertices at the three schools and the fountain point F in the middle of the hypotenuse',
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 10]], fill: false },
          { t: 'right', at: [12, 0], from: [0, 0], to: [12, 10] },
          { t: 'seg', a: [6, 5], b: [0, 0], dash: true },
          { t: 'seg', a: [6, 5], b: [12, 0], dash: true },
          { t: 'seg', a: [6, 5], b: [12, 10], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [12, 10], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [6, 5], label: 'F', dx: -4, dy: -12 },
        ],
      },
      choices: ['$\\left(8, \\frac{10}{3}\\right)$', '$(6, 5)$', '$(12, 5)$', '$(6, 0)$'],
      answer: 1,
      solution:
        'Equidistant from three points means the circumcenter of the triangle they form. The right angle is at $B(12, 0)$, so the hypotenuse is $\\overline{AC}$ and the circumcenter is its midpoint: $(6, 5)$ ✓. Check a second, independent way with perpendicular bisectors: equidistant from $A$ and $B$ forces $x = 6$, and equidistant from $B$ and $C$ forces $y = 5$, so the lines cross at $(6, 5)$ — and the three distances all come out $\\sqrt{36 + 25} = \\sqrt{61}$ ✓. (The choice $\\left(8, \\frac{10}{3}\\right)$ is THE CENTROID, which balances area but does not equalize distances; the choice $(12, 5)$ is THE MIDPOINT OF LEG $\\overline{BC}$; the choice $(6, 0)$ is THE MIDPOINT OF LEG $\\overline{AB}$.)',
    },
    {
      q: 'An office manager wants a wireless router mounted the same distance from three desks, at $A(0, 0)$, $B(14, 0)$, and $C(14, 10)$ on the floor plan. What mounting point $R$ does the geometry demand?',
      fig: {
        view: [-1.5, -1.5, 16, 12],
        alt: 'Right triangle with vertices at the three desks and the router point R at the middle of the hypotenuse',
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [14, 10]], fill: false },
          { t: 'right', at: [14, 0], from: [0, 0], to: [14, 10] },
          { t: 'seg', a: [7, 5], b: [0, 0], dash: true },
          { t: 'seg', a: [7, 5], b: [14, 0], dash: true },
          { t: 'seg', a: [7, 5], b: [14, 10], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [14, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [14, 10], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [7, 5], label: 'R', dx: -4, dy: -12 },
        ],
      },
      choices: ['$\\left(\\frac{28}{3}, \\frac{10}{3}\\right)$', '$(14, 5)$', '$(7, 0)$', '$(7, 5)$'],
      answer: 3,
      solution:
        'The point equidistant from all three desks is the circumcenter of their triangle. The right angle sits at $B(14, 0)$, so the hypotenuse runs from $A(0, 0)$ to $C(14, 10)$, and the circumcenter is its midpoint $(7, 5)$ ✓. Check a second, independent way: the perpendicular bisector of $\\overline{AB}$ is $x = 7$ and that of $\\overline{BC}$ is $y = 5$; they meet at $(7, 5)$, which sits $\\sqrt{49 + 25} = \\sqrt{74}$ from each desk ✓. (The choice $\\left(\\frac{28}{3}, \\frac{10}{3}\\right)$ is THE CENTROID, the balance point rather than the equal-distance point; the choice $(14, 5)$ is THE MIDPOINT OF LEG $\\overline{BC}$; the choice $(7, 0)$ is THE MIDPOINT OF LEG $\\overline{AB}$.)',
    },
    {
      q: 'Point $P$ satisfies $PA = PB = PC$, where $A(0, 0)$, $B(6, 0)$, and $C(6, 14)$ are the vertices of a right triangle. Find the coordinates of $P$.',
      fig: {
        view: [-1.5, -1.5, 8, 16],
        alt: 'Tall right triangle with vertices A, B, C and the equidistant point P at the middle of the hypotenuse',
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 14]], fill: false },
          { t: 'right', at: [6, 0], from: [0, 0], to: [6, 14] },
          { t: 'seg', a: [3, 7], b: [0, 0], dash: true },
          { t: 'seg', a: [3, 7], b: [6, 0], dash: true },
          { t: 'seg', a: [3, 7], b: [6, 14], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 14], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [3, 7], label: 'P', dx: -12, dy: -6 },
        ],
      },
      choices: ['$(3, 7)$', '$\\left(4, \\frac{14}{3}\\right)$', '$(6, 7)$', '$(3, 0)$'],
      answer: 0,
      solution:
        'Three equal distances to the vertices is the circumcenter’s calling card. The right angle is at $B(6, 0)$, so the hypotenuse is $\\overline{AC}$ and its midpoint $(3, 7)$ is the circumcenter ✓. Check a second, independent way: $PA = PB$ forces $x = 3$ (perpendicular bisector of $\\overline{AB}$) and $PB = PC$ forces $y = 7$; the crossing is $(3, 7)$, and each distance is $\\sqrt{9 + 49} = \\sqrt{58}$ ✓. (The choice $\\left(4, \\frac{14}{3}\\right)$ is THE CENTROID; the choice $(6, 7)$ is THE MIDPOINT OF LEG $\\overline{BC}$; the choice $(3, 0)$ is THE MIDPOINT OF LEG $\\overline{AB}$.)',
    },
  ],

  // slot 4 — inradius and area to perimeter, P = 2A/r. Lane: 40 / 60 / 36.
  [
    {
      q: 'A triangular courtyard has area $100$ square meters. The largest circle that fits inside it touches all three walls and has radius $5$ meters. How many meters of fence are needed to enclose the courtyard?',
      choices: ['$40$ meters', '$20$ meters', '$80$ meters', '$10$ meters'],
      answer: 0,
      solution:
        'A circle touching all three walls is the inscribed circle, so its radius is the inradius. From Area $= rs$: $100 = 5s$, so the semiperimeter is $s = 20$ and the fence — the full perimeter — is $2 \\cdot 20 = 40$ meters ✓. Check a second, independent way with the fan decomposition: joining the circle’s center to the three corners cuts the courtyard into three triangles, each of height $5$ over one wall, so $100 = \\frac{1}{2} \\cdot 5 \\cdot P$ and $P = \\frac{200}{5} = 40$ ✓. (The choice $20$ meters is STOPPING AT THE SEMIPERIMETER; the choice $80$ meters is DOUBLING A SECOND TIME after the perimeter is already in hand; the choice $10$ meters is DIVIDING THE AREA BY $2r$ instead of multiplying by $\\frac{2}{r}$.)',
    },
    {
      q: 'The circular stage at the middle of a triangular plaza touches all three edges of the plaza. The stage has radius $4$ m, and the plaza covers $120$ square meters. Find the total length of the plaza’s three edges.',
      choices: ['$30$ m', '$120$ m', '$60$ m', '$15$ m'],
      answer: 2,
      solution:
        'Touching all three edges makes the stage the plaza’s inscribed circle, so $r = 4$. Area $= rs$ gives $120 = 4s$, so $s = 30$ — and $s$ is only HALF the boundary, so the three edges total $60$ m ✓. Check a second, independent way by fanning the plaza from the stage’s center into three triangles of height $4$: $120 = \\frac{1}{2} \\cdot 4 \\cdot P$, so $P = \\frac{240}{4} = 60$ ✓. (The choice $30$ m is STOPPING AT THE SEMIPERIMETER; the choice $120$ m is DOUBLING TWICE; the choice $15$ m is DIVIDING THE AREA BY $2r$.)',
    },
    {
      q: 'A sailmaker sews a circular logo of radius $7$ feet onto a triangular sail of area $126$ square feet; the logo touches all three edges of the sail. How much edging tape does the sail’s full perimeter need?',
      choices: ['$18$ feet', '$36$ feet', '$72$ feet', '$9$ feet'],
      answer: 1,
      solution:
        'A circle tangent to all three edges is the inscribed circle, so the sail’s inradius is $7$. From Area $= rs$: $126 = 7s$, so $s = 18$, and the perimeter is $2s = 36$ feet ✓. Check a second, independent way: segments from the logo’s center to the three corners cut the sail into three triangles with common height $7$, so $126 = \\frac{1}{2} \\cdot 7 \\cdot P$ and $P = \\frac{252}{7} = 36$ ✓. (The choice $18$ feet is STOPPING AT THE SEMIPERIMETER; the choice $72$ feet is DOUBLING TWICE; the choice $9$ feet is DIVIDING THE AREA BY $2r$.)',
    },
  ],
  // slot 5 — right triangle from r and R to area, A = r(r + 2R).
  // Lane: 96 / 150 / 216.
  [
    {
      q: 'A right triangle has an inscribed circle of radius $4$ and a circumscribed circle of radius $10$. What is the area of the triangle?',
      choices: ['$56$', '$192$', '$80$', '$96$'],
      answer: 3,
      solution:
        'The circumscribed circle pins down the hypotenuse: it is a diameter, so $c = 2 \\cdot 10 = 20$. In a right triangle the inradius satisfies $r = s - c$, so $s = 4 + 20 = 24$, and Area $= rs = 4 \\cdot 24 = 96$ ✓. Check a second, independent way by hunting the legs: $a + b = 2s - c = 28$ and $a^2 + b^2 = 400$, so $2ab = 28^2 - 400 = 384$ and Area $= \\frac{ab}{2} = 96$ ✓ — and solving gives legs $12$ and $16$, the $12$-$16$-$20$ triple, whose inradius $\\frac{12 + 16 - 20}{2} = 4$ matches. (The choice $56$ is TREATING R ITSELF AS THE HYPOTENUSE, which fakes $s = 14$; the choice $192$ is USING THE FULL PERIMETER in place of $s$; the choice $80$ is MULTIPLYING THE INRADIUS BY THE DIAMETER and stopping.)',
    },
    {
      q: 'A circular badge of radius $5$ fits snugly inside a right triangular patch, touching all three sides, while the patch’s three corners all lie on a circle of radius $12.5$. What is the area of the patch?',
      choices: ['$87.5$', '$150$', '$300$', '$62.5$'],
      answer: 1,
      solution:
        'The corner circle makes the hypotenuse a diameter: $c = 2 \\cdot 12.5 = 25$. The badge is the inscribed circle, and in a right triangle $r = s - c$, so $s = 5 + 25 = 30$ and Area $= rs = 5 \\cdot 30 = 150$ ✓. Check a second, independent way through the legs: $a + b = 2s - c = 35$ with $a^2 + b^2 = 625$, so $2ab = 35^2 - 625 = 600$ and Area $= \\frac{ab}{2} = 150$ ✓ — the legs come out $15$ and $20$, the $15$-$20$-$25$ triple, with $\\frac{15 + 20 - 25}{2} = 5$ ✓. (The choice $87.5$ is TREATING R AS THE HYPOTENUSE, faking $s = 17.5$; the choice $300$ is USING THE FULL PERIMETER in place of $s$; the choice $62.5$ is MULTIPLYING THE TWO RADII.)',
    },
    {
      q: 'In a right triangle, the distance from the incenter to each side is $6$, and the distance from the circumcenter to each vertex is $15$. Find the triangle’s area.',
      choices: ['$432$', '$90$', '$216$', '$126$'],
      answer: 2,
      solution:
        'The two distances are exactly $r = 6$ and $R = 15$. The hypotenuse is a diameter of the circumcircle, so $c = 30$, and the right-triangle identity $r = s - c$ gives $s = 6 + 30 = 36$. Then Area $= rs = 6 \\cdot 36 = 216$ ✓. Check a second, independent way via the legs: $a + b = 2s - c = 42$ and $a^2 + b^2 = 900$, so $2ab = 42^2 - 900 = 864$ and Area $= \\frac{ab}{2} = 216$ ✓ — the legs are $18$ and $24$, the $18$-$24$-$30$ triple, whose inradius $\\frac{18 + 24 - 30}{2} = 6$ agrees. (The choice $126$ is TREATING R AS THE HYPOTENUSE, faking $s = 21$; the choice $432$ is USING THE FULL PERIMETER in place of $s$; the choice $90$ is MULTIPLYING THE TWO RADII.)',
    },
  ],

  // slot 6 — medial triangle of a medial triangle, longest side divides by 4.
  // Lane: 19 / 31 / 27.
  [
    {
      q: 'A quilter cuts a fabric triangle whose longest edge measures $76$ cm. She joins the midpoints of its three sides and keeps only the middle triangle; then she performs the same midpoint cut on that smaller piece. How long is the longest edge of the final piece?',
      choices: ['$38$ cm', '$9.5$ cm', '$19$ cm', '$4.75$ cm'],
      answer: 2,
      solution:
        'Each side of a medial triangle is a midsegment of the old triangle — parallel to one side and exactly half its length — so one cut halves every edge, and the longest edge stays the longest. Two cuts: $76 \\to 38 \\to 19$ cm ✓. Check a second, independent way with a concrete first cut: place the long edge from $(0, 0)$ to $(76, 0)$ with third corner $(10, 20)$; the midpoints $(5, 10)$ and $(43, 10)$ of the two short sides are joined by a horizontal midsegment of length $38$, exactly half of $76$ ✓ — and repeating the argument gives $19$. (The choice $38$ cm is STOPPING AFTER ONE CUT; the choice $9.5$ cm is HALVING A THIRD TIME; the choice $4.75$ cm is APPLYING THE AREA FACTOR $\\frac{1}{16}$ to a length.)',
    },
    {
      q: 'A print shop’s logo is a triangle whose longest side is $124$ mm. The second line of a letterhead carries the logo’s medial triangle — the triangle whose vertices are the midpoints of the sides — and the third line carries the medial triangle of THAT one. What is the longest side of the third-line logo?',
      choices: ['$62$ mm', '$15.5$ mm', '$7.75$ mm', '$31$ mm'],
      answer: 3,
      solution:
        'By the midsegment theorem every side of a medial triangle is half of a side of its parent, so each medial step is a similarity with ratio $\\frac{1}{2}$ that keeps the longest side longest. Two steps compose to ratio $\\frac{1}{4}$: $\\frac{124}{4} = 31$ mm ✓. Check a second, independent way step by step: the second-line logo has longest side $\\frac{124}{2} = 62$, and the third-line logo halves it again to $31$ ✓ — halving twice divides by $4$, not by $8$. (The choice $62$ mm is STOPPING AFTER ONE MEDIAL STEP; the choice $15.5$ mm is HALVING A THIRD TIME; the choice $7.75$ mm is APPLYING THE AREA FACTOR $\\frac{1}{16}$ to a length.)',
    },
    {
      q: 'A triangular steel frame has bars of three different lengths, the longest being $108$ cm. Cross-braces join the midpoints of its sides, forming an inner triangle; then a second set of braces joins the midpoints of THAT triangle’s sides. How long is the longest bar of the innermost triangle?',
      choices: ['$27$ cm', '$54$ cm', '$13.5$ cm', '$6.75$ cm'],
      answer: 0,
      solution:
        'Each cross-brace is a midsegment: parallel to one outer bar and half its length. So the inner triangle is a half-scale copy of the frame, and the innermost is a half-scale copy of THAT — a quarter-scale copy of the original, with the longest bar still in the longest position: $\\frac{108}{4} = 27$ cm ✓. Check a second, independent way one layer at a time: the first braces give a longest bar of $\\frac{108}{2} = 54$, and the second braces halve it to $27$ ✓. (The choice $54$ cm is STOPPING AT THE FIRST SET OF BRACES; the choice $13.5$ cm is HALVING A THIRD TIME; the choice $6.75$ cm is APPLYING THE AREA FACTOR $\\frac{1}{16}$ to a length.)',
    },
  ],

  // slot 7 — median to the hypotenuse is half of it. Lane: 31 / 37 / 23.
  [
    {
      q: 'The face of a skateboard ramp is a right triangle whose hypotenuse measures $62$ inches. A metal strut runs from the right-angle corner to the midpoint of the hypotenuse. How long must the strut be?',
      choices: ['$31$ inches', '$62$ inches', '$\\frac{62}{3}$ inches', 'It cannot be determined without the leg lengths'],
      answer: 0,
      solution:
        'The midpoint of the hypotenuse is the circumcenter of a right triangle — equidistant from all three corners — so the strut is a circumradius: $\\frac{62}{2} = 31$ inches ✓. Check a second, independent way with coordinates: put the right angle at the origin with legs $a$ and $b$ on the axes, so $a^2 + b^2 = 62^2$; the midpoint is $\\left(\\frac{a}{2}, \\frac{b}{2}\\right)$, and the strut is $\\sqrt{\\frac{a^2}{4} + \\frac{b^2}{4}} = \\frac{1}{2}\\sqrt{a^2 + b^2} = 31$ ✓ — the legs cancel out entirely. (The choice $62$ inches is USING THE WHOLE HYPOTENUSE; the choice $\\frac{62}{3}$ inches is APPLYING THE CENTROID’S TWO-THIRDS SPLIT to the median; the last choice is ASSUMING THE LEGS MATTER, when they cancel.)',
    },
    {
      q: 'A racing sail is a right triangle whose longest edge — the hypotenuse — measures $74$ feet. A rigger attaches a batten from the sail’s right-angle corner to the point halfway along that longest edge. Find the batten’s length.',
      choices: ['$74$ feet', '$\\frac{74}{3}$ feet', '$18.5$ feet', '$37$ feet'],
      answer: 3,
      solution:
        'The batten is the median to the hypotenuse, and the halfway point of the hypotenuse is the circumcenter — the same distance from all three corners of the sail. So the batten equals half the hypotenuse: $\\frac{74}{2} = 37$ feet ✓. Check a second, independent way with coordinates: right angle at the origin, legs $a, b$ with $a^2 + b^2 = 74^2$; the distance to $\\left(\\frac{a}{2}, \\frac{b}{2}\\right)$ is $\\frac{1}{2}\\sqrt{a^2 + b^2} = 37$ ✓, whatever the legs are. (The choice $74$ feet is USING THE WHOLE HYPOTENUSE; the choice $\\frac{74}{3}$ feet is APPLYING THE CENTROID’S TWO-THIRDS SPLIT; the choice $18.5$ feet is HALVING TWICE.)',
    },
    {
      q: 'A right triangle is inscribed in a circle so that its hypotenuse, of length $46$, is a diameter. A segment joins the right-angle vertex to the circle’s center. How long is that segment?',
      choices: ['$\\frac{46}{3}$', '$23$', '$46$', '$11.5$'],
      answer: 1,
      solution:
        'The circle’s center is the midpoint of the diameter — that is, the midpoint of the hypotenuse — and the right-angle vertex lies ON the circle, so the segment is simply a radius: $\\frac{46}{2} = 23$ ✓. Check a second, independent way with the median fact: the segment from the right angle to the hypotenuse’s midpoint is the median to the hypotenuse, always half the hypotenuse, so again $23$ ✓ — two names, one segment. (The choice $\\frac{46}{3}$ is APPLYING THE CENTROID’S TWO-THIRDS SPLIT to the median; the choice $46$ is USING THE WHOLE DIAMETER; the choice $11.5$ is HALVING TWICE.)',
    },
  ],

  // slot 8 — the centroid triangle AGB holds one third of the area.
  // Lane: 33 / 38 / 42.
  [
    {
      q: 'A triangular mosaic $ABC$ has area $99$ square inches. Grout lines run from each corner to the centroid $G$, cutting the mosaic into three pieces. What is the area of piece $AGB$?',
      choices: ['$49.5$', '$33$', '$16.5$', '$24.75$'],
      answer: 1,
      solution:
        'The three medians cut any triangle into six slivers of equal area, and piece $AGB$ is made of exactly two of them — so it holds $\\frac{2}{6} = \\frac{1}{3}$ of the mosaic: $\\frac{99}{3} = 33$ square inches ✓. Check a second, independent way with heights: the centroid’s height above line $AB$ is the average of the three corners’ heights, and since $A$ and $B$ sit on that line at height $0$, the centroid floats at exactly one third of $C$’s height. So $[AGB] = \\frac{1}{2} \\cdot AB \\cdot \\frac{h}{3} = \\frac{1}{3}[ABC] = 33$ ✓. (The choice $49.5$ is A MEDIAN’S HALF-SPLIT, but $\\overline{AG}$ and $\\overline{BG}$ are not medians; the choice $16.5$ is A SINGLE SLIVER of the six; the choice $24.75$ is QUARTERING THE AREA.)',
    },
    {
      q: 'A triangular park covers $114$ acres. Three straight walkways run from the park’s corners to its centroid, splitting the park into three zones. Find the area of each zone.',
      choices: ['$38$', '$57$', '$19$', '$28.5$'],
      answer: 0,
      solution:
        'The walkways join each corner to the centroid, so each zone is one of the three centroid triangles, and each is built from two of the six equal median slivers: each zone holds $\\frac{1}{3}$ of the park, $\\frac{114}{3} = 38$ acres ✓. Check a second, independent way on one zone: the centroid sits at one third of the height above each side (its height is the average of the three corner heights, two of which are zero over that side), so the zone on any side has area $\\frac{1}{2} \\cdot \\text{side} \\cdot \\frac{h}{3} = \\frac{1}{3}$ of the total $= 38$ ✓ — all three zones agree, which is why the centroid is the fair-division point. (The choice $57$ is A MEDIAN’S HALF-SPLIT; the choice $19$ is A SINGLE SLIVER of the six; the choice $28.5$ is QUARTERING THE AREA.)',
    },
    {
      q: 'In triangle $PQR$, the three medians meet at point $M$. Given that triangle $PQR$ has area $126$, what is the area of triangle $PMQ$?',
      choices: ['$63$', '$21$', '$42$', '$31.5$'],
      answer: 2,
      solution:
        'The point where the medians meet is the centroid, and joining it to the three vertices cuts $PQR$ into three triangles that each contain two of the six equal median slivers. So $[PMQ] = \\frac{126}{3} = 42$ ✓. Check a second, independent way with heights: $M$’s height above $\\overline{PQ}$ is the average of the heights of $P$, $Q$, and $R$ — that is, one third of $R$’s height — so $[PMQ] = \\frac{1}{2} \\cdot PQ \\cdot \\frac{h}{3} = \\frac{1}{3} \\cdot 126 = 42$ ✓. (The choice $63$ is A MEDIAN’S HALF-SPLIT, but no side of $\\triangle PMQ$ is a median of $\\triangle PQR$; the choice $21$ is A SINGLE SLIVER of the six; the choice $31.5$ is QUARTERING THE AREA.)',
    },
  ],
  // slot 9 — four centers on one line without being one point: isosceles,
  // not equilateral. Conceptual; three dressings.
  [
    {
      q: 'Maya computes all four classic centers of her triangle — the incenter, circumcenter, centroid, and orthocenter. They turn out to be four DIFFERENT points, yet a single straight line passes through all of them. What kind of triangle must Maya have drawn?',
      choices: [
        'an equilateral triangle',
        'a scalene right triangle',
        'an isosceles triangle that is not equilateral',
        'a scalene obtuse triangle',
      ],
      answer: 2,
      solution:
        'An isosceles triangle has an axis of symmetry, and the segment from the apex to the base midpoint works every job at once — median, altitude, angle bisector, and perpendicular bisector of the base — so all four centers must ride that one line, and they stay distinct as long as the triangle is not equilateral ✓. Check a second, independent way with numbers: for the isosceles triangle $(0, 0)$, $(8, 0)$, $(4, 3)$, the centroid is $(4, 1)$, the incenter $\\left(4, \\frac{4}{3}\\right)$, the circumcenter $\\left(4, -\\frac{7}{6}\\right)$, and the orthocenter $\\left(4, \\frac{16}{3}\\right)$ — four different points, all on $x = 4$ ✓. And a scalene check fails as it should: for legs $3$ and $4$ at the origin, the orthocenter $(0,0)$, centroid $\\left(\\frac{4}{3}, 1\\right)$, and circumcenter $(2, 1.5)$ share the line $y = \\frac{3}{4}x$, but the incenter $(1, 1)$ misses it. (The choice of an EQUILATERAL triangle COLLAPSES ALL FOUR CENTERS TO ONE POINT, not four different ones; the SCALENE RIGHT and SCALENE OBTUSE choices both LEAVE THE INCENTER OFF the line through the other three.)',
    },
    {
      q: 'For which triangle is it guaranteed that the incenter lies on the same straight line as the circumcenter, centroid, and orthocenter, without all four centers collapsing to a single point?',
      choices: [
        'an isosceles triangle with exactly two equal sides',
        'any right triangle',
        'an equilateral triangle',
        'any scalene triangle',
      ],
      answer: 0,
      solution:
        'With exactly two equal sides the triangle has one axis of symmetry, and the apex-to-base-midpoint segment is simultaneously a median, an altitude, an angle bisector, and the base’s perpendicular bisector — so every one of the four centers sits on that axis, and because the triangle is not equilateral they do not all merge ✓. Check a second, independent way with the triangle $(0, 0)$, $(12, 0)$, $(6, 8)$, whose equal sides are $10$: the circumcenter is $\\left(6, \\frac{7}{4}\\right)$, the centroid $\\left(6, \\frac{8}{3}\\right)$, the incenter $(6, 3)$ (area $48$ over $s = 16$), and the orthocenter $\\left(6, \\frac{9}{2}\\right)$ — four distinct points strung on $x = 6$ ✓. (The choice of ANY RIGHT triangle fails because a scalene right triangle LEAVES THE INCENTER OFF the line of the other three; an EQUILATERAL triangle MERGES ALL FOUR INTO ONE POINT; ANY SCALENE triangle likewise STRANDS THE INCENTER off the line.)',
    },
    {
      q: 'Every center of a certain triangle — incenter, circumcenter, centroid, and orthocenter — lies on the perpendicular bisector of one particular side, and at least two of the centers are distinct points. What must be true of the triangle?',
      choices: [
        'it must be scalene',
        'it must be equilateral',
        'it must be a right triangle',
        'it must be isosceles but not equilateral',
      ],
      answer: 3,
      solution:
        'Put that side from $(0, 0)$ to $(c, 0)$, so its perpendicular bisector is $x = \\frac{c}{2}$. The circumcenter is always on it, but the centroid’s $x$-coordinate is $\\frac{0 + c + x_C}{3}$, which equals $\\frac{c}{2}$ only when $x_C = \\frac{c}{2}$ — the apex must sit directly above the midpoint, which is exactly the isosceles condition ✓. Once the triangle is symmetric about that line, the incenter and orthocenter join automatically, since the axis is also an angle bisector and an altitude; and “at least two distinct centers” rules out the equilateral case, where all four fuse into one point. Check a second, independent way: for $(0, 0)$, $(8, 0)$, $(4, 3)$ the four centers are $\\left(4, \\frac{4}{3}\\right)$, $\\left(4, -\\frac{7}{6}\\right)$, $(4, 1)$, and $\\left(4, \\frac{16}{3}\\right)$ — all on $x = 4$, all different ✓. (The SCALENE choice MOVES THE CENTROID OFF the bisector, since $x_C \\neq \\frac{c}{2}$; the EQUILATERAL choice MERGES ALL FOUR CENTERS, contradicting distinctness; the RIGHT-triangle choice only works when the triangle is ALSO isosceles.)',
    },
  ],

  // slot 10 — altitude to the longest side of a scalene triangle via Heron.
  // Lane: 14.4 / 11.2 / 31.2.
  [
    {
      q: 'Three straight trails of lengths $15$ km, $34$ km, and $35$ km enclose a triangular nature reserve. A ranger tower $T$ stands at the junction of the two shorter trails. What is the shortest distance from the tower to the longest trail?',
      fig: {
        view: [-3, -2.5, 38, 17],
        alt: 'Triangle with sides 15, 34, 35 and a dashed perpendicular from the tower T to the side of length 35',
        elems: [
          { t: 'poly', pts: [[0, 0], [35, 0], [4.2, 14.4]], fill: false },
          { t: 'seg', a: [4.2, 14.4], b: [4.2, 0], dash: true },
          { t: 'right', at: [4.2, 0], from: [35, 0], to: [4.2, 14.4] },
          { t: 'label', p: [19.6, 0], text: '35', dx: 0, dy: 12 },
          { t: 'label', p: [2.1, 7.2], text: '15', dx: -12, dy: 0 },
          { t: 'label', p: [19.6, 7.2], text: '34', dx: 10, dy: -6 },
          { t: 'label', p: [4.2, 7.2], text: '?', dx: 12, dy: 0 },
          { t: 'point', p: [4.2, 14.4], label: 'T', dx: 0, dy: -12 },
        ],
      },
      choices: ['$7.2$ km', '$33.6$ km', '$3.6$ km', '$14.4$ km'],
      answer: 3,
      solution:
        'The shortest path from a point to a line is the perpendicular, so this is the altitude from $T$ to the $35$ km trail. Heron first: $s = \\frac{15 + 34 + 35}{2} = 42$, so Area $= \\sqrt{42 \\cdot 27 \\cdot 8 \\cdot 7} = \\sqrt{63504} = 252$, and $h = \\frac{2 \\cdot 252}{35} = 14.4$ km ✓. Check a second, independent way by finding the exact foot: with the long trail from $(0, 0)$ to $(35, 0)$, the tower satisfies $x^2 + y^2 = 225$ and $(x - 35)^2 + y^2 = 1156$; subtracting gives $70x = 294$, so $x = 4.2$ and $y = \\sqrt{225 - 17.64} = \\sqrt{207.36} = 14.4$ ✓. (The choice $7.2$ km is DROPPING THE FACTOR OF $2$, computing $\\frac{A}{b}$; the choice $33.6$ km is THE ALTITUDE TO THE SHORTEST TRAIL; the choice $3.6$ km is PUTTING THE $2$ ON THE WRONG SIDE, computing $\\frac{A}{2b}$.)',
    },
    {
      q: 'A pennant is a triangle with sides $13$, $40$, and $45$ inches. A seamstress needs its height: the distance from the corner opposite the $45$-inch edge, measured perpendicularly to that edge. How long is it?',
      fig: {
        view: [-3, -2.5, 48, 14],
        alt: 'Triangle with sides 13, 40, 45 and a dashed perpendicular from the top corner to the side of length 45',
        elems: [
          { t: 'poly', pts: [[0, 0], [45, 0], [6.6, 11.2]], fill: false },
          { t: 'seg', a: [6.6, 11.2], b: [6.6, 0], dash: true },
          { t: 'right', at: [6.6, 0], from: [45, 0], to: [6.6, 11.2] },
          { t: 'label', p: [25, 0], text: '45', dx: 0, dy: 12 },
          { t: 'label', p: [3.3, 5.6], text: '13', dx: -12, dy: 0 },
          { t: 'label', p: [25.8, 5.6], text: '40', dx: 10, dy: -6 },
          { t: 'label', p: [6.6, 5.6], text: '?', dx: 12, dy: 0 },
        ],
      },
      choices: ['$5.6$ inches', '$11.2$ inches', '$12.6$ inches', '$2.8$ inches'],
      answer: 1,
      solution:
        'Heron delivers the area: $s = \\frac{13 + 40 + 45}{2} = 49$, so Area $= \\sqrt{49 \\cdot 36 \\cdot 9 \\cdot 4} = \\sqrt{63504} = 252$, and the height onto the $45$-inch edge is $h = \\frac{2 \\cdot 252}{45} = 11.2$ inches ✓. Check a second, independent way by locating the foot of the perpendicular: with the long edge from $(0, 0)$ to $(45, 0)$, the top corner obeys $x^2 + y^2 = 169$ and $(x - 45)^2 + y^2 = 1600$; subtracting gives $90x = 594$, so $x = 6.6$ and $y = \\sqrt{169 - 43.56} = \\sqrt{125.44} = 11.2$ ✓. (The choice $5.6$ inches is DROPPING THE FACTOR OF $2$; the choice $12.6$ inches is THE ALTITUDE TO THE $40$-INCH SIDE, not the one asked for; the choice $2.8$ inches is PUTTING THE $2$ ON THE WRONG SIDE, computing $\\frac{A}{2b}$.)',
    },
    {
      q: 'In triangle $DEF$ with $DE = 39$, $EF = 41$, and $FD = 50$, an altitude is dropped from $E$ to side $\\overline{FD}$. Find its length.',
      fig: {
        view: [-4, -3, 54, 34],
        alt: 'Triangle DEF with sides 39, 41, 50 and a dashed altitude from E to the side of length 50',
        elems: [
          { t: 'poly', pts: [[0, 0], [50, 0], [23.4, 31.2]], fill: false },
          { t: 'seg', a: [23.4, 31.2], b: [23.4, 0], dash: true },
          { t: 'right', at: [23.4, 0], from: [50, 0], to: [23.4, 31.2] },
          { t: 'label', p: [36, 0], text: '50', dx: 0, dy: 12 },
          { t: 'label', p: [11.7, 15.6], text: '39', dx: -12, dy: -4 },
          { t: 'label', p: [36.7, 15.6], text: '41', dx: 12, dy: -4 },
          { t: 'label', p: [23.4, 15.6], text: '?', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [50, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [23.4, 31.2], label: 'E', dx: 0, dy: -12 },
        ],
      },
      choices: ['$31.2$', '$15.6$', '$40$', '$7.8$'],
      answer: 0,
      solution:
        'Heron first: $s = \\frac{39 + 41 + 50}{2} = 65$, so Area $= \\sqrt{65 \\cdot 26 \\cdot 24 \\cdot 15} = \\sqrt{608400} = 780$, and the altitude to $\\overline{FD}$ is $h = \\frac{2 \\cdot 780}{50} = 31.2$ ✓. Check a second, independent way with the foot of the altitude: put $D(0, 0)$ and $F(50, 0)$; then $E$ satisfies $x^2 + y^2 = 1521$ and $(x - 50)^2 + y^2 = 1681$, so subtracting gives $100x = 2340$, hence $x = 23.4$ and $y = \\sqrt{1521 - 547.56} = \\sqrt{973.44} = 31.2$ ✓. (The choice $15.6$ is DROPPING THE FACTOR OF $2$; the choice $40$ is THE ALTITUDE TO SIDE $\\overline{DE}$, since $\\frac{2 \\cdot 780}{39} = 40$; the choice $7.8$ is PUTTING THE $2$ ON THE WRONG SIDE, computing $\\frac{A}{2b}$.)',
    },
  ],

  // slot 11 — inradius of an isosceles triangle from base and legs.
  // Lane: 7.5 / 60/7 / 5.25.
  [
    {
      q: 'A circular pond is set inside an isosceles flower bed whose base is $30$ feet and whose equal sides are $25$ feet each, touching all three borders. What is the radius of the pond?',
      fig: {
        view: [-2.5, -2.5, 32.5, 22.5],
        alt: 'Isosceles triangle with base 30 and legs 25, with its inscribed circle',
        elems: [
          { t: 'poly', pts: [[0, 0], [30, 0], [15, 20]], fill: false },
          { t: 'circle', c: [15, 7.5], r: 7.5 },
          { t: 'label', p: [7.5, 0], text: '30', dx: 0, dy: 12 },
          { t: 'label', p: [7.5, 10], text: '25', dx: -10, dy: -6 },
          { t: 'label', p: [22.5, 10], text: '25', dx: 10, dy: -6 },
        ],
      },
      choices: ['$3.75$ feet', '$7.5$ feet', '$20$ feet', '$10$ feet'],
      answer: 1,
      solution:
        'The apex sits above the base midpoint, so half the base is $15$ and the height is $\\sqrt{25^2 - 15^2} = 20$ — a $15$-$20$-$25$ right triangle on each side. The area is $\\frac{1}{2} \\cdot 30 \\cdot 20 = 300$ and the semiperimeter is $s = \\frac{25 + 25 + 30}{2} = 40$, so $r = \\frac{300}{40} = 7.5$ feet ✓. Check a second, independent way with the exact center: on the axis at $(15, 7.5)$, its distance to the slanted border through $(0, 0)$ and $(15, 20)$ — the line $4x - 3y = 0$ — is $\\frac{|4 \\cdot 15 - 3 \\cdot 7.5|}{5} = \\frac{37.5}{5} = 7.5$ ✓, matching its height above the base. (The choice $3.75$ feet is DIVIDING THE AREA BY THE FULL PERIMETER; the choice $20$ feet is THE APEX HEIGHT, not the radius; the choice $10$ feet is DIVIDING THE AREA BY THE BASE.)',
    },
    {
      q: 'The cross-section of an A-frame cabin is an isosceles triangle: the floor spans $40$ feet, and the two sloped roof edges are $29$ feet each. A circular window is to be as large as possible, tangent to the floor line and both roof lines. Find its radius.',
      fig: {
        view: [-3, -3, 43, 24],
        alt: 'Isosceles triangle with base 40 and legs 29, with its inscribed circle',
        elems: [
          { t: 'poly', pts: [[0, 0], [40, 0], [20, 21]], fill: false },
          { t: 'circle', c: [20, 60 / 7], r: 60 / 7 },
          { t: 'label', p: [10, 0], text: '40', dx: 0, dy: 12 },
          { t: 'label', p: [10, 10.5], text: '29', dx: -10, dy: -6 },
          { t: 'label', p: [30, 10.5], text: '29', dx: 10, dy: -6 },
        ],
      },
      choices: ['$21$ feet', '$\\frac{30}{7}$ feet', '$10.5$ feet', '$\\frac{60}{7}$ feet'],
      answer: 3,
      solution:
        'The largest circle tangent to all three lines is the inscribed circle. Half the floor is $20$, so the ridge height is $\\sqrt{29^2 - 20^2} = \\sqrt{441} = 21$ — a $20$-$21$-$29$ right triangle on each side. Area $= \\frac{1}{2} \\cdot 40 \\cdot 21 = 420$ and $s = \\frac{29 + 29 + 40}{2} = 49$, so $r = \\frac{420}{49} = \\frac{60}{7}$ feet ✓. Check a second, independent way from the exact center $\\left(20, \\frac{60}{7}\\right)$: the roof line through $(0, 0)$ and $(20, 21)$ is $21x - 20y = 0$, and the distance to it is $\\frac{|21 \\cdot 20 - 20 \\cdot \\frac{60}{7}|}{29} = \\frac{1740/7}{29} = \\frac{60}{7}$ ✓. (The choice $\\frac{30}{7}$ feet is DIVIDING THE AREA BY THE FULL PERIMETER; the choice $21$ feet is THE RIDGE HEIGHT; the choice $10.5$ feet is DIVIDING THE AREA BY THE FLOOR span.)',
    },
    {
      q: 'A felt pennant is an isosceles triangle with base $14$ inches and equal edges $25$ inches. A circular patch is ironed on so that it touches all three edges of the pennant. What is the radius of the patch?',
      fig: {
        view: [-2, -2, 16, 26],
        alt: 'Tall isosceles triangle with base 14 and legs 25, with its inscribed circle',
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [7, 24]], fill: false },
          { t: 'circle', c: [7, 5.25], r: 5.25 },
          { t: 'label', p: [3.5, 0], text: '14', dx: 0, dy: 12 },
          { t: 'label', p: [3.5, 12], text: '25', dx: -10, dy: -6 },
          { t: 'label', p: [10.5, 12], text: '25', dx: 10, dy: -6 },
        ],
      },
      choices: ['$24$ inches', '$12$ inches', '$5.25$ inches', '$2.625$ inches'],
      answer: 2,
      solution:
        'A circle touching all three edges is the inscribed circle. Half the base is $7$, so the height is $\\sqrt{25^2 - 7^2} = \\sqrt{576} = 24$ — a $7$-$24$-$25$ right triangle on each side. Area $= \\frac{1}{2} \\cdot 14 \\cdot 24 = 168$ and $s = \\frac{25 + 25 + 14}{2} = 32$, so $r = \\frac{168}{32} = 5.25$ inches ✓. Check a second, independent way from the exact center $(7, 5.25)$: the slanted edge through $(0, 0)$ and $(7, 24)$ is $24x - 7y = 0$, and the distance to it is $\\frac{|24 \\cdot 7 - 7 \\cdot 5.25|}{25} = \\frac{131.25}{25} = 5.25$ ✓, the same as its height above the base. (The choice $2.625$ inches is DIVIDING THE AREA BY THE FULL PERIMETER; the choice $24$ inches is THE PENNANT HEIGHT; the choice $12$ inches is DIVIDING THE AREA BY THE BASE.)',
    },
  ],

  // slot 12 — distance from the incenter to the right-angle vertex, r√2.
  // Lane: 12√2 / 10√2 / 5√2.
  [
    {
      q: 'Right triangle $ABC$ has legs $AB = 56$ and $AC = 33$ meeting at the right angle $A$. Its inscribed circle has center $I$. How far is $I$ from vertex $A$?',
      fig: {
        view: [-4, -4, 60, 37],
        alt: 'Right triangle with legs 56 and 33, incircle of radius 12, dashed segment from the right-angle vertex to the incenter',
        elems: [
          { t: 'poly', pts: [[0, 0], [56, 0], [0, 33]], fill: false },
          { t: 'right', at: [0, 0], from: [56, 0], to: [0, 33] },
          { t: 'circle', c: [12, 12], r: 12 },
          { t: 'seg', a: [0, 0], b: [12, 12], dash: true },
          { t: 'label', p: [28, 0], text: '56', dx: 0, dy: 12 },
          { t: 'label', p: [0, 16.5], text: '33', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [56, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 33], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [12, 12], label: 'I', dx: 10, dy: -6 },
        ],
      },
      choices: ['$12\\sqrt{2}$', '$12$', '$32.5$', '$24$'],
      answer: 0,
      solution:
        'The hypotenuse is $\\sqrt{56^2 + 33^2} = \\sqrt{4225} = 65$, so the inradius is $r = \\frac{56 + 33 - 65}{2} = 12$. With $A$ at the origin and the legs on the axes, $I$ sits at $(12, 12)$, and $AI = \\sqrt{12^2 + 12^2} = 12\\sqrt{2}$ ✓. Check a second, independent way: the area is $\\frac{1}{2} \\cdot 56 \\cdot 33 = 924$ and $s = \\frac{56 + 33 + 65}{2} = 77$, so $r = \\frac{924}{77} = 12$ ✓ again — and since $I$ rides the bisector of the $90^\\circ$ angle at $A$, a $45^\\circ$ line, the diagonal to it is $r\\sqrt{2} = 12\\sqrt{2}$ ✓. (The choice $12$ is THE INRADIUS ITSELF, the distance to the sides rather than to the corner; the choice $32.5$ is THE CIRCUMRADIUS, measured from the hypotenuse midpoint instead; the choice $24$ is DOUBLING THE INRADIUS instead of stretching it by $\\sqrt{2}$.)',
    },
    {
      q: 'A shelf bracket is a right triangle with legs $28$ cm and $45$ cm. A circular clock face fits snugly inside the bracket, touching all three edges. How far is the center of the clock from the bracket’s square corner?',
      fig: {
        view: [-4, -4, 49, 32],
        alt: 'Right triangular bracket with legs 45 and 28, inscribed clock face of radius 10, dashed segment from the corner to its center',
        elems: [
          { t: 'poly', pts: [[0, 0], [45, 0], [0, 28]], fill: false },
          { t: 'right', at: [0, 0], from: [45, 0], to: [0, 28] },
          { t: 'circle', c: [10, 10], r: 10 },
          { t: 'seg', a: [0, 0], b: [10, 10], dash: true },
          { t: 'label', p: [22.5, 0], text: '45', dx: 0, dy: 12 },
          { t: 'label', p: [0, 14], text: '28', dx: -12, dy: 0 },
          { t: 'label', p: [5, 5], text: '?', dx: -4, dy: -10 },
          { t: 'point', p: [10, 10], label: 'I', dx: 10, dy: -6 },
        ],
      },
      choices: ['$10$ cm', '$26.5$ cm', '$10\\sqrt{2}$ cm', '$20$ cm'],
      answer: 2,
      solution:
        'A circle touching all three edges is the inscribed circle. The hypotenuse is $\\sqrt{28^2 + 45^2} = \\sqrt{2809} = 53$, so $r = \\frac{28 + 45 - 53}{2} = 10$, and with the square corner at the origin the center sits at $(10, 10)$ — distance $\\sqrt{100 + 100} = 10\\sqrt{2}$ cm from the corner ✓. Check a second, independent way: area $= \\frac{1}{2} \\cdot 28 \\cdot 45 = 630$ and $s = \\frac{28 + 45 + 53}{2} = 63$, so $r = \\frac{630}{63} = 10$ ✓, and the center lies on the corner’s $45^\\circ$ bisector, so the distance is $r\\sqrt{2}$ ✓. (The choice $10$ cm is THE RADIUS ITSELF, the distance to the edges; the choice $26.5$ cm is HALF THE HYPOTENUSE, the circumcenter’s distance to a vertex; the choice $20$ cm is DOUBLING THE RADIUS instead of stretching by $\\sqrt{2}$.)',
    },
    {
      q: 'In right triangle $KLM$, legs $KL = 60$ and $KM = 11$ meet at the right angle $K$. The bisectors of all three angles meet at point $J$. Find $KJ$.',
      fig: {
        view: [-3, -3, 63, 14],
        alt: 'Right triangle with legs 60 and 11, incircle of radius 5 centered at J, dashed segment from K to J',
        elems: [
          { t: 'poly', pts: [[0, 0], [60, 0], [0, 11]], fill: false },
          { t: 'right', at: [0, 0], from: [60, 0], to: [0, 11] },
          { t: 'circle', c: [5, 5], r: 5 },
          { t: 'seg', a: [0, 0], b: [5, 5], dash: true },
          { t: 'label', p: [30, 0], text: '60', dx: 0, dy: 12 },
          { t: 'label', p: [0, 5.5], text: '11', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'K', dx: -10, dy: 10 },
          { t: 'point', p: [60, 0], label: 'L', dx: 10, dy: 10 },
          { t: 'point', p: [0, 11], label: 'M', dx: -10, dy: -8 },
          { t: 'point', p: [5, 5], label: 'J', dx: 10, dy: -6 },
        ],
      },
      choices: ['$5$', '$5\\sqrt{2}$', '$30.5$', '$10$'],
      answer: 1,
      solution:
        'The meeting point of the three angle bisectors is the incenter. The hypotenuse is $\\sqrt{60^2 + 11^2} = \\sqrt{3721} = 61$, so the inradius is $r = \\frac{60 + 11 - 61}{2} = 5$, and with $K$ at the origin the incenter is $J(5, 5)$, giving $KJ = \\sqrt{25 + 25} = 5\\sqrt{2}$ ✓. Check a second, independent way: area $= \\frac{1}{2} \\cdot 60 \\cdot 11 = 330$ and $s = \\frac{60 + 11 + 61}{2} = 66$, so $r = \\frac{330}{66} = 5$ ✓ — and $J$ lies on the bisector of the right angle at $K$, a $45^\\circ$ ray, so $KJ = r\\sqrt{2} = 5\\sqrt{2}$ ✓. (The choice $5$ is THE INRADIUS, the distance from $J$ to each SIDE; the choice $30.5$ is HALF THE HYPOTENUSE, which measures from the circumcenter instead; the choice $10$ is DOUBLING THE INRADIUS instead of stretching by $\\sqrt{2}$.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 7,
  challenge,
}
