// Introduction to Geometry chapter 7 — variations for section 7.1 (Bisectors).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every numeric key was worked twice by routes that do not share arithmetic:
//    the bisector theorem against an SAS congruence, a Pythagorean subtraction
//    against a difference-of-squares factoring, a special-right-triangle ratio
//    against a coordinate computation, and two perpendicular bisectors crossed
//    against the midpoint-of-the-hypotenuse circumradius. Both routes must
//    agree before a key is written down.
//  - Figures are built from their own numbers: perpendicular bisectors cross
//    at true midpoints at true right angles (every right marker was checked
//    against a dot product), angle bisectors run at the exact half-angle, and
//    perpendicular feet sit at their exact projections.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution.
//  - No two choices inside an item name the same value.

const s71 = [
  // s1 — on the perpendicular bisector, one distance given: PB = PA.
  [
    {
      q: 'A treasure map shows two palm trees at $A$ and $B$ and a chest buried at $P$, a point on the perpendicular bisector of $\\overline{AB}$. The map says the chest is $7$ paces from tree $A$. How many paces is the chest from tree $B$?',
      fig: {
        view: [-1.5, -1.5, 10, 7],
        elems: [
          { t: 'seg', a: [0, 0], b: [8.4, 0] },
          { t: 'seg', a: [4.2, 0], b: [4.2, 6.3], dash: true },
          { t: 'right', at: [4.2, 0], from: [8.4, 0], to: [4.2, 6.3] },
          { t: 'seg', a: [0, 0], b: [4.2, 5.6] },
          { t: 'label', p: [2.1, 2.8], text: '7', dx: -8, dy: -6 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [8.4, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [4.2, 0], label: 'M', dx: 10, dy: 12 },
          { t: 'point', p: [4.2, 5.6], label: 'P', dx: 12, dy: -4 },
        ],
      },
      choices: ['$7$', '$3.5$', '$14$', 'It cannot be determined'],
      answer: 0,
      solution:
        'The perpendicular bisector of $\\overline{AB}$ is precisely the set of points equidistant from $A$ and $B$, so $PB = PA = 7$ paces ✓. Check a second, independent way with congruence: letting $M$ be the midpoint, triangles $PMA$ and $PMB$ share $\\overline{PM}$, have $AM = MB$, and hold right angles at $M$ — SAS congruence, so the hypotenuses match and $PB = 7$ ✓. (The choice $3.5$ is HALVING A DISTANCE THAT NEVER HALVES — the bisector cuts $\\overline{AB}$ in half, not $\\overline{PA}$ ✗; $14$ is DOUBLING THE GIVEN instead ✗; “cannot be determined” is DEMANDING MORE DATA after the bisector has already answered ✗.)',
    },
    {
      q: 'A delivery drone hovers at $P$, a point on the perpendicular bisector of the segment joining two landing pads $A$ and $B$. Its tether to pad $A$ is $9$ m long and pulled straight. How far is the drone from pad $B$?',
      fig: {
        view: [-1.5, -1.5, 12.5, 8.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [10.8, 0] },
          { t: 'seg', a: [5.4, 0], b: [5.4, 8], dash: true },
          { t: 'right', at: [5.4, 0], from: [10.8, 0], to: [5.4, 8] },
          { t: 'seg', a: [0, 0], b: [5.4, 7.2] },
          { t: 'label', p: [2.7, 3.6], text: '9', dx: -8, dy: -6 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [10.8, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [5.4, 0], label: 'M', dx: 10, dy: 12 },
          { t: 'point', p: [5.4, 7.2], label: 'P', dx: 12, dy: -4 },
        ],
      },
      choices: ['$4.5$', '$18$', '$9$', 'It cannot be determined'],
      answer: 2,
      solution:
        'Being on the perpendicular bisector is a membership card: it certifies $PA = PB$, so the drone is $9$ m from pad $B$ ✓. Check a second, independent way through triangles: $\\triangle PMA \\cong \\triangle PMB$ by SAS ($AM = MB$, right angles at the midpoint $M$, shared side $\\overline{PM}$), and matching hypotenuses give $PB = 9$ ✓. (The choice $4.5$ is HALVING A DISTANCE THAT NEVER HALVES — only $\\overline{AB}$ gets bisected ✗; $18$ is DOUBLING THE GIVEN ✗; “cannot be determined” is DEMANDING MORE DATA the theorem does not need ✗.)',
    },
    {
      q: 'Nadia folds a sheet of paper so that corner $A$ lands exactly on corner $B$; the crease is the perpendicular bisector of $\\overline{AB}$. She marks a point $P$ on the crease and measures $PA = 6$ cm. What is $PB$?',
      fig: {
        view: [-1.5, -1.5, 9, 6],
        elems: [
          { t: 'seg', a: [0, 0], b: [7.2, 0] },
          { t: 'seg', a: [3.6, 0], b: [3.6, 5.5], dash: true },
          { t: 'right', at: [3.6, 0], from: [7.2, 0], to: [3.6, 5.5] },
          { t: 'seg', a: [0, 0], b: [3.6, 4.8] },
          { t: 'label', p: [1.8, 2.4], text: '6', dx: -8, dy: -6 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [7.2, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [3.6, 0], label: 'M', dx: 10, dy: 12 },
          { t: 'point', p: [3.6, 4.8], label: 'P', dx: 12, dy: -4 },
        ],
      },
      choices: ['$3$', '$12$', 'It cannot be determined', '$6$'],
      answer: 3,
      solution:
        'Every point of the crease is equidistant from $A$ and $B$ — that is exactly what the perpendicular bisector collects — so $PB = PA = 6$ cm ✓. Check a second, independent way with the fold itself: folding along the crease carries $A$ onto $B$ while every crease point stays put, so the segment $\\overline{PA}$ lands exactly on $\\overline{PB}$, and lengths survive a fold: $PB = 6$ ✓. (The choice $3$ is HALVING A DISTANCE THAT NEVER HALVES ✗; $12$ is DOUBLING THE GIVEN ✗; “cannot be determined” is DEMANDING MORE DATA when the crease has already promised equality ✗.)',
    },
  ],
  // s2 — the locus equidistant from two points.
  [
    {
      q: 'A city wants to place a bike-repair kiosk so that it is exactly the same distance from park entrance $A$ as from park entrance $B$. Which of the following describes ALL the possible locations?',
      choices: [
        'the perpendicular bisector of the segment joining $A$ and $B$',
        'the midpoint of $\\overline{AB}$, and nowhere else',
        'a circle centered at the midpoint of $\\overline{AB}$',
        'the segment $\\overline{AB}$ itself',
      ],
      answer: 0,
      solution:
        'The theorem runs both ways: every point on the perpendicular bisector of $\\overline{AB}$ satisfies $PA = PB$, and every point with $PA = PB$ must sit on that bisector — so the bisector is the complete list ✓. Check a second, independent way with coordinates: put $A(-a, 0)$ and $B(a, 0)$; then $PA = PB$ squares out to $(x + a)^2 + y^2 = (x - a)^2 + y^2$, which collapses to $4ax = 0$, the vertical line $x = 0$ — exactly the perpendicular bisector ✓. (The midpoint answer is STOPPING AT THE MIDPOINT, one fair point among infinitely many ✗; the circle is WRAPPING A CIRCLE — most of its points lean toward one entrance ✗; the segment is STAYING ON THE SEGMENT, where only the midpoint is fair ✗.)',
    },
    {
      q: 'A phone company must build a relay tower serving villages $A$ and $B$ with equal signal distance to each. The planner asks for the full set of fair tower sites on the map. What is it?',
      choices: [
        'a circle centered at village $A$',
        'the perpendicular bisector of the segment joining the two villages',
        'the midpoint of the segment joining the villages, and nowhere else',
        'either of the two village locations',
      ],
      answer: 1,
      solution:
        'Equal distances to $A$ and $B$ is the defining property of the perpendicular bisector of $\\overline{AB}$ — every bisector point qualifies, and by the converse no other point does, so the fair sites form exactly that line ✓. Check a second, independent way with coordinates: with $A(0, 0)$ and $B(2m, 0)$, the condition $x^2 + y^2 = (x - 2m)^2 + y^2$ simplifies to $x = m$, the vertical line through the midpoint, perpendicular to $\\overline{AB}$ ✓. (A circle centered at $A$ is CIRCLING ONE POINT — it fixes the distance to $A$ and ignores $B$ ✗; the midpoint alone is STOPPING AT THE MIDPOINT ✗; the villages themselves are STANDING ON AN ENDPOINT, each a distance $0$ from itself and $AB$ from the other ✗.)',
    },
    {
      q: 'Mateo folds a park map so that the dot for oak tree $A$ lands exactly on the dot for oak tree $B$, then unfolds it. Every point of the crease is equally far from the two trees, and no point off the crease is. Which line is the crease?',
      choices: [
        'a line through $A$ perpendicular to $\\overline{AB}$',
        'the segment $\\overline{AB}$ itself',
        'a circle passing through both $A$ and $B$',
        'the perpendicular bisector of $\\overline{AB}$',
      ],
      answer: 3,
      solution:
        'The set of ALL points equidistant from two points $A$ and $B$ is the perpendicular bisector of $\\overline{AB}$ — the theorem forward puts every bisector point in the set, and the converse keeps everyone else out — so the crease is that bisector ✓. Check a second, independent way from the fold: the fold is a reflection carrying $A$ to $B$, so the crease is the mirror line of that reflection; a mirror swapping $A$ and $B$ must cross $\\overline{AB}$ at its midpoint and at a right angle, which is the perpendicular bisector described ✓. (A perpendicular through $A$ is ANCHORING AT AN ENDPOINT — it misses the midpoint ✗; the segment itself is STAYING ON THE SEGMENT ✗; a circle through $A$ and $B$ is WRAPPING A CIRCLE, and it is not even a line ✗.)',
    },
  ],
  // s3 — AB and PA given: Pythagoras in the half-triangle for PM.
  [
    {
      q: 'Two docks $A$ and $B$ sit $12$ m apart on a straight pier edge, and a buoy $P$ floats equally far from both, with $PA = 10$ m. $M$ is the midpoint of $\\overline{AB}$. How far is the buoy from $M$?',
      fig: {
        view: [-1.5, -1.5, 13.5, 9.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [6, 0], b: [6, 9], dash: true },
          { t: 'right', at: [6, 0], from: [12, 0], to: [6, 9] },
          { t: 'seg', a: [0, 0], b: [6, 8] },
          { t: 'label', p: [3, 4], text: '10', dx: -12, dy: -4 },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'M', dx: 10, dy: 12 },
          { t: 'point', p: [6, 8], label: 'P', dx: 0, dy: -12 },
        ],
      },
      choices: ['$8$', '$4$', '$2\\sqrt{34}$', '$10$'],
      answer: 0,
      solution:
        'Since $PA = PB$, the buoy sits on the perpendicular bisector of $\\overline{AB}$, so $\\triangle PMA$ has a right angle at $M$ with hypotenuse $PA = 10$ and leg $AM = 6$ (half of $12$). Then $PM = \\sqrt{10^2 - 6^2} = \\sqrt{64} = 8$ m — the $6$-$8$-$10$ family, twice $3$-$4$-$5$ ✓. Check a second, independent way with a difference of squares: $10^2 - 6^2 = (10 - 6)(10 + 6) = 4 \\times 16 = 64$, and $\\sqrt{64} = 8$ again ✓. Guard: $6^2 + 8^2 = 36 + 64 = 100 = 10^2$ ✓. (The choice $4$ is SUBTRACTING THE LENGTHS $10 - 6$ without squaring ✗; $2\\sqrt{34}$ is ADDING THE SQUARES, $\\sqrt{100 + 36}$, as if $PM$ were a hypotenuse ✗; $10$ is HANDING BACK $PA$, answering the wrong segment ✗.)',
    },
    {
      q: 'A zipline platform $P$ is anchored by two equally long cables to posts $A$ and $B$, which stand $16$ ft apart, and each cable measures $17$ ft. $M$ is the midpoint of $\\overline{AB}$. Find $PM$, the height of the platform above $M$.',
      fig: {
        view: [-1.5, -1.5, 17.5, 16.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [16, 0] },
          { t: 'seg', a: [8, 0], b: [8, 16], dash: true },
          { t: 'right', at: [8, 0], from: [16, 0], to: [8, 16] },
          { t: 'seg', a: [0, 0], b: [8, 15] },
          { t: 'seg', a: [16, 0], b: [8, 15] },
          { t: 'label', p: [4, 7.5], text: '17', dx: -12, dy: -4 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [8, 0], label: 'M', dx: 10, dy: 12 },
          { t: 'point', p: [8, 15], label: 'P', dx: 0, dy: -12 },
        ],
      },
      choices: ['$\\sqrt{33}$', '$9$', '$17$', '$15$'],
      answer: 3,
      solution:
        'Equal cables put $P$ on the perpendicular bisector of $\\overline{AB}$, so $\\overline{PM}$ meets $\\overline{AB}$ at a right angle at the midpoint. Right triangle $PMA$ has hypotenuse $17$ and leg $AM = 8$ (half of $16$), so $PM = \\sqrt{17^2 - 8^2} = \\sqrt{225} = 15$ ft — the $8$-$15$-$17$ triple ✓. Check a second, independent way with a difference of squares: $17^2 - 8^2 = (17 - 8)(17 + 8) = 9 \\times 25 = 225$, and $\\sqrt{225} = 15$ again ✓. Guard: $8^2 + 15^2 = 64 + 225 = 289 = 17^2$ ✓. (The choice $\\sqrt{33}$ is USING THE WHOLE SEGMENT, $\\sqrt{17^2 - 16^2}$, instead of half of $AB$ ✗; $9$ is SUBTRACTING THE LENGTHS $17 - 8$ ✗; $17$ is HANDING BACK $PA$ ✗.)',
    },
    {
      q: 'Two lighthouses $A$ and $B$ stand $18$ km apart along a straight north–south coast. A ship $P$ holds a course equally distant from both, currently $41$ km from each. $M$ is the midpoint of $\\overline{AB}$. How far is the ship from $M$?',
      fig: {
        w: 440,
        view: [-2, -1.5, 42.5, 19.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [0, 18] },
          { t: 'seg', a: [0, 9], b: [41, 9], dash: true },
          { t: 'right', at: [0, 9], from: [0, 18], to: [41, 9] },
          { t: 'seg', a: [0, 0], b: [40, 9] },
          { t: 'label', p: [20, 4.5], text: '41', dx: 0, dy: 14 },
          { t: 'label', p: [0, 4.5], text: '9', dx: -10, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [0, 18], label: 'B', dx: -10, dy: -6 },
          { t: 'point', p: [0, 9], label: 'M', dx: -12, dy: -6 },
          { t: 'point', p: [40, 9], label: 'P', dx: 12, dy: 0 },
        ],
      },
      choices: ['$\\sqrt{1357}$', '$40$', '$32$', '$41$'],
      answer: 1,
      solution:
        'Equidistant from the lighthouses means $P$ rides the perpendicular bisector of $\\overline{AB}$, so triangle $PMA$ is right-angled at $M$ with hypotenuse $41$ and leg $AM = 9$ (half of $18$). Then $PM = \\sqrt{41^2 - 9^2} = \\sqrt{1600} = 40$ km — the $9$-$40$-$41$ triple ✓. Check a second, independent way with a difference of squares: $41^2 - 9^2 = (41 - 9)(41 + 9) = 32 \\times 50 = 1600$, and $\\sqrt{1600} = 40$ again ✓. Guard: $9^2 + 40^2 = 81 + 1600 = 1681 = 41^2$ ✓. (The choice $\\sqrt{1357}$ is USING THE WHOLE SEGMENT, $\\sqrt{41^2 - 18^2}$, instead of half of $AB$ ✗; $32$ is SUBTRACTING THE LENGTHS $41 - 9$ ✗; $41$ is HANDING BACK $PA$ ✗.)',
    },
  ],
  // s4 — the locus equidistant from the two sides of an angle.
  [
    {
      q: 'Two straight skate-park walls meet at a corner. A support pillar must stand in the region between the walls, exactly the same perpendicular distance from each wall. Where can the pillar go?',
      choices: [
        'anywhere along one of the two walls',
        'on a circle centered at the corner',
        'on the ray that bisects the angle between the walls',
        'on the perpendicular bisector of the corner point',
      ],
      answer: 2,
      solution:
        'Equal perpendicular distances to the two sides of an angle is exactly the membership test for the angle bisector — points on the bisector pass it, and by the converse no interior point off the bisector does ✓. Check a second, independent way by reflection: the mirror that carries one wall onto the other is the bisector line, and a point equidistant from both walls must sit on that mirror, since reflecting it swaps its two distances while leaving the point’s position requirement unchanged ✓. (Standing on a wall is HUGGING A WALL — there the distance to that wall is $0$ while the other is not ✗; a circle centered at the corner is MEASURING FROM THE CORNER, fixing the distance to the vertex instead of to the sides ✗; a single point has no perpendicular bisector, so the last choice is BISECTING A POINT ✗.)',
    },
    {
      q: 'Two hedges border a triangular garden bed and meet at a corner. A gardener wants every possible spot for a sprinkler that sprays just far enough to wet both hedges at once — the spots whose perpendicular distances to the two hedges are equal. Which set is it?',
      choices: [
        'the ray from the corner that splits the corner angle into two equal halves',
        'the single point at the corner, and nowhere else',
        'a line parallel to one of the hedges',
        'the perpendicular bisector of the segment joining the far ends of the hedges',
      ],
      answer: 0,
      solution:
        'A point is the same perpendicular distance from the two sides of an angle exactly when it lies on the angle bisector — the theorem supplies every bisector point, and the converse rules out the rest, so the sprinkler spots form the bisecting ray ✓. Check a second, independent way with congruent triangles: from a fair point $P$, drop perpendiculars to the two hedges; the two right triangles formed with the corner share the hypotenuse from the corner to $P$ and have equal legs, so they are congruent by HL, forcing equal angles at the corner — $P$ is on the bisector ✓. (The corner alone is STANDING AT THE VERTEX, one fair point among infinitely many ✗; a parallel line is HUGGING A WALL at a fixed offset, fair to one hedge only ✗; bisecting the segment between hedge ends is BISECTING THE WRONG OBJECT — that line collects points equidistant from two POINTS, not two sides ✗.)',
    },
    {
      q: 'Priya folds a triangular flag through one corner so that one edge at that corner lands exactly along the other edge, then unfolds it. Every point of the crease is the same perpendicular distance from the two edges. Which line is the crease?',
      choices: [
        'the perpendicular bisector of either edge',
        'a line parallel to one of the edges',
        'the segment joining the midpoints of the two edges',
        'the bisector of the angle at that corner',
      ],
      answer: 3,
      solution:
        'The set of points equidistant from the two sides of an angle is the angle bisector, both by the forward theorem and by its converse — so the crease is the bisector of the corner angle ✓. Check a second, independent way from the fold: the fold is a reflection fixing the corner and carrying one edge onto the other, so its crease makes equal angles with the two edges — the very definition of the angle bisector — and reflections preserve perpendicular distances, which is why every crease point measures the same to both edges ✓. (A perpendicular bisector of an edge is BISECTING THE WRONG OBJECT — it serves two endpoints, not two sides ✗; a parallel line is HUGGING A WALL ✗; the midpoint-to-midpoint segment misses the corner entirely, GRABBING THE MIDLINE ✗.)',
    },
  ],
  // s5 — on the angle bisector, one perpendicular distance given.
  [
    {
      q: 'Two garden walls meet at a right angle at $O$. A sprinkler at $P$ sits on the bisector of that angle, and its perpendicular distance to one wall is $6$ ft. What is its perpendicular distance to the other wall?',
      fig: {
        view: [-1.5, -1.5, 10, 10],
        elems: [
          { t: 'seg', a: [0, 0], b: [9, 0] },
          { t: 'seg', a: [0, 0], b: [0, 9] },
          { t: 'seg', a: [0, 0], b: [8, 8], dash: true },
          { t: 'seg', a: [6, 6], b: [6, 0], dash: true },
          { t: 'seg', a: [6, 6], b: [0, 6], dash: true },
          { t: 'right', at: [6, 0], from: [9, 0], to: [6, 6] },
          { t: 'right', at: [0, 6], from: [0, 9], to: [6, 6] },
          { t: 'label', p: [6, 3], text: '6', dx: 10, dy: 0 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [6, 6], label: 'P', dx: 10, dy: -8 },
        ],
      },
      choices: ['$3$', '$6$', '$6\\sqrt{2}$', '$12$'],
      answer: 1,
      solution:
        'Points on an angle bisector are equidistant from the two sides of the angle, so the second perpendicular distance is also $6$ ft ✓. Check a second, independent way with congruent triangles: the two perpendicular feet, the vertex $O$, and $P$ form two right triangles sharing the hypotenuse $\\overline{OP}$ and having equal angles at $O$ (the bisector splits the angle evenly), so they are congruent by AAS, and the matching legs give the same $6$ ✓. (The choice $3$ is HALVING A DISTANCE THAT NEVER HALVES ✗; $6\\sqrt{2}$ is ANSWERING THE VERTEX DISTANCE — that is $OP$, the slant to the corner, not the perpendicular to a wall ✗; $12$ is DOUBLING THE GIVEN ✗.)',
    },
    {
      q: 'Two park paths leave a gate at $O$ and open at a $60^\\circ$ angle. A food cart at $P$ parks on the bisector of the angle, with a perpendicular distance of $8$ m to one path. How far is the cart, measured perpendicularly, from the other path?',
      fig: {
        view: [-1.5, -1.5, 17.5, 15],
        elems: [
          { t: 'seg', a: [0, 0], b: [16, 0] },
          { t: 'seg', a: [0, 0], b: [8, 13.8564] },
          { t: 'seg', a: [0, 0], b: [13.8564, 8], dash: true },
          { t: 'seg', a: [13.8564, 8], b: [13.8564, 0], dash: true },
          { t: 'seg', a: [13.8564, 8], b: [6.9282, 12], dash: true },
          { t: 'right', at: [13.8564, 0], from: [16, 0], to: [13.8564, 8] },
          { t: 'right', at: [6.9282, 12], from: [8, 13.8564], to: [13.8564, 8] },
          { t: 'angle', at: [0, 0], from: [16, 0], to: [8, 13.8564], r: 1.6, label: '60°' },
          { t: 'label', p: [13.8564, 4], text: '8', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [13.8564, 8], label: 'P', dx: 12, dy: 6 },
        ],
      },
      choices: ['$8$', '$16$', '$4$', '$8\\sqrt{3}$'],
      answer: 0,
      solution:
        'The angle bisector is the fairness line of the angle: every point on it has equal perpendicular distances to the two sides, so the second distance is also $8$ m ✓ — the $60^\\circ$ opening never enters the answer. Check a second, independent way by reflection: reflecting across the bisector swaps the two paths and fixes $P$, so it carries one perpendicular foot to the other and the two distances trade places — they must be equal ✓. (The choice $16$ is ANSWERING THE VERTEX DISTANCE, since $OP = \\frac{8}{\\sin 30^\\circ} = 16$ ✗; $4$ is HALVING A DISTANCE THAT NEVER HALVES ✗; $8\\sqrt{3}$ is ANSWERING THE FOOT DISTANCE, the stretch from $O$ along a path to the perpendicular’s foot ✗.)',
    },
    {
      q: 'A marble rests at $P$ inside a V-shaped ramp whose two walls rise from the low point $O$ at a right angle to each other. $P$ lies on the bisector of the angle, and its perpendicular distance to one wall is $12$ cm. Find its perpendicular distance to the other wall.',
      fig: {
        view: [-15.5, -1.5, 15.5, 18.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [14, 14] },
          { t: 'seg', a: [0, 0], b: [-14, 14] },
          { t: 'seg', a: [0, 0], b: [0, 17.5], dash: true },
          { t: 'seg', a: [0, 16.9706], b: [8.4853, 8.4853], dash: true },
          { t: 'seg', a: [0, 16.9706], b: [-8.4853, 8.4853], dash: true },
          { t: 'right', at: [8.4853, 8.4853], from: [14, 14], to: [0, 16.9706] },
          { t: 'right', at: [-8.4853, 8.4853], from: [-14, 14], to: [0, 16.9706] },
          { t: 'label', p: [4.24, 12.73], text: '12', dx: 10, dy: -4 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [0, 16.9706], label: 'P', dx: 0, dy: -10 },
        ],
      },
      choices: ['$6$', '$24$', '$12\\sqrt{2}$', '$12$'],
      answer: 3,
      solution:
        'On an angle bisector, the two perpendicular distances to the sides always agree, so the marble is also $12$ cm from the other wall ✓. Check a second, independent way with congruence: the two right triangles built from $O$, the point $P$, and each perpendicular foot share the hypotenuse $\\overline{OP}$ and carry equal half-angles at $O$, so AAS makes them congruent and their leg distances match at $12$ ✓. (The choice $6$ is HALVING A DISTANCE THAT NEVER HALVES ✗; $24$ is DOUBLING THE GIVEN ✗; $12\\sqrt{2}$ is ANSWERING THE VERTEX DISTANCE $OP$, the slant down to the low point, not a perpendicular to a wall ✗.)',
    },
  ],
  // s6 — two equidistant points determine the perpendicular bisector.
  [
    {
      q: 'Ranger stations $P$ and $Q$ are each the same distance from trailhead $A$ as from trailhead $B$, as the tick marks show. A new path will run straight through $P$ and $Q$. Which statement about line $PQ$ must be true?',
      fig: {
        view: [-1.5, -5, 11.5, 6],
        elems: [
          { t: 'seg', a: [0, 0], b: [10, 0] },
          { t: 'seg', a: [5, -4], b: [5, 5], dash: true },
          { t: 'seg', a: [0, 0], b: [5, 4] },
          { t: 'seg', a: [10, 0], b: [5, 4] },
          { t: 'seg', a: [0, 0], b: [5, -3] },
          { t: 'seg', a: [10, 0], b: [5, -3] },
          { t: 'tick', a: [0, 0], b: [5, 4], n: 1 },
          { t: 'tick', a: [10, 0], b: [5, 4], n: 1 },
          { t: 'tick', a: [0, 0], b: [5, -3], n: 2 },
          { t: 'tick', a: [10, 0], b: [5, -3], n: 2 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 0 },
          { t: 'point', p: [10, 0], label: 'B', dx: 10, dy: 0 },
          { t: 'point', p: [5, 4], label: 'P', dx: 12, dy: -4 },
          { t: 'point', p: [5, -3], label: 'Q', dx: 12, dy: 6 },
        ],
      },
      choices: [
        'It is the perpendicular bisector of $\\overline{AB}$',
        'It is parallel to $\\overline{AB}$',
        'It passes through $A$',
        'It has the same length as $\\overline{AB}$',
      ],
      answer: 0,
      solution:
        'Each equidistant station lies on the perpendicular bisector of $\\overline{AB}$ by the converse of the bisector theorem, and two points determine exactly one line — so the path through $P$ and $Q$ IS that bisector ✓. Check a second, independent way with coordinates: put $A(0, 0)$ and $B(10, 0)$; the condition $PA = PB$ forces the $x$-coordinate $5$ on $P$, and the same for $Q$, so both stations sit on the vertical line $x = 5$ — the line through the midpoint, perpendicular to $\\overline{AB}$ ✓. (Parallel is impossible — the line CROSSES $\\overline{AB}$ at its midpoint, so that choice is MISSING THE CROSSING ✗; passing through $A$ would make $A$ equidistant from itself and $B$, which fails since $AB \\ne 0$ — STANDING ON AN ENDPOINT ✗; a full line has no finite length to compare, COMPARING A LINE TO A SEGMENT ✗.)',
    },
    {
      q: 'Surveyors check that marker $P$ is equally far from boundary stones $A$ and $B$, and that marker $Q$ is too, as the tick marks record. They then sight the straight line through $P$ and $Q$. What must that line be?',
      fig: {
        view: [-1.5, -3.5, 13.5, 6.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [6, -3], b: [6, 6], dash: true },
          { t: 'seg', a: [0, 0], b: [6, 5] },
          { t: 'seg', a: [12, 0], b: [6, 5] },
          { t: 'seg', a: [0, 0], b: [6, -2] },
          { t: 'seg', a: [12, 0], b: [6, -2] },
          { t: 'tick', a: [0, 0], b: [6, 5], n: 1 },
          { t: 'tick', a: [12, 0], b: [6, 5], n: 1 },
          { t: 'tick', a: [0, 0], b: [6, -2], n: 2 },
          { t: 'tick', a: [12, 0], b: [6, -2], n: 2 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 0 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 0 },
          { t: 'point', p: [6, 5], label: 'P', dx: 12, dy: -4 },
          { t: 'point', p: [6, -2], label: 'Q', dx: 12, dy: 6 },
        ],
      },
      choices: [
        'the bisector of the angle at $A$',
        'the perpendicular bisector of $\\overline{AB}$',
        'a line parallel to $\\overline{AB}$',
        'a line through $B$',
      ],
      answer: 1,
      solution:
        'The converse of the perpendicular bisector theorem places every point equidistant from $A$ and $B$ on the perpendicular bisector of $\\overline{AB}$ — so both $P$ and $Q$ are on it, and since one line holds two given points, line $PQ$ is that bisector ✓. Check a second, independent way with coordinates: with $A(0, 0)$ and $B(12, 0)$, the equation $x^2 + y^2 = (x - 12)^2 + y^2$ pins $x = 6$ for any equidistant point, so $P$ and $Q$ share the vertical line $x = 6$ through the midpoint ✓ — this is how surveyors erect a true perpendicular with nothing but a tape measure. (The angle-bisector choice is BISECTING THE WRONG OBJECT — no angle was measured ✗; parallel is MISSING THE CROSSING at the midpoint ✗; through $B$ is STANDING ON AN ENDPOINT, where the distances $0$ and $AB$ disagree ✗.)',
    },
    {
      q: 'An archaeology team stretches strings from pegs $A$ and $B$ to stake $P$ and finds the strings equally long; the same happens at stake $Q$, as the tick marks show. The team then snaps a chalk line through $P$ and $Q$. What is that chalk line?',
      fig: {
        view: [-1.5, -4.5, 9.5, 7.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [8, 0] },
          { t: 'seg', a: [4, -4], b: [4, 7], dash: true },
          { t: 'seg', a: [0, 0], b: [4, 6] },
          { t: 'seg', a: [8, 0], b: [4, 6] },
          { t: 'seg', a: [0, 0], b: [4, -3] },
          { t: 'seg', a: [8, 0], b: [4, -3] },
          { t: 'tick', a: [0, 0], b: [4, 6], n: 1 },
          { t: 'tick', a: [8, 0], b: [4, 6], n: 1 },
          { t: 'tick', a: [0, 0], b: [4, -3], n: 2 },
          { t: 'tick', a: [8, 0], b: [4, -3], n: 2 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 0 },
          { t: 'point', p: [8, 0], label: 'B', dx: 10, dy: 0 },
          { t: 'point', p: [4, 6], label: 'P', dx: 12, dy: -4 },
          { t: 'point', p: [4, -3], label: 'Q', dx: 12, dy: 6 },
        ],
      },
      choices: [
        'a line parallel to $\\overline{AB}$',
        'a line through peg $A$',
        'the perpendicular bisector of $\\overline{AB}$',
        'a segment the same length as $\\overline{AB}$',
      ],
      answer: 2,
      solution:
        'Equal strings mean $PA = PB$ and $QA = QB$, so each stake lies on the perpendicular bisector of $\\overline{AB}$ by the converse theorem; two points fix one line, so the chalk line is exactly that bisector ✓ — a right angle produced without any protractor. Check a second, independent way with coordinates: set $A(0, 0)$, $B(8, 0)$; equidistance forces $x = 4$ on both stakes, so the chalk line is the vertical line through the midpoint $(4, 0)$, perpendicular to $\\overline{AB}$ ✓. (Parallel is MISSING THE CROSSING — the line meets $\\overline{AB}$ at its midpoint ✗; through $A$ is STANDING ON AN ENDPOINT ✗; matching lengths is COMPARING A LINE TO A SEGMENT — the chalk line extends without bound ✗.)',
    },
  ],
  // s7 — AB and CA given, C on the bisector: height above the segment.
  [
    {
      q: 'A straight garden path runs $24$ m from gate $A$ to gate $B$. A fountain at $C$ is equally far from both gates — it sits on the perpendicular bisector of $\\overline{AB}$ — and $CA = 13$ m. How far is the fountain from the path?',
      fig: {
        w: 400,
        view: [-2, -2, 26, 7],
        elems: [
          { t: 'seg', a: [0, 0], b: [24, 0] },
          { t: 'seg', a: [12, 0], b: [12, 5], dash: true },
          { t: 'right', at: [12, 0], from: [24, 0], to: [12, 5] },
          { t: 'seg', a: [0, 0], b: [12, 5] },
          { t: 'seg', a: [24, 0], b: [12, 5] },
          { t: 'label', p: [6, 2.5], text: '13', dx: -10, dy: -6 },
          { t: 'label', p: [12, 0], text: '24', dx: -28, dy: 14 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [12, 5], label: 'C', dx: 0, dy: -12 },
        ],
      },
      choices: ['$5$', '$12$', '$13$', '$6.5$'],
      answer: 0,
      solution:
        'Drop the perpendicular from $C$ to the midpoint $M$ of $\\overline{AB}$ — that drop is part of the bisector itself. Right triangle $CMA$ has hypotenuse $CA = 13$ and leg $AM = 12$ (half of $24$), so the height is $\\sqrt{13^2 - 12^2} = \\sqrt{25} = 5$ m — the $5$-$12$-$13$ triangle ✓. Check a second, independent way with a difference of squares: $13^2 - 12^2 = (13 - 12)(13 + 12) = 1 \\times 25 = 25$, so the height is $\\sqrt{25} = 5$ again ✓. Guard: $5^2 + 12^2 = 169 = 13^2$ ✓. (The choice $12$ is ANSWERING THE HALF-BASE $AM$ ✗; $13$ is HANDING BACK $CA$ ✗; $6.5$ is HALVING $CA$, a distance that never halves ✗.)',
    },
    {
      q: 'A climbing anchor $C$ is bolted so that it is equally far from floor markers $A$ and $B$, which are $28$ ft apart; thus $C$ is on the perpendicular bisector of $\\overline{AB}$, and $CA = 50$ ft. What is the distance from the anchor straight down to line $AB$?',
      fig: {
        view: [-3.5, -4, 31.5, 53],
        elems: [
          { t: 'seg', a: [0, 0], b: [28, 0] },
          { t: 'seg', a: [14, 0], b: [14, 48], dash: true },
          { t: 'right', at: [14, 0], from: [28, 0], to: [14, 48] },
          { t: 'seg', a: [0, 0], b: [14, 48] },
          { t: 'seg', a: [28, 0], b: [14, 48] },
          { t: 'label', p: [7, 24], text: '50', dx: -12, dy: -4 },
          { t: 'label', p: [21, 0], text: '28', dx: 0, dy: 14 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [28, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [14, 48], label: 'C', dx: 0, dy: -12 },
        ],
      },
      choices: ['$\\sqrt{1716}$', '$48$', '$14$', '$50$'],
      answer: 1,
      solution:
        'The foot of the perpendicular from $C$ is the midpoint $M$, because that perpendicular runs along the bisector. In right triangle $CMA$, the hypotenuse is $CA = 50$ and the leg is $AM = 14$ (half of $28$), so the height is $\\sqrt{50^2 - 14^2} = \\sqrt{2304} = 48$ ft — the $7$-$24$-$25$ family scaled by two ✓. Check a second, independent way with a difference of squares: $50^2 - 14^2 = (50 - 14)(50 + 14) = 36 \\times 64$, and $\\sqrt{36 \\times 64} = 6 \\times 8 = 48$ ✓ — two perfect-square factors, no long arithmetic. Guard: $14^2 + 48^2 = 196 + 2304 = 2500 = 50^2$ ✓. (The choice $\\sqrt{1716}$ is USING THE WHOLE SEGMENT, $\\sqrt{50^2 - 28^2}$, instead of half of $AB$ ✗; $14$ is ANSWERING THE HALF-BASE ✗; $50$ is HANDING BACK $CA$ ✗.)',
    },
    {
      q: 'A zip line crosses a gorge whose rims are marked $A$ and $B$, with $AB = 48$ m. The line’s low point $C$ hangs equally far from both rims — on the perpendicular bisector of $\\overline{AB}$ — with $CA = 25$ m. How far is $C$ below line $AB$?',
      fig: {
        w: 440,
        view: [-3, -2.5, 51, 9.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [48, 0] },
          { t: 'seg', a: [24, 0], b: [24, 7], dash: true },
          { t: 'right', at: [24, 0], from: [48, 0], to: [24, 7] },
          { t: 'seg', a: [0, 0], b: [24, 7] },
          { t: 'seg', a: [48, 0], b: [24, 7] },
          { t: 'label', p: [12, 3.5], text: '25', dx: -10, dy: -6 },
          { t: 'label', p: [24, 0], text: '48', dx: -34, dy: 14 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [48, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [24, 7], label: 'C', dx: 0, dy: -12 },
        ],
      },
      choices: ['$24$', '$25$', '$7$', '$12.5$'],
      answer: 2,
      solution:
        'The perpendicular from $C$ lands on the midpoint $M$ of $\\overline{AB}$, since it runs along the bisector. Right triangle $CMA$ has hypotenuse $CA = 25$ and leg $AM = 24$ (half of $48$), so the depth is $\\sqrt{25^2 - 24^2} = \\sqrt{49} = 7$ m — the $7$-$24$-$25$ triple ✓. Check a second, independent way with a difference of squares: $25^2 - 24^2 = (25 - 24)(25 + 24) = 1 \\times 49 = 49$, and $\\sqrt{49} = 7$ again ✓. Guard: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$ ✓. (The choice $24$ is ANSWERING THE HALF-BASE $AM$ ✗; $25$ is HANDING BACK $CA$ ✗; $12.5$ is HALVING $CA$, a distance that never halves ✗.)',
    },
  ],
  // s8 — bisector plus OP: the half-angle sets the perpendicular distance.
  [
    {
      q: 'A square sheet of paper is folded along the diagonal crease through corner $O$, which bisects the $90^\\circ$ corner. A point $P$ on the crease satisfies $OP = 8$. What is the perpendicular distance from $P$ to each edge of the corner?',
      choices: ['$4$', '$4\\sqrt{2}$', '$8$', '$8\\sqrt{2}$'],
      answer: 1,
      solution:
        'The crease splits the $90^\\circ$ corner into two $45^\\circ$ halves, so dropping a perpendicular from $P$ to an edge builds a $45$-$45$-$90$ triangle with hypotenuse $OP = 8$; each leg is $\\frac{8}{\\sqrt{2}} = 4\\sqrt{2}$, and the bisector promises the same distance to both edges ✓. Check a second, independent way with coordinates: put the edges on the axes, so the crease is $y = x$ and $P = (a, a)$ with $OP = a\\sqrt{2} = 8$, giving $a = 4\\sqrt{2}$ — and $a$ is exactly the distance from $P$ to each axis ✓. Guard: $(4\\sqrt{2})^2 + (4\\sqrt{2})^2 = 32 + 32 = 64 = 8^2$ ✓. (The choice $4$ is HALVING $OP$ as though the half-angle were $30^\\circ$ ✗; $8$ is HANDING BACK $OP$, a slant length rather than a perpendicular one ✗; $8\\sqrt{2}$ is MULTIPLYING BY $\\sqrt{2}$ INSTEAD OF DIVIDING ✗.)',
    },
    {
      q: 'Two taxiways leave a hangar door at $O$ at a $60^\\circ$ angle to each other, and a guide beacon $P$ stands on the ray that bisects the angle, with $OP = 14$ m. Find the perpendicular distance from the beacon to each taxiway.',
      choices: ['$7\\sqrt{3}$', '$14$', '$7$', '$7\\sqrt{2}$'],
      answer: 2,
      solution:
        'The bisector makes a $30^\\circ$ angle with each taxiway, so the perpendicular from $P$ closes a $30$-$60$-$90$ triangle with hypotenuse $OP = 14$; the side opposite the $30^\\circ$ angle is half the hypotenuse, $\\frac{14}{2} = 7$ m, to each side alike ✓. Check a second, independent way with coordinates: put one taxiway on the $x$-axis, so $P = (14\\cos 30^\\circ, 14\\sin 30^\\circ) = (7\\sqrt{3}, 7)$; the distance to the $x$-axis is the $y$-coordinate, $7$, and the distance to the other taxiway, the line $y = \\sqrt{3}x$, is $\\frac{|\\sqrt{3} \\cdot 7\\sqrt{3} - 7|}{2} = \\frac{21 - 7}{2} = 7$ as well ✓. (The choice $7\\sqrt{3}$ is ANSWERING THE FOOT DISTANCE, the run from $O$ to the perpendicular’s foot ✗; $14$ is HANDING BACK $OP$ ✗; $7\\sqrt{2}$ is TRUSTING THE 45-DEGREE DEFAULT in a $30$-$60$-$90$ setting ✗.)',
    },
    {
      q: 'A rectangular field has a corner post at $O$, and a drone hovers over point $P$ on the ray that bisects the $90^\\circ$ corner, with $OP = 12$ m along the ground. What is the perpendicular distance from $P$ to each fence at that corner?',
      choices: ['$6$', '$12$', '$12\\sqrt{2}$', '$6\\sqrt{2}$'],
      answer: 3,
      solution:
        'The bisector of the $90^\\circ$ corner meets each fence at $45^\\circ$, so the perpendicular drop from $P$ completes a $45$-$45$-$90$ triangle whose hypotenuse is $OP = 12$; each leg measures $\\frac{12}{\\sqrt{2}} = 6\\sqrt{2}$ m, and the bisector guarantees the same figure for both fences ✓. Check a second, independent way with coordinates: fences along the axes put $P = (a, a)$ on $y = x$ with $a\\sqrt{2} = 12$, so $a = 6\\sqrt{2}$ — and each coordinate of $P$ is its distance to the opposite axis ✓. Guard: $(6\\sqrt{2})^2 + (6\\sqrt{2})^2 = 72 + 72 = 144 = 12^2$ ✓. (The choice $6$ is HALVING $OP$ as though the half-angle were $30^\\circ$ ✗; $12$ is HANDING BACK $OP$ ✗; $12\\sqrt{2}$ is MULTIPLYING BY $\\sqrt{2}$ INSTEAD OF DIVIDING ✗.)',
    },
  ],
  // s9 — CA = CB places C on the perpendicular bisector of AB.
  [
    {
      q: 'An A-frame cabin has two equal roof beams: $CA = CB$, where $A$ and $B$ are the base corners and $C$ is the peak. Which line must pass through the peak $C$?',
      fig: {
        view: [-1.5, -1.5, 11.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [5, 7]], fill: false },
          { t: 'seg', a: [5, 0], b: [5, 7], dash: true },
          { t: 'right', at: [5, 0], from: [10, 0], to: [5, 7] },
          { t: 'tick', a: [0, 0], b: [5, 7], n: 1 },
          { t: 'tick', a: [10, 0], b: [5, 7], n: 1 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [5, 7], label: 'C', dx: 0, dy: -12 },
        ],
      },
      choices: [
        'the perpendicular bisector of $\\overline{BC}$',
        'the perpendicular bisector of $\\overline{AB}$',
        'the bisector of angle $A$',
        'the line through the midpoints of $\\overline{CA}$ and $\\overline{CB}$',
      ],
      answer: 1,
      solution:
        'Equal beams mean $C$ is equidistant from $A$ and $B$, and the converse of the perpendicular bisector theorem sends every such point to the perpendicular bisector of $\\overline{AB}$ — so that bisector passes through the peak ✓. Check a second, independent way with congruence: joining $C$ to the midpoint $M$ of $\\overline{AB}$ gives $\\triangle CMA \\cong \\triangle CMB$ by SSS ($CA = CB$, $AM = MB$, shared $\\overline{CM}$), so the two angles at $M$ are equal and supplementary — each is $90^\\circ$, making $\\overline{CM}$ the perpendicular bisector itself ✓. (The bisector of $\\overline{BC}$ is BISECTING THE WRONG SEGMENT — nothing says $C$ is equidistant from $B$ and $C$ ✗; the bisector of angle $A$ is BISECTING THE WRONG OBJECT, and it starts at $A$, not $C$ ✗; the midline choice is GRABBING THE MIDLINE, which runs parallel to the base and misses $C$ ✗.)',
    },
    {
      q: 'A pendant $C$ hangs from two chains of equal length attached to hooks $A$ and $B$ on a wall, so $CA = CB$. Which line is guaranteed to pass through the pendant?',
      fig: {
        view: [-1.5, -1.5, 15.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [7, 4]], fill: false },
          { t: 'seg', a: [7, 0], b: [7, 4], dash: true },
          { t: 'right', at: [7, 0], from: [14, 0], to: [7, 4] },
          { t: 'tick', a: [0, 0], b: [7, 4], n: 1 },
          { t: 'tick', a: [14, 0], b: [7, 4], n: 1 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [14, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [7, 4], label: 'C', dx: 0, dy: -12 },
        ],
      },
      choices: [
        'the bisector of angle $B$',
        'a line through $A$ parallel to $\\overline{CB}$',
        'the perpendicular bisector of $\\overline{AB}$',
        'the perpendicular bisector of $\\overline{CA}$',
      ],
      answer: 2,
      solution:
        'The equal chains certify $CA = CB$, so the pendant is equidistant from the two hooks, and the converse of the perpendicular bisector theorem places it on the perpendicular bisector of $\\overline{AB}$ ✓. Check a second, independent way with congruence: with $M$ the midpoint of $\\overline{AB}$, triangles $CMA$ and $CMB$ agree side-for-side (SSS), so the angles they make at $M$ are equal halves of a straight angle — right angles — and $\\overline{CM}$ is precisely the perpendicular bisector, running through $C$ ✓. (The angle bisector at $B$ is BISECTING THE WRONG OBJECT ✗; the parallel through $A$ is DRAWING A PARALLEL with no claim on $C$ ✗; the bisector of $\\overline{CA}$ is BISECTING THE WRONG SEGMENT — it collects points equidistant from $C$ and $A$, and $C$ itself is not one ✗.)',
    },
    {
      q: 'A radio mast is held by two guy wires of equal length running from its tip $C$ to ground stakes $A$ and $B$, so $CA = CB$. Which line must the tip $C$ lie on?',
      fig: {
        view: [-1.5, -1.5, 9.5, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [4, 9]], fill: false },
          { t: 'seg', a: [4, 0], b: [4, 9], dash: true },
          { t: 'right', at: [4, 0], from: [8, 0], to: [4, 9] },
          { t: 'tick', a: [0, 0], b: [4, 9], n: 1 },
          { t: 'tick', a: [8, 0], b: [4, 9], n: 1 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [8, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [4, 9], label: 'C', dx: 0, dy: -12 },
        ],
      },
      choices: [
        'the perpendicular bisector of $\\overline{CB}$',
        'the bisector of angle $A$',
        'a line parallel to $\\overline{AB}$ through the midpoint of $\\overline{CA}$',
        'the perpendicular bisector of $\\overline{AB}$',
      ],
      answer: 3,
      solution:
        'Equal wires make the tip equidistant from the two stakes, and the converse of the perpendicular bisector theorem says every point with $CA = CB$ sits on the perpendicular bisector of $\\overline{AB}$ — so that line carries $C$ ✓. This is why a mast anchored symmetrically stands directly over the midpoint between its stakes. Check a second, independent way with congruence: the segment from $C$ to the midpoint $M$ of $\\overline{AB}$ splits the figure into $\\triangle CMA$ and $\\triangle CMB$, congruent by SSS, so the two angles at $M$ match and share a straight line — both are $90^\\circ$, identifying $\\overline{CM}$ with the perpendicular bisector ✓. (The bisector of $\\overline{CB}$ is BISECTING THE WRONG SEGMENT ✗; the angle bisector at $A$ is BISECTING THE WRONG OBJECT ✗; the parallel through the midpoint of $\\overline{CA}$ is GRABBING THE MIDLINE, which passes halfway UP the mast’s wire, not through the tip ✗.)',
    },
  ],
  // s10 — equidistant from three points: crossing two bisectors.
  [
    {
      q: 'A cell tower at $P$ must be equidistant from all three of the relay stations $A(0, 0)$, $B(10, 0)$, and $C(10, 24)$. What is the distance $PA$?',
      fig: {
        w: 200,
        view: [-1.5, -1.5, 12, 25.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [10, 0] },
          { t: 'seg', a: [10, 0], b: [10, 24] },
          { t: 'seg', a: [5, -1], b: [5, 25], dash: true },
          { t: 'seg', a: [-1, 12], b: [11.5, 12], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [10, 24], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [5, 12], label: 'P', dx: -10, dy: -8 },
        ],
      },
      choices: ['$13$', '$26$', '$12$', '$5$'],
      answer: 0,
      solution:
        'Equidistant from $A$ and $B$ puts $P$ on the vertical line $x = 5$; equidistant from $B$ and $C$ puts $P$ on the horizontal line $y = 12$. The bisectors cross at $P(5, 12)$, and $PA = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$ ✓, with $PB = \\sqrt{25 + 144} = 13$ and $PC = \\sqrt{25 + 144} = 13$ agreeing. Check a second, independent way through the right angle at $B$: $\\overline{AB}$ is horizontal and $\\overline{BC}$ vertical, so $\\overline{AC}$ is a hypotenuse of length $\\sqrt{10^2 + 24^2} = 26$, and the point equidistant from all three vertices of a right triangle is the midpoint of its hypotenuse, at distance $\\frac{26}{2} = 13$ from each vertex ✓. (The choice $26$ is ANSWERING THE DIAMETER, the whole hypotenuse instead of half ✗; $12$ and $5$ are each ANSWERING A COORDINATE of $P$ rather than a distance ✗.)',
    },
    {
      q: 'On a treasure map with coordinates in paces, three boulders sit at $A(0, 0)$, $B(16, 0)$, and $C(16, 12)$, and the treasure is buried at the point $P$ equidistant from all three. How many paces is the treasure from boulder $A$?',
      fig: {
        view: [-1.5, -1.5, 18, 13.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [16, 0] },
          { t: 'seg', a: [16, 0], b: [16, 12] },
          { t: 'seg', a: [8, -1], b: [8, 13], dash: true },
          { t: 'seg', a: [-1, 6], b: [17.5, 6], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [16, 12], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [8, 6], label: 'P', dx: -10, dy: -8 },
        ],
      },
      choices: ['$20$', '$10$', '$8$', '$6$'],
      answer: 1,
      solution:
        'Fairness to $A$ and $B$ pins the treasure to the vertical bisector $x = 8$; fairness to $B$ and $C$ pins it to the horizontal bisector $y = 6$. They cross at $P(8, 6)$, so $PA = \\sqrt{8^2 + 6^2} = \\sqrt{100} = 10$ paces ✓ — and $PB = \\sqrt{64 + 36} = 10$, $PC = \\sqrt{64 + 36} = 10$ agree. Check a second, independent way through the right angle at $B(16, 0)$: the hypotenuse $\\overline{AC}$ measures $\\sqrt{16^2 + 12^2} = 20$, and the equidistant point of a right triangle is the midpoint of its hypotenuse, $\\frac{20}{2} = 10$ paces from each boulder ✓. (The choice $20$ is ANSWERING THE DIAMETER — the full hypotenuse ✗; $8$ and $6$ are each ANSWERING A COORDINATE of $P$, not a distance to a boulder ✗.)',
    },
    {
      q: 'A rescue helipad at $P$ must be built the same flying distance from clinics at $A(0, 0)$, $B(18, 0)$, and $C(18, 24)$, with coordinates in km. Find the common distance $PA$.',
      fig: {
        w: 280,
        view: [-1.5, -1.5, 20, 25.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [18, 0] },
          { t: 'seg', a: [18, 0], b: [18, 24] },
          { t: 'seg', a: [9, -1], b: [9, 25], dash: true },
          { t: 'seg', a: [-1, 12], b: [19.5, 12], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [18, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [18, 24], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [9, 12], label: 'P', dx: -10, dy: -8 },
        ],
      },
      choices: ['$12$', '$9$', '$15$', '$30$'],
      answer: 2,
      solution:
        'Equidistance from $A$ and $B$ forces the helipad onto the vertical bisector $x = 9$, and equidistance from $B$ and $C$ onto the horizontal bisector $y = 12$; the two lines meet at $P(9, 12)$, so $PA = \\sqrt{9^2 + 12^2} = \\sqrt{225} = 15$ km ✓ — with $PB = \\sqrt{81 + 144} = 15$ and $PC = \\sqrt{81 + 144} = 15$ checking out. Check a second, independent way through the right angle at $B$: the hypotenuse $\\overline{AC}$ has length $\\sqrt{18^2 + 24^2} = \\sqrt{900} = 30$, and the point equidistant from a right triangle’s three vertices is its hypotenuse’s midpoint, $\\frac{30}{2} = 15$ km out ✓. (The choice $30$ is ANSWERING THE DIAMETER ✗; $12$ and $9$ are each ANSWERING A COORDINATE of $P$ instead of a distance ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 7,
  sections: {
    '7.1': s71,
  },
}
