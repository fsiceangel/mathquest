// Introduction to Geometry chapter 8 — variations for section 8.3 (Parallelograms).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every numeric key was worked twice by routes that do not share arithmetic:
//    the opposite-angle rule against a double supplement, the supplementary
//    equation against a 360-degree angle count, base-times-height against a
//    slide-the-triangle rearrangement, and the bisected-diagonal halves
//    against an ASA congruence. Both routes must agree before a key is
//    written down.
//  - Figures are built from their own numbers: labelled angles are drawn at
//    their exact measure, slanted sides have the length their labels claim,
//    heights meet their bases at true right angles (checked by dot product),
//    and diagonal crossings sit at the true midpoint of both diagonals.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution.
//  - No two choices inside an item name the same value.

const s83 = [
  // s1 — one angle given, its opposite angle asked.
  [
    {
      q: 'The floor plan of a parallelogram-shaped garden plot $EFGH$ is shown, with $\\angle F = 98^\\circ$. What is the measure of $\\angle H$?',
      fig: {
        view: [-1, -1.5, 7.7, 4.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6.4175, 2.9708], [0.4175, 2.9708]], fill: false },
          { t: 'angle', at: [6, 0], from: [6.4175, 2.9708], to: [0, 0], r: 1, label: '98' },
          { t: 'angle', at: [0.4175, 2.9708], from: [0, 0], to: [6.4175, 2.9708], r: 1, label: '?' },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [6.4175, 2.9708], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [0.4175, 2.9708], label: 'H', dx: -10, dy: -8 },
        ],
      },
      choices: ['$98^\\circ$', '$82^\\circ$', '$49^\\circ$', '$90^\\circ$'],
      answer: 0,
      solution:
        'Corners $F$ and $H$ are opposite corners of the parallelogram, and opposite angles of a parallelogram are equal, so $\\angle H = 98^\\circ$ ✓. Check a second, independent way by walking around the plot: consecutive angles are supplementary, so $\\angle G = 180^\\circ - 98^\\circ = 82^\\circ$, and then $\\angle H = 180^\\circ - 82^\\circ = 98^\\circ$ — two supplements in a row return the starting measure ✓. (The choice $82^\\circ$ is TAKING THE SUPPLEMENT — that is the rule for neighboring angles, not opposite ones ✗; $49^\\circ$ is HALVING THE GIVEN ✗; $90^\\circ$ is ASSUMING A RECTANGLE the figure never promises ✗.)',
    },
    {
      q: 'A tabletop is built in the shape of parallelogram $JKLM$, and the corner at $K$ measures $71^\\circ$. Find the measure of the corner at $M$.',
      fig: {
        view: [-2.3, -1.5, 7.3, 4.1],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [5.0233, 2.8366], [-0.9767, 2.8366]], fill: false },
          { t: 'angle', at: [6, 0], from: [5.0233, 2.8366], to: [0, 0], r: 1, label: '71' },
          { t: 'angle', at: [-0.9767, 2.8366], from: [0, 0], to: [5.0233, 2.8366], r: 1, label: '?' },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [5.0233, 2.8366], label: 'L', dx: 10, dy: -8 },
          { t: 'point', p: [-0.9767, 2.8366], label: 'M', dx: -10, dy: -8 },
        ],
      },
      choices: ['$109^\\circ$', '$35.5^\\circ$', '$71^\\circ$', '$90^\\circ$'],
      answer: 2,
      solution:
        'The corners at $K$ and $M$ face each other across the tabletop — they are opposite angles — and opposite angles of a parallelogram match, so $\\angle M = 71^\\circ$ ✓. Check a second, independent way with two supplements: the neighbor $\\angle L = 180^\\circ - 71^\\circ = 109^\\circ$, and the next corner around is $\\angle M = 180^\\circ - 109^\\circ = 71^\\circ$ again ✓. (The choice $109^\\circ$ is TAKING THE SUPPLEMENT, which answers a neighboring corner instead ✗; $35.5^\\circ$ is HALVING THE GIVEN ✗; $90^\\circ$ is ASSUMING A RECTANGLE ✗.)',
    },
    {
      q: 'A road sign is cut in the shape of parallelogram $WXYZ$ with $\\angle X = 113^\\circ$. What is $\\angle Z$?',
      fig: {
        view: [-1, -1.5, 8.5, 4.1],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [7.1722, 2.7615], [1.1722, 2.7615]], fill: false },
          { t: 'angle', at: [6, 0], from: [7.1722, 2.7615], to: [0, 0], r: 1, label: '113' },
          { t: 'angle', at: [1.1722, 2.7615], from: [0, 0], to: [7.1722, 2.7615], r: 1, label: '?' },
          { t: 'point', p: [0, 0], label: 'W', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'X', dx: 10, dy: 10 },
          { t: 'point', p: [7.1722, 2.7615], label: 'Y', dx: 10, dy: -8 },
          { t: 'point', p: [1.1722, 2.7615], label: 'Z', dx: -10, dy: -8 },
        ],
      },
      choices: ['$67^\\circ$', '$113^\\circ$', '$90^\\circ$', '$56.5^\\circ$'],
      answer: 1,
      solution:
        'Vertices $X$ and $Z$ are opposite vertices, and a diagonal splits a parallelogram into two congruent triangles, forcing opposite angles to agree — so $\\angle Z = 113^\\circ$ ✓. Check a second, independent way around the boundary: $\\angle Y = 180^\\circ - 113^\\circ = 67^\\circ$ by consecutive supplements, and then $\\angle Z = 180^\\circ - 67^\\circ = 113^\\circ$ ✓. (The choice $67^\\circ$ is TAKING THE SUPPLEMENT, correct only for the corners next door ✗; $90^\\circ$ is ASSUMING A RECTANGLE ✗; $56.5^\\circ$ is HALVING THE GIVEN ✗.)',
    },
  ],
  // s2 — one angle given, a consecutive angle asked.
  [
    {
      q: 'In a parallelogram-shaped window pane, one angle measures $57^\\circ$. What is the measure of an angle that shares a side with it?',
      choices: ['$57^\\circ$', '$123^\\circ$', '$33^\\circ$', 'It cannot be determined'],
      answer: 1,
      solution:
        'The two angles sit at the ends of one side, and the sides they open onto are parallel — same-side interior angles — so they add to $180^\\circ$: the neighbor measures $180^\\circ - 57^\\circ = 123^\\circ$ ✓. Check a second, independent way with the full angle count: the pane’s angles come in opposite pairs $57^\\circ$, $?$, $57^\\circ$, $?$, and all four sum to $360^\\circ$, so $2 \\cdot ? = 360^\\circ - 114^\\circ = 246^\\circ$ and $? = 123^\\circ$ ✓. (The choice $57^\\circ$ is COPYING THE GIVEN — equality is the rule for opposite angles, and these two are neighbors ✗; $33^\\circ$ is SUPPLEMENTING TO $90^\\circ$ instead of $180^\\circ$ ✗; “cannot be determined” is DEMANDING MORE DATA when one angle already pins down all four ✗.)',
    },
    {
      q: 'The arms of a folding gate form a parallelogram. One angle of the parallelogram measures $49^\\circ$. Find the measure of each angle adjacent to it.',
      choices: ['$131^\\circ$', '$41^\\circ$', '$49^\\circ$', 'It cannot be determined'],
      answer: 0,
      solution:
        'An adjacent angle shares a side with the $49^\\circ$ angle, and the two sides they open toward are parallel, so the pair is supplementary: $180^\\circ - 49^\\circ = 131^\\circ$ ✓. Check a second, independent way by totaling: the gate’s four angles are $49^\\circ$, $?$, $49^\\circ$, $?$ in opposite pairs, and they sum to $360^\\circ$, so $2 \\cdot ? = 360^\\circ - 98^\\circ = 262^\\circ$ and $? = 131^\\circ$ ✓. (The choice $41^\\circ$ is SUPPLEMENTING TO $90^\\circ$ ✗; $49^\\circ$ is COPYING THE GIVEN, the opposite-angle rule applied to a neighbor ✗; “cannot be determined” is DEMANDING MORE DATA the parallelogram does not need ✗.)',
    },
    {
      q: 'A parking space is painted as a parallelogram with one corner measuring $64^\\circ$. What does a neighboring corner of the space measure?',
      choices: ['$64^\\circ$', '$26^\\circ$', 'It cannot be determined', '$116^\\circ$'],
      answer: 3,
      solution:
        'Neighboring corners of a parallelogram lie at the two ends of one painted stripe, between parallel stripes — same-side interior angles — so they are supplementary: $180^\\circ - 64^\\circ = 116^\\circ$ ✓. Check a second, independent way with the angle total: the corners come in opposite pairs $64^\\circ$, $?$, $64^\\circ$, $?$ summing to $360^\\circ$, so $2 \\cdot ? = 360^\\circ - 128^\\circ = 232^\\circ$ and $? = 116^\\circ$ ✓. (The choice $64^\\circ$ is COPYING THE GIVEN, right only for the corner diagonally across ✗; $26^\\circ$ is SUPPLEMENTING TO $90^\\circ$ ✗; “cannot be determined” is DEMANDING MORE DATA — one corner fixes all four ✗.)',
    },
  ],
  // s3 — two side lengths given, perimeter asked.
  [
    {
      q: 'A fence encloses a parallelogram-shaped paddock $EFGH$ with $EF = 14$ and $FG = 9$, as marked. How many units of fencing does the whole boundary use?',
      fig: {
        view: [-1, -1.6, 19.6, 9.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [18, 8.0623], [4, 8.0623]], fill: false },
          { t: 'tick', a: [0, 0], b: [14, 0], n: 1 },
          { t: 'tick', a: [4, 8.0623], b: [18, 8.0623], n: 1 },
          { t: 'tick', a: [14, 0], b: [18, 8.0623], n: 2 },
          { t: 'tick', a: [0, 0], b: [4, 8.0623], n: 2 },
          { t: 'label', p: [7, 0], text: '14', dx: 0, dy: 14 },
          { t: 'label', p: [16, 4.0312], text: '9', dx: 14, dy: 0 },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [14, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [18, 8.0623], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [4, 8.0623], label: 'H', dx: -10, dy: -8 },
        ],
      },
      choices: ['$23$', '$126$', '$46$', '$56$'],
      answer: 2,
      solution:
        'Opposite sides of a parallelogram are equal, so the four sides measure $14$, $9$, $14$, $9$, and the fencing totals $2(14 + 9) = 2 \\cdot 23 = 46$ ✓. Check a second, independent way by marching around the boundary one side at a time: $14 + 9 + 14 + 9 = 23 + 23 = 46$ ✓. (The choice $23$ is ADDING ONLY TWO SIDES, half the boundary ✗; $126$ is MULTIPLYING THE SIDES, an area-style move that measures no fence ✗; $56$ is CLONING ONE SIDE FOUR TIMES as though the paddock were a rhombus ✗.)',
    },
    {
      q: 'Parallelogram $JKLM$ has $JK = 13$ and $KL = 6$, as the tick marks record. Find the perimeter of $JKLM$.',
      fig: {
        view: [-1, -1.6, 17, 6.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [13, 0], [15.5, 5.4544], [2.5, 5.4544]], fill: false },
          { t: 'tick', a: [0, 0], b: [13, 0], n: 1 },
          { t: 'tick', a: [2.5, 5.4544], b: [15.5, 5.4544], n: 1 },
          { t: 'tick', a: [13, 0], b: [15.5, 5.4544], n: 2 },
          { t: 'tick', a: [0, 0], b: [2.5, 5.4544], n: 2 },
          { t: 'label', p: [6.5, 0], text: '13', dx: 0, dy: 14 },
          { t: 'label', p: [14.25, 2.7272], text: '6', dx: 13, dy: 0 },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [13, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [15.5, 5.4544], label: 'L', dx: 10, dy: -8 },
          { t: 'point', p: [2.5, 5.4544], label: 'M', dx: -10, dy: -8 },
        ],
      },
      choices: ['$19$', '$38$', '$78$', '$52$'],
      answer: 1,
      solution:
        'Side $\\overline{ML}$ copies $\\overline{JK}$ and side $\\overline{JM}$ copies $\\overline{KL}$, because opposite sides of a parallelogram are equal — so the perimeter is $2(13 + 6) = 38$ ✓. Check a second, independent way by adding all four sides in order: $13 + 6 + 13 + 6 = 38$ ✓. (The choice $19$ is ADDING ONLY TWO SIDES ✗; $78$ is MULTIPLYING THE SIDES instead of adding them ✗; $52$ is CLONING ONE SIDE FOUR TIMES, a rhombus the figure is not ✗.)',
    },
    {
      q: 'A jogging loop follows the boundary of parallelogram $PQRS$, where $PQ = 16$ and $QR = 11$. How long is one full lap?',
      fig: {
        view: [-1, -1.6, 22.5, 11.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [21, 9.798], [5, 9.798]], fill: false },
          { t: 'tick', a: [0, 0], b: [16, 0], n: 1 },
          { t: 'tick', a: [5, 9.798], b: [21, 9.798], n: 1 },
          { t: 'tick', a: [16, 0], b: [21, 9.798], n: 2 },
          { t: 'tick', a: [0, 0], b: [5, 9.798], n: 2 },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [18.5, 4.899], text: '11', dx: 14, dy: 0 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [21, 9.798], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [5, 9.798], label: 'S', dx: -10, dy: -8 },
        ],
      },
      choices: ['$54$', '$27$', '$176$', '$64$'],
      answer: 0,
      solution:
        'A parallelogram’s opposite sides match, so the lap covers sides of $16$, $11$, $16$, $11$, and one circuit is $2(16 + 11) = 54$ ✓. Check a second, independent way leg by leg: $16 + 11 = 27$ takes a jogger halfway around, and the return half repeats it, $27 + 27 = 54$ ✓. (The choice $27$ is ADDING ONLY TWO SIDES — that is half a lap ✗; $176$ is MULTIPLYING THE SIDES, which computes an area, not a distance ✗; $64$ is CLONING ONE SIDE FOUR TIMES ✗.)',
    },
  ],
  // s4 — one diagonal given, its half at the intersection asked.
  [
    {
      q: 'In parallelogram $EFGH$, the diagonals $\\overline{EG}$ and $\\overline{FH}$ cross at $T$. If $FH = 42$, how long is $\\overline{FT}$?',
      fig: {
        view: [-1, -1.5, 13.6, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [12.5, 5], [3.5, 5]], fill: false },
          { t: 'seg', a: [0, 0], b: [12.5, 5], dash: true },
          { t: 'seg', a: [9, 0], b: [3.5, 5], dash: true },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [9, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [12.5, 5], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [3.5, 5], label: 'H', dx: -10, dy: -8 },
          { t: 'point', p: [6.25, 2.5], label: 'T', dx: 4, dy: -10 },
        ],
      },
      choices: ['$21$', '$42$', '$84$', 'It cannot be determined'],
      answer: 0,
      solution:
        'The diagonals of a parallelogram bisect each other, so their crossing $T$ is the midpoint of $\\overline{FH}$ — the center of the parallelogram — and $FT = \\frac{42}{2} = 21$ ✓. Check a second, independent way with congruence: $\\overline{EF} \\parallel \\overline{HG}$ and $EF = HG$, so triangles $FTE$ and $HTG$ carry two pairs of equal alternate interior angles with the equal sides between them — ASA — and matching parts give $FT = TH$, two equal pieces of $42$, each $21$ ✓. (The choice $42$ is COPYING THE WHOLE DIAGONAL ✗; $84$ is DOUBLING instead of halving ✗; “cannot be determined” is DEMANDING MORE DATA — bisection is guaranteed in every parallelogram ✗.)',
    },
    {
      q: 'The two diagonals of parallelogram $JKLM$ meet at $X$. Given $KM = 34$, find $KX$.',
      fig: {
        view: [-1, -1.5, 10.6, 6],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [9.5, 4.5], [2.5, 4.5]], fill: false },
          { t: 'seg', a: [0, 0], b: [9.5, 4.5], dash: true },
          { t: 'seg', a: [7, 0], b: [2.5, 4.5], dash: true },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [7, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [9.5, 4.5], label: 'L', dx: 10, dy: -8 },
          { t: 'point', p: [2.5, 4.5], label: 'M', dx: -10, dy: -8 },
          { t: 'point', p: [4.75, 2.25], label: 'X', dx: 4, dy: -10 },
        ],
      },
      choices: ['$68$', '$17$', '$34$', 'It cannot be determined'],
      answer: 1,
      solution:
        'Diagonals of a parallelogram cut each other exactly in half, so $X$ is the midpoint of $\\overline{KM}$ and $KX = \\frac{34}{2} = 17$ ✓. Check a second, independent way with triangles: $\\overline{JK} \\parallel \\overline{ML}$ with $JK = ML$, so alternate interior angles make triangles $KXJ$ and $MXL$ congruent by ASA, and corresponding sides give $KX = MX$ — equal shares of $34$, so each is $17$ ✓. (The choice $68$ is DOUBLING instead of halving ✗; $34$ is COPYING THE WHOLE DIAGONAL ✗; “cannot be determined” is DEMANDING MORE DATA when bisection comes free with every parallelogram ✗.)',
    },
    {
      q: 'Braces run along both diagonals of a parallelogram-shaped gate $PQRS$, crossing at $O$. If the brace $\\overline{QS}$ is $17$ feet long, how many feet is $QO$?',
      fig: {
        view: [-1, -1.5, 13.1, 5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [12, 3.5], [2, 3.5]], fill: false },
          { t: 'seg', a: [0, 0], b: [12, 3.5], dash: true },
          { t: 'seg', a: [10, 0], b: [2, 3.5], dash: true },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [12, 3.5], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [2, 3.5], label: 'S', dx: -10, dy: -8 },
          { t: 'point', p: [6, 1.75], label: 'O', dx: 4, dy: -10 },
        ],
      },
      choices: ['$17$', 'It cannot be determined', '$8.5$', '$34$'],
      answer: 2,
      solution:
        'In any parallelogram the diagonals bisect each other, so the crossing $O$ marks the center of the gate and the midpoint of $\\overline{QS}$: $QO = \\frac{17}{2} = 8.5$ feet ✓. Check a second, independent way through congruence: $\\overline{PQ} \\parallel \\overline{SR}$ and $PQ = SR$ hand triangles $QOP$ and $SOR$ two pairs of alternate interior angles around equal sides — ASA — so $QO = SO$, and two equal pieces of $17$ measure $8.5$ apiece ✓. (The choice $17$ is COPYING THE WHOLE BRACE ✗; $34$ is DOUBLING instead of halving ✗; “cannot be determined” is DEMANDING MORE DATA — the bisection needs no measurements at all ✗.)',
    },
  ],
  // s5 — area with a decoy slanted side.
  [
    {
      q: 'A flower bed is shaped like the parallelogram $EFGH$ shown: the base measures $9$, the slanted side measures $10$, and the dashed height to the base measures $8$. How much area does the bed cover?',
      fig: {
        view: [-1, -1.5, 16.1, 9.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [15, 8], [6, 8]], fill: false },
          { t: 'seg', a: [6, 8], b: [6, 0], dash: true },
          { t: 'right', at: [6, 0], from: [9, 0], to: [6, 8] },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [3, 4], text: '10', dx: -12, dy: -4 },
          { t: 'label', p: [6, 4], text: '8', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [9, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [15, 8], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [6, 8], label: 'H', dx: -10, dy: -8 },
        ],
      },
      choices: ['$90$', '$72$', '$36$', '$80$'],
      answer: 1,
      solution:
        'Area of a parallelogram is base times TRUE height, and the true height is the perpendicular $8$ — the $10$ is a slanted side, not a height: Area $= 9 \\times 8 = 72$ ✓. Check a second, independent way by rearrangement: the dashed height cuts off a right triangle with legs $6$ and $8$ and hypotenuse $10$; sliding that triangle from one end of the bed to the other reassembles the figure into a $9$-by-$8$ rectangle, area $72$ ✓. (The choice $90$ is MULTIPLYING BY THE SLANT, $9 \\times 10$ ✗; $36$ is HALVING LIKE A TRIANGLE ✗; $80$ is PAIRING THE SLANT WITH THE HEIGHT, $10 \\times 8$ ✗.)',
    },
    {
      q: 'The parallelogram-shaped metal plate $JKLM$ shown has a base of $12$, a slanted edge of $10$, and a height of $9$ drawn to the base. What is the area of the plate?',
      fig: {
        view: [-1, -1.5, 17.5, 10.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [16.3589, 9], [4.3589, 9]], fill: false },
          { t: 'seg', a: [4.3589, 9], b: [4.3589, 0], dash: true },
          { t: 'right', at: [4.3589, 0], from: [12, 0], to: [4.3589, 9] },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [2.1795, 4.5], text: '10', dx: -12, dy: -4 },
          { t: 'label', p: [4.3589, 4.5], text: '9', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [16.3589, 9], label: 'L', dx: 10, dy: -8 },
          { t: 'point', p: [4.3589, 9], label: 'M', dx: -10, dy: -8 },
        ],
      },
      choices: ['$120$', '$54$', '$90$', '$108$'],
      answer: 3,
      solution:
        'The height must run perpendicular to the base, so the $9$ is the height and the slanted $10$ is a decoy: Area $= 12 \\times 9 = 108$ ✓. Check a second, independent way by rearrangement: the dashed height chops a right triangle off the left end of the plate, and sliding it to the right end turns the parallelogram into a $12$-by-$9$ rectangle — area $108$ again ✓. (The choice $120$ is MULTIPLYING BY THE SLANT, $12 \\times 10$ ✗; $54$ is HALVING LIKE A TRIANGLE ✗; $90$ is PAIRING THE SLANT WITH THE HEIGHT, $10 \\times 9$ ✗.)',
    },
    {
      q: 'A mural panel is the parallelogram $PQRS$ shown, with base $10$, slanted side $17$, and height $15$ to the base. Find the panel’s area.',
      fig: {
        view: [-1, -1.5, 19.1, 16.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [18, 15], [8, 15]], fill: false },
          { t: 'seg', a: [8, 15], b: [8, 0], dash: true },
          { t: 'right', at: [8, 0], from: [10, 0], to: [8, 15] },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [4, 7.5], text: '17', dx: -12, dy: -4 },
          { t: 'label', p: [8, 7.5], text: '15', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [18, 15], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [8, 15], label: 'S', dx: -10, dy: -8 },
        ],
      },
      choices: ['$150$', '$170$', '$75$', '$255$'],
      answer: 0,
      solution:
        'Only the perpendicular distance counts as height, so Area $=$ base $\\times$ height $= 10 \\times 15 = 150$ — the slanted $17$ never enters ✓. Check a second, independent way by rearrangement: the dashed height slices off a right triangle with legs $8$ and $15$ and hypotenuse $17$ (the $8$-$15$-$17$ triple), and sliding it across rebuilds the panel as a $10$-by-$15$ rectangle of area $150$ ✓. (The choice $170$ is MULTIPLYING BY THE SLANT, $10 \\times 17$ ✗; $75$ is HALVING LIKE A TRIANGLE ✗; $255$ is PAIRING THE SLANT WITH THE HEIGHT, $17 \\times 15$ ✗.)',
    },
  ],
  // s6 — which condition guarantees a parallelogram.
  [
    {
      q: 'A drafting student marks quadrilateral $EFGH$ and verifies exactly one fact about it. Which fact would GUARANTEE that $EFGH$ is a parallelogram?',
      choices: [
        'One pair of opposite sides is parallel, and the other pair is equal in length',
        'The diagonals are perpendicular to each other',
        'One pair of opposite sides is both parallel and equal in length',
        'Two pairs of consecutive sides are equal in length',
      ],
      answer: 2,
      solution:
        'Suppose $\\overline{EF} \\parallel \\overline{HG}$ with $EF = HG$. Draw diagonal $\\overline{EG}$: the parallel sides give equal alternate interior angles, and with the equal sides this is SAS, so $\\triangle GEF \\cong \\triangle EGH$ — the leftover pair of sides comes out equal AND at equal alternate angles, hence parallel, and both pairs of opposite sides are parallel ✓. Check a second, independent way with arrows: the arrow from $E$ to $F$ and the arrow from $H$ to $G$ point the same way with the same length, so the connectors $\\overline{EH}$ and $\\overline{FG}$ are translates of each other — automatically parallel ✓. (The first choice is BUILDING AN ISOSCELES TRAPEZOID — parallel bases with equal legs pass that test without being a parallelogram ✗; perpendicular diagonals is DRAWING A KITE ✗; equal consecutive pairs is FOLDING INTO A KITE as well ✗.)',
    },
    {
      q: 'A carpenter checks a quadrilateral window frame $JKLM$ with only a tape measure — no angle tools. Which measurement result would PROVE the frame is a parallelogram?',
      choices: [
        'Both pairs of opposite sides are equal in length',
        'The two diagonals are equal in length',
        'One pair of opposite sides is equal in length',
        'One diagonal cuts the other into two equal pieces',
      ],
      answer: 0,
      solution:
        'If $JK = ML$ and $KL = JM$, draw diagonal $\\overline{JL}$: the two triangles it creates share that diagonal and match on the other two sides — SSS congruence — so the alternate interior angles at $J$ and $L$ agree, forcing $\\overline{JK} \\parallel \\overline{ML}$ and $\\overline{KL} \\parallel \\overline{JM}$: a parallelogram ✓. Check a second, independent way with the other diagonal: $\\overline{KM}$ delivers its own SSS pair and the same parallel conclusions, with no step borrowed from the first argument ✓. (Equal diagonals is MEASURING AN ISOSCELES TRAPEZOID, whose diagonals also match ✗; a single equal pair is STOPPING AT ONE PAIR — the equal legs of an isosceles trapezoid pass it ✗; one-way bisection is BISECTING ONLY ONE DIAGONAL — a kite’s axis cuts the cross diagonal in half without making a parallelogram ✗.)',
    },
    {
      q: 'Which single condition on quadrilateral $WXYZ$ forces it to be a parallelogram?',
      choices: [
        'One pair of consecutive angles is supplementary',
        'The diagonals are perpendicular and equal in length',
        'One pair of opposite sides is equal in length',
        'Both pairs of opposite angles are equal',
      ],
      answer: 3,
      solution:
        'Say the equal opposite pairs measure $x$ and $y$. The four angles of any quadrilateral sum to $360^\\circ$, so $2x + 2y = 360^\\circ$ and $x + y = 180^\\circ$ — every consecutive pair is supplementary ✓. Check a second, independent way by converting supplements into parallels: along side $\\overline{WX}$, the supplementary co-interior pair forces $\\overline{WZ} \\parallel \\overline{XY}$, and along side $\\overline{XY}$ it forces $\\overline{WX} \\parallel \\overline{ZY}$ — both pairs of opposite sides parallel, which is the definition of a parallelogram ✓. (One supplementary consecutive pair is SETTLING FOR A TRAPEZOID — it delivers just one pair of parallel sides ✗; perpendicular equal diagonals is CROSSING STICKS OFF-CENTER — two equal sticks crossed away from their midpoints span no parallelogram ✗; one equal pair of opposite sides is MATCHING THE LEGS OF A TRAPEZOID ✗.)',
    },
  ],
  // s7 — opposite sides as algebraic expressions.
  [
    {
      q: 'In parallelogram $ABCD$, the side $\\overline{AB}$ measures $4x - 1$ and the opposite side $\\overline{DC}$ measures $x + 14$. How long is $\\overline{AB}$?',
      fig: {
        view: [-1, -1.5, 10.1, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [9, 3], [2, 3]], fill: false },
          { t: 'tick', a: [0, 0], b: [7, 0], n: 1 },
          { t: 'tick', a: [2, 3], b: [9, 3], n: 1 },
          { t: 'label', p: [3.5, 0], text: '4x-1', dx: 0, dy: 14 },
          { t: 'label', p: [5.5, 3], text: 'x+14', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [7, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [9, 3], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [2, 3], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$5$', '$11$', '$14$', '$19$'],
      answer: 3,
      solution:
        'Opposite sides of a parallelogram are equal, so $4x - 1 = x + 14$; subtracting $x$ from both sides and adding $1$ gives $3x = 15$, so $x = 5$ and $AB = 4(5) - 1 = 19$ ✓. Check a second, independent way through the other expression: $DC = 5 + 14 = 19$, and the two opposite sides agree at $19$, exactly as a parallelogram demands ✓. (The choice $5$ is HANDING BACK $x$ instead of the side length ✗; $11$ is FLIPPING A SIGN — collecting into $5x = 15$, getting $x = 3$, and evaluating $4(3) - 1$ ✗; $14$ is GRABBING THE CONSTANT from $x + 14$ ✗.)',
    },
    {
      q: 'The top rail $\\overline{ML}$ of parallelogram $JKLM$ measures $2x + 20$, and the bottom rail $\\overline{JK}$ measures $5x - 1$. Find the length of $\\overline{JK}$.',
      fig: {
        view: [-1, -1.5, 10, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6.8, 0], [8.9, 3], [2.1, 3]], fill: false },
          { t: 'tick', a: [0, 0], b: [6.8, 0], n: 1 },
          { t: 'tick', a: [2.1, 3], b: [8.9, 3], n: 1 },
          { t: 'label', p: [3.4, 0], text: '5x-1', dx: 0, dy: 14 },
          { t: 'label', p: [5.5, 3], text: '2x+20', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [6.8, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [8.9, 3], label: 'L', dx: 10, dy: -8 },
          { t: 'point', p: [2.1, 3], label: 'M', dx: -10, dy: -8 },
        ],
      },
      choices: ['$7$', '$34$', '$14$', '$20$'],
      answer: 1,
      solution:
        'The rails are opposite sides of a parallelogram, so their lengths match: $5x - 1 = 2x + 20$, which collects to $3x = 21$ and $x = 7$, giving $JK = 5(7) - 1 = 34$ ✓. Check a second, independent way with the top rail: $ML = 2(7) + 20 = 34$ — both expressions land on the same $34$, as equality requires ✓. (The choice $7$ is HANDING BACK $x$ ✗; $14$ is FLIPPING A SIGN — collecting into $7x = 21$, getting $x = 3$, and evaluating $5(3) - 1$ ✗; $20$ is GRABBING THE CONSTANT from $2x + 20$ ✗.)',
    },
    {
      q: 'Parallelogram $WXYZ$ has $WX = 2x - 9$ and the opposite side $ZY = x + 19$. What is the length of $\\overline{WX}$?',
      fig: {
        view: [-1, -1.5, 10.1, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [7.2, 0], [9, 3], [1.8, 3]], fill: false },
          { t: 'tick', a: [0, 0], b: [7.2, 0], n: 1 },
          { t: 'tick', a: [1.8, 3], b: [9, 3], n: 1 },
          { t: 'label', p: [3.6, 0], text: '2x-9', dx: 0, dy: 14 },
          { t: 'label', p: [5.4, 3], text: 'x+19', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'W', dx: -10, dy: 10 },
          { t: 'point', p: [7.2, 0], label: 'X', dx: 10, dy: 10 },
          { t: 'point', p: [9, 3], label: 'Y', dx: 10, dy: -8 },
          { t: 'point', p: [1.8, 3], label: 'Z', dx: -10, dy: -8 },
        ],
      },
      choices: ['$28$', '$11$', '$47$', '$19$'],
      answer: 2,
      solution:
        'Opposite sides of a parallelogram carry equal lengths, so $2x - 9 = x + 19$; subtracting $x$ and adding $9$ gives $x = 28$, and $WX = 2(28) - 9 = 47$ ✓. Check a second, independent way on the far side: $ZY = 28 + 19 = 47$ — the opposite sides agree at $47$ ✓. (The choice $28$ is HANDING BACK $x$ rather than the side ✗; $11$ is FLIPPING A SIGN — moving the $9$ the wrong way into $x = 19 - 9 = 10$ and evaluating $2(10) - 9$ ✗; $19$ is GRABBING THE CONSTANT from $x + 19$ ✗.)',
    },
  ],
  // s8 — consecutive angles as algebra, larger angle asked.
  [
    {
      q: 'The two marked angles of parallelogram $EFGH$ sit at the ends of side $\\overline{EF}$ and measure $2x + 15^\\circ$ and $x^\\circ$. Find the larger angle of the parallelogram.',
      fig: {
        view: [-3.3, -1.5, 7.5, 3.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [4.394, 2.2936], [-1.606, 2.2936]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [-1.606, 2.2936], r: 0.9, label: '2x+15' },
          { t: 'angle', at: [6, 0], from: [4.394, 2.2936], to: [0, 0], r: 0.9, label: 'x' },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [4.394, 2.2936], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [-1.606, 2.2936], label: 'H', dx: -10, dy: -8 },
        ],
      },
      choices: ['$125^\\circ$', '$55^\\circ$', '$115^\\circ$', '$65^\\circ$'],
      answer: 0,
      solution:
        'Angles at the two ends of one side are consecutive, hence supplementary: $(2x + 15) + x = 180$, so $3x = 165$ and $x = 55$; the angles measure $2(55) + 15 = 125^\\circ$ and $55^\\circ$, and the larger is $125^\\circ$ ✓. Check a second, independent way with the full tour: opposite angles repeat, so the four angles are $125^\\circ, 55^\\circ, 125^\\circ, 55^\\circ$, and $125 + 55 + 125 + 55 = 360$ ✓. (The choice $55^\\circ$ is HANDING BACK $x$ — which here is also the smaller angle ✗; $115^\\circ$ is SUMMING TO THE FULL $360$, solving $3x + 15 = 360$ and reporting that $x$ ✗; $65^\\circ$ is USING $90$ INSTEAD OF $180$, from $3x + 15 = 90$ ✗.)',
    },
    {
      q: 'A parallelogram-shaped ramp face $JKLM$ has the marked angles $3x^\\circ$ and $2x - 20^\\circ$ at the two ends of its base. What is the larger angle of the parallelogram?',
      fig: {
        view: [-3.1, -1.5, 7.5, 4],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [4.6, 2.4249], [-1.4, 2.4249]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [-1.4, 2.4249], r: 0.9, label: '3x' },
          { t: 'angle', at: [6, 0], from: [4.6, 2.4249], to: [0, 0], r: 0.9, label: '2x-20' },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [4.6, 2.4249], label: 'L', dx: 10, dy: -8 },
          { t: 'point', p: [-1.4, 2.4249], label: 'M', dx: -10, dy: -8 },
        ],
      },
      choices: ['$40^\\circ$', '$66^\\circ$', '$120^\\circ$', '$60^\\circ$'],
      answer: 2,
      solution:
        'The two angles share the base, so they are supplementary: $3x + (2x - 20) = 180$, giving $5x = 200$, $x = 40$; the angles are $3(40) = 120^\\circ$ and $2(40) - 20 = 60^\\circ$, and the larger is $120^\\circ$ ✓. Check a second, independent way by completing the parallelogram: opposite angles copy across, so the four angles read $120^\\circ, 60^\\circ, 120^\\circ, 60^\\circ$ and total $360^\\circ$ on the nose ✓. (The choice $40^\\circ$ is HANDING BACK $x$ ✗; $66^\\circ$ is USING $90$ INSTEAD OF $180$, from $5x - 20 = 90$ with $x = 22$ ✗; $60^\\circ$ is REPORTING THE SMALLER ANGLE ✗.)',
    },
    {
      q: 'In parallelogram $PQRS$, the angles at $P$ and $Q$, which share side $\\overline{PQ}$, measure $4x - 5^\\circ$ and $x + 35^\\circ$. Find the measure of the parallelogram’s larger angle.',
      fig: {
        view: [-2.9, -1.5, 7.5, 4.1],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [4.8167, 2.5377], [-1.1833, 2.5377]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [-1.1833, 2.5377], r: 0.9, label: '4x-5' },
          { t: 'angle', at: [6, 0], from: [4.8167, 2.5377], to: [0, 0], r: 0.9, label: 'x+35' },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [4.8167, 2.5377], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [-1.1833, 2.5377], label: 'S', dx: -10, dy: -8 },
        ],
      },
      choices: ['$30^\\circ$', '$115^\\circ$', '$65^\\circ$', '$43^\\circ$'],
      answer: 1,
      solution:
        'Sharing a side makes the two angles consecutive, so they sum to $180^\\circ$: $(4x - 5) + (x + 35) = 180$ collapses to $5x + 30 = 180$, so $x = 30$; the angles are $4(30) - 5 = 115^\\circ$ and $30 + 35 = 65^\\circ$, and the larger is $115^\\circ$ ✓. Check a second, independent way with the angle total: the opposite twins repeat each measure, and $115 + 65 + 115 + 65 = 360$ — the quadrilateral closes up ✓. (The choice $30^\\circ$ is HANDING BACK $x$ ✗; $65^\\circ$ is REPORTING THE SMALLER ANGLE ✗; $43^\\circ$ is USING $90$ INSTEAD OF $180$, from $5x + 30 = 90$ with $x = 12$ ✗.)',
    },
  ],
  // s9 — both diagonals and a side: perimeter of a half-diagonal triangle.
  [
    {
      q: 'The diagonals of parallelogram $ABCD$ meet at the center point $M$. A wire triangle is bent to fit exactly around $\\triangle ABM$, where $AC = 20$, $BD = 14$, and $AB = 12$. How much wire does the triangle use?',
      fig: {
        view: [-11.5, -8.5, 11.5, 8.5],
        elems: [
          { t: 'poly', pts: [[-10, 0], [-0.25, -6.9955], [10, 0], [0.25, 6.9955]], fill: false },
          { t: 'seg', a: [-10, 0], b: [10, 0], dash: true },
          { t: 'seg', a: [-0.25, -6.9955], b: [0.25, 6.9955], dash: true },
          { t: 'point', p: [-10, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [-0.25, -6.9955], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [10, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0.25, 6.9955], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'M', dx: 12, dy: -8 },
        ],
      },
      choices: ['$46$', '$29$', '$23$', '$17$'],
      answer: 1,
      solution:
        'The diagonals bisect each other at the center $M$, so $AM = \\frac{20}{2} = 10$ and $BM = \\frac{14}{2} = 7$; the wire runs $10 + 7 + 12 = 29$ ✓. Check a second, independent way by grouping the halves first: the two half-diagonals together make $\\frac{AC + BD}{2} = \\frac{34}{2} = 17$, and adding the side gives $17 + 12 = 29$ ✓. (The choice $46$ is SKIPPING THE HALVING, $20 + 14 + 12$ with full diagonals ✗; $23$ is HALVING THE SIDE TOO, $10 + 7 + 6$ ✗; $17$ is DROPPING THE SIDE and summing only the half-diagonals ✗.)',
    },
    {
      q: 'In parallelogram $ABCD$ the diagonals intersect at $M$, with $AC = 20$, $BD = 16$, and side $AB = 13$. What is the perimeter of triangle $ABM$?',
      fig: {
        view: [-11.5, -9.5, 11.5, 9.5],
        elems: [
          { t: 'poly', pts: [[-10, 0], [0.25, -7.9961], [10, 0], [-0.25, 7.9961]], fill: false },
          { t: 'seg', a: [-10, 0], b: [10, 0], dash: true },
          { t: 'seg', a: [0.25, -7.9961], b: [-0.25, 7.9961], dash: true },
          { t: 'point', p: [-10, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [0.25, -7.9961], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [10, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [-0.25, 7.9961], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'M', dx: 12, dy: -8 },
        ],
      },
      choices: ['$49$', '$24.5$', '$18$', '$31$'],
      answer: 3,
      solution:
        'Because the diagonals of a parallelogram bisect each other, $M$ is the midpoint of both: $AM = \\frac{20}{2} = 10$ and $BM = \\frac{16}{2} = 8$, so the perimeter of $\\triangle ABM$ is $10 + 8 + 13 = 31$ ✓. Check a second, independent way by pooling the diagonals: half of the diagonal total is $\\frac{20 + 16}{2} = 18$, and the side completes it, $18 + 13 = 31$ ✓. (The choice $49$ is SKIPPING THE HALVING, $20 + 16 + 13$ ✗; $24.5$ is HALVING THE SIDE TOO, $10 + 8 + 6.5$ ✗; $18$ is DROPPING THE SIDE ✗.)',
    },
    {
      q: 'Parallelogram $ABCD$ has diagonals crossing at $M$, with $AC = 24$, $BD = 18$, and $AB = 14$. Find the distance traveled walking the boundary of $\\triangle ABM$ once.',
      fig: {
        view: [-13.5, -10.4, 13.5, 10.4],
        elems: [
          { t: 'poly', pts: [[-12, 0], [-1.2083, -8.9185], [12, 0], [1.2083, 8.9185]], fill: false },
          { t: 'seg', a: [-12, 0], b: [12, 0], dash: true },
          { t: 'seg', a: [-1.2083, -8.9185], b: [1.2083, 8.9185], dash: true },
          { t: 'point', p: [-12, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [-1.2083, -8.9185], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [12, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [1.2083, 8.9185], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'M', dx: 12, dy: -8 },
        ],
      },
      choices: ['$35$', '$56$', '$28$', '$21$'],
      answer: 0,
      solution:
        'The crossing point $M$ is the center of the parallelogram — the diagonals bisect each other there — so $AM = \\frac{24}{2} = 12$ and $BM = \\frac{18}{2} = 9$, and the walk covers $12 + 9 + 14 = 35$ ✓. Check a second, independent way with the halves grouped: $\\frac{AC + BD}{2} = \\frac{42}{2} = 21$ for the two half-diagonals, plus the side, $21 + 14 = 35$ ✓. (The choice $56$ is SKIPPING THE HALVING, $24 + 18 + 14$ ✗; $28$ is HALVING THE SIDE TOO, $12 + 9 + 7$ ✗; $21$ is DROPPING THE SIDE ✗.)',
    },
  ],
  // s10 — one height given, the height to the other side asked.
  [
    {
      q: 'A parallelogram-shaped table runner has sides $12$ and $8$, as shown. Measured perpendicular to a side of length $12$, its width is $4$. What is its width measured perpendicular to a side of length $8$?',
      fig: {
        view: [-1, -1.5, 20, 5.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [18.9282, 4], [6.9282, 4]], fill: false },
          { t: 'seg', a: [6.9282, 4], b: [6.9282, 0], dash: true },
          { t: 'right', at: [6.9282, 0], from: [12, 0], to: [6.9282, 4] },
          { t: 'label', p: [5.8, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [3.4641, 2], text: '8', dx: -10, dy: -4 },
          { t: 'label', p: [6.9282, 2], text: '4', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [18.9282, 4], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [6.9282, 4], label: 'H', dx: -10, dy: -8 },
        ],
      },
      choices: ['$4$', '$\\frac{8}{3}$', '$6$', '$48$'],
      answer: 2,
      solution:
        'The area is the same whichever side plays the base: $12 \\times 4 = 48$. Rebasing on the side of length $8$, $8h = 48$, so $h = 6$ ✓. Check a second, independent way with the proportion: the two heights of a parallelogram are inversely proportional to their bases, so $h = 4 \\cdot \\frac{12}{8} = 6$ — the shorter base carries the taller height ✓. (The choice $4$ is KEEPING THE SAME HEIGHT for a different base ✗; $\\frac{8}{3}$ is FLIPPING THE PROPORTION, $4 \\cdot \\frac{8}{12}$, which wrongly gives the shorter base the shorter height ✗; $48$ is ANSWERING THE AREA instead of a height ✗.)',
    },
    {
      q: 'In the parallelogram shown, the sides measure $15$ and $9$, and the height to the side of length $15$ is $6$. What is the height to the side of length $9$?',
      fig: {
        view: [-1, -1.5, 23, 7.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [21.7082, 6], [6.7082, 6]], fill: false },
          { t: 'seg', a: [6.7082, 6], b: [6.7082, 0], dash: true },
          { t: 'right', at: [6.7082, 0], from: [15, 0], to: [6.7082, 6] },
          { t: 'label', p: [5.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [3.3541, 3], text: '9', dx: -10, dy: -4 },
          { t: 'label', p: [6.7082, 3], text: '6', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [15, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [21.7082, 6], label: 'L', dx: 10, dy: -8 },
          { t: 'point', p: [6.7082, 6], label: 'M', dx: -10, dy: -8 },
        ],
      },
      choices: ['$10$', '$6$', '$\\frac{18}{5}$', '$90$'],
      answer: 0,
      solution:
        'One area, two bases: $15 \\times 6 = 90$, and with the side of length $9$ as the base, $9h = 90$, so $h = 10$ ✓. Check a second, independent way through the inverse proportion: heights scale opposite to their bases, $h = 6 \\cdot \\frac{15}{9} = 10$ — a base $\\frac{3}{5}$ as long needs a height $\\frac{5}{3}$ as tall ✓. (The choice $6$ is KEEPING THE SAME HEIGHT ✗; $\\frac{18}{5}$ is FLIPPING THE PROPORTION, $6 \\cdot \\frac{9}{15}$ ✗; $90$ is ANSWERING THE AREA ✗.)',
    },
    {
      q: 'A parallelogram has sides $14$ and $10$; the distance between its two sides of length $14$ is $5$, as shown. Find the distance between its two sides of length $10$.',
      fig: {
        view: [-1, -1.5, 24, 6.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [22.6603, 5], [8.6603, 5]], fill: false },
          { t: 'seg', a: [8.6603, 5], b: [8.6603, 0], dash: true },
          { t: 'right', at: [8.6603, 0], from: [14, 0], to: [8.6603, 5] },
          { t: 'label', p: [6.5, 0], text: '14', dx: 0, dy: 14 },
          { t: 'label', p: [4.3301, 2.5], text: '10', dx: -10, dy: -4 },
          { t: 'label', p: [8.6603, 2.5], text: '5', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'W', dx: -10, dy: 10 },
          { t: 'point', p: [14, 0], label: 'X', dx: 10, dy: 10 },
          { t: 'point', p: [22.6603, 5], label: 'Y', dx: 10, dy: -8 },
          { t: 'point', p: [8.6603, 5], label: 'Z', dx: -10, dy: -8 },
        ],
      },
      choices: ['$5$', '$\\frac{25}{7}$', '$70$', '$7$'],
      answer: 3,
      solution:
        'The distance between a pair of opposite sides is the height to that pair, so the area is $14 \\times 5 = 70$; using the sides of length $10$ as the base instead, $10h = 70$ and $h = 7$ ✓. Check a second, independent way by inverse proportion: $h = 5 \\cdot \\frac{14}{10} = 7$ — shrinking the base from $14$ to $10$ stretches the height by the same factor ✓. (The choice $5$ is KEEPING THE SAME HEIGHT for a new base ✗; $\\frac{25}{7}$ is FLIPPING THE PROPORTION, $5 \\cdot \\frac{10}{14}$ ✗; $70$ is ANSWERING THE AREA rather than a distance between sides ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 8,
  sections: {
    '8.3': s83,
  },
}
