// Introduction to Geometry chapter 6 — variations for section 6.2
// (Two Special Right Triangles). All problems, figures, and solutions are
// original MathQuest content.
//
// House rules for this file:
//  - Every answer was worked twice, by two routes that do not share
//    arithmetic: the special-triangle ratio against a raw Pythagorean
//    computation, a backward division against a forward multiplication
//    check, and an area-by-legs against an area-by-altitude rebuild. The two
//    routes must agree before a key is written down.
//  - Every figure was built from its own numbers: 45-45-90 triangles are
//    drawn with genuinely equal legs, 30-60-90 triangles use the true
//    1 : sqrt(3) : 2 proportions with three-decimal coordinates (6.928 for
//    4*sqrt(3), and so on), and every right-angle and angle-arc marker was
//    checked numerically against the coordinates it sits on.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS. The traps running through this section: DOUBLING LIKE A
//    30-60-90, BORROWING THE WRONG RADICAL, DIVIDING BY THE RADICAL INSTEAD
//    OF MULTIPLYING, HALVING THE LEG BEFORE THE RADICAL, ANSWERING THE LONG
//    LEG, TRIPLING THE SHORT LEG, DOUBLING THE SIDE, WALKING THE TWO SIDES,
//    HALVING THE SIDE FIRST, STOPPING AT THE SHORT LEG, SKIPPING THE
//    HALVING, HALVING LIKE A 30-60-90, MULTIPLYING INSTEAD OF DIVIDING,
//    STOPPING AT THE HALF-BASE, DOUBLING THE LONG LEG, MULTIPLYING BY THE
//    RADICAL INSTEAD OF DIVIDING, FORGETTING THE HALF, SQUARING THE
//    HYPOTENUSE, ANSWERING A LEG, PRETENDING THE HYPOTENUSE IS A THIRD LEG,
//    TURNING BOTH LEGS INTO HYPOTENUSES, SWAPPING WHICH SIDES CARRY THE
//    RADICAL, STOPPING AT THE HALF-SIDE, and DOUBLING THE ALTITUDE.
//  - No two choices inside an item name the same value.

const s62 = [
  // s1 — 45-45-90: legs given, find the hypotenuse.
  [
    {
      q: 'A metal shelf bracket is shaped like a $45$-$45$-$90$ triangle whose two legs each measure $9$ inches, as shown. How long is the bracket’s slanted edge — the hypotenuse?',
      fig: {
        view: [-2, -2.5, 11, 10.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [0, 9]], fill: false },
          { t: 'right', at: [0, 0], from: [9, 0], to: [0, 9] },
          { t: 'tick', a: [0, 0], b: [9, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [0, 9], n: 1 },
          { t: 'angle', at: [9, 0], from: [0, 0], to: [0, 9], r: 1.8, label: '45°' },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [0, 4.5], text: '9', dx: -10, dy: 0 },
          { t: 'label', p: [4.5, 4.5], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$9\\sqrt{2}$', '$18$', '$9\\sqrt{3}$', '$\\frac{9\\sqrt{2}}{2}$'],
      answer: 0,
      solution:
        'In a $45$-$45$-$90$ triangle the hypotenuse is always leg $\\cdot \\sqrt{2}$, so the slanted edge is $9\\sqrt{2} \\approx 12.7$ inches ✓. Check a second, independent way with the Pythagorean Theorem: $\\sqrt{9^2 + 9^2} = \\sqrt{162} = \\sqrt{81 \\times 2} = 9\\sqrt{2}$ ✓ — the shortcut and the raw computation land on the same number. (The choice $18$ is DOUBLING LIKE A $30$-$60$-$90$, the rule that belongs to the other special triangle ✗; $9\\sqrt{3}$ is BORROWING THE WRONG RADICAL — $\\sqrt{3}$ never shows up in a $45$-$45$-$90$ ✗; $\\frac{9\\sqrt{2}}{2}$ is DIVIDING BY THE RADICAL INSTEAD OF MULTIPLYING, the move for going from hypotenuse back to leg ✗.)',
    },
    {
      q: 'A triangular garden flag is a $45$-$45$-$90$ triangle with the two legs each $11$ inches long, as in the figure. Find the length of the flag’s hypotenuse.',
      fig: {
        view: [-2, -2.5, 13, 12.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [0, 11]], fill: false },
          { t: 'right', at: [0, 0], from: [11, 0], to: [0, 11] },
          { t: 'tick', a: [0, 0], b: [11, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [0, 11], n: 1 },
          { t: 'angle', at: [11, 0], from: [0, 0], to: [0, 11], r: 2.2, label: '45°' },
          { t: 'label', p: [5.5, 0], text: '11', dx: 0, dy: 14 },
          { t: 'label', p: [0, 5.5], text: '11', dx: -12, dy: 0 },
          { t: 'label', p: [5.5, 5.5], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$22$', '$11\\sqrt{2}$', '$11\\sqrt{3}$', '$\\frac{11\\sqrt{2}}{2}$'],
      answer: 1,
      solution:
        'Equal legs make this a $45$-$45$-$90$ triangle, and its hypotenuse is leg $\\cdot \\sqrt{2}$: $11\\sqrt{2} \\approx 15.6$ inches ✓. Check a second, independent way from scratch: $\\sqrt{11^2 + 11^2} = \\sqrt{242} = \\sqrt{121 \\times 2} = 11\\sqrt{2}$ ✓ — Pythagoras rebuilds the same answer with no ratio memorized. (The choice $22$ is DOUBLING LIKE A $30$-$60$-$90$; doubling connects a hypotenuse to a SHORT leg, and only in the other triangle ✗; $11\\sqrt{3}$ is BORROWING THE WRONG RADICAL from the $30$-$60$-$90$ family ✗; $\\frac{11\\sqrt{2}}{2}$ is DIVIDING BY THE RADICAL INSTEAD OF MULTIPLYING — that direction turns a hypotenuse into a leg ✗.)',
    },
    {
      q: 'A cloth napkin is folded once along its crease into a $45$-$45$-$90$ triangle whose equal legs measure $13$ inches each, as shown. How long is the folded napkin’s longest edge?',
      fig: {
        view: [-4, -5, 17.5, 17],
        elems: [
          { t: 'poly', pts: [[0, 0], [13, 0], [0, 13]], fill: false },
          { t: 'right', at: [0, 0], from: [13, 0], to: [0, 13] },
          { t: 'tick', a: [0, 0], b: [13, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [0, 13], n: 1 },
          { t: 'angle', at: [13, 0], from: [0, 0], to: [0, 13], r: 2.8, label: '45°' },
          { t: 'label', p: [6.5, 0], text: '13', dx: 0, dy: 14 },
          { t: 'label', p: [0, 6.5], text: '13', dx: -12, dy: 0 },
          { t: 'label', p: [6.5, 6.5], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$13\\sqrt{3}$', '$26$', '$\\frac{13\\sqrt{2}}{2}$', '$13\\sqrt{2}$'],
      answer: 3,
      solution:
        'The longest edge is the hypotenuse of a $45$-$45$-$90$ triangle with legs $13$, so it measures $13\\sqrt{2} \\approx 18.4$ inches ✓. Check a second, independent way by squaring: $\\sqrt{13^2 + 13^2} = \\sqrt{338} = \\sqrt{169 \\times 2} = 13\\sqrt{2}$ ✓, and the answer is longer than either leg, as a hypotenuse must be ✓. (The choice $13\\sqrt{3}$ is BORROWING THE WRONG RADICAL — the $\\sqrt{3}$ lives in the $30$-$60$-$90$ ✗; $26$ is DOUBLING LIKE A $30$-$60$-$90$ ✗; $\\frac{13\\sqrt{2}}{2}$ is HALVING THE LEG BEFORE THE RADICAL, mixing the hypotenuse-to-leg move into a leg-to-hypotenuse trip ✗.)',
    },
  ],
  // s2 — 30-60-90: short leg given, find the hypotenuse.
  [
    {
      q: 'On a $30$-$60$-$90$ drafting triangle, the shortest side — the one opposite the $30^\\circ$ angle — measures $11$ cm, as shown. How long is the hypotenuse?',
      fig: {
        view: [-3, -4.5, 23, 15],
        elems: [
          { t: 'poly', pts: [[0, 0], [19.053, 0], [0, 11]], fill: false },
          { t: 'right', at: [0, 0], from: [19.053, 0], to: [0, 11] },
          { t: 'angle', at: [19.053, 0], from: [0, 0], to: [0, 11], r: 3.1, label: '30°' },
          { t: 'angle', at: [0, 11], from: [0, 0], to: [19.053, 0], r: 2.2, label: '60°' },
          { t: 'label', p: [0, 5.5], text: '11', dx: -12, dy: 0 },
          { t: 'label', p: [9.5, 5.5], text: '?', dx: 10, dy: -8 },
        ],
      },
      choices: ['$11\\sqrt{3}$', '$22$', '$11\\sqrt{2}$', '$33$'],
      answer: 1,
      solution:
        'The hypotenuse of a $30$-$60$-$90$ triangle is always exactly double the short leg: $2 \\times 11 = 22$ cm ✓. Check a second, independent way by building the whole triangle: the long leg is $11\\sqrt{3}$, and Pythagoras gives $\\sqrt{11^2 + (11\\sqrt{3})^2} = \\sqrt{121 + 363} = \\sqrt{484} = 22$ ✓ — the ratio and the theorem agree. (The choice $11\\sqrt{3}$ is ANSWERING THE LONG LEG, the side opposite $60^\\circ$ ✗; $11\\sqrt{2}$ is BORROWING THE WRONG RADICAL from the $45$-$45$-$90$ ✗; $33$ is TRIPLING THE SHORT LEG, misreading the $1 : \\sqrt{3} : 2$ ratio as if the hypotenuse were the $3$ ✗.)',
    },
    {
      q: 'A roof truss contains a $30$-$60$-$90$ triangle. The side facing the $30^\\circ$ angle is $7$ feet long, as in the figure. Find the length of the truss’s hypotenuse.',
      fig: {
        view: [-2, -2.5, 14.5, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [12.124, 0], [0, 7]], fill: false },
          { t: 'right', at: [0, 0], from: [12.124, 0], to: [0, 7] },
          { t: 'angle', at: [12.124, 0], from: [0, 0], to: [0, 7], r: 1.8, label: '30°' },
          { t: 'angle', at: [0, 7], from: [0, 0], to: [12.124, 0], r: 1.2, label: '60°' },
          { t: 'label', p: [0, 3.5], text: '7', dx: -10, dy: 0 },
          { t: 'label', p: [6.062, 3.5], text: '?', dx: 10, dy: -8 },
        ],
      },
      choices: ['$7\\sqrt{3}$', '$7\\sqrt{2}$', '$14$', '$21$'],
      answer: 2,
      solution:
        'Short leg to hypotenuse is the doubling step of the $30$-$60$-$90$: $2 \\times 7 = 14$ feet ✓. Check a second, independent way with the full side list: the long leg is $7\\sqrt{3}$, and $\\sqrt{7^2 + (7\\sqrt{3})^2} = \\sqrt{49 + 147} = \\sqrt{196} = 14$ ✓ — the triangle closes exactly. (The choice $7\\sqrt{3}$ is ANSWERING THE LONG LEG instead of the hypotenuse ✗; $7\\sqrt{2}$ is BORROWING THE WRONG RADICAL — that multiplier belongs to the $45$-$45$-$90$ ✗; $21$ is TRIPLING THE SHORT LEG, treating the ratio as $1 : \\sqrt{3} : 3$ ✗.)',
    },
    {
      q: 'The triangular side panel of a skate ramp is a $30$-$60$-$90$ triangle whose shortest side, opposite the $30^\\circ$ angle, is $9$ feet, as shown. How long is the panel’s hypotenuse?',
      fig: {
        view: [-2, -2.5, 18, 11],
        elems: [
          { t: 'poly', pts: [[0, 0], [15.588, 0], [0, 9]], fill: false },
          { t: 'right', at: [0, 0], from: [15.588, 0], to: [0, 9] },
          { t: 'angle', at: [15.588, 0], from: [0, 0], to: [0, 9], r: 2.2, label: '30°' },
          { t: 'angle', at: [0, 9], from: [0, 0], to: [15.588, 0], r: 1.5, label: '60°' },
          { t: 'label', p: [0, 4.5], text: '9', dx: -10, dy: 0 },
          { t: 'label', p: [7.794, 4.5], text: '?', dx: 10, dy: -8 },
        ],
      },
      choices: ['$9\\sqrt{3}$', '$9\\sqrt{2}$', '$27$', '$18$'],
      answer: 3,
      solution:
        'In the $1 : \\sqrt{3} : 2$ ratio the hypotenuse is the $2$, so it is double the short leg: $2 \\times 9 = 18$ feet ✓. Check a second, independent way through Pythagoras: the long leg is $9\\sqrt{3}$, and $\\sqrt{9^2 + (9\\sqrt{3})^2} = \\sqrt{81 + 243} = \\sqrt{324} = 18$ ✓. (The choice $9\\sqrt{3}$ is ANSWERING THE LONG LEG — a real side of this triangle, but not the one asked for ✗; $9\\sqrt{2}$ is BORROWING THE WRONG RADICAL from the isosceles right triangle ✗; $27$ is TRIPLING THE SHORT LEG ✗.)',
    },
  ],
  // s3 — square: side given, find the diagonal.
  [
    {
      q: 'A square ceramic tile has sides of length $8$ inches. A decorative stripe runs corner to corner along the tile’s diagonal, as shown. How long is the stripe?',
      fig: {
        view: [-1.5, -2.5, 10, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 8], [0, 8]], fill: false },
          { t: 'seg', a: [0, 0], b: [8, 8], dash: true },
          { t: 'right', at: [8, 0], from: [0, 0], to: [8, 8] },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [8, 4], text: '8', dx: 12, dy: 0 },
          { t: 'label', p: [4, 4], text: '?', dx: -12, dy: -6 },
        ],
      },
      choices: ['$8\\sqrt{2}$', '$16$', '$8\\sqrt{3}$', '$4\\sqrt{2}$'],
      answer: 0,
      solution:
        'The diagonal cuts the square into two $45$-$45$-$90$ triangles with legs $8$, so the stripe is $8\\sqrt{2} \\approx 11.3$ inches — side times $\\sqrt{2}$, every time ✓. Check a second, independent way with Pythagoras across the corner: $\\sqrt{8^2 + 8^2} = \\sqrt{128} = \\sqrt{64 \\times 2} = 8\\sqrt{2}$ ✓. (The choice $16$ is DOUBLING THE SIDE, which measures a walk along two edges, not the shortcut ✗; $8\\sqrt{3}$ is BORROWING THE WRONG RADICAL — $\\sqrt{3}$ belongs to the $30$-$60$-$90$ family, never to a square’s diagonal ✗; $4\\sqrt{2}$ is HALVING THE SIDE FIRST, as though the diagonal used half a side for its leg ✗.)',
    },
    {
      q: 'A square window pane measures $3$ feet on each side. A support brace is installed along the pane’s diagonal, as in the figure. Find the length of the brace.',
      fig: {
        view: [-1.5, -2.5, 5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [3, 3], [0, 3]], fill: false },
          { t: 'seg', a: [0, 0], b: [3, 3], dash: true },
          { t: 'right', at: [3, 0], from: [0, 0], to: [3, 3] },
          { t: 'label', p: [1.5, 0], text: '3', dx: 0, dy: 14 },
          { t: 'label', p: [3, 1.5], text: '3', dx: 12, dy: 0 },
          { t: 'label', p: [1.5, 1.5], text: '?', dx: -12, dy: -6 },
        ],
      },
      choices: ['$3\\sqrt{3}$', '$3\\sqrt{2}$', '$6$', '$\\frac{3\\sqrt{2}}{2}$'],
      answer: 1,
      solution:
        'The brace is the hypotenuse of a $45$-$45$-$90$ triangle whose legs are the $3$-foot sides, so it measures $3\\sqrt{2} \\approx 4.2$ feet ✓. Check a second, independent way by computing: $\\sqrt{3^2 + 3^2} = \\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}$ ✓ — and a diagonal should be a little longer than a side but well short of two sides, which $4.2$ is ✓. (The choice $3\\sqrt{3}$ is BORROWING THE WRONG RADICAL ✗; $6$ is DOUBLING THE SIDE — the trip around the corner, not across it ✗; $\\frac{3\\sqrt{2}}{2}$ is DIVIDING BY THE RADICAL INSTEAD OF MULTIPLYING, and a diagonal can never be shorter than a side ✗.)',
    },
    {
      q: 'A square courtyard is $10$ meters on each side. Rather than following two edges, a groundskeeper walks straight from one corner to the opposite corner along the path shown. How long is that corner-to-corner path?',
      fig: {
        view: [-1.5, -2.5, 12, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 10], [0, 10]], fill: false },
          { t: 'seg', a: [0, 0], b: [10, 10], dash: true },
          { t: 'right', at: [10, 0], from: [0, 0], to: [10, 10] },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [10, 5], text: '10', dx: 14, dy: 0 },
          { t: 'label', p: [5, 5], text: '?', dx: -12, dy: -6 },
        ],
      },
      choices: ['$20$', '$10\\sqrt{3}$', '$10\\sqrt{2}$', '$5\\sqrt{2}$'],
      answer: 2,
      solution:
        'The diagonal of a square of side $s$ is $s\\sqrt{2}$, because the diagonal and two sides form a $45$-$45$-$90$ triangle. Here that gives $10\\sqrt{2} \\approx 14.1$ meters ✓. Check a second, independent way from the theorem: $\\sqrt{10^2 + 10^2} = \\sqrt{200} = \\sqrt{100 \\times 2} = 10\\sqrt{2}$ ✓ — the shortcut saves about $5.9$ meters over the corner route. (The choice $20$ is WALKING THE TWO SIDES, the distance the groundskeeper is avoiding ✗; $10\\sqrt{3}$ is BORROWING THE WRONG RADICAL ✗; $5\\sqrt{2}$ is HALVING THE SIDE FIRST, which builds the diagonal of a quarter-courtyard instead ✗.)',
    },
  ],
  // s4 — 30-60-90: hypotenuse given, find the longer leg.
  [
    {
      q: 'A kite frame includes a $30$-$60$-$90$ triangle whose hypotenuse is a $24$-inch spar, as shown. How long is the triangle’s longer leg?',
      fig: {
        view: [-3.5, -5.5, 25, 16],
        elems: [
          { t: 'poly', pts: [[0, 0], [20.785, 0], [0, 12]], fill: false },
          { t: 'right', at: [0, 0], from: [20.785, 0], to: [0, 12] },
          { t: 'angle', at: [20.785, 0], from: [0, 0], to: [0, 12], r: 3.6, label: '30°' },
          { t: 'label', p: [10.4, 6], text: '24', dx: 10, dy: -8 },
          { t: 'label', p: [10.4, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$12$', '$24\\sqrt{3}$', '$12\\sqrt{3}$', '$12\\sqrt{2}$'],
      answer: 2,
      solution:
        'Work through home base: the short leg is half the hypotenuse, $24 \\div 2 = 12$, and the longer leg is the short leg times $\\sqrt{3}$, so it measures $12\\sqrt{3} \\approx 20.8$ inches ✓. Check a second, independent way with Pythagoras: $\\sqrt{24^2 - 12^2} = \\sqrt{576 - 144} = \\sqrt{432} = 12\\sqrt{3}$ ✓ — subtracting the short leg’s square recovers the same length. (The choice $12$ is STOPPING AT THE SHORT LEG, one step from the finish ✗; $24\\sqrt{3}$ is SKIPPING THE HALVING and hanging the $\\sqrt{3}$ on the hypotenuse itself ✗; $12\\sqrt{2}$ is BORROWING THE WRONG RADICAL from the $45$-$45$-$90$ ✗.)',
    },
    {
      q: 'A playground slide and the ground form a $30$-$60$-$90$ triangle. The slide itself — the hypotenuse — is $16$ feet long, as in the figure. How far does the triangle stretch along the ground, the longer leg?',
      fig: {
        view: [-2, -2.8, 17, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [13.856, 0], [0, 8]], fill: false },
          { t: 'right', at: [0, 0], from: [13.856, 0], to: [0, 8] },
          { t: 'angle', at: [13.856, 0], from: [0, 0], to: [0, 8], r: 2.4, label: '30°' },
          { t: 'label', p: [6.928, 4], text: '16', dx: 10, dy: -8 },
          { t: 'label', p: [6.928, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$8$', '$16\\sqrt{3}$', '$8\\sqrt{2}$', '$8\\sqrt{3}$'],
      answer: 3,
      solution:
        'Halve the hypotenuse to reach home base: the short leg is $16 \\div 2 = 8$. The ground distance is the longer leg, the short leg times $\\sqrt{3}$: $8\\sqrt{3} \\approx 13.9$ feet ✓. Check a second, independent way with the theorem: $\\sqrt{16^2 - 8^2} = \\sqrt{256 - 64} = \\sqrt{192} = \\sqrt{64 \\times 3} = 8\\sqrt{3}$ ✓. (The choice $8$ is STOPPING AT THE SHORT LEG — that is the slide’s height, not its run ✗; $16\\sqrt{3}$ is SKIPPING THE HALVING, and it is longer than the slide itself, which no leg can be ✗; $8\\sqrt{2}$ is BORROWING THE WRONG RADICAL ✗.)',
    },
    {
      q: 'A racing dinghy’s sail is a $30$-$60$-$90$ triangle whose longest side measures $20$ feet, as shown. Find the length of the sail’s longer leg.',
      fig: {
        view: [-2, -2.8, 20.5, 12.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [17.321, 0], [0, 10]], fill: false },
          { t: 'right', at: [0, 0], from: [17.321, 0], to: [0, 10] },
          { t: 'angle', at: [17.321, 0], from: [0, 0], to: [0, 10], r: 2.8, label: '30°' },
          { t: 'label', p: [8.66, 5], text: '20', dx: 10, dy: -8 },
          { t: 'label', p: [8.66, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$10\\sqrt{3}$', '$10$', '$20\\sqrt{3}$', '$10\\sqrt{2}$'],
      answer: 0,
      solution:
        'The longest side of a right triangle is the hypotenuse, so the short leg is half of it, $20 \\div 2 = 10$, and the longer leg is $10\\sqrt{3} \\approx 17.3$ feet ✓. Check a second, independent way by closing the triangle: $\\sqrt{20^2 - 10^2} = \\sqrt{400 - 100} = \\sqrt{300} = \\sqrt{100 \\times 3} = 10\\sqrt{3}$ ✓ — and $17.3$ sits properly between the short leg and the hypotenuse. (The choice $10$ is STOPPING AT THE SHORT LEG ✗; $20\\sqrt{3}$ is SKIPPING THE HALVING — the $\\sqrt{3}$ multiplies the short leg, never the hypotenuse ✗; $10\\sqrt{2}$ is BORROWING THE WRONG RADICAL from the isosceles right triangle ✗.)',
    },
  ],
  // s5 — 45-45-90: hypotenuse given, find a leg.
  [
    {
      q: 'A corner shelf fits snugly into the square corner of a room: its two equal edges run along the two walls, and its front edge — the hypotenuse — measures $14$ inches, as shown. How long is each wall edge?',
      fig: {
        view: [-2, -2.5, 12, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9.899, 0], [0, 9.899]], fill: false },
          { t: 'right', at: [0, 0], from: [9.899, 0], to: [0, 9.899] },
          { t: 'tick', a: [0, 0], b: [9.899, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [0, 9.899], n: 1 },
          { t: 'label', p: [4.95, 4.95], text: '14', dx: 12, dy: -8 },
          { t: 'label', p: [4.95, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$7$', '$14\\sqrt{2}$', '$7\\sqrt{3}$', '$7\\sqrt{2}$'],
      answer: 3,
      solution:
        'The equal edges and the square corner make a $45$-$45$-$90$ triangle, so going from hypotenuse to leg means dividing by $\\sqrt{2}$: each edge is $\\frac{14}{\\sqrt{2}} = \\frac{14\\sqrt{2}}{2} = 7\\sqrt{2} \\approx 9.9$ inches ✓. Check a second, independent way by running forward: $(7\\sqrt{2}) \\cdot \\sqrt{2} = 7 \\cdot 2 = 14$ ✓ — the candidate rebuilds the given front edge exactly. (The choice $7$ is HALVING LIKE A $30$-$60$-$90$; halving a hypotenuse produces the short leg of the OTHER special triangle ✗; $14\\sqrt{2}$ is MULTIPLYING INSTEAD OF DIVIDING, and a leg can never beat its own hypotenuse ✗; $7\\sqrt{3}$ is BORROWING THE WRONG RADICAL ✗.)',
    },
    {
      q: 'A quilt patch is an isosceles right triangle whose longest side measures $8$ centimeters, as in the figure. Find the length of each leg.',
      fig: {
        view: [-2, -2.5, 7.5, 7],
        elems: [
          { t: 'poly', pts: [[0, 0], [5.657, 0], [0, 5.657]], fill: false },
          { t: 'right', at: [0, 0], from: [5.657, 0], to: [0, 5.657] },
          { t: 'tick', a: [0, 0], b: [5.657, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [0, 5.657], n: 1 },
          { t: 'label', p: [2.828, 2.828], text: '8', dx: 12, dy: -8 },
          { t: 'label', p: [2.828, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$4$', '$4\\sqrt{2}$', '$8\\sqrt{2}$', '$4\\sqrt{3}$'],
      answer: 1,
      solution:
        'An isosceles right triangle is a $45$-$45$-$90$, so each leg is the hypotenuse divided by $\\sqrt{2}$: $\\frac{8}{\\sqrt{2}} = \\frac{8\\sqrt{2}}{2} = 4\\sqrt{2} \\approx 5.7$ cm ✓. Check a second, independent way with algebra: two equal legs $\\ell$ satisfy $\\ell^2 + \\ell^2 = 64$, so $\\ell^2 = 32$ and $\\ell = \\sqrt{32} = 4\\sqrt{2}$ ✓. (The choice $4$ is HALVING LIKE A $30$-$60$-$90$, the wrong triangle’s hypotenuse rule ✗; $8\\sqrt{2}$ is MULTIPLYING INSTEAD OF DIVIDING — that would make the leg longer than the hypotenuse ✗; $4\\sqrt{3}$ is BORROWING THE WRONG RADICAL ✗.)',
    },
    {
      q: 'A triangular gusset plate that strengthens a staircase frame is a $45$-$45$-$90$ triangle with hypotenuse $18$ centimeters, as shown. How long is each leg of the plate?',
      fig: {
        view: [-2, -2.5, 15, 14],
        elems: [
          { t: 'poly', pts: [[0, 0], [12.728, 0], [0, 12.728]], fill: false },
          { t: 'right', at: [0, 0], from: [12.728, 0], to: [0, 12.728] },
          { t: 'tick', a: [0, 0], b: [12.728, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [0, 12.728], n: 1 },
          { t: 'label', p: [6.364, 6.364], text: '18', dx: 12, dy: -8 },
          { t: 'label', p: [6.364, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$18\\sqrt{2}$', '$9$', '$9\\sqrt{2}$', '$9\\sqrt{3}$'],
      answer: 2,
      solution:
        'Going backward from the hypotenuse means dividing by $\\sqrt{2}$ and rationalizing: $\\frac{18}{\\sqrt{2}} = \\frac{18\\sqrt{2}}{2} = 9\\sqrt{2} \\approx 12.7$ cm ✓. Check a second, independent way through the leg equation: $\\ell^2 + \\ell^2 = 18^2 = 324$, so $\\ell^2 = 162$ and $\\ell = \\sqrt{81 \\times 2} = 9\\sqrt{2}$ ✓ — both routes hand back the same simplified radical. (The choice $18\\sqrt{2}$ is MULTIPLYING INSTEAD OF DIVIDING, and $18\\sqrt{2} > 18$ while a leg must be shorter than its hypotenuse ✗; $9$ is HALVING LIKE A $30$-$60$-$90$ ✗; $9\\sqrt{3}$ is BORROWING THE WRONG RADICAL ✗.)',
    },
  ],
  // s6 — equilateral triangle: side given, find the altitude.
  [
    {
      q: 'A triangular road sign is an equilateral triangle with sides of length $12$ inches. What is the height of the sign — the length of the dashed altitude shown?',
      fig: {
        view: [-1.5, -2.5, 13.5, 12.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [6, 10.392]], fill: false },
          { t: 'seg', a: [6, 10.392], b: [6, 0], dash: true },
          { t: 'right', at: [6, 0], from: [12, 0], to: [6, 10.392] },
          { t: 'label', p: [3, 5.196], text: '12', dx: -12, dy: -6 },
          { t: 'label', p: [9, 5.196], text: '12', dx: 12, dy: -6 },
          { t: 'label', p: [6, 5.196], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$6$', '$6\\sqrt{3}$', '$6\\sqrt{2}$', '$12\\sqrt{3}$'],
      answer: 1,
      solution:
        'The altitude splits the sign into two $30$-$60$-$90$ triangles: hypotenuse $12$ (a full side), short leg $6$ (half the base), and the altitude as the long leg, $6\\sqrt{3} \\approx 10.4$ inches ✓. Check a second, independent way with Pythagoras in one half: $\\sqrt{12^2 - 6^2} = \\sqrt{144 - 36} = \\sqrt{108} = \\sqrt{36 \\times 3} = 6\\sqrt{3}$ ✓ — the shortcut $\\frac{s}{2}\\sqrt{3}$ and the raw subtraction agree. (The choice $6$ is STOPPING AT THE HALF-BASE, the short leg rather than the altitude ✗; $6\\sqrt{2}$ is BORROWING THE WRONG RADICAL — equilateral triangles hide $30$-$60$-$90$s, not $45$-$45$-$90$s ✗; $12\\sqrt{3}$ is SKIPPING THE HALVING and multiplying the whole side by $\\sqrt{3}$ ✗.)',
    },
    {
      q: 'A stained-glass window piece is an equilateral triangle with $14$-cm sides. Find the length of its altitude, drawn as the dashed segment in the figure.',
      fig: {
        view: [-1.5, -2.5, 15.5, 14],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [7, 12.124]], fill: false },
          { t: 'seg', a: [7, 12.124], b: [7, 0], dash: true },
          { t: 'right', at: [7, 0], from: [14, 0], to: [7, 12.124] },
          { t: 'label', p: [3.5, 6.062], text: '14', dx: -12, dy: -6 },
          { t: 'label', p: [10.5, 6.062], text: '14', dx: 12, dy: -6 },
          { t: 'label', p: [7, 6.062], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$7\\sqrt{3}$', '$7$', '$14\\sqrt{3}$', '$7\\sqrt{2}$'],
      answer: 0,
      solution:
        'Dropping the altitude makes a $30$-$60$-$90$ triangle whose hypotenuse is a $14$-cm side and whose short leg is half the base, $7$. The altitude is the long leg: $7\\sqrt{3} \\approx 12.1$ cm ✓. Check a second, independent way by subtracting squares: $\\sqrt{14^2 - 7^2} = \\sqrt{196 - 49} = \\sqrt{147} = \\sqrt{49 \\times 3} = 7\\sqrt{3}$ ✓. (The choice $7$ is STOPPING AT THE HALF-BASE ✗; $14\\sqrt{3}$ is SKIPPING THE HALVING — the $\\sqrt{3}$ pairs with the HALF side ✗; $7\\sqrt{2}$ is BORROWING THE WRONG RADICAL from the $45$-$45$-$90$ ✗.)',
    },
    {
      q: 'One face of a climbing frame is an equilateral triangle measuring $18$ feet on each side. How tall is the face — that is, how long is the dashed altitude shown?',
      fig: {
        view: [-1.5, -2.5, 19.5, 17.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [18, 0], [9, 15.588]], fill: false },
          { t: 'seg', a: [9, 15.588], b: [9, 0], dash: true },
          { t: 'right', at: [9, 0], from: [18, 0], to: [9, 15.588] },
          { t: 'label', p: [4.5, 7.794], text: '18', dx: -12, dy: -6 },
          { t: 'label', p: [13.5, 7.794], text: '18', dx: 12, dy: -6 },
          { t: 'label', p: [9, 7.794], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$9$', '$18\\sqrt{3}$', '$9\\sqrt{2}$', '$9\\sqrt{3}$'],
      answer: 3,
      solution:
        'The altitude of an equilateral triangle of side $s$ is $\\frac{s}{2}\\sqrt{3}$, because the altitude builds a $30$-$60$-$90$ with hypotenuse $s$ and short leg $\\frac{s}{2}$. Here that gives $9\\sqrt{3} \\approx 15.6$ feet ✓. Check a second, independent way inside one half-triangle: $\\sqrt{18^2 - 9^2} = \\sqrt{324 - 81} = \\sqrt{243} = \\sqrt{81 \\times 3} = 9\\sqrt{3}$ ✓. (The choice $9$ is STOPPING AT THE HALF-BASE ✗; $18\\sqrt{3}$ is SKIPPING THE HALVING ✗; $9\\sqrt{2}$ is BORROWING THE WRONG RADICAL — no $45^\\circ$ angle lives anywhere in an equilateral triangle ✗.)',
    },
  ],
  // s7 — 30-60-90: longer leg given, find the hypotenuse.
  [
    {
      q: 'A loading ramp meets the level ground at a $30^\\circ$ angle. The ramp’s horizontal run — the longer leg of the $30$-$60$-$90$ triangle shown — is $12$ feet. How long is the ramp surface itself, the hypotenuse?',
      fig: {
        view: [-2, -2.5, 14, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [0, 6.928]], fill: false },
          { t: 'right', at: [0, 0], from: [12, 0], to: [0, 6.928] },
          { t: 'angle', at: [12, 0], from: [0, 0], to: [0, 6.928], r: 2, label: '30°' },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [6, 3.464], text: '?', dx: 10, dy: -8 },
        ],
      },
      choices: ['$8\\sqrt{3}$', '$24$', '$4\\sqrt{3}$', '$12\\sqrt{3}$'],
      answer: 0,
      solution:
        'Reach home base first: the short leg is the longer leg divided by $\\sqrt{3}$, so $\\frac{12}{\\sqrt{3}} = \\frac{12\\sqrt{3}}{3} = 4\\sqrt{3}$. Doubling the short leg gives the hypotenuse: $8\\sqrt{3} \\approx 13.9$ feet ✓. Check a second, independent way with Pythagoras: $(4\\sqrt{3})^2 + 12^2 = 48 + 144 = 192$, and $(8\\sqrt{3})^2 = 64 \\times 3 = 192$ ✓ — the triangle closes exactly. (The choice $24$ is DOUBLING THE LONG LEG, but the doubling rule links the hypotenuse to the SHORT leg only ✗; $4\\sqrt{3}$ is STOPPING AT THE SHORT LEG ✗; $12\\sqrt{3}$ is MULTIPLYING BY THE RADICAL INSTEAD OF DIVIDING on the way to home base ✗.)',
    },
    {
      q: 'A zip line runs from the top of a tower to a ground anchor, meeting the ground at $30^\\circ$. The horizontal distance from the anchor to the base of the tower — the longer leg in the figure — is $15$ meters. How long is the zip line?',
      fig: {
        view: [-2, -2.5, 17.5, 11],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [0, 8.66]], fill: false },
          { t: 'right', at: [0, 0], from: [15, 0], to: [0, 8.66] },
          { t: 'angle', at: [15, 0], from: [0, 0], to: [0, 8.66], r: 2.4, label: '30°' },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [7.5, 4.33], text: '?', dx: 10, dy: -8 },
        ],
      },
      choices: ['$30$', '$5\\sqrt{3}$', '$10\\sqrt{3}$', '$15\\sqrt{3}$'],
      answer: 2,
      solution:
        'Divide the longer leg by $\\sqrt{3}$ to find the short leg: $\\frac{15}{\\sqrt{3}} = \\frac{15\\sqrt{3}}{3} = 5\\sqrt{3}$ — that is the tower’s height. The zip line is double the short leg: $10\\sqrt{3} \\approx 17.3$ meters ✓. Check a second, independent way through the theorem: $(5\\sqrt{3})^2 + 15^2 = 75 + 225 = 300 = (10\\sqrt{3})^2$ ✓. (The choice $30$ is DOUBLING THE LONG LEG — tempting, but only the short leg doubles into the hypotenuse ✗; $5\\sqrt{3}$ is STOPPING AT THE SHORT LEG, the height instead of the ride ✗; $15\\sqrt{3}$ is MULTIPLYING BY THE RADICAL INSTEAD OF DIVIDING ✗.)',
    },
    {
      q: 'A guy wire anchors a radio mast, making a $30^\\circ$ angle with the level ground. In the $30$-$60$-$90$ triangle shown, the longer leg along the ground measures $21$ meters. Find the length of the wire.',
      fig: {
        view: [-2, -2.5, 24, 14.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [21, 0], [0, 12.124]], fill: false },
          { t: 'right', at: [0, 0], from: [21, 0], to: [0, 12.124] },
          { t: 'angle', at: [21, 0], from: [0, 0], to: [0, 12.124], r: 3, label: '30°' },
          { t: 'label', p: [10.5, 0], text: '21', dx: 0, dy: 14 },
          { t: 'label', p: [10.5, 6.062], text: '?', dx: 10, dy: -8 },
        ],
      },
      choices: ['$42$', '$14\\sqrt{3}$', '$7\\sqrt{3}$', '$21\\sqrt{3}$'],
      answer: 1,
      solution:
        'From the longer leg, rationalize down to the short leg: $\\frac{21}{\\sqrt{3}} = \\frac{21\\sqrt{3}}{3} = 7\\sqrt{3}$. The wire is the hypotenuse, double the short leg: $14\\sqrt{3} \\approx 24.2$ meters ✓. Check a second, independent way by closing the triangle: $(7\\sqrt{3})^2 + 21^2 = 147 + 441 = 588$, and $(14\\sqrt{3})^2 = 196 \\times 3 = 588$ ✓ — both legs and the wire satisfy Pythagoras on the nose. (The choice $42$ is DOUBLING THE LONG LEG ✗; $7\\sqrt{3}$ is STOPPING AT THE SHORT LEG, which is the mast’s height ✗; $21\\sqrt{3}$ is MULTIPLYING BY THE RADICAL INSTEAD OF DIVIDING ✗.)',
    },
  ],
  // s8 — isosceles right triangle: hypotenuse given, find the area.
  [
    {
      q: 'The end panel of a pup tent is an isosceles right triangle whose hypotenuse — the tent’s floor edge — measures $10$ feet. What is the area of the panel, in square feet?',
      choices: ['$50$', '$100$', '$25$', '$5\\sqrt{2}$'],
      answer: 2,
      solution:
        'Each slanted edge is $\\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$, and the two legs are perpendicular, so they serve as base and height: area $= \\frac{1}{2}(5\\sqrt{2})(5\\sqrt{2}) = \\frac{1}{2}(50) = 25$ square feet ✓. Check a second, independent way with the altitude to the hypotenuse: in an isosceles right triangle that altitude is half the hypotenuse, $5$, so area $= \\frac{1}{2} \\times 10 \\times 5 = 25$ ✓ — the tidy rule area $= \\frac{c^2}{4}$ says the same, $\\frac{100}{4} = 25$. (The choice $50$ is FORGETTING THE HALF in the area formula ✗; $100$ is SQUARING THE HYPOTENUSE and stopping ✗; $5\\sqrt{2}$ is ANSWERING A LEG — a length, not an area ✗.)',
    },
    {
      q: 'A pinwheel blade is cut as an isosceles right triangle with hypotenuse $12$ centimeters. How many square centimeters of paper does one blade use?',
      choices: ['$36$', '$72$', '$144$', '$6\\sqrt{2}$'],
      answer: 0,
      solution:
        'The legs each measure $\\frac{12}{\\sqrt{2}} = 6\\sqrt{2}$, and they meet at the right angle, so area $= \\frac{1}{2}(6\\sqrt{2})(6\\sqrt{2}) = \\frac{1}{2}(72) = 36$ square centimeters ✓. Check a second, independent way through the altitude: the altitude to the hypotenuse of an isosceles right triangle is half the hypotenuse, $6$, giving area $= \\frac{1}{2} \\times 12 \\times 6 = 36$ ✓ — equivalently, $\\frac{c^2}{4} = \\frac{144}{4} = 36$. (The choice $72$ is FORGETTING THE HALF ✗; $144$ is SQUARING THE HYPOTENUSE, which computes $c^2$ and nothing else ✗; $6\\sqrt{2}$ is ANSWERING A LEG instead of an area ✗.)',
    },
    {
      q: 'A mosaic piece is an isosceles right triangle whose longest side is $6$ millimeters. Find its area in square millimeters.',
      choices: ['$18$', '$36$', '$3\\sqrt{2}$', '$9$'],
      answer: 3,
      solution:
        'The longest side is the hypotenuse, so each leg is $\\frac{6}{\\sqrt{2}} = 3\\sqrt{2}$, and area $= \\frac{1}{2}(3\\sqrt{2})(3\\sqrt{2}) = \\frac{1}{2}(18) = 9$ square millimeters ✓. Check a second, independent way with the half-hypotenuse altitude: the altitude from the right angle is $6 \\div 2 = 3$, so area $= \\frac{1}{2} \\times 6 \\times 3 = 9$ ✓ — and the shortcut $\\frac{c^2}{4} = \\frac{36}{4}$ agrees. (The choice $18$ is FORGETTING THE HALF ✗; $36$ is SQUARING THE HYPOTENUSE ✗; $3\\sqrt{2}$ is ANSWERING A LEG, a length in millimeters rather than an area ✗.)',
    },
  ],
  // s9 — 45-45-90: legs given, find the perimeter.
  [
    {
      q: 'A triangular flower bed is a $45$-$45$-$90$ triangle whose two legs are each $6$ meters. How many meters of edging are needed to surround the bed — that is, what is its perimeter?',
      choices: ['$18$', '$12\\sqrt{2}$', '$6 + 12\\sqrt{2}$', '$12 + 6\\sqrt{2}$'],
      answer: 3,
      solution:
        'The two legs contribute $6 + 6 = 12$, and the hypotenuse is leg $\\cdot \\sqrt{2} = 6\\sqrt{2}$, so the edging totals $12 + 6\\sqrt{2} \\approx 20.5$ meters ✓. Check a second, independent way in decimals: Pythagoras gives the hypotenuse as $\\sqrt{36 + 36} = \\sqrt{72} \\approx 8.49$, and $6 + 6 + 8.49 \\approx 20.49$, matching $12 + 6\\sqrt{2}$ ✓. (The choice $18$ is PRETENDING THE HYPOTENUSE IS A THIRD LEG of length $6$ ✗; $12\\sqrt{2}$ is TURNING BOTH LEGS INTO HYPOTENUSES, adding $6\\sqrt{2} + 6\\sqrt{2}$ and losing a side ✗; $6 + 12\\sqrt{2}$ is SWAPPING WHICH SIDES CARRY THE RADICAL — there are two plain legs and only one $\\sqrt{2}$ side ✗.)',
    },
    {
      q: 'A decorative wall decal is a $45$-$45$-$90$ triangle with legs $10$ inches long, and a metallic border runs around its entire edge. How many inches of border does the decal need?',
      choices: ['$20 + 10\\sqrt{2}$', '$30$', '$10 + 20\\sqrt{2}$', '$20\\sqrt{2}$'],
      answer: 0,
      solution:
        'Two legs give $10 + 10 = 20$, and the hypotenuse is $10\\sqrt{2}$, so the border measures $20 + 10\\sqrt{2} \\approx 34.1$ inches ✓. Check a second, independent way numerically: $\\sqrt{10^2 + 10^2} = \\sqrt{200} \\approx 14.14$, and $10 + 10 + 14.14 = 34.14$, which is exactly $20 + 10\\sqrt{2}$ ✓ — the exact form and the decimal walk agree. (The choice $30$ is PRETENDING THE HYPOTENUSE IS A THIRD LEG ✗; $10 + 20\\sqrt{2}$ is SWAPPING WHICH SIDES CARRY THE RADICAL, taxing two sides with the $\\sqrt{2}$ instead of one ✗; $20\\sqrt{2}$ is TURNING BOTH LEGS INTO HYPOTENUSES and dropping the third side entirely ✗.)',
    },
    {
      q: 'Each little flag on a string of bunting is a $45$-$45$-$90$ triangle with legs of $3$ inches, and ribbon is stitched around all three sides of one flag. How much ribbon does one flag take?',
      choices: ['$9$', '$6 + 3\\sqrt{2}$', '$3 + 6\\sqrt{2}$', '$6\\sqrt{2}$'],
      answer: 1,
      solution:
        'The legs contribute $3 + 3 = 6$ and the hypotenuse is $3\\sqrt{2}$, so one flag takes $6 + 3\\sqrt{2} \\approx 10.2$ inches of ribbon ✓. Check a second, independent way with decimals: the hypotenuse is $\\sqrt{9 + 9} = \\sqrt{18} \\approx 4.24$, and $3 + 3 + 4.24 = 10.24$, matching $6 + 3\\sqrt{2}$ ✓. (The choice $9$ is PRETENDING THE HYPOTENUSE IS A THIRD LEG, counting three sides of $3$ ✗; $3 + 6\\sqrt{2}$ is SWAPPING WHICH SIDES CARRY THE RADICAL ✗; $6\\sqrt{2}$ is TURNING BOTH LEGS INTO HYPOTENUSES while the true third side goes missing ✗.)',
    },
  ],
  // s10 — equilateral triangle: altitude given, find the side.
  [
    {
      q: 'The front face of an event tent is an equilateral triangle. Its center pole, which runs along the dashed altitude shown, is $15$ feet tall. How long is each edge of the face?',
      fig: {
        view: [-1.5, -2.5, 19.5, 17.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [17.321, 0], [8.66, 15]], fill: false },
          { t: 'seg', a: [8.66, 15], b: [8.66, 0], dash: true },
          { t: 'right', at: [8.66, 0], from: [17.321, 0], to: [8.66, 15] },
          { t: 'tick', a: [0, 0], b: [8.66, 15], n: 1 },
          { t: 'tick', a: [17.321, 0], b: [8.66, 15], n: 1 },
          { t: 'tick', a: [0, 0], b: [17.321, 0], n: 1 },
          { t: 'label', p: [8.66, 7.5], text: '15', dx: -12, dy: 0 },
          { t: 'label', p: [12.99, 7.5], text: '?', dx: 14, dy: -6 },
        ],
      },
      choices: ['$5\\sqrt{3}$', '$10\\sqrt{3}$', '$15\\sqrt{3}$', '$30$'],
      answer: 1,
      solution:
        'The pole is the long leg of a $30$-$60$-$90$ triangle whose hypotenuse is a full edge. The short leg — half the edge — is $\\frac{15}{\\sqrt{3}} = \\frac{15\\sqrt{3}}{3} = 5\\sqrt{3}$, so the edge is double that: $10\\sqrt{3} \\approx 17.3$ feet ✓. Check a second, independent way by running forward: an equilateral triangle with side $10\\sqrt{3}$ has altitude $\\frac{10\\sqrt{3}}{2} \\cdot \\sqrt{3} = 5\\sqrt{3} \\cdot \\sqrt{3} = 15$ ✓ — the candidate regenerates the given pole exactly. (The choice $5\\sqrt{3}$ is STOPPING AT THE HALF-SIDE ✗; $15\\sqrt{3}$ is MULTIPLYING BY THE RADICAL INSTEAD OF DIVIDING on the way to the short leg ✗; $30$ is DOUBLING THE ALTITUDE as though it were the short leg ✗.)',
    },
    {
      q: 'A triangular earring is a small equilateral triangle. Measured from one corner straight down to the opposite side — the dashed altitude in the figure — it is $3$ centimeters. What is the side length of the earring?',
      fig: {
        view: [-1.5, -2.5, 5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.464, 0], [1.732, 3]], fill: false },
          { t: 'seg', a: [1.732, 3], b: [1.732, 0], dash: true },
          { t: 'right', at: [1.732, 0], from: [3.464, 0], to: [1.732, 3] },
          { t: 'tick', a: [0, 0], b: [1.732, 3], n: 1 },
          { t: 'tick', a: [3.464, 0], b: [1.732, 3], n: 1 },
          { t: 'tick', a: [0, 0], b: [3.464, 0], n: 1 },
          { t: 'label', p: [1.732, 1.5], text: '3', dx: -10, dy: 0 },
          { t: 'label', p: [2.598, 1.5], text: '?', dx: 14, dy: -6 },
        ],
      },
      choices: ['$\\sqrt{3}$', '$3\\sqrt{3}$', '$6$', '$2\\sqrt{3}$'],
      answer: 3,
      solution:
        'The altitude is the long leg of a $30$-$60$-$90$ half-triangle, so the half-side is $\\frac{3}{\\sqrt{3}} = \\frac{3\\sqrt{3}}{3} = \\sqrt{3}$, and the full side is twice that: $2\\sqrt{3} \\approx 3.5$ cm ✓. Check a second, independent way by rebuilding the altitude: a side of $2\\sqrt{3}$ has half-side $\\sqrt{3}$, and the altitude is $\\sqrt{3} \\cdot \\sqrt{3} = 3$ ✓ — the given measurement returns. (The choice $\\sqrt{3}$ is STOPPING AT THE HALF-SIDE ✗; $3\\sqrt{3}$ is MULTIPLYING BY THE RADICAL INSTEAD OF DIVIDING ✗; $6$ is DOUBLING THE ALTITUDE, treating the long leg like a short leg ✗.)',
    },
    {
      q: 'A steel garden sculpture is an equilateral triangle standing on one side. Its highest point is $18$ inches above the ground, directly above the midpoint of the base, as shown. Find the side length of the sculpture.',
      fig: {
        view: [-1.5, -2.5, 22.5, 20.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [20.785, 0], [10.392, 18]], fill: false },
          { t: 'seg', a: [10.392, 18], b: [10.392, 0], dash: true },
          { t: 'right', at: [10.392, 0], from: [20.785, 0], to: [10.392, 18] },
          { t: 'tick', a: [0, 0], b: [10.392, 18], n: 1 },
          { t: 'tick', a: [20.785, 0], b: [10.392, 18], n: 1 },
          { t: 'tick', a: [0, 0], b: [20.785, 0], n: 1 },
          { t: 'label', p: [10.392, 9], text: '18', dx: -12, dy: 0 },
          { t: 'label', p: [15.589, 9], text: '?', dx: 14, dy: -6 },
        ],
      },
      choices: ['$6\\sqrt{3}$', '$36$', '$12\\sqrt{3}$', '$18\\sqrt{3}$'],
      answer: 2,
      solution:
        'The height is the long leg of the $30$-$60$-$90$ made by the altitude, so the half-side is $\\frac{18}{\\sqrt{3}} = \\frac{18\\sqrt{3}}{3} = 6\\sqrt{3}$, and the full side is $12\\sqrt{3} \\approx 20.8$ inches ✓. Check a second, independent way in the forward direction: a side of $12\\sqrt{3}$ has altitude $\\frac{12\\sqrt{3}}{2} \\cdot \\sqrt{3} = 6\\sqrt{3} \\cdot \\sqrt{3} = 18$ ✓ — only the correct side length hands back the $18$-inch height. (The choice $6\\sqrt{3}$ is STOPPING AT THE HALF-SIDE ✗; $36$ is DOUBLING THE ALTITUDE, using the $\\times 2$ on the wrong leg ✗; $18\\sqrt{3}$ is MULTIPLYING BY THE RADICAL INSTEAD OF DIVIDING ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 6,
  sections: {
    '6.2': s62,
  },
}
