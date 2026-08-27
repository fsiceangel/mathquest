// Introduction to Geometry chapter 9 — variations for section 9.1 (Introduction to Polygons).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every diagonal count was worked twice by routes that do not share
//    arithmetic: the per-vertex count halved against the n(n-3)/2 formula, or
//    the all-pairs count minus the sides, or a table of nearby side counts.
//    Both routes must agree before a key is written down.
//  - Every diagonals-to-sides key was solved by factoring the quadratic AND
//    confirmed by a table or the forward formula.
//  - Regular polygons are drawn at true vertex angles on a circumscribed
//    circle (R = 3 or 3.2, vertices at 90 + k(360/n) degrees, rounded to
//    two decimals).
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution.

const s91 = [
  // s1 — name the regular polygon shown in the figure.
  [
    {
      q: 'A landscape architect orders paving stones in the shape shown — a regular polygon with every side marked equal. What is this shape called?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'poly', pts: [[0, 3], [-1.9284, 2.2981], [-2.9544, 0.5209], [-2.5981, -1.5], [-1.0261, -2.8191], [1.0261, -2.8191], [2.5981, -1.5], [2.9544, 0.5209], [1.9284, 2.2981]], fill: false },
          { t: 'tick', a: [0, 3], b: [-1.9284, 2.2981], n: 1 },
          { t: 'tick', a: [-1.9284, 2.2981], b: [-2.9544, 0.5209], n: 1 },
          { t: 'tick', a: [-2.9544, 0.5209], b: [-2.5981, -1.5], n: 1 },
          { t: 'tick', a: [-2.5981, -1.5], b: [-1.0261, -2.8191], n: 1 },
          { t: 'tick', a: [-1.0261, -2.8191], b: [1.0261, -2.8191], n: 1 },
          { t: 'tick', a: [1.0261, -2.8191], b: [2.5981, -1.5], n: 1 },
          { t: 'tick', a: [2.5981, -1.5], b: [2.9544, 0.5209], n: 1 },
          { t: 'tick', a: [2.9544, 0.5209], b: [1.9284, 2.2981], n: 1 },
          { t: 'tick', a: [1.9284, 2.2981], b: [0, 3], n: 1 },
        ],
      },
      choices: ['an octagon', 'a nonagon', 'a decagon', 'a heptagon'],
      answer: 1,
      solution:
        'Count the sides one tick mark at a time: there are $9$, and a $9$-sided polygon is a nonagon ✓. Check a second, independent way by counting the corners instead — a polygon has exactly as many vertices as sides, and this stone has $9$ corners ✓. The name ladder confirms the neighbors: octagon $8$, nonagon $9$, decagon $10$. (The choice “an octagon” is MISCOUNTING ONE SHORT ✗; “a decagon” is MISCOUNTING ONE OVER ✗; “a heptagon” is CONFUSING THE PREFIXES — “hepta-” means seven, two sides fewer than this stone has ✗.)',
    },
    {
      q: 'A game token is stamped as the regular polygon shown, with all sides marked equal. What is the token’s shape called?',
      fig: {
        view: [-4, -3.6, 4, 4],
        elems: [
          { t: 'poly', pts: [[0, 3], [-2.8532, 0.9271], [-1.7634, -2.4271], [1.7634, -2.4271], [2.8532, 0.9271]], fill: false },
          { t: 'tick', a: [0, 3], b: [-2.8532, 0.9271], n: 1 },
          { t: 'tick', a: [-2.8532, 0.9271], b: [-1.7634, -2.4271], n: 1 },
          { t: 'tick', a: [-1.7634, -2.4271], b: [1.7634, -2.4271], n: 1 },
          { t: 'tick', a: [1.7634, -2.4271], b: [2.8532, 0.9271], n: 1 },
          { t: 'tick', a: [2.8532, 0.9271], b: [0, 3], n: 1 },
        ],
      },
      choices: ['a hexagon', 'a quadrilateral', 'a pentagon', 'a heptagon'],
      answer: 2,
      solution:
        'The token has $5$ sides — count the tick marks — and a $5$-sided polygon is a pentagon ✓. Check a second, independent way by counting vertices: sides and vertices always match, and there are $5$ corners ✓. The name ladder places it between the quadrilateral ($4$) and the hexagon ($6$). (The choice “a hexagon” is MISCOUNTING ONE OVER ✗; “a quadrilateral” is MISCOUNTING ONE SHORT ✗; “a heptagon” is CONFUSING THE PREFIXES — “hepta-” means seven, not five ✗.)',
    },
    {
      q: 'A jeweler cuts a pendant as the regular polygon shown, every side marked equal. What is the pendant’s shape called?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'poly', pts: [[0, 3], [-1.7634, 2.4271], [-2.8532, 0.9271], [-2.8532, -0.9271], [-1.7634, -2.4271], [0, -3], [1.7634, -2.4271], [2.8532, -0.9271], [2.8532, 0.9271], [1.7634, 2.4271]], fill: false },
          { t: 'tick', a: [0, 3], b: [-1.7634, 2.4271], n: 1 },
          { t: 'tick', a: [-1.7634, 2.4271], b: [-2.8532, 0.9271], n: 1 },
          { t: 'tick', a: [-2.8532, 0.9271], b: [-2.8532, -0.9271], n: 1 },
          { t: 'tick', a: [-2.8532, -0.9271], b: [-1.7634, -2.4271], n: 1 },
          { t: 'tick', a: [-1.7634, -2.4271], b: [0, -3], n: 1 },
          { t: 'tick', a: [0, -3], b: [1.7634, -2.4271], n: 1 },
          { t: 'tick', a: [1.7634, -2.4271], b: [2.8532, -0.9271], n: 1 },
          { t: 'tick', a: [2.8532, -0.9271], b: [2.8532, 0.9271], n: 1 },
          { t: 'tick', a: [2.8532, 0.9271], b: [1.7634, 2.4271], n: 1 },
          { t: 'tick', a: [1.7634, 2.4271], b: [0, 3], n: 1 },
        ],
      },
      choices: ['a decagon', 'a nonagon', 'a dodecagon', 'an octagon'],
      answer: 0,
      solution:
        'Count the sides: $10$ of them, so the pendant is a decagon ✓ — “deca-” means ten. Check a second, independent way with the vertices: $10$ corners, and vertices always equal sides ✓. On the name ladder it sits just above the nonagon ($9$) and well below the dodecagon ($12$). (The choice “a nonagon” is MISCOUNTING ONE SHORT ✗; “a dodecagon” is CONFUSING “deca-” WITH “dodeca-” — that name needs $12$ sides ✗; “an octagon” is SKIPPING TWO VERTICES while counting around ✗.)',
    },
  ],
  // s2 — how many sides a named polygon has.
  [
    {
      q: 'A community garden is fenced in the shape of a nonagon, with one gate on each side. How many sides does the fence have?',
      choices: ['$8$', '$10$', '$9$', '$7$'],
      answer: 2,
      solution:
        'A nonagon has $9$ sides — the prefix “nona-” means nine ✓. Check a second, independent way by walking the name ladder: octagon $8$, nonagon $9$, decagon $10$; the nonagon sits exactly one rung above the octagon ✓. (The choice $8$ is SLIPPING ONE RUNG DOWN to the octagon ✗; $10$ is SLIPPING ONE RUNG UP to the decagon ✗; $7$ is CONFUSING THE PREFIXES — seven belongs to the heptagon ✗.)',
    },
    {
      q: 'A decorative window is built as a heptagon, and the glazier needs one strip of trim per side. How many strips of trim are needed?',
      choices: ['$6$', '$7$', '$9$', '$8$'],
      answer: 1,
      solution:
        'A heptagon has $7$ sides — “hepta-” means seven — so the glazier needs $7$ strips ✓. Check a second, independent way with the name ladder: hexagon $6$, heptagon $7$, octagon $8$; the heptagon is one rung above the hexagon ✓. (The choice $6$ is SLIPPING DOWN TO THE HEXAGON ✗; $9$ is JUMPING TO THE NONAGON ✗; $8$ is SLIPPING UP TO THE OCTAGON ✗.)',
    },
    {
      q: 'A metal blank for a sign is cut as a hexagon, and each side gets its own strip of reflective edging. How many strips of edging does the blank need?',
      choices: ['$5$', '$7$', '$4$', '$6$'],
      answer: 3,
      solution:
        'A hexagon has $6$ sides — “hexa-” means six, the same count a honeycomb cell shows — so the blank needs $6$ strips ✓. Check a second, independent way with the name ladder: pentagon $5$, hexagon $6$, heptagon $7$; the hexagon is the middle rung ✓. (The choice $5$ is SLIPPING DOWN TO THE PENTAGON ✗; $7$ is SLIPPING UP TO THE HEPTAGON ✗; $4$ is FALLING ALL THE WAY TO THE QUADRILATERAL ✗.)',
    },
  ],
  // s3 — concave versus convex, from the figure.
  [
    {
      q: 'The floor plan shown is a six-sided room whose wall corner at one vertex bends into the room. This polygon is best described as',
      fig: {
        view: [-1, -1, 7, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 2], [2.5, 2], [2.5, 4.5], [0, 4.5]], fill: false },
        ],
      },
      choices: ['convex', 'regular', 'equilateral', 'concave'],
      answer: 3,
      solution:
        'At the inward corner the room’s interior angle opens past $180^\\circ$ — a reflex angle — and one reflex angle is exactly what makes a polygon concave ✓. Check a second, independent way with the segment test: a segment joining the two far corners of the room cuts across the notch, leaving the polygon, and no segment between two points of a convex polygon ever escapes ✓. (The choice “convex” is MISSING THE DENT — convex means every interior angle stays under $180^\\circ$ ✗; “regular” is IGNORING BOTH TESTS — regular needs equal sides and equal angles, and this room has neither ✗; “equilateral” is ASSUMING EQUAL SIDES that the plan plainly lacks ✗.)',
    },
    {
      q: 'A surveyor sketches the five-sided plot shown. No two sides have the same length, and no corner bends inward. This polygon is best described as',
      fig: {
        view: [-2, -1, 7, 6],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [6, 3], [3, 5], [-1, 3]], fill: false },
        ],
      },
      choices: ['concave', 'convex', 'regular', 'equilateral'],
      answer: 1,
      solution:
        'Every interior angle of the plot is less than $180^\\circ$ — no vertex points inward — and that is the definition of convex ✓. Check a second, independent way with the segment test: connect any two points of the plot and the segment stays inside; nothing pokes in for it to escape through ✓. Note that convex does not require any sides to match — lopsided is fine. (The choice “concave” is INVENTING A DENT the plot does not have ✗; “regular” is IGNORING THE UNEQUAL SIDES — regular needs equal sides and equal angles ✗; “equilateral” is ASSUMING EQUAL SIDES when all five differ ✗.)',
    },
    {
      q: 'The chevron badge shown is a six-sided polygon with a notch pressing in at the bottom edge. This polygon is best described as',
      fig: {
        view: [-1, -1, 7, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 2], [6, 0], [6, 1.5], [3, 3.5], [0, 1.5]], fill: false },
        ],
      },
      choices: ['regular', 'concave', 'convex', 'equiangular'],
      answer: 1,
      solution:
        'The notch is a vertex whose interior angle opens beyond $180^\\circ$ — a reflex angle — so the badge is concave ✓. Check a second, independent way with the segment test: a segment joining the badge’s two bottom corners passes underneath the notch, outside the polygon, and an escaping segment can only happen in a concave shape ✓. (The choice “regular” is IGNORING BOTH TESTS — this badge has neither equal sides nor equal angles ✗; “convex” is MISSING THE REFLEX ANGLE at the notch ✗; “equiangular” is ASSUMING EQUAL ANGLES when the notch angle towers over the rest ✗.)',
    },
  ],
  // s4 — total diagonals of a smaller polygon, with figure.
  [
    {
      q: 'A city plaza is shaped like the pentagon shown, and a walkway is paved between every pair of corners not already joined by an edge — the dashed paths. How many walkways are there?',
      fig: {
        view: [-4, -3.6, 4, 4],
        elems: [
          { t: 'poly', pts: [[0, 3], [-2.85, 0.93], [-1.76, -2.43], [1.76, -2.43], [2.85, 0.93]], fill: false },
          { t: 'seg', a: [0, 3], b: [-1.76, -2.43], dash: true },
          { t: 'seg', a: [0, 3], b: [1.76, -2.43], dash: true },
          { t: 'seg', a: [-2.85, 0.93], b: [1.76, -2.43], dash: true },
          { t: 'seg', a: [-2.85, 0.93], b: [2.85, 0.93], dash: true },
          { t: 'seg', a: [-1.76, -2.43], b: [2.85, 0.93], dash: true },
        ],
      },
      choices: ['$5$', '$10$', '$2$', '$20$'],
      answer: 0,
      solution:
        'Each walkway is a diagonal. Count from the vertices: each of the $5$ corners starts $5 - 3 = 2$ walkways (no path to itself or its two edge-neighbors), giving $5 \\times 2 = 10$ walkway-ends — and since every walkway has two ends, there are $\\frac{10}{2} = 5$ walkways ✓. Check a second, independent way by counting every pair of corners: $\\frac{5 \\times 4}{2} = 10$ pairs in all, of which $5$ are the plaza’s edges, leaving $10 - 5 = 5$ diagonals ✓ — and you can count the $5$ dashed paths in the figure. (The choice $10$ is FORGETTING TO HALVE the walkway-ends ✗; $2$ is COUNTING FROM ONE CORNER ONLY ✗; $20$ is DOUBLING INSTEAD OF HALVING ✗.)',
    },
    {
      q: 'Seven lanterns hang at the corners of the heptagon-shaped pavilion shown, and a string of lights runs between every pair of lanterns that are not neighbors — all shown dashed. How many strings of lights are there?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'poly', pts: [[0, 3], [-2.35, 1.87], [-2.92, -0.67], [-1.3, -2.7], [1.3, -2.7], [2.92, -0.67], [2.35, 1.87]], fill: false },
          { t: 'seg', a: [0, 3], b: [-2.92, -0.67], dash: true },
          { t: 'seg', a: [0, 3], b: [-1.3, -2.7], dash: true },
          { t: 'seg', a: [0, 3], b: [1.3, -2.7], dash: true },
          { t: 'seg', a: [0, 3], b: [2.92, -0.67], dash: true },
          { t: 'seg', a: [-2.35, 1.87], b: [-1.3, -2.7], dash: true },
          { t: 'seg', a: [-2.35, 1.87], b: [1.3, -2.7], dash: true },
          { t: 'seg', a: [-2.35, 1.87], b: [2.92, -0.67], dash: true },
          { t: 'seg', a: [-2.35, 1.87], b: [2.35, 1.87], dash: true },
          { t: 'seg', a: [-2.92, -0.67], b: [1.3, -2.7], dash: true },
          { t: 'seg', a: [-2.92, -0.67], b: [2.92, -0.67], dash: true },
          { t: 'seg', a: [-2.92, -0.67], b: [2.35, 1.87], dash: true },
          { t: 'seg', a: [-1.3, -2.7], b: [2.92, -0.67], dash: true },
          { t: 'seg', a: [-1.3, -2.7], b: [2.35, 1.87], dash: true },
          { t: 'seg', a: [1.3, -2.7], b: [2.35, 1.87], dash: true },
        ],
      },
      choices: ['$21$', '$28$', '$14$', '$4$'],
      answer: 2,
      solution:
        'Each string is a diagonal of the heptagon. Count from the lanterns: each of the $7$ corners starts $7 - 3 = 4$ strings, giving $7 \\times 4 = 28$ string-ends, and halving for the two ends per string leaves $\\frac{28}{2} = 14$ ✓. Check a second, independent way with all pairs: $\\frac{7 \\times 6}{2} = 21$ lantern pairs in total, minus the $7$ neighboring pairs along the pavilion’s edges, leaves $21 - 7 = 14$ ✓. (The choice $28$ is FORGETTING TO HALVE ✗; $21$ is COUNTING EVERY PAIR, edges included ✗; $4$ is COUNTING FROM ONE LANTERN ONLY ✗.)',
    },
    {
      q: 'The figure shows a regular $14$-gon. Drawing every diagonal would bury the picture, so only the diagonals from vertices $A$ and $B$ are dashed. In total, how many diagonals does a $14$-gon have?',
      fig: {
        alt: 'A regular 14-gon. Only the diagonals from the two adjacent vertices A and B are drawn, since showing all 77 diagonals would be unreadable.',
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'poly', pts: [[0, 3.2], [-1.39, 2.88], [-2.5, 2], [-3.12, 0.71], [-3.12, -0.71], [-2.5, -2], [-1.39, -2.88], [0, -3.2], [1.39, -2.88], [2.5, -2], [3.12, -0.71], [3.12, 0.71], [2.5, 2], [1.39, 2.88]], fill: false },
          { t: 'seg', a: [0, 3.2], b: [-2.5, 2], dash: true },
          { t: 'seg', a: [0, 3.2], b: [-3.12, 0.71], dash: true },
          { t: 'seg', a: [0, 3.2], b: [-3.12, -0.71], dash: true },
          { t: 'seg', a: [0, 3.2], b: [-2.5, -2], dash: true },
          { t: 'seg', a: [0, 3.2], b: [-1.39, -2.88], dash: true },
          { t: 'seg', a: [0, 3.2], b: [0, -3.2], dash: true },
          { t: 'seg', a: [0, 3.2], b: [1.39, -2.88], dash: true },
          { t: 'seg', a: [0, 3.2], b: [2.5, -2], dash: true },
          { t: 'seg', a: [0, 3.2], b: [3.12, -0.71], dash: true },
          { t: 'seg', a: [0, 3.2], b: [3.12, 0.71], dash: true },
          { t: 'seg', a: [0, 3.2], b: [2.5, 2], dash: true },
          { t: 'seg', a: [1.39, 2.88], b: [-1.39, 2.88], dash: true },
          { t: 'seg', a: [1.39, 2.88], b: [-2.5, 2], dash: true },
          { t: 'seg', a: [1.39, 2.88], b: [-3.12, 0.71], dash: true },
          { t: 'seg', a: [1.39, 2.88], b: [-3.12, -0.71], dash: true },
          { t: 'seg', a: [1.39, 2.88], b: [-2.5, -2], dash: true },
          { t: 'seg', a: [1.39, 2.88], b: [-1.39, -2.88], dash: true },
          { t: 'seg', a: [1.39, 2.88], b: [0, -3.2], dash: true },
          { t: 'seg', a: [1.39, 2.88], b: [1.39, -2.88], dash: true },
          { t: 'seg', a: [1.39, 2.88], b: [2.5, -2], dash: true },
          { t: 'seg', a: [1.39, 2.88], b: [3.12, -0.71], dash: true },
          { t: 'seg', a: [1.39, 2.88], b: [3.12, 0.71], dash: true },
          { t: 'point', p: [0, 3.2], label: 'A', dx: -4, dy: -10 },
          { t: 'point', p: [1.39, 2.88], label: 'B', dx: 12, dy: -8 },
        ],
      },
      choices: ['$91$', '$154$', '$11$', '$77$'],
      answer: 3,
      solution:
        'Count from the vertices: each of the $14$ vertices sends $14 - 3 = 11$ diagonals — exactly the dashed bundle at $A$, and again at $B$ — so there are $14 \\times 11 = 154$ diagonal-ends, and halving gives $\\frac{154}{2} = 77$ ✓. Check a second, independent way with all pairs: $\\frac{14 \\times 13}{2} = 91$ vertex pairs in total, of which $14$ are sides, leaving $91 - 14 = 77$ diagonals ✓. (The choice $154$ is FORGETTING TO HALVE ✗; $91$ is COUNTING EVERY VERTEX PAIR, sides included ✗; $11$ is COUNTING FROM ONE VERTEX ONLY ✗.)',
    },
  ],
  // s5 — diagonals from one vertex (n - 3), with figure.
  [
    {
      q: 'In the regular $16$-gon shown, every diagonal from vertex $A$ is dashed. How many diagonals leave a single vertex of a $16$-gon?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'poly', pts: [[0.0, 3.0], [1.1481, 2.7716], [2.1213, 2.1213], [2.7716, 1.1481], [3.0, 0.0], [2.7716, -1.1481], [2.1213, -2.1213], [1.1481, -2.7716], [0.0, -3.0], [-1.1481, -2.7716], [-2.1213, -2.1213], [-2.7716, -1.1481], [-3.0, -0.0], [-2.7716, 1.1481], [-2.1213, 2.1213], [-1.1481, 2.7716]], fill: false },
          { t: 'seg', a: [0.0, 3.0], b: [2.1213, 2.1213], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [2.7716, 1.1481], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [3.0, 0.0], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [2.7716, -1.1481], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [2.1213, -2.1213], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [1.1481, -2.7716], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [0.0, -3.0], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [-1.1481, -2.7716], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [-2.1213, -2.1213], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [-2.7716, -1.1481], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [-3.0, -0.0], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [-2.7716, 1.1481], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [-2.1213, 2.1213], dash: true },
          { t: 'point', p: [0.0, 3.0], label: 'A', dx: 0, dy: -12 },
        ],
      },
      choices: ['$15$', '$13$', '$14$', '$104$'],
      answer: 1,
      solution:
        'From one vertex you cannot draw a diagonal to itself or to its two neighbors — those two connections are sides. That rules out $3$ of the $16$ vertices, leaving $16 - 3 = 13$ diagonals ✓, and the figure’s dashed bundle counts to $13$. Check a second, independent way from the total: a $16$-gon has $\\frac{16 \\times 13}{2} = 104$ diagonals with two ends each, spread over $16$ vertices, so each vertex holds $\\frac{104 \\times 2}{16} = 13$ diagonal-ends ✓. (The choice $15$ is CONNECTING TO EVERY OTHER VERTEX, sides included ✗; $14$ is FORGETTING THE VERTEX ITSELF and subtracting only the two neighbors ✗; $104$ is ANSWERING THE TOTAL DIAGONAL COUNT instead of one vertex’s share ✗.)',
    },
    {
      q: 'A stage is built as the regular $13$-gon shown, and cables run from corner $A$ to every corner that is not adjacent to it — the dashed lines. How many cables leave one corner of a $13$-gon?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'poly', pts: [[0.0, 3.0], [1.3942, 2.6564], [2.469, 1.7042], [2.9781, 0.3616], [2.805, -1.0638], [1.9894, -2.2455], [0.7179, -2.9128], [-0.7179, -2.9128], [-1.9894, -2.2455], [-2.805, -1.0638], [-2.9781, 0.3616], [-2.469, 1.7042], [-1.3942, 2.6564]], fill: false },
          { t: 'seg', a: [0.0, 3.0], b: [2.469, 1.7042], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [2.9781, 0.3616], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [2.805, -1.0638], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [1.9894, -2.2455], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [0.7179, -2.9128], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [-0.7179, -2.9128], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [-1.9894, -2.2455], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [-2.805, -1.0638], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [-2.9781, 0.3616], dash: true },
          { t: 'seg', a: [0.0, 3.0], b: [-2.469, 1.7042], dash: true },
          { t: 'point', p: [0.0, 3.0], label: 'A', dx: 0, dy: -12 },
        ],
      },
      choices: ['$78$', '$11$', '$12$', '$10$'],
      answer: 3,
      solution:
        'From one corner you cannot run a cable to the corner itself or to its two neighbors — those connections are sides. That rules out $3$ of the $13$ corners, leaving $13 - 3 = 10$ cables ✓, and the dashed bundle in the figure counts to $10$. Check a second, independent way from the total: a $13$-gon has $\\frac{13 \\times 10}{2} = 65$ diagonals with two ends each, spread over $13$ corners, so each corner holds $\\frac{65 \\times 2}{13} = 10$ cable-ends ✓. (The choice $12$ is CONNECTING TO EVERY OTHER CORNER, sides included ✗; $11$ is FORGETTING THE CORNER ITSELF and subtracting only the two neighbors ✗; $78$ is COUNTING ALL PAIRS of corners ✗.)',
    },
    {
      q: 'In the regular $15$-gon shown, all the diagonals from vertex $A$ are dashed. How many diagonals leave a single vertex of a $15$-gon?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'poly', pts: [[0, 3.2], [-1.3, 2.92], [-2.38, 2.14], [-3.04, 0.99], [-3.18, -0.33], [-2.77, -1.6], [-1.88, -2.59], [-0.67, -3.13], [0.67, -3.13], [1.88, -2.59], [2.77, -1.6], [3.18, -0.33], [3.04, 0.99], [2.38, 2.14], [1.3, 2.92]], fill: false },
          { t: 'seg', a: [0, 3.2], b: [-2.38, 2.14], dash: true },
          { t: 'seg', a: [0, 3.2], b: [-3.04, 0.99], dash: true },
          { t: 'seg', a: [0, 3.2], b: [-3.18, -0.33], dash: true },
          { t: 'seg', a: [0, 3.2], b: [-2.77, -1.6], dash: true },
          { t: 'seg', a: [0, 3.2], b: [-1.88, -2.59], dash: true },
          { t: 'seg', a: [0, 3.2], b: [-0.67, -3.13], dash: true },
          { t: 'seg', a: [0, 3.2], b: [0.67, -3.13], dash: true },
          { t: 'seg', a: [0, 3.2], b: [1.88, -2.59], dash: true },
          { t: 'seg', a: [0, 3.2], b: [2.77, -1.6], dash: true },
          { t: 'seg', a: [0, 3.2], b: [3.18, -0.33], dash: true },
          { t: 'seg', a: [0, 3.2], b: [3.04, 0.99], dash: true },
          { t: 'seg', a: [0, 3.2], b: [2.38, 2.14], dash: true },
          { t: 'point', p: [0, 3.2], label: 'A', dx: 0, dy: -12 },
        ],
      },
      choices: ['$12$', '$14$', '$90$', '$13$'],
      answer: 0,
      solution:
        'Vertex $A$ sends no diagonal to itself or to its two neighbors, so it reaches $15 - 3 = 12$ of the vertices ✓ — the dashed fan in the figure has exactly $12$ lines. Check a second, independent way from the total: a $15$-gon has $\\frac{15 \\times 12}{2} = 90$ diagonals with two ends apiece, split over $15$ vertices, giving $\\frac{90 \\times 2}{15} = 12$ per vertex ✓. (The choice $14$ is CONNECTING TO EVERY OTHER VERTEX, sides included ✗; $90$ is ANSWERING THE TOTAL DIAGONAL COUNT ✗; $13$ is SUBTRACTING ONLY THE TWO NEIGHBORS and forgetting the vertex itself ✗.)',
    },
  ],
  // s6 — equal sides (or equal angles) is not enough for regular.
  [
    {
      q: 'A leaning garden trellis panel is the quadrilateral shown: the tick marks show all four sides are the same length, yet the panel is NOT a regular polygon. Why not?',
      fig: {
        view: [-1, -1, 6, 3.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [4.93, 2.3], [1.9284, 2.2981]], fill: false },
          { t: 'tick', a: [0, 0], b: [3, 0], n: 1 },
          { t: 'tick', a: [3, 0], b: [4.93, 2.3], n: 1 },
          { t: 'tick', a: [4.93, 2.3], b: [1.9284, 2.2981], n: 1 },
          { t: 'tick', a: [1.9284, 2.2981], b: [0, 0], n: 1 },
        ],
      },
      choices: ['Its four angles are not all equal', 'Its four sides are not all equal', 'No quadrilateral can ever be regular', 'It has the wrong number of sides to be regular'],
      answer: 0,
      solution:
        'Regular demands two things at once: all sides equal AND all angles equal. The tick marks grant the side test, but the lean makes two angles sharp and two wide, so the angle test fails and the panel is not regular ✓ — it is a rhombus. Check a second, independent way against the shape that passes: straighten the lean until every corner is $90^\\circ$ and the panel becomes a square, the one regular quadrilateral; the lean is exactly what it loses ✓. (The choice about unequal sides is CONTRADICTING THE TICK MARKS ✗; “no quadrilateral can be regular” is FORGETTING THE SQUARE ✗; “wrong number of sides” is INVENTING A SIDE-COUNT RULE — regular polygons exist for every $n \\geq 3$ ✗.)',
    },
    {
      q: 'A picture frame is the quadrilateral shown: the corner marks show all four angles are right angles, yet the frame is NOT a regular polygon. Why not?',
      fig: {
        view: [-1, -1, 6, 3.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [5, 2.5], [0, 2.5]], fill: false },
          { t: 'right', at: [0, 0], from: [5, 0], to: [0, 2.5] },
          { t: 'right', at: [5, 0], from: [0, 0], to: [5, 2.5] },
          { t: 'right', at: [5, 2.5], from: [5, 0], to: [0, 2.5] },
          { t: 'right', at: [0, 2.5], from: [0, 0], to: [5, 2.5] },
          { t: 'tick', a: [0, 0], b: [5, 0], n: 1 },
          { t: 'tick', a: [5, 0], b: [5, 2.5], n: 2 },
        ],
      },
      choices: ['Its angles are not all equal', 'Its sides are not all equal', 'A polygon with four right angles cannot exist', 'Only polygons with more than four sides can be regular'],
      answer: 1,
      solution:
        'Regular requires equal angles AND equal sides, both at once. This rectangle aces the angle test — four matching $90^\\circ$ corners — but its long sides and short sides differ, so the side test fails and it is not regular ✓. Check a second, independent way against the square: shrink the long sides until all four match and the frame becomes a square, which passes both tests; the mismatch in side lengths is the only thing in the way ✓. (The choice about unequal angles is CONTRADICTING THE CORNER MARKS ✗; “four right angles cannot exist” is DENYING RECTANGLES ✗; “more than four sides” is INVENTING A SIDE-COUNT RULE — the square is a regular polygon with exactly four ✗.)',
    },
    {
      q: 'A kite shop sells the tilted quadrilateral sail shown, with tick marks confirming all four edges are the same length. A customer claims it must be a regular polygon. What is wrong with the claim?',
      fig: {
        view: [-1, -1, 7.2, 3.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.5, 0], [6.18, 2.25], [2.68, 2.25]], fill: false },
          { t: 'tick', a: [0, 0], b: [3.5, 0], n: 1 },
          { t: 'tick', a: [3.5, 0], b: [6.18, 2.25], n: 1 },
          { t: 'tick', a: [6.18, 2.25], b: [2.68, 2.25], n: 1 },
          { t: 'tick', a: [2.68, 2.25], b: [0, 0], n: 1 },
        ],
      },
      choices: ['Its sides are not all equal, so the tick marks are wrong', 'It is concave, and concave polygons are never regular', 'Its angles are not all equal, so it fails half of the definition', 'The claim is fine: equal sides alone make a polygon regular'],
      answer: 2,
      solution:
        'Equal sides is only half of the definition — regular also demands equal angles. The sail’s tilt squeezes two opposite corners into sharp angles and stretches the other two wide, so the angle test fails and the sail is not regular ✓ — it is a rhombus. Check a second, independent way with a thought experiment: keep all four edge lengths fixed and the frame can still flex through many different shapes, only one of which — the square — has equal angles; equal sides alone cannot pin the shape down, so it cannot guarantee regular ✓. (The wrong-tick-marks choice is CONTRADICTING THE FIGURE ✗; the concave claim is MISREADING THE SHAPE — the sail has no reflex angle ✗; accepting the claim is TAKING EQUAL SIDES AS ENOUGH, half the definition ✗.)',
    },
  ],
  // s7 — total diagonals of a bigger polygon, by formula.
  [
    {
      q: 'A round-table council of $10$ delegates sits at the corners of a decagon-shaped table, and a private phone line connects every pair of delegates who are not seated side by side. How many phone lines is that — in other words, how many diagonals does a decagon have?',
      choices: ['$45$', '$70$', '$40$', '$35$'],
      answer: 3,
      solution:
        'Apply $\\frac{n(n-3)}{2}$ with $n = 10$: each delegate skips herself and her two neighbors, reaching $10 - 3 = 7$ others, and halving the $10 \\times 7 = 70$ line-ends gives $\\frac{70}{2} = 35$ ✓. Check a second, independent way with all pairs: $\\frac{10 \\times 9}{2} = 45$ pairs of delegates, minus the $10$ side-by-side pairs along the table’s edges, leaves $45 - 10 = 35$ ✓. (The choice $70$ is FORGETTING TO HALVE ✗; $45$ is COUNTING EVERY PAIR, neighbors included ✗; $40$ is USING $n - 2$ INSTEAD OF $n - 3$, forgetting the vertex itself ✗.)',
    },
    {
      q: 'An artist stretches string across an $11$-gon frame, one string for every diagonal. How many strings does the piece need?',
      choices: ['$44$', '$88$', '$55$', '$35$'],
      answer: 0,
      solution:
        'Use $\\frac{n(n-3)}{2}$ with $n = 11$: each of the $11$ corners anchors $11 - 3 = 8$ strings, and halving the $11 \\times 8 = 88$ string-ends gives $\\frac{88}{2} = 44$ ✓. Check a second, independent way with all pairs: $\\frac{11 \\times 10}{2} = 55$ corner pairs, minus the $11$ pairs already joined by the frame’s edges, leaves $55 - 11 = 44$ ✓. (The choice $88$ is FORGETTING TO HALVE ✗; $55$ is COUNTING EVERY PAIR, frame edges included ✗; $35$ is DROPPING A SIDE and computing the $10$-gon’s count ✗.)',
    },
    {
      q: 'A botanical maze is laid out as a $13$-gon, with a sight line surveyed along every diagonal. How many sight lines are surveyed?',
      choices: ['$78$', '$130$', '$54$', '$65$'],
      answer: 3,
      solution:
        'Use $\\frac{n(n-3)}{2}$ with $n = 13$: every corner sees $13 - 3 = 10$ non-neighbors, and halving the $13 \\times 10 = 130$ line-ends gives $\\frac{130}{2} = 65$ ✓. Check a second, independent way with all pairs: $\\frac{13 \\times 12}{2} = 78$ pairs of corners, minus the $13$ neighboring pairs along the maze walls, leaves $78 - 13 = 65$ ✓. (The choice $130$ is FORGETTING TO HALVE ✗; $78$ is COUNTING EVERY PAIR, walls included ✗; $54$ is DROPPING A SIDE and computing the $12$-gon’s count ✗.)',
    },
  ],
  // s8 — from the diagonal count back to the side count.
  [
    {
      q: 'A convex polygon has exactly $14$ diagonals. How many sides does it have?',
      choices: ['$7$', '$4$', '$8$', '$6$'],
      answer: 0,
      solution:
        'Set $\\frac{n(n-3)}{2} = 14$, so $n(n-3) = 28$: we need two numbers $3$ apart with product $28$, and $7 \\times 4 = 28$ ✓, so $n = 7$. The quadratic route agrees: $n^2 - 3n - 28 = 0$ factors as $(n-7)(n+4) = 0$, and only $n = 7$ is positive ✓. Check a second, independent way with a quick table: $n = 6$ gives $\\frac{6 \\times 3}{2} = 9$, $n = 7$ gives $\\frac{7 \\times 4}{2} = 14$ ✓, $n = 8$ gives $\\frac{8 \\times 5}{2} = 20$ — since the count only climbs, $7$ is the only answer. (The choice $4$ is REPORTING $n - 3$ instead of $n$ ✗; $8$ is OVERSHOOTING BY ONE, which would mean $20$ diagonals ✗; $6$ is STOPPING ONE SHORT, which would mean $9$ ✗.)',
    },
    {
      q: 'A network engineer wires a ring of computers so that every non-adjacent pair gets a direct cable, and the diagram ends up with exactly $90$ such cables. How many computers are in the ring?',
      choices: ['$12$', '$16$', '$15$', '$14$'],
      answer: 2,
      solution:
        'The cables are the diagonals of an $n$-gon, so $\\frac{n(n-3)}{2} = 90$ and $n(n-3) = 180$: two numbers $3$ apart with product $180$ are $15 \\times 12 = 180$ ✓, so $n = 15$. The quadratic route agrees: $n^2 - 3n - 180 = 0$ factors as $(n-15)(n+12) = 0$, and only $n = 15$ is positive ✓. Check a second, independent way with a table: $n = 14$ gives $\\frac{14 \\times 11}{2} = 77$, $n = 15$ gives $\\frac{15 \\times 12}{2} = 90$ ✓, $n = 16$ gives $\\frac{16 \\times 13}{2} = 104$ — the count climbs right past $90$ only at $15$. (The choice $12$ is REPORTING $n - 3$ ✗; $16$ is OVERSHOOTING BY ONE, worth $104$ cables ✗; $14$ is STOPPING ONE SHORT, worth $77$ ✗.)',
    },
    {
      q: 'A stained-glass rose window is a convex polygon with exactly $104$ diagonals leaded into the design. How many sides does the window have?',
      choices: ['$13$', '$15$', '$17$', '$16$'],
      answer: 3,
      solution:
        'Set $\\frac{n(n-3)}{2} = 104$, so $n(n-3) = 208$: two numbers $3$ apart with product $208$ are $16 \\times 13 = 208$ ✓, so $n = 16$. The quadratic route agrees: $n^2 - 3n - 208 = 0$ factors as $(n-16)(n+13) = 0$, and only $n = 16$ is positive ✓. Check a second, independent way with a table: $n = 15$ gives $\\frac{15 \\times 12}{2} = 90$, $n = 16$ gives $\\frac{16 \\times 13}{2} = 104$ ✓, $n = 17$ gives $\\frac{17 \\times 14}{2} = 119$ — since $n(n-3)$ only grows, $16$ is the only fit. (The choice $13$ is REPORTING $n - 3$ ✗; $15$ is STOPPING ONE SHORT, worth $90$ diagonals ✗; $17$ is OVERSHOOTING BY ONE, worth $119$ ✗.)',
    },
  ],
  // s9 — from the diagonal count back to the side count, second pass.
  [
    {
      q: 'A convex polygon has exactly $9$ diagonals. How many sides does it have?',
      choices: ['$6$', '$3$', '$7$', '$5$'],
      answer: 0,
      solution:
        'Set $\\frac{n(n-3)}{2} = 9$, so $n(n-3) = 18$: two numbers $3$ apart with product $18$ are $6 \\times 3 = 18$ ✓, so $n = 6$. The quadratic route agrees: $n^2 - 3n - 18 = 0$ factors as $(n-6)(n+3) = 0$, and only $n = 6$ is positive ✓. Check a second, independent way with a table: $n = 5$ gives $\\frac{5 \\times 2}{2} = 5$, $n = 6$ gives $\\frac{6 \\times 3}{2} = 9$ ✓, $n = 7$ gives $\\frac{7 \\times 4}{2} = 14$ — the count passes $9$ exactly once. (The choice $3$ is REPORTING $n - 3$ ✗; $7$ is OVERSHOOTING BY ONE, worth $14$ diagonals ✗; $5$ is STOPPING ONE SHORT, worth $5$ ✗.)',
    },
    {
      q: 'An architect’s blueprint of a polygonal courtyard shows exactly $27$ diagonals drawn corner to corner. How many sides does the courtyard have?',
      choices: ['$8$', '$9$', '$6$', '$10$'],
      answer: 1,
      solution:
        'Set $\\frac{n(n-3)}{2} = 27$, so $n(n-3) = 54$: two numbers $3$ apart with product $54$ are $9 \\times 6 = 54$ ✓, so $n = 9$. The quadratic route agrees: $n^2 - 3n - 54 = 0$ factors as $(n-9)(n+6) = 0$, and only $n = 9$ is positive ✓. Check a second, independent way with a table: $n = 8$ gives $\\frac{8 \\times 5}{2} = 20$, $n = 9$ gives $\\frac{9 \\times 6}{2} = 27$ ✓, $n = 10$ gives $\\frac{10 \\times 7}{2} = 35$ — since the count only climbs, $9$ is the lone answer. (The choice $6$ is REPORTING $n - 3$ ✗; $8$ is STOPPING ONE SHORT, worth $20$ diagonals ✗; $10$ is OVERSHOOTING BY ONE, worth $35$ ✗.)',
    },
    {
      q: 'A puzzle magazine prints a convex polygon whose interior is crossed by exactly $119$ diagonals. How many sides must the polygon have?',
      choices: ['$14$', '$18$', '$16$', '$17$'],
      answer: 3,
      solution:
        'Set $\\frac{n(n-3)}{2} = 119$, so $n(n-3) = 238$: two numbers $3$ apart with product $238$ are $17 \\times 14 = 238$ ✓, so $n = 17$. The quadratic route agrees: $n^2 - 3n - 238 = 0$ factors as $(n-17)(n+14) = 0$, and only $n = 17$ is positive ✓. Check a second, independent way with a table: $n = 16$ gives $\\frac{16 \\times 13}{2} = 104$, $n = 17$ gives $\\frac{17 \\times 14}{2} = 119$ ✓, $n = 18$ gives $\\frac{18 \\times 15}{2} = 135$ — the climbing count lands on $119$ only once. (The choice $14$ is REPORTING $n - 3$ ✗; $16$ is STOPPING ONE SHORT, worth $104$ diagonals ✗; $18$ is OVERSHOOTING BY ONE, worth $135$ ✗.)',
    },
  ],
  // s10 — diagonals equal to a multiple of the sides.
  [
    {
      q: 'A convex polygon has exactly four times as many diagonals as sides. How many sides does it have?',
      choices: ['$7$', '$11$', '$8$', '$12$'],
      answer: 1,
      solution:
        'Translate to an equation: $\\frac{n(n-3)}{2} = 4n$. Doubling gives $n(n-3) = 8n$, and since $n \\neq 0$ we may divide by $n$: $n - 3 = 8$, so $n = 11$ ✓. Check a second, independent way with the forward formula: an $11$-gon has $\\frac{11 \\times 8}{2} = 44$ diagonals, and $44 = 4 \\times 11$ ✓ — while the nearest ratios miss, since $n = 9$ gives $\\frac{27}{9} = 3$ times and $n = 13$ gives $\\frac{65}{13} = 5$ times. (The choice $7$ is FORGETTING TO DOUBLE and solving $n - 3 = 4$ ✗; $8$ is REPORTING $n - 3$ instead of $n$ ✗; $12$ is OVERSHOOTING BY ONE — a $12$-gon’s $54$ diagonals are $4.5$ times its sides ✗.)',
    },
    {
      q: 'In a certain convex polygon, the number of diagonals is exactly five times the number of sides. Find the number of sides.',
      choices: ['$8$', '$10$', '$13$', '$12$'],
      answer: 2,
      solution:
        'Set up $\\frac{n(n-3)}{2} = 5n$. Doubling gives $n(n-3) = 10n$, and dividing by the nonzero $n$ leaves $n - 3 = 10$, so $n = 13$ ✓. Check a second, independent way with the forward formula: a $13$-gon has $\\frac{13 \\times 10}{2} = 65$ diagonals, and $65 = 5 \\times 13$ ✓ — the neighboring $11$-gon manages only $\\frac{44}{11} = 4$ times. (The choice $8$ is FORGETTING TO DOUBLE and solving $n - 3 = 5$ ✗; $10$ is REPORTING $n - 3$ ✗; $12$ is STOPPING ONE SHORT — a $12$-gon’s $54$ diagonals are $4.5$ times its sides, not $5$ ✗.)',
    },
    {
      q: 'A convex polygon used in a mosaic has exactly six times as many diagonals as sides. How many sides does the mosaic piece have?',
      choices: ['$9$', '$12$', '$16$', '$15$'],
      answer: 3,
      solution:
        'Translate to an equation: $\\frac{n(n-3)}{2} = 6n$. Doubling gives $n(n-3) = 12n$, and dividing by the nonzero $n$ leaves $n - 3 = 12$, so $n = 15$ ✓. Check a second, independent way with the forward formula: a $15$-gon has $\\frac{15 \\times 12}{2} = 90$ diagonals, and $90 = 6 \\times 15$ ✓ — while $n = 13$ gives only $\\frac{65}{13} = 5$ times and each added pair of sides raises the multiple by one. (The choice $9$ is FORGETTING TO DOUBLE and solving $n - 3 = 6$ ✗; $12$ is REPORTING $n - 3$ ✗; $16$ is OVERSHOOTING BY ONE — a $16$-gon’s $104$ diagonals are $6.5$ times its sides ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 9,
  sections: {
    '9.1': s91,
  },
}
