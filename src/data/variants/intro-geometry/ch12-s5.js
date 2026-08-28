// Introduction to Geometry chapter 12 — variations for the CHALLENGE set.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every answer was worked twice by two genuinely different routes, and the
//    two routes had to agree before the key was written: arcs summing to a
//    circle vs. angles summing to a triangle (slot 1); solving the supplementary
//    equation vs. substituting the answer back (slot 2); the outside-angle rule
//    vs. the exterior angle of the tangent triangle (slot 3); supplementary
//    near arc vs. the isosceles tangent triangle (slot 4); semiperimeter minus
//    the opposite side vs. solving the three-equation system (slot 5); average
//    of the arcs vs. average-plus-half-the-difference (slot 6); counting gaps
//    around the circle vs. two isosceles triangles through the center (slot 7);
//    the outside-angle rule vs. an exterior angle after joining a diagonal
//    (slot 8); tangent-chord plus the far arc vs. opposite corners of a cyclic
//    quadrilateral (slot 9); the right triangle on the tangent vs. the
//    tangent-secant difference of arcs (slot 10); the inside-angle rule vs. the
//    exterior angle at the crossing point (slot 11); the right triangle on the
//    radius vs. the tangent-secant difference of arcs (slot 12).
//  - Every figure is coordinate-exact: each labeled point of a circle of radius
//    3 sits at (3cos t, 3sin t) to four decimals, every tangent line is drawn
//    genuinely perpendicular to the radius at its point of tangency, and every
//    crossing point is the true intersection of the two drawn chords.
//  - Figure labels are plain text: bare numerals and the letters of points.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution and marked ✗.
//  - No two choices inside an item name the same value, and inside each slot the
//    three variations put the correct answer in three different positions.

const challenge = [
  // slot 1 — smallest angle of an inscribed triangle from an arc ratio.
  // Lane: 3:5:10 -> 30 / 4:7:9 -> 36 / 2:7:9 -> 20.
  [
    {
      q: 'Three lighthouses $A$, $B$, and $C$ stand on the shore of a perfectly circular bay. Walking along the shore, the arc from $B$ to $C$, the arc from $C$ to $A$, and the arc from $A$ to $B$ are in the ratio $3 : 5 : 10$. The three straight sightlines between the lighthouses form a triangle. What is the smallest angle of that triangle?',
      fig: {
        view: [-4.9, -4.9, 4.9, 4.9],
        alt: 'Triangle ABC inscribed in a circle with arcs marked 3x, 5x and 10x',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0, 3], b: [1.0261, -2.8191] },
          { t: 'seg', a: [1.0261, -2.8191], b: [2.9544, -0.5209] },
          { t: 'seg', a: [2.9544, -0.5209], b: [0, 3] },
          { t: 'label', p: [-3.7423, -0.6599], text: '10x' },
          { t: 'label', p: [2.911, -2.4426], text: '3x' },
          { t: 'label', p: [2.911, 2.4426], text: '5x' },
          { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -13 },
          { t: 'point', p: [1.0261, -2.8191], label: 'B', dx: 6, dy: 12 },
          { t: 'point', p: [2.9544, -0.5209], label: 'C', dx: 12, dy: 6 },
        ],
      },
      choices: ['$60^\\circ$', '$30^\\circ$', '$100^\\circ$', '$15^\\circ$'],
      answer: 1,
      solution:
        'The three arcs fill the whole shore, so $3x + 5x + 10x = 360^\\circ$, giving $x = 20^\\circ$ and arcs of $60^\\circ$, $100^\\circ$, $200^\\circ$. The smallest angle faces the smallest arc, and it is half of it: $\\frac{60^\\circ}{2} = 30^\\circ$ ✓. Check a second, independent way through the triangle: halving does not disturb a ratio, so the three angles are also in the ratio $3 : 5 : 10$, and this time they must total $180^\\circ$; each part is worth $\\frac{180^\\circ}{18} = 10^\\circ$, so the smallest angle is $3 \\times 10^\\circ = 30^\\circ$ ✓. (The choice $60^\\circ$ is REPORTING THE SMALLEST ARC INSTEAD OF THE ANGLE ✗; the choice $100^\\circ$ is TAKING THE LARGEST ANGLE INSTEAD OF THE SMALLEST ✗; the choice $15^\\circ$ is HALVING TWICE ✗.)',
    },
    {
      q: 'A round trampoline is held down by three anchor posts $A$, $B$, and $C$ on its rim. Going around the rim, the arc from $B$ to $C$, the arc from $C$ to $A$, and the arc from $A$ to $B$ are in the ratio $4 : 7 : 9$. Three tight straps join the posts in a triangle. What is the smallest angle of that triangle?',
      fig: {
        view: [-4.9, -4.9, 4.9, 4.9],
        alt: 'Triangle ABC inscribed in a circle with arcs marked 4x, 7x and 9x',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0, 3], b: [-0.9271, -2.8532] },
          { t: 'seg', a: [-0.9271, -2.8532], b: [2.4271, -1.7634] },
          { t: 'seg', a: [2.4271, -1.7634], b: [0, 3] },
          { t: 'label', p: [-3.7532, 0.5945], text: '9x' },
          { t: 'label', p: [1.1743, -3.614], text: '4x' },
          { t: 'label', p: [3.3858, 1.7252], text: '7x' },
          { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -13 },
          { t: 'point', p: [-0.9271, -2.8532], label: 'B', dx: -6, dy: 12 },
          { t: 'point', p: [2.4271, -1.7634], label: 'C', dx: 11, dy: 8 },
        ],
      },
      choices: ['$81^\\circ$', '$72^\\circ$', '$36^\\circ$', '$18^\\circ$'],
      answer: 2,
      solution:
        'The arcs close up the rim, so $4x + 7x + 9x = 360^\\circ$, giving $x = 18^\\circ$ and arcs of $72^\\circ$, $126^\\circ$, $162^\\circ$. The smallest angle sits opposite the smallest arc and is half of it: $\\frac{72^\\circ}{2} = 36^\\circ$ ✓. Check a second, independent way through the triangle: the angles keep the ratio $4 : 7 : 9$ but total $180^\\circ$, so each part is $\\frac{180^\\circ}{20} = 9^\\circ$ and the smallest angle is $4 \\times 9^\\circ = 36^\\circ$ ✓. (The choice $81^\\circ$ is TAKING THE LARGEST ANGLE INSTEAD OF THE SMALLEST ✗; the choice $72^\\circ$ is REPORTING THE SMALLEST ARC INSTEAD OF THE ANGLE ✗; the choice $18^\\circ$ is HALVING TWICE ✗.)',
    },
    {
      q: 'A carousel has three painted horses $A$, $B$, and $C$ fixed to its circular rail. Riding around the rail, the arc from $B$ to $C$, the arc from $C$ to $A$, and the arc from $A$ to $B$ are in the ratio $2 : 7 : 9$. What is the smallest angle of triangle $ABC$?',
      fig: {
        view: [-4.9, -4.9, 4.9, 4.9],
        alt: 'Triangle ABC inscribed in a circle with arcs marked 2x, 7x and 9x',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0, 3], b: [0, -3] },
          { t: 'seg', a: [0, -3], b: [1.9284, -2.2981] },
          { t: 'seg', a: [1.9284, -2.2981], b: [0, 3] },
          { t: 'label', p: [-3.8, 0], text: '9x' },
          { t: 'label', p: [1.2997, -3.5708], text: '2x' },
          { t: 'label', p: [3.5708, 1.2997], text: '7x' },
          { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -13 },
          { t: 'point', p: [0, -3], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [1.9284, -2.2981], label: 'C', dx: 9, dy: 9 },
        ],
      },
      choices: ['$40^\\circ$', '$90^\\circ$', '$10^\\circ$', '$20^\\circ$'],
      answer: 3,
      solution:
        'The three arcs make up the full rail, so $2x + 7x + 9x = 360^\\circ$, giving $x = 20^\\circ$ and arcs of $40^\\circ$, $140^\\circ$, $180^\\circ$. The smallest angle is half the smallest arc: $\\frac{40^\\circ}{2} = 20^\\circ$ ✓. Check a second, independent way through the triangle: the angles inherit the ratio $2 : 7 : 9$ and add to $180^\\circ$, so one part is $\\frac{180^\\circ}{18} = 10^\\circ$ and the smallest angle is $2 \\times 10^\\circ = 20^\\circ$ ✓. (A bonus sign that the picture is right: the $180^\\circ$ arc makes $AB$ a diameter, so the angle at $C$ is a right angle, and $20 + 70 + 90 = 180$.) (The choice $40^\\circ$ is REPORTING THE SMALLEST ARC INSTEAD OF THE ANGLE ✗; the choice $90^\\circ$ is TAKING THE LARGEST ANGLE INSTEAD OF THE SMALLEST ✗; the choice $10^\\circ$ is HALVING TWICE ✗.)',
    },
  ],

  // slot 2 — cyclic quadrilateral with algebraic opposite angles.
  // Lane: 4x-5 & 2x+35 -> 85 / 5x+13 & 3x-9 -> 57 / 2x+53 & 4x-17 -> 79.
  [
    {
      q: 'Four fence posts $A$, $B$, $C$, $D$ stand in that order on the rim of a circular pond, joined by four straight rails. The rails meet at $A$ in an angle of $(4x - 5)^\\circ$ and at $C$ in an angle of $(2x + 35)^\\circ$. What is the angle at $C$?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        alt: 'Cyclic quadrilateral ABCD with the angle at A marked 4x minus 5 and the angle at C marked 2x plus 35',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.2679, 2.7189], b: [2.2981, 1.9284] },
          { t: 'seg', a: [2.2981, 1.9284], b: [1.5, -2.5981] },
          { t: 'seg', a: [1.5, -2.5981], b: [-2.8191, -1.0261] },
          { t: 'seg', a: [-2.8191, -1.0261], b: [-1.2679, 2.7189] },
          { t: 'label', p: [-0.85, 2.05], text: '4x − 5' },
          { t: 'label', p: [1.0, -1.95], text: '2x + 35' },
          { t: 'point', p: [-1.2679, 2.7189], label: 'A', dx: -6, dy: -11 },
          { t: 'point', p: [2.2981, 1.9284], label: 'B', dx: 10, dy: -8 },
          { t: 'point', p: [1.5, -2.5981], label: 'C', dx: 7, dy: 11 },
          { t: 'point', p: [-2.8191, -1.0261], label: 'D', dx: -12, dy: 4 },
        ],
      },
      choices: ['$85^\\circ$', '$95^\\circ$', '$25^\\circ$', '$105^\\circ$'],
      answer: 0,
      solution:
        'Opposite corners of a quadrilateral inscribed in a circle are supplementary, so $(4x - 5^\\circ) + (2x + 35^\\circ) = 180^\\circ$, that is $6x + 30^\\circ = 180^\\circ$, so $6x = 150^\\circ$ and $x = 25^\\circ$; then the angle at $C$ is $2(25^\\circ) + 35^\\circ = 85^\\circ$ ✓. Check a second, independent way by testing the answer instead of solving for it: if the angle at $C$ is $85^\\circ$, then $2x + 35^\\circ = 85^\\circ$ forces $x = 25^\\circ$, which makes the angle at $A$ equal to $4(25^\\circ) - 5^\\circ = 95^\\circ$ — and $85^\\circ + 95^\\circ = 180^\\circ$, exactly as a cyclic pair must ✓. (The choice $95^\\circ$ is ANSWERING FOR THE WRONG CORNER ✗; the choice $25^\\circ$ is REPORTING $x$ INSTEAD OF THE ANGLE ✗; the choice $105^\\circ$ is MOVING THE $30^\\circ$ ACROSS AS AN ADDITION, giving $x = 35^\\circ$ ✗.)',
    },
    {
      q: 'A stained-glass panel has four corners $A$, $B$, $C$, $D$ resting in that order on a circular metal rim. The glass meets at $A$ in an angle of $(5x + 13)^\\circ$ and at $C$ in an angle of $(3x - 9)^\\circ$. What is the angle at $C$?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        alt: 'Cyclic quadrilateral ABCD with the angle at A marked 5x plus 13 and the angle at C marked 3x minus 9',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.7207, 2.4575], b: [2.4575, 1.7207] },
          { t: 'seg', a: [2.4575, 1.7207], b: [1.0261, -2.8191] },
          { t: 'seg', a: [1.0261, -2.8191], b: [-2.9544, -0.5209] },
          { t: 'seg', a: [-2.9544, -0.5209], b: [-1.7207, 2.4575] },
          { t: 'label', p: [-1.15, 1.85], text: '5x + 13' },
          { t: 'label', p: [0.7, -2.1], text: '3x − 9' },
          { t: 'point', p: [-1.7207, 2.4575], label: 'A', dx: -7, dy: -11 },
          { t: 'point', p: [2.4575, 1.7207], label: 'B', dx: 11, dy: -7 },
          { t: 'point', p: [1.0261, -2.8191], label: 'C', dx: 6, dy: 12 },
          { t: 'point', p: [-2.9544, -0.5209], label: 'D', dx: -12, dy: 3 },
        ],
      },
      choices: ['$123^\\circ$', '$57^\\circ$', '$22^\\circ$', '$60^\\circ$'],
      answer: 1,
      solution:
        'Opposite angles of a cyclic quadrilateral add to $180^\\circ$, so $(5x + 13^\\circ) + (3x - 9^\\circ) = 180^\\circ$, that is $8x + 4^\\circ = 180^\\circ$, so $8x = 176^\\circ$ and $x = 22^\\circ$; the angle at $C$ is $3(22^\\circ) - 9^\\circ = 57^\\circ$ ✓. Check a second, independent way by testing the answer: if the angle at $C$ is $57^\\circ$, then $3x - 9^\\circ = 57^\\circ$ forces $x = 22^\\circ$, and the angle at $A$ becomes $5(22^\\circ) + 13^\\circ = 123^\\circ$ — and $57^\\circ + 123^\\circ = 180^\\circ$ ✓. (The choice $123^\\circ$ is ANSWERING FOR THE WRONG CORNER ✗; the choice $22^\\circ$ is REPORTING $x$ INSTEAD OF THE ANGLE ✗; the choice $60^\\circ$ is ADDING THE $4^\\circ$ INSTEAD OF SUBTRACTING IT, giving $x = 23^\\circ$ ✗.)',
    },
    {
      q: 'Four marker buoys $A$, $B$, $C$, $D$ float in that order on a circular racecourse, and straight ropes join them in a loop. The ropes turn at $A$ through an angle of $(2x + 53)^\\circ$ and at $C$ through an angle of $(4x - 17)^\\circ$. What is the angle at $C$?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        alt: 'Cyclic quadrilateral ABCD with the angle at A marked 2x plus 53 and the angle at C marked 4x minus 17',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-0.7765, 2.8978], b: [2.7189, 1.2679] },
          { t: 'seg', a: [2.7189, 1.2679], b: [0.7765, -2.8978] },
          { t: 'seg', a: [0.7765, -2.8978], b: [-2.7189, -1.2679] },
          { t: 'seg', a: [-2.7189, -1.2679], b: [-0.7765, 2.8978] },
          { t: 'label', p: [-0.55, 2.15], text: '2x + 53' },
          { t: 'label', p: [0.55, -2.15], text: '4x − 17' },
          { t: 'point', p: [-0.7765, 2.8978], label: 'A', dx: -4, dy: -12 },
          { t: 'point', p: [2.7189, 1.2679], label: 'B', dx: 12, dy: -5 },
          { t: 'point', p: [0.7765, -2.8978], label: 'C', dx: 4, dy: 13 },
          { t: 'point', p: [-2.7189, -1.2679], label: 'D', dx: -12, dy: 5 },
        ],
      },
      choices: ['$24^\\circ$', '$127^\\circ$', '$101^\\circ$', '$79^\\circ$'],
      answer: 3,
      solution:
        'The corners at $A$ and $C$ are opposite corners of a cyclic quadrilateral, so they are supplementary: $(2x + 53^\\circ) + (4x - 17^\\circ) = 180^\\circ$, that is $6x + 36^\\circ = 180^\\circ$, so $6x = 144^\\circ$ and $x = 24^\\circ$; the angle at $C$ is $4(24^\\circ) - 17^\\circ = 79^\\circ$ ✓. Check a second, independent way by testing the answer: if the angle at $C$ is $79^\\circ$, then $4x - 17^\\circ = 79^\\circ$ forces $x = 24^\\circ$, so the angle at $A$ is $2(24^\\circ) + 53^\\circ = 101^\\circ$ — and $79^\\circ + 101^\\circ = 180^\\circ$ ✓. (The choice $24^\\circ$ is REPORTING $x$ INSTEAD OF THE ANGLE ✗; the choice $127^\\circ$ is MOVING THE $36^\\circ$ ACROSS AS AN ADDITION, giving $x = 36^\\circ$ ✗; the choice $101^\\circ$ is ANSWERING FOR THE WRONG CORNER ✗.)',
    },
  ],

  // slot 3 — tangent PA plus secant P-B-C: far arc = near arc + 2P, then halve.
  // Lane: P=41, AB=44 -> 63 / P=35, AB=48 -> 59 / P=52, AB=30 -> 67.
  [
    {
      q: 'A drone hovers at $P$ outside a circular pond. One straight beam from the drone just grazes the shore at $A$, and a second beam crosses the pond, entering the shore at $B$ and leaving it at $C$. The two beams meet at $P$ in an angle of $41^\\circ$, and the near shore arc $\\overset{\\frown}{AB}$ measures $44^\\circ$. What is the inscribed angle $\\angle ABC$?',
      fig: {
        view: [-4.5, -4.3, 5.7, 4.5],
        alt: 'Tangent PA and secant through B and C meeting at outside point P, with near arc AB marked 44 degrees',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [4.2604, -0.4101], b: [2.2981, 1.9284] },
          { t: 'seg', a: [4.2604, -0.4101], b: [-2.9109, 0.7258] },
          { t: 'arc', c: [0, 0], r: 3.25, from: -4, to: 40 },
          { t: 'label', p: [3.6613, 1.1897], text: '44°', dx: 8, dy: 2 },
          { t: 'angle', at: [4.2604, -0.4101], from: [2.2981, 1.9284], to: [-2.9109, 0.7258], r: 0.85, label: '41' },
          { t: 'angle', at: [2.9927, -0.2093], from: [2.2981, 1.9284], to: [-2.9109, 0.7258], r: 0.6, label: '?' },
          { t: 'point', p: [2.2981, 1.9284], label: 'A', dx: 4, dy: -12 },
          { t: 'point', p: [2.9927, -0.2093], label: 'B', dx: 3, dy: 14 },
          { t: 'point', p: [-2.9109, 0.7258], label: 'C', dx: -12, dy: -5 },
          { t: 'point', p: [4.2604, -0.4101], label: 'P', dx: 12, dy: 6 },
        ],
      },
      choices: ['$63^\\circ$', '$41^\\circ$', '$22^\\circ$', '$126^\\circ$'],
      answer: 0,
      solution:
        'From an outside point the angle is half the difference of the two arcs, and a tangent counts as a line whose two crossing points have merged: $41^\\circ = \\frac{\\overset{\\frown}{AC} - 44^\\circ}{2}$, so $\\overset{\\frown}{AC} = 82^\\circ + 44^\\circ = 126^\\circ$. The inscribed angle $\\angle ABC$ stands on that far arc, so it is $\\frac{126^\\circ}{2} = 63^\\circ$ ✓. Check a second, independent way with no arc arithmetic at all: in triangle $ABP$ the angle $\\angle ABC$ is the exterior angle at $B$, so it equals the sum of the two remote angles, $\\angle P$ and the tangent-chord angle $\\angle PAB = \\frac{44^\\circ}{2} = 22^\\circ$; that gives $41^\\circ + 22^\\circ = 63^\\circ$ ✓. (The choice $41^\\circ$ is COPYING THE ANGLE AT $P$ ✗; the choice $22^\\circ$ is USING THE NEAR ARC instead of the far one ✗; the choice $126^\\circ$ is REPORTING THE FAR ARC INSTEAD OF THE INSCRIBED ANGLE ✗.)',
    },
    {
      q: 'A straight bicycle path just touches a circular roundabout at $A$, and a straight footpath cuts across the roundabout, meeting its edge first at $B$ and then at $C$. The two paths cross at a point $P$ outside the roundabout at an angle of $35^\\circ$, and the near arc $\\overset{\\frown}{AB}$ measures $48^\\circ$. What is the inscribed angle $\\angle ABC$?',
      fig: {
        view: [-4.5, -4.3, 6.1, 4.5],
        alt: 'Tangent PA and secant through B and C meeting at outside point P, with near arc AB marked 48 degrees',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [4.7001, -0.4575], b: [2.1213, 2.1213] },
          { t: 'seg', a: [4.7001, -0.4575], b: [-2.8689, 0.8771] },
          { t: 'arc', c: [0, 0], r: 3.25, from: -3, to: 45 },
          { t: 'label', p: [3.5943, 1.3797], text: '48°', dx: 8, dy: 2 },
          { t: 'angle', at: [4.7001, -0.4575], from: [2.1213, 2.1213], to: [-2.8689, 0.8771], r: 0.9, label: '35' },
          { t: 'angle', at: [2.9959, -0.157], from: [2.1213, 2.1213], to: [-2.8689, 0.8771], r: 0.6, label: '?' },
          { t: 'point', p: [2.1213, 2.1213], label: 'A', dx: 4, dy: -12 },
          { t: 'point', p: [2.9959, -0.157], label: 'B', dx: 3, dy: 14 },
          { t: 'point', p: [-2.8689, 0.8771], label: 'C', dx: -12, dy: -5 },
          { t: 'point', p: [4.7001, -0.4575], label: 'P', dx: 12, dy: 6 },
        ],
      },
      choices: ['$118^\\circ$', '$24^\\circ$', '$59^\\circ$', '$35^\\circ$'],
      answer: 2,
      solution:
        'The outside-angle rule takes half the difference of the far and near arcs, and the tangent side contributes the single point $A$: $35^\\circ = \\frac{\\overset{\\frown}{AC} - 48^\\circ}{2}$, so $\\overset{\\frown}{AC} = 70^\\circ + 48^\\circ = 118^\\circ$, and the inscribed angle on that far arc is $\\frac{118^\\circ}{2} = 59^\\circ$ ✓. Check a second, independent way through triangle $ABP$: $\\angle ABC$ is the exterior angle at $B$, equal to the two remote angles added, namely $\\angle P = 35^\\circ$ and the tangent-chord angle $\\angle PAB = \\frac{48^\\circ}{2} = 24^\\circ$, so $\\angle ABC = 35^\\circ + 24^\\circ = 59^\\circ$ ✓. (The choice $118^\\circ$ is REPORTING THE FAR ARC INSTEAD OF THE INSCRIBED ANGLE ✗; the choice $24^\\circ$ is USING THE NEAR ARC instead of the far one ✗; the choice $35^\\circ$ is COPYING THE ANGLE AT $P$ ✗.)',
    },
    {
      q: 'From a lamp at $P$, one straight ray of light just skims the rim of a circular fountain at $A$ while another ray passes over the water, crossing the rim at $B$ and then at $C$. The rays leave the lamp $52^\\circ$ apart, and the near rim arc $\\overset{\\frown}{AB}$ measures $30^\\circ$. What is the inscribed angle $\\angle ABC$?',
      fig: {
        view: [-4.5, -4.3, 5.0, 4.5],
        alt: 'Tangent PA and secant through B and C meeting at outside point P, with near arc AB marked 30 degrees',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [3.5051, -0.071], b: [2.5981, 1.5] },
          { t: 'seg', a: [3.5051, -0.071], b: [-2.8838, 0.8269] },
          { t: 'arc', c: [0, 0], r: 3.25, from: 0, to: 30 },
          { t: 'label', p: [3.7188, 0.9965], text: '30°', dx: 8, dy: 2 },
          { t: 'angle', at: [3.5051, -0.071], from: [2.5981, 1.5], to: [-2.8838, 0.8269], r: 0.7, label: '52' },
          { t: 'angle', at: [3, 0], from: [2.5981, 1.5], to: [-2.8838, 0.8269], r: 0.6, label: '?' },
          { t: 'point', p: [2.5981, 1.5], label: 'A', dx: 5, dy: -11 },
          { t: 'point', p: [3, 0], label: 'B', dx: 3, dy: 14 },
          { t: 'point', p: [-2.8838, 0.8269], label: 'C', dx: -12, dy: -5 },
          { t: 'point', p: [3.5051, -0.071], label: 'P', dx: 12, dy: 8 },
        ],
      },
      choices: ['$15^\\circ$', '$52^\\circ$', '$134^\\circ$', '$67^\\circ$'],
      answer: 3,
      solution:
        'Half the difference of the arcs gives the angle at the lamp: $52^\\circ = \\frac{\\overset{\\frown}{AC} - 30^\\circ}{2}$, so $\\overset{\\frown}{AC} = 104^\\circ + 30^\\circ = 134^\\circ$, and the inscribed angle $\\angle ABC$ standing on that far arc is $\\frac{134^\\circ}{2} = 67^\\circ$ ✓. Check a second, independent way with the exterior angle of triangle $ABP$: at $B$ that exterior angle equals $\\angle P$ plus the tangent-chord angle $\\angle PAB = \\frac{30^\\circ}{2} = 15^\\circ$, so $\\angle ABC = 52^\\circ + 15^\\circ = 67^\\circ$ ✓. (The choice $15^\\circ$ is USING THE NEAR ARC instead of the far one ✗; the choice $52^\\circ$ is COPYING THE ANGLE AT $P$ ✗; the choice $134^\\circ$ is REPORTING THE FAR ARC INSTEAD OF THE INSCRIBED ANGLE ✗.)',
    },
  ],

  // slot 4 — two tangents from P; minor arc = 180 - P, inscribed angle is half.
  // Lane: P=48 -> 66 / P=54 -> 63 / P=42 -> 69.
  [
    {
      q: 'Two straight ropes run from a post at $P$ and pull tight against a circular grain silo, touching it at $A$ and at $B$. The ropes meet at the post in an angle of $48^\\circ$. A ladder rung sits at a point $C$ on the far side of the silo wall. What is $\\angle ACB$?',
      fig: {
        view: [-4.4, -4.3, 8.8, 4.3],
        alt: 'Two tangents from P touching a circle at A and B, with C on the major arc',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [7.3758, 0], b: [1.2202, 2.7406] },
          { t: 'seg', a: [7.3758, 0], b: [1.2202, -2.7406] },
          { t: 'seg', a: [-3, 0], b: [1.2202, 2.7406] },
          { t: 'seg', a: [-3, 0], b: [1.2202, -2.7406] },
          { t: 'angle', at: [7.3758, 0], from: [1.2202, 2.7406], to: [1.2202, -2.7406], r: 1.2, label: '48' },
          { t: 'angle', at: [-3, 0], from: [1.2202, 2.7406], to: [1.2202, -2.7406], r: 0.75, label: '?' },
          { t: 'point', p: [1.2202, 2.7406], label: 'A', dx: -4, dy: -12 },
          { t: 'point', p: [1.2202, -2.7406], label: 'B', dx: -4, dy: 13 },
          { t: 'point', p: [-3, 0], label: 'C', dx: -13, dy: 0 },
          { t: 'point', p: [7.3758, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$66^\\circ$', '$48^\\circ$', '$132^\\circ$', '$24^\\circ$'],
      answer: 0,
      solution:
        'A radius meets a tangent at a right angle, so quadrilateral $PAOB$ (with $O$ the center) has right angles at $A$ and $B$; its four angles total $360^\\circ$, which leaves the central angle $\\angle AOB = 180^\\circ - 48^\\circ = 132^\\circ$, so the near arc $AB$ is $132^\\circ$. From the far side, $\\angle ACB$ is inscribed on that arc: $\\frac{132^\\circ}{2} = 66^\\circ$ ✓. Check a second, independent way with the triangle of ropes: $PA = PB$ because two tangents from one point are equal, so triangle $PAB$ is isosceles and $\\angle PAB = \\frac{180^\\circ - 48^\\circ}{2} = 66^\\circ$; that tangent-chord angle and $\\angle ACB$ both stand on arc $AB$ from opposite sides of the chord, so $\\angle ACB = 66^\\circ$ ✓. (The choice $48^\\circ$ is COPYING THE ANGLE AT THE POST ✗; the choice $132^\\circ$ is REPORTING THE ARC INSTEAD OF THE INSCRIBED ANGLE ✗; the choice $24^\\circ$ is HALVING THE ANGLE AT $P$ instead of working with the arc ✗.)',
    },
    {
      q: 'A camera at $P$ looks at a circular pond. Its two edge-of-view sightlines just touch the water at $A$ and at $B$, and they leave the lens $54^\\circ$ apart. A duck floats at a point $C$ on the far shore. What is $\\angle ACB$?',
      fig: {
        view: [-4.4, -4.3, 8.0, 4.3],
        alt: 'Two tangents from P touching a circle at A and B, with C on the major arc',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [6.6081, 0], b: [1.362, 2.673] },
          { t: 'seg', a: [6.6081, 0], b: [1.362, -2.673] },
          { t: 'seg', a: [-3, 0], b: [1.362, 2.673] },
          { t: 'seg', a: [-3, 0], b: [1.362, -2.673] },
          { t: 'angle', at: [6.6081, 0], from: [1.362, 2.673], to: [1.362, -2.673], r: 1.2, label: '54' },
          { t: 'angle', at: [-3, 0], from: [1.362, 2.673], to: [1.362, -2.673], r: 0.75, label: '?' },
          { t: 'point', p: [1.362, 2.673], label: 'A', dx: -4, dy: -12 },
          { t: 'point', p: [1.362, -2.673], label: 'B', dx: -4, dy: 13 },
          { t: 'point', p: [-3, 0], label: 'C', dx: -13, dy: 0 },
          { t: 'point', p: [6.6081, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$126^\\circ$', '$63^\\circ$', '$27^\\circ$', '$54^\\circ$'],
      answer: 1,
      solution:
        'Each sightline is perpendicular to the radius it touches, so in quadrilateral $PAOB$ the two right angles and the $54^\\circ$ at $P$ leave $\\angle AOB = 180^\\circ - 54^\\circ = 126^\\circ$, which is the near arc $AB$. The duck sees that arc from the far side, so $\\angle ACB = \\frac{126^\\circ}{2} = 63^\\circ$ ✓. Check a second, independent way with the isosceles triangle: $PA = PB$, so $\\angle PAB = \\frac{180^\\circ - 54^\\circ}{2} = 63^\\circ$, and that tangent-chord angle equals the inscribed angle on the other side of chord $AB$, so $\\angle ACB = 63^\\circ$ ✓. (The choice $126^\\circ$ is REPORTING THE ARC INSTEAD OF THE INSCRIBED ANGLE ✗; the choice $27^\\circ$ is HALVING THE ANGLE AT $P$ instead of working with the arc ✗; the choice $54^\\circ$ is COPYING THE ANGLE AT THE CAMERA ✗.)',
    },
    {
      q: 'Two straight garden paths leave a gate at $P$ and run tangent to a circular hedge, brushing it at $A$ and at $B$. The paths make an angle of $42^\\circ$ at the gate. A birdbath stands at a point $C$ on the far side of the hedge. What is $\\angle ACB$?',
      fig: {
        view: [-4.4, -4.3, 9.8, 4.3],
        alt: 'Two tangents from P touching a circle at A and B, with C on the major arc',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [8.3713, 0], b: [1.0751, 2.8007] },
          { t: 'seg', a: [8.3713, 0], b: [1.0751, -2.8007] },
          { t: 'seg', a: [-3, 0], b: [1.0751, 2.8007] },
          { t: 'seg', a: [-3, 0], b: [1.0751, -2.8007] },
          { t: 'angle', at: [8.3713, 0], from: [1.0751, 2.8007], to: [1.0751, -2.8007], r: 1.3, label: '42' },
          { t: 'angle', at: [-3, 0], from: [1.0751, 2.8007], to: [1.0751, -2.8007], r: 0.75, label: '?' },
          { t: 'point', p: [1.0751, 2.8007], label: 'A', dx: -4, dy: -12 },
          { t: 'point', p: [1.0751, -2.8007], label: 'B', dx: -4, dy: 13 },
          { t: 'point', p: [-3, 0], label: 'C', dx: -13, dy: 0 },
          { t: 'point', p: [8.3713, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$21^\\circ$', '$42^\\circ$', '$69^\\circ$', '$138^\\circ$'],
      answer: 2,
      solution:
        'A tangent is perpendicular to the radius at its point of contact, so quadrilateral $PAOB$ has right angles at $A$ and $B$ and its angles total $360^\\circ$; the central angle is $\\angle AOB = 180^\\circ - 42^\\circ = 138^\\circ$, which is the near arc $AB$. Seen from the far side, $\\angle ACB = \\frac{138^\\circ}{2} = 69^\\circ$ ✓. Check a second, independent way with the triangle of paths: the two tangent segments are equal, so triangle $PAB$ is isosceles with $\\angle PAB = \\frac{180^\\circ - 42^\\circ}{2} = 69^\\circ$, and the tangent-chord angle at $A$ matches the inscribed angle looking at chord $AB$ from the other side: $\\angle ACB = 69^\\circ$ ✓. (The choice $21^\\circ$ is HALVING THE ANGLE AT $P$ instead of working with the arc ✗; the choice $42^\\circ$ is COPYING THE ANGLE AT THE GATE ✗; the choice $138^\\circ$ is REPORTING THE ARC INSTEAD OF THE INSCRIBED ANGLE ✗.)',
    },
  ],

  // slot 5 — tangent length from a vertex to the inscribed circle.
  // Lane: 17-15-16 -> 9 / 21-17-20 -> 12 / 25-20-17 -> 11.
  [
    {
      q: 'A triangular flower garden has straight edges $AB = 17$ m, $BC = 15$ m, and $CA = 16$ m. A circular sprinkler is set inside it so that its spray circle just touches all three edges, at $X$ on $BC$, at $Y$ on $CA$, and at $Z$ on $AB$. How many meters is it from corner $A$ to the touch point $Z$?',
      fig: {
        view: [-2.6, -2.6, 17.6, 17.6],
        alt: 'Triangle ABC with an inscribed circle touching BC at X, CA at Y and AB at Z',
        elems: [
          { t: 'seg', a: [0, 0], b: [15, 0] },
          { t: 'seg', a: [15, 0], b: [8.6, 14.6642] },
          { t: 'seg', a: [8.6, 14.6642], b: [0, 0] },
          { t: 'circle', c: [8, 4.5826], r: 4.5826 },
          { t: 'seg', a: [8, 4.5826], b: [8, 0], dash: true },
          { t: 'seg', a: [8, 4.5826], b: [12.2, 6.4156], dash: true },
          { t: 'seg', a: [8, 4.5826], b: [4.0471, 6.9008], dash: true },
          { t: 'label', p: [7.5, 0], text: '15', dy: 17 },
          { t: 'label', p: [4.3, 7.3321], text: '17', dx: -17 },
          { t: 'label', p: [11.8, 7.3321], text: '16', dx: 17 },
          { t: 'point', p: [8.6, 14.6642], label: 'A', dx: 0, dy: -13 },
          { t: 'point', p: [0, 0], label: 'B', dx: -13, dy: 8 },
          { t: 'point', p: [15, 0], label: 'C', dx: 13, dy: 8 },
          { t: 'point', p: [8, 0], label: 'X', dx: 2, dy: 15 },
          { t: 'point', p: [12.2, 6.4156], label: 'Y', dx: 13, dy: 2 },
          { t: 'point', p: [4.0471, 6.9008], label: 'Z', dx: -13, dy: 0 },
        ],
      },
      choices: ['$8$', '$7$', '$24$', '$9$'],
      answer: 3,
      solution:
        'The two touching segments drawn from one corner are equal, so let $x = AY = AZ$, $y = BX = BZ$, and $z = CX = CY$. Each side is split into two of these: $x + y = 17$, $y + z = 15$, $z + x = 16$. Adding all three gives $2(x + y + z) = 48$, so $x + y + z = 24$; subtracting the side $BC$ leaves $x = 24 - 15 = 9$ ✓. Check a second, independent way by elimination instead of by the total: subtracting $y + z = 15$ from $x + y = 17$ gives $x - z = 2$, and adding that to $z + x = 16$ gives $2x = 18$, so $x = 9$ ✓ (then $z = 7$ and $y = 8$, and indeed $y + z = 15$). (The choice $8$ is MEASURING FROM $B$ INSTEAD OF FROM $A$ ✗; the choice $7$ is MEASURING FROM $C$ INSTEAD OF FROM $A$ ✗; the choice $24$ is STOPPING AT THE HALF-PERIMETER ✗.)',
    },
    {
      q: 'A triangular sail has edges $AB = 21$ ft, $BC = 17$ ft, and $CA = 20$ ft. A round patch is sewn on so that it touches all three edges, meeting $BC$ at $X$, $CA$ at $Y$, and $AB$ at $Z$. How many feet is it from the top corner $A$ down to the touch point $Z$?',
      fig: {
        view: [-2.9, -2.9, 20.1, 21.4],
        alt: 'Triangle ABC with an inscribed circle touching BC at X, CA at Y and AB at Z',
        elems: [
          { t: 'seg', a: [0, 0], b: [17, 0] },
          { t: 'seg', a: [17, 0], b: [9.7059, 18.6225] },
          { t: 'seg', a: [9.7059, 18.6225], b: [0, 0] },
          { t: 'circle', c: [9, 5.4583], r: 5.4583 },
          { t: 'seg', a: [9, 5.4583], b: [9, 0], dash: true },
          { t: 'seg', a: [9, 5.4583], b: [14.0824, 7.449], dash: true },
          { t: 'seg', a: [9, 5.4583], b: [4.1597, 7.9811], dash: true },
          { t: 'label', p: [8.5, 0], text: '17', dy: 17 },
          { t: 'label', p: [4.853, 9.3113], text: '21', dx: -17 },
          { t: 'label', p: [13.353, 9.3113], text: '20', dx: 17 },
          { t: 'point', p: [9.7059, 18.6225], label: 'A', dx: 0, dy: -13 },
          { t: 'point', p: [0, 0], label: 'B', dx: -13, dy: 8 },
          { t: 'point', p: [17, 0], label: 'C', dx: 13, dy: 8 },
          { t: 'point', p: [9, 0], label: 'X', dx: 2, dy: 15 },
          { t: 'point', p: [14.0824, 7.449], label: 'Y', dx: 13, dy: 2 },
          { t: 'point', p: [4.1597, 7.9811], label: 'Z', dx: -13, dy: 0 },
        ],
      },
      choices: ['$12$', '$9$', '$8$', '$29$'],
      answer: 0,
      solution:
        'The two touching segments from a single corner have equal length, so let $x = AY = AZ$, $y = BX = BZ$, $z = CX = CY$. Reading the sides gives $x + y = 21$, $y + z = 17$, $z + x = 20$. Adding the three equations gives $2(x + y + z) = 58$, so $x + y + z = 29$, and taking away $BC$ leaves $x = 29 - 17 = 12$ ✓. Check a second, independent way by eliminating one letter at a time: $(x + y) - (y + z) = 21 - 17$ gives $x - z = 4$, and adding $z + x = 20$ gives $2x = 24$, so $x = 12$ ✓ (then $z = 8$, $y = 9$, and $y + z = 17$ as required). (The choice $9$ is MEASURING FROM $B$ INSTEAD OF FROM $A$ ✗; the choice $8$ is MEASURING FROM $C$ INSTEAD OF FROM $A$ ✗; the choice $29$ is STOPPING AT THE HALF-PERIMETER ✗.)',
    },
    {
      q: 'A triangular park has paths $AB = 25$ m, $BC = 20$ m, and $CA = 17$ m around its edge. A round pond inside the park touches all three paths, meeting $BC$ at $X$, $CA$ at $Y$, and $AB$ at $Z$. How many meters is it from corner $A$ to the touch point $Z$?',
      fig: {
        view: [-3.1, -3.1, 23.1, 20.1],
        alt: 'Triangle ABC with an inscribed circle touching BC at X, CA at Y and AB at Z',
        elems: [
          { t: 'seg', a: [0, 0], b: [20, 0] },
          { t: 'seg', a: [20, 0], b: [18.4, 16.9245] },
          { t: 'seg', a: [18.4, 16.9245], b: [0, 0] },
          { t: 'circle', c: [14, 5.4595], r: 5.4595 },
          { t: 'seg', a: [14, 5.4595], b: [14, 0], dash: true },
          { t: 'seg', a: [14, 5.4595], b: [19.4353, 5.9734], dash: true },
          { t: 'seg', a: [14, 5.4595], b: [10.304, 9.4777], dash: true },
          { t: 'label', p: [10, 0], text: '20', dy: 17 },
          { t: 'label', p: [9.2, 8.4623], text: '25', dx: -17 },
          { t: 'label', p: [19.2, 8.4623], text: '17', dx: 17 },
          { t: 'point', p: [18.4, 16.9245], label: 'A', dx: 4, dy: -13 },
          { t: 'point', p: [0, 0], label: 'B', dx: -13, dy: 8 },
          { t: 'point', p: [20, 0], label: 'C', dx: 12, dy: 10 },
          { t: 'point', p: [14, 0], label: 'X', dx: 2, dy: 15 },
          { t: 'point', p: [19.4353, 5.9734], label: 'Y', dx: 13, dy: 2 },
          { t: 'point', p: [10.304, 9.4777], label: 'Z', dx: -13, dy: 0 },
        ],
      },
      choices: ['$14$', '$11$', '$6$', '$31$'],
      answer: 1,
      solution:
        'From each corner the two segments that reach the pond are equal, so write $x = AY = AZ$, $y = BX = BZ$, $z = CX = CY$. The three paths give $x + y = 25$, $y + z = 20$, $z + x = 17$. Adding them all, $2(x + y + z) = 62$, so $x + y + z = 31$, and removing $BC$ leaves $x = 31 - 20 = 11$ ✓. Check a second, independent way by elimination: $(x + y) - (y + z) = 25 - 20$ gives $x - z = 5$, and adding $z + x = 17$ gives $2x = 22$, so $x = 11$ ✓ (then $z = 6$, $y = 14$, and $y + z = 20$ closes the check). (The choice $14$ is MEASURING FROM $B$ INSTEAD OF FROM $A$ ✗; the choice $6$ is MEASURING FROM $C$ INSTEAD OF FROM $A$ ✗; the choice $31$ is STOPPING AT THE HALF-PERIMETER ✗.)',
    },
  ],

  // slot 6 — two chords crossing, one arc given as more than the other.
  // Lane: 59 with a gap of 50 -> 84 / 49 with a gap of 32 -> 65 / 61 with a gap of 38 -> 80.
  [
    {
      q: 'Two zip lines are strung across a circular field, one from $A$ to $C$ and the other from $B$ to $D$, and they cross above the point $P$. Looking up from $P$, the angle $\\angle APB$ measures $59^\\circ$. Arc $AB$ is $50^\\circ$ larger than arc $CD$. How large is arc $AB$?',
      fig: {
        view: [-4.6, -4.6, 4.6, 4.6],
        alt: 'Chords AC and BD of a circle crossing at P, with the angle at P marked 59 and arc AB marked with a question mark',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.0074, 2.2294], b: [0.8771, -2.8689] },
          { t: 'seg', a: [2.0074, 2.2294], b: [-0.8771, -2.8689] },
          { t: 'label', p: [0, 3.8], text: '?' },
          { t: 'angle', at: [0, -1.3186], from: [-2.0074, 2.2294], to: [2.0074, 2.2294], r: 0.7, label: '59' },
          { t: 'point', p: [-2.0074, 2.2294], label: 'A', dx: -12, dy: -6 },
          { t: 'point', p: [2.0074, 2.2294], label: 'B', dx: 12, dy: -6 },
          { t: 'point', p: [0.8771, -2.8689], label: 'C', dx: 12, dy: 8 },
          { t: 'point', p: [-0.8771, -2.8689], label: 'D', dx: -12, dy: 8 },
          { t: 'point', p: [0, -1.3186], label: 'P', dx: 0, dy: 16 },
        ],
      },
      choices: ['$34^\\circ$', '$59^\\circ$', '$84^\\circ$', '$109^\\circ$'],
      answer: 2,
      solution:
        'An angle made where two chords cross is half the sum of the two arcs it faces, so arc $AB$ + arc $CD$ = $2 \\times 59^\\circ = 118^\\circ$. Together with arc $AB$ - arc $CD$ = $50^\\circ$, adding the two statements gives $2 \\times$ arc $AB$ = $168^\\circ$, so arc $AB = 84^\\circ$ ✓. Check a second, independent way without that rule: join $A$ to $D$. In triangle $APD$ the angle $\\angle APB$ is the exterior angle at $P$, so $\\angle APB = \\angle DAC + \\angle ADB$, and those two inscribed angles are half of arc $CD$ and half of arc $AB$. With arc $CD = 34^\\circ$ and arc $AB = 84^\\circ$ that reads $17^\\circ + 42^\\circ = 59^\\circ$, matching the figure, and the two arcs do differ by $50^\\circ$ ✓. (The choice $34^\\circ$ is ANSWERING WITH THE SMALLER ARC ✗; the choice $59^\\circ$ is COPYING THE ANGLE AT THE CROSSING ✗; the choice $109^\\circ$ is ADDING THE GAP TO THE ANGLE INSTEAD OF AVERAGING ✗.)',
    },
    {
      q: 'Two footbridges cross a round pond, one running from $A$ to $C$ and the other from $B$ to $D$. They meet at $P$, where the angle $\\angle APB$ is $49^\\circ$. Arc $AB$ is $32^\\circ$ larger than arc $CD$. How large is arc $AB$?',
      fig: {
        view: [-4.6, -4.6, 4.6, 4.6],
        alt: 'Chords AC and BD of a circle crossing at P, with the angle at P marked 49 and arc AB marked with a question mark',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.6119, 2.5302], b: [0.852, -2.8765] },
          { t: 'seg', a: [1.6119, 2.5302], b: [-0.852, -2.8765] },
          { t: 'label', p: [0, 3.8], text: '?' },
          { t: 'angle', at: [0, -1.0069], from: [-1.6119, 2.5302], to: [1.6119, 2.5302], r: 0.7, label: '49' },
          { t: 'point', p: [-1.6119, 2.5302], label: 'A', dx: -12, dy: -6 },
          { t: 'point', p: [1.6119, 2.5302], label: 'B', dx: 12, dy: -6 },
          { t: 'point', p: [0.852, -2.8765], label: 'C', dx: 12, dy: 8 },
          { t: 'point', p: [-0.852, -2.8765], label: 'D', dx: -12, dy: 8 },
          { t: 'point', p: [0, -1.0069], label: 'P', dx: 0, dy: 16 },
        ],
      },
      choices: ['$33^\\circ$', '$49^\\circ$', '$81^\\circ$', '$65^\\circ$'],
      answer: 3,
      solution:
        'The angle between two crossing chords is half the sum of the arcs it faces, so arc $AB$ + arc $CD$ = $2 \\times 49^\\circ = 98^\\circ$. The other fact is arc $AB$ - arc $CD$ = $32^\\circ$; adding the two gives $2 \\times$ arc $AB$ = $130^\\circ$, so arc $AB = 65^\\circ$ ✓. Check a second, independent way by building the angle from scratch: join $A$ to $D$, so that $\\angle APB$ is the exterior angle of triangle $APD$ at $P$ and equals $\\angle DAC + \\angle ADB$. Those inscribed angles are half of arc $CD$ and half of arc $AB$, which with $CD = 33^\\circ$ and $AB = 65^\\circ$ gives $16.5^\\circ + 32.5^\\circ = 49^\\circ$, exactly the marked angle, and the arcs differ by $32^\\circ$ ✓. (The choice $33^\\circ$ is ANSWERING WITH THE SMALLER ARC ✗; the choice $49^\\circ$ is COPYING THE ANGLE AT THE CROSSING ✗; the choice $81^\\circ$ is ADDING THE GAP TO THE ANGLE INSTEAD OF AVERAGING ✗.)',
    },
    {
      q: 'Two ribbons are stretched across the round head of a drum, one from $A$ to $C$ and one from $B$ to $D$. They cross at $P$, and $\\angle APB = 61^\\circ$. Arc $AB$ is $38^\\circ$ larger than arc $CD$. How large is arc $AB$?',
      fig: {
        view: [-4.6, -4.6, 4.6, 4.6],
        alt: 'Chords AC and BD of a circle crossing at P, with the angle at P marked 61 and arc AB marked with a question mark',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.9284, 2.2981], b: [1.0751, -2.8007] },
          { t: 'seg', a: [1.9284, 2.2981], b: [-1.0751, -2.8007] },
          { t: 'label', p: [0, 3.8], text: '?' },
          { t: 'angle', at: [0, -0.9756], from: [-1.9284, 2.2981], to: [1.9284, 2.2981], r: 0.7, label: '61' },
          { t: 'point', p: [-1.9284, 2.2981], label: 'A', dx: -12, dy: -6 },
          { t: 'point', p: [1.9284, 2.2981], label: 'B', dx: 12, dy: -6 },
          { t: 'point', p: [1.0751, -2.8007], label: 'C', dx: 12, dy: 8 },
          { t: 'point', p: [-1.0751, -2.8007], label: 'D', dx: -12, dy: 8 },
          { t: 'point', p: [0, -0.9756], label: 'P', dx: 0, dy: 16 },
        ],
      },
      choices: ['$42^\\circ$', '$80^\\circ$', '$61^\\circ$', '$99^\\circ$'],
      answer: 1,
      solution:
        'Where two chords cross, the angle is the average of the two arcs it faces, so arc $AB$ + arc $CD$ = $2 \\times 61^\\circ = 122^\\circ$. Combining that with arc $AB$ - arc $CD$ = $38^\\circ$ by addition gives $2 \\times$ arc $AB$ = $160^\\circ$, so arc $AB = 80^\\circ$ ✓. Check a second, independent way from inscribed angles alone: joining $A$ to $D$ makes $\\angle APB$ the exterior angle of triangle $APD$, equal to $\\angle DAC + \\angle ADB$ = half of arc $CD$ plus half of arc $AB$. With $CD = 42^\\circ$ and $AB = 80^\\circ$ that is $21^\\circ + 40^\\circ = 61^\\circ$, the angle shown, and $80 - 42 = 38$ as promised ✓. (The choice $42^\\circ$ is ANSWERING WITH THE SMALLER ARC ✗; the choice $61^\\circ$ is COPYING THE ANGLE AT THE CROSSING ✗; the choice $99^\\circ$ is ADDING THE GAP TO THE ANGLE INSTEAD OF AVERAGING ✗.)',
    },
  ],

  // slot 7 — point angle of a star drawn on evenly spaced points of a circle.
  // Lane: 8 points, join to the 3rd -> 45 / 10 points, join to the 3rd -> 72 / 12 points, join to the 5th -> 30.
  [
    {
      q: 'Eight lanterns $A$, $B$, $C$, $D$, $E$, $F$, $G$, $H$ hang at evenly spaced points around a circular courtyard. A rope is run from each lantern to the third lantern counted around from it, so that the eight ropes form an eight-pointed star. How large is the angle of the star at lantern $A$, that is $\\angle DAF$?',
      fig: {
        view: [-4.4, -4.4, 4.4, 4.4],
        alt: 'Eight-pointed star drawn inside a circle by joining each of eight evenly spaced points to the third point around',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0, 3], b: [-2.1213, -2.1213] },
          { t: 'seg', a: [-2.1213, 2.1213], b: [0, -3] },
          { t: 'seg', a: [-3, 0], b: [2.1213, -2.1213] },
          { t: 'seg', a: [-2.1213, -2.1213], b: [3, 0] },
          { t: 'seg', a: [0, -3], b: [2.1213, 2.1213] },
          { t: 'seg', a: [2.1213, -2.1213], b: [0, 3] },
          { t: 'seg', a: [3, 0], b: [-2.1213, 2.1213] },
          { t: 'seg', a: [2.1213, 2.1213], b: [-3, 0] },
          { t: 'angle', at: [0, 3], from: [-2.1213, -2.1213], to: [2.1213, -2.1213], r: 1, label: '?' },
          { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -13 },
          { t: 'point', p: [-2.1213, 2.1213], label: 'B', dx: -9, dy: -9 },
          { t: 'point', p: [-3, 0], label: 'C', dx: -13, dy: 0 },
          { t: 'point', p: [-2.1213, -2.1213], label: 'D', dx: -9, dy: 9 },
          { t: 'point', p: [0, -3], label: 'E', dx: 0, dy: 13 },
          { t: 'point', p: [2.1213, -2.1213], label: 'F', dx: 9, dy: 9 },
          { t: 'point', p: [3, 0], label: 'G', dx: 13, dy: 0 },
          { t: 'point', p: [2.1213, 2.1213], label: 'H', dx: 9, dy: -9 },
        ],
      },
      choices: ['$90^\\circ$', '$45^\\circ$', '$22.5^\\circ$', '$135^\\circ$'],
      answer: 1,
      solution:
        'Eight evenly spaced points cut the circle into eight arcs of $\\frac{360^\\circ}{8} = 45^\\circ$. The angle at $A$ is an inscribed angle on the arc from $D$ to $F$ that does not contain $A$, and that arc covers the two gaps $DE$ and $EF$, so it measures $2 \\times 45^\\circ = 90^\\circ$ and the angle is $\\frac{90^\\circ}{2} = 45^\\circ$ ✓. Check a second, independent way through the center $O$: since $OA = OD$, triangle $AOD$ is isosceles, and its central angle $\\angle AOD$ spans three gaps, $135^\\circ$, so $\\angle OAD = \\frac{180^\\circ - 135^\\circ}{2} = 22.5^\\circ$; triangle $AOF$ gives $\\angle OAF = 22.5^\\circ$ the same way, and $O$ lies inside the star point, so $\\angle DAF = 22.5^\\circ + 22.5^\\circ = 45^\\circ$ ✓. (The choice $90^\\circ$ is REPORTING THE ARC INSTEAD OF THE ANGLE ✗; the choice $22.5^\\circ$ is HALVING TWICE ✗; the choice $135^\\circ$ is USING THE ARC ON THE WRONG SIDE OF THE CHORD ✗.)',
    },
    {
      q: 'Ten pegs $A$, $B$, $C$, $D$, $E$, $F$, $G$, $H$, $I$, $J$ are set at evenly spaced points around a round pegboard. A rubber band is stretched from each peg to the third peg counted around from it, making a ten-pointed star. How large is the angle of the star at peg $A$, that is $\\angle DAH$?',
      fig: {
        view: [-4.4, -4.4, 4.4, 4.4],
        alt: 'Ten-pointed star drawn inside a circle by joining each of ten evenly spaced points to the third point around',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0, 3], b: [-2.8532, -0.9271] },
          { t: 'seg', a: [-1.7634, 2.4271], b: [-1.7634, -2.4271] },
          { t: 'seg', a: [-2.8532, 0.9271], b: [0, -3] },
          { t: 'seg', a: [-2.8532, -0.9271], b: [1.7634, -2.4271] },
          { t: 'seg', a: [-1.7634, -2.4271], b: [2.8532, -0.9271] },
          { t: 'seg', a: [0, -3], b: [2.8532, 0.9271] },
          { t: 'seg', a: [1.7634, -2.4271], b: [1.7634, 2.4271] },
          { t: 'seg', a: [2.8532, -0.9271], b: [0, 3] },
          { t: 'seg', a: [2.8532, 0.9271], b: [-1.7634, 2.4271] },
          { t: 'seg', a: [1.7634, 2.4271], b: [-2.8532, 0.9271] },
          { t: 'angle', at: [0, 3], from: [-2.8532, -0.9271], to: [2.8532, -0.9271], r: 1, label: '?' },
          { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -13 },
          { t: 'point', p: [-1.7634, 2.4271], label: 'B', dx: -8, dy: -11 },
          { t: 'point', p: [-2.8532, 0.9271], label: 'C', dx: -12, dy: -4 },
          { t: 'point', p: [-2.8532, -0.9271], label: 'D', dx: -12, dy: 4 },
          { t: 'point', p: [-1.7634, -2.4271], label: 'E', dx: -8, dy: 11 },
          { t: 'point', p: [0, -3], label: 'F', dx: 0, dy: 13 },
          { t: 'point', p: [1.7634, -2.4271], label: 'G', dx: 8, dy: 11 },
          { t: 'point', p: [2.8532, -0.9271], label: 'H', dx: 12, dy: 4 },
          { t: 'point', p: [2.8532, 0.9271], label: 'I', dx: 12, dy: -4 },
          { t: 'point', p: [1.7634, 2.4271], label: 'J', dx: 8, dy: -11 },
        ],
      },
      choices: ['$72^\\circ$', '$144^\\circ$', '$36^\\circ$', '$108^\\circ$'],
      answer: 0,
      solution:
        'Ten evenly spaced pegs cut the circle into arcs of $\\frac{360^\\circ}{10} = 36^\\circ$. The angle at $A$ is inscribed on the arc from $D$ to $H$ that misses $A$, and that arc runs across the four gaps $DE$, $EF$, $FG$, $GH$, so it measures $4 \\times 36^\\circ = 144^\\circ$ and the angle is $\\frac{144^\\circ}{2} = 72^\\circ$ ✓. Check a second, independent way through the center $O$: $\\angle AOD$ spans three gaps, $108^\\circ$, and triangle $AOD$ is isosceles because $OA = OD$, so $\\angle OAD = \\frac{180^\\circ - 108^\\circ}{2} = 36^\\circ$; the same argument in triangle $AOH$ gives $\\angle OAH = 36^\\circ$, and since $O$ sits inside the star point, $\\angle DAH = 36^\\circ + 36^\\circ = 72^\\circ$ ✓. (The choice $144^\\circ$ is REPORTING THE ARC INSTEAD OF THE ANGLE ✗; the choice $36^\\circ$ is HALVING TWICE ✗; the choice $108^\\circ$ is USING THE ARC ON THE WRONG SIDE OF THE CHORD ✗.)',
    },
    {
      q: 'Twelve brass studs $A$, $B$, $C$, $D$, $E$, $F$, $G$, $H$, $I$, $J$, $K$, $L$ are hammered at evenly spaced points around the rim of a round table. A thin wire is run from each stud to the fifth stud counted around from it, forming a sharp twelve-pointed star. How large is the angle of the star at stud $A$, that is $\\angle FAH$?',
      fig: {
        view: [-4.4, -4.4, 4.4, 4.4],
        alt: 'Twelve-pointed star drawn inside a circle by joining each of twelve evenly spaced points to the fifth point around',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0, 3], b: [-1.5, -2.5981] },
          { t: 'seg', a: [-1.5, 2.5981], b: [0, -3] },
          { t: 'seg', a: [-2.5981, 1.5], b: [1.5, -2.5981] },
          { t: 'seg', a: [-3, 0], b: [2.5981, -1.5] },
          { t: 'seg', a: [-2.5981, -1.5], b: [3, 0] },
          { t: 'seg', a: [-1.5, -2.5981], b: [2.5981, 1.5] },
          { t: 'seg', a: [0, -3], b: [1.5, 2.5981] },
          { t: 'seg', a: [1.5, -2.5981], b: [0, 3] },
          { t: 'seg', a: [2.5981, -1.5], b: [-1.5, 2.5981] },
          { t: 'seg', a: [3, 0], b: [-2.5981, 1.5] },
          { t: 'seg', a: [2.5981, 1.5], b: [-3, 0] },
          { t: 'seg', a: [1.5, 2.5981], b: [-2.5981, -1.5] },
          { t: 'angle', at: [0, 3], from: [-1.5, -2.5981], to: [1.5, -2.5981], r: 1.1, label: '?' },
          { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -13 },
          { t: 'point', p: [-1.5, 2.5981], label: 'B', dx: -7, dy: -11 },
          { t: 'point', p: [-2.5981, 1.5], label: 'C', dx: -11, dy: -7 },
          { t: 'point', p: [-3, 0], label: 'D', dx: -13, dy: 0 },
          { t: 'point', p: [-2.5981, -1.5], label: 'E', dx: -11, dy: 7 },
          { t: 'point', p: [-1.5, -2.5981], label: 'F', dx: -7, dy: 11 },
          { t: 'point', p: [0, -3], label: 'G', dx: 0, dy: 13 },
          { t: 'point', p: [1.5, -2.5981], label: 'H', dx: 7, dy: 11 },
          { t: 'point', p: [2.5981, -1.5], label: 'I', dx: 11, dy: 7 },
          { t: 'point', p: [3, 0], label: 'J', dx: 13, dy: 0 },
          { t: 'point', p: [2.5981, 1.5], label: 'K', dx: 11, dy: -7 },
          { t: 'point', p: [1.5, 2.5981], label: 'L', dx: 7, dy: -11 },
        ],
      },
      choices: ['$60^\\circ$', '$15^\\circ$', '$30^\\circ$', '$150^\\circ$'],
      answer: 2,
      solution:
        'Twelve evenly spaced studs cut the rim into arcs of $\\frac{360^\\circ}{12} = 30^\\circ$. The angle at $A$ is inscribed on the arc from $F$ to $H$ that does not contain $A$, and that arc covers the two gaps $FG$ and $GH$, so it measures $2 \\times 30^\\circ = 60^\\circ$ and the angle is $\\frac{60^\\circ}{2} = 30^\\circ$ ✓. Check a second, independent way through the center $O$: $\\angle AOF$ spans five gaps, $150^\\circ$, and $OA = OF$ makes triangle $AOF$ isosceles, so $\\angle OAF = \\frac{180^\\circ - 150^\\circ}{2} = 15^\\circ$; triangle $AOH$ gives $\\angle OAH = 15^\\circ$ in the same way, and $O$ lies inside the star point, so $\\angle FAH = 15^\\circ + 15^\\circ = 30^\\circ$ ✓. (The choice $60^\\circ$ is REPORTING THE ARC INSTEAD OF THE ANGLE ✗; the choice $15^\\circ$ is HALVING TWICE ✗; the choice $150^\\circ$ is USING THE ARC ON THE WRONG SIDE OF THE CHORD ✗.)',
    },
  ],

  // slot 8 — two sides of a cyclic quadrilateral extended to an outside point.
  // Lane: 26 with near arc 40 -> 92 / 37 with near arc 30 -> 104 / 41 with near arc 38 -> 120.
  [
    {
      q: 'Four posts $A$, $B$, $C$, $D$ stand in that order around a circular pond and are joined by four straight fences. The fence $BA$ is extended past $A$ and the fence $CD$ is extended past $D$, and the two extensions meet at a gate $P$, where they make an angle of $26^\\circ$. Arc $AD$, the short piece of shoreline nearest the gate, measures $40^\\circ$. How large is arc $BC$?',
      fig: {
        view: [-4.3, -3.9, 8.7, 3.9],
        alt: 'Cyclic quadrilateral ABCD with sides BA and CD extended to meet at P, angle at P marked 26, near arc marked 40 and far arc marked with a question mark',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [7.2639, 0], b: [-2.084, 2.158] },
          { t: 'seg', a: [7.2639, 0], b: [-2.084, -2.158] },
          { t: 'seg', a: [-2.084, 2.158], b: [-2.084, -2.158] },
          { t: 'seg', a: [2.8191, 1.0261], b: [2.8191, -1.0261] },
          { t: 'label', p: [3.5, 0], text: '40' },
          { t: 'label', p: [-3.5, 0], text: '?' },
          { t: 'angle', at: [7.2639, 0], from: [-2.084, 2.158], to: [-2.084, -2.158], r: 1.2, label: '26' },
          { t: 'point', p: [2.8191, 1.0261], label: 'A', dx: -2, dy: -12 },
          { t: 'point', p: [-2.084, 2.158], label: 'B', dx: -11, dy: -7 },
          { t: 'point', p: [-2.084, -2.158], label: 'C', dx: -11, dy: 9 },
          { t: 'point', p: [2.8191, -1.0261], label: 'D', dx: -2, dy: 14 },
          { t: 'point', p: [7.2639, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$66^\\circ$', '$52^\\circ$', '$12^\\circ$', '$92^\\circ$'],
      answer: 3,
      solution:
        'An angle whose vertex is outside the circle is half the difference of the two arcs it catches, so $26^\\circ = \\frac{\\text{arc } BC - 40^\\circ}{2}$, which gives arc $BC = 2 \\times 26^\\circ + 40^\\circ = 92^\\circ$ ✓. Check a second, independent way with a diagonal: draw $BD$. The inscribed angle $\\angle ABD$ sits on arc $AD$, so it is $\\frac{40^\\circ}{2} = 20^\\circ$, and in triangle $PBD$ the third angle is $\\angle BDP = 180^\\circ - 26^\\circ - 20^\\circ = 134^\\circ$. Since $D$ lies between $P$ and $C$, the angle $\\angle BDC = 180^\\circ - 134^\\circ = 46^\\circ$, and that inscribed angle sits on arc $BC$, so arc $BC = 2 \\times 46^\\circ = 92^\\circ$ ✓. (The choice $66^\\circ$ is ADDING THE ANGLE TO THE NEAR ARC WITHOUT DOUBLING IT ✗; the choice $52^\\circ$ is DOUBLING THE ANGLE AND FORGETTING THE NEAR ARC ✗; the choice $12^\\circ$ is SUBTRACTING THE NEAR ARC INSTEAD OF ADDING IT ✗.)',
    },
    {
      q: 'Four markers $A$, $B$, $C$, $D$ sit in that order around a circular running track, joined by four straight ropes. Rope $BA$ is extended beyond $A$ and rope $CD$ is extended beyond $D$; the two extensions meet at a marker $P$ outside the track at an angle of $37^\\circ$. The near arc $AD$ measures $30^\\circ$. How large is arc $BC$?',
      fig: {
        view: [-4.3, -3.9, 6.7, 3.9],
        alt: 'Cyclic quadrilateral ABCD with sides BA and CD extended to meet at P, angle at P marked 37, near arc marked 30 and far arc marked with a question mark',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [5.2186, 0], b: [-1.847, 2.364] },
          { t: 'seg', a: [5.2186, 0], b: [-1.847, -2.364] },
          { t: 'seg', a: [-1.847, 2.364], b: [-1.847, -2.364] },
          { t: 'seg', a: [2.8978, 0.7765], b: [2.8978, -0.7765] },
          { t: 'label', p: [3.5, 0], text: '30' },
          { t: 'label', p: [-3.5, 0], text: '?' },
          { t: 'angle', at: [5.2186, 0], from: [-1.847, 2.364], to: [-1.847, -2.364], r: 1.2, label: '37' },
          { t: 'point', p: [2.8978, 0.7765], label: 'A', dx: -2, dy: -12 },
          { t: 'point', p: [-1.847, 2.364], label: 'B', dx: -11, dy: -7 },
          { t: 'point', p: [-1.847, -2.364], label: 'C', dx: -11, dy: 9 },
          { t: 'point', p: [2.8978, -0.7765], label: 'D', dx: -2, dy: 14 },
          { t: 'point', p: [5.2186, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$67^\\circ$', '$74^\\circ$', '$104^\\circ$', '$44^\\circ$'],
      answer: 2,
      solution:
        'A vertex outside the circle makes an angle equal to half the difference of the far arc and the near arc, so $37^\\circ = \\frac{\\text{arc } BC - 30^\\circ}{2}$ and arc $BC = 2 \\times 37^\\circ + 30^\\circ = 104^\\circ$ ✓. Check a second, independent way with a diagonal: draw $BD$, so the inscribed angle $\\angle ABD$ on arc $AD$ is $\\frac{30^\\circ}{2} = 15^\\circ$, and triangle $PBD$ then gives $\\angle BDP = 180^\\circ - 37^\\circ - 15^\\circ = 128^\\circ$. Because $D$ lies between $P$ and $C$, $\\angle BDC = 180^\\circ - 128^\\circ = 52^\\circ$, an inscribed angle on arc $BC$, so arc $BC = 2 \\times 52^\\circ = 104^\\circ$ ✓. (The choice $67^\\circ$ is ADDING THE ANGLE TO THE NEAR ARC WITHOUT DOUBLING IT ✗; the choice $74^\\circ$ is DOUBLING THE ANGLE AND FORGETTING THE NEAR ARC ✗; the choice $44^\\circ$ is SUBTRACTING THE NEAR ARC INSTEAD OF ADDING IT ✗.)',
    },
    {
      q: 'Four trees $A$, $B$, $C$, $D$ grow in that order around a round lawn, and four straight hedges join them. The hedge $BA$ is continued past $A$ and the hedge $CD$ is continued past $D$ until they meet at a bench $P$, where they form an angle of $41^\\circ$. The stretch of lawn edge nearest the bench, arc $AD$, measures $38^\\circ$. How large is arc $BC$?',
      fig: {
        view: [-4.3, -3.9, 6.9, 3.9],
        alt: 'Cyclic quadrilateral ABCD with sides BA and CD extended to meet at P, angle at P marked 41, near arc marked 38 and far arc marked with a question mark',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [5.4489, 0], b: [-1.5, 2.5981] },
          { t: 'seg', a: [5.4489, 0], b: [-1.5, -2.5981] },
          { t: 'seg', a: [-1.5, 2.5981], b: [-1.5, -2.5981] },
          { t: 'seg', a: [2.8366, 0.9767], b: [2.8366, -0.9767] },
          { t: 'label', p: [3.5, 0], text: '38' },
          { t: 'label', p: [-3.5, 0], text: '?' },
          { t: 'angle', at: [5.4489, 0], from: [-1.5, 2.5981], to: [-1.5, -2.5981], r: 1.2, label: '41' },
          { t: 'point', p: [2.8366, 0.9767], label: 'A', dx: -2, dy: -12 },
          { t: 'point', p: [-1.5, 2.5981], label: 'B', dx: -11, dy: -7 },
          { t: 'point', p: [-1.5, -2.5981], label: 'C', dx: -11, dy: 9 },
          { t: 'point', p: [2.8366, -0.9767], label: 'D', dx: -2, dy: 14 },
          { t: 'point', p: [5.4489, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$120^\\circ$', '$79^\\circ$', '$82^\\circ$', '$44^\\circ$'],
      answer: 0,
      solution:
        'The bench is outside the circle, so its angle is half the difference of the far arc and the near arc: $41^\\circ = \\frac{\\text{arc } BC - 38^\\circ}{2}$, giving arc $BC = 2 \\times 41^\\circ + 38^\\circ = 120^\\circ$ ✓. Check a second, independent way with a diagonal: draw $BD$. The inscribed angle $\\angle ABD$ rests on arc $AD$, so it is $\\frac{38^\\circ}{2} = 19^\\circ$, and triangle $PBD$ gives $\\angle BDP = 180^\\circ - 41^\\circ - 19^\\circ = 120^\\circ$. Since $D$ is between $P$ and $C$, $\\angle BDC = 180^\\circ - 120^\\circ = 60^\\circ$, an inscribed angle on arc $BC$, so arc $BC = 2 \\times 60^\\circ = 120^\\circ$ ✓. (The choice $79^\\circ$ is ADDING THE ANGLE TO THE NEAR ARC WITHOUT DOUBLING IT ✗; the choice $82^\\circ$ is DOUBLING THE ANGLE AND FORGETTING THE NEAR ARC ✗; the choice $44^\\circ$ is SUBTRACTING THE NEAR ARC INSTEAD OF ADDING IT ✗.)',
    },
  ],

  // slot 9 — tangent-chord angle with the vertex on the near arc.
  // Lane: 54 -> 126 / 66 -> 114 / 49 -> 131.
  [
    {
      q: 'A straight road runs past a circular park and just touches its edge at $A$. A footpath is cut straight across the park from $A$ to a gate $B$ on the edge, and the road and the footpath meet at an angle of $54^\\circ$. A fountain stands at $D$, a point on the shorter arc from $A$ to $B$. What is $\\angle ADB$?',
      fig: {
        view: [-4.4, -4.4, 4.4, 4.4],
        alt: 'A tangent line touching a circle at A, chord AB making an angle of 54 with the tangent, and D on the minor arc AB',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-4.2, -3], b: [4.2, -3] },
          { t: 'seg', a: [0, -3], b: [2.8532, 0.9271] },
          { t: 'seg', a: [0, -3], b: [2.4271, -1.7634] },
          { t: 'seg', a: [2.4271, -1.7634], b: [2.8532, 0.9271] },
          { t: 'angle', at: [0, -3], from: [3, -3], to: [2.8532, 0.9271], r: 0.9, label: '54' },
          { t: 'angle', at: [2.4271, -1.7634], from: [0, -3], to: [2.8532, 0.9271], r: 0.7, label: '?' },
          { t: 'point', p: [0, -3], label: 'A', dx: -8, dy: 16 },
          { t: 'point', p: [2.8532, 0.9271], label: 'B', dx: 12, dy: -5 },
          { t: 'point', p: [2.4271, -1.7634], label: 'D', dx: 12, dy: 7 },
        ],
      },
      choices: ['$54^\\circ$', '$126^\\circ$', '$108^\\circ$', '$252^\\circ$'],
      answer: 1,
      solution:
        'The angle between a tangent and a chord drawn from the point of contact is half the arc caught inside it, so the short arc $AB$ measures $2 \\times 54^\\circ = 108^\\circ$. The fountain sits on that short arc, so the inscribed angle $\\angle ADB$ looks across at the rest of the circle: $\\angle ADB = \\frac{360^\\circ - 108^\\circ}{2} = 126^\\circ$ ✓. Check a second, independent way with a cyclic quadrilateral: put a point $E$ on the long arc, where the inscribed angle on the short arc gives $\\angle AEB = \\frac{108^\\circ}{2} = 54^\\circ$. Now $AEBD$ has all four corners on the circle, and $\\angle AEB$ and $\\angle ADB$ are opposite corners, so they add to $180^\\circ$: $\\angle ADB = 180^\\circ - 54^\\circ = 126^\\circ$ ✓. (The choice $54^\\circ$ is COPYING THE ANGLE THE ROAD MAKES WITH THE PATH ✗; the choice $108^\\circ$ is REPORTING THE SHORT ARC INSTEAD OF THE ANGLE ✗; the choice $252^\\circ$ is REPORTING THE LONG ARC INSTEAD OF HALF OF IT ✗.)',
    },
    {
      q: 'A round plate rests on a table and a straight knife lies against it, touching the rim at exactly one point $A$. A thin line of icing runs straight across the plate from $A$ to a point $B$ on the rim, and the knife and the icing meet at an angle of $66^\\circ$. A crumb sits at $D$ on the shorter arc from $A$ to $B$. What is $\\angle ADB$?',
      fig: {
        view: [-4.4, -4.4, 4.4, 4.4],
        alt: 'A tangent line touching a circle at A, chord AB making an angle of 66 with the tangent, and D on the minor arc AB',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-4.2, -3], b: [4.2, -3] },
          { t: 'seg', a: [0, -3], b: [2.2294, 2.0074] },
          { t: 'seg', a: [0, -3], b: [2.7406, -1.2202] },
          { t: 'seg', a: [2.7406, -1.2202], b: [2.2294, 2.0074] },
          { t: 'angle', at: [0, -3], from: [3, -3], to: [2.2294, 2.0074], r: 0.9, label: '66' },
          { t: 'angle', at: [2.7406, -1.2202], from: [0, -3], to: [2.2294, 2.0074], r: 0.7, label: '?' },
          { t: 'point', p: [0, -3], label: 'A', dx: -8, dy: 16 },
          { t: 'point', p: [2.2294, 2.0074], label: 'B', dx: 10, dy: -9 },
          { t: 'point', p: [2.7406, -1.2202], label: 'D', dx: 12, dy: 5 },
        ],
      },
      choices: ['$66^\\circ$', '$132^\\circ$', '$228^\\circ$', '$114^\\circ$'],
      answer: 3,
      solution:
        'A tangent and a chord meeting at the point of contact make an angle equal to half the arc trapped between them, so the short arc $AB$ is $2 \\times 66^\\circ = 132^\\circ$. The crumb lies on that short arc, so the inscribed angle $\\angle ADB$ rests on everything else: $\\angle ADB = \\frac{360^\\circ - 132^\\circ}{2} = 114^\\circ$ ✓. Check a second, independent way with a cyclic quadrilateral: mark a point $E$ on the long arc, so that $\\angle AEB = \\frac{132^\\circ}{2} = 66^\\circ$. The four points $A$, $E$, $B$, $D$ lie on the rim in that order, and opposite corners of such a quadrilateral add to $180^\\circ$, so $\\angle ADB = 180^\\circ - 66^\\circ = 114^\\circ$ ✓. (The choice $66^\\circ$ is COPYING THE ANGLE THE KNIFE MAKES WITH THE ICING ✗; the choice $132^\\circ$ is REPORTING THE SHORT ARC INSTEAD OF THE ANGLE ✗; the choice $228^\\circ$ is REPORTING THE LONG ARC INSTEAD OF HALF OF IT ✗.)',
    },
    {
      q: 'A straight length of train track grazes the edge of a circular pond, touching it at a single point $A$. A rope is stretched straight across the water from $A$ to a post $B$ on the far edge, and the track and the rope meet at an angle of $49^\\circ$. A lily pad floats at $D$ on the shorter arc from $A$ to $B$. What is $\\angle ADB$?',
      fig: {
        view: [-4.4, -4.4, 4.4, 4.4],
        alt: 'A tangent line touching a circle at A, chord AB making an angle of 49 with the tangent, and D on the minor arc AB',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-4.2, -3], b: [4.2, -3] },
          { t: 'seg', a: [0, -3], b: [2.9708, 0.4175] },
          { t: 'seg', a: [0, -3], b: [2.2641, -1.9682] },
          { t: 'seg', a: [2.2641, -1.9682], b: [2.9708, 0.4175] },
          { t: 'angle', at: [0, -3], from: [3, -3], to: [2.9708, 0.4175], r: 0.9, label: '49' },
          { t: 'angle', at: [2.2641, -1.9682], from: [0, -3], to: [2.9708, 0.4175], r: 0.7, label: '?' },
          { t: 'point', p: [0, -3], label: 'A', dx: -8, dy: 16 },
          { t: 'point', p: [2.9708, 0.4175], label: 'B', dx: 13, dy: -3 },
          { t: 'point', p: [2.2641, -1.9682], label: 'D', dx: 11, dy: 9 },
        ],
      },
      choices: ['$131^\\circ$', '$49^\\circ$', '$98^\\circ$', '$262^\\circ$'],
      answer: 0,
      solution:
        'The angle a tangent makes with a chord at the point of contact is half the arc it closes off, so the short arc $AB$ measures $2 \\times 49^\\circ = 98^\\circ$. The lily pad sits on that short arc, which puts the inscribed angle $\\angle ADB$ on the whole remaining arc: $\\angle ADB = \\frac{360^\\circ - 98^\\circ}{2} = 131^\\circ$ ✓. Check a second, independent way with a cyclic quadrilateral: choose a point $E$ on the long arc, where $\\angle AEB = \\frac{98^\\circ}{2} = 49^\\circ$. Then $AEBD$ is a quadrilateral inscribed in the pond, and its opposite angles are supplementary, so $\\angle ADB = 180^\\circ - 49^\\circ = 131^\\circ$ ✓. (The choice $49^\\circ$ is COPYING THE ANGLE THE TRACK MAKES WITH THE ROPE ✗; the choice $98^\\circ$ is REPORTING THE SHORT ARC INSTEAD OF THE ANGLE ✗; the choice $262^\\circ$ is REPORTING THE LONG ARC INSTEAD OF HALF OF IT ✗.)',
    },
  ],

  // slot 10 — diameter meeting a tangent, angle in the right triangle outside.
  // Lane: 21 -> 69 / 41 -> 49 / 53 -> 37.
  [
    {
      q: 'A straight fence runs alongside a circular garden and touches its edge at $A$. The segment $AB$ is a diameter of the garden. A gate $T$ stands on the fence, and the straight sightline from $B$ to the gate crosses the garden edge again at $C$. If $\\angle ABT = 21^\\circ$, what is $\\angle ATB$?',
      fig: {
        view: [-4.8, -4.0, 4.8, 4.0],
        alt: 'Circle with diameter AB, a tangent at A meeting line BC at T outside the circle',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, -2.2], b: [-3, 3.0] },
          { t: 'seg', a: [3, 0], b: [-3, 2.3032] },
          { t: 'right', at: [-3, 0], from: [3, 0], to: [-3, 3.0], s: 0.4 },
          { t: 'angle', at: [3, 0], from: [-3, 0], to: [-3, 2.3032], r: 0.9, label: '21' },
          { t: 'angle', at: [-3, 2.3032], from: [-3, 0], to: [3, 0], r: 0.6, label: '?' },
          { t: 'point', p: [-3, 0], label: 'A', dx: -13, dy: 6 },
          { t: 'point', p: [3, 0], label: 'B', dx: 13, dy: 4 },
          { t: 'point', p: [-2.2294, 2.0074], label: 'C', dx: 4, dy: -11 },
          { t: 'point', p: [-3, 2.3032], label: 'T', dx: -13, dy: -2 },
        ],
      },
      choices: ['$21^\\circ$', '$42^\\circ$', '$159^\\circ$', '$69^\\circ$'],
      answer: 3,
      solution:
        'A tangent meets the radius at its point of contact at a right angle, and $AB$ runs along that radius, so $\\angle TAB = 90^\\circ$. The angles of triangle $ABT$ add to $180^\\circ$, leaving $\\angle ATB = 90^\\circ - 21^\\circ = 69^\\circ$ ✓. Check a second, independent way from the arcs, without using the triangle: the inscribed angle $\\angle ABC = 21^\\circ$ sits on arc $AC$, so arc $AC = 42^\\circ$, and since $AB$ is a diameter the arc from $A$ to $B$ on the other side of the tangent point measures $180^\\circ$. The gate is outside the circle, where a tangent and a secant make an angle equal to half the difference of the arcs they catch: $\\angle ATB = \\frac{180^\\circ - 42^\\circ}{2} = 69^\\circ$ ✓. (The choice $21^\\circ$ is COPYING THE ANGLE AT $B$ ✗; the choice $42^\\circ$ is REPORTING THE ARC $AC$ INSTEAD OF THE ANGLE ✗; the choice $159^\\circ$ is SUBTRACTING FROM $180^\\circ$ INSTEAD OF $90^\\circ$ ✗.)',
    },
    {
      q: 'A straight metal strip is laid so that it just touches the rim of a round tabletop at $A$, and $AB$ is a diameter of the tabletop. A pin $T$ is stuck into the strip, and the straight thread from $B$ to the pin crosses the rim again at $C$. If $\\angle ABT = 41^\\circ$, what is $\\angle ATB$?',
      fig: {
        view: [-4.8, -4.0, 4.8, 6.4],
        alt: 'Circle with diameter AB, a tangent at A meeting line BC at T outside the circle',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, -2.2], b: [-3, 5.8] },
          { t: 'seg', a: [3, 0], b: [-3, 5.2157] },
          { t: 'right', at: [-3, 0], from: [3, 0], to: [-3, 5.8], s: 0.45 },
          { t: 'angle', at: [3, 0], from: [-3, 0], to: [-3, 5.2157], r: 1.0, label: '41' },
          { t: 'angle', at: [-3, 5.2157], from: [-3, 0], to: [3, 0], r: 0.7, label: '?' },
          { t: 'point', p: [-3, 0], label: 'A', dx: -13, dy: 6 },
          { t: 'point', p: [3, 0], label: 'B', dx: 13, dy: 4 },
          { t: 'point', p: [-0.4175, 2.9708], label: 'C', dx: 6, dy: -10 },
          { t: 'point', p: [-3, 5.2157], label: 'T', dx: -13, dy: -2 },
        ],
      },
      choices: ['$41^\\circ$', '$49^\\circ$', '$82^\\circ$', '$139^\\circ$'],
      answer: 1,
      solution:
        'The strip touches the rim at $A$, so it is perpendicular to the radius there, and the diameter $AB$ lies along that radius: $\\angle TAB = 90^\\circ$. Triangle $ABT$ therefore has $\\angle ATB = 90^\\circ - 41^\\circ = 49^\\circ$ ✓. Check a second, independent way through the arcs: $\\angle ABC = 41^\\circ$ is inscribed on arc $AC$, so arc $AC = 82^\\circ$, while the diameter $AB$ splits the rim into two arcs of $180^\\circ$ each. The pin lies outside the circle, and an angle made there by a tangent and a secant is half the difference of the two arcs cut off: $\\angle ATB = \\frac{180^\\circ - 82^\\circ}{2} = 49^\\circ$ ✓. (The choice $41^\\circ$ is COPYING THE ANGLE AT $B$ ✗; the choice $82^\\circ$ is REPORTING THE ARC $AC$ INSTEAD OF THE ANGLE ✗; the choice $139^\\circ$ is SUBTRACTING FROM $180^\\circ$ INSTEAD OF $90^\\circ$ ✗.)',
    },
    {
      q: 'A straight boardwalk touches the edge of a circular ice rink at $A$, and $AB$ is a diameter of the rink. A bench $T$ sits on the boardwalk, and the straight line of sight from $B$ to the bench crosses the edge of the rink again at $C$. If $\\angle ABT = 53^\\circ$, what is $\\angle ATB$?',
      fig: {
        view: [-4.8, -4.0, 4.8, 9.2],
        alt: 'Circle with diameter AB, a tangent at A meeting line BC at T outside the circle',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, -2.2], b: [-3, 8.6] },
          { t: 'seg', a: [3, 0], b: [-3, 7.9623] },
          { t: 'right', at: [-3, 0], from: [3, 0], to: [-3, 8.6], s: 0.5 },
          { t: 'angle', at: [3, 0], from: [-3, 0], to: [-3, 7.9623], r: 1.1, label: '53' },
          { t: 'angle', at: [-3, 7.9623], from: [-3, 0], to: [3, 0], r: 0.8, label: '?' },
          { t: 'point', p: [-3, 0], label: 'A', dx: -13, dy: 6 },
          { t: 'point', p: [3, 0], label: 'B', dx: 13, dy: 4 },
          { t: 'point', p: [0.8269, 2.8838], label: 'C', dx: 9, dy: -8 },
          { t: 'point', p: [-3, 7.9623], label: 'T', dx: -13, dy: -2 },
        ],
      },
      choices: ['$53^\\circ$', '$106^\\circ$', '$37^\\circ$', '$127^\\circ$'],
      answer: 2,
      solution:
        'Where the boardwalk touches the rink it is perpendicular to the radius, and the diameter $AB$ continues that radius, so $\\angle TAB = 90^\\circ$. Triangle $ABT$ then gives $\\angle ATB = 90^\\circ - 53^\\circ = 37^\\circ$ ✓. Check a second, independent way using arcs alone: the inscribed angle $\\angle ABC = 53^\\circ$ stands on arc $AC$, so arc $AC = 106^\\circ$, and the diameter cuts the edge into two $180^\\circ$ arcs. The bench is outside the rink, where a tangent and a secant make an angle equal to half the difference of the arcs they intercept: $\\angle ATB = \\frac{180^\\circ - 106^\\circ}{2} = 37^\\circ$ ✓. (The choice $53^\\circ$ is COPYING THE ANGLE AT $B$ ✗; the choice $106^\\circ$ is REPORTING THE ARC $AC$ INSTEAD OF THE ANGLE ✗; the choice $127^\\circ$ is SUBTRACTING FROM $180^\\circ$ INSTEAD OF $90^\\circ$ ✗.)',
    },
  ],

  // slot 11 — diagonals of a cyclic quadrilateral, one arc given.
  // Lane: 94 with arc CD 40 -> 74 / 112 with arc CD 86 -> 69 / 109 with arc CD 76 -> 71.
  [
    {
      q: 'A square banner is not quite square: its four corners $A$, $B$, $C$, $D$ are pinned in that order to a circular hoop. Two strings run across the hoop as diagonals, $A$ to $C$ and $B$ to $D$, and they cross at $P$ with $\\angle APB = 94^\\circ$. The arc $CD$ measures $40^\\circ$. What is $\\angle ADB$?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        alt: 'Cyclic quadrilateral ABCD with diagonals meeting at P, the angle at P marked 94 and arc CD marked 40',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.8838, 0.8269], b: [2.8838, 0.8269] },
          { t: 'seg', a: [2.8838, 0.8269], b: [1.0261, -2.8191] },
          { t: 'seg', a: [1.0261, -2.8191], b: [-1.0261, -2.8191] },
          { t: 'seg', a: [-1.0261, -2.8191], b: [-2.8838, 0.8269] },
          { t: 'seg', a: [-2.8838, 0.8269], b: [1.0261, -2.8191] },
          { t: 'seg', a: [2.8838, 0.8269], b: [-1.0261, -2.8191] },
          { t: 'label', p: [0, -3.9], text: '40' },
          { t: 'angle', at: [0, -1.8623], from: [-2.8838, 0.8269], to: [2.8838, 0.8269], r: 0.7, label: '94' },
          { t: 'angle', at: [-1.0261, -2.8191], from: [-2.8838, 0.8269], to: [2.8838, 0.8269], r: 0.8, label: '?' },
          { t: 'point', p: [-2.8838, 0.8269], label: 'A', dx: -12, dy: -4 },
          { t: 'point', p: [2.8838, 0.8269], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [1.0261, -2.8191], label: 'C', dx: 9, dy: 11 },
          { t: 'point', p: [-1.0261, -2.8191], label: 'D', dx: -11, dy: 9 },
          { t: 'point', p: [0, -1.8623], label: 'P', dx: 13, dy: 6 },
        ],
      },
      choices: ['$148^\\circ$', '$94^\\circ$', '$74^\\circ$', '$20^\\circ$'],
      answer: 2,
      solution:
        'Two chords crossing inside a circle make an angle equal to half the sum of the two arcs they face, so arc $AB$ + arc $CD$ = $2 \\times 94^\\circ = 188^\\circ$, giving arc $AB = 188^\\circ - 40^\\circ = 148^\\circ$. The angle $\\angle ADB$ is inscribed on arc $AB$, so $\\angle ADB = \\frac{148^\\circ}{2} = 74^\\circ$ ✓. Check a second, independent way that never finds arc $AB$: in triangle $APD$ the angle $\\angle APB$ is the exterior angle at $P$, so it equals the two remote angles added, $\\angle DAC + \\angle ADB$. The first of those is inscribed on arc $CD$, so it is $\\frac{40^\\circ}{2} = 20^\\circ$, and therefore $\\angle ADB = 94^\\circ - 20^\\circ = 74^\\circ$ ✓. (The choice $148^\\circ$ is REPORTING ARC $AB$ INSTEAD OF THE INSCRIBED ANGLE ✗; the choice $94^\\circ$ is COPYING THE ANGLE AT THE CROSSING ✗; the choice $20^\\circ$ is ANSWERING WITH HALF OF ARC $CD$ ✗.)',
    },
    {
      q: 'Four flags $A$, $B$, $C$, $D$ are fixed in that order to the circular rail of a merry-go-round, and two taut wires run across as diagonals, $A$ to $C$ and $B$ to $D$. The wires cross at $P$, where $\\angle APB = 112^\\circ$, and the arc $CD$ measures $86^\\circ$. What is $\\angle ADB$?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        alt: 'Cyclic quadrilateral ABCD with diagonals meeting at P, the angle at P marked 112 and arc CD marked 86',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.8007, 1.0751], b: [2.8007, 1.0751] },
          { t: 'seg', a: [2.8007, 1.0751], b: [1.1722, -2.7615] },
          { t: 'seg', a: [1.1722, -2.7615], b: [-2.673, -1.362] },
          { t: 'seg', a: [-2.673, -1.362], b: [-2.8007, 1.0751] },
          { t: 'seg', a: [-2.8007, 1.0751], b: [1.1722, -2.7615] },
          { t: 'seg', a: [2.8007, 1.0751], b: [-2.673, -1.362] },
          { t: 'label', p: [-1.3339, -3.6648], text: '86' },
          { t: 'angle', at: [-1.0331, -0.6319], from: [-2.8007, 1.0751], to: [2.8007, 1.0751], r: 0.7, label: '112' },
          { t: 'angle', at: [-2.673, -1.362], from: [-2.8007, 1.0751], to: [2.8007, 1.0751], r: 0.8, label: '?' },
          { t: 'point', p: [-2.8007, 1.0751], label: 'A', dx: -12, dy: -5 },
          { t: 'point', p: [2.8007, 1.0751], label: 'B', dx: 12, dy: -5 },
          { t: 'point', p: [1.1722, -2.7615], label: 'C', dx: 9, dy: 11 },
          { t: 'point', p: [-2.673, -1.362], label: 'D', dx: -12, dy: 6 },
          { t: 'point', p: [-1.0331, -0.6319], label: 'P', dx: -2, dy: 15 },
        ],
      },
      choices: ['$69^\\circ$', '$138^\\circ$', '$112^\\circ$', '$43^\\circ$'],
      answer: 0,
      solution:
        'Where two chords cross inside a circle the angle is half the sum of the arcs it faces, so arc $AB$ + arc $CD$ = $2 \\times 112^\\circ = 224^\\circ$ and arc $AB = 224^\\circ - 86^\\circ = 138^\\circ$. Since $\\angle ADB$ is inscribed on arc $AB$, $\\angle ADB = \\frac{138^\\circ}{2} = 69^\\circ$ ✓. Check a second, independent way without computing arc $AB$: $\\angle APB$ is the exterior angle at $P$ of triangle $APD$, so it equals $\\angle DAC + \\angle ADB$. The angle $\\angle DAC$ is inscribed on arc $CD$ and so is $\\frac{86^\\circ}{2} = 43^\\circ$, which leaves $\\angle ADB = 112^\\circ - 43^\\circ = 69^\\circ$ ✓. (The choice $138^\\circ$ is REPORTING ARC $AB$ INSTEAD OF THE INSCRIBED ANGLE ✗; the choice $112^\\circ$ is COPYING THE ANGLE AT THE CROSSING ✗; the choice $43^\\circ$ is ANSWERING WITH HALF OF ARC $CD$ ✗.)',
    },
    {
      q: 'Four pins $A$, $B$, $C$, $D$ are pushed in that order into the rim of a round corkboard, and two threads are stretched as diagonals, $A$ to $C$ and $B$ to $D$. They cross at $P$ with $\\angle APB = 109^\\circ$, and the arc $CD$ measures $76^\\circ$. What is $\\angle ADB$?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        alt: 'Cyclic quadrilateral ABCD with diagonals meeting at P, the angle at P marked 109 and arc CD marked 76',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.8366, 0.9767], b: [2.8366, 0.9767] },
          { t: 'seg', a: [2.8366, 0.9767], b: [1.2679, -2.7189] },
          { t: 'seg', a: [1.2679, -2.7189], b: [-2.3314, -1.888] },
          { t: 'seg', a: [-2.3314, -1.888], b: [-2.8366, 0.9767] },
          { t: 'seg', a: [-2.8366, 0.9767], b: [1.2679, -2.7189] },
          { t: 'seg', a: [2.8366, 0.9767], b: [-2.3314, -1.888] },
          { t: 'label', p: [-0.8773, -3.8], text: '76' },
          { t: 'angle', at: [-0.6748, -0.9697], from: [-2.8366, 0.9767], to: [2.8366, 0.9767], r: 0.7, label: '109' },
          { t: 'angle', at: [-2.3314, -1.888], from: [-2.8366, 0.9767], to: [2.8366, 0.9767], r: 0.8, label: '?' },
          { t: 'point', p: [-2.8366, 0.9767], label: 'A', dx: -12, dy: -4 },
          { t: 'point', p: [2.8366, 0.9767], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [1.2679, -2.7189], label: 'C', dx: 9, dy: 11 },
          { t: 'point', p: [-2.3314, -1.888], label: 'D', dx: -11, dy: 8 },
          { t: 'point', p: [-0.6748, -0.9697], label: 'P', dx: -2, dy: 15 },
        ],
      },
      choices: ['$142^\\circ$', '$71^\\circ$', '$109^\\circ$', '$147^\\circ$'],
      answer: 1,
      solution:
        'The angle between two crossing chords is half the sum of the arcs it faces, so arc $AB$ + arc $CD$ = $2 \\times 109^\\circ = 218^\\circ$, which makes arc $AB = 218^\\circ - 76^\\circ = 142^\\circ$. The inscribed angle $\\angle ADB$ stands on arc $AB$, so $\\angle ADB = \\frac{142^\\circ}{2} = 71^\\circ$ ✓. Check a second, independent way straight from the triangle: $\\angle APB$ is the exterior angle of triangle $APD$ at $P$, hence $\\angle APB = \\angle DAC + \\angle ADB$, and $\\angle DAC$ is inscribed on arc $CD$, worth $\\frac{76^\\circ}{2} = 38^\\circ$. So $\\angle ADB = 109^\\circ - 38^\\circ = 71^\\circ$ ✓. (The choice $142^\\circ$ is REPORTING ARC $AB$ INSTEAD OF THE INSCRIBED ANGLE ✗; the choice $109^\\circ$ is COPYING THE ANGLE AT THE CROSSING ✗; the choice $147^\\circ$ is ADDING THE GIVEN ARC INSTEAD OF SUBTRACTING IT ✗.)',
    },
  ],

  // slot 12 — diameter extended to meet the tangent drawn at another point.
  // Lane: central angle 76 -> 14 / 64 -> 26 / 52 -> 38.
  [
    {
      q: 'A round tower has center $O$, and $A$ and $B$ are the two ends of a straight passage through the middle, so $AB$ is a diameter. A rope leaves the wall at a point $C$ and runs away tangent to the tower, meeting the line through $A$ and $B$ at a peg $P$ on the far side of $B$. If $\\angle BOC = 76^\\circ$, what is $\\angle APC$?',
      fig: {
        view: [-4.4, -4.0, 13.9, 4.0],
        alt: 'Circle with center O and diameter AB, a tangent at C meeting line AB extended at P',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [12.4007, 0] },
          { t: 'seg', a: [0, 0], b: [0.7258, 2.9109] },
          { t: 'seg', a: [0.7258, 2.9109], b: [12.4007, 0] },
          { t: 'right', at: [0.7258, 2.9109], from: [0, 0], to: [12.4007, 0], s: 0.5 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [0.7258, 2.9109], r: 1.0, label: '76' },
          { t: 'angle', at: [12.4007, 0], from: [0.7258, 2.9109], to: [-3, 0], r: 1.6, label: '?' },
          { t: 'point', p: [-3, 0], label: 'A', dx: -13, dy: 5 },
          { t: 'point', p: [0, 0], label: 'O', dx: -6, dy: 15 },
          { t: 'point', p: [3, 0], label: 'B', dx: 4, dy: 16 },
          { t: 'point', p: [0.7258, 2.9109], label: 'C', dx: 2, dy: -12 },
          { t: 'point', p: [12.4007, 0], label: 'P', dx: 13, dy: 5 },
        ],
      },
      choices: ['$14^\\circ$', '$76^\\circ$', '$38^\\circ$', '$104^\\circ$'],
      answer: 0,
      solution:
        'A tangent stands perpendicular to the radius drawn to its point of contact, so $\\angle OCP = 90^\\circ$. In triangle $OCP$ the angle at $O$ is the same $76^\\circ$ because $P$ lies on the ray $OB$, so $\\angle APC = 180^\\circ - 90^\\circ - 76^\\circ = 14^\\circ$ ✓. Check a second, independent way from the arcs: the central angle marks arc $BC = 76^\\circ$, and since $AB$ is a diameter the arc from $C$ round to $A$ on the same side is $180^\\circ - 76^\\circ = 104^\\circ$. The peg is outside the tower, where a tangent and a secant make an angle equal to half the difference of the two arcs they cut off: $\\angle APC = \\frac{104^\\circ - 76^\\circ}{2} = 14^\\circ$ ✓. (The choice $76^\\circ$ is COPYING THE CENTRAL ANGLE ✗; the choice $38^\\circ$ is HALVING THE CENTRAL ANGLE ✗; the choice $104^\\circ$ is REPORTING THE FAR ARC INSTEAD OF HALF THE DIFFERENCE ✗.)',
    },
    {
      q: 'A round mirror has center $O$ and a diameter $AB$ drawn across it. A beam of light leaves the rim at $C$ and travels away tangent to the mirror, crossing the line through $A$ and $B$ at a spot $P$ beyond $B$. If $\\angle BOC = 64^\\circ$, what is $\\angle APC$?',
      fig: {
        view: [-4.4, -4.0, 8.4, 4.0],
        alt: 'Circle with center O and diameter AB, a tangent at C meeting line AB extended at P',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [6.8435, 0] },
          { t: 'seg', a: [0, 0], b: [1.3151, 2.6964] },
          { t: 'seg', a: [1.3151, 2.6964], b: [6.8435, 0] },
          { t: 'right', at: [1.3151, 2.6964], from: [0, 0], to: [6.8435, 0], s: 0.45 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.3151, 2.6964], r: 1.0, label: '64' },
          { t: 'angle', at: [6.8435, 0], from: [1.3151, 2.6964], to: [-3, 0], r: 1.4, label: '?' },
          { t: 'point', p: [-3, 0], label: 'A', dx: -13, dy: 5 },
          { t: 'point', p: [0, 0], label: 'O', dx: -6, dy: 15 },
          { t: 'point', p: [3, 0], label: 'B', dx: 4, dy: 16 },
          { t: 'point', p: [1.3151, 2.6964], label: 'C', dx: 4, dy: -11 },
          { t: 'point', p: [6.8435, 0], label: 'P', dx: 13, dy: 5 },
        ],
      },
      choices: ['$64^\\circ$', '$32^\\circ$', '$116^\\circ$', '$26^\\circ$'],
      answer: 3,
      solution:
        'The beam touches the mirror at $C$, so it is perpendicular to the radius $OC$ and $\\angle OCP = 90^\\circ$. Because $P$ lies on the ray $OB$, the angle of triangle $OCP$ at $O$ is the given $64^\\circ$, so $\\angle APC = 180^\\circ - 90^\\circ - 64^\\circ = 26^\\circ$ ✓. Check a second, independent way with arcs: arc $BC$ equals its central angle, $64^\\circ$, and the diameter makes the arc from $C$ round to $A$ equal to $180^\\circ - 64^\\circ = 116^\\circ$. From a point outside the circle a tangent and a secant make an angle of half the difference of the arcs caught: $\\angle APC = \\frac{116^\\circ - 64^\\circ}{2} = 26^\\circ$ ✓. (The choice $64^\\circ$ is COPYING THE CENTRAL ANGLE ✗; the choice $32^\\circ$ is HALVING THE CENTRAL ANGLE ✗; the choice $116^\\circ$ is REPORTING THE FAR ARC INSTEAD OF HALF THE DIFFERENCE ✗.)',
    },
    {
      q: 'A traffic circle has center $O$, and $AB$ is a diameter marked across it. A straight path leaves the edge at $C$ tangent to the circle and meets the line through $A$ and $B$ at a lamppost $P$ past $B$. If $\\angle BOC = 52^\\circ$, what is $\\angle APC$?',
      fig: {
        view: [-4.4, -4.0, 6.4, 4.0],
        alt: 'Circle with center O and diameter AB, a tangent at C meeting line AB extended at P',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [4.8728, 0] },
          { t: 'seg', a: [0, 0], b: [1.847, 2.364] },
          { t: 'seg', a: [1.847, 2.364], b: [4.8728, 0] },
          { t: 'right', at: [1.847, 2.364], from: [0, 0], to: [4.8728, 0], s: 0.4 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.847, 2.364], r: 1.0, label: '52' },
          { t: 'angle', at: [4.8728, 0], from: [1.847, 2.364], to: [-3, 0], r: 1.2, label: '?' },
          { t: 'point', p: [-3, 0], label: 'A', dx: -13, dy: 5 },
          { t: 'point', p: [0, 0], label: 'O', dx: -6, dy: 15 },
          { t: 'point', p: [3, 0], label: 'B', dx: 2, dy: 16 },
          { t: 'point', p: [1.847, 2.364], label: 'C', dx: 6, dy: -10 },
          { t: 'point', p: [4.8728, 0], label: 'P', dx: 13, dy: 5 },
        ],
      },
      choices: ['$52^\\circ$', '$26^\\circ$', '$38^\\circ$', '$128^\\circ$'],
      answer: 2,
      solution:
        'The path touches the circle at $C$, so it meets the radius $OC$ at a right angle: $\\angle OCP = 90^\\circ$. The lamppost lies on the ray $OB$, so the angle of triangle $OCP$ at $O$ is the given $52^\\circ$, and $\\angle APC = 180^\\circ - 90^\\circ - 52^\\circ = 38^\\circ$ ✓. Check a second, independent way from the arcs: the central angle gives arc $BC = 52^\\circ$, and because $AB$ is a diameter the arc from $C$ round to $A$ measures $180^\\circ - 52^\\circ = 128^\\circ$. A tangent and a secant meeting outside the circle make an angle equal to half the difference of the arcs they intercept: $\\angle APC = \\frac{128^\\circ - 52^\\circ}{2} = 38^\\circ$ ✓. (The choice $52^\\circ$ is COPYING THE CENTRAL ANGLE ✗; the choice $26^\\circ$ is HALVING THE CENTRAL ANGLE ✗; the choice $128^\\circ$ is REPORTING THE FAR ARC INSTEAD OF HALF THE DIFFERENCE ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 12,
  challenge,
}
