// Introduction to Geometry chapter 7 — variations for section 7.2
// (Perpendicular Bisectors of a Triangle). All problems, figures, and
// solutions are original MathQuest content.
//
// House rules for this file:
//  - Every numeric key was worked twice by routes that do not share their
//    arithmetic: a Pythagorean computation against a triple-family scaling,
//    an equidistance equation against a straight-line distance read off the
//    mid-line, a bisector-crossing argument against the Thales diameter
//    argument, and a coordinate distance check against the half-hypotenuse
//    rule. The two routes must agree before a key is written down.
//  - Every figure was built from its own numbers: each drawn circumcircle is
//    centered at the true circumcenter and its radius was checked against all
//    three vertices; every marked right angle was checked with a dot product;
//    obtuse-triangle centers sit below the base at their computed depth.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS. The traps running through this section: HIRING THE INCENTER,
//    STOPPING AT THE MIDPOINTS, AIMING AT THE ANGLES, ANSWERING THE DIAMETER,
//    HALVING A LEG, TRUSTING THE ACUTE PICTURE, BORROWING THE RIGHT
//    TRIANGLE'S SPECIAL SEAT, SITTING ON A VERTEX, HALVING THE RADIUS,
//    DOUBLING THE RADIUS, DEMANDING MORE DATA, PLANTING THE COMPASS ON THE
//    RIGHT ANGLE, GRABBING THE CENTROID, STOPPING AT A LEG'S MIDPOINT,
//    EXILING THE CENTER, SWAPPING SIDES FOR VERTICES, SENDING IN THE
//    ALTITUDES, ANSWERING THE CENTROID, SUBTRACTING THE LENGTHS, ADDING THE
//    SQUARES, ANSWERING A SLANTED SIDE, ANSWERING HALF THE BASE, ANSWERING
//    THE CENTER'S DROP, ANSWERING THE CENTER'S HEIGHT, STRETCHING TO THE
//    FULL HYPOTENUSE, HALVING A SECOND TIME, and DEMANDING THE LEGS.
//  - No two choices inside an item name the same value.

const s72 = [
  // s1 — the circumcenter is equidistant from the three vertices.
  [
    {
      q: 'Rae draws all three perpendicular bisectors of the sides of a scalene triangle and marks the single point where they cross. Measured from that point, which three distances must all be equal?',
      choices: [
        'the distances to the three vertices',
        'the distances to the three sides',
        'the distances to the three midpoints of the sides',
        'the distances to the three angles',
      ],
      answer: 0,
      solution:
        'Each perpendicular bisector is the collection of points equidistant from the two endpoints of its side — two VERTICES. At the crossing point $O$, the bisector of $\\overline{AB}$ forces $OA = OB$ and the bisector of $\\overline{BC}$ forces $OB = OC$, so the chain $OA = OB = OC$ makes all three vertex distances equal ✓. Check a second, independent way: a circle centered at $O$ through $A$ has radius $OA$, and since $OB$ and $OC$ match it, the circle passes through all three vertices — three equal radii to three corners ✓. (Equal distances to the three sides describe a different point entirely, the incenter of the next section — that choice is HIRING THE INCENTER ✗; each bisector does pass through its side’s midpoint, but in a scalene triangle $O$’s distances to the three midpoints are three different lengths — STOPPING AT THE MIDPOINTS ✗; an angle is an opening between rays, not a spot you can measure to — AIMING AT THE ANGLES ✗.)',
    },
    {
      q: 'Three villages sit at the three corners of a triangular valley. Planners place a radio mast at the circumcenter of the triangle formed by the villages, because that point is the same distance from each of the triangle’s three:',
      choices: ['sides', 'midpoints of the sides', 'vertices', 'angles'],
      answer: 2,
      solution:
        'The circumcenter is built by crossing the perpendicular bisectors of the sides, and each bisector guarantees equal distances to that side’s two endpoints — the VERTICES, which is where the villages stand. Chaining two bisectors gives $OA = OB = OC$, so the mast’s signal reaches each village across the same distance ✓. Check a second, independent way: the circle centered at the circumcenter through one village passes through all three (it is the circumcircle), and the three mast-to-village distances are three radii of one circle ✓. (Equal distances to the SIDES belong to the incenter, a different point with a different job — HIRING THE INCENTER ✗; the distances to the three side midpoints only coincide for special triangles, never as a guarantee — STOPPING AT THE MIDPOINTS ✗; an angle has no single location, so “distance to an angle” is not even a measurable length — AIMING AT THE ANGLES ✗.)',
    },
    {
      q: 'Ines crosses only two of a triangle’s three perpendicular side bisectors and marks their meeting point $P$. Even without drawing the third bisector, $P$ is already guaranteed to be equally far from all three of the triangle’s:',
      choices: ['angles', 'sides', 'midpoints of the sides', 'vertices'],
      answer: 3,
      solution:
        'The two drawn bisectors already do all the work: the bisector of $\\overline{AB}$ gives $PA = PB$, the bisector of $\\overline{BC}$ gives $PB = PC$, and stringing them together gives $PA = PB = PC$ — equal distances to the three VERTICES ✓ (this chain is exactly why the third bisector has no choice but to pass through $P$ as well). Check a second, independent way: a circle centered at $P$ with radius $PA$ passes through $A$, $B$, and $C$ at once, so the three vertex distances are radii of a single circle ✓. (Equal side distances belong to the incenter, built from angle bisectors instead — HIRING THE INCENTER ✗; a bisector passes through its side’s midpoint but says nothing about $P$’s distance to the other midpoints — STOPPING AT THE MIDPOINTS ✗; an angle is an opening, not a point, so no distance to it exists — AIMING AT THE ANGLES ✗.)',
    },
  ],
  // s2 — right-triangle legs to circumradius: R is half the hypotenuse.
  [
    {
      q: 'A metal shelf bracket is a right triangle whose legs measure $12$ cm and $16$ cm. A circular rim must be bent so that it passes through all three corners of the bracket. What radius should the rim have?',
      choices: ['$6$ cm', '$8$ cm', '$10$ cm', '$20$ cm'],
      answer: 2,
      solution:
        'The rim is the bracket’s circumcircle. Its hypotenuse is $\\sqrt{12^2 + 16^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20$ cm, and a right triangle’s circumradius is half its hypotenuse, so $R = \\frac{20}{2} = 10$ cm ✓. Check a second, independent way through the triple family: legs $12$ and $16$ are the $3$-$4$-$5$ triangle scaled by $4$, and the $3$-$4$-$5$ triangle’s circumradius is half of $5$, so scaling gives $R = 4 \\times \\frac{5}{2} = 10$ ✓. (The choice $20$ cm is ANSWERING THE DIAMETER — the hypotenuse is a diameter of the rim, not a radius ✗; $6$ cm and $8$ cm are each HALVING A LEG, but it is the hypotenuse, never a leg, that serves as the circle’s diameter ✗.)',
    },
    {
      q: 'The two legs of a right-triangular garden bed measure $30$ m and $40$ m, meeting at the right angle. A sprinkler is planted exactly at the bed’s circumcenter. How far is the sprinkler from each corner of the bed?',
      choices: ['$50$ m', '$25$ m', '$15$ m', '$20$ m'],
      answer: 1,
      solution:
        'The circumcenter is the same distance $R$ from every corner, and for a right triangle that distance is half the hypotenuse. The hypotenuse is $\\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50$ m, so the sprinkler sits $R = \\frac{50}{2} = 25$ m from each corner ✓. Check a second, independent way with the triple family: $30$-$40$ is the $3$-$4$-$5$ triangle scaled by $10$, whose circumradius is $\\frac{5}{2}$, so $R = 10 \\times \\frac{5}{2} = 25$ ✓. (The choice $50$ m is ANSWERING THE DIAMETER, the full hypotenuse ✗; $15$ m and $20$ m are each HALVING A LEG, but the legs are chords of the circumcircle, not diameters ✗.)',
    },
    {
      q: 'A right triangle with legs $10$ and $24$ is drawn, and then the unique circle through its three vertices is added. What is that circle’s radius?',
      choices: ['$5$', '$26$', '$12$', '$13$'],
      answer: 3,
      solution:
        'The circle through all three vertices is the circumcircle, and for a right triangle the hypotenuse is one of its diameters. The hypotenuse is $\\sqrt{10^2 + 24^2} = \\sqrt{100 + 576} = \\sqrt{676} = 26$, so the radius is $\\frac{26}{2} = 13$ ✓. Check a second, independent way through the triple family: $10$ and $24$ are the $5$-$12$-$13$ triangle scaled by $2$, whose circumradius is $\\frac{13}{2}$, so $R = 2 \\times \\frac{13}{2} = 13$ ✓. (The choice $26$ is ANSWERING THE DIAMETER ✗; $5$ and $12$ are each HALVING A LEG, treating a leg as if it stretched across the whole circle ✗.)',
    },
  ],
  // s3 — legs to circumradius, with the circumcircle drawn (figure).
  [
    {
      q: 'The circle in the figure passes through all three vertices of a right triangle whose legs measure $18$ and $24$, and $O$ is the circle’s center. What is the circle’s radius?',
      fig: {
        view: [-5, -8, 29, 26],
        elems: [
          { t: 'circle', c: [12, 9], r: 15 },
          { t: 'poly', pts: [[0, 0], [24, 0], [0, 18]], fill: false },
          { t: 'right', at: [0, 0], from: [24, 0], to: [0, 18], s: 0.8 },
          { t: 'seg', a: [12, 9], b: [0, 0], dash: true },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 12 },
          { t: 'label', p: [0, 9], text: '18', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 18], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [12, 9], label: 'O', dx: 12, dy: -6 },
        ],
      },
      choices: ['$15$', '$30$', '$9$', '$12$'],
      answer: 0,
      solution:
        'The hypotenuse is $\\sqrt{18^2 + 24^2} = \\sqrt{324 + 576} = \\sqrt{900} = 30$, and the circumradius of a right triangle is half the hypotenuse: $R = \\frac{30}{2} = 15$ ✓. Check a second, independent way from the figure’s coordinates: the center is the hypotenuse midpoint $O(12, 9)$, and its distance to the right-angle vertex $A(0,0)$ is $\\sqrt{144 + 81} = \\sqrt{225} = 15$ — the same $\\sqrt{144 + 81}$ reappears for $B(24, 0)$ and $C(0, 18)$, so all three vertices sit $15$ from $O$ ✓. (The choice $30$ is ANSWERING THE DIAMETER ✗; $9$ and $12$ are each HALVING A LEG, but only the hypotenuse runs corner-to-corner through the center ✗.)',
    },
    {
      q: 'A right triangle with legs $16$ and $30$ is inscribed in the circle shown, whose center is $O$. Find the radius of the circle.',
      fig: {
        view: [-4.5, -11, 34, 27],
        elems: [
          { t: 'circle', c: [15, 8], r: 17 },
          { t: 'poly', pts: [[0, 0], [30, 0], [0, 16]], fill: false },
          { t: 'right', at: [0, 0], from: [30, 0], to: [0, 16], s: 0.9 },
          { t: 'seg', a: [15, 8], b: [0, 0], dash: true },
          { t: 'label', p: [15, 0], text: '30', dx: 0, dy: 12 },
          { t: 'label', p: [0, 8], text: '16', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [30, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 16], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [15, 8], label: 'O', dx: 12, dy: -6 },
        ],
      },
      choices: ['$34$', '$8$', '$15$', '$17$'],
      answer: 3,
      solution:
        'The hypotenuse is $\\sqrt{16^2 + 30^2} = \\sqrt{256 + 900} = \\sqrt{1156} = 34$, so the circumradius is $R = \\frac{34}{2} = 17$ ✓. Check a second, independent way from the figure: the center is the hypotenuse midpoint $O(15, 8)$, and $OA = \\sqrt{15^2 + 8^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17$; the same computation lands on $17$ for $B(30, 0)$ and $C(0, 16)$ as well ✓. A quicker route to the hypotenuse: $16$ and $30$ are the $8$-$15$-$17$ triple doubled, so the hypotenuse is $34$ without squaring ✓. (The choice $34$ is ANSWERING THE DIAMETER ✗; $8$ and $15$ are each HALVING A LEG ✗.)',
    },
    {
      q: 'In the figure, $O$ is the center of the circle through the three vertices of a right triangle with legs $21$ and $28$, and a dashed segment joins $O$ to vertex $A$. How long is $\\overline{OA}$?',
      fig: {
        view: [-6, -9.5, 33.5, 30],
        elems: [
          { t: 'circle', c: [14, 10.5], r: 17.5 },
          { t: 'poly', pts: [[0, 0], [28, 0], [0, 21]], fill: false },
          { t: 'right', at: [0, 0], from: [28, 0], to: [0, 21], s: 0.9 },
          { t: 'seg', a: [14, 10.5], b: [0, 0], dash: true },
          { t: 'label', p: [14, 0], text: '28', dx: 0, dy: 12 },
          { t: 'label', p: [0, 10.5], text: '21', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [28, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 21], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [14, 10.5], label: 'O', dx: 12, dy: -6 },
        ],
      },
      choices: ['$14$', '$17.5$', '$35$', '$10.5$'],
      answer: 1,
      solution:
        '$\\overline{OA}$ is a radius of the circumcircle. The hypotenuse is $\\sqrt{21^2 + 28^2} = \\sqrt{441 + 784} = \\sqrt{1225} = 35$ — the $3$-$4$-$5$ family scaled by $7$ — and the circumradius of a right triangle is half the hypotenuse: $OA = \\frac{35}{2} = 17.5$ ✓. Check a second, independent way from the figure’s coordinates: the center is the hypotenuse midpoint $O(14, 10.5)$, so $OA = \\sqrt{14^2 + 10.5^2} = \\sqrt{196 + 110.25} = \\sqrt{306.25} = 17.5$ ✓, and by the midpoint symmetry $OB$ and $OC$ repeat the same value. (The choice $35$ is ANSWERING THE DIAMETER ✗; $14$ and $10.5$ are each HALVING A LEG ✗.)',
    },
  ],
  // s4 — the circumcenter of an obtuse triangle sits outside (figure).
  [
    {
      q: 'The triangle in the figure has an obtuse angle at $C$, and the circle through all three vertices is drawn. Where does that circle’s center $O$ sit?',
      fig: {
        view: [-3.5, -14, 15.5, 5],
        elems: [
          { t: 'circle', c: [6, -4.5], r: 7.5 },
          { t: 'poly', pts: [[0, 0], [12, 0], [6, 3]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: -4 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: -4 },
          { t: 'point', p: [6, 3], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [6, -4.5], label: 'O', dx: 12, dy: 6 },
        ],
      },
      choices: [
        'inside the triangle',
        'outside the triangle, across $\\overline{AB}$ from $C$',
        'at the midpoint of $\\overline{AB}$',
        'at the vertex $C$',
      ],
      answer: 1,
      solution:
        'The obtuse angle at $C$ means $C$ leans low over the long side $\\overline{AB}$, and the circle big enough to reach all three vertices must bulge out the other way — its center retreats across $\\overline{AB}$, outside the triangle ✓. Check a second, independent way by computing the figure’s center: it lies on the bisector $x = 6$ of $\\overline{AB}$, and equating distances to $A(0,0)$ and $C(6,3)$ gives $36 + y^2 = (y - 3)^2$, so $36 = -6y + 9$ and $y = -4.5$ — below $\\overline{AB}$, with $OA = OB = \\sqrt{36 + 20.25} = 7.5$ and $OC = 4.5 + 3 = 7.5$ ✓. (Inside is TRUSTING THE ACUTE PICTURE — only acute triangles keep the center indoors ✗; the midpoint of $\\overline{AB}$ is BORROWING THE RIGHT TRIANGLE’S SPECIAL SEAT, earned only when the angle at $C$ is exactly $90^\\circ$ ✗; the vertex $C$ is SITTING ON A VERTEX, which is distance $0$ from itself and far from equidistant ✗.)',
    },
    {
      q: 'One angle of triangle $ABC$ in the figure opens wider than $90^\\circ$. Mia hunts for the center of the circle through $A$, $B$, and $C$ by searching only inside the triangle, and never finds it. Where is the center hiding?',
      fig: {
        view: [-1.2, -4.9, 5.2, 2.2],
        elems: [
          { t: 'circle', c: [2, -1.5], r: 2.5 },
          { t: 'poly', pts: [[0, 0], [4, 0], [2, 1]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: -4 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: -4 },
          { t: 'point', p: [2, 1], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [2, -1.5], label: 'O', dx: 12, dy: 6 },
        ],
      },
      choices: [
        'inside the triangle, close to the widest angle',
        'at the midpoint of the longest side',
        'at the vertex of the widest angle',
        'outside the triangle, beyond the side opposite the widest angle',
      ],
      answer: 3,
      solution:
        'An obtuse triangle’s circumcenter always escapes the triangle: the wide angle squeezes the triangle flat against its longest side, and the only point equally far from all three vertices lies on the far side of that longest side ✓ — no amount of searching inside could find it. Check a second, independent way on the figure’s own numbers: the center sits on $x = 2$, and setting the distance to $A(0,0)$ equal to the distance to $C(2,1)$ gives $4 + y^2 = (y - 1)^2$, so $4 = -2y + 1$ and $y = -1.5$ — outside, below $\\overline{AB}$, with $OA = OB = \\sqrt{4 + 2.25} = 2.5$ and $OC = 1.5 + 1 = 2.5$ ✓. (Inside is TRUSTING THE ACUTE PICTURE ✗; the longest side’s midpoint is BORROWING THE RIGHT TRIANGLE’S SPECIAL SEAT — that midpoint is the center only when the opposite angle is exactly $90^\\circ$ ✗; the widest vertex is SITTING ON A VERTEX ✗.)',
    },
    {
      q: 'A triangle has one angle greater than $90^\\circ$, like the one shown with its circumscribed circle. Which statement about its circumcenter must be true?',
      fig: {
        view: [-4, -17.5, 20, 6],
        elems: [
          { t: 'circle', c: [8, -6], r: 10 },
          { t: 'poly', pts: [[0, 0], [16, 0], [8, 4]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: -4 },
          { t: 'point', p: [16, 0], label: 'B', dx: 10, dy: -4 },
          { t: 'point', p: [8, 4], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [8, -6], label: 'O', dx: 12, dy: 6 },
        ],
      },
      choices: [
        'It lies outside the triangle, beyond the side opposite the obtuse angle',
        'It lies inside the triangle whenever the triangle is drawn large enough',
        'It lies on the side opposite the obtuse angle, at that side’s midpoint',
        'It coincides with the obtuse-angled vertex',
      ],
      answer: 0,
      solution:
        'The obtuse angle pushes its opposite side far away and flattens the triangle against it, so the point equally distant from all three vertices must back away past that side — outside the triangle, every time ✓. Check a second, independent way on the drawn triangle: the center lies on $x = 8$, and equating distances to $A(0,0)$ and $C(8,4)$ gives $64 + y^2 = (y - 4)^2$, so $64 = -8y + 16$ and $y = -6$ — outside, with $OA = OB = \\sqrt{64 + 36} = 10$ and $OC = 6 + 4 = 10$ ✓. (Size never matters — scaling a triangle scales its circumcenter’s position right along with it, so “large enough” is TRUSTING THE ACUTE PICTURE ✗; the opposite side’s midpoint is BORROWING THE RIGHT TRIANGLE’S SPECIAL SEAT, reserved for a $90^\\circ$ angle exactly ✗; the obtuse vertex is SITTING ON A VERTEX, at distance $0$ from itself ✗.)',
    },
  ],
  // s5 — OA given at the circumcenter, OC wanted (figure).
  [
    {
      q: 'The dashed segments in the figure run from $O$, the point where the perpendicular bisectors of triangle $ABC$’s three sides meet. If $OA = 9$, how far is $O$ from $C$?',
      fig: {
        view: [-11, -11, 11, 11],
        elems: [
          { t: 'circle', c: [0, 0], r: 9 },
          { t: 'poly', pts: [[-7.2, -5.4], [7.2, -5.4], [-5.4, 7.2]], fill: false },
          { t: 'seg', a: [0, 0], b: [-7.2, -5.4], dash: true },
          { t: 'seg', a: [0, 0], b: [-5.4, 7.2], dash: true },
          { t: 'label', p: [-3.6, -2.7], text: '9', dx: 2, dy: 14 },
          { t: 'point', p: [-7.2, -5.4], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [7.2, -5.4], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [-5.4, 7.2], label: 'C', dx: -8, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: 12, dy: 2 },
        ],
      },
      choices: ['$9$', '$4.5$', '$18$', 'It cannot be determined from the given information'],
      answer: 0,
      solution:
        'The meeting point of the perpendicular bisectors is the circumcenter, and the bisector chain forces $OA = OB = OC$ — so $OC = 9$ with no further work ✓. Check a second, independent way from the figure’s coordinates: $O$ is at $(0, 0)$, $C$ at $(-5.4, 7.2)$, and $OC = \\sqrt{5.4^2 + 7.2^2} = \\sqrt{29.16 + 51.84} = \\sqrt{81} = 9$, matching $OA = \\sqrt{7.2^2 + 5.4^2} = 9$ exactly ✓ — both are radii of the drawn circle. (The choice $4.5$ is HALVING THE RADIUS for no reason the geometry supplies ✗; $18$ is DOUBLING THE RADIUS into a diameter, but $\\overline{OC}$ only reaches from center to rim ✗; “cannot be determined” is DEMANDING MORE DATA when equidistance is the circumcenter’s defining property ✗.)',
    },
    {
      q: 'A pin stands at the circumcenter $O$ of the triangular lawn $ABC$ shown, and a taut rope from the pin to corner $A$ measures $11$ m. How long is the straight path from the pin to corner $C$?',
      fig: {
        view: [-13, -13, 13, 13],
        elems: [
          { t: 'circle', c: [0, 0], r: 11 },
          { t: 'poly', pts: [[-8.8, -6.6], [8.8, -6.6], [0, 11]], fill: false },
          { t: 'seg', a: [0, 0], b: [-8.8, -6.6], dash: true },
          { t: 'seg', a: [0, 0], b: [0, 11], dash: true },
          { t: 'label', p: [-4.4, -3.3], text: '11', dx: 2, dy: 14 },
          { t: 'point', p: [-8.8, -6.6], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [8.8, -6.6], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [0, 11], label: 'C', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: 12, dy: 6 },
        ],
      },
      choices: ['$5.5$ m', '$22$ m', 'It cannot be determined from the given information', '$11$ m'],
      answer: 3,
      solution:
        'The circumcenter’s whole job is equidistance: $OA$, $OB$, and $OC$ are all radii of the circle through the lawn’s three corners, so $OC = OA = 11$ m ✓. Check a second, independent way from the figure’s coordinates: $O(0,0)$ to $C(0, 11)$ is $11$ straight up, and $O$ to $A(-8.8, -6.6)$ is $\\sqrt{8.8^2 + 6.6^2} = \\sqrt{77.44 + 43.56} = \\sqrt{121} = 11$ ✓ — the rope would stretch exactly as far in either direction. (The choice $5.5$ m is HALVING THE RADIUS ✗; $22$ m is DOUBLING THE RADIUS, the full width of the circle rather than pin-to-corner ✗; “cannot be determined” is DEMANDING MORE DATA when one radius already fixes them all ✗.)',
    },
    {
      q: 'In the figure, the circle through $A$, $B$, and $C$ has center $O$, and $OA = 4.5$. What is $OC$?',
      fig: {
        view: [-5.4, -5.4, 5.4, 5.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 4.5 },
          { t: 'poly', pts: [[-3.6, -2.7], [3.6, -2.7], [-2.7, 3.6]], fill: false },
          { t: 'seg', a: [0, 0], b: [-3.6, -2.7], dash: true },
          { t: 'seg', a: [0, 0], b: [-2.7, 3.6], dash: true },
          { t: 'label', p: [-1.8, -1.35], text: '4.5', dx: 4, dy: 14 },
          { t: 'point', p: [-3.6, -2.7], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [3.6, -2.7], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [-2.7, 3.6], label: 'C', dx: -8, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: 12, dy: 2 },
        ],
      },
      choices: ['$9$', '$2.25$', '$4.5$', 'It cannot be determined from the given information'],
      answer: 2,
      solution:
        '$O$ is the center of the circle through all three vertices, so $\\overline{OA}$ and $\\overline{OC}$ are both radii of that one circle: $OC = OA = 4.5$ ✓. Check a second, independent way from the figure’s coordinates: $C$ sits at $(-2.7, 3.6)$, so $OC = \\sqrt{2.7^2 + 3.6^2} = \\sqrt{7.29 + 12.96} = \\sqrt{20.25} = 4.5$, agreeing with $OA = \\sqrt{3.6^2 + 2.7^2} = 4.5$ ✓. (The choice $9$ is DOUBLING THE RADIUS into a diameter ✗; $2.25$ is HALVING THE RADIUS ✗; “cannot be determined” is DEMANDING MORE DATA — the center-to-vertex distances of one circle can never disagree ✗.)',
    },
  ],
  // s6 — a right triangle's circumcenter is the hypotenuse midpoint (figure).
  [
    {
      q: 'Dana needs to draw the circle through all three corners of right triangle $DEF$, which has its right angle at $F$, as shown. Where must the point of her compass go?',
      fig: {
        view: [-2, -2.5, 11, 7],
        elems: [
          { t: 'poly', pts: [[9, 0], [0, 5], [0, 0]], fill: false },
          { t: 'right', at: [0, 0], from: [9, 0], to: [0, 5] },
          { t: 'seg', a: [0, 0], b: [4.5, 2.5], dash: true },
          { t: 'point', p: [9, 0], label: 'D', dx: 10, dy: 10 },
          { t: 'point', p: [0, 5], label: 'E', dx: -10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'F', dx: -10, dy: 10 },
          { t: 'point', p: [4.5, 2.5], label: 'M', dx: 10, dy: -6 },
        ],
      },
      choices: [
        'at the right-angle vertex $F$',
        'at the midpoint $M$ of the hypotenuse $\\overline{DE}$',
        'at the crossing point of the three medians',
        'at the midpoint of the longer leg $\\overline{DF}$',
      ],
      answer: 1,
      solution:
        'The compass point must go at the circumcenter, the one spot equidistant from $D$, $E$, and $F$. The perpendicular bisector of leg $\\overline{DF}$ runs parallel to leg $\\overline{EF}$, halfway across, so it passes through the midpoint of the hypotenuse $\\overline{DE}$; the bisector of $\\overline{EF}$ does the same, and the two cross exactly at $M$ ✓. Check a second, independent way through the circle itself: the right angle at $F$ must be inscribed in a semicircle, so $\\overline{DE}$ is a diameter of the circle through the three corners — and a circle’s center is the midpoint of any diameter ✓. (Vertex $F$ is PLANTING THE COMPASS ON THE RIGHT ANGLE, a point at distance $0$ from itself ✗; the medians’ crossing is GRABBING THE CENTROID, which balances the triangle but is not equidistant from its corners ✗; a leg’s midpoint is STOPPING AT A LEG’S MIDPOINT, equidistant from only that leg’s two endpoints ✗.)',
    },
    {
      q: 'In right triangle $PQR$ the right angle is at $Q$. The perpendicular bisectors of the two legs, $\\overline{QR}$ and $\\overline{QP}$, are drawn as dashed lines in the figure. Where do they cross?',
      fig: {
        view: [-2, -1.8, 9, 6],
        elems: [
          { t: 'poly', pts: [[0, 4], [0, 0], [7, 0]], fill: false },
          { t: 'right', at: [0, 0], from: [7, 0], to: [0, 4] },
          { t: 'seg', a: [3.5, -0.6], b: [3.5, 4.4], dash: true },
          { t: 'seg', a: [-0.6, 2], b: [7.6, 2], dash: true },
          { t: 'point', p: [0, 4], label: 'P', dx: -10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'Q', dx: -10, dy: 10 },
          { t: 'point', p: [7, 0], label: 'R', dx: 10, dy: 10 },
        ],
      },
      choices: [
        'at the midpoint of the hypotenuse $\\overline{PR}$',
        'at the right-angle vertex $Q$',
        'at a point outside the triangle',
        'at the midpoint of leg $\\overline{QR}$',
      ],
      answer: 0,
      solution:
        'Each leg’s bisector runs parallel to the other leg at half its distance: the bisector of $\\overline{QR}$ is the vertical line through $(3.5, 0)$, and the bisector of $\\overline{QP}$ is the horizontal line through $(0, 2)$. They cross at $(3.5, 2)$, and the midpoint of $\\overline{PR}$ is $\\left(\\frac{0 + 7}{2}, \\frac{4 + 0}{2}\\right) = (3.5, 2)$ — the same point ✓. Check a second, independent way: the crossing of two side bisectors is the circumcenter, and the right angle at $Q$ makes $\\overline{PR}$ a diameter of the circumcircle, whose center is that diameter’s midpoint ✓. (Vertex $Q$ is PLANTING THE COMPASS ON THE RIGHT ANGLE — both bisectors miss it by half a leg ✗; outside is EXILING THE CENTER, the fate of obtuse triangles, not right ones ✗; a leg’s midpoint is STOPPING AT A LEG’S MIDPOINT, where only one of the two bisectors passes ✗.)',
    },
    {
      q: 'In the figure, $M$ is the midpoint of side $\\overline{YZ}$ of right triangle $XYZ$, whose right angle is at $X$. Which special point of the triangle is $M$?',
      fig: {
        view: [-2, -2.5, 12, 9],
        elems: [
          { t: 'poly', pts: [[10, 0], [0, 7], [0, 0]], fill: false },
          { t: 'right', at: [0, 0], from: [10, 0], to: [0, 7] },
          { t: 'seg', a: [0, 0], b: [5, 3.5], dash: true },
          { t: 'point', p: [0, 0], label: 'X', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'Y', dx: 10, dy: 10 },
          { t: 'point', p: [0, 7], label: 'Z', dx: -10, dy: -8 },
          { t: 'point', p: [5, 3.5], label: 'M', dx: 10, dy: -6 },
        ],
      },
      choices: ['the incenter', 'the centroid', 'the circumcenter', 'the orthocenter'],
      answer: 2,
      solution:
        'The median to the hypotenuse of a right triangle is half the hypotenuse, so $MX = MY = MZ$ — the point $M$ is equidistant from all three VERTICES, and that is the circumcenter’s job description ✓. Check a second, independent way: the right angle at $X$ inscribes in a semicircle, so $\\overline{YZ}$ is a diameter of the circle through $X$, $Y$, and $Z$; the center of that circle is the diameter’s midpoint, which is $M$ ✓. (The incenter is equidistant from the three SIDES, not the vertices — SWAPPING SIDES FOR VERTICES ✗; the centroid sits two-thirds of the way from $X$ along the median, strictly inside the triangle, never out at $M$ — GRABBING THE CENTROID ✗; the orthocenter of a right triangle is the right-angle vertex $X$ itself, since both legs are altitudes — SENDING IN THE ALTITUDES ✗.)',
    },
  ],
  // s7 — coordinates of a right triangle's circumcenter (figure).
  [
    {
      q: 'A triangular deck is laid out on a coordinate grid with corners $A(0, 0)$, $B(16, 0)$, and $C(0, 12)$, and its right angle at $A$. A single lamp must hang the same distance from all three corners. Over which grid point should it hang?',
      fig: {
        view: [-2.5, -2.5, 18, 14],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [0, 12]], fill: false },
          { t: 'right', at: [0, 0], from: [16, 0], to: [0, 12] },
          { t: 'seg', a: [0, 0], b: [8, 6], dash: true },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 12 },
          { t: 'label', p: [0, 6], text: '12', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 12], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [8, 6], label: 'O', dx: 12, dy: -4 },
        ],
      },
      choices: ['$\\left(\\frac{16}{3}, 4\\right)$', '$(0, 0)$', '$(8, 6)$', '$(8, 0)$'],
      answer: 2,
      solution:
        'The lamp’s spot is the circumcenter. The right angle is at $A$, so the hypotenuse is $\\overline{BC}$, and a right triangle’s circumcenter is the hypotenuse midpoint: $\\left(\\frac{16 + 0}{2}, \\frac{0 + 12}{2}\\right) = (8, 6)$ ✓. Check a second, independent way by measuring: from $(8, 6)$ the distance to $A(0,0)$ is $\\sqrt{64 + 36} = 10$, to $B(16, 0)$ is $\\sqrt{64 + 36} = 10$, and to $C(0, 12)$ is $\\sqrt{64 + 36} = 10$ — three equal distances, so no other point can claim the job ✓. (The point $\\left(\\frac{16}{3}, 4\\right)$ is ANSWERING THE CENTROID, which balances the deck but hangs closer to some corners than others ✗; $(0, 0)$ is PLANTING THE COMPASS ON THE RIGHT ANGLE ✗; $(8, 0)$ is STOPPING AT A LEG’S MIDPOINT, equidistant from $A$ and $B$ only ✗.)',
    },
    {
      q: 'What is the center of the circle that passes through the three points $A(0, 0)$, $B(10, 0)$, and $C(0, 24)$?',
      fig: {
        w: 260,
        view: [-2.5, -2.5, 12.5, 26],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [0, 24]], fill: false },
          { t: 'right', at: [0, 0], from: [10, 0], to: [0, 24] },
          { t: 'seg', a: [0, 0], b: [5, 12], dash: true },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 12 },
          { t: 'label', p: [0, 12], text: '24', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 24], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [5, 12], label: 'O', dx: 12, dy: -4 },
        ],
      },
      choices: ['$(5, 12)$', '$\\left(\\frac{10}{3}, 8\\right)$', '$(0, 12)$', '$(5, 0)$'],
      answer: 0,
      solution:
        'The three points form a right triangle with its right angle at $A$ (the legs run along the axes), so the circle through them has the hypotenuse $\\overline{BC}$ as a diameter, and its center is the midpoint $\\left(\\frac{10 + 0}{2}, \\frac{0 + 24}{2}\\right) = (5, 12)$ ✓. Check a second, independent way by measuring from $(5, 12)$: to $A(0,0)$, $\\sqrt{25 + 144} = 13$; to $B(10, 0)$, $\\sqrt{25 + 144} = 13$; to $C(0, 24)$, $\\sqrt{25 + 144} = 13$ — one radius, three vertices ✓. (The point $\\left(\\frac{10}{3}, 8\\right)$ is ANSWERING THE CENTROID ✗; $(0, 12)$ and $(5, 0)$ are each STOPPING AT A LEG’S MIDPOINT — each is equidistant from just two of the three points ✗.)',
    },
    {
      q: 'The right triangle in the figure has vertices $A(0, 0)$, $B(24, 0)$, and $C(0, 18)$. At which point do its three perpendicular side bisectors meet?',
      fig: {
        view: [-3, -3, 26, 20],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [0, 18]], fill: false },
          { t: 'right', at: [0, 0], from: [24, 0], to: [0, 18], s: 0.8 },
          { t: 'seg', a: [0, 0], b: [12, 9], dash: true },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 12 },
          { t: 'label', p: [0, 9], text: '18', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 18], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [12, 9], label: 'O', dx: 12, dy: -4 },
        ],
      },
      choices: ['$(12, 0)$', '$(8, 6)$', '$(0, 0)$', '$(12, 9)$'],
      answer: 3,
      solution:
        'The three side bisectors meet at the circumcenter, and with the right angle at $A$ the hypotenuse is $\\overline{BC}$, so the meeting point is its midpoint: $\\left(\\frac{24 + 0}{2}, \\frac{0 + 18}{2}\\right) = (12, 9)$ ✓. Check a second, independent way by measuring from $(12, 9)$: the distances to $A(0,0)$, $B(24, 0)$, and $C(0, 18)$ are each $\\sqrt{144 + 81} = \\sqrt{225} = 15$ ✓ — equidistant, exactly as the bisector chain demands. (The point $(8, 6)$ is ANSWERING THE CENTROID, the average of the three vertices ✗; $(0, 0)$ is PLANTING THE COMPASS ON THE RIGHT ANGLE ✗; $(12, 0)$ is STOPPING AT A LEG’S MIDPOINT — only the bisector of $\\overline{AB}$ passes through it ✗.)',
    },
  ],
  // s8 — one side a diameter: Thales plus Pythagoras for the third side.
  [
    {
      q: 'A triangular pane of glass fits exactly inside a circular frame of radius $10$, its three corners on the frame, and the pane’s longest edge runs straight across the center of the frame. One of the two remaining edges measures $16$. How long is the third edge?',
      choices: ['$4$', '$20$', '$4\\sqrt{41}$', '$12$'],
      answer: 3,
      solution:
        'An edge through the center is a diameter, of length $2 \\times 10 = 20$, and a triangle inscribed with one side a diameter is a RIGHT triangle with that diameter as its hypotenuse (the $R = \\frac{c}{2}$ fact read backwards). So the third edge is $\\sqrt{20^2 - 16^2} = \\sqrt{400 - 256} = \\sqrt{144} = 12$ ✓. Check a second, independent way through the triple family: $12$-$16$-$20$ is the $3$-$4$-$5$ triangle scaled by $4$, and $144 + 256 = 400$ closes the Pythagorean equation exactly ✓. (The choice $4$ is SUBTRACTING THE LENGTHS $20 - 16$ without squaring ✗; $4\\sqrt{41}$ is ADDING THE SQUARES, $\\sqrt{400 + 256} = \\sqrt{656}$, as if the diameter were a leg ✗; $20$ is ANSWERING THE DIAMETER, the edge already known ✗.)',
    },
    {
      q: 'Points $A$, $B$, and $C$ all lie on a circle of radius $12.5$, and $\\overline{AB}$ is a diameter of the circle. If $BC = 7$, what is $CA$?',
      choices: ['$18$', '$24$', '$25$', '$\\sqrt{674}$'],
      answer: 1,
      solution:
        'Since $\\overline{AB}$ is a diameter, the inscribed angle at $C$ is a right angle, making $\\triangle ABC$ a right triangle with hypotenuse $AB = 2 \\times 12.5 = 25$. Then $CA = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$ ✓. Check a second, independent way through the triple family: $7$-$24$-$25$ is a Pythagorean triple, and $49 + 576 = 625$ closes the equation on the nose ✓. (The choice $18$ is SUBTRACTING THE LENGTHS $25 - 7$ ✗; $\\sqrt{674}$ is ADDING THE SQUARES, $\\sqrt{625 + 49}$, treating the diameter as a leg ✗; $25$ is ANSWERING THE DIAMETER instead of the missing side ✗.)',
    },
    {
      q: 'A triangle’s three vertices lie on a circle of radius $14.5$, and one of its sides passes through the circle’s center. Another side has length $21$. Find the length of the remaining side.',
      choices: ['$8$', '$29$', '$20$', '$\\sqrt{1282}$'],
      answer: 2,
      solution:
        'The side through the center is a diameter of length $2 \\times 14.5 = 29$, and the angle opposite a diameter is a right angle — so the triangle is right with hypotenuse $29$. The remaining side is $\\sqrt{29^2 - 21^2} = \\sqrt{841 - 441} = \\sqrt{400} = 20$ ✓. Check a second, independent way through the triple family: $20$-$21$-$29$ is a Pythagorean triple, since $400 + 441 = 841 = 29^2$ ✓. (The choice $8$ is SUBTRACTING THE LENGTHS $29 - 21$ ✗; $\\sqrt{1282}$ is ADDING THE SQUARES, $\\sqrt{841 + 441}$ ✗; $29$ is ANSWERING THE DIAMETER, the side the problem already handed over ✗.)',
    },
  ],
  // s9 — isosceles coordinate triangle: equidistance equation for R (figure).
  [
    {
      q: 'Triangle $ABC$ in the figure has $A(0, 0)$, $B(8, 0)$, and $C(4, 3)$, so $CA = CB = 5$ and $AB = 8$. The circle through all three vertices is drawn with its center $O$ marked. What is the circle’s radius?',
      fig: {
        view: [-1.8, -6.4, 9.8, 4.3],
        elems: [
          { t: 'circle', c: [4, -7 / 6], r: 25 / 6 },
          { t: 'poly', pts: [[0, 0], [8, 0], [4, 3]], fill: false },
          { t: 'seg', a: [4, -7 / 6], b: [0, 0], dash: true },
          { t: 'seg', a: [4, -7 / 6], b: [4, 3], dash: true },
          { t: 'label', p: [4, 0], text: '8', dx: 14, dy: 12 },
          { t: 'label', p: [2, 1.5], text: '5', dx: -8, dy: -6 },
          { t: 'label', p: [6, 1.5], text: '5', dx: 8, dy: -6 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [8, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [4, 3], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [4, -7 / 6], label: 'O', dx: 12, dy: 6 },
        ],
      },
      choices: ['$\\frac{25}{6}$', '$5$', '$4$', '$\\frac{7}{6}$'],
      answer: 0,
      solution:
        'The center lies on the perpendicular bisector of $\\overline{AB}$, the vertical mid-line $x = 4$ — which automatically makes $OA = OB$. Write $O(4, y)$ and demand $OA = OC$: $16 + y^2 = (3 - y)^2 = 9 - 6y + y^2$, so $16 = 9 - 6y$ and $y = -\\frac{7}{6}$. The negative sign puts $O$ BELOW the base $\\overline{AB}$, outside the triangle — as it must be, since the angle at $C$ is obtuse ($\\overrightarrow{CA} \\cdot \\overrightarrow{CB} = -16 + 9 < 0$), and the figure shows the center beneath the base. Then $R = OA = \\sqrt{16 + \\frac{49}{36}} = \\sqrt{\\frac{625}{36}} = \\frac{25}{6}$ ✓. Check a second, independent way straight up the mid-line: $O\\left(4, -\\frac{7}{6}\\right)$ and $C(4, 3)$ share $x = 4$, so $OC = 3 + \\frac{7}{6} = \\frac{25}{6}$ ✓ — the same radius with no square root taken. (The choice $5$ is ANSWERING A SLANTED SIDE, the length $CA$ ✗; $4$ is ANSWERING HALF THE BASE ✗; $\\frac{7}{6}$ is ANSWERING THE CENTER’S DROP below the base, not a distance to any vertex ✗.)',
    },
    {
      q: 'The isosceles triangle shown has vertices $A(0, 0)$, $B(12, 0)$, and $C(6, 8)$, with $CA = CB = 10$. Find the radius of its circumscribed circle, whose center is the marked point $O$.',
      fig: {
        view: [-1.8, -5.6, 13.8, 9.2],
        elems: [
          { t: 'circle', c: [6, 7 / 4], r: 25 / 4 },
          { t: 'poly', pts: [[0, 0], [12, 0], [6, 8]], fill: false },
          { t: 'seg', a: [6, 7 / 4], b: [12, 0], dash: true },
          { t: 'seg', a: [6, 7 / 4], b: [6, 8], dash: true },
          { t: 'label', p: [6, 0], text: '12', dx: -16, dy: 12 },
          { t: 'label', p: [3, 4], text: '10', dx: -10, dy: -6 },
          { t: 'label', p: [9, 4], text: '10', dx: 10, dy: -6 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 8], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [6, 7 / 4], label: 'O', dx: -12, dy: 6 },
        ],
      },
      choices: ['$\\frac{7}{4}$', '$10$', '$\\frac{25}{4}$', '$6$'],
      answer: 2,
      solution:
        'The center sits on the vertical mid-line $x = 6$ (the perpendicular bisector of $\\overline{AB}$), which already forces $OA = OB$. Write $O(6, y)$ and set $OA = OC$: $36 + y^2 = (8 - y)^2 = 64 - 16y + y^2$, so $16y = 28$ and $y = \\frac{7}{4}$. Here $y$ is positive — the triangle is acute, and the center stays inside, a little above the base. Then $R = OA = \\sqrt{36 + \\frac{49}{16}} = \\sqrt{\\frac{625}{16}} = \\frac{25}{4}$ ✓. Check a second, independent way straight down from the apex: $C(6, 8)$ and $O\\left(6, \\frac{7}{4}\\right)$ share $x = 6$, so $OC = 8 - \\frac{7}{4} = \\frac{25}{4}$ ✓ — equidistance confirmed without any squaring. (The choice $10$ is ANSWERING A SLANTED SIDE ✗; $6$ is ANSWERING HALF THE BASE ✗; $\\frac{7}{4}$ is ANSWERING THE CENTER’S HEIGHT above the base, not a radius ✗.)',
    },
    {
      q: 'In the figure, triangle $ABC$ has $A(0, 0)$, $B(16, 0)$, and $C(8, 6)$, so $CA = CB = 10$ and $AB = 16$. The circle through $A$, $B$, and $C$ has center $O$. What is its radius?',
      fig: {
        view: [-2.2, -11.8, 18.2, 7.2],
        elems: [
          { t: 'circle', c: [8, -7 / 3], r: 25 / 3 },
          { t: 'poly', pts: [[0, 0], [16, 0], [8, 6]], fill: false },
          { t: 'seg', a: [8, -7 / 3], b: [0, 0], dash: true },
          { t: 'seg', a: [8, -7 / 3], b: [8, 6], dash: true },
          { t: 'label', p: [8, 0], text: '16', dx: 16, dy: 12 },
          { t: 'label', p: [4, 3], text: '10', dx: -10, dy: -6 },
          { t: 'label', p: [12, 3], text: '10', dx: 10, dy: -6 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [8, 6], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [8, -7 / 3], label: 'O', dx: 12, dy: 6 },
        ],
      },
      choices: ['$8$', '$\\frac{25}{3}$', '$10$', '$\\frac{7}{3}$'],
      answer: 1,
      solution:
        'The center lies on the vertical mid-line $x = 8$, the perpendicular bisector of $\\overline{AB}$, so $OA = OB$ for free. Write $O(8, y)$ and set $OA = OC$: $64 + y^2 = (6 - y)^2 = 36 - 12y + y^2$, so $64 = 36 - 12y$ and $y = -\\frac{7}{3}$. The negative $y$ drops $O$ BELOW the base, outside the triangle — forced by the obtuse angle at $C$ ($\\overrightarrow{CA} \\cdot \\overrightarrow{CB} = -64 + 36 < 0$), and the drawing shows exactly that. Then $R = OA = \\sqrt{64 + \\frac{49}{9}} = \\sqrt{\\frac{625}{9}} = \\frac{25}{3}$ ✓. Check a second, independent way along the mid-line: $C(8, 6)$ and $O\\left(8, -\\frac{7}{3}\\right)$ share $x = 8$, so $OC = 6 + \\frac{7}{3} = \\frac{25}{3}$ ✓ — no square root needed. (The choice $10$ is ANSWERING A SLANTED SIDE ✗; $8$ is ANSWERING HALF THE BASE ✗; $\\frac{7}{3}$ is ANSWERING THE CENTER’S DROP, the depth of $O$ below the base ✗.)',
    },
  ],
  // s10 — the median to the hypotenuse is half the hypotenuse (figure).
  [
    {
      q: 'A zip line runs straight down the hypotenuse $\\overline{AB}$ of a right-triangular adventure course whose right angle is at $C$, as shown. The rest platform $M$ sits exactly halfway along the line, with $MA = MB = 14$ m. How far is the platform from the corner $C$?',
      fig: {
        view: [-2.5, -3.5, 30.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [28, 0], [5.6, 11.2]], fill: false },
          { t: 'right', at: [5.6, 11.2], from: [0, 0], to: [28, 0], s: 0.8 },
          { t: 'seg', a: [14, 0], b: [5.6, 11.2], dash: true },
          { t: 'label', p: [7, 0], text: '14', dx: 0, dy: 12 },
          { t: 'label', p: [21, 0], text: '14', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [28, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [5.6, 11.2], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [14, 0], label: 'M', dx: 4, dy: 12 },
        ],
      },
      choices: ['$28$ m', '$14$ m', '$7$ m', 'It cannot be determined without knowing the legs'],
      answer: 1,
      solution:
        'The midpoint of the hypotenuse is the circumcenter of a right triangle, so it is equidistant from all three vertices: $MC = MA = MB = 14$ m ✓. Check a second, independent way with Thales run in reverse: the circle centered at $M$ with radius $14$ passes through $A$ and $B$, and since $\\angle ACB = 90^\\circ$, the vertex $C$ must lie on the circle with diameter $\\overline{AB}$ — the very same circle — so $MC$ is one of its radii, $14$ m ✓. Guard from the figure’s coordinates: $C(5.6, 11.2)$ and $M(14, 0)$ give $MC = \\sqrt{8.4^2 + 11.2^2} = \\sqrt{70.56 + 125.44} = \\sqrt{196} = 14$ ✓. (The choice $28$ m is STRETCHING TO THE FULL HYPOTENUSE ✗; $7$ m is HALVING A SECOND TIME ✗; “cannot be determined” is DEMANDING THE LEGS, which the median to the hypotenuse never needs ✗.)',
    },
    {
      q: 'In the figure, $M$ is the midpoint of hypotenuse $\\overline{AB}$ of right triangle $ABC$, with $MA = MB = 19$. The dashed segment is the median from the right angle at $C$. How long is that median, $\\overline{MC}$?',
      fig: {
        w: 380,
        view: [-3, -4.5, 41, 17.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [38, 0], [7.6, 15.2]], fill: false },
          { t: 'right', at: [7.6, 15.2], from: [0, 0], to: [38, 0], s: 1 },
          { t: 'seg', a: [19, 0], b: [7.6, 15.2], dash: true },
          { t: 'label', p: [9.5, 0], text: '19', dx: 0, dy: 12 },
          { t: 'label', p: [28.5, 0], text: '19', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [38, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [7.6, 15.2], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [19, 0], label: 'M', dx: 4, dy: 12 },
        ],
      },
      choices: ['$38$', 'It cannot be determined without knowing the legs', '$9.5$', '$19$'],
      answer: 3,
      solution:
        'A right triangle’s circumcenter is the midpoint of its hypotenuse, so $M$ is equidistant from $A$, $B$, and $C$: the median $MC = MA = MB = 19$ ✓ — the median to the hypotenuse is always half the hypotenuse, whatever the legs turn out to be. Check a second, independent way with the circle: $M$’s circle of radius $19$ passes through $A$ and $B$, and the right angle at $C$ forces $C$ onto the circle with diameter $\\overline{AB}$, which is that exact circle — so $MC$ is a radius, $19$ ✓. Guard from the figure’s coordinates: $C(7.6, 15.2)$ and $M(19, 0)$ give $MC = \\sqrt{11.4^2 + 15.2^2} = \\sqrt{129.96 + 231.04} = \\sqrt{361} = 19$ ✓. (The choice $38$ is STRETCHING TO THE FULL HYPOTENUSE ✗; $9.5$ is HALVING A SECOND TIME ✗; “cannot be determined” is DEMANDING THE LEGS ✗.)',
    },
    {
      q: 'In the figure the right angle of triangle $ABC$ is at $C$, and $M$ marks the middle of the hypotenuse $\\overline{AB}$, with $MA = MB = 22$. Priya says $MC$ cannot be found without knowing the legs; Tomás says the given information already forces it. Who is right — and if a value is forced, what is $MC$?',
      fig: {
        w: 400,
        view: [-3.5, -5, 47.5, 20],
        elems: [
          { t: 'poly', pts: [[0, 0], [44, 0], [8.8, 17.6]], fill: false },
          { t: 'right', at: [8.8, 17.6], from: [0, 0], to: [44, 0], s: 1.1 },
          { t: 'seg', a: [22, 0], b: [8.8, 17.6], dash: true },
          { t: 'label', p: [11, 0], text: '22', dx: 0, dy: 12 },
          { t: 'label', p: [33, 0], text: '22', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [44, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [8.8, 17.6], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [22, 0], label: 'M', dx: 4, dy: 12 },
        ],
      },
      choices: ['$11$', '$44$', '$22$', 'Priya is right — it cannot be determined without the legs'],
      answer: 2,
      solution:
        'Tomás wins: the hypotenuse midpoint of a right triangle is its circumcenter, equidistant from all three vertices, so $MC = MA = MB = 22$ no matter what the legs are ✓. Check a second, independent way through Thales: the right angle at $C$ places $C$ on the circle whose diameter is $\\overline{AB}$; that circle is centered at $M$ with radius $22$, so $MC$, a center-to-rim distance, is $22$ ✓. Guard from the figure’s coordinates: $C(8.8, 17.6)$ and $M(22, 0)$ give $MC = \\sqrt{13.2^2 + 17.6^2} = \\sqrt{174.24 + 309.76} = \\sqrt{484} = 22$ ✓. (The choice $44$ is STRETCHING TO THE FULL HYPOTENUSE ✗; $11$ is HALVING A SECOND TIME ✗; siding with Priya is DEMANDING THE LEGS, when the half-hypotenuse rule needs none of them ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 7,
  sections: {
    '7.2': s72,
  },
}
