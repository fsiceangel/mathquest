// Introduction to Geometry chapter 2 — variations for section 2.5
// (Angles in a Triangle). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every angle was worked twice: once by the $180^\circ$ sum and once by a
//    genuinely different route (an altitude that splits the triangle, a
//    rectangle folded from two copies, a balance around $45^\circ$, a
//    back-substitution of the candidate, the second sub-triangle plus the
//    straight angle). The two routes must agree before a key is written down.
//  - Each slot keeps the shape of its base answer: a "find the third angle"
//    stays a "find the third angle", a classification stays a classification,
//    a "largest angle" question never quietly turns into a "smallest angle"
//    question.
//  - Every figure was built from its own numbers and checked: the drawn angle
//    at each vertex matches the number printed beside it, right-angle markers
//    span a real $90^\circ$, and equal tick marks sit on genuinely equal sides.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS. The traps running through this section are: ANSWERING THE SUM OF
//    THE GIVEN PAIR, TAKING THE DIFFERENCE OF THE GIVEN PAIR, SUBTRACTING ONLY
//    ONE GIVEN ANGLE, DROPPING THE CARRY, SUBTRACTING DIGIT BY DIGIT WITHOUT
//    REGROUPING, FORGETTING THE RIGHT ANGLE, ASSUMING THE TWO ACUTE ANGLES ARE
//    EQUAL, ADDING TO THE RIGHT ANGLE INSTEAD OF SUBTRACTING, FORGETTING TO
//    SPLIT THE LEFTOVER, SPLITTING THE LEFTOVER THREE WAYS, ANSWERING THE
//    EQUIANGULAR CASE, ANSWERING THE RIGHT-ANGLE CASE, DIVIDING 180 BY 2,
//    USING 360 INSTEAD OF 180, JUDGING BY THE GIVEN ANGLES ONLY, ASSUMING A
//    RIGHT ANGLE WITHOUT CHECKING THE SUM, CONFUSING EQUAL ANGLES WITH ANGLE
//    SIZE, ANSWERING x ITSELF, STOPPING AT THE MIDDLE ANGLE, DIVIDING BY THE
//    LARGEST COEFFICIENT, MIS-ADDING THE COEFFICIENTS, DIVIDING 180 BY 3 AS IF
//    THE ANGLES WERE EQUAL, DROPPING THE CONSTANT, COPYING THE VERTEX ANGLE,
//    HALVING THE VERTEX ANGLE, ASSUMING THE TRIANGLE IS EQUILATERAL, ANSWERING
//    THE ANGLE ON THE OTHER SIDE, FORGETTING TO BISECT, ANSWERING THE
//    HALF-ANGLE ITSELF, ANSWERING THE SMALLER ACUTE ANGLE, SUBTRACTING THE
//    DIFFERENCE FROM 90, and USING 180 INSTEAD OF 90.
//  - No two choices inside an item name the same value.

const s25 = [
  // s1 — two angles given, find the third.
  [
    {
      q: 'Two angles of a triangle measure $38^\\circ$ and $51^\\circ$. What is the third angle?',
      fig: {
        view: [-0.8, -0.8, 5.2, 3.0],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.4, 0], [2.69, 2.11]], fill: false },
          { t: 'point', p: [0, 0], label: 'L', dx: -10, dy: 8 },
          { t: 'point', p: [4.4, 0], label: 'M', dx: 10, dy: 8 },
          { t: 'point', p: [2.69, 2.11], label: 'N', dx: 8, dy: -8 },
          { t: 'angle', at: [0, 0], from: [4.4, 0], to: [2.69, 2.11], r: 0.8, label: '38' },
          { t: 'angle', at: [4.4, 0], from: [0, 0], to: [2.69, 2.11], r: 0.7, label: '51' },
          { t: 'angle', at: [2.69, 2.11], from: [4.4, 0], to: [0, 0], r: 0.45, label: '?' },
        ],
      },
      choices: ['$13^\\circ$', '$89^\\circ$', '$91^\\circ$', '$142^\\circ$'],
      answer: 2,
      solution:
        'The three angles of a triangle add to $180^\\circ$, so the third angle is $180^\\circ - 38^\\circ - 51^\\circ = 91^\\circ$ ✓. Check a second, independent way by cutting the triangle in two: drop a straight segment from $N$ down to side $LM$, meeting it at a square corner. That makes two right triangles. In the left one the angles are $38^\\circ$, $90^\\circ$, and $90^\\circ - 38^\\circ = 52^\\circ$; in the right one they are $51^\\circ$, $90^\\circ$, and $90^\\circ - 51^\\circ = 39^\\circ$. The two pieces of $\\angle N$ are $52^\\circ$ and $39^\\circ$, so $\\angle N = 52^\\circ + 39^\\circ = 91^\\circ$ ✓ — the same answer with no $180^\\circ$ subtraction anywhere. Just past $90^\\circ$, so the triangle is obtuse by a whisker. (The choice $89^\\circ$ is ANSWERING THE SUM OF THE GIVEN PAIR ✗; $13^\\circ$ is TAKING THE DIFFERENCE OF THE GIVEN PAIR, $51 - 38$ ✗; $142^\\circ$ is SUBTRACTING ONLY ONE GIVEN ANGLE, stopping at $180 - 38$ ✗.)',
    },
    {
      q: 'In triangle $DEF$, $\\angle D = 56^\\circ$ and $\\angle E = 36^\\circ$. What is $\\angle F$?',
      fig: {
        view: [-0.8, -0.8, 5.2, 3.0],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.4, 0], [1.45, 2.15]], fill: false },
          { t: 'point', p: [0, 0], label: 'D', dx: -10, dy: 8 },
          { t: 'point', p: [4.4, 0], label: 'E', dx: 10, dy: 8 },
          { t: 'point', p: [1.45, 2.15], label: 'F', dx: 0, dy: -12 },
          { t: 'angle', at: [0, 0], from: [4.4, 0], to: [1.45, 2.15], r: 0.7, label: '56' },
          { t: 'angle', at: [4.4, 0], from: [0, 0], to: [1.45, 2.15], r: 0.9, label: '36' },
          { t: 'angle', at: [1.45, 2.15], from: [4.4, 0], to: [0, 0], r: 0.45, label: '?' },
        ],
      },
      choices: ['$92^\\circ$', '$88^\\circ$', '$124^\\circ$', '$98^\\circ$'],
      answer: 1,
      solution:
        'The angles add to $180^\\circ$, so $\\angle F = 180^\\circ - 56^\\circ - 36^\\circ = 88^\\circ$ ✓. Check a second, independent way by splitting the triangle with a segment from $F$ straight down to side $DE$, meeting it squarely. The left piece is a right triangle holding $56^\\circ$, so its share of $\\angle F$ is $90^\\circ - 56^\\circ = 34^\\circ$; the right piece holds $36^\\circ$, so its share is $90^\\circ - 36^\\circ = 54^\\circ$. Together $\\angle F = 34^\\circ + 54^\\circ = 88^\\circ$ ✓. Under $90^\\circ$, and both given angles are under $90^\\circ$ too, so every angle here is acute. (The choice $92^\\circ$ is ANSWERING THE SUM OF THE GIVEN PAIR ✗; $98^\\circ$ is SUBTRACTING DIGIT BY DIGIT WITHOUT REGROUPING, turning $180 - 92$ into $9 - 2 = 9$ and $8 - 0 = 8$ ✗; $124^\\circ$ is SUBTRACTING ONLY ONE GIVEN ANGLE, stopping at $180 - 56$ ✗.)',
    },
    {
      q: 'A triangular sail has two of its corners measuring $27^\\circ$ and $35^\\circ$. How big is the third corner?',
      fig: {
        view: [-0.9, -0.8, 5.9, 2.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [2.89, 1.47]], fill: false },
          { t: 'point', p: [0, 0], label: 'G', dx: -10, dy: 8 },
          { t: 'point', p: [5, 0], label: 'H', dx: 10, dy: 8 },
          { t: 'point', p: [2.89, 1.47], label: 'K', dx: 4, dy: -10 },
          { t: 'angle', at: [0, 0], from: [5, 0], to: [2.89, 1.47], r: 0.95, label: '27' },
          { t: 'angle', at: [5, 0], from: [0, 0], to: [2.89, 1.47], r: 0.8, label: '35' },
          { t: 'angle', at: [2.89, 1.47], from: [5, 0], to: [0, 0], r: 0.4, label: '?' },
        ],
      },
      choices: ['$145^\\circ$', '$62^\\circ$', '$128^\\circ$', '$118^\\circ$'],
      answer: 3,
      solution:
        'The three corners add to $180^\\circ$: the third is $180^\\circ - 27^\\circ - 35^\\circ = 118^\\circ$ ✓. Check a second, independent way by dropping a segment from $K$ square onto side $GH$, which cuts the sail into two right triangles. The left one carries $27^\\circ$, so its slice of $\\angle K$ is $90^\\circ - 27^\\circ = 63^\\circ$; the right one carries $35^\\circ$, so its slice is $90^\\circ - 35^\\circ = 55^\\circ$. The whole corner is $63^\\circ + 55^\\circ = 118^\\circ$ ✓, reached without ever subtracting from $180^\\circ$. Well past $90^\\circ$, so the sail is an obtuse triangle. (The choice $62^\\circ$ is ANSWERING THE SUM OF THE GIVEN PAIR ✗; $128^\\circ$ is DROPPING THE CARRY when adding $27 + 35$, writing $52$ instead of $62$ ✗; $145^\\circ$ is SUBTRACTING ONLY ONE GIVEN ANGLE, stopping at $180 - 35$ ✗.)',
    },
  ],
  // s2 — right triangle, one acute angle given, find the other.
  [
    {
      q: 'In right triangle $LMN$ the right angle is at $M$, and $\\angle L = 28^\\circ$. What is $\\angle N$?',
      fig: {
        view: [-0.8, -0.8, 4.2, 2.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.2, 0], [3.2, 1.7]], fill: false },
          { t: 'point', p: [0, 0], label: 'L', dx: -10, dy: 8 },
          { t: 'point', p: [3.2, 0], label: 'M', dx: 10, dy: 8 },
          { t: 'point', p: [3.2, 1.7], label: 'N', dx: 10, dy: -6 },
          { t: 'right', at: [3.2, 0], from: [0, 0], to: [3.2, 1.7] },
          { t: 'angle', at: [0, 0], from: [3.2, 0], to: [3.2, 1.7], r: 0.85, label: '28' },
          { t: 'angle', at: [3.2, 1.7], from: [3.2, 0], to: [0, 0], r: 0.5, label: '?' },
        ],
      },
      choices: ['$62^\\circ$', '$28^\\circ$', '$78^\\circ$', '$152^\\circ$'],
      answer: 0,
      solution:
        'The right angle has already spent $90^\\circ$ of the triangle’s $180^\\circ$, so the two acute angles share the other $90^\\circ$ — they are complementary. That gives $\\angle N = 90^\\circ - 28^\\circ = 62^\\circ$ ✓. Check a second, independent way by folding a copy: trace the triangle, flip the copy over the slanted side $LN$, and set it against the original. The two triangles snap together into a rectangle with $LM$ and $MN$ as two of its sides. At corner $L$ of that rectangle the slanted side acts as a diagonal, cutting the rectangle’s square corner into two pieces — the original $28^\\circ$ and a copy of the angle at $N$. Two pieces filling a square corner must total $90^\\circ$, so the copy of $\\angle N$ is $62^\\circ$, and so is $\\angle N$ ✓. (The choice $152^\\circ$ is FORGETTING THE RIGHT ANGLE and subtracting from $180^\\circ$ ✗; $28^\\circ$ is ASSUMING THE TWO ACUTE ANGLES ARE EQUAL, which happens only in a $45$-$45$-$90$ triangle ✗; $78^\\circ$ is SUBTRACTING DIGIT BY DIGIT WITHOUT REGROUPING, reading $90 - 28$ as $9 - 2 = 7$ and $8 - 0 = 8$ ✗.)',
    },
    {
      q: 'In right triangle $PQR$ the right angle is at $Q$. The acute angle at the top vertex $R$ measures $41^\\circ$. What is $\\angle P$?',
      fig: {
        view: [-0.8, -0.8, 3.8, 4.1],
        elems: [
          { t: 'poly', pts: [[0, 0], [2.8, 0], [2.8, 3.22]], fill: false },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 8 },
          { t: 'point', p: [2.8, 0], label: 'Q', dx: 10, dy: 8 },
          { t: 'point', p: [2.8, 3.22], label: 'R', dx: 10, dy: -6 },
          { t: 'right', at: [2.8, 0], from: [0, 0], to: [2.8, 3.22] },
          { t: 'angle', at: [2.8, 3.22], from: [2.8, 0], to: [0, 0], r: 0.75, label: '41' },
          { t: 'angle', at: [0, 0], from: [2.8, 0], to: [2.8, 3.22], r: 0.6, label: '?' },
        ],
      },
      choices: ['$41^\\circ$', '$131^\\circ$', '$49^\\circ$', '$139^\\circ$'],
      answer: 2,
      solution:
        'The right angle at $Q$ uses $90^\\circ$, leaving $90^\\circ$ for $\\angle P$ and $\\angle R$ together, so $\\angle P = 90^\\circ - 41^\\circ = 49^\\circ$ ✓. Check a second, independent way by testing every candidate against the full triangle total instead of solving at all — each choice must make $\\angle P + 41^\\circ + 90^\\circ = 180^\\circ$ come out true. Try $41$: $41 + 41 + 90 = 172$ ✗. Try $131$: $131 + 41 + 90 = 262$ ✗. Try $139$: $139 + 41 + 90 = 270$ ✗. Try $49$: $49 + 41 + 90 = 180$ ✓ — exactly one survivor, and it is the one the shortcut named. (The choice $41^\\circ$ is ASSUMING THE TWO ACUTE ANGLES ARE EQUAL ✗; $139^\\circ$ is FORGETTING THE RIGHT ANGLE, subtracting from $180^\\circ$ ✗; $131^\\circ$ is ADDING TO THE RIGHT ANGLE INSTEAD OF SUBTRACTING, computing $90 + 41$ ✗.)',
    },
    {
      q: 'A right triangle $DEF$ has its right angle at $D$, where a vertical leg and a horizontal leg meet. The angle at the top vertex $E$ measures $66^\\circ$. What is the angle at $F$?',
      fig: {
        view: [-0.9, -0.8, 5.4, 2.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.49, 0], [0, 2]], fill: false },
          { t: 'point', p: [0, 0], label: 'D', dx: -12, dy: 10 },
          { t: 'point', p: [4.49, 0], label: 'F', dx: 8, dy: 12 },
          { t: 'point', p: [0, 2], label: 'E', dx: -12, dy: -4 },
          { t: 'right', at: [0, 0], from: [4.49, 0], to: [0, 2] },
          { t: 'angle', at: [0, 2], from: [0, 0], to: [4.49, 0], r: 0.6, label: '66' },
          { t: 'angle', at: [4.49, 0], from: [0, 0], to: [0, 2], r: 0.85, label: '?' },
        ],
      },
      choices: ['$114^\\circ$', '$24^\\circ$', '$156^\\circ$', '$66^\\circ$'],
      answer: 1,
      solution:
        'The right angle at $D$ claims $90^\\circ$, so the two acute angles split the remaining $90^\\circ$: $\\angle F = 90^\\circ - 66^\\circ = 24^\\circ$ ✓. Check a second, independent way with parallel lines instead of the angle sum. Slide the vertical leg $DE$ sideways until it passes through $F$; the slid copy is parallel to the original, so the slanted side $EF$ crosses it at the same $66^\\circ$ by corresponding angles. At $F$ that vertical copy and the horizontal leg $DF$ meet in a square corner worth $90^\\circ$, and $66^\\circ$ of it lies above the slanted side, leaving $90^\\circ - 66^\\circ = 24^\\circ$ below it — and that leftover is exactly $\\angle F$ ✓. (The choice $114^\\circ$ is FORGETTING THE RIGHT ANGLE, subtracting from $180^\\circ$ ✗; $66^\\circ$ is ASSUMING THE TWO ACUTE ANGLES ARE EQUAL ✗; $156^\\circ$ is ADDING TO THE RIGHT ANGLE INSTEAD OF SUBTRACTING, computing $90 + 66$ ✗.)',
    },
  ],
  // s3 — special triangles: two equal angles, or all three equal.
  [
    {
      q: 'Two angles of a triangle are equal to each other, and the third angle is a right angle. How big is each of the two equal angles?',
      choices: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$'],
      answer: 1,
      solution:
        'The right angle takes $90^\\circ$, leaving $180^\\circ - 90^\\circ = 90^\\circ$ for the two equal angles together. Since they match, each one is $\\frac{90^\\circ}{2} = 45^\\circ$ ✓. Check a second, independent way by building the triangle out of a square. Draw a square and cut it along a diagonal. The diagonal is a line of symmetry, so it splits the square’s $90^\\circ$ corner into two matching halves, and each half is $45^\\circ$. The half-square you are left holding has a full $90^\\circ$ corner and two $45^\\circ$ corners ✓ — the very triangle described, with no subtraction used to find it. (The choice $90^\\circ$ is FORGETTING TO SPLIT THE LEFTOVER, handing the whole $90^\\circ$ to one angle ✗; $30^\\circ$ is SPLITTING THE LEFTOVER THREE WAYS, computing $\\frac{90}{3}$ when only two angles share it ✗; $60^\\circ$ is ANSWERING THE EQUIANGULAR CASE, where all three angles are equal ✗.)',
    },
    {
      q: 'A triangle has two angles equal to each other, and its third angle measures $120^\\circ$. What is the size of each of the two equal angles?',
      choices: ['$20^\\circ$', '$45^\\circ$', '$60^\\circ$', '$30^\\circ$'],
      answer: 3,
      solution:
        'The $120^\\circ$ angle leaves $180^\\circ - 120^\\circ = 60^\\circ$ to be shared by the two equal angles, so each is $\\frac{60^\\circ}{2} = 30^\\circ$ ✓. Check a second, independent way by constructing the triangle rather than computing it. Take an equilateral triangle, whose corners are all $60^\\circ$, and mark its center. Join the center to two neighbouring corners. Those two joining segments cut each of those $60^\\circ$ corners exactly in half, giving $30^\\circ$ at each end of the base ✓. The three segments from the center split the full turn of $360^\\circ$ into three equal parts, so the angle at the center is $\\frac{360^\\circ}{3} = 120^\\circ$ ✓ — the triangle described, with base angles of $30^\\circ$. (The choice $60^\\circ$ is FORGETTING TO SPLIT THE LEFTOVER ✗; $20^\\circ$ is SPLITTING THE LEFTOVER THREE WAYS, computing $\\frac{60}{3}$ ✗; $45^\\circ$ is ANSWERING THE RIGHT-ANGLE CASE, where the odd angle is $90^\\circ$ instead of $120^\\circ$ ✗.)',
    },
    {
      q: 'A tile is cut so that all three of its angles are exactly the same size. How big is each angle of the tile?',
      choices: ['$90^\\circ$', '$60^\\circ$', '$45^\\circ$', '$120^\\circ$'],
      answer: 1,
      solution:
        'Three equal angles share $180^\\circ$ evenly, so each is $\\frac{180^\\circ}{3} = 60^\\circ$ ✓. Check a second, independent way by tiling a floor instead of dividing. Lay copies of the tile flat around a single point with no gaps and no overlaps; six of them fit exactly, and the six equal angles meeting there fill one full turn of $360^\\circ$. So each angle is $\\frac{360^\\circ}{6} = 60^\\circ$ ✓ — the same value from a picture that never mentions $180^\\circ$. A triangle with three equal angles is the equilateral triangle. (The choice $90^\\circ$ is DIVIDING 180 BY 2 instead of by the three angles ✗; $120^\\circ$ is USING 360 INSTEAD OF 180 ✗; $45^\\circ$ is ANSWERING THE RIGHT-ANGLE CASE, the base angle of a half-square ✗.)',
    },
  ],
  // s4 — classify the triangle from two given angles.
  [
    {
      q: 'A triangle has angles of $35^\\circ$ and $28^\\circ$. What kind of triangle is it?',
      fig: {
        view: [-0.8, -0.8, 5.0, 2.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.2, 0], [1.81, 1.27]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4.2, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [1.81, 1.27], label: 'C', dx: 0, dy: -12 },
          { t: 'angle', at: [0, 0], from: [4.2, 0], to: [1.81, 1.27], r: 0.75, label: '35' },
          { t: 'angle', at: [4.2, 0], from: [0, 0], to: [1.81, 1.27], r: 0.9, label: '28' },
          { t: 'angle', at: [1.81, 1.27], from: [4.2, 0], to: [0, 0], r: 0.35, label: '?' },
        ],
      },
      choices: ['Acute', 'Right', 'Obtuse', 'Equiangular'],
      answer: 2,
      solution:
        'Find the missing angle first: $180^\\circ - 35^\\circ - 28^\\circ = 117^\\circ$. That is more than $90^\\circ$, so the triangle is obtuse ✓. Check a second, independent way without computing the third angle at all. The third angle is whatever is left after the given pair, so compare that pair with $90^\\circ$: here $35^\\circ + 28^\\circ = 63^\\circ$, which is $27^\\circ$ short of $90^\\circ$. When the two given angles fall short of $90^\\circ$, the leftover must overshoot $90^\\circ$ by that same $27^\\circ$ — so the third angle is obtuse ✓, and the triangle is obtuse. (A triangle gets only one angle over $90^\\circ$, and this one has it.) (The choice Acute is JUDGING BY THE GIVEN ANGLES ONLY, since both printed angles are small ✗; Right is ASSUMING A RIGHT ANGLE WITHOUT CHECKING THE SUM, which would need the given pair to make exactly $90^\\circ$ ✗; Equiangular is CONFUSING EQUAL ANGLES WITH ANGLE SIZE — $35^\\circ$ and $28^\\circ$ are not even equal to each other ✗.)',
    },
    {
      q: 'Two angles of a triangle measure $58^\\circ$ and $64^\\circ$. How would you classify this triangle?',
      fig: {
        view: [-0.8, -0.8, 4.8, 4.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2.25, 3.6]], fill: false },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'Q', dx: 10, dy: 8 },
          { t: 'point', p: [2.25, 3.6], label: 'R', dx: 4, dy: -10 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [2.25, 3.6], r: 0.7, label: '58' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [2.25, 3.6], r: 0.6, label: '64' },
          { t: 'angle', at: [2.25, 3.6], from: [4, 0], to: [0, 0], r: 0.75, label: '?' },
        ],
      },
      choices: ['Right', 'Acute', 'Obtuse', 'Equiangular'],
      answer: 1,
      solution:
        'The third angle is $180^\\circ - 58^\\circ - 64^\\circ = 58^\\circ$. Now look at all three: $58^\\circ$, $64^\\circ$, $58^\\circ$ — every one is under $90^\\circ$, so the triangle is acute ✓. Check a second, independent way by comparing the given pair with $90^\\circ$ instead of finishing the subtraction. Here $58^\\circ + 64^\\circ = 122^\\circ$, which is $32^\\circ$ MORE than $90^\\circ$, so the leftover angle falls $32^\\circ$ short of $90^\\circ$ — it is acute ✓. The two given angles are visibly under $90^\\circ$ as well, so no angle in the triangle reaches a right angle, and acute is the only label that fits. (The choice Right is ASSUMING A RIGHT ANGLE WITHOUT CHECKING THE SUM ✗; Obtuse is SUBTRACTING ONLY ONE GIVEN ANGLE, reading the third as $180 - 58 = 122^\\circ$ ✗; Equiangular is CONFUSING EQUAL ANGLES WITH ANGLE SIZE — two angles here do match at $58^\\circ$, but the third is $64^\\circ$, so all three are not equal ✗.)',
    },
    {
      q: 'A triangle has angles of $38^\\circ$ and $52^\\circ$. What kind of triangle is it?',
      fig: {
        view: [-0.8, -0.8, 5.0, 2.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.2, 0], [2.61, 2.04]], fill: false },
          { t: 'point', p: [0, 0], label: 'X', dx: -10, dy: 8 },
          { t: 'point', p: [4.2, 0], label: 'Y', dx: 10, dy: 8 },
          { t: 'point', p: [2.61, 2.04], label: 'Z', dx: 8, dy: -8 },
          { t: 'angle', at: [0, 0], from: [4.2, 0], to: [2.61, 2.04], r: 0.85, label: '38' },
          { t: 'angle', at: [4.2, 0], from: [0, 0], to: [2.61, 2.04], r: 0.65, label: '52' },
          { t: 'angle', at: [2.61, 2.04], from: [4.2, 0], to: [0, 0], r: 0.45, label: '?' },
        ],
      },
      choices: ['Obtuse', 'Equiangular', 'Right', 'Acute'],
      answer: 2,
      solution:
        'The third angle is $180^\\circ - 38^\\circ - 52^\\circ = 90^\\circ$ — exactly a right angle — so the triangle is a right triangle ✓. Check a second, independent way by looking only at the given pair. Two angles of a triangle leave a right angle behind precisely when they themselves add to $90^\\circ$, because the leftover is $180^\\circ$ minus their total. Here $38^\\circ + 52^\\circ = 90^\\circ$ ✓, so the leftover is $90^\\circ$ too — the given angles are complementary, which is the fingerprint of a right triangle. (The choice Acute is JUDGING BY THE GIVEN ANGLES ONLY, both of which are under $90^\\circ$ ✗; Obtuse is SUBTRACTING ONLY ONE GIVEN ANGLE, reading the third as $180 - 38 = 142^\\circ$ ✗; Equiangular is CONFUSING EQUAL ANGLES WITH ANGLE SIZE ✗.)',
    },
  ],
  // s5 — angles written as simple multiples of x; report the largest.
  //      Lanes: x/3x/5x -> 100, x/2x/2x -> 72, x/2x/7x -> 126. The last lane
  //      deliberately avoids 2x/3x/4x: the section's learn block already works
  //      the ratio 2:3:4 out in full, so that lane would have asked the student
  //      to recall 40-60-80 rather than to derive anything.
  [
    {
      q: 'The angles of a triangle measure $x$, $3x$, and $5x$. What is the largest angle?',
      fig: {
        view: [-0.8, -0.8, 5.0, 2.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.2, 0], [3.47, 1.26]], fill: false },
          { t: 'angle', at: [0, 0], from: [4.2, 0], to: [3.47, 1.26], r: 0.95, label: 'x' },
          { t: 'angle', at: [4.2, 0], from: [0, 0], to: [3.47, 1.26], r: 0.6, label: '3x' },
          { t: 'angle', at: [3.47, 1.26], from: [4.2, 0], to: [0, 0], r: 0.4, label: '5x' },
        ],
      },
      choices: ['$20^\\circ$', '$36^\\circ$', '$60^\\circ$', '$100^\\circ$'],
      answer: 3,
      solution:
        'Add the three expressions: $x + 3x + 5x = 9x$, and that total must be $180^\\circ$, so $x = \\frac{180^\\circ}{9} = 20^\\circ$. The largest angle is $5x = 5(20^\\circ) = 100^\\circ$ ✓. Check a second, independent way by testing the candidates backward, never solving an equation. If the largest angle were $60^\\circ$, then $5x = 60$ would force $x = 12$, and the three angles would be $12 + 36 + 60 = 108$ ✗. If it were $36^\\circ$, then $x = 7.2$ and the total is $7.2 + 21.6 + 36 = 64.8$ ✗. If it were $20^\\circ$, then $x = 4$ and the total is $4 + 12 + 20 = 36$ ✗. If it is $100^\\circ$, then $x = 20$ and the total is $20 + 60 + 100 = 180$ ✓ — one survivor. Notice this triangle is obtuse. (The choice $20^\\circ$ is ANSWERING x ITSELF instead of the angle it builds ✗; $60^\\circ$ is STOPPING AT THE MIDDLE ANGLE, $3x$ ✗; $36^\\circ$ is DIVIDING BY THE LARGEST COEFFICIENT, computing $\\frac{180}{5}$ ✗.)',
    },
    {
      q: 'The angles of a triangle measure $x$, $2x$, and $2x$. What is the measure of the largest angle in the triangle?',
      fig: {
        view: [-0.8, -0.8, 4.4, 3.0],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.6, 0], [2.91, 2.12]], fill: false },
          { t: 'angle', at: [0, 0], from: [3.6, 0], to: [2.91, 2.12], r: 0.85, label: 'x' },
          { t: 'angle', at: [3.6, 0], from: [0, 0], to: [2.91, 2.12], r: 0.6, label: '2x' },
          { t: 'angle', at: [2.91, 2.12], from: [3.6, 0], to: [0, 0], r: 0.5, label: '2x' },
        ],
      },
      choices: ['$90^\\circ$', '$72^\\circ$', '$36^\\circ$', '$60^\\circ$'],
      answer: 1,
      solution:
        'Add them: $x + 2x + 2x = 5x = 180^\\circ$, so $x = \\frac{180^\\circ}{5} = 36^\\circ$. The angles are $36^\\circ$, $72^\\circ$, and $72^\\circ$; two of them tie for the top, and the largest measure is $72^\\circ$ ✓. Check a second, independent way by testing the candidates backward. If the largest were $90^\\circ$, then $2x = 90$ gives $x = 45$ and the total is $45 + 90 + 90 = 225$ ✗. If it were $60^\\circ$, then $x = 30$ and the total is $30 + 60 + 60 = 150$ ✗. If it were $36^\\circ$, then $x = 18$ and the total is $18 + 36 + 36 = 90$ ✗. If it is $72^\\circ$, then $x = 36$ and the total is $36 + 72 + 72 = 180$ ✓. Two equal angles means this is an isosceles triangle. (The choice $36^\\circ$ is ANSWERING x ITSELF ✗; $90^\\circ$ is MIS-ADDING THE COEFFICIENTS, reading $x + 2x + 2x$ as $4x$, which gives $x = 45$ and $2x = 90$ ✗; $60^\\circ$ is DIVIDING 180 BY 3 AS IF THE ANGLES WERE EQUAL ✗.)',
    },
    {
      q: 'The three angles of a triangle are $x$, $2x$, and $7x$. What is the largest angle?',
      fig: {
        view: [-0.8, -0.8, 4.6, 2.0],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.8, 0], [2.626, 0.853]], fill: false },
          { t: 'angle', at: [0, 0], from: [3.8, 0], to: [2.626, 0.853], r: 0.9, label: 'x' },
          { t: 'angle', at: [3.8, 0], from: [0, 0], to: [2.626, 0.853], r: 0.7, label: '2x' },
          { t: 'angle', at: [2.626, 0.853], from: [3.8, 0], to: [0, 0], r: 0.45, label: '7x' },
        ],
      },
      choices: ['$18^\\circ$', '$36^\\circ$', '$126^\\circ$', '$105^\\circ$'],
      answer: 2,
      solution:
        'The three expressions add to $x + 2x + 7x = 10x = 180^\\circ$, so $x = 18^\\circ$ and the largest angle is $7x = 7(18^\\circ) = 126^\\circ$ ✓. Check a second, independent way by testing candidates backward. If the largest were $105^\\circ$, then $7x = 105$ gives $x = 15$ and the total is $15 + 30 + 105 = 150$ ✗. If it were $36^\\circ$, then $x = \\frac{36}{7}$, which is not even a whole number of degrees, and the total is $36 \\times \\frac{10}{7} \\approx 51.4$ ✗. If it were $18^\\circ$, then $x = \\frac{18}{7}$ and the total is about $25.7$ ✗. If it is $126^\\circ$, then $x = 18$ and the total is $18 + 36 + 126 = 180$ ✓ — one survivor. With $7x$ carrying seven of the ten shares, this triangle is badly lopsided: the drawing is a long flat wedge, and $126^\\circ$ is obtuse. (The choice $18^\\circ$ is ANSWERING x ITSELF instead of the angle it builds ✗; $36^\\circ$ is STOPPING AT THE MIDDLE ANGLE, $2x$ ✗; $105^\\circ$ is MIS-ADDING THE COEFFICIENTS to $12$ instead of $10$, which gives $x = 15$ and $7x = 105$ ✗.)',
    },
  ],
  // s6 — angles written as linear expressions; report the largest.
  [
    {
      q: 'The angles of a triangle measure $x + 10^\\circ$, $2x - 15^\\circ$, and $3x + 5^\\circ$. What is the largest angle?',
      fig: {
        view: [-0.8, -0.8, 5.2, 2.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.4, 0], [2.39, 2.01]], fill: false },
          { t: 'angle', at: [0, 0], from: [4.4, 0], to: [2.39, 2.01], r: 0.8, label: 'x+10' },
          { t: 'angle', at: [4.4, 0], from: [0, 0], to: [2.39, 2.01], r: 0.85, label: '2x-15' },
          { t: 'angle', at: [2.39, 2.01], from: [4.4, 0], to: [0, 0], r: 0.42, label: '3x+5' },
        ],
      },
      choices: ['$30^\\circ$', '$95^\\circ$', '$45^\\circ$', '$90^\\circ$'],
      answer: 1,
      solution:
        'Add the three expressions and set the total to $180^\\circ$: $(x + 10) + (2x - 15) + (3x + 5) = 6x + 0 = 180$, so $x = 30^\\circ$. The three angles are $30 + 10 = 40^\\circ$, $60 - 15 = 45^\\circ$, and $90 + 5 = 95^\\circ$, and the largest is $95^\\circ$ ✓. Check a second, independent way by starting from the answer instead of from the equation. If the largest angle is $95^\\circ$, then $3x + 5 = 95$ gives $x = 30$; feed that back into the other two expressions and they read $40^\\circ$ and $45^\\circ$. Add all three: $40 + 45 + 95 = 180$ ✓. Try the same on $90^\\circ$: $3x + 5 = 90$ gives $x = 28\\frac{1}{3}$, and the total comes out $180$ only when the constants cancel, which they do not here — the three angles would be $38\\frac{1}{3}$, $41\\frac{2}{3}$, and $90$, adding to $170$ ✗. (The choice $30^\\circ$ is ANSWERING x ITSELF ✗; $45^\\circ$ is STOPPING AT THE MIDDLE ANGLE ✗; $90^\\circ$ is DROPPING THE CONSTANT, reporting $3x$ and forgetting the $+5$ ✗.)',
    },
    {
      q: 'The angles of a triangle measure $x + 7^\\circ$, $2x - 15^\\circ$, and $4x + 13^\\circ$. What is the largest angle?',
      fig: {
        view: [-0.9, -0.8, 5.9, 2.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [2.64, 1.65]], fill: false },
          { t: 'angle', at: [0, 0], from: [5, 0], to: [2.64, 1.65], r: 0.9, label: 'x+7' },
          { t: 'angle', at: [5, 0], from: [0, 0], to: [2.64, 1.65], r: 0.95, label: '2x-15' },
          { t: 'angle', at: [2.64, 1.65], from: [5, 0], to: [0, 0], r: 0.38, label: '4x+13' },
        ],
      },
      choices: ['$25^\\circ$', '$35^\\circ$', '$100^\\circ$', '$113^\\circ$'],
      answer: 3,
      solution:
        'Collect the terms: $(x + 7) + (2x - 15) + (4x + 13) = 7x + 5$, and this equals $180^\\circ$, so $7x = 175$ and $x = 25^\\circ$. The angles are $25 + 7 = 32^\\circ$, $50 - 15 = 35^\\circ$, and $100 + 13 = 113^\\circ$; the largest is $113^\\circ$ ✓. Check a second, independent way by working backward from each candidate. Suppose the largest is $100^\\circ$: then $4x + 13 = 100$ gives $x = 21.75$, and the other two angles read $28.75^\\circ$ and $28.5^\\circ$, for a total of $157.25$ ✗. Suppose it is $113^\\circ$: then $x = 25$, the others read $32^\\circ$ and $35^\\circ$, and $32 + 35 + 113 = 180$ ✓. One candidate closes the triangle and the rest do not. Over $90^\\circ$, so this is an obtuse triangle. (The choice $25^\\circ$ is ANSWERING x ITSELF ✗; $35^\\circ$ is STOPPING AT THE MIDDLE ANGLE ✗; $100^\\circ$ is DROPPING THE CONSTANT, reporting $4x$ and forgetting the $+13$ ✗.)',
    },
    {
      q: 'The angles of a triangle measure $x + 20^\\circ$, $3x - 6^\\circ$, and $4x + 6^\\circ$. What is the largest angle?',
      fig: {
        view: [-0.8, -0.8, 5.0, 3.1],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.2, 0], [2.61, 2.19]], fill: false },
          { t: 'angle', at: [0, 0], from: [4.2, 0], to: [2.61, 2.19], r: 0.8, label: 'x+20' },
          { t: 'angle', at: [4.2, 0], from: [0, 0], to: [2.61, 2.19], r: 0.7, label: '3x-6' },
          { t: 'angle', at: [2.61, 2.19], from: [4.2, 0], to: [0, 0], r: 0.45, label: '4x+6' },
        ],
      },
      choices: ['$86^\\circ$', '$20^\\circ$', '$54^\\circ$', '$80^\\circ$'],
      answer: 0,
      solution:
        'Add the expressions: $(x + 20) + (3x - 6) + (4x + 6) = 8x + 20 = 180$, so $8x = 160$ and $x = 20^\\circ$. The angles are $20 + 20 = 40^\\circ$, $60 - 6 = 54^\\circ$, and $80 + 6 = 86^\\circ$; the largest is $86^\\circ$ ✓. Check a second, independent way by testing the candidates. If the largest were $80^\\circ$, then $4x + 6 = 80$ gives $x = 18.5$, and the three angles would read $38.5^\\circ$, $49.5^\\circ$, and $80^\\circ$, totalling $168$ ✗. If it is $86^\\circ$, then $x = 20$, the angles read $40^\\circ$, $54^\\circ$, $86^\\circ$, and $40 + 54 + 86 = 180$ ✓. Every angle stays under $90^\\circ$, so the triangle is acute. (The choice $20^\\circ$ is ANSWERING x ITSELF ✗; $54^\\circ$ is STOPPING AT THE MIDDLE ANGLE ✗; $80^\\circ$ is DROPPING THE CONSTANT, reporting $4x$ and forgetting the $+6$ ✗.)',
    },
  ],
  // s7 — angles in a given ratio; report the largest.
  [
    {
      q: 'The angles of a triangle are in the ratio $3:4:8$. What is the largest angle?',
      choices: ['$12^\\circ$', '$48^\\circ$', '$96^\\circ$', '$60^\\circ$'],
      answer: 2,
      solution:
        'Write the angles as $3x$, $4x$, and $8x$. Then $3x + 4x + 8x = 15x = 180^\\circ$, so $x = 12^\\circ$ and the largest angle is $8x = 96^\\circ$ ✓. Check a second, independent way by testing whether a candidate can really be the largest share. Any correct answer must be $\\frac{8}{15}$ of the whole $180^\\circ$, so scale the candidate back down and see whether the three parts rebuild the ratio. Take $96$: the three angles would be $36$, $48$, $96$, and dividing each by $12$ gives $3 : 4 : 8$ ✓ with $36 + 48 + 96 = 180$ ✓. Take $60$: the parts would be $22.5$, $30$, $60$, which sum to $112.5$ ✗. Only $96^\\circ$ passes both the ratio test and the sum test. This angle passes $90^\\circ$, so the triangle is obtuse. (The choice $12^\\circ$ is ANSWERING x ITSELF, the size of one ratio part ✗; $48^\\circ$ is STOPPING AT THE MIDDLE ANGLE, $4x$ ✗; $60^\\circ$ is DIVIDING 180 BY 3 AS IF THE ANGLES WERE EQUAL, ignoring the ratio ✗.)',
    },
    {
      q: 'The three angles of a triangle are in the ratio $1:3:5$. How large is the biggest angle?',
      choices: ['$100^\\circ$', '$20^\\circ$', '$36^\\circ$', '$60^\\circ$'],
      answer: 0,
      solution:
        'Call the angles $x$, $3x$, and $5x$. Their total is $9x = 180^\\circ$, so $x = 20^\\circ$ and the biggest angle is $5x = 100^\\circ$ ✓. Check a second, independent way by thinking in parts rather than in $x$. The ratio splits the triangle into $1 + 3 + 5 = 9$ equal parts of angle. One part is worth $\\frac{180^\\circ}{9} = 20^\\circ$, and the biggest angle owns $5$ of those parts, so it is worth $5 \\times 20^\\circ = 100^\\circ$ ✓. As a final guard, rebuild the ratio from the answer: $20 : 60 : 100$ divides through by $20$ to give $1 : 3 : 5$ ✓, and $20 + 60 + 100 = 180$ ✓. (The choice $20^\\circ$ is ANSWERING x ITSELF, which here is also the smallest angle ✗; $60^\\circ$ is STOPPING AT THE MIDDLE ANGLE, $3x$ ✗; $36^\\circ$ is DIVIDING BY THE LARGEST COEFFICIENT, computing $\\frac{180}{5}$ instead of $\\frac{180}{9}$ ✗.)',
    },
    {
      q: 'A triangular garden bed has its three corner angles in the ratio $2:3:7$. What is the largest of the three angles?',
      choices: ['$15^\\circ$', '$45^\\circ$', '$60^\\circ$', '$105^\\circ$'],
      answer: 3,
      solution:
        'Write the angles as $2x$, $3x$, and $7x$. Then $2x + 3x + 7x = 12x = 180^\\circ$, so $x = 15^\\circ$ and the largest angle is $7x = 105^\\circ$ ✓. Check a second, independent way by counting parts. The ratio cuts the $180^\\circ$ into $2 + 3 + 7 = 12$ equal parts, each worth $\\frac{180^\\circ}{12} = 15^\\circ$; the biggest corner takes $7$ parts, so it measures $7 \\times 15^\\circ = 105^\\circ$ ✓. Rebuild the ratio as a guard: the angles are $30^\\circ$, $45^\\circ$, and $105^\\circ$, which divide by $15$ to give $2 : 3 : 7$ ✓, and $30 + 45 + 105 = 180$ ✓. Past $90^\\circ$, so the bed is an obtuse triangle. (The choice $15^\\circ$ is ANSWERING x ITSELF, the size of one part ✗; $45^\\circ$ is STOPPING AT THE MIDDLE ANGLE, $3x$ ✗; $60^\\circ$ is DIVIDING 180 BY 3 AS IF THE ANGLES WERE EQUAL ✗.)',
    },
  ],
  // s8 — isosceles triangle: base angle from the vertex angle.
  [
    {
      q: 'In the isosceles triangle shown, the two marked sides are equal and the vertex angle at $T$ measures $38^\\circ$. What is each base angle?',
      fig: {
        view: [-0.8, -0.8, 3.4, 4.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [2.6, 0], [1.3, 3.78]], fill: false },
          { t: 'point', p: [0, 0], label: 'R', dx: -10, dy: 8 },
          { t: 'point', p: [2.6, 0], label: 'S', dx: 10, dy: 8 },
          { t: 'point', p: [1.3, 3.78], label: 'T', dx: 0, dy: -10 },
          { t: 'tick', a: [0, 0], b: [1.3, 3.78], n: 1 },
          { t: 'tick', a: [2.6, 0], b: [1.3, 3.78], n: 1 },
          { t: 'angle', at: [1.3, 3.78], from: [2.6, 0], to: [0, 0], r: 0.75, label: '38' },
          { t: 'angle', at: [0, 0], from: [2.6, 0], to: [1.3, 3.78], r: 0.55, label: '?' },
        ],
      },
      choices: ['$142^\\circ$', '$38^\\circ$', '$71^\\circ$', '$60^\\circ$'],
      answer: 2,
      solution:
        'Equal sides face equal angles, so the two base angles at $R$ and $S$ match. Together they get $180^\\circ - 38^\\circ = 142^\\circ$, so each is $\\frac{142^\\circ}{2} = 71^\\circ$ ✓. Check a second, independent way by folding the triangle down the middle. The crease runs from $T$ straight down to the midpoint of $RS$ and meets the base squarely, and it cuts the vertex angle exactly in half into two pieces of $\\frac{38^\\circ}{2} = 19^\\circ$. Each half of the fold is a right triangle holding $90^\\circ$ and $19^\\circ$, so its remaining angle — a base angle — is $90^\\circ - 19^\\circ = 71^\\circ$ ✓. No $180^\\circ$ subtraction was needed. (The choice $142^\\circ$ is FORGETTING TO SPLIT THE LEFTOVER, which is the two base angles combined ✗; $38^\\circ$ is COPYING THE VERTEX ANGLE ✗; $60^\\circ$ is ASSUMING THE TRIANGLE IS EQUILATERAL, which would need a $60^\\circ$ vertex angle ✗.)',
    },
    {
      q: 'An isosceles triangle $JKL$ has $JL = KL$, and the vertex angle at $L$ measures $96^\\circ$. What is each base angle?',
      fig: {
        view: [-0.8, -0.8, 4.8, 2.7],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2, 1.8]], fill: false },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'K', dx: 10, dy: 8 },
          { t: 'point', p: [2, 1.8], label: 'L', dx: 0, dy: -10 },
          { t: 'tick', a: [0, 0], b: [2, 1.8], n: 1 },
          { t: 'tick', a: [4, 0], b: [2, 1.8], n: 1 },
          { t: 'angle', at: [2, 1.8], from: [4, 0], to: [0, 0], r: 0.5, label: '96' },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [2, 1.8], r: 0.8, label: '?' },
        ],
      },
      choices: ['$84^\\circ$', '$42^\\circ$', '$96^\\circ$', '$48^\\circ$'],
      answer: 1,
      solution:
        'Because $JL = KL$, the base angles at $J$ and $K$ are equal. They share $180^\\circ - 96^\\circ = 84^\\circ$, so each is $\\frac{84^\\circ}{2} = 42^\\circ$ ✓. Check a second, independent way by folding along the line of symmetry from $L$ to the midpoint of $JK$. The crease meets the base at a square corner and halves the vertex angle into two pieces of $\\frac{96^\\circ}{2} = 48^\\circ$. Each half is a right triangle with angles $90^\\circ$, $48^\\circ$, and the base angle, so the base angle is $90^\\circ - 48^\\circ = 42^\\circ$ ✓. Both routes agree, and $42 + 42 + 96 = 180$ ✓. (The choice $84^\\circ$ is FORGETTING TO SPLIT THE LEFTOVER ✗; $96^\\circ$ is COPYING THE VERTEX ANGLE ✗; $48^\\circ$ is HALVING THE VERTEX ANGLE instead of halving what is left over ✗.)',
    },
    {
      q: 'A pennant is cut as an isosceles triangle $UVW$ with $UW = VW$. Its vertex angle at $W$ measures $54^\\circ$. What is each base angle?',
      fig: {
        view: [-0.8, -0.8, 4.2, 4.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.4, 0], [1.7, 3.34]], fill: false },
          { t: 'point', p: [0, 0], label: 'U', dx: -10, dy: 8 },
          { t: 'point', p: [3.4, 0], label: 'V', dx: 10, dy: 8 },
          { t: 'point', p: [1.7, 3.34], label: 'W', dx: 0, dy: -10 },
          { t: 'tick', a: [0, 0], b: [1.7, 3.34], n: 1 },
          { t: 'tick', a: [3.4, 0], b: [1.7, 3.34], n: 1 },
          { t: 'angle', at: [1.7, 3.34], from: [3.4, 0], to: [0, 0], r: 0.7, label: '54' },
          { t: 'angle', at: [0, 0], from: [3.4, 0], to: [1.7, 3.34], r: 0.6, label: '?' },
        ],
      },
      choices: ['$27^\\circ$', '$126^\\circ$', '$54^\\circ$', '$63^\\circ$'],
      answer: 3,
      solution:
        'The equal sides $UW$ and $VW$ force the base angles at $U$ and $V$ to be equal. Those two share $180^\\circ - 54^\\circ = 126^\\circ$, so each is $\\frac{126^\\circ}{2} = 63^\\circ$ ✓. Check a second, independent way by folding the pennant in half from $W$ to the midpoint of $UV$. The crease lands squarely on the base and splits the vertex angle into two halves of $\\frac{54^\\circ}{2} = 27^\\circ$. Each folded half is a right triangle containing $90^\\circ$ and $27^\\circ$, so its base angle is $90^\\circ - 27^\\circ = 63^\\circ$ ✓. Check the total as a guard: $63 + 63 + 54 = 180$ ✓, and every angle is under $90^\\circ$, so the pennant is acute. (The choice $126^\\circ$ is FORGETTING TO SPLIT THE LEFTOVER ✗; $54^\\circ$ is COPYING THE VERTEX ANGLE ✗; $27^\\circ$ is HALVING THE VERTEX ANGLE instead of the leftover ✗.)',
    },
  ],
  // s9 — an angle bisector meets the opposite side; find the angle there.
  [
    {
      q: 'In triangle $ABC$, $\\angle A = 42^\\circ$ and $\\angle B = 80^\\circ$. The bisector of $\\angle C$ meets side $AB$ at $D$. What is $\\angle ADC$?',
      fig: {
        view: [-0.8, -0.8, 5.3, 4.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.5, 0], [3.88, 3.5]], fill: false },
          { t: 'seg', a: [3.88, 3.5], b: [2.68, 0], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4.5, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [3.88, 3.5], label: 'C', dx: 8, dy: -6 },
          { t: 'point', p: [2.68, 0], label: 'D', dx: -2, dy: 16 },
          { t: 'angle', at: [0, 0], from: [4.5, 0], to: [3.88, 3.5], r: 0.85, label: '42' },
          { t: 'angle', at: [4.5, 0], from: [0, 0], to: [3.88, 3.5], r: 0.6, label: '80' },
          { t: 'angle', at: [3.88, 3.5], from: [0, 0], to: [2.68, 0], r: 0.75 },
          { t: 'angle', at: [3.88, 3.5], from: [2.68, 0], to: [4.5, 0], r: 0.95 },
          { t: 'angle', at: [2.68, 0], from: [0, 0], to: [3.88, 3.5], r: 0.5, label: '?' },
        ],
      },
      choices: ['$29^\\circ$', '$109^\\circ$', '$71^\\circ$', '$80^\\circ$'],
      answer: 1,
      solution:
        'Find $\\angle C$ first: $180^\\circ - 42^\\circ - 80^\\circ = 58^\\circ$. The bisector cuts it into two halves of $\\frac{58^\\circ}{2} = 29^\\circ$, so inside triangle $ACD$ we know two angles, $42^\\circ$ at $A$ and $29^\\circ$ at $C$. That gives $\\angle ADC = 180^\\circ - 42^\\circ - 29^\\circ = 109^\\circ$ ✓. Check a second, independent way through the OTHER small triangle. In triangle $BCD$ the angles are $80^\\circ$ at $B$ and $29^\\circ$ at $C$, so $\\angle BDC = 180^\\circ - 80^\\circ - 29^\\circ = 71^\\circ$. Points $A$, $D$, and $B$ lie on one straight line, so $\\angle ADC$ and $\\angle BDC$ must add to a straight angle: $\\angle ADC = 180^\\circ - 71^\\circ = 109^\\circ$ ✓. The two sub-triangles agree. (The choice $71^\\circ$ is ANSWERING THE ANGLE ON THE OTHER SIDE of $D$ ✗; $80^\\circ$ is FORGETTING TO BISECT and using the whole $58^\\circ$, which lands right back on $\\angle B$ ✗; $29^\\circ$ is ANSWERING THE HALF-ANGLE ITSELF ✗.)',
    },
    {
      q: 'In triangle $PQR$, $\\angle P = 34^\\circ$ and $\\angle Q = 96^\\circ$. The bisector of $\\angle R$ meets side $PQ$ at $S$. What is $\\angle PSR$?',
      fig: {
        view: [-0.8, -0.8, 5.9, 4.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.6, 0], [4.95, 3.34]], fill: false },
          { t: 'seg', a: [4.95, 3.34], b: [2.94, 0], dash: true },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 8 },
          { t: 'point', p: [4.6, 0], label: 'Q', dx: -2, dy: 16 },
          { t: 'point', p: [4.95, 3.34], label: 'R', dx: 8, dy: -6 },
          { t: 'point', p: [2.94, 0], label: 'S', dx: -2, dy: 16 },
          { t: 'angle', at: [0, 0], from: [4.6, 0], to: [4.95, 3.34], r: 0.9, label: '34' },
          { t: 'angle', at: [4.6, 0], from: [0, 0], to: [4.95, 3.34], r: 0.55, label: '96' },
          { t: 'angle', at: [4.95, 3.34], from: [0, 0], to: [2.94, 0], r: 0.8 },
          { t: 'angle', at: [4.95, 3.34], from: [2.94, 0], to: [4.6, 0], r: 1.0 },
          { t: 'angle', at: [2.94, 0], from: [0, 0], to: [4.95, 3.34], r: 0.5, label: '?' },
        ],
      },
      choices: ['$96^\\circ$', '$25^\\circ$', '$59^\\circ$', '$121^\\circ$'],
      answer: 3,
      solution:
        'First get $\\angle R = 180^\\circ - 34^\\circ - 96^\\circ = 50^\\circ$. The bisector halves it into $\\frac{50^\\circ}{2} = 25^\\circ$ on each side. Triangle $PSR$ now has $34^\\circ$ at $P$ and $25^\\circ$ at $R$, so $\\angle PSR = 180^\\circ - 34^\\circ - 25^\\circ = 121^\\circ$ ✓. Check a second, independent way inside triangle $QSR$: its angles are $96^\\circ$ at $Q$ and $25^\\circ$ at $R$, giving $\\angle QSR = 180^\\circ - 96^\\circ - 25^\\circ = 59^\\circ$. Since $P$, $S$, and $Q$ sit on one straight line, the two angles at $S$ must fill a straight angle, so $\\angle PSR = 180^\\circ - 59^\\circ = 121^\\circ$ ✓. Both sub-triangles tell the same story. (The choice $59^\\circ$ is ANSWERING THE ANGLE ON THE OTHER SIDE of $S$ ✗; $96^\\circ$ is FORGETTING TO BISECT and using the whole $50^\\circ$, which lands back on $\\angle Q$ ✗; $25^\\circ$ is ANSWERING THE HALF-ANGLE ITSELF ✗.)',
    },
    {
      q: 'In triangle $JKL$, $\\angle J = 60^\\circ$ and $\\angle K = 36^\\circ$. The bisector of $\\angle L$ meets side $JK$ at $M$. What is $\\angle JML$?',
      fig: {
        view: [-0.8, -0.8, 5.4, 3.1],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.6, 0], [1.36, 2.35]], fill: false },
          { t: 'seg', a: [1.36, 2.35], b: [1.86, 0], dash: true },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 8 },
          { t: 'point', p: [4.6, 0], label: 'K', dx: 10, dy: 8 },
          { t: 'point', p: [1.36, 2.35], label: 'L', dx: -2, dy: -10 },
          { t: 'point', p: [1.86, 0], label: 'M', dx: 4, dy: 16 },
          { t: 'angle', at: [0, 0], from: [4.6, 0], to: [1.36, 2.35], r: 0.6, label: '60' },
          { t: 'angle', at: [4.6, 0], from: [0, 0], to: [1.36, 2.35], r: 0.85, label: '36' },
          { t: 'angle', at: [1.36, 2.35], from: [0, 0], to: [1.86, 0], r: 0.45 },
          { t: 'angle', at: [1.36, 2.35], from: [1.86, 0], to: [4.6, 0], r: 0.62 },
          { t: 'angle', at: [1.86, 0], from: [0, 0], to: [1.36, 2.35], r: 0.42, label: '?' },
        ],
      },
      choices: ['$78^\\circ$', '$36^\\circ$', '$42^\\circ$', '$102^\\circ$'],
      answer: 0,
      solution:
        'Start with $\\angle L = 180^\\circ - 60^\\circ - 36^\\circ = 84^\\circ$. The bisector splits it into two pieces of $\\frac{84^\\circ}{2} = 42^\\circ$. Triangle $JML$ holds $60^\\circ$ at $J$ and $42^\\circ$ at $L$, so $\\angle JML = 180^\\circ - 60^\\circ - 42^\\circ = 78^\\circ$ ✓. Check a second, independent way with triangle $KML$: its angles are $36^\\circ$ at $K$ and $42^\\circ$ at $L$, so $\\angle KML = 180^\\circ - 36^\\circ - 42^\\circ = 102^\\circ$. The points $J$, $M$, $K$ lie in a straight line, so the two angles at $M$ complete a straight angle: $\\angle JML = 180^\\circ - 102^\\circ = 78^\\circ$ ✓. Notice this one is the acute angle at $M$, because $\\angle J$ is the larger of the two base angles. (The choice $102^\\circ$ is ANSWERING THE ANGLE ON THE OTHER SIDE of $M$ ✗; $36^\\circ$ is FORGETTING TO BISECT and using the whole $84^\\circ$, which lands back on $\\angle K$ ✗; $42^\\circ$ is ANSWERING THE HALF-ANGLE ITSELF ✗.)',
    },
  ],
  // s10 — right triangle whose acute angles differ by a fixed amount.
  [
    {
      q: 'In a right triangle, one acute angle is $32^\\circ$ larger than the other. What is the larger acute angle?',
      choices: ['$29^\\circ$', '$58^\\circ$', '$61^\\circ$', '$106^\\circ$'],
      answer: 2,
      solution:
        'The right angle uses $90^\\circ$, so the two acute angles share the other $90^\\circ$. Let the smaller be $x$; then $x + (x + 32^\\circ) = 90^\\circ$, so $2x = 58^\\circ$ and $x = 29^\\circ$. The larger is $29^\\circ + 32^\\circ = 61^\\circ$ ✓. Check a second, independent way by balancing around the middle. Two numbers adding to $90$ average $45$, so the two acute angles sit the same distance on either side of $45^\\circ$. They differ by $32^\\circ$, so each sits $\\frac{32^\\circ}{2} = 16^\\circ$ from the middle: the larger is $45^\\circ + 16^\\circ = 61^\\circ$ and the smaller is $45^\\circ - 16^\\circ = 29^\\circ$ ✓. Guard: $61 - 29 = 32$ ✓ and $61 + 29 + 90 = 180$ ✓. (The choice $29^\\circ$ is ANSWERING THE SMALLER ACUTE ANGLE ✗; $58^\\circ$ is SUBTRACTING THE DIFFERENCE FROM 90 in one step ✗; $106^\\circ$ is USING 180 INSTEAD OF 90, from $\\frac{180 + 32}{2}$, and an acute angle can never exceed $90^\\circ$ ✗.)',
    },
    {
      q: 'The two acute angles of a right triangle differ by $18^\\circ$. What is the larger acute angle?',
      choices: ['$54^\\circ$', '$36^\\circ$', '$72^\\circ$', '$99^\\circ$'],
      answer: 0,
      solution:
        'The two acute angles must add to $180^\\circ - 90^\\circ = 90^\\circ$. Writing the smaller as $x$ gives $x + (x + 18^\\circ) = 90^\\circ$, so $2x = 72^\\circ$, $x = 36^\\circ$, and the larger is $36^\\circ + 18^\\circ = 54^\\circ$ ✓. Check a second, independent way by balancing. Any two angles adding to $90^\\circ$ straddle $45^\\circ$ evenly, so a gap of $18^\\circ$ means each is $\\frac{18^\\circ}{2} = 9^\\circ$ from the middle: the larger is $45^\\circ + 9^\\circ = 54^\\circ$, the smaller $45^\\circ - 9^\\circ = 36^\\circ$ ✓. Guard: $54 - 36 = 18$ ✓ and $54 + 36 + 90 = 180$ ✓. (The choice $36^\\circ$ is ANSWERING THE SMALLER ACUTE ANGLE ✗; $72^\\circ$ is SUBTRACTING THE DIFFERENCE FROM 90 in one step ✗; $99^\\circ$ is USING 180 INSTEAD OF 90, from $\\frac{180 + 18}{2}$, and it is not even acute ✗.)',
    },
    {
      q: 'A right triangle has one acute angle $46^\\circ$ bigger than the other. How large is the bigger acute angle?',
      choices: ['$22^\\circ$', '$44^\\circ$', '$113^\\circ$', '$68^\\circ$'],
      answer: 3,
      solution:
        'The right angle takes $90^\\circ$, leaving $90^\\circ$ for the two acute angles together. With the smaller called $x$, $x + (x + 46^\\circ) = 90^\\circ$ gives $2x = 44^\\circ$, so $x = 22^\\circ$ and the bigger angle is $22^\\circ + 46^\\circ = 68^\\circ$ ✓. Check a second, independent way by balancing around the halfway point. The pair adds to $90^\\circ$, so it is centered on $45^\\circ$; a gap of $46^\\circ$ puts each angle $\\frac{46^\\circ}{2} = 23^\\circ$ from that center, making them $45^\\circ + 23^\\circ = 68^\\circ$ and $45^\\circ - 23^\\circ = 22^\\circ$ ✓. Guard: $68 - 22 = 46$ ✓ and $68 + 22 + 90 = 180$ ✓. (The choice $22^\\circ$ is ANSWERING THE SMALLER ACUTE ANGLE ✗; $44^\\circ$ is SUBTRACTING THE DIFFERENCE FROM 90 in one step ✗; $113^\\circ$ is USING 180 INSTEAD OF 90, from $\\frac{180 + 46}{2}$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 2,
  sections: {
    '2.5': s25,
  },
}
