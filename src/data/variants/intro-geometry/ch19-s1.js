// Introduction to Geometry chapter 19 — variations for section 19.1
// (The Extra Line). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every item turns on an auxiliary construction, and every solution names
//    the classic move by name: a parallel through a point, a radius to a point
//    of tangency, a dropped altitude, a diagonal, or an extension. Auxiliary
//    segments are drawn dashed, matching the chapter’s own convention that a
//    dashed segment is one we added ourselves.
//  - The three "which line would you draw?" items in slot 1 show the bare
//    figure, exactly as the base problem does: drawing the line in the picture
//    would hand over the answer, so the solution draws it in words instead.
//  - Every keyed answer is reached twice along routes that share no steps.
//    The usual pairing is "add the auxiliary line and chase the picture"
//    against a second route that reaches the same number from a different
//    theorem — the power of a point, an exterior angle, a triangle-sum count.
//    Route two never reuses route one’s number.
//  - Figures never carry the quantity being asked for; it is marked `?`.
//    Label text is plain SVG, so no length that needs a radical is labeled.
//  - Each distractor is one named mistake — forgetting to halve a trapezoid’s
//    overhang, using a radius where the hypotenuse belongs, subtracting where
//    the dart identity adds — and the mistake is named in CAPS.

const s191 = [
  // s1 — choosing the line, before any arithmetic happens.
  [
    {
      q: 'An isosceles trapezoid has two parallel sides and two congruent legs, all four lengths known, but no height is marked. To find its area, which auxiliary line is the most useful first move?',
      fig: {
        view: [-1.5, -1.5, 15.5, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [10, 7], [4, 7]], fill: false },
          { t: 'tick', a: [0, 0], b: [4, 7], n: 1 },
          { t: 'tick', a: [14, 0], b: [10, 7], n: 1 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [14, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [10, 7], label: 'C', dx: 10, dy: -6 },
          { t: 'point', p: [4, 7], label: 'D', dx: -10, dy: -6 },
        ],
      },
      choices: [
        'the diagonal $\\overline{AC}$',
        'the segment joining the midpoints of the two legs',
        'an altitude dropped from each of $C$ and $D$ to $\\overline{AB}$',
        'a line through $D$ parallel to leg $\\overline{BC}$',
      ],
      answer: 2,
      solution:
        'Route one, let the goal choose the line. The area of a trapezoid is $\\frac{b_1 + b_2}{2} \\cdot h$, and the one ingredient missing is $h$. An altitude is a height by definition, so dropping one from $C$ and one from $D$ supplies exactly the missing ingredient — and each altitude lands as the leg of a right triangle whose hypotenuse is a known leg of the trapezoid, so the Pythagorean Theorem finishes the job ✓. Route two, count what the picture gains, without mentioning area at all. The two dashed altitudes cut the trapezoid into three pieces: a rectangle in the middle, as wide as the short base, and two congruent right triangles on the ends. Every one of those pieces has an area formula a beginner already knows, and the two triangle feet split the leftover base evenly because the trapezoid is symmetric. A figure with no formula became three figures that all have one ✓. (The diagonal $\\overline{AC}$ is the right move for a general quadrilateral, but here it MAKES TWO TRIANGLES WITH NO KNOWN HEIGHT EITHER, so nothing is unlocked ✗. The midpoint segment is the midsegment; it gives the average of the two bases, which is a length we can already compute, so it ADDS NO NEW INFORMATION ✗. The parallel through $D$ does build a parallelogram and a triangle, but it LEAVES THE HEIGHT AS UNKNOWN AS BEFORE, since no right angle is created ✗.)',
    },
    {
      q: 'Quadrilateral $ABCD$ has all four side lengths known and a right angle at $B$, and its area is wanted. Which auxiliary line opens the problem up?',
      fig: {
        view: [-1.5, -1.5, 12.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 5], [0, 0], [7, 0], [11, 8]], fill: false },
          { t: 'right', at: [0, 0], from: [7, 0], to: [0, 5] },
          { t: 'point', p: [0, 5], label: 'A', dx: -10, dy: -6 },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [7, 0], label: 'C', dx: 4, dy: 14 },
          { t: 'point', p: [11, 8], label: 'D', dx: 10, dy: -6 },
        ],
      },
      choices: [
        'the diagonal $\\overline{AC}$, which splits $ABCD$ into two triangles',
        'an altitude from $D$ to $\\overline{BC}$',
        'the segment joining the midpoints of $\\overline{AB}$ and $\\overline{CD}$',
        'a line through $D$ parallel to $\\overline{AB}$',
      ],
      answer: 0,
      solution:
        'Route one, hunt for the shape whose area you can already find. There is no area formula for a quadrilateral with four arbitrary sides, but there is one for a triangle, so cut the figure into triangles. The diagonal $\\overline{AC}$ does it in one stroke, and it is the diagonal from the right angle, so triangle $ABC$ is right-angled with two known legs: its area is half their product, and its hypotenuse $AC$ comes free from the Pythagorean Theorem ✓. Route two, count knowns instead of shapes. After the dashed diagonal, triangle $ACD$ has all three sides known — $CD$ and $DA$ were given and $AC$ is now computable — so it is fully determined, and its area follows. Two determined triangles add to one determined quadrilateral, which is what "find the area" was asking for ✓. (An altitude from $D$ CANNOT BE MEASURED FROM WHAT IS GIVEN, since we know no angle at $C$ or $D$ to place its foot ✗. The midpoint segment is a length, not a decomposition, so it LEAVES THE REGION IN ONE UNSPLIT PIECE ✗. The parallel through $D$ builds a new triangle whose sides are ALL UNKNOWN, trading one hard region for another ✗.)',
    },
    {
      q: 'A tangent line touches a circle with center $O$ at the point $T$, and $P$ is a point on that tangent line, outside the circle. The radius and the distance $OP$ are known, and $PT$ is wanted. Which auxiliary line comes first?',
      fig: {
        view: [-4, -4, 8.5, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [7, 0], b: [1.286, 2.711] },
          { t: 'label', p: [4.143, 1.356], text: '?', dx: 6, dy: -8 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [1.286, 2.711], label: 'T', dx: -4, dy: -12 },
          { t: 'point', p: [7, 0], label: 'P', dx: 12, dy: 4 },
        ],
      },
      choices: [
        'the diameter drawn parallel to $\\overline{PT}$',
        'a second tangent from $P$, touching the circle again',
        'the chord from $T$ to the point where $\\overline{OP}$ crosses the circle',
        'the radius $\\overline{OT}$, drawn to the point of tangency',
      ],
      answer: 3,
      solution:
        'Route one, let the theorem choose the line. The one theorem that mentions a point of tangency says the radius to that point is perpendicular to the tangent. Drawing $\\overline{OT}$ dashed therefore manufactures a right angle at $T$ out of nothing, and a right angle is exactly the hypothesis the Pythagorean Theorem is waiting for ✓. Route two, count what a triangle needs. To pin down $PT$ we need a triangle containing it whose other parts are known. The vertices available are $O$, $T$, and $P$; two of its sides, the radius and $OP$, are already given, so drawing $\\overline{OT}$ (and $\\overline{OP}$) closes the only triangle whose sides are known, and the tangency angle tells us which of them is the hypotenuse ✓. (A parallel diameter creates no triangle containing $PT$, so it IS A LINE WITH NOTHING ATTACHED TO IT ✗. A second tangent is a genuine theorem — the two tangent segments from $P$ are equal — but it PROVES ONE UNKNOWN EQUALS ANOTHER UNKNOWN and never produces a number ✗. The chord to the near point of the circle is tempting because it uses the given $OP$, but that chord IS NOT PERPENDICULAR TO THE TANGENT and makes a triangle with two unknown sides ✗.)',
    },
  ],
  // s2 — a path that bends between two parallel lines.
  [
    {
      q: 'The two horizontal lines are parallel, and a path from $A$ to $C$ bends at $B$. The path makes a $29^\\circ$ angle with the top line and a $47^\\circ$ angle with the bottom line. Find the bend angle $\\angle ABC$.',
      fig: {
        view: [1, -1.2, 7, 4.4],
        elems: [
          { t: 'line', a: [1.2, 3.2], b: [6.8, 3.2] },
          { t: 'line', a: [1.2, 0], b: [6.8, 0] },
          { t: 'seg', a: [1.933, 3.2], b: [5, 1.5] },
          { t: 'seg', a: [5, 1.5], b: [3.601, 0] },
          { t: 'seg', a: [1.5, 1.5], b: [6.5, 1.5], dash: true },
          { t: 'angle', at: [1.933, 3.2], from: [6.5, 3.2], to: [5, 1.5], r: 0.8, label: '29' },
          { t: 'angle', at: [3.601, 0], from: [6.5, 0], to: [5, 1.5], r: 0.7, label: '47' },
          { t: 'angle', at: [5, 1.5], from: [1.933, 3.2], to: [3.601, 0], r: 0.55, label: '?' },
          { t: 'point', p: [1.933, 3.2], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [5, 1.5], label: 'B', dx: 14, dy: 0 },
          { t: 'point', p: [3.601, 0], label: 'C', dx: 0, dy: 14 },
        ],
      },
      choices: ['$18^\\circ$', '$29^\\circ$', '$47^\\circ$', '$76^\\circ$'],
      answer: 3,
      solution:
        'Route one, the parallel through a point. Through $B$ draw a line parallel to both given lines (dashed). It splits $\\angle ABC$ into an upper piece and a lower piece. The upper piece and the $29^\\circ$ angle at $A$ are alternate interior angles between parallels, so the upper piece is $29^\\circ$; the lower piece and the $47^\\circ$ angle at $C$ are alternate interior angles too, so the lower piece is $47^\\circ$. Adding, $\\angle ABC = 29^\\circ + 47^\\circ = 76^\\circ$ ✓. Route two, an extension instead of a parallel. Extend $\\overline{AB}$ past $B$ until it meets the bottom line at $Q$. The angle it makes with the bottom line at $Q$ is $29^\\circ$, alternate interior with the angle at $A$. Now triangle $BQC$ has angles $29^\\circ$ at $Q$ and $47^\\circ$ at $C$, so its third angle is $\\angle QBC = 180^\\circ - 29^\\circ - 47^\\circ = 104^\\circ$. Since $A$, $B$, $Q$ are collinear, $\\angle ABC$ and $\\angle QBC$ are supplementary: $\\angle ABC = 180^\\circ - 104^\\circ = 76^\\circ$ ✓. (The choice $18^\\circ$ is SUBTRACTING THE TWO GIVEN ANGLES, though the parallel through $B$ stacks the pieces on top of each other rather than cancelling them ✗; the choice $29^\\circ$ is REPORTING ONLY THE UPPER PIECE and forgetting the lower one ✗; the choice $47^\\circ$ is REPORTING ONLY THE LOWER PIECE ✗.)',
    },
    {
      q: 'The two horizontal lines are parallel and the path bends at $B$, making a $63^\\circ$ angle with the top line and a $44^\\circ$ angle with the bottom line. How large is the bend angle $\\angle ABC$?',
      fig: {
        view: [1, -1.2, 7, 4.4],
        elems: [
          { t: 'line', a: [1.2, 3.2], b: [6.8, 3.2] },
          { t: 'line', a: [1.2, 0], b: [6.8, 0] },
          { t: 'seg', a: [4.134, 3.2], b: [5, 1.5] },
          { t: 'seg', a: [5, 1.5], b: [3.447, 0] },
          { t: 'seg', a: [1.5, 1.5], b: [6.5, 1.5], dash: true },
          { t: 'angle', at: [4.134, 3.2], from: [6.5, 3.2], to: [5, 1.5], r: 0.55, label: '63' },
          { t: 'angle', at: [3.447, 0], from: [6.5, 0], to: [5, 1.5], r: 0.7, label: '44' },
          { t: 'angle', at: [5, 1.5], from: [4.134, 3.2], to: [3.447, 0], r: 0.5, label: '?' },
          { t: 'point', p: [4.134, 3.2], label: 'A', dx: -4, dy: -10 },
          { t: 'point', p: [5, 1.5], label: 'B', dx: 14, dy: 0 },
          { t: 'point', p: [3.447, 0], label: 'C', dx: 0, dy: 14 },
        ],
      },
      choices: ['$19^\\circ$', '$107^\\circ$', '$63^\\circ$', '$73^\\circ$'],
      answer: 1,
      solution:
        'Route one, the parallel through a point. The dashed line through $B$, parallel to both given lines, cuts the bend into two pieces. Alternate interior angles copy the $63^\\circ$ at $A$ into the upper piece and the $44^\\circ$ at $C$ into the lower piece, so $\\angle ABC = 63^\\circ + 44^\\circ = 107^\\circ$ ✓. Route two, an extension instead of a parallel. Extend $\\overline{AB}$ past $B$ until it meets the bottom line at $Q$. The angle it makes with the bottom line at $Q$ is $63^\\circ$, alternate interior with the angle at $A$. Triangle $BQC$ now has $63^\\circ$ at $Q$ and $44^\\circ$ at $C$, so its third angle is $\\angle QBC = 180^\\circ - 63^\\circ - 44^\\circ = 73^\\circ$. Points $A$, $B$, $Q$ are collinear, so $\\angle ABC = 180^\\circ - 73^\\circ = 107^\\circ$ ✓. (The choice $19^\\circ$ is SUBTRACTING THE TWO GIVEN ANGLES where the parallel through $B$ stacks them ✗; the choice $63^\\circ$ is REPORTING ONLY THE UPPER PIECE ✗; the choice $73^\\circ$ is HANDING BACK THE TRIANGLE ANGLE $\\angle QBC$, the supplement of the bend, instead of the bend itself ✗.)',
    },
    {
      q: 'The two horizontal lines are parallel and the path bends at $B$. The bend measures $118^\\circ$, and the path meets the top line at a $52^\\circ$ angle. What angle does the path make with the bottom line at $C$?',
      fig: {
        view: [3, -1.2, 7, 4.4],
        elems: [
          { t: 'line', a: [3.2, 3.2], b: [6.8, 3.2] },
          { t: 'line', a: [3.2, 0], b: [6.8, 0] },
          { t: 'seg', a: [3.672, 3.2], b: [5, 1.5] },
          { t: 'seg', a: [5, 1.5], b: [4.332, 0] },
          { t: 'seg', a: [3.2, 1.5], b: [6.5, 1.5], dash: true },
          { t: 'angle', at: [3.672, 3.2], from: [6.5, 3.2], to: [5, 1.5], r: 0.6, label: '52' },
          { t: 'angle', at: [4.332, 0], from: [6.5, 0], to: [5, 1.5], r: 0.5, label: '?' },
          { t: 'angle', at: [5, 1.5], from: [3.672, 3.2], to: [4.332, 0], r: 0.45, label: '118' },
          { t: 'point', p: [3.672, 3.2], label: 'A', dx: -4, dy: -10 },
          { t: 'point', p: [5, 1.5], label: 'B', dx: 14, dy: 0 },
          { t: 'point', p: [4.332, 0], label: 'C', dx: 6, dy: 14 },
        ],
      },
      choices: ['$66^\\circ$', '$62^\\circ$', '$170^\\circ$', '$38^\\circ$'],
      answer: 0,
      solution:
        'Route one, the parallel through a point. The dashed line through $B$ parallel to both given lines splits the $118^\\circ$ bend into an upper piece and a lower piece. Alternate interior angles make the upper piece equal to the $52^\\circ$ angle at $A$, so the lower piece is $118^\\circ - 52^\\circ = 66^\\circ$, and alternate interior angles again make the angle at $C$ equal to that lower piece: $66^\\circ$ ✓. Route two, an extension and a triangle. Extend $\\overline{AB}$ past $B$ until it meets the bottom line at $Q$; the angle at $Q$ is $52^\\circ$, alternate interior with the angle at $A$. Since $A$, $B$, $Q$ are collinear, $\\angle QBC = 180^\\circ - 118^\\circ = 62^\\circ$. The angle sum of triangle $BQC$ then gives the angle at $C$: $180^\\circ - 52^\\circ - 62^\\circ = 66^\\circ$ ✓. (The choice $62^\\circ$ is HANDING BACK THE SUPPLEMENT OF THE BEND, the angle inside the little triangle at $B$, rather than the angle at $C$ ✗; the choice $170^\\circ$ is ADDING THE BEND AND THE TOP ANGLE when the parallel line shows the top angle is a part of the bend, not an addition to it ✗; the choice $38^\\circ$ is TAKING THE COMPLEMENT OF THE TOP ANGLE, as though the path met the top line at a right angle somewhere ✗.)',
    },
  ],
  // s3 — a tangent segment, unlocked by the radius to the point of tangency.
  [
    {
      q: 'Point $P$ is $25$ units from the center $O$ of a circle of radius $7$. A tangent from $P$ touches the circle at $T$. How long is $\\overline{PT}$?',
      fig: {
        view: [-8, -8, 26, 8],
        elems: [
          { t: 'circle', c: [0, 0], r: 7 },
          { t: 'seg', a: [25, 0], b: [1.96, 6.72] },
          { t: 'seg', a: [0, 0], b: [1.96, 6.72], dash: true },
          { t: 'seg', a: [0, 0], b: [25, 0], dash: true },
          { t: 'right', at: [1.96, 6.72], from: [0, 0], to: [25, 0] },
          { t: 'label', p: [0.98, 3.36], text: '7', dx: -10, dy: -4 },
          { t: 'label', p: [12.5, 0], text: '25', dx: 0, dy: 16 },
          { t: 'label', p: [13.48, 3.36], text: '?', dx: 8, dy: -6 },
          { t: 'point', p: [0, 0], label: 'O', dx: -12, dy: 10 },
          { t: 'point', p: [1.96, 6.72], label: 'T', dx: -4, dy: -12 },
          { t: 'point', p: [25, 0], label: 'P', dx: 12, dy: 8 },
        ],
      },
      choices: ['$\\sqrt{674}$', '$24$', '$18$', '$25$'],
      answer: 1,
      solution:
        'Route one, the radius to the point of tangency. Draw $\\overline{OT}$ dashed; a tangent is perpendicular to the radius at the point where it touches, so $\\angle OTP = 90^\\circ$. Draw $\\overline{OP}$ dashed as well and triangle $OTP$ is right-angled with hypotenuse $OP = 25$ and leg $OT = 7$. Then $PT = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$ ✓. Route two, the secant through the center. Draw the line $OP$ all the way through the circle; it is a secant meeting the circle at the near point $M$ and the far point $N$, with $PM = 25 - 7 = 18$ and $PN = 25 + 7 = 32$. The power of the point $P$ says the tangent squared equals that product: $PT^2 = 18 \\cdot 32 = 576$, so $PT = 24$ ✓. (The choice $\\sqrt{674}$ is USING $25$ AS A LEG, adding $625 + 49$ when the longest side of a right triangle must be the one opposite the right angle ✗; the choice $18$ is SUBTRACTING THE LENGTHS THEMSELVES, $25 - 7$, instead of their squares ✗; the choice $25$ is HANDING BACK $OP$, the hypotenuse, rather than the leg that was asked for ✗.)',
    },
    {
      q: 'From a point $P$ that is $29$ units from the center $O$ of a circle of radius $20$, a tangent segment touches the circle at $T$. Find $PT$.',
      fig: {
        view: [-21, -21, 30, 21],
        elems: [
          { t: 'circle', c: [0, 0], r: 20 },
          { t: 'seg', a: [29, 0], b: [13.793, 14.483] },
          { t: 'seg', a: [0, 0], b: [13.793, 14.483], dash: true },
          { t: 'seg', a: [0, 0], b: [29, 0], dash: true },
          { t: 'right', at: [13.793, 14.483], from: [0, 0], to: [29, 0] },
          { t: 'label', p: [6.897, 7.241], text: '20', dx: -12, dy: -4 },
          { t: 'label', p: [14.5, 0], text: '29', dx: 0, dy: 16 },
          { t: 'label', p: [21.397, 7.241], text: '?', dx: 10, dy: -4 },
          { t: 'point', p: [0, 0], label: 'O', dx: -12, dy: 10 },
          { t: 'point', p: [13.793, 14.483], label: 'T', dx: -6, dy: -10 },
          { t: 'point', p: [29, 0], label: 'P', dx: 12, dy: 8 },
        ],
      },
      choices: ['$9$', '$\\sqrt{1241}$', '$20$', '$21$'],
      answer: 3,
      solution:
        'Route one, the radius to the point of tangency. The dashed radius $\\overline{OT}$ meets the tangent at a right angle, so triangle $OTP$ is right with hypotenuse $OP = 29$ and leg $OT = 20$. Therefore $PT = \\sqrt{29^2 - 20^2} = \\sqrt{841 - 400} = \\sqrt{441} = 21$ ✓. Route two, the secant through the center. The line through $O$ and $P$ cuts the circle at the near point, $29 - 20 = 9$ from $P$, and at the far point, $29 + 20 = 49$ from $P$. By the power of the point $P$, the tangent squared equals the product of those two distances: $PT^2 = 9 \\cdot 49 = 441$, so $PT = 21$ ✓. (The choice $9$ is SUBTRACTING THE RADIUS FROM $OP$, which measures the gap between $P$ and the circle along $\\overline{OP}$, not along the tangent ✗; the choice $\\sqrt{1241}$ is TREATING $29$ AS A LEG and adding the squares ✗; the choice $20$ is HANDING BACK THE RADIUS ✗.)',
    },
    {
      q: 'A tangent from a point $P$ touches a circle of radius $11$ at $T$, and the tangent segment $\\overline{PT}$ is $60$ units long. How far is $P$ from the center $O$?',
      fig: {
        view: [-13, -13, 64, 13],
        elems: [
          { t: 'circle', c: [0, 0], r: 11 },
          { t: 'seg', a: [61, 0], b: [1.984, 10.82] },
          { t: 'seg', a: [0, 0], b: [1.984, 10.82], dash: true },
          { t: 'seg', a: [0, 0], b: [61, 0], dash: true },
          { t: 'right', at: [1.984, 10.82], from: [0, 0], to: [61, 0] },
          { t: 'label', p: [0.992, 5.41], text: '11', dx: -12, dy: -2 },
          { t: 'label', p: [31.492, 5.41], text: '60', dx: 6, dy: -8 },
          { t: 'label', p: [30.5, 0], text: '?', dx: 0, dy: 16 },
          { t: 'point', p: [0, 0], label: 'O', dx: -12, dy: 10 },
          { t: 'point', p: [1.984, 10.82], label: 'T', dx: -6, dy: -10 },
          { t: 'point', p: [61, 0], label: 'P', dx: 12, dy: 8 },
        ],
      },
      choices: ['$49$', '$71$', '$61$', '$\\sqrt{3479}$'],
      answer: 2,
      solution:
        'Route one, the radius to the point of tangency. Drawing $\\overline{OT}$ dashed creates the right angle at $T$, so $\\overline{OP}$ is the hypotenuse of a right triangle whose legs are the radius $11$ and the tangent $60$: $OP = \\sqrt{11^2 + 60^2} = \\sqrt{121 + 3600} = \\sqrt{3721} = 61$ ✓. Route two, the secant through the center. Let $d = OP$. The line through $O$ and $P$ meets the circle at distances $d - 11$ and $d + 11$ from $P$, and the power of the point says $PT^2 = (d - 11)(d + 11)$. So $3600 = d^2 - 121$, giving $d^2 = 3721$ and $d = 61$ ✓. (The choice $49$ is SUBTRACTING THE GIVEN LENGTHS, $60 - 11$, instead of combining their squares ✗; the choice $71$ is ADDING THE LENGTHS THEMSELVES, $60 + 11$, which travels around two sides of the triangle rather than across it ✗; the choice $\\sqrt{3479}$ is TREATING $60$ AS THE HYPOTENUSE and subtracting under the root, though the right angle sits at $T$ and the longest side must lie opposite it ✗.)',
    },
  ],
  // s4 — a right trapezoid, cut into a rectangle plus one right triangle.
  [
    {
      q: 'In trapezoid $ABCD$, side $\\overline{DC}$ of length $9$ is parallel to side $\\overline{AB}$ of length $21$, the left side $\\overline{AD}$ is perpendicular to both, and the slanted side $\\overline{BC}$ has length $15$. Find the height of the trapezoid.',
      fig: {
        view: [-2, -2, 23, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [21, 0], [9, 9], [0, 9]], fill: false },
          { t: 'seg', a: [9, 9], b: [9, 0], dash: true },
          { t: 'right', at: [0, 0], from: [21, 0], to: [0, 9] },
          { t: 'right', at: [9, 0], from: [21, 0], to: [9, 9] },
          { t: 'label', p: [10.5, 0], text: '21', dx: 0, dy: 16 },
          { t: 'label', p: [4.5, 9], text: '9', dx: 0, dy: -10 },
          { t: 'label', p: [15, 4.5], text: '15', dx: 12, dy: -4 },
          { t: 'label', p: [0, 4.5], text: '?', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [21, 0], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [9, 9], label: 'C', dx: 8, dy: -8 },
          { t: 'point', p: [0, 9], label: 'D', dx: -10, dy: -6 },
        ],
      },
      choices: ['$9$', '$12$', '$\\sqrt{306}$', '$6$'],
      answer: 0,
      solution:
        'Route one, drop an altitude. From $C$ drop a dashed altitude to $\\overline{AB}$; together with $\\overline{AD}$ it cuts the trapezoid into a rectangle of width $9$ and one right triangle. The triangle’s horizontal leg is the part of the long base left over, $21 - 9 = 12$, and its hypotenuse is the slant side $15$, so the height is $\\sqrt{15^2 - 12^2} = \\sqrt{225 - 144} = \\sqrt{81} = 9$ ✓. Route two, coordinates, with no altitude drawn at all. Put $A$ at the origin and $\\overline{AB}$ along the $x$-axis, so $B = (21, 0)$. The left side is perpendicular to both parallel sides, so $D = (0, h)$ where $h$ is the height, and $C$ sits $9$ to the right of $D$ at $(9, h)$. The distance formula applied to $\\overline{BC}$ gives $(21 - 9)^2 + h^2 = 15^2$, so $h^2 = 225 - 144 = 81$ and $h = 9$ ✓. (The choice $12$ is REPORTING THE HORIZONTAL LEG, the overhang along the base, instead of the vertical one ✗; the choice $\\sqrt{306}$ is ADDING THE SQUARES, treating the slant side as a leg when it is the longest side of the right triangle ✗; the choice $6$ is HALVING THE OVERHANG as if the trapezoid were isosceles with two end triangles, when this one has a square corner on the left and only one end triangle ✗.)',
    },
    {
      q: 'A trapezoid has parallel sides $5$ and $25$, the side joining them on the left is perpendicular to both, and the slanted side measures $25$. How tall is the trapezoid?',
      fig: {
        view: [-2.5, -2.5, 27, 18],
        elems: [
          { t: 'poly', pts: [[0, 0], [25, 0], [5, 15], [0, 15]], fill: false },
          { t: 'seg', a: [5, 15], b: [5, 0], dash: true },
          { t: 'right', at: [0, 0], from: [25, 0], to: [0, 15] },
          { t: 'right', at: [5, 0], from: [25, 0], to: [5, 15] },
          { t: 'label', p: [12.5, 0], text: '25', dx: 0, dy: 16 },
          { t: 'label', p: [2.5, 15], text: '5', dx: 0, dy: -10 },
          { t: 'label', p: [15, 7.5], text: '25', dx: 12, dy: -4 },
          { t: 'label', p: [0, 7.5], text: '?', dx: -12, dy: 0 },
        ],
      },
      choices: ['$20$', '$10$', '$15$', '$\\sqrt{1250}$'],
      answer: 2,
      solution:
        'Route one, drop an altitude. The dashed altitude from the top-right vertex leaves a rectangle $5$ wide and a right triangle whose horizontal leg is $25 - 5 = 20$ and whose hypotenuse is the slant side $25$. The height is $\\sqrt{25^2 - 20^2} = \\sqrt{625 - 400} = \\sqrt{225} = 15$ ✓. Route two, slide the slant side across. Through the top-left vertex draw a line parallel to the slant side; it meets the long base at a point $E$. The figure cut off on the right is a parallelogram, so $EB$ equals the short base, $5$, and the new segment equals the slant side, $25$. That leaves $AE = 25 - 5 = 20$ along the base, and the triangle on the left has a square corner at $A$, hypotenuse $25$, and base $20$, so its vertical side is $\\sqrt{625 - 400} = 15$ ✓. (The choice $20$ is REPORTING THE HORIZONTAL OVERHANG rather than the height ✗; the choice $10$ is HALVING THE OVERHANG, the habit that belongs to isosceles trapezoids with two end triangles ✗; the choice $\\sqrt{1250}$ is ADDING THE SQUARES instead of subtracting, which makes the height longer than the slant side it hangs from ✗.)',
    },
    {
      q: 'A trapezoid has parallel sides $12$ and $27$ and a height of $8$, and the side joining the two parallel sides on the left is perpendicular to both. How long is the slanted side?',
      fig: {
        view: [-2, -2, 29, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [27, 0], [12, 8], [0, 8]], fill: false },
          { t: 'seg', a: [12, 8], b: [12, 0], dash: true },
          { t: 'right', at: [0, 0], from: [27, 0], to: [0, 8] },
          { t: 'right', at: [12, 0], from: [27, 0], to: [12, 8] },
          { t: 'label', p: [13.5, 0], text: '27', dx: 0, dy: 16 },
          { t: 'label', p: [6, 8], text: '12', dx: 0, dy: -10 },
          { t: 'label', p: [0, 4], text: '8', dx: -12, dy: 0 },
          { t: 'label', p: [19.5, 4], text: '?', dx: 12, dy: -4 },
        ],
      },
      choices: ['$15$', '$17$', '$\\sqrt{161}$', '$23$'],
      answer: 1,
      solution:
        'Route one, drop an altitude. The dashed altitude from the top-right vertex has length $8$, the same as the perpendicular left side, and it cuts off a right triangle whose horizontal leg is $27 - 12 = 15$. The slant side is that triangle’s hypotenuse: $\\sqrt{15^2 + 8^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17$ ✓. Route two, coordinates, with no altitude drawn. Put the square corner at the origin with the long base along the $x$-axis: the corners are $(0, 0)$, $(27, 0)$, $(12, 8)$, and $(0, 8)$, since the left side is perpendicular to both parallel sides and the height is $8$. The slant side runs from $(27, 0)$ to $(12, 8)$, and the distance formula gives $\\sqrt{(27 - 12)^2 + (8 - 0)^2} = \\sqrt{289} = 17$ ✓. (The choice $15$ is REPORTING THE HORIZONTAL RUN and forgetting the slant also climbs $8$ ✗; the choice $\\sqrt{161}$ is SUBTRACTING THE SQUARES, which finds a leg when the hypotenuse was wanted ✗; the choice $23$ is ADDING THE TWO LEGS, $15 + 8$, the path around the corner rather than the straight line across ✗.)',
    },
  ],
  // s5 — a quadrilateral with a right angle, split by its diagonal.
  [
    {
      q: 'In quadrilateral $ABCD$, $\\angle B = 90^\\circ$, $AB = 15$, $BC = 20$, $CD = 7$, and $DA = 24$. What is the area of $ABCD$?',
      fig: {
        view: [-3, -3, 26, 18],
        elems: [
          { t: 'poly', pts: [[0, 15], [0, 0], [20, 0], [22.464, 6.552]], fill: false },
          { t: 'seg', a: [0, 15], b: [20, 0], dash: true },
          { t: 'right', at: [0, 0], from: [20, 0], to: [0, 15] },
          { t: 'label', p: [0, 7.5], text: '15', dx: -12, dy: 0 },
          { t: 'label', p: [10, 0], text: '20', dx: 0, dy: 16 },
          { t: 'label', p: [21.232, 3.276], text: '7', dx: 14, dy: 4 },
          { t: 'label', p: [11.232, 10.776], text: '24', dx: 6, dy: -10 },
          { t: 'point', p: [0, 15], label: 'A', dx: -10, dy: -6 },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
          { t: 'point', p: [20, 0], label: 'C', dx: 4, dy: 14 },
          { t: 'point', p: [22.464, 6.552], label: 'D', dx: 12, dy: -4 },
        ],
      },
      choices: ['$150$', '$318$', '$234$', '$450$'],
      answer: 2,
      solution:
        'Route one, draw the diagonal. The dashed diagonal $\\overline{AC}$ splits $ABCD$ into two triangles. Triangle $ABC$ has the right angle at $B$, so its legs are $15$ and $20$, its area is $\\frac{1}{2} \\cdot 15 \\cdot 20 = 150$, and $AC = \\sqrt{225 + 400} = \\sqrt{625} = 25$. In triangle $ACD$ the sides are $25$, $7$, $24$, and $7^2 + 24^2 = 49 + 576 = 625 = 25^2$, so it too is right-angled, at $D$, with area $\\frac{1}{2} \\cdot 7 \\cdot 24 = 84$. Total: $150 + 84 = 234$ ✓. Route two, the same diagonal but no right angles at all. Use the three-sides area formula on each piece. For triangle $ABC$ the semiperimeter is $\\frac{15 + 20 + 25}{2} = 30$, and the area is $\\sqrt{30 \\cdot 15 \\cdot 10 \\cdot 5} = \\sqrt{22500} = 150$. For triangle $ACD$ the semiperimeter is $\\frac{25 + 7 + 24}{2} = 28$, and the area is $\\sqrt{28 \\cdot 3 \\cdot 21 \\cdot 4} = \\sqrt{7056} = 84$. The two areas add to $234$ ✓. (The choice $150$ is FORGETTING TRIANGLE $ACD$ and handing back only the right triangle at $B$ ✗; the choice $318$ is FORGETTING TO HALVE, adding the whole product $7 \\cdot 24$ to $150$ ✗; the choice $450$ is USING $24$ AND $25$ AS THE LEGS of the second triangle, though $25$ is its longest side and lies opposite the right angle ✗.)',
    },
    {
      q: 'Quadrilateral $ABCD$ has a right angle at $B$, with $AB = 9$, $BC = 12$, $CD = 8$, and $DA = 17$. Find its area.',
      fig: {
        view: [-2.5, -2.5, 19, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 9], [0, 0], [12, 0], [16.8, 6.4]], fill: false },
          { t: 'seg', a: [0, 9], b: [12, 0], dash: true },
          { t: 'right', at: [0, 0], from: [12, 0], to: [0, 9] },
          { t: 'label', p: [0, 4.5], text: '9', dx: -12, dy: 0 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 16 },
          { t: 'label', p: [14.4, 3.2], text: '8', dx: 12, dy: 4 },
          { t: 'label', p: [8.4, 7.7], text: '17', dx: -6, dy: -8 },
          { t: 'point', p: [0, 9], label: 'A', dx: -10, dy: -6 },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
          { t: 'point', p: [12, 0], label: 'C', dx: 4, dy: 14 },
          { t: 'point', p: [16.8, 6.4], label: 'D', dx: 12, dy: -4 },
        ],
      },
      choices: ['$114$', '$60$', '$122$', '$174$'],
      answer: 0,
      solution:
        'Route one, draw the diagonal. The dashed $\\overline{AC}$ cuts the quadrilateral in two. Triangle $ABC$ is right-angled at $B$ with legs $9$ and $12$, so its area is $\\frac{1}{2} \\cdot 9 \\cdot 12 = 54$ and $AC = \\sqrt{81 + 144} = \\sqrt{225} = 15$. Triangle $ACD$ has sides $15$, $8$, $17$, and $15^2 + 8^2 = 225 + 64 = 289 = 17^2$, so it is right-angled at $C$ with area $\\frac{1}{2} \\cdot 15 \\cdot 8 = 60$. The total is $54 + 60 = 114$ ✓. Route two, coordinates. Put the right angle at the origin: $B = (0, 0)$, $A = (0, 9)$, $C = (12, 0)$. The fourth vertex sits at $D = (16.8, 6.4)$, which checks out since $CD = \\sqrt{4.8^2 + 6.4^2} = \\sqrt{23.04 + 40.96} = 8$ and $DA = \\sqrt{16.8^2 + 2.6^2} = \\sqrt{282.24 + 6.76} = 17$. Walking the four corners in order and using the coordinate area rule gives $\\frac{1}{2}|0 \\cdot 0 - 0 \\cdot 9| + \\frac{1}{2}|0 \\cdot 0 - 12 \\cdot 0| + \\frac{1}{2}|12 \\cdot 6.4 - 16.8 \\cdot 0| + \\frac{1}{2}|16.8 \\cdot 9 - 0 \\cdot 6.4| = 0 + 0 + 38.4 + 75.6 = 114$ ✓. (The choice $60$ is FORGETTING TRIANGLE $ABC$ ✗; the choice $122$ is USING $8$ AND $17$ AS LEGS, $54 + \\frac{1}{2} \\cdot 8 \\cdot 17$, when $17$ is the longest side of that triangle ✗; the choice $174$ is FORGETTING TO HALVE the second triangle, $54 + 15 \\cdot 8$ ✗.)',
    },
    {
      q: 'Quadrilateral $ABCD$ has right angles at $B$ and at $D$, with $AB = 14$, $BC = 48$, and $DA = 30$. How long is $\\overline{CD}$?',
      fig: {
        view: [-3.5, -3.5, 52, 36],
        elems: [
          { t: 'poly', pts: [[0, 14], [0, 0], [48, 0], [24, 32]], fill: false },
          { t: 'seg', a: [0, 14], b: [48, 0], dash: true },
          { t: 'right', at: [0, 0], from: [48, 0], to: [0, 14] },
          { t: 'right', at: [24, 32], from: [0, 14], to: [48, 0] },
          { t: 'label', p: [0, 7], text: '14', dx: -14, dy: 0 },
          { t: 'label', p: [24, 0], text: '48', dx: 0, dy: 16 },
          { t: 'label', p: [12, 23], text: '30', dx: -14, dy: -2 },
          { t: 'label', p: [36, 16], text: '?', dx: 14, dy: -2 },
          { t: 'point', p: [0, 14], label: 'A', dx: -10, dy: -6 },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
          { t: 'point', p: [48, 0], label: 'C', dx: 10, dy: 12 },
          { t: 'point', p: [24, 32], label: 'D', dx: 0, dy: -10 },
        ],
      },
      choices: ['$20$', '$\\sqrt{3400}$', '$50$', '$40$'],
      answer: 3,
      solution:
        'Route one, draw the diagonal that joins the two vertices with no right angle at them. The dashed $\\overline{AC}$ is the hypotenuse of right triangle $ABC$, so $AC = \\sqrt{14^2 + 48^2} = \\sqrt{196 + 2304} = \\sqrt{2500} = 50$. It is also the hypotenuse of right triangle $ADC$, whose other leg is $DA = 30$, so $CD = \\sqrt{50^2 - 30^2} = \\sqrt{2500 - 900} = \\sqrt{1600} = 40$ ✓. Route two, coordinates placed at the far right angle. Put $D$ at the origin with $\\overline{DA}$ up the $y$-axis and $\\overline{DC}$ along the $x$-axis, which is legitimate because the angle at $D$ is square: $D = (0, 0)$, $A = (0, 30)$, $C = (t, 0)$ where $t$ is the length we want. The square of the distance from $A$ to $C$ is then $t^2 + 900$. The right angle at $B$ pins that same distance from the other side: $AC^2 = 14^2 + 48^2 = 2500$. So $t^2 + 900 = 2500$, $t^2 = 1600$, and $t = 40$ ✓. (The choice $20$ is SUBTRACTING THE LENGTHS, $50 - 30$, instead of their squares ✗; the choice $\\sqrt{3400}$ is ADDING $30^2$ AND $50^2$, treating the shared diagonal as a leg of the second triangle when it is its hypotenuse ✗; the choice $50$ is HANDING BACK THE DIAGONAL, which is the tool, not the answer ✗.)',
    },
  ],
  // s6 — the dart, opened up by extending the segment into the dent.
  [
    {
      q: 'In the dart-shaped figure $ABDC$, $\\angle A = 52^\\circ$, $\\angle ABD = 31^\\circ$, and $\\angle ACD = 24^\\circ$. Find $\\angle BDC$.',
      fig: {
        view: [-3.2, -0.6, 3.6, 7],
        elems: [
          { t: 'poly', pts: [[0, 6], [-2.142, 1.609], [0, 3], [2.477, 0.922]], fill: false },
          { t: 'seg', a: [0, 3], b: [0, 0.4], dash: true },
          { t: 'angle', at: [0, 6], from: [-2.142, 1.609], to: [2.477, 0.922], r: 0.9, label: '52' },
          { t: 'angle', at: [-2.142, 1.609], from: [0, 6], to: [0, 3], r: 0.8, label: '31' },
          { t: 'angle', at: [2.477, 0.922], from: [0, 3], to: [0, 6], r: 0.8, label: '24' },
          { t: 'angle', at: [0, 3], from: [-2.142, 1.609], to: [2.477, 0.922], r: 0.5, label: '?' },
          { t: 'point', p: [0, 6], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [-2.142, 1.609], label: 'B', dx: -12, dy: 4 },
          { t: 'point', p: [0, 3], label: 'D', dx: 12, dy: -4 },
          { t: 'point', p: [2.477, 0.922], label: 'C', dx: 12, dy: 6 },
        ],
      },
      choices: ['$83^\\circ$', '$55^\\circ$', '$73^\\circ$', '$107^\\circ$'],
      answer: 3,
      solution:
        'Route one, extend the segment into the dent. Extend $\\overline{AD}$ past $D$ (dashed). The extension splits $\\angle BDC$ into two angles, and each one is an exterior angle of a triangle, equal to the sum of the two remote interior angles. On the left, the piece equals $\\angle BAD + 31^\\circ$; on the right, it equals $\\angle DAC + 24^\\circ$. Adding, $\\angle BDC = (\\angle BAD + \\angle DAC) + 31^\\circ + 24^\\circ = 52^\\circ + 55^\\circ = 107^\\circ$ ✓. Route two, count the quadrilateral instead. $ABDC$ is a quadrilateral, so its four interior angles sum to $360^\\circ$. At $D$ the interior angle of the dart is the large one going the long way round, which measures $360^\\circ - \\angle BDC$. So $52^\\circ + 31^\\circ + 24^\\circ + (360^\\circ - \\angle BDC) = 360^\\circ$, which leaves $\\angle BDC = 52^\\circ + 31^\\circ + 24^\\circ = 107^\\circ$ ✓. (The choice $83^\\circ$ is ADDING ONLY THE LEFT-HAND PAIR, $52^\\circ + 31^\\circ$, and dropping the angle at $C$ ✗; the choice $55^\\circ$ is LEAVING OUT $\\angle A$, adding only the two small angles ✗; the choice $73^\\circ$ is TAKING THE SUPPLEMENT, $180^\\circ - 107^\\circ$, as though $\\angle BDC$ were the angle on a straight line ✗.)',
    },
    {
      q: 'In the dart-shaped figure $ABDC$, $\\angle A = 65^\\circ$, $\\angle ABD = 18^\\circ$, and $\\angle ACD = 39^\\circ$. How large is $\\angle BDC$?',
      fig: {
        view: [-4.7, -1.4, 3.8, 7],
        elems: [
          { t: 'poly', pts: [[0, 6], [-3.607, -0.248], [0, 3], [2.628, 2.246]], fill: false },
          { t: 'seg', a: [0, 3], b: [0, 0.6], dash: true },
          { t: 'angle', at: [0, 6], from: [-3.607, -0.248], to: [2.628, 2.246], r: 0.9, label: '65' },
          { t: 'angle', at: [-3.607, -0.248], from: [0, 6], to: [0, 3], r: 1, label: '18' },
          { t: 'angle', at: [2.628, 2.246], from: [0, 3], to: [0, 6], r: 0.8, label: '39' },
          { t: 'angle', at: [0, 3], from: [-3.607, -0.248], to: [2.628, 2.246], r: 0.5, label: '?' },
          { t: 'point', p: [0, 6], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [-3.607, -0.248], label: 'B', dx: -12, dy: 6 },
          { t: 'point', p: [0, 3], label: 'D', dx: 12, dy: -4 },
          { t: 'point', p: [2.628, 2.246], label: 'C', dx: 12, dy: 2 },
        ],
      },
      choices: ['$104^\\circ$', '$122^\\circ$', '$57^\\circ$', '$58^\\circ$'],
      answer: 1,
      solution:
        'Route one, extend the segment into the dent. The dashed extension of $\\overline{AD}$ past $D$ breaks $\\angle BDC$ into two exterior angles. The left piece equals $\\angle BAD + 18^\\circ$ and the right piece equals $\\angle DAC + 39^\\circ$, since an exterior angle of a triangle equals the sum of the two remote interior angles. Their total is $65^\\circ + 18^\\circ + 39^\\circ = 122^\\circ$ ✓. Route two, the quadrilateral angle sum. In quadrilateral $ABDC$ the four interior angles add to $360^\\circ$, and the interior angle at the dent measures $360^\\circ - \\angle BDC$. That gives $65^\\circ + 18^\\circ + 39^\\circ + 360^\\circ - \\angle BDC = 360^\\circ$, so $\\angle BDC = 122^\\circ$ ✓. (The choice $104^\\circ$ is ADDING ONLY $\\angle A$ AND $\\angle ACD$, dropping the angle at $B$ ✗; the choice $57^\\circ$ is LEAVING OUT $\\angle A$ ✗; the choice $58^\\circ$ is TAKING THE SUPPLEMENT of the true answer ✗.)',
    },
    {
      q: 'In the dart-shaped figure $ABDC$, $\\angle BDC = 118^\\circ$, $\\angle ABD = 27^\\circ$, and $\\angle ACD = 33^\\circ$. Find $\\angle A$.',
      fig: {
        view: [-3.6, -0.4, 3.6, 7],
        elems: [
          { t: 'poly', pts: [[0, 6], [-2.541, 1.221], [0, 3], [2.454, 1.75]], fill: false },
          { t: 'seg', a: [0, 3], b: [0, 0.5], dash: true },
          { t: 'angle', at: [0, 6], from: [-2.541, 1.221], to: [2.454, 1.75], r: 0.9, label: '?' },
          { t: 'angle', at: [-2.541, 1.221], from: [0, 6], to: [0, 3], r: 0.8, label: '27' },
          { t: 'angle', at: [2.454, 1.75], from: [0, 3], to: [0, 6], r: 0.8, label: '33' },
          { t: 'angle', at: [0, 3], from: [-2.541, 1.221], to: [2.454, 1.75], r: 0.5, label: '118' },
          { t: 'point', p: [0, 6], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [-2.541, 1.221], label: 'B', dx: -12, dy: 4 },
          { t: 'point', p: [0, 3], label: 'D', dx: 12, dy: -4 },
          { t: 'point', p: [2.454, 1.75], label: 'C', dx: 12, dy: 4 },
        ],
      },
      choices: ['$58^\\circ$', '$62^\\circ$', '$118^\\circ$', '$91^\\circ$'],
      answer: 0,
      solution:
        'Route one, extend the segment into the dent. The dashed extension of $\\overline{AD}$ past $D$ cuts $\\angle BDC$ into two exterior angles, one worth $\\angle BAD + 27^\\circ$ and the other worth $\\angle DAC + 33^\\circ$. Their sum is $\\angle A + 27^\\circ + 33^\\circ$, and that sum is the given $118^\\circ$, so $\\angle A = 118^\\circ - 60^\\circ = 58^\\circ$ ✓. Route two, the quadrilateral angle sum. Quadrilateral $ABDC$ has interior angles $\\angle A$, $27^\\circ$, $33^\\circ$, and the reflex angle at the dent, $360^\\circ - 118^\\circ = 242^\\circ$. These four add to $360^\\circ$: $\\angle A + 27^\\circ + 33^\\circ + 242^\\circ = 360^\\circ$, so $\\angle A = 58^\\circ$ ✓. (The choice $62^\\circ$ is TAKING THE SUPPLEMENT OF THE DENT, $180^\\circ - 118^\\circ$, and calling it the answer ✗; the choice $118^\\circ$ is HANDING BACK THE GIVEN ANGLE ✗; the choice $91^\\circ$ is SUBTRACTING ONLY ONE OF THE SMALL ANGLES, $118^\\circ - 27^\\circ$ ✗.)',
    },
  ],
  // s7 — two tangents from one point, and the two radii that go with them.
  [
    {
      q: 'From an external point $P$, the tangent segments $\\overline{PA}$ and $\\overline{PB}$ touch a circle with center $O$ at $A$ and $B$. If $\\angle APB = 48^\\circ$, find the central angle $\\angle AOB$.',
      fig: {
        view: [-4, -4, 8.6, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [7.376, 0], b: [1.22, 2.741] },
          { t: 'seg', a: [7.376, 0], b: [1.22, -2.741] },
          { t: 'seg', a: [0, 0], b: [1.22, 2.741], dash: true },
          { t: 'seg', a: [0, 0], b: [1.22, -2.741], dash: true },
          { t: 'right', at: [1.22, 2.741], from: [0, 0], to: [7.376, 0] },
          { t: 'right', at: [1.22, -2.741], from: [7.376, 0], to: [0, 0] },
          { t: 'angle', at: [7.376, 0], from: [1.22, 2.741], to: [1.22, -2.741], r: 1.2, label: '48' },
          { t: 'angle', at: [0, 0], from: [1.22, -2.741], to: [1.22, 2.741], r: 0.9, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: -12, dy: 4 },
          { t: 'point', p: [1.22, 2.741], label: 'A', dx: -6, dy: -10 },
          { t: 'point', p: [1.22, -2.741], label: 'B', dx: -6, dy: 14 },
          { t: 'point', p: [7.376, 0], label: 'P', dx: 12, dy: 4 },
        ],
      },
      choices: ['$132^\\circ$', '$48^\\circ$', '$96^\\circ$', '$42^\\circ$'],
      answer: 0,
      solution:
        'Route one, draw a radius to each point of tangency. The dashed $\\overline{OA}$ and $\\overline{OB}$ each meet their tangent at a right angle, so quadrilateral $OAPB$ has square corners at $A$ and at $B$. Its four angles sum to $360^\\circ$, so $\\angle AOB = 360^\\circ - 90^\\circ - 90^\\circ - 48^\\circ = 132^\\circ$ ✓. Route two, work with half the figure. Draw $\\overline{OP}$; by symmetry it bisects both $\\angle APB$ and $\\angle AOB$, so $\\angle APO = 24^\\circ$. Triangle $OAP$ has a right angle at $A$, and the two non-right angles of a right triangle are complementary, so $\\angle AOP = 90^\\circ - 24^\\circ = 66^\\circ$. Doubling that half gives $\\angle AOB = 2 \\cdot 66^\\circ = 132^\\circ$ ✓. (The choice $48^\\circ$ is HANDING BACK THE GIVEN ANGLE, as though the two angles were equal ✗; the choice $96^\\circ$ is DOUBLING THE ANGLE AT $P$, which doubles the wrong half ✗; the choice $42^\\circ$ is TAKING THE COMPLEMENT of the given angle, using one right angle where the quadrilateral has two ✗.)',
    },
    {
      q: 'Tangent segments $\\overline{PA}$ and $\\overline{PB}$ are drawn from an external point $P$ to a circle with center $O$. If the central angle $\\angle AOB$ measures $104^\\circ$, how large is $\\angle APB$?',
      fig: {
        view: [-4, -4, 6.1, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [4.873, 0], b: [1.847, 2.364] },
          { t: 'seg', a: [4.873, 0], b: [1.847, -2.364] },
          { t: 'seg', a: [0, 0], b: [1.847, 2.364], dash: true },
          { t: 'seg', a: [0, 0], b: [1.847, -2.364], dash: true },
          { t: 'right', at: [1.847, 2.364], from: [0, 0], to: [4.873, 0] },
          { t: 'right', at: [1.847, -2.364], from: [4.873, 0], to: [0, 0] },
          { t: 'angle', at: [0, 0], from: [1.847, -2.364], to: [1.847, 2.364], r: 0.9, label: '104' },
          { t: 'angle', at: [4.873, 0], from: [1.847, 2.364], to: [1.847, -2.364], r: 1.1, label: '?' },
          { t: 'point', p: [0, 0], label: 'O', dx: -12, dy: 4 },
          { t: 'point', p: [1.847, 2.364], label: 'A', dx: -4, dy: -10 },
          { t: 'point', p: [1.847, -2.364], label: 'B', dx: -4, dy: 14 },
          { t: 'point', p: [4.873, 0], label: 'P', dx: 12, dy: 4 },
        ],
      },
      choices: ['$104^\\circ$', '$52^\\circ$', '$76^\\circ$', '$38^\\circ$'],
      answer: 2,
      solution:
        'Route one, draw a radius to each point of tangency. The dashed radii give quadrilateral $OAPB$ right angles at $A$ and $B$, and its angles total $360^\\circ$, so $\\angle APB = 360^\\circ - 90^\\circ - 90^\\circ - 104^\\circ = 76^\\circ$ ✓. Route two, work with half the figure. The segment $\\overline{OP}$ bisects both angles, so $\\angle AOP = 52^\\circ$. In right triangle $OAP$ the right angle sits at $A$, so the other two angles are complementary: $\\angle APO = 90^\\circ - 52^\\circ = 38^\\circ$. That is half of the angle at $P$, so $\\angle APB = 2 \\cdot 38^\\circ = 76^\\circ$ ✓. (The choice $104^\\circ$ is HANDING BACK THE CENTRAL ANGLE ✗; the choice $52^\\circ$ is HALVING THE CENTRAL ANGLE, which gives $\\angle AOP$, an angle inside the half-figure, not the angle at $P$ ✗; the choice $38^\\circ$ is STOPPING AT THE HALF-ANGLE $\\angle APO$ and forgetting to double it ✗.)',
    },
    {
      q: 'From an external point $P$, tangents touch a circle with center $O$ at $A$ and $B$. The central angle $\\angle AOB$ is three times as large as $\\angle APB$. Find $\\angle APB$.',
      fig: {
        view: [-4, -4, 9.1, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [7.839, 0], b: [1.148, 2.772] },
          { t: 'seg', a: [7.839, 0], b: [1.148, -2.772] },
          { t: 'seg', a: [0, 0], b: [1.148, 2.772], dash: true },
          { t: 'seg', a: [0, 0], b: [1.148, -2.772], dash: true },
          { t: 'right', at: [1.148, 2.772], from: [0, 0], to: [7.839, 0] },
          { t: 'right', at: [1.148, -2.772], from: [7.839, 0], to: [0, 0] },
          { t: 'angle', at: [0, 0], from: [1.148, -2.772], to: [1.148, 2.772], r: 0.9, label: '3y' },
          { t: 'angle', at: [7.839, 0], from: [1.148, 2.772], to: [1.148, -2.772], r: 1.3, label: 'y' },
          { t: 'point', p: [0, 0], label: 'O', dx: -12, dy: 4 },
          { t: 'point', p: [1.148, 2.772], label: 'A', dx: -6, dy: -10 },
          { t: 'point', p: [1.148, -2.772], label: 'B', dx: -6, dy: 14 },
          { t: 'point', p: [7.839, 0], label: 'P', dx: 12, dy: 4 },
        ],
      },
      choices: ['$60^\\circ$', '$45^\\circ$', '$135^\\circ$', '$30^\\circ$'],
      answer: 1,
      solution:
        'Route one, draw a radius to each point of tangency. Let $y = \\angle APB$, so $\\angle AOB = 3y$. The dashed radii make quadrilateral $OAPB$ have right angles at $A$ and $B$, and its four angles sum to $360^\\circ$: $90^\\circ + 90^\\circ + 3y + y = 360^\\circ$. That is $4y = 180^\\circ$, so $y = 45^\\circ$ ✓. Route two, work with half the figure. Draw $\\overline{OP}$, which bisects both angles, so triangle $OAP$ has $\\frac{3y}{2}$ at $O$, $\\frac{y}{2}$ at $P$, and a right angle at $A$. The two non-right angles of a right triangle are complementary: $\\frac{3y}{2} + \\frac{y}{2} = 90^\\circ$, so $2y = 90^\\circ$ and $y = 45^\\circ$ ✓. (The choice $60^\\circ$ is DIVIDING $180^\\circ$ BY THREE, which counts the ratio but forgets that the angle at $P$ is one of the parts too ✗; the choice $135^\\circ$ is REPORTING $\\angle AOB$, the tripled angle, when $\\angle APB$ was asked for ✗; the choice $30^\\circ$ is SPLITTING ONE RIGHT ANGLE THREE WAYS, dividing $90^\\circ$ by $3$ instead of using the whole quadrilateral ✗.)',
    },
  ],
  // s8 — isosceles trapezoids, opened by a pair of altitudes.
  [
    {
      q: 'An isosceles trapezoid has parallel sides $26$ and $10$ and legs of length $17$. What is its area?',
      fig: {
        view: [-2, -2, 28, 18],
        elems: [
          { t: 'poly', pts: [[0, 0], [26, 0], [18, 15], [8, 15]], fill: false },
          { t: 'seg', a: [8, 15], b: [8, 0], dash: true },
          { t: 'seg', a: [18, 15], b: [18, 0], dash: true },
          { t: 'right', at: [8, 0], from: [26, 0], to: [8, 15] },
          { t: 'right', at: [18, 0], from: [26, 0], to: [18, 15] },
          { t: 'tick', a: [0, 0], b: [8, 15], n: 1 },
          { t: 'tick', a: [26, 0], b: [18, 15], n: 1 },
          { t: 'label', p: [13, 0], text: '26', dx: 0, dy: 16 },
          { t: 'label', p: [13, 15], text: '10', dx: 0, dy: -10 },
          { t: 'label', p: [4, 7.5], text: '17', dx: -14, dy: -4 },
          { t: 'label', p: [22, 7.5], text: '17', dx: 14, dy: -4 },
        ],
      },
      choices: ['$390$', '$270$', '$540$', '$306$'],
      answer: 1,
      solution:
        'Route one, drop an altitude from each top vertex. The two dashed altitudes cut the trapezoid into a rectangle $10$ wide and two congruent right triangles. The two triangle feet share the leftover base, $26 - 10 = 16$, so each foot is $8$. Each triangle has hypotenuse $17$ and base $8$, so the height is $\\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$. The area is $\\frac{26 + 10}{2} \\cdot 15 = 18 \\cdot 15 = 270$ ✓. Route two, coordinates and a doubled copy. Put the long base on the $x$-axis from $(0, 0)$ to $(26, 0)$; symmetry places the top corners at $(8, h)$ and $(18, h)$, since the top side is $10$ long and centered. The distance formula on a leg gives $8^2 + h^2 = 17^2$, so $h^2 = 225$ and $h = 15$. Now rotate a second copy of the trapezoid half a turn and fit it against the first: the two together make a parallelogram with base $26 + 10 = 36$ and height $15$, whose area is $540$. One trapezoid is half of that: $270$ ✓. (The choice $390$ is MULTIPLYING THE LONG BASE BY THE HEIGHT, which measures a rectangle the trapezoid does not fill ✗; the choice $540$ is FORGETTING TO HALVE the doubled parallelogram ✗; the choice $306$ is USING THE LEG $17$ AS THE HEIGHT, though the leg slants and the height stands straight up ✗.)',
    },
    {
      q: 'An isosceles trapezoid has parallel sides $24$ and $10$ and legs of length $25$. Find its area.',
      fig: {
        view: [-2, -2, 28, 28],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [17, 24], [7, 24]], fill: false },
          { t: 'seg', a: [7, 24], b: [7, 0], dash: true },
          { t: 'seg', a: [17, 24], b: [17, 0], dash: true },
          { t: 'right', at: [7, 0], from: [24, 0], to: [7, 24] },
          { t: 'right', at: [17, 0], from: [24, 0], to: [17, 24] },
          { t: 'tick', a: [0, 0], b: [7, 24], n: 1 },
          { t: 'tick', a: [24, 0], b: [17, 24], n: 1 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 16 },
          { t: 'label', p: [12, 24], text: '10', dx: 0, dy: -10 },
          { t: 'label', p: [3.5, 12], text: '25', dx: -14, dy: -4 },
          { t: 'label', p: [20.5, 12], text: '25', dx: 14, dy: -4 },
        ],
      },
      choices: ['$425$', '$576$', '$816$', '$408$'],
      answer: 3,
      solution:
        'Route one, drop an altitude from each top vertex. The dashed altitudes leave a rectangle $10$ wide and two congruent right triangles that share the leftover base $24 - 10 = 14$, so each has base $7$. With hypotenuse $25$ and base $7$, each triangle has height $\\sqrt{625 - 49} = \\sqrt{576} = 24$. The area is $\\frac{24 + 10}{2} \\cdot 24 = 17 \\cdot 24 = 408$ ✓. Route two, slide one leg over and use Heron’s formula. Through the top-left vertex $D$ draw a dashed segment parallel to the right-hand leg $\\overline{CB}$, meeting the long base at $E$. Then $DCBE$ is a parallelogram, so $EB = DC = 10$ and $DE = CB = 25$, which leaves $AE = 24 - 10 = 14$ and a triangle $ADE$ with sides $25$, $25$, and $14$. Heron’s formula on that triangle uses $s = \\frac{25 + 25 + 14}{2} = 32$: its area is $\\sqrt{32 \\cdot 7 \\cdot 7 \\cdot 18} = \\sqrt{28224} = 168$. The parallelogram stands on the same pair of parallels as that triangle, so it shares the triangle’s height; with base $10$ against the triangle’s $14$, its area is $\\frac{10}{7}$ of the triangle’s $168$, or $240$. The trapezoid is the two pieces together: $240 + 168 = 408$ ✓. (The choice $425$ is USING THE LEG $25$ AS THE HEIGHT, though the leg slants and the height stands straight up ✗; the choice $576$ is USING THE FULL LEFTOVER $14$ AS EACH END TRIANGLE’S BASE, counting $240 + 336$ when the two ends split that $14$ between them ✗; the choice $816$ is FORGETTING TO HALVE THE SUM OF THE BASES, multiplying $34$ by the height instead of $17$ ✗.)',
    },
    {
      q: 'An isosceles trapezoid has parallel sides $18$ and $8$ and an area of $156$. How long is each leg?',
      fig: {
        view: [-2, -2, 20, 15],
        elems: [
          { t: 'poly', pts: [[0, 0], [18, 0], [13, 12], [5, 12]], fill: false },
          { t: 'seg', a: [5, 12], b: [5, 0], dash: true },
          { t: 'right', at: [5, 0], from: [18, 0], to: [5, 12] },
          { t: 'tick', a: [0, 0], b: [5, 12], n: 1 },
          { t: 'tick', a: [18, 0], b: [13, 12], n: 1 },
          { t: 'label', p: [9, 0], text: '18', dx: 0, dy: 16 },
          { t: 'label', p: [9, 12], text: '8', dx: 0, dy: -10 },
          { t: 'label', p: [2.5, 6], text: '?', dx: -12, dy: -4 },
        ],
      },
      choices: ['$12$', '$\\sqrt{244}$', '$13$', '$17$'],
      answer: 2,
      solution:
        'Route one, drop an altitude and read the area backwards. The area is $\\frac{18 + 8}{2} \\cdot h = 13h$, and that equals $156$, so $h = 12$. The dashed altitude cuts off a right triangle whose base is half the leftover, $\\frac{18 - 8}{2} = 5$, and whose height is $12$, so the leg is $\\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$ ✓. Route two, cut with a diagonal and finish in coordinates. A diagonal splits the trapezoid into two triangles that share the same height $h$: one on base $18$, one on base $8$. Their areas add to $\\frac{1}{2} \\cdot 18h + \\frac{1}{2} \\cdot 8h = 13h = 156$, so $h = 12$. Now place the long base from $(0, 0)$ to $(18, 0)$; the centered top of length $8$ has ends $(5, 12)$ and $(13, 12)$, and the distance formula gives the leg from $(0, 0)$ to $(5, 12)$ as $\\sqrt{25 + 144} = 13$ ✓. (The choice $12$ is HANDING BACK THE HEIGHT, which is the middle step, not the leg ✗; the choice $\\sqrt{244}$ is FORGETTING TO HALVE THE OVERHANG, using the whole $10$ as the triangle’s base when two triangles share it ✗; the choice $17$ is ADDING THE OVERHANG AND THE HEIGHT, $5 + 12$, instead of combining their squares ✗.)',
    },
  ],
  // s9 — extend the legs until they meet, and read off similar triangles.
  [
    {
      q: 'Trapezoid $ABCD$ has $\\overline{AB} \\parallel \\overline{DC}$, with $AB = 28$, $DC = 12$, and a height of $12$. The legs, extended, meet at a point $P$. How far is $P$ from line $AB$?',
      fig: {
        view: [-2, -2, 30, 23],
        elems: [
          { t: 'poly', pts: [[0, 0], [28, 0], [20, 12], [8, 12]], fill: false },
          { t: 'seg', a: [8, 12], b: [14, 21], dash: true },
          { t: 'seg', a: [20, 12], b: [14, 21], dash: true },
          { t: 'seg', a: [8, 12], b: [8, 0], dash: true },
          { t: 'seg', a: [14, 21], b: [14, 0], dash: true },
          { t: 'right', at: [8, 0], from: [28, 0], to: [8, 12] },
          { t: 'right', at: [14, 0], from: [28, 0], to: [14, 21] },
          { t: 'label', p: [4, 0], text: '28', dx: 0, dy: 16 },
          { t: 'label', p: [14, 12], text: '12', dx: -14, dy: -8 },
          { t: 'label', p: [8, 6], text: '12', dx: -12, dy: 0 },
          { t: 'label', p: [14, 10.5], text: '?', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [28, 0], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [20, 12], label: 'C', dx: 12, dy: -4 },
          { t: 'point', p: [8, 12], label: 'D', dx: -12, dy: -4 },
          { t: 'point', p: [14, 21], label: 'P', dx: 0, dy: -12 },
        ],
      },
      choices: ['$9$', '$12$', '$28$', '$21$'],
      answer: 3,
      solution:
        'Route one, extend the legs until they meet. The dashed extensions build triangle $PDC$ sitting inside triangle $PAB$. Because $\\overline{DC} \\parallel \\overline{AB}$, the two triangles are similar, with ratio $\\frac{DC}{AB} = \\frac{12}{28} = \\frac{3}{7}$. Their heights share that ratio, so if $P$ is $d$ above $\\overline{DC}$, then $\\frac{d}{d + 12} = \\frac{3}{7}$. Cross-multiplying, $7d = 3d + 36$, so $d = 9$, and the distance from $P$ to $\\overline{AB}$ is $9 + 12 = 21$ ✓. Route two, coordinates and two intersecting lines. Put $A = (0, 0)$ and $B = (28, 0)$; the top side is $12$ long and centered above them, so $D = (8, 12)$ and $C = (20, 12)$. Line $AD$ has slope $\\frac{12}{8} = \\frac{3}{2}$, so it is $y = \\frac{3}{2}x$; line $BC$ has slope $\\frac{12}{-8} = -\\frac{3}{2}$, so it is $y = -\\frac{3}{2}(x - 28)$. Setting them equal, $\\frac{3}{2}x = -\\frac{3}{2}x + 42$, so $3x = 42$ and $x = 14$, giving $y = 21$. Since $\\overline{AB}$ lies along the $x$-axis, that $y$-value is the distance: $21$ ✓. (The choice $9$ is REPORTING THE DISTANCE TO THE SHORT SIDE, the little height $d$, when the question asked about $\\overline{AB}$ ✗; the choice $12$ is HANDING BACK THE TRAPEZOID’S HEIGHT ✗; the choice $28$ is DIVIDING BY THE SHORT SIDE INSTEAD OF THE DIFFERENCE, computing $\\frac{12 \\cdot 28}{12}$, when the height spans the gap between the two parallel sides and belongs over $28 - 12$ ✗.)',
    },
    {
      q: 'In trapezoid $ABCD$, $\\overline{AB} \\parallel \\overline{DC}$ with $AB = 32$ and $DC = 20$, and the height is $9$. The two legs are extended until they meet at $P$. Find the distance from $P$ to line $AB$.',
      fig: {
        view: [-2, -2, 34, 26],
        elems: [
          { t: 'poly', pts: [[0, 0], [32, 0], [26, 9], [6, 9]], fill: false },
          { t: 'seg', a: [6, 9], b: [16, 24], dash: true },
          { t: 'seg', a: [26, 9], b: [16, 24], dash: true },
          { t: 'seg', a: [6, 9], b: [6, 0], dash: true },
          { t: 'seg', a: [16, 24], b: [16, 0], dash: true },
          { t: 'right', at: [6, 0], from: [32, 0], to: [6, 9] },
          { t: 'right', at: [16, 0], from: [32, 0], to: [16, 24] },
          { t: 'label', p: [3, 0], text: '32', dx: 0, dy: 16 },
          { t: 'label', p: [16, 9], text: '20', dx: -14, dy: -8 },
          { t: 'label', p: [6, 4.5], text: '9', dx: -10, dy: 0 },
          { t: 'label', p: [16, 16], text: '?', dx: 10, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [32, 0], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [26, 9], label: 'C', dx: 12, dy: -4 },
          { t: 'point', p: [6, 9], label: 'D', dx: -12, dy: -4 },
          { t: 'point', p: [16, 24], label: 'P', dx: 0, dy: -12 },
        ],
      },
      choices: ['$14.4$', '$24$', '$15$', '$21$'],
      answer: 1,
      solution:
        'Route one, extend the legs until they meet. Triangle $PDC$ and triangle $PAB$ are similar, since $\\overline{DC} \\parallel \\overline{AB}$, with ratio $\\frac{20}{32} = \\frac{5}{8}$. Letting $d$ be the distance from $P$ down to $\\overline{DC}$, the heights obey $\\frac{d}{d + 9} = \\frac{5}{8}$, so $8d = 5d + 45$, $d = 15$, and the distance to $\\overline{AB}$ is $15 + 9 = 24$ ✓. Route two, coordinates and two intersecting lines. Place $A = (0, 0)$, $B = (32, 0)$, and center the top side of length $20$ above them at $D = (6, 9)$ and $C = (26, 9)$. Line $AD$ is $y = \\frac{3}{2}x$ and line $BC$ is $y = -\\frac{3}{2}(x - 32)$. Equating, $3x = 96$, so $x = 16$ and $y = 24$. The distance from $P$ to the $x$-axis, which carries $\\overline{AB}$, is $24$ ✓. (The choice $14.4$ is DIVIDING BY THE SHORT SIDE INSTEAD OF THE DIFFERENCE, computing $\\frac{9 \\cdot 32}{20}$ ✗; the choice $15$ is REPORTING THE DISTANCE TO $\\overline{DC}$ rather than to $\\overline{AB}$ ✗; the choice $21$ is ADDING THE HEIGHT TO THE GAP BETWEEN THE BASES, $9 + (32 - 20)$, which mixes a sideways measurement into a vertical one ✗.)',
    },
    {
      q: 'In trapezoid $ABCD$, $\\overline{AB} \\parallel \\overline{DC}$ with $AB = 21$ and $DC = 12$. The legs are extended until they meet at $P$, and $P$ turns out to be $28$ from line $AB$. What is the height of the trapezoid?',
      fig: {
        view: [-2, -2, 23, 30],
        elems: [
          { t: 'poly', pts: [[0, 0], [21, 0], [16.5, 12], [4.5, 12]], fill: false },
          { t: 'seg', a: [4.5, 12], b: [10.5, 28], dash: true },
          { t: 'seg', a: [16.5, 12], b: [10.5, 28], dash: true },
          { t: 'seg', a: [4.5, 12], b: [4.5, 0], dash: true },
          { t: 'seg', a: [10.5, 28], b: [10.5, 0], dash: true },
          { t: 'right', at: [4.5, 0], from: [21, 0], to: [4.5, 12] },
          { t: 'right', at: [10.5, 0], from: [21, 0], to: [10.5, 28] },
          { t: 'label', p: [2.25, 0], text: '21', dx: 0, dy: 16 },
          { t: 'label', p: [10.5, 12], text: '12', dx: -14, dy: -8 },
          { t: 'label', p: [4.5, 6], text: '?', dx: -10, dy: 0 },
          { t: 'label', p: [10.5, 20], text: '28', dx: 10, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [21, 0], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [16.5, 12], label: 'C', dx: 12, dy: -4 },
          { t: 'point', p: [4.5, 12], label: 'D', dx: -12, dy: -4 },
          { t: 'point', p: [10.5, 28], label: 'P', dx: 0, dy: -12 },
        ],
      },
      choices: ['$12$', '$16$', '$9$', '$7$'],
      answer: 0,
      solution:
        'Route one, extend the legs until they meet. Triangles $PDC$ and $PAB$ are similar with ratio $\\frac{12}{21} = \\frac{4}{7}$, and their heights share that ratio. The height of the big triangle is the given $28$, so the height of the small one is $\\frac{4}{7} \\cdot 28 = 16$. The trapezoid is the strip between them, so its height is $28 - 16 = 12$ ✓. Route two, coordinates. Place $A = (0, 0)$ and $B = (21, 0)$. By symmetry $P$ sits above the midpoint of $\\overline{AB}$, at $(10.5, 28)$. The top side is $12$ long and centered, so $D$ has $x$-coordinate $\\frac{21 - 12}{2} = 4.5$, and $D$ lies on line $AP$, which runs from $(0, 0)$ to $(10.5, 28)$ and so has equation $y = \\frac{28}{10.5}x = \\frac{8}{3}x$. At $x = 4.5$ that gives $y = 12$, and since $\\overline{AB}$ lies on the $x$-axis, the height of the trapezoid is $12$ ✓. (The choice $16$ is REPORTING THE SMALL TRIANGLE’S HEIGHT, the distance from $P$ down to $\\overline{DC}$, instead of the strip between the parallel sides ✗; the choice $9$ is HANDING BACK $21 - 12$, the difference of the bases, which is a horizontal measurement ✗; the choice $7$ is SUBTRACTING THE LONG BASE FROM THE DISTANCE, $28 - 21$, mixing a height with a base ✗.)',
    },
  ],
  // s10 — two circles that touch, and a common external tangent.
  [
    {
      q: 'Two circles with radii $2$ and $8$ are externally tangent. A common external tangent touches the small circle at $T$ and the large circle at $U$. Find $TU$.',
      fig: {
        view: [-3, -9, 19, 9],
        elems: [
          { t: 'circle', c: [0, 0], r: 2 },
          { t: 'circle', c: [10, 0], r: 8 },
          { t: 'seg', a: [-1.2, 1.6], b: [5.2, 6.4] },
          { t: 'seg', a: [0, 0], b: [-1.2, 1.6], dash: true },
          { t: 'seg', a: [10, 0], b: [5.2, 6.4], dash: true },
          { t: 'seg', a: [0, 0], b: [10, 0], dash: true },
          { t: 'right', at: [-1.2, 1.6], from: [0, 0], to: [5.2, 6.4] },
          { t: 'right', at: [5.2, 6.4], from: [10, 0], to: [-1.2, 1.6] },
          { t: 'label', p: [-0.6, 0.8], text: '2', dx: 10, dy: 4 },
          { t: 'label', p: [7.6, 3.2], text: '8', dx: 12, dy: 4 },
          { t: 'label', p: [2, 4], text: '?', dx: -10, dy: -4 },
          { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: 14 },
          { t: 'point', p: [10, 0], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [-1.2, 1.6], label: 'T', dx: -10, dy: -6 },
          { t: 'point', p: [5.2, 6.4], label: 'U', dx: 6, dy: -10 },
        ],
      },
      choices: ['$10$', '$6$', '$8$', '$\\sqrt{96}$'],
      answer: 2,
      solution:
        'Route one, draw both radii to the tangency points, then one more parallel. The dashed $\\overline{AT}$ and $\\overline{BU}$ are each perpendicular to the tangent, so they are parallel to each other and $ATUB$ is a right trapezoid. Through $A$ draw a segment parallel to $\\overline{TU}$ meeting $\\overline{BU}$ at $F$. Then $AF = TU$, and $BF = BU - AT = 8 - 2 = 6$, while $AB = 2 + 8 = 10$ because the circles touch. Right triangle $ABF$ gives $TU = AF = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8$ ✓. Route two, the tangent at the point where the circles touch. Let $M$ be that point and draw the tangent line to both circles at $M$; it crosses $\\overline{TU}$ at a point $S$. Two tangent segments from $S$ to the small circle are equal, so $ST = SM$, and to the large circle, so $SU = SM$. Hence $S$ is the midpoint of $\\overline{TU}$ and $TU = 2 \\cdot SM$. Since $\\overline{SM} \\perp \\overline{AB}$, triangles $AMS$ and $SMB$ are right triangles, and they are similar, because $\\angle MAS$ and $\\angle MSB$ are equal — each is the complement of $\\angle ASM$. Therefore $\\frac{SM}{AM} = \\frac{MB}{SM}$, so $SM^2 = AM \\cdot MB = 2 \\cdot 8 = 16$ and $SM = 4$. Then $TU = 2 \\cdot 4 = 8$ ✓. (The choice $10$ is REPORTING THE DISTANCE BETWEEN THE CENTERS, which is the hypotenuse, not the tangent ✗; the choice $6$ is REPORTING THE DIFFERENCE OF THE RADII, the short leg of that same triangle ✗; the choice $\\sqrt{96}$ is SUBTRACTING THE SMALL RADIUS ALONE, $\\sqrt{10^2 - 2^2}$, when the leg is the gap between the two radii ✗.)',
    },
    {
      q: 'Two externally tangent circles have radii $5$ and $20$. A common external tangent touches the smaller circle at $T$ and the larger one at $U$. How long is $\\overline{TU}$?',
      fig: {
        view: [-6, -21, 46, 21],
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'circle', c: [25, 0], r: 20 },
          { t: 'seg', a: [-3, 4], b: [13, 16] },
          { t: 'seg', a: [0, 0], b: [-3, 4], dash: true },
          { t: 'seg', a: [25, 0], b: [13, 16], dash: true },
          { t: 'seg', a: [0, 0], b: [25, 0], dash: true },
          { t: 'right', at: [-3, 4], from: [0, 0], to: [13, 16] },
          { t: 'right', at: [13, 16], from: [25, 0], to: [-3, 4] },
          { t: 'label', p: [-1.5, 2], text: '5', dx: 12, dy: 6 },
          { t: 'label', p: [19, 8], text: '20', dx: 14, dy: 4 },
          { t: 'label', p: [5, 10], text: '?', dx: -12, dy: -4 },
          { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: 16 },
          { t: 'point', p: [25, 0], label: 'B', dx: 0, dy: 16 },
          { t: 'point', p: [-3, 4], label: 'T', dx: -12, dy: -6 },
          { t: 'point', p: [13, 16], label: 'U', dx: 6, dy: -10 },
        ],
      },
      choices: ['$20$', '$25$', '$15$', '$\\sqrt{600}$'],
      answer: 0,
      solution:
        'Route one, draw both radii to the tangency points, then one more parallel. The dashed radii are perpendicular to the tangent, hence parallel to each other. Through $A$ draw a segment parallel to $\\overline{TU}$ meeting $\\overline{BU}$ at $F$; then $AF = TU$ and $BF = 20 - 5 = 15$. Because the circles touch, $AB = 5 + 20 = 25$, so right triangle $ABF$ gives $TU = \\sqrt{25^2 - 15^2} = \\sqrt{625 - 225} = \\sqrt{400} = 20$ ✓. Route two, the tangent at the point where the circles touch. Call that point $M$ and let its tangent line meet $\\overline{TU}$ at $S$. Equal tangent segments give $ST = SM$ and $SU = SM$, so $S$ is the midpoint of $\\overline{TU}$ and $TU = 2 \\cdot SM$. The segment $\\overline{SM}$ is perpendicular to $\\overline{AB}$, and the right triangles $AMS$ and $SMB$ are similar, since $\\angle MAS$ and $\\angle MSB$ are both complements of $\\angle ASM$. So $SM^2 = AM \\cdot MB = 5 \\cdot 20 = 100$, giving $SM = 10$ and $TU = 20$ ✓. (The choice $25$ is REPORTING THE DISTANCE BETWEEN THE CENTERS ✗; the choice $15$ is REPORTING THE DIFFERENCE OF THE RADII, which is the other leg of the triangle ✗; the choice $\\sqrt{600}$ is SUBTRACTING THE SMALL RADIUS ALONE, $\\sqrt{25^2 - 5^2}$, instead of the difference of the radii ✗.)',
    },
    {
      q: 'Two circles are externally tangent. The smaller has radius $4$, and a common external tangent touches the small circle at $T$ and the large one at $U$, with $TU = 24$. What is the radius of the larger circle?',
      fig: {
        view: [-5, -37, 77, 37],
        elems: [
          { t: 'circle', c: [0, 0], r: 4 },
          { t: 'circle', c: [40, 0], r: 36 },
          { t: 'seg', a: [-3.2, 2.4], b: [11.2, 21.6] },
          { t: 'seg', a: [0, 0], b: [-3.2, 2.4], dash: true },
          { t: 'seg', a: [40, 0], b: [11.2, 21.6], dash: true },
          { t: 'seg', a: [0, 0], b: [40, 0], dash: true },
          { t: 'right', at: [-3.2, 2.4], from: [0, 0], to: [11.2, 21.6] },
          { t: 'right', at: [11.2, 21.6], from: [40, 0], to: [-3.2, 2.4] },
          { t: 'label', p: [-1.6, 1.2], text: '4', dx: 10, dy: 10 },
          { t: 'label', p: [25.6, 10.8], text: '?', dx: 16, dy: 6 },
          { t: 'label', p: [4, 12], text: '24', dx: -14, dy: -6 },
          { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: 18 },
          { t: 'point', p: [40, 0], label: 'B', dx: 0, dy: 18 },
          { t: 'point', p: [-3.2, 2.4], label: 'T', dx: -12, dy: -6 },
          { t: 'point', p: [11.2, 21.6], label: 'U', dx: 4, dy: -12 },
        ],
      },
      choices: ['$9$', '$32$', '$144$', '$36$'],
      answer: 3,
      solution:
        'Route one, draw both radii to the tangency points, then one more parallel. Call the large radius $R$. The dashed radii are perpendicular to the tangent, so the segment through $A$ parallel to $\\overline{TU}$ meets $\\overline{BU}$ at a point $F$ with $AF = 24$ and $BF = R - 4$, while $AB = R + 4$ since the circles touch. Right triangle $ABF$ gives $(R - 4)^2 + 24^2 = (R + 4)^2$. Expanding, $R^2 - 8R + 16 + 576 = R^2 + 8R + 16$, so $576 = 16R$ and $R = 36$ ✓. Route two, the tangent at the point where the circles touch. Let $M$ be that point, and let the tangent at $M$ meet $\\overline{TU}$ at $S$. Equal tangent segments from $S$ give $ST = SM = SU$, so $S$ is the midpoint of $\\overline{TU}$ and $SM = 12$. Since $\\overline{SM} \\perp \\overline{AB}$, the right triangles $AMS$ and $SMB$ are similar, so $SM^2 = AM \\cdot MB$. That is $144 = 4R$, giving $R = 36$ ✓. (The choice $9$ is DIVIDING BY THE SMALL RADIUS TWICE, turning $144 = 4R$ into $\\frac{144}{16}$ ✗; the choice $32$ is REPORTING THE DIFFERENCE OF THE RADII, $R - 4$, which is the leg of the triangle and not the radius asked for ✗; the choice $144$ is STOPPING AT $SM^2$ and never dividing by the small radius at all ✗.)',
    },
  ],
]

export default { book: 'intro-geometry', number: 19, sections: { '19.1': s191 } }
