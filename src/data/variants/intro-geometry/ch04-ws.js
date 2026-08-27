// Introduction to Geometry chapter 4 — variations for the printable worksheet.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution. There is no `choices` key anywhere in
//    this file and no `answer` is a number. Slot 7 pairs an area with a
//    perimeter, exactly as the base problem does, and its answers keep that
//    two-part phrasing.
//  - Every answer was worked twice, by two genuinely different routes, and the
//    routes had to agree before the key was written. The pairs used are:
//    the $2(l+w)$ shortcut vs. walking the four sides one at a time (slot 1);
//    the $\frac{1}{2}bh$ formula vs. doubling the triangle into a
//    parallelogram (slot 2); sliding the step edges onto the bounding
//    rectangle vs. round-trip bookkeeping — a closed walk moves rightward
//    exactly as far as it moves leftward, and up exactly as far as down
//    (slot 3); the $bh$ formula vs. scissors — slicing off the overhanging
//    triangle and sliding it across, or cutting the figure into two triangles
//    and a rectangle (slot 4); the average-the-parallel-sides formula vs.
//    joining two copies into a parallelogram (slot 5); recovering the length
//    first vs. pricing the two long edges together as $2A \div w$ without
//    ever naming the length (slot 6); splitting the L into two blocks vs.
//    subtracting the bite from the bounding rectangle, and the bounding-
//    rectangle perimeter vs. adding all six sides (slot 7); the base-ratio
//    fraction vs. computing directly from the drawn height (slot 8); three
//    equal shares vs. two-thirds minus one-third (slot 9); squarest-versus-
//    most-lopsided reasoning vs. listing every whole-number rectangle
//    (slot 10).
//  - Figures are coordinate-exact. Every staircase in slot 3 has step runs
//    summing to the labeled width and step rises summing to the labeled
//    height; every slot 4 height foot makes a true right angle with the base;
//    every slot 7 L has component sides that add back to its overall
//    dimensions; every slot 8 triangle has $\frac{1}{2} \cdot BC \cdot h$
//    equal to the stated $[ABC]$, so the drawn height label and the given
//    area never disagree.
//  - Figure labels are plain text: bare numerals and the letters of points.
//  - Traps that run through the file, named in CAPS at the end of each
//    solution: MULTIPLYING THE SIDES, STOPPING HALFWAY, FORGETTING THE HALF,
//    ADDING BASE AND HEIGHT, COMPUTING THE BOUNDING AREA, GIVING UP OVER THE
//    UNLABELED SIDES, TAKING HALF LIKE A TRIANGLE, USING A SLANTED SIDE,
//    USING ONLY THE LONGER PARALLEL SIDE, ANSWERING WITH THE LENGTH, PUTTING
//    THE AREA IN THE PERIMETER FORMULA, EXPECTING THE CUT TO SHORTEN THE
//    BOUNDARY, FORGETTING TO REMOVE THE BITE, USING THE WRONG PIECE,
//    AVERAGING THE PIECES, HALVING INSTEAD OF TAKING A THIRD, TAKING TWO
//    THIRDS, FORGETTING TO HALVE THE WIRE, and ANSWERING WITH ONE AREA ALONE.

const worksheet = [
  // slot 1 — rectangle perimeter from length and width. Lanes: 21 x 8 -> 58
  //          (fence story), 8 x 14 with the width given first -> 44, and
  //          18 x 8 dressed as trim around a rug -> 52.
  [
    {
      q: 'A rectangular vegetable garden is $21$ units long and $8$ units wide. How many units of fencing are needed to enclose the garden completely?',
      answer: '$58$',
      solution:
        'The fence runs once around the boundary, so this is a perimeter: $2(21 + 8) = 2 \\cdot 29 = 58$. Second route, walking the fence one side at a time: $21 + 8 + 21 + 8 = 58$ ✓ — the same four sides, added without the shortcut. MULTIPLYING THE SIDES gives $21 \\cdot 8 = 168$ ✗, the area of the garden bed; that measures planting space inside, not fencing around. STOPPING HALFWAY gives $21 + 8 = 29$ ✗ — that walk only reaches the opposite corner, and the fence still has to come back.',
    },
    {
      q: 'A rectangle is $8$ units wide and $14$ units long. Find its perimeter.',
      answer: '$44$',
      solution:
        'Perimeter is twice the sum of one length and one width: $2(14 + 8) = 2 \\cdot 22 = 44$. Second route by listing the sides in walking order: $14 + 8 + 14 + 8 = 44$ ✓. STOPPING HALFWAY gives $14 + 8 = 22$ ✗ — a tempting slip here, since $22$ is exactly half the right answer and looks plausible on its own. MULTIPLYING THE SIDES gives $14 \\cdot 8 = 112$ ✗, the area, which counts unit squares inside rather than distance around.',
    },
    {
      q: 'A decorative braid is sewn along the entire edge of a rectangular rug that measures $18$ by $8$. How long is the braid?',
      answer: '$52$',
      solution:
        'The braid traces the boundary, so its length is the perimeter: $2(18 + 8) = 2 \\cdot 26 = 52$. Second route side by side: $18 + 8 + 18 + 8 = 52$ ✓. MULTIPLYING THE SIDES gives $18 \\cdot 8 = 144$ ✗ — that is the area of the rug, the amount of floor it covers, not the length of its edge. STOPPING HALFWAY gives $26$ ✗, one length plus one width, which trims off half the border.',
    },
  ],

  // slot 2 — triangle area from base and height. Lanes: 11 and 6 -> 33
  //          (sail), 14 and 7 -> 49, 15 and 8 -> 60 (garden plot).
  [
    {
      q: 'A triangular sail has base $11$ and height $6$. Find its area.',
      answer: '$33$',
      solution:
        'Half of base times height: $\\frac{1}{2} \\cdot 11 \\cdot 6 = 33$. Second route by doubling: two copies of the sail, one rotated, fit together into a parallelogram with base $11$ and height $6$, area $11 \\cdot 6 = 66$; the sail is exactly half of that, $33$ ✓. FORGETTING THE HALF gives $66$ ✗ — that is the full parallelogram, twice the sail. ADDING BASE AND HEIGHT gives $17$ ✗, a number with no geometric meaning here at all.',
    },
    {
      q: 'Find the area of a triangle whose base is $14$ and whose height to that base is $7$.',
      answer: '$49$',
      solution:
        'Halve the base first, then multiply: $\\frac{1}{2} \\cdot 14 = 7$, and $7 \\cdot 7 = 49$. Second route by doubling: two copies of the triangle assemble into a parallelogram of area $14 \\cdot 7 = 98$, and half of $98$ is $49$ ✓. FORGETTING THE HALF gives $98$ ✗. ADDING BASE AND HEIGHT gives $21$ ✗ — area multiplies lengths, never adds them.',
    },
    {
      q: 'A triangular garden plot has a base of $15$ and a height of $8$ to that base. What is its area?',
      answer: '$60$',
      solution:
        'The formula gives $\\frac{1}{2} \\cdot 15 \\cdot 8 = \\frac{1}{2} \\cdot 120 = 60$; halving the even number $8$ first is friendlier, $15 \\cdot 4 = 60$, same thing. Second route by doubling: a rotated copy completes a parallelogram of area $15 \\cdot 8 = 120$, and the plot is half of it, $60$ ✓. FORGETTING THE HALF gives $120$ ✗. ADDING BASE AND HEIGHT gives $23$ ✗ — a perimeter-style move applied to an area question.',
    },
  ],

  // slot 3 — staircase perimeter equals the bounding rectangle. Lanes differ
  //          in step count on purpose: four steps at 17 x 13 -> 60, five
  //          steps at 15 x 8 -> 46, three steps at 11 x 7 -> 36. The third
  //          lane moved off 14 x 13 -> 54, which the section 4.1 staircase
  //          slot already runs in the same attempt round. Every polygon's
  //          runs sum to the labeled width and rises to the labeled height
  //          (checked coordinate by coordinate).
  [
    {
      q: 'Each angle in the staircase shape shown is a right angle, and only the overall width and height are labeled. Find its perimeter.',
      fig: {
        view: [-2, -1.5, 18.5, 14.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [17, 0], [17, 4], [12, 4], [12, 8], [7, 8], [7, 11], [3, 11], [3, 13], [0, 13]] },
          { t: 'label', p: [8.5, -0.8], text: '17' },
          { t: 'label', p: [-0.9, 6.5], text: '13' },
        ],
      },
      answer: '$60$',
      solution:
        'Slide every horizontal step edge straight up: together they span the same $17$ as the bottom. Slide every vertical step edge out to the right: together they climb the same $13$ as the left side. So the boundary matches the $17 \\times 13$ bounding rectangle: $2(17 + 13) = 60$. Second route by round-trip bookkeeping: the walk around the boundary returns to its start, so the total distance moved rightward must equal the total moved leftward ($17$ each way), and the total moved up must equal the total moved down ($13$ each way); the whole trip is $2 \\cdot 17 + 2 \\cdot 13 = 60$ ✓. The number of steps never enters — four here, but forty would give the same answer. COMPUTING THE BOUNDING AREA gives $17 \\cdot 13 = 221$ ✗, a different measurement (and the staircase holds even less than that). GIVING UP OVER THE UNLABELED SIDES ✗ misses the whole idea: the two labels are enough.',
    },
    {
      q: 'The shape shown climbs in five right-angled steps. Find its perimeter.',
      fig: {
        view: [-2, -1.5, 16.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [15, 2], [12, 2], [12, 4], [9, 4], [9, 6], [6, 6], [6, 7], [3, 7], [3, 8], [0, 8]] },
          { t: 'label', p: [7.5, -0.8], text: '15' },
          { t: 'label', p: [-0.9, 4], text: '8' },
        ],
      },
      answer: '$46$',
      solution:
        'Push each short horizontal edge up to the top and each short vertical edge out to the side: nothing overlaps and nothing is missed, so the perimeter equals that of the $15 \\times 8$ bounding rectangle, $2(15 + 8) = 46$. Second route: the boundary walk is a closed loop, so rightward travel equals leftward travel ($15$) and upward travel equals downward travel ($8$); total $2 \\cdot 15 + 2 \\cdot 8 = 46$ ✓. Five steps, three steps, one step — the count is irrelevant, only the overall frame matters. STOPPING HALFWAY gives $15 + 8 = 23$ ✗. COMPUTING THE BOUNDING AREA gives $120$ ✗, square units answering a length question.',
    },
    {
      q: 'Every angle in the three-step staircase shown is a right angle. Only two measurements are given. Find the perimeter of the figure.',
      fig: {
        view: [-2, -1.5, 12.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [11, 3], [7, 3], [7, 5], [4, 5], [4, 7], [0, 7]] },
          { t: 'label', p: [5.5, -0.8], text: '11' },
          { t: 'label', p: [-0.9, 3.5], text: '7' },
        ],
      },
      answer: '$36$',
      solution:
        'The staircase secret: sliding the horizontal edges up rebuilds a top of length $11$, and sliding the vertical edges out rebuilds a side of height $7$, so the perimeter equals the bounding rectangle’s, $2(11 + 7) = 36$. Second route by the closed-loop argument: going around and coming back to the start forces total rightward motion to equal total leftward motion ($11$) and total up to equal total down ($7$), so the trip is $2 \\cdot 11 + 2 \\cdot 7 = 36$ ✓. COMPUTING THE BOUNDING AREA gives $11 \\cdot 7 = 77$ ✗. STOPPING HALFWAY gives $18$ ✗ — only one width and one height of the round trip.',
    },
  ],

  // slot 4 — parallelogram area, height drawn dashed. Lanes: base 8, height
  //          7 -> 56 leaning right; base 9, height 7 -> 63 leaning LEFT; base
  //          11, height 8 -> 88 with the slant labeled 10 (offset 6, a
  //          6-8-10 right triangle) as a live decoy.
  [
    {
      q: 'Find the area of the parallelogram shown. The dashed segment is perpendicular to the base.',
      fig: {
        view: [-1.5, -1.5, 12.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [11, 7], [3, 7]] },
          { t: 'seg', a: [3, 7], b: [3, 0], dash: true },
          { t: 'right', at: [3, 0], from: [3, 7], to: [8, 0] },
          { t: 'label', p: [4, -0.7], text: '8' },
          { t: 'label', p: [2.4, 3.5], text: '7' },
        ],
      },
      answer: '$56$',
      solution:
        'Base times height: $8 \\cdot 7 = 56$. The height is the dashed perpendicular gap between the base and the top side. Second route by scissors: slice off the right triangle overhanging the right end and slide it to the left end — the parallelogram reassembles into an $8 \\times 7$ rectangle, area $56$ ✓, with nothing gained or lost. TAKING HALF LIKE A TRIANGLE gives $28$ ✗; the $\\frac{1}{2}$ belongs to the triangle formula, not this one. USING A SLANTED SIDE ✗ overestimates — a slant travels farther than straight across, so it is always longer than the true height.',
    },
    {
      q: 'This parallelogram leans to the left. Find its area, using the dashed height.',
      fig: {
        view: [-4.5, -1.5, 10.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [6, 7], [-3, 7]] },
          { t: 'seg', a: [6, 7], b: [6, 0], dash: true },
          { t: 'right', at: [6, 0], from: [6, 7], to: [0, 0] },
          { t: 'label', p: [4.5, -0.7], text: '9' },
          { t: 'label', p: [6.6, 3.5], text: '7' },
        ],
      },
      answer: '$63$',
      solution:
        'Leaning left changes nothing: area is still base times height, $9 \\cdot 7 = 63$. Second route by scissors, run in mirror image: cut off the triangle overhanging the left end and slide it to the right end, producing a $9 \\times 7$ rectangle of area $63$ ✓. The shear direction is cosmetic — only the base and the perpendicular height matter. TAKING HALF LIKE A TRIANGLE gives $31.5$ ✗, and the fractional answer is itself a warning, since whole-number sides here should keep everything whole. USING A SLANTED SIDE ✗ would inflate the area, because both slanted sides are longer than $7$.',
    },
    {
      q: 'Find the area of the parallelogram shown. Three measurements are labeled; only two of them matter.',
      fig: {
        view: [-1.5, -1.5, 18.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [17, 8], [6, 8]] },
          { t: 'seg', a: [6, 8], b: [6, 0], dash: true },
          { t: 'right', at: [6, 0], from: [6, 8], to: [11, 0] },
          { t: 'label', p: [5.5, -0.7], text: '11' },
          { t: 'label', p: [5.4, 4], text: '8' },
          { t: 'label', p: [14.9, 3.7], text: '10' },
        ],
      },
      answer: '$88$',
      solution:
        'The two that matter are the base and the perpendicular height: $11 \\cdot 8 = 88$. The slanted side $10$ is the decoy — it leans $6$ across while rising $8$, and $6$-$8$-$10$ is a right triangle, which is why it measures $10$ and not $8$. Second route by dissection: vertical cuts at the two ends of the top side split the figure into a right triangle with legs $6$ and $8$ (area $24$), a $5 \\times 8$ rectangle (area $40$), and another $6$-$8$ right triangle (area $24$); total $24 + 40 + 24 = 88$ ✓. USING A SLANTED SIDE gives $11 \\cdot 10 = 110$ ✗, too big. TAKING HALF LIKE A TRIANGLE gives $44$ ✗.',
    },
  ],

  // slot 5 — trapezoid area from the two parallel sides and the height.
  //          Lanes: 12, 4, 6 -> 48; 14, 6, 5 -> 50 (tabletop); 16, 6, 7 -> 77.
  [
    {
      q: 'A trapezoid has parallel sides $12$ and $4$ and height $6$. Find its area.',
      answer: '$48$',
      solution:
        'Average the parallel sides, then multiply by the height: $\\frac{1}{2}(12 + 4) \\cdot 6 = 8 \\cdot 6 = 48$. Second route by doubling: a flipped copy joins this trapezoid into a parallelogram with base $12 + 4 = 16$ and height $6$, area $96$, and the trapezoid is half of it: $48$ ✓. FORGETTING THE HALF gives $96$ ✗, the full doubled figure. USING ONLY THE LONGER PARALLEL SIDE gives $12 \\cdot 6 = 72$ ✗ — the averaging with the short side is exactly what makes the formula a trapezoid formula.',
    },
    {
      q: 'The two parallel edges of a trapezoidal tabletop measure $14$ and $6$, and the perpendicular distance between them is $5$. What is the area of the tabletop?',
      answer: '$50$',
      solution:
        'The average of the parallel edges is $\\frac{1}{2}(14 + 6) = 10$, and multiplying by the height gives $10 \\cdot 5 = 50$. The tabletop behaves like a rectangle whose width is the average of its two edges. Second route by doubling: two such tabletops, one spun around, tile a parallelogram of base $14 + 6 = 20$ and height $5$, area $100$; half of that is $50$ ✓. FORGETTING THE HALF gives $100$ ✗. USING ONLY THE LONGER PARALLEL SIDE gives $70$ ✗, as if the top edge were as long as the bottom.',
    },
    {
      q: 'Find the area of a trapezoid whose parallel sides measure $16$ and $6$ and whose height is $7$.',
      answer: '$77$',
      solution:
        'Average, then multiply: $\\frac{1}{2}(16 + 6) \\cdot 7 = 11 \\cdot 7 = 77$. Second route by doubling: the trapezoid and a flipped copy make a parallelogram with base $16 + 6 = 22$ and height $7$, area $154$, so the trapezoid itself holds $\\frac{154}{2} = 77$ ✓. FORGETTING THE HALF gives $154$ ✗. USING ONLY THE LONGER PARALLEL SIDE gives $16 \\cdot 7 = 112$ ✗ — that rectangle would swallow the trapezoid with room to spare.',
    },
  ],

  // slot 6 — area and width given, perimeter wanted. Lanes: 120 and 6 ->
  //          L 20, P 52 (banner trim); 112 and 4 -> L 28, P 64 (baseboard);
  //          192 and 12 -> L 16, P 56, with the width deliberately close to
  //          the length so the sanity check earns its keep.
  [
    {
      q: 'A rectangular banner covers an area of $120$ square units and is $6$ units wide. How much trim is needed to edge the whole banner?',
      answer: '$52$',
      solution:
        'First recover the length: $120 \\div 6 = 20$. The trim runs the perimeter: $2(20 + 6) = 52$. Check: $20 \\cdot 6 = 120$ ✓ restores the given area. Second route without ever naming the length: the two long edges together measure $2 \\cdot 120 \\div 6 = 40$, and the two short edges add $2 \\cdot 6 = 12$, for $40 + 12 = 52$ ✓. ANSWERING WITH THE LENGTH gives $20$ ✗ — a way station, not the destination. PUTTING THE AREA IN THE PERIMETER FORMULA gives $2(120 + 6) = 252$ ✗; an area can never sit inside a sum of lengths.',
    },
    {
      q: 'The floor of a storage room is a rectangle with area $112$, and its shorter wall is $4$ long. Baseboard is installed along all four walls. How much baseboard is that?',
      answer: '$64$',
      solution:
        'The longer wall is $112 \\div 4 = 28$, so the baseboard totals $2(28 + 4) = 64$. Check: $28 \\cdot 4 = 112$ ✓. Second route: the two long walls come to $2 \\cdot 112 \\div 4 = 56$, and the two short walls add $8$, so $56 + 8 = 64$ ✓ with the length never written down. ANSWERING WITH THE LENGTH gives $28$ ✗. PUTTING THE AREA IN THE PERIMETER FORMULA gives $2(112 + 4) = 232$ ✗ — mixing square units into a length sum is the tell.',
    },
    {
      q: 'A rectangle is $12$ units wide and has area $192$. Find its perimeter.',
      answer: '$56$',
      solution:
        'The length is $192 \\div 12 = 16$, so the perimeter is $2(16 + 12) = 56$. Check: $16 \\cdot 12 = 192$ ✓ — and note the sides came out close together, so this rectangle is nearly square, which a quick estimate confirms ($14^2 = 196$ is near $192$). Second route: the two length-edges total $2 \\cdot 192 \\div 12 = 32$, the two width-edges total $24$, and $32 + 24 = 56$ ✓. ANSWERING WITH THE LENGTH gives $16$ ✗. PUTTING THE AREA IN THE PERIMETER FORMULA gives $2(192 + 12) = 408$ ✗, absurdly large for a shape only $16$ long.',
    },
  ],

  // slot 7 — L-shape, area AND perimeter, corner cut from a rectangle so the
  //          perimeter equals the bounding rectangle's. Lanes: 10 x 8 minus a
  //          4 x 3 top-right bite -> area 68, perimeter 36; 12 x 7 minus a
  //          5 x 3 top-LEFT bite -> 69 and 38; 11 x 9 minus a 4 x 4 top-right
  //          bite (countertop) -> 83 and 40. Component sides in every figure
  //          add back to the overall dimensions.
  [
    {
      q: 'The shape shown is a $10 \\times 8$ rectangle with a $4 \\times 3$ rectangle removed from one corner. Find its area AND its perimeter.',
      fig: {
        view: [-1.5, -1.5, 11.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 5], [6, 5], [6, 8], [0, 8]] },
          { t: 'label', p: [5, -0.7], text: '10' },
          { t: 'label', p: [10.7, 2.5], text: '5' },
          { t: 'label', p: [8, 5.5], text: '4' },
          { t: 'label', p: [6.6, 6.5], text: '3' },
          { t: 'label', p: [3, 8.5], text: '6' },
          { t: 'label', p: [-0.7, 4], text: '8' },
        ],
      },
      answer: 'Area $68$, perimeter $36$',
      solution:
        'Area by subtraction: the full rectangle holds $10 \\cdot 8 = 80$, the bite removes $4 \\cdot 3 = 12$, leaving $80 - 12 = 68$. Second route by splitting: a $10 \\times 5$ slab ($50$) below the cut plus a $6 \\times 3$ block ($18$) above it, $50 + 18 = 68$ ✓. Perimeter: a corner cut trades two removed edges for two new edges of the same total lengths, so the boundary equals the bounding rectangle’s, $2(10 + 8) = 36$; adding the six sides, $10 + 5 + 4 + 3 + 6 + 8 = 36$ ✓, confirms it. EXPECTING THE CUT TO SHORTEN THE BOUNDARY ✗ — it only dents inward. FORGETTING TO REMOVE THE BITE gives area $80$ ✗.',
    },
    {
      q: 'Every angle in the shape shown is a right angle. Find its area AND its perimeter.',
      fig: {
        view: [-1.5, -1.5, 13.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 7], [5, 7], [5, 4], [0, 4]] },
          { t: 'label', p: [6, -0.7], text: '12' },
          { t: 'label', p: [12.7, 3.5], text: '7' },
          { t: 'label', p: [8.5, 7.5], text: '7' },
          { t: 'label', p: [4.4, 5.5], text: '3' },
          { t: 'label', p: [2.5, 4.5], text: '5' },
          { t: 'label', p: [-0.7, 2], text: '4' },
        ],
      },
      answer: 'Area $69$, perimeter $38$',
      solution:
        'This L is missing its top-LEFT corner. Area by splitting with a vertical cut under the notch: a tall $7 \\times 7$ block ($49$) on the right plus a $5 \\times 4$ slab ($20$) on the left, $49 + 20 = 69$. Second route by subtraction: the bounding $12 \\times 7$ rectangle holds $84$, minus the missing $5 \\times 3$ corner, $84 - 15 = 69$ ✓. Perimeter: the corner cut leaves the boundary as long as the bounding rectangle’s, $2(12 + 7) = 38$; the six sides $12 + 7 + 7 + 3 + 5 + 4 = 38$ ✓ agree. EXPECTING THE CUT TO SHORTEN THE BOUNDARY ✗. FORGETTING TO REMOVE THE BITE gives $84$ ✗ for the area.',
    },
    {
      q: 'An L-shaped kitchen countertop has the measurements shown, and every angle is a right angle. Find its area AND its perimeter.',
      fig: {
        view: [-1.5, -1.5, 12.5, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [11, 5], [7, 5], [7, 9], [0, 9]] },
          { t: 'label', p: [5.5, -0.7], text: '11' },
          { t: 'label', p: [11.7, 2.5], text: '5' },
          { t: 'label', p: [9, 5.5], text: '4' },
          { t: 'label', p: [7.6, 7], text: '4' },
          { t: 'label', p: [3.5, 9.5], text: '7' },
          { t: 'label', p: [-0.7, 4.5], text: '9' },
        ],
      },
      answer: 'Area $83$, perimeter $40$',
      solution:
        'Area by splitting: the bottom slab is $11 \\times 5 = 55$ and the upper block is $7 \\times 4 = 28$, so the counter surface is $55 + 28 = 83$. Second route by subtraction: the bounding $11 \\times 9$ rectangle holds $99$, and the missing corner is $4 \\times 4 = 16$, so $99 - 16 = 83$ ✓. Perimeter (the counter’s edging): the one-step staircase matches its bounding rectangle, $2(11 + 9) = 40$, and the sum of the six sides $11 + 5 + 4 + 4 + 7 + 9 = 40$ ✓ confirms it. EXPECTING THE CUT TO SHORTEN THE BOUNDARY ✗ — area shrank, the edge did not. FORGETTING TO REMOVE THE BITE gives $99$ ✗.',
    },
  ],

  // slot 8 — D on BC with both pieces given, whole area given, [ABD] wanted.
  //          Lanes: BD 7, DC 5, [ABC] 60 -> 35 (wide, apex left of D);
  //          BD 5, DC 9, [ABC] 42 -> 15 (low and wide); BD 4, DC 5,
  //          [ABC] 63 -> 28 (tall and thin). Each figure labels the height,
  //          and in each one (1/2) * BC * h equals the stated [ABC], so the
  //          drawn height doubles as an independent second route.
  [
    {
      q: 'In the triangle shown, $D$ lies on $\\overline{BC}$ with $BD = 7$ and $DC = 5$, and $[ABC] = 60$. Find $[ABD]$.',
      fig: {
        view: [-1.5, -1.5, 13.5, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [3, 10]] },
          { t: 'seg', a: [3, 10], b: [7, 0] },
          { t: 'seg', a: [3, 10], b: [3, 0], dash: true },
          { t: 'right', at: [3, 0], from: [3, 10], to: [7, 0] },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
          { t: 'point', p: [12, 0], label: 'C', dx: 10, dy: 12 },
          { t: 'point', p: [3, 10], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [7, 0], label: 'D', dx: 6, dy: 14 },
          { t: 'label', p: [3.5, -0.6], text: '7' },
          { t: 'label', p: [9.5, -0.6], text: '5' },
          { t: 'label', p: [2.4, 5], text: '10' },
        ],
      },
      answer: '$35$',
      solution:
        'Triangles $ABD$ and $ACD$ share the height from $A$, so their areas split in the ratio of their bases. Triangle $ABD$ claims the fraction $\\frac{BD}{BC} = \\frac{7}{12}$ of the whole: $[ABD] = \\frac{7}{12} \\cdot 60 = 35$. Second route straight from the drawn height: $[ABD] = \\frac{1}{2} \\cdot 7 \\cdot 10 = 35$ ✓, and the whole checks too, $\\frac{1}{2} \\cdot 12 \\cdot 10 = 60$ ✓. USING THE WRONG PIECE gives $\\frac{5}{12} \\cdot 60 = 25$ ✗, which is $[ACD]$. AVERAGING THE PIECES gives $30$ ✗ — a half only appears when $D$ is the midpoint, and $7 \\ne 5$.',
    },
    {
      q: 'Point $D$ lies on $\\overline{BC}$ of the triangle shown, with $BD = 5$ and $DC = 9$. Given that $[ABC] = 42$, find $[ABD]$.',
      fig: {
        view: [-1.5, -1.5, 15.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [3, 6]] },
          { t: 'seg', a: [3, 6], b: [5, 0] },
          { t: 'seg', a: [3, 6], b: [3, 0], dash: true },
          { t: 'right', at: [3, 0], from: [3, 6], to: [5, 0] },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
          { t: 'point', p: [14, 0], label: 'C', dx: 10, dy: 12 },
          { t: 'point', p: [3, 6], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [5, 0], label: 'D', dx: 6, dy: 14 },
          { t: 'label', p: [2.5, -0.6], text: '5' },
          { t: 'label', p: [9.5, -0.6], text: '9' },
          { t: 'label', p: [2.4, 3], text: '6' },
        ],
      },
      answer: '$15$',
      solution:
        'The two triangles on either side of $\\overline{AD}$ use one height — the perpendicular from $A$ to line $BC$ — so areas follow bases. The whole base is $5 + 9 = 14$, and $[ABD] = \\frac{5}{14} \\cdot 42 = 15$. Second route from the drawn height: $[ABD] = \\frac{1}{2} \\cdot 5 \\cdot 6 = 15$ ✓, consistent with $[ABC] = \\frac{1}{2} \\cdot 14 \\cdot 6 = 42$ ✓. USING THE WRONG PIECE gives $\\frac{9}{14} \\cdot 42 = 27$ ✗ — that is the larger piece, $[ACD]$, and here $D$ sits well left of center, so the piece asked for must be the smaller one. AVERAGING THE PIECES gives $21$ ✗.',
    },
    {
      q: 'In the tall triangle shown, $D$ lies on $\\overline{BC}$ with $BD = 4$ and $DC = 5$, and $[ABC] = 63$. Find $[ABD]$.',
      fig: {
        view: [-1.5, -1.5, 10.5, 15.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [2, 14]] },
          { t: 'seg', a: [2, 14], b: [4, 0] },
          { t: 'seg', a: [2, 14], b: [2, 0], dash: true },
          { t: 'right', at: [2, 0], from: [2, 14], to: [4, 0] },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
          { t: 'point', p: [9, 0], label: 'C', dx: 10, dy: 12 },
          { t: 'point', p: [2, 14], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [4, 0], label: 'D', dx: 6, dy: 14 },
          { t: 'label', p: [2, -0.6], text: '4' },
          { t: 'label', p: [6.5, -0.6], text: '5' },
          { t: 'label', p: [1.4, 7], text: '14' },
        ],
      },
      answer: '$28$',
      solution:
        'Same height from $A$, so the split follows the bases: $BC = 4 + 5 = 9$, and $[ABD] = \\frac{4}{9} \\cdot 63 = 28$. The ninths are friendly because $63 = 9 \\cdot 7$: each ninth of the area is $7$, and $\\overline{BD}$ takes four of them. Second route from the drawn height: $[ABD] = \\frac{1}{2} \\cdot 4 \\cdot 14 = 28$ ✓, agreeing with $[ABC] = \\frac{1}{2} \\cdot 9 \\cdot 14 = 63$ ✓. USING THE WRONG PIECE gives $\\frac{5}{9} \\cdot 63 = 35$ ✗, the area of $[ACD]$. AVERAGING THE PIECES gives $31.5$ ✗, and the fraction is the giveaway — nothing here should split a whole number in half.',
    },
  ],

  // slot 9 — two points trisect the far side, middle triangle wanted. Lanes:
  //          [PQR] 63 -> 21, [XYZ] 51 -> 17, [ABC] 57 -> 19. Second route is
  //          always two-thirds minus one-third, so the middle piece is found
  //          without the equal-shares shortcut.
  [
    {
      q: 'Points $S$ and $T$ lie on side $QR$ of triangle $PQR$ and split it into three equal pieces: $QS = ST = TR$. If $[PQR] = 63$, find $[PST]$.',
      answer: '$21$',
      solution:
        'The three triangles $PQS$, $PST$, and $PTR$ all share the height from $P$ to line $QR$ and stand on equal bases, so their areas are equal — each is one third of the whole: $[PST] = \\frac{63}{3} = 21$. Second route by subtraction: triangle $PQT$ stands on base $QT = \\frac{2}{3} QR$, so $[PQT] = \\frac{2}{3} \\cdot 63 = 42$; removing $[PQS] = \\frac{1}{3} \\cdot 63 = 21$ leaves $[PST] = 42 - 21 = 21$ ✓. HALVING INSTEAD OF TAKING A THIRD gives $31.5$ ✗ — two points make three pieces, not two. TAKING TWO THIRDS gives $42$ ✗, which is $[PQT]$, a piece containing the answer plus a neighbor.',
    },
    {
      q: 'On side $YZ$ of triangle $XYZ$, points $M$ and $N$ are placed so that $YM = MN = NZ$. Given $[XYZ] = 51$, find $[XMN]$.',
      answer: '$17$',
      solution:
        'Triangles $XYM$, $XMN$, and $XNZ$ share the apex $X$ and its height to line $YZ$, and their bases are equal thirds of $YZ$ — so each holds a third of the area: $[XMN] = \\frac{51}{3} = 17$. Second route without the equal-shares shortcut: $[XYN] = \\frac{YN}{YZ} \\cdot 51 = \\frac{2}{3} \\cdot 51 = 34$, and $[XYM] = \\frac{1}{3} \\cdot 51 = 17$, so the middle piece is $34 - 17 = 17$ ✓. HALVING INSTEAD OF TAKING A THIRD gives $25.5$ ✗, another impossible half on whole-number data. TAKING TWO THIRDS gives $34$ ✗ — that region reaches from $Y$ all the way to $N$, overshooting the middle strip.',
    },
    {
      q: 'Points $D$ and $E$ trisect side $BC$ of triangle $ABC$, with $BD = DE = EC$. If the area of triangle $ABC$ is $57$, what is $[ADE]$?',
      answer: '$19$',
      solution:
        'Segments $AD$ and $AE$ cut the triangle into three slivers on equal bases, all sharing the height from $A$; equal base and equal height mean equal area, so each sliver is $\\frac{57}{3} = 19$, and in particular $[ADE] = 19$. Second route by two-thirds minus one-third: $[ABE] = \\frac{BE}{BC} \\cdot 57 = \\frac{2}{3} \\cdot 57 = 38$, and subtracting $[ABD] = \\frac{1}{3} \\cdot 57 = 19$ leaves $[ADE] = 38 - 19 = 19$ ✓. HALVING INSTEAD OF TAKING A THIRD gives $28.5$ ✗. TAKING TWO THIRDS gives $38$ ✗, the area of $[ABE]$ rather than the middle triangle.',
    },
  ],

  // slot 10 — a loop of fixed length bent into a whole-number rectangle;
  //           difference between the largest and smallest possible areas.
  //           Lanes: wire 24 -> 36 - 11 = 25; string 40 -> 100 - 19 = 81;
  //           ribbon 44 -> 121 - 21 = 100. In every lane the extremes are the
  //           square and the 1-wide sliver, and the full list backs that up.
  [
    {
      q: 'A piece of wire $24$ units long is bent, with none left over, into a rectangle whose side lengths are whole numbers. What is the difference between the largest and the smallest area such a rectangle can enclose?',
      answer: '$25$',
      solution:
        'The wire is the perimeter, so length plus width is $\\frac{24}{2} = 12$. The squarest split, $6 \\times 6$, encloses the most: $36$. The most lopsided, $1 \\times 11$, encloses the least: $11$. Difference: $36 - 11 = 25$. Second route by listing every case: $1 \\times 11 = 11$, $2 \\times 10 = 20$, $3 \\times 9 = 27$, $4 \\times 8 = 32$, $5 \\times 7 = 35$, $6 \\times 6 = 36$ — the list climbs steadily, so the extremes really are the ends, and $36 - 11 = 25$ ✓. FORGETTING TO HALVE THE WIRE puts the sides at a sum of $24$ and gives $144 - 23 = 121$ ✗, using rectangles that would need $48$ of wire. ANSWERING WITH ONE AREA ALONE gives $36$ ✗ — the question asks for a difference.',
    },
    {
      q: 'A loop of string $40$ units around is pulled taut into a rectangle with whole-number side lengths. How much bigger is the largest area the loop can enclose than the smallest?',
      answer: '$81$',
      solution:
        'The loop fixes the perimeter, so the two sides add to $\\frac{40}{2} = 20$. The maximum comes from the square, $10 \\times 10 = 100$; the minimum from the thinnest sliver, $1 \\times 19 = 19$. The gap is $100 - 19 = 81$. Second route by scanning the whole list, $1 \\times 19 = 19$, $2 \\times 18 = 36$, $3 \\times 17 = 51$, and so on up to $10 \\times 10 = 100$: every step toward the square raises the area, so no interior pair can beat either end, and the gap is $81$ ✓. FORGETTING TO HALVE THE WIRE gives $20 \\times 20 - 1 \\times 39 = 361$ ✗ from rectangles the string cannot reach around. ANSWERING WITH ONE AREA ALONE gives $100$ or $19$ ✗.',
    },
    {
      q: 'A ribbon $44$ units long is tied edge-to-edge around a rectangular box lid whose sides are whole numbers, exactly covering the lid’s boundary. Find the difference between the largest and smallest possible areas of the lid.',
      answer: '$100$',
      solution:
        'The ribbon is the perimeter, so the lid’s length and width add to $\\frac{44}{2} = 22$. Largest area: the square lid, $11 \\times 11 = 121$. Smallest: the most stretched-out lid, $1 \\times 21 = 21$. Difference: $121 - 21 = 100$. Second route by the list: $1 \\times 21 = 21$, $2 \\times 20 = 40$, $3 \\times 19 = 57$, climbing pair by pair to $10 \\times 12 = 120$ and $11 \\times 11 = 121$ — the ends of the list are the extremes, and $121 - 21 = 100$ ✓. FORGETTING TO HALVE THE WIRE gives $22 \\times 22 - 1 \\times 43 = 441$ ✗. ANSWERING WITH ONE AREA ALONE gives $121$ ✗ — same ribbon, wildly different lids, and the question wants the spread.',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 4,
  worksheet,
}
