// Introduction to Geometry chapter 6 — variations for the CHALLENGE set.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every answer was worked twice by two genuinely different routes, and the
//    two routes had to agree before the key was written. The pairs used are:
//    Pythagorean triples before and after the slip vs. difference-of-squares
//    factoring (slot 1); special-triangle side ratios piece by piece vs.
//    building both hypotenuses and subtracting squares (slot 2); chained
//    triples vs. coordinates with the rotated perpendicular direction
//    (slot 3); the divide-by-root-three ladder vs. a full Pythagorean check
//    of the finished triple (slot 4); Heron on the decimal sides vs. the
//    right-angle shortcut after doubling to a whole-number triple (slot 5);
//    altitude geometric mean plus Pythagoras in each small triangle vs. the
//    leg rule leg^2 = piece x hypotenuse (slot 6); Heron vs. the factored
//    difference-of-squares form 16K^2 = ((a+b)^2-c^2)(c^2-(a-b)^2) (slot 7);
//    the distance formula vs. naming the triple family and confirming it by
//    difference of squares (slot 8); side = d over root two then squaring
//    vs. 2 l^2 = d^2 solved directly (slot 9); altitude then half base times
//    height vs. the s^2 root-3 over 4 formula (slot 10); building the gap
//    rectangle then Pythagoras vs. factoring out the triple (slot 11); Heron
//    on both triangles vs. isosceles altitudes from the shared triple
//    (slot 12).
//  - Every figure is coordinate-exact: ladder feet and tops sit at true
//    triple coordinates, the walk figures place D by rotating the exact AC
//    direction a quarter turn, every right-angle marker marks a computed 90
//    degrees, and every labelled angle is drawn at its stated measure
//    (irrational positions carried to four decimals).
//  - Figure labels are plain text: bare numerals and the letters of points.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS.
//  - No two choices inside an item name the same value, and across the base
//    problem and its three variations every one of the four answer positions
//    is used exactly once.

const challenge = [
  // slot 1 — sliding ladder: foot distance before, top height after, how far
  // the foot slides out. Lane: 17 / 23 / 39.
  [
    {
      q: 'A $65$-foot extension ladder leans against the side of a barn with its foot $16$ feet from the base of the wall. The top then slips down until it rests $56$ feet up the wall. How far does the foot of the ladder slide outward?',
      fig: {
        view: [-4, -3, 36, 68],
        alt: 'A 65-foot ladder against a wall, before and after slipping',
        elems: [
          { t: 'seg', a: [-2.5, 0], b: [35, 0] },
          { t: 'seg', a: [0, 0], b: [0, 66] },
          { t: 'seg', a: [16, 0], b: [0, 63] },
          { t: 'seg', a: [33, 0], b: [0, 56], dash: true },
          { t: 'right', at: [0, 0], from: [16, 0], to: [0, 63], s: 1.5 },
          { t: 'label', p: [8, 31.5], text: '65', dx: 12, dy: -6 },
          { t: 'label', p: [16.5, 28], text: '65', dx: 14, dy: 0 },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [0, 28], text: '56', dx: -14, dy: 0 },
        ],
      },
      choices: ['$17$ feet', '$7$ feet', '$33$ feet', '$49$ feet'],
      answer: 0,
      solution:
        'Before the slip, the top sits $\\sqrt{65^2 - 16^2} = \\sqrt{4225 - 256} = \\sqrt{3969} = 63$ feet up — the $16$-$63$-$65$ triple. After the slip, the foot sits $\\sqrt{65^2 - 56^2} = \\sqrt{1089} = 33$ feet out — the $33$-$56$-$65$ triple. The foot slides from $16$ out to $33$, a move of $33 - 16 = 17$ feet ✓. Check a second, independent way with difference of squares: $65^2 - 56^2 = (65 - 56)(65 + 56) = 9 \\times 121 = 1089 = 33^2$ ✓, no big squaring needed. Notice the top dropped only $63 - 56 = 7$ feet while the foot swung out $17$ — the two motions never had to match. (The choice $7$ feet is MATCHING THE FOOT’S SLIDE TO THE TOP’S; the choice $33$ feet is STOPPING AT THE NEW FOOT DISTANCE; the choice $49$ feet is ADDING THE OLD AND NEW FOOT DISTANCES.)',
    },
    {
      q: 'An $85$-foot fire ladder rests against a warehouse wall with its foot $13$ feet from the wall. The top slides down the wall until it is $77$ feet above the ground. By how many feet does the foot of the ladder move away from the wall?',
      fig: {
        view: [-4, -3, 40, 89],
        alt: 'An 85-foot ladder against a wall, before and after slipping',
        elems: [
          { t: 'seg', a: [-2.5, 0], b: [38, 0] },
          { t: 'seg', a: [0, 0], b: [0, 87] },
          { t: 'seg', a: [13, 0], b: [0, 84] },
          { t: 'seg', a: [36, 0], b: [0, 77], dash: true },
          { t: 'right', at: [0, 0], from: [13, 0], to: [0, 84], s: 1.8 },
          { t: 'label', p: [6.5, 42], text: '85', dx: 12, dy: -6 },
          { t: 'label', p: [18, 38.5], text: '85', dx: 14, dy: 0 },
          { t: 'label', p: [6.5, 0], text: '13', dx: 0, dy: 14 },
          { t: 'label', p: [0, 38.5], text: '77', dx: -14, dy: 0 },
        ],
      },
      choices: ['$7$ feet', '$36$ feet', '$23$ feet', '$49$ feet'],
      answer: 2,
      solution:
        'Before: the top is $\\sqrt{85^2 - 13^2} = \\sqrt{7225 - 169} = \\sqrt{7056} = 84$ feet up — the $13$-$84$-$85$ triple. After: the foot is $\\sqrt{85^2 - 77^2} = \\sqrt{1296} = 36$ feet out — the $36$-$77$-$85$ triple. The foot moves $36 - 13 = 23$ feet ✓. Check a second, independent way by factoring: $85^2 - 77^2 = (85 - 77)(85 + 77) = 8 \\times 162 = 1296 = 36^2$ ✓. The top slid down a mere $84 - 77 = 7$ feet, yet the foot kicked out $23$ — a slipping ladder trades height for distance at wildly uneven rates. (The choice $7$ feet is MATCHING THE FOOT’S SLIDE TO THE TOP’S; the choice $36$ feet is STOPPING AT THE NEW FOOT DISTANCE; the choice $49$ feet is ADDING THE OLD AND NEW FOOT DISTANCES.)',
    },
    {
      q: 'An $85$-foot ladder leans against a grain silo with its foot $36$ feet out from the base. After a jolt, the top slides down until it rests just $40$ feet up. How far outward does the foot of the ladder slide?',
      fig: {
        view: [-5, -3, 79, 89],
        alt: 'An 85-foot ladder against a silo wall, before and after a large slip',
        elems: [
          { t: 'seg', a: [-3, 0], b: [77, 0] },
          { t: 'seg', a: [0, 0], b: [0, 87] },
          { t: 'seg', a: [36, 0], b: [0, 77] },
          { t: 'seg', a: [75, 0], b: [0, 40], dash: true },
          { t: 'right', at: [0, 0], from: [36, 0], to: [0, 77], s: 2 },
          { t: 'label', p: [18, 38.5], text: '85', dx: 12, dy: -6 },
          { t: 'label', p: [37.5, 20], text: '85', dx: 14, dy: 0 },
          { t: 'label', p: [18, 0], text: '36', dx: 0, dy: 14 },
          { t: 'label', p: [0, 20], text: '40', dx: -14, dy: 0 },
        ],
      },
      choices: ['$37$ feet', '$75$ feet', '$111$ feet', '$39$ feet'],
      answer: 3,
      solution:
        'Before: the top is $\\sqrt{85^2 - 36^2} = \\sqrt{7225 - 1296} = \\sqrt{5929} = 77$ feet up — the $36$-$77$-$85$ triple. After: the foot is $\\sqrt{85^2 - 40^2} = \\sqrt{5625} = 75$ feet out, since $40$-$75$-$85$ is $5 \\times (8$-$15$-$17)$. The foot slides $75 - 36 = 39$ feet ✓. Check a second, independent way with difference of squares: $85^2 - 40^2 = (85 - 40)(85 + 40) = 45 \\times 125 = 5625 = 75^2$ ✓. Here the top fell $77 - 40 = 37$ feet and the foot moved $39$ — close, but not equal, and only the Pythagorean Theorem says by how much. (The choice $37$ feet is MATCHING THE FOOT’S SLIDE TO THE TOP’S; the choice $75$ feet is STOPPING AT THE NEW FOOT DISTANCE; the choice $111$ feet is ADDING THE OLD AND NEW FOOT DISTANCES.)',
    },
  ],

  // slot 2 — altitude between two given base angles, find BC.
  // Lane: 8 + 8√3 / 9 + 3√3 / 16√3.
  [
    {
      q: 'In triangle $ABC$, the altitude from $A$ has length $8$ and meets $\\overline{BC}$ at $D$. Angle $B$ measures $45^\\circ$ and angle $C$ measures $30^\\circ$. What is the length of $\\overline{BC}$?',
      fig: {
        view: [-2, -2.5, 24, 10.5],
        alt: 'Triangle ABC with altitude AD of length 8, angle B 45 degrees, angle C 30 degrees',
        elems: [
          { t: 'poly', pts: [[0, 0], [21.8564, 0], [8, 8]], fill: false },
          { t: 'seg', a: [8, 8], b: [8, 0], dash: true },
          { t: 'right', at: [8, 0], from: [21.8564, 0], to: [8, 8] },
          { t: 'angle', at: [0, 0], from: [21.8564, 0], to: [8, 8], r: 1.8, label: '45' },
          { t: 'angle', at: [21.8564, 0], from: [0, 0], to: [8, 8], r: 2.6, label: '30' },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
          { t: 'point', p: [21.8564, 0], label: 'C', dx: 12, dy: 12 },
          { t: 'point', p: [8, 8], label: 'A', dx: 0, dy: -10 },
          { t: 'point', p: [8, 0], label: 'D', dx: 0, dy: 14 },
          { t: 'label', p: [8, 4], text: '8', dx: 10, dy: 0 },
        ],
      },
      choices: ['$8 + 8\\sqrt{3}$', '$16$', '$8 + 8\\sqrt{2}$', '$16\\sqrt{3}$'],
      answer: 0,
      solution:
        'The altitude cuts the triangle at $D$ into two special right triangles. On the left, $\\triangle ABD$ is $45$-$45$-$90$, so its legs match: $BD = AD = 8$. On the right, the $30^\\circ$ angle at $C$ sits opposite the altitude, so $AD = 8$ is the short leg of a $30$-$60$-$90$ triangle and $DC = 8\\sqrt{3}$. Altogether $BC = 8 + 8\\sqrt{3} \\approx 21.9$ ✓. Check a second, independent way through the hypotenuses: $AB = 8\\sqrt{2}$ and $AC = 2 \\times 8 = 16$, so $BD = \\sqrt{128 - 64} = 8$ ✓ and $DC = \\sqrt{256 - 64} = \\sqrt{192} = 8\\sqrt{3}$ ✓ — the same two pieces from pure Pythagoras. (The choice $16$ is TREATING BOTH BASE ANGLES AS $45^\\circ$; the choice $16\\sqrt{3}$ is TREATING BOTH BASE ANGLES AS $30^\\circ$; the choice $8 + 8\\sqrt{2}$ is SWAPPING IN THE 45-45-90 MULTIPLIER on the $30^\\circ$ side.)',
    },
    {
      q: 'In triangle $ABC$, the altitude from $A$ meets $\\overline{BC}$ at $D$ and has length $9$. If $\\angle B = 45^\\circ$ and $\\angle C = 60^\\circ$, find $BC$.',
      fig: {
        view: [-2, -2.5, 16.5, 11],
        alt: 'Triangle ABC with altitude AD of length 9, angle B 45 degrees, angle C 60 degrees',
        elems: [
          { t: 'poly', pts: [[0, 0], [14.1962, 0], [9, 9]], fill: false },
          { t: 'seg', a: [9, 9], b: [9, 0], dash: true },
          { t: 'right', at: [9, 0], from: [14.1962, 0], to: [9, 9] },
          { t: 'angle', at: [0, 0], from: [14.1962, 0], to: [9, 9], r: 1.8, label: '45' },
          { t: 'angle', at: [14.1962, 0], from: [0, 0], to: [9, 9], r: 1.5, label: '60' },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
          { t: 'point', p: [14.1962, 0], label: 'C', dx: 12, dy: 12 },
          { t: 'point', p: [9, 9], label: 'A', dx: 0, dy: -10 },
          { t: 'point', p: [9, 0], label: 'D', dx: 0, dy: 14 },
          { t: 'label', p: [9, 4.5], text: '9', dx: 10, dy: 0 },
        ],
      },
      choices: ['$9 + 9\\sqrt{3}$', '$9 + 3\\sqrt{3}$', '$18$', '$6\\sqrt{3}$'],
      answer: 1,
      solution:
        'Left of the altitude, $\\triangle ABD$ is $45$-$45$-$90$, so $BD = AD = 9$. Right of it, the $60^\\circ$ angle at $C$ sits opposite the altitude, so $AD = 9$ is the LONG leg of a $30$-$60$-$90$ triangle: the short leg is $DC = \\frac{9}{\\sqrt{3}} = 3\\sqrt{3}$. So $BC = 9 + 3\\sqrt{3} \\approx 14.2$ ✓. Check a second, independent way through the hypotenuses: $AB = 9\\sqrt{2}$, and $AC = 2 \\times 3\\sqrt{3} = 6\\sqrt{3}$, so $DC = \\sqrt{(6\\sqrt{3})^2 - 9^2} = \\sqrt{108 - 81} = \\sqrt{27} = 3\\sqrt{3}$ ✓ — Pythagoras lands on the same piece. (The choice $18$ is TREATING BOTH BASE ANGLES AS $45^\\circ$; the choice $9 + 9\\sqrt{3}$ is TREATING THE $60^\\circ$ ANGLE AS $30^\\circ$, which wrongly makes the altitude the short leg; the choice $6\\sqrt{3}$ is TREATING BOTH BASE ANGLES AS $60^\\circ$.)',
    },
    {
      q: 'The altitude from $A$ in triangle $ABC$ has length $12$ and meets $\\overline{BC}$ at $D$. Given $\\angle B = 30^\\circ$ and $\\angle C = 60^\\circ$, how long is $\\overline{BC}$?',
      fig: {
        view: [-3, -3, 30, 14],
        alt: 'Triangle ABC with altitude AD of length 12, angle B 30 degrees, angle C 60 degrees',
        elems: [
          { t: 'poly', pts: [[0, 0], [27.7128, 0], [20.7846, 12]], fill: false },
          { t: 'seg', a: [20.7846, 12], b: [20.7846, 0], dash: true },
          { t: 'right', at: [20.7846, 0], from: [27.7128, 0], to: [20.7846, 12] },
          { t: 'angle', at: [0, 0], from: [27.7128, 0], to: [20.7846, 12], r: 3, label: '30' },
          { t: 'angle', at: [27.7128, 0], from: [0, 0], to: [20.7846, 12], r: 2.2, label: '60' },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
          { t: 'point', p: [27.7128, 0], label: 'C', dx: 12, dy: 12 },
          { t: 'point', p: [20.7846, 12], label: 'A', dx: 0, dy: -10 },
          { t: 'point', p: [20.7846, 0], label: 'D', dx: 0, dy: 14 },
          { t: 'label', p: [20.7846, 6], text: '12', dx: 12, dy: 0 },
        ],
      },
      choices: ['$24\\sqrt{3}$', '$8\\sqrt{3}$', '$24$', '$16\\sqrt{3}$'],
      answer: 3,
      solution:
        'On the left, the $30^\\circ$ angle at $B$ sits opposite the altitude, so $AD = 12$ is the short leg and $BD = 12\\sqrt{3}$. On the right, the $60^\\circ$ angle at $C$ sits opposite the altitude, so $AD = 12$ is the long leg and $DC = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3}$. Collect like terms: $BC = 12\\sqrt{3} + 4\\sqrt{3} = 16\\sqrt{3} \\approx 27.7$ ✓. Check a second, independent way through the hypotenuses: $AB = 2 \\times 12 = 24$ gives $BD = \\sqrt{576 - 144} = \\sqrt{432} = 12\\sqrt{3}$ ✓, and $AC = 2 \\times 4\\sqrt{3} = 8\\sqrt{3}$ gives $DC = \\sqrt{192 - 144} = \\sqrt{48} = 4\\sqrt{3}$ ✓. (The choice $24\\sqrt{3}$ is TREATING BOTH BASE ANGLES AS $30^\\circ$; the choice $8\\sqrt{3}$ is TREATING BOTH BASE ANGLES AS $60^\\circ$; the choice $24$ is TREATING BOTH BASE ANGLES AS $45^\\circ$.)',
    },
  ],

  // slot 3 — walk two perpendicular legs, then turn perpendicular to the
  // diagonal. Lane: 73 / 29 / 65.
  [
    {
      q: 'From a trailhead at $A$, a surveyor walks $33$ m east and $44$ m north to a marker at $C$. From $C$ she walks $48$ m in a direction perpendicular to $\\overline{AC}$, stopping at $D$. How far is $D$ from the trailhead?',
      fig: {
        view: [-9, -3, 36, 76],
        alt: 'Path east then north from A to C, then a leg perpendicular to AC ending at D',
        elems: [
          { t: 'seg', a: [0, 0], b: [33, 0] },
          { t: 'seg', a: [33, 0], b: [33, 44] },
          { t: 'seg', a: [0, 0], b: [33, 44], dash: true },
          { t: 'seg', a: [33, 44], b: [-5.4, 72.8] },
          { t: 'seg', a: [0, 0], b: [-5.4, 72.8], dash: true },
          { t: 'right', at: [33, 0], from: [0, 0], to: [33, 44], s: 1.6 },
          { t: 'right', at: [33, 44], from: [0, 0], to: [-5.4, 72.8], s: 1.6 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [33, 44], label: 'C', dx: 14, dy: 0 },
          { t: 'point', p: [-5.4, 72.8], label: 'D', dx: 0, dy: -10 },
          { t: 'label', p: [16.5, 0], text: '33', dx: 0, dy: 14 },
          { t: 'label', p: [33, 22], text: '44', dx: 12, dy: 0 },
          { t: 'label', p: [13.8, 58.4], text: '48', dx: 12, dy: 0 },
          { t: 'label', p: [-2.7, 36.4], text: '?', dx: -12, dy: 0 },
        ],
      },
      choices: ['$103$ m', '$73$ m', '$4\\sqrt{265}$ m', '$55$ m'],
      answer: 1,
      solution:
        'First, $AC = \\sqrt{33^2 + 44^2} = \\sqrt{1089 + 1936} = \\sqrt{3025} = 55$ — the $3$-$4$-$5$ triple scaled by $11$. Since $\\overline{CD} \\perp \\overline{AC}$, triangle $ACD$ is right with legs $55$ and $48$, so $AD = \\sqrt{3025 + 2304} = \\sqrt{5329} = 73$ ✓ — and $48$-$55$-$73$ is a genuine whole-number triple. Check a second, independent way with coordinates: the unit direction along $AC$ is $(0.6, 0.8)$, and a quarter turn sends it to $(-0.8, 0.6)$, so $D = (33 - 38.4,\\ 44 + 28.8) = (-5.4, 72.8)$ and $AD = \\sqrt{29.16 + 5299.84} = \\sqrt{5329} = 73$ ✓. (The choice $103$ m is ADDING CD TO AC; the choice $4\\sqrt{265}$ m is COMBINING CD WITH THE NORTH LEG ONLY, $\\sqrt{44^2 + 48^2}$; the choice $55$ m is STOPPING AT AC.)',
    },
    {
      q: 'A delivery drone leaves its pad at $A$, flies $12$ km east and $16$ km north to a rooftop at $C$, then flies $21$ km in a direction perpendicular to $\\overline{AC}$ to a depot at $D$. What is the straight-line distance from $D$ back to the pad?',
      fig: {
        view: [-8.5, -2.5, 14.5, 31],
        alt: 'Flight east then north from A to C, then a leg perpendicular to AC ending at D',
        elems: [
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [12, 0], b: [12, 16] },
          { t: 'seg', a: [0, 0], b: [12, 16], dash: true },
          { t: 'seg', a: [12, 16], b: [-4.8, 28.6] },
          { t: 'seg', a: [0, 0], b: [-4.8, 28.6], dash: true },
          { t: 'right', at: [12, 0], from: [0, 0], to: [12, 16], s: 1 },
          { t: 'right', at: [12, 16], from: [0, 0], to: [-4.8, 28.6], s: 1 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [12, 16], label: 'C', dx: 14, dy: 0 },
          { t: 'point', p: [-4.8, 28.6], label: 'D', dx: 0, dy: -10 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [12, 8], text: '16', dx: 12, dy: 0 },
          { t: 'label', p: [3.6, 22.3], text: '21', dx: 12, dy: 0 },
          { t: 'label', p: [-2.4, 14.3], text: '?', dx: -12, dy: 0 },
        ],
      },
      choices: ['$41$ km', '$\\sqrt{697}$ km', '$29$ km', '$20$ km'],
      answer: 2,
      solution:
        'The east and north legs give $AC = \\sqrt{12^2 + 16^2} = \\sqrt{400} = 20$ — a $3$-$4$-$5$ scaled by $4$. The perpendicular turn makes triangle $ACD$ right with legs $20$ and $21$, so $AD = \\sqrt{400 + 441} = \\sqrt{841} = 29$ ✓ — the $20$-$21$-$29$ triple, two famous families chained in one flight. Check a second, independent way with coordinates: the unit direction along $AC$ is $(0.6, 0.8)$; rotating it a quarter turn gives $(-0.8, 0.6)$, so $D = (12 - 16.8,\\ 16 + 12.6) = (-4.8, 28.6)$ and $AD = \\sqrt{23.04 + 817.96} = \\sqrt{841} = 29$ ✓. (The choice $41$ km is ADDING CD TO AC; the choice $\\sqrt{697}$ km is COMBINING CD WITH THE NORTH LEG ONLY, $\\sqrt{16^2 + 21^2}$; the choice $20$ km is STOPPING AT AC.)',
    },
    {
      q: 'Starting at buoy $A$, a kayaker paddles $15$ km east, then $20$ km north to a raft at $C$. Leaving the raft, she paddles $60$ km perpendicular to $\\overline{AC}$ and lands at $D$. Find the distance from $D$ to buoy $A$.',
      fig: {
        view: [-36, -3, 18.5, 59],
        alt: 'Route east then north from A to C, then a long leg perpendicular to AC ending at D',
        elems: [
          { t: 'seg', a: [0, 0], b: [15, 0] },
          { t: 'seg', a: [15, 0], b: [15, 20] },
          { t: 'seg', a: [0, 0], b: [15, 20], dash: true },
          { t: 'seg', a: [15, 20], b: [-33, 56] },
          { t: 'seg', a: [0, 0], b: [-33, 56], dash: true },
          { t: 'right', at: [15, 0], from: [0, 0], to: [15, 20], s: 1.8 },
          { t: 'right', at: [15, 20], from: [0, 0], to: [-33, 56], s: 1.8 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [15, 20], label: 'C', dx: 14, dy: 0 },
          { t: 'point', p: [-33, 56], label: 'D', dx: 0, dy: -10 },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [15, 10], text: '20', dx: 12, dy: 0 },
          { t: 'label', p: [-9, 38], text: '60', dx: 12, dy: 6 },
          { t: 'label', p: [-16.5, 28], text: '?', dx: -12, dy: 0 },
        ],
      },
      choices: ['$85$ km', '$20\\sqrt{10}$ km', '$25$ km', '$65$ km'],
      answer: 3,
      solution:
        'First leg of the computation: $AC = \\sqrt{15^2 + 20^2} = \\sqrt{625} = 25$, a $3$-$4$-$5$ scaled by $5$. Then $\\overline{CD} \\perp \\overline{AC}$ makes triangle $ACD$ right with legs $25$ and $60$, so $AD = \\sqrt{625 + 3600} = \\sqrt{4225} = 65$ ✓ — and $25$-$60$-$65$ is $5 \\times (5$-$12$-$13)$, a second family in the same trip. Check a second, independent way with coordinates: the unit direction along $AC$ is $(0.6, 0.8)$; a quarter turn gives $(-0.8, 0.6)$, so $D = (15 - 48,\\ 20 + 36) = (-33, 56)$ and $AD = \\sqrt{1089 + 3136} = \\sqrt{4225} = 65$ ✓. (The choice $85$ km is ADDING CD TO AC; the choice $20\\sqrt{10}$ km is COMBINING CD WITH THE NORTH LEG ONLY, $\\sqrt{20^2 + 60^2}$; the choice $25$ km is STOPPING AT AC.)',
    },
  ],

  // slot 4 — 30-60-90 from the longer leg, find the perimeter.
  // Lane: 18 + 6√3 / 27 + 9√3 / 9 + 3√3.
  [
    {
      q: 'The longer leg of a $30$-$60$-$90$ triangle is $6\\sqrt{3}$. What is the perimeter of the triangle?',
      choices: ['$18 + 6\\sqrt{3}$', '$6 + 18\\sqrt{3}$', '$18\\sqrt{3}$', '$18 + 6\\sqrt{2}$'],
      answer: 0,
      solution:
        'Divide the long leg by $\\sqrt{3}$ to reach home base: the short leg is $\\frac{6\\sqrt{3}}{\\sqrt{3}} = 6$, and the hypotenuse is twice the short leg, $12$. Perimeter: $6\\sqrt{3} + 6 + 12 = 18 + 6\\sqrt{3} \\approx 28.4$ ✓. Check a second, independent way with the Pythagorean Theorem: $6^2 + (6\\sqrt{3})^2 = 36 + 108 = 144 = 12^2$ ✓, so these three sides genuinely close up a right triangle before being summed. (The choice $6 + 18\\sqrt{3}$ is DOUBLING THE LONG LEG FOR THE HYPOTENUSE — the doubling rule belongs to the short leg only; the choice $18\\sqrt{3}$ is TRIPLING ONE SIDE, an equilateral reflex; the choice $18 + 6\\sqrt{2}$ is WRITING ROOT TWO WHERE ROOT THREE BELONGS.)',
    },
    {
      q: 'In a $30$-$60$-$90$ triangle, the side opposite the $60^\\circ$ angle measures $9\\sqrt{3}$. Find the perimeter of the triangle.',
      choices: ['$9 + 27\\sqrt{3}$', '$27 + 9\\sqrt{3}$', '$27\\sqrt{3}$', '$27 + 9\\sqrt{2}$'],
      answer: 1,
      solution:
        'The side opposite $60^\\circ$ is the longer leg, so the short leg is $\\frac{9\\sqrt{3}}{\\sqrt{3}} = 9$ and the hypotenuse is $2 \\times 9 = 18$. Perimeter: $9\\sqrt{3} + 9 + 18 = 27 + 9\\sqrt{3} \\approx 42.6$ ✓. Check a second, independent way with the Pythagorean Theorem: $9^2 + (9\\sqrt{3})^2 = 81 + 243 = 324 = 18^2$ ✓ — the three sides pass the right-triangle test, so the sum stands. (The choice $9 + 27\\sqrt{3}$ is DOUBLING THE LONG LEG FOR THE HYPOTENUSE; the choice $27\\sqrt{3}$ is TRIPLING ONE SIDE, treating a scalene triangle as equilateral; the choice $27 + 9\\sqrt{2}$ is WRITING ROOT TWO WHERE ROOT THREE BELONGS.)',
    },
    {
      q: 'A $30$-$60$-$90$ triangle has its longer leg equal to $3\\sqrt{3}$. What is its perimeter?',
      choices: ['$3 + 9\\sqrt{3}$', '$9\\sqrt{3}$', '$9 + 3\\sqrt{3}$', '$9 + 3\\sqrt{2}$'],
      answer: 2,
      solution:
        'From the long leg, divide by $\\sqrt{3}$: the short leg is $\\frac{3\\sqrt{3}}{\\sqrt{3}} = 3$, and the hypotenuse doubles that to $6$. Perimeter: $3\\sqrt{3} + 3 + 6 = 9 + 3\\sqrt{3} \\approx 14.2$ ✓. Check a second, independent way with the Pythagorean Theorem: $3^2 + (3\\sqrt{3})^2 = 9 + 27 = 36 = 6^2$ ✓, confirming the side trio before adding. (The choice $3 + 9\\sqrt{3}$ is DOUBLING THE LONG LEG FOR THE HYPOTENUSE; the choice $9\\sqrt{3}$ is TRIPLING ONE SIDE; the choice $9 + 3\\sqrt{2}$ is WRITING ROOT TWO WHERE ROOT THREE BELONGS.)',
    },
  ],

  // slot 5 — decimal sides hiding a halved triple; find the area.
  // Lane: 45 / 7.5 / 67.5.
  [
    {
      q: 'A triangular garden bed has sides $4.5$ m, $20$ m, and $20.5$ m. What is its area in square meters?',
      choices: ['$90$', '$45$', '$180$', '$22.5$'],
      answer: 1,
      solution:
        'Heron: $s = \\frac{4.5 + 20 + 20.5}{2} = 22.5$, with differences $18$, $2.5$, $2$ (check: $18 + 2.5 + 2 = 22.5$ ✓). Area $= \\sqrt{22.5 \\times 18 \\times 2.5 \\times 2} = \\sqrt{2025} = 45$ ✓. Check a second, independent way with the right-angle shortcut: doubling every side gives $9$, $40$, $41$ — a Pythagorean triple — so the original triangle is right with legs $4.5$ and $20$, and $\\frac{1}{2}(4.5)(20) = 45$ ✓. Triples scale by any factor, one half included. (The choice $90$ is DROPPING THE ONE-HALF; the choice $180$ is FORGETTING TO SCALE THE AREA BACK DOWN — it is the area of the doubled $9$-$40$-$41$ triangle, four times too big; the choice $22.5$ is STOPPING AT THE SEMIPERIMETER.)',
    },
    {
      q: 'A sail for a model boat is a triangle with sides $2.5$, $6$, and $6.5$ decimeters. How many square decimeters of fabric does it use?',
      choices: ['$15$', '$30$', '$7.5$', '$8.125$'],
      answer: 2,
      solution:
        'Heron: $s = \\frac{2.5 + 6 + 6.5}{2} = 7.5$, with differences $5$, $1.5$, $1$ (check: $5 + 1.5 + 1 = 7.5$ ✓). Area $= \\sqrt{7.5 \\times 5 \\times 1.5 \\times 1} = \\sqrt{56.25} = 7.5$ ✓. Check a second, independent way with the right-angle shortcut: doubling the sides gives $5$-$12$-$13$, so the sail is a right triangle with legs $2.5$ and $6$, and $\\frac{1}{2}(2.5)(6) = 7.5$ ✓. (The choice $15$ is DROPPING THE ONE-HALF; the choice $30$ is FORGETTING TO SCALE THE AREA BACK DOWN, the doubled triangle’s $\\frac{1}{2}(5)(12)$; the choice $8.125$ is USING THE HYPOTENUSE AS A LEG, $\\frac{1}{2}(2.5)(6.5)$.)',
    },
    {
      q: 'What is the area of a triangle whose sides measure $7.5$, $18$, and $19.5$?',
      choices: ['$135$', '$270$', '$22.5$', '$67.5$'],
      answer: 3,
      solution:
        'Heron: $s = \\frac{7.5 + 18 + 19.5}{2} = 22.5$, with differences $15$, $4.5$, $3$ (check: $15 + 4.5 + 3 = 22.5$ ✓). Area $= \\sqrt{22.5 \\times 15 \\times 4.5 \\times 3} = \\sqrt{4556.25} = 67.5$ ✓. Check a second, independent way with the right-angle shortcut: doubling gives $15$, $36$, $39$, which is $3 \\times (5$-$12$-$13)$ — a scaled triple — so the original is right with legs $7.5$ and $18$, and $\\frac{1}{2}(7.5)(18) = 67.5$ ✓. (The choice $135$ is DROPPING THE ONE-HALF; the choice $270$ is FORGETTING TO SCALE THE AREA BACK DOWN, the doubled triangle’s $\\frac{1}{2}(15)(36)$; the choice $22.5$ is STOPPING AT THE SEMIPERIMETER.)',
    },
  ],

  // slot 6 — hypotenuse pieces from the altitude; perimeter of the whole
  // triangle. Lane: 120 / 180 / 240.
  [
    {
      q: 'The altitude to the hypotenuse of a right triangle splits the hypotenuse into segments of length $18$ and $32$. What is the perimeter of the (whole) triangle?',
      fig: {
        view: [-2.5, -3.5, 53, 27],
        alt: 'Right triangle with altitude to the hypotenuse dividing it into pieces 18 and 32',
        elems: [
          { t: 'poly', pts: [[0, 0], [50, 0], [18, 24]], fill: false },
          { t: 'seg', a: [18, 24], b: [18, 0], dash: true },
          { t: 'right', at: [18, 24], from: [0, 0], to: [50, 0], s: 1.2 },
          { t: 'right', at: [18, 0], from: [50, 0], to: [18, 24], s: 1.2 },
          { t: 'label', p: [9, 0], text: '18', dx: 0, dy: 14 },
          { t: 'label', p: [34, 0], text: '32', dx: 0, dy: 14 },
          { t: 'label', p: [9, 12], text: '?', dx: -12, dy: -4 },
          { t: 'label', p: [34, 12], text: '?', dx: 12, dy: -4 },
        ],
      },
      choices: ['$120$', '$50$', '$70$', '$94$'],
      answer: 0,
      solution:
        'The hypotenuse is $18 + 32 = 50$. The altitude is the geometric mean of the pieces: $\\sqrt{18 \\times 32} = \\sqrt{576} = 24$. Pythagoras in each small triangle gives the legs: $\\sqrt{18^2 + 24^2} = \\sqrt{900} = 30$ and $\\sqrt{32^2 + 24^2} = \\sqrt{1600} = 40$. Perimeter: $30 + 40 + 50 = 120$ ✓. Check a second, independent way with the leg rule, no altitude required: each leg is $\\sqrt{\\text{adjacent piece} \\times \\text{whole hypotenuse}}$, so $\\sqrt{18 \\times 50} = 30$ ✓ and $\\sqrt{32 \\times 50} = 40$ ✓ — and $30$-$40$-$50$ is $10 \\times (3$-$4$-$5)$ ✓. (The choice $50$ is STOPPING AT THE HYPOTENUSE; the choice $70$ is LEAVING OUT THE HYPOTENUSE; the choice $94$ is SWAPPING THE ALTITUDE IN FOR THE HYPOTENUSE, $30 + 40 + 24$.)',
    },
    {
      q: 'In a right triangle, the altitude drawn to the hypotenuse divides it into pieces of length $27$ and $48$. Find the perimeter of the whole triangle.',
      fig: {
        view: [-3, -4.5, 79, 39],
        alt: 'Right triangle with altitude to the hypotenuse dividing it into pieces 27 and 48',
        elems: [
          { t: 'poly', pts: [[0, 0], [75, 0], [27, 36]], fill: false },
          { t: 'seg', a: [27, 36], b: [27, 0], dash: true },
          { t: 'right', at: [27, 36], from: [0, 0], to: [75, 0], s: 1.8 },
          { t: 'right', at: [27, 0], from: [75, 0], to: [27, 36], s: 1.8 },
          { t: 'label', p: [13.5, 0], text: '27', dx: 0, dy: 14 },
          { t: 'label', p: [51, 0], text: '48', dx: 0, dy: 14 },
          { t: 'label', p: [13.5, 18], text: '?', dx: -12, dy: -4 },
          { t: 'label', p: [51, 18], text: '?', dx: 12, dy: -4 },
        ],
      },
      choices: ['$75$', '$180$', '$105$', '$141$'],
      answer: 1,
      solution:
        'The whole hypotenuse is $27 + 48 = 75$, and the altitude is $\\sqrt{27 \\times 48} = \\sqrt{1296} = 36$. The legs follow from Pythagoras in the two small triangles: $\\sqrt{27^2 + 36^2} = \\sqrt{2025} = 45$ and $\\sqrt{48^2 + 36^2} = \\sqrt{3600} = 60$. Perimeter: $45 + 60 + 75 = 180$ ✓. Check a second, independent way with the leg rule: $\\sqrt{27 \\times 75} = \\sqrt{2025} = 45$ ✓ and $\\sqrt{48 \\times 75} = \\sqrt{3600} = 60$ ✓, and $45$-$60$-$75$ is $15 \\times (3$-$4$-$5)$ ✓. (The choice $75$ is STOPPING AT THE HYPOTENUSE; the choice $105$ is LEAVING OUT THE HYPOTENUSE; the choice $141$ is SWAPPING THE ALTITUDE IN FOR THE HYPOTENUSE, $45 + 60 + 36$.)',
    },
    {
      q: 'The altitude to the hypotenuse of a right triangle cuts the hypotenuse into lengths $36$ and $64$. What is the perimeter of the full triangle?',
      fig: {
        view: [-4, -6, 105, 51],
        alt: 'Right triangle with altitude to the hypotenuse dividing it into pieces 36 and 64',
        elems: [
          { t: 'poly', pts: [[0, 0], [100, 0], [36, 48]], fill: false },
          { t: 'seg', a: [36, 48], b: [36, 0], dash: true },
          { t: 'right', at: [36, 48], from: [0, 0], to: [100, 0], s: 2.4 },
          { t: 'right', at: [36, 0], from: [100, 0], to: [36, 48], s: 2.4 },
          { t: 'label', p: [18, 0], text: '36', dx: 0, dy: 14 },
          { t: 'label', p: [68, 0], text: '64', dx: 0, dy: 14 },
          { t: 'label', p: [18, 24], text: '?', dx: -12, dy: -4 },
          { t: 'label', p: [68, 24], text: '?', dx: 12, dy: -4 },
        ],
      },
      choices: ['$100$', '$140$', '$188$', '$240$'],
      answer: 3,
      solution:
        'The hypotenuse totals $36 + 64 = 100$, and the altitude is $\\sqrt{36 \\times 64} = \\sqrt{2304} = 48$. Pythagoras in each half: $\\sqrt{36^2 + 48^2} = \\sqrt{3600} = 60$ and $\\sqrt{64^2 + 48^2} = \\sqrt{6400} = 80$. Perimeter: $60 + 80 + 100 = 240$ ✓. Check a second, independent way with the leg rule: $\\sqrt{36 \\times 100} = 60$ ✓ and $\\sqrt{64 \\times 100} = 80$ ✓ — a $60$-$80$-$100$ triangle, which is $20 \\times (3$-$4$-$5)$ ✓. (The choice $100$ is STOPPING AT THE HYPOTENUSE; the choice $140$ is LEAVING OUT THE HYPOTENUSE; the choice $188$ is SWAPPING THE ALTITUDE IN FOR THE HYPOTENUSE, $60 + 80 + 48$.)',
    },
  ],

  // slot 7 — Heron on a long, thin scalene triangle; find the area.
  // Lane: 90 / 390 / 252.
  [
    {
      q: 'Find the area of the triangle whose sides measure $4$, $51$, and $53$.',
      choices: ['$90$', '$54$', '$102$', '$8100$'],
      answer: 0,
      solution:
        'Heron: $s = \\frac{4 + 51 + 53}{2} = 54$, with differences $50$, $3$, $1$ (check: $50 + 3 + 1 = 54$ ✓). Area $= \\sqrt{54 \\times 50 \\times 3 \\times 1} = \\sqrt{8100} = 90$ ✓. Check a second, independent way with the factored form $16K^2 = ((a+b)^2 - c^2)(c^2 - (a-b)^2)$, which needs no semiperimeter at all: with $a = 4$, $b = 51$, $c = 53$, difference of squares gives $55^2 - 53^2 = 2 \\times 108 = 216$ and $53^2 - 47^2 = 6 \\times 100 = 600$, so $16K^2 = 216 \\times 600 = 129600$, $K^2 = 8100$, and $K = 90$ ✓. (The choice $54$ is STOPPING AT THE SEMIPERIMETER; the choice $102$ is TREATING THE TWO SHORT SIDES AS PERPENDICULAR LEGS, $\\frac{1}{2}(4)(51)$; the choice $8100$ is FORGETTING THE FINAL SQUARE ROOT.)',
    },
    {
      q: 'A triangular plot of farmland has sides $13$ m, $68$ m, and $75$ m. What is its area in square meters?',
      choices: ['$78$', '$442$', '$390$', '$152100$'],
      answer: 2,
      solution:
        'Heron: $s = \\frac{13 + 68 + 75}{2} = 78$, with differences $65$, $10$, $3$ (check: $65 + 10 + 3 = 78$ ✓). Area $= \\sqrt{78 \\times 65 \\times 10 \\times 3} = \\sqrt{152100} = 390$ ✓. Check a second, independent way with the factored form $16K^2 = ((a+b)^2 - c^2)(c^2 - (a-b)^2)$: difference of squares gives $81^2 - 75^2 = 6 \\times 156 = 936$ and $75^2 - 55^2 = 20 \\times 130 = 2600$, so $16K^2 = 936 \\times 2600 = 2433600$, $K^2 = 152100$, and $K = 390$ ✓ — two routes, one area. (The choice $78$ is STOPPING AT THE SEMIPERIMETER; the choice $442$ is TREATING THE TWO SHORT SIDES AS PERPENDICULAR LEGS, $\\frac{1}{2}(13)(68)$; the choice $152100$ is FORGETTING THE FINAL SQUARE ROOT.)',
    },
    {
      q: 'A triangle has sides $13$, $40$, and $45$. Find its exact area.',
      choices: ['$49$', '$260$', '$63504$', '$252$'],
      answer: 3,
      solution:
        'Heron: $s = \\frac{13 + 40 + 45}{2} = 49$, with differences $36$, $9$, $4$ (check: $36 + 9 + 4 = 49$ ✓). Area $= \\sqrt{49 \\times 36 \\times 9 \\times 4} = 7 \\times 6 \\times 3 \\times 2 = 252$ ✓ — every factor is a perfect square, so the root peels apart. Check a second, independent way with the factored form $16K^2 = ((a+b)^2 - c^2)(c^2 - (a-b)^2)$: difference of squares gives $53^2 - 45^2 = 8 \\times 98 = 784 = 28^2$ and $45^2 - 27^2 = 18 \\times 72 = 1296 = 36^2$, so $4K = 28 \\times 36 = 1008$ and $K = 252$ ✓. (The choice $49$ is STOPPING AT THE SEMIPERIMETER; the choice $260$ is TREATING THE TWO SHORT SIDES AS PERPENDICULAR LEGS, $\\frac{1}{2}(13)(40)$; the choice $63504$ is FORGETTING THE FINAL SQUARE ROOT.)',
    },
  ],

  // slot 8 — distance between two coordinate points. Lane: 41 / 13 / 25.
  [
    {
      q: 'How far is the point $(40, 9)$ from the origin in the coordinate plane?',
      choices: ['$49$', '$41$', '$\\sqrt{1519}$', '$40$'],
      answer: 1,
      solution:
        'The horizontal change is $40$ and the vertical change is $9$ — legs of a right triangle whose hypotenuse is the distance: $\\sqrt{40^2 + 9^2} = \\sqrt{1600 + 81} = \\sqrt{1681} = 41$ ✓. Check a second, independent way by naming the family: $9$-$40$-$41$ is a genuine whole-number triple, confirmed by difference of squares with no big arithmetic: $41^2 - 40^2 = (41 - 40)(41 + 40) = 81 = 9^2$ ✓. (The choice $49$ is ADDING THE TWO CHANGES INSTEAD OF THEIR SQUARES; the choice $\\sqrt{1519}$ is SUBTRACTING THE SQUARES INSTEAD OF ADDING; the choice $40$ is STOPPING AT THE HORIZONTAL CHANGE.)',
    },
    {
      q: 'What is the distance between the points $(3, -2)$ and $(15, 3)$ in the coordinate plane?',
      choices: ['$13$', '$17$', '$\\sqrt{119}$', '$12$'],
      answer: 0,
      solution:
        'The horizontal change is $15 - 3 = 12$, and the vertical change is $3 - (-2) = 5$ — subtracting the negative stretches the climb from $-2$ all the way up to $3$. The distance is $\\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$ ✓. Check a second, independent way by naming the family: $5$-$12$-$13$ is a famous triple, and difference of squares confirms it: $13^2 - 12^2 = (1)(25) = 25 = 5^2$ ✓. (The choice $17$ is ADDING THE TWO CHANGES INSTEAD OF THEIR SQUARES; the choice $\\sqrt{119}$ is SUBTRACTING THE SQUARES INSTEAD OF ADDING; the choice $12$ is STOPPING AT THE HORIZONTAL CHANGE.)',
    },
    {
      q: 'Points $P = (2, 1)$ and $Q = (26, 8)$ are plotted in the coordinate plane. What is the length of $\\overline{PQ}$?',
      choices: ['$31$', '$\\sqrt{527}$', '$25$', '$24$'],
      answer: 2,
      solution:
        'The horizontal change is $26 - 2 = 24$ and the vertical change is $8 - 1 = 7$, so $PQ = \\sqrt{24^2 + 7^2} = \\sqrt{576 + 49} = \\sqrt{625} = 25$ ✓. Check a second, independent way by naming the family: $7$-$24$-$25$ is a whole-number triple, and difference of squares confirms it instantly: $25^2 - 24^2 = (1)(49) = 49 = 7^2$ ✓ — the distance formula is the Pythagorean Theorem in coordinate clothing. (The choice $31$ is ADDING THE TWO CHANGES INSTEAD OF THEIR SQUARES; the choice $\\sqrt{527}$ is SUBTRACTING THE SQUARES INSTEAD OF ADDING; the choice $24$ is STOPPING AT THE HORIZONTAL CHANGE.)',
    },
  ],

  // slot 9 — square diagonal given, find the area (= d^2/2).
  // Lane: 98 / 200 / 128.
  [
    {
      q: 'A square napkin is folded along its diagonal, and the fold measures $14$ inches. What is the area of the unfolded napkin in square inches?',
      choices: ['$196$', '$49$', '$98\\sqrt{2}$', '$98$'],
      answer: 3,
      solution:
        'If the side is $\\ell$, the diagonal of a square is $\\ell\\sqrt{2}$, so $\\ell = \\frac{14}{\\sqrt{2}} = 7\\sqrt{2}$ and the area is $\\ell^2 = 49 \\times 2 = 98$ ✓. Check a second, independent way without ever finding the side: squaring $\\ell\\sqrt{2} = 14$ gives $2\\ell^2 = 196$, so $\\ell^2 = 98$ directly ✓ — a square’s area is always half the square of its diagonal. (The choice $196$ is SQUARING THE DIAGONAL WITHOUT HALVING; the choice $49$ is SQUARING HALF THE DIAGONAL; the choice $98\\sqrt{2}$ is MULTIPLYING THE SIDE BY THE DIAGONAL, $7\\sqrt{2} \\times 14$.)',
    },
    {
      q: 'A square courtyard has a straight diagonal path of length $20$ m. What is the area of the courtyard in square meters?',
      choices: ['$400$', '$200$', '$100$', '$200\\sqrt{2}$'],
      answer: 1,
      solution:
        'With side $\\ell$, the diagonal is $\\ell\\sqrt{2} = 20$, so $\\ell = \\frac{20}{\\sqrt{2}} = 10\\sqrt{2}$ and the area is $\\ell^2 = 100 \\times 2 = 200$ ✓. Check a second, independent way with no radicals handled at all: squaring the diagonal equation gives $2\\ell^2 = 400$, so $\\ell^2 = 200$ directly ✓. (The choice $400$ is SQUARING THE DIAGONAL WITHOUT HALVING; the choice $100$ is SQUARING HALF THE DIAGONAL; the choice $200\\sqrt{2}$ is MULTIPLYING THE SIDE BY THE DIAGONAL, $10\\sqrt{2} \\times 20$.)',
    },
    {
      q: 'The diagonal of a square is $16$. Find the square’s area.',
      choices: ['$128$', '$256$', '$64$', '$128\\sqrt{2}$'],
      answer: 0,
      solution:
        'With side $\\ell$, the diagonal is $\\ell\\sqrt{2} = 16$, so $\\ell = \\frac{16}{\\sqrt{2}} = 8\\sqrt{2}$ and the area is $\\ell^2 = 64 \\times 2 = 128$ ✓. Check a second, independent way by squaring first: $2\\ell^2 = 256$, so $\\ell^2 = 128$ with the side never computed ✓ — half the diagonal squared, every time. (The choice $256$ is SQUARING THE DIAGONAL WITHOUT HALVING; the choice $64$ is SQUARING HALF THE DIAGONAL; the choice $128\\sqrt{2}$ is MULTIPLYING THE SIDE BY THE DIAGONAL, $8\\sqrt{2} \\times 16$.)',
    },
  ],

  // slot 10 — area of an equilateral triangle from its side.
  // Lane: 9√3 / 25√3 / 36√3.
  [
    {
      q: 'What is the exact area of an equilateral triangle with side length $6$?',
      choices: ['$18$', '$18\\sqrt{3}$', '$9\\sqrt{3}$', '$9$'],
      answer: 2,
      solution:
        'The altitude splits the triangle into two $30$-$60$-$90$ halves: half the base is $3$, so the altitude is $3\\sqrt{3}$. Area $= \\frac{1}{2}(6)(3\\sqrt{3}) = 9\\sqrt{3} \\approx 15.6$ ✓. Check a second, independent way with the formula $\\frac{s^2\\sqrt{3}}{4}$: $\\frac{36\\sqrt{3}}{4} = 9\\sqrt{3}$ ✓ — the formula and the altitude route must always agree, because the formula is the altitude route done once and for all. (The choice $9$ is DROPPING THE ROOT THREE; the choice $18$ is TREATING THE FULL SIDE AS THE HEIGHT, $\\frac{1}{2}(6)(6)$; the choice $18\\sqrt{3}$ is FORGETTING THE ONE-HALF, $(6)(3\\sqrt{3})$.)',
    },
    {
      q: 'A window pane is an equilateral triangle with side length $10$. What is its exact area?',
      choices: ['$50$', '$25$', '$50\\sqrt{3}$', '$25\\sqrt{3}$'],
      answer: 3,
      solution:
        'The altitude makes two $30$-$60$-$90$ triangles: half the base is $5$, so the altitude is $5\\sqrt{3}$. Area $= \\frac{1}{2}(10)(5\\sqrt{3}) = 25\\sqrt{3} \\approx 43.3$ ✓. Check a second, independent way with the formula $\\frac{s^2\\sqrt{3}}{4}$: $\\frac{100\\sqrt{3}}{4} = 25\\sqrt{3}$ ✓. (The choice $25$ is DROPPING THE ROOT THREE; the choice $50$ is TREATING THE FULL SIDE AS THE HEIGHT, $\\frac{1}{2}(10)(10)$; the choice $50\\sqrt{3}$ is FORGETTING THE ONE-HALF, $(10)(5\\sqrt{3})$.)',
    },
    {
      q: 'Find the exact area of an equilateral triangle whose sides each measure $12$.',
      choices: ['$72$', '$36\\sqrt{3}$', '$36$', '$72\\sqrt{3}$'],
      answer: 1,
      solution:
        'The altitude cuts the triangle into two $30$-$60$-$90$ halves: half the base is $6$, so the altitude is $6\\sqrt{3}$. Area $= \\frac{1}{2}(12)(6\\sqrt{3}) = 36\\sqrt{3} \\approx 62.4$ ✓. Check a second, independent way with the formula $\\frac{s^2\\sqrt{3}}{4}$: $\\frac{144\\sqrt{3}}{4} = 36\\sqrt{3}$ ✓ — same answer, no altitude in sight. (The choice $36$ is DROPPING THE ROOT THREE; the choice $72$ is TREATING THE FULL SIDE AS THE HEIGHT, $\\frac{1}{2}(12)(12)$; the choice $72\\sqrt{3}$ is FORGETTING THE ONE-HALF, $(12)(6\\sqrt{3})$.)',
    },
  ],

  // slot 11 — straight wire between the tops of two poles of different
  // heights. Lane: 34 / 52 / 61.
  [
    {
      q: 'Two flagpoles stand $30$ m apart on level ground. One is $11$ m tall and the other is $27$ m tall. A straight cord joins their tops. How long is the cord?',
      fig: {
        view: [-3.5, -3, 34, 30],
        alt: 'Two poles of heights 11 and 27 standing 30 apart, with a straight cord between their tops',
        elems: [
          { t: 'seg', a: [-2, 0], b: [32, 0] },
          { t: 'seg', a: [0, 0], b: [0, 11] },
          { t: 'seg', a: [30, 0], b: [30, 27] },
          { t: 'seg', a: [0, 11], b: [30, 27], dash: true },
          { t: 'seg', a: [0, 11], b: [30, 11], dash: true },
          { t: 'right', at: [30, 11], from: [0, 11], to: [30, 27], s: 1.6 },
          { t: 'label', p: [0, 5.5], text: '11', dx: -14, dy: 0 },
          { t: 'label', p: [30, 13.5], text: '27', dx: 14, dy: 0 },
          { t: 'label', p: [15, 0], text: '30', dx: 0, dy: 14 },
          { t: 'label', p: [15, 19], text: '?', dx: 0, dy: -10 },
        ],
      },
      choices: ['$34$ m', '$46$ m', '$30$ m', '$\\sqrt{1629}$ m'],
      answer: 0,
      solution:
        'Slide a horizontal line across from the shorter top: it meets the taller pole $11$ m up, leaving a vertical gap of $27 - 11 = 16$ m. The cord is the hypotenuse of a right triangle with legs $30$ and $16$: $\\sqrt{900 + 256} = \\sqrt{1156} = 34$ m ✓. Check a second, independent way by factoring out the triple: $30$ and $16$ are $2 \\times 15$ and $2 \\times 8$ — the $8$-$15$-$17$ family scaled by $2$ — so the hypotenuse is $2 \\times 17 = 34$ ✓, no squaring needed. (The choice $46$ m is ADDING THE TWO LEGS, $30 + 16$; the choice $30$ m is STOPPING AT THE HORIZONTAL DISTANCE; the choice $\\sqrt{1629}$ m is USING THE TALLER POLE’S FULL HEIGHT AS THE VERTICAL LEG, $\\sqrt{30^2 + 27^2}$.)',
    },
    {
      q: 'Two radio masts rise from level ground $48$ m apart, one $15$ m tall and the other $35$ m tall. What length of straight cable is needed to connect their tops?',
      fig: {
        view: [-5, -4, 53, 39],
        alt: 'Two masts of heights 15 and 35 standing 48 apart, with a straight cable between their tops',
        elems: [
          { t: 'seg', a: [-3, 0], b: [51, 0] },
          { t: 'seg', a: [0, 0], b: [0, 15] },
          { t: 'seg', a: [48, 0], b: [48, 35] },
          { t: 'seg', a: [0, 15], b: [48, 35], dash: true },
          { t: 'seg', a: [0, 15], b: [48, 15], dash: true },
          { t: 'right', at: [48, 15], from: [0, 15], to: [48, 35], s: 2 },
          { t: 'label', p: [0, 7.5], text: '15', dx: -14, dy: 0 },
          { t: 'label', p: [48, 25], text: '35', dx: 14, dy: 0 },
          { t: 'label', p: [24, 0], text: '48', dx: 0, dy: 14 },
          { t: 'label', p: [24, 25], text: '?', dx: 0, dy: -10 },
        ],
      },
      choices: ['$68$ m', '$48$ m', '$52$ m', '$\\sqrt{3529}$ m'],
      answer: 2,
      solution:
        'A horizontal line from the shorter top meets the taller mast $15$ m up, leaving a vertical gap of $35 - 15 = 20$ m. The cable is the hypotenuse of a right triangle with legs $48$ and $20$: $\\sqrt{2304 + 400} = \\sqrt{2704} = 52$ m ✓. Check a second, independent way by factoring out the triple: $48$ and $20$ are $4 \\times 12$ and $4 \\times 5$ — the $5$-$12$-$13$ family scaled by $4$ — so the hypotenuse is $4 \\times 13 = 52$ ✓. (The choice $68$ m is ADDING THE TWO LEGS, $48 + 20$; the choice $48$ m is STOPPING AT THE HORIZONTAL DISTANCE; the choice $\\sqrt{3529}$ m is USING THE TALLER MAST’S FULL HEIGHT AS THE VERTICAL LEG, $\\sqrt{48^2 + 35^2}$.)',
    },
    {
      q: 'Two lampposts stand on level ground $60$ m apart. Their heights are $8$ m and $19$ m, and a string of lights runs straight from the top of one to the top of the other. How long is the string?',
      fig: {
        view: [-6, -4.5, 66, 23],
        alt: 'Two lampposts of heights 8 and 19 standing 60 apart, with a straight string between their tops',
        elems: [
          { t: 'seg', a: [-3.5, 0], b: [63.5, 0] },
          { t: 'seg', a: [0, 0], b: [0, 8] },
          { t: 'seg', a: [60, 0], b: [60, 19] },
          { t: 'seg', a: [0, 8], b: [60, 19], dash: true },
          { t: 'seg', a: [0, 8], b: [60, 8], dash: true },
          { t: 'right', at: [60, 8], from: [0, 8], to: [60, 19], s: 2.2 },
          { t: 'label', p: [0, 4], text: '8', dx: -14, dy: 0 },
          { t: 'label', p: [60, 9.5], text: '19', dx: 14, dy: 0 },
          { t: 'label', p: [30, 0], text: '60', dx: 0, dy: 14 },
          { t: 'label', p: [30, 13.5], text: '?', dx: 0, dy: -10 },
        ],
      },
      choices: ['$71$ m', '$61$ m', '$60$ m', '$\\sqrt{3961}$ m'],
      answer: 1,
      solution:
        'A horizontal line from the shorter top meets the taller post $8$ m up, leaving a vertical gap of $19 - 8 = 11$ m. The string is the hypotenuse of a right triangle with legs $60$ and $11$: $\\sqrt{3600 + 121} = \\sqrt{3721} = 61$ m ✓. Check a second, independent way by naming the family: $11$-$60$-$61$ is a genuine whole-number triple, confirmed by difference of squares: $61^2 - 60^2 = (1)(121) = 121 = 11^2$ ✓ — the gap rectangle builds the triangle, and the triple finishes it. (The choice $71$ m is ADDING THE TWO LEGS, $60 + 11$; the choice $60$ m is STOPPING AT THE HORIZONTAL DISTANCE; the choice $\\sqrt{3961}$ m is USING THE TALLER POST’S FULL HEIGHT AS THE VERTICAL LEG, $\\sqrt{60^2 + 19^2}$.)',
    },
  ],

  // slot 12 — two isosceles triangles sharing their equal sides; the areas
  // tie. Lane: 120 / 420 / 168.
  [
    {
      q: 'Triangle $R$ has sides $17$, $17$, $16$. Triangle $S$ has sides $17$, $17$, $30$. Which triangle has the larger area?',
      choices: [
        'Triangle $R$',
        'It cannot be determined from side lengths alone',
        'They have equal areas — both $120$',
        'Triangle $S$',
      ],
      answer: 2,
      solution:
        'Heron for $R$: $s = \\frac{17+17+16}{2} = 25$, differences $8$, $8$, $9$ (check: $8 + 8 + 9 = 25$ ✓), area $= \\sqrt{25 \\times 8 \\times 8 \\times 9} = \\sqrt{14400} = 120$. Heron for $S$: $s = 32$, differences $15$, $15$, $2$, area $= \\sqrt{32 \\times 15 \\times 15 \\times 2} = \\sqrt{14400} = 120$. A tie ✓. Check a second, independent way with isosceles altitudes — both triangles are built from the $8$-$15$-$17$ triple: $R$ has half-base $8$ and height $\\sqrt{289 - 64} = 15$, giving $\\frac{1}{2}(16)(15) = 120$ ✓, while $S$ has half-base $15$ and height $\\sqrt{289 - 225} = 8$, giving $\\frac{1}{2}(30)(8) = 120$ ✓ — the two triangles simply swap the legs of the same right triangle. (The choice Triangle $R$ is BETTING ON THE TALLER TRIANGLE; the choice Triangle $S$ is BETTING ON THE WIDER BASE; the cannot-be-determined choice is FORGETTING THAT THREE SIDES PIN DOWN A TRIANGLE — SSS fixes the shape, so it fixes the area.)',
    },
    {
      q: 'Two triangular banners are cut from cloth. The first has sides $29$, $29$, $40$; the second has sides $29$, $29$, $42$. Which banner uses more cloth?',
      choices: [
        'The first banner',
        'The second banner',
        'It cannot be determined from side lengths alone',
        'They have equal areas — both $420$',
      ],
      answer: 3,
      solution:
        'Heron for the first: $s = \\frac{29+29+40}{2} = 49$, differences $20$, $20$, $9$ (check: $20 + 20 + 9 = 49$ ✓), area $= \\sqrt{49 \\times 20 \\times 20 \\times 9} = \\sqrt{176400} = 420$. Heron for the second: $s = 50$, differences $21$, $21$, $8$, area $= \\sqrt{50 \\times 21 \\times 21 \\times 8} = \\sqrt{176400} = 420$. A tie ✓. Check a second, independent way with isosceles altitudes — both banners are built from the $20$-$21$-$29$ triple: the first has half-base $20$ and height $\\sqrt{841 - 400} = 21$, giving $\\frac{1}{2}(40)(21) = 420$ ✓, while the second has half-base $21$ and height $\\sqrt{841 - 441} = 20$, giving $\\frac{1}{2}(42)(20) = 420$ ✓ — a wider base traded exactly for a shorter height. (The choice of the first banner is BETTING ON THE TALLER TRIANGLE; the choice of the second banner is BETTING ON THE WIDER BASE; the cannot-be-determined choice is FORGETTING THAT THREE SIDES PIN DOWN A TRIANGLE — SSS fixes the shape, so it fixes the area.)',
    },
    {
      q: 'Two triangular garden plots are staked out. The first has sides $25$ m, $25$ m, $14$ m; the second has sides $25$ m, $25$ m, $48$ m. Which plot has the greater area?',
      choices: [
        'They have equal areas — both $168$',
        'The first plot',
        'The second plot',
        'It cannot be determined from side lengths alone',
      ],
      answer: 0,
      solution:
        'Heron for the first: $s = \\frac{25+25+14}{2} = 32$, differences $7$, $7$, $18$ (check: $7 + 7 + 18 = 32$ ✓), area $= \\sqrt{32 \\times 7 \\times 7 \\times 18} = \\sqrt{28224} = 168$. Heron for the second: $s = 49$, differences $24$, $24$, $1$, area $= \\sqrt{49 \\times 24 \\times 24 \\times 1} = \\sqrt{28224} = 168$. A tie ✓. Check a second, independent way with isosceles altitudes — both plots are built from the $7$-$24$-$25$ triple: the first has half-base $7$ and height $\\sqrt{625 - 49} = 24$, giving $\\frac{1}{2}(14)(24) = 168$ ✓, while the second has half-base $24$ and height $\\sqrt{625 - 576} = 7$, giving $\\frac{1}{2}(48)(7) = 168$ ✓ — the same right triangle stood on its two different legs. (The choice of the first plot is BETTING ON THE TALLER TRIANGLE; the choice of the second plot is BETTING ON THE WIDER BASE; the cannot-be-determined choice is FORGETTING THAT THREE SIDES PIN DOWN A TRIANGLE — SSS fixes the shape, so it fixes the area.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 6,
  challenge,
}
