// Introduction to Geometry chapter 13 — variations for the CHALLENGE set.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every answer was worked twice by two genuinely different routes, and the
//    two routes had to agree before the key was written: a factor pair of the
//    power vs. half the chord minus the offset from its midpoint (slots 1 and
//    10); expanding the power equation vs. writing both products as a square
//    minus a square (slot 2); the right triangle on the radius vs. the secant
//    through the center (slot 3); the crossing-chords product vs. the power
//    read off the radius and the center distance (slot 4); the tangent-secant
//    product vs. a pair of similar triangles (slots 5 and 8); the rise-and-span
//    circle vs. the vertical chord through the measuring point (slot 6); the
//    shared power on the common chord vs. similar triangles (slot 7); the
//    diameter through the interior point vs. the perpendicular from the center
//    (slot 9); the product rule vs. the right triangle on the tangent
//    (slot 11); solving for the short piece vs. solving for the whole chord
//    (slot 12).
//  - Every figure is coordinate-exact: each labeled point sits on its circle to
//    four decimals, every tangent segment is genuinely perpendicular to the
//    radius at its touching point, and every crossing point is the true
//    intersection of the two drawn lines.
//  - Figure labels are plain text: bare numerals, short algebraic strings, and
//    the letters of points.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution and marked ✗.
//  - No two choices inside an item name the same value, and inside each slot the
//    three variations put the correct answer in three different positions.

const challenge = [
  // slot 1 — two crossing chords; report the shorter piece of the known chord.
  // Lane: 25 with 7 and 22 -> 11 / 22 with 6 and 12 -> 4 / 15 with 4 and 9 -> 3.
  [
    {
      q: 'A circular ice rink has two straight rope barriers laid across it. One runs from $A$ to $B$ and is $25$ m long; the other runs from $C$ to $D$. They cross at $P$, where $PC = 7$ m and $PD = 22$ m. How long is the shorter of the two pieces of the first rope?',
      fig: {
        view: [-3.9, -3.9, 3.9, 3.9],
        alt: 'Chords AB and CD of a circle crossing at P, with AB marked 25 and the pieces PC and PD marked 7 and 22',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.4194, -1.7739], b: [2.4194, -1.7739] },
          { t: 'seg', a: [-1.2556, -2.7246], b: [2.7434, 1.214] },
          { t: 'label', p: [1.0, -1.7739], text: '25', dy: 17 },
          { t: 'label', p: [-1.3549, -1.7739], text: '?', dy: -10 },
          { t: 'label', p: [-0.773, -2.2493], text: '7', dx: -12 },
          { t: 'label', p: [1.2266, -0.28], text: '22', dx: 13 },
          { t: 'point', p: [-2.4194, -1.7739], label: 'A', dx: -13, dy: 2 },
          { t: 'point', p: [2.4194, -1.7739], label: 'B', dx: 13, dy: 2 },
          { t: 'point', p: [-1.2556, -2.7246], label: 'C', dx: -6, dy: 15 },
          { t: 'point', p: [2.7434, 1.214], label: 'D', dx: 12, dy: -6 },
          { t: 'point', p: [-0.2903, -1.7739], label: 'P', dx: 1, dy: 15 },
        ],
      },
      choices: ['$14$', '$11$', '$7$', '$3$'],
      answer: 1,
      solution:
        'Where two chords cross, the two pieces of one multiply to the same number as the two pieces of the other: $AP \\times PB = PC \\times PD = 7 \\times 22 = 154$. The two pieces also add to $25$, so they are a pair of numbers with sum $25$ and product $154$; since $154 = 11 \\times 14$ and $11 + 14 = 25$, the pieces are $11$ m and $14$ m, and the shorter one is $11$ ✓. Check a second, independent way through the midpoint of $AB$: if $M$ is the middle of the rope, each piece is $12.5$ shifted by the same distance $MP$, so $AP \\times PB = (12.5 - MP)(12.5 + MP) = 156.25 - MP^2$. Setting that equal to $154$ gives $MP^2 = 2.25$, so $MP = 1.5$ and the shorter piece is $12.5 - 1.5 = 11$ ✓. (The choice $14$ is REPORTING THE LONGER PIECE ✗; the choice $7$ is COPYING $PC$, as though crossing chords cut each other into matching pieces ✗; the choice $3$ is SUBTRACTING $PD$ FROM THE WHOLE ROPE ✗.)',
    },
    {
      q: 'A round wooden tabletop has two straight brass strips inlaid across it. One strip runs from $A$ to $B$ and measures $22$ cm; the other runs from $C$ to $D$. The strips cross at $P$, with $PC = 6$ cm and $PD = 12$ cm. How long is the shorter of the two pieces of the first strip?',
      fig: {
        view: [-3.9, -3.9, 3.9, 3.9],
        alt: 'Chords AB and CD of a circle crossing at P, with AB marked 22 and the pieces PC and PD marked 6 and 12',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.8696, -0.875], b: [2.8696, -0.875] },
          { t: 'seg', a: [-2.9954, 0.1655], b: [0.5126, -2.9559] },
          { t: 'label', p: [1.2, -0.875], text: '22', dy: 17 },
          { t: 'label', p: [-2.3478, -0.875], text: '?', dy: -11 },
          { t: 'label', p: [-2.4108, -0.3548], text: '6', dx: -12 },
          { t: 'label', p: [-0.6568, -1.9155], text: '12', dx: 13 },
          { t: 'point', p: [-2.8696, -0.875], label: 'A', dx: -13, dy: 4 },
          { t: 'point', p: [2.8696, -0.875], label: 'B', dx: 13, dy: 2 },
          { t: 'point', p: [-2.9954, 0.1655], label: 'C', dx: -13, dy: -4 },
          { t: 'point', p: [0.5126, -2.9559], label: 'D', dx: 6, dy: 14 },
          { t: 'point', p: [-1.8261, -0.875], label: 'P', dx: 4, dy: 15 },
        ],
      },
      choices: ['$18$', '$6$', '$4$', '$10$'],
      answer: 2,
      solution:
        'Crossing chords make equal products, so $AP \\times PB = PC \\times PD = 6 \\times 12 = 72$. The two pieces add to $22$, so they are a pair with sum $22$ and product $72$; $72 = 4 \\times 18$ and $4 + 18 = 22$, so the pieces are $4$ cm and $18$ cm and the shorter is $4$ ✓. Check a second, independent way from the middle of the strip: with $M$ the midpoint of $AB$, the two pieces are $11 - MP$ and $11 + MP$, so their product is $121 - MP^2$. Setting $121 - MP^2 = 72$ gives $MP^2 = 49$ and $MP = 7$, so the shorter piece is $11 - 7 = 4$ ✓. (The choice $18$ is REPORTING THE LONGER PIECE ✗; the choice $6$ is COPYING $PC$, as though crossing chords cut each other into matching pieces ✗; the choice $10$ is SUBTRACTING $PD$ FROM THE WHOLE STRIP ✗.)',
    },
    {
      q: 'A perfectly circular pancake has two straight lines of chocolate drizzle across it. One line runs from $A$ to $B$ and is $15$ cm long; the other runs from $C$ to $D$. They cross at $P$, where $PC = 4$ cm and $PD = 9$ cm. How long is the shorter of the two pieces of the first line?',
      fig: {
        view: [-3.9, -3.9, 3.9, 3.9],
        alt: 'Chords AB and CD of a circle crossing at P, with AB marked 15 and the pieces PC and PD marked 4 and 9',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.8125, -1.044], b: [2.8125, -1.044] },
          { t: 'seg', a: [-1.5947, -2.5411], b: [-1.8964, 2.3246] },
          { t: 'label', p: [1.0, -1.044], text: '15', dy: 17 },
          { t: 'label', p: [-2.25, -1.044], text: '?', dy: -11 },
          { t: 'label', p: [-1.6411, -1.7926], text: '4', dx: -12 },
          { t: 'label', p: [-1.7919, 0.6403], text: '9', dx: 12 },
          { t: 'point', p: [-2.8125, -1.044], label: 'A', dx: -13, dy: 4 },
          { t: 'point', p: [2.8125, -1.044], label: 'B', dx: 13, dy: 2 },
          { t: 'point', p: [-1.5947, -2.5411], label: 'C', dx: -2, dy: 15 },
          { t: 'point', p: [-1.8964, 2.3246], label: 'D', dx: -4, dy: -12 },
          { t: 'point', p: [-1.6875, -1.044], label: 'P', dx: 10, dy: 12 },
        ],
      },
      choices: ['$12$', '$4$', '$6$', '$3$'],
      answer: 3,
      solution:
        'The crossing point splits each line so that the two products match: $AP \\times PB = PC \\times PD = 4 \\times 9 = 36$. The two pieces add to $15$, so they are a pair with sum $15$ and product $36$; $36 = 3 \\times 12$ and $3 + 12 = 15$, so the pieces are $3$ cm and $12$ cm and the shorter is $3$ ✓. Check a second, independent way through the midpoint $M$ of $AB$: the pieces are $7.5 - MP$ and $7.5 + MP$, whose product is $56.25 - MP^2$. Setting that equal to $36$ gives $MP^2 = 20.25$ and $MP = 4.5$, so the shorter piece is $7.5 - 4.5 = 3$ ✓. (The choice $12$ is REPORTING THE LONGER PIECE ✗; the choice $4$ is COPYING $PC$, as though crossing chords cut each other into matching pieces ✗; the choice $6$ is SUBTRACTING $PD$ FROM THE WHOLE LINE ✗.)',
    },
  ],

  // slot 2 — two secants from one outside point, near piece unknown.
  // Lane: 15 and (x+1, 12) -> 13 / 16 and (x+1, 9) -> 2 / 25 and (x+7, 4) -> 11.
  [
    {
      q: 'Two straight garden hoses are pulled out from the same tap at $P$ and stretched across a circular lawn. The first crosses the edge of the lawn at $A$ and leaves it at $B$, with $PA = x$ and $AB = 15$ m. The second enters at $C$ and leaves at $D$, with $PC = x + 1$ and $CD = 12$ m. What is $x$?',
      fig: {
        view: [-6.6, -3.9, 3.9, 3.9],
        alt: 'Two secants from an outside point P, one through A and B marked x and 15, the other through C and D marked x plus 1 and 12',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-5.6347, 0], b: [0.7321, 2.9093] },
          { t: 'seg', a: [-5.6347, 0], b: [0.1331, -2.997] },
          { t: 'label', p: [-4.1567, 0.6754], text: 'x', dx: -4, dy: -10 },
          { t: 'label', p: [-0.9733, 2.13], text: '15', dx: -6, dy: -12 },
          { t: 'label', p: [-4.0819, -0.8069], text: 'x + 1', dx: -6, dy: 13 },
          { t: 'label', p: [-1.198, -2.3054], text: '12', dx: -8, dy: 13 },
          { t: 'point', p: [-5.6347, 0], label: 'P', dx: -13, dy: 4 },
          { t: 'point', p: [-2.6787, 1.3508], label: 'A', dx: -8, dy: -10 },
          { t: 'point', p: [0.7321, 2.9093], label: 'B', dx: 6, dy: -11 },
          { t: 'point', p: [-2.529, -1.6138], label: 'C', dx: -10, dy: 8 },
          { t: 'point', p: [0.1331, -2.997], label: 'D', dx: 4, dy: 15 },
        ],
      },
      choices: ['$13$', '$4$', '$14$', '$28$'],
      answer: 0,
      solution:
        'From one outside point, each straight line across the circle gives the same product of near piece times whole length: $x(x + 15) = (x + 1)(x + 13)$, since the second hose reaches $PD = (x + 1) + 12 = x + 13$. Expanding, $x^2 + 15x = x^2 + 14x + 13$, so $x = 13$ ✓. Check a second, independent way by writing each product as a square minus a square: $x(x + 15) = (x + 7.5)^2 - 56.25$ and $(x + 1)(x + 13) = (x + 7)^2 - 36$. Setting these equal gives $(x + 7.5)^2 - (x + 7)^2 = 20.25$, and the left side factors as $(2x + 14.5)(0.5)$, so $x + 7.25 = 20.25$ and $x = 13$ ✓ (then $13 \\times 28 = 364$ and $14 \\times 26 = 364$, which match). (The choice $4$ is MULTIPLYING THE NEAR PIECE BY THE CHORD INSTEAD OF THE WHOLE LINE, from $15x = 12(x + 1)$ ✗; the choice $14$ is REPORTING THE SECOND HOSE’S NEAR PIECE ✗; the choice $28$ is REPORTING THE FIRST HOSE’S WHOLE LENGTH ✗.)',
    },
    {
      q: 'Two straight ski tracks set off from the same hut at $P$ and run across a round frozen lake. The first meets the shore at $A$ and leaves at $B$, with $PA = x$ and $AB = 16$ m. The second meets the shore at $C$ and leaves at $D$, with $PC = x + 1$ and $CD = 9$ m. What is $x$?',
      fig: {
        view: [-4.6, -3.9, 3.9, 3.9],
        alt: 'Two secants from an outside point P, one through A and B marked x and 16, the other through C and D marked x plus 1 and 9',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3.6056, 0], b: [1.9415, 2.2871] },
          { t: 'seg', a: [-3.6056, 0], b: [-0.8321, -2.8823] },
          { t: 'label', p: [-3.2974, 0.127], text: 'x', dx: -6, dy: -9 },
          { t: 'label', p: [-0.5239, 1.2706], text: '16', dx: -4, dy: -12 },
          { t: 'label', p: [-3.2589, -0.3603], text: 'x + 1', dx: -6, dy: 14 },
          { t: 'label', p: [-1.8722, -1.8015], text: '9', dx: -12, dy: 4 },
          { t: 'point', p: [-3.6056, 0], label: 'P', dx: -13, dy: 4 },
          { t: 'point', p: [-2.9892, 0.2541], label: 'A', dx: -6, dy: -11 },
          { t: 'point', p: [1.9415, 2.2871], label: 'B', dx: 10, dy: -8 },
          { t: 'point', p: [-2.9122, -0.7206], label: 'C', dx: -11, dy: 6 },
          { t: 'point', p: [-0.8321, -2.8823], label: 'D', dx: 2, dy: 15 },
        ],
      },
      choices: ['$18$', '$12$', '$2$', '$3$'],
      answer: 2,
      solution:
        'Both tracks start at the same outside point, so near piece times whole length is the same for each: $x(x + 16) = (x + 1)(x + 10)$, because the second track reaches $PD = (x + 1) + 9 = x + 10$. Expanding, $x^2 + 16x = x^2 + 11x + 10$, so $5x = 10$ and $x = 2$ ✓. Check a second, independent way by turning each product into a square minus a square: $x(x + 16) = (x + 8)^2 - 64$ and $(x + 1)(x + 10) = (x + 5.5)^2 - 20.25$. Equating them gives $(x + 8)^2 - (x + 5.5)^2 = 43.75$, and the left side factors as $(2x + 13.5)(2.5)$, so $2x + 13.5 = 17.5$ and $x = 2$ ✓ (then $2 \\times 18 = 36$ and $3 \\times 12 = 36$, which match). (The choice $18$ is REPORTING THE FIRST TRACK’S WHOLE LENGTH ✗; the choice $12$ is REPORTING THE SECOND TRACK’S WHOLE LENGTH ✗; the choice $3$ is REPORTING THE SECOND TRACK’S NEAR PIECE ✗.)',
    },
    {
      q: 'Two straight ant trails lead away from the same crumb at $P$ and cross a round plate. The first reaches the rim at $A$ and leaves it at $B$, with $PA = x$ and $AB = 25$ mm. The second reaches the rim at $C$ and leaves at $D$, with $PC = x + 7$ and $CD = 4$ mm. What is $x$?',
      fig: {
        view: [-6.5, -3.9, 3.9, 3.9],
        alt: 'Two secants from an outside point P, one through A and B marked x and 25, the other through C and D marked x plus 7 and 4',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-5.4853, 0], b: [2.7281, 1.248] },
          { t: 'seg', a: [-5.4853, 0], b: [-1.2136, -2.7436] },
          { t: 'label', p: [-4.2305, 0.1907], text: 'x', dx: -4, dy: -10 },
          { t: 'label', p: [-0.1238, 0.8147], text: '25', dx: -2, dy: -12 },
          { t: 'label', p: [-3.7378, -1.1224], text: 'x + 7', dx: -4, dy: 14 },
          { t: 'label', p: [-1.6019, -2.4942], text: '4', dx: -13, dy: 2 },
          { t: 'point', p: [-5.4853, 0], label: 'P', dx: -13, dy: 4 },
          { t: 'point', p: [-2.9757, 0.3813], label: 'A', dx: -6, dy: -11 },
          { t: 'point', p: [2.7281, 1.248], label: 'B', dx: 12, dy: -6 },
          { t: 'point', p: [-1.9902, -2.2448], label: 'C', dx: -12, dy: -2 },
          { t: 'point', p: [-1.2136, -2.7436], label: 'D', dx: 6, dy: 14 },
        ],
      },
      choices: ['$36$', '$18$', '$4$', '$11$'],
      answer: 3,
      solution:
        'Each trail starts at the same outside point, so near piece times whole length matches: $x(x + 25) = (x + 7)(x + 11)$, because the second trail reaches $PD = (x + 7) + 4 = x + 11$. Expanding, $x^2 + 25x = x^2 + 18x + 77$, so $7x = 77$ and $x = 11$ ✓. Check a second, independent way by writing both products as a square minus a square: $x(x + 25) = (x + 12.5)^2 - 156.25$ and $(x + 7)(x + 11) = (x + 9)^2 - 4$. Equating gives $(x + 12.5)^2 - (x + 9)^2 = 152.25$, and the left side factors as $(2x + 21.5)(3.5)$, so $2x + 21.5 = 43.5$ and $x = 11$ ✓ (then $11 \\times 36 = 396$ and $18 \\times 22 = 396$, which match). (The choice $36$ is REPORTING THE FIRST TRAIL’S WHOLE LENGTH ✗; the choice $18$ is REPORTING THE SECOND TRAIL’S NEAR PIECE ✗; the choice $4$ is COPYING THE SECOND TRAIL’S PIECE INSIDE THE PLATE ✗.)',
    },
  ],

  // slot 3 — tangent length from the distance to the center and the radius.
  // Lane: r 21, d 35 -> 28 / r 9, d 41 -> 40 / r 12, d 37 -> 35.
  [
    {
      q: 'A drone hovers at a point $P$ that is $35$ m from the center $O$ of a circular no-fly ring of radius $21$ m. A straight guide beam runs from the drone and just grazes the ring at the single point $T$. How long is the beam $PT$?',
      fig: {
        view: [-3.9, -3.9, 6.1, 3.9],
        alt: 'Circle with center O, an outside point P, and the tangent segment PT with a right angle at T',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0, 0], b: [1.8, 2.4] },
          { t: 'seg', a: [0, 0], b: [5, 0] },
          { t: 'seg', a: [1.8, 2.4], b: [5, 0] },
          { t: 'right', at: [1.8, 2.4], from: [0, 0], to: [5, 0], s: 0.45 },
          { t: 'label', p: [0.9, 1.2], text: '21', dx: -13, dy: -2 },
          { t: 'label', p: [2.5, 0], text: '35', dy: 17 },
          { t: 'label', p: [3.4, 1.2], text: '?', dx: 11, dy: -2 },
          { t: 'point', p: [0, 0], label: 'O', dx: -6, dy: 15 },
          { t: 'point', p: [1.8, 2.4], label: 'T', dx: -2, dy: -13 },
          { t: 'point', p: [5, 0], label: 'P', dx: 13, dy: 5 },
        ],
      },
      choices: ['$14$', '$56$', '$784$', '$28$'],
      answer: 3,
      solution:
        'A radius drawn to a touching point meets the grazing line at a right angle, so triangle $OTP$ has its right angle at $T$, with hypotenuse $OP = 35$ and leg $OT = 21$. Then $PT = \\sqrt{35^2 - 21^2} = \\sqrt{1225 - 441} = \\sqrt{784} = 28$ ✓. Check a second, independent way with the power of the point: send a line from $P$ straight through the center. It reaches the ring at distance $35 - 21 = 14$ and again at distance $35 + 21 = 56$, and the tangent length squared equals that product: $PT^2 = 14 \\times 56 = 784$, so $PT = 28$ ✓. (The choice $14$ is SUBTRACTING THE RADIUS FROM THE DISTANCE ✗; the choice $56$ is ADDING THE RADIUS TO THE DISTANCE ✗; the choice $784$ is FORGETTING THE SQUARE ROOT ✗.)',
    },
    {
      q: 'A ship sits at a point $P$ that is $41$ km from the center $O$ of a circular reef of radius $9$ km. The lookout’s straight sightline from the ship just brushes the edge of the reef at the single point $T$. How long is $PT$?',
      fig: {
        view: [-3.1, -3.1, 11.1, 3.1],
        alt: 'Circle with center O, an outside point P, and the tangent segment PT with a right angle at T',
        elems: [
          { t: 'circle', c: [0, 0], r: 2.2 },
          { t: 'seg', a: [0, 0], b: [0.4829, 2.1463] },
          { t: 'seg', a: [0, 0], b: [10.0222, 0] },
          { t: 'seg', a: [0.4829, 2.1463], b: [10.0222, 0] },
          { t: 'right', at: [0.4829, 2.1463], from: [0, 0], to: [10.0222, 0], s: 0.35 },
          { t: 'label', p: [0.2415, 1.0732], text: '9', dx: -12, dy: -2 },
          { t: 'label', p: [5.0111, 0], text: '41', dy: 17 },
          { t: 'label', p: [5.2526, 1.0732], text: '?', dx: 4, dy: -11 },
          { t: 'point', p: [0, 0], label: 'O', dx: -8, dy: 13 },
          { t: 'point', p: [0.4829, 2.1463], label: 'T', dx: -3, dy: -12 },
          { t: 'point', p: [10.0222, 0], label: 'P', dx: 13, dy: 5 },
        ],
      },
      choices: ['$40$', '$32$', '$50$', '$1600$'],
      answer: 0,
      solution:
        'The radius to a touching point is perpendicular to the sightline, so triangle $OTP$ is right-angled at $T$ with hypotenuse $OP = 41$ and leg $OT = 9$. Then $PT = \\sqrt{41^2 - 9^2} = \\sqrt{1681 - 81} = \\sqrt{1600} = 40$ ✓. Check a second, independent way with the power of the point: a line from $P$ through the center meets the reef at distance $41 - 9 = 32$ and again at $41 + 9 = 50$, and $PT^2$ equals that product: $32 \\times 50 = 1600$, so $PT = 40$ ✓. (The choice $32$ is SUBTRACTING THE RADIUS FROM THE DISTANCE ✗; the choice $50$ is ADDING THE RADIUS TO THE DISTANCE ✗; the choice $1600$ is FORGETTING THE SQUARE ROOT ✗.)',
    },
    {
      q: 'A spider waits at a point $P$ that is $37$ cm from the center $O$ of a round mirror of radius $12$ cm. It pulls a straight silk thread from itself to the mirror so that the thread just touches the rim at the single point $T$. How long is the thread $PT$?',
      fig: {
        view: [-3.9, -3.9, 10.3, 3.9],
        alt: 'Circle with center O, an outside point P, and the tangent segment PT with a right angle at T',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0, 0], b: [0.973, 2.8378] },
          { t: 'seg', a: [0, 0], b: [9.25, 0] },
          { t: 'seg', a: [0.973, 2.8378], b: [9.25, 0] },
          { t: 'right', at: [0.973, 2.8378], from: [0, 0], to: [9.25, 0], s: 0.45 },
          { t: 'label', p: [0.4865, 1.4189], text: '12', dx: -13, dy: -2 },
          { t: 'label', p: [4.625, 0], text: '37', dy: 17 },
          { t: 'label', p: [5.1115, 1.4189], text: '?', dx: 5, dy: -11 },
          { t: 'point', p: [0, 0], label: 'O', dx: -8, dy: 14 },
          { t: 'point', p: [0.973, 2.8378], label: 'T', dx: -3, dy: -12 },
          { t: 'point', p: [9.25, 0], label: 'P', dx: 13, dy: 5 },
        ],
      },
      choices: ['$49$', '$35$', '$25$', '$1225$'],
      answer: 1,
      solution:
        'The radius drawn to the touching point meets the thread at a right angle, so triangle $OTP$ is right-angled at $T$ with hypotenuse $OP = 37$ and leg $OT = 12$. Then $PT = \\sqrt{37^2 - 12^2} = \\sqrt{1369 - 144} = \\sqrt{1225} = 35$ ✓. Check a second, independent way with the power of the point: a line from $P$ through the center meets the mirror at distance $37 - 12 = 25$ and again at $37 + 12 = 49$, and $PT^2$ equals that product: $25 \\times 49 = 1225$, so $PT = 35$ ✓. (The choice $49$ is ADDING THE RADIUS TO THE DISTANCE ✗; the choice $25$ is SUBTRACTING THE RADIUS FROM THE DISTANCE ✗; the choice $1225$ is FORGETTING THE SQUARE ROOT ✗.)',
    },
  ],

  // slot 4 — a diameter and a second chord crossing on it; find the whole chord.
  // Lane: 28 with AP 4 and PC 6 -> 22 / 26 with AP 6 and PC 8 -> 23 / 22 with AP 4 and PC 8 -> 17.
  [
    {
      q: 'A circular running track has a straight path $AB$ laid right across its center, $28$ m long. A second straight path $CD$ crosses the first at a point $P$ with $AP = 4$ m, and the piece $PC$ measures $6$ m. How long is the whole path $CD$?',
      fig: {
        view: [-3.9, -3.9, 3.9, 3.9],
        alt: 'Diameter AB of a circle with center O and a chord CD crossing it at P',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-2.7857, 1.1135], b: [-0.4286, -2.9692] },
          { t: 'label', p: [1.6, 0], text: '28', dy: 17 },
          { t: 'label', p: [-2.5714, 0], text: '4', dy: -11 },
          { t: 'label', p: [-2.4643, 0.5568], text: '6', dx: -12 },
          { t: 'label', p: [-1.2857, -1.4846], text: '?', dx: 12 },
          { t: 'point', p: [-3, 0], label: 'A', dx: -13, dy: 4 },
          { t: 'point', p: [3, 0], label: 'B', dx: 13, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: -2, dy: 15 },
          { t: 'point', p: [-2.1429, 0], label: 'P', dx: 8, dy: 13 },
          { t: 'point', p: [-2.7857, 1.1135], label: 'C', dx: -12, dy: -4 },
          { t: 'point', p: [-0.4286, -2.9692], label: 'D', dx: 8, dy: 13 },
        ],
      },
      choices: ['$16$', '$28$', '$22$', '$12$'],
      answer: 2,
      solution:
        'The path $AB$ runs through the center, so it is $28$ m from edge to edge and $P$ divides it into $AP = 4$ and $PB = 28 - 4 = 24$. Two chords crossing inside a circle make equal products, so $PC \\times PD = 4 \\times 24 = 96$; with $PC = 6$ that gives $PD = 16$, and the whole path is $CD = 6 + 16 = 22$ m ✓. Check a second, independent way from the center: the radius is $14$ and $OP = 14 - 4 = 10$, so the product at $P$ is $14^2 - 10^2 = 196 - 100 = 96$, the same number; dividing by $6$ gives $PD = 16$ and $CD = 22$ ✓. (The choice $16$ is REPORTING ONLY THE FAR PIECE $PD$ ✗; the choice $28$ is COPYING THE PATH THROUGH THE CENTER ✗; the choice $12$ is ASSUMING $P$ IS THE MIDDLE OF $CD$ and doubling $PC$ ✗.)',
    },
    {
      q: 'A round window of diameter $26$ cm has a straight glazing bar $AB$ across its center. A second straight bar $CD$ crosses the first at a point $P$ with $AP = 6$ cm, and the piece $PC$ measures $8$ cm. How long is the whole bar $CD$?',
      fig: {
        view: [-3.9, -3.9, 3.9, 3.9],
        alt: 'Diameter AB of a circle with center O and a chord CD crossing it at P',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-2.5385, -1.5988], b: [0.1154, 2.9978] },
          { t: 'label', p: [1.6, 0], text: '26', dy: 17 },
          { t: 'label', p: [-2.3077, 0], text: '6', dy: -11 },
          { t: 'label', p: [-2.0769, -0.7994], text: '8', dx: -12 },
          { t: 'label', p: [-0.75, 1.4989], text: '?', dx: 12 },
          { t: 'point', p: [-3, 0], label: 'A', dx: -13, dy: 4 },
          { t: 'point', p: [3, 0], label: 'B', dx: 13, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: -2, dy: 15 },
          { t: 'point', p: [-1.6154, 0], label: 'P', dx: 9, dy: 12 },
          { t: 'point', p: [-2.5385, -1.5988], label: 'C', dx: -10, dy: 8 },
          { t: 'point', p: [0.1154, 2.9978], label: 'D', dx: 4, dy: -12 },
        ],
      },
      choices: ['$26$', '$23$', '$16$', '$15$'],
      answer: 1,
      solution:
        'The bar $AB$ passes through the center, so it stretches the full $26$ cm and $P$ cuts it into $AP = 6$ and $PB = 26 - 6 = 20$. Crossing chords give equal products, so $PC \\times PD = 6 \\times 20 = 120$; with $PC = 8$ that gives $PD = 15$, and $CD = 8 + 15 = 23$ cm ✓. Check a second, independent way from the center: the radius is $13$ and $OP = 13 - 6 = 7$, so the product at $P$ is $13^2 - 7^2 = 169 - 49 = 120$, the same number; dividing by $8$ gives $PD = 15$ and $CD = 23$ ✓. (The choice $26$ is COPYING THE BAR THROUGH THE CENTER ✗; the choice $16$ is ASSUMING $P$ IS THE MIDDLE OF $CD$ and doubling $PC$ ✗; the choice $15$ is REPORTING ONLY THE FAR PIECE $PD$ ✗.)',
    },
    {
      q: 'A circular birthday cake of diameter $22$ in has a straight ribbon $AB$ stretched across its center. A second straight ribbon $CD$ crosses the first at a point $P$ with $AP = 4$ in, and the piece $PC$ measures $8$ in. How long is the whole ribbon $CD$?',
      fig: {
        view: [-3.9, -3.9, 3.9, 3.9],
        alt: 'Diameter AB of a circle with center O and a chord CD crossing it at P',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-2.0649, 2.1762], b: [-1.7338, -2.4483] },
          { t: 'label', p: [1.6, 0], text: '22', dy: 17 },
          { t: 'label', p: [-2.4545, 0], text: '4', dy: -11 },
          { t: 'label', p: [-1.987, 1.0881], text: '8', dx: -12 },
          { t: 'label', p: [-1.8215, -1.2242], text: '?', dx: 12 },
          { t: 'point', p: [-3, 0], label: 'A', dx: -13, dy: 4 },
          { t: 'point', p: [3, 0], label: 'B', dx: 13, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: -2, dy: 15 },
          { t: 'point', p: [-1.9091, 0], label: 'P', dx: 10, dy: 11 },
          { t: 'point', p: [-2.0649, 2.1762], label: 'C', dx: -6, dy: -11 },
          { t: 'point', p: [-1.7338, -2.4483], label: 'D', dx: 4, dy: 15 },
        ],
      },
      choices: ['$17$', '$9$', '$16$', '$22$'],
      answer: 0,
      solution:
        'The ribbon $AB$ crosses the center, so it is the full $22$ in and $P$ splits it into $AP = 4$ and $PB = 22 - 4 = 18$. Crossing chords make equal products, so $PC \\times PD = 4 \\times 18 = 72$; with $PC = 8$ that gives $PD = 9$, and $CD = 8 + 9 = 17$ in ✓. Check a second, independent way from the center: the radius is $11$ and $OP = 11 - 4 = 7$, so the product at $P$ is $11^2 - 7^2 = 121 - 49 = 72$, the same number; dividing by $8$ gives $PD = 9$ and $CD = 17$ ✓. (The choice $9$ is REPORTING ONLY THE FAR PIECE $PD$ ✗; the choice $16$ is ASSUMING $P$ IS THE MIDDLE OF $CD$ and doubling $PC$ ✗; the choice $22$ is COPYING THE RIBBON THROUGH THE CENTER ✗.)',
    },
  ],

  // slot 5 — two equal tangents plus a secant from the same outside point.
  // Lane: 18 with PA 9 -> 27 / 12 with PA 4 -> 32 / 30 with PA 15 -> 45.
  [
    {
      q: 'Two straight guy wires run from a pole at $P$ and pull tight against a circular water tank, touching its wall at $T$ and at $S$. Each wire is $18$ m long. A straight pipe also leaves the pole, entering the tank wall at $A$ and leaving it at $B$, with $PA = 9$ m. How long is $AB$?',
      fig: {
        view: [-3.9, -3.9, 5.9, 3.9],
        alt: 'Two tangents from P touching a circle at T and S, plus a secant from P through A and B',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [4.6861, 0], b: [1.9206, 2.3047] },
          { t: 'seg', a: [4.6861, 0], b: [1.9206, -2.3047] },
          { t: 'seg', a: [4.6861, 0], b: [-2.2278, 2.0092] },
          { t: 'label', p: [3.3034, 1.1524], text: '18', dx: 11, dy: -4 },
          { t: 'label', p: [3.3034, -1.1524], text: '18', dx: 11, dy: 6 },
          { t: 'label', p: [3.8219, 0.2512], text: '9', dy: -12 },
          { t: 'label', p: [0.365, 1.2558], text: '?', dx: -4, dy: -12 },
          { t: 'point', p: [4.6861, 0], label: 'P', dx: 13, dy: 4 },
          { t: 'point', p: [1.9206, 2.3047], label: 'T', dx: 4, dy: -12 },
          { t: 'point', p: [1.9206, -2.3047], label: 'S', dx: 4, dy: 13 },
          { t: 'point', p: [2.9577, 0.5023], label: 'A', dx: 8, dy: 11 },
          { t: 'point', p: [-2.2278, 2.0092], label: 'B', dx: -12, dy: -4 },
        ],
      },
      choices: ['$36$', '$18$', '$45$', '$27$'],
      answer: 3,
      solution:
        'From an outside point, the tangent length squared equals the near piece times the whole length of any line across the circle: $PT^2 = PA \\times PB$, so $18^2 = 9 \\times PB$, giving $PB = \\frac{324}{9} = 36$ and $AB = 36 - 9 = 27$ m ✓. Check a second, independent way through the middle of the pipe’s wet part: let $h$ be half of $AB$ and let $M$ be the midpoint of $AB$, so $PM = 9 + h$ and $PA \\times PB = (PM - h)(PM + h) = PM^2 - h^2$. That reads $324 = (9 + h)^2 - h^2 = 81 + 18h$, so $18h = 243$, $h = 13.5$, and $AB = 2h = 27$ ✓. (The choice $36$ is REPORTING THE WHOLE PIPE $PB$ INSTEAD OF THE PART INSIDE ✗; the choice $18$ is COPYING THE WIRE LENGTH ✗; the choice $45$ is ADDING $PA$ TO $PB$ INSTEAD OF SUBTRACTING ✗.)',
    },
    {
      q: 'Two straight sightlines from a bench at $P$ just graze a circular hedge, touching it at $T$ and at $S$, and each sightline measures $12$ m. A straight gravel path also starts at the bench, entering the hedge at $A$ and leaving it at $B$, with $PA = 4$ m. How long is $AB$?',
      fig: {
        view: [-3.9, -3.9, 4.9, 3.9],
        alt: 'Two tangents from P touching a circle at T and S, plus a secant from P through A and B',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [3.6721, 0], b: [2.4509, 1.73] },
          { t: 'seg', a: [3.6721, 0], b: [2.4509, -1.73] },
          { t: 'seg', a: [3.6721, 0], b: [-2.4339, 1.7538] },
          { t: 'label', p: [3.0615, 0.865], text: '12', dx: 12, dy: -4 },
          { t: 'label', p: [3.0615, -0.865], text: '12', dx: 12, dy: 6 },
          { t: 'label', p: [3.3329, 0.0975], text: '4', dy: -12 },
          { t: 'label', p: [0.2799, 0.9744], text: '?', dx: -2, dy: -12 },
          { t: 'point', p: [3.6721, 0], label: 'P', dx: 13, dy: 4 },
          { t: 'point', p: [2.4509, 1.73], label: 'T', dx: 6, dy: -11 },
          { t: 'point', p: [2.4509, -1.73], label: 'S', dx: 6, dy: 12 },
          { t: 'point', p: [2.9937, 0.1949], label: 'A', dx: 6, dy: 13 },
          { t: 'point', p: [-2.4339, 1.7538], label: 'B', dx: -12, dy: -4 },
        ],
      },
      choices: ['$32$', '$36$', '$12$', '$40$'],
      answer: 0,
      solution:
        'The tangent length squared equals the near piece times the whole length of the crossing line: $PT^2 = PA \\times PB$, so $12^2 = 4 \\times PB$, giving $PB = \\frac{144}{4} = 36$ and $AB = 36 - 4 = 32$ m ✓. Check a second, independent way through the midpoint of the buried part: writing $h$ for half of $AB$, the midpoint $M$ has $PM = 4 + h$, and $PA \\times PB = PM^2 - h^2$. That reads $144 = (4 + h)^2 - h^2 = 16 + 8h$, so $8h = 128$, $h = 16$, and $AB = 2h = 32$ ✓. (The choice $36$ is REPORTING THE WHOLE PATH $PB$ INSTEAD OF THE PART INSIDE ✗; the choice $12$ is COPYING THE SIGHTLINE LENGTH ✗; the choice $40$ is ADDING $PA$ TO $PB$ INSTEAD OF SUBTRACTING ✗.)',
    },
    {
      q: 'Two straight ropes are stretched from a fence post at $P$ to a circular sandpit, touching its rim at $T$ and at $S$; each rope is $30$ ft long. A straight plank also runs from the post, crossing the rim at $A$ and again at $B$, with $PA = 15$ ft. How long is $AB$?',
      fig: {
        view: [-3.9, -3.9, 5.5, 3.9],
        alt: 'Two tangents from P touching a circle at T and S, plus a secant from P through A and B',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [4.2426, 0], b: [2.1213, 2.1213] },
          { t: 'seg', a: [4.2426, 0], b: [2.1213, -2.1213] },
          { t: 'seg', a: [4.2426, 0], b: [-1.0607, 2.8062] },
          { t: 'label', p: [3.182, 1.0607], text: '30', dx: 11, dy: -4 },
          { t: 'label', p: [3.182, -1.0607], text: '30', dx: 11, dy: 6 },
          { t: 'label', p: [3.5797, 0.3508], text: '15', dy: -13 },
          { t: 'label', p: [0.9281, 1.7539], text: '?', dx: 6, dy: -11 },
          { t: 'point', p: [4.2426, 0], label: 'P', dx: 13, dy: 4 },
          { t: 'point', p: [2.1213, 2.1213], label: 'T', dx: 6, dy: -11 },
          { t: 'point', p: [2.1213, -2.1213], label: 'S', dx: 6, dy: 12 },
          { t: 'point', p: [2.9168, 0.7016], label: 'A', dx: 11, dy: 6 },
          { t: 'point', p: [-1.0607, 2.8062], label: 'B', dx: -8, dy: -11 },
        ],
      },
      choices: ['$60$', '$75$', '$45$', '$30$'],
      answer: 2,
      solution:
        'The rope is tangent, so its length squared equals the near piece times the whole crossing line: $PT^2 = PA \\times PB$, so $30^2 = 15 \\times PB$, giving $PB = \\frac{900}{15} = 60$ and $AB = 60 - 15 = 45$ ft ✓. Check a second, independent way through the midpoint of the part over the sand: with $h$ for half of $AB$, the midpoint $M$ has $PM = 15 + h$ and $PA \\times PB = PM^2 - h^2$. That reads $900 = (15 + h)^2 - h^2 = 225 + 30h$, so $30h = 675$, $h = 22.5$, and $AB = 2h = 45$ ✓. (The choice $60$ is REPORTING THE WHOLE PLANK $PB$ INSTEAD OF THE PART OVER THE SAND ✗; the choice $75$ is ADDING $PA$ TO $PB$ INSTEAD OF SUBTRACTING ✗; the choice $30$ is COPYING THE ROPE LENGTH ✗.)',
    },
  ],

  // slot 6 — circular arch: find the height at a stated distance from the middle.
  // Lane: span 96 rise 36 at 30 -> 26 / span 80 rise 32 at 9 -> 31 / span 66 rise 9 at 25 -> 4.
  [
    {
      q: 'A stone viaduct arch is a circular arc that spans $96$ m along its base and rises $36$ m above the base at its middle. How high is the arch above the base at a point $30$ m sideways from the middle?',
      fig: {
        view: [-5.6, -1.4, 5.6, 4.4],
        alt: 'Circular arch on a base line, spanning 96 with a rise of 36, and a vertical measuring segment 30 from the middle',
        elems: [
          { t: 'arc', c: [0, -1.4], r: 5, from: 16.2602, to: 163.7398 },
          { t: 'seg', a: [-4.8, 0], b: [4.8, 0] },
          { t: 'seg', a: [0, 0], b: [0, 3.6], dash: true },
          { t: 'seg', a: [3, 0], b: [3, 2.6] },
          { t: 'label', p: [0, 0], text: '96', dy: 18 },
          { t: 'label', p: [0, 1.8], text: '36', dx: -13 },
          { t: 'label', p: [1.5, 0], text: '30', dy: -13 },
          { t: 'label', p: [3, 1.3], text: '?', dx: 12 },
        ],
      },
      choices: ['$40$', '$54$', '$26$', '$36$'],
      answer: 2,
      solution:
        'First find the circle. The vertical line down the middle of the arch is a diameter, and it cuts the base into two halves of $48$ m each, so the crossing-chords rule gives $48 \\times 48 = 36 \\times (2r - 36)$, that is $2304 = 72r - 1296$, so $72r = 3600$ and $r = 50$ m. The center therefore sits $50 - 36 = 14$ m below the base line, and the arch point $30$ m from the middle is $\\sqrt{50^2 - 30^2} = \\sqrt{1600} = 40$ m above the center, so it is $40 - 14 = 26$ m above the base ✓. Check a second, independent way at the foot of the measuring line: along the base line that foot is $48 - 30 = 18$ m from one end and $48 + 30 = 78$ m from the other, so the product there is $18 \\times 78 = 1404$. The vertical chord through the same foot is $2\\sqrt{50^2 - 30^2} = 80$ m long, so its two pieces $h$ and $80 - h$ satisfy $h(80 - h) = 1404$, giving $h = 26$ or $h = 54$; the arch never rises above $36$ m, so the height is $26$ ✓. (The choice $40$ is FORGETTING THAT THE CENTER SITS BELOW THE BASE LINE ✗; the choice $54$ is REPORTING THE PIECE BELOW THE BASE LINE ✗; the choice $36$ is COPYING THE RISE AT THE MIDDLE ✗.)',
    },
    {
      q: 'The mouth of a road tunnel is a circular arc that spans $80$ m across the road and rises $32$ m at its middle. How high is the tunnel at a point $9$ m sideways from the middle?',
      fig: {
        view: [-5.6, -1.4, 5.6, 4.6],
        alt: 'Circular arch on a base line, spanning 80 with a rise of 32, and a vertical measuring segment 9 from the middle',
        elems: [
          { t: 'arc', c: [0, -1.08], r: 4.92, from: 12.6804, to: 167.3196 },
          { t: 'seg', a: [-4.8, 0], b: [4.8, 0] },
          { t: 'seg', a: [0, 0], b: [0, 3.84], dash: true },
          { t: 'seg', a: [1.08, 0], b: [1.08, 3.72] },
          { t: 'label', p: [0, 0], text: '80', dy: 18 },
          { t: 'label', p: [0, 1.92], text: '32', dx: -13 },
          { t: 'label', p: [0.54, 0], text: '9', dy: -13 },
          { t: 'label', p: [1.08, 1.86], text: '?', dx: 12 },
        ],
      },
      choices: ['$49$', '$32$', '$40$', '$31$'],
      answer: 3,
      solution:
        'First find the circle. The vertical line through the middle is a diameter and it splits the span into halves of $40$ m, so $40 \\times 40 = 32 \\times (2r - 32)$, that is $1600 = 64r - 1024$, so $64r = 2624$ and $r = 41$ m. The center sits $41 - 32 = 9$ m below the road, and the arch point $9$ m from the middle stands $\\sqrt{41^2 - 9^2} = \\sqrt{1600} = 40$ m above the center, so its height is $40 - 9 = 31$ m ✓. Check a second, independent way at the foot of the measuring line: along the road that foot is $40 - 9 = 31$ m from one side and $40 + 9 = 49$ m from the other, so the product there is $31 \\times 49 = 1519$. The vertical chord through that foot is $2\\sqrt{41^2 - 9^2} = 80$ m long, so its pieces $h$ and $80 - h$ satisfy $h(80 - h) = 1519$, giving $h = 31$ or $h = 49$; the tunnel never rises above $32$ m, so the height is $31$ ✓. (The choice $49$ is REPORTING THE PIECE BELOW THE ROAD ✗; the choice $32$ is COPYING THE RISE AT THE MIDDLE ✗; the choice $40$ is FORGETTING THAT THE CENTER SITS BELOW THE ROAD ✗.)',
    },
    {
      q: 'A low arch in a garden wall carries a path over a stream. It is a circular arc spanning $66$ cm along the wall and rising just $9$ cm at its middle. How high is the arch at a point $25$ cm sideways from the middle?',
      fig: {
        view: [-5.8, -1.6, 5.8, 3.0],
        alt: 'Wide flat circular arch on a base line, spanning 66 with a rise of 9, and a vertical measuring segment 25 from the middle',
        elems: [
          { t: 'arc', c: [0, -8.4], r: 9.75, from: 59.4898, to: 120.5102 },
          { t: 'seg', a: [-4.95, 0], b: [4.95, 0] },
          { t: 'seg', a: [0, 0], b: [0, 1.35], dash: true },
          { t: 'seg', a: [3.75, 0], b: [3.75, 0.6] },
          { t: 'label', p: [0, 0], text: '66', dy: 18 },
          { t: 'label', p: [0, 0.675], text: '9', dx: -11 },
          { t: 'label', p: [1.875, 0], text: '25', dy: -13 },
          { t: 'label', p: [3.75, 0.3], text: '?', dx: 12 },
        ],
      },
      choices: ['$60$', '$4$', '$116$', '$9$'],
      answer: 1,
      solution:
        'First find the circle. The vertical line through the middle is a diameter cutting the span into halves of $33$ cm, so $33 \\times 33 = 9 \\times (2r - 9)$, that is $1089 = 18r - 81$, so $18r = 1170$ and $r = 65$ cm. The center lies $65 - 9 = 56$ cm below the base, and the arch point $25$ cm from the middle is $\\sqrt{65^2 - 25^2} = \\sqrt{3600} = 60$ cm above the center, so its height is $60 - 56 = 4$ cm ✓. Check a second, independent way at the foot of the measuring line: along the base that foot is $33 - 25 = 8$ cm from one end and $33 + 25 = 58$ cm from the other, so the product there is $8 \\times 58 = 464$. The vertical chord through that foot is $2\\sqrt{65^2 - 25^2} = 120$ cm long, so its pieces $h$ and $120 - h$ satisfy $h(120 - h) = 464$, giving $h = 4$ or $h = 116$; the arch never rises above $9$ cm, so the height is $4$ ✓. (The choice $60$ is FORGETTING THAT THE CENTER SITS BELOW THE BASE ✗; the choice $116$ is REPORTING THE PIECE BELOW THE BASE ✗; the choice $9$ is COPYING THE RISE AT THE MIDDLE ✗.)',
    },
  ],

  // slot 7 — two circles meeting at A and B; the common chord carries the power.
  // Lane: PB 6, BA 16, PX 4 -> 29 / PB 5, BA 10, PX 3 -> 22 / PB 6, BA 14, PX 5 -> 19.
  [
    {
      q: 'Two circular rugs overlap on a floor, their edges crossing at $A$ and at $B$. A tack sits at a point $P$ on the line through $A$ and $B$, past $B$, with $PB = 6$ cm and $BA = 16$ cm. A straight thread from the tack crosses the edge of the left rug at $X$ and again at $Y$, with $PX = 4$ cm. How long is $XY$?',
      fig: {
        view: [-5.7, -3.5, 4.6, 3.5],
        alt: 'Two overlapping circles meeting at A and B, with P on line AB beyond B and a secant from P through X and Y',
        elems: [
          { t: 'circle', c: [1.6, 0], r: 2.049 },
          { t: 'circle', c: [-2.24, 0], r: 2.5799 },
          { t: 'seg', a: [0, -2.24], b: [0, 1.28] },
          { t: 'seg', a: [0, -2.24], b: [-4.8186, -0.0815] },
          { t: 'label', p: [0, -1.76], text: '6', dx: 10 },
          { t: 'label', p: [0, 0], text: '16', dx: 12 },
          { t: 'label', p: [-0.292, -2.1092], text: '4', dx: -2, dy: 14 },
          { t: 'label', p: [-2.7014, -1.03], text: '?', dx: -4, dy: 14 },
          { t: 'point', p: [0, 1.28], label: 'A', dx: 9, dy: -6 },
          { t: 'point', p: [0, -1.28], label: 'B', dx: 10, dy: 6 },
          { t: 'point', p: [0, -2.24], label: 'P', dx: 8, dy: 12 },
          { t: 'point', p: [-0.5841, -1.9784], label: 'X', dx: 2, dy: 15 },
          { t: 'point', p: [-4.8186, -0.0815], label: 'Y', dx: -12, dy: 4 },
        ],
      },
      choices: ['$29$', '$33$', '$37$', '$22$'],
      answer: 0,
      solution:
        'The line through $A$ and $B$ is a chord of the left rug, so from the tack it gives the product $PB \\times PA = 6 \\times (6 + 16) = 6 \\times 22 = 132$. The thread is another line from the same point across the same rug, so it gives the same product: $PX \\times PY = 132$, hence $PY = \\frac{132}{4} = 33$ and $XY = 33 - 4 = 29$ cm ✓. Check a second, independent way with similar triangles: $A$, $B$, $X$, and $Y$ all sit on the left rug’s edge, and $X$ and $A$ are opposite corners of the cyclic quadrilateral they form, so their angles add to $180^\\circ$. Since $P$ lies beyond $X$ on the thread, $\\angle PXB$ is the supplement of the corner at $X$, so $\\angle PXB = \\angle PAY$; with the angle at $P$ shared, triangles $PXB$ and $PAY$ are similar, giving $\\frac{PX}{PA} = \\frac{PB}{PY}$, so $PY = \\frac{22 \\times 6}{4} = 33$ and $XY = 29$ ✓. (The choice $33$ is REPORTING THE WHOLE THREAD $PY$ ✗; the choice $37$ is ADDING $PX$ TO $PY$ INSTEAD OF SUBTRACTING ✗; the choice $22$ is COPYING THE DISTANCE $PA$ ✗.)',
    },
    {
      q: 'Two circular spotlights overlap on a stage floor, their rims crossing at $A$ and at $B$. A prop stands at a point $P$ on the line through $A$ and $B$, past $B$, with $PB = 5$ ft and $BA = 10$ ft. A straight chalk line from the prop crosses the rim of the left spotlight at $X$ and again at $Y$, with $PX = 3$ ft. How long is $XY$?',
      fig: {
        view: [-6.0, -3.6, 4.8, 3.6],
        alt: 'Two overlapping circles meeting at A and B, with P on line AB beyond B and a secant from P through X and Y',
        elems: [
          { t: 'circle', c: [1.76, 0], r: 2.0755 },
          { t: 'circle', c: [-2.42, 0], r: 2.6583 },
          { t: 'seg', a: [0, -2.2], b: [0, 1.1] },
          { t: 'seg', a: [0, -2.2], b: [-5.0769, -0.0846] },
          { t: 'label', p: [0, -1.65], text: '5', dx: 10 },
          { t: 'label', p: [0, 0], text: '10', dx: 12 },
          { t: 'label', p: [-0.3046, -2.0731], text: '3', dx: -2, dy: 14 },
          { t: 'label', p: [-2.843, -1.0154], text: '?', dx: -4, dy: 14 },
          { t: 'point', p: [0, 1.1], label: 'A', dx: 9, dy: -6 },
          { t: 'point', p: [0, -1.1], label: 'B', dx: 10, dy: 6 },
          { t: 'point', p: [0, -2.2], label: 'P', dx: 8, dy: 12 },
          { t: 'point', p: [-0.6092, -1.9462], label: 'X', dx: 2, dy: 15 },
          { t: 'point', p: [-5.0769, -0.0846], label: 'Y', dx: -12, dy: 4 },
        ],
      },
      choices: ['$25$', '$15$', '$28$', '$22$'],
      answer: 3,
      solution:
        'The line through $A$ and $B$ is a chord of the left spotlight, so from the prop it gives the product $PB \\times PA = 5 \\times (5 + 10) = 5 \\times 15 = 75$. The chalk line is another line from the same point across the same rim, so it gives the same product: $PX \\times PY = 75$, hence $PY = \\frac{75}{3} = 25$ and $XY = 25 - 3 = 22$ ft ✓. Check a second, independent way with similar triangles: $A$, $B$, $X$, $Y$ all lie on that rim, and $X$ and $A$ are opposite corners of the cyclic quadrilateral they make, so their angles are supplementary. As $P$ lies beyond $X$ on the chalk line, $\\angle PXB$ is the supplement of the corner at $X$ and therefore equals $\\angle PAY$; sharing the angle at $P$, triangles $PXB$ and $PAY$ are similar, so $\\frac{PX}{PA} = \\frac{PB}{PY}$ and $PY = \\frac{15 \\times 5}{3} = 25$, leaving $XY = 22$ ✓. (The choice $25$ is REPORTING THE WHOLE CHALK LINE $PY$ ✗; the choice $15$ is COPYING THE DISTANCE $PA$ ✗; the choice $28$ is ADDING $PX$ TO $PY$ INSTEAD OF SUBTRACTING ✗.)',
    },
    {
      q: 'Two circular cookie-cutter marks overlap in rolled dough, their outlines crossing at $A$ and at $B$. A currant sits at a point $P$ on the line through $A$ and $B$, past $B$, with $PB = 6$ cm and $BA = 14$ cm. A straight knife score from the currant crosses the left outline at $X$ and again at $Y$, with $PX = 5$ cm. How long is $XY$?',
      fig: {
        view: [-4.7, -3.5, 5.8, 3.5],
        alt: 'Two overlapping circles meeting at A and B, with P on line AB beyond B and a secant from P through X and Y',
        elems: [
          { t: 'circle', c: [2.2, 0], r: 2.6077 },
          { t: 'circle', c: [-1.6, 0], r: 2.126 },
          { t: 'seg', a: [0, -2.6], b: [0, 1.4] },
          { t: 'seg', a: [0, -2.6], b: [-3.6671, 0.4972] },
          { t: 'label', p: [0, -2.0], text: '6', dx: 10 },
          { t: 'label', p: [0, 0], text: '14', dx: 12 },
          { t: 'label', p: [-0.382, -2.2774], text: '5', dx: -2, dy: 14 },
          { t: 'label', p: [-2.2156, -0.7288], text: '?', dx: -6, dy: 12 },
          { t: 'point', p: [0, 1.4], label: 'A', dx: 9, dy: -6 },
          { t: 'point', p: [0, -1.4], label: 'B', dx: 10, dy: 6 },
          { t: 'point', p: [0, -2.6], label: 'P', dx: 8, dy: 12 },
          { t: 'point', p: [-0.764, -1.9548], label: 'X', dx: 2, dy: 15 },
          { t: 'point', p: [-3.6671, 0.4972], label: 'Y', dx: -12, dy: -2 },
        ],
      },
      choices: ['$24$', '$19$', '$29$', '$20$'],
      answer: 1,
      solution:
        'The line through $A$ and $B$ is a chord of the left mark, so from the currant it gives the product $PB \\times PA = 6 \\times (6 + 14) = 6 \\times 20 = 120$. The knife score is another line from the same point across the same outline, so it gives the same product: $PX \\times PY = 120$, hence $PY = \\frac{120}{5} = 24$ and $XY = 24 - 5 = 19$ cm ✓. Check a second, independent way with similar triangles: $A$, $B$, $X$, $Y$ all lie on the left outline, and $X$ and $A$ are opposite corners of the cyclic quadrilateral they form, so their angles are supplementary. Because $P$ lies beyond $X$ on the score, $\\angle PXB$ is the supplement of the corner at $X$ and equals $\\angle PAY$; with the angle at $P$ shared, triangles $PXB$ and $PAY$ are similar, so $\\frac{PX}{PA} = \\frac{PB}{PY}$ and $PY = \\frac{20 \\times 6}{5} = 24$, leaving $XY = 19$ ✓. (The choice $24$ is REPORTING THE WHOLE SCORE $PY$ ✗; the choice $29$ is ADDING $PX$ TO $PY$ INSTEAD OF SUBTRACTING ✗; the choice $20$ is COPYING THE DISTANCE $PA$ ✗.)',
    },
  ],

  // slot 8 — a secant with a known chord and a tangent a fixed amount longer.
  // Lane: chord 24, gap 10 -> 35 / chord 11, gap 5 -> 30 / chord 21, gap 9 -> 36.
  [
    {
      q: 'A straight cable runs from a post at $P$ and just touches the wall of a round water tower at $T$. A straight walkway also leaves the post, crossing the tower wall at $A$ and again at $B$, with $AB = 24$ m. The cable is exactly $10$ m longer than $PA$. How long is the cable $PT$?',
      fig: {
        view: [-3.9, -3.9, 7.5, 3.9],
        alt: 'Tangent PT and secant through A and B from an outside point P, with AB marked 24',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [6.5596, 0], b: [1.372, 2.6679] },
          { t: 'seg', a: [6.5596, 0], b: [-1.118, -2.7839] },
          { t: 'label', p: [3.9658, 1.334], text: '?', dx: 10, dy: -4 },
          { t: 'label', p: [0.7623, -2.1022], text: '24', dx: -4, dy: 15 },
          { t: 'point', p: [6.5596, 0], label: 'P', dx: 13, dy: 4 },
          { t: 'point', p: [1.372, 2.6679], label: 'T', dx: 2, dy: -13 },
          { t: 'point', p: [2.6425, -1.4204], label: 'A', dx: 11, dy: 6 },
          { t: 'point', p: [-1.118, -2.7839], label: 'B', dx: -11, dy: 4 },
        ],
      },
      choices: ['$25$', '$35$', '$49$', '$37$'],
      answer: 1,
      solution:
        'Write $t$ for the cable length $PT$. Then $PA = t - 10$ and $PB = PA + 24 = t + 14$. The tangent rule says $PT^2 = PA \\times PB$, so $t^2 = (t - 10)(t + 14) = t^2 + 4t - 140$, giving $4t = 140$ and $t = 35$ m ✓. Check a second, independent way by taking $PA^2$ off both sides first: $PT^2 - PA^2 = PA \\times PB - PA^2 = PA(PB - PA) = PA \\times 24$, while the left side factors as $(PT - PA)(PT + PA) = 10(PT + PA)$. So $10(PT + PA) = 24\\,PA$, that is $10\\,PT = 14\\,PA$ and $PT = 1.4\\,PA$; together with $PT = PA + 10$ this gives $0.4\\,PA = 10$, so $PA = 25$ and $PT = 35$ ✓ (and $25 \\times 49 = 1225 = 35^2$). (The choice $25$ is REPORTING $PA$ INSTEAD OF THE CABLE ✗; the choice $49$ is REPORTING THE WHOLE WALKWAY $PB$ ✗; the choice $37$ is AVERAGING $PA$ AND $PB$ instead of using their product ✗.)',
    },
    {
      q: 'A straight fence runs from a gate at $P$ and just brushes a round hay bale at $T$. A straight furrow also starts at the gate, crossing the edge of the bale at $A$ and again at $B$, with $AB = 11$ m. The fence is exactly $5$ m longer than $PA$. How long is the fence $PT$?',
      fig: {
        view: [-3.9, -3.9, 7.3, 3.9],
        alt: 'Tangent PT and secant through A and B from an outside point P, with AB marked 11',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [6.375, 0], b: [1.4118, 2.6471] },
          { t: 'seg', a: [6.375, 0], b: [0.3199, -2.9829] },
          { t: 'label', p: [3.8934, 1.3236], text: '?', dx: 10, dy: -4 },
          { t: 'label', p: [1.245, -2.5272], text: '11', dx: -12, dy: 4 },
          { t: 'point', p: [6.375, 0], label: 'P', dx: 13, dy: 4 },
          { t: 'point', p: [1.4118, 2.6471], label: 'T', dx: 2, dy: -13 },
          { t: 'point', p: [2.17, -2.0715], label: 'A', dx: 12, dy: 2 },
          { t: 'point', p: [0.3199, -2.9829], label: 'B', dx: 2, dy: 15 },
        ],
      },
      choices: ['$25$', '$16$', '$30$', '$36$'],
      answer: 2,
      solution:
        'Write $t$ for the fence length $PT$. Then $PA = t - 5$ and $PB = PA + 11 = t + 6$. The tangent rule gives $t^2 = (t - 5)(t + 6) = t^2 + t - 30$, so $t = 30$ m ✓. Check a second, independent way by subtracting $PA^2$ from both sides: $PT^2 - PA^2 = PA(PB - PA) = PA \\times 11$, and the left side factors as $(PT - PA)(PT + PA) = 5(PT + PA)$. So $5(PT + PA) = 11\\,PA$, that is $5\\,PT = 6\\,PA$ and $PT = 1.2\\,PA$; with $PT = PA + 5$ this gives $0.2\\,PA = 5$, so $PA = 25$ and $PT = 30$ ✓ (and $25 \\times 36 = 900 = 30^2$). (The choice $25$ is REPORTING $PA$ INSTEAD OF THE FENCE ✗; the choice $16$ is ADDING THE $5$ TO THE CHORD $AB$ ✗; the choice $36$ is REPORTING THE WHOLE FURROW $PB$ ✗.)',
    },
    {
      q: 'A straight barrier runs from a marshal’s post at $P$ and just touches the edge of a circular go-kart track at $T$. A straight service road also leaves the post, crossing the edge at $A$ and again at $B$, with $AB = 21$ m. The barrier is exactly $9$ m longer than $PA$. How long is the barrier $PT$?',
      fig: {
        view: [-3.9, -3.9, 6.1, 3.9],
        alt: 'Tangent PT and secant through A and B from an outside point P, with AB marked 21',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [5, 0], b: [1.8, 2.4] },
          { t: 'seg', a: [5, 0], b: [0.5556, -2.9481] },
          { t: 'label', p: [3.4, 1.2], text: '?', dx: 10, dy: -4 },
          { t: 'label', p: [1.5278, -2.3032], text: '21', dx: -12, dy: 4 },
          { t: 'point', p: [5, 0], label: 'P', dx: 13, dy: 4 },
          { t: 'point', p: [1.8, 2.4], label: 'T', dx: 2, dy: -13 },
          { t: 'point', p: [2.5, -1.6583], label: 'A', dx: 12, dy: 2 },
          { t: 'point', p: [0.5556, -2.9481], label: 'B', dx: 2, dy: 15 },
        ],
      },
      choices: ['$36$', '$27$', '$48$', '$30$'],
      answer: 0,
      solution:
        'Write $t$ for the barrier length $PT$. Then $PA = t - 9$ and $PB = PA + 21 = t + 12$. The tangent rule gives $t^2 = (t - 9)(t + 12) = t^2 + 3t - 108$, so $3t = 108$ and $t = 36$ m ✓. Check a second, independent way by subtracting $PA^2$ from both sides: $PT^2 - PA^2 = PA(PB - PA) = PA \\times 21$, and the left side factors as $(PT - PA)(PT + PA) = 9(PT + PA)$. So $9(PT + PA) = 21\\,PA$, that is $9\\,PT = 12\\,PA$ and $PT = \\frac{4}{3}PA$; with $PT = PA + 9$ this gives $\\frac{1}{3}PA = 9$, so $PA = 27$ and $PT = 36$ ✓ (and $27 \\times 48 = 1296 = 36^2$). (The choice $27$ is REPORTING $PA$ INSTEAD OF THE BARRIER ✗; the choice $48$ is REPORTING THE WHOLE SERVICE ROAD $PB$ ✗; the choice $30$ is ADDING THE $9$ TO THE CHORD $AB$ ✗.)',
    },
  ],
  // slot 9 — a chord cut in half at a point a known distance from the center.
  // Lane: r 10, d 4 -> 4 root 21 / r 7, d 4 -> 2 root 33 / r 9, d 6 -> 6 root 5.
  [
    {
      q: 'A circular trampoline mat has center $O$ and radius $10$ ft. A straight cord is stretched across the mat and pinned down at a point $P$ that is $4$ ft from $O$, and the pin sits exactly at the middle of the cord. How long is the cord?',
      fig: {
        view: [-3.9, -3.9, 3.9, 3.9],
        alt: 'A circle with center O, a point P inside at distance 4 from O, and a chord through P perpendicular to OP with P at its midpoint',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [1.2, 2.7495], b: [1.2, -2.7495] },
          { t: 'seg', a: [0, 0], b: [1.2, 0] },
          { t: 'seg', a: [0, 0], b: [1.2, 2.7495], dash: true },
          { t: 'right', at: [1.2, 0], from: [0, 0], to: [1.2, 2.7495], s: 0.3 },
          { t: 'label', p: [0.6, 0], text: '4', dy: 16 },
          { t: 'label', p: [0.6, 1.3748], text: '10', dx: -14 },
          { t: 'label', p: [1.2, -1.3748], text: '?', dx: 14 },
          { t: 'point', p: [0, 0], label: 'O', dx: -13, dy: 5 },
          { t: 'point', p: [1.2, 0], label: 'P', dx: 12, dy: 13 },
        ],
      },
      choices: ['$2\\sqrt{21}$', '$4\\sqrt{29}$', '$12$', '$4\\sqrt{21}$'],
      answer: 3,
      solution:
        'Run the diameter through $P$. It is cut by $P$ into pieces of $10 - 4 = 6$ ft and $10 + 4 = 14$ ft, so the power of $P$ is $6 \\times 14 = 84$. The cord is cut by $P$ into two equal pieces of length $h$, so $h \\times h = 84$, giving $h = \\sqrt{84} = 2\\sqrt{21}$ and a full cord of $4\\sqrt{21}$ ft ✓. Check a second, independent way with a right triangle: because $P$ is the midpoint of the cord, the segment $OP$ meets the cord at a right angle, so $h^2 = 10^2 - 4^2 = 100 - 16 = 84$ and $h = 2\\sqrt{21}$ once more, for a cord of $4\\sqrt{21}$ ft ✓. (The choice $2\\sqrt{21}$ is STOPPING AT HALF THE CORD ✗; the choice $4\\sqrt{29}$ is ADDING THE SQUARES INSTEAD OF SUBTRACTING ✗; the choice $12$ is TREATING HALF THE CORD AS $r - d$ ✗.)',
    },
    {
      q: 'A round badge has center $O$ and radius $7$ cm. A straight ribbon is laid across the badge and tacked at a point $P$ that is $4$ cm from $O$; the tack falls exactly at the middle of the ribbon. How long is the ribbon?',
      fig: {
        view: [-3.9, -3.9, 3.9, 3.9],
        alt: 'A circle with center O, a point P inside at distance 4 from O, and a chord through P perpendicular to OP with P at its midpoint',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [1.7143, 2.462], b: [1.7143, -2.462] },
          { t: 'seg', a: [0, 0], b: [1.7143, 0] },
          { t: 'seg', a: [0, 0], b: [1.7143, 2.462], dash: true },
          { t: 'right', at: [1.7143, 0], from: [0, 0], to: [1.7143, 2.462], s: 0.3 },
          { t: 'label', p: [0.8571, 0], text: '4', dy: 16 },
          { t: 'label', p: [0.8571, 1.231], text: '7', dx: -13 },
          { t: 'label', p: [1.7143, -1.231], text: '?', dx: 14 },
          { t: 'point', p: [0, 0], label: 'O', dx: -13, dy: 5 },
          { t: 'point', p: [1.7143, 0], label: 'P', dx: 13, dy: 13 },
        ],
      },
      choices: ['$\\sqrt{33}$', '$2\\sqrt{33}$', '$2\\sqrt{65}$', '$6$'],
      answer: 1,
      solution:
        'Run the diameter through $P$. The tack cuts it into $7 - 4 = 3$ cm and $7 + 4 = 11$ cm, so the power of $P$ is $3 \\times 11 = 33$. The ribbon is cut into two equal halves of length $h$, so $h^2 = 33$ and $h = \\sqrt{33}$, making the ribbon $2\\sqrt{33}$ cm ✓. Check a second, independent way with a right triangle: since $P$ is the midpoint of the ribbon, $OP$ is perpendicular to it, so $h^2 = 7^2 - 4^2 = 49 - 16 = 33$ and the ribbon is again $2\\sqrt{33}$ cm ✓. (The choice $\\sqrt{33}$ is STOPPING AT HALF THE RIBBON ✗; the choice $2\\sqrt{65}$ is ADDING THE SQUARES INSTEAD OF SUBTRACTING ✗; the choice $6$ is TREATING HALF THE RIBBON AS $r - d$ ✗.)',
    },
    {
      q: 'A circular metal cover has center $O$ and radius $9$ in. A straight scratch crosses the cover, and its midpoint $M$ is $6$ in from $O$. How long is the scratch?',
      fig: {
        view: [-3.9, -3.9, 3.9, 3.9],
        alt: 'A circle with center O, a point M inside at distance 6 from O, and a chord through M perpendicular to OM with M at its midpoint',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [2, 2.2361], b: [2, -2.2361] },
          { t: 'seg', a: [0, 0], b: [2, 0] },
          { t: 'seg', a: [0, 0], b: [2, 2.2361], dash: true },
          { t: 'right', at: [2, 0], from: [0, 0], to: [2, 2.2361], s: 0.3 },
          { t: 'label', p: [1, 0], text: '6', dy: 16 },
          { t: 'label', p: [1, 1.118], text: '9', dx: -13 },
          { t: 'label', p: [2, -1.118], text: '?', dx: 14 },
          { t: 'point', p: [0, 0], label: 'O', dx: -13, dy: 5 },
          { t: 'point', p: [2, 0], label: 'M', dx: 14, dy: 13 },
        ],
      },
      choices: ['$3\\sqrt{5}$', '$6\\sqrt{13}$', '$6\\sqrt{5}$', '$6$'],
      answer: 2,
      solution:
        'Run the diameter through $M$. It is cut into $9 - 6 = 3$ in and $9 + 6 = 15$ in, so the power of $M$ is $3 \\times 15 = 45$. The scratch is cut into two equal halves of length $h$, so $h^2 = 45$ and $h = 3\\sqrt{5}$, making the scratch $6\\sqrt{5}$ in ✓. Check a second, independent way with a right triangle: a segment from the center to the midpoint of a chord is perpendicular to that chord, so $h^2 = 9^2 - 6^2 = 81 - 36 = 45$ and the scratch is again $6\\sqrt{5}$ in ✓. (The choice $3\\sqrt{5}$ is STOPPING AT HALF THE SCRATCH ✗; the choice $6\\sqrt{13}$ is ADDING THE SQUARES INSTEAD OF SUBTRACTING ✗; the choice $6$ is TREATING HALF THE SCRATCH AS $r - d$ ✗.)',
    },
  ],
  // slot 10 — crossing chords, whole chord known, report the longer piece.
  // Lane: 36 with 8 and 16 -> 32 / 33 with 9 and 18 -> 27 / 35 with 6 and 25 -> 30.
  [
    {
      q: 'A circular garden bed has two straight edging strips laid across it. One strip runs from $A$ to $B$ and is $36$ ft long; the other runs from $C$ to $D$. They cross at $P$, where $PC = 8$ ft and $PD = 16$ ft. How long is the longer of the two pieces of strip $AB$?',
      fig: {
        view: [-3.9, -3.9, 3.9, 3.9],
        alt: 'Chords AB and CD of a circle crossing at P, with AB marked 36 and the pieces PC and PD marked 8 and 16',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.8421, -0.9604], b: [2.8421, -0.9604] },
          { t: 'seg', a: [-2.9999, 0.0257], b: [-0.6318, -2.9327] },
          { t: 'label', p: [0, -0.9604], text: '36', dy: 18 },
          { t: 'label', p: [0.3158, -0.9604], text: '?', dy: -11 },
          { t: 'label', p: [-2.6052, -0.4674], text: '8', dx: -12 },
          { t: 'label', p: [-1.4212, -1.9466], text: '16', dx: 14, dy: 6 },
          { t: 'point', p: [-2.8421, -0.9604], label: 'A', dx: -13, dy: 2 },
          { t: 'point', p: [2.8421, -0.9604], label: 'B', dx: 13, dy: 2 },
          { t: 'point', p: [-2.9999, 0.0257], label: 'C', dx: -13, dy: -2 },
          { t: 'point', p: [-0.6318, -2.9327], label: 'D', dx: 4, dy: 15 },
          { t: 'point', p: [-2.2105, -0.9604], label: 'P', dx: -6, dy: 16 },
        ],
      },
      choices: ['$32$', '$4$', '$8$', '$20$'],
      answer: 0,
      solution:
        'Crossing chords give $AP \\times PB = PC \\times PD = 8 \\times 16 = 128$, and the two pieces of $AB$ add to $36$. A pair of numbers with product $128$ and sum $36$ must be $4$ and $32$, since $128 = 4 \\times 32$ and $4 + 32 = 36$, so the longer piece is $32$ ft ✓. Check a second, independent way from the midpoint $M$ of $AB$: each piece is $18$ shifted by the same amount $MP$, so $AP \\times PB = (18 - MP)(18 + MP) = 324 - MP^2 = 128$. That gives $MP^2 = 196$ and $MP = 14$, so the longer piece is $18 + 14 = 32$ ft ✓. (The choice $4$ is REPORTING THE SHORTER PIECE ✗; the choice $8$ is COPYING $PC$, as though the crossing point cut both strips the same way ✗; the choice $20$ is SUBTRACTING $PD$ FROM THE WHOLE STRIP ✗.)',
    },
    {
      q: 'A round drum head has two strips of tape stuck straight across it. One runs from $A$ to $B$ and measures $33$ cm; the other runs from $C$ to $D$. The strips cross at $P$, with $PC = 9$ cm and $PD = 18$ cm. How long is the longer of the two pieces of strip $AB$?',
      fig: {
        view: [-3.9, -3.9, 3.9, 3.9],
        alt: 'Chords AB and CD of a circle crossing at P, with AB marked 33 and the pieces PC and PD marked 9 and 18',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.9118, -0.7222], b: [2.9118, -0.7222] },
          { t: 'seg', a: [-1.915, -2.3093], b: [-1.7288, 2.4518] },
          { t: 'label', p: [0, -0.7222], text: '33', dy: 18 },
          { t: 'label', p: [0.5294, -0.7222], text: '?', dy: -11 },
          { t: 'label', p: [-1.884, -1.5158], text: '9', dx: -12 },
          { t: 'label', p: [-1.7909, 0.8648], text: '18', dx: -14 },
          { t: 'point', p: [-2.9118, -0.7222], label: 'A', dx: -13, dy: 2 },
          { t: 'point', p: [2.9118, -0.7222], label: 'B', dx: 13, dy: 2 },
          { t: 'point', p: [-1.915, -2.3093], label: 'C', dx: -2, dy: 16 },
          { t: 'point', p: [-1.7288, 2.4518], label: 'D', dx: -2, dy: -11 },
          { t: 'point', p: [-1.8529, -0.7222], label: 'P', dx: 9, dy: 15 },
        ],
      },
      choices: ['$6$', '$9$', '$15$', '$27$'],
      answer: 3,
      solution:
        'Crossing chords give $AP \\times PB = PC \\times PD = 9 \\times 18 = 162$, and the two pieces of $AB$ add to $33$. The pair with product $162$ and sum $33$ is $6$ and $27$, because $162 = 6 \\times 27$ and $6 + 27 = 33$, so the longer piece is $27$ cm ✓. Check a second, independent way from the midpoint $M$ of $AB$: the pieces are $16.5 - MP$ and $16.5 + MP$, so their product is $272.25 - MP^2 = 162$, giving $MP^2 = 110.25$ and $MP = 10.5$. The longer piece is $16.5 + 10.5 = 27$ cm ✓. (The choice $6$ is REPORTING THE SHORTER PIECE ✗; the choice $9$ is COPYING $PC$ ✗; the choice $15$ is SUBTRACTING $PD$ FROM THE WHOLE STRIP ✗.)',
    },
    {
      q: 'A circular archery target has two long straight guide lines drawn across it. One runs from $A$ to $B$ and is $35$ in long; the other runs from $C$ to $D$. They cross at $P$, where $PC = 6$ in and $PD = 25$ in. How long is the longer of the two pieces of line $AB$?',
      fig: {
        view: [-3.9, -3.9, 3.9, 3.9],
        alt: 'Chords AB and CD of a circle crossing at P, with AB marked 35 and the pieces PC and PD marked 6 and 25',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.9167, -0.7022], b: [2.9167, -0.7022] },
          { t: 'seg', a: [-2.5442, -1.5896], b: [-0.163, 2.9956] },
          { t: 'label', p: [0, -0.7022], text: '35', dy: 18 },
          { t: 'label', p: [0.4167, -0.7022], text: '?', dy: -11 },
          { t: 'label', p: [-2.3138, -1.1459], text: '6', dx: -12 },
          { t: 'label', p: [-1.1232, 1.1467], text: '25', dx: -14 },
          { t: 'point', p: [-2.9167, -0.7022], label: 'A', dx: -13, dy: 2 },
          { t: 'point', p: [2.9167, -0.7022], label: 'B', dx: 13, dy: 2 },
          { t: 'point', p: [-2.5442, -1.5896], label: 'C', dx: -6, dy: 15 },
          { t: 'point', p: [-0.163, 2.9956], label: 'D', dx: 4, dy: -10 },
          { t: 'point', p: [-2.0833, -0.7022], label: 'P', dx: 10, dy: 15 },
        ],
      },
      choices: ['$5$', '$10$', '$30$', '$6$'],
      answer: 2,
      solution:
        'Crossing chords give $AP \\times PB = PC \\times PD = 6 \\times 25 = 150$, and the two pieces of $AB$ add to $35$. The pair with product $150$ and sum $35$ is $5$ and $30$, so the longer piece is $30$ in ✓. Check a second, independent way from the midpoint $M$ of $AB$: the pieces are $17.5 - MP$ and $17.5 + MP$, so their product is $306.25 - MP^2 = 150$, giving $MP^2 = 156.25$ and $MP = 12.5$. The longer piece is $17.5 + 12.5 = 30$ in ✓. (The choice $5$ is REPORTING THE SHORTER PIECE ✗; the choice $6$ is COPYING $PC$ ✗; the choice $10$ is SUBTRACTING $PD$ FROM THE WHOLE LINE ✗.)',
    },
  ],
  // slot 11 — tangent plus a secant through the center; find the radius.
  // Lane: t 55, near 25 -> r 48 / t 12, near 2 -> r 35 / t 60, near 40 -> r 25.
  [
    {
      q: 'A round island has center $O$. From a dock at $P$ on the shore of the lake, one straight cable runs to a buoy at $T$ where it just grazes the island, and $PT = 55$ m. A second straight cable leaves $P$, meets the island at $A$ with $PA = 25$ m, passes straight through $O$, and leaves the island at $B$. What is the radius of the island?',
      fig: {
        view: [-3.9, -3.9, 5.9, 3.9],
        alt: 'A circle with center O, an outside point P, a tangent from P touching at T, and a secant from P through O meeting the circle at A and B',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [4.5625, 0], b: [-3, 0] },
          { t: 'seg', a: [4.5625, 0], b: [1.9726, 2.2603] },
          { t: 'seg', a: [0, 0], b: [1.9726, 2.2603], dash: true },
          { t: 'right', at: [1.9726, 2.2603], from: [0, 0], to: [4.5625, 0], s: 0.3 },
          { t: 'label', p: [3.7813, 0], text: '25', dy: -10 },
          { t: 'label', p: [3.2676, 1.1302], text: '55', dx: 15, dy: 2 },
          { t: 'label', p: [0.9863, 1.1302], text: '?', dx: -13 },
          { t: 'point', p: [4.5625, 0], label: 'P', dx: 13, dy: 4 },
          { t: 'point', p: [1.9726, 2.2603], label: 'T', dx: 4, dy: -11 },
          { t: 'point', p: [3, 0], label: 'A', dx: -2, dy: 16 },
          { t: 'point', p: [-3, 0], label: 'B', dx: -13, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: -4, dy: 16 },
        ],
      },
      choices: ['$96$', '$48$', '$121$', '$73$'],
      answer: 1,
      solution:
        'The tangent rule says $PT^2 = PA \\times PB$, so $55^2 = 25 \\times PB$, that is $3025 = 25\\,PB$ and $PB = 121$ m. Since the second cable runs straight through the center, $AB$ is a diameter, and $AB = PB - PA = 121 - 25 = 96$ m, so the radius is $96 \\div 2 = 48$ m ✓. Check a second, independent way with the right triangle $PTO$: the tangent meets the radius at a right angle, so $PT^2 + r^2 = PO^2$, and $PO = PA + r = 25 + r$. That gives $3025 + r^2 = 625 + 50r + r^2$, so $50r = 2400$ and $r = 48$ m ✓. (The choice $96$ is REPORTING THE DIAMETER INSTEAD OF THE RADIUS ✗; the choice $121$ is REPORTING $PB$, the far distance, rather than the island ✗; the choice $73$ is REPORTING THE DISTANCE FROM $P$ TO THE CENTER ✗.)',
    },
    {
      q: 'A circular lawn has center $O$. From a gate at $P$, a straight kerb runs to $T$, just touching the lawn there, and $PT = 12$ m. A straight footpath also leaves $P$, reaches the lawn at $A$ with $PA = 2$ m, crosses straight over $O$, and leaves the lawn at $B$. What is the radius of the lawn?',
      fig: {
        view: [-3.9, -3.9, 4.5, 3.9],
        alt: 'A circle with center O, an outside point P, a tangent from P touching at T, and a secant from P through O meeting the circle at A and B',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [3.1714, 0], b: [-3, 0] },
          { t: 'seg', a: [3.1714, 0], b: [2.8378, 0.973] },
          { t: 'seg', a: [0, 0], b: [2.8378, 0.973], dash: true },
          { t: 'right', at: [2.8378, 0.973], from: [0, 0], to: [3.1714, 0], s: 0.3 },
          { t: 'label', p: [3.0857, 0], text: '2', dy: -10, dx: 6 },
          { t: 'label', p: [3.0046, 0.4865], text: '12', dx: 16, dy: -4 },
          { t: 'label', p: [1.4189, 0.4865], text: '?', dx: -6, dy: -10 },
          { t: 'point', p: [3.1714, 0], label: 'P', dx: 13, dy: 6 },
          { t: 'point', p: [2.8378, 0.973], label: 'T', dx: 6, dy: -11 },
          { t: 'point', p: [3, 0], label: 'A', dx: -4, dy: 16 },
          { t: 'point', p: [-3, 0], label: 'B', dx: -13, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: -4, dy: 16 },
        ],
      },
      choices: ['$35$', '$70$', '$72$', '$37$'],
      answer: 0,
      solution:
        'The tangent rule says $PT^2 = PA \\times PB$, so $12^2 = 2 \\times PB$, that is $144 = 2\\,PB$ and $PB = 72$ m. The footpath crosses the center, so $AB$ is a diameter, and $AB = PB - PA = 72 - 2 = 70$ m, making the radius $35$ m ✓. Check a second, independent way with the right triangle $PTO$: $PT^2 + r^2 = PO^2$ with $PO = 2 + r$, so $144 + r^2 = 4 + 4r + r^2$, giving $4r = 140$ and $r = 35$ m ✓. (The choice $70$ is REPORTING THE DIAMETER INSTEAD OF THE RADIUS ✗; the choice $72$ is REPORTING $PB$ rather than the lawn ✗; the choice $37$ is REPORTING THE DISTANCE FROM $P$ TO THE CENTER ✗.)',
    },
    {
      q: 'A domed hall is a circle seen from above, with center $O$. From a marker at $P$ outside it, a straight rail runs to $T$ and just touches the dome there, with $PT = 60$ ft. A straight corridor also runs from $P$, meets the dome at $A$ with $PA = 40$ ft, passes through $O$, and leaves the dome at $B$. What is the radius of the dome?',
      fig: {
        view: [-3.9, -3.9, 9.1, 3.9],
        alt: 'A circle with center O, an outside point P, a tangent from P touching at T, and a secant from P through O meeting the circle at A and B',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [7.8, 0], b: [-3, 0] },
          { t: 'seg', a: [7.8, 0], b: [1.1538, 2.7692] },
          { t: 'seg', a: [0, 0], b: [1.1538, 2.7692], dash: true },
          { t: 'right', at: [1.1538, 2.7692], from: [0, 0], to: [7.8, 0], s: 0.3 },
          { t: 'label', p: [5.4, 0], text: '40', dy: -10 },
          { t: 'label', p: [4.4769, 1.3846], text: '60', dx: 14, dy: 2 },
          { t: 'label', p: [0.5769, 1.3846], text: '?', dx: -13 },
          { t: 'point', p: [7.8, 0], label: 'P', dx: 13, dy: 4 },
          { t: 'point', p: [1.1538, 2.7692], label: 'T', dx: 2, dy: -11 },
          { t: 'point', p: [3, 0], label: 'A', dx: 2, dy: 16 },
          { t: 'point', p: [-3, 0], label: 'B', dx: -13, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: -6, dy: 16 },
        ],
      },
      choices: ['$50$', '$65$', '$25$', '$90$'],
      answer: 2,
      solution:
        'The tangent rule says $PT^2 = PA \\times PB$, so $60^2 = 40 \\times PB$, that is $3600 = 40\\,PB$ and $PB = 90$ ft. The corridor runs through the center, so $AB$ is a diameter, and $AB = PB - PA = 90 - 40 = 50$ ft, making the radius $25$ ft ✓. Check a second, independent way with the right triangle $PTO$: $PT^2 + r^2 = PO^2$ with $PO = 40 + r$, so $3600 + r^2 = 1600 + 80r + r^2$, giving $80r = 2000$ and $r = 25$ ft ✓. (The choice $50$ is REPORTING THE DIAMETER INSTEAD OF THE RADIUS ✗; the choice $90$ is REPORTING $PB$ rather than the dome ✗; the choice $65$ is REPORTING THE DISTANCE FROM $P$ TO THE CENTER ✗.)',
    },
  ],
  // slot 12 — crossing chords with one chord cut in the ratio 2 to 1.
  // Lane: 6 and 15 -> 9 root 5 / 4 and 14 -> 6 root 7 / 3 and 20 -> 3 root 30.
  [
    {
      q: 'A round wheel of cheese is cut by two straight wires. The first runs from $A$ to $B$, the second from $C$ to $D$, and they cross at $P$. There $PC = 6$ cm, $PD = 15$ cm, and $AP$ is exactly twice as long as $PB$. How long is the wire cut $AB$?',
      fig: {
        view: [-3.9, -3.9, 3.9, 3.9],
        alt: 'Chords AB and CD of a circle crossing at P, with PC marked 6, PD marked 15, and AP twice PB',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.7443, -1.212], b: [2.7443, -1.212] },
          { t: 'seg', a: [0.9423, -2.8482], b: [0.8458, 2.8783] },
          { t: 'label', p: [0, -1.212], text: '?', dy: 18 },
          { t: 'label', p: [0.9286, -2.0301], text: '6', dx: 12 },
          { t: 'label', p: [0.8803, 0.8332], text: '15', dx: 14 },
          { t: 'point', p: [-2.7443, -1.212], label: 'A', dx: -13, dy: 2 },
          { t: 'point', p: [2.7443, -1.212], label: 'B', dx: 13, dy: 2 },
          { t: 'point', p: [0.9423, -2.8482], label: 'C', dx: 2, dy: 15 },
          { t: 'point', p: [0.8458, 2.8783], label: 'D', dx: 2, dy: -11 },
          { t: 'point', p: [0.9148, -1.212], label: 'P', dx: -12, dy: 13 },
        ],
      },
      choices: ['$9\\sqrt{5}$', '$3\\sqrt{5}$', '$6\\sqrt{5}$', '$9\\sqrt{10}$'],
      answer: 0,
      solution:
        'Let $PB = x$, so $AP = 2x$. Crossing chords give $AP \\times PB = PC \\times PD$, that is $2x \\times x = 6 \\times 15 = 90$, so $2x^2 = 90$, $x^2 = 45$ and $x = 3\\sqrt{5}$. Then $AB = AP + PB = 2x + x = 3x = 9\\sqrt{5}$ cm ✓. Check a second, independent way by working straight in $AB$: the cut splits $AB$ into thirds, so $AP = \\frac{2}{3}AB$ and $PB = \\frac{1}{3}AB$, and their product is $\\frac{2}{9}AB^2$. Setting $\\frac{2}{9}AB^2 = 90$ gives $AB^2 = 405$, and since $405 = 81 \\times 5$, $AB = 9\\sqrt{5}$ cm ✓. (The choice $3\\sqrt{5}$ is REPORTING THE SHORT PIECE $PB$ ✗; the choice $6\\sqrt{5}$ is REPORTING THE LONG PIECE $AP$ ✗; the choice $9\\sqrt{10}$ is FORGETTING THE FACTOR OF TWO and solving $x^2 = 90$ ✗.)',
    },
    {
      q: 'A circular stepping stone has two straight cracks across it. One runs from $A$ to $B$, the other from $C$ to $D$, and they meet at $P$. There $PC = 4$ in, $PD = 14$ in, and $AP$ is exactly twice $PB$. How long is the crack $AB$?',
      fig: {
        view: [-3.9, -3.9, 3.9, 3.9],
        alt: 'Chords AB and CD of a circle crossing at P, with PC marked 4, PD marked 14, and AP twice PB',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.3812, -1.8248], b: [2.3812, -1.8248] },
          { t: 'seg', a: [0.4314, -2.9688], b: [2.0619, 2.1791] },
          { t: 'label', p: [0, -1.8248], text: '?', dy: 18 },
          { t: 'label', p: [0.6126, -2.3968], text: '4', dx: -12 },
          { t: 'label', p: [1.4278, 0.1772], text: '14', dx: 14, dy: 4 },
          { t: 'point', p: [-2.3812, -1.8248], label: 'A', dx: -13, dy: 2 },
          { t: 'point', p: [2.3812, -1.8248], label: 'B', dx: 13, dy: 4 },
          { t: 'point', p: [0.4314, -2.9688], label: 'C', dx: -4, dy: 15 },
          { t: 'point', p: [2.0619, 2.1791], label: 'D', dx: 6, dy: -10 },
          { t: 'point', p: [0.7937, -1.8248], label: 'P', dx: -11, dy: 14 },
        ],
      },
      choices: ['$4\\sqrt{7}$', '$6\\sqrt{7}$', '$2\\sqrt{7}$', '$6\\sqrt{14}$'],
      answer: 1,
      solution:
        'Let $PB = x$, so $AP = 2x$. Crossing chords give $2x \\times x = 4 \\times 14 = 56$, so $2x^2 = 56$, $x^2 = 28$ and $x = 2\\sqrt{7}$. Then $AB = 3x = 6\\sqrt{7}$ in ✓. Check a second, independent way straight in $AB$: the meeting point splits $AB$ into thirds, so $AP \\times PB = \\frac{2}{3}AB \\times \\frac{1}{3}AB = \\frac{2}{9}AB^2$. Setting that equal to $56$ gives $AB^2 = 252 = 36 \\times 7$, so $AB = 6\\sqrt{7}$ in ✓. (The choice $2\\sqrt{7}$ is REPORTING THE SHORT PIECE $PB$ ✗; the choice $4\\sqrt{7}$ is REPORTING THE LONG PIECE $AP$ ✗; the choice $6\\sqrt{14}$ is FORGETTING THE FACTOR OF TWO and solving $x^2 = 56$ ✗.)',
    },
    {
      q: 'A large circular clock face has two straight guide lines scored across it. One runs from $A$ to $B$, the other from $C$ to $D$, and they cross at $P$. There $PC = 3$ cm, $PD = 20$ cm, and $AP$ is exactly twice $PB$. How long is the guide line $AB$?',
      fig: {
        view: [-3.9, -3.9, 3.9, 3.9],
        alt: 'Chords AB and CD of a circle crossing at P, with PC marked 3, PD marked 20, and AP twice PB',
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.9718, -2.261], b: [1.9718, -2.261] },
          { t: 'seg', a: [1.1766, -2.7596], b: [-2.8052, 1.0634] },
          { t: 'label', p: [0, -2.261], text: '?', dy: 18 },
          { t: 'label', p: [0.917, -2.5103], text: '3', dx: 13, dy: 2 },
          { t: 'label', p: [-1.074, -0.5988], text: '20', dx: 13, dy: -4 },
          { t: 'point', p: [-1.9718, -2.261], label: 'A', dx: -13, dy: 2 },
          { t: 'point', p: [1.9718, -2.261], label: 'B', dx: 13, dy: 2 },
          { t: 'point', p: [1.1766, -2.7596], label: 'C', dx: 6, dy: 13 },
          { t: 'point', p: [-2.8052, 1.0634], label: 'D', dx: -12, dy: -4 },
          { t: 'point', p: [0.6573, -2.261], label: 'P', dx: 6, dy: -11 },
        ],
      },
      choices: ['$\\sqrt{30}$', '$2\\sqrt{30}$', '$6\\sqrt{15}$', '$3\\sqrt{30}$'],
      answer: 3,
      solution:
        'Let $PB = x$, so $AP = 2x$. Crossing chords give $2x \\times x = 3 \\times 20 = 60$, so $2x^2 = 60$, $x^2 = 30$ and $x = \\sqrt{30}$. Then $AB = 3x = 3\\sqrt{30}$ cm ✓. Check a second, independent way straight in $AB$: the crossing point cuts $AB$ into thirds, so $AP \\times PB = \\frac{2}{3}AB \\times \\frac{1}{3}AB = \\frac{2}{9}AB^2 = 60$, giving $AB^2 = 270 = 9 \\times 30$ and $AB = 3\\sqrt{30}$ cm ✓. (The choice $\\sqrt{30}$ is REPORTING THE SHORT PIECE $PB$ ✗; the choice $2\\sqrt{30}$ is REPORTING THE LONG PIECE $AP$ ✗; the choice $6\\sqrt{15}$ is FORGETTING THE FACTOR OF TWO and solving $x^2 = 60$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 13,
  challenge,
}
