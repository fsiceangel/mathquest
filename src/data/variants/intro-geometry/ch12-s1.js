// Introduction to Geometry chapter 12 — variations for section 12.1 (Inscribed Angles).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer was worked twice by routes that do not share steps:
//    the inscribed angle theorem forward, then an independent re-check — the
//    isosceles-radii argument, the triangle angle sum, an arc-closure count,
//    or the supplementary pair of a cyclic quadrilateral.
//  - Every labeled point sits on its circle at exactly (r cos t, r sin t) to
//    four decimals, so each marked angle in a figure agrees with the number
//    the problem states to well under a degree.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution.

const s121 = [
  // s1 — an inscribed angle from its intercepted arc.
  [
    {
      q: 'On the circular skate bowl shown, two ramps run from the lookout post at $C$ up to rim markers $A$ and $B$. The arc $AB$ that does not pass through $C$ measures $140^\\circ$. What is the inscribed angle $\\angle ACB$ at the lookout post?',
      fig: {
        view: [-4.9, -4.9, 4.9, 4.9],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0.0000, -3.0000], b: [-2.8191, 1.0261] },
          { t: 'seg', a: [0.0000, -3.0000], b: [2.8191, 1.0261] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 20, to: 160 },
          { t: 'label', p: [0, 3.8], text: '140°' },
          { t: 'angle', at: [0.0000, -3.0000], from: [-2.8191, 1.0261], to: [2.8191, 1.0261], r: 0.6, label: '?' },
          { t: 'point', p: [-2.8191, 1.0261], label: 'A', dx: -12, dy: -4 },
          { t: 'point', p: [2.8191, 1.0261], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [0.0000, -3.0000], label: 'C', dx: 0, dy: 13 },
        ],
      },
      choices: ['$70^\\circ$', '$140^\\circ$', '$35^\\circ$', '$280^\\circ$'],
      answer: 0,
      solution:
        'Route one, the inscribed angle theorem: the vertex $C$ sits on the circle and both sides are chords, so the angle is half its intercepted arc, $\\angle ACB = \\frac{140^\\circ}{2} = 70^\\circ$ ✓. Check a second, independent way, using only radii and the triangle angle sum: the central angle on that arc is $\\angle AOB = 140^\\circ$, so the other two central angles satisfy $\\angle AOC + \\angle COB = 360^\\circ - 140^\\circ = 220^\\circ$. Triangles $AOC$ and $BOC$ are isosceles because all radii are equal, giving $\\angle ACO = \\frac{180^\\circ - \\angle AOC}{2}$ and $\\angle BCO = \\frac{180^\\circ - \\angle BOC}{2}$; adding those two, $\\angle ACB = \\frac{360^\\circ - 220^\\circ}{2} = 70^\\circ$ ✓. (The choice $140^\\circ$ is CONFUSING THE ARC WITH THE ANGLE, which only match when the vertex sits at the center ✗; the choice $35^\\circ$ is HALVING TWICE ✗; the choice $280^\\circ$ is DOUBLING INSTEAD OF HALVING ✗.)',
    },
    {
      q: 'Two sprinkler heads $A$ and $B$ stand on the edge of the circular flower bed shown, and a stone bench sits at $C$ on the far edge. The arc $AB$ that avoids the bench measures $86^\\circ$. What is $\\angle ACB$, the angle the bed subtends at the bench?',
      fig: {
        view: [-4.9, -4.9, 4.9, 4.9],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0.0000, -3.0000], b: [-2.0460, 2.1941] },
          { t: 'seg', a: [0.0000, -3.0000], b: [2.0460, 2.1941] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 47, to: 133 },
          { t: 'label', p: [0, 3.8], text: '86°' },
          { t: 'angle', at: [0.0000, -3.0000], from: [-2.0460, 2.1941], to: [2.0460, 2.1941], r: 0.6, label: '?' },
          { t: 'point', p: [-2.0460, 2.1941], label: 'A', dx: -9, dy: -10 },
          { t: 'point', p: [2.0460, 2.1941], label: 'B', dx: 9, dy: -10 },
          { t: 'point', p: [0.0000, -3.0000], label: 'C', dx: 0, dy: 13 },
        ],
      },
      choices: ['$86^\\circ$', '$172^\\circ$', '$43^\\circ$', '$21.5^\\circ$'],
      answer: 2,
      solution:
        'Route one, the inscribed angle theorem: the bench angle is half the arc it intercepts, so $\\angle ACB = \\frac{86^\\circ}{2} = 43^\\circ$ ✓. Check a second, independent way, using only radii and the triangle angle sum: the central angle $\\angle AOB$ equals its arc, $86^\\circ$, so $\\angle AOC + \\angle COB = 360^\\circ - 86^\\circ = 274^\\circ$. Triangles $AOC$ and $BOC$ are isosceles because all radii are equal, so $\\angle ACO + \\angle BCO = \\frac{180^\\circ - \\angle AOC}{2} + \\frac{180^\\circ - \\angle BOC}{2} = \\frac{360^\\circ - 274^\\circ}{2} = 43^\\circ$ ✓. (The choice $86^\\circ$ is CONFUSING THE ARC WITH THE ANGLE ✗; the choice $172^\\circ$ is DOUBLING INSTEAD OF HALVING ✗; the choice $21.5^\\circ$ is HALVING TWICE ✗.)',
    },
    {
      q: 'A planetarium dome is shown from above as a circle. A projector at $C$ on the rim shines two beams at wall panels $A$ and $B$, and the arc $AB$ on the far side from the projector measures $154^\\circ$. What is $\\angle ACB$, the angle between the two beams?',
      fig: {
        view: [-4.9, -4.9, 4.9, 4.9],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0.0000, -3.0000], b: [-2.9231, 0.6749] },
          { t: 'seg', a: [0.0000, -3.0000], b: [2.9231, 0.6749] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 13, to: 167 },
          { t: 'label', p: [0, 3.8], text: '154°' },
          { t: 'angle', at: [0.0000, -3.0000], from: [-2.9231, 0.6749], to: [2.9231, 0.6749], r: 0.6, label: '?' },
          { t: 'point', p: [-2.9231, 0.6749], label: 'A', dx: -13, dy: -3 },
          { t: 'point', p: [2.9231, 0.6749], label: 'B', dx: 13, dy: -3 },
          { t: 'point', p: [0.0000, -3.0000], label: 'C', dx: 0, dy: 13 },
        ],
      },
      choices: ['$154^\\circ$', '$38.5^\\circ$', '$206^\\circ$', '$77^\\circ$'],
      answer: 3,
      solution:
        'Route one, the inscribed angle theorem: the beam angle is half its intercepted arc, so $\\angle ACB = \\frac{154^\\circ}{2} = 77^\\circ$ ✓. Check a second, independent way, using only radii and the triangle angle sum: the central angle $\\angle AOB$ matches its arc at $154^\\circ$, so $\\angle AOC + \\angle COB = 360^\\circ - 154^\\circ = 206^\\circ$. Triangles $AOC$ and $BOC$ are isosceles because all radii are equal, so $\\angle ACB = \\frac{180^\\circ - \\angle AOC}{2} + \\frac{180^\\circ - \\angle BOC}{2} = \\frac{360^\\circ - 206^\\circ}{2} = 77^\\circ$ ✓. (The choice $154^\\circ$ is CONFUSING THE ARC WITH THE ANGLE ✗; the choice $38.5^\\circ$ is HALVING TWICE ✗; the choice $206^\\circ$ is REPORTING THE REST OF THE CIRCLE, $360^\\circ - 154^\\circ$ ✗.)',
    },
  ],
  // s2 — the intercepted arc from the inscribed angle.
  [
    {
      q: 'A footbridge at $C$ on the rim of a circular duck pond faces two feeding platforms $A$ and $B$ across the water, as shown, and the two sight lines make $\\angle ACB = 27^\\circ$. What is the measure of the intercepted arc $AB$?',
      fig: {
        view: [-4.9, -4.9, 4.9, 4.9],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0.0000, -3.0000], b: [-1.3620, 2.6730] },
          { t: 'seg', a: [0.0000, -3.0000], b: [1.3620, 2.6730] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 63, to: 117 },
          { t: 'label', p: [0, 3.8], text: '?' },
          { t: 'angle', at: [0.0000, -3.0000], from: [-1.3620, 2.6730], to: [1.3620, 2.6730], r: 0.6, label: '27' },
          { t: 'point', p: [-1.3620, 2.6730], label: 'A', dx: -6, dy: -12 },
          { t: 'point', p: [1.3620, 2.6730], label: 'B', dx: 6, dy: -12 },
          { t: 'point', p: [0.0000, -3.0000], label: 'C', dx: 0, dy: 13 },
        ],
      },
      choices: ['$13.5^\\circ$', '$27^\\circ$', '$108^\\circ$', '$54^\\circ$'],
      answer: 3,
      solution:
        'Route one, run the halving rule backward: an arc is double the inscribed angle standing on it, so $\\overset{\\frown}{AB} = 2 \\times 27^\\circ = 54^\\circ$ ✓. Check a second, independent way, by testing the candidate against the whole circle: an arc of $54^\\circ$ leaves a major arc of $360^\\circ - 54^\\circ = 306^\\circ$, and every point on that major arc — the footbridge included — must see the $54^\\circ$ arc at $\\frac{54^\\circ}{2} = 27^\\circ$, exactly the angle marked, so $54^\\circ$ is the only arc that fits the picture ✓. (The choice $27^\\circ$ is CONFUSING THE ARC WITH THE ANGLE ✗; the choice $13.5^\\circ$ is HALVING WHEN THE RULE SAYS DOUBLE ✗; the choice $108^\\circ$ is DOUBLING TWICE ✗.)',
    },
    {
      q: 'A juggler stands at $C$ on the edge of a circular circus ring, shown from above, and watches two spotlights $A$ and $B$ mounted on the ring’s edge. The angle between her two sight lines is $\\angle ACB = 39^\\circ$. What is the measure of the arc $AB$ she is looking across?',
      fig: {
        view: [-4.9, -4.9, 4.9, 4.9],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.0261, -2.8191], b: [-1.8880, 2.3314] },
          { t: 'seg', a: [-1.0261, -2.8191], b: [1.8880, 2.3314] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 51, to: 129 },
          { t: 'label', p: [0, 3.8], text: '?' },
          { t: 'angle', at: [-1.0261, -2.8191], from: [-1.8880, 2.3314], to: [1.8880, 2.3314], r: 0.6, label: '39' },
          { t: 'point', p: [-1.8880, 2.3314], label: 'A', dx: -8, dy: -10 },
          { t: 'point', p: [1.8880, 2.3314], label: 'B', dx: 8, dy: -10 },
          { t: 'point', p: [-1.0261, -2.8191], label: 'C', dx: -4, dy: 12 },
        ],
      },
      choices: ['$39^\\circ$', '$78^\\circ$', '$19.5^\\circ$', '$156^\\circ$'],
      answer: 1,
      solution:
        'Route one, run the halving rule backward: the arc is double the inscribed angle that stands on it, so $\\overset{\\frown}{AB} = 2 \\times 39^\\circ = 78^\\circ$ ✓. Check a second, independent way, by testing the candidate against the whole circle: an arc of $78^\\circ$ leaves a major arc of $360^\\circ - 78^\\circ = 282^\\circ$, and any point of that major arc — the juggler included — sees the $78^\\circ$ arc at $\\frac{78^\\circ}{2} = 39^\\circ$, precisely the marked angle, so $78^\\circ$ is the arc the picture demands ✓. (The choice $39^\\circ$ is CONFUSING THE ARC WITH THE ANGLE ✗; the choice $19.5^\\circ$ is HALVING WHEN THE RULE SAYS DOUBLE ✗; the choice $156^\\circ$ is DOUBLING TWICE ✗.)',
    },
    {
      q: 'A rider sits on a carousel horse at $C$ on the rim of the ride, shown from above, and looks at two ticket booths $A$ and $B$ that also stand on the rim. Her two sight lines make $\\angle ACB = 46^\\circ$. What is the measure of the arc $AB$ between the booths?',
      fig: {
        view: [-4.9, -4.9, 4.9, 4.9],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [1.0261, -2.8191], b: [-2.1580, 2.0840] },
          { t: 'seg', a: [1.0261, -2.8191], b: [2.1580, 2.0840] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 44, to: 136 },
          { t: 'label', p: [0, 3.8], text: '?' },
          { t: 'angle', at: [1.0261, -2.8191], from: [-2.1580, 2.0840], to: [2.1580, 2.0840], r: 0.6, label: '46' },
          { t: 'point', p: [-2.1580, 2.0840], label: 'A', dx: -9, dy: -9 },
          { t: 'point', p: [2.1580, 2.0840], label: 'B', dx: 9, dy: -9 },
          { t: 'point', p: [1.0261, -2.8191], label: 'C', dx: 4, dy: 12 },
        ],
      },
      choices: ['$92^\\circ$', '$46^\\circ$', '$184^\\circ$', '$23^\\circ$'],
      answer: 0,
      solution:
        'Route one, run the halving rule backward: the arc is twice the inscribed angle standing on it, so $\\overset{\\frown}{AB} = 2 \\times 46^\\circ = 92^\\circ$ ✓. Check a second, independent way, by testing the candidate against the whole circle: an arc of $92^\\circ$ leaves a major arc of $360^\\circ - 92^\\circ = 268^\\circ$, and every point on that major arc — the rider’s horse included — sees the $92^\\circ$ arc at $\\frac{92^\\circ}{2} = 46^\\circ$, exactly the marked angle, so $92^\\circ$ is the only arc that fits ✓. (The choice $46^\\circ$ is CONFUSING THE ARC WITH THE ANGLE ✗; the choice $23^\\circ$ is HALVING WHEN THE RULE SAYS DOUBLE ✗; the choice $184^\\circ$ is DOUBLING TWICE ✗.)',
    },
  ],
  // s3 — Thales: an angle inscribed in a semicircle is right.
  [
    {
      q: 'A round stained-glass window has a straight brass bar running all the way across it through the center, from rim point $A$ to rim point $B$. A hinge at another rim point $C$ is joined by wires to both ends of the bar, as shown. What is $\\angle ACB$?',
      fig: {
        view: [-4.6, -4.6, 4.6, 4.6],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3.0000, 0.0000], b: [3.0000, 0.0000] },
          { t: 'seg', a: [1.5000, 2.5981], b: [-3.0000, 0.0000] },
          { t: 'seg', a: [1.5000, 2.5981], b: [3.0000, 0.0000] },
          { t: 'angle', at: [1.5000, 2.5981], from: [-3.0000, 0.0000], to: [3.0000, 0.0000], r: 0.55, label: '?' },
          { t: 'point', p: [-3.0000, 0.0000], label: 'A', dx: -13, dy: 0 },
          { t: 'point', p: [3.0000, 0.0000], label: 'B', dx: 13, dy: 0 },
          { t: 'point', p: [1.5000, 2.5981], label: 'C', dx: 7, dy: -11 },
        ],
      },
      choices: ['$45^\\circ$', '$180^\\circ$', '$90^\\circ$', '$60^\\circ$'],
      answer: 2,
      solution:
        'Route one, the semicircle rule: the bar passes through the center, so $AB$ is a diameter and the arc it cuts off on the hinge’s far side is a semicircle of $180^\\circ$. The inscribed angle at $C$ is half of that: $\\angle ACB = \\frac{180^\\circ}{2} = 90^\\circ$ ✓. Check a second, independent way, with radii only: join $C$ to the center $O$. Then $OA = OC = OB$, so triangle $AOC$ is isosceles with $\\angle OAC = \\angle OCA = x$ and triangle $BOC$ is isosceles with $\\angle OBC = \\angle OCB = y$. The angles of triangle $ABC$ add to $180^\\circ$, giving $x + y + (x + y) = 180^\\circ$, so $x + y = 90^\\circ$ — and $x + y$ is exactly $\\angle ACB$ ✓. (The choice $180^\\circ$ is CONFUSING THE ARC WITH THE ANGLE, handing over the whole semicircle ✗; the choice $45^\\circ$ is HALVING TWICE ✗; the choice $60^\\circ$ is ASSUMING THE TRIANGLE IS EQUILATERAL, which the picture never promises ✗.)',
    },
    {
      q: 'On the circular clock face shown, the marks $A$, $O$, and $B$ lie on one straight line, where $O$ is the center of the face. A third mark $C$ sits somewhere else on the rim and is joined to $A$ and to $B$. What is $\\angle ACB$?',
      fig: {
        view: [-4.6, -4.6, 4.6, 4.6],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3.0000, 0.0000], b: [3.0000, 0.0000] },
          { t: 'seg', a: [-1.9284, 2.2981], b: [-3.0000, 0.0000] },
          { t: 'seg', a: [-1.9284, 2.2981], b: [3.0000, 0.0000] },
          { t: 'angle', at: [-1.9284, 2.2981], from: [-3.0000, 0.0000], to: [3.0000, 0.0000], r: 0.55, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3.0000, 0.0000], label: 'A', dx: -13, dy: 0 },
          { t: 'point', p: [3.0000, 0.0000], label: 'B', dx: 13, dy: 0 },
          { t: 'point', p: [-1.9284, 2.2981], label: 'C', dx: -8, dy: -10 },
        ],
      },
      choices: ['$60^\\circ$', '$180^\\circ$', '$120^\\circ$', '$90^\\circ$'],
      answer: 3,
      solution:
        'Route one, the semicircle rule: $A$, $O$, $B$ collinear with $O$ the center means $AB$ is a diameter, so the arc from $A$ to $B$ on the far side from $C$ is a semicircle of $180^\\circ$, and the inscribed angle at $C$ is half of it: $\\angle ACB = \\frac{180^\\circ}{2} = 90^\\circ$ ✓. Check a second, independent way, with radii only: $OA = OC = OB$, so triangle $AOC$ is isosceles with base angles $x$ at $A$ and $C$, and triangle $BOC$ is isosceles with base angles $y$ at $B$ and $C$. Triangle $ABC$ then has angles $x$, $y$, and $x + y$, and $2x + 2y = 180^\\circ$ forces $\\angle ACB = x + y = 90^\\circ$ ✓. (The choice $180^\\circ$ is CONFUSING THE ARC WITH THE ANGLE ✗; the choice $120^\\circ$ is SPLITTING THE CIRCLE INTO THREE EQUAL PIECES, as if $C$ were a third of the way around ✗; the choice $60^\\circ$ is ASSUMING THE TRIANGLE IS EQUILATERAL ✗.)',
    },
    {
      q: 'Two starting blocks $A$ and $B$ sit on a circular running track, and the timing hut stands at $C$, also on the track. The arc from $A$ to $B$ that does not pass the timing hut measures $180^\\circ$, as marked. What is $\\angle ACB$, the angle the two blocks make at the hut?',
      fig: {
        view: [-4.9, -4.9, 4.9, 4.9],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3.0000, 0.0000], b: [3.0000, 0.0000], dash: true },
          { t: 'seg', a: [0.0000, -3.0000], b: [-3.0000, 0.0000] },
          { t: 'seg', a: [0.0000, -3.0000], b: [3.0000, 0.0000] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 0, to: 180 },
          { t: 'label', p: [0, 3.8], text: '180°' },
          { t: 'angle', at: [0.0000, -3.0000], from: [-3.0000, 0.0000], to: [3.0000, 0.0000], r: 0.6, label: '?' },
          { t: 'point', p: [-3.0000, 0.0000], label: 'A', dx: -13, dy: 0 },
          { t: 'point', p: [3.0000, 0.0000], label: 'B', dx: 13, dy: 0 },
          { t: 'point', p: [0.0000, -3.0000], label: 'C', dx: 0, dy: 13 },
        ],
      },
      choices: ['$180^\\circ$', '$90^\\circ$', '$45^\\circ$', '$270^\\circ$'],
      answer: 1,
      solution:
        'Route one, the inscribed angle theorem: the hut angle is half its intercepted arc, and that arc is the marked $180^\\circ$, so $\\angle ACB = \\frac{180^\\circ}{2} = 90^\\circ$ ✓. Check a second, independent way, with radii only: an arc of $180^\\circ$ is half the track, so $A$ and $B$ are the two ends of a diameter through the center $O$. Joining $C$ to $O$ makes $OA = OC = OB$, so triangle $AOC$ is isosceles with base angles $x$ and triangle $BOC$ is isosceles with base angles $y$; the angles of triangle $ABC$ are then $x$, $y$, and $x + y$, and $2x + 2y = 180^\\circ$ gives $\\angle ACB = x + y = 90^\\circ$ ✓. (The choice $180^\\circ$ is CONFUSING THE ARC WITH THE ANGLE ✗; the choice $45^\\circ$ is HALVING TWICE ✗; the choice $270^\\circ$ is REPORTING THE REST OF THE CIRCLE, $360^\\circ - 90^\\circ$ ✗.)',
    },
  ],
  // s4 — two inscribed angles on the same side of a chord are equal.
  [
    {
      q: 'A round stage is shown from above. Two camera operators stand at $C$ and $D$ on the rim, and both film the same painted stripe that runs from $A$ to $B$ across the stage. The camera at $C$ opens to $\\angle ACB = 28^\\circ$. What angle $\\angle ADB$ does the camera at $D$ open to?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.1213, -2.1213], b: [-1.4084, 2.6488] },
          { t: 'seg', a: [-2.1213, -2.1213], b: [1.4084, 2.6488] },
          { t: 'seg', a: [2.1213, -2.1213], b: [-1.4084, 2.6488] },
          { t: 'seg', a: [2.1213, -2.1213], b: [1.4084, 2.6488] },
          { t: 'angle', at: [-2.1213, -2.1213], from: [-1.4084, 2.6488], to: [1.4084, 2.6488], r: 0.6, label: '28' },
          { t: 'angle', at: [2.1213, -2.1213], from: [-1.4084, 2.6488], to: [1.4084, 2.6488], r: 0.6, label: '?' },
          { t: 'point', p: [-1.4084, 2.6488], label: 'A', dx: -6, dy: -11 },
          { t: 'point', p: [1.4084, 2.6488], label: 'B', dx: 6, dy: -11 },
          { t: 'point', p: [-2.1213, -2.1213], label: 'C', dx: -9, dy: 9 },
          { t: 'point', p: [2.1213, -2.1213], label: 'D', dx: 9, dy: 9 },
        ],
      },
      choices: ['$56^\\circ$', '$28^\\circ$', '$14^\\circ$', '$62^\\circ$'],
      answer: 1,
      solution:
        'Route one, same arc means same angle: both cameras stand on the major arc and both look across the same chord $AB$, so both angles intercept arc $AB$ and are half of it. That makes $\\angle ADB = \\angle ACB = 28^\\circ$ without a single calculation ✓. Check a second, independent way, by going through the arc: $\\angle ACB = 28^\\circ$ doubles to $\\overset{\\frown}{AB} = 56^\\circ$, and the camera at $D$ stands on that same $56^\\circ$ arc, so it opens to $\\frac{56^\\circ}{2} = 28^\\circ$ ✓. (The choice $56^\\circ$ is CONFUSING THE ARC WITH THE ANGLE ✗; the choice $14^\\circ$ is HALVING THE GIVEN ANGLE A SECOND TIME ✗; the choice $62^\\circ$ is TREATING THE PICTURE AS A RIGHT TRIANGLE and subtracting from $90^\\circ$ ✗.)',
    },
    {
      q: 'Two birds perch at $C$ and $D$ on the rim of a circular birdbath, shown from above, and both watch the same floating twig whose ends rest at $A$ and $B$ on the rim. The bird at $C$ sees the twig at an angle of $\\angle ACB = 53^\\circ$. At what angle $\\angle ADB$ does the bird at $D$ see it?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.4575, -1.7207], b: [-2.3959, 1.8054] },
          { t: 'seg', a: [-2.4575, -1.7207], b: [2.3959, 1.8054] },
          { t: 'seg', a: [2.4575, -1.7207], b: [-2.3959, 1.8054] },
          { t: 'seg', a: [2.4575, -1.7207], b: [2.3959, 1.8054] },
          { t: 'angle', at: [-2.4575, -1.7207], from: [-2.3959, 1.8054], to: [2.3959, 1.8054], r: 0.6, label: '53' },
          { t: 'angle', at: [2.4575, -1.7207], from: [-2.3959, 1.8054], to: [2.3959, 1.8054], r: 0.6, label: '?' },
          { t: 'point', p: [-2.3959, 1.8054], label: 'A', dx: -10, dy: -8 },
          { t: 'point', p: [2.3959, 1.8054], label: 'B', dx: 10, dy: -8 },
          { t: 'point', p: [-2.4575, -1.7207], label: 'C', dx: -11, dy: 7 },
          { t: 'point', p: [2.4575, -1.7207], label: 'D', dx: 11, dy: 7 },
        ],
      },
      choices: ['$53^\\circ$', '$106^\\circ$', '$26.5^\\circ$', '$37^\\circ$'],
      answer: 0,
      solution:
        'Route one, same arc means same angle: both birds perch on the major arc of chord $AB$, so both angles intercept the same arc $AB$ and each is half of it, giving $\\angle ADB = \\angle ACB = 53^\\circ$ with no arithmetic at all ✓. Check a second, independent way, by going through the arc: doubling the known angle gives $\\overset{\\frown}{AB} = 2 \\times 53^\\circ = 106^\\circ$, and the second bird stands on that same $106^\\circ$ arc, so its angle is $\\frac{106^\\circ}{2} = 53^\\circ$ ✓. (The choice $106^\\circ$ is CONFUSING THE ARC WITH THE ANGLE ✗; the choice $26.5^\\circ$ is HALVING THE GIVEN ANGLE A SECOND TIME ✗; the choice $37^\\circ$ is TREATING THE PICTURE AS A RIGHT TRIANGLE and subtracting from $90^\\circ$ ✗.)',
    },
    {
      q: 'Inside a domed observatory, shown from above as a circle, telescopes stand at $C$ and $D$ on the wall and both are aimed at the same window slot whose edges are at $A$ and $B$ on the wall. The telescope at $C$ swings through $\\angle ACB = 36^\\circ$ to sweep the slot. Through what angle $\\angle ADB$ must the telescope at $D$ swing?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.7207, -2.4575], b: [-1.7634, 2.4271] },
          { t: 'seg', a: [-1.7207, -2.4575], b: [1.7634, 2.4271] },
          { t: 'seg', a: [1.7207, -2.4575], b: [-1.7634, 2.4271] },
          { t: 'seg', a: [1.7207, -2.4575], b: [1.7634, 2.4271] },
          { t: 'angle', at: [-1.7207, -2.4575], from: [-1.7634, 2.4271], to: [1.7634, 2.4271], r: 0.6, label: '36' },
          { t: 'angle', at: [1.7207, -2.4575], from: [-1.7634, 2.4271], to: [1.7634, 2.4271], r: 0.6, label: '?' },
          { t: 'point', p: [-1.7634, 2.4271], label: 'A', dx: -8, dy: -11 },
          { t: 'point', p: [1.7634, 2.4271], label: 'B', dx: 8, dy: -11 },
          { t: 'point', p: [-1.7207, -2.4575], label: 'C', dx: -7, dy: 11 },
          { t: 'point', p: [1.7207, -2.4575], label: 'D', dx: 7, dy: 11 },
        ],
      },
      choices: ['$72^\\circ$', '$18^\\circ$', '$36^\\circ$', '$54^\\circ$'],
      answer: 2,
      solution:
        'Route one, same arc means same angle: both telescopes sit on the major arc of chord $AB$, so both angles intercept arc $AB$ and each equals half of it, making $\\angle ADB = \\angle ACB = 36^\\circ$ straight away ✓. Check a second, independent way, by going through the arc: doubling gives $\\overset{\\frown}{AB} = 2 \\times 36^\\circ = 72^\\circ$, and the telescope at $D$ stands on that same $72^\\circ$ arc, so it swings through $\\frac{72^\\circ}{2} = 36^\\circ$ ✓. (The choice $72^\\circ$ is CONFUSING THE ARC WITH THE ANGLE ✗; the choice $18^\\circ$ is HALVING THE GIVEN ANGLE A SECOND TIME ✗; the choice $54^\\circ$ is TREATING THE PICTURE AS A RIGHT TRIANGLE and subtracting from $90^\\circ$ ✗.)',
    },
  ],
  // s5 — an inscribed angle from the central angle on the same arc.
  [
    {
      q: 'On the Ferris wheel shown, spokes run from the hub $O$ out to gondolas $A$ and $B$, making $\\angle AOB = 116^\\circ$. A photographer rides in gondola $C$ on the far side of the rim. What is $\\angle ACB$, the angle between her two views?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0, 0], b: [-2.5441, 1.5898] },
          { t: 'seg', a: [0, 0], b: [2.5441, 1.5898] },
          { t: 'seg', a: [0.0000, -3.0000], b: [-2.5441, 1.5898] },
          { t: 'seg', a: [0.0000, -3.0000], b: [2.5441, 1.5898] },
          { t: 'angle', at: [0, 0], from: [-2.5441, 1.5898], to: [2.5441, 1.5898], r: 0.55, label: '116' },
          { t: 'angle', at: [0.0000, -3.0000], from: [-2.5441, 1.5898], to: [2.5441, 1.5898], r: 0.6, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-2.5441, 1.5898], label: 'A', dx: -11, dy: -7 },
          { t: 'point', p: [2.5441, 1.5898], label: 'B', dx: 11, dy: -7 },
          { t: 'point', p: [0.0000, -3.0000], label: 'C', dx: 0, dy: 13 },
        ],
      },
      choices: ['$116^\\circ$', '$232^\\circ$', '$29^\\circ$', '$58^\\circ$'],
      answer: 3,
      solution:
        'Route one, through the arc: a central angle equals its arc, so $\\overset{\\frown}{AB} = 116^\\circ$, and the inscribed angle at $C$ is half that arc, $\\angle ACB = \\frac{116^\\circ}{2} = 58^\\circ$ ✓. Check a second, independent way, with radii and the triangle angle sum: the remaining central angles satisfy $\\angle AOC + \\angle COB = 360^\\circ - 116^\\circ = 244^\\circ$, and triangles $AOC$ and $BOC$ are isosceles because every spoke is a radius, so $\\angle ACB = \\frac{180^\\circ - \\angle AOC}{2} + \\frac{180^\\circ - \\angle BOC}{2} = \\frac{360^\\circ - 244^\\circ}{2} = 58^\\circ$ ✓. (The choice $116^\\circ$ is COPYING THE CENTRAL ANGLE, which only a vertex at the hub could see ✗; the choice $232^\\circ$ is DOUBLING INSTEAD OF HALVING ✗; the choice $29^\\circ$ is HALVING TWICE ✗.)',
    },
    {
      q: 'A radar dish sweeps a circular screen with the station at the center $O$. Two ships $A$ and $B$ show up on the outer ring with $\\angle AOB = 74^\\circ$, and a lighthouse $C$ stands on the ring as well, as shown. What is $\\angle ACB$, the angle the two ships make at the lighthouse?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0, 0], b: [-1.8054, 2.3959] },
          { t: 'seg', a: [0, 0], b: [1.8054, 2.3959] },
          { t: 'seg', a: [-0.2615, -2.9886], b: [-1.8054, 2.3959] },
          { t: 'seg', a: [-0.2615, -2.9886], b: [1.8054, 2.3959] },
          { t: 'angle', at: [0, 0], from: [-1.8054, 2.3959], to: [1.8054, 2.3959], r: 0.6, label: '74' },
          { t: 'angle', at: [-0.2615, -2.9886], from: [-1.8054, 2.3959], to: [1.8054, 2.3959], r: 0.6, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-1.8054, 2.3959], label: 'A', dx: -8, dy: -10 },
          { t: 'point', p: [1.8054, 2.3959], label: 'B', dx: 8, dy: -10 },
          { t: 'point', p: [-0.2615, -2.9886], label: 'C', dx: -1, dy: 13 },
        ],
      },
      choices: ['$37^\\circ$', '$74^\\circ$', '$148^\\circ$', '$18.5^\\circ$'],
      answer: 0,
      solution:
        'Route one, through the arc: a central angle equals its arc, so $\\overset{\\frown}{AB} = 74^\\circ$, and the lighthouse angle is half of it, $\\angle ACB = \\frac{74^\\circ}{2} = 37^\\circ$ ✓. Check a second, independent way, with radii and the triangle angle sum: the other two central angles satisfy $\\angle AOC + \\angle COB = 360^\\circ - 74^\\circ = 286^\\circ$, and triangles $AOC$ and $BOC$ are isosceles because all four segments from $O$ are radii, so $\\angle ACB = \\frac{180^\\circ - \\angle AOC}{2} + \\frac{180^\\circ - \\angle BOC}{2} = \\frac{360^\\circ - 286^\\circ}{2} = 37^\\circ$ ✓. (The choice $74^\\circ$ is COPYING THE CENTRAL ANGLE ✗; the choice $148^\\circ$ is DOUBLING INSTEAD OF HALVING ✗; the choice $18.5^\\circ$ is HALVING TWICE ✗.)',
    },
    {
      q: 'A round pizza is shown with its center at $O$. Two cuts run from the center out to crust points $A$ and $B$ with $\\angle AOB = 132^\\circ$, and a sesame seed sits on the crust at $C$, joined to $A$ and $B$ by two straws. What is $\\angle ACB$?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0, 0], b: [-2.7406, 1.2202] },
          { t: 'seg', a: [0, 0], b: [2.7406, 1.2202] },
          { t: 'seg', a: [0.2615, -2.9886], b: [-2.7406, 1.2202] },
          { t: 'seg', a: [0.2615, -2.9886], b: [2.7406, 1.2202] },
          { t: 'angle', at: [0, 0], from: [-2.7406, 1.2202], to: [2.7406, 1.2202], r: 0.55, label: '132' },
          { t: 'angle', at: [0.2615, -2.9886], from: [-2.7406, 1.2202], to: [2.7406, 1.2202], r: 0.6, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-2.7406, 1.2202], label: 'A', dx: -12, dy: -5 },
          { t: 'point', p: [2.7406, 1.2202], label: 'B', dx: 12, dy: -5 },
          { t: 'point', p: [0.2615, -2.9886], label: 'C', dx: 1, dy: 13 },
        ],
      },
      choices: ['$132^\\circ$', '$33^\\circ$', '$66^\\circ$', '$264^\\circ$'],
      answer: 2,
      solution:
        'Route one, through the arc: a central angle equals its arc, so $\\overset{\\frown}{AB} = 132^\\circ$, and the seed’s inscribed angle is half of it, $\\angle ACB = \\frac{132^\\circ}{2} = 66^\\circ$ ✓. Check a second, independent way, with radii and the triangle angle sum: the remaining central angles satisfy $\\angle AOC + \\angle COB = 360^\\circ - 132^\\circ = 228^\\circ$, and triangles $AOC$ and $BOC$ are isosceles because $OA$, $OB$, and $OC$ are all radii, so $\\angle ACB = \\frac{180^\\circ - \\angle AOC}{2} + \\frac{180^\\circ - \\angle BOC}{2} = \\frac{360^\\circ - 228^\\circ}{2} = 66^\\circ$ ✓. (The choice $132^\\circ$ is COPYING THE CENTRAL ANGLE ✗; the choice $264^\\circ$ is DOUBLING INSTEAD OF HALVING ✗; the choice $33^\\circ$ is HALVING TWICE ✗.)',
    },
  ],
  // s6 — diameter given, one acute angle known, find the other.
  [
    {
      q: 'The mouth of a circular tunnel is shown. A support beam $AB$ runs straight across the tunnel through its center, and two cables join a bolt at $C$ on the rim to the beam’s two ends. The cable at $B$ meets the beam at $\\angle ABC = 22^\\circ$. What is $\\angle BAC$, the angle the other cable makes at $A$?',
      fig: {
        view: [-4.6, -4.6, 4.6, 4.6],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3.0000, 0.0000], b: [3.0000, 0.0000] },
          { t: 'seg', a: [-3.0000, 0.0000], b: [-2.1580, 2.0840] },
          { t: 'seg', a: [3.0000, 0.0000], b: [-2.1580, 2.0840] },
          { t: 'right', at: [-2.1580, 2.0840], from: [-3.0000, 0.0000], to: [3.0000, 0.0000] },
          { t: 'angle', at: [3.0000, 0.0000], from: [-2.1580, 2.0840], to: [-3.0000, 0.0000], r: 0.9, label: '22' },
          { t: 'angle', at: [-3.0000, 0.0000], from: [-2.1580, 2.0840], to: [3.0000, 0.0000], r: 0.7, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3.0000, 0.0000], label: 'A', dx: -13, dy: 0 },
          { t: 'point', p: [3.0000, 0.0000], label: 'B', dx: 13, dy: 0 },
          { t: 'point', p: [-2.1580, 2.0840], label: 'C', dx: -9, dy: -9 },
        ],
      },
      choices: ['$22^\\circ$', '$68^\\circ$', '$158^\\circ$', '$44^\\circ$'],
      answer: 1,
      solution:
        'Route one, Thales plus the triangle angle sum: $AB$ passes through the center, so it is a diameter and $\\angle ACB = 90^\\circ$. The angles of triangle $ABC$ then give $\\angle BAC = 180^\\circ - 90^\\circ - 22^\\circ = 68^\\circ$ ✓. Check a second, independent way, entirely with arcs: $\\angle ABC = 22^\\circ$ intercepts $\\overset{\\frown}{AC} = 2 \\times 22^\\circ = 44^\\circ$. The diameter splits the rim into two semicircles, so on $C$’s side $\\overset{\\frown}{AC} + \\overset{\\frown}{CB} = 180^\\circ$, giving $\\overset{\\frown}{CB} = 180^\\circ - 44^\\circ = 136^\\circ$. The angle at $A$ intercepts that arc, so $\\angle BAC = \\frac{136^\\circ}{2} = 68^\\circ$ ✓. (The choice $22^\\circ$ is ASSUMING THE TWO ACUTE ANGLES ARE EQUAL ✗; the choice $158^\\circ$ is FORGETTING THE RIGHT ANGLE and computing $180^\\circ - 22^\\circ$ ✗; the choice $44^\\circ$ is REPORTING THE ARC $AC$ instead of an angle ✗.)',
    },
    {
      q: 'A circular ice rink has a straight barrier $AB$ laid right across it through the center, and a skater at $C$ on the boards is roped to both ends of the barrier, as shown. The rope at $B$ makes $\\angle ABC = 48^\\circ$ with the barrier. What is $\\angle BAC$?',
      fig: {
        view: [-4.6, -4.6, 4.6, 4.6],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3.0000, 0.0000], b: [3.0000, 0.0000] },
          { t: 'seg', a: [-3.0000, 0.0000], b: [0.3136, 2.9836] },
          { t: 'seg', a: [3.0000, 0.0000], b: [0.3136, 2.9836] },
          { t: 'right', at: [0.3136, 2.9836], from: [-3.0000, 0.0000], to: [3.0000, 0.0000] },
          { t: 'angle', at: [3.0000, 0.0000], from: [0.3136, 2.9836], to: [-3.0000, 0.0000], r: 0.9, label: '48' },
          { t: 'angle', at: [-3.0000, 0.0000], from: [0.3136, 2.9836], to: [3.0000, 0.0000], r: 0.7, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3.0000, 0.0000], label: 'A', dx: -13, dy: 0 },
          { t: 'point', p: [3.0000, 0.0000], label: 'B', dx: 13, dy: 0 },
          { t: 'point', p: [0.3136, 2.9836], label: 'C', dx: 1, dy: -13 },
        ],
      },
      choices: ['$48^\\circ$', '$132^\\circ$', '$42^\\circ$', '$96^\\circ$'],
      answer: 2,
      solution:
        'Route one, Thales plus the triangle angle sum: the barrier runs through the center, so $AB$ is a diameter and $\\angle ACB = 90^\\circ$; the angles of triangle $ABC$ then give $\\angle BAC = 180^\\circ - 90^\\circ - 48^\\circ = 42^\\circ$ ✓. Check a second, independent way, entirely with arcs: $\\angle ABC = 48^\\circ$ intercepts $\\overset{\\frown}{AC} = 2 \\times 48^\\circ = 96^\\circ$, and on the skater’s side of the diameter $\\overset{\\frown}{AC} + \\overset{\\frown}{CB} = 180^\\circ$, so $\\overset{\\frown}{CB} = 84^\\circ$ and $\\angle BAC = \\frac{84^\\circ}{2} = 42^\\circ$ ✓. (The choice $48^\\circ$ is ASSUMING THE TWO ACUTE ANGLES ARE EQUAL ✗; the choice $132^\\circ$ is FORGETTING THE RIGHT ANGLE and computing $180^\\circ - 48^\\circ$ ✗; the choice $96^\\circ$ is REPORTING THE ARC $AC$ instead of an angle ✗.)',
    },
    {
      q: 'A bicycle wheel is shown with a straight spoke pair $AB$ running through the hub from rim to rim. A reflector at $C$ on the rim is tied by threads to $A$ and to $B$, and the thread at $B$ makes $\\angle ABC = 61^\\circ$ with the spoke pair. What is $\\angle BAC$?',
      fig: {
        view: [-4.6, -4.6, 4.6, 4.6],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3.0000, 0.0000], b: [3.0000, 0.0000] },
          { t: 'seg', a: [-3.0000, 0.0000], b: [1.5898, 2.5441] },
          { t: 'seg', a: [3.0000, 0.0000], b: [1.5898, 2.5441] },
          { t: 'right', at: [1.5898, 2.5441], from: [-3.0000, 0.0000], to: [3.0000, 0.0000] },
          { t: 'angle', at: [3.0000, 0.0000], from: [1.5898, 2.5441], to: [-3.0000, 0.0000], r: 0.9, label: '61' },
          { t: 'angle', at: [-3.0000, 0.0000], from: [1.5898, 2.5441], to: [3.0000, 0.0000], r: 0.7, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3.0000, 0.0000], label: 'A', dx: -13, dy: 0 },
          { t: 'point', p: [3.0000, 0.0000], label: 'B', dx: 13, dy: 0 },
          { t: 'point', p: [1.5898, 2.5441], label: 'C', dx: 7, dy: -11 },
        ],
      },
      choices: ['$61^\\circ$', '$122^\\circ$', '$119^\\circ$', '$29^\\circ$'],
      answer: 3,
      solution:
        'Route one, Thales plus the triangle angle sum: the spoke pair runs through the hub, so $AB$ is a diameter and $\\angle ACB = 90^\\circ$; then $\\angle BAC = 180^\\circ - 90^\\circ - 61^\\circ = 29^\\circ$ ✓. Check a second, independent way, entirely with arcs: $\\angle ABC = 61^\\circ$ intercepts $\\overset{\\frown}{AC} = 2 \\times 61^\\circ = 122^\\circ$, and the diameter makes $\\overset{\\frown}{AC} + \\overset{\\frown}{CB} = 180^\\circ$ on the reflector’s side, so $\\overset{\\frown}{CB} = 58^\\circ$ and $\\angle BAC = \\frac{58^\\circ}{2} = 29^\\circ$ ✓. (The choice $61^\\circ$ is ASSUMING THE TWO ACUTE ANGLES ARE EQUAL ✗; the choice $119^\\circ$ is FORGETTING THE RIGHT ANGLE and computing $180^\\circ - 61^\\circ$ ✗; the choice $122^\\circ$ is REPORTING THE ARC $AC$ instead of an angle ✗.)',
    },
  ],
  // s7 — all three arcs of an inscribed triangle given; find one angle.
  [
    {
      q: 'Three cabins $A$, $B$, and $C$ stand on the shore of a perfectly circular lake, and paths run straight between them. The shoreline arcs measure $\\overset{\\frown}{AB} = 80^\\circ$, $\\overset{\\frown}{BC} = 160^\\circ$, and $\\overset{\\frown}{CA} = 120^\\circ$, as shown. What is $\\angle A$, the angle between the two paths leaving cabin $A$?',
      fig: {
        view: [-5.0, -5.0, 5.0, 5.0],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0.0000, 3.0000], b: [2.9544, 0.5209] },
          { t: 'seg', a: [2.9544, 0.5209], b: [-2.5981, -1.5000] },
          { t: 'seg', a: [-2.5981, -1.5000], b: [0.0000, 3.0000] },
          { t: 'label', p: [2.4105, 2.8727], text: '80°' },
          { t: 'label', p: [1.2826, -3.5238], text: '160°' },
          { t: 'label', p: [-3.2476, 1.8750], text: '120°' },
          { t: 'angle', at: [0.0000, 3.0000], from: [2.9544, 0.5209], to: [-2.5981, -1.5000], r: 0.6, label: '?' },
          { t: 'point', p: [0.0000, 3.0000], label: 'A', dx: 0, dy: -13 },
          { t: 'point', p: [2.9544, 0.5209], label: 'B', dx: 13, dy: -2 },
          { t: 'point', p: [-2.5981, -1.5000], label: 'C', dx: -11, dy: 7 },
        ],
      },
      choices: ['$80^\\circ$', '$160^\\circ$', '$40^\\circ$', '$60^\\circ$'],
      answer: 0,
      solution:
        'Route one, pick the right arc: the angle at cabin $A$ opens onto the far shore, so it intercepts the arc $BC$ that does not contain $A$. Half of it is $\\angle A = \\frac{160^\\circ}{2} = 80^\\circ$ ✓. Check a second, independent way, by building the whole triangle and testing the angle sum: $\\angle B = \\frac{120^\\circ}{2} = 60^\\circ$ from arc $CA$ and $\\angle C = \\frac{80^\\circ}{2} = 40^\\circ$ from arc $AB$, and $80^\\circ + 60^\\circ + 40^\\circ = 180^\\circ$, exactly what a triangle must total — so the $80^\\circ$ holds up ✓. (The choice $160^\\circ$ is CONFUSING THE ARC WITH THE ANGLE ✗; the choice $40^\\circ$ is USING ARC $AB$, an arc that touches $A$ instead of facing it ✗; the choice $60^\\circ$ is USING ARC $CA$, the other arc that touches $A$ ✗.)',
    },
    {
      q: 'Three buoys $A$, $B$, and $C$ float on the edge of a round harbor, joined by three straight tow ropes. The harbor edge is cut into arcs $\\overset{\\frown}{AB} = 126^\\circ$, $\\overset{\\frown}{BC} = 110^\\circ$, and $\\overset{\\frown}{CA} = 124^\\circ$, as shown. What is $\\angle A$, the angle between the two ropes at buoy $A$?',
      fig: {
        view: [-5.0, -5.0, 5.0, 5.0],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0.0000, 3.0000], b: [2.4271, -1.7634] },
          { t: 'seg', a: [2.4271, -1.7634], b: [-2.4871, -1.6776] },
          { t: 'seg', a: [-2.4871, -1.6776], b: [0.0000, 3.0000] },
          { t: 'label', p: [3.3413, 1.7025], text: '126°' },
          { t: 'label', p: [-0.0654, -3.7494], text: '110°' },
          { t: 'label', p: [-3.3111, 1.7605], text: '124°' },
          { t: 'angle', at: [0.0000, 3.0000], from: [2.4271, -1.7634], to: [-2.4871, -1.6776], r: 0.6, label: '?' },
          { t: 'point', p: [0.0000, 3.0000], label: 'A', dx: 0, dy: -13 },
          { t: 'point', p: [2.4271, -1.7634], label: 'B', dx: 11, dy: 8 },
          { t: 'point', p: [-2.4871, -1.6776], label: 'C', dx: -11, dy: 7 },
        ],
      },
      choices: ['$110^\\circ$', '$55^\\circ$', '$63^\\circ$', '$62^\\circ$'],
      answer: 1,
      solution:
        'Route one, pick the right arc: the angle at buoy $A$ faces across the harbor, so it intercepts arc $BC$, the arc that does not contain $A$. Half of it is $\\angle A = \\frac{110^\\circ}{2} = 55^\\circ$ ✓. Check a second, independent way, by building the whole triangle and testing the angle sum: $\\angle B = \\frac{124^\\circ}{2} = 62^\\circ$ from arc $CA$ and $\\angle C = \\frac{126^\\circ}{2} = 63^\\circ$ from arc $AB$, and $55^\\circ + 62^\\circ + 63^\\circ = 180^\\circ$, the total every triangle owes — so $55^\\circ$ survives the test ✓. (The choice $110^\\circ$ is CONFUSING THE ARC WITH THE ANGLE ✗; the choice $63^\\circ$ is USING ARC $AB$, an arc that touches $A$ rather than facing it ✗; the choice $62^\\circ$ is USING ARC $CA$, the other arc touching $A$ ✗.)',
    },
    {
      q: 'Three tents $A$, $B$, and $C$ are pitched on the edge of a circular festival field, with rope lines running straight between them. The edge splits into arcs $\\overset{\\frown}{AB} = 90^\\circ$, $\\overset{\\frown}{BC} = 96^\\circ$, and $\\overset{\\frown}{CA} = 174^\\circ$, as shown. What is $\\angle A$, the angle between the two rope lines at tent $A$?',
      fig: {
        view: [-5.0, -5.0, 5.0, 5.0],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0.0000, 3.0000], b: [3.0000, 0.0000] },
          { t: 'seg', a: [3.0000, 0.0000], b: [-0.3136, -2.9836] },
          { t: 'seg', a: [-0.3136, -2.9836], b: [0.0000, 3.0000] },
          { t: 'label', p: [2.6517, 2.6517], text: '90°' },
          { t: 'label', p: [2.5092, -2.7868], text: '96°' },
          { t: 'label', p: [-3.7449, 0.1963], text: '174°' },
          { t: 'angle', at: [0.0000, 3.0000], from: [3.0000, 0.0000], to: [-0.3136, -2.9836], r: 0.6, label: '?' },
          { t: 'point', p: [0.0000, 3.0000], label: 'A', dx: 0, dy: -13 },
          { t: 'point', p: [3.0000, 0.0000], label: 'B', dx: 13, dy: 0 },
          { t: 'point', p: [-0.3136, -2.9836], label: 'C', dx: -1, dy: 13 },
        ],
      },
      choices: ['$45^\\circ$', '$96^\\circ$', '$87^\\circ$', '$48^\\circ$'],
      answer: 3,
      solution:
        'Route one, pick the right arc: the angle at tent $A$ opens across the field onto arc $BC$, the arc that does not contain $A$, so $\\angle A = \\frac{96^\\circ}{2} = 48^\\circ$ ✓. Check a second, independent way, by building the whole triangle and testing the angle sum: $\\angle B = \\frac{174^\\circ}{2} = 87^\\circ$ from arc $CA$ and $\\angle C = \\frac{90^\\circ}{2} = 45^\\circ$ from arc $AB$, and $48^\\circ + 87^\\circ + 45^\\circ = 180^\\circ$, so the three angles fit a real triangle and $48^\\circ$ stands ✓. (The choice $96^\\circ$ is CONFUSING THE ARC WITH THE ANGLE ✗; the choice $45^\\circ$ is USING ARC $AB$, an arc that touches $A$ instead of facing it ✗; the choice $87^\\circ$ is USING ARC $CA$, the other arc touching $A$ ✗.)',
    },
  ],
  // s8 — an inscribed angle given; find the major arc.
  [
    {
      q: 'Three lamps hang on a circular ceiling rail. The lamp at $C$ is wired to the lamps at $A$ and $B$, and those wires make $\\angle ACB = 43^\\circ$, as shown. What is the measure of the MAJOR arc $ACB$ — the long way around the rail from $A$ to $B$, passing $C$?',
      fig: {
        view: [-4.9, -4.9, 4.9, 4.9],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [1.5000, -2.5981], b: [-2.0460, 2.1941] },
          { t: 'seg', a: [1.5000, -2.5981], b: [2.0460, 2.1941] },
          { t: 'angle', at: [1.5000, -2.5981], from: [-2.0460, 2.1941], to: [2.0460, 2.1941], r: 0.6, label: '43' },
          { t: 'label', p: [-3.5238, -1.2826], text: '?' },
          { t: 'point', p: [-2.0460, 2.1941], label: 'A', dx: -9, dy: -10 },
          { t: 'point', p: [2.0460, 2.1941], label: 'B', dx: 9, dy: -10 },
          { t: 'point', p: [1.5000, -2.5981], label: 'C', dx: 7, dy: 11 },
        ],
      },
      choices: ['$86^\\circ$', '$317^\\circ$', '$274^\\circ$', '$43^\\circ$'],
      answer: 2,
      solution:
        'Route one, minor arc first, then the rest of the circle: the angle at $C$ intercepts the minor arc, which is double it, $\\overset{\\frown}{AB} = 2 \\times 43^\\circ = 86^\\circ$. The major arc is everything left over: $360^\\circ - 86^\\circ = 274^\\circ$ ✓. Check a second, independent way, from a point on the other side: any point $D$ on the minor arc looks across chord $AB$ at the major arc, so $\\angle ADB = \\frac{274^\\circ}{2} = 137^\\circ$. Angles seen from opposite arcs of the same chord must add to $180^\\circ$, and $43^\\circ + 137^\\circ = 180^\\circ$ exactly, so $274^\\circ$ is the right major arc ✓. (The choice $86^\\circ$ is STOPPING AT THE MINOR ARC, one step short ✗; the choice $317^\\circ$ is SUBTRACTING THE ANGLE INSTEAD OF THE ARC, computing $360^\\circ - 43^\\circ$ ✗; the choice $43^\\circ$ is CONFUSING THE ANGLE WITH AN ARC ✗.)',
    },
    {
      q: 'A round goldfish tank is shown from above. A snail at $C$ on the glass faces two plants rooted at $A$ and $B$ on the glass, and its two lines of sight make $\\angle ACB = 67^\\circ$. What is the measure of the MAJOR arc $ACB$, the long way around the glass from $A$ to $B$ through the snail?',
      fig: {
        view: [-4.9, -4.9, 4.9, 4.9],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [1.0261, -2.8191], b: [-2.7615, 1.1722] },
          { t: 'seg', a: [1.0261, -2.8191], b: [2.7615, 1.1722] },
          { t: 'angle', at: [1.0261, -2.8191], from: [-2.7615, 1.1722], to: [2.7615, 1.1722], r: 0.6, label: '67' },
          { t: 'label', p: [-3.2476, -1.8750], text: '?' },
          { t: 'point', p: [-2.7615, 1.1722], label: 'A', dx: -12, dy: -5 },
          { t: 'point', p: [2.7615, 1.1722], label: 'B', dx: 12, dy: -5 },
          { t: 'point', p: [1.0261, -2.8191], label: 'C', dx: 4, dy: 12 },
        ],
      },
      choices: ['$226^\\circ$', '$134^\\circ$', '$293^\\circ$', '$67^\\circ$'],
      answer: 0,
      solution:
        'Route one, minor arc first, then the rest of the circle: the snail’s angle intercepts the minor arc, which is double it, $\\overset{\\frown}{AB} = 2 \\times 67^\\circ = 134^\\circ$, so the major arc is $360^\\circ - 134^\\circ = 226^\\circ$ ✓. Check a second, independent way, from a point on the other side: a point $D$ on the minor arc sees chord $AB$ across the major arc, so $\\angle ADB = \\frac{226^\\circ}{2} = 113^\\circ$. Two angles looking at the same chord from opposite arcs must add to $180^\\circ$, and $67^\\circ + 113^\\circ = 180^\\circ$, confirming $226^\\circ$ ✓. (The choice $134^\\circ$ is STOPPING AT THE MINOR ARC ✗; the choice $293^\\circ$ is SUBTRACTING THE ANGLE INSTEAD OF THE ARC, computing $360^\\circ - 67^\\circ$ ✗; the choice $67^\\circ$ is CONFUSING THE ANGLE WITH AN ARC ✗.)',
    },
    {
      q: 'A circular mirror hangs in a hallway. Two chips in its edge sit at $A$ and $B$, and a third chip at $C$ is joined to both by thin scratches making $\\angle ACB = 71^\\circ$, as shown. What is the measure of the MAJOR arc $ACB$ — the long way around the edge from $A$ to $B$, through $C$?',
      fig: {
        view: [-4.9, -4.9, 4.9, 4.9],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [1.5000, -2.5981], b: [-2.8366, 0.9767] },
          { t: 'seg', a: [1.5000, -2.5981], b: [2.8366, 0.9767] },
          { t: 'angle', at: [1.5000, -2.5981], from: [-2.8366, 0.9767], to: [2.8366, 0.9767], r: 0.6, label: '71' },
          { t: 'label', p: [-3.0718, -2.1509], text: '?' },
          { t: 'point', p: [-2.8366, 0.9767], label: 'A', dx: -12, dy: -4 },
          { t: 'point', p: [2.8366, 0.9767], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [1.5000, -2.5981], label: 'C', dx: 7, dy: 11 },
        ],
      },
      choices: ['$142^\\circ$', '$218^\\circ$', '$289^\\circ$', '$71^\\circ$'],
      answer: 1,
      solution:
        'Route one, minor arc first, then the rest of the circle: the angle at $C$ intercepts the minor arc, which is double it, $\\overset{\\frown}{AB} = 2 \\times 71^\\circ = 142^\\circ$, so the major arc measures $360^\\circ - 142^\\circ = 218^\\circ$ ✓. Check a second, independent way, from a point on the other side: a point $D$ on the minor arc looks across chord $AB$ at the major arc, giving $\\angle ADB = \\frac{218^\\circ}{2} = 109^\\circ$, and angles seen from opposite arcs of one chord must total $180^\\circ$ — indeed $71^\\circ + 109^\\circ = 180^\\circ$ ✓. (The choice $142^\\circ$ is STOPPING AT THE MINOR ARC ✗; the choice $289^\\circ$ is SUBTRACTING THE ANGLE INSTEAD OF THE ARC, computing $360^\\circ - 71^\\circ$ ✗; the choice $71^\\circ$ is CONFUSING THE ANGLE WITH AN ARC ✗.)',
    },
  ],
  // s9 — two angles of an inscribed triangle given; find the third.
  [
    {
      q: 'Three towns $A$, $B$, and $C$ sit on a circular ring road, and straight highways connect them. Surveyors measure $\\angle ACB = 25^\\circ$ at town $C$ and $\\angle BAC = 88^\\circ$ at town $A$, as shown. What is $\\angle ABC$ at town $B$?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0.0000, 3.0000], b: [2.2981, 1.9284] },
          { t: 'seg', a: [2.2981, 1.9284], b: [-2.1580, -2.0840] },
          { t: 'seg', a: [-2.1580, -2.0840], b: [0.0000, 3.0000] },
          { t: 'angle', at: [-2.1580, -2.0840], from: [0.0000, 3.0000], to: [2.2981, 1.9284], r: 0.6, label: '25' },
          { t: 'angle', at: [0.0000, 3.0000], from: [2.2981, 1.9284], to: [-2.1580, -2.0840], r: 0.55, label: '88' },
          { t: 'angle', at: [2.2981, 1.9284], from: [0.0000, 3.0000], to: [-2.1580, -2.0840], r: 0.55, label: '?' },
          { t: 'point', p: [0.0000, 3.0000], label: 'A', dx: 0, dy: -13 },
          { t: 'point', p: [2.2981, 1.9284], label: 'B', dx: 10, dy: -8 },
          { t: 'point', p: [-2.1580, -2.0840], label: 'C', dx: -9, dy: 9 },
        ],
      },
      choices: ['$113^\\circ$', '$67^\\circ$', '$134^\\circ$', '$92^\\circ$'],
      answer: 1,
      solution:
        'Route one, through the arcs: $\\angle ACB = 25^\\circ$ makes $\\overset{\\frown}{AB} = 50^\\circ$ and $\\angle BAC = 88^\\circ$ makes $\\overset{\\frown}{BC} = 176^\\circ$. The three arcs fill the ring road, so $\\overset{\\frown}{CA} = 360^\\circ - 50^\\circ - 176^\\circ = 134^\\circ$, and the angle at $B$ is half the arc it faces: $\\angle ABC = \\frac{134^\\circ}{2} = 67^\\circ$ ✓. Check a second, independent way, with the triangle angle sum alone, never mentioning the circle: $\\angle ABC = 180^\\circ - 25^\\circ - 88^\\circ = 67^\\circ$ ✓. (The choice $113^\\circ$ is ADDING THE TWO GIVEN ANGLES instead of subtracting them from $180^\\circ$ ✗; the choice $134^\\circ$ is REPORTING THE ARC $CA$ rather than the angle that faces it ✗; the choice $92^\\circ$ is USING ONLY ONE GIVEN, computing $180^\\circ - 88^\\circ$ ✗.)',
    },
    {
      q: 'Three chairs $A$, $B$, and $C$ are pushed against the edge of a round table, and ribbons run straight between them across the tabletop. At chair $C$ the ribbons meet at $\\angle ACB = 48^\\circ$, and at chair $A$ they meet at $\\angle BAC = 51^\\circ$, as shown. What is $\\angle ABC$ at chair $B$?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0.0000, 3.0000], b: [2.9836, -0.3136] },
          { t: 'seg', a: [2.9836, -0.3136], b: [-0.9271, -2.8532] },
          { t: 'seg', a: [-0.9271, -2.8532], b: [0.0000, 3.0000] },
          { t: 'angle', at: [-0.9271, -2.8532], from: [0.0000, 3.0000], to: [2.9836, -0.3136], r: 0.6, label: '48' },
          { t: 'angle', at: [0.0000, 3.0000], from: [2.9836, -0.3136], to: [-0.9271, -2.8532], r: 0.55, label: '51' },
          { t: 'angle', at: [2.9836, -0.3136], from: [0.0000, 3.0000], to: [-0.9271, -2.8532], r: 0.55, label: '?' },
          { t: 'point', p: [0.0000, 3.0000], label: 'A', dx: 0, dy: -13 },
          { t: 'point', p: [2.9836, -0.3136], label: 'B', dx: 13, dy: 1 },
          { t: 'point', p: [-0.9271, -2.8532], label: 'C', dx: -4, dy: 12 },
        ],
      },
      choices: ['$99^\\circ$', '$162^\\circ$', '$129^\\circ$', '$81^\\circ$'],
      answer: 3,
      solution:
        'Route one, through the arcs: $\\angle ACB = 48^\\circ$ makes $\\overset{\\frown}{AB} = 96^\\circ$ and $\\angle BAC = 51^\\circ$ makes $\\overset{\\frown}{BC} = 102^\\circ$. The three arcs fill the table edge, so $\\overset{\\frown}{CA} = 360^\\circ - 96^\\circ - 102^\\circ = 162^\\circ$, and the angle at $B$ is half the arc it faces: $\\angle ABC = \\frac{162^\\circ}{2} = 81^\\circ$ ✓. Check a second, independent way, with the triangle angle sum alone, never mentioning the table’s edge: $\\angle ABC = 180^\\circ - 48^\\circ - 51^\\circ = 81^\\circ$ ✓. (The choice $99^\\circ$ is ADDING THE TWO GIVEN ANGLES instead of subtracting them from $180^\\circ$ ✗; the choice $162^\\circ$ is REPORTING THE ARC $CA$ rather than the angle facing it ✗; the choice $129^\\circ$ is USING ONLY ONE GIVEN, computing $180^\\circ - 51^\\circ$ ✗.)',
    },
    {
      q: 'Three stepping stones $A$, $B$, and $C$ poke out of a circular reflecting pool, right at its rim, and planks lie straight between them. A gardener measures $\\angle ACB = 39^\\circ$ at stone $C$ and $\\angle BAC = 57^\\circ$ at stone $A$, as shown. What is $\\angle ABC$ at stone $B$?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0.0000, 3.0000], b: [2.9344, 0.6237] },
          { t: 'seg', a: [2.9344, 0.6237], b: [-0.6237, -2.9344] },
          { t: 'seg', a: [-0.6237, -2.9344], b: [0.0000, 3.0000] },
          { t: 'angle', at: [-0.6237, -2.9344], from: [0.0000, 3.0000], to: [2.9344, 0.6237], r: 0.6, label: '39' },
          { t: 'angle', at: [0.0000, 3.0000], from: [2.9344, 0.6237], to: [-0.6237, -2.9344], r: 0.55, label: '57' },
          { t: 'angle', at: [2.9344, 0.6237], from: [0.0000, 3.0000], to: [-0.6237, -2.9344], r: 0.55, label: '?' },
          { t: 'point', p: [0.0000, 3.0000], label: 'A', dx: 0, dy: -13 },
          { t: 'point', p: [2.9344, 0.6237], label: 'B', dx: 13, dy: -3 },
          { t: 'point', p: [-0.6237, -2.9344], label: 'C', dx: -3, dy: 13 },
        ],
      },
      choices: ['$96^\\circ$', '$123^\\circ$', '$84^\\circ$', '$168^\\circ$'],
      answer: 2,
      solution:
        'Route one, through the arcs: $\\angle ACB = 39^\\circ$ makes $\\overset{\\frown}{AB} = 78^\\circ$ and $\\angle BAC = 57^\\circ$ makes $\\overset{\\frown}{BC} = 114^\\circ$. The three arcs fill the rim, so $\\overset{\\frown}{CA} = 360^\\circ - 78^\\circ - 114^\\circ = 168^\\circ$, and the angle at $B$ is half the arc it faces: $\\angle ABC = \\frac{168^\\circ}{2} = 84^\\circ$ ✓. Check a second, independent way, with the triangle angle sum alone, never mentioning the rim: $\\angle ABC = 180^\\circ - 39^\\circ - 57^\\circ = 84^\\circ$ ✓. (The choice $96^\\circ$ is ADDING THE TWO GIVEN ANGLES instead of subtracting them from $180^\\circ$ ✗; the choice $168^\\circ$ is REPORTING THE ARC $CA$ rather than the angle facing it ✗; the choice $123^\\circ$ is USING ONLY ONE GIVEN, computing $180^\\circ - 57^\\circ$ ✗.)',
    },
  ],
  // s10 — arcs in a given ratio; find the largest angle of the triangle.
  [
    {
      q: 'A circular garden path is broken into three stretches by gates at $A$, $B$, and $C$, and straight hedges run between the gates. The stretches $\\overset{\\frown}{BC}$, $\\overset{\\frown}{CA}$, and $\\overset{\\frown}{AB}$ are in the ratio $2 : 3 : 7$, as marked. What is the largest angle of the hedge triangle $ABC$?',
      fig: {
        view: [-5.0, -5.0, 5.0, 5.0],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0.0000, 3.0000], b: [-1.5000, -2.5981] },
          { t: 'seg', a: [-1.5000, -2.5981], b: [-3.0000, 0.0000] },
          { t: 'seg', a: [-3.0000, 0.0000], b: [0.0000, 3.0000] },
          { t: 'label', p: [3.6222, -0.9706], text: '7x' },
          { t: 'label', p: [-3.2476, -1.8750], text: '2x' },
          { t: 'label', p: [-2.6517, 2.6517], text: '3x' },
          { t: 'point', p: [0.0000, 3.0000], label: 'A', dx: 0, dy: -13 },
          { t: 'point', p: [-1.5000, -2.5981], label: 'B', dx: -7, dy: 11 },
          { t: 'point', p: [-3.0000, 0.0000], label: 'C', dx: -13, dy: 0 },
        ],
      },
      choices: ['$210^\\circ$', '$30^\\circ$', '$105^\\circ$', '$45^\\circ$'],
      answer: 2,
      solution:
        'Route one, find the arcs first: the three stretches make the whole path, so $2x + 3x + 7x = 360^\\circ$, giving $12x = 360^\\circ$ and $x = 30^\\circ$. The arcs are then $\\overset{\\frown}{BC} = 60^\\circ$, $\\overset{\\frown}{CA} = 90^\\circ$, and $\\overset{\\frown}{AB} = 210^\\circ$, and each angle is half the arc it faces, so the angles are $30^\\circ$, $45^\\circ$, and $105^\\circ$ — the largest is $105^\\circ$, sitting at $C$ opposite the longest stretch ✓. Check a second, independent way, without ever computing an arc: halving preserves ratios, so the angles themselves are in the ratio $2 : 3 : 7$, and they must total $180^\\circ$. That gives $12y = 180^\\circ$, $y = 15^\\circ$, and angles $30^\\circ$, $45^\\circ$, $105^\\circ$ — the same largest angle by a route that never mentions $360^\\circ$ ✓. (The choice $210^\\circ$ is CONFUSING THE ARC WITH THE ANGLE ✗; the choice $30^\\circ$ is REPORTING THE SMALLEST ANGLE instead of the largest ✗; the choice $45^\\circ$ is REPORTING THE MIDDLE ANGLE ✗.)',
    },
    {
      q: 'A round cake has three candles pressed into its edge at $A$, $B$, and $C$, and three straight cuts join them. The edge arcs $\\overset{\\frown}{BC}$, $\\overset{\\frown}{CA}$, and $\\overset{\\frown}{AB}$ are in the ratio $3 : 5 : 7$, as marked. What is the largest angle of the triangle cut into the cake?',
      fig: {
        view: [-5.0, -5.0, 5.0, 5.0],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0.0000, 3.0000], b: [0.6237, -2.9344] },
          { t: 'seg', a: [0.6237, -2.9344], b: [-2.5981, -1.5000] },
          { t: 'seg', a: [-2.5981, -1.5000], b: [0.0000, 3.0000] },
          { t: 'label', p: [3.7295, 0.3920], text: '7x' },
          { t: 'label', p: [-1.5253, -3.4258], text: '3x' },
          { t: 'label', p: [-3.2476, 1.8750], text: '5x' },
          { t: 'point', p: [0.0000, 3.0000], label: 'A', dx: 0, dy: -13 },
          { t: 'point', p: [0.6237, -2.9344], label: 'B', dx: 3, dy: 13 },
          { t: 'point', p: [-2.5981, -1.5000], label: 'C', dx: -11, dy: 7 },
        ],
      },
      choices: ['$168^\\circ$', '$36^\\circ$', '$60^\\circ$', '$84^\\circ$'],
      answer: 3,
      solution:
        'Route one, find the arcs first: the three arcs make the whole edge, so $3x + 5x + 7x = 360^\\circ$, giving $15x = 360^\\circ$ and $x = 24^\\circ$. The arcs are $\\overset{\\frown}{BC} = 72^\\circ$, $\\overset{\\frown}{CA} = 120^\\circ$, and $\\overset{\\frown}{AB} = 168^\\circ$, and each angle is half the arc it faces, so the angles are $36^\\circ$, $60^\\circ$, and $84^\\circ$ — the largest is $84^\\circ$, at $C$ opposite the longest arc ✓. Check a second, independent way, without computing a single arc: halving keeps the ratio, so the angles are in the ratio $3 : 5 : 7$ and total $180^\\circ$, giving $15y = 180^\\circ$, $y = 12^\\circ$, and angles $36^\\circ$, $60^\\circ$, $84^\\circ$ ✓. (The choice $168^\\circ$ is CONFUSING THE ARC WITH THE ANGLE ✗; the choice $36^\\circ$ is REPORTING THE SMALLEST ANGLE instead of the largest ✗; the choice $60^\\circ$ is REPORTING THE MIDDLE ANGLE ✗.)',
    },
    {
      q: 'A circular racetrack is marked by three flags at $A$, $B$, and $C$, with straight sight lines drawn between them. The track arcs $\\overset{\\frown}{BC}$, $\\overset{\\frown}{CA}$, and $\\overset{\\frown}{AB}$ are in the ratio $5 : 6 : 7$, as marked. What is the largest angle of triangle $ABC$?',
      fig: {
        view: [-5.0, -5.0, 5.0, 5.0],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0.0000, 3.0000], b: [1.9284, -2.2981] },
          { t: 'seg', a: [1.9284, -2.2981], b: [-2.5981, -1.5000] },
          { t: 'seg', a: [-2.5981, -1.5000], b: [0.0000, 3.0000] },
          { t: 'label', p: [3.5238, 1.2826], text: '7x' },
          { t: 'label', p: [-0.6512, -3.6930], text: '5x' },
          { t: 'label', p: [-3.2476, 1.8750], text: '6x' },
          { t: 'point', p: [0.0000, 3.0000], label: 'A', dx: 0, dy: -13 },
          { t: 'point', p: [1.9284, -2.2981], label: 'B', dx: 8, dy: 10 },
          { t: 'point', p: [-2.5981, -1.5000], label: 'C', dx: -11, dy: 7 },
        ],
      },
      choices: ['$70^\\circ$', '$140^\\circ$', '$50^\\circ$', '$60^\\circ$'],
      answer: 0,
      solution:
        'Route one, find the arcs first: the three arcs make one full lap, so $5x + 6x + 7x = 360^\\circ$, giving $18x = 360^\\circ$ and $x = 20^\\circ$. The arcs are $\\overset{\\frown}{BC} = 100^\\circ$, $\\overset{\\frown}{CA} = 120^\\circ$, and $\\overset{\\frown}{AB} = 140^\\circ$, and each angle is half the arc it faces, so the angles are $50^\\circ$, $60^\\circ$, and $70^\\circ$ — the largest is $70^\\circ$, at $C$ opposite the longest arc ✓. Check a second, independent way, without computing a single arc: halving preserves the ratio, so the angles are in the ratio $5 : 6 : 7$ and must total $180^\\circ$, giving $18y = 180^\\circ$, $y = 10^\\circ$, and angles $50^\\circ$, $60^\\circ$, $70^\\circ$ ✓. (The choice $140^\\circ$ is CONFUSING THE ARC WITH THE ANGLE ✗; the choice $50^\\circ$ is REPORTING THE SMALLEST ANGLE instead of the largest ✗; the choice $60^\\circ$ is REPORTING THE MIDDLE ANGLE ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 12,
  sections: {
    '12.1': s121,
  },
}
