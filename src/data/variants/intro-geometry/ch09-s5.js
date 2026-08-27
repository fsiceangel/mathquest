// Introduction to Geometry chapter 9 — variations for the CHALLENGE set.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every answer was worked twice by two genuinely different routes, and the
//    two routes had to agree before the key was written. The pairs used are:
//    factoring n(n-3) = 2D vs. bracketing with the neighboring side counts
//    (slot 1); the exterior-angle route vs. the interior-angle formula
//    (slot 2); recovering n from the angle sum vs. rebuilding the diagonal
//    count vertex by vertex (slot 3); solving e + ke = 180 vs. the ratio
//    identity (n-2)/2 = k (slot 4); six equilateral triangles vs. the
//    apothem-perimeter formula (slot 5); square-minus-corners vs. the
//    central-square-plus-rectangles-plus-triangles build-up (slot 6); the
//    two-full-spins walking argument vs. tip triangles on the inner
//    pentagon's exterior angles (slot 7); the exterior-angle route vs.
//    solving 180n - 360 = (angle)n directly (slot 8); solving the angle-sum
//    equation vs. re-adding every finished angle (slot 9); reducing
//    n(n-3)/2 = kn to n - 3 = 2k vs. recounting the diagonals of the answer
//    (slot 10); subtracting the covered angles from 360 vs. auditing every
//    candidate's interior angle against the gap (slot 11); counting seven
//    congruent equilateral triangles vs. adding the hexagon and triangle
//    area formulas (slot 12).
//  - Every figure is coordinate-exact: each corner-cut octagon in slot 6 is
//    built from its stated square and legs, each slot 7 star connects five
//    genuinely irregular points in pentagram order, each slot 9 polygon was
//    constructed by turning through the true exterior angles of its labeled
//    interior angles, each slot 11 meeting point carries shapes whose drawn
//    angles match their labels, and each slot 12 composite attaches a true
//    equilateral triangle to a true regular hexagon of the stated side.
//  - Figure labels are plain text: bare numerals, expressions like 4x, and
//    the letters of points.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS.
//  - No two choices inside an item name the same value, and across the base
//    problem and its three variations every one of the four answer positions
//    is used exactly once.

const challenge = [
  // slot 1 — diagonal count given, recover the side count.
  // Lane: 170 -> 20 / 152 -> 19 / 209 -> 22.
  [
    {
      q: 'A metalworker stretches one thin wire between every pair of non-adjacent corners of a convex polygonal frame, using exactly $170$ wires. How many corners does the frame have?',
      choices: ['$17$', '$23$', '$20$', '$40$'],
      answer: 2,
      solution:
        'The wires are the diagonals, so $\\frac{n(n-3)}{2} = 170$, giving $n(n-3) = 340$. Hunt for two numbers exactly $3$ apart with product $340$: $20 \\times 17 = 340$ ✓, so $n = 20$. Check a second, independent way by bracketing: $19$ corners give $\\frac{19 \\times 16}{2} = 152$ wires and $21$ give $\\frac{21 \\times 18}{2} = 189$, so only $n = 20$ lands on $170$ ✓. (The choice $17$ is TAKING THE OTHER FACTOR — the smaller factor is $n - 3$, not $n$; the choice $23$ is ADDING $3$ TO THE LARGER FACTOR, which already is $n$; the choice $40$ is DOUBLING THE SIDE COUNT — the $\\div 2$ in the formula repairs double-counted diagonals, not a halved $n$.)',
    },
    {
      q: 'In a ring-shaped computer lab, every workstation is cabled directly to every workstation that is not beside it, and the electrician installs $152$ cables. The workstations sit at the corners of a convex polygon. How many workstations are there?',
      choices: ['$19$', '$22$', '$16$', '$38$'],
      answer: 0,
      solution:
        'Each cable is a diagonal of the polygon of workstations, so $\\frac{n(n-3)}{2} = 152$ and $n(n-3) = 304$. Two numbers $3$ apart multiplying to $304$: $19 \\times 16 = 304$ ✓, so $n = 19$. Check a second, independent way by bracketing the neighbors: $18$ stations would need $\\frac{18 \\times 15}{2} = 135$ cables and $20$ would need $\\frac{20 \\times 17}{2} = 170$, so $152$ pins the count at exactly $19$ ✓. (The choice $16$ is TAKING THE OTHER FACTOR, which is $n - 3$; the choice $22$ is ADDING $3$ TO THE LARGER FACTOR even though that factor already is $n$; the choice $38$ is DOUBLING THE SIDE COUNT after the factoring is done.)',
    },
    {
      q: 'Rhea announces that her convex polygon has exactly $209$ diagonals, and her count is correct. What kind of polygon does she have — that is, how many sides?',
      choices: ['$19$', '$25$', '$44$', '$22$'],
      answer: 3,
      solution:
        'From $\\frac{n(n-3)}{2} = 209$ we get $n(n-3) = 418$. Factor $418 = 2 \\times 11 \\times 19$, and the only pair of factors exactly $3$ apart is $22 \\times 19 = 418$ ✓, so $n = 22$. Check a second, independent way by bracketing: a $21$-gon has $\\frac{21 \\times 18}{2} = 189$ diagonals and a $23$-gon has $\\frac{23 \\times 20}{2} = 230$, so $209$ belongs to the $22$-gon alone ✓. (The choice $19$ is TAKING THE OTHER FACTOR, the $n - 3$ partner; the choice $25$ is ADDING $3$ TO THE LARGER FACTOR, which already is $n$; the choice $44$ is DOUBLING THE SIDE COUNT — the halving in the formula was for double-counted diagonals.)',
    },
  ],

  // slot 2 — each interior angle of a regular polygon with large n.
  // Lane: 24-gon -> 165 / 15-gon -> 156 / 40-gon -> 171.
  [
    {
      q: 'A commemorative medallion is struck in the shape of a regular $24$-gon. What is the measure of each of its interior angles?',
      choices: ['$15^\\circ$', '$157.5^\\circ$', '$172.5^\\circ$', '$165^\\circ$'],
      answer: 3,
      solution:
        'Fastest through the exterior angle: each is $\\frac{360^\\circ}{24} = 15^\\circ$, so each interior angle is $180^\\circ - 15^\\circ = 165^\\circ$ ✓. Check a second, independent way with the interior formula: $\\frac{(24-2) \\cdot 180^\\circ}{24} = \\frac{3960^\\circ}{24} = 165^\\circ$ ✓ — the two routes must agree, and they do. (The choice $15^\\circ$ is REPORTING THE EXTERIOR ANGLE instead of its partner; the choice $172.5^\\circ$ is USING $n - 1$ TRIANGLES, computing $\\frac{23 \\cdot 180}{24}$; the choice $157.5^\\circ$ is BORROWING THE DIAGONAL FORMULA’S $n - 3$, computing $\\frac{21 \\cdot 180}{24}$.)',
    },
    {
      q: 'The floor of a garden gazebo is a regular $15$-gon. Each interior angle of the floor measures how many degrees?',
      choices: ['$168^\\circ$', '$156^\\circ$', '$24^\\circ$', '$144^\\circ$'],
      answer: 1,
      solution:
        'Each exterior angle of a regular $15$-gon is $\\frac{360^\\circ}{15} = 24^\\circ$, so each interior angle is $180^\\circ - 24^\\circ = 156^\\circ$ ✓. Check a second, independent way from the angle sum: the interior angles total $(15-2) \\cdot 180^\\circ = 2340^\\circ$, and $\\frac{2340^\\circ}{15} = 156^\\circ$ ✓. (The choice $24^\\circ$ is REPORTING THE EXTERIOR ANGLE; the choice $168^\\circ$ is USING $n - 1$ TRIANGLES, computing $\\frac{14 \\cdot 180}{15}$; the choice $144^\\circ$ is BORROWING THE DIAGONAL FORMULA’S $n - 3$, computing $\\frac{12 \\cdot 180}{15}$.)',
    },
    {
      q: 'A drafting template for near-circular curves is cut as a regular $40$-gon. Find the measure of one of its interior angles.',
      choices: ['$9^\\circ$', '$166.5^\\circ$', '$171^\\circ$', '$175.5^\\circ$'],
      answer: 2,
      solution:
        'The forty equal exterior angles split $360^\\circ$, so each is $\\frac{360^\\circ}{40} = 9^\\circ$, and each interior angle is $180^\\circ - 9^\\circ = 171^\\circ$ ✓. Check a second, independent way with the formula: $\\frac{(40-2) \\cdot 180^\\circ}{40} = \\frac{6840^\\circ}{40} = 171^\\circ$ ✓ — with $40$ sides the corners are already within $9^\\circ$ of a straight line, which is why the template hugs a circle so well. (The choice $9^\\circ$ is REPORTING THE EXTERIOR ANGLE; the choice $175.5^\\circ$ is USING $n - 1$ TRIANGLES, $\\frac{39 \\cdot 180}{40}$; the choice $166.5^\\circ$ is BORROWING THE DIAGONAL FORMULA’S $n - 3$, $\\frac{37 \\cdot 180}{40}$.)',
    },
  ],

  // slot 3 — interior angle sum given, two steps to the diagonal count.
  // Lane: 2160 -> 14 -> 77 / 3420 -> 21 -> 189 / 4140 -> 25 -> 275.
  [
    {
      q: 'A stained-glass panel is a convex polygon whose interior angles total $2160^\\circ$. The artist plans to solder one straight brace along every diagonal of the panel. How many braces is that?',
      choices: ['$77$', '$54$', '$91$', '$154$'],
      answer: 0,
      solution:
        'First recover the side count: $(n-2) \\cdot 180 = 2160$ gives $n - 2 = 12$, so $n = 14$. Then the diagonal count is $\\frac{14 \\times 11}{2} = 77$ braces ✓. Check a second, independent way vertex by vertex: each of the $14$ corners sends braces to $14 - 3 = 11$ others, giving $14 \\times 11 = 154$ brace-ends, and every brace owns two ends: $\\frac{154}{2} = 77$ ✓. (The choice $54$ is FORGETTING THE $+2$, taking $n = \\frac{2160}{180} = 12$ and counting a dodecagon’s diagonals; the choice $91$ is COUNTING ALL PAIRS of corners, $\\frac{14 \\times 13}{2}$, sides included; the choice $154$ is SKIPPING THE HALVING and counting every brace twice.)',
    },
    {
      q: 'The corners of a convex polygonal plaza have interior angles adding up to $3420^\\circ$. The city wants a paved footpath joining every pair of non-adjacent corners. How many footpaths must be paved?',
      choices: ['$152$', '$210$', '$378$', '$189$'],
      answer: 3,
      solution:
        'From $(n-2) \\cdot 180 = 3420$ we get $n - 2 = 19$, so the plaza has $n = 21$ corners, and the footpaths are its diagonals: $\\frac{21 \\times 18}{2} = 189$ ✓. Check a second, independent way corner by corner: each corner reaches $21 - 3 = 18$ non-neighbors, so there are $21 \\times 18 = 378$ path-ends, and halving for the two ends of each path gives $189$ ✓. (The choice $152$ is FORGETTING THE $+2$, taking $n = 19$ and computing $\\frac{19 \\times 16}{2}$; the choice $210$ is COUNTING ALL PAIRS, $\\frac{21 \\times 20}{2}$, which sneaks the sides in; the choice $378$ is SKIPPING THE HALVING.)',
    },
    {
      q: 'The interior angles of a convex polygon have a sum of $4140^\\circ$. Determine how many diagonals this polygon has.',
      choices: ['$230$', '$275$', '$300$', '$550$'],
      answer: 1,
      solution:
        'Recover $n$ first: $(n-2) \\cdot 180 = 4140$ gives $n - 2 = 23$, so $n = 25$. Then apply the diagonal formula: $\\frac{25 \\times 22}{2} = 275$ ✓. Check a second, independent way by rebuilding both numbers: a $25$-gon splits into $23$ triangles, and $23 \\cdot 180^\\circ = 4140^\\circ$ ✓ confirms $n$; each vertex sends $22$ diagonals, $25 \\times 22 = 550$ endpoints, and $\\frac{550}{2} = 275$ ✓. (The choice $230$ is FORGETTING THE $+2$, taking $n = 23$ and computing $\\frac{23 \\times 20}{2}$; the choice $300$ is COUNTING ALL PAIRS, $\\frac{25 \\times 24}{2}$; the choice $550$ is SKIPPING THE HALVING.)',
    },
  ],

  // slot 4 — interior angle is k times the exterior angle.
  // Lane: 7x -> 16 / 14x -> 30 / 17x -> 36.
  [
    {
      q: 'At every vertex of a certain regular polygon, the interior angle measures exactly $10$ times the exterior angle. How many sides does the polygon have?',
      choices: ['$11$', '$22$', '$20$', '$16.36$'],
      answer: 1,
      solution:
        'The interior and exterior angles at a vertex lie along a straight line: $e + 10e = 180^\\circ$, so $e = \\frac{180^\\circ}{11}$ and $n = \\frac{360^\\circ}{e} = \\frac{360 \\cdot 11}{180} = 22$ ✓. Check a second, independent way through the ratio identity: $\\frac{\\text{interior}}{\\text{exterior}} = \\frac{(n-2) \\cdot 180 / n}{360 / n} = \\frac{n-2}{2}$, so $\\frac{n-2}{2} = 10$ gives $n = 22$ ✓ — and indeed a regular $22$-gon’s exterior angle is $\\frac{360^\\circ}{22} = \\frac{180^\\circ}{11}$, one eleventh of the straight line its vertex splits ✓. (The choice $11$ is SOLVING $e + 10e = 360$ AND HALVING ALONG THE WAY — the straight-line total belongs here, not the full turn; the choice $20$ is USING $n \\cdot 180$ FOR THE INTERIOR SUM, which turns the ratio into $\\frac{n}{2}$; the choice $16.36$ is REPORTING THE EXTERIOR ANGLE as if it were a side count.)',
    },
    {
      q: 'A plotter draws a regular polygon in which each interior angle comes out $14$ times as large as the exterior angle beside it. How many sides does the plotter draw?',
      choices: ['$15$', '$28$', '$12$', '$30$'],
      answer: 3,
      solution:
        'Partners on a straight line: $e + 14e = 180^\\circ$, so $e = 12^\\circ$ and $n = \\frac{360^\\circ}{12^\\circ} = 30$ ✓. Check a second, independent way with the ratio identity $\\frac{n-2}{2} = 14$: that gives $n - 2 = 28$, so $n = 30$ ✓, and the interior angle of a regular $30$-gon is $\\frac{28 \\cdot 180^\\circ}{30} = 168^\\circ = 14 \\times 12^\\circ$ ✓. (The choice $15$ is SOLVING $e + 14e = 360$ with the full-turn total; the choice $28$ is USING $n \\cdot 180$ FOR THE INTERIOR SUM, faking $\\frac{n}{2} = 14$; the choice $12$ is REPORTING THE EXTERIOR ANGLE.)',
    },
    {
      q: 'In a regular polygon, each interior angle is $17$ times as large as each exterior angle. Find the number of sides.',
      choices: ['$36$', '$18$', '$34$', '$10$'],
      answer: 0,
      solution:
        'Let the exterior angle be $e$: since interior and exterior add to $180^\\circ$, $e + 17e = 180^\\circ$ gives $e = 10^\\circ$, so $n = \\frac{360^\\circ}{10^\\circ} = 36$ ✓. Check a second, independent way from the ratio identity $\\frac{n-2}{2} = 17$: then $n - 2 = 34$ and $n = 36$ ✓ — and the interior angle $\\frac{34 \\cdot 180^\\circ}{36} = 170^\\circ$ is indeed $17 \\times 10^\\circ$ ✓. (The choice $18$ is SOLVING $e + 17e = 360$ with the full-turn total; the choice $34$ is USING $n \\cdot 180$ FOR THE INTERIOR SUM, which drops the $-2$ and halves to $\\frac{n}{2} = 17$; the choice $10$ is REPORTING THE EXTERIOR ANGLE.)',
    },
  ],

  // slot 5 — area of a regular hexagon from its side.
  // Lane: 24 -> 864√3 / 30 -> 1350√3 / 32 -> 1536√3.
  [
    {
      q: 'A public courtyard is paved as one enormous regular hexagon with side length $24$. What is the courtyard’s area?',
      choices: ['$432\\sqrt{3}$', '$1728\\sqrt{3}$', '$864\\sqrt{3}$', '$576\\sqrt{3}$'],
      answer: 2,
      solution:
        'Split the hexagon from its center into $6$ equilateral triangles of side $24$: each has area $\\frac{\\sqrt{3}}{4} \\cdot 24^2 = 144\\sqrt{3}$, so the courtyard covers $6 \\cdot 144\\sqrt{3} = 864\\sqrt{3}$ ✓. Check a second, independent way with the apothem: $a = \\frac{24\\sqrt{3}}{2} = 12\\sqrt{3}$ and the perimeter is $P = 144$, so $\\frac{1}{2} a P = \\frac{1}{2} \\cdot 12\\sqrt{3} \\cdot 144 = 864\\sqrt{3}$ ✓. (The choice $432\\sqrt{3}$ is COUNTING ONLY THREE of the six triangles; the choice $1728\\sqrt{3}$ is DOUBLING, as if the hexagon held twelve triangles; the choice $576\\sqrt{3}$ is DROPPING THE $\\frac{3}{2}$ and computing $s^2\\sqrt{3}$, only four triangles’ worth.)',
    },
    {
      q: 'The floor of a concert pavilion is a regular hexagon whose sides each measure $30$ meters. How many square meters of flooring is that?',
      choices: ['$1350\\sqrt{3}$', '$675\\sqrt{3}$', '$2700\\sqrt{3}$', '$900\\sqrt{3}$'],
      answer: 0,
      solution:
        'Six equilateral triangles of side $30$ tile the floor from the center: each has area $\\frac{\\sqrt{3}}{4} \\cdot 900 = 225\\sqrt{3}$, so the floor is $6 \\cdot 225\\sqrt{3} = 1350\\sqrt{3}$ square meters ✓. Check a second, independent way with the apothem: $a = \\frac{30\\sqrt{3}}{2} = 15\\sqrt{3}$, the perimeter is $180$, and $\\frac{1}{2} \\cdot 15\\sqrt{3} \\cdot 180 = 1350\\sqrt{3}$ ✓. (The choice $675\\sqrt{3}$ is COUNTING ONLY THREE of the six triangles; the choice $2700\\sqrt{3}$ is DOUBLING to twelve triangles; the choice $900\\sqrt{3}$ is DROPPING THE $\\frac{3}{2}$ and taking $s^2\\sqrt{3}$.)',
    },
    {
      q: 'A decorative wall mirror is cut as a regular hexagon with side length $32$. Find the area of the mirror.',
      choices: ['$768\\sqrt{3}$', '$3072\\sqrt{3}$', '$1024\\sqrt{3}$', '$1536\\sqrt{3}$'],
      answer: 3,
      solution:
        'The mirror is six equilateral triangles of side $32$ glued at the center: each has area $\\frac{\\sqrt{3}}{4} \\cdot 1024 = 256\\sqrt{3}$, so the total is $6 \\cdot 256\\sqrt{3} = 1536\\sqrt{3}$ ✓. Check a second, independent way with the apothem-perimeter shortcut: $a = \\frac{32\\sqrt{3}}{2} = 16\\sqrt{3}$, $P = 192$, and $\\frac{1}{2} \\cdot 16\\sqrt{3} \\cdot 192 = 1536\\sqrt{3}$ ✓ — both routes are the same six triangles in disguise. (The choice $768\\sqrt{3}$ is COUNTING ONLY THREE of the six triangles; the choice $3072\\sqrt{3}$ is DOUBLING to twelve; the choice $1024\\sqrt{3}$ is DROPPING THE $\\frac{3}{2}$ and computing $s^2\\sqrt{3}$.)',
    },
  ],

  // slot 6 — corner-cut square becomes an octagon, find its area (figure).
  // Lane: 15, legs 4 -> 193 / 16, legs 5 -> 206 / 13, legs 3 -> 151.
  [
    {
      q: 'A square coaster with side $15$ has each corner sawed off along a right triangle whose legs both measure $4$, leaving the octagon shown. What is the octagon’s area?',
      fig: {
        view: [-1, -1, 16, 16],
        alt: 'Octagon made by cutting right triangles with legs 4 from each corner of a square of side 15',
        elems: [
          { t: 'poly', pts: [[4, 0], [11, 0], [15, 4], [15, 11], [11, 15], [4, 15], [0, 11], [0, 4]], fill: false },
          { t: 'seg', a: [0, 0], b: [4, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [0, 4], dash: true },
          { t: 'seg', a: [15, 0], b: [11, 0], dash: true },
          { t: 'seg', a: [15, 0], b: [15, 4], dash: true },
          { t: 'seg', a: [15, 15], b: [11, 15], dash: true },
          { t: 'seg', a: [15, 15], b: [15, 11], dash: true },
          { t: 'seg', a: [0, 15], b: [4, 15], dash: true },
          { t: 'seg', a: [0, 15], b: [0, 11], dash: true },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [0, 2], text: '4', dx: -12, dy: 0 },
          { t: 'label', p: [7.5, 15], text: '15', dx: 0, dy: -10 },
        ],
      },
      choices: ['$161$', '$193$', '$49$', '$217$'],
      answer: 1,
      solution:
        'Subtract the sawed corners from the square: the square has area $15^2 = 225$, and each corner triangle removes $\\frac{1}{2} \\cdot 4 \\cdot 4 = 8$, so the octagon keeps $225 - 4 \\times 8 = 225 - 32 = 193$ ✓. Check a second, independent way by building up: a central $7 \\times 7$ square ($49$), four $4 \\times 7$ edge rectangles ($112$), and the four corner triangles ($32$) reassemble the octagon: $49 + 112 + 32 = 193$ ✓. (The choice $161$ is TREATING EACH CORNER AS A FULL $4 \\times 4$ SQUARE, removing $64$; the choice $49$ is KEEPING ONLY THE CENTRAL $(15 - 8)^2$ SQUARE; the choice $217$ is USING $\\frac{1}{2} \\cdot 4$ FOR EACH CORNER, dropping the second leg.)',
    },
    {
      q: 'Each corner of a square patio slab of side $16$ is trimmed away along a right triangle with legs of length $5$, producing the octagonal slab shown. What area remains?',
      fig: {
        view: [-1, -1, 17, 17],
        alt: 'Octagon made by cutting right triangles with legs 5 from each corner of a square of side 16',
        elems: [
          { t: 'poly', pts: [[5, 0], [11, 0], [16, 5], [16, 11], [11, 16], [5, 16], [0, 11], [0, 5]], fill: false },
          { t: 'seg', a: [0, 0], b: [5, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [0, 5], dash: true },
          { t: 'seg', a: [16, 0], b: [11, 0], dash: true },
          { t: 'seg', a: [16, 0], b: [16, 5], dash: true },
          { t: 'seg', a: [16, 16], b: [11, 16], dash: true },
          { t: 'seg', a: [16, 16], b: [16, 11], dash: true },
          { t: 'seg', a: [0, 16], b: [5, 16], dash: true },
          { t: 'seg', a: [0, 16], b: [0, 11], dash: true },
          { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [0, 2.5], text: '5', dx: -12, dy: 0 },
          { t: 'label', p: [8, 16], text: '16', dx: 0, dy: -10 },
        ],
      },
      choices: ['$156$', '$36$', '$206$', '$246$'],
      answer: 2,
      solution:
        'Work by subtraction: the square holds $16^2 = 256$, each trimmed corner is $\\frac{1}{2} \\cdot 5 \\cdot 5 = 12.5$, and four corners remove $50$, leaving $256 - 50 = 206$ ✓. Check a second, independent way by reassembly: the central $6 \\times 6$ square gives $36$, the four $5 \\times 6$ edge rectangles give $120$, and the four corner triangles give $50$, so $36 + 120 + 50 = 206$ ✓. (The choice $156$ is TREATING EACH CORNER AS A FULL $5 \\times 5$ SQUARE, removing $100$; the choice $36$ is KEEPING ONLY THE CENTRAL $(16 - 10)^2$ SQUARE; the choice $246$ is USING $\\frac{1}{2} \\cdot 5$ FOR EACH CORNER, dropping the second leg.)',
    },
    {
      q: 'The stop-sign-style badge shown was made by clipping every corner of a square of side $13$ along a right triangle with legs of length $3$. What is the badge’s area?',
      fig: {
        view: [-1, -1, 14, 14],
        alt: 'Octagon made by cutting right triangles with legs 3 from each corner of a square of side 13',
        elems: [
          { t: 'poly', pts: [[3, 0], [10, 0], [13, 3], [13, 10], [10, 13], [3, 13], [0, 10], [0, 3]], fill: false },
          { t: 'seg', a: [0, 0], b: [3, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [0, 3], dash: true },
          { t: 'seg', a: [13, 0], b: [10, 0], dash: true },
          { t: 'seg', a: [13, 0], b: [13, 3], dash: true },
          { t: 'seg', a: [13, 13], b: [10, 13], dash: true },
          { t: 'seg', a: [13, 13], b: [13, 10], dash: true },
          { t: 'seg', a: [0, 13], b: [3, 13], dash: true },
          { t: 'seg', a: [0, 13], b: [0, 10], dash: true },
          { t: 'label', p: [1.5, 0], text: '3', dx: 0, dy: 14 },
          { t: 'label', p: [0, 1.5], text: '3', dx: -12, dy: 0 },
          { t: 'label', p: [6.5, 13], text: '13', dx: 0, dy: -10 },
        ],
      },
      choices: ['$133$', '$49$', '$163$', '$151$'],
      answer: 3,
      solution:
        'Start from the whole square, $13^2 = 169$, and remove the four clipped corners: each is $\\frac{1}{2} \\cdot 3 \\cdot 3 = 4.5$, so $169 - 4 \\times 4.5 = 169 - 18 = 151$ ✓. Check a second, independent way by building the badge from pieces: a central $7 \\times 7$ square ($49$), four $3 \\times 7$ edge rectangles ($84$), and the four corner triangles ($18$) give $49 + 84 + 18 = 151$ ✓. (The choice $133$ is TREATING EACH CORNER AS A FULL $3 \\times 3$ SQUARE, removing $36$; the choice $49$ is KEEPING ONLY THE CENTRAL $(13 - 6)^2$ SQUARE; the choice $163$ is USING $\\frac{1}{2} \\cdot 3$ FOR EACH CORNER, dropping the second leg.)',
    },
  ],

  // slot 7 — the tip angles of ANY five-pointed star sum to 180 (figure).
  // Three genuinely different irregular stars; answer 180 each round.
  [
    {
      q: 'Maya sketches the lopsided five-pointed star shown freehand — no two of its points match. She then measures the angle at every point of the star and adds the five measures. What total must she get?',
      fig: {
        view: [-3.5, -3.2, 4, 3.8],
        alt: 'Irregular five-pointed star drawn with five crossing segments, each point a different size',
        elems: [
          { t: 'seg', a: [0, 3], b: [-2.12, -2.53] },
          { t: 'seg', a: [-2.12, -2.53], b: [3.09, 0.83] },
          { t: 'seg', a: [3.09, 0.83], b: [-2.45, 1.14] },
          { t: 'seg', a: [-2.45, 1.14], b: [1.06, -2.27] },
          { t: 'seg', a: [1.06, -2.27], b: [0, 3] },
        ],
      },
      choices: ['$360^\\circ$', '$540^\\circ$', '$900^\\circ$', '$180^\\circ$'],
      answer: 3,
      solution:
        'Walk once around the star’s outline: you return facing your starting direction after exactly TWO full spins, so the turning totals $720^\\circ$. At each of the $5$ points you turn $180^\\circ$ minus the point’s angle, so $5 \\cdot 180^\\circ - (\\text{tip sum}) = 720^\\circ$, forcing a tip sum of $180^\\circ$ ✓ — however lopsided the sketch. Check a second, independent way with the inner pentagon: each point sits in a triangle whose two base angles are exterior angles of the star’s inner pentagon, and each of those exterior angles serves two point-triangles. So the tips total $5 \\cdot 180^\\circ - 2 \\cdot 360^\\circ = 180^\\circ$ ✓. (The choice $360^\\circ$ is ASSUMING ONE FULL SPIN of turning instead of two; the choice $540^\\circ$ is THE PENTAGON’S INTERIOR SUM, the wrong shape; the choice $900^\\circ$ is STOPPING AT $5 \\cdot 180^\\circ$ without subtracting the turning.)',
    },
    {
      q: 'The five tips $A$, $B$, $C$, $D$, $E$ of the irregular star shown are all different sizes. What is $\\angle A + \\angle B + \\angle C + \\angle D + \\angle E$?',
      fig: {
        view: [-3.2, -3, 3.2, 4.2],
        alt: 'Irregular five-pointed star with tips labeled A, B, C, D, E',
        elems: [
          { t: 'seg', a: [0, 3.5], b: [-2.12, -2.12] },
          { t: 'seg', a: [-2.12, -2.12], b: [2.44, 0.89] },
          { t: 'seg', a: [2.44, 0.89], b: [-2.36, 0.42] },
          { t: 'seg', a: [-2.36, 0.42], b: [2.19, -2.19] },
          { t: 'seg', a: [2.19, -2.19], b: [0, 3.5] },
          { t: 'point', p: [0, 3.5], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [-2.36, 0.42], label: 'B', dx: -12, dy: -6 },
          { t: 'point', p: [-2.12, -2.12], label: 'C', dx: -10, dy: 12 },
          { t: 'point', p: [2.19, -2.19], label: 'D', dx: 10, dy: 12 },
          { t: 'point', p: [2.44, 0.89], label: 'E', dx: 12, dy: -6 },
        ],
      },
      choices: ['$180^\\circ$', '$720^\\circ$', '$360^\\circ$', '$540^\\circ$'],
      answer: 0,
      solution:
        'Trace the outline from $A$ back to $A$: your direction spins around exactly twice, a turning total of $720^\\circ$, and the turn at each tip is $180^\\circ$ minus that tip’s angle. So $5 \\cdot 180^\\circ - (\\angle A + \\angle B + \\angle C + \\angle D + \\angle E) = 720^\\circ$, and the five tips total $900^\\circ - 720^\\circ = 180^\\circ$ ✓. Check a second, independent way through the inner pentagon: every tip triangle’s two base angles are exterior angles of the inner pentagon, and each exterior angle is shared by two tip triangles, so the tip sum is $900^\\circ - 2 \\cdot 360^\\circ = 180^\\circ$ ✓ — unequal tips, equal total. (The choice $720^\\circ$ is REPORTING THE TURNING TOTAL itself; the choice $360^\\circ$ is ASSUMING ONE FULL SPIN; the choice $540^\\circ$ is THE PENTAGON’S INTERIOR SUM.)',
    },
    {
      q: 'Jonah stretches a five-pointed star wide, as shown, and claims the stretching changes the total of its five tip angles. Compute the total for this star and settle the question.',
      fig: {
        view: [-3.8, -4, 3.8, 4],
        alt: 'Wide irregular five-pointed star drawn with five crossing segments',
        elems: [
          { t: 'seg', a: [0.56, 3.15], b: [-2.13, -1.49] },
          { t: 'seg', a: [-2.13, -1.49], b: [2.89, -0.25] },
          { t: 'seg', a: [2.89, -0.25], b: [-2.94, 1.7] },
          { t: 'seg', a: [-2.94, 1.7], b: [0.57, -3.25] },
          { t: 'seg', a: [0.57, -3.25], b: [0.56, 3.15] },
        ],
      },
      choices: ['$540^\\circ$', '$180^\\circ$', '$720^\\circ$', '$900^\\circ$'],
      answer: 1,
      solution:
        'The total is $180^\\circ$, and stretching cannot change it — Jonah is wrong. Walking once around the outline of ANY five-pointed star spins your heading around exactly twice, $720^\\circ$ of turning; since each tip contributes a turn of $180^\\circ$ minus its angle, $5 \\cdot 180^\\circ - (\\text{tip sum}) = 720^\\circ$ and the tip sum is $180^\\circ$ ✓ for the wide star and the narrow one alike. Check a second, independent way with the inner pentagon: the two base angles of each tip triangle are exterior angles of the inner pentagon, each used by two tips, so the sum is $900^\\circ - 2 \\cdot 360^\\circ = 180^\\circ$ ✓ — no measurement of this particular star ever enters the argument. (The choice $540^\\circ$ is THE PENTAGON’S INTERIOR SUM; the choice $720^\\circ$ is REPORTING THE TURNING TOTAL; the choice $900^\\circ$ is STOPPING AT $5 \\cdot 180^\\circ$.)',
    },
  ],

  // slot 8 — interior angle of a regular polygon given, recover n.
  // Lane: 171 -> 40 / 174 -> 60 / 165.6 -> 25.
  [
    {
      q: 'A model-railroad loop is laid as a regular polygon whose interior angle at every joint measures $171^\\circ$. How many straight track pieces make up the loop?',
      choices: ['$40$', '$20$', '$38$', '$21$'],
      answer: 0,
      solution:
        'Cross to the exterior angle: $180^\\circ - 171^\\circ = 9^\\circ$ at each joint, and the exterior angles of the whole loop must total one full spin, $360^\\circ$, so $n = \\frac{360^\\circ}{9^\\circ} = 40$ pieces ✓. Check a second, independent way by solving the interior formula directly: $\\frac{(n-2) \\cdot 180}{n} = 171$ gives $180n - 360 = 171n$, so $9n = 360$ and $n = 40$ ✓. (The choice $20$ is USING $180^\\circ$ FOR THE EXTERIOR TOTAL, half a spin; the choice $38$ is SUBTRACTING $2$ from the answer, a stray import from the triangle count $n - 2$; the choice $21$ is SETTING $n - 2$ EQUAL TO THE RATIO $\\frac{171}{9} = 19$ while forgetting that the ratio equals $\\frac{n-2}{2}$.)',
    },
    {
      q: 'A laser cutter produces a regular polygonal gear blank with interior angles of $174^\\circ$ each. Find the number of sides of the blank.',
      choices: ['$30$', '$58$', '$60$', '$31$'],
      answer: 2,
      solution:
        'The exterior angle at each vertex is $180^\\circ - 174^\\circ = 6^\\circ$, and all of them together make one full spin: $n = \\frac{360^\\circ}{6^\\circ} = 60$ sides ✓. Check a second, independent way with algebra on the interior formula: $180n - 360 = 174n$ gives $6n = 360$, so $n = 60$ ✓ — sixty sides at $174^\\circ$ apiece is why the blank looks nearly circular. (The choice $30$ is USING $180^\\circ$ FOR THE EXTERIOR TOTAL; the choice $58$ is SUBTRACTING $2$, confusing $n$ with the triangle count $n - 2$; the choice $31$ is SETTING $n - 2$ EQUAL TO THE RATIO $\\frac{174}{6} = 29$ and forgetting the ratio is $\\frac{n-2}{2}$.)',
    },
    {
      q: 'Each interior angle of a certain regular polygon measures $165.6^\\circ$. How many sides does the polygon have?',
      choices: ['$23$', '$24$', '$50$', '$25$'],
      answer: 3,
      solution:
        'Go through the exterior angle: $180^\\circ - 165.6^\\circ = 14.4^\\circ$, and the exterior angles always total $360^\\circ$, so $n = \\frac{360^\\circ}{14.4^\\circ} = 25$ ✓. Check a second, independent way by solving $\\frac{(n-2) \\cdot 180}{n} = 165.6$: then $180n - 360 = 165.6n$, so $14.4n = 360$ and $n = 25$ ✓ — and indeed $\\frac{23 \\cdot 180^\\circ}{25} = 165.6^\\circ$ ✓. (The choice $24$ is ROUNDING THE EXTERIOR ANGLE $14.4^\\circ$ up to $15^\\circ$ before dividing; the choice $23$ is SUBTRACTING $2$, mixing in the triangle count; the choice $50$ is USING $720^\\circ$ FOR THE EXTERIOR TOTAL, two spins instead of one.)',
    },
  ],

  // slot 9 — algebraic interior angles, find the largest (figure).
  // Lane: hexagon 18x=720, x=40 -> 160 / pentagon 18x=540, x=30 -> 150 /
  // hexagon 48x=720, x=15 -> 165. Each figure is walked through its true
  // exterior angles, so the drawn corners genuinely measure their labels.
  [
    {
      q: 'The interior angles of the hexagonal garden bed shown measure $x^\\circ$, $2x^\\circ$, $3x^\\circ$, $4x^\\circ$, $4x^\\circ$, and $4x^\\circ$. What is the measure of the bed’s largest angle?',
      fig: {
        view: [-1, -1, 10, 7.3],
        alt: 'Hexagon with interior angles marked x, 4x, 4x, 4x, 3x, and 2x around its boundary',
        elems: [
          { t: 'poly', pts: [[0, 0], [4.6, 0], [6.48, 0.68], [8.01, 1.97], [9.01, 3.7], [7.51, 6.3]], fill: false },
          { t: 'label', p: [0, 0], text: 'x', dx: 24, dy: -6 },
          { t: 'label', p: [4.6, 0], text: '4x', dx: -8, dy: -12 },
          { t: 'label', p: [6.48, 0.68], text: '4x', dx: -12, dy: -8 },
          { t: 'label', p: [8.01, 1.97], text: '4x', dx: -14, dy: -4 },
          { t: 'label', p: [9.01, 3.7], text: '3x', dx: -14, dy: 2 },
          { t: 'label', p: [7.51, 6.3], text: '2x', dx: -2, dy: 18 },
        ],
      },
      choices: ['$40^\\circ$', '$120^\\circ$', '$80^\\circ$', '$160^\\circ$'],
      answer: 3,
      solution:
        'A hexagon’s interior angles total $(6-2) \\cdot 180^\\circ = 720^\\circ$: $x + 2x + 3x + 4x + 4x + 4x = 18x = 720$, so $x = 40$ and the largest angle is $4x = 160^\\circ$ ✓. Check a second, independent way by re-adding the finished angles: $40 + 80 + 120 + 160 + 160 + 160 = 720$ ✓, and no label beats the three $4x$ corners. (The choice $40^\\circ$ is STOPPING AT $x$ itself; the choice $120^\\circ$ is USING THE PENTAGON SUM $540^\\circ$, which fakes $x = 30$ and $4x = 120$; the choice $80^\\circ$ is USING $360^\\circ$, the quadrilateral total, which fakes $x = 20$ and $4x = 80$.)',
    },
    {
      q: 'A five-sided trail marker has interior angles of $2x^\\circ$, $3x^\\circ$, $4x^\\circ$, $5x^\\circ$, and $4x^\\circ$, as marked in the figure. Find the measure of the marker’s largest angle.',
      fig: {
        view: [-1, -1, 6.3, 8.2],
        alt: 'Pentagon with interior angles marked 3x, 4x, 5x, 4x, and 2x around its boundary',
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [5.25, 2.17], [5.25, 4.17], [0, 7.2]], fill: false },
          { t: 'label', p: [0, 0], text: '3x', dx: 16, dy: -10 },
          { t: 'label', p: [4, 0], text: '4x', dx: -14, dy: -10 },
          { t: 'label', p: [5.25, 2.17], text: '5x', dx: -16, dy: -2 },
          { t: 'label', p: [5.25, 4.17], text: '4x', dx: -14, dy: 8 },
          { t: 'label', p: [0, 7.2], text: '2x', dx: 8, dy: 20 },
        ],
      },
      choices: ['$120^\\circ$', '$150^\\circ$', '$30^\\circ$', '$200^\\circ$'],
      answer: 1,
      solution:
        'A pentagon’s interior angles total $(5-2) \\cdot 180^\\circ = 540^\\circ$: $2x + 3x + 4x + 5x + 4x = 18x = 540$, so $x = 30$ and the largest angle is $5x = 150^\\circ$ ✓. Check a second, independent way by re-adding the results: $60 + 90 + 120 + 150 + 120 = 540$ ✓, and the runner-up $4x = 120^\\circ$ trails by $30^\\circ$. (The choice $30^\\circ$ is STOPPING AT $x$; the choice $200^\\circ$ is USING THE HEXAGON SUM $720^\\circ$, which fakes $x = 40$ and $5x = 200$; the choice $120^\\circ$ is THE SECOND-LARGEST angle $4x$.)',
    },
    {
      q: 'The cross-section of a cut gemstone is the hexagon shown, with interior angles of $11x^\\circ$, $10x^\\circ$, $9x^\\circ$, $8x^\\circ$, $6x^\\circ$, and $4x^\\circ$. What is the measure of the cross-section’s largest angle?',
      fig: {
        view: [-1, -1, 6.5, 9.3],
        alt: 'Hexagon with interior angles marked 6x, 9x, 11x, 10x, 8x, and 4x around its boundary',
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [4.41, 1.41], [5.41, 3.15], [5.41, 5.15], [0, 8.27]], fill: false },
          { t: 'label', p: [0, 0], text: '6x', dx: 16, dy: -10 },
          { t: 'label', p: [3, 0], text: '9x', dx: -12, dy: -10 },
          { t: 'label', p: [4.41, 1.41], text: '11x', dx: -18, dy: -6 },
          { t: 'label', p: [5.41, 3.15], text: '10x', dx: -18, dy: 0 },
          { t: 'label', p: [5.41, 5.15], text: '8x', dx: -14, dy: 8 },
          { t: 'label', p: [0, 8.27], text: '4x', dx: 10, dy: 18 },
        ],
      },
      choices: ['$165^\\circ$', '$15^\\circ$', '$150^\\circ$', '$123.75^\\circ$'],
      answer: 0,
      solution:
        'The six angles must total $(6-2) \\cdot 180^\\circ = 720^\\circ$: $11x + 10x + 9x + 8x + 6x + 4x = 48x = 720$, so $x = 15$ and the largest angle is $11x = 165^\\circ$ ✓. Check a second, independent way by re-adding all six finished angles: $165 + 150 + 135 + 120 + 90 + 60 = 720$ ✓, with $10x = 150^\\circ$ a clear second. (The choice $15^\\circ$ is STOPPING AT $x$; the choice $150^\\circ$ is THE SECOND-LARGEST angle $10x$; the choice $123.75^\\circ$ is USING THE PENTAGON SUM $540^\\circ$, which fakes $x = 11.25$ and $11x = 123.75$.)',
    },
  ],

  // slot 10 — diagonals are k times the sides; n - 3 = 2k, so n = 2k + 3.
  // Lane: 4.5x -> 12 / 2.5x -> 8 / 5.5x -> 14.
  [
    {
      q: 'In a certain convex polygon, the diagonals outnumber the sides by a factor of exactly $4.5$. How many sides does the polygon have?',
      choices: ['$9$', '$6$', '$12$', '$24$'],
      answer: 2,
      solution:
        'Translate: $\\frac{n(n-3)}{2} = 4.5n$. Doubling gives $n(n-3) = 9n$, and dividing by the nonzero $n$ leaves $n - 3 = 9$, so $n = 12$ ✓. Check a second, independent way by recounting: a $12$-gon has $\\frac{12 \\times 9}{2} = 54$ diagonals, and $54 = 4.5 \\times 12$ ✓ exactly. (The choice $9$ is STOPPING AT $n - 3$; the choice $6$ is SUBTRACTING $3$ from $9$ instead of adding it; the choice $24$ is DOUBLING THE ANSWER — the doubling already happened to the diagonal count.)',
    },
    {
      q: 'A convex polygon has six and a half times as many diagonals as it has sides. Find its number of sides.',
      choices: ['$16$', '$13$', '$104$', '$32$'],
      answer: 0,
      solution:
        'Set up $\\frac{n(n-3)}{2} = 6.5n$: doubling gives $n(n-3) = 13n$, and dividing by $n$ leaves $n - 3 = 13$, so $n = 16$ ✓. Check a second, independent way by recounting a $16$-gon’s diagonals: $\\frac{16 \\times 13}{2} = 104$, and $104 = 6.5 \\times 16$ ✓. (The choice $13$ is STOPPING AT $n - 3$; the choice $104$ is REPORTING THE DIAGONAL COUNT instead of the side count; the choice $32$ is DOUBLING THE ANSWER after the equation is solved.)',
    },
    {
      q: 'For a certain convex polygon, the number of diagonals is exactly $5.5$ times the number of sides. How many sides does the polygon have?',
      choices: ['$11$', '$14$', '$8$', '$77$'],
      answer: 1,
      solution:
        'From $\\frac{n(n-3)}{2} = 5.5n$, doubling gives $n(n-3) = 11n$, so $n - 3 = 11$ and $n = 14$ ✓. Check a second, independent way by recounting: a $14$-gon has $\\frac{14 \\times 11}{2} = 77$ diagonals, and $77 = 5.5 \\times 14$ ✓ on the nose. (The choice $11$ is STOPPING AT $n - 3$; the choice $8$ is SUBTRACTING $3$ from $11$ instead of adding it; the choice $77$ is REPORTING THE DIAGONAL COUNT instead of the side count.)',
    },
  ],

  // slot 11 — polygons meeting at a point, name the regular polygon that
  // closes the gap (figure). Lane: 240 -> hexagon / 270 -> square /
  // 240 -> hexagon.
  [
    {
      q: 'At point $P$ in the figure, a regular hexagon and two equilateral triangles fit together without overlapping. One more regular polygon can close the remaining gap at $P$ exactly. Which one?',
      fig: {
        view: [-3, -2.4, 4, 4],
        alt: 'A regular hexagon and two equilateral triangles sharing point P, with a gap remaining below',
        elems: [
          { t: 'poly', pts: [[0, 0], [2, 0], [3, 1.73], [2, 3.46], [0, 3.46], [-1, 1.73]], fill: false },
          { t: 'poly', pts: [[0, 0], [-1, 1.73], [-2, 0]], fill: false },
          { t: 'poly', pts: [[0, 0], [-2, 0], [-1, -1.73]], fill: false },
          { t: 'angle', at: [0, 0], from: [2, 0], to: [-1, 1.73], r: 0.55, label: '120' },
          { t: 'angle', at: [0, 0], from: [-1, 1.73], to: [-2, 0], r: 0.8, label: '60' },
          { t: 'angle', at: [0, 0], from: [-2, 0], to: [-1, -1.73], r: 1.05, label: '60' },
          { t: 'point', p: [0, 0], label: 'P', dx: 14, dy: 12 },
          { t: 'label', p: [0.9, -1.3], text: '?', dx: 0, dy: 0 },
        ],
      },
      choices: ['a regular hexagon', 'an equilateral triangle', 'a square', 'a regular pentagon'],
      answer: 0,
      solution:
        'Add up what is already there: the hexagon contributes $120^\\circ$ at $P$ and each triangle $60^\\circ$, for $120 + 60 + 60 = 240^\\circ$. The gap is $360^\\circ - 240^\\circ = 120^\\circ$ — exactly one more regular hexagon’s corner ✓. Check a second, independent way by auditing every candidate: the hexagon’s interior angle is $\\frac{4 \\cdot 180^\\circ}{6} = 120^\\circ$ ✓, while the EQUILATERAL TRIANGLE’S $60^\\circ$ fills only half the gap, the SQUARE’S $90^\\circ$ leaves a $30^\\circ$ sliver, and the REGULAR PENTAGON’S $108^\\circ$ leaves $12^\\circ$ uncovered — only the hexagon closes the point snugly.',
    },
    {
      q: 'A tile pattern brings a regular dodecagon and a regular hexagon together at point $P$, as shown. Which regular polygon fills the leftover gap at $P$ exactly?',
      fig: {
        view: [-3.9, -3.4, 5.2, 7.9],
        alt: 'A regular dodecagon and a regular hexagon sharing point P, with a gap remaining at lower right',
        elems: [
          { t: 'poly', pts: [[0, 0], [2, 0], [3.73, 1], [4.73, 2.73], [4.73, 4.73], [3.73, 6.46], [2, 7.46], [0, 7.46], [-1.73, 6.46], [-2.73, 4.73], [-2.73, 2.73], [-1.73, 1]], fill: false },
          { t: 'poly', pts: [[0, 0], [-1.73, 1], [-3.46, 0], [-3.46, -2], [-1.73, -3], [0, -2]], fill: false },
          { t: 'angle', at: [0, 0], from: [2, 0], to: [-1.73, 1], r: 0.55, label: '150' },
          { t: 'angle', at: [0, 0], from: [-1.73, 1], to: [0, -2], r: 0.85, label: '120' },
          { t: 'point', p: [0, 0], label: 'P', dx: 14, dy: -8 },
          { t: 'label', p: [1.1, -1.1], text: '?', dx: 0, dy: 0 },
        ],
      },
      choices: ['a regular hexagon', 'an equilateral triangle', 'a regular octagon', 'a square'],
      answer: 3,
      solution:
        'The dodecagon’s interior angle is $180^\\circ - \\frac{360^\\circ}{12} = 150^\\circ$ and the hexagon’s is $120^\\circ$, so together they cover $270^\\circ$ at $P$, leaving $360^\\circ - 270^\\circ = 90^\\circ$ — precisely a square’s corner ✓. Check a second, independent way by testing each candidate against the $90^\\circ$ gap: the square’s $\\frac{2 \\cdot 180^\\circ}{4} = 90^\\circ$ fits exactly ✓, while a REGULAR HEXAGON’S $120^\\circ$ would overlap by $30^\\circ$, an EQUILATERAL TRIANGLE’S $60^\\circ$ would leave $30^\\circ$ open, and a REGULAR OCTAGON’S $135^\\circ$ would overlap by $45^\\circ$.',
    },
    {
      q: 'A regular octagon and a square share the point $P$ shown, with no overlaps. What single regular polygon would exactly plug the gap that remains around $P$?',
      fig: {
        view: [-5.2, -2.3, 2.6, 3.8],
        alt: 'A regular octagon and a square sharing point P, with a gap remaining below',
        elems: [
          { t: 'poly', pts: [[0, 0], [2, 0], [2, 2], [0, 2]], fill: false },
          { t: 'poly', pts: [[0, 0], [0, 2], [-1.414, 3.414], [-3.414, 3.414], [-4.828, 2], [-4.828, 0], [-3.414, -1.414], [-1.414, -1.414]], fill: false },
          { t: 'angle', at: [0, 0], from: [2, 0], to: [0, 2], r: 0.5, label: '90' },
          { t: 'angle', at: [0, 0], from: [0, 2], to: [-1.414, -1.414], r: 0.8, label: '135' },
          { t: 'point', p: [0, 0], label: 'P', dx: 12, dy: -10 },
          { t: 'label', p: [0.4, -1.4], text: '?', dx: 0, dy: 0 },
        ],
      },
      choices: ['a square', 'a regular pentagon', 'a regular octagon', 'a regular hexagon'],
      answer: 2,
      solution:
        'The angles already at $P$: the square’s corner at $90^\\circ$ and the octagon’s interior angle of $135^\\circ$, totaling $225^\\circ$. The gap is $360^\\circ - 225^\\circ = 135^\\circ$ — exactly the interior angle of another regular octagon ✓, which is why squares and octagons tile bathroom floors together: each meeting point hosts one square and two octagons, $90^\\circ + 135^\\circ + 135^\\circ = 360^\\circ$ ✓. Check a second, independent way by auditing the candidates against $135^\\circ$: the regular octagon’s $\\frac{6 \\cdot 180^\\circ}{8} = 135^\\circ$ matches ✓, while a SQUARE’S $90^\\circ$ leaves $45^\\circ$ open, a REGULAR PENTAGON’S $108^\\circ$ leaves a $27^\\circ$ crack, and a REGULAR HEXAGON’S $120^\\circ$ falls $15^\\circ$ short.',
    },
  ],

  // slot 12 — regular hexagon plus an equilateral triangle on one side,
  // total area (figure). Lane: 6 -> 63√3 / 8 -> 112√3 / 10 -> 175√3.
  [
    {
      q: 'A patio stone is a regular hexagon with side $6$, and a matching equilateral-triangle stone with side $6$ is mortared flush against one of its sides, as shown, forming a single paved shape. What is the combined area?',
      fig: {
        view: [-7, -6.2, 10, 6.2],
        alt: 'Regular hexagon of side 6 with an equilateral triangle of side 6 attached to its upper right side',
        elems: [
          { t: 'poly', pts: [[6, 0], [3, 5.2], [-3, 5.2], [-6, 0], [-3, -5.2], [3, -5.2]], fill: false },
          { t: 'poly', pts: [[6, 0], [3, 5.2], [9, 5.2]], fill: false },
          { t: 'label', p: [0, -5.2], text: '6', dx: 0, dy: 14 },
        ],
      },
      choices: ['$54\\sqrt{3}$', '$63\\sqrt{3}$', '$72\\sqrt{3}$', '$45\\sqrt{3}$'],
      answer: 1,
      solution:
        'The hexagon is six equilateral triangles of side $6$, and the mortared stone makes a seventh. Each has area $\\frac{\\sqrt{3}}{4} \\cdot 36 = 9\\sqrt{3}$, so the paved shape covers $7 \\cdot 9\\sqrt{3} = 63\\sqrt{3}$ ✓. Check a second, independent way by adding the two formulas: $\\frac{3\\sqrt{3}}{2} \\cdot 36 + \\frac{\\sqrt{3}}{4} \\cdot 36 = 54\\sqrt{3} + 9\\sqrt{3} = 63\\sqrt{3}$ ✓. (The choice $54\\sqrt{3}$ is FORGETTING THE TRIANGLE and pricing the hexagon alone; the choice $72\\sqrt{3}$ is COUNTING THE TRIANGLE TWICE, eight triangles instead of seven; the choice $45\\sqrt{3}$ is SUBTRACTING THE TRIANGLE instead of adding it.)',
    },
    {
      q: 'The pendant shown is cut from brass as a regular hexagon of side $8$ with an equilateral triangle of side $8$ attached along its bottom edge. Find the pendant’s total area.',
      fig: {
        view: [-9, -15, 9, 8],
        alt: 'Regular hexagon of side 8 with an equilateral triangle of side 8 attached below its bottom side',
        elems: [
          { t: 'poly', pts: [[8, 0], [4, 6.93], [-4, 6.93], [-8, 0], [-4, -6.93], [4, -6.93]], fill: false },
          { t: 'poly', pts: [[-4, -6.93], [4, -6.93], [0, -13.86]], fill: false },
          { t: 'label', p: [0, 6.93], text: '8', dx: 0, dy: -10 },
        ],
      },
      choices: ['$96\\sqrt{3}$', '$128\\sqrt{3}$', '$112\\sqrt{3}$', '$80\\sqrt{3}$'],
      answer: 2,
      solution:
        'Count in equilateral triangles of side $8$: the hexagon holds six of them and the attached point is a seventh, each of area $\\frac{\\sqrt{3}}{4} \\cdot 64 = 16\\sqrt{3}$, so the pendant is $7 \\cdot 16\\sqrt{3} = 112\\sqrt{3}$ ✓. Check a second, independent way with the two area formulas: $\\frac{3\\sqrt{3}}{2} \\cdot 64 + \\frac{\\sqrt{3}}{4} \\cdot 64 = 96\\sqrt{3} + 16\\sqrt{3} = 112\\sqrt{3}$ ✓. (The choice $96\\sqrt{3}$ is FORGETTING THE TRIANGLE; the choice $128\\sqrt{3}$ is COUNTING THE TRIANGLE TWICE, making eight; the choice $80\\sqrt{3}$ is SUBTRACTING THE TRIANGLE instead of adding it.)',
    },
    {
      q: 'A tabletop is built from a regular hexagonal board with side $10$ plus an equilateral triangular leaf of side $10$ fastened along one edge, as shown. What is the area of the whole tabletop?',
      fig: {
        view: [-11, -9.8, 16, 9.8],
        alt: 'Regular hexagon of side 10 with an equilateral triangle of side 10 attached to its lower right side',
        elems: [
          { t: 'poly', pts: [[10, 0], [5, 8.66], [-5, 8.66], [-10, 0], [-5, -8.66], [5, -8.66]], fill: false },
          { t: 'poly', pts: [[10, 0], [5, -8.66], [15, -8.66]], fill: false },
          { t: 'label', p: [0, 8.66], text: '10', dx: 0, dy: -10 },
        ],
      },
      choices: ['$175\\sqrt{3}$', '$150\\sqrt{3}$', '$125\\sqrt{3}$', '$200\\sqrt{3}$'],
      answer: 0,
      solution:
        'Seeing the hexagon as six equilateral triangles of side $10$ makes the leaf a seventh: each has area $\\frac{\\sqrt{3}}{4} \\cdot 100 = 25\\sqrt{3}$, so the tabletop totals $7 \\cdot 25\\sqrt{3} = 175\\sqrt{3}$ ✓. Check a second, independent way by summing the formulas: $\\frac{3\\sqrt{3}}{2} \\cdot 100 + \\frac{\\sqrt{3}}{4} \\cdot 100 = 150\\sqrt{3} + 25\\sqrt{3} = 175\\sqrt{3}$ ✓ — turning the hexagon into triangle-counting reduces the whole problem to $7 \\times 25\\sqrt{3}$. (The choice $150\\sqrt{3}$ is FORGETTING THE LEAF and reporting the hexagonal board alone; the choice $200\\sqrt{3}$ is COUNTING THE LEAF TWICE; the choice $125\\sqrt{3}$ is SUBTRACTING THE LEAF instead of adding it.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 9,
  challenge,
}
