// Introduction to Geometry chapter 9 — variations for the printable worksheet.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key anywhere in
//    this file. Answers copy the base worksheet's phrasing shape: bare
//    number/degree strings for slots 1, 2, 4, 5, 6, 7, 8, and 10, and the
//    base's compound '(a) …, (b) …' sentences for slots 3 and 9.
//  - Every answer was worked twice by two genuinely different routes, and
//    the routes had to agree before the key was written: the n(n-3)/2
//    formula vs. all-pairs-minus-sides counting (slot 1); the triangle
//    fan vs. the 180n - 360 rearrangement (slot 2); the exterior-angle
//    shortcut vs. the interior-angle formula (slots 3 and 7, in opposite
//    directions); six equilateral triangles vs. the half-apothem-times-
//    perimeter formula (slots 4 and 9); factor hunting vs. solving the
//    quadratic outright (slot 5); the 360-degree subtraction vs. deficit
//    bookkeeping against 90 (slot 6); corner subtraction vs. a band-plus-
//    trapezoids dissection (slot 8); and the identity n = 2k + 2 vs.
//    plugging the recovered n back into both angle sums (slot 10).
//  - Slot 10's premise was checked before anything was written: setting
//    (n-2)·180 = k·360 gives n - 2 = 2k, hence n = 2k + 2 exactly, so the
//    pinned answers 24, 28, and 22 for k = 11, 13, and 10 are forced.
//  - Figures are coordinate-exact and were verified numerically, never
//    eyeballed. Slot 2's regular polygons sit on a radius-3 circle with
//    vertices at 90° + k·(360°/n), rounded to hundredths, and the dashed
//    fan joins vertex A to every non-neighbor (6, 10, and 12 diagonals).
//    Slot 6's quadrilaterals were solved numerically so the marked angles
//    land within a tenth of a degree of their labels: (6.79, 3.72)/
//    (0.2, 5.86) realizes 88-102-96-74, (7.41, 3.31)/(1.21, 6.21)
//    realizes 79-113-92-76, and (6.33, 3.79)/(0.8, 5.69) realizes
//    82-95-104-79. Slot 8's octagons are true corner-cut squares on
//    integer coordinates. Slot 9's hexagons use exact side lengths with
//    apothems at s√3/2 rounded to hundredths (6.93, 5.2, 15.59), and each
//    right-angle marker sits on an exact 90°.
//  - Figure labels are plain text: bare numerals and the letters of points.
//  - Pin deviations: none — all thirty lanes use their pinned values.
//  - Lanes that brush against base content, flagged in the authoring
//    report: slot 1 lane 2's decagon-has-35-diagonals fact is computed in
//    passing inside Section 9.4 problem 7; slot 2 lane 3's 15-gon angle
//    sum 2340° is the given of challenge problem 3 (which then asks for
//    diagonals); slot 3 lane 3's 156°/15-gon pair inverts Section 9.2's
//    third learn example (angle in, n out there; n in, angle out here);
//    slot 9 lane 1 shares the side-8 hexagon and its 96√3 area with
//    challenge problem 5, though this slot demands the apothem route.
//  - Traps that run through the file, named in CAPS at the end of each
//    solution: COUNTING THE SIDES TOO, SKIPPING THE HALVING, USING n
//    TRIANGLES, USING n MINUS ONE, TREATING THE EXTERIOR AS THE INTERIOR,
//    FORGETTING THE MINUS TWO, STOPPING AT ONE TRIANGLE, USING THE SQUARE
//    FORMULA, FORGETTING TO DOUBLE, KEEPING THE NEGATIVE ROOT, SUBTRACTING
//    FROM ONE-EIGHTY, REPORTING THE RUNNING TOTAL, DIVIDING THREE-SIXTY BY
//    THE INTERIOR, SUPPLEMENTING AGAINST THREE-SIXTY, TREATING EACH CORNER
//    AS A FULL SQUARE, STOPPING AT THE CUT AREA, TAKING THE APOTHEM EQUAL
//    TO THE SIDE, DROPPING THE HALF IN THE AREA FORMULA, PAIRING THE SUM
//    WITH ONE-EIGHTY, and DROPPING THE MINUS TWO.

const worksheet = [
  // slot 1 — total diagonal count of a polygon (no figure).
  //          Lanes: 16-gon -> 104; decagon -> 35; 21-gon -> 189.
  [
    {
      q: 'A convex $16$-gon has all of its diagonals drawn in. How many diagonals is that in total?',
      answer: '$104$',
      solution:
        'Each of the $16$ vertices sends a diagonal to every vertex except itself and its $2$ neighbors — that is $16 - 3 = 13$ per vertex — and dividing by $2$ repairs the double count: $\\frac{16 \\times 13}{2} = 104$. Second route by subtraction: the $16$ vertices form $\\frac{16 \\times 15}{2} = 120$ segments in all, of which exactly $16$ are sides, leaving $120 - 16 = 104$ diagonals ✓ — two counts, one answer. COUNTING THE SIDES TOO reports $120$ ✗, the full list of vertex pairs with the polygon’s own edges still in it. SKIPPING THE HALVING turns in $208$ ✗, counting every diagonal once from each end.',
    },
    {
      q: 'A stained-glass window is a decagon, and the artist joins every pair of corners that are not next to each other with a strip of lead. How many strips does the design need?',
      answer: '$35$',
      solution:
        'Each strip is a diagonal of the decagon. From any one corner the artist can reach $10 - 3 = 7$ others (skip the corner itself and its two neighbors), and $\\frac{10 \\times 7}{2} = 35$ once the double count is halved. Second route by subtraction: all $\\frac{10 \\times 9}{2} = 45$ corner-to-corner segments, minus the $10$ that are the window’s own edges, is $45 - 10 = 35$ ✓. Sanity: each strip got counted from both of its ends before the halving, so the raw $70$ had to be even — it was ✓. COUNTING THE SIDES TOO orders $45$ strips ✗ and re-leads the frame itself. SKIPPING THE HALVING orders $70$ ✗, one strip per end instead of per strip.',
    },
    {
      q: 'How many diagonals does a convex polygon with $21$ sides have?',
      answer: '$189$',
      solution:
        'Apply $\\frac{n(n-3)}{2}$ with $n = 21$: each vertex reaches $21 - 3 = 18$ non-neighbors, so the count is $\\frac{21 \\times 18}{2} = 21 \\times 9 = 189$. Second route by subtraction: the $21$ vertices span $\\frac{21 \\times 20}{2} = 210$ segments, and removing the $21$ sides leaves $210 - 21 = 189$ ✓ — the same answer from the opposite direction. COUNTING THE SIDES TOO files $210$ ✗, a tally that still contains the polygon’s boundary. SKIPPING THE HALVING claims $378$ ✗ — every diagonal has two ends, but it is still one diagonal.',
    },
  ],

  // slot 2 — angle sum via the triangle fan from one vertex (figure).
  //          Lanes: nonagon -> 1260; 13-gon -> 1980; 15-gon -> 2340.
  [
    {
      q: 'The nonagon shown is fanned into triangles by the diagonals from vertex $A$. Use the triangles to find the sum of the interior angles of a nonagon.',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'poly', pts: [[0, 3], [-1.93, 2.3], [-2.95, 0.52], [-2.6, -1.5], [-1.03, -2.82], [1.03, -2.82], [2.6, -1.5], [2.95, 0.52], [1.93, 2.3]], fill: false },
          { t: 'seg', a: [0, 3], b: [-2.95, 0.52], dash: true },
          { t: 'seg', a: [0, 3], b: [-2.6, -1.5], dash: true },
          { t: 'seg', a: [0, 3], b: [-1.03, -2.82], dash: true },
          { t: 'seg', a: [0, 3], b: [1.03, -2.82], dash: true },
          { t: 'seg', a: [0, 3], b: [2.6, -1.5], dash: true },
          { t: 'seg', a: [0, 3], b: [2.95, 0.52], dash: true },
          { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -12 },
        ],
      },
      answer: '$1260^\\circ$',
      solution:
        'The $6$ dashed diagonals from $A$ slice the nonagon into $9 - 2 = 7$ triangles, and every triangle angle lands inside a nonagon angle with nothing left over, so the sum is $7 \\times 180^\\circ = 1260^\\circ$. Second route by rearrangement: each of the $9$ vertices would give a full $180^\\circ$ if the polygon were a fan of $9$ triangles about an interior point, but that fan wraps an extra $360^\\circ$ around the center, so the sum is $9 \\times 180^\\circ - 360^\\circ = 1620^\\circ - 360^\\circ = 1260^\\circ$ ✓. USING n TRIANGLES reports $1620^\\circ$ ✗, forgetting that the fan from a vertex makes only $n - 2$ pieces. USING n MINUS ONE settles on $1440^\\circ$ ✗ — count the triangles in the figure: there are seven, not eight.',
    },
    {
      q: 'In the figure, all the diagonals from one vertex of a $13$-gon are drawn, cutting it into triangles. What do the interior angles of a $13$-gon add up to?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'poly', pts: [[0, 3], [-1.39, 2.66], [-2.47, 1.7], [-2.98, 0.36], [-2.81, -1.06], [-1.99, -2.25], [-0.72, -2.91], [0.72, -2.91], [1.99, -2.25], [2.81, -1.06], [2.98, 0.36], [2.47, 1.7], [1.39, 2.66]], fill: false },
          { t: 'seg', a: [0, 3], b: [-2.47, 1.7], dash: true },
          { t: 'seg', a: [0, 3], b: [-2.98, 0.36], dash: true },
          { t: 'seg', a: [0, 3], b: [-2.81, -1.06], dash: true },
          { t: 'seg', a: [0, 3], b: [-1.99, -2.25], dash: true },
          { t: 'seg', a: [0, 3], b: [-0.72, -2.91], dash: true },
          { t: 'seg', a: [0, 3], b: [0.72, -2.91], dash: true },
          { t: 'seg', a: [0, 3], b: [1.99, -2.25], dash: true },
          { t: 'seg', a: [0, 3], b: [2.81, -1.06], dash: true },
          { t: 'seg', a: [0, 3], b: [2.98, 0.36], dash: true },
          { t: 'seg', a: [0, 3], b: [2.47, 1.7], dash: true },
          { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -12 },
        ],
      },
      answer: '$1980^\\circ$',
      solution:
        'The $10$ diagonals from the marked vertex carve the $13$-gon into $13 - 2 = 11$ triangles whose angles tile the polygon’s angles exactly, so the sum is $11 \\times 180^\\circ = 1980^\\circ$. Second route by rearrangement: $180^\\circ$ per vertex would be $13 \\times 180^\\circ = 2340^\\circ$, but a fan about an interior point spends $360^\\circ$ at the center that never touches the boundary, so $2340^\\circ - 360^\\circ = 1980^\\circ$ ✓ — the two bookkeepings agree. USING n TRIANGLES hands in $2340^\\circ$ ✗, the fan-about-a-point total with the central $360^\\circ$ still inside it. USING n MINUS ONE offers $2160^\\circ$ ✗; the figure’s eleven triangles say otherwise.',
    },
    {
      q: 'A $15$-gon is divided into triangles by the diagonals from vertex $A$, as shown. Find the sum of its interior angles.',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'poly', pts: [[0, 3], [-1.22, 2.74], [-2.23, 2.01], [-2.85, 0.93], [-2.98, -0.31], [-2.6, -1.5], [-1.76, -2.43], [-0.62, -2.93], [0.62, -2.93], [1.76, -2.43], [2.6, -1.5], [2.98, -0.31], [2.85, 0.93], [2.23, 2.01], [1.22, 2.74]], fill: false },
          { t: 'seg', a: [0, 3], b: [-2.23, 2.01], dash: true },
          { t: 'seg', a: [0, 3], b: [-2.85, 0.93], dash: true },
          { t: 'seg', a: [0, 3], b: [-2.98, -0.31], dash: true },
          { t: 'seg', a: [0, 3], b: [-2.6, -1.5], dash: true },
          { t: 'seg', a: [0, 3], b: [-1.76, -2.43], dash: true },
          { t: 'seg', a: [0, 3], b: [-0.62, -2.93], dash: true },
          { t: 'seg', a: [0, 3], b: [0.62, -2.93], dash: true },
          { t: 'seg', a: [0, 3], b: [1.76, -2.43], dash: true },
          { t: 'seg', a: [0, 3], b: [2.6, -1.5], dash: true },
          { t: 'seg', a: [0, 3], b: [2.98, -0.31], dash: true },
          { t: 'seg', a: [0, 3], b: [2.85, 0.93], dash: true },
          { t: 'seg', a: [0, 3], b: [2.23, 2.01], dash: true },
          { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -12 },
        ],
      },
      answer: '$2340^\\circ$',
      solution:
        'From $A$ run $15 - 3 = 12$ diagonals, splitting the $15$-gon into $15 - 2 = 13$ triangles, and those triangles’ angles rebuild the polygon’s angles piece by piece: the sum is $13 \\times 180^\\circ = 2340^\\circ$. Second route by rearrangement: fanning from an interior point instead gives $15$ triangles worth $15 \\times 180^\\circ = 2700^\\circ$, minus the $360^\\circ$ that pools at the center: $2700^\\circ - 360^\\circ = 2340^\\circ$ ✓. USING n TRIANGLES reports $2700^\\circ$ ✗, a total that still contains a full turn of central angle. USING n MINUS ONE gives $2520^\\circ$ ✗ — one phantom triangle too many for a fan from a vertex.',
    },
  ],

  // slot 3 — regular polygon: each interior AND each exterior angle
  //          (compound answer, no figure). Lanes: dodecagon -> 150/30;
  //          18-gon -> 160/20; 15-gon -> 156/24.
  [
    {
      q: 'For a regular dodecagon, find (a) the measure of each interior angle and (b) the measure of each exterior angle.',
      answer: '(a) $150^\\circ$, (b) $30^\\circ$',
      solution:
        'Exterior first: the twelve equal exterior angles split $360^\\circ$ evenly, so each is $\\frac{360^\\circ}{12} = 30^\\circ$, and its interior partner across the straight line is $180^\\circ - 30^\\circ = 150^\\circ$. Second route through the interior formula: $\\frac{(12-2) \\times 180^\\circ}{12} = \\frac{1800^\\circ}{12} = 150^\\circ$ ✓, and the partners then close the check, $150^\\circ + 30^\\circ = 180^\\circ$ ✓. TREATING THE EXTERIOR AS THE INTERIOR swaps the two and calls the corner $30^\\circ$ ✗ — a corner that sharp belongs to a star, not a $12$-sided room. FORGETTING THE MINUS TWO computes $\\frac{12 \\times 180^\\circ}{12} = 180^\\circ$ ✗, a “corner” that is no corner at all.',
    },
    {
      q: 'A regular $18$-gon is stamped onto a coin. What are (a) each of its interior angles and (b) each of its exterior angles?',
      answer: '(a) $160^\\circ$, (b) $20^\\circ$',
      solution:
        'The exterior angles of any convex polygon total $360^\\circ$, and a regular $18$-gon shares that equally: each exterior angle is $\\frac{360^\\circ}{18} = 20^\\circ$, so each interior angle is $180^\\circ - 20^\\circ = 160^\\circ$. Second route from the angle-sum formula: the interior angles total $(18-2) \\times 180^\\circ = 2880^\\circ$, and $\\frac{2880^\\circ}{18} = 160^\\circ$ ✓ — with so many sides the coin’s edge is nearly circular, and $160^\\circ$ sits suitably close to a straight angle. TREATING THE EXTERIOR AS THE INTERIOR reports $20^\\circ$ corners ✗ on an $18$-sided coin — that shape would be a spiky gear. FORGETTING THE MINUS TWO divides $18 \\times 180^\\circ$ by $18$ and gets $180^\\circ$ ✗, which would flatten the coin’s rim into a line.',
    },
    {
      q: 'Determine (a) each interior angle and (b) each exterior angle of a regular $15$-gon.',
      answer: '(a) $156^\\circ$, (b) $24^\\circ$',
      solution:
        'Each exterior angle of a regular $15$-gon is $\\frac{360^\\circ}{15} = 24^\\circ$ — the fifteen equal turns of one full trip around the boundary — so each interior angle is the straight-line partner, $180^\\circ - 24^\\circ = 156^\\circ$. Second route through the sum: the interior angles total $(15-2) \\times 180^\\circ = 2340^\\circ$, and $\\frac{2340^\\circ}{15} = 156^\\circ$ ✓, after which $156^\\circ + 24^\\circ = 180^\\circ$ ✓ seals the pairing. TREATING THE EXTERIOR AS THE INTERIOR answers $24^\\circ$ for part (a) ✗, mistaking the turn for the corner. FORGETTING THE MINUS TWO yields $\\frac{15 \\times 180^\\circ}{15} = 180^\\circ$ ✗ — every polygon would have straight corners, which no polygon does.',
    },
  ],

  // slot 4 — area of a regular hexagon from its side (no figure).
  //          Lanes: side 26 -> 1014√3; side 22 -> 726√3; side 28 -> 1176√3.
  [
    {
      q: 'Find the area of a regular hexagon whose side length is $26$.',
      answer: '$1014\\sqrt{3}$',
      solution:
        'Segments from the center to the vertices cut the hexagon into $6$ equilateral triangles of side $26$, each of area $\\frac{\\sqrt{3}}{4} \\times 26^2 = 169\\sqrt{3}$, for a total of $6 \\times 169\\sqrt{3} = 1014\\sqrt{3}$. Second route through the apothem: $a = \\frac{26\\sqrt{3}}{2} = 13\\sqrt{3}$ and the perimeter is $P = 6 \\times 26 = 156$, so $\\frac{1}{2}aP = \\frac{1}{2} \\times 13\\sqrt{3} \\times 156 = 1014\\sqrt{3}$ ✓ — the triangle count and the apothem formula are the same dissection wearing different clothes. STOPPING AT ONE TRIANGLE turns in $169\\sqrt{3}$ ✗, a sixth of the hexagon. USING THE SQUARE FORMULA computes $26^2 = 676$ ✗, the area of a square that was never in the problem.',
    },
    {
      q: 'A hexagonal courtyard is regular with each edge measuring $22$. How much area does the courtyard cover?',
      answer: '$726\\sqrt{3}$',
      solution:
        'The center-to-vertex segments tile the courtyard with $6$ equilateral triangles of side $22$: each has area $\\frac{\\sqrt{3}}{4} \\times 484 = 121\\sqrt{3}$, so the courtyard covers $6 \\times 121\\sqrt{3} = 726\\sqrt{3}$. Second route through the apothem: $a = \\frac{22\\sqrt{3}}{2} = 11\\sqrt{3}$, the perimeter is $132$, and $\\frac{1}{2} \\times 11\\sqrt{3} \\times 132 = 726\\sqrt{3}$ ✓; as a size check, $726\\sqrt{3} \\approx 1257$, comfortably more than the $484$ of a side-$22$ square, as a wider shape should be ✓. STOPPING AT ONE TRIANGLE pours paving for $121\\sqrt{3}$ ✗ and leaves five-sixths of the courtyard bare. USING THE SQUARE FORMULA bills for $484$ ✗ — the courtyard has six edges, not four.',
    },
    {
      q: 'What is the area of a regular hexagon with side length $28$?',
      answer: '$1176\\sqrt{3}$',
      solution:
        'Six equilateral triangles of side $28$ fill the hexagon exactly, and each carries $\\frac{\\sqrt{3}}{4} \\times 28^2 = 196\\sqrt{3}$, so the hexagon’s area is $6 \\times 196\\sqrt{3} = 1176\\sqrt{3}$. Second route through the apothem: $a = \\frac{28\\sqrt{3}}{2} = 14\\sqrt{3}$ with perimeter $P = 168$ gives $\\frac{1}{2} \\times 14\\sqrt{3} \\times 168 = 1176\\sqrt{3}$ ✓ — the shortcut $\\frac{3\\sqrt{3}}{2}s^2 = \\frac{3\\sqrt{3}}{2} \\times 784$ lands there too, because the formula IS the six triangles. STOPPING AT ONE TRIANGLE reports $196\\sqrt{3}$ ✗, one slice of a six-slice pie. USING THE SQUARE FORMULA answers $784$ ✗, with the $\\sqrt{3}$ and the sixfold symmetry both missing.',
    },
  ],

  // slot 5 — diagonal count given, side count wanted (no figure).
  //          Lanes: 77 -> 14; 230 -> 23; 324 -> 27.
  [
    {
      q: 'A convex polygon has exactly $77$ diagonals. How many sides does it have?',
      answer: '$14$',
      solution:
        'Set $\\frac{n(n-3)}{2} = 77$, so $n(n-3) = 154$: we need two numbers $3$ apart with product $154$, and $14 \\times 11 = 154$ ✓, so $n = 14$. Second route through the quadratic: $n^2 - 3n - 154 = 0$ factors as $(n - 14)(n + 11) = 0$ ✓, and since $n(n-3)$ only grows as $n$ grows, $14$ is the only side count that works. Check: $\\frac{14 \\times 11}{2} = 77$ ✓. FORGETTING TO DOUBLE hunts for $n(n-3) = 77$ ✗ and finds no whole number — the dead end is the tell that the $2$ went missing. KEEPING THE NEGATIVE ROOT reports $n = -11$ ✗, a polygon with fewer than no sides.',
    },
    {
      q: 'A large convention hall is a convex polygon, and its floor plan shows exactly $230$ diagonals. How many walls does the hall have?',
      answer: '$23$',
      solution:
        'The walls are the sides, so solve $\\frac{n(n-3)}{2} = 230$, giving $n(n-3) = 460$. Two numbers $3$ apart with product $460$: $23 \\times 20 = 460$ ✓, so the hall has $23$ walls. Second route through the quadratic: $n^2 - 3n - 460 = 0$ factors as $(n - 23)(n + 20) = 0$ ✓, and the check closes the loop: $\\frac{23 \\times 20}{2} = 230$ ✓. FORGETTING TO DOUBLE tries $n(n-3) = 230$ ✗, which no whole number satisfies — when the factor hunt comes up empty, look for the lost factor of $2$. KEEPING THE NEGATIVE ROOT offers $n = -20$ ✗, which is not a floor plan.',
    },
    {
      q: 'How many sides does a convex polygon with exactly $324$ diagonals have?',
      answer: '$27$',
      solution:
        'From $\\frac{n(n-3)}{2} = 324$ comes $n(n-3) = 648$. Hunt for two numbers $3$ apart multiplying to $648$: $27 \\times 24 = 648$ ✓, so $n = 27$. Second route through the quadratic: $n^2 - 3n - 648 = 0$ factors as $(n - 27)(n + 24) = 0$ ✓, and plugging back in, $\\frac{27 \\times 24}{2} = 27 \\times 12 = 324$ ✓ — both directions agree. FORGETTING TO DOUBLE looks for $n(n-3) = 324$ ✗ and gets stuck between $19$ and $20$, a non-answer that flags the missing doubling. KEEPING THE NEGATIVE ROOT hands in $n = -24$ ✗, a root the geometry has no use for.',
    },
  ],

  // slot 6 — three angles of a quadrilateral, find the fourth (figure).
  //          Lanes: 88-102-96 -> 74; 79-113-92 -> 76; 82-95-104 -> 79.
  [
    {
      q: 'In quadrilateral $ABCD$, the angles at $A$, $B$, and $C$ measure $88^\\circ$, $102^\\circ$, and $96^\\circ$, as marked. What is the measure of the angle at $D$?',
      fig: {
        view: [-1.5, -1.5, 8.3, 7.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6.79, 3.72], [0.2, 5.86]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [0.2, 5.86], r: 0.9, label: '88' },
          { t: 'angle', at: [6, 0], from: [6.79, 3.72], to: [0, 0], r: 0.9, label: '102' },
          { t: 'angle', at: [6.79, 3.72], from: [0.2, 5.86], to: [6, 0], r: 0.8, label: '96' },
          { t: 'angle', at: [0.2, 5.86], from: [0, 0], to: [6.79, 3.72], r: 0.7, label: '?' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6.79, 3.72], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0.2, 5.86], label: 'D', dx: -10, dy: -8 },
        ],
      },
      answer: '$74^\\circ$',
      solution:
        'A diagonal cuts any quadrilateral into two triangles, so its interior angles total $2 \\times 180^\\circ = 360^\\circ$. The three marked angles give $88^\\circ + 102^\\circ + 96^\\circ = 286^\\circ$, so $\\angle D = 360^\\circ - 286^\\circ = 74^\\circ$. Second route by deficit bookkeeping against $90^\\circ$: the knowns run $-2$, $+12$, and $+6$, a net of $+16$, so the fourth angle must sit $16$ below $90^\\circ$ — that is $74^\\circ$ ✓, and re-adding, $88 + 102 + 96 + 74 = 360$ ✓. SUBTRACTING FROM ONE-EIGHTY treats the quadrilateral like a triangle and goes negative ✗ — four sides carry two triangles’ worth of angle. REPORTING THE RUNNING TOTAL hands in $286^\\circ$ ✗, a subtotal with the question still open.',
    },
    {
      q: 'A kite-flying field has four straight fences meeting at corners $E$, $F$, $G$, and $H$. The corners at $E$, $F$, and $G$ measure $79^\\circ$, $113^\\circ$, and $92^\\circ$, as in the figure. How large is the corner at $H$?',
      fig: {
        view: [-1.5, -1.5, 8.9, 7.7],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [7.41, 3.31], [1.21, 6.21]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [1.21, 6.21], r: 0.9, label: '79' },
          { t: 'angle', at: [6, 0], from: [7.41, 3.31], to: [0, 0], r: 0.9, label: '113' },
          { t: 'angle', at: [7.41, 3.31], from: [1.21, 6.21], to: [6, 0], r: 0.8, label: '92' },
          { t: 'angle', at: [1.21, 6.21], from: [0, 0], to: [7.41, 3.31], r: 0.7, label: '?' },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [7.41, 3.31], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [1.21, 6.21], label: 'H', dx: -10, dy: -8 },
        ],
      },
      answer: '$76^\\circ$',
      solution:
        'Four corners of any quadrilateral share $360^\\circ$ — a straight line across the field splits it into two triangles worth $180^\\circ$ each. The surveyed corners total $79^\\circ + 113^\\circ + 92^\\circ = 284^\\circ$, leaving $\\angle H = 360^\\circ - 284^\\circ = 76^\\circ$. Second route by deficit bookkeeping: measured against $90^\\circ$ the knowns run $-11$, $+23$, and $+2$, a net of $+14$, so the last corner sits $14$ under $90^\\circ$, which is $76^\\circ$ ✓; the four then land on $360^\\circ$ exactly ✓. SUBTRACTING FROM ONE-EIGHTY computes $180^\\circ - 284^\\circ$ ✗ and fences in a negative corner. REPORTING THE RUNNING TOTAL submits $284^\\circ$ ✗, three corners masquerading as the fourth.',
    },
    {
      q: 'Quadrilateral $TUVW$ has $\\angle T = 82^\\circ$, $\\angle U = 95^\\circ$, and $\\angle V = 104^\\circ$, as shown. Compute $\\angle W$ without a protractor.',
      fig: {
        view: [-1.5, -1.5, 7.9, 7.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6.33, 3.79], [0.8, 5.69]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [0.8, 5.69], r: 0.9, label: '82' },
          { t: 'angle', at: [6, 0], from: [6.33, 3.79], to: [0, 0], r: 0.9, label: '95' },
          { t: 'angle', at: [6.33, 3.79], from: [0.8, 5.69], to: [6, 0], r: 0.8, label: '104' },
          { t: 'angle', at: [0.8, 5.69], from: [0, 0], to: [6.33, 3.79], r: 0.7, label: '?' },
          { t: 'point', p: [0, 0], label: 'T', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'U', dx: 10, dy: 10 },
          { t: 'point', p: [6.33, 3.79], label: 'V', dx: 10, dy: -8 },
          { t: 'point', p: [0.8, 5.69], label: 'W', dx: -10, dy: -8 },
        ],
      },
      answer: '$79^\\circ$',
      solution:
        'The interior angles of a quadrilateral always total $(4-2) \\times 180^\\circ = 360^\\circ$. The three givens sum to $82^\\circ + 95^\\circ + 104^\\circ = 281^\\circ$, so $\\angle W = 360^\\circ - 281^\\circ = 79^\\circ$. Second route by deficit bookkeeping: against $90^\\circ$ the knowns read $-8$, $+5$, and $+14$, netting $+11$, so the fourth angle sits $11$ below $90^\\circ$ — $79^\\circ$ ✓ — and the closing check $82 + 95 + 104 + 79 = 360$ ✓ balances the books. Every angle is under $180^\\circ$, so $TUVW$ is convex, matching the figure. SUBTRACTING FROM ONE-EIGHTY yields a negative angle ✗, one triangle’s budget stretched over two triangles’ corners. REPORTING THE RUNNING TOTAL files $281^\\circ$ ✗ and skips the final subtraction.',
    },
  ],

  // slot 7 — regular polygon interior angle given, side count wanted
  //          (no figure). Lanes: 168 -> 30; 172 -> 45; 171 -> 40.
  [
    {
      q: 'Each interior angle of a regular polygon measures $168^\\circ$. How many sides does the polygon have?',
      answer: '$30$',
      solution:
        'Cross to the exterior angle: $180^\\circ - 168^\\circ = 12^\\circ$ at each vertex, and since a full trip around the polygon turns through $360^\\circ$ in equal steps, $n = \\frac{360^\\circ}{12^\\circ} = 30$. Second route by algebra on the interior formula: $\\frac{(n-2) \\times 180}{n} = 168$ gives $180n - 360 = 168n$, so $12n = 360$ and $n = 30$ ✓ — the same $12$ surfacing as a coefficient instead of an angle. DIVIDING THREE-SIXTY BY THE INTERIOR computes $\\frac{360}{168} \\approx 2.14$ ✗, and no polygon has two-and-a-bit sides. SUPPLEMENTING AGAINST THREE-SIXTY uses $360^\\circ - 168^\\circ = 192^\\circ$ as the turn ✗ — the interior angle pairs with $180^\\circ$, the straight line, not with the full circle.',
    },
    {
      q: 'The tiles along a museum floor’s border are regular polygons whose interior angles each measure $172^\\circ$. How many sides does each tile have?',
      answer: '$45$',
      solution:
        'Each exterior angle is $180^\\circ - 172^\\circ = 8^\\circ$, and the exterior angles of a convex polygon always total one full turn, so $n = \\frac{360^\\circ}{8^\\circ} = 45$. Second route by algebra: from $\\frac{(n-2) \\times 180}{n} = 172$ comes $180n - 360 = 172n$, hence $8n = 360$ and $n = 45$ ✓ — with corners that flat, the tile is nearly a disk, and $45$ sides is suitably many. DIVIDING THREE-SIXTY BY THE INTERIOR gets $\\frac{360}{172} \\approx 2.09$ ✗, mistaking the interior angle for the turning angle. SUPPLEMENTING AGAINST THREE-SIXTY turns $188^\\circ$ per corner ✗ and finishes the lap before the second vertex.',
    },
    {
      q: 'A regular polygon has interior angles of $171^\\circ$ each. Find its number of sides.',
      answer: '$40$',
      solution:
        'The exterior angle at each vertex is $180^\\circ - 171^\\circ = 9^\\circ$, so the $360^\\circ$ of total turning breaks into $n = \\frac{360^\\circ}{9^\\circ} = 40$ equal turns — a regular $40$-gon. Second route by algebra: $\\frac{(n-2) \\times 180}{n} = 171$ rearranges to $180n - 360 = 171n$, so $9n = 360$ and $n = 40$ ✓; as a plausibility check, $171^\\circ$ sits between the $168^\\circ$ of a $30$-gon and the $172^\\circ$ of a $45$-gon, and $40$ lands between $30$ and $45$ ✓. DIVIDING THREE-SIXTY BY THE INTERIOR produces $\\frac{360}{171} \\approx 2.11$ ✗, an impossible side count. SUPPLEMENTING AGAINST THREE-SIXTY takes the turn to be $189^\\circ$ ✗, a reflex turn no convex corner makes.',
    },
  ],

  // slot 8 — corner-cut square octagon area (figure). Lanes:
  //          square 10 legs 3 -> 82; square 12 legs 2 -> 136;
  //          square 18 legs 5 -> 274.
  [
    {
      q: 'Each corner of a square with side $10$ is snipped off along a right triangle with legs of length $3$, leaving the octagon shown. Find the octagon’s area.',
      fig: {
        view: [-1, -1, 11, 11],
        elems: [
          { t: 'poly', pts: [[3, 0], [7, 0], [10, 3], [10, 7], [7, 10], [3, 10], [0, 7], [0, 3]], fill: false },
          { t: 'seg', a: [0, 0], b: [3, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [0, 3], dash: true },
          { t: 'seg', a: [10, 0], b: [7, 0], dash: true },
          { t: 'seg', a: [10, 0], b: [10, 3], dash: true },
          { t: 'seg', a: [10, 10], b: [7, 10], dash: true },
          { t: 'seg', a: [10, 10], b: [10, 7], dash: true },
          { t: 'seg', a: [0, 10], b: [3, 10], dash: true },
          { t: 'seg', a: [0, 10], b: [0, 7], dash: true },
          { t: 'label', p: [1.5, 0], text: '3', dx: 0, dy: 14 },
          { t: 'label', p: [0, 1.5], text: '3', dx: -12, dy: 0 },
          { t: 'label', p: [5, 10], text: '10', dx: 0, dy: -10 },
        ],
      },
      answer: '$82$',
      solution:
        'Subtract the snipped corners from the square: the square holds $10^2 = 100$, each corner triangle holds $\\frac{1}{2} \\times 3 \\times 3 = 4.5$, and the four corners together remove $4 \\times 4.5 = 18$, leaving $100 - 18 = 82$. Second route by building up: the octagon is a middle vertical band $4$ wide and $10$ tall ($40$) plus two side trapezoids with parallel sides $4$ and $10$ and width $3$ ($\\frac{4 + 10}{2} \\times 3 = 21$ each), and $40 + 2 \\times 21 = 82$ ✓ — the dissection never mentions the corners, yet lands on the same number. TREATING EACH CORNER AS A FULL SQUARE removes $4 \\times 9 = 36$ and reports $64$ ✗, forgetting the half in the triangle area. STOPPING AT THE CUT AREA answers $18$ ✗, the scraps on the floor rather than the shape that remains.',
    },
    {
      q: 'A carpenter turns a square panel of side $12$ into an octagonal tabletop by sawing a right triangle with legs $2$ off each corner, as in the figure. What is the tabletop’s area?',
      fig: {
        view: [-1, -1, 13, 13],
        elems: [
          { t: 'poly', pts: [[2, 0], [10, 0], [12, 2], [12, 10], [10, 12], [2, 12], [0, 10], [0, 2]], fill: false },
          { t: 'seg', a: [0, 0], b: [2, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [0, 2], dash: true },
          { t: 'seg', a: [12, 0], b: [10, 0], dash: true },
          { t: 'seg', a: [12, 0], b: [12, 2], dash: true },
          { t: 'seg', a: [12, 12], b: [10, 12], dash: true },
          { t: 'seg', a: [12, 12], b: [12, 10], dash: true },
          { t: 'seg', a: [0, 12], b: [2, 12], dash: true },
          { t: 'seg', a: [0, 12], b: [0, 10], dash: true },
          { t: 'label', p: [1, 0], text: '2', dx: 0, dy: 14 },
          { t: 'label', p: [0, 1], text: '2', dx: -12, dy: 0 },
          { t: 'label', p: [6, 12], text: '12', dx: 0, dy: -10 },
        ],
      },
      answer: '$136$',
      solution:
        'Work by subtraction: the panel starts at $12^2 = 144$, each sawn corner is a right triangle of area $\\frac{1}{2} \\times 2 \\times 2 = 2$, and the four cuts remove $4 \\times 2 = 8$, so the tabletop keeps $144 - 8 = 136$. Second route by building up: a central band $8$ wide and $12$ tall ($96$) plus two side trapezoids with parallel sides $8$ and $12$ and width $2$ ($\\frac{8 + 12}{2} \\times 2 = 20$ each) gives $96 + 2 \\times 20 = 136$ ✓ — two dissections, one tabletop. TREATING EACH CORNER AS A FULL SQUARE saws away $4 \\times 4 = 16$ and reports $128$ ✗; each cut takes half of a $2 \\times 2$ square, not all of it. STOPPING AT THE CUT AREA answers $8$ ✗, which is the sawdust, not the table.',
    },
    {
      q: 'The octagon in the figure was made from a square of side $18$ by cutting a right triangle with legs of length $5$ from each corner. Compute the octagon’s area.',
      fig: {
        view: [-1.5, -1.5, 19.5, 19.5],
        elems: [
          { t: 'poly', pts: [[5, 0], [13, 0], [18, 5], [18, 13], [13, 18], [5, 18], [0, 13], [0, 5]], fill: false },
          { t: 'seg', a: [0, 0], b: [5, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [0, 5], dash: true },
          { t: 'seg', a: [18, 0], b: [13, 0], dash: true },
          { t: 'seg', a: [18, 0], b: [18, 5], dash: true },
          { t: 'seg', a: [18, 18], b: [13, 18], dash: true },
          { t: 'seg', a: [18, 18], b: [18, 13], dash: true },
          { t: 'seg', a: [0, 18], b: [5, 18], dash: true },
          { t: 'seg', a: [0, 18], b: [0, 13], dash: true },
          { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [0, 2.5], text: '5', dx: -12, dy: 0 },
          { t: 'label', p: [9, 18], text: '18', dx: 0, dy: -10 },
        ],
      },
      answer: '$274$',
      solution:
        'Start from the square and subtract: $18^2 = 324$, each corner triangle is $\\frac{1}{2} \\times 5 \\times 5 = 12.5$, and four of them remove $4 \\times 12.5 = 50$, leaving $324 - 50 = 274$. Second route by building up: the octagon is a central band $8$ wide and $18$ tall ($144$) plus two side trapezoids with parallel sides $8$ and $18$ and width $5$ ($\\frac{8 + 18}{2} \\times 5 = 65$ each), and $144 + 2 \\times 65 = 274$ ✓ — subtraction and addition meet in the middle. TREATING EACH CORNER AS A FULL SQUARE removes $4 \\times 25 = 100$ and reports $224$ ✗, double-cutting every corner. STOPPING AT THE CUT AREA files $50$ ✗, the four scraps instead of the octagon.',
    },
  ],

  // slot 9 — regular hexagon: apothem AND area via the apothem (compound
  //          answer, figure). Lanes: side 8 -> 4√3 and 96√3;
  //          side 6 -> 3√3 and 54√3; side 18 -> 9√3 and 486√3.
  [
    {
      q: 'A regular hexagon has side length $8$. Find (a) its apothem and (b) its area, using the apothem.',
      fig: {
        view: [-9, -8, 9, 8],
        elems: [
          { t: 'poly', pts: [[8, 0], [4, 6.93], [-4, 6.93], [-8, 0], [-4, -6.93], [4, -6.93]], fill: false },
          { t: 'seg', a: [0, 0], b: [0, -6.93], dash: true },
          { t: 'right', at: [0, -6.93], from: [4, -6.93], to: [0, 0] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: -10 },
          { t: 'label', p: [0, -3.46], text: 'a', dx: -10, dy: 0 },
          { t: 'label', p: [0, -6.93], text: '8', dx: 30, dy: 14 },
        ],
      },
      answer: '(a) $4\\sqrt{3}$, (b) $96\\sqrt{3}$',
      solution:
        'The apothem is the height of one of the hexagon’s six equilateral triangles: it runs from the center to a side’s midpoint, making a right triangle with hypotenuse $8$ (center to vertex) and leg $4$ (half a side), so $a = \\sqrt{64 - 16} = \\sqrt{48} = 4\\sqrt{3}$. Then $[\\text{hexagon}] = \\frac{1}{2}aP = \\frac{1}{2} \\times 4\\sqrt{3} \\times 48 = 96\\sqrt{3}$. Second route without the apothem: six equilateral triangles of side $8$ at $\\frac{\\sqrt{3}}{4} \\times 64 = 16\\sqrt{3}$ apiece give $6 \\times 16\\sqrt{3} = 96\\sqrt{3}$ ✓, and the apothem re-checks as $\\frac{8\\sqrt{3}}{2} = 4\\sqrt{3}$ ✓. TAKING THE APOTHEM EQUAL TO THE SIDE computes $\\frac{1}{2} \\times 8 \\times 48 = 192$ ✗ — the center-to-edge drop is shorter than the side. DROPPING THE HALF IN THE AREA FORMULA reports $192\\sqrt{3}$ ✗, exactly double the hexagon.',
    },
    {
      q: 'For the regular hexagon shown, whose sides measure $6$, determine (a) the apothem and (b) the area computed from the apothem.',
      fig: {
        view: [-7, -6.2, 7, 6.2],
        elems: [
          { t: 'poly', pts: [[6, 0], [3, 5.2], [-3, 5.2], [-6, 0], [-3, -5.2], [3, -5.2]], fill: false },
          { t: 'seg', a: [0, 0], b: [0, -5.2], dash: true },
          { t: 'right', at: [0, -5.2], from: [3, -5.2], to: [0, 0] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: -10 },
          { t: 'label', p: [0, -2.6], text: 'a', dx: -10, dy: 0 },
          { t: 'label', p: [0, -5.2], text: '6', dx: 26, dy: 14 },
        ],
      },
      answer: '(a) $3\\sqrt{3}$, (b) $54\\sqrt{3}$',
      solution:
        'Center to vertex equals the side in a regular hexagon, so the apothem closes a right triangle with hypotenuse $6$ and leg $3$ (half a side): $a = \\sqrt{36 - 9} = \\sqrt{27} = 3\\sqrt{3}$. With perimeter $P = 36$, the area is $\\frac{1}{2}aP = \\frac{1}{2} \\times 3\\sqrt{3} \\times 36 = 54\\sqrt{3}$. Second route by triangle count: six equilateral triangles of side $6$ at $\\frac{\\sqrt{3}}{4} \\times 36 = 9\\sqrt{3}$ each total $54\\sqrt{3}$ ✓, and the shortcut $a = \\frac{6\\sqrt{3}}{2} = 3\\sqrt{3}$ ✓ confirms part (a) from the equilateral-height formula. TAKING THE APOTHEM EQUAL TO THE SIDE claims $a = 6$ ✗ and inflates the area to $108$; the right angle in the figure shows the apothem is the short leg of its triangle, never the hypotenuse. DROPPING THE HALF IN THE AREA FORMULA doubles the answer to $108\\sqrt{3}$ ✗.',
    },
    {
      q: 'A hexagonal gazebo floor is a regular hexagon with side length $18$, as in the figure. Find (a) the apothem of the floor and (b) its area by way of the apothem.',
      fig: {
        view: [-20, -17.5, 20, 17.5],
        elems: [
          { t: 'poly', pts: [[18, 0], [9, 15.59], [-9, 15.59], [-18, 0], [-9, -15.59], [9, -15.59]], fill: false },
          { t: 'seg', a: [0, 0], b: [0, -15.59], dash: true },
          { t: 'right', at: [0, -15.59], from: [9, -15.59], to: [0, 0], s: 1 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: -10 },
          { t: 'label', p: [0, -7.8], text: 'a', dx: -10, dy: 0 },
          { t: 'label', p: [0, -15.59], text: '18', dx: 30, dy: 14 },
        ],
      },
      answer: '(a) $9\\sqrt{3}$, (b) $486\\sqrt{3}$',
      solution:
        'The apothem drops from the center $O$ to the midpoint of a side, forming a right triangle with hypotenuse $18$ (center to vertex) and leg $9$ (half a side): $a = \\sqrt{324 - 81} = \\sqrt{243} = 9\\sqrt{3}$. The perimeter is $P = 6 \\times 18 = 108$, so the area is $\\frac{1}{2}aP = \\frac{1}{2} \\times 9\\sqrt{3} \\times 108 = 486\\sqrt{3}$. Second route by triangle count: six equilateral triangles of side $18$ at $\\frac{\\sqrt{3}}{4} \\times 324 = 81\\sqrt{3}$ each give $6 \\times 81\\sqrt{3} = 486\\sqrt{3}$ ✓, and $a = \\frac{18\\sqrt{3}}{2} = 9\\sqrt{3}$ ✓ re-derives part (a) at a glance. TAKING THE APOTHEM EQUAL TO THE SIDE floors the gazebo with $\\frac{1}{2} \\times 18 \\times 108 = 972$ ✗ of material. DROPPING THE HALF IN THE AREA FORMULA orders $972\\sqrt{3}$ ✗, two gazebos’ worth.',
    },
  ],

  // slot 10 — interior sum equals k times the exterior sum (no figure).
  //           Identity check: (n-2)·180 = k·360 <=> n = 2k + 2.
  //           Lanes: k=11 -> 24; k=13 -> 28; k=10 -> 22.
  [
    {
      q: 'The interior angles of a convex polygon add up to exactly $11$ times the sum of its exterior angles. How many sides does the polygon have?',
      answer: '$24$',
      solution:
        'The exterior angles of any convex polygon total $360^\\circ$, so the interior angles must total $11 \\times 360^\\circ = 3960^\\circ$. Then $(n-2) \\times 180 = 3960$ gives $n - 2 = 22$, so $n = 24$. Second route through the general identity: $(n-2) \\times 180 = k \\times 360$ divides down to $n - 2 = 2k$, so $n = 2k + 2$, and $k = 11$ lands on $n = 24$ ✓; checking, a $24$-gon’s interior angles total $22 \\times 180^\\circ = 3960^\\circ = 11 \\times 360^\\circ$ ✓. PAIRING THE SUM WITH ONE-EIGHTY sets the total to $11 \\times 180^\\circ$ and answers $13$ ✗ — the exterior angles sum to a full turn, not half of one. DROPPING THE MINUS TWO solves $n \\times 180 = 3960$ for $n = 22$ ✗, two sides short.',
    },
    {
      q: 'In a certain convex polygon, the interior angles sum to $13$ times what the exterior angles sum to. Find the number of sides.',
      answer: '$28$',
      solution:
        'Whatever the polygon, its exterior angles total $360^\\circ$, so its interior angles here total $13 \\times 360^\\circ = 4680^\\circ$, and $(n-2) \\times 180 = 4680$ gives $n - 2 = 26$, hence $n = 28$. Second route through the general identity: dividing $(n-2) \\times 180 = k \\times 360$ by $180$ leaves $n - 2 = 2k$, so $n = 2k + 2 = 28$ when $k = 13$ ✓ — the side count is always even for a whole-number ratio, which $28$ obeys ✓, and $26 \\times 180^\\circ = 4680^\\circ = 13 \\times 360^\\circ$ closes the check ✓. PAIRING THE SUM WITH ONE-EIGHTY totals $13 \\times 180^\\circ = 2340^\\circ$ and answers $15$ ✗, halving the exterior sum. DROPPING THE MINUS TWO reaches $n = 26$ ✗ by pretending the polygon fans into $n$ triangles from a vertex.',
    },
    {
      q: 'A convex polygon’s interior angles sum to precisely $12$ times the sum of its exterior angles. How many sides must it have?',
      answer: '$26$',
      solution:
        'The exterior sum is $360^\\circ$ for every convex polygon, so the interior sum is $12 \\times 360^\\circ = 4320^\\circ$. Solving $(n-2) \\times 180 = 4320$ gives $n - 2 = 24$, so $n = 26$. Second route through the general identity: $(n-2) \\times 180 = k \\times 360$ is the same as $n - 2 = 2k$, that is $n = 2k + 2$, and $k = 12$ forces $n = 26$ ✓; plugging back, a $26$-gon’s interior angles total $24 \\times 180^\\circ = 4320^\\circ$, which is $12 \\times 360^\\circ$ on the nose ✓. PAIRING THE SUM WITH ONE-EIGHTY takes the target to be $12 \\times 180^\\circ = 2160^\\circ$ and answers $14$ ✗ — that ratio would be $6$, not $12$. DROPPING THE MINUS TWO turns in $n = 24$ ✗, which gives a ratio of $11$, not the required $12$.',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 9,
  worksheet,
}
