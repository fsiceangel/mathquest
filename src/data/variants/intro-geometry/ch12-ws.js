// Introduction to Geometry chapter 12 — variations for the printable worksheet.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key anywhere in
//    this file. Answers copy the base worksheet's formatting: a named angle
//    like '$\angle ACB = 48^\circ$', a bare length '$PT = 24$', a bare degree
//    measure '$59^\circ$' for the tangent-chord slot, and one string listing
//    every requested value in the multi-part slots 7, 8, and 10.
//  - Every answer was worked twice by two genuinely different routes, and the
//    routes had to agree before the key was written: half the arc vs. the
//    opposite angles of an inscribed quadrilateral (slot 1); the right angle
//    in a semicircle vs. the arcs the two acute angles stand on (slot 2);
//    half the sum of the facing arcs vs. the exterior angle of the triangle
//    cut off by a chord (slot 3); half the difference vs. the exterior angle
//    at the near point of a secant (slot 4); the Pythagorean theorem vs. the
//    difference of squares factored (slot 5); half the intercepted arc vs.
//    the isosceles triangle on two radii plus the right angle at the point of
//    tangency (slot 6); half the sum of two arcs at every vertex vs. two
//    vertices plus supplementary opposite angles (slot 7); the right angles
//    at the two points of tangency vs. the outside-angle rule with the two
//    arcs summing to a full circle (slot 8); the vertical pair plus a
//    supplement vs. the exterior angle theorem (slot 9); the arc rules vs.
//    the right angle in a semicircle and the triangle angle sum (slot 10).
//  - Figures are coordinate-exact and were verified numerically, never
//    eyeballed. Every labeled point on a circle of radius 3 sits at
//    (3 cos t, 3 sin t) to four decimals; every crossing point P was solved
//    for algebraically and then its angle remeasured with atan2; every
//    tangent was checked by dotting the radius against the tangent segment
//    (all residuals below 0.0005 on lengths near 5, so under 0.01 degrees).
//    The tangent-length figures in slot 5 are drawn to true scale: the drawn
//    radius, drawn OP, and drawn PT are the real 7-25-24, 16-34-30, and
//    12-37-35 triples multiplied by a single factor per lane.
//  - Figure labels are plain text: bare numerals with a degree sign, and the
//    letters of points.
//  - Pin deviations: none — all thirty lanes use their pinned values.

const worksheet = [
  // slot 1 — inscribed angle from its intercepted arc (figure).
  //          Lanes: arc 96° -> 48°; arc 150° -> 75°; arc 122° -> 61°.
  [
    {
      q: 'Three small lights $A$, $B$, and $C$ are fixed on the rim of a round window. The arc $AB$ that does not contain $C$ measures $96^\\circ$. Find $\\angle ACB$.',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0, -3], b: [-2.2294, 2.0074] },
          { t: 'seg', a: [0, -3], b: [2.2294, 2.0074] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 42, to: 138 },
          { t: 'label', p: [0, 3.8], text: '96°' },
          { t: 'angle', at: [0, -3], from: [-2.2294, 2.0074], to: [2.2294, 2.0074], r: 0.6, label: '?' },
          { t: 'point', p: [-2.2294, 2.0074], label: 'A', dx: -9, dy: -9 },
          { t: 'point', p: [2.2294, 2.0074], label: 'B', dx: 9, dy: -9 },
          { t: 'point', p: [0, -3], label: 'C', dx: 0, dy: 13 },
        ],
      },
      answer: '$\\angle ACB = 48^\\circ$',
      solution:
        'The vertex $C$ lies on the circle and both sides are chords, so $\\angle ACB$ is an inscribed angle standing on arc $AB$, and it is half of that arc: $\\angle ACB = \\frac{96^\\circ}{2} = 48^\\circ$ ✓. Second route around the far side: mark a point $D$ on the minor arc $AB$, so that $A$, $D$, $B$, $C$ sit around the rim in that order. The angle at $D$ looks across at the major arc, worth $360^\\circ - 96^\\circ = 264^\\circ$, so $\\angle ADB = 132^\\circ$; opposite angles of a quadrilateral inscribed in a circle add to $180^\\circ$, giving $\\angle ACB = 180^\\circ - 132^\\circ = 48^\\circ$ ✓.',
    },
    {
      q: 'Pegs $A$, $B$, and $C$ are driven into the edge of a circular trampoline. The arc from $A$ to $B$ that stays clear of $C$ measures $150^\\circ$. Find $\\angle ACB$.',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.0261, -2.8191], b: [-2.8978, 0.7765] },
          { t: 'seg', a: [-1.0261, -2.8191], b: [2.8978, 0.7765] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 15, to: 165 },
          { t: 'label', p: [0, 3.8], text: '150°' },
          { t: 'angle', at: [-1.0261, -2.8191], from: [-2.8978, 0.7765], to: [2.8978, 0.7765], r: 0.6, label: '?' },
          { t: 'point', p: [-2.8978, 0.7765], label: 'A', dx: -13, dy: -3 },
          { t: 'point', p: [2.8978, 0.7765], label: 'B', dx: 13, dy: -3 },
          { t: 'point', p: [-1.0261, -2.8191], label: 'C', dx: -4, dy: 13 },
        ],
      },
      answer: '$\\angle ACB = 75^\\circ$',
      solution:
        'An inscribed angle is half the arc it intercepts, and the arc $AB$ clear of $C$ is exactly what $\\angle ACB$ opens onto: $\\angle ACB = \\frac{150^\\circ}{2} = 75^\\circ$ ✓. Second route around the far side: the remaining rim is $360^\\circ - 150^\\circ = 210^\\circ$. A peg $D$ on the short arc $AB$ gives $\\angle ADB = \\frac{210^\\circ}{2} = 105^\\circ$, and since $ADBC$ is inscribed in the trampoline, $\\angle ACB = 180^\\circ - 105^\\circ = 75^\\circ$ ✓.',
    },
    {
      q: 'Three posts $A$, $B$, and $C$ stand on the bank of a circular pond, and the arc $AB$ on the side away from $C$ measures $122^\\circ$. Find $\\angle ACB$.',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0.7765, -2.8978], b: [-2.6239, 1.4544] },
          { t: 'seg', a: [0.7765, -2.8978], b: [2.6239, 1.4544] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 29, to: 151 },
          { t: 'label', p: [0, 3.8], text: '122°' },
          { t: 'angle', at: [0.7765, -2.8978], from: [-2.6239, 1.4544], to: [2.6239, 1.4544], r: 0.6, label: '?' },
          { t: 'point', p: [-2.6239, 1.4544], label: 'A', dx: -11, dy: -7 },
          { t: 'point', p: [2.6239, 1.4544], label: 'B', dx: 11, dy: -7 },
          { t: 'point', p: [0.7765, -2.8978], label: 'C', dx: 3, dy: 13 },
        ],
      },
      answer: '$\\angle ACB = 61^\\circ$',
      solution:
        'The angle at post $C$ is inscribed in the pond and stands on the far arc $AB$, so it is half of it: $\\angle ACB = \\frac{122^\\circ}{2} = 61^\\circ$ ✓. Second route around the far side: the arc containing $C$ measures $360^\\circ - 122^\\circ = 238^\\circ$, so a post $D$ on the near arc would see $\\angle ADB = \\frac{238^\\circ}{2} = 119^\\circ$. Opposite angles of the inscribed quadrilateral $ADBC$ are supplementary, so $\\angle ACB = 180^\\circ - 119^\\circ = 61^\\circ$ ✓.',
    },
  ],

  // slot 2 — diameter AB, one acute angle given, find the other (they sum to
  //          90°). Lanes: 13° -> 77°; 52° -> 38°; 47° -> 43°.
  [
    {
      q: 'A straight footbridge $AB$ crosses a circular pond through its center, and a heron stands at a point $C$ on the rim. If $\\angle CAB = 13^\\circ$, find $\\angle CBA$.',
      fig: {
        view: [-4.5, -4.2, 4.5, 4.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 0], b: [2.6964, 1.3151] },
          { t: 'seg', a: [3, 0], b: [2.6964, 1.3151] },
          { t: 'right', at: [2.6964, 1.3151], from: [-3, 0], to: [3, 0] },
          { t: 'angle', at: [-3, 0], from: [2.6964, 1.3151], to: [3, 0], r: 1, label: '13' },
          { t: 'angle', at: [3, 0], from: [2.6964, 1.3151], to: [-3, 0], r: 0.6, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3, 0], label: 'A', dx: -13, dy: 0 },
          { t: 'point', p: [3, 0], label: 'B', dx: 13, dy: 0 },
          { t: 'point', p: [2.6964, 1.3151], label: 'C', dx: 11, dy: -7 },
        ],
      },
      answer: '$\\angle CBA = 77^\\circ$',
      solution:
        'The bridge runs through the center, so $AB$ is a diameter and $\\angle ACB$ is an angle in a semicircle: $\\angle ACB = 90^\\circ$. The angles of triangle $ABC$ total $180^\\circ$, so $\\angle CBA = 180^\\circ - 90^\\circ - 13^\\circ = 77^\\circ$ ✓. Second route through arcs alone: $\\angle CAB$ is inscribed on arc $BC$, so that arc is $2 \\cdot 13^\\circ = 26^\\circ$; the heron is on a semicircle of $180^\\circ$, leaving arc $AC = 180^\\circ - 26^\\circ = 154^\\circ$, and $\\angle CBA$ is inscribed on arc $AC$: $\\frac{154^\\circ}{2} = 77^\\circ$ ✓.',
    },
    {
      q: 'A support strut $AB$ runs straight through the hub of a circular Ferris wheel, and a car sits at point $C$ on the wheel. If $\\angle CAB = 52^\\circ$, find $\\angle CBA$.',
      fig: {
        view: [-4.5, -4.2, 4.5, 4.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 0], b: [-0.7258, 2.9109] },
          { t: 'seg', a: [3, 0], b: [-0.7258, 2.9109] },
          { t: 'right', at: [-0.7258, 2.9109], from: [-3, 0], to: [3, 0] },
          { t: 'angle', at: [-3, 0], from: [-0.7258, 2.9109], to: [3, 0], r: 0.9, label: '52' },
          { t: 'angle', at: [3, 0], from: [-0.7258, 2.9109], to: [-3, 0], r: 0.7, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3, 0], label: 'A', dx: -13, dy: 0 },
          { t: 'point', p: [3, 0], label: 'B', dx: 13, dy: 0 },
          { t: 'point', p: [-0.7258, 2.9109], label: 'C', dx: -4, dy: -12 },
        ],
      },
      answer: '$\\angle CBA = 38^\\circ$',
      solution:
        'The strut passes through the hub, so $AB$ is a diameter and the car sees it at a right angle: $\\angle ACB = 90^\\circ$. Then the triangle sum gives $\\angle CBA = 180^\\circ - 90^\\circ - 52^\\circ = 38^\\circ$ ✓. Second route through arcs alone: $\\angle CAB$ stands on arc $BC$, so arc $BC = 104^\\circ$, and the upper half of the wheel is $180^\\circ$, leaving arc $AC = 76^\\circ$; $\\angle CBA$ stands on that arc and measures $\\frac{76^\\circ}{2} = 38^\\circ$ ✓.',
    },
    {
      q: 'A circular running track has a straight path $AB$ laid across it through the center, and a bench sits at a point $C$ on the track. If $\\angle CAB = 47^\\circ$, find $\\angle CBA$.',
      fig: {
        view: [-4.5, -4.2, 4.5, 4.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 0], b: [-0.2093, 2.9927] },
          { t: 'seg', a: [3, 0], b: [-0.2093, 2.9927] },
          { t: 'right', at: [-0.2093, 2.9927], from: [-3, 0], to: [3, 0] },
          { t: 'angle', at: [-3, 0], from: [-0.2093, 2.9927], to: [3, 0], r: 0.9, label: '47' },
          { t: 'angle', at: [3, 0], from: [-0.2093, 2.9927], to: [-3, 0], r: 0.8, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3, 0], label: 'A', dx: -13, dy: 0 },
          { t: 'point', p: [3, 0], label: 'B', dx: 13, dy: 0 },
          { t: 'point', p: [-0.2093, 2.9927], label: 'C', dx: 0, dy: -13 },
        ],
      },
      answer: '$\\angle CBA = 43^\\circ$',
      solution:
        'Because the path goes through the center, $AB$ is a diameter, so the bench sees it at $\\angle ACB = 90^\\circ$. The angles of triangle $ABC$ add to $180^\\circ$, leaving $\\angle CBA = 180^\\circ - 90^\\circ - 47^\\circ = 43^\\circ$ ✓. Second route through arcs alone: arc $BC = 2 \\cdot 47^\\circ = 94^\\circ$, so the rest of that half-track is arc $AC = 180^\\circ - 94^\\circ = 86^\\circ$, and $\\angle CBA = \\frac{86^\\circ}{2} = 43^\\circ$ ✓.',
    },
  ],

  // slot 3 — chords AC and BD cross at P; angle is half the sum of the two
  //          facing arcs. Lanes: 96° and 54° -> 75°; 70° and 32° -> 51°;
  //          104° and 58° -> 81°.
  [
    {
      q: 'Two straight paths cut across a circular park: one runs from gate $A$ to gate $C$, the other from gate $B$ to gate $D$, and they cross at a fountain $P$. If $\\overset{\\frown}{AB} = 96^\\circ$ and $\\overset{\\frown}{CD} = 54^\\circ$, find $\\angle APB$.',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.2294, 2.0074], b: [1.362, -2.673] },
          { t: 'seg', a: [2.2294, 2.0074], b: [-1.362, -2.673] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 42, to: 138 },
          { t: 'label', p: [0, 3.8], text: '96°' },
          { t: 'arc', c: [0, 0], r: 3.2, from: 243, to: 297 },
          { t: 'label', p: [0, -3.8], text: '54°' },
          { t: 'angle', at: [0, -0.8984], from: [-2.2294, 2.0074], to: [2.2294, 2.0074], r: 0.5, label: '?' },
          { t: 'point', p: [-2.2294, 2.0074], label: 'A', dx: -9, dy: -9 },
          { t: 'point', p: [2.2294, 2.0074], label: 'B', dx: 9, dy: -9 },
          { t: 'point', p: [1.362, -2.673], label: 'C', dx: 6, dy: 12 },
          { t: 'point', p: [-1.362, -2.673], label: 'D', dx: -6, dy: 12 },
          { t: 'point', p: [0, -0.8984], label: 'P', dx: -12, dy: 4 },
        ],
      },
      answer: '$\\angle APB = 75^\\circ$',
      solution:
        'The fountain is inside the park, so the angle is half the SUM of the two arcs facing it — its own arc $AB$ and its vertical angle’s arc $CD$: $\\angle APB = \\frac{96^\\circ + 54^\\circ}{2} = \\frac{150^\\circ}{2} = 75^\\circ$ ✓. Second route by building a triangle: join $B$ to $C$ and look at triangle $PBC$. Since $A$, $P$, $C$ are in a line, $\\angle APB$ is an exterior angle of that triangle, so it equals the two remote angles added: $\\angle ACB + \\angle DBC = \\frac{96^\\circ}{2} + \\frac{54^\\circ}{2} = 48^\\circ + 27^\\circ = 75^\\circ$ ✓.',
    },
    {
      q: 'Two ribbons are stretched across a round drumhead, the first from $A$ to $C$ and the second from $B$ to $D$, meeting at the point $P$. Given $\\overset{\\frown}{AB} = 70^\\circ$ and $\\overset{\\frown}{CD} = 32^\\circ$, find $\\angle APB$.',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.7207, 2.4575], b: [0.8269, -2.8838] },
          { t: 'seg', a: [1.7207, 2.4575], b: [-0.8269, -2.8838] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 55, to: 125 },
          { t: 'label', p: [0, 3.8], text: '70°' },
          { t: 'arc', c: [0, 0], r: 3.2, from: 254, to: 286 },
          { t: 'label', p: [0, -3.8], text: '32°' },
          { t: 'angle', at: [0, -1.1503], from: [-1.7207, 2.4575], to: [1.7207, 2.4575], r: 0.5, label: '?' },
          { t: 'point', p: [-1.7207, 2.4575], label: 'A', dx: -7, dy: -11 },
          { t: 'point', p: [1.7207, 2.4575], label: 'B', dx: 7, dy: -11 },
          { t: 'point', p: [0.8269, -2.8838], label: 'C', dx: 4, dy: 12 },
          { t: 'point', p: [-0.8269, -2.8838], label: 'D', dx: -4, dy: 12 },
          { t: 'point', p: [0, -1.1503], label: 'P', dx: -12, dy: 4 },
        ],
      },
      answer: '$\\angle APB = 51^\\circ$',
      solution:
        'The crossing point is inside the drumhead, so the angle averages the two arcs it faces: $\\angle APB = \\frac{70^\\circ + 32^\\circ}{2} = \\frac{102^\\circ}{2} = 51^\\circ$ ✓. Second route by building a triangle: draw chord $BC$. In triangle $PBC$, the angle $\\angle APB$ sits outside at $P$ along the straight ribbon $AC$, so it equals the sum of the two remote angles $\\angle ACB = \\frac{70^\\circ}{2} = 35^\\circ$ and $\\angle DBC = \\frac{32^\\circ}{2} = 16^\\circ$, giving $35^\\circ + 16^\\circ = 51^\\circ$ ✓.',
    },
    {
      q: 'Inside a circular arena, a wire runs from post $A$ to post $C$ and another from post $B$ to post $D$; they cross at $P$. If $\\overset{\\frown}{AB} = 104^\\circ$ and $\\overset{\\frown}{CD} = 58^\\circ$, find $\\angle APB$.',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.364, 1.847], b: [1.4544, -2.6239] },
          { t: 'seg', a: [2.364, 1.847], b: [-1.4544, -2.6239] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 38, to: 142 },
          { t: 'label', p: [0, 3.8], text: '104°' },
          { t: 'arc', c: [0, 0], r: 3.2, from: 241, to: 299 },
          { t: 'label', p: [0, -3.8], text: '58°' },
          { t: 'angle', at: [0, -0.921], from: [-2.364, 1.847], to: [2.364, 1.847], r: 0.5, label: '?' },
          { t: 'point', p: [-2.364, 1.847], label: 'A', dx: -10, dy: -8 },
          { t: 'point', p: [2.364, 1.847], label: 'B', dx: 10, dy: -8 },
          { t: 'point', p: [1.4544, -2.6239], label: 'C', dx: 6, dy: 12 },
          { t: 'point', p: [-1.4544, -2.6239], label: 'D', dx: -6, dy: 12 },
          { t: 'point', p: [0, -0.921], label: 'P', dx: -12, dy: 4 },
        ],
      },
      answer: '$\\angle APB = 81^\\circ$',
      solution:
        'With the vertex inside the arena the rule is half the sum of the facing arcs: $\\angle APB = \\frac{104^\\circ + 58^\\circ}{2} = \\frac{162^\\circ}{2} = 81^\\circ$ ✓. Second route by building a triangle: join $B$ to $C$. Because $A$, $P$, $C$ lie on one wire, $\\angle APB$ is the exterior angle of triangle $PBC$ at $P$, equal to $\\angle ACB + \\angle DBC = \\frac{104^\\circ}{2} + \\frac{58^\\circ}{2} = 52^\\circ + 29^\\circ = 81^\\circ$ ✓.',
    },
  ],

  // slot 4 — two secants from an outside point; angle is half the difference
  //          of the far and near arcs. Lanes: 44° and 146° -> 51°;
  //          60° and 138° -> 39°; 58° and 164° -> 53°.
  [
    {
      q: 'From a point $P$ outside a circular fountain, two straight sight lines are drawn across it: the first meets the rim at $A$ and then $B$, the second at $C$ and then $D$. The near arc $\\overset{\\frown}{AC}$ measures $44^\\circ$ and the far arc $\\overset{\\frown}{BD}$ measures $146^\\circ$. Find $\\angle P$.',
      fig: {
        view: [-4.8, -4.7, 6.4, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [5.1377, 0], b: [-0.8771, 2.8689] },
          { t: 'seg', a: [5.1377, 0], b: [-0.8771, -2.8689] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -22, to: 22 },
          { t: 'label', p: [3.5, 0], text: '44°', dx: 2, dy: 13 },
          { t: 'arc', c: [0, 0], r: 3.2, from: 107, to: 253 },
          { t: 'label', p: [-3.8, 0], text: '146°' },
          { t: 'angle', at: [5.1377, 0], from: [-0.8771, 2.8689], to: [-0.8771, -2.8689], r: 1.1, label: '?' },
          { t: 'point', p: [2.7816, 1.1238], label: 'A', dx: 9, dy: -9 },
          { t: 'point', p: [-0.8771, 2.8689], label: 'B', dx: -5, dy: -12 },
          { t: 'point', p: [2.7816, -1.1238], label: 'C', dx: 9, dy: 9 },
          { t: 'point', p: [-0.8771, -2.8689], label: 'D', dx: -5, dy: 12 },
          { t: 'point', p: [5.1377, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      answer: '$\\angle P = 51^\\circ$',
      solution:
        'The vertex stands outside the fountain, so the angle is half the DIFFERENCE of the far and near arcs: $\\angle P = \\frac{146^\\circ - 44^\\circ}{2} = \\frac{102^\\circ}{2} = 51^\\circ$ ✓. Second route by building a triangle: draw chord $AD$ and look at triangle $APD$. At $A$ the angle $\\angle DAB$ is inscribed on the far arc $BD$, so it measures $73^\\circ$, and it is the exterior angle of the triangle at $A$; the remote angle $\\angle ADC$ is inscribed on the near arc $AC$ and measures $22^\\circ$. So $73^\\circ = \\angle P + 22^\\circ$, giving $\\angle P = 51^\\circ$ ✓.',
    },
    {
      q: 'A searchlight at $P$ outside a circular garden sweeps two straight beams through it. One beam crosses the hedge at $A$ then $B$, the other at $C$ then $D$. The near arc $\\overset{\\frown}{AC}$ is $60^\\circ$ and the far arc $\\overset{\\frown}{BD}$ is $138^\\circ$. Find $\\angle P$.',
      fig: {
        view: [-4.8, -4.7, 8.2, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [6.8341, 0], b: [-1.0751, 2.8007] },
          { t: 'seg', a: [6.8341, 0], b: [-1.0751, -2.8007] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -30, to: 30 },
          { t: 'label', p: [3.5, 0], text: '60°', dx: 2, dy: 13 },
          { t: 'arc', c: [0, 0], r: 3.2, from: 111, to: 249 },
          { t: 'label', p: [-3.8, 0], text: '138°' },
          { t: 'angle', at: [6.8341, 0], from: [-1.0751, 2.8007], to: [-1.0751, -2.8007], r: 1.3, label: '?' },
          { t: 'point', p: [2.5981, 1.5], label: 'A', dx: 9, dy: -9 },
          { t: 'point', p: [-1.0751, 2.8007], label: 'B', dx: -5, dy: -12 },
          { t: 'point', p: [2.5981, -1.5], label: 'C', dx: 9, dy: 9 },
          { t: 'point', p: [-1.0751, -2.8007], label: 'D', dx: -5, dy: 12 },
          { t: 'point', p: [6.8341, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      answer: '$\\angle P = 39^\\circ$',
      solution:
        'From outside, subtract the arcs and halve: $\\angle P = \\frac{138^\\circ - 60^\\circ}{2} = \\frac{78^\\circ}{2} = 39^\\circ$ ✓. Second route by building a triangle: join $A$ to $D$. In triangle $APD$ the exterior angle at $A$ is $\\angle DAB$, inscribed on the far arc $BD$ and therefore $\\frac{138^\\circ}{2} = 69^\\circ$; the remote interior angle $\\angle ADC$ is inscribed on the near arc $AC$ and equals $\\frac{60^\\circ}{2} = 30^\\circ$. Then $\\angle P = 69^\\circ - 30^\\circ = 39^\\circ$ ✓.',
    },
    {
      q: 'Two straight zip lines are anchored at a tower $P$ standing outside a circular lake; each one passes over the lake. The first crosses the shore at $A$ and then $B$, the second at $C$ and then $D$. If the near arc $\\overset{\\frown}{AC} = 58^\\circ$ and the far arc $\\overset{\\frown}{BD} = 164^\\circ$, find $\\angle P$.',
      fig: {
        view: [-4.8, -4.7, 6.9, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [5.5409, 0], b: [-0.4175, 2.9708] },
          { t: 'seg', a: [5.5409, 0], b: [-0.4175, -2.9708] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -29, to: 29 },
          { t: 'label', p: [3.5, 0], text: '58°', dx: 2, dy: 13 },
          { t: 'arc', c: [0, 0], r: 3.2, from: 98, to: 262 },
          { t: 'label', p: [-3.8, 0], text: '164°' },
          { t: 'angle', at: [5.5409, 0], from: [-0.4175, 2.9708], to: [-0.4175, -2.9708], r: 1.2, label: '?' },
          { t: 'point', p: [2.6239, 1.4544], label: 'A', dx: 9, dy: -9 },
          { t: 'point', p: [-0.4175, 2.9708], label: 'B', dx: -3, dy: -12 },
          { t: 'point', p: [2.6239, -1.4544], label: 'C', dx: 9, dy: 9 },
          { t: 'point', p: [-0.4175, -2.9708], label: 'D', dx: -3, dy: 12 },
          { t: 'point', p: [5.5409, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      answer: '$\\angle P = 53^\\circ$',
      solution:
        'The tower is outside the lake, so the angle is half the difference of the two arcs: $\\angle P = \\frac{164^\\circ - 58^\\circ}{2} = \\frac{106^\\circ}{2} = 53^\\circ$ ✓. Second route by building a triangle: draw chord $AD$. The exterior angle of triangle $APD$ at $A$ is $\\angle DAB$, inscribed on the far arc $BD$: $\\frac{164^\\circ}{2} = 82^\\circ$. Its remote interior partners are $\\angle P$ and $\\angle ADC = \\frac{58^\\circ}{2} = 29^\\circ$, so $\\angle P = 82^\\circ - 29^\\circ = 53^\\circ$ ✓.',
    },
  ],

  // slot 5 — tangent length from an outside point: PT = sqrt(OP^2 - r^2).
  //          Lanes: r = 7, OP = 25 -> 24; r = 16, OP = 34 -> 30;
  //          r = 12, OP = 37 -> 35. Figures are drawn to true scale.
  [
    {
      q: 'A circular pen has center $O$ and radius $7$. A rope is pulled tight from a post at $P$ so that it just grazes the pen at the single point $T$. If $OP = 25$, how long is the rope $PT$?',
      fig: {
        view: [-2.2, -2.4, 7.2, 2.6],
        elems: [
          { t: 'circle', c: [0, 0], r: 1.68 },
          { t: 'seg', a: [0, 0], b: [0.4704, 1.6128] },
          { t: 'seg', a: [0.4704, 1.6128], b: [6, 0] },
          { t: 'seg', a: [0, 0], b: [6, 0], dash: true },
          { t: 'right', at: [0.4704, 1.6128], from: [0, 0], to: [6, 0] },
          { t: 'label', p: [0.2352, 0.8064], text: '7', dx: -11, dy: 0 },
          { t: 'label', p: [3, 0], text: '25', dx: 0, dy: 14 },
          { t: 'label', p: [3.2352, 0.8064], text: '?', dx: 6, dy: -8 },
          { t: 'point', p: [0, 0], label: 'O', dx: -9, dy: 11 },
          { t: 'point', p: [0.4704, 1.6128], label: 'T', dx: -4, dy: -11 },
          { t: 'point', p: [6, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      answer: '$PT = 24$',
      solution:
        'A tangent meets the radius drawn to the point of contact at a right angle, so triangle $OTP$ has its right angle at $T$, with legs $OT = 7$ and $PT$ and hypotenuse $OP = 25$. Then $PT = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$ ✓. Second route by factoring the difference of squares: $25^2 - 7^2 = (25 - 7)(25 + 7) = 18 \\cdot 32 = 576$, and $\\sqrt{576} = 24$ ✓ — the sides $7$, $24$, $25$ make a right triangle exactly as they should.',
    },
    {
      q: 'A guy wire runs from an anchor at $P$ to the point $T$ where it just touches a circular water tank of radius $16$ with center $O$. Given $OP = 34$, find the length $PT$.',
      fig: {
        view: [-3.4, -3.5, 7.3, 3.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 2.8235 },
          { t: 'seg', a: [0, 0], b: [1.3287, 2.4913] },
          { t: 'seg', a: [1.3287, 2.4913], b: [6, 0] },
          { t: 'seg', a: [0, 0], b: [6, 0], dash: true },
          { t: 'right', at: [1.3287, 2.4913], from: [0, 0], to: [6, 0] },
          { t: 'label', p: [0.6644, 1.2457], text: '16', dx: -12, dy: -2 },
          { t: 'label', p: [3, 0], text: '34', dx: 0, dy: 14 },
          { t: 'label', p: [3.6644, 1.2457], text: '?', dx: 8, dy: -6 },
          { t: 'point', p: [0, 0], label: 'O', dx: -9, dy: 11 },
          { t: 'point', p: [1.3287, 2.4913], label: 'T', dx: -4, dy: -11 },
          { t: 'point', p: [6, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      answer: '$PT = 30$',
      solution:
        'The radius $OT$ is perpendicular to the tangent wire at the point of contact, so triangle $OTP$ is right-angled at $T$ and the Pythagorean theorem gives $PT = \\sqrt{34^2 - 16^2} = \\sqrt{1156 - 256} = \\sqrt{900} = 30$ ✓. Second route by factoring the difference of squares: $34^2 - 16^2 = (34 - 16)(34 + 16) = 18 \\cdot 50 = 900$, so $PT = 30$ ✓ — and $16$, $30$, $34$ is just $8$, $15$, $17$ doubled.',
    },
    {
      q: 'From a lookout at $P$, a straight cable is stretched so that it touches a circular pond of radius $12$ at exactly one point $T$. The pond’s center $O$ is $37$ from the lookout. Find $PT$.',
      fig: {
        view: [-2.5, -2.7, 7.3, 2.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1.9459 },
          { t: 'seg', a: [0, 0], b: [0.6311, 1.8408] },
          { t: 'seg', a: [0.6311, 1.8408], b: [6, 0] },
          { t: 'seg', a: [0, 0], b: [6, 0], dash: true },
          { t: 'right', at: [0.6311, 1.8408], from: [0, 0], to: [6, 0] },
          { t: 'label', p: [0.3156, 0.9204], text: '12', dx: -12, dy: -1 },
          { t: 'label', p: [3, 0], text: '37', dx: 0, dy: 14 },
          { t: 'label', p: [3.3156, 0.9204], text: '?', dx: 7, dy: -7 },
          { t: 'point', p: [0, 0], label: 'O', dx: -9, dy: 11 },
          { t: 'point', p: [0.6311, 1.8408], label: 'T', dx: -4, dy: -11 },
          { t: 'point', p: [6, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      answer: '$PT = 35$',
      solution:
        'Touching at one point makes the cable a tangent, so the radius $OT$ meets it at $90^\\circ$ and triangle $OTP$ is right-angled at $T$: $PT = \\sqrt{37^2 - 12^2} = \\sqrt{1369 - 144} = \\sqrt{1225} = 35$ ✓. Second route by factoring the difference of squares: $37^2 - 12^2 = (37 - 12)(37 + 12) = 25 \\cdot 49$, whose square root splits neatly as $5 \\cdot 7 = 35$ ✓.',
    },
  ],

  // slot 6 — tangent-chord angle equals half the intercepted arc.
  //          Lanes: arc 118° -> 59°; arc 134° -> 67°; arc 114° -> 57°.
  [
    {
      q: 'A straight rail touches a circular track at $A$, and a chord $\\overline{AB}$ leaves $A$ cutting off an arc of $118^\\circ$ on the side marked in the figure. Find the angle between the rail and the chord.',
      fig: {
        view: [-4.9, -4.5, 4.9, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'line', a: [-4.2, -3], b: [4.2, -3] },
          { t: 'seg', a: [0, -3], b: [2.6488, 1.4084] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -90, to: 28 },
          { t: 'label', p: [3.1284, -1.88], text: '118°', dx: 8, dy: 0 },
          { t: 'angle', at: [0, -3], from: [2.5, -3], to: [2.6488, 1.4084], r: 0.7, label: '?' },
          { t: 'point', p: [0, -3], label: 'A', dx: -6, dy: 12 },
          { t: 'point', p: [2.6488, 1.4084], label: 'B', dx: 9, dy: -8 },
        ],
      },
      answer: '$59^\\circ$',
      solution:
        'An angle made by a tangent and a chord at the point of contact is half the arc caught between them: $\\frac{118^\\circ}{2} = 59^\\circ$ ✓. Second route through the center $O$: the chord $\\overline{AB}$ subtends a central angle equal to its arc, $118^\\circ$, and triangle $OAB$ is isosceles because $OA = OB$, so $\\angle OAB = \\frac{180^\\circ - 118^\\circ}{2} = 31^\\circ$. The radius $OA$ stands at $90^\\circ$ to the rail, so the rail-to-chord angle is $90^\\circ - 31^\\circ = 59^\\circ$ ✓.',
    },
    {
      q: 'A ruler is laid against a circular coin so that it touches the coin only at $A$, and a chord $\\overline{AB}$ is drawn from $A$ cutting off an arc of $134^\\circ$ on the marked side. Find the angle between the ruler and the chord.',
      fig: {
        view: [-4.9, -4.5, 4.9, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'line', a: [-4.2, -3], b: [4.2, -3] },
          { t: 'seg', a: [0, -3], b: [2.158, 2.084] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -90, to: 44 },
          { t: 'label', p: [3.36, -1.4261], text: '134°', dx: 8, dy: 0 },
          { t: 'angle', at: [0, -3], from: [2.5, -3], to: [2.158, 2.084], r: 0.7, label: '?' },
          { t: 'point', p: [0, -3], label: 'A', dx: -6, dy: 12 },
          { t: 'point', p: [2.158, 2.084], label: 'B', dx: 9, dy: -8 },
        ],
      },
      answer: '$67^\\circ$',
      solution:
        'The ruler is a tangent, so the angle it makes with the chord at the point of contact is half the intercepted arc: $\\frac{134^\\circ}{2} = 67^\\circ$ ✓. Second route through the center $O$: the central angle on chord $\\overline{AB}$ equals the arc, $134^\\circ$, and the two radii $OA$ and $OB$ make triangle $OAB$ isosceles, so $\\angle OAB = \\frac{180^\\circ - 134^\\circ}{2} = 23^\\circ$. Since $OA \\perp$ ruler, the answer is $90^\\circ - 23^\\circ = 67^\\circ$ ✓.',
    },
    {
      q: 'A skateboard ramp meets a circular loop at exactly one point $A$, and a brace $\\overline{AB}$ runs from $A$ across the loop, cutting off an arc of $114^\\circ$ on the marked side. Find the angle between the ramp and the brace.',
      fig: {
        view: [-4.9, -4.5, 4.9, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'line', a: [-4.2, -3], b: [4.2, -3] },
          { t: 'seg', a: [0, -3], b: [2.7406, 1.2202] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -90, to: 24 },
          { t: 'label', p: [3.0611, -1.9878], text: '114°', dx: 8, dy: 0 },
          { t: 'angle', at: [0, -3], from: [2.5, -3], to: [2.7406, 1.2202], r: 0.7, label: '?' },
          { t: 'point', p: [0, -3], label: 'A', dx: -6, dy: 12 },
          { t: 'point', p: [2.7406, 1.2202], label: 'B', dx: 9, dy: -8 },
        ],
      },
      answer: '$57^\\circ$',
      solution:
        'Touching the loop at a single point makes the ramp a tangent, and a tangent-chord angle is half the arc it intercepts: $\\frac{114^\\circ}{2} = 57^\\circ$ ✓. Second route through the center $O$: the arc gives central angle $\\angle AOB = 114^\\circ$, and $OA = OB$ makes triangle $OAB$ isosceles with base angles $\\frac{180^\\circ - 114^\\circ}{2} = 33^\\circ$. The radius $OA$ is perpendicular to the ramp, so the ramp-to-brace angle is $90^\\circ - 33^\\circ = 57^\\circ$ ✓.',
    },
  ],

  // slot 7 — all four angles of a cyclic quadrilateral from its four arcs.
  //          Lanes: arcs 72/88/104/96 -> 96, 100, 84, 80;
  //          arcs 110/64/70/116 -> 67, 93, 113, 87;
  //          arcs 94/102/86/78 -> 94, 82, 86, 98.
  [
    {
      q: 'Four stakes $A$, $B$, $C$, $D$ stand in order around a circular garden, and rope is run from stake to stake to form quadrilateral $ABCD$. The arcs are $\\overset{\\frown}{AB} = 72^\\circ$, $\\overset{\\frown}{BC} = 88^\\circ$, $\\overset{\\frown}{CD} = 104^\\circ$, and $\\overset{\\frown}{DA} = 96^\\circ$. Find all four angles of the quadrilateral, and check that each pair of opposite angles is supplementary.',
      fig: {
        view: [-4.8, -4.8, 4.8, 4.8],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.7634, 2.4271], b: [1.7634, 2.4271] },
          { t: 'seg', a: [1.7634, 2.4271], b: [2.4871, -1.6776] },
          { t: 'seg', a: [2.4871, -1.6776], b: [-2.2294, -2.0074] },
          { t: 'seg', a: [-2.2294, -2.0074], b: [-1.7634, 2.4271] },
          { t: 'label', p: [0, 3.8], text: '72°' },
          { t: 'label', p: [3.7423, 0.6598], text: '88°' },
          { t: 'label', p: [0.2651, -3.7907], text: '104°' },
          { t: 'label', p: [-3.7792, 0.3973], text: '96°' },
          { t: 'point', p: [-1.7634, 2.4271], label: 'A', dx: -8, dy: -10 },
          { t: 'point', p: [1.7634, 2.4271], label: 'B', dx: 8, dy: -10 },
          { t: 'point', p: [2.4871, -1.6776], label: 'C', dx: 11, dy: 6 },
          { t: 'point', p: [-2.2294, -2.0074], label: 'D', dx: -9, dy: 9 },
        ],
      },
      answer: '$\\angle A = 96^\\circ$, $\\angle B = 100^\\circ$, $\\angle C = 84^\\circ$, $\\angle D = 80^\\circ$',
      solution:
        'Each corner is an inscribed angle looking across at the two arcs on the far side, so it is half their total: $\\angle A = \\frac{88 + 104}{2} = 96^\\circ$, $\\angle B = \\frac{104 + 96}{2} = 100^\\circ$, $\\angle C = \\frac{96 + 72}{2} = 84^\\circ$, $\\angle D = \\frac{72 + 88}{2} = 80^\\circ$ ✓, and the pairs check out: $96 + 84 = 180$ and $100 + 80 = 180$ ✓. Second route using only two of those computations: find $\\angle A = 96^\\circ$ and $\\angle B = 100^\\circ$ as above, then note that the arcs behind $\\angle A$ and behind $\\angle C$ together make the whole $360^\\circ$ circle, so those two angles must add to $180^\\circ$; that gives $\\angle C = 180^\\circ - 96^\\circ = 84^\\circ$ and $\\angle D = 180^\\circ - 100^\\circ = 80^\\circ$, and the four angles total $96 + 100 + 84 + 80 = 360^\\circ$ as any quadrilateral must ✓.',
    },
    {
      q: 'A kite-shaped window is built as quadrilateral $ABCD$ with all four corners on a circular frame, the corners lying in that order around the frame. The arcs measure $\\overset{\\frown}{AB} = 110^\\circ$, $\\overset{\\frown}{BC} = 64^\\circ$, $\\overset{\\frown}{CD} = 70^\\circ$, and $\\overset{\\frown}{DA} = 116^\\circ$. Find all four angles of $ABCD$ and show that opposite angles are supplementary.',
      fig: {
        view: [-4.8, -4.8, 4.8, 4.8],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.4575, 1.7207], b: [2.4575, 1.7207] },
          { t: 'seg', a: [2.4575, 1.7207], b: [2.6239, -1.4544] },
          { t: 'seg', a: [2.6239, -1.4544], b: [-0.4693, -2.9631] },
          { t: 'seg', a: [-0.4693, -2.9631], b: [-2.4575, 1.7207] },
          { t: 'label', p: [0, 3.8], text: '110°' },
          { t: 'label', p: [3.7948, 0.1989], text: '64°' },
          { t: 'label', p: [1.6657, -3.4152], text: '70°' },
          { t: 'label', p: [-3.4977, -1.4844], text: '116°' },
          { t: 'point', p: [-2.4575, 1.7207], label: 'A', dx: -10, dy: -8 },
          { t: 'point', p: [2.4575, 1.7207], label: 'B', dx: 10, dy: -8 },
          { t: 'point', p: [2.6239, -1.4544], label: 'C', dx: 11, dy: 6 },
          { t: 'point', p: [-0.4693, -2.9631], label: 'D', dx: -4, dy: 12 },
        ],
      },
      answer: '$\\angle A = 67^\\circ$, $\\angle B = 93^\\circ$, $\\angle C = 113^\\circ$, $\\angle D = 87^\\circ$',
      solution:
        'A corner of the window is an inscribed angle standing on the two arcs it does not touch, so it is half their sum: $\\angle A = \\frac{64 + 70}{2} = 67^\\circ$, $\\angle B = \\frac{70 + 116}{2} = 93^\\circ$, $\\angle C = \\frac{116 + 110}{2} = 113^\\circ$, $\\angle D = \\frac{110 + 64}{2} = 87^\\circ$ ✓, and the opposite pairs give $67 + 113 = 180$ and $93 + 87 = 180$ ✓. Second route from two angles plus the supplementary rule: with $\\angle A = 67^\\circ$ and $\\angle B = 93^\\circ$ in hand, the arcs behind an angle and behind its opposite fill the whole circle, so opposite angles must add to half of $360^\\circ$; that hands back $\\angle C = 180^\\circ - 67^\\circ = 113^\\circ$ and $\\angle D = 180^\\circ - 93^\\circ = 87^\\circ$, and $67 + 93 + 113 + 87 = 360^\\circ$ ✓.',
    },
    {
      q: 'Quadrilateral $ABCD$ is drawn with its vertices in order on a circular plate, splitting the rim into arcs $\\overset{\\frown}{AB} = 94^\\circ$, $\\overset{\\frown}{BC} = 102^\\circ$, $\\overset{\\frown}{CD} = 86^\\circ$, and $\\overset{\\frown}{DA} = 78^\\circ$. Find all four angles of $ABCD$, and verify that both pairs of opposite angles are supplementary.',
      fig: {
        view: [-4.8, -4.8, 4.8, 4.8],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.1941, 2.046], b: [2.1941, 2.046] },
          { t: 'seg', a: [2.1941, 2.046], b: [1.5451, -2.5715] },
          { t: 'seg', a: [1.5451, -2.5715], b: [-2.4575, -1.7207] },
          { t: 'seg', a: [-2.4575, -1.7207], b: [-2.1941, 2.046] },
          { t: 'label', p: [0, 3.8], text: '94°' },
          { t: 'label', p: [3.763, -0.5288], text: '102°' },
          { t: 'label', p: [-0.7901, -3.717], text: '86°' },
          { t: 'label', p: [-3.7907, 0.2651], text: '78°' },
          { t: 'point', p: [-2.1941, 2.046], label: 'A', dx: -9, dy: -9 },
          { t: 'point', p: [2.1941, 2.046], label: 'B', dx: 9, dy: -9 },
          { t: 'point', p: [1.5451, -2.5715], label: 'C', dx: 7, dy: 11 },
          { t: 'point', p: [-2.4575, -1.7207], label: 'D', dx: -10, dy: 8 },
        ],
      },
      answer: '$\\angle A = 94^\\circ$, $\\angle B = 82^\\circ$, $\\angle C = 86^\\circ$, $\\angle D = 98^\\circ$',
      solution:
        'Every vertex angle is half the sum of the two arcs it opens onto: $\\angle A = \\frac{102 + 86}{2} = 94^\\circ$, $\\angle B = \\frac{86 + 78}{2} = 82^\\circ$, $\\angle C = \\frac{78 + 94}{2} = 86^\\circ$, $\\angle D = \\frac{94 + 102}{2} = 98^\\circ$ ✓; opposite pairs give $94 + 86 = 180$ and $82 + 98 = 180$ ✓. Second route from two angles plus the supplementary rule: keep $\\angle A = 94^\\circ$ and $\\angle B = 82^\\circ$, then use the fact that an angle and the one opposite it stand on arcs that together sweep the full $360^\\circ$, so each pair sums to $180^\\circ$: $\\angle C = 180^\\circ - 94^\\circ = 86^\\circ$ and $\\angle D = 180^\\circ - 82^\\circ = 98^\\circ$, with the four angles totaling $360^\\circ$ ✓.',
    },
  ],

  // slot 8 — two tangents from P: both arcs and the base angle of the
  //          isosceles triangle. Lanes: 56° -> 124/236/62;
  //          40° -> 140/220/70; 64° -> 116/244/58.
  [
    {
      q: 'Two straight ropes run from a post at $P$ and pull tight against a circular tank, touching it at $A$ and at $B$, with $\\angle APB = 56^\\circ$. Find both arcs $AB$ — the minor one and the major one — and then find $\\angle PAB$.',
      fig: {
        view: [-4.4, -4, 7.7, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [6.3902, 0], b: [1.4084, 2.6488] },
          { t: 'seg', a: [6.3902, 0], b: [1.4084, -2.6488] },
          { t: 'seg', a: [1.4084, 2.6488], b: [1.4084, -2.6488] },
          { t: 'angle', at: [6.3902, 0], from: [1.4084, 2.6488], to: [1.4084, -2.6488], r: 1.1, label: '56' },
          { t: 'angle', at: [1.4084, 2.6488], from: [6.3902, 0], to: [1.4084, -2.6488], r: 0.7, label: '?' },
          { t: 'label', p: [3.45, 0], text: '?' },
          { t: 'label', p: [-3.6, 0], text: '?' },
          { t: 'point', p: [1.4084, 2.6488], label: 'A', dx: -6, dy: -11 },
          { t: 'point', p: [1.4084, -2.6488], label: 'B', dx: -6, dy: 12 },
          { t: 'point', p: [6.3902, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      answer: 'Minor arc $124^\\circ$, major arc $236^\\circ$, $\\angle PAB = 62^\\circ$',
      solution:
        'A radius meets a tangent at a right angle, so quadrilateral $OAPB$ has right angles at $A$ and at $B$; its four angles total $360^\\circ$, leaving the central angle $\\angle AOB = 360^\\circ - 90^\\circ - 90^\\circ - 56^\\circ = 124^\\circ$, which is the minor arc. The major arc is the rest of the tank: $360^\\circ - 124^\\circ = 236^\\circ$. The two tangent segments are equal, $PA = PB$, so triangle $PAB$ is isosceles and its base angles are $\\angle PAB = \\frac{180^\\circ - 56^\\circ}{2} = 62^\\circ$ ✓. Second route through the arc rules: from outside, $\\frac{\\text{major} - \\text{minor}}{2} = 56^\\circ$ means the arcs differ by $112^\\circ$, and they add to $360^\\circ$, so the minor is $\\frac{360 - 112}{2} = 124^\\circ$ and the major is $236^\\circ$; then $\\angle PAB$ is a tangent-chord angle intercepting the minor arc, worth $\\frac{124^\\circ}{2} = 62^\\circ$ ✓.',
    },
    {
      q: 'A spotlight at $P$ throws two beams that just graze a circular pillar, touching it at $A$ and $B$, and the beams make an angle of $\\angle APB = 40^\\circ$. Find the minor arc $AB$, the major arc $AB$, and $\\angle PAB$.',
      fig: {
        view: [-4.4, -4.2, 10.2, 4.2],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [8.7714, 0], b: [1.0261, 2.8191] },
          { t: 'seg', a: [8.7714, 0], b: [1.0261, -2.8191] },
          { t: 'seg', a: [1.0261, 2.8191], b: [1.0261, -2.8191] },
          { t: 'angle', at: [8.7714, 0], from: [1.0261, 2.8191], to: [1.0261, -2.8191], r: 1.4, label: '40' },
          { t: 'angle', at: [1.0261, 2.8191], from: [8.7714, 0], to: [1.0261, -2.8191], r: 0.7, label: '?' },
          { t: 'label', p: [3.45, 0], text: '?' },
          { t: 'label', p: [-3.6, 0], text: '?' },
          { t: 'point', p: [1.0261, 2.8191], label: 'A', dx: -5, dy: -11 },
          { t: 'point', p: [1.0261, -2.8191], label: 'B', dx: -5, dy: 12 },
          { t: 'point', p: [8.7714, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      answer: 'Minor arc $140^\\circ$, major arc $220^\\circ$, $\\angle PAB = 70^\\circ$',
      solution:
        'Each beam is perpendicular to the radius at its point of contact, so $OAPB$ has right angles at $A$ and $B$ and its angles sum to $360^\\circ$: $\\angle AOB = 360^\\circ - 180^\\circ - 40^\\circ = 140^\\circ$, the minor arc, leaving $360^\\circ - 140^\\circ = 220^\\circ$ for the major arc. Tangent segments from one point are equal, so triangle $PAB$ is isosceles with $\\angle PAB = \\frac{180^\\circ - 40^\\circ}{2} = 70^\\circ$ ✓. Second route through the arc rules: the outside angle is half the difference, so major $-$ minor $= 80^\\circ$, and since the two arcs make a full $360^\\circ$, the minor is $140^\\circ$ and the major is $220^\\circ$; the tangent-chord angle at $A$ then gives $\\angle PAB = \\frac{140^\\circ}{2} = 70^\\circ$ ✓.',
    },
    {
      q: 'From a point $P$ outside a round mirror, two lines of sight touch its edge at $A$ and at $B$, making $\\angle APB = 64^\\circ$. Find both arcs cut off on the edge, and then find $\\angle PAB$.',
      fig: {
        view: [-4.4, -4, 7, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [5.6612, 0], b: [1.5898, 2.5441] },
          { t: 'seg', a: [5.6612, 0], b: [1.5898, -2.5441] },
          { t: 'seg', a: [1.5898, 2.5441], b: [1.5898, -2.5441] },
          { t: 'angle', at: [5.6612, 0], from: [1.5898, 2.5441], to: [1.5898, -2.5441], r: 1, label: '64' },
          { t: 'angle', at: [1.5898, 2.5441], from: [5.6612, 0], to: [1.5898, -2.5441], r: 0.7, label: '?' },
          { t: 'label', p: [3.45, 0], text: '?' },
          { t: 'label', p: [-3.6, 0], text: '?' },
          { t: 'point', p: [1.5898, 2.5441], label: 'A', dx: -6, dy: -11 },
          { t: 'point', p: [1.5898, -2.5441], label: 'B', dx: -6, dy: 12 },
          { t: 'point', p: [5.6612, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      answer: 'Minor arc $116^\\circ$, major arc $244^\\circ$, $\\angle PAB = 58^\\circ$',
      solution:
        'The radii $OA$ and $OB$ stand at $90^\\circ$ to the two sight lines, so in quadrilateral $OAPB$ the central angle is $\\angle AOB = 360^\\circ - 90^\\circ - 90^\\circ - 64^\\circ = 116^\\circ$; that is the minor arc, and the major arc is $360^\\circ - 116^\\circ = 244^\\circ$. Since $PA = PB$, triangle $PAB$ is isosceles and $\\angle PAB = \\frac{180^\\circ - 64^\\circ}{2} = 58^\\circ$ ✓. Second route through the arc rules: half the difference of the arcs is $64^\\circ$, so they differ by $128^\\circ$ while adding to $360^\\circ$, giving minor $\\frac{360 - 128}{2} = 116^\\circ$ and major $244^\\circ$; the tangent-chord angle at $A$ intercepts the minor arc, so $\\angle PAB = \\frac{116^\\circ}{2} = 58^\\circ$ ✓.',
    },
  ],

  // slot 9 — AB a diameter with D then C on the upper semicircle; chords AC
  //          and BD meet at P. Lanes: AD 58°, DC 66° -> 57°;
  //          AD 76°, DC 48° -> 66°; AD 44°, DC 80° -> 50°.
  [
    {
      q: 'A circular stage has a walkway $AB$ straight across through the center. Two lights $D$ and $C$ hang above the rim of the upper half, with $\\overset{\\frown}{AD} = 58^\\circ$ and $\\overset{\\frown}{DC} = 66^\\circ$. Cables $AC$ and $BD$ cross at $P$. Find $\\angle APD$.',
      fig: {
        view: [-4.7, -4.4, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 0], b: [1.6776, 2.4871] },
          { t: 'seg', a: [3, 0], b: [-1.5898, 2.5441] },
          { t: 'label', p: [-3.3236, 1.8423], text: '58°', dx: -8, dy: -4 },
          { t: 'label', p: [0.0663, 3.7994], text: '66°' },
          { t: 'angle', at: [0.0624, 1.6283], from: [-3, 0], to: [-1.5898, 2.5441], r: 0.5, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3, 0], label: 'A', dx: -13, dy: 0 },
          { t: 'point', p: [3, 0], label: 'B', dx: 13, dy: 0 },
          { t: 'point', p: [-1.5898, 2.5441], label: 'D', dx: -6, dy: -12 },
          { t: 'point', p: [1.6776, 2.4871], label: 'C', dx: 9, dy: -9 },
          { t: 'point', p: [0.0624, 1.6283], label: 'P', dx: 10, dy: 12 },
        ],
      },
      answer: '$\\angle APD = 57^\\circ$',
      solution:
        'Take the vertical partner first. The angle $\\angle APB$ faces the lower semicircle, worth $180^\\circ$, together with arc $DC$: $\\angle APB = \\frac{180^\\circ + 66^\\circ}{2} = 123^\\circ$. Since $\\angle APD$ and $\\angle APB$ sit side by side on the straight cable $BD$, $\\angle APD = 180^\\circ - 123^\\circ = 57^\\circ$ ✓. Second route by the exterior angle theorem: the upper half accounts for $180^\\circ$, so $\\overset{\\frown}{CB} = 180^\\circ - 58^\\circ - 66^\\circ = 56^\\circ$. In triangle $PDC$ the angle $\\angle APD$ lies outside at $P$ along the straight cable $AC$, so it equals the two remote angles $\\angle BDC + \\angle ACD = \\frac{56^\\circ}{2} + \\frac{58^\\circ}{2} = 28^\\circ + 29^\\circ = 57^\\circ$ ✓.',
    },
    {
      q: 'A round pizza is cut in half by a straight line $AB$ through the center. Points $D$ and $C$ are marked on the upper crust with $\\overset{\\frown}{AD} = 76^\\circ$ and $\\overset{\\frown}{DC} = 48^\\circ$, and the cuts $AC$ and $BD$ meet at $P$. Find $\\angle APD$.',
      fig: {
        view: [-4.7, -4.4, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 0], b: [1.6776, 2.4871] },
          { t: 'seg', a: [3, 0], b: [-0.7258, 2.9109] },
          { t: 'label', p: [-2.9944, 2.3395], text: '76°', dx: -8, dy: -4 },
          { t: 'label', p: [0.6598, 3.7423], text: '48°' },
          { t: 'angle', at: [0.5703, 1.8983], from: [-3, 0], to: [-0.7258, 2.9109], r: 0.5, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3, 0], label: 'A', dx: -13, dy: 0 },
          { t: 'point', p: [3, 0], label: 'B', dx: 13, dy: 0 },
          { t: 'point', p: [-0.7258, 2.9109], label: 'D', dx: -4, dy: -12 },
          { t: 'point', p: [1.6776, 2.4871], label: 'C', dx: 9, dy: -9 },
          { t: 'point', p: [0.5703, 1.8983], label: 'P', dx: 11, dy: 11 },
        ],
      },
      answer: '$\\angle APD = 66^\\circ$',
      solution:
        'Work with the vertical partner first: $\\angle APB$ faces the lower semicircle of $180^\\circ$ together with arc $DC$, so $\\angle APB = \\frac{180^\\circ + 48^\\circ}{2} = 114^\\circ$. The two angles $\\angle APD$ and $\\angle APB$ lie along the straight cut $BD$, so $\\angle APD = 180^\\circ - 114^\\circ = 66^\\circ$ ✓. Second route by the exterior angle theorem: the upper crust totals $180^\\circ$, so $\\overset{\\frown}{CB} = 180^\\circ - 76^\\circ - 48^\\circ = 56^\\circ$. In triangle $PDC$, $\\angle APD$ is the exterior angle at $P$ and equals $\\angle BDC + \\angle ACD = \\frac{56^\\circ}{2} + \\frac{76^\\circ}{2} = 28^\\circ + 38^\\circ = 66^\\circ$ ✓.',
    },
    {
      q: 'The rim of a circular clock face is split by the horizontal diameter $AB$. Two dots $D$ and $C$ sit on the upper half with $\\overset{\\frown}{AD} = 44^\\circ$ and $\\overset{\\frown}{DC} = 80^\\circ$, and the chords $AC$ and $BD$ cross at $P$. Find $\\angle APD$.',
      fig: {
        view: [-4.7, -4.4, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 0], b: [1.6776, 2.4871] },
          { t: 'seg', a: [3, 0], b: [-2.158, 2.084] },
          { t: 'label', p: [-3.5236, 1.4234], text: '44°', dx: -8, dy: -2 },
          { t: 'label', p: [-0.3972, 3.7792], text: '80°' },
          { t: 'angle', at: [-0.4093, 1.3774], from: [-3, 0], to: [-2.158, 2.084], r: 0.5, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3, 0], label: 'A', dx: -13, dy: 0 },
          { t: 'point', p: [3, 0], label: 'B', dx: 13, dy: 0 },
          { t: 'point', p: [-2.158, 2.084], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [1.6776, 2.4871], label: 'C', dx: 9, dy: -9 },
          { t: 'point', p: [-0.4093, 1.3774], label: 'P', dx: 11, dy: 11 },
        ],
      },
      answer: '$\\angle APD = 50^\\circ$',
      solution:
        'Start with the vertical partner: $\\angle APB$ faces the lower semicircle, $180^\\circ$, plus arc $DC$, so $\\angle APB = \\frac{180^\\circ + 80^\\circ}{2} = 130^\\circ$. Along the straight chord $BD$ the two angles are supplementary, giving $\\angle APD = 180^\\circ - 130^\\circ = 50^\\circ$ ✓. Second route by the exterior angle theorem: the upper half is $180^\\circ$, so $\\overset{\\frown}{CB} = 180^\\circ - 44^\\circ - 80^\\circ = 56^\\circ$. In triangle $PDC$ the exterior angle at $P$ is $\\angle APD$, equal to $\\angle BDC + \\angle ACD = \\frac{56^\\circ}{2} + \\frac{44^\\circ}{2} = 28^\\circ + 22^\\circ = 50^\\circ$ ✓.',
    },
  ],

  // slot 10 — PA tangent at A, secant through B then C with BC a diameter.
  //           Lanes: arc AB 64° -> 26° and 32°; 72° -> 18° and 36°;
  //           40° -> 50° and 20°.
  [
    {
      q: 'A rope from a post at $P$ is pulled tight against a circular pool, touching it at $A$. A straight plank also runs from $P$ across the pool, meeting the edge first at $B$ and then at $C$, and $BC$ passes through the center. If the near arc $\\overset{\\frown}{AB} = 64^\\circ$, find $\\angle P$ and the inscribed angle $\\angle ACB$.',
      fig: {
        view: [-4.4, -4.2, 8.2, 4.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [6.8435, 0], b: [-3, 0] },
          { t: 'seg', a: [6.8435, 0], b: [1.3151, 2.6964] },
          { t: 'seg', a: [-3, 0], b: [1.3151, 2.6964] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 0, to: 64 },
          { t: 'label', p: [3.0106, 1.8813], text: '64°', dx: 7, dy: -4 },
          { t: 'angle', at: [6.8435, 0], from: [1.3151, 2.6964], to: [-3, 0], r: 1.2, label: '?' },
          { t: 'angle', at: [-3, 0], from: [1.3151, 2.6964], to: [3, 0], r: 0.8, label: '?' },
          { t: 'point', p: [1.3151, 2.6964], label: 'A', dx: 0, dy: -13 },
          { t: 'point', p: [3, 0], label: 'B', dx: 6, dy: 13 },
          { t: 'point', p: [-3, 0], label: 'C', dx: -13, dy: 0 },
          { t: 'point', p: [6.8435, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      answer: '$\\angle P = 26^\\circ$ and $\\angle ACB = 32^\\circ$',
      solution:
        'Because $BC$ runs through the center it is a diameter, so arc $ABC$ is a semicircle and the far arc is $\\overset{\\frown}{AC} = 180^\\circ - 64^\\circ = 116^\\circ$. From the outside point the angle is half the difference: $\\angle P = \\frac{116^\\circ - 64^\\circ}{2} = 26^\\circ$, and the inscribed angle at $C$ stands on arc $AB$: $\\angle ACB = \\frac{64^\\circ}{2} = 32^\\circ$ ✓. Second route through the right angle in the semicircle: $\\angle BAC = 90^\\circ$ because it looks at the diameter $BC$, and $\\angle ABC$ is inscribed on arc $AC$, worth $\\frac{116^\\circ}{2} = 58^\\circ$, so $\\angle ACB = 180^\\circ - 90^\\circ - 58^\\circ = 32^\\circ$; then in triangle $APC$ the tangent-chord angle at $A$ measured on the far side of chord $AC$ is $\\frac{116^\\circ}{2} = 58^\\circ$ and sits outside the triangle, so $58^\\circ = \\angle P + 32^\\circ$ and $\\angle P = 26^\\circ$ ✓.',
    },
    {
      q: 'A laser at $P$ sends one beam that just touches a circular disc at $A$ and a second beam straight through the disc, crossing its edge at $B$ and then at $C$, where $BC$ is a diameter. Given the near arc $\\overset{\\frown}{AB} = 72^\\circ$, find $\\angle P$ and $\\angle ACB$.',
      fig: {
        view: [-4.4, -4.2, 11.1, 4.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [9.7082, 0], b: [-3, 0] },
          { t: 'seg', a: [9.7082, 0], b: [0.9271, 2.8532] },
          { t: 'seg', a: [-3, 0], b: [0.9271, 2.8532] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 0, to: 72 },
          { t: 'label', p: [2.8721, 2.0866], text: '72°', dx: 7, dy: -4 },
          { t: 'angle', at: [9.7082, 0], from: [0.9271, 2.8532], to: [-3, 0], r: 1.4, label: '?' },
          { t: 'angle', at: [-3, 0], from: [0.9271, 2.8532], to: [3, 0], r: 0.9, label: '?' },
          { t: 'point', p: [0.9271, 2.8532], label: 'A', dx: -2, dy: -13 },
          { t: 'point', p: [3, 0], label: 'B', dx: 6, dy: 13 },
          { t: 'point', p: [-3, 0], label: 'C', dx: -13, dy: 0 },
          { t: 'point', p: [9.7082, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      answer: '$\\angle P = 18^\\circ$ and $\\angle ACB = 36^\\circ$',
      solution:
        'Since $BC$ is a diameter, the arc from $A$ around to $C$ on that side completes a semicircle: $\\overset{\\frown}{AC} = 180^\\circ - 72^\\circ = 108^\\circ$. The outside angle is half the difference of far and near: $\\angle P = \\frac{108^\\circ - 72^\\circ}{2} = 18^\\circ$, and the inscribed angle at $C$ is half arc $AB$: $\\angle ACB = \\frac{72^\\circ}{2} = 36^\\circ$ ✓. Second route through the right angle in the semicircle: $\\angle BAC = 90^\\circ$ because it looks at the diameter, and $\\angle ABC = \\frac{108^\\circ}{2} = 54^\\circ$, so $\\angle ACB = 180^\\circ - 90^\\circ - 54^\\circ = 36^\\circ$; the tangent-chord angle at $A$ on the far side of chord $AC$ is $\\frac{108^\\circ}{2} = 54^\\circ$ and is the exterior angle of triangle $APC$ there, so $\\angle P = 54^\\circ - 36^\\circ = 18^\\circ$ ✓.',
    },
    {
      q: 'A cable from a tower at $P$ touches a circular reservoir at the single point $A$, while a straight pipe from $P$ enters the reservoir at $B$ and leaves at $C$, with $BC$ a diameter. If the near arc $\\overset{\\frown}{AB} = 40^\\circ$, find $\\angle P$ and $\\angle ACB$.',
      fig: {
        view: [-4.4, -4.2, 5.6, 4.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [3.9162, 0], b: [-3, 0] },
          { t: 'seg', a: [3.9162, 0], b: [2.2981, 1.9284] },
          { t: 'seg', a: [-3, 0], b: [2.2981, 1.9284] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 0, to: 40 },
          { t: 'label', p: [3.3363, 1.2141], text: '40°', dx: 8, dy: -2 },
          { t: 'angle', at: [3.9162, 0], from: [2.2981, 1.9284], to: [-3, 0], r: 0.7, label: '?' },
          { t: 'angle', at: [-3, 0], from: [2.2981, 1.9284], to: [3, 0], r: 1, label: '?' },
          { t: 'point', p: [2.2981, 1.9284], label: 'A', dx: 4, dy: -11 },
          { t: 'point', p: [3, 0], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [-3, 0], label: 'C', dx: -13, dy: 0 },
          { t: 'point', p: [3.9162, 0], label: 'P', dx: 12, dy: -4 },
        ],
      },
      answer: '$\\angle P = 50^\\circ$ and $\\angle ACB = 20^\\circ$',
      solution:
        'The pipe runs along a diameter, so arcs $AB$ and $AC$ together make a semicircle and $\\overset{\\frown}{AC} = 180^\\circ - 40^\\circ = 140^\\circ$. From outside, $\\angle P = \\frac{140^\\circ - 40^\\circ}{2} = 50^\\circ$, and the inscribed angle at $C$ standing on arc $AB$ is $\\angle ACB = \\frac{40^\\circ}{2} = 20^\\circ$ ✓. Second route through the right angle in the semicircle: $\\angle BAC = 90^\\circ$ since it faces the diameter $BC$, and $\\angle ABC$ is inscribed on arc $AC$, worth $\\frac{140^\\circ}{2} = 70^\\circ$, so $\\angle ACB = 180^\\circ - 90^\\circ - 70^\\circ = 20^\\circ$; the tangent-chord angle at $A$ on the far side of chord $AC$ measures $\\frac{140^\\circ}{2} = 70^\\circ$ and is the exterior angle of triangle $APC$ at $A$, so $\\angle P = 70^\\circ - 20^\\circ = 50^\\circ$ ✓.',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 12,
  worksheet,
}
