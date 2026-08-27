// Introduction to Geometry chapter 9 — variations for section 9.4 (Polygon Problems).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed value was worked twice by routes that do not share arithmetic:
//    the 360-degree divisibility test against the 60/90/120 classification, a
//    straight subtraction from 360 against a candidate-by-candidate angle fit,
//    the exterior-partner quotient against algebra on the interior sum, the
//    per-vertex diagonal formula against all-pairs-minus-sides, computed areas
//    against unit-triangle counting, and a star's turning count against the
//    inscribed-angle theorem. Both routes must agree before a key is written.
//  - Regular polygons and stars are drawn on circumscribed circles, so every
//    marked angle is what its label claims (checked numerically from the
//    rounded coordinates, all within a degree). The slot-6 hexagons were
//    solved from their stated exterior angles by closing the side vectors,
//    and each exterior angle is drawn against a genuinely extended side.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution.

const s94 = [
  // s1 — which single regular polygon tiles the plane.
  [
    {
      q: 'A potter is covering a kitchen backsplash edge to edge with identical tiles, all copies of one regular polygon. Which of these shapes can do the job with no gaps and no overlaps?',
      choices: ['a regular pentagon', 'a regular octagon', 'a square', 'a regular decagon'],
      answer: 2,
      solution:
        'Around every point where tile corners meet, whole copies of the interior angle must complete exactly $360^\\circ$ — so the interior angle must divide $360^\\circ$ evenly. The square’s $90^\\circ$ does: $\\frac{360^\\circ}{90^\\circ} = 4$ tiles meet at each point ✓. Check a second, independent way by classification: for $n > 6$ a regular polygon’s interior angle sits strictly between $120^\\circ$ and $180^\\circ$, so it can never divide $360^\\circ$; the only interior angles that work at all are $60^\\circ$, $90^\\circ$, and $120^\\circ$, and among these choices only the square carries one of them ✓. (The choice "a regular pentagon" FAILS THE DIVISIBILITY TEST, since $\\frac{360}{108}$ is not a whole number ✗; "a regular octagon" FAILS IT TOO, $\\frac{360}{135}$ is not whole ✗; "a regular decagon" FAILS IT AS WELL, $\\frac{360}{144} = 2.5$ ✗.)',
    },
    {
      q: 'A quilter wants to sew a blanket entirely from identical patches, each one the same regular polygon, fitted together with no gaps or overlaps anywhere. Which of these patch shapes works?',
      choices: ['an equilateral triangle', 'a regular pentagon', 'a regular heptagon', 'a regular nonagon'],
      answer: 0,
      solution:
        'The patches meeting at a point must fill exactly $360^\\circ$, so the interior angle has to divide $360^\\circ$ evenly. The equilateral triangle’s $60^\\circ$ does: $\\frac{360^\\circ}{60^\\circ} = 6$ patches meet at every point ✓. Check a second, independent way by classification: the only regular-polygon interior angles that divide $360^\\circ$ are $60^\\circ$, $90^\\circ$, and $120^\\circ$, because every regular polygon beyond the hexagon has an angle strictly between $120^\\circ$ and $180^\\circ$; only the triangle here carries one of the three ✓. (The choice "a regular pentagon" FAILS THE DIVISIBILITY TEST, $\\frac{360}{108}$ is not whole ✗; "a regular heptagon" FAILS IT, its angle $\\frac{900^\\circ}{7}$ is not even a whole degree ✗; "a regular nonagon" FAILS IT, $\\frac{360}{140} = \\frac{18}{7}$ ✗.)',
    },
    {
      q: 'A game designer is stamping a tabletop battle map out of identical cells, each cell one regular polygon, covering the board completely with no gaps or overlaps. Which of these cell shapes can she use?',
      choices: ['a regular pentagon', 'a regular decagon', 'a regular nonagon', 'a regular hexagon'],
      answer: 3,
      solution:
        'Wherever cell corners meet, whole copies of the interior angle must total exactly $360^\\circ$, so the angle must divide $360^\\circ$. The regular hexagon’s $120^\\circ$ does: $\\frac{360^\\circ}{120^\\circ} = 3$ cells meet at every point of the finished map ✓. Check a second, independent way by classification: only $60^\\circ$, $90^\\circ$, and $120^\\circ$ divide $360^\\circ$ among regular-polygon angles, since past the hexagon the interior angle is trapped strictly between $120^\\circ$ and $180^\\circ$; the hexagon is the only choice carrying one of the three ✓. (The choice "a regular pentagon" FAILS THE DIVISIBILITY TEST, $\\frac{360}{108}$ is not whole ✗; "a regular decagon" FAILS IT, $\\frac{360}{144} = 2.5$ ✗; "a regular nonagon" FAILS IT, $\\frac{360}{140} = \\frac{18}{7}$ ✗.)',
    },
  ],
  // s2 — how many tiles meet at a point of a tiling.
  [
    {
      q: 'A shower wall is tiled with congruent square tiles, part of the pattern shown. How many squares meet at the marked point $P$?',
      fig: {
        view: [-2.4, -2.4, 2.4, 2.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [2, 0], [2, 2], [0, 2]], fill: false },
          { t: 'poly', pts: [[0, 0], [0, 2], [-2, 2], [-2, 0]], fill: false },
          { t: 'poly', pts: [[0, 0], [-2, 0], [-2, -2], [0, -2]], fill: false },
          { t: 'poly', pts: [[0, 0], [0, -2], [2, -2], [2, 0]], fill: false },
          { t: 'point', p: [0, 0], label: 'P', dx: 12, dy: -10 },
        ],
      },
      choices: ['$2$', '$4$', '$3$', '$6$'],
      answer: 1,
      solution:
        'The angles around $P$ must total $360^\\circ$, and each square contributes one $90^\\circ$ corner: $\\frac{360^\\circ}{90^\\circ} = 4$ squares ✓. Check a second, independent way by counting in the figure: one square in each of the four quadrants around $P$ — four ✓. (The choice $2$ USES A STRAIGHT ANGLE, $\\frac{180^\\circ}{90^\\circ}$, but a full surround is $360^\\circ$ ✗; $3$ BORROWS THE HEXAGON TILING’S COUNT ✗; $6$ BORROWS THE TRIANGLE TILING’S COUNT ✗.)',
    },
    {
      q: 'A mosaic tabletop is built from congruent equilateral-triangle glass chips, and part of the pattern around one point $P$ is shown. How many triangles meet at $P$?',
      fig: {
        view: [-2.4, -2.2, 2.4, 2.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [2, 0], [1, 1.73]], fill: false },
          { t: 'poly', pts: [[0, 0], [1, 1.73], [-1, 1.73]], fill: false },
          { t: 'poly', pts: [[0, 0], [-1, 1.73], [-2, 0]], fill: false },
          { t: 'poly', pts: [[0, 0], [-2, 0], [-1, -1.73]], fill: false },
          { t: 'poly', pts: [[0, 0], [-1, -1.73], [1, -1.73]], fill: false },
          { t: 'poly', pts: [[0, 0], [1, -1.73], [2, 0]], fill: false },
          { t: 'point', p: [0, 0], label: 'P', dx: 12, dy: -10 },
        ],
      },
      choices: ['$6$', '$3$', '$4$', '$12$'],
      answer: 0,
      solution:
        'Each chip plants one $60^\\circ$ corner at $P$, and the corners there must complete $360^\\circ$: $\\frac{360^\\circ}{60^\\circ} = 6$ triangles ✓. Check a second, independent way by counting the fan in the figure: six chips ring the point ✓. (The choice $3$ USES A STRAIGHT ANGLE, $\\frac{180^\\circ}{60^\\circ}$ ✗; $4$ BORROWS THE SQUARE TILING’S COUNT ✗; $12$ CHARGES TWO FULL TURNS, $\\frac{720^\\circ}{60^\\circ}$ ✗.)',
    },
    {
      q: 'A bathroom floor uses the classic pattern of regular octagons with small squares between them; part of it is shown. How many tiles meet at the marked point $P$?',
      fig: {
        view: [-5.2, -3.2, 5.2, 3.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [0, 2], [-1.41, 3.41], [-3.41, 3.41], [-4.83, 2], [-4.83, 0], [-3.41, -1.41], [-1.41, -1.41]], fill: false },
          { t: 'poly', pts: [[0, 0], [0, 2], [1.41, 3.41], [3.41, 3.41], [4.83, 2], [4.83, 0], [3.41, -1.41], [1.41, -1.41]], fill: false },
          { t: 'poly', pts: [[0, 0], [1.41, -1.41], [0, -2.82], [-1.41, -1.41]], fill: false },
          { t: 'point', p: [0, 0], label: 'P', dx: 16, dy: -4 },
        ],
      },
      choices: ['$4$', '$2$', '$8$', '$3$'],
      answer: 3,
      solution:
        'At $P$ the tiles’ corners must total $360^\\circ$. Each regular octagon contributes $135^\\circ$ and the square contributes $90^\\circ$: $135^\\circ + 135^\\circ + 90^\\circ = 360^\\circ$, so exactly three tiles meet — two octagons and one square ✓. Check a second, independent way in the figure: count the tiles touching $P$, and note that no fourth tile could squeeze in, since the three already close the full turn ✓. (The choice $4$ ASSUMES THE SQUARE-GRID COUNT of four ✗; $2$ COUNTS ONLY THE OCTAGONS and misses the square below ✗; $8$ DIVIDES BY THE OCTAGON’S EXTERIOR ANGLE, $\\frac{360^\\circ}{45^\\circ}$ ✗.)',
    },
  ],
  // s3 — which regular polygon fills the leftover gap at a point.
  [
    {
      q: 'In a patio corner, a regular hexagonal paver and two square pavers meet at point $P$ with no overlap, as shown. One more regular polygon fills the remaining gap at $P$ exactly. What is it?',
      fig: {
        view: [-3.8, -3.1, 2.5, 3.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [2, 0], [2, 2], [0, 2]], fill: false },
          { t: 'poly', pts: [[0, 0], [0, 2], [-1.73, 3], [-3.46, 2], [-3.46, 0], [-1.73, -1]], fill: false },
          { t: 'poly', pts: [[0, 0], [-1.73, -1], [-0.73, -2.73], [1, -1.73]], fill: false },
          { t: 'angle', at: [0, 0], from: [2, 0], to: [0, 2], r: 0.7, label: '90' },
          { t: 'angle', at: [0, 0], from: [0, 2], to: [-1.73, -1], r: 0.85, label: '120' },
          { t: 'angle', at: [0, 0], from: [-1.73, -1], to: [1, -1.73], r: 0.7, label: '90' },
          { t: 'label', p: [1.21, -0.7], text: '?', dx: 0, dy: 0 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: -8 },
        ],
      },
      choices: ['an equilateral triangle', 'a square', 'a regular hexagon', 'a regular pentagon'],
      answer: 0,
      solution:
        'The angles at $P$ must complete $360^\\circ$, and the three pavers already cover $120^\\circ + 90^\\circ + 90^\\circ = 300^\\circ$, leaving a $360^\\circ - 300^\\circ = 60^\\circ$ gap — exactly an equilateral triangle’s corner ✓. Check a second, independent way by testing each candidate against the gap: only $60^\\circ$ closes it, since $300^\\circ + 60^\\circ = 360^\\circ$ on the nose ✓. (The choice "a square" TRIES TO FIT $90^\\circ$ INTO A $60^\\circ$ GAP, an overlap of $30^\\circ$ ✗; "a regular hexagon" OVERSHOOTS BY $60^\\circ$ with its $120^\\circ$ corner ✗; "a regular pentagon" OVERSHOOTS BY $48^\\circ$ with its $108^\\circ$ corner ✗.)',
    },
    {
      q: 'Two panes of a stained-glass window — one square, one a regular hexagon — meet at point $P$, as shown. The artist wants a third regular polygon to fill the rest of the angle at $P$ exactly. Which polygon does the job?',
      fig: {
        view: [-3.8, -1.8, 2.5, 3.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [2, 0], [2, 2], [0, 2]], fill: false },
          { t: 'poly', pts: [[0, 0], [0, 2], [-1.73, 3], [-3.46, 2], [-3.46, 0], [-1.73, -1]], fill: false },
          { t: 'angle', at: [0, 0], from: [2, 0], to: [0, 2], r: 0.7, label: '90' },
          { t: 'angle', at: [0, 0], from: [0, 2], to: [-1.73, -1], r: 0.85, label: '120' },
          { t: 'label', p: [0.36, -1.35], text: '?', dx: 0, dy: 0 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: -8 },
        ],
      },
      choices: ['a regular hexagon', 'a regular decagon', 'a regular dodecagon', 'a regular pentagon'],
      answer: 2,
      solution:
        'The square and hexagon cover $90^\\circ + 120^\\circ = 210^\\circ$ at $P$, leaving $360^\\circ - 210^\\circ = 150^\\circ$. A regular dodecagon’s interior angle is $180^\\circ - \\frac{360^\\circ}{12} = 150^\\circ$ — a perfect fit ✓. Check a second, independent way by recomputing the dodecagon’s angle from the sum formula, $\\frac{(12 - 2) \\cdot 180^\\circ}{12} = \\frac{1800^\\circ}{12} = 150^\\circ$, and testing the others against the gap: the decagon’s $144^\\circ$ leaves a $6^\\circ$ sliver, the hexagon’s $120^\\circ$ leaves $30^\\circ$, the pentagon’s $108^\\circ$ leaves $42^\\circ$ ✓. (The choice "a regular decagon" UNDERSHOOTS THE GAP by $6^\\circ$ ✗; "a regular hexagon" UNDERSHOOTS by $30^\\circ$ ✗; "a regular pentagon" UNDERSHOOTS by $42^\\circ$ ✗.)',
    },
    {
      q: 'On a parquet sample board, a regular hexagon, a square, and an equilateral triangle share point $P$ with no overlaps, as shown. A fourth regular polygon completes the angle at $P$ exactly. What is it?',
      fig: {
        view: [-3.8, -3.1, 2.5, 3.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [0, 2], [-1.73, 3], [-3.46, 2], [-3.46, 0], [-1.73, -1]], fill: false },
          { t: 'poly', pts: [[0, 0], [-1.73, -1], [-0.73, -2.73], [1, -1.73]], fill: false },
          { t: 'poly', pts: [[0, 0], [1, -1.73], [2, 0]], fill: false },
          { t: 'angle', at: [0, 0], from: [0, 2], to: [-1.73, -1], r: 0.85, label: '120' },
          { t: 'angle', at: [0, 0], from: [-1.73, -1], to: [1, -1.73], r: 0.7, label: '90' },
          { t: 'angle', at: [0, 0], from: [1, -1.73], to: [2, 0], r: 0.55, label: '60' },
          { t: 'label', p: [1, 1], text: '?', dx: 0, dy: 0 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: -8 },
        ],
      },
      choices: ['an equilateral triangle', 'a square', 'a regular octagon', 'a regular pentagon'],
      answer: 1,
      solution:
        'The three pieces cover $120^\\circ + 90^\\circ + 60^\\circ = 270^\\circ$ at $P$, leaving $360^\\circ - 270^\\circ = 90^\\circ$ — exactly a square’s corner, so a second square finishes the point ✓. Check a second, independent way by fitting each candidate into the gap: only $90^\\circ$ lands on $270^\\circ + 90^\\circ = 360^\\circ$ exactly ✓. (The choice "an equilateral triangle" UNDERSHOOTS THE GAP by $30^\\circ$ with its $60^\\circ$ corner ✗; "a regular octagon" OVERSHOOTS BY $45^\\circ$ with its $135^\\circ$ corner ✗; "a regular pentagon" OVERSHOOTS BY $18^\\circ$ with its $108^\\circ$ corner ✗.)',
    },
  ],
  // s4 — equal perimeters, find one side.
  [
    {
      q: 'A gardener edges two flower beds with the same length of timber border: one bed is a regular pentagon and the other is a square, and each uses $80$ feet of border. How long is one side of the pentagonal bed?',
      choices: ['$20$', '$16$', '$8$', '$10$'],
      answer: 1,
      solution:
        'A regular pentagon splits its perimeter into $5$ equal sides, so each side is $\\frac{80}{5} = 16$ feet ✓. Check a second, independent way through the square: the square’s side is $\\frac{80}{4} = 20$, and with one more side to share the same total, the pentagon’s side must be $\\frac{4}{5}$ of that: $\\frac{4}{5} \\cdot 20 = 16$ ✓. Rebuild: $5 \\times 16 = 80$ ✓. (The choice $20$ SOLVES FOR THE SQUARE’S SIDE ✗; $8$ SPLITS THE $80$ BETWEEN THE TWO BEDS first, $\\frac{40}{5}$ ✗; $10$ SPLITS THE $80$ AND DIVIDES BY FOUR, $\\frac{40}{4}$ ✗.)',
    },
    {
      q: 'A jeweler bends two wire frames from equal lengths of wire — one a regular hexagon, the other a square — each with perimeter $126$ millimeters. Find the side length of the hexagonal frame.',
      choices: ['$25.2$', '$31.5$', '$21$', '$12.6$'],
      answer: 2,
      solution:
        'The regular hexagon shares its $126$ millimeters equally among $6$ sides: $\\frac{126}{6} = 21$ millimeters ✓. Check a second, independent way through the square: its side is $\\frac{126}{4} = 31.5$, and the hexagon’s side must be $\\frac{4}{6} = \\frac{2}{3}$ of that to keep the totals equal: $\\frac{2}{3} \\cdot 31.5 = 21$ ✓. Rebuild: $6 \\times 21 = 126$ ✓. (The choice $25.2$ DIVIDES BY FIVE, miscounting the hexagon as a pentagon ✗; $31.5$ SOLVES FOR THE SQUARE’S SIDE ✗; $12.6$ DIVIDES BY THE COMBINED SIDE COUNT, $\\frac{126}{10}$ ✗.)',
    },
    {
      q: 'A farmer builds two animal pens, one a regular pentagon and one a square, and each pen uses a full $90$-meter roll of fencing. What is the side length of the pentagonal pen?',
      choices: ['$22.5$', '$10$', '$9$', '$18$'],
      answer: 3,
      solution:
        'The pentagonal pen spreads its $90$ meters over $5$ equal sides: $\\frac{90}{5} = 18$ meters ✓. Check a second, independent way through the square: its side is $\\frac{90}{4} = 22.5$, and the pentagon’s side is $\\frac{4}{5}$ of that: $\\frac{4}{5} \\cdot 22.5 = 18$ ✓. Rebuild: $5 \\times 18 = 90$ ✓. (The choice $22.5$ SOLVES FOR THE SQUARE’S SIDE ✗; $10$ DIVIDES BY THE COMBINED SIDE COUNT, $\\frac{90}{9}$ ✗; $9$ SPLITS THE FENCING BETWEEN THE PENS first, $\\frac{45}{5}$ ✗.)',
    },
  ],
  // s5 — tip angle of a regular star.
  [
    {
      q: 'The window ornament shown is a regular six-pointed star, made by overlapping two congruent equilateral triangles. What is the measure of the tip angle at $A$?',
      fig: {
        view: [-3.3, -3.3, 3.3, 3.5],
        elems: [
          { t: 'poly', pts: [[0, 3], [-2.6, -1.5], [2.6, -1.5]], fill: false },
          { t: 'poly', pts: [[0, -3], [2.6, 1.5], [-2.6, 1.5]], fill: false },
          { t: 'angle', at: [0, 3], from: [-2.6, -1.5], to: [2.6, -1.5], r: 0.8, label: '?' },
          { t: 'point', p: [0, 3], label: 'A', dx: 12, dy: -6 },
        ],
      },
      choices: ['$60^\\circ$', '$30^\\circ$', '$120^\\circ$', '$36^\\circ$'],
      answer: 0,
      solution:
        'Each tip of this star IS a corner of one of the two overlapping equilateral triangles, so the angle at $A$ is $60^\\circ$ ✓. Check a second, independent way with the inscribed-angle theorem: the six points sit on a circle at $60^\\circ$ spacing, and the two edges at $A$ reach the points two steps away on each side, so the far arc between them spans $2 \\times 60^\\circ = 120^\\circ$; an inscribed angle is half its arc, $\\frac{120^\\circ}{2} = 60^\\circ$ ✓. (The choice $30^\\circ$ SPLITS $180^\\circ$ AMONG THE SIX TIPS, carrying over the five-pointed star’s tip sum ✗; $120^\\circ$ REPORTS THE TURN at the tip, $180^\\circ - 60^\\circ$ ✗; $36^\\circ$ BORROWS THE FIVE-POINTED STAR’S TIP ✗.)',
    },
    {
      q: 'The compass ornament shown is a regular eight-pointed star: eight points equally spaced on a circle, each joined to the point three steps away around the circle. Find the tip angle at $A$.',
      fig: {
        view: [-3.3, -3.3, 3.3, 3.5],
        elems: [
          { t: 'seg', a: [0, 3], b: [-2.12, -2.12] },
          { t: 'seg', a: [-2.12, -2.12], b: [3, 0] },
          { t: 'seg', a: [3, 0], b: [-2.12, 2.12] },
          { t: 'seg', a: [-2.12, 2.12], b: [0, -3] },
          { t: 'seg', a: [0, -3], b: [2.12, 2.12] },
          { t: 'seg', a: [2.12, 2.12], b: [-3, 0] },
          { t: 'seg', a: [-3, 0], b: [2.12, -2.12] },
          { t: 'seg', a: [2.12, -2.12], b: [0, 3] },
          { t: 'angle', at: [0, 3], from: [-2.12, -2.12], to: [2.12, -2.12], r: 0.9, label: '?' },
          { t: 'point', p: [0, 3], label: 'A', dx: 12, dy: -6 },
        ],
      },
      choices: ['$90^\\circ$', '$135^\\circ$', '$22.5^\\circ$', '$45^\\circ$'],
      answer: 3,
      solution:
        'Walk once around the star’s outline: skipping three points at a time brings you back after exactly THREE full spins, so the turning totals $3 \\cdot 360^\\circ = 1080^\\circ$. Each of the $8$ tips turns you $180^\\circ$ minus the tip angle, so $8 \\cdot 180^\\circ - 8t = 1080^\\circ$, which gives $8t = 1440^\\circ - 1080^\\circ = 360^\\circ$ and $t = 45^\\circ$ ✓. Check a second, independent way with the inscribed-angle theorem: the two edges at $A$ reach the points three steps away on each side, so the far arc between them spans only $8 - 6 = 2$ steps of $45^\\circ$, an arc of $90^\\circ$; the inscribed angle is half of that, $45^\\circ$ ✓. (The choice $90^\\circ$ FORGETS TO HALVE the intercepted arc ✗; $135^\\circ$ REPORTS THE TURNING ANGLE at each tip, $\\frac{3 \\cdot 360^\\circ}{8}$ ✗; $22.5^\\circ$ SPLITS $180^\\circ$ AMONG THE EIGHT TIPS, borrowing the five-pointed star’s tip sum ✗.)',
    },
    {
      q: 'A clockmaker engraves the regular twelve-pointed star shown: twelve points equally spaced on a circle, each joined to the point five steps away around the circle. What is the measure of the tip angle at $A$?',
      fig: {
        view: [-3.3, -3.3, 3.3, 3.5],
        elems: [
          { t: 'seg', a: [0, 3], b: [-1.5, -2.6] },
          { t: 'seg', a: [-1.5, -2.6], b: [2.6, 1.5] },
          { t: 'seg', a: [2.6, 1.5], b: [-3, 0] },
          { t: 'seg', a: [-3, 0], b: [2.6, -1.5] },
          { t: 'seg', a: [2.6, -1.5], b: [-1.5, 2.6] },
          { t: 'seg', a: [-1.5, 2.6], b: [0, -3] },
          { t: 'seg', a: [0, -3], b: [1.5, 2.6] },
          { t: 'seg', a: [1.5, 2.6], b: [-2.6, -1.5] },
          { t: 'seg', a: [-2.6, -1.5], b: [3, 0] },
          { t: 'seg', a: [3, 0], b: [-2.6, 1.5] },
          { t: 'seg', a: [-2.6, 1.5], b: [1.5, -2.6] },
          { t: 'seg', a: [1.5, -2.6], b: [0, 3] },
          { t: 'angle', at: [0, 3], from: [-1.5, -2.6], to: [1.5, -2.6], r: 0.9, label: '?' },
          { t: 'point', p: [0, 3], label: 'A', dx: 12, dy: -6 },
        ],
      },
      choices: ['$60^\\circ$', '$15^\\circ$', '$30^\\circ$', '$150^\\circ$'],
      answer: 2,
      solution:
        'Walk once around the star’s outline: skipping five points at a time closes the path after exactly FIVE full spins, so the turning totals $5 \\cdot 360^\\circ = 1800^\\circ$. Each of the $12$ tips turns you $180^\\circ$ minus the tip angle, so $12 \\cdot 180^\\circ - 12t = 1800^\\circ$, giving $12t = 2160^\\circ - 1800^\\circ = 360^\\circ$ and $t = 30^\\circ$ ✓. Check a second, independent way with the inscribed-angle theorem: the edges at $A$ reach the points five steps away on each side, so the far arc between them spans only $12 - 10 = 2$ steps of $30^\\circ$, an arc of $60^\\circ$; the inscribed angle is half of that, $30^\\circ$ ✓. (The choice $60^\\circ$ FORGETS TO HALVE the intercepted arc ✗; $15^\\circ$ SPLITS $180^\\circ$ AMONG THE TWELVE TIPS ✗; $150^\\circ$ REPORTS THE TURNING ANGLE at each tip, $\\frac{5 \\cdot 360^\\circ}{12}$ ✗.)',
    },
  ],
  // s6 — five exterior angles of a hexagon given, find the sixth.
  [
    {
      q: 'The plan of a six-sided cycling loop is shown. At each corner, the rider’s turn — the exterior angle between one side’s dashed extension and the next side — is posted. Five of the turns measure $52^\\circ$, $48^\\circ$, $71^\\circ$, $66^\\circ$, and $58^\\circ$. What is the exterior angle at the remaining corner?',
      fig: {
        view: [-3.6, -4, 3.7, 3.6],
        elems: [
          { t: 'poly', pts: [[0.99, -2.38], [2.42, -0.55], [1.98, 1.93], [-0.85, 2.38], [-2.42, -0.03], [-1.32, -2.38]], fill: false },
          { t: 'seg', a: [0.99, -2.38], b: [2.19, -2.38], dash: true },
          { t: 'seg', a: [2.42, -0.55], b: [3.16, 0.4], dash: true },
          { t: 'seg', a: [1.98, 1.93], b: [1.77, 3.11], dash: true },
          { t: 'seg', a: [-0.85, 2.38], b: [-2.04, 2.57], dash: true },
          { t: 'seg', a: [-2.42, -0.03], b: [-3.07, -1.04], dash: true },
          { t: 'seg', a: [-1.32, -2.38], b: [-0.81, -3.47], dash: true },
          { t: 'angle', at: [0.99, -2.38], from: [2.19, -2.38], to: [2.42, -0.55], r: 0.55, label: '52' },
          { t: 'angle', at: [2.42, -0.55], from: [3.16, 0.4], to: [1.98, 1.93], r: 0.55, label: '48' },
          { t: 'angle', at: [1.98, 1.93], from: [1.77, 3.11], to: [-0.85, 2.38], r: 0.55, label: '71' },
          { t: 'angle', at: [-0.85, 2.38], from: [-2.04, 2.57], to: [-2.42, -0.03], r: 0.55, label: '66' },
          { t: 'angle', at: [-2.42, -0.03], from: [-3.07, -1.04], to: [-1.32, -2.38], r: 0.55, label: '58' },
          { t: 'angle', at: [-1.32, -2.38], from: [-0.81, -3.47], to: [0.99, -2.38], r: 0.55, label: '?' },
        ],
      },
      choices: ['$60^\\circ$', '$295^\\circ$', '$65^\\circ$', '$115^\\circ$'],
      answer: 2,
      solution:
        'One lap around any convex loop turns the rider through exactly $360^\\circ$, so the six exterior angles must total $360^\\circ$. The five posted turns give $52 + 48 + 71 + 66 + 58 = 295$, so the last is $360^\\circ - 295^\\circ = 65^\\circ$ ✓. Check a second, independent way through the interior angles: the five known corners open at $180^\\circ$ minus each turn — $128^\\circ$, $132^\\circ$, $109^\\circ$, $114^\\circ$, $122^\\circ$, totaling $605^\\circ$ — and a hexagon’s interiors must reach $(6 - 2) \\cdot 180^\\circ = 720^\\circ$, so the sixth interior is $115^\\circ$ and its exterior partner is $180^\\circ - 115^\\circ = 65^\\circ$ ✓. Rebuild: $295 + 65 = 360$ ✓. (The choice $60^\\circ$ ASSUMES A REGULAR HEXAGON, $\\frac{360^\\circ}{6}$ ✗; $295^\\circ$ REPORTS THE SUM OF THE FIVE KNOWNS ✗; $115^\\circ$ REPORTS THE INTERIOR ANGLE at that corner instead of the exterior ✗.)',
    },
    {
      q: 'A quality-control inspector checks a six-sided machine gasket, measuring the exterior angle at each corner against a dashed extension line, as shown. Five of the measurements read $66^\\circ$, $42^\\circ$, $70^\\circ$, $55^\\circ$, and $65^\\circ$. What must the sixth exterior angle be?',
      fig: {
        view: [-3.7, -3.9, 3.5, 3.9],
        elems: [
          { t: 'poly', pts: [[1.47, -2.31], [2.47, -0.07], [1.72, 2.22], [-0.83, 2.31], [-2.47, 0.14], [-1.17, -2.31]], fill: false },
          { t: 'seg', a: [1.47, -2.31], b: [2.67, -2.31], dash: true },
          { t: 'seg', a: [2.47, -0.07], b: [2.96, 1.03], dash: true },
          { t: 'seg', a: [1.72, 2.22], b: [1.35, 3.36], dash: true },
          { t: 'seg', a: [-0.83, 2.31], b: [-2.03, 2.35], dash: true },
          { t: 'seg', a: [-2.47, 0.14], b: [-3.19, -0.82], dash: true },
          { t: 'seg', a: [-1.17, -2.31], b: [-0.61, -3.37], dash: true },
          { t: 'angle', at: [1.47, -2.31], from: [2.67, -2.31], to: [2.47, -0.07], r: 0.55, label: '66' },
          { t: 'angle', at: [2.47, -0.07], from: [2.96, 1.03], to: [1.72, 2.22], r: 0.55, label: '42' },
          { t: 'angle', at: [1.72, 2.22], from: [1.35, 3.36], to: [-0.83, 2.31], r: 0.55, label: '70' },
          { t: 'angle', at: [-0.83, 2.31], from: [-2.03, 2.35], to: [-2.47, 0.14], r: 0.55, label: '55' },
          { t: 'angle', at: [-2.47, 0.14], from: [-3.19, -0.82], to: [-1.17, -2.31], r: 0.55, label: '65' },
          { t: 'angle', at: [-1.17, -2.31], from: [-0.61, -3.37], to: [1.47, -2.31], r: 0.55, label: '?' },
        ],
      },
      choices: ['$298^\\circ$', '$62^\\circ$', '$60^\\circ$', '$118^\\circ$'],
      answer: 1,
      solution:
        'The exterior angles of any convex hexagon total $360^\\circ$ — one full spin around the gasket’s edge. The five readings give $66 + 42 + 70 + 55 + 65 = 298$, so the sixth is $360^\\circ - 298^\\circ = 62^\\circ$ ✓. Check a second, independent way through the interior angles: the known corners open at $114^\\circ$, $138^\\circ$, $110^\\circ$, $125^\\circ$, and $115^\\circ$, totaling $602^\\circ$; the hexagon’s interiors must total $720^\\circ$, so the last interior is $118^\\circ$, whose exterior partner is $180^\\circ - 118^\\circ = 62^\\circ$ ✓. Rebuild: $298 + 62 = 360$ ✓. (The choice $298^\\circ$ REPORTS THE SUM OF THE FIVE KNOWNS ✗; $60^\\circ$ ASSUMES A REGULAR HEXAGON ✗; $118^\\circ$ REPORTS THE INTERIOR ANGLE at that corner ✗.)',
    },
    {
      q: 'The border of a six-sided miniature-golf green is shown, with the exterior angle at each corner drawn against a dashed extension. Five of the angles measure $44^\\circ$, $61^\\circ$, $57^\\circ$, $68^\\circ$, and $52^\\circ$. Find the sixth exterior angle.',
      fig: {
        view: [-3.7, -4.1, 3.8, 3.3],
        elems: [
          { t: 'poly', pts: [[0.69, -2.42], [2.44, -0.73], [1.81, 1.62], [-0.65, 2.42], [-2.44, 0.29], [-1.86, -2.42]], fill: false },
          { t: 'seg', a: [0.69, -2.42], b: [1.89, -2.42], dash: true },
          { t: 'seg', a: [2.44, -0.73], b: [3.3, 0.1], dash: true },
          { t: 'seg', a: [1.81, 1.62], b: [1.5, 2.78], dash: true },
          { t: 'seg', a: [-0.65, 2.42], b: [-1.79, 2.79], dash: true },
          { t: 'seg', a: [-2.44, 0.29], b: [-3.21, -0.63], dash: true },
          { t: 'seg', a: [-1.86, -2.42], b: [-1.61, -3.59], dash: true },
          { t: 'angle', at: [0.69, -2.42], from: [1.89, -2.42], to: [2.44, -0.73], r: 0.55, label: '44' },
          { t: 'angle', at: [2.44, -0.73], from: [3.3, 0.1], to: [1.81, 1.62], r: 0.55, label: '61' },
          { t: 'angle', at: [1.81, 1.62], from: [1.5, 2.78], to: [-0.65, 2.42], r: 0.55, label: '57' },
          { t: 'angle', at: [-0.65, 2.42], from: [-1.79, 2.79], to: [-2.44, 0.29], r: 0.55, label: '68' },
          { t: 'angle', at: [-2.44, 0.29], from: [-3.21, -0.63], to: [-1.86, -2.42], r: 0.55, label: '52' },
          { t: 'angle', at: [-1.86, -2.42], from: [-1.61, -3.59], to: [0.69, -2.42], r: 0.55, label: '?' },
        ],
      },
      choices: ['$282^\\circ$', '$102^\\circ$', '$60^\\circ$', '$78^\\circ$'],
      answer: 3,
      solution:
        'Walking the border once spins you through exactly $360^\\circ$, so the six exterior angles must total $360^\\circ$. The five marked angles give $44 + 61 + 57 + 68 + 52 = 282$, so the last is $360^\\circ - 282^\\circ = 78^\\circ$ ✓. Check a second, independent way through the interior angles: the five known corners open at $136^\\circ$, $119^\\circ$, $123^\\circ$, $112^\\circ$, and $128^\\circ$, totaling $618^\\circ$; a hexagon’s interiors must total $720^\\circ$, so the sixth interior is $102^\\circ$, and its exterior partner is $180^\\circ - 102^\\circ = 78^\\circ$ ✓. Rebuild: $282 + 78 = 360$ ✓. (The choice $282^\\circ$ REPORTS THE SUM OF THE FIVE KNOWNS ✗; $102^\\circ$ REPORTS THE INTERIOR ANGLE at that corner ✗; $60^\\circ$ ASSUMES A REGULAR HEXAGON ✗.)',
    },
  ],
  // s7 — regular interior angle to side count to diagonal count.
  [
    {
      q: 'A machinist cuts a gear plate as a regular polygon whose every interior angle measures $156^\\circ$, then drills a channel between every pair of non-adjacent corners. How many channels — diagonals of the polygon — does she drill?',
      choices: ['$90$', '$105$', '$180$', '$15$'],
      answer: 0,
      solution:
        'Two tools in a chain. First find $n$: the exterior angle is $180^\\circ - 156^\\circ = 24^\\circ$, and the exteriors total $360^\\circ$, so $n = \\frac{360^\\circ}{24^\\circ} = 15$. Then count diagonals: $\\frac{15 \\times 12}{2} = 90$ ✓. Check a second, independent way: algebra on the interior sum, $(n - 2) \\cdot 180^\\circ = 156^\\circ n$, gives $24n = 360$ and $n = 15$ again; and counting all pairs of corners minus the sides gives $\\frac{15 \\times 14}{2} - 15 = 105 - 15 = 90$ ✓. (The choice $105$ COUNTS ALL PAIRS of corners, sides included ✗; $180$ FORGETS TO HALVE the double-counted $15 \\times 12$ ✗; $15$ STOPS AT THE SIDE COUNT ✗.)',
    },
    {
      q: 'The floor medallion in a hotel lobby is a regular polygon whose every interior angle measures $168^\\circ$. How many diagonals does the medallion’s outline have?',
      choices: ['$435$', '$810$', '$30$', '$405$'],
      answer: 3,
      solution:
        'Chain the two tools. First $n$: the exterior angle is $180^\\circ - 168^\\circ = 12^\\circ$, so $n = \\frac{360^\\circ}{12^\\circ} = 30$. Then diagonals: $\\frac{30 \\times 27}{2} = 405$ ✓. Check a second, independent way: algebra on the interior sum, $(n - 2) \\cdot 180^\\circ = 168^\\circ n$, gives $12n = 360$ and $n = 30$ again; and all pairs minus sides gives $\\frac{30 \\times 29}{2} - 30 = 435 - 30 = 405$ ✓. (The choice $435$ COUNTS ALL PAIRS of corners, sides included ✗; $810$ FORGETS TO HALVE $30 \\times 27$ ✗; $30$ STOPS AT THE SIDE COUNT ✗.)',
    },
    {
      q: 'A decorative mirror is framed as a regular polygon in which each interior angle measures $162^\\circ$. Find the number of diagonals of the frame’s outline.',
      choices: ['$190$', '$170$', '$20$', '$340$'],
      answer: 1,
      solution:
        'First recover $n$: the exterior angle is $180^\\circ - 162^\\circ = 18^\\circ$, so $n = \\frac{360^\\circ}{18^\\circ} = 20$. Then count diagonals: $\\frac{20 \\times 17}{2} = 170$ ✓. Check a second, independent way: algebra on the interior sum, $(n - 2) \\cdot 180^\\circ = 162^\\circ n$, gives $18n = 360$ and $n = 20$ again; and all pairs minus sides gives $\\frac{20 \\times 19}{2} - 20 = 190 - 20 = 170$ ✓. (The choice $190$ COUNTS ALL PAIRS of corners, sides included ✗; $340$ FORGETS TO HALVE $20 \\times 17$ ✗; $20$ STOPS AT THE SIDE COUNT ✗.)',
    },
  ],
  // s8 — two regular tiles at a point: uncovered degrees.
  [
    {
      q: 'On a workbench, a regular pentagonal tile and a square tile share corner point $P$ without overlapping, as shown. How many degrees of the angle around $P$ are covered by neither tile?',
      fig: {
        view: [-3.4, -1.7, 2.4, 2.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [2, 0], [2, 2], [0, 2]], fill: false },
          { t: 'poly', pts: [[0, 0], [0, 2], [-1.9, 2.62], [-3.08, 1], [-1.9, -0.62]], fill: false },
          { t: 'angle', at: [0, 0], from: [2, 0], to: [0, 2], r: 0.7, label: '90' },
          { t: 'angle', at: [0, 0], from: [0, 2], to: [-1.9, -0.62], r: 0.85, label: '108' },
          { t: 'label', p: [0.2, -1.28], text: '?', dx: 0, dy: 0 },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 2 },
        ],
      },
      choices: ['$198^\\circ$', '$150^\\circ$', '$162^\\circ$', '$252^\\circ$'],
      answer: 2,
      solution:
        'The full angle around $P$ is $360^\\circ$. The pentagon’s corner is $\\frac{(5 - 2) \\cdot 180^\\circ}{5} = 108^\\circ$, so removing it leaves $360^\\circ - 108^\\circ = 252^\\circ$, and removing the square’s $90^\\circ$ leaves $252^\\circ - 90^\\circ = 162^\\circ$ ✓. Check a second, independent way with the other order and the other angle formula: the pentagon’s exterior angle is $\\frac{360^\\circ}{5} = 72^\\circ$, so its interior is $180^\\circ - 72^\\circ = 108^\\circ$ again; removing the square first leaves $360^\\circ - 90^\\circ = 270^\\circ$, and then $270^\\circ - 108^\\circ = 162^\\circ$ ✓. Rebuild: $108 + 90 + 162 = 360$ ✓. (The choice $198^\\circ$ REPORTS THE COVERED PART, $108^\\circ + 90^\\circ$ ✗; $150^\\circ$ BORROWS THE HEXAGON’S $120^\\circ$ for the pentagon ✗; $252^\\circ$ SUBTRACTS ONLY THE PENTAGON ✗.)',
    },
    {
      q: 'A regular pentagonal paver and an equilateral-triangle paver meet at stake $P$ on a garden path, as shown, without overlapping. How many degrees of the angle around $P$ do the two pavers leave uncovered?',
      fig: {
        view: [-3.9, -2.5, 2.2, 3.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [0, 2], [-1.902, 2.618], [-3.078, 1.0], [-1.902, -0.618]], fill: false },
          { t: 'poly', pts: [[0, 0], [-1.902, -0.618], [-0.416, -1.956]], fill: false },
          { t: 'angle', at: [0, 0], from: [0, 2], to: [-1.902, -0.618], r: 0.7, label: '108' },
          { t: 'angle', at: [0, 0], from: [-1.902, -0.618], to: [-0.416, -1.956], r: 0.5, label: '60' },
          { t: 'label', p: [1.2, 0], text: '?', dx: 0, dy: 0 },
          { t: 'point', p: [0, 0], label: 'P', dx: 12, dy: -10 },
        ],
      },
      choices: ['$192^\\circ$', '$252^\\circ$', '$300^\\circ$', '$162^\\circ$'],
      answer: 0,
      solution:
        'The pentagon covers $108^\\circ$ at $P$ and the triangle covers $60^\\circ$, so the uncovered part is $360^\\circ - 108^\\circ - 60^\\circ = 192^\\circ$ ✓. Check a second, independent way by assembling instead of subtracting: the uncovered region is more than half the turn, since the two pavers together claim only $108^\\circ + 60^\\circ = 168^\\circ < 180^\\circ$ — and $168^\\circ + 192^\\circ = 360^\\circ$ closes the full turn exactly ✓. (The choice $252^\\circ$ SUBTRACTS ONLY THE PENTAGON ✗; $300^\\circ$ SUBTRACTS ONLY THE TRIANGLE ✗; $162^\\circ$ SWAPS IN A SQUARE for the triangle, $360^\\circ - 108^\\circ - 90^\\circ$ ✗.)',
    },
    {
      q: 'A regular octagonal plate and a square coaster touch at point $P$ on a café table, as shown, without overlapping. How many degrees of the angle around $P$ are left uncovered?',
      fig: {
        view: [-5.2, -1.8, 2.4, 3.7],
        elems: [
          { t: 'poly', pts: [[0, 0], [2, 0], [2, 2], [0, 2]], fill: false },
          { t: 'poly', pts: [[0, 0], [0, 2], [-1.41, 3.41], [-3.41, 3.41], [-4.83, 2], [-4.83, 0], [-3.41, -1.41], [-1.41, -1.41]], fill: false },
          { t: 'angle', at: [0, 0], from: [2, 0], to: [0, 2], r: 0.7, label: '90' },
          { t: 'angle', at: [0, 0], from: [0, 2], to: [-1.41, -1.41], r: 0.85, label: '135' },
          { t: 'label', p: [0.5, -1.2], text: '?', dx: 0, dy: 0 },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 2 },
        ],
      },
      choices: ['$225^\\circ$', '$135^\\circ$', '$270^\\circ$', '$150^\\circ$'],
      answer: 1,
      solution:
        'The octagon’s corner is $180^\\circ - \\frac{360^\\circ}{8} = 135^\\circ$ and the coaster’s is $90^\\circ$, so the uncovered part is $360^\\circ - 135^\\circ - 90^\\circ = 135^\\circ$ ✓. Check a second, independent way with the other angle formula and the other order: the octagon’s interior is $\\frac{(8 - 2) \\cdot 180^\\circ}{8} = 135^\\circ$ again; removing the square first leaves $360^\\circ - 90^\\circ = 270^\\circ$, then $270^\\circ - 135^\\circ = 135^\\circ$ — amusingly, the leftover exactly matches the octagon’s own corner ✓. Rebuild: $135 + 90 + 135 = 360$ ✓. (The choice $225^\\circ$ REPORTS THE COVERED TOTAL, $135^\\circ + 90^\\circ$ ✗; $270^\\circ$ SUBTRACTS ONLY THE SQUARE ✗; $150^\\circ$ BORROWS THE HEXAGON’S $120^\\circ$ for the octagon ✗.)',
    },
  ],
  // s9 — equal-perimeter regular hexagon vs equilateral triangle: area ratio.
  [
    {
      q: 'A hexagonal herb bed and a triangular flower bed use equal lengths of brick edging: the regular hexagon has side $3$ and the equilateral triangle has side $6$, as shown, so both perimeters are $18$. What is the ratio of the hexagon’s area to the triangle’s area?',
      fig: {
        view: [-7.4, -3.4, 6.9, 3.1],
        elems: [
          { t: 'poly', pts: [[-1, 0], [-2.5, 2.6], [-5.5, 2.6], [-7, 0], [-5.5, -2.6], [-2.5, -2.6]], fill: false },
          { t: 'poly', pts: [[0.5, -2.6], [6.5, -2.6], [3.5, 2.6]], fill: false },
          { t: 'label', p: [-4, -2.6], text: '3', dx: 0, dy: 14 },
          { t: 'label', p: [3.5, -2.6], text: '6', dx: 0, dy: 14 },
        ],
      },
      choices: ['$1:1$', '$3:1$', '$6:1$', '$3:2$'],
      answer: 3,
      solution:
        'Compute both areas. The hexagon: $\\frac{3\\sqrt{3}}{2} \\cdot 3^2 = \\frac{27\\sqrt{3}}{2}$. The triangle: $\\frac{\\sqrt{3}}{4} \\cdot 6^2 = 9\\sqrt{3}$. The ratio is $\\frac{27\\sqrt{3}}{2} : 9\\sqrt{3} = \\frac{27}{2} : 9 = 27 : 18 = 3 : 2$ ✓. Check a second, independent way by counting unit pieces: the hexagon is exactly $6$ equilateral triangles of side $3$, while the side-$6$ triangle contains $4$ of them (doubling a side quadruples the area), and $6 : 4 = 3 : 2$ ✓ — same edging, but the rounder shape holds more. (The choice $1:1$ ASSUMES EQUAL PERIMETERS FORCE EQUAL AREAS ✗; $3:1$ DOUBLES AREA WITH SIDE, treating the side-$6$ triangle as only $2$ units ✗; $6:1$ COMPARES SIX UNITS TO ONE, forgetting the flower bed’s side is twice as long ✗.)',
    },
    {
      q: 'A regular hexagonal pond and an equilateral-triangle sandbox are each rimmed with the same $30$ meters of timber: the hexagon has side $5$ and the triangle has side $10$, as shown. Find the ratio of the pond’s area to the sandbox’s area.',
      fig: {
        view: [-11.9, -5.2, 10.9, 4.9],
        elems: [
          { t: 'poly', pts: [[-1.5, 0], [-4, 4.33], [-9, 4.33], [-11.5, 0], [-9, -4.33], [-4, -4.33]], fill: false },
          { t: 'poly', pts: [[0.5, -4.33], [10.5, -4.33], [5.5, 4.33]], fill: false },
          { t: 'label', p: [-6.5, -4.33], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [5.5, -4.33], text: '10', dx: 0, dy: 14 },
        ],
      },
      choices: ['$3:2$', '$1:1$', '$2:3$', '$3:1$'],
      answer: 0,
      solution:
        'Compute both areas. The hexagon: $\\frac{3\\sqrt{3}}{2} \\cdot 5^2 = \\frac{75\\sqrt{3}}{2}$. The triangle: $\\frac{\\sqrt{3}}{4} \\cdot 10^2 = 25\\sqrt{3}$. The ratio is $\\frac{75}{2} : 25 = 75 : 50 = 3 : 2$ ✓. Check a second, independent way by counting unit pieces: the hexagon is $6$ equilateral triangles of side $5$, and the side-$10$ triangle is $4$ of them since doubling a side quadruples the area; $6 : 4 = 3 : 2$ ✓. (The choice $2:3$ INVERTS THE RATIO, putting the triangle first ✗; $1:1$ ASSUMES EQUAL PERIMETERS FORCE EQUAL AREAS ✗; $3:1$ DOUBLES AREA WITH SIDE, counting the big triangle as only $2$ units ✗.)',
    },
    {
      q: 'Two woven rugs use identical binding tape around their edges: one is a regular hexagon with side $7$, the other an equilateral triangle with side $14$, as shown, each with a $42$-unit perimeter. What is the ratio of the hexagonal rug’s area to the triangular rug’s area?',
      fig: {
        view: [-16.5, -7, 14.5, 6.7],
        elems: [
          { t: 'poly', pts: [[-2, 0], [-5.5, 6.06], [-12.5, 6.06], [-16, 0], [-12.5, -6.06], [-5.5, -6.06]], fill: false },
          { t: 'poly', pts: [[0, -6.06], [14, -6.06], [7, 6.06]], fill: false },
          { t: 'label', p: [-9, -6.06], text: '7', dx: 0, dy: 14 },
          { t: 'label', p: [7, -6.06], text: '14', dx: 0, dy: 14 },
        ],
      },
      choices: ['$2:3$', '$1:1$', '$3:2$', '$3:1$'],
      answer: 2,
      solution:
        'Compute both areas. The hexagon: $\\frac{3\\sqrt{3}}{2} \\cdot 7^2 = \\frac{147\\sqrt{3}}{2}$. The triangle: $\\frac{\\sqrt{3}}{4} \\cdot 14^2 = 49\\sqrt{3}$. The ratio is $\\frac{147}{2} : 49 = 147 : 98 = 3 : 2$ ✓. Check a second, independent way by counting unit pieces: the hexagon is $6$ equilateral triangles of side $7$, and the side-$14$ rug is $4$ of them because doubling a side quadruples the area; $6 : 4 = 3 : 2$ ✓ — the ratio never depends on the actual side, only on the equal perimeters. (The choice $2:3$ INVERTS THE RATIO ✗; $1:1$ ASSUMES EQUAL PERIMETERS FORCE EQUAL AREAS ✗; $3:1$ DOUBLES AREA WITH SIDE, counting the big triangle as $2$ units instead of $4$ ✗.)',
    },
  ],
  // s10 — interior angle sum to side count to diagonal count.
  [
    {
      q: 'The interior angles of a convex polygonal atrium sum to $2700^\\circ$. An architect wants to string a cable between every pair of non-adjacent corners. How many cables — diagonals of the polygon — does the plan call for?',
      choices: ['$136$', '$119$', '$238$', '$17$'],
      answer: 1,
      solution:
        'Recover $n$ first: $(n - 2) \\cdot 180 = 2700$ gives $n - 2 = 15$, so $n = 17$. Then count diagonals: $\\frac{17 \\times 14}{2} = 119$ ✓. Check a second, independent way: the boundary-walk formula confirms $n$, since $17 \\cdot 180^\\circ - 360^\\circ = 3060^\\circ - 360^\\circ = 2700^\\circ$ ✓, and all pairs of corners minus the sides gives $\\frac{17 \\times 16}{2} - 17 = 136 - 17 = 119$ ✓. (The choice $136$ COUNTS ALL PAIRS of corners, sides included ✗; $238$ FORGETS TO HALVE the double-counted $17 \\times 14$ ✗; $17$ STOPS AT THE SIDE COUNT ✗.)',
    },
    {
      q: 'A convex polygonal inlay on a convention-hall floor has interior angles summing to $2880^\\circ$. How many diagonals does the inlay’s outline have?',
      choices: ['$153$', '$270$', '$135$', '$18$'],
      answer: 2,
      solution:
        'First the side count: $(n - 2) \\cdot 180 = 2880$ gives $n - 2 = 16$, so $n = 18$. Then the diagonals: $\\frac{18 \\times 15}{2} = 135$ ✓. Check a second, independent way: the boundary walk confirms $n$, since $18 \\cdot 180^\\circ - 360^\\circ = 3240^\\circ - 360^\\circ = 2880^\\circ$ ✓, and all pairs minus sides gives $\\frac{18 \\times 17}{2} - 18 = 153 - 18 = 135$ ✓. (The choice $153$ COUNTS ALL PAIRS of corners, sides included ✗; $270$ FORGETS TO HALVE $18 \\times 15$ ✗; $18$ STOPS AT THE SIDE COUNT ✗.)',
    },
    {
      q: 'The interior angles of a convex polygonal stadium concourse sum to $3960^\\circ$. How many diagonals does the concourse’s outline have?',
      choices: ['$276$', '$24$', '$504$', '$252$'],
      answer: 3,
      solution:
        'Recover the side count: $(n - 2) \\cdot 180 = 3960$ gives $n - 2 = 22$, so $n = 24$. Then the diagonals: $\\frac{24 \\times 21}{2} = 252$ ✓. Check a second, independent way: the boundary walk confirms $n$, since $24 \\cdot 180^\\circ - 360^\\circ = 4320^\\circ - 360^\\circ = 3960^\\circ$ ✓, and all pairs minus sides gives $\\frac{24 \\times 23}{2} - 24 = 276 - 24 = 252$ ✓. (The choice $276$ COUNTS ALL PAIRS of corners, sides included ✗; $504$ FORGETS TO HALVE $24 \\times 21$ ✗; $24$ STOPS AT THE SIDE COUNT ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 9,
  sections: {
    '9.4': s94,
  },
}
