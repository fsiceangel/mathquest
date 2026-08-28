// Introduction to Geometry chapter 16 — variations for section 16.5 (Changing
// the Question). All problems, figures, and solutions are original MathQuest
// content.
//
// House rules for this file:
//  - Every keyed answer was worked twice along routes that share no steps, and
//    the two routes had to agree before the key was written: reflecting one
//    endpoint vs. reflecting the other one (slots 2 and 5); cutting and sliding
//    the parallelogram straight vs. shaving two corner triangles off the
//    bounding rectangle (slot 3); the interior angle dividing 360 vs. counting
//    the copies that close up around a point exactly (slots 1, 4); vertical
//    slices of constant height vs. trading the bump on top for the notch
//    underneath (slot 6); the mirror line of the square vs. comparing the
//    vertical offsets while the horizontal offsets agree (slot 7); the two
//    reflections done one at a time vs. the twice-the-gap slide (slot 8);
//    crossing the axis on the way to the reflected endpoint vs. splitting the
//    horizontal run in the ratio of the two heights (slot 9); sliding the two
//    grass pieces together vs. measuring each leftover piece on its own
//    (slot 10).
//  - The figures are coordinate-grid pictures drawn the way the section itself
//    draws them: the region or path as a `poly`, the construction lines dashed,
//    and every named point marked with a plain-text label. Nothing the question
//    asks the solver to find is written on the figure.
//  - Figure labels are plain text: single letters and short phrases, never math
//    markup.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution and marked ✗.
//  - No two choices inside an item name the same value, and inside each slot the
//    three variations put the correct answer in three different positions.

// A shortest-path picture: the two endpoints, the reflected endpoint, and the
// two dashed construction segments. The touch point is deliberately left
// unmarked, since three of these ten slots ask for it.
function reflectFig(A, B, Bp, view, w, aOff = [-10, -4], bOff = [12, -4], pOff = [12, 4]) {
  return {
    ...(w ? { w } : {}),
    view,
    grid: true,
    elems: [
      { t: 'seg', a: A, b: Bp, dash: true },
      { t: 'seg', a: B, b: Bp, dash: true },
      { t: 'point', p: A, label: 'A', dx: aOff[0], dy: aOff[1] },
      { t: 'point', p: B, label: 'B', dx: bOff[0], dy: bOff[1] },
      { t: 'point', p: Bp, label: "B'", dx: pOff[0], dy: pOff[1] },
    ],
  }
}

// A leaning parallelogram sitting on the x-axis, with the vertical cut that
// turns it into a rectangle drawn dashed.
function pgramFig(base, rise, shift, view, w) {
  return {
    ...(w ? { w } : {}),
    view,
    grid: true,
    elems: [
      { t: 'poly', pts: [[0, 0], [base, 0], [base + shift, rise], [shift, rise]] },
      { t: 'seg', a: [base, 0], b: [base, rise], dash: true },
    ],
  }
}

// A strip caught between a zigzag and the same zigzag slid up by d, closed off
// by a vertical segment at each end.
function stripFig(span, peak, d, view, w) {
  const half = span / 2
  return {
    ...(w ? { w } : {}),
    view,
    grid: true,
    elems: [
      { t: 'poly', pts: [[0, 0], [half, peak], [span, 0], [span, d], [half, peak + d], [0, d]] },
      { t: 'seg', a: [0, 0], b: [0, d], dash: true },
      { t: 'seg', a: [span, 0], b: [span, d], dash: true },
    ],
  }
}

const s165 = [
  // slot 1 — CONCEPT: which point does the reflection trick ask you to build?
  // Always the mirror image of an endpoint in the line the path must touch.
  // Lane: the y-axis / the line y = 2 / the line x = 5.
  [
    {
      q: 'A delivery drone leaves $A$, must touch a long glass wall that runs along the y-axis, and then flies on to $B$. Both $A$ and $B$ sit to the right of the wall. To find the shortest possible flight, which point should you construct first?',
      choices: [
        'the reflection of $B$ over the x-axis',
        'the reflection of $B$ over the y-axis',
        'the point of the y-axis at the same height as $B$',
        'the point where segment $AB$ crosses the y-axis',
      ],
      answer: 1,
      solution:
        'Reflect over the line the flight is required to touch, and over nothing else. Let $B\'$ be the mirror image of $B$ in the y-axis. Any touch point $Q$ on the wall is the same distance from $B$ as it is from $B\'$, so the bent trip $A \\to Q \\to B$ always measures exactly as much as $A \\to Q \\to B\'$ — and the second of those is shortest when $Q$ sits on the straight segment $AB\'$. Building $B\'$ is what turns a bent-path puzzle into a single straight distance ✓. Check a second, independent way on a concrete pair: with $A(1, 2)$ and $B(4, 6)$ the construction gives $B\'(-4, 6)$ and a trip of $\\sqrt{25 + 16} = \\sqrt{41} \\approx 6.40$, while touching at the point of the wall level with $B$, namely $(0, 6)$, costs $\\sqrt{1 + 16} + 4 = \\sqrt{17} + 4 \\approx 8.12$; the constructed point really does find the shorter flight ✓. (The choice of the reflection over the x-axis is MIRRORING IN A LINE THE FLIGHT NEVER VISITS, which measures a trip to the wrong destination ✗; the point of the wall level with $B$ is AIMING FOR THE NEAREST SPOT ON THE WALL TO $B$, which ignores where $A$ is ✗; the crossing of segment $AB$ is DRAWING $AB$ STRAIGHT, and with both points right of the wall that segment never reaches the wall at all ✗.)',
    },
    {
      q: 'A robot vacuum starts at $A$, must run along and touch a charging strip laid on the line $y = 2$, and then finish at $B$. Both $A$ and $B$ lie above the strip. Which point should you construct to find the shortest route?',
      choices: [
        'the reflection of $B$ over the x-axis',
        'the reflection of $B$ over the line $x = 2$',
        'the point two units directly below $B$',
        'the reflection of $B$ over the line $y = 2$',
      ],
      answer: 3,
      solution:
        'The mirror is whatever line the route has to touch, here $y = 2$, so build $B\'$, the reflection of $B$ in that line. For any touch point $Q$ on the strip, $QB = QB\'$, so the route $A \\to Q \\to B$ has the same length as $A \\to Q \\to B\'$, and the second becomes a straight segment exactly when $Q$ lies on $AB\'$; the shortest route therefore measures $AB\'$ ✓. Check a second, independent way with numbers: take $A(1, 6)$ and $B(7, 4)$, so $B\' = (7, 0)$ and $AB\' = \\sqrt{36 + 36} = 6\\sqrt{2} \\approx 8.49$. Touching instead at the point of the strip directly under $A$, namely $(1, 2)$, costs $4 + \\sqrt{36 + 4} = 4 + 2\\sqrt{10} \\approx 10.32$, so the reflection in $y = 2$ is the construction that wins ✓. (The reflection over the x-axis is MIRRORING IN THE AXIS OUT OF HABIT instead of in the strip the route must touch ✗; the reflection over $x = 2$ is FLIPPING ACROSS A VERTICAL LINE when the strip is horizontal ✗; the point two units below $B$ is SLIDING $B$ DOWN INSTEAD OF REFLECTING IT, which need not reach the strip at all, let alone the far side of it ✗.)',
    },
    {
      q: 'A hiker leaves camp $A$, must walk to a straight cliff face standing on the line $x = 5$ and touch it, and then continue to lookout $B$. Both $A$ and $B$ lie to the left of the cliff. Which point should you construct to make the walk as short as possible?',
      choices: [
        'the reflection of $B$ over the y-axis',
        'the reflection of $B$ over the line $y = 5$',
        'the reflection of $B$ over the line $x = 5$',
        'the point of the line $x = 5$ nearest to $B$',
      ],
      answer: 2,
      solution:
        'Mirror an endpoint in the cliff itself. Writing $B\'$ for the reflection of $B$ in $x = 5$, every touch point $Q$ on the cliff satisfies $QB = QB\'$, so the walk $A \\to Q \\to B$ is always as long as $A \\to Q \\to B\'$; the latter is shortest when $Q$ lies on segment $AB\'$, so the shortest walk is the straight length $AB\'$ ✓. Check a second, independent way with a concrete pair: let $A(1, 1)$ and $B(3, 7)$, so $B\' = (7, 7)$ and $AB\' = \\sqrt{36 + 36} = 6\\sqrt{2} \\approx 8.49$. Touching at the nearest cliff point to $B$, namely $(5, 7)$, costs $\\sqrt{16 + 36} + 2 = 2\\sqrt{13} + 2 \\approx 9.21$, so the reflection in $x = 5$ is what produces the shorter walk ✓. (The reflection over the y-axis is MIRRORING IN THE AXIS INSTEAD OF IN THE CLIFF, a line the walk never touches ✗; the reflection over $y = 5$ is FLIPPING ACROSS A HORIZONTAL LINE when the cliff is vertical ✗; the nearest cliff point to $B$ is AIMING AT THE CLOSEST POINT TO $B$ ALONE, which forgets that the walk starts at $A$ ✗.)',
    },
  ],

  // slot 2 — shortest bent path that must touch the x-axis. Reflect either
  // endpoint and measure the straight segment.
  // Lane: A(2,7) B(10,1) -> 8sqrt2 / A(2,4) B(10,11) -> 17 / A(3,9) B(19,21) -> 34.
  [
    {
      q: 'A surveyor walks from $A(2, 7)$ to a straight fence lying along the x-axis, drives a marker into the ground there, and then walks on to $B(10, 1)$. What is the shortest possible total walk?',
      fig: reflectFig([2, 7], [10, 1], [10, -1], [-1, -3, 12, 9]),
      choices: ['$10$', '$6\\sqrt{5}$', '$16$', '$8\\sqrt{2}$'],
      answer: 3,
      solution:
        'Reflect $B(10, 1)$ in the fence to get $B\'(10, -1)$. Every walk that touches the fence at some point $Q$ has the same length as $A \\to Q \\to B\'$, so the shortest one is the straight segment $AB\' = \\sqrt{(10 - 2)^2 + (-1 - 7)^2} = \\sqrt{64 + 64} = 8\\sqrt{2}$ ✓. Check a second, independent way by reflecting the other endpoint instead: $A(2, 7)$ mirrors to $A\'(2, -7)$, and $A\'B = \\sqrt{(10 - 2)^2 + (1 + 7)^2} = \\sqrt{64 + 64} = 8\\sqrt{2}$, the same length by a construction that never mentions $B\'$ ✓. (The choice $10$ is THE DIRECT DISTANCE FROM $A$ TO $B$, a path that never touches the fence ✗; the choice $6\\sqrt{5}$ is REFLECTING OVER THE y-AXIS, measuring to $(-10, 1)$ instead of $(10, -1)$ ✗; the choice $16$ is WALKING STRAIGHT DOWN TO THE FENCE, ALONG IT, AND BACK UP, which is a legal route but a wasteful one ✗.)',
    },
    {
      q: 'A courier rides from $A(2, 4)$ down to a straight canal bank running along the x-axis, hands over a parcel at the water, and then rides to $B(10, 11)$. What is the shortest possible total ride?',
      fig: reflectFig([2, 4], [10, 11], [10, -11], [-1, -13, 12, 13], 200),
      choices: ['$17$', '$\\sqrt{113}$', '$23$', '$\\sqrt{193}$'],
      answer: 0,
      solution:
        'Mirror $B(10, 11)$ in the bank to get $B\'(10, -11)$. A ride that meets the bank at $Q$ measures the same as $A \\to Q \\to B\'$, so the best one is the straight segment $AB\' = \\sqrt{(10 - 2)^2 + (-11 - 4)^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$ ✓. Check a second, independent way by mirroring the starting point instead: $A(2, 4)$ reflects to $A\'(2, -4)$, and $A\'B = \\sqrt{(10 - 2)^2 + (11 + 4)^2} = \\sqrt{64 + 225} = 17$, the same answer from the opposite construction ✓. (The choice $\\sqrt{113}$ is THE DIRECT DISTANCE FROM $A$ TO $B$, which skips the canal entirely ✗; the choice $23$ is RIDING DOWN TO THE BANK, ALONG IT, AND BACK UP, a real route but not the short one ✗; the choice $\\sqrt{193}$ is REFLECTING OVER THE y-AXIS, measuring to $(-10, 11)$ instead of $(10, -11)$ ✗.)',
    },
    {
      q: 'A drone flies from tower $A(3, 9)$, dips to touch a landing rail laid along the x-axis, and then climbs to tower $B(19, 21)$. What is the shortest possible total flight?',
      fig: reflectFig([3, 9], [19, 21], [19, -21], [-1, -23, 21, 23], 180),
      choices: ['$20$', '$34$', '$30$', '$46$'],
      answer: 1,
      solution:
        'Reflect $B(19, 21)$ in the rail to get $B\'(19, -21)$. Any flight touching the rail at $Q$ is as long as $A \\to Q \\to B\'$, so the shortest is the straight segment $AB\' = \\sqrt{(19 - 3)^2 + (-21 - 9)^2} = \\sqrt{256 + 900} = \\sqrt{1156} = 34$ ✓. Check a second, independent way by reflecting the tower the drone leaves from: $A(3, 9)$ mirrors to $A\'(3, -9)$, and $A\'B = \\sqrt{(19 - 3)^2 + (21 + 9)^2} = \\sqrt{256 + 900} = 34$, matching ✓. (The choice $20$ is THE DIRECT DISTANCE FROM $A$ TO $B$, a flight that never reaches the rail ✗; the choice $30$ is ADDING THE TWO HEIGHTS, $9 + 21$, and forgetting the horizontal run of $16$ ✗; the choice $46$ is DIVING STRAIGHT DOWN TO THE RAIL, SLIDING ALONG IT, AND CLIMBING BACK, which is a route but a long one ✗.)',
    },
  ],

  // slot 3 — a parallelogram on the grid: cut the overhang off one end and slide
  // it to the other, so the area is base times HEIGHT, not base times slant.
  // Lane: base 8 rise 5 -> 40 / base 6 rise 9 -> 54 / base 11 rise 6 -> 66.
  [
    {
      q: 'A flower bed is the parallelogram with corners $(0, 0)$, $(8, 0)$, $(11, 5)$, and $(3, 5)$, measured in meters. How many square meters does the bed cover?',
      fig: pgramFig(8, 5, 3, [-1, -1, 12, 7]),
      choices: ['$20$', '$55$', '$40$', '$8\\sqrt{34}$'],
      answer: 2,
      solution:
        'Cut along the dashed line $x = 8$ and slide the triangle on the right $8$ units to the left; because the two slanted sides are parallel and equal, it drops exactly into the notch on the left, leaving a plain $8$ by $5$ rectangle of area $40$. Sliding a piece never changes area, so the bed covers $40$ ✓. Check a second, independent way by shaving the bounding rectangle: the bed sits inside the rectangle from $x = 0$ to $x = 11$ and $y = 0$ to $y = 5$, which has area $55$, and the bed is that rectangle with two right triangles removed, each with legs $3$ and $5$; those cost $2 \\cdot \\frac{1}{2} \\cdot 3 \\cdot 5 = 15$, and $55 - 15 = 40$ ✓. (The choice $55$ is USING THE TOP CORNER’S REACH $11$ AS THE BASE, which measures the bounding rectangle rather than the bed ✗; the choice $20$ is HALVING, as though the figure were a triangle ✗; the choice $8\\sqrt{34}$ is USING THE SLANTED SIDE $\\sqrt{9 + 25}$ AS THE HEIGHT, when the height is the vertical rise $5$ ✗.)',
    },
    {
      q: 'A stained-glass panel is the parallelogram with vertices $(0, 0)$, $(6, 0)$, $(10, 9)$, and $(4, 9)$, in inches. What is the area of the panel?',
      fig: pgramFig(6, 9, 4, [-1, -1, 11, 11], 240),
      choices: ['$54$', '$90$', '$27$', '$6\\sqrt{97}$'],
      answer: 0,
      solution:
        'Slice down the dashed line $x = 6$ and translate the right-hand piece $6$ units left; the two slanted edges are parallel and the same length, so it fits the gap on the left exactly and the panel becomes a $6$ by $9$ rectangle of area $54$. Translation preserves area, so the panel is $54$ ✓. Check a second, independent way by trimming the bounding rectangle: the panel lies inside the rectangle from $x = 0$ to $x = 10$ and $y = 0$ to $y = 9$, of area $90$, and what is trimmed away is two right triangles with legs $4$ and $9$, together $2 \\cdot \\frac{1}{2} \\cdot 4 \\cdot 9 = 36$; then $90 - 36 = 54$ ✓. (The choice $90$ is USING THE TOP CORNER’S REACH $10$ AS THE BASE, which measures the bounding rectangle ✗; the choice $27$ is HALVING, as though the panel were a triangle ✗; the choice $6\\sqrt{97}$ is USING THE SLANTED SIDE $\\sqrt{16 + 81}$ AS THE HEIGHT instead of the vertical rise $9$ ✗.)',
    },
    {
      q: 'A driveway is shaped like the parallelogram with corners $(0, 0)$, $(11, 0)$, $(14, 6)$, and $(3, 6)$, in yards. How many square yards of pavement does it need?',
      fig: pgramFig(11, 6, 3, [-1, -1, 15, 8]),
      choices: ['$84$', '$33$', '$33\\sqrt{5}$', '$66$'],
      answer: 3,
      solution:
        'Cut along the dashed line $x = 11$ and slide the right-hand triangle $11$ units left; the slanted sides are parallel and equal, so it seats itself perfectly in the notch and the driveway straightens into an $11$ by $6$ rectangle of area $66$. Area survives a slide untouched, so the driveway needs $66$ ✓. Check a second, independent way by shaving corners off the bounding rectangle: the driveway sits inside the rectangle from $x = 0$ to $x = 14$ and $y = 0$ to $y = 6$, of area $84$, minus two right triangles with legs $3$ and $6$, which cost $2 \\cdot \\frac{1}{2} \\cdot 3 \\cdot 6 = 18$; and $84 - 18 = 66$ ✓. (The choice $84$ is USING THE TOP CORNER’S REACH $14$ AS THE BASE, which measures the bounding rectangle ✗; the choice $33$ is HALVING, as though the driveway were a triangle ✗; the choice $33\\sqrt{5}$ is USING THE SLANTED SIDE $\\sqrt{9 + 36} = 3\\sqrt{5}$ AS THE HEIGHT rather than the vertical rise $6$ ✗.)',
    },
  ],

  // slot 4 — CONCEPT: a regular polygon tiles the plane alone exactly when its
  // interior angle divides 360, which admits only 3, 4 and 6 sides.
  // Lane: octagon is the one that cannot / hexagon is the one that can /
  // equilateral triangle is the one that closes up around a point.
  [
    {
      q: 'A tiler wants to cover a whole floor using copies of a single regular shape, edge to edge, with no gaps and no overlaps. Which of these shapes will NOT work on its own?',
      choices: ['equilateral triangle', 'regular octagon', 'square', 'regular hexagon'],
      answer: 1,
      solution:
        'At every point where corners meet, the angles gathered there must add to exactly $360^\\circ$, so the shape’s interior angle has to divide $360$ evenly. A regular octagon’s interior angle is $180^\\circ - \\frac{360^\\circ}{8} = 135^\\circ$, and $\\frac{360}{135} = \\frac{8}{3}$ is not a whole number, so the octagon is the one that fails ✓. Check a second, independent way by laying the tiles down and counting: two octagons at a corner cover $270^\\circ$ and leave a $90^\\circ$ hole, while three cover $405^\\circ$ and have to ride up over one another — no whole number of them ever closes the corner, which is why octagonal tilings always need small squares dropped into the gaps ✓. (The equilateral triangle is a trap because its angle is $60^\\circ$ and SIX OF THEM CLOSE A CORNER EXACTLY ✗; the square’s angle is $90^\\circ$ and FOUR OF THEM CLOSE A CORNER EXACTLY ✗; the regular hexagon’s angle is $120^\\circ$ and THREE OF THEM CLOSE A CORNER EXACTLY, which is the honeycomb ✗.)',
    },
    {
      q: 'Four regular shapes are offered for a patio, and only one of them can pave the patio by itself with no gaps and no overlaps. Which one is it?',
      choices: ['regular pentagon', 'regular heptagon', 'regular octagon', 'regular hexagon'],
      answer: 3,
      solution:
        'The angles meeting at a corner of a tiling must total $360^\\circ$, so the interior angle must divide $360$ evenly. The regular hexagon’s interior angle is $180^\\circ - \\frac{360^\\circ}{6} = 120^\\circ$, and $\\frac{360}{120} = 3$ exactly, so three hexagons close every corner and the pattern runs on forever ✓. Check a second, independent way by eliminating the rest: the pentagon’s angle is $108^\\circ$, and three of them leave a $36^\\circ$ gap while four overlap; the heptagon’s angle is $180^\\circ - \\frac{360^\\circ}{7} = \\frac{900^\\circ}{7}$, and two leave more than a $100^\\circ$ gap while three overlap; the octagon’s angle is $135^\\circ$, and two leave a $90^\\circ$ hole while three overlap. Only the hexagon survives ✓. (The regular pentagon is the classic trap: its $108^\\circ$ ANGLE DOES NOT DIVIDE $360^\\circ$ ✗; the regular heptagon has a $\\frac{900^\\circ}{7}$ ANGLE THAT IS NOT EVEN A WHOLE NUMBER OF DEGREES ✗; the regular octagon needs SQUARES DROPPED INTO ITS GAPS, so it does not pave alone ✗.)',
    },
    {
      q: 'Cardboard copies of one regular shape are to be laid flat around a single point, corner to corner, so that they close up perfectly with no gap and no overlap. Copies of which shape can do this?',
      choices: ['equilateral triangle', 'regular pentagon', 'regular nonagon', 'regular decagon'],
      answer: 0,
      solution:
        'Closing up around a point means the interior angles gathered there sum to $360^\\circ$, so the angle must divide $360$ evenly. An equilateral triangle has a $60^\\circ$ angle, and $\\frac{360}{60} = 6$, so six copies fit around the point with nothing left over ✓. Check a second, independent way by testing the other three: the pentagon’s angle is $108^\\circ$ and $\\frac{360}{108} = \\frac{10}{3}$; the nonagon’s is $180^\\circ - \\frac{360^\\circ}{9} = 140^\\circ$ and $\\frac{360}{140} = \\frac{18}{7}$; the decagon’s is $180^\\circ - \\frac{360^\\circ}{10} = 144^\\circ$ and $\\frac{360}{144} = 2.5$. Not one of those is a whole number, so the triangle is the only survivor ✓. (The regular pentagon is the trap of assuming every regular shape works, but its $108^\\circ$ ANGLE LEAVES A $36^\\circ$ GAP after three copies ✗; the regular nonagon’s $140^\\circ$ ANGLE LEAVES AN $80^\\circ$ GAP after two copies ✗; the regular decagon’s $144^\\circ$ ANGLE ASKS FOR TWO AND A HALF COPIES ✗.)',
    },
  ],

  // slot 5 — shortest bent path that must touch the y-axis. Same trick, vertical
  // mirror: the run across is the SUM of the two x-coordinates.
  // Lane: A(2,13) B(3,1) -> 13 / A(4,9) B(2,1) -> 10 / A(4,14) B(5,2) -> 15.
  [
    {
      q: 'A window cleaner starts at $A(2, 13)$, must touch a vertical rail standing on the y-axis to clip on a safety line, and then moves to $B(3, 1)$. What is the shortest possible total distance?',
      fig: reflectFig([2, 13], [3, 1], [-3, 1], [-5, -1, 6, 15], 200, [10, -4], [12, -4], [-12, -4]),
      choices: ['$13$', '$\\sqrt{145}$', '$\\sqrt{197}$', '$17$'],
      answer: 0,
      solution:
        'The rail is the mirror, so reflect $B(3, 1)$ over the y-axis to $B\'(-3, 1)$. Any trip touching the rail at $Q$ measures the same as $A \\to Q \\to B\'$, so the shortest is the straight segment $AB\' = \\sqrt{(2 + 3)^2 + (13 - 1)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$ ✓. Check a second, independent way by reflecting the other endpoint: $A(2, 13)$ mirrors to $A\'(-2, 13)$, and $A\'B = \\sqrt{(3 + 2)^2 + (13 - 1)^2} = \\sqrt{25 + 144} = 13$, the same total by the opposite construction ✓. (The choice $\\sqrt{145}$ is THE DIRECT DISTANCE FROM $A$ TO $B$, which never reaches the rail ✗; the choice $\\sqrt{197}$ is REFLECTING OVER THE x-AXIS, measuring to $(3, -1)$ when the mirror is the y-axis ✗; the choice $17$ is CROSSING TO THE RAIL, SLIDING DOWN IT, AND CROSSING BACK, a real route that wastes $4$ units ✗.)',
    },
    {
      q: 'A dog at $A(4, 9)$ runs to a stream that flows straight along the y-axis, drinks, and then runs to its owner at $B(2, 1)$. What is the shortest possible total run?',
      fig: reflectFig([4, 9], [2, 1], [-2, 1], [-4, -1, 6, 11], 240, [10, -4], [12, -4], [-12, -4]),
      choices: ['$2\\sqrt{17}$', '$14$', '$10$', '$2\\sqrt{26}$'],
      answer: 2,
      solution:
        'Reflect $B(2, 1)$ across the stream to $B\'(-2, 1)$. A run that meets the stream at $Q$ is exactly as long as $A \\to Q \\to B\'$, so the best run is the straight segment $AB\' = \\sqrt{(4 + 2)^2 + (9 - 1)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ ✓. Check a second, independent way by mirroring the dog instead of the owner: $A(4, 9)$ reflects to $A\'(-4, 9)$, and $A\'B = \\sqrt{(2 + 4)^2 + (9 - 1)^2} = \\sqrt{36 + 64} = 10$, agreeing ✓. (The choice $2\\sqrt{17}$ is THE DIRECT DISTANCE FROM $A$ TO $B$, a run with no drink in it ✗; the choice $2\\sqrt{26}$ is REFLECTING OVER THE x-AXIS, measuring to $(2, -1)$ instead of $(-2, 1)$ ✗; the choice $14$ is RUNNING STRAIGHT TO THE STREAM, ALONG IT, AND BACK OUT ✗.)',
    },
    {
      q: 'A ferry leaves dock $A(4, 14)$, must touch a straight pier lying along the y-axis, and then sails to dock $B(5, 2)$. What is the shortest possible total voyage?',
      fig: reflectFig([4, 14], [5, 2], [-5, 2], [-7, -1, 7, 16], 220, [10, -4], [12, -4], [-12, -4]),
      choices: ['$12$', '$15$', '$21$', '$\\sqrt{257}$'],
      answer: 1,
      solution:
        'The pier is the mirror, so reflect $B(5, 2)$ over the y-axis to $B\'(-5, 2)$. Every voyage touching the pier at $Q$ has the length of $A \\to Q \\to B\'$, so the shortest measures $AB\' = \\sqrt{(4 + 5)^2 + (14 - 2)^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$ ✓. Check a second, independent way by reflecting the departure dock: $A(4, 14)$ mirrors to $A\'(-4, 14)$, and $A\'B = \\sqrt{(5 + 4)^2 + (14 - 2)^2} = \\sqrt{81 + 144} = 15$, the same length ✓. (The choice $12$ is USING ONLY THE HEIGHT DIFFERENCE $14 - 2$ and forgetting the run of $9$ across ✗; the choice $21$ is SAILING STRAIGHT TO THE PIER, ALONG IT, AND BACK OUT, which costs $4 + 12 + 5$ ✗; the choice $\\sqrt{257}$ is REFLECTING OVER THE x-AXIS, measuring to $(5, -2)$ when the pier is vertical ✗.)',
    },
  ],

  // slot 6 — a strip between a zigzag and its own translate: every vertical slice
  // has the same height d, so the area is span times d. The bump on top is
  // congruent to the notch underneath and they trade places.
  // Lane: span 6 up 7 -> 42 / span 8 up 9 -> 72 / span 10 up 8 -> 80.
  [
    {
      q: 'A metal bracket is bounded below by the zigzag from $(0, 0)$ up to $(3, 2)$ and back down to $(6, 0)$, above by that same zigzag slid up $7$ units, and at each end by a vertical segment. What is its area?',
      fig: stripFig(6, 2, 7, [-1, -1, 7, 10]),
      choices: ['$54$', '$21$', '$42$', '$36$'],
      answer: 2,
      solution:
        'The upper edge is the lower edge slid straight up $7$, so cutting the bracket into thin vertical strips gives every strip the height $7$, whatever the zigzag is doing at that $x$. Stacking those strips side by side rebuilds a plain rectangle $6$ wide and $7$ tall, so the area is $6 \\cdot 7 = 42$ ✓. Check a second, independent way by trading pieces with the rectangle from $(0, 0)$ to $(6, 7)$, whose area is $42$: the bracket is missing the triangle under the lower zigzag, with vertices $(0, 0)$, $(3, 2)$, $(6, 0)$ and area $\\frac{1}{2} \\cdot 6 \\cdot 2 = 6$, and it gains the triangle above the line $y = 7$, with vertices $(0, 7)$, $(3, 9)$, $(6, 7)$ and the same area $6$. The two cancel, leaving $42$ ✓. (The choice $54$ is USING THE HIGHEST POINT $9$ AS THE HEIGHT, which counts empty space beside the top bump ✗; the choice $36$ is SUBTRACTING THE NOTCH UNDERNEATH while forgetting the matching bump on top ✗; the choice $21$ is MEASURING THE SPAN ONLY AS FAR AS THE PEAK, using $3$ where the strip runs a full $6$ across ✗.)',
    },
    {
      q: 'A roof flashing is bounded below by the zigzag from $(0, 0)$ up to $(4, 3)$ and back down to $(8, 0)$, above by the same zigzag translated up $9$ units, and at its two ends by vertical segments. What is its area?',
      fig: stripFig(8, 3, 9, [-1, -1, 9, 13], 240),
      choices: ['$36$', '$72$', '$84$', '$60$'],
      answer: 1,
      solution:
        'Because the top boundary is the bottom boundary raised by $9$, a vertical cut anywhere across the flashing meets it in a segment of length exactly $9$. Sliding all those segments down onto a common base sweeps out a rectangle $8$ wide and $9$ tall, so the area is $8 \\cdot 9 = 72$ ✓. Check a second, independent way against the rectangle from $(0, 0)$ to $(8, 9)$, of area $72$: the flashing gives up the triangle below the lower zigzag, vertices $(0, 0)$, $(4, 3)$, $(8, 0)$, of area $\\frac{1}{2} \\cdot 8 \\cdot 3 = 12$, and takes back the triangle above $y = 9$, vertices $(0, 9)$, $(4, 12)$, $(8, 9)$, of area $12$. The trade is even and the total stays $72$ ✓. (The choice $84$ is COUNTING THE BUMP ON TOP WITHOUT SUBTRACTING THE NOTCH BELOW ✗; the choice $60$ is SUBTRACTING THE NOTCH BELOW WITHOUT ADDING THE BUMP ON TOP ✗; the choice $36$ is MEASURING THE SPAN ONLY AS FAR AS THE PEAK, using $4$ instead of the full $8$ ✗.)',
    },
    {
      q: 'A garden border is bounded below by the zigzag from $(0, 0)$ up to $(5, 4)$ and back down to $(10, 0)$, above by that zigzag shifted up $8$ units, and at each end by a vertical segment. What is its area?',
      fig: stripFig(10, 4, 8, [-1, -1, 11, 13], 240),
      choices: ['$120$', '$100$', '$60$', '$80$'],
      answer: 3,
      solution:
        'The two zigzag edges are copies of each other $8$ apart, so every vertical slice of the border has height $8$ no matter where it is taken. Those slices reassemble into a rectangle $10$ wide and $8$ tall, giving an area of $10 \\cdot 8 = 80$ ✓. Check a second, independent way by comparing with the rectangle from $(0, 0)$ to $(10, 8)$, of area $80$: the border loses the triangle under the lower zigzag, vertices $(0, 0)$, $(5, 4)$, $(10, 0)$, of area $\\frac{1}{2} \\cdot 10 \\cdot 4 = 20$, and regains the triangle poking above $y = 8$, vertices $(0, 8)$, $(5, 12)$, $(10, 8)$, of area $20$. The swap is exact, so $80$ stands ✓. (The choice $120$ is USING THE HIGHEST POINT $12$ AS THE HEIGHT of a $10$-wide rectangle ✗; the choice $100$ is COUNTING THE BUMP ON TOP WITHOUT SUBTRACTING THE NOTCH BELOW ✗; the choice $60$ is SUBTRACTING THE NOTCH BELOW WITHOUT ADDING THE BUMP ON TOP ✗.)',
    },
  ],

  // slot 7 — CONCEPT answered by symmetry alone. A mirror line of the square
  // through P ties the two vertices it swaps; the near or far side is then
  // settled by which half of the square P sits in.
  // Lane: P below center, farthest pair / P above center, nearest pair /
  // P left of center on a horizontal mirror, nearest pair.
  [
    {
      q: 'A square has vertices $(0, 0)$, $(8, 0)$, $(8, 8)$, and $(0, 8)$, and the point $P(4, 2)$ lies on the vertical line $x = 4$. Without computing a single distance, which pair of vertices must be tied for FARTHEST from $P$?',
      fig: {
        view: [-1, -1, 9, 9],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 8], [0, 8]], fill: false },
          { t: 'seg', a: [4, -1], b: [4, 9], dash: true },
          { t: 'point', p: [4, 2], label: 'P', dx: 12, dy: 0 },
        ],
      },
      choices: [
        '$(0, 0)$ and $(8, 0)$',
        '$(0, 0)$ and $(8, 8)$',
        '$(0, 8)$ and $(8, 0)$',
        '$(0, 8)$ and $(8, 8)$',
      ],
      answer: 3,
      solution:
        'The dashed line $x = 4$ is a mirror line of the square, and $P$ sits on it. Reflecting in that line holds $P$ still while swapping $(0, 8)$ with $(8, 8)$ and swapping $(0, 0)$ with $(8, 0)$, and a reflection never changes a distance, so each of those two pairs is tied. Which tied pair is the far one? $P$ has height $2$ in a square that runs from $y = 0$ to $y = 8$, so it lies in the lower half, snug against the bottom edge and away from the top — the top pair $(0, 8)$ and $(8, 8)$ is the farthest ✓. Check a second, independent way by comparing offsets instead of distances: every vertex sits $4$ across from $P$, since $P$ has $x = 4$ and each vertex has $x = 0$ or $x = 8$, so the horizontal part is identical for all four and the ranking is decided by the vertical part alone — that is $2$ for the bottom vertices and $6$ for the top ones, so the top pair is farthest and the two of them tie ✓. (The pair $(0, 0)$ and $(8, 0)$ is TIED BUT NEAREST, the reflection of the right question in the wrong half of the square ✗; the pair $(0, 0)$ and $(8, 8)$ is A DIAGONAL, whose ends sit at different heights and so are not even tied ✗; the pair $(0, 8)$ and $(8, 0)$ is THE OTHER DIAGONAL, tied for the same fault ✗.)',
    },
    {
      q: 'A square has vertices $(0, 0)$, $(10, 0)$, $(10, 10)$, and $(0, 10)$, and the point $P(5, 9)$ sits on the vertical line $x = 5$. Without measuring anything, which pair of vertices must be tied for NEAREST to $P$?',
      fig: {
        view: [-1, -1, 11, 11],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 10], [0, 10]], fill: false },
          { t: 'seg', a: [5, -1], b: [5, 11], dash: true },
          { t: 'point', p: [5, 9], label: 'P', dx: 12, dy: 4 },
        ],
      },
      choices: [
        '$(0, 10)$ and $(10, 10)$',
        '$(0, 0)$ and $(10, 0)$',
        '$(0, 0)$ and $(10, 10)$',
        '$(0, 10)$ and $(10, 0)$',
      ],
      answer: 0,
      solution:
        'The line $x = 5$ is a mirror line of the square and $P$ lies on it, so reflecting in that line leaves $P$ fixed while interchanging $(0, 10)$ with $(10, 10)$ and interchanging $(0, 0)$ with $(10, 0)$. Reflections preserve distance, so both of those pairs are tied. $P$ has height $9$ in a square reaching from $y = 0$ to $y = 10$, so it is tucked up against the top edge, and the tied pair it hugs is $(0, 10)$ and $(10, 10)$ ✓. Check a second, independent way by comparing offsets: all four vertices are $5$ across from $P$, so the horizontal contribution is the same for each and only the vertical gap can separate them — that gap is $1$ for the top vertices and $9$ for the bottom ones, making the top pair the near pair, tied with each other ✓. (The pair $(0, 0)$ and $(10, 0)$ is TIED BUT FARTHEST, the right symmetry read off the wrong half of the square ✗; the pair $(0, 0)$ and $(10, 10)$ is A DIAGONAL, whose ends sit at different heights and are not tied at all ✗; the pair $(0, 10)$ and $(10, 0)$ is THE OTHER DIAGONAL, with the same flaw ✗.)',
    },
    {
      q: 'A square has vertices $(0, 0)$, $(12, 0)$, $(12, 12)$, and $(0, 12)$, and the point $P(3, 6)$ lies on the horizontal line $y = 6$. Using symmetry alone, which pair of vertices must be tied for NEAREST to $P$?',
      fig: {
        view: [-1, -1, 13, 13],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 12], [0, 12]], fill: false },
          { t: 'seg', a: [-1, 6], b: [13, 6], dash: true },
          { t: 'point', p: [3, 6], label: 'P', dx: 0, dy: -12 },
        ],
      },
      choices: [
        '$(12, 0)$ and $(12, 12)$',
        '$(0, 0)$ and $(12, 0)$',
        '$(0, 0)$ and $(0, 12)$',
        '$(0, 12)$ and $(12, 0)$',
      ],
      answer: 2,
      solution:
        'This time the mirror is horizontal: $y = 6$ cuts the square in half and passes through $P$. Reflecting in it fixes $P$ and swaps $(0, 0)$ with $(0, 12)$, and also swaps $(12, 0)$ with $(12, 12)$, so each of those pairs is tied. $P$ has $x = 3$ in a square stretching from $x = 0$ to $x = 12$, so it leans against the left edge, and the near tied pair is $(0, 0)$ and $(0, 12)$ ✓. Check a second, independent way by weighing the offsets: every vertex is $6$ above or below $P$, since $P$ has $y = 6$ and the vertices have $y = 0$ or $y = 12$, so the vertical contribution is identical for all four and the horizontal one decides — that is $3$ for the left vertices and $9$ for the right ones, so the left pair is nearest and its two members tie ✓. (The pair $(12, 0)$ and $(12, 12)$ is TIED BUT FARTHEST, read off the wrong side of the square ✗; the pair $(0, 0)$ and $(12, 0)$ is THE BOTTOM PAIR, which the horizontal mirror does not swap, so nothing forces them to tie ✗; the pair $(0, 12)$ and $(12, 0)$ is A DIAGONAL, whose ends sit at different distances from the left edge ✗.)',
    },
  ],

  // slot 8 — two reflections in parallel vertical mirrors compose into a
  // translation of TWICE the gap, in the direction from the first mirror to the
  // second.
  // Lane: (1,5) over x=3 then x=-2 -> (-9,5) / (-4,7) over x=1 then x=6 ->
  // (6,7) / (10,-6) over x=4 then x=-1 -> (0,-6).
  [
    {
      q: 'The point $(1, 5)$ is reflected over the line $x = 3$, and that image is then reflected over the line $x = -2$. Where does the point finish?',
      fig: {
        view: [-11, -1, 7, 7],
        grid: true,
        elems: [
          { t: 'seg', a: [3, -1], b: [3, 7], dash: true },
          { t: 'seg', a: [-2, -1], b: [-2, 7], dash: true },
          { t: 'point', p: [1, 5], label: 'P', dx: 0, dy: -12 },
        ],
      },
      choices: ['$(5, 5)$', '$(-9, 5)$', '$(-4, 5)$', '$(11, 5)$'],
      answer: 1,
      solution:
        'Take the reflections one at a time. Over $x = 3$, the point $(1, 5)$ lands at $(2 \\cdot 3 - 1, 5) = (5, 5)$; over $x = -2$, that lands at $(2 \\cdot (-2) - 5, 5) = (-9, 5)$. The height never moves, because both mirrors are vertical ✓. Check a second, independent way with the shortcut: two reflections in parallel mirrors compose into a translation of twice the gap between them, pointing from the first mirror toward the second. The gap here is $3 - (-2) = 5$ and the second mirror lies to the left, so the whole thing is a slide of $10$ to the left: $(1 - 10, 5) = (-9, 5)$ ✓. (The choice $(5, 5)$ is STOPPING AFTER THE FIRST REFLECTION ✗; the choice $(-4, 5)$ is SLIDING BY THE GAP $5$ INSTEAD OF TWICE THE GAP ✗; the choice $(11, 5)$ is TAKING THE MIRRORS IN THE OPPOSITE ORDER, which slides the point $10$ to the right instead ✗.)',
    },
    {
      q: 'The point $(-4, 7)$ is reflected over the line $x = 1$, and the result is then reflected over the line $x = 6$. Where does the point end up?',
      fig: {
        view: [-6, -1, 9, 10],
        grid: true,
        elems: [
          { t: 'seg', a: [1, -1], b: [1, 10], dash: true },
          { t: 'seg', a: [6, -1], b: [6, 10], dash: true },
          { t: 'point', p: [-4, 7], label: 'P', dx: 0, dy: -12 },
        ],
      },
      choices: ['$(-14, 7)$', '$(1, 7)$', '$(6, 7)$', '$(16, 7)$'],
      answer: 2,
      solution:
        'Work through the two mirrors in order. Over $x = 1$, the point $(-4, 7)$ maps to $(2 \\cdot 1 - (-4), 7) = (6, 7)$ — which happens to land exactly on the second mirror, and a reflection holds fixed every point of its own mirror, so the second step changes nothing and the finish is $(6, 7)$ ✓. Check a second, independent way with the shortcut: parallel mirrors compose into a translation of twice their gap, aimed from the first mirror to the second. The gap is $6 - 1 = 5$ and the second mirror is to the right, so the pair acts as a slide of $10$ to the right: $(-4 + 10, 7) = (6, 7)$ ✓. (The choice $(1, 7)$ is SLIDING BY THE GAP $5$ INSTEAD OF TWICE THE GAP ✗; the choice $(-14, 7)$ is SLIDING TWICE THE GAP IN THE WRONG DIRECTION, from the second mirror back toward the first ✗; the choice $(16, 7)$ is USING ONLY THE SECOND MIRROR, reflecting $(-4, 7)$ over $x = 6$ and ignoring $x = 1$ ✗.)',
    },
    {
      q: 'The point $(10, -6)$ is reflected over the line $x = 4$, and that image is reflected over the line $x = -1$. What are the coordinates of the final image?',
      fig: {
        view: [-4, -9, 12, 3],
        grid: true,
        elems: [
          { t: 'seg', a: [4, -9], b: [4, 3], dash: true },
          { t: 'seg', a: [-1, -9], b: [-1, 3], dash: true },
          { t: 'point', p: [10, -6], label: 'P', dx: 0, dy: -12 },
        ],
      },
      choices: ['$(0, -6)$', '$(-2, -6)$', '$(5, -6)$', '$(20, -6)$'],
      answer: 0,
      solution:
        'One mirror at a time. Over $x = 4$, the point $(10, -6)$ goes to $(2 \\cdot 4 - 10, -6) = (-2, -6)$; over $x = -1$, that goes to $(2 \\cdot (-1) - (-2), -6) = (0, -6)$. The $y$-coordinate is untouched throughout, since both mirrors are vertical ✓. Check a second, independent way with the shortcut: two parallel mirrors act as a translation of twice the distance between them, running from the first mirror to the second. That distance is $4 - (-1) = 5$ and the second mirror lies to the left, so the pair slides everything $10$ to the left: $(10 - 10, -6) = (0, -6)$ ✓. (The choice $(-2, -6)$ is STOPPING AFTER THE FIRST REFLECTION ✗; the choice $(5, -6)$ is SLIDING BY THE GAP $5$ INSTEAD OF TWICE THE GAP ✗; the choice $(20, -6)$ is SLIDING TWICE THE GAP IN THE WRONG DIRECTION, to the right instead of to the left ✗.)',
    },
  ],

  // slot 9 — where to touch. The straight segment to the reflected endpoint
  // crosses the axis at a point that splits the horizontal run in the ratio of
  // the two heights.
  // Lane: A(2,3) B(8,6) -> (4,0) / A(2,6) B(10,2) -> (8,0) / A(3,2) B(15,6) -> (6,0).
  [
    {
      q: 'A gardener at $A(2, 3)$ must fill a bucket at a straight irrigation channel running along the x-axis and then carry it to a tree at $B(8, 6)$, walking as little as possible. At which point of the channel should she fill the bucket?',
      fig: reflectFig([2, 3], [8, 6], [8, -6], [-1, -8, 10, 8], 220),
      choices: ['$(5, 0)$', '$(6, 0)$', '$(8, 0)$', '$(4, 0)$'],
      answer: 3,
      solution:
        'Reflect $B(8, 6)$ in the channel to $B\'(8, -6)$; the best filling point is where segment $AB\'$ crosses the axis. Going from $A(2, 3)$ to $B\'(8, -6)$ the run is $6$ and the total drop is $9$, and the height reaches $0$ after $\\frac{3}{9} = \\frac{1}{3}$ of that drop, so the crossing sits $\\frac{1}{3} \\cdot 6 = 2$ along the run: $x = 2 + 2 = 4$, giving $(4, 0)$ ✓. Check a second, independent way with similar triangles: the outward leg and the return leg make equal angles with the channel, so the right triangle standing under $A$ and the one standing under $B$ are similar, with vertical legs $3$ and $6$ in the ratio $1 : 2$. Their horizontal legs must share that ratio, so the run of $6$ splits into $2$ and $4$ and the touch point is $2$ to the right of $A$, at $(4, 0)$ ✓. (The choice $(5, 0)$ is AVERAGING THE TWO x-COORDINATES, which would only be right if the two heights matched ✗; the choice $(6, 0)$ is SPLITTING THE RUN IN THE RATIO $2 : 1$, the ratio of the heights turned around ✗; the choice $(8, 0)$ is THE POINT DIRECTLY BELOW $B$, which drags the outward walk far too long ✗.)',
    },
    {
      q: 'A courier at $A(2, 6)$ has to touch a straight conveyor belt lying along the x-axis and then reach a loading bay at $B(10, 2)$, travelling as little as possible. At which point of the belt should the courier touch down?',
      fig: reflectFig([2, 6], [10, 2], [10, -2], [-1, -4, 12, 8]),
      choices: ['$(6, 0)$', '$(8, 0)$', '$(4, 0)$', '$(2, 0)$'],
      answer: 1,
      solution:
        'Mirror $B(10, 2)$ in the belt to get $B\'(10, -2)$; the touch point is where $AB\'$ meets the axis. From $A(2, 6)$ to $B\'(10, -2)$ the run is $8$ and the drop is $8$, and the height hits $0$ after $\\frac{6}{8} = \\frac{3}{4}$ of the drop, so the crossing lies $\\frac{3}{4} \\cdot 8 = 6$ along the run: $x = 2 + 6 = 8$, that is $(8, 0)$ ✓. Check a second, independent way with similar triangles: the two legs of the shortest route make equal angles with the belt, so the right triangle under $A$ and the right triangle under $B$ are similar, and their vertical legs $6$ and $2$ stand in the ratio $3 : 1$. The horizontal legs copy that ratio, splitting the run of $8$ into $6$ and $2$, which puts the touch point at $(8, 0)$ ✓. (The choice $(6, 0)$ is AVERAGING THE TWO x-COORDINATES, correct only when the two heights agree ✗; the choice $(4, 0)$ is SPLITTING THE RUN IN THE RATIO $1 : 3$, the height ratio reversed ✗; the choice $(2, 0)$ is THE POINT DIRECTLY BELOW $A$, which makes the second leg needlessly long ✗.)',
    },
    {
      q: 'A skier at $A(3, 2)$ must touch a straight groomed track lying along the x-axis and then finish at a flag planted at $B(15, 6)$, covering as little ground as possible. At which point should the skier touch the track?',
      fig: reflectFig([3, 2], [15, 6], [15, -6], [-1, -8, 17, 8]),
      choices: ['$(9, 0)$', '$(12, 0)$', '$(6, 0)$', '$(3, 0)$'],
      answer: 2,
      solution:
        'Reflect $B(15, 6)$ in the track to $B\'(15, -6)$; the crossing point is where segment $AB\'$ meets the axis. From $A(3, 2)$ to $B\'(15, -6)$ the run is $12$ and the drop is $8$, and the height reaches $0$ after $\\frac{2}{8} = \\frac{1}{4}$ of the drop, so the crossing sits $\\frac{1}{4} \\cdot 12 = 3$ along the run: $x = 3 + 3 = 6$, that is $(6, 0)$ ✓. Check a second, independent way with similar triangles: the two legs of the shortest route leave the track at equal angles, so the right triangle under $A$ and the one under $B$ are similar, with vertical legs $2$ and $6$ in the ratio $1 : 3$. Their horizontal legs share that ratio, cutting the run of $12$ into $3$ and $9$, so the crossing is $3$ to the right of $A$, at $(6, 0)$ ✓. (The choice $(9, 0)$ is AVERAGING THE TWO x-COORDINATES, which ignores that $B$ is three times as high as $A$ ✗; the choice $(12, 0)$ is SPLITTING THE RUN IN THE RATIO $3 : 1$, the height ratio the wrong way round ✗; the choice $(3, 0)$ is THE POINT DIRECTLY BELOW $A$, the shortest first leg but a badly long second one ✗.)',
    },
  ],

  // slot 10 — a slanted path of uniform HORIZONTAL width w crossing a square of
  // side s from the bottom edge to the top edge is a parallelogram of area w*s,
  // so what is left is s^2 - w*s. Slide the right-hand piece across and the two
  // leftovers become one (s - w) by s rectangle.
  // Lane: 8 by 8, width 2 -> 48 / 10 by 10, width 3 -> 70 / 12 by 12, width 4 -> 96.
  [
    {
      q: 'An $8$ by $8$ square lawn is crossed by a straight gravel path of uniform horizontal width $2$ that runs from the bottom edge to the top edge — the parallelogram with corners $(0, 0)$, $(2, 0)$, $(8, 8)$, and $(6, 8)$. How much of the lawn is left as grass?',
      fig: {
        view: [-1, -1, 9, 9],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 8], [0, 8]], fill: false },
          { t: 'poly', pts: [[0, 0], [2, 0], [8, 8], [6, 8]] },
        ],
      },
      choices: ['$48$', '$44$', '$56$', '$62$'],
      answer: 0,
      solution:
        'Slide the grass lying to the right of the path $2$ units to the left. Its slanted edge is parallel to, and the same length as, the slanted edge of the left-hand piece, so the two fit together into a plain $6$ by $8$ rectangle: the grass measures $6 \\cdot 8 = 48$ ✓. Check a second, independent way by measuring the two grass pieces where they stand: the left piece is the triangle $(0, 0)$, $(0, 8)$, $(6, 8)$, of area $\\frac{1}{2} \\cdot 6 \\cdot 8 = 24$, and the right piece is the triangle $(2, 0)$, $(8, 0)$, $(8, 8)$, also $\\frac{1}{2} \\cdot 6 \\cdot 8 = 24$; together $24 + 24 = 48$, and as a cross-check the path itself takes $64 - 48 = 16 = 2 \\cdot 8$, exactly its horizontal width times the height of the lawn ✓. (The choice $44$ is USING THE PATH’S SLANTED SIDE $\\sqrt{36 + 64} = 10$ IN PLACE OF ITS VERTICAL HEIGHT $8$, charging the path $20$ ✗; the choice $56$ is TREATING THE PATH AS A TRIANGLE of area $\\frac{1}{2} \\cdot 2 \\cdot 8 = 8$ ✗; the choice $62$ is SUBTRACTING THE WIDTH $2$ ALONE, forgetting to multiply by the height the path climbs ✗.)',
    },
    {
      q: 'A $10$ by $10$ square courtyard has a straight tiled walkway of uniform horizontal width $3$ crossing it from the bottom edge to the top edge — the parallelogram with corners $(2, 0)$, $(5, 0)$, $(9, 10)$, and $(6, 10)$. How much of the courtyard is not walkway?',
      fig: {
        view: [-1, -1, 11, 11],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 10], [0, 10]], fill: false },
          { t: 'poly', pts: [[2, 0], [5, 0], [9, 10], [6, 10]] },
        ],
      },
      choices: ['$97$', '$85$', '$100 - 6\\sqrt{29}$', '$70$'],
      answer: 3,
      solution:
        'Push the paving to the right of the walkway $3$ units left; its slanted edge matches the slanted edge of the left-hand piece exactly, so the two join into a plain $7$ by $10$ rectangle and the open paving measures $7 \\cdot 10 = 70$ ✓. Check a second, independent way by measuring each leftover piece on its own: the left piece is the trapezoid $(0, 0)$, $(2, 0)$, $(6, 10)$, $(0, 10)$, with horizontal sides $2$ and $6$ and height $10$, so $\\frac{2 + 6}{2} \\cdot 10 = 40$; the right piece is the trapezoid $(5, 0)$, $(10, 0)$, $(10, 10)$, $(9, 10)$, with horizontal sides $5$ and $1$ and height $10$, so $\\frac{5 + 1}{2} \\cdot 10 = 30$. Together $40 + 30 = 70$, and the walkway keeps the remaining $30 = 3 \\cdot 10$ ✓. (The choice $100 - 6\\sqrt{29}$ is USING THE WALKWAY’S SLANTED SIDE $\\sqrt{16 + 100} = 2\\sqrt{29}$ IN PLACE OF ITS VERTICAL HEIGHT $10$ ✗; the choice $85$ is TREATING THE WALKWAY AS A TRIANGLE of area $\\frac{1}{2} \\cdot 3 \\cdot 10 = 15$ ✗; the choice $97$ is SUBTRACTING THE WIDTH $3$ ALONE, forgetting to multiply by the height it climbs ✗.)',
    },
    {
      q: 'A $12$ by $12$ square field is cut by a straight dirt track of uniform horizontal width $4$ running from the bottom edge to the top edge — the parallelogram with corners $(1, 0)$, $(5, 0)$, $(10, 12)$, and $(6, 12)$. How much of the field is left for planting?',
      fig: {
        view: [-1, -1, 13, 13],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 12], [0, 12]], fill: false },
          { t: 'poly', pts: [[1, 0], [5, 0], [10, 12], [6, 12]] },
        ],
      },
      choices: ['$92$', '$140$', '$96$', '$120$'],
      answer: 2,
      solution:
        'Slide the plantable ground on the right of the track $4$ units to the left. Its slanted edge is parallel to and as long as the slanted edge of the left-hand piece, so the two lock together into an $8$ by $12$ rectangle, giving $8 \\cdot 12 = 96$ ✓. Check a second, independent way by measuring the two pieces separately: the left piece is the trapezoid $(0, 0)$, $(1, 0)$, $(6, 12)$, $(0, 12)$, with horizontal sides $1$ and $6$ and height $12$, so $\\frac{1 + 6}{2} \\cdot 12 = 42$; the right piece is the trapezoid $(5, 0)$, $(12, 0)$, $(12, 12)$, $(10, 12)$, with horizontal sides $7$ and $2$ and height $12$, so $\\frac{7 + 2}{2} \\cdot 12 = 54$. Adding, $42 + 54 = 96$, and the track keeps $144 - 96 = 48 = 4 \\cdot 12$ ✓. (The choice $92$ is USING THE TRACK’S SLANTED SIDE $\\sqrt{25 + 144} = 13$ IN PLACE OF ITS VERTICAL HEIGHT $12$, charging the track $52$ ✗; the choice $120$ is TREATING THE TRACK AS A TRIANGLE of area $\\frac{1}{2} \\cdot 4 \\cdot 12 = 24$ ✗; the choice $140$ is SUBTRACTING THE WIDTH $4$ ALONE, forgetting to multiply by the height it climbs ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 16,
  sections: { '16.5': s165 },
}
