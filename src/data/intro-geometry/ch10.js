// Introduction to Geometry — Chapter 10: Geometric Inequalities
// All problems, explanations, and examples are original MathQuest content.

const s101 = {
  id: '10.1',
  title: 'Sides and Angles of a Triangle',
  learn: {
    concepts: [
      {
        heading: 'Bigger angles face longer sides',
        body: 'In any triangle, the largest angle sits directly across from the longest side. Picture a door hinge: open the hinge wider (a bigger angle) and the gap between the door edges (the opposite side) grows. So if $\\angle A > \\angle B$, then the side opposite $A$ is longer than the side opposite $B$.',
      },
      {
        heading: 'It works in reverse, too',
        body: 'The converse is just as true: the longest side of a triangle faces the largest angle, and the shortest side faces the smallest angle. This means ordering the sides of a triangle and ordering its angles are the same job — once you have one ordering, flip each item to its opposite partner and you have the other.',
      },
      {
        heading: 'Equal sides, equal angles',
        body: 'What if two angles tie? Then the sides opposite them must tie as well — that is exactly why an isosceles triangle has two equal base angles. Equal sides force equal opposite angles, and equal angles force equal opposite sides. If all three angles are equal, all three sides are equal: the triangle is equilateral.',
      },
      {
        heading: 'Opposite means opposite!',
        body: 'Most mistakes in this section come from matching the wrong partners. The side opposite $\\angle A$ is the one side that does NOT touch vertex $A$ — in triangle $ABC$, that is $\\overline{BC}$. Also remember your best friend from earlier chapters: if only two angles are given, the third is $180^\\circ$ minus their sum. Find all three angles before you order anything.',
      },
    ],
    examples: [
      {
        problem: 'In triangle $ABC$, $\\angle A = 50^\\circ$, $\\angle B = 60^\\circ$, and $\\angle C = 70^\\circ$. List the sides from shortest to longest.',
        steps: [
          'Match each side with its opposite angle: $\\overline{BC}$ faces $\\angle A = 50^\\circ$, $\\overline{AC}$ faces $\\angle B = 60^\\circ$, and $\\overline{AB}$ faces $\\angle C = 70^\\circ$.',
          'Order the angles: $50^\\circ < 60^\\circ < 70^\\circ$.',
          'Longer sides face bigger angles, so the sides follow the same order as their partner angles: $BC < AC < AB$.',
        ],
        answer: '$BC < AC < AB$',
        fig: {
          view: [-0.8, -0.8, 4.8, 3.6],
          elems: [
            { t: 'poly', pts: [[0, 0], [4, 0], [2.37, 2.82]], fill: false },
            { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
            { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
            { t: 'point', p: [2.37, 2.82], label: 'C', dx: 6, dy: -8 },
            { t: 'angle', at: [0, 0], from: [4, 0], to: [2.37, 2.82], r: 0.8, label: '50' },
            { t: 'angle', at: [4, 0], from: [0, 0], to: [2.37, 2.82], r: 0.65, label: '60' },
            { t: 'angle', at: [2.37, 2.82], from: [4, 0], to: [0, 0], r: 0.55, label: '70' },
          ],
        },
      },
      {
        problem: 'Triangle $ABC$ has $AB = 7$, $BC = 5$, and $CA = 9$. List the angles from smallest to largest.',
        steps: [
          'Match each angle with its opposite side: $\\angle A$ faces $BC = 5$, $\\angle B$ faces $CA = 9$, and $\\angle C$ faces $AB = 7$.',
          'Order the sides: $5 < 7 < 9$.',
          'Smaller sides face smaller angles, so $\\angle A < \\angle C < \\angle B$.',
        ],
        answer: '$\\angle A < \\angle C < \\angle B$',
        fig: {
          view: [-1, -0.8, 8.7, 5.9],
          elems: [
            { t: 'poly', pts: [[0, 0], [7, 0], [7.5, 4.97]], fill: false },
            { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
            { t: 'point', p: [7, 0], label: 'B', dx: 8, dy: 10 },
            { t: 'point', p: [7.5, 4.97], label: 'C', dx: 10, dy: -6 },
            { t: 'label', p: [3.5, 0], text: '7', dx: 0, dy: 14 },
            { t: 'label', p: [7.25, 2.49], text: '5', dx: 14, dy: 0 },
            { t: 'label', p: [3.75, 2.49], text: '9', dx: -8, dy: -10 },
          ],
        },
      },
      {
        problem: 'In triangle $PQR$, $\\angle P = 40^\\circ$ and $\\angle Q = 75^\\circ$. Which side of the triangle is the longest?',
        steps: [
          'First find the missing angle: $\\angle R = 180^\\circ - 40^\\circ - 75^\\circ = 65^\\circ$.',
          'The largest angle is $\\angle Q = 75^\\circ$.',
          'The longest side is the one opposite the largest angle — the side that does not touch $Q$, which is $\\overline{PR}$.',
        ],
        answer: '$\\overline{PR}$ is the longest side',
        fig: {
          view: [-0.9, -0.8, 4.9, 3.6],
          elems: [
            { t: 'poly', pts: [[0, 0], [4, 0], [3.27, 2.74]], fill: false },
            { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 8 },
            { t: 'point', p: [4, 0], label: 'Q', dx: 10, dy: 8 },
            { t: 'point', p: [3.27, 2.74], label: 'R', dx: 8, dy: -8 },
            { t: 'angle', at: [0, 0], from: [4, 0], to: [3.27, 2.74], r: 0.9, label: '40' },
            { t: 'angle', at: [4, 0], from: [0, 0], to: [3.27, 2.74], r: 0.5, label: '75' },
            { t: 'angle', at: [3.27, 2.74], from: [4, 0], to: [0, 0], r: 0.55, label: '65' },
          ],
        },
      },
    ],
  },
  problems: [
    {
      q: 'In triangle $ABC$, $\\angle A = 80^\\circ$, $\\angle B = 60^\\circ$, and $\\angle C = 40^\\circ$. Which side is the longest?',
      fig: {
        view: [-0.9, -0.8, 4.2, 4.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [0.7, 3.98]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [3, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [0.7, 3.98], label: 'C', dx: 0, dy: -12 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [0.7, 3.98], r: 0.55, label: '80' },
          { t: 'angle', at: [3, 0], from: [0, 0], to: [0.7, 3.98], r: 0.7, label: '60' },
          { t: 'angle', at: [0.7, 3.98], from: [3, 0], to: [0, 0], r: 0.9, label: '40' },
        ],
      },
      choices: ['$\\overline{AB}$', '$\\overline{BC}$', '$\\overline{AC}$', 'all three sides are equal'],
      answer: 1,
      solution: 'The longest side faces the largest angle. The largest angle is $\\angle A = 80^\\circ$, and the side opposite $A$ — the one that never touches vertex $A$ — is $\\overline{BC}$. Watch out for $\\overline{AB}$: it touches $A$, so it cannot be the side opposite $\\angle A$.',
    },
    {
      q: 'Triangle $DEF$ has $DE = 4$, $EF = 6$, and $DF = 5$. Which angle is the largest?',
      choices: ['$\\angle D$', '$\\angle E$', '$\\angle F$', 'it cannot be determined'],
      answer: 0,
      solution: 'The largest angle faces the longest side. The longest side is $EF = 6$, and the vertex not on $\\overline{EF}$ is $D$. So $\\angle D$ is the largest angle. The three side lengths completely determine the triangle, so the answer certainly can be determined!',
    },
    {
      q: 'In triangle $ABC$, $\\angle B = \\angle C$. Which two sides must be equal?',
      choices: ['$AB = BC$', '$AC = BC$', '$AB = AC$', 'no two sides need to be equal'],
      answer: 2,
      solution: 'Equal angles force equal opposite sides. $\\angle B$ faces $\\overline{AC}$ and $\\angle C$ faces $\\overline{AB}$, so those two sides must match: $AB = AC$. This is exactly the isosceles triangle picture — the two equal base angles sit under the two equal legs.',
    },
    {
      q: 'In triangle $ABC$, $\\angle A = 55^\\circ$, $\\angle B = 65^\\circ$, and $\\angle C = 60^\\circ$. Which list orders the sides from shortest to longest?',
      fig: {
        view: [-0.9, -0.8, 4.9, 4.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2.4, 3.43]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [2.4, 3.43], label: 'C', dx: 4, dy: -10 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [2.4, 3.43], r: 0.8, label: '55' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [2.4, 3.43], r: 0.65, label: '65' },
          { t: 'angle', at: [2.4, 3.43], from: [4, 0], to: [0, 0], r: 0.55, label: '60' },
        ],
      },
      choices: ['$AB < BC < AC$', '$AC < AB < BC$', '$BC < AC < AB$', '$BC < AB < AC$'],
      answer: 3,
      solution: 'Order the angles first: $55^\\circ < 60^\\circ < 65^\\circ$, that is, $\\angle A < \\angle C < \\angle B$. Now swap each angle for its opposite side: $\\angle A$ faces $BC$, $\\angle C$ faces $AB$, and $\\angle B$ faces $AC$. So $BC < AB < AC$.',
    },
    {
      q: 'In triangle $PQR$, $\\angle P = 100^\\circ$ and $\\angle Q = 30^\\circ$. Which side is the shortest?',
      choices: ['$\\overline{PQ}$', '$\\overline{QR}$', '$\\overline{PR}$', 'it cannot be determined without side lengths'],
      answer: 2,
      solution: 'First find the third angle: $\\angle R = 180^\\circ - 100^\\circ - 30^\\circ = 50^\\circ$. The shortest side faces the smallest angle, $\\angle Q = 30^\\circ$, and the side not touching $Q$ is $\\overline{PR}$. The angles alone pin down which side is shortest — no lengths needed.',
    },
    {
      q: 'Triangle $XYZ$ has $XY = 10$, $YZ = 7$, and $XZ = 8$. Which list orders the angles from smallest to largest?',
      fig: {
        view: [-1.2, -1, 11.4, 6.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [5.75, 5.56]], fill: false },
          { t: 'point', p: [0, 0], label: 'X', dx: -10, dy: 8 },
          { t: 'point', p: [10, 0], label: 'Y', dx: 10, dy: 8 },
          { t: 'point', p: [5.75, 5.56], label: 'Z', dx: 0, dy: -12 },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [7.88, 2.78], text: '7', dx: 14, dy: 0 },
          { t: 'label', p: [2.88, 2.78], text: '8', dx: -12, dy: 0 },
        ],
      },
      choices: ['$\\angle Z < \\angle Y < \\angle X$', '$\\angle X < \\angle Y < \\angle Z$', '$\\angle Y < \\angle X < \\angle Z$', '$\\angle X < \\angle Z < \\angle Y$'],
      answer: 1,
      solution: 'Order the sides first: $7 < 8 < 10$. Now match opposites: $YZ = 7$ faces $\\angle X$, $XZ = 8$ faces $\\angle Y$, and $XY = 10$ faces $\\angle Z$. Smaller side, smaller opposite angle, so $\\angle X < \\angle Y < \\angle Z$.',
    },
    {
      q: 'In triangle $ABC$, $\\angle A = \\angle B$ and $\\angle C > \\angle A$. Which side is the longest?',
      choices: ['$\\overline{BC}$', '$\\overline{AC}$', '$\\overline{AB}$', 'there is a tie for longest side'],
      answer: 2,
      solution: 'Since $\\angle C$ beats the two equal angles, $\\angle C$ is the largest angle of the triangle. The longest side faces it: $\\overline{AB}$. The other two sides, $\\overline{BC}$ and $\\overline{AC}$, are the ones that tie (they face the equal angles $\\angle A$ and $\\angle B$) — the longest side stands alone.',
    },
    {
      q: 'In triangle $ABC$, $\\angle A = 48^\\circ$, $\\angle B = 62^\\circ$, and $\\angle C = 70^\\circ$. Which of $B$ and $C$ is farther from $A$?',
      fig: {
        view: [-0.9, -0.8, 4.9, 3.7],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2.51, 2.79]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [2.51, 2.79], label: 'C', dx: 4, dy: -10 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [2.51, 2.79], r: 0.85, label: '48' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [2.51, 2.79], r: 0.6, label: '62' },
          { t: 'angle', at: [2.51, 2.79], from: [4, 0], to: [0, 0], r: 0.5, label: '70' },
        ],
      },
      choices: [
        '$B$, because $\\overline{AB}$ faces the $70^\\circ$ angle at $C$',
        '$C$, because the largest angle is at $C$',
        '$B$ and $C$ are exactly the same distance from $A$',
        'it cannot be determined from angles alone',
      ],
      answer: 0,
      solution: 'The distances from $A$ are the sides $AB$ and $AC$. Compare them by their opposite angles: $\\overline{AB}$ faces $\\angle C = 70^\\circ$, while $\\overline{AC}$ faces $\\angle B = 62^\\circ$. Since $70^\\circ > 62^\\circ$, we get $AB > AC$, so $B$ is farther from $A$. Careful: having the largest angle AT a vertex does not make that vertex far away — it makes the side ACROSS from it long.',
    },
    {
      q: 'The angles of triangle $ABC$ satisfy $\\angle A = 2x$, $\\angle B = 3x$, and $\\angle C = 4x$ for some positive number $x$. Which side is the longest?',
      choices: ['$\\overline{BC}$', '$\\overline{AC}$', 'it cannot be determined', '$\\overline{AB}$'],
      answer: 3,
      solution: 'The angles sum to $180^\\circ$: $2x + 3x + 4x = 9x = 180^\\circ$, so $x = 20^\\circ$ and the angles are $40^\\circ$, $60^\\circ$, $80^\\circ$. In fact we never needed $x$ at all — $4x$ is clearly the biggest of the three! The largest angle is $\\angle C$, so the longest side is the one opposite it, $\\overline{AB}$.',
    },
    {
      q: 'In triangle $ABC$, $AB = AC$ and $\\angle A = 40^\\circ$. Which statement correctly compares all three sides?',
      fig: {
        view: [-0.9, -0.9, 3.7, 4.7],
        elems: [
          { t: 'poly', pts: [[0, 0], [2.74, 0], [1.37, 3.76]], fill: false },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 8 },
          { t: 'point', p: [2.74, 0], label: 'C', dx: 10, dy: 8 },
          { t: 'point', p: [1.37, 3.76], label: 'A', dx: 0, dy: -12 },
          { t: 'tick', a: [0, 0], b: [1.37, 3.76], n: 1 },
          { t: 'tick', a: [2.74, 0], b: [1.37, 3.76], n: 1 },
          { t: 'angle', at: [1.37, 3.76], from: [0, 0], to: [2.74, 0], r: 0.8, label: '40' },
        ],
      },
      choices: ['$BC < AB = AC$', '$AB = AC < BC$', '$BC = AB < AC$', '$AC < BC < AB$'],
      answer: 0,
      solution: 'The equal sides give equal base angles: $\\angle B = \\angle C = \\frac{180^\\circ - 40^\\circ}{2} = 70^\\circ$. Now compare: $\\overline{BC}$ faces the $40^\\circ$ angle while $\\overline{AB}$ and $\\overline{AC}$ each face a $70^\\circ$ angle. The side facing the smallest angle is shortest, so $BC < AB = AC$.',
    },
  ],
}

const s102 = {
  id: '10.2',
  title: 'Pythagoras — Not Just For Right Triangles',
  learn: {
    concepts: [
      {
        heading: 'The Pythagorean check-up',
        body: 'In a right triangle with legs $a$, $b$ and hypotenuse $c$, we know $c^2 = a^2 + b^2$. Here is the surprise: you can run the same comparison on ANY triangle. Take the longest side $c$ and compare $c^2$ with $a^2 + b^2$ — the result tells you what kind of triangle you have.',
      },
      {
        heading: 'Three possible outcomes',
        body: 'Let $c$ be the longest side. If $c^2 < a^2 + b^2$, the angle opposite $c$ is acute, and the triangle is acute. If $c^2 = a^2 + b^2$, that angle is exactly $90^\\circ$: a right triangle. If $c^2 > a^2 + b^2$, that angle is obtuse. The intuition: imagine hinging sides $a$ and $b$ apart — as the angle between them opens wider, the far side $c$ stretches, so a big $c^2$ means a wide angle.',
      },
      {
        heading: 'Always test the LARGEST side',
        body: 'A triangle has at most one angle of $90^\\circ$ or more, and it must be the largest angle — which sits opposite the largest side. So the classification test only means something when $c$ is the longest side. Testing a shorter side proves nothing: its opposite angle is guaranteed to be acute in every triangle.',
      },
      {
        heading: 'First make sure it is a triangle at all',
        body: 'Before classifying, check that the three lengths actually form a triangle: the two shorter sides must add to MORE than the longest ($a + b > c$). If $a + b \\le c$, the sides cannot close up, and there is nothing to classify. We will study this rule closely in the next section.',
      },
    ],
    examples: [
      {
        problem: 'Classify the triangle with sides $5$, $6$, and $7$ as acute, right, or obtuse.',
        steps: [
          'The longest side is $7$, so compare $7^2$ with $5^2 + 6^2$.',
          '$7^2 = 49$ and $5^2 + 6^2 = 25 + 36 = 61$.',
          'Since $49 < 61$, the largest angle is acute — and if the largest angle is acute, all three are. The triangle is acute.',
        ],
        answer: 'Acute, because $7^2 < 5^2 + 6^2$',
        fig: {
          view: [-1, -1, 8.2, 5.2],
          elems: [
            { t: 'poly', pts: [[0, 0], [7, 0], [4.29, 4.2]], fill: false },
            { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
            { t: 'point', p: [7, 0], label: 'B', dx: 10, dy: 8 },
            { t: 'point', p: [4.29, 4.2], label: 'C', dx: 6, dy: -8 },
            { t: 'label', p: [3.5, 0], text: '7', dx: 0, dy: 14 },
            { t: 'label', p: [5.65, 2.1], text: '5', dx: 14, dy: 0 },
            { t: 'label', p: [2.15, 2.1], text: '6', dx: -12, dy: 0 },
          ],
        },
      },
      {
        problem: 'Classify the triangle with sides $6$, $8$, and $11$.',
        steps: [
          'Check it is a triangle: $6 + 8 = 14 > 11$. Good.',
          'The longest side is $11$: compare $11^2 = 121$ with $6^2 + 8^2 = 36 + 64 = 100$.',
          'Since $121 > 100$, the angle opposite the side of length $11$ is obtuse. The triangle is obtuse.',
          'Nice perspective: $6$-$8$-$10$ is a right triangle, and stretching the longest side from $10$ to $11$ forces the opposite angle to open past $90^\\circ$.',
        ],
        answer: 'Obtuse, because $11^2 > 6^2 + 8^2$',
        fig: {
          view: [-1.2, -1, 12.2, 5.4],
          elems: [
            { t: 'poly', pts: [[0, 0], [11, 0], [6.77, 4.26]], fill: false },
            { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
            { t: 'point', p: [11, 0], label: 'B', dx: 10, dy: 8 },
            { t: 'point', p: [6.77, 4.26], label: 'C', dx: 4, dy: -10 },
            { t: 'label', p: [5.5, 0], text: '11', dx: 0, dy: 14 },
            { t: 'label', p: [8.89, 2.13], text: '6', dx: 14, dy: 0 },
            { t: 'label', p: [3.39, 2.13], text: '8', dx: -12, dy: 0 },
          ],
        },
      },
      {
        problem: 'For how many integers $n$ is the triangle with sides $4$, $7$, and $n$ obtuse?',
        steps: [
          'First, the sides must form a triangle: $7 - 4 < n < 7 + 4$, so $3 < n < 11$, giving $n = 4, 5, \\ldots, 10$.',
          'Case 1: $n$ is the longest side ($n \\ge 8$). Obtuse needs $n^2 > 4^2 + 7^2 = 65$. Since $8^2 = 64 < 65$ but $9^2 = 81 > 65$, this gives $n = 9$ and $n = 10$.',
          'Case 2: $7$ is the longest side ($n \\le 7$). Obtuse needs $7^2 > 4^2 + n^2$, so $n^2 < 33$, giving $n = 4$ and $n = 5$ (remember $n > 3$).',
          'Combine the cases: $n \\in \\{4, 5, 9, 10\\}$ — four values. (For $n = 6, 7, 8$ the triangle is acute; check $n = 8$: $64 < 65$, just barely!)',
        ],
        answer: '$4$ values of $n$: $n = 4, 5, 9, 10$',
        fig: {
          view: [-1.2, -1, 8, 4.9],
          elems: [
            { t: 'seg', a: [0, 0], b: [7, 0] },
            { t: 'seg', a: [0, 0], b: [1.2, 3.82] },
            { t: 'seg', a: [7, 0], b: [1.2, 3.82], dash: true },
            { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
            { t: 'point', p: [7, 0], label: 'B', dx: 10, dy: 8 },
            { t: 'point', p: [1.2, 3.82], label: 'C', dx: 0, dy: -12 },
            { t: 'label', p: [3.5, 0], text: '7', dx: 0, dy: 14 },
            { t: 'label', p: [0.6, 1.91], text: '4', dx: -12, dy: 0 },
            { t: 'label', p: [4.1, 1.91], text: 'n', dx: 10, dy: -8 },
          ],
        },
      },
    ],
  },
  problems: [
    {
      q: 'A triangle has sides $6$, $8$, and $10$. Is it acute, right, or obtuse?',
      choices: ['acute', 'right', 'obtuse', 'the sides do not form a triangle'],
      answer: 1,
      solution: 'Test the longest side: $10^2 = 100$ and $6^2 + 8^2 = 36 + 64 = 100$. The two are exactly equal, so the angle opposite the side of length $10$ is exactly $90^\\circ$ — a right triangle. (It is the $3$-$4$-$5$ triangle scaled by $2$.)',
    },
    {
      q: 'A triangle has sides $5$, $7$, and $9$. Is it acute, right, or obtuse?',
      choices: ['acute', 'right', 'obtuse', 'the sides do not form a triangle'],
      answer: 2,
      solution: 'The longest side is $9$, so compare $9^2 = 81$ with $5^2 + 7^2 = 25 + 49 = 74$. Since $81 > 74$, the angle opposite the $9$ is obtuse. (And yes, it is a genuine triangle: $5 + 7 = 12 > 9$.)',
    },
    {
      q: 'A triangle has sides $4$, $5$, and $6$. Is it acute, right, or obtuse?',
      choices: ['acute', 'right', 'obtuse', 'the sides do not form a triangle'],
      answer: 0,
      solution: 'Test the longest side, $6$: $6^2 = 36$ and $4^2 + 5^2 = 16 + 25 = 41$. Since $36 < 41$, the LARGEST angle of the triangle is acute — and then all three angles are acute. The triangle is acute.',
    },
    {
      q: 'To classify the triangle with sides $5$, $6$, and $7$, Jordan compares $5^2$ with $6^2 + 7^2$, finds $25 < 85$, and announces the triangle is acute. What is the best evaluation of this method?',
      choices: [
        'The method is fine — the test works with any of the three sides',
        'The test must use the longest side: compare $7^2$ with $5^2 + 6^2$',
        'The test should have used $6^2$ against $5^2 + 7^2$',
        'No test is needed, because $5$, $6$, $7$ are consecutive integers',
      ],
      answer: 1,
      solution: 'The angle opposite a SHORTER side is acute in every triangle, so Jordan\'s comparison was guaranteed to come out "acute" no matter what — it carries no information. The only angle that could be right or obtuse is the largest one, opposite the longest side. The valid test is $7^2 = 49$ versus $5^2 + 6^2 = 61$; since $49 < 61$ the triangle really is acute, so Jordan\'s conclusion was lucky, but the method was not reliable.',
    },
    {
      q: 'A triangle has sides $7$, $24$, and $25$. Is it acute, right, or obtuse?',
      choices: ['acute', 'obtuse', 'the sides do not form a triangle', 'right'],
      answer: 3,
      solution: 'Compare the square of the longest side with the sum of the other squares: $25^2 = 625$ and $7^2 + 24^2 = 49 + 576 = 625$. Equal! The triangle is right, with the right angle opposite the side of length $25$. The triple $7$-$24$-$25$ is a Pythagorean triple worth remembering.',
    },
    {
      q: 'A triangle has sides $8$, $9$, and $13$. Is it acute, right, or obtuse?',
      choices: ['obtuse', 'acute', 'right', 'the sides do not form a triangle'],
      answer: 0,
      solution: 'The longest side is $13$: compare $13^2 = 169$ with $8^2 + 9^2 = 64 + 81 = 145$. Since $169 > 145$, the angle opposite the $13$ passes $90^\\circ$, so the triangle is obtuse. (Triangle check: $8 + 9 = 17 > 13$, so it does close up.)',
    },
    {
      q: 'For which integer $n$ is the triangle with sides $6$, $8$, and $n$ a right triangle?',
      fig: {
        view: [-1.2, -1, 9.2, 6.9],
        elems: [
          { t: 'seg', a: [0, 0], b: [8, 0] },
          { t: 'seg', a: [0, 0], b: [1.5, 5.81] },
          { t: 'seg', a: [8, 0], b: [1.5, 5.81], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [8, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [1.5, 5.81], label: 'C', dx: 0, dy: -12 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [0.75, 2.91], text: '6', dx: -12, dy: 0 },
          { t: 'label', p: [4.75, 2.91], text: 'n', dx: 12, dy: -6 },
        ],
      },
      choices: ['$9$', '$10$', '$11$', '$12$'],
      answer: 1,
      solution: 'If $n$ is the hypotenuse, then $n^2 = 6^2 + 8^2 = 100$, so $n = 10$ — an integer. Could $8$ be the hypotenuse instead? Then $n^2 = 8^2 - 6^2 = 28$, and $28$ is not a perfect square, so no integer works there. The only integer answer is $n = 10$.',
    },
    {
      q: 'How many integers $n$ make the triangle with sides $5$, $12$, and $n$ an obtuse triangle in which $n$ is the longest side?',
      choices: ['$2$', '$4$', '$3$', '$5$'],
      answer: 2,
      solution: 'For $n$ to be the longest side we need $n > 12$, and the triangle inequality needs $n < 5 + 12 = 17$. Obtuse means $n^2 > 5^2 + 12^2 = 169$, so $n > 13$. Watch the boundary: $n = 13$ gives $169 = 169$, a RIGHT triangle, not obtuse. That leaves $n = 14, 15, 16$ — three values. Counting $13$ as obtuse is the classic slip.',
    },
    {
      q: 'For how many integers $n$ is the triangle with sides $9$, $12$, and $n$ acute?',
      choices: ['$6$', '$8$', '$9$', '$7$'],
      answer: 3,
      solution: 'Triangle inequality first: $3 < n < 21$. Now split by which side is longest. If $n \\le 12$, the longest side is $12$: acute needs $144 < 81 + n^2$, so $n^2 > 63$, giving $n \\ge 8$ — that is $n = 8, 9, 10, 11, 12$. If $n > 12$, acute needs $n^2 < 81 + 144 = 225$, so $n < 15$ — that is $n = 13, 14$. (At $n = 15$, $225 = 225$ makes it right, not acute.) Total: $5 + 2 = 7$ integers.',
    },
    {
      q: 'The sides of a triangle are $n$, $n + 1$, and $n + 2$ for a positive integer $n$. For which value of $n$ is the triangle right?',
      choices: ['$1$', '$2$', '$3$', '$4$'],
      answer: 2,
      solution: 'The longest side is $n + 2$, so we need $(n+2)^2 = n^2 + (n+1)^2$. Expanding: $n^2 + 4n + 4 = 2n^2 + 2n + 1$, which simplifies to $n^2 - 2n - 3 = 0$, so $(n-3)(n+1) = 0$ and $n = 3$. That is the famous $3$-$4$-$5$ triangle — the ONLY right triangle with consecutive integer sides! (Check $n = 1$: sides $1, 2, 3$ do not even form a triangle, since $1 + 2 = 3$.)',
    },
  ],
}

const s103 = {
  id: '10.3',
  title: 'The Triangle Inequality',
  learn: {
    concepts: [
      {
        heading: 'The shortest path is the straight one',
        body: 'Walking from $A$ to $C$ by way of a point $B$ off the straight path is always longer than walking straight: $AB + BC > AC$. That single idea IS the triangle inequality — the two sides of a triangle you travel along a detour must together beat the side you skipped.',
      },
      {
        heading: 'Every pair must beat the third side',
        body: 'In any triangle with sides $a$, $b$, $c$, all three checks hold: $a + b > c$, $b + c > a$, and $a + c > b$. Handy shortcut: you only really need to check that the two SHORTEST sides sum to more than the longest — the other two checks pass automatically.',
      },
      {
        heading: 'Beware the flat trap',
        body: 'The inequality is strict. If $a + b = c$ exactly, the "triangle" collapses flat: the two short sides lie down along the long one, and you get a segment, not a triangle. This degenerate case is the trap in almost every problem — sums that EQUAL the third side do not count.',
      },
      {
        heading: 'The window for the third side',
        body: 'If two sides have lengths $a$ and $b$, the third side $c$ must satisfy $|a - b| < c < a + b$. Both endpoints are excluded! To count the integer possibilities, list the integers strictly inside the window. For example, sides $4$ and $6$ allow $2 < c < 10$, so the integers are $3, 4, \\ldots, 9$ — seven of them, not nine.',
      },
    ],
    examples: [
      {
        problem: 'Can $4$, $5$, $10$ be the sides of a triangle? What about $4$, $6$, $10$?',
        steps: [
          'Check the two shortest sides against the longest. For $4, 5, 10$: $4 + 5 = 9$, and $9 < 10$, so the short sides cannot reach across — no triangle.',
          'For $4, 6, 10$: $4 + 6 = 10$ exactly. The sides just barely reach, lying flat along the long side — a degenerate "triangle" with zero area, which does not count.',
          'A true triangle demands a STRICT inequality: the two shorter sides must sum to MORE than the longest.',
        ],
        answer: 'Neither works: $4 + 5 < 10$ fails, and $4 + 6 = 10$ is flat',
        fig: {
          view: [-1, -2, 11, 2.4],
          elems: [
            { t: 'seg', a: [0, 0], b: [10, 0] },
            { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: -12 },
            { t: 'point', p: [4, 0], label: 'P', dx: 0, dy: -12 },
            { t: 'point', p: [10, 0], label: 'B', dx: 0, dy: -12 },
            { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
            { t: 'label', p: [7, 0], text: '6', dx: 0, dy: 14 },
            { t: 'label', p: [5, 0], text: 'AB = 10, flat', dx: 0, dy: -28 },
          ],
        },
      },
      {
        problem: 'Two sides of a triangle measure $8$ and $13$. What are the possible lengths of the third side $c$, and how many integer lengths are possible?',
        steps: [
          'The third side must beat the gap and stay under the sum: $13 - 8 < c < 13 + 8$.',
          'So $5 < c < 21$ — and both ends are excluded, since $c = 5$ or $c = 21$ would make the triangle flat.',
          'The integers strictly between $5$ and $21$ are $6, 7, \\ldots, 20$. That is $20 - 6 + 1 = 15$ possible integer lengths.',
        ],
        answer: '$5 < c < 21$; there are $15$ integer possibilities',
        fig: {
          view: [-1.4, -1.2, 14.4, 8.8],
          elems: [
            { t: 'seg', a: [0, 0], b: [13, 0] },
            { t: 'seg', a: [0, 0], b: [2.4, 7.63] },
            { t: 'seg', a: [13, 0], b: [2.4, 7.63], dash: true },
            { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 8 },
            { t: 'point', p: [13, 0], label: 'Q', dx: 10, dy: 8 },
            { t: 'point', p: [2.4, 7.63], label: 'R', dx: 0, dy: -12 },
            { t: 'label', p: [6.5, 0], text: '13', dx: 0, dy: 14 },
            { t: 'label', p: [1.2, 3.82], text: '8', dx: -12, dy: 0 },
            { t: 'label', p: [7.7, 3.82], text: 'c', dx: 12, dy: -6 },
          ],
        },
      },
      {
        problem: 'A trail runs straight from camp $A$ to a spring at $B$ ($6$ km), then straight from $B$ to a cabin at $C$ ($9$ km). $B$ is not on the straight line from $A$ to $C$. What can you say about the straight-line distance $AC$?',
        steps: [
          'The detour through $B$ beats the straight path: $AC < AB + BC = 6 + 9 = 15$ km, strictly, since $B$ is off the line.',
          'Also, going $A \\to B$ and then only $9$ km more cannot land farther than... flip the inequality around: $AB < AC + CB$ gives $AC > 6 - 9$, no news, but $BC < AB + AC$ gives $AC > 9 - 6 = 3$ km.',
          'So $3 < AC < 15$: the cabin is more than $3$ km and less than $15$ km from camp.',
        ],
        answer: '$3$ km $< AC < 15$ km',
        fig: {
          view: [-1.2, -1, 13.8, 6],
          elems: [
            { t: 'seg', a: [0, 0], b: [3.6, 4.8] },
            { t: 'seg', a: [3.6, 4.8], b: [12.46, 3.24] },
            { t: 'seg', a: [0, 0], b: [12.46, 3.24], dash: true },
            { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
            { t: 'point', p: [3.6, 4.8], label: 'B', dx: 0, dy: -12 },
            { t: 'point', p: [12.46, 3.24], label: 'C', dx: 12, dy: 0 },
            { t: 'label', p: [1.8, 2.4], text: '6', dx: -12, dy: 0 },
            { t: 'label', p: [8.03, 4.02], text: '9', dx: 0, dy: -12 },
            { t: 'label', p: [6.23, 1.62], text: '?', dx: 0, dy: 14 },
          ],
        },
      },
    ],
  },
  problems: [
    {
      q: 'Which of the following could be the side lengths of a triangle?',
      choices: ['$2$, $3$, $6$', '$5$, $6$, $10$', '$4$, $4$, $8$', '$1$, $2$, $3$'],
      answer: 1,
      solution: 'Check the two shortest sides against the longest each time. $2 + 3 = 5 < 6$: fails. $5 + 6 = 11 > 10$: works! $4 + 4 = 8$: equal means flat, so it fails. $1 + 2 = 3$: flat again. Only $5, 6, 10$ makes a genuine triangle.',
    },
    {
      q: 'Two sides of a triangle have lengths $7$ and $10$. Which describes all possible lengths $c$ of the third side?',
      fig: {
        view: [-1.2, -1.2, 11.2, 7.9],
        elems: [
          { t: 'seg', a: [0, 0], b: [10, 0] },
          { t: 'seg', a: [0, 0], b: [1.75, 6.78] },
          { t: 'seg', a: [10, 0], b: [1.75, 6.78], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [10, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [1.75, 6.78], label: 'C', dx: 0, dy: -12 },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [0.88, 3.39], text: '7', dx: -12, dy: 0 },
          { t: 'label', p: [5.88, 3.39], text: 'c', dx: 12, dy: -6 },
        ],
      },
      choices: ['$3 \\le c \\le 17$', '$3 < c < 17$', '$7 < c < 10$', '$0 < c < 17$'],
      answer: 1,
      solution: 'The third side must beat the difference and stay below the sum: $10 - 7 < c < 10 + 7$, that is, $3 < c < 17$. The inequalities are strict — at $c = 3$ or $c = 17$ the triangle collapses flat. And $c$ does NOT need to be between $7$ and $10$; for example $c = 5$ works fine: $5 + 7 = 12 > 10$.',
    },
    {
      q: 'Can segments of lengths $6$, $6$, and $12$ form a triangle?',
      choices: [
        'Yes — two sides are equal, so it is isosceles',
        'Yes — because $6 + 12 > 6$',
        'No — $6 + 6$ equals $12$, so the sides lie flat',
        'No — $6 + 6$ is less than $12$',
      ],
      answer: 2,
      solution: 'The two short sides give $6 + 6 = 12$, which EQUALS the third side rather than beating it. The two sides stretch out flat along the long side and enclose no area — a degenerate figure, not a triangle. The check $6 + 12 > 6$ is true but useless: you must test the two shortest sides against the longest.',
    },
    {
      q: 'Two sides of a triangle have lengths $5$ and $9$. How many integer lengths are possible for the third side?',
      choices: ['$10$', '$8$', '$13$', '$9$'],
      answer: 3,
      solution: 'The window is $9 - 5 < c < 9 + 5$, so $4 < c < 14$. The integers strictly inside are $5, 6, \\ldots, 13$: that is $13 - 5 + 1 = 9$ values. The answer $10$ comes from accidentally including an endpoint — but $c = 4$ and $c = 14$ both make flat, degenerate figures.',
    },
    {
      q: 'Marta has sticks of lengths $3$ and $8$, plus a box of sticks with every integer length. How many different integer-length sticks could she pick as a third side to build a genuine triangle?',
      choices: ['$6$', '$4$', '$5$', '$7$'],
      answer: 2,
      solution: 'The third stick $c$ needs $8 - 3 < c < 8 + 3$, so $5 < c < 11$. The integers are $6, 7, 8, 9, 10$ — five sticks. Both $5$ and $11$ fail because $3 + 5 = 8$ and $3 + 8 = 11$ are flat configurations, not triangles.',
    },
    {
      q: 'Nia walks $0.9$ km from home to the store, then $1.3$ km from the store to school. The store is not on the straight line from home to school. What can she conclude about the straight-line distance from home to school?',
      fig: {
        view: [-1, -0.8, 7.2, 2.9],
        elems: [
          { t: 'seg', a: [0, 0], b: [2.16, 1.62] },
          { t: 'seg', a: [2.16, 1.62], b: [5.89, 0.48] },
          { t: 'seg', a: [0, 0], b: [5.89, 0.48], dash: true },
          { t: 'point', p: [0, 0], label: 'Home', dx: -6, dy: 14 },
          { t: 'point', p: [2.16, 1.62], label: 'Store', dx: 0, dy: -12 },
          { t: 'point', p: [5.89, 0.48], label: 'School', dx: 8, dy: 14 },
          { t: 'label', p: [1.08, 0.81], text: '0.9 km', dx: -16, dy: -6 },
          { t: 'label', p: [4.03, 1.05], text: '1.3 km', dx: 10, dy: -10 },
        ],
      },
      choices: ['It is less than $2.2$ km', 'It is exactly $2.2$ km', 'It is more than $2.2$ km', 'It is exactly $0.4$ km'],
      answer: 0,
      solution: 'Home, store, and school form a triangle, and the straight path is shorter than any detour: the direct distance is LESS than $0.9 + 1.3 = 2.2$ km, strictly, because the store is off the straight line. (The triangle inequality also says the distance is more than $1.3 - 0.9 = 0.4$ km, but we cannot pin down its exact value.)',
    },
    {
      q: 'An isosceles triangle has sides of lengths $4$ and $9$. What is its perimeter?',
      choices: ['$17$', '$22$', '$13$', 'it cannot be determined'],
      answer: 1,
      solution: 'Isosceles means the third side repeats one of the two: it is either $4$ or $9$. Try $4, 4, 9$: then $4 + 4 = 8 < 9$, which fails the triangle inequality — impossible. So the sides must be $4, 9, 9$, giving perimeter $4 + 9 + 9 = 22$. The triangle inequality broke the tie, so the perimeter CAN be determined.',
    },
    {
      q: 'A triangle has integer side lengths, two of which are $6$ and $10$. Which of the following CANNOT be the third side?',
      fig: {
        view: [-1.2, -1, 11.2, 6.9],
        elems: [
          { t: 'seg', a: [0, 0], b: [10, 0] },
          { t: 'seg', a: [0, 0], b: [1.5, 5.81] },
          { t: 'seg', a: [10, 0], b: [1.5, 5.81], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [10, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [1.5, 5.81], label: 'C', dx: 0, dy: -12 },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [0.75, 2.91], text: '6', dx: -12, dy: 0 },
          { t: 'label', p: [5.75, 2.91], text: 'x', dx: 12, dy: -6 },
        ],
      },
      choices: ['$4$', '$5$', '$9$', '$15$'],
      answer: 0,
      solution: 'The window for the third side is $10 - 6 < x < 10 + 6$, that is, $4 < x < 16$. Test each choice: $x = 5$, $9$, and $15$ all fit inside. But $x = 4$ sits exactly ON the boundary: $4 + 6 = 10$ makes the figure flat, so $4$ cannot be the third side.',
    },
    {
      q: 'Two sides of a triangle measure $5$ and $12$. Which describes all possible values of the perimeter $p$?',
      choices: ['$24 \\le p \\le 34$', '$17 < p < 29$', '$12 < p < 34$', '$24 < p < 34$'],
      answer: 3,
      solution: 'The third side $c$ satisfies $12 - 5 < c < 12 + 5$, so $7 < c < 17$. The perimeter is $p = 5 + 12 + c = 17 + c$. Adding $17$ across the inequality: $24 < p < 34$. The endpoints stay excluded — $c$ can never actually equal $7$ or $17$, so $p$ never reaches $24$ or $34$.',
    },
    {
      q: 'A delivery drone flies straight from $A$ to $B$ ($8$ km), then straight from $B$ to $C$ ($5$ km). Which of these could be the straight-line distance from $A$ to $C$?',
      fig: {
        view: [-1.2, -1, 12.6, 6.1],
        elems: [
          { t: 'seg', a: [0, 0], b: [6.4, 4.8] },
          { t: 'seg', a: [6.4, 4.8], b: [11.1, 3.09] },
          { t: 'seg', a: [0, 0], b: [11.1, 3.09], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [6.4, 4.8], label: 'B', dx: 0, dy: -12 },
          { t: 'point', p: [11.1, 3.09], label: 'C', dx: 12, dy: 0 },
          { t: 'label', p: [3.2, 2.4], text: '8', dx: -12, dy: -4 },
          { t: 'label', p: [8.75, 3.95], text: '5', dx: 6, dy: -12 },
          { t: 'label', p: [5.55, 1.55], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$3$ km', '$13$ km', '$12.5$ km', '$14$ km'],
      answer: 2,
      solution: 'The distance $AC$ must satisfy $8 - 5 < AC < 8 + 5$, so $3 < AC < 13$. Both endpoints are impossible: $AC = 3$ or $AC = 13$ would need $A$, $B$, $C$ perfectly lined up, and $14$ is beyond the reach of the two legs entirely. Only $12.5$ km sits strictly inside the window.',
    },
  ],
}

const challenge = [
  {
    q: 'In triangle $ABC$, $\\angle A = 59^\\circ$ and $\\angle B = 61^\\circ$. Which side is the longest?',
    choices: ['$\\overline{BC}$', '$\\overline{AB}$', '$\\overline{AC}$', 'all three sides are equal'],
    answer: 2,
    solution: 'The third angle is $\\angle C = 180^\\circ - 59^\\circ - 61^\\circ = 60^\\circ$. The largest angle is $\\angle B = 61^\\circ$ — barely! The longest side faces it: $\\overline{AC}$. Even a $1^\\circ$ edge is enough to decide the ordering: $BC < AB < AC$.',
  },
  {
    q: 'For how many integers $n$ is the triangle with sides $13$, $14$, and $n$ acute?',
    choices: ['$13$', '$14$', '$15$', '$12$'],
    answer: 1,
    solution: 'Triangle inequality: $1 < n < 27$. If $n \\le 14$, the longest side is $14$: acute needs $196 < 169 + n^2$, so $n^2 > 27$, giving $n \\ge 6$ — that is $n = 6, \\ldots, 14$, nine values. If $n \\ge 15$, acute needs $n^2 < 169 + 196 = 365$, and since $19^2 = 361 < 365 < 400 = 20^2$, we get $n = 15, \\ldots, 19$, five values. Neither boundary gives a perfect square, so no right-triangle cases sneak in. Total: $9 + 5 = 14$.',
  },
  {
    q: 'For how many integers $x$ is the triangle with sides $5$, $12$, and $x$ obtuse?',
    choices: ['$5$', '$7$', '$6$', '$8$'],
    answer: 2,
    solution: 'Triangle inequality: $7 < x < 17$, so $x = 8, \\ldots, 16$. Case 1: $12$ is the longest side ($x \\le 12$): obtuse needs $144 > 25 + x^2$, so $x^2 < 119$, giving $x = 8, 9, 10$. Case 2: $x$ is the longest side ($x \\ge 13$): obtuse needs $x^2 > 169$; since $13^2 = 169$ exactly (right, not obtuse), we need $x = 14, 15, 16$. Total: $3 + 3 = 6$. Including $x = 13$ is the trap — that one is a perfect $5$-$12$-$13$ right triangle.',
  },
  {
    q: 'In triangle $ABC$, $AB = AC$ and $\\angle B = 65^\\circ$. Which statement correctly compares the sides?',
    choices: ['$BC < AB = AC$', '$AB = AC < BC$', '$AB < BC < AC$', '$BC = AB = AC$'],
    answer: 0,
    solution: 'Since $AB = AC$, the base angles are equal: $\\angle C = \\angle B = 65^\\circ$, so $\\angle A = 180^\\circ - 130^\\circ = 50^\\circ$. Side $\\overline{BC}$ faces the smallest angle ($50^\\circ$) while $\\overline{AB}$ and $\\overline{AC}$ face $65^\\circ$ angles. So $BC < AB = AC$. Equality of all three would need all angles equal to $60^\\circ$, which is not the case here.',
  },
  {
    q: 'Point $P$ lies strictly inside triangle $ABC$. Which comparison is always true?',
    choices: ['$PB + PC > AB + AC$', '$PB + PC = AB + AC$', '$PB + PC < AB + AC$', 'any of these can happen, depending on $P$'],
    answer: 2,
    solution: 'Extend $\\overline{BP}$ until it hits side $\\overline{AC}$ at a point $X$. Triangle inequality twice: in triangle $PXC$, $PC < PX + XC$, so $PB + PC < BP + PX + XC = BX + XC$. And in triangle $ABX$, $BX < AB + AX$, so $BX + XC < AB + AX + XC = AB + AC$. Chaining them: $PB + PC < AB + AC$, always. A point tucked inside can never beat the two sides that "fence it in" from $A$.',
  },
  {
    q: 'Quadrilateral $ABCD$ has $AB = 3$, $BC = 4$, $CD = 5$, and $DA = 6$. How many integer values are possible for the diagonal $AC$?',
    fig: {
      view: [-1.2, -1, 6.6, 7],
      elems: [
        { t: 'poly', pts: [[0, 0], [3, 0], [5.4, 3.2], [1.18, 5.88]], fill: false },
        { t: 'seg', a: [0, 0], b: [5.4, 3.2], dash: true },
        { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
        { t: 'point', p: [3, 0], label: 'B', dx: 10, dy: 8 },
        { t: 'point', p: [5.4, 3.2], label: 'C', dx: 12, dy: 0 },
        { t: 'point', p: [1.18, 5.88], label: 'D', dx: -6, dy: -10 },
        { t: 'label', p: [1.5, 0], text: '3', dx: 0, dy: 14 },
        { t: 'label', p: [4.2, 1.6], text: '4', dx: 14, dy: 4 },
        { t: 'label', p: [3.29, 4.54], text: '5', dx: 12, dy: -8 },
        { t: 'label', p: [0.59, 2.94], text: '6', dx: -12, dy: 0 },
        { t: 'label', p: [2.7, 1.6], text: 'd', dx: -4, dy: -12 },
      ],
    },
    choices: ['$4$', '$5$', '$6$', '$7$'],
    answer: 1,
    solution: 'The diagonal $\\overline{AC}$ belongs to two triangles at once. In triangle $ABC$ with sides $3$ and $4$: $1 < AC < 7$. In triangle $ACD$ with sides $5$ and $6$: $1 < AC < 11$. Both windows must hold, so $1 < AC < 7$, giving the integers $2, 3, 4, 5, 6$ — five values.',
  },
  {
    q: 'A triangle has sides $2.5$, $6$, and $6.5$. Is it acute, right, or obtuse?',
    choices: ['acute', 'obtuse', 'right', 'the sides do not form a triangle'],
    answer: 2,
    solution: 'Test the longest side: $6.5^2 = 42.25$ and $2.5^2 + 6^2 = 6.25 + 36 = 42.25$. Exactly equal, so the triangle is right. A slick shortcut: doubling every side gives $5$-$12$-$13$, a famous Pythagorean triple, and scaling never changes a triangle\'s angles.',
  },
  {
    q: 'What is the smallest integer $n$ for which segments of lengths $n$, $n + 3$, and $n + 6$ form a triangle?',
    choices: ['$3$', '$4$', '$7$', '$10$'],
    answer: 1,
    solution: 'The binding check is the two shortest sides against the longest: $n + (n + 3) > n + 6$, which simplifies to $n > 3$. At $n = 3$ the sides are $3, 6, 9$ and $3 + 6 = 9$ lies flat — a degenerate case, not a triangle. The smallest integer strictly beyond $3$ is $n = 4$, giving the honest triangle $4, 7, 10$.',
  },
  {
    q: 'Triangle $PQR$ has $PQ = 7$, $QR = 8$, and $PR = 9$. Which statement is true?',
    choices: [
      'The triangle is acute, and its largest angle is at $Q$',
      'The triangle is acute, and its largest angle is at $R$',
      'The triangle is right, with the right angle at $Q$',
      'The triangle is obtuse, with the obtuse angle at $Q$',
    ],
    answer: 0,
    solution: 'Classify with the longest side, $PR = 9$: compare $81$ with $7^2 + 8^2 = 113$. Since $81 < 113$, the triangle is acute. The largest angle faces the longest side $\\overline{PR}$, and the vertex not on $\\overline{PR}$ is $Q$. So: acute, largest angle at $Q$.',
  },
  {
    q: 'A triangle has integer side lengths, and two of its sides measure $4$ and $9$. What is the smallest possible perimeter?',
    choices: ['$18$', '$14$', '$20$', '$19$'],
    answer: 3,
    solution: 'The third side $c$ satisfies $9 - 4 < c < 9 + 4$, so $5 < c < 13$. The smallest integer allowed is $c = 6$ — not $c = 5$, because $4 + 5 = 9$ collapses flat. Smallest perimeter: $4 + 9 + 6 = 19$.',
  },
  {
    q: 'In triangle $ABC$, we know $BC > AB$. Which of the following MUST be true?',
    choices: ['$\\angle C > \\angle A$', '$\\angle B$ is the largest angle of the triangle', '$\\overline{AC}$ is the longest side', '$\\angle A > \\angle C$'],
    answer: 3,
    solution: 'Compare the two sides through their opposite angles: $\\overline{BC}$ faces $\\angle A$ and $\\overline{AB}$ faces $\\angle C$. A longer side faces a bigger angle, so $BC > AB$ forces $\\angle A > \\angle C$. Nothing is known about $\\overline{AC}$ or $\\angle B$ — they could be large or small without breaking the given inequality.',
  },
  {
    q: 'For how many integers $x$ do BOTH triples $(3, 7, x)$ and $(5, 9, x)$ form triangles?',
    choices: ['$4$', '$6$', '$9$', '$5$'],
    answer: 3,
    solution: 'Each triple gives a window for $x$. From $(3, 7, x)$: $4 < x < 10$, so $x \\in \\{5, 6, 7, 8, 9\\}$. From $(5, 9, x)$: $4 < x < 14$, so $x \\in \\{5, 6, \\ldots, 13\\}$. Both must hold, so take the overlap: $x = 5, 6, 7, 8, 9$ — five integers. Note how the first window did all the limiting; the answer $9$ counts the second window alone.',
  },
]

const worksheet = [
  {
    q: 'In triangle $ABC$, $\\angle A = 45^\\circ$, $\\angle B = 60^\\circ$, and $\\angle C = 75^\\circ$. List the sides in order from shortest to longest.',
    fig: {
      view: [-0.9, -0.8, 4.9, 3.4],
      elems: [
        { t: 'poly', pts: [[0, 0], [4, 0], [2.54, 2.54]], fill: false },
        { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
        { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
        { t: 'point', p: [2.54, 2.54], label: 'C', dx: 4, dy: -10 },
        { t: 'angle', at: [0, 0], from: [4, 0], to: [2.54, 2.54], r: 0.85, label: '45' },
        { t: 'angle', at: [4, 0], from: [0, 0], to: [2.54, 2.54], r: 0.7, label: '60' },
        { t: 'angle', at: [2.54, 2.54], from: [4, 0], to: [0, 0], r: 0.5, label: '75' },
      ],
    },
    answer: '$BC < AC < AB$',
    solution: 'Each side takes its rank from the angle it faces. $\\overline{BC}$ faces $\\angle A = 45^\\circ$ (smallest), $\\overline{AC}$ faces $\\angle B = 60^\\circ$ (middle), and $\\overline{AB}$ faces $\\angle C = 75^\\circ$ (largest). So $BC < AC < AB$.',
  },
  {
    q: 'A triangle has sides $9$, $12$, and $15$. Classify it as acute, right, or obtuse, and explain your test.',
    answer: 'Right, because $15^2 = 9^2 + 12^2$',
    solution: 'Always test the longest side: $15^2 = 225$, while $9^2 + 12^2 = 81 + 144 = 225$. The squares balance exactly, so the angle opposite the $15$ is exactly $90^\\circ$ and the triangle is right. (It is the $3$-$4$-$5$ triangle scaled by $3$.)',
  },
  {
    q: 'Two sides of a triangle have lengths $6$ and $11$. Write an inequality describing every possible length $c$ of the third side.',
    answer: '$5 < c < 17$',
    solution: 'The third side must exceed the difference of the given sides and stay below their sum: $11 - 6 < c < 11 + 6$, so $5 < c < 17$. Both inequalities are strict: at $c = 5$ or $c = 17$ the three lengths lie flat on a line and enclose nothing.',
  },
  {
    q: 'Two sides of a triangle have lengths $8$ and $15$. How many integer lengths are possible for the third side?',
    answer: '$15$ integer lengths',
    solution: 'The window is $15 - 8 < c < 15 + 8$, so $7 < c < 23$. The integers strictly inside run from $8$ to $22$, and there are $22 - 8 + 1 = 15$ of them. Remember the endpoints $7$ and $23$ are excluded — each would make a flat, zero-area figure.',
  },
  {
    q: 'Can segments of lengths $8$, $9$, and $17$ form a triangle? Explain.',
    answer: 'No — $8 + 9 = 17$, so the figure is flat (degenerate)',
    solution: 'Check the two shorter sides against the longest: $8 + 9 = 17$, which merely EQUALS the third side. The two short segments stretch flat along the long one, meeting its endpoints with no room to lift off the line. A genuine triangle needs a strict inequality, so these lengths fail.',
  },
  {
    q: 'Triangle $DEF$ has $DE = 12$, $EF = 9$, and $FD = 10$. Which angle is the largest and which is the smallest?',
    answer: 'Largest: $\\angle F$; smallest: $\\angle D$',
    solution: 'Match angles to opposite sides. The longest side $DE = 12$ faces $\\angle F$, so $\\angle F$ is the largest angle. The shortest side $EF = 9$ faces $\\angle D$, so $\\angle D$ is the smallest. (The middle angle is $\\angle E$, facing $FD = 10$.)',
  },
  {
    q: 'Find ALL integers $n$ for which the triangle with sides $7$, $10$, and $n$ is obtuse.',
    answer: '$n = 4, 5, 6, 7, 13, 14, 15, 16$ (eight values)',
    solution: 'Triangle inequality first: $3 < n < 17$. Case 1: $10$ is the longest side ($n \\le 10$): obtuse needs $100 > 49 + n^2$, so $n^2 < 51$, giving $n = 4, 5, 6, 7$. Case 2: $n$ is the longest side ($n \\ge 11$): obtuse needs $n^2 > 49 + 100 = 149$; since $12^2 = 144 < 149 < 169 = 13^2$, we get $n = 13, 14, 15, 16$. In between ($n = 8, \\ldots, 12$) the triangle is acute or nearly right but never obtuse. Answer: the eight values $4, 5, 6, 7, 13, 14, 15, 16$.',
  },
  {
    q: 'Segments of lengths $x$, $2x$, and $15$ form a triangle. Find all possible values of $x$.',
    answer: '$5 < x < 15$',
    solution: 'Write all three triangle inequalities. $x + 2x > 15$ gives $x > 5$. $x + 15 > 2x$ gives $x < 15$. The last check, $2x + 15 > x$, is always true for positive $x$. So the triangle exists exactly when $5 < x < 15$ — both endpoints excluded, since each produces a flat figure.',
  },
  {
    q: 'A farmer walks from the village $V$ to the well $W$ ($350$ m), then from the well to the barn $B$ ($200$ m), every day. The well is not on the straight path from village to barn. If a straight path from $V$ to $B$ were built, what is the most distance the farmer could possibly save?',
    fig: {
      view: [-1, -0.8, 10.5, 5.4],
      elems: [
        { t: 'seg', a: [0, 0], b: [5.6, 4.2] },
        { t: 'seg', a: [5.6, 4.2], b: [9.23, 2.51] },
        { t: 'seg', a: [0, 0], b: [9.23, 2.51], dash: true },
        { t: 'point', p: [0, 0], label: 'V', dx: -10, dy: 8 },
        { t: 'point', p: [5.6, 4.2], label: 'W', dx: 0, dy: -12 },
        { t: 'point', p: [9.23, 2.51], label: 'B', dx: 12, dy: 4 },
        { t: 'label', p: [2.8, 2.1], text: '350 m', dx: -20, dy: -4 },
        { t: 'label', p: [7.42, 3.36], text: '200 m', dx: 12, dy: -8 },
        { t: 'label', p: [4.62, 1.26], text: '?', dx: 0, dy: 14 },
      ],
    },
    answer: 'Strictly less than $400$ m',
    solution: 'The current route is $350 + 200 = 550$ m. The straight distance $VB$ satisfies $350 - 200 < VB < 350 + 200$, so $150 < VB < 550$. The savings are $550 - VB$, which is therefore less than $550 - 150 = 400$ m — and the bound is strict, because $VB = 150$ would require the three points to be collinear, which we are told they are not. So the farmer saves less than $400$ m no matter where the well sits.',
  },
  {
    q: 'Find ALL integers $n$ for which the triangle with sides $n$, $n + 4$, and $20$ is a right triangle.',
    answer: '$n = 12$ and $n = 48$',
    solution: 'Two cases, depending on which side is the hypotenuse. Case 1: $20$ is the hypotenuse: $n^2 + (n+4)^2 = 400$, so $2n^2 + 8n + 16 = 400$, giving $n^2 + 4n - 192 = 0$, which factors as $(n - 12)(n + 16) = 0$, so $n = 12$ — the triangle $12$, $16$, $20$ (a $3$-$4$-$5$ scaled by $4$). Case 2: $n + 4$ is the hypotenuse: $(n+4)^2 = n^2 + 400$, so $8n + 16 = 400$ and $n = 48$ — the triangle $48$, $52$, $20$; check: $48^2 + 20^2 = 2304 + 400 = 2704 = 52^2$. ✓ ($n$ itself can never be the hypotenuse, since $n < n + 4$.) Both triangles satisfy the triangle inequality, so the answers are $n = 12$ and $n = 48$.',
  },
]

export default {
  id: 'intro-geometry-ch10',
  book: 'intro-geometry',
  number: 10,
  title: 'Geometric Inequalities',
  intro:
    'Not every geometry question asks for an exact value — some ask which side is longest, whether an angle can pass $90^\\circ$, or whether three sticks can form a triangle at all. This chapter builds your toolkit for comparing: matching big angles with big sides, running the Pythagorean check on any triangle, and mastering the most famous inequality in geometry — that a detour is never shorter than the straight path.',
  sections: [s101, s102, s103],
  challenge,
  worksheet,
}
