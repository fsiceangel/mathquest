// Introduction to Geometry chapter 14 — variations for the printable worksheet.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key anywhere in
//    this file. Answers copy the base worksheet’s formatting: the paired form
//    '$V = 90$ cubic units, $SA = 146$ square units' for the two solids that
//    ask for both measurements, a bare '$25$' for a single length or count,
//    '$E = 36$ and $V = 14$' for the two-count slot, and the named-solid form
//    '$F = 12$, $E = 30$, $V = 20$: the dodecahedron' for the last one.
//  - Every answer was worked twice by two genuinely different routes, and the
//    routes had to agree before the key was written: the box formulas vs.
//    stacked unit-cube layers plus a net read as a lateral band and two lids
//    (slot 1); base area times length vs. the prism as half a box, with the
//    six faces counted one at a time (slot 2); the space-diagonal formula vs.
//    two Pythagorean steps through the floor diagonal (slots 3, 9); the
//    one-third rule and four triangles vs. three pyramids filling a prism and
//    the half-perimeter-times-slant rule (slot 4); Euler quoted vs. Euler
//    rebuilt by flattening the surface into a map and growing it from a tree
//    (slots 5, 6); the twelve edges of the big cube vs. a full census of the
//    little cubes that has to total $n^3$ (slot 7); solving for the edge and
//    cubing vs. carrying the squared edge through to $s \cdot s^2$ (slot 8);
//    solving Euler for the face count vs. solving the same system for the
//    vertex count instead (slot 10).
//  - Every solid is drawn as an oblique wireframe with dashed hidden edges.
//    That projection does not preserve length, so every dimension a solver
//    needs is written on the figure as a plain text label rather than measured
//    off it. Figure labels are plain text: bare numerals, a question mark for
//    the unknown, and 'h = 5' for a pyramid’s height.
//  - Pin deviation: one. Slot 5 lane 1 was pinned as $F = 12$ with $V = 22$.
//    Euler does return $E = 32$ there, but no polyhedron has those counts:
//    every vertex needs at least three edges, so $2E \ge 3V$, and $64 < 66$.
//    The lane keeps the pinned answer $32$ and asks about a solid that exists,
//    $F = 18$ with $V = 16$ — the octagonal antiprism, whose edges can be
//    counted by hand as a check.

const worksheet = [
  // slot 1 — box: volume and total surface area.
  //          Lanes: 9x5x2 -> 90, 146; 12x5x3 -> 180, 222; 10x4x3 -> 120, 164.
  [
    {
      q: 'A block of beeswax is shaped like a box measuring $9 \\times 5 \\times 2$. Find its volume and its total surface area.',
      fig: {
        view: [-1.3, -1.4, 7.3, 3.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.5, 0], [4.5, 1.2], [0, 1.2]], fill: false },
          { t: 'seg', a: [4.5, 0], b: [6, 1.05] },
          { t: 'seg', a: [4.5, 1.2], b: [6, 2.25] },
          { t: 'seg', a: [0, 1.2], b: [1.5, 2.25] },
          { t: 'seg', a: [6, 1.05], b: [6, 2.25] },
          { t: 'seg', a: [1.5, 2.25], b: [6, 2.25] },
          { t: 'seg', a: [0, 0], b: [1.5, 1.05], dash: true },
          { t: 'seg', a: [1.5, 1.05], b: [6, 1.05], dash: true },
          { t: 'seg', a: [1.5, 1.05], b: [1.5, 2.25], dash: true },
          { t: 'label', p: [2.25, 0], text: '9', dy: 18 },
          { t: 'label', p: [5.25, 0.525], text: '5', dx: 16, dy: 8 },
          { t: 'label', p: [0, 0.6], text: '2', dx: -12, dy: 4 },
        ],
      },
      answer: '$V = 90$ cubic units, $SA = 146$ square units',
      solution:
        'Volume by the box formula: $V = 9 \\times 5 \\times 2 = 90$ cubic units. Surface area by the three face sizes: $9 \\times 5 = 45$, $9 \\times 2 = 18$, and $5 \\times 2 = 10$, and each size appears twice, so $SA = 2(45 + 18 + 10) = 2 \\times 73 = 146$ square units ✓. Second route, filling and unwrapping the block instead: a single flat layer of unit cubes on the $9 \\times 5$ floor holds $45$ cubes, and the block is $2$ tall, so $45 + 45 = 90$ cubic units. For the outside, unroll the four side faces into one band: it is as wide as the way around the floor, $2(9 + 5) = 28$, and as tall as the block, $2$, giving $28 \\times 2 = 56$; add the top and the bottom, $45$ each, and the total is $56 + 90 = 146$ square units ✓.',
    },
    {
      q: 'A brick of modeling clay is a box measuring $12 \\times 5 \\times 3$. Find its volume and its total surface area.',
      fig: {
        view: [-1.3, -1.4, 7.6, 3.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.8, 0], [4.8, 1.5], [0, 1.5]], fill: false },
          { t: 'seg', a: [4.8, 0], b: [6.3, 1.05] },
          { t: 'seg', a: [4.8, 1.5], b: [6.3, 2.55] },
          { t: 'seg', a: [0, 1.5], b: [1.5, 2.55] },
          { t: 'seg', a: [6.3, 1.05], b: [6.3, 2.55] },
          { t: 'seg', a: [1.5, 2.55], b: [6.3, 2.55] },
          { t: 'seg', a: [0, 0], b: [1.5, 1.05], dash: true },
          { t: 'seg', a: [1.5, 1.05], b: [6.3, 1.05], dash: true },
          { t: 'seg', a: [1.5, 1.05], b: [1.5, 2.55], dash: true },
          { t: 'label', p: [2.4, 0], text: '12', dy: 18 },
          { t: 'label', p: [5.55, 0.525], text: '5', dx: 16, dy: 8 },
          { t: 'label', p: [0, 0.75], text: '3', dx: -12, dy: 4 },
        ],
      },
      answer: '$V = 180$ cubic units, $SA = 222$ square units',
      solution:
        'Volume by the box formula: $V = 12 \\times 5 \\times 3 = 180$ cubic units. Surface area from the three face sizes $12 \\times 5 = 60$, $12 \\times 3 = 36$, and $5 \\times 3 = 15$, each appearing twice: $SA = 2(60 + 36 + 15) = 2 \\times 111 = 222$ square units ✓. Second route, filling and unwrapping the brick instead: one flat layer of unit cubes covers the $12 \\times 5$ base with $60$ cubes, and three such layers stack to the top, so $3 \\times 60 = 180$ cubic units. For the outside, the four side faces unroll into a band of width $2(12 + 5) = 34$ and height $3$, an area of $102$; the base and the lid add $60$ each, so $102 + 120 = 222$ square units ✓.',
    },
    {
      q: 'A slab of fudge is cut into a box measuring $10 \\times 4 \\times 3$. Find its volume and its total surface area.',
      fig: {
        view: [-1.3, -1.4, 7, 3.7],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.4, 0], [4.4, 1.6], [0, 1.6]], fill: false },
          { t: 'seg', a: [4.4, 0], b: [5.7, 0.9] },
          { t: 'seg', a: [4.4, 1.6], b: [5.7, 2.5] },
          { t: 'seg', a: [0, 1.6], b: [1.3, 2.5] },
          { t: 'seg', a: [5.7, 0.9], b: [5.7, 2.5] },
          { t: 'seg', a: [1.3, 2.5], b: [5.7, 2.5] },
          { t: 'seg', a: [0, 0], b: [1.3, 0.9], dash: true },
          { t: 'seg', a: [1.3, 0.9], b: [5.7, 0.9], dash: true },
          { t: 'seg', a: [1.3, 0.9], b: [1.3, 2.5], dash: true },
          { t: 'label', p: [2.2, 0], text: '10', dy: 18 },
          { t: 'label', p: [5.05, 0.45], text: '4', dx: 16, dy: 8 },
          { t: 'label', p: [0, 0.8], text: '3', dx: -12, dy: 4 },
        ],
      },
      answer: '$V = 120$ cubic units, $SA = 164$ square units',
      solution:
        'Volume by the box formula: $V = 10 \\times 4 \\times 3 = 120$ cubic units. Surface area from the three face sizes $10 \\times 4 = 40$, $10 \\times 3 = 30$, and $4 \\times 3 = 12$, each in a matching pair: $SA = 2(40 + 30 + 12) = 2 \\times 82 = 164$ square units ✓. Second route, filling and unwrapping the slab instead: the $10 \\times 4$ floor holds $40$ unit cubes in one layer, and the slab is $3$ tall, so $3 \\times 40 = 120$ cubic units. For the outside, unroll the four sides into a single band of width $2(10 + 4) = 28$ and height $3$, an area of $84$; the top and the bottom contribute $40$ each, so $84 + 80 = 164$ square units ✓.',
    },
  ],

  // slot 2 — right triangular prism: volume and total surface area.
  //          Lanes: legs 9, 12, hyp 15, length 10 -> 540, 468;
  //          legs 8, 15, hyp 17, length 7 -> 420, 400;
  //          legs 20, 21, hyp 29, length 4 -> 840, 700.
  [
    {
      q: 'A doorstop is a right triangular prism $10$ long. Its two ends are right triangles with legs $9$ and $12$ and hypotenuse $15$. Find its volume and total surface area.',
      answer: '$V = 540$ cubic units, $SA = 468$ square units',
      solution:
        'The triangular end has area $\\frac{1}{2} \\times 9 \\times 12 = 54$, so $V = 54 \\times 10 = 540$ cubic units. For the outside, the three rectangular faces unroll into one band whose width is the way around the triangle, $9 + 12 + 15 = 36$, and whose height is the length $10$: that is $360$. Adding the two triangular ends gives $SA = 360 + 2 \\times 54 = 468$ square units ✓. Second route, through the box the prism came from: two copies of this prism, one flipped over, glue along the slanted face into a $9 \\times 12 \\times 10$ box of volume $1080$, so one prism holds half of that, $540$ cubic units. Then count the six faces one at a time instead of unrolling a band: the three rectangles measure $9 \\times 10 = 90$, $12 \\times 10 = 120$, and $15 \\times 10 = 150$, and the two triangles measure $54$ each, so the total is $90 + 120 + 150 + 54 + 54 = 468$ square units ✓. (The hypotenuse is honest: $81 + 144 = 225 = 15^2$.)',
    },
    {
      q: 'A wedge of hard cheese is a right triangular prism $7$ long, and each end is a right triangle with legs $8$ and $15$ and hypotenuse $17$. Find its volume and total surface area.',
      answer: '$V = 420$ cubic units, $SA = 400$ square units',
      solution:
        'The end triangle has area $\\frac{1}{2} \\times 8 \\times 15 = 60$, so $V = 60 \\times 7 = 420$ cubic units. The three rectangular faces unroll into a band as wide as the triangle’s perimeter, $8 + 15 + 17 = 40$, and as tall as the length $7$: that is $280$. With the two ends, $SA = 280 + 2 \\times 60 = 400$ square units ✓. Second route, through the box the wedge came from: a second copy of the wedge, turned over and joined along the slanted face, completes an $8 \\times 15 \\times 7$ box of volume $840$, so the wedge itself is $420$ cubic units. Counting the six faces separately: $8 \\times 7 = 56$, $15 \\times 7 = 105$, $17 \\times 7 = 119$, plus two triangles of $60$, giving $56 + 105 + 119 + 60 + 60 = 400$ square units ✓. (The hypotenuse checks out: $64 + 225 = 289 = 17^2$.)',
    },
    {
      q: 'A metal shim is a right triangular prism only $4$ long, with ends that are right triangles of legs $20$ and $21$ and hypotenuse $29$. Find its volume and total surface area.',
      answer: '$V = 840$ cubic units, $SA = 700$ square units',
      solution:
        'The end triangle has area $\\frac{1}{2} \\times 20 \\times 21 = 210$, so $V = 210 \\times 4 = 840$ cubic units. The three rectangles unroll into a band of width $20 + 21 + 29 = 70$ and height $4$, an area of $280$, and the two ends add $210$ each: $SA = 280 + 2 \\times 210 = 700$ square units ✓. Second route, through the box the shim came from: two shims, one of them flipped, fit together along the slanted face to make a $20 \\times 21 \\times 4$ box of volume $1680$, and half of that is $840$ cubic units. Counting faces one by one: $20 \\times 4 = 80$, $21 \\times 4 = 84$, $29 \\times 4 = 116$, and two triangles of $210$, so $80 + 84 + 116 + 210 + 210 = 700$ square units ✓. (The hypotenuse is right: $400 + 441 = 841 = 29^2$.)',
    },
  ],

  // slot 3 — space diagonal of a box.
  //          Lanes: 12x15x16 -> 25; 1x12x12 -> 17; 2x10x11 -> 15.
  [
    {
      q: 'A packing crate measures $12 \\times 15 \\times 16$. How long is the straight rod that reaches from one bottom corner of the crate to the far top corner?',
      fig: {
        view: [-1.3, -1.4, 6.5, 6.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [3, 3.4], [0, 3.4]], fill: false },
          { t: 'seg', a: [3, 0], b: [5.2, 1.55] },
          { t: 'seg', a: [3, 3.4], b: [5.2, 4.95] },
          { t: 'seg', a: [0, 3.4], b: [2.2, 4.95] },
          { t: 'seg', a: [5.2, 1.55], b: [5.2, 4.95] },
          { t: 'seg', a: [2.2, 4.95], b: [5.2, 4.95] },
          { t: 'seg', a: [0, 0], b: [2.2, 1.55], dash: true },
          { t: 'seg', a: [2.2, 1.55], b: [5.2, 1.55], dash: true },
          { t: 'seg', a: [2.2, 1.55], b: [2.2, 4.95], dash: true },
          { t: 'seg', a: [0, 0], b: [5.2, 4.95] },
          { t: 'label', p: [1.5, 0], text: '12', dy: 18 },
          { t: 'label', p: [4.1, 0.775], text: '15', dx: 16, dy: 8 },
          { t: 'label', p: [0, 1.7], text: '16', dx: -12, dy: 4 },
        ],
      },
      answer: '$25$',
      solution:
        'The rod is the space diagonal, so $D = \\sqrt{12^2 + 15^2 + 16^2} = \\sqrt{144 + 225 + 256} = \\sqrt{625} = 25$ ✓. Second route in two Pythagorean steps, never quoting the three-term formula: the diagonal across the $12 \\times 15$ floor is $\\sqrt{144 + 225} = \\sqrt{369}$. That floor diagonal and the vertical edge $16$ are the legs of a second right triangle whose hypotenuse is the rod, so the rod measures $\\sqrt{369 + 256} = \\sqrt{625} = 25$ ✓.',
    },
    {
      q: 'A flat storage case measures $12 \\times 12 \\times 1$. Find the length of its space diagonal.',
      fig: {
        view: [-1.3, -1.4, 7.9, 3.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.2, 0], [4.2, 0.4], [0, 0.4]], fill: false },
          { t: 'seg', a: [4.2, 0], b: [6.6, 1.7] },
          { t: 'seg', a: [4.2, 0.4], b: [6.6, 2.1] },
          { t: 'seg', a: [0, 0.4], b: [2.4, 2.1] },
          { t: 'seg', a: [6.6, 1.7], b: [6.6, 2.1] },
          { t: 'seg', a: [2.4, 2.1], b: [6.6, 2.1] },
          { t: 'seg', a: [0, 0], b: [2.4, 1.7], dash: true },
          { t: 'seg', a: [2.4, 1.7], b: [6.6, 1.7], dash: true },
          { t: 'seg', a: [2.4, 1.7], b: [2.4, 2.1], dash: true },
          { t: 'seg', a: [0, 0], b: [6.6, 2.1] },
          { t: 'label', p: [2.1, 0], text: '12', dy: 18 },
          { t: 'label', p: [5.4, 0.85], text: '12', dx: 16, dy: 8 },
          { t: 'label', p: [0, 0.2], text: '1', dx: -12, dy: 4 },
        ],
      },
      answer: '$17$',
      solution:
        'Use the space-diagonal formula: $D = \\sqrt{12^2 + 12^2 + 1^2} = \\sqrt{144 + 144 + 1} = \\sqrt{289} = 17$ ✓. Second route in two Pythagorean steps: the diagonal of the square $12 \\times 12$ lid is $\\sqrt{144 + 144} = \\sqrt{288}$, and that diagonal together with the thin edge $1$ forms a right triangle whose hypotenuse is the space diagonal: $\\sqrt{288 + 1} = \\sqrt{289} = 17$ ✓. A case barely thicker than a sheet of card still stretches its corner-to-corner distance past the $\\sqrt{288} \\approx 16.97$ of the flat lid, but only just.',
    },
    {
      q: 'A shallow tray measures $2 \\times 10 \\times 11$. Find the length of its space diagonal.',
      fig: {
        view: [-1.3, -1.4, 7.5, 3.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [4, 0.75], [0, 0.75]], fill: false },
          { t: 'seg', a: [4, 0], b: [6.2, 1.55] },
          { t: 'seg', a: [4, 0.75], b: [6.2, 2.3] },
          { t: 'seg', a: [0, 0.75], b: [2.2, 2.3] },
          { t: 'seg', a: [6.2, 1.55], b: [6.2, 2.3] },
          { t: 'seg', a: [2.2, 2.3], b: [6.2, 2.3] },
          { t: 'seg', a: [0, 0], b: [2.2, 1.55], dash: true },
          { t: 'seg', a: [2.2, 1.55], b: [6.2, 1.55], dash: true },
          { t: 'seg', a: [2.2, 1.55], b: [2.2, 2.3], dash: true },
          { t: 'seg', a: [0, 0], b: [6.2, 2.3] },
          { t: 'label', p: [2, 0], text: '11', dy: 18 },
          { t: 'label', p: [5.1, 0.775], text: '10', dx: 16, dy: 8 },
          { t: 'label', p: [0, 0.375], text: '2', dx: -12, dy: 4 },
        ],
      },
      answer: '$15$',
      solution:
        'Use the space-diagonal formula: $D = \\sqrt{11^2 + 10^2 + 2^2} = \\sqrt{121 + 100 + 4} = \\sqrt{225} = 15$ ✓. Second route in two Pythagorean steps: the diagonal across the $11 \\times 10$ bottom is $\\sqrt{121 + 100} = \\sqrt{221}$; that diagonal and the wall height $2$ are the legs of a right triangle whose hypotenuse is the space diagonal, so it measures $\\sqrt{221 + 4} = \\sqrt{225} = 15$ ✓.',
    },
  ],

  // slot 4 — square pyramid: volume and total surface area.
  //          Lanes: base 24, height 5, slant 13 -> 960, 1200;
  //          base 30, height 20, slant 25 -> 6000, 2400;
  //          base 18, height 12, slant 15 -> 1296, 864.
  [
    {
      q: 'A canvas sunshade is stretched into a square pyramid with base edge $24$ and height $5$. Find its volume and its total surface area.',
      fig: {
        view: [-1, -1.5, 6.4, 3],
        elems: [
          { t: 'seg', a: [0, 0], b: [3.6, 0] },
          { t: 'seg', a: [3.6, 0], b: [4.8, 1] },
          { t: 'seg', a: [4.8, 1], b: [1.2, 1], dash: true },
          { t: 'seg', a: [1.2, 1], b: [0, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [2.4, 1.7] },
          { t: 'seg', a: [3.6, 0], b: [2.4, 1.7] },
          { t: 'seg', a: [4.8, 1], b: [2.4, 1.7] },
          { t: 'seg', a: [1.2, 1], b: [2.4, 1.7], dash: true },
          { t: 'seg', a: [2.4, 0.5], b: [2.4, 1.7], dash: true },
          { t: 'seg', a: [2.4, 0.5], b: [4.2, 0.5], dash: true },
          { t: 'seg', a: [4.2, 0.5], b: [2.4, 1.7] },
          { t: 'label', p: [1.8, 0], text: '24', dy: 18 },
          { t: 'label', p: [2.4, 1.1], text: 'h = 5', dx: -22, dy: 4 },
          { t: 'label', p: [3.3, 0.5], text: '12', dx: 0, dy: 16 },
        ],
      },
      answer: '$V = 960$ cubic units, $SA = 1200$ square units',
      solution:
        'Volume by the one-third rule: $V = \\frac{1}{3} \\times 24^2 \\times 5 = \\frac{1}{3} \\times 576 \\times 5 = 960$ cubic units. For the surface, first find the slant height from the right triangle whose legs are the height $5$ and half the base $12$: $\\ell = \\sqrt{25 + 144} = \\sqrt{169} = 13$. Each of the four faces is a triangle of base $24$ and height $13$, so $SA = 576 + 4 \\times \\frac{1}{2} \\times 24 \\times 13 = 576 + 624 = 1200$ square units ✓. Second route, comparing solids and then unrolling the net: a prism on the same $24 \\times 24$ square with the same height $5$ holds $576 \\times 5 = 2880$, and three copies of this pyramid fill that prism exactly, so one pyramid is $2880 \\div 3 = 960$ cubic units. For the outside, the four triangles laid flat form a fan whose total area is half the way around the base times the slant height: $\\frac{1}{2} \\times (4 \\times 24) \\times 13 = \\frac{1}{2} \\times 96 \\times 13 = 624$, and the square floor adds $576$, giving $1200$ square units ✓.',
    },
    {
      q: 'A glass display case is built as a square pyramid with base edge $30$ and height $20$. Find its volume and its total surface area.',
      fig: {
        view: [-1, -1.5, 6.2, 4.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [3.4, 0] },
          { t: 'seg', a: [3.4, 0], b: [4.6, 1] },
          { t: 'seg', a: [4.6, 1], b: [1.2, 1], dash: true },
          { t: 'seg', a: [1.2, 1], b: [0, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [2.3, 3.1] },
          { t: 'seg', a: [3.4, 0], b: [2.3, 3.1] },
          { t: 'seg', a: [4.6, 1], b: [2.3, 3.1] },
          { t: 'seg', a: [1.2, 1], b: [2.3, 3.1], dash: true },
          { t: 'seg', a: [2.3, 0.5], b: [2.3, 3.1], dash: true },
          { t: 'seg', a: [2.3, 0.5], b: [4, 0.5], dash: true },
          { t: 'seg', a: [4, 0.5], b: [2.3, 3.1] },
          { t: 'label', p: [1.7, 0], text: '30', dy: 18 },
          { t: 'label', p: [2.3, 1.8], text: 'h = 20', dx: -26, dy: 4 },
          { t: 'label', p: [3.15, 0.5], text: '15', dx: 0, dy: 16 },
        ],
      },
      answer: '$V = 6000$ cubic units, $SA = 2400$ square units',
      solution:
        'Volume by the one-third rule: $V = \\frac{1}{3} \\times 30^2 \\times 20 = \\frac{1}{3} \\times 900 \\times 20 = 6000$ cubic units. The slant height comes from the right triangle with legs $20$ and half the base $15$: $\\ell = \\sqrt{400 + 225} = \\sqrt{625} = 25$. The four glass faces are triangles of base $30$ and height $25$, so $SA = 900 + 4 \\times \\frac{1}{2} \\times 30 \\times 25 = 900 + 1500 = 2400$ square units ✓. Second route, comparing solids and then unrolling the net: a prism on the same $30 \\times 30$ base with the same height holds $900 \\times 20 = 18000$, and three of these pyramids fill it, so one is $18000 \\div 3 = 6000$ cubic units. Laid flat, the four triangles cover half the base perimeter times the slant height: $\\frac{1}{2} \\times 120 \\times 25 = 1500$, and with the $900$ of the floor the total is $2400$ square units ✓.',
    },
    {
      q: 'A sandcastle tower is packed into a mold shaped like a square pyramid with base edge $18$ and height $12$. Find its volume and its total surface area.',
      fig: {
        view: [-1, -1.5, 6.6, 4.3],
        elems: [
          { t: 'seg', a: [0, 0], b: [3.6, 0] },
          { t: 'seg', a: [3.6, 0], b: [5, 1.1] },
          { t: 'seg', a: [5, 1.1], b: [1.4, 1.1], dash: true },
          { t: 'seg', a: [1.4, 1.1], b: [0, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [2.5, 2.95] },
          { t: 'seg', a: [3.6, 0], b: [2.5, 2.95] },
          { t: 'seg', a: [5, 1.1], b: [2.5, 2.95] },
          { t: 'seg', a: [1.4, 1.1], b: [2.5, 2.95], dash: true },
          { t: 'seg', a: [2.5, 0.55], b: [2.5, 2.95], dash: true },
          { t: 'seg', a: [2.5, 0.55], b: [4.3, 0.55], dash: true },
          { t: 'seg', a: [4.3, 0.55], b: [2.5, 2.95] },
          { t: 'label', p: [1.8, 0], text: '18', dy: 18 },
          { t: 'label', p: [2.5, 1.75], text: 'h = 12', dx: -26, dy: 4 },
          { t: 'label', p: [3.4, 0.55], text: '9', dx: 0, dy: 16 },
        ],
      },
      answer: '$V = 1296$ cubic units, $SA = 864$ square units',
      solution:
        'Volume by the one-third rule: $V = \\frac{1}{3} \\times 18^2 \\times 12 = \\frac{1}{3} \\times 324 \\times 12 = 1296$ cubic units. The slant height sits on the right triangle with legs $12$ and half the base $9$: $\\ell = \\sqrt{144 + 81} = \\sqrt{225} = 15$. Each slanted wall is a triangle of base $18$ and height $15$, so $SA = 324 + 4 \\times \\frac{1}{2} \\times 18 \\times 15 = 324 + 540 = 864$ square units ✓. Second route, comparing solids and then unrolling the net: a prism on the same $18 \\times 18$ base and the same height holds $324 \\times 12 = 3888$ of sand, and three of these pyramid molds empty into it exactly, so one mold is $3888 \\div 3 = 1296$ cubic units. Flattened, the four walls together cover half the base perimeter times the slant height: $\\frac{1}{2} \\times 72 \\times 15 = 540$, and adding the $324$ of the square floor gives $864$ square units ✓.',
    },
  ],

  // slot 5 — Euler’s formula run for the edge count: E = V + F − 2.
  //          Lanes: F 18, V 16 -> 32; F 15, V 26 -> 39; F 20, V 30 -> 48.
  [
    {
      q: 'A mineral crystal is a polyhedron with $18$ faces and $16$ vertices. How many edges does it have?',
      answer: '$32$',
      solution:
        'Euler’s formula says $V - E + F = 2$ for every polyhedron, so rearranging gives $E = V + F - 2 = 16 + 18 - 2 = 32$ ✓. Second route, rebuilding the count instead of quoting the formula: imagine removing one face and stretching the rest of the surface flat, so the crystal becomes a map with the same $16$ corners and the same edges, and with $18$ regions once the outside counts as the missing face. Start by drawing just enough edges to link all $16$ corners without ever closing a loop; that skeleton takes $15$ edges and leaves the map in one single region. Every edge added after that closes exactly one new loop and so splits one region in two, so to reach $18$ regions we need $17$ more edges: $E = 15 + 17 = 32$ ✓. A solid with these counts really is buildable — an octagonal antiprism has two octagons and sixteen triangles ($18$ faces), sixteen corners, and $8 + 8 + 16 = 32$ edges.',
    },
    {
      q: 'A wooden puzzle block is carved as a polyhedron with $15$ faces and $26$ vertices. How many edges does it have?',
      answer: '$39$',
      solution:
        'Euler’s formula $V - E + F = 2$ rearranges to $E = V + F - 2 = 26 + 15 - 2 = 39$ ✓. Second route, rebuilding the count instead of quoting the formula: remove one face and press the surface flat into a map with $26$ corners and $15$ regions, the outside region standing in for the removed face. A skeleton that reaches all $26$ corners without closing a loop uses $25$ edges and leaves one region; each further edge closes one loop and adds one region, so $14$ more edges are needed for $15$ regions: $E = 25 + 14 = 39$ ✓. Such a block exists: a prism whose two bases are $13$-gons has $13$ rectangles plus $2$ bases ($15$ faces), $13 + 13 = 26$ corners, and $13 + 13 + 13 = 39$ edges.',
    },
    {
      q: 'A gemstone is cut as a polyhedron with $20$ faces and $30$ vertices. How many edges does it have?',
      answer: '$48$',
      solution:
        'Euler’s formula $V - E + F = 2$ gives $E = V + F - 2 = 30 + 20 - 2 = 48$ ✓. Second route, rebuilding the count instead of quoting the formula: take one face away and flatten the surface into a map carrying all $30$ corners, where the outer region replaces the missing face, so the map shows $20$ regions. Linking all $30$ corners without closing a loop costs $29$ edges and leaves the map in one region; after that each edge closes exactly one loop and cuts one region into two, so $19$ extra edges give the $20$ regions: $E = 29 + 19 = 48$ ✓. As a sanity check on the shape, $2E = 96$ counts every edge from both ends, and spreading $96$ ends over $30$ corners averages $3.2$ edges per corner — comfortably above the three that every corner of a solid needs.',
    },
  ],

  // slot 6 — all faces triangles: E = 3F/2, then V = 2 + E − F.
  //          Lanes: F 24 -> 36, 14; F 44 -> 66, 24; F 48 -> 72, 26.
  [
    {
      q: 'A polyhedron has $24$ faces, every one of them a triangle. Count its edges using the shared-edge trick, then use Euler’s formula to count its vertices.',
      answer: '$E = 36$ and $V = 14$',
      solution:
        'Sides listed face by face: $24 \\times 3 = 72$. Every edge of the solid was listed twice, once from each of the two faces that share it, so $E = \\frac{72}{2} = 36$. Then Euler: $V = 2 + E - F = 2 + 36 - 24 = 14$ vertices ✓. Second route, building a solid with $24$ triangular faces and counting its parts directly: glue a square pyramid onto each face of a cube. The six square faces disappear inside, leaving $6 \\times 4 = 24$ triangles; the corners are the cube’s $8$ plus one apex per pyramid, $8 + 6 = 14$; and the edges are the cube’s $12$ plus the four slanted edges of each pyramid, $12 + 24 = 36$ ✓. Both counts land in the same place, and Euler agrees: $14 - 36 + 24 = 2$ ✓.',
    },
    {
      q: 'A polyhedron has $44$ faces, and every face is a triangle. Count its edges using the shared-edge trick, then use Euler’s formula to count its vertices.',
      answer: '$E = 66$ and $V = 24$',
      solution:
        'Sides listed face by face: $44 \\times 3 = 132$. Each edge belongs to two faces and so was counted twice, giving $E = \\frac{132}{2} = 66$. Euler then supplies the corners: $V = 2 + E - F = 2 + 66 - 44 = 24$ vertices ✓. Second route, building a solid with $44$ triangular faces and counting its parts directly: take a flat $22$-sided polygon and raise a point above its center and another below, joining both to every corner of the polygon. That double pyramid has $22$ triangles on top and $22$ underneath, $44$ in all; its corners are the $22$ around the rim plus the two tips, $24$; and its edges are the $22$ around the rim plus $22$ up and $22$ down, $66$ ✓. Euler confirms: $24 - 66 + 44 = 2$ ✓.',
    },
    {
      q: 'A polyhedron is built entirely from triangles, $48$ of them. Count its edges using the shared-edge trick, then use Euler’s formula to count its vertices.',
      answer: '$E = 72$ and $V = 26$',
      solution:
        'Sides listed face by face: $48 \\times 3 = 144$. Two faces share each edge, so every edge appeared twice and $E = \\frac{144}{2} = 72$. Euler gives the corners: $V = 2 + E - F = 2 + 72 - 48 = 26$ vertices ✓. Second route, building a solid with $48$ triangular faces and counting its parts directly: start from a $24$-sided polygon and place one point above its center and one below, joined to all $24$ corners. The result carries $24$ triangles above and $24$ below, $48$ faces; its corners are the $24$ on the rim plus the two tips, $26$; and its edges are $24$ around the rim, $24$ climbing to the top tip, and $24$ dropping to the bottom one, $72$ ✓. Euler agrees: $26 - 72 + 48 = 2$ ✓.',
    },
  ],

  // slot 7 — painted n-cube, exactly two painted faces: 12(n − 2).
  //          Lanes: n 7 -> 60; n 9 -> 84; n 11 -> 108.
  [
    {
      q: 'A $7 \\times 7 \\times 7$ cube is glued together from $343$ unit cubes, and every bit of its outside is dipped in paint. How many of the unit cubes end up with paint on exactly two faces?',
      answer: '$60$',
      solution:
        'Paint reaches a unit cube through the outer surfaces it sits against, so exactly two painted faces means the cube lies along an edge of the big cube without sitting at a corner. Each of the $12$ edges is a row of $7$ unit cubes, and dropping the corner at each end leaves $7 - 2 = 5$, so the count is $12 \\times 5 = 60$ ✓. Second route, by coordinates: number each unit cube $(a, b, c)$ with $1 \\le a, b, c \\le 7$; a coordinate equal to $1$ or $7$ means one painted face, so exactly two painted faces means exactly two of the coordinates are extreme and the third is strictly between. Choose which coordinate is the in-between one, $3$ ways; that coordinate then has $5$ values, $2$ through $6$; and each of the other two is $1$ or $7$, $2$ ways each. That gives $3 \\times 5 \\times 2 \\times 2 = 60$ ✓. The whole census closes as it should: $8$ corners, $60$ edge cubes, $6 \\times 5^2 = 150$ with a single painted face, and $5^3 = 125$ buried unpainted, and $8 + 60 + 150 + 125 = 343$.',
    },
    {
      q: 'A $9 \\times 9 \\times 9$ block is stacked from $729$ unit cubes and then sprayed on all six sides. How many of the unit cubes carry paint on exactly two faces?',
      answer: '$84$',
      solution:
        'A unit cube gets exactly two painted faces when it lies on an edge of the block but is not one of the corners. The block has $12$ edges, each a row of $9$ unit cubes, and removing the two corners leaves $9 - 2 = 7$ per edge, so the count is $12 \\times 7 = 84$ ✓. Second route, by coordinates: label each unit cube $(a, b, c)$ with $1 \\le a, b, c \\le 9$; each coordinate sitting at $1$ or $9$ contributes one painted face, so we want exactly two extreme coordinates and one strictly between. Pick which coordinate is the in-between one, $3$ ways; it can take the $7$ values $2$ through $8$; and the other two are each $1$ or $9$: $3 \\times 7 \\times 2 \\times 2 = 84$ ✓. The census totals correctly: $8$ corners, $84$ edge cubes, $6 \\times 7^2 = 294$ with one painted face, $7^3 = 343$ hidden, and $8 + 84 + 294 + 343 = 729$.',
    },
    {
      q: 'An $11 \\times 11 \\times 11$ tower is assembled from $1331$ unit cubes, and its whole outer surface is varnished. How many of the unit cubes have varnish on exactly two faces?',
      answer: '$108$',
      solution:
        'Two varnished faces means the unit cube runs along an edge of the tower without being a corner. There are $12$ edges, each holding $11$ unit cubes, and taking off the two corners leaves $11 - 2 = 9$ on each, so the count is $12 \\times 9 = 108$ ✓. Second route, by coordinates: give each unit cube an address $(a, b, c)$ with $1 \\le a, b, c \\le 11$; a coordinate at $1$ or $11$ means one varnished face, so exactly two varnished faces asks for exactly two extreme coordinates and one strictly between. Choose the in-between coordinate, $3$ ways; give it one of the $9$ values from $2$ to $10$; and let each of the other two be $1$ or $11$: $3 \\times 9 \\times 2 \\times 2 = 108$ ✓. The full census agrees: $8 + 108 + 6 \\times 9^2 + 9^3 = 8 + 108 + 486 + 729 = 1331$.',
    },
  ],

  // slot 8 — space diagonal of a cube back to its volume.
  //          Lanes: d 12 -> 192√3; d 15 -> 375√3; d 6 -> 24√3.
  [
    {
      q: 'A cube-shaped gift box has a space diagonal of length $12$. Find the box’s volume.',
      answer: '$192\\sqrt{3}$ cubic units',
      solution:
        'A cube of edge $s$ has space diagonal $s\\sqrt{3}$, so $s\\sqrt{3} = 12$ gives $s = \\frac{12}{\\sqrt{3}} = \\frac{12\\sqrt{3}}{3} = 4\\sqrt{3}$. Then $V = s^3 = (4\\sqrt{3})^3 = 64 \\times 3\\sqrt{3} = 192\\sqrt{3}$ cubic units ✓. Second route, keeping the squared edge instead of the edge: build the diagonal in two Pythagorean steps. The diagonal across the bottom has square $s^2 + s^2 = 2s^2$, and that bottom diagonal with the vertical edge gives $12^2 = 2s^2 + s^2 = 3s^2$, so $s^2 = 48$ — a face of the box has area $48$. Now write the volume as $V = s^3 = s \\times s^2 = 48s$, and $s = \\sqrt{48} = 4\\sqrt{3}$, so $V = 48 \\times 4\\sqrt{3} = 192\\sqrt{3}$ cubic units ✓, about $332.6$.',
    },
    {
      q: 'A cube of ice carved for a party has a space diagonal of length $15$. Find the cube’s volume.',
      answer: '$375\\sqrt{3}$ cubic units',
      solution:
        'The space diagonal of a cube of edge $s$ is $s\\sqrt{3}$, so $s\\sqrt{3} = 15$ gives $s = \\frac{15}{\\sqrt{3}} = \\frac{15\\sqrt{3}}{3} = 5\\sqrt{3}$. Then $V = s^3 = (5\\sqrt{3})^3 = 125 \\times 3\\sqrt{3} = 375\\sqrt{3}$ cubic units ✓. Second route, keeping the squared edge instead of the edge: the diagonal of one face squares to $s^2 + s^2 = 2s^2$, and together with the vertical edge it gives $15^2 = 3s^2$, so $s^2 = 75$ and each face of the ice cube covers $75$. Write the volume as $V = s \\times s^2 = 75s$ with $s = \\sqrt{75} = 5\\sqrt{3}$, so $V = 75 \\times 5\\sqrt{3} = 375\\sqrt{3}$ cubic units ✓, about $649.5$.',
    },
    {
      q: 'A wooden cube from a building set has a space diagonal of length $6$. Find the cube’s volume.',
      answer: '$24\\sqrt{3}$ cubic units',
      solution:
        'For a cube of edge $s$ the space diagonal is $s\\sqrt{3}$, so $s\\sqrt{3} = 6$ gives $s = \\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$. Then $V = s^3 = (2\\sqrt{3})^3 = 8 \\times 3\\sqrt{3} = 24\\sqrt{3}$ cubic units ✓. Second route, keeping the squared edge instead of the edge: the diagonal across a face squares to $2s^2$, and adding the vertical edge gives $6^2 = 3s^2$, so $s^2 = 12$ and one face of the block has area $12$. The volume is then $V = s \\times s^2 = 12s$ with $s = \\sqrt{12} = 2\\sqrt{3}$, so $V = 12 \\times 2\\sqrt{3} = 24\\sqrt{3}$ cubic units ✓, about $41.6$.',
    },
  ],

  // slot 9 — space diagonal and two dimensions given, find the third.
  //          Lanes: 11 with 6, 6 -> 7; 30 with 20, 20 -> 10;
  //          22 with 12, 12 -> 14.
  [
    {
      q: 'A jewelry box has a space diagonal of length $11$, and two of its dimensions are $6$ and $6$. Find the third dimension.',
      fig: {
        view: [-1.3, -1.4, 6.3, 4.7],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.6, 0], [3.6, 2.2], [0, 2.2]], fill: false },
          { t: 'seg', a: [3.6, 0], b: [5, 1] },
          { t: 'seg', a: [3.6, 2.2], b: [5, 3.2] },
          { t: 'seg', a: [0, 2.2], b: [1.4, 3.2] },
          { t: 'seg', a: [5, 1], b: [5, 3.2] },
          { t: 'seg', a: [1.4, 3.2], b: [5, 3.2] },
          { t: 'seg', a: [0, 0], b: [1.4, 1], dash: true },
          { t: 'seg', a: [1.4, 1], b: [5, 1], dash: true },
          { t: 'seg', a: [1.4, 1], b: [1.4, 3.2], dash: true },
          { t: 'seg', a: [0, 0], b: [5, 3.2] },
          { t: 'label', p: [1.8, 0], text: '?', dy: 18 },
          { t: 'label', p: [4.3, 0.5], text: '6', dx: 16, dy: 8 },
          { t: 'label', p: [0, 1.1], text: '6', dx: -12, dy: 4 },
          { t: 'label', p: [2.5, 1.6], text: '11', dx: 0, dy: -6 },
        ],
      },
      answer: '$7$',
      solution:
        'Run the space-diagonal formula backwards: $11^2 = 6^2 + 6^2 + x^2$, so $121 = 36 + 36 + x^2$, giving $x^2 = 49$ and $x = 7$ ✓. Second route in two Pythagorean steps, without the three-term formula: the $6$ by $6$ face has diagonal $d$ with $d^2 = 36 + 36 = 72$. That face diagonal and the missing edge are the legs of a right triangle whose hypotenuse is the space diagonal, so $72 + x^2 = 121$, which gives $x^2 = 49$ and $x = 7$ ✓.',
    },
    {
      q: 'A storage bin has a space diagonal of length $30$, and two of its dimensions are $20$ and $20$. Find the third dimension.',
      fig: {
        view: [-1.3, -1.4, 6.2, 5.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [3, 3], [0, 3]], fill: false },
          { t: 'seg', a: [3, 0], b: [4.9, 1.35] },
          { t: 'seg', a: [3, 3], b: [4.9, 4.35] },
          { t: 'seg', a: [0, 3], b: [1.9, 4.35] },
          { t: 'seg', a: [4.9, 1.35], b: [4.9, 4.35] },
          { t: 'seg', a: [1.9, 4.35], b: [4.9, 4.35] },
          { t: 'seg', a: [0, 0], b: [1.9, 1.35], dash: true },
          { t: 'seg', a: [1.9, 1.35], b: [4.9, 1.35], dash: true },
          { t: 'seg', a: [1.9, 1.35], b: [1.9, 4.35], dash: true },
          { t: 'seg', a: [0, 0], b: [4.9, 4.35] },
          { t: 'label', p: [1.5, 0], text: '?', dy: 18 },
          { t: 'label', p: [3.95, 0.675], text: '20', dx: 16, dy: 8 },
          { t: 'label', p: [0, 1.5], text: '20', dx: -12, dy: 4 },
          { t: 'label', p: [2.45, 2.175], text: '30', dx: 0, dy: -6 },
        ],
      },
      answer: '$10$',
      solution:
        'Run the space-diagonal formula backwards: $30^2 = 20^2 + 20^2 + x^2$, so $900 = 400 + 400 + x^2$, giving $x^2 = 100$ and $x = 10$ ✓. Second route in two Pythagorean steps, without the three-term formula: the square $20$ by $20$ face has diagonal $d$ with $d^2 = 400 + 400 = 800$. That diagonal and the unknown edge meet at a right angle and span the space diagonal, so $800 + x^2 = 900$, which gives $x^2 = 100$ and $x = 10$ ✓.',
    },
    {
      q: 'A toolbox has a space diagonal of length $22$, and two of its dimensions are $12$ and $12$. Find the third dimension.',
      fig: {
        view: [-1.3, -1.4, 6.5, 5.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.5, 0], [3.5, 2.6], [0, 2.6]], fill: false },
          { t: 'seg', a: [3.5, 0], b: [5.2, 1.2] },
          { t: 'seg', a: [3.5, 2.6], b: [5.2, 3.8] },
          { t: 'seg', a: [0, 2.6], b: [1.7, 3.8] },
          { t: 'seg', a: [5.2, 1.2], b: [5.2, 3.8] },
          { t: 'seg', a: [1.7, 3.8], b: [5.2, 3.8] },
          { t: 'seg', a: [0, 0], b: [1.7, 1.2], dash: true },
          { t: 'seg', a: [1.7, 1.2], b: [5.2, 1.2], dash: true },
          { t: 'seg', a: [1.7, 1.2], b: [1.7, 3.8], dash: true },
          { t: 'seg', a: [0, 0], b: [5.2, 3.8] },
          { t: 'label', p: [1.75, 0], text: '?', dy: 18 },
          { t: 'label', p: [4.35, 0.6], text: '12', dx: 16, dy: 8 },
          { t: 'label', p: [0, 1.3], text: '12', dx: -12, dy: 4 },
          { t: 'label', p: [2.6, 1.9], text: '22', dx: 0, dy: -6 },
        ],
      },
      answer: '$14$',
      solution:
        'Run the space-diagonal formula backwards: $22^2 = 12^2 + 12^2 + x^2$, so $484 = 144 + 144 + x^2$, giving $x^2 = 196$ and $x = 14$ ✓. Second route in two Pythagorean steps, without the three-term formula: the $12$ by $12$ face has diagonal $d$ with $d^2 = 144 + 144 = 288$. That face diagonal and the missing edge form the legs of a right triangle with the space diagonal as hypotenuse, so $288 + x^2 = 484$, which gives $x^2 = 196$ and $x = 14$ ✓.',
    },
  ],

  // slot 10 — all faces regular p-gons with q at each vertex; Euler forces
  //           F, E, V. Lanes: pentagons 3 per vertex -> 12, 30, 20;
  //           triangles 5 per vertex -> 20, 30, 12; pentagons again -> 12, 30, 20.
  [
    {
      q: 'A craft kit comes with a pile of identical regular pentagon patches to be stitched into a closed ball, with exactly $3$ patches meeting at every corner. Use Euler’s formula to find how many faces, edges, and vertices the finished ball must have — and name the solid.',
      answer: '$F = 12$, $E = 30$, $V = 20$: the dodecahedron',
      solution:
        'Let $F$ be the number of patches. Pentagon sides listed patch by patch: $5F$, and each seam joins two patches, so $E = \\frac{5F}{2}$. Pentagon corners listed the same way: $5F$, and each corner of the ball gathers $3$ of them, so $V = \\frac{5F}{3}$. Euler demands $V - E + F = 2$: $\\frac{5F}{3} - \\frac{5F}{2} + F = 2$. Multiplying by $6$ gives $10F - 15F + 6F = 12$, so $F = 12$, and then $E = 30$ and $V = 20$ — the dodecahedron ✓. Second route, solving for the corners first instead: at each corner $3$ seams meet, and each seam has $2$ ends, so $E = \\frac{3V}{2}$; at each corner $3$ patches meet, and each patch has $5$ corners, so $F = \\frac{3V}{5}$. Euler now reads $V - \\frac{3V}{2} + \\frac{3V}{5} = 2$; multiplying by $10$ gives $10V - 15V + 6V = 20$, so $V = 20$, and from there $E = 30$ and $F = 12$ ✓. The counts are forced — no other ball of regular pentagons three-to-a-corner is even arithmetically possible.',
    },
    {
      q: 'A paper lantern is folded from identical equilateral triangles, with exactly $5$ triangles meeting at every corner. Use Euler’s formula to find how many faces, edges, and vertices the lantern must have — and name the solid.',
      answer: '$F = 20$, $E = 30$, $V = 12$: the icosahedron',
      solution:
        'Let $F$ be the number of triangles. Triangle sides listed face by face: $3F$, and each fold joins two triangles, so $E = \\frac{3F}{2}$. Triangle corners listed the same way: $3F$, and each corner of the lantern gathers $5$ of them, so $V = \\frac{3F}{5}$. Euler demands $V - E + F = 2$: $\\frac{3F}{5} - \\frac{3F}{2} + F = 2$. Multiplying by $10$ gives $6F - 15F + 10F = 20$, so $F = 20$, and then $E = 30$ and $V = 12$ — the icosahedron ✓. Second route, solving for the corners first instead: $5$ folds meet at each corner and every fold has $2$ ends, so $E = \\frac{5V}{2}$; $5$ triangles meet at each corner and every triangle has $3$ corners, so $F = \\frac{5V}{3}$. Euler now reads $V - \\frac{5V}{2} + \\frac{5V}{3} = 2$; multiplying by $6$ gives $6V - 15V + 10V = 12$, so $V = 12$, and from there $E = 30$ and $F = 20$ ✓. Nothing was chosen along the way: the shape of the lantern was decided the moment the triangles were told to meet five at a corner.',
    },
    {
      q: 'A game shop wants a die whose faces are all regular pentagons, with exactly $3$ faces meeting at each corner. Use Euler’s formula to find how many faces, edges, and vertices such a die must have — and name the solid.',
      answer: '$F = 12$, $E = 30$, $V = 20$: the dodecahedron',
      solution:
        'Let $F$ be the number of faces. Counting pentagon sides face by face gives $5F$, and each edge of the die is shared by two faces, so $E = \\frac{5F}{2}$. Counting pentagon corners gives $5F$ as well, and each corner of the die is where $3$ of them meet, so $V = \\frac{5F}{3}$. Euler requires $V - E + F = 2$: $\\frac{5F}{3} - \\frac{5F}{2} + F = 2$, and multiplying by $6$ turns that into $10F - 15F + 6F = 12$, so $F = 12$; then $E = 30$ and $V = 20$ — the dodecahedron ✓. Second route, chasing the corners first instead: $3$ edges leave each corner and each edge has $2$ ends, so $E = \\frac{3V}{2}$; $3$ pentagons meet at each corner and each pentagon has $5$ corners, so $F = \\frac{3V}{5}$. Euler becomes $V - \\frac{3V}{2} + \\frac{3V}{5} = 2$, and multiplying by $10$ gives $10V - 15V + 6V = 20$, so $V = 20$, hence $E = 30$ and $F = 12$ ✓. The shop has exactly one die to choose from: a twelve-sided one.',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 14,
  worksheet,
}
