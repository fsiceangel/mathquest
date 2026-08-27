// Introduction to Geometry chapter 8 — variations for section 8.1 (Quadrilateral Basics).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed angle was worked twice by routes that do not share arithmetic:
//    the 360-degree subtraction against a parallel-sides supplement, a ratio
//    equation against a fraction-of-the-whole share, a diagonal-split argument
//    against a boundary-walk turn count. Both routes must agree before a key
//    is written down, and every solution rebuilds the full 360-degree sum.
//  - Figures are built from their own numbers: each quadrilateral's vertices
//    were solved from its stated interior angles (closure of the four side
//    vectors), so every drawn angle matches its label to well under a degree.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution.

const s81 = [
  // s1 — a quadrilateral has exactly 2 diagonals.
  [
    {
      q: 'In the concave quadrilateral $KLMN$, every diagonal has been drawn with dashes — and one of them escapes the shape through the dent. How many diagonals does $KLMN$ have?',
      fig: {
        view: [-1, -1.5, 7.6, 5.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [6.5, 0], [6, 4.5], [4, 1.5]], fill: false },
          { t: 'seg', a: [0, 0], b: [6, 4.5], dash: true },
          { t: 'seg', a: [6.5, 0], b: [4, 1.5], dash: true },
          { t: 'point', p: [0, 0], label: 'K', dx: -10, dy: 10 },
          { t: 'point', p: [6.5, 0], label: 'L', dx: 10, dy: 10 },
          { t: 'point', p: [6, 4.5], label: 'M', dx: 8, dy: -8 },
          { t: 'point', p: [4, 1.5], label: 'N', dx: 12, dy: 8 },
        ],
      },
      choices: ['$1$', '$4$', '$2$', '$6$'],
      answer: 2,
      solution:
        'A diagonal joins two vertices that are not already joined by a side. In $KLMN$ the only qualifying pairs are $K$ with $M$ and $L$ with $N$, so there are exactly $2$ diagonals ✓ — the dent never changes the count, it only pushes $\\overline{KM}$ outside the shape. Check a second, independent way by counting from each vertex: a vertex cannot pair with itself or its two neighbors, leaving $4 - 3 = 1$ diagonal per vertex, and $4 \\times 1 = 4$ counts each diagonal from both ends, so the true count is $\\frac{4}{2} = 2$ ✓. (The choice $1$ is COUNTING ONLY THE INSIDE DIAGONAL — the one that leaves the shape still counts ✗; $4$ is COUNTING THE SIDES ✗; $6$ is COUNTING EVERY VERTEX PAIR, sides included ✗.)',
    },
    {
      q: 'A carpenter stiffens a rectangular gate $PQRS$ by bolting braces between opposite corners, as shown. If she installs every possible corner-to-opposite-corner brace, how many braces does the gate get?',
      fig: {
        view: [-1, -1.5, 7, 5.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 4], [0, 4]], fill: false },
          { t: 'seg', a: [0, 0], b: [6, 4] },
          { t: 'seg', a: [6, 0], b: [0, 4] },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [6, 4], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [0, 4], label: 'S', dx: -10, dy: -8 },
        ],
      },
      choices: ['$2$', '$4$', '$1$', '$6$'],
      answer: 0,
      solution:
        'Each brace is a diagonal of the quadrilateral: a segment between two corners not already connected by a side. The only such pairs are $P$–$R$ and $Q$–$S$, so the gate gets exactly $2$ braces ✓. Check a second, independent way with the diagonal count for an $n$-gon, $\\frac{n(n-3)}{2}$: with $n = 4$ that is $\\frac{4 \\times 1}{2} = 2$ ✓. (The choice $4$ is INSTALLING ONE BRACE PER CORNER — each brace already serves two corners at once ✗; $1$ is STOPPING AT ONE BRACE and forgetting the second pair ✗; $6$ is COUNTING EVERY CORNER PAIR, which sneaks the four sides into the count ✗.)',
    },
    {
      q: 'The pentagon on the left is drawn with all $5$ of its diagonals dashed. How many diagonals does the quadrilateral $EFGH$ on the right have?',
      fig: {
        w: 400,
        view: [-0.6, -1.2, 11.2, 5.8],
        elems: [
          { t: 'poly', pts: [[2.8, 5], [0.4224, 3.2725], [1.3305, 0.4775], [4.2695, 0.4775], [5.1776, 3.2725]], fill: false },
          { t: 'seg', a: [2.8, 5], b: [1.3305, 0.4775], dash: true },
          { t: 'seg', a: [2.8, 5], b: [4.2695, 0.4775], dash: true },
          { t: 'seg', a: [0.4224, 3.2725], b: [4.2695, 0.4775], dash: true },
          { t: 'seg', a: [0.4224, 3.2725], b: [5.1776, 3.2725], dash: true },
          { t: 'seg', a: [1.3305, 0.4775], b: [5.1776, 3.2725], dash: true },
          { t: 'label', p: [2.8, -0.7], text: '5 diagonals' },
          { t: 'poly', pts: [[6.8, 0.6], [9.8, 0.6], [10.2, 3.4], [7.4, 3.9]], fill: false },
          { t: 'label', p: [8.6, -0.7], text: '? diagonals' },
          { t: 'point', p: [6.8, 0.6], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [9.8, 0.6], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [10.2, 3.4], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [7.4, 3.9], label: 'H', dx: -10, dy: -8 },
        ],
      },
      choices: ['$5$', '$4$', '$3$', '$2$'],
      answer: 3,
      solution:
        'In $EFGH$ the vertex pairs not joined by a side are $E$–$G$ and $F$–$H$, so a quadrilateral has exactly $2$ diagonals ✓ — fewer sides means far fewer diagonals. Check a second, independent way with the formula $\\frac{n(n-3)}{2}$: for $n = 4$ it gives $\\frac{4 \\times 1}{2} = 2$ ✓, and it also confirms the picture on the left, since $n = 5$ gives $\\frac{5 \\times 2}{2} = 5$ ✓. (The choice $5$ is BORROWING THE PENTAGON’S COUNT ✗; $4$ is FORGETTING TO HALVE after counting one diagonal from each of the four vertices ✗; $3$ is COUNTING EVERY SEGMENT FROM ONE VERTEX — two of those three are sides ✗.)',
    },
  ],
  // s2 — why the interior angles always total 360 degrees.
  [
    {
      q: 'A tile setter measures the corner angles of a four-sided tile and gets a total of $360^\\circ$ — then gets the same total for every other four-sided tile in the box, no matter how lopsided. Which explanation shows why the total is always $360^\\circ$?',
      choices: [
        'A diagonal cuts any quadrilateral into two triangles, and the two triangle sums give $2 \\times 180^\\circ = 360^\\circ$',
        'Every four-sided tile has four right angles, and $4 \\times 90^\\circ = 360^\\circ$',
        'Opposite angles of any quadrilateral add to $180^\\circ$, and there are two such pairs',
        'The angles reach $360^\\circ$ only when the tile is convex; dented tiles fall short',
      ],
      answer: 0,
      solution:
        'One diagonal splits any quadrilateral into two triangles, and the angles of those triangles reassemble the four corner angles with nothing missing and nothing extra — so the total is $2 \\times 180^\\circ = 360^\\circ$ for every shape in the box ✓. Check a second, independent way by walking the tile’s boundary: one full trip turns you through exactly $360^\\circ$ of exterior angle, and each interior angle is $180^\\circ$ minus a turn, so the interiors total $4 \\times 180^\\circ - 360^\\circ = 360^\\circ$ ✓. (Four right angles is ASSUMING A RECTANGLE — most tiles have no right angle at all ✗; supplementary opposite angles is BORROWING A SPECIAL-CASE FACT that fails for a generic quadrilateral ✗; the convexity condition is ADDING A FALSE RESTRICTION — dented quadrilaterals reach $360^\\circ$ too ✗.)',
    },
    {
      q: 'A delivery robot drives one full lap around a four-sided courtyard, turning left at each corner, and ends up facing exactly the way it started. Why must the courtyard’s four interior angles total $360^\\circ$?',
      choices: [
        'Because each of the robot’s turns is exactly $90^\\circ$',
        'The lap spins the robot through $360^\\circ$ of turning, and each interior angle is $180^\\circ$ minus a turn, so the interiors total $4 \\times 180^\\circ - 360^\\circ = 360^\\circ$',
        'Because the courtyard splits into four triangles, and their sums pass $4 \\times 180^\\circ$ straight to the corners',
        'Because the interior angles equal the four turn angles, which total $360^\\circ$',
      ],
      answer: 1,
      solution:
        'Ending up facing the starting direction means the four turns add to one full spin, $360^\\circ$. Each interior angle and its turn make a straight $180^\\circ$, so the four interior angles total $4 \\times 180^\\circ - 360^\\circ = 360^\\circ$ ✓ — this works for any courtyard, square or crooked. Check a second, independent way with a diagonal: it cuts the courtyard into two triangles whose angle sums combine to $2 \\times 180^\\circ = 360^\\circ$ ✓. (Equal $90^\\circ$ turns is ASSUMING A RECTANGLE ✗; four triangles from a center point deliver $720^\\circ$, and FORGETTING THE CENTER ANGLES leaves the extra $360^\\circ$ in the count ✗; interior angles equal to the turns is CONFUSING INTERIOR WITH EXTERIOR — an interior angle is $180^\\circ$ minus its turn ✗.)',
    },
    {
      q: 'A quilter knows a triangle’s angles total $180^\\circ$ and a pentagon’s total $540^\\circ$, and she suspects a quadrilateral patch totals $360^\\circ$. Which argument proves she is right?',
      choices: [
        'The sum depends on the quadrilateral — only carefully cut patches reach $360^\\circ$',
        'Each angle of a quadrilateral is exactly $90^\\circ$, and $4 \\times 90^\\circ = 360^\\circ$',
        'A diagonal splits it into two triangles, so the sum is $180^\\circ$, the same as one triangle',
        'One diagonal cuts any quadrilateral into two triangles whose angles rebuild all four corners, so the total is $2 \\times 180^\\circ = 360^\\circ$',
      ],
      answer: 3,
      solution:
        'Sewing one diagonal across the patch produces two triangles, and every scrap of every corner angle lands in one triangle or the other — so the four angles total $2 \\times 180^\\circ = 360^\\circ$, for any quadrilateral ✓. Check a second, independent way with the polygon ladder $(n - 2) \\times 180^\\circ$: it gives $180^\\circ$ for $n = 3$ and $540^\\circ$ for $n = 5$, matching what the quilter knows, and $n = 4$ lands on $2 \\times 180^\\circ = 360^\\circ$ ✓. (Sum-depends-on-the-shape is DENYING THE THEOREM — the diagonal argument never used the shape ✗; four $90^\\circ$ angles is ASSUMING A RECTANGLE ✗; the $180^\\circ$ answer is LOSING A TRIANGLE — the split is right, but both triangles must be added ✗.)',
    },
  ],
  // s3 — two right angles plus one known angle give the fourth.
  [
    {
      q: 'The cross-section of a deck footing is quadrilateral $ABCD$ with square corners at $A$ and $D$, and the corner at $B$ measures $126^\\circ$. What is the measure of the corner at $C$?',
      fig: {
        view: [-1, -1.5, 9.6, 4.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [8.0344, 2.8], [0, 2.8]], fill: false },
          { t: 'right', at: [0, 0], from: [6, 0], to: [0, 2.8] },
          { t: 'right', at: [0, 2.8], from: [0, 0], to: [8.0344, 2.8] },
          { t: 'angle', at: [6, 0], from: [8.0344, 2.8], to: [0, 0], r: 0.9, label: '126' },
          { t: 'angle', at: [8.0344, 2.8], from: [0, 2.8], to: [6, 0], r: 0.9, label: '?' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 2, dy: 12 },
          { t: 'point', p: [8.0344, 2.8], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 2.8], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$234^\\circ$', '$90^\\circ$', '$54^\\circ$', '$126^\\circ$'],
      answer: 2,
      solution:
        'The four angles must total $360^\\circ$, and the two square corners plus the known one give $90^\\circ + 90^\\circ + 126^\\circ = 306^\\circ$, so $\\angle C = 360^\\circ - 306^\\circ = 54^\\circ$ ✓. Check a second, independent way with parallel sides: $\\overline{AB}$ and $\\overline{DC}$ are both perpendicular to $\\overline{AD}$, hence parallel, so $\\angle B$ and $\\angle C$ along leg $\\overline{BC}$ are supplementary: $180^\\circ - 126^\\circ = 54^\\circ$ ✓. Rebuild: $90^\\circ + 126^\\circ + 54^\\circ + 90^\\circ = 360^\\circ$ ✓. (The choice $234^\\circ$ is SUBTRACTING ONLY THE GIVEN ANGLE, $360^\\circ - 126^\\circ$, and skipping the right angles ✗; $90^\\circ$ is ASSUMING A THIRD SQUARE CORNER ✗; $126^\\circ$ is COPYING THE GIVEN ✗.)',
    },
    {
      q: 'A skate-ramp side panel is quadrilateral $ABCD$ with right angles at $B$ and at $C$. The panel’s corner at $D$ measures $108^\\circ$. Find the measure of the corner at $A$.',
      fig: {
        view: [-1, -1.5, 7.7, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6.5, 0], [6.5, 3], [0.9748, 3]], fill: false },
          { t: 'right', at: [6.5, 0], from: [0, 0], to: [6.5, 3] },
          { t: 'right', at: [6.5, 3], from: [6.5, 0], to: [0.9748, 3] },
          { t: 'angle', at: [0.9748, 3], from: [6.5, 3], to: [0, 0], r: 0.9, label: '108' },
          { t: 'angle', at: [0, 0], from: [6.5, 0], to: [0.9748, 3], r: 1, label: '?' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6.5, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6.5, 3], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0.9748, 3], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$90^\\circ$', '$72^\\circ$', '$108^\\circ$', '$252^\\circ$'],
      answer: 1,
      solution:
        'Subtract the three known angles from the quadrilateral sum: $360^\\circ - 90^\\circ - 90^\\circ - 108^\\circ = 72^\\circ$ ✓. Check a second, independent way with parallel sides: $\\overline{AB}$ and $\\overline{DC}$ are both perpendicular to $\\overline{BC}$, hence parallel, so $\\angle A$ and $\\angle D$ along leg $\\overline{AD}$ are supplementary: $180^\\circ - 108^\\circ = 72^\\circ$ ✓. Rebuild: $72^\\circ + 90^\\circ + 90^\\circ + 108^\\circ = 360^\\circ$ ✓. (The choice $90^\\circ$ is ASSUMING A THIRD RIGHT ANGLE ✗; $108^\\circ$ is COPYING THE GIVEN ✗; $252^\\circ$ is SUBTRACTING ONLY THE GIVEN ANGLE, $360^\\circ - 108^\\circ$ ✗.)',
    },
    {
      q: 'A window pane is quadrilateral $ABCD$ with square corners at $A$ and $B$ along the sill, and its top edge slants so that $\\angle C = 95^\\circ$. What is $\\angle D$?',
      fig: {
        view: [-1, -1.5, 7, 4.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 2.4], [0, 2.9249]], fill: false },
          { t: 'right', at: [0, 0], from: [6, 0], to: [0, 2.9249] },
          { t: 'right', at: [6, 0], from: [0, 0], to: [6, 2.4] },
          { t: 'angle', at: [6, 2.4], from: [0, 2.9249], to: [6, 0], r: 0.8, label: '95' },
          { t: 'angle', at: [0, 2.9249], from: [0, 0], to: [6, 2.4], r: 0.8, label: '?' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 2.4], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 2.9249], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$95^\\circ$', '$90^\\circ$', '$265^\\circ$', '$85^\\circ$'],
      answer: 3,
      solution:
        'The angles must total $360^\\circ$: subtracting $90^\\circ + 90^\\circ + 95^\\circ = 275^\\circ$ leaves $\\angle D = 360^\\circ - 275^\\circ = 85^\\circ$ ✓. Check a second, independent way with parallel sides: $\\overline{AD}$ and $\\overline{BC}$ are both perpendicular to the sill $\\overline{AB}$, hence parallel, so $\\angle C$ and $\\angle D$ along the slanted top $\\overline{DC}$ are supplementary: $180^\\circ - 95^\\circ = 85^\\circ$ ✓. Rebuild: $90^\\circ + 90^\\circ + 95^\\circ + 85^\\circ = 360^\\circ$ ✓. (The choice $95^\\circ$ is COPYING THE GIVEN ✗; $90^\\circ$ is ASSUMING A THIRD SQUARE CORNER ✗; $265^\\circ$ is SUBTRACTING ONLY THE GIVEN ANGLE, $360^\\circ - 95^\\circ$ ✗.)',
    },
  ],
  // s4 — what makes a quadrilateral concave.
  [
    {
      q: 'The dart-shaped quadrilateral $ABCD$ shown caves in at $D$: diagonal $\\overline{BD}$ stays inside, but diagonal $\\overline{AC}$ falls outside the shape. Which statement must be true of this concave quadrilateral?',
      fig: {
        view: [-1, -1.2, 6.2, 5.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 2], [0, 4], [1.8, 2]], fill: false },
          { t: 'seg', a: [0, 0], b: [0, 4], dash: true },
          { t: 'seg', a: [5, 2], b: [1.8, 2], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [5, 2], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [0, 4], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [1.8, 2], label: 'D', dx: 12, dy: -6 },
        ],
      },
      choices: [
        'Its four interior angles add up to more than $360^\\circ$',
        'One of its interior angles measures more than $180^\\circ$',
        'All four of its angles are acute',
        'Both of its diagonals lie inside the shape',
      ],
      answer: 1,
      solution:
        'Concave means the shape has a dent, and a dent is a reflex interior angle: at $D$ the interior angle opens past $180^\\circ$ ✓. Check a second, independent way with the diagonal test the figure demonstrates: a quadrilateral is concave exactly when one diagonal — here $\\overline{AC}$ — leaves the shape, and that only happens when a vertex pokes inward with a reflex angle ✓. Note the angle sum still rebuilds to exactly $360^\\circ$, dent or no dent. (More than $360^\\circ$ is INFLATING THE ANGLE SUM — the sum never changes ✗; all acute is SHRINKING EVERY ANGLE, impossible since four acute angles cannot reach $360^\\circ$ ✗; both diagonals inside is DESCRIBING A CONVEX SHAPE ✗.)',
    },
    {
      q: 'A pennant is cut in the shape of quadrilateral $JKLM$ with a notch at $M$, as shown. Which statement correctly describes why $JKLM$ is concave?',
      fig: {
        view: [-1, -1.2, 6, 5.2],
        elems: [
          { t: 'poly', pts: [[0, 4], [2.5, 0], [5, 4], [2.5, 1.4]], fill: false },
          { t: 'point', p: [0, 4], label: 'J', dx: -10, dy: -8 },
          { t: 'point', p: [2.5, 0], label: 'K', dx: 0, dy: 14 },
          { t: 'point', p: [5, 4], label: 'L', dx: 10, dy: -8 },
          { t: 'point', p: [2.5, 1.4], label: 'M', dx: 12, dy: -4 },
        ],
      },
      choices: [
        'It has a reflex interior angle at $M$ — one that measures more than $180^\\circ$',
        'Its four interior angles total less than $360^\\circ$',
        'It has more than two diagonals',
        'Every one of its interior angles is less than $180^\\circ$',
      ],
      answer: 0,
      solution:
        'The notch at $M$ is the giveaway: the interior angle there opens past $180^\\circ$ — a reflex angle — and one reflex angle is exactly what makes a quadrilateral concave ✓. Check a second, independent way by testing the diagonal $\\overline{JL}$: it runs across the notch, outside the pennant, and an escaping diagonal happens only in a concave shape ✓. The angle sum still rebuilds to exactly $360^\\circ$, notch and all. (Less than $360^\\circ$ is DEFLATING THE ANGLE SUM — concave or convex, the sum is fixed ✗; more than two diagonals is MISCOUNTING DIAGONALS — every quadrilateral has exactly $2$ ✗; all angles under $180^\\circ$ is DESCRIBING A CONVEX SHAPE, the opposite of a notch ✗.)',
    },
    {
      q: 'A surveyor plots a lakeside parcel as quadrilateral $TUVW$; the boundary bends inward at $W$ where an inlet cuts in, and the dashed diagonal $\\overline{TV}$ crosses open water outside the parcel. Which statement about $TUVW$ is correct?',
      fig: {
        view: [-1, -1.2, 7.2, 5.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 1], [5, 4], [2.2, 1.5]], fill: false },
          { t: 'seg', a: [0, 0], b: [5, 4], dash: true },
          { t: 'seg', a: [6, 1], b: [2.2, 1.5], dash: true },
          { t: 'point', p: [0, 0], label: 'T', dx: -10, dy: 10 },
          { t: 'point', p: [6, 1], label: 'U', dx: 12, dy: 4 },
          { t: 'point', p: [5, 4], label: 'V', dx: 10, dy: -8 },
          { t: 'point', p: [2.2, 1.5], label: 'W', dx: 4, dy: 14 },
        ],
      },
      choices: [
        'Its interior angles total exactly $180^\\circ$',
        'It has only one diagonal',
        'The interior angle at $W$ is a reflex angle, greater than $180^\\circ$',
        'All four of its angles are equal',
      ],
      answer: 2,
      solution:
        'The inward bend at $W$ means the parcel’s interior angle there opens past $180^\\circ$ — a reflex angle — which is the defining mark of a concave quadrilateral ✓. Check a second, independent way with the diagonals: $\\overline{UW}$ stays on the parcel, but $\\overline{TV}$ crosses the inlet outside it, and a diagonal can escape only when a vertex holds a reflex angle ✓. The four angles still rebuild to exactly $360^\\circ$. (A $180^\\circ$ total is USING THE TRIANGLE SUM ✗; one diagonal is MISCOUNTING DIAGONALS — both $\\overline{TV}$ and $\\overline{UW}$ exist, wherever they run ✗; four equal angles is DESCRIBING A RECTANGLE, which has no dent at all ✗.)',
    },
  ],
  // s5 — angles in a given ratio: find the largest.
  [
    {
      q: 'The four corners of a sail patch are marked $x$, $2x$, $2x$, and $4x$, as shown — the angles are in the ratio $1 : 2 : 2 : 4$. What is the measure of the largest angle?',
      fig: {
        view: [-1.5, -1.5, 9, 5.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [7.2186, 4.4316], [3.7975, 3.1864]], fill: false },
          { t: 'angle', at: [0, 0], from: [8, 0], to: [3.7975, 3.1864], r: 1.1, label: 'x' },
          { t: 'angle', at: [8, 0], from: [7.2186, 4.4316], to: [0, 0], r: 1, label: '2x' },
          { t: 'angle', at: [7.2186, 4.4316], from: [3.7975, 3.1864], to: [8, 0], r: 0.9, label: '2x' },
          { t: 'angle', at: [3.7975, 3.1864], from: [0, 0], to: [7.2186, 4.4316], r: 0.8, label: '4x' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [8, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [7.2186, 4.4316], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [3.7975, 3.1864], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$40^\\circ$', '$80^\\circ$', '$140^\\circ$', '$160^\\circ$'],
      answer: 3,
      solution:
        'The sum $x + 2x + 2x + 4x = 9x$ must equal $360^\\circ$, so $x = 40^\\circ$ and the largest angle is $4x = 160^\\circ$ ✓. Check a second, independent way with shares: the largest angle owns $4$ of the $9$ ratio parts, so it is $\\frac{4}{9} \\times 360^\\circ = 160^\\circ$ ✓. Rebuild: $40^\\circ + 80^\\circ + 80^\\circ + 160^\\circ = 360^\\circ$ ✓. (The choice $40^\\circ$ is STOPPING AT $x$, the smallest angle ✗; $80^\\circ$ is GRABBING A MIDDLE ANGLE ✗; $140^\\circ$ is TAKING THE SUPPLEMENT of the smallest angle instead of solving ✗.)',
    },
    {
      q: 'A stage spotlight throws a quadrilateral patch of light whose angles measure $x$, $2x$, $4x$, and $5x$, as marked. How large is the biggest angle of the patch?',
      fig: {
        view: [-1.5, -1.5, 10.4, 3.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [7.5, 2.5981], [4.5, 2.5981]], fill: false },
          { t: 'angle', at: [0, 0], from: [9, 0], to: [4.5, 2.5981], r: 1.3, label: 'x' },
          { t: 'angle', at: [9, 0], from: [7.5, 2.5981], to: [0, 0], r: 1, label: '2x' },
          { t: 'angle', at: [7.5, 2.5981], from: [4.5, 2.5981], to: [9, 0], r: 0.8, label: '4x' },
          { t: 'angle', at: [4.5, 2.5981], from: [0, 0], to: [7.5, 2.5981], r: 0.8, label: '5x' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [9, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [7.5, 2.5981], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [4.5, 2.5981], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$150^\\circ$', '$30^\\circ$', '$120^\\circ$', '$60^\\circ$'],
      answer: 0,
      solution:
        'Adding the parts, $x + 2x + 4x + 5x = 12x = 360^\\circ$, so $x = 30^\\circ$ and the biggest angle is $5x = 150^\\circ$ ✓. Check a second, independent way with shares: the biggest angle takes $5$ of the $12$ parts, and $\\frac{5}{12} \\times 360^\\circ = 150^\\circ$ ✓. Rebuild: $30^\\circ + 60^\\circ + 120^\\circ + 150^\\circ = 360^\\circ$ ✓. (The choice $30^\\circ$ is STOPPING AT $x$ ✗; $120^\\circ$ is GRABBING THE RUNNER-UP, $4x$ ✗; $60^\\circ$ is GRABBING A MIDDLE ANGLE, $2x$ ✗.)',
    },
    {
      q: 'A garden bed is laid out as a quadrilateral whose angles are marked $2x$, $3x$, $3x$, and $4x$, as shown. Find the measure of the largest corner of the bed.',
      fig: {
        view: [-1.2, -1.5, 7, 4.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 3.5], [2.0207, 3.5]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [2.0207, 3.5], r: 1, label: '2x' },
          { t: 'angle', at: [6, 0], from: [6, 3.5], to: [0, 0], r: 0.9, label: '3x' },
          { t: 'angle', at: [6, 3.5], from: [2.0207, 3.5], to: [6, 0], r: 0.9, label: '3x' },
          { t: 'angle', at: [2.0207, 3.5], from: [0, 0], to: [6, 3.5], r: 0.8, label: '4x' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 3.5], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [2.0207, 3.5], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$30^\\circ$', '$120^\\circ$', '$90^\\circ$', '$60^\\circ$'],
      answer: 1,
      solution:
        'The sum $2x + 3x + 3x + 4x = 12x$ equals $360^\\circ$, so $x = 30^\\circ$ and the largest corner is $4x = 120^\\circ$ ✓. Check a second, independent way with shares: the largest corner holds $4$ of the $12$ parts, which is $\\frac{1}{3} \\times 360^\\circ = 120^\\circ$ ✓. Rebuild: $60^\\circ + 90^\\circ + 90^\\circ + 120^\\circ = 360^\\circ$ ✓. (The choice $30^\\circ$ is ANSWERING $x$ ITSELF, which is not even one of the angles here ✗; $90^\\circ$ is GRABBING THE RUNNER-UP, $3x$ ✗; $60^\\circ$ is GRABBING THE SMALLEST, $2x$ ✗.)',
    },
  ],
  // s6 — algebraic angle expressions: solve for x.
  [
    {
      q: 'A drone photo shows a park shaped like quadrilateral $ABCD$ with $\\angle A = 2x + 20^\\circ$, $\\angle B = 110^\\circ$, $\\angle C = 3x$, and $\\angle D = x - 10^\\circ$. Find $x$.',
      fig: {
        view: [-2.3, -1.3, 6, 4.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [-0.1962, 3], [-1.106, 1.9157]], fill: false },
          { t: 'angle', at: [-0.1962, 3], from: [5, 0], to: [-1.106, 1.9157], r: 0.5, label: '2x+20' },
          { t: 'angle', at: [-1.106, 1.9157], from: [-0.1962, 3], to: [0, 0], r: 0.5, label: '110' },
          { t: 'angle', at: [0, 0], from: [-1.106, 1.9157], to: [5, 0], r: 0.8, label: '3x' },
          { t: 'angle', at: [5, 0], from: [0, 0], to: [-0.1962, 3], r: 1.2, label: 'x-10' },
          { t: 'point', p: [-0.1962, 3], label: 'A', dx: 4, dy: -8 },
          { t: 'point', p: [-1.106, 1.9157], label: 'B', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'C', dx: -8, dy: 12 },
          { t: 'point', p: [5, 0], label: 'D', dx: 10, dy: 10 },
        ],
      },
      choices: ['$40$', '$60$', '$10$', '$46$'],
      answer: 0,
      solution:
        'Set the sum to $360^\\circ$: $(2x + 20) + 110 + 3x + (x - 10) = 6x + 120 = 360$, so $6x = 240$ and $x = 40$ ✓. Check a second, independent way by clearing the known angle first: the three $x$-bearing angles must total $360^\\circ - 110^\\circ = 250^\\circ$, and $(2x + 20) + 3x + (x - 10) = 6x + 10 = 250$ gives $x = 40$ again ✓. Rebuild: $100^\\circ + 110^\\circ + 120^\\circ + 30^\\circ = 360^\\circ$ ✓. (The choice $60$ is WIPING OUT THE CONSTANTS and solving $6x = 360$ ✗; $10$ is USING THE TRIANGLE SUM $180^\\circ$ ✗; $46$ is DROPPING THE FOURTH ANGLE, solving $5x + 130 = 360$ ✗.)',
    },
    {
      q: 'A stained-glass pane is quadrilateral $PQRS$ with $\\angle P = 4x$, $\\angle Q = 95^\\circ$, $\\angle R = x + 25^\\circ$, and $\\angle S = 2x + 30^\\circ$. What is $x$?',
      fig: {
        view: [-1.2, -1.5, 9.2, 5.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 1.5], [3.051, 4.3573]], fill: false },
          { t: 'angle', at: [8, 1.5], from: [8, 0], to: [3.051, 4.3573], r: 0.55, label: '4x' },
          { t: 'angle', at: [3.051, 4.3573], from: [8, 1.5], to: [0, 0], r: 1, label: '95' },
          { t: 'angle', at: [0, 0], from: [3.051, 4.3573], to: [8, 0], r: 1.2, label: 'x+25' },
          { t: 'angle', at: [8, 0], from: [0, 0], to: [8, 1.5], r: 0.55, label: '2x+30' },
          { t: 'point', p: [8, 1.5], label: 'P', dx: 12, dy: -4 },
          { t: 'point', p: [3.051, 4.3573], label: 'Q', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'R', dx: -10, dy: 10 },
          { t: 'point', p: [8, 0], label: 'S', dx: 10, dy: 10 },
        ],
      },
      choices: ['$35$', '$120$', '$30$', '$90$'],
      answer: 2,
      solution:
        'The four angles total $360^\\circ$: $4x + 95 + (x + 25) + (2x + 30) = 7x + 150 = 360$, so $7x = 210$ and $x = 30$ ✓. Check a second, independent way by clearing the known angle first: the three $x$-bearing angles must total $360^\\circ - 95^\\circ = 265^\\circ$, and $4x + (x + 25) + (2x + 30) = 7x + 55 = 265$ gives $x = 30$ again ✓. Rebuild: $120^\\circ + 95^\\circ + 55^\\circ + 90^\\circ = 360^\\circ$ ✓. (The choice $35$ is LOSING AN $x$ and solving $6x + 150 = 360$ ✗; $120$ is ANSWERING $\\angle P$ INSTEAD OF $x$ ✗; $90$ is ANSWERING $\\angle S$ INSTEAD OF $x$ ✗.)',
    },
    {
      q: 'A sandbox is built as quadrilateral $EFGH$ with $\\angle E = 5x$, a square corner at $F$, $\\angle G = 3x + 20^\\circ$, and $\\angle H = 2x$. Solve for $x$.',
      fig: {
        view: [-3.6, -1.5, 7, 4.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 3], [-2.6293, 3.755]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [-2.6293, 3.755], r: 0.9, label: '5x' },
          { t: 'right', at: [6, 0], from: [0, 0], to: [6, 3] },
          { t: 'angle', at: [6, 3], from: [-2.6293, 3.755], to: [6, 0], r: 0.8, label: '3x+20' },
          { t: 'angle', at: [-2.6293, 3.755], from: [0, 0], to: [6, 3], r: 0.9, label: '2x' },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [6, 3], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [-2.6293, 3.755], label: 'H', dx: -10, dy: -8 },
        ],
      },
      choices: ['$36$', '$125$', '$50$', '$25$'],
      answer: 3,
      solution:
        'The square corner contributes $90^\\circ$, so $5x + 90 + (3x + 20) + 2x = 10x + 110 = 360$, giving $10x = 250$ and $x = 25$ ✓. Check a second, independent way by clearing the right angle first: the three $x$-bearing angles must total $360^\\circ - 90^\\circ = 270^\\circ$, and $5x + (3x + 20) + 2x = 10x + 20 = 270$ gives $x = 25$ again ✓. Rebuild: $125^\\circ + 90^\\circ + 95^\\circ + 50^\\circ = 360^\\circ$ ✓. (The choice $36$ is WIPING OUT THE CONSTANTS and solving $10x = 360$ ✗; $125$ is ANSWERING $\\angle E$ INSTEAD OF $x$ ✗; $50$ is ANSWERING $\\angle H$ INSTEAD OF $x$ ✗.)',
    },
  ],
  // s7 — angles in a given ratio: find the smallest.
  [
    {
      q: 'The four angles of a quadrilateral flower bed are in the ratio $7 : 8 : 9 : 12$. What is the measure of the smallest angle?',
      choices: ['$10^\\circ$', '$70^\\circ$', '$120^\\circ$', '$80^\\circ$'],
      answer: 1,
      solution:
        'Write the angles as $7k$, $8k$, $9k$, $12k$: their sum $36k$ must be $360^\\circ$, so $k = 10^\\circ$ and the smallest angle is $7k = 70^\\circ$ ✓. Check a second, independent way with shares: the smallest angle owns $7$ of the $36$ ratio parts, so it is $\\frac{7}{36} \\times 360^\\circ = 7 \\times 10^\\circ = 70^\\circ$ ✓. Rebuild: $70^\\circ + 80^\\circ + 90^\\circ + 120^\\circ = 360^\\circ$ ✓. (The choice $10^\\circ$ is ANSWERING ONE RATIO UNIT, $k$ itself ✗; $120^\\circ$ is GRABBING THE LARGEST angle ✗; $80^\\circ$ is PICKING THE WRONG PART, $8k$ ✗.)',
    },
    {
      q: 'A pennant maker cuts a quadrilateral banner whose angles come out in the ratio $2 : 3 : 5 : 8$. How big is the banner’s smallest angle?',
      choices: ['$20^\\circ$', '$160^\\circ$', '$40^\\circ$', '$60^\\circ$'],
      answer: 2,
      solution:
        'With angles $2k$, $3k$, $5k$, $8k$, the sum $18k = 360^\\circ$ gives $k = 20^\\circ$, so the smallest angle is $2k = 40^\\circ$ ✓. Check a second, independent way with shares: the smallest angle takes $2$ of the $18$ parts, and $\\frac{2}{18} \\times 360^\\circ = \\frac{1}{9} \\times 360^\\circ = 40^\\circ$ ✓. Rebuild: $40^\\circ + 60^\\circ + 100^\\circ + 160^\\circ = 360^\\circ$ ✓. (The choice $20^\\circ$ is ANSWERING ONE RATIO UNIT, $k$ ✗; $160^\\circ$ is GRABBING THE LARGEST angle ✗; $60^\\circ$ is PICKING THE WRONG PART, $3k$ ✗.)',
    },
    {
      q: 'The angles of a quadrilateral skate-ramp panel are in the ratio $3 : 5 : 6 : 6$. Find the smallest angle of the panel.',
      choices: ['$54^\\circ$', '$18^\\circ$', '$108^\\circ$', '$90^\\circ$'],
      answer: 0,
      solution:
        'Write the angles as $3k$, $5k$, $6k$, $6k$: the sum $20k = 360^\\circ$ gives $k = 18^\\circ$, so the smallest angle is $3k = 54^\\circ$ ✓. Check a second, independent way with shares: the smallest angle holds $3$ of the $20$ parts, and $\\frac{3}{20} \\times 360^\\circ = 3 \\times 18^\\circ = 54^\\circ$ ✓. Rebuild: $54^\\circ + 90^\\circ + 108^\\circ + 108^\\circ = 360^\\circ$ ✓. (The choice $18^\\circ$ is ANSWERING ONE RATIO UNIT, $k$ ✗; $108^\\circ$ is GRABBING THE LARGEST angle ✗; $90^\\circ$ is PICKING THE WRONG PART, $5k$ ✗.)',
    },
  ],
  // s8 — one angle given, the other three equal.
  [
    {
      q: 'One corner of a quadrilateral picture frame measures $120^\\circ$, and the other three corners are all equal to one another. What does each of the three equal corners measure?',
      choices: ['$120^\\circ$', '$90^\\circ$', '$80^\\circ$', '$60^\\circ$'],
      answer: 2,
      solution:
        'The three equal corners must share $360^\\circ - 120^\\circ = 240^\\circ$, so each measures $240^\\circ \\div 3 = 80^\\circ$ ✓. Check a second, independent way with averages: the four angles average $90^\\circ$, and the $120^\\circ$ corner sits $30^\\circ$ above average, so the three equal corners must sit $10^\\circ$ below average apiece: $90^\\circ - 10^\\circ = 80^\\circ$ ✓. Rebuild: $120^\\circ + 80^\\circ + 80^\\circ + 80^\\circ = 360^\\circ$ ✓. (The choice $120^\\circ$ is COPYING THE GIVEN ✗; $90^\\circ$ is ASSUMING A RECTANGLE ✗; $60^\\circ$ is SPLITTING THE LEFTOVER FOUR WAYS, $240^\\circ \\div 4$ ✗.)',
    },
    {
      q: 'A tabletop is cut as a quadrilateral with one $60^\\circ$ corner; its other three corners are all congruent. Find the measure of each congruent corner.',
      choices: ['$75^\\circ$', '$60^\\circ$', '$90^\\circ$', '$100^\\circ$'],
      answer: 3,
      solution:
        'The three congruent corners split $360^\\circ - 60^\\circ = 300^\\circ$ evenly, so each is $300^\\circ \\div 3 = 100^\\circ$ ✓. Check a second, independent way with averages: the angles average $90^\\circ$, and the $60^\\circ$ corner sits $30^\\circ$ below that, so each of the other three must sit $10^\\circ$ above: $90^\\circ + 10^\\circ = 100^\\circ$ ✓. Rebuild: $60^\\circ + 100^\\circ + 100^\\circ + 100^\\circ = 360^\\circ$ ✓. (The choice $75^\\circ$ is SPLITTING THE LEFTOVER FOUR WAYS, $300^\\circ \\div 4$ ✗; $60^\\circ$ is COPYING THE GIVEN ✗; $90^\\circ$ is ASSUMING A RECTANGLE ✗.)',
    },
    {
      q: 'A kite panel is a quadrilateral in which one angle measures $96^\\circ$ and the remaining three angles are equal. What is the measure of each of the equal angles?',
      choices: ['$96^\\circ$', '$88^\\circ$', '$66^\\circ$', '$90^\\circ$'],
      answer: 1,
      solution:
        'The three equal angles must cover $360^\\circ - 96^\\circ = 264^\\circ$, so each is $264^\\circ \\div 3 = 88^\\circ$ ✓. Check a second, independent way with averages: the four angles average $90^\\circ$, and $96^\\circ$ sits $6^\\circ$ above average, so each of the other three sits $2^\\circ$ below: $90^\\circ - 2^\\circ = 88^\\circ$ ✓. Rebuild: $96^\\circ + 88^\\circ + 88^\\circ + 88^\\circ = 360^\\circ$ ✓. (The choice $96^\\circ$ is COPYING THE GIVEN ✗; $66^\\circ$ is SPLITTING THE LEFTOVER FOUR WAYS, $264^\\circ \\div 4$ ✗; $90^\\circ$ is ASSUMING A RECTANGLE ✗.)',
    },
  ],
  // s9 — two angles known, one is a multiple of the fourth.
  [
    {
      q: 'A paper kite is quadrilateral $ABCD$ with $\\angle A = 95^\\circ$, $\\angle C = 85^\\circ$, and $\\angle B$ twice as large as $\\angle D$. Find $\\angle B$.',
      fig: {
        view: [-1.2, -1.5, 8.2, 5.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [4.75, 3.8971], [0.1534, 1.7537]], fill: false },
          { t: 'angle', at: [4.75, 3.8971], from: [0.1534, 1.7537], to: [7, 0], r: 1, label: '95' },
          { t: 'angle', at: [0.1534, 1.7537], from: [4.75, 3.8971], to: [0, 0], r: 0.55, label: '2x' },
          { t: 'angle', at: [0, 0], from: [0.1534, 1.7537], to: [7, 0], r: 0.55, label: '85' },
          { t: 'angle', at: [7, 0], from: [0, 0], to: [4.75, 3.8971], r: 1.1, label: 'x' },
          { t: 'point', p: [4.75, 3.8971], label: 'A', dx: 6, dy: -8 },
          { t: 'point', p: [0.1534, 1.7537], label: 'B', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'C', dx: -10, dy: 10 },
          { t: 'point', p: [7, 0], label: 'D', dx: 10, dy: 10 },
        ],
      },
      choices: ['$60^\\circ$', '$90^\\circ$', '$180^\\circ$', '$120^\\circ$'],
      answer: 3,
      solution:
        'Angles $B$ and $D$ must cover $360^\\circ - 95^\\circ - 85^\\circ = 180^\\circ$. Writing $\\angle D = x$ and $\\angle B = 2x$ gives $3x = 180^\\circ$, so $x = 60^\\circ$ and $\\angle B = 120^\\circ$ ✓. Check a second, independent way with shares: $\\angle B$ owns $2$ of the $3$ equal parts of that $180^\\circ$, so $\\angle B = \\frac{2}{3} \\times 180^\\circ = 120^\\circ$ ✓. Rebuild: $95^\\circ + 120^\\circ + 85^\\circ + 60^\\circ = 360^\\circ$ ✓. (The choice $60^\\circ$ is ANSWERING $\\angle D$ instead of $\\angle B$ ✗; $90^\\circ$ is SPLITTING THE LEFTOVER EVENLY and ignoring the doubling ✗; $180^\\circ$ is STOPPING AT THE PAIR SUM ✗.)',
    },
    {
      q: 'In quadrilateral $PQRS$, $\\angle P = 110^\\circ$, $\\angle R = 70^\\circ$, and $\\angle Q$ is four times $\\angle S$. What is $\\angle Q$?',
      fig: {
        view: [-1.2, -1.5, 8.2, 4.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [2.1459, 3.5267], [1.003, 2.7558]], fill: false },
          { t: 'angle', at: [2.1459, 3.5267], from: [1.003, 2.7558], to: [7, 0], r: 0.45, label: '110' },
          { t: 'angle', at: [1.003, 2.7558], from: [2.1459, 3.5267], to: [0, 0], r: 0.45, label: '4x' },
          { t: 'angle', at: [0, 0], from: [1.003, 2.7558], to: [7, 0], r: 1, label: '70' },
          { t: 'angle', at: [7, 0], from: [0, 0], to: [2.1459, 3.5267], r: 1.4, label: 'x' },
          { t: 'point', p: [2.1459, 3.5267], label: 'P', dx: 0, dy: -10 },
          { t: 'point', p: [1.003, 2.7558], label: 'Q', dx: -12, dy: 4 },
          { t: 'point', p: [0, 0], label: 'R', dx: -10, dy: 10 },
          { t: 'point', p: [7, 0], label: 'S', dx: 10, dy: 10 },
        ],
      },
      choices: ['$144^\\circ$', '$36^\\circ$', '$180^\\circ$', '$90^\\circ$'],
      answer: 0,
      solution:
        'The pair $\\angle Q$ and $\\angle S$ must cover $360^\\circ - 110^\\circ - 70^\\circ = 180^\\circ$. With $\\angle S = x$ and $\\angle Q = 4x$, we get $5x = 180^\\circ$, so $x = 36^\\circ$ and $\\angle Q = 144^\\circ$ ✓. Check a second, independent way with shares: $\\angle Q$ takes $4$ of the $5$ equal parts of $180^\\circ$, so $\\angle Q = \\frac{4}{5} \\times 180^\\circ = 144^\\circ$ ✓. Rebuild: $110^\\circ + 144^\\circ + 70^\\circ + 36^\\circ = 360^\\circ$ ✓. (The choice $36^\\circ$ is ANSWERING $\\angle S$ instead of $\\angle Q$ ✗; $180^\\circ$ is STOPPING AT THE PAIR SUM ✗; $90^\\circ$ is SPLITTING THE LEFTOVER EVENLY, ignoring the quadrupling ✗.)',
    },
    {
      q: 'A wedge of sheet metal is quadrilateral $JKLM$ with $\\angle J = 75^\\circ$, $\\angle L = 105^\\circ$, and $\\angle K$ eight times as large as $\\angle M$. How big is $\\angle K$?',
      fig: {
        w: 360,
        view: [-1.2, -1.5, 9.2, 3.7],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [7.6118, 1.4489], [6.8743, 2.5021]], fill: false },
          { t: 'angle', at: [8, 0], from: [0, 0], to: [7.6118, 1.4489], r: 0.5, label: '75' },
          { t: 'angle', at: [7.6118, 1.4489], from: [8, 0], to: [6.8743, 2.5021], r: 0.4, label: '8x' },
          { t: 'angle', at: [6.8743, 2.5021], from: [7.6118, 1.4489], to: [0, 0], r: 0.45, label: '105' },
          { t: 'angle', at: [0, 0], from: [8, 0], to: [6.8743, 2.5021], r: 1.6, label: 'x' },
          { t: 'point', p: [8, 0], label: 'J', dx: 10, dy: 10 },
          { t: 'point', p: [7.6118, 1.4489], label: 'K', dx: 12, dy: 0 },
          { t: 'point', p: [6.8743, 2.5021], label: 'L', dx: 6, dy: -8 },
          { t: 'point', p: [0, 0], label: 'M', dx: -10, dy: 10 },
        ],
      },
      choices: ['$20^\\circ$', '$180^\\circ$', '$160^\\circ$', '$90^\\circ$'],
      answer: 2,
      solution:
        'Angles $K$ and $M$ must cover $360^\\circ - 75^\\circ - 105^\\circ = 180^\\circ$. With $\\angle M = x$ and $\\angle K = 8x$, we get $9x = 180^\\circ$, so $x = 20^\\circ$ and $\\angle K = 160^\\circ$ ✓. Check a second, independent way with shares: $\\angle K$ owns $8$ of the $9$ equal parts of $180^\\circ$, so $\\angle K = \\frac{8}{9} \\times 180^\\circ = 160^\\circ$ ✓. Rebuild: $75^\\circ + 160^\\circ + 105^\\circ + 20^\\circ = 360^\\circ$ ✓. (The choice $20^\\circ$ is ANSWERING $\\angle M$ instead of $\\angle K$ ✗; $180^\\circ$ is STOPPING AT THE PAIR SUM ✗; $90^\\circ$ is SPLITTING THE LEFTOVER EVENLY ✗.)',
    },
  ],
  // s10 — three equal angles: the fourth, and convex or concave?
  [
    {
      q: 'Three corners of a quadrilateral paver each measure $80^\\circ$, as shown. What is the fourth corner, and can the paver be convex?',
      fig: {
        view: [-1.2, -1.5, 7, 5.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [5.3054, 3.9392], [0.3784, 2.1459]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [0.3784, 2.1459], r: 0.8, label: '80' },
          { t: 'angle', at: [6, 0], from: [0, 0], to: [5.3054, 3.9392], r: 0.9, label: '80' },
          { t: 'angle', at: [5.3054, 3.9392], from: [6, 0], to: [0.3784, 2.1459], r: 0.9, label: '80' },
          { t: 'angle', at: [0.3784, 2.1459], from: [5.3054, 3.9392], to: [0, 0], r: 0.55, label: '?' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [5.3054, 3.9392], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0.3784, 2.1459], label: 'D', dx: -12, dy: -6 },
        ],
      },
      choices: [
        '$120^\\circ$, and the paver must be concave',
        '$120^\\circ$, and the paver can be convex',
        '$240^\\circ$, so the paver must be concave',
        '$80^\\circ$, making all four corners equal',
      ],
      answer: 1,
      solution:
        'The three known corners total $3 \\times 80^\\circ = 240^\\circ$, so the fourth is $360^\\circ - 240^\\circ = 120^\\circ$ ✓. Since every angle ($80^\\circ$, $80^\\circ$, $80^\\circ$, $120^\\circ$) is below $180^\\circ$, no corner is reflex, and the paver can be convex — the figure shows such a paver ✓. Check the convexity a second, independent way: a shape is forced concave only when an angle passes $180^\\circ$, and $120^\\circ$ is nowhere near that line ✓. Rebuild: $80^\\circ + 80^\\circ + 80^\\circ + 120^\\circ = 360^\\circ$ ✓. (Calling it concave at $120^\\circ$ is MISAPPLYING THE REFLEX TEST ✗; $240^\\circ$ is REPORTING THE THREE-ANGLE TOTAL as the fourth corner ✗; $80^\\circ$ is ASSUMING FOUR EQUAL ANGLES, which would total only $320^\\circ$ ✗.)',
    },
    {
      q: 'A quadrilateral garden plot has three angles that each measure $65^\\circ$. Find the fourth angle, and decide whether the plot can be convex.',
      fig: {
        view: [-1.2, -1.5, 6.2, 5.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [3.0982, 4.0784], [0.4052, 0.869]], fill: false },
          { t: 'angle', at: [0, 0], from: [5, 0], to: [0.4052, 0.869], r: 0.4, label: '65' },
          { t: 'angle', at: [5, 0], from: [0, 0], to: [3.0982, 4.0784], r: 0.9, label: '65' },
          { t: 'angle', at: [3.0982, 4.0784], from: [5, 0], to: [0.4052, 0.869], r: 0.9, label: '65' },
          { t: 'angle', at: [0.4052, 0.869], from: [3.0982, 4.0784], to: [0, 0], r: 0.3, label: '?' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [5, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [3.0982, 4.0784], label: 'C', dx: 6, dy: -8 },
          { t: 'point', p: [0.4052, 0.869], label: 'D', dx: -12, dy: -4 },
        ],
      },
      choices: [
        '$165^\\circ$, and the plot must be concave',
        '$195^\\circ$, so the plot must be concave',
        '$65^\\circ$, and the plot can be convex',
        '$165^\\circ$, and the plot can be convex',
      ],
      answer: 3,
      solution:
        'The three equal angles total $3 \\times 65^\\circ = 195^\\circ$, so the fourth angle is $360^\\circ - 195^\\circ = 165^\\circ$ ✓. All four angles ($65^\\circ$, $65^\\circ$, $65^\\circ$, $165^\\circ$) stay below $180^\\circ$, so no corner is reflex and the plot can be convex — the figure draws one, with a wide but un-dented corner at $D$ ✓. Check the convexity a second, independent way: concavity requires an interior angle past $180^\\circ$, and $165^\\circ$ falls $15^\\circ$ short of that ✓. Rebuild: $65^\\circ + 65^\\circ + 65^\\circ + 165^\\circ = 360^\\circ$ ✓. (Calling $165^\\circ$ concave is MISAPPLYING THE REFLEX TEST ✗; $195^\\circ$ is REPORTING THE THREE-ANGLE TOTAL as the fourth angle ✗; $65^\\circ$ is ASSUMING FOUR EQUAL ANGLES ✗.)',
    },
    {
      q: 'Three angles of quadrilateral $ABCD$ each measure $55^\\circ$, as marked at $A$, $B$, and $C$. What is the interior angle at $D$, and can $ABCD$ be convex?',
      fig: {
        view: [-1.2, -1.5, 6.2, 5],
        elems: [
          { t: 'poly', pts: [[2.6556, 3.7926], [0, 0], [5, 0], [2.9925, 2.867]], fill: false },
          { t: 'angle', at: [2.6556, 3.7926], from: [2.9925, 2.867], to: [0, 0], r: 0.4, label: '55' },
          { t: 'angle', at: [0, 0], from: [2.6556, 3.7926], to: [5, 0], r: 0.9, label: '55' },
          { t: 'angle', at: [5, 0], from: [0, 0], to: [2.9925, 2.867], r: 0.9, label: '55' },
          { t: 'point', p: [2.6556, 3.7926], label: 'A', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [5, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [2.9925, 2.867], label: 'D', dx: 14, dy: 6 },
        ],
      },
      choices: [
        '$195^\\circ$, and $ABCD$ can be convex',
        '$165^\\circ$, and $ABCD$ can be convex',
        '$195^\\circ$, and $ABCD$ must be concave',
        '$165^\\circ$, so $ABCD$ must be concave',
      ],
      answer: 2,
      solution:
        'The three marked angles total $3 \\times 55^\\circ = 165^\\circ$, so the angle at $D$ is $360^\\circ - 165^\\circ = 195^\\circ$ ✓. That is a reflex angle — past $180^\\circ$ — so $D$ must poke inward and $ABCD$ must be concave, exactly as the figure’s dent at $D$ shows ✓. Check a second, independent way: if $ABCD$ could be convex, all four angles would be under $180^\\circ$ and the total would fall below $165^\\circ + 180^\\circ = 345^\\circ < 360^\\circ$, a contradiction ✓. Rebuild: $55^\\circ + 55^\\circ + 55^\\circ + 195^\\circ = 360^\\circ$ ✓. (Calling $195^\\circ$ convex is MISSING THE REFLEX TEST ✗; $165^\\circ$ is REPORTING THE THREE-ANGLE TOTAL as the fourth angle ✗, and pairing it with “must be concave” also PAIRS THE WRONG VERDICT with it ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 8,
  sections: {
    '8.1': s81,
  },
}
