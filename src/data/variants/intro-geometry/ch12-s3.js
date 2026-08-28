// Introduction to Geometry chapter 12 — variations for section 12.3 (Tangents).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is worked twice along routes that share no steps: once
//    through the tangent rule the problem is about, and once through an
//    independent picture (the right angle at the point of tangency, the
//    isosceles triangle made by two radii, or the quadrilateral OAPB).
//  - Every figure is built from the numbers it shows. Each labeled point on a
//    circle sits at (r cos t, r sin t); each tangent is drawn perpendicular to
//    the radius at its point of tangency; each outside point P sits at the true
//    distance r / sin(half the tangent-tangent angle) from the center.
//  - Each distractor is one named mistake, named in CAPS at the end.

const s123 = [
  // s1 — the tangent length from an outside point, PT = sqrt(OP^2 - r^2).
  [
    {
      q: 'A round grain silo has radius $9$ meters. Priya stands at a point $P$ whose distance to the silo’s center $O$ is $41$ meters, and her line of sight just grazes the silo wall at $T$. How far is Priya from that grazing point — that is, how long is the tangent segment $PT$?',
      fig: {
        view: [-3, -3, 10.6, 3.2],
        elems: [
          { t: 'circle', c: [0, 0], r: 2 },
          { t: 'seg', a: [0, 0], b: [0.439, 1.9512] },
          { t: 'seg', a: [0.439, 1.9512], b: [9.1111, 0] },
          { t: 'seg', a: [0, 0], b: [9.1111, 0], dash: true },
          { t: 'right', at: [0.439, 1.9512], from: [0, 0], to: [9.1111, 0] },
          { t: 'label', p: [0.2195, 0.9756], text: '9', dx: -10, dy: -2 },
          { t: 'label', p: [4.5556, 0], text: '41', dx: 0, dy: 14 },
          { t: 'label', p: [4.7751, 0.9756], text: '?', dx: 4, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: -9, dy: 11 },
          { t: 'point', p: [0.439, 1.9512], label: 'T', dx: -4, dy: -11 },
          { t: 'point', p: [9.1111, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$40$', '$32$', '$\\sqrt{1762}$', '$41$'],
      answer: 0,
      solution:
        'Route one, the right triangle: a tangent meets the radius drawn to its point of tangency at $90^\\circ$, so triangle $OTP$ has its right angle at $T$ and $OP = 41$ is the hypotenuse. Then $PT = \\sqrt{41^2 - 9^2} = \\sqrt{1681 - 81} = \\sqrt{1600} = 40$ ✓. Check a second, independent way: run the triangle backward and rebuild the hypotenuse from the two legs — $9^2 + 40^2 = 81 + 1600 = 1681$, and $\\sqrt{1681} = 41$, exactly the distance Priya was given, which no other candidate length reproduces ✓. (The choice $32$ is SUBTRACTING THE LENGTHS INSTEAD OF THEIR SQUARES, $41 - 9$ ✗; the choice $\\sqrt{1762}$ is ADDING THE SQUARES, which treats $41$ as a leg when it is the hypotenuse ✗; the choice $41$ is FORGETTING THE TANGENT MEETS THE RADIUS AT A RIGHT ANGLE and reporting the distance to the center instead of to the wall ✗.)',
    },
    {
      q: 'A circular hedge in a park has radius $8$ feet and center $O$. A bench sits at a point $P$ with $OP = 17$ feet, and a gardener pulls a string taut from the bench to the hedge so that the string touches the hedge at exactly one point $T$. How long is the string $PT$?',
      fig: {
        view: [-4, -4, 7.8, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0, 0], b: [1.4118, 2.6471] },
          { t: 'seg', a: [1.4118, 2.6471], b: [6.375, 0] },
          { t: 'seg', a: [0, 0], b: [6.375, 0], dash: true },
          { t: 'right', at: [1.4118, 2.6471], from: [0, 0], to: [6.375, 0] },
          { t: 'label', p: [0.7059, 1.3235], text: '8', dx: -10, dy: -2 },
          { t: 'label', p: [3.1875, 0], text: '17', dx: 0, dy: 14 },
          { t: 'label', p: [3.8934, 1.3235], text: '?', dx: 6, dy: -9 },
          { t: 'point', p: [0, 0], label: 'O', dx: -9, dy: 11 },
          { t: 'point', p: [1.4118, 2.6471], label: 'T', dx: -4, dy: -11 },
          { t: 'point', p: [6.375, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$9$', '$\\sqrt{353}$', '$15$', '$17$'],
      answer: 2,
      solution:
        'Route one, the right triangle: the string is tangent, so it is perpendicular to radius $OT$, making $OTP$ a right triangle with hypotenuse $OP = 17$. Then $PT = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$ ✓. Check a second, independent way: build the hypotenuse from the legs instead — $8^2 + 15^2 = 64 + 225 = 289$ and $\\sqrt{289} = 17$, matching the given bench distance exactly ✓. (The choice $9$ is SUBTRACTING THE LENGTHS INSTEAD OF THEIR SQUARES, $17 - 8$ ✗; the choice $\\sqrt{353}$ is ADDING THE SQUARES, which puts the hypotenuse in a leg’s seat ✗; the choice $17$ is FORGETTING THE TANGENT MEETS THE RADIUS AT A RIGHT ANGLE and reusing the distance to the center ✗.)',
    },
    {
      q: 'A circular ice rink has radius $20$ meters and center $O$. A camera is mounted at a point $P$ with $OP = 29$ meters, and the edge of its view just brushes the rink boundary at $T$. How long is the tangent segment $PT$?',
      fig: {
        view: [-4.4, -4.4, 6.4, 4.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3.4 },
          { t: 'seg', a: [0, 0], b: [2.3448, 2.4621] },
          { t: 'seg', a: [2.3448, 2.4621], b: [4.93, 0] },
          { t: 'seg', a: [0, 0], b: [4.93, 0], dash: true },
          { t: 'right', at: [2.3448, 2.4621], from: [0, 0], to: [4.93, 0] },
          { t: 'label', p: [1.1724, 1.2311], text: '20', dx: -12, dy: -2 },
          { t: 'label', p: [2.465, 0], text: '29', dx: 0, dy: 14 },
          { t: 'label', p: [3.6374, 1.2311], text: '?', dx: 8, dy: -6 },
          { t: 'point', p: [0, 0], label: 'O', dx: -9, dy: 11 },
          { t: 'point', p: [2.3448, 2.4621], label: 'T', dx: -2, dy: -12 },
          { t: 'point', p: [4.93, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$9$', '$21$', '$\\sqrt{1241}$', '$29$'],
      answer: 1,
      solution:
        'Route one, the right triangle: the sight line is tangent, so it meets radius $OT$ at $90^\\circ$ and $OP = 29$ is the hypotenuse of right triangle $OTP$. Then $PT = \\sqrt{29^2 - 20^2} = \\sqrt{841 - 400} = \\sqrt{441} = 21$ ✓. Check a second, independent way: reassemble the hypotenuse from the two legs — $20^2 + 21^2 = 400 + 441 = 841$ and $\\sqrt{841} = 29$, precisely the mounted distance ✓. (The choice $9$ is SUBTRACTING THE LENGTHS INSTEAD OF THEIR SQUARES, $29 - 20$ ✗; the choice $\\sqrt{1241}$ is ADDING THE SQUARES rather than subtracting them ✗; the choice $29$ is FORGETTING THE TANGENT MEETS THE RADIUS AT A RIGHT ANGLE, so the distance to the center gets reported as the tangent length ✗.)',
    },
  ],
  // s2 — tangent-chord angle from the intercepted arc.
  [
    {
      q: 'A straight rail runs alongside a circular skate bowl and touches its rim at $A$. A support bar runs from $A$ across the bowl to a point $B$ on the rim, and the arc from $A$ to $B$ on the rail’s side measures $124^\\circ$. What angle does the support bar make with the rail?',
      fig: {
        view: [-4.9, -4.5, 5.6, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'line', a: [-4.2, -3], b: [4.2, -3] },
          { t: 'seg', a: [0, -3], b: [2.4871, 1.6776] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -90, to: 34 },
          { t: 'label', p: [3.3111, -1.7605], text: '124°', dx: 12, dy: 2 },
          { t: 'angle', at: [0, -3], from: [2.5, -3], to: [2.4871, 1.6776], r: 0.7, label: '?' },
          { t: 'point', p: [0, -3], label: 'A', dx: -7, dy: 12 },
          { t: 'point', p: [2.4871, 1.6776], label: 'B', dx: 11, dy: -7 },
        ],
      },
      choices: ['$124^\\circ$', '$62^\\circ$', '$118^\\circ$', '$248^\\circ$'],
      answer: 1,
      solution:
        'Route one, the tangent-chord rule: an angle formed by a tangent and a chord at the point of tangency is half its intercepted arc, so the angle is $\\frac{124^\\circ}{2} = 62^\\circ$ ✓. Check a second, independent way, using only the radius: draw $OA$ and $OB$. The central angle $\\angle AOB$ equals its arc, $124^\\circ$, and triangle $AOB$ is isosceles because $OA = OB$, so each base angle is $\\frac{180^\\circ - 124^\\circ}{2} = 28^\\circ$. The rail is perpendicular to $OA$, so the rail-to-bar angle is $90^\\circ - 28^\\circ = 62^\\circ$ ✓. (The choice $124^\\circ$ is REPORTING THE ARC ITSELF, as though the vertex sat at the center ✗; the choice $118^\\circ$ is HALVING THE OTHER ARC, $\\frac{360^\\circ - 124^\\circ}{2}$, which gives the angle on the far side of the bar ✗; the choice $248^\\circ$ is DOUBLING INSTEAD OF HALVING ✗.)',
    },
    {
      q: 'A ruler is laid flat against the edge of a round clock face, touching it at the single point $A$. A pencil line drawn from $A$ meets the rim again at $B$, cutting off an arc of $158^\\circ$ on the ruler’s side. What is the angle between the ruler and the pencil line?',
      fig: {
        view: [-4.9, -4.5, 5.6, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'line', a: [-4.2, -3], b: [4.2, -3] },
          { t: 'seg', a: [0, -3], b: [1.1238, 2.7816] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -90, to: 68 },
          { t: 'label', p: [3.6811, -0.7155], text: '158°', dx: 12, dy: 2 },
          { t: 'angle', at: [0, -3], from: [2.5, -3], to: [1.1238, 2.7816], r: 0.7, label: '?' },
          { t: 'point', p: [0, -3], label: 'A', dx: -7, dy: 12 },
          { t: 'point', p: [1.1238, 2.7816], label: 'B', dx: 6, dy: -11 },
        ],
      },
      choices: ['$158^\\circ$', '$101^\\circ$', '$316^\\circ$', '$79^\\circ$'],
      answer: 3,
      solution:
        'Route one, the tangent-chord rule: the angle between a tangent and a chord at the point of tangency is half the intercepted arc, so it measures $\\frac{158^\\circ}{2} = 79^\\circ$ ✓. Check a second, independent way, through the radii: the central angle $\\angle AOB$ equals its arc, $158^\\circ$, and triangle $AOB$ is isosceles with $OA = OB$, so its base angle is $\\frac{180^\\circ - 158^\\circ}{2} = 11^\\circ$. Since the ruler is perpendicular to radius $OA$, the ruler-to-line angle is $90^\\circ - 11^\\circ = 79^\\circ$ ✓. (The choice $158^\\circ$ is REPORTING THE ARC ITSELF instead of halving it ✗; the choice $101^\\circ$ is HALVING THE OTHER ARC, $\\frac{360^\\circ - 158^\\circ}{2}$ ✗; the choice $316^\\circ$ is DOUBLING INSTEAD OF HALVING ✗.)',
    },
    {
      q: 'A straight road runs past a circular pond and touches its shoreline at exactly one point $A$. A footbridge runs from $A$ to a point $B$ on the far shoreline, and the arc from $A$ to $B$ on the road’s side measures $98^\\circ$. What angle does the footbridge make with the road?',
      fig: {
        view: [-4.9, -4.9, 5.6, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'line', a: [-4.2, -3], b: [4.2, -3] },
          { t: 'seg', a: [0, -3], b: [2.9708, 0.4175] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -90, to: 8 },
          { t: 'label', p: [2.8302, -2.4602], text: '98°', dx: 12, dy: 4 },
          { t: 'angle', at: [0, -3], from: [2.5, -3], to: [2.9708, 0.4175], r: 0.7, label: '?' },
          { t: 'point', p: [0, -3], label: 'A', dx: -7, dy: 12 },
          { t: 'point', p: [2.9708, 0.4175], label: 'B', dx: 12, dy: -5 },
        ],
      },
      choices: ['$49^\\circ$', '$98^\\circ$', '$131^\\circ$', '$196^\\circ$'],
      answer: 0,
      solution:
        'Route one, the tangent-chord rule: the angle between the tangent road and the chord $AB$ is half the intercepted arc, so it is $\\frac{98^\\circ}{2} = 49^\\circ$ ✓. Check a second, independent way, with radii only: $\\angle AOB$ equals its arc, $98^\\circ$, and triangle $AOB$ is isosceles since $OA = OB$, giving base angles $\\frac{180^\\circ - 98^\\circ}{2} = 41^\\circ$. The road is perpendicular to radius $OA$, so the bridge-to-road angle is $90^\\circ - 41^\\circ = 49^\\circ$ ✓. (The choice $98^\\circ$ is REPORTING THE ARC ITSELF ✗; the choice $131^\\circ$ is HALVING THE OTHER ARC, $\\frac{360^\\circ - 98^\\circ}{2}$, which names the angle on the bridge’s other side ✗; the choice $196^\\circ$ is DOUBLING INSTEAD OF HALVING ✗.)',
    },
  ],
  // s3 — the two tangent segments from an outside point are equal.
  [
    {
      q: 'Two guy wires run from the same anchor point $P$ on the ground to a circular water tank, each wire pulled straight and just touching the tank wall — one at $A$, the other at $B$. The wire $PA$ measures $13$ meters. How long is the wire $PB$?',
      fig: {
        view: [-4, -4, 7.4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [6.2, 0], b: [1.4516, 2.6254] },
          { t: 'seg', a: [6.2, 0], b: [1.4516, -2.6254] },
          { t: 'tick', a: [6.2, 0], b: [1.4516, 2.6254], n: 1 },
          { t: 'tick', a: [6.2, 0], b: [1.4516, -2.6254], n: 1 },
          { t: 'label', p: [3.8258, 1.3127], text: '13', dx: 4, dy: -10 },
          { t: 'label', p: [3.8258, -1.3127], text: '?', dx: 4, dy: 12 },
          { t: 'point', p: [1.4516, 2.6254], label: 'A', dx: -6, dy: -11 },
          { t: 'point', p: [1.4516, -2.6254], label: 'B', dx: -6, dy: 12 },
          { t: 'point', p: [6.2, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$6.5$', '$26$', '$13$', 'It cannot be determined without the radius'],
      answer: 2,
      solution:
        'Route one, the twin-tangent rule: the two tangent segments drawn to a circle from one outside point always have equal length, so $PB = PA = 13$ meters ✓. Check a second, independent way, with the Pythagorean theorem: each wire is perpendicular to the radius at its touch point, so $PA = \\sqrt{OP^2 - r^2}$ and $PB = \\sqrt{OP^2 - r^2}$ — the same two numbers under the same root, so the two wires must come out the same length whatever the tank’s size, and that shared length is the $13$ we were handed ✓. (The choice $6.5$ is HALVING THE KNOWN TANGENT, as if $PA$ were split between the two wires ✗; the choice $26$ is DOUBLING IT ✗; the answer that it cannot be determined is FORGETTING THE TWO TANGENTS FROM A POINT ARE EQUAL — the radius is never needed ✗.)',
    },
    {
      q: 'A baker anchors two straight ribbons at a single pin $P$ on a table and stretches each one so it just grazes the rim of a round cake board, touching at $A$ and at $B$. The ribbon $PA$ is $17$ centimeters long. How long is the ribbon $PB$?',
      fig: {
        view: [-4, -4, 8, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [6.8, 0], b: [1.3235, 2.6923] },
          { t: 'seg', a: [6.8, 0], b: [1.3235, -2.6923] },
          { t: 'tick', a: [6.8, 0], b: [1.3235, 2.6923], n: 1 },
          { t: 'tick', a: [6.8, 0], b: [1.3235, -2.6923], n: 1 },
          { t: 'label', p: [4.0618, 1.3462], text: '17', dx: 4, dy: -10 },
          { t: 'label', p: [4.0618, -1.3462], text: '?', dx: 4, dy: 12 },
          { t: 'point', p: [1.3235, 2.6923], label: 'A', dx: -6, dy: -11 },
          { t: 'point', p: [1.3235, -2.6923], label: 'B', dx: -6, dy: 12 },
          { t: 'point', p: [6.8, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$17$', '$8.5$', '$34$', 'It cannot be determined without knowing $OP$'],
      answer: 0,
      solution:
        'Route one, the twin-tangent rule: two tangent segments from the same outside point are equal, so $PB = PA = 17$ centimeters ✓. Check a second, independent way, with congruent triangles: right triangles $OAP$ and $OBP$ share the hypotenuse $OP$ and have equal legs $OA = OB$ (both radii), so they are congruent, which forces their remaining legs to match: $PB = PA = 17$ ✓. (The choice $8.5$ is HALVING THE KNOWN TANGENT ✗; the choice $34$ is DOUBLING IT, as if the question asked for both ribbons together ✗; the answer that it cannot be determined is FORGETTING THE TWO TANGENTS FROM A POINT ARE EQUAL — $OP$ never enters the argument ✗.)',
    },
    {
      q: 'A scanner at point $P$ sends out two straight beams toward a round column; each beam just skims the column, one touching at $A$ and the other at $B$. The beam $PA$ travels $24$ inches before it touches. How far does the beam $PB$ travel before it touches?',
      fig: {
        view: [-4, -4, 7.7, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [6.5, 0], b: [1.3846, 2.6614] },
          { t: 'seg', a: [6.5, 0], b: [1.3846, -2.6614] },
          { t: 'tick', a: [6.5, 0], b: [1.3846, 2.6614], n: 1 },
          { t: 'tick', a: [6.5, 0], b: [1.3846, -2.6614], n: 1 },
          { t: 'label', p: [3.9423, 1.3307], text: '24', dx: 4, dy: -10 },
          { t: 'label', p: [3.9423, -1.3307], text: '?', dx: 4, dy: 12 },
          { t: 'point', p: [1.3846, 2.6614], label: 'A', dx: -6, dy: -11 },
          { t: 'point', p: [1.3846, -2.6614], label: 'B', dx: -6, dy: 12 },
          { t: 'point', p: [6.5, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$12$', '$48$', 'It cannot be determined without the column’s width', '$24$'],
      answer: 3,
      solution:
        'Route one, the twin-tangent rule: the two tangent segments from one outside point to a circle are equal, so $PB = PA = 24$ inches ✓. Check a second, independent way, through the right angles: each beam meets its radius at $90^\\circ$, so $PA = \\sqrt{OP^2 - r^2}$ and $PB = \\sqrt{OP^2 - r^2}$. Both beams are described by the identical expression, so they are equal no matter how wide the column is, and the given value $24$ is that common length ✓. (The choice $12$ is HALVING THE KNOWN TANGENT ✗; the choice $48$ is DOUBLING IT and reporting both beams at once ✗; the answer that it cannot be determined is FORGETTING THE TWO TANGENTS FROM A POINT ARE EQUAL — the column’s width cancels out of both expressions ✗.)',
    },
  ],
  // s4 — two tangents meeting at angle P; the minor arc is 180 - P.
  [
    {
      q: 'Two straight fence rails leave the same gatepost $P$ and run past a circular pond, each just touching the water’s edge — one at $A$, the other at $B$. The rails meet at the gatepost at an angle of $38^\\circ$. What is the measure of the MINOR arc $AB$ of the pond’s edge?',
      fig: {
        view: [-3.4, -3.4, 8.8, 3.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 2.4 },
          { t: 'seg', a: [7.3717, 0], b: [0.7814, 2.2692] },
          { t: 'seg', a: [7.3717, 0], b: [0.7814, -2.2692] },
          { t: 'angle', at: [7.3717, 0], from: [0.7814, 2.2692], to: [0.7814, -2.2692], r: 1.3, label: '38' },
          { t: 'label', p: [3.2, 0], text: '?' },
          { t: 'point', p: [0.7814, 2.2692], label: 'A', dx: -4, dy: -11 },
          { t: 'point', p: [0.7814, -2.2692], label: 'B', dx: -4, dy: 12 },
          { t: 'point', p: [7.3717, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$218^\\circ$', '$38^\\circ$', '$76^\\circ$', '$142^\\circ$'],
      answer: 3,
      solution:
        'Route one, the shortcut for two tangents: the angle at the outside point and the near arc are supplementary, so the minor arc is $180^\\circ - 38^\\circ = 142^\\circ$ ✓. Check a second, independent way, from the far-minus-near rule: call the minor arc $n$, so the major arc is $360^\\circ - n$. Then $\\frac{(360^\\circ - n) - n}{2} = 38^\\circ$, so $360^\\circ - 2n = 76^\\circ$ and $n = 142^\\circ$ ✓. (The choice $218^\\circ$ is REPORTING THE MAJOR ARC, the rest of the pond’s edge ✗; the choice $38^\\circ$ is SETTING THE ARC EQUAL TO THE ANGLE, which only works for an angle at the center ✗; the choice $76^\\circ$ is DOUBLING THE ANGLE, the move that fits a vertex on the circle, not outside it ✗.)',
    },
    {
      q: 'Two mooring ropes are tied to the same post $P$ on a dock and pulled straight so that each just brushes the rim of a circular floating platform, touching it at $A$ and at $B$. At the post the ropes make an angle of $64^\\circ$. What is the measure of the MINOR arc $AB$ of the platform’s rim?',
      fig: {
        view: [-4, -4, 7.1, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [5.6612, 0], b: [1.5898, 2.5441] },
          { t: 'seg', a: [5.6612, 0], b: [1.5898, -2.5441] },
          { t: 'angle', at: [5.6612, 0], from: [1.5898, 2.5441], to: [1.5898, -2.5441], r: 1.1, label: '64' },
          { t: 'label', p: [4.15, 0], text: '?' },
          { t: 'point', p: [1.5898, 2.5441], label: 'A', dx: -6, dy: -11 },
          { t: 'point', p: [1.5898, -2.5441], label: 'B', dx: -6, dy: 12 },
          { t: 'point', p: [5.6612, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$244^\\circ$', '$116^\\circ$', '$64^\\circ$', '$128^\\circ$'],
      answer: 1,
      solution:
        'Route one, the shortcut for two tangents: the tangent-tangent angle and the near arc add to $180^\\circ$, so the minor arc is $180^\\circ - 64^\\circ = 116^\\circ$ ✓. Check a second, independent way, straight from the outside-angle rule: with minor arc $n$ and major arc $360^\\circ - n$, we need $\\frac{(360^\\circ - n) - n}{2} = 64^\\circ$, hence $360^\\circ - 2n = 128^\\circ$ and $n = 116^\\circ$ ✓. (The choice $244^\\circ$ is REPORTING THE MAJOR ARC instead of the minor one ✗; the choice $64^\\circ$ is SETTING THE ARC EQUAL TO THE ANGLE, a rule reserved for a vertex at the center ✗; the choice $128^\\circ$ is DOUBLING THE ANGLE, which belongs to a vertex on the circle ✗.)',
    },
    {
      q: 'From a lookout at $P$, two straight walking paths head off toward a circular garden, and each path just grazes the garden’s hedge, one at $A$ and one at $B$. The two paths leave the lookout $72^\\circ$ apart. What is the measure of the MINOR arc $AB$ of the hedge?',
      fig: {
        view: [-4, -4, 6.5, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [5.1039, 0], b: [1.7634, 2.4271] },
          { t: 'seg', a: [5.1039, 0], b: [1.7634, -2.4271] },
          { t: 'angle', at: [5.1039, 0], from: [1.7634, 2.4271], to: [1.7634, -2.4271], r: 1, label: '72' },
          { t: 'label', p: [3.9, 0], text: '?' },
          { t: 'point', p: [1.7634, 2.4271], label: 'A', dx: -6, dy: -11 },
          { t: 'point', p: [1.7634, -2.4271], label: 'B', dx: -6, dy: 12 },
          { t: 'point', p: [5.1039, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$252^\\circ$', '$144^\\circ$', '$108^\\circ$', '$72^\\circ$'],
      answer: 2,
      solution:
        'Route one, the shortcut for two tangents: the angle at the lookout and the near arc are supplementary, so the minor arc is $180^\\circ - 72^\\circ = 108^\\circ$ ✓. Check a second, independent way, with far minus near: let the minor arc be $n$ and the major arc $360^\\circ - n$. Then $\\frac{(360^\\circ - n) - n}{2} = 72^\\circ$, so $360^\\circ - 2n = 144^\\circ$ and $n = 108^\\circ$ ✓. (The choice $252^\\circ$ is REPORTING THE MAJOR ARC, the long way around the hedge ✗; the choice $144^\\circ$ is DOUBLING THE ANGLE, the rule for a vertex sitting on the circle ✗; the choice $72^\\circ$ is SETTING THE ARC EQUAL TO THE ANGLE, which needs a vertex at the center ✗.)',
    },
  ],
  // s5 — the intercepted arc from a given tangent-chord angle.
  [
    {
      q: 'A round stained-glass window rests on a straight wooden sill that touches the glass at exactly one point $A$. A lead strip runs from $A$ across the glass to a point $B$ on the rim, making a $44^\\circ$ angle with the sill. What is the measure of the arc the lead strip cuts off on that side?',
      fig: {
        view: [-5.5, -4.5, 4.9, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'line', a: [-4.2, -3], b: [4.2, -3] },
          { t: 'seg', a: [0, -3], b: [-2.9982, -0.1047] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 182, to: 270 },
          { t: 'label', p: [-2.5697, -2.662], text: '?', dx: -12, dy: -6 },
          { t: 'angle', at: [0, -3], from: [-2.5, -3], to: [-2.9982, -0.1047], r: 0.7, label: '44' },
          { t: 'point', p: [0, -3], label: 'A', dx: 8, dy: 11 },
          { t: 'point', p: [-2.9982, -0.1047], label: 'B', dx: -12, dy: -5 },
        ],
      },
      choices: ['$88^\\circ$', '$44^\\circ$', '$22^\\circ$', '$272^\\circ$'],
      answer: 0,
      solution:
        'Route one, the tangent-chord rule run backward: the angle is half the arc, so the arc is double the angle, $2 \\times 44^\\circ = 88^\\circ$ ✓. Check a second, independent way, through the radii: the sill is perpendicular to radius $OA$, so the base angle $\\angle OAB = 90^\\circ - 44^\\circ = 46^\\circ$. Triangle $OAB$ is isosceles with $OA = OB$, so its apex angle is $\\angle AOB = 180^\\circ - 2 \\times 46^\\circ = 88^\\circ$ — and a central angle equals its arc ✓. (The choice $44^\\circ$ is SETTING THE ARC EQUAL TO THE ANGLE, forgetting the factor of two ✗; the choice $22^\\circ$ is HALVING WHEN DOUBLING IS CALLED FOR, running the rule in the wrong direction ✗; the choice $272^\\circ$ is REPORTING THE REST OF THE CIRCLE, $360^\\circ - 88^\\circ$, instead of the intercepted arc ✗.)',
    },
    {
      q: 'A designer draws a circular logo and rules a straight guideline that touches the circle at just one point $A$. A stroke of the design runs from $A$ to a point $B$ on the circle and leaves the guideline at a $71^\\circ$ angle. What is the measure of the arc that stroke cuts off on the guideline’s side?',
      fig: {
        view: [-5.4, -4.5, 4.9, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'line', a: [-4.2, -3], b: [4.2, -3] },
          { t: 'seg', a: [0, -3], b: [-1.847, 2.364] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 128, to: 270 },
          { t: 'label', p: [-3.4984, -1.2046], text: '?', dx: -10, dy: 0 },
          { t: 'angle', at: [0, -3], from: [-2.5, -3], to: [-1.847, 2.364], r: 0.7, label: '71' },
          { t: 'point', p: [0, -3], label: 'A', dx: 8, dy: 11 },
          { t: 'point', p: [-1.847, 2.364], label: 'B', dx: -8, dy: -10 },
        ],
      },
      choices: ['$71^\\circ$', '$35.5^\\circ$', '$142^\\circ$', '$218^\\circ$'],
      answer: 2,
      solution:
        'Route one, the tangent-chord rule run backward: the arc is twice the tangent-chord angle, so it measures $2 \\times 71^\\circ = 142^\\circ$ ✓. Check a second, independent way, using the radius: the guideline meets radius $OA$ at $90^\\circ$, so $\\angle OAB = 90^\\circ - 71^\\circ = 19^\\circ$. In isosceles triangle $OAB$ with $OA = OB$, the central angle is $\\angle AOB = 180^\\circ - 2 \\times 19^\\circ = 142^\\circ$, and a central angle equals its arc ✓. (The choice $71^\\circ$ is SETTING THE ARC EQUAL TO THE ANGLE ✗; the choice $35.5^\\circ$ is HALVING WHEN DOUBLING IS CALLED FOR ✗; the choice $218^\\circ$ is REPORTING THE REST OF THE CIRCLE, $360^\\circ - 142^\\circ$ ✗.)',
    },
    {
      q: 'A Ferris wheel’s rim just touches a straight boarding platform at one point $A$. A support cable runs from $A$ to a point $B$ on the rim and meets the platform at a $58^\\circ$ angle. What is the measure of the arc the cable cuts off on the platform’s side?',
      fig: {
        view: [-5.4, -4.5, 4.9, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'line', a: [-4.2, -3], b: [4.2, -3] },
          { t: 'seg', a: [0, -3], b: [-2.6964, 1.3151] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 154, to: 270 },
          { t: 'label', p: [-3.1378, -1.9607], text: '?', dx: -10, dy: -4 },
          { t: 'angle', at: [0, -3], from: [-2.5, -3], to: [-2.6964, 1.3151], r: 0.7, label: '58' },
          { t: 'point', p: [0, -3], label: 'A', dx: 8, dy: 11 },
          { t: 'point', p: [-2.6964, 1.3151], label: 'B', dx: -11, dy: -7 },
        ],
      },
      choices: ['$58^\\circ$', '$29^\\circ$', '$244^\\circ$', '$116^\\circ$'],
      answer: 3,
      solution:
        'Route one, the tangent-chord rule run backward: the intercepted arc is double the angle, so it is $2 \\times 58^\\circ = 116^\\circ$ ✓. Check a second, independent way, from the radii: the platform is perpendicular to radius $OA$, so $\\angle OAB = 90^\\circ - 58^\\circ = 32^\\circ$, and triangle $OAB$ is isosceles because $OA = OB$. Its apex angle is $\\angle AOB = 180^\\circ - 2 \\times 32^\\circ = 116^\\circ$, which is exactly the arc, since a central angle matches its arc ✓. (The choice $58^\\circ$ is SETTING THE ARC EQUAL TO THE ANGLE ✗; the choice $29^\\circ$ is HALVING WHEN DOUBLING IS CALLED FOR ✗; the choice $244^\\circ$ is REPORTING THE REST OF THE CIRCLE, $360^\\circ - 116^\\circ$ ✗.)',
    },
  ],
  // s6 — PA tangent at A with central angle AOP given; angle APO = 90 - AOP.
  [
    {
      q: 'A drone hovers at point $P$ outside a circular no-fly zone centered at $O$. Its camera line reaches the boundary at $A$ and is tangent there. Ground control measures the angle at the center, $\\angle AOP = 41^\\circ$. What is $\\angle APO$, the angle at the drone between its camera line and the line back to the center?',
      fig: {
        view: [-4, -3.8, 5.4, 4.2],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0, 0], b: [2.2641, 1.9682] },
          { t: 'seg', a: [2.2641, 1.9682], b: [3.975, 0] },
          { t: 'seg', a: [0, 0], b: [3.975, 0] },
          { t: 'right', at: [2.2641, 1.9682], from: [0, 0], to: [3.975, 0] },
          { t: 'angle', at: [0, 0], from: [2.2641, 1.9682], to: [3.975, 0], r: 1, label: '41' },
          { t: 'angle', at: [3.975, 0], from: [2.2641, 1.9682], to: [0, 0], r: 0.7, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: -9, dy: 11 },
          { t: 'point', p: [2.2641, 1.9682], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [3.975, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$41^\\circ$', '$49^\\circ$', '$139^\\circ$', '$90^\\circ$'],
      answer: 1,
      solution:
        'Route one, the right triangle: the camera line is tangent at $A$, so it meets radius $OA$ at $90^\\circ$ and triangle $OAP$ is right-angled at $A$. The two acute angles of a right triangle are complementary, so $\\angle APO = 90^\\circ - 41^\\circ = 49^\\circ$ ✓. Check a second, independent way, with a mirror tangent: draw the other tangent from $P$, touching at $A\'$. By symmetry the near arc $AA\'$ measures $2 \\times 41^\\circ = 82^\\circ$, so the full tangent-tangent angle is $\\angle APA\' = 180^\\circ - 82^\\circ = 98^\\circ$, and $PO$ bisects it, giving $\\angle APO = \\frac{98^\\circ}{2} = 49^\\circ$ ✓. (The choice $41^\\circ$ is COPYING THE GIVEN ANGLE, as if the triangle were isosceles ✗; the choice $139^\\circ$ is SUBTRACTING FROM $180^\\circ$ INSTEAD OF $90^\\circ$, which ignores the right angle at $A$ ✗; the choice $90^\\circ$ is NAMING THE RIGHT ANGLE AT THE WRONG VERTEX — that one lives at $A$, not at $P$ ✗.)',
    },
    {
      q: 'A spotlight at $P$ throws a beam that just skims a circular stage at the point $A$, and $O$ is the stage’s center. The angle at the center between $OA$ and $OP$ is $\\angle AOP = 67^\\circ$. What is $\\angle APO$, the angle at the spotlight between the beam and the line to the center?',
      fig: {
        view: [-4, -3.8, 9.2, 4.2],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0, 0], b: [1.1722, 2.7615] },
          { t: 'seg', a: [1.1722, 2.7615], b: [7.6779, 0] },
          { t: 'seg', a: [0, 0], b: [7.6779, 0] },
          { t: 'right', at: [1.1722, 2.7615], from: [0, 0], to: [7.6779, 0] },
          { t: 'angle', at: [0, 0], from: [1.1722, 2.7615], to: [7.6779, 0], r: 0.8, label: '67' },
          { t: 'angle', at: [7.6779, 0], from: [1.1722, 2.7615], to: [0, 0], r: 1.4, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: -9, dy: 11 },
          { t: 'point', p: [1.1722, 2.7615], label: 'A', dx: -3, dy: -12 },
          { t: 'point', p: [7.6779, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$23^\\circ$', '$67^\\circ$', '$113^\\circ$', '$90^\\circ$'],
      answer: 0,
      solution:
        'Route one, the right triangle: a tangent is perpendicular to the radius at the point of tangency, so triangle $OAP$ has a right angle at $A$ and its acute angles are complementary: $\\angle APO = 90^\\circ - 67^\\circ = 23^\\circ$ ✓. Check a second, independent way, using a second beam: draw the other tangent from $P$, touching at $A\'$. Symmetry makes the near arc $AA\' = 2 \\times 67^\\circ = 134^\\circ$, so the tangent-tangent angle is $180^\\circ - 134^\\circ = 46^\\circ$, and $PO$ splits it evenly: $\\angle APO = \\frac{46^\\circ}{2} = 23^\\circ$ ✓. (The choice $67^\\circ$ is COPYING THE GIVEN ANGLE ✗; the choice $113^\\circ$ is SUBTRACTING FROM $180^\\circ$ INSTEAD OF $90^\\circ$ ✗; the choice $90^\\circ$ is NAMING THE RIGHT ANGLE AT THE WRONG VERTEX, since the right angle sits at $A$ ✗.)',
    },
    {
      q: 'A telescope at $P$ is aimed so that its line of sight just grazes the edge of a circular dome at $A$; the dome’s center is $O$. At the center, $\\angle AOP = 36^\\circ$. What is $\\angle APO$, the angle at the telescope between the sight line and the line to the center?',
      fig: {
        view: [-4, -3.8, 5.2, 4.2],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0, 0], b: [2.4271, 1.7634] },
          { t: 'seg', a: [2.4271, 1.7634], b: [3.7082, 0] },
          { t: 'seg', a: [0, 0], b: [3.7082, 0] },
          { t: 'right', at: [2.4271, 1.7634], from: [0, 0], to: [3.7082, 0] },
          { t: 'angle', at: [0, 0], from: [2.4271, 1.7634], to: [3.7082, 0], r: 1.1, label: '36' },
          { t: 'angle', at: [3.7082, 0], from: [2.4271, 1.7634], to: [0, 0], r: 0.65, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: -9, dy: 11 },
          { t: 'point', p: [2.4271, 1.7634], label: 'A', dx: 2, dy: -12 },
          { t: 'point', p: [3.7082, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$36^\\circ$', '$144^\\circ$', '$54^\\circ$', '$90^\\circ$'],
      answer: 2,
      solution:
        'Route one, the right triangle: the sight line is tangent at $A$, so it meets radius $OA$ at a right angle and triangle $OAP$ is right-angled at $A$. Its acute angles are complementary, giving $\\angle APO = 90^\\circ - 36^\\circ = 54^\\circ$ ✓. Check a second, independent way, with the twin tangent: draw the other tangent from $P$, touching at $A\'$. The near arc $AA\'$ measures $2 \\times 36^\\circ = 72^\\circ$, so the angle between the two tangents is $180^\\circ - 72^\\circ = 108^\\circ$, and $PO$ bisects it: $\\angle APO = \\frac{108^\\circ}{2} = 54^\\circ$ ✓. (The choice $36^\\circ$ is COPYING THE GIVEN ANGLE ✗; the choice $144^\\circ$ is SUBTRACTING FROM $180^\\circ$ INSTEAD OF $90^\\circ$ ✗; the choice $90^\\circ$ is NAMING THE RIGHT ANGLE AT THE WRONG VERTEX ✗.)',
    },
  ],
  // s7 — incircle tangent lengths: the tangent from a vertex is s minus the opposite side.
  [
    {
      q: 'A triangular garden $ABC$ has $AB = 15$ meters, $BC = 13$ meters, and $CA = 16$ meters. A circular fountain is built inside so that it just touches all three edges. How long is each of the two equal tangent segments from corner $C$ to the fountain’s touch points?',
      fig: {
        view: [-2.2, -2.2, 16.2, 16.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [13, 0] },
          { t: 'seg', a: [0, 0], b: [5.3077, 14.0296] },
          { t: 'seg', a: [13, 0], b: [5.3077, 14.0296] },
          { t: 'circle', c: [6, 4.1451], r: 4.1451 },
          { t: 'point', p: [5.3077, 14.0296], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'B', dx: -11, dy: 10 },
          { t: 'point', p: [13, 0], label: 'C', dx: 11, dy: 10 },
          { t: 'point', p: [2.1231, 5.6118], label: 'Z', dx: -12, dy: -4 },
          { t: 'point', p: [9.6346, 6.1379], label: 'Y', dx: 12, dy: -3 },
          { t: 'point', p: [6, 0], label: 'X', dx: 0, dy: 14 },
          { t: 'label', p: [2.6538, 7.0148], text: '15', dx: -14, dy: -4 },
          { t: 'label', p: [6.5, 0], text: '13', dx: -12, dy: 15 },
          { t: 'label', p: [9.1538, 7.0148], text: '16', dx: 15, dy: -2 },
        ],
      },
      choices: ['$9$', '$6$', '$7$', '$22$'],
      answer: 2,
      solution:
        'Route one, the half-perimeter rule: the semiperimeter is $s = \\frac{15 + 13 + 16}{2} = 22$, and the tangent length from a vertex is $s$ minus the side opposite that vertex. The side opposite $C$ is $AB = 15$, so the tangent from $C$ is $22 - 15 = 7$ meters ✓. Check a second, independent way, by solving the system: let the tangent lengths from $A$, $B$, $C$ be $a$, $b$, $c$. Each side splits into two of them, so $a + b = 15$, $b + c = 13$, $c + a = 16$. Subtracting the first from the third gives $c - b = 1$, and adding that to $b + c = 13$ gives $2c = 14$, so $c = 7$. The others come out $b = 6$ and $a = 9$, and they rebuild every side: $9 + 6 = 15$, $6 + 7 = 13$, $7 + 9 = 16$ ✓. (The choice $9$ is READING OFF THE TANGENT FROM $A$ instead of from $C$ ✗; the choice $6$ is READING OFF THE TANGENT FROM $B$ ✗; the choice $22$ is STOPPING AT THE SEMIPERIMETER without subtracting the opposite side ✗.)',
    },
    {
      q: 'A triangular sail $ABC$ measures $AB = 18$, $BC = 13$, and $CA = 17$ in feet. A round repair patch is stitched on so that its edge touches all three sides of the sail. How long is each of the two equal tangent segments from corner $A$ to the patch’s touch points?',
      fig: {
        view: [-2.2, -2.2, 16.2, 18.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [13, 0] },
          { t: 'seg', a: [0, 0], b: [7.8462, 16.1999] },
          { t: 'seg', a: [13, 0], b: [7.8462, 16.1999] },
          { t: 'circle', c: [7, 4.3875], r: 4.3875 },
          { t: 'point', p: [7.8462, 16.1999], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'B', dx: -11, dy: 10 },
          { t: 'point', p: [13, 0], label: 'C', dx: 11, dy: 10 },
          { t: 'point', p: [3.0513, 6.3], label: 'Z', dx: -12, dy: -4 },
          { t: 'point', p: [11.181, 5.7176], label: 'Y', dx: 12, dy: -3 },
          { t: 'point', p: [7, 0], label: 'X', dx: 0, dy: 14 },
          { t: 'label', p: [3.9231, 8.1], text: '18', dx: -14, dy: -4 },
          { t: 'label', p: [6.5, 0], text: '13', dx: -12, dy: 15 },
          { t: 'label', p: [10.4231, 8.1], text: '17', dx: 15, dy: -2 },
        ],
      },
      choices: ['$7$', '$6$', '$24$', '$11$'],
      answer: 3,
      solution:
        'Route one, the half-perimeter rule: $s = \\frac{18 + 13 + 17}{2} = 24$, and a vertex’s tangent length is $s$ minus the side across from it. Opposite $A$ is $BC = 13$, so the tangent from $A$ is $24 - 13 = 11$ feet ✓. Check a second, independent way, by solving the system: writing $a$, $b$, $c$ for the tangent lengths from $A$, $B$, $C$, the sides give $a + b = 18$, $b + c = 13$, $c + a = 17$. Subtracting the second from the third gives $a - b = 4$, and adding that to $a + b = 18$ gives $2a = 22$, so $a = 11$. Then $b = 7$ and $c = 6$, and every side checks: $11 + 7 = 18$, $7 + 6 = 13$, $6 + 11 = 17$ ✓. (The choice $7$ is READING OFF THE TANGENT FROM $B$ instead of from $A$ ✗; the choice $6$ is READING OFF THE TANGENT FROM $C$ ✗; the choice $24$ is STOPPING AT THE SEMIPERIMETER without the subtraction ✗.)',
    },
    {
      q: 'A triangular playground $ABC$ has $AB = 16$ paces, $BC = 17$ paces, and $CA = 13$ paces. A circular sandpit inside it touches all three fences. How long is each of the two equal tangent segments from corner $B$ to the sandpit’s touch points?',
      fig: {
        view: [-2.4, -2.4, 20, 14],
        elems: [
          { t: 'seg', a: [0, 0], b: [17, 0] },
          { t: 'seg', a: [0, 0], b: [11.0588, 11.563] },
          { t: 'seg', a: [17, 0], b: [11.0588, 11.563] },
          { t: 'circle', c: [10, 4.2733], r: 4.2733 },
          { t: 'point', p: [11.0588, 11.563], label: 'A', dx: 2, dy: -12 },
          { t: 'point', p: [0, 0], label: 'B', dx: -11, dy: 10 },
          { t: 'point', p: [17, 0], label: 'C', dx: 11, dy: 10 },
          { t: 'point', p: [6.9118, 7.2269], label: 'Z', dx: -12, dy: -4 },
          { t: 'point', p: [13.8009, 6.2262], label: 'Y', dx: 12, dy: -3 },
          { t: 'point', p: [10, 0], label: 'X', dx: 0, dy: 14 },
          { t: 'label', p: [5.5294, 5.7815], text: '16', dx: -14, dy: -4 },
          { t: 'label', p: [8.5, 0], text: '17', dx: -12, dy: 15 },
          { t: 'label', p: [14.0294, 5.7815], text: '13', dx: 15, dy: -2 },
        ],
      },
      choices: ['$10$', '$6$', '$7$', '$23$'],
      answer: 0,
      solution:
        'Route one, the half-perimeter rule: $s = \\frac{16 + 17 + 13}{2} = 23$, and the tangent length from a vertex is $s$ minus the opposite side. Opposite $B$ is $CA = 13$, so the tangent from $B$ is $23 - 13 = 10$ paces ✓. Check a second, independent way, by solving the system: with tangent lengths $a$, $b$, $c$ from $A$, $B$, $C$, the sides read $a + b = 16$, $b + c = 17$, $c + a = 13$. Subtracting the third from the second gives $b - a = 4$, and adding that to $a + b = 16$ gives $2b = 20$, so $b = 10$. Then $a = 6$ and $c = 7$, which rebuild the fences exactly: $6 + 10 = 16$, $10 + 7 = 17$, $7 + 6 = 13$ ✓. (The choice $6$ is READING OFF THE TANGENT FROM $A$ instead of from $B$ ✗; the choice $7$ is READING OFF THE TANGENT FROM $C$ ✗; the choice $23$ is STOPPING AT THE SEMIPERIMETER and never subtracting the opposite side ✗.)',
    },
  ],
  // s8 — two tangents from P split the circle into two arcs; angle P is half their difference.
  [
    {
      q: 'Two straight cables run from a tower at $P$ and each just skims the shore of a round lake, touching at $A$ and at $B$. The two touch points split the shoreline into arcs of $76^\\circ$ (the near one) and $284^\\circ$ (the far one). What is $\\angle APB$?',
      fig: {
        view: [-4.6, -4, 5.2, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [3.8071, 0], b: [2.364, 1.847] },
          { t: 'seg', a: [3.8071, 0], b: [2.364, -1.847] },
          { t: 'label', p: [3.3, 0], text: '76°' },
          { t: 'label', p: [-3.9, 0], text: '284°' },
          { t: 'angle', at: [3.8071, 0], from: [2.364, 1.847], to: [2.364, -1.847], r: 0.8, label: '?' },
          { t: 'point', p: [2.364, 1.847], label: 'A', dx: 4, dy: -11 },
          { t: 'point', p: [2.364, -1.847], label: 'B', dx: 4, dy: 12 },
          { t: 'point', p: [3.8071, 0], label: 'P', dx: 13, dy: 4 },
        ],
      },
      choices: ['$180^\\circ$', '$76^\\circ$', '$208^\\circ$', '$104^\\circ$'],
      answer: 3,
      solution:
        'Route one, the outside-angle rule: a vertex outside the circle sees half the difference of the two arcs, so $\\angle APB = \\frac{284^\\circ - 76^\\circ}{2} = \\frac{208^\\circ}{2} = 104^\\circ$ ✓. Check a second, independent way, through the quadrilateral $OAPB$: each cable is tangent, so $\\angle OAP = \\angle OBP = 90^\\circ$, and the central angle $\\angle AOB$ equals the near arc, $76^\\circ$. A quadrilateral’s angles total $360^\\circ$, so $\\angle APB = 360^\\circ - 90^\\circ - 90^\\circ - 76^\\circ = 104^\\circ$ ✓. (The choice $180^\\circ$ is AVERAGING THE TWO ARCS INSTEAD OF HALVING THEIR DIFFERENCE, the rule for a vertex inside the circle ✗; the choice $76^\\circ$ is COPYING THE NEAR ARC, which is the angle’s supplement, not the angle ✗; the choice $208^\\circ$ is FORGETTING TO HALVE THE DIFFERENCE ✗.)',
    },
    {
      q: 'Two straight garden paths leave a bench at $P$ and each just grazes the rim of a circular pond, touching at $A$ and at $B$. Those touch points cut the rim into a near arc of $112^\\circ$ and a far arc of $248^\\circ$. What is $\\angle APB$?',
      fig: {
        view: [-4, -4, 6.8, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [5.3649, 0], b: [1.6776, 2.4871] },
          { t: 'seg', a: [5.3649, 0], b: [1.6776, -2.4871] },
          { t: 'label', p: [3.6, 0], text: '112°' },
          { t: 'label', p: [-3.8, 0], text: '248°' },
          { t: 'angle', at: [5.3649, 0], from: [1.6776, 2.4871], to: [1.6776, -2.4871], r: 1.2, label: '?' },
          { t: 'point', p: [1.6776, 2.4871], label: 'A', dx: -6, dy: -11 },
          { t: 'point', p: [1.6776, -2.4871], label: 'B', dx: -6, dy: 12 },
          { t: 'point', p: [5.3649, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$68^\\circ$', '$180^\\circ$', '$112^\\circ$', '$136^\\circ$'],
      answer: 0,
      solution:
        'Route one, the outside-angle rule: from a point outside the circle the angle is half the difference of the far and near arcs, so $\\angle APB = \\frac{248^\\circ - 112^\\circ}{2} = \\frac{136^\\circ}{2} = 68^\\circ$ ✓. Check a second, independent way, with quadrilateral $OAPB$: both paths are tangent, so $\\angle OAP = \\angle OBP = 90^\\circ$, and $\\angle AOB$ equals the near arc, $112^\\circ$. Since the four angles add to $360^\\circ$, $\\angle APB = 360^\\circ - 90^\\circ - 90^\\circ - 112^\\circ = 68^\\circ$ ✓. (The choice $180^\\circ$ is AVERAGING THE TWO ARCS INSTEAD OF HALVING THEIR DIFFERENCE ✗; the choice $112^\\circ$ is COPYING THE NEAR ARC ✗; the choice $136^\\circ$ is FORGETTING TO HALVE THE DIFFERENCE ✗.)',
    },
    {
      q: 'From a watchtower at $P$, two straight sight lines each just brush the wall of a round silo, meeting it at $A$ and at $B$. The two points divide the silo wall into a near arc of $94^\\circ$ and a far arc of $266^\\circ$. What is $\\angle APB$?',
      fig: {
        view: [-4.2, -4, 5.8, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [4.3988, 0], b: [2.046, 2.1941] },
          { t: 'seg', a: [4.3988, 0], b: [2.046, -2.1941] },
          { t: 'label', p: [3.45, 0], text: '94°' },
          { t: 'label', p: [-3.85, 0], text: '266°' },
          { t: 'angle', at: [4.3988, 0], from: [2.046, 2.1941], to: [2.046, -2.1941], r: 1, label: '?' },
          { t: 'point', p: [2.046, 2.1941], label: 'A', dx: -2, dy: -12 },
          { t: 'point', p: [2.046, -2.1941], label: 'B', dx: -2, dy: 13 },
          { t: 'point', p: [4.3988, 0], label: 'P', dx: 13, dy: 3 },
        ],
      },
      choices: ['$180^\\circ$', '$86^\\circ$', '$94^\\circ$', '$172^\\circ$'],
      answer: 1,
      solution:
        'Route one, the outside-angle rule: the vertex sits outside the circle, so the angle is half the difference of the arcs: $\\angle APB = \\frac{266^\\circ - 94^\\circ}{2} = \\frac{172^\\circ}{2} = 86^\\circ$ ✓. Check a second, independent way, through quadrilateral $OAPB$: each sight line is tangent, giving right angles at $A$ and $B$, while $\\angle AOB$ equals the near arc, $94^\\circ$. The four angles sum to $360^\\circ$, so $\\angle APB = 360^\\circ - 90^\\circ - 90^\\circ - 94^\\circ = 86^\\circ$ ✓. (The choice $180^\\circ$ is AVERAGING THE TWO ARCS INSTEAD OF HALVING THEIR DIFFERENCE ✗; the choice $94^\\circ$ is COPYING THE NEAR ARC, which is the angle’s supplement ✗; the choice $172^\\circ$ is FORGETTING TO HALVE THE DIFFERENCE ✗.)',
    },
  ],
  // s9 — a tangent-chord angle equals the inscribed angle from the major arc.
  [
    {
      q: 'A straight boardwalk touches a circular pond at $A$. A rope runs from $A$ to a post $B$ on the far edge and makes a $47^\\circ$ angle with the boardwalk. A duck floats at a point $C$ on the major arc $AB$. What is the inscribed angle $\\angle ACB$?',
      fig: {
        view: [-4.9, -4.5, 4.9, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'line', a: [-4.2, -3], b: [4.2, -3] },
          { t: 'seg', a: [0, -3], b: [2.9927, 0.2093] },
          { t: 'seg', a: [-2.6488, 1.4084], b: [0, -3] },
          { t: 'seg', a: [-2.6488, 1.4084], b: [2.9927, 0.2093] },
          { t: 'angle', at: [0, -3], from: [2.5, -3], to: [2.9927, 0.2093], r: 0.7, label: '47' },
          { t: 'angle', at: [-2.6488, 1.4084], from: [0, -3], to: [2.9927, 0.2093], r: 0.6, label: '?' },
          { t: 'point', p: [0, -3], label: 'A', dx: -7, dy: 12 },
          { t: 'point', p: [2.9927, 0.2093], label: 'B', dx: 11, dy: -7 },
          { t: 'point', p: [-2.6488, 1.4084], label: 'C', dx: -11, dy: -7 },
        ],
      },
      choices: ['$47^\\circ$', '$94^\\circ$', '$43^\\circ$', '$133^\\circ$'],
      answer: 0,
      solution:
        'Route one, through the arc: the tangent-chord angle is half the arc it intercepts, so arc $AB = 2 \\times 47^\\circ = 94^\\circ$. The duck’s angle is inscribed and intercepts that very same arc, so $\\angle ACB = \\frac{94^\\circ}{2} = 47^\\circ$ ✓. Check a second, independent way, through the center: the boardwalk is perpendicular to radius $OA$, so $\\angle OAB = 90^\\circ - 47^\\circ = 43^\\circ$, and triangle $OAB$ is isosceles with $OA = OB$, giving central angle $\\angle AOB = 180^\\circ - 2 \\times 43^\\circ = 94^\\circ$. An inscribed angle is half the central angle standing on the same chord, so $\\angle ACB = 47^\\circ$ ✓. (The choice $94^\\circ$ is REPORTING THE ARC instead of the inscribed angle ✗; the choice $43^\\circ$ is STOPPING AT THE ANGLE BETWEEN THE ROPE AND THE RADIUS ✗; the choice $133^\\circ$ is TAKING THE SUPPLEMENT, the angle seen from the minor arc instead of the major one ✗.)',
    },
    {
      q: 'A straight access ramp touches the rim of a round stage at $A$. A cable runs from $A$ to a light rig at $B$ on the rim and leaves the ramp at a $71^\\circ$ angle. A speaker stands at a point $C$ on the major arc $AB$. What is the inscribed angle $\\angle ACB$?',
      fig: {
        view: [-4.9, -4.5, 4.9, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'line', a: [-4.2, -3], b: [4.2, -3] },
          { t: 'seg', a: [0, -3], b: [1.847, 2.364] },
          { t: 'seg', a: [-2.8366, 0.9767], b: [0, -3] },
          { t: 'seg', a: [-2.8366, 0.9767], b: [1.847, 2.364] },
          { t: 'angle', at: [0, -3], from: [2.5, -3], to: [1.847, 2.364], r: 0.7, label: '71' },
          { t: 'angle', at: [-2.8366, 0.9767], from: [0, -3], to: [1.847, 2.364], r: 0.6, label: '?' },
          { t: 'point', p: [0, -3], label: 'A', dx: -7, dy: 12 },
          { t: 'point', p: [1.847, 2.364], label: 'B', dx: 9, dy: -9 },
          { t: 'point', p: [-2.8366, 0.9767], label: 'C', dx: -12, dy: -5 },
        ],
      },
      choices: ['$142^\\circ$', '$71^\\circ$', '$35.5^\\circ$', '$109^\\circ$'],
      answer: 1,
      solution:
        'Route one, through the arc: the tangent-chord angle is half its intercepted arc, so arc $AB = 2 \\times 71^\\circ = 142^\\circ$, and the inscribed angle at $C$ looks at the same arc: $\\angle ACB = \\frac{142^\\circ}{2} = 71^\\circ$ ✓. Check a second, independent way, through the center: the ramp meets radius $OA$ at $90^\\circ$, so $\\angle OAB = 90^\\circ - 71^\\circ = 19^\\circ$; triangle $OAB$ is isosceles with $OA = OB$, so $\\angle AOB = 180^\\circ - 2 \\times 19^\\circ = 142^\\circ$, and the inscribed angle on the same chord is half of that, $71^\\circ$ ✓. (The choice $142^\\circ$ is REPORTING THE ARC instead of the angle ✗; the choice $35.5^\\circ$ is HALVING TWICE ✗; the choice $109^\\circ$ is TAKING THE SUPPLEMENT, which is the view from the minor arc ✗.)',
    },
    {
      q: 'A straight window sill touches a circular window at $A$. A decorative bar runs from $A$ to a point $B$ on the glass edge and makes a $39^\\circ$ angle with the sill. A small hinge sits at a point $C$ on the major arc $AB$. What is the inscribed angle $\\angle ACB$?',
      fig: {
        view: [-4.9, -4.5, 4.9, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'line', a: [-4.2, -3], b: [4.2, -3] },
          { t: 'seg', a: [0, -3], b: [2.9344, -0.6237] },
          { t: 'seg', a: [-1.888, 2.3314], b: [0, -3] },
          { t: 'seg', a: [-1.888, 2.3314], b: [2.9344, -0.6237] },
          { t: 'angle', at: [0, -3], from: [2.5, -3], to: [2.9344, -0.6237], r: 0.8, label: '39' },
          { t: 'angle', at: [-1.888, 2.3314], from: [0, -3], to: [2.9344, -0.6237], r: 0.6, label: '?' },
          { t: 'point', p: [0, -3], label: 'A', dx: -7, dy: 12 },
          { t: 'point', p: [2.9344, -0.6237], label: 'B', dx: 12, dy: -3 },
          { t: 'point', p: [-1.888, 2.3314], label: 'C', dx: -8, dy: -10 },
        ],
      },
      choices: ['$78^\\circ$', '$19.5^\\circ$', '$141^\\circ$', '$39^\\circ$'],
      answer: 3,
      solution:
        'Route one, through the arc: a tangent-chord angle is half the arc it cuts off, so arc $AB = 2 \\times 39^\\circ = 78^\\circ$, and the inscribed angle at $C$ intercepts that same arc: $\\angle ACB = \\frac{78^\\circ}{2} = 39^\\circ$ ✓. Check a second, independent way, through the center: the sill is perpendicular to radius $OA$, so $\\angle OAB = 90^\\circ - 39^\\circ = 51^\\circ$, and isosceles triangle $OAB$ (with $OA = OB$) gives $\\angle AOB = 180^\\circ - 2 \\times 51^\\circ = 78^\\circ$. The inscribed angle on the same chord is half the central angle, so $\\angle ACB = 39^\\circ$ ✓. (The choice $78^\\circ$ is REPORTING THE ARC rather than the angle ✗; the choice $19.5^\\circ$ is HALVING TWICE ✗; the choice $141^\\circ$ is TAKING THE SUPPLEMENT, the angle a point on the minor arc would see ✗.)',
    },
  ],
  // s10 — two tangents from P make an isosceles triangle PAB.
  [
    {
      q: 'Two steel cables run from an anchor $P$ to a round storage tank, each just touching the tank wall, at $A$ and at $B$. The cables meet at the anchor at $\\angle APB = 52^\\circ$, and a brace is welded straight from $A$ to $B$. What is $\\angle PAB$?',
      fig: {
        view: [-4, -4, 8.2, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [6.8435, 0], b: [1.3151, 2.6964] },
          { t: 'seg', a: [6.8435, 0], b: [1.3151, -2.6964] },
          { t: 'seg', a: [1.3151, 2.6964], b: [1.3151, -2.6964] },
          { t: 'tick', a: [6.8435, 0], b: [1.3151, 2.6964], n: 1 },
          { t: 'tick', a: [6.8435, 0], b: [1.3151, -2.6964], n: 1 },
          { t: 'angle', at: [6.8435, 0], from: [1.3151, 2.6964], to: [1.3151, -2.6964], r: 1.2, label: '52' },
          { t: 'angle', at: [1.3151, 2.6964], from: [6.8435, 0], to: [1.3151, -2.6964], r: 0.6, label: '?' },
          { t: 'point', p: [1.3151, 2.6964], label: 'A', dx: -6, dy: -11 },
          { t: 'point', p: [1.3151, -2.6964], label: 'B', dx: -6, dy: 12 },
          { t: 'point', p: [6.8435, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$52^\\circ$', '$64^\\circ$', '$128^\\circ$', '$26^\\circ$'],
      answer: 1,
      solution:
        'Route one, the isosceles triangle: the two tangent segments from $P$ are equal, so $PA = PB$ and triangle $PAB$ is isosceles with equal base angles at $A$ and $B$. Those two share what is left of $180^\\circ$: $\\angle PAB = \\frac{180^\\circ - 52^\\circ}{2} = 64^\\circ$ ✓. Check a second, independent way, with the tangent-chord rule: the near arc $AB$ is $180^\\circ - 52^\\circ = 128^\\circ$, and $\\angle PAB$ is the angle between the tangent $PA$ and the chord $AB$, so it is half that arc: $\\frac{128^\\circ}{2} = 64^\\circ$ ✓. (The choice $52^\\circ$ is COPYING THE ANGLE AT $P$, as though the triangle were equilateral ✗; the choice $128^\\circ$ is STOPPING AT $180^\\circ - 52^\\circ$ and never splitting it between the two base angles ✗; the choice $26^\\circ$ is HALVING THE ANGLE AT $P$ instead of halving what remains after it ✗.)',
    },
    {
      q: 'Two straight fence rails leave a corner post $P$ and each just touches a circular flowerbed, at $A$ and at $B$. The rails meet at the post at $\\angle APB = 34^\\circ$, and a straight edging strip is laid from $A$ to $B$. What is $\\angle PAB$?',
      fig: {
        view: [-3.2, -3.2, 8.9, 3.2],
        elems: [
          { t: 'circle', c: [0, 0], r: 2.2 },
          { t: 'seg', a: [7.5247, 0], b: [0.6432, 2.1039] },
          { t: 'seg', a: [7.5247, 0], b: [0.6432, -2.1039] },
          { t: 'seg', a: [0.6432, 2.1039], b: [0.6432, -2.1039] },
          { t: 'tick', a: [7.5247, 0], b: [0.6432, 2.1039], n: 1 },
          { t: 'tick', a: [7.5247, 0], b: [0.6432, -2.1039], n: 1 },
          { t: 'angle', at: [7.5247, 0], from: [0.6432, 2.1039], to: [0.6432, -2.1039], r: 1.5, label: '34' },
          { t: 'angle', at: [0.6432, 2.1039], from: [7.5247, 0], to: [0.6432, -2.1039], r: 0.5, label: '?' },
          { t: 'point', p: [0.6432, 2.1039], label: 'A', dx: -5, dy: -11 },
          { t: 'point', p: [0.6432, -2.1039], label: 'B', dx: -5, dy: 12 },
          { t: 'point', p: [7.5247, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$34^\\circ$', '$146^\\circ$', '$73^\\circ$', '$17^\\circ$'],
      answer: 2,
      solution:
        'Route one, the isosceles triangle: tangent segments from one outside point are equal, so $PA = PB$ and triangle $PAB$ has equal base angles at $A$ and $B$. Hence $\\angle PAB = \\frac{180^\\circ - 34^\\circ}{2} = \\frac{146^\\circ}{2} = 73^\\circ$ ✓. Check a second, independent way, with the tangent-chord rule: the near arc $AB$ measures $180^\\circ - 34^\\circ = 146^\\circ$, and $\\angle PAB$ sits between tangent $PA$ and chord $AB$, so it is half that arc: $73^\\circ$ ✓. (The choice $34^\\circ$ is COPYING THE ANGLE AT $P$ ✗; the choice $146^\\circ$ is STOPPING AT $180^\\circ - 34^\\circ$ before dividing it between the two equal base angles ✗; the choice $17^\\circ$ is HALVING THE ANGLE AT $P$ instead of halving the remainder ✗.)',
    },
    {
      q: 'Two ropes are staked at the same point $P$ and stretched to a round trampoline, each just grazing its edge, at $A$ and at $B$. At the stake the ropes make $\\angle APB = 76^\\circ$, and a third rope is stretched straight from $A$ to $B$. What is $\\angle PAB$?',
      fig: {
        view: [-4, -4, 6.3, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [4.8728, 0], b: [1.847, 2.364] },
          { t: 'seg', a: [4.8728, 0], b: [1.847, -2.364] },
          { t: 'seg', a: [1.847, 2.364], b: [1.847, -2.364] },
          { t: 'tick', a: [4.8728, 0], b: [1.847, 2.364], n: 1 },
          { t: 'tick', a: [4.8728, 0], b: [1.847, -2.364], n: 1 },
          { t: 'angle', at: [4.8728, 0], from: [1.847, 2.364], to: [1.847, -2.364], r: 0.9, label: '76' },
          { t: 'angle', at: [1.847, 2.364], from: [4.8728, 0], to: [1.847, -2.364], r: 0.6, label: '?' },
          { t: 'point', p: [1.847, 2.364], label: 'A', dx: -4, dy: -11 },
          { t: 'point', p: [1.847, -2.364], label: 'B', dx: -4, dy: 12 },
          { t: 'point', p: [4.8728, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$52^\\circ$', '$76^\\circ$', '$104^\\circ$', '$38^\\circ$'],
      answer: 0,
      solution:
        'Route one, the isosceles triangle: the two tangent segments from $P$ are equal, so $PA = PB$ and the base angles of triangle $PAB$ match. Therefore $\\angle PAB = \\frac{180^\\circ - 76^\\circ}{2} = \\frac{104^\\circ}{2} = 52^\\circ$ ✓. Check a second, independent way, with the tangent-chord rule: the near arc $AB$ is $180^\\circ - 76^\\circ = 104^\\circ$, and $\\angle PAB$ is formed by tangent $PA$ and chord $AB$, so it equals half that arc, $52^\\circ$ ✓. (The choice $76^\\circ$ is COPYING THE ANGLE AT $P$ ✗; the choice $104^\\circ$ is STOPPING AT $180^\\circ - 76^\\circ$ without splitting it between the two base angles ✗; the choice $38^\\circ$ is HALVING THE ANGLE AT $P$ rather than halving what is left over ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 12,
  sections: { '12.3': s123 },
}
