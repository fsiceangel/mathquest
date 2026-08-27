// Introduction to Geometry chapter 4 — variations for section 4.1 (Perimeter).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every perimeter was computed twice, by two routes that do not share
//    arithmetic: the $2(l + w)$ shortcut against a side-by-side walk of the
//    boundary, a division by four against a rebuild of the square from the
//    candidate, a triple-scaled 3-4-5 against a straight sum, the staircase
//    slide against a "the walk must come home" displacement count or a
//    concrete edge-by-edge tally, an algebraic solve against a backward test
//    of the four printed candidates, and a pair enumeration against the
//    $(s - k)(s + k) = s^2 - k^2$ symmetry argument. The two routes must
//    agree before a key is written down.
//  - Every figure was built from its own numbers: rectilinear shapes use
//    integer coordinates, staircase boundaries are monotone so the slide
//    trick genuinely applies, notch shapes are drawn with the notch strictly
//    shallower than the side it bites into, and each dimension label sits
//    just off the side it measures.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS. The traps running through this section are: COMPUTING THE AREA,
//    WALKING ONLY HALFWAY, COUNTING ONLY THREE SIDES, DIVIDING BY TWO,
//    SUBTRACTING THE FOUR SIDES, MULTIPLYING BY FOUR, TAKING A SQUARE ROOT,
//    ADDING ONLY THE TWO LEGS, SKIPPING A SIDE, MULTIPLYING THE LEGS,
//    COUNTING THE WRONG NUMBER OF SIDES, SQUARING THE SIDE, ADDING INSTEAD OF
//    MULTIPLYING, MULTIPLYING THE SIDE COUNT BY ITSELF, COMPUTING THE
//    BOUNDING AREA, WALKING ONLY HALF THE LOOP, ASSUMING THE STEPS CUT THE
//    WALK SHORT, ANSWERING x ITSELF, ANSWERING LENGTH PLUS WIDTH, DROPPING
//    THE CONSTANT, FORGETTING THE NOTCH WALLS, SUBTRACTING THE WALLS INSTEAD
//    OF ADDING, LEAVING OUT A SIDE, TREATING THE CORNER CUT LIKE A NOTCH,
//    STOPPING ONE STEP SHORT OF THE SQUARE, ANSWERING THE SMALLEST AREA, and
//    FORGETTING TO HALVE THE PERIMETER.
//  - No two choices inside an item name the same value.

const s41 = [
  // s1 — rectangle with both dimensions given; find the perimeter.
  [
    {
      q: 'A rectangular berry patch is $11$ meters long and $5$ meters wide, as shown. How many meters of fencing does it take to enclose the patch?',
      fig: {
        view: [-1.5, -1.5, 12.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [11, 5], [0, 5]] },
          { t: 'label', p: [5.5, -0.7], text: '11' },
          { t: 'label', p: [11.7, 2.5], text: '5' },
        ],
      },
      choices: ['$32$', '$55$', '$16$', '$27$'],
      answer: 0,
      solution:
        'The fence follows the perimeter, and a rectangle’s perimeter is $2(l + w) = 2(11 + 5) = 2 \\cdot 16 = 32$ meters ✓. Check a second, independent way by walking the boundary one side at a time, never doubling anything: down the long side $11$, across the end $5$, back along the far side $11$, across the near end $5$, and $11 + 5 + 11 + 5 = 32$ ✓ — the walk comes home at the same total. (The choice $55$ is COMPUTING THE AREA, $11 \\times 5$, which fills the patch instead of surrounding it ✗; $16$ is WALKING ONLY HALFWAY, one length plus one width ✗; $27$ is COUNTING ONLY THREE SIDES, $11 + 5 + 11$, quitting before the last fence panel ✗.)',
    },
    {
      q: 'A ribbon is glued all the way around the border of a rectangular bookmark that is $3$ wide and $8$ tall, as shown. How long is the ribbon?',
      fig: {
        view: [-1.5, -1.5, 4.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [3, 8], [0, 8]] },
          { t: 'label', p: [1.5, -0.7], text: '3' },
          { t: 'label', p: [3.7, 4], text: '8' },
        ],
      },
      choices: ['$24$', '$11$', '$19$', '$22$'],
      answer: 3,
      solution:
        'The ribbon covers the perimeter: $2(8 + 3) = 2 \\cdot 11 = 22$ ✓. Check a second, independent way by tracing the border edge by edge: bottom $3$, up the tall side $8$, across the top $3$, back down $8$, and $3 + 8 + 3 + 8 = 22$ ✓ — same total with no formula in sight. The bookmark stands taller than it is wide, but perimeter does not care which way a rectangle is turned. (The choice $24$ is COMPUTING THE AREA, $8 \\times 3$ ✗; $11$ is WALKING ONLY HALFWAY, one width plus one height ✗; $19$ is COUNTING ONLY THREE SIDES, $8 + 3 + 8$ ✗.)',
    },
    {
      q: 'A braided trim runs around the edge of the $13 \\times 6$ rectangular rug shown. What is the perimeter of the rug?',
      fig: {
        view: [-1.5, -1.5, 14.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [13, 0], [13, 6], [0, 6]] },
          { t: 'label', p: [6.5, -0.7], text: '13' },
          { t: 'label', p: [-0.7, 3], text: '6' },
        ],
      },
      choices: ['$78$', '$38$', '$19$', '$32$'],
      answer: 1,
      solution:
        'Perimeter doubles the length-plus-width total: $2(13 + 6) = 2 \\cdot 19 = 38$ ✓. Check a second, independent way by splitting the count into the two long edges and the two short edges: the long edges give $2 \\cdot 13 = 26$, the short edges give $2 \\cdot 6 = 12$, and $26 + 12 = 38$ ✓ — a different grouping, the same trim. (The choice $78$ is COMPUTING THE AREA, $13 \\times 6$, measured in square units the trim never uses ✗; $19$ is WALKING ONLY HALFWAY around ✗; $32$ is COUNTING ONLY THREE SIDES, $13 + 6 + 13$ ✗.)',
    },
  ],
  // s2 — perimeter of a square given; find the side.
  [
    {
      q: 'A square courtyard has perimeter $52$. How long is each side?',
      choices: ['$26$', '$13$', '$48$', '$208$'],
      answer: 1,
      solution:
        'A square’s four equal sides share the perimeter evenly, so each side is $52 \\div 4 = 13$ ✓. Check a second, independent way by rebuilding the square from each printed candidate: $26$ gives $4 \\cdot 26 = 104$ ✗; $48$ gives $192$ ✗; $208$ gives $832$ ✗; $13$ gives $4 \\cdot 13 = 52$ ✓ — exactly one candidate walks back to the given perimeter. (The choice $26$ is DIVIDING BY TWO, as if a square had only two sides to share the total ✗; $48$ is SUBTRACTING THE FOUR SIDES, computing $52 - 4$ instead of $52 \\div 4$ ✗; $208$ is MULTIPLYING BY FOUR, running the formula in the wrong direction ✗.)',
    },
    {
      q: 'A square coaster has a stitched edge running $28$ centimeters around its border. What is the side length of the coaster?',
      choices: ['$14$', '$24$', '$7$', '$112$'],
      answer: 2,
      solution:
        'The stitching is the perimeter, split evenly among four equal sides: $28 \\div 4 = 7$ centimeters ✓. Check a second, independent way by adding instead of dividing: four sides of $7$ line up as $7 + 7 + 7 + 7 = 28$ ✓, so a side of $7$ rebuilds the stitched edge exactly, and no other printed value does — $14$ rebuilds $56$, $24$ rebuilds $96$, $112$ rebuilds $448$ ✗. (The choice $14$ is DIVIDING BY TWO ✗; $24$ is SUBTRACTING THE FOUR SIDES, $28 - 4$ ✗; $112$ is MULTIPLYING BY FOUR when the trip from perimeter back to side is a division ✗.)',
    },
    {
      q: 'The perimeter of a square sandbox is $64$. How long is one side?',
      choices: ['$8$', '$32$', '$60$', '$16$'],
      answer: 3,
      solution:
        'Four equal sides split the perimeter: $64 \\div 4 = 16$ ✓. Check a second, independent way by testing the candidates against the border itself: a side of $16$ gives $16 + 16 + 16 + 16 = 64$ ✓, while $8$ gives $32$, $32$ gives $128$, and $60$ gives $240$ ✗ — only one candidate closes the loop. (The choice $8$ is TAKING A SQUARE ROOT, which finds the side of a square whose AREA is $64$; perimeter divides, area square-roots ✗; $32$ is DIVIDING BY TWO ✗; $60$ is SUBTRACTING THE FOUR SIDES, $64 - 4$ ✗.)',
    },
  ],
  // s3 — right triangle with all three sides shown; find the perimeter.
  [
    {
      q: 'What is the perimeter of the right triangle shown?',
      fig: {
        view: [-1.5, -1.5, 9.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [0, 6]] },
          { t: 'right', at: [0, 0], from: [8, 0], to: [0, 6] },
          { t: 'label', p: [4, -0.7], text: '8' },
          { t: 'label', p: [-0.6, 3], text: '6' },
          { t: 'label', p: [4.6, 3.8], text: '10' },
        ],
      },
      choices: ['$14$', '$16$', '$48$', '$24$'],
      answer: 3,
      solution:
        'Perimeter adds every side, hypotenuse included: $6 + 8 + 10 = 24$ ✓. Check a second, independent way by scaling: this is the $3$-$4$-$5$ right triangle with every side doubled, and doubling every side doubles the whole trip, so the perimeter is $2(3 + 4 + 5) = 2 \\cdot 12 = 24$ ✓ — the scaled walk agrees with the direct sum. (The choice $14$ is ADDING ONLY THE TWO LEGS and ignoring the hypotenuse ✗; $16$ is SKIPPING A SIDE, $6 + 10$ with the $8$ left behind ✗; $48$ is MULTIPLYING THE LEGS, $6 \\times 8$, which belongs to an area computation ✗.)',
    },
    {
      q: 'A triangular flowerbed is a right triangle with the side lengths shown. How much edging does it take to go around the flowerbed?',
      fig: {
        view: [-1.5, -1.5, 14, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 9]] },
          { t: 'right', at: [12, 0], from: [0, 0], to: [12, 9] },
          { t: 'label', p: [6, -0.7], text: '12' },
          { t: 'label', p: [12.8, 4.5], text: '9' },
          { t: 'label', p: [5.2, 5.5], text: '15' },
        ],
      },
      choices: ['$36$', '$21$', '$24$', '$108$'],
      answer: 0,
      solution:
        'Edging runs the full boundary: $9 + 12 + 15 = 36$ ✓. Check a second, independent way by scaling from the $3$-$4$-$5$ triangle: every side here is three times as long ($9 = 3 \\cdot 3$, $12 = 3 \\cdot 4$, $15 = 3 \\cdot 5$), so the trip is three times $3 + 4 + 5 = 12$, which is $36$ ✓ — no re-adding of the actual sides needed. (The choice $21$ is ADDING ONLY THE TWO LEGS, $9 + 12$ ✗; $24$ is SKIPPING A SIDE, $9 + 15$ ✗; $108$ is MULTIPLYING THE LEGS, $9 \\times 12$, an area move rather than a walk ✗.)',
    },
    {
      q: 'A sail is cut as the right triangle shown, with the three side lengths labeled. What is the perimeter of the sail?',
      fig: {
        view: [-1.5, -1.5, 16.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [0, 8]] },
          { t: 'right', at: [0, 0], from: [15, 0], to: [0, 8] },
          { t: 'label', p: [7.5, -0.7], text: '15' },
          { t: 'label', p: [-0.7, 4], text: '8' },
          { t: 'label', p: [8.2, 4.9], text: '17' },
        ],
      },
      choices: ['$23$', '$25$', '$40$', '$120$'],
      answer: 2,
      solution:
        'Add all three sides: $8 + 15 + 17 = 40$ ✓. Check a second, independent way by asking what hypotenuse each printed candidate would force: the legs use up $8 + 15 = 23$, so a perimeter of $23$ leaves a hypotenuse of $0$ ✗, $25$ leaves $2$ ✗, $120$ leaves $97$ ✗, and $40$ leaves $17$ — and $17$ is the one that closes a right triangle, since $8^2 + 15^2 = 64 + 225 = 289 = 17^2$ ✓. (The choice $23$ is ADDING ONLY THE TWO LEGS ✗; $25$ is SKIPPING A SIDE, $8 + 17$ ✗; $120$ is MULTIPLYING THE LEGS, $8 \\times 15$ ✗.)',
    },
  ],
  // s4 — regular polygon with the side length given; find the perimeter.
  [
    {
      q: 'A garden paver is a regular pentagon with sides of length $9$. What is its perimeter?',
      choices: ['$54$', '$36$', '$45$', '$81$'],
      answer: 2,
      solution:
        'A regular pentagon has $5$ equal sides, so the perimeter is $5 \\times 9 = 45$ ✓. Check a second, independent way by dividing each printed candidate by the side length to see how many sides it would demand: $54 \\div 9 = 6$ sides, a hexagon ✗; $36 \\div 9 = 4$, a square ✗; $81 \\div 9 = 9$ sides ✗; $45 \\div 9 = 5$ ✓ — only one candidate matches a pentagon. (The choice $54$ is COUNTING THE WRONG NUMBER OF SIDES, six instead of five ✗; $36$ is COUNTING THE WRONG NUMBER OF SIDES the other way, four ✗; $81$ is SQUARING THE SIDE, $9^2$, an area habit sneaking into a perimeter problem ✗.)',
    },
    {
      q: 'A mirror frame is a regular octagon whose sides each measure $6$. What is the perimeter of the frame?',
      choices: ['$36$', '$48$', '$64$', '$14$'],
      answer: 1,
      solution:
        'An octagon has $8$ sides, all equal here, so the perimeter is $8 \\times 6 = 48$ ✓. Check a second, independent way by pairing: eight sides of $6$ make four pairs, each pair worth $12$, and $4 \\times 12 = 48$ ✓ — the pairing count agrees with the straight multiplication. (The choice $36$ is COUNTING THE WRONG NUMBER OF SIDES, treating the octagon as a hexagon with six ✗; $64$ is MULTIPLYING THE SIDE COUNT BY ITSELF, $8 \\times 8$, so the side length $6$ never gets used ✗; $14$ is ADDING INSTEAD OF MULTIPLYING, $8 + 6$ ✗.)',
    },
    {
      q: 'A patio tile is a regular hexagon with sides of length $12$. What is its perimeter?',
      choices: ['$72$', '$60$', '$144$', '$18$'],
      answer: 0,
      solution:
        'Six equal sides of $12$ give a perimeter of $6 \\times 12 = 72$ ✓. Check a second, independent way by pairing opposite sides: a hexagon’s six sides form three pairs, each pair contributing $24$, and $3 \\times 24 = 72$ ✓ — a different bundling, the same walk around the tile. (The choice $60$ is COUNTING THE WRONG NUMBER OF SIDES, five as in a pentagon ✗; $144$ is SQUARING THE SIDE, $12^2$, which measures a square’s inside rather than a hexagon’s edge ✗; $18$ is ADDING INSTEAD OF MULTIPLYING, $12 + 6$ ✗.)',
    },
  ],
  // s5 — all-right-angle rectilinear shape; perimeter by the slide trick.
  [
    {
      q: 'Every angle of the terraced lawn shown is a right angle, and only the overall width and height are labeled. What is the perimeter of the lawn?',
      fig: {
        view: [-1.5, -1.5, 11.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 3], [7, 3], [7, 5], [4, 5], [4, 7], [0, 7]] },
          { t: 'label', p: [5, -0.7], text: '10' },
          { t: 'label', p: [-0.6, 3.5], text: '7' },
        ],
      },
      choices: ['$17$', '$70$', '$32$', '$34$'],
      answer: 3,
      solution:
        'Slide every short horizontal edge straight up and every short vertical edge out to the side: together they rebuild the top and right of a $10 \\times 7$ rectangle, so the perimeter is $2(10 + 7) = 34$ ✓. Check a second, independent way with the drawn terraces themselves, whose runs are $3$, $3$, $4$ and rises are $3$, $2$, $2$: adding every edge gives $10 + 3 + 3 + 2 + 3 + 2 + 4 + 7 = 34$ ✓ — and reshuffling the terraces would change nothing, because the slide argument never asked about them. (The choice $70$ is COMPUTING THE BOUNDING AREA, $10 \\times 7$ ✗; $17$ is WALKING ONLY HALF THE LOOP, one width plus one height ✗; $32$ is ASSUMING THE STEPS CUT THE WALK SHORT, when the boundary of the terraced shape is exactly as long as the rectangle’s ✗.)',
    },
    {
      q: 'The outline shown, drawn with only right angles, is the side view of a stepped garden wall. Only its total width and total height are labeled. What is the perimeter of the outline?',
      fig: {
        view: [-1.5, -1.5, 10.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [9, 2], [6, 2], [6, 4], [2, 4], [2, 5], [0, 5]] },
          { t: 'label', p: [4.5, -0.7], text: '9' },
          { t: 'label', p: [-0.6, 2.5], text: '5' },
        ],
      },
      choices: ['$26$', '$28$', '$45$', '$14$'],
      answer: 1,
      solution:
        'Push each horizontal ledge up to the top and each vertical face out to the right: they reassemble the missing top and right of a $9 \\times 5$ rectangle, so the perimeter is $2(9 + 5) = 28$ ✓. Check a second, independent way by bookkeeping the walk itself: going once around, the total distance walked rightward must equal the total walked leftward (the walk comes home), and likewise up must equal down. The only rightward edge is the bottom, $9$, and the only downward edge is the left side, $5$, so the loop is $9 + 9 + 5 + 5 = 28$ ✓. (The choice $45$ is COMPUTING THE BOUNDING AREA, $9 \\times 5$ ✗; $14$ is WALKING ONLY HALF THE LOOP ✗; $26$ is ASSUMING THE STEPS CUT THE WALK SHORT by a couple of units, which no right-angle staircase ever does ✗.)',
    },
    {
      q: 'Every angle in the floor plan shown is a right angle, and only the overall width and height are given. What is the perimeter of the floor plan?',
      fig: {
        view: [-1.5, -1.5, 13.5, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 2], [9, 2], [9, 4], [7, 4], [7, 6], [3, 6], [3, 9], [0, 9]] },
          { t: 'label', p: [6, -0.8], text: '12' },
          { t: 'label', p: [-0.7, 4.5], text: '9' },
        ],
      },
      choices: ['$21$', '$40$', '$42$', '$108$'],
      answer: 2,
      solution:
        'Slide the horizontal ledges up and the vertical faces to the right: nothing overlaps and nothing is missed, and the boundary rebuilds a $12 \\times 9$ rectangle, so the perimeter is $2(12 + 9) = 42$ ✓. Check a second, independent way with the drawn steps, whose runs are $3$, $2$, $4$, $3$ and rises are $2$, $2$, $2$, $3$: every edge in order gives $12 + 2 + 3 + 2 + 2 + 2 + 4 + 3 + 3 + 9 = 42$ ✓ — the tally lands on the slide answer edge for edge. (The choice $108$ is COMPUTING THE BOUNDING AREA, $12 \\times 9$, and the floor plan holds less area than that but exactly as much boundary ✗; $21$ is WALKING ONLY HALF THE LOOP ✗; $40$ is ASSUMING THE STEPS CUT THE WALK SHORT ✗.)',
    },
  ],
  // s6 — rectangle with algebraic sides and a given perimeter; find the length.
  [
    {
      q: 'A rectangular banner has width $x$ and length $3x - 2$, as shown, and its perimeter is $52$. What is the length of the banner?',
      fig: {
        view: [-1.5, -2, 21, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [19, 0], [19, 7], [0, 7]] },
          { t: 'label', p: [9.5, -0.8], text: '3x - 2' },
          { t: 'label', p: [19.9, 3.5], text: 'x' },
        ],
      },
      choices: ['$19$', '$7$', '$26$', '$21$'],
      answer: 0,
      solution:
        'The perimeter is $2(x + 3x - 2) = 2(4x - 2) = 8x - 4$. Setting $8x - 4 = 52$ gives $8x = 56$, so $x = 7$, and the LENGTH is $3x - 2 = 19$ ✓; guard: $2(7 + 19) = 52$ ✓. Check a second, independent way from the candidates: a perimeter of $52$ forces length plus width to be $26$, so each candidate length implies a width. Length $19$ implies width $7$, and $3 \\cdot 7 - 2 = 19$ ✓ — consistent. Length $21$ implies width $5$, but $3 \\cdot 5 - 2 = 13 \\ne 21$ ✗; length $26$ implies width $0$, no banner at all ✗; length $7$ implies width $19$, but $3 \\cdot 19 - 2 = 55 \\ne 7$ ✗. (The choice $7$ is ANSWERING x ITSELF instead of the length ✗; $26$ is ANSWERING LENGTH PLUS WIDTH, the half-perimeter ✗; $21$ is DROPPING THE CONSTANT, reporting $3x$ with the $- 2$ forgotten ✗.)',
    },
    {
      q: 'A rectangular garden bed has width $x$ and length $2x + 3$, as shown. Its perimeter is $30$. How long is the garden bed?',
      fig: {
        view: [-1.5, -2, 12.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [11, 4], [0, 4]] },
          { t: 'label', p: [5.5, -0.8], text: '2x + 3' },
          { t: 'label', p: [11.8, 2], text: 'x' },
        ],
      },
      choices: ['$4$', '$15$', '$11$', '$8$'],
      answer: 2,
      solution:
        'The perimeter is $2(x + 2x + 3) = 2(3x + 3) = 6x + 6$. From $6x + 6 = 30$ we get $6x = 24$, so $x = 4$ and the length is $2x + 3 = 11$ ✓; guard: $2(4 + 11) = 30$ ✓. Check a second, independent way without the perimeter equation: length plus width must be $\\frac{30}{2} = 15$, so test each candidate length against its implied width. Length $11$ implies width $4$, and $2 \\cdot 4 + 3 = 11$ ✓. Length $8$ implies width $7$, but $2 \\cdot 7 + 3 = 17 \\ne 8$ ✗; length $15$ implies width $0$ ✗; length $4$ implies width $11$, but $2 \\cdot 11 + 3 = 25 \\ne 4$ ✗. (The choice $4$ is ANSWERING x ITSELF ✗; $15$ is ANSWERING LENGTH PLUS WIDTH ✗; $8$ is DROPPING THE CONSTANT, reporting $2x$ without the $+ 3$ ✗.)',
    },
    {
      q: 'The rectangular poster shown has width $x$ and length $3x + 2$, and a perimeter of $68$. What is the length of the poster?',
      fig: {
        view: [-1.5, -2.2, 28.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [26, 0], [26, 8], [0, 8]] },
          { t: 'label', p: [13, -0.9], text: '3x + 2' },
          { t: 'label', p: [26.9, 4], text: 'x' },
        ],
      },
      choices: ['$34$', '$26$', '$8$', '$24$'],
      answer: 1,
      solution:
        'The perimeter is $2(x + 3x + 2) = 2(4x + 2) = 8x + 4$. Setting $8x + 4 = 68$ gives $8x = 64$, so $x = 8$, and the length is $3x + 2 = 26$ ✓; guard: $2(8 + 26) = 68$ ✓. Check a second, independent way through the half-perimeter: length plus width is $\\frac{68}{2} = 34$, so length $26$ pairs with width $8$, and $3 \\cdot 8 + 2 = 26$ ✓ — the pair fits the label. Testing $24$: width $10$, but $3 \\cdot 10 + 2 = 32 \\ne 24$ ✗; testing $34$: width $0$ ✗; testing $8$: width $26$, but $3 \\cdot 26 + 2 = 80 \\ne 8$ ✗. (The choice $8$ is ANSWERING x ITSELF ✗; $34$ is ANSWERING LENGTH PLUS WIDTH ✗; $24$ is DROPPING THE CONSTANT, reporting $3x$ and forgetting the $+ 2$ ✗.)',
    },
  ],
  // s7 — notch cut into one side of a rectangle; perimeter = rectangle + 2·depth.
  [
    {
      q: 'A rectangular countertop measuring $14 \\times 6$ has a notch $3$ wide and $2$ deep cut into its top edge, as shown. What is the perimeter of the countertop?',
      fig: {
        view: [-1.5, -1.5, 15.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [14, 6], [8, 6], [8, 4], [5, 4], [5, 6], [0, 6]] },
          { t: 'label', p: [7, -0.7], text: '14' },
          { t: 'label', p: [14.7, 3], text: '6' },
          { t: 'label', p: [6.5, 3.4], text: '3' },
          { t: 'label', p: [8.6, 5], text: '2' },
        ],
      },
      choices: ['$40$', '$36$', '$44$', '$84$'],
      answer: 2,
      solution:
        'The uncut rectangle has perimeter $2(14 + 6) = 40$. The notch floor puts back exactly the $3$ of top edge that was removed, so widths balance — but the two side walls, each $2$ deep, are brand-new boundary, adding $2 \\cdot 2 = 4$. Perimeter: $40 + 4 = 44$ ✓. Check a second, independent way by adding all eight edges from the figure: $14 + 6 + 6 + 2 + 3 + 2 + 5 + 6 = 44$ ✓ — the raw tally confirms the shortcut. (The choice $40$ is FORGETTING THE NOTCH WALLS, as if cutting into a shape could leave its boundary unchanged ✗; $36$ is SUBTRACTING THE WALLS INSTEAD OF ADDING, when a bite INTO a side makes the boundary longer ✗; $84$ is COMPUTING THE AREA of the $14 \\times 6$ rectangle ✗.)',
    },
    {
      q: 'A notch $3$ deep with a mouth $2$ tall is cut into the right side of a $10 \\times 4$ rectangular shelf board, as shown. What is the perimeter of the board?',
      fig: {
        view: [-1.5, -1.5, 11.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 1], [7, 1], [7, 3], [10, 3], [10, 4], [0, 4]] },
          { t: 'label', p: [5, -0.7], text: '10' },
          { t: 'label', p: [-0.6, 2], text: '4' },
          { t: 'label', p: [8.5, 3.5], text: '3' },
          { t: 'label', p: [10.5, 2], text: '2' },
        ],
      },
      choices: ['$28$', '$22$', '$40$', '$34$'],
      answer: 3,
      solution:
        'Start from the full rectangle: $2(10 + 4) = 28$. The floor of the notch, standing upright at the back, replaces the $2$ of right edge that vanished, so those balance — and the two horizontal walls, each running the full depth $3$, are pure new boundary: $2 \\cdot 3 = 6$ extra. Perimeter: $28 + 6 = 34$ ✓. Check a second, independent way by walking every edge of the figure: $10 + 1 + 3 + 2 + 3 + 1 + 10 + 4 = 34$ ✓ — eight edges, same total. Note the notch adds twice its DEPTH, not twice its mouth: turning the notch sideways changed which measurement matters. (The choice $28$ is FORGETTING THE NOTCH WALLS ✗; $22$ is SUBTRACTING THE WALLS INSTEAD OF ADDING ✗; $40$ is COMPUTING THE AREA, $10 \\times 4$ ✗.)',
    },
    {
      q: 'The $15 \\times 7$ rectangular wall panel shown has an opening $4$ wide and $3$ tall cut upward into its bottom edge. What is the perimeter of the panel?',
      fig: {
        view: [-1.5, -1.5, 16.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 3], [10, 3], [10, 0], [15, 0], [15, 7], [0, 7]] },
          { t: 'label', p: [7.5, 7.5], text: '15' },
          { t: 'label', p: [15.7, 3.5], text: '7' },
          { t: 'label', p: [8, 3.5], text: '4' },
          { t: 'label', p: [5.4, 1.5], text: '3' },
        ],
      },
      choices: ['$50$', '$44$', '$38$', '$105$'],
      answer: 0,
      solution:
        'The uncut panel has perimeter $2(15 + 7) = 44$. The ceiling of the opening replaces the $4$ of bottom edge that was cut away, so the horizontal lengths balance; the two vertical walls of the opening, each $3$ tall, are new boundary and add $2 \\cdot 3 = 6$. Perimeter: $44 + 6 = 50$ ✓. Check a second, independent way from the figure’s eight edges: $6 + 3 + 4 + 3 + 5 + 7 + 15 + 7 = 50$ ✓ — cutting into the bottom behaves exactly like cutting into the top. (The choice $44$ is FORGETTING THE NOTCH WALLS ✗; $38$ is SUBTRACTING THE WALLS INSTEAD OF ADDING, when a doorway carved into a panel lengthens its outline ✗; $105$ is COMPUTING THE AREA, $15 \\times 7$ ✗.)',
    },
  ],
  // s8 — rectangle cut from a corner; the L-shape keeps the full perimeter.
  [
    {
      q: 'A $4 \\times 3$ rectangle is cut off the top-right corner of an $11 \\times 7$ rectangle, as shown. What is the perimeter of the L-shaped desk top that remains?',
      fig: {
        view: [-1.5, -1.5, 12.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [11, 4], [7, 4], [7, 7], [0, 7]] },
          { t: 'label', p: [5.5, -0.7], text: '11' },
          { t: 'label', p: [11.7, 2], text: '4' },
          { t: 'label', p: [9, 4.5], text: '4' },
          { t: 'label', p: [7.6, 5.5], text: '3' },
          { t: 'label', p: [3.5, 7.5], text: '7' },
          { t: 'label', p: [-0.6, 3.5], text: '7' },
        ],
      },
      choices: ['$29$', '$36$', '$42$', '$65$'],
      answer: 1,
      solution:
        'Add the six sides straight from the figure: $11 + 4 + 4 + 3 + 7 + 7 = 36$ ✓. Check a second, independent way without adding at all: slide the inner $4$-long edge up into the gap in the top, and the inner $3$-long edge right into the gap in the right side. The boundary reassembles the full $11 \\times 7$ rectangle exactly, so the perimeter is $2(11 + 7) = 36$ ✓ — a corner cut trades two edges for two new edges of the same total length. (The choice $29$ is LEAVING OUT A SIDE while adding the six edges ✗; $42$ is TREATING THE CORNER CUT LIKE A NOTCH and tacking on $2 \\cdot 3$, but only a bite into the MIDDLE of a side grows the boundary ✗; $65$ is COMPUTING THE AREA, $77 - 12$ ✗.)',
    },
    {
      q: 'A rectangle $3$ wide and $2$ tall is cut off the top-left corner of an $8 \\times 5$ rectangle, as shown. What is the perimeter of the remaining shape?',
      fig: {
        view: [-1.5, -1.5, 9.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 5], [3, 5], [3, 3], [0, 3]] },
          { t: 'label', p: [4, -0.7], text: '8' },
          { t: 'label', p: [8.7, 2.5], text: '5' },
          { t: 'label', p: [5.5, 5.5], text: '5' },
          { t: 'label', p: [2.4, 4], text: '2' },
          { t: 'label', p: [1.5, 3.4], text: '3' },
          { t: 'label', p: [-0.6, 1.5], text: '3' },
        ],
      },
      choices: ['$26$', '$21$', '$30$', '$34$'],
      answer: 0,
      solution:
        'Walk the six sides from the figure: $8 + 5 + 5 + 2 + 3 + 3 = 26$ ✓. Check a second, independent way with the sliding picture: the inner $3$-long edge slides up to complete the top, and the inner $2$-long edge slides left to complete the left side, rebuilding the whole $8 \\times 5$ rectangle — so the perimeter is $2(8 + 5) = 26$ ✓, untouched by the missing corner. (The choice $21$ is LEAVING OUT A SIDE in the six-edge sum ✗; $30$ is TREATING THE CORNER CUT LIKE A NOTCH, adding $2 \\cdot 2$ of phantom wall ✗; $34$ is COMPUTING THE AREA, $40 - 6$ ✗.)',
    },
    {
      q: 'A $5 \\times 4$ rectangle is removed from the bottom-right corner of a $14 \\times 9$ rectangular patio, as shown. What is the perimeter of the patio that remains?',
      fig: {
        view: [-1.5, -1.5, 15.5, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [9, 4], [14, 4], [14, 9], [0, 9]] },
          { t: 'label', p: [4.5, -0.7], text: '9' },
          { t: 'label', p: [9.6, 2], text: '4' },
          { t: 'label', p: [11.5, 3.4], text: '5' },
          { t: 'label', p: [14.7, 6.5], text: '5' },
          { t: 'label', p: [7, 9.5], text: '14' },
          { t: 'label', p: [-0.7, 4.5], text: '9' },
        ],
      },
      choices: ['$37$', '$54$', '$106$', '$46$'],
      answer: 3,
      solution:
        'Sum the six sides from the figure: $9 + 4 + 5 + 5 + 14 + 9 = 46$ ✓. Check a second, independent way by restoring the corner: slide the inner $5$-long edge down into the gap in the bottom and the inner $4$-long edge right into the gap in the right side — the outline becomes the full $14 \\times 9$ rectangle, whose perimeter is $2(14 + 9) = 46$ ✓. Losing the corner cost the patio area but not one unit of edge. (The choice $37$ is LEAVING OUT A SIDE, dropping one of the $9$s from the sum ✗; $54$ is TREATING THE CORNER CUT LIKE A NOTCH and adding $2 \\cdot 4$ ✗; $106$ is COMPUTING THE AREA, $126 - 20$ ✗.)',
    },
  ],
  // s9 — fixed perimeter, whole-number sides, largest possible area.
  [
    {
      q: 'A rabbit pen is a rectangle built from exactly $32$ meters of fencing, with whole-number side lengths. What is the largest area the pen can enclose?',
      choices: ['$64$', '$63$', '$15$', '$256$'],
      answer: 0,
      solution:
        'Perimeter $32$ means length plus width is $16$. March through the pairs: $1 \\times 15 = 15$, $2 \\times 14 = 28$, $\\ldots$, $6 \\times 10 = 60$, $7 \\times 9 = 63$, $8 \\times 8 = 64$ — the square tops the list at $64$ ✓. Check a second, independent way with symmetry instead of a list: write the sides as $8 - k$ and $8 + k$, which always sum to $16$. The area is $(8 - k)(8 + k) = 64 - k^2$, largest when $k = 0$ — the square again, area $64$ ✓, and every step away from square costs exactly $k^2$. (The choice $63$ is STOPPING ONE STEP SHORT OF THE SQUARE at $7 \\times 9$ ✗; $15$ is ANSWERING THE SMALLEST AREA, the lopsided $1 \\times 15$ pen ✗; $256$ is FORGETTING TO HALVE THE PERIMETER, treating $32$ as length plus width and squaring $16$ ✗.)',
    },
    {
      q: 'A rectangle has perimeter $20$, and its side lengths are whole numbers. What is the largest area it could have?',
      choices: ['$24$', '$25$', '$100$', '$9$'],
      answer: 1,
      solution:
        'The sides add to $\\frac{20}{2} = 10$. Try every whole-number pair: $1 \\times 9 = 9$, $2 \\times 8 = 16$, $3 \\times 7 = 21$, $4 \\times 6 = 24$, $5 \\times 5 = 25$ — the square wins with $25$ ✓. Check a second, independent way by writing the sides as $5 - k$ and $5 + k$: the area is $(5 - k)(5 + k) = 25 - k^2$, which can only lose ground as $k$ grows, so the maximum sits at $k = 0$, the $5 \\times 5$ square ✓. (The choice $24$ is STOPPING ONE STEP SHORT OF THE SQUARE at $4 \\times 6$ ✗; $9$ is ANSWERING THE SMALLEST AREA, the $1 \\times 9$ sliver ✗; $100$ is FORGETTING TO HALVE THE PERIMETER and squaring $10$ as if $20$ were the side sum ✗.)',
    },
    {
      q: 'Using exactly $28$ feet of border fencing, a gardener encloses a rectangular herb bed with whole-number side lengths. What is the largest area the bed can have?',
      choices: ['$48$', '$13$', '$49$', '$196$'],
      answer: 2,
      solution:
        'Perimeter $28$ pins length plus width at $14$. The pairs run $1 \\times 13 = 13$, $2 \\times 12 = 24$, $3 \\times 11 = 33$, $4 \\times 10 = 40$, $5 \\times 9 = 45$, $6 \\times 8 = 48$, $7 \\times 7 = 49$ — the square finishes on top with $49$ ✓. Check a second, independent way without listing: sides $7 - k$ and $7 + k$ give area $(7 - k)(7 + k) = 49 - k^2$, so every unit of lopsidedness subtracts $k^2$ from the square’s $49$ ✓ — same fence, and the squarest bed holds the most soil. (The choice $48$ is STOPPING ONE STEP SHORT OF THE SQUARE at $6 \\times 8$ ✗; $13$ is ANSWERING THE SMALLEST AREA, the $1 \\times 13$ strip ✗; $196$ is FORGETTING TO HALVE THE PERIMETER, squaring $14$ as if the whole $28$ were length plus width ✗.)',
    },
  ],
  // s10 — staircase perimeter; the step count is a decoy.
  [
    {
      q: 'Every angle in the five-step staircase shown is a right angle, and only the total width and total height are labeled. What is its perimeter?',
      fig: {
        view: [-1.5, -1.5, 13.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 2], [10, 2], [10, 3], [8, 3], [8, 5], [5, 5], [5, 6], [2, 6], [2, 8], [0, 8]] },
          { t: 'label', p: [6, -0.8], text: '12' },
          { t: 'label', p: [-0.7, 4], text: '8' },
        ],
      },
      choices: ['$96$', '$20$', '$40$', '$36$'],
      answer: 2,
      solution:
        'Five steps or fifty — it makes no difference. Slide every tread up to the top and every riser out to the side: they rebuild the top and right of a $12 \\times 8$ bounding rectangle, so the perimeter is $2(12 + 8) = 40$ ✓. Check a second, independent way by bookkeeping the loop: walking once around, rightward travel must equal leftward travel and upward must equal downward, since the walk returns home. The only rightward edge is the bottom, $12$, and the only downward edge is the tall left side, $8$ — so the loop totals $12 + 12 + 8 + 8 = 40$ ✓, and the unlabeled steps never enter the ledger. (The choice $96$ is COMPUTING THE BOUNDING AREA, $12 \\times 8$ ✗; $20$ is WALKING ONLY HALF THE LOOP ✗; $36$ is ASSUMING THE STEPS CUT THE WALK SHORT ✗.)',
    },
    {
      q: 'The three-step staircase profile shown descends from right to left, every angle is a right angle, and only the total width and total height are labeled. What is its perimeter?',
      fig: {
        view: [-1.5, -1.5, 10.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [9, 7], [6, 7], [6, 5], [3, 5], [3, 2], [0, 2]] },
          { t: 'label', p: [4.5, -0.7], text: '9' },
          { t: 'label', p: [9.6, 3.5], text: '7' },
        ],
      },
      choices: ['$63$', '$16$', '$30$', '$32$'],
      answer: 3,
      solution:
        'The staircase leans the other way, but the slide trick is ambidextrous: push each tread up to the top level and each riser out to the left, and the boundary rebuilds a $9 \\times 7$ rectangle. Perimeter: $2(9 + 7) = 32$ ✓. Check a second, independent way with the drawn steps, whose treads are $3$, $3$, $3$ and risers are $2$, $3$, $2$: the full walk is $9 + 7 + 3 + 2 + 3 + 3 + 3 + 2 = 32$ ✓ — the concrete tally matches the rectangle, and rearranging the steps could never change it. (The choice $63$ is COMPUTING THE BOUNDING AREA, $9 \\times 7$ ✗; $16$ is WALKING ONLY HALF THE LOOP, one width plus one height ✗; $30$ is ASSUMING THE STEPS CUT THE WALK SHORT ✗.)',
    },
    {
      q: 'Every angle in the six-step staircase shown is a right angle. Only the total width and total height are labeled. What is the perimeter of the staircase?',
      fig: {
        view: [-2, -2, 15.5, 14.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [14, 2], [12, 2], [12, 4], [10, 4], [10, 6], [8, 6], [8, 8], [5, 8], [5, 10], [3, 10], [3, 13], [0, 13]] },
          { t: 'label', p: [7, -0.9], text: '14' },
          { t: 'label', p: [-0.9, 6.5], text: '13' },
        ],
      },
      choices: ['$50$', '$54$', '$182$', '$27$'],
      answer: 1,
      solution:
        'Slide all six treads up and all six risers out to the right: together they span exactly the top and the right side of a $14 \\times 13$ bounding rectangle, so the perimeter is $2(14 + 13) = 54$ ✓. Check a second, independent way by the come-home count: one lap around the boundary must balance rightward against leftward travel and upward against downward. Rightward happens only along the bottom, $14$; downward only along the left side, $13$; so the lap is $14 + 14 + 13 + 13 = 54$ ✓ — six steps of decoration, zero effect on the total. (The choice $182$ is COMPUTING THE BOUNDING AREA, $14 \\times 13$, which the staircase does not even fill ✗; $27$ is WALKING ONLY HALF THE LOOP ✗; $50$ is ASSUMING THE STEPS CUT THE WALK SHORT ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 4,
  sections: {
    '4.1': s41,
  },
}
