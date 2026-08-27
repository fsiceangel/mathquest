// Introduction to Geometry chapter 10 — variations for the printable worksheet.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key anywhere in
//    this file. Answers copy the base worksheet's phrasing shapes: side-order
//    chains for slot 1, 'Right/Obtuse/Acute, because …' for slot 2, bare
//    inequalities for slots 3 and 8, '$N$ integer lengths' for slot 4,
//    'No — a + b = c, so the figure is flat (degenerate)' for slot 5,
//    'Largest: …; smallest: …' for slot 6, the listed n-values with a count
//    in words for slot 7, 'Strictly less than $N$ m' for slot 9, and
//    '$n = a$ and $n = b$' (or '$n = 8$ only') for slot 10.
//  - Every answer was worked twice by two genuinely different routes, and the
//    routes had to agree before the key was written: rank-the-angles-and-swap
//    vs anchoring the two extremes (slots 1 and 6); the squared comparison on
//    the longest side vs scaling to a known triple or the right-hypotenuse
//    benchmark (slot 2); the difference/sum window vs an endpoint audit with
//    an interior probe (slots 3 and 8); counting the inclusive run vs the
//    2a − 1 shortcut, where a is the smaller given side (slot 4); the
//    shortest-pair check vs the straight-walk argument (slot 5); the two-case
//    hypotenuse-vs-long-side split vs a full sweep of the middle band
//    (slot 7); the detour bound vs eliminating equality and overshoot
//    outright (slot 9); and solving both hypotenuse equations vs plugging
//    each recovered triple back into Pythagoras numerically (slot 10).
//  - Slot 10's case split was checked before anything was written: n itself
//    can never be the hypotenuse (n < n + k always), so exactly two cases
//    exist per lane. Lane 1: n² + 8n − 768 = 0 gives n = 24, and the linear
//    remnant 16n = 1536 gives n = 96. Lane 2: n² + 2n − 48 = 0 gives n = 6,
//    and 4n = 96 gives n = 24. Lane 3: n² + 7n − 120 = 0 gives n = 8, and the
//    other case collapses to 14n = 240, which no integer satisfies — so lane
//    3 keys a single value, exactly as pinned.
//  - Figures are coordinate-exact and were verified numerically, never
//    eyeballed. Slot 1's apex is solved from the two base angles and rounded
//    to hundredths: (2.29, 2.73) realizes 50-58-72, (0.51, 2.89) realizes
//    80-44-56, and (2.65, 4.41) realizes 59-73-48, every marked angle within
//    a tenth of a degree of its label. Slot 9 draws its paths at 1 unit =
//    50 m with EXACT leg lengths built from 3-4-5 direction vectors: legs
//    8.4 and 5.2 units (420 m, 260 m), 10.2 and 7.6 units (510 m, 380 m),
//    and 5.5 and 9.3 units (275 m, 465 m), with the middle point off the
//    dashed direct line every time.
//  - Figure labels are plain text: bare numerals, distances like '420 m',
//    and the letters of points.
//  - Pin deviations: none — all thirty lanes use their pinned values.
//  - Lanes that brush against base or learn content, flagged in the
//    authoring report: slot 1 lane 1's answer chain BC < AC < AB is forced
//    by its pinned angles and coincides with both the base worksheet slot 1
//    answer and Section 10.1's first learn example (all three use different
//    angle triples); slot 7 lane 2 reuses the side pair 8 and 13 that
//    Section 10.3's second learn example uses for a third-side window
//    (a different question); slot 10 lane 2's triples 6-8-10 and 10-24-26
//    echo Section 10.2 problems 1 and 7 (6-8-10) and this file's own slot 2
//    lane 1 (10-24-26) — all forced by the pinned n-values.
//  - Traps that run through the file, named in CAPS at the end of each
//    solution: PAIRING THE ANGLE WITH A TOUCHING SIDE, FLIPPING THE ORDER,
//    TESTING A SHORTER SIDE, CALLING THE BALANCE OBTUSE, FLIPPING THE
//    VERDICT, INCLUDING THE ENDPOINTS, FORGETTING THE LOWER BOUND, COUNTING
//    THE ENDPOINTS, SUBTRACTING WITHOUT ADDING ONE, CHECKING THE WRONG PAIR,
//    ACCEPTING A TIE, PICKING AN ANGLE TOUCHING THE LONGEST SIDE, SWAPPING
//    THE EXTREMES, STOPPING AT ONE CASE, SKIPPING THE TRIANGLE CHECK,
//    DROPPING THE SECOND INEQUALITY, ALLOWING THE ENDPOINTS, TREATING THE
//    BOUND AS ATTAINABLE, REPORTING THE DIFFERENCE, STOPPING AT THE FIRST
//    CASE, and KEEPING THE NEGATIVE ROOT.

const worksheet = [
  // slot 1 — three marked angles, order the sides (figure).
  //          Lanes: 50-58-72 -> BC < AC < AB; 80-44-56 -> AC < AB < BC;
  //          59-73-48 -> AB < BC < AC.
  [
    {
      q: 'The figure shows triangle $ABC$ with $\\angle A = 50^\\circ$, $\\angle B = 58^\\circ$, and $\\angle C = 72^\\circ$. Without measuring anything, rank the three sides from shortest to longest.',
      fig: {
        view: [-0.8, -0.8, 4.8, 3.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2.29, 2.73]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [2.29, 2.73], label: 'C', dx: 4, dy: -10 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [2.29, 2.73], r: 0.8, label: '50' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [2.29, 2.73], r: 0.65, label: '58' },
          { t: 'angle', at: [2.29, 2.73], from: [4, 0], to: [0, 0], r: 0.5, label: '72' },
        ],
      },
      answer: '$BC < AC < AB$',
      solution:
        'The angles check out: $50^\\circ + 58^\\circ + 72^\\circ = 180^\\circ$ ✓. Each side inherits its rank from the angle it faces: $\\overline{BC}$ faces $\\angle A = 50^\\circ$, $\\overline{AC}$ faces $\\angle B = 58^\\circ$, and $\\overline{AB}$ faces $\\angle C = 72^\\circ$, so $BC < AC < AB$. Second route by anchoring the extremes: the largest angle, $72^\\circ$ at $C$, pulls the one side that never touches $C$ — that is $\\overline{AB}$ — out to be longest ✓; the smallest angle, at $A$, pins $\\overline{BC}$ as shortest ✓; and $\\overline{AC}$ takes the middle seat by elimination ✓. PAIRING THE ANGLE WITH A TOUCHING SIDE ranks $\\overline{AB}$ by $\\angle A$ ✗ — the side opposite $\\angle A$ is the one that avoids vertex $A$ entirely. FLIPPING THE ORDER files $AB < AC < BC$ ✗, handing the biggest angle the shortest side.',
    },
    {
      q: 'A triangular garden plot $ABC$ has corner angles of $80^\\circ$ at $A$, $44^\\circ$ at $B$, and $56^\\circ$ at $C$, as marked. Order its three edges from shortest to longest.',
      fig: {
        view: [-0.9, -0.8, 4.3, 3.7],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.5, 0], [0.51, 2.89]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [3.5, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [0.51, 2.89], label: 'C', dx: 0, dy: -12 },
          { t: 'angle', at: [0, 0], from: [3.5, 0], to: [0.51, 2.89], r: 0.55, label: '80' },
          { t: 'angle', at: [3.5, 0], from: [0, 0], to: [0.51, 2.89], r: 0.9, label: '44' },
          { t: 'angle', at: [0.51, 2.89], from: [3.5, 0], to: [0, 0], r: 0.6, label: '56' },
        ],
      },
      answer: '$AC < AB < BC$',
      solution:
        'First the sum: $80^\\circ + 44^\\circ + 56^\\circ = 180^\\circ$ ✓. Swap each angle for the edge across from it: $\\overline{BC}$ faces $\\angle A = 80^\\circ$, $\\overline{AC}$ faces $\\angle B = 44^\\circ$, and $\\overline{AB}$ faces $\\angle C = 56^\\circ$; ranking the angles $44^\\circ < 56^\\circ < 80^\\circ$ ranks the edges $AC < AB < BC$. Second route by anchoring the extremes: the $80^\\circ$ corner at $A$ makes the edge avoiding $A$ — $\\overline{BC}$ — the longest ✓; the pinched $44^\\circ$ corner at $B$ makes $\\overline{AC}$ the shortest ✓; $\\overline{AB}$ is the middle edge by elimination ✓. PAIRING THE ANGLE WITH A TOUCHING SIDE crowns $\\overline{AB}$ or $\\overline{AC}$ for the $80^\\circ$ at $A$ ✗ — both touch $A$, so neither faces it. FLIPPING THE ORDER reports $BC < AB < AC$ ✗, as if wide corners squeezed their opposite edges instead of stretching them.',
    },
    {
      q: 'In the triangle $ABC$ of the figure, $\\angle A = 59^\\circ$, $\\angle B = 73^\\circ$, and $\\angle C = 48^\\circ$. Arrange the sides in increasing order of length.',
      fig: {
        view: [-0.9, -0.8, 4.9, 5.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2.65, 4.41]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [2.65, 4.41], label: 'C', dx: 4, dy: -10 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [2.65, 4.41], r: 0.85, label: '59' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [2.65, 4.41], r: 0.6, label: '73' },
          { t: 'angle', at: [2.65, 4.41], from: [4, 0], to: [0, 0], r: 0.9, label: '48' },
        ],
      },
      answer: '$AB < BC < AC$',
      solution:
        'The three angles total $59^\\circ + 73^\\circ + 48^\\circ = 180^\\circ$ ✓. Match opposites: $\\overline{AB}$ faces $\\angle C = 48^\\circ$, $\\overline{BC}$ faces $\\angle A = 59^\\circ$, and $\\overline{AC}$ faces $\\angle B = 73^\\circ$, so ranking the angles $48^\\circ < 59^\\circ < 73^\\circ$ ranks the sides $AB < BC < AC$. Second route by anchoring the extremes: the sharpest corner, $48^\\circ$ at $C$, keeps its opposite side $\\overline{AB}$ shortest ✓; the widest corner, $73^\\circ$ at $B$, stretches $\\overline{AC}$ longest ✓; and $\\overline{BC}$ slots into the middle by elimination ✓. PAIRING THE ANGLE WITH A TOUCHING SIDE hands the $73^\\circ$ at $B$ to $\\overline{AB}$ or $\\overline{BC}$ ✗ — the side facing $\\angle B$ is the one $B$ never touches. FLIPPING THE ORDER submits $AC < BC < AB$ ✗, the correct chain read through a mirror.',
    },
  ],

  // slot 2 — classify by the squared comparison and explain the test
  //          (no figure). Lanes: 10-24-26 right; 6-9-11 obtuse; 8-9-12 acute.
  [
    {
      q: 'A triangle has sides $10$, $24$, and $26$. Decide whether it is acute, right, or obtuse, and state the comparison that settles it.',
      answer: 'Right, because $26^2 = 10^2 + 24^2$',
      solution:
        'Run the test on the longest side: $26^2 = 676$ against $10^2 + 24^2 = 100 + 576 = 676$ — a perfect balance, so the angle opposite the $26$ is exactly $90^\\circ$ and the triangle is right. Second route by scaling: halving all three sides gives $5$-$12$-$13$, where $25 + 144 = 169$ ✓, and scaling never changes a triangle’s angles, so the right angle survives the doubling ✓. (It is a genuine triangle: $10 + 24 = 34 > 26$ ✓.) TESTING A SHORTER SIDE compares $24^2$ with $10^2 + 26^2$ ✗ — the angle opposite a shorter side is acute in every triangle, so that check can only ever say “acute.” CALLING THE BALANCE OBTUSE reads $676 \\ge 676$ as a win for the long side ✗; equality is the knife’s edge, exactly right.',
    },
    {
      q: 'The three sides of a triangle measure $6$, $9$, and $11$. Classify the triangle as acute, right, or obtuse, showing the test that decides it.',
      answer: 'Obtuse, because $11^2 > 6^2 + 9^2$',
      solution:
        'The longest side is $11$: compare $11^2 = 121$ with $6^2 + 9^2 = 36 + 81 = 117$. Since $121 > 117$, the angle opposite the $11$ opens past $90^\\circ$ — the triangle is obtuse. Second route by the right-triangle benchmark: legs $6$ and $9$ would need a hypotenuse of $\\sqrt{117} \\approx 10.8$ to close at exactly $90^\\circ$, and the given $11$ overshoots that mark, prying the angle wider ✓. (Triangle check: $6 + 9 = 15 > 11$ ✓.) TESTING A SHORTER SIDE weighs $9^2$ against $6^2 + 11^2 = 157$ ✗ and learns nothing — that angle was never in doubt. FLIPPING THE VERDICT reads $121 > 117$ as acute ✗; a heavy $c^2$ means a wide angle, not a narrow one.',
    },
    {
      q: 'Is the triangle with sides $8$, $9$, and $12$ acute, right, or obtuse? Justify your classification with the appropriate squared comparison.',
      answer: 'Acute, because $12^2 < 8^2 + 9^2$',
      solution:
        'Test the longest side: $12^2 = 144$ against $8^2 + 9^2 = 64 + 81 = 145$. Since $144 < 145$ — by a single unit! — the largest angle falls just short of $90^\\circ$, and once the largest angle is acute, all three are: the triangle is acute. Second route by the right-triangle benchmark: legs $8$ and $9$ close a right angle only with hypotenuse $\\sqrt{145} \\approx 12.04$, and the given $12$ comes up shy of it, so the top angle stays under $90^\\circ$ ✓. (Triangle check: $8 + 9 = 17 > 12$ ✓.) TESTING A SHORTER SIDE compares $9^2$ with $8^2 + 12^2$ ✗, a test rigged to pass before it starts. FLIPPING THE VERDICT calls $144 < 145$ obtuse ✗ — the near miss lands on the acute side of the fence.',
    },
  ],

  // slot 3 — inequality for the third side (no figure).
  //          Lanes: 7, 12 -> 5 < c < 19; 9, 14 -> 5 < c < 23;
  //          4, 13 -> 9 < c < 17.
  [
    {
      q: 'A triangle has two sides of lengths $7$ and $12$. Write an inequality that captures every possible length $c$ of the remaining side.',
      answer: '$5 < c < 19$',
      solution:
        'The third side must clear the gap between the givens and duck under their sum: $12 - 7 < c < 12 + 7$, so $5 < c < 19$. Second route by auditing the fence posts: at $c = 5$ the sides $5$ and $7$ lie flat along the $12$ ($5 + 7 = 12$), and at $c = 19$ the $7$ and $12$ lie flat along the $19$ ($7 + 12 = 19$) — both collapse — while an interior value like $c = 10$ passes all three checks: $7 + 10 > 12$, $7 + 12 > 10$, $10 + 12 > 7$ ✓. INCLUDING THE ENDPOINTS writes $5 \\le c \\le 19$ ✗, admitting two zero-area figures. FORGETTING THE LOWER BOUND settles for $0 < c < 19$ ✗ and lets in $c = 3$, where $3 + 7 = 10$ cannot reach across the $12$.',
    },
    {
      q: 'Two sides of a triangle measure $9$ and $14$. Give the full range of values the third side $c$ can take, written as an inequality.',
      answer: '$5 < c < 23$',
      solution:
        'The window runs from the difference to the sum, both ends excluded: $14 - 9 < c < 14 + 9$, so $5 < c < 23$. Second route by auditing the fence posts: $c = 5$ collapses because $5 + 9 = 14$ lies flat along the $14$, and $c = 23$ collapses because $9 + 14 = 23$ lies flat along the $23$ — while the interior value $c = 12$ clears every check: $9 + 12 > 14$, $9 + 14 > 12$, $12 + 14 > 9$ ✓. INCLUDING THE ENDPOINTS claims $5 \\le c \\le 23$ ✗ — each equality is a segment wearing a triangle’s name. FORGETTING THE LOWER BOUND offers $0 < c < 23$ ✗ and admits $c = 4$, where $4 + 9 = 13$ falls short of the $14$.',
    },
    {
      q: 'In a triangle, two of the sides are $4$ and $13$. Describe all possible lengths $c$ of the third side with an inequality.',
      answer: '$9 < c < 17$',
      solution:
        'The third side must beat the gap and stay under the sum: $13 - 4 < c < 13 + 4$, so $9 < c < 17$. Second route by auditing the fence posts: at $c = 9$ the sides $4$ and $9$ lie flat along the $13$ ($4 + 9 = 13$), and at $c = 17$ the $4$ and $13$ lie flat along the $17$ ($4 + 13 = 17$) — both are degenerate — while the interior value $c = 12$ passes every check: $4 + 12 > 13$, $4 + 13 > 12$, $12 + 13 > 4$ ✓. Notice how narrow the window is: a short side of $4$ leaves the third side little room to wander. INCLUDING THE ENDPOINTS writes $9 \\le c \\le 17$ ✗, two flat figures included. FORGETTING THE LOWER BOUND answers $0 < c < 17$ ✗ and admits $c = 6$, where $4 + 6 = 10$ never reaches the $13$.',
    },
  ],

  // slot 4 — count the integer third sides (no figure).
  //          Lanes: 9, 13 -> 17; 10, 17 -> 19; 5, 16 -> 9.
  [
    {
      q: 'Two sides of a triangle are $9$ and $13$. How many integer lengths are possible for the third side?',
      answer: '$17$ integer lengths',
      solution:
        'Window first: $13 - 9 < c < 13 + 9$, so $4 < c < 22$, and the integers strictly inside run from $5$ through $21$: $21 - 5 + 1 = 17$ of them. Second route by the shortcut: between the integers $b - a$ and $b + a$, both excluded, sit exactly $(b + a) - (b - a) - 1 = 2a - 1$ integers, and $2 \\times 9 - 1 = 17$ ✓ — the smaller side alone sets the count. COUNTING THE ENDPOINTS reports $19$ ✗, sneaking the flat cases $c = 4$ and $c = 22$ into the tally. SUBTRACTING WITHOUT ADDING ONE reports $21 - 5 = 16$ ✗, lopping one value off an inclusive run.',
    },
    {
      q: 'A triangle has two sides of lengths $10$ and $17$. Count the integer values the third side could take.',
      answer: '$19$ integer lengths',
      solution:
        'The window is $17 - 10 < c < 17 + 10$, so $7 < c < 27$: the integers strictly inside run from $8$ through $26$, and $26 - 8 + 1 = 19$. Second route by the shortcut $2a - 1$ with the smaller side $a = 10$: the open window from $b - a$ to $b + a$ holds $(b + a) - (b - a) - 1 = 2a - 1 = 19$ integers ✓ — the $17$ cancels out of the count entirely, a good sanity check on the formula. COUNTING THE ENDPOINTS turns in $21$ ✗ by letting the flat cases $7$ and $27$ vote. SUBTRACTING WITHOUT ADDING ONE gets $26 - 8 = 18$ ✗, one short of the inclusive count.',
    },
    {
      q: 'Two sides of a triangle have lengths $5$ and $16$. How many integers could serve as the length of the third side?',
      answer: '$9$ integer lengths',
      solution:
        'The window is $16 - 5 < c < 16 + 5$, so $11 < c < 21$: the integers strictly inside are $12$ through $20$, and $20 - 12 + 1 = 9$. Second route by the shortcut $2a - 1$ with $a = 5$: $2 \\times 5 - 1 = 9$ ✓ — a short side of $5$ pins the count at nine no matter how long the other side grows. COUNTING THE ENDPOINTS answers $11$ ✗, treating the flat figures at $c = 11$ and $c = 21$ as triangles. SUBTRACTING WITHOUT ADDING ONE answers $20 - 12 = 8$ ✗, forgetting that a run from $12$ to $20$ includes both ends.',
    },
  ],

  // slot 5 — a flat triple, explain why it fails (no figure).
  //          Lanes: 6, 7, 13; 5, 8, 13; 9, 10, 19 — all with a + b = c.
  [
    {
      q: 'Three rods have lengths $6$, $7$, and $13$. Can they be joined end to end to form a triangle? Explain.',
      answer: 'No — $6 + 7 = 13$, so the figure is flat (degenerate)',
      solution:
        'The binding check pits the two shorter rods against the longest: $6 + 7 = 13$, which merely EQUALS the $13$ instead of beating it, so the two short rods lie down flat along the long one — zero area, a segment in disguise, not a triangle. Second route as a walk: start at one end of the $13$-rod and walk $6$ and then $7$; any bend in the walk leaves you strictly closer than $13$ to the start, so the only way to land on the far end is to walk perfectly straight ✓ — the “triangle” has no room to open. CHECKING THE WRONG PAIR verifies $6 + 13 > 7$ ✗, true but toothless; only the two shortest against the longest can fail. ACCEPTING A TIE treats $13 \\ge 13$ as good enough ✗ — a triangle demands strictly greater.',
    },
    {
      q: 'Priya bends three wires of lengths $5$, $8$, and $13$ into what she hopes will be a triangle. Will it work? Explain.',
      answer: 'No — $5 + 8 = 13$, so the figure is flat (degenerate)',
      solution:
        'Test the two shorter wires against the longest: $5 + 8 = 13$ exactly. The two short wires stretch out flat along the $13$, meeting its endpoints with no slack to lift off the line — the figure has zero area, so it is not a triangle. Second route as a walk: leaving one end of the $13$-wire and walking $5$ then $8$, only the perfectly straight route reaches the far end, because a bent path always ends strictly closer than $5 + 8 = 13$ to the start ✓ — a corner is exactly what these lengths cannot afford. CHECKING THE WRONG PAIR confirms $8 + 13 > 5$ ✗, a check that never had a chance of failing. ACCEPTING A TIE waves $13 \\ge 13$ through ✗ — the triangle inequality is strict, and equality is the flat case it exists to exclude.',
    },
    {
      q: 'Can segments of lengths $9$, $10$, and $19$ be the three sides of a triangle? Explain why or why not.',
      answer: 'No — $9 + 10 = 19$, so the figure is flat (degenerate)',
      solution:
        'Check the two shorter segments against the longest: $9 + 10 = 19$, a tie rather than a win, so the $9$ and the $10$ lie flat along the $19$ and the three segments trace a single line — a degenerate figure with no interior, not a triangle. Second route as a walk: from one end of the $19$, walking $9$ and then $10$ reaches the far end only along the dead-straight path; the instant the walk bends, its endpoint falls strictly short of $19$ from the start ✓, so no true triangle closes up. CHECKING THE WRONG PAIR tests $9 + 19 > 10$ ✗, which holds for any three positive lengths whatsoever. ACCEPTING A TIE calls $19 \\ge 19$ a pass ✗ — the sides must strictly beat the third, or the triangle never opens.',
    },
  ],

  // slot 6 — sides given, name the largest and smallest angles (compound
  //          answer, no figure). Lanes: DE=11, EF=8, FD=9 -> F and D;
  //          DE=7, EF=12, FD=10 -> D and F; DE=13, EF=10, FD=11 -> F and D.
  [
    {
      q: 'Triangle $DEF$ has $DE = 11$, $EF = 8$, and $FD = 9$. Identify its largest angle and its smallest angle.',
      answer: 'Largest: $\\angle F$; smallest: $\\angle D$',
      solution:
        'Longest side first: $DE = 11$, and the vertex it avoids is $F$, so $\\angle F$ is the largest angle. Shortest side: $EF = 8$ avoids $D$, so $\\angle D$ is the smallest. Second route by matching the whole roster: $\\angle D$ faces $EF = 8$, $\\angle E$ faces $FD = 9$, and $\\angle F$ faces $DE = 11$; ranking $8 < 9 < 11$ delivers $\\angle D < \\angle E < \\angle F$ ✓ — same extremes, with the middle angle $\\angle E$ accounted for ✓. (Triangle check: $8 + 9 = 17 > 11$ ✓.) PICKING AN ANGLE TOUCHING THE LONGEST SIDE crowns $\\angle D$ or $\\angle E$ ✗ — the two angles at the ends of $\\overline{DE}$ are exactly the ones NOT facing it. SWAPPING THE EXTREMES answers largest $\\angle D$, smallest $\\angle F$ ✗, the opposite-side rule run backwards.',
    },
    {
      q: 'In triangle $DEF$, $DE = 7$, $EF = 12$, and $FD = 10$. Which of its angles is the largest, and which is the smallest?',
      answer: 'Largest: $\\angle D$; smallest: $\\angle F$',
      solution:
        'The longest side is $EF = 12$, and the vertex not on it is $D$: $\\angle D$ is the largest angle. The shortest side is $DE = 7$, whose absent vertex is $F$: $\\angle F$ is the smallest. Second route by the full roster: $\\angle D$ faces $EF = 12$, $\\angle E$ faces $FD = 10$, and $\\angle F$ faces $DE = 7$; the side ranking $7 < 10 < 12$ becomes $\\angle F < \\angle E < \\angle D$ ✓, matching both extremes and placing $\\angle E$ in between ✓. (Triangle check: $7 + 10 = 17 > 12$ ✓.) PICKING AN ANGLE TOUCHING THE LONGEST SIDE nominates $\\angle E$ or $\\angle F$ for the crown ✗ — $\\overline{EF}$ pushes its opposite vertex $D$ wide, not its own endpoints. SWAPPING THE EXTREMES reports largest $\\angle F$, smallest $\\angle D$ ✗, pairing big with small instead of big with big.',
    },
    {
      q: 'Triangle $DEF$ has side lengths $DE = 13$, $EF = 10$, and $FD = 11$. Name the largest and the smallest of its three angles.',
      answer: 'Largest: $\\angle F$; smallest: $\\angle D$',
      solution:
        'The longest side $DE = 13$ faces the vertex it never touches, $F$, so $\\angle F$ is the largest angle. The shortest side $EF = 10$ faces $D$, so $\\angle D$ is the smallest. Second route by the full roster: $\\angle D$ faces $EF = 10$, $\\angle E$ faces $FD = 11$, and $\\angle F$ faces $DE = 13$; ranking $10 < 11 < 13$ gives $\\angle D < \\angle E < \\angle F$ ✓ — extremes confirmed, middle angle $\\angle E$ in its lane ✓. (Triangle check: $10 + 11 = 21 > 13$ ✓.) PICKING AN ANGLE TOUCHING THE LONGEST SIDE elects $\\angle D$ or $\\angle E$ ✗, the two vertices that sit ON the side of length $13$ rather than across from it. SWAPPING THE EXTREMES trades the answers ✗ — with sides this close ($10$, $11$, $13$), the matching must be done by rule, not by eye.',
    },
  ],

  // slot 7 — ALL integers n making the triangle obtuse, both cases listed
  //          (no figure). Lanes: 6, 9 -> seven values; 8, 13 -> ten values;
  //          5, 7 -> five values.
  [
    {
      q: 'For the triangle with sides $6$, $9$, and $n$ to be obtuse, what are ALL the possible integer values of $n$? List them.',
      answer: '$n = 4, 5, 6, 11, 12, 13, 14$ (seven values)',
      solution:
        'Triangle inequality first: $9 - 6 < n < 9 + 6$, so $3 < n < 15$ and $n$ runs from $4$ to $14$. Case 1 — the $9$ is the longest side ($n \\le 9$): obtuse needs $81 > 36 + n^2$, so $n^2 < 45$, giving $n = 4, 5, 6$. Case 2 — $n$ is the longest side ($n \\ge 10$): obtuse needs $n^2 > 36 + 81 = 117$; $10^2 = 100$ falls short and $11^2 = 121$ clears it, so $n = 11, 12, 13, 14$. Together: the seven values $4, 5, 6, 11, 12, 13, 14$. Second route by sweeping the middle band: $n = 7$ gives $81$ vs $85$, $n = 8$ gives $81$ vs $100$, $n = 9$ gives $81$ vs $117$, and $n = 10$ gives $100$ vs $117$ — all acute ✓, so the obtuse values live only in the two tails, exactly as the cases said ✓ (and neither $45$ nor $117$ is a perfect square, so no integer lands on a right triangle). STOPPING AT ONE CASE keeps only $11$ through $14$ ✗, missing the three triangles whose obtuse angle faces the $9$. SKIPPING THE TRIANGLE CHECK admits $n = 3$ ✗, where $3 + 6 = 9$ lies flat.',
    },
    {
      q: 'List every integer $n$ that makes the triangle with sides $8$, $13$, and $n$ obtuse.',
      answer: '$n = 6, 7, 8, 9, 10, 16, 17, 18, 19, 20$ (ten values)',
      solution:
        'Triangle inequality first: $13 - 8 < n < 13 + 8$, so $5 < n < 21$ and $n$ runs from $6$ to $20$. Case 1 — the $13$ is the longest side ($n \\le 13$): obtuse needs $169 > 64 + n^2$, so $n^2 < 105$, giving $n = 6, 7, 8, 9, 10$. Case 2 — $n$ is the longest side ($n \\ge 14$): obtuse needs $n^2 > 64 + 169 = 233$; $15^2 = 225$ misses and $16^2 = 256$ clears, so $n = 16, 17, 18, 19, 20$. Together: ten values, five per case. Second route by sweeping the middle band: $n = 11$: $169$ vs $185$; $n = 12$: $169$ vs $208$; $n = 13$: $169$ vs $233$; $n = 14$: $196$ vs $233$; $n = 15$: $225$ vs $233$ — every one acute ✓, confirming that the two tails hold all the obtuse triangles ✓ (neither $105$ nor $233$ is a perfect square, so no right triangle hides at an integer). STOPPING AT ONE CASE reports five values instead of ten ✗ — the obtuse angle can face the $13$ just as well as it can face $n$. SKIPPING THE TRIANGLE CHECK admits $n = 5$ ✗, where $5 + 8 = 13$ collapses flat.',
    },
    {
      q: 'Determine all integers $n$ such that $5$, $7$, and $n$ are the sides of an obtuse triangle.',
      answer: '$n = 3, 4, 9, 10, 11$ (five values)',
      solution:
        'Triangle inequality first: $7 - 5 < n < 7 + 5$, so $2 < n < 12$ and $n$ runs from $3$ to $11$. Case 1 — the $7$ is the longest side ($n \\le 7$): obtuse needs $49 > 25 + n^2$, so $n^2 < 24$, giving $n = 3, 4$. Case 2 — $n$ is the longest side ($n \\ge 8$): obtuse needs $n^2 > 25 + 49 = 74$; $8^2 = 64$ misses and $9^2 = 81$ clears, so $n = 9, 10, 11$. Together: the five values $3, 4, 9, 10, 11$. Second route by sweeping the middle band: $n = 5$: $49$ vs $50$ — acute by a single unit! — then $n = 6$: $49$ vs $61$, $n = 7$: $49$ vs $74$, and $n = 8$: $64$ vs $74$, all acute ✓, so the case split lost nothing ✓ (and neither $24$ nor $74$ is a perfect square, so no integer $n$ gives a right triangle). STOPPING AT ONE CASE turns in only $9, 10, 11$ ✗, forgetting that a small $n$ leaves the angle opposite the $7$ wide open. SKIPPING THE TRIANGLE CHECK admits $n = 2$ ✗, where $2 + 5 = 7$ lies flat.',
    },
  ],

  // slot 8 — x, 2x (or 3x), k: range of x for a triangle to exist
  //          (no figure). Lanes: x, 2x, 18 -> 6 < x < 18;
  //          x, 2x, 12 -> 4 < x < 12; x, 3x, 20 -> 5 < x < 10.
  [
    {
      q: 'A triangle has sides of lengths $x$, $2x$, and $18$. For which values of $x$ does such a triangle exist?',
      answer: '$6 < x < 18$',
      solution:
        'Write every check: $x + 2x > 18$ gives $x > 6$; $x + 18 > 2x$ gives $x < 18$; and $2x + 18 > x$ holds for every positive $x$, so it never binds. The triangle exists exactly when $6 < x < 18$. Second route by probing: at $x = 6$ the sides $6, 12, 18$ lie flat ($6 + 12 = 18$), and at $x = 18$ the sides $18, 36, 18$ lie flat ($18 + 18 = 36$) — both fence posts fail — while $x = 10$ gives $10, 20, 18$ with $10 + 18 = 28 > 20$ ✓, an interior point that passes, just as the window promises ✓. DROPPING THE SECOND INEQUALITY answers $x > 6$ alone ✗ and admits $x = 20$, whose sides $20, 40, 18$ fail because $20 + 18 = 38 < 40$. ALLOWING THE ENDPOINTS writes $6 \\le x \\le 18$ ✗, two flat figures included.',
    },
    {
      q: 'Segments of lengths $x$, $2x$, and $12$ are assembled into a triangle. Find every possible value of $x$.',
      answer: '$4 < x < 12$',
      solution:
        'All three inequalities: $x + 2x > 12$ gives $x > 4$; $x + 12 > 2x$ gives $x < 12$; and $2x + 12 > x$ is automatic for positive $x$. So the assembly succeeds exactly when $4 < x < 12$. Second route by probing: $x = 4$ makes the sides $4, 8, 12$ with $4 + 8 = 12$ — flat — and $x = 12$ makes $12, 24, 12$ with $12 + 12 = 24$ — flat again — while the interior value $x = 8$ makes $8, 16, 12$ with $8 + 12 = 20 > 16$ ✓, so the open window is exactly right ✓. DROPPING THE SECOND INEQUALITY keeps only $x > 4$ ✗ and admits $x = 15$, where $15, 30, 12$ fails since $15 + 12 = 27 < 30$ — the doubled side outruns its partners. ALLOWING THE ENDPOINTS writes $4 \\le x \\le 12$ ✗ and glues two flat figures into the answer.',
    },
    {
      q: 'The sides of a triangle are $x$, $3x$, and $20$. Determine all values of $x$ for which this triangle is possible.',
      answer: '$5 < x < 10$',
      solution:
        'Write every check: $x + 3x > 20$ gives $4x > 20$, so $x > 5$; $x + 20 > 3x$ gives $20 > 2x$, so $x < 10$; and $3x + 20 > x$ holds for all positive $x$. The triangle is possible exactly when $5 < x < 10$ — note how the factor of $3$ squeezes the window far tighter than a factor of $2$ would. Second route by probing: $x = 5$ gives sides $5, 15, 20$ with $5 + 15 = 20$ — flat — and $x = 10$ gives $10, 30, 20$ with $10 + 20 = 30$ — flat — while the interior $x = 8$ gives $8, 24, 20$ with $8 + 20 = 28 > 24$ ✓, confirming the open window ✓. DROPPING THE SECOND INEQUALITY answers $x > 5$ ✗ and admits $x = 12$, where $12, 36, 20$ fails since $12 + 20 = 32 < 36$. ALLOWING THE ENDPOINTS answers $5 \\le x \\le 10$ ✗ — each endpoint lays the three sides on a single line.',
    },
  ],

  // slot 9 — bent path, bound the straight-line distance (figure).
  //          Lanes: 420 + 260 -> under 680; 510 + 380 -> under 890;
  //          275 + 465 -> under 740. Drawn at 1 unit = 50 m, exact legs.
  [
    {
      q: 'A hiking route runs straight from the trailhead $T$ to a lookout $L$ ($420$ m), then straight from $L$ to a spring $S$ ($260$ m). The lookout is not on the straight line from $T$ to $S$. A direct trail from $T$ to $S$ is proposed — what can you say for certain about its length?',
      fig: {
        view: [-1, -0.8, 12.7, 5.9],
        elems: [
          { t: 'seg', a: [0, 0], b: [6.72, 5.04] },
          { t: 'seg', a: [6.72, 5.04], b: [11.52, 3.04] },
          { t: 'seg', a: [0, 0], b: [11.52, 3.04], dash: true },
          { t: 'point', p: [0, 0], label: 'T', dx: -10, dy: 8 },
          { t: 'point', p: [6.72, 5.04], label: 'L', dx: 0, dy: -12 },
          { t: 'point', p: [11.52, 3.04], label: 'S', dx: 12, dy: 4 },
          { t: 'label', p: [3.36, 2.52], text: '420 m', dx: -20, dy: -4 },
          { t: 'label', p: [9.12, 4.04], text: '260 m', dx: 12, dy: -8 },
          { t: 'label', p: [5.76, 1.52], text: '?', dx: 0, dy: 14 },
        ],
      },
      answer: 'Strictly less than $680$ m',
      solution:
        'The bent route is a detour, and the triangle inequality says the straight side always loses to a detour: $TS < 420 + 260 = 680$ m, strictly, because the lookout sits off the line $TS$. Second route by ruling out the alternatives: $TS = 680$ would force $T$, $L$, $S$ onto one straight line with $L$ between the ends — exactly what the problem excludes — and $TS > 680$ would make the $680$-m bent route SHORTER than the straight trail, which no geometry allows ✓. (The same triangle also guarantees $TS > 420 - 260 = 160$ m, a bound the question did not ask for.) TREATING THE BOUND AS ATTAINABLE answers “$680$ m or less” ✗ — equality needs collinear points, and the lookout is not on the line. REPORTING THE DIFFERENCE offers $160$ m ✗, the lower fence when the upper one was requested.',
    },
    {
      q: 'A ferry sails straight from the dock $D$ to an island stop $I$ ($510$ m), then straight from $I$ to a lighthouse pier $P$ ($380$ m). The island is not on the straight line from $D$ to $P$. What is certain about the straight-line distance from $D$ to $P$?',
      fig: {
        view: [-1.1, -0.9, 15.6, 7.1],
        elems: [
          { t: 'seg', a: [0, 0], b: [8.16, 6.12] },
          { t: 'seg', a: [8.16, 6.12], b: [14.24, 1.56] },
          { t: 'seg', a: [0, 0], b: [14.24, 1.56], dash: true },
          { t: 'point', p: [0, 0], label: 'D', dx: -10, dy: 8 },
          { t: 'point', p: [8.16, 6.12], label: 'I', dx: 0, dy: -12 },
          { t: 'point', p: [14.24, 1.56], label: 'P', dx: 12, dy: 4 },
          { t: 'label', p: [4.08, 3.06], text: '510 m', dx: -20, dy: -4 },
          { t: 'label', p: [11.2, 3.84], text: '380 m', dx: 16, dy: -4 },
          { t: 'label', p: [7.12, 0.78], text: '?', dx: 0, dy: 14 },
        ],
      },
      answer: 'Strictly less than $890$ m',
      solution:
        'Dock, island, and pier form a genuine triangle, and a triangle’s side is always beaten by the other two together: $DP < 510 + 380 = 890$ m, with strict inequality because the island lies off the line $DP$. Second route by ruling out the alternatives: $DP = 890$ happens only if the three stops are collinear with $I$ between the ends, which the problem forbids, and $DP > 890$ would let a straight crossing lose to a bent one — impossible ✓. (The triangle also promises $DP > 510 - 380 = 130$ m, extra information the question never requests.) TREATING THE BOUND AS ATTAINABLE reports “at most $890$ m” ✗ — the ceiling is approached, never touched. REPORTING THE DIFFERENCE answers $130$ m ✗, a floor mistaken for a ceiling.',
    },
    {
      q: 'Rosa cycles straight from home $H$ to a bakery $K$ ($275$ m) and then straight from the bakery to the park gate $G$ ($465$ m); the bakery does not lie on the straight line from $H$ to $G$. What must be true of the straight-line distance from $H$ to $G$?',
      fig: {
        view: [-1, -0.8, 13.9, 5.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [3.3, 4.4] },
          { t: 'seg', a: [3.3, 4.4], b: [12.6, 4.4] },
          { t: 'seg', a: [0, 0], b: [12.6, 4.4], dash: true },
          { t: 'point', p: [0, 0], label: 'H', dx: -10, dy: 8 },
          { t: 'point', p: [3.3, 4.4], label: 'K', dx: -8, dy: -10 },
          { t: 'point', p: [12.6, 4.4], label: 'G', dx: 12, dy: 0 },
          { t: 'label', p: [1.65, 2.2], text: '275 m', dx: -22, dy: 0 },
          { t: 'label', p: [7.95, 4.4], text: '465 m', dx: 0, dy: -10 },
          { t: 'label', p: [6.3, 2.2], text: '?', dx: 0, dy: 14 },
        ],
      },
      answer: 'Strictly less than $740$ m',
      solution:
        'Home, bakery, and gate are the corners of a triangle, so the straight side loses to the two-leg detour: $HG < 275 + 465 = 740$ m, and the inequality is strict because the bakery is off the line $HG$. Second route by ruling out the alternatives: $HG = 740$ would need the bakery to sit exactly on the straight path from home to the gate, which is denied, and $HG > 740$ would mean Rosa’s bent ride was a shortcut past the straight one — geometry forbids it ✓. (The lower fence $HG > 465 - 275 = 190$ m also holds, though the question does not ask.) TREATING THE BOUND AS ATTAINABLE claims the distance could equal $740$ m ✗ — only collinear points cash in that bound. REPORTING THE DIFFERENCE hands over $190$ m ✗, answering a question about the ceiling with the floor.',
    },
  ],

  // slot 10 — n, n + k, m: ALL integer n giving a right triangle, two cases
  //           (no figure). Lanes: n, n+8, 40 -> 24 and 96;
  //           n, n+2, 10 -> 6 and 24; n, n+7, 17 -> 8 only.
  [
    {
      q: 'The three sides of a right triangle are $n$, $n + 8$, and $40$, where $n$ is a positive integer. Find every possible value of $n$.',
      answer: '$n = 24$ and $n = 96$',
      solution:
        'Split by hypotenuse — and note $n$ itself can never be the hypotenuse, since $n < n + 8$. Case 1: $40$ is the hypotenuse: $n^2 + (n+8)^2 = 1600$ expands to $2n^2 + 16n + 64 = 1600$, so $n^2 + 8n - 768 = 0$, which factors as $(n - 24)(n + 32) = 0$: $n = 24$, the triangle $24$-$32$-$40$ (a $3$-$4$-$5$ scaled by $8$; check $576 + 1024 = 1600$ ✓). Case 2: $n + 8$ is the hypotenuse: $n^2 + 1600 = (n + 8)^2 = n^2 + 16n + 64$ — the squared terms cancel — leaving $16n = 1536$, so $n = 96$: the triangle $40$-$96$-$104$ (a $5$-$12$-$13$ scaled by $8$; check $1600 + 9216 = 10816 = 104^2$ ✓). Both triples satisfy the triangle inequality, so both survive. STOPPING AT THE FIRST CASE reports $n = 24$ alone ✗ — nothing grants the $40$ a monopoly on the hypotenuse. KEEPING THE NEGATIVE ROOT adds $n = -32$ ✗, a side of negative length.',
    },
    {
      q: 'A right triangle has sides $n$, $n + 2$, and $10$ for some positive integer $n$. Determine all the values $n$ can take.',
      answer: '$n = 6$ and $n = 24$',
      solution:
        'Two cases, since $n < n + 2$ rules $n$ out as hypotenuse. Case 1: $10$ is the hypotenuse: $n^2 + (n+2)^2 = 100$ expands to $2n^2 + 4n + 4 = 100$, so $n^2 + 2n - 48 = 0$, factoring as $(n - 6)(n + 8) = 0$: $n = 6$, the classic $6$-$8$-$10$ (check $36 + 64 = 100$ ✓). Case 2: $n + 2$ is the hypotenuse: $n^2 + 100 = (n + 2)^2 = n^2 + 4n + 4$, and the quadratic terms cancel to leave $4n = 96$, so $n = 24$: the triangle $10$-$24$-$26$ (check $100 + 576 = 676 = 26^2$ ✓). Both are honest triangles, so both values stand. STOPPING AT THE FIRST CASE settles for $n = 6$ ✗ and never meets the $10$-$24$-$26$ triangle hiding in the second case. KEEPING THE NEGATIVE ROOT lists $n = -8$ ✗, which no side length can be.',
    },
    {
      q: 'For which integers $n$ do the lengths $n$, $n + 7$, and $17$ form a right triangle? Find them all.',
      answer: '$n = 8$ only',
      solution:
        'Since $n < n + 7$, the hypotenuse is either the $17$ or the $n + 7$ — two cases. Case 1: $17$ is the hypotenuse: $n^2 + (n+7)^2 = 289$ expands to $2n^2 + 14n + 49 = 289$, so $n^2 + 7n - 120 = 0$, which factors as $(n - 8)(n + 15) = 0$: $n = 8$, the triangle $8$-$15$-$17$ (check $64 + 225 = 289$ ✓). Case 2: $n + 7$ is the hypotenuse: $n^2 + 289 = (n + 7)^2 = n^2 + 14n + 49$, and after the squares cancel, $14n = 240$ — but $\\frac{240}{14} = \\frac{120}{7}$ is not an integer, so this case produces NO integer solution and must be reported empty, not skipped. The only value is $n = 8$. STOPPING AT THE FIRST CASE happens to reach the right list here ✗ as a method — the second case still had to be checked and seen to fail, or the answer is a guess. KEEPING THE NEGATIVE ROOT appends $n = -15$ ✗, a root with no triangle attached.',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 10,
  worksheet,
}
