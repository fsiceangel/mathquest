// Introduction to Geometry chapter 12 — variations for section 12.4 (mixed
// circle-angle work). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every keyed answer was worked twice by routes that do not share steps:
//    the headline rule once, then a second pass that rebuilds the answer out of
//    arcs, or out of a triangle angle sum, or out of the supplementary partner.
//  - Every labeled point sits on its circle at exactly (r cos t, r sin t) to
//    four decimals, so each marked angle in a figure agrees with the number the
//    problem states to well under a degree, and every tangent is drawn square
//    to the radius at its point of contact.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution.

const s124 = [
  // s1 — opposite angles of a cyclic quadrilateral are supplementary.
  [
    {
      q: 'Four mooring rings $A$, $B$, $C$, and $D$ are set into the wall of a circular boat basin, and chains run from ring to ring around the basin in that order. The chains meet at ring $B$ at an angle of $\\angle B = 124^\\circ$. What is $\\angle D$?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.2981, 1.9284], b: [0.1047, 2.9982] },
          { t: 'seg', a: [0.1047, 2.9982], b: [2.6488, 1.4084] },
          { t: 'seg', a: [2.6488, 1.4084], b: [-0.6237, -2.9344] },
          { t: 'seg', a: [-0.6237, -2.9344], b: [-2.2981, 1.9284] },
          { t: 'angle', at: [0.1047, 2.9982], from: [-2.2981, 1.9284], to: [2.6488, 1.4084], r: 0.55, label: '124' },
          { t: 'angle', at: [-0.6237, -2.9344], from: [2.6488, 1.4084], to: [-2.2981, 1.9284], r: 0.55, label: '?' },
          { t: 'point', p: [-2.2981, 1.9284], label: 'A', dx: -10, dy: -8 },
          { t: 'point', p: [0.1047, 2.9982], label: 'B', dx: 0, dy: -13 },
          { t: 'point', p: [2.6488, 1.4084], label: 'C', dx: 11, dy: -6 },
          { t: 'point', p: [-0.6237, -2.9344], label: 'D', dx: -3, dy: 13 },
        ],
      },
      choices: ['$62^\\circ$', '$236^\\circ$', '$56^\\circ$', '$124^\\circ$'],
      answer: 2,
      solution:
        'Route one, the cyclic quadrilateral rule: all four rings lie on one circle, so opposite angles are supplementary and $\\angle D = 180^\\circ - 124^\\circ = 56^\\circ$ ✓. Check a second, independent way, by counting arcs: $\\angle B$ is inscribed at $B$ and opens onto the arc from $C$ around through $D$ to $A$, so that arc measures $2 \\times 124^\\circ = 248^\\circ$. The rest of the basin wall is the arc from $A$ through $B$ to $C$, measuring $360^\\circ - 248^\\circ = 112^\\circ$, and $\\angle D$ is half of it: $\\frac{112^\\circ}{2} = 56^\\circ$ ✓. (The choice $124^\\circ$ is ASSUMING OPPOSITE ANGLES ARE EQUAL instead of supplementary ✗; the choice $62^\\circ$ is HALVING THE GIVEN ANGLE, as though $124^\\circ$ were an arc ✗; the choice $236^\\circ$ is SUBTRACTING FROM THE WHOLE CIRCLE, computing $360^\\circ - 124^\\circ$ ✗.)',
    },
    {
      q: 'A round trampoline has four safety clips $A$, $B$, $C$, and $D$ spaced around its metal rim, joined in that order by four tight straps stretched across the mat. At clip $B$ the two straps meet at $\\angle B = 98^\\circ$. What is $\\angle D$, the angle between the straps at clip $D$?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.4575, 1.7207], b: [1.2679, 2.7189] },
          { t: 'seg', a: [1.2679, 2.7189], b: [2.8366, -0.9767] },
          { t: 'seg', a: [2.8366, -0.9767], b: [-1.4544, -2.6239] },
          { t: 'seg', a: [-1.4544, -2.6239], b: [-2.4575, 1.7207] },
          { t: 'angle', at: [1.2679, 2.7189], from: [-2.4575, 1.7207], to: [2.8366, -0.9767], r: 0.55, label: '98' },
          { t: 'angle', at: [-1.4544, -2.6239], from: [2.8366, -0.9767], to: [-2.4575, 1.7207], r: 0.55, label: '?' },
          { t: 'point', p: [-2.4575, 1.7207], label: 'A', dx: -11, dy: -7 },
          { t: 'point', p: [1.2679, 2.7189], label: 'B', dx: 5, dy: -12 },
          { t: 'point', p: [2.8366, -0.9767], label: 'C', dx: 12, dy: 4 },
          { t: 'point', p: [-1.4544, -2.6239], label: 'D', dx: -6, dy: 11 },
        ],
      },
      choices: ['$82^\\circ$', '$98^\\circ$', '$49^\\circ$', '$262^\\circ$'],
      answer: 0,
      solution:
        'Route one, the cyclic quadrilateral rule: the four clips sit on one circular rim, so opposite angles are supplementary and $\\angle D = 180^\\circ - 98^\\circ = 82^\\circ$ ✓. Check a second, independent way, by counting arcs: the inscribed angle at $B$ opens onto the arc running from $C$ around through $D$ to $A$, so that arc is $2 \\times 98^\\circ = 196^\\circ$. What is left of the rim is the arc from $A$ through $B$ to $C$, measuring $360^\\circ - 196^\\circ = 164^\\circ$, and $\\angle D$ is half of that: $\\frac{164^\\circ}{2} = 82^\\circ$ ✓. (The choice $98^\\circ$ is ASSUMING OPPOSITE ANGLES ARE EQUAL instead of supplementary ✗; the choice $49^\\circ$ is HALVING THE GIVEN ANGLE, as though $98^\\circ$ were an arc ✗; the choice $262^\\circ$ is SUBTRACTING FROM THE WHOLE CIRCLE, computing $360^\\circ - 98^\\circ$ ✗.)',
    },
    {
      q: 'A circular quilting hoop holds four pins $A$, $B$, $C$, and $D$ pushed through the fabric right at the hoop’s edge, and a basting thread runs $A$ to $B$ to $C$ to $D$ and back to $A$. The thread turns through $\\angle B = 107^\\circ$ at pin $B$. What is $\\angle D$?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.5981, 1.5000], b: [0.5209, 2.9544] },
          { t: 'seg', a: [0.5209, 2.9544], b: [2.9927, 0.2093] },
          { t: 'seg', a: [2.9927, 0.2093], b: [-0.9271, -2.8532] },
          { t: 'seg', a: [-0.9271, -2.8532], b: [-2.5981, 1.5000] },
          { t: 'angle', at: [0.5209, 2.9544], from: [-2.5981, 1.5000], to: [2.9927, 0.2093], r: 0.55, label: '107' },
          { t: 'angle', at: [-0.9271, -2.8532], from: [2.9927, 0.2093], to: [-2.5981, 1.5000], r: 0.55, label: '?' },
          { t: 'point', p: [-2.5981, 1.5000], label: 'A', dx: -11, dy: -6 },
          { t: 'point', p: [0.5209, 2.9544], label: 'B', dx: 2, dy: -13 },
          { t: 'point', p: [2.9927, 0.2093], label: 'C', dx: 13, dy: -1 },
          { t: 'point', p: [-0.9271, -2.8532], label: 'D', dx: -4, dy: 12 },
        ],
      },
      choices: ['$107^\\circ$', '$253^\\circ$', '$53.5^\\circ$', '$73^\\circ$'],
      answer: 3,
      solution:
        'Route one, the cyclic quadrilateral rule: the four pins lie on one hoop, so opposite angles are supplementary and $\\angle D = 180^\\circ - 107^\\circ = 73^\\circ$ ✓. Check a second, independent way, by counting arcs: the inscribed angle at $B$ opens onto the arc from $C$ around through $D$ to $A$, which therefore measures $2 \\times 107^\\circ = 214^\\circ$. The remaining piece of the hoop, from $A$ through $B$ to $C$, is $360^\\circ - 214^\\circ = 146^\\circ$, and $\\angle D$ is half of that: $\\frac{146^\\circ}{2} = 73^\\circ$ ✓. (The choice $107^\\circ$ is ASSUMING OPPOSITE ANGLES ARE EQUAL instead of supplementary ✗; the choice $53.5^\\circ$ is HALVING THE GIVEN ANGLE, as though $107^\\circ$ were an arc ✗; the choice $253^\\circ$ is SUBTRACTING FROM THE WHOLE CIRCLE, computing $360^\\circ - 107^\\circ$ ✗.)',
    },
  ],
  // s2 — algebraic angles in a cyclic quadrilateral.
  [
    {
      q: 'A circular mosaic tabletop is divided by four straight seams joining chips $A$, $B$, $C$, and $D$ that sit on the table’s edge. The tiler measures $\\angle A = 2x + 10^\\circ$ and $\\angle C = 4x - 10^\\circ$. What is $\\angle C$?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.1213, 2.1213], b: [2.4575, 1.7207] },
          { t: 'seg', a: [2.4575, 1.7207], b: [2.8007, -1.0751] },
          { t: 'seg', a: [2.8007, -1.0751], b: [-0.7765, -2.8978] },
          { t: 'seg', a: [-0.7765, -2.8978], b: [-2.1213, 2.1213] },
          { t: 'label', p: [-1.5273, 1.5273], text: '2x + 10' },
          { t: 'label', p: [1.7364, -0.6666], text: '4x - 10' },
          { t: 'point', p: [-2.1213, 2.1213], label: 'A', dx: -9, dy: -9 },
          { t: 'point', p: [2.4575, 1.7207], label: 'B', dx: 11, dy: -7 },
          { t: 'point', p: [2.8007, -1.0751], label: 'C', dx: 12, dy: 5 },
          { t: 'point', p: [-0.7765, -2.8978], label: 'D', dx: -3, dy: 13 },
        ],
      },
      choices: ['$30^\\circ$', '$110^\\circ$', '$70^\\circ$', '$130^\\circ$'],
      answer: 1,
      solution:
        'Route one, set up the supplementary pair: $A$ and $C$ are opposite corners of a quadrilateral inscribed in the table’s edge, so $(2x + 10^\\circ) + (4x - 10^\\circ) = 180^\\circ$. The two constants cancel, leaving $6x = 180^\\circ$ and $x = 30^\\circ$, so $\\angle C = 4 \\times 30^\\circ - 10^\\circ = 110^\\circ$ ✓. Check a second, independent way, through arcs and the full circle: $\\angle A$ is half the arc from $B$ around to $D$, so that arc is $4x + 20^\\circ$, and $\\angle C$ is half the other arc, which is $8x - 20^\\circ$. Those two arcs are the whole tabletop edge: $(4x + 20^\\circ) + (8x - 20^\\circ) = 360^\\circ$, so $12x = 360^\\circ$ and $x = 30^\\circ$; the arc facing $C$ is $8 \\times 30^\\circ - 20^\\circ = 220^\\circ$ and $\\angle C = \\frac{220^\\circ}{2} = 110^\\circ$ ✓. (The choice $30^\\circ$ is STOPPING AT $x$ instead of answering for the angle ✗; the choice $70^\\circ$ is REPORTING $\\angle A$, the wrong corner ✗; the choice $130^\\circ$ is ADDING THE $10^\\circ$ WHEN THE EXPRESSION SUBTRACTS IT ✗.)',
    },
    {
      q: 'A treehouse has a round trapdoor in its floor. Four hinges $A$, $B$, $C$, and $D$ are bolted to the rim of the opening and joined in order by four planks laid across the door. A carpenter finds $\\angle A = 5x$ and $\\angle C = 3x + 20^\\circ$. What is $\\angle A$?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.2981, 1.9284], b: [1.3151, 2.6964] },
          { t: 'seg', a: [1.3151, 2.6964], b: [2.5981, -1.5000] },
          { t: 'seg', a: [2.5981, -1.5000], b: [-2.1580, -2.0840] },
          { t: 'seg', a: [-2.1580, -2.0840], b: [-2.2981, 1.9284] },
          { t: 'label', p: [-1.6546, 1.3884], text: '5x' },
          { t: 'label', p: [1.6108, -0.9300], text: '3x + 20' },
          { t: 'point', p: [-2.2981, 1.9284], label: 'A', dx: -10, dy: -8 },
          { t: 'point', p: [1.3151, 2.6964], label: 'B', dx: 6, dy: -12 },
          { t: 'point', p: [2.5981, -1.5000], label: 'C', dx: 11, dy: 6 },
          { t: 'point', p: [-2.1580, -2.0840], label: 'D', dx: -9, dy: 9 },
        ],
      },
      choices: ['$20^\\circ$', '$50^\\circ$', '$80^\\circ$', '$100^\\circ$'],
      answer: 3,
      solution:
        'Route one, set up the supplementary pair: $A$ and $C$ are opposite corners of a quadrilateral inscribed in the rim, so $5x + (3x + 20^\\circ) = 180^\\circ$, giving $8x = 160^\\circ$ and $x = 20^\\circ$. Then $\\angle A = 5 \\times 20^\\circ = 100^\\circ$ ✓. Check a second, independent way, through arcs and the full circle: $\\angle A$ is half the arc from $B$ around to $D$, so that arc measures $10x$, and $\\angle C$ is half the other arc, which measures $6x + 40^\\circ$. Together the two arcs are the whole rim: $10x + 6x + 40^\\circ = 360^\\circ$, so $16x = 320^\\circ$ and $x = 20^\\circ$; the arc facing $A$ is $10 \\times 20^\\circ = 200^\\circ$, and $\\angle A = \\frac{200^\\circ}{2} = 100^\\circ$ ✓. (The choice $20^\\circ$ is STOPPING AT $x$ instead of answering for the angle ✗; the choice $80^\\circ$ is REPORTING $\\angle C$, the wrong corner ✗; the choice $50^\\circ$ is SETTING THE TWO ANGLES EQUAL instead of supplementary, which gives $x = 10^\\circ$ ✗.)',
    },
    {
      q: 'A hammock hangs from a circular metal ring. Four knots $A$, $B$, $C$, and $D$ are tied onto the ring and linked in order by four short cords stretched across it. The maker records $\\angle A = 3x - 15^\\circ$ and $\\angle C = x + 35^\\circ$. What is $\\angle C$?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.1213, 2.1213], b: [1.3620, 2.6730] },
          { t: 'seg', a: [1.3620, 2.6730], b: [2.4575, -1.7207] },
          { t: 'seg', a: [2.4575, -1.7207], b: [-2.5160, -1.6339] },
          { t: 'seg', a: [-2.5160, -1.6339], b: [-2.1213, 2.1213] },
          { t: 'label', p: [-1.4001, 1.4001], text: '3x - 15' },
          { t: 'label', p: [1.5728, -1.1012], text: 'x + 35' },
          { t: 'point', p: [-2.1213, 2.1213], label: 'A', dx: -9, dy: -9 },
          { t: 'point', p: [1.3620, 2.6730], label: 'B', dx: 6, dy: -12 },
          { t: 'point', p: [2.4575, -1.7207], label: 'C', dx: 11, dy: 7 },
          { t: 'point', p: [-2.5160, -1.6339], label: 'D', dx: -11, dy: 7 },
        ],
      },
      choices: ['$75^\\circ$', '$40^\\circ$', '$105^\\circ$', '$60^\\circ$'],
      answer: 0,
      solution:
        'Route one, set up the supplementary pair: $A$ and $C$ are opposite corners of a quadrilateral inscribed in the ring, so $(3x - 15^\\circ) + (x + 35^\\circ) = 180^\\circ$, giving $4x + 20^\\circ = 180^\\circ$, $4x = 160^\\circ$, and $x = 40^\\circ$. Then $\\angle C = 40^\\circ + 35^\\circ = 75^\\circ$ ✓. Check a second, independent way, through arcs and the full circle: $\\angle A$ is half the arc from $B$ around to $D$, so that arc is $6x - 30^\\circ$, and $\\angle C$ is half the other arc, which is $2x + 70^\\circ$. The two arcs make the whole ring: $(6x - 30^\\circ) + (2x + 70^\\circ) = 360^\\circ$, so $8x = 320^\\circ$ and $x = 40^\\circ$; the arc facing $C$ is $2 \\times 40^\\circ + 70^\\circ = 150^\\circ$, and $\\angle C = \\frac{150^\\circ}{2} = 75^\\circ$ ✓. (The choice $40^\\circ$ is STOPPING AT $x$ instead of answering for the angle ✗; the choice $105^\\circ$ is REPORTING $\\angle A$, the wrong corner ✗; the choice $60^\\circ$ is SETTING THE TWO ANGLES EQUAL instead of supplementary, which gives $x = 25^\\circ$ ✗.)',
    },
  ],
  // s3 — an exterior angle of a cyclic quadrilateral equals the opposite interior angle.
  [
    {
      q: 'A hedge maze is planted along a circular boundary with gates at $A$, $B$, $C$, and $D$ in that order. Gravel paths run $A$ to $B$, $B$ to $C$, $C$ to $D$, and $D$ back to $A$. The path from $B$ through $C$ keeps going straight past the gate to a bench at $E$ outside the boundary. If $\\angle A = 76^\\circ$, what is the exterior angle $\\angle DCE$?',
      fig: {
        view: [-4.7, -5.3, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.7207, 2.4575], b: [2.9776, 0.3656] },
          { t: 'seg', a: [2.9776, 0.3656], b: [0.6872, -4.5461] },
          { t: 'seg', a: [1.6339, -2.5160], b: [-2.4575, -1.7207] },
          { t: 'seg', a: [-2.4575, -1.7207], b: [-1.7207, 2.4575] },
          { t: 'angle', at: [-1.7207, 2.4575], from: [2.9776, 0.3656], to: [-2.4575, -1.7207], r: 0.55, label: '76' },
          { t: 'angle', at: [1.6339, -2.5160], from: [-2.4575, -1.7207], to: [0.6872, -4.5461], r: 0.55, label: '?' },
          { t: 'point', p: [-1.7207, 2.4575], label: 'A', dx: -7, dy: -11 },
          { t: 'point', p: [2.9776, 0.3656], label: 'B', dx: 13, dy: -2 },
          { t: 'point', p: [1.6339, -2.5160], label: 'C', dx: 12, dy: 4 },
          { t: 'point', p: [-2.4575, -1.7207], label: 'D', dx: -11, dy: 7 },
          { t: 'point', p: [0.6872, -4.5461], label: 'E', dx: 2, dy: 13 },
        ],
      },
      choices: ['$104^\\circ$', '$76^\\circ$', '$38^\\circ$', '$152^\\circ$'],
      answer: 1,
      solution:
        'Route one, the exterior-angle shortcut: in a quadrilateral inscribed in a circle, an exterior angle equals the interior angle at the opposite vertex, and the vertex opposite $C$ is $A$, so $\\angle DCE = \\angle A = 76^\\circ$ ✓. Check a second, independent way, by rebuilding it from arcs: $\\angle A$ is inscribed and opens onto the arc from $B$ around through $C$ to $D$, so that arc is $2 \\times 76^\\circ = 152^\\circ$. The rest of the boundary, from $D$ through $A$ to $B$, is $360^\\circ - 152^\\circ = 208^\\circ$, making the interior angle $\\angle BCD = \\frac{208^\\circ}{2} = 104^\\circ$. Since $B$, $C$, and $E$ are one straight path, $\\angle DCE = 180^\\circ - 104^\\circ = 76^\\circ$ ✓. (The choice $104^\\circ$ is REPORTING THE INTERIOR ANGLE AT $C$ instead of the exterior one beside it ✗; the choice $38^\\circ$ is HALVING THE GIVEN ANGLE ✗; the choice $152^\\circ$ is REPORTING THE ARC rather than the angle ✗.)',
    },
    {
      q: 'A go-kart circuit is laid out inside a circular fence with markers at $A$, $B$, $C$, and $D$ in that order, joined by four straight runs. The run from $B$ through $C$ carries on in a straight line past the marker to a tire stack at $E$ beyond the fence. If $\\angle A = 113^\\circ$, what is the exterior angle $\\angle DCE$?',
      fig: {
        view: [-4.7, -4.9, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.8470, 2.3640], b: [1.2202, 2.7406] },
          { t: 'seg', a: [1.2202, 2.7406], b: [2.9059, -4.0205] },
          { t: 'seg', a: [2.3640, -1.8470], b: [-2.8191, -1.0261] },
          { t: 'seg', a: [-2.8191, -1.0261], b: [-1.8470, 2.3640] },
          { t: 'angle', at: [-1.8470, 2.3640], from: [1.2202, 2.7406], to: [-2.8191, -1.0261], r: 0.55, label: '113' },
          { t: 'angle', at: [2.3640, -1.8470], from: [-2.8191, -1.0261], to: [2.9059, -4.0205], r: 0.6, label: '?' },
          { t: 'point', p: [-1.8470, 2.3640], label: 'A', dx: -8, dy: -10 },
          { t: 'point', p: [1.2202, 2.7406], label: 'B', dx: 5, dy: -12 },
          { t: 'point', p: [2.3640, -1.8470], label: 'C', dx: 10, dy: 8 },
          { t: 'point', p: [-2.8191, -1.0261], label: 'D', dx: -12, dy: 4 },
          { t: 'point', p: [2.9059, -4.0205], label: 'E', dx: 4, dy: 13 },
        ],
      },
      choices: ['$67^\\circ$', '$247^\\circ$', '$113^\\circ$', '$56.5^\\circ$'],
      answer: 2,
      solution:
        'Route one, the exterior-angle shortcut: the four markers lie on one circular fence, so an exterior angle of the quadrilateral equals the interior angle at the opposite vertex; opposite $C$ sits $A$, so $\\angle DCE = \\angle A = 113^\\circ$ ✓. Check a second, independent way, by rebuilding it from arcs: $\\angle A$ opens onto the arc from $B$ around through $C$ to $D$, so that arc is $2 \\times 113^\\circ = 226^\\circ$, leaving $360^\\circ - 226^\\circ = 134^\\circ$ for the arc from $D$ through $A$ to $B$. The interior angle is then $\\angle BCD = \\frac{134^\\circ}{2} = 67^\\circ$, and because $B$, $C$, and $E$ lie on one straight run, $\\angle DCE = 180^\\circ - 67^\\circ = 113^\\circ$ ✓. (The choice $67^\\circ$ is REPORTING THE INTERIOR ANGLE AT $C$ instead of the exterior one beside it ✗; the choice $56.5^\\circ$ is HALVING THE GIVEN ANGLE ✗; the choice $247^\\circ$ is SUBTRACTING FROM THE WHOLE CIRCLE, computing $360^\\circ - 113^\\circ$ ✗.)',
    },
    {
      q: 'A boardwalk is built around a circular pond, turning at corner posts $A$, $B$, $C$, and $D$ in that order. At post $C$ one plank is left long: the walkway from $B$ through $C$ continues straight to a lamp at $E$ past the pond. If $\\angle A = 94^\\circ$, what is the exterior angle $\\angle DCE$?',
      fig: {
        view: [-4.7, -4.8, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.0074, 2.2294], b: [1.8470, 2.3640] },
          { t: 'seg', a: [1.8470, 2.3640], b: [2.8375, -3.8900] },
          { t: 'seg', a: [2.4871, -1.6776], b: [-2.1580, -2.0840] },
          { t: 'seg', a: [-2.1580, -2.0840], b: [-2.0074, 2.2294] },
          { t: 'angle', at: [-2.0074, 2.2294], from: [1.8470, 2.3640], to: [-2.1580, -2.0840], r: 0.55, label: '94' },
          { t: 'angle', at: [2.4871, -1.6776], from: [-2.1580, -2.0840], to: [2.8375, -3.8900], r: 0.6, label: '?' },
          { t: 'point', p: [-2.0074, 2.2294], label: 'A', dx: -9, dy: -10 },
          { t: 'point', p: [1.8470, 2.3640], label: 'B', dx: 8, dy: -10 },
          { t: 'point', p: [2.4871, -1.6776], label: 'C', dx: 11, dy: 7 },
          { t: 'point', p: [-2.1580, -2.0840], label: 'D', dx: -9, dy: 9 },
          { t: 'point', p: [2.8375, -3.8900], label: 'E', dx: 4, dy: 13 },
        ],
      },
      choices: ['$86^\\circ$', '$47^\\circ$', '$188^\\circ$', '$94^\\circ$'],
      answer: 3,
      solution:
        'Route one, the exterior-angle shortcut: the four posts lie on one circle, so an exterior angle of the quadrilateral equals the interior angle at the opposite vertex, and the vertex opposite $C$ is $A$, giving $\\angle DCE = \\angle A = 94^\\circ$ ✓. Check a second, independent way, by rebuilding it from arcs: $\\angle A$ opens onto the arc from $B$ around through $C$ to $D$, so that arc is $2 \\times 94^\\circ = 188^\\circ$, and the arc from $D$ through $A$ to $B$ takes up the remaining $360^\\circ - 188^\\circ = 172^\\circ$. The interior angle is $\\angle BCD = \\frac{172^\\circ}{2} = 86^\\circ$, and since $B$, $C$, and $E$ lie on one straight plank, $\\angle DCE = 180^\\circ - 86^\\circ = 94^\\circ$ ✓. (The choice $86^\\circ$ is REPORTING THE INTERIOR ANGLE AT $C$ instead of the exterior one beside it ✗; the choice $47^\\circ$ is HALVING THE GIVEN ANGLE ✗; the choice $188^\\circ$ is REPORTING THE ARC rather than the angle ✗.)',
    },
  ],
  // s4 — a corner of a cyclic quadrilateral from the four arcs.
  [
    {
      q: 'Four wind turbines $A$, $B$, $C$, and $D$ stand on a circular ridge, and service tracks join them in that order. The ridge is cut into arcs $\\overset{\\frown}{AB} = 58^\\circ$, $\\overset{\\frown}{BC} = 110^\\circ$, $\\overset{\\frown}{CD} = 86^\\circ$, and $\\overset{\\frown}{DA} = 106^\\circ$, as shown. What is $\\angle A$, the angle between the two tracks at turbine $A$?',
      fig: {
        view: [-4.9, -4.9, 4.9, 4.9],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.2981, 1.9284], b: [0.4175, 2.9708] },
          { t: 'seg', a: [0.4175, 2.9708], b: [2.6488, -1.4084] },
          { t: 'seg', a: [2.6488, -1.4084], b: [-1.2202, -2.7406] },
          { t: 'seg', a: [-1.2202, -2.7406], b: [-2.2981, 1.9284] },
          { t: 'label', p: [-1.3797, 3.5943], text: '58°' },
          { t: 'label', p: [3.4304, 1.7479], text: '110°' },
          { t: 'label', p: [1.2534, -3.6402], text: '86°' },
          { t: 'label', p: [-3.7513, -0.8661], text: '106°' },
          { t: 'angle', at: [-2.2981, 1.9284], from: [0.4175, 2.9708], to: [-1.2202, -2.7406], r: 0.55, label: '?' },
          { t: 'point', p: [-2.2981, 1.9284], label: 'A', dx: -10, dy: -8 },
          { t: 'point', p: [0.4175, 2.9708], label: 'B', dx: 2, dy: -13 },
          { t: 'point', p: [2.6488, -1.4084], label: 'C', dx: 11, dy: 6 },
          { t: 'point', p: [-1.2202, -2.7406], label: 'D', dx: -5, dy: 12 },
        ],
      },
      choices: ['$82^\\circ$', '$196^\\circ$', '$98^\\circ$', '$55^\\circ$'],
      answer: 2,
      solution:
        'Route one, pick the arc the corner faces: the angle at turbine $A$ opens across the ridge onto the arc that runs from $B$ through $C$ to $D$, so it intercepts $110^\\circ + 86^\\circ = 196^\\circ$, and an inscribed angle is half its arc: $\\angle A = \\frac{196^\\circ}{2} = 98^\\circ$ ✓. Check a second, independent way, through the opposite corner: $\\angle C$ faces the arc from $D$ through $A$ to $B$, which is $106^\\circ + 58^\\circ = 164^\\circ$, so $\\angle C = 82^\\circ$; opposite angles of a quadrilateral inscribed in a circle are supplementary, so $\\angle A = 180^\\circ - 82^\\circ = 98^\\circ$ ✓. (The choice $82^\\circ$ is USING THE TWO ARCS THAT TOUCH $A$ instead of the two it faces ✗; the choice $196^\\circ$ is FORGETTING TO HALVE and reporting the arc ✗; the choice $55^\\circ$ is USING ONLY ARC $BC$ and dropping arc $CD$ ✗.)',
    },
    {
      q: 'A round test lake has four control buoys $A$, $B$, $C$, and $D$ anchored at its shore, linked in that order by four measuring cables. The shore splits into arcs $\\overset{\\frown}{AB} = 88^\\circ$, $\\overset{\\frown}{BC} = 72^\\circ$, $\\overset{\\frown}{CD} = 104^\\circ$, and $\\overset{\\frown}{DA} = 96^\\circ$, as shown. What is $\\angle A$, the angle the two cables make at buoy $A$?',
      fig: {
        view: [-4.9, -4.9, 4.9, 4.9],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.4575, 1.7207], b: [1.6339, 2.5160] },
          { t: 'seg', a: [1.6339, 2.5160], b: [2.8978, -0.7765] },
          { t: 'seg', a: [2.8978, -0.7765], b: [-1.4544, -2.6239] },
          { t: 'seg', a: [-1.4544, -2.6239], b: [-2.4575, 1.7207] },
          { t: 'label', p: [-0.7346, 3.7793], text: '88°' },
          { t: 'label', p: [3.5943, 1.3797], text: '72°' },
          { t: 'label', p: [1.5043, -3.5439], text: '104°' },
          { t: 'label', p: [-3.7513, -0.8661], text: '96°' },
          { t: 'angle', at: [-2.4575, 1.7207], from: [1.6339, 2.5160], to: [-1.4544, -2.6239], r: 0.55, label: '?' },
          { t: 'point', p: [-2.4575, 1.7207], label: 'A', dx: -11, dy: -7 },
          { t: 'point', p: [1.6339, 2.5160], label: 'B', dx: 7, dy: -11 },
          { t: 'point', p: [2.8978, -0.7765], label: 'C', dx: 13, dy: 3 },
          { t: 'point', p: [-1.4544, -2.6239], label: 'D', dx: -6, dy: 11 },
        ],
      },
      choices: ['$88^\\circ$', '$92^\\circ$', '$176^\\circ$', '$36^\\circ$'],
      answer: 0,
      solution:
        'Route one, pick the arc the corner faces: the angle at buoy $A$ looks across the lake onto the arc running from $B$ through $C$ to $D$, so it intercepts $72^\\circ + 104^\\circ = 176^\\circ$, and an inscribed angle is half its arc: $\\angle A = \\frac{176^\\circ}{2} = 88^\\circ$ ✓. Check a second, independent way, through the opposite corner: $\\angle C$ faces the arc from $D$ through $A$ to $B$, measuring $96^\\circ + 88^\\circ = 184^\\circ$, so $\\angle C = 92^\\circ$; opposite angles of a quadrilateral inscribed in a circle are supplementary, so $\\angle A = 180^\\circ - 92^\\circ = 88^\\circ$ ✓. (The choice $92^\\circ$ is USING THE TWO ARCS THAT TOUCH $A$ instead of the two it faces ✗; the choice $176^\\circ$ is FORGETTING TO HALVE and reporting the arc ✗; the choice $36^\\circ$ is USING ONLY ARC $BC$ and dropping arc $CD$ ✗.)',
    },
    {
      q: 'A hiking loop follows a circular rim past checkpoints $A$, $B$, $C$, and $D$ in that order, and four rope bridges are strung directly between neighboring checkpoints. The rim divides into arcs $\\overset{\\frown}{AB} = 64^\\circ$, $\\overset{\\frown}{BC} = 118^\\circ$, $\\overset{\\frown}{CD} = 94^\\circ$, and $\\overset{\\frown}{DA} = 84^\\circ$, as shown. What is $\\angle A$, the angle between the two bridges at checkpoint $A$?',
      fig: {
        view: [-4.9, -4.9, 4.9, 4.9],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.2294, 2.0074], b: [0.8269, 2.8838] },
          { t: 'seg', a: [0.8269, 2.8838], b: [2.1580, -2.0840] },
          { t: 'seg', a: [2.1580, -2.0840], b: [-2.2294, -2.0074] },
          { t: 'seg', a: [-2.2294, -2.0074], b: [-2.2294, 2.0074] },
          { t: 'label', p: [-1.0612, 3.7009], text: '64°' },
          { t: 'label', p: [3.7188, 0.9965], text: '118°' },
          { t: 'label', p: [-0.0672, -3.8494], text: '94°' },
          { t: 'label', p: [-3.8500, 0.0000], text: '84°' },
          { t: 'angle', at: [-2.2294, 2.0074], from: [0.8269, 2.8838], to: [-2.2294, -2.0074], r: 0.55, label: '?' },
          { t: 'point', p: [-2.2294, 2.0074], label: 'A', dx: -10, dy: -9 },
          { t: 'point', p: [0.8269, 2.8838], label: 'B', dx: 4, dy: -12 },
          { t: 'point', p: [2.1580, -2.0840], label: 'C', dx: 9, dy: 9 },
          { t: 'point', p: [-2.2294, -2.0074], label: 'D', dx: -10, dy: 9 },
        ],
      },
      choices: ['$74^\\circ$', '$212^\\circ$', '$59^\\circ$', '$106^\\circ$'],
      answer: 3,
      solution:
        'Route one, pick the arc the corner faces: the angle at checkpoint $A$ opens onto the arc running from $B$ through $C$ to $D$, so it intercepts $118^\\circ + 94^\\circ = 212^\\circ$, and an inscribed angle is half its arc: $\\angle A = \\frac{212^\\circ}{2} = 106^\\circ$ ✓. Check a second, independent way, through the opposite corner: $\\angle C$ faces the arc from $D$ through $A$ to $B$, measuring $84^\\circ + 64^\\circ = 148^\\circ$, so $\\angle C = 74^\\circ$; opposite angles of a quadrilateral inscribed in a circle are supplementary, so $\\angle A = 180^\\circ - 74^\\circ = 106^\\circ$ ✓. (The choice $74^\\circ$ is USING THE TWO ARCS THAT TOUCH $A$ instead of the two it faces ✗; the choice $212^\\circ$ is FORGETTING TO HALVE and reporting the arc ✗; the choice $59^\\circ$ is USING ONLY ARC $BC$ and dropping arc $CD$ ✗.)',
    },
  ],
  // s5 — a diameter, one acute angle known, the other wanted.
  [
    {
      q: 'A circular greenhouse has a straight ridge beam $AB$ running across it through the exact center. A vent at $C$ on the wall is braced to both ends of the beam. The brace at $A$ meets the beam at $\\angle BAC = 19^\\circ$. What is $\\angle ABC$, the angle the other brace makes at $B$?',
      fig: {
        view: [-4.5, -4.2, 4.5, 4.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3.0000, 0.0000], b: [3.0000, 0.0000] },
          { t: 'seg', a: [-3.0000, 0.0000], b: [2.3640, 1.8470] },
          { t: 'seg', a: [3.0000, 0.0000], b: [2.3640, 1.8470] },
          { t: 'right', at: [2.3640, 1.8470], from: [-3.0000, 0.0000], to: [3.0000, 0.0000] },
          { t: 'angle', at: [-3.0000, 0.0000], from: [2.3640, 1.8470], to: [3.0000, 0.0000], r: 0.9, label: '19' },
          { t: 'angle', at: [3.0000, 0.0000], from: [2.3640, 1.8470], to: [-3.0000, 0.0000], r: 0.7, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3.0000, 0.0000], label: 'A', dx: -13, dy: 0 },
          { t: 'point', p: [3.0000, 0.0000], label: 'B', dx: 13, dy: 0 },
          { t: 'point', p: [2.3640, 1.8470], label: 'C', dx: 10, dy: -8 },
        ],
      },
      choices: ['$19^\\circ$', '$71^\\circ$', '$161^\\circ$', '$38^\\circ$'],
      answer: 1,
      solution:
        'Route one, the semicircle rule plus the triangle angle sum: the beam runs through the center, so $AB$ is a diameter and the vent angle is right, $\\angle ACB = 90^\\circ$. The three angles of triangle $ABC$ total $180^\\circ$, so $\\angle ABC = 180^\\circ - 90^\\circ - 19^\\circ = 71^\\circ$ ✓. Check a second, independent way, purely with arcs: $\\angle BAC = 19^\\circ$ is inscribed on arc $BC$, so $\\overset{\\frown}{BC} = 2 \\times 19^\\circ = 38^\\circ$. A diameter splits the wall into two semicircles, so on the vent’s side $\\overset{\\frown}{AC} + \\overset{\\frown}{CB} = 180^\\circ$, giving $\\overset{\\frown}{AC} = 142^\\circ$, and $\\angle ABC$ is inscribed on that arc: $\\frac{142^\\circ}{2} = 71^\\circ$ ✓. (The choice $19^\\circ$ is ASSUMING THE TWO ACUTE ANGLES ARE EQUAL ✗; the choice $161^\\circ$ is FORGETTING THE RIGHT ANGLE and computing $180^\\circ - 19^\\circ$ ✗; the choice $38^\\circ$ is REPORTING THE ARC $BC$ instead of an angle ✗.)',
    },
    {
      q: 'A drum head is a perfect circle. A drumstick lies straight across it from rim point $A$ to rim point $B$, passing over the center, and a strip of tape joins a rosin mark at $C$ on the rim to both $A$ and $B$. The tape at $A$ makes $\\angle BAC = 44^\\circ$ with the stick. What is $\\angle ABC$?',
      fig: {
        view: [-4.5, -4.2, 4.5, 4.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3.0000, 0.0000], b: [3.0000, 0.0000] },
          { t: 'seg', a: [-3.0000, 0.0000], b: [0.1047, 2.9982] },
          { t: 'seg', a: [3.0000, 0.0000], b: [0.1047, 2.9982] },
          { t: 'right', at: [0.1047, 2.9982], from: [-3.0000, 0.0000], to: [3.0000, 0.0000] },
          { t: 'angle', at: [-3.0000, 0.0000], from: [0.1047, 2.9982], to: [3.0000, 0.0000], r: 0.9, label: '44' },
          { t: 'angle', at: [3.0000, 0.0000], from: [0.1047, 2.9982], to: [-3.0000, 0.0000], r: 0.7, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3.0000, 0.0000], label: 'A', dx: -13, dy: 0 },
          { t: 'point', p: [3.0000, 0.0000], label: 'B', dx: 13, dy: 0 },
          { t: 'point', p: [0.1047, 2.9982], label: 'C', dx: 0, dy: -13 },
        ],
      },
      choices: ['$136^\\circ$', '$44^\\circ$', '$46^\\circ$', '$88^\\circ$'],
      answer: 2,
      solution:
        'Route one, the semicircle rule plus the triangle angle sum: the stick passes over the center, so $AB$ is a diameter and $\\angle ACB = 90^\\circ$; the angles of triangle $ABC$ then give $\\angle ABC = 180^\\circ - 90^\\circ - 44^\\circ = 46^\\circ$ ✓. Check a second, independent way, purely with arcs: $\\angle BAC = 44^\\circ$ is inscribed on arc $BC$, so $\\overset{\\frown}{BC} = 88^\\circ$; the diameter makes $\\overset{\\frown}{AC} + \\overset{\\frown}{CB} = 180^\\circ$ on the rosin mark’s side, so $\\overset{\\frown}{AC} = 92^\\circ$ and $\\angle ABC = \\frac{92^\\circ}{2} = 46^\\circ$ ✓. (The choice $44^\\circ$ is ASSUMING THE TWO ACUTE ANGLES ARE EQUAL ✗; the choice $136^\\circ$ is FORGETTING THE RIGHT ANGLE and computing $180^\\circ - 44^\\circ$ ✗; the choice $88^\\circ$ is REPORTING THE ARC $BC$ instead of an angle ✗.)',
    },
    {
      q: 'A round skylight has a metal bar $AB$ fixed across it through the center. A pigeon perches at $C$ on the frame, and two wires run from the pigeon to $A$ and to $B$. The wire at $A$ meets the bar at $\\angle BAC = 58^\\circ$. What is $\\angle ABC$?',
      fig: {
        view: [-4.5, -4.2, 4.5, 4.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3.0000, 0.0000], b: [3.0000, 0.0000] },
          { t: 'seg', a: [-3.0000, 0.0000], b: [-1.3151, 2.6964] },
          { t: 'seg', a: [3.0000, 0.0000], b: [-1.3151, 2.6964] },
          { t: 'right', at: [-1.3151, 2.6964], from: [-3.0000, 0.0000], to: [3.0000, 0.0000] },
          { t: 'angle', at: [-3.0000, 0.0000], from: [-1.3151, 2.6964], to: [3.0000, 0.0000], r: 0.9, label: '58' },
          { t: 'angle', at: [3.0000, 0.0000], from: [-1.3151, 2.6964], to: [-3.0000, 0.0000], r: 0.7, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3.0000, 0.0000], label: 'A', dx: -13, dy: 0 },
          { t: 'point', p: [3.0000, 0.0000], label: 'B', dx: 13, dy: 0 },
          { t: 'point', p: [-1.3151, 2.6964], label: 'C', dx: -6, dy: -12 },
        ],
      },
      choices: ['$32^\\circ$', '$58^\\circ$', '$122^\\circ$', '$116^\\circ$'],
      answer: 0,
      solution:
        'Route one, the semicircle rule plus the triangle angle sum: the bar runs through the center, so $AB$ is a diameter and $\\angle ACB = 90^\\circ$; then $\\angle ABC = 180^\\circ - 90^\\circ - 58^\\circ = 32^\\circ$ ✓. Check a second, independent way, purely with arcs: $\\angle BAC = 58^\\circ$ is inscribed on arc $BC$, so $\\overset{\\frown}{BC} = 116^\\circ$; on the pigeon’s side of the diameter $\\overset{\\frown}{AC} + \\overset{\\frown}{CB} = 180^\\circ$, so $\\overset{\\frown}{AC} = 64^\\circ$ and $\\angle ABC = \\frac{64^\\circ}{2} = 32^\\circ$ ✓. (The choice $58^\\circ$ is ASSUMING THE TWO ACUTE ANGLES ARE EQUAL ✗; the choice $122^\\circ$ is FORGETTING THE RIGHT ANGLE and computing $180^\\circ - 58^\\circ$ ✗; the choice $116^\\circ$ is REPORTING THE ARC $BC$ instead of an angle ✗.)',
    },
  ],
  // s6 — two chords crossing inside; find the far arc.
  [
    {
      q: 'Two zip lines cross above a round courtyard: one runs from tower $A$ to tower $C$, the other from tower $B$ to tower $D$, with all four towers on the courtyard wall. The lines cross at $P$, where $\\angle APB = 74^\\circ$, and a spectator at $C$ sees the towers $A$ and $B$ at $\\angle ACB = 35^\\circ$. What is the arc $\\overset{\\frown}{CD}$?',
      fig: {
        view: [-4.7, -4.9, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.7207, 2.4575], b: [2.1213, -2.1213] },
          { t: 'seg', a: [1.7207, 2.4575], b: [-1.6339, -2.5160] },
          { t: 'seg', a: [2.1213, -2.1213], b: [1.7207, 2.4575] },
          { t: 'angle', at: [0.1871, 0.1838], from: [-1.7207, 2.4575], to: [1.7207, 2.4575], r: 0.5, label: '74' },
          { t: 'angle', at: [2.1213, -2.1213], from: [-1.7207, 2.4575], to: [1.7207, 2.4575], r: 0.55, label: '35' },
          { t: 'label', p: [0.4024, -3.8289], text: '?' },
          { t: 'point', p: [-1.7207, 2.4575], label: 'A', dx: -7, dy: -11 },
          { t: 'point', p: [1.7207, 2.4575], label: 'B', dx: 7, dy: -11 },
          { t: 'point', p: [2.1213, -2.1213], label: 'C', dx: 9, dy: 9 },
          { t: 'point', p: [-1.6339, -2.5160], label: 'D', dx: -7, dy: 11 },
          { t: 'point', p: [0.1871, 0.1838], label: 'P', dx: -13, dy: -2 },
        ],
      },
      choices: ['$70^\\circ$', '$78^\\circ$', '$148^\\circ$', '$39^\\circ$'],
      answer: 1,
      solution:
        'Route one, one arc at a time: the inscribed angle at $C$ gives $\\overset{\\frown}{AB} = 2 \\times 35^\\circ = 70^\\circ$. An angle formed where two chords cross inside is half the SUM of the two arcs it and its vertical partner cut off, so $74^\\circ = \\frac{70^\\circ + \\overset{\\frown}{CD}}{2}$, which means $\\overset{\\frown}{CD} = 148^\\circ - 70^\\circ = 78^\\circ$ ✓. Check a second, independent way, with a triangle instead of the crossing rule: $\\angle BPC = 180^\\circ - 74^\\circ = 106^\\circ$ because $A$, $P$, $C$ lie on one zip line. In triangle $PBC$ the angle at $C$ is the given $35^\\circ$, so $\\angle PBC = 180^\\circ - 106^\\circ - 35^\\circ = 39^\\circ$. That angle sits at $B$ on the chord $BD$, so it is the inscribed angle on arc $CD$, giving $\\overset{\\frown}{CD} = 2 \\times 39^\\circ = 78^\\circ$ ✓. (The choice $70^\\circ$ is STOPPING AT ARC $AB$, the arc you built on the way ✗; the choice $148^\\circ$ is FORGETTING TO SUBTRACT ARC $AB$ after doubling $\\angle APB$ ✗; the choice $39^\\circ$ is REPORTING AN INSCRIBED ANGLE where an arc was asked for ✗.)',
    },
    {
      q: 'A circular sensor plate is crossed by two laser beams. One beam enters at $A$ and leaves at $C$; the other enters at $B$ and leaves at $D$. They cross inside at $P$ with $\\angle APB = 59^\\circ$, and a detector at $C$ registers $\\angle ACB = 27^\\circ$. What is the arc $\\overset{\\frown}{CD}$?',
      fig: {
        view: [-4.7, -4.9, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.3620, 2.6730], b: [1.7207, -2.4575] },
          { t: 'seg', a: [1.3620, 2.6730], b: [-1.4544, -2.6239] },
          { t: 'seg', a: [1.7207, -2.4575], b: [1.3620, 2.6730] },
          { t: 'angle', at: [0.0832, 0.2678], from: [-1.3620, 2.6730], to: [1.3620, 2.6730], r: 0.5, label: '59' },
          { t: 'angle', at: [1.7207, -2.4575], from: [-1.3620, 2.6730], to: [1.3620, 2.6730], r: 0.55, label: '27' },
          { t: 'label', p: [0.2015, -3.8447], text: '?' },
          { t: 'point', p: [-1.3620, 2.6730], label: 'A', dx: -6, dy: -12 },
          { t: 'point', p: [1.3620, 2.6730], label: 'B', dx: 6, dy: -12 },
          { t: 'point', p: [1.7207, -2.4575], label: 'C', dx: 7, dy: 11 },
          { t: 'point', p: [-1.4544, -2.6239], label: 'D', dx: -6, dy: 11 },
          { t: 'point', p: [0.0832, 0.2678], label: 'P', dx: -13, dy: -2 },
        ],
      },
      choices: ['$54^\\circ$', '$118^\\circ$', '$29.5^\\circ$', '$64^\\circ$'],
      answer: 3,
      solution:
        'Route one, one arc at a time: the inscribed angle at $C$ gives $\\overset{\\frown}{AB} = 2 \\times 27^\\circ = 54^\\circ$. An angle made where two chords cross inside is half the SUM of the two arcs it and its vertical partner cut off, so $59^\\circ = \\frac{54^\\circ + \\overset{\\frown}{CD}}{2}$ and $\\overset{\\frown}{CD} = 118^\\circ - 54^\\circ = 64^\\circ$ ✓. Check a second, independent way, with a triangle instead of the crossing rule: since $A$, $P$, $C$ lie on one beam, $\\angle BPC = 180^\\circ - 59^\\circ = 121^\\circ$. In triangle $PBC$ the angle at $C$ is the given $27^\\circ$, so $\\angle PBC = 180^\\circ - 121^\\circ - 27^\\circ = 32^\\circ$. That angle sits at $B$ on chord $BD$, so it is inscribed on arc $CD$ and $\\overset{\\frown}{CD} = 2 \\times 32^\\circ = 64^\\circ$ ✓. (The choice $54^\\circ$ is STOPPING AT ARC $AB$, the arc you built on the way ✗; the choice $118^\\circ$ is FORGETTING TO SUBTRACT ARC $AB$ after doubling $\\angle APB$ ✗; the choice $29.5^\\circ$ is HALVING $\\angle APB$ when the rule calls for doubling ✗.)',
    },
    {
      q: 'Two ribbons are stretched across a round dance floor between hooks on the wall: one from $A$ to $C$, one from $B$ to $D$. They cross at $P$ with $\\angle APB = 73^\\circ$, and standing at hook $C$ a dancer sees hooks $A$ and $B$ at $\\angle ACB = 29^\\circ$. What is the arc $\\overset{\\frown}{CD}$?',
      fig: {
        view: [-4.7, -4.9, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.4544, 2.6239], b: [2.1941, -2.0460] },
          { t: 'seg', a: [1.4544, 2.6239], b: [-1.9682, -2.2641] },
          { t: 'seg', a: [2.1941, -2.0460], b: [1.4544, 2.6239] },
          { t: 'angle', at: [0.0796, 0.6605], from: [-1.4544, 2.6239], to: [1.4544, 2.6239], r: 0.5, label: '73' },
          { t: 'angle', at: [2.1941, -2.0460], from: [-1.4544, 2.6239], to: [1.4544, 2.6239], r: 0.55, label: '29' },
          { t: 'label', p: [0.2015, -3.8447], text: '?' },
          { t: 'point', p: [-1.4544, 2.6239], label: 'A', dx: -6, dy: -11 },
          { t: 'point', p: [1.4544, 2.6239], label: 'B', dx: 6, dy: -11 },
          { t: 'point', p: [2.1941, -2.0460], label: 'C', dx: 10, dy: 9 },
          { t: 'point', p: [-1.9682, -2.2641], label: 'D', dx: -9, dy: 10 },
          { t: 'point', p: [0.0796, 0.6605], label: 'P', dx: -13, dy: -2 },
        ],
      },
      choices: ['$88^\\circ$', '$58^\\circ$', '$146^\\circ$', '$36.5^\\circ$'],
      answer: 0,
      solution:
        'Route one, one arc at a time: the inscribed angle at $C$ gives $\\overset{\\frown}{AB} = 2 \\times 29^\\circ = 58^\\circ$. An angle made where two chords cross inside is half the SUM of the two arcs it and its vertical partner cut off, so $73^\\circ = \\frac{58^\\circ + \\overset{\\frown}{CD}}{2}$ and $\\overset{\\frown}{CD} = 146^\\circ - 58^\\circ = 88^\\circ$ ✓. Check a second, independent way, with a triangle instead of the crossing rule: $A$, $P$, $C$ lie on one ribbon, so $\\angle BPC = 180^\\circ - 73^\\circ = 107^\\circ$. In triangle $PBC$ the angle at $C$ is the given $29^\\circ$, so $\\angle PBC = 180^\\circ - 107^\\circ - 29^\\circ = 44^\\circ$. That angle sits at $B$ on chord $BD$, so it is inscribed on arc $CD$ and $\\overset{\\frown}{CD} = 2 \\times 44^\\circ = 88^\\circ$ ✓. (The choice $58^\\circ$ is STOPPING AT ARC $AB$, the arc you built on the way ✗; the choice $146^\\circ$ is FORGETTING TO SUBTRACT ARC $AB$ after doubling $\\angle APB$ ✗; the choice $36.5^\\circ$ is HALVING $\\angle APB$ when the rule calls for doubling ✗.)',
    },
  ],

  // s7 — a tangent and a secant from the same outside point.
  [
    {
      q: 'A round reservoir is ringed by a fence. From a gate $P$ on the hillside outside it, one straight service road runs down and just grazes the fence at the single point $A$. A second straight road leaves the same gate $P$ and cuts right across the water, meeting the fence at $B$ on the near side and at $C$ on the far side. A footbridge is strung along the chord from $A$ to $C$. The two roads make an angle of $34^\\circ$ at the gate, and the far arc from $A$ to $C$ — the one that does not pass through $B$ — measures $140^\\circ$. How large is $\\angle ACB$, the angle the footbridge makes with the cross road at $C$?',
      fig: {
        view: [-4.6, -4.3, 7.7, 4.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [6.6425, 0.0], b: [-2.7584, -1.1794] },
          { t: 'seg', a: [6.6425, 0.0], b: [1.3549, 2.6766] },
          { t: 'seg', a: [1.3549, 2.6766], b: [-2.7584, -1.1794] },
          { t: 'point', p: [1.3549, 2.6766], label: 'A', dx: 6, dy: -12 },
          { t: 'point', p: [2.9643, -0.4615], label: 'B', dx: 13, dy: 2 },
          { t: 'point', p: [-2.7584, -1.1794], label: 'C', dx: -12, dy: 5 },
          { t: 'point', p: [6.6425, 0.0], label: 'P', dx: 13, dy: 0 },
          { t: 'label', p: [-2.6331, 2.8088], text: '140°' },
          { t: 'angle', at: [6.6425, 0.0], from: [1.3549, 2.6766], to: [-2.7584, -1.1794], r: 1.3, label: '34°' },
          { t: 'angle', at: [-2.7584, -1.1794], from: [1.3549, 2.6766], to: [6.6425, 0.0], r: 0.8, label: '?' },
        ],
      },
      choices: ['$72^\\circ$', '$36^\\circ$', '$70^\\circ$', '$34^\\circ$'],
      answer: 1,
      solution:
        'Route one, the outside rule: an angle formed outside a circle by a tangent and a secant is half the DIFFERENCE of the two arcs it catches, so $34^\\circ = \\frac{140^\\circ - \\overset{\\frown}{AB}}{2}$, giving $\\overset{\\frown}{AB} = 140^\\circ - 68^\\circ = 72^\\circ$. The angle at $C$ is inscribed on that near arc, so $\\angle ACB = \\frac{72^\\circ}{2} = 36^\\circ$ ✓. Check a second, independent way, using the triangle at the gate instead: the tangent road and the footbridge meet at $A$, and a tangent-chord angle is half the arc it closes off. The arc shut inside $\\angle PAC$ runs from $A$ the long way round through $B$ to $C$, which measures $360^\\circ - 140^\\circ = 220^\\circ$, so $\\angle PAC = 110^\\circ$. In triangle $PAC$ the three angles total $180^\\circ$, so the angle at $C$ is $180^\\circ - 34^\\circ - 110^\\circ = 36^\\circ$, and since $B$ sits on segment $PC$ that angle is exactly $\\angle ACB$ ✓. (The choice $72^\\circ$ is REPORTING THE ARC INSTEAD OF THE INSCRIBED ANGLE THAT SITS ON IT ✗; the choice $70^\\circ$ is HALVING THE FAR ARC, which belongs to an angle at $B$ rather than at $C$ ✗; the choice $34^\\circ$ is COPYING THE ANGLE AT THE GATE, as though the two were equal ✗.)',
    },
    {
      q: 'A circular hedge stands in a park, and a straight garden wall runs past it, touching it at exactly one spot. From the corner post $P$ where two paths begin, the first path runs along that wall and meets the hedge at the single point $A$. The second path leaves $P$ and is cut straight through the hedge, entering at $B$ and leaving at $C$. A trimmed line of stones joins $A$ to $C$. The paths make an angle of $31^\\circ$ at the post, and the arc from $A$ to $C$ that avoids $B$ measures $132^\\circ$. Find $\\angle ACB$.',
      fig: {
        view: [-4.6, -4.3, 7.9, 4.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [6.8016, 0.0], b: [-2.8862, -0.8182] },
          { t: 'seg', a: [6.8016, 0.0], b: [1.3232, 2.6924] },
          { t: 'seg', a: [1.3232, 2.6924], b: [-2.8862, -0.8182] },
          { t: 'point', p: [1.3232, 2.6924], label: 'A', dx: 6, dy: -12 },
          { t: 'point', p: [2.9826, -0.3225], label: 'B', dx: 13, dy: 1 },
          { t: 'point', p: [-2.8862, -0.8182], label: 'C', dx: -13, dy: 4 },
          { t: 'point', p: [6.8016, 0.0], label: 'P', dx: 13, dy: 0 },
          { t: 'label', p: [-2.4658, 2.9567], text: '132°' },
          { t: 'angle', at: [6.8016, 0.0], from: [1.3232, 2.6924], to: [-2.8862, -0.8182], r: 1.3, label: '31°' },
          { t: 'angle', at: [-2.8862, -0.8182], from: [1.3232, 2.6924], to: [6.8016, 0.0], r: 0.8, label: '?' },
        ],
      },
      choices: ['$66^\\circ$', '$31^\\circ$', '$35^\\circ$', '$70^\\circ$'],
      answer: 2,
      solution:
        'Route one, the outside rule: a tangent and a secant meeting outside the circle make an angle equal to half the difference of the intercepted arcs, so $31^\\circ = \\frac{132^\\circ - \\overset{\\frown}{AB}}{2}$ and $\\overset{\\frown}{AB} = 132^\\circ - 62^\\circ = 70^\\circ$. The angle at $C$ is inscribed on arc $AB$, so $\\angle ACB = 35^\\circ$ ✓. Check a second, independent way, through the triangle: the wall is tangent at $A$, so the tangent-chord angle $\\angle PAC$ is half the arc enclosed inside it, namely the arc running from $A$ through $B$ to $C$, worth $360^\\circ - 132^\\circ = 228^\\circ$; that makes $\\angle PAC = 114^\\circ$. Triangle $PAC$ then leaves $180^\\circ - 31^\\circ - 114^\\circ = 35^\\circ$ at $C$, which is $\\angle ACB$ because $B$ lies on segment $PC$ ✓. (The choice $66^\\circ$ is HALVING THE FAR ARC, a value that belongs to a corner on the near arc and not to $C$ ✗; the choice $31^\\circ$ is COPYING THE ANGLE AT THE POST ✗; the choice $70^\\circ$ is STOPPING AT ARC $AB$ AND FORGETTING TO HALVE IT ✗.)',
    },
    {
      q: 'A round fish pond has a straight jetty that runs out from the bank and touches the rim at one point $A$. From the boathouse door $P$, the jetty lies along one straight line of sight; a taut rope from the same door is stretched clear across the pond and crosses the rim at $B$ and again at $C$. A second rope runs directly from $A$ to $C$. The jetty and the first rope make an angle of $42^\\circ$ at the door, and the arc from $A$ to $C$ on the side away from $B$ measures $150^\\circ$. What is $\\angle ACB$?',
      fig: {
        view: [-4.6, -4.3, 6.7, 4.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [5.5903, 0.0], b: [-2.66, -1.3873] },
          { t: 'seg', a: [5.5903, 0.0], b: [1.6099, 2.5314] },
          { t: 'seg', a: [1.6099, 2.5314], b: [-2.66, -1.3873] },
          { t: 'point', p: [1.6099, 2.5314], label: 'A', dx: 7, dy: -11 },
          { t: 'point', p: [2.9674, -0.4411], label: 'B', dx: 13, dy: 2 },
          { t: 'point', p: [-2.66, -1.3873], label: 'C', dx: -12, dy: 6 },
          { t: 'point', p: [5.5903, 0.0], label: 'P', dx: 13, dy: 0 },
          { t: 'label', p: [-2.6032, 2.8365], text: '150°' },
          { t: 'angle', at: [5.5903, 0.0], from: [1.6099, 2.5314], to: [-2.66, -1.3873], r: 1.2, label: '42°' },
          { t: 'angle', at: [-2.66, -1.3873], from: [1.6099, 2.5314], to: [5.5903, 0.0], r: 0.8, label: '?' },
        ],
      },
      choices: ['$33^\\circ$', '$66^\\circ$', '$75^\\circ$', '$42^\\circ$'],
      answer: 0,
      solution:
        'Route one, the outside rule: the angle at the door is half the difference of the two arcs the jetty and the rope cut off, so $42^\\circ = \\frac{150^\\circ - \\overset{\\frown}{AB}}{2}$, which gives $\\overset{\\frown}{AB} = 150^\\circ - 84^\\circ = 66^\\circ$. The corner at $C$ is an inscribed angle standing on that arc, so $\\angle ACB = \\frac{66^\\circ}{2} = 33^\\circ$ ✓. Check a second, independent way, with the triangle formed by the two ropes and the jetty: the jetty touches the rim at $A$, and the angle between a tangent and a chord equals half the arc closed inside it. Inside $\\angle PAC$ lies the arc that travels from $A$ through $B$ to $C$, measuring $360^\\circ - 150^\\circ = 210^\\circ$, so $\\angle PAC = 105^\\circ$. Triangle $PAC$ leaves $180^\\circ - 42^\\circ - 105^\\circ = 33^\\circ$ at $C$, and that is $\\angle ACB$ since $B$ lies between $P$ and $C$ ✓. (The choice $66^\\circ$ is GIVING ARC $AB$ ITSELF RATHER THAN THE ANGLE INSCRIBED ON IT ✗; the choice $75^\\circ$ is HALVING THE FAR ARC INSTEAD OF THE NEAR ONE ✗; the choice $42^\\circ$ is REUSING THE ANGLE AT THE DOOR ✗.)',
    },
  ],

  // s8 — a diagonal splits one corner of a cyclic quadrilateral.
  [
    {
      q: 'Four ice-fishing holes $A$, $B$, $C$ and $D$ are cut around the edge of a perfectly circular patch of clear ice, in that order around the ring. Ropes are laid along $AB$, $BC$, $CD$ and $DA$, and one more rope is stretched from $D$ straight across to $B$. That crossing rope splits the corner at $D$ into two parts: $\\angle ADB = 28^\\circ$ and $\\angle BDC = 39^\\circ$. How large is the corner at $B$, that is, $\\angle ABC$?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.2981, 1.9284], b: [0.3136, 2.9836] },
          { t: 'seg', a: [0.3136, 2.9836], b: [2.9836, 0.3136] },
          { t: 'seg', a: [2.9836, 0.3136], b: [-1.1238, -2.7816] },
          { t: 'seg', a: [-1.1238, -2.7816], b: [-2.2981, 1.9284] },
          { t: 'seg', a: [-1.1238, -2.7816], b: [0.3136, 2.9836] },
          { t: 'point', p: [-2.2981, 1.9284], label: 'A', dx: -10, dy: -8 },
          { t: 'point', p: [0.3136, 2.9836], label: 'B', dx: 1, dy: -13 },
          { t: 'point', p: [2.9836, 0.3136], label: 'C', dx: 13, dy: -1 },
          { t: 'point', p: [-1.1238, -2.7816], label: 'D', dx: -5, dy: 12 },
          { t: 'angle', at: [-1.1238, -2.7816], from: [-2.2981, 1.9284], to: [0.3136, 2.9836], r: 0.8, label: '28°' },
          { t: 'angle', at: [-1.1238, -2.7816], from: [0.3136, 2.9836], to: [2.9836, 0.3136], r: 1.15, label: '39°' },
          { t: 'angle', at: [0.3136, 2.9836], from: [-2.2981, 1.9284], to: [2.9836, 0.3136], r: 0.5, label: '?' },
        ],
      },
      choices: ['$67^\\circ$', '$113^\\circ$', '$152^\\circ$', '$141^\\circ$'],
      answer: 1,
      solution:
        'Route one, glue the corner back together: the crossing rope divides $\\angle ADC$ into the two given pieces, so $\\angle ADC = 28^\\circ + 39^\\circ = 67^\\circ$. In a quadrilateral whose four corners lie on one circle, opposite corners add to $180^\\circ$, and $\\angle ABC$ is opposite $\\angle ADC$, so $\\angle ABC = 180^\\circ - 67^\\circ = 113^\\circ$ ✓. Check a second, independent way, by arcs alone: $\\angle ADB$ is inscribed on arc $AB$, so that arc is $2 \\times 28^\\circ = 56^\\circ$, and $\\angle BDC$ is inscribed on arc $BC$, so that arc is $2 \\times 39^\\circ = 78^\\circ$. The corner at $B$ stands on the whole rest of the circle, the arc from $C$ through $D$ back to $A$, which is $360^\\circ - 56^\\circ - 78^\\circ = 226^\\circ$; half of that is $113^\\circ$ ✓. (The choice $67^\\circ$ is ANSWERING WITH THE CORNER AT $D$ INSTEAD OF ITS OPPOSITE PARTNER ✗; the choice $152^\\circ$ is SUBTRACTING ONLY THE $28^\\circ$ PIECE FROM $180^\\circ$ ✗; the choice $141^\\circ$ is SUBTRACTING ONLY THE $39^\\circ$ PIECE FROM $180^\\circ$ ✗.)',
    },
    {
      q: 'On a planetarium chart, four bright stars $A$, $B$, $C$ and $D$ happen to lie on one circle, in that order going around it. The chart draws the outline $ABCD$ and adds a guide line from $D$ to $B$. The guide line cuts the angle at $D$ into $\\angle ADB = 45^\\circ$ and $\\angle BDC = 36^\\circ$. Find $\\angle ABC$, the angle of the outline at star $B$.',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.4575, 1.7207], b: [1.7207, 2.4575] },
          { t: 'seg', a: [1.7207, 2.4575], b: [2.8689, -0.8771] },
          { t: 'seg', a: [2.8689, -0.8771], b: [-1.6339, -2.516] },
          { t: 'seg', a: [-1.6339, -2.516], b: [-2.4575, 1.7207] },
          { t: 'seg', a: [-1.6339, -2.516], b: [1.7207, 2.4575] },
          { t: 'point', p: [-2.4575, 1.7207], label: 'A', dx: -11, dy: -7 },
          { t: 'point', p: [1.7207, 2.4575], label: 'B', dx: 7, dy: -11 },
          { t: 'point', p: [2.8689, -0.8771], label: 'C', dx: 12, dy: 4 },
          { t: 'point', p: [-1.6339, -2.516], label: 'D', dx: -7, dy: 11 },
          { t: 'angle', at: [-1.6339, -2.516], from: [-2.4575, 1.7207], to: [1.7207, 2.4575], r: 0.8, label: '45°' },
          { t: 'angle', at: [-1.6339, -2.516], from: [1.7207, 2.4575], to: [2.8689, -0.8771], r: 1.15, label: '36°' },
          { t: 'angle', at: [1.7207, 2.4575], from: [-2.4575, 1.7207], to: [2.8689, -0.8771], r: 0.5, label: '?' },
        ],
      },
      choices: ['$81^\\circ$', '$135^\\circ$', '$144^\\circ$', '$99^\\circ$'],
      answer: 3,
      solution:
        'Route one, rebuild the split corner: the guide line makes $\\angle ADC = 45^\\circ + 36^\\circ = 81^\\circ$. All four stars sit on one circle, so opposite angles of the outline are supplementary, giving $\\angle ABC = 180^\\circ - 81^\\circ = 99^\\circ$ ✓. Check a second, independent way, working only with arcs: the $45^\\circ$ piece is inscribed on arc $AB$, so that arc measures $90^\\circ$, and the $36^\\circ$ piece is inscribed on arc $BC$, so that arc measures $72^\\circ$. The angle at $B$ is inscribed on everything left over, the arc from $C$ past $D$ to $A$, worth $360^\\circ - 90^\\circ - 72^\\circ = 198^\\circ$, and half of that is $99^\\circ$ ✓. (The choice $81^\\circ$ is REPORTING THE REBUILT ANGLE AT $D$ AND FORGETTING THE SUPPLEMENT ✗; the choice $135^\\circ$ is TAKING $180^\\circ$ MINUS THE $45^\\circ$ PIECE ALONE ✗; the choice $144^\\circ$ is TAKING $180^\\circ$ MINUS THE $36^\\circ$ PIECE ALONE ✗.)',
    },
    {
      q: 'A carillon frame holds four bells at the points $A$, $B$, $C$ and $D$ of a circular hoop, spaced in that order around it. Cables run along $AB$, $BC$, $CD$ and $DA$, and a tuning wire is strung from $D$ to $B$. The tuning wire divides the angle at $D$ into $\\angle ADB = 52^\\circ$ and $\\angle BDC = 30^\\circ$. What is $\\angle ABC$?',
      fig: {
        view: [-4.7, -4.7, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.5981, 1.5], b: [2.084, 2.158] },
          { t: 'seg', a: [2.084, 2.158], b: [2.9109, -0.7258] },
          { t: 'seg', a: [2.9109, -0.7258], b: [-1.2202, -2.7406] },
          { t: 'seg', a: [-1.2202, -2.7406], b: [-2.5981, 1.5] },
          { t: 'seg', a: [-1.2202, -2.7406], b: [2.084, 2.158] },
          { t: 'point', p: [-2.5981, 1.5], label: 'A', dx: -11, dy: -6 },
          { t: 'point', p: [2.084, 2.158], label: 'B', dx: 9, dy: -9 },
          { t: 'point', p: [2.9109, -0.7258], label: 'C', dx: 13, dy: 3 },
          { t: 'point', p: [-1.2202, -2.7406], label: 'D', dx: -5, dy: 12 },
          { t: 'angle', at: [-1.2202, -2.7406], from: [-2.5981, 1.5], to: [2.084, 2.158], r: 0.8, label: '52°' },
          { t: 'angle', at: [-1.2202, -2.7406], from: [2.084, 2.158], to: [2.9109, -0.7258], r: 1.15, label: '30°' },
          { t: 'angle', at: [2.084, 2.158], from: [-2.5981, 1.5], to: [2.9109, -0.7258], r: 0.5, label: '?' },
        ],
      },
      choices: ['$98^\\circ$', '$82^\\circ$', '$128^\\circ$', '$150^\\circ$'],
      answer: 0,
      solution:
        'Route one, put the two pieces together: the tuning wire splits the corner at $D$, so $\\angle ADC = 52^\\circ + 30^\\circ = 82^\\circ$. The four bells lie on a single hoop, so $\\angle ABC$ and $\\angle ADC$ are opposite corners of a cyclic quadrilateral and add to $180^\\circ$; that makes $\\angle ABC = 180^\\circ - 82^\\circ = 98^\\circ$ ✓. Check a second, independent way, from the arcs: $\\angle ADB = 52^\\circ$ is inscribed on arc $AB$, so that arc is $104^\\circ$, and $\\angle BDC = 30^\\circ$ is inscribed on arc $BC$, so that arc is $60^\\circ$. The corner at $B$ looks across the remaining arc from $C$ through $D$ to $A$, which measures $360^\\circ - 104^\\circ - 60^\\circ = 196^\\circ$; half of it is $98^\\circ$ ✓. (The choice $82^\\circ$ is HANDING BACK THE ANGLE AT $D$ RATHER THAN ITS OPPOSITE ✗; the choice $128^\\circ$ is USING $180^\\circ$ MINUS THE $52^\\circ$ PIECE BY ITSELF ✗; the choice $150^\\circ$ is USING $180^\\circ$ MINUS THE $30^\\circ$ PIECE BY ITSELF ✗.)',
    },
  ],

  // s9 — two tangents from one outside point, plus a corner on the far arc.
  [
    {
      q: 'A circular sheep pen is enclosed by a ring fence. From a gatepost $P$ standing outside the ring, two straight rails run out and each just touches the ring fence at a single point, one at $A$ and one at $B$. The rails meet at the gatepost at an angle of $36^\\circ$. A watchdog sits at a point $C$ on the far side of the ring — on the longer of the two arcs joining $A$ and $B$ — and looks at both touching points at once. What is $\\angle ACB$?',
      fig: {
        view: [-3.7, -3.6, 9.2, 3.6],
        elems: [
          { t: 'circle', c: [0, 0], r: 2.5 },
          { t: 'seg', a: [8.0902, 0.0], b: [0.7725, 2.3776] },
          { t: 'seg', a: [8.0902, 0.0], b: [0.7725, -2.3776] },
          { t: 'seg', a: [-2.5, 0.0], b: [0.7725, 2.3776] },
          { t: 'seg', a: [-2.5, 0.0], b: [0.7725, -2.3776] },
          { t: 'point', p: [0.7725, 2.3776], label: 'A', dx: 4, dy: -12 },
          { t: 'point', p: [0.7725, -2.3776], label: 'B', dx: 4, dy: 12 },
          { t: 'point', p: [-2.5, 0.0], label: 'C', dx: -13, dy: 0 },
          { t: 'point', p: [8.0902, 0.0], label: 'P', dx: 13, dy: 0 },
          { t: 'angle', at: [8.0902, 0.0], from: [0.7725, 2.3776], to: [0.7725, -2.3776], r: 1.2, label: '36°' },
          { t: 'angle', at: [-2.5, 0.0], from: [0.7725, 2.3776], to: [0.7725, -2.3776], r: 0.7, label: '?' },
        ],
      },
      choices: ['$144^\\circ$', '$36^\\circ$', '$72^\\circ$', '$108^\\circ$'],
      answer: 2,
      solution:
        'Route one, through the center $O$: a rail that touches a circle is square to the radius drawn to the touching point, so the four-sided figure $OAPB$ has right angles at $A$ and at $B$. Its four angles add to $360^\\circ$, which leaves $\\angle AOB = 360^\\circ - 90^\\circ - 90^\\circ - 36^\\circ = 144^\\circ$. A central angle equals its arc, so the near arc $AB$ measures $144^\\circ$, and the watchdog at $C$ sees it as an inscribed angle: $\\angle ACB = \\frac{144^\\circ}{2} = 72^\\circ$ ✓. Check a second, independent way, without ever mentioning the center: the two touching rails from one outside post are equal in length, so triangle $PAB$ is isosceles and its two base angles are $\\frac{180^\\circ - 36^\\circ}{2} = 72^\\circ$ each. In particular $\\angle PAB = 72^\\circ$, and the angle between a tangent and a chord equals the inscribed angle standing on that chord from the far arc, so $\\angle ACB = 72^\\circ$ ✓. (The choice $144^\\circ$ is HANDING BACK THE ARC INSTEAD OF THE INSCRIBED ANGLE ✗; the choice $36^\\circ$ is COPYING THE ANGLE AT THE GATEPOST ✗; the choice $108^\\circ$ is PLACING THE WATCHDOG ON THE NEAR ARC, which gives the supplement ✗.)',
    },
    {
      q: 'A round hay bale is wrapped with a band. From a post $P$ driven into the ground beside it, two ropes are pulled tight; each rope runs straight and grazes the band at exactly one point, the first at $A$ and the second at $B$. The ropes make an angle of $58^\\circ$ where they meet at the post. A tag is stapled to the band at a point $C$ on the major arc $AB$, the long way round from $A$ to $B$. Find $\\angle ACB$.',
      fig: {
        view: [-4.2, -4.2, 7.3, 4.2],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [6.188, 0.0], b: [1.4544, 2.6239] },
          { t: 'seg', a: [6.188, 0.0], b: [1.4544, -2.6239] },
          { t: 'seg', a: [-3.0, 0.0], b: [1.4544, 2.6239] },
          { t: 'seg', a: [-3.0, 0.0], b: [1.4544, -2.6239] },
          { t: 'point', p: [1.4544, 2.6239], label: 'A', dx: 6, dy: -11 },
          { t: 'point', p: [1.4544, -2.6239], label: 'B', dx: 6, dy: 11 },
          { t: 'point', p: [-3.0, 0.0], label: 'C', dx: -13, dy: 0 },
          { t: 'point', p: [6.188, 0.0], label: 'P', dx: 13, dy: 0 },
          { t: 'angle', at: [6.188, 0.0], from: [1.4544, 2.6239], to: [1.4544, -2.6239], r: 1.2, label: '58°' },
          { t: 'angle', at: [-3.0, 0.0], from: [1.4544, 2.6239], to: [1.4544, -2.6239], r: 0.7, label: '?' },
        ],
      },
      choices: ['$61^\\circ$', '$122^\\circ$', '$58^\\circ$', '$119^\\circ$'],
      answer: 0,
      solution:
        'Route one, through the center $O$: each rope meets the radius at its grazing point at a right angle, so in the four-sided figure $OAPB$ the angles at $A$ and $B$ are $90^\\circ$ apiece. Then $\\angle AOB = 360^\\circ - 90^\\circ - 90^\\circ - 58^\\circ = 122^\\circ$, and that central angle is the measure of the minor arc $AB$. The tag sits on the other arc, so it sees the minor arc as an inscribed angle: $\\angle ACB = \\frac{122^\\circ}{2} = 61^\\circ$ ✓. Check a second, independent way, using only the ropes: the two tangent ropes from a single post are the same length, so triangle $PAB$ is isosceles with base angles $\\frac{180^\\circ - 58^\\circ}{2} = 61^\\circ$. The base angle $\\angle PAB$ is a tangent-chord angle on chord $AB$, and such an angle matches the inscribed angle drawn from the far arc, so $\\angle ACB = 61^\\circ$ ✓. (The choice $122^\\circ$ is STOPPING AT THE ARC WITHOUT HALVING IT ✗; the choice $58^\\circ$ is REUSING THE ANGLE AT THE POST ✗; the choice $119^\\circ$ is READING $C$ AS A POINT ON THE MINOR ARC, which gives the supplement ✗.)',
    },
    {
      q: 'A circular fountain basin sits in a plaza. From a loading pad $P$ at the edge of the plaza, two straight ramps are laid so that each one touches the rim of the basin at a single point, one at $A$ and the other at $B$. At the pad the ramps make an angle of $68^\\circ$. A tile marked $C$ lies on the rim on the major arc between $A$ and $B$. How big is $\\angle ACB$?',
      fig: {
        view: [-4.2, -4.2, 6.5, 4.2],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [5.3649, 0.0], b: [1.6776, 2.4871] },
          { t: 'seg', a: [5.3649, 0.0], b: [1.6776, -2.4871] },
          { t: 'seg', a: [-3.0, 0.0], b: [1.6776, 2.4871] },
          { t: 'seg', a: [-3.0, 0.0], b: [1.6776, -2.4871] },
          { t: 'point', p: [1.6776, 2.4871], label: 'A', dx: 7, dy: -11 },
          { t: 'point', p: [1.6776, -2.4871], label: 'B', dx: 7, dy: 11 },
          { t: 'point', p: [-3.0, 0.0], label: 'C', dx: -13, dy: 0 },
          { t: 'point', p: [5.3649, 0.0], label: 'P', dx: 13, dy: 0 },
          { t: 'angle', at: [5.3649, 0.0], from: [1.6776, 2.4871], to: [1.6776, -2.4871], r: 1.2, label: '68°' },
          { t: 'angle', at: [-3.0, 0.0], from: [1.6776, 2.4871], to: [1.6776, -2.4871], r: 0.7, label: '?' },
        ],
      },
      choices: ['$112^\\circ$', '$68^\\circ$', '$124^\\circ$', '$56^\\circ$'],
      answer: 3,
      solution:
        'Route one, through the center $O$: a ramp that touches the rim is perpendicular to the radius at its touching point, so $OAPB$ has right angles at $A$ and $B$ and its angles sum to $360^\\circ$. That gives $\\angle AOB = 360^\\circ - 90^\\circ - 90^\\circ - 68^\\circ = 112^\\circ$, which is the measure of the minor arc $AB$. The tile at $C$ lies on the major arc, so it looks across the minor arc and $\\angle ACB = \\frac{112^\\circ}{2} = 56^\\circ$ ✓. Check a second, independent way, with no center at all: the two touching ramps from one pad have equal lengths, making triangle $PAB$ isosceles with base angles $\\frac{180^\\circ - 68^\\circ}{2} = 56^\\circ$. That base angle $\\angle PAB$ lies between a tangent and the chord $AB$, and a tangent-chord angle equals the inscribed angle on the same chord taken from the far arc, so $\\angle ACB = 56^\\circ$ ✓. (The choice $112^\\circ$ is GIVING THE ARC RATHER THAN HALF OF IT ✗; the choice $68^\\circ$ is COPYING THE ANGLE AT THE PAD ✗; the choice $124^\\circ$ is PUTTING THE TILE ON THE MINOR ARC AND GETTING THE SUPPLEMENT ✗.)',
    },
  ],

  // s10 — a diameter and two chords crossing above it.
  [
    {
      q: 'A circular window has a straight glazing bar running right across it through the center, from $A$ on the left edge to $B$ on the right. Two more points sit on the upper half of the rim: $D$ first, then $C$ closer to $B$. A wire is strung from $A$ to $C$ and another from $B$ to $D$, and the two wires cross at $P$. The arc from $A$ up to $D$ measures $44^\\circ$ and the arc from $D$ across to $C$ measures $68^\\circ$. Find $\\angle APB$, the angle the wires make at their crossing on the side facing the glazing bar.',
      fig: {
        view: [-4.7, -4.4, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3.0, 0.0], b: [3.0, 0.0] },
          { t: 'seg', a: [-3.0, 0.0], b: [1.1238, 2.7816] },
          { t: 'seg', a: [3.0, 0.0], b: [-2.158, 2.084] },
          { t: 'point', p: [-3.0, 0.0], label: 'A', dx: -13, dy: 0 },
          { t: 'point', p: [3.0, 0.0], label: 'B', dx: 13, dy: 0 },
          { t: 'point', p: [1.1238, 2.7816], label: 'C', dx: 5, dy: -12 },
          { t: 'point', p: [-2.158, 2.084], label: 'D', dx: -9, dy: -9 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-0.7524, 1.5161], label: 'P', dx: -13, dy: -2 },
          { t: 'label', p: [-3.5697, 1.4422], text: '44°' },
          { t: 'label', p: [-0.8005, 3.7659], text: '68°' },
          { t: 'angle', at: [-0.7524, 1.5161], from: [-3.0, 0.0], to: [3.0, 0.0], r: 0.55, label: '?' },
        ],
      },
      choices: ['$56^\\circ$', '$124^\\circ$', '$34^\\circ$', '$68^\\circ$'],
      answer: 1,
      solution:
        'Route one, the crossing rule: two chords that meet inside a circle make an angle equal to half the SUM of the arc it faces and the arc its vertical partner faces. Here $\\angle APB$ faces arc $AB$ along the bottom, and since $AB$ is a diameter that arc is $180^\\circ$; the vertical angle faces arc $DC$, which is $68^\\circ$. So $\\angle APB = \\frac{180^\\circ + 68^\\circ}{2} = 124^\\circ$ ✓. Check a second, independent way, with triangle $APB$: the upper half of the rim splits into $\\overset{\\frown}{AD} = 44^\\circ$, $\\overset{\\frown}{DC} = 68^\\circ$ and the rest, $\\overset{\\frown}{CB} = 180^\\circ - 44^\\circ - 68^\\circ = 68^\\circ$. The angle at $A$ inside the triangle is inscribed on arc $CB$, so it is $34^\\circ$, and the angle at $B$ is inscribed on arc $AD$, so it is $22^\\circ$. The angle sum then gives $\\angle APB = 180^\\circ - 34^\\circ - 22^\\circ = 124^\\circ$ ✓. (The choice $56^\\circ$ is THE VERTICAL PARTNER $\\angle DPC$ RATHER THAN THE ANGLE ASKED FOR ✗; the choice $34^\\circ$ is HALVING ARC $DC$ ALONE ✗; the choice $68^\\circ$ is REPEATING ARC $DC$ ITSELF ✗.)',
    },
    {
      q: 'A pizza is cut along one straight line through the middle of a round pan, from the rim point $A$ to the opposite rim point $B$. Two toothpicks are stuck in the rim on the upper half: $D$, and then $C$ nearer to $B$. A skewer is laid from $A$ to $C$ and a second skewer from $B$ to $D$, and the skewers cross at $P$. Going along the upper rim, the arc from $A$ to $D$ is $58^\\circ$ and the arc from $D$ to $C$ is $54^\\circ$. What is $\\angle APB$?',
      fig: {
        view: [-4.7, -4.4, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3.0, 0.0], b: [3.0, 0.0] },
          { t: 'seg', a: [-3.0, 0.0], b: [1.1238, 2.7816] },
          { t: 'seg', a: [3.0, 0.0], b: [-1.5898, 2.5441] },
          { t: 'point', p: [-3.0, 0.0], label: 'A', dx: -13, dy: 0 },
          { t: 'point', p: [3.0, 0.0], label: 'B', dx: 13, dy: 0 },
          { t: 'point', p: [1.1238, 2.7816], label: 'C', dx: 5, dy: -12 },
          { t: 'point', p: [-1.5898, 2.5441], label: 'D', dx: -7, dy: -11 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-0.2935, 1.8256], label: 'P', dx: -13, dy: -2 },
          { t: 'label', p: [-3.3673, 1.8665], text: '58°' },
          { t: 'label', p: [-0.3355, 3.8353], text: '54°' },
          { t: 'angle', at: [-0.2935, 1.8256], from: [-3.0, 0.0], to: [3.0, 0.0], r: 0.55, label: '?' },
        ],
      },
      choices: ['$63^\\circ$', '$27^\\circ$', '$117^\\circ$', '$90^\\circ$'],
      answer: 2,
      solution:
        'Route one, the crossing rule: an angle made where two chords meet inside a circle is half the sum of the two arcs cut off by that angle and by its vertical partner. The angle $\\angle APB$ looks down on arc $AB$, which is a full half of the pan at $180^\\circ$, while its partner looks up at arc $DC = 54^\\circ$. Therefore $\\angle APB = \\frac{180^\\circ + 54^\\circ}{2} = 117^\\circ$ ✓. Check a second, independent way, by filling in triangle $APB$: the upper rim divides into $58^\\circ$, $54^\\circ$ and $\\overset{\\frown}{CB} = 180^\\circ - 58^\\circ - 54^\\circ = 68^\\circ$. The corner at $A$ is inscribed on arc $CB$, giving $34^\\circ$, and the corner at $B$ is inscribed on arc $AD$, giving $29^\\circ$. Then $\\angle APB = 180^\\circ - 34^\\circ - 29^\\circ = 117^\\circ$ ✓. (The choice $63^\\circ$ is THE VERTICAL ANGLE $\\angle DPC$ INSTEAD OF THE ONE ASKED FOR ✗; the choice $27^\\circ$ is HALVING ARC $DC$ AND STOPPING ✗; the choice $90^\\circ$ is HALVING THE $180^\\circ$ ARC ONLY, dropping arc $DC$ from the sum ✗.)',
    },
    {
      q: 'A chalk ring is drawn on a playground, with a straight tape laid through the middle from $A$ on one side to $B$ on the other. Two chalk crosses are added on the upper part of the ring: $D$, and then $C$ further along toward $B$. One tape is stretched from $A$ to $C$ and another from $B$ to $D$; they cross at $P$. The arc from $A$ to $D$ measures $40^\\circ$ and the arc from $D$ to $C$ measures $86^\\circ$. Find $\\angle APB$.',
      fig: {
        view: [-4.7, -4.4, 4.7, 4.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3.0, 0.0], b: [3.0, 0.0] },
          { t: 'seg', a: [-3.0, 0.0], b: [1.7634, 2.4271] },
          { t: 'seg', a: [3.0, 0.0], b: [-2.2981, 1.9284] },
          { t: 'point', p: [-3.0, 0.0], label: 'A', dx: -13, dy: 0 },
          { t: 'point', p: [3.0, 0.0], label: 'B', dx: 13, dy: 0 },
          { t: 'point', p: [1.7634, 2.4271], label: 'C', dx: 8, dy: -11 },
          { t: 'point', p: [-2.2981, 1.9284], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-0.4999, 1.2739], label: 'P', dx: -13, dy: -2 },
          { t: 'label', p: [-3.6178, 1.3168], text: '40°' },
          { t: 'label', p: [-0.4692, 3.8213], text: '86°' },
          { t: 'angle', at: [-0.4999, 1.2739], from: [-3.0, 0.0], to: [3.0, 0.0], r: 0.55, label: '?' },
        ],
      },
      choices: ['$133^\\circ$', '$47^\\circ$', '$43^\\circ$', '$90^\\circ$'],
      answer: 0,
      solution:
        'Route one, the crossing rule: where two chords meet inside a circle, the angle equals half the sum of the arc it cuts off and the arc cut off by its vertical partner. The angle $\\angle APB$ cuts off arc $AB$ below, and $AB$ is a diameter so that arc is $180^\\circ$; the partner cuts off arc $DC = 86^\\circ$. Hence $\\angle APB = \\frac{180^\\circ + 86^\\circ}{2} = 133^\\circ$ ✓. Check a second, independent way, from the triangle $APB$: the upper half of the ring is $40^\\circ + 86^\\circ + \\overset{\\frown}{CB}$, so $\\overset{\\frown}{CB} = 180^\\circ - 40^\\circ - 86^\\circ = 54^\\circ$. The angle at $A$ stands on arc $CB$ and equals $27^\\circ$; the angle at $B$ stands on arc $AD$ and equals $20^\\circ$. The angle sum leaves $\\angle APB = 180^\\circ - 27^\\circ - 20^\\circ = 133^\\circ$ ✓. (The choice $47^\\circ$ is THE VERTICAL PARTNER $\\angle DPC$ RATHER THAN $\\angle APB$ ✗; the choice $43^\\circ$ is HALVING ARC $DC$ BY ITSELF ✗; the choice $90^\\circ$ is USING ONLY HALF OF THE $180^\\circ$ ARC AND LEAVING OUT ARC $DC$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 12,
  sections: {
    '12.4': s124,
  },
}
