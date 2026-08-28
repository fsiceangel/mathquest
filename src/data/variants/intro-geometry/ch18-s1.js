// Introduction to Geometry chapter 18 — variations for section 18.1
// (Trigonometry and Right Triangles).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is reached twice along routes that share no steps:
//    once by naming the ratio and driving it (SOH-CAH-TOA, a special-triangle
//    side pattern, an approximate decimal), and once by an independent second
//    route — trading a sine for the cosine of the complementary angle, running
//    the identity sin^2 + cos^2 = 1, scaling a whole Pythagorean triple,
//    travelling by way of the hypotenuse, or rebuilding the angle on the
//    coordinate plane instead of inside a right triangle.
//  - Figures are geometrically exact: a triangle drawn with legs 9 and 12 has
//    a hypotenuse of 15 whether or not the picture says so. Labels are plain
//    text, never LaTeX, and a figure never carries the very number the
//    question asks for — that side is marked with a question mark.
//  - Each distractor is one named mistake — a reciprocal flip, the cosine
//    sitting in sine’s seat, the wrong special angle, subtracting sides
//    instead of using the Pythagorean Theorem — and it is named in CAPS.

const s181 = [
  // s1 — read a sine straight off a fully labeled right triangle.
  [
    {
      q: 'Right triangle $PQR$ has its right angle at $Q$, with $PQ = 24$, $QR = 7$, and $PR = 25$. What is $\\sin P$?',
      fig: {
        view: [-2, -2.5, 28, 11],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [24, 7]], fill: false },
          { t: 'right', at: [24, 0], from: [0, 0], to: [24, 7] },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 10 },
          { t: 'point', p: [24, 0], label: 'Q', dx: 10, dy: 12 },
          { t: 'point', p: [24, 7], label: 'R', dx: 10, dy: -8 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [24, 3.5], text: '7', dx: 12, dy: 0 },
          { t: 'label', p: [12, 3.5], text: '25', dx: -10, dy: -8 },
        ],
      },
      choices: ['$\\frac{24}{25}$', '$\\frac{7}{24}$', '$\\frac{17}{25}$', '$\\frac{7}{25}$'],
      answer: 3,
      solution:
        'Route one, sort the sides from the corner at $P$ and apply SOH: the side lying across the triangle from $P$ is $QR = 7$, and the longest side is $PR = 25$, so $\\sin P = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{7}{25}$ ✓. Check a second, independent way, by moving to the other acute angle: the two acute angles of a right triangle add to $90^\\circ$, and complementary angles trade sine for cosine, so $\\sin P = \\cos R$. Seen from $R$, the leg touching it is $QR = 7$ and the hypotenuse is still $25$, so $\\cos R = \\frac{7}{25}$ — the same value, reached without ever calling $7$ the opposite side ✓. (The choice $\\frac{24}{25}$ is COSINE SITTING IN SINE’S SEAT, adjacent over hypotenuse ✗; the choice $\\frac{7}{24}$ is USING THE ADJACENT LEG AS THE DENOMINATOR, which builds $\\tan P$ instead ✗; the choice $\\frac{17}{25}$ is SUBTRACTING THE LEGS INSTEAD OF SORTING THEM, treating $24 - 7 = 17$ as the side that faces $P$ ✗.)',
    },
    {
      q: 'Right triangle $DEF$ has its right angle at $E$, with $DE = 15$, $EF = 8$, and $DF = 17$. What is $\\sin D$?',
      fig: {
        view: [-2, -2.5, 18, 12],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [15, 8]], fill: false },
          { t: 'right', at: [15, 0], from: [0, 0], to: [15, 8] },
          { t: 'point', p: [0, 0], label: 'D', dx: -12, dy: 10 },
          { t: 'point', p: [15, 0], label: 'E', dx: 10, dy: 12 },
          { t: 'point', p: [15, 8], label: 'F', dx: 10, dy: -8 },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [15, 4], text: '8', dx: 12, dy: 0 },
          { t: 'label', p: [7.5, 4], text: '17', dx: -10, dy: -8 },
        ],
      },
      choices: ['$\\frac{15}{17}$', '$\\frac{8}{17}$', '$\\frac{8}{15}$', '$\\frac{7}{17}$'],
      answer: 1,
      solution:
        'Route one, sort the sides from the corner at $D$ and apply SOH: the side across from $D$ is $EF = 8$ and the hypotenuse is $DF = 17$, so $\\sin D = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{8}{17}$ ✓. Check a second, independent way, without ever naming an opposite side: the leg touching $D$ is $DE = 15$, so $\\cos D = \\frac{15}{17}$, and the identity $\\sin^2 D + \\cos^2 D = 1$ turns that into $\\sin^2 D = 1 - \\frac{225}{289} = \\frac{64}{289}$. An acute angle has a positive sine, so $\\sin D = \\sqrt{\\frac{64}{289}} = \\frac{8}{17}$ ✓. (The choice $\\frac{15}{17}$ is COSINE SITTING IN SINE’S SEAT, adjacent over hypotenuse ✗; the choice $\\frac{8}{15}$ is USING THE ADJACENT LEG AS THE DENOMINATOR, which builds $\\tan D$ instead ✗; the choice $\\frac{7}{17}$ is SUBTRACTING THE LEGS AND DIVIDING THE DIFFERENCE BY THE HYPOTENUSE, taking $15 - 8 = 7$ as the opposite side ✗.)',
    },
    {
      q: 'Right triangle $JKL$ has its right angle at $K$, with $JK = 21$, $KL = 20$, and $JL = 29$. What is $\\sin J$?',
      fig: {
        view: [-2.5, -3, 26, 25],
        elems: [
          { t: 'poly', pts: [[0, 0], [21, 0], [21, 20]], fill: false },
          { t: 'right', at: [21, 0], from: [0, 0], to: [21, 20] },
          { t: 'point', p: [0, 0], label: 'J', dx: -12, dy: 10 },
          { t: 'point', p: [21, 0], label: 'K', dx: 10, dy: 12 },
          { t: 'point', p: [21, 20], label: 'L', dx: 10, dy: -8 },
          { t: 'label', p: [10.5, 0], text: '21', dx: 0, dy: 14 },
          { t: 'label', p: [21, 10], text: '20', dx: 14, dy: 0 },
          { t: 'label', p: [10.5, 10], text: '29', dx: -12, dy: -8 },
        ],
      },
      choices: ['$\\frac{20}{29}$', '$\\frac{21}{29}$', '$\\frac{20}{21}$', '$\\frac{20}{41}$'],
      answer: 0,
      solution:
        'Route one, sort the sides from the corner at $J$ and apply SOH: the side across from $J$ is $KL = 20$ and the hypotenuse is $JL = 29$, so $\\sin J = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{20}{29}$ ✓. Check a second, independent way, without ever naming an opposite side: the leg touching $J$ is $JK = 21$, so CAH gives $\\cos J = \\frac{21}{29}$, and the identity $\\sin^2 J + \\cos^2 J = 1$ turns that into $\\sin^2 J = 1 - \\frac{441}{841} = \\frac{400}{841}$. An acute angle has a positive sine, so $\\sin J = \\sqrt{\\frac{400}{841}} = \\frac{20}{29}$ ✓. (The choice $\\frac{21}{29}$ is COSINE SITTING IN SINE’S SEAT, adjacent over hypotenuse ✗; the choice $\\frac{20}{21}$ is USING THE ADJACENT LEG AS THE DENOMINATOR, which builds $\\tan J$ instead ✗; the choice $\\frac{20}{41}$ is DIVIDING BY THE SUM OF THE LEGS, $21 + 20$, where a sine divides by the hypotenuse ✗.)',
    },
  ],
  // s2 — an exact value pulled from a special triangle.
  [
    {
      q: 'Give the exact value of $\\sin 45^\\circ$.',
      fig: {
        view: [-0.4, -0.5, 1.8, 1.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [1, 0], [1, 1]], fill: false },
          { t: 'right', at: [1, 0], from: [0, 0], to: [1, 1] },
          { t: 'angle', at: [0, 0], from: [1, 0], to: [1, 1], r: 0.32, label: '45' },
          { t: 'label', p: [0.5, 0], text: '1', dx: 0, dy: 14 },
          { t: 'label', p: [1, 0.5], text: '1', dx: 10, dy: 0 },
        ],
      },
      choices: ['$1$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$'],
      answer: 1,
      solution:
        'Route one, build the special triangle: a right triangle with two $45^\\circ$ angles is isosceles, so give it legs of $1$ and $1$. The Pythagorean Theorem makes its hypotenuse $\\sqrt{1 + 1} = \\sqrt{2}$, and the leg across from a $45^\\circ$ angle is $1$, so $\\sin 45^\\circ = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$ ✓. Check a second, independent way, with the identity and no picture at all: since $45^\\circ$ is its own complement, $\\sin 45^\\circ = \\cos 45^\\circ$. Feeding that into $\\sin^2 45^\\circ + \\cos^2 45^\\circ = 1$ gives $2\\sin^2 45^\\circ = 1$, so $\\sin^2 45^\\circ = \\frac{1}{2}$ and the positive root is $\\sin 45^\\circ = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$ ✓. (The choice $1$ is REPORTING $\\tan 45^\\circ$, the ratio of the two equal legs ✗; the choice $\\frac{\\sqrt{3}}{2}$ is BORROWING FROM THE $30$-$60$-$90$ TRIANGLE, where it is $\\sin 60^\\circ$ ✗; the choice $\\frac{1}{2}$ is BORROWING $\\sin 30^\\circ$ from that same wrong triangle ✗.)',
    },
    {
      q: 'Give the exact value of $\\tan 60^\\circ$.',
      fig: {
        view: [-0.4, -0.5, 2.1, 2.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [1, 0], [1, 1.732]], fill: false },
          { t: 'right', at: [1, 0], from: [0, 0], to: [1, 1.732] },
          { t: 'angle', at: [0, 0], from: [1, 0], to: [1, 1.732], r: 0.34, label: '60' },
          { t: 'label', p: [0.5, 0], text: '1', dx: 0, dy: 14 },
          { t: 'label', p: [0.5, 0.866], text: '2', dx: -10, dy: -6 },
        ],
      },
      choices: ['$\\frac{\\sqrt{3}}{3}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$', '$\\sqrt{3}$'],
      answer: 3,
      solution:
        'Route one, build the special triangle: half of an equilateral triangle of side $2$ is a right triangle with hypotenuse $2$ and shorter leg $1$, and its acute angles are $60^\\circ$ and $30^\\circ$. The third side is $\\sqrt{2^2 - 1^2} = \\sqrt{3}$. Standing at the $60^\\circ$ corner, the opposite side is $\\sqrt{3}$ and the adjacent leg is $1$, so $\\tan 60^\\circ = \\frac{\\sqrt{3}}{1} = \\sqrt{3}$ ✓. Check a second, independent way, on the coordinate plane, with no side ratios read off that triangle: place the $60^\\circ$ angle in standard position, its vertex at the origin and one side along the positive $x$-axis, and let it be a corner of an equilateral triangle whose other two vertices are $(2, 0)$ and an apex $P$. Since $P$ is $2$ units from $(0,0)$ and $2$ units from $(2,0)$, it sits on the vertical line $x = 1$, and the distance formula gives $1^2 + y^2 = 2^2$, so $y = \\sqrt{3}$ and $P = \\left(1, \\sqrt{3}\\right)$. The tangent of an angle in standard position is the slope of its terminal ray, and the ray from the origin through $P$ has slope $\\frac{\\sqrt{3} - 0}{1 - 0} = \\sqrt{3}$ ✓. (The choice $\\frac{\\sqrt{3}}{3}$ is TAKING THE TANGENT AT THE OTHER CORNER, since $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$ ✗; the choice $\\frac{\\sqrt{3}}{2}$ is HANDING BACK $\\sin 60^\\circ$, which divides by the hypotenuse rather than the adjacent leg ✗; the choice $\\frac{1}{2}$ is HANDING BACK $\\cos 60^\\circ$ instead of the tangent ✗.)',
    },
    {
      q: 'Give the exact value of $\\cos 60^\\circ$.',
      fig: {
        view: [-0.5, -0.6, 2.7, 2.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [2, 0], [1, 1.732]], fill: false },
          { t: 'seg', a: [1, 1.732], b: [1, 0], dash: true },
          { t: 'right', at: [1, 0], from: [0, 0], to: [1, 1.732] },
          { t: 'angle', at: [0, 0], from: [2, 0], to: [1, 1.732], r: 0.38, label: '60' },
          { t: 'label', p: [0.5, 0.866], text: '2', dx: -10, dy: -6 },
          { t: 'label', p: [1.5, 0.866], text: '2', dx: 12, dy: -6 },
          { t: 'label', p: [0.5, 0], text: '1', dx: 0, dy: 16 },
          { t: 'label', p: [1.5, 0], text: '1', dx: 0, dy: 16 },
        ],
      },
      choices: ['$\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{1}{2}$', '$\\sqrt{3}$'],
      answer: 2,
      solution:
        'Route one, fold an equilateral triangle in half: every angle of an equilateral triangle is $60^\\circ$, and the dashed altitude cuts the bottom side into the two equal pieces marked in the picture, so it splits the shape into two right triangles with hypotenuse $2$ and short leg $\\frac{2}{2} = 1$. Standing at the $60^\\circ$ corner, that short leg is the adjacent one, so $\\cos 60^\\circ = \\frac{1}{2}$ ✓. Check a second, independent way, through complementary angles: $60^\\circ$ and $30^\\circ$ add to $90^\\circ$, and a cosine equals the sine of the complement, so $\\cos 60^\\circ = \\sin 30^\\circ$. In any right triangle the side facing a $30^\\circ$ angle is exactly half the hypotenuse, which makes $\\sin 30^\\circ = \\frac{1}{2}$, and so $\\cos 60^\\circ = \\frac{1}{2}$ ✓. (The choice $\\frac{\\sqrt{3}}{2}$ is READING THE SINE INSTEAD OF THE COSINE at this corner ✗; the choice $\\frac{\\sqrt{2}}{2}$ is BORROWING FROM THE $45$-$45$-$90$ TRIANGLE, the wrong special triangle for a $60^\\circ$ angle ✗; the choice $\\sqrt{3}$ is HANDING BACK $\\tan 60^\\circ$, opposite over adjacent, instead of the cosine ✗.)',
    },
  ],
  // s3 — name the ratio behind a trig function.
  [
    {
      q: 'For an acute angle $\\theta$ in a right triangle, $\\sin\\theta$ equals which ratio of sides?',
      choices: [
        '$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$',
        '$\\frac{\\text{opposite}}{\\text{adjacent}}$',
        '$\\frac{\\text{opposite}}{\\text{hypotenuse}}$',
        '$\\frac{\\text{adjacent}}{\\text{opposite}}$',
      ],
      answer: 2,
      solution:
        'Route one, unpack the chant: SOH-CAH-TOA opens with SOH, which is Sine equals Opposite over Hypotenuse ✓. Check a second, independent way, by testing the four candidates on an angle whose sine we already know: in the $30$-$60$-$90$ triangle with sides $1$, $\\sqrt{3}$, $2$, the angle $30^\\circ$ has opposite $1$, adjacent $\\sqrt{3}$, and hypotenuse $2$, while $\\sin 30^\\circ = \\frac{1}{2}$. Only one candidate produces $\\frac{1}{2}$ here: opposite over hypotenuse gives $\\frac{1}{2}$, while the others give $\\frac{\\sqrt{3}}{2}$, $\\frac{1}{\\sqrt{3}}$, and $\\sqrt{3}$ ✓. (The choice $\\frac{\\text{adjacent}}{\\text{hypotenuse}}$ is READING CAH INSTEAD OF SOH, which defines $\\cos\\theta$ ✗; the choice $\\frac{\\text{opposite}}{\\text{adjacent}}$ is READING TOA INSTEAD OF SOH, which defines $\\tan\\theta$ ✗; the choice $\\frac{\\text{adjacent}}{\\text{opposite}}$ is TOA UPSIDE DOWN, which is $\\frac{1}{\\tan\\theta}$ ✗.)',
    },
    {
      q: 'For an acute angle $\\theta$ in a right triangle, $\\cos\\theta$ equals which ratio of sides?',
      choices: [
        '$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$',
        '$\\frac{\\text{opposite}}{\\text{hypotenuse}}$',
        '$\\frac{\\text{adjacent}}{\\text{opposite}}$',
        '$\\frac{\\text{opposite}}{\\text{adjacent}}$',
      ],
      answer: 0,
      solution:
        'Route one, unpack the chant: the middle syllable of SOH-CAH-TOA is CAH, which is Cosine equals Adjacent over Hypotenuse ✓. Check a second, independent way, by testing the four candidates on an angle whose cosine we already know: in the $30$-$60$-$90$ triangle with sides $1$, $\\sqrt{3}$, $2$, the angle $60^\\circ$ has opposite $\\sqrt{3}$, adjacent $1$, and hypotenuse $2$, while $\\cos 60^\\circ = \\frac{1}{2}$. Adjacent over hypotenuse gives exactly $\\frac{1}{2}$; the other three give $\\frac{\\sqrt{3}}{2}$, $\\frac{1}{\\sqrt{3}}$, and $\\sqrt{3}$, so only one candidate survives ✓. (The choice $\\frac{\\text{opposite}}{\\text{hypotenuse}}$ is READING SOH INSTEAD OF CAH, which defines $\\sin\\theta$ ✗; the choice $\\frac{\\text{adjacent}}{\\text{opposite}}$ is KEEPING THE ADJACENT LEG ON TOP BUT LOSING THE HYPOTENUSE, which is $\\frac{1}{\\tan\\theta}$ ✗; the choice $\\frac{\\text{opposite}}{\\text{adjacent}}$ is READING TOA INSTEAD OF CAH, which defines $\\tan\\theta$ ✗.)',
    },
    {
      q: 'For an acute angle $\\theta$ in a right triangle, $\\frac{\\cos\\theta}{\\sin\\theta}$ equals which ratio of sides?',
      choices: [
        '$\\frac{\\text{opposite}}{\\text{hypotenuse}}$',
        '$\\frac{\\text{hypotenuse}}{\\text{adjacent}}$',
        '$\\frac{\\text{opposite}}{\\text{adjacent}}$',
        '$\\frac{\\text{adjacent}}{\\text{opposite}}$',
      ],
      answer: 3,
      solution:
        'Route one, expand each piece with SOH-CAH-TOA: $\\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}$ and $\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}$, so the quotient is $\\frac{\\text{adj}/\\text{hyp}}{\\text{opp}/\\text{hyp}}$. Dividing by a fraction multiplies by its reciprocal, and the two copies of the hypotenuse cancel, leaving $\\frac{\\text{adjacent}}{\\text{opposite}}$ ✓. Check a second, independent way, by testing the four candidates on an angle whose sine and cosine we already know: in the $30$-$60$-$90$ triangle with sides $1$, $\\sqrt{3}$, $2$, the angle $60^\\circ$ has opposite $\\sqrt{3}$, adjacent $1$, and hypotenuse $2$, so $\\frac{\\cos 60^\\circ}{\\sin 60^\\circ} = \\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}}$. Only adjacent over opposite matches that value here; the other three give $\\frac{\\sqrt{3}}{2}$, $2$, and $\\sqrt{3}$ ✓. (The choice $\\frac{\\text{opposite}}{\\text{hypotenuse}}$ is HANDING BACK $\\sin\\theta$, the very ratio sitting in the denominator ✗; the choice $\\frac{\\text{hypotenuse}}{\\text{adjacent}}$ is FLIPPING THE COSINE BY MISTAKE, since $\\frac{1}{\\cos\\theta} = \\frac{\\text{hyp}}{\\text{adj}}$ ✗; the choice $\\frac{\\text{opposite}}{\\text{adjacent}}$ is DIVIDING THE WRONG WAY ROUND, which builds $\\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$ ✗.)',
    },
  ],
  // s4 — hypotenuse plus one acute angle, find a named side.
  [
    {
      q: 'A right triangle has a hypotenuse of $20$ and an acute angle of $60^\\circ$. How long is the side opposite the $60^\\circ$ angle?',
      fig: {
        view: [-2, -2, 14.5, 20],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 17.321]], fill: false },
          { t: 'right', at: [10, 0], from: [0, 0], to: [10, 17.321] },
          { t: 'angle', at: [0, 0], from: [10, 0], to: [10, 17.321], r: 1.8, label: '60' },
          { t: 'label', p: [5, 8.66], text: '20', dx: -10, dy: -8 },
          { t: 'label', p: [10, 8.66], text: '?', dx: 12, dy: 0 },
        ],
      },
      choices: ['$10\\sqrt{3}$', '$10$', '$\\frac{20\\sqrt{3}}{3}$', '$10\\sqrt{2}$'],
      answer: 0,
      solution:
        'Route one, opposite and hypotenuse means sine: $\\sin 60^\\circ = \\frac{\\text{opp}}{20}$, so opp $= 20\\sin 60^\\circ = 20 \\cdot \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}$ ✓. Check a second, independent way, with side patterns and the Pythagorean Theorem: the acute angles here are $60^\\circ$ and $30^\\circ$, and the side facing a $30^\\circ$ angle is always half the hypotenuse, so the other leg is $\\frac{20}{2} = 10$. The leg we want is then $\\sqrt{20^2 - 10^2} = \\sqrt{400 - 100} = \\sqrt{300} = 10\\sqrt{3}$ ✓. (The choice $10$ is MEASURING THE WRONG LEG, the one facing the $30^\\circ$ angle ✗; the choice $\\frac{20\\sqrt{3}}{3}$ is DIVIDING BY $\\sqrt{3}$ INSTEAD OF MULTIPLYING BY $\\frac{\\sqrt{3}}{2}$, which turns the sine upside down ✗; the choice $10\\sqrt{2}$ is USING $\\sin 45^\\circ$, the value from the wrong special triangle ✗.)',
    },
    {
      q: 'A right triangle has a hypotenuse of $18$ and an acute angle of $45^\\circ$. How long is each leg?',
      fig: {
        view: [-2, -2, 16.5, 16],
        elems: [
          { t: 'poly', pts: [[0, 0], [12.728, 0], [12.728, 12.728]], fill: false },
          { t: 'right', at: [12.728, 0], from: [0, 0], to: [12.728, 12.728] },
          { t: 'angle', at: [0, 0], from: [12.728, 0], to: [12.728, 12.728], r: 2, label: '45' },
          { t: 'label', p: [6.364, 6.364], text: '18', dx: -10, dy: -8 },
          { t: 'label', p: [12.728, 6.364], text: '?', dx: 12, dy: 0 },
        ],
      },
      choices: ['$9$', '$\\frac{9\\sqrt{2}}{2}$', '$9\\sqrt{2}$', '$9\\sqrt{3}$'],
      answer: 2,
      solution:
        'Route one, adjacent and hypotenuse means cosine: $\\cos 45^\\circ = \\frac{\\text{leg}}{18}$, so leg $= 18\\cos 45^\\circ = 18 \\cdot \\frac{\\sqrt{2}}{2} = 9\\sqrt{2}$ ✓. Check a second, independent way, straight from the Pythagorean Theorem: if one acute angle is $45^\\circ$ the other is $90^\\circ - 45^\\circ = 45^\\circ$ as well, so the triangle is isosceles and both legs share a length $x$. Then $x^2 + x^2 = 18^2$, so $2x^2 = 324$, $x^2 = 162$, and $x = \\sqrt{162} = \\sqrt{81 \\cdot 2} = 9\\sqrt{2}$ ✓. (The choice $9$ is HALVING THE HYPOTENUSE, a rule that belongs to the side facing $30^\\circ$, not to a $45^\\circ$ triangle ✗; the choice $\\frac{9\\sqrt{2}}{2}$ is HALVING A SECOND TIME, applying $\\frac{\\sqrt{2}}{2}$ to a hypotenuse that has already been cut in half ✗; the choice $9\\sqrt{3}$ is BORROWING FROM THE $30$-$60$-$90$ TRIANGLE, the wrong special triangle ✗.)',
    },
    {
      q: 'A right triangle has a hypotenuse of $24$ and an acute angle of $30^\\circ$. How long is the side adjacent to the $30^\\circ$ angle?',
      fig: {
        view: [-2, -3, 24.5, 15],
        elems: [
          { t: 'poly', pts: [[0, 0], [20.785, 0], [20.785, 12]], fill: false },
          { t: 'right', at: [20.785, 0], from: [0, 0], to: [20.785, 12] },
          { t: 'angle', at: [0, 0], from: [20.785, 0], to: [20.785, 12], r: 2.6, label: '30' },
          { t: 'label', p: [10.39, 6], text: '24', dx: -10, dy: -8 },
          { t: 'label', p: [10.39, 0], text: '?', dx: 0, dy: 16 },
        ],
      },
      choices: ['$12$', '$12\\sqrt{3}$', '$8\\sqrt{3}$', '$12\\sqrt{2}$'],
      answer: 1,
      solution:
        'Route one, adjacent and hypotenuse means cosine: $\\cos 30^\\circ = \\frac{\\text{adj}}{24}$, so adj $= 24\\cos 30^\\circ = 24 \\cdot \\frac{\\sqrt{3}}{2} = 12\\sqrt{3}$ ✓. Check a second, independent way, with side patterns and the Pythagorean Theorem: the side facing the $30^\\circ$ angle is half the hypotenuse, so that leg is $\\frac{24}{2} = 12$. The adjacent leg is the remaining side, $\\sqrt{24^2 - 12^2} = \\sqrt{576 - 144} = \\sqrt{432} = \\sqrt{144 \\cdot 3} = 12\\sqrt{3}$ ✓. (The choice $12$ is MEASURING THE WRONG LEG, the short one facing the $30^\\circ$ angle rather than the one touching it ✗; the choice $8\\sqrt{3}$ is MULTIPLYING BY $\\tan 30^\\circ$ INSTEAD OF $\\cos 30^\\circ$, reaching for the one ratio that never touches the hypotenuse ✗; the choice $12\\sqrt{2}$ is USING $\\cos 45^\\circ$, the value from the wrong special triangle ✗.)',
    },
  ],
  // s5 — a word problem solved with approximate sine and cosine values.
  [
    {
      q: 'A straight escalator runs $35$ meters from end to end and climbs at a $37^\\circ$ angle to the level floor. Given $\\sin 37^\\circ \\approx 0.6$ and $\\cos 37^\\circ \\approx 0.8$, about how many meters of floor does the escalator span horizontally?',
      fig: {
        view: [-3, -4, 33, 26],
        elems: [
          { t: 'poly', pts: [[0, 0], [28, 0], [28, 21]], fill: false },
          { t: 'right', at: [28, 0], from: [0, 0], to: [28, 21] },
          { t: 'angle', at: [0, 0], from: [28, 0], to: [28, 21], r: 4, label: '37' },
          { t: 'label', p: [14, 10.5], text: '35', dx: -10, dy: -10 },
          { t: 'label', p: [14, 0], text: '?', dx: 0, dy: 16 },
        ],
      },
      choices: ['$21$', '$22.4$', '$28$', '$14$'],
      answer: 2,
      solution:
        'Route one, the horizontal span lies alongside the $37^\\circ$ angle while the escalator itself is the hypotenuse, so cosine is the tool: span $= 35\\cos 37^\\circ \\approx 35 \\times 0.8 = 28$ meters ✓. Check a second, independent way, by scaling a triangle we already know: the three sides sit in the ratio $0.6 : 0.8 : 1$, which is the ratio $3 : 4 : 5$ with everything divided by $5$. So this is a $3$-$4$-$5$ triangle in disguise, and a hypotenuse of $35 = 5 \\times 7$ means every unit is worth $7$: the span is $4 \\times 7 = 28$ and the climb is $3 \\times 7 = 21$. The Pythagorean Theorem confirms the fit, since $21^2 + 28^2 = 441 + 784 = 1225 = 35^2$ ✓. (The choice $21$ is REACHING FOR THE SINE, which measures the climb and not the floor covered ✗; the choice $22.4$ is MULTIPLYING BY THE COSINE TWICE, running $35 \\times 0.8 \\times 0.8$ ✗; the choice $14$ is SUBTRACTING THE CLIMB FROM THE FULL RUN OF THE ESCALATOR, as though $35 - 21$ measured the floor ✗.)',
    },
    {
      q: 'A guy wire $50$ meters long runs from a stake in level ground up to a point on a radio mast, meeting the ground at a $53^\\circ$ angle. Given $\\sin 53^\\circ \\approx 0.8$ and $\\cos 53^\\circ \\approx 0.6$, about how many meters up the mast does the wire reach?',
      fig: {
        view: [-4, -5, 41, 47],
        elems: [
          { t: 'poly', pts: [[0, 0], [30, 0], [30, 40]], fill: false },
          { t: 'right', at: [30, 0], from: [0, 0], to: [30, 40] },
          { t: 'angle', at: [0, 0], from: [30, 0], to: [30, 40], r: 4.5, label: '53' },
          { t: 'label', p: [15, 20], text: '50', dx: -10, dy: -10 },
          { t: 'label', p: [30, 20], text: '?', dx: 14, dy: 0 },
        ],
      },
      choices: ['$40$', '$30$', '$32$', '$20$'],
      answer: 0,
      solution:
        'Route one, the height stands opposite the $53^\\circ$ angle while the wire is the hypotenuse, so sine is the tool: height $= 50\\sin 53^\\circ \\approx 50 \\times 0.8 = 40$ meters ✓. Check a second, independent way, by scaling a triangle we already know: the sides sit in the ratio $0.6 : 0.8 : 1$, which is $3 : 4 : 5$ shrunk by a factor of $5$. A hypotenuse of $50 = 5 \\times 10$ makes every unit worth $10$, so the height is $4 \\times 10 = 40$ and the ground distance is $3 \\times 10 = 30$. The Pythagorean Theorem confirms it, since $30^2 + 40^2 = 900 + 1600 = 2500 = 50^2$ ✓. (The choice $30$ is REACHING FOR THE COSINE, which measures how far the stake sits from the foot of the mast and not how high the wire climbs ✗; the choice $32$ is MULTIPLYING BY THE SINE TWICE, running $50 \\times 0.8 \\times 0.8$ ✗; the choice $20$ is SUBTRACTING THE GROUND DISTANCE FROM THE WIRE, as though $50 - 30$ measured height ✗.)',
    },
    {
      q: 'A zip line $45$ meters long runs in a straight path that meets the ground at a $37^\\circ$ angle. Given $\\sin 37^\\circ \\approx 0.6$ and $\\cos 37^\\circ \\approx 0.8$, about how many meters does a rider descend from the top platform to the ground?',
      fig: {
        view: [-4, -5, 42, 34],
        elems: [
          { t: 'poly', pts: [[0, 0], [36, 0], [36, 27]], fill: false },
          { t: 'right', at: [36, 0], from: [0, 0], to: [36, 27] },
          { t: 'angle', at: [0, 0], from: [36, 0], to: [36, 27], r: 5, label: '37' },
          { t: 'label', p: [18, 13.5], text: '45', dx: -10, dy: -10 },
          { t: 'label', p: [36, 13.5], text: '?', dx: 14, dy: 0 },
        ],
      },
      choices: ['$36$', '$75$', '$9$', '$27$'],
      answer: 3,
      solution:
        'Route one, the drop stands opposite the $37^\\circ$ angle while the zip line is the hypotenuse, so sine is the tool: drop $= 45\\sin 37^\\circ \\approx 45 \\times 0.6 = 27$ meters ✓. Check a second, independent way, by scaling a triangle we already know: the sides sit in the ratio $0.6 : 0.8 : 1$, the $3 : 4 : 5$ pattern shrunk by a factor of $5$. A hypotenuse of $45 = 5 \\times 9$ makes each unit worth $9$, so the drop is $3 \\times 9 = 27$ and the ground run is $4 \\times 9 = 36$. The Pythagorean Theorem confirms it, since $27^2 + 36^2 = 729 + 1296 = 2025 = 45^2$ ✓. (The choice $36$ is REACHING FOR THE COSINE, which measures the ground the rider travels over and not the height lost ✗; the choice $75$ is DIVIDING BY THE SINE INSTEAD OF MULTIPLYING, and the drop cannot exceed the $45$-meter line ✗; the choice $9$ is SUBTRACTING THE GROUND RUN FROM THE LINE, as though $45 - 36$ measured the drop ✗.)',
    },
  ],
  // s6 — a named special triangle with one side given.
  [
    {
      q: 'A $45$-$45$-$90$ triangle has a hypotenuse of length $14$. How long is each of its legs?',
      fig: {
        view: [-1.5, -1.5, 13, 12],
        elems: [
          { t: 'poly', pts: [[0, 0], [9.899, 0], [9.899, 9.899]], fill: false },
          { t: 'right', at: [9.899, 0], from: [0, 0], to: [9.899, 9.899] },
          { t: 'angle', at: [0, 0], from: [9.899, 0], to: [9.899, 9.899], r: 1.7, label: '45' },
          { t: 'tick', a: [0, 0], b: [9.899, 0], n: 1 },
          { t: 'tick', a: [9.899, 0], b: [9.899, 9.899], n: 1 },
          { t: 'label', p: [4.95, 4.95], text: '14', dx: -10, dy: -8 },
        ],
      },
      choices: ['$7$', '$\\frac{7\\sqrt{2}}{2}$', '$7\\sqrt{3}$', '$7\\sqrt{2}$'],
      answer: 3,
      solution:
        'Route one, use a trigonometric ratio: a leg sits opposite one of the $45^\\circ$ angles, so $\\sin 45^\\circ = \\frac{\\text{leg}}{14}$ and leg $= 14 \\cdot \\frac{\\sqrt{2}}{2} = 7\\sqrt{2}$ ✓. Check a second, independent way, with the Pythagorean Theorem alone: the two tick marks say the legs are equal, so call each one $x$. Then $x^2 + x^2 = 14^2$, giving $2x^2 = 196$, $x^2 = 98$, and $x = \\sqrt{49 \\cdot 2} = 7\\sqrt{2}$ ✓. That is about $9.9$, comfortably shorter than the $14$-unit hypotenuse, exactly as a leg should be. (The choice $7$ is HALVING THE HYPOTENUSE, a rule that belongs to the side facing a $30^\\circ$ angle ✗; the choice $\\frac{7\\sqrt{2}}{2}$ is HALVING ON TOP OF THE $45^\\circ$ RULE, cutting the leg down a second time after $\\frac{\\sqrt{2}}{2}$ has already scaled the hypotenuse ✗; the choice $7\\sqrt{3}$ is IMPORTING THE $30$-$60$-$90$ PATTERN into a triangle that has no $30^\\circ$ angle ✗.)',
    },
    {
      q: 'In a $30$-$60$-$90$ triangle the shorter leg measures $11$. How long is the hypotenuse?',
      fig: {
        view: [-1.5, -2, 22, 13],
        elems: [
          { t: 'poly', pts: [[0, 0], [19.053, 0], [19.053, 11]], fill: false },
          { t: 'right', at: [19.053, 0], from: [0, 0], to: [19.053, 11] },
          { t: 'angle', at: [0, 0], from: [19.053, 0], to: [19.053, 11], r: 2.4, label: '30' },
          { t: 'label', p: [19.053, 5.5], text: '11', dx: 14, dy: 0 },
          { t: 'label', p: [9.53, 5.5], text: '?', dx: -8, dy: -10 },
        ],
      },
      choices: ['$11\\sqrt{3}$', '$22$', '$11\\sqrt{2}$', '$\\frac{22\\sqrt{3}}{3}$'],
      answer: 1,
      solution:
        'Route one, use a trigonometric ratio: the shorter leg lies opposite the smallest angle, $30^\\circ$, so $\\sin 30^\\circ = \\frac{11}{\\text{hyp}}$ and hyp $= \\frac{11}{\\sin 30^\\circ} = \\frac{11}{1/2} = 22$ ✓. Check a second, independent way, by unfolding an equilateral triangle: reflecting this triangle across its longer leg glues the $30^\\circ$ angle to a copy of itself, producing a triangle whose angles are all $60^\\circ$. In that equilateral triangle the hypotenuse is a full side while the shorter leg is half of one, so the hypotenuse is $2 \\times 11 = 22$ ✓. (The choice $11\\sqrt{3}$ is MEASURING THE LONGER LEG, the side facing the $60^\\circ$ angle, rather than the hypotenuse ✗; the choice $11\\sqrt{2}$ is IMPORTING THE $45$-$45$-$90$ PATTERN into a triangle with no $45^\\circ$ angle ✗; the choice $\\frac{22\\sqrt{3}}{3}$ is DIVIDING BY $\\sin 60^\\circ$ INSTEAD OF $\\sin 30^\\circ$, pairing the shorter leg with the larger acute angle ✗.)',
    },
    {
      q: 'A $45$-$45$-$90$ triangle has a hypotenuse of length $13\\sqrt{2}$. How long is the altitude drawn from the right angle to the hypotenuse?',
      fig: {
        view: [-1.5, -1.5, 21.5, 12.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [18.385, 0], [9.192, 9.192]], fill: false },
          { t: 'right', at: [9.192, 9.192], from: [0, 0], to: [18.385, 0] },
          { t: 'angle', at: [0, 0], from: [18.385, 0], to: [9.192, 9.192], r: 2.6, label: '45' },
          { t: 'tick', a: [0, 0], b: [9.192, 9.192], n: 1 },
          { t: 'tick', a: [9.192, 9.192], b: [18.385, 0], n: 1 },
          { t: 'seg', a: [9.192, 9.192], b: [9.192, 0], dash: true },
          { t: 'right', at: [9.192, 0], from: [0, 0], to: [9.192, 9.192] },
          { t: 'label', p: [9.192, 4.596], text: '?', dx: 12, dy: 0 },
        ],
      },
      choices: ['$\\frac{13\\sqrt{2}}{2}$', '$13$', '$\\frac{13}{2}$', '$\\frac{13\\sqrt{3}}{2}$'],
      answer: 0,
      solution:
        'Route one, size a leg with a trigonometric ratio and then split the triangle: each leg lies alongside a $45^\\circ$ angle, so $\\cos 45^\\circ = \\frac{\\text{leg}}{13\\sqrt{2}}$ gives leg $= 13\\sqrt{2} \\cdot \\frac{\\sqrt{2}}{2} = 13$. The dashed altitude cuts the shape into two smaller $45$-$45$-$90$ triangles, and in the left one that altitude lies opposite a $45^\\circ$ angle while the leg $13$ has become the hypotenuse, so the altitude measures $13\\sin 45^\\circ = 13 \\cdot \\frac{\\sqrt{2}}{2} = \\frac{13\\sqrt{2}}{2}$ ✓. Check a second, independent way, with a circle and no ratios at all: a right angle inscribed in a circle cuts off a semicircle, so the three vertices lie on a circle whose diameter is the hypotenuse and whose center is the hypotenuse’s midpoint $M$. The segment from the right angle to $M$ is a radius, half the diameter, or $\\frac{13\\sqrt{2}}{2}$. The two equal legs make the triangle symmetric about that segment, so it meets the hypotenuse squarely — it is the altitude ✓. (The choice $13$ is REPORTING A LEG instead of the segment drawn to the hypotenuse ✗; the choice $\\frac{13}{2}$ is HALVING A LEG when it is the hypotenuse that gets halved ✗; the choice $\\frac{13\\sqrt{3}}{2}$ is IMPORTING THE $30$-$60$-$90$ PATTERN into a triangle with no $30^\\circ$ angle ✗.)',
    },
  ],
  // s7 — two sides given, a third ratio wanted; the missing side comes first.
  [
    {
      q: 'In a right triangle, the leg adjacent to the acute angle $A$ measures $9$ and the hypotenuse measures $41$. What is $\\sin A$?',
      choices: ['$\\frac{9}{41}$', '$\\frac{40}{41}$', '$\\frac{9}{40}$', '$\\frac{32}{41}$'],
      answer: 1,
      solution:
        'Route one, find the missing side with the Pythagorean Theorem: the leg opposite $A$ measures $\\sqrt{41^2 - 9^2} = \\sqrt{1681 - 81} = \\sqrt{1600} = 40$, so $\\sin A = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{40}{41}$ ✓. Check a second, independent way, without ever measuring the third side: the given leg touches $A$, so CAH reads $\\cos A = \\frac{9}{41}$, and the identity $\\sin^2 A + \\cos^2 A = 1$ gives $\\sin^2 A = 1 - \\frac{81}{1681} = \\frac{1600}{1681}$. An acute angle has a positive sine, so $\\sin A = \\sqrt{\\frac{1600}{1681}} = \\frac{40}{41}$ ✓. (The choice $\\frac{9}{41}$ is HANDING BACK THE GIVEN RATIO, which is $\\cos A$ rather than $\\sin A$ ✗; the choice $\\frac{9}{40}$ is PUTTING THE ADJACENT LEG OVER THE OPPOSITE ONE, which builds $\\frac{1}{\\tan A}$ ✗; the choice $\\frac{32}{41}$ is SUBTRACTING THE SIDES INSTEAD OF THEIR SQUARES, taking $41 - 9$ for the missing leg ✗.)',
    },
    {
      q: 'In a right triangle, the leg opposite the acute angle $A$ measures $7$ and the hypotenuse measures $25$. What is $\\cos A$?',
      fig: {
        view: [-3, -2.5, 28, 11],
        elems: [
          { t: 'poly', pts: [[24, 0], [0, 0], [0, 7]], fill: false },
          { t: 'right', at: [0, 0], from: [24, 0], to: [0, 7] },
          { t: 'point', p: [24, 0], label: 'A', dx: 10, dy: 12 },
          { t: 'label', p: [0, 3.5], text: '7', dx: -12, dy: 0 },
          { t: 'label', p: [12, 3.5], text: '25', dx: 6, dy: -8 },
        ],
      },
      choices: ['$\\frac{7}{25}$', '$\\frac{7}{24}$', '$\\frac{18}{25}$', '$\\frac{24}{25}$'],
      answer: 3,
      solution:
        'Route one, find the missing side with the Pythagorean Theorem: the leg touching $A$ measures $\\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$, so $\\cos A = \\frac{\\text{adj}}{\\text{hyp}} = \\frac{24}{25}$ ✓. Check a second, independent way, without measuring any side: we already know $\\sin A = \\frac{7}{25}$, and the identity $\\sin^2 A + \\cos^2 A = 1$ gives $\\cos^2 A = 1 - \\frac{49}{625} = \\frac{576}{625}$. The cosine of an acute angle is positive, so $\\cos A = \\frac{24}{25}$ ✓. (The choice $\\frac{7}{25}$ is HANDING BACK THE GIVEN RATIO, which is $\\sin A$ rather than $\\cos A$ ✗; the choice $\\frac{7}{24}$ is DIVIDING THE OPPOSITE LEG BY THE ADJACENT ONE, which builds $\\tan A$ rather than the cosine ✗; the choice $\\frac{18}{25}$ is SUBTRACTING THE SIDES INSTEAD OF THEIR SQUARES, taking $25 - 7$ for the missing leg ✗.)',
    },
    {
      q: 'In a right triangle, the leg adjacent to the acute angle $A$ measures $12$ and the hypotenuse measures $37$. What is $\\tan A$?',
      choices: ['$\\frac{12}{35}$', '$\\frac{35}{37}$', '$\\frac{35}{12}$', '$\\frac{25}{12}$'],
      answer: 2,
      solution:
        'Route one, find the missing side with the Pythagorean Theorem: the leg opposite $A$ measures $\\sqrt{37^2 - 12^2} = \\sqrt{1369 - 144} = \\sqrt{1225} = 35$, so $\\tan A = \\frac{\\text{opp}}{\\text{adj}} = \\frac{35}{12}$ ✓. Check a second, independent way, without measuring the third side at all: the given leg touches $A$, so CAH reads $\\cos A = \\frac{12}{37}$, and the identity $\\sin^2 A + \\cos^2 A = 1$ gives $\\sin^2 A = 1 - \\frac{144}{1369} = \\frac{1225}{1369}$, so an acute $A$ has $\\sin A = \\frac{35}{37}$. The quotient identity finishes it: $\\tan A = \\frac{\\sin A}{\\cos A} = \\frac{35/37}{12/37} = \\frac{35}{12}$ ✓. (The choice $\\frac{12}{35}$ is A RECIPROCAL FLIP, adjacent over opposite ✗; the choice $\\frac{35}{37}$ is DIVIDING BY THE HYPOTENUSE, which builds $\\sin A$ rather than the tangent ✗; the choice $\\frac{25}{12}$ is SUBTRACTING THE SIDES INSTEAD OF THEIR SQUARES, taking $37 - 12$ for the missing leg ✗.)',
    },
  ],
  // s8 — a ladder leaning on a wall, with a different piece missing each time.
  [
    {
      q: 'The foot of a straight ladder rests $9$ meters from the base of a wall, and the ladder makes a $30^\\circ$ angle with the level ground. Exactly how high up the wall does the ladder reach?',
      fig: {
        view: [-2, -2, 13.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [9, 5.196]], fill: false },
          { t: 'right', at: [9, 0], from: [0, 0], to: [9, 5.196] },
          { t: 'angle', at: [0, 0], from: [9, 0], to: [9, 5.196], r: 1.8, label: '30' },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [9, 2.6], text: '?', dx: 12, dy: 0 },
        ],
      },
      choices: ['$3\\sqrt{3}$', '$\\frac{9}{2}$', '$9\\sqrt{3}$', '$6\\sqrt{3}$'],
      answer: 0,
      solution:
        'Route one, the height is opposite the $30^\\circ$ angle and the $9$ meters is the leg beside it, so opposite over adjacent means tangent: height $= 9\\tan 30^\\circ = 9 \\cdot \\frac{\\sqrt{3}}{3} = 3\\sqrt{3}$ meters ✓. Check a second, independent way, by travelling through the ladder itself: the $9$ meters is adjacent to the angle and the ladder is the hypotenuse, so $\\cos 30^\\circ = \\frac{9}{L}$ gives $L = \\frac{9}{\\sqrt{3}/2} = \\frac{18}{\\sqrt{3}} = 6\\sqrt{3}$. Now the height is opposite that same angle with the ladder as hypotenuse: height $= L\\sin 30^\\circ = 6\\sqrt{3} \\cdot \\frac{1}{2} = 3\\sqrt{3}$ ✓. About $5.2$ meters — sensibly less than the ground distance, since the ladder leans shallow. (The choice $\\frac{9}{2}$ is TREATING THE $9$ AS THE LADDER, computing $9\\sin 30^\\circ$ when the $9$ runs along the ground ✗; the choice $9\\sqrt{3}$ is USING THE TANGENT OF THE WRONG ANGLE, $9\\tan 60^\\circ$ ✗; the choice $6\\sqrt{3}$ is STOPPING AT THE LADDER’S OWN LENGTH instead of climbing to the height ✗.)',
    },
    {
      q: 'A straight ladder $18$ meters long leans against a wall and touches the wall $9$ meters above the level ground. Exactly how far is the foot of the ladder from the wall?',
      fig: {
        view: [-2, -3, 21, 14],
        elems: [
          { t: 'poly', pts: [[0, 0], [15.588, 0], [15.588, 9]], fill: false },
          { t: 'right', at: [15.588, 0], from: [0, 0], to: [15.588, 9] },
          { t: 'label', p: [7.794, 4.5], text: '18', dx: -10, dy: -10 },
          { t: 'label', p: [15.588, 4.5], text: '9', dx: 14, dy: 0 },
          { t: 'label', p: [7.794, 0], text: '?', dx: 0, dy: 16 },
        ],
      },
      choices: ['$9$', '$3\\sqrt{3}$', '$9\\sqrt{3}$', '$\\frac{9\\sqrt{3}}{2}$'],
      answer: 2,
      solution:
        'Route one, name the angle first: the $9$ meters of wall is opposite the angle the ladder makes with the ground and the $18$-meter ladder is the hypotenuse, so $\\sin\\theta = \\frac{9}{18} = \\frac{1}{2}$ and $\\theta = 30^\\circ$. The distance we want lies beside that angle, so cosine finishes the job: distance $= 18\\cos 30^\\circ = 18 \\cdot \\frac{\\sqrt{3}}{2} = 9\\sqrt{3}$ meters ✓. Check a second, independent way, without naming any angle at all: the ladder, the wall, and the ground form a right triangle with hypotenuse $18$ and one leg $9$, so the other leg is $\\sqrt{18^2 - 9^2} = \\sqrt{324 - 81} = \\sqrt{243} = \\sqrt{81 \\cdot 3} = 9\\sqrt{3}$ ✓. About $15.6$ meters, well past the $9$ meters of climb, as a shallow lean should give. (The choice $9$ is SUBTRACTING THE SIDES INSTEAD OF THEIR SQUARES, taking $18 - 9$ for the missing leg ✗; the choice $3\\sqrt{3}$ is TREATING THE $9$ AS THE GROUND DISTANCE, computing $9\\tan 30^\\circ$ with the two known sides swapped ✗; the choice $\\frac{9\\sqrt{3}}{2}$ is HALVING ONE TIME TOO MANY, applying the half-the-hypotenuse rule to a side the cosine has already scaled ✗.)',
    },
    {
      q: 'The foot of a straight ladder rests $15$ meters from the base of a wall, and the ladder makes a $30^\\circ$ angle with the level ground. Exactly how long is the ladder?',
      fig: {
        view: [-2, -3, 20, 12],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [15, 8.66]], fill: false },
          { t: 'right', at: [15, 0], from: [0, 0], to: [15, 8.66] },
          { t: 'angle', at: [0, 0], from: [15, 0], to: [15, 8.66], r: 2.4, label: '30' },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [7.5, 4.33], text: '?', dx: -8, dy: -10 },
        ],
      },
      choices: ['$15\\sqrt{3}$', '$10\\sqrt{3}$', '$30$', '$15\\sqrt{2}$'],
      answer: 1,
      solution:
        'Route one, the $15$ meters lies beside the $30^\\circ$ angle and the ladder is the hypotenuse, so adjacent over hypotenuse means cosine: $\\cos 30^\\circ = \\frac{15}{L}$, so $L = \\frac{15}{\\sqrt{3}/2} = \\frac{30}{\\sqrt{3}} = 10\\sqrt{3}$ meters ✓. Check a second, independent way, by climbing the wall first and then squaring: the height is opposite the $30^\\circ$ angle with the ground beside it, so height $= 15\\tan 30^\\circ = 15 \\cdot \\frac{\\sqrt{3}}{3} = 5\\sqrt{3}$, and the Pythagorean Theorem hands back the ladder as $\\sqrt{15^2 + \\left(5\\sqrt{3}\\right)^2} = \\sqrt{225 + 75} = \\sqrt{300} = 10\\sqrt{3}$ ✓. About $17.3$ meters, only a little past the $15$ meters of ground, as a shallow lean demands. (The choice $15\\sqrt{3}$ is MULTIPLYING BY $\\sqrt{3}$ WHERE THE COSINE DIVIDES, running the rule backwards ✗; the choice $30$ is DIVIDING BY $\\cos 60^\\circ$ INSTEAD OF $\\cos 30^\\circ$, the value belonging to the other acute angle ✗; the choice $15\\sqrt{2}$ is IMPORTING THE $45$-$45$-$90$ PATTERN into a triangle with no $45^\\circ$ angle ✗.)',
    },
  ],
  // s9 — one ratio is given, another is wanted; no side lengths are handed over.
  [
    {
      q: 'Angle $T$ is acute and $\\cos T = \\frac{20}{29}$. What is $\\tan T$?',
      fig: {
        view: [-4, -3, 28, 26],
        elems: [
          { t: 'poly', pts: [[0, 0], [0, 20], [21, 20]], fill: false },
          { t: 'right', at: [0, 20], from: [0, 0], to: [21, 20] },
          { t: 'point', p: [0, 0], label: 'T', dx: -8, dy: 14 },
          { t: 'label', p: [0, 10], text: '20', dx: -14, dy: 0 },
          { t: 'label', p: [10.5, 10], text: '29', dx: 8, dy: 12 },
        ],
      },
      choices: ['$\\frac{20}{21}$', '$\\frac{21}{29}$', '$\\frac{21}{20}$', '$\\frac{29}{20}$'],
      answer: 2,
      solution:
        'Route one, draw the triangle the cosine describes: a leg of $20$ touching $T$ with a hypotenuse of $29$. The Pythagorean Theorem makes the third side $\\sqrt{29^2 - 20^2} = \\sqrt{841 - 400} = \\sqrt{441} = 21$, and that side lies opposite $T$, so $\\tan T = \\frac{\\text{opp}}{\\text{adj}} = \\frac{21}{20}$ ✓. Check a second, independent way, staying inside the identities: $\\sin^2 T = 1 - \\cos^2 T = 1 - \\frac{400}{841} = \\frac{441}{841}$, so $\\sin T = \\frac{21}{29}$ for an acute angle, and then $\\tan T = \\frac{\\sin T}{\\cos T} = \\frac{21/29}{20/29} = \\frac{21}{20}$ ✓. (The choice $\\frac{20}{21}$ is A RECIPROCAL FLIP, adjacent over opposite ✗; the choice $\\frac{21}{29}$ is STOPPING AT THE SINE and never dividing by the cosine ✗; the choice $\\frac{29}{20}$ is FLIPPING THE GIVEN COSINE instead of building the tangent ✗.)',
    },
    {
      q: 'Angle $W$ is acute and $\\tan W = \\frac{7}{24}$. What is $\\sin W$?',
      choices: ['$\\frac{7}{25}$', '$\\frac{24}{25}$', '$\\frac{7}{24}$', '$\\frac{7}{31}$'],
      answer: 0,
      solution:
        'Route one, draw the triangle the tangent describes: a leg of $7$ opposite $W$ and a leg of $24$ beside it. The Pythagorean Theorem makes the hypotenuse $\\sqrt{7^2 + 24^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25$, so $\\sin W = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{7}{25}$ ✓. Check a second, independent way, by solving the two identities as equations: $\\frac{\\sin W}{\\cos W} = \\frac{7}{24}$ says $\\sin W = \\frac{7}{24}\\cos W$. Substituting that into $\\sin^2 W + \\cos^2 W = 1$ gives $\\frac{49}{576}\\cos^2 W + \\cos^2 W = 1$, so $\\frac{625}{576}\\cos^2 W = 1$ and $\\cos W = \\frac{24}{25}$. Then $\\sin W = \\frac{7}{24} \\cdot \\frac{24}{25} = \\frac{7}{25}$ ✓. (The choice $\\frac{24}{25}$ is REPORTING THE COSINE, the ratio built on the adjacent leg ✗; the choice $\\frac{7}{24}$ is COPYING THE GIVEN TANGENT FORWARD, but a sine divides by the hypotenuse, not by a leg ✗; the choice $\\frac{7}{31}$ is ADDING THE LEGS INSTEAD OF SQUARING THEM, taking $7 + 24$ for the hypotenuse ✗.)',
    },
    {
      q: 'Angle $G$ is acute and $\\tan G = \\frac{5}{12}$. What is $\\sin G$?',
      fig: {
        view: [-2, -2, 17, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 5]], fill: false },
          { t: 'right', at: [12, 0], from: [0, 0], to: [12, 5] },
          { t: 'point', p: [0, 0], label: 'G', dx: -12, dy: 10 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [12, 2.5], text: '5', dx: 12, dy: 0 },
        ],
      },
      choices: ['$\\frac{12}{13}$', '$\\frac{5}{12}$', '$\\frac{5}{17}$', '$\\frac{5}{13}$'],
      answer: 3,
      solution:
        'Route one, draw the triangle the tangent describes: a leg of $5$ opposite $G$ and a leg of $12$ beside it, as in the picture. The Pythagorean Theorem makes the hypotenuse $\\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$, so $\\sin G = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{5}{13}$ ✓. Check a second, independent way, with no triangle at all: since $\\frac{\\sin G}{\\cos G} = \\frac{5}{12}$, the sine and cosine sit in the ratio $5 : 12$, so write $\\sin G = 5t$ and $\\cos G = 12t$ for some positive $t$. The identity $\\sin^2 G + \\cos^2 G = 1$ then gives $25t^2 + 144t^2 = 169t^2 = 1$, so $t = \\frac{1}{13}$ and $\\sin G = 5t = \\frac{5}{13}$ ✓. (The choice $\\frac{12}{13}$ is REPORTING THE COSINE, the ratio built on the adjacent leg ✗; the choice $\\frac{5}{12}$ is COPYING THE GIVEN TANGENT FORWARD, dividing by the adjacent leg instead of the hypotenuse ✗; the choice $\\frac{5}{17}$ is ADDING THE LEGS INSTEAD OF SQUARING THEM, taking $5 + 12$ for the hypotenuse ✗.)',
    },
  ],
  // s10 — the identity collapses an angle nobody can look up.
  [
    {
      q: 'Compute $4(\\sin^2 70^\\circ + \\cos^2 70^\\circ) - \\sin 30^\\circ$ exactly, without looking up any value at $70^\\circ$.',
      choices: ['$4$', '$\\frac{7}{2}$', '$\\frac{9}{2}$', '$\\frac{1}{2}$'],
      answer: 1,
      solution:
        'Route one, collapse the bracket with a right triangle: in a right triangle with a $70^\\circ$ angle, call the opposite leg $a$, the adjacent leg $b$, and the hypotenuse $c$. Then $\\sin^2 70^\\circ + \\cos^2 70^\\circ = \\frac{a^2}{c^2} + \\frac{b^2}{c^2} = \\frac{a^2 + b^2}{c^2} = \\frac{c^2}{c^2} = 1$ by the Pythagorean Theorem, whatever the triangle. So the expression is $4(1) - \\sin 30^\\circ = 4 - \\frac{1}{2} = \\frac{7}{2}$, using the special triangle where the side facing $30^\\circ$ is half the hypotenuse ✓. Check a second, independent way, from the unit circle: the point at $70^\\circ$ is $(\\cos 70^\\circ, \\sin 70^\\circ)$ and it sits on a circle of radius $1$ centered at the origin, so its distance to the origin is $1$; squaring the distance formula gives $\\cos^2 70^\\circ + \\sin^2 70^\\circ = 1$. The same circle puts the $30^\\circ$ point at $\\left(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$, whose height reads off $\\sin 30^\\circ = \\frac{1}{2}$, so the value is $4 - \\frac{1}{2} = \\frac{7}{2}$ ✓. (The choice $4$ is DROPPING THE SUBTRACTED TERM, as though $\\sin 30^\\circ$ were $0$ ✗; the choice $\\frac{9}{2}$ is ADDING WHERE THE EXPRESSION SUBTRACTS ✗; the choice $\\frac{1}{2}$ is FORGETTING THE FACTOR OF $4$ standing in front of the bracket ✗.)',
    },
    {
      q: 'Compute $3(\\sin^2 18^\\circ + \\cos^2 18^\\circ) - \\cos 60^\\circ$ exactly, without looking up any value at $18^\\circ$.',
      choices: ['$3$', '$\\frac{7}{2}$', '$\\frac{1}{2}$', '$\\frac{5}{2}$'],
      answer: 3,
      solution:
        'Route one, collapse the bracket with a right triangle: build a right triangle with an $18^\\circ$ angle, opposite leg $a$, adjacent leg $b$, hypotenuse $c$. Then $\\sin^2 18^\\circ + \\cos^2 18^\\circ = \\frac{a^2 + b^2}{c^2} = \\frac{c^2}{c^2} = 1$, since the Pythagorean Theorem says $a^2 + b^2 = c^2$. The expression becomes $3(1) - \\cos 60^\\circ = 3 - \\frac{1}{2} = \\frac{5}{2}$, using the half-equilateral triangle where the leg beside the $60^\\circ$ angle is half the hypotenuse ✓. Check a second, independent way, from the unit circle: the $18^\\circ$ point is $(\\cos 18^\\circ, \\sin 18^\\circ)$ and lies exactly $1$ unit from the origin, so $\\cos^2 18^\\circ + \\sin^2 18^\\circ = 1$ by the distance formula, no matter that neither piece is a number we can name. The $60^\\circ$ point on that circle is $\\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$, whose first coordinate is $\\cos 60^\\circ = \\frac{1}{2}$, so the value is $3 - \\frac{1}{2} = \\frac{5}{2}$ ✓. (The choice $3$ is DROPPING THE SUBTRACTED TERM, as though $\\cos 60^\\circ$ were $0$ ✗; the choice $\\frac{7}{2}$ is ADDING WHERE THE EXPRESSION SUBTRACTS ✗; the choice $\\frac{1}{2}$ is FORGETTING THE FACTOR OF $3$ standing in front of the bracket ✗.)',
    },
    {
      q: 'Compute $(\\sin^2 55^\\circ + \\cos^2 55^\\circ)\\tan 45^\\circ + \\cos 30^\\circ$ exactly, without looking up any value at $55^\\circ$.',
      choices: ['$\\frac{3}{2}$', '$\\frac{3\\sqrt{3}}{2}$', '$\\frac{2+\\sqrt{3}}{2}$', '$\\frac{\\sqrt{3}}{2}$'],
      answer: 2,
      solution:
        'Route one, collapse the bracket with a right triangle: with legs $a$ and $b$ and hypotenuse $c$ around a $55^\\circ$ angle, $\\sin^2 55^\\circ + \\cos^2 55^\\circ = \\frac{a^2 + b^2}{c^2} = 1$ by the Pythagorean Theorem. A $45$-$45$-$90$ triangle has equal legs, so $\\tan 45^\\circ = 1$, and the half-equilateral triangle gives $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$. The expression is $1 \\cdot 1 + \\frac{\\sqrt{3}}{2} = \\frac{2}{2} + \\frac{\\sqrt{3}}{2} = \\frac{2 + \\sqrt{3}}{2}$ ✓. Check a second, independent way, from the unit circle: the $55^\\circ$ point $(\\cos 55^\\circ, \\sin 55^\\circ)$ is $1$ unit from the origin, so the distance formula squares to $\\cos^2 55^\\circ + \\sin^2 55^\\circ = 1$. The $45^\\circ$ point is $\\left(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}\\right)$, whose two equal coordinates make $\\tan 45^\\circ = \\frac{\\sin 45^\\circ}{\\cos 45^\\circ} = 1$, and the $30^\\circ$ point is $\\left(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$, whose first coordinate is $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$. Adding gives $1 + \\frac{\\sqrt{3}}{2} = \\frac{2 + \\sqrt{3}}{2}$ ✓. (The choice $\\frac{3}{2}$ is SWAPPING $\\cos 30^\\circ$ FOR $\\cos 60^\\circ$, adding $\\frac{1}{2}$ to the $1$ ✗; the choice $\\frac{3\\sqrt{3}}{2}$ is READING $\\tan 45^\\circ$ AS $\\sqrt{3}$, which is the tangent of $60^\\circ$ ✗; the choice $\\frac{\\sqrt{3}}{2}$ is DROPPING THE COLLAPSED BRACKET, forgetting that it contributes a whole $1 \\cdot \\tan 45^\\circ = 1$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 18,
  sections: { '18.1': s181 },
}
