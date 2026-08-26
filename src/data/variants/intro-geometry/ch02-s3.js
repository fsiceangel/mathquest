// Introduction to Geometry chapter 2 — variations for section 2.3
// (Straight and Vertical Angles). All problems, figures, and solutions are
// original MathQuest content.
//
// House rules for this file:
//  - Every angle was worked twice by genuinely different routes: once the
//    obvious way (subtract from $180^\circ$, subtract from $360^\circ$, set the
//    two expressions equal) and once by an independent landmark route (walk the
//    right angle, chase the two linear pairs, count the six angles of a full
//    turn, test the candidate backward through both expressions). The key is
//    written down only when the two routes agree.
//  - Each slot keeps the shape of its base answer: a linear-pair item stays a
//    linear-pair item, a vocabulary item stays a vocabulary item, an algebra
//    item still asks for the angle and never quietly turns into "find $x$."
//  - Every figure is coordinate-exact. A ray drawn at $\theta$ degrees ends at
//    $[3\cos\theta, 3\sin\theta]$, and a crossing line uses that point and its
//    exact negative so the vertical angles really are equal in the picture.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS. The traps running through this section are: SUBTRACTING FROM A FULL
//    TURN, COPYING THE GIVEN ANGLE, USING 90 INSTEAD OF 180, CONFUSING
//    SUPPLEMENTARY WITH COMPLEMENTARY, NAMING THE NEIGHBOR, DOUBLING THE ANGLE,
//    USING 100 INSTEAD OF 90, REPEATING THE ANGLE ITSELF, SUBTRACTING THE
//    VERTICAL TWIN TWICE, KEEPING ONLY THE NEIGHBOR, ANSWERING THE STRAIGHT
//    ANGLE, ANSWERING THE SMALLER ANGLE, STOPPING AT x, MOVING THE CONSTANT THE
//    WRONG WAY, DROPPING THE CONSTANT, CONFUSING THE GAP WITH THE ANGLE,
//    ASSUMING A RIGHT ANGLE, TREATING IT AS A LINEAR PAIR, LEAVING OUT AN
//    ANGLE, MISREADING THE RATIO AS A MULTIPLE, STOPPING AT ONE PART, SPLITTING
//    THE STRAIGHT ANGLE EVENLY, USING A FULL TURN INSTEAD OF A STRAIGHT ANGLE,
//    ADDING THE TWO GIVEN ANGLES, and FORGETTING THE MIDDLE ANGLE.
//  - No two choices inside an item name the same value.

const s23 = [
  // s1 — one angle of a linear pair is given; find its partner.
  [
    {
      q: 'In the figure, $D$, $O$, and $E$ lie on one straight line and $\\angle DOF = 131^\\circ$. What is $\\angle FOE$?',
      fig: {
        view: [-3.4, -0.8, 3.6, 2.9],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [-1.97, 2.26] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [3, 0], label: 'D', dx: 10, dy: 0 },
          { t: 'point', p: [-3, 0], label: 'E', dx: -10, dy: 0 },
          { t: 'point', p: [-1.97, 2.26], label: 'F', dx: -4, dy: -10 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-1.97, 2.26], r: 0.55, label: '131' },
          { t: 'angle', at: [0, 0], from: [-1.97, 2.26], to: [-3, 0], r: 0.95, label: '?' },
        ],
      },
      choices: ['$229^\\circ$', '$131^\\circ$', '$49^\\circ$', '$41^\\circ$'],
      answer: 2,
      solution:
        'The two angles sit side by side along line $DE$, so they are a linear pair and add to a straight angle: $\\angle FOE = 180^\\circ - 131^\\circ = 49^\\circ$ ✓. Check a second, independent way by using the upright as a landmark instead of subtracting from $180^\\circ$. Stand a ray straight up from $O$; it makes $90^\\circ$ with $\\overrightarrow{OD}$ and another $90^\\circ$ with $\\overrightarrow{OE}$. Since $131^\\circ = 90^\\circ + 41^\\circ$, the ray $\\overrightarrow{OF}$ has leaned $41^\\circ$ past that upright, which leaves $90^\\circ - 41^\\circ = 49^\\circ$ of the left-hand right angle still open ✓. Same $49^\\circ$, reached without ever writing $180$. (The choice $229^\\circ$ is SUBTRACTING FROM A FULL TURN, which gives the reflex angle instead of the partner ✗; $131^\\circ$ is COPYING THE GIVEN ANGLE, as though the two were vertical angles rather than neighbors ✗; $41^\\circ$ is USING 90 INSTEAD OF 180 ✗.)',
    },
    {
      q: 'Points $M$, $V$, and $N$ lie on a straight line in that order, and ray $\\overrightarrow{VP}$ makes an angle of $59^\\circ$ with $\\overrightarrow{VM}$. How large is $\\angle PVN$?',
      fig: {
        view: [-3.4, -0.8, 3.6, 3.2],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [1.55, 2.57] },
          { t: 'point', p: [0, 0], label: 'V', dx: 0, dy: 14 },
          { t: 'point', p: [3, 0], label: 'M', dx: 10, dy: 0 },
          { t: 'point', p: [-3, 0], label: 'N', dx: -10, dy: 0 },
          { t: 'point', p: [1.55, 2.57], label: 'P', dx: 8, dy: -6 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.55, 2.57], r: 0.8, label: '59' },
          { t: 'angle', at: [0, 0], from: [1.55, 2.57], to: [-3, 0], r: 0.55, label: '?' },
        ],
      },
      choices: ['$121^\\circ$', '$31^\\circ$', '$59^\\circ$', '$301^\\circ$'],
      answer: 0,
      solution:
        'The two angles are a linear pair along line $MN$, so $\\angle PVN = 180^\\circ - 59^\\circ = 121^\\circ$ ✓. Check a second, independent way through the upright. A ray pointing straight up from $V$ makes $90^\\circ$ with each half of the line. Ray $\\overrightarrow{VP}$ is only $59^\\circ$ up from $\\overrightarrow{VM}$, so it is still $90^\\circ - 59^\\circ = 31^\\circ$ short of the upright. Travelling from $\\overrightarrow{VP}$ to $\\overrightarrow{VN}$ therefore covers that $31^\\circ$ gap plus the whole right angle on the far side: $31^\\circ + 90^\\circ = 121^\\circ$ ✓. (The choice $31^\\circ$ is that gap on its own, which is USING 90 INSTEAD OF 180 ✗; $59^\\circ$ is COPYING THE GIVEN ANGLE ✗; $301^\\circ$ is SUBTRACTING FROM A FULL TURN, the reflex angle that sweeps the long way around ✗.)',
    },
    {
      q: 'In the figure, $G$, $T$, and $H$ lie on one line, and $\\angle GTK$ measures $94^\\circ$. Find $\\angle KTH$.',
      fig: {
        view: [-3.4, -0.8, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [-0.21, 2.99] },
          { t: 'point', p: [0, 0], label: 'T', dx: 0, dy: 14 },
          { t: 'point', p: [3, 0], label: 'G', dx: 10, dy: 0 },
          { t: 'point', p: [-3, 0], label: 'H', dx: -10, dy: 0 },
          { t: 'point', p: [-0.21, 2.99], label: 'K', dx: 4, dy: -10 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-0.21, 2.99], r: 0.6, label: '94' },
          { t: 'angle', at: [0, 0], from: [-0.21, 2.99], to: [-3, 0], r: 0.95, label: '?' },
        ],
      },
      choices: ['$266^\\circ$', '$4^\\circ$', '$94^\\circ$', '$86^\\circ$'],
      answer: 3,
      solution:
        'A linear pair fills a straight angle, so $\\angle KTH = 180^\\circ - 94^\\circ = 86^\\circ$ ✓. Check a second, independent way with the upright landmark. The upright at $T$ makes a right angle with each half of line $GH$. Because $94^\\circ = 90^\\circ + 4^\\circ$, ray $\\overrightarrow{TK}$ has tipped $4^\\circ$ past straight up, eating $4^\\circ$ out of the left-hand right angle and leaving $90^\\circ - 4^\\circ = 86^\\circ$ ✓ — which is why the picture shows $\\angle KTH$ just barely smaller than a square corner. (The choice $266^\\circ$ is SUBTRACTING FROM A FULL TURN ✗; $4^\\circ$ is USING 90 INSTEAD OF 180, keeping only the tip past the upright ✗; $94^\\circ$ is COPYING THE GIVEN ANGLE ✗.)',
    },
  ],
  // s2 — the vocabulary of angle pairs: which word matches which fact?
  [
    {
      q: 'Rina measures two angles in a drawing and finds that their measures add up to exactly $180^\\circ$. Which word names a pair like this?',
      choices: ['Adjacent', 'Vertical', 'Supplementary', 'Congruent'],
      answer: 2,
      solution:
        'Two angles whose measures add to $180^\\circ$ are supplementary ✓ — the word for the $180^\\circ$ team, the one that fills a straight angle. Check a second, independent way by eliminating: ask what each other word would need in order to be true. "Adjacent" describes angles that sit side by side sharing an arm, and two angles can share an arm while adding to $70^\\circ$, so adjacency says nothing about a sum ✗. "Vertical" describes the across-the-crossing pair made by two lines, and those are equal, not $180^\\circ$-summing ✗ — indeed a vertical pair of $40^\\circ$ angles adds to only $80^\\circ$. "Congruent" simply means equal in measure, and $30^\\circ$ with $30^\\circ$ is congruent but adds to $60^\\circ$ ✗. One word survives ✓. (Choosing "Adjacent" is DESCRIBING THE POSITION INSTEAD OF THE SUM; "Vertical" is NAMING THE CROSSING PAIR; "Congruent" is NAMING EQUALITY INSTEAD OF A SUM.)',
    },
    {
      q: 'Two angles have measures that add up to exactly $90^\\circ$. What word describes such a pair?',
      choices: ['Complementary', 'Supplementary', 'Vertical', 'Obtuse'],
      answer: 0,
      solution:
        'Angles adding to $90^\\circ$ are complementary ✓ — together they complete a right angle. The alphabet hook keeps the two words apart: $c$ comes before $s$, and $90$ comes before $180$. Check a second, independent way by testing a concrete pair. Take $25^\\circ$ and $65^\\circ$: they add to $90^\\circ$, and drawn side by side they form a perfect square corner ✓ — a right angle, not a straight one, so "supplementary" cannot be the word for them ✗. "Vertical" would require two crossing lines, which nothing here mentions, and vertical angles are equal rather than adding to anything fixed ✗. "Obtuse" describes a single angle bigger than $90^\\circ$, and neither $25^\\circ$ nor $65^\\circ$ is obtuse ✗. (Choosing "Supplementary" is CONFUSING SUPPLEMENTARY WITH COMPLEMENTARY, the $180^\\circ$ word for the $90^\\circ$ job; "Vertical" is NAMING THE CROSSING PAIR; "Obtuse" is DESCRIBING ONE ANGLE INSTEAD OF A PAIR.)',
    },
    {
      q: 'When two straight lines cross, the two angles that lie directly across the crossing point from each other are always equal. What are that pair of angles called?',
      choices: ['Supplementary angles', 'Adjacent angles', 'Right angles', 'Vertical angles'],
      answer: 3,
      solution:
        'The across-the-crossing pair made by two lines is called a pair of vertical angles, and vertical angles are always equal ✓. Check a second, independent way by seeing which name could survive the equality fact. Suppose the crossing makes an angle of $40^\\circ$; its partner across the crossing is $40^\\circ$ too. Are they supplementary? $40 + 40 = 80$, not $180$ ✗. Are they adjacent? No — the neighbors are the ones sharing an arm, while this pair touches only at the single crossing point ✗. Are they right angles? Only if the lines happen to be perpendicular, and $40^\\circ$ shows they need not be ✗. The name that fits every crossing, tilted or square, is vertical ✓. (Choosing "Supplementary angles" is NAMING THE NEIGHBOR, since the $180^\\circ$ pairs are the side-by-side ones; "Adjacent angles" is DESCRIBING THE POSITION INSTEAD OF THE PAIR; "Right angles" is ASSUMING A RIGHT ANGLE that the problem never promised.)',
    },
  ],
  // s3 — read a vertical pair straight off a crossing.
  [
    {
      q: 'Lines $WY$ and $XZ$ cross at point $T$, and $\\angle WTX = 66^\\circ$. What is $\\angle YTZ$?',
      fig: {
        view: [-3.4, -3.2, 3.6, 3.2],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-1.22, -2.74], b: [1.22, 2.74] },
          { t: 'point', p: [0, 0], label: 'T', dx: 14, dy: 4 },
          { t: 'point', p: [3, 0], label: 'W', dx: 10, dy: 0 },
          { t: 'point', p: [1.22, 2.74], label: 'X', dx: 8, dy: -8 },
          { t: 'point', p: [-3, 0], label: 'Y', dx: -10, dy: 0 },
          { t: 'point', p: [-1.22, -2.74], label: 'Z', dx: -8, dy: 12 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.22, 2.74], r: 0.7, label: '66' },
          { t: 'angle', at: [0, 0], from: [-3, 0], to: [-1.22, -2.74], r: 0.7, label: '?' },
        ],
      },
      choices: ['$114^\\circ$', '$24^\\circ$', '$132^\\circ$', '$66^\\circ$'],
      answer: 3,
      solution:
        '$\\angle WTX$ and $\\angle YTZ$ sit directly across the crossing from each other, so they are vertical angles and therefore equal: $\\angle YTZ = 66^\\circ$ ✓. Check a second, independent way without quoting that rule at all, by walking two linear pairs. Along line $WY$, the angles $\\angle WTX$ and $\\angle XTY$ are neighbors, so $\\angle XTY = 180^\\circ - 66^\\circ = 114^\\circ$. Now along line $XZ$, the angles $\\angle XTY$ and $\\angle YTZ$ are neighbors, so $\\angle YTZ = 180^\\circ - 114^\\circ = 66^\\circ$ ✓. Two subtractions undo each other, which is exactly why the vertical rule is true. (The choice $114^\\circ$ is NAMING THE NEIGHBOR, handing back the halfway angle ✗; $24^\\circ$ is CONFUSING SUPPLEMENTARY WITH COMPLEMENTARY, from $90^\\circ - 66^\\circ$ ✗; $132^\\circ$ is DOUBLING THE ANGLE ✗.)',
    },
    {
      q: 'Lines $EG$ and $FH$ meet at $N$. If $\\angle ENF = 108^\\circ$, how large is $\\angle GNH$?',
      fig: {
        view: [-3.4, -3.2, 3.6, 3.2],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [0.93, -2.85], b: [-0.93, 2.85] },
          { t: 'point', p: [0, 0], label: 'N', dx: 14, dy: 4 },
          { t: 'point', p: [3, 0], label: 'E', dx: 10, dy: 0 },
          { t: 'point', p: [-0.93, 2.85], label: 'F', dx: -8, dy: -8 },
          { t: 'point', p: [-3, 0], label: 'G', dx: -10, dy: 0 },
          { t: 'point', p: [0.93, -2.85], label: 'H', dx: 8, dy: 12 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-0.93, 2.85], r: 0.7, label: '108' },
          { t: 'angle', at: [0, 0], from: [-3, 0], to: [0.93, -2.85], r: 0.7, label: '?' },
        ],
      },
      choices: ['$252^\\circ$', '$108^\\circ$', '$72^\\circ$', '$18^\\circ$'],
      answer: 1,
      solution:
        '$\\angle ENF$ and $\\angle GNH$ face each other across the crossing, so they are vertical angles and equal: $\\angle GNH = 108^\\circ$ ✓. Check a second, independent way by chasing the two linear pairs around the point. Along line $EG$, the neighbor of the $108^\\circ$ angle is $\\angle FNG = 180^\\circ - 108^\\circ = 72^\\circ$. Along line $FH$, the neighbor of that $72^\\circ$ angle is $\\angle GNH = 180^\\circ - 72^\\circ = 108^\\circ$ ✓. As a bonus check, the four angles now read $108$, $72$, $108$, $72$, and $108 + 72 + 108 + 72 = 360$ ✓ — a full turn, as it must be. (The choice $72^\\circ$ is NAMING THE NEIGHBOR ✗; $252^\\circ$ is SUBTRACTING FROM A FULL TURN ✗; $18^\\circ$ is USING 90 INSTEAD OF 180, from $108^\\circ - 90^\\circ$ ✗.)',
    },
    {
      q: 'Lines $JL$ and $KM$ cross at $P$, and the angle $\\angle JPK$ measures $39^\\circ$. Find $\\angle LPM$.',
      fig: {
        view: [-3.4, -2.4, 3.6, 2.4],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-2.33, -1.89], b: [2.33, 1.89] },
          { t: 'point', p: [0, 0], label: 'P', dx: 8, dy: 16 },
          { t: 'point', p: [3, 0], label: 'J', dx: 10, dy: 0 },
          { t: 'point', p: [2.33, 1.89], label: 'K', dx: 8, dy: -8 },
          { t: 'point', p: [-3, 0], label: 'L', dx: -10, dy: 0 },
          { t: 'point', p: [-2.33, -1.89], label: 'M', dx: -8, dy: 12 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [2.33, 1.89], r: 0.9, label: '39' },
          { t: 'angle', at: [0, 0], from: [-3, 0], to: [-2.33, -1.89], r: 0.9, label: '?' },
        ],
      },
      choices: ['$141^\\circ$', '$78^\\circ$', '$39^\\circ$', '$51^\\circ$'],
      answer: 2,
      solution:
        '$\\angle JPK$ and $\\angle LPM$ are vertical angles — each arm of one is the opposite ray of an arm of the other — so they are equal: $\\angle LPM = 39^\\circ$ ✓. Check a second, independent way by going the long way round through two neighbors. Along line $JL$, the neighbor of $\\angle JPK$ is $\\angle KPL = 180^\\circ - 39^\\circ = 141^\\circ$; along line $KM$, the neighbor of $\\angle KPL$ is $\\angle LPM = 180^\\circ - 141^\\circ = 39^\\circ$ ✓. Both angles turn out to be supplements of the same $141^\\circ$ angle, and two angles supplementary to the same angle have no choice but to match. (The choice $141^\\circ$ is NAMING THE NEIGHBOR ✗; $78^\\circ$ is DOUBLING THE ANGLE ✗; $51^\\circ$ is CONFUSING SUPPLEMENTARY WITH COMPLEMENTARY, from $90^\\circ - 39^\\circ$ ✗.)',
    },
  ],
  // s4 — the complement of a given acute angle.
  [
    {
      q: 'What is the complement of a $19^\\circ$ angle?',
      choices: ['$71^\\circ$', '$161^\\circ$', '$81^\\circ$', '$19^\\circ$'],
      answer: 0,
      solution:
        'Complementary angles add to $90^\\circ$, so the complement of $19^\\circ$ is $90^\\circ - 19^\\circ = 71^\\circ$ ✓. Check a second, independent way by travelling through the supplement instead. The supplement of $19^\\circ$ is $180^\\circ - 19^\\circ = 161^\\circ$, and a straight angle is exactly one right angle larger than a right angle, so the complement is the supplement with a whole $90^\\circ$ taken off: $161^\\circ - 90^\\circ = 71^\\circ$ ✓. The two routes agree, and the final check is instant: $19 + 71 = 90$ ✓. (The choice $161^\\circ$ is CONFUSING SUPPLEMENTARY WITH COMPLEMENTARY, answering for the $180^\\circ$ partner ✗; $81^\\circ$ is USING 100 INSTEAD OF 90 ✗; $19^\\circ$ is REPEATING THE ANGLE ITSELF, which would need the angle to be $45^\\circ$ ✗.)',
    },
    {
      q: 'An angle measures $62^\\circ$. How large is its complement?',
      choices: ['$118^\\circ$', '$62^\\circ$', '$38^\\circ$', '$28^\\circ$'],
      answer: 3,
      solution:
        'Two complementary angles together make a right angle, so the complement of $62^\\circ$ is $90^\\circ - 62^\\circ = 28^\\circ$ ✓. Check a second, independent way by routing through the straight angle. The supplement of $62^\\circ$ is $180^\\circ - 62^\\circ = 118^\\circ$; a straight angle is a right angle plus a right angle, so peeling $90^\\circ$ off the supplement leaves the complement: $118^\\circ - 90^\\circ = 28^\\circ$ ✓. Confirm by addition: $62 + 28 = 90$ ✓, a square corner. (The choice $118^\\circ$ is CONFUSING SUPPLEMENTARY WITH COMPLEMENTARY ✗; $38^\\circ$ is USING 100 INSTEAD OF 90 ✗; $62^\\circ$ is REPEATING THE ANGLE ITSELF ✗.)',
    },
    {
      q: 'Devin draws an angle of $47^\\circ$. What is the measure of the angle that completes it to a right angle?',
      choices: ['$53^\\circ$', '$43^\\circ$', '$47^\\circ$', '$133^\\circ$'],
      answer: 1,
      solution:
        'Completing an angle to a right angle is exactly what a complement does, so the answer is $90^\\circ - 47^\\circ = 43^\\circ$ ✓. Check a second, independent way through the supplement. The supplement of $47^\\circ$ is $180^\\circ - 47^\\circ = 133^\\circ$, and dropping one full right angle from that straight angle leaves $133^\\circ - 90^\\circ = 43^\\circ$ ✓. Notice how close $47^\\circ$ sits to $45^\\circ$: it is $2^\\circ$ over half of a right angle, so its partner should be $2^\\circ$ under, and $45 - 2 = 43$ ✓. (The choice $133^\\circ$ is CONFUSING SUPPLEMENTARY WITH COMPLEMENTARY ✗; $53^\\circ$ is USING 100 INSTEAD OF 90 ✗; $47^\\circ$ is REPEATING THE ANGLE ITSELF ✗.)',
    },
  ],
  // s5 — one of the four angles at a crossing is known; total the other three.
  [
    {
      q: 'Two lines cross, forming four angles. One of those four angles measures $57^\\circ$. What do the other three angles add up to?',
      fig: {
        view: [-3.4, -2.9, 3.6, 2.9],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-1.63, -2.52], b: [1.63, 2.52] },
          { t: 'point', p: [0, 0], label: 'O', dx: -12, dy: -8 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.63, 2.52], r: 0.85, label: '57' },
        ],
      },
      choices: ['$180^\\circ$', '$303^\\circ$', '$246^\\circ$', '$123^\\circ$'],
      answer: 1,
      solution:
        'The four angles at the crossing fill one complete turn, so they add to $360^\\circ$. Taking out the known slice leaves $360^\\circ - 57^\\circ = 303^\\circ$ for the other three ✓. Check a second, independent way by naming the other three angles one at a time and adding them yourself. The two neighbors of the $57^\\circ$ angle are each supplementary to it: $180^\\circ - 57^\\circ = 123^\\circ$ apiece. The third is the vertical twin, another $57^\\circ$. So the total is $123^\\circ + 57^\\circ + 123^\\circ = 303^\\circ$ ✓ — the same number with no full turn used anywhere. (The choice $246^\\circ$ is SUBTRACTING THE VERTICAL TWIN TWICE, from $360 - 57 - 57$ ✗; $123^\\circ$ is KEEPING ONLY THE NEIGHBOR instead of totalling three angles ✗; $180^\\circ$ is ANSWERING THE STRAIGHT ANGLE, which is only two of the four ✗.)',
    },
    {
      q: 'Two straight lines cross at a point. One of the four angles they make measures $128^\\circ$. Find the sum of the remaining three angles.',
      fig: {
        view: [-3.4, -2.7, 3.6, 2.7],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [1.85, -2.36], b: [-1.85, 2.36] },
          { t: 'point', p: [0, 0], label: 'O', dx: -6, dy: -12 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-1.85, 2.36], r: 0.75, label: '128' },
        ],
      },
      choices: ['$52^\\circ$', '$180^\\circ$', '$232^\\circ$', '$104^\\circ$'],
      answer: 2,
      solution:
        'All four angles around the crossing point make a full turn of $360^\\circ$, so the other three come to $360^\\circ - 128^\\circ = 232^\\circ$ ✓. Check a second, independent way by working out the three angles separately. Each neighbor of the $128^\\circ$ angle is its supplement, $180^\\circ - 128^\\circ = 52^\\circ$, and the angle across the crossing is its vertical twin, $128^\\circ$. Adding: $52^\\circ + 128^\\circ + 52^\\circ = 232^\\circ$ ✓. (The choice $104^\\circ$ is SUBTRACTING THE VERTICAL TWIN TWICE, from $360 - 128 - 128$ ✗; $52^\\circ$ is KEEPING ONLY THE NEIGHBOR ✗; $180^\\circ$ is ANSWERING THE STRAIGHT ANGLE ✗.)',
    },
    {
      q: 'Where two lines cross they create four angles, and the smallest of them measures $84^\\circ$. What is the total of the other three?',
      fig: {
        view: [-3.4, -3.4, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-0.31, -2.98], b: [0.31, 2.98] },
          { t: 'point', p: [0, 0], label: 'O', dx: -14, dy: -6 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [0.31, 2.98], r: 0.9, label: '84' },
        ],
      },
      choices: ['$96^\\circ$', '$192^\\circ$', '$276^\\circ$', '$180^\\circ$'],
      answer: 2,
      solution:
        'Four angles meeting at one point account for a whole turn, $360^\\circ$. Remove the known $84^\\circ$ and $360^\\circ - 84^\\circ = 276^\\circ$ remains ✓. Check a second, independent way by listing the other three. Both neighbors are supplementary to the $84^\\circ$ angle, so each is $180^\\circ - 84^\\circ = 96^\\circ$, and the vertical twin is another $84^\\circ$; together $96^\\circ + 84^\\circ + 96^\\circ = 276^\\circ$ ✓. That listing also confirms $84^\\circ$ really is the smallest of the four, since $84 < 96$ ✓. (The choice $192^\\circ$ is SUBTRACTING THE VERTICAL TWIN TWICE, from $360 - 84 - 84$ ✗; $96^\\circ$ is KEEPING ONLY THE NEIGHBOR ✗; $180^\\circ$ is ANSWERING THE STRAIGHT ANGLE ✗.)',
    },
  ],
  // s6 — linear pair given by expressions; report the LARGER angle.
  [
    {
      q: 'Angles measuring $3x + 4^\\circ$ and $5x - 16^\\circ$ form a linear pair. What is the measure of the larger of the two angles?',
      fig: {
        view: [-3.4, -0.8, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [0.73, 2.91] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [0.73, 2.91], r: 0.75, label: '3x+4' },
          { t: 'angle', at: [0, 0], from: [0.73, 2.91], to: [-3, 0], r: 0.55, label: '5x-16' },
        ],
      },
      choices: ['$76^\\circ$', '$89^\\circ$', '$104^\\circ$', '$24^\\circ$'],
      answer: 2,
      solution:
        'A linear pair fills a straight angle: $(3x + 4^\\circ) + (5x - 16^\\circ) = 180^\\circ$, so $8x - 12^\\circ = 180^\\circ$, then $8x = 192^\\circ$ and $x = 24^\\circ$. The two angles are $3(24) + 4 = 76^\\circ$ and $5(24) - 16 = 104^\\circ$, and the larger is $104^\\circ$ ✓. Check a second, independent way by working backward from the answer instead of solving an equation. If the larger angle really is $104^\\circ$, its partner on the line must be $180^\\circ - 104^\\circ = 76^\\circ$. Does one single value of $x$ produce both? From $5x - 16 = 104$ we get $x = 24$, and $3(24) + 4 = 76$ ✓ — the same $x$ delivers both numbers, so the pair is consistent. Try $89^\\circ$ the same way: $5x - 16 = 89$ gives $x = 21$, but then $3(21) + 4 = 67$, and $89 + 67 = 156 \\ne 180$ ✗. (The choice $76^\\circ$ is ANSWERING THE SMALLER ANGLE ✗; $24^\\circ$ is STOPPING AT x, which is a step and not an angle ✗; $89^\\circ$ is MOVING THE CONSTANT THE WRONG WAY, solving $8x + 12^\\circ = 180^\\circ$ ✗.)',
    },
    {
      q: 'Two angles that form a linear pair measure $7x$ and $3x - 10^\\circ$. How large is the bigger angle?',
      fig: {
        view: [-3.4, -0.8, 3.6, 2.9],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [-2.05, 2.19] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-2.05, 2.19], r: 0.55, label: '7x' },
          { t: 'angle', at: [0, 0], from: [-2.05, 2.19], to: [-3, 0], r: 0.9, label: '3x-10' },
        ],
      },
      choices: ['$47^\\circ$', '$133^\\circ$', '$119^\\circ$', '$19^\\circ$'],
      answer: 1,
      solution:
        'The pair sits along a line, so the measures add to $180^\\circ$: $7x + (3x - 10^\\circ) = 180^\\circ$, giving $10x - 10^\\circ = 180^\\circ$, then $10x = 190^\\circ$ and $x = 19^\\circ$. The angles are $7(19) = 133^\\circ$ and $3(19) - 10 = 47^\\circ$, so the bigger one is $133^\\circ$ ✓. Check a second, independent way by testing the candidate against both expressions. If the larger angle is $133^\\circ$, the smaller must be $180^\\circ - 133^\\circ = 47^\\circ$. From $7x = 133$ we get $x = 19$; feeding that into the other expression gives $3(19) - 10 = 47$ ✓, exactly the partner required. Test $119^\\circ$ instead: $7x = 119$ gives $x = 17$, and $3(17) - 10 = 41$, but $119 + 41 = 160 \\ne 180$ ✗. (The choice $47^\\circ$ is ANSWERING THE SMALLER ANGLE ✗; $19^\\circ$ is STOPPING AT x ✗; $119^\\circ$ is MOVING THE CONSTANT THE WRONG WAY, solving $10x + 10^\\circ = 180^\\circ$ ✗.)',
    },
    {
      q: 'A ray drawn from a point on a line splits the straight angle into two angles measuring $8x + 2^\\circ$ and $7x - 2^\\circ$. What is the larger of these two angles?',
      fig: {
        view: [-3.4, -0.8, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [-0.42, 2.97] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-0.42, 2.97], r: 0.6, label: '8x+2' },
          { t: 'angle', at: [0, 0], from: [-0.42, 2.97], to: [-3, 0], r: 0.9, label: '7x-2' },
        ],
      },
      choices: ['$98^\\circ$', '$82^\\circ$', '$50^\\circ$', '$12^\\circ$'],
      answer: 0,
      solution:
        'The ray cuts a straight angle in two, so the pieces add to $180^\\circ$: $(8x + 2^\\circ) + (7x - 2^\\circ) = 180^\\circ$. The $+2$ and $-2$ cancel, leaving $15x = 180^\\circ$ and $x = 12^\\circ$. The pieces measure $8(12) + 2 = 98^\\circ$ and $7(12) - 2 = 82^\\circ$, so the larger is $98^\\circ$ ✓. Check a second, independent way using the gap rather than the sum. The two expressions differ by $(8x + 2) - (7x - 2) = x + 4$, so the larger angle beats the smaller by $x + 4$ degrees. Two numbers adding to $180$ and differing by $d$ are $90 + \\frac{d}{2}$ and $90 - \\frac{d}{2}$; with the answer $98^\\circ$ the gap is $98 - 82 = 16$, which forces $x + 4 = 16$, so $x = 12$ ✓ — matching the value found the first way. (The choice $82^\\circ$ is ANSWERING THE SMALLER ANGLE ✗; $12^\\circ$ is STOPPING AT x ✗; $50^\\circ$ is USING 90 INSTEAD OF 180, from $15x = 90^\\circ$ ✗.)',
    },
  ],
  // s7 — vertical pair given by expressions; report the angle, never x.
  [
    {
      q: 'Two lines cross so that one angle measures $5x - 15^\\circ$ while the angle across the crossing from it measures $3x + 25^\\circ$. What is the measure of each of these two angles?',
      fig: {
        view: [-3.4, -3.4, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-0.26, -2.99], b: [0.26, 2.99] },
          { t: 'point', p: [0, 0], label: 'O', dx: 14, dy: 4 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [0.26, 2.99], r: 0.6, label: '5x-15' },
          { t: 'angle', at: [0, 0], from: [-3, 0], to: [-0.26, -2.99], r: 0.6, label: '3x+25' },
        ],
      },
      choices: ['$85^\\circ$', '$20^\\circ$', '$100^\\circ$', '$95^\\circ$'],
      answer: 0,
      solution:
        'Angles across a crossing are vertical angles, so they are equal: $5x - 15^\\circ = 3x + 25^\\circ$. Subtracting $3x$ and adding $15^\\circ$ gives $2x = 40^\\circ$, so $x = 20^\\circ$ and each angle measures $5(20) - 15 = 85^\\circ$ ✓. Check a second, independent way by testing the candidate through both expressions and the neighbor. If the angle is $85^\\circ$, then $5x - 15 = 85$ forces $x = 20$, and the other expression reads $3(20) + 25 = 85$ ✓ — the two agree, as vertical angles must. The neighbor angle is then $180^\\circ - 85^\\circ = 95^\\circ$, and the four angles read $85$, $95$, $85$, $95$, totalling $360^\\circ$ ✓. Test $95^\\circ$ the same way: $5x - 15 = 95$ gives $x = 22$, but $3(22) + 25 = 91 \\ne 95$ ✗. (The choice $20^\\circ$ is STOPPING AT x ✗; $95^\\circ$ is NAMING THE NEIGHBOR ✗; $100^\\circ$ is DROPPING THE CONSTANT, reading $5x$ and forgetting the $-15^\\circ$ ✗.)',
    },
    {
      q: 'When two lines cross, one angle is $9x$ and its vertical angle is $6x + 33^\\circ$. Find the measure of these vertical angles.',
      fig: {
        view: [-3.4, -3.2, 3.6, 3.2],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [0.469, -2.965], b: [-0.469, 2.965] },
          { t: 'point', p: [0, 0], label: 'O', dx: 14, dy: 4 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-0.469, 2.965], r: 0.7, label: '9x' },
          { t: 'angle', at: [0, 0], from: [-3, 0], to: [0.469, -2.965], r: 0.7, label: '6x+33' },
        ],
      },
      choices: ['$33^\\circ$', '$81^\\circ$', '$11^\\circ$', '$99^\\circ$'],
      answer: 3,
      solution:
        'Vertical angles are equal, so $9x = 6x + 33^\\circ$. Subtracting $6x$ gives $3x = 33^\\circ$, so $x = 11^\\circ$ and each angle measures $9(11) = 99^\\circ$ ✓. Check a second, independent way by pushing the candidate back through both expressions. If the angle is $99^\\circ$, then $9x = 99$ forces $x = 11$, and the partner expression reads $6(11) + 33 = 99$ ✓, so both descriptions land on the same angle. A further check comes from the neighbor: $180^\\circ - 99^\\circ = 81^\\circ$, and the four angles $99$, $81$, $99$, $81$ add to $360^\\circ$ ✓. Just past $90^\\circ$, so the crossing is close to square but not square — matching the drawing. (The choice $11^\\circ$ is STOPPING AT x ✗; $81^\\circ$ is NAMING THE NEIGHBOR ✗; $33^\\circ$ is CONFUSING THE GAP WITH THE ANGLE, handing back the constant that the two expressions differ by ✗.)',
    },
    {
      q: 'Two lines intersect. One of the angles measures $8x - 9^\\circ$, and the angle opposite it across the intersection measures $7x + 6^\\circ$. How large is each of those two angles?',
      fig: {
        view: [-3.4, -3.2, 3.6, 3.2],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [1.08, -2.8], b: [-1.08, 2.8] },
          { t: 'point', p: [0, 0], label: 'O', dx: 14, dy: 12 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-1.08, 2.8], r: 0.6, label: '8x-9' },
          { t: 'angle', at: [0, 0], from: [-3, 0], to: [1.08, -2.8], r: 0.6, label: '7x+6' },
        ],
      },
      choices: ['$120^\\circ$', '$111^\\circ$', '$15^\\circ$', '$69^\\circ$'],
      answer: 1,
      solution:
        'Opposite angles at an intersection are vertical angles, hence equal: $8x - 9^\\circ = 7x + 6^\\circ$. Subtracting $7x$ and adding $9^\\circ$ gives $x = 15^\\circ$, so each angle measures $8(15) - 9 = 111^\\circ$ ✓. Check a second, independent way by testing the candidate in both expressions. If the angle is $111^\\circ$, then $8x - 9 = 111$ forces $x = 15$, and $7(15) + 6 = 111$ ✓ — both expressions agree, which is exactly what being vertical angles demands. The neighbor is $180^\\circ - 111^\\circ = 69^\\circ$, and $111 + 69 + 111 + 69 = 360$ ✓. Test $120^\\circ$ instead: $8x - 9 = 120$ does not even give a whole-number $x$ ✗. (The choice $15^\\circ$ is STOPPING AT x ✗; $69^\\circ$ is NAMING THE NEIGHBOR ✗; $120^\\circ$ is DROPPING THE CONSTANT, reading $8x$ and forgetting the $-9^\\circ$ ✗.)',
    },
  ],
  // s8 — four rays from a point; find the missing slice of the full turn.
  [
    {
      q: 'Four rays drawn from a single point cut the full turn into four angles. Three of them measure $96^\\circ$, $74^\\circ$, and $112^\\circ$. What is the fourth angle?',
      fig: {
        view: [-3.4, -3.4, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [-0.31, 2.98] },
          { t: 'seg', a: [0, 0], b: [-2.95, 0.52] },
          { t: 'seg', a: [0, 0], b: [0.62, -2.93] },
          { t: 'point', p: [0, 0], label: 'O', dx: -14, dy: 14 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-0.31, 2.98], r: 0.6, label: '96' },
          { t: 'angle', at: [0, 0], from: [-0.31, 2.98], to: [-2.95, 0.52], r: 0.6, label: '74' },
          { t: 'angle', at: [0, 0], from: [-2.95, 0.52], to: [0.62, -2.93], r: 0.6, label: '112' },
          { t: 'angle', at: [0, 0], from: [0.62, -2.93], to: [3, 0], r: 0.9, label: '?' },
        ],
      },
      choices: ['$78^\\circ$', '$84^\\circ$', '$90^\\circ$', '$96^\\circ$'],
      answer: 0,
      solution:
        'Angles around a point make a complete turn of $360^\\circ$. The three known slices use $96^\\circ + 74^\\circ + 112^\\circ = 282^\\circ$, so the fourth is $360^\\circ - 282^\\circ = 78^\\circ$ ✓. Check a second, independent way by using the straight angle as a landmark and never mentioning $360$. Start along the first ray and turn: after $96^\\circ + 74^\\circ = 170^\\circ$ you are $10^\\circ$ short of pointing exactly opposite where you began, since a half turn is $180^\\circ$. Turning the next $112^\\circ$ carries you $112^\\circ - 10^\\circ = 102^\\circ$ past that opposite direction. Only $180^\\circ - 102^\\circ = 78^\\circ$ of the second half turn is left to bring you home ✓. (The choice $84^\\circ$ is TREATING IT AS A LINEAR PAIR with the first angle, from $180 - 96$ ✗; $90^\\circ$ is ASSUMING A RIGHT ANGLE nobody promised ✗; $96^\\circ$ is COPYING THE GIVEN ANGLE, as though the first and fourth slices had to match ✗.)',
    },
    {
      q: 'Rays $\\overrightarrow{OA}$, $\\overrightarrow{OB}$, $\\overrightarrow{OC}$, and $\\overrightarrow{OD}$ divide the space around $O$ into four angles measuring $68^\\circ$, $97^\\circ$, $80^\\circ$, and one unknown angle. Find the unknown angle.',
      fig: {
        view: [-3.4, -3.2, 3.6, 3.2],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [1.12, 2.78] },
          { t: 'seg', a: [0, 0], b: [-2.9, 0.78] },
          { t: 'seg', a: [0, 0], b: [-1.27, -2.72] },
          { t: 'point', p: [0, 0], label: 'O', dx: 12, dy: 16 },
          { t: 'point', p: [3, 0], label: 'A', dx: 10, dy: 0 },
          { t: 'point', p: [1.12, 2.78], label: 'B', dx: 8, dy: -8 },
          { t: 'point', p: [-2.9, 0.78], label: 'C', dx: -10, dy: -4 },
          { t: 'point', p: [-1.27, -2.72], label: 'D', dx: -8, dy: 12 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.12, 2.78], r: 0.75, label: '68' },
          { t: 'angle', at: [0, 0], from: [1.12, 2.78], to: [-2.9, 0.78], r: 0.6, label: '97' },
          { t: 'angle', at: [0, 0], from: [-2.9, 0.78], to: [-1.27, -2.72], r: 0.6, label: '80' },
          { t: 'angle', at: [0, 0], from: [-1.27, -2.72], to: [3, 0], r: 0.9, label: '?' },
        ],
      },
      choices: ['$97^\\circ$', '$90^\\circ$', '$115^\\circ$', '$112^\\circ$'],
      answer: 2,
      solution:
        'The four angles wrap once around $O$, so they total $360^\\circ$. The known three come to $68^\\circ + 97^\\circ + 80^\\circ = 245^\\circ$, leaving $360^\\circ - 245^\\circ = 115^\\circ$ ✓. Check a second, independent way by tracking half turns instead. Starting at $\\overrightarrow{OA}$ and sweeping, $68^\\circ + 97^\\circ = 165^\\circ$ puts you $15^\\circ$ short of the ray pointing straight opposite $\\overrightarrow{OA}$. The next $80^\\circ$ takes you $80^\\circ - 15^\\circ = 65^\\circ$ beyond that opposite ray, so the trip back to $\\overrightarrow{OA}$ still needs $180^\\circ - 65^\\circ = 115^\\circ$ ✓. (The choice $112^\\circ$ is TREATING IT AS A LINEAR PAIR with the first angle, from $180 - 68$ ✗; $90^\\circ$ is ASSUMING A RIGHT ANGLE ✗; $97^\\circ$ is COPYING THE GIVEN ANGLE across the point, which would only be right if those rays formed two straight lines ✗.)',
    },
    {
      q: 'Four rays leave one point and slice the whole turn into four angles. Three of the slices are $118^\\circ$, $85^\\circ$, and $95^\\circ$. How big is the remaining slice?',
      fig: {
        view: [-3.4, -3.2, 3.6, 3.2],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [-1.41, 2.65] },
          { t: 'seg', a: [0, 0], b: [-2.76, -1.17] },
          { t: 'seg', a: [0, 0], b: [1.41, -2.65] },
          { t: 'point', p: [0, 0], label: 'O', dx: -16, dy: 12 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-1.41, 2.65], r: 0.6, label: '118' },
          { t: 'angle', at: [0, 0], from: [-1.41, 2.65], to: [-2.76, -1.17], r: 0.6, label: '85' },
          { t: 'angle', at: [0, 0], from: [-2.76, -1.17], to: [1.41, -2.65], r: 0.6, label: '95' },
          { t: 'angle', at: [0, 0], from: [1.41, -2.65], to: [3, 0], r: 1.0, label: '?' },
        ],
      },
      choices: ['$118^\\circ$', '$62^\\circ$', '$90^\\circ$', '$157^\\circ$'],
      answer: 1,
      solution:
        'A full turn is $360^\\circ$, and the three known slices swallow $118^\\circ + 85^\\circ + 95^\\circ = 298^\\circ$, so the last slice is $360^\\circ - 298^\\circ = 62^\\circ$ ✓. Check a second, independent way with half turns. Sweeping from the first ray, $118^\\circ + 85^\\circ = 203^\\circ$ carries you $203^\\circ - 180^\\circ = 23^\\circ$ past the ray opposite your start. The next $95^\\circ$ puts you $23^\\circ + 95^\\circ = 118^\\circ$ past it, so the return trip is $180^\\circ - 118^\\circ = 62^\\circ$ ✓ — the same answer from a route that never uses the number $360$. (The choice $157^\\circ$ is LEAVING OUT AN ANGLE, from $360 - 118 - 85$ ✗; $90^\\circ$ is ASSUMING A RIGHT ANGLE ✗; $118^\\circ$ is COPYING THE GIVEN ANGLE, treating the first and last slices as a vertical pair when the rays are not two straight lines ✗.)',
    },
  ],
  // s9 — two supplementary angles in a stated relationship; report the LARGER.
  [
    {
      q: 'Two supplementary angles are in the ratio $11 : 4$. What is the measure of the larger angle?',
      choices: ['$165^\\circ$', '$132^\\circ$', '$66^\\circ$', '$48^\\circ$'],
      answer: 1,
      solution:
        'Think of the straight angle as a bar cut into $11 + 4 = 15$ equal parts. Each part is $\\frac{180^\\circ}{15} = 12^\\circ$, so the larger angle is $11 \\times 12^\\circ = 132^\\circ$ ✓. Check a second, independent way by testing the candidate against both requirements rather than building parts. If the larger angle is $132^\\circ$, its supplement is $180^\\circ - 132^\\circ = 48^\\circ$, and the ratio $132 : 48$ simplifies by dividing both numbers by $12$ to give $11 : 4$ ✓ — both conditions met. Test $165^\\circ$ the same way: its supplement is $15^\\circ$, and $165 : 15$ is $11 : 1$, not $11 : 4$ ✗. (The choice $48^\\circ$ is ANSWERING THE SMALLER ANGLE ✗; $66^\\circ$ is USING 90 INSTEAD OF 180, splitting a right angle into fifteenths ✗; $165^\\circ$ is MISREADING THE RATIO AS A MULTIPLE, solving as though the larger were $11$ times the smaller ✗.)',
    },
    {
      q: 'The measures of two supplementary angles are in the ratio $7 : 2$. How large is the larger angle?',
      choices: ['$40^\\circ$', '$70^\\circ$', '$20^\\circ$', '$140^\\circ$'],
      answer: 3,
      solution:
        'Split the straight angle into $7 + 2 = 9$ equal parts. One part is $\\frac{180^\\circ}{9} = 20^\\circ$, so the larger angle is $7 \\times 20^\\circ = 140^\\circ$ ✓. Check a second, independent way by starting from the answer and checking both conditions. If the larger angle is $140^\\circ$, the other is $180^\\circ - 140^\\circ = 40^\\circ$; is $140 : 40$ really $7 : 2$? Dividing both by $20$ gives $7 : 2$ ✓, and $140 + 40 = 180$ ✓. Both boxes ticked. Try $70^\\circ$: its supplement is $110^\\circ$, which is the larger of that pair, so $70^\\circ$ could not be the bigger angle at all ✗. (The choice $40^\\circ$ is ANSWERING THE SMALLER ANGLE ✗; $70^\\circ$ is USING 90 INSTEAD OF 180, from $\\frac{90^\\circ}{9} = 10^\\circ$ per part ✗; $20^\\circ$ is STOPPING AT ONE PART instead of taking seven of them ✗.)',
    },
    {
      q: 'Two angles are supplementary, and one of them is exactly twice the size of the other. What is the measure of the larger angle?',
      choices: ['$240^\\circ$', '$60^\\circ$', '$120^\\circ$', '$90^\\circ$'],
      answer: 2,
      solution:
        'Call the smaller angle $x$; the larger is $2x$. Supplementary means $x + 2x = 180^\\circ$, so $3x = 180^\\circ$, $x = 60^\\circ$, and the larger angle is $2 \\times 60^\\circ = 120^\\circ$ ✓. Check a second, independent way by testing candidates against the two conditions directly, with no algebra. A larger angle of $120^\\circ$ has supplement $180^\\circ - 120^\\circ = 60^\\circ$, and $120$ is twice $60$ ✓ — both conditions hold. A larger angle of $90^\\circ$ has supplement $90^\\circ$, and $90$ is not twice $90$ ✗. A larger angle of $60^\\circ$ has supplement $120^\\circ$, which is bigger than it, so it is not the larger angle at all ✗. Only $120^\\circ$ survives ✓. (The choice $60^\\circ$ is ANSWERING THE SMALLER ANGLE ✗; $90^\\circ$ is SPLITTING THE STRAIGHT ANGLE EVENLY and ignoring the doubling ✗; $240^\\circ$ is USING A FULL TURN INSTEAD OF A STRAIGHT ANGLE, from $3x = 360^\\circ$ ✗.)',
    },
  ],
  // s10 — three lines through one point; three angles share a straight angle.
  [
    {
      q: 'Three lines all pass through one point. Three angles lying side by side above one of the lines measure $48^\\circ$, $65^\\circ$, and the angle marked with a question mark. How big is the marked angle?',
      fig: {
        view: [-3.4, -2.9, 3.6, 2.9],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-2.01, -2.23], b: [2.01, 2.23] },
          { t: 'seg', a: [1.17, -2.76], b: [-1.17, 2.76] },
          { t: 'point', p: [0, 0], label: 'O', dx: 14, dy: -2 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [2.01, 2.23], r: 0.85, label: '48' },
          { t: 'angle', at: [0, 0], from: [2.01, 2.23], to: [-1.17, 2.76], r: 0.6, label: '65' },
          { t: 'angle', at: [0, 0], from: [-1.17, 2.76], to: [-3, 0], r: 0.85, label: '?' },
        ],
      },
      choices: ['$67^\\circ$', '$113^\\circ$', '$132^\\circ$', '$90^\\circ$'],
      answer: 0,
      solution:
        'The three marked angles sit side by side above the horizontal line, so together they sweep from one half of that line to the other — a straight angle. Hence $48^\\circ + 65^\\circ + ? = 180^\\circ$, and $? = 180^\\circ - 113^\\circ = 67^\\circ$ ✓. Check a second, independent way by going all the way around the point. Below the line, each of the three angles has a vertical twin of the same size, so the six angles at the crossing are $48$, $65$, $?$, $48$, $65$, and $?$ once more. A full turn gives $2(48^\\circ + 65^\\circ + ?) = 360^\\circ$, so $48^\\circ + 65^\\circ + ? = 180^\\circ$ and $? = 67^\\circ$ ✓ — the same value from a $360^\\circ$ route rather than a $180^\\circ$ one. (The choice $113^\\circ$ is ADDING THE TWO GIVEN ANGLES and stopping ✗; $132^\\circ$ is FORGETTING THE MIDDLE ANGLE, from $180 - 48$ ✗; $90^\\circ$ is ASSUMING A RIGHT ANGLE ✗.)',
    },
    {
      q: 'Three lines meet at a single point, making six angles in all. Two angles that sit next to each other above the horizontal line measure $59^\\circ$ and $68^\\circ$, and the third angle above that line is marked with a question mark. Find the marked angle.',
      fig: {
        view: [-3.4, -2.8, 3.6, 2.8],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-1.55, -2.57], b: [1.55, 2.57] },
          { t: 'seg', a: [1.81, -2.4], b: [-1.81, 2.4] },
          { t: 'point', p: [0, 0], label: 'O', dx: 14, dy: -2 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.55, 2.57], r: 0.85, label: '59' },
          { t: 'angle', at: [0, 0], from: [1.55, 2.57], to: [-1.81, 2.4], r: 0.6, label: '68' },
          { t: 'angle', at: [0, 0], from: [-1.81, 2.4], to: [-3, 0], r: 0.95, label: '?' },
        ],
      },
      choices: ['$90^\\circ$', '$127^\\circ$', '$121^\\circ$', '$53^\\circ$'],
      answer: 3,
      solution:
        'The three angles above the horizontal line stack up to fill the straight angle on that side, so $59^\\circ + 68^\\circ + ? = 180^\\circ$, giving $? = 180^\\circ - 127^\\circ = 53^\\circ$ ✓. Check a second, independent way by counting the full turn. Every angle above the line is matched below it by an equal vertical angle, so the six angles are $59$, $68$, $?$, $59$, $68$, $?$. Their total is a complete turn: $2(59^\\circ + 68^\\circ + ?) = 360^\\circ$, so $59^\\circ + 68^\\circ + ? = 180^\\circ$ and $? = 53^\\circ$ ✓. Sanity check on the picture: $53^\\circ$ is the smallest of the three, and the marked slice does look the narrowest ✓. (The choice $127^\\circ$ is ADDING THE TWO GIVEN ANGLES ✗; $121^\\circ$ is FORGETTING THE MIDDLE ANGLE, from $180 - 59$ ✗; $90^\\circ$ is ASSUMING A RIGHT ANGLE ✗.)',
    },
    {
      q: 'Three lines cross at one common point. Going counterclockwise from the right-hand half of the horizontal line, the first two angles measure $42^\\circ$ and $64^\\circ$, and the next one is marked with a question mark. What is the marked angle?',
      fig: {
        view: [-3.4, -3.1, 3.6, 3.1],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-2.23, -2.01], b: [2.23, 2.01] },
          { t: 'seg', a: [0.83, -2.88], b: [-0.83, 2.88] },
          { t: 'point', p: [0, 0], label: 'O', dx: 14, dy: -2 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [2.23, 2.01], r: 0.85, label: '42' },
          { t: 'angle', at: [0, 0], from: [2.23, 2.01], to: [-0.83, 2.88], r: 0.6, label: '64' },
          { t: 'angle', at: [0, 0], from: [-0.83, 2.88], to: [-3, 0], r: 0.85, label: '?' },
        ],
      },
      choices: ['$106^\\circ$', '$74^\\circ$', '$116^\\circ$', '$90^\\circ$'],
      answer: 1,
      solution:
        'Travelling counterclockwise from the right-hand half of the horizontal line to its left-hand half is a half turn, and the three angles named cover that trip with nothing left over. So $42^\\circ + 64^\\circ + ? = 180^\\circ$ and $? = 180^\\circ - 106^\\circ = 74^\\circ$ ✓. Check a second, independent way through the full turn and vertical angles. Each of the three angles above the line is copied below it by its vertical twin, so the six angles around the point are $42$, $64$, $?$, $42$, $64$, $?$, and they fill $360^\\circ$: $2(42^\\circ + 64^\\circ + ?) = 360^\\circ$, so $42^\\circ + 64^\\circ + ? = 180^\\circ$ and $? = 74^\\circ$ ✓. (The choice $106^\\circ$ is ADDING THE TWO GIVEN ANGLES ✗; $116^\\circ$ is FORGETTING THE MIDDLE ANGLE, from $180 - 64$ ✗; $90^\\circ$ is ASSUMING A RIGHT ANGLE ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 2,
  sections: {
    '2.3': s23,
  },
}
