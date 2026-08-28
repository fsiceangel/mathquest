// Introduction to Geometry chapter 19 — variations for the CHALLENGE set.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - These are the hardest items in the chapter, so every solution names the
//    auxiliary line it draws or the variable it assigns before it computes
//    anything. Auxiliary segments are dashed in the figures, matching the
//    chapter’s convention that a dashed segment is one we added ourselves.
//  - Every keyed answer was worked twice along routes that share no steps, and
//    the two routes had to agree before the key was written: an isosceles
//    angle chase vs. an inscribed angle in a circle centered at a vertex
//    (slot 1); tangent lengths vs. the area-equals-inradius-times-semiperimeter
//    relation (slot 2); similar triangles vs. coordinates or a parallel through
//    a vertex (slot 3); triangle BIC vs. the angles around the incenter
//    (slot 4); the perpendicular from the center vs. coordinates on the circle
//    (slot 5); the isosceles chain vs. exterior angles counted the other way
//    (slot 6); a cut into rectangles vs. completing the bounding rectangle
//    (slot 7); the squared-sum identity vs. solving for the legs outright
//    (slot 8); the semicircle right angle vs. an isosceles radius triangle or a
//    Pythagorean triple (slot 9); a counterexample vs. a definition check
//    (slot 10); the four perpendiculars vs. coordinates (slot 11); the average
//    of the vertices vs. walking two thirds along a median (slot 12).
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution and marked ✗, in the order the distractors appear.
//  - Figures carry only what is given. The quantity a question asks for is
//    never labeled with its value — it is marked `?` or left unmarked.

const challenge = [
  // slot 1 — an equilateral triangle sharing a side with a square, and an angle
  // that only appears once two corners are joined. Second routes replace the
  // isosceles chase with the circle centered at a vertex of the square, whose
  // radius is the common side length.
  // Lane: inside, angle BEC / inside, angle EDC / outside, angle DEC.
  [
    {
      q: 'Equilateral triangle $ABE$ is drawn inside square $ABCD$ on the side $\\overline{AB}$, so that $E$ lies in the interior of the square. What is $\\angle BEC$?',
      fig: {
        view: [-1, -1, 5, 5],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [4, 4], [0, 4]], fill: false },
          { t: 'poly', pts: [[0, 0], [4, 0], [2, 3.464]], fill: false },
          { t: 'seg', a: [2, 3.464], b: [4, 4], dash: true },
          { t: 'angle', at: [2, 3.464], from: [4, 0], to: [4, 4], r: 0.6, label: '?' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [4, 4], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 4], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [2, 3.464], label: 'E', dx: -12, dy: 12 },
        ],
      },
      choices: ['$75^\\circ$', '$60^\\circ$', '$30^\\circ$', '$105^\\circ$'],
      answer: 0,
      solution:
        'Draw the auxiliary segment $\\overline{EC}$ (dashed) and read off what the two shapes share: every side of the square and every side of the equilateral triangle is the same length, so $BE = BA = BC$. That makes triangle $BEC$ isosceles with its apex at $B$, and the apex angle is whatever is left of the square’s corner once the equilateral triangle has taken its $60^\\circ$: $\\angle EBC = 90^\\circ - 60^\\circ = 30^\\circ$. The two base angles share the rest equally, so $\\angle BEC = \\frac{180^\\circ - 30^\\circ}{2} = 75^\\circ$ ✓. Check a second, independent way using a circle instead of an isosceles triangle. Because $BA = BE = BC$, the points $A$, $E$, and $C$ all lie on the circle centered at $B$ whose radius is the side of the square. Its central angle $\\angle ABC$ is the square’s corner, $90^\\circ$, and $E$ sits on the short arc from $A$ to $C$, so the arc that the inscribed angle $\\angle AEC$ intercepts is the long one, $360^\\circ - 90^\\circ = 270^\\circ$. An inscribed angle is half its arc, so $\\angle AEC = 135^\\circ$. Ray $EB$ runs inside that angle and $\\angle AEB = 60^\\circ$ because triangle $ABE$ is equilateral, leaving $\\angle BEC = 135^\\circ - 60^\\circ = 75^\\circ$ ✓. (The choice $60^\\circ$ is TREATING TRIANGLE $BEC$ AS EQUILATERAL TOO, borrowing an angle from the wrong triangle ✗; the choice $30^\\circ$ is REPORTING THE APEX ANGLE $\\angle EBC$ instead of a base angle ✗; the choice $105^\\circ$ is TAKING THE SUPPLEMENT $180^\\circ - 75^\\circ$, as though $\\angle BEC$ and the base angle at $C$ lay on one line ✗.)',
    },
    {
      q: 'Equilateral triangle $ABE$ is drawn inside square $ABCD$ on the side $\\overline{AB}$, with $E$ in the interior of the square. What is $\\angle EDC$?',
      fig: {
        view: [-1, -1, 5, 5],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [4, 4], [0, 4]], fill: false },
          { t: 'poly', pts: [[0, 0], [4, 0], [2, 3.464]], fill: false },
          { t: 'seg', a: [0, 4], b: [2, 3.464], dash: true },
          { t: 'angle', at: [0, 4], from: [2, 3.464], to: [4, 4], r: 0.7, label: '?' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [4, 4], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 4], label: 'D', dx: -12, dy: -6 },
          { t: 'point', p: [2, 3.464], label: 'E', dx: 4, dy: 15 },
        ],
      },
      choices: ['$30^\\circ$', '$75^\\circ$', '$15^\\circ$', '$45^\\circ$'],
      answer: 2,
      solution:
        'Draw the auxiliary segment $\\overline{DE}$ (dashed) and work in triangle $ADE$. The square gives $AD = AB$ and the equilateral triangle gives $AE = AB$, so $AD = AE$ and triangle $ADE$ is isosceles with apex at $A$. Its apex angle is the part of the square’s corner left over after the $60^\\circ$: $\\angle DAE = 90^\\circ - 60^\\circ = 30^\\circ$, so each base angle is $\\frac{180^\\circ - 30^\\circ}{2} = 75^\\circ$, giving $\\angle ADE = 75^\\circ$. The corner of the square at $D$ is $90^\\circ$ and $\\overline{DE}$ splits it, so $\\angle EDC = 90^\\circ - 75^\\circ = 15^\\circ$ ✓. Check a second, independent way with a circle and the square’s diagonal, using no isosceles triangle at all. Since $AB = AE = AD$, the points $B$, $E$, and $D$ lie on the circle centered at $A$ with that radius. The central angle $\\angle BAE$ is $60^\\circ$, and $D$ lies off the short arc from $B$ to $E$, so the inscribed angle at $D$ is half of it: $\\angle BDE = 30^\\circ$. The diagonal $\\overline{DB}$ of a square cuts its corner in half, so $\\angle BDC = 45^\\circ$. Subtracting, $\\angle EDC = 45^\\circ - 30^\\circ = 15^\\circ$ ✓. (The choice $30^\\circ$ is REPORTING THE APEX ANGLE $\\angle DAE$ rather than the angle at $D$ ✗; the choice $75^\\circ$ is STOPPING AT $\\angle ADE$ and never subtracting it from the square’s corner ✗; the choice $45^\\circ$ is HALVING THE CORNER AT $D$, as though $\\overline{DE}$ were the diagonal of the square ✗.)',
    },
    {
      q: 'Equilateral triangle $ABE$ is drawn on the side $\\overline{AB}$ of square $ABCD$, but this time outside the square, so that $E$ and the square lie on opposite sides of line $AB$. What is $\\angle DEC$?',
      fig: {
        view: [-1, -4.6, 5, 5],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [4, 4], [0, 4]], fill: false },
          { t: 'poly', pts: [[0, 0], [4, 0], [2, -3.464]], fill: false },
          { t: 'seg', a: [0, 4], b: [2, -3.464], dash: true },
          { t: 'seg', a: [4, 4], b: [2, -3.464], dash: true },
          { t: 'angle', at: [2, -3.464], from: [0, 4], to: [4, 4], r: 1.2, label: '?' },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: -4 },
          { t: 'point', p: [4, 0], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [4, 4], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 4], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [2, -3.464], label: 'E', dx: 0, dy: 16 },
        ],
      },
      choices: ['$60^\\circ$', '$30^\\circ$', '$15^\\circ$', '$150^\\circ$'],
      answer: 1,
      solution:
        'Draw both auxiliary segments $\\overline{DE}$ and $\\overline{CE}$ (dashed). In triangle $ADE$ the square gives $AD = AB$ and the equilateral triangle gives $AE = AB$, so $AD = AE$; the apex angle at $A$ is now the square’s corner PLUS the equilateral angle, because the triangle has moved to the other side: $\\angle DAE = 90^\\circ + 60^\\circ = 150^\\circ$. Its base angles are each $\\frac{180^\\circ - 150^\\circ}{2} = 15^\\circ$, so $\\angle AED = 15^\\circ$, and the same argument on the right gives $\\angle BEC = 15^\\circ$. Those two slivers sit inside the $60^\\circ$ angle $\\angle AEB$, one on each side of $\\angle DEC$, so $\\angle DEC = 60^\\circ - 15^\\circ - 15^\\circ = 30^\\circ$ ✓. Check a second, independent way with two circles and no isosceles triangle. Since $AB = AD = AE$, the points $B$, $D$, $E$ lie on the circle centered at $A$; its central angle $\\angle DAB = 90^\\circ$ and $E$ lies off that arc, so the inscribed angle $\\angle DEB = 45^\\circ$. Since $BA = BC = BE$, the points $A$, $C$, $E$ lie on the circle centered at $B$; its central angle $\\angle ABC = 90^\\circ$ and $E$ lies off that arc too, so $\\angle AEC = 45^\\circ$. Those two angles together cover $\\angle AEB$ once and the overlap $\\angle DEC$ once more, so $45^\\circ + 45^\\circ = 60^\\circ + \\angle DEC$, giving $\\angle DEC = 30^\\circ$ ✓. (The choice $60^\\circ$ is REPORTING $\\angle AEB$, the equilateral triangle’s own angle, instead of the piece between $\\overline{ED}$ and $\\overline{EC}$ ✗; the choice $15^\\circ$ is STOPPING AT ONE SLIVER $\\angle AED$ ✗; the choice $150^\\circ$ is SOLVING THE INSIDE VERSION, where the apex angle at $A$ is $30^\\circ$ instead of $150^\\circ$ ✗.)',
    },
  ],

  // slot 2 — the incircle of a right triangle. Route one is the r-by-r square
  // at the right angle plus equal tangent lengths; route two is
  // area = inradius x semiperimeter (v1, v2) or a tangent-length bookkeeping
  // that never solves for the legs (v3).
  // Lane: legs 12 and 35 / legs 20 and 21 / hypotenuse 25 with r = 4.
  [
    {
      q: 'A circle is inscribed in a right triangle whose legs are $12$ and $35$. What is the radius of the circle?',
      fig: {
        view: [-2.5, -2.5, 38.5, 15.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [35, 0], [0, 12]], fill: false },
          { t: 'circle', c: [5, 5], r: 5 },
          { t: 'right', at: [0, 0], from: [35, 0], to: [0, 12] },
          { t: 'seg', a: [5, 5], b: [5, 0], dash: true },
          { t: 'right', at: [5, 0], from: [35, 0], to: [5, 5] },
          { t: 'label', p: [17.5, 0], text: '35', dx: 0, dy: 15 },
          { t: 'label', p: [0, 6], text: '12', dx: -13, dy: 0 },
          { t: 'label', p: [5, 2.5], text: '?', dx: 11, dy: 4 },
        ],
      },
      choices: ['$6$', '$5$', '$10$', '$11.5$'],
      answer: 1,
      solution:
        'Assign the variable first: let the radius be $r$. Draw the two radii to the points where the circle touches the legs (one of them dashed). Each is perpendicular to its leg, so together with the right angle they box off an $r \\times r$ square in the corner, which means the tangent length from the right-angle vertex is $r$ along both legs. Equal tangents from each of the other two vertices then rebuild the hypotenuse as $(12 - r) + (35 - r)$. The hypotenuse is $\\sqrt{12^2 + 35^2} = \\sqrt{144 + 1225} = \\sqrt{1369} = 37$, so $47 - 2r = 37$ and $r = 5$ ✓. Check a second, independent way with areas, drawing no tangent lengths at all. Join the center to all three vertices; the three triangles that result stand on the three sides and each has height $r$, so the whole area is $\\frac{1}{2}r(12 + 35 + 37) = 42r$. But the area of a right triangle is half the product of its legs, $\\frac{1}{2} \\cdot 12 \\cdot 35 = 210$. So $42r = 210$ and $r = 5$ ✓. (The choice $6$ is HALVING THE SHORTER LEG, as if the circle spanned it ✗; the choice $10$ is FORGETTING TO HALVE, stopping at $12 + 35 - 37$ ✗; the choice $11.5$ is HALVING THE DIFFERENCE OF THE LEGS, $\\frac{35 - 12}{2}$, which the hypotenuse never enters ✗.)',
    },
    {
      q: 'A circle is inscribed in a right triangle whose legs are $16$ and $30$. What is the radius of the circle?',
      fig: {
        view: [-2, -2, 34, 20],
        elems: [
          { t: 'poly', pts: [[0, 0], [30, 0], [0, 16]], fill: false },
          { t: 'circle', c: [6, 6], r: 6 },
          { t: 'right', at: [0, 0], from: [30, 0], to: [0, 16] },
          { t: 'seg', a: [6, 6], b: [6, 0], dash: true },
          { t: 'right', at: [6, 0], from: [30, 0], to: [6, 6] },
          { t: 'label', p: [15, 0], text: '30', dx: 0, dy: 15 },
          { t: 'label', p: [0, 8], text: '16', dx: -13, dy: 0 },
          { t: 'label', p: [6, 3], text: '?', dx: 12, dy: 4 },
        ],
      },
      choices: ['$8$', '$12$', '$15$', '$6$'],
      answer: 3,
      solution:
        'Let the radius be $r$ and draw the radii to the two points of tangency on the legs (dashed). They meet their legs at right angles, so with the corner they enclose an $r \\times r$ square and the tangent length from the right-angle vertex is $r$ on each leg. The hypotenuse is then $(16 - r) + (30 - r)$, and its true length is $\\sqrt{16^2 + 30^2} = \\sqrt{256 + 900} = \\sqrt{1156} = 34$. So $46 - 2r = 34$ and $r = 6$ ✓. Check a second, independent way through area, naming no tangent length at all. Joining the center to the three vertices cuts the triangle into three pieces of height $r$ standing on the three sides, so the area is $\\frac{1}{2}r(16 + 30 + 34) = 40r$; the area is also $\\frac{1}{2} \\cdot 16 \\cdot 30 = 240$. Hence $40r = 240$ and $r = 6$ ✓. (The choice $8$ is HALVING A LEG, treating the circle as though it spanned the side of length $16$ ✗; the choice $12$ is FORGETTING TO HALVE, stopping at $16 + 30 - 34$ ✗; the choice $15$ is HALVING THE OTHER LEG, which has the same flaw as halving the first ✗.)',
    },
    {
      q: 'A right triangle has hypotenuse $25$, and the circle inscribed in it has radius $4$. What is the perimeter of the triangle?',
      fig: {
        view: [-2, -2, 24.5, 12],
        elems: [
          { t: 'poly', pts: [[0, 0], [22.844, 0], [0, 10.156]], fill: false },
          { t: 'circle', c: [4, 4], r: 4 },
          { t: 'right', at: [0, 0], from: [22.844, 0], to: [0, 10.156] },
          { t: 'seg', a: [4, 4], b: [4, 0], dash: true },
          { t: 'right', at: [4, 0], from: [22.844, 0], to: [4, 4] },
          { t: 'label', p: [11.422, 5.078], text: '25', dx: 14, dy: -2 },
          { t: 'label', p: [4, 2], text: '4', dx: 11, dy: 4 },
        ],
      },
      choices: ['$54$', '$33$', '$58$', '$66$'],
      answer: 2,
      solution:
        'Name the tangent lengths rather than the sides. From the right-angle vertex the two radii drawn to the legs (one is dashed) form a $4 \\times 4$ square with the corner, so both tangent lengths there are $4$. Call the tangent lengths from the two acute vertices $x$ and $y$; equal tangents make the hypotenuse $x + y = 25$, and the legs are $x + 4$ and $y + 4$. The perimeter is $(x + 4) + (y + 4) + (x + y) = 2(x + y) + 8 = 50 + 8 = 58$ ✓. Check a second, independent way with the inradius relation, never naming a tangent length. For any triangle the area equals the inradius times half the perimeter, so with legs $a$ and $b$, $\\frac{1}{2}ab = 4 \\cdot \\frac{a + b + 25}{2}$, that is, $ab = 4a + 4b + 100$. The Pythagorean Theorem gives $a^2 + b^2 = 625$, so $(a + b)^2 = 625 + 2ab = 625 + 8(a + b) + 200$. Writing $s = a + b$ turns that into $s^2 - 8s - 825 = 0$, whose positive root is $s = \\frac{8 + \\sqrt{64 + 3300}}{2} = \\frac{8 + 58}{2} = 33$. The perimeter is $33 + 25 = 58$ ✓. (The choice $54$ is FORGETTING TO DOUBLE THE RADIUS, using $a + b = 25 + 4$ ✗; the choice $33$ is STOPPING AT THE SUM OF THE LEGS and never adding the hypotenuse ✗; the choice $66$ is DOUBLING THE RADIUS TWICE, using $a + b = 25 + 4 \\cdot 4$ ✗.)',
    },
  ],

  // slot 3 — the diagonals of a trapezoid cut each other in the ratio of the
  // bases. Second routes: coordinates placed on the long base (v1, v2), and a
  // parallel through a vertex that turns the trapezoid into a parallelogram
  // plus one triangle (v3).
  // Lane: 10 and 4 / 14 and 6 / 21 and 7 with the diagonal given.
  [
    {
      q: 'Trapezoid $ABCD$ has $\\overline{AB} \\parallel \\overline{DC}$ with $AB = 10$ and $DC = 4$. The diagonals meet at $E$. What is the ratio $AE : EC$?',
      fig: {
        view: [-1, -1, 11, 6],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [6, 5], [2, 5]], fill: false },
          { t: 'seg', a: [0, 0], b: [6, 5], dash: true },
          { t: 'seg', a: [10, 0], b: [2, 5], dash: true },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 15 },
          { t: 'label', p: [4, 5], text: '4', dx: 0, dy: -9 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 5], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [2, 5], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [4.2857, 3.5714], label: 'E', dx: 12, dy: 6 },
        ],
      },
      choices: ['$2:5$', '$3:2$', '$5:2$', '$25:4$'],
      answer: 2,
      solution:
        'The diagonals are the extra lines, and once both are drawn the parallel bases hand over two pairs of equal angles: $\\angle EAB = \\angle ECD$ and $\\angle EBA = \\angle EDC$ are alternate interior angles across the parallels, so $\\triangle EAB \\sim \\triangle ECD$ by AA. Corresponding sides of similar triangles are in one fixed ratio, and $\\overline{AE}$ in the big triangle corresponds to $\\overline{CE}$ in the small one, so $AE : EC = AB : CD = 10 : 4 = 5 : 2$ ✓. Check a second, independent way with coordinates, quoting no similar triangles. Put $A$ at $(0, 0)$ and $B$ at $(10, 0)$, and let the short base sit at height $5$, say $D = (2, 5)$ and $C = (6, 5)$. A point of $\\overline{AC}$ is $(6t, 5t)$ and a point of $\\overline{BD}$ is $(10 - 8u, 5u)$. Equal heights force $t = u$, and then $6t = 10 - 8t$ gives $t = \\frac{5}{7}$. So $E$ is $\\frac{5}{7}$ of the way from $A$ to $C$, leaving $\\frac{2}{7}$ beyond it: $AE : EC = 5 : 2$ ✓. (The choice $2:5$ is REVERSING THE RATIO, attaching the long base to the short piece ✗; the choice $3:2$ is SUBTRACTING INSTEAD OF DIVIDING, comparing $10 - 4$ with $4$ ✗; the choice $25:4$ is SQUARING THE RATIO, which measures areas rather than lengths ✗.)',
    },
    {
      q: 'In trapezoid $ABCD$ the bases satisfy $\\overline{AB} \\parallel \\overline{DC}$, with $AB = 14$ and $DC = 6$, and the diagonals cross at $E$. Find the ratio $AE : EC$.',
      fig: {
        view: [-1, -1, 15, 7],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [10, 6], [4, 6]], fill: false },
          { t: 'seg', a: [0, 0], b: [10, 6], dash: true },
          { t: 'seg', a: [14, 0], b: [4, 6], dash: true },
          { t: 'label', p: [7, 0], text: '14', dx: 0, dy: 15 },
          { t: 'label', p: [7, 6], text: '6', dx: 0, dy: -9 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [14, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [10, 6], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [4, 6], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [7, 4.2], label: 'E', dx: 12, dy: 6 },
        ],
      },
      choices: ['$7:3$', '$3:7$', '$4:3$', '$49:9$'],
      answer: 0,
      solution:
        'Draw both diagonals. The parallel bases make $\\angle EAB = \\angle ECD$ and $\\angle EBA = \\angle EDC$ as alternate interior angles, so $\\triangle EAB \\sim \\triangle ECD$ by AA. The scale factor between them is the ratio of the bases, $\\frac{14}{6} = \\frac{7}{3}$, and $\\overline{AE}$ and $\\overline{CE}$ are matching sides, so $AE : EC = 7 : 3$ ✓. Check a second, independent way with coordinates and no similarity. Set $A = (0, 0)$, $B = (14, 0)$, and place the short base at height $6$: $D = (4, 6)$, $C = (10, 6)$. Points of $\\overline{AC}$ look like $(10t, 6t)$ and points of $\\overline{BD}$ look like $(14 - 10u, 6u)$; matching heights gives $t = u$, and $10t = 14 - 10t$ gives $t = \\frac{7}{10}$. So $E$ divides $\\overline{AC}$ into $\\frac{7}{10}$ and $\\frac{3}{10}$, that is $7 : 3$ ✓. (The choice $3:7$ is REVERSING THE RATIO, pairing the long base with the short piece ✗; the choice $4:3$ is SUBTRACTING INSTEAD OF DIVIDING, comparing $14 - 6$ with $6$ ✗; the choice $49:9$ is SQUARING THE RATIO, which belongs to areas, not to lengths ✗.)',
    },
    {
      q: 'Trapezoid $ABCD$ has $\\overline{AB} \\parallel \\overline{DC}$ with $AB = 21$ and $DC = 7$, and the diagonal $\\overline{AC}$ has length $28$. The diagonals meet at $E$. How long is $\\overline{AE}$?',
      choices: ['$7$', '$14$', '$28$', '$21$'],
      answer: 3,
      solution:
        'Draw the second diagonal $\\overline{BD}$ so the two of them cross at $E$. The parallel bases give $\\angle EAB = \\angle ECD$ and $\\angle EBA = \\angle EDC$, so $\\triangle EAB \\sim \\triangle ECD$ by AA with scale factor $\\frac{21}{7} = 3$. Then $AE = 3 \\cdot EC$, and since $AE + EC = AC = 28$, we get $4 \\cdot EC = 28$, so $EC = 7$ and $AE = 21$ ✓. Check a second, independent way with an auxiliary parallel line instead of the ratio of the bases. Through $D$ draw the line parallel to $\\overline{AC}$, meeting line $AB$ beyond $A$ at a point $F$. Then $AFDC$ has both pairs of opposite sides parallel, so it is a parallelogram and $AF = DC = 7$ and $FD = CA = 28$. Now look at triangle $FBD$: the segment $\\overline{AE}$ lies on $\\overline{AC}$, which is parallel to $\\overline{FD}$, so triangle $BAE$ is similar to triangle $BFD$. Their scale factor is $\\frac{BA}{BF} = \\frac{21}{21 + 7} = \\frac{3}{4}$, so $AE = \\frac{3}{4} \\cdot 28 = 21$ ✓. (The choice $7$ is REPORTING THE OTHER PIECE, $EC$, instead of the one asked for ✗; the choice $14$ is HALVING THE DIAGONAL, as though the diagonals of a trapezoid bisected each other ✗; the choice $28$ is FORGETTING TO SPLIT THE DIAGONAL AT ALL and handing back its whole length ✗.)',
    },
  ],

  // slot 4 — the angle at the incenter. Route one works inside triangle BIC;
  // route two adds up the three angles around I, using triangles ABI and ACI
  // and never entering triangle BIC.
  // Lane: angle A = 50 / angle A = 68 / angle BIC = 130 reversed.
  [
    {
      q: 'In triangle $ABC$, $\\angle A = 50^\\circ$ and $I$ is the incenter, where the three angle bisectors meet. Find $\\angle BIC$.',
      fig: {
        view: [-0.8, -0.8, 6.8, 7.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [3.68, 6.373]], fill: false },
          { t: 'seg', a: [0, 0], b: [3.288, 1.899], dash: true },
          { t: 'seg', a: [6, 0], b: [3.288, 1.899], dash: true },
          { t: 'seg', a: [3.68, 6.373], b: [3.288, 1.899], dash: true },
          { t: 'angle', at: [3.68, 6.373], from: [0, 0], to: [6, 0], r: 1, label: '50' },
          { t: 'angle', at: [3.288, 1.899], from: [0, 0], to: [6, 0], r: 0.5, label: '?' },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [3.68, 6.373], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [3.288, 1.899], label: 'I', dx: 13, dy: -2 },
        ],
      },
      choices: ['$130^\\circ$', '$140^\\circ$', '$65^\\circ$', '$115^\\circ$'],
      answer: 3,
      solution:
        'Assign variables to the half-angles: let $\\angle IBC = \\beta$ and $\\angle ICB = \\gamma$, so the full angles are $\\angle B = 2\\beta$ and $\\angle C = 2\\gamma$. The angle sum of triangle $ABC$ gives $2\\beta + 2\\gamma = 180^\\circ - 50^\\circ = 130^\\circ$, so $\\beta + \\gamma = 65^\\circ$. Triangle $BIC$ contains exactly those two half-angles, so $\\angle BIC = 180^\\circ - 65^\\circ = 115^\\circ$ ✓. Check a second, independent way by going around the incenter instead of into triangle $BIC$. In triangle $ABI$ the angles at $A$ and $B$ are halves, so $\\angle AIB = 180^\\circ - \\frac{\\angle A}{2} - \\frac{\\angle B}{2}$, and likewise $\\angle AIC = 180^\\circ - \\frac{\\angle A}{2} - \\frac{\\angle C}{2}$. The three angles at $I$ fill a full turn, so $\\angle BIC = 360^\\circ - \\angle AIB - \\angle AIC = \\angle A + \\frac{\\angle B + \\angle C}{2} = 50^\\circ + \\frac{130^\\circ}{2} = 115^\\circ$ ✓. (The choice $130^\\circ$ is TAKING THE SUPPLEMENT OF $\\angle A$, which is $\\angle B + \\angle C$, not the angle at $I$ ✗; the choice $140^\\circ$ is ADDING THE WHOLE ANGLE $A$ TO $90^\\circ$ instead of half of it ✗; the choice $65^\\circ$ is REPORTING $\\beta + \\gamma$ and forgetting the last subtraction from $180^\\circ$ ✗.)',
    },
    {
      q: 'The incenter of triangle $ABC$ is $I$, and $\\angle A = 68^\\circ$. What is $\\angle BIC$?',
      fig: {
        view: [-0.8, -0.8, 6.8, 5.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [3.226, 4.439]], fill: false },
          { t: 'seg', a: [0, 0], b: [3.126, 1.593], dash: true },
          { t: 'seg', a: [6, 0], b: [3.126, 1.593], dash: true },
          { t: 'seg', a: [3.226, 4.439], b: [3.126, 1.593], dash: true },
          { t: 'angle', at: [3.226, 4.439], from: [0, 0], to: [6, 0], r: 0.9, label: '68' },
          { t: 'angle', at: [3.126, 1.593], from: [0, 0], to: [6, 0], r: 0.45, label: '?' },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [3.226, 4.439], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [3.126, 1.593], label: 'I', dx: 13, dy: -2 },
        ],
      },
      choices: ['$112^\\circ$', '$124^\\circ$', '$158^\\circ$', '$56^\\circ$'],
      answer: 1,
      solution:
        'Name the half-angles: $\\angle IBC = \\beta$ and $\\angle ICB = \\gamma$, so $\\angle B = 2\\beta$ and $\\angle C = 2\\gamma$. From the angle sum of the whole triangle, $2\\beta + 2\\gamma = 180^\\circ - 68^\\circ = 112^\\circ$, hence $\\beta + \\gamma = 56^\\circ$, and inside triangle $BIC$ that leaves $\\angle BIC = 180^\\circ - 56^\\circ = 124^\\circ$ ✓. Check a second, independent way using the other two triangles at $I$. Triangle $ABI$ gives $\\angle AIB = 180^\\circ - \\frac{\\angle A}{2} - \\frac{\\angle B}{2}$ and triangle $ACI$ gives $\\angle AIC = 180^\\circ - \\frac{\\angle A}{2} - \\frac{\\angle C}{2}$. Since the three angles at $I$ complete a full turn of $360^\\circ$, $\\angle BIC = \\angle A + \\frac{\\angle B + \\angle C}{2} = 68^\\circ + 56^\\circ = 124^\\circ$ ✓. (The choice $112^\\circ$ is REPORTING $\\angle B + \\angle C$, the supplement of $\\angle A$, rather than the angle at $I$ ✗; the choice $158^\\circ$ is ADDING THE WHOLE ANGLE $A$ TO $90^\\circ$ instead of half of it ✗; the choice $56^\\circ$ is STOPPING AT $\\beta + \\gamma$ without subtracting from $180^\\circ$ ✗.)',
    },
    {
      q: 'In triangle $ABC$ the angle bisectors meet at $I$, and $\\angle BIC = 130^\\circ$. Find $\\angle A$.',
      fig: {
        view: [-0.8, -0.8, 6.8, 4.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [2.471, 3.529]], fill: false },
          { t: 'seg', a: [0, 0], b: [2.659, 1.384], dash: true },
          { t: 'seg', a: [6, 0], b: [2.659, 1.384], dash: true },
          { t: 'seg', a: [2.471, 3.529], b: [2.659, 1.384], dash: true },
          { t: 'angle', at: [2.659, 1.384], from: [0, 0], to: [6, 0], r: 0.45, label: '130' },
          { t: 'angle', at: [2.471, 3.529], from: [0, 0], to: [6, 0], r: 0.8, label: '?' },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [2.471, 3.529], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [2.659, 1.384], label: 'I', dx: 13, dy: -2 },
        ],
      },
      choices: ['$80^\\circ$', '$50^\\circ$', '$65^\\circ$', '$40^\\circ$'],
      answer: 0,
      solution:
        'Work backwards along the same chain. Let $\\angle IBC = \\beta$ and $\\angle ICB = \\gamma$. Triangle $BIC$ gives $\\beta + \\gamma = 180^\\circ - 130^\\circ = 50^\\circ$, and those are halves, so the full angles satisfy $\\angle B + \\angle C = 100^\\circ$. The angle sum of triangle $ABC$ then leaves $\\angle A = 180^\\circ - 100^\\circ = 80^\\circ$ ✓. Check a second, independent way with the two other triangles at $I$, never entering triangle $BIC$. Triangle $ABI$ gives $\\angle AIB = 180^\\circ - \\frac{\\angle A + \\angle B}{2}$ and triangle $ACI$ gives $\\angle AIC = 180^\\circ - \\frac{\\angle A + \\angle C}{2}$. Those two together with $130^\\circ$ make a full turn, so $\\angle AIB + \\angle AIC = 230^\\circ$, that is $360^\\circ - \\frac{2\\angle A + \\angle B + \\angle C}{2} = 230^\\circ$. Since $\\angle A + \\angle B + \\angle C = 180^\\circ$, the fraction is $\\frac{\\angle A + 180^\\circ}{2}$, so $\\frac{\\angle A + 180^\\circ}{2} = 130^\\circ$ and $\\angle A = 80^\\circ$ ✓. (The choice $50^\\circ$ is TAKING THE SUPPLEMENT OF $130^\\circ$, which is $\\beta + \\gamma$, and calling it $\\angle A$ ✗; the choice $65^\\circ$ is HALVING $130^\\circ$ ✗; the choice $40^\\circ$ is STOPPING AT HALF OF $\\angle A$, the value $130^\\circ - 90^\\circ$ ✗.)',
    },
  ],

  // slot 5 — a chord and the perpendicular from the center. Route one drops
  // that auxiliary perpendicular and works in the half-chord right triangle;
  // route two draws the diameter from one endpoint, uses the semicircle right
  // angle, and finishes with a midline, never naming the half chord.
  [
    {
      q: 'A chord of length $30$ is drawn in a circle of radius $25$. How far is the chord from the center of the circle?',
      fig: {
        view: [-6, -6, 6, 6.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'seg', a: [-3, 4], b: [3, 4] },
          { t: 'seg', a: [0, 0], b: [0, 4], dash: true },
          { t: 'seg', a: [0, 0], b: [3, 4] },
          { t: 'right', at: [0, 4], from: [0, 0], to: [3, 4] },
          { t: 'label', p: [0, 4], text: '30', dx: 0, dy: -9 },
          { t: 'label', p: [1.5, 2], text: '25', dx: 16, dy: 4 },
          { t: 'label', p: [0, 2], text: '?', dx: -12, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: -14, dy: 14 },
        ],
      },
      choices: ['$15$', '$20$', '$10$', '$25$'],
      answer: 1,
      solution:
        'Assign the variable: let $d$ be the distance from the center $O$ to the chord, and draw the auxiliary perpendicular from $O$ to the chord (dashed). That perpendicular bisects the chord, because the two radii to the endpoints make an isosceles triangle and the perpendicular from its apex hits the base at its midpoint. So one half of the chord is $15$, and the right triangle with legs $d$ and $15$ and hypotenuse $25$ gives $d^2 = 625 - 225 = 400$, so $d = 20$ ✓. Check a second, independent way, without cutting the chord at all. Call the chord $\\overline{AB}$ and draw the auxiliary diameter from $A$ through $O$ to the far point $A\'$. Since $\\overline{AA\'}$ is a diameter, $\\angle ABA\' = 90^\\circ$, so $BA\' = \\sqrt{50^2 - 30^2} = \\sqrt{1600} = 40$. Now $O$ is the midpoint of $\\overline{AA\'}$ and the foot of the perpendicular is the midpoint of $\\overline{AB}$, so the segment joining them is a midline of triangle $ABA\'$ and measures half of $BA\'$, namely $20$ ✓. (The choice $15$ is HALF THE CHORD, which is the leg you build and not the distance ✗; the choice $10$ is SUBTRACTING $15$ FROM $25$ instead of using the right triangle ✗; the choice $25$ is THE RADIUS ITSELF ✗.)',
    },
    {
      q: 'A chord of length $96$ is drawn in a circle of radius $50$. How far is the chord from the center of the circle?',
      fig: {
        view: [-6, -6, 6, 6.2],
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'seg', a: [-4.8, 1.4], b: [4.8, 1.4] },
          { t: 'seg', a: [0, 0], b: [0, 1.4], dash: true },
          { t: 'seg', a: [0, 0], b: [4.8, 1.4] },
          { t: 'right', at: [0, 1.4], from: [0, 0], to: [4.8, 1.4] },
          { t: 'label', p: [0, 1.4], text: '96', dx: 0, dy: -9 },
          { t: 'label', p: [2.4, 0.7], text: '50', dx: 8, dy: 16 },
          { t: 'label', p: [0, 0.7], text: '?', dx: -11, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: -14, dy: 16 },
        ],
      },
      choices: ['$48$', '$2$', '$50$', '$14$'],
      answer: 3,
      solution:
        'Assign the variable: let $d$ be the distance from the center $O$ to the chord, and drop the auxiliary perpendicular from $O$ (dashed). The two radii to the endpoints make an isosceles triangle, so that perpendicular lands on the midpoint of the chord and one half is $48$. Then $d^2 = 50^2 - 48^2 = 2500 - 2304 = 196$, so $d = 14$ ✓. Check a second, independent way, leaving the chord whole. Name the chord $\\overline{AB}$ and draw the auxiliary diameter from $A$ through $O$ to the far point $A\'$. The diameter forces $\\angle ABA\' = 90^\\circ$, so $BA\' = \\sqrt{100^2 - 96^2} = \\sqrt{10000 - 9216} = \\sqrt{784} = 28$. The center is the midpoint of $\\overline{AA\'}$ and the foot of the perpendicular is the midpoint of $\\overline{AB}$, so the segment between them is a midline and measures $\\frac{28}{2} = 14$ ✓. (The choice $48$ is HALF THE CHORD reported as the distance ✗; the choice $2$ is SUBTRACTING $48$ FROM $50$ instead of using the right triangle ✗; the choice $50$ is THE RADIUS ITSELF ✗.)',
    },
    {
      q: 'A chord of a circle of radius $41$ lies $9$ units from the center. How long is that chord?',
      fig: {
        view: [-6, -6, 6, 6.2],
        elems: [
          { t: 'circle', c: [0, 0], r: 5.125 },
          { t: 'seg', a: [-5, 1.125], b: [5, 1.125] },
          { t: 'seg', a: [0, 0], b: [0, 1.125], dash: true },
          { t: 'seg', a: [0, 0], b: [5, 1.125] },
          { t: 'right', at: [0, 1.125], from: [0, 0], to: [5, 1.125] },
          { t: 'label', p: [2.5, 1.125], text: '?', dx: 0, dy: -9 },
          { t: 'label', p: [2.5, 0.5625], text: '41', dx: 8, dy: 16 },
          { t: 'label', p: [0, 0.5625], text: '9', dx: -11, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: -14, dy: 16 },
        ],
      },
      choices: ['$40$', '$32$', '$80$', '$50$'],
      answer: 2,
      solution:
        'Assign the variable: let $h$ be half the chord, and draw the auxiliary perpendicular from the center $O$ to the chord (dashed). It bisects the chord, so $h$, the given distance $9$, and the radius $41$ form a right triangle: $h^2 = 41^2 - 9^2 = 1681 - 81 = 1600$, so $h = 40$ and the whole chord is $2 \\cdot 40 = 80$ ✓. Check a second, independent way that never halves anything. Name the chord $\\overline{AB}$ and draw the auxiliary diameter from $A$ through $O$ to the far point $A\'$, so $\\angle ABA\' = 90^\\circ$. The segment from $O$ to the midpoint of $\\overline{AB}$ is a midline of triangle $ABA\'$, so $BA\'$ is twice it, namely $18$. Now Pythagoras in triangle $ABA\'$ gives $AB = \\sqrt{82^2 - 18^2} = \\sqrt{6724 - 324} = \\sqrt{6400} = 80$ ✓. (The choice $40$ is HALF THE CHORD, forgetting to double ✗; the choice $32$ is SUBTRACTING $9$ FROM $41$ instead of using the right triangle ✗; the choice $50$ is ADDING $9$ TO $41$ ✗.)',
    },
  ],

  // slot 6 — the isosceles zigzag. Route one rides the chain forward, one
  // equal segment at a time; route two assigns a name to the target angle and
  // walks backward through triangle ACD, or in the third item cuts the figure
  // with the auxiliary perpendicular from C.
  [
    {
      q: 'The figure shows $AB = BC = CD$, with $B$ and $D$ on the lower ray from $A$ and $C$ and $E$ on the upper ray. If $\\angle DCE = 111^\\circ$, what is $\\angle A$?',
      fig: {
        view: [-0.5, -0.9, 4.9, 3.2],
        elems: [
          { t: 'seg', a: [0, 0], b: [4.5, 0] },
          { t: 'seg', a: [0, 0], b: [3.75, 2.826] },
          { t: 'seg', a: [2, 0], b: [2.5514, 1.9226] },
          { t: 'seg', a: [2.5514, 1.9226], b: [3.1027, 0] },
          { t: 'tick', a: [0, 0], b: [2, 0], n: 1 },
          { t: 'tick', a: [2, 0], b: [2.5514, 1.9226], n: 1 },
          { t: 'tick', a: [2.5514, 1.9226], b: [3.1027, 0], n: 1 },
          { t: 'angle', at: [0, 0], from: [4.5, 0], to: [3.75, 2.826], r: 0.9, label: '?' },
          { t: 'angle', at: [2.5514, 1.9226], from: [3.1027, 0], to: [3.4341, 2.5878], r: 0.5, label: '111' },
          { t: 'point', p: [0, 0], label: 'A', dx: -11, dy: 10 },
          { t: 'point', p: [2, 0], label: 'B', dx: 0, dy: 15 },
          { t: 'point', p: [2.5514, 1.9226], label: 'C', dx: -8, dy: -10 },
          { t: 'point', p: [3.1027, 0], label: 'D', dx: 4, dy: 15 },
          { t: 'point', p: [3.4341, 2.5878], label: 'E', dx: 9, dy: -6 },
        ],
      },
      choices: ['$37^\\circ$', '$23^\\circ$', '$74^\\circ$', '$69^\\circ$'],
      answer: 0,
      solution:
        'Assign the variable: let $\\angle A = x$ and push it up the chain. $AB = BC$ makes triangle $ABC$ isosceles, so $\\angle BCA = x$ and the exterior angle at $B$ is $\\angle CBD = 2x$. Then $BC = CD$ makes triangle $BCD$ isosceles, so $\\angle CDB = 2x$ and $\\angle BCD = 180^\\circ - 4x$. Since $A$, $C$, $E$ are collinear, the three angles at $C$ on that line satisfy $x + (180^\\circ - 4x) + \\angle DCE = 180^\\circ$, so $\\angle DCE = 3x = 111^\\circ$ and $x = 37^\\circ$ ✓. Check a second, independent way by naming the target instead and walking backward. Let $\\angle DCE = t$. Because $A$, $C$, $E$ are collinear, $\\angle ACD = 180^\\circ - t$, so the angle sum of triangle $ACD$ gives $\\angle ADC = t - \\angle A$. In triangle $BCD$ the equal sides $CB$ and $CD$ make $\\angle CBD = \\angle CDB = t - \\angle A$, so $\\angle ABC = 180^\\circ - (t - \\angle A)$. But triangle $ABC$ has $AB = BC$, so $\\angle ABC = 180^\\circ - 2\\angle A$. Matching the two expressions gives $t - \\angle A = 2\\angle A$, that is $t = 3\\angle A$, so $\\angle A = \\frac{111^\\circ}{3} = 37^\\circ$ ✓. (The choice $23^\\circ$ is TAKING THE SUPPLEMENT FIRST, dividing $180^\\circ - 111^\\circ$ by three ✗; the choice $74^\\circ$ is STOPPING ONE LINK SHORT at $2x$, the exterior angle $\\angle CBD$ ✗; the choice $69^\\circ$ is THE SUPPLEMENT OF $111^\\circ$, handed in without dividing ✗.)',
    },
    {
      q: 'In the zigzag shown, $AB = BC = CD$, points $B$ and $D$ sit on the lower ray from $A$, points $C$ and $E$ sit on the upper ray, and $\\angle DCE = 129^\\circ$. What is $\\angle A$?',
      fig: {
        view: [-0.5, -0.9, 4.3, 3.3],
        elems: [
          { t: 'seg', a: [0, 0], b: [3.9, 0] },
          { t: 'seg', a: [0, 0], b: [3.2, 2.984] },
          { t: 'seg', a: [2, 0], b: [2.1395, 1.9951] },
          { t: 'seg', a: [2.1395, 1.9951], b: [2.279, 0] },
          { t: 'tick', a: [0, 0], b: [2, 0], n: 1 },
          { t: 'tick', a: [2, 0], b: [2.1395, 1.9951], n: 1 },
          { t: 'tick', a: [2.1395, 1.9951], b: [2.279, 0], n: 1 },
          { t: 'angle', at: [0, 0], from: [3.9, 0], to: [3.2, 2.984], r: 0.9, label: '?' },
          { t: 'angle', at: [2.1395, 1.9951], from: [2.279, 0], to: [2.8523, 2.6598], r: 0.5, label: '129' },
          { t: 'point', p: [0, 0], label: 'A', dx: -11, dy: 10 },
          { t: 'point', p: [2, 0], label: 'B', dx: -4, dy: 15 },
          { t: 'point', p: [2.1395, 1.9951], label: 'C', dx: -11, dy: -6 },
          { t: 'point', p: [2.279, 0], label: 'D', dx: 8, dy: 15 },
          { t: 'point', p: [2.8523, 2.6598], label: 'E', dx: 9, dy: -6 },
        ],
      },
      choices: ['$17^\\circ$', '$86^\\circ$', '$43^\\circ$', '$51^\\circ$'],
      answer: 2,
      solution:
        'Assign the variable: let $\\angle A = x$. From $AB = BC$, triangle $ABC$ is isosceles, so $\\angle BCA = x$ and the exterior angle $\\angle CBD = 2x$. From $BC = CD$, triangle $BCD$ is isosceles, so $\\angle CDB = 2x$ and $\\angle BCD = 180^\\circ - 4x$. The points $A$, $C$, $E$ lie on one line, so the angles at $C$ along it add to $180^\\circ$: $x + (180^\\circ - 4x) + 129^\\circ = 180^\\circ$, giving $3x = 129^\\circ$ and $x = 43^\\circ$ ✓. Check a second, independent way by naming the given angle and reasoning backward. Let $\\angle DCE = t$. Collinearity gives $\\angle ACD = 180^\\circ - t$, so triangle $ACD$ leaves $\\angle ADC = t - \\angle A$. Triangle $BCD$ has $CB = CD$, so $\\angle CBD = \\angle CDB = t - \\angle A$ and therefore $\\angle ABC = 180^\\circ - (t - \\angle A)$. Triangle $ABC$ has $AB = BC$, so $\\angle ABC = 180^\\circ - 2\\angle A$ as well. The two readings agree only when $t = 3\\angle A$, so $\\angle A = \\frac{129^\\circ}{3} = 43^\\circ$ ✓. (The choice $17^\\circ$ is TAKING THE SUPPLEMENT FIRST, dividing $180^\\circ - 129^\\circ$ by three ✗; the choice $86^\\circ$ is STOPPING AT $2x$, the exterior angle $\\angle CBD$ ✗; the choice $51^\\circ$ is THE SUPPLEMENT OF $129^\\circ$, never divided ✗.)',
    },
    {
      q: 'In the figure, $AB = BC = CD$, with $B$ and $D$ on the lower ray from $A$ and $C$ on the upper ray. If $\\angle A = 26^\\circ$, what is $\\angle BCD$?',
      fig: {
        view: [-0.5, -0.9, 5.6, 2.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [5.2, 0] },
          { t: 'seg', a: [0, 0], b: [4.2, 2.0485] },
          { t: 'seg', a: [2, 0], b: [3.2313, 1.576] },
          { t: 'seg', a: [3.2313, 1.576], b: [4.4626, 0] },
          { t: 'seg', a: [3.2313, 1.576], b: [3.2313, 0], dash: true },
          { t: 'right', at: [3.2313, 0], from: [0, 0], to: [3.2313, 1.576] },
          { t: 'tick', a: [0, 0], b: [2, 0], n: 1 },
          { t: 'tick', a: [2, 0], b: [3.2313, 1.576], n: 1 },
          { t: 'tick', a: [3.2313, 1.576], b: [4.4626, 0], n: 1 },
          { t: 'angle', at: [0, 0], from: [5.2, 0], to: [4.2, 2.0485], r: 0.9, label: '26' },
          { t: 'angle', at: [3.2313, 1.576], from: [2, 0], to: [4.4626, 0], r: 0.45, label: '?' },
          { t: 'point', p: [0, 0], label: 'A', dx: -11, dy: 10 },
          { t: 'point', p: [2, 0], label: 'B', dx: -4, dy: 15 },
          { t: 'point', p: [3.2313, 1.576], label: 'C', dx: -6, dy: -10 },
          { t: 'point', p: [4.4626, 0], label: 'D', dx: 8, dy: 14 },
          { t: 'point', p: [3.2313, 0], label: 'M', dx: 2, dy: 16 },
        ],
      },
      choices: ['$104^\\circ$', '$76^\\circ$', '$78^\\circ$', '$52^\\circ$'],
      answer: 1,
      solution:
        'Assign the variable: let $\\angle A = x = 26^\\circ$ and ride the chain. $AB = BC$ makes triangle $ABC$ isosceles, so $\\angle BCA = x$ and the exterior angle at $B$ is $\\angle CBD = 2x = 52^\\circ$. $BC = CD$ makes triangle $BCD$ isosceles, so its base angles are $\\angle CBD = \\angle CDB = 52^\\circ$ and the apex is $\\angle BCD = 180^\\circ - 4x = 180^\\circ - 104^\\circ = 76^\\circ$ ✓. Check a second, independent way with the auxiliary perpendicular $\\overline{CM}$ from $C$ down to the lower ray (dashed). In right triangle $ACM$ the acute angles add to $90^\\circ$, so $\\angle ACM = 90^\\circ - 26^\\circ = 64^\\circ$, and subtracting $\\angle ACB = 26^\\circ$ leaves $\\angle BCM = 38^\\circ$. Since $CB = CD$, the foot $M$ is the midpoint of $\\overline{BD}$ and $\\overline{CM}$ splits $\\angle BCD$ into two equal halves, so $\\angle BCD = 2 \\cdot 38^\\circ = 76^\\circ$ ✓. (The choice $104^\\circ$ is $4x$, FORGETTING TO SUBTRACT FROM $180^\\circ$ ✗; the choice $78^\\circ$ is $3x$, the neighboring angle $\\angle DCE$ rather than $\\angle BCD$ ✗; the choice $52^\\circ$ is $2x$, one of the BASE ANGLES instead of the apex ✗.)',
    },
  ],

  // slot 7 — area of a figure made of rectangles. Route one adds the pieces a
  // single auxiliary cut creates; route two completes the bounding rectangle
  // and subtracts, or in the third item overlaps two bars and removes the
  // double-counted square.
  [
    {
      q: 'Every corner of the L-shaped garden bed below is a right angle, and the edge lengths are marked. How much area does the bed cover?',
      fig: {
        view: [-1, -1, 11.4, 8.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 4], [6, 4], [6, 7], [0, 7]], fill: false },
          { t: 'seg', a: [6, 0], b: [6, 4], dash: true },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 15 },
          { t: 'label', p: [10, 2], text: '4', dx: 11, dy: 4 },
          { t: 'label', p: [8, 4], text: '4', dx: 0, dy: -9 },
          { t: 'label', p: [6, 5.5], text: '3', dx: 11, dy: 4 },
          { t: 'label', p: [3, 7], text: '6', dx: 0, dy: -9 },
          { t: 'label', p: [0, 3.5], text: '7', dx: -11, dy: 4 },
        ],
      },
      choices: ['$70$', '$82$', '$58$', '$34$'],
      answer: 2,
      solution:
        'Draw one auxiliary line and the figure falls apart into rectangles. The dashed vertical cut at the inner corner leaves a $6 \\times 7$ rectangle on the left and a $4 \\times 4$ square on the right, so the area is $42 + 16 = 58$ ✓. Check a second, independent way by completing the bounding rectangle instead of cutting the figure. The smallest rectangle containing the whole shape is $10$ wide and $7$ tall, area $70$, and the piece missing from the top right corner is $4$ wide and $3$ tall, area $12$. Subtracting gives $70 - 12 = 58$ ✓. (The choice $70$ is THE WHOLE BOUNDING RECTANGLE, with the notch never removed ✗; the choice $82$ is DOUBLE COUNTING THE OVERLAP, adding a $6 \\times 7$ and a $10 \\times 4$ rectangle that share a corner block ✗; the choice $34$ is THE PERIMETER, a length answer to an area question ✗.)',
    },
    {
      q: 'An L-shaped tile has all right angles and the dimensions marked. Find its area.',
      fig: {
        view: [-1, -1, 13.6, 10.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 5], [7, 5], [7, 9], [0, 9]], fill: false },
          { t: 'seg', a: [7, 0], b: [7, 5], dash: true },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 15 },
          { t: 'label', p: [12, 2.5], text: '5', dx: 11, dy: 4 },
          { t: 'label', p: [9.5, 5], text: '5', dx: 0, dy: -9 },
          { t: 'label', p: [7, 7], text: '4', dx: 11, dy: 4 },
          { t: 'label', p: [3.5, 9], text: '7', dx: 0, dy: -9 },
          { t: 'label', p: [0, 4.5], text: '9', dx: -11, dy: 4 },
        ],
      },
      choices: ['$88$', '$108$', '$123$', '$42$'],
      answer: 0,
      solution:
        'One auxiliary cut does the work. The dashed vertical line through the inner corner splits the tile into a $7 \\times 9$ rectangle on the left and a $5 \\times 5$ square on the right, so the area is $63 + 25 = 88$ ✓. Check a second, independent way by building up rather than slicing. The bounding rectangle is $12$ by $9$, area $108$, and the bite taken out of the top right corner measures $5$ by $4$, area $20$; the tile is what remains, $108 - 20 = 88$ ✓. (The choice $108$ is THE BOUNDING RECTANGLE, with the missing corner never subtracted ✗; the choice $123$ is DOUBLE COUNTING, adding a $7 \\times 9$ and a $12 \\times 5$ rectangle whose $7 \\times 5$ overlap gets used twice ✗; the choice $42$ is THE PERIMETER instead of the area ✗.)',
    },
    {
      q: 'A plus-shaped figure is made from a $12$-by-$4$ bar crossing a $4$-by-$10$ bar at right angles, and the two bars overlap in a $4$-by-$4$ square. What is the area of the plus?',
      fig: {
        view: [-1, -1, 13.6, 11.6],
        elems: [
          {
            t: 'poly',
            pts: [[4, 0], [8, 0], [8, 3], [12, 3], [12, 7], [8, 7], [8, 10], [4, 10], [4, 7], [0, 7], [0, 3], [4, 3]],
            fill: false,
          },
          { t: 'seg', a: [4, 3], b: [8, 3], dash: true },
          { t: 'seg', a: [4, 7], b: [8, 7], dash: true },
          { t: 'label', p: [6, 0], text: '4', dx: 0, dy: 15 },
          { t: 'label', p: [4, 1.5], text: '3', dx: -11, dy: 4 },
          { t: 'label', p: [2, 3], text: '4', dx: 0, dy: 15 },
          { t: 'label', p: [0, 5], text: '4', dx: -11, dy: 4 },
          { t: 'label', p: [10, 3], text: '4', dx: 0, dy: 15 },
          { t: 'label', p: [6, 10], text: '4', dx: 0, dy: -9 },
          { t: 'label', p: [4, 8.5], text: '3', dx: -11, dy: 4 },
        ],
      },
      choices: ['$88$', '$56$', '$120$', '$72$'],
      answer: 3,
      solution:
        'Two auxiliary lines turn the plus into three rectangles. The dashed horizontal cuts at heights $3$ and $7$ leave a $4 \\times 4$ arm on the left, a $4 \\times 10$ column down the middle, and a $4 \\times 4$ arm on the right: $16 + 40 + 16 = 72$ ✓. Check a second, independent way with the two bars themselves. The horizontal bar covers $12 \\cdot 4 = 48$ and the vertical bar covers $4 \\cdot 10 = 40$, but the $4 \\times 4$ square where they cross has been counted twice, so the area is $48 + 40 - 16 = 72$ ✓. (The choice $88$ is ADDING THE TWO BARS AND FORGETTING THE OVERLAP ✗; the choice $56$ is SUBTRACTING THE OVERLAP TWICE ✗; the choice $120$ is THE $12$-BY-$10$ BOUNDING RECTANGLE, corners and all ✗.)',
    },
  ],

  // slot 8 — a right triangle pinned by two of hypotenuse, perimeter and area.
  // Route one runs the identity $(a+b)^2 = a^2 + 2ab + b^2$; route two never
  // uses it, reaching instead for the inradius formula or for the factor pairs
  // of the doubled area.
  [
    {
      q: 'A right triangle has hypotenuse $65$ and perimeter $144$. What is its area?',
      choices: ['$1008$', '$520$', '$252$', '$504$'],
      answer: 3,
      solution:
        'Assign the variables: call the legs $a$ and $b$. The perimeter gives $a + b = 144 - 65 = 79$, and the right angle gives $a^2 + b^2 = 65^2 = 4225$. Square the first: $(a + b)^2 = a^2 + 2ab + b^2$, so $6241 = 4225 + 2ab$ and $ab = 1008$. The area of a right triangle is half the product of its legs, so it is $\\frac{1008}{2} = 504$ ✓. Check a second, independent way through the inscribed circle. For a right triangle the inradius is $r = \\frac{a + b - c}{2} = \\frac{79 - 65}{2} = 7$, and the semiperimeter is $s = \\frac{144}{2} = 72$. Since the area of any triangle equals $r \\cdot s$, the area is $7 \\cdot 72 = 504$ ✓, and this route never finds $ab$ at all. (The choice $1008$ is DROPPING THE ONE HALF and handing back the product of the legs ✗; the choice $520$ is USING THE HYPOTENUSE AS A LEG — the legs are $16$ and $63$, and this multiplies $16$ by $65$ instead ✗; the choice $252$ is HALVING TWICE ✗.)',
    },
    {
      q: 'A right triangle has hypotenuse $41$ and perimeter $90$. What is its area?',
      choices: ['$360$', '$180$', '$90$', '$820$'],
      answer: 1,
      solution:
        'Assign the variables: let the legs be $a$ and $b$. The perimeter leaves $a + b = 90 - 41 = 49$ and the right angle gives $a^2 + b^2 = 41^2 = 1681$. Squaring the sum, $(a + b)^2 = a^2 + 2ab + b^2$, so $2401 = 1681 + 2ab$ and $ab = 360$. The area is half of that, $\\frac{360}{2} = 180$ ✓. Check a second, independent way with the inscribed circle. The inradius of a right triangle is $r = \\frac{a + b - c}{2} = \\frac{49 - 41}{2} = 4$, the semiperimeter is $s = \\frac{90}{2} = 45$, and the area of a triangle is $r \\cdot s = 4 \\cdot 45 = 180$ ✓ — reached without ever multiplying the legs together. (The choice $360$ is THE PRODUCT OF THE LEGS, never halved ✗; the choice $90$ is HALVING THE AREA A SECOND TIME, and it merely echoes the given perimeter ✗; the choice $820$ is USING THE HYPOTENUSE AS A LEG, computing $\\frac{1}{2} \\cdot 40 \\cdot 41$ ✗.)',
    },
    {
      q: 'A right triangle has hypotenuse $37$ and area $210$. What is the sum of its legs?',
      choices: ['$47$', '$23$', '$84$', '$35$'],
      answer: 0,
      solution:
        'Assign the variables: let the legs be $a$ and $b$. The area gives $\\frac{ab}{2} = 210$, so $ab = 420$, and the right angle gives $a^2 + b^2 = 37^2 = 1369$. Then $(a + b)^2 = a^2 + 2ab + b^2 = 1369 + 840 = 2209$, and since $47^2 = 2209$, the sum is $a + b = 47$ ✓. Check a second, independent way by hunting for the legs themselves. They multiply to $420$, so run through the factor pairs and test which one squares to $1369$: $4 \\cdot 105$ gives $11041$, $10 \\cdot 42$ gives $1864$, $14 \\cdot 30$ gives $1096$, and $12 \\cdot 35$ gives $144 + 1225 = 1369$ ✓. The legs are $12$ and $35$, so their sum is $47$ ✓. (The choice $23$ is SUBTRACTING $2ab$ INSTEAD OF ADDING IT, which produces $a - b$, the difference of the legs ✗; the choice $84$ is THE WHOLE PERIMETER, hypotenuse included ✗; the choice $35$ is ONLY THE LONGER LEG ✗.)',
    },
  ],

  // slot 9 — a triangle inscribed in a semicircle. Route one uses the right
  // angle the diameter forces; route two measures the two arcs of the
  // semicircle instead, or drops to coordinates on the circle.
  [
    {
      q: 'In the circle shown, $\\overline{AB}$ is a diameter and $C$ lies on the circle. If $\\angle ABC = x$ and $\\angle BAC = 2x + 15^\\circ$, what is $\\angle BAC$?',
      fig: {
        view: [-6.4, -6, 6.4, 6],
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'poly', pts: [[-5, 0], [5, 0], [-3.2139, 3.8302]], fill: false },
          { t: 'right', at: [-3.2139, 3.8302], from: [-5, 0], to: [5, 0] },
          { t: 'angle', at: [-5, 0], from: [5, 0], to: [-3.2139, 3.8302], r: 1, label: '2x + 15' },
          { t: 'angle', at: [5, 0], from: [-5, 0], to: [-3.2139, 3.8302], r: 1.2, label: 'x' },
          { t: 'point', p: [-5, 0], label: 'A', dx: -13, dy: 12 },
          { t: 'point', p: [5, 0], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [-3.2139, 3.8302], label: 'C', dx: -8, dy: -10 },
        ],
      },
      choices: ['$25^\\circ$', '$65^\\circ$', '$125^\\circ$', '$60^\\circ$'],
      answer: 1,
      solution:
        'Because $\\overline{AB}$ is a diameter, $C$ sits on a semicircle and $\\angle ACB = 90^\\circ$. The angle sum of triangle $ABC$ then reads $x + (2x + 15^\\circ) + 90^\\circ = 180^\\circ$, so $3x = 75^\\circ$, $x = 25^\\circ$, and $\\angle BAC = 2 \\cdot 25^\\circ + 15^\\circ = 65^\\circ$ ✓. Check a second, independent way by counting arcs instead of angles in the triangle. An inscribed angle is half the arc it cuts off, so $\\angle BAC$ sits on arc $BC$, giving arc $BC = 4x + 30^\\circ$, and $\\angle ABC$ sits on arc $AC$, giving arc $AC = 2x$. Those two arcs together make the semicircle on $C$’s side of the diameter, so $4x + 30^\\circ + 2x = 180^\\circ$, hence $6x = 150^\\circ$, $x = 25^\\circ$ and $\\angle BAC = 65^\\circ$ ✓. (The choice $25^\\circ$ is ANSWERING WITH $x$, the other acute angle, rather than with $2x + 15^\\circ$ ✗; the choice $125^\\circ$ is SETTING THE TWO ACUTE ANGLES EQUAL TO $180^\\circ$, forgetting the right angle at $C$ ✗; the choice $60^\\circ$ is DROPPING THE $15^\\circ$, solving $3x = 90^\\circ$ ✗.)',
    },
    {
      q: 'In the circle shown, $\\overline{AB}$ is a diameter and $C$ is a point on the circle. If $\\angle BAC$ is $20^\\circ$ larger than $\\angle ABC$, how big is $\\angle BAC$?',
      fig: {
        view: [-6.4, -6, 6.4, 6],
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'poly', pts: [[-5, 0], [5, 0], [-1.7101, 4.6985]], fill: false },
          { t: 'right', at: [-1.7101, 4.6985], from: [-5, 0], to: [5, 0] },
          { t: 'angle', at: [-5, 0], from: [5, 0], to: [-1.7101, 4.6985], r: 1, label: 'x + 20' },
          { t: 'angle', at: [5, 0], from: [-5, 0], to: [-1.7101, 4.6985], r: 1.2, label: 'x' },
          { t: 'point', p: [-5, 0], label: 'A', dx: -13, dy: 12 },
          { t: 'point', p: [5, 0], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [-1.7101, 4.6985], label: 'C', dx: -4, dy: -11 },
        ],
      },
      choices: ['$35^\\circ$', '$100^\\circ$', '$65^\\circ$', '$55^\\circ$'],
      answer: 3,
      solution:
        'Assign the variable: let $\\angle ABC = x$, so $\\angle BAC = x + 20^\\circ$. The diameter puts $C$ on a semicircle, so $\\angle ACB = 90^\\circ$ and the other two angles share what is left: $x + (x + 20^\\circ) = 90^\\circ$, giving $2x = 70^\\circ$, $x = 35^\\circ$ and $\\angle BAC = 55^\\circ$ ✓. Check a second, independent way with arcs. Each inscribed angle is half its arc, so arc $BC = 2(x + 20^\\circ)$ and arc $AC = 2x$, and the two of them fill the semicircle above the diameter: $2x + 40^\\circ + 2x = 180^\\circ$, so $4x = 140^\\circ$, $x = 35^\\circ$, and $\\angle BAC = 55^\\circ$ ✓. (The choice $35^\\circ$ is ANSWERING WITH THE SMALLER ANGLE $\\angle ABC$ ✗; the choice $100^\\circ$ is SPENDING THE FULL $180^\\circ$ on the two acute angles, as if there were no right angle ✗; the choice $65^\\circ$ is SPLITTING $90^\\circ$ EVENLY FIRST and then adding $20^\\circ$ ✗.)',
    },
    {
      q: 'Points $A$, $B$ and $C$ lie on a circle of radius $10$, and $\\overline{AB}$ is a diameter. If $BC = 12$, how long is $\\overline{AC}$?',
      fig: {
        view: [-6.4, -6, 6.4, 6],
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'poly', pts: [[-5, 0], [5, 0], [1.4, 4.8]], fill: false },
          { t: 'seg', a: [0, 0], b: [1.4, 4.8], dash: true },
          { t: 'right', at: [1.4, 4.8], from: [-5, 0], to: [5, 0] },
          { t: 'label', p: [3.2, 2.4], text: '12', dx: 13, dy: 4 },
          { t: 'label', p: [-1.8, 2.4], text: '?', dx: -13, dy: 4 },
          { t: 'label', p: [0.7, 2.4], text: '10', dx: 10, dy: 4 },
          { t: 'point', p: [-5, 0], label: 'A', dx: -13, dy: 12 },
          { t: 'point', p: [5, 0], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [1.4, 4.8], label: 'C', dx: 4, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: -4, dy: 15 },
        ],
      },
      choices: ['$8$', '$32$', '$16$', '$10$'],
      answer: 2,
      solution:
        'The radius is $10$, so the diameter is $AB = 20$. Because $\\overline{AB}$ is a diameter, $\\angle ACB = 90^\\circ$, and Pythagoras in right triangle $ACB$ gives $AC = \\sqrt{20^2 - 12^2} = \\sqrt{400 - 144} = \\sqrt{256} = 16$ ✓. Check a second, independent way with coordinates, never invoking the right angle. Put the center at the origin with $A = (-10, 0)$ and $B = (10, 0)$, and let $C = (p, q)$ on the circle, so $p^2 + q^2 = 100$. The condition $BC = 12$ says $(p - 10)^2 + q^2 = 144$; expanding and using $p^2 + q^2 = 100$ turns this into $200 - 20p = 144$, so $p = 2.8$ and $q^2 = 100 - 7.84 = 92.16$. Then $AC^2 = (2.8 + 10)^2 + 92.16 = 163.84 + 92.16 = 256$, so $AC = 16$ ✓. (The choice $8$ is SUBTRACTING THE LENGTHS, $20 - 12$, instead of subtracting their squares ✗; the choice $32$ is ADDING THEM ✗; the choice $10$ is HANDING BACK THE RADIUS, using it in place of the diameter ✗.)',
    },
  ],

  // slot 10 — a claim to be tested. Route one builds an explicit figure that
  // satisfies every hypothesis; route two argues from the definition or from
  // vectors, and never reuses the first figure.
  [
    {
      q: 'Consider the claim: "If a quadrilateral has two pairs of congruent sides, then it is a parallelogram." Which is correct?',
      fig: {
        view: [-1, -1, 7, 9.6],
        elems: [
          { t: 'poly', pts: [[3, 8], [5, 5], [3, 0], [1, 5]], fill: false },
          { t: 'seg', a: [3, 8], b: [3, 0], dash: true },
          { t: 'tick', a: [3, 8], b: [5, 5], n: 1 },
          { t: 'tick', a: [3, 8], b: [1, 5], n: 1 },
          { t: 'tick', a: [3, 0], b: [5, 5], n: 2 },
          { t: 'tick', a: [3, 0], b: [1, 5], n: 2 },
          { t: 'point', p: [3, 8], label: 'A', dx: -4, dy: -11 },
          { t: 'point', p: [5, 5], label: 'B', dx: 10, dy: 4 },
          { t: 'point', p: [3, 0], label: 'C', dx: -4, dy: 16 },
          { t: 'point', p: [1, 5], label: 'D', dx: -13, dy: 4 },
        ],
      },
      choices: [
        'True — two pairs of congruent sides force both pairs of opposite sides to be parallel',
        'False — an isosceles trapezoid has two pairs of congruent sides but is not a parallelogram',
        'False — a kite has two pairs of congruent sides but is not a parallelogram',
        'True — two pairs of congruent sides is exactly the definition of a parallelogram',
      ],
      answer: 2,
      solution:
        'Test the claim before believing it. The kite drawn above has $AB = AD$ and $CB = CD$, so it does have two pairs of congruent sides, yet its congruent pairs are ADJACENT rather than opposite. Draw the auxiliary diagonal $\\overline{AC}$ (dashed): it is an axis of symmetry, so $\\angle B = \\angle D$, while $\\angle A$ and $\\angle C$ are different from each other. A parallelogram has both pairs of opposite angles equal, so this figure is not one, and one counterexample sinks the claim ✓. Check a second, independent way with coordinates, using no symmetry at all. Take $A = (3, 8)$, $B = (5, 5)$, $C = (3, 0)$, $D = (1, 5)$: then $AB = AD = \\sqrt{4 + 9} = \\sqrt{13}$ and $CB = CD = \\sqrt{4 + 25} = \\sqrt{29}$, so both hypotheses hold. But the opposite sides $\\overline{AB}$ and $\\overline{DC}$ have direction vectors $(2, -3)$ and $(2, -5)$, which are not multiples of each other, so those sides are not parallel and the figure is not a parallelogram ✓. (The choice claiming TRUE BY FORCED PARALLELISM ✗ and the choice calling it THE DEFINITION ✗ both skip the word "opposite": the real theorem needs the congruent pairs to be opposite sides. The choice naming an isosceles trapezoid is REACHING FOR LAST WEEK’S COUNTEREXAMPLE WITHOUT CHECKING IT — an isosceles trapezoid has only one pair of congruent sides, its legs, so it never satisfies the hypothesis ✗.)',
    },
    {
      q: 'Consider the claim: "If all four sides of a quadrilateral are congruent, then it is a square." Which is correct?',
      fig: {
        view: [-1, -1, 9.6, 5.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [8, 4], [3, 4]], fill: false },
          { t: 'seg', a: [0, 0], b: [8, 4], dash: true },
          { t: 'seg', a: [5, 0], b: [3, 4], dash: true },
          { t: 'tick', a: [0, 0], b: [5, 0], n: 1 },
          { t: 'tick', a: [5, 0], b: [8, 4], n: 1 },
          { t: 'tick', a: [8, 4], b: [3, 4], n: 1 },
          { t: 'tick', a: [3, 4], b: [0, 0], n: 1 },
          { t: 'point', p: [0, 0], label: 'A', dx: -13, dy: 12 },
          { t: 'point', p: [5, 0], label: 'B', dx: 8, dy: 14 },
          { t: 'point', p: [8, 4], label: 'C', dx: 10, dy: -6 },
          { t: 'point', p: [3, 4], label: 'D', dx: -12, dy: -6 },
        ],
      },
      choices: [
        'False — a rhombus that is not a square already has four congruent sides',
        'True — four congruent sides is the definition of a square',
        'False — a kite has four congruent sides but is not a square',
        'True — four congruent sides force all four angles to be $90^\\circ$',
      ],
      answer: 0,
      solution:
        'Build a figure that meets the hypothesis and see whether it must be a square. With $A = (0, 0)$, $B = (5, 0)$, $C = (8, 4)$, $D = (3, 4)$, every side measures $5$: $AB = 5$, $BC = \\sqrt{9 + 16} = 5$, $CD = 5$, $DA = \\sqrt{9 + 16} = 5$. But $\\overline{AB}$ points along $(5, 0)$ and $\\overline{AD}$ along $(3, 4)$, and $5 \\cdot 3 + 0 \\cdot 4 = 15$ is not $0$, so $\\angle A$ is not a right angle. Four congruent sides, no square ✓. Check a second, independent way through the diagonals (dashed), with no coordinates. Four equal sides force the diagonals to bisect each other at right angles, but nothing pins their lengths: diagonals of $6$ and $8$ crossing perpendicularly at their shared midpoint give four sides of $\\sqrt{3^2 + 4^2} = 5$ and a figure that is not a square, while only equal diagonals produce one ✓. (The choice calling it THE DEFINITION ✗ and the choice claiming the sides FORCE RIGHT ANGLES ✗ both forget that a four-bar frame flexes; equal sides fix the shape only up to a hinge. The choice naming a kite is REACHING FOR THE WRONG COUNTEREXAMPLE — a kite with all four sides congruent is a rhombus, so the word "kite" adds nothing here ✗.)',
    },
    {
      q: 'Consider the claim: "If one pair of opposite sides of a quadrilateral is both parallel and congruent, then the quadrilateral is a parallelogram." Which is correct?',
      fig: {
        view: [-1, -1, 9.6, 4.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [8, 3], [2, 3]], fill: false },
          { t: 'seg', a: [0, 0], b: [8, 3], dash: true },
          { t: 'tick', a: [0, 0], b: [6, 0], n: 1 },
          { t: 'tick', a: [2, 3], b: [8, 3], n: 1 },
          { t: 'point', p: [0, 0], label: 'A', dx: -13, dy: 12 },
          { t: 'point', p: [6, 0], label: 'B', dx: 8, dy: 14 },
          { t: 'point', p: [8, 3], label: 'C', dx: 10, dy: -6 },
          { t: 'point', p: [2, 3], label: 'D', dx: -12, dy: -6 },
        ],
      },
      choices: [
        'False — an isosceles trapezoid has a pair of parallel sides and a pair of congruent sides',
        'True — but only when the quadrilateral can also be inscribed in a circle',
        'False — a kite settles it, since a kite has congruent sides',
        'True — the diagonal cuts it into two triangles congruent by SAS',
      ],
      answer: 3,
      solution:
        'Draw the auxiliary diagonal $\\overline{AC}$ (dashed) in quadrilateral $ABCD$, where $\\overline{AB} \\parallel \\overline{DC}$ and $AB = DC$. The parallel sides make $\\angle BAC = \\angle DCA$ as alternate interior angles, the given congruence supplies $AB = CD$, and $\\overline{AC}$ belongs to both triangles, so triangles $BAC$ and $DCA$ are congruent by SAS. Congruence hands back $\\angle BCA = \\angle DAC$, which are alternate interior angles for $\\overline{AD}$ and $\\overline{BC}$, so that second pair of sides is parallel too and $ABCD$ is a parallelogram ✓. Check a second, independent way with vectors, drawing nothing. "Parallel and congruent" for the pair $\\overline{AB}$ and $\\overline{DC}$ says the trip from $A$ to $B$ is the same trip as from $D$ to $C$, so $B - A = C - D$. Rearranging gives $D - A = C - B$, which says the trip from $A$ to $D$ equals the trip from $B$ to $C$: the other pair of opposite sides is parallel and congruent as well, which is a parallelogram ✓. (The choice naming an isosceles trapezoid is USING A DIFFERENT PAIR — there the congruent sides are the legs, not the parallel pair, so the hypothesis is never met ✗; the choice adding a circle is INVENTING AN EXTRA CONDITION the proof never needed ✗; the choice naming a kite is REACHING FOR A COUNTEREXAMPLE WITH NO PARALLEL SIDES AT ALL ✗.)',
    },
  ],

  // slot 11 — a point inside a rectangle. Route one draws the two auxiliary
  // lines through the point and pairs the squares off; route two never states
  // the identity, building an actual rectangle out of the four gaps instead.
  [
    {
      q: '$P$ is a point inside rectangle $ABCD$ with $PA = 5$, $PB = 6$ and $PC = 8$. How long is $\\overline{PD}$?',
      fig: {
        view: [-0.8, -0.8, 4.6, 6.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.736, 0], [3.736, 5.317], [0, 5.317]], fill: false },
          { t: 'seg', a: [1.5, 2], b: [0, 0], dash: true },
          { t: 'seg', a: [1.5, 2], b: [3.736, 0], dash: true },
          { t: 'seg', a: [1.5, 2], b: [3.736, 5.317], dash: true },
          { t: 'seg', a: [1.5, 2], b: [0, 5.317], dash: true },
          { t: 'right', at: [0, 0], from: [3.736, 0], to: [0, 5.317] },
          { t: 'label', p: [0.75, 1], text: '5', dx: -10, dy: 0 },
          { t: 'label', p: [2.618, 1], text: '6', dx: 8, dy: 10 },
          { t: 'label', p: [2.618, 3.658], text: '8', dx: 10, dy: 0 },
          { t: 'label', p: [0.75, 3.658], text: '?', dx: -10, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -13, dy: 13 },
          { t: 'point', p: [3.736, 0], label: 'B', dx: 8, dy: 14 },
          { t: 'point', p: [3.736, 5.317], label: 'C', dx: 9, dy: -6 },
          { t: 'point', p: [0, 5.317], label: 'D', dx: -13, dy: -6 },
          { t: 'point', p: [1.5, 2], label: 'P', dx: 4, dy: -8 },
        ],
      },
      choices: ['$\\sqrt{53}$', '$5\\sqrt{5}$', '$7$', '$5\\sqrt{3}$'],
      answer: 0,
      solution:
        'Draw the two auxiliary lines through $P$, one parallel to each pair of sides. They cut every distance into a horizontal piece and a vertical piece: writing $x$ and $y$ for the gaps to the left side and the bottom side, and $u$ and $v$ for the gaps to the right side and the top side, Pythagoras gives $PA^2 = x^2 + y^2$, $PB^2 = u^2 + y^2$, $PC^2 = u^2 + v^2$ and $PD^2 = x^2 + v^2$. Then $PA^2 + PC^2$ and $PB^2 + PD^2$ both equal $x^2 + y^2 + u^2 + v^2$, so $PD^2 = 25 + 64 - 36 = 53$ and $PD = \\sqrt{53}$ ✓. Check a second, independent way by building a rectangle that really fits, with no identity in sight. Put $P$ at $(3, 4)$ measured from corner $A$, which already gives $PA = 5$. For $PB = 6$ the gap on the right must satisfy $u^2 = 36 - 16 = 20$, and then $PC = 8$ forces $v^2 = 64 - 20 = 44$. So $PD^2 = 3^2 + 44 = 53$ and $PD = \\sqrt{53}$ ✓. (The choice $5\\sqrt{5}$ is ADDING ALL THREE SQUARES, $25 + 64 + 36$ ✗; the choice $7$ is WORKING WITH THE LENGTHS THEMSELVES, $5 + 8 - 6$, instead of their squares ✗; the choice $5\\sqrt{3}$ is PAIRING THE WRONG TWO CORNERS, computing $64 + 36 - 25$ ✗.)',
    },
    {
      q: '$P$ lies inside rectangle $ABCD$ with $PA = 4$, $PB = 7$ and $PC = 8$. Find $PD$.',
      fig: {
        view: [-0.8, -0.8, 5.4, 4.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.4852, 0], [4.4852, 3.9495], [0, 3.9495]], fill: false },
          { t: 'seg', a: [1.3229, 1.5], b: [0, 0], dash: true },
          { t: 'seg', a: [1.3229, 1.5], b: [4.4852, 0], dash: true },
          { t: 'seg', a: [1.3229, 1.5], b: [4.4852, 3.9495], dash: true },
          { t: 'seg', a: [1.3229, 1.5], b: [0, 3.9495], dash: true },
          { t: 'right', at: [0, 0], from: [4.4852, 0], to: [0, 3.9495] },
          { t: 'label', p: [0.6614, 0.75], text: '4', dx: -10, dy: 0 },
          { t: 'label', p: [2.904, 0.75], text: '7', dx: 6, dy: 12 },
          { t: 'label', p: [2.904, 2.7248], text: '8', dx: 10, dy: 0 },
          { t: 'label', p: [0.6614, 2.7248], text: '?', dx: -10, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -13, dy: 13 },
          { t: 'point', p: [4.4852, 0], label: 'B', dx: 8, dy: 14 },
          { t: 'point', p: [4.4852, 3.9495], label: 'C', dx: 9, dy: -6 },
          { t: 'point', p: [0, 3.9495], label: 'D', dx: -13, dy: -6 },
          { t: 'point', p: [1.3229, 1.5], label: 'P', dx: 4, dy: -8 },
        ],
      },
      choices: ['$\\sqrt{129}$', '$5$', '$\\sqrt{31}$', '$\\sqrt{97}$'],
      answer: 2,
      solution:
        'Rule the two auxiliary lines through $P$, one parallel to each pair of sides, and name the four gaps: $x$ to the left side, $y$ to the bottom, $u$ to the right, $v$ to the top. Then $PA^2 = x^2 + y^2$, $PB^2 = u^2 + y^2$, $PC^2 = u^2 + v^2$ and $PD^2 = x^2 + v^2$, so the two crosswise sums $PA^2 + PC^2$ and $PB^2 + PD^2$ each collect all four squares and must agree. Hence $PD^2 = 16 + 64 - 49 = 31$ and $PD = \\sqrt{31}$ ✓. Check a second, independent way by constructing a rectangle that fits the data. Let $y = 3$ and $x^2 = 7$, so $PA = \\sqrt{7 + 9} = 4$ as required. Then $PB = 7$ needs $u^2 = 49 - 9 = 40$, and $PC = 8$ needs $v^2 = 64 - 40 = 24$. Reading off the last corner, $PD^2 = 7 + 24 = 31$, so $PD = \\sqrt{31}$ ✓. (The choice $\\sqrt{129}$ is ADDING ALL THREE SQUARES, $16 + 64 + 49$ ✗; the choice $5$ is USING THE RAW LENGTHS, $4 + 8 - 7$ ✗; the choice $\\sqrt{97}$ is PAIRING THE WRONG CORNERS, computing $49 + 64 - 16$ ✗.)',
    },
    {
      q: 'A point $P$ inside rectangle $ABCD$ satisfies $PB = 6$, $PC = 9$ and $PD = 7$. How long is $\\overline{PA}$?',
      fig: {
        view: [-0.8, -0.8, 4.4, 5.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.3723, 0], [3.3723, 4.3301], [0, 4.3301]], fill: false },
          { t: 'seg', a: [0.5, 0.866], b: [0, 0], dash: true },
          { t: 'seg', a: [0.5, 0.866], b: [3.3723, 0], dash: true },
          { t: 'seg', a: [0.5, 0.866], b: [3.3723, 4.3301], dash: true },
          { t: 'seg', a: [0.5, 0.866], b: [0, 4.3301], dash: true },
          { t: 'right', at: [0, 0], from: [3.3723, 0], to: [0, 4.3301] },
          { t: 'label', p: [0.25, 0.433], text: '?', dx: -10, dy: 0 },
          { t: 'label', p: [1.9362, 0.433], text: '6', dx: 4, dy: 13 },
          { t: 'label', p: [1.9362, 2.598], text: '9', dx: 11, dy: 0 },
          { t: 'label', p: [0.25, 2.598], text: '7', dx: -10, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -13, dy: 13 },
          { t: 'point', p: [3.3723, 0], label: 'B', dx: 8, dy: 14 },
          { t: 'point', p: [3.3723, 4.3301], label: 'C', dx: 9, dy: -6 },
          { t: 'point', p: [0, 4.3301], label: 'D', dx: -13, dy: -6 },
          { t: 'point', p: [0.5, 0.866], label: 'P', dx: 7, dy: -6 },
        ],
      },
      choices: ['$4$', '$2$', '$\\sqrt{166}$', '$\\sqrt{68}$'],
      answer: 1,
      solution:
        'Draw the two auxiliary lines through $P$ parallel to the sides and name the four gaps: $x$ to the left side, $y$ to the bottom, $u$ to the right, $v$ to the top. Each distance is a hypotenuse: $PA^2 = x^2 + y^2$, $PB^2 = u^2 + y^2$, $PC^2 = u^2 + v^2$, $PD^2 = x^2 + v^2$. The crosswise sums both gather all four squares, so $PA^2 + PC^2 = PB^2 + PD^2$ and $PA^2 = 36 + 49 - 81 = 4$, giving $PA = 2$ ✓. Check a second, independent way by eliminating the gaps one at a time, never quoting that identity. From $PB = 6$, $u^2 + y^2 = 36$; from $PC = 9$, $v^2 = 81 - u^2$; from $PD = 7$, $x^2 = 49 - v^2 = 49 - 81 + u^2 = u^2 - 32$. Adding the last to $y^2 = 36 - u^2$ makes the $u^2$ terms cancel: $PA^2 = x^2 + y^2 = (u^2 - 32) + (36 - u^2) = 4$, so $PA = 2$ ✓. (Concretely, $u^2 = 33$, $y^2 = 3$, $v^2 = 48$ and $x = 1$ is one rectangle that fits.) (The choice $4$ is STOPPING AT $PA^2$ and forgetting the square root ✗; the choice $\\sqrt{166}$ is ADDING ALL THREE SQUARES ✗; the choice $\\sqrt{68}$ is PAIRING THE WRONG CORNERS, computing $36 + 81 - 49$ ✗.)',
    },
  ],

  // slot 12 — the centroid on a grid. Route one averages the three vertices;
  // route two walks two thirds of the way along a median, which uses a
  // midpoint the first route never computes.
  [
    {
      q: 'A triangle has vertices $A(0, 0)$, $B(9, 0)$ and $C(3, 6)$. What are the coordinates of its centroid?',
      fig: {
        view: [-1.4, -1.4, 10.4, 7.4],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [3, 6]], fill: false },
          { t: 'seg', a: [0, 0], b: [6, 3], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -13, dy: 14 },
          { t: 'point', p: [9, 0], label: 'B', dx: 8, dy: 14 },
          { t: 'point', p: [3, 6], label: 'C', dx: -4, dy: -10 },
          { t: 'point', p: [6, 3], label: 'M', dx: 10, dy: 2 },
        ],
      },
      choices: ['$(6, 3)$', '$(12, 6)$', '$(2, 4)$', '$(4, 2)$'],
      answer: 3,
      solution:
        'The centroid of a triangle is the average of its three vertices, coordinate by coordinate: the $x$-values give $\\frac{0 + 9 + 3}{3} = 4$ and the $y$-values give $\\frac{0 + 0 + 6}{3} = 2$, so the centroid is $(4, 2)$ ✓. Check a second, independent way by riding a median. Draw the auxiliary segment from $A$ to the midpoint $M$ of $\\overline{BC}$ (dashed); that midpoint is $\\left( \\frac{9 + 3}{2}, \\frac{0 + 6}{2} \\right) = (6, 3)$. The centroid sits two thirds of the way from the vertex to that midpoint, so starting at $A(0, 0)$ and moving $\\frac{2}{3}$ of the way to $(6, 3)$ lands on $\\left( \\frac{2}{3} \\cdot 6, \\frac{2}{3} \\cdot 3 \\right) = (4, 2)$ ✓. (The choice $(6, 3)$ is STOPPING AT THE MIDPOINT $M$ instead of continuing to the two-thirds point ✗; the choice $(12, 6)$ is ADDING THE COORDINATES AND NEVER DIVIDING ✗; the choice $(2, 4)$ is SWAPPING THE TWO COORDINATES ✗.)',
    },
    {
      q: 'A triangle has vertices $P(1, 2)$, $Q(5, 4)$ and $R(6, 9)$. Where is its centroid?',
      fig: {
        view: [-1.4, -1.4, 8.4, 10.4],
        grid: true,
        elems: [
          { t: 'poly', pts: [[1, 2], [5, 4], [6, 9]], fill: false },
          { t: 'seg', a: [1, 2], b: [5.5, 6.5], dash: true },
          { t: 'point', p: [1, 2], label: 'P', dx: -13, dy: 12 },
          { t: 'point', p: [5, 4], label: 'Q', dx: 10, dy: 8 },
          { t: 'point', p: [6, 9], label: 'R', dx: 8, dy: -6 },
          { t: 'point', p: [5.5, 6.5], label: 'M', dx: 11, dy: 4 },
        ],
      },
      choices: ['$(12, 15)$', '$(4, 5)$', '$(5, 4)$', '$(3, 3)$'],
      answer: 1,
      solution:
        'Average the three vertices coordinate by coordinate: $\\frac{1 + 5 + 6}{3} = 4$ for $x$ and $\\frac{2 + 4 + 9}{3} = 5$ for $y$, so the centroid is $(4, 5)$ ✓. Check a second, independent way along a median. Draw the auxiliary segment from $P$ to the midpoint $M$ of $\\overline{QR}$ (dashed), which sits at $\\left( \\frac{5 + 6}{2}, \\frac{4 + 9}{2} \\right) = (5.5, 6.5)$. Travelling two thirds of the way from $P(1, 2)$ toward $M$ means adding $\\frac{2}{3}$ of the step $(4.5, 4.5)$, that is $(3, 3)$, landing on $(1 + 3, 2 + 3) = (4, 5)$ ✓. (The choice $(12, 15)$ is ADDING THE COORDINATES WITHOUT DIVIDING BY THREE ✗; the choice $(5, 4)$ is SWAPPING THE COORDINATES, which here happens to name a vertex ✗; the choice $(3, 3)$ is THE MIDPOINT OF $\\overline{PQ}$, a halfway point of one side rather than the centroid ✗.)',
    },
    {
      q: 'Two vertices of a triangle are $A(0, 0)$ and $B(8, 2)$, and its centroid is $G(3, 4)$. What is the third vertex?',
      fig: {
        view: [-1.4, -1.4, 9.4, 6.4],
        grid: true,
        elems: [
          { t: 'seg', a: [0, 0], b: [8, 2] },
          { t: 'seg', a: [4, 1], b: [3, 4], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -13, dy: 14 },
          { t: 'point', p: [8, 2], label: 'B', dx: 9, dy: 12 },
          { t: 'point', p: [4, 1], label: 'M', dx: 2, dy: 16 },
          { t: 'point', p: [3, 4], label: 'G', dx: -13, dy: 2 },
        ],
      },
      choices: ['$(1, 10)$', '$(-5, 2)$', '$(-2, 6)$', '$(10, 1)$'],
      answer: 0,
      solution:
        'Assign the variable: let the third vertex be $T(p, q)$. The centroid is the average of the three vertices, so $\\frac{0 + 8 + p}{3} = 3$ and $\\frac{0 + 2 + q}{3} = 4$. Multiplying out, the coordinates of the three vertices must add to $(9, 12)$, so $p = 9 - 8 = 1$ and $q = 12 - 2 = 10$, giving $T(1, 10)$ ✓. Check a second, independent way along the median from $T$. Draw the auxiliary segment from the midpoint $M$ of $\\overline{AB}$, which is $(4, 1)$, out through $G$ (dashed). The centroid lies two thirds of the way from $T$ to $M$, so $M$ is one third of the way back and $\\overline{TM}$ is three times $\\overline{GM}$ in the same direction: from $M$, the step to $G$ is $(-1, 3)$, so the step from $M$ to $T$ is $3 \\cdot (-1, 3) = (-3, 9)$, landing on $(4 - 3, 1 + 9) = (1, 10)$ ✓. (The choice $(-5, 2)$ is FORGETTING TO MULTIPLY THE CENTROID BY THREE, subtracting from $(3, 4)$ itself ✗; the choice $(-2, 6)$ is DOUBLING INSTEAD OF TRIPLING, subtracting from $(6, 8)$ ✗; the choice $(10, 1)$ is SWAPPING THE COORDINATES OF THE ANSWER ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 19,
  challenge,
}
