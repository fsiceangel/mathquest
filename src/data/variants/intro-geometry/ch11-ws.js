// Introduction to Geometry chapter 11 — variations for the printable worksheet.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key anywhere in
//    this file. Answers copy the base worksheet's formatting: bare exact
//    values like '$34\pi$', a difference like '$54\pi - 81\sqrt{3}$' for the
//    segment slot, '$144 - 36\pi$' for the corner-quarter slot, and units on
//    the rolling-wheel slot only ('$4800\pi$ cm'), matching the base.
//  - Every answer was worked twice by two genuinely different routes, and the
//    routes had to agree before the key was written: 2·pi·r vs pi·d (slot 1);
//    fraction-of-circumference vs benchmark halving or unit-arc stacking
//    (slot 2); pi·r^2 via the halved diameter vs pi·d^2/4 (slot 3);
//    fraction-of-area vs building from a smaller reference sector (slot 4);
//    solving for r first vs the direct bridge C^2/(4·pi) (slot 5); subtract
//    the squared areas vs the difference-of-squares factoring (slot 6);
//    turns × circumference vs blocks of ten turns (slot 7); sector and
//    triangle by the standard formulas vs sector = (1/2)·r·arc and triangle
//    by its 30-60-90 height (slot 8); four quarters = one whole circle vs
//    splitting the square into four half-side quarters (slot 9); the 270°
//    sector directly vs full circle minus the blocked quarter (slot 10).
//  - Figures are coordinate-exact and were verified numerically, never
//    eyeballed. Every point drawn on a circle satisfies its radius to within
//    rounding at hundredths, and every marked angle is within 0.05° of its
//    label: (−4.64, 14.27) realizes 108.0° at radius 15, (−1.04, 5.91)
//    realizes 100.0° at radius 6, (2.08, 11.82) realizes 80.0° at radius 12,
//    and the 60° chords use exact half-radius x with sin 60° rounded to
//    hundredths: (9, 15.59), (12, 20.78), (15, 25.98). The goat figures draw
//    the square shed, the tie corner P, the dashed rope along the ground, and
//    the reachable three-quarter circle as an arc from −180° to 90° centered
//    exactly at the tie corner with the rope as radius.
//  - Figure labels are plain text: bare numerals, the word 'shed', and the
//    letters of points.
//  - Pin deviations: none — all thirty lanes use their pinned values.
//  - Lanes that brush against base or learn content, flagged in the
//    authoring report: slot 3 lane 3 (d = 14 → 49π) lands on the same value
//    as base worksheet slot 5 (C = 14π → 49π) by a different skill; slot 5
//    lane 2 (C = 16π → 64π) matches Section 11.2 problem 6, a multiple-choice
//    base problem with the same givens; both pairings are forced by the
//    pinned values.
//  - Traps that run through the file, named in CAPS at the end of each
//    solution: REPORTING THE AREA, FORGETTING THE FRACTION, SQUARING THE
//    DIAMETER, TAKING THE FRACTION OF THE CIRCUMFERENCE, TREATING THE
//    CIRCUMFERENCE AS THE RADIUS, SUBTRACTING BEFORE SQUARING, DROPPING THE
//    FACTOR OF 2, KEEPING THE WHOLE SECTOR, TAKING THE SIDE AS THE RADIUS,
//    and SWEEPING THE FULL CIRCLE.

const worksheet = [
  // slot 1 — circumference from the radius (no figure).
  //          Lanes: r = 17 -> 34π; r = 19 -> 38π; r = 23 -> 46π.
  [
    {
      q: 'A wire is bent into a perfect circle of radius $17$, with the two ends just meeting and no overlap. Exactly how long is the wire?',
      answer: '$34\\pi$',
      solution:
        'Unbent, the wire is exactly the circle’s circumference: $C = 2\\pi r = 2\\pi \\cdot 17 = 34\\pi$ ✓. Second route through the diameter: the circle is $2 \\cdot 17 = 34$ across, and circumference is $\\pi$ times the distance across, so $C = \\pi d = 34\\pi$ ✓ — both formulas hand back the same exact value, and exact is how we leave it. REPORTING THE AREA computes $\\pi \\cdot 17^2 = 289\\pi$ ✗ — squaring belongs to $\\pi r^2$; a length of wire wants $2\\pi r$.',
    },
    {
      q: 'An ant marches once around the rim of a circular plate of radius $19$ and stops exactly where it started. How far did the ant walk?',
      answer: '$38\\pi$',
      solution:
        'One full lap of the rim is the circumference: $C = 2\\pi r = 2\\pi \\cdot 19 = 38\\pi$ ✓. Second route through the diameter: the plate is $2 \\cdot 19 = 38$ across, and $C = \\pi d = 38\\pi$ ✓ — the two formulas are the same fact wearing different clothes, so agreement is guaranteed but still worth seeing. REPORTING THE AREA answers $\\pi \\cdot 19^2 = 361\\pi$ ✗ — that measures the plate’s surface, not the ant’s walk around its edge.',
    },
    {
      q: 'Circle $O$ has radius $23$. Find its circumference, leaving the answer exact.',
      answer: '$46\\pi$',
      solution:
        'Straight from the formula: $C = 2\\pi r = 2\\pi \\cdot 23 = 46\\pi$ ✓. Second route through the diameter: $d = 2 \\cdot 23 = 46$, and $C = \\pi d = 46\\pi$ ✓ — and $46\\pi$ stays exact, where any decimal would only approximate. REPORTING THE AREA turns in $\\pi \\cdot 23^2 = 529\\pi$ ✗ — the circumference never squares the radius; only the area formula does.',
    },
  ],

  // slot 2 — minor-arc length from a central angle (figure).
  //          Lanes: 90° at r = 26 -> 13π; 90° at r = 22 -> 11π;
  //          108° at r = 15 -> 9π.
  [
    {
      q: 'In the circle with center $O$ and radius $26$, radii $\\overline{OA}$ and $\\overline{OB}$ are perpendicular, as shown. Find the length of minor arc $AB$.',
      fig: {
        view: [-33, -33, 33, 33],
        elems: [
          { t: 'circle', c: [0, 0], r: 26 },
          { t: 'seg', a: [0, 0], b: [26, 0] },
          { t: 'seg', a: [0, 0], b: [0, 26] },
          { t: 'angle', at: [0, 0], from: [26, 0], to: [0, 26], r: 5.8, label: '90' },
          { t: 'label', p: [13, 0], text: '26', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [26, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [0, 26], label: 'B', dx: 0, dy: -12 },
        ],
      },
      answer: '$13\\pi$',
      solution:
        'The circumference is $2\\pi \\cdot 26 = 52\\pi$, and a $90^\\circ$ arc is $\\frac{90}{360} = \\frac{1}{4}$ of the circle, so the arc length is $\\frac{1}{4} \\cdot 52\\pi = 13\\pi$ ✓. Second route by halving benchmarks: a semicircular arc would be half the lap, $26\\pi$, and $90^\\circ$ is half of $180^\\circ$, so halve once more: $13\\pi$ ✓. FORGETTING THE FRACTION reports the whole $52\\pi$ ✗ — that is the full trip around, four times the quarter that arc $AB$ covers.',
    },
    {
      q: 'Points $A$ and $B$ sit on a circle with center $O$ and radius $22$, and the central angle $\\angle AOB$ is a right angle, as marked. How long is minor arc $AB$?',
      fig: {
        view: [-28, -28, 28, 28],
        elems: [
          { t: 'circle', c: [0, 0], r: 22 },
          { t: 'seg', a: [0, 0], b: [22, 0] },
          { t: 'seg', a: [0, 0], b: [0, 22] },
          { t: 'angle', at: [0, 0], from: [22, 0], to: [0, 22], r: 4.9, label: '90' },
          { t: 'label', p: [11, 0], text: '22', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [22, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [0, 22], label: 'B', dx: 0, dy: -12 },
        ],
      },
      answer: '$11\\pi$',
      solution:
        'The full circumference is $2\\pi \\cdot 22 = 44\\pi$, and the $90^\\circ$ arc claims $\\frac{90}{360} = \\frac{1}{4}$ of it: $\\frac{1}{4} \\cdot 44\\pi = 11\\pi$ ✓. Second route by halving benchmarks: half a lap is $22\\pi$, and a right angle is half of a straight one, so the arc is half of that again — $11\\pi$ ✓. FORGETTING THE FRACTION hands over $44\\pi$ ✗ — the arc is a quarter of the circle, and its length must be a quarter of the circumference.',
    },
    {
      q: 'In the circle with center $O$ and radius $15$ shown, the central angle $\\angle AOB$ measures $108^\\circ$. Find the length of minor arc $AB$.',
      fig: {
        view: [-19, -19, 19, 19],
        elems: [
          { t: 'circle', c: [0, 0], r: 15 },
          { t: 'seg', a: [0, 0], b: [15, 0] },
          { t: 'seg', a: [0, 0], b: [-4.64, 14.27] },
          { t: 'angle', at: [0, 0], from: [15, 0], to: [-4.64, 14.27], r: 3.4, label: '108' },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [15, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [-4.64, 14.27], label: 'B', dx: -8, dy: -10 },
        ],
      },
      answer: '$9\\pi$',
      solution:
        'The circumference is $2\\pi \\cdot 15 = 30\\pi$, and the arc is $\\frac{108}{360} = \\frac{3}{10}$ of the circle: $\\frac{3}{10} \\cdot 30\\pi = 9\\pi$ ✓. Second route in $36^\\circ$ steps: a $36^\\circ$ arc is $\\frac{1}{10}$ of the circle, length $3\\pi$, and $108^\\circ$ stacks exactly three of them: $3 \\cdot 3\\pi = 9\\pi$ ✓. FORGETTING THE FRACTION answers $30\\pi$ ✗ — that is the whole circle’s worth of arc, when $\\angle AOB$ carves off less than a third of it.',
    },
  ],

  // slot 3 — area from the diameter (no figure).
  //          Lanes: d = 22 -> 121π; d = 32 -> 256π; d = 14 -> 49π.
  [
    {
      q: 'A circular tabletop measures $22$ straight across through its center. What is its area?',
      answer: '$121\\pi$',
      solution:
        'The distance across through the center is the diameter, so the radius is half of it: $11$. Area $= \\pi r^2 = \\pi \\cdot 11^2 = 121\\pi$ ✓. Second route by the diameter formula: $A = \\frac{\\pi d^2}{4} = \\frac{\\pi \\cdot 484}{4} = 121\\pi$ ✓ — the built-in division by $4$ does the halving twice for you. SQUARING THE DIAMETER answers $484\\pi$ ✗ — four times too big, because the diameter is twice the radius and squaring doubles that error twice.',
    },
    {
      q: 'A circle has diameter $32$. Find its area.',
      answer: '$256\\pi$',
      solution:
        'Halve the diameter first: $r = 16$. Then the area is $\\pi \\cdot 16^2 = 256\\pi$ ✓. Second route by the diameter formula: $A = \\frac{\\pi d^2}{4} = \\frac{\\pi \\cdot 1024}{4} = 256\\pi$ ✓ — same value, with the radius conversion hidden inside the $4$. SQUARING THE DIAMETER reports $1024\\pi$ ✗ — the formula $\\pi r^2$ takes the RADIUS, and $32$ is the whole way across.',
    },
    {
      q: 'The face of a round clock is $14$ across at its widest. What is the area of the clock face?',
      answer: '$49\\pi$',
      solution:
        'The widest distance across a circle is its diameter, so the radius is $7$. Area $= \\pi \\cdot 7^2 = 49\\pi$ ✓. Second route by the diameter formula: $A = \\frac{\\pi d^2}{4} = \\frac{\\pi \\cdot 196}{4} = 49\\pi$ ✓ — both routes cross through the same fact, that half of $14$ is what gets squared. SQUARING THE DIAMETER turns in $196\\pi$ ✗ — a circle of area $196\\pi$ would need a radius of $14$, twice the size of this clock.',
    },
  ],

  // slot 4 — sector area from a central angle (figure).
  //          Lanes: 100° at r = 6 -> 10π; 45° at r = 12 -> 18π;
  //          80° at r = 12 -> 32π.
  [
    {
      q: 'In the circle with center $O$ and radius $6$ shown, find the area of the sector with central angle $\\angle AOB = 100^\\circ$.',
      fig: {
        view: [-7.5, -7.5, 7.5, 7.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 6 },
          { t: 'seg', a: [0, 0], b: [6, 0] },
          { t: 'seg', a: [0, 0], b: [-1.04, 5.91] },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [-1.04, 5.91], r: 1.4, label: '100' },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [-1.04, 5.91], label: 'B', dx: -6, dy: -12 },
        ],
      },
      answer: '$10\\pi$',
      solution:
        'The whole circle has area $\\pi \\cdot 6^2 = 36\\pi$, and the sector is $\\frac{100}{360} = \\frac{5}{18}$ of it: $\\frac{5}{18} \\cdot 36\\pi = 10\\pi$ ✓. Second route in $10^\\circ$ slivers: a $10^\\circ$ sector is $\\frac{1}{36}$ of the circle, area exactly $\\pi$, and $100^\\circ$ stacks ten of them: $10\\pi$ ✓. TAKING THE FRACTION OF THE CIRCUMFERENCE computes $\\frac{5}{18} \\cdot 12\\pi = \\frac{10\\pi}{3}$ ✗ — that is the ARC LENGTH along the crust, not the area of the whole slice.',
    },
    {
      q: 'A circle with center $O$ has radius $12$, and radii $\\overline{OA}$ and $\\overline{OB}$ make a $45^\\circ$ angle, as shown. What is the area of sector $AOB$?',
      fig: {
        view: [-15, -15, 15, 15],
        elems: [
          { t: 'circle', c: [0, 0], r: 12 },
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [0, 0], b: [8.49, 8.49] },
          { t: 'angle', at: [0, 0], from: [12, 0], to: [8.49, 8.49], r: 2.8, label: '45' },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [8.49, 8.49], label: 'B', dx: 10, dy: -8 },
        ],
      },
      answer: '$18\\pi$',
      solution:
        'The full circle has area $\\pi \\cdot 12^2 = 144\\pi$, and a $45^\\circ$ sector is $\\frac{45}{360} = \\frac{1}{8}$ of it: $\\frac{1}{8} \\cdot 144\\pi = 18\\pi$ ✓. Second route by halving a quarter: the $90^\\circ$ quarter circle has area $\\frac{1}{4} \\cdot 144\\pi = 36\\pi$, and $45^\\circ$ is half of that slice: $18\\pi$ ✓. TAKING THE FRACTION OF THE CIRCUMFERENCE gives $\\frac{1}{8} \\cdot 24\\pi = 3\\pi$ ✗ — that measures the curved crust of the slice, not the pizza inside it.',
    },
    {
      q: 'The figure shows a circle with center $O$ and radius $12$ in which the central angle $\\angle AOB$ measures $80^\\circ$. Find the area of sector $AOB$.',
      fig: {
        view: [-15, -15, 15, 15],
        elems: [
          { t: 'circle', c: [0, 0], r: 12 },
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [0, 0], b: [2.08, 11.82] },
          { t: 'angle', at: [0, 0], from: [12, 0], to: [2.08, 11.82], r: 2.6, label: '80' },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [2.08, 11.82], label: 'B', dx: 6, dy: -12 },
        ],
      },
      answer: '$32\\pi$',
      solution:
        'The circle’s area is $\\pi \\cdot 12^2 = 144\\pi$, and the sector takes $\\frac{80}{360} = \\frac{2}{9}$ of it: $\\frac{2}{9} \\cdot 144\\pi = 32\\pi$ ✓. Second route by doubling a reference slice: a $40^\\circ$ sector is $\\frac{1}{9}$ of the circle, area $16\\pi$, and $80^\\circ$ is two of those: $32\\pi$ ✓. TAKING THE FRACTION OF THE CIRCUMFERENCE computes $\\frac{2}{9} \\cdot 24\\pi = \\frac{16\\pi}{3}$ ✗ — arc length and sector area share a fraction but never a formula.',
    },
  ],

  // slot 5 — area from the circumference (no figure).
  //          Lanes: C = 30π -> 225π; C = 16π -> 64π; C = 22π -> 121π.
  [
    {
      q: 'The fence around a circular pond measures exactly $30\\pi$ all the way around. What is the area of the pond?',
      answer: '$225\\pi$',
      solution:
        'Cross the bridge to the radius first: $2\\pi r = 30\\pi$ gives $r = 15$, and then the area is $\\pi \\cdot 15^2 = 225\\pi$ ✓. Second route by the direct bridge: $A = \\frac{C^2}{4\\pi} = \\frac{(30\\pi)^2}{4\\pi} = \\frac{900\\pi^2}{4\\pi} = 225\\pi$ ✓ — the radius is hiding inside that formula, but it is there. TREATING THE CIRCUMFERENCE AS THE RADIUS computes $\\pi \\cdot 30^2 = 900\\pi$ ✗ — the $30$ measures the trip around, not the reach from the center.',
    },
    {
      q: 'A circle has circumference $16\\pi$. Find its area.',
      answer: '$64\\pi$',
      solution:
        'Solve for the radius: $2\\pi r = 16\\pi$ gives $r = 8$, so the area is $\\pi \\cdot 8^2 = 64\\pi$ ✓. Second route by the direct bridge: $A = \\frac{C^2}{4\\pi} = \\frac{256\\pi^2}{4\\pi} = 64\\pi$ ✓ — both roads pass through the same radius of $8$, one openly and one in disguise. TREATING THE CIRCUMFERENCE AS THE RADIUS squares the $16$ into $256\\pi$ ✗ — always convert to the radius before touching $\\pi r^2$.',
    },
    {
      q: 'A round rug needs $22\\pi$ of trim to edge its border completely. How much floor does the rug cover?',
      answer: '$121\\pi$',
      solution:
        'The trim is the circumference, so $2\\pi r = 22\\pi$ gives $r = 11$, and the rug covers $\\pi \\cdot 11^2 = 121\\pi$ ✓. Second route by the direct bridge: $A = \\frac{C^2}{4\\pi} = \\frac{484\\pi^2}{4\\pi} = 121\\pi$ ✓ — a tidy check that skips naming the radius but cannot skip using it. TREATING THE CIRCUMFERENCE AS THE RADIUS answers $\\pi \\cdot 22^2 = 484\\pi$ ✗ — that rug would be four times the real one.',
    },
  ],

  // slot 6 — ring between concentric circles (figure).
  //          Lanes: 9 and 2 -> 77π; 11 and 8 -> 57π; 12 and 5 -> 119π.
  [
    {
      q: 'Two circles share center $O$, with radii $9$ and $2$, as shown. What is the area of the ring between them?',
      fig: {
        view: [-11, -11, 11, 11],
        elems: [
          { t: 'circle', c: [0, 0], r: 9 },
          { t: 'circle', c: [0, 0], r: 2 },
          { t: 'seg', a: [0, 0], b: [-2, 0] },
          { t: 'seg', a: [0, 0], b: [6.36, 6.36] },
          { t: 'label', p: [-1, 0], text: '2', dx: 0, dy: -10 },
          { t: 'label', p: [3.18, 3.18], text: '9', dx: 10, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-2, 0], label: 'A', dx: -12, dy: -8 },
          { t: 'point', p: [6.36, 6.36], label: 'B', dx: 10, dy: -8 },
        ],
      },
      answer: '$77\\pi$',
      solution:
        'Ring $=$ outer circle $-$ inner circle $= \\pi \\cdot 9^2 - \\pi \\cdot 2^2 = 81\\pi - 4\\pi = 77\\pi$ ✓. Second route by difference of squares: $\\pi(9^2 - 2^2) = \\pi(9 - 2)(9 + 2) = \\pi \\cdot 7 \\cdot 11 = 77\\pi$ ✓ — the factoring multiplies the gap between the radii by their sum, which is exactly what the subtraction was doing. SUBTRACTING BEFORE SQUARING computes $\\pi(9 - 2)^2 = 49\\pi$ ✗ — the squares must be built first and subtracted second, never the other way around.',
    },
    {
      q: 'A circular running track is the ring between two circles with the same center: the outer edge has radius $11$ and the inner edge has radius $8$, as shown. Find the area of the track surface.',
      fig: {
        view: [-13.5, -13.5, 13.5, 13.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 11 },
          { t: 'circle', c: [0, 0], r: 8 },
          { t: 'seg', a: [0, 0], b: [-8, 0] },
          { t: 'seg', a: [0, 0], b: [7.78, 7.78] },
          { t: 'label', p: [-4, 0], text: '8', dx: 0, dy: -10 },
          { t: 'label', p: [3.89, 3.89], text: '11', dx: 12, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-8, 0], label: 'A', dx: -12, dy: -8 },
          { t: 'point', p: [7.78, 7.78], label: 'B', dx: 10, dy: -8 },
        ],
      },
      answer: '$57\\pi$',
      solution:
        'Track $=$ outer circle $-$ inner circle $= \\pi \\cdot 11^2 - \\pi \\cdot 8^2 = 121\\pi - 64\\pi = 57\\pi$ ✓. Second route by difference of squares: $\\pi(11 - 8)(11 + 8) = \\pi \\cdot 3 \\cdot 19 = 57\\pi$ ✓ — a narrow ring, but wrapped around a long circle, and the factored form shows both facts at once. SUBTRACTING BEFORE SQUARING gives $\\pi(11 - 8)^2 = 9\\pi$ ✗ — that would be a little circle of radius $3$, nothing like a ring.',
    },
    {
      q: 'The figure shows two concentric circles centered at $O$ with radii $12$ and $5$. Find the area of the region between the two circles.',
      fig: {
        view: [-14.5, -14.5, 14.5, 14.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 12 },
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'seg', a: [0, 0], b: [-5, 0] },
          { t: 'seg', a: [0, 0], b: [8.49, 8.49] },
          { t: 'label', p: [-2.5, 0], text: '5', dx: 0, dy: -10 },
          { t: 'label', p: [4.24, 4.24], text: '12', dx: 12, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-5, 0], label: 'A', dx: -12, dy: -8 },
          { t: 'point', p: [8.49, 8.49], label: 'B', dx: 10, dy: -8 },
        ],
      },
      answer: '$119\\pi$',
      solution:
        'Ring $=$ big circle $-$ small circle $= \\pi \\cdot 12^2 - \\pi \\cdot 5^2 = 144\\pi - 25\\pi = 119\\pi$ ✓. Second route by difference of squares: $\\pi(12 - 5)(12 + 5) = \\pi \\cdot 7 \\cdot 17 = 119\\pi$ ✓ — two honest routes, one subtraction and one factoring, landing on the same ring. SUBTRACTING BEFORE SQUARING answers $\\pi(12 - 5)^2 = 49\\pi$ ✗ — squaring does not pass through subtraction, and the ring holds far more area than that.',
    },
  ],

  // slot 7 — rolling cart wheel, distance in centimeters (no figure).
  //          Lanes: r = 30, 80 turns -> 4800π cm; r = 35, 100 turns ->
  //          7000π cm; r = 40, 90 turns -> 7200π cm.
  [
    {
      q: 'A delivery cart’s wheel has radius $30$ cm. Exactly how far (in centimeters) does the cart travel while the wheel makes $80$ complete turns without slipping?',
      answer: '$4800\\pi$ cm',
      solution:
        'One turn rolls out one circumference: $2\\pi \\cdot 30 = 60\\pi$ cm. Then $80$ turns cover $80 \\cdot 60\\pi = 4800\\pi$ cm ✓. Second route in blocks of ten: $10$ turns roll $600\\pi$ cm, and $80$ turns is eight such blocks: $8 \\cdot 600\\pi = 4800\\pi$ cm ✓. DROPPING THE FACTOR OF 2 uses $30\\pi$ cm per turn and lands on $2400\\pi$ cm ✗ — a full turn lays down $\\pi$ times the DIAMETER of $60$, not $\\pi$ times the radius.',
    },
    {
      q: 'The wheel of a farm cart has radius $35$ cm. If the wheel rolls through $100$ complete turns without slipping, exactly how many centimeters does the cart move?',
      answer: '$7000\\pi$ cm',
      solution:
        'Each turn covers one circumference: $2\\pi \\cdot 35 = 70\\pi$ cm, so $100$ turns cover $100 \\cdot 70\\pi = 7000\\pi$ cm ✓. Second route in blocks of ten: $10$ turns roll $700\\pi$ cm, and ten blocks of ten make $10 \\cdot 700\\pi = 7000\\pi$ cm ✓ — keeping the $\\pi$ exact the whole way means no rounding ever creeps in. DROPPING THE FACTOR OF 2 charges only $35\\pi$ cm per turn and reports $3500\\pi$ cm ✗ — exactly half the true distance.',
    },
    {
      q: 'An ice-cream cart rolls on wheels of radius $40$ cm. During $90$ complete turns of a wheel (no slipping), exactly how far in centimeters does the cart travel?',
      answer: '$7200\\pi$ cm',
      solution:
        'One turn is one circumference along the ground: $2\\pi \\cdot 40 = 80\\pi$ cm. So $90$ turns cover $90 \\cdot 80\\pi = 7200\\pi$ cm ✓. Second route in blocks of ten: $10$ turns roll $800\\pi$ cm, and nine blocks give $9 \\cdot 800\\pi = 7200\\pi$ cm ✓. DROPPING THE FACTOR OF 2 uses $40\\pi$ cm per turn for a total of $3600\\pi$ cm ✗ — the wheel unrolls its full diameter times $\\pi$ with every turn, not its radius times $\\pi$.',
    },
  ],

  // slot 8 — circular segment for a 60° central angle (figure):
  //          sector minus equilateral triangle.
  //          Lanes: r = 18 -> 54π − 81√3; r = 24 -> 96π − 144√3;
  //          r = 30 -> 150π − 225√3.
  [
    {
      q: 'In a circle with center $O$ and radius $18$, central angle $\\angle AOB = 60^\\circ$, as shown. Find the area of the circular segment between chord $\\overline{AB}$ and arc $AB$.',
      fig: {
        view: [-22, -22, 22, 22],
        elems: [
          { t: 'circle', c: [0, 0], r: 18 },
          { t: 'seg', a: [0, 0], b: [18, 0] },
          { t: 'seg', a: [0, 0], b: [9, 15.59] },
          { t: 'seg', a: [18, 0], b: [9, 15.59] },
          { t: 'angle', at: [0, 0], from: [18, 0], to: [9, 15.59], r: 4.2, label: '60' },
          { t: 'label', p: [9, 0], text: '18', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [18, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [9, 15.59], label: 'B', dx: 8, dy: -10 },
        ],
      },
      answer: '$54\\pi - 81\\sqrt{3}$',
      solution:
        'Segment $=$ sector $-$ triangle. The $60^\\circ$ sector is $\\frac{1}{6}$ of the circle: $\\frac{1}{6} \\cdot 324\\pi = 54\\pi$. Triangle $AOB$ has two sides of $18$ with $60^\\circ$ between them, so it is equilateral with side $18$: area $\\frac{\\sqrt{3}}{4} \\cdot 324 = 81\\sqrt{3}$. Segment: $54\\pi - 81\\sqrt{3}$ ✓. Second route rebuilds both pieces by different formulas: arc $AB$ is $\\frac{1}{6} \\cdot 36\\pi = 6\\pi$, and sector $= \\frac{1}{2} \\cdot r \\cdot \\text{arc} = \\frac{1}{2} \\cdot 18 \\cdot 6\\pi = 54\\pi$; the equilateral triangle’s height is $9\\sqrt{3}$, so its area is $\\frac{1}{2} \\cdot 18 \\cdot 9\\sqrt{3} = 81\\sqrt{3}$ — segment $54\\pi - 81\\sqrt{3}$ again, roughly $169.6 - 140.3$, a small positive sliver ✓. KEEPING THE WHOLE SECTOR answers $54\\pi$ ✗ — the chord fences off the triangle, and the triangle must be carved away.',
    },
    {
      q: 'The figure shows a circle with center $O$ and radius $24$ in which $\\angle AOB = 60^\\circ$. Chord $\\overline{AB}$ is drawn. What is the area of the segment cut off by the chord (the region between $\\overline{AB}$ and arc $AB$)?',
      fig: {
        view: [-29, -29, 29, 29],
        elems: [
          { t: 'circle', c: [0, 0], r: 24 },
          { t: 'seg', a: [0, 0], b: [24, 0] },
          { t: 'seg', a: [0, 0], b: [12, 20.78] },
          { t: 'seg', a: [24, 0], b: [12, 20.78] },
          { t: 'angle', at: [0, 0], from: [24, 0], to: [12, 20.78], r: 5.5, label: '60' },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [12, 20.78], label: 'B', dx: 8, dy: -10 },
        ],
      },
      answer: '$96\\pi - 144\\sqrt{3}$',
      solution:
        'Segment $=$ sector $-$ triangle. The $60^\\circ$ sector is $\\frac{1}{6} \\cdot 576\\pi = 96\\pi$. Two sides of $24$ with a $60^\\circ$ angle between them make triangle $AOB$ equilateral with side $24$: area $\\frac{\\sqrt{3}}{4} \\cdot 576 = 144\\sqrt{3}$. Segment: $96\\pi - 144\\sqrt{3}$ ✓. Second route by different formulas for each piece: arc $AB = \\frac{1}{6} \\cdot 48\\pi = 8\\pi$, and sector $= \\frac{1}{2} \\cdot 24 \\cdot 8\\pi = 96\\pi$; the triangle’s height is $12\\sqrt{3}$, so its area is $\\frac{1}{2} \\cdot 24 \\cdot 12\\sqrt{3} = 144\\sqrt{3}$ — the segment lands on $96\\pi - 144\\sqrt{3}$ once more, about $301.6 - 249.4$, positive as a sliver must be ✓. KEEPING THE WHOLE SECTOR reports $96\\pi$ ✗ — that region still contains the triangle the chord was built to remove.',
    },
    {
      q: 'Points $A$ and $B$ lie on a circle with center $O$ and radius $30$, with $\\angle AOB = 60^\\circ$, as shown. Find the area of the region bounded by chord $\\overline{AB}$ and minor arc $AB$.',
      fig: {
        view: [-36, -36, 36, 36],
        elems: [
          { t: 'circle', c: [0, 0], r: 30 },
          { t: 'seg', a: [0, 0], b: [30, 0] },
          { t: 'seg', a: [0, 0], b: [15, 25.98] },
          { t: 'seg', a: [30, 0], b: [15, 25.98] },
          { t: 'angle', at: [0, 0], from: [30, 0], to: [15, 25.98], r: 7, label: '60' },
          { t: 'label', p: [15, 0], text: '30', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [30, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [15, 25.98], label: 'B', dx: 8, dy: -10 },
        ],
      },
      answer: '$150\\pi - 225\\sqrt{3}$',
      solution:
        'Segment $=$ sector $-$ triangle. The $60^\\circ$ sector is $\\frac{1}{6} \\cdot 900\\pi = 150\\pi$. Triangle $AOB$ is equilateral with side $30$ (two radii with $60^\\circ$ between them force the third side to match): area $\\frac{\\sqrt{3}}{4} \\cdot 900 = 225\\sqrt{3}$. Segment: $150\\pi - 225\\sqrt{3}$ ✓. Second route by different formulas: arc $AB = \\frac{1}{6} \\cdot 60\\pi = 10\\pi$, and sector $= \\frac{1}{2} \\cdot 30 \\cdot 10\\pi = 150\\pi$; the equilateral’s height is $15\\sqrt{3}$, so the triangle is $\\frac{1}{2} \\cdot 30 \\cdot 15\\sqrt{3} = 225\\sqrt{3}$ — segment $150\\pi - 225\\sqrt{3}$ again, roughly $471.2 - 389.7$, a positive sliver ✓. KEEPING THE WHOLE SECTOR turns in $150\\pi$ ✗ — the question asks only for the bite beyond the chord, not the whole slice.',
    },
  ],

  // slot 9 — square with a quarter circle at each corner, radius half the
  //          side; area left in the middle (figure).
  //          Lanes: side 12 -> 144 − 36π; side 16 -> 256 − 64π;
  //          side 20 -> 400 − 100π.
  [
    {
      q: 'A square courtyard of side $12$ has a quarter-circle flower bed of radius $6$ at each corner, inside the square, as shown. The four beds just touch at the midpoints of the sides. Find the area of the courtyard not covered by any bed.',
      fig: {
        view: [-1.8, -1.8, 13.8, 13.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 12], [0, 12]], fill: false },
          { t: 'arc', c: [0, 0], r: 6, from: 0, to: 90 },
          { t: 'arc', c: [12, 0], r: 6, from: 90, to: 180 },
          { t: 'arc', c: [12, 12], r: 6, from: 180, to: 270 },
          { t: 'arc', c: [0, 12], r: 6, from: 270, to: 360 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'B', dx: 12, dy: 8 },
          { t: 'point', p: [12, 12], label: 'C', dx: 12, dy: -8 },
          { t: 'point', p: [0, 12], label: 'D', dx: -10, dy: -8 },
        ],
      },
      answer: '$144 - 36\\pi$',
      solution:
        'The four quarter circles have radius $6$ and only touch, never overlap, so together they assemble into one full circle of area $\\pi \\cdot 6^2 = 36\\pi$. Middle region $=$ square $-$ four quarters $= 144 - 36\\pi$ ✓, about $30.9$. Second route by cutting the courtyard into four $6 \\times 6$ quarter-squares: each one holds exactly one quarter circle, leaving $36 - 9\\pi$ uncovered, and four of those give $4(36 - 9\\pi) = 144 - 36\\pi$ ✓. TAKING THE SIDE AS THE RADIUS subtracts $144\\pi$ ✗ — a negative answer, and a sure sign the radius was read off the wrong length; each bed reaches only halfway along a side.',
    },
    {
      q: 'In a square of side $16$, a quarter circle of radius $8$ is centered at each corner and drawn inside the square, as shown, so the arcs meet at the midpoints of the sides. What is the area of the region in the middle covered by none of the quarter circles?',
      fig: {
        view: [-2.4, -2.4, 18.4, 18.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [16, 16], [0, 16]], fill: false },
          { t: 'arc', c: [0, 0], r: 8, from: 0, to: 90 },
          { t: 'arc', c: [16, 0], r: 8, from: 90, to: 180 },
          { t: 'arc', c: [16, 16], r: 8, from: 180, to: 270 },
          { t: 'arc', c: [0, 16], r: 8, from: 270, to: 360 },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'B', dx: 12, dy: 8 },
          { t: 'point', p: [16, 16], label: 'C', dx: 12, dy: -8 },
          { t: 'point', p: [0, 16], label: 'D', dx: -10, dy: -8 },
        ],
      },
      answer: '$256 - 64\\pi$',
      solution:
        'The four quarter circles never overlap — they only touch at the midpoints — so together they make one whole circle of radius $8$, area $64\\pi$. Middle region $= 256 - 64\\pi$ ✓, about $54.9$. Second route by quarters: split the square into four $8 \\times 8$ quarter-squares; each contains exactly one quarter circle and keeps $64 - 16\\pi$ uncovered, so the total is $4(64 - 16\\pi) = 256 - 64\\pi$ ✓. TAKING THE SIDE AS THE RADIUS subtracts $256\\pi$ ✗ — the arcs would burst far outside the square, and the answer goes negative; the radius is half the side, not the side.',
    },
    {
      q: 'Each corner of a square sheet of side $20$ is decorated with a quarter circle of radius $10$ drawn inside the sheet, as shown; the four arcs touch at the midpoints of the sides. Find the area of the bare region in the middle of the sheet.',
      fig: {
        view: [-3, -3, 23, 23],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [20, 20], [0, 20]], fill: false },
          { t: 'arc', c: [0, 0], r: 10, from: 0, to: 90 },
          { t: 'arc', c: [20, 0], r: 10, from: 90, to: 180 },
          { t: 'arc', c: [20, 20], r: 10, from: 180, to: 270 },
          { t: 'arc', c: [0, 20], r: 10, from: 270, to: 360 },
          { t: 'label', p: [10, 0], text: '20', dx: 0, dy: 14 },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [20, 0], label: 'B', dx: 12, dy: 8 },
          { t: 'point', p: [20, 20], label: 'C', dx: 12, dy: -8 },
          { t: 'point', p: [0, 20], label: 'D', dx: -10, dy: -8 },
        ],
      },
      answer: '$400 - 100\\pi$',
      solution:
        'Four non-overlapping quarter circles of radius $10$ fit together into one full circle of area $100\\pi$, so the bare middle is $400 - 100\\pi$ ✓, about $85.8$. Second route by quarters: cut the sheet into four $10 \\times 10$ quarter-squares; each holds one quarter circle and leaves $100 - 25\\pi$ bare, and $4(100 - 25\\pi) = 400 - 100\\pi$ ✓ — the same subtraction done corner by corner. TAKING THE SIDE AS THE RADIUS subtracts $400\\pi$ ✗ — since $400\\pi > 400$, the “answer” drops below zero, which no leftover area can do.',
    },
  ],

  // slot 10 — goat tied to an outside corner of a square shed, rope shorter
  //           than the side: reachable area is a three-quarter circle
  //           (figure). Lanes: rope 10, side 12 -> 75π; rope 14, side 16 ->
  //           147π; rope 8, side 9 -> 48π.
  [
    {
      q: 'A goat is tied by a rope of length $10$ to an outside corner of a square toolshed with side $12$, on flat ground. The goat can graze anywhere the rope reaches but cannot pass through or enter the shed. Find the total area the goat can graze.',
      fig: {
        view: [-2, -12, 24, 14],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 12], [0, 12]], fill: false },
          { t: 'arc', c: [12, 0], r: 10, from: -180, to: 90 },
          { t: 'seg', a: [12, 0], b: [22, 0], dash: true },
          { t: 'label', p: [17, 0], text: '10', dx: 0, dy: -10 },
          { t: 'label', p: [6, 6], text: 'shed', dx: 0, dy: 0 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'point', p: [12, 0], label: 'P', dx: 10, dy: 12 },
        ],
      },
      answer: '$75\\pi$',
      solution:
        'The shed occupies exactly one quarter of the directions around the tie corner $P$, so the goat sweeps the other three quarters — a $270^\\circ$ sector of radius $10$: $\\frac{270}{360} \\cdot \\pi \\cdot 10^2 = \\frac{3}{4} \\cdot 100\\pi = 75\\pi$ ✓. Second route by subtraction: an unblocked goat would sweep the full circle of $100\\pi$; the shed steals the $90^\\circ$ quarter worth $25\\pi$, leaving $100\\pi - 25\\pi = 75\\pi$ ✓ — and since the rope ($10$) is shorter than the shed’s side ($12$), it can never fold around a second corner to win back extra grass. SWEEPING THE FULL CIRCLE answers $100\\pi$ ✗ — a quarter of that circle lies inside the shed, where no goat can graze.',
    },
    {
      q: 'A goat is tethered by a $14$-length rope to an outside corner of a square barn whose sides measure $16$, on level ground. The rope lets the goat wander anywhere it reaches, but the barn blocks its path completely. What total area can the goat reach?',
      fig: {
        view: [-2, -16, 32, 18],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [16, 16], [0, 16]], fill: false },
          { t: 'arc', c: [16, 0], r: 14, from: -180, to: 90 },
          { t: 'seg', a: [16, 0], b: [30, 0], dash: true },
          { t: 'label', p: [23, 0], text: '14', dx: 0, dy: -10 },
          { t: 'label', p: [8, 8], text: 'shed', dx: 0, dy: 0 },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 14 },
          { t: 'point', p: [16, 0], label: 'P', dx: 10, dy: 12 },
        ],
      },
      answer: '$147\\pi$',
      solution:
        'At the tie corner $P$, the barn walls block one quarter of the plane, so the goat sweeps a $270^\\circ$ sector of radius $14$: $\\frac{3}{4} \\cdot \\pi \\cdot 14^2 = \\frac{3}{4} \\cdot 196\\pi = 147\\pi$ ✓. Second route by subtraction: the free circle would be $196\\pi$, the blocked quarter is $49\\pi$, and $196\\pi - 49\\pi = 147\\pi$ ✓ — with no wrap-around bonus, because the rope ($14$) runs out before reaching a second corner of the $16$-sided barn. SWEEPING THE FULL CIRCLE claims $196\\pi$ ✗ — that counts a quarter circle of grazing inside the barn itself.',
    },
    {
      q: 'A goat’s rope, of length $8$, is fixed to an outside corner of a square chicken coop with side $9$, on flat ground. The goat cannot get through or into the coop. What is the total area of ground the goat can cover?',
      fig: {
        view: [-2, -10, 19, 11],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [9, 9], [0, 9]], fill: false },
          { t: 'arc', c: [9, 0], r: 8, from: -180, to: 90 },
          { t: 'seg', a: [9, 0], b: [17, 0], dash: true },
          { t: 'label', p: [13, 0], text: '8', dx: 0, dy: -10 },
          { t: 'label', p: [4.5, 4.5], text: 'shed', dx: 0, dy: 0 },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'point', p: [9, 0], label: 'P', dx: 10, dy: 12 },
        ],
      },
      answer: '$48\\pi$',
      solution:
        'The coop fills one quarter of the directions at the tie corner $P$, leaving the goat a $270^\\circ$ sector of radius $8$: $\\frac{3}{4} \\cdot \\pi \\cdot 8^2 = \\frac{3}{4} \\cdot 64\\pi = 48\\pi$ ✓. Second route by subtraction: a full circle of radius $8$ covers $64\\pi$, the coop’s quarter takes $16\\pi$, and $64\\pi - 16\\pi = 48\\pi$ ✓ — the rope ($8$) is shorter than the side ($9$), so it never bends around a second corner and the single sector is the whole story. SWEEPING THE FULL CIRCLE reports $64\\pi$ ✗ — the quarter of the circle behind the walls belongs to the chickens, not the goat.',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 11,
  worksheet,
}
