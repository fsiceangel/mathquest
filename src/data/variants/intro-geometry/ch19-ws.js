// Introduction to Geometry chapter 19 — variations for the printable worksheet.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key and no answer
//    index anywhere in this file. Answers copy the base worksheet’s formatting:
//    a bare value such as '$68^\circ$' or '$120$' when one number is wanted, and
//    a named pair — 'height $12$, area $132$' — when the stem asks for two
//    things, in the order the stem asks for them.
//  - Every answer was worked twice by two genuinely different routes, and route
//    two never re-imports route one’s number: the parallel through the bend vs.
//    the transversal triangle (slot 1); the tangent-radius right triangle vs.
//    the power of the point (slot 2); altitude-and-triple vs. the difference of
//    two triangle areas or a parallelogram slide (slot 3); the angle sum vs. an
//    exterior angle (slot 4); the tangent-length system vs. the semiperimeter
//    formula (slot 5); the counterexample vs. the definition chain (slot 6);
//    similar triangles vs. the intercept ratio taken on the legs (slot 7); the
//    half-chord right triangle vs. the coordinate circle (slot 8); the isosceles
//    chain vs. the exterior-angle sum (slot 9); and two different congruence
//    routes to the same conclusion (slot 10).
//  - Worksheet items carry no distractors, so each solution closes with a short
//    confirmation against a different fact in the problem: the angle sum of the
//    transversal triangle (slot 1), the triangle inequality or the Pythagorean
//    Theorem (slots 2, 3, 8), the sum of the three angles found (slots 4, 9),
//    the perimeter (slots 5, 7), and the shape the finished proof forces
//    (slots 6, 10).
//  - Figures never label the quantity being asked for — it is marked `?`. Every
//    drawn coordinate is correct to three decimals, and figure labels are plain
//    text with no LaTeX and no root signs. Auxiliary segments are dashed.
//  - Pin deviations: none. Every keyed answer is the pinned one. Slot 2 lane
//    one runs on the primitive 48-55-73 right triangle, which shares no scale
//    factor with any tangent setup or triple used in the chapter itself.

const worksheet = [
  // slot 1 — a path bending between two parallel lines.
  //          Lanes: 41 top / 27 bottom -> 68; 58 / 61 -> 119;
  //          bend 134 with a 59 top -> 75 at the bottom.
  [
    {
      q: 'The two horizontal lines in the figure are parallel, and a path runs from $A$ on the top line down to $B$, then back up to $C$ on the bottom line. The path makes a $41^\\circ$ angle with the top line and a $27^\\circ$ angle with the bottom line. Find $\\angle ABC$.',
      fig: {
        view: [0, -1.2, 7.5, 4.2],
        elems: [
          { t: 'line', a: [0.5, 3], b: [7, 3] },
          { t: 'line', a: [0.5, 0], b: [7, 0] },
          { t: 'seg', a: [2.39, 3], b: [4, 1.6] },
          { t: 'seg', a: [4, 1.6], b: [0.86, 0] },
          { t: 'angle', at: [2.39, 3], from: [6, 3], to: [4, 1.6], r: 0.75, label: '41' },
          { t: 'angle', at: [0.86, 0], from: [6, 0], to: [4, 1.6], r: 0.8, label: '27' },
          { t: 'angle', at: [4, 1.6], from: [2.39, 3], to: [0.86, 0], r: 0.6, label: '?' },
          { t: 'point', p: [2.39, 3], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [4, 1.6], label: 'B', dx: 14, dy: 0 },
          { t: 'point', p: [0.86, 0], label: 'C', dx: 0, dy: 14 },
        ],
      },
      answer: '$68^\\circ$',
      solution:
        'Draw the Extra Line: through $B$, a line parallel to both given lines (dashed, because we drew it). That new line slices $\\angle ABC$ into a top piece and a bottom piece. The top piece and the $41^\\circ$ angle at $A$ are alternate interior angles between parallels, so the top piece is $41^\\circ$; the bottom piece and the $27^\\circ$ angle at $C$ are alternate interior angles too, so the bottom piece is $27^\\circ$. Adding, $\\angle ABC = 41^\\circ + 27^\\circ = 68^\\circ$ ✓. Second route, with no parallel through $B$ at all. Extend $\\overline{AB}$ downward until it crosses the bottom line at a point $Q$. Line $AQ$ is a transversal of the two parallels, so the angle it makes at $Q$ with the bottom line equals the $41^\\circ$ it makes at $A$ with the top line, by alternate interior angles. Now look at triangle $BQC$: the angle at $Q$ is $41^\\circ$, the angle at $C$ is $27^\\circ$, and $\\angle QBC = 180^\\circ - 41^\\circ - 27^\\circ = 112^\\circ$. Since $A$, $B$, $Q$ are collinear, $\\angle ABC$ and $\\angle QBC$ are a linear pair, so $\\angle ABC = 180^\\circ - 112^\\circ = 68^\\circ$ ✓. Check the second route against itself: the three angles of triangle $BQC$ come to $41^\\circ + 27^\\circ + 112^\\circ = 180^\\circ$, exactly the angle sum a triangle must have.',
    },
    {
      q: 'The two horizontal lines in the figure are parallel. A path leaves $A$ on the top line, bends at $B$, and reaches $C$ on the bottom line, making a $58^\\circ$ angle with the top line and a $61^\\circ$ angle with the bottom line. Find $\\angle ABC$.',
      fig: {
        view: [0, -1.2, 7.5, 4.2],
        elems: [
          { t: 'line', a: [0.5, 3], b: [7, 3] },
          { t: 'line', a: [0.5, 0], b: [7, 0] },
          { t: 'seg', a: [3.125, 3], b: [4, 1.6] },
          { t: 'seg', a: [4, 1.6], b: [3.113, 0] },
          { t: 'angle', at: [3.125, 3], from: [6, 3], to: [4, 1.6], r: 0.75, label: '58' },
          { t: 'angle', at: [3.113, 0], from: [6, 0], to: [4, 1.6], r: 0.8, label: '61' },
          { t: 'angle', at: [4, 1.6], from: [3.125, 3], to: [3.113, 0], r: 0.5, label: '?' },
          { t: 'point', p: [3.125, 3], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [4, 1.6], label: 'B', dx: 14, dy: 0 },
          { t: 'point', p: [3.113, 0], label: 'C', dx: 0, dy: 14 },
        ],
      },
      answer: '$119^\\circ$',
      solution:
        'Draw the Extra Line: a dashed line through $B$ parallel to the two given lines. It cuts $\\angle ABC$ into two pieces. The upper piece equals the $58^\\circ$ at $A$ and the lower piece equals the $61^\\circ$ at $C$, both by alternate interior angles between parallels, so $\\angle ABC = 58^\\circ + 61^\\circ = 119^\\circ$ ✓. Second route, using a transversal instead of a parallel. Extend $\\overline{AB}$ past $B$ until it meets the bottom line at $Q$. As a transversal of the parallels it carries the $58^\\circ$ down to $Q$ by alternate interior angles. Triangle $BQC$ then has $\\angle Q = 58^\\circ$ and $\\angle C = 61^\\circ$, so $\\angle QBC = 180^\\circ - 58^\\circ - 61^\\circ = 61^\\circ$. The bend and $\\angle QBC$ form a linear pair along line $AQ$, giving $\\angle ABC = 180^\\circ - 61^\\circ = 119^\\circ$ ✓. Check with a different fact in the figure: the bend is obtuse in the picture, and it must be, since a bend between parallels equals the sum of the two given angles and $58^\\circ + 61^\\circ$ already passes $90^\\circ$. Triangle $BQC$ also balances: $58^\\circ + 61^\\circ + 61^\\circ = 180^\\circ$.',
    },
    {
      q: 'The two horizontal lines in the figure are parallel. A path bends at $B$, and the bend measures $\\angle ABC = 134^\\circ$. The path makes a $59^\\circ$ angle with the top line at $A$. What angle does it make with the bottom line at $C$?',
      fig: {
        view: [0, -1.2, 7.5, 4.2],
        elems: [
          { t: 'line', a: [0.5, 3], b: [7, 3] },
          { t: 'line', a: [0.5, 0], b: [7, 0] },
          { t: 'seg', a: [3.159, 3], b: [4, 1.6] },
          { t: 'seg', a: [4, 1.6], b: [3.571, 0] },
          { t: 'angle', at: [3.159, 3], from: [6, 3], to: [4, 1.6], r: 0.75, label: '59' },
          { t: 'angle', at: [3.571, 0], from: [6, 0], to: [4, 1.6], r: 0.8, label: '?' },
          { t: 'angle', at: [4, 1.6], from: [3.159, 3], to: [3.571, 0], r: 0.5, label: '134' },
          { t: 'point', p: [3.159, 3], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [4, 1.6], label: 'B', dx: 14, dy: 0 },
          { t: 'point', p: [3.571, 0], label: 'C', dx: 0, dy: 14 },
        ],
      },
      answer: '$75^\\circ$',
      solution:
        'Draw the dashed parallel through $B$. It splits the $134^\\circ$ bend into an upper piece and a lower piece. Alternate interior angles make the upper piece equal to the $59^\\circ$ at $A$, so the lower piece is $134^\\circ - 59^\\circ = 75^\\circ$ — and that lower piece equals the angle at $C$, again by alternate interior angles. The path meets the bottom line at $75^\\circ$ ✓. Second route, through a triangle rather than a parallel. Extend $\\overline{AB}$ past $B$ to meet the bottom line at $Q$; the transversal carries $59^\\circ$ down to $\\angle BQC$. The bend and $\\angle QBC$ are a linear pair, so $\\angle QBC = 180^\\circ - 134^\\circ = 46^\\circ$. The angle sum of triangle $BQC$ then gives $\\angle C = 180^\\circ - 59^\\circ - 46^\\circ = 75^\\circ$ ✓. Check against a fact we have not used as an input: for a bend between parallels the bend equals the sum of the two outer angles, and $59^\\circ + 75^\\circ = 134^\\circ$, which is exactly the bend the problem gave.',
    },
  ],

  // slot 2 — tangent segment from an external point.
  //          Lanes: OP 73, r 55 -> 48; OP 41, r 9 -> 40;
  //          tangent 16 with OP 34 -> r = 30 and area 900pi.
  [
    {
      q: 'A tangent from a point $P$ touches a circle with center $O$ at $T$. The circle has radius $55$, and $OP = 73$. Find $PT$.',
      fig: {
        view: [-59, -59, 80, 59],
        elems: [
          { t: 'circle', c: [0, 0], r: 55 },
          { t: 'seg', a: [73, 0], b: [41.438, 36.164] },
          { t: 'seg', a: [0, 0], b: [41.438, 36.164], dash: true },
          { t: 'seg', a: [0, 0], b: [73, 0], dash: true },
          { t: 'right', at: [41.438, 36.164], from: [0, 0], to: [73, 0] },
          { t: 'label', p: [20.719, 18.082], text: '55', dx: -14, dy: -2 },
          { t: 'label', p: [36.5, 0], text: '73', dx: 0, dy: 16 },
          { t: 'label', p: [57.219, 18.082], text: '?', dx: 12, dy: -2 },
          { t: 'point', p: [0, 0], label: 'O', dx: -12, dy: 12 },
          { t: 'point', p: [41.438, 36.164], label: 'T', dx: -2, dy: -12 },
          { t: 'point', p: [73, 0], label: 'P', dx: 12, dy: 10 },
        ],
      },
      answer: '$48$',
      solution:
        'Every tangent problem comes with a free Extra Line: draw the radius $\\overline{OT}$ to the point of tangency and the segment $\\overline{OP}$ (both dashed, since we drew them ourselves). A tangent is perpendicular to the radius at the point of tangency, so $\\angle OTP = 90^\\circ$ and triangle $OTP$ is right with hypotenuse $OP = 73$ and leg $OT = 55$. The Pythagorean Theorem gives $PT = \\sqrt{73^2 - 55^2} = \\sqrt{5329 - 3025} = \\sqrt{2304} = 48$ ✓. Second route, reading the line $\\overline{OP}$ itself instead of the triangle across it, and never squaring $73$ or $55$ at all. That line meets the circle at a near point $N$ and a far point $F$, with $PN = 73 - 55 = 18$ and $PF = 73 + 55 = 128$. For a point outside a circle, the tangent length squared equals the product of those two distances, so $PT^2 = 18 \\cdot 128 = 2304$ and $PT = 48$ ✓. The two routes are the difference of squares seen from opposite ends: the picture hands over $(73 - 55)(73 + 55)$ as two measured distances, and $18 \\cdot 128$ is far friendlier arithmetic than $5329 - 3025$. Check the triangle inequality on the right triangle we built: $48 + 55 = 103$, well past $73$, and $73$ is the longest of the three, exactly as the hypotenuse should be. The radius comes out longer than the tangent, which fits a figure where $P$ sits only a little way outside a large circle.',
    },
    {
      q: 'The center of a circle of radius $9$ is $41$ units from a point $P$. Find the length of the tangent segment from $P$ to the circle.',
      fig: {
        view: [-10, -10, 42, 10],
        elems: [
          { t: 'circle', c: [0, 0], r: 9 },
          { t: 'seg', a: [41, 0], b: [1.976, 8.78] },
          { t: 'seg', a: [0, 0], b: [1.976, 8.78], dash: true },
          { t: 'seg', a: [0, 0], b: [41, 0], dash: true },
          { t: 'right', at: [1.976, 8.78], from: [0, 0], to: [41, 0] },
          { t: 'label', p: [0.988, 4.39], text: '9', dx: -12, dy: -2 },
          { t: 'label', p: [20.5, 0], text: '41', dx: 0, dy: 16 },
          { t: 'label', p: [21.488, 4.39], text: '?', dx: 8, dy: -6 },
          { t: 'point', p: [0, 0], label: 'O', dx: -12, dy: 12 },
          { t: 'point', p: [1.976, 8.78], label: 'T', dx: -4, dy: -12 },
          { t: 'point', p: [41, 0], label: 'P', dx: 10, dy: 12 },
        ],
      },
      answer: '$40$',
      solution:
        'Draw the radius to the point of tangency and the segment to the center (both dashed). The tangent-radius theorem makes $\\angle OTP$ a right angle, so triangle $OTP$ is right with hypotenuse $OP = 41$ and leg $OT = 9$. Then $PT = \\sqrt{41^2 - 9^2} = \\sqrt{1681 - 81} = \\sqrt{1600} = 40$ ✓. Second route, reading distances along the center line. The line through $O$ and $P$ cuts the circle at a near point $41 - 9 = 32$ from $P$ and a far point $41 + 9 = 50$ from $P$. The tangent length from an external point satisfies $PT^2 = 32 \\cdot 50 = 1600$, so $PT = 40$ ✓. Check with the Pythagorean Theorem run forward on the three lengths: $9^2 + 40^2 = 81 + 1600 = 1681 = 41^2$, so the sides really do close into a right triangle. The tangent is nearly as long as the distance to the center, which is what a small circle far from $P$ should produce.',
    },
    {
      q: 'A tangent segment from a point $P$ touches a circle at $T$, with $PT = 16$, and $P$ is $34$ units from the center $O$. Find the radius of the circle and the area of the circle.',
      fig: {
        view: [-32, -32, 37, 32],
        elems: [
          { t: 'circle', c: [0, 0], r: 30 },
          { t: 'seg', a: [34, 0], b: [26.471, 14.118] },
          { t: 'seg', a: [0, 0], b: [26.471, 14.118], dash: true },
          { t: 'seg', a: [0, 0], b: [34, 0], dash: true },
          { t: 'right', at: [26.471, 14.118], from: [0, 0], to: [34, 0] },
          { t: 'label', p: [13.235, 7.059], text: '?', dx: -10, dy: -4 },
          { t: 'label', p: [17, 0], text: '34', dx: 0, dy: 15 },
          { t: 'label', p: [30.235, 7.059], text: '16', dx: 12, dy: -2 },
          { t: 'point', p: [0, 0], label: 'O', dx: -12, dy: 12 },
          { t: 'point', p: [26.471, 14.118], label: 'T', dx: -4, dy: -12 },
          { t: 'point', p: [34, 0], label: 'P', dx: 10, dy: 10 },
        ],
      },
      answer: '$r = 30$ and the area is $900\\pi$',
      solution:
        'Draw the radius $\\overline{OT}$ and the segment $\\overline{OP}$ (dashed). The tangent-radius theorem puts a right angle at $T$, so triangle $OTP$ is right with hypotenuse $OP = 34$ and one leg $PT = 16$. The missing leg is the radius: $r = \\sqrt{34^2 - 16^2} = \\sqrt{1156 - 256} = \\sqrt{900} = 30$. The area of a circle is $\\pi r^2 = \\pi \\cdot 30^2 = 900\\pi$ ✓. Second route, from the two distances along the center line. Let the radius be $r$. The line through $O$ and $P$ meets the circle $34 - r$ from $P$ on the near side and $34 + r$ from $P$ on the far side, and the tangent length obeys $PT^2 = (34 - r)(34 + r) = 1156 - r^2$. So $256 = 1156 - r^2$, giving $r^2 = 900$ — and $r^2$ is exactly what the area formula asks for, so the area is $900\\pi$ before any square root is taken, with $r = 30$ following after ✓. Check the triangle inequality on $16$, $30$, $34$: $16 + 30 = 46 > 34$, and $34$ is the largest of the three, so it is correctly the hypotenuse. The radius is nearly as long as the distance to the center, matching a figure where $P$ sits just outside a large circle.',
    },
  ],

  // slot 3 — area of an isosceles trapezoid from the legs.
  //          Lanes: 20 || 6, legs 25 -> 312; 34 || 14, legs 26 -> 576;
  //          16 || 6, legs 13 -> height 12 and area 132.
  [
    {
      q: 'An isosceles trapezoid has parallel sides of length $20$ and $6$, and its two legs each measure $25$. Find its area.',
      fig: {
        view: [-1.5, -2, 21.5, 26.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [13, 24], [7, 24]], fill: false },
          { t: 'seg', a: [7, 24], b: [7, 0], dash: true },
          { t: 'seg', a: [13, 24], b: [13, 0], dash: true },
          { t: 'right', at: [7, 0], from: [20, 0], to: [7, 24] },
          { t: 'right', at: [13, 0], from: [20, 0], to: [13, 24] },
          { t: 'label', p: [10, 0], text: '20', dx: 0, dy: 16 },
          { t: 'label', p: [10, 24], text: '6', dx: 0, dy: -10 },
          { t: 'label', p: [3.5, 12], text: '25', dx: -14, dy: -6 },
          { t: 'label', p: [16.5, 12], text: '25', dx: 14, dy: -6 },
        ],
      },
      answer: '$312$',
      solution:
        'The area formula wants a height the figure never gives, so build one: drop a dashed altitude from each top vertex to the long base. They carve the trapezoid into a middle rectangle as wide as the top side, $6$, plus two matching right triangles that share the leftover $20 - 6 = 14$ of the bottom, $7$ each. Each end triangle has hypotenuse $25$ and base $7$, so its height is $\\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$. Now the trapezoid area: $\\frac{20 + 6}{2} \\cdot 24 = 13 \\cdot 24 = 312$ ✓. Second route, by Heron on a slid triangle, which never drops an altitude and never uses the overhang. Translate the left leg to the right until its lower end lands on the bottom-right vertex; the top side slides away and what is left is a triangle with two sides of $25$ and a third side of $20 - 6 = 14$. Its semiperimeter is $32$, so Heron gives the area $\\sqrt{32 \\cdot 7 \\cdot 7 \\cdot 18} = \\sqrt{28224} = 168$. That same area equals $\\frac{1}{2} \\cdot 14 \\cdot h$, so the distance between the parallels is $h = 24$, and the trapezoid is the $6 \\times 24$ rectangle in the middle plus that whole triangle: $144 + 168 = 312$ ✓. Check the triangle inequality on the slid triangle: $25 + 25 = 50 > 14$ and $25 + 14 = 39 > 25$, so the shape closes, and the height $24$ falls just under the leg $25$, which it must, since the leg is the hypotenuse of each end triangle. The area also sits between $6 \\cdot 24 = 144$ and $20 \\cdot 24 = 480$, as any trapezoid area must sit between the two rectangles built on its parallel sides.',
    },
    {
      q: 'An isosceles trapezoid has parallel sides $34$ and $14$, with legs of length $26$. Find its area.',
      fig: {
        view: [-1.5, -2, 35.5, 26],
        elems: [
          { t: 'poly', pts: [[0, 0], [34, 0], [24, 24], [10, 24]], fill: false },
          { t: 'seg', a: [10, 24], b: [10, 0], dash: true },
          { t: 'seg', a: [24, 24], b: [24, 0], dash: true },
          { t: 'right', at: [10, 0], from: [34, 0], to: [10, 24] },
          { t: 'right', at: [24, 0], from: [34, 0], to: [24, 24] },
          { t: 'label', p: [17, 0], text: '34', dx: 0, dy: 16 },
          { t: 'label', p: [17, 24], text: '14', dx: 0, dy: -10 },
          { t: 'label', p: [5, 12], text: '26', dx: -14, dy: -6 },
          { t: 'label', p: [29, 12], text: '26', dx: 14, dy: -6 },
        ],
      },
      answer: '$576$',
      solution:
        'Drop a dashed altitude from each top vertex. The rectangle between them is $14$ wide, leaving $34 - 14 = 20$ for the two triangle feet, so each foot is $10$. Each end triangle has hypotenuse $26$ and base $10$, so the height is $\\sqrt{26^2 - 10^2} = \\sqrt{676 - 100} = \\sqrt{576} = 24$. The area is $\\frac{34 + 14}{2} \\cdot 24 = 24 \\cdot 24 = 576$ ✓. Second route, by the parallelogram slide and a triangle area. Translate the left leg to the right until its bottom endpoint lands on the bottom-right vertex; the top side moves off and a triangle is left with two sides of $26$ and a third side of $34 - 14 = 20$. Its semiperimeter is $36$, so by Heron the triangle area is $\\sqrt{36 \\cdot 10 \\cdot 10 \\cdot 16} = \\sqrt{57600} = 240$, and that area is also $\\frac{1}{2} \\cdot 20 \\cdot h$, so $h = 24$ is the distance between the parallels. Adding the rectangle to the two ends a different way, the trapezoid is a $14 \\times 24$ rectangle plus two triangles of base $10$: $336 + 2 \\cdot \\frac{1}{2} \\cdot 10 \\cdot 24 = 336 + 240 = 576$ ✓. Check by the triangle inequality on the slid triangle: $26 + 26 = 52 > 20$, so it closes, and the height $24$ is less than the leg $26$, which a slanted leg must always beat. The area lies between $14 \\cdot 24 = 336$ and $34 \\cdot 24 = 816$, as it must.',
    },
    {
      q: 'An isosceles trapezoid has parallel sides $16$ and $6$ and legs of length $13$. Find the height of the trapezoid and its area.',
      fig: {
        view: [-1.5, -1.5, 17.5, 14],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [11, 12], [5, 12]], fill: false },
          { t: 'seg', a: [5, 12], b: [5, 0], dash: true },
          { t: 'right', at: [5, 0], from: [16, 0], to: [5, 12] },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 16 },
          { t: 'label', p: [8, 12], text: '6', dx: 0, dy: -10 },
          { t: 'label', p: [2.5, 6], text: '13', dx: -12, dy: -6 },
          { t: 'label', p: [13.5, 6], text: '13', dx: 12, dy: -6 },
          { t: 'label', p: [5, 6], text: '?', dx: 10, dy: 0 },
        ],
      },
      answer: 'height $12$, area $132$',
      solution:
        'Drop a dashed altitude from a top vertex to the long base. The overhang on each end is $\\frac{16 - 6}{2} = 5$, so the altitude is a leg of a right triangle with hypotenuse $13$ and base $5$: the height is $\\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$, the $5$-$12$-$13$ triple. Then the area is $\\frac{16 + 6}{2} \\cdot 12 = 11 \\cdot 12 = 132$ ✓. Second route, by Heron on the slid triangle, which never drops an altitude at all. Slide the left leg across until its lower end meets the bottom-right vertex; what remains is a triangle with sides $13$, $13$, and $16 - 6 = 10$. Its semiperimeter is $18$, so its area is $\\sqrt{18 \\cdot 5 \\cdot 5 \\cdot 8} = \\sqrt{3600} = 60$. That same area equals $\\frac{1}{2} \\cdot 10 \\cdot h$, so the distance between the parallels is $h = 12$. The trapezoid is then the $6 \\times 12$ rectangle in the middle plus that whole triangle: $72 + 60 = 132$ ✓. Check the triangle inequality on the slid triangle: $13 + 13 = 26 > 10$ and $13 + 10 = 23 > 13$, so the shape closes, and the height $12$ falls just under the leg $13$, which is required since the leg is the hypotenuse of the end triangle.',
    },
  ],

  // slot 4 — solving for triangle angles written in terms of x.
  //          Lanes: x, 2x + 6, 3x - 6 -> 84; 2x, 3x + 5, 4x - 14 -> 70;
  //          x, x + 20, x + 40 -> 40, 60, 80 and the triangle is acute.
  [
    {
      q: 'The three angles of a triangle measure $x$, $2x + 6^\\circ$, and $3x - 6^\\circ$. Find the measure of the largest angle.',
      fig: {
        view: [-1, -1, 7, 3.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [4.773, 2.755]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [4.773, 2.755], r: 0.9, label: 'x' },
          { t: 'angle', at: [6, 0], from: [4.773, 2.755], to: [0, 0], r: 0.9, label: '2x + 6' },
          { t: 'angle', at: [4.773, 2.755], from: [0, 0], to: [6, 0], r: 0.5, label: '3x - 6' },
        ],
      },
      answer: '$84^\\circ$',
      solution:
        'Name the unknown and let the angle sum write the equation: $x + (2x + 6^\\circ) + (3x - 6^\\circ) = 180^\\circ$. The $+6^\\circ$ and $-6^\\circ$ cancel, leaving $6x = 180^\\circ$, so $x = 30^\\circ$. The three angles are $30^\\circ$, $2(30^\\circ) + 6^\\circ = 66^\\circ$, and $3(30^\\circ) - 6^\\circ = 84^\\circ$, so the largest is $84^\\circ$ ✓. Second route, through an exterior angle rather than the interior sum. Extend the side that meets the smallest angle, creating the exterior angle at that vertex; an exterior angle equals the sum of the two remote interior angles, so it measures $(2x + 6^\\circ) + (3x - 6^\\circ) = 5x$. That exterior angle and the interior $x$ beside it form a linear pair, so $5x + x = 180^\\circ$ and $x = 30^\\circ$; substituting into $3x - 6^\\circ$ gives the largest angle as $84^\\circ$ ✓. Check by summing the three angles found: $30^\\circ + 66^\\circ + 84^\\circ = 180^\\circ$. Reading the expressions confirms the ranking too — with $x = 30^\\circ$, the coefficient $3$ beats the coefficient $2$ by more than the $12^\\circ$ constant gap, so $3x - 6^\\circ$ is the largest, and the question asked for that angle, not for $x$.',
    },
    {
      q: 'A triangle has angles measuring $2x$, $3x + 5^\\circ$, and $4x - 14^\\circ$. What is the measure of the largest angle?',
      fig: {
        view: [-1, -1, 7, 5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [4.4, 3.961]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [4.4, 3.961], r: 0.9, label: '2x' },
          { t: 'angle', at: [6, 0], from: [4.4, 3.961], to: [0, 0], r: 0.9, label: '3x + 5' },
          { t: 'angle', at: [4.4, 3.961], from: [0, 0], to: [6, 0], r: 0.6, label: '4x - 14' },
        ],
      },
      answer: '$70^\\circ$',
      solution:
        'Let the angle sum supply the equation: $2x + (3x + 5^\\circ) + (4x - 14^\\circ) = 180^\\circ$, which tidies to $9x - 9^\\circ = 180^\\circ$, so $9x = 189^\\circ$ and $x = 21^\\circ$. The angles are $42^\\circ$, $68^\\circ$, and $70^\\circ$, so the largest is $70^\\circ$ ✓. Second route, by an exterior angle at the smallest corner. Extend the side through the vertex carrying $2x$; the exterior angle there equals the sum of the two remote interior angles, $(3x + 5^\\circ) + (4x - 14^\\circ) = 7x - 9^\\circ$. It pairs with $2x$ along a straight line, so $2x + 7x - 9^\\circ = 180^\\circ$, again $x = 21^\\circ$, and $4x - 14^\\circ = 70^\\circ$ ✓. Check by adding the three angles found: $42^\\circ + 68^\\circ + 70^\\circ = 180^\\circ$. Notice which expression wins: $4x - 14^\\circ$ and $3x + 5^\\circ$ are close, and they tie only when $x = 19^\\circ$; since $x = 21^\\circ$ is larger, the $4x$ expression edges ahead, exactly the $70^\\circ$ against $68^\\circ$ the arithmetic produced.',
    },
    {
      q: 'The angles of a triangle measure $x$, $x + 20^\\circ$, and $x + 40^\\circ$. Find all three angles, and state whether the triangle is acute, right, or obtuse.',
      fig: {
        view: [-1, -1, 7, 4.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [4.042, 3.391]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [4.042, 3.391], r: 0.9, label: 'x' },
          { t: 'angle', at: [6, 0], from: [4.042, 3.391], to: [0, 0], r: 0.9, label: 'x + 20' },
          { t: 'angle', at: [4.042, 3.391], from: [0, 0], to: [6, 0], r: 0.6, label: 'x + 40' },
        ],
      },
      answer: '$40^\\circ$, $60^\\circ$, $80^\\circ$ — acute',
      solution:
        'The angle sum gives $x + (x + 20^\\circ) + (x + 40^\\circ) = 3x + 60^\\circ = 180^\\circ$, so $3x = 120^\\circ$ and $x = 40^\\circ$. The angles are $40^\\circ$, $60^\\circ$, and $80^\\circ$. Every one is under $90^\\circ$, so the triangle is acute ✓. Second route, using the average instead of solving for $x$. The three measures are evenly spaced $20^\\circ$ apart, so the middle one is their average, and the average of three angles that total $180^\\circ$ is $60^\\circ$. That fixes the middle angle at $60^\\circ$ immediately, and the other two are $60^\\circ - 20^\\circ = 40^\\circ$ and $60^\\circ + 20^\\circ = 80^\\circ$. The classification follows from the largest angle alone: $80^\\circ < 90^\\circ$, so the triangle is acute ✓. Check by adding the three angles found: $40^\\circ + 60^\\circ + 80^\\circ = 180^\\circ$. One more consistency test on the classification: a triangle can hold at most one angle of $90^\\circ$ or more, and the largest here misses $90^\\circ$ by $10^\\circ$, so no right or obtuse angle can be hiding anywhere in the figure.',
    },
  ],

  // slot 5 — incircle tangent lengths.
  //          Lanes: 12-17-25 -> 10 from A; 11-20-13 -> 2 from A;
  //          perimeter 42 with 8 and 9 from B and C -> AB 12, BC 17, CA 13.
  [
    {
      q: 'Triangle $ABC$ has $AB = 12$, $BC = 17$, and $CA = 25$, and a circle is inscribed in it. Find the length of the tangent segments from vertex $A$.',
      fig: {
        view: [-7, -1.5, 19, 12.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [17, 0], [-5.647, 10.588]], fill: false },
          { t: 'circle', c: [2, 3.333], r: 3.333 },
          { t: 'label', p: [-2.824, 5.294], text: '12', dx: -12, dy: -4 },
          { t: 'label', p: [8.5, 0], text: '17', dx: 0, dy: 15 },
          { t: 'label', p: [5.677, 5.294], text: '25', dx: 12, dy: 2 },
          { t: 'point', p: [0, 0], label: 'B', dx: 4, dy: 15 },
          { t: 'point', p: [17, 0], label: 'C', dx: 12, dy: 12 },
          { t: 'point', p: [-5.647, 10.588], label: 'A', dx: -10, dy: -8 },
        ],
      },
      answer: '$10$',
      solution:
        'Name the three tangent lengths. The two tangents drawn from any external point to a circle are equal, so let the tangents from $A$, $B$, $C$ have lengths $x$, $y$, $z$. Each side is the sum of the two tangent lengths at its endpoints: $x + y = 12$, $y + z = 17$, and $z + x = 25$. Adding all three, $2(x + y + z) = 54$, so $x + y + z = 27$. Subtract the one equation that leaves out $x$: $x = 27 - 17 = 10$ ✓. Second route, from the semiperimeter with no system to solve. The tangent length from a vertex always equals the semiperimeter minus the side opposite that vertex, because the incircle splits the perimeter into three matched pairs. The semiperimeter is $\\frac{12 + 17 + 25}{2} = 27$, and the side opposite $A$ is $BC = 17$, so the tangent length from $A$ is $27 - 17 = 10$ ✓. Check by rebuilding the sides from the three tangent lengths: $x = 10$ forces $y = 12 - 10 = 2$ and $z = 25 - 10 = 15$, and then $y + z = 2 + 15 = 17$, matching $BC$ exactly, with total perimeter $2(10 + 2 + 15) = 54$ as given. The triangle inequality holds with very little room to spare, since $12 + 17 = 29$ only just beats $25$, which is why the figure is drawn so flat.',
    },
    {
      q: 'A circle is inscribed in triangle $ABC$, where $AB = 11$, $BC = 20$, and $CA = 13$. Find the length of the tangent segments from vertex $A$.',
      fig: {
        view: [-1, -1, 22, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [8.8, 6.6]], fill: false },
          { t: 'circle', c: [9, 3], r: 3 },
          { t: 'label', p: [4.4, 3.3], text: '11', dx: -12, dy: -4 },
          { t: 'label', p: [10, 0], text: '20', dx: 0, dy: 15 },
          { t: 'label', p: [14.4, 3.3], text: '13', dx: 12, dy: -2 },
          { t: 'point', p: [0, 0], label: 'B', dx: -12, dy: 12 },
          { t: 'point', p: [20, 0], label: 'C', dx: 12, dy: 12 },
          { t: 'point', p: [8.8, 6.6], label: 'A', dx: 0, dy: -12 },
        ],
      },
      answer: '$2$',
      solution:
        'Let the tangent lengths from $A$, $B$, $C$ be $x$, $y$, $z$, using the fact that the two tangents from one external point are equal. The sides give $x + y = 11$, $y + z = 20$, and $z + x = 13$. Adding, $2(x + y + z) = 44$, so $x + y + z = 22$, and subtracting the equation without $x$ leaves $x = 22 - 20 = 2$ ✓. Second route, straight from the semiperimeter. The incircle cuts the perimeter into three equal pairs, which makes the tangent length from a vertex equal to the semiperimeter minus the opposite side. Here the semiperimeter is $\\frac{11 + 20 + 13}{2} = 22$ and the side opposite $A$ is $BC = 20$, so the tangent length from $A$ is $22 - 20 = 2$ ✓. Check against the triangle inequality and the perimeter together: $x = 2$ makes $y = 9$ and $z = 11$, and $y + z = 20 = BC$, with perimeter $2(2 + 9 + 11) = 44$. The small answer is believable because $BC = 20$ is nearly as long as the other two sides combined ($11 + 13 = 24$), so vertex $A$ sits close to the circle and its tangent segments are short.',
    },
    {
      q: 'A circle is inscribed in triangle $ABC$, whose perimeter is $42$. The tangent segments from $B$ have length $8$ and the tangent segments from $C$ have length $9$. Find $AB$, $BC$, and $CA$.',
      fig: {
        view: [-1, -1, 19, 11],
        elems: [
          { t: 'poly', pts: [[0, 0], [17, 0], [7.765, 9.149]], fill: false },
          { t: 'circle', c: [8, 3.703], r: 3.703 },
          { t: 'point', p: [8, 0], label: '', dx: 0, dy: 0 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 15 },
          { t: 'label', p: [12.5, 0], text: '9', dx: 0, dy: 15 },
          { t: 'label', p: [3.883, 4.575], text: '?', dx: -12, dy: -4 },
          { t: 'label', p: [12.383, 4.575], text: '?', dx: 12, dy: -2 },
          { t: 'point', p: [0, 0], label: 'B', dx: -12, dy: 12 },
          { t: 'point', p: [17, 0], label: 'C', dx: 12, dy: 12 },
          { t: 'point', p: [7.765, 9.149], label: 'A', dx: 0, dy: -12 },
        ],
      },
      answer: '$AB = 12$, $BC = 17$, $CA = 13$',
      solution:
        'Name the missing tangent length. Let the tangents from $A$ have length $x$, while the tangents from $B$ and $C$ are the given $8$ and $9$. The incircle splits the perimeter into two copies of each tangent length, so $2(x + 8 + 9) = 42$, giving $x + 17 = 21$ and $x = 4$. Now every side is a sum of two tangent lengths: $AB = 4 + 8 = 12$, $BC = 8 + 9 = 17$, and $CA = 9 + 4 = 13$ ✓. Second route, from the semiperimeter rule, which finds the sides without ever naming $x$. The semiperimeter is $\\frac{42}{2} = 21$, and the tangent length from a vertex equals the semiperimeter minus the opposite side. The tangent length from $B$ is $8$, so $21 - CA = 8$ and $CA = 13$; the tangent length from $C$ is $9$, so $21 - AB = 9$ and $AB = 12$. The perimeter then hands over the last side: $BC = 42 - 13 - 12 = 17$ ✓. Check the perimeter and the triangle inequality: $12 + 17 + 13 = 42$ as given, and $12 + 13 = 25 > 17$, so the three lengths really do close into a triangle with $BC$ as its longest side.',
    },
  ],

  // slot 6 — writing a converse and deciding whether it holds.
  //          Lanes: square / congruent diagonals -> false, non-square rectangle;
  //          both right angles / congruent -> false, two 40 degree angles;
  //          two congruent sides / two congruent angles -> true.
  [
    {
      q: 'Write the converse of the statement: "If a quadrilateral is a square, then its diagonals are congruent." Then decide whether the converse is true, and justify your answer.',
      fig: {
        view: [-1, -1, 9, 5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 4], [0, 4]], fill: false },
          { t: 'seg', a: [0, 0], b: [8, 4], dash: true },
          { t: 'seg', a: [8, 0], b: [0, 4], dash: true },
          { t: 'right', at: [0, 0], from: [8, 0], to: [0, 4] },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 12 },
          { t: 'point', p: [8, 0], label: 'B', dx: 12, dy: 12 },
          { t: 'point', p: [8, 4], label: 'C', dx: 12, dy: -8 },
          { t: 'point', p: [0, 4], label: 'D', dx: -12, dy: -8 },
        ],
      },
      answer: 'Converse: "If a quadrilateral’s diagonals are congruent, then it is a square." The converse is false — a non-square rectangle has congruent diagonals.',
      solution:
        'A converse trades the hypothesis and the conclusion, so it reads: if a quadrilateral has congruent diagonals, then it is a square. To knock a claim down, one counterexample is enough, so hunt for a quadrilateral with congruent diagonals that is not a square. The rectangle in the figure, $8$ by $4$, is one: in a rectangle both diagonals are hypotenuses of congruent right triangles with legs $8$ and $4$, so both measure $\\sqrt{64 + 16} = \\sqrt{80}$, yet the sides are not all equal, so it is not a square. The converse is false ✓. Second route, without measuring anything. An isosceles trapezoid also has congruent diagonals — its two diagonals sit inside congruent triangles built on the equal legs and the shared base — and an isosceles trapezoid has only one pair of parallel sides, so it is not even a parallelogram, let alone a square. A second, structurally different counterexample confirms the verdict ✓. Check the logic itself rather than the shapes: the original statement is true, since a square is a rectangle and rectangles have congruent diagonals, and a true statement never drags its converse along with it. What would rescue the converse is extra hypotheses — diagonals that are congruent, perpendicular, and bisect each other do force a square.',
    },
    {
      q: 'Write the converse of the statement: "If two angles are both right angles, then they are congruent." Then decide whether the converse is true, and justify your answer.',
      fig: {
        view: [-1, -1, 9, 3],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [2.298, 1.928] },
          { t: 'seg', a: [5, 0], b: [8, 0] },
          { t: 'seg', a: [5, 0], b: [7.298, 1.928] },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [2.298, 1.928], r: 0.8, label: '40' },
          { t: 'angle', at: [5, 0], from: [8, 0], to: [7.298, 1.928], r: 0.8, label: '40' },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 12 },
          { t: 'point', p: [5, 0], label: 'Q', dx: -12, dy: 12 },
        ],
      },
      answer: 'Converse: "If two angles are congruent, then they are both right angles." The converse is false — two $40^\\circ$ angles are congruent without being right angles.',
      solution:
        'Swapping the hypothesis and the conclusion gives: if two angles are congruent, then they are both right angles. Test it with a counterexample, and the figure supplies one immediately — the two angles drawn at $P$ and $Q$ each measure $40^\\circ$, so they are congruent, and neither is a right angle. The converse is false ✓. Second route, by counting instead of by exhibiting one pair. Congruence of angles only says the two measures are the same number, and that number is free to be anything from $0^\\circ$ to $180^\\circ$; being a right angle pins the measure to the single value $90^\\circ$. A condition that allows every measure cannot imply a condition that allows exactly one, so the converse fails for every congruent pair except the right ones ✓. Check the direction that does hold: two right angles both measure $90^\\circ$, and angles with equal measures are congruent, so the original statement is sound. The example also shows why a proof may never quote a converse for free — the original is true and its converse is false, which is only possible because they are different statements.',
    },
    {
      q: 'Write the converse of the statement: "If a triangle has two congruent sides, then it has two congruent angles." Then decide whether the converse is true, and justify your answer.',
      fig: {
        view: [-1, -1, 7, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [3, 3.5]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [3, 3.5], r: 0.9, label: 'x' },
          { t: 'angle', at: [6, 0], from: [3, 3.5], to: [0, 0], r: 0.9, label: 'x' },
          { t: 'label', p: [1.5, 1.75], text: '?', dx: -12, dy: -4 },
          { t: 'label', p: [4.5, 1.75], text: '?', dx: 12, dy: -4 },
          { t: 'point', p: [0, 0], label: 'B', dx: -12, dy: 12 },
          { t: 'point', p: [6, 0], label: 'C', dx: 12, dy: 12 },
          { t: 'point', p: [3, 3.5], label: 'A', dx: 0, dy: -12 },
        ],
      },
      answer: 'Converse: "If a triangle has two congruent angles, then it has two congruent sides." The converse is true — it is the converse of the isosceles triangle theorem, and it holds.',
      solution:
        'Trading hypothesis for conclusion gives: if a triangle has two congruent angles, then it has two congruent sides. This one is genuinely true, and it earns a proof rather than an example. In triangle $ABC$ with $\\angle B = \\angle C$, drop the bisector of $\\angle A$, meeting $\\overline{BC}$ at $D$. Triangles $ABD$ and $ACD$ have $\\angle B = \\angle C$ (given), $\\angle BAD = \\angle CAD$ (definition of an angle bisector), and the shared side $AD = AD$ (reflexive property), so they are congruent by AAS. CPCTC then gives $AB = AC$ ✓. Second route, by contradiction, which never draws an auxiliary line. Suppose $\\angle B = \\angle C$ but the sides were unequal, say $AB > AC$. In any triangle the larger side faces the larger angle, so $AB > AC$ would force $\\angle C > \\angle B$, contradicting the assumption; the same contradiction appears if $AC > AB$. The only survivor is $AB = AC$ ✓. Check the finished shape against the angle sum: with $\\angle B = \\angle C = x$, the apex is $180^\\circ - 2x$, which is a legitimate positive angle for any $x$ below $90^\\circ$, so such triangles exist in abundance and no hidden contradiction was smuggled in. Notice that this converse being true is a fact about this particular pair of statements — most converses in this chapter are false, which is exactly why each one must be checked.',
    },
  ],

  // slot 7 — legs of a trapezoid extended to a point P, distance h*AB/(AB - DC).
  //          Lanes: AB 27, DC 9, h 12 -> 18; AB 26, DC 13, h 14 -> 28;
  //          AB 20, DC 12, h 10 -> 25 from AB and 15 from line DC.
  [
    {
      q: 'Trapezoid $ABCD$ has $\\overline{AB} \\parallel \\overline{DC}$, with $AB = 27$, $DC = 9$, and height $12$. The legs, extended past the shorter side, meet at $P$. Find the distance from $P$ to line $AB$.',
      fig: {
        view: [-1.5, -1.5, 28.5, 20],
        elems: [
          { t: 'poly', pts: [[0, 0], [27, 0], [18, 12], [9, 12]], fill: false },
          { t: 'seg', a: [9, 12], b: [13.5, 18], dash: true },
          { t: 'seg', a: [18, 12], b: [13.5, 18], dash: true },
          { t: 'seg', a: [13.5, 12], b: [13.5, 0], dash: true },
          { t: 'label', p: [22, 0], text: '27', dx: 0, dy: 16 },
          { t: 'label', p: [15.75, 12], text: '9', dx: 8, dy: -8 },
          { t: 'label', p: [13.5, 6], text: '12', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 12 },
          { t: 'point', p: [27, 0], label: 'B', dx: 12, dy: 12 },
          { t: 'point', p: [18, 12], label: 'C', dx: 12, dy: -4 },
          { t: 'point', p: [9, 12], label: 'D', dx: -12, dy: -4 },
          { t: 'point', p: [13.5, 18], label: 'P', dx: 0, dy: -12 },
        ],
      },
      answer: '$18$',
      solution:
        'Extending the legs (dashed) is the Extra Line here, and it manufactures a pair of similar triangles. Because $\\overline{DC} \\parallel \\overline{AB}$, the angles at $P$ are shared and the base angles correspond, so $\\triangle PDC \\sim \\triangle PAB$ by AA, with ratio $\\frac{DC}{AB} = \\frac{9}{27} = \\frac{1}{3}$. Corresponding heights carry that same ratio. If $P$ sits $d$ above line $DC$, then $P$ sits $d + 12$ above line $AB$, and $\\frac{d}{d + 12} = \\frac{1}{3}$ gives $3d = d + 12$, so $d = 6$ and the distance to $\\overline{AB}$ is $6 + 12 = 18$ ✓. Second route, along a leg rather than through the heights. Set up a coordinate frame with $A$ at the origin and $\\overline{AB}$ along the $x$-axis, so $A = (0, 0)$, $B = (27, 0)$, $D = (9, 12)$, and $C = (18, 12)$ keep the shorter side centered. Line $AD$ has slope $\\frac{12}{9} = \\frac{4}{3}$ and passes through the origin, giving $y = \\frac{4}{3}x$; line $BC$ has slope $\\frac{12 - 0}{18 - 27} = -\\frac{4}{3}$ through $(27, 0)$, giving $y = -\\frac{4}{3}(x - 27)$. Setting them equal, $\\frac{4}{3}x = -\\frac{4}{3}x + 36$, so $x = 13.5$ and $y = 18$. The height of $P$ above line $AB$ is that $y$-value, $18$ ✓. Check with a length the problem did not hand us. The similar triangles scale every part by $3$, so the perimeter of $\\triangle PAB$ must be three times that of $\\triangle PDC$, and the bases already obey it: $27 = 3 \\cdot 9$. The answer also has to exceed the height $12$, since $P$ lies beyond $\\overline{DC}$, and $18 > 12$.',
    },
    {
      q: 'In trapezoid $ABCD$, $\\overline{AB} \\parallel \\overline{DC}$ with $AB = 26$, $DC = 13$, and the height is $14$. The legs are extended past $\\overline{DC}$ until they meet at $P$. How far is $P$ from line $AB$?',
      fig: {
        view: [-1.5, -1.5, 27.5, 30],
        elems: [
          { t: 'poly', pts: [[0, 0], [26, 0], [19.5, 14], [6.5, 14]], fill: false },
          { t: 'seg', a: [6.5, 14], b: [13, 28], dash: true },
          { t: 'seg', a: [19.5, 14], b: [13, 28], dash: true },
          { t: 'seg', a: [13, 14], b: [13, 0], dash: true },
          { t: 'label', p: [21, 0], text: '26', dx: 0, dy: 16 },
          { t: 'label', p: [16.25, 14], text: '13', dx: 10, dy: -8 },
          { t: 'label', p: [13, 7], text: '14', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 12 },
          { t: 'point', p: [26, 0], label: 'B', dx: 12, dy: 12 },
          { t: 'point', p: [19.5, 14], label: 'C', dx: 12, dy: -4 },
          { t: 'point', p: [6.5, 14], label: 'D', dx: -12, dy: -4 },
          { t: 'point', p: [13, 28], label: 'P', dx: 0, dy: -12 },
        ],
      },
      answer: '$28$',
      solution:
        'Extend the legs (dashed) and read the similar triangles. The parallel bases make $\\triangle PDC \\sim \\triangle PAB$ by AA, with ratio $\\frac{DC}{AB} = \\frac{13}{26} = \\frac{1}{2}$. Heights scale the same way: if $P$ is $d$ above line $DC$, it is $d + 14$ above line $AB$, so $\\frac{d}{d + 14} = \\frac{1}{2}$ gives $2d = d + 14$ and $d = 14$. The distance to $\\overline{AB}$ is $14 + 14 = 28$ ✓. Second route, by coordinates on the legs. Put $A = (0, 0)$, $B = (26, 0)$, $D = (6.5, 14)$, $C = (19.5, 14)$. Line $AD$ is $y = \\frac{14}{6.5}x$, and line $BC$ through $(26, 0)$ and $(19.5, 14)$ has slope $\\frac{14}{-6.5}$, giving $y = -\\frac{14}{6.5}(x - 26)$. Equating, $\\frac{14}{6.5}x = -\\frac{14}{6.5}x + \\frac{14 \\cdot 26}{6.5}$, so $2x = 26$, $x = 13$, and $y = \\frac{14}{6.5}(13) = 28$. That $y$-value is the distance from $P$ to line $AB$ ✓. Check against a different fact in the figure: the shorter base is exactly half the longer one, so $\\overline{DC}$ has to be the midsegment of $\\triangle PAB$, which means $D$ and $C$ are the midpoints of the two legs of that big triangle — and midpoints put $\\overline{DC}$ halfway up, at $\\frac{28}{2} = 14$ above $\\overline{AB}$, matching the given height exactly.',
    },
    {
      q: 'Trapezoid $ABCD$ has $\\overline{AB} \\parallel \\overline{DC}$, with $AB = 20$, $DC = 12$, and height $10$. The legs, extended past $\\overline{DC}$, meet at $P$. Find the distance from $P$ to line $AB$ and the distance from $P$ to line $DC$.',
      fig: {
        view: [-1.5, -1.5, 21.5, 27],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [16, 10], [4, 10]], fill: false },
          { t: 'seg', a: [4, 10], b: [10, 25], dash: true },
          { t: 'seg', a: [16, 10], b: [10, 25], dash: true },
          { t: 'seg', a: [10, 10], b: [10, 0], dash: true },
          { t: 'label', p: [17, 0], text: '20', dx: 0, dy: 16 },
          { t: 'label', p: [13, 10], text: '12', dx: 10, dy: -8 },
          { t: 'label', p: [10, 5], text: '10', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 12 },
          { t: 'point', p: [20, 0], label: 'B', dx: 12, dy: 12 },
          { t: 'point', p: [16, 10], label: 'C', dx: 12, dy: -4 },
          { t: 'point', p: [4, 10], label: 'D', dx: -12, dy: -4 },
          { t: 'point', p: [10, 25], label: 'P', dx: 0, dy: -12 },
        ],
      },
      answer: '$25$ from $AB$ and $15$ from $DC$',
      solution:
        'Extend the legs (dashed). The parallel bases give $\\triangle PDC \\sim \\triangle PAB$ by AA, with ratio $\\frac{DC}{AB} = \\frac{12}{20} = \\frac{3}{5}$. Let $d$ be the distance from $P$ to line $DC$; then the distance to line $AB$ is $d + 10$, and $\\frac{d}{d + 10} = \\frac{3}{5}$ gives $5d = 3d + 30$, so $d = 15$ and the distance to $\\overline{AB}$ is $15 + 10 = 25$ ✓. Second route, by coordinates, which finds both distances without ever writing the ratio. Place $A = (0, 0)$, $B = (20, 0)$, $D = (4, 10)$, $C = (16, 10)$. Line $AD$ is $y = \\frac{10}{4}x = \\frac{5}{2}x$, and line $BC$ through $(20, 0)$ and $(16, 10)$ has slope $\\frac{10}{-4}$, so $y = -\\frac{5}{2}(x - 20)$. Equating gives $\\frac{5}{2}x = -\\frac{5}{2}x + 50$, so $x = 10$ and $y = 25$. The apex $P = (10, 25)$ sits $25$ above line $AB$ (which is $y = 0$) and $25 - 10 = 15$ above line $DC$ (which is $y = 10$) ✓. Check with the perimeters, a fact the stem never supplied. Similar triangles scale every length by $\\frac{5}{3}$, so the distance to $\\overline{AB}$ should be $\\frac{5}{3}$ of the distance to $\\overline{DC}$: $\\frac{5}{3} \\cdot 15 = 25$, and the two distances differ by exactly the given height, $25 - 15 = 10$.',
    },
  ],

  // slot 8 — chords and their distances from the center.
  //          Lanes: chords 24 and 10 in r 13, same side -> 7;
  //          chords 48 and 30 in r 25, opposite sides -> 27;
  //          r 17 with distances 8 and 15 -> chords 30 and 16.
  [
    {
      q: 'Two parallel chords of a circle of radius $13$ have lengths $24$ and $10$, and they lie on the same side of the center. Find the distance between the two chords.',
      fig: {
        view: [-14, -14, 14, 14],
        elems: [
          { t: 'circle', c: [0, 0], r: 13 },
          { t: 'seg', a: [-12, 5], b: [12, 5] },
          { t: 'seg', a: [-5, 12], b: [5, 12] },
          { t: 'seg', a: [0, 0], b: [0, 12], dash: true },
          { t: 'seg', a: [0, 0], b: [12, 5], dash: true },
          { t: 'right', at: [0, 5], from: [12, 5], to: [0, 0] },
          { t: 'label', p: [6, 5], text: '24', dx: 0, dy: 15 },
          { t: 'label', p: [0, 12], text: '10', dx: 0, dy: -8 },
          { t: 'label', p: [6, 2.5], text: '13', dx: 10, dy: 8 },
          { t: 'label', p: [0, 8.5], text: '?', dx: -12, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 15 },
        ],
      },
      answer: '$7$',
      solution:
        'Draw the perpendicular from the center to the chords (one dashed line serves both, since the chords are parallel) and a radius to an endpoint of the longer chord. A perpendicular from the center bisects a chord, so each half-chord is a leg of a right triangle whose hypotenuse is the radius $13$. For the chord of $24$: half of it is $12$, so its distance from the center is $\\sqrt{13^2 - 12^2} = \\sqrt{169 - 144} = \\sqrt{25} = 5$. For the chord of $10$: half is $5$, so its distance is $\\sqrt{169 - 25} = \\sqrt{144} = 12$. Both lie on the same side, so the gap between them is $12 - 5 = 7$ ✓. Second route, on coordinates, with no bisection theorem invoked. Put the center at the origin and the chords horizontal, so the circle is $x^2 + y^2 = 169$. A horizontal line $y = k$ meets the circle where $x = \\pm\\sqrt{169 - k^2}$, so it cuts a chord of length $2\\sqrt{169 - k^2}$. Setting $2\\sqrt{169 - k^2} = 24$ gives $169 - k^2 = 144$ and $k = 5$ for the upper choice; setting it to $10$ gives $169 - k^2 = 25$ and $k = 12$. The two lines are $y = 5$ and $y = 12$, which are $7$ apart ✓. Check with the Pythagorean Theorem, against a length the stem never named: $5^2 + 12^2 = 25 + 144 = 169 = 13^2$, so both right triangles really close, and they are one triangle with its legs swapped — which is why the half-chord $12$ pairs with the distance $5$ while the half-chord $5$ pairs with the distance $12$. That swap is also why the shorter chord sits farther out, and both distances stay under the radius $13$, as any chord inside the circle requires.',
    },
    {
      q: 'A circle of radius $25$ contains two parallel chords of lengths $48$ and $30$, lying on opposite sides of the center. Find the distance between them.',
      fig: {
        view: [-26, -26, 26, 26],
        elems: [
          { t: 'circle', c: [0, 0], r: 25 },
          { t: 'seg', a: [-24, 7], b: [24, 7] },
          { t: 'seg', a: [-15, -20], b: [15, -20] },
          { t: 'seg', a: [0, 7], b: [0, -20], dash: true },
          { t: 'seg', a: [0, 0], b: [24, 7], dash: true },
          { t: 'seg', a: [0, 0], b: [15, -20], dash: true },
          { t: 'right', at: [0, 7], from: [24, 7], to: [0, 0] },
          { t: 'right', at: [0, -20], from: [15, -20], to: [0, 0] },
          { t: 'label', p: [12, 7], text: '48', dx: 0, dy: 15 },
          { t: 'label', p: [-7.5, -20], text: '30', dx: 0, dy: 16 },
          { t: 'label', p: [12, 3.5], text: '25', dx: 10, dy: 8 },
          { t: 'label', p: [0, -6.5], text: '?', dx: -14, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: 12, dy: 6 },
        ],
      },
      answer: '$27$',
      solution:
        'Drop the perpendicular from the center to each chord and draw a radius to an endpoint of each. The perpendicular from the center bisects a chord, so the chord of $48$ gives a right triangle with leg $24$ and hypotenuse $25$, putting that chord $\\sqrt{25^2 - 24^2} = \\sqrt{49} = 7$ from the center; the chord of $30$ gives a right triangle with leg $15$ and hypotenuse $25$, putting it $\\sqrt{625 - 225} = \\sqrt{400} = 20$ from the center. They straddle the center, so the distance between them is the sum: $7 + 20 = 27$ ✓. Second route, by coordinates. Center the circle at the origin with the chords horizontal, so it is $x^2 + y^2 = 625$, and a line $y = k$ cuts a chord of length $2\\sqrt{625 - k^2}$. The chord of $48$ needs $625 - k^2 = 576$, so $k = 7$ above the center; the chord of $30$ needs $625 - k^2 = 225$, so $k = -20$ below it. The lines $y = 7$ and $y = -20$ are $7 - (-20) = 27$ apart ✓. Check against the diameter, a length the stem never gave: the two chords are $27$ apart inside a circle whose diameter is $50$, so they fit with room to spare, and the longer chord $48$ is the closer one at $7$, as a longer chord must be. Had the chords shared a side of the center the answer would have been $20 - 7 = 13$ instead, so reading which case the problem describes matters as much as the arithmetic.',
    },
    {
      q: 'In a circle of radius $17$, one chord is $8$ units from the center and another is $15$ units from the center. Find the length of each chord.',
      fig: {
        view: [-18, -18, 18, 18],
        elems: [
          { t: 'circle', c: [0, 0], r: 17 },
          { t: 'seg', a: [-15, 8], b: [15, 8] },
          { t: 'seg', a: [-8, -15], b: [8, -15] },
          { t: 'seg', a: [0, 0], b: [0, 8], dash: true },
          { t: 'seg', a: [0, 0], b: [0, -15], dash: true },
          { t: 'seg', a: [0, 0], b: [15, 8], dash: true },
          { t: 'right', at: [0, 8], from: [15, 8], to: [0, 0] },
          { t: 'right', at: [0, -15], from: [8, -15], to: [0, 0] },
          { t: 'label', p: [0, 4], text: '8', dx: -10, dy: 4 },
          { t: 'label', p: [0, -7.5], text: '15', dx: -14, dy: 4 },
          { t: 'label', p: [7.5, 4], text: '17', dx: 10, dy: 8 },
          { t: 'label', p: [-7, 8], text: '?', dx: 0, dy: -8 },
          { t: 'label', p: [-4, -15], text: '?', dx: 0, dy: 16 },
        ],
      },
      answer: '$30$ and $16$',
      solution:
        'Draw the perpendicular from the center to each chord and a radius to an endpoint. The perpendicular from the center bisects a chord, so each half-chord is a leg of a right triangle with hypotenuse $17$ and the given distance as the other leg. For the chord $8$ from the center, the half-chord is $\\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$, so the chord is $30$. For the chord $15$ from the center, the half-chord is $\\sqrt{289 - 225} = \\sqrt{64} = 8$, so that chord is $16$ ✓. Second route, by coordinates, so the bisection is never assumed. Center the circle at the origin: $x^2 + y^2 = 289$. The horizontal line $y = 8$ meets it where $x^2 = 289 - 64 = 225$, at $x = \\pm 15$, so the chord runs from $(-15, 8)$ to $(15, 8)$ and measures $30$. The line $y = -15$ meets it where $x^2 = 289 - 225 = 64$, at $x = \\pm 8$, so that chord runs from $(-8, -15)$ to $(8, -15)$ and measures $16$ ✓. Check with the Pythagorean Theorem in both directions: $8$-$15$-$17$ is a genuine triple, since $64 + 225 = 289$, and it is the same triple twice with the roles of the two legs swapped — which is precisely why the distance $8$ produces a half-chord of $15$ and the distance $15$ produces a half-chord of $8$. Both chords are shorter than the diameter $34$, as every chord must be.',
    },
  ],

  // slot 9 — the chain AD = BD, AC = DC, where angle C = 180 - 4 * angle B.
  //          Lanes: C 60 -> B 30; B 25 -> C 80;
  //          C 48 -> B 33 and angle BAC 99.
  [
    {
      q: 'In triangle $ABC$, point $D$ lies on $\\overline{BC}$ with $AD = BD$ and $AC = DC$. If $\\angle C = 60^\\circ$, find $\\angle B$.',
      fig: {
        view: [-0.8, -1, 6, 3],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [3.75, 2.165]], fill: false },
          { t: 'seg', a: [3.75, 2.165], b: [2.5, 0] },
          { t: 'tick', a: [0, 0], b: [2.5, 0], n: 1 },
          { t: 'tick', a: [3.75, 2.165], b: [2.5, 0], n: 1 },
          { t: 'tick', a: [3.75, 2.165], b: [5, 0], n: 2 },
          { t: 'tick', a: [2.5, 0], b: [5, 0], n: 2 },
          { t: 'angle', at: [5, 0], from: [3.75, 2.165], to: [0, 0], r: 0.9, label: '60' },
          { t: 'angle', at: [0, 0], from: [5, 0], to: [3.75, 2.165], r: 0.8, label: '?' },
          { t: 'point', p: [0, 0], label: 'B', dx: -12, dy: 12 },
          { t: 'point', p: [2.5, 0], label: 'D', dx: 2, dy: 15 },
          { t: 'point', p: [5, 0], label: 'C', dx: 12, dy: 12 },
          { t: 'point', p: [3.75, 2.165], label: 'A', dx: 0, dy: -12 },
        ],
      },
      answer: '$30^\\circ$',
      solution:
        'Name the unknown and ride the chain forward. Let $\\angle B = x$. Since $AD = BD$, triangle $ABD$ is isosceles and its base angles match: $\\angle BAD = x$. The exterior angle of a triangle equals the sum of the two remote interior angles, so $\\angle ADC = x + x = 2x$. Since $AC = DC$, triangle $ADC$ is isosceles with $\\angle DAC = \\angle ADC = 2x$, and its angle sum reads $2x + 2x + 60^\\circ = 180^\\circ$. So $4x = 120^\\circ$ and $\\angle B = x = 30^\\circ$ ✓. Second route, worked backward from $C$ with no variable at all and no exterior-angle theorem. Triangle $ADC$ has $AC = DC$, so its base angles at $A$ and $D$ are equal and each measures $\\frac{180^\\circ - 60^\\circ}{2} = 60^\\circ$; in particular $\\angle ADC = 60^\\circ$. Point $D$ lies on segment $\\overline{BC}$, so $\\angle ADB$ and $\\angle ADC$ form a linear pair: $\\angle ADB = 180^\\circ - 60^\\circ = 120^\\circ$. Triangle $ABD$ has $AD = BD$, so its two base angles are equal and share what is left: $\\angle B = \\frac{180^\\circ - 120^\\circ}{2} = 30^\\circ$ ✓. Check with the angle sum of the whole triangle $ABC$, which neither route used as an input. The full angle at $A$ is $\\angle BAD + \\angle DAC = 30^\\circ + 60^\\circ = 90^\\circ$, and $30^\\circ + 90^\\circ + 60^\\circ = 180^\\circ$. The largest angle sits at $A$, so $\\overline{BC}$ must be the longest side, which is exactly how the figure is drawn.',
    },
    {
      q: 'In triangle $ABC$, point $D$ lies on $\\overline{BC}$ with $AD = BD$ and $AC = DC$. If $\\angle B = 25^\\circ$, find $\\angle C$.',
      fig: {
        view: [-0.8, -1, 6.5, 3],
        elems: [
          { t: 'poly', pts: [[0, 0], [5.334, 0], [4.928, 2.298]], fill: false },
          { t: 'seg', a: [4.928, 2.298], b: [3, 0] },
          { t: 'tick', a: [0, 0], b: [3, 0], n: 1 },
          { t: 'tick', a: [4.928, 2.298], b: [3, 0], n: 1 },
          { t: 'tick', a: [4.928, 2.298], b: [5.334, 0], n: 2 },
          { t: 'tick', a: [3, 0], b: [5.334, 0], n: 2 },
          { t: 'angle', at: [0, 0], from: [5.334, 0], to: [4.928, 2.298], r: 0.9, label: '25' },
          { t: 'angle', at: [5.334, 0], from: [4.928, 2.298], to: [0, 0], r: 0.7, label: '?' },
          { t: 'point', p: [0, 0], label: 'B', dx: -12, dy: 12 },
          { t: 'point', p: [3, 0], label: 'D', dx: 0, dy: 15 },
          { t: 'point', p: [5.334, 0], label: 'C', dx: 12, dy: 12 },
          { t: 'point', p: [4.928, 2.298], label: 'A', dx: 4, dy: -12 },
        ],
      },
      answer: '$80^\\circ$',
      solution:
        'Let $\\angle B = x = 25^\\circ$ and pass it up the chain. Because $AD = BD$, triangle $ABD$ is isosceles and $\\angle BAD = x$. The exterior angle at $D$ of that triangle equals the sum of the two remote interior angles, so $\\angle ADC = 2x = 50^\\circ$. Because $AC = DC$, triangle $ADC$ is isosceles with $\\angle DAC = \\angle ADC = 50^\\circ$, and its angle sum gives $\\angle C = 180^\\circ - 50^\\circ - 50^\\circ = 80^\\circ$ ✓. Second route, on coordinates, where no isosceles base-angle theorem is quoted and the equal lengths are enforced directly. Put $B$ at the origin with $\\overline{BC}$ along the $x$-axis and set $BD = 1$, so $D = (1, 0)$. The condition $AD = BD$ makes triangle $ABD$ isosceles about the perpendicular bisector of $\\overline{BD}$, so $A$ sits above $x = \\frac{1}{2}$ shifted out along the $25^\\circ$ ray from $B$; running $BA = 2\\cos 25^\\circ \\approx 1.813$ along that ray puts $A \\approx (1.643, 0.766)$, and indeed $AD = \\sqrt{0.643^2 + 0.766^2} \\approx 1.000$. The condition $AC = DC$ forces $C$ onto the perpendicular bisector of $\\overline{AD}$, and that bisector crosses the $x$-axis at $C \\approx (1.778, 0)$. Then $\\overrightarrow{CA} \\approx (-0.135, 0.766)$ and $\\overrightarrow{CB} \\approx (-1.778, 0)$ meet at an angle whose cosine is $\\frac{0.240}{0.778 \\cdot 1.778} \\approx 0.1736$, giving $\\angle C \\approx 80^\\circ$ ✓. Check with the angle sum of triangle $ABC$: the full angle at $A$ is $\\angle BAD + \\angle DAC = 25^\\circ + 50^\\circ = 75^\\circ$, and $25^\\circ + 75^\\circ + 80^\\circ = 180^\\circ$. The largest angle is at $C$, so $\\overline{AB}$ should be the longest side, and it is the one stretching all the way across the figure.',
    },
    {
      q: 'In triangle $ABC$, point $D$ lies on $\\overline{BC}$ with $AD = BD$ and $AC = DC$. If $\\angle C = 48^\\circ$, find $\\angle B$ and $\\angle BAC$.',
      fig: {
        view: [-0.8, -1, 7, 3.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [5.796, 0], [3.658, 2.375]], fill: false },
          { t: 'seg', a: [3.658, 2.375], b: [2.6, 0] },
          { t: 'tick', a: [0, 0], b: [2.6, 0], n: 1 },
          { t: 'tick', a: [3.658, 2.375], b: [2.6, 0], n: 1 },
          { t: 'tick', a: [3.658, 2.375], b: [5.796, 0], n: 2 },
          { t: 'tick', a: [2.6, 0], b: [5.796, 0], n: 2 },
          { t: 'angle', at: [5.796, 0], from: [3.658, 2.375], to: [0, 0], r: 1, label: '48' },
          { t: 'angle', at: [0, 0], from: [5.796, 0], to: [3.658, 2.375], r: 0.8, label: '?' },
          { t: 'point', p: [0, 0], label: 'B', dx: -12, dy: 12 },
          { t: 'point', p: [2.6, 0], label: 'D', dx: 0, dy: 15 },
          { t: 'point', p: [5.796, 0], label: 'C', dx: 12, dy: 12 },
          { t: 'point', p: [3.658, 2.375], label: 'A', dx: 0, dy: -12 },
        ],
      },
      answer: '$\\angle B = 33^\\circ$ and $\\angle BAC = 99^\\circ$',
      solution:
        'Let $\\angle B = x$ and run the chain forward. $AD = BD$ makes triangle $ABD$ isosceles, so $\\angle BAD = x$, and the exterior angle at $D$ gives $\\angle ADC = x + x = 2x$. Then $AC = DC$ makes triangle $ADC$ isosceles with $\\angle DAC = \\angle ADC = 2x$, so its angle sum reads $2x + 2x + 48^\\circ = 180^\\circ$, giving $4x = 132^\\circ$ and $x = 33^\\circ$. The angle at $A$ is built from both pieces: $\\angle BAC = \\angle BAD + \\angle DAC = x + 2x = 3x = 99^\\circ$ ✓. Second route, backward from $C$ with concrete numbers, using a linear pair in place of the exterior-angle theorem. Triangle $ADC$ has $AC = DC$, so its base angles at $A$ and $D$ are equal, each measuring $\\frac{180^\\circ - 48^\\circ}{2} = 66^\\circ$; that fixes $\\angle DAC = 66^\\circ$ and $\\angle ADC = 66^\\circ$. Since $D$ lies on $\\overline{BC}$, the angles $\\angle ADB$ and $\\angle ADC$ form a linear pair, so $\\angle ADB = 180^\\circ - 66^\\circ = 114^\\circ$. Triangle $ABD$ has $AD = BD$, so its base angles split the remainder evenly: $\\angle B = \\angle BAD = \\frac{180^\\circ - 114^\\circ}{2} = 33^\\circ$. Adding the two pieces at $A$ gives $\\angle BAC = 33^\\circ + 66^\\circ = 99^\\circ$ ✓. Check with the angle sum of triangle $ABC$, which neither route used: $33^\\circ + 99^\\circ + 48^\\circ = 180^\\circ$. The ranking of the sides agrees too — the largest angle sits at $A$, so $\\overline{BC}$ is the longest side, and the smallest angle sits at $B$, so $\\overline{AC}$ is the shortest, exactly as drawn.',
    },
  ],

  // slot 10 — write a short proof, citing a reason for every step.
  //           Lanes: parallelogram diagonals, AE = CE; segments bisecting each
  //           other give parallel sides; kite diagonal bisects the vertex angle.
  [
    {
      q: 'In parallelogram $ABCD$, the diagonals $\\overline{AC}$ and $\\overline{BD}$ meet at $E$. Prove that $AE = CE$, citing a reason for every step.',
      fig: {
        view: [-1, -1, 10.5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [9.5, 3.5], [2.5, 3.5]], fill: false },
          { t: 'seg', a: [0, 0], b: [9.5, 3.5], dash: true },
          { t: 'seg', a: [7, 0], b: [2.5, 3.5], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 12 },
          { t: 'point', p: [7, 0], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [9.5, 3.5], label: 'C', dx: 12, dy: -8 },
          { t: 'point', p: [2.5, 3.5], label: 'D', dx: -12, dy: -8 },
          { t: 'point', p: [4.75, 1.75], label: 'E', dx: 4, dy: -12 },
        ],
      },
      answer: 'Since $ABCD$ is a parallelogram, $\\overline{AB} \\parallel \\overline{DC}$ by the definition of a parallelogram. With transversal $\\overline{AC}$ that gives $\\angle BAE = \\angle DCE$, and with transversal $\\overline{BD}$ it gives $\\angle ABE = \\angle CDE$, both because alternate interior angles formed by parallel lines are congruent. Also $AB = CD$, by the previously proved theorem that opposite sides of a parallelogram are congruent. Two angles and the side between them match, so $\\triangle ABE \\cong \\triangle CDE$ by ASA, and therefore $AE = CE$ by CPCTC.',
      solution:
        'Bookkeeping first. Given: $ABCD$ is a parallelogram and $E$ is the point where its diagonals cross. Goal: $AE = CE$. Those two segments live in triangles $ABE$ and $CDE$, so the plan is to prove those triangles congruent and finish with CPCTC. Step 1: $\\overline{AB} \\parallel \\overline{DC}$ — the definition of a parallelogram, which promises parallel opposite sides and nothing more. Step 2: $\\angle BAE = \\angle DCE$ — alternate interior angles, with $\\overline{AC}$ as the transversal across those parallels. Step 3: $\\angle ABE = \\angle CDE$ — alternate interior angles again, this time with $\\overline{BD}$ as the transversal. Step 4: $AB = CD$ — the previously proved theorem that opposite sides of a parallelogram are congruent. It is a theorem, not the definition, which is why it has to be cited by name. Step 5: in each triangle the side of Step 4 lies between the two angles of Steps 2 and 3, so $\\triangle ABE \\cong \\triangle CDE$ by ASA. Step 6: $AE = CE$, because corresponding parts of congruent triangles are congruent ✓. Second route to the same congruence, replacing one of the angle pairs with the crossing itself. Step 3 can be dropped in favor of $\\angle AEB = \\angle CED$, which holds because vertical angles are congruent. Pairing that with $\\angle BAE = \\angle DCE$ from Step 2 and the side $AB = CD$ from Step 4 gives two angles and a non-included side, so $\\triangle ABE \\cong \\triangle CDE$ by AAS, and CPCTC again yields $AE = CE$ ✓. Check the result against a different fact in the figure: the same congruence also hands over $BE = DE$, so each diagonal cuts the other in half. That matches what the drawing shows, and it is the standard theorem that the diagonals of a parallelogram bisect each other — our conclusion is one half of it.',
    },
    {
      q: 'Segments $\\overline{AB}$ and $\\overline{CD}$ bisect each other at $M$. Prove that $\\overline{AC}$ is parallel to $\\overline{DB}$, citing a reason for every step.',
      fig: {
        view: [-4, -3.5, 4, 3.5],
        elems: [
          { t: 'seg', a: [-3, 2], b: [3, -2] },
          { t: 'seg', a: [-2, -2.5], b: [2, 2.5] },
          { t: 'seg', a: [-3, 2], b: [-2, -2.5] },
          { t: 'seg', a: [2, 2.5], b: [3, -2] },
          { t: 'tick', a: [-3, 2], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [3, -2], n: 1 },
          { t: 'tick', a: [-2, -2.5], b: [0, 0], n: 2 },
          { t: 'tick', a: [0, 0], b: [2, 2.5], n: 2 },
          { t: 'point', p: [-3, 2], label: 'A', dx: -12, dy: -6 },
          { t: 'point', p: [3, -2], label: 'B', dx: 12, dy: 10 },
          { t: 'point', p: [-2, -2.5], label: 'C', dx: -12, dy: 10 },
          { t: 'point', p: [2, 2.5], label: 'D', dx: 12, dy: -6 },
          { t: 'point', p: [0, 0], label: 'M', dx: 10, dy: 12 },
        ],
      },
      answer: 'Since $\\overline{AB}$ and $\\overline{CD}$ bisect each other at $M$, $M$ is the midpoint of both, so $AM = MB$ and $CM = MD$ by the definition of a midpoint. Also $\\angle AMC = \\angle BMD$, because vertical angles are congruent. Side, included angle, side gives $\\triangle AMC \\cong \\triangle BMD$ by SAS, so $\\angle CAM = \\angle DBM$ by CPCTC. Those two angles are alternate interior angles for lines $AC$ and $DB$ cut by the transversal $\\overline{AB}$, so $\\overline{AC} \\parallel \\overline{DB}$ by the converse of the alternate interior angles theorem.',
      solution:
        'Bookkeeping first. Given: $M$ bisects $\\overline{AB}$ and $M$ bisects $\\overline{CD}$. Goal: $\\overline{AC} \\parallel \\overline{DB}$. Since parallelism is proved through equal angles, the plan is congruent triangles, then CPCTC, then the converse of the alternate interior angles theorem. Step 1: $AM = MB$ and $CM = MD$ — the definition of a midpoint, which is what "bisect" delivers. Step 2: $\\angle AMC = \\angle BMD$ — vertical angles are congruent, since $A$, $M$, $B$ are collinear and so are $C$, $M$, $D$. Step 3: the angle of Step 2 sits between the two pairs of sides from Step 1, so $\\triangle AMC \\cong \\triangle BMD$ by SAS. Step 4: $\\angle CAM = \\angle DBM$ — corresponding parts of congruent triangles are congruent. Step 5: with transversal $\\overline{AB}$, those two angles are alternate interior angles for lines $AC$ and $DB$, so the lines are parallel by the converse of the alternate interior angles theorem — a converse that has itself been proved, which is what makes it citable ✓. Second route, by coordinates, which never builds a triangle. Place $M$ at the origin. Because $M$ is the midpoint of $\\overline{AB}$, the two endpoints are opposite: $B = -A$. Because $M$ is the midpoint of $\\overline{CD}$, likewise $D = -C$. Then $\\overrightarrow{AC} = C - A$, while $\\overrightarrow{DB} = B - D = (-A) - (-C) = C - A$. The two vectors are identical, so the segments point the same direction and are parallel ✓. Check the finished figure against a fact neither route assumed: the coordinate route also shows $AC = DB$, so $ACBD$ has a pair of sides both parallel and congruent — the signature of a parallelogram, which is exactly the shape the drawing settles into.',
    },
    {
      q: 'In kite $ABCD$, $AB = AD$ and $CB = CD$. Prove that $\\overline{AC}$ bisects $\\angle BAD$, citing a reason for every step.',
      fig: {
        view: [-5, -3.5, 4, 3.5],
        elems: [
          { t: 'poly', pts: [[-4, 0], [0, 2.5], [3, 0], [0, -2.5]], fill: false },
          { t: 'seg', a: [-4, 0], b: [3, 0], dash: true },
          { t: 'tick', a: [-4, 0], b: [0, 2.5], n: 1 },
          { t: 'tick', a: [-4, 0], b: [0, -2.5], n: 1 },
          { t: 'tick', a: [3, 0], b: [0, 2.5], n: 2 },
          { t: 'tick', a: [3, 0], b: [0, -2.5], n: 2 },
          { t: 'angle', at: [-4, 0], from: [0, 2.5], to: [0, -2.5], r: 1, label: '?' },
          { t: 'point', p: [-4, 0], label: 'A', dx: -12, dy: -6 },
          { t: 'point', p: [0, 2.5], label: 'B', dx: 0, dy: -12 },
          { t: 'point', p: [3, 0], label: 'C', dx: 12, dy: -6 },
          { t: 'point', p: [0, -2.5], label: 'D', dx: 0, dy: 16 },
        ],
      },
      answer: 'Draw the diagonal $\\overline{AC}$. Then $AB = AD$ (given), $CB = CD$ (given), and $AC = AC$ by the reflexive property. Three pairs of congruent sides give $\\triangle ABC \\cong \\triangle ADC$ by SSS, so $\\angle BAC = \\angle DAC$ by CPCTC. A ray that splits an angle into two congruent angles is its bisector, by the definition of an angle bisector, so $\\overline{AC}$ bisects $\\angle BAD$.',
      solution:
        'Bookkeeping first. Given: $AB = AD$ and $CB = CD$. Goal: $\\angle BAC = \\angle DAC$. Those two angles sit in triangles $ABC$ and $ADC$, so draw the diagonal $\\overline{AC}$ (dashed, since it is our auxiliary segment) and aim for congruence. Step 1: $AB = AD$ — given. Step 2: $CB = CD$ — given. Step 3: $AC = AC$ — the reflexive property, the free third side whenever two triangles share an edge. Step 4: all three pairs of sides match, so $\\triangle ABC \\cong \\triangle ADC$ by SSS. Step 5: $\\angle BAC = \\angle DAC$ — corresponding parts of congruent triangles are congruent. Step 6: a ray through the vertex that cuts an angle into two congruent angles is an angle bisector, by definition, so $\\overline{AC}$ bisects $\\angle BAD$ ✓. Second route, through the perpendicular bisector of $\\overline{BD}$, which never uses SSS. From $AB = AD$, point $A$ is equidistant from $B$ and $D$, so $A$ lies on the perpendicular bisector of $\\overline{BD}$; from $CB = CD$, point $C$ lies on that same perpendicular bisector. Two points determine a line, so line $AC$ IS the perpendicular bisector of $\\overline{BD}$. Let it cross $\\overline{BD}$ at $M$. Then $BM = MD$ by the definition of a bisected segment, $\\angle AMB = \\angle AMD = 90^\\circ$ by the definition of perpendicular, and $AM = AM$ by the reflexive property, so $\\triangle AMB \\cong \\triangle AMD$ by SAS. CPCTC gives $\\angle BAM = \\angle DAM$, and since $M$ lies on $\\overline{AC}$, that is the same statement as $\\angle BAC = \\angle DAC$ ✓. Check against a different fact in the figure: the same congruence also gives $\\angle ABC = \\angle ADC$, so the kite has one pair of equal opposite angles — and adding those to $\\angle BAD$ and $\\angle BCD$, each of which the diagonal splits into two equal halves, the four interior angles still total $360^\\circ$, as a quadrilateral must.',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 19,
  worksheet,
}
