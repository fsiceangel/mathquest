// Introduction to Geometry chapter 16 — variations for the printable worksheet.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key anywhere in
//    this file. Answers copy the base worksheet’s formatting: a bare ordered
//    pair '$(-2, 4)$' for an image point, a full rule '$(x, y) \to (x - 6,
//    y + 6)$' for the slot that asks for a translation, the paired sentence
//    '$8$ lines of symmetry; rotational symmetry of order $8$' for the
//    symmetry-count slot, a bare length '$6\sqrt{5}$' for a shortest path, and
//    the labelled form '$k = \frac{7}{4}$' for a scale factor.
//  - Every answer was worked twice by two genuinely different routes, and the
//    routes had to agree before the key was written: componentwise arithmetic
//    vs. sliding the origin and re-attaching the offset (slot 1); the
//    $(x, y) \to (-y, x)$ rule vs. turning each of the two direction arrows a
//    quarter turn (slot 2); the sign flip vs. forcing the mirror to be the
//    midpoint (slot 3); subtracting the coordinates vs. doubling the half-slide
//    through the midpoint (slot 4); multiplying both coordinates vs. matching
//    slope and scaling the distance from the origin (slot 5); counting mirrors
//    by parity vs. counting the vertices and side midpoints an axis can pass
//    through (slot 6); two reflections step by step vs. the single rotation
//    they compose to (slot 7); reflecting $B$ over the shoreline vs. reflecting
//    $A$ instead (slot 8); the area ratio under a square root vs. the ratio of
//    the two side lengths (slot 9); rotating then translating vs. replacing the
//    half-turn with a flip over each axis in turn (slot 10).
//  - Worksheet items carry no distractors, so each solution closes with a
//    one-line confirmation instead: undoing the slide (slot 1), turning the
//    image back clockwise (slot 2), reflecting a second time (slot 3), running
//    the found rule forward (slot 4), shrinking by $\frac{1}{k}$ (slot 5),
//    testing the general count on a square (slot 6), reversing both mirrors
//    (slot 7), adding the two legs of the bent path or pricing a rival touch
//    point (slot 8), scaling the starting area by $k^2$ (slot 9), and checking
//    that the origin is the midpoint of the half-turn (slot 10).
//  - Figures follow the base worksheet: coordinate grids with exact lattice
//    coordinates, drawn only for the two slots that carry one in the base
//    (slots 2 and 8). No figure ever plots the point the question asks for, so
//    the rotation figures show only the starting point and its ray from the
//    origin, and the shortest-path figures show the two given points, the
//    reflected endpoint, and the straight dashed line the walker follows.
//    Figure labels are plain text.
//  - Pin deviations: none. Every keyed answer is the pinned one.

const worksheet = [
  // slot 1 — image of a point under a translation.
  //          Lanes: (7, -2) by (x - 9, y + 6) -> (-2, 4);
  //          (-8, 5) by (x + 3, y - 12) -> (-5, -7);
  //          (10, -7) by (x - 13, y + 4) -> (-3, -3).
  [
    {
      q: 'A marker pin sits at $(7, -2)$ on a map grid. The whole layer of pins is slid by the translation $(x, y) \\to (x - 9, y + 6)$. Where does this pin end up?',
      answer: '$(-2, 4)$',
      solution:
        'Work one coordinate at a time: subtract $9$ from the $x$-coordinate and add $6$ to the $y$-coordinate, giving $(7 - 9, -2 + 6) = (-2, 4)$ ✓. Second route, by sliding the origin first: the rule sends $(0, 0)$ to $(-9, 6)$, and in a translation every point of the plane takes that identical trip, so the pin keeps its position relative to the origin — it stays $7$ right and $2$ down from wherever the origin lands. From $(-9, 6)$ that is $(-9 + 7, 6 - 2) = (-2, 4)$ ✓. Confirm by undoing the slide: running $(x, y) \\to (x + 9, y - 6)$ on $(-2, 4)$ returns $(7, -2)$, the pin we started with.',
    },
    {
      q: 'Find the image of the point $(-8, 5)$ under the translation $(x, y) \\to (x + 3, y - 12)$.',
      answer: '$(-5, -7)$',
      solution:
        'Work one coordinate at a time: add $3$ to the $x$-coordinate and subtract $12$ from the $y$-coordinate, giving $(-8 + 3, 5 - 12) = (-5, -7)$ ✓. Second route, by sliding the origin first: the rule carries $(0, 0)$ to $(3, -12)$, and a translation moves every point by that same amount, so the image stays $8$ left and $5$ up from the origin’s new home: $(3 - 8, -12 + 5) = (-5, -7)$ ✓. Confirm by undoing the slide: $(x, y) \\to (x - 3, y + 12)$ sends $(-5, -7)$ back to $(-8, 5)$. Notice the long drop of $12$ carries the point clear across the x-axis into a new quadrant.',
    },
    {
      q: 'A tile in a mosaic pattern has its corner at $(10, -7)$. Find the image of that corner under the translation $(x, y) \\to (x - 13, y + 4)$.',
      answer: '$(-3, -3)$',
      solution:
        'Work one coordinate at a time: subtract $13$ from the $x$-coordinate and add $4$ to the $y$-coordinate, giving $(10 - 13, -7 + 4) = (-3, -3)$ ✓. Second route, by sliding the origin first: the rule takes $(0, 0)$ to $(-13, 4)$, and every point of the tile makes that same journey, so the corner stays $10$ right and $7$ down from the origin’s image: $(-13 + 10, 4 - 7) = (-3, -3)$ ✓. Confirm by undoing the slide: $(x, y) \\to (x + 13, y - 4)$ sends $(-3, -3)$ back to $(10, -7)$. The two coordinates landing on the same value is a coincidence of these numbers, not a rule.',
    },
  ],

  // slot 2 — 90 degree counterclockwise rotation about the origin.
  //          Lanes: (-4, -8) -> (8, -4); (9, -5) -> (5, 9); (-6, 11) -> (-11, -6).
  [
    {
      q: 'Find the image of the point $(-4, -8)$ after a $90^\\circ$ counterclockwise rotation about the origin.',
      fig: {
        w: 200,
        view: [-6, -10, 9, 3],
        grid: true,
        elems: [
          { t: 'seg', a: [0, 0], b: [-4, -8], dash: true },
          { t: 'point', p: [-4, -8], label: 'P', dx: -10, dy: -6 },
        ],
      },
      answer: '$(8, -4)$',
      solution:
        'Use the quarter-turn rule $(x, y) \\to (-y, x)$: the coordinates swap and the new first coordinate flips sign, so $(-4, -8) \\to (8, -4)$ ✓. Second route, by turning the two direction arrows separately: reaching $P$ from the origin means going $4$ left and then $8$ down. A quarter turn counterclockwise sends the left arrow to a down arrow and the down arrow to a right arrow, so the same trip becomes $4$ down and $8$ right, landing at $(8, -4)$ ✓. Confirm by turning the image back: a $90^\\circ$ clockwise turn uses $(x, y) \\to (y, -x)$, and $(8, -4)$ goes to $(-4, -8)$, exactly where the point began. Both points are $\\sqrt{80}$ from the origin, as a rotation demands.',
    },
    {
      q: 'A spotlight beam points at the spot $(9, -5)$ on a stage grid. The whole rig turns $90^\\circ$ counterclockwise about the origin. Find the spot the beam points at afterwards.',
      fig: {
        view: [-2, -7, 11, 10],
        grid: true,
        elems: [
          { t: 'seg', a: [0, 0], b: [9, -5], dash: true },
          { t: 'point', p: [9, -5], label: 'P', dx: 12, dy: 4 },
        ],
      },
      answer: '$(5, 9)$',
      solution:
        'Use the quarter-turn rule $(x, y) \\to (-y, x)$: the coordinates swap and the new first coordinate flips sign, so $(9, -5) \\to (5, 9)$ ✓. Second route, by turning the two direction arrows separately: the beam reaches its spot by going $9$ right and then $5$ down. A quarter turn counterclockwise sends the right arrow to an up arrow and the down arrow to a right arrow, so the trip becomes $9$ up and $5$ right, landing at $(5, 9)$ ✓. Confirm by turning the image back: the clockwise rule $(x, y) \\to (y, -x)$ sends $(5, 9)$ to $(9, -5)$, the original spot. The beam swung from Quadrant IV into Quadrant I, which is just what a counterclockwise quarter turn should do.',
    },
    {
      q: 'Find the image of the point $(-6, 11)$ after a $90^\\circ$ counterclockwise rotation about the origin.',
      fig: {
        w: 220,
        view: [-12, -8, 3, 13],
        grid: true,
        elems: [
          { t: 'seg', a: [0, 0], b: [-6, 11], dash: true },
          { t: 'point', p: [-6, 11], label: 'P', dx: -10, dy: -6 },
        ],
      },
      answer: '$(-11, -6)$',
      solution:
        'Use the quarter-turn rule $(x, y) \\to (-y, x)$: the coordinates swap and the new first coordinate flips sign, so $(-6, 11) \\to (-11, -6)$ ✓. Second route, by turning the two direction arrows separately: the point sits $6$ left and $11$ up from the origin. A quarter turn counterclockwise sends the left arrow to a down arrow and the up arrow to a left arrow, so the trip becomes $6$ down and $11$ left, landing at $(-11, -6)$ ✓. Confirm by turning the image back: the clockwise rule $(x, y) \\to (y, -x)$ sends $(-11, -6)$ to $(-6, 11)$, the starting point. A point in Quadrant II lands in Quadrant III, one quadrant further round.',
    },
  ],

  // slot 3 — reflection over the y-axis.
  //          Lanes: (6, -3) -> (-6, -3); (-11, -8) -> (11, -8); (14, -9) -> (-14, -9).
  [
    {
      q: 'Find the image of the point $(6, -3)$ after a reflection over the y-axis.',
      answer: '$(-6, -3)$',
      solution:
        'The y-axis mirror flips only the $x$-coordinate, by the rule $(x, y) \\to (-x, y)$, so $(6, -3) \\to (-6, -3)$ ✓. Second route, by making the mirror do its job as a midline: the y-axis has to sit exactly halfway between the point and its image, and the two must share a height, so the image is $(a, -3)$ where the midpoint $\\frac{6 + a}{2}$ equals $0$. That gives $a = -6$, so the image is $(-6, -3)$ ✓. Confirm by reflecting a second time: flipping $(-6, -3)$ over the same mirror gives $(6, -3)$ back, since two identical reflections cancel out.',
    },
    {
      q: 'A tent peg is driven in at $(-11, -8)$ on a survey grid. Find where it appears in a plan that has been flipped over the y-axis.',
      answer: '$(11, -8)$',
      solution:
        'The y-axis mirror flips only the $x$-coordinate, by the rule $(x, y) \\to (-x, y)$, so $(-11, -8) \\to (11, -8)$ ✓. Second route, by measuring across to the mirror: the peg lies $11$ units to the left of the y-axis, so its image must lie $11$ units to the right of it, at $x = 11$, and a vertical mirror never changes a height, so the $y$-coordinate stays at $-8$: the image is $(11, -8)$ ✓. Confirm by reflecting a second time: $(11, -8)$ flips back to $(-11, -8)$, which is where the peg really is. Both the peg and its image sit below the x-axis — this mirror moves nothing up or down.',
    },
    {
      q: 'Find the image of the point $(14, -9)$ after a reflection over the y-axis.',
      answer: '$(-14, -9)$',
      solution:
        'The y-axis mirror flips only the $x$-coordinate, by the rule $(x, y) \\to (-x, y)$, so $(14, -9) \\to (-14, -9)$ ✓. Second route, by making the mirror do its job as a midline: the image keeps the height $-9$, and the y-axis must be the midline of the two, so the image is $(a, -9)$ with $\\frac{14 + a}{2} = 0$, giving $a = -14$ and the image $(-14, -9)$ ✓. Confirm by reflecting a second time: $(-14, -9)$ flips back to $(14, -9)$, the point we started from. The segment joining the two is $28$ units long and the mirror cuts it into two equal halves of $14$.',
    },
  ],

  // slot 4 — write the coordinate rule of a translation from one pair.
  //          Lanes: (5, 3) -> (-1, 9) gives (x - 6, y + 6);
  //          (-2, 6) -> (5, -1) gives (x + 7, y - 7);
  //          (7, -4) -> (-1, 5) gives (x - 8, y + 9).
  [
    {
      q: 'A translation sends $(5, 3)$ to $(-1, 9)$. Write the coordinate rule for this translation.',
      answer: '$(x, y) \\to (x - 6, y + 6)$',
      solution:
        'Subtract to read off the slide: horizontally $-1 - 5 = -6$, and vertically $9 - 3 = 6$. So every point moves $6$ left and $6$ up, and the rule is $(x, y) \\to (x - 6, y + 6)$ ✓. Second route, through the halfway point: the midpoint of $(5, 3)$ and $(-1, 9)$ is $\\left(\\frac{5 + (-1)}{2}, \\frac{3 + 9}{2}\\right) = (2, 6)$, and the half-trip from $(5, 3)$ to $(2, 6)$ is the rule $(x, y) \\to (x - 3, y + 3)$. Doing that half-trip twice must be the whole translation, and two slides add, so the full rule is $(x, y) \\to (x - 6, y + 6)$ ✓. Confirm by running the rule forward: $(5 - 6, 3 + 6) = (-1, 9)$, exactly the image we were given.',
    },
    {
      q: 'On a floor plan, a bookcase corner at $(-2, 6)$ is moved so that the corner lands at $(5, -1)$, and the whole bookcase slides with it. Write the coordinate rule for the slide.',
      answer: '$(x, y) \\to (x + 7, y - 7)$',
      solution:
        'Subtract to read off the slide: horizontally $5 - (-2) = 7$, and vertically $-1 - 6 = -7$. So every point of the bookcase moves $7$ right and $7$ down, and the rule is $(x, y) \\to (x + 7, y - 7)$ ✓. Second route, through the halfway point: the midpoint of $(-2, 6)$ and $(5, -1)$ is $\\left(\\frac{3}{2}, \\frac{5}{2}\\right)$, and the trip from $(-2, 6)$ to that midpoint is $\\frac{3}{2} - (-2) = \\frac{7}{2}$ right and $\\frac{5}{2} - 6 = -\\frac{7}{2}$ vertically. Two of those half-slides make the whole one, and slides add, so the rule is $(x, y) \\to (x + 7, y - 7)$ ✓. Confirm by running the rule forward: $(-2 + 7, 6 - 7) = (5, -1)$, the corner’s new home.',
    },
    {
      q: 'A translation sends $(7, -4)$ to $(-1, 5)$. Write the coordinate rule for this translation.',
      answer: '$(x, y) \\to (x - 8, y + 9)$',
      solution:
        'Subtract to read off the slide: horizontally $-1 - 7 = -8$, and vertically $5 - (-4) = 9$. So every point moves $8$ left and $9$ up, and the rule is $(x, y) \\to (x - 8, y + 9)$ ✓. Second route, through the halfway point: the midpoint of $(7, -4)$ and $(-1, 5)$ is $\\left(3, \\frac{1}{2}\\right)$, and the half-trip from $(7, -4)$ to it is $3 - 7 = -4$ horizontally and $\\frac{1}{2} - (-4) = \\frac{9}{2}$ vertically. Repeating that half-trip covers the whole slide, and slides add, so the rule is $(x, y) \\to (x - 8, y + 9)$ ✓. Confirm by running the rule forward: $(7 - 8, -4 + 9) = (-1, 5)$, the image we were handed.',
    },
  ],

  // slot 5 — image of a point under a dilation centered at the origin.
  //          Lanes: (7, -4) with k = 3 -> (21, -12); (-9, 5) with k = 4 ->
  //          (-36, 20); (-5, -8) with k = 5 -> (-25, -40).
  [
    {
      q: 'Find the image of the point $(7, -4)$ under a dilation centered at the origin with scale factor $3$.',
      answer: '$(21, -12)$',
      solution:
        'A dilation centered at the origin multiplies both coordinates by the scale factor: $(3 \\cdot 7, 3 \\cdot (-4)) = (21, -12)$ ✓. Second route, by ray and distance: the image has to sit on the ray from the origin through $(7, -4)$ and be three times as far out. The ray through $(21, -12)$ has slope $\\frac{-12}{21} = -\\frac{4}{7}$, matching the slope $\\frac{-4}{7}$ of the original ray, and both points sit on the same side of the origin because neither coordinate changed sign; the distances are $\\sqrt{49 + 16} = \\sqrt{65}$ and $\\sqrt{441 + 144} = \\sqrt{585} = \\sqrt{9 \\cdot 65} = 3\\sqrt{65}$ — exactly triple ✓. Confirm by shrinking back: dilating $(21, -12)$ by $\\frac{1}{3}$ returns $(7, -4)$.',
    },
    {
      q: 'A design at the point $(-9, 5)$ is enlarged from the origin by a scale factor of $4$. Find the image of that point.',
      answer: '$(-36, 20)$',
      solution:
        'A dilation centered at the origin multiplies both coordinates by the scale factor: $(4 \\cdot (-9), 4 \\cdot 5) = (-36, 20)$ ✓. Second route, by ray and distance: the image must lie on the ray from the origin through $(-9, 5)$, four times as far out. The slope $\\frac{20}{-36} = -\\frac{5}{9}$ matches the original slope $\\frac{5}{-9}$, and both points sit on the same side of the origin since the signs of the coordinates are unchanged; the distances are $\\sqrt{81 + 25} = \\sqrt{106}$ and $\\sqrt{1296 + 400} = \\sqrt{1696} = \\sqrt{16 \\cdot 106} = 4\\sqrt{106}$ ✓. Confirm by shrinking back: dilating $(-36, 20)$ by $\\frac{1}{4}$ returns $(-9, 5)$.',
    },
    {
      q: 'Find the image of the point $(-5, -8)$ under a dilation centered at the origin with scale factor $5$.',
      answer: '$(-25, -40)$',
      solution:
        'A dilation centered at the origin multiplies both coordinates by the scale factor: $(5 \\cdot (-5), 5 \\cdot (-8)) = (-25, -40)$ ✓. Second route, by ray and distance: the image belongs on the ray from the origin through $(-5, -8)$, five times as far out. The slope $\\frac{-40}{-25} = \\frac{8}{5}$ matches the original slope $\\frac{-8}{-5}$, and the point stays deep in Quadrant III; the distances are $\\sqrt{25 + 64} = \\sqrt{89}$ and $\\sqrt{625 + 1600} = \\sqrt{2225} = \\sqrt{25 \\cdot 89} = 5\\sqrt{89}$ ✓. Confirm by shrinking back: dilating $(-25, -40)$ by $\\frac{1}{5}$ returns $(-5, -8)$.',
    },
  ],

  // slot 6 — lines of symmetry AND order of rotational symmetry, both equal to n.
  //          Lanes: regular octagon -> 8 and 8; regular decagon -> 10 and 10;
  //          regular nonagon -> 9 and 9.
  [
    {
      q: 'How many lines of symmetry does a regular octagon have, and what is its order of rotational symmetry?',
      answer: '$8$ lines of symmetry; rotational symmetry of order $8$',
      solution:
        'Count the mirrors by parity first. An octagon has an even number of sides, so its axes come in two families: $4$ lines each joining a pair of opposite vertices, and $4$ lines each joining the midpoints of a pair of opposite sides — $8$ in all. For the turns, the smallest rotation that carries the octagon onto itself is $\\frac{360^\\circ}{8} = 45^\\circ$, and the rotations $45^\\circ, 90^\\circ, \\ldots, 360^\\circ$ are $8$ of them, so the order is $8$ ✓. Second route, and it does not care whether the number of sides is even or odd: every axis of symmetry runs through the center, and where it leaves the octagon it must hit either a vertex or the midpoint of a side, since anywhere else the two halves would not match. That is $8$ vertices plus $8$ side midpoints, $16$ landing spots, and each axis uses two of them at its opposite ends, giving $\\frac{16}{2} = 8$ axes. In the same spirit, a rotation is decided entirely by which vertex a chosen corner lands on, and it has $8$ choices, so there are $8$ rotations and the order is $8$ ✓. The general count is that a regular $n$-gon has $n$ of each; test it on a square, where $n = 4$ gives the familiar $4$ mirrors and order $4$.',
    },
    {
      q: 'A coin is minted in the shape of a regular decagon. How many lines of symmetry does its outline have, and what is its order of rotational symmetry?',
      answer: '$10$ lines of symmetry; rotational symmetry of order $10$',
      solution:
        'Count the mirrors by parity first. A decagon has an even number of sides, so its axes fall into two families: $5$ lines each through a pair of opposite vertices, and $5$ lines each through the midpoints of a pair of opposite sides — $10$ altogether. For the turns, the smallest rotation carrying the coin onto itself is $\\frac{360^\\circ}{10} = 36^\\circ$, and the rotations $36^\\circ, 72^\\circ, \\ldots, 360^\\circ$ number $10$, so the order is $10$ ✓. Second route, and it does not care whether the number of sides is even or odd: any axis of symmetry passes through the center and must leave the shape at a vertex or at the midpoint of a side, or the two halves would fail to match. There are $10$ vertices and $10$ side midpoints, $20$ landing spots, and each axis claims two of them at its ends, so there are $\\frac{20}{2} = 10$ axes. Likewise a rotation is pinned down by which of the $10$ vertices one chosen corner goes to, giving $10$ rotations and order $10$ ✓. The general count is that a regular $n$-gon has $n$ of each; test it on a square, where $n = 4$ gives the familiar $4$ mirrors and order $4$.',
    },
    {
      q: 'How many lines of symmetry does a regular nonagon have, and what is its order of rotational symmetry?',
      answer: '$9$ lines of symmetry; rotational symmetry of order $9$',
      solution:
        'Count the mirrors by parity first. A nonagon has an odd number of sides, so no line joins two opposite vertices; instead each axis runs from one vertex straight to the midpoint of the side facing it. There are $9$ vertices and so $9$ such axes. For the turns, the smallest rotation carrying the nonagon onto itself is $\\frac{360^\\circ}{9} = 40^\\circ$, and the rotations $40^\\circ, 80^\\circ, \\ldots, 360^\\circ$ number $9$, so the order is $9$ ✓. Second route, and it does not care whether the number of sides is even or odd: every axis passes through the center and must leave the shape at a vertex or a side midpoint. That is $9$ vertices plus $9$ side midpoints, $18$ landing spots, and each axis uses two of them, giving $\\frac{18}{2} = 9$ axes — the odd count works out because here each axis pairs a vertex with a midpoint rather than a vertex with a vertex. A rotation is decided by which of the $9$ vertices a chosen corner reaches, so there are $9$ rotations and the order is $9$ ✓. The general count is that a regular $n$-gon has $n$ of each; test it on a square, where $n = 4$ gives the familiar $4$ mirrors and order $4$.',
    },
  ],

  // slot 7 — reflect over y = x, then over the x-axis. The composite is the
  //          single rule (x, y) -> (y, -x), a 90 degree clockwise rotation.
  //          Lanes: (-5, 4) -> (4, 5); (8, -3) -> (-3, -8); (-9, 6) -> (6, 9).
  [
    {
      q: 'The point $(-5, 4)$ is reflected over the line $y = x$, and the result is reflected over the x-axis. Find the final image.',
      answer: '$(4, 5)$',
      solution:
        'Take the mirrors one at a time. Over $y = x$ the coordinates trade places, so $(-5, 4) \\to (4, -5)$. Over the x-axis only the $y$-coordinate flips, so $(4, -5) \\to (4, 5)$ ✓. Second route, by composing the two mirrors into one motion: reflecting over $y = x$ sends $(x, y)$ to $(y, x)$, and reflecting that over the x-axis sends it on to $(y, -x)$, so the pair of mirrors acts as the single rule $(x, y) \\to (y, -x)$ — which is the $90^\\circ$ clockwise rotation about the origin, exactly what two mirrors meeting at $45^\\circ$ should produce. Applying it in one stroke: $(-5, 4) \\to (4, 5)$ ✓. Confirm by walking the mirrors backwards: reflect $(4, 5)$ over the x-axis to reach $(4, -5)$, then over $y = x$ to reach $(-5, 4)$, the point we began with.',
    },
    {
      q: 'A cutting machine reflects a design point at $(8, -3)$ over the line $y = x$, then reflects the result over the x-axis. Find where the point finishes.',
      answer: '$(-3, -8)$',
      solution:
        'Take the mirrors one at a time. Over $y = x$ the coordinates trade places, so $(8, -3) \\to (-3, 8)$. Over the x-axis only the $y$-coordinate flips, so $(-3, 8) \\to (-3, -8)$ ✓. Second route, by composing the two mirrors into one motion: the first mirror sends $(x, y)$ to $(y, x)$ and the second sends that to $(y, -x)$, so the pair acts as the single rule $(x, y) \\to (y, -x)$ — the $90^\\circ$ clockwise rotation about the origin, since the two mirror lines cross at $45^\\circ$ and a double reflection turns a figure by twice that angle. In one stroke, $(8, -3) \\to (-3, -8)$ ✓. Confirm by walking the mirrors backwards: $(-3, -8)$ over the x-axis is $(-3, 8)$, and that over $y = x$ is $(8, -3)$, the design point we started from.',
    },
    {
      q: 'The point $(-9, 6)$ is reflected over the line $y = x$, and the result is reflected over the x-axis. Find the final image.',
      answer: '$(6, 9)$',
      solution:
        'Take the mirrors one at a time. Over $y = x$ the coordinates trade places, so $(-9, 6) \\to (6, -9)$. Over the x-axis only the $y$-coordinate flips, so $(6, -9) \\to (6, 9)$ ✓. Second route, by composing the two mirrors into one motion: the first mirror carries $(x, y)$ to $(y, x)$ and the second carries that to $(y, -x)$, so together they are the single rule $(x, y) \\to (y, -x)$, the $90^\\circ$ clockwise rotation about the origin — two mirrors meeting at $45^\\circ$ always turn a figure through $90^\\circ$. In one stroke, $(-9, 6) \\to (6, 9)$ ✓. Confirm by walking the mirrors backwards: $(6, 9)$ over the x-axis is $(6, -9)$, and that over $y = x$ is $(-9, 6)$. Orientation was reversed twice, so the final image faces the same way as the original — the mark of a rotation.',
    },
  ],

  // slot 8 — shortest bent path from A down to the x-axis and on to B.
  //          Lanes: A(3, 2), B(9, 10) -> 6*sqrt(5); A(1, 6), B(16, 14) -> 25;
  //          A(2, 10), B(12, 14) -> 26.
  [
    {
      q: 'A hiker at $A(3, 2)$ must fill a bottle at a stream running along the x-axis and then reach a shelter at $B(9, 10)$. Find the shortest possible total distance.',
      fig: {
        w: 220,
        view: [-1, -12, 12, 12],
        grid: true,
        elems: [
          { t: 'seg', a: [3, 2], b: [9, -10], dash: true },
          { t: 'seg', a: [9, 10], b: [9, -10], dash: true },
          { t: 'point', p: [3, 2], label: 'A', dx: -10, dy: -4 },
          { t: 'point', p: [9, 10], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [9, -10], label: "B'", dx: 12, dy: 4 },
        ],
      },
      answer: '$6\\sqrt{5}$',
      solution:
        'Reflect the shelter across the stream: $B(9, 10)$ becomes $B\'(9, -10)$. Every stream-touching path from $A$ to $B$ has a mirror twin of exactly the same length running from $A$ to $B\'$, because the second leg is reflected and reflections preserve length. The shortest path from $A$ to $B\'$ is the straight one, so the answer is $AB\' = \\sqrt{(9 - 3)^2 + (-10 - 2)^2} = \\sqrt{36 + 144} = \\sqrt{180} = 6\\sqrt{5}$ ✓. Second route, reflecting the hiker instead of the shelter: $A(3, 2)$ becomes $A\'(3, -2)$, and the same mirror argument now measures $A\'B = \\sqrt{(9 - 3)^2 + (10 - (-2))^2} = \\sqrt{36 + 144} = 6\\sqrt{5}$ ✓. Confirm by adding the two legs of the real walk: the straight line from $A$ to $B\'$ crosses the x-axis at $(4, 0)$, and $\\sqrt{1 + 4} + \\sqrt{25 + 100} = \\sqrt{5} + 5\\sqrt{5} = 6\\sqrt{5}$.',
    },
    {
      q: 'A courier starts at $A(1, 6)$, must touch a wall running along the x-axis to scan a code, and then continue to a drop point at $B(16, 14)$. Find the shortest possible total distance.',
      fig: {
        w: 240,
        view: [-2, -16, 19, 17],
        grid: true,
        elems: [
          { t: 'seg', a: [1, 6], b: [16, -14], dash: true },
          { t: 'seg', a: [16, 14], b: [16, -14], dash: true },
          { t: 'point', p: [1, 6], label: 'A', dx: -10, dy: -4 },
          { t: 'point', p: [16, 14], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [16, -14], label: "B'", dx: 12, dy: 4 },
        ],
      },
      answer: '$25$',
      solution:
        'Reflect the drop point across the wall: $B(16, 14)$ becomes $B\'(16, -14)$. Any wall-touching route from $A$ to $B$ has a mirror twin of the same length from $A$ to $B\'$, since reflecting the second leg does not change its length, and the shortest route to $B\'$ is a straight line: $AB\' = \\sqrt{(16 - 1)^2 + (-14 - 6)^2} = \\sqrt{225 + 400} = \\sqrt{625} = 25$ ✓. Second route, reflecting the courier instead of the drop point: $A(1, 6)$ becomes $A\'(1, -6)$, and the same argument gives $A\'B = \\sqrt{(16 - 1)^2 + (14 - (-6))^2} = \\sqrt{225 + 400} = 25$ ✓. Confirm by adding the two legs of the real route: the straight line from $A$ to $B\'$ meets the wall at $\\left(\\frac{11}{2}, 0\\right)$, and the legs measure $\\sqrt{\\frac{81}{4} + 36} = \\frac{15}{2}$ and $\\sqrt{\\frac{441}{4} + 196} = \\frac{35}{2}$, which add to $25$. A $15$-$20$-$25$ right triangle was hiding in the problem.',
    },
    {
      q: 'A gull at $A(2, 10)$ swoops down to skim the water along the x-axis and then flies on to a post at $B(12, 14)$. Find the shortest possible total distance it can cover.',
      fig: {
        w: 200,
        view: [-1, -16, 15, 17],
        grid: true,
        elems: [
          { t: 'seg', a: [2, 10], b: [12, -14], dash: true },
          { t: 'seg', a: [12, 14], b: [12, -14], dash: true },
          { t: 'point', p: [2, 10], label: 'A', dx: -10, dy: -4 },
          { t: 'point', p: [12, 14], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [12, -14], label: "B'", dx: 12, dy: 4 },
        ],
      },
      answer: '$26$',
      solution:
        'Reflect the post across the water: $B(12, 14)$ becomes $B\'(12, -14)$. Every water-touching flight from $A$ to $B$ has a mirror twin of equal length from $A$ to $B\'$, because the reflected second leg keeps its length, and the shortest flight to $B\'$ is the straight one: $AB\' = \\sqrt{(12 - 2)^2 + (-14 - 10)^2} = \\sqrt{100 + 576} = \\sqrt{676} = 26$ ✓. Second route, reflecting the gull instead of the post: $A(2, 10)$ becomes $A\'(2, -10)$, and the same mirror argument gives $A\'B = \\sqrt{(12 - 2)^2 + (14 - (-10))^2} = \\sqrt{100 + 576} = 26$ ✓, a $10$-$24$-$26$ right triangle. Confirm by pricing a rival plan: dropping straight down to $(2, 0)$ and flying on to $B$ costs $10 + \\sqrt{100 + 196} = 10 + 2\\sqrt{74} \\approx 27.2$, which is longer, just as the straight-line argument predicts.',
    },
  ],

  // slot 9 — positive scale factor of a dilation carrying one square to another.
  //          Lanes: area 16 -> 49 gives 7/4; area 25 -> 64 gives 8/5;
  //          area 36 -> 121 gives 11/6.
  [
    {
      q: 'A dilation carries a square of area $16$ to a square of area $49$. What is the (positive) scale factor?',
      answer: '$k = \\frac{7}{4}$',
      solution:
        'A dilation stretches every length by $k$, so it stretches area by $k^2$ — once for each of the two dimensions. That gives $k^2 = \\frac{49}{16}$, and taking the positive square root, $k = \\frac{7}{4}$ ✓. Second route, straight through the sides: a square of area $16$ has side $4$ and a square of area $49$ has side $7$, and the dilation carries the first side to the second, so $k = \\frac{7}{4}$ ✓. Confirm by scaling the starting area forward: $16 \\cdot \\left(\\frac{7}{4}\\right)^2 = 16 \\cdot \\frac{49}{16} = 49$, the area we were aiming at. The factor is a little under $2$, while the area more than tripled — area always outruns length.',
    },
    {
      q: 'A photograph is enlarged so that a square badge of area $25$ in the original becomes a square of area $64$ in the copy. What is the (positive) scale factor of the enlargement?',
      answer: '$k = \\frac{8}{5}$',
      solution:
        'A dilation stretches every length by $k$, so it stretches area by $k^2$ — once for each of the two dimensions. That gives $k^2 = \\frac{64}{25}$, and taking the positive square root, $k = \\frac{8}{5}$ ✓. Second route, straight through the sides: a square of area $25$ has side $5$ and a square of area $64$ has side $8$, and the enlargement carries the first side to the second, so $k = \\frac{8}{5}$ ✓. Confirm by scaling the starting area forward: $25 \\cdot \\left(\\frac{8}{5}\\right)^2 = 25 \\cdot \\frac{64}{25} = 64$, exactly the area of the copy. Every length in the photograph grew by $\\frac{8}{5}$, not by the area ratio $\\frac{64}{25}$.',
    },
    {
      q: 'A dilation carries a square of area $36$ to a square of area $121$. What is the (positive) scale factor?',
      answer: '$k = \\frac{11}{6}$',
      solution:
        'A dilation stretches every length by $k$, so it stretches area by $k^2$ — once for each of the two dimensions. That gives $k^2 = \\frac{121}{36}$, and taking the positive square root, $k = \\frac{11}{6}$ ✓. Second route, straight through the sides: a square of area $36$ has side $6$ and a square of area $121$ has side $11$, and the dilation carries the first side to the second, so $k = \\frac{11}{6}$ ✓. Confirm by scaling the starting area forward: $36 \\cdot \\left(\\frac{11}{6}\\right)^2 = 36 \\cdot \\frac{121}{36} = 121$, the target area. Both squares have whole-number sides, which is what makes the fraction so tidy here.',
    },
  ],

  // slot 10 — a 180 degree rotation about the origin followed by a translation.
  //           Lanes: (-6, 2) then (x + 1, y + 7) -> (7, 5);
  //           (7, -3) then (x - 2, y + 9) -> (-9, 12);
  //           (-4, -7) then (x - 9, y + 3) -> (-5, 10).
  [
    {
      q: 'The point $(-6, 2)$ is rotated $180^\\circ$ about the origin, and the result is translated by $(x, y) \\to (x + 1, y + 7)$. Find the final image.',
      answer: '$(7, 5)$',
      solution:
        'The half-turn flips both signs, by the rule $(x, y) \\to (-x, -y)$, so $(-6, 2) \\to (6, -2)$. The translation then adds the slide: $(6 + 1, -2 + 7) = (7, 5)$ ✓. Second route, by trading the half-turn for two flips: a $180^\\circ$ rotation about the origin does the same work as a reflection over the x-axis followed by a reflection over the y-axis. Reflecting $(-6, 2)$ over the x-axis gives $(-6, -2)$, and reflecting that over the y-axis gives $(6, -2)$ — the same landing spot — and the translation carries it to $(7, 5)$ ✓. Confirm that the half-turn really was centered at the origin: the midpoint of $(-6, 2)$ and $(6, -2)$ is $(0, 0)$, as a $180^\\circ$ rotation about the origin requires.',
    },
    {
      q: 'A robot arm holding a chip at $(7, -3)$ spins the tray $180^\\circ$ about the origin and then slides it by $(x, y) \\to (x - 2, y + 9)$. Find where the chip finishes.',
      answer: '$(-9, 12)$',
      solution:
        'The half-turn flips both signs, by the rule $(x, y) \\to (-x, -y)$, so $(7, -3) \\to (-7, 3)$. The slide then adds: $(-7 - 2, 3 + 9) = (-9, 12)$ ✓. Second route, by trading the half-turn for two flips: a $180^\\circ$ rotation about the origin is the same motion as a reflection over the x-axis followed by a reflection over the y-axis. Reflecting $(7, -3)$ over the x-axis gives $(7, 3)$, and reflecting that over the y-axis gives $(-7, 3)$ — the same spot the rule produced — and the slide carries it on to $(-9, 12)$ ✓. Confirm that the spin really was centered at the origin: the midpoint of $(7, -3)$ and $(-7, 3)$ is $(0, 0)$, exactly as a half-turn about the origin demands.',
    },
    {
      q: 'The point $(-4, -7)$ is rotated $180^\\circ$ about the origin, and the result is translated by $(x, y) \\to (x - 9, y + 3)$. Find the final image.',
      answer: '$(-5, 10)$',
      solution:
        'The half-turn flips both signs, by the rule $(x, y) \\to (-x, -y)$, so $(-4, -7) \\to (4, 7)$. The translation then adds the slide: $(4 - 9, 7 + 3) = (-5, 10)$ ✓. Second route, by trading the half-turn for two flips: a $180^\\circ$ rotation about the origin does the same job as a reflection over the x-axis followed by a reflection over the y-axis. Reflecting $(-4, -7)$ over the x-axis gives $(-4, 7)$, and reflecting that over the y-axis gives $(4, 7)$ — the same intermediate point — and the translation moves it to $(-5, 10)$ ✓. Confirm that the rotation really was centered at the origin: the midpoint of $(-4, -7)$ and $(4, 7)$ is $(0, 0)$, just as a half-turn about the origin requires. The point began in Quadrant III and ends in Quadrant II.',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 16,
  worksheet,
}
