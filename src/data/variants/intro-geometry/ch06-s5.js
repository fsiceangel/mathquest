// Introduction to Geometry chapter 6 — variations for section 6.5
// (Heron's Formula). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every Heron computation is spelled out in full inside its solution: the
//    semiperimeter, the three difference factors, the product under the root,
//    and the root itself. The differences are always re-added as the built-in
//    error check (they must total s).
//  - Every area was computed twice by routes that share no arithmetic: Heron
//    against the half-leg-product for right triangles, Heron against a
//    Pythagorean altitude for isosceles triangles, and Heron against an
//    explicit altitude-foot computation (circle intersection) for scalene
//    triangles. The two routes must agree before a key is written down.
//  - Every figure is drawn from its own side lengths: the apex sits at the
//    exact circle-intersection point for its sides (rounded to two decimals
//    only where no tick or right-angle mark depends on it), altitude feet sit
//    directly below the apex, and every right-angle mark was checked against
//    a dot product.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS. The traps running through this section: FORGETTING THE ROOT,
//    DROPPING THE ONE-HALF, HALVING AGAIN, USING THE FULL PERIMETER, HALVING
//    TWICE, STOPPING AT THE LONGEST SIDE, DROPPING A SIDE, USING THE SLANT
//    SIDE AS THE HEIGHT, USING THE HYPOTENUSE AS A LEG, MISCOMPUTING A
//    DIFFERENCE, USING THE SIDES INSTEAD OF THE DIFFERENCES, FORGETTING TO
//    ROOT THE SQUARE FACTOR, TREATING TWO SIDES AS BASE AND HEIGHT,
//    ANSWERING THE AREA, FORGETTING TO DOUBLE, ANSWERING HALF THE BASE,
//    DIVIDING BY THE WRONG SIDE, DROPPING THE ZERO FACTOR, and CLAIMING A
//    NEGATIVE.
//  - No two choices inside an item name the same value.

const s65 = [
  // s1 — Heron on a Pythagorean triple, cross-checked with the leg formula.
  [
    {
      q: 'A triangular sail has sides of $8$, $15$, and $17$ feet. Apply Heron\'s Formula to find its area, in square feet.',
      fig: {
        view: [-2, -2.5, 17, 10],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [0, 8]], fill: false },
          { t: 'right', at: [0, 0], from: [15, 0], to: [0, 8] },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [0, 4], text: '8', dx: -10, dy: 0 },
          { t: 'label', p: [7.5, 4], text: '17', dx: 12, dy: -8 },
        ],
      },
      choices: ['$60$', '$120$', '$3600$', '$30$'],
      answer: 0,
      solution:
        'Heron start to finish: $s = \\frac{8+15+17}{2} = 20$, and the three factors are $20-8 = 12$, $20-15 = 5$, $20-17 = 3$ (check: $12+5+3 = 20 = s$ ✓). The product is $20 \\times 12 \\times 5 \\times 3 = 3600$, and the area is $\\sqrt{3600} = 60$ ✓. Cross-check by a second route: $8^2 + 15^2 = 64 + 225 = 289 = 17^2$, so this sail is a right triangle with legs $8$ and $15$, and $\\frac{1}{2}(8)(15) = 60$ ✓ — Heron and the leg formula agree, as they must. (The choice $3600$ is FORGETTING THE ROOT ✗; $120$ is DROPPING THE ONE-HALF from the leg formula, $8 \\times 15$ ✗; $30$ is HALVING AGAIN, taking half of the true area because "semi" appeared once already ✗.)',
    },
    {
      q: 'Run Heron\'s Formula on a triangle whose sides measure $9$, $12$, and $15$. What area does it report?',
      fig: {
        view: [-2, -2.5, 14, 11],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [0, 9]], fill: false },
          { t: 'right', at: [0, 0], from: [12, 0], to: [0, 9] },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [0, 4.5], text: '9', dx: -10, dy: 0 },
          { t: 'label', p: [6, 4.5], text: '15', dx: 12, dy: -8 },
        ],
      },
      choices: ['$108$', '$54$', '$2916$', '$27$'],
      answer: 1,
      solution:
        'The semiperimeter is $s = \\frac{9+12+15}{2} = 18$, and the factors are $18-9 = 9$, $18-12 = 6$, $18-15 = 3$ (check: $9+6+3 = 18 = s$ ✓). The product is $18 \\times 9 \\times 6 \\times 3 = 2916$, so the area is $\\sqrt{2916} = 54$ ✓. Second route: $9$-$12$-$15$ is three times $3$-$4$-$5$, a right triangle, so the area is $\\frac{1}{2}(9)(12) = 54$ ✓ — the two computations meet exactly. (The choice $2916$ is FORGETTING THE ROOT ✗; $108$ is DROPPING THE ONE-HALF, the raw product $9 \\times 12$ ✗; $27$ is HALVING AGAIN after the area is already done ✗.)',
    },
    {
      q: 'A wooden garden bed is a triangle with sides $7$ m, $24$ m, and $25$ m. Use Heron\'s Formula to find how many square meters of soil it holds.',
      fig: {
        view: [-2.5, -3, 26, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [0, 7]], fill: false },
          { t: 'right', at: [0, 0], from: [24, 0], to: [0, 7] },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [0, 3.5], text: '7', dx: -10, dy: 0 },
          { t: 'label', p: [12, 3.5], text: '25', dx: 12, dy: -8 },
        ],
      },
      choices: ['$168$', '$42$', '$84$', '$7056$'],
      answer: 2,
      solution:
        'Heron: $s = \\frac{7+24+25}{2} = 28$, with factors $28-7 = 21$, $28-24 = 4$, $28-25 = 3$ (check: $21+4+3 = 28 = s$ ✓). The product is $28 \\times 21 \\times 4 \\times 3 = 7056$, and the area is $\\sqrt{7056} = 84$ ✓. Second route: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$, so the bed is right-angled with legs $7$ and $24$, giving $\\frac{1}{2}(7)(24) = 84$ ✓ — two roads, one answer. (The choice $7056$ is FORGETTING THE ROOT ✗; $168$ is DROPPING THE ONE-HALF, just $7 \\times 24$ ✗; $42$ is HALVING AGAIN, cutting the finished area in half ✗.)',
    },
  ],
  // s2 — the semiperimeter itself: half the perimeter, nothing more.
  [
    {
      q: 'Before Heron\'s Formula can start on a triangle with sides $6$, $9$, and $13$, you need its semiperimeter $s$. What is it?',
      choices: ['$28$', '$7$', '$14$', '$13$'],
      answer: 2,
      solution:
        'Add, then halve: $s = \\frac{6 + 9 + 13}{2} = \\frac{28}{2} = 14$ ✓. Second route with no shared arithmetic: halve each side first and add — $3 + 4.5 + 6.5 = 14$ ✓, the same number. Guard: $s$ must beat the longest side ($14 > 13$ ✓), or the "triangle" could not close. (The choice $28$ is USING THE FULL PERIMETER, which would inflate every Heron factor ✗; $7$ is HALVING TWICE, taking half of $14$ ✗; $13$ is STOPPING AT THE LONGEST SIDE, which is never the semiperimeter of a real triangle ✗.)',
    },
    {
      q: 'A triangular path has edges of $8$ km, $11$ km, and $13$ km. Find the value of $s$ that Heron\'s Formula uses for this triangle.',
      choices: ['$16$', '$32$', '$8$', '$13$'],
      answer: 0,
      solution:
        'The semiperimeter is HALF the perimeter: $s = \\frac{8 + 11 + 13}{2} = \\frac{32}{2} = 16$ ✓. Independent check: halve the sides first, $4 + 5.5 + 6.5 = 16$ ✓. Guard: $16 > 13$, the longest edge, so a genuine triangle sits behind these numbers ✓. (The choice $32$ is USING THE FULL PERIMETER — every factor $s-a$ would come out too big ✗; $8$ is HALVING TWICE ✗; $13$ is STOPPING AT THE LONGEST SIDE instead of computing anything ✗.)',
    },
    {
      q: 'What semiperimeter goes into Heron\'s Formula for a triangle whose sides are $10$, $15$, and $21$?',
      choices: ['$46$', '$21$', '$12.5$', '$23$'],
      answer: 3,
      solution:
        'Half the perimeter: $s = \\frac{10 + 15 + 21}{2} = \\frac{46}{2} = 23$ ✓. Check by the other route: halving each side first gives $5 + 7.5 + 10.5 = 23$ ✓. Guard: $23 > 21$, so $s$ clears the longest side as it must ✓. (The choice $46$ is USING THE FULL PERIMETER ✗; $12.5$ is DROPPING A SIDE, halving only $10 + 15$ and forgetting the $21$ ✗; $21$ is STOPPING AT THE LONGEST SIDE ✗.)',
    },
  ],
  // s3 — isosceles area: Heron against the Pythagorean altitude.
  [
    {
      q: 'A kite-shaped pennant is an isosceles triangle with two sides of $10$ and a base of $16$. What is its area?',
      fig: {
        view: [-1.5, -2.5, 18, 8],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [8, 6]], fill: false },
          { t: 'tick', a: [0, 0], b: [8, 6], n: 1 },
          { t: 'tick', a: [16, 0], b: [8, 6], n: 1 },
          { t: 'label', p: [4, 3], text: '10', dx: -12, dy: -6 },
          { t: 'label', p: [12, 3], text: '10', dx: 12, dy: -6 },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 14 },
        ],
      },
      choices: ['$48$', '$96$', '$80$', '$24$'],
      answer: 0,
      solution:
        'Heron: $s = \\frac{10+10+16}{2} = 18$, with factors $18-10 = 8$, $18-10 = 8$, $18-16 = 2$ (check: $8+8+2 = 18 = s$ ✓). The product is $18 \\times 8 \\times 8 \\times 2 = 2304$, and the area is $\\sqrt{2304} = 48$ ✓. Second route: the altitude to the base bisects it, making a right triangle with hypotenuse $10$ and leg $8$ — the $6$-$8$-$10$ triple — so the height is $6$ and the area is $\\frac{1}{2}(16)(6) = 48$ ✓. (The choice $96$ is DROPPING THE ONE-HALF, $16 \\times 6$ ✗; $80$ is USING THE SLANT SIDE AS THE HEIGHT, $\\frac{1}{2}(16)(10)$ ✗; $24$ is HALVING AGAIN ✗.)',
    },
    {
      q: 'An isosceles bracket has two arms of length $20$ and a crossbar of length $24$. How much area does the bracket\'s triangle enclose?',
      fig: {
        view: [-2, -3.5, 27, 19],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [12, 16]], fill: false },
          { t: 'tick', a: [0, 0], b: [12, 16], n: 1 },
          { t: 'tick', a: [24, 0], b: [12, 16], n: 1 },
          { t: 'label', p: [6, 8], text: '20', dx: -12, dy: -6 },
          { t: 'label', p: [18, 8], text: '20', dx: 12, dy: -6 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
        ],
      },
      choices: ['$384$', '$240$', '$96$', '$192$'],
      answer: 3,
      solution:
        'Heron: $s = \\frac{20+20+24}{2} = 32$, with factors $32-20 = 12$, $32-20 = 12$, $32-24 = 8$ (check: $12+12+8 = 32 = s$ ✓). The product is $32 \\times 12 \\times 12 \\times 8 = 36864$, and the area is $\\sqrt{36864} = 192$ ✓. Second route: the altitude to the crossbar hits its midpoint, leaving a right triangle with hypotenuse $20$ and leg $12$ — the $12$-$16$-$20$ triple — so the height is $16$ and $\\frac{1}{2}(24)(16) = 192$ ✓. (The choice $384$ is DROPPING THE ONE-HALF, $24 \\times 16$ ✗; $240$ is USING THE SLANT SIDE AS THE HEIGHT, $\\frac{1}{2}(24)(20)$ ✗; $96$ is HALVING AGAIN ✗.)',
    },
    {
      q: 'Find the area of a triangle with sides $13$, $13$, and $10$.',
      fig: {
        view: [-1.5, -2.5, 12, 14],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [5, 12]], fill: false },
          { t: 'tick', a: [0, 0], b: [5, 12], n: 1 },
          { t: 'tick', a: [10, 0], b: [5, 12], n: 1 },
          { t: 'label', p: [2.5, 6], text: '13', dx: -12, dy: -6 },
          { t: 'label', p: [7.5, 6], text: '13', dx: 12, dy: -6 },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
        ],
      },
      choices: ['$120$', '$60$', '$65$', '$30$'],
      answer: 1,
      solution:
        'Heron: $s = \\frac{13+13+10}{2} = 18$, with factors $18-13 = 5$, $18-13 = 5$, $18-10 = 8$ (check: $5+5+8 = 18 = s$ ✓). The product is $18 \\times 5 \\times 5 \\times 8 = 3600$, so the area is $\\sqrt{3600} = 60$ ✓. Second route: the altitude to the base of $10$ splits it into two pieces of $5$, and $\\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$ — the $5$-$12$-$13$ triple — so the area is $\\frac{1}{2}(10)(12) = 60$ ✓. (The choice $120$ is DROPPING THE ONE-HALF, $10 \\times 12$ ✗; $65$ is USING THE SLANT SIDE AS THE HEIGHT, $\\frac{1}{2}(10)(13)$ ✗; $30$ is HALVING AGAIN ✗.)',
    },
  ],
  // s4 — Heron confirmed against the right-triangle formula.
  [
    {
      q: 'A ramp\'s side panel is a triangle with edges $9$, $12$, and $15$. Compute its area with Heron\'s Formula, then confirm your value with the right-triangle formula. What is the area?',
      fig: {
        view: [-2, -2.5, 11, 14],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [0, 12]], fill: false },
          { t: 'right', at: [0, 0], from: [9, 0], to: [0, 12] },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [0, 6], text: '12', dx: -12, dy: 0 },
          { t: 'label', p: [4.5, 6], text: '15', dx: 14, dy: -8 },
        ],
      },
      choices: ['$108$', '$54$', '$90$', '$27$'],
      answer: 1,
      solution:
        'Heron: $s = \\frac{9+12+15}{2} = 18$, with factors $18-9 = 9$, $18-12 = 6$, $18-15 = 3$ (check: $9+6+3 = 18 = s$ ✓). The product is $18 \\times 9 \\times 6 \\times 3 = 2916$, and the area is $\\sqrt{2916} = 54$ ✓. Confirmation route: $9^2 + 12^2 = 81 + 144 = 225 = 15^2$, so the panel is right with legs $9$ and $12$, and $\\frac{1}{2}(9)(12) = 54$ ✓ — when both formulas apply, they must match. (The choice $108$ is DROPPING THE ONE-HALF, $9 \\times 12$ ✗; $90$ is USING THE HYPOTENUSE AS A LEG, $\\frac{1}{2}(12)(15)$ ✗; $27$ is HALVING AGAIN ✗.)',
    },
    {
      q: 'A triangle has sides $12$, $16$, and $20$. Show that Heron\'s Formula and the formula $\\frac{1}{2}(\\text{leg})(\\text{leg})$ give the same area for it. What is that area?',
      fig: {
        view: [-2, -2.5, 18, 14],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [0, 12]], fill: false },
          { t: 'right', at: [0, 0], from: [16, 0], to: [0, 12] },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [0, 6], text: '12', dx: -12, dy: 0 },
          { t: 'label', p: [8, 6], text: '20', dx: 14, dy: -8 },
        ],
      },
      choices: ['$192$', '$120$', '$96$', '$48$'],
      answer: 2,
      solution:
        'Heron: $s = \\frac{12+16+20}{2} = 24$, with factors $24-12 = 12$, $24-16 = 8$, $24-20 = 4$ (check: $12+8+4 = 24 = s$ ✓). The product is $24 \\times 12 \\times 8 \\times 4 = 9216$, and the area is $\\sqrt{9216} = 96$ ✓. The other formula: $12$-$16$-$20$ is $4 \\times (3$-$4$-$5)$, a right triangle, so $\\frac{1}{2}(12)(16) = 96$ ✓ — identical, as promised. (The choice $192$ is DROPPING THE ONE-HALF, $12 \\times 16$ ✗; $120$ is USING THE HYPOTENUSE AS A LEG, $\\frac{1}{2}(12)(20)$ ✗; $48$ is HALVING AGAIN ✗.)',
    },
    {
      q: 'The sides of a triangular deck measure $15$, $20$, and $25$ feet. Use Heron\'s Formula for the deck\'s area, and back it up with a right-triangle check. How many square feet is the deck?',
      fig: {
        view: [-2.5, -3, 22, 17],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [0, 15]], fill: false },
          { t: 'right', at: [0, 0], from: [20, 0], to: [0, 15] },
          { t: 'label', p: [10, 0], text: '20', dx: 0, dy: 14 },
          { t: 'label', p: [0, 7.5], text: '15', dx: -12, dy: 0 },
          { t: 'label', p: [10, 7.5], text: '25', dx: 14, dy: -8 },
        ],
      },
      choices: ['$300$', '$187.5$', '$75$', '$150$'],
      answer: 3,
      solution:
        'Heron: $s = \\frac{15+20+25}{2} = 30$, with factors $30-15 = 15$, $30-20 = 10$, $30-25 = 5$ (check: $15+10+5 = 30 = s$ ✓). The product is $30 \\times 15 \\times 10 \\times 5 = 22500$, and the area is $\\sqrt{22500} = 150$ ✓. Backup route: $15^2 + 20^2 = 225 + 400 = 625 = 25^2$, so the deck is right with legs $15$ and $20$, and $\\frac{1}{2}(15)(20) = 150$ ✓. (The choice $300$ is DROPPING THE ONE-HALF, $15 \\times 20$ ✗; $187.5$ is USING THE HYPOTENUSE AS A LEG, $\\frac{1}{2}(15)(25)$ ✗; $75$ is HALVING AGAIN ✗.)',
    },
  ],
  // s5 — exact radical areas: simplify the root completely.
  [
    {
      q: 'Find the exact area of a triangle with sides $4$, $7$, and $9$.',
      fig: {
        view: [-1.5, -2.5, 10.5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [2.67, 2.98]], fill: false },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [1.34, 1.49], text: '4', dx: -10, dy: -6 },
          { t: 'label', p: [5.84, 1.49], text: '7', dx: 10, dy: -6 },
        ],
      },
      choices: ['$180$', '$6\\sqrt{10}$', '$6\\sqrt{5}$', '$3\\sqrt{5}$'],
      answer: 2,
      solution:
        'Heron: $s = \\frac{4+7+9}{2} = 10$, with factors $10-4 = 6$, $10-7 = 3$, $10-9 = 1$ (check: $6+3+1 = 10 = s$ ✓). The product is $10 \\times 6 \\times 3 \\times 1 = 180$, and the area is $\\sqrt{180} = \\sqrt{36 \\times 5} = 6\\sqrt{5} \\approx 13.4$ ✓. Second route: put the side of $9$ on the ground; the apex sits $x = \\frac{9^2 + 4^2 - 7^2}{2 \\times 9} = \\frac{48}{18} = \\frac{8}{3}$ from the left end, at height $\\sqrt{4^2 - \\left(\\frac{8}{3}\\right)^2} = \\frac{4\\sqrt{5}}{3}$, and $\\frac{1}{2}(9)\\cdot\\frac{4\\sqrt{5}}{3} = 6\\sqrt{5}$ ✓. (The choice $180$ is FORGETTING THE ROOT ✗; $6\\sqrt{10}$ is MISCOMPUTING A DIFFERENCE, taking $s-9$ as $2$ so the product doubles to $360$ — the factor check $6+3+2 \\ne 10$ would have caught it ✗; $3\\sqrt{5}$ is HALVING AGAIN ✗.)',
    },
    {
      q: 'A triangle has sides $3$, $7$, and $8$. Give its exact area.',
      fig: {
        view: [-1.5, -2.5, 9.5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [1.5, 2.6]], fill: false },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [0.75, 1.3], text: '3', dx: -10, dy: -6 },
          { t: 'label', p: [4.75, 1.3], text: '7', dx: 10, dy: -6 },
        ],
      },
      choices: ['$6\\sqrt{3}$', '$108$', '$6\\sqrt{6}$', '$3\\sqrt{3}$'],
      answer: 0,
      solution:
        'Heron: $s = \\frac{3+7+8}{2} = 9$, with factors $9-3 = 6$, $9-7 = 2$, $9-8 = 1$ (check: $6+2+1 = 9 = s$ ✓). The product is $9 \\times 6 \\times 2 \\times 1 = 108$, and the area is $\\sqrt{108} = \\sqrt{36 \\times 3} = 6\\sqrt{3} \\approx 10.4$ ✓. Second route: with the side of $8$ as the base, the apex lies $x = \\frac{8^2 + 3^2 - 7^2}{2 \\times 8} = \\frac{24}{16} = 1.5$ in from the left end, at height $\\sqrt{3^2 - 1.5^2} = \\sqrt{6.75} = \\frac{3\\sqrt{3}}{2}$, so the area is $\\frac{1}{2}(8)\\cdot\\frac{3\\sqrt{3}}{2} = 6\\sqrt{3}$ ✓. (The choice $108$ is FORGETTING THE ROOT ✗; $6\\sqrt{6}$ is MISCOMPUTING A DIFFERENCE, using $2$ for $s-8$ and inflating the product to $216$ ✗; $3\\sqrt{3}$ is HALVING AGAIN ✗.)',
    },
    {
      q: 'Compute the exact area of a triangle whose sides are $4$, $5$, and $7$.',
      fig: {
        view: [-1.5, -2.5, 8.5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [2.86, 2.8]], fill: false },
          { t: 'label', p: [3.5, 0], text: '7', dx: 0, dy: 14 },
          { t: 'label', p: [1.43, 1.4], text: '4', dx: -10, dy: -6 },
          { t: 'label', p: [4.93, 1.4], text: '5', dx: 10, dy: -6 },
        ],
      },
      choices: ['$96$', '$4\\sqrt{6}$', '$4\\sqrt{70}$', '$2\\sqrt{6}$'],
      answer: 1,
      solution:
        'Heron: $s = \\frac{4+5+7}{2} = 8$, with factors $8-4 = 4$, $8-5 = 3$, $8-7 = 1$ (check: $4+3+1 = 8 = s$ ✓). The product is $8 \\times 4 \\times 3 \\times 1 = 96$, and the area is $\\sqrt{96} = \\sqrt{16 \\times 6} = 4\\sqrt{6} \\approx 9.8$ ✓ — pull out the LARGEST square factor, $16$, not just $4$. Second route: on a base of $7$, the apex sits $x = \\frac{7^2 + 4^2 - 5^2}{2 \\times 7} = \\frac{40}{14} = \\frac{20}{7}$ from the left end, at height $\\sqrt{4^2 - \\left(\\frac{20}{7}\\right)^2} = \\frac{8\\sqrt{6}}{7}$, and $\\frac{1}{2}(7)\\cdot\\frac{8\\sqrt{6}}{7} = 4\\sqrt{6}$ ✓. (The choice $96$ is FORGETTING THE ROOT ✗; $4\\sqrt{70}$ is USING THE SIDES INSTEAD OF THE DIFFERENCES, $\\sqrt{8 \\times 4 \\times 5 \\times 7} = \\sqrt{1120}$ ✗; $2\\sqrt{6}$ is HALVING AGAIN ✗.)',
    },
  ],
  // s6 — long thin scalene triangles where Heron shines.
  [
    {
      q: 'A splinter-thin triangular shard of glass has sides $5$, $29$, and $30$. What is its area?',
      fig: {
        view: [-2, -2.5, 32, 7],
        elems: [
          { t: 'poly', pts: [[0, 0], [30, 0], [1.4, 4.8]], fill: false },
          { t: 'label', p: [15, 0], text: '30', dx: 0, dy: 14 },
          { t: 'label', p: [0.7, 2.4], text: '5', dx: -10, dy: -6 },
          { t: 'label', p: [15.7, 2.4], text: '29', dx: 8, dy: -10 },
        ],
      },
      choices: ['$5184$', '$36$', '$75$', '$72$'],
      answer: 3,
      solution:
        'Heron: $s = \\frac{5+29+30}{2} = 32$, with factors $32-5 = 27$, $32-29 = 3$, $32-30 = 2$ (check: $27+3+2 = 32 = s$ ✓). The product is $32 \\times 27 \\times 3 \\times 2 = 5184$, and the area is $\\sqrt{5184} = 72$ ✓ (group it: $32 \\times 27 = 864$ and $864 \\times 6 = 5184 = 72^2$). Second route: lay the $30$ side flat; the apex is $x = \\frac{30^2 + 5^2 - 29^2}{2 \\times 30} = \\frac{84}{60} = 1.4$ from the left end, at height $\\sqrt{5^2 - 1.4^2} = \\sqrt{23.04} = 4.8$, so the area is $\\frac{1}{2}(30)(4.8) = 72$ ✓ — no obvious height, yet both routes land on $72$. (The choice $5184$ is FORGETTING THE ROOT ✗; $75$ is TREATING TWO SIDES AS BASE AND HEIGHT, $\\frac{1}{2}(5)(30)$ ✗; $36$ is HALVING AGAIN ✗.)',
    },
    {
      q: 'Surveyors measure a triangular plot with sides $17$ m, $25$ m, and $28$ m — no angle in sight. Find its area in square meters.',
      fig: {
        view: [-2, -3.5, 30.5, 16.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [28, 0], [8, 15]], fill: false },
          { t: 'label', p: [14, 0], text: '28', dx: 0, dy: 14 },
          { t: 'label', p: [4, 7.5], text: '17', dx: -12, dy: -6 },
          { t: 'label', p: [18, 7.5], text: '25', dx: 12, dy: -6 },
        ],
      },
      choices: ['$210$', '$44100$', '$350$', '$105$'],
      answer: 0,
      solution:
        'Heron: $s = \\frac{17+25+28}{2} = 35$, with factors $35-17 = 18$, $35-25 = 10$, $35-28 = 7$ (check: $18+10+7 = 35 = s$ ✓). The product is $35 \\times 18 \\times 10 \\times 7 = 44100$, and the area is $\\sqrt{44100} = 210$ ✓ ($210^2 = 44100$). Second route: on the $28$ m side, the apex sits $x = \\frac{28^2 + 17^2 - 25^2}{2 \\times 28} = \\frac{448}{56} = 8$ from one end, at height $\\sqrt{17^2 - 8^2} = \\sqrt{225} = 15$, so the area is $\\frac{1}{2}(28)(15) = 210$ ✓ — the $8$-$15$-$17$ triple hiding inside the plot. (The choice $44100$ is FORGETTING THE ROOT ✗; $350$ is TREATING TWO SIDES AS BASE AND HEIGHT, $\\frac{1}{2}(25)(28)$ ✗; $105$ is HALVING AGAIN ✗.)',
    },
    {
      q: 'What is the area of a triangle with sides $9$, $10$, and $17$?',
      fig: {
        view: [-1.5, -2.5, 19, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [17, 0], [7.94, 4.24]], fill: false },
          { t: 'label', p: [8.5, 0], text: '17', dx: 0, dy: 14 },
          { t: 'label', p: [3.97, 2.12], text: '9', dx: -10, dy: -6 },
          { t: 'label', p: [12.47, 2.12], text: '10', dx: 10, dy: -6 },
        ],
      },
      choices: ['$1296$', '$45$', '$36$', '$18$'],
      answer: 2,
      solution:
        'Heron: $s = \\frac{9+10+17}{2} = 18$, with factors $18-9 = 9$, $18-10 = 8$, $18-17 = 1$ (check: $9+8+1 = 18 = s$ ✓). The product is $18 \\times 9 \\times 8 \\times 1 = 1296$, and the area is $\\sqrt{1296} = 36$ ✓. Second route: with $17$ as the base, the apex lies $x = \\frac{17^2 + 9^2 - 10^2}{2 \\times 17} = \\frac{270}{34} = \\frac{135}{17}$ from the left end, at height $\\sqrt{9^2 - \\left(\\frac{135}{17}\\right)^2} = \\sqrt{\\frac{5184}{289}} = \\frac{72}{17}$, so the area is $\\frac{1}{2}(17)\\cdot\\frac{72}{17} = 36$ ✓ — messy fractions, same clean answer. (The choice $1296$ is FORGETTING THE ROOT ✗; $45$ is TREATING TWO SIDES AS BASE AND HEIGHT, $\\frac{1}{2}(9)(10)$ ✗; $18$ is HALVING AGAIN ✗.)',
    },
  ],
  // s7 — isosceles: Heron forward, then h = 2K / base backward.
  [
    {
      q: 'A tent\'s front face is an isosceles triangle with two slanted edges of $13$ and a floor edge of $24$. How tall is the tent — the height drawn to the floor edge?',
      fig: {
        view: [-1.5, -2.5, 26, 7],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [12, 5]], fill: false },
          { t: 'seg', a: [12, 5], b: [12, 0], dash: true },
          { t: 'right', at: [12, 0], from: [24, 0], to: [12, 5] },
          { t: 'tick', a: [0, 0], b: [12, 5], n: 1 },
          { t: 'tick', a: [24, 0], b: [12, 5], n: 1 },
          { t: 'label', p: [6, 2.5], text: '13', dx: -12, dy: -4 },
          { t: 'label', p: [18, 2.5], text: '13', dx: 12, dy: -4 },
          { t: 'label', p: [12, 0], text: '24', dx: 16, dy: 14 },
          { t: 'label', p: [12, 2.5], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$60$', '$5$', '$10$', '$12$'],
      answer: 1,
      solution:
        'Heron first: $s = \\frac{13+13+24}{2} = 25$, with factors $25-13 = 12$, $25-13 = 12$, $25-24 = 1$ (check: $12+12+1 = 25 = s$ ✓). The product is $25 \\times 12 \\times 12 \\times 1 = 3600$, so the area is $\\sqrt{3600} = 60$. Backward: $60 = \\frac{1}{2}(24)(h)$ gives $h = \\frac{120}{24} = 5$ ✓. Second route: the altitude bisects the floor into $12$ and $12$, and $\\sqrt{13^2 - 12^2} = \\sqrt{25} = 5$ ✓ — the $5$-$12$-$13$ triple confirms it. (The choice $60$ is ANSWERING THE AREA and stopping ✗; $10$ is DIVIDING BY THE WRONG SIDE, $\\frac{120}{12}$ with only half the floor ✗; $12$ is ANSWERING HALF THE BASE, the leg that is not the height ✗.)',
    },
    {
      q: 'A triangle has sides $15$, $15$, and $24$. Use Heron\'s Formula, then run it backward to find the height drawn to the side of length $24$.',
      fig: {
        view: [-1.5, -2.5, 26, 11],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [12, 9]], fill: false },
          { t: 'seg', a: [12, 9], b: [12, 0], dash: true },
          { t: 'right', at: [12, 0], from: [24, 0], to: [12, 9] },
          { t: 'tick', a: [0, 0], b: [12, 9], n: 1 },
          { t: 'tick', a: [24, 0], b: [12, 9], n: 1 },
          { t: 'label', p: [6, 4.5], text: '15', dx: -12, dy: -4 },
          { t: 'label', p: [18, 4.5], text: '15', dx: 12, dy: -4 },
          { t: 'label', p: [12, 0], text: '24', dx: 16, dy: 14 },
          { t: 'label', p: [12, 4.5], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$108$', '$12$', '$18$', '$9$'],
      answer: 3,
      solution:
        'Heron: $s = \\frac{15+15+24}{2} = 27$, with factors $27-15 = 12$, $27-15 = 12$, $27-24 = 3$ (check: $12+12+3 = 27 = s$ ✓). The product is $27 \\times 12 \\times 12 \\times 3 = 11664$, so the area is $\\sqrt{11664} = 108$. Backward: $108 = \\frac{1}{2}(24)(h)$, so $h = \\frac{216}{24} = 9$ ✓. Second route: the altitude meets the midpoint of the $24$ side, and $\\sqrt{15^2 - 12^2} = \\sqrt{81} = 9$ ✓ — a $9$-$12$-$15$ right triangle hides inside. (The choice $108$ is ANSWERING THE AREA ✗; $18$ is DIVIDING BY THE WRONG SIDE, $\\frac{216}{12}$ ✗; $12$ is ANSWERING HALF THE BASE ✗.)',
    },
    {
      q: 'A shallow roof truss is an isosceles triangle with two rafters of $25$ and a span of $48$. What is the height of the truss above the middle of its span?',
      fig: {
        view: [-2.5, -3.5, 51, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [48, 0], [24, 7]], fill: false },
          { t: 'seg', a: [24, 7], b: [24, 0], dash: true },
          { t: 'right', at: [24, 0], from: [48, 0], to: [24, 7] },
          { t: 'tick', a: [0, 0], b: [24, 7], n: 1 },
          { t: 'tick', a: [48, 0], b: [24, 7], n: 1 },
          { t: 'label', p: [12, 3.5], text: '25', dx: -12, dy: -4 },
          { t: 'label', p: [36, 3.5], text: '25', dx: 12, dy: -4 },
          { t: 'label', p: [24, 0], text: '48', dx: 16, dy: 14 },
          { t: 'label', p: [24, 3.5], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$168$', '$24$', '$7$', '$14$'],
      answer: 2,
      solution:
        'Heron: $s = \\frac{25+25+48}{2} = 49$, with factors $49-25 = 24$, $49-25 = 24$, $49-48 = 1$ (check: $24+24+1 = 49 = s$ ✓). The product is $49 \\times 24 \\times 24 \\times 1 = 28224$, so the area is $\\sqrt{28224} = 168$. Backward: $168 = \\frac{1}{2}(48)(h)$ gives $h = \\frac{336}{48} = 7$ ✓. Second route: the height meets the span\'s midpoint, and $\\sqrt{25^2 - 24^2} = \\sqrt{49} = 7$ ✓ — the $7$-$24$-$25$ triple in disguise. (The choice $168$ is ANSWERING THE AREA ✗; $14$ is DIVIDING BY THE WRONG SIDE, $\\frac{336}{24}$ ✗; $24$ is ANSWERING HALF THE BASE, the horizontal leg rather than the height ✗.)',
    },
  ],
  // s8 — exact radicals with no figure: simplify fully.
  [
    {
      q: 'Find the exact area of a triangle with sides $5$, $6$, and $7$.',
      choices: ['$6\\sqrt{6}$', '$216$', '$3\\sqrt{6}$', '$6\\sqrt{3}$'],
      answer: 0,
      solution:
        'Heron: $s = \\frac{5+6+7}{2} = 9$, with factors $9-5 = 4$, $9-6 = 3$, $9-7 = 2$ (check: $4+3+2 = 9 = s$ ✓). The product is $9 \\times 4 \\times 3 \\times 2 = 216$, and the area is $\\sqrt{216} = \\sqrt{36 \\times 6} = 6\\sqrt{6} \\approx 14.7$ ✓. Second route: put the side of $6$ on the ground; the apex is $x = \\frac{6^2 + 5^2 - 7^2}{2 \\times 6} = \\frac{12}{12} = 1$ from the left end, at height $\\sqrt{5^2 - 1^2} = \\sqrt{24} = 2\\sqrt{6}$, and $\\frac{1}{2}(6)(2\\sqrt{6}) = 6\\sqrt{6}$ ✓. (The choice $216$ is FORGETTING THE ROOT ✗; $6\\sqrt{3}$ is MISCOMPUTING A DIFFERENCE, taking $s-7$ as $1$ so the product halves to $108$ — the check $4+3+1 \\ne 9$ flags it ✗; $3\\sqrt{6}$ is HALVING AGAIN ✗.)',
    },
    {
      q: 'What is the exact area of a triangle whose sides measure $4$, $6$, and $8$?',
      choices: ['$135$', '$9\\sqrt{15}$', '$3\\sqrt{5}$', '$3\\sqrt{15}$'],
      answer: 3,
      solution:
        'Heron: $s = \\frac{4+6+8}{2} = 9$, with factors $9-4 = 5$, $9-6 = 3$, $9-8 = 1$ (check: $5+3+1 = 9 = s$ ✓). The product is $9 \\times 5 \\times 3 \\times 1 = 135$, and the area is $\\sqrt{135} = \\sqrt{9 \\times 15} = 3\\sqrt{15} \\approx 11.6$ ✓. Second route: on the base of $8$, the apex sits $x = \\frac{8^2 + 4^2 - 6^2}{2 \\times 8} = \\frac{44}{16} = \\frac{11}{4}$ from the left end, at height $\\sqrt{4^2 - \\left(\\frac{11}{4}\\right)^2} = \\frac{3\\sqrt{15}}{4}$, so the area is $\\frac{1}{2}(8)\\cdot\\frac{3\\sqrt{15}}{4} = 3\\sqrt{15}$ ✓. (The choice $135$ is FORGETTING THE ROOT ✗; $9\\sqrt{15}$ is FORGETTING TO ROOT THE SQUARE FACTOR, leaving the $9$ un-rooted while rooting the $15$ ✗; $3\\sqrt{5}$ is MISCOMPUTING A DIFFERENCE, using $1$ for $s-6$ and shrinking the product to $45$ ✗.)',
    },
    {
      q: 'A triangle has sides $7$, $9$, and $12$. Express its area in simplest radical form.',
      choices: ['$980$', '$14\\sqrt{5}$', '$7\\sqrt{5}$', '$14\\sqrt{10}$'],
      answer: 1,
      solution:
        'Heron: $s = \\frac{7+9+12}{2} = 14$, with factors $14-7 = 7$, $14-9 = 5$, $14-12 = 2$ (check: $7+5+2 = 14 = s$ ✓). The product is $14 \\times 7 \\times 5 \\times 2 = 980$, and the area is $\\sqrt{980} = \\sqrt{196 \\times 5} = 14\\sqrt{5} \\approx 31.3$ ✓ — spot the $196$: $14 \\times 7 \\times 2$ is $14^2$ already. Second route: with $12$ as the base, the apex is $x = \\frac{12^2 + 7^2 - 9^2}{2 \\times 12} = \\frac{112}{24} = \\frac{14}{3}$ from the left end, at height $\\sqrt{7^2 - \\left(\\frac{14}{3}\\right)^2} = \\frac{7\\sqrt{5}}{3}$, and $\\frac{1}{2}(12)\\cdot\\frac{7\\sqrt{5}}{3} = 14\\sqrt{5}$ ✓. (The choice $980$ is FORGETTING THE ROOT ✗; $14\\sqrt{10}$ is MISCOMPUTING A DIFFERENCE, taking $s-12$ as $4$ and doubling the product to $1960$ ✗; $7\\sqrt{5}$ is HALVING AGAIN ✗.)',
    },
  ],
  // s9 — the zero factor: Heron encodes the triangle inequality.
  [
    {
      q: 'A student feeds the side lengths $2$, $5$, and $7$ into Heron\'s Formula. What comes out, and why?',
      choices: [
        'The area comes out negative, so Heron\'s Formula fails for these lengths',
        'The area is $\\sqrt{70}$',
        'The area is $0$ — the three lengths flatten into a segment',
        'The area is $7\\sqrt{10}$',
      ],
      answer: 2,
      solution:
        'Here $s = \\frac{2+5+7}{2} = 7$, and the factors are $7-2 = 5$, $7-5 = 2$, $7-7 = 0$ (check: $5+2+0 = 7 = s$ ✓). The product is $7 \\times 5 \\times 2 \\times 0 = 0$, so the area is $\\sqrt{0} = 0$ ✓. Second route, no formula at all: $2 + 5 = 7$ exactly, so the two short sides lie flat along the long one — the "triangle" is a doubled-over segment with no interior. Heron quietly enforces the triangle inequality: sides that only just reach give a zero factor. (Nothing here is negative — CLAIMING A NEGATIVE misreads the zero factor ✗; $\\sqrt{70}$ is DROPPING THE ZERO FACTOR, $\\sqrt{7 \\times 5 \\times 2}$ ✗; $7\\sqrt{10}$ is USING THE SIDES INSTEAD OF THE DIFFERENCES, $\\sqrt{7 \\times 2 \\times 5 \\times 7} = \\sqrt{490}$ ✗.)',
    },
    {
      q: 'Three fence rails measure $4$ m, $6$ m, and $10$ m. If you try to enclose a triangular pen with them, what does Heron\'s Formula say about the pen\'s area?',
      choices: [
        'The area is $4\\sqrt{15}$',
        'The area is $0$ — the rails lie flat and enclose nothing',
        'The area is $12$',
        'Heron\'s Formula returns a negative area for these rails',
      ],
      answer: 1,
      solution:
        'Compute: $s = \\frac{4+6+10}{2} = 10$, and the factors are $10-4 = 6$, $10-6 = 4$, $10-10 = 0$ (check: $6+4+0 = 10 = s$ ✓). The product is $10 \\times 6 \\times 4 \\times 0 = 0$, so the area is $\\sqrt{0} = 0$ ✓. Second route: $4 + 6 = 10$, so laying the two short rails end to end exactly covers the long one — the "pen" collapses to a straight fence line with zero enclosed ground. A zero from Heron is a message, not a mistake: these lengths never made a triangle. (The choice $4\\sqrt{15}$ is DROPPING THE ZERO FACTOR, $\\sqrt{10 \\times 6 \\times 4}$ ✗; $12$ treats the rails of $4$ and $6$ as the legs of a right triangle that does not exist ✗; the last choice is CLAIMING A NEGATIVE when the smallest factor is exactly $0$ ✗.)',
    },
    {
      q: 'What happens when Heron\'s Formula is applied to the side lengths $1$, $8$, and $9$?',
      choices: [
        'It gives an area of $6\\sqrt{2}$',
        'It gives an area of $4$',
        'It cannot be applied, because one factor becomes negative',
        'It gives an area of $0$, exposing that these lengths only make a flat segment',
      ],
      answer: 3,
      solution:
        'Here $s = \\frac{1+8+9}{2} = 9$, and the factors are $9-1 = 8$, $9-8 = 1$, $9-9 = 0$ (check: $8+1+0 = 9 = s$ ✓). The product is $9 \\times 8 \\times 1 \\times 0 = 0$, so the area is $\\sqrt{0} = 0$ ✓. Second route: $1 + 8 = 9$ on the nose, so the short sides stretch taut along the long side with no room to lift off — a segment, not a triangle. The zero factor $s - 9 = 0$ is Heron\'s built-in triangle-inequality alarm. (The choice $6\\sqrt{2}$ is DROPPING THE ZERO FACTOR, $\\sqrt{9 \\times 8 \\times 1} = \\sqrt{72}$ ✗; $4$ is $\\frac{1}{2}(1)(8)$, inventing a right angle between two sides that lie flat ✗; the negative claim is CLAIMING A NEGATIVE — the factor bottoms out at zero, never below, for lengths that reach ✗.)',
    },
  ],
  // s10 — Heron forward for the area, backward for a height, on scalene
  // and isosceles triangles alike.
  [
    {
      q: 'A triangle has sides $12$, $17$, and $25$. Find the length of the height drawn to the side of length $25$.',
      fig: {
        view: [-2, -2.5, 27, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [25, 0], [9.6, 7.2]], fill: false },
          { t: 'seg', a: [9.6, 7.2], b: [9.6, 0], dash: true },
          { t: 'right', at: [9.6, 0], from: [25, 0], to: [9.6, 7.2] },
          { t: 'label', p: [12.5, 0], text: '25', dx: 20, dy: 14 },
          { t: 'label', p: [4.8, 3.6], text: '12', dx: -12, dy: -4 },
          { t: 'label', p: [17.3, 3.6], text: '17', dx: 12, dy: -4 },
          { t: 'label', p: [9.6, 3.6], text: '?', dx: 10, dy: 4 },
        ],
      },
      choices: ['$7.2$', '$90$', '$3.6$', '$15$'],
      answer: 0,
      solution:
        'Heron: $s = \\frac{12+17+25}{2} = 27$, with factors $27-12 = 15$, $27-17 = 10$, $27-25 = 2$ (check: $15+10+2 = 27 = s$ ✓). The product is $27 \\times 15 \\times 10 \\times 2 = 8100$, so the area is $\\sqrt{8100} = 90$. Backward: $90 = \\frac{1}{2}(25)(h)$ gives $h = \\frac{180}{25} = 7.2$ ✓. Second route: the foot of the height sits $x = \\frac{25^2 + 12^2 - 17^2}{2 \\times 25} = \\frac{480}{50} = 9.6$ from the left end, and $\\sqrt{12^2 - 9.6^2} = \\sqrt{51.84} = 7.2$ ✓ — Pythagoras and Heron agree. (The choice $90$ is ANSWERING THE AREA ✗; $3.6$ is FORGETTING TO DOUBLE, computing $\\frac{90}{25}$ without the $2$ ✗; $15$ is DIVIDING BY THE WRONG SIDE, $\\frac{180}{12}$ ✗.)',
    },
    {
      q: 'A footbridge truss is an isosceles triangle with sides $26$, $26$, and $48$. Using Heron\'s Formula and then working backward, find the height drawn to the side of length $48$.',
      fig: {
        view: [-2.5, -3, 51, 12.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [48, 0], [24, 10]], fill: false },
          { t: 'seg', a: [24, 10], b: [24, 0], dash: true },
          { t: 'right', at: [24, 0], from: [48, 0], to: [24, 10] },
          { t: 'tick', a: [0, 0], b: [24, 10], n: 1 },
          { t: 'tick', a: [48, 0], b: [24, 10], n: 1 },
          { t: 'label', p: [12, 5], text: '26', dx: -12, dy: -4 },
          { t: 'label', p: [36, 5], text: '26', dx: 12, dy: -4 },
          { t: 'label', p: [24, 0], text: '48', dx: 16, dy: 14 },
          { t: 'label', p: [24, 5], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$240$', '$24$', '$10$', '$5$'],
      answer: 2,
      solution:
        'Heron: $s = \\frac{26+26+48}{2} = 50$, with factors $50-26 = 24$, $50-26 = 24$, $50-48 = 2$ (check: $24+24+2 = 50 = s$ ✓). The product is $50 \\times 24 \\times 24 \\times 2 = 57600$, so the area is $\\sqrt{57600} = 240$. Backward: $240 = \\frac{1}{2}(48)(h)$ gives $h = \\frac{480}{48} = 10$ ✓. Second route: the height meets the midpoint of the $48$ side, and $\\sqrt{26^2 - 24^2} = \\sqrt{100} = 10$ ✓ — the $10$-$24$-$26$ triple, a doubled $5$-$12$-$13$. (The choice $240$ is ANSWERING THE AREA ✗; $5$ is FORGETTING TO DOUBLE, $\\frac{240}{48}$ ✗; $24$ is ANSWERING HALF THE BASE instead of the height ✗.)',
    },
    {
      q: 'In a triangle with sides $30$, $30$, and $36$, how long is the height drawn to the side of length $36$?',
      fig: {
        view: [-2, -3, 38, 26.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [36, 0], [18, 24]], fill: false },
          { t: 'seg', a: [18, 24], b: [18, 0], dash: true },
          { t: 'right', at: [18, 0], from: [36, 0], to: [18, 24] },
          { t: 'tick', a: [0, 0], b: [18, 24], n: 1 },
          { t: 'tick', a: [36, 0], b: [18, 24], n: 1 },
          { t: 'label', p: [9, 12], text: '30', dx: -12, dy: -4 },
          { t: 'label', p: [27, 12], text: '30', dx: 12, dy: -4 },
          { t: 'label', p: [18, 0], text: '36', dx: 16, dy: 14 },
          { t: 'label', p: [18, 12], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$432$', '$18$', '$12$', '$24$'],
      answer: 3,
      solution:
        'Heron: $s = \\frac{30+30+36}{2} = 48$, with factors $48-30 = 18$, $48-30 = 18$, $48-36 = 12$ (check: $18+18+12 = 48 = s$ ✓). The product is $48 \\times 18 \\times 18 \\times 12 = 186624$, so the area is $\\sqrt{186624} = 432$. Backward: $432 = \\frac{1}{2}(36)(h)$ gives $h = \\frac{864}{36} = 24$ ✓. Second route: the height lands on the midpoint of the $36$ side, and $\\sqrt{30^2 - 18^2} = \\sqrt{576} = 24$ ✓ — an $18$-$24$-$30$ right triangle, six times $3$-$4$-$5$. (The choice $432$ is ANSWERING THE AREA ✗; $12$ is FORGETTING TO DOUBLE, $\\frac{432}{36}$ ✗; $18$ is ANSWERING HALF THE BASE ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 6,
  sections: {
    '6.5': s65,
  },
}
