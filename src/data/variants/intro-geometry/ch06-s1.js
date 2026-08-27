// Introduction to Geometry chapter 6 — variations for section 6.1
// (Pythagorean Theorem). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every keyed answer was worked twice, by two routes that do not share
//    arithmetic: a raw square-add-root (or square-subtract-root) computation
//    against a scaled-triple recognition, or against a closure check that
//    plugs the candidate back into $a^2 + b^2 = c^2$ (often by difference of
//    squares, e.g. $37^2 - 35^2 = (37-35)(37+35) = 144$). The two routes must
//    agree before a key is written down.
//  - Every radical in a choice list was factored for square divisors:
//    $\sqrt{1519} = 7\sqrt{31}$ and $\sqrt{306} = 3\sqrt{34}$ are printed
//    simplified; $\sqrt{1762} = \sqrt{2 \times 881}$ and
//    $\sqrt{1081} = \sqrt{23 \times 47}$ were checked squarefree and left as
//    they stand.
//  - Every figure was built from its own numbers: legs drawn at their stated
//    integer lengths on perpendicular axis directions, so each right-angle
//    mark sits on a true 90 degrees, and rectangle diagonals run corner to
//    exact corner.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS. The traps running through this section: ADDING THE SIDES,
//    SUBTRACTING THE SIDES, PROMOTING A LEG TO HYPOTENUSE, TREATING THE
//    HYPOTENUSE AS A LEG, FORGETTING THE SQUARE ROOT, MULTIPLYING THE SIDES,
//    TRUSTING A NEAR MISS, ADDING THE TWO WALKS, ANSWERING THE LONGER LEG,
//    SOLVING IT LINEARLY, SUBTRACTING THE OFFSET, and HALVING THE
//    HYPOTENUSE.
//  - No two choices inside an item name the same value (in particular an
//    unsimplified radical never shadows the simplified key).

const s61 = [
  // s1 — two legs given, whole-number hypotenuse.
  [
    {
      q: 'A triangular sail has two edges that meet at a right angle: one is $21$ ft long and the other is $28$ ft long, as shown. How long is the sail’s third edge?',
      fig: {
        view: [-4, -4.5, 32.5, 24.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [28, 0], [0, 21]], fill: false },
          { t: 'right', at: [0, 0], from: [28, 0], to: [0, 21] },
          { t: 'label', p: [14, 0], text: '28', dx: 0, dy: 14 },
          { t: 'label', p: [0, 10.5], text: '21', dx: -12, dy: 0 },
          { t: 'label', p: [14, 10.5], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$49$', '$1225$', '$35$', '$7\\sqrt{7}$'],
      answer: 2,
      solution:
        'The third edge is the hypotenuse, so add the squares of the legs: $21^2 + 28^2 = 441 + 784 = 1225$, and $\\sqrt{1225} = 35$ ✓. Check a second, independent way with no squaring at all: $21 = 7 \\times 3$ and $28 = 7 \\times 4$, so this is the $3$-$4$-$5$ shape scaled by $7$, and the hypotenuse is $7 \\times 5 = 35$ ✓. Guard: the hypotenuse must beat both legs, and $35 > 28 > 21$ ✓. (The choice $49$ is ADDING THE SIDES, $21 + 28$, instead of their squares ✗; $7\\sqrt{7}$ is PROMOTING A LEG TO HYPOTENUSE, computing $\\sqrt{784 - 441} = \\sqrt{343}$ as if $28$ were the longest side ✗; $1225$ is FORGETTING THE SQUARE ROOT and reporting $c^2$ ✗.)',
    },
    {
      q: 'A zip line runs from the top of a $24$ m tower straight down to an anchor at ground level, $45$ m from the base of the tower, as shown. How long is the zip-line cable?',
      fig: {
        view: [-5, -6, 51.5, 29],
        elems: [
          { t: 'poly', pts: [[0, 0], [45, 0], [45, 24]], fill: false },
          { t: 'right', at: [45, 0], from: [0, 0], to: [45, 24] },
          { t: 'label', p: [22.5, 0], text: '45', dx: 0, dy: 14 },
          { t: 'label', p: [45, 12], text: '24', dx: 12, dy: 0 },
          { t: 'label', p: [22.5, 12], text: '?', dx: -10, dy: -8 },
        ],
      },
      choices: ['$69$', '$3\\sqrt{161}$', '$2601$', '$51$'],
      answer: 3,
      solution:
        'The ground and the tower are perpendicular, so the cable is a hypotenuse: $24^2 + 45^2 = 576 + 2025 = 2601$, and $\\sqrt{2601} = 51$ m ✓. Check a second, independent way with no big squares: $24 = 3 \\times 8$ and $45 = 3 \\times 15$, so this is the $8$-$15$-$17$ shape scaled by $3$, and the cable is $3 \\times 17 = 51$ ✓. Guard: $51$ is longer than both $45$ and $24$, as a hypotenuse must be ✓. (The choice $69$ is ADDING THE SIDES, $24 + 45$ ✗; $3\\sqrt{161}$ is PROMOTING A LEG TO HYPOTENUSE, subtracting $2025 - 576 = 1449$ when both given sides are legs ✗; $2601$ is FORGETTING THE SQUARE ROOT ✗.)',
    },
    {
      q: 'A right-triangular garden plot has perpendicular sides of $21$ m and $20$ m, as shown. How many meters of fencing does its longest side need?',
      fig: {
        view: [-3, -3, 24, 22.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [21, 0], [0, 20]], fill: false },
          { t: 'right', at: [0, 0], from: [21, 0], to: [0, 20] },
          { t: 'label', p: [10.5, 0], text: '21', dx: 0, dy: 14 },
          { t: 'label', p: [0, 10], text: '20', dx: -12, dy: 0 },
          { t: 'label', p: [10.5, 10], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$841$', '$29$', '$41$', '$\\sqrt{41}$'],
      answer: 1,
      solution:
        'The longest side of a right triangle is the hypotenuse: $20^2 + 21^2 = 400 + 441 = 841$, and $\\sqrt{841} = 29$ m ✓. Check a second, independent way by closing the identity: $29^2 - 20^2 = (29 - 20)(29 + 20) = 9 \\times 49 = 441 = 21^2$ ✓. Guard: the two legs are nearly equal, so the hypotenuse should sit near $20\\sqrt{2} \\approx 28.3$, and $29$ lands right there, while $\\sqrt{41} \\approx 6.4$ could never span a triangle with $21$ m sides ✗. (The choice $41$ is ADDING THE SIDES, $20 + 21$ ✗; $\\sqrt{41}$ is PROMOTING A LEG TO HYPOTENUSE, from $441 - 400$ ✗; $841$ is FORGETTING THE SQUARE ROOT ✗.)',
    },
  ],
  // s2 — two legs given, whole-number hypotenuse, larger numbers.
  [
    {
      q: 'A carpenter stiffens a shelf with the right-angled frame shown: a vertical support $33$ cm tall, a horizontal piece $44$ cm long, and a diagonal strut joining their far ends. How long is the strut?',
      fig: {
        view: [-5, -5.5, 49.5, 40],
        elems: [
          { t: 'poly', pts: [[0, 0], [44, 0], [0, 33]], fill: false },
          { t: 'right', at: [0, 0], from: [44, 0], to: [0, 33] },
          { t: 'label', p: [22, 0], text: '44', dx: 0, dy: 14 },
          { t: 'label', p: [0, 16.5], text: '33', dx: -12, dy: 0 },
          { t: 'label', p: [22, 16.5], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$55$', '$77$', '$11\\sqrt{7}$', '$3025$'],
      answer: 0,
      solution:
        'The support and the shelf piece are legs, and the strut is the hypotenuse: $33^2 + 44^2 = 1089 + 1936 = 3025$, and $\\sqrt{3025} = 55$ cm ✓. Check a second, independent way through a scaled triple: dividing by $11$ gives $3$ and $4$, the $3$-$4$-$5$ family, so the strut is $11 \\times 5 = 55$ ✓ — no big squares needed. Guard: $55 > 44$, as the longest side must be ✓. (The choice $77$ is ADDING THE SIDES, $33 + 44$ ✗; $11\\sqrt{7}$ is PROMOTING A LEG TO HYPOTENUSE, $\\sqrt{1936 - 1089} = \\sqrt{847}$ ✗; $3025$ is FORGETTING THE SQUARE ROOT ✗.)',
    },
    {
      q: 'Maya’s kite is flying $35$ m directly above a spot on the ground $12$ m from where she stands, as shown. If the string runs straight and taut from her hand at ground level to the kite, how long is the string?',
      fig: {
        view: [-6, -3, 24, 38],
        elems: [
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [12, 0], b: [12, 35], dash: true },
          { t: 'seg', a: [0, 0], b: [12, 35] },
          { t: 'right', at: [12, 0], from: [0, 0], to: [12, 35], s: 1 },
          { t: 'point', p: [0, 0], label: 'M', dx: -10, dy: 12 },
          { t: 'point', p: [12, 35], label: 'K', dx: 10, dy: -6 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [12, 17.5], text: '35', dx: 14, dy: 0 },
          { t: 'label', p: [6, 17.5], text: '?', dx: -12, dy: -6 },
        ],
      },
      choices: ['$47$', '$37$', '$\\sqrt{1081}$', '$1369$'],
      answer: 1,
      solution:
        'The height of the kite and the ground distance are perpendicular legs, and the string is the hypotenuse: $12^2 + 35^2 = 144 + 1225 = 1369$, and $\\sqrt{1369} = 37$ m ✓. Check a second, independent way by closing the identity with a difference of squares: $37^2 - 35^2 = (37 - 35)(37 + 35) = 2 \\times 72 = 144 = 12^2$ ✓ — the candidate locks the equation shut. Guard: the string must beat the $35$ m height, and $37 > 35$ ✓. (The choice $47$ is ADDING THE SIDES, $12 + 35$ ✗; $\\sqrt{1081}$ is PROMOTING A LEG TO HYPOTENUSE, from $1225 - 144$ ✗; $1369$ is FORGETTING THE SQUARE ROOT ✗.)',
    },
    {
      q: 'A straight drainage pipe drops $9$ ft in height while covering $40$ ft of horizontal distance, as shown. How long is the pipe itself?',
      fig: {
        view: [-4, -3, 44, 12],
        elems: [
          { t: 'seg', a: [0, 0], b: [40, 0] },
          { t: 'seg', a: [0, 0], b: [0, 9] },
          { t: 'seg', a: [0, 9], b: [40, 0] },
          { t: 'right', at: [0, 0], from: [40, 0], to: [0, 9], s: 1.2 },
          { t: 'label', p: [20, 0], text: '40', dx: 0, dy: 14 },
          { t: 'label', p: [0, 4.5], text: '9', dx: -10, dy: 0 },
          { t: 'label', p: [20, 4.5], text: '?', dx: 0, dy: -10 },
        ],
      },
      choices: ['$49$', '$7\\sqrt{31}$', '$1681$', '$41$'],
      answer: 3,
      solution:
        'The drop and the horizontal run are perpendicular, so the pipe is the hypotenuse: $9^2 + 40^2 = 81 + 1600 = 1681$, and $\\sqrt{1681} = 41$ ft ✓. Check a second, independent way by closing the identity: $41^2 - 40^2 = (41 - 40)(41 + 40) = 81 = 9^2$ ✓ — a one-line difference of squares instead of any big multiplication. Guard: $41$ is barely longer than the $40$ ft run, which fits a pipe that drops only $9$ ft ✓. (The choice $49$ is ADDING THE SIDES, $9 + 40$ ✗; $7\\sqrt{31}$ is PROMOTING A LEG TO HYPOTENUSE, $\\sqrt{1600 - 81} = \\sqrt{1519}$ ✗; $1681$ is FORGETTING THE SQUARE ROOT ✗.)',
    },
  ],
  // s3 — hypotenuse and one leg given, whole-number leg.
  [
    {
      q: 'A $15$ m guy wire runs from the top of a flagpole to a stake in the ground $9$ m from the pole’s base, as shown. How tall is the flagpole?',
      fig: {
        view: [-3, -2.5, 12.5, 14],
        elems: [
          { t: 'seg', a: [-1.5, 0], b: [11, 0] },
          { t: 'seg', a: [0, 0], b: [0, 12] },
          { t: 'seg', a: [9, 0], b: [0, 12] },
          { t: 'right', at: [0, 0], from: [9, 0], to: [0, 12] },
          { t: 'label', p: [4.5, 6], text: '15', dx: 12, dy: -6 },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [0, 6], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$6$', '$3\\sqrt{34}$', '$144$', '$12$'],
      answer: 3,
      solution:
        'The wire is the hypotenuse and the pole is a leg, so subtract squares: $15^2 - 9^2 = 225 - 81 = 144$, and $\\sqrt{144} = 12$ m ✓. Check a second, independent way with a scaled triple: $9 = 3 \\times 3$ and $15 = 3 \\times 5$, and in the $3$-$4$-$5$ family the $5$ plays hypotenuse — the same role $15$ plays here — so the pole is $3 \\times 4 = 12$ ✓. Guard: the pole must be shorter than the wire, and $12 < 15$ ✓. (The choice $6$ is SUBTRACTING THE SIDES, $15 - 9$, which is never how the theorem works ✗; $3\\sqrt{34}$ is TREATING THE HYPOTENUSE AS A LEG, adding $225 + 81 = 306$ ✗; $144$ is FORGETTING THE SQUARE ROOT ✗.)',
    },
    {
      q: 'A $73$ m support cable runs straight from the top of a radio mast to an anchor $48$ m (measured along the ground) from the mast’s base, as shown. How tall is the mast?',
      fig: {
        view: [-6, -6.5, 54, 61],
        elems: [
          { t: 'seg', a: [0, 0], b: [0, 55] },
          { t: 'seg', a: [0, 0], b: [48, 0] },
          { t: 'seg', a: [0, 55], b: [48, 0] },
          { t: 'right', at: [0, 0], from: [48, 0], to: [0, 55] },
          { t: 'label', p: [24, 27.5], text: '73', dx: 12, dy: -8 },
          { t: 'label', p: [24, 0], text: '48', dx: 0, dy: 14 },
          { t: 'label', p: [0, 27.5], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$55$', '$25$', '$\\sqrt{7633}$', '$121$'],
      answer: 0,
      solution:
        'The cable is the hypotenuse and the mast is a leg, so subtract: $73^2 - 48^2 = 5329 - 2304 = 3025$, and $\\sqrt{3025} = 55$ m ✓. Check a second, independent way by factoring instead of squaring: $73^2 - 48^2 = (73 - 48)(73 + 48) = 25 \\times 121 = 3025$, and $\\sqrt{25 \\times 121} = 5 \\times 11 = 55$ ✓ — the two square factors hand over the root with no long arithmetic. Guard: the mast must be shorter than the $73$ m cable, and $55 < 73$ ✓. (The choice $25$ is SUBTRACTING THE SIDES, $73 - 48$ ✗; $\\sqrt{7633}$ is TREATING THE HYPOTENUSE AS A LEG, adding $5329 + 2304$ — but the cable is the longest side, so nothing can beat $73$ ✗; $121$ is ADDING THE SIDES, $73 + 48$ ✗.)',
    },
    {
      q: 'A $26$ m zip-line cable runs straight from a tree platform to a ground anchor $24$ m (measured horizontally) from the base of the tree, as shown. How high above the ground is the platform?',
      fig: {
        view: [-3, -3, 27, 12.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [0, 10] },
          { t: 'seg', a: [0, 0], b: [24, 0] },
          { t: 'seg', a: [0, 10], b: [24, 0] },
          { t: 'right', at: [0, 0], from: [24, 0], to: [0, 10], s: 0.7 },
          { t: 'label', p: [12, 5], text: '26', dx: 12, dy: -8 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [0, 5], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$2$', '$2\\sqrt{313}$', '$10$', '$50$'],
      answer: 2,
      solution:
        'The cable is the hypotenuse, so the height satisfies $h^2 = 26^2 - 24^2 = 676 - 576 = 100$, giving $h = 10$ m ✓. Check a second, independent way by factoring out $2$: the sides become $13$ and $12$, the $5$-$12$-$13$ family with $13$ as hypotenuse, so the missing leg is $2 \\times 5 = 10$ ✓. Guard: a platform height of $10$ m against a $24$ m run matches a long, shallow ride, which is what a $26$ m cable over $24$ m of ground describes ✓. (The choice $2$ is SUBTRACTING THE SIDES, $26 - 24$ ✗; $2\\sqrt{313}$ is TREATING THE HYPOTENUSE AS A LEG, $\\sqrt{676 + 576} = \\sqrt{1252}$ ✗; $50$ is ADDING THE SIDES ✗.)',
    },
  ],
  // s4 — small legs, exact radical hypotenuse.
  [
    {
      q: 'On grid paper, a right triangle is drawn with legs of length $1$ and $3$, as shown. What is the exact length of its hypotenuse?',
      fig: {
        view: [-1, -1.2, 4.2, 2],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [0, 1]], fill: false },
          { t: 'right', at: [0, 0], from: [3, 0], to: [0, 1], s: 0.3 },
          { t: 'label', p: [1.5, 0], text: '3', dx: 0, dy: 14 },
          { t: 'label', p: [0, 0.5], text: '1', dx: -10, dy: 0 },
          { t: 'label', p: [1.5, 0.5], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$4$', '$\\sqrt{10}$', '$2\\sqrt{2}$', '$10$'],
      answer: 1,
      solution:
        'Add the squares: $1^2 + 3^2 = 1 + 9 = 10$, so the hypotenuse is $\\sqrt{10}$ ✓ — exact as it stands, since $10 = 2 \\times 5$ hides no perfect-square factor. Check a second, independent way by closing the identity: $(\\sqrt{10})^2 - 3^2 = 10 - 9 = 1 = 1^2$ ✓, so the three sides fit the theorem perfectly. Guard: $\\sqrt{10} \\approx 3.16$, just a shade longer than the $3$ leg — exactly what a very flat right triangle should give ✓. (The choice $4$ is ADDING THE SIDES, $1 + 3$ ✗; $2\\sqrt{2}$ is PROMOTING A LEG TO HYPOTENUSE, $\\sqrt{9 - 1} = \\sqrt{8}$ ✗; $10$ is FORGETTING THE SQUARE ROOT ✗.)',
    },
    {
      q: 'A small triangular pennant has two perpendicular edges of lengths $2$ and $5$, as shown. What is the exact length of its third edge?',
      fig: {
        view: [-1.2, -1.5, 6.2, 3.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [0, 2]], fill: false },
          { t: 'right', at: [0, 0], from: [5, 0], to: [0, 2], s: 0.3 },
          { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [0, 1], text: '2', dx: -10, dy: 0 },
          { t: 'label', p: [2.5, 1], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$7$', '$\\sqrt{21}$', '$\\sqrt{29}$', '$29$'],
      answer: 2,
      solution:
        'The two given edges are legs, so the third edge is the hypotenuse: $2^2 + 5^2 = 4 + 25 = 29$, giving $\\sqrt{29}$ ✓ — already simplified, because $29$ is prime. Check a second, independent way by closing the identity: $(\\sqrt{29})^2 - 5^2 = 29 - 25 = 4 = 2^2$ ✓. Guard: $\\sqrt{29} \\approx 5.39$, longer than the $5$ edge but nowhere near the sum $7$ — a hypotenuse always undercuts the walk around the corner ✓. (The choice $7$ is ADDING THE SIDES ✗; $\\sqrt{21}$ is PROMOTING A LEG TO HYPOTENUSE, from $25 - 4$ ✗; $29$ is FORGETTING THE SQUARE ROOT ✗.)',
    },
    {
      q: 'A right triangle has legs $3$ and $5$, as shown. What is the exact length of the hypotenuse?',
      fig: {
        view: [-1.2, -1.5, 6.2, 4.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [0, 3]], fill: false },
          { t: 'right', at: [0, 0], from: [5, 0], to: [0, 3], s: 0.3 },
          { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [0, 1.5], text: '3', dx: -10, dy: 0 },
          { t: 'label', p: [2.5, 1.5], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$\\sqrt{34}$', '$8$', '$4$', '$34$'],
      answer: 0,
      solution:
        'Add the squares of the legs: $3^2 + 5^2 = 9 + 25 = 34$, so the hypotenuse is $\\sqrt{34}$ ✓ — and $34 = 2 \\times 17$ has no perfect-square factor, so that is the finished form. Check a second, independent way by closing the identity: $(\\sqrt{34})^2 - 5^2 = 34 - 25 = 9 = 3^2$ ✓. Guard: $\\sqrt{34} \\approx 5.83$, safely longer than both legs ✓. (The choice $8$ is ADDING THE SIDES, $3 + 5$ ✗; $4$ is PROMOTING A LEG TO HYPOTENUSE — it is $\\sqrt{25 - 9}$, the answer to a different problem in which $5$ is the longest side ✗; $34$ is FORGETTING THE SQUARE ROOT ✗.)',
    },
  ],
  // s5 — ladder against a wall.
  [
    {
      q: 'A $41$-foot ladder leans against the side of an apartment building with its foot $9$ feet from the base of the wall. How high up the building does the ladder reach?',
      fig: {
        view: [-10, -3, 20, 44],
        elems: [
          { t: 'seg', a: [-3, 0], b: [13, 0] },
          { t: 'seg', a: [0, 0], b: [0, 42] },
          { t: 'seg', a: [9, 0], b: [0, 40] },
          { t: 'right', at: [0, 0], from: [9, 0], to: [0, 40], s: 1 },
          { t: 'label', p: [4.5, 20], text: '41', dx: 12, dy: -6 },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [0, 20], text: '?', dx: -12, dy: 0 },
        ],
      },
      choices: ['$50$ feet', '$\\sqrt{1762}$ feet', '$40$ feet', '$32$ feet'],
      answer: 2,
      solution:
        'The ladder is the hypotenuse of the wall-ground triangle, so the height satisfies $h^2 = 41^2 - 9^2 = 1681 - 81 = 1600$, and $h = 40$ feet ✓. Check a second, independent way by difference of squares, with no big products: $41^2 - 9^2 = (41 - 9)(41 + 9) = 32 \\times 50 = 1600$, and $\\sqrt{1600} = 40$ ✓. Guard: the reach must fall short of the ladder itself, and $40 < 41$ ✓, while $\\sqrt{1762} \\approx 42$ would overshoot the ladder — impossible ✗. (The choice $50$ feet is ADDING THE SIDES ✗; $\\sqrt{1762}$ feet is TREATING THE HYPOTENUSE AS A LEG, adding $1681 + 81$ ✗; $32$ feet is SUBTRACTING THE SIDES, $41 - 9$ ✗.)',
    },
    {
      q: 'A painter leans a $25$-foot ladder against a house and pulls its foot out to $15$ feet from the wall so the slope feels gentle. How far up the wall does the ladder now reach?',
      fig: {
        view: [-3, -2.5, 19, 23],
        elems: [
          { t: 'seg', a: [-2, 0], b: [17, 0] },
          { t: 'seg', a: [0, 0], b: [0, 22] },
          { t: 'seg', a: [15, 0], b: [0, 20] },
          { t: 'right', at: [0, 0], from: [15, 0], to: [0, 20], s: 0.7 },
          { t: 'label', p: [7.5, 10], text: '25', dx: 12, dy: -6 },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [0, 10], text: '?', dx: -12, dy: 0 },
        ],
      },
      choices: ['$20$ feet', '$10$ feet', '$5\\sqrt{34}$ feet', '$40$ feet'],
      answer: 0,
      solution:
        'The ladder plays hypotenuse, so subtract squares: $25^2 - 15^2 = 625 - 225 = 400$, and $\\sqrt{400} = 20$ feet ✓. Check a second, independent way through a scaled triple: $15 = 5 \\times 3$ and $25 = 5 \\times 5$ put this in the $3$-$4$-$5$ family with the $5$ as hypotenuse, so the wall height is $5 \\times 4 = 20$ ✓. Guard: pulling the foot far out should cost reach, and sure enough $20$ is well under the ladder’s $25$ feet ✓. (The choice $10$ feet is SUBTRACTING THE SIDES, $25 - 15$ ✗; $5\\sqrt{34}$ feet is TREATING THE HYPOTENUSE AS A LEG, $\\sqrt{625 + 225} = \\sqrt{850}$, which would beat the ladder itself ✗; $40$ feet is ADDING THE SIDES ✗.)',
    },
    {
      q: 'A $37$-foot ladder rests against a barn wall with its foot planted $12$ feet from the base of the wall. How high on the wall does the top of the ladder sit?',
      fig: {
        view: [-8, -3, 20, 39],
        elems: [
          { t: 'seg', a: [-3, 0], b: [14, 0] },
          { t: 'seg', a: [0, 0], b: [0, 37] },
          { t: 'seg', a: [12, 0], b: [0, 35] },
          { t: 'right', at: [0, 0], from: [12, 0], to: [0, 35], s: 0.9 },
          { t: 'label', p: [6, 17.5], text: '37', dx: 12, dy: -6 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [0, 17.5], text: '?', dx: -12, dy: 0 },
        ],
      },
      choices: ['$25$ feet', '$\\sqrt{1513}$ feet', '$49$ feet', '$35$ feet'],
      answer: 3,
      solution:
        'The ladder is the hypotenuse, so the height is $\\sqrt{37^2 - 12^2} = \\sqrt{1369 - 144} = \\sqrt{1225} = 35$ feet ✓. Check a second, independent way by difference of squares: $37^2 - 12^2 = (37 - 12)(37 + 12) = 25 \\times 49$, and $\\sqrt{25 \\times 49} = 5 \\times 7 = 35$ ✓ — both factors are perfect squares, so the root falls out instantly. Guard: $35 < 37$, as the reach of a leaning ladder must be ✓. (The choice $25$ feet is SUBTRACTING THE SIDES, $37 - 12$ ✗; $\\sqrt{1513}$ feet is TREATING THE HYPOTENUSE AS A LEG, adding $1369 + 144$ ✗; $49$ feet is ADDING THE SIDES ✗.)',
    },
  ],
  // s6 — rectangle diagonal.
  [
    {
      q: 'A rectangular notebook cover is $12$ cm long and $5$ cm wide. How long is the diagonal drawn across it?',
      fig: {
        view: [-1.5, -2.5, 14.5, 7],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 5], [0, 5]], fill: false },
          { t: 'seg', a: [0, 0], b: [12, 5], dash: true },
          { t: 'right', at: [12, 0], from: [0, 0], to: [12, 5] },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [12, 2.5], text: '5', dx: 12, dy: 0 },
          { t: 'label', p: [6, 2.5], text: '?', dx: -12, dy: -6 },
        ],
      },
      choices: ['$17$', '$\\sqrt{119}$', '$60$', '$13$'],
      answer: 3,
      solution:
        'The diagonal splits the rectangle into right triangles whose legs are the two sides, so it measures $\\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$ cm ✓. Check a second, independent way through the famous triple: legs $5$ and $12$ belong to the $5$-$12$-$13$ family, so the hypotenuse is $13$ with no squaring at all ✓. Guard: $13$ beats the $12$ cm side by a little, exactly how a shallow diagonal should behave ✓. (The choice $17$ is ADDING THE SIDES, $12 + 5$ ✗; $\\sqrt{119}$ is PROMOTING A LEG TO HYPOTENUSE, from $144 - 25$ ✗; $60$ is MULTIPLYING THE SIDES — that is the cover’s area in square centimeters, not a length ✗.)',
    },
    {
      q: 'A rectangular practice field is $36$ m long and $15$ m wide. A groundskeeper walks straight from one corner to the opposite corner, as shown. How long is that walk?',
      fig: {
        view: [-4, -6, 42, 19],
        elems: [
          { t: 'poly', pts: [[0, 0], [36, 0], [36, 15], [0, 15]], fill: false },
          { t: 'seg', a: [0, 0], b: [36, 15], dash: true },
          { t: 'right', at: [36, 0], from: [0, 0], to: [36, 15], s: 1.4 },
          { t: 'label', p: [18, 0], text: '36', dx: 0, dy: 14 },
          { t: 'label', p: [36, 7.5], text: '15', dx: 14, dy: 0 },
          { t: 'label', p: [18, 7.5], text: '?', dx: -12, dy: -6 },
        ],
      },
      choices: ['$51$', '$39$', '$3\\sqrt{119}$', '$1521$'],
      answer: 1,
      solution:
        'The corner-to-corner path is the hypotenuse of a right triangle with legs $36$ and $15$: $36^2 + 15^2 = 1296 + 225 = 1521$, and $\\sqrt{1521} = 39$ m ✓. Check a second, independent way through a scaled triple: dividing by $3$ gives $12$ and $5$, the $5$-$12$-$13$ family, so the diagonal is $3 \\times 13 = 39$ ✓. Guard: the diagonal must beat the $36$ m length but stay under the $51$ m corner walk, and $36 < 39 < 51$ ✓. (The choice $51$ is ADDING THE SIDES — the walk along two edges, not the shortcut ✗; $3\\sqrt{119}$ is PROMOTING A LEG TO HYPOTENUSE, $\\sqrt{1296 - 225} = \\sqrt{1071}$ ✗; $1521$ is FORGETTING THE SQUARE ROOT ✗.)',
    },
    {
      q: 'A television screen is a rectangle $24$ inches wide and $10$ inches tall. Screens are advertised by their diagonal measure — what size is this one?',
      fig: {
        view: [-2.5, -3.5, 27.5, 13],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [24, 10], [0, 10]], fill: false },
          { t: 'seg', a: [0, 0], b: [24, 10], dash: true },
          { t: 'right', at: [24, 0], from: [0, 0], to: [24, 10], s: 0.7 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [24, 5], text: '10', dx: 12, dy: 0 },
          { t: 'label', p: [12, 5], text: '?', dx: -12, dy: -6 },
        ],
      },
      choices: ['$26$ inches', '$34$ inches', '$14$ inches', '$2\\sqrt{119}$ inches'],
      answer: 0,
      solution:
        'The diagonal is the hypotenuse of a right triangle with legs $24$ and $10$: $24^2 + 10^2 = 576 + 100 = 676$, and $\\sqrt{676} = 26$ inches ✓. Check a second, independent way with a scaled triple: halving gives $12$ and $5$, the $5$-$12$-$13$ family, so the diagonal is $2 \\times 13 = 26$ ✓. Guard: a diagonal always beats the longest side but never the sum of the sides, and $24 < 26 < 34$ ✓. (The choice $34$ inches is ADDING THE SIDES ✗; $14$ inches is SUBTRACTING THE SIDES, $24 - 10$, which is shorter than the screen’s own width — impossible for a diagonal ✗; $2\\sqrt{119}$ inches is PROMOTING A LEG TO HYPOTENUSE, from $576 - 100$ ✗.)',
    },
  ],
  // s7 — converse test: which set of sides is right.
  [
    {
      q: 'Which set of side lengths makes a right triangle?',
      choices: ['$4$, $6$, $9$', '$5$, $12$, $13$', '$7$, $8$, $11$', '$6$, $9$, $13$'],
      answer: 1,
      solution:
        'Run the converse on each set, always testing the longest side as the would-be hypotenuse. For $5$, $12$, $13$: $25 + 144 = 169 = 13^2$ ✓. Check a second, independent way: $5$-$12$-$13$ is one of the famous Pythagorean triples, so the match is guaranteed before any arithmetic ✓. The rest are cases of TRUSTING A NEAR MISS: $4$, $6$, $9$ gives $16 + 36 = 52 \\ne 81$ ✗; $7$, $8$, $11$ gives $49 + 64 = 113 \\ne 121$ ✗; and $6$, $9$, $13$ gives $36 + 81 = 117 \\ne 169$ ✗. Each of those is a perfectly buildable triangle — it just carries no right angle, because only an exact match makes one.',
    },
    {
      q: 'A builder can pick one of four sets of board lengths to nail into a triangular frame. Which set produces a frame with a right angle?',
      choices: ['$5$, $9$, $12$', '$10$, $12$, $16$', '$7$, $11$, $13$', '$8$, $15$, $17$'],
      answer: 3,
      solution:
        'Test each set with its longest board as the candidate hypotenuse. For $8$, $15$, $17$: $64 + 225 = 289 = 17^2$ ✓. Check a second, independent way: $8$-$15$-$17$ is a famous Pythagorean triple, so it was going to pass before the squares were ever computed ✓. The others are cases of TRUSTING A NEAR MISS: $5$, $9$, $12$ gives $25 + 81 = 106 \\ne 144$ ✗; $10$, $12$, $16$ gives $100 + 144 = 244 \\ne 256$ ✗; and $7$, $11$, $13$ comes agonizingly close with $49 + 121 = 170 \\ne 169$ ✗ — one unit off, and the converse forgives nothing.',
    },
    {
      q: 'Exactly one of these sets of side lengths belongs to a right triangle. Which one?',
      choices: ['$39$, $80$, $90$', '$36$, $77$, $84$', '$39$, $80$, $89$', '$48$, $55$, $74$'],
      answer: 2,
      solution:
        'Square and compare, using each set’s longest side as the would-be hypotenuse. For $39$, $80$, $89$: $1521 + 6400 = 7921 = 89^2$ ✓ — a genuine right triangle. Check a second, independent way by difference of squares: $89^2 - 80^2 = (89 - 80)(89 + 80) = 9 \\times 169 = 1521 = 39^2$ ✓, closing the same equation from the other end. The rest are cases of TRUSTING A NEAR MISS: $39$, $80$, $90$ gives $1521 + 6400 = 7921 \\ne 8100$ ✗ (one unit past the true hypotenuse, and close scores nothing); $36$, $77$, $84$ gives $1296 + 5929 = 7225 \\ne 7056$ ✗; and $48$, $55$, $74$ gives $2304 + 3025 = 5329 \\ne 5476$ ✗.',
    },
  ],
  // s8 — hypotenuse and one leg, exact radical leg.
  [
    {
      q: 'A right triangle has hypotenuse $9$ and one leg of length $3$. What is the exact length of the other leg?',
      choices: ['$6\\sqrt{2}$', '$6$', '$3\\sqrt{10}$', '$12$'],
      answer: 0,
      solution:
        'The hypotenuse is known, so subtract: $9^2 - 3^2 = 81 - 9 = 72$, and $\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$ ✓ — pulling the $36$ out of the radical is the finishing move. Check a second, independent way by closing the identity: $(6\\sqrt{2})^2 + 3^2 = 72 + 9 = 81 = 9^2$ ✓. Guard: $6\\sqrt{2} \\approx 8.49$, which stays under the hypotenuse $9$, as any leg must ✓. (The choice $6$ is SUBTRACTING THE SIDES, $9 - 3$ ✗; $3\\sqrt{10}$ is TREATING THE HYPOTENUSE AS A LEG, $\\sqrt{81 + 9} = \\sqrt{90}$, which would outgrow the longest side ✗; $12$ is ADDING THE SIDES ✗.)',
    },
    {
      q: 'A right triangle has hypotenuse $6$ and one leg of length $3$. Find the exact length of the other leg.',
      choices: ['$3$', '$3\\sqrt{5}$', '$3\\sqrt{3}$', '$27$'],
      answer: 2,
      solution:
        'Subtract squares: $6^2 - 3^2 = 36 - 9 = 27$, and $\\sqrt{27} = \\sqrt{9 \\times 3} = 3\\sqrt{3}$ ✓. Check a second, independent way by closing the identity: $(3\\sqrt{3})^2 + 3^2 = 27 + 9 = 36 = 6^2$ ✓ — the three sides lock together exactly. Guard: $3\\sqrt{3} \\approx 5.20$ sits between the $3$ leg and the $6$ hypotenuse, right where the middle side belongs ✓. (The choice $3$ is SUBTRACTING THE SIDES, $6 - 3$ — a coincidence that it matches the given leg should itself raise suspicion ✗; $3\\sqrt{5}$ is TREATING THE HYPOTENUSE AS A LEG, $\\sqrt{36 + 9} = \\sqrt{45}$ ✗; $27$ is FORGETTING THE SQUARE ROOT, reporting the other leg’s square ✗.)',
    },
    {
      q: 'The hypotenuse of a right triangle is $26$, and one of its legs is $13$. What is the exact length of the remaining leg?',
      choices: ['$13\\sqrt{5}$', '$13\\sqrt{3}$', '$507$', '$13$'],
      answer: 1,
      solution:
        'Subtract squares: $26^2 - 13^2 = 676 - 169 = 507$, and $\\sqrt{507} = \\sqrt{169 \\times 3} = 13\\sqrt{3}$ ✓ — always hunt for the biggest square factor before calling a radical done. Check a second, independent way by closing the identity: $(13\\sqrt{3})^2 + 13^2 = 507 + 169 = 676 = 26^2$ ✓. Guard: $13\\sqrt{3} \\approx 22.52$, longer than the $13$ leg and shorter than the $26$ hypotenuse ✓. (The choice $13$ is SUBTRACTING THE SIDES, $26 - 13$ ✗; $13\\sqrt{5}$ is TREATING THE HYPOTENUSE AS A LEG, $\\sqrt{676 + 169} = \\sqrt{845}$ ✗; $507$ is FORGETTING THE SQUARE ROOT, reporting the other leg’s square ✗.)',
    },
  ],
  // s9 — perpendicular walk, exact radical distance.
  [
    {
      q: 'Starting at her front door, a cyclist rides $4$ km west and then $8$ km south. Exactly how far is she from her front door?',
      choices: ['$12$ km', '$4\\sqrt{3}$ km', '$80$ km', '$4\\sqrt{5}$ km'],
      answer: 3,
      solution:
        'West and south are perpendicular, so the two rides are legs and the direct distance is the hypotenuse: $\\sqrt{4^2 + 8^2} = \\sqrt{16 + 64} = \\sqrt{80} = \\sqrt{16 \\times 5} = 4\\sqrt{5}$ km ✓. Check a second, independent way by factoring first: the rides are $4 \\times 1$ and $4 \\times 2$, so the distance is $4\\sqrt{1^2 + 2^2} = 4\\sqrt{5}$ ✓ — scaling out the common factor before squaring keeps every number tiny. Guard: $4\\sqrt{5} \\approx 8.94$, longer than the $8$ km leg but far under the $12$ km of pedaling ✓. (The choice $12$ km is ADDING THE TWO WALKS — the route length, not the separation ✗; $4\\sqrt{3}$ km is PROMOTING A LEG TO HYPOTENUSE, $\\sqrt{64 - 16} = \\sqrt{48}$ ✗; $80$ km is FORGETTING THE SQUARE ROOT ✗.)',
    },
    {
      q: 'A robot vacuum leaves its charging dock, travels $6$ m east, turns, and travels $3$ m north before stopping. Exactly how far is the robot from its dock?',
      choices: ['$9$ m', '$3\\sqrt{5}$ m', '$45$ m', '$3\\sqrt{3}$ m'],
      answer: 1,
      solution:
        'East and north are perpendicular legs, so the dock-to-robot distance is the hypotenuse: $\\sqrt{6^2 + 3^2} = \\sqrt{36 + 9} = \\sqrt{45} = \\sqrt{9 \\times 5} = 3\\sqrt{5}$ m ✓. Check a second, independent way by factoring first: the trips are $3 \\times 2$ and $3 \\times 1$, so the distance is $3\\sqrt{2^2 + 1^2} = 3\\sqrt{5}$ ✓. Guard: $3\\sqrt{5} \\approx 6.7$ m — a little beyond the $6$ m leg, well short of the $9$ m of driving ✓. (The choice $9$ m is ADDING THE TWO WALKS ✗; $3\\sqrt{3}$ m is PROMOTING A LEG TO HYPOTENUSE, $\\sqrt{36 - 9} = \\sqrt{27}$ ✗; $45$ m is FORGETTING THE SQUARE ROOT ✗.)',
    },
    {
      q: 'Leaving the harbor, a sailboat sails $10$ km south and then $5$ km west. Exactly how far is the boat from the harbor?',
      choices: ['$5\\sqrt{5}$ km', '$15$ km', '$5\\sqrt{3}$ km', '$125$ km'],
      answer: 0,
      solution:
        'South and west are perpendicular, so the straight-line distance back to the harbor is a hypotenuse: $\\sqrt{10^2 + 5^2} = \\sqrt{100 + 25} = \\sqrt{125} = \\sqrt{25 \\times 5} = 5\\sqrt{5}$ km ✓. Check a second, independent way by factoring first: the legs are $5 \\times 2$ and $5 \\times 1$, so the distance is $5\\sqrt{2^2 + 1^2} = 5\\sqrt{5}$ ✓. Guard: $5\\sqrt{5} \\approx 11.18$ km, longer than the $10$ km leg and under the $15$ km sailed ✓. (The choice $15$ km is ADDING THE TWO WALKS — the distance traveled, not the distance away ✗; $5\\sqrt{3}$ km is PROMOTING A LEG TO HYPOTENUSE, $\\sqrt{100 - 25} = \\sqrt{75}$ ✗; $125$ km is FORGETTING THE SQUARE ROOT ✗.)',
    },
  ],
  // s10 — algebraic legs, hypotenuse given, quadratic for the shorter leg.
  [
    {
      q: 'The legs of a right triangle are $x$ and $x + 7$, and the hypotenuse is $17$. What is the length of the shorter leg?',
      fig: {
        view: [-3, -2.5, 17.5, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [0, 8]], fill: false },
          { t: 'right', at: [0, 0], from: [15, 0], to: [0, 8] },
          { t: 'label', p: [7.5, 0], text: 'x + 7', dx: 0, dy: 14 },
          { t: 'label', p: [0, 4], text: 'x', dx: -10, dy: 0 },
          { t: 'label', p: [7.5, 4], text: '17', dx: 12, dy: -8 },
        ],
      },
      choices: ['$8$', '$15$', '$10$', '$5$'],
      answer: 0,
      solution:
        'Set up the theorem: $x^2 + (x+7)^2 = 289$, so $2x^2 + 14x + 49 = 289$, which halves to $x^2 + 7x - 120 = 0$. Factor: $(x + 15)(x - 8) = 0$, and a length must be positive, so $x = 8$ ✓. Check a second, independent way by hunting the triple: a whole-number right triangle with hypotenuse $17$ is the $8$-$15$-$17$ family, whose legs differ by exactly $7$ — so the legs are $8$ and $15$, and the shorter is $8$ ✓. Confirm: $64 + 225 = 289 = 17^2$ ✓. (The choice $15$ is ANSWERING THE LONGER LEG, $x + 7$ ✗; $5$ is SOLVING IT LINEARLY, from $x + (x + 7) = 17$ as if the legs summed to the hypotenuse ✗; $10$ is SUBTRACTING THE OFFSET, $17 - 7$ ✗.)',
    },
    {
      q: 'The legs of a right triangle are $x$ and $x + 4$, and the hypotenuse is $20$. Find the length of the shorter leg.',
      fig: {
        view: [-3, -2.5, 18.5, 14],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [0, 12]], fill: false },
          { t: 'right', at: [0, 0], from: [16, 0], to: [0, 12] },
          { t: 'label', p: [8, 0], text: 'x + 4', dx: 0, dy: 14 },
          { t: 'label', p: [0, 6], text: 'x', dx: -10, dy: 0 },
          { t: 'label', p: [8, 6], text: '20', dx: 12, dy: -8 },
        ],
      },
      choices: ['$16$', '$8$', '$10$', '$12$'],
      answer: 3,
      solution:
        'The theorem gives $x^2 + (x+4)^2 = 400$, so $2x^2 + 8x + 16 = 400$, which halves to $x^2 + 4x - 192 = 0$. Factor: $(x + 16)(x - 12) = 0$, so the positive root is $x = 12$ ✓. Check a second, independent way through scaling: a hypotenuse of $20 = 4 \\times 5$ suggests the $3$-$4$-$5$ family scaled by $4$, giving legs $12$ and $16$ — which differ by $4$, exactly as required — so the shorter leg is $12$ ✓. Confirm: $144 + 256 = 400 = 20^2$ ✓. (The choice $16$ is ANSWERING THE LONGER LEG ✗; $8$ is SOLVING IT LINEARLY, from $x + (x + 4) = 20$ ✗; $10$ is HALVING THE HYPOTENUSE, which has nothing to do with the legs here ✗.)',
    },
    {
      q: 'A right triangle has legs $x$ and $x + 14$ and hypotenuse $34$. What is the length of the shorter leg?',
      fig: {
        view: [-4, -4, 33, 18.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [30, 0], [0, 16]], fill: false },
          { t: 'right', at: [0, 0], from: [30, 0], to: [0, 16], s: 0.8 },
          { t: 'label', p: [15, 0], text: 'x + 14', dx: 0, dy: 14 },
          { t: 'label', p: [0, 8], text: 'x', dx: -12, dy: 0 },
          { t: 'label', p: [15, 8], text: '34', dx: 12, dy: -8 },
        ],
      },
      choices: ['$30$', '$10$', '$16$', '$20$'],
      answer: 2,
      solution:
        'Write the theorem: $x^2 + (x+14)^2 = 1156$, so $2x^2 + 28x + 196 = 1156$, which halves to $x^2 + 14x - 480 = 0$. Factor: $(x + 30)(x - 16) = 0$, so $x = 16$ ✓. Check a second, independent way through scaling: $34 = 2 \\times 17$ points to the $8$-$15$-$17$ family scaled by $2$, with legs $16$ and $30$ — a difference of $14$, matching the problem — so the shorter leg is $16$ ✓. Confirm: $256 + 900 = 1156 = 34^2$ ✓. (The choice $30$ is ANSWERING THE LONGER LEG, $x + 14$ ✗; $10$ is SOLVING IT LINEARLY, from $x + (x + 14) = 34$ ✗; $20$ is SUBTRACTING THE OFFSET, $34 - 14$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 6,
  sections: { '6.1': s61 },
}
