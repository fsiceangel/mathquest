// Introduction to Geometry chapter 7 — variations for section 7.3
// (Angle Bisectors of a Triangle). All problems, figures, and solutions are
// original MathQuest content.
//
// House rules for this file:
//  - Every numeric key was worked twice, by two routes that do not share
//    arithmetic: Area over semiperimeter against the right-triangle shortcut
//    r = (leg + leg − hyp)/2, the rs product against the three-sliver
//    decomposition, and each figure's incenter placed at its exact
//    coordinates and re-checked as a perpendicular distance to a slanted
//    side. The routes must agree before a key is written down.
//  - Every figure was built from its own numbers: right-triangle incircles
//    sit at (r, r) with the right angle at the origin, isosceles incircles
//    ride the axis of symmetry at height r, and each scalene incenter was
//    computed from the weighted-vertex formula and confirmed against two
//    side-distance calculations.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS. The traps running through this section: HANDING THE JOB TO THE
//    CIRCUMCENTER, AIMING AT THE MIDPOINTS, MEASURING TO THE WRONG SEGMENTS,
//    MEASURING TO THE ALTITUDES, USING THE PERIMETER INSTEAD OF THE
//    SEMIPERIMETER, ANSWERING THE CIRCUMRADIUS, HALVING A LEG, SNEAKING IN
//    AN EXTRA HALF, ANSWERING THE SEMIPERIMETER, PICKING THE CENTER THAT
//    ESCAPES, PICKING THE OTHER ESCAPER, DENYING THE GUARANTEE, MEASURING TO
//    THE VERTEX, ADDING INSTEAD OF MULTIPLYING, ANSWERING THE HEIGHT,
//    DIVIDING BY THE BASE, ANSWERING THE INRADIUS, DOUBLING THE INRADIUS,
//    and FORGETTING THE FINAL HALVING.
//  - No two choices inside an item name the same value.

const s73 = [
  // s1 — the incenter is equidistant from the three sides.
  [
    {
      q: 'A triangular park is bordered by three straight roads. The town wants a single lamppost whose perpendicular distance to each road is the same, so the crew plants it where the park’s three angle bisectors meet. That point does the job because the incenter of a triangle is equidistant from the triangle’s three:',
      choices: ['vertices', 'midpoints', 'sides', 'medians'],
      answer: 2,
      solution:
        'An angle bisector collects exactly the points equidistant from the two sides of its angle, so the meeting point of all three bisectors carries three equal side-distances at once: the first bisector matches two of the roads, the second matches an overlapping pair, and chaining the equalities around the park makes all three distances agree ✓. Check a second, independent way through the circle this buys: a circle centered at the lamppost with radius equal to that common distance touches all three roads — the inscribed circle of the park — and only a point equally far from the three SIDES can serve as its center ✓. (Choosing "vertices" is HANDING THE JOB TO THE CIRCUMCENTER, the point built from perpendicular bisectors ✗; "midpoints" is AIMING AT THE MIDPOINTS, which no bisector theorem ever mentions ✗; "medians" is MEASURING TO THE WRONG SEGMENTS — the angle-bisector theorem speaks of distances to sides ✗.)',
    },
    {
      q: 'Rosa inscribes a circle in a triangular pane of stained glass; the circle fits snugly against all three edges without crossing any of them. Because tangency happens at exactly one perpendicular distance — the radius — the circle’s center must be the same distance from the pane’s three:',
      choices: ['sides', 'vertices', 'midpoints', 'altitudes'],
      answer: 0,
      solution:
        'A circle touches a line exactly when the perpendicular distance from its center to that line equals its radius. Rosa’s circle touches all three edges, so the center’s three perpendicular side-distances are all equal to one number, the inradius ✓. Check a second, independent way through angle bisectors: a point equidistant from two sides of an angle sits on that angle’s bisector, so the center lies on all three bisectors at once — it is the incenter, the very point defined by equal SIDE distances ✓. (Choosing "vertices" is HANDING THE JOB TO THE CIRCUMCENTER, whose circle passes through corners instead of hugging edges ✗; "midpoints" is AIMING AT THE MIDPOINTS, a condition no tangent circle cares about ✗; "altitudes" is MEASURING TO THE ALTITUDES, segments that the incircle has no reason to touch ✗.)',
    },
    {
      q: 'A quiz asks Deshawn to match each special point of a triangle to the distances it equalizes. He has already matched the circumcenter to the three vertices. The incenter — where the three angle bisectors cross — should be matched to the triangle’s three:',
      choices: ['angles', 'medians', 'vertices', 'sides'],
      answer: 3,
      solution:
        'Each angle bisector is the set of points equidistant from the two sides of its angle, so the crossing point of all three inherits equal perpendicular distances to all three sides — that shared distance is the inradius ✓. Check a second, independent way by asking what circle each point owns: the circumcenter’s equal VERTEX distances make it the center of the circle through the corners, while the incenter’s equal SIDE distances make it the center of the circle tucked against the edges; two different centers, two different jobs, and the incenter’s job is sides ✓. (Choosing "vertices" is HANDING THE JOB TO THE CIRCUMCENTER, the match Deshawn already used ✗; "medians" is MEASURING TO THE WRONG SEGMENTS ✗; "angles" is not a distance at all — an angle has a measure, not a location to be far from ✗.)',
    },
  ],
  // s2 — right-triangle legs given, inradius wanted (figure).
  [
    {
      q: 'The right triangle in the figure has legs $12$ and $16$ meeting at the right angle $A$, and a circle centered at $I$ is inscribed in it, touching all three sides. What is the radius of the circle?',
      fig: {
        view: [-2, -2, 18, 14],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [0, 12]], fill: false },
          { t: 'circle', c: [4, 4], r: 4 },
          { t: 'right', at: [0, 0], from: [16, 0], to: [0, 12] },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [0, 6], text: '12', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 12], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [4, 4], label: 'I', dx: 0, dy: -12 },
        ],
      },
      choices: ['$2$', '$4$', '$10$', '$8$'],
      answer: 1,
      solution:
        'The hypotenuse is $\\sqrt{12^2 + 16^2} = \\sqrt{400} = 20$, so the area is $\\frac{1}{2} \\cdot 12 \\cdot 16 = 96$ and the semiperimeter is $s = \\frac{12 + 16 + 20}{2} = 24$; then Area $= rs$ gives $r = \\frac{96}{24} = 4$ ✓. Check a second, independent way with the right-triangle shortcut: $r = \\frac{\\text{leg} + \\text{leg} - \\text{hypotenuse}}{2} = \\frac{12 + 16 - 20}{2} = 4$ ✓. Guard: with the right angle at the origin the incircle’s center sits at $(4, 4)$, and its distance to the hypotenuse line $12x + 16y - 192 = 0$ is $\\frac{|48 + 64 - 192|}{20} = \\frac{80}{20} = 4$ ✓. (The choice $2$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $\\frac{96}{48}$ ✗; $10$ is ANSWERING THE CIRCUMRADIUS, half the hypotenuse — the classic R-vs-r mixup ✗; $8$ is HALVING A LEG, which measures nothing about the incircle ✗.)',
    },
    {
      q: 'A carpenter cuts a right-triangular shelf bracket with legs $15$ and $20$, then drills the largest possible circular hole through it, leaving the circle just tangent to all three edges. What is the radius of the hole?',
      fig: {
        view: [-2, -2, 22, 17],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [0, 15]], fill: false },
          { t: 'circle', c: [5, 5], r: 5 },
          { t: 'right', at: [0, 0], from: [20, 0], to: [0, 15] },
          { t: 'label', p: [10, 0], text: '20', dx: 0, dy: 14 },
          { t: 'label', p: [0, 7.5], text: '15', dx: -12, dy: 0 },
          { t: 'point', p: [5, 5], label: 'I', dx: 0, dy: -12 },
        ],
      },
      choices: ['$2.5$', '$12.5$', '$5$', '$10$'],
      answer: 2,
      solution:
        'The largest circle tangent to all three edges is the incircle. The hypotenuse is $\\sqrt{15^2 + 20^2} = \\sqrt{625} = 25$, the area is $\\frac{1}{2} \\cdot 15 \\cdot 20 = 150$, and the semiperimeter is $s = \\frac{15 + 20 + 25}{2} = 30$, so $r = \\frac{150}{30} = 5$ ✓. Check a second, independent way with the shortcut $r = \\frac{15 + 20 - 25}{2} = \\frac{10}{2} = 5$ ✓. Guard: with the right angle at the origin the center is $(5, 5)$, and the distance to the hypotenuse line $15x + 20y - 300 = 0$ is $\\frac{|75 + 100 - 300|}{25} = \\frac{125}{25} = 5$ ✓. (The choice $2.5$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $\\frac{150}{60}$ ✗; $12.5$ is ANSWERING THE CIRCUMRADIUS, half the hypotenuse ✗; $10$ is HALVING A LEG ✗.)',
    },
    {
      q: 'In the figure, the incircle of a right triangle with legs $24$ and $32$ is drawn with center $I$. Find its radius.',
      fig: {
        view: [-3, -3, 35, 27],
        elems: [
          { t: 'poly', pts: [[0, 0], [32, 0], [0, 24]], fill: false },
          { t: 'circle', c: [8, 8], r: 8 },
          { t: 'right', at: [0, 0], from: [32, 0], to: [0, 24] },
          { t: 'label', p: [16, 0], text: '32', dx: 0, dy: 14 },
          { t: 'label', p: [0, 12], text: '24', dx: -12, dy: 0 },
          { t: 'point', p: [8, 8], label: 'I', dx: 0, dy: -12 },
        ],
      },
      choices: ['$4$', '$20$', '$16$', '$8$'],
      answer: 3,
      solution:
        'The hypotenuse is $\\sqrt{24^2 + 32^2} = \\sqrt{1600} = 40$ (the $3$-$4$-$5$ family scaled by $8$), the area is $\\frac{1}{2} \\cdot 24 \\cdot 32 = 384$, and $s = \\frac{24 + 32 + 40}{2} = 48$, so $r = \\frac{384}{48} = 8$ ✓. Check a second, independent way with the shortcut $r = \\frac{24 + 32 - 40}{2} = \\frac{16}{2} = 8$ ✓. Guard: the center $(8, 8)$ sits at distance $\\frac{|24 \\cdot 8 + 32 \\cdot 8 - 768|}{40} = \\frac{320}{40} = 8$ from the hypotenuse line $24x + 32y - 768 = 0$ ✓. (The choice $4$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $\\frac{384}{96}$ ✗; $20$ is ANSWERING THE CIRCUMRADIUS ✗; $16$ is HALVING A LEG ✗.)',
    },
  ],
  // s3 — area and perimeter given, inradius wanted.
  [
    {
      q: 'A triangular garden plot has area $99$ square meters and perimeter $44$ meters. The gardener wants a circular flower bed inscribed in the plot, touching all three edges. What is the radius of the bed, in meters?',
      choices: ['$4.5$', '$2.25$', '$9$', '$22$'],
      answer: 0,
      solution:
        'The semiperimeter is $s = \\frac{44}{2} = 22$, and the inscribed circle’s radius obeys Area $= rs$, so $99 = 22r$ and $r = 4.5$ ✓. Check a second, independent way with the sliver decomposition that proves the formula: joining the incenter to the three corners cuts the plot into three triangles of common height $r$ whose bases add up to the whole perimeter, so $\\frac{1}{2} \\cdot 44 \\cdot r = 99$ and $r = \\frac{198}{44} = 4.5$ ✓. (The choice $2.25$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $\\frac{99}{44}$ ✗; $9$ is SNEAKING IN AN EXTRA HALF, solving $99 = \\frac{1}{2}rs$ as though the halving were not already inside $s$ ✗; $22$ is ANSWERING THE SEMIPERIMETER itself ✗.)',
    },
    {
      q: 'A triangular traffic island encloses $84$ square feet of pavement inside $48$ feet of curb. A signpost stands at the island’s incenter. How far, in feet, is the signpost from the nearest curb?',
      choices: ['$1.75$', '$7$', '$24$', '$3.5$'],
      answer: 3,
      solution:
        'The incenter is the same perpendicular distance — the inradius — from all three curbs, so the nearest curb is exactly $r$ away. With $s = \\frac{48}{2} = 24$, Area $= rs$ gives $84 = 24r$ and $r = 3.5$ ✓. Check a second, independent way through the three slivers: connecting the signpost to the three corners splits the island into triangles of height $r$ on bases totaling $48$, so $\\frac{1}{2} \\cdot 48 \\cdot r = 84$ and $r = \\frac{168}{48} = 3.5$ ✓. (The choice $1.75$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $\\frac{84}{48}$ ✗; $7$ is SNEAKING IN AN EXTRA HALF, doubling the true radius by solving $84 = \\frac{1}{2}rs$ ✗; $24$ is ANSWERING THE SEMIPERIMETER, a length of curb rather than a distance to it ✗.)',
    },
    {
      q: 'A sail is a triangle with area $135$ square feet and perimeter $54$ feet. A circular logo is printed as large as possible on the sail, tangent to all three edges. What is the logo’s radius, in feet?',
      choices: ['$2.5$', '$10$', '$5$', '$27$'],
      answer: 2,
      solution:
        'The largest circle tangent to all three edges is the incircle, with radius $r = \\frac{\\text{Area}}{s}$. Here $s = \\frac{54}{2} = 27$, so $r = \\frac{135}{27} = 5$ ✓. Check a second, independent way through the sliver sum: the incenter splits the sail into three triangles of height $r$ whose bases total $54$, so $\\frac{1}{2} \\cdot 54 \\cdot r = 135$ and $r = \\frac{270}{54} = 5$ ✓. (The choice $2.5$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $\\frac{135}{54}$ ✗; $10$ is SNEAKING IN AN EXTRA HALF, which lands on twice the true radius ✗; $27$ is ANSWERING THE SEMIPERIMETER ✗.)',
    },
  ],
  // s4 — the special point guaranteed to lie inside.
  [
    {
      q: 'A trophy shop engraves a small star at one special point of every triangular plaque it produces — acute, right, or obtuse. The star must always land ON the plaque, never off its edge. Which special point is safe to use?',
      choices: ['the circumcenter', 'the incenter', 'the orthocenter', 'no special point works for every plaque shape'],
      answer: 1,
      solution:
        'Angle bisectors leave a vertex and travel through the interior of their angle, so the point where all three cross — the incenter — has no way to be anywhere but inside ✓. Check a second, independent way through the incircle: the incenter is the center of a circle drawn entirely within the plaque, and the center of a circle inside the plaque is itself inside the plaque ✓. (The circumcenter is PICKING THE CENTER THAT ESCAPES — on an obtuse plaque it retreats across the longest edge ✗; the orthocenter is PICKING THE OTHER ESCAPER, exiting whenever an angle passes $90^\\circ$ ✗; "no special point works" is DENYING THE GUARANTEE the two arguments above just delivered ✗.)',
    },
    {
      q: 'Marcus draws a triangle with one enormous $150^\\circ$ angle. Two of the classic special points have been shoved outside his triangle by that wide angle, but one of the points listed below is still guaranteed to be inside. Which one?',
      choices: ['the circumcenter', 'the orthocenter', 'none — every special point can escape an obtuse triangle', 'the incenter'],
      answer: 3,
      solution:
        'The incenter is trapped inside by construction: each angle bisector runs through the interior of its own angle, so their common point sits in the interior no matter how lopsided the triangle gets — a $150^\\circ$ angle changes nothing ✓. Check a second, independent way through the circle it centers: the incircle is tangent to all three sides from within, so its center keeps a positive distance from every side and cannot cross out ✓. (The circumcenter is PICKING THE CENTER THAT ESCAPES, pushed across the side opposite the $150^\\circ$ angle ✗; the orthocenter is PICKING THE OTHER ESCAPER, dragged out through the obtuse vertex’s altitudes ✗; "none" is DENYING THE GUARANTEE that angle bisectors provide ✗.)',
    },
    {
      q: 'Exactly one of the special points below is the center of a circle that fits entirely inside its triangle — which forces the point itself to be inside the triangle, no matter the triangle’s shape. Which point is it?',
      choices: ['the incenter', 'the circumcenter', 'the orthocenter', 'none of these'],
      answer: 0,
      solution:
        'The incenter centers the inscribed circle, which is tangent to all three sides from the inside; a circle contained in the triangle drags its center along with it, so the incenter is interior for every triangle ✓. Check a second, independent way without circles: the incenter lies on all three angle bisectors, and each bisector runs through the interior of its angle, so their intersection cannot reach the boundary or beyond ✓. (The circumcenter is PICKING THE CENTER THAT ESCAPES — its circle passes through the vertices rather than fitting inside, and on an obtuse triangle the center crosses the longest side ✗; the orthocenter is PICKING THE OTHER ESCAPER, and it centers no famous circle of the triangle at all ✗; "none of these" is DENYING THE GUARANTEE ✗.)',
    },
  ],
  // s5 — the distance from the incenter to a side is the inradius (figure).
  [
    {
      q: 'In the figure, $I$ is the incenter of a right triangle with legs $60$ and $63$ and hypotenuse $87$. What is the perpendicular distance from $I$ to the hypotenuse?',
      fig: {
        view: [-4, -4, 67, 64],
        elems: [
          { t: 'poly', pts: [[0, 0], [63, 0], [0, 60]], fill: false },
          { t: 'circle', c: [18, 18], r: 18 },
          { t: 'right', at: [0, 0], from: [63, 0], to: [0, 60] },
          { t: 'seg', a: [18, 18], b: [18 + 1080 / 87, 18 + 1134 / 87], dash: true },
          { t: 'right', at: [18 + 1080 / 87, 18 + 1134 / 87], from: [63, 0], to: [18, 18], s: 2 },
          { t: 'label', p: [31.5, 0], text: '63', dx: 0, dy: 14 },
          { t: 'label', p: [0, 30], text: '60', dx: -12, dy: 0 },
          { t: 'label', p: [33, 31.5], text: '87', dx: 12, dy: -8 },
          { t: 'point', p: [18, 18], label: 'I', dx: -4, dy: -10 },
        ],
      },
      choices: ['$9$', '$43.5$', '$18$', '$18\\sqrt{2}$'],
      answer: 2,
      solution:
        'The perpendicular distance from the incenter to any side is the inradius. The area is $\\frac{1}{2} \\cdot 60 \\cdot 63 = 1890$ and the semiperimeter is $s = \\frac{60 + 63 + 87}{2} = 105$, so $r = \\frac{1890}{105} = 18$ ✓. Check a second, independent way with the right-triangle shortcut $r = \\frac{60 + 63 - 87}{2} = \\frac{36}{2} = 18$ ✓. Guard: with the right angle at the origin, the incenter $(18, 18)$ sits at distance $\\frac{|60 \\cdot 18 + 63 \\cdot 18 - 3780|}{87} = \\frac{1566}{87} = 18$ from the hypotenuse line $60x + 63y - 3780 = 0$ ✓. (The choice $9$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $\\frac{1890}{210}$ ✗; $43.5$ is ANSWERING THE CIRCUMRADIUS, half the hypotenuse ✗; $18\\sqrt{2}$ is MEASURING TO THE VERTEX at the right angle instead of to a side ✗.)',
    },
    {
      q: 'A wedge-shaped machine part is a right triangle with legs $9$ and $40$ and hypotenuse $41$. Its incenter $I$ is marked in the figure. How far is $I$ from the hypotenuse, measured along a perpendicular?',
      fig: {
        w: 380,
        view: [-2, -2, 42, 11],
        elems: [
          { t: 'poly', pts: [[0, 0], [40, 0], [0, 9]], fill: false },
          { t: 'circle', c: [4, 4], r: 4 },
          { t: 'right', at: [0, 0], from: [40, 0], to: [0, 9] },
          { t: 'seg', a: [4, 4], b: [4 + 36 / 41, 4 + 160 / 41], dash: true },
          { t: 'right', at: [4 + 36 / 41, 4 + 160 / 41], from: [40, 0], to: [4, 4], s: 0.7 },
          { t: 'label', p: [20, 0], text: '40', dx: 0, dy: 14 },
          { t: 'label', p: [0, 4.5], text: '9', dx: -10, dy: 0 },
          { t: 'label', p: [20, 4.5], text: '41', dx: 12, dy: -6 },
          { t: 'point', p: [4, 4], label: 'I', dx: 2, dy: 14 },
        ],
      },
      choices: ['$2$', '$4$', '$20.5$', '$4\\sqrt{2}$'],
      answer: 1,
      solution:
        'Every perpendicular distance from the incenter to a side equals the inradius — that is what lets the incircle kiss all three sides. The area is $\\frac{1}{2} \\cdot 9 \\cdot 40 = 180$ and $s = \\frac{9 + 40 + 41}{2} = 45$, so $r = \\frac{180}{45} = 4$ ✓. Check a second, independent way with the shortcut $r = \\frac{9 + 40 - 41}{2} = \\frac{8}{2} = 4$ ✓. Guard: the incenter $(4, 4)$ has distance $\\frac{|9 \\cdot 4 + 40 \\cdot 4 - 360|}{41} = \\frac{164}{41} = 4$ from the hypotenuse line $9x + 40y - 360 = 0$ ✓. (The choice $2$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $\\frac{180}{90}$ ✗; $20.5$ is ANSWERING THE CIRCUMRADIUS ✗; $4\\sqrt{2}$ is MEASURING TO THE VERTEX at the right angle ✗.)',
    },
    {
      q: 'In the figure, $I$ is the incenter of a right triangle with sides $28$, $45$, and $53$. The perpendicular distances from $I$ to the three sides are all equal to one value. What is that value?',
      fig: {
        view: [-3, -3, 48, 30],
        elems: [
          { t: 'poly', pts: [[0, 0], [45, 0], [0, 28]], fill: false },
          { t: 'circle', c: [10, 10], r: 10 },
          { t: 'right', at: [0, 0], from: [45, 0], to: [0, 28] },
          { t: 'seg', a: [10, 10], b: [10, 0], dash: true },
          { t: 'right', at: [10, 0], from: [45, 0], to: [10, 10] },
          { t: 'label', p: [26, 0], text: '45', dx: 0, dy: 14 },
          { t: 'label', p: [0, 14], text: '28', dx: -12, dy: 0 },
          { t: 'label', p: [22.5, 14], text: '53', dx: 12, dy: -6 },
          { t: 'point', p: [10, 10], label: 'I', dx: 0, dy: -12 },
        ],
      },
      choices: ['$5$', '$26.5$', '$10\\sqrt{2}$', '$10$'],
      answer: 3,
      solution:
        'The common perpendicular distance from the incenter to the sides is the inradius. First confirm the right angle: $28^2 + 45^2 = 784 + 2025 = 2809 = 53^2$ ✓. The area is $\\frac{1}{2} \\cdot 28 \\cdot 45 = 630$ and $s = \\frac{28 + 45 + 53}{2} = 63$, so $r = \\frac{630}{63} = 10$ ✓. Check a second, independent way with the shortcut $r = \\frac{28 + 45 - 53}{2} = \\frac{20}{2} = 10$ ✓. Guard: the incenter $(10, 10)$ has distance $\\frac{|28 \\cdot 10 + 45 \\cdot 10 - 1260|}{53} = \\frac{530}{53} = 10$ from the hypotenuse line $28x + 45y - 1260 = 0$ ✓. (The choice $5$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $\\frac{630}{126}$ ✗; $26.5$ is ANSWERING THE CIRCUMRADIUS ✗; $10\\sqrt{2}$ is MEASURING TO THE VERTEX at the right angle ✗.)',
    },
  ],
  // s6 — inradius and semiperimeter given, area wanted.
  [
    {
      q: 'A triangular plate holds an inscribed circular gasket of radius $5$, and the plate’s semiperimeter is $18$. What is the area of the plate?',
      choices: ['$90$', '$180$', '$45$', '$23$'],
      answer: 0,
      solution:
        'The inscribed gasket’s radius is the inradius, so Area $= rs = 5 \\cdot 18 = 90$ ✓. Check a second, independent way with the sliver decomposition: joining the incenter to the three corners makes three triangles of height $5$ whose bases sum to the perimeter $36$, for a total of $\\frac{1}{2} \\cdot 36 \\cdot 5 = 90$ ✓. (The choice $180$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $5 \\cdot 36$ ✗; $45$ is SNEAKING IN AN EXTRA HALF, computing $\\frac{1}{2}rs$ when the halving already lives inside $s$ ✗; $23$ is ADDING INSTEAD OF MULTIPLYING, $5 + 18$ ✗.)',
    },
    {
      q: 'A triangle has perimeter $32$, and its incircle has radius $6$. Find the triangle’s area.',
      choices: ['$192$', '$48$', '$96$', '$22$'],
      answer: 2,
      solution:
        'The formula wants the SEMIperimeter: $s = \\frac{32}{2} = 16$, so Area $= rs = 6 \\cdot 16 = 96$ ✓. Check a second, independent way through the slivers: the incenter cuts the triangle into three pieces of height $6$ standing on bases that total $32$, so the area is $\\frac{1}{2} \\cdot 32 \\cdot 6 = 96$ ✓ — the sliver sum halves the perimeter for you, which is exactly where $s$ comes from. (The choice $192$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $6 \\cdot 32$ ✗; $48$ is SNEAKING IN AN EXTRA HALF, $\\frac{1}{2} \\cdot 6 \\cdot 16$ ✗; $22$ is ADDING INSTEAD OF MULTIPLYING, $6 + 16$ ✗.)',
    },
    {
      q: 'The incenter of a triangular field sits exactly $7$ meters from each of the three fences, and the field’s semiperimeter is $15$ meters. How many square meters does the field cover?',
      choices: ['$210$', '$105$', '$52.5$', '$22$'],
      answer: 1,
      solution:
        'A point $7$ meters from all three fences is the incenter with inradius $r = 7$, so Area $= rs = 7 \\cdot 15 = 105$ ✓. Check a second, independent way with the sliver decomposition: the three triangles formed by joining the incenter to the corners have height $7$ and bases summing to the full perimeter $30$, giving $\\frac{1}{2} \\cdot 30 \\cdot 7 = 105$ ✓. (The choice $210$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $7 \\cdot 30$ ✗; $52.5$ is SNEAKING IN AN EXTRA HALF, $\\frac{1}{2} \\cdot 7 \\cdot 15$ ✗; $22$ is ADDING INSTEAD OF MULTIPLYING, $7 + 15$ ✗.)',
    },
  ],
  // s7 — isosceles triangle with area given, inradius wanted.
  [
    {
      q: 'The isosceles triangle in the figure has sides $10$, $10$, and $12$, and its area is $48$. What is the radius of the largest circle that fits inside it?',
      fig: {
        view: [-1.5, -1.5, 13.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [6, 8]], fill: false },
          { t: 'circle', c: [6, 3], r: 3 },
          { t: 'label', p: [6, 0], text: '12', dx: -22, dy: 12 },
          { t: 'label', p: [3, 4], text: '10', dx: -10, dy: -6 },
          { t: 'label', p: [9, 4], text: '10', dx: 10, dy: -6 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 8], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [6, 3], label: 'I', dx: 10, dy: -4 },
        ],
      },
      choices: ['$1.5$', '$8$', '$4$', '$3$'],
      answer: 3,
      solution:
        'The largest circle inside a triangle is its incircle, with radius $r = \\frac{\\text{Area}}{s}$. Here $s = \\frac{10 + 10 + 12}{2} = 16$, so $r = \\frac{48}{16} = 3$ ✓. Check a second, independent way with coordinates: placing the base from $(0, 0)$ to $(12, 0)$ puts the apex at $(6, 8)$, and the incenter rides the axis of symmetry at $(6, 3)$; its distance to the slanted side through $(0,0)$ and $(6,8)$ — the line $8x - 6y = 0$, norm $10$ — is $\\frac{|48 - 18|}{10} = 3$ ✓, matching its height $3$ above the base. (The choice $1.5$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $\\frac{48}{32}$ ✗; $8$ is ANSWERING THE HEIGHT of the apex, not the incircle’s radius ✗; $4$ is DIVIDING BY THE BASE, $\\frac{48}{12}$ ✗.)',
    },
    {
      q: 'A tent’s triangular end panel has two edges of $10$ feet and a bottom edge of $16$ feet, enclosing $48$ square feet. A circular vent is cut as large as possible in the panel, tangent to all three edges. What is the vent’s radius, in feet?',
      fig: {
        view: [-1.5, -1.5, 17.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [8, 6]], fill: false },
          { t: 'circle', c: [8, 8 / 3], r: 8 / 3 },
          { t: 'label', p: [8, 0], text: '16', dx: -26, dy: 12 },
          { t: 'label', p: [4, 3], text: '10', dx: -10, dy: -6 },
          { t: 'label', p: [12, 3], text: '10', dx: 10, dy: -6 },
          { t: 'point', p: [8, 8 / 3], label: 'I', dx: 10, dy: -4 },
        ],
      },
      choices: ['$\\frac{8}{3}$', '$\\frac{4}{3}$', '$6$', '$3$'],
      answer: 0,
      solution:
        'The largest tangent circle is the incircle. With $s = \\frac{10 + 10 + 16}{2} = 18$, its radius is $r = \\frac{48}{18} = \\frac{8}{3}$ ✓. Check a second, independent way with coordinates: base from $(0, 0)$ to $(16, 0)$ puts the apex at $(8, 6)$ (since $\\sqrt{10^2 - 8^2} = 6$), and the incenter sits on the symmetry axis at $\\left(8, \\frac{8}{3}\\right)$; its distance to the slanted side $6x - 8y = 0$ (norm $10$) is $\\frac{\\left|48 - \\frac{64}{3}\\right|}{10} = \\frac{80/3}{10} = \\frac{8}{3}$ ✓. (The choice $\\frac{4}{3}$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $\\frac{48}{36}$ ✗; $6$ is ANSWERING THE HEIGHT of the panel ✗; $3$ is DIVIDING BY THE BASE, $\\frac{48}{16}$ ✗.)',
    },
    {
      q: 'Triangle $PQR$ has $PQ = 10$ along the bottom, $RP = RQ = 13$, and area $60$. Find the radius of its inscribed circle.',
      fig: {
        view: [-1.5, -1.5, 11.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [5, 12]], fill: false },
          { t: 'circle', c: [5, 10 / 3], r: 10 / 3 },
          { t: 'label', p: [5, 0], text: '10', dx: -22, dy: 12 },
          { t: 'label', p: [2.5, 6], text: '13', dx: -12, dy: -4 },
          { t: 'label', p: [7.5, 6], text: '13', dx: 12, dy: -4 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [5, 12], label: 'R', dx: 0, dy: -12 },
          { t: 'point', p: [5, 10 / 3], label: 'I', dx: 10, dy: -4 },
        ],
      },
      choices: ['$\\frac{5}{3}$', '$\\frac{10}{3}$', '$12$', '$6$'],
      answer: 1,
      solution:
        'The semiperimeter is $s = \\frac{13 + 13 + 10}{2} = 18$, so $r = \\frac{\\text{Area}}{s} = \\frac{60}{18} = \\frac{10}{3}$ ✓. Check a second, independent way with coordinates: base from $(0, 0)$ to $(10, 0)$ puts the apex at $(5, 12)$ (since $\\sqrt{13^2 - 5^2} = 12$), and the incenter rides the axis at $\\left(5, \\frac{10}{3}\\right)$; its distance to the slanted side $12x - 5y = 0$ (norm $13$) is $\\frac{\\left|60 - \\frac{50}{3}\\right|}{13} = \\frac{130/3}{13} = \\frac{10}{3}$ ✓, matching its height above $\\overline{PQ}$. (The choice $\\frac{5}{3}$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $\\frac{60}{36}$ ✗; $12$ is ANSWERING THE HEIGHT from $R$ ✗; $6$ is DIVIDING BY THE BASE, $\\frac{60}{10}$ ✗.)',
    },
  ],
  // s8 — distance from the incenter to the right-angle vertex is r√2.
  [
    {
      q: 'A right triangle has legs $20$ and $48$ meeting at vertex $A$, and its incenter is $I$, as shown. What is the length of segment $\\overline{AI}$?',
      fig: {
        view: [-3, -3, 51, 23],
        elems: [
          { t: 'poly', pts: [[0, 0], [48, 0], [0, 20]], fill: false },
          { t: 'circle', c: [8, 8], r: 8 },
          { t: 'right', at: [0, 0], from: [48, 0], to: [0, 20] },
          { t: 'seg', a: [0, 0], b: [8, 8], dash: true },
          { t: 'label', p: [24, 0], text: '48', dx: 0, dy: 14 },
          { t: 'label', p: [0, 10], text: '20', dx: -12, dy: 0 },
          { t: 'label', p: [4, 4], text: '?', dx: 2, dy: -10 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [8, 8], label: 'I', dx: 12, dy: -4 },
        ],
      },
      choices: ['$8$', '$26$', '$8\\sqrt{2}$', '$16$'],
      answer: 2,
      solution:
        'The hypotenuse is $\\sqrt{20^2 + 48^2} = \\sqrt{2704} = 52$, so the inradius is $r = \\frac{20 + 48 - 52}{2} = 8$. With the right angle at the origin and legs along the axes, the incenter must be $8$ from both legs, landing at $(8, 8)$ — so $AI = \\sqrt{8^2 + 8^2} = 8\\sqrt{2}$, the diagonal of an $8 \\times 8$ square ✓. Check a second, independent way through the area: $\\frac{1}{2} \\cdot 20 \\cdot 48 = 480$ and $s = \\frac{20 + 48 + 52}{2} = 60$, so $r = \\frac{480}{60} = 8$ again, and the bisector from a right angle makes a $45^\\circ$ angle with each leg, stretching the side-distance $8$ into a vertex-distance of $\\frac{8}{\\sin 45^\\circ} = 8\\sqrt{2}$ ✓. Guard: a vertex is farther than a side, and $8\\sqrt{2} > 8$ ✓. (The choice $8$ is ANSWERING THE INRADIUS, the distance to a side rather than to the vertex ✗; $26$ is ANSWERING THE CIRCUMRADIUS, half the hypotenuse ✗; $16$ is DOUBLING THE INRADIUS instead of multiplying by $\\sqrt{2}$ ✗.)',
    },
    {
      q: 'The corner brace in the figure is a $15$-$20$-$25$ right triangle, and a pin is driven at its incenter $I$. How far is the pin from the right-angle corner $C$?',
      fig: {
        view: [-2, -2, 17, 22],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [0, 20]], fill: false },
          { t: 'circle', c: [5, 5], r: 5 },
          { t: 'right', at: [0, 0], from: [15, 0], to: [0, 20] },
          { t: 'seg', a: [0, 0], b: [5, 5], dash: true },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [0, 10], text: '20', dx: -12, dy: 0 },
          { t: 'label', p: [7.5, 10], text: '25', dx: 12, dy: -6 },
          { t: 'point', p: [0, 0], label: 'C', dx: -10, dy: 10 },
          { t: 'point', p: [5, 5], label: 'I', dx: 12, dy: -4 },
        ],
      },
      choices: ['$5\\sqrt{2}$', '$5$', '$12.5$', '$10$'],
      answer: 0,
      solution:
        'The inradius is $r = \\frac{15 + 20 - 25}{2} = 5$, so with the right angle at the origin the incenter sits at $(5, 5)$, and the pin-to-corner distance is $\\sqrt{5^2 + 5^2} = 5\\sqrt{2}$ ✓. Check a second, independent way through Area $= rs$: the area is $\\frac{1}{2} \\cdot 15 \\cdot 20 = 150$ and $s = \\frac{15 + 20 + 25}{2} = 30$, so $r = \\frac{150}{30} = 5$ again; the incenter rides the bisector of the right angle, a $45^\\circ$ ray, so its vertex distance is $5\\sqrt{2}$ — the hypotenuse of a tiny $45$-$45$-$90$ triangle with legs $5$ ✓. Guard: $5\\sqrt{2} \\approx 7.07$ lies between the side-distance $5$ and the far tangent points, as it must ✓. (The choice $5$ is ANSWERING THE INRADIUS — the incenter promises equal distances to SIDES, not to corners ✗; $12.5$ is ANSWERING THE CIRCUMRADIUS ✗; $10$ is DOUBLING THE INRADIUS ✗.)',
    },
    {
      q: 'In a right triangle with legs $30$ and $40$, the angle bisector from the right-angle vertex $V$ is followed until it reaches the incenter $I$. How long is that walk from $V$ to $I$?',
      fig: {
        view: [-3, -3, 43, 33],
        elems: [
          { t: 'poly', pts: [[0, 0], [40, 0], [0, 30]], fill: false },
          { t: 'circle', c: [10, 10], r: 10 },
          { t: 'right', at: [0, 0], from: [40, 0], to: [0, 30] },
          { t: 'seg', a: [0, 0], b: [10, 10], dash: true },
          { t: 'label', p: [20, 0], text: '40', dx: 0, dy: 14 },
          { t: 'label', p: [0, 15], text: '30', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'V', dx: -10, dy: 10 },
          { t: 'point', p: [10, 10], label: 'I', dx: 12, dy: -4 },
        ],
      },
      choices: ['$10$', '$25$', '$20$', '$10\\sqrt{2}$'],
      answer: 3,
      solution:
        'The hypotenuse is $\\sqrt{30^2 + 40^2} = 50$, so the inradius is $r = \\frac{30 + 40 - 50}{2} = 10$, and with the right angle at the origin the incenter is at $(10, 10)$; the walk measures $\\sqrt{10^2 + 10^2} = 10\\sqrt{2}$ ✓. Check a second, independent way through the area: $\\frac{1}{2} \\cdot 30 \\cdot 40 = 600$ and $s = \\frac{30 + 40 + 50}{2} = 60$, so $r = \\frac{600}{60} = 10$ again; the bisector leaves $V$ at $45^\\circ$ to each leg, so reaching a point $10$ from both legs takes $\\frac{10}{\\sin 45^\\circ} = 10\\sqrt{2}$ of walking ✓. Guard: the walk must beat the straight drop to a side, and $10\\sqrt{2} > 10$ ✓. (The choice $10$ is ANSWERING THE INRADIUS, the side distance rather than the vertex distance ✗; $25$ is ANSWERING THE CIRCUMRADIUS ✗; $20$ is DOUBLING THE INRADIUS ✗.)',
    },
  ],
  // s9 — scalene triangle with area given, inradius wanted (figure).
  [
    {
      q: 'The scalene banner in the figure has sides $9$, $10$, and $17$, and its area is $36$. A circle is sewn inside it, tangent to all three edges. What is the circle’s radius?',
      fig: {
        view: [-7.5, -2, 11.5, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [-5.4, 7.2]], fill: false },
          { t: 'circle', c: [1, 2], r: 2 },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [-2.7, 3.6], text: '9', dx: -10, dy: -4 },
          { t: 'label', p: [2.3, 3.6], text: '17', dx: 12, dy: -4 },
          { t: 'point', p: [0, 0], label: 'A', dx: -6, dy: 12 },
          { t: 'point', p: [10, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [-5.4, 7.2], label: 'C', dx: -6, dy: -8 },
          { t: 'point', p: [1, 2], label: 'I', dx: 10, dy: -4 },
        ],
      },
      choices: ['$1$', '$2$', '$4$', '$18$'],
      answer: 1,
      solution:
        'The tangent circle is the incircle, so its radius is $r = \\frac{\\text{Area}}{s}$ with $s = \\frac{9 + 10 + 17}{2} = 18$: $r = \\frac{36}{18} = 2$ ✓. Check a second, independent way with coordinates: taking $A(0, 0)$, $B(10, 0)$, and $C(-5.4, 7.2)$ (so $CA = 9$ and $CB = 17$), the incenter lands at $(1, 2)$ — height $2$ above side $\\overline{AB}$ — and its distance to line $AC$ ($7.2x + 5.4y = 0$, norm $9$) is $\\frac{|7.2 + 10.8|}{9} = 2$ ✓. Guard with Heron: $\\sqrt{18 \\cdot 9 \\cdot 8 \\cdot 1} = \\sqrt{1296} = 36$ ✓, so the stated area is honest. (The choice $1$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $\\frac{36}{36}$ ✗; $4$ is SNEAKING IN AN EXTRA HALF, solving $36 = \\frac{1}{2}rs$ ✗; $18$ is ANSWERING THE SEMIPERIMETER ✗.)',
    },
    {
      q: 'A climbing wall panel is a triangle with sides $17$, $25$, and $28$, enclosing $210$ square feet. The builders bolt a circular practice wheel into the panel, as large as the panel allows, touching all three edges. What is the wheel’s radius, in feet?',
      fig: {
        view: [-2.5, -2, 30, 17],
        elems: [
          { t: 'poly', pts: [[0, 0], [28, 0], [8, 15]], fill: false },
          { t: 'circle', c: [10, 6], r: 6 },
          { t: 'label', p: [14, 0], text: '28', dx: 0, dy: 14 },
          { t: 'label', p: [4, 7.5], text: '17', dx: -12, dy: -4 },
          { t: 'label', p: [18, 7.5], text: '25', dx: 12, dy: -4 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [28, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [8, 15], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [10, 6], label: 'I', dx: 10, dy: -4 },
        ],
      },
      choices: ['$3$', '$12$', '$6$', '$35$'],
      answer: 2,
      solution:
        'The wheel is the incircle. With $s = \\frac{17 + 25 + 28}{2} = 35$, its radius is $r = \\frac{210}{35} = 6$ ✓. Check a second, independent way with coordinates: taking $A(0, 0)$, $B(28, 0)$, $C(8, 15)$ (so $CA = \\sqrt{64 + 225} = 17$ and $CB = \\sqrt{400 + 225} = 25$), the incenter lands at $(10, 6)$ — height $6$ above $\\overline{AB}$ — and its distance to line $AC$ ($15x - 8y = 0$, norm $17$) is $\\frac{|150 - 48|}{17} = 6$ ✓. Guard with Heron: $\\sqrt{35 \\cdot 18 \\cdot 10 \\cdot 7} = \\sqrt{44100} = 210$ ✓. (The choice $3$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $\\frac{210}{70}$ ✗; $12$ is SNEAKING IN AN EXTRA HALF, doubling the true radius ✗; $35$ is ANSWERING THE SEMIPERIMETER ✗.)',
    },
    {
      q: 'Triangle $ABC$ in the figure has $AB = 48$, $CA = 29$, and $CB = 35$, with area $504$. Find the distance from its incenter $I$ to side $\\overline{AB}$.',
      fig: {
        view: [-3, -2.5, 51, 23.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [48, 0], [20, 21]], fill: false },
          { t: 'circle', c: [21, 9], r: 9 },
          { t: 'seg', a: [21, 9], b: [21, 0], dash: true },
          { t: 'right', at: [21, 0], from: [48, 0], to: [21, 9] },
          { t: 'label', p: [24, 0], text: '48', dx: 26, dy: 14 },
          { t: 'label', p: [10, 10.5], text: '29', dx: -12, dy: -4 },
          { t: 'label', p: [34, 10.5], text: '35', dx: 12, dy: -4 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [48, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [20, 21], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [21, 9], label: 'I', dx: 10, dy: -4 },
        ],
      },
      choices: ['$9$', '$4.5$', '$18$', '$56$'],
      answer: 0,
      solution:
        'The distance from the incenter to any side is the inradius. With $s = \\frac{29 + 35 + 48}{2} = 56$, it is $r = \\frac{504}{56} = 9$ ✓. Check a second, independent way with coordinates: taking $A(0, 0)$, $B(48, 0)$, $C(20, 21)$ (so $CA = \\sqrt{400 + 441} = 29$ and $CB = \\sqrt{784 + 441} = 35$), the incenter lands at $(21, 9)$ — height $9$ above $\\overline{AB}$ — and its distance to line $AC$ ($21x - 20y = 0$, norm $29$) is $\\frac{|441 - 180|}{29} = \\frac{261}{29} = 9$ ✓. Guard with Heron: $\\sqrt{56 \\cdot 27 \\cdot 21 \\cdot 8} = \\sqrt{254016} = 504$ ✓. (The choice $4.5$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $\\frac{504}{112}$ ✗; $18$ is SNEAKING IN AN EXTRA HALF, twice the true distance ✗; $56$ is ANSWERING THE SEMIPERIMETER ✗.)',
    },
  ],
  // s10 — big right-triangle legs given, inradius wanted.
  [
    {
      q: 'A ramp’s side panel is a right triangle with legs $65$ cm and $72$ cm. What is the radius of the largest circular cutout that fits in the panel, tangent to all three edges?',
      fig: {
        view: [-4, -4, 76, 69],
        elems: [
          { t: 'poly', pts: [[0, 0], [72, 0], [0, 65]], fill: false },
          { t: 'circle', c: [20, 20], r: 20 },
          { t: 'right', at: [0, 0], from: [72, 0], to: [0, 65], s: 2 },
          { t: 'label', p: [36, 0], text: '72', dx: 0, dy: 14 },
          { t: 'label', p: [0, 32.5], text: '65', dx: -12, dy: 0 },
          { t: 'point', p: [20, 20], label: 'I', dx: 0, dy: -12 },
        ],
      },
      choices: ['$10$', '$48.5$', '$40$', '$20$'],
      answer: 3,
      solution:
        'The largest tangent circle is the incircle. The hypotenuse is $\\sqrt{65^2 + 72^2} = \\sqrt{4225 + 5184} = \\sqrt{9409} = 97$, the area is $\\frac{1}{2} \\cdot 65 \\cdot 72 = 2340$, and $s = \\frac{65 + 72 + 97}{2} = 117$, so $r = \\frac{2340}{117} = 20$ ✓. Check a second, independent way with the right-triangle shortcut $r = \\frac{65 + 72 - 97}{2} = \\frac{40}{2} = 20$ ✓. Guard: the incenter $(20, 20)$ is at distance $\\frac{|65 \\cdot 20 + 72 \\cdot 20 - 4680|}{97} = \\frac{1940}{97} = 20$ from the hypotenuse line $65x + 72y - 4680 = 0$ ✓. (The choice $10$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $\\frac{2340}{234}$ ✗; $48.5$ is ANSWERING THE CIRCUMRADIUS, half the hypotenuse ✗; $40$ is FORGETTING THE FINAL HALVING in $\\frac{\\text{leg} + \\text{leg} - \\text{hyp}}{2}$, which hands back the incircle’s diameter ✗.)',
    },
    {
      q: 'A surveyor stakes out a right-triangular lot with legs of $60$ m and $91$ m. What is the inradius of the lot?',
      fig: {
        view: [-5, -4, 95, 64],
        elems: [
          { t: 'poly', pts: [[0, 0], [91, 0], [0, 60]], fill: false },
          { t: 'circle', c: [21, 21], r: 21 },
          { t: 'right', at: [0, 0], from: [91, 0], to: [0, 60], s: 2.4 },
          { t: 'label', p: [45.5, 0], text: '91', dx: 0, dy: 14 },
          { t: 'label', p: [0, 30], text: '60', dx: -12, dy: 0 },
          { t: 'point', p: [21, 21], label: 'I', dx: 0, dy: -12 },
        ],
      },
      choices: ['$10.5$', '$21$', '$54.5$', '$42$'],
      answer: 1,
      solution:
        'The hypotenuse is $\\sqrt{60^2 + 91^2} = \\sqrt{3600 + 8281} = \\sqrt{11881} = 109$, the area is $\\frac{1}{2} \\cdot 60 \\cdot 91 = 2730$, and $s = \\frac{60 + 91 + 109}{2} = 130$, so $r = \\frac{2730}{130} = 21$ ✓. Check a second, independent way with the shortcut $r = \\frac{60 + 91 - 109}{2} = \\frac{42}{2} = 21$ ✓. Guard: with the right angle at the origin the incenter $(21, 21)$ has distance $\\frac{|60 \\cdot 21 + 91 \\cdot 21 - 5460|}{109} = \\frac{2289}{109} = 21$ from the hypotenuse line $60x + 91y - 5460 = 0$ ✓. (The choice $10.5$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $\\frac{2730}{260}$ ✗; $54.5$ is ANSWERING THE CIRCUMRADIUS ✗; $42$ is FORGETTING THE FINAL HALVING, the diameter instead of the radius ✗.)',
    },
    {
      q: 'The right triangle in the figure has legs $57$ and $76$, and its incircle is drawn with center $I$. What is the incircle’s radius?',
      fig: {
        view: [-4, -4, 80, 61],
        elems: [
          { t: 'poly', pts: [[0, 0], [76, 0], [0, 57]], fill: false },
          { t: 'circle', c: [19, 19], r: 19 },
          { t: 'right', at: [0, 0], from: [76, 0], to: [0, 57], s: 2 },
          { t: 'label', p: [38, 0], text: '76', dx: 0, dy: 14 },
          { t: 'label', p: [0, 28.5], text: '57', dx: -12, dy: 0 },
          { t: 'point', p: [19, 19], label: 'I', dx: 0, dy: -12 },
        ],
      },
      choices: ['$9.5$', '$47.5$', '$19$', '$38$'],
      answer: 2,
      solution:
        'The legs are $19 \\cdot 3$ and $19 \\cdot 4$, so this is the $3$-$4$-$5$ family scaled by $19$ and the hypotenuse is $19 \\cdot 5 = 95$ (check: $57^2 + 76^2 = 3249 + 5776 = 9025 = 95^2$ ✓). The area is $\\frac{1}{2} \\cdot 57 \\cdot 76 = 2166$ and $s = \\frac{57 + 76 + 95}{2} = 114$, so $r = \\frac{2166}{114} = 19$ ✓. Check a second, independent way with the shortcut $r = \\frac{57 + 76 - 95}{2} = \\frac{38}{2} = 19$ ✓ — and the scaling agrees, since the $3$-$4$-$5$ triangle has inradius $1$, which the factor $19$ stretches to $19$. (The choice $9.5$ is USING THE PERIMETER INSTEAD OF THE SEMIPERIMETER, $\\frac{2166}{228}$ ✗; $47.5$ is ANSWERING THE CIRCUMRADIUS ✗; $38$ is FORGETTING THE FINAL HALVING ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 7,
  sections: { '7.3': s73 },
}
