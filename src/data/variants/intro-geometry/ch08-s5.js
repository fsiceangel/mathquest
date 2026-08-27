// Introduction to Geometry chapter 8 — variations for section 8.5 (Rectangles).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every numeric key was worked twice by routes that do not share arithmetic:
//    a Pythagorean sum against a scaled triple, a Pythagorean subtraction
//    against a difference-of-squares factoring, a diagonal-property chase
//    against a coordinate computation, and the isosceles-triangle angle chase
//    against the exterior angle theorem. Both routes must agree before a key
//    is written down.
//  - Figures are built from their own numbers: every labelled length matches
//    its drawn coordinates, every right marker was checked against a dot
//    product, and every labelled angle is drawn at its true measure.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution.
//  - No two choices inside an item name the same value.

const s85 = [
  // s1 — two sides given: the diagonal is a hypotenuse.
  [
    {
      q: 'Lena’s vegetable patch is a rectangle $12$ m long and $9$ m wide. She runs a straight drip hose from one corner of the patch to the opposite corner. How long is the hose?',
      fig: {
        view: [-1, -1.5, 13.5, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 9], [0, 9]], fill: false },
          { t: 'seg', a: [0, 0], b: [12, 9], dash: true },
          { t: 'right', at: [12, 0], from: [0, 0], to: [12, 9] },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [12, 4.5], text: '9', dx: 12, dy: 0 },
          { t: 'label', p: [6, 4.5], text: '?', dx: -8, dy: -8 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [12, 9], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 9], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$15$', '$21$', '$42$', '$108$'],
      answer: 0,
      solution:
        'The hose is the hypotenuse of a right triangle whose legs are the two sides of the patch: $d = \\sqrt{12^2 + 9^2} = \\sqrt{144 + 81} = \\sqrt{225} = 15$ m ✓. Check a second, independent way by scaling a known triple: $9$ and $12$ are $3 \\times 3$ and $3 \\times 4$, so the hypotenuse is $3 \\times 5 = 15$ — the $3$-$4$-$5$ triangle magnified three times ✓. Guard: $9^2 + 12^2 = 81 + 144 = 225 = 15^2$ ✓. (The choice $21$ is ADDING THE SIDES $12 + 9$, as if the hose ran along two edges instead of cutting across ✗; $42$ is ANSWERING THE PERIMETER ✗; $108$ is ANSWERING THE AREA ✗.)',
    },
    {
      q: 'A practice field measures $28$ m by $21$ m. At the whistle, a player sprints in a straight line from one corner flag to the diagonally opposite corner flag. How far does she run?',
      fig: {
        w: 360,
        view: [-1.5, -2, 30, 23],
        elems: [
          { t: 'poly', pts: [[0, 0], [28, 0], [28, 21], [0, 21]], fill: false },
          { t: 'seg', a: [0, 0], b: [28, 21], dash: true },
          { t: 'right', at: [28, 0], from: [0, 0], to: [28, 21] },
          { t: 'label', p: [14, 0], text: '28', dx: 0, dy: 14 },
          { t: 'label', p: [28, 10.5], text: '21', dx: 14, dy: 0 },
          { t: 'label', p: [14, 10.5], text: '?', dx: -8, dy: -8 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [28, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [28, 21], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 21], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$98$', '$49$', '$35$', '$588$'],
      answer: 2,
      solution:
        'The sprint is the hypotenuse of a right triangle with legs $28$ and $21$: $d = \\sqrt{28^2 + 21^2} = \\sqrt{784 + 441} = \\sqrt{1225} = 35$ m ✓. Check a second, independent way by scaling a known triple: $21$ and $28$ are $7 \\times 3$ and $7 \\times 4$, so the hypotenuse is $7 \\times 5 = 35$ ✓. Guard: $21^2 + 28^2 = 441 + 784 = 1225 = 35^2$ ✓. (The choice $49$ is ADDING THE SIDES $28 + 21$, the two-edge detour instead of the straight cut ✗; $98$ is ANSWERING THE PERIMETER ✗; $588$ is ANSWERING THE AREA ✗.)',
    },
    {
      q: 'A stage platform is $30$ ft long and $16$ ft deep. A technician tapes a cable straight across the platform from one corner to the opposite corner. Find the length of the taped cable.',
      fig: {
        w: 400,
        view: [-1.5, -1.5, 31.5, 17.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [30, 0], [30, 16], [0, 16]], fill: false },
          { t: 'seg', a: [0, 0], b: [30, 16], dash: true },
          { t: 'right', at: [30, 0], from: [0, 0], to: [30, 16] },
          { t: 'label', p: [15, 0], text: '30', dx: 0, dy: 14 },
          { t: 'label', p: [30, 8], text: '16', dx: 14, dy: 0 },
          { t: 'label', p: [15, 8], text: '?', dx: -8, dy: -8 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [30, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [30, 16], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 16], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$46$', '$92$', '$480$', '$34$'],
      answer: 3,
      solution:
        'The cable is the hypotenuse of a right triangle with legs $30$ and $16$: $d = \\sqrt{30^2 + 16^2} = \\sqrt{900 + 256} = \\sqrt{1156} = 34$ ft ✓. Check a second, independent way by scaling a known triple: $16$ and $30$ are $2 \\times 8$ and $2 \\times 15$, so the hypotenuse is $2 \\times 17 = 34$ — the $8$-$15$-$17$ triple doubled ✓. Guard: $16^2 + 30^2 = 256 + 900 = 1156 = 34^2$ ✓. (The choice $46$ is ADDING THE SIDES $30 + 16$ ✗; $92$ is ANSWERING THE PERIMETER ✗; $480$ is ANSWERING THE AREA ✗.)',
    },
  ],
  // s2 — one right angle turns a parallelogram into a rectangle.
  [
    {
      q: 'Mia builds a picture frame that she knows is a parallelogram. Checking with a carpenter’s square, she finds one corner is exactly $90^\\circ$. What can she conclude about the frame?',
      choices: [
        'Only the corner opposite the measured one must be $90^\\circ$; the neighbors can differ',
        'All four corners are $90^\\circ$ — the frame is a rectangle',
        'The frame must be a square',
        'Nothing follows until she measures a second corner',
      ],
      answer: 1,
      solution:
        'One right angle spreads to all four. Consecutive angles of a parallelogram are supplementary, so each neighbor of the $90^\\circ$ corner measures $180^\\circ - 90^\\circ = 90^\\circ$, and the fourth corner, opposite the first, matches it at $90^\\circ$ — the frame is a rectangle ✓. Check a second, independent way through the angle sum: opposite angles of a parallelogram are equal, so the corner across from the measured one is also $90^\\circ$; the remaining two corners are equal to each other and must share $360^\\circ - 180^\\circ = 180^\\circ$, so each is $90^\\circ$ as well ✓. (Stopping at the opposite corner alone is STOPPING AT THE OPPOSITE CORNER — the supplementary rule forces the neighbors too ✗; a square needs four equal sides, which no angle measurement delivers, so that choice is JUMPING TO A SQUARE ✗; asking for a second measurement is DEMANDING MORE DATA the parallelogram structure has already supplied ✗.)',
    },
    {
      q: 'A surveyor certifies that a plot of land is a parallelogram, then measures one of its corners at exactly $90^\\circ$. What follows about the plot?',
      choices: [
        'The other three corners can be any sizes totalling $270^\\circ$',
        'Exactly two of the corners are right angles, and the other two are not',
        'All four corners are right angles — the plot is a rectangle',
        'The plot must be a square',
      ],
      answer: 2,
      solution:
        'In a parallelogram, consecutive angles add to $180^\\circ$, so both neighbors of the measured corner are $180^\\circ - 90^\\circ = 90^\\circ$, and the opposite corner equals the first at $90^\\circ$: every corner is a right angle, so the plot is a rectangle ✓. Check a second, independent way with the opposite-angle rule: the corner across the plot equals $90^\\circ$, and the other pair of opposite corners are equal and together make up $360^\\circ - 180^\\circ = 180^\\circ$, forcing $90^\\circ$ each ✓. (Letting the rest float is FREEING THE ANGLE SUM — a parallelogram pins each corner individually, not just the total ✗; a parallelogram can never hold exactly two right angles, since one right angle infects all four, so that choice is STOPPING AT TWO CORNERS ✗; equal sides are a separate question entirely — JUMPING TO A SQUARE ✗.)',
    },
    {
      q: 'A desktop is cut in the shape of a parallelogram. A set square fits perfectly into one of its corners. What must be true of the desktop?',
      choices: [
        'The desktop has exactly one right angle and three oblique corners',
        'Only the corner diagonally opposite also fits the set square',
        'The set square fits two corners and fails at the other two',
        'The set square fits all four corners — the desktop is a rectangle',
      ],
      answer: 3,
      solution:
        'A perfect fit means the corner is $90^\\circ$. Consecutive angles of a parallelogram are supplementary, so the two corners adjacent to it measure $180^\\circ - 90^\\circ = 90^\\circ$, and the opposite corner matches at $90^\\circ$: the set square fits everywhere, and the desktop is a rectangle ✓. Check a second, independent way through the angle sum: the opposite corner equals the fitted one ($90^\\circ$), leaving $180^\\circ$ to be split evenly between the remaining equal pair — $90^\\circ$ apiece ✓. (A lone right angle is impossible here, because supplementary neighbors copy it — KEEPING A LONE RIGHT ANGLE ✗; crediting only the far corner is STOPPING AT THE OPPOSITE CORNER ✗; a two-and-two split is STOPPING AT TWO CORNERS, which the same supplementary rule forbids ✗.)',
    },
  ],
  // s3 — half-diagonal AM given: recover the whole diagonal BD.
  [
    {
      q: 'A rectangular courtyard $ABCD$ has two straight paved walkways, one along each diagonal, and they cross at a fountain $M$. Walking the paved line from corner $A$ to the fountain covers $6.5$ m. How long is the full walkway $\\overline{BD}$?',
      fig: {
        view: [-1, -1.5, 13.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 5], [0, 5]], fill: false },
          { t: 'seg', a: [0, 0], b: [12, 5], dash: true },
          { t: 'seg', a: [12, 0], b: [0, 5], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [12, 5], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 5], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [6, 2.5], label: 'M', dx: 2, dy: -12 },
        ],
      },
      choices: ['$6.5$', '$3.25$', '$26$', '$13$'],
      answer: 3,
      solution:
        'The diagonals of a rectangle bisect each other, so $M$ is the midpoint of $\\overline{AC}$ and $AC = 2 \\cdot AM = 13$; and since a rectangle’s diagonals are equal, $BD = AC = 13$ m ✓. Check a second, independent way through the center: $M$ is equidistant from all four corners of a rectangle, so $MB = MD = MA = 6.5$, and $BD = MB + MD = 6.5 + 6.5 = 13$ ✓. (The choice $6.5$ is STOPPING AT THE HALF-DIAGONAL — that is the fountain leg, not the full walkway ✗; $3.25$ is HALVING WHAT IS ALREADY A HALF ✗; $26$ is DOUBLING THE FULL DIAGONAL, one doubling too many ✗.)',
    },
    {
      q: 'On a rectangular corkboard $ABCD$, two ribbons are stretched corner to corner along the diagonals, crossing at a pin $M$. The stretch of ribbon from corner $A$ to the pin measures $10.5$ inches. Find the length of the ribbon $\\overline{BD}$.',
      fig: {
        view: [-1, -1.5, 12.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [11, 6], [0, 6]], fill: false },
          { t: 'seg', a: [0, 0], b: [11, 6], dash: true },
          { t: 'seg', a: [11, 0], b: [0, 6], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [11, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [11, 6], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 6], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [5.5, 3], label: 'M', dx: 2, dy: -12 },
        ],
      },
      choices: ['$21$', '$10.5$', '$42$', '$5.25$'],
      answer: 0,
      solution:
        'Because the diagonals of a rectangle bisect each other, $AC = 2 \\cdot AM = 21$; because they are also equal, the other ribbon matches it: $BD = AC = 21$ inches ✓. Check a second, independent way through the center: the pin $M$ sits the same distance from every corner, so $MB = MD = AM = 10.5$ and $BD = 10.5 + 10.5 = 21$ ✓. (The choice $10.5$ is STOPPING AT THE HALF-DIAGONAL ✗; $5.25$ is HALVING WHAT IS ALREADY A HALF ✗; $42$ is DOUBLING THE FULL DIAGONAL after it was already assembled ✗.)',
    },
    {
      q: 'The rectangular ceiling $ABCD$ of a warehouse is braced by two steel cables running along its diagonals, which cross at a joint $M$. The cable stretch from corner $A$ to the joint is $13.5$ ft. How long is the full cable $\\overline{BD}$?',
      fig: {
        view: [-1, -1.5, 11.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 7], [0, 7]], fill: false },
          { t: 'seg', a: [0, 0], b: [10, 7], dash: true },
          { t: 'seg', a: [10, 0], b: [0, 7], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [10, 7], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 7], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [5, 3.5], label: 'M', dx: 2, dy: -12 },
        ],
      },
      choices: ['$13.5$', '$54$', '$27$', '$6.75$'],
      answer: 2,
      solution:
        'The diagonals of a rectangle bisect each other, so $AC = 2 \\cdot AM = 27$; and equal diagonals hand the same length to the other cable: $BD = AC = 27$ ft ✓. Check a second, independent way through the center: the joint $M$ is equidistant from all four corners, so $MB = MD = 13.5$ and $BD = MB + MD = 27$ ✓. (The choice $13.5$ is STOPPING AT THE HALF-DIAGONAL — only the stretch to the joint ✗; $6.75$ is HALVING WHAT IS ALREADY A HALF ✗; $54$ is DOUBLING THE FULL DIAGONAL a second time ✗.)',
    },
  ],
  // s4 — diagonal and one side given: Pythagoras first, then area.
  [
    {
      q: 'A rectangular tabletop has a diagonal of length $25$ in, and one side measures $20$ in. What is the area of the tabletop?',
      fig: {
        w: 360,
        view: [-1, -1.5, 21.5, 16.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [20, 15], [0, 15]], fill: false },
          { t: 'seg', a: [0, 0], b: [20, 15], dash: true },
          { t: 'right', at: [20, 0], from: [0, 0], to: [20, 15] },
          { t: 'label', p: [10, 0], text: '20', dx: 0, dy: 14 },
          { t: 'label', p: [20, 7.5], text: '?', dx: 12, dy: 0 },
          { t: 'label', p: [10, 7.5], text: '25', dx: -10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [20, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [20, 15], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 15], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$300$', '$500$', '$250$', '$70$'],
      answer: 0,
      solution:
        'The diagonal is a hypotenuse over the two sides, so the missing side is $\\sqrt{25^2 - 20^2} = \\sqrt{625 - 400} = \\sqrt{225} = 15$ — the $15$-$20$-$25$ triple, five times $3$-$4$-$5$ — and the area is $20 \\times 15 = 300$ square inches ✓. Check the subtraction a second, independent way with a difference of squares: $25^2 - 20^2 = (25 - 20)(25 + 20) = 5 \\times 45 = 225$, and $\\sqrt{225} = 15$ again ✓. Guard: $15^2 + 20^2 = 225 + 400 = 625 = 25^2$ ✓. (The choice $500$ is MULTIPLYING THE DIAGONAL BY THE SIDE — but the diagonal is not a side ✗; $250$ is TREATING THE PAIR AS RHOMBUS DIAGONALS with $\\frac{d_1 d_2}{2}$ ✗; $70$ is ANSWERING THE PERIMETER ✗.)',
    },
    {
      q: 'A rectangular garden tarp has a diagonal of $20$ ft, and one edge of the tarp is $12$ ft long. Find the area the tarp covers.',
      fig: {
        view: [-1, -1.5, 17.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [16, 12], [0, 12]], fill: false },
          { t: 'seg', a: [0, 0], b: [16, 12], dash: true },
          { t: 'right', at: [16, 0], from: [0, 0], to: [16, 12] },
          { t: 'label', p: [8, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [16, 6], text: '12', dx: 14, dy: 0 },
          { t: 'label', p: [8, 6], text: '20', dx: -10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [16, 12], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 12], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$240$', '$192$', '$120$', '$56$'],
      answer: 1,
      solution:
        'The unknown edge closes a right triangle with the diagonal as hypotenuse: $\\sqrt{20^2 - 12^2} = \\sqrt{400 - 144} = \\sqrt{256} = 16$ — the $12$-$16$-$20$ family, four times $3$-$4$-$5$ — so the area is $16 \\times 12 = 192$ square feet ✓. Check the subtraction a second, independent way with a difference of squares: $20^2 - 12^2 = (20 - 12)(20 + 12) = 8 \\times 32 = 256$, and $\\sqrt{256} = 16$ again ✓. Guard: $12^2 + 16^2 = 144 + 256 = 400 = 20^2$ ✓. (The choice $240$ is MULTIPLYING THE DIAGONAL BY THE SIDE ✗; $120$ is TREATING THE PAIR AS RHOMBUS DIAGONALS ✗; $56$ is ANSWERING THE PERIMETER ✗.)',
    },
    {
      q: 'A photo print has a diagonal of $37$ cm, and its longer side measures $35$ cm. What is the area of the print?',
      fig: {
        view: [-2, -3.5, 39.5, 17],
        elems: [
          { t: 'poly', pts: [[0, 0], [35, 0], [35, 12], [0, 12]], fill: false },
          { t: 'seg', a: [0, 0], b: [35, 12], dash: true },
          { t: 'right', at: [35, 0], from: [0, 0], to: [35, 12] },
          { t: 'label', p: [17.5, 0], text: '35', dx: 0, dy: 14 },
          { t: 'label', p: [35, 6], text: '?', dx: 12, dy: 0 },
          { t: 'label', p: [17.5, 6], text: '37', dx: -10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [35, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [35, 12], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 12], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$1295$', '$647.5$', '$94$', '$420$'],
      answer: 3,
      solution:
        'The shorter side is the missing leg under the diagonal: $\\sqrt{37^2 - 35^2} = \\sqrt{1369 - 1225} = \\sqrt{144} = 12$, so the area is $35 \\times 12 = 420$ square centimeters ✓. Check the subtraction a second, independent way with a difference of squares: $37^2 - 35^2 = (37 - 35)(37 + 35) = 2 \\times 72 = 144$, and $\\sqrt{144} = 12$ again ✓. Guard: $12^2 + 35^2 = 144 + 1225 = 1369 = 37^2$ — the $12$-$35$-$37$ triple ✓. (The choice $1295$ is MULTIPLYING THE DIAGONAL BY THE SIDE ✗; $647.5$ is TREATING THE PAIR AS RHOMBUS DIAGONALS ✗; $94$ is ANSWERING THE PERIMETER $2(35 + 12)$ ✗.)',
    },
  ],
  // s5 — equal diagonals set up an equation in x.
  [
    {
      q: 'A rectangular garden gate $PQRS$ is stiffened by two straight braces along its diagonals: $PR = 5x - 8$ and $QS = 3x + 4$. What is the length of each brace?',
      choices: ['$6$', '$11$', '$22$', '$44$'],
      answer: 2,
      solution:
        'The diagonals of a rectangle are equal, so $5x - 8 = 3x + 4$, which gives $2x = 12$ and $x = 6$; then $PR = 5(6) - 8 = 22$ ✓. Check a second, independent way through the other brace: $QS = 3(6) + 4 = 22$ — both expressions land on the same length, exactly as equal diagonals demand ✓. (The choice $6$ is ANSWERING $x$, a bookkeeping variable rather than a length ✗; $11$ is ANSWERING THE HALF-DIAGONAL, the piece from a corner to the center ✗; $44$ is ADDING THE TWO DIAGONALS as if the question wanted their total ✗.)',
    },
    {
      q: 'In a rectangular window frame $PQRS$, the two diagonals measure $PR = 5x - 12$ and $QS = 2x + 21$. Find the length of each diagonal.',
      choices: ['$11$', '$43$', '$21.5$', '$86$'],
      answer: 1,
      solution:
        'Equal diagonals give $5x - 12 = 2x + 21$, so $3x = 33$ and $x = 11$; then $PR = 5(11) - 12 = 43$ ✓. Check a second, independent way through the other diagonal: $QS = 2(11) + 21 = 43$ — the agreement of the two expressions is the built-in verification ✓. (The choice $11$ is ANSWERING $x$ instead of the length it produces ✗; $21.5$ is ANSWERING THE HALF-DIAGONAL ✗; $86$ is ADDING THE TWO DIAGONALS ✗.)',
    },
    {
      q: 'A painter’s canvas is stretched on a rectangular frame $PQRS$ whose diagonals satisfy $PR = 4x - 9$ and $QS = 2x + 15$. How long is each diagonal?',
      choices: ['$39$', '$12$', '$19.5$', '$78$'],
      answer: 0,
      solution:
        'Because a rectangle’s diagonals are equal, $4x - 9 = 2x + 15$, so $2x = 24$ and $x = 12$; then $PR = 4(12) - 9 = 39$ ✓. Check a second, independent way through the other diagonal: $QS = 2(12) + 15 = 39$ — matching outputs confirm both the algebra and the geometry ✓. (The choice $12$ is ANSWERING $x$ ✗; $19.5$ is ANSWERING THE HALF-DIAGONAL, the run from a corner to the center ✗; $78$ is ADDING THE TWO DIAGONALS ✗.)',
    },
  ],
  // s6 — the extra condition that upgrades a parallelogram to a rectangle.
  [
    {
      q: 'A woodworker has glued up a frame that is guaranteed to be a parallelogram, and owns only a tape measure — no protractor. Which check would certify that the frame is a rectangle?',
      choices: [
        'Measure both diagonals and confirm they are equal',
        'Measure opposite sides and confirm they are equal',
        'Confirm the diagonals cut each other at their midpoints',
        'Measure all four sides and confirm they are equal',
      ],
      answer: 0,
      solution:
        'A parallelogram whose diagonals are equal must be a rectangle, so matching diagonal measurements certify the frame ✓ — and note the certificate leans on the parallelogram guarantee, since an isosceles trapezoid also has equal diagonals. Check a second, independent way with vectors: writing the sides out of one corner as $\\vec{u}$ and $\\vec{v}$, the diagonals have lengths $|\\vec{u} + \\vec{v}|$ and $|\\vec{u} - \\vec{v}|$; setting the squares equal cancels everything except $4\\,\\vec{u} \\cdot \\vec{v} = 0$, which is a right angle between the sides ✓. (Equal opposite sides hold in EVERY parallelogram, so that check is RESTATING A PARALLELOGRAM PROPERTY ✗; bisecting diagonals likewise come free — CHECKING WHAT IS ALREADY GIVEN ✗; four equal sides certify a rhombus, whose corners need not be right — CERTIFYING A RHOMBUS ✗.)',
    },
    {
      q: 'A glazier knows a window frame is a parallelogram and wants one more verified fact before calling it rectangular. Which property of the frame’s diagonals does the job?',
      choices: [
        'They are perpendicular to each other',
        'They bisect the corner angles they leave from',
        'They bisect each other',
        'They have equal lengths',
      ],
      answer: 3,
      solution:
        'Equal diagonals are the missing certificate: a parallelogram with equal diagonals is a rectangle ✓ — the test is honest only because the frame is already known to be a parallelogram, since equal diagonals alone would also fit an isosceles trapezoid. Check a second, independent way with congruent triangles: with equal diagonals, triangles $ABD$ and $BAC$ built on one side share that side and match side-for-side by SSS, so the two angles along it are equal; consecutive angles of a parallelogram are supplementary, and equal supplementary angles are $90^\\circ$ each ✓. (Perpendicular diagonals mark a rhombus, not a rectangle — BUILDING A RHOMBUS ✗; diagonals that bisect the corner angles are again rhombus behavior — BISECTING THE CORNERS ✗; bisecting each other happens in every parallelogram — RESTATING A PARALLELOGRAM PROPERTY ✗.)',
    },
    {
      q: 'A game court has been laid out as a parallelogram. Which single additional measurement result would prove the court is a rectangle?',
      choices: [
        'Its two diagonals are perpendicular',
        'Its opposite angles are equal',
        'Its two diagonals are equal in length',
        'Two consecutive sides are equal in length',
      ],
      answer: 2,
      solution:
        'For a parallelogram, equal diagonals force right angles, so measuring the two corner-to-corner distances and finding them equal proves the court is a rectangle ✓ — with the standing caution that this shortcut needs the parallelogram hypothesis, because an isosceles trapezoid also carries equal diagonals. Check a second, independent way with vectors: with sides $\\vec{u}$ and $\\vec{v}$ from one corner, $|\\vec{u} + \\vec{v}| = |\\vec{u} - \\vec{v}|$ squares out to $\\vec{u} \\cdot \\vec{v} = 0$, a $90^\\circ$ corner, which then spreads to all four ✓. (Perpendicular diagonals would prove a rhombus instead — BUILDING A RHOMBUS ✗; equal opposite angles hold in every parallelogram — RESTATING A PARALLELOGRAM PROPERTY ✗; equal consecutive sides push toward equal sides, not right angles — SLIDING TOWARD A RHOMBUS ✗.)',
    },
  ],
  // s7 — sides given: distance from the diagonals’ crossing to each vertex.
  [
    {
      q: 'A playground is a rectangle $15$ m by $8$ m. Two rope lines are stretched between opposite corners, and a flagpole stands where they cross, at $M$. How far is the flagpole from each corner of the playground?',
      fig: {
        view: [-1, -1.5, 16.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [15, 8], [0, 8]], fill: false },
          { t: 'seg', a: [0, 0], b: [15, 8], dash: true },
          { t: 'seg', a: [15, 0], b: [0, 8], dash: true },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [15, 4], text: '8', dx: 10, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [15, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [15, 8], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 8], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [7.5, 4], label: 'M', dx: 4, dy: -12 },
        ],
      },
      choices: ['$17$', '$7.5$', '$8.5$', '$11.5$'],
      answer: 2,
      solution:
        'Each rope is a diagonal of length $\\sqrt{15^2 + 8^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17$ — the $8$-$15$-$17$ triple. The diagonals of a rectangle are equal and bisect each other, so their crossing is the center, at distance $\\frac{17}{2} = 8.5$ m from every corner ✓. Check a second, independent way with coordinates: place the corners at $(0, 0)$, $(15, 0)$, $(15, 8)$, $(0, 8)$; the crossing is $M(7.5, 4)$, and $MA = \\sqrt{7.5^2 + 4^2} = \\sqrt{56.25 + 16} = \\sqrt{72.25} = 8.5$ ✓. (The choice $17$ is ANSWERING THE FULL DIAGONAL instead of the half that reaches a corner ✗; $7.5$ is HALVING THE LONGER SIDE ✗; $11.5$ is AVERAGING THE SIDES $\\frac{15 + 8}{2}$ ✗.)',
    },
    {
      q: 'A parking lot measures $40$ m by $9$ m. A light post is planted exactly where the lot’s two diagonals cross, at $M$. What is the distance from the post to each corner of the lot?',
      fig: {
        w: 440,
        view: [-2, -1.5, 42.5, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [40, 0], [40, 9], [0, 9]], fill: false },
          { t: 'seg', a: [0, 0], b: [40, 9], dash: true },
          { t: 'seg', a: [40, 0], b: [0, 9], dash: true },
          { t: 'label', p: [20, 0], text: '40', dx: 0, dy: 14 },
          { t: 'label', p: [40, 4.5], text: '9', dx: 10, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [40, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [40, 9], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 9], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [20, 4.5], label: 'M', dx: 4, dy: -12 },
        ],
      },
      choices: ['$41$', '$20$', '$24.5$', '$20.5$'],
      answer: 3,
      solution:
        'The diagonal is $\\sqrt{40^2 + 9^2} = \\sqrt{1600 + 81} = \\sqrt{1681} = 41$ — the $9$-$40$-$41$ triple. Equal, bisecting diagonals put the post at the center, distance $\\frac{41}{2} = 20.5$ m from each of the four corners ✓. Check a second, independent way with coordinates: with corners $(0, 0)$, $(40, 0)$, $(40, 9)$, $(0, 9)$, the crossing is $M(20, 4.5)$, and $MA = \\sqrt{20^2 + 4.5^2} = \\sqrt{400 + 20.25} = \\sqrt{420.25} = 20.5$ ✓. (The choice $41$ is ANSWERING THE FULL DIAGONAL ✗; $20$ is HALVING THE LONGER SIDE ✗; $24.5$ is AVERAGING THE SIDES $\\frac{40 + 9}{2}$ ✗.)',
    },
    {
      q: 'A banquet hall floor is a $28$ ft by $21$ ft rectangle, and a chandelier hangs above the point $M$ where the floor’s diagonals cross. How far is $M$ from each corner of the floor?',
      fig: {
        w: 380,
        view: [-1.5, -1.5, 29.5, 22.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [28, 0], [28, 21], [0, 21]], fill: false },
          { t: 'seg', a: [0, 0], b: [28, 21], dash: true },
          { t: 'seg', a: [28, 0], b: [0, 21], dash: true },
          { t: 'label', p: [14, 0], text: '28', dx: 0, dy: 14 },
          { t: 'label', p: [28, 10.5], text: '21', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [28, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [28, 21], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 21], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [14, 10.5], label: 'M', dx: 4, dy: -12 },
        ],
      },
      choices: ['$35$', '$17.5$', '$14$', '$24.5$'],
      answer: 1,
      solution:
        'The diagonal is $\\sqrt{28^2 + 21^2} = \\sqrt{784 + 441} = \\sqrt{1225} = 35$ — seven copies of $3$-$4$-$5$, since $21$-$28$-$35 = 7 \\times (3$-$4$-$5)$. The crossing point of a rectangle’s equal, bisecting diagonals is its center, so $M$ sits $\\frac{35}{2} = 17.5$ ft from every corner ✓. Check a second, independent way with coordinates: corners at $(0, 0)$, $(28, 0)$, $(28, 21)$, $(0, 21)$ put $M$ at $(14, 10.5)$, and $MA = \\sqrt{14^2 + 10.5^2} = \\sqrt{196 + 110.25} = \\sqrt{306.25} = 17.5$ ✓. (The choice $35$ is ANSWERING THE FULL DIAGONAL ✗; $14$ is HALVING THE LONGER SIDE ✗; $24.5$ is AVERAGING THE SIDES $\\frac{28 + 21}{2}$ ✗.)',
    },
  ],
  // s8 — diagonal and width given: Pythagoras, then the perimeter.
  [
    {
      q: 'A rectangular sign board has a diagonal brace of length $29$ in, and its shorter side measures $20$ in. What is the perimeter of the board?',
      fig: {
        view: [-1, -1.5, 22.5, 21.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [21, 0], [21, 20], [0, 20]], fill: false },
          { t: 'seg', a: [0, 0], b: [21, 20], dash: true },
          { t: 'right', at: [21, 0], from: [0, 0], to: [21, 20] },
          { t: 'label', p: [10.5, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [21, 10], text: '20', dx: 14, dy: 0 },
          { t: 'label', p: [10.5, 10], text: '29', dx: -10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [21, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [21, 20], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 20], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$41$', '$82$', '$98$', '$420$'],
      answer: 1,
      solution:
        'The longer side hides under the brace: $\\sqrt{29^2 - 20^2} = \\sqrt{841 - 400} = \\sqrt{441} = 21$ — the $20$-$21$-$29$ triple — so the perimeter is $2(21 + 20) = 82$ in ✓. Check the subtraction a second, independent way with a difference of squares: $29^2 - 20^2 = (29 - 20)(29 + 20) = 9 \\times 49 = 441$, and $\\sqrt{9 \\times 49} = 3 \\times 7 = 21$ again ✓. Guard: $20^2 + 21^2 = 400 + 441 = 841 = 29^2$ ✓. (The choice $41$ is FORGETTING TO DOUBLE the side sum $21 + 20$ ✗; $98$ is USING THE DIAGONAL AS A SIDE in $2(29 + 20)$ ✗; $420$ is ANSWERING THE AREA ✗.)',
    },
    {
      q: 'A wooden plank is $7$ in wide, and its diagonal measures $25$ in. Find the perimeter of the plank.',
      fig: {
        w: 400,
        view: [-1, -1.5, 25.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [24, 7], [0, 7]], fill: false },
          { t: 'seg', a: [0, 0], b: [24, 7], dash: true },
          { t: 'right', at: [24, 0], from: [0, 0], to: [24, 7] },
          { t: 'label', p: [12, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [24, 3.5], text: '7', dx: 10, dy: 0 },
          { t: 'label', p: [12, 3.5], text: '25', dx: -10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [24, 7], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 7], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$62$', '$31$', '$64$', '$168$'],
      answer: 0,
      solution:
        'The plank’s length is the leg beneath the diagonal: $\\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$ — the $7$-$24$-$25$ triple — so the perimeter is $2(24 + 7) = 62$ in ✓. Check the subtraction a second, independent way with a difference of squares: $25^2 - 7^2 = (25 - 7)(25 + 7) = 18 \\times 32 = 576$, and $\\sqrt{576} = 24$ again ✓. Guard: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$ ✓. (The choice $31$ is FORGETTING TO DOUBLE $24 + 7$ ✗; $64$ is USING THE DIAGONAL AS A SIDE in $2(25 + 7)$ ✗; $168$ is ANSWERING THE AREA ✗.)',
    },
    {
      q: 'A rectangular billboard stands $12$ ft tall, and a support rod runs $37$ ft along its diagonal. What is the perimeter of the billboard?',
      fig: {
        w: 440,
        view: [-1.5, -1.5, 36.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [35, 0], [35, 12], [0, 12]], fill: false },
          { t: 'seg', a: [0, 0], b: [35, 12], dash: true },
          { t: 'right', at: [35, 0], from: [0, 0], to: [35, 12] },
          { t: 'label', p: [17.5, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [35, 6], text: '12', dx: 12, dy: 0 },
          { t: 'label', p: [17.5, 6], text: '37', dx: -10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [35, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [35, 12], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 12], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$47$', '$98$', '$94$', '$420$'],
      answer: 2,
      solution:
        'The billboard’s width is the leg under the rod: $\\sqrt{37^2 - 12^2} = \\sqrt{1369 - 144} = \\sqrt{1225} = 35$ — the $12$-$35$-$37$ triple — so the perimeter is $2(35 + 12) = 94$ ft ✓. Check the subtraction a second, independent way with a difference of squares: $37^2 - 12^2 = (37 - 12)(37 + 12) = 25 \\times 49 = 1225$, and $\\sqrt{25 \\times 49} = 5 \\times 7 = 35$ again ✓. Guard: $12^2 + 35^2 = 144 + 1225 = 1369 = 37^2$ ✓. (The choice $47$ is FORGETTING TO DOUBLE $35 + 12$ ✗; $98$ is USING THE DIAGONAL AS A SIDE in $2(37 + 12)$ ✗; $420$ is ANSWERING THE AREA ✗.)',
    },
  ],
  // s9 — inscribed rectangle: the diagonal is a diameter of the circle.
  [
    {
      q: 'A rectangular mosaic $48$ in by $20$ in is set inside a circular rug so that all four corners of the mosaic touch the rug’s edge. What is the radius of the rug?',
      fig: {
        view: [-28, -27.5, 28, 27.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 26 },
          { t: 'poly', pts: [[-24, -10], [24, -10], [24, 10], [-24, 10]], fill: false },
          { t: 'seg', a: [0, 0], b: [24, 10], dash: true },
          { t: 'label', p: [0, -10], text: '48', dx: 0, dy: 14 },
          { t: 'label', p: [24, 0], text: '20', dx: -12, dy: 0 },
          { t: 'point', p: [-24, -10], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [24, -10], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [24, 10], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-24, 10], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'M', dx: -2, dy: -12 },
        ],
      },
      choices: ['$52$', '$24$', '$34$', '$26$'],
      answer: 3,
      solution:
        'The crossing point of the mosaic’s diagonals is equidistant from all four corners, so it is the center of the rug and each diagonal is a diameter. The diagonal is $\\sqrt{48^2 + 20^2} = \\sqrt{2304 + 400} = \\sqrt{2704} = 52$ — four copies of $5$-$12$-$13$, since $20$-$48$-$52 = 4 \\times (5$-$12$-$13)$ — so the radius is $\\frac{52}{2} = 26$ in ✓. Check a second, independent way with coordinates: center the rug at the origin, so a corner sits at $(24, 10)$ and the radius is $\\sqrt{24^2 + 10^2} = \\sqrt{576 + 100} = \\sqrt{676} = 26$ ✓. (The choice $52$ is ANSWERING THE DIAMETER ✗; $24$ is HALVING THE LONGER SIDE ✗; $34$ is AVERAGING THE SIDES $\\frac{48 + 20}{2}$ ✗.)',
    },
    {
      q: 'A rectangular brass inlay measuring $60$ cm by $11$ cm is fitted into a round tabletop with all four corners on the tabletop’s rim. Find the radius of the tabletop.',
      fig: {
        view: [-32.5, -32, 32.5, 32],
        elems: [
          { t: 'circle', c: [0, 0], r: 30.5 },
          { t: 'poly', pts: [[-30, -5.5], [30, -5.5], [30, 5.5], [-30, 5.5]], fill: false },
          { t: 'seg', a: [0, 0], b: [30, 5.5], dash: true },
          { t: 'label', p: [0, -5.5], text: '60', dx: 0, dy: 14 },
          { t: 'label', p: [30, 0], text: '11', dx: -12, dy: 0 },
          { t: 'point', p: [-30, -5.5], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [30, -5.5], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [30, 5.5], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-30, 5.5], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'M', dx: -2, dy: -12 },
        ],
      },
      choices: ['$61$', '$30.5$', '$30$', '$35.5$'],
      answer: 1,
      solution:
        'Because the diagonals of a rectangle are equal and bisect each other, their crossing is the one point equidistant from all four corners — the center of the tabletop — and the diagonal is a diameter. Its length is $\\sqrt{60^2 + 11^2} = \\sqrt{3600 + 121} = \\sqrt{3721} = 61$ — the $11$-$60$-$61$ triple — so the radius is $\\frac{61}{2} = 30.5$ cm ✓. Check a second, independent way with coordinates: centering at the origin puts a corner at $(30, 5.5)$, and the radius is $\\sqrt{30^2 + 5.5^2} = \\sqrt{900 + 30.25} = \\sqrt{930.25} = 30.5$ ✓. (The choice $61$ is ANSWERING THE DIAMETER ✗; $30$ is HALVING THE LONGER SIDE ✗; $35.5$ is AVERAGING THE SIDES $\\frac{60 + 11}{2}$ ✗.)',
    },
    {
      q: 'A $36$ in by $15$ in rectangular pane is mounted in a circular window so that each corner of the pane lies on the window’s circular frame. What is the radius of the frame?',
      fig: {
        view: [-21, -20.5, 21, 20.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 19.5 },
          { t: 'poly', pts: [[-18, -7.5], [18, -7.5], [18, 7.5], [-18, 7.5]], fill: false },
          { t: 'seg', a: [0, 0], b: [18, 7.5], dash: true },
          { t: 'label', p: [0, -7.5], text: '36', dx: 0, dy: 14 },
          { t: 'label', p: [18, 0], text: '15', dx: -12, dy: 0 },
          { t: 'point', p: [-18, -7.5], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [18, -7.5], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [18, 7.5], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-18, 7.5], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'M', dx: -2, dy: -12 },
        ],
      },
      choices: ['$19.5$', '$39$', '$18$', '$25.5$'],
      answer: 0,
      solution:
        'The pane’s diagonals cross at the point equidistant from all four corners, which must be the center of the circular frame, making each diagonal a diameter. The diagonal is $\\sqrt{36^2 + 15^2} = \\sqrt{1296 + 225} = \\sqrt{1521} = 39$ — three copies of $5$-$12$-$13$, since $15$-$36$-$39 = 3 \\times (5$-$12$-$13)$ — so the radius is $\\frac{39}{2} = 19.5$ in ✓. Check a second, independent way with coordinates: with the center at the origin, a corner sits at $(18, 7.5)$, and the radius is $\\sqrt{18^2 + 7.5^2} = \\sqrt{324 + 56.25} = \\sqrt{380.25} = 19.5$ ✓. (The choice $39$ is ANSWERING THE DIAMETER ✗; $18$ is HALVING THE LONGER SIDE ✗; $25.5$ is AVERAGING THE SIDES $\\frac{36 + 15}{2}$ ✗.)',
    },
  ],
  // s10 — diagonal at angle θ to the longer side: the diagonals cross at 2θ.
  [
    {
      q: 'In a rectangular courtyard $ABCD$, the diagonal path $\\overline{AC}$ makes a $32^\\circ$ angle with the longer wall $\\overline{AB}$. At what acute angle do the two diagonal paths of the courtyard cross?',
      fig: {
        view: [-1, -1.5, 7, 5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 3.75], [0, 3.75]], fill: false },
          { t: 'seg', a: [0, 0], b: [6, 3.75], dash: true },
          { t: 'seg', a: [6, 0], b: [0, 3.75], dash: true },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [6, 3.75], r: 1.5, label: '32°' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 3.75], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 3.75], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [3, 1.875], label: 'M', dx: 4, dy: -12 },
        ],
      },
      choices: ['$64^\\circ$', '$32^\\circ$', '$116^\\circ$', '$58^\\circ$'],
      answer: 0,
      solution:
        'Let $M$ be the crossing. Half of one equal diagonal matches half of the other, so $MA = MB$ and triangle $ABM$ is isosceles: $\\angle MBA = \\angle MAB = 32^\\circ$, giving $\\angle AMB = 180^\\circ - 32^\\circ - 32^\\circ = 116^\\circ$, whose supplement at the crossing is $180^\\circ - 116^\\circ = 64^\\circ$ ✓. Check a second, independent way with the exterior angle theorem: $\\angle BMC$ is an exterior angle of triangle $ABM$ at $M$, so it equals the two remote interior angles combined, $32^\\circ + 32^\\circ = 64^\\circ$ ✓. It is the acute pair because a diagonal leans at less than $45^\\circ$ against the longer side, so doubling it stays under $90^\\circ$. (The choice $32^\\circ$ is HANDING BACK THE GIVEN ✗; $116^\\circ$ is ANSWERING THE OBTUSE PARTNER at the crossing ✗; $58^\\circ$ is ANSWERING THE COMPLEMENT $90^\\circ - 32^\\circ$, the angle at the short wall ✗.)',
    },
    {
      q: 'A rectangular banner $ABCD$ has both diagonals stitched on. The stitched diagonal from $A$ meets the banner’s longer edge $\\overline{AB}$ at $21^\\circ$. Find the acute angle between the two stitched diagonals.',
      fig: {
        view: [-1, -1.5, 7, 3.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 2.3], [0, 2.3]], fill: false },
          { t: 'seg', a: [0, 0], b: [6, 2.3], dash: true },
          { t: 'seg', a: [6, 0], b: [0, 2.3], dash: true },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [6, 2.3], r: 1.5, label: '21°' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 2.3], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 2.3], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [3, 1.15], label: 'M', dx: 4, dy: -12 },
        ],
      },
      choices: ['$21^\\circ$', '$138^\\circ$', '$42^\\circ$', '$69^\\circ$'],
      answer: 2,
      solution:
        'Call the crossing $M$. Equal diagonals that bisect each other give $MA = MB$, so triangle $ABM$ is isosceles with $\\angle MBA = \\angle MAB = 21^\\circ$; then $\\angle AMB = 180^\\circ - 42^\\circ = 138^\\circ$, and its supplement, the acute crossing angle, is $180^\\circ - 138^\\circ = 42^\\circ$ ✓. Check a second, independent way with the exterior angle theorem: the exterior angle $\\angle BMC$ of triangle $ABM$ equals the sum of the remote interior angles, $21^\\circ + 21^\\circ = 42^\\circ$ ✓. The doubled angle is the acute one because $21^\\circ < 45^\\circ$ — a diagonal always hugs the longer edge at less than $45^\\circ$. (The choice $21^\\circ$ is HANDING BACK THE GIVEN ✗; $138^\\circ$ is ANSWERING THE OBTUSE PARTNER ✗; $69^\\circ$ is ANSWERING THE COMPLEMENT $90^\\circ - 21^\\circ$ ✗.)',
    },
    {
      q: 'On a rectangular tablet screen $ABCD$, diagonal $\\overline{AC}$ is tilted $23^\\circ$ away from the longer edge $\\overline{AB}$. What is the acute angle formed where the screen’s two diagonals cross?',
      fig: {
        view: [-1, -1.5, 7, 4],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 2.55], [0, 2.55]], fill: false },
          { t: 'seg', a: [0, 0], b: [6, 2.55], dash: true },
          { t: 'seg', a: [6, 0], b: [0, 2.55], dash: true },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [6, 2.55], r: 1.5, label: '23°' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 2.55], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 2.55], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [3, 1.275], label: 'M', dx: 4, dy: -12 },
        ],
      },
      choices: ['$134^\\circ$', '$46^\\circ$', '$23^\\circ$', '$67^\\circ$'],
      answer: 1,
      solution:
        'Let $M$ be the crossing of the diagonals. Since the diagonals are equal and bisect each other, $MA = MB$, so triangle $ABM$ is isosceles: $\\angle MBA = \\angle MAB = 23^\\circ$ and $\\angle AMB = 180^\\circ - 46^\\circ = 134^\\circ$; the supplement at the crossing is $180^\\circ - 134^\\circ = 46^\\circ$ ✓. Check a second, independent way with the exterior angle theorem: $\\angle BMC$, exterior to triangle $ABM$ at $M$, equals the two remote interior angles together, $23^\\circ + 23^\\circ = 46^\\circ$ ✓. Doubling stays acute because the tilt against the longer edge is always under $45^\\circ$. (The choice $23^\\circ$ is HANDING BACK THE GIVEN ✗; $134^\\circ$ is ANSWERING THE OBTUSE PARTNER ✗; $67^\\circ$ is ANSWERING THE COMPLEMENT $90^\\circ - 23^\\circ$, the angle against the short edge ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 8,
  sections: {
    '8.5': s85,
  },
}
