// Introduction to Geometry chapter 14 — variations for section 14.3 (Pyramids).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is worked twice along routes that share no arithmetic:
//    once through the pyramid formula the problem is about, and once through an
//    independent picture — the matching prism and its factor of three, a linear
//    scaling from a height of 3, coordinates on the base, or the difference of
//    squares hiding inside the slant-height triangle. The two routes are built
//    so their intermediate numbers differ; a check that repeats the same
//    multiplication is not a check.
//  - The key relation for a square pyramid with base edge b, height h and slant
//    height l is l^2 = h^2 + (b/2)^2. Half the base edge, never the whole edge.
//  - Figures are oblique wireframes: the visible base and lateral edges are
//    solid, the hidden back edges and the interior height are dashed. The
//    projection does not preserve length, so no dimension is left to be read off
//    the drawing — every one of them is written into a plain-text label.
//  - Each distractor is one named mistake, named in CAPS at the end.

const s143 = [
  // s1 — square pyramid volume from base edge and height.
  [
    {
      q: 'A marble paperweight is carved as a square pyramid. Its base edge is $9$ centimeters and its height is $4$ centimeters. What is its volume?',
      fig: {
        view: [-1, -1.5, 6.2, 3.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [3.6, 0] },
          { t: 'seg', a: [3.6, 0], b: [4.8, 1] },
          { t: 'seg', a: [4.8, 1], b: [1.2, 1], dash: true },
          { t: 'seg', a: [1.2, 1], b: [0, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [2.4, 2.4] },
          { t: 'seg', a: [3.6, 0], b: [2.4, 2.4] },
          { t: 'seg', a: [4.8, 1], b: [2.4, 2.4] },
          { t: 'seg', a: [1.2, 1], b: [2.4, 2.4], dash: true },
          { t: 'seg', a: [2.4, 0.5], b: [2.4, 2.4], dash: true },
          { t: 'label', p: [1.8, 0], text: '9', dy: 18 },
          { t: 'label', p: [2.4, 1.45], text: 'h = 4', dx: 24, dy: 4 },
        ],
      },
      choices: ['$108$', '$324$', '$36$', '$162$'],
      answer: 0,
      solution:
        'Route one, the pyramid volume formula: the base is a $9 \\times 9$ square, so $B = 81$, and $V = \\frac{1}{3}Bh$. Taking the third first, $\\frac{81}{3} = 27$, and $27 \\times 4 = 108$ cubic centimeters ✓. Check a second, independent way, through the matching box: the square prism standing on the same $9 \\times 9$ base with the same height $4$ holds $81 \\times 4 = 324$ cubic centimeters, and three pyramid-loads pour into that prism exactly, so one load is $324 \\div 3 = 108$ ✓. (The choice $324$ is REPORTING THE MATCHING PRISM and never taking the third ✗; the choice $162$ is HALVING THE PRISM instead of thirding it ✗; the choice $36$ is MULTIPLYING THE BASE EDGE BY THE HEIGHT and never squaring the edge to get the base area ✗.)',
    },
    {
      q: 'A canvas tent is pitched as a square pyramid. The square of ground it covers has edge $15$ feet, and the peak stands $4$ feet above that ground. How much air does the tent enclose?',
      fig: {
        view: [-1, -1.5, 6.8, 3.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [4, 0] },
          { t: 'seg', a: [4, 0], b: [5.1, 0.9] },
          { t: 'seg', a: [5.1, 0.9], b: [1.1, 0.9], dash: true },
          { t: 'seg', a: [1.1, 0.9], b: [0, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [2.55, 2.2] },
          { t: 'seg', a: [4, 0], b: [2.55, 2.2] },
          { t: 'seg', a: [5.1, 0.9], b: [2.55, 2.2] },
          { t: 'seg', a: [1.1, 0.9], b: [2.55, 2.2], dash: true },
          { t: 'seg', a: [2.55, 0.45], b: [2.55, 2.2], dash: true },
          { t: 'label', p: [2, 0], text: '15', dy: 18 },
          { t: 'label', p: [2.55, 1.3], text: 'h = 4', dx: 24, dy: 4 },
        ],
      },
      choices: ['$900$', '$300$', '$450$', '$60$'],
      answer: 1,
      solution:
        'Route one, the pyramid volume formula: the ground square gives $B = 15^2 = 225$, so $V = \\frac{1}{3} \\times 225 \\times 4 = 75 \\times 4 = 300$ cubic feet ✓. Check a second, independent way, through the matching box: a square prism on the same $15 \\times 15$ ground and the same height $4$ would hold $225 \\times 4 = 900$ cubic feet, and the tent tapers to a single peak, so it holds one third of that, $900 \\div 3 = 300$ ✓. (The choice $900$ is REPORTING THE MATCHING PRISM and skipping the third ✗; the choice $450$ is HALVING THE PRISM instead of thirding it ✗; the choice $60$ is MULTIPLYING THE BASE EDGE BY THE HEIGHT, $15 \\times 4$, without squaring the edge ✗.)',
    },
    {
      q: 'Sand pours out of a chute and settles into a square pyramid on the warehouse floor. The pile’s square footprint has edge $21$ meters and its tip is $5$ meters high. What is the volume of the pile?',
      fig: {
        view: [-1, -1.5, 6.2, 3.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [3.2, 0] },
          { t: 'seg', a: [3.2, 0], b: [4.5, 1.1] },
          { t: 'seg', a: [4.5, 1.1], b: [1.3, 1.1], dash: true },
          { t: 'seg', a: [1.3, 1.1], b: [0, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [2.25, 2.3] },
          { t: 'seg', a: [3.2, 0], b: [2.25, 2.3] },
          { t: 'seg', a: [4.5, 1.1], b: [2.25, 2.3] },
          { t: 'seg', a: [1.3, 1.1], b: [2.25, 2.3], dash: true },
          { t: 'seg', a: [2.25, 0.55], b: [2.25, 2.3], dash: true },
          { t: 'label', p: [1.6, 0], text: '21', dy: 18 },
          { t: 'label', p: [2.25, 1.4], text: 'h = 5', dx: 24, dy: 4 },
        ],
      },
      choices: ['$2205$', '$105$', '$245$', '$735$'],
      answer: 3,
      solution:
        'Route one, the pyramid volume formula: the footprint gives $B = 21^2 = 441$, so $V = \\frac{1}{3} \\times 441 \\times 5 = 147 \\times 5 = 735$ cubic meters ✓. Check a second, independent way, through the matching box: a prism on the same footprint and the same height holds $441 \\times 5 = 2205$ cubic meters, and the pile shrinks to a point, so it carries one third, $2205 \\div 3 = 735$ ✓. (The choice $2205$ is REPORTING THE MATCHING PRISM without the third ✗; the choice $105$ is MULTIPLYING THE BASE EDGE BY THE HEIGHT, $21 \\times 5$, and never squaring the edge ✗; the choice $245$ is DIVIDING BY THREE A SECOND TIME after the formula has already taken its third ✗.)',
    },
  ],
  // s2 — pyramid volume on a rectangular base.
  [
    {
      q: 'A garden planter is shaped like a pyramid with a $4$ foot by $9$ foot rectangular base and a height of $7$ feet. What is its volume?',
      choices: ['$252$', '$126$', '$84$', '$36$'],
      answer: 2,
      solution:
        'Route one, the pyramid volume formula: the base is a rectangle, so $B = 4 \\times 9 = 36$ square feet, and $V = \\frac{1}{3}Bh = \\frac{1}{3} \\times 36 \\times 7 = 12 \\times 7 = 84$ cubic feet ✓. Check a second, independent way, through the matching box: a rectangular prism on the same $4$ by $9$ base with the same height holds $36 \\times 7 = 252$ cubic feet, and the pyramid on that base holds one third as much, $252 \\div 3 = 84$ ✓. (The choice $252$ is REPORTING THE MATCHING PRISM and dropping the third ✗; the choice $126$ is HALVING THE PRISM instead of thirding it ✗; the choice $36$ is STOPPING AT THE BASE AREA and never bringing in the height ✗.)',
    },
    {
      q: 'A stage prop is built as a pyramid whose base is a $5$ meter by $12$ meter rectangle and whose height is $6$ meters. What is its volume?',
      choices: ['$120$', '$360$', '$180$', '$60$'],
      answer: 0,
      solution:
        'Route one, the pyramid volume formula: $B = 5 \\times 12 = 60$ square meters, so $V = \\frac{1}{3} \\times 60 \\times 6 = 20 \\times 6 = 120$ cubic meters ✓. Check a second, independent way, through the matching box: the prism on the same rectangle and the same height holds $60 \\times 6 = 360$ cubic meters, and three of these pyramids fill it, so one is $360 \\div 3 = 120$ ✓. (The choice $360$ is REPORTING THE MATCHING PRISM without the third ✗; the choice $180$ is HALVING THE PRISM instead of thirding it ✗; the choice $60$ is STOPPING AT THE BASE AREA and leaving the height out ✗.)',
    },
    {
      q: 'A mailroom bin narrows to a point at the bottom: it is a pyramid with an $8$ inch by $15$ inch rectangular base and a height of $4$ inches. What is its volume?',
      choices: ['$480$', '$240$', '$120$', '$160$'],
      answer: 3,
      solution:
        'Route one, the pyramid volume formula: $B = 8 \\times 15 = 120$ square inches, so $V = \\frac{1}{3} \\times 120 \\times 4 = 40 \\times 4 = 160$ cubic inches ✓. Check a second, independent way, through the matching box: a prism on the same $8$ by $15$ rectangle with the same height holds $120 \\times 4 = 480$ cubic inches, and the bin tapers to a point, so it holds $480 \\div 3 = 160$ ✓. (The choice $480$ is REPORTING THE MATCHING PRISM and skipping the third ✗; the choice $240$ is HALVING THE PRISM instead of thirding it ✗; the choice $120$ is STOPPING AT THE BASE AREA and forgetting the height ✗.)',
    },
  ],
  // s3 — a prism's volume handed over to the pyramid on the same base and height.
  [
    {
      q: 'A glass tank in the shape of a prism holds $126$ cubic inches of water. A second tank is a pyramid standing on a copy of the first tank’s base, and the two tanks are exactly as tall as each other. How much water does the pyramid hold?',
      choices: ['$126$', '$42$', '$378$', '$63$'],
      answer: 1,
      solution:
        'Route one, the one-third rule: a pyramid and a prism that share a base and a height are related by $V_{\\text{pyramid}} = \\frac{1}{3}V_{\\text{prism}}$, so the pyramid holds $\\frac{126}{3} = 42$ cubic inches ✓. Check a second, independent way, by pinning down actual dimensions and seeing that the split does not matter: if the shared base has area $42$ and the height is $3$, the prism holds $42 \\times 3 = 126$ and the pyramid holds $\\frac{1}{3} \\times 42 \\times 3 = 42$; try instead a base of area $63$ with height $2$, and the prism still holds $63 \\times 2 = 126$ while the pyramid holds $\\frac{1}{3} \\times 63 \\times 2 = 42$ ✓. (The choice $126$ is ASSUMING THE TWO SHAPES HOLD THE SAME AMOUNT, though the pyramid tapers away ✗; the choice $378$ is MULTIPLYING BY THREE INSTEAD OF DIVIDING, which makes the pyramid the larger solid ✗; the choice $63$ is HALVING THE PRISM when the true ratio is three to one ✗.)',
    },
    {
      q: 'A shipping crate shaped like a prism has volume $234$ cubic feet. A packing form is a pyramid built on the same base as the crate and rising to the same height. What is the volume of the packing form?',
      choices: ['$702$', '$234$', '$78$', '$117$'],
      answer: 2,
      solution:
        'Route one, the one-third rule: sharing a base and a height, the pyramid holds one third of the prism, $\\frac{234}{3} = 78$ cubic feet ✓. Check a second, independent way, by choosing real dimensions and checking that the choice is irrelevant: with a base of area $78$ and height $3$, the crate is $78 \\times 3 = 234$ and the form is $\\frac{1}{3} \\times 78 \\times 3 = 78$; with a base of area $39$ and height $6$, the crate is $39 \\times 6 = 234$ and the form is $\\frac{1}{3} \\times 39 \\times 6 = 78$ ✓. (The choice $702$ is MULTIPLYING BY THREE INSTEAD OF DIVIDING ✗; the choice $234$ is ASSUMING THE TWO SOLIDS HOLD THE SAME AMOUNT ✗; the choice $117$ is HALVING THE PRISM when the ratio is three to one ✗.)',
    },
    {
      q: 'A block of wax cast as a prism has volume $261$ cubic centimeters. The same mold is refitted so that it casts a pyramid on the identical base, rising to the identical height. What is the volume of the wax pyramid?',
      choices: ['$87$', '$783$', '$261$', '$29$'],
      answer: 0,
      solution:
        'Route one, the one-third rule: the pyramid on the prism’s base and height holds $\\frac{261}{3} = 87$ cubic centimeters ✓. Check a second, independent way, by fixing dimensions and testing two different splits: a base of area $87$ with height $3$ gives a prism of $87 \\times 3 = 261$ and a pyramid of $\\frac{1}{3} \\times 87 \\times 3 = 87$; a base of area $29$ with height $9$ gives a prism of $29 \\times 9 = 261$ and a pyramid of $\\frac{1}{3} \\times 29 \\times 9 = 87$ ✓. (The choice $783$ is MULTIPLYING BY THREE INSTEAD OF DIVIDING ✗; the choice $261$ is ASSUMING THE PYRAMID HOLDS AS MUCH AS THE PRISM ✗; the choice $29$ is DIVIDING BY NINE, taking the third of a third ✗.)',
    },
  ],
  // s4 — square pyramid: volume and base edge given, solve for the height.
  [
    {
      q: 'A glass ornament is a square pyramid holding $300$ cubic centimeters of colored oil. Its base edge is $10$ centimeters. How tall is the ornament?',
      choices: ['$3$', '$30$', '$90$', '$9$'],
      answer: 3,
      solution:
        'Route one, solving the volume formula: the base area is $B = 10^2 = 100$, so $\\frac{1}{3} \\times 100 \\times h = 300$. Multiply both sides by $3$ to get $100h = 900$, and divide by $100$ to get $h = 9$ centimeters ✓. Check a second, independent way, by scaling from a short trial pyramid: a square pyramid with base edge $10$ and height $3$ holds $\\frac{1}{3} \\times 100 \\times 3 = 100$ cubic centimeters. Volume grows in step with the height while the base stays fixed, and $300$ is $3$ times $100$, so the height must be $3$ times $3$, which is $9$ ✓. (The choice $3$ is DIVIDING THE VOLUME BY THE BASE AREA and never undoing the factor of one third ✗; the choice $30$ is DIVIDING BY THE BASE EDGE INSTEAD OF THE BASE AREA ✗; the choice $90$ is TRIPLING FIRST AND THEN DIVIDING BY THE EDGE, $900 \\div 10$, when the base area belongs in the denominator ✗.)',
    },
    {
      q: 'A birdseed feeder is a square pyramid that holds $1372$ cubic inches of seed. Its base edge measures $14$ inches. What is its height?',
      choices: ['$7$', '$21$', '$98$', '$294$'],
      answer: 1,
      solution:
        'Route one, solving the volume formula: $B = 14^2 = 196$, so $\\frac{1}{3} \\times 196 \\times h = 1372$. Multiplying by $3$ gives $196h = 4116$, and $4116 \\div 196 = 21$, so $h = 21$ inches ✓. Check a second, independent way, by scaling from a short trial pyramid: a square pyramid with base edge $14$ and height $3$ holds $\\frac{1}{3} \\times 196 \\times 3 = 196$ cubic inches. Since $1372 \\div 196 = 7$, the feeder is $7$ trial pyramids tall in the height direction, so $h = 7 \\times 3 = 21$ ✓. (The choice $7$ is DIVIDING THE VOLUME BY THE BASE AREA and forgetting to undo the one third ✗; the choice $98$ is DIVIDING BY THE BASE EDGE INSTEAD OF THE BASE AREA ✗; the choice $294$ is TRIPLING AND THEN DIVIDING BY THE EDGE, $4116 \\div 14$, instead of by the base area ✗.)',
    },
    {
      q: 'A salt shaker is a square pyramid with capacity $507$ cubic centimeters and base edge $13$ centimeters. How tall is the shaker?',
      choices: ['$3$', '$39$', '$9$', '$117$'],
      answer: 2,
      solution:
        'Route one, solving the volume formula: $B = 13^2 = 169$, so $\\frac{1}{3} \\times 169 \\times h = 507$. Multiplying by $3$ gives $169h = 1521$, and $1521 \\div 169 = 9$, so $h = 9$ centimeters ✓. Check a second, independent way, by scaling from a short trial pyramid: a square pyramid with base edge $13$ and height $3$ holds $\\frac{1}{3} \\times 169 \\times 3 = 169$ cubic centimeters, and $507 \\div 169 = 3$, so the shaker needs $3$ times that height, $3 \\times 3 = 9$ ✓. (The choice $3$ is DIVIDING THE VOLUME BY THE BASE AREA and skipping the undo of the one third ✗; the choice $39$ is DIVIDING BY THE BASE EDGE INSTEAD OF THE BASE AREA ✗; the choice $117$ is TRIPLING AND THEN DIVIDING BY THE EDGE, $1521 \\div 13$ ✗.)',
    },
  ],
  // s5 — base edge and height give the slant height: l^2 = h^2 + (b/2)^2.
  [
    {
      q: 'A circus tent is a square pyramid of canvas. Its base edge is $30$ meters and its center pole rises $8$ meters. A seam runs from the peak straight down the middle of one canvas panel to the midpoint of a base edge. How long is that seam?',
      fig: {
        view: [-1, -1.5, 6.6, 3.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [3.6, 0] },
          { t: 'seg', a: [3.6, 0], b: [4.8, 1] },
          { t: 'seg', a: [4.8, 1], b: [1.2, 1], dash: true },
          { t: 'seg', a: [1.2, 1], b: [0, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [2.4, 2.2] },
          { t: 'seg', a: [3.6, 0], b: [2.4, 2.2] },
          { t: 'seg', a: [4.8, 1], b: [2.4, 2.2] },
          { t: 'seg', a: [1.2, 1], b: [2.4, 2.2], dash: true },
          { t: 'seg', a: [2.4, 0.5], b: [2.4, 2.2], dash: true },
          { t: 'seg', a: [2.4, 0.5], b: [4.2, 0.5], dash: true },
          { t: 'seg', a: [4.2, 0.5], b: [2.4, 2.2] },
          { t: 'label', p: [1.8, 0], text: '30', dy: 18 },
          { t: 'label', p: [2.4, 1.3], text: 'h = 8', dx: -24, dy: 4 },
          { t: 'label', p: [3.3, 0.5], text: '15', dx: 0, dy: 16 },
          { t: 'label', p: [3.4, 1.4], text: 'seam = ?', dx: 26, dy: -4 },
        ],
      },
      choices: ['$17$', '$\\sqrt{964}$', '$23$', '$38$'],
      answer: 0,
      solution:
        'Route one, the slant-height triangle: the pole, the seam, and the stretch of ground from the center of the base to the midpoint of a base edge form a right triangle. That ground leg is half the base edge, $\\frac{30}{2} = 15$, so the seam is $\\ell = \\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$ meters ✓. Check a second, independent way, with coordinates and a reverse test: set the center of the base at the origin, the peak at $(0, 0, 8)$, and the midpoint of a base edge at $(15, 0, 0)$. The distance between them is $\\sqrt{15^2 + 8^2}$, and to test the value $17$ run the subtraction instead of the addition: $17^2 - 15^2 = (17 - 15)(17 + 15) = 2 \\times 32 = 64$, which is exactly $8^2$ ✓. (The choice $\\sqrt{964}$ is USING THE WHOLE BASE EDGE $30$ as the leg when the seam only reaches the midpoint, half an edge from the center ✗; the choice $23$ is ADDING THE TWO LEGS, $15 + 8$, instead of adding their squares ✗; the choice $38$ is ADDING THE FULL EDGE AND THE HEIGHT, $30 + 8$ ✗.)',
    },
    {
      q: 'A lighthouse is capped by a square pyramid of copper. The cap’s base edge is $48$ feet and it rises $7$ feet from base to tip. A ridge runs from the tip down the middle of one face to the midpoint of a base edge. How long is that ridge?',
      fig: {
        view: [-1, -1.5, 7, 3.3],
        elems: [
          { t: 'seg', a: [0, 0], b: [4, 0] },
          { t: 'seg', a: [4, 0], b: [5.1, 0.9] },
          { t: 'seg', a: [5.1, 0.9], b: [1.1, 0.9], dash: true },
          { t: 'seg', a: [1.1, 0.9], b: [0, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [2.55, 2.1] },
          { t: 'seg', a: [4, 0], b: [2.55, 2.1] },
          { t: 'seg', a: [5.1, 0.9], b: [2.55, 2.1] },
          { t: 'seg', a: [1.1, 0.9], b: [2.55, 2.1], dash: true },
          { t: 'seg', a: [2.55, 0.45], b: [2.55, 2.1], dash: true },
          { t: 'seg', a: [2.55, 0.45], b: [4.55, 0.45], dash: true },
          { t: 'seg', a: [4.55, 0.45], b: [2.55, 2.1] },
          { t: 'label', p: [2, 0], text: '48', dy: 18 },
          { t: 'label', p: [2.55, 1.25], text: 'h = 7', dx: -24, dy: 4 },
          { t: 'label', p: [3.55, 0.45], text: '24', dx: 0, dy: 16 },
          { t: 'label', p: [3.6, 1.3], text: 'ridge = ?', dx: 26, dy: -4 },
        ],
      },
      choices: ['$\\sqrt{2353}$', '$31$', '$\\sqrt{527}$', '$25$'],
      answer: 3,
      solution:
        'Route one, the slant-height triangle: the ridge is the hypotenuse of a right triangle whose legs are the height $7$ and half the base edge, $\\frac{48}{2} = 24$. So $\\ell = \\sqrt{7^2 + 24^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25$ feet ✓. Check a second, independent way, with coordinates and a reverse test: put the center of the cap’s base at the origin, the tip at $(0, 0, 7)$, and the midpoint of a base edge at $(24, 0, 0)$. Testing the value $25$ by subtraction, $25^2 - 24^2 = (25 - 24)(25 + 24) = 1 \\times 49 = 49 = 7^2$ ✓. (The choice $\\sqrt{2353}$ is USING THE WHOLE BASE EDGE $48$ where only the half-edge $24$ belongs ✗; the choice $31$ is ADDING THE LEGS, $24 + 7$, rather than their squares ✗; the choice $\\sqrt{527}$ is SUBTRACTING THE SQUARES when the unknown here is the hypotenuse, which must come out longer than either leg ✗.)',
    },
    {
      q: 'A stone finial on a gatepost is a square pyramid. Its base edge is $12$ centimeters and it rises $8$ centimeters to a point. A chisel groove runs from that point down the middle of one face to the midpoint of a base edge. How long is the groove?',
      fig: {
        view: [-1, -1.5, 6.8, 3.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [3.6, 0] },
          { t: 'seg', a: [3.6, 0], b: [4.8, 1] },
          { t: 'seg', a: [4.8, 1], b: [1.2, 1], dash: true },
          { t: 'seg', a: [1.2, 1], b: [0, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [2.4, 2.4] },
          { t: 'seg', a: [3.6, 0], b: [2.4, 2.4] },
          { t: 'seg', a: [4.8, 1], b: [2.4, 2.4] },
          { t: 'seg', a: [1.2, 1], b: [2.4, 2.4], dash: true },
          { t: 'seg', a: [2.4, 0.5], b: [2.4, 2.4], dash: true },
          { t: 'seg', a: [2.4, 0.5], b: [4.2, 0.5], dash: true },
          { t: 'seg', a: [4.2, 0.5], b: [2.4, 2.4] },
          { t: 'label', p: [1.8, 0], text: '12', dy: 18 },
          { t: 'label', p: [2.4, 1.45], text: 'h = 8', dx: -24, dy: 4 },
          { t: 'label', p: [3.3, 0.5], text: '6', dx: 0, dy: 16 },
          { t: 'label', p: [3.4, 1.55], text: 'groove = ?', dx: 30, dy: -4 },
        ],
      },
      choices: ['$\\sqrt{208}$', '$14$', '$10$', '$8$'],
      answer: 2,
      solution:
        'Route one, the slant-height triangle: the groove is the hypotenuse of a right triangle whose legs are the height $8$ and half the base edge, $\\frac{12}{2} = 6$. So $\\ell = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$ centimeters ✓. Check a second, independent way, with coordinates and a reverse test: put the center of the base at the origin, the point at $(0, 0, 8)$, and the midpoint of a base edge at $(6, 0, 0)$. Testing the value $10$ by subtraction, $10^2 - 6^2 = (10 - 6)(10 + 6) = 4 \\times 16 = 64 = 8^2$ ✓. (The choice $\\sqrt{208}$ is USING THE WHOLE BASE EDGE $12$ as a leg where only the half-edge $6$ belongs ✗; the choice $14$ is ADDING THE LEGS, $8 + 6$, instead of their squares ✗; the choice $8$ is COPYING THE HEIGHT, though the groove takes the longer, slanted path ✗.)',
    },
  ],
  // s6 — base edge and slant height give the total surface area: b^2 + 2bl.
  [
    {
      q: 'A gift box is a square pyramid with base edge $6$ inches and slant height $5$ inches. Wrapping paper must cover all four triangular faces and the square bottom. How many square inches of paper does the box need?',
      fig: {
        view: [-1, -1.5, 6.6, 4],
        elems: [
          { t: 'seg', a: [0, 0], b: [3.6, 0] },
          { t: 'seg', a: [3.6, 0], b: [4.8, 1] },
          { t: 'seg', a: [4.8, 1], b: [1.2, 1], dash: true },
          { t: 'seg', a: [1.2, 1], b: [0, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [2.4, 2.8] },
          { t: 'seg', a: [3.6, 0], b: [2.4, 2.8] },
          { t: 'seg', a: [4.8, 1], b: [2.4, 2.8] },
          { t: 'seg', a: [1.2, 1], b: [2.4, 2.8], dash: true },
          { t: 'seg', a: [4.2, 0.5], b: [2.4, 2.8] },
          { t: 'label', p: [1.8, 0], text: '6', dy: 18 },
          { t: 'label', p: [3.4, 1.7], text: 'slant = 5', dx: 28, dy: -4 },
        ],
      },
      choices: ['$60$', '$96$', '$156$', '$36$'],
      answer: 1,
      solution:
        'Route one, face by face: the square bottom contributes $6^2 = 36$ square inches. Each of the four triangular faces has base $6$ and height equal to the slant height $5$, so each covers $\\frac{1}{2} \\times 6 \\times 5 = 15$, and four of them cover $4 \\times 15 = 60$. Altogether $36 + 60 = 96$ square inches ✓. Check a second, independent way, by unfolding the net and using the base perimeter: the four triangles laid flat form one long strip whose total area is $\\frac{1}{2} \\times (\\text{base perimeter}) \\times \\ell = \\frac{1}{2} \\times 24 \\times 5 = 60$, and adding the square bottom gives $60 + 36 = 96$ ✓. (The choice $60$ is STOPPING AT THE FOUR TRIANGLES and forgetting the square bottom ✗; the choice $156$ is TREATING EACH FACE AS A FULL $6 \\times 5$ RECTANGLE, which doubles every triangle ✗; the choice $36$ is REPORTING ONLY THE BOTTOM SQUARE ✗.)',
    },
    {
      q: 'A monument is a square pyramid of stone with base edge $12$ meters and slant height $10$ meters. The four faces and the square footprint are all to be clad in copper sheet. How many square meters of sheet are needed?',
      fig: {
        view: [-1, -1.5, 7, 4.1],
        elems: [
          { t: 'seg', a: [0, 0], b: [4, 0] },
          { t: 'seg', a: [4, 0], b: [5.1, 0.9] },
          { t: 'seg', a: [5.1, 0.9], b: [1.1, 0.9], dash: true },
          { t: 'seg', a: [1.1, 0.9], b: [0, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [2.55, 2.9] },
          { t: 'seg', a: [4, 0], b: [2.55, 2.9] },
          { t: 'seg', a: [5.1, 0.9], b: [2.55, 2.9] },
          { t: 'seg', a: [1.1, 0.9], b: [2.55, 2.9], dash: true },
          { t: 'seg', a: [4.55, 0.45], b: [2.55, 2.9] },
          { t: 'label', p: [2, 0], text: '12', dy: 18 },
          { t: 'label', p: [3.6, 1.7], text: 'slant = 10', dx: 30, dy: -4 },
        ],
      },
      choices: ['$240$', '$624$', '$144$', '$384$'],
      answer: 3,
      solution:
        'Route one, face by face: the square footprint contributes $12^2 = 144$ square meters. Each triangular face has base $12$ and height $10$, the slant height, so each covers $\\frac{1}{2} \\times 12 \\times 10 = 60$, and the four together cover $240$. The total is $144 + 240 = 384$ square meters ✓. Check a second, independent way, by unfolding the net and using the base perimeter: the lateral surface is $\\frac{1}{2} \\times (\\text{base perimeter}) \\times \\ell = \\frac{1}{2} \\times 48 \\times 10 = 240$, and with the footprint the total is $240 + 144 = 384$ ✓. (The choice $240$ is STOPPING AT THE LATERAL FACES and leaving the footprint uncovered ✗; the choice $624$ is TREATING EACH FACE AS A FULL $12 \\times 10$ RECTANGLE ✗; the choice $144$ is REPORTING ONLY THE FOOTPRINT ✗.)',
    },
    {
      q: 'A paper lantern is a square pyramid with base edge $16$ centimeters and slant height $17$ centimeters. Both the four sloping faces and the square base panel are papered. What is the total papered area?',
      fig: {
        view: [-1, -1.5, 6.6, 4.8],
        elems: [
          { t: 'seg', a: [0, 0], b: [3.2, 0] },
          { t: 'seg', a: [3.2, 0], b: [4.5, 1.1] },
          { t: 'seg', a: [4.5, 1.1], b: [1.3, 1.1], dash: true },
          { t: 'seg', a: [1.3, 1.1], b: [0, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [2.25, 3.6] },
          { t: 'seg', a: [3.2, 0], b: [2.25, 3.6] },
          { t: 'seg', a: [4.5, 1.1], b: [2.25, 3.6] },
          { t: 'seg', a: [1.3, 1.1], b: [2.25, 3.6], dash: true },
          { t: 'seg', a: [3.85, 0.55], b: [2.25, 3.6] },
          { t: 'label', p: [1.6, 0], text: '16', dy: 18 },
          { t: 'label', p: [3.1, 2.1], text: 'slant = 17', dx: 30, dy: -4 },
        ],
      },
      choices: ['$800$', '$544$', '$1344$', '$256$'],
      answer: 0,
      solution:
        'Route one, face by face: the base panel contributes $16^2 = 256$ square centimeters. Each sloping face has base $16$ and height $17$, so each covers $\\frac{1}{2} \\times 16 \\times 17 = 136$, and the four cover $4 \\times 136 = 544$. Altogether $256 + 544 = 800$ square centimeters ✓. Check a second, independent way, by unfolding the net and using the base perimeter: the four faces form a strip of area $\\frac{1}{2} \\times (\\text{base perimeter}) \\times \\ell = \\frac{1}{2} \\times 64 \\times 17 = 32 \\times 17 = 544$, and adding the base panel gives $544 + 256 = 800$ ✓. (The choice $544$ is STOPPING AT THE FOUR SLOPING FACES and forgetting the base panel ✗; the choice $1344$ is TREATING EACH FACE AS A FULL $16 \\times 17$ RECTANGLE ✗; the choice $256$ is REPORTING ONLY THE BASE PANEL ✗.)',
    },
  ],
  // s7 — base edge and slant height give the height: h^2 = l^2 - (b/2)^2.
  [
    {
      q: 'A pavilion roof is a square pyramid with base edge $40$ feet. A rafter runs from the peak down the middle of one face to the midpoint of a base edge, and it measures $29$ feet. How far is the peak above the base?',
      choices: ['$\\sqrt{1241}$', '$9$', '$21$', '$29$'],
      answer: 2,
      solution:
        'Route one, the slant-height triangle read backwards: the rafter is the hypotenuse and half the base edge, $\\frac{40}{2} = 20$, is one leg, so the height is the other leg: $h = \\sqrt{29^2 - 20^2} = \\sqrt{841 - 400} = \\sqrt{441} = 21$ feet ✓. Check a second, independent way, by factoring the difference of squares and then testing forward: $29^2 - 20^2 = (29 - 20)(29 + 20) = 9 \\times 49 = 441$, whose square root is $21$; running it forward, $21^2 + 20^2 = 441 + 400 = 841 = 29^2$ ✓. (The choice $\\sqrt{1241}$ is ADDING THE SQUARES when the hypotenuse is already known and a leg is wanted ✗; the choice $9$ is SUBTRACTING THE LENGTHS, $29 - 20$, instead of their squares ✗; the choice $29$ is COPYING THE RAFTER, but the straight drop is always shorter than the slanted path ✗.)',
    },
    {
      q: 'A clock tower is topped by a square pyramid spire with base edge $18$ meters. A seam runs from the tip down the middle of one face to the midpoint of a base edge and measures $41$ meters. How tall is the spire?',
      choices: ['$\\sqrt{1357}$', '$40$', '$32$', '$\\sqrt{1762}$'],
      answer: 1,
      solution:
        'Route one, the slant-height triangle read backwards: the seam of $41$ is the hypotenuse and half the base edge, $\\frac{18}{2} = 9$, is a leg, so $h = \\sqrt{41^2 - 9^2} = \\sqrt{1681 - 81} = \\sqrt{1600} = 40$ meters ✓. Check a second, independent way, by factoring the difference of squares and testing forward: $41^2 - 9^2 = (41 - 9)(41 + 9) = 32 \\times 50 = 1600$, so $h = 40$; forward, $40^2 + 9^2 = 1600 + 81 = 1681 = 41^2$ ✓. (The choice $\\sqrt{1357}$ is SUBTRACTING THE SQUARE OF THE WHOLE EDGE $18$ where only the half-edge $9$ belongs ✗; the choice $32$ is SUBTRACTING THE LENGTHS, $41 - 9$, rather than the squares ✗; the choice $\\sqrt{1762}$ is ADDING THE SQUARES, which would make the height longer than the seam ✗.)',
    },
    {
      q: 'A museum display case is covered by a square pyramid of glass with base edge $60$ centimeters. A metal strip runs from the apex down the middle of one glass panel to the midpoint of a base edge and measures $34$ centimeters. How tall is the cover?',
      choices: ['$\\sqrt{2056}$', '$4$', '$34$', '$16$'],
      answer: 3,
      solution:
        'Route one, the slant-height triangle read backwards: the strip of $34$ is the hypotenuse and half the base edge, $\\frac{60}{2} = 30$, is a leg, so $h = \\sqrt{34^2 - 30^2} = \\sqrt{1156 - 900} = \\sqrt{256} = 16$ centimeters ✓. Check a second, independent way, by factoring the difference of squares and testing forward: $34^2 - 30^2 = (34 - 30)(34 + 30) = 4 \\times 64 = 256$, so $h = 16$; forward, $16^2 + 30^2 = 256 + 900 = 1156 = 34^2$ ✓. (The choice $\\sqrt{2056}$ is ADDING THE SQUARES instead of subtracting them ✗; the choice $4$ is SUBTRACTING THE LENGTHS, $34 - 30$ ✗; the choice $34$ is COPYING THE STRIP, though the vertical drop is shorter than the slanted one ✗.)',
    },
  ],
  // s8 — base edge and slant height give the volume, by way of the height.
  [
    {
      q: 'A candle is cast in a square pyramid mold with base edge $16$ centimeters and slant height $17$ centimeters. How much wax does the mold hold?',
      fig: {
        view: [-1, -1.5, 6.6, 4.7],
        elems: [
          { t: 'seg', a: [0, 0], b: [3.6, 0] },
          { t: 'seg', a: [3.6, 0], b: [4.8, 1] },
          { t: 'seg', a: [4.8, 1], b: [1.2, 1], dash: true },
          { t: 'seg', a: [1.2, 1], b: [0, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [2.4, 3.5] },
          { t: 'seg', a: [3.6, 0], b: [2.4, 3.5] },
          { t: 'seg', a: [4.8, 1], b: [2.4, 3.5] },
          { t: 'seg', a: [1.2, 1], b: [2.4, 3.5], dash: true },
          { t: 'seg', a: [2.4, 0.5], b: [2.4, 3.5], dash: true },
          { t: 'seg', a: [2.4, 0.5], b: [4.2, 0.5], dash: true },
          { t: 'seg', a: [4.2, 0.5], b: [2.4, 3.5] },
          { t: 'label', p: [1.8, 0], text: '16', dy: 18 },
          { t: 'label', p: [2.4, 2], text: 'h = ?', dx: -22, dy: 4 },
          { t: 'label', p: [3.3, 0.5], text: '8', dx: 0, dy: 16 },
          { t: 'label', p: [3.4, 2.1], text: 'slant = 17', dx: 30, dy: -4 },
        ],
      },
      choices: ['$1280$', '$3840$', '$1920$', '$4352$'],
      answer: 0,
      solution:
        'Route one, height first, then the volume formula: the volume needs the straight drop, not the slanted one, so $h = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$, using half the base edge, $8$. Then $V = \\frac{1}{3} \\times 16^2 \\times 15 = \\frac{1}{3} \\times 256 \\times 15 = 256 \\times 5 = 1280$ cubic centimeters ✓. Check a second, independent way, by factoring the height out and going through the matching box: $17^2 - 8^2 = (17 - 8)(17 + 8) = 9 \\times 25 = 225$, so $h = 15$; the square prism on the same base and height holds $256 \\times 15 = 3840$ cubic centimeters, and the mold holds one third of that, $3840 \\div 3 = 1280$ ✓. (The choice $3840$ is REPORTING THE MATCHING PRISM without the third ✗; the choice $1920$ is HALVING THE PRISM instead of thirding it ✗; the choice $4352$ is USING THE SLANT HEIGHT AS THE HEIGHT AND SKIPPING THE THIRD, $256 \\times 17$ ✗.)',
    },
    {
      q: 'An ice sculpture is carved as a square pyramid with base edge $24$ inches and slant height $15$ inches. What is the volume of the ice?',
      fig: {
        view: [-1, -1.5, 7, 3.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [4, 0] },
          { t: 'seg', a: [4, 0], b: [5.1, 0.9] },
          { t: 'seg', a: [5.1, 0.9], b: [1.1, 0.9], dash: true },
          { t: 'seg', a: [1.1, 0.9], b: [0, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [2.55, 2.4] },
          { t: 'seg', a: [4, 0], b: [2.55, 2.4] },
          { t: 'seg', a: [5.1, 0.9], b: [2.55, 2.4] },
          { t: 'seg', a: [1.1, 0.9], b: [2.55, 2.4], dash: true },
          { t: 'seg', a: [2.55, 0.45], b: [2.55, 2.4], dash: true },
          { t: 'seg', a: [2.55, 0.45], b: [4.55, 0.45], dash: true },
          { t: 'seg', a: [4.55, 0.45], b: [2.55, 2.4] },
          { t: 'label', p: [2, 0], text: '24', dy: 18 },
          { t: 'label', p: [2.55, 1.4], text: 'h = ?', dx: -22, dy: 4 },
          { t: 'label', p: [3.55, 0.45], text: '12', dx: 0, dy: 16 },
          { t: 'label', p: [3.6, 1.5], text: 'slant = 15', dx: 30, dy: -4 },
        ],
      },
      choices: ['$2880$', '$5184$', '$1728$', '$2592$'],
      answer: 2,
      solution:
        'Route one, height first, then the volume formula: half the base edge is $12$, so $h = \\sqrt{15^2 - 12^2} = \\sqrt{225 - 144} = \\sqrt{81} = 9$ inches. Then $V = \\frac{1}{3} \\times 24^2 \\times 9 = \\frac{1}{3} \\times 576 \\times 9 = 576 \\times 3 = 1728$ cubic inches ✓. Check a second, independent way, by factoring the height out and going through the matching box: $15^2 - 12^2 = (15 - 12)(15 + 12) = 3 \\times 27 = 81$, so $h = 9$; a prism on the same base and height holds $576 \\times 9 = 5184$ cubic inches, and the sculpture holds one third, $5184 \\div 3 = 1728$ ✓. (The choice $2880$ is USING THE SLANT HEIGHT IN PLACE OF THE HEIGHT, $\\frac{1}{3} \\times 576 \\times 15$ ✗; the choice $5184$ is REPORTING THE MATCHING PRISM without the third ✗; the choice $2592$ is HALVING THE PRISM instead of thirding it ✗.)',
    },
    {
      q: 'A celebration cake is baked as a square pyramid with base edge $24$ centimeters and slant height $13$ centimeters. What is the volume of the cake?',
      fig: {
        view: [-1, -1.5, 6.6, 3.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [3.2, 0] },
          { t: 'seg', a: [3.2, 0], b: [4.5, 1.1] },
          { t: 'seg', a: [4.5, 1.1], b: [1.3, 1.1], dash: true },
          { t: 'seg', a: [1.3, 1.1], b: [0, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [2.25, 2.2] },
          { t: 'seg', a: [3.2, 0], b: [2.25, 2.2] },
          { t: 'seg', a: [4.5, 1.1], b: [2.25, 2.2] },
          { t: 'seg', a: [1.3, 1.1], b: [2.25, 2.2], dash: true },
          { t: 'seg', a: [2.25, 0.55], b: [2.25, 2.2], dash: true },
          { t: 'seg', a: [2.25, 0.55], b: [3.85, 0.55], dash: true },
          { t: 'seg', a: [3.85, 0.55], b: [2.25, 2.2] },
          { t: 'label', p: [1.6, 0], text: '24', dy: 18 },
          { t: 'label', p: [2.25, 1.3], text: 'h = ?', dx: -22, dy: 4 },
          { t: 'label', p: [3.05, 0.55], text: '12', dx: 0, dy: 16 },
          { t: 'label', p: [3.2, 1.4], text: 'slant = 13', dx: 30, dy: -4 },
        ],
      },
      choices: ['$2496$', '$960$', '$2880$', '$1440$'],
      answer: 1,
      solution:
        'Route one, height first, then the volume formula: half the base edge is $12$, so $h = \\sqrt{13^2 - 12^2} = \\sqrt{169 - 144} = \\sqrt{25} = 5$ centimeters. Then $V = \\frac{1}{3} \\times 24^2 \\times 5 = \\frac{1}{3} \\times 576 \\times 5 = 192 \\times 5 = 960$ cubic centimeters ✓. Check a second, independent way, by factoring the height out and going through the matching box: $13^2 - 12^2 = (13 - 12)(13 + 12) = 1 \\times 25 = 25$, so $h = 5$; the prism on the same base and height holds $576 \\times 5 = 2880$ cubic centimeters, and the cake holds one third of it, $2880 \\div 3 = 960$ ✓. (The choice $2496$ is USING THE SLANT HEIGHT IN PLACE OF THE HEIGHT, $\\frac{1}{3} \\times 576 \\times 13$ ✗; the choice $2880$ is REPORTING THE MATCHING PRISM without the third ✗; the choice $1440$ is HALVING THE PRISM instead of thirding it ✗.)',
    },
  ],
  // s9 — a pyramid whose volume matches a given cube; base edge given, find the height.
  [
    {
      q: 'The base of a snow globe is a square pyramid that holds exactly as much water as a cube of ice with edge $5$ centimeters. The pyramid’s base edge is $5$ centimeters. How tall is the pyramid?',
      choices: ['$5$', '$25$', '$75$', '$15$'],
      answer: 3,
      solution:
        'Route one, setting the two volumes equal: the cube holds $5^3 = 125$ cubic centimeters, so $\\frac{1}{3} \\times 5^2 \\times h = 125$, that is $\\frac{25}{3}h = 125$. Multiplying by $3$ gives $25h = 375$, so $h = 15$ centimeters ✓. Check a second, independent way, by scaling from a short trial pyramid: a square pyramid with base edge $5$ and height $3$ holds $\\frac{1}{3} \\times 25 \\times 3 = 25$ cubic centimeters. The target $125$ is $5$ times that, and volume grows in step with height when the base is fixed, so $h = 5 \\times 3 = 15$ ✓. (The choice $5$ is DIVIDING THE VOLUME BY THE BASE AREA and never undoing the one third ✗; the choice $25$ is DIVIDING BY THE BASE EDGE INSTEAD OF THE BASE AREA, $125 \\div 5$ ✗; the choice $75$ is TRIPLING FIRST AND THEN DIVIDING BY THE EDGE, $375 \\div 5$, when the base area belongs in the denominator ✗.)',
    },
    {
      q: 'A wooden toy is a square pyramid carved so that it has the same volume as a cube of edge $6$ inches. The pyramid’s base edge is $6$ inches. What is its height?',
      choices: ['$18$', '$6$', '$108$', '$36$'],
      answer: 0,
      solution:
        'Route one, setting the two volumes equal: the cube is $6^3 = 216$ cubic inches, so $\\frac{1}{3} \\times 36 \\times h = 216$, that is $12h = 216$ and $h = 18$ inches ✓. Check a second, independent way, by scaling from a short trial pyramid: a square pyramid with base edge $6$ and height $3$ holds $\\frac{1}{3} \\times 36 \\times 3 = 36$ cubic inches, and $216 \\div 36 = 6$, so the toy needs $6$ times that height, $6 \\times 3 = 18$ ✓. (The choice $6$ is DIVIDING THE VOLUME BY THE BASE AREA and forgetting to undo the one third ✗; the choice $108$ is TRIPLING AND THEN DIVIDING BY THE EDGE, $648 \\div 6$ ✗; the choice $36$ is DIVIDING BY THE EDGE INSTEAD OF THE BASE AREA, $216 \\div 6$ ✗.)',
    },
    {
      q: 'A bronze counterweight is a square pyramid cast from the same amount of metal as a solid cube of edge $8$ centimeters. The pyramid’s base edge is $8$ centimeters. How tall is the counterweight?',
      choices: ['$8$', '$24$', '$192$', '$64$'],
      answer: 1,
      solution:
        'Route one, setting the two volumes equal: the cube is $8^3 = 512$ cubic centimeters, so $\\frac{1}{3} \\times 64 \\times h = 512$. Multiplying by $3$ gives $64h = 1536$, so $h = 24$ centimeters ✓. Check a second, independent way, by scaling from a short trial pyramid: a square pyramid with base edge $8$ and height $3$ holds $\\frac{1}{3} \\times 64 \\times 3 = 64$ cubic centimeters, and $512 \\div 64 = 8$, so the height is $8$ times $3$, which is $24$ ✓. (The choice $8$ is DIVIDING THE VOLUME BY THE BASE AREA and skipping the undo of the one third ✗; the choice $192$ is TRIPLING AND THEN DIVIDING BY THE EDGE, $1536 \\div 8$ ✗; the choice $64$ is DIVIDING BY THE EDGE INSTEAD OF THE BASE AREA, $512 \\div 8$ ✗.)',
    },
  ],
  // s10 — composite solid: a cube with a square pyramid seated on its top face.
  [
    {
      q: 'A chess piece is turned from a cube of edge $3$ centimeters with a square pyramid of height $8$ centimeters seated on the cube’s top face. What is the total volume of the piece?',
      fig: {
        view: [-1, -1.5, 5.8, 7.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [3, 3], [0, 3]], fill: false },
          { t: 'seg', a: [3, 0], b: [4.2, 0.9] },
          { t: 'seg', a: [3, 3], b: [4.2, 3.9] },
          { t: 'seg', a: [0, 3], b: [1.2, 3.9] },
          { t: 'seg', a: [4.2, 0.9], b: [4.2, 3.9] },
          { t: 'seg', a: [1.2, 3.9], b: [4.2, 3.9] },
          { t: 'seg', a: [0, 0], b: [1.2, 0.9], dash: true },
          { t: 'seg', a: [1.2, 0.9], b: [4.2, 0.9], dash: true },
          { t: 'seg', a: [1.2, 0.9], b: [1.2, 3.9], dash: true },
          { t: 'seg', a: [0, 3], b: [2.1, 6.6] },
          { t: 'seg', a: [3, 3], b: [2.1, 6.6] },
          { t: 'seg', a: [4.2, 3.9], b: [2.1, 6.6] },
          { t: 'seg', a: [1.2, 3.9], b: [2.1, 6.6], dash: true },
          { t: 'seg', a: [2.1, 3.45], b: [2.1, 6.6], dash: true },
          { t: 'label', p: [1.5, 0], text: '3', dy: 18 },
          { t: 'label', p: [0, 1.5], text: '3', dx: -12, dy: 4 },
          { t: 'label', p: [2.1, 5], text: 'h = 8', dx: 20, dy: 2 },
        ],
      },
      choices: ['$99$', '$63$', '$51$', '$24$'],
      answer: 2,
      solution:
        'Route one, one piece at a time: the cube holds $3^3 = 27$ cubic centimeters. The pyramid sits on the cube’s $3 \\times 3$ top face, so its base area is $9$ and it holds $\\frac{1}{3} \\times 9 \\times 8 = 3 \\times 8 = 24$. The total is $27 + 24 = 51$ cubic centimeters ✓. Check a second, independent way, by factoring out the shared base area: both pieces stand on a $3 \\times 3$ square, so the total is $9 \\times \\left(3 + \\frac{8}{3}\\right) = 9 \\times \\frac{17}{3} = 3 \\times 17 = 51$ ✓. (The choice $99$ is COUNTING THE PYRAMID AS A FULL PRISM, $9 \\times 8 = 72$, with no third ✗; the choice $63$ is HALVING THE PYRAMID’S PRISM instead of thirding it, $27 + 36$ ✗; the choice $24$ is REPORTING THE PYRAMID ALONE and leaving out the cube ✗.)',
    },
    {
      q: 'A birdhouse is a cube of edge $4$ feet with a square pyramid roof of height $9$ feet resting on the cube’s top face. What volume does the birdhouse enclose?',
      fig: {
        view: [-1, -1.5, 5.8, 7.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [3, 3], [0, 3]], fill: false },
          { t: 'seg', a: [3, 0], b: [4.1, 0.85] },
          { t: 'seg', a: [3, 3], b: [4.1, 3.85] },
          { t: 'seg', a: [0, 3], b: [1.1, 3.85] },
          { t: 'seg', a: [4.1, 0.85], b: [4.1, 3.85] },
          { t: 'seg', a: [1.1, 3.85], b: [4.1, 3.85] },
          { t: 'seg', a: [0, 0], b: [1.1, 0.85], dash: true },
          { t: 'seg', a: [1.1, 0.85], b: [4.1, 0.85], dash: true },
          { t: 'seg', a: [1.1, 0.85], b: [1.1, 3.85], dash: true },
          { t: 'seg', a: [0, 3], b: [2.05, 6.4] },
          { t: 'seg', a: [3, 3], b: [2.05, 6.4] },
          { t: 'seg', a: [4.1, 3.85], b: [2.05, 6.4] },
          { t: 'seg', a: [1.1, 3.85], b: [2.05, 6.4], dash: true },
          { t: 'seg', a: [2.05, 3.425], b: [2.05, 6.4], dash: true },
          { t: 'label', p: [1.5, 0], text: '4', dy: 18 },
          { t: 'label', p: [0, 1.5], text: '4', dx: -12, dy: 4 },
          { t: 'label', p: [2.05, 4.9], text: 'h = 9', dx: 20, dy: 2 },
        ],
      },
      choices: ['$208$', '$136$', '$48$', '$112$'],
      answer: 3,
      solution:
        'Route one, one piece at a time: the cube encloses $4^3 = 64$ cubic feet. The roof stands on the cube’s $4 \\times 4$ top face, so its base area is $16$ and it encloses $\\frac{1}{3} \\times 16 \\times 9 = 16 \\times 3 = 48$. The total is $64 + 48 = 112$ cubic feet ✓. Check a second, independent way, by factoring out the shared base area: both pieces rest on the same $4 \\times 4$ square, so the total is $16 \\times \\left(4 + \\frac{9}{3}\\right) = 16 \\times 7 = 112$ ✓. (The choice $208$ is COUNTING THE ROOF AS A FULL PRISM, $16 \\times 9 = 144$, with no third ✗; the choice $136$ is HALVING THE ROOF’S PRISM instead of thirding it, $64 + 72$ ✗; the choice $48$ is REPORTING THE ROOF ALONE without the cube below it ✗.)',
    },
    {
      q: 'A model bell tower is a cube of edge $5$ inches with a square pyramid spire of height $12$ inches mounted on the cube’s top face. What is the model’s total volume?',
      fig: {
        view: [-1, -1.5, 6, 7.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [3, 3], [0, 3]], fill: false },
          { t: 'seg', a: [3, 0], b: [4.3, 1] },
          { t: 'seg', a: [3, 3], b: [4.3, 4] },
          { t: 'seg', a: [0, 3], b: [1.3, 4] },
          { t: 'seg', a: [4.3, 1], b: [4.3, 4] },
          { t: 'seg', a: [1.3, 4], b: [4.3, 4] },
          { t: 'seg', a: [0, 0], b: [1.3, 1], dash: true },
          { t: 'seg', a: [1.3, 1], b: [4.3, 1], dash: true },
          { t: 'seg', a: [1.3, 1], b: [1.3, 4], dash: true },
          { t: 'seg', a: [0, 3], b: [2.15, 6.7] },
          { t: 'seg', a: [3, 3], b: [2.15, 6.7] },
          { t: 'seg', a: [4.3, 4], b: [2.15, 6.7] },
          { t: 'seg', a: [1.3, 4], b: [2.15, 6.7], dash: true },
          { t: 'seg', a: [2.15, 3.5], b: [2.15, 6.7], dash: true },
          { t: 'label', p: [1.5, 0], text: '5', dy: 18 },
          { t: 'label', p: [0, 1.5], text: '5', dx: -12, dy: 4 },
          { t: 'label', p: [2.15, 5.1], text: 'h = 12', dx: 22, dy: 2 },
        ],
      },
      choices: ['$225$', '$425$', '$275$', '$100$'],
      answer: 0,
      solution:
        'Route one, one piece at a time: the cube holds $5^3 = 125$ cubic inches. The spire sits on the cube’s $5 \\times 5$ top face, so its base area is $25$ and it holds $\\frac{1}{3} \\times 25 \\times 12 = 25 \\times 4 = 100$. The total is $125 + 100 = 225$ cubic inches ✓. Check a second, independent way, by factoring out the shared base area: both pieces stand on the same $5 \\times 5$ square, so the total is $25 \\times \\left(5 + \\frac{12}{3}\\right) = 25 \\times 9 = 225$ ✓. (The choice $425$ is COUNTING THE SPIRE AS A FULL PRISM, $25 \\times 12 = 300$, with no third ✗; the choice $275$ is HALVING THE SPIRE’S PRISM instead of thirding it, $125 + 150$ ✗; the choice $100$ is REPORTING THE SPIRE ALONE and dropping the cube ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 14,
  sections: { '14.3': s143 },
}
