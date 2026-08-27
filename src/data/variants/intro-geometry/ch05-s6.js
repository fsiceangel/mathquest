// Introduction to Geometry chapter 5 — variations for the CHALLENGE set.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every answer was worked twice by two genuinely different routes, and the
//    two routes had to agree before the key was written. The pairs used are:
//    scale factor from the perimeters vs. a direct side-to-perimeter
//    proportion, confirmed by summing all three scaled sides (slot 1); the
//    whole-side ratio AD/AB vs. computing only the GROWTH of the parallel
//    side from the leftover piece (slot 2); completing the given triangle’s
//    angle set vs. completing each candidate pair and comparing sets (slot 3);
//    the height-to-shadow ratio vs. the shadow-to-shadow scale factor
//    (slot 4); SAS similarity at the shared vertex vs. the parallel-line
//    argument through the converse of the side-splitter (slot 5); dividing
//    sorted entries vs. reducing both triples to simplest form (slot 6); the
//    hourglass ratio as a fraction of the diagonal vs. solving
//    x/(BD - x) = ratio (slot 7); squaring the ratio vs. applying the factor
//    to base and height one at a time (slots 8, 10); the geometric-mean
//    relation leg^2 = piece x hypotenuse vs. the altitude plus the
//    Pythagorean Theorem (slot 9); cross-multiplying AB^2 = AD x AC vs.
//    chaining the scale factor k = AB/AD twice (slot 11); squaring the
//    similarity ratio vs. writing both areas as half base times height with
//    proportional heights (slot 12).
//  - Every figure is coordinate-exact. Parallel segments are exact scalar
//    multiples, every labelled length agrees with the drawn distance to the
//    last decimal (irrational heights are carried to four decimals), and each
//    trapezoid’s diagonals genuinely pass through the drawn intersection
//    point, which sits at the exact ratio point of BOTH diagonals — even the
//    unlabelled diagonals are drawn at their true stated lengths.
//  - Figure labels are plain text: bare numerals and the letters of points.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS. The traps running through this challenge set are: SCALING THE
//    WRONG SIDE, ADDING AN EQUAL SHARE OF THE EXTRA PERIMETER, DIVIDING THE
//    NEW PERIMETER BY THREE, COMPARING AD WITH DB, ADDING DB TO DE, FLIPPING
//    THE SCALE FACTOR, DOUBLING A GIVEN ANGLE, ADDING THE TWO GIVEN ANGLES,
//    CLAIMING A RIGHT ANGLE THAT WAS NEVER GIVEN, DOUBLING THE COMPUTED
//    ANGLE, COPYING THE SHADOW, KEEPING THE SAME GAP, FLIPPING THE
//    HEIGHT-TO-SHADOW RATIO, MULTIPLYING BY THE POST HEIGHT, ADDING THE
//    GROWTH OF ONE ARM, COPYING BC, MATCHING SIDES ACROSS THE WRONG PAIR,
//    MATCHING UNSORTED ENTRIES, TAKING THE OTHER PIECE OF THE DIAGONAL,
//    ASSUMING THE DIAGONALS BISECT EACH OTHER, SQUARING THE RATIO OF
//    LENGTHS, USING AB:DC AS THE FRACTION OF THE WHOLE, SCALING THE AREA
//    ONLY ONCE, SQUARING THE FLIPPED RATIO, SQUARING ONLY ONE TERM OF THE
//    RATIO, AVERAGING THE TWO PIECES, FORGETTING THE SQUARE ROOT,
//    MULTIPLYING THE TWO PIECES, ADDING THE PERIMETER DIFFERENCE, STOPPING
//    AT AC, SUBTRACTING AD FROM AB, ADDING AD TO AC, FORGETTING TO SQUARE,
//    FLIPPING THE SQUARED RATIO, and CUBING THE RATIO.
//  - No two choices inside an item name the same value, and across the base
//    problem and its three variations every one of the four answer positions
//    is used exactly once.

const challenge = [
  // slot 1 — side triple plus the perimeter of a similar triangle, find one
  // side of the copy. Lane: 12.5 / 7.5 / 20.
  [
    {
      q: '$\\triangle PQR \\sim \\triangle STU$ with $PQ = 5$, $QR = 6$, and $RP = 7$. If the perimeter of $\\triangle STU$ is $45$, find $ST$.',
      choices: ['$14$', '$15$', '$12.5$', '$17.5$'],
      answer: 2,
      solution:
        'The perimeter of $\\triangle PQR$ is $5 + 6 + 7 = 18$, so the scale factor to the copy is $\\frac{45}{18} = \\frac{5}{2}$. By letter order $\\overline{ST}$ matches $\\overline{PQ}$, so $ST = \\frac{5}{2} \\times 5 = 12.5$ ✓. Check a second, independent way without ever naming the factor: sides and perimeters of similar triangles sit in one proportion, $\\frac{ST}{5} = \\frac{45}{18}$, and cross-multiplying gives $18 \\cdot ST = 225$, so $ST = 12.5$ ✓. Full-triple check: the copy has sides $12.5$, $15$, $17.5$, and $12.5 + 15 + 17.5 = 45$ ✓. (The choices $15$ and $17.5$ are SCALING THE WRONG SIDE — they are $TU$ and $US$; the choice $14$ is ADDING AN EQUAL SHARE OF THE EXTRA PERIMETER, $5 + \\frac{45 - 18}{3}$, but enlargement multiplies each side, it never hands out equal bonuses.)',
    },
    {
      q: 'Two similar triangles are drawn: $\\triangle JKL \\sim \\triangle MNP$, where $JK = 5$, $KL = 9$, and $LJ = 12$. The perimeter of $\\triangle MNP$ is $39$. How long is $\\overline{MN}$?',
      choices: ['$13.5$', '$7.5$', '$13$', '$18$'],
      answer: 1,
      solution:
        'The first perimeter is $5 + 9 + 12 = 26$, so every length is multiplied by $\\frac{39}{26} = \\frac{3}{2}$. The letters pair $\\overline{MN}$ with $\\overline{JK}$, so $MN = \\frac{3}{2} \\times 5 = 7.5$ ✓. Check a second, independent way with a single proportion: $\\frac{MN}{5} = \\frac{39}{26}$, so $26 \\cdot MN = 195$ and $MN = 7.5$ ✓. Summing the whole copy confirms it: $7.5 + 13.5 + 18 = 39$ ✓. (The choices $13.5$ and $18$ are SCALING THE WRONG SIDE — those are $NP$ and $PM$; the choice $13$ is DIVIDING THE NEW PERIMETER BY THREE, which would only work if the triangle were equilateral, and a $5$–$9$–$12$ triangle is far from it.)',
    },
    {
      q: 'A triangle with sides $8$, $9$, and $13$ is enlarged to a similar triangle whose perimeter is $75$. In $\\triangle ABC \\sim \\triangle XYZ$ with these measurements ($AB = 8$, $BC = 9$, $CA = 13$), what is $XY$?',
      choices: ['$22.5$', '$25$', '$32.5$', '$20$'],
      answer: 3,
      solution:
        'The small perimeter is $8 + 9 + 13 = 30$, so the factor is $\\frac{75}{30} = \\frac{5}{2}$, and $\\overline{XY}$ corresponds to $\\overline{AB}$: $XY = \\frac{5}{2} \\times 8 = 20$ ✓. Check a second, independent way: set $\\frac{XY}{8} = \\frac{75}{30}$ directly, so $30 \\cdot XY = 600$ and $XY = 20$ ✓. The enlarged sides are $20$, $22.5$, $32.5$, and they add to $75$ ✓. (The choices $22.5$ and $32.5$ are SCALING THE WRONG SIDE — they belong to $\\overline{YZ}$ and $\\overline{ZX}$; the choice $25$ is DIVIDING THE NEW PERIMETER BY THREE, treating a plainly scalene triangle as equilateral.)',
    },
  ],

  // slot 2 — a segment parallel to one side cuts off a similar triangle; from
  // the two pieces of one side and the parallel segment, find the third side.
  // Lane: 14 / 17.5 / 16.
  [
    {
      q: 'In $\\triangle PQR$ shown, $S$ lies on $\\overline{PQ}$ and $T$ lies on $\\overline{PR}$, with $\\overline{ST} \\parallel \\overline{QR}$. Given $PS = 5$, $SQ = 5$, and $ST = 7$, find $QR$.',
      fig: {
        view: [-1.5, -1.5, 12.7, 11.5],
        alt: 'Triangle PQR with segment ST parallel to QR, S on PQ and T on PR',
        elems: [
          { t: 'poly', pts: [[0, 10], [0, 0], [11.2, 8.4]], fill: false },
          { t: 'seg', a: [0, 5], b: [5.6, 9.2] },
          { t: 'point', p: [0, 10], label: 'P', dx: -10, dy: -6 },
          { t: 'point', p: [0, 0], label: 'Q', dx: -10, dy: 10 },
          { t: 'point', p: [11.2, 8.4], label: 'R', dx: 12, dy: -4 },
          { t: 'point', p: [0, 5], label: 'S', dx: -10, dy: 0 },
          { t: 'point', p: [5.6, 9.2], label: 'T', dx: 4, dy: -10 },
          { t: 'label', p: [0, 7.5], text: '5', dx: -10, dy: 0 },
          { t: 'label', p: [0, 2.5], text: '5', dx: -10, dy: 0 },
          { t: 'label', p: [2.8, 7.1], text: '7', dx: 6, dy: 12 },
          { t: 'label', p: [5.6, 4.2], text: '?', dx: 6, dy: 12 },
        ],
      },
      choices: ['$14$', '$7$', '$12$', '$3.5$'],
      answer: 0,
      solution:
        'Since $\\overline{ST} \\parallel \\overline{QR}$, we get $\\triangle PST \\sim \\triangle PQR$ by AA, and the ratio uses the WHOLE side: $\\frac{PS}{PQ} = \\frac{5}{5 + 5} = \\frac{1}{2}$. So $QR = 7 \\div \\frac{1}{2} = 14$ ✓. Check a second, independent way by computing only the growth: since $QR = ST \\cdot \\frac{PS + SQ}{PS}$, the extra length is $QR - ST = ST \\cdot \\frac{SQ}{PS} = 7 \\cdot \\frac{5}{5} = 7$, so $QR = 7 + 7 = 14$ ✓. And the big triangle should have the bigger parallel side: $14 > 7$ ✓. (The choice $7$ is COMPARING AD WITH DB in this figure’s clothing — the ratio $\\frac{PS}{SQ} = 1$ wrongly suggests no growth at all; the choice $12$ is ADDING DB TO DE, tacking $SQ = 5$ onto $ST$; the choice $3.5$ is FLIPPING THE SCALE FACTOR, which shrinks the side that must grow.)',
    },
    {
      q: 'In the figure, $M$ is on $\\overline{JK}$ and $N$ is on $\\overline{JL}$ of $\\triangle JKL$, with $\\overline{MN} \\parallel \\overline{KL}$. If $JM = 4$, $MK = 6$, and $MN = 7$, what is $KL$?',
      fig: {
        view: [-1.5, -1.5, 15.5, 12],
        alt: 'Triangle JKL with segment MN parallel to KL, M on JK and N on JL',
        elems: [
          { t: 'poly', pts: [[0, 10], [0, 0], [14, 10.5]], fill: false },
          { t: 'seg', a: [0, 6], b: [5.6, 10.2] },
          { t: 'point', p: [0, 10], label: 'J', dx: -10, dy: -6 },
          { t: 'point', p: [0, 0], label: 'K', dx: -10, dy: 10 },
          { t: 'point', p: [14, 10.5], label: 'L', dx: 12, dy: -4 },
          { t: 'point', p: [0, 6], label: 'M', dx: -12, dy: 0 },
          { t: 'point', p: [5.6, 10.2], label: 'N', dx: 4, dy: -10 },
          { t: 'label', p: [0, 8], text: '4', dx: -10, dy: 0 },
          { t: 'label', p: [0, 3], text: '6', dx: -10, dy: 0 },
          { t: 'label', p: [2.8, 8.1], text: '7', dx: 6, dy: 12 },
          { t: 'label', p: [7, 5.25], text: '?', dx: 6, dy: 12 },
        ],
      },
      choices: ['$10.5$', '$13$', '$2.8$', '$17.5$'],
      answer: 3,
      solution:
        'The parallel gives $\\triangle JMN \\sim \\triangle JKL$ by AA with ratio $\\frac{JM}{JK} = \\frac{4}{4 + 6} = \\frac{2}{5}$ — the denominator is the whole side $JK = 10$, not the piece $MK$. So $KL = 7 \\div \\frac{2}{5} = 17.5$ ✓. Check a second, independent way through the growth alone: $KL - MN = MN \\cdot \\frac{MK}{JM} = 7 \\cdot \\frac{6}{4} = 10.5$, so $KL = 7 + 10.5 = 17.5$ ✓. Both routes agree, and $17.5 > 7$ as an enlargement demands ✓. (The choice $10.5$ is COMPARING AD WITH DB — it uses $\\frac{4}{6}$ in place of $\\frac{4}{10}$, and here it hands you only the growth, not the side; the choice $13$ is ADDING DB TO DE, $7 + 6$; the choice $2.8$ is FLIPPING THE SCALE FACTOR, $7 \\times \\frac{2}{5}$.)',
    },
    {
      q: 'In $\\triangle DEF$ shown, $G$ lies on $\\overline{DE}$ and $H$ lies on $\\overline{DF}$, and $\\overline{GH} \\parallel \\overline{EF}$. Given $DG = 9$, $GE = 3$, and $GH = 12$, how long is $\\overline{EF}$?',
      fig: {
        view: [-1.5, -1.5, 14.3, 13.5],
        alt: 'Triangle DEF with segment GH parallel to EF, G on DE and H on DF',
        elems: [
          { t: 'poly', pts: [[0, 12], [0, 0], [12.8, 9.6]], fill: false },
          { t: 'seg', a: [0, 3], b: [9.6, 10.2] },
          { t: 'point', p: [0, 12], label: 'D', dx: -10, dy: -6 },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [12.8, 9.6], label: 'F', dx: 12, dy: -4 },
          { t: 'point', p: [0, 3], label: 'G', dx: -12, dy: 0 },
          { t: 'point', p: [9.6, 10.2], label: 'H', dx: 6, dy: -10 },
          { t: 'label', p: [0, 7.5], text: '9', dx: -10, dy: 0 },
          { t: 'label', p: [0, 1.5], text: '3', dx: -10, dy: 0 },
          { t: 'label', p: [4.8, 6.6], text: '12', dx: 8, dy: 14 },
          { t: 'label', p: [6.4, 4.8], text: '?', dx: 8, dy: 14 },
        ],
      },
      choices: ['$15$', '$4$', '$16$', '$9$'],
      answer: 2,
      solution:
        'With $\\overline{GH} \\parallel \\overline{EF}$, AA gives $\\triangle DGH \\sim \\triangle DEF$, and the ratio is $\\frac{DG}{DE} = \\frac{9}{9 + 3} = \\frac{3}{4}$ against the whole side $DE = 12$. So $EF = 12 \\div \\frac{3}{4} = 16$ ✓. Check a second, independent way from the growth: $EF - GH = GH \\cdot \\frac{GE}{DG} = 12 \\cdot \\frac{3}{9} = 4$, so $EF = 12 + 4 = 16$ ✓. Sanity: the whole triangle’s side must beat the cutoff’s, and $16 > 12$ ✓. (The choice $15$ is ADDING DB TO DE, $12 + 3$; the choice $9$ is FLIPPING THE SCALE FACTOR, $12 \\times \\frac{3}{4}$, which shrinks instead of grows; the choice $4$ is COMPARING AD WITH DB — the ratio $\\frac{3}{9}$ produces only the growth piece and mistakes it for the answer.)',
    },
  ],

  // slot 3 — which pair of angles forces AA similarity with the given
  // triangle. Lane: sets {34,73,73} / {25,40,115} / {28,62,90}.
  [
    {
      q: 'One triangle contains angles measuring $34^\\circ$ and $73^\\circ$. A second triangle MUST be similar to it if the second triangle has angles of',
      choices: ['$34^\\circ$ and $34^\\circ$', '$73^\\circ$ and $73^\\circ$', '$34^\\circ$ and $107^\\circ$', '$73^\\circ$ and $90^\\circ$'],
      answer: 1,
      solution:
        'Complete the first triangle: $180^\\circ - 34^\\circ - 73^\\circ = 73^\\circ$, so its angle set is $\\{34, 73, 73\\}$. A triangle with two $73^\\circ$ angles has third angle $180^\\circ - 146^\\circ = 34^\\circ$ — the same set, so AA applies ✓. Check a second, independent way by testing the winner directly against AA: the candidate owns a $73^\\circ$ angle and the original owns a $73^\\circ$ angle; the candidate owns a second $73^\\circ$ angle and so does the original — two matching pairs, similarity follows before the third angle is even mentioned ✓. The others fail: $\\{34, 34\\}$ completes to $112^\\circ$, $\\{34, 107\\}$ completes to $39^\\circ$, and $\\{73, 90\\}$ completes to $17^\\circ$ — none rebuilds $\\{34, 73, 73\\}$. (The first choice is DOUBLING A GIVEN ANGLE — repeating the wrong one; the choice $34^\\circ$ and $107^\\circ$ is ADDING THE TWO GIVEN ANGLES, since $107 = 34 + 73$; the last is CLAIMING A RIGHT ANGLE THAT WAS NEVER GIVEN.)',
    },
    {
      q: 'In $\\triangle GHK$, $\\angle G = 25^\\circ$ and $\\angle H = 40^\\circ$. A second triangle is guaranteed similar to $\\triangle GHK$ whenever two of its angles measure',
      choices: ['$40^\\circ$ and $115^\\circ$', '$25^\\circ$ and $25^\\circ$', '$25^\\circ$ and $65^\\circ$', '$50^\\circ$ and $115^\\circ$'],
      answer: 0,
      solution:
        'First finish $\\triangle GHK$: $\\angle K = 180^\\circ - 25^\\circ - 40^\\circ = 115^\\circ$, so the set is $\\{25, 40, 115\\}$. A triangle with angles $40^\\circ$ and $115^\\circ$ has third angle $180^\\circ - 155^\\circ = 25^\\circ$ — the same set, so the triangles are similar by AA ✓. Check a second, independent way: the candidate’s $40^\\circ$ matches $\\angle H$ and its $115^\\circ$ matches $\\angle K$; two matched pairs is AA on the spot, no completion needed ✓. The rest collapse: $\\{25, 25\\}$ completes to $130^\\circ$, $\\{25, 65\\}$ completes to $90^\\circ$, and $\\{50, 115\\}$ completes to $15^\\circ$ — different shapes all. (The choice $25^\\circ$ and $25^\\circ$ is DOUBLING A GIVEN ANGLE; the choice $25^\\circ$ and $65^\\circ$ is ADDING THE TWO GIVEN ANGLES, since $65 = 25 + 40$; the choice $50^\\circ$ and $115^\\circ$ is DOUBLING A GIVEN ANGLE again, this time the $25^\\circ$.)',
    },
    {
      q: 'A triangle has a right angle and a $28^\\circ$ angle. Which pair of angle measures FORCES a second triangle to be similar to it?',
      choices: ['$28^\\circ$ and $28^\\circ$', '$62^\\circ$ and $62^\\circ$', '$28^\\circ$ and $118^\\circ$', '$28^\\circ$ and $62^\\circ$'],
      answer: 3,
      solution:
        'The original triangle’s angles are $90^\\circ$, $28^\\circ$, and $180^\\circ - 90^\\circ - 28^\\circ = 62^\\circ$: the set $\\{28, 62, 90\\}$. A triangle with angles $28^\\circ$ and $62^\\circ$ has third angle $180^\\circ - 90^\\circ = 90^\\circ$ — the same set, so AA seals the similarity ✓. Check a second, independent way: $28^\\circ$ pairs with the original’s $28^\\circ$ and $62^\\circ$ pairs with the original’s $62^\\circ$; two equal pairs already give AA, and the right angle arrives free ✓. The others: $\\{28, 28\\}$ completes to $124^\\circ$, $\\{62, 62\\}$ completes to $56^\\circ$, and $\\{28, 118\\}$ completes to $34^\\circ$ — none is $\\{28, 62, 90\\}$. (The first choice is DOUBLING A GIVEN ANGLE; the second is DOUBLING THE COMPUTED ANGLE; the choice $28^\\circ$ and $118^\\circ$ is ADDING THE TWO GIVEN ANGLES, since $118 = 90 + 28$.)',
    },
  ],

  // slot 4 — sun shadows and AA. Lane: 15 / 16 / 19.5.
  [
    {
      q: 'A garden statue $1.8$ m tall casts a shadow $2.4$ m long. At the same moment, a pine tree casts a shadow $20$ m long. How tall is the pine?',
      choices: ['$19.4$ m', '$20$ m', '$15$ m', '$\\frac{80}{3}$ m'],
      answer: 2,
      solution:
        'Sun rays are parallel, so the statue’s triangle and the pine’s triangle are similar by AA (right angles at the ground, equal sun angles). Height over shadow is the same for both: $\\frac{\\text{pine}}{20} = \\frac{1.8}{2.4} = \\frac{3}{4}$, so the pine is $20 \\times \\frac{3}{4} = 15$ m ✓. Check a second, independent way with the shadow-to-shadow factor: the pine’s shadow is $\\frac{20}{2.4} = \\frac{25}{3}$ times the statue’s, so its height is $1.8 \\times \\frac{25}{3} = 15$ m ✓. Sanity: the statue is shorter than its shadow, so every object right now is shorter than its shadow, and $15 < 20$ ✓. (The choice $20$ m is COPYING THE SHADOW; the choice $19.4$ m is KEEPING THE SAME GAP, subtracting the statue’s $0.6$ m shortfall from $20$ — similar figures share ratios, never differences; the choice $\\frac{80}{3}$ m is FLIPPING THE HEIGHT-TO-SHADOW RATIO, which would make the pine taller than its shadow.)',
    },
    {
      q: 'A snowman $1.2$ m tall casts a $1.8$ m shadow. At the same moment, a water tower casts a shadow $24$ m long. Find the height of the water tower.',
      choices: ['$16$ m', '$36$ m', '$23.4$ m', '$24$ m'],
      answer: 0,
      solution:
        'Parallel sunlight makes the two right triangles similar by AA, so heights and shadows share one ratio: $\\frac{\\text{tower}}{24} = \\frac{1.2}{1.8} = \\frac{2}{3}$, giving $24 \\times \\frac{2}{3} = 16$ m ✓. Check a second, independent way by scaling shadow to shadow: $\\frac{24}{1.8} = \\frac{40}{3}$, and $1.2 \\times \\frac{40}{3} = 16$ m ✓. Since the snowman falls short of its own shadow, the tower must fall short of its $24$ m shadow too, and $16 < 24$ ✓. (The choice $36$ m is FLIPPING THE HEIGHT-TO-SHADOW RATIO; the choice $23.4$ m is KEEPING THE SAME GAP, moving the snowman’s $0.6$ m difference onto the tower; the choice $24$ m is COPYING THE SHADOW.)',
    },
    {
      q: 'A student $1.5$ m tall casts a shadow $2$ m long. At the same moment, the town clock tower casts a shadow $26$ m long. How tall is the clock tower?',
      choices: ['$25.5$ m', '$19.5$ m', '$39$ m', '$26$ m'],
      answer: 1,
      solution:
        'By AA (parallel sun rays, right angles at the ground), the student’s triangle and the tower’s triangle are similar, so $\\frac{\\text{tower}}{26} = \\frac{1.5}{2} = \\frac{3}{4}$ and the tower is $26 \\times \\frac{3}{4} = 19.5$ m ✓. Check a second, independent way with the shadow-to-shadow factor: the tower’s shadow is $\\frac{26}{2} = 13$ times the student’s, so the tower is $1.5 \\times 13 = 19.5$ m ✓. And since the student is shorter than the student’s shadow, $19.5 < 26$ is exactly the right side of the shadow ✓. (The choice $25.5$ m is KEEPING THE SAME GAP, subtracting the student’s half-meter shortfall; the choice $39$ m is MULTIPLYING BY THE POST HEIGHT, $26 \\times 1.5$, a ratio-free reflex; the choice $26$ m is COPYING THE SHADOW.)',
    },
  ],

  // slot 5 — SAS similarity at a shared vertex, points out along both rays.
  // Lane: 22.5 / 27.5 / 24.
  [
    {
      q: 'In the figure, $D$ lies on ray $\\overrightarrow{AB}$ beyond $B$ and $E$ lies on ray $\\overrightarrow{AC}$ beyond $C$, with $AB = 8$, $AD = 12$, $AC = 10$, $AE = 15$, and $BC = 15$. Find $DE$.',
      fig: {
        view: [-6.5, -2, 16.5, 12.5],
        alt: 'Triangles ABC and ADE sharing angle A, with D beyond B and E beyond C',
        elems: [
          { t: 'seg', a: [0, 0], b: [-4.575, 11.0937] },
          { t: 'seg', a: [0, 0], b: [15, 0] },
          { t: 'seg', a: [-3.05, 7.3958], b: [10, 0] },
          { t: 'seg', a: [-4.575, 11.0937], b: [15, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: 2, dy: 14 },
          { t: 'point', p: [-3.05, 7.3958], label: 'B', dx: -10, dy: -4 },
          { t: 'point', p: [10, 0], label: 'C', dx: 0, dy: 14 },
          { t: 'point', p: [-4.575, 11.0937], label: 'D', dx: -6, dy: -10 },
          { t: 'point', p: [15, 0], label: 'E', dx: 12, dy: 6 },
          { t: 'label', p: [-1.525, 3.6979], text: '8', dx: -12, dy: 0 },
          { t: 'label', p: [-3.8125, 9.2448], text: '4', dx: -12, dy: 0 },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [12.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [3.475, 3.6979], text: '15', dx: 8, dy: 10 },
          { t: 'label', p: [5.2125, 5.5469], text: '?', dx: 10, dy: -6 },
        ],
      },
      choices: ['$19$', '$15$', '$10$', '$22.5$'],
      answer: 3,
      solution:
        'The triangles $\\triangle ABC$ and $\\triangle ADE$ share $\\angle A$, and both arms carry the same ratio: $\\frac{AD}{AB} = \\frac{12}{8} = \\frac{3}{2}$ and $\\frac{AE}{AC} = \\frac{15}{10} = \\frac{3}{2}$. That is SAS Similarity with factor $\\frac{3}{2}$, so $DE = \\frac{3}{2} \\times 15 = 22.5$ ✓. Check a second, independent way through parallels: because $\\frac{AB}{AD} = \\frac{AC}{AE}$, the converse of the side-splitter gives $\\overline{BC} \\parallel \\overline{DE}$, so $\\triangle ABC \\sim \\triangle ADE$ by AA with the same $\\frac{3}{2}$, and again $DE = 22.5$ ✓. Sanity: the outer triangle is the bigger one, and $22.5 > 15$ ✓. (The choice $19$ is ADDING THE GROWTH OF ONE ARM, $15 + (12 - 8)$; the choice $15$ is COPYING BC; the choice $10$ is FLIPPING THE SCALE FACTOR, $15 \\times \\frac{2}{3}$.)',
    },
    {
      q: 'In the figure, $R$ is on ray $\\overrightarrow{MN}$ beyond $N$ and $S$ is on ray $\\overrightarrow{MP}$ beyond $P$, with $MN = 8$, $MR = 20$, $MP = 9$, $MS = 22.5$, and $NP = 11$. What is $RS$?',
      fig: {
        view: [-2, -2, 24, 21.5],
        alt: 'Triangles MNP and MRS sharing angle M, with R beyond N and S beyond P',
        elems: [
          { t: 'seg', a: [0, 0], b: [3.3333, 19.7203] },
          { t: 'seg', a: [0, 0], b: [22.5, 0] },
          { t: 'seg', a: [1.3333, 7.8881], b: [9, 0] },
          { t: 'seg', a: [3.3333, 19.7203], b: [22.5, 0] },
          { t: 'point', p: [0, 0], label: 'M', dx: -10, dy: 10 },
          { t: 'point', p: [1.3333, 7.8881], label: 'N', dx: -12, dy: 0 },
          { t: 'point', p: [9, 0], label: 'P', dx: 0, dy: 14 },
          { t: 'point', p: [3.3333, 19.7203], label: 'R', dx: -4, dy: -10 },
          { t: 'point', p: [22.5, 0], label: 'S', dx: 12, dy: 6 },
          { t: 'label', p: [0.6667, 3.944], text: '8', dx: -12, dy: 0 },
          { t: 'label', p: [2.3333, 13.8042], text: '12', dx: -14, dy: 0 },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [15.75, 0], text: '13.5', dx: 0, dy: 14 },
          { t: 'label', p: [5.1667, 3.944], text: '11', dx: 10, dy: 8 },
          { t: 'label', p: [12.9167, 9.8602], text: '?', dx: 10, dy: -6 },
        ],
      },
      choices: ['$23$', '$11$', '$27.5$', '$4.4$'],
      answer: 2,
      solution:
        '$\\triangle MNP$ and $\\triangle MRS$ share $\\angle M$, and the arms agree: $\\frac{MR}{MN} = \\frac{20}{8} = \\frac{5}{2}$ and $\\frac{MS}{MP} = \\frac{22.5}{9} = \\frac{5}{2}$. SAS Similarity with factor $\\frac{5}{2}$ gives $RS = \\frac{5}{2} \\times 11 = 27.5$ ✓. Check a second, independent way: equal ratios on the two rays force $\\overline{NP} \\parallel \\overline{RS}$ by the converse of the side-splitter, so the triangles are similar by AA as well, with the same factor, and $RS = 27.5$ ✓. Sanity: $27.5 > 11$, as the outer triangle requires ✓. (The choice $23$ is ADDING THE GROWTH OF ONE ARM, $11 + (20 - 8)$; the choice $11$ is COPYING BC — here the inner side $NP$; the choice $4.4$ is FLIPPING THE SCALE FACTOR, $11 \\times \\frac{2}{5}$.)',
    },
    {
      q: 'In the figure, $U$ lies on ray $\\overrightarrow{XY}$ beyond $Y$ and $V$ lies on ray $\\overrightarrow{XZ}$ beyond $Z$, with $XY = 10$, $XU = 15$, $XZ = 12$, $XV = 18$, and $YZ = 16$. Find $UV$.',
      fig: {
        view: [-2.5, -2, 19.5, 16.5],
        alt: 'Triangles XYZ and XUV sharing angle X, with U beyond Y and V beyond Z',
        elems: [
          { t: 'seg', a: [0, 0], b: [-0.75, 14.9813] },
          { t: 'seg', a: [0, 0], b: [18, 0] },
          { t: 'seg', a: [-0.5, 9.9875], b: [12, 0] },
          { t: 'seg', a: [-0.75, 14.9813], b: [18, 0] },
          { t: 'point', p: [0, 0], label: 'X', dx: -2, dy: 14 },
          { t: 'point', p: [-0.5, 9.9875], label: 'Y', dx: -12, dy: 0 },
          { t: 'point', p: [12, 0], label: 'Z', dx: 0, dy: 14 },
          { t: 'point', p: [-0.75, 14.9813], label: 'U', dx: -6, dy: -10 },
          { t: 'point', p: [18, 0], label: 'V', dx: 12, dy: 6 },
          { t: 'label', p: [-0.25, 4.9938], text: '10', dx: -14, dy: 0 },
          { t: 'label', p: [-0.625, 12.4844], text: '5', dx: -12, dy: 0 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [15, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [5.75, 4.9938], text: '16', dx: 10, dy: 8 },
          { t: 'label', p: [8.625, 7.4906], text: '?', dx: 10, dy: -6 },
        ],
      },
      choices: ['$21$', '$24$', '$28.8$', '$16$'],
      answer: 1,
      solution:
        'The shared angle at $X$ sits between arms in matching ratio: $\\frac{XU}{XY} = \\frac{15}{10} = \\frac{3}{2}$ and $\\frac{XV}{XZ} = \\frac{18}{12} = \\frac{3}{2}$, so $\\triangle XYZ \\sim \\triangle XUV$ by SAS with factor $\\frac{3}{2}$ and $UV = \\frac{3}{2} \\times 16 = 24$ ✓. Check a second, independent way: the equal ratios put $\\overline{YZ} \\parallel \\overline{UV}$ by the converse of the side-splitter, so AA delivers the same similarity and $UV = 24$ ✓. Sanity: $24 > 16$, and the factor $\\frac{3}{2}$ matches both labelled leftovers, $5 = 15 - 10$ on one ray and $6 = 18 - 12$ on the other ✓. (The choice $21$ is ADDING THE GROWTH OF ONE ARM, $16 + 5$; the choice $16$ is COPYING BC — the inner side $YZ$; the choice $28.8$ is MATCHING SIDES ACROSS THE WRONG PAIR, scaling $16$ by $\\frac{18}{10}$, a ratio no correspondence supports.)',
    },
  ],

  // slot 6 — three genuine scalings and one near-miss; find the impostor.
  // Lane: the impostor is 8,12,15 / 7.5,10.5,16 / 12,21,26.
  [
    {
      q: 'The sides of a triangle measure $6$, $9$, and $12$. Three of the triples below are side lengths of triangles similar to it. Which triple is NOT?',
      choices: ['$8, 12, 15$', '$3, 4.5, 6$', '$12, 18, 24$', '$9, 13.5, 18$'],
      answer: 0,
      solution:
        'Divide sorted entries by sorted entries. $(3, 4.5, 6)$ gives $\\frac{3}{6} = \\frac{4.5}{9} = \\frac{6}{12} = \\frac{1}{2}$ ✓; $(12, 18, 24)$ gives $2, 2, 2$ ✓; $(9, 13.5, 18)$ gives $\\frac{3}{2}, \\frac{3}{2}, \\frac{3}{2}$ ✓. But $(8, 12, 15)$ gives $\\frac{8}{6} = \\frac{4}{3}$ and $\\frac{12}{9} = \\frac{4}{3}$, then $\\frac{15}{12} = \\frac{5}{4}$ — the last entry should have been $\\frac{4}{3} \\times 12 = 16$, so this triple breaks the pattern ✗. Check a second, independent way by reducing: $(6, 9, 12)$ reduces to $(2, 3, 4)$, and so do $(3, 4.5, 6)$, $(12, 18, 24)$, and $(9, 13.5, 18)$ — while $(8, 12, 15)$ would need $8 : 12 : 15 = 2 : 3 : 4$, and $\\frac{15}{4} = 3.75 \\neq 4$ ✗. Two ratios matching out of three proves nothing: in an SSS check, close is not similar. (Rejecting a genuine scaling usually comes from MATCHING UNSORTED ENTRIES — always sort both triples first.)',
    },
    {
      q: 'A triangle has sides $5$, $7$, and $11$. Which of the following side triples FAILS to give a triangle similar to it?',
      choices: ['$10, 14, 22$', '$2.5, 3.5, 5.5$', '$7.5, 10.5, 16$', '$15, 21, 33$'],
      answer: 2,
      solution:
        'Test each sorted triple against $(5, 7, 11)$: $(10, 14, 22)$ is a clean doubling ✓; $(2.5, 3.5, 5.5)$ is a clean halving ✓; $(15, 21, 33)$ is a clean tripling ✓. For $(7.5, 10.5, 16)$: $\\frac{7.5}{5} = \\frac{3}{2}$ and $\\frac{10.5}{7} = \\frac{3}{2}$, but scaling $11$ by $\\frac{3}{2}$ demands $16.5$, and the triple offers only $16$ ✗ — not similar. Check a second, independent way with one common measuring stick: in the original, the longest side is $\\frac{11}{5} = 2.2$ times the shortest. In $(7.5, 10.5, 16)$ that quotient is $\\frac{16}{7.5} = 2.1\\overline{3}$, a different shape by shortest-to-longest proportions alone ✗, while all three honest scalings give exactly $2.2$ ✓. One broken ratio is all it takes. (The pull toward a wrong rejection is MATCHING UNSORTED ENTRIES; the pull toward accepting the impostor is stopping after two matching ratios.)',
    },
    {
      q: 'A triangular bracket has sides $6$, $10$, and $14$. A workshop lists four scaled versions to cut. Which listed triple does NOT produce a bracket similar to the original?',
      choices: ['$12, 20, 28$', '$9, 15, 20$', '$18, 30, 42$', '$3, 5, 7$'],
      answer: 1,
      solution:
        'Check ratios entry by entry against $(6, 10, 14)$: $(12, 20, 28)$ is exactly double ✓; $(18, 30, 42)$ is exactly triple ✓; $(3, 5, 7)$ is exactly half ✓. For $(9, 15, 20)$: $\\frac{9}{6} = \\frac{3}{2}$ and $\\frac{15}{10} = \\frac{3}{2}$, but $\\frac{3}{2} \\times 14 = 21$, not the listed $20$ ✗ — the third side is short by a full unit, so no similarity. Check a second, independent way by reducing everything: $(6, 10, 14)$ reduces to $(3, 5, 7)$, and the three honest triples reduce to $(3, 5, 7)$ as well, while $(9, 15, 20)$ has no common factor bringing it there — $9 : 15$ reduces to $3 : 5$, forcing the last entry toward $7 \\times 3 = 21$, and $20 \\neq 21$ ✗. In SSS checking, all three quotients must agree; two out of three is a different triangle. (The route to a wrong answer here is MATCHING UNSORTED ENTRIES or quitting after two ratios agree.)',
    },
  ],

  // slot 7 — trapezoid diagonals and the hourglass; the piece of a diagonal
  // next to the short parallel side. Lane: 11 / 13 / 6.
  [
    {
      q: 'In trapezoid $ABCD$ shown, $\\overline{AB} \\parallel \\overline{DC}$, $AB = 7$, $DC = 14$, and diagonal $BD = 33$. The diagonals cross at $P$. Find $BP$.',
      fig: {
        view: [-1.5, -2, 21.5, 28.5],
        alt: 'Trapezoid ABCD with AB parallel to DC and diagonals meeting at P',
        elems: [
          { t: 'poly', pts: [[12.8, 26.4], [19.8, 26.4], [14, 0], [0, 0]], fill: false },
          { t: 'seg', a: [12.8, 26.4], b: [14, 0] },
          { t: 'seg', a: [19.8, 26.4], b: [0, 0] },
          { t: 'point', p: [12.8, 26.4], label: 'A', dx: -10, dy: -6 },
          { t: 'point', p: [19.8, 26.4], label: 'B', dx: 10, dy: -6 },
          { t: 'point', p: [14, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [0, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [13.2, 17.6], label: 'P', dx: -10, dy: -6 },
          { t: 'label', p: [16.3, 26.4], text: '7', dx: 0, dy: -10 },
          { t: 'label', p: [7, 0], text: '14', dx: 0, dy: 14 },
        ],
      },
      choices: ['$16.5$', '$11$', '$22$', '$8.25$'],
      answer: 1,
      solution:
        'The hourglass triangles $\\triangle PAB$ and $\\triangle PCD$ are similar by AA (alternate angles from the parallels, vertical angles at $P$), so $BP : PD = AB : DC = 7 : 14 = 1 : 2$. Then $BP$ is $\\frac{1}{1 + 2} = \\frac{1}{3}$ of the diagonal: $BP = \\frac{1}{3} \\times 33 = 11$ ✓ (and $PD = 22$, with $11 + 22 = 33$ ✓). Check a second, independent way by solving: let $BP = x$, so $\\frac{x}{33 - x} = \\frac{1}{2}$, giving $2x = 33 - x$, $3x = 33$, $x = 11$ ✓. Sanity: $P$ must sit closer to the SHORTER parallel side, and $11 < 22$ ✓. (The choice $22$ is TAKING THE OTHER PIECE OF THE DIAGONAL, $PD$; the choice $16.5$ is ASSUMING THE DIAGONALS BISECT EACH OTHER, which only parallelograms do; the choice $8.25$ is SQUARING THE RATIO OF LENGTHS — squares are for areas, and a diagonal is a length.)',
    },
    {
      q: 'In trapezoid $PQRS$ shown, $\\overline{PQ} \\parallel \\overline{SR}$, $PQ = 6$, $SR = 12$, and diagonal $QS = 39$. The diagonals $\\overline{PR}$ and $\\overline{QS}$ meet at $X$. What is $QX$?',
      fig: {
        view: [-1.5, -2, 32.7, 25.5],
        alt: 'Trapezoid PQRS with PQ parallel to SR and diagonals meeting at X',
        elems: [
          { t: 'poly', pts: [[25.2, 23.4], [31.2, 23.4], [12, 0], [0, 0]], fill: false },
          { t: 'seg', a: [25.2, 23.4], b: [12, 0] },
          { t: 'seg', a: [31.2, 23.4], b: [0, 0] },
          { t: 'point', p: [25.2, 23.4], label: 'P', dx: -10, dy: -6 },
          { t: 'point', p: [31.2, 23.4], label: 'Q', dx: 10, dy: -6 },
          { t: 'point', p: [12, 0], label: 'R', dx: 4, dy: 14 },
          { t: 'point', p: [0, 0], label: 'S', dx: -10, dy: 10 },
          { t: 'point', p: [20.8, 15.6], label: 'X', dx: -10, dy: -6 },
          { t: 'label', p: [28.2, 23.4], text: '6', dx: 0, dy: -10 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
        ],
      },
      choices: ['$19.5$', '$26$', '$9.75$', '$13$'],
      answer: 3,
      solution:
        'The parallels and the vertical angles at $X$ give $\\triangle XPQ \\sim \\triangle XRS$ by AA, so $QX : XS = PQ : SR = 6 : 12 = 1 : 2$. That makes $QX$ one third of the diagonal: $QX = \\frac{1}{3} \\times 39 = 13$ ✓ (and $XS = 26$; $13 + 26 = 39$ ✓). Check a second, independent way: with $QX = x$, the proportion reads $\\frac{x}{39 - x} = \\frac{1}{2}$, so $2x = 39 - x$ and $x = 13$ ✓. The crossing point hugs the shorter parallel side, and indeed $13 < 26$ ✓. (The choice $26$ is TAKING THE OTHER PIECE OF THE DIAGONAL; the choice $19.5$ is ASSUMING THE DIAGONALS BISECT EACH OTHER; the choice $9.75$ is SQUARING THE RATIO OF LENGTHS, importing the area rule where it does not belong.)',
    },
    {
      q: 'Trapezoid $WXYZ$ shown has $\\overline{WX} \\parallel \\overline{ZY}$, $WX = 9$, $ZY = 15$, and diagonal $XZ = 16$. The diagonals $\\overline{WY}$ and $\\overline{XZ}$ intersect at $P$. Find $XP$.',
      fig: {
        view: [-1.5, -2, 16.5, 14.5],
        alt: 'Trapezoid WXYZ with WX parallel to ZY and diagonals meeting at P',
        elems: [
          { t: 'poly', pts: [[0.6, 12.8], [9.6, 12.8], [15, 0], [0, 0]], fill: false },
          { t: 'seg', a: [0.6, 12.8], b: [15, 0] },
          { t: 'seg', a: [9.6, 12.8], b: [0, 0] },
          { t: 'point', p: [0.6, 12.8], label: 'W', dx: -10, dy: -6 },
          { t: 'point', p: [9.6, 12.8], label: 'X', dx: 10, dy: -6 },
          { t: 'point', p: [15, 0], label: 'Y', dx: 10, dy: 10 },
          { t: 'point', p: [0, 0], label: 'Z', dx: -10, dy: 10 },
          { t: 'point', p: [6, 8], label: 'P', dx: -10, dy: -6 },
          { t: 'label', p: [5.1, 12.8], text: '9', dx: 0, dy: -10 },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
        ],
      },
      choices: ['$10$', '$9.6$', '$6$', '$8$'],
      answer: 2,
      solution:
        '$\\triangle PWX \\sim \\triangle PYZ$ by AA (alternate angles between the parallels, vertical angles at $P$), so $XP : PZ = WX : ZY = 9 : 15 = 3 : 5$. Then $XP$ is $\\frac{3}{3 + 5} = \\frac{3}{8}$ of the diagonal: $XP = \\frac{3}{8} \\times 16 = 6$ ✓ (and $PZ = 10$; $6 + 10 = 16$ ✓). Check a second, independent way: setting $XP = x$ gives $\\frac{x}{16 - x} = \\frac{3}{5}$, so $5x = 48 - 3x$, $8x = 48$, $x = 6$ ✓. Sanity: the piece next to the shorter parallel side is the shorter piece, $6 < 10$ ✓. (The choice $10$ is TAKING THE OTHER PIECE OF THE DIAGONAL, $PZ$; the choice $8$ is ASSUMING THE DIAGONALS BISECT EACH OTHER; the choice $9.6$ is USING AB:DC AS THE FRACTION OF THE WHOLE — multiplying $16$ by $\\frac{9}{15}$ instead of $\\frac{9}{9 + 15}$.)',
    },
  ],

  // slot 8 — side ratio to area, small to large. Lane: 32 / 45 / 75.
  [
    {
      q: 'The sides of one triangle are $\\frac{3}{4}$ as long as the corresponding sides of a second, similar triangle. The smaller triangle has area $18$. What is the area of the larger?',
      choices: ['$24$', '$10.125$', '$32$', '$96$'],
      answer: 2,
      solution:
        'The side ratio from small to large is $3 : 4$, so areas sit in the SQUARE of that ratio: $\\left(\\frac{4}{3}\\right)^2 = \\frac{16}{9}$, and the larger area is $18 \\times \\frac{16}{9} = 32$ ✓. Check a second, independent way, one dimension at a time: pick any base of the small triangle with its height; the large triangle’s matching base is $\\frac{4}{3}$ as long AND its matching height is $\\frac{4}{3}$ as tall, so the area moves $18 \\to 18 \\times \\frac{4}{3} = 24 \\to 24 \\times \\frac{4}{3} = 32$ ✓ — the factor is applied twice because area uses two lengths. (The choice $24$ is SCALING THE AREA ONLY ONCE, the halfway stop of the second route; the choice $10.125$ is SQUARING THE FLIPPED RATIO, which shrinks the triangle that must grow; the choice $96$ is SQUARING ONLY ONE TERM OF THE RATIO, $18 \\times \\frac{16}{3}$.)',
    },
    {
      q: 'Two similar triangular sails have corresponding sides in the ratio $2 : 3$. The smaller sail uses $24$ square meters of cloth. How much cloth does the larger sail use?',
      choices: ['$54$', '$36$', '$\\frac{32}{3}$', '$108$'],
      answer: 0,
      solution:
        'Areas of similar figures scale by the square of the side ratio: $\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$, so the larger sail needs $24 \\times \\frac{9}{4} = 54$ square meters ✓. Check a second, independent way by scaling base and height separately: the larger sail’s base is $\\frac{3}{2}$ of the smaller’s and so is its height, so the cloth grows $24 \\to 36 \\to 54$ ✓, picking up one factor of $\\frac{3}{2}$ per dimension. (The choice $36$ is SCALING THE AREA ONLY ONCE — that is how a perimeter behaves, not cloth; the choice $\\frac{32}{3}$ is SQUARING THE FLIPPED RATIO; the choice $108$ is SQUARING ONLY ONE TERM OF THE RATIO, $24 \\times \\frac{9}{2}$.)',
    },
    {
      q: 'A triangle of area $27$ is enlarged so that every new side is to its old side as $5$ is to $3$. What is the area of the enlarged triangle?',
      choices: ['$45$', '$9.72$', '$225$', '$75$'],
      answer: 3,
      solution:
        'The length factor is $\\frac{5}{3}$, so the area factor is its square, $\\frac{25}{9}$, and the enlarged area is $27 \\times \\frac{25}{9} = 75$ ✓. Check a second, independent way in two moves: stretching only the base gives $27 \\times \\frac{5}{3} = 45$, and stretching the height as well gives $45 \\times \\frac{5}{3} = 75$ ✓ — two dimensions, two applications of the factor. (The choice $45$ is SCALING THE AREA ONLY ONCE, the intermediate stop; the choice $9.72$ is SQUARING THE FLIPPED RATIO, $27 \\times \\frac{9}{25}$; the choice $225$ is SQUARING ONLY ONE TERM OF THE RATIO, $27 \\times \\frac{25}{3}$.)',
    },
  ],

  // slot 9 — altitude-to-hypotenuse setup; a leg is the geometric mean of the
  // whole hypotenuse and its adjacent piece. Lane: 40 / 24 / 30.
  [
    {
      q: 'In the figure, the altitude from the right angle $C$ meets hypotenuse $\\overline{AB}$ at $H$, with $AH = 25$ and $HB = 39$. Find the leg $AC$.',
      fig: {
        view: [-2, -4, 66, 34],
        alt: 'Right triangle ACB with altitude CH to the hypotenuse AB, pieces 25 and 39',
        elems: [
          { t: 'poly', pts: [[0, 0], [64, 0], [25, 31.225]], fill: false },
          { t: 'seg', a: [25, 31.225], b: [25, 0] },
          { t: 'right', at: [25, 0], from: [64, 0], to: [25, 31.225], s: 1.6 },
          { t: 'right', at: [25, 31.225], from: [0, 0], to: [64, 0], s: 1.6 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [64, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [25, 31.225], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [25, 0], label: 'H', dx: 0, dy: 14 },
          { t: 'label', p: [12.5, 0], text: '25', dx: 0, dy: 14 },
          { t: 'label', p: [44.5, 0], text: '39', dx: 0, dy: 14 },
          { t: 'label', p: [12.5, 15.6125], text: '?', dx: -8, dy: -8 },
        ],
      },
      choices: ['$32$', '$1600$', '$\\sqrt{975}$', '$40$'],
      answer: 3,
      solution:
        'The whole hypotenuse is $AB = 25 + 39 = 64$. From $\\triangle AHC \\sim \\triangle ACB$ (shared $\\angle A$, right angles at $H$ and $C$): $\\frac{AH}{AC} = \\frac{AC}{AB}$, so $AC^2 = AH \\times AB = 25 \\times 64 = 1600$ and $AC = 40$ ✓. Check a second, independent way through the altitude: $CH^2 = AH \\times HB = 25 \\times 39 = 975$, and the Pythagorean Theorem in $\\triangle AHC$ gives $AC^2 = 25^2 + 975 = 625 + 975 = 1600$, so $AC = 40$ ✓. Sanity: a leg beats its own adjacent piece and loses to the hypotenuse, and $25 < 40 < 64$ ✓. (The choice $32$ is AVERAGING THE TWO PIECES — half of $64$ is not a similarity fact; the choice $1600$ is FORGETTING THE SQUARE ROOT; the choice $\\sqrt{975}$ is MULTIPLYING THE TWO PIECES, which computes the ALTITUDE $CH$, not the leg.)',
    },
    {
      q: 'Right triangle $PQR$ has its right angle at $R$, and the altitude from $R$ meets hypotenuse $\\overline{PQ}$ at $S$, with $PS = 18$ and $SQ = 14$, as shown. Find the leg $PR$.',
      fig: {
        view: [-1.5, -3, 33.5, 17.5],
        alt: 'Right triangle PRQ with altitude RS to the hypotenuse PQ, pieces 18 and 14',
        elems: [
          { t: 'poly', pts: [[0, 0], [32, 0], [18, 15.8745]], fill: false },
          { t: 'seg', a: [18, 15.8745], b: [18, 0] },
          { t: 'right', at: [18, 0], from: [32, 0], to: [18, 15.8745], s: 0.8 },
          { t: 'right', at: [18, 15.8745], from: [0, 0], to: [32, 0], s: 0.8 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [32, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [18, 15.8745], label: 'R', dx: 0, dy: -12 },
          { t: 'point', p: [18, 0], label: 'S', dx: 0, dy: 14 },
          { t: 'label', p: [9, 0], text: '18', dx: 0, dy: 14 },
          { t: 'label', p: [25, 0], text: '14', dx: 0, dy: 14 },
          { t: 'label', p: [9, 7.9373], text: '?', dx: -8, dy: -8 },
        ],
      },
      choices: ['$16$', '$24$', '$\\sqrt{252}$', '$576$'],
      answer: 1,
      solution:
        'The hypotenuse is $PQ = 18 + 14 = 32$. The altitude makes $\\triangle PSR \\sim \\triangle PRQ$ (shared $\\angle P$, right angles at $S$ and $R$), so $\\frac{PS}{PR} = \\frac{PR}{PQ}$ and $PR^2 = 18 \\times 32 = 576$, giving $PR = 24$ ✓. Check a second, independent way: first the altitude, $RS^2 = PS \\times SQ = 18 \\times 14 = 252$; then Pythagoras in $\\triangle PSR$: $PR^2 = 18^2 + 252 = 324 + 252 = 576$, so $PR = 24$ ✓. Sanity: $18 < 24 < 32$, exactly where a leg belongs ✓. (The choice $16$ is AVERAGING THE TWO PIECES; the choice $576$ is FORGETTING THE SQUARE ROOT; the choice $\\sqrt{252}$ is MULTIPLYING THE TWO PIECES, which produces the altitude $RS$ instead of the leg.)',
    },
    {
      q: 'In right triangle $XYZ$, the right angle is at $Z$, and the altitude from $Z$ meets hypotenuse $\\overline{XY}$ at $W$, with $XW = 25$ and $WY = 11$, as shown. What is the leg $XZ$?',
      fig: {
        view: [-1.5, -3, 37.5, 18],
        alt: 'Right triangle XZY with altitude ZW to the hypotenuse XY, pieces 25 and 11',
        elems: [
          { t: 'poly', pts: [[0, 0], [36, 0], [25, 16.5831]], fill: false },
          { t: 'seg', a: [25, 16.5831], b: [25, 0] },
          { t: 'right', at: [25, 0], from: [36, 0], to: [25, 16.5831], s: 0.9 },
          { t: 'right', at: [25, 16.5831], from: [0, 0], to: [36, 0], s: 0.9 },
          { t: 'point', p: [0, 0], label: 'X', dx: -10, dy: 10 },
          { t: 'point', p: [36, 0], label: 'Y', dx: 10, dy: 10 },
          { t: 'point', p: [25, 16.5831], label: 'Z', dx: 0, dy: -12 },
          { t: 'point', p: [25, 0], label: 'W', dx: 0, dy: 14 },
          { t: 'label', p: [12.5, 0], text: '25', dx: 0, dy: 14 },
          { t: 'label', p: [30.5, 0], text: '11', dx: 0, dy: 14 },
          { t: 'label', p: [12.5, 8.2916], text: '?', dx: -8, dy: -8 },
        ],
      },
      choices: ['$30$', '$18$', '$\\sqrt{275}$', '$900$'],
      answer: 0,
      solution:
        'The hypotenuse is $XY = 25 + 11 = 36$. Since $\\triangle XWZ \\sim \\triangle XZY$ (shared $\\angle X$, right angles at $W$ and $Z$), the leg is the geometric mean of its adjacent piece and the whole: $XZ^2 = XW \\times XY = 25 \\times 36 = 900$, so $XZ = 30$ ✓. Check a second, independent way: the altitude satisfies $ZW^2 = XW \\times WY = 25 \\times 11 = 275$, and Pythagoras in $\\triangle XWZ$ gives $XZ^2 = 625 + 275 = 900$, so $XZ = 30$ ✓. Sanity: $25 < 30 < 36$ ✓. (The choice $18$ is AVERAGING THE TWO PIECES, half of $36$; the choice $900$ is FORGETTING THE SQUARE ROOT; the choice $\\sqrt{275}$ is MULTIPLYING THE TWO PIECES, the altitude’s recipe rather than the leg’s.)',
    },
  ],

  // slot 10 — perimeters plus the smaller area, find the larger area.
  // Lane: 18 / 27 / 45.
  [
    {
      q: 'Two similar paper triangles have perimeters $10$ and $15$. The smaller one has area $8$. Find the area of the larger one.',
      choices: ['$18$', '$12$', '$13$', '$\\frac{32}{9}$'],
      answer: 0,
      solution:
        'Perimeters reveal the side ratio at once: $\\frac{15}{10} = \\frac{3}{2}$. Areas take the square: $\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$, so the larger area is $8 \\times \\frac{9}{4} = 18$ ✓. Check a second, independent way, one dimension at a time: every base is stretched by $\\frac{3}{2}$, giving $8 \\to 12$, and every height is stretched by $\\frac{3}{2}$ as well, giving $12 \\to 18$ ✓. One ratio, used once for lengths and twice for areas. (The choice $12$ is SCALING THE AREA ONLY ONCE; the choice $13$ is ADDING THE PERIMETER DIFFERENCE, $8 + 5$, as if area grew by subtraction and addition; the choice $\\frac{32}{9}$ is SQUARING THE FLIPPED RATIO, shrinking what should grow.)',
    },
    {
      q: 'The perimeters of two similar triangles are $14$ and $21$, and the area of the smaller triangle is $12$. What is the area of the larger triangle?',
      choices: ['$18$', '$19$', '$\\frac{16}{3}$', '$27$'],
      answer: 3,
      solution:
        'The side ratio equals the perimeter ratio, $\\frac{21}{14} = \\frac{3}{2}$, so the area ratio is $\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$ and the larger area is $12 \\times \\frac{9}{4} = 27$ ✓. Check a second, independent way by stretching base then height: $12 \\times \\frac{3}{2} = 18$, then $18 \\times \\frac{3}{2} = 27$ ✓ — the factor lands once per dimension. (The choice $18$ is SCALING THE AREA ONLY ONCE, the halfway value of the second route; the choice $19$ is ADDING THE PERIMETER DIFFERENCE, $12 + 7$; the choice $\\frac{16}{3}$ is SQUARING THE FLIPPED RATIO, $12 \\times \\frac{4}{9}$.)',
    },
    {
      q: 'Two similar triangular garden plots have perimeters $16$ m and $24$ m. The smaller plot covers $20$ square meters. How many square meters does the larger plot cover?',
      choices: ['$30$', '$28$', '$45$', '$\\frac{80}{9}$'],
      answer: 2,
      solution:
        'Perimeters give the length ratio $\\frac{24}{16} = \\frac{3}{2}$, so areas compare as $\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$, and the larger plot covers $20 \\times \\frac{9}{4} = 45$ square meters ✓. Check a second, independent way in two stretches: widening every base by $\\frac{3}{2}$ takes $20 \\to 30$, and raising every height by $\\frac{3}{2}$ takes $30 \\to 45$ ✓. (The choice $30$ is SCALING THE AREA ONLY ONCE; the choice $28$ is ADDING THE PERIMETER DIFFERENCE, $20 + 8$; the choice $\\frac{80}{9}$ is SQUARING THE FLIPPED RATIO, which would make the bigger plot smaller.)',
    },
  ],

  // slot 11 — a cevian copying the far base angle: AB^2 = AD x AC, then the
  // leftover piece. Lane: 7 / 32 / 15.
  [
    {
      q: 'In $\\triangle ABC$, point $D$ lies on $\\overline{AC}$ so that $\\angle ABD = \\angle ACB$ (each marked $a$ in the figure). Given $AB = 12$ and $AD = 9$, find $DC$.',
      fig: {
        view: [-1.5, -1.5, 17.5, 11.5],
        alt: 'Triangle ABC with D on AC, angle ABD equal to angle ACB, both marked a',
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [7.2, 9.6]], fill: false },
          { t: 'seg', a: [7.2, 9.6], b: [9, 0] },
          { t: 'angle', at: [7.2, 9.6], from: [0, 0], to: [9, 0], r: 1.2, label: 'a' },
          { t: 'angle', at: [16, 0], from: [7.2, 9.6], to: [0, 0], r: 1.5, label: 'a' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [7.2, 9.6], label: 'B', dx: 0, dy: -12 },
          { t: 'point', p: [9, 0], label: 'D', dx: 0, dy: 14 },
          { t: 'label', p: [3.6, 4.8], text: '12', dx: -12, dy: -4 },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [12.5, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$16$', '$3$', '$7$', '$25$'],
      answer: 2,
      solution:
        '$\\triangle ABD$ and $\\triangle ACB$ share $\\angle A$ and carry the marked equal angles, so they are similar by AA. Matching sides give $\\frac{AB}{AC} = \\frac{AD}{AB}$, so $AB^2 = AD \\times AC$: $144 = 9 \\times AC$, hence $AC = 16$ and $DC = 16 - 9 = 7$ ✓. Check a second, independent way with the scale factor: the similarity sends $\\overline{AD}$ to $\\overline{AB}$, so the factor is $k = \\frac{AB}{AD} = \\frac{12}{9} = \\frac{4}{3}$; applying $k$ to $\\overline{AB}$ lands on $\\overline{AC}$, so $AC = \\frac{4}{3} \\times 12 = 16$ and again $DC = 7$ ✓. Sanity: $D$ is strictly inside $\\overline{AC}$ since $AD = 9 < 16 = AC$ ✓. (The choice $16$ is STOPPING AT AC — the question asks for $DC$; the choice $3$ is SUBTRACTING AD FROM AB, two sides that do not even lie on one line; the choice $25$ is ADDING AD TO AC.)',
    },
    {
      q: 'In $\\triangle PQR$, point $S$ lies on $\\overline{PR}$ with $\\angle PQS = \\angle PRQ$ (each marked $a$ in the figure). If $PQ = 12$ and $PS = 4$, what is $SR$?',
      fig: {
        view: [-1.5, -1.5, 37.5, 11.5],
        alt: 'Triangle PQR with S on PR, angle PQS equal to angle PRQ, both marked a',
        elems: [
          { t: 'poly', pts: [[0, 0], [36, 0], [7.2, 9.6]], fill: false },
          { t: 'seg', a: [7.2, 9.6], b: [4, 0] },
          { t: 'angle', at: [7.2, 9.6], from: [0, 0], to: [4, 0], r: 1.6, label: 'a' },
          { t: 'angle', at: [36, 0], from: [7.2, 9.6], to: [0, 0], r: 3, label: 'a' },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [36, 0], label: 'R', dx: 10, dy: 10 },
          { t: 'point', p: [7.2, 9.6], label: 'Q', dx: 0, dy: -12 },
          { t: 'point', p: [4, 0], label: 'S', dx: -2, dy: 14 },
          { t: 'label', p: [3.6, 4.8], text: '12', dx: -12, dy: -4 },
          { t: 'label', p: [2, 0], text: '4', dx: -4, dy: 14 },
          { t: 'label', p: [20, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$36$', '$8$', '$40$', '$32$'],
      answer: 3,
      solution:
        'The shared $\\angle P$ plus the marked equal angles give $\\triangle PQS \\sim \\triangle PRQ$ by AA. So $\\frac{PQ}{PR} = \\frac{PS}{PQ}$, which is $PQ^2 = PS \\times PR$: $144 = 4 \\times PR$, so $PR = 36$ and $SR = 36 - 4 = 32$ ✓. Check a second, independent way through the factor: the similarity stretches $\\overline{PS}$ onto $\\overline{PQ}$, so $k = \\frac{PQ}{PS} = \\frac{12}{4} = 3$; the same stretch sends $\\overline{PQ}$ onto $\\overline{PR}$, so $PR = 3 \\times 12 = 36$ and $SR = 32$ ✓. Sanity: $PS = 4 < 36 = PR$, so $S$ sits strictly inside the side ✓. (The choice $36$ is STOPPING AT AC — here, stopping at $PR$; the choice $8$ is SUBTRACTING AD FROM AB, $12 - 4$; the choice $40$ is ADDING AD TO AC, $36 + 4$.)',
    },
    {
      q: 'In $\\triangle XYZ$, point $W$ lies on $\\overline{XZ}$ so that $\\angle XYW = \\angle XZY$ (each marked $a$ in the figure). Given $XY = 10$ and $XW = 5$, find $WZ$.',
      fig: {
        view: [-1.5, -1.5, 21.5, 10],
        alt: 'Triangle XYZ with W on XZ, angle XYW equal to angle XZY, both marked a',
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [6, 8]], fill: false },
          { t: 'seg', a: [6, 8], b: [5, 0] },
          { t: 'angle', at: [6, 8], from: [0, 0], to: [5, 0], r: 1.2, label: 'a' },
          { t: 'angle', at: [20, 0], from: [6, 8], to: [0, 0], r: 1.8, label: 'a' },
          { t: 'point', p: [0, 0], label: 'X', dx: -10, dy: 10 },
          { t: 'point', p: [20, 0], label: 'Z', dx: 10, dy: 10 },
          { t: 'point', p: [6, 8], label: 'Y', dx: 0, dy: -12 },
          { t: 'point', p: [5, 0], label: 'W', dx: 0, dy: 14 },
          { t: 'label', p: [3, 4], text: '10', dx: -12, dy: -4 },
          { t: 'label', p: [2.5, 0], text: '5', dx: -2, dy: 14 },
          { t: 'label', p: [12.5, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$20$', '$15$', '$5$', '$25$'],
      answer: 1,
      solution:
        'With the shared $\\angle X$ and the marked equal angles, $\\triangle XYW \\sim \\triangle XZY$ by AA, so $\\frac{XY}{XZ} = \\frac{XW}{XY}$ and $XY^2 = XW \\times XZ$: $100 = 5 \\times XZ$, so $XZ = 20$ and $WZ = 20 - 5 = 15$ ✓. Check a second, independent way with the chained factor: $k = \\frac{XY}{XW} = \\frac{10}{5} = 2$, and the same enlargement carries $\\overline{XY}$ to $\\overline{XZ}$, so $XZ = 2 \\times 10 = 20$, leaving $WZ = 15$ ✓. Sanity: $XW = 5 < 20 = XZ$, so $W$ really is an interior point of $\\overline{XZ}$ ✓. (The choice $20$ is STOPPING AT AC — reporting $XZ$; the choice $5$ is SUBTRACTING AD FROM AB, $10 - 5$; the choice $25$ is ADDING AD TO AC.)',
    },
  ],

  // slot 12 — the hourglass area ratio is the square of the parallel-side
  // ratio. Lane: 16:9 / 9:4 / 25:4.
  [
    {
      q: 'In the figure, $\\overline{AB} \\parallel \\overline{DC}$ and the segments $\\overline{AC}$, $\\overline{BD}$ cross at $P$, with $AB = 8$ and $DC = 6$. What is the ratio of the AREA of $\\triangle PAB$ to the area of $\\triangle PCD$?',
      fig: {
        view: [-5.5, -3.5, 5.5, 4.5],
        alt: 'Hourglass figure: AB parallel to DC with segments AC and BD crossing at P',
        elems: [
          { t: 'seg', a: [-4, 3], b: [4, 3] },
          { t: 'seg', a: [-3, -2.25], b: [3, -2.25] },
          { t: 'seg', a: [-4, 3], b: [3, -2.25] },
          { t: 'seg', a: [4, 3], b: [-3, -2.25] },
          { t: 'point', p: [-4, 3], label: 'A', dx: -10, dy: -8 },
          { t: 'point', p: [4, 3], label: 'B', dx: 10, dy: -8 },
          { t: 'point', p: [3, -2.25], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [-3, -2.25], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [0, 0], label: 'P', dx: 10, dy: -6 },
          { t: 'label', p: [0, 3], text: '8', dx: 0, dy: -10 },
          { t: 'label', p: [0, -2.25], text: '6', dx: 0, dy: 14 },
        ],
      },
      choices: ['$4 : 3$', '$9 : 16$', '$64 : 27$', '$16 : 9$'],
      answer: 3,
      solution:
        'The hourglass triangles are similar by AA (alternate angles from the parallels, vertical angles at $P$), with side ratio $\\frac{AB}{DC} = \\frac{8}{6} = \\frac{4}{3}$. Areas of similar triangles compare as the square: $\\left(\\frac{4}{3}\\right)^2 = \\frac{16}{9}$, so the ratio is $16 : 9$ ✓. Check a second, independent way from the area formula: taking $\\overline{AB}$ and $\\overline{DC}$ as bases, the heights from $P$ are in the same $4 : 3$ ratio as the sides (they are corresponding altitudes of the similar triangles), so the areas compare as $\\frac{\\frac{1}{2} \\cdot 8 \\cdot 4h}{\\frac{1}{2} \\cdot 6 \\cdot 3h} = \\frac{32}{18} = \\frac{16}{9}$ ✓ — base contributes one factor of $\\frac{4}{3}$ and height the other. (The choice $4 : 3$ is FORGETTING TO SQUARE — that is the ratio of lengths and perimeters; the choice $9 : 16$ is FLIPPING THE SQUARED RATIO, since $\\triangle PAB$ is the larger triangle; the choice $64 : 27$ is CUBING THE RATIO, which belongs to volumes, not areas.)',
    },
    {
      q: 'Segments $\\overline{JM}$ and $\\overline{KL}$ intersect at $P$, and $\\overline{JK} \\parallel \\overline{LM}$, as shown, with $JK = 9$ and $LM = 6$. Find the ratio of the area of $\\triangle PJK$ to the area of $\\triangle PLM$.',
      fig: {
        view: [-6, -3.2, 6, 4.5],
        alt: 'Hourglass figure: JK parallel to LM with segments JM and KL crossing at P',
        elems: [
          { t: 'seg', a: [-4.5, 3], b: [4.5, 3] },
          { t: 'seg', a: [-3, -2], b: [3, -2] },
          { t: 'seg', a: [-4.5, 3], b: [3, -2] },
          { t: 'seg', a: [4.5, 3], b: [-3, -2] },
          { t: 'point', p: [-4.5, 3], label: 'J', dx: -10, dy: -8 },
          { t: 'point', p: [4.5, 3], label: 'K', dx: 10, dy: -8 },
          { t: 'point', p: [-3, -2], label: 'L', dx: -10, dy: 10 },
          { t: 'point', p: [3, -2], label: 'M', dx: 10, dy: 10 },
          { t: 'point', p: [0, 0], label: 'P', dx: 10, dy: -6 },
          { t: 'label', p: [0, 3], text: '9', dx: 0, dy: -10 },
          { t: 'label', p: [0, -2], text: '6', dx: 0, dy: 14 },
        ],
      },
      choices: ['$9 : 4$', '$3 : 2$', '$4 : 9$', '$27 : 8$'],
      answer: 0,
      solution:
        'The parallels give equal alternate angles and the crossing gives vertical angles at $P$, so $\\triangle PJK \\sim \\triangle PML$ by AA with side ratio $\\frac{JK}{LM} = \\frac{9}{6} = \\frac{3}{2}$. Squaring for areas: $\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$, so the ratio is $9 : 4$ ✓. Check a second, independent way with bases and heights: using $\\overline{JK}$ and $\\overline{LM}$ as bases, the distances from $P$ to the two parallel lines are corresponding altitudes, so they also sit in the ratio $3 : 2$; the areas then compare as $\\frac{9 \\times 3}{6 \\times 2} = \\frac{27}{12} = \\frac{9}{4}$ ✓. (The choice $3 : 2$ is FORGETTING TO SQUARE; the choice $4 : 9$ is FLIPPING THE SQUARED RATIO — the triangle on the LONGER parallel side is the bigger one; the choice $27 : 8$ is CUBING THE RATIO.)',
    },
    {
      q: 'In the figure, $\\overline{WX} \\parallel \\overline{ZY}$, and the segments $\\overline{WY}$ and $\\overline{XZ}$ cross at $P$, with $WX = 10$ and $ZY = 4$. The area of $\\triangle PWX$ is how many times the area of $\\triangle PYZ$? Give the ratio.',
      fig: {
        view: [-6.5, -2.5, 6.5, 4.5],
        alt: 'Hourglass figure: WX parallel to ZY with segments WY and XZ crossing at P',
        elems: [
          { t: 'seg', a: [-5, 3], b: [5, 3] },
          { t: 'seg', a: [-2, -1.2], b: [2, -1.2] },
          { t: 'seg', a: [-5, 3], b: [2, -1.2] },
          { t: 'seg', a: [5, 3], b: [-2, -1.2] },
          { t: 'point', p: [-5, 3], label: 'W', dx: -10, dy: -8 },
          { t: 'point', p: [5, 3], label: 'X', dx: 10, dy: -8 },
          { t: 'point', p: [-2, -1.2], label: 'Z', dx: -10, dy: 10 },
          { t: 'point', p: [2, -1.2], label: 'Y', dx: 10, dy: 10 },
          { t: 'point', p: [0, 0], label: 'P', dx: 10, dy: -6 },
          { t: 'label', p: [0, 3], text: '10', dx: 0, dy: -10 },
          { t: 'label', p: [0, -1.2], text: '4', dx: 0, dy: 14 },
        ],
      },
      choices: ['$5 : 2$', '$4 : 25$', '$25 : 4$', '$125 : 8$'],
      answer: 2,
      solution:
        'AA applies to the hourglass (alternate angles between the parallels, vertical angles at $P$), so $\\triangle PWX \\sim \\triangle PYZ$ with side ratio $\\frac{WX}{ZY} = \\frac{10}{4} = \\frac{5}{2}$. The areas compare as the square, $\\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}$, so the ratio is $25 : 4$ ✓. Check a second, independent way through the formula: with the parallel sides as bases, $P$’s distances to the two parallel lines are matching altitudes of the similar triangles, hence also in ratio $5 : 2$; the areas then stand as $\\frac{10 \\times 5}{4 \\times 2} = \\frac{50}{8} = \\frac{25}{4}$ ✓ — one factor of $\\frac{5}{2}$ from the base and one from the height. (The choice $5 : 2$ is FORGETTING TO SQUARE; the choice $4 : 25$ is FLIPPING THE SQUARED RATIO; the choice $125 : 8$ is CUBING THE RATIO.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 5,
  challenge,
}
