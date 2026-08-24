// Introduction to Geometry — Chapter 18: Introduction to Trigonometry
// All problems, explanations, and examples are original MathQuest content.

const s181 = {
  id: '18.1',
  title: 'Trigonometry and Right Triangles',
  learn: {
    concepts: [
      {
        heading: 'Three ratios with big futures',
        body: 'Pick an acute angle $\\theta$ in a right triangle. The side across from $\\theta$ is the opposite side, the leg touching $\\theta$ is the adjacent side, and the longest side is the hypotenuse. Trigonometry names three ratios: $\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}$, $\\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$, and $\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$. The memory chant SOH-CAH-TOA packs all three into one word.',
      },
      {
        heading: 'Why the angle is all that matters',
        body: 'Two right triangles that share an acute angle $\\theta$ are similar by AA, so their sides are proportional — and a ratio of sides is untouched by scaling! A right triangle with a $30^\\circ$ angle can be pocket-sized or planet-sized, but opposite $\\div$ hypotenuse comes out the same either way. That is why $\\sin\\theta$, $\\cos\\theta$, and $\\tan\\theta$ depend only on $\\theta$, not on which triangle you drew. Similarity is the engine under trigonometry\'s hood.',
      },
      {
        heading: 'Exact values from the special triangles',
        body: 'Our old friends hand us exact values. A $45$-$45$-$90$ triangle with legs $1$ has hypotenuse $\\sqrt{2}$, so $\\sin 45^\\circ = \\cos 45^\\circ = \\frac{\\sqrt{2}}{2}$ and $\\tan 45^\\circ = 1$. Half an equilateral triangle has sides $1$, $\\sqrt{3}$, $2$, giving $\\sin 30^\\circ = \\cos 60^\\circ = \\frac{1}{2}$, $\\sin 60^\\circ = \\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$, $\\tan 30^\\circ = \\frac{\\sqrt{3}}{3}$, and $\\tan 60^\\circ = \\sqrt{3}$. Notice the pattern: $\\sin\\theta = \\cos(90^\\circ - \\theta)$, because one angle\'s opposite side is the other\'s adjacent side.',
      },
      {
        heading: 'The ratios are teammates',
        body: 'The three ratios are linked. Dividing opposite by adjacent is the same as dividing $\\frac{\\text{opp}}{\\text{hyp}}$ by $\\frac{\\text{adj}}{\\text{hyp}}$, so $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$. And the Pythagorean Theorem in disguise: $(\\text{opp})^2 + (\\text{adj})^2 = (\\text{hyp})^2$, so dividing everything by $(\\text{hyp})^2$ gives $\\sin^2\\theta + \\cos^2\\theta = 1$ for every angle $\\theta$. Know one ratio, and the identities hand you the others.',
      },
    ],
    examples: [
      {
        problem: 'In right triangle $ABC$ shown, the right angle is at $B$, $AB = 4$, $BC = 3$, and $AC = 5$. Find $\\sin A$, $\\cos A$, and $\\tan A$.',
        steps: [
          'Sort the sides from the viewpoint of angle $A$: the side across from $A$ is $BC = 3$ (opposite), the leg touching $A$ is $AB = 4$ (adjacent), and the hypotenuse is $AC = 5$.',
          'Now apply SOH-CAH-TOA: $\\sin A = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{3}{5}$ and $\\cos A = \\frac{\\text{adj}}{\\text{hyp}} = \\frac{4}{5}$.',
          'Finally, $\\tan A = \\frac{\\text{opp}}{\\text{adj}} = \\frac{3}{4}$. As a check, $\\frac{\\sin A}{\\cos A} = \\frac{3/5}{4/5} = \\frac{3}{4} = \\tan A$, and $\\left(\\frac{3}{5}\\right)^2 + \\left(\\frac{4}{5}\\right)^2 = \\frac{9 + 16}{25} = 1$. Both identities agree!',
        ],
        answer: '$\\sin A = \\frac{3}{5}$, $\\cos A = \\frac{4}{5}$, $\\tan A = \\frac{3}{4}$',
        fig: {
          view: [-1, -1.5, 6, 4.5],
          elems: [
            { t: 'poly', pts: [[0, 0], [4, 0], [4, 3]], fill: false },
            { t: 'right', at: [4, 0], from: [0, 0], to: [4, 3] },
            { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
            { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 10 },
            { t: 'point', p: [4, 3], label: 'C', dx: 10, dy: -8 },
            { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
            { t: 'label', p: [4, 1.5], text: '3', dx: 12, dy: 0 },
            { t: 'label', p: [2, 1.5], text: '5', dx: -8, dy: -8 },
          ],
        },
      },
      {
        problem: 'A $10$-meter ladder leans against a wall, making a $60^\\circ$ angle with the flat ground. Exactly how high up the wall does the ladder reach?',
        steps: [
          'Draw the right triangle: the ladder is the hypotenuse ($10$), the wall height $h$ is the side opposite the $60^\\circ$ angle, and the ground is adjacent.',
          'Opposite and hypotenuse — that is a sine job: $\\sin 60^\\circ = \\frac{h}{10}$.',
          'The special triangle tells us $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$, so $h = 10 \\cdot \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}$ meters — about $8.7$ m, which sensibly is less than the $10$ m ladder.',
        ],
        answer: 'The ladder reaches $5\\sqrt{3}$ meters up the wall',
        fig: {
          view: [-1.5, -1.5, 7, 10.5],
          elems: [
            { t: 'poly', pts: [[0, 0], [5, 0], [5, 8.66]], fill: false },
            { t: 'right', at: [5, 0], from: [0, 0], to: [5, 8.66] },
            { t: 'angle', at: [0, 0], from: [5, 0], to: [5, 8.66], r: 1.1, label: '60' },
            { t: 'label', p: [2.5, 4.33], text: '10', dx: -10, dy: -8 },
            { t: 'label', p: [5, 4.33], text: '?', dx: 12, dy: 0 },
          ],
        },
      },
      {
        problem: 'Nadia flies a kite on a taut $10$-meter string. The angle of elevation from her hand to the kite is $37^\\circ$. Given $\\sin 37^\\circ \\approx 0.6$ and $\\cos 37^\\circ \\approx 0.8$, how high above her hand is the kite, and how far away is it horizontally?',
        steps: [
          'An angle of elevation is measured upward from the horizontal (an angle of depression would be measured downward). Here the string is the hypotenuse of a right triangle.',
          'The height is opposite the $37^\\circ$ angle: height $= 10 \\sin 37^\\circ \\approx 10 \\times 0.6 = 6$ meters.',
          'The horizontal distance is adjacent: distance $= 10 \\cos 37^\\circ \\approx 10 \\times 0.8 = 8$ meters. Check with the Pythagorean Theorem: $6^2 + 8^2 = 100 = 10^2$. A perfect $6$-$8$-$10$ triangle!',
        ],
        answer: 'About $6$ meters high and $8$ meters away horizontally',
        fig: {
          view: [-1, -1.5, 9.5, 7.5],
          elems: [
            { t: 'poly', pts: [[0, 0], [8, 0], [8, 6]], fill: false },
            { t: 'right', at: [8, 0], from: [0, 0], to: [8, 6] },
            { t: 'angle', at: [0, 0], from: [8, 0], to: [8, 6], r: 1.3, label: '37' },
            { t: 'label', p: [4, 3], text: '10', dx: -8, dy: -10 },
            { t: 'label', p: [8, 3], text: '?', dx: 12, dy: 0 },
            { t: 'point', p: [8, 6], label: 'kite', dx: 14, dy: -8 },
          ],
        },
      },
    ],
  },
  problems: [
    {
      q: 'In the right triangle shown, the right angle is at $B$, $AB = 8$, $BC = 6$, and $AC = 10$. What is $\\sin A$?',
      fig: {
        view: [-1, -1.5, 10, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 6]], fill: false },
          { t: 'right', at: [8, 0], from: [0, 0], to: [8, 6] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [8, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [8, 6], label: 'C', dx: 10, dy: -8 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [8, 3], text: '6', dx: 12, dy: 0 },
          { t: 'label', p: [4, 3], text: '10', dx: -10, dy: -8 },
        ],
      },
      choices: ['$\\frac{4}{5}$', '$\\frac{3}{4}$', '$\\frac{3}{5}$', '$\\frac{4}{3}$'],
      answer: 2,
      solution: 'From the viewpoint of angle $A$, the opposite side is $BC = 6$ and the hypotenuse is $AC = 10$, so $\\sin A = \\frac{6}{10} = \\frac{3}{5}$. The ratio $\\frac{4}{5}$ is $\\cos A$ (adjacent over hypotenuse) and $\\frac{3}{4}$ is $\\tan A$ — always sort out which side is opposite before you write the fraction.',
    },
    {
      q: 'What is the exact value of $\\cos 30^\\circ$?',
      fig: {
        view: [-0.4, -0.5, 2.4, 1.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [1.732, 0], [1.732, 1]], fill: false },
          { t: 'right', at: [1.732, 0], from: [0, 0], to: [1.732, 1] },
          { t: 'angle', at: [0, 0], from: [1.732, 0], to: [1.732, 1], r: 0.5, label: '30' },
          { t: 'label', p: [0.866, 0.5], text: '2', dx: -6, dy: -8 },
          { t: 'label', p: [1.732, 0.5], text: '1', dx: 10, dy: 0 },
        ],
      },
      choices: ['$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{3}}{3}$'],
      answer: 0,
      solution: 'In the $30$-$60$-$90$ triangle with hypotenuse $2$, the side opposite $30^\\circ$ is $1$, so the adjacent leg is $\\sqrt{2^2 - 1^2} = \\sqrt{3}$. Then $\\cos 30^\\circ = \\frac{\\text{adj}}{\\text{hyp}} = \\frac{\\sqrt{3}}{2}$. The value $\\frac{1}{2}$ is $\\sin 30^\\circ$ — the sine and cosine of $30^\\circ$ are favorite candidates for a swap, so anchor them to the picture.',
    },
    {
      q: 'For an acute angle $\\theta$ in a right triangle, $\\tan\\theta$ equals which ratio of sides?',
      choices: [
        '$\\frac{\\text{opposite}}{\\text{hypotenuse}}$',
        '$\\frac{\\text{opposite}}{\\text{adjacent}}$',
        '$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$',
        '$\\frac{\\text{adjacent}}{\\text{opposite}}$',
      ],
      answer: 1,
      solution: 'The chant SOH-CAH-TOA ends with TOA: Tangent is Opposite over Adjacent. Opposite over hypotenuse is $\\sin\\theta$, adjacent over hypotenuse is $\\cos\\theta$, and adjacent over opposite is upside-down — that is $\\frac{1}{\\tan\\theta}$.',
    },
    {
      q: 'In the right triangle shown, the hypotenuse is $14$ and one acute angle is $30^\\circ$. What is the length of the side opposite the $30^\\circ$ angle?',
      fig: {
        view: [-1.5, -1.5, 14.5, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [12.124, 0], [12.124, 7]], fill: false },
          { t: 'right', at: [12.124, 0], from: [0, 0], to: [12.124, 7] },
          { t: 'angle', at: [0, 0], from: [12.124, 0], to: [12.124, 7], r: 2, label: '30' },
          { t: 'label', p: [6.06, 3.5], text: '14', dx: -8, dy: -10 },
          { t: 'label', p: [12.124, 3.5], text: '?', dx: 12, dy: 0 },
        ],
      },
      choices: ['$14$', '$7\\sqrt{3}$', '$12$', '$7$'],
      answer: 3,
      solution: 'Opposite and hypotenuse call for sine: $\\sin 30^\\circ = \\frac{\\text{opp}}{14}$, so opp $= 14 \\sin 30^\\circ = 14 \\cdot \\frac{1}{2} = 7$. There is a slogan hiding here: the side opposite $30^\\circ$ is always half the hypotenuse. The value $7\\sqrt{3}$ is $14 \\cos 30^\\circ$ — that is the other leg.',
    },
    {
      q: 'A straight ramp is $20$ meters long and makes a $37^\\circ$ angle with the ground. Given $\\sin 37^\\circ \\approx 0.6$ and $\\cos 37^\\circ \\approx 0.8$, about how many meters does the top of the ramp rise above the ground?',
      fig: {
        view: [-2, -2, 18, 14],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [16, 12]], fill: false },
          { t: 'right', at: [16, 0], from: [0, 0], to: [16, 12] },
          { t: 'angle', at: [0, 0], from: [16, 0], to: [16, 12], r: 2.6, label: '37' },
          { t: 'label', p: [8, 6], text: '20', dx: -10, dy: -10 },
          { t: 'label', p: [16, 6], text: '?', dx: 12, dy: 0 },
        ],
      },
      choices: ['$16$', '$12$', '$15$', '$10$'],
      answer: 1,
      solution: 'The rise is opposite the $37^\\circ$ angle and the ramp is the hypotenuse, so rise $= 20 \\sin 37^\\circ \\approx 20 \\times 0.6 = 12$ meters. The choice $16$ comes from using $\\cos 37^\\circ \\approx 0.8$ instead — but $20 \\times 0.8 = 16$ is the horizontal run along the ground, not the rise.',
    },
    {
      q: 'A $45$-$45$-$90$ triangle has legs of length $9$. Using trigonometry (or the special triangle), what is the hypotenuse?',
      fig: {
        view: [-1.5, -1.5, 11, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [9, 9]], fill: false },
          { t: 'right', at: [9, 0], from: [0, 0], to: [9, 9] },
          { t: 'angle', at: [0, 0], from: [9, 0], to: [9, 9], r: 1.7, label: '45' },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [9, 4.5], text: '9', dx: 12, dy: 0 },
          { t: 'label', p: [4.5, 4.5], text: '?', dx: -8, dy: -10 },
        ],
      },
      choices: ['$18$', '$9$', '$9\\sqrt{2}$', '$9\\sqrt{3}$'],
      answer: 2,
      solution: 'Using cosine: $\\cos 45^\\circ = \\frac{9}{\\text{hyp}}$, so hyp $= \\frac{9}{\\cos 45^\\circ} = \\frac{9}{\\sqrt{2}/2} = 9\\sqrt{2}$. Or remember the special triangle: a $45$-$45$-$90$ hypotenuse is always leg $\\times \\sqrt{2}$. Both roads give $9\\sqrt{2} \\approx 12.7$, comfortably longer than either leg but shorter than their sum.',
    },
    {
      q: 'In the right triangle shown, the leg adjacent to angle $A$ is $8$ and the hypotenuse is $17$. What is $\\sin A$?',
      fig: {
        view: [-1.5, -2, 11, 17],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 15]], fill: false },
          { t: 'right', at: [8, 0], from: [0, 0], to: [8, 15] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [4, 7.5], text: '17', dx: -12, dy: 0 },
        ],
      },
      choices: ['$\\frac{15}{17}$', '$\\frac{8}{15}$', '$\\frac{15}{8}$', '$\\frac{9}{17}$'],
      answer: 0,
      solution: 'First find the missing opposite leg with the Pythagorean Theorem: $\\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$. Then $\\sin A = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{15}{17}$. (The triple $8$-$15$-$17$ is worth recognizing on sight!) Note that $\\frac{9}{17}$ comes from subtracting $17 - 8$, but side lengths combine by the Pythagorean Theorem, never by plain subtraction.',
    },
    {
      q: 'The foot of a ladder sits $4$ meters from a wall, and the ladder makes a $60^\\circ$ angle with the ground. Exactly how high on the wall does the ladder touch?',
      fig: {
        view: [-1.5, -1.5, 6.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [4, 6.928]], fill: false },
          { t: 'right', at: [4, 0], from: [0, 0], to: [4, 6.928] },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [4, 6.928], r: 1.1, label: '60' },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [4, 3.46], text: '?', dx: 12, dy: 0 },
        ],
      },
      choices: ['$\\frac{4\\sqrt{3}}{3}$', '$8$', '$2\\sqrt{3}$', '$4\\sqrt{3}$'],
      answer: 3,
      solution: 'The height is opposite the $60^\\circ$ angle and the $4$ m is adjacent — opposite over adjacent means tangent: height $= 4 \\tan 60^\\circ = 4\\sqrt{3}$ meters. The choice $\\frac{4\\sqrt{3}}{3}$ is $4 \\tan 30^\\circ$, which would apply if the ladder made a $30^\\circ$ angle instead, and $8$ is the length of the ladder itself ($4 \\div \\cos 60^\\circ$), not the height.',
    },
    {
      q: 'Angle $A$ is acute and $\\sin A = \\frac{5}{13}$. What is $\\tan A$?',
      fig: {
        view: [-1.5, -1.5, 15, 7],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 5]], fill: false },
          { t: 'right', at: [12, 0], from: [0, 0], to: [12, 5] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'label', p: [12, 2.5], text: '5', dx: 12, dy: 0 },
          { t: 'label', p: [6, 2.5], text: '13', dx: -8, dy: -10 },
        ],
      },
      choices: ['$\\frac{12}{5}$', '$\\frac{5}{12}$', '$\\frac{5}{13}$', '$\\frac{12}{13}$'],
      answer: 1,
      solution: 'Sketch a right triangle with opposite $5$ and hypotenuse $13$. The adjacent leg is $\\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$, so $\\tan A = \\frac{\\text{opp}}{\\text{adj}} = \\frac{5}{12}$. You could also use identities: $\\cos A = \\frac{12}{13}$ from $\\sin^2 A + \\cos^2 A = 1$, then $\\tan A = \\frac{\\sin A}{\\cos A} = \\frac{5/13}{12/13} = \\frac{5}{12}$. Watch out for $\\frac{12}{5}$ — that is the ratio flipped upside down.',
    },
    {
      q: 'Without knowing the value of $\\sin 40^\\circ$ or $\\cos 40^\\circ$ individually, compute $\\sin^2 40^\\circ + \\cos^2 40^\\circ + \\sin 30^\\circ$ exactly.',
      choices: ['$\\frac{3}{2}$', '$1$', '$2$', '$\\frac{5}{4}$'],
      answer: 0,
      solution: 'The identity $\\sin^2\\theta + \\cos^2\\theta = 1$ holds for every angle — it is just the Pythagorean Theorem divided by the hypotenuse squared. So $\\sin^2 40^\\circ + \\cos^2 40^\\circ = 1$ even though we cannot compute either piece alone, and adding $\\sin 30^\\circ = \\frac{1}{2}$ gives $\\frac{3}{2}$. Identities let us be certain about quantities we could never look up.',
    },
  ],
}

const s182 = {
  id: '18.2',
  title: 'Not Just For Right Triangles',
  learn: {
    concepts: [
      {
        heading: 'The unit circle takes over',
        body: 'Right triangles only offer angles between $0^\\circ$ and $90^\\circ$, so we upgrade the definition. Draw a circle of radius $1$ centered at the origin, and rotate a radius counterclockwise from the positive $x$-axis by the angle $\\theta$. The point where the radius meets the circle is declared to be $(\\cos\\theta, \\sin\\theta)$: cosine is the $x$-coordinate, sine is the $y$-coordinate. For acute $\\theta$ this matches the old opposite-and-adjacent definition exactly (the radius is a hypotenuse of length $1$), but now $\\theta$ can be $90^\\circ$, $137^\\circ$, or anything at all.',
      },
      {
        heading: 'Obtuse angles and their mirror partners',
        body: 'An obtuse angle lands its point in the second quadrant, where $x$ is negative and $y$ is positive. So an obtuse angle has a negative cosine but a positive sine. Better yet, the points for $\\theta$ and $180^\\circ - \\theta$ are mirror images across the $y$-axis: same height, opposite $x$. That gives two golden formulas: $\\sin(180^\\circ - \\theta) = \\sin\\theta$ and $\\cos(180^\\circ - \\theta) = -\\cos\\theta$.',
      },
      {
        heading: 'The expanded table of exact values',
        body: 'Straight from the circle: at $90^\\circ$ the point is $(0, 1)$, so $\\cos 90^\\circ = 0$ and $\\sin 90^\\circ = 1$; at $180^\\circ$ the point is $(-1, 0)$. The mirror rule fills in the rest: $\\sin 120^\\circ = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$ and $\\cos 120^\\circ = -\\cos 60^\\circ = -\\frac{1}{2}$; likewise $\\sin 135^\\circ = \\frac{\\sqrt{2}}{2}$, $\\cos 135^\\circ = -\\frac{\\sqrt{2}}{2}$, $\\sin 150^\\circ = \\frac{1}{2}$, and $\\cos 150^\\circ = -\\frac{\\sqrt{3}}{2}$. Every obtuse value is a familiar acute value wearing a sign.',
      },
      {
        heading: 'A better area formula',
        body: 'Take a triangle with sides $a$ and $b$ meeting at angle $C$. Drop a height from the end of side $b$ to the line of side $a$: that height is $b\\sin C$. So the area is $\\frac{1}{2} \\cdot \\text{base} \\cdot \\text{height} = \\frac{1}{2}ab\\sin C$ — half the product of two sides times the sine of the angle between them. It even works when $C$ is obtuse, because $\\sin C$ is still positive there. No more hunting for heights!',
      },
    ],
    examples: [
      {
        problem: 'Use the unit circle to find $\\cos 135^\\circ$ and $\\sin 135^\\circ$ exactly.',
        steps: [
          'Rotate a radius $135^\\circ$ counterclockwise from the positive $x$-axis. That is $45^\\circ$ past straight up, landing in the second quadrant.',
          'The point is the mirror image of the $45^\\circ$ point $\\left(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}\\right)$ across the $y$-axis: same height, negated $x$.',
          'So the point is $\\left(-\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}\\right)$, which reads off as $\\cos 135^\\circ = -\\frac{\\sqrt{2}}{2}$ and $\\sin 135^\\circ = \\frac{\\sqrt{2}}{2}$.',
        ],
        answer: '$\\cos 135^\\circ = -\\frac{\\sqrt{2}}{2}$ and $\\sin 135^\\circ = \\frac{\\sqrt{2}}{2}$',
        fig: {
          view: [-1.7, -1.7, 1.7, 1.7],
          grid: true,
          elems: [
            { t: 'circle', c: [0, 0], r: 1 },
            { t: 'seg', a: [0, 0], b: [-0.707, 0.707] },
            { t: 'seg', a: [0, 0], b: [1, 0] },
            { t: 'angle', at: [0, 0], from: [1, 0], to: [-0.707, 0.707], r: 0.3, label: '135' },
            { t: 'point', p: [-0.707, 0.707], label: 'P', dx: -10, dy: -10 },
          ],
        },
      },
      {
        problem: 'Find $\\sin 150^\\circ$ and $\\cos 150^\\circ$ exactly.',
        steps: [
          'Since $150^\\circ = 180^\\circ - 30^\\circ$, its unit-circle point mirrors the $30^\\circ$ point $\\left(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$ across the $y$-axis.',
          'The mirror keeps the height and flips the $x$-coordinate, giving the point $\\left(-\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$.',
          'So $\\sin 150^\\circ = \\sin 30^\\circ = \\frac{1}{2}$ and $\\cos 150^\\circ = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$.',
        ],
        answer: '$\\sin 150^\\circ = \\frac{1}{2}$ and $\\cos 150^\\circ = -\\frac{\\sqrt{3}}{2}$',
        fig: {
          view: [-1.7, -1.7, 1.7, 1.7],
          grid: true,
          elems: [
            { t: 'circle', c: [0, 0], r: 1 },
            { t: 'seg', a: [0, 0], b: [-0.866, 0.5] },
            { t: 'seg', a: [0, 0], b: [0.866, 0.5], dash: true },
            { t: 'seg', a: [0, 0], b: [1, 0] },
            { t: 'angle', at: [0, 0], from: [1, 0], to: [-0.866, 0.5], r: 0.3, label: '150' },
            { t: 'point', p: [-0.866, 0.5], label: 'P', dx: -10, dy: -10 },
            { t: 'point', p: [0.866, 0.5], label: 'Q', dx: 12, dy: -8 },
          ],
        },
      },
      {
        problem: 'Two sides of a triangle have lengths $8$ and $5$, and the angle between them measures $60^\\circ$. Find the area of the triangle exactly.',
        steps: [
          'The formula $\\text{Area} = \\frac{1}{2}ab\\sin C$ wants exactly what we have: two sides and the included angle.',
          'To see why it works here, drop a height from the top vertex to the base of length $8$: the height is $5\\sin 60^\\circ = \\frac{5\\sqrt{3}}{2}$.',
          'So Area $= \\frac{1}{2} \\cdot 8 \\cdot 5 \\cdot \\sin 60^\\circ = 20 \\cdot \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}$.',
        ],
        answer: 'The area is $10\\sqrt{3}$',
        fig: {
          view: [-1, -1.5, 9.5, 6],
          elems: [
            { t: 'poly', pts: [[0, 0], [8, 0], [2.5, 4.33]], fill: false },
            { t: 'seg', a: [2.5, 4.33], b: [2.5, 0], dash: true },
            { t: 'right', at: [2.5, 0], from: [0, 0], to: [2.5, 4.33] },
            { t: 'angle', at: [0, 0], from: [8, 0], to: [2.5, 4.33], r: 1, label: '60' },
            { t: 'label', p: [5.2, 0], text: '8', dx: 0, dy: 14 },
            { t: 'label', p: [1.25, 2.17], text: '5', dx: -10, dy: -6 },
            { t: 'label', p: [2.5, 2.17], text: 'h', dx: 10, dy: 0 },
          ],
        },
      },
    ],
  },
  problems: [
    {
      q: 'On the unit circle, what are the coordinates of the point at angle $90^\\circ$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [0, 1] },
          { t: 'seg', a: [0, 0], b: [1, 0] },
          { t: 'angle', at: [0, 0], from: [1, 0], to: [0, 1], r: 0.3, label: '90' },
          { t: 'point', p: [0, 1], label: 'P', dx: 12, dy: -8 },
        ],
      },
      choices: ['$(1, 0)$', '$(-1, 0)$', '$(0, -1)$', '$(0, 1)$'],
      answer: 3,
      solution: 'Rotating a quarter turn counterclockwise from $(1, 0)$ carries the radius straight up to $(0, 1)$. Reading the coordinates as $(\\cos\\theta, \\sin\\theta)$ tells us $\\cos 90^\\circ = 0$ and $\\sin 90^\\circ = 1$. The point $(1, 0)$ belongs to $0^\\circ$ and $(-1, 0)$ belongs to $180^\\circ$.',
    },
    {
      q: 'What is the exact value of $\\sin 120^\\circ$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [-0.5, 0.866] },
          { t: 'seg', a: [0, 0], b: [1, 0] },
          { t: 'angle', at: [0, 0], from: [1, 0], to: [-0.5, 0.866], r: 0.3, label: '120' },
          { t: 'point', p: [-0.5, 0.866], label: 'P', dx: -10, dy: -10 },
        ],
      },
      choices: ['$\\frac{\\sqrt{3}}{2}$', '$-\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$', '$-\\frac{1}{2}$'],
      answer: 0,
      solution: 'Since $120^\\circ = 180^\\circ - 60^\\circ$, the mirror rule gives $\\sin 120^\\circ = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$. Sine is a height, and the $120^\\circ$ point sits above the $x$-axis, so the value must be positive — it is the cosine of an obtuse angle that goes negative, not the sine.',
    },
    {
      q: 'What is the exact value of $\\cos 180^\\circ$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [-1, 0] },
          { t: 'seg', a: [0, 0], b: [1, 0], dash: true },
          { t: 'point', p: [-1, 0], label: 'P', dx: -12, dy: -8 },
        ],
      },
      choices: ['$0$', '$1$', '$-1$', 'undefined'],
      answer: 2,
      solution: 'A half turn from $(1, 0)$ lands at $(-1, 0)$, so $\\cos 180^\\circ = -1$ (and $\\sin 180^\\circ = 0$). The unit circle makes these boundary angles painless: no triangle needed, just read the coordinates.',
    },
    {
      q: 'Which expression is equal to $\\sin 140^\\circ$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [-0.766, 0.643] },
          { t: 'seg', a: [0, 0], b: [0.766, 0.643] },
          { t: 'seg', a: [-0.766, 0.643], b: [0.766, 0.643], dash: true },
          { t: 'angle', at: [0, 0], from: [1, 0], to: [-0.766, 0.643], r: 0.28, label: '140' },
          { t: 'point', p: [-0.766, 0.643], label: 'P', dx: -10, dy: -10 },
          { t: 'point', p: [0.766, 0.643], label: 'Q', dx: 12, dy: -8 },
        ],
      },
      choices: ['$\\cos 140^\\circ$', '$\\sin 40^\\circ$', '$-\\sin 40^\\circ$', '$\\sin 50^\\circ$'],
      answer: 1,
      solution: 'Because $140^\\circ = 180^\\circ - 40^\\circ$, the points for $140^\\circ$ and $40^\\circ$ are mirror images across the $y$-axis and sit at the same height. Sine is that height, so $\\sin 140^\\circ = \\sin 40^\\circ$. The height stays positive in the second quadrant, which rules out $-\\sin 40^\\circ$; the mirror pairs angles that sum to $180^\\circ$, not $90^\\circ$, which rules out $\\sin 50^\\circ$.',
    },
    {
      q: 'What is the exact value of $\\cos 135^\\circ$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [-0.707, 0.707] },
          { t: 'seg', a: [0, 0], b: [1, 0] },
          { t: 'angle', at: [0, 0], from: [1, 0], to: [-0.707, 0.707], r: 0.3, label: '135' },
          { t: 'point', p: [-0.707, 0.707], label: 'P', dx: -10, dy: -10 },
        ],
      },
      choices: ['$\\frac{\\sqrt{2}}{2}$', '$-\\frac{1}{2}$', '$\\frac{1}{2}$', '$-\\frac{\\sqrt{2}}{2}$'],
      answer: 3,
      solution: 'The $135^\\circ$ point mirrors the $45^\\circ$ point across the $y$-axis, so its $x$-coordinate is $-\\frac{\\sqrt{2}}{2}$: $\\cos 135^\\circ = -\\cos 45^\\circ = -\\frac{\\sqrt{2}}{2}$. A second-quadrant point always has negative $x$, so a positive answer can be eliminated before any computing.',
    },
    {
      q: 'A triangle has sides of length $6$ and $10$ meeting at a $30^\\circ$ angle. What is its area?',
      fig: {
        view: [-1, -1.5, 11.5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [5.196, 3]], fill: false },
          { t: 'angle', at: [0, 0], from: [10, 0], to: [5.196, 3], r: 1.4, label: '30' },
          { t: 'label', p: [5.8, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [2.6, 1.5], text: '6', dx: -8, dy: -8 },
        ],
      },
      choices: ['$15$', '$30$', '$15\\sqrt{3}$', '$60$'],
      answer: 0,
      solution: 'Two sides and the included angle: Area $= \\frac{1}{2} \\cdot 6 \\cdot 10 \\cdot \\sin 30^\\circ = 30 \\cdot \\frac{1}{2} = 15$. Choosing $30$ means the $\\sin 30^\\circ$ factor was dropped, and $15\\sqrt{3}$ comes from grabbing $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$ instead of the sine — the formula always takes the sine of the included angle.',
    },
    {
      q: 'What is the exact value of $\\cos 120^\\circ$?',
      choices: ['$\\frac{1}{2}$', '$-\\frac{\\sqrt{3}}{2}$', '$-\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$'],
      answer: 2,
      solution: 'Using the mirror rule with $120^\\circ = 180^\\circ - 60^\\circ$: $\\cos 120^\\circ = -\\cos 60^\\circ = -\\frac{1}{2}$. The tempting $-\\frac{\\sqrt{3}}{2}$ is $-\\cos 30^\\circ$ (that is, $\\cos 150^\\circ$) — keep the $60^\\circ$ family and the $30^\\circ$ family separate.',
    },
    {
      q: 'A triangle has sides of length $7$ and $8$ meeting at a $45^\\circ$ angle. What is its exact area?',
      fig: {
        view: [-1, -1.5, 9.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [4.95, 4.95]], fill: false },
          { t: 'angle', at: [0, 0], from: [8, 0], to: [4.95, 4.95], r: 1.2, label: '45' },
          { t: 'label', p: [6, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [2.47, 2.47], text: '7', dx: -10, dy: -6 },
        ],
      },
      choices: ['$28$', '$14\\sqrt{2}$', '$28\\sqrt{2}$', '$14$'],
      answer: 1,
      solution: 'Area $= \\frac{1}{2} \\cdot 7 \\cdot 8 \\cdot \\sin 45^\\circ = 28 \\cdot \\frac{\\sqrt{2}}{2} = 14\\sqrt{2}$. Forgetting the $\\frac{1}{2}$ produces $28\\sqrt{2}$, and dropping the sine entirely produces $28$ — the formula needs all three factors: half, the two sides, and the sine.',
    },
    {
      q: 'The angle $\\theta$ is obtuse and $\\sin\\theta = \\frac{1}{2}$. What is $\\theta$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [-0.866, 0.5], b: [0.866, 0.5], dash: true },
          { t: 'seg', a: [0, 0], b: [-0.866, 0.5] },
          { t: 'seg', a: [0, 0], b: [0.866, 0.5] },
          { t: 'point', p: [-0.866, 0.5], label: 'P', dx: -10, dy: -10 },
          { t: 'point', p: [0.866, 0.5], label: 'Q', dx: 12, dy: -8 },
        ],
      },
      choices: ['$120^\\circ$', '$30^\\circ$', '$150^\\circ$', '$135^\\circ$'],
      answer: 2,
      solution: 'The line of height $\\frac{1}{2}$ crosses the unit circle twice: at $30^\\circ$ (point $Q$) and at its mirror image $180^\\circ - 30^\\circ = 150^\\circ$ (point $P$). We are told $\\theta$ is obtuse, so $\\theta = 150^\\circ$. Whenever a sine value is given, remember it has two possible angles between $0^\\circ$ and $180^\\circ$ — the extra condition picks the winner.',
    },
    {
      q: 'A triangle has sides of length $8$ and $6$ meeting at angle $A$, and its area is $12$. If angle $A$ is obtuse, what is its measure?',
      fig: {
        view: [-6.5, -1.5, 9.5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [-5.196, 3]], fill: false },
          { t: 'angle', at: [0, 0], from: [8, 0], to: [-5.196, 3], r: 1.2, label: '?' },
          { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: 14 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [-2.6, 1.5], text: '6', dx: -6, dy: -10 },
        ],
      },
      choices: ['$120^\\circ$', '$150^\\circ$', '$135^\\circ$', '$30^\\circ$'],
      answer: 1,
      solution: 'Set up the area formula: $12 = \\frac{1}{2} \\cdot 8 \\cdot 6 \\cdot \\sin A = 24\\sin A$, so $\\sin A = \\frac{1}{2}$. Between $0^\\circ$ and $180^\\circ$ that allows $30^\\circ$ or $150^\\circ$, and the obtuse condition selects $150^\\circ$. This is why the problem had to tell us the angle was obtuse — the area alone cannot tell the two apart, since $\\sin 30^\\circ = \\sin 150^\\circ$.',
    },
  ],
}

const s183 = {
  id: '18.3',
  title: 'Law of Sines and Law of Cosines',
  learn: {
    concepts: [
      {
        heading: 'The Law of Sines',
        body: 'In any triangle $ABC$ (sides $a$, $b$, $c$ opposite angles $A$, $B$, $C$), the area can be written three ways: $\\frac{1}{2}bc\\sin A = \\frac{1}{2}ac\\sin B = \\frac{1}{2}ab\\sin C$. Divide everything by $\\frac{1}{2}abc$ and flip, and out pops the Law of Sines: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$. Each side is proportional to the sine of the angle facing it — bigger angle, bigger opposite side, in exact proportion. (A lovely bonus fact: this common ratio equals $2R$, the diameter of the circle through all three vertices.)',
      },
      {
        heading: 'The Law of Cosines',
        body: 'The Law of Cosines is the Pythagorean Theorem with a correction term: $c^2 = a^2 + b^2 - 2ab\\cos C$, where $C$ is the angle between sides $a$ and $b$. Sanity check: if $C = 90^\\circ$, then $\\cos C = 0$, the correction vanishes, and we are back to $c^2 = a^2 + b^2$. An acute $C$ has positive cosine, shrinking $c$; an obtuse $C$ has negative cosine, so subtracting a negative stretches $c$. The formula knows geometry\'s whole story about opening and closing a hinge.',
      },
      {
        heading: 'Choosing the right tool',
        body: 'Let the given information pick the law. Know two angles and any side? Law of Sines (the third angle is free, since angles sum to $180^\\circ$). Know two sides and the included angle (SAS), or all three sides (SSS)? Law of Cosines — the Law of Sines cannot start without a matched side-angle pair. A quick inventory of what you know is the first step of every triangle problem.',
      },
      {
        heading: 'Finding angles from three sides',
        body: 'Solve the Law of Cosines for the cosine: $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$. Feed in three sides and out comes the cosine of any angle — and unlike sine, cosine fingerprints the angle uniquely between $0^\\circ$ and $180^\\circ$, because a negative cosine can only mean an obtuse angle. The largest angle always sits opposite the longest side, and clean cosines like $\\pm\\frac{1}{2}$, $0$, and $\\pm\\frac{\\sqrt{2}}{2}$ announce special angles.',
      },
    ],
    examples: [
      {
        problem: 'In triangle $ABC$, $\\angle A = 30^\\circ$, $\\angle B = 45^\\circ$, and the side $a$ opposite $\\angle A$ has length $6$. Find $b$ exactly.',
        steps: [
          'We have two angles and a side — Law of Sines territory: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$.',
          'Substitute: $\\frac{6}{\\sin 30^\\circ} = \\frac{b}{\\sin 45^\\circ}$, so $b = \\frac{6\\sin 45^\\circ}{\\sin 30^\\circ}$.',
          'With $\\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$ and $\\sin 30^\\circ = \\frac{1}{2}$: $b = \\frac{6 \\cdot \\frac{\\sqrt{2}}{2}}{\\frac{1}{2}} = 6\\sqrt{2}$. It makes sense that $b > a$: side $b$ faces the bigger angle.',
        ],
        answer: '$b = 6\\sqrt{2}$',
        fig: {
          view: [-1.5, -1.5, 10.5, 10],
          elems: [
            { t: 'poly', pts: [[0, 0], [6, 0], [8.196, 8.196]], fill: false },
            { t: 'angle', at: [8.196, 8.196], from: [0, 0], to: [6, 0], r: 1.5, label: '30' },
            { t: 'angle', at: [0, 0], from: [6, 0], to: [8.196, 8.196], r: 1.2, label: '45' },
            { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
            { t: 'point', p: [6, 0], label: 'C', dx: 10, dy: 10 },
            { t: 'point', p: [8.196, 8.196], label: 'A', dx: 10, dy: -8 },
            { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
            { t: 'label', p: [7.1, 4.1], text: '?', dx: 12, dy: 0 },
          ],
        },
      },
      {
        problem: 'Two sides of a triangle measure $5$ and $8$, and the angle between them is $60^\\circ$. Find the third side.',
        steps: [
          'Two sides and the included angle is SAS, so reach for the Law of Cosines: $c^2 = a^2 + b^2 - 2ab\\cos C$.',
          'Substitute: $c^2 = 5^2 + 8^2 - 2 \\cdot 5 \\cdot 8 \\cdot \\cos 60^\\circ = 25 + 64 - 80 \\cdot \\frac{1}{2}$.',
          'That is $c^2 = 89 - 40 = 49$, so $c = 7$. As a check, $7$ is shorter than the Pythagorean answer $\\sqrt{89} \\approx 9.4$ would be — exactly what an acute included angle should do.',
        ],
        answer: 'The third side is $7$',
        fig: {
          view: [-1, -1.5, 9.5, 6],
          elems: [
            { t: 'poly', pts: [[0, 0], [8, 0], [2.5, 4.33]], fill: false },
            { t: 'angle', at: [0, 0], from: [8, 0], to: [2.5, 4.33], r: 1, label: '60' },
            { t: 'label', p: [5.2, 0], text: '8', dx: 0, dy: 14 },
            { t: 'label', p: [1.25, 2.17], text: '5', dx: -10, dy: -6 },
            { t: 'label', p: [5.25, 2.17], text: '?', dx: 10, dy: 8 },
          ],
        },
      },
      {
        problem: 'A triangle has sides $3$, $5$, and $7$. Find its largest angle.',
        steps: [
          'The largest angle faces the longest side, $7$. Call that angle $C$, so $C$ is between the sides $3$ and $5$.',
          'Solve the Law of Cosines for the cosine: $\\cos C = \\frac{3^2 + 5^2 - 7^2}{2 \\cdot 3 \\cdot 5} = \\frac{9 + 25 - 49}{30} = \\frac{-15}{30} = -\\frac{1}{2}$.',
          'A cosine of $-\\frac{1}{2}$ belongs to exactly one angle between $0^\\circ$ and $180^\\circ$: since $\\cos 60^\\circ = \\frac{1}{2}$, the mirror rule gives $C = 120^\\circ$. The negative cosine told us in advance the angle would be obtuse.',
        ],
        answer: 'The largest angle is $120^\\circ$',
        fig: {
          view: [-3, -1.5, 6.5, 4.5],
          elems: [
            { t: 'poly', pts: [[0, 0], [5, 0], [-1.5, 2.598]], fill: false },
            { t: 'angle', at: [0, 0], from: [5, 0], to: [-1.5, 2.598], r: 0.9, label: '?' },
            { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 14 },
            { t: 'label', p: [-0.75, 1.3], text: '3', dx: -8, dy: -8 },
            { t: 'label', p: [1.75, 1.3], text: '7', dx: 10, dy: 8 },
          ],
        },
      },
    ],
  },
  problems: [
    {
      q: 'You know two angles of a triangle and the length of one side. Which tool finds the remaining sides most directly?',
      choices: ['Law of Cosines', 'Law of Sines', 'the Pythagorean Theorem', 'the area formula'],
      answer: 1,
      solution: 'Two angles give the third for free (angles sum to $180^\\circ$), so every angle is known — and the Law of Sines pairs each known angle with its opposite side: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$. The Law of Cosines wants two sides before it can start, and the Pythagorean Theorem needs a right angle we may not have.',
    },
    {
      q: 'In the Law of Cosines $c^2 = a^2 + b^2 - 2ab\\cos C$, what does the equation become when $C = 90^\\circ$?',
      choices: ['$c^2 = a^2 + b^2$', '$c^2 = a^2 + b^2 - 2ab$', '$c^2 = a^2 - b^2$', '$c = a + b$'],
      answer: 0,
      solution: 'Since $\\cos 90^\\circ = 0$, the entire correction term $-2ab\\cos C$ vanishes, leaving $c^2 = a^2 + b^2$ — the Pythagorean Theorem! This is a beautiful check: the Law of Cosines is not a separate fact but a generalization, and it hands back the old theorem exactly when the angle is right.',
    },
    {
      q: 'In triangle $ABC$, $\\angle A = 30^\\circ$, $\\angle B = 90^\\circ$, and $a = 5$. Use the Law of Sines to find $b$.',
      fig: {
        view: [-1.5, -1.5, 10.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8.66, 0], [0, 5]], fill: false },
          { t: 'right', at: [0, 0], from: [8.66, 0], to: [0, 5] },
          { t: 'angle', at: [8.66, 0], from: [0, 0], to: [0, 5], r: 1.5, label: '30' },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [8.66, 0], label: 'A', dx: 12, dy: 10 },
          { t: 'point', p: [0, 5], label: 'C', dx: -10, dy: -8 },
          { t: 'label', p: [0, 2.5], text: '5', dx: -10, dy: 0 },
          { t: 'label', p: [4.33, 2.5], text: '?', dx: 8, dy: 8 },
        ],
      },
      choices: ['$5$', '$5\\sqrt{2}$', '$5\\sqrt{3}$', '$10$'],
      answer: 3,
      solution: 'Law of Sines: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$, so $b = \\frac{5\\sin 90^\\circ}{\\sin 30^\\circ} = \\frac{5 \\cdot 1}{\\frac{1}{2}} = 10$. This matches what we already knew about right triangles: $b$ is the hypotenuse, and the side opposite the $30^\\circ$ angle is half of it. New tool, same truth.',
    },
    {
      q: 'Two sides of a triangle measure $3$ and $5$, and the angle between them is $120^\\circ$. How long is the third side?',
      fig: {
        view: [-3, -1.5, 6.5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [-1.5, 2.598]], fill: false },
          { t: 'angle', at: [0, 0], from: [5, 0], to: [-1.5, 2.598], r: 0.9, label: '120' },
          { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [-0.75, 1.3], text: '3', dx: -8, dy: -8 },
          { t: 'label', p: [1.75, 1.3], text: '?', dx: 10, dy: 8 },
        ],
      },
      choices: ['$\\sqrt{19}$', '$4$', '$7$', '$\\sqrt{34}$'],
      answer: 2,
      solution: 'Law of Cosines with $\\cos 120^\\circ = -\\frac{1}{2}$: $c^2 = 9 + 25 - 2 \\cdot 3 \\cdot 5 \\cdot \\left(-\\frac{1}{2}\\right) = 34 + 15 = 49$, so $c = 7$. The sign is the whole game here: subtracting a negative adds. The choice $\\sqrt{19}$ comes from computing $34 - 15$, which would be correct for a $60^\\circ$ angle, and $\\sqrt{34}$ forgets the cosine term entirely.',
    },
    {
      q: 'In triangle $ABC$, $\\angle A = 45^\\circ$, $\\angle B = 60^\\circ$, and $a = 8$. Find $b$ exactly.',
      fig: {
        view: [-1.5, -1.5, 10.5, 11],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [5.464, 9.464]], fill: false },
          { t: 'angle', at: [5.464, 9.464], from: [0, 0], to: [8, 0], r: 1.5, label: '45' },
          { t: 'angle', at: [0, 0], from: [8, 0], to: [5.464, 9.464], r: 1.2, label: '60' },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [8, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [5.464, 9.464], label: 'A', dx: 12, dy: -8 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [6.73, 4.73], text: '?', dx: 12, dy: 4 },
        ],
      },
      choices: ['$4\\sqrt{6}$', '$4\\sqrt{3}$', '$8\\sqrt{3}$', '$4\\sqrt{2}$'],
      answer: 0,
      solution: 'Law of Sines: $b = \\frac{8\\sin 60^\\circ}{\\sin 45^\\circ} = \\frac{8 \\cdot \\frac{\\sqrt{3}}{2}}{\\frac{\\sqrt{2}}{2}} = \\frac{8\\sqrt{3}}{\\sqrt{2}} = \\frac{8\\sqrt{3} \\cdot \\sqrt{2}}{2} = 4\\sqrt{6}$. A quick reasonableness check: $4\\sqrt{6} \\approx 9.8 > 8$, and indeed $b$ should beat $a$ because $60^\\circ > 45^\\circ$ — sides and opposite angles rank in the same order.',
    },
    {
      q: 'A triangle has sides $5$, $7$, and $8$. What is the measure of the angle opposite the side of length $7$?',
      fig: {
        view: [-1.5, -1.5, 9.5, 6],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [2.5, 4.33]], fill: false },
          { t: 'angle', at: [0, 0], from: [8, 0], to: [2.5, 4.33], r: 1, label: '?' },
          { t: 'label', p: [5.2, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [1.25, 2.17], text: '5', dx: -10, dy: -6 },
          { t: 'label', p: [5.25, 2.17], text: '7', dx: 10, dy: 8 },
        ],
      },
      choices: ['$30^\\circ$', '$60^\\circ$', '$45^\\circ$', '$120^\\circ$'],
      answer: 1,
      solution: 'The angle opposite $7$ sits between the sides $5$ and $8$, so $\\cos\\theta = \\frac{5^2 + 8^2 - 7^2}{2 \\cdot 5 \\cdot 8} = \\frac{25 + 64 - 49}{80} = \\frac{40}{80} = \\frac{1}{2}$, giving $\\theta = 60^\\circ$. A positive cosine promised an acute angle, and $\\frac{1}{2}$ is one of our clean special values — the problem was built to land softly.',
    },
    {
      q: 'You know all three side lengths of a triangle and want its angles. Which tool applies directly?',
      choices: ['Law of Sines', 'neither — it cannot be solved', 'the triangle inequality', 'Law of Cosines'],
      answer: 3,
      solution: 'The rearranged Law of Cosines, $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$, takes three sides and returns any angle you like — no other information needed. The Law of Sines cannot begin without a known angle, and the triangle inequality only says whether a triangle exists; it measures nothing.',
    },
    {
      q: 'Two sides of a triangle measure $4$ and $7$, and the angle between them is $60^\\circ$. How long is the third side?',
      fig: {
        view: [-1, -1.5, 8.5, 5],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [2, 3.464]], fill: false },
          { t: 'angle', at: [0, 0], from: [7, 0], to: [2, 3.464], r: 1, label: '60' },
          { t: 'label', p: [4.5, 0], text: '7', dx: 0, dy: 14 },
          { t: 'label', p: [1, 1.73], text: '4', dx: -10, dy: -6 },
          { t: 'label', p: [4.5, 1.73], text: '?', dx: 10, dy: 8 },
        ],
      },
      choices: ['$\\sqrt{93}$', '$11$', '$\\sqrt{37}$', '$\\sqrt{65}$'],
      answer: 2,
      solution: 'Law of Cosines: $c^2 = 16 + 49 - 2 \\cdot 4 \\cdot 7 \\cdot \\cos 60^\\circ = 65 - 56 \\cdot \\frac{1}{2} = 65 - 28 = 37$, so $c = \\sqrt{37}$. The choice $\\sqrt{65}$ skips the cosine correction, and $\\sqrt{93}$ adds $28$ instead of subtracting — a sign slip that would require an obtuse angle. And $\\sqrt{37} \\approx 6.1$ sits sensibly between $7 - 4 = 3$ and $7 + 4 = 11$.',
    },
    {
      q: 'A triangle has sides $7$, $8$, and $13$. What is the measure of its largest angle?',
      fig: {
        view: [-5, -1.5, 9.5, 8],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [-3.5, 6.062]], fill: false },
          { t: 'angle', at: [0, 0], from: [8, 0], to: [-3.5, 6.062], r: 1.2, label: '?' },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [-1.75, 3.03], text: '7', dx: -8, dy: -8 },
          { t: 'label', p: [2.25, 3.03], text: '13', dx: 12, dy: 6 },
        ],
      },
      choices: ['$120^\\circ$', '$60^\\circ$', '$135^\\circ$', '$150^\\circ$'],
      answer: 0,
      solution: 'The largest angle faces the longest side, $13$, and lies between the sides $7$ and $8$: $\\cos\\theta = \\frac{7^2 + 8^2 - 13^2}{2 \\cdot 7 \\cdot 8} = \\frac{49 + 64 - 169}{112} = \\frac{-56}{112} = -\\frac{1}{2}$. The unique angle between $0^\\circ$ and $180^\\circ$ with cosine $-\\frac{1}{2}$ is $120^\\circ$. The negative sign was the early warning: this triangle is obtuse.',
    },
    {
      q: 'In triangle $ABC$, the side $a = 6$ lies opposite $\\angle A = 30^\\circ$. The Law of Sines ratio $\\frac{a}{\\sin A}$ equals the diameter $2R$ of the circle through $A$, $B$, and $C$. What is the radius $R$ of that circle?',
      fig: {
        view: [-7.5, -7.5, 7.5, 7.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 6 },
          { t: 'poly', pts: [[-6, 0], [5.196, 3], [5.196, -3]], fill: false },
          { t: 'angle', at: [-6, 0], from: [5.196, 3], to: [5.196, -3], r: 1.6, label: '30' },
          { t: 'point', p: [-6, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [5.196, 3], label: 'B', dx: 12, dy: -6 },
          { t: 'point', p: [5.196, -3], label: 'C', dx: 12, dy: 8 },
          { t: 'label', p: [5.196, 0], text: '6', dx: 12, dy: 0 },
        ],
      },
      choices: ['$3$', '$12$', '$6$', '$6\\sqrt{3}$'],
      answer: 2,
      solution: 'Compute the ratio: $\\frac{a}{\\sin A} = \\frac{6}{\\sin 30^\\circ} = \\frac{6}{\\frac{1}{2}} = 12$. That is the diameter, so $R = \\frac{12}{2} = 6$. Careful reading matters here: $12$ is $2R$, not $R$. It is a lovely coincidence of the numbers that the chord of length $6$ sits in a circle of radius $6$ — a $30^\\circ$ inscribed angle always does that.',
    },
  ],
}

const challenge = [
  {
    q: 'The angle $\\theta$ is obtuse and $\\sin\\theta = \\frac{3}{5}$. What is $\\cos\\theta$?',
    choices: ['$\\frac{4}{5}$', '$-\\frac{3}{5}$', '$-\\frac{4}{5}$', '$\\frac{3}{5}$'],
    answer: 2,
    solution: 'From $\\sin^2\\theta + \\cos^2\\theta = 1$: $\\cos^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$, so $\\cos\\theta = \\pm\\frac{4}{5}$. The identity alone cannot pick the sign — the geometry does. An obtuse angle lands in the second quadrant of the unit circle, where the $x$-coordinate is negative, so $\\cos\\theta = -\\frac{4}{5}$.',
  },
  {
    q: 'From point $P$ on flat ground, the angle of elevation to a cliff top is $30^\\circ$. After walking $100$ meters straight toward the cliff to point $Q$, the angle of elevation is $60^\\circ$. How tall is the cliff?',
    fig: {
      view: [-15, -15, 175, 105],
      elems: [
        { t: 'poly', pts: [[0, 0], [150, 0], [150, 86.6]], fill: false },
        { t: 'seg', a: [100, 0], b: [150, 86.6] },
        { t: 'right', at: [150, 0], from: [100, 0], to: [150, 86.6] },
        { t: 'angle', at: [0, 0], from: [150, 0], to: [150, 86.6], r: 28, label: '30' },
        { t: 'angle', at: [100, 0], from: [150, 0], to: [150, 86.6], r: 14, label: '60' },
        { t: 'point', p: [0, 0], label: 'P', dx: 0, dy: 14 },
        { t: 'point', p: [100, 0], label: 'Q', dx: -6, dy: 14 },
        { t: 'label', p: [50, 0], text: '100', dx: 0, dy: 14 },
        { t: 'label', p: [150, 43.3], text: '?', dx: 12, dy: 0 },
      ],
    },
    choices: ['$50\\sqrt{3}$', '$100\\sqrt{3}$', '$50$', '$100$'],
    answer: 0,
    solution: 'Let $d$ be the distance from $Q$ to the base and $h$ the height. From $Q$: $h = d\\tan 60^\\circ = d\\sqrt{3}$. From $P$: $h = (d + 100)\\tan 30^\\circ = \\frac{d + 100}{\\sqrt{3}}$. Set them equal: $d\\sqrt{3} = \\frac{d + 100}{\\sqrt{3}}$, so $3d = d + 100$ and $d = 50$. Then $h = 50\\sqrt{3}$ meters. Two viewpoints, two equations — the classic surveyor\'s trick.',
  },
  {
    q: 'A regular hexagon has side length $6$. Using the triangle area formula $\\frac{1}{2}ab\\sin C$, what is the area of the hexagon?',
    fig: {
      view: [-7.5, -7, 7.5, 7],
      elems: [
        { t: 'poly', pts: [[6, 0], [3, 5.196], [-3, 5.196], [-6, 0], [-3, -5.196], [3, -5.196]], fill: false },
        { t: 'seg', a: [0, 0], b: [6, 0] },
        { t: 'seg', a: [0, 0], b: [3, 5.196] },
        { t: 'angle', at: [0, 0], from: [6, 0], to: [3, 5.196], r: 1.3, label: '60' },
        { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
        { t: 'label', p: [4.5, 2.6], text: '6', dx: 8, dy: -6 },
      ],
    },
    choices: ['$36\\sqrt{3}$', '$54\\sqrt{3}$', '$108$', '$54$'],
    answer: 1,
    solution: 'The center splits the hexagon into $6$ triangles, each with a central angle of $\\frac{360^\\circ}{6} = 60^\\circ$ between two spokes. A central triangle with a $60^\\circ$ apex and two equal spokes is equilateral, so each spoke is $6$. One triangle has area $\\frac{1}{2} \\cdot 6 \\cdot 6 \\cdot \\sin 60^\\circ = 18 \\cdot \\frac{\\sqrt{3}}{2} = 9\\sqrt{3}$, and six of them give $54\\sqrt{3}$.',
  },
  {
    q: 'A parallelogram has sides $5$ and $8$, with a $60^\\circ$ angle between them. What is the length of its longer diagonal?',
    fig: {
      view: [-1, -1.5, 12, 6],
      elems: [
        { t: 'poly', pts: [[0, 0], [8, 0], [10.5, 4.33], [2.5, 4.33]], fill: false },
        { t: 'seg', a: [0, 0], b: [10.5, 4.33], dash: true },
        { t: 'seg', a: [8, 0], b: [2.5, 4.33], dash: true },
        { t: 'angle', at: [0, 0], from: [8, 0], to: [2.5, 4.33], r: 1.1, label: '60' },
        { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
        { t: 'label', p: [1.25, 2.17], text: '5', dx: -10, dy: -4 },
      ],
    },
    choices: ['$7$', '$\\sqrt{89}$', '$13$', '$\\sqrt{129}$'],
    answer: 3,
    solution: 'Consecutive angles of a parallelogram are supplementary, so the two triangles cut by the diagonals have included angles $60^\\circ$ and $120^\\circ$. The longer diagonal spans the $120^\\circ$ angle: $d^2 = 5^2 + 8^2 - 2 \\cdot 5 \\cdot 8 \\cos 120^\\circ = 89 + 40 = 129$, so $d = \\sqrt{129}$. The shorter diagonal, spanning $60^\\circ$, is $\\sqrt{89 - 40} = 7$ — a nice contrast in one figure.',
  },
  {
    q: 'The angle $\\theta$ satisfies $0^\\circ \\le \\theta \\le 180^\\circ$ and $\\cos\\theta = -\\frac{\\sqrt{3}}{2}$. What is $\\theta$?',
    choices: ['$30^\\circ$', '$150^\\circ$', '$120^\\circ$', '$135^\\circ$'],
    answer: 1,
    solution: 'A negative cosine means an obtuse angle, and unlike sine, cosine points to exactly one angle in this range. Since $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$, the mirror rule $\\cos(180^\\circ - \\theta) = -\\cos\\theta$ gives $\\cos 150^\\circ = -\\frac{\\sqrt{3}}{2}$, so $\\theta = 150^\\circ$.',
  },
  {
    q: 'In triangle $ABC$, $\\angle A = \\angle B = 30^\\circ$ and the side $a$ opposite $\\angle A$ has length $4$. Find $c$, the side opposite $\\angle C$.',
    fig: {
      view: [-1.5, -1.5, 8.5, 3.5],
      elems: [
        { t: 'poly', pts: [[0, 0], [6.928, 0], [3.464, 2]], fill: false },
        { t: 'angle', at: [0, 0], from: [6.928, 0], to: [3.464, 2], r: 1.2, label: '30' },
        { t: 'angle', at: [6.928, 0], from: [0, 0], to: [3.464, 2], r: 1.2, label: '30' },
        { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
        { t: 'point', p: [6.928, 0], label: 'B', dx: 10, dy: 10 },
        { t: 'point', p: [3.464, 2], label: 'C', dx: 0, dy: -12 },
        { t: 'label', p: [5.2, 1], text: '4', dx: 8, dy: -6 },
        { t: 'label', p: [3.464, 0], text: '?', dx: 0, dy: 14 },
      ],
    },
    choices: ['$4\\sqrt{3}$', '$8$', '$4\\sqrt{2}$', '$2\\sqrt{3}$'],
    answer: 0,
    solution: 'The third angle is $C = 180^\\circ - 30^\\circ - 30^\\circ = 120^\\circ$. Law of Sines: $c = \\frac{a\\sin C}{\\sin A} = \\frac{4\\sin 120^\\circ}{\\sin 30^\\circ} = \\frac{4 \\cdot \\frac{\\sqrt{3}}{2}}{\\frac{1}{2}} = 4\\sqrt{3}$. Here an obtuse-angle sine, $\\sin 120^\\circ = \\frac{\\sqrt{3}}{2}$, slots into the Law of Sines exactly like an acute one — the unit-circle definition earning its keep.',
  },
  {
    q: 'Two rods of lengths $6$ and $9$ are hinged at one end, and the hinge can open to any angle. What is the largest possible area of the triangle they form (with the segment joining their free ends)?',
    choices: ['$13.5$', '$54$', '$27$', '$\\frac{27\\sqrt{3}}{2}$'],
    answer: 2,
    solution: 'The area is $\\frac{1}{2} \\cdot 6 \\cdot 9 \\cdot \\sin\\theta = 27\\sin\\theta$, where $\\theta$ is the hinge angle. Since $\\sin\\theta$ never exceeds $1$, and equals $1$ exactly at $\\theta = 90^\\circ$, the maximum area is $27$. This is a general and lovely fact: for two fixed side lengths, the right-angled hinge encloses the most area.',
  },
  {
    q: 'Two sides of a triangle measure $10$ and $5$, and the angle between them is $37^\\circ$. Given $\\sin 37^\\circ \\approx 0.6$ and $\\cos 37^\\circ \\approx 0.8$, what is the approximate area of the triangle?',
    fig: {
      view: [-1, -1.5, 11.5, 4.5],
      elems: [
        { t: 'poly', pts: [[0, 0], [10, 0], [4, 3]], fill: false },
        { t: 'angle', at: [0, 0], from: [10, 0], to: [4, 3], r: 1.5, label: '37' },
        { t: 'label', p: [5.5, 0], text: '10', dx: 0, dy: 14 },
        { t: 'label', p: [2, 1.5], text: '5', dx: -8, dy: -8 },
      ],
    },
    choices: ['$25$', '$30$', '$20$', '$15$'],
    answer: 3,
    solution: 'Area $= \\frac{1}{2} \\cdot 10 \\cdot 5 \\cdot \\sin 37^\\circ \\approx 25 \\times 0.6 = 15$. The choice $20$ comes from using $\\cos 37^\\circ \\approx 0.8$ — but the area formula runs on the sine of the included angle, because the sine is what turns a slanted side into a vertical height.',
  },
  {
    q: 'Two sides of a triangle measure $3$ and $\\sqrt{2}$, and the angle between them is $45^\\circ$. How long is the third side?',
    choices: ['$\\sqrt{5}$', '$\\sqrt{11}$', '$\\sqrt{17}$', '$\\sqrt{7}$'],
    answer: 0,
    solution: 'Law of Cosines: $c^2 = 9 + 2 - 2 \\cdot 3 \\cdot \\sqrt{2} \\cdot \\cos 45^\\circ = 11 - 6\\sqrt{2} \\cdot \\frac{\\sqrt{2}}{2} = 11 - 6 = 5$, so $c = \\sqrt{5}$. The $\\sqrt{2}$ side is chosen kindly: it cancels the $\\sqrt{2}$ hiding in $\\cos 45^\\circ$, and the answer collapses to a clean radical. Forgetting the correction term leaves $\\sqrt{11}$, and a sign slip gives $\\sqrt{17}$.',
  },
  {
    q: 'The point $P = \\left(-\\frac{1}{2}, y\\right)$ lies on the unit circle with $y > 0$, at angle $\\theta$ measured counterclockwise from the positive $x$-axis. What is $\\theta$?',
    fig: {
      view: [-1.7, -1.7, 1.7, 1.7],
      grid: true,
      elems: [
        { t: 'circle', c: [0, 0], r: 1 },
        { t: 'seg', a: [0, 0], b: [-0.5, 0.866] },
        { t: 'seg', a: [0, 0], b: [1, 0] },
        { t: 'seg', a: [-0.5, 0.866], b: [-0.5, 0], dash: true },
        { t: 'angle', at: [0, 0], from: [1, 0], to: [-0.5, 0.866], r: 0.3, label: '?' },
        { t: 'point', p: [-0.5, 0.866], label: 'P', dx: -10, dy: -10 },
      ],
    },
    choices: ['$60^\\circ$', '$135^\\circ$', '$120^\\circ$', '$150^\\circ$'],
    answer: 2,
    solution: 'On the unit circle the $x$-coordinate is the cosine, so $\\cos\\theta = -\\frac{1}{2}$, and $y > 0$ puts us in the second quadrant. Since $\\cos 60^\\circ = \\frac{1}{2}$, the mirror rule gives $\\theta = 180^\\circ - 60^\\circ = 120^\\circ$. (Then $y = \\sin 120^\\circ = \\frac{\\sqrt{3}}{2}$, and indeed $\\left(\\frac{1}{2}\\right)^2 + \\left(\\frac{\\sqrt{3}}{2}\\right)^2 = 1$.)',
  },
  {
    q: 'In triangle $ABC$, the side $a = 9$ lies opposite $\\angle A = 60^\\circ$. Using $\\frac{a}{\\sin A} = 2R$, find the radius $R$ of the circle through $A$, $B$, and $C$.',
    fig: {
      view: [-6.7, -6.7, 6.7, 6.7],
      elems: [
        { t: 'circle', c: [0, 0], r: 5.196 },
        { t: 'poly', pts: [[-5.196, 0], [2.598, 4.5], [2.598, -4.5]], fill: false },
        { t: 'angle', at: [-5.196, 0], from: [2.598, 4.5], to: [2.598, -4.5], r: 1.4, label: '60' },
        { t: 'point', p: [-5.196, 0], label: 'A', dx: -12, dy: 0 },
        { t: 'point', p: [2.598, 4.5], label: 'B', dx: 12, dy: -6 },
        { t: 'point', p: [2.598, -4.5], label: 'C', dx: 12, dy: 8 },
        { t: 'label', p: [2.598, 0], text: '9', dx: 12, dy: 0 },
      ],
    },
    choices: ['$9$', '$6\\sqrt{3}$', '$18$', '$3\\sqrt{3}$'],
    answer: 3,
    solution: '$2R = \\frac{9}{\\sin 60^\\circ} = \\frac{9}{\\frac{\\sqrt{3}}{2}} = \\frac{18}{\\sqrt{3}} = 6\\sqrt{3}$, so $R = 3\\sqrt{3}$. Two traps in one problem: $6\\sqrt{3}$ is the diameter, not the radius, and leaving $\\frac{18}{\\sqrt{3}}$ unrationalized hides the fact that it equals $6\\sqrt{3}$. Halving the diameter is the easy step people skip.',
  },
  {
    q: 'Compute exactly: $\\sin 30^\\circ \\cos 60^\\circ + \\sin 60^\\circ \\cos 30^\\circ$.',
    choices: ['$\\frac{\\sqrt{3}}{2}$', '$1$', '$\\frac{3}{4}$', '$\\frac{1}{2}$'],
    answer: 1,
    solution: 'Substitute the exact values: $\\frac{1}{2} \\cdot \\frac{1}{2} + \\frac{\\sqrt{3}}{2} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{1}{4} + \\frac{3}{4} = 1$. Intriguingly, the answer is $\\sin 90^\\circ$ — and $30^\\circ + 60^\\circ = 90^\\circ$. That is no accident: this expression follows the sine addition formula, a preview of trigonometry still to come.',
  },
]

const worksheet = [
  {
    q: 'In right triangle $ABC$, the right angle is at $B$, $AB = 12$, $BC = 5$, and $AC = 13$. Find $\\sin A$, $\\cos A$, and $\\tan A$.',
    fig: {
      view: [-1.5, -1.5, 15, 7],
      elems: [
        { t: 'poly', pts: [[0, 0], [12, 0], [12, 5]], fill: false },
        { t: 'right', at: [12, 0], from: [0, 0], to: [12, 5] },
        { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
        { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 10 },
        { t: 'point', p: [12, 5], label: 'C', dx: 10, dy: -8 },
        { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
        { t: 'label', p: [12, 2.5], text: '5', dx: 12, dy: 0 },
        { t: 'label', p: [6, 2.5], text: '13', dx: -8, dy: -10 },
      ],
    },
    answer: '$\\sin A = \\frac{5}{13}$, $\\cos A = \\frac{12}{13}$, $\\tan A = \\frac{5}{12}$',
    solution: 'From angle $A$, the opposite side is $BC = 5$, the adjacent side is $AB = 12$, and the hypotenuse is $AC = 13$. So $\\sin A = \\frac{5}{13}$, $\\cos A = \\frac{12}{13}$, and $\\tan A = \\frac{5}{12}$. Check: $\\left(\\frac{5}{13}\\right)^2 + \\left(\\frac{12}{13}\\right)^2 = \\frac{25 + 144}{169} = 1$, as the identity demands.',
  },
  {
    q: 'Write the exact values of $\\sin 60^\\circ$, $\\cos 45^\\circ$, and $\\tan 30^\\circ$.',
    answer: '$\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$, $\\cos 45^\\circ = \\frac{\\sqrt{2}}{2}$, $\\tan 30^\\circ = \\frac{\\sqrt{3}}{3}$',
    solution: 'From the half-equilateral triangle (sides $1$, $\\sqrt{3}$, $2$): $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$ and $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$. From the isosceles right triangle (sides $1$, $1$, $\\sqrt{2}$): $\\cos 45^\\circ = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$. Rebuilding the two special triangles takes ten seconds and replaces a whole memorized table.',
  },
  {
    q: 'A right triangle has hypotenuse $16$ and one acute angle of $30^\\circ$. Find the exact lengths of both legs.',
    fig: {
      view: [-1.5, -1.5, 16, 10],
      elems: [
        { t: 'poly', pts: [[0, 0], [13.856, 0], [13.856, 8]], fill: false },
        { t: 'right', at: [13.856, 0], from: [0, 0], to: [13.856, 8] },
        { t: 'angle', at: [0, 0], from: [13.856, 0], to: [13.856, 8], r: 2.4, label: '30' },
        { t: 'label', p: [6.93, 4], text: '16', dx: -8, dy: -10 },
        { t: 'label', p: [13.856, 4], text: '?', dx: 12, dy: 0 },
        { t: 'label', p: [6.93, 0], text: '?', dx: 0, dy: 14 },
      ],
    },
    answer: 'The legs are $8$ (opposite the $30^\\circ$ angle) and $8\\sqrt{3}$',
    solution: 'The leg opposite $30^\\circ$ is $16\\sin 30^\\circ = 16 \\cdot \\frac{1}{2} = 8$, and the leg adjacent is $16\\cos 30^\\circ = 16 \\cdot \\frac{\\sqrt{3}}{2} = 8\\sqrt{3}$. Check with the Pythagorean Theorem: $8^2 + (8\\sqrt{3})^2 = 64 + 192 = 256 = 16^2$. ✓',
  },
  {
    q: 'A $25$-foot ladder leans against a wall at a $37^\\circ$ angle of elevation. Given $\\sin 37^\\circ \\approx 0.6$ and $\\cos 37^\\circ \\approx 0.8$, about how high does the ladder reach, and how far is its foot from the wall?',
    fig: {
      view: [-2.5, -2.5, 24, 18],
      elems: [
        { t: 'poly', pts: [[0, 0], [20, 0], [20, 15]], fill: false },
        { t: 'right', at: [20, 0], from: [0, 0], to: [20, 15] },
        { t: 'angle', at: [0, 0], from: [20, 0], to: [20, 15], r: 3.4, label: '37' },
        { t: 'label', p: [10, 7.5], text: '25', dx: -10, dy: -10 },
        { t: 'label', p: [20, 7.5], text: '?', dx: 12, dy: 0 },
        { t: 'label', p: [10, 0], text: '?', dx: 0, dy: 14 },
      ],
    },
    answer: 'It reaches about $15$ feet up, with its foot about $20$ feet from the wall',
    solution: 'The ladder is the hypotenuse. Height (opposite): $25\\sin 37^\\circ \\approx 25 \\times 0.6 = 15$ feet. Distance from the wall (adjacent): $25\\cos 37^\\circ \\approx 25 \\times 0.8 = 20$ feet. The triangle is $15$-$20$-$25$, a scaled-up $3$-$4$-$5$ — which is exactly why $37^\\circ$ pairs so nicely with the ratios $0.6$ and $0.8$.',
  },
  {
    q: 'Write the exact values of $\\cos 150^\\circ$ and $\\sin 135^\\circ$.',
    answer: '$\\cos 150^\\circ = -\\frac{\\sqrt{3}}{2}$ and $\\sin 135^\\circ = \\frac{\\sqrt{2}}{2}$',
    solution: 'Use the mirror rules with the supplements. For $150^\\circ = 180^\\circ - 30^\\circ$: $\\cos 150^\\circ = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$. For $135^\\circ = 180^\\circ - 45^\\circ$: $\\sin 135^\\circ = \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$. Sine survives the mirror unchanged; cosine picks up a minus sign — heights match, but left and right trade places.',
  },
  {
    q: 'Two sides of a triangle measure $12$ and $7$, and the angle between them is $30^\\circ$. Find the area of the triangle.',
    fig: {
      view: [-1, -1.5, 13.5, 5],
      elems: [
        { t: 'poly', pts: [[0, 0], [12, 0], [6.062, 3.5]], fill: false },
        { t: 'angle', at: [0, 0], from: [12, 0], to: [6.062, 3.5], r: 1.6, label: '30' },
        { t: 'label', p: [6.5, 0], text: '12', dx: 0, dy: 14 },
        { t: 'label', p: [3.03, 1.75], text: '7', dx: -8, dy: -8 },
      ],
    },
    answer: '$21$',
    solution: 'Area $= \\frac{1}{2} \\cdot 12 \\cdot 7 \\cdot \\sin 30^\\circ = 42 \\cdot \\frac{1}{2} = 21$. The formula $\\frac{1}{2}ab\\sin C$ works because $7\\sin 30^\\circ = 3.5$ is the height of the triangle above the base of $12$ — the sine converts the slanted side into a vertical drop.',
  },
  {
    q: 'In triangle $ABC$, $\\angle A = 30^\\circ$, $\\angle B = 45^\\circ$, and the side $a$ opposite $\\angle A$ has length $5$. Find $b$ exactly.',
    fig: {
      view: [-1.5, -1.5, 9, 8.5],
      elems: [
        { t: 'poly', pts: [[0, 0], [5, 0], [6.83, 6.83]], fill: false },
        { t: 'angle', at: [6.83, 6.83], from: [0, 0], to: [5, 0], r: 1.4, label: '30' },
        { t: 'angle', at: [0, 0], from: [5, 0], to: [6.83, 6.83], r: 1.1, label: '45' },
        { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
        { t: 'point', p: [5, 0], label: 'C', dx: 10, dy: 10 },
        { t: 'point', p: [6.83, 6.83], label: 'A', dx: 12, dy: -8 },
        { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 14 },
        { t: 'label', p: [5.92, 3.42], text: '?', dx: 12, dy: 4 },
      ],
    },
    answer: '$b = 5\\sqrt{2}$',
    solution: 'Law of Sines: $\\frac{5}{\\sin 30^\\circ} = \\frac{b}{\\sin 45^\\circ}$, so $b = \\frac{5\\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{5 \\cdot \\frac{\\sqrt{2}}{2}}{\\frac{1}{2}} = 5\\sqrt{2}$. Reasonableness check: $5\\sqrt{2} \\approx 7.1 > 5$, which fits because $\\angle B = 45^\\circ$ is larger than $\\angle A = 30^\\circ$ and bigger angles face bigger sides.',
  },
  {
    q: 'Two sides of a triangle measure $10$ and $6$, and the angle between them is $120^\\circ$. Find the third side.',
    fig: {
      view: [-4.5, -1.5, 11.5, 7],
      elems: [
        { t: 'poly', pts: [[0, 0], [10, 0], [-3, 5.196]], fill: false },
        { t: 'angle', at: [0, 0], from: [10, 0], to: [-3, 5.196], r: 1.3, label: '120' },
        { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
        { t: 'label', p: [-1.5, 2.6], text: '6', dx: -8, dy: -8 },
        { t: 'label', p: [3.5, 2.6], text: '?', dx: 10, dy: 8 },
      ],
    },
    answer: '$14$',
    solution: 'Law of Cosines with $\\cos 120^\\circ = -\\frac{1}{2}$: $c^2 = 10^2 + 6^2 - 2 \\cdot 10 \\cdot 6 \\cdot \\left(-\\frac{1}{2}\\right) = 136 + 60 = 196$, so $c = 14$. The obtuse angle makes the correction term positive, stretching the third side beyond the Pythagorean $\\sqrt{136} \\approx 11.7$ — a wide hinge pushes its endpoints apart.',
  },
  {
    q: 'A triangle has sides $3$, $7$, and $8$. Find the measure of the angle opposite the side of length $7$.',
    fig: {
      view: [-1, -1.5, 9, 4.5],
      elems: [
        { t: 'poly', pts: [[0, 0], [8, 0], [1.5, 2.598]], fill: false },
        { t: 'angle', at: [0, 0], from: [8, 0], to: [1.5, 2.598], r: 0.9, label: '?' },
        { t: 'label', p: [4.75, 0], text: '8', dx: 0, dy: 14 },
        { t: 'label', p: [0.75, 1.3], text: '3', dx: -10, dy: -4 },
        { t: 'label', p: [4.75, 1.3], text: '7', dx: 10, dy: 8 },
      ],
    },
    answer: '$60^\\circ$',
    solution: 'The angle opposite $7$ lies between the sides $3$ and $8$: $\\cos\\theta = \\frac{3^2 + 8^2 - 7^2}{2 \\cdot 3 \\cdot 8} = \\frac{9 + 64 - 49}{48} = \\frac{24}{48} = \\frac{1}{2}$, so $\\theta = 60^\\circ$. With three sides and no angles, the rearranged Law of Cosines is the direct route — and the clean cosine $\\frac{1}{2}$ signals a special angle.',
  },
  {
    q: 'An isosceles triangle has two sides of length $5$ and a base of length $5\\sqrt{3}$. Find all three angles, then compute the exact area of the triangle.',
    fig: {
      view: [-1.5, -1.5, 10.5, 4],
      elems: [
        { t: 'poly', pts: [[0, 0], [8.66, 0], [4.33, 2.5]], fill: false },
        { t: 'tick', a: [0, 0], b: [4.33, 2.5], n: 1 },
        { t: 'tick', a: [8.66, 0], b: [4.33, 2.5], n: 1 },
        { t: 'label', p: [2.17, 1.25], text: '5', dx: -8, dy: -8 },
        { t: 'label', p: [6.5, 1.25], text: '5', dx: 8, dy: -8 },
        { t: 'label', p: [4.33, 0], text: '?', dx: 0, dy: 14 },
      ],
    },
    answer: 'The angles are $120^\\circ$, $30^\\circ$, $30^\\circ$, and the area is $\\frac{25\\sqrt{3}}{4}$',
    solution: 'Find the apex angle (between the two sides of length $5$) with the Law of Cosines: $\\cos C = \\frac{5^2 + 5^2 - (5\\sqrt{3})^2}{2 \\cdot 5 \\cdot 5} = \\frac{25 + 25 - 75}{50} = -\\frac{1}{2}$, so $C = 120^\\circ$. The two base angles share the remaining $60^\\circ$ equally: $30^\\circ$ each. Then the area formula gives Area $= \\frac{1}{2} \\cdot 5 \\cdot 5 \\cdot \\sin 120^\\circ = \\frac{25}{2} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{25\\sqrt{3}}{4}$. Every tool from this chapter in one triangle!',
  },
]

export default {
  id: 'intro-geometry-ch18',
  book: 'intro-geometry',
  number: 18,
  title: 'Introduction to Trigonometry',
  intro:
    'You have measured triangles with the Pythagorean Theorem and matched them with similarity — now those two ideas fuse into something more powerful. Trigonometry attaches a number to every angle, letting you compute sides you could never reach with a ruler: cliff heights, kite altitudes, and any triangle at all, right-angled or not. By the end of this chapter, three sides or a couple of angles will be all you need to unlock a triangle completely.',
  sections: [s181, s182, s183],
  challenge,
  worksheet,
}
