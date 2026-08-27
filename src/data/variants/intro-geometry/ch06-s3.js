// Introduction to Geometry chapter 6 — variations for section 6.3
// (Pythagorean Triples). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every triple was verified by two routes that do not share arithmetic:
//    the scaling route (factor down to a primitive family, scale back up)
//    against a raw squares check (e.g. 33² + 56² = 1089 + 3136 = 4225 = 65²).
//    Both routes must agree before a key is written down.
//  - Two of the thirty triangles are primitive triples with no common factor
//    (33-56-65 and 28-45-53); there the solution squares first and then
//    closes the loop by confirming the full Pythagorean identity.
//  - Every figure was built from its own numbers: legs run along the axes,
//    hypotenuse labels sit at the true midpoint, and every right-angle mark
//    sits at a corner whose arms are exactly perpendicular.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS. The traps running through this section: ADDING THE LEGS,
//    SUBTRACTING THE SIDES, FORGETTING THE SQUARE ROOT, GRABBING THE WRONG
//    FAMILY, TREATING THE HYPOTENUSE AS A LEG, STOPPING AT THE PRIMITIVE,
//    FORCING THE 3-4-5 FAMILY, DISTRUSTING A SCALED TRIPLE, DISTRUSTING AN
//    UNFAMILIAR TRIPLE, ANSWERING THE LONGER LEG, HALVING THE HYPOTENUSE,
//    ANSWERING THE SCALE FACTOR, the TOTAL PATH instead of the straight
//    line, CONFUSING THE SCALE FACTOR WITH THE FAMILY, STOPPING HALFWAY,
//    GRABBING A FACTOR OF ONE SIDE, ANSWERING THE MIDDLE SIDE, ADDING 2 TO
//    THE WRONG SIDE, and DROPPING THE +4.
//  - No two choices inside an item name the same value.

const s63 = [
  // s1 — legs to hypotenuse by recognizing a scaled triple.
  [
    {
      q: 'A triangular racing sail has two edges that meet at a right angle: one is $16$ ft long and the other is $12$ ft, as shown. How many feet long is the sail’s third edge?',
      fig: {
        view: [-3, -3, 19, 14],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [0, 12]], fill: false },
          { t: 'right', at: [0, 0], from: [16, 0], to: [0, 12], s: 0.6 },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [0, 6], text: '12', dx: -12, dy: 0 },
          { t: 'label', p: [8, 6], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$28$', '$4\\sqrt{7}$', '$20$', '$13$'],
      answer: 2,
      solution:
        'Both edges share the factor $4$: $16 = 4 \\times 4$ and $12 = 4 \\times 3$. That is the $3$-$4$-$5$ family scaled by $4$, so the third edge — the hypotenuse — is $4 \\times 5 = 20$ ft ✓. Check by squaring: $16^2 + 12^2 = 256 + 144 = 400 = 20^2$ ✓. (The choice $28$ is ADDING THE LEGS, which ignores the right angle entirely ✗; $4\\sqrt{7}$ comes from TREATING THE $16$ AS THE HYPOTENUSE and computing $\\sqrt{256 - 144}$, but the longest side is opposite the right angle, and that side is the unknown ✗; $13$ is GRABBING THE WRONG FAMILY — a $12$ pairs with $13$ only in $5$-$12$-$13$, and there is no $5$ here ✗.)',
    },
    {
      q: 'A ladder leans against a wall. Its foot sits $20$ ft from the base of the wall and its top touches the wall $15$ ft above the ground, as shown. How many feet long is the ladder?',
      fig: {
        view: [-3, -3, 24, 18],
        elems: [
          { t: 'seg', a: [0, 0], b: [20, 0] },
          { t: 'seg', a: [0, 0], b: [0, 15] },
          { t: 'seg', a: [20, 0], b: [0, 15], dash: true },
          { t: 'right', at: [0, 0], from: [20, 0], to: [0, 15], s: 0.8 },
          { t: 'label', p: [10, 0], text: '20', dx: 0, dy: 14 },
          { t: 'label', p: [0, 7.5], text: '15', dx: -12, dy: 0 },
          { t: 'label', p: [10, 7.5], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$25$', '$35$', '$17$', '$625$'],
      answer: 0,
      solution:
        'The ground distance and the wall height share the factor $5$: $20 = 5 \\times 4$ and $15 = 5 \\times 3$. That is the $3$-$4$-$5$ family scaled by $5$, so the ladder — the hypotenuse — is $5 \\times 5 = 25$ ft ✓. Squaring agrees: $20^2 + 15^2 = 400 + 225 = 625 = 25^2$ ✓. (The choice $35$ is ADDING THE LEGS ✗; $17$ is GRABBING THE WRONG FAMILY — a $15$ needs an $8$ beside it before $17$ can appear ✗; $625$ is FORGETTING THE SQUARE ROOT, reporting $c^2$ instead of $c$ ✗.)',
    },
    {
      q: 'A carpenter’s corner square has two perpendicular arms, one $24$ inches long and one $18$ inches long, as shown. How many inches long is the diagonal joining the arm tips?',
      fig: {
        view: [-4, -4, 28, 21],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [0, 18]], fill: false },
          { t: 'right', at: [0, 0], from: [24, 0], to: [0, 18], s: 0.9 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [0, 9], text: '18', dx: -12, dy: 0 },
          { t: 'label', p: [12, 9], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$42$', '$25$', '$6$', '$30$'],
      answer: 3,
      solution:
        'Factor $6$ out of both arms: $24 = 6 \\times 4$ and $18 = 6 \\times 3$ — the $3$-$4$-$5$ family scaled by $6$. The diagonal is $6 \\times 5 = 30$ inches ✓. Check: $24^2 + 18^2 = 576 + 324 = 900 = 30^2$ ✓. (The choice $42$ is ADDING THE LEGS ✗; $25$ is GRABBING THE WRONG FAMILY — $24$ belongs to $7$-$24$-$25$ only next to a leg of $7$, and the other arm here is $18$ ✗; $6$ is SUBTRACTING THE SIDES, and no hypotenuse can be shorter than a leg ✗.)',
    },
  ],
  // s2 — leg and hypotenuse to the missing leg.
  [
    {
      q: 'In the right triangle shown, one leg is $16$ and the hypotenuse is $34$. What is the length of the other leg?',
      fig: {
        view: [-4, -4, 20, 33],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [0, 30]], fill: false },
          { t: 'right', at: [0, 0], from: [16, 0], to: [0, 30], s: 0.7 },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [0, 15], text: '?', dx: -12, dy: 0 },
          { t: 'label', p: [8, 15], text: '34', dx: 14, dy: -8 },
        ],
      },
      choices: ['$30$', '$18$', '$900$', '$2\\sqrt{353}$'],
      answer: 0,
      solution:
        'Halve both givens: leg $8$, hypotenuse $17$ — the $8$-$15$-$17$ family. The missing member is $15$, so scaling back up by $2$ gives $30$ ✓. Check: $34^2 - 16^2 = 1156 - 256 = 900 = 30^2$ ✓. (The choice $18$ is SUBTRACTING THE SIDES, $34 - 16$ ✗; $900$ is FORGETTING THE SQUARE ROOT ✗; $2\\sqrt{353}$ is TREATING THE HYPOTENUSE AS A LEG and computing $\\sqrt{16^2 + 34^2}$ — but $34$ is the longest side, not a leg ✗.)',
    },
    {
      q: 'The screen of a small television is a rectangle with a $26$-inch diagonal and a height of $10$ inches, as shown. How many inches wide is the screen?',
      fig: {
        view: [-3, -4, 27, 13],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [24, 10], [0, 10]], fill: false },
          { t: 'seg', a: [0, 0], b: [24, 10], dash: true },
          { t: 'right', at: [24, 0], from: [0, 0], to: [24, 10], s: 0.85 },
          { t: 'label', p: [12, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [24, 5], text: '10', dx: 14, dy: 0 },
          { t: 'label', p: [12, 5], text: '26', dx: -12, dy: -8 },
        ],
      },
      choices: ['$16$', '$24$', '$576$', '$2\\sqrt{194}$'],
      answer: 1,
      solution:
        'The diagonal cuts the screen into right triangles with leg $10$ and hypotenuse $26$. Factor $2$ from both: $5$ and $13$ — the $5$-$12$-$13$ family with $13$ as hypotenuse. The missing leg is $12$, so the width is $2 \\times 12 = 24$ inches ✓. Check: $26^2 - 10^2 = 676 - 100 = 576 = 24^2$ ✓. (The choice $16$ is SUBTRACTING THE SIDES, $26 - 10$ ✗; $576$ is FORGETTING THE SQUARE ROOT ✗; $2\\sqrt{194}$ is TREATING THE HYPOTENUSE AS A LEG, computing $\\sqrt{10^2 + 26^2}$, which builds a side longer than the diagonal itself ✗.)',
    },
    {
      q: 'A right triangle has a hypotenuse of $65$ and one leg of length $33$, as shown. Find the length of the remaining leg.',
      fig: {
        view: [-7, -6, 62, 37],
        elems: [
          { t: 'poly', pts: [[0, 0], [56, 0], [0, 33]], fill: false },
          { t: 'right', at: [0, 0], from: [56, 0], to: [0, 33], s: 1.9 },
          { t: 'label', p: [28, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [0, 16.5], text: '33', dx: -14, dy: 0 },
          { t: 'label', p: [28, 16.5], text: '65', dx: 14, dy: -8 },
        ],
      },
      choices: ['$44$', '$32$', '$56$', '$63$'],
      answer: 2,
      solution:
        'Here $33$ and $65$ share no common factor, so subtract squares: $65^2 - 33^2 = 4225 - 1089 = 3136 = 56^2$, and the other leg is $56$ ✓. This uncovers the primitive triple $33$-$56$-$65$; confirm it closes: $1089 + 3136 = 4225 = 65^2$ ✓. A hypotenuse of $65$ heads several whole-number triples, and only $56$ partners with a leg of $33$. (The choice $44$ is FORCING THE $3$-$4$-$5$ FAMILY — $33 = 11 \\times 3$ would demand a hypotenuse of $55$, not $65$ ✗; $32$ is SUBTRACTING THE SIDES ✗; $63$ is GRABBING THE WRONG $65$-TRIPLE: $63$ pairs with $16$, since $16^2 + 63^2 = 65^2$, not with $33$ ✗.)',
    },
  ],
  // s3 — big legs to hypotenuse.
  [
    {
      q: 'A right triangle has legs $21$ and $72$, as shown. Factor out a common factor to find its hypotenuse.',
      fig: {
        view: [-8, -8, 79, 27],
        elems: [
          { t: 'poly', pts: [[0, 0], [72, 0], [0, 21]], fill: false },
          { t: 'right', at: [0, 0], from: [72, 0], to: [0, 21], s: 2.4 },
          { t: 'label', p: [36, 0], text: '72', dx: 0, dy: 14 },
          { t: 'label', p: [0, 10.5], text: '21', dx: -14, dy: 0 },
          { t: 'label', p: [36, 10.5], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$25$', '$75$', '$93$', '$51$'],
      answer: 1,
      solution:
        'Both legs are multiples of $3$: $21 = 3 \\times 7$ and $72 = 3 \\times 24$. That is the $7$-$24$-$25$ family scaled by $3$, so the hypotenuse is $3 \\times 25 = 75$ ✓. Check: $21^2 + 72^2 = 441 + 5184 = 5625 = 75^2$ ✓. (The choice $25$ is STOPPING AT THE PRIMITIVE, forgetting to scale back up by $3$ ✗; $93$ is ADDING THE LEGS ✗; $51$ is SUBTRACTING THE SIDES ✗.)',
    },
    {
      q: 'The legs of the right triangle shown measure $18$ and $80$. Which of these is its hypotenuse?',
      fig: {
        view: [-9, -8, 88, 24],
        elems: [
          { t: 'poly', pts: [[0, 0], [80, 0], [0, 18]], fill: false },
          { t: 'right', at: [0, 0], from: [80, 0], to: [0, 18], s: 2.7 },
          { t: 'label', p: [40, 0], text: '80', dx: 0, dy: 14 },
          { t: 'label', p: [0, 9], text: '18', dx: -14, dy: 0 },
          { t: 'label', p: [40, 9], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$41$', '$98$', '$62$', '$82$'],
      answer: 3,
      solution:
        'Halve both legs: $9$ and $40$ — the $9$-$40$-$41$ triple. Scale back by $2$: the hypotenuse is $2 \\times 41 = 82$ ✓. Check: $18^2 + 80^2 = 324 + 6400 = 6724 = 82^2$ ✓. The famous four families are not the only triples; $9$-$40$-$41$ earns a spot in the toolbox. (The choice $41$ is STOPPING AT THE PRIMITIVE ✗; $98$ is ADDING THE LEGS ✗; $62$ is SUBTRACTING THE SIDES ✗.)',
    },
    {
      q: 'A rectangular parking lot measures $30$ m by $40$ m. A painted stripe runs corner to corner, as shown. How many meters long is the stripe?',
      fig: {
        view: [-5, -6, 45, 34],
        elems: [
          { t: 'poly', pts: [[0, 0], [40, 0], [40, 30], [0, 30]], fill: false },
          { t: 'seg', a: [0, 0], b: [40, 30], dash: true },
          { t: 'right', at: [40, 0], from: [0, 0], to: [40, 30], s: 1.4 },
          { t: 'label', p: [20, 0], text: '40', dx: 0, dy: 14 },
          { t: 'label', p: [40, 15], text: '30', dx: 14, dy: 0 },
          { t: 'label', p: [20, 15], text: '?', dx: -14, dy: -6 },
        ],
      },
      choices: ['$70$', '$5$', '$50$', '$41$'],
      answer: 2,
      solution:
        'The stripe is the hypotenuse of a right triangle with legs $30$ and $40$ — the $3$-$4$-$5$ family scaled by $10$ — so it is $10 \\times 5 = 50$ m long ✓. Check: $30^2 + 40^2 = 900 + 1600 = 2500 = 50^2$ ✓. (The choice $70$ is ADDING THE LEGS — the walk around the corner, not the cut across ✗; $5$ is STOPPING AT THE PRIMITIVE ✗; $41$ is GRABBING THE WRONG FAMILY — a $40$ joins $9$-$40$-$41$ only next to a $9$ ✗.)',
    },
  ],
  // s4 — which set is NOT a right triangle.
  [
    {
      q: 'Three of these sets of side lengths make right triangles. Which set is the odd one out — NOT a right triangle?',
      choices: ['$5$, $12$, $13$', '$6$, $8$, $10$', '$9$, $40$, $41$', '$5$, $6$, $8$'],
      answer: 3,
      solution:
        'Test the suspect with the longest side as hypotenuse: $5^2 + 6^2 = 25 + 36 = 61$, but $8^2 = 64$ — no match, so $5$, $6$, $8$ is not a right triangle ✓. It misses by only $3$, which is exactly why eyeballing fails and the arithmetic decides. The other three all pass: $5^2 + 12^2 = 25 + 144 = 169 = 13^2$ ✓; $6$-$8$-$10$ is $2 \\times (3$-$4$-$5)$, and $36 + 64 = 100 = 10^2$ ✓; $9^2 + 40^2 = 81 + 1600 = 1681 = 41^2$ ✓. (Accusing $6$, $8$, $10$ is DISTRUSTING A SCALED TRIPLE ✗; accusing $9$, $40$, $41$ is DISTRUSTING AN UNFAMILIAR TRIPLE — the famous families are common, not exhaustive ✗; accusing $5$, $12$, $13$ means doubting one of the four classics ✗.)',
    },
    {
      q: 'Which one of the following sets of three lengths cannot be the sides of a right triangle?',
      choices: ['$9$, $12$, $16$', '$9$, $12$, $15$', '$8$, $15$, $17$', '$7$, $24$, $25$'],
      answer: 0,
      solution:
        'Check the suspect with $16$ as hypotenuse: $9^2 + 12^2 = 81 + 144 = 225$, but $16^2 = 256$ — no match, so $9$, $12$, $16$ fails ✓. In fact $225 = 15^2$: legs of $9$ and $12$ demand a hypotenuse of exactly $15$, and this set stretched it to $16$. The rest all hold: $9$-$12$-$15$ is $3 \\times (3$-$4$-$5)$ ✓; $8^2 + 15^2 = 64 + 225 = 289 = 17^2$ ✓; $7^2 + 24^2 = 49 + 576 = 625 = 25^2$ ✓. (Accusing $9$, $12$, $15$ is DISTRUSTING A SCALED TRIPLE — it is the honest version of the imposter beside it ✗; accusing $8$, $15$, $17$ or $7$, $24$, $25$ is DOUBTING A CLASSIC — memorize the famous four and trust them ✗ ✗.)',
    },
    {
      q: 'Exactly one of these sets of side lengths fails to make a right triangle. Which one?',
      choices: ['$10$, $24$, $26$', '$10$, $20$, $24$', '$15$, $20$, $25$', '$20$, $21$, $29$'],
      answer: 1,
      solution:
        'Test $10$, $20$, $24$ with $24$ as hypotenuse: $10^2 + 20^2 = 100 + 400 = 500$, while $24^2 = 576$ — no match, so this set is the failure ✓. The others hold up: $10$-$24$-$26$ is $2 \\times (5$-$12$-$13)$, and $100 + 576 = 676 = 26^2$ ✓; $15$-$20$-$25$ is $5 \\times (3$-$4$-$5)$, and $225 + 400 = 625 = 25^2$ ✓; $20^2 + 21^2 = 400 + 441 = 841 = 29^2$ ✓. (Accusing $10$, $24$, $26$ or $15$, $20$, $25$ is DISTRUSTING A SCALED TRIPLE ✗ ✗; accusing $20$, $21$, $29$ is DISTRUSTING AN UNFAMILIAR TRIPLE — it is genuine even though it sits outside the famous four ✗.)',
    },
  ],
  // s5 — leg and hypotenuse to the missing leg, factor-and-scale.
  [
    {
      q: 'In the right triangle shown, one leg is $33$ and the hypotenuse is $55$. Use a scaled triple to find the missing leg.',
      fig: {
        view: [-6, -6, 50, 37],
        elems: [
          { t: 'poly', pts: [[0, 0], [44, 0], [0, 33]], fill: false },
          { t: 'right', at: [0, 0], from: [44, 0], to: [0, 33], s: 1.5 },
          { t: 'label', p: [22, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [0, 16.5], text: '33', dx: -14, dy: 0 },
          { t: 'label', p: [22, 16.5], text: '55', dx: 14, dy: -8 },
        ],
      },
      choices: ['$22$', '$4$', '$44$', '$56$'],
      answer: 2,
      solution:
        'Factor $11$ from both givens: $33 = 11 \\times 3$ and $55 = 11 \\times 5$ — the $3$-$4$-$5$ family with the $5$ playing hypotenuse, exactly the roles here. The missing leg is $11 \\times 4 = 44$ ✓. Check: $55^2 - 33^2 = 3025 - 1089 = 1936 = 44^2$ ✓. (The choice $22$ is SUBTRACTING THE SIDES ✗; $4$ is STOPPING AT THE PRIMITIVE, forgetting the $\\times 11$ ✗; $56$ is GRABBING THE WRONG FAMILY — $33$-$56$-$65$ needs a hypotenuse of $65$, and ours is $55$ ✗.)',
    },
    {
      q: 'A right triangle has hypotenuse $60$ and one leg $36$, as shown. What is the length of the other leg?',
      fig: {
        view: [-6, -6, 54, 40],
        elems: [
          { t: 'poly', pts: [[0, 0], [48, 0], [0, 36]], fill: false },
          { t: 'right', at: [0, 0], from: [48, 0], to: [0, 36], s: 1.7 },
          { t: 'label', p: [24, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [0, 18], text: '36', dx: -14, dy: 0 },
          { t: 'label', p: [24, 18], text: '60', dx: 14, dy: -8 },
        ],
      },
      choices: ['$24$', '$48$', '$4$', '$12\\sqrt{34}$'],
      answer: 1,
      solution:
        'Both numbers carry a factor of $12$: $36 = 12 \\times 3$ and $60 = 12 \\times 5$, with the $5$ in the hypotenuse seat — the $3$-$4$-$5$ family scaled by $12$. The other leg is $12 \\times 4 = 48$ ✓. Check: $60^2 - 36^2 = 3600 - 1296 = 2304 = 48^2$ ✓. (The choice $24$ is SUBTRACTING THE SIDES ✗; $4$ is STOPPING AT THE PRIMITIVE ✗; $12\\sqrt{34}$ is TREATING THE HYPOTENUSE AS A LEG, computing $\\sqrt{36^2 + 60^2}$ ✗.)',
    },
    {
      q: 'The right triangle shown has one leg $28$ and hypotenuse $53$. How long is the other leg?',
      fig: {
        view: [-6, -6, 51, 32],
        elems: [
          { t: 'poly', pts: [[0, 0], [45, 0], [0, 28]], fill: false },
          { t: 'right', at: [0, 0], from: [45, 0], to: [0, 28], s: 1.6 },
          { t: 'label', p: [22.5, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [0, 14], text: '28', dx: -14, dy: 0 },
          { t: 'label', p: [22.5, 14], text: '53', dx: 14, dy: -8 },
        ],
      },
      choices: ['$45$', '$25$', '$2025$', '$\\sqrt{3593}$'],
      answer: 0,
      solution:
        'The hunt for a common factor comes up empty — $53$ is prime — so square it out: $53^2 - 28^2 = 2809 - 784 = 2025 = 45^2$, giving a leg of $45$ ✓. Close the loop: $28^2 + 45^2 = 784 + 2025 = 2809 = 53^2$ ✓, so $28$-$45$-$53$ is a genuine, if less famous, triple. (The choice $25$ is SUBTRACTING THE SIDES ✗; $2025$ is FORGETTING THE SQUARE ROOT ✗; $\\sqrt{3593}$ is TREATING THE HYPOTENUSE AS A LEG, adding the squares instead of subtracting ✗.)',
    },
  ],
  // s6 — a leg and a barely-longer hypotenuse.
  [
    {
      q: 'The hypotenuse of the right triangle shown is $29$, and one leg is $20$. What is the length of the remaining leg?',
      fig: {
        view: [-3, -3, 25, 23],
        elems: [
          { t: 'poly', pts: [[0, 0], [21, 0], [0, 20]], fill: false },
          { t: 'right', at: [0, 0], from: [21, 0], to: [0, 20], s: 0.7 },
          { t: 'label', p: [10.5, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [0, 10], text: '20', dx: -12, dy: 0 },
          { t: 'label', p: [10.5, 10], text: '29', dx: 14, dy: -8 },
        ],
      },
      choices: ['$9$', '$21$', '$441$', '$15$'],
      answer: 1,
      solution:
        'A leg of $20$ under a hypotenuse of $29$ is the $20$-$21$-$29$ triple, so the remaining leg is $21$ ✓. Check by subtracting squares: $29^2 - 20^2 = 841 - 400 = 441 = 21^2$ ✓ — the two legs differ by just $1$. (The choice $9$ is SUBTRACTING THE SIDES ✗; $441$ is FORGETTING THE SQUARE ROOT ✗; $15$ is FORCING THE $3$-$4$-$5$ FAMILY — $20 = 5 \\times 4$ would demand a hypotenuse of $25$, but ours is $29$ ✗.)',
    },
    {
      q: 'A right triangle has a leg of length $60$ and a hypotenuse of length $61$ — barely longer, as the figure shows. How long is the other leg?',
      fig: {
        view: [-7, -6, 66, 15],
        elems: [
          { t: 'poly', pts: [[0, 0], [60, 0], [0, 11]], fill: false },
          { t: 'right', at: [0, 0], from: [60, 0], to: [0, 11], s: 2 },
          { t: 'label', p: [30, 0], text: '60', dx: 0, dy: 14 },
          { t: 'label', p: [0, 5.5], text: '?', dx: -12, dy: 0 },
          { t: 'label', p: [30, 5.5], text: '61', dx: 12, dy: -10 },
        ],
      },
      choices: ['$1$', '$121$', '$11$', '$\\sqrt{7321}$'],
      answer: 2,
      solution:
        'Use the difference of squares: $61^2 - 60^2 = (61 - 60)(61 + 60) = 1 \\times 121 = 121$, so the other leg is $\\sqrt{121} = 11$ ✓. Check: $60^2 + 11^2 = 3600 + 121 = 3721 = 61^2$ ✓ — the slim triple $11$-$60$-$61$. When a leg and the hypotenuse are close, the third side is far smaller than both. (The choice $1$ is SUBTRACTING THE SIDES ✗; $121$ is FORGETTING THE SQUARE ROOT ✗; $\\sqrt{7321}$ is TREATING THE HYPOTENUSE AS A LEG and adding the squares ✗.)',
    },
    {
      q: 'One leg of a right triangle measures $35$ and the hypotenuse measures $37$, as shown. Find the other leg.',
      fig: {
        view: [-4, -4, 39, 16],
        elems: [
          { t: 'poly', pts: [[0, 0], [35, 0], [0, 12]], fill: false },
          { t: 'right', at: [0, 0], from: [35, 0], to: [0, 12], s: 1.2 },
          { t: 'label', p: [17.5, 0], text: '35', dx: 0, dy: 14 },
          { t: 'label', p: [0, 6], text: '?', dx: -12, dy: 0 },
          { t: 'label', p: [17.5, 6], text: '37', dx: 12, dy: -8 },
        ],
      },
      choices: ['$2$', '$144$', '$28$', '$12$'],
      answer: 3,
      solution:
        'The difference of squares makes this quick: $37^2 - 35^2 = (37 - 35)(37 + 35) = 2 \\times 72 = 144$, so the other leg is $\\sqrt{144} = 12$ ✓. Check: $12^2 + 35^2 = 144 + 1225 = 1369 = 37^2$ ✓ — the triple $12$-$35$-$37$. (The choice $2$ is SUBTRACTING THE SIDES ✗; $144$ is FORGETTING THE SQUARE ROOT ✗; $28$ is TREATING $35$ AS A HYPOTENUSE — in $21$-$28$-$35$ the $35$ tops the triangle, but here $35$ is only a leg ✗.)',
    },
  ],
  // s7 — scaled family with a given hypotenuse: find the shortest side.
  [
    {
      q: 'Every side of the right triangle shown is the same multiple of the $8$-$15$-$17$ triple, and its hypotenuse is $34$. How long is the triangle’s shortest side?',
      fig: {
        view: [-4, -4, 34, 19],
        elems: [
          { t: 'poly', pts: [[0, 0], [30, 0], [0, 16]], fill: false },
          { t: 'right', at: [0, 0], from: [30, 0], to: [0, 16], s: 1.1 },
          { t: 'label', p: [15, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [0, 8], text: '?', dx: -12, dy: 0 },
          { t: 'label', p: [15, 8], text: '34', dx: 12, dy: -8 },
        ],
      },
      choices: ['$16$', '$30$', '$8$', '$17$'],
      answer: 0,
      solution:
        'The family hypotenuse is $17$, and $34 = 2 \\times 17$, so every side doubles: the legs are $2 \\times 8 = 16$ and $2 \\times 15 = 30$, and the shortest side is $16$ ✓. Check: $16^2 + 30^2 = 256 + 900 = 1156 = 34^2$ ✓. (The choice $30$ is ANSWERING THE LONGER LEG ✗; $8$ is STOPPING AT THE PRIMITIVE, the short side before scaling ✗; $17$ is HALVING THE HYPOTENUSE instead of finding a leg ✗.)',
    },
    {
      q: 'The sides of the right triangle shown are all the same multiple of the $20$-$21$-$29$ triple, and the hypotenuse is $58$. What is the length of the shortest side?',
      fig: {
        view: [-5, -5, 47, 44],
        elems: [
          { t: 'poly', pts: [[0, 0], [42, 0], [0, 40]], fill: false },
          { t: 'right', at: [0, 0], from: [42, 0], to: [0, 40], s: 1.5 },
          { t: 'label', p: [21, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [0, 20], text: '?', dx: -12, dy: 0 },
          { t: 'label', p: [21, 20], text: '58', dx: 14, dy: -8 },
        ],
      },
      choices: ['$42$', '$20$', '$29$', '$40$'],
      answer: 3,
      solution:
        'The family hypotenuse is $29$, and $58 = 2 \\times 29$, so the scale factor is $2$: the legs are $2 \\times 20 = 40$ and $2 \\times 21 = 42$, and the shortest side is $40$ ✓. Check: $40^2 + 42^2 = 1600 + 1764 = 3364 = 58^2$ ✓. (The choice $42$ is ANSWERING THE LONGER LEG — close, but $40 < 42$ ✗; $20$ is STOPPING AT THE PRIMITIVE ✗; $29$ is HALVING THE HYPOTENUSE, which lands on the unscaled family value, not a side of this triangle ✗.)',
    },
    {
      q: 'A right triangle’s sides are a common multiple of the $3$-$4$-$5$ triple, and its hypotenuse is $35$, as shown. Find the shortest side.',
      fig: {
        view: [-4, -4, 32, 24],
        elems: [
          { t: 'poly', pts: [[0, 0], [28, 0], [0, 21]], fill: false },
          { t: 'right', at: [0, 0], from: [28, 0], to: [0, 21], s: 1 },
          { t: 'label', p: [14, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [0, 10.5], text: '?', dx: -12, dy: 0 },
          { t: 'label', p: [14, 10.5], text: '35', dx: 12, dy: -8 },
        ],
      },
      choices: ['$28$', '$21$', '$3$', '$7$'],
      answer: 1,
      solution:
        'The family hypotenuse is $5$, and $35 = 7 \\times 5$, so every side is scaled by $7$: the legs are $7 \\times 3 = 21$ and $7 \\times 4 = 28$. The shortest side is $21$ ✓. Check: $21^2 + 28^2 = 441 + 784 = 1225 = 35^2$ ✓. (The choice $28$ is ANSWERING THE LONGER LEG ✗; $3$ is STOPPING AT THE PRIMITIVE ✗; $7$ is ANSWERING THE SCALE FACTOR itself — a tool, not a side ✗.)',
    },
  ],
  // s8 — two perpendicular legs of a journey.
  [
    {
      q: 'A delivery drone flies $20$ km due east, then $48$ km due north, as shown. How far is the drone from where it took off?',
      fig: {
        view: [-4, -5, 26, 52],
        elems: [
          { t: 'seg', a: [0, 0], b: [20, 0] },
          { t: 'seg', a: [20, 0], b: [20, 48] },
          { t: 'seg', a: [0, 0], b: [20, 48], dash: true },
          { t: 'right', at: [20, 0], from: [0, 0], to: [20, 48], s: 0.9 },
          { t: 'point', p: [0, 0], label: 'S', dx: -10, dy: 12 },
          { t: 'point', p: [20, 48], label: 'F', dx: 10, dy: -8 },
          { t: 'label', p: [10, 0], text: '20', dx: 0, dy: 14 },
          { t: 'label', p: [20, 24], text: '48', dx: 14, dy: 0 },
          { t: 'label', p: [10, 24], text: '?', dx: -12, dy: -6 },
        ],
      },
      choices: ['$68$ km', '$13$ km', '$52$ km', '$28$ km'],
      answer: 2,
      solution:
        'East then north meet at a right angle, so the straight-line distance is a hypotenuse over legs $20$ and $48$. Factor $4$: $5$ and $12$ — the $5$-$12$-$13$ family — so the distance is $4 \\times 13 = 52$ km ✓. Check: $20^2 + 48^2 = 400 + 2304 = 2704 = 52^2$ ✓. (The choice $68$ km is the TOTAL FLIGHT PATH, both legs added, not the direct distance ✗; $13$ km is STOPPING AT THE PRIMITIVE ✗; $28$ km is SUBTRACTING THE LEGS ✗.)',
    },
    {
      q: 'A cyclist pedals $9$ km east along a straight road, turns, and rides $40$ km north, as shown. What is the straight-line distance back to the starting corner?',
      fig: {
        view: [-3, -4, 14, 44],
        elems: [
          { t: 'seg', a: [0, 0], b: [9, 0] },
          { t: 'seg', a: [9, 0], b: [9, 40] },
          { t: 'seg', a: [0, 0], b: [9, 40], dash: true },
          { t: 'right', at: [9, 0], from: [0, 0], to: [9, 40], s: 0.5 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [9, 40], label: 'B', dx: 10, dy: -8 },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [9, 20], text: '40', dx: 14, dy: 0 },
          { t: 'label', p: [4.5, 20], text: '?', dx: -12, dy: -6 },
        ],
      },
      choices: ['$49$ km', '$31$ km', '$50$ km', '$41$ km'],
      answer: 3,
      solution:
        'The two roads meet at a right angle, and the legs $9$ and $40$ form a triple on their own: $9$-$40$-$41$. The straight-line distance is $41$ km ✓. Check: $9^2 + 40^2 = 81 + 1600 = 1681 = 41^2$ ✓. (The choice $49$ km is the TOTAL RIDING DISTANCE, not the shortcut home ✗; $31$ km is SUBTRACTING THE LEGS ✗; $50$ km is FORCING THE $3$-$4$-$5$ FAMILY onto the $40$ — the $30$-$40$-$50$ triangle needs a $30$, and the east leg here is $9$ ✗.)',
    },
    {
      q: 'A rescue helicopter flies $24$ km east from its base, then $45$ km north to reach a stranded hiker, as shown. How far is the hiker from the base, in a straight line?',
      fig: {
        view: [-5, -5, 30, 49],
        elems: [
          { t: 'seg', a: [0, 0], b: [24, 0] },
          { t: 'seg', a: [24, 0], b: [24, 45] },
          { t: 'seg', a: [0, 0], b: [24, 45], dash: true },
          { t: 'right', at: [24, 0], from: [0, 0], to: [24, 45], s: 1 },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
          { t: 'point', p: [24, 45], label: 'H', dx: 10, dy: -8 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [24, 22.5], text: '45', dx: 14, dy: 0 },
          { t: 'label', p: [12, 22.5], text: '?', dx: -12, dy: -6 },
        ],
      },
      choices: ['$51$ km', '$69$ km', '$21$ km', '$17$ km'],
      answer: 0,
      solution:
        'The two flight legs are perpendicular, so the direct distance is the hypotenuse over $24$ and $45$. Factor $3$: $8$ and $15$ — the $8$-$15$-$17$ family — so the distance is $3 \\times 17 = 51$ km ✓. Check: $24^2 + 45^2 = 576 + 2025 = 2601 = 51^2$ ✓. (The choice $69$ km is the TOTAL DISTANCE FLOWN ✗; $21$ km is SUBTRACTING THE LEGS ✗; $17$ km is STOPPING AT THE PRIMITIVE ✗.)',
    },
  ],
  // s9 — unmask the family behind a scaled triple.
  [
    {
      q: 'A right triangle has sides $21$, $72$, and $75$. It is a scaled copy of which triple family?',
      choices: ['$3$-$4$-$5$', '$7$-$24$-$25$', '$5$-$12$-$13$', '$8$-$15$-$17$'],
      answer: 1,
      solution:
        'All three sides divide by $3$: $21 \\div 3 = 7$, $72 \\div 3 = 24$, $75 \\div 3 = 25$ — the $7$-$24$-$25$ family ✓. Rebuild to confirm: $3 \\times (7$-$24$-$25)$ gives back $21$-$72$-$75$ exactly ✓. (Choosing $3$-$4$-$5$ is CONFUSING THE SCALE FACTOR WITH THE FAMILY — the common factor is $3$, but what remains after dividing is $7$-$24$-$25$ ✗; $5$-$12$-$13$ is SPOTTING THE $5$ at the end of $75$ and stopping there ✗; $8$-$15$-$17$ is GRABBING A FACTOR OF ONE SIDE — $72$ is a multiple of $8$, but $21$ and $75$ are not ✗.)',
    },
    {
      q: 'The sides $32$, $60$, $68$ make a right triangle. Scaling which triple family produces these sides?',
      choices: ['$8$-$15$-$17$', '$16$-$30$-$34$', '$5$-$12$-$13$', '$3$-$4$-$5$'],
      answer: 0,
      solution:
        'The greatest common factor is $4$: $32 \\div 4 = 8$, $60 \\div 4 = 15$, $68 \\div 4 = 17$ — the $8$-$15$-$17$ family ✓. Rebuild: $4 \\times 17 = 68$ matches the largest side ✓. (Choosing $16$-$30$-$34$ is STOPPING HALFWAY — after dividing by $2$ the sides still share a factor of $2$, so $16$-$30$-$34$ is itself only a scaled copy, not a family ✗; $5$-$12$-$13$ is SEEING FAMILY NUMBERS INSIDE $60$, which is $5 \\times 12$, though neither $32$ nor $68$ cooperates ✗; $3$-$4$-$5$ is CONFUSING THE SCALE FACTOR WITH THE FAMILY, promoting the common factor $4$ into the triple ✗.)',
    },
    {
      q: 'A right triangle has side lengths $27$, $120$, and $123$. These are a common multiple of which triple family?',
      choices: ['$3$-$4$-$5$', '$7$-$24$-$25$', '$9$-$40$-$41$', '$5$-$12$-$13$'],
      answer: 2,
      solution:
        'Every side is divisible by $3$: $27 \\div 3 = 9$, $120 \\div 3 = 40$, $123 \\div 3 = 41$ — the $9$-$40$-$41$ family ✓. Confirm the primitive itself: $9^2 + 40^2 = 81 + 1600 = 1681 = 41^2$ ✓. (Choosing $3$-$4$-$5$ is CONFUSING THE SCALE FACTOR WITH THE FAMILY ✗; $7$-$24$-$25$ is GRABBING A FACTOR OF ONE SIDE — $120 = 5 \\times 24$, but $27$ is no multiple of $7$ ✗; $5$-$12$-$13$ is the same slip, since $120 = 10 \\times 12$ while $27$ and $123$ refuse to divide by $5$ or $13$ ✗.)',
    },
  ],
  // s10 — whole-number sides with hypotenuse two more than a leg.
  [
    {
      q: 'The sides of a right triangle are all whole numbers. The shortest side is $20$, and the longest side is $2$ more than the middle side. How long is the longest side?',
      choices: ['$99$', '$22$', '$25$', '$101$'],
      answer: 3,
      solution:
        'Let the middle side be $b$, so the longest side — the hypotenuse — is $b + 2$. Then $20^2 + b^2 = (b + 2)^2 = b^2 + 4b + 4$, so $400 = 4b + 4$ and $b = 99$, making the hypotenuse $101$ ✓. Check: $20^2 + 99^2 = 400 + 9801 = 10201 = 101^2$ ✓ — the triple $20$-$99$-$101$. (The choice $99$ is ANSWERING THE MIDDLE SIDE when the longest was asked for ✗; $22$ is ADDING $2$ TO THE WRONG SIDE — the gap of $2$ sits between the two longest sides, not next to the $20$ ✗; $25$ is FORCING A FAMOUS FAMILY: $15$-$20$-$25$ has a gap of $10$ between its hypotenuse and middle side, not $2$ ✗.)',
    },
    {
      q: 'A wire stretches from the top of a vertical pole to a stake in the ground $16$ ft from the pole’s base. The pole’s height and the wire’s length are both whole numbers of feet, and the wire is $2$ ft longer than the pole. How many feet long is the wire?',
      choices: ['$18$', '$63$', '$65$', '$34$'],
      answer: 2,
      solution:
        'Call the pole’s height $h$, so the wire is $h + 2$. Then $16^2 + h^2 = (h + 2)^2 = h^2 + 4h + 4$, so $256 = 4h + 4$ and $h = 63$: the wire is $65$ ft ✓. Check: $16^2 + 63^2 = 256 + 3969 = 4225 = 65^2$ ✓ — the triple $16$-$63$-$65$. (The choice $63$ is ANSWERING THE POLE instead of the wire ✗; $18$ is ADDING $2$ TO THE WRONG SIDE — the $2$-ft gap is between wire and pole, not wire and ground distance ✗; $34$ is FORCING A FAMOUS FAMILY: in $16$-$30$-$34$ the wire would be $4$ longer than the pole, not $2$ ✗.)',
    },
    {
      q: 'A kite flies directly above a spot on the ground $8$ m from where Mia stands. The kite’s height and the taut string’s length are both whole numbers of meters, and the string is $2$ m longer than the height. How many meters of string are out?',
      choices: ['$17$', '$15$', '$10$', '$18$'],
      answer: 0,
      solution:
        'Let the kite’s height be $h$, so the string is $h + 2$. Then $8^2 + h^2 = (h + 2)^2 = h^2 + 4h + 4$, so $64 = 4h + 4$ and $h = 15$: the string is $17$ m long ✓ — the $8$-$15$-$17$ triple in the sky, since $64 + 225 = 289 = 17^2$ ✓. (The choice $15$ is ANSWERING THE HEIGHT instead of the string ✗; $10$ is ADDING $2$ TO THE WRONG SIDE — in the $6$-$8$-$10$ triangle the string beats the ground distance by $2$, but then the height would be $6$, a gap of $4$ ✗; $18$ is DROPPING THE $+4$, solving $64 = 4h$ to get $h = 16$ — but $64 + 256 = 320$ while $18^2 = 324$, so that triangle never closes ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 6,
  sections: {
    '6.3': s63,
  },
}
