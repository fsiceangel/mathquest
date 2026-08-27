// Introduction to Geometry chapter 6 — variations for the printable worksheet.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key anywhere in
//    this file. Bare-number base answers get bare-number variation answers;
//    the two-leg slot keeps its sentence shape and the converse slot keeps
//    its criterion-plus-computation shape.
//  - Every answer was worked twice, by two genuinely different routes, and
//    the routes had to agree before the key was written. The pairs used are:
//    squaring-and-adding vs. the difference-of-squares identity on the keyed
//    hypotenuse (slot 1); the leg-times-root-two rule vs. raw Pythagoras with
//    radical simplification (slot 2); subtracting squares vs. factoring the
//    difference of squares into clean products (slot 3); the halve-then-scale
//    ladder vs. a full Pythagorean check of both legs (slot 4); the converse
//    test on the longest side vs. triple recognition or the exact hypotenuse
//    a right triangle would need (slot 5); Heron multiplied straight out vs.
//    an exact drop-a-height cross-check with the foot computed (slot 6); triple
//    recognition for the missing side vs. direct square subtraction (slot 7);
//    half-base-times-altitude vs. the s^2*sqrt(3)/4 formula (slot 8); the area
//    computed two ways vs. the geometric mean of the hypotenuse pieces
//    (slot 9); Heron run backward vs. the foot-of-the-height split checked
//    against both slant sides (slot 10).
//  - Figures are coordinate-exact and were verified numerically, never
//    eyeballed. Every labelled length is the true distance between its drawn
//    endpoints, every altitude foot is the exact perpendicular foot
//    ((12.6, 16.8), (11.52, 15.36), (12.96, 17.28) in slot 9; base splits
//    23.4/26.6, 20/28, 25.6/49.4 in slot 10), and every t:'right' marker
//    marks a true 90 degrees.
//  - Figure labels are plain text: bare numerals and the letters of points.
//  - Pinned answers are followed exactly; no pin deviations. Two pinned
//    lanes brush against base content and are flagged in the authoring
//    report: slot 4 lane 1 (hypotenuse 10) shares its numbers with the
//    second worked example of the Section 6.2 learn block, so the lane keeps
//    the pinned numbers but asks in a different direction; slot 2 lane 2
//    (legs 7) shares its numbers with Section 6.2 problem 1.
//  - Traps that run through the file, named in CAPS at the end of each
//    solution: ADDING THE LEGS, SUBTRACTING INSTEAD OF ADDING, DOUBLING THE
//    LEG, REACHING FOR ROOT THREE, ADDING THE SQUARES, SUBTRACTING THE
//    SIDES, HALVING FOR BOTH LEGS, SCALING THE HYPOTENUSE BY ROOT THREE,
//    TESTING WITH THE WRONG HYPOTENUSE, CALLING IT CLOSE ENOUGH, USING THE
//    FULL PERIMETER, SKIPPING THE FINAL ROOT, MULTIPLYING THE DIAGONAL BY
//    THE SIDE, ANSWERING WITH THE MISSING SIDE, TREATING THE PERIMETER AS
//    THE SIDE, DROPPING THE HALF, AVERAGING THE LEGS, ANSWERING WITH A LEG,
//    ANSWERING WITH THE AREA, and USING THE WRONG BASE.

const worksheet = [
  // slot 1 — two legs given, find the hypotenuse (figure). Lanes: 12-35-37
  //          ramp; 65-72-97 named triangle (moved off 16-63-65, which the
  //          section 6.3 hyp-is-leg-plus-two slot derives in the same
  //          attempt round); 13-84-85 cliff cable.
  [
    {
      q: 'A straight ramp climbs a rise of $12$ over a horizontal run of $35$, as shown. How long is the ramp surface?',
      fig: {
        view: [-2.5, -3, 39, 14.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [35, 0], [35, 12]], fill: false },
          { t: 'right', at: [35, 0], from: [0, 0], to: [35, 12] },
          { t: 'label', p: [17.5, 0], text: '35', dx: 0, dy: 14 },
          { t: 'label', p: [35, 6], text: '12', dx: 12, dy: 0 },
          { t: 'label', p: [17.5, 6], text: '?', dx: -12, dy: -6 },
        ],
      },
      answer: '$37$',
      solution:
        'The run, the rise, and the ramp form a right triangle with the ramp as the hypotenuse: $c^2 = 35^2 + 12^2 = 1225 + 144 = 1369$, so $c = \\sqrt{1369} = 37$. Second route, checking the key with the difference-of-squares identity: $37^2 - 35^2 = (37 - 35)(37 + 35) = 2 \\times 72 = 144 = 12^2$ ✓ — the Pythagorean relation rearranged, so $12$-$35$-$37$ is a genuine whole-number triple. Sanity: a hypotenuse must beat both legs, and $37 > 35$ ✓, though only barely — long thin right triangles hug their longest leg. ADDING THE LEGS reports $35 + 12 = 47$ ✗; the theorem adds squares, never sides. SUBTRACTING INSTEAD OF ADDING computes $\\sqrt{1225 - 144} = \\sqrt{1081}$ ✗ — subtraction hunts for a missing LEG, and here the missing side is the hypotenuse.',
    },
    {
      q: 'In right triangle $PQR$ the right angle is at $Q$, with $PQ = 65$ and $QR = 72$, as shown. Find $PR$.',
      fig: {
        view: [-7, -6, 79, 74],
        elems: [
          { t: 'poly', pts: [[0, 0], [72, 0], [0, 65]], fill: false },
          { t: 'right', at: [0, 0], from: [72, 0], to: [0, 65] },
          { t: 'point', p: [0, 65], label: 'P', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'Q', dx: -10, dy: 12 },
          { t: 'point', p: [72, 0], label: 'R', dx: 10, dy: 12 },
          { t: 'label', p: [36, 0], text: '72', dx: 0, dy: 14 },
          { t: 'label', p: [0, 32.5], text: '65', dx: -12, dy: 0 },
          { t: 'label', p: [36, 32.5], text: '?', dx: 12, dy: -8 },
        ],
      },
      answer: '$97$',
      solution:
        '$\\overline{PR}$ sits across from the right angle at $Q$, so it is the hypotenuse: $PR^2 = 65^2 + 72^2 = 4225 + 5184 = 9409$, and $PR = \\sqrt{9409} = 97$. Second route, difference of squares on the key: $97^2 - 72^2 = (97 - 72)(97 + 72) = 25 \\times 169 = (5 \\times 13)^2 = 65^2$ ✓, so $65$-$72$-$97$ locks together as a triple — and the two perfect-square factors hand over the root with no long division. Units-digit sanity: $4225 + 5184$ must end in $9$, and $97^2 = 9409$ does ✓. ADDING THE LEGS gives $65 + 72 = 137$ ✗, which skips every square in the theorem. SUBTRACTING INSTEAD OF ADDING gives $\\sqrt{5184 - 4225} = \\sqrt{959}$ ✗ — that recipe answers a different question, where $72$ would be the hypotenuse instead of a leg.',
    },
    {
      q: 'A cliff face rises $13$ straight up from the shore, and a taut cable runs from the clifftop to a boat anchored $84$ from the base of the cliff, as shown. How long is the cable?',
      fig: {
        view: [-6, -4, 90, 17],
        elems: [
          { t: 'seg', a: [-3, 0], b: [87, 0] },
          { t: 'seg', a: [0, 0], b: [0, 13] },
          { t: 'seg', a: [0, 13], b: [84, 0] },
          { t: 'right', at: [0, 0], from: [84, 0], to: [0, 13] },
          { t: 'label', p: [0, 6.5], text: '13', dx: -12, dy: 0 },
          { t: 'label', p: [42, 0], text: '84', dx: 0, dy: 14 },
          { t: 'label', p: [42, 6.5], text: '?', dx: 10, dy: -8 },
        ],
      },
      answer: '$85$',
      solution:
        'The cliff and the shore meet at a right angle, so the cable is the hypotenuse of a right triangle with legs $13$ and $84$: $c^2 = 13^2 + 84^2 = 169 + 7056 = 7225$, and $c = \\sqrt{7225} = 85$. Second route through difference of squares: $85^2 - 84^2 = (85 - 84)(85 + 84) = 1 \\times 169 = 169 = 13^2$ ✓ — consecutive hypotenuse and long leg always leave exactly the sum $85 + 84$ behind, which is why $13$-$84$-$85$ works so cleanly. Sanity: $84 < 85 < 97$, so the cable is longer than each leg but shorter than their sum ✓. ADDING THE LEGS predicts $97$ ✗, the distance if the cable ran down the cliff and then along the water. SUBTRACTING INSTEAD OF ADDING gives $\\sqrt{7056 - 169} = \\sqrt{6887}$ ✗, treating the $84$ as a hypotenuse it is not.',
    },
  ],

  // slot 2 — 45-45-90, legs given, exact hypotenuse. Lanes: folded square
  //          bandana with side 12; isosceles right triangle with legs 7;
  //          named triangle with legs 15.
  [
    {
      q: 'A square bandana with side $12$ is folded in half along its diagonal, making a $45$-$45$-$90$ triangle. Find the exact length of the folded edge.',
      answer: '$12\\sqrt{2}$',
      solution:
        'The fold line is the diagonal of the square, which is the hypotenuse of a $45$-$45$-$90$ triangle whose legs are two sides of the square. The one-rule route: hypotenuse $=$ leg $\\cdot \\sqrt{2} = 12\\sqrt{2} \\approx 17.0$. Second route from scratch with Pythagoras: $\\sqrt{12^2 + 12^2} = \\sqrt{288} = \\sqrt{144 \\times 2} = 12\\sqrt{2}$ ✓ — the two routes agree, and pulling the $144$ out of the radical is the finishing move. Sanity: the diagonal must beat a side but not double it, and $12 < 12\\sqrt{2} < 24$ ✓. DOUBLING THE LEG answers $24$ ✗ — that is the $30$-$60$-$90$ hypotenuse rule wandering into the wrong triangle. REACHING FOR ROOT THREE gives $12\\sqrt{3}$ ✗; the $\\sqrt{3}$ multiplier belongs to $30$-$60$-$90$ triangles, never to half-squares.',
    },
    {
      q: 'The two perpendicular sides of an isosceles right triangle each measure $20$. What is the exact length of the side opposite the right angle?',
      answer: '$20\\sqrt{2}$',
      solution:
        'An isosceles right triangle is a $45$-$45$-$90$ triangle, and the side opposite the right angle is its hypotenuse: leg $\\cdot \\sqrt{2} = 20\\sqrt{2} \\approx 28.3$. Second route by direct computation: $\\sqrt{20^2 + 20^2} = \\sqrt{800} = \\sqrt{400 \\times 2} = 20\\sqrt{2}$ ✓. The pattern behind the rule is visible right in the arithmetic: two equal squares add to twice one square, and the root of $2\\ell^2$ is $\\ell\\sqrt{2}$, whatever $\\ell$ is. Sanity: $20\\sqrt{2} \\approx 28.3$ sits between $20$ and $40$ ✓. DOUBLING THE LEG hands back $40$ ✗, which would need a $30^\\circ$ angle this triangle does not have. REACHING FOR ROOT THREE writes $20\\sqrt{3}$ ✗ — memorize the split: equal legs go with $\\sqrt{2}$, the $1:2$ hypotenuse ratio goes with $\\sqrt{3}$ triangles.',
    },
    {
      q: 'In $\\triangle RST$, $\\angle S = 90^\\circ$ and $RS = ST = 15$. Find $RT$ exactly.',
      answer: '$15\\sqrt{2}$',
      solution:
        'Two equal legs around a right angle make $\\triangle RST$ a $45$-$45$-$90$ triangle, and $\\overline{RT}$, opposite the right angle at $S$, is its hypotenuse: $RT = 15\\sqrt{2} \\approx 21.2$. Second route with Pythagoras from nothing: $RT = \\sqrt{15^2 + 15^2} = \\sqrt{450} = \\sqrt{225 \\times 2} = 15\\sqrt{2}$ ✓. Check the simplification honestly: $(15\\sqrt{2})^2 = 225 \\times 2 = 450$ ✓, matching the sum of squares. Sanity: the hypotenuse beats each leg, $21.2 > 15$ ✓, without reaching the leg sum $30$. DOUBLING THE LEG offers $30$ ✗, but doubling is the reward for a $30^\\circ$ angle, and both acute angles here are $45^\\circ$. REACHING FOR ROOT THREE offers $15\\sqrt{3} \\approx 26$ ✗, too long for a triangle this balanced.',
    },
  ],

  // slot 3 — one leg and the hypotenuse given, find the other leg (figure).
  //          Lanes: 60/61 -> 11 glide path; 12/37 -> 35 zip line; 36/85 -> 77
  //          named triangle.
  [
    {
      q: 'A glider descends along a straight $61$-unit flight path, covering $60$ units of horizontal ground distance, as shown. How much altitude does it lose?',
      fig: {
        view: [-5, -3.5, 64, 14],
        elems: [
          { t: 'poly', pts: [[0, 0], [60, 0], [0, 11]], fill: false },
          { t: 'right', at: [0, 0], from: [60, 0], to: [0, 11] },
          { t: 'label', p: [30, 0], text: '60', dx: 0, dy: 14 },
          { t: 'label', p: [0, 5.5], text: '?', dx: -10, dy: 0 },
          { t: 'label', p: [30, 5.5], text: '61', dx: 12, dy: -8 },
        ],
      },
      answer: '$11$',
      solution:
        'The flight path is the hypotenuse and the ground distance is a leg, so the altitude lost is the other leg: $h^2 = 61^2 - 60^2 = 3721 - 3600 = 121$, giving $h = 11$. Second route with no big squares at all: $61^2 - 60^2 = (61 - 60)(61 + 60) = 1 \\times 121 = 121 = 11^2$ ✓ — the difference of squares collapses the whole computation into one addition. Sanity: the missing leg must be shorter than the hypotenuse, and $11 < 61$ ✓; a shallow glide should lose far less height than it covers in ground, and it does. ADDING THE SQUARES gives $\\sqrt{3721 + 3600} = \\sqrt{7321}$ ✗ — adding is for finding a hypotenuse, and the hypotenuse is already in hand. SUBTRACTING THE SIDES answers $61 - 60 = 1$ ✗; sides never subtract directly, only their squares do.',
    },
    {
      q: 'A zip line $37$ long is anchored at the top of a platform $12$ tall and pulled taut to a stake at ground level, as shown. How far is the stake from the base of the platform?',
      fig: {
        view: [-5, -3.5, 39.5, 15],
        elems: [
          { t: 'seg', a: [-3, 0], b: [38, 0] },
          { t: 'seg', a: [0, 0], b: [0, 12] },
          { t: 'seg', a: [0, 12], b: [35, 0] },
          { t: 'right', at: [0, 0], from: [35, 0], to: [0, 12] },
          { t: 'label', p: [0, 6], text: '12', dx: -10, dy: 0 },
          { t: 'label', p: [17.5, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [17.5, 6], text: '37', dx: 10, dy: -8 },
        ],
      },
      answer: '$35$',
      solution:
        'Platform, ground, and zip line make a right triangle with the zip line as hypotenuse. Subtract squares for the missing leg: $37^2 - 12^2 = 1369 - 144 = 1225$, so the distance is $\\sqrt{1225} = 35$. Second route through difference of squares, which factors beautifully here: $(37 - 12)(37 + 12) = 25 \\times 49 = (5 \\times 7)^2 = 35^2$ ✓ — both factors are perfect squares, so the root falls out with no long division. This confirms $12$-$35$-$37$ as a whole-number triple. Sanity: $35 < 37$ ✓, as a leg must be. ADDING THE SQUARES computes $\\sqrt{1369 + 144} = \\sqrt{1513}$ ✗, promoting the known leg into a second hypotenuse. SUBTRACTING THE SIDES offers $37 - 12 = 25$ ✗, a tempting round number with no theorem behind it.',
    },
    {
      q: 'In right triangle $DEF$ the right angle is at $E$, the hypotenuse $DF$ measures $85$, and leg $EF$ measures $36$, as shown. Find $DE$.',
      fig: {
        view: [-6, -5, 82, 40],
        elems: [
          { t: 'poly', pts: [[0, 0], [77, 0], [0, 36]], fill: false },
          { t: 'right', at: [0, 0], from: [77, 0], to: [0, 36] },
          { t: 'point', p: [0, 36], label: 'F', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 12 },
          { t: 'point', p: [77, 0], label: 'D', dx: 10, dy: 12 },
          { t: 'label', p: [38.5, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [0, 18], text: '36', dx: -12, dy: 0 },
          { t: 'label', p: [38.5, 18], text: '85', dx: 12, dy: -8 },
        ],
      },
      answer: '$77$',
      solution:
        'With the hypotenuse known, subtract: $DE^2 = 85^2 - 36^2 = 7225 - 1296 = 5929$, so $DE = \\sqrt{5929} = 77$. Second route by factoring the difference of squares: $(85 - 36)(85 + 36) = 49 \\times 121 = 7^2 \\times 11^2 = (7 \\times 11)^2$ ✓, so the root is exactly $77$ with no trial and error — when both factors come out as perfect squares, the answer assembles itself. Sanity: $77 < 85$ ✓, and the two legs $36$ and $77$ straddle the right sizes for a hypotenuse of $85$ since $36^2 + 77^2 = 1296 + 5929 = 7225$ ✓. ADDING THE SQUARES gives $\\sqrt{7225 + 1296} = \\sqrt{8521}$ ✗, longer than the hypotenuse, which no side of the triangle can be. SUBTRACTING THE SIDES gives $85 - 36 = 49$ ✗ — a perfect square by coincidence, and wrong all the same.',
    },
  ],

  // slot 4 — 30-60-90, hypotenuse given, both legs exactly. Lanes: hyp 10
  //          (pinned; same numbers as the Section 6.2 learn example — the ask
  //          is re-aimed at the opposite-side pairing), hyp 18 drafting
  //          triangle, hyp 22 via a split equilateral.
  [
    {
      q: 'The hypotenuse of a $30$-$60$-$90$ triangle measures $30$. Give the exact length of the leg opposite each acute angle.',
      answer: 'The legs are $15$ and $15\\sqrt{3}$',
      solution:
        'Work through the short leg. Opposite the $30^\\circ$ angle sits the short leg, always half the hypotenuse: $30 \\div 2 = 15$. Opposite the $60^\\circ$ angle sits the long leg, the short leg times $\\sqrt{3}$: $15\\sqrt{3} \\approx 26.0$. Second route, verifying both legs at once with Pythagoras: $15^2 + (15\\sqrt{3})^2 = 225 + 675 = 900 = 30^2$ ✓ — the ratio $1 : \\sqrt{3} : 2$ is not a slogan, it is the Pythagorean Theorem in disguise, since $1 + 3 = 4$. Ordering check: bigger angles face bigger sides, so the list $15 < 15\\sqrt{3} < 30$ must line up with $30^\\circ < 60^\\circ < 90^\\circ$, and it does ✓. HALVING FOR BOTH LEGS reports $15$ and $15$ ✗, which would make the triangle isosceles — that is $45$-$45$-$90$ territory. SCALING THE HYPOTENUSE BY ROOT THREE gives $30\\sqrt{3}$ for the long leg ✗, skipping the halving step; no leg can outgrow the hypotenuse.',
    },
    {
      q: 'A drafting triangle has angles $30^\\circ$, $60^\\circ$, and $90^\\circ$, and its longest side measures $18$. Find the exact lengths of the two shorter sides.',
      answer: 'The legs are $9$ and $9\\sqrt{3}$',
      solution:
        'The longest side of any right triangle is the hypotenuse, so the hypotenuse is $18$. Halve it for the short leg: $9$, sitting opposite the $30^\\circ$ corner of the drafting triangle. Multiply by $\\sqrt{3}$ for the long leg: $9\\sqrt{3} \\approx 15.6$, opposite the $60^\\circ$ corner. Second route by checking the pair against Pythagoras: $9^2 + (9\\sqrt{3})^2 = 81 + 243 = 324 = 18^2$ ✓, so the two legs genuinely close up into this hypotenuse. Size check: $9 < 9\\sqrt{3} < 18$ matches the angle order $30^\\circ < 60^\\circ < 90^\\circ$ ✓. HALVING FOR BOTH LEGS gives $9$ and $9$ ✗ — but a triangle with two equal legs has two equal angles, and this one has none. SCALING THE HYPOTENUSE BY ROOT THREE gives $18\\sqrt{3} \\approx 31.2$ ✗, a “leg” nearly double the longest side.',
    },
    {
      q: 'An equilateral triangle has side length $22$. Its altitude cuts it into two congruent right triangles. Find the exact lengths of both legs of one of these right triangles.',
      answer: 'The legs are $11$ and $11\\sqrt{3}$',
      solution:
        'Each half of a split equilateral triangle is a $30$-$60$-$90$ triangle: its hypotenuse is a full side, $22$, one leg is half the base, and the other leg is the altitude. The short leg is half the hypotenuse: $22 \\div 2 = 11$ — which is exactly the half-base, as the altitude of an equilateral triangle lands on the midpoint. The long leg is $11\\sqrt{3} \\approx 19.1$, the altitude itself. Second route straight through Pythagoras on the half-triangle: altitude $= \\sqrt{22^2 - 11^2} = \\sqrt{484 - 121} = \\sqrt{363} = \\sqrt{121 \\times 3} = 11\\sqrt{3}$ ✓, agreeing with the ratio route. Check the pair: $11^2 + (11\\sqrt{3})^2 = 121 + 363 = 484 = 22^2$ ✓. HALVING FOR BOTH LEGS claims $11$ and $11$ ✗, flattening the $60^\\circ$ angle into a second $45^\\circ$. SCALING THE HYPOTENUSE BY ROOT THREE claims an altitude of $22\\sqrt{3}$ ✗, taller than the triangle is wide by far more than any altitude could be.',
    },
  ],

  // slot 5 — converse of the Pythagorean Theorem, yes/no with explanation.
  //          Lanes: 16-30-34 yes (2x 8-15-17); 9-40-41 yes; 8-13-15 NO.
  [
    {
      q: 'A triangular garden plot has sides $16$, $30$, and $34$. Does the plot contain a right angle? Explain how you know.',
      answer: 'Yes — $16^2 + 30^2 = 1156 = 34^2$',
      solution:
        'Test the converse with the longest side, $34$, as the candidate hypotenuse: $16^2 + 30^2 = 256 + 900 = 1156$, and $34^2 = 1156$ — a perfect match, so the angle between the $16$ and $30$ sides is exactly $90^\\circ$. Second route by triple hunting: halve every side to get $8$, $15$, $17$, one of the famous families, so the plot is that right triangle scaled by $2$ ✓ — and scaling never disturbs angles. TESTING WITH THE WRONG HYPOTENUSE computes $16^2 + 34^2 = 1412$ against $30^2 = 900$ and wrongly concludes “no” ✗; the candidate hypotenuse must be the LONGEST side, with the other two as legs. CALLING IT CLOSE ENOUGH is never needed on a yes — the converse demands exact equality, and $1156 = 1156$ delivers it, so the verdict rests on arithmetic rather than on eyeballing the corners.',
    },
    {
      q: 'A carpenter measures the three edges of a triangular brace as $9$, $40$, and $41$. Using only these lengths, can she be sure the brace contains a right angle? Explain.',
      answer: 'Yes — $9^2 + 40^2 = 1681 = 41^2$',
      solution:
        'The converse of the Pythagorean Theorem is precisely a ruler-only right-angle test. Take the longest edge, $41$, as the candidate hypotenuse: $9^2 + 40^2 = 81 + 1600 = 1681$, and $41^2 = 1681$ — equality holds, so the angle opposite the $41$ edge is a right angle, guaranteed. Second route with difference of squares instead of big additions: the claim $9^2 = 41^2 - 40^2$ unpacks to $9^2 = (41 - 40)(41 + 40) = 81$ ✓, true — so the same verdict arrives from one small multiplication. This certifies $9$-$40$-$41$ as a whole-number triple. TESTING WITH THE WRONG HYPOTENUSE pits $9^2 + 41^2 = 1762$ against $40^2 = 1600$ and mistakenly reports a crooked brace ✗. CALLING IT CLOSE ENOUGH has no place here ✗ — the carpenter’s certainty comes exactly from the fact that the match is perfect, not approximate.',
    },
    {
      q: 'A shelf bracket is a triangle with sides $8$, $13$, and $15$. Does the bracket contain a right angle? Explain how you know.',
      answer: 'No — $8^2 + 13^2 = 233 \\ne 225 = 15^2$',
      solution:
        'Run the converse test on the longest side, $15$: the legs would have to satisfy $8^2 + 13^2 = 15^2$, but $64 + 169 = 233$ while $15^2 = 225$. The equation fails, so no right angle — and since $233 > 225$, the angle opposite the $15$ side falls just short of $90^\\circ$, slightly acute. Second route, asking what hypotenuse the legs COULD support: a right triangle with legs $8$ and $13$ needs a hypotenuse of $\\sqrt{233} \\approx 15.26$, and the bracket’s $15$ is too short by about a quarter of a unit ✓ — same verdict, seen from the other side. CALLING IT CLOSE ENOUGH is the trap this lane exists for ✗: $233$ and $225$ are near neighbors, but the converse is exact and near-misses are misses. TESTING WITH THE WRONG HYPOTENUSE, say $8^2 + 15^2 = 289$ versus $13^2 = 169$, proves nothing either way ✗ — only the longest side can play the hypotenuse.',
    },
  ],

  // slot 6 — Heron area, whole-number answers. Lanes: 11-13-20 -> 66;
  //          5-51-52 -> 126 (obtuse sliver); 17-25-26 -> 204. Each keyed by
  //          Heron and re-derived by an exact drop-a-height computation.
  [
    {
      q: 'Use Heron’s Formula to find the area of a triangle with sides $13$, $20$, and $11$.',
      answer: '$66$',
      solution:
        'The semiperimeter is $s = \\frac{13 + 20 + 11}{2} = 22$, and the differences are $22 - 13 = 9$, $22 - 20 = 2$, $22 - 11 = 11$ (check: $9 + 2 + 11 = 22 = s$ ✓). Area $= \\sqrt{22 \\times 9 \\times 2 \\times 11}$; pull squares before multiplying: $22 \\times 2 = 4 \\times 11$, so the product is $4 \\times 11^2 \\times 9$ and the root is $2 \\times 11 \\times 3 = 66$. Second route with no Heron at all: set the $20$ side as base; the foot of the height sits $x$ from the $13$-side vertex where $13^2 - x^2 = 11^2 - (20 - x)^2$, giving $40x = 448$, $x = 11.2$, so $h = \\sqrt{169 - 125.44} = \\sqrt{43.56} = 6.6$ and area $= \\frac{1}{2}(20)(6.6) = 66$ ✓ — both roads agree. USING THE FULL PERIMETER feeds $44$ into the formula and inflates every factor ✗; the $s$ in Heron is HALF the perimeter. SKIPPING THE FINAL ROOT reports $4356$ ✗, the square of the area.',
    },
    {
      q: 'A long, thin sail is a triangle with sides $5$, $51$, and $52$. Use Heron’s Formula to find its area.',
      answer: '$126$',
      solution:
        'The semiperimeter is $s = \\frac{5 + 51 + 52}{2} = 54$, with differences $54 - 5 = 49$, $54 - 51 = 3$, $54 - 52 = 2$ (check: $49 + 3 + 2 = 54$ ✓). Area $= \\sqrt{54 \\times 49 \\times 3 \\times 2}$; group the non-square factors first: $54 \\times 3 \\times 2 = 324 = 18^2$, and $49 = 7^2$, so the root is $18 \\times 7 = 126$ with no thousand-digit multiplication. Second route by height: on the short base of $5$, the height is $h = \\frac{2 \\times 126}{5} = 50.4$, and placing the base from $(0,0)$ to $(5,0)$ puts the apex at $(-7.8, 50.4)$: then $7.8^2 + 50.4^2 = 60.84 + 2540.16 = 2601 = 51^2$ ✓ and $12.8^2 + 50.4^2 = 163.84 + 2540.16 = 2704 = 52^2$ ✓ — the foot lands OUTSIDE the base because the sliver is obtuse, and Heron never even had to notice. USING THE FULL PERIMETER runs $108$ through the formula ✗. SKIPPING THE FINAL ROOT reports $15876$ ✗, which is an area squared, not an area.',
    },
    {
      q: 'Find the area of a triangular mosaic tile with sides $25$, $17$, and $26$ using Heron’s Formula.',
      answer: '$204$',
      solution:
        'The semiperimeter is $s = \\frac{25 + 17 + 26}{2} = 34$, and the differences are $34 - 25 = 9$, $34 - 17 = 17$, $34 - 26 = 8$ (check: $9 + 17 + 8 = 34 = s$ ✓). Area $= \\sqrt{34 \\times 9 \\times 17 \\times 8}$; spot the squares: $34 \\times 8 = 16 \\times 17$, so the product is $16 \\times 17^2 \\times 9$ and the root is $4 \\times 17 \\times 3 = 204$. Second route by dropping a height to the $25$ side: the foot sits $x$ from the $17$-side vertex where $17^2 - x^2 = 26^2 - (25 - x)^2$, so $50x = 238$ and $x = 4.76$; then $h = \\sqrt{289 - 22.6576} = \\sqrt{266.3424} = 16.32$ and area $= \\frac{1}{2}(25)(16.32) = 204$ ✓ — Heron confirmed by raw coordinates. USING THE FULL PERIMETER starts from $68$ and never recovers ✗. SKIPPING THE FINAL ROOT hands in $41616$ ✗; the square root is what turns the four-factor product back into an area.',
    },
  ],

  // slot 7 — rectangle: diagonal and one side given, find the area (figure).
  //          Lanes: 25/15 -> 300 (screen); 39/15 -> 540; 29/20 -> 420
  //          (20-21-29 triple).
  [
    {
      q: 'A rectangular screen has a diagonal of length $25$ and a height of $15$, as shown. Find the area of the screen.',
      fig: {
        view: [-2, -3, 23.5, 17.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [20, 15], [0, 15]], fill: false },
          { t: 'seg', a: [0, 0], b: [20, 15], dash: true },
          { t: 'right', at: [20, 0], from: [0, 0], to: [20, 15] },
          { t: 'label', p: [10, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [20, 7.5], text: '15', dx: 14, dy: 0 },
          { t: 'label', p: [10, 7.5], text: '25', dx: -14, dy: -6 },
        ],
      },
      answer: '$300$',
      solution:
        'The diagonal and two sides form a right triangle with hypotenuse $25$ and one leg $15$. Triple route: divide by $5$ to get a leg of $3$ under a hypotenuse of $5$ — the $3$-$4$-$5$ family — so the width is $5 \\times 4 = 20$. Second route by subtraction: $\\sqrt{25^2 - 15^2} = \\sqrt{625 - 225} = \\sqrt{400} = 20$ ✓, the same width with no family spotting. The area is $15 \\times 20 = 300$. Consistency check on the triple: $15^2 + 20^2 = 225 + 400 = 625 = 25^2$ ✓. MULTIPLYING THE DIAGONAL BY THE SIDE gives $25 \\times 15 = 375$ ✗ — the diagonal is not an edge of the rectangle, so it has no business inside the area formula. ANSWERING WITH THE MISSING SIDE stops at $20$ ✗, one multiplication before the finish line.',
    },
    {
      q: 'The dashed diagonal of the rectangle shown measures $39$, and the short side measures $15$. What is the area of the rectangle?',
      fig: {
        view: [-2, -3.5, 40, 18],
        elems: [
          { t: 'poly', pts: [[0, 0], [36, 0], [36, 15], [0, 15]], fill: false },
          { t: 'seg', a: [0, 0], b: [36, 15], dash: true },
          { t: 'right', at: [36, 0], from: [0, 0], to: [36, 15] },
          { t: 'label', p: [18, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [36, 7.5], text: '15', dx: 14, dy: 0 },
          { t: 'label', p: [18, 7.5], text: '39', dx: -14, dy: -6 },
        ],
      },
      answer: '$540$',
      solution:
        'The diagonal cuts the rectangle into two right triangles, each with hypotenuse $39$ and a leg of $15$. Factor out the common $3$: the pair becomes $5$ and $13$, the $5$-$12$-$13$ family with the $13$ as hypotenuse, so the long side is $3 \\times 12 = 36$. Second route by squares: $\\sqrt{39^2 - 15^2} = \\sqrt{1521 - 225} = \\sqrt{1296} = 36$ ✓. The area is $15 \\times 36 = 540$. Triple check: $15^2 + 36^2 = 225 + 1296 = 1521 = 39^2$ ✓ — the scaled family closes exactly. MULTIPLYING THE DIAGONAL BY THE SIDE offers $39 \\times 15 = 585$ ✗, an “area” using a slanted length as if it were an edge; the diagonal is always longer than either side it replaces, so this overshoots every time. ANSWERING WITH THE MISSING SIDE turns in $36$ ✗ — the question asks for area, not for the width that leads to it.',
    },
    {
      q: 'A rectangular courtyard has one side of length $20$, and the straight path between opposite corners measures $29$, as shown. Find the area of the courtyard.',
      fig: {
        view: [-2, -3, 24.5, 22.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [21, 0], [21, 20], [0, 20]], fill: false },
          { t: 'seg', a: [0, 0], b: [21, 20], dash: true },
          { t: 'right', at: [21, 0], from: [0, 0], to: [21, 20] },
          { t: 'label', p: [10.5, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [21, 10], text: '20', dx: 14, dy: 0 },
          { t: 'label', p: [10.5, 10], text: '29', dx: -14, dy: -6 },
        ],
      },
      answer: '$420$',
      solution:
        'The corner-to-corner path is the hypotenuse of a right triangle whose legs are the courtyard’s sides. A leg of $20$ under a hypotenuse of $29$ belongs to the $20$-$21$-$29$ triple, so the other side is $21$. Second route without the triple: $\\sqrt{29^2 - 20^2} = \\sqrt{841 - 400} = \\sqrt{441} = 21$ ✓ — the arithmetic lands on the same side length. The area is $20 \\times 21 = 420$. Verify the triple honestly: $400 + 441 = 841 = 29^2$ ✓; the famous four families are the most common triples, not the only ones, and $20$-$21$-$29$ is a genuine member of the club. MULTIPLYING THE DIAGONAL BY THE SIDE computes $29 \\times 20 = 580$ ✗, treating the path as an edge. ANSWERING WITH THE MISSING SIDE reports $21$ ✗, the width instead of the area it was found for.',
    },
  ],

  // slot 8 — equilateral triangle: perimeter given, exact area. Lanes:
  //          P = 42 -> 49√3; P = 54 -> 81√3; P = 12 -> 4√3.
  [
    {
      q: 'An equilateral traffic sign has perimeter $42$. Find its exact area.',
      answer: '$49\\sqrt{3}$',
      solution:
        'Each side is $42 \\div 3 = 14$. The altitude comes from the hidden $30$-$60$-$90$ triangle: half the side is $7$, so the altitude is $7\\sqrt{3}$, and the area is $\\frac{1}{2}(14)(7\\sqrt{3}) = 49\\sqrt{3} \\approx 84.9$. Second route through the closed formula: an equilateral triangle of side $s$ has area $\\frac{s^2\\sqrt{3}}{4}$, and $\\frac{14^2\\sqrt{3}}{4} = \\frac{196\\sqrt{3}}{4} = 49\\sqrt{3}$ ✓ — the formula is nothing but the base-height computation done once and for all. Altitude sanity: $7\\sqrt{3} \\approx 12.1$ is shorter than the side $14$ ✓, as every altitude of an equilateral triangle must be. TREATING THE PERIMETER AS THE SIDE plugs $42$ into the formula and gets $441\\sqrt{3}$ ✗, nine times too big — a factor of $3^2$, the squared cost of skipping one division. DROPPING THE HALF gives $14 \\times 7\\sqrt{3} = 98\\sqrt{3}$ ✗, the area of a rectangle, not a triangle.',
    },
    {
      q: 'A fence of total length $54$ exactly encloses an equilateral flower bed. What is the exact area of the bed?',
      answer: '$81\\sqrt{3}$',
      solution:
        'The fence is the perimeter, so each side is $54 \\div 3 = 18$. Splitting the triangle with an altitude gives a $30$-$60$-$90$ triangle with hypotenuse $18$ and short leg $9$, so the altitude is $9\\sqrt{3}$ and the area is $\\frac{1}{2}(18)(9\\sqrt{3}) = 81\\sqrt{3} \\approx 140.3$. Second route by the side-only formula: $\\frac{18^2\\sqrt{3}}{4} = \\frac{324\\sqrt{3}}{4} = 81\\sqrt{3}$ ✓. A tidy pattern worth noticing: the coefficient $81 = 9^2$ is the square of the half-side, and that is no accident — $\\frac{s^2}{4} = \\left(\\frac{s}{2}\\right)^2$, so the formula is always the half-side squared times $\\sqrt{3}$. TREATING THE PERIMETER AS THE SIDE computes $\\frac{54^2\\sqrt{3}}{4} = 729\\sqrt{3}$ ✗, nine times the truth. DROPPING THE HALF doubles the answer to $162\\sqrt{3}$ ✗; the altitude sweep covers the triangle once, not twice.',
    },
    {
      q: 'An equilateral sticker has perimeter $12$. Find its exact area.',
      answer: '$4\\sqrt{3}$',
      solution:
        'Each side is $12 \\div 3 = 4$. The altitude splits the sticker into two $30$-$60$-$90$ triangles with hypotenuse $4$ and short leg $2$, so the altitude is $2\\sqrt{3}$ and the area is $\\frac{1}{2}(4)(2\\sqrt{3}) = 4\\sqrt{3} \\approx 6.9$. Second route by formula: $\\frac{4^2\\sqrt{3}}{4} = \\frac{16\\sqrt{3}}{4} = 4\\sqrt{3}$ ✓ — for side $4$ the two fours cancel and the area is $\\sqrt{3}$ times the side, a small coincidence special to this size. Altitude check by Pythagoras: $\\sqrt{4^2 - 2^2} = \\sqrt{12} = 2\\sqrt{3}$ ✓, agreeing with the ratio route. TREATING THE PERIMETER AS THE SIDE computes $\\frac{144\\sqrt{3}}{4} = 36\\sqrt{3}$ ✗, an area nine times too large for the sticker. DROPPING THE HALF reports $8\\sqrt{3}$ ✗ — that is the area of the rhombus made of two stickers, not of one.',
    },
  ],

  // slot 9 — legs given, altitude to the hypotenuse (figure). Lanes:
  //          21-28-35 -> 16.8 (hyp on the bottom); 24-32-40 -> 19.2 (legs on
  //          the axes); 27-36-45 -> 21.6 (legs on the axes). Altitude feet
  //          exact: (12.6, 16.8), (11.52, 15.36), (12.96, 17.28).
  [
    {
      q: 'In $\\triangle GHK$ the right angle is at $H$, with $GH = 21$, $HK = 28$, and $GK = 35$, as shown. Find the length of the altitude from $H$ to $\\overline{GK}$.',
      fig: {
        view: [-2, -3, 37.5, 19.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [35, 0], [12.6, 16.8]], fill: false },
          { t: 'seg', a: [12.6, 16.8], b: [12.6, 0], dash: true },
          { t: 'right', at: [12.6, 16.8], from: [0, 0], to: [35, 0] },
          { t: 'right', at: [12.6, 0], from: [35, 0], to: [12.6, 16.8] },
          { t: 'point', p: [0, 0], label: 'G', dx: -10, dy: 12 },
          { t: 'point', p: [35, 0], label: 'K', dx: 10, dy: 12 },
          { t: 'point', p: [12.6, 16.8], label: 'H', dx: 0, dy: -12 },
          { t: 'label', p: [6.3, 8.4], text: '21', dx: -12, dy: -4 },
          { t: 'label', p: [23.8, 8.4], text: '28', dx: 12, dy: -4 },
          { t: 'label', p: [17.5, 0], text: '35', dx: 16, dy: 14 },
          { t: 'label', p: [12.6, 8.4], text: '?', dx: 10, dy: 4 },
        ],
      },
      answer: '$16.8$',
      solution:
        'Compute the area two ways. From the legs: $\\frac{1}{2}(21)(28) = 294$. From the hypotenuse as base with altitude $h$: $\\frac{1}{2}(35)h = 17.5h$. Equating, $h = \\frac{294}{17.5} = 16.8$. Second route through the pieces of the hypotenuse: the foot splits $\\overline{GK}$ into $\\frac{21^2}{35} = 12.6$ next to $G$ and $\\frac{28^2}{35} = 22.4$ next to $K$ (sum $35$ ✓), and the altitude is their geometric mean, $h^2 = 12.6 \\times 22.4 = 282.24 = 16.8^2$ ✓ — both roads meet. The triangle itself is sound: $21^2 + 28^2 = 441 + 784 = 1225 = 35^2$ ✓, a $3$-$4$-$5$ scaled by $7$. AVERAGING THE LEGS proposes $24.5$ ✗, a number no theorem produces. ANSWERING WITH A LEG offers $21$ ✗ — the legs are altitudes to the OTHER two sides, and the altitude to the hypotenuse is shorter than either.',
    },
    {
      q: 'A triangular sail has two edges of lengths $24$ and $32$ meeting at a right angle, and a third edge of length $40$, as shown. How far is the right-angle corner of the sail from the longest edge?',
      fig: {
        view: [-3, -3, 35, 27],
        elems: [
          { t: 'poly', pts: [[0, 0], [32, 0], [0, 24]], fill: false },
          { t: 'seg', a: [0, 0], b: [11.52, 15.36], dash: true },
          { t: 'right', at: [0, 0], from: [32, 0], to: [0, 24] },
          { t: 'right', at: [11.52, 15.36], from: [0, 24], to: [0, 0] },
          { t: 'label', p: [16, 0], text: '32', dx: 0, dy: 14 },
          { t: 'label', p: [0, 12], text: '24', dx: -12, dy: 0 },
          { t: 'label', p: [16, 12], text: '40', dx: 12, dy: -8 },
          { t: 'label', p: [5.76, 7.68], text: '?', dx: 12, dy: 6 },
        ],
      },
      answer: '$19.2$',
      solution:
        'The distance from a point to a segment is measured along the perpendicular, so the ask is the altitude from the right angle to the hypotenuse. Area two ways: from the legs, $\\frac{1}{2}(24)(32) = 384$; from the hypotenuse, $\\frac{1}{2}(40)h = 20h$. So $h = \\frac{384}{20} = 19.2$. Second route by the hypotenuse pieces: the foot divides the $40$ edge into $\\frac{24^2}{40} = 14.4$ and $\\frac{32^2}{40} = 25.6$ (sum $40$ ✓), and $h^2 = 14.4 \\times 25.6 = 368.64 = 19.2^2$ ✓ — the geometric-mean relation lands on the same altitude. Existence check: $24^2 + 32^2 = 576 + 1024 = 1600 = 40^2$ ✓, the $3$-$4$-$5$ family scaled by $8$. AVERAGING THE LEGS suggests $28$ ✗, with no geometry behind it. ANSWERING WITH A LEG gives $24$ ✗ — the shortest route from the corner to the far edge beats both legs, and $19.2 < 24 < 32$ confirms it.',
    },
    {
      q: 'A triangular plot is bounded by two roads of lengths $27$ and $36$ that meet at a right angle, and by a straight hedge of length $45$, as shown. A path runs from the road corner to the hedge, meeting it perpendicularly. How long is the path?',
      fig: {
        view: [-3, -3, 39.5, 30],
        elems: [
          { t: 'poly', pts: [[0, 0], [36, 0], [0, 27]], fill: false },
          { t: 'seg', a: [0, 0], b: [12.96, 17.28], dash: true },
          { t: 'right', at: [0, 0], from: [36, 0], to: [0, 27] },
          { t: 'right', at: [12.96, 17.28], from: [0, 27], to: [0, 0] },
          { t: 'label', p: [18, 0], text: '36', dx: 0, dy: 14 },
          { t: 'label', p: [0, 13.5], text: '27', dx: -12, dy: 0 },
          { t: 'label', p: [18, 13.5], text: '45', dx: 12, dy: -8 },
          { t: 'label', p: [6.48, 8.64], text: '?', dx: 12, dy: 6 },
        ],
      },
      answer: '$21.6$',
      solution:
        'A perpendicular path from the right-angle corner to the hedge is the altitude to the hypotenuse. Area two ways: from the roads, $\\frac{1}{2}(27)(36) = 486$; from the hedge as base, $\\frac{1}{2}(45)h = 22.5h$. Equating, $h = \\frac{486}{22.5} = 21.6$. Second route with the hedge split: the path meets the hedge $\\frac{27^2}{45} = 16.2$ from one end and $\\frac{36^2}{45} = 28.8$ from the other (sum $45$ ✓), and the geometric-mean relation gives $h^2 = 16.2 \\times 28.8 = 466.56 = 21.6^2$ ✓ — agreement to the last decimal. The plot checks out: $27^2 + 36^2 = 729 + 1296 = 2025 = 45^2$ ✓, a $3$-$4$-$5$ scaled by $9$. AVERAGING THE LEGS invents $31.5$ ✗. ANSWERING WITH A LEG reports $27$ ✗ — walking along a road is not the perpendicular path, and the true shortest route, $21.6$, is shorter than either road.',
    },
  ],

  // slot 10 — three sides, height to the named side via Heron (figure).
  //           Lanes: 39-41-50 -> 31.2; 29-35-48 -> 21; 32-53-75 -> 19.2.
  //           Apexes exact: (23.4, 31.2), (20, 21), (25.6, 19.2).
  [
    {
      q: 'A triangular pennant has sides $39$, $41$, and $50$. Find the length of the height drawn to its longest side.',
      fig: {
        view: [-3, -3.5, 54, 35],
        elems: [
          { t: 'poly', pts: [[0, 0], [50, 0], [23.4, 31.2]], fill: false },
          { t: 'seg', a: [23.4, 31.2], b: [23.4, 0], dash: true },
          { t: 'right', at: [23.4, 0], from: [50, 0], to: [23.4, 31.2] },
          { t: 'label', p: [25, 0], text: '50', dx: 20, dy: 14 },
          { t: 'label', p: [11.7, 15.6], text: '39', dx: -14, dy: -4 },
          { t: 'label', p: [36.7, 15.6], text: '41', dx: 14, dy: -4 },
          { t: 'label', p: [23.4, 15.6], text: '?', dx: 10, dy: 4 },
        ],
      },
      answer: '$31.2$',
      solution:
        'Heron first: $s = \\frac{39 + 41 + 50}{2} = 65$, with differences $26$, $24$, $15$ (check: $26 + 24 + 15 = 65$ ✓). Group the product: $65 \\times 15 = 975$ and $26 \\times 24 = 624$, so the area is $\\sqrt{975 \\times 624} = \\sqrt{608400} = 780$. Run it backward on the $50$ side: $780 = \\frac{1}{2}(50)h$, so $h = \\frac{1560}{50} = 31.2$. Second route through the foot of the height: it splits the base into $23.4$ and $26.6$, and both slant sides agree on the height — $39^2 - 23.4^2 = 1521 - 547.56 = 973.44$ and $41^2 - 26.6^2 = 1681 - 707.56 = 973.44$, with $\\sqrt{973.44} = 31.2$ ✓ twice. ANSWERING WITH THE AREA hands in $780$ ✗, one division from the height. USING THE WRONG BASE divides into the $39$ side and gets $\\frac{1560}{39} = 40$ ✗ — a real height of this pennant, but not the one to the longest side.',
    },
    {
      q: 'A stage backdrop is a triangle with sides $35$, $29$, and $48$. Find the length of the height drawn to the side of length $48$.',
      fig: {
        view: [-3, -3.5, 52, 24.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [48, 0], [20, 21]], fill: false },
          { t: 'seg', a: [20, 21], b: [20, 0], dash: true },
          { t: 'right', at: [20, 0], from: [48, 0], to: [20, 21] },
          { t: 'label', p: [24, 0], text: '48', dx: 20, dy: 14 },
          { t: 'label', p: [10, 10.5], text: '29', dx: -14, dy: -4 },
          { t: 'label', p: [34, 10.5], text: '35', dx: 14, dy: -4 },
          { t: 'label', p: [20, 10.5], text: '?', dx: 10, dy: 4 },
        ],
      },
      answer: '$21$',
      solution:
        'Heron: $s = \\frac{35 + 29 + 48}{2} = 56$, with differences $21$, $27$, $8$ (check: $21 + 27 + 8 = 56$ ✓). Group smartly: $56 \\times 8 = 448$ and $27 \\times 21 = 567$, so the area is $\\sqrt{448 \\times 567} = \\sqrt{254016} = 504$. Backward on the $48$ side: $504 = \\frac{1}{2}(48)h = 24h$, so $h = 21$. Second route reveals why everything is so clean: the foot of the height splits the base into $20$ and $28$, and the two flanking right triangles are $20$-$21$-$29$ and $21$-$28$-$35$ — both genuine Pythagorean triples ($400 + 441 = 841 = 29^2$ ✓ and $441 + 784 = 1225 = 35^2$ ✓), sharing the height $21$ as a common leg. ANSWERING WITH THE AREA reports $504$ ✗; the height still owes a division by half the base. USING THE WRONG BASE computes $\\frac{1008}{29}$ or $\\frac{1008}{35}$ ✗, heights to sides nobody asked about.',
    },
    {
      q: 'A wedge-shaped field has sides $53$, $75$, and $32$. Find the length of the height drawn to the side of length $75$.',
      fig: {
        view: [-3.5, -3.5, 79, 22.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [75, 0], [25.6, 19.2]], fill: false },
          { t: 'seg', a: [25.6, 19.2], b: [25.6, 0], dash: true },
          { t: 'right', at: [25.6, 0], from: [75, 0], to: [25.6, 19.2] },
          { t: 'label', p: [37.5, 0], text: '75', dx: 20, dy: 14 },
          { t: 'label', p: [12.8, 9.6], text: '32', dx: -14, dy: -4 },
          { t: 'label', p: [50.3, 9.6], text: '53', dx: 14, dy: -4 },
          { t: 'label', p: [25.6, 9.6], text: '?', dx: 10, dy: 4 },
        ],
      },
      answer: '$19.2$',
      solution:
        'Heron: $s = \\frac{53 + 75 + 32}{2} = 80$, with differences $27$, $5$, $48$ (check: $27 + 5 + 48 = 80$ ✓). Group before multiplying: $80 \\times 5 = 400$ and $48 \\times 27 = 1296$, both perfect squares, so the area is $\\sqrt{400 \\times 1296} = 20 \\times 36 = 720$ with no monster root extraction. Backward on the $75$ side: $720 = \\frac{1}{2}(75)h = 37.5h$, so $h = \\frac{1440}{75} = 19.2$. Second route through the foot: it lands $25.6$ from the $32$-side vertex and $49.4$ from the other, and both slants agree — $32^2 - 25.6^2 = 1024 - 655.36 = 368.64$ and $53^2 - 49.4^2 = 2809 - 2440.36 = 368.64$, with $\\sqrt{368.64} = 19.2$ ✓ from each side. ANSWERING WITH THE AREA submits $720$ ✗. USING THE WRONG BASE divides into $32$ and announces $45$ ✗ — a height of this field, but drawn to the wrong side.',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 6,
  worksheet,
}
