// Introduction to Geometry chapter 12 — variations for section 12.2 (Angles Inside and Outside Circles).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer was worked twice by routes that do not share steps:
//    the inside/outside arc rule forward, then an independent re-check through
//    the vertical-angle pair, an inscribed-angle triangle, or a plug-back.
//  - Every circle is drawn at radius 3 about the origin and each labeled point
//    sits at exactly (3 cos t, 3 sin t) for its own angle, so the drawn arcs
//    and the drawn vertex angle match their printed measures to well under a
//    degree. External points are placed on the true intersection of the two
//    drawn secants.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution.

const s122 = [
  // s1 — two chords crossing inside: the angle is half the sum of the two facing arcs.
  [
    {
      q: 'Two zip lines are strung across a circular lake and cross above the water at point $P$. One runs from post $A$ to post $C$, and the other runs from post $B$ to post $D$. Arc $AB$ measures $94^\\circ$ and arc $CD$ measures $52^\\circ$. What is $m\\angle APB$?',
      fig: {
        view: [-4.8, -4.8, 4.8, 4.8],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.1941, 2.046], b: [2.4871, -1.6776] },
          { t: 'seg', a: [2.1941, 2.046], b: [0.2093, -2.9927] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 43, to: 137 },
          { t: 'label', p: [0, 3.85], text: '94°' },
          { t: 'arc', c: [0, 0], r: 3.2, from: -86, to: -34 },
          { t: 'label', p: [1.925, -3.3342], text: '52°' },
          { t: 'angle', at: [1.1472, -0.6118], from: [-2.1941, 2.046], to: [2.1941, 2.046], r: 0.55, label: '?' },
          { t: 'point', p: [-2.1941, 2.046], label: 'A', dx: -10, dy: -9 },
          { t: 'point', p: [2.1941, 2.046], label: 'B', dx: 10, dy: -9 },
          { t: 'point', p: [2.4871, -1.6776], label: 'C', dx: 11, dy: 7 },
          { t: 'point', p: [0.2093, -2.9927], label: 'D', dx: 1, dy: 13 },
          { t: 'point', p: [1.1472, -0.6118], label: 'P', dx: -13, dy: 3 },
        ],
      },
      choices: ['$73^\\circ$', '$146^\\circ$', '$21^\\circ$', '$47^\\circ$'],
      answer: 0,
      solution:
        'Route one, the inside-angle rule: an angle made by two chords crossing inside a circle is half the sum of the arc it cuts off and the arc its vertical angle cuts off, so $m\\angle APB = \\tfrac{1}{2}(94^\\circ + 52^\\circ) = \\tfrac{1}{2}(146^\\circ) = 73^\\circ$ ✓. Check a second, independent way: the other pair of vertical angles at $P$ faces arcs $AD$ and $BC$, and those two arcs make up the rest of the circle, $360^\\circ - 94^\\circ - 52^\\circ = 214^\\circ$, so $m\\angle APD = \\tfrac{1}{2}(214^\\circ) = 107^\\circ$; since $\\angle APB$ and $\\angle APD$ together form a straight line, $m\\angle APB = 180^\\circ - 107^\\circ = 73^\\circ$ ✓. (The choice $146^\\circ$ is ADDING THE ARCS WITHOUT HALVING ✗; the choice $21^\\circ$ is TAKING HALF THE DIFFERENCE INSTEAD OF HALF THE SUM ✗; the choice $47^\\circ$ is HALVING ONLY ARC $AB$ and forgetting arc $CD$ entirely ✗.)',
    },
    {
      q: 'Two ribbons are stretched tight across a round drum head and cross at point $P$. One ribbon joins pin $A$ to pin $C$, and the other joins pin $B$ to pin $D$. Arc $AB$ measures $66^\\circ$ and arc $CD$ measures $38^\\circ$. Find $m\\angle APB$.',
      fig: {
        view: [-4.8, -4.8, 4.8, 4.8],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.6339, 2.516], b: [2.2641, -1.9682] },
          { t: 'seg', a: [1.6339, 2.516], b: [0.5724, -2.9449] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 57, to: 123 },
          { t: 'label', p: [0, 3.85], text: '66°' },
          { t: 'arc', c: [0, 0], r: 3.2, from: -79, to: -41 },
          { t: 'label', p: [1.925, -3.3342], text: '38°' },
          { t: 'angle', at: [1.0367, -0.5562], from: [-1.6339, 2.516], to: [1.6339, 2.516], r: 0.55, label: '?' },
          { t: 'point', p: [-1.6339, 2.516], label: 'A', dx: -7, dy: -11 },
          { t: 'point', p: [1.6339, 2.516], label: 'B', dx: 7, dy: -11 },
          { t: 'point', p: [2.2641, -1.9682], label: 'C', dx: 10, dy: 9 },
          { t: 'point', p: [0.5724, -2.9449], label: 'D', dx: 2, dy: 13 },
          { t: 'point', p: [1.0367, -0.5562], label: 'P', dx: -13, dy: 3 },
        ],
      },
      choices: ['$104^\\circ$', '$52^\\circ$', '$14^\\circ$', '$33^\\circ$'],
      answer: 1,
      solution:
        'Route one, the inside-angle rule: two chords crossing inside a circle make an angle equal to half the sum of the two arcs the pair of vertical angles cuts off, so $m\\angle APB = \\tfrac{1}{2}(66^\\circ + 38^\\circ) = \\tfrac{1}{2}(104^\\circ) = 52^\\circ$ ✓. Check a second, independent way: arcs $AD$ and $BC$ are everything left over, $360^\\circ - 66^\\circ - 38^\\circ = 256^\\circ$, so the neighboring angle is $m\\angle APD = \\tfrac{1}{2}(256^\\circ) = 128^\\circ$, and along the straight ribbon $m\\angle APB = 180^\\circ - 128^\\circ = 52^\\circ$ ✓. (The choice $104^\\circ$ is ADDING THE ARCS WITHOUT HALVING ✗; the choice $14^\\circ$ is TAKING HALF THE DIFFERENCE INSTEAD OF HALF THE SUM ✗; the choice $33^\\circ$ is HALVING ONLY ARC $AB$ and leaving arc $CD$ out ✗.)',
    },
    {
      q: 'Two straight gravel paths cut across a circular park and meet at a fountain $P$. One path runs from gate $A$ to gate $C$, and the other runs from gate $B$ to gate $D$. Arc $AB$ measures $120^\\circ$ and arc $CD$ measures $46^\\circ$. What is the measure of $\\angle APB$?',
      fig: {
        view: [-4.8, -4.8, 4.8, 4.8],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.5981, 1.5], b: [2.3959, -1.8054] },
          { t: 'seg', a: [2.5981, 1.5], b: [0.3656, -2.9776] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 30, to: 150 },
          { t: 'label', p: [0, 3.85], text: '120°' },
          { t: 'arc', c: [0, 0], r: 3.2, from: -83, to: -37 },
          { t: 'label', p: [1.925, -3.3342], text: '46°' },
          { t: 'angle', at: [1.3088, -1.0859], from: [-2.5981, 1.5], to: [2.5981, 1.5], r: 0.55, label: '?' },
          { t: 'point', p: [-2.5981, 1.5], label: 'A', dx: -11, dy: -6 },
          { t: 'point', p: [2.5981, 1.5], label: 'B', dx: 11, dy: -6 },
          { t: 'point', p: [2.3959, -1.8054], label: 'C', dx: 10, dy: 8 },
          { t: 'point', p: [0.3656, -2.9776], label: 'D', dx: 2, dy: 13 },
          { t: 'point', p: [1.3088, -1.0859], label: 'P', dx: -13, dy: 3 },
        ],
      },
      choices: ['$166^\\circ$', '$37^\\circ$', '$60^\\circ$', '$83^\\circ$'],
      answer: 3,
      solution:
        'Route one, the inside-angle rule: the angle where two chords cross is half the sum of the arc in front of it and the arc in front of its vertical angle, so $m\\angle APB = \\tfrac{1}{2}(120^\\circ + 46^\\circ) = \\tfrac{1}{2}(166^\\circ) = 83^\\circ$ ✓. Check a second, independent way: the other pair of vertical angles faces arcs $AD$ and $BC$, which total $360^\\circ - 120^\\circ - 46^\\circ = 194^\\circ$, giving $m\\angle APD = \\tfrac{1}{2}(194^\\circ) = 97^\\circ$; the two angles sit on one straight path, so $m\\angle APB = 180^\\circ - 97^\\circ = 83^\\circ$ ✓. (The choice $166^\\circ$ is ADDING THE ARCS WITHOUT HALVING ✗; the choice $37^\\circ$ is TAKING HALF THE DIFFERENCE INSTEAD OF HALF THE SUM ✗; the choice $60^\\circ$ is HALVING ONLY ARC $AB$ and ignoring arc $CD$ ✗.)',
    },
  ],

  // s2 — same crossing-chords picture, run backwards to the second arc.
  [
    {
      q: 'Two support cables are strung above a circular skating rink and cross over the ice at point $P$. One cable runs from anchor $A$ to anchor $C$, and the other runs from anchor $B$ to anchor $D$. The cables meet so that $m\\angle APB = 72^\\circ$, and arc $AB$ measures $44^\\circ$. What is the measure of arc $CD$?',
      fig: {
        view: [-4.8, -4.8, 4.8, 4.8],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.1238, 2.7816], b: [2.9544, -0.5209] },
          { t: 'seg', a: [1.1238, 2.7816], b: [-1.0261, -2.8191] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 68, to: 112 },
          { t: 'label', p: [0, 3.85], text: '44°' },
          { t: 'arc', c: [0, 0], r: 3.2, from: -110, to: -10 },
          { t: 'label', p: [1.925, -3.3342], text: '?' },
          { t: 'angle', at: [0.5908, 1.3931], from: [-1.1238, 2.7816], to: [1.1238, 2.7816], r: 0.55, label: '72' },
          { t: 'point', p: [-1.1238, 2.7816], label: 'A', dx: -5, dy: -12 },
          { t: 'point', p: [1.1238, 2.7816], label: 'B', dx: 5, dy: -12 },
          { t: 'point', p: [2.9544, -0.5209], label: 'C', dx: 13, dy: 2 },
          { t: 'point', p: [-1.0261, -2.8191], label: 'D', dx: -4, dy: 12 },
          { t: 'point', p: [0.5908, 1.3931], label: 'P', dx: -13, dy: 3 },
        ],
      },
      choices: ['$144^\\circ$', '$50^\\circ$', '$100^\\circ$', '$72^\\circ$'],
      answer: 2,
      solution:
        'Route one, the inside-angle rule read backwards: $m\\angle APB = \\tfrac{1}{2}(\\text{arc } AB + \\text{arc } CD)$, so the two arcs together measure $2 \\cdot 72^\\circ = 144^\\circ$, and arc $CD = 144^\\circ - 44^\\circ = 100^\\circ$ ✓. Check a second, independent way: the neighboring angle is $m\\angle APD = 180^\\circ - 72^\\circ = 108^\\circ$, so arcs $AD$ and $BC$ total $2 \\cdot 108^\\circ = 216^\\circ$; the remaining two arcs total $360^\\circ - 216^\\circ = 144^\\circ$, and subtracting arc $AB$ leaves arc $CD = 144^\\circ - 44^\\circ = 100^\\circ$ ✓. (The choice $144^\\circ$ is FORGETTING TO SUBTRACT ARC $AB$ after doubling the angle ✗; the choice $50^\\circ$ is HALVING ARC $AB$ INSTEAD OF DOUBLING THE ANGLE, computing $72^\\circ - 22^\\circ$ ✗; the choice $72^\\circ$ is MISTAKING THE ANGLE FOR THE ARC ✗.)',
    },
    {
      q: 'Two long seams run across a round quilt and cross at point $P$. One seam joins corner patch $A$ to corner patch $C$, and the other joins corner patch $B$ to corner patch $D$. The seams meet at $m\\angle APB = 58^\\circ$, and arc $AB$ measures $40^\\circ$. Find the measure of arc $CD$.',
      fig: {
        view: [-4.8, -4.8, 4.8, 4.8],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.0261, 2.8191], b: [2.7816, -1.1238] },
          { t: 'seg', a: [1.0261, 2.8191], b: [-0.4175, -2.9708] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 70, to: 110 },
          { t: 'label', p: [0, 3.85], text: '40°' },
          { t: 'arc', c: [0, 0], r: 3.2, from: -98, to: -22 },
          { t: 'label', p: [1.925, -3.3342], text: '?' },
          { t: 'angle', at: [0.605, 1.1301], from: [-1.0261, 2.8191], to: [1.0261, 2.8191], r: 0.55, label: '58' },
          { t: 'point', p: [-1.0261, 2.8191], label: 'A', dx: -4, dy: -12 },
          { t: 'point', p: [1.0261, 2.8191], label: 'B', dx: 4, dy: -12 },
          { t: 'point', p: [2.7816, -1.1238], label: 'C', dx: 12, dy: 5 },
          { t: 'point', p: [-0.4175, -2.9708], label: 'D', dx: -2, dy: 13 },
          { t: 'point', p: [0.605, 1.1301], label: 'P', dx: -13, dy: 3 },
        ],
      },
      choices: ['$116^\\circ$', '$38^\\circ$', '$58^\\circ$', '$76^\\circ$'],
      answer: 3,
      solution:
        'Route one, the inside-angle rule read backwards: the crossing angle is half the sum of arcs $AB$ and $CD$, so that sum is $2 \\cdot 58^\\circ = 116^\\circ$, which leaves arc $CD = 116^\\circ - 40^\\circ = 76^\\circ$ ✓. Check a second, independent way: the angle beside it is $m\\angle APD = 180^\\circ - 58^\\circ = 122^\\circ$, so arcs $AD$ and $BC$ total $2 \\cdot 122^\\circ = 244^\\circ$; the two arcs left over total $360^\\circ - 244^\\circ = 116^\\circ$, so arc $CD = 116^\\circ - 40^\\circ = 76^\\circ$ ✓. (The choice $116^\\circ$ is FORGETTING TO SUBTRACT ARC $AB$ after doubling the angle ✗; the choice $38^\\circ$ is HALVING ARC $AB$ INSTEAD OF DOUBLING THE ANGLE, computing $58^\\circ - 20^\\circ$ ✗; the choice $58^\\circ$ is MISTAKING THE ANGLE FOR THE ARC ✗.)',
    },
    {
      q: 'Two steel beams run beneath a circular skylight and cross at point $P$. One beam joins bracket $A$ to bracket $C$, and the other joins bracket $B$ to bracket $D$. The beams meet at $m\\angle APB = 81^\\circ$, and arc $AB$ measures $90^\\circ$. What is the measure of arc $CD$?',
      fig: {
        view: [-4.8, -4.8, 4.8, 4.8],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.1213, 2.1213], b: [2.7406, -1.2202] },
          { t: 'seg', a: [2.1213, 2.1213], b: [-0.3136, -2.9836] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 45, to: 135 },
          { t: 'label', p: [0, 3.85], text: '90°' },
          { t: 'arc', c: [0, 0], r: 3.2, from: -96, to: -24 },
          { t: 'label', p: [1.925, -3.3342], text: '?' },
          { t: 'angle', at: [1.0739, -0.0747], from: [-2.1213, 2.1213], to: [2.1213, 2.1213], r: 0.55, label: '81' },
          { t: 'point', p: [-2.1213, 2.1213], label: 'A', dx: -9, dy: -9 },
          { t: 'point', p: [2.1213, 2.1213], label: 'B', dx: 9, dy: -9 },
          { t: 'point', p: [2.7406, -1.2202], label: 'C', dx: 12, dy: 5 },
          { t: 'point', p: [-0.3136, -2.9836], label: 'D', dx: -1, dy: 13 },
          { t: 'point', p: [1.0739, -0.0747], label: 'P', dx: -13, dy: 3 },
        ],
      },
      choices: ['$162^\\circ$', '$72^\\circ$', '$36^\\circ$', '$81^\\circ$'],
      answer: 1,
      solution:
        'Route one, the inside-angle rule read backwards: arcs $AB$ and $CD$ together measure $2 \\cdot 81^\\circ = 162^\\circ$, so arc $CD = 162^\\circ - 90^\\circ = 72^\\circ$ ✓. Check a second, independent way: the angle next to it along the beam is $m\\angle APD = 180^\\circ - 81^\\circ = 99^\\circ$, so arcs $AD$ and $BC$ total $2 \\cdot 99^\\circ = 198^\\circ$; the rest of the circle is $360^\\circ - 198^\\circ = 162^\\circ$, and taking away arc $AB$ leaves arc $CD = 162^\\circ - 90^\\circ = 72^\\circ$ ✓. (The choice $162^\\circ$ is FORGETTING TO SUBTRACT ARC $AB$ after doubling the angle ✗; the choice $36^\\circ$ is HALVING ARC $AB$ INSTEAD OF DOUBLING THE ANGLE, computing $81^\\circ - 45^\\circ$ ✗; the choice $81^\\circ$ is MISTAKING THE ANGLE FOR THE ARC ✗.)',
    },
  ],

  // s3 — two secants from an outside point: half the difference of the far and near arcs.
  [
    {
      q: 'A surveyor stands at point $P$ on the bank outside a circular pond and sights two straight lines across it. The first line crosses the shore at $A$ and again at $B$; the second crosses at $C$ and again at $D$. The near arc $AC$ measures $44^\\circ$ and the far arc $BD$ measures $128^\\circ$. What is $m\\angle P$?',
      fig: {
        view: [-4.5, -4.3, 7.1092, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [5.7092, 0], b: [-1.3151, 2.6964] },
          { t: 'seg', a: [5.7092, 0], b: [-1.3151, -2.6964] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -22, to: 22 },
          { t: 'label', p: [3.55, 0], text: '44°', dx: 0, dy: 13 },
          { t: 'arc', c: [0, 0], r: 3.2, from: 116, to: 244 },
          { t: 'label', p: [-3.85, 0], text: '128°' },
          { t: 'angle', at: [5.7092, 0], from: [-1.3151, 2.6964], to: [-1.3151, -2.6964], r: 1.2, label: '?' },
          { t: 'point', p: [2.7816, 1.1238], label: 'A', dx: 12, dy: -5 },
          { t: 'point', p: [-1.3151, 2.6964], label: 'B', dx: -6, dy: -12 },
          { t: 'point', p: [2.7816, -1.1238], label: 'C', dx: 12, dy: 5 },
          { t: 'point', p: [-1.3151, -2.6964], label: 'D', dx: -6, dy: 12 },
          { t: 'point', p: [5.7092, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$86^\\circ$', '$84^\\circ$', '$64^\\circ$', '$42^\\circ$'],
      answer: 3,
      solution:
        'Route one, the outside-angle rule: two secants drawn from a point outside a circle make an angle equal to half the difference of the far arc and the near arc, so $m\\angle P = \\tfrac{1}{2}(128^\\circ - 44^\\circ) = \\tfrac{1}{2}(84^\\circ) = 42^\\circ$ ✓. Check a second, independent way: draw chord $BC$. The inscribed angle $\\angle BCD$ sits on far arc $BD$, so it measures $\\tfrac{1}{2}(128^\\circ) = 64^\\circ$, and the inscribed angle $\\angle ABC$ sits on near arc $AC$, so it measures $\\tfrac{1}{2}(44^\\circ) = 22^\\circ$. In triangle $PBC$, $\\angle BCD$ is the exterior angle at $C$, so it equals the two remote interior angles added: $64^\\circ = m\\angle P + 22^\\circ$, giving $m\\angle P = 42^\\circ$ ✓. (The choice $86^\\circ$ is USING THE INSIDE RULE, half the sum, on a vertex that lies outside the circle ✗; the choice $84^\\circ$ is SUBTRACTING WITHOUT HALVING ✗; the choice $64^\\circ$ is IGNORING THE NEAR ARC and taking half the far arc alone ✗.)',
    },
    {
      q: 'From a bench at point $P$ outside a circular fountain, two flashlight beams are aimed across the water. One beam crosses the rim at $A$ and again at $B$; the other crosses at $C$ and again at $D$. Arc $AC$, the near arc between the beams, measures $36^\\circ$, and arc $BD$, the far arc, measures $118^\\circ$. Find $m\\angle P$.',
      fig: {
        view: [-4.5, -4.3, 6.7329, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [5.3329, 0], b: [-1.5451, 2.5715] },
          { t: 'seg', a: [5.3329, 0], b: [-1.5451, -2.5715] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -18, to: 18 },
          { t: 'label', p: [3.55, 0], text: '36°', dx: 0, dy: 13 },
          { t: 'arc', c: [0, 0], r: 3.2, from: 121, to: 239 },
          { t: 'label', p: [-3.85, 0], text: '118°' },
          { t: 'angle', at: [5.3329, 0], from: [-1.5451, 2.5715], to: [-1.5451, -2.5715], r: 1.1, label: '?' },
          { t: 'point', p: [2.8532, 0.9271], label: 'A', dx: 12, dy: -4 },
          { t: 'point', p: [-1.5451, 2.5715], label: 'B', dx: -7, dy: -11 },
          { t: 'point', p: [2.8532, -0.9271], label: 'C', dx: 12, dy: 4 },
          { t: 'point', p: [-1.5451, -2.5715], label: 'D', dx: -7, dy: 11 },
          { t: 'point', p: [5.3329, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$41^\\circ$', '$77^\\circ$', '$82^\\circ$', '$59^\\circ$'],
      answer: 0,
      solution:
        'Route one, the outside-angle rule: the angle between two secants from an outside point is half the difference of the far and near arcs, so $m\\angle P = \\tfrac{1}{2}(118^\\circ - 36^\\circ) = \\tfrac{1}{2}(82^\\circ) = 41^\\circ$ ✓. Check a second, independent way: draw chord $BC$. Inscribed angle $\\angle BCD$ rests on the far arc $BD$, so $m\\angle BCD = \\tfrac{1}{2}(118^\\circ) = 59^\\circ$, and inscribed angle $\\angle ABC$ rests on the near arc $AC$, so $m\\angle ABC = \\tfrac{1}{2}(36^\\circ) = 18^\\circ$. Because $\\angle BCD$ is the exterior angle of triangle $PBC$ at $C$, $59^\\circ = m\\angle P + 18^\\circ$, so $m\\angle P = 41^\\circ$ ✓. (The choice $77^\\circ$ is USING THE INSIDE RULE, half the sum, at a vertex outside the circle ✗; the choice $82^\\circ$ is SUBTRACTING WITHOUT HALVING ✗; the choice $59^\\circ$ is IGNORING THE NEAR ARC and halving the far arc alone ✗.)',
    },
    {
      q: 'A lighthouse keeper at point $P$ on a headland outside a round harbor watches two straight sight lines run across the water. The first meets the harbor edge at $A$ and again at $B$; the second meets it at $C$ and again at $D$. The near arc $AC$ measures $52^\\circ$ and the far arc $BD$ measures $146^\\circ$. What is the measure of $\\angle P$?',
      fig: {
        view: [-4.5, -4.3, 7.1209, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [5.7209, 0], b: [-0.8771, 2.8689] },
          { t: 'seg', a: [5.7209, 0], b: [-0.8771, -2.8689] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -26, to: 26 },
          { t: 'label', p: [3.55, 0], text: '52°', dx: 0, dy: 13 },
          { t: 'arc', c: [0, 0], r: 3.2, from: 107, to: 253 },
          { t: 'label', p: [-3.85, 0], text: '146°' },
          { t: 'angle', at: [5.7209, 0], from: [-0.8771, 2.8689], to: [-0.8771, -2.8689], r: 1.2, label: '?' },
          { t: 'point', p: [2.6964, 1.3151], label: 'A', dx: 12, dy: -6 },
          { t: 'point', p: [-0.8771, 2.8689], label: 'B', dx: -4, dy: -12 },
          { t: 'point', p: [2.6964, -1.3151], label: 'C', dx: 12, dy: 6 },
          { t: 'point', p: [-0.8771, -2.8689], label: 'D', dx: -4, dy: 12 },
          { t: 'point', p: [5.7209, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$99^\\circ$', '$94^\\circ$', '$47^\\circ$', '$73^\\circ$'],
      answer: 2,
      solution:
        'Route one, the outside-angle rule: from a point outside the circle the angle between two secants is half the difference of the far and near arcs, so $m\\angle P = \\tfrac{1}{2}(146^\\circ - 52^\\circ) = \\tfrac{1}{2}(94^\\circ) = 47^\\circ$ ✓. Check a second, independent way: draw chord $BC$. The inscribed angle $\\angle BCD$ stands on far arc $BD$, so $m\\angle BCD = \\tfrac{1}{2}(146^\\circ) = 73^\\circ$, and the inscribed angle $\\angle ABC$ stands on near arc $AC$, so $m\\angle ABC = \\tfrac{1}{2}(52^\\circ) = 26^\\circ$. In triangle $PBC$ the exterior angle at $C$ equals the sum of the two remote interior angles, so $73^\\circ = m\\angle P + 26^\\circ$ and $m\\angle P = 47^\\circ$ ✓. (The choice $99^\\circ$ is USING THE INSIDE RULE, half the sum, though the vertex lies outside the circle ✗; the choice $94^\\circ$ is SUBTRACTING WITHOUT HALVING ✗; the choice $73^\\circ$ is IGNORING THE NEAR ARC and taking half the far arc by itself ✗.)',
    },
  ],

  // s4 — same two-secant picture, run backwards to the far arc.
  [
    {
      q: 'A stake at point $P$ sits outside a circular crop field, and two survey lines are run from it across the field. One line meets the edge at $A$ and again at $B$; the other meets it at $C$ and again at $D$. The lines meet at the stake with $m\\angle P = 28^\\circ$, and the near arc $AC$ measures $46^\\circ$. What is the measure of the far arc $BD$?',
      fig: {
        view: [-4.5, -4.3, 8.8631, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [7.4631, 0], b: [-1.888, 2.3314] },
          { t: 'seg', a: [7.4631, 0], b: [-1.888, -2.3314] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -23, to: 23 },
          { t: 'label', p: [3.55, 0], text: '46°', dx: 0, dy: 13 },
          { t: 'arc', c: [0, 0], r: 3.2, from: 129, to: 231 },
          { t: 'label', p: [-3.85, 0], text: '?' },
          { t: 'angle', at: [7.4631, 0], from: [-1.888, 2.3314], to: [-1.888, -2.3314], r: 1.5, label: '28' },
          { t: 'point', p: [2.7615, 1.1722], label: 'A', dx: 12, dy: -5 },
          { t: 'point', p: [-1.888, 2.3314], label: 'B', dx: -8, dy: -10 },
          { t: 'point', p: [2.7615, -1.1722], label: 'C', dx: 12, dy: 5 },
          { t: 'point', p: [-1.888, -2.3314], label: 'D', dx: -8, dy: 10 },
          { t: 'point', p: [7.4631, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$10^\\circ$', '$102^\\circ$', '$74^\\circ$', '$148^\\circ$'],
      answer: 1,
      solution:
        'Route one, the outside-angle rule read backwards: $m\\angle P = \\tfrac{1}{2}(\\text{arc } BD - \\text{arc } AC)$, so the difference of the arcs is $2 \\cdot 28^\\circ = 56^\\circ$, and arc $BD = 56^\\circ + 46^\\circ = 102^\\circ$ ✓. Check a second, independent way: draw chord $BC$ and work the triangle. The inscribed angle $\\angle ABC$ on near arc $AC$ measures $\\tfrac{1}{2}(46^\\circ) = 23^\\circ$, and in triangle $PBC$ the exterior angle at $C$ is $m\\angle BCD = m\\angle P + m\\angle ABC = 28^\\circ + 23^\\circ = 51^\\circ$. That inscribed angle stands on arc $BD$, so arc $BD = 2 \\cdot 51^\\circ = 102^\\circ$ ✓. (The choice $10^\\circ$ is SUBTRACTING THE NEAR ARC INSTEAD OF ADDING IT after doubling ✗; the choice $74^\\circ$ is FORGETTING TO DOUBLE THE ANGLE and just adding $28^\\circ + 46^\\circ$ ✗; the choice $148^\\circ$ is DOUBLING THE WHOLE SUM, $2(28^\\circ + 46^\\circ)$, which doubles the near arc as well ✗.)',
    },
    {
      q: 'A camera on a tower at point $P$ outside a round arena swings between two sight lines. One line crosses the arena wall at $A$ and again at $B$; the other crosses it at $C$ and again at $D$. The camera swings through $m\\angle P = 44^\\circ$, and the near arc $AC$ measures $32^\\circ$. Find the measure of the far arc $BD$.',
      fig: {
        view: [-4.5, -4.3, 6.3304, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [4.9304, 0], b: [-1.5, 2.5981] },
          { t: 'seg', a: [4.9304, 0], b: [-1.5, -2.5981] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -16, to: 16 },
          { t: 'label', p: [3.55, 0], text: '32°', dx: 0, dy: 13 },
          { t: 'arc', c: [0, 0], r: 3.2, from: 120, to: 240 },
          { t: 'label', p: [-3.85, 0], text: '?' },
          { t: 'angle', at: [4.9304, 0], from: [-1.5, 2.5981], to: [-1.5, -2.5981], r: 1, label: '44' },
          { t: 'point', p: [2.8838, 0.8269], label: 'A', dx: 12, dy: -4 },
          { t: 'point', p: [-1.5, 2.5981], label: 'B', dx: -6, dy: -11 },
          { t: 'point', p: [2.8838, -0.8269], label: 'C', dx: 12, dy: 4 },
          { t: 'point', p: [-1.5, -2.5981], label: 'D', dx: -6, dy: 11 },
          { t: 'point', p: [4.9304, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$56^\\circ$', '$76^\\circ$', '$120^\\circ$', '$152^\\circ$'],
      answer: 2,
      solution:
        'Route one, the outside-angle rule read backwards: the far arc minus the near arc is $2 \\cdot 44^\\circ = 88^\\circ$, so arc $BD = 88^\\circ + 32^\\circ = 120^\\circ$ ✓. Check a second, independent way: draw chord $BC$. The inscribed angle $\\angle ABC$ on near arc $AC$ measures $\\tfrac{1}{2}(32^\\circ) = 16^\\circ$, and the exterior angle of triangle $PBC$ at $C$ is $m\\angle BCD = 44^\\circ + 16^\\circ = 60^\\circ$. Since $\\angle BCD$ is inscribed on arc $BD$, arc $BD = 2 \\cdot 60^\\circ = 120^\\circ$ ✓. (The choice $56^\\circ$ is SUBTRACTING THE NEAR ARC INSTEAD OF ADDING IT ✗; the choice $76^\\circ$ is FORGETTING TO DOUBLE THE ANGLE, adding $44^\\circ + 32^\\circ$ straight across ✗; the choice $152^\\circ$ is DOUBLING THE WHOLE SUM, $2(44^\\circ + 32^\\circ)$, so the near arc gets doubled too ✗.)',
    },
    {
      q: 'A peg at point $P$ lies outside a circular sports ring, and two chalk lines are snapped from it across the ring. One line meets the ring at $A$ and again at $B$; the other meets it at $C$ and again at $D$. The chalk lines leave the peg at $m\\angle P = 39^\\circ$, and the near arc $AC$ measures $58^\\circ$. What is the measure of the far arc $BD$?',
      fig: {
        view: [-4.5, -4.3, 8.1308, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [6.7308, 0], b: [-1.1238, 2.7816] },
          { t: 'seg', a: [6.7308, 0], b: [-1.1238, -2.7816] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -29, to: 29 },
          { t: 'label', p: [3.55, 0], text: '58°', dx: 0, dy: 13 },
          { t: 'arc', c: [0, 0], r: 3.2, from: 112, to: 248 },
          { t: 'label', p: [-3.85, 0], text: '?' },
          { t: 'angle', at: [6.7308, 0], from: [-1.1238, 2.7816], to: [-1.1238, -2.7816], r: 1.4, label: '39' },
          { t: 'point', p: [2.6239, 1.4544], label: 'A', dx: 11, dy: -6 },
          { t: 'point', p: [-1.1238, 2.7816], label: 'B', dx: -5, dy: -12 },
          { t: 'point', p: [2.6239, -1.4544], label: 'C', dx: 11, dy: 6 },
          { t: 'point', p: [-1.1238, -2.7816], label: 'D', dx: -5, dy: 12 },
          { t: 'point', p: [6.7308, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$136^\\circ$', '$20^\\circ$', '$97^\\circ$', '$194^\\circ$'],
      answer: 0,
      solution:
        'Route one, the outside-angle rule read backwards: the gap between the far arc and the near arc is $2 \\cdot 39^\\circ = 78^\\circ$, so arc $BD = 78^\\circ + 58^\\circ = 136^\\circ$ ✓. Check a second, independent way: draw chord $BC$. The inscribed angle $\\angle ABC$ rests on near arc $AC$, so it measures $\\tfrac{1}{2}(58^\\circ) = 29^\\circ$; the exterior angle of triangle $PBC$ at $C$ is then $m\\angle BCD = 39^\\circ + 29^\\circ = 68^\\circ$, and that inscribed angle rests on arc $BD$, so arc $BD = 2 \\cdot 68^\\circ = 136^\\circ$ ✓. (The choice $20^\\circ$ is SUBTRACTING THE NEAR ARC INSTEAD OF ADDING IT ✗; the choice $97^\\circ$ is FORGETTING TO DOUBLE THE ANGLE and adding $39^\\circ + 58^\\circ$ ✗; the choice $194^\\circ$ is DOUBLING THE WHOLE SUM, $2(39^\\circ + 58^\\circ)$ ✗.)',
    },
  ],

  // s5 — the neighbor of the crossing angle: watch the letters, D not B.
  [
    {
      q: 'Two footbridges span a circular moat and cross at a small platform $P$ over the water. One bridge runs from tower $A$ to tower $C$, and the other runs from tower $B$ to tower $D$. Arc $AB$ measures $88^\\circ$ and arc $CD$ measures $36^\\circ$. What is $m\\angle APD$?',
      fig: {
        view: [-4.8, -4.8, 4.8, 4.8],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.084, 2.158], b: [2.2294, -2.0074] },
          { t: 'seg', a: [2.084, 2.158], b: [0.6237, -2.9344] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 46, to: 134 },
          { t: 'label', p: [0, 3.85], text: '88°' },
          { t: 'arc', c: [0, 0], r: 3.2, from: -78, to: -42 },
          { t: 'label', p: [1.925, -3.3342], text: '36°' },
          { t: 'angle', at: [1.1801, -0.9941], from: [-2.084, 2.158], to: [0.6237, -2.9344], r: 0.55, label: '?' },
          { t: 'point', p: [-2.084, 2.158], label: 'A', dx: -9, dy: -9 },
          { t: 'point', p: [2.084, 2.158], label: 'B', dx: 9, dy: -9 },
          { t: 'point', p: [2.2294, -2.0074], label: 'C', dx: 10, dy: 9 },
          { t: 'point', p: [0.6237, -2.9344], label: 'D', dx: 3, dy: 13 },
          { t: 'point', p: [1.1801, -0.9941], label: 'P', dx: -3, dy: -13 },
        ],
      },
      choices: ['$62^\\circ$', '$56^\\circ$', '$154^\\circ$', '$118^\\circ$'],
      answer: 3,
      solution:
        'Route one, through the neighboring angle: $\\angle APB$ faces arcs $AB$ and $CD$, so $m\\angle APB = \\tfrac{1}{2}(88^\\circ + 36^\\circ) = 62^\\circ$, and since $B$, $P$, $D$ lie on one straight bridge, $m\\angle APD = 180^\\circ - 62^\\circ = 118^\\circ$ ✓. Check a second, independent way: apply the inside-angle rule to $\\angle APD$ itself. It faces arcs $AD$ and $BC$, which together make up the rest of the circle, $360^\\circ - 88^\\circ - 36^\\circ = 236^\\circ$, so $m\\angle APD = \\tfrac{1}{2}(236^\\circ) = 118^\\circ$ ✓. (The choice $62^\\circ$ is STOPPING AT $\\angle APB$ instead of taking its supplement ✗; the choice $56^\\circ$ is FORGETTING TO HALVE BEFORE SUBTRACTING FROM $180^\\circ$, computing $180^\\circ - 124^\\circ$ ✗; the choice $154^\\circ$ is USING HALF THE DIFFERENCE THEN THE SUPPLEMENT, $180^\\circ - 26^\\circ$ ✗.)',
    },
    {
      q: 'Two chopsticks lie across a round plate and cross at point $P$. One reaches from rim mark $A$ to rim mark $C$, and the other reaches from rim mark $B$ to rim mark $D$. Arc $AB$ measures $54^\\circ$ and arc $CD$ measures $30^\\circ$. Find $m\\angle APD$.',
      fig: {
        view: [-4.8, -4.8, 4.8, 4.8],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.362, 2.673], b: [2.1213, -2.1213] },
          { t: 'seg', a: [1.362, 2.673], b: [0.7765, -2.8978] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 63, to: 117 },
          { t: 'label', p: [0, 3.85], text: '54°' },
          { t: 'arc', c: [0, 0], r: 3.2, from: -75, to: -45 },
          { t: 'label', p: [1.925, -3.3342], text: '30°' },
          { t: 'angle', at: [1.0177, -0.6024], from: [-1.362, 2.673], to: [0.7765, -2.8978], r: 0.55, label: '?' },
          { t: 'point', p: [-1.362, 2.673], label: 'A', dx: -6, dy: -12 },
          { t: 'point', p: [1.362, 2.673], label: 'B', dx: 6, dy: -12 },
          { t: 'point', p: [2.1213, -2.1213], label: 'C', dx: 9, dy: 9 },
          { t: 'point', p: [0.7765, -2.8978], label: 'D', dx: 3, dy: 13 },
          { t: 'point', p: [1.0177, -0.6024], label: 'P', dx: -3, dy: -13 },
        ],
      },
      choices: ['$42^\\circ$', '$138^\\circ$', '$96^\\circ$', '$168^\\circ$'],
      answer: 1,
      solution:
        'Route one, through the neighboring angle: $\\angle APB$ faces arcs $AB$ and $CD$, so $m\\angle APB = \\tfrac{1}{2}(54^\\circ + 30^\\circ) = 42^\\circ$; the points $B$, $P$, $D$ lie along one straight chopstick, so $m\\angle APD = 180^\\circ - 42^\\circ = 138^\\circ$ ✓. Check a second, independent way: use the inside-angle rule on $\\angle APD$ directly. It faces arcs $AD$ and $BC$, whose total is $360^\\circ - 54^\\circ - 30^\\circ = 276^\\circ$, so $m\\angle APD = \\tfrac{1}{2}(276^\\circ) = 138^\\circ$ ✓. (The choice $42^\\circ$ is STOPPING AT $\\angle APB$, the wrong one of the two angles ✗; the choice $96^\\circ$ is FORGETTING TO HALVE BEFORE SUBTRACTING FROM $180^\\circ$, computing $180^\\circ - 84^\\circ$ ✗; the choice $168^\\circ$ is USING HALF THE DIFFERENCE THEN THE SUPPLEMENT, $180^\\circ - 12^\\circ$ ✗.)',
    },
    {
      q: 'A circular playground marking has two chalk lines drawn across it, crossing at point $P$. One line goes from edge mark $A$ to edge mark $C$, and the other goes from edge mark $B$ to edge mark $D$. Arc $AB$ measures $96^\\circ$ and arc $CD$ measures $60^\\circ$. What is the measure of $\\angle APD$?',
      fig: {
        view: [-4.8, -4.8, 4.8, 4.8],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.2294, 2.0074], b: [2.5981, -1.5] },
          { t: 'seg', a: [2.2294, 2.0074], b: [0, -3] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 42, to: 138 },
          { t: 'label', p: [0, 3.85], text: '96°' },
          { t: 'arc', c: [0, 0], r: 3.2, from: -90, to: -30 },
          { t: 'label', p: [1.925, -3.3342], text: '60°' },
          { t: 'angle', at: [1.1396, -0.4403], from: [-2.2294, 2.0074], to: [0, -3], r: 0.55, label: '?' },
          { t: 'point', p: [-2.2294, 2.0074], label: 'A', dx: -10, dy: -9 },
          { t: 'point', p: [2.2294, 2.0074], label: 'B', dx: 10, dy: -9 },
          { t: 'point', p: [2.5981, -1.5], label: 'C', dx: 11, dy: 6 },
          { t: 'point', p: [0, -3], label: 'D', dx: 0, dy: 13 },
          { t: 'point', p: [1.1396, -0.4403], label: 'P', dx: -3, dy: -13 },
        ],
      },
      choices: ['$78^\\circ$', '$24^\\circ$', '$102^\\circ$', '$162^\\circ$'],
      answer: 2,
      solution:
        'Route one, through the neighboring angle: $m\\angle APB = \\tfrac{1}{2}(96^\\circ + 60^\\circ) = 78^\\circ$, and $\\angle APD$ is its supplement because $B$, $P$, $D$ sit on one straight chalk line, so $m\\angle APD = 180^\\circ - 78^\\circ = 102^\\circ$ ✓. Check a second, independent way: read $\\angle APD$ off the rule by itself. It faces arcs $AD$ and $BC$, which total $360^\\circ - 96^\\circ - 60^\\circ = 204^\\circ$, so $m\\angle APD = \\tfrac{1}{2}(204^\\circ) = 102^\\circ$ ✓. (The choice $78^\\circ$ is STOPPING AT $\\angle APB$ and never taking the supplement ✗; the choice $24^\\circ$ is FORGETTING TO HALVE BEFORE SUBTRACTING FROM $180^\\circ$, computing $180^\\circ - 156^\\circ$ ✗; the choice $162^\\circ$ is USING HALF THE DIFFERENCE THEN THE SUPPLEMENT, $180^\\circ - 18^\\circ$ ✗.)',
    },
  ],

  // s6 — a tangent and a secant from an outside point.
  [
    {
      q: 'From a bench at point $P$ outside a circular hedge, one sight line just grazes the hedge at $T$, and a second sight line cuts through it, meeting the hedge first at $A$ and then at $B$. Arc $TB$, the far arc between the two lines, measures $144^\\circ$, and arc $TA$, the near arc, measures $62^\\circ$. What is $m\\angle P$?',
      fig: {
        view: [-4.6, -4.4, 6.7915, 4.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [5.3915, 0], b: [-2.8156, -1.0354] },
          { t: 'seg', a: [5.3915, 0], b: [1.6693, 2.4927] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -5.8094, to: 56.1906 },
          { t: 'label', p: [3.4839, 1.6387], text: '62°' },
          { t: 'arc', c: [0, 0], r: 3.2, from: 56.1906, to: 200.1906 },
          { t: 'label', p: [-2.3804, 3.0259], text: '144°' },
          { t: 'angle', at: [5.3915, 0], from: [1.6693, 2.4927], to: [-2.8156, -1.0354], r: 1.1, label: '?' },
          { t: 'point', p: [1.6693, 2.4927], label: 'T', dx: 7, dy: -11 },
          { t: 'point', p: [2.9846, -0.3037], label: 'A', dx: 3, dy: 15 },
          { t: 'point', p: [-2.8156, -1.0354], label: 'B', dx: -12, dy: 4 },
          { t: 'point', p: [5.3915, 0], label: 'P', dx: 13, dy: 4 },
        ],
      },
      choices: ['$41^\\circ$', '$103^\\circ$', '$82^\\circ$', '$72^\\circ$'],
      answer: 0,
      solution:
        'Route one, the outside-angle rule: a tangent and a secant from an outside point make an angle equal to half the difference of the far and near arcs they cut off, so $m\\angle P = \\tfrac{1}{2}(144^\\circ - 62^\\circ) = \\tfrac{1}{2}(82^\\circ) = 41^\\circ$ ✓. Check a second, independent way: work triangle $PTA$. The tangent-chord angle $\\angle PTA$ is half its intercepted arc $TA$, so it measures $\\tfrac{1}{2}(62^\\circ) = 31^\\circ$; the inscribed angle $\\angle TAB$ stands on arc $TB$, so it measures $\\tfrac{1}{2}(144^\\circ) = 72^\\circ$, and $\\angle TAP$ is its supplement, $180^\\circ - 72^\\circ = 108^\\circ$. The three angles of triangle $PTA$ add to $180^\\circ$, so $m\\angle P = 180^\\circ - 31^\\circ - 108^\\circ = 41^\\circ$ ✓. (The choice $103^\\circ$ is USING THE INSIDE RULE, half the sum, at a vertex outside the circle ✗; the choice $82^\\circ$ is SUBTRACTING WITHOUT HALVING ✗; the choice $72^\\circ$ is IGNORING THE NEAR ARC and halving the far arc alone ✗.)',
    },
    {
      q: 'Two roads leave a lookout at point $P$ outside a circular roundabout. One road runs tangent to the roundabout, touching it at $T$; the other road cuts across, meeting the roundabout first at $A$ and then at $B$. The far arc $TB$ measures $156^\\circ$ and the near arc $TA$ measures $48^\\circ$. Find $m\\angle P$.',
      fig: {
        view: [-4.6, -4.4, 5.6079, 4.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [4.2079, 0], b: [-2.8096, -1.0518] },
          { t: 'seg', a: [4.2079, 0], b: [2.1389, 2.1036] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -3.4756, to: 44.5244 },
          { t: 'label', p: [3.6056, 1.3498], text: '48°' },
          { t: 'arc', c: [0, 0], r: 3.2, from: 44.5244, to: 200.5244 },
          { t: 'label', p: [-2.07, 3.2462], text: '156°' },
          { t: 'angle', at: [4.2079, 0], from: [2.1389, 2.1036], to: [-2.8096, -1.0518], r: 0.9, label: '?' },
          { t: 'point', p: [2.1389, 2.1036], label: 'T', dx: 9, dy: -9 },
          { t: 'point', p: [2.9945, -0.1819], label: 'A', dx: 3, dy: 15 },
          { t: 'point', p: [-2.8096, -1.0518], label: 'B', dx: -12, dy: 5 },
          { t: 'point', p: [4.2079, 0], label: 'P', dx: 13, dy: 4 },
        ],
      },
      choices: ['$102^\\circ$', '$108^\\circ$', '$78^\\circ$', '$54^\\circ$'],
      answer: 3,
      solution:
        'Route one, the outside-angle rule: for a tangent and a secant meeting outside the circle the angle is half the difference of the two intercepted arcs, so $m\\angle P = \\tfrac{1}{2}(156^\\circ - 48^\\circ) = \\tfrac{1}{2}(108^\\circ) = 54^\\circ$ ✓. Check a second, independent way: work triangle $PTA$. The tangent-chord angle $\\angle PTA$ is half arc $TA$, so $m\\angle PTA = \\tfrac{1}{2}(48^\\circ) = 24^\\circ$; the inscribed angle $\\angle TAB$ is half arc $TB$, so $m\\angle TAB = \\tfrac{1}{2}(156^\\circ) = 78^\\circ$, making $m\\angle TAP = 180^\\circ - 78^\\circ = 102^\\circ$. The angle sum of the triangle then gives $m\\angle P = 180^\\circ - 24^\\circ - 102^\\circ = 54^\\circ$ ✓. (The choice $102^\\circ$ is USING THE INSIDE RULE, half the sum, though the vertex is outside ✗; the choice $108^\\circ$ is SUBTRACTING WITHOUT HALVING ✗; the choice $78^\\circ$ is IGNORING THE NEAR ARC and taking half of arc $TB$ by itself ✗.)',
    },
    {
      q: 'A laser at point $P$ outside a circular mirror sends out two beams. The first beam just grazes the mirror at $T$; the second passes through, meeting the mirror first at $A$ and then at $B$. The far arc $TB$ measures $122^\\circ$ and the near arc $TA$ measures $38^\\circ$. What is the measure of $\\angle P$?',
      fig: {
        view: [-4.6, -4.4, 5.3395, 4.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [3.9395, 0], b: [-2.8596, 0.9071] },
          { t: 'seg', a: [3.9395, 0], b: [2.2846, 1.9444] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 2.4011, to: 40.4011 },
          { t: 'label', p: [3.5845, 1.4048], text: '38°' },
          { t: 'arc', c: [0, 0], r: 3.2, from: 40.4011, to: 162.4011 },
          { t: 'label', p: [-0.7611, 3.774], text: '122°' },
          { t: 'angle', at: [3.9395, 0], from: [2.2846, 1.9444], to: [-2.8596, 0.9071], r: 0.8, label: '?' },
          { t: 'point', p: [2.2846, 1.9444], label: 'T', dx: 10, dy: -8 },
          { t: 'point', p: [2.9974, 0.1257], label: 'A', dx: 3, dy: 15 },
          { t: 'point', p: [-2.8596, 0.9071], label: 'B', dx: -12, dy: -4 },
          { t: 'point', p: [3.9395, 0], label: 'P', dx: 13, dy: 4 },
        ],
      },
      choices: ['$80^\\circ$', '$42^\\circ$', '$84^\\circ$', '$61^\\circ$'],
      answer: 1,
      solution:
        'Route one, the outside-angle rule: the angle between a tangent and a secant from an outside point is half the difference of the far and near arcs, so $m\\angle P = \\tfrac{1}{2}(122^\\circ - 38^\\circ) = \\tfrac{1}{2}(84^\\circ) = 42^\\circ$ ✓. Check a second, independent way: work triangle $PTA$. The tangent-chord angle $\\angle PTA$ is half arc $TA$, giving $\\tfrac{1}{2}(38^\\circ) = 19^\\circ$; the inscribed angle $\\angle TAB$ is half arc $TB$, giving $\\tfrac{1}{2}(122^\\circ) = 61^\\circ$, so $m\\angle TAP = 180^\\circ - 61^\\circ = 119^\\circ$. Adding to $180^\\circ$ inside the triangle, $m\\angle P = 180^\\circ - 19^\\circ - 119^\\circ = 42^\\circ$ ✓. (The choice $80^\\circ$ is USING THE INSIDE RULE, half the sum, at an outside vertex ✗; the choice $84^\\circ$ is SUBTRACTING WITHOUT HALVING ✗; the choice $61^\\circ$ is IGNORING THE NEAR ARC and halving arc $TB$ alone ✗.)',
    },
  ],

  // s7 — crossing chords with the two arcs in a given ratio.
  [
    {
      q: 'Two kite strings stretch over a circular field and cross at point $P$ above it. One string runs from stake $A$ to stake $C$, and the other runs from stake $B$ to stake $D$. The strings cross at $m\\angle APB = 57^\\circ$, and arc $AB$ is five times as long as arc $CD$. What is the measure of arc $AB$?',
      fig: {
        view: [-4.8, -4.8, 4.8, 4.8],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.2118, 2.0268], b: [1.9082, -2.3149] },
          { t: 'seg', a: [2.2118, 2.0268], b: [1.0506, -2.81] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 42.5, to: 137.5 },
          { t: 'label', p: [0, 3.85], text: '5x' },
          { t: 'arc', c: [0, 0], r: 3.2, from: -69.5, to: -50.5 },
          { t: 'label', p: [1.925, -3.3342], text: 'x' },
          { t: 'angle', at: [1.3186, -1.6936], from: [-2.2118, 2.0268], to: [2.2118, 2.0268], r: 0.55, label: '57' },
          { t: 'point', p: [-2.2118, 2.0268], label: 'A', dx: -10, dy: -9 },
          { t: 'point', p: [2.2118, 2.0268], label: 'B', dx: 10, dy: -9 },
          { t: 'point', p: [1.9082, -2.3149], label: 'C', dx: 8, dy: 10 },
          { t: 'point', p: [1.0506, -2.81], label: 'D', dx: 5, dy: 12 },
          { t: 'point', p: [1.3186, -1.6936], label: 'P', dx: -13, dy: 3 },
        ],
      },
      choices: ['$19^\\circ$', '$114^\\circ$', '$95^\\circ$', '$57^\\circ$'],
      answer: 2,
      solution:
        'Route one, the inside-angle rule with a variable: let arc $CD = x$, so arc $AB = 5x$. The crossing angle is half their sum, so $\\tfrac{1}{2}(5x + x) = 57^\\circ$, giving $6x = 114^\\circ$ and $x = 19^\\circ$; then arc $AB = 5 \\cdot 19^\\circ = 95^\\circ$ ✓. Check a second, independent way: go around through the other pair of vertical angles. Since $m\\angle APD = 180^\\circ - 57^\\circ = 123^\\circ$, arcs $AD$ and $BC$ total $2 \\cdot 123^\\circ = 246^\\circ$, so arcs $AB$ and $CD$ together fill the remaining $360^\\circ - 246^\\circ = 114^\\circ$. Splitting $114^\\circ$ in the ratio $5 : 1$ gives arc $AB = \\tfrac{5}{6}(114^\\circ) = 95^\\circ$ ✓. (The choice $19^\\circ$ is REPORTING THE SMALL ARC $CD$ instead of arc $AB$ ✗; the choice $114^\\circ$ is REPORTING THE TOTAL OF BOTH ARCS ✗; the choice $57^\\circ$ is MISTAKING THE ANGLE FOR THE ARC ✗.)',
    },
    {
      q: 'Two strips of tape are laid across a circular stage and cross at point $P$. One strip runs from edge mark $A$ to edge mark $C$, and the other runs from edge mark $B$ to edge mark $D$. The strips meet at $m\\angle APB = 70^\\circ$, and arc $AB$ is four times arc $CD$. Find the measure of arc $AB$.',
      fig: {
        view: [-4.8, -4.8, 4.8, 4.8],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.4871, 1.6776], b: [2.084, -2.158] },
          { t: 'seg', a: [2.4871, 1.6776], b: [0.8269, -2.8838] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 34, to: 146 },
          { t: 'label', p: [0, 3.85], text: '4x' },
          { t: 'arc', c: [0, 0], r: 3.2, from: -74, to: -46 },
          { t: 'label', p: [1.925, -3.3342], text: 'x' },
          { t: 'angle', at: [1.3234, -1.5198], from: [-2.4871, 1.6776], to: [2.4871, 1.6776], r: 0.55, label: '70' },
          { t: 'point', p: [-2.4871, 1.6776], label: 'A', dx: -11, dy: -7 },
          { t: 'point', p: [2.4871, 1.6776], label: 'B', dx: 11, dy: -7 },
          { t: 'point', p: [2.084, -2.158], label: 'C', dx: 9, dy: 9 },
          { t: 'point', p: [0.8269, -2.8838], label: 'D', dx: 4, dy: 12 },
          { t: 'point', p: [1.3234, -1.5198], label: 'P', dx: -13, dy: 3 },
        ],
      },
      choices: ['$112^\\circ$', '$28^\\circ$', '$140^\\circ$', '$70^\\circ$'],
      answer: 0,
      solution:
        'Route one, the inside-angle rule with a variable: let arc $CD = x$, so arc $AB = 4x$. Half their sum is the crossing angle, so $\\tfrac{1}{2}(4x + x) = 70^\\circ$, which gives $5x = 140^\\circ$ and $x = 28^\\circ$; then arc $AB = 4 \\cdot 28^\\circ = 112^\\circ$ ✓. Check a second, independent way: the neighboring angle is $m\\angle APD = 180^\\circ - 70^\\circ = 110^\\circ$, so arcs $AD$ and $BC$ total $2 \\cdot 110^\\circ = 220^\\circ$, leaving arcs $AB$ and $CD$ to fill $360^\\circ - 220^\\circ = 140^\\circ$. Splitting $140^\\circ$ in the ratio $4 : 1$ gives arc $AB = \\tfrac{4}{5}(140^\\circ) = 112^\\circ$ ✓. (The choice $28^\\circ$ is REPORTING THE SMALL ARC $CD$ ✗; the choice $140^\\circ$ is REPORTING THE TOTAL OF BOTH ARCS ✗; the choice $70^\\circ$ is MISTAKING THE ANGLE FOR THE ARC ✗.)',
    },
    {
      q: 'Two guide wires run above a circular arena and cross at point $P$. One wire joins anchor $A$ to anchor $C$, and the other joins anchor $B$ to anchor $D$. The wires cross at $m\\angle APB = 63^\\circ$, and arc $AB$ is five times arc $CD$. What is the measure of arc $AB$?',
      fig: {
        view: [-4.8, -4.8, 4.8, 4.8],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.3801, 1.8263], b: [1.9483, -2.2812] },
          { t: 'seg', a: [2.3801, 1.8263], b: [1.0014, -2.8279] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 37.5, to: 142.5 },
          { t: 'label', p: [0, 3.85], text: '5x' },
          { t: 'arc', c: [0, 0], r: 3.2, from: -70.5, to: -49.5 },
          { t: 'label', p: [1.925, -3.3342], text: 'x' },
          { t: 'angle', at: [1.3356, -1.6998], from: [-2.3801, 1.8263], to: [2.3801, 1.8263], r: 0.55, label: '63' },
          { t: 'point', p: [-2.3801, 1.8263], label: 'A', dx: -10, dy: -8 },
          { t: 'point', p: [2.3801, 1.8263], label: 'B', dx: 10, dy: -8 },
          { t: 'point', p: [1.9483, -2.2812], label: 'C', dx: 8, dy: 10 },
          { t: 'point', p: [1.0014, -2.8279], label: 'D', dx: 4, dy: 12 },
          { t: 'point', p: [1.3356, -1.6998], label: 'P', dx: -13, dy: 3 },
        ],
      },
      choices: ['$21^\\circ$', '$105^\\circ$', '$126^\\circ$', '$63^\\circ$'],
      answer: 1,
      solution:
        'Route one, the inside-angle rule with a variable: let arc $CD = x$ and arc $AB = 5x$. Then $\\tfrac{1}{2}(5x + x) = 63^\\circ$, so $6x = 126^\\circ$ and $x = 21^\\circ$, which makes arc $AB = 5 \\cdot 21^\\circ = 105^\\circ$ ✓. Check a second, independent way: since $m\\angle APD = 180^\\circ - 63^\\circ = 117^\\circ$, arcs $AD$ and $BC$ total $2 \\cdot 117^\\circ = 234^\\circ$, so arcs $AB$ and $CD$ together take up $360^\\circ - 234^\\circ = 126^\\circ$. Dividing $126^\\circ$ in the ratio $5 : 1$ gives arc $AB = \\tfrac{5}{6}(126^\\circ) = 105^\\circ$ ✓. (The choice $21^\\circ$ is REPORTING THE SMALL ARC $CD$ ✗; the choice $126^\\circ$ is REPORTING THE TOTAL OF BOTH ARCS ✗; the choice $63^\\circ$ is MISTAKING THE ANGLE FOR THE ARC ✗.)',
    },
  ],

  // s8 — two secants from outside, with the far arc a multiple of the near arc.
  [
    {
      q: 'A heron perches at point $P$ on a rock outside a circular pond and watches along two straight lines across the water. One line meets the shore at $A$ and again at $B$; the other meets it at $C$ and again at $D$. The two lines make $m\\angle P = 36^\\circ$, and the far arc $BD$ is four times the near arc $AC$. What is the measure of arc $BD$?',
      fig: {
        view: [-4.5, -4.3, 6.2539, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [4.8539, 0], b: [-2.0074, 2.2294] },
          { t: 'seg', a: [4.8539, 0], b: [-2.0074, -2.2294] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -12, to: 12 },
          { t: 'label', p: [3.55, 0], text: 'x', dx: 0, dy: 13 },
          { t: 'arc', c: [0, 0], r: 3.2, from: 132, to: 228 },
          { t: 'label', p: [-3.85, 0], text: '4x' },
          { t: 'angle', at: [4.8539, 0], from: [-2.0074, 2.2294], to: [-2.0074, -2.2294], r: 1, label: '36' },
          { t: 'point', p: [2.9344, 0.6237], label: 'A', dx: 13, dy: -3 },
          { t: 'point', p: [-2.0074, 2.2294], label: 'B', dx: -9, dy: -10 },
          { t: 'point', p: [2.9344, -0.6237], label: 'C', dx: 13, dy: 3 },
          { t: 'point', p: [-2.0074, -2.2294], label: 'D', dx: -9, dy: 10 },
          { t: 'point', p: [4.8539, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$96^\\circ$', '$24^\\circ$', '$72^\\circ$', '$48^\\circ$'],
      answer: 0,
      solution:
        'Route one, the outside-angle rule with a variable: let arc $AC = x$, so arc $BD = 4x$. The angle at $P$ is half the difference, so $\\tfrac{1}{2}(4x - x) = 36^\\circ$, giving $3x = 72^\\circ$ and $x = 24^\\circ$; then arc $BD = 4 \\cdot 24^\\circ = 96^\\circ$ ✓. Check a second, independent way: halve each arc before subtracting. The half-arcs are $\\tfrac{4x}{2} = 2x$ and $\\tfrac{x}{2}$, and their difference is the angle: $2x - \\tfrac{x}{2} = 36^\\circ$, so $\\tfrac{3x}{2} = 36^\\circ$ and $x = 24^\\circ$, making arc $BD = 96^\\circ$ ✓. (The choice $24^\\circ$ is REPORTING THE NEAR ARC instead of the far one ✗; the choice $72^\\circ$ is REPORTING THE DIFFERENCE ITSELF rather than the far arc ✗; the choice $48^\\circ$ is FORGETTING TO DOUBLE THE ANGLE, solving $4x - x = 36^\\circ$ ✗.)',
    },
    {
      q: 'Two cables run from a station at point $P$ outside a round lake to towers on the far side. One cable crosses the shoreline at $A$ and again at $B$; the other crosses at $C$ and again at $D$. The cables leave the station at $m\\angle P = 25^\\circ$, and the far arc $BD$ is six times the near arc $AC$. Find the measure of arc $BD$.',
      fig: {
        view: [-4.5, -4.3, 5.5682, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [4.1682, 0], b: [-2.5981, 1.5] },
          { t: 'seg', a: [4.1682, 0], b: [-2.5981, -1.5] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -5, to: 5 },
          { t: 'label', p: [3.55, 0], text: 'x', dx: 0, dy: 13 },
          { t: 'arc', c: [0, 0], r: 3.2, from: 150, to: 210 },
          { t: 'label', p: [-3.85, 0], text: '6x' },
          { t: 'angle', at: [4.1682, 0], from: [-2.5981, 1.5], to: [-2.5981, -1.5], r: 0.9, label: '25' },
          { t: 'point', p: [2.9886, 0.2615], label: 'A', dx: 12, dy: -6 },
          { t: 'point', p: [-2.5981, 1.5], label: 'B', dx: -11, dy: -6 },
          { t: 'point', p: [2.9886, -0.2615], label: 'C', dx: 12, dy: 10 },
          { t: 'point', p: [-2.5981, -1.5], label: 'D', dx: -11, dy: 6 },
          { t: 'point', p: [4.1682, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$10^\\circ$', '$50^\\circ$', '$60^\\circ$', '$30^\\circ$'],
      answer: 2,
      solution:
        'Route one, the outside-angle rule with a variable: let arc $AC = x$, so arc $BD = 6x$. Half the difference is the angle at $P$, so $\\tfrac{1}{2}(6x - x) = 25^\\circ$, giving $5x = 50^\\circ$ and $x = 10^\\circ$; then arc $BD = 6 \\cdot 10^\\circ = 60^\\circ$ ✓. Check a second, independent way: halve the arcs first. Half of arc $BD$ is $3x$ and half of arc $AC$ is $\\tfrac{x}{2}$, and the angle is their difference: $3x - \\tfrac{x}{2} = 25^\\circ$, so $\\tfrac{5x}{2} = 25^\\circ$ and $x = 10^\\circ$, making arc $BD = 60^\\circ$ ✓. (The choice $10^\\circ$ is REPORTING THE NEAR ARC ✗; the choice $50^\\circ$ is REPORTING THE DIFFERENCE ITSELF ✗; the choice $30^\\circ$ is FORGETTING TO DOUBLE THE ANGLE, solving $6x - x = 25^\\circ$ ✗.)',
    },
    {
      q: 'A signal box at point $P$ stands outside a circular test loop, and two straight tracks run from it across the loop. One track meets the loop at $A$ and again at $B$; the other meets it at $C$ and again at $D$. The tracks diverge at $m\\angle P = 40^\\circ$, and the far arc $BD$ is five times the near arc $AC$. What is the measure of arc $BD$?',
      fig: {
        view: [-4.5, -4.3, 5.7856, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [4.3856, 0], b: [-1.9284, 2.2981] },
          { t: 'seg', a: [4.3856, 0], b: [-1.9284, -2.2981] },
          { t: 'arc', c: [0, 0], r: 3.2, from: -10, to: 10 },
          { t: 'label', p: [3.55, 0], text: 'x', dx: 0, dy: 13 },
          { t: 'arc', c: [0, 0], r: 3.2, from: 130, to: 230 },
          { t: 'label', p: [-3.85, 0], text: '5x' },
          { t: 'angle', at: [4.3856, 0], from: [-1.9284, 2.2981], to: [-1.9284, -2.2981], r: 0.9, label: '40' },
          { t: 'point', p: [2.9544, 0.5209], label: 'A', dx: 13, dy: -2 },
          { t: 'point', p: [-1.9284, 2.2981], label: 'B', dx: -8, dy: -10 },
          { t: 'point', p: [2.9544, -0.5209], label: 'C', dx: 13, dy: 2 },
          { t: 'point', p: [-1.9284, -2.2981], label: 'D', dx: -8, dy: 10 },
          { t: 'point', p: [4.3856, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$20^\\circ$', '$80^\\circ$', '$50^\\circ$', '$100^\\circ$'],
      answer: 3,
      solution:
        'Route one, the outside-angle rule with a variable: let arc $AC = x$, so arc $BD = 5x$. Then $\\tfrac{1}{2}(5x - x) = 40^\\circ$, so $4x = 80^\\circ$ and $x = 20^\\circ$, which makes arc $BD = 5 \\cdot 20^\\circ = 100^\\circ$ ✓. Check a second, independent way: halve each arc before subtracting. Half of arc $BD$ is $\\tfrac{5x}{2}$ and half of arc $AC$ is $\\tfrac{x}{2}$, so $\\tfrac{5x}{2} - \\tfrac{x}{2} = 40^\\circ$, giving $2x = 40^\\circ$ and $x = 20^\\circ$; arc $BD = 100^\\circ$ ✓. (The choice $20^\\circ$ is REPORTING THE NEAR ARC ✗; the choice $80^\\circ$ is REPORTING THE DIFFERENCE ITSELF ✗; the choice $50^\\circ$ is FORGETTING TO DOUBLE THE ANGLE, solving $5x - x = 40^\\circ$ ✗.)',
    },
  ],

  // s9 — cyclic quadrilateral: pick the right pair of arcs for the diagonal angle.
  [
    {
      q: 'Four buoys $A$, $B$, $C$, and $D$ sit in order around a circular race course. The arcs between them measure $110^\\circ$ for arc $AB$, $80^\\circ$ for arc $BC$, $64^\\circ$ for arc $CD$, and $106^\\circ$ for arc $DA$. Two ropes are stretched along the diagonals $AC$ and $BD$, meeting at point $P$. What is $m\\angle APB$?',
      fig: {
        view: [-4.8, -4.8, 4.8, 4.8],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.4575, 1.7207], b: [2.4575, 1.7207] },
          { t: 'seg', a: [2.4575, 1.7207], b: [2.1213, -2.1213] },
          { t: 'seg', a: [2.1213, -2.1213], b: [-0.9767, -2.8366] },
          { t: 'seg', a: [-0.9767, -2.8366], b: [-2.4575, 1.7207] },
          { t: 'seg', a: [-2.4575, 1.7207], b: [2.1213, -2.1213] },
          { t: 'seg', a: [2.4575, 1.7207], b: [-0.9767, -2.8366] },
          { t: 'label', p: [0, 3.85], text: '110°' },
          { t: 'label', p: [3.8353, -0.3355], text: '80°' },
          { t: 'label', p: [0.8661, -3.7513], text: '64°' },
          { t: 'label', p: [-3.6616, -1.1897], text: '106°' },
          { t: 'angle', at: [0.5536, -0.8059], from: [-2.4575, 1.7207], to: [2.4575, 1.7207], r: 0.5, label: '?' },
          { t: 'point', p: [-2.4575, 1.7207], label: 'A', dx: -11, dy: -7 },
          { t: 'point', p: [2.4575, 1.7207], label: 'B', dx: 11, dy: -7 },
          { t: 'point', p: [2.1213, -2.1213], label: 'C', dx: 9, dy: 9 },
          { t: 'point', p: [-0.9767, -2.8366], label: 'D', dx: -4, dy: 12 },
          { t: 'point', p: [0.5536, -0.8059], label: 'P', dx: -13, dy: 1 },
        ],
      },
      choices: ['$93^\\circ$', '$87^\\circ$', '$174^\\circ$', '$23^\\circ$'],
      answer: 1,
      solution:
        'Route one, the inside-angle rule: the diagonals are chords crossing at $P$, and $\\angle APB$ faces arc $AB$ on one side and arc $CD$ on the other, so $m\\angle APB = \\tfrac{1}{2}(110^\\circ + 64^\\circ) = \\tfrac{1}{2}(174^\\circ) = 87^\\circ$ ✓. Check a second, independent way: the other pair of vertical angles faces arcs $BC$ and $DA$, giving $m\\angle BPC = \\tfrac{1}{2}(80^\\circ + 106^\\circ) = 93^\\circ$; because $\\angle APB$ and $\\angle BPC$ sit along the straight rope $AC$, $m\\angle APB = 180^\\circ - 93^\\circ = 87^\\circ$ ✓. (The choice $93^\\circ$ is GRABBING THE SIDE ARCS $BC$ AND $DA$, which belong to the other pair of vertical angles ✗; the choice $174^\\circ$ is ADDING WITHOUT HALVING ✗; the choice $23^\\circ$ is TAKING HALF THE DIFFERENCE of arcs $AB$ and $CD$ instead of half the sum ✗.)',
    },
    {
      q: 'Four lanterns $A$, $B$, $C$, and $D$ hang in order around a circular frame. Arc $AB$ measures $76^\\circ$, arc $BC$ measures $94^\\circ$, arc $CD$ measures $40^\\circ$, and arc $DA$ measures $150^\\circ$. Two thin cords run along the diagonals $AC$ and $BD$ and cross at point $P$. Find $m\\angle APB$.',
      fig: {
        view: [-4.8, -4.8, 4.8, 4.8],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.847, 2.364], b: [1.847, 2.364] },
          { t: 'seg', a: [1.847, 2.364], b: [2.2294, -2.0074] },
          { t: 'seg', a: [2.2294, -2.0074], b: [0.4175, -2.9708] },
          { t: 'seg', a: [0.4175, -2.9708], b: [-1.847, 2.364] },
          { t: 'seg', a: [-1.847, 2.364], b: [2.2294, -2.0074] },
          { t: 'seg', a: [1.847, 2.364], b: [0.4175, -2.9708] },
          { t: 'label', p: [0, 3.85], text: '76°' },
          { t: 'label', p: [3.8353, 0.3355], text: '94°' },
          { t: 'label', p: [1.8075, -3.3993], text: '40°' },
          { t: 'label', p: [-3.5439, -1.5043], text: '150°' },
          { t: 'angle', at: [1.0225, -0.7131], from: [-1.847, 2.364], to: [1.847, 2.364], r: 0.5, label: '?' },
          { t: 'point', p: [-1.847, 2.364], label: 'A', dx: -8, dy: -10 },
          { t: 'point', p: [1.847, 2.364], label: 'B', dx: 8, dy: -10 },
          { t: 'point', p: [2.2294, -2.0074], label: 'C', dx: 10, dy: 9 },
          { t: 'point', p: [0.4175, -2.9708], label: 'D', dx: 2, dy: 13 },
          { t: 'point', p: [1.0225, -0.7131], label: 'P', dx: -13, dy: 3 },
        ],
      },
      choices: ['$122^\\circ$', '$116^\\circ$', '$18^\\circ$', '$58^\\circ$'],
      answer: 3,
      solution:
        'Route one, the inside-angle rule: $\\angle APB$ is formed by the crossing chords $AC$ and $BD$, and it faces arcs $AB$ and $CD$, so $m\\angle APB = \\tfrac{1}{2}(76^\\circ + 40^\\circ) = \\tfrac{1}{2}(116^\\circ) = 58^\\circ$ ✓. Check a second, independent way: the vertical pair across from it faces arcs $BC$ and $DA$, so $m\\angle BPC = \\tfrac{1}{2}(94^\\circ + 150^\\circ) = 122^\\circ$, and along the straight cord $AC$ the two angles are supplementary, giving $m\\angle APB = 180^\\circ - 122^\\circ = 58^\\circ$ ✓. (The choice $122^\\circ$ is GRABBING THE SIDE ARCS $BC$ AND $DA$, the arcs of the other vertical pair ✗; the choice $116^\\circ$ is ADDING WITHOUT HALVING ✗; the choice $18^\\circ$ is TAKING HALF THE DIFFERENCE of arcs $AB$ and $CD$ ✗.)',
    },
    {
      q: 'Four seats $A$, $B$, $C$, and $D$ are spaced in order around a round table. Arc $AB$ measures $68^\\circ$, arc $BC$ measures $112^\\circ$, arc $CD$ measures $58^\\circ$, and arc $DA$ measures $122^\\circ$. Two ribbons are pulled taut along the diagonals $AC$ and $BD$, meeting at point $P$. What is the measure of $\\angle APB$?',
      fig: {
        view: [-4.8, -4.8, 4.8, 4.8],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.6776, 2.4871], b: [1.6776, 2.4871] },
          { t: 'seg', a: [1.6776, 2.4871], b: [1.6776, -2.4871] },
          { t: 'seg', a: [1.6776, -2.4871], b: [-1.2202, -2.7406] },
          { t: 'seg', a: [-1.2202, -2.7406], b: [-1.6776, 2.4871] },
          { t: 'seg', a: [-1.6776, 2.4871], b: [1.6776, -2.4871] },
          { t: 'seg', a: [1.6776, 2.4871], b: [-1.2202, -2.7406] },
          { t: 'label', p: [0, 3.85], text: '68°' },
          { t: 'label', p: [3.85, 0], text: '112°' },
          { t: 'label', p: [0.3355, -3.8353], text: '58°' },
          { t: 'label', p: [-3.8353, -0.3355], text: '122°' },
          { t: 'angle', at: [0.1641, -0.2433], from: [-1.6776, 2.4871], to: [1.6776, 2.4871], r: 0.5, label: '?' },
          { t: 'point', p: [-1.6776, 2.4871], label: 'A', dx: -7, dy: -11 },
          { t: 'point', p: [1.6776, 2.4871], label: 'B', dx: 7, dy: -11 },
          { t: 'point', p: [1.6776, -2.4871], label: 'C', dx: 7, dy: 11 },
          { t: 'point', p: [-1.2202, -2.7406], label: 'D', dx: -5, dy: 12 },
          { t: 'point', p: [0.1641, -0.2433], label: 'P', dx: -13, dy: 1 },
        ],
      },
      choices: ['$117^\\circ$', '$126^\\circ$', '$63^\\circ$', '$5^\\circ$'],
      answer: 2,
      solution:
        'Route one, the inside-angle rule: the diagonals cross at $P$, and $\\angle APB$ faces arc $AB$ and, across the table, arc $CD$, so $m\\angle APB = \\tfrac{1}{2}(68^\\circ + 58^\\circ) = \\tfrac{1}{2}(126^\\circ) = 63^\\circ$ ✓. Check a second, independent way: the neighboring angle $\\angle BPC$ faces arcs $BC$ and $DA$, so $m\\angle BPC = \\tfrac{1}{2}(112^\\circ + 122^\\circ) = 117^\\circ$; the two angles lie along the straight ribbon $AC$, so $m\\angle APB = 180^\\circ - 117^\\circ = 63^\\circ$ ✓. (The choice $117^\\circ$ is GRABBING THE SIDE ARCS $BC$ AND $DA$ that belong to the other vertical pair ✗; the choice $126^\\circ$ is ADDING WITHOUT HALVING ✗; the choice $5^\\circ$ is TAKING HALF THE DIFFERENCE of arcs $AB$ and $CD$ ✗.)',
    },
  ],

  // s10 — two secants from outside, then account for the whole circle.
  [
    {
      q: 'A drone hovers at point $P$ beyond the rim of a circular crater and films along two straight lines across it. One line crosses the rim at $A$ and again at $B$; the other crosses at $C$ and again at $D$. The far arc $BD$ measures $150^\\circ$ and the two lines make $m\\angle P = 35^\\circ$. What is the total of the two remaining arcs, arc $AB$ plus arc $CD$?',
      fig: {
        view: [-4.5, -4.3, 9.8143, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [8.4143, 0], b: [-0.7765, 2.8978] },
          { t: 'seg', a: [8.4143, 0], b: [-0.7765, -2.8978] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 105, to: 255 },
          { t: 'label', p: [-3.85, 0], text: '150°' },
          { t: 'label', p: [1.1427, 3.6241], text: '?' },
          { t: 'label', p: [1.1427, -3.6241], text: '?' },
          { t: 'angle', at: [8.4143, 0], from: [-0.7765, 2.8978], to: [-0.7765, -2.8978], r: 1.7, label: '35' },
          { t: 'point', p: [2.2981, 1.9284], label: 'A', dx: 10, dy: -8 },
          { t: 'point', p: [-0.7765, 2.8978], label: 'B', dx: -3, dy: -13 },
          { t: 'point', p: [2.2981, -1.9284], label: 'C', dx: 10, dy: 8 },
          { t: 'point', p: [-0.7765, -2.8978], label: 'D', dx: -3, dy: 13 },
          { t: 'point', p: [8.4143, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$80^\\circ$', '$210^\\circ$', '$130^\\circ$', '$65^\\circ$'],
      answer: 2,
      solution:
        'Route one, outside rule then whole circle: $m\\angle P = \\tfrac{1}{2}(\\text{arc } BD - \\text{arc } AC)$, so $\\text{arc } AC = 150^\\circ - 2 \\cdot 35^\\circ = 80^\\circ$. The four arcs $AB$, $BD$, $CD$, and $AC$ fill the circle, so arc $AB$ plus arc $CD$ is $360^\\circ - 150^\\circ - 80^\\circ = 130^\\circ$ ✓. Check a second, independent way: plug the answer back in. If arcs $AB$ and $CD$ total $130^\\circ$, then arc $AC = 360^\\circ - 150^\\circ - 130^\\circ = 80^\\circ$, and the outside rule gives $\\tfrac{1}{2}(150^\\circ - 80^\\circ) = 35^\\circ$, exactly the angle marked at $P$ ✓. (The choice $80^\\circ$ is STOPPING AT THE NEAR ARC $AC$ ✗; the choice $210^\\circ$ is FORGETTING THE NEAR ARC and reporting $360^\\circ - 150^\\circ$ ✗; the choice $65^\\circ$ is HALVING A TOTAL THAT NEEDS NO HALVING ✗.)',
    },
    {
      q: 'Two roped walkways run from a gate at point $P$ outside a circular exhibit. One walkway meets the fence at $A$ and again at $B$; the other meets it at $C$ and again at $D$. The far arc $BD$ measures $136^\\circ$ and the walkways leave the gate at $m\\angle P = 24^\\circ$. Find the total of the two remaining arcs, arc $AB$ plus arc $CD$.',
      fig: {
        view: [-4.5, -4.3, 13.362, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [11.962, 0], b: [-1.1238, 2.7816] },
          { t: 'seg', a: [11.962, 0], b: [-1.1238, -2.7816] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 112, to: 248 },
          { t: 'label', p: [-3.85, 0], text: '136°' },
          { t: 'label', p: [0.7901, 3.717], text: '?' },
          { t: 'label', p: [0.7901, -3.717], text: '?' },
          { t: 'angle', at: [11.962, 0], from: [-1.1238, 2.7816], to: [-1.1238, -2.7816], r: 2.4, label: '24' },
          { t: 'point', p: [2.158, 2.084], label: 'A', dx: 9, dy: -9 },
          { t: 'point', p: [-1.1238, 2.7816], label: 'B', dx: -5, dy: -12 },
          { t: 'point', p: [2.158, -2.084], label: 'C', dx: 9, dy: 9 },
          { t: 'point', p: [-1.1238, -2.7816], label: 'D', dx: -5, dy: 12 },
          { t: 'point', p: [11.962, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$136^\\circ$', '$88^\\circ$', '$224^\\circ$', '$68^\\circ$'],
      answer: 0,
      solution:
        'Route one, outside rule then whole circle: the near arc is $\\text{arc } AC = 136^\\circ - 2 \\cdot 24^\\circ = 88^\\circ$, and since the four arcs $AB$, $BD$, $CD$, and $AC$ make up the whole circle, arc $AB$ plus arc $CD$ is $360^\\circ - 136^\\circ - 88^\\circ = 136^\\circ$ ✓. Check a second, independent way: plug the answer back in. If arcs $AB$ and $CD$ total $136^\\circ$, then arc $AC = 360^\\circ - 136^\\circ - 136^\\circ = 88^\\circ$, and half the difference of the far and near arcs is $\\tfrac{1}{2}(136^\\circ - 88^\\circ) = 24^\\circ$, matching the marked angle ✓. (The choice $88^\\circ$ is STOPPING AT THE NEAR ARC $AC$ ✗; the choice $224^\\circ$ is FORGETTING THE NEAR ARC and reporting $360^\\circ - 136^\\circ$ ✗; the choice $68^\\circ$ is HALVING A TOTAL THAT NEEDS NO HALVING ✗.)',
    },
    {
      q: 'Two guy lines run from an anchor at point $P$ outside a circular garden bed. One line crosses the border at $A$ and again at $B$; the other crosses at $C$ and again at $D$. The far arc $BD$ measures $128^\\circ$ and the lines spread apart at $m\\angle P = 30^\\circ$. What is the total of the two remaining arcs, arc $AB$ plus arc $CD$?',
      fig: {
        view: [-4.5, -4.3, 10.148, 4.3],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [8.748, 0], b: [-1.3151, 2.6964] },
          { t: 'seg', a: [8.748, 0], b: [-1.3151, -2.6964] },
          { t: 'arc', c: [0, 0], r: 3.2, from: 116, to: 244 },
          { t: 'label', p: [-3.85, 0], text: '128°' },
          { t: 'label', p: [0.9835, 3.6705], text: '?' },
          { t: 'label', p: [0.9835, -3.6705], text: '?' },
          { t: 'angle', at: [8.748, 0], from: [-1.3151, 2.6964], to: [-1.3151, -2.6964], r: 1.8, label: '30' },
          { t: 'point', p: [2.4871, 1.6776], label: 'A', dx: 11, dy: -7 },
          { t: 'point', p: [-1.3151, 2.6964], label: 'B', dx: -6, dy: -12 },
          { t: 'point', p: [2.4871, -1.6776], label: 'C', dx: 11, dy: 7 },
          { t: 'point', p: [-1.3151, -2.6964], label: 'D', dx: -6, dy: 12 },
          { t: 'point', p: [8.748, 0], label: 'P', dx: 13, dy: 0 },
        ],
      },
      choices: ['$68^\\circ$', '$232^\\circ$', '$82^\\circ$', '$164^\\circ$'],
      answer: 3,
      solution:
        'Route one, outside rule then whole circle: the near arc is $\\text{arc } AC = 128^\\circ - 2 \\cdot 30^\\circ = 68^\\circ$, and the four arcs $AB$, $BD$, $CD$, and $AC$ together fill $360^\\circ$, so arc $AB$ plus arc $CD$ is $360^\\circ - 128^\\circ - 68^\\circ = 164^\\circ$ ✓. Check a second, independent way: plug the answer back in. If arcs $AB$ and $CD$ total $164^\\circ$, then arc $AC = 360^\\circ - 128^\\circ - 164^\\circ = 68^\\circ$, and the outside rule returns $\\tfrac{1}{2}(128^\\circ - 68^\\circ) = 30^\\circ$, the angle marked at the anchor ✓. (The choice $68^\\circ$ is STOPPING AT THE NEAR ARC $AC$ ✗; the choice $232^\\circ$ is FORGETTING THE NEAR ARC and reporting $360^\\circ - 128^\\circ$ ✗; the choice $82^\\circ$ is HALVING A TOTAL THAT NEEDS NO HALVING ✗.)',
    },
  ],
];

export default {
  book: 'intro-geometry',
  number: 12,
  sections: { '12.2': s122 },
}
