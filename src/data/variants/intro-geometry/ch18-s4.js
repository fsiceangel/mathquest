// Introduction to Geometry chapter 18 — variations for the CHALLENGE set.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer was worked twice along routes that share no steps, and
//    the two routes had to agree before the key was written: the Pythagorean
//    identity vs. a reference triangle reflected across the $y$-axis (slot 1);
//    two tangent equations vs. an angle chase into an isosceles triangle, or
//    two special right triangles closed by the Law of Cosines (slot 2); six
//    central triangles vs. a rectangle-and-triangles decomposition, the
//    perimeter-and-apothem formula, or a cut into two trapezoids (slot 3); the
//    Law of Cosines vs. coordinates (slots 4 and 9); a special-triangle
//    construction vs. a chord of the unit circle (slot 5); the Law of Sines vs.
//    the Pythagorean Theorem or the Law of Cosines (slot 6); the sine area
//    formula vs. a base-and-greatest-possible-height bound (slot 7); the sine
//    area formula vs. the foot of an altitude placed by the given cosine
//    (slot 8); reading the coordinate as a cosine vs. rebuilding the whole
//    point from $x^2 + y^2 = 1$ (slot 10); the extended Law of Sines vs. the
//    central triangle behind the chord (slot 11); table values vs. the
//    Pythagorean identity and triangle facts that never quote them (slot 12).
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution and marked ✗, in the order the distractors appear.
//  - Figures carry only what is given. Nothing a question asks for is drawn to
//    scale on a grid, no asked-for diagonal is drawn at all, and every plotted
//    coordinate is correct to three decimals.
//  - No two choices inside an item name the same value, and inside each slot
//    the three variations put the correct answer in three different positions.

const challenge = [
  // slot 1 — one ratio of an obtuse angle is given, another is wanted. Route
  // one is the Pythagorean identity plus a quadrant argument; route two builds
  // the acute reference triangle from a Pythagorean triple and reflects it.
  // Lane: sin = 8/17 -> cos = -15/17 / cos = -5/13 -> sin = 12/13 /
  // sin = 7/25 -> tan = -7/24.
  [
    {
      q: 'The angle $\\theta$ is obtuse and $\\sin\\theta = \\frac{8}{17}$. What is $\\cos\\theta$?',
      choices: ['$\\frac{15}{17}$', '$-\\frac{8}{17}$', '$-\\frac{8}{15}$', '$-\\frac{15}{17}$'],
      answer: 3,
      solution:
        'Start from the identity $\\sin^2\\theta + \\cos^2\\theta = 1$: $\\cos^2\\theta = 1 - \\frac{64}{289} = \\frac{225}{289}$, so $\\cos\\theta = \\pm\\frac{15}{17}$. The identity cannot choose the sign, but the unit circle can — an obtuse angle lands in the second quadrant, where the $x$-coordinate is negative, so $\\cos\\theta = -\\frac{15}{17}$ ✓. Check a second, independent way with a reference triangle and the mirror rule, never squaring anything: write $\\theta = 180^\\circ - \\alpha$ for an acute $\\alpha$, so $\\sin\\alpha = \\sin\\theta = \\frac{8}{17}$. A right triangle with opposite $8$ and hypotenuse $17$ has adjacent leg $15$, since $8$-$15$-$17$ is a Pythagorean triple, giving $\\cos\\alpha = \\frac{15}{17}$. The mirror rule $\\cos(180^\\circ - \\alpha) = -\\cos\\alpha$ then hands back $-\\frac{15}{17}$ ✓. (The choice $\\frac{15}{17}$ is FORGETTING THAT THE SECOND QUADRANT HAS NEGATIVE $x$, reporting the acute partner’s cosine ✗; the choice $-\\frac{8}{17}$ is NEGATING THE GIVEN SINE instead of finding the cosine at all ✗; the choice $-\\frac{8}{15}$ is REPORTING THE TANGENT, $\\frac{8/17}{-15/17}$, rather than the cosine ✗.)',
    },
    {
      q: 'The angle $\\theta$ is obtuse and $\\cos\\theta = -\\frac{5}{13}$. What is $\\sin\\theta$?',
      choices: ['$-\\frac{12}{13}$', '$\\frac{12}{13}$', '$\\frac{5}{13}$', '$-\\frac{12}{5}$'],
      answer: 1,
      solution:
        'Use $\\sin^2\\theta + \\cos^2\\theta = 1$: $\\sin^2\\theta = 1 - \\frac{25}{169} = \\frac{144}{169}$, so $\\sin\\theta = \\pm\\frac{12}{13}$. Sine is the height of the unit-circle point, and every angle between $0^\\circ$ and $180^\\circ$ sits above the axis, so the sine is positive: $\\sin\\theta = \\frac{12}{13}$ ✓. Check a second, independent way with a reference triangle, squaring nothing: writing $\\theta = 180^\\circ - \\alpha$ with $\\alpha$ acute, the mirror rule $\\cos(180^\\circ - \\alpha) = -\\cos\\alpha$ gives $\\cos\\alpha = \\frac{5}{13}$. A right triangle with adjacent $5$ and hypotenuse $13$ has opposite leg $12$, from the $5$-$12$-$13$ triple, so $\\sin\\alpha = \\frac{12}{13}$ — and $\\sin(180^\\circ - \\alpha) = \\sin\\alpha$ keeps it exactly as it is ✓. (The choice $-\\frac{12}{13}$ is CARRYING THE MINUS SIGN OVER FROM THE COSINE, though only the $x$-coordinate turns negative in the second quadrant ✗; the choice $\\frac{5}{13}$ is NEGATING THE GIVEN COSINE instead of computing the sine ✗; the choice $-\\frac{12}{5}$ is REPORTING THE TANGENT, $\\frac{12/13}{-5/13}$, rather than the sine ✗.)',
    },
    {
      q: 'The angle $\\theta$ is obtuse and $\\sin\\theta = \\frac{7}{25}$. What is $\\tan\\theta$?',
      choices: ['$-\\frac{7}{24}$', '$\\frac{7}{24}$', '$-\\frac{24}{7}$', '$-\\frac{24}{25}$'],
      answer: 0,
      solution:
        'First get the cosine from $\\sin^2\\theta + \\cos^2\\theta = 1$: $\\cos^2\\theta = 1 - \\frac{49}{625} = \\frac{576}{625}$, so $\\cos\\theta = \\pm\\frac{24}{25}$, and the second quadrant forces the minus sign, $\\cos\\theta = -\\frac{24}{25}$. Then $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{7/25}{-24/25} = -\\frac{7}{24}$ ✓. Check a second, independent way through the reference triangle: with $\\theta = 180^\\circ - \\alpha$, the acute angle $\\alpha$ has $\\sin\\alpha = \\frac{7}{25}$, so its right triangle is the $7$-$24$-$25$ triple and $\\tan\\alpha = \\frac{7}{24}$. Reflecting across the $y$-axis keeps the height and flips the horizontal run, so the tangent of the obtuse angle is the negative of the acute one: $-\\frac{7}{24}$ ✓. (The choice $\\frac{7}{24}$ is REPORTING THE ACUTE PARTNER’S TANGENT, forgetting that the reflected run points backwards ✗; the choice $-\\frac{24}{7}$ is DIVIDING COSINE BY SINE, turning the ratio upside down ✗; the choice $-\\frac{24}{25}$ is STOPPING AT THE COSINE and never dividing ✗.)',
    },
  ],

  // slot 2 — two angles of elevation with a known walk between them. Route one
  // writes a tangent equation from each spot; route two chases angles into an
  // isosceles triangle (v1, v3) or reads the two slant distances off special
  // right triangles and closes with the Law of Cosines (v2).
  // Lane: 30/60 across 140 -> 70sqrt3 / 30/45 across 90 -> 45(sqrt3+1) /
  // 30/60 across 50 -> 25sqrt3.
  [
    {
      q: 'From a point $P$ on level ground the angle of elevation to the top of a radio mast is $30^\\circ$. Walking $140$ meters straight toward the mast to a point $Q$ raises the angle of elevation to $60^\\circ$. How tall is the mast?',
      fig: {
        view: [-20, -20, 245, 145],
        elems: [
          { t: 'poly', pts: [[0, 0], [210, 0], [210, 121.244]], fill: false },
          { t: 'seg', a: [140, 0], b: [210, 121.244] },
          { t: 'right', at: [210, 0], from: [0, 0], to: [210, 121.244] },
          { t: 'angle', at: [0, 0], from: [210, 0], to: [210, 121.244], r: 38, label: '30' },
          { t: 'angle', at: [140, 0], from: [210, 0], to: [210, 121.244], r: 19, label: '60' },
          { t: 'point', p: [0, 0], label: 'P', dx: 0, dy: 16 },
          { t: 'point', p: [140, 0], label: 'Q', dx: -8, dy: 16 },
          { t: 'label', p: [70, 0], text: '140', dx: 0, dy: 16 },
          { t: 'label', p: [210, 60.6], text: '?', dx: 14, dy: 0 },
        ],
      },
      choices: ['$140\\sqrt{3}$', '$70\\sqrt{3}$', '$\\frac{140\\sqrt{3}}{3}$', '$70$'],
      answer: 1,
      solution:
        'Let $h$ be the height and $d$ the distance from $Q$ to the foot of the mast. From $Q$: $h = d\\tan 60^\\circ = d\\sqrt{3}$. From $P$, which stands $d + 140$ away: $h = (d + 140)\\tan 30^\\circ = \\frac{d + 140}{\\sqrt{3}}$. Setting the two expressions equal gives $3d = d + 140$, so $d = 70$ and $h = 70\\sqrt{3}$ meters ✓. Check a second, independent way with an angle chase and no tangents at all. Call the top $T$. In triangle $PQT$ the angle at $P$ is $30^\\circ$, and the angle $PQT$ is the supplement of the $60^\\circ$ elevation, namely $120^\\circ$, so the angle at $T$ is $180^\\circ - 30^\\circ - 120^\\circ = 30^\\circ$. Two equal angles make the triangle isosceles, so $QT = PQ = 140$. The height is then the vertical leg of the right triangle that $QT$ makes with the ground: $h = 140\\sin 60^\\circ = 140 \\cdot \\frac{\\sqrt{3}}{2} = 70\\sqrt{3}$ ✓. (The choice $140\\sqrt{3}$ is TREATING THE WALK AS THE DISTANCE TO THE FOOT, computing $140\\tan 60^\\circ$ ✗; the choice $\\frac{140\\sqrt{3}}{3}$ is PAIRING THE WALK WITH THE FAR ANGLE, computing $140\\tan 30^\\circ$ ✗; the choice $70$ is STOPPING AT $d$, the ground distance from $Q$, instead of going on to the height ✗.)',
    },
    {
      q: 'Standing at a point $P$ on flat ground, Priya measures the angle of elevation to the top of a lighthouse as $30^\\circ$. She walks $90$ meters straight toward it to a point $Q$, where the angle of elevation is $45^\\circ$. Exactly how tall is the lighthouse?',
      choices: ['$90(\\sqrt{3}+1)$', '$45(\\sqrt{3}-1)$', '$90$', '$45(\\sqrt{3}+1)$'],
      answer: 3,
      solution:
        'Let $h$ be the height and $d$ the ground distance from $Q$ to the base. From $Q$: $h = d\\tan 45^\\circ = d$. From $P$: $h = (d + 90)\\tan 30^\\circ = \\frac{d + 90}{\\sqrt{3}}$. Equating gives $d\\sqrt{3} = d + 90$, so $d(\\sqrt{3} - 1) = 90$ and $h = d = \\frac{90}{\\sqrt{3} - 1}$. Rationalize by multiplying top and bottom by the conjugate $\\sqrt{3} + 1$: the bottom becomes $3 - 1 = 2$, so $h = \\frac{90(\\sqrt{3} + 1)}{2} = 45(\\sqrt{3} + 1)$ meters ✓. Check a second, independent way that writes no tangent and never meets that conjugate. Call the top of the lighthouse $T$ and its base $B$. The $45^\\circ$ sighting makes triangle $QBT$ a $45$-$45$-$90$ triangle, whose hypotenuse is $\\sqrt{2}$ times a leg, so the slant distance is $QT = h\\sqrt{2}$. The $30^\\circ$ sighting makes triangle $PBT$ a $30$-$60$-$90$ triangle, in which the side facing the $30^\\circ$ is half the hypotenuse, so $PT = 2h$. Now work inside triangle $PQT$: its side $PQ$ is the walk of $90$, and its angle at $Q$ is the supplement of the $45^\\circ$ elevation, namely $135^\\circ$. The Law of Cosines says $PT^2 = PQ^2 + QT^2 - 2 \\cdot PQ \\cdot QT\\cos 135^\\circ$, and with $\\cos 135^\\circ = -\\frac{\\sqrt{2}}{2}$ that reads $4h^2 = 8100 + 2h^2 + 2 \\cdot 90 \\cdot h\\sqrt{2} \\cdot \\frac{\\sqrt{2}}{2} = 8100 + 2h^2 + 180h$. Tidying leaves the quadratic $h^2 - 90h - 4050 = 0$, whose roots are $\\frac{90 \\pm \\sqrt{8100 + 16200}}{2} = \\frac{90 \\pm 90\\sqrt{3}}{2}$; a height is positive, so $h = 45(\\sqrt{3} + 1)$ ✓. About $122.9$ meters, comfortably more than the $90$ meters walked. (The choice $90(\\sqrt{3}+1)$ is FORGETTING THE $2$ THE CONJUGATE PRODUCES, leaving the $90$ on top undivided ✗; the choice $45(\\sqrt{3}-1)$ is MULTIPLYING BY $\\sqrt{3}-1$ INSTEAD OF THE CONJUGATE while still writing $2$ underneath ✗; the choice $90$ is READING THE $45^\\circ$ RELATION OFF THE WRONG SEGMENT, setting the height equal to the walk rather than to the distance from $Q$ to the base ✗.)',
    },
    {
      q: 'A hiker at point $P$ sees the summit of a rock tower at an angle of elevation of $30^\\circ$. After walking $50$ meters straight toward the tower to point $Q$, the angle of elevation is $60^\\circ$. How tall is the tower?',
      fig: {
        view: [-8, -8, 88, 54],
        elems: [
          { t: 'poly', pts: [[0, 0], [75, 0], [75, 43.301]], fill: false },
          { t: 'seg', a: [50, 0], b: [75, 43.301] },
          { t: 'right', at: [75, 0], from: [0, 0], to: [75, 43.301] },
          { t: 'angle', at: [0, 0], from: [75, 0], to: [75, 43.301], r: 14, label: '30' },
          { t: 'angle', at: [50, 0], from: [75, 0], to: [75, 43.301], r: 7, label: '60' },
          { t: 'point', p: [0, 0], label: 'P', dx: 0, dy: 16 },
          { t: 'point', p: [50, 0], label: 'Q', dx: -8, dy: 16 },
          { t: 'label', p: [25, 0], text: '50', dx: 0, dy: 16 },
          { t: 'label', p: [75, 21.65], text: '?', dx: 14, dy: 0 },
        ],
      },
      choices: ['$50\\sqrt{3}$', '$\\frac{50\\sqrt{3}}{3}$', '$25\\sqrt{3}$', '$25$'],
      answer: 2,
      solution:
        'Write $h$ for the height and $d$ for the ground distance from $Q$ to the base. From $Q$: $h = d\\tan 60^\\circ = d\\sqrt{3}$. From $P$: $h = (d + 50)\\tan 30^\\circ = \\frac{d + 50}{\\sqrt{3}}$. Equating and clearing the radical gives $3d = d + 50$, so $d = 25$ and $h = 25\\sqrt{3}$ meters ✓. Check a second, independent way with an exterior angle, using no tangents. Let $T$ be the summit. The $60^\\circ$ elevation at $Q$ is an exterior angle of triangle $PQT$, so it equals the sum of the two far angles: $60^\\circ = 30^\\circ + \\angle QTP$, making $\\angle QTP = 30^\\circ$. Triangle $PQT$ therefore has two $30^\\circ$ angles, so $QT = PQ = 50$, and the height is $h = 50\\sin 60^\\circ = 50 \\cdot \\frac{\\sqrt{3}}{2} = 25\\sqrt{3}$ ✓. (The choice $50\\sqrt{3}$ is TREATING THE WALK AS THE DISTANCE TO THE BASE, computing $50\\tan 60^\\circ$ ✗; the choice $\\frac{50\\sqrt{3}}{3}$ is PAIRING THE WALK WITH THE FAR ANGLE, computing $50\\tan 30^\\circ$ ✗; the choice $25$ is STOPPING AT $d$, the ground distance from $Q$, instead of the height ✗.)',
    },
  ],

  // slot 3 — area of a regular hexagon through the sine area formula. Second
  // routes cut the hexagon up without any trigonometry: a rectangle with two
  // triangles (v1), the perimeter-and-apothem formula (v2), and a split into
  // two trapezoids (v3).
  // Lane: side 4 -> 24sqrt3 / side 10 -> 150sqrt3 / side 8 -> 96sqrt3.
  [
    {
      q: 'A regular hexagon has side length $4$. What is its area?',
      fig: {
        view: [-5.2, -4.8, 5.2, 4.8],
        elems: [
          { t: 'poly', pts: [[4, 0], [2, 3.464], [-2, 3.464], [-4, 0], [-2, -3.464], [2, -3.464]], fill: false },
          { t: 'seg', a: [0, 0], b: [4, 0] },
          { t: 'seg', a: [0, 0], b: [2, 3.464] },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [2, 3.464], r: 0.9, label: '60' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'label', p: [3, 1.732], text: '4', dx: 8, dy: -6 },
        ],
      },
      choices: ['$4\\sqrt{3}$', '$48$', '$24\\sqrt{3}$', '$48\\sqrt{3}$'],
      answer: 2,
      solution:
        'Join the center to all six vertices. The six central angles share the full turn, so each is $\\frac{360^\\circ}{6} = 60^\\circ$, and a triangle with a $60^\\circ$ apex between two equal spokes is equilateral — so every spoke equals the side, $4$. One such triangle has area $\\frac{1}{2} \\cdot 4 \\cdot 4 \\cdot \\sin 60^\\circ = 8 \\cdot \\frac{\\sqrt{3}}{2} = 4\\sqrt{3}$, and six of them give $24\\sqrt{3}$ ✓. Check a second, independent way by cutting the hexagon into rectangles and triangles, with no sine anywhere. Set the vertices at $(\\pm 4, 0)$ and $(\\pm 2, \\pm 2\\sqrt{3})$, where the height $2\\sqrt{3}$ comes from the Pythagorean Theorem on the side from $(4, 0)$ to $(2, 2\\sqrt{3})$: $2^2 + (2\\sqrt{3})^2 = 4 + 12 = 16 = 4^2$. The middle strip is a rectangle $4$ wide and $4\\sqrt{3}$ tall, area $16\\sqrt{3}$; the left and right caps are triangles with a vertical base of $4\\sqrt{3}$ and a height of $2$, area $\\frac{1}{2} \\cdot 4\\sqrt{3} \\cdot 2 = 4\\sqrt{3}$ each. Together: $16\\sqrt{3} + 4\\sqrt{3} + 4\\sqrt{3} = 24\\sqrt{3}$ ✓. (The choice $4\\sqrt{3}$ is STOPPING AFTER ONE OF THE SIX TRIANGLES ✗; the choice $48$ is DROPPING THE SINE FACTOR, computing $6 \\cdot \\frac{1}{2} \\cdot 4 \\cdot 4$ ✗; the choice $48\\sqrt{3}$ is FORGETTING THE $\\frac{1}{2}$ in the triangle area formula ✗.)',
    },
    {
      q: 'A hexagonal paving stone is a regular hexagon with side length $10$. What is its area?',
      choices: ['$150\\sqrt{3}$', '$25\\sqrt{3}$', '$300$', '$300\\sqrt{3}$'],
      answer: 0,
      solution:
        'Run spokes from the center to the six vertices. Each central angle is $\\frac{360^\\circ}{6} = 60^\\circ$, and an isosceles triangle with a $60^\\circ$ apex is equilateral, so each spoke is $10$. One triangle covers $\\frac{1}{2} \\cdot 10 \\cdot 10 \\cdot \\sin 60^\\circ = 50 \\cdot \\frac{\\sqrt{3}}{2} = 25\\sqrt{3}$, and six of them make $150\\sqrt{3}$ ✓. Check a second, independent way with the perimeter-and-apothem formula, which uses the Pythagorean Theorem in place of any sine. The apothem is the distance from the center to the midpoint of a side; it is a leg of a right triangle whose hypotenuse is the spoke $10$ and whose other leg is half a side, $5$. So the apothem is $\\sqrt{100 - 25} = \\sqrt{75} = 5\\sqrt{3}$. Any regular polygon has area $\\frac{1}{2} \\cdot \\text{perimeter} \\cdot \\text{apothem}$, giving $\\frac{1}{2} \\cdot 60 \\cdot 5\\sqrt{3} = 150\\sqrt{3}$ ✓. (The choice $25\\sqrt{3}$ is STOPPING AFTER ONE OF THE SIX TRIANGLES ✗; the choice $300$ is DROPPING THE SINE FACTOR, computing $6 \\cdot \\frac{1}{2} \\cdot 10 \\cdot 10$ ✗; the choice $300\\sqrt{3}$ is FORGETTING THE $\\frac{1}{2}$ in the triangle area formula ✗.)',
    },
    {
      q: 'A regular hexagon has side length $8$. What is its area?',
      fig: {
        view: [-10.4, -9.4, 10.4, 9.4],
        elems: [
          { t: 'poly', pts: [[8, 0], [4, 6.928], [-4, 6.928], [-8, 0], [-4, -6.928], [4, -6.928]], fill: false },
          { t: 'seg', a: [-8, 0], b: [8, 0], dash: true },
          { t: 'label', p: [6, 3.464], text: '8', dx: 10, dy: -6 },
        ],
      },
      choices: ['$16\\sqrt{3}$', '$192$', '$192\\sqrt{3}$', '$96\\sqrt{3}$'],
      answer: 3,
      solution:
        'Draw the six spokes from the center. Each central angle is $\\frac{360^\\circ}{6} = 60^\\circ$, so each central triangle is isosceles with a $60^\\circ$ apex and therefore equilateral, with spokes of length $8$. One triangle is $\\frac{1}{2} \\cdot 8 \\cdot 8 \\cdot \\sin 60^\\circ = 32 \\cdot \\frac{\\sqrt{3}}{2} = 16\\sqrt{3}$, and six give $96\\sqrt{3}$ ✓. Check a second, independent way by slicing along the long diagonal shown, which turns the hexagon into two congruent trapezoids and needs no sine. Each trapezoid has parallel sides $16$ (the long diagonal) and $8$ (the far side), and its height is the distance between them. That height is a leg of a right triangle with hypotenuse $8$ and other leg $4$, so it equals $\\sqrt{64 - 16} = \\sqrt{48} = 4\\sqrt{3}$. One trapezoid is $\\frac{1}{2}(16 + 8)(4\\sqrt{3}) = 48\\sqrt{3}$, and the two together are $96\\sqrt{3}$ ✓. (The choice $16\\sqrt{3}$ is STOPPING AFTER ONE OF THE SIX TRIANGLES ✗; the choice $192$ is DROPPING THE SINE FACTOR, computing $6 \\cdot \\frac{1}{2} \\cdot 8 \\cdot 8$ ✗; the choice $192\\sqrt{3}$ is FORGETTING THE $\\frac{1}{2}$ in the triangle area formula ✗.)',
    },
  ],

  // slot 4 — a diagonal of a parallelogram. Route one is the Law of Cosines on
  // the right one of the two triangles; route two drops the parallelogram onto
  // coordinates and uses the distance formula. Neither diagonal is drawn.
  // Lane: 6 & 8 at 60, longer -> 2sqrt37 / 6 & 9 at 120, longer -> 3sqrt19 /
  // 4 & 9 at 60, shorter -> sqrt61.
  [
    {
      q: 'A parallelogram has sides $6$ and $8$, meeting at a $60^\\circ$ angle. How long is its longer diagonal?',
      fig: {
        view: [-1.4, -1.6, 12.6, 7],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [11, 5.196], [3, 5.196]], fill: false },
          { t: 'angle', at: [0, 0], from: [8, 0], to: [3, 5.196], r: 1.3, label: '60' },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [1.5, 2.598], text: '6', dx: -10, dy: -4 },
        ],
      },
      choices: ['$2\\sqrt{37}$', '$2\\sqrt{13}$', '$10$', '$14$'],
      answer: 0,
      solution:
        'Each diagonal cuts the parallelogram into two triangles, and the two diagonals sit opposite different angles. Consecutive angles of a parallelogram are supplementary, so the angles available are $60^\\circ$ and $120^\\circ$. Since $\\cos 120^\\circ$ is negative, the Law of Cosines subtracts a negative and stretches the side, so the longer diagonal is the one across from $120^\\circ$: $d^2 = 6^2 + 8^2 - 2 \\cdot 6 \\cdot 8\\cos 120^\\circ = 100 + 48 = 148$, giving $d = \\sqrt{148} = 2\\sqrt{37}$ ✓. Check a second, independent way with coordinates and the distance formula. Put the $60^\\circ$ corner at the origin with the side of length $8$ along the $x$-axis, reaching $(8, 0)$. The side of length $6$ leaves the origin at $60^\\circ$, landing at $\\left(6\\cos 60^\\circ, 6\\sin 60^\\circ\\right) = (3, 3\\sqrt{3})$, and the fourth corner is $(8, 0) + (3, 3\\sqrt{3}) = (11, 3\\sqrt{3})$. The two diagonals run from $(0, 0)$ to $(11, 3\\sqrt{3})$, of squared length $121 + 27 = 148$, and from $(8, 0)$ to $(3, 3\\sqrt{3})$, of squared length $25 + 27 = 52$. The longer is $\\sqrt{148} = 2\\sqrt{37} \\approx 12.17$ ✓. (The choice $2\\sqrt{13}$ is TAKING THE DIAGONAL ACROSS FROM THE GIVEN $60^\\circ$ ANGLE, which is the shorter one ✗; the choice $10$ is DROPPING THE CORRECTION TERM ENTIRELY, as if the corner were a right angle ✗; the choice $14$ is ADDING THE TWO SIDE LENGTHS, a route that would only ever work if the parallelogram flattened out completely ✗.)',
    },
    {
      q: 'A parallelogram has sides $6$ and $9$, meeting at a $120^\\circ$ angle. How long is its longer diagonal?',
      fig: {
        view: [-4.6, -1.6, 11.2, 7.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [6, 5.196], [-3, 5.196]], fill: false },
          { t: 'angle', at: [0, 0], from: [9, 0], to: [-3, 5.196], r: 1.4, label: '120' },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [-1.5, 2.598], text: '6', dx: -10, dy: -4 },
        ],
      },
      choices: ['$3\\sqrt{7}$', '$3\\sqrt{13}$', '$3\\sqrt{19}$', '$15$'],
      answer: 2,
      solution:
        'The angles of the parallelogram are $120^\\circ$ and its supplement $60^\\circ$, and each diagonal faces one of them. An obtuse angle has a negative cosine, so the Law of Cosines adds to $a^2 + b^2$ there and the longer diagonal is the one across from $120^\\circ$ — the angle we were handed: $d^2 = 6^2 + 9^2 - 2 \\cdot 6 \\cdot 9\\cos 120^\\circ = 117 + 54 = 171$, so $d = \\sqrt{171} = 3\\sqrt{19}$ ✓. Check a second, independent way on coordinates. Place the $120^\\circ$ corner at the origin with the $9$-side along the $x$-axis at $(9, 0)$; the $6$-side leaves at $120^\\circ$, landing at $\\left(6\\cos 120^\\circ, 6\\sin 120^\\circ\\right) = (-3, 3\\sqrt{3})$, and the fourth corner is $(6, 3\\sqrt{3})$. The diagonal from $(-3, 3\\sqrt{3})$ to $(9, 0)$ has squared length $144 + 27 = 171$, while the other, from $(0, 0)$ to $(6, 3\\sqrt{3})$, has squared length $36 + 27 = 63$. The longer measures $\\sqrt{171} = 3\\sqrt{19} \\approx 13.08$ ✓. (The choice $3\\sqrt{7}$ is SUBSTITUTING THE SUPPLEMENT $60^\\circ$ IN PLACE OF THE GIVEN $120^\\circ$, which produces $\\sqrt{63}$, the shorter diagonal ✗; the choice $3\\sqrt{13}$ is DROPPING THE CORRECTION TERM, leaving only $\\sqrt{117}$ ✗; the choice $15$ is ADDING THE TWO SIDE LENGTHS instead of measuring across the parallelogram ✗.)',
    },
    {
      q: 'A parallelogram has sides $4$ and $9$, meeting at a $60^\\circ$ angle. How long is its shorter diagonal?',
      choices: ['$\\sqrt{133}$', '$\\sqrt{61}$', '$\\sqrt{97}$', '$5$'],
      answer: 1,
      solution:
        'The two angles of the parallelogram are $60^\\circ$ and $120^\\circ$, and each diagonal spans one of them. A positive cosine shrinks the answer, so the shorter diagonal is the one across from the acute $60^\\circ$ — the angle stated in the problem: $d^2 = 4^2 + 9^2 - 2 \\cdot 4 \\cdot 9\\cos 60^\\circ = 97 - 36 = 61$, so $d = \\sqrt{61}$ ✓. Check a second, independent way with coordinates. Anchor the $60^\\circ$ corner at the origin, run the $9$-side along the $x$-axis to $(9, 0)$, and send the $4$-side off at $60^\\circ$ to $\\left(4\\cos 60^\\circ, 4\\sin 60^\\circ\\right) = (2, 2\\sqrt{3})$; the fourth corner is $(11, 2\\sqrt{3})$. The diagonal joining $(9, 0)$ to $(2, 2\\sqrt{3})$ has squared length $49 + 12 = 61$, and the one joining $(0, 0)$ to $(11, 2\\sqrt{3})$ has squared length $121 + 12 = 133$. The shorter is $\\sqrt{61} \\approx 7.81$ ✓. (The choice $\\sqrt{133}$ is REPORTING THE LONGER DIAGONAL, the one facing the supplement $120^\\circ$ ✗; the choice $\\sqrt{97}$ is DROPPING THE CORRECTION TERM, as though the corner were right ✗; the choice $5$ is SUBTRACTING THE TWO SIDE LENGTHS, $9 - 4$, which is a lower bound the diagonal never reaches ✗.)',
    },
  ],

  // slot 5 — recover the angle from an exact ratio. Route one builds the
  // special right triangle that produces the ratio; route two derives the same
  // angle from a chord of the unit circle and only then walks the remaining
  // candidates out one at a time, which is what catches the range trap.
  // Lane: sin = 1/2 acute -> 30 / cos = 1/2 on [0,180] -> 60 /
  // sin = sqrt2/2 acute -> 45.
  [
    {
      q: 'The angle $\\theta$ is acute and $\\sin\\theta = \\frac{1}{2}$. What is $\\theta$?',
      choices: ['$150^\\circ$', '$60^\\circ$', '$30^\\circ$', '$45^\\circ$'],
      answer: 2,
      solution:
        'Build the triangle that makes this ratio. Cut an equilateral triangle of side $2$ in half along an altitude: each half is a right triangle with hypotenuse $2$, short leg $1$, and a smallest angle of $\\frac{60^\\circ}{2} = 30^\\circ$ facing that short leg. So $\\sin 30^\\circ = \\frac{1}{2}$, and since $\\theta$ is acute, $\\theta = 30^\\circ$ ✓. Check a second, independent way with a chord of the unit circle. Let $O$ be the center and $P$ the point at angle $\\theta$, whose height above the $x$-axis is $\\sin\\theta = \\frac{1}{2}$. Its mirror image $M$ across the $x$-axis sits the same $\\frac{1}{2}$ below, so the chord $PM$ has length $1$ — exactly one radius. Triangle $OPM$ then has all three sides equal to $1$, so it is equilateral and its angle at $O$ is $60^\\circ$; the $x$-axis is the mirror line, so it splits that angle evenly and leaves $30^\\circ$ between $OP$ and the axis. For an acute $\\theta$ that gap is $\\theta$ itself, so $\\theta = 30^\\circ$ ✓. The other listed angles now fall away for reasons of their own: $150^\\circ$ stands at the same height but is obtuse, while $60^\\circ$ and $45^\\circ$ reach heights $\\frac{\\sqrt{3}}{2}$ and $\\frac{\\sqrt{2}}{2}$, both above $\\frac{1}{2}$. (The choice $150^\\circ$ is IGNORING THE ACUTE CONDITION and taking the obtuse partner, which shares the same height ✗; the choice $60^\\circ$ is READING THE RATIO AS A COSINE, since $\\cos 60^\\circ = \\frac{1}{2}$ ✗; the choice $45^\\circ$ is MISMATCHING $\\frac{1}{2}$ WITH $\\frac{\\sqrt{2}}{2}$, the two entries that both look like "one half" of something ✗.)',
    },
    {
      q: 'The angle $\\theta$ satisfies $0^\\circ \\le \\theta \\le 180^\\circ$ and $\\cos\\theta = \\frac{1}{2}$. What is $\\theta$?',
      choices: ['$60^\\circ$', '$120^\\circ$', '$30^\\circ$', '$45^\\circ$'],
      answer: 0,
      solution:
        'Find the triangle behind the ratio. Half of an equilateral triangle of side $2$ is a right triangle with hypotenuse $2$ and legs $1$ and $\\sqrt{3}$, and the angle at the base of the original triangle is $60^\\circ$ with the leg of length $1$ beside it. So $\\cos 60^\\circ = \\frac{1}{2}$. Unlike a sine, a cosine names its angle uniquely on $0^\\circ \\le \\theta \\le 180^\\circ$, because the $x$-coordinate slides steadily from $1$ down to $-1$ and never repeats a value, so $\\theta = 60^\\circ$ and no extra condition is needed ✓. Check a second, independent way with a chord of the unit circle. Let $O$ be the center, $A = (1, 0)$ the point at angle $0^\\circ$, and $P$ the point at angle $\\theta$, so $P$ has $x$-coordinate $\\frac{1}{2}$ and, from $x^2 + y^2 = 1$, a height with $y^2 = \\frac{3}{4}$. Then $AP^2 = \\left(1 - \\frac{1}{2}\\right)^2 + \\frac{3}{4} = \\frac{1}{4} + \\frac{3}{4} = 1$, so the chord $AP$ is exactly one radius long. Triangle $OAP$ has all three sides equal to $1$, making it equilateral, and the angle it opens at the center is the sweep from $A$ to $P$: $\\theta = 60^\\circ$ ✓. The remaining candidates fail on their own terms: $120^\\circ$ sits on the left half of the circle, where the $x$-coordinate is negative, and $30^\\circ$ and $45^\\circ$ sit further right, at $\\frac{\\sqrt{3}}{2}$ and $\\frac{\\sqrt{2}}{2}$. (The choice $120^\\circ$ is ATTACHING A MINUS SIGN THAT WAS NEVER THERE, solving $\\cos\\theta = -\\frac{1}{2}$ instead ✗; the choice $30^\\circ$ is READING THE RATIO AS A SINE, since $\\sin 30^\\circ = \\frac{1}{2}$ ✗; the choice $45^\\circ$ is MISMATCHING $\\frac{1}{2}$ WITH $\\frac{\\sqrt{2}}{2}$ ✗.)',
    },
    {
      q: 'The angle $\\theta$ is acute and $\\sin\\theta = \\frac{\\sqrt{2}}{2}$. What is $\\theta$?',
      choices: ['$135^\\circ$', '$30^\\circ$', '$60^\\circ$', '$45^\\circ$'],
      answer: 3,
      solution:
        'Build the triangle that gives this ratio. A right triangle with two legs of length $1$ has hypotenuse $\\sqrt{1 + 1} = \\sqrt{2}$, and its two acute angles are equal, so each is $\\frac{90^\\circ}{2} = 45^\\circ$. That makes $\\sin 45^\\circ = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$, and the acute condition settles it: $\\theta = 45^\\circ$ ✓. Check a second, independent way with two chords of the unit circle. Let $O$ be the center, $A = (1, 0)$ the point at angle $0^\\circ$, $B = (0, 1)$ the point at angle $90^\\circ$, and $P$ the point at angle $\\theta$, whose height is $\\frac{\\sqrt{2}}{2}$. From $x^2 + y^2 = 1$, $x^2 = 1 - \\frac{1}{2} = \\frac{1}{2}$, and an acute $\\theta$ keeps $x$ positive, so $x = \\frac{\\sqrt{2}}{2}$ as well. Then $AP^2 = \\left(1 - \\frac{\\sqrt{2}}{2}\\right)^2 + \\frac{1}{2} = 2 - \\sqrt{2}$, and $BP^2 = \\frac{1}{2} + \\left(\\frac{\\sqrt{2}}{2} - 1\\right)^2 = 2 - \\sqrt{2}$ as well. Equal chords cut off equal arcs, so $P$ divides the quarter arc from $A$ to $B$ into two equal pieces and $\\theta = \\frac{90^\\circ}{2} = 45^\\circ$ ✓. The remaining candidates fail on their own terms: $135^\\circ$ shares the height but is obtuse, while $30^\\circ$ and $60^\\circ$ stand at heights $\\frac{1}{2}$ and $\\frac{\\sqrt{3}}{2}$, one below the given value and one above. (The choice $135^\\circ$ is IGNORING THE ACUTE CONDITION and taking the obtuse mirror image, which sits at the same height ✗; the choice $30^\\circ$ is MISMATCHING $\\frac{\\sqrt{2}}{2}$ WITH $\\frac{1}{2}$ ✗; the choice $60^\\circ$ is MISMATCHING $\\frac{\\sqrt{2}}{2}$ WITH $\\frac{\\sqrt{3}}{2}$, the other radical entry in the table ✗.)',
    },
  ],

  // slot 6 — an isosceles triangle given by its two equal base angles and the
  // side opposite one of them. Route one is the Law of Sines; route two never
  // uses it, reaching for the Pythagorean Theorem (v1) or the Law of Cosines
  // (v2, v3) on the isosceles pair.
  // Lane: 45/45 with a = 5 -> 5sqrt2 / 30/30 with a = 6 -> 6sqrt3 /
  // 45/45 with a = 9 -> 9sqrt2.
  [
    {
      q: 'In triangle $ABC$, $\\angle A = \\angle B = 45^\\circ$ and the side $a$ opposite $\\angle A$ has length $5$. Find $c$, the side opposite $\\angle C$.',
      fig: {
        view: [-1.5, -1.6, 8.6, 5.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [7.071, 0], [3.536, 3.536]], fill: false },
          { t: 'angle', at: [0, 0], from: [7.071, 0], to: [3.536, 3.536], r: 1.1, label: '45' },
          { t: 'angle', at: [7.071, 0], from: [0, 0], to: [3.536, 3.536], r: 1.1, label: '45' },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 10 },
          { t: 'point', p: [7.071, 0], label: 'B', dx: 12, dy: 10 },
          { t: 'point', p: [3.536, 3.536], label: 'C', dx: 0, dy: -12 },
          { t: 'label', p: [5.303, 1.768], text: '5', dx: 10, dy: -4 },
          { t: 'label', p: [3.536, 0], text: '?', dx: 0, dy: 15 },
        ],
      },
      choices: ['$5$', '$5\\sqrt{2}$', '$\\frac{5\\sqrt{2}}{2}$', '$10$'],
      answer: 1,
      solution:
        'The angles add to $180^\\circ$, so $\\angle C = 180^\\circ - 45^\\circ - 45^\\circ = 90^\\circ$. The Law of Sines pairs each side with the angle facing it: $\\frac{c}{\\sin C} = \\frac{a}{\\sin A}$, so $c = \\frac{5\\sin 90^\\circ}{\\sin 45^\\circ} = \\frac{5 \\cdot 1}{\\frac{\\sqrt{2}}{2}} = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$ ✓. Check a second, independent way with the Pythagorean Theorem and no Law of Sines at all. Equal angles at $A$ and $B$ mean the sides facing them are equal, so $b = a = 5$. Those two sides meet at $C$, where the angle is $90^\\circ$, which makes them the legs of a right triangle with $c$ as the hypotenuse: $c = \\sqrt{5^2 + 5^2} = \\sqrt{50} = 5\\sqrt{2}$ ✓. About $7.07$, longer than either equal side, exactly as the largest angle demands. (The choice $5$ is ASSUMING ALL THREE SIDES MATCH because two of the angles do, though only two sides are forced equal ✗; the choice $\\frac{5\\sqrt{2}}{2}$ is FLIPPING THE LAW OF SINES UPSIDE DOWN, computing $\\frac{5\\sin 45^\\circ}{\\sin 90^\\circ}$ ✗; the choice $10$ is USING $\\sin 30^\\circ$ IN PLACE OF $\\sin 45^\\circ$, which turns the divisor into $\\frac{1}{2}$ ✗.)',
    },
    {
      q: 'In triangle $ABC$, $\\angle A = \\angle B = 30^\\circ$ and the side $a$ opposite $\\angle A$ has length $6$. Find $c$, the side opposite $\\angle C$.',
      fig: {
        view: [-1.5, -1.6, 12, 4.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [10.392, 0], [5.196, 3]], fill: false },
          { t: 'angle', at: [0, 0], from: [10.392, 0], to: [5.196, 3], r: 1.4, label: '30' },
          { t: 'angle', at: [10.392, 0], from: [0, 0], to: [5.196, 3], r: 1.4, label: '30' },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 10 },
          { t: 'point', p: [10.392, 0], label: 'B', dx: 12, dy: 10 },
          { t: 'point', p: [5.196, 3], label: 'C', dx: 0, dy: -12 },
          { t: 'label', p: [7.794, 1.5], text: '6', dx: 10, dy: -4 },
          { t: 'label', p: [5.196, 0], text: '?', dx: 0, dy: 15 },
        ],
      },
      choices: ['$6$', '$2\\sqrt{3}$', '$12$', '$6\\sqrt{3}$'],
      answer: 3,
      solution:
        'First the missing angle: $\\angle C = 180^\\circ - 30^\\circ - 30^\\circ = 120^\\circ$. Then the Law of Sines, matching each side to the angle across from it: $c = \\frac{a\\sin C}{\\sin A} = \\frac{6\\sin 120^\\circ}{\\sin 30^\\circ} = \\frac{6 \\cdot \\frac{\\sqrt{3}}{2}}{\\frac{1}{2}} = 6\\sqrt{3}$ ✓. Check a second, independent way with the Law of Cosines, which never divides by a sine. Equal base angles make the opposite sides equal, so $b = a = 6$, and those two sides meet at the $120^\\circ$ angle $C$: $c^2 = 6^2 + 6^2 - 2 \\cdot 6 \\cdot 6\\cos 120^\\circ = 72 + 36 = 108$, so $c = \\sqrt{108} = 6\\sqrt{3}$ ✓. About $10.39$ — longer than $6$, which is what the obtuse angle should produce. (The choice $6$ is ASSUMING ALL THREE SIDES MATCH because two angles do ✗; the choice $2\\sqrt{3}$ is FLIPPING THE LAW OF SINES UPSIDE DOWN, computing $\\frac{6\\sin 30^\\circ}{\\sin 120^\\circ}$ ✗; the choice $12$ is MISCOUNTING THE THIRD ANGLE AS $90^\\circ$, which replaces $\\sin 120^\\circ$ by $1$ ✗.)',
    },
    {
      q: 'In triangle $ABC$, $\\angle A = \\angle B = 45^\\circ$ and the side $a$ opposite $\\angle A$ has length $9$. Find $c$, the side opposite $\\angle C$.',
      choices: ['$9$', '$\\frac{9\\sqrt{2}}{2}$', '$9\\sqrt{2}$', '$18$'],
      answer: 2,
      solution:
        'The third angle is $\\angle C = 180^\\circ - 45^\\circ - 45^\\circ = 90^\\circ$, so the Law of Sines gives $c = \\frac{a\\sin C}{\\sin A} = \\frac{9 \\cdot 1}{\\frac{\\sqrt{2}}{2}} = \\frac{18}{\\sqrt{2}} = 9\\sqrt{2}$ ✓. Check a second, independent way with the Law of Cosines, which needs no sine in a denominator. Equal angles at $A$ and $B$ force $b = a = 9$, and these two sides meet at $C$: $c^2 = 9^2 + 9^2 - 2 \\cdot 9 \\cdot 9\\cos 90^\\circ$. Since $\\cos 90^\\circ = 0$ the correction term vanishes and $c^2 = 162$, so $c = 9\\sqrt{2}$ ✓ — the Law of Cosines quietly handing back the Pythagorean Theorem, as it always does at a right angle. (The choice $9$ is ASSUMING ALL THREE SIDES MATCH because two of the angles do ✗; the choice $\\frac{9\\sqrt{2}}{2}$ is FLIPPING THE LAW OF SINES UPSIDE DOWN, computing $\\frac{9\\sin 45^\\circ}{\\sin 90^\\circ}$ ✗; the choice $18$ is USING $\\sin 30^\\circ$ IN PLACE OF $\\sin 45^\\circ$ in the denominator ✗.)',
    },
  ],

  // slot 7 — two hinged rods, largest possible triangle. Route one maximizes
  // (1/2)ab sin(theta); route two fixes one rod as a base and argues that the
  // greatest possible height is the other rod standing straight up. No figure,
  // because drawing any single hinge angle would prejudge the answer.
  // Lane: 8 & 10 -> 40 / 7 & 12 -> 42 / 5 & 9 -> 45/2.
  [
    {
      q: 'Two rods of lengths $8$ and $10$ are hinged together at one end, and the hinge opens to any angle. Joining the two free ends makes a triangle. What is the largest area that triangle can have?',
      choices: ['$80$', '$20\\sqrt{3}$', '$20$', '$40$'],
      answer: 3,
      solution:
        'The rods are the two sides meeting at the hinge, so the area is $\\frac{1}{2} \\cdot 8 \\cdot 10 \\cdot \\sin\\theta = 40\\sin\\theta$, where $\\theta$ is the hinge angle. The rod lengths never change, so the whole question is how big $\\sin\\theta$ can get — and a sine never exceeds $1$, reaching $1$ exactly at $\\theta = 90^\\circ$. The largest area is $40$ ✓. Check a second, independent way with base times height and no trigonometry. Lay the $10$-rod flat as the base and let the $8$-rod swing about the hinge. Its free end traces a circle of radius $8$ about the hinge, so that end can never rise more than $8$ above the base line, and it reaches exactly $8$ when the $8$-rod points straight up. The area is $\\frac{1}{2} \\cdot \\text{base} \\cdot \\text{height} \\le \\frac{1}{2} \\cdot 10 \\cdot 8 = 40$, with equality at the upright position ✓. (The choice $80$ is FORGETTING THE $\\frac{1}{2}$ and reporting the product of the rods ✗; the choice $20\\sqrt{3}$ is ASSUMING THE BEST HINGE ANGLE IS $60^\\circ$, which gives $40\\sin 60^\\circ$ ✗; the choice $20$ is ASSUMING THE BEST HINGE ANGLE IS $30^\\circ$, which gives $40\\sin 30^\\circ$ ✗.)',
    },
    {
      q: 'Two rods of lengths $7$ and $12$ are hinged at one end and can be opened to any angle. Their free ends are joined by a straight cord, forming a triangle. What is the greatest possible area of that triangle?',
      choices: ['$84$', '$42$', '$21\\sqrt{3}$', '$21$'],
      answer: 1,
      solution:
        'The two rods are sides meeting at the hinge angle $\\theta$, so the area is $\\frac{1}{2} \\cdot 7 \\cdot 12 \\cdot \\sin\\theta = 42\\sin\\theta$. Only $\\sin\\theta$ can change, and its ceiling is $1$, hit exactly at $\\theta = 90^\\circ$, so the greatest area is $42$ ✓. Check a second, independent way without a sine in sight. Treat the $12$-rod as a fixed base along a line. The far end of the $7$-rod stays $7$ away from the hinge, so it can rise at most $7$ above that line, and it reaches $7$ precisely when the $7$-rod stands perpendicular to the base. Therefore the area is at most $\\frac{1}{2} \\cdot 12 \\cdot 7 = 42$, achieved at the right-angled hinge ✓. (The choice $84$ is FORGETTING THE $\\frac{1}{2}$ and quoting the product of the two rods ✗; the choice $21\\sqrt{3}$ is ASSUMING THE BEST HINGE ANGLE IS $60^\\circ$, which gives $42\\sin 60^\\circ$ ✗; the choice $21$ is ASSUMING THE BEST HINGE ANGLE IS $30^\\circ$, which gives $42\\sin 30^\\circ$ ✗.)',
    },
    {
      q: 'A folding easel is built from two rods of lengths $5$ and $9$ hinged at one end, with a strap joining the free ends. What is the largest area the resulting triangle can enclose?',
      choices: ['$\\frac{45}{2}$', '$45$', '$\\frac{45\\sqrt{3}}{4}$', '$\\frac{45}{4}$'],
      answer: 0,
      solution:
        'With $\\theta$ as the hinge angle, the two rods are the sides enclosing it, so the area is $\\frac{1}{2} \\cdot 5 \\cdot 9 \\cdot \\sin\\theta = \\frac{45}{2}\\sin\\theta$. The rods are fixed, so the area is largest exactly when $\\sin\\theta$ is largest, and $\\sin\\theta = 1$ at $\\theta = 90^\\circ$: the maximum is $\\frac{45}{2}$ ✓. Check a second, independent way using only base and height. Hold the $9$-rod flat as the base. The free end of the $5$-rod is always $5$ from the hinge, so its height above the base line is at most $5$, and equals $5$ only when the $5$-rod is upright. Hence the area is at most $\\frac{1}{2} \\cdot 9 \\cdot 5 = \\frac{45}{2}$, or $22.5$ ✓. (The choice $45$ is FORGETTING THE $\\frac{1}{2}$ and giving the product of the rods ✗; the choice $\\frac{45\\sqrt{3}}{4}$ is ASSUMING THE BEST HINGE ANGLE IS $60^\\circ$, which gives $\\frac{45}{2}\\sin 60^\\circ$ ✗; the choice $\\frac{45}{4}$ is ASSUMING THE BEST HINGE ANGLE IS $30^\\circ$, which gives $\\frac{45}{2}\\sin 30^\\circ$ ✗.)',
    },
  ],

  // slot 8 — approximate area from two sides and the included angle, with the
  // sine and cosine supplied. Route one is the sine area formula; route two
  // spends the supplied cosine on the foot of the altitude and then recovers
  // the height from the Pythagorean Theorem, so the sine never appears.
  // Lane: 20 & 7 at 37 -> 42 / 15 & 8 at 53 -> 48 / 25 & 4 at 37 -> 30.
  [
    {
      q: 'Two sides of a triangle measure $20$ and $7$, and the angle between them is $37^\\circ$. Given $\\sin 37^\\circ \\approx 0.6$ and $\\cos 37^\\circ \\approx 0.8$, what is the approximate area of the triangle?',
      fig: {
        view: [-1.5, -2, 22.5, 7],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [5.6, 4.2]], fill: false },
          { t: 'angle', at: [0, 0], from: [20, 0], to: [5.6, 4.2], r: 2.4, label: '37' },
          { t: 'label', p: [11, 0], text: '20', dx: 0, dy: 15 },
          { t: 'label', p: [2.8, 2.1], text: '7', dx: -9, dy: -7 },
        ],
      },
      choices: ['$42$', '$56$', '$84$', '$70$'],
      answer: 0,
      solution:
        'Two sides and the angle wedged between them is exactly what the sine area formula wants: Area $= \\frac{1}{2} \\cdot 20 \\cdot 7 \\cdot \\sin 37^\\circ \\approx 70 \\times 0.6 = 42$ ✓. Check a second, independent way that spends the given cosine and never touches the sine. Take the $20$-side as the base and drop the altitude to it from the opposite vertex. The cosine is what places the foot of that altitude: measured from the $37^\\circ$ corner it stands $7\\cos 37^\\circ \\approx 7 \\times 0.8 = 5.6$ along the base. That foot, the corner, and the vertex form a right triangle whose hypotenuse is the $7$-side, so the Pythagorean Theorem hands over the height: $h^2 \\approx 49 - 31.36 = 17.64$, giving $h \\approx 4.2$. Base times height and halve: $\\frac{1}{2} \\cdot 20 \\cdot 4.2 = 42$ ✓. (The choice $56$ is USING THE COSINE INSTEAD OF THE SINE, computing $70 \\times 0.8$, though only the sine converts a slanted side into a height ✗; the choice $84$ is FORGETTING THE $\\frac{1}{2}$, stopping at $20 \\times 7 \\times 0.6$ ✗; the choice $70$ is DROPPING THE SINE FACTOR ALTOGETHER, computing $\\frac{1}{2} \\cdot 20 \\cdot 7$ as if the angle were right ✗.)',
    },
    {
      q: 'Two sides of a triangle measure $15$ and $8$, and the angle between them is $53^\\circ$. Given $\\sin 53^\\circ \\approx 0.8$ and $\\cos 53^\\circ \\approx 0.6$, what is the approximate area of the triangle?',
      fig: {
        view: [-1.5, -2, 17.5, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [4.8, 6.4]], fill: false },
          { t: 'angle', at: [0, 0], from: [15, 0], to: [4.8, 6.4], r: 2, label: '53' },
          { t: 'label', p: [8.5, 0], text: '15', dx: 0, dy: 15 },
          { t: 'label', p: [2.4, 3.2], text: '8', dx: -10, dy: -4 },
        ],
      },
      choices: ['$36$', '$96$', '$48$', '$60$'],
      answer: 2,
      solution:
        'The given data are two sides and the included angle, so the sine area formula applies straight away: Area $= \\frac{1}{2} \\cdot 15 \\cdot 8 \\cdot \\sin 53^\\circ \\approx 60 \\times 0.8 = 48$ ✓. Check a second, independent way that leans on the cosine and leaves the sine alone. Use the $15$-side as the base and drop the altitude to it from the opposite vertex. The cosine locates the foot: it sits $8\\cos 53^\\circ \\approx 8 \\times 0.6 = 4.8$ from the $53^\\circ$ corner along the base. The $8$-side is the hypotenuse of the right triangle standing on that stretch, so the Pythagorean Theorem gives the height as $h^2 \\approx 64 - 23.04 = 40.96$, or $h \\approx 6.4$. The area is then $\\frac{1}{2} \\cdot 15 \\cdot 6.4 = 48$ ✓. (The choice $36$ is USING THE COSINE INSTEAD OF THE SINE, computing $60 \\times 0.6$ ✗; the choice $96$ is FORGETTING THE $\\frac{1}{2}$, stopping at $15 \\times 8 \\times 0.8$ ✗; the choice $60$ is DROPPING THE SINE FACTOR, computing $\\frac{1}{2} \\cdot 15 \\cdot 8$ as though the included angle were right ✗.)',
    },
    {
      q: 'A triangular sail has two edges of lengths $25$ and $4$ meeting at an angle of $37^\\circ$. Given $\\sin 37^\\circ \\approx 0.6$ and $\\cos 37^\\circ \\approx 0.8$, what is the approximate area of the sail?',
      choices: ['$40$', '$30$', '$60$', '$50$'],
      answer: 1,
      solution:
        'Two edges and the angle between them call for the sine area formula: Area $= \\frac{1}{2} \\cdot 25 \\cdot 4 \\cdot \\sin 37^\\circ \\approx 50 \\times 0.6 = 30$ ✓. Check a second, independent way that uses the cosine and never calls on the sine. Treat the $25$-edge as the base and drop the altitude to it from the third corner. The cosine fixes where the foot lands: $4\\cos 37^\\circ \\approx 4 \\times 0.8 = 3.2$ from the $37^\\circ$ corner. The $4$-edge is the hypotenuse of the right triangle over that stretch, so the Pythagorean Theorem gives $h^2 \\approx 16 - 10.24 = 5.76$ and $h \\approx 2.4$. Halving base times height gives $\\frac{1}{2} \\cdot 25 \\cdot 2.4 = 30$ ✓. (The choice $40$ is USING THE COSINE INSTEAD OF THE SINE, computing $50 \\times 0.8$ ✗; the choice $60$ is FORGETTING THE $\\frac{1}{2}$, stopping at $25 \\times 4 \\times 0.6$ ✗; the choice $50$ is DROPPING THE SINE FACTOR, computing $\\frac{1}{2} \\cdot 25 \\cdot 4$ ✗.)',
    },
  ],

  // slot 9 — Law of Cosines at 45 degrees, with one side carrying a sqrt2 so
  // the radical in cos 45 cancels. Route two puts the 45-degree corner at the
  // origin, where the sqrt2 side lands on a lattice point and the distance
  // formula finishes in whole numbers.
  // Lane: 5 & sqrt2 -> sqrt17 / 4 & 2sqrt2 -> 2sqrt2 / 6 & sqrt2 -> sqrt26.
  [
    {
      q: 'Two sides of a triangle measure $5$ and $\\sqrt{2}$, and the angle between them is $45^\\circ$. How long is the third side?',
      choices: ['$3\\sqrt{3}$', '$\\sqrt{17}$', '$\\sqrt{37}$', '$\\sqrt{22}$'],
      answer: 1,
      solution:
        'Two sides and the included angle is the Law of Cosines setup: $c^2 = 5^2 + \\left(\\sqrt{2}\\right)^2 - 2 \\cdot 5 \\cdot \\sqrt{2}\\cos 45^\\circ = 27 - 10\\sqrt{2} \\cdot \\frac{\\sqrt{2}}{2} = 27 - 10 = 17$, so $c = \\sqrt{17}$ ✓. Check a second, independent way with coordinates. Put the $45^\\circ$ corner at the origin, run the $5$-side along the $x$-axis to $(5, 0)$, and send the $\\sqrt{2}$-side off at $45^\\circ$: it lands at $\\left(\\sqrt{2}\\cos 45^\\circ, \\sqrt{2}\\sin 45^\\circ\\right) = (1, 1)$, a tidy lattice point. The third side joins $(5, 0)$ to $(1, 1)$, so the distance formula gives $\\sqrt{4^2 + 1^2} = \\sqrt{17} \\approx 4.12$ ✓. Shorter than $5$, which is what an acute included angle should produce. (The choice $3\\sqrt{3}$ is DROPPING THE CORRECTION TERM, leaving $\\sqrt{27}$ as if the angle were right ✗; the choice $\\sqrt{37}$ is SLIPPING THE SIGN ON THE CORRECTION, adding $10$ instead of subtracting it ✗; the choice $\\sqrt{22}$ is FORGETTING THE FACTOR OF $2$ IN $2ab\\cos C$, which subtracts only $5$ ✗.)',
    },
    {
      q: 'Two sides of a triangle measure $4$ and $2\\sqrt{2}$, and the angle between them is $45^\\circ$. How long is the third side?',
      choices: ['$2\\sqrt{6}$', '$2\\sqrt{10}$', '$4$', '$2\\sqrt{2}$'],
      answer: 3,
      solution:
        'Apply the Law of Cosines to the two sides and the angle they enclose: $c^2 = 4^2 + \\left(2\\sqrt{2}\\right)^2 - 2 \\cdot 4 \\cdot 2\\sqrt{2}\\cos 45^\\circ = 24 - 16\\sqrt{2} \\cdot \\frac{\\sqrt{2}}{2} = 24 - 16 = 8$, so $c = \\sqrt{8} = 2\\sqrt{2}$ ✓. Check a second, independent way with coordinates. Anchor the $45^\\circ$ corner at the origin with the $4$-side along the $x$-axis at $(4, 0)$; the other side leaves at $45^\\circ$ and lands at $\\left(2\\sqrt{2}\\cos 45^\\circ, 2\\sqrt{2}\\sin 45^\\circ\\right) = (2, 2)$. Joining $(4, 0)$ to $(2, 2)$ gives $\\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$ ✓. The answer landing on $2\\sqrt{2}$, one of the numbers we were handed, is not a copying slip: the finished triangle has sides $2\\sqrt{2}$, $2\\sqrt{2}$, and $4$, and since $8 + 8 = 16$ it is a $45$-$45$-$90$ triangle with the $4$ as its hypotenuse. Two equal sides for two equal $45^\\circ$ angles — the picture had to come out this way. (The choice $2\\sqrt{6}$ is DROPPING THE CORRECTION TERM, leaving $\\sqrt{24}$ ✗; the choice $2\\sqrt{10}$ is SLIPPING THE SIGN ON THE CORRECTION, reaching $\\sqrt{40}$ ✗; the choice $4$ is FORGETTING THE FACTOR OF $2$ IN $2ab\\cos C$, which subtracts only $8$ and leaves $\\sqrt{16}$ ✗.)',
    },
    {
      q: 'Two sides of a triangle measure $6$ and $\\sqrt{2}$, and the angle between them is $45^\\circ$. How long is the third side?',
      choices: ['$\\sqrt{38}$', '$5\\sqrt{2}$', '$\\sqrt{26}$', '$4\\sqrt{2}$'],
      answer: 2,
      solution:
        'The Law of Cosines takes two sides and the angle they enclose: $c^2 = 6^2 + \\left(\\sqrt{2}\\right)^2 - 2 \\cdot 6 \\cdot \\sqrt{2}\\cos 45^\\circ = 38 - 12\\sqrt{2} \\cdot \\frac{\\sqrt{2}}{2} = 38 - 12 = 26$, so $c = \\sqrt{26}$ ✓. Check a second, independent way with coordinates. Place the $45^\\circ$ corner at the origin, lay the $6$-side along the $x$-axis to $(6, 0)$, and send the $\\sqrt{2}$-side out at $45^\\circ$ to $\\left(\\sqrt{2}\\cos 45^\\circ, \\sqrt{2}\\sin 45^\\circ\\right) = (1, 1)$. The third side runs from $(6, 0)$ to $(1, 1)$, so its length is $\\sqrt{5^2 + 1^2} = \\sqrt{26} \\approx 5.10$ ✓ — a little shorter than $6$, as the acute included angle promises. (The choice $\\sqrt{38}$ is DROPPING THE CORRECTION TERM, as though the corner were a right angle ✗; the choice $5\\sqrt{2}$ is SLIPPING THE SIGN ON THE CORRECTION, adding $12$ to reach $\\sqrt{50}$ ✗; the choice $4\\sqrt{2}$ is FORGETTING THE FACTOR OF $2$ IN $2ab\\cos C$, which subtracts only $6$ and leaves $\\sqrt{32}$ ✗.)',
    },
  ],
  // slot 10 — a point on the unit circle is given by one coordinate and the
  // sign of the other, and the angle is wanted. Route one reads the given
  // coordinate straight off as a cosine; route two rebuilds the missing
  // coordinate from $x^2 + y^2 = 1$ and reads the angle off the special
  // triangle that appears. Lane: $-\frac{\sqrt{3}}{2}$ -> 150 /
  // $\frac{\sqrt{2}}{2}$ -> 45 / $\frac{1}{2}$ -> 60.
  [
    {
      q: 'The point $P = \\left(-\\frac{\\sqrt{3}}{2}, y\\right)$ lies on the unit circle with $y > 0$, at angle $\\theta$ measured counterclockwise from the positive $x$-axis. What is $\\theta$?',
      choices: ['$30^\\circ$', '$120^\\circ$', '$210^\\circ$', '$150^\\circ$'],
      answer: 3,
      solution:
        'On the unit circle a point at angle $\\theta$ has coordinates $(\\cos\\theta, \\sin\\theta)$, so the given $x$-coordinate says $\\cos\\theta = -\\frac{\\sqrt{3}}{2}$, and $y > 0$ says $\\sin\\theta > 0$. Negative cosine with positive sine is the second quadrant, and the acute angle whose cosine is $\\frac{\\sqrt{3}}{2}$ is $30^\\circ$, so $\\theta = 180^\\circ - 30^\\circ = 150^\\circ$ ✓. Check a second, independent way by rebuilding the point and measuring the triangle it makes, quoting no cosine at all. Every point of the unit circle obeys $x^2 + y^2 = 1$, so $y^2 = 1 - \\frac{3}{4} = \\frac{1}{4}$ and, since $y > 0$, $y = \\frac{1}{2}$; the point is $P = \\left(-\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$. Drop a perpendicular from $P$ to the $x$-axis: the resulting right triangle has legs $\\frac{\\sqrt{3}}{2}$ and $\\frac{1}{2}$ with hypotenuse $1$, which are the $30$-$60$-$90$ ratios scaled by $\\frac{1}{2}$, and the short leg is the vertical one. So $OP$ leans $30^\\circ$ off the negative $x$-axis, and sweeping counterclockwise from the positive $x$-axis covers $180^\\circ - 30^\\circ = 150^\\circ$ ✓. (The choice $30^\\circ$ is REPORTING THE REFERENCE ANGLE and dropping the minus sign that pushed $P$ to the left ✗; the choice $120^\\circ$ is MISTAKING THE GIVEN NUMBER FOR THE $y$-COORDINATE, which would be the point $\\left(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$ ✗; the choice $210^\\circ$ is IGNORING THE CONDITION $y > 0$ and taking the third-quadrant angle, which has the same cosine but a negative $y$ ✗.)',
    },
    {
      q: 'The point $P = \\left(\\frac{\\sqrt{2}}{2}, y\\right)$ lies on the unit circle with $y > 0$, at angle $\\theta$ measured counterclockwise from the positive $x$-axis. What is $\\theta$?',
      choices: ['$30^\\circ$', '$45^\\circ$', '$135^\\circ$', '$315^\\circ$'],
      answer: 1,
      solution:
        'The coordinates of a unit-circle point at angle $\\theta$ are $(\\cos\\theta, \\sin\\theta)$, so $\\cos\\theta = \\frac{\\sqrt{2}}{2}$ and $\\sin\\theta = y > 0$. Both coordinates positive puts $P$ in the first quadrant, and the first-quadrant angle with cosine $\\frac{\\sqrt{2}}{2}$ is $\\theta = 45^\\circ$ ✓. Check a second, independent way using symmetry instead of any ratio. From $x^2 + y^2 = 1$, $y^2 = 1 - \\frac{1}{2} = \\frac{1}{2}$, and $y > 0$ forces $y = \\frac{\\sqrt{2}}{2}$ — the same as $x$. A point with equal coordinates sits on the line $y = x$, which is the mirror line of the first quadrant, so the ray $OP$ splits that quarter turn evenly: $\\theta = \\frac{90^\\circ}{2} = 45^\\circ$ ✓. (The choice $30^\\circ$ is CONFUSING $\\frac{\\sqrt{2}}{2}$ WITH $\\frac{\\sqrt{3}}{2}$, the cosine of $30^\\circ$ ✗; the choice $135^\\circ$ is APPLYING THE MIRROR RULE WHEN NOTHING ASKED FOR IT, since a positive $x$-coordinate never reaches the second quadrant ✗; the choice $315^\\circ$ is IGNORING THE CONDITION $y > 0$ and taking the fourth-quadrant angle with the same cosine ✗.)',
    },
    {
      q: 'The point $P = \\left(\\frac{1}{2}, y\\right)$ lies on the unit circle with $y > 0$, at angle $\\theta$ measured counterclockwise from the positive $x$-axis. What is $\\theta$?',
      choices: ['$60^\\circ$', '$30^\\circ$', '$120^\\circ$', '$300^\\circ$'],
      answer: 0,
      solution:
        'The given number is the $x$-coordinate, and on the unit circle $x = \\cos\\theta$, so $\\cos\\theta = \\frac{1}{2}$ with $\\sin\\theta = y > 0$. That is the first quadrant, where the angle with cosine $\\frac{1}{2}$ is $\\theta = 60^\\circ$ ✓. Check a second, independent way by rebuilding $P$ and naming the triangle. From $x^2 + y^2 = 1$ we get $y^2 = 1 - \\frac{1}{4} = \\frac{3}{4}$, so $y = \\frac{\\sqrt{3}}{2}$ and $P = \\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$. The perpendicular from $P$ to the $x$-axis makes a right triangle with a short horizontal leg $\\frac{1}{2}$, a long vertical leg $\\frac{\\sqrt{3}}{2}$, and hypotenuse $1$ — a $30$-$60$-$90$ triangle whose $30^\\circ$ corner is at $P$, since the shortest side lies opposite the smallest angle. The remaining acute angle, the one at the origin, is $60^\\circ$ ✓. (The choice $30^\\circ$ is SWAPPING THE ROLES OF THE COORDINATES, reading $\\frac{1}{2}$ as the height rather than the width ✗; the choice $120^\\circ$ is FLIPPING THE SIGN OF THE GIVEN $x$, which would place $P$ on the left half of the circle ✗; the choice $300^\\circ$ is IGNORING THE CONDITION $y > 0$ and taking the fourth-quadrant angle with the same cosine ✗.)',
    },
  ],
  // slot 11 — one side, the angle opposite it, and the circumradius. Route one
  // is the extended Law of Sines; route two is the inscribed angle theorem plus
  // the isosceles triangle joining the center to the chord’s endpoints, which
  // never uses a sine. Lane: 16 at 45 -> $8\sqrt{2}$ /
  // 5 at 45 -> $\frac{5\sqrt{2}}{2}$ /
  // 12 at 60 -> $4\sqrt{3}$.
  [
    {
      q: 'In triangle $ABC$, the side $a = 16$ lies opposite $\\angle A = 45^\\circ$. Using $\\frac{a}{\\sin A} = 2R$, find the radius $R$ of the circle through $A$, $B$, and $C$.',
      choices: ['$8\\sqrt{2}$', '$16\\sqrt{2}$', '$8$', '$16$'],
      answer: 0,
      solution:
        'The extended Law of Sines gives the diameter directly: $2R = \\frac{a}{\\sin A} = \\frac{16}{\\sin 45^\\circ} = \\frac{16}{\\frac{\\sqrt{2}}{2}} = \\frac{32}{\\sqrt{2}} = 16\\sqrt{2}$, and halving it gives $R = 8\\sqrt{2} \\approx 11.31$ ✓. Check a second, independent way with circle geometry alone, quoting no sine. The side $a$ is the chord $BC$, and $\\angle A$ is an inscribed angle standing on that chord, so the central angle at the center $O$ is twice as large: $\\angle BOC = 90^\\circ$. Drop the perpendicular from $O$ to $BC$. In the isosceles triangle $BOC$ it lands on the midpoint $M$ and splits the apex evenly, so $BM = 8$ and $\\angle BOM = 45^\\circ$, which makes triangle $BOM$ a $45$-$45$-$90$ triangle. Its two legs are equal, so $OM = BM = 8$, and its hypotenuse $OB = R$ is $\\sqrt{2}$ times a leg: $R = 8\\sqrt{2}$ ✓ — larger than half the chord, as any circumradius must be. (The choice $16\\sqrt{2}$ is REPORTING THE DIAMETER, stopping one step early ✗; the choice $8$ is DIVIDING THE SIDE BY $2$ INSTEAD OF BY $2\\sin A$, which is half the chord rather than the radius ✗; the choice $16$ is READING $\\sin 45^\\circ$ AS $\\sin 30^\\circ$, which turns the diameter into $32$ ✗.)',
    },
    {
      q: 'In triangle $ABC$, the side $a = 5$ lies opposite $\\angle A = 45^\\circ$. Using $\\frac{a}{\\sin A} = 2R$, find the radius $R$ of the circle through $A$, $B$, and $C$.',
      choices: ['$5\\sqrt{2}$', '$\\frac{5}{2}$', '$\\frac{5\\sqrt{2}}{2}$', '$\\frac{5\\sqrt{2}}{4}$'],
      answer: 2,
      solution:
        'By the extended Law of Sines, $2R = \\frac{a}{\\sin A} = \\frac{5}{\\sin 45^\\circ} = \\frac{5}{\\frac{\\sqrt{2}}{2}} = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$, so $R = \\frac{5\\sqrt{2}}{2} \\approx 3.54$ ✓. Check a second, independent way with circle geometry and the Pythagorean Theorem, never touching a trigonometric ratio. The side $a$ is the chord $BC$, and the inscribed angle $\\angle A = 45^\\circ$ on that chord doubles to a central angle $\\angle BOC = 90^\\circ$. Triangle $BOC$ therefore has a right angle at the center with legs $OB = OC = R$, so $R^2 + R^2 = BC^2 = 25$, giving $2R^2 = 25$ and $R = \\frac{5}{\\sqrt{2}} = \\frac{5\\sqrt{2}}{2}$ ✓ — comfortably larger than half the chord, as any circumradius must be. (The choice $5\\sqrt{2}$ is REPORTING THE DIAMETER instead of the radius ✗; the choice $\\frac{5}{2}$ is DIVIDING THE SIDE BY $2$ INSTEAD OF BY $2\\sin A$, which is half the chord rather than the radius ✗; the choice $\\frac{5\\sqrt{2}}{4}$ is HALVING TWICE, once inside the formula and once again at the end ✗.)',
    },
    {
      q: 'In triangle $ABC$, the side $a = 12$ lies opposite $\\angle A = 60^\\circ$. Using $\\frac{a}{\\sin A} = 2R$, find the radius $R$ of the circle through $A$, $B$, and $C$.',
      choices: ['$8\\sqrt{3}$', '$4\\sqrt{3}$', '$6$', '$12$'],
      answer: 1,
      solution:
        'The extended Law of Sines gives $2R = \\frac{a}{\\sin A} = \\frac{12}{\\sin 60^\\circ} = \\frac{12}{\\frac{\\sqrt{3}}{2}} = \\frac{24}{\\sqrt{3}} = 8\\sqrt{3}$, and rationalizing before halving keeps the last step honest: $R = 4\\sqrt{3} \\approx 6.93$ ✓. Check a second, independent way with the triangle that joins the center to the chord. The side $a$ is the chord $BC$, on which $\\angle A = 60^\\circ$ is inscribed, so the central angle is $\\angle BOC = 120^\\circ$. Drop the perpendicular from the center $O$ to $BC$; in the isosceles triangle $BOC$ it lands on the midpoint $M$ and splits the apex evenly, so $\\angle BOM = 60^\\circ$ and triangle $BOM$ is a $30$-$60$-$90$ triangle with $BM = 6$ opposite the $60^\\circ$. In such a triangle the side opposite $60^\\circ$ is $\\sqrt{3}$ times the side opposite $30^\\circ$, so $OM = \\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$, and the hypotenuse $OB = R$ is twice the short side: $R = 4\\sqrt{3}$ ✓. (The choice $8\\sqrt{3}$ is REPORTING THE DIAMETER, stopping one step early ✗; the choice $6$ is DIVIDING THE SIDE BY $2$ INSTEAD OF BY $2\\sin A$ ✗; the choice $12$ is READING $\\sin 60^\\circ$ AS $\\sin 30^\\circ$, which makes the diameter $24$ ✗.)',
    },
  ],
  // slot 12 — exact evaluation of a short combination of special-angle values.
  // Route one substitutes the table values and simplifies; route two reaches
  // the same number through an identity or a triangle fact and never quotes a
  // table entry. Lane: $\frac{3}{4}$ / $\frac{1}{2}$ / 2.
  [
    {
      q: 'Compute exactly: $\\sin 45^\\circ \\cos 45^\\circ + \\cos^2 60^\\circ$.',
      choices: ['$\\frac{1}{2}$', '$\\frac{5}{4}$', '$\\frac{3}{4}$', '$1$'],
      answer: 2,
      solution:
        'Substitute the exact values one term at a time. The product is $\\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{2}}{2} = \\frac{2}{4} = \\frac{1}{2}$, and the square is $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$, so the sum is $\\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4}$ ✓. Check a second, independent way without quoting a single table entry. For the product, $45^\\circ$ is the one angle between $0^\\circ$ and $180^\\circ$ where the sine and the cosine agree, so $\\sin 45^\\circ \\cos 45^\\circ = \\sin^2 45^\\circ$; the identity $\\sin^2\\theta + \\cos^2\\theta = 1$ then makes two equal quantities add to $1$, so each is $\\frac{1}{2}$. For the square, cut an equilateral triangle of side $2$ in half along an altitude: the half is a right triangle with hypotenuse $2$ and, beside its $60^\\circ$ vertex, a leg of $1$. The cosine of that vertex is $\\frac{1}{2}$, so its square is $\\frac{1}{4}$. Adding, $\\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4}$ ✓. (The choice $\\frac{1}{2}$ is DROPPING THE SECOND TERM and reporting only $\\sin 45^\\circ \\cos 45^\\circ$ ✗; the choice $\\frac{5}{4}$ is MISREADING THE PRODUCT AS THE PYTHAGOREAN IDENTITY and calling it $1$, since that identity needs two squares, not a sine times a cosine ✗; the choice $1$ is FORGETTING TO SQUARE THE COSINE, adding $\\cos 60^\\circ = \\frac{1}{2}$ where $\\frac{1}{4}$ belongs ✗.)',
    },
    {
      q: 'Compute exactly: $\\cos^2 30^\\circ - \\sin^2 30^\\circ$.',
      choices: ['$\\frac{1}{2}$', '$1$', '$\\frac{\\sqrt{3}-1}{2}$', '$-\\frac{1}{2}$'],
      answer: 0,
      solution:
        'Square each exact value before subtracting, since the exponent belongs to the whole ratio: $\\cos^2 30^\\circ = \\left(\\frac{\\sqrt{3}}{2}\\right)^2 = \\frac{3}{4}$ and $\\sin^2 30^\\circ = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$, so the difference is $\\frac{3}{4} - \\frac{1}{4} = \\frac{1}{2}$ ✓. Check a second, independent way that collapses the expression before any value is looked up, and that never needs the sine. The Pythagorean identity $\\sin^2\\theta + \\cos^2\\theta = 1$ trades $\\sin^2 30^\\circ$ for $1 - \\cos^2 30^\\circ$, so the whole expression becomes $\\cos^2 30^\\circ - \\left(1 - \\cos^2 30^\\circ\\right) = 2\\cos^2 30^\\circ - 1$. Only one quantity is left to find, and it is already a square, so no radical has to be carried. Cut an equilateral triangle of side $2$ in half along an altitude: the half is a right triangle with hypotenuse $2$, a short leg of $1$, and the altitude as its long leg, and the Pythagorean Theorem makes that long leg squared $2^2 - 1^2 = 3$. The long leg is the one beside the $30^\\circ$ vertex, and a cosine is that leg over the hypotenuse, so $\\cos^2 30^\\circ = \\frac{3}{2^2} = \\frac{3}{4}$, and $2 \\cdot \\frac{3}{4} - 1 = \\frac{1}{2}$ ✓. (The choice $1$ is MISREADING THE MINUS AS A PLUS, which would turn the expression into the Pythagorean identity ✗; the choice $\\frac{\\sqrt{3}-1}{2}$ is SUBTRACTING THE RATIOS BEFORE SQUARING, computing $\\cos 30^\\circ - \\sin 30^\\circ$ instead ✗; the choice $-\\frac{1}{2}$ is SUBTRACTING IN THE WRONG ORDER, taking $\\sin^2 30^\\circ - \\cos^2 30^\\circ$ ✗.)',
    },
    {
      q: 'Compute exactly: $\\cos^2 45^\\circ + \\sin^2 45^\\circ + \\tan 45^\\circ$.',
      choices: ['$1$', '$\\frac{3}{2}$', '$1+\\sqrt{2}$', '$2$'],
      answer: 3,
      solution:
        'Substitute the exact values: $\\cos^2 45^\\circ = \\left(\\frac{\\sqrt{2}}{2}\\right)^2 = \\frac{1}{2}$, $\\sin^2 45^\\circ = \\frac{1}{2}$, and $\\tan 45^\\circ = \\frac{\\frac{\\sqrt{2}}{2}}{\\frac{\\sqrt{2}}{2}} = 1$, so the total is $\\frac{1}{2} + \\frac{1}{2} + 1 = 2$ ✓. Check a second, independent way with no exact values at all. The first two terms are a sine squared plus a cosine squared at the same angle, and the identity $\\sin^2\\theta + \\cos^2\\theta = 1$ settles them as $1$ whatever the angle happens to be. For the last term, draw any $45$-$45$-$90$ triangle: its two legs are equal because the two acute angles are equal, and $\\tan 45^\\circ$ is one leg divided by the other, so it is $1$. The total is $1 + 1 = 2$ ✓. (The choice $1$ is COUNTING ONLY THE IDENTITY and forgetting the tangent term entirely ✗; the choice $\\frac{3}{2}$ is REUSING $\\frac{1}{2}$ FOR THE TANGENT, as though every term at $45^\\circ$ were the same number ✗; the choice $1+\\sqrt{2}$ is FORGETTING TO SQUARE, adding $\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2} + 1$ instead ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 18,
  challenge,
}
