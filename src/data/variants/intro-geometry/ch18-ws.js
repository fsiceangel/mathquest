// Introduction to Geometry chapter 18 — variations for the printable worksheet.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key and no answer
//    index anywhere in this file. Answers copy the base worksheet’s formatting:
//    the labelled list '$\sin A = \frac{5}{13}$, …' for the three ratios
//    (slot 1), the same labelled shape for exact values (slot 2), a named value
//    followed by the reason its sign or its size has to be what it is (slot 5),
//    the sentence 'The legs are $8$ (opposite the $30^\circ$ angle) and
//    $8\sqrt{3}$', or that same shape naming a leg and the hypotenuse
//    (slot 3), a two-part sentence in feet (slot 4), a bare value
//    '$21$' for an area or a side (slots 6 and 8), the equation
//    '$b = 5\sqrt{2}$' (slot 7), and the paired sentence naming angle and area
//    (slots 9 and 10).
//  - Every answer was worked twice by two genuinely different routes, and the
//    routes had to agree before the key was written: SOH-CAH-TOA labelling vs.
//    the Pythagorean identity run from the sine alone (slot 1); rebuilding the
//    two special triangles vs. one geometric seed pushed through the identities
//    (slot 2); the ratios taken at the given angle vs. the special-triangle
//    side ratios (slot 3); the approximate ratios vs. the $3$-$4$-$5$ family
//    (slot 4); one unit-circle triangle vs. the identities plus a sign argument
//    or a concrete area (slot 5); $\frac{1}{2}ab\sin C$ vs. a coordinate area
//    (slot 6); the Law of Sines vs. the special shape the third angle reveals
//    (slot 7); the Law of Cosines vs. the distance formula on placed
//    coordinates (slot 8); cosine-then-area vs. Heron-then-sine (slot 9); the
//    Law of Cosines vs. the altitude of an isosceles triangle (slot 10).
//  - Worksheet items carry no distractors, so each solution closes with a short
//    confirmation instead: the Pythagorean Theorem on the three sides given
//    (slot 1), the cofunction pairing (slot 2), the Pythagorean Theorem on the
//    two legs found (slot 3), the recognized right triangle (slot 4), the size
//    the picture demands (slot 5), the widest those two sides could ever open
//    (slot 6), bigger angle facing bigger side (slot 7), the comparison against
//    the Pythagorean length (slot 8), the largest-side test (slot 9), and the
//    angle sum (slot 10).
//  - Figures follow the base worksheet: the eight slots that carry one there
//    carry one here (slots 1, 3, 4, 6, 7, 8, 9, 10), and slots 2 and 5 are bare
//    text. Every drawn coordinate is correct to three decimals. No figure
//    labels the quantity being asked for — unknown sides and angles are marked
//    `?`, and the triangles of slots 9 and 10 sit on their longest side. Those
//    triangles are pinned down by their stems, so the drawing is to scale and a
//    protractor would agree with the key; the exact reasoning is the work.
//    Figure labels are plain text.
//  - Pin deviations: none. Every keyed answer is the pinned one, with bare
//    LaTeX pins wrapped in $…$ the way the base worksheet writes them.

const worksheet = [
  // slot 1 — the three ratios of one acute angle in a right triangle.
  //          Lanes: 35-12-37 -> 12/37, 35/37, 12/35;
  //          24-7-25 -> 7/25, 24/25, 7/24;
  //          21-20-29 -> 20/29, 21/29, 20/21.
  [
    {
      q: 'In right triangle $ABC$ the right angle is at $B$, with $AB = 35$, $BC = 12$, and $AC = 37$. Find $\\sin A$, $\\cos A$, and $\\tan A$.',
      fig: {
        view: [-3, -3, 40, 17],
        elems: [
          { t: 'poly', pts: [[0, 0], [35, 0], [35, 12]], fill: false },
          { t: 'right', at: [35, 0], from: [0, 0], to: [35, 12] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [35, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [35, 12], label: 'C', dx: 10, dy: -8 },
          { t: 'label', p: [17.5, 0], text: '35', dx: 0, dy: 14 },
          { t: 'label', p: [35, 6], text: '12', dx: 14, dy: 0 },
          { t: 'label', p: [17.5, 6], text: '37', dx: -8, dy: -10 },
        ],
      },
      answer: '$\\sin A = \\frac{12}{37}$, $\\cos A = \\frac{35}{37}$, $\\tan A = \\frac{12}{35}$',
      solution:
        'Sort the sides from the viewpoint of angle $A$ and read SOH-CAH-TOA straight off. The side across from $A$ is $BC = 12$, the leg touching $A$ is $AB = 35$, and the hypotenuse is $AC = 37$, so $\\sin A = \\frac{12}{37}$, $\\cos A = \\frac{35}{37}$, and $\\tan A = \\frac{12}{35}$ ✓. Second route, from the sine alone through the identities, so that the adjacent leg is never read off the drawing at all. Opposite over hypotenuse gives $\\sin A = \\frac{12}{37}$, and $\\sin^2 A + \\cos^2 A = 1$ turns that into $\\cos^2 A = 1 - \\frac{144}{1369} = \\frac{1225}{1369}$, so $\\cos A = \\pm\\frac{35}{37}$. Angle $A$ is acute, and an acute angle has a positive cosine, so $\\cos A = \\frac{35}{37}$. The quotient identity finishes it: $\\tan A = \\frac{\\sin A}{\\cos A} = \\frac{12/37}{35/37} = \\frac{12}{35}$ ✓. Check that the three given lengths really do form a right triangle: $12^2 + 35^2 = 144 + 1225 = 1369 = 37^2$, so the Pythagorean Theorem holds and the labelling was sound. The opposite leg is short next to the hypotenuse, which is why $\\sin A \\approx 0.32$ is small while $\\cos A \\approx 0.95$ is close to its ceiling of $1$.',
    },
    {
      q: 'Right triangle $ABC$ has its right angle at $B$, with $AB = 24$, $BC = 7$, and $AC = 25$. Write $\\sin A$, $\\cos A$, and $\\tan A$ as fractions.',
      fig: {
        view: [-2, -2, 29, 12],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [24, 7]], fill: false },
          { t: 'right', at: [24, 0], from: [0, 0], to: [24, 7] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [24, 7], label: 'C', dx: 10, dy: -8 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [24, 3.5], text: '7', dx: 12, dy: 0 },
          { t: 'label', p: [12, 3.5], text: '25', dx: -8, dy: -10 },
        ],
      },
      answer: '$\\sin A = \\frac{7}{25}$, $\\cos A = \\frac{24}{25}$, $\\tan A = \\frac{7}{24}$',
      solution:
        'Sort the sides from the viewpoint of angle $A$ and read SOH-CAH-TOA straight off. Opposite $A$ sits $BC = 7$, touching $A$ sits $AB = 24$, and the hypotenuse is $AC = 25$, so $\\sin A = \\frac{7}{25}$, $\\cos A = \\frac{24}{25}$, and $\\tan A = \\frac{7}{24}$ ✓. Second route, from the sine alone through the identities, leaving the adjacent leg out of the reasoning entirely. Opposite over hypotenuse gives $\\sin A = \\frac{7}{25}$, and $\\sin^2 A + \\cos^2 A = 1$ becomes $\\cos^2 A = 1 - \\frac{49}{625} = \\frac{576}{625}$, so $\\cos A = \\pm\\frac{24}{25}$; an acute angle has a positive cosine, which settles it at $\\frac{24}{25}$. The quotient identity then gives $\\tan A = \\frac{\\sin A}{\\cos A} = \\frac{7/25}{24/25} = \\frac{7}{24}$ ✓. Check that the three given lengths really do form a right triangle: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$, so the Pythagorean Theorem holds. Angle $A$ is small — the opposite leg is short — and sure enough the sine and tangent come out small, while the cosine sits just under $1$.',
    },
    {
      q: 'A drafting triangle is right-angled at $B$, and its sides measure $AB = 21$, $BC = 20$, and $AC = 29$. Find $\\sin A$, $\\cos A$, and $\\tan A$.',
      fig: {
        view: [-2, -2, 26, 24],
        elems: [
          { t: 'poly', pts: [[0, 0], [21, 0], [21, 20]], fill: false },
          { t: 'right', at: [21, 0], from: [0, 0], to: [21, 20] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [21, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [21, 20], label: 'C', dx: 10, dy: -8 },
          { t: 'label', p: [10.5, 0], text: '21', dx: 0, dy: 14 },
          { t: 'label', p: [21, 10], text: '20', dx: 14, dy: 0 },
          { t: 'label', p: [10.5, 10], text: '29', dx: -10, dy: -8 },
        ],
      },
      answer: '$\\sin A = \\frac{20}{29}$, $\\cos A = \\frac{21}{29}$, $\\tan A = \\frac{20}{21}$',
      solution:
        'Sort the sides from the viewpoint of angle $A$ and read SOH-CAH-TOA straight off. The side across from $A$ is $BC = 20$, the leg touching $A$ is $AB = 21$, and the hypotenuse is $AC = 29$, so $\\sin A = \\frac{20}{29}$, $\\cos A = \\frac{21}{29}$, and $\\tan A = \\frac{20}{21}$ ✓. Second route, from the sine alone through the identities, which never looks at the adjacent leg. Opposite over hypotenuse gives $\\sin A = \\frac{20}{29}$, and $\\sin^2 A + \\cos^2 A = 1$ becomes $\\cos^2 A = 1 - \\frac{400}{841} = \\frac{441}{841}$, so $\\cos A = \\pm\\frac{21}{29}$, and the positive value is the one an acute angle takes. The quotient identity closes it out: $\\tan A = \\frac{\\sin A}{\\cos A} = \\frac{20/29}{21/29} = \\frac{20}{21}$ ✓. Check that the three given lengths really do form a right triangle: $20^2 + 21^2 = 400 + 441 = 841 = 29^2$, so the Pythagorean Theorem holds. The two legs are nearly equal, so $\\tan A$ lands just under $1$ and angle $A$ is just under $45^\\circ$.',
    },
  ],

  // slot 2 — exact values of three named ratios.
  //          Lanes: cos 60, sin 45, tan 60;
  //          sin 30, cos 60, tan 45;
  //          cos 120, sin 150, tan 135.
  [
    {
      q: 'Write the exact values of $\\cos 60^\\circ$, $\\sin 45^\\circ$, and $\\tan 60^\\circ$.',
      answer: '$\\cos 60^\\circ = \\frac{1}{2}$, $\\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$, $\\tan 60^\\circ = \\sqrt{3}$',
      solution:
        'Rebuild the two special triangles. Cut an equilateral triangle of side $2$ down the middle: the halves are right triangles with hypotenuse $2$, short leg $1$ opposite the $30^\\circ$ angle, and long leg $\\sqrt{2^2 - 1^2} = \\sqrt{3}$ opposite the $60^\\circ$ angle. Standing at the $60^\\circ$ corner, the short leg of $1$ is the adjacent side and the long leg of $\\sqrt{3}$ is the opposite side, so $\\cos 60^\\circ = \\frac{1}{2}$ and $\\tan 60^\\circ = \\frac{\\sqrt{3}}{1} = \\sqrt{3}$. Cut a square of side $1$ along its diagonal: the halves are right triangles with legs $1$ and hypotenuse $\\sqrt{2}$, so $\\sin 45^\\circ = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$ ✓. Second route, from one geometric seed pushed through the identities. The seed for the $45^\\circ$ value is symmetry: an isosceles right triangle has $\\sin 45^\\circ = \\cos 45^\\circ$, so $\\sin^2 45^\\circ + \\cos^2 45^\\circ = 1$ becomes $2\\sin^2 45^\\circ = 1$, giving $\\sin 45^\\circ = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$. The seed for the $30$-$60$ family is that the side facing a $30^\\circ$ angle is half the hypotenuse, so $\\sin 30^\\circ = \\frac{1}{2}$; the cofunction pairing hands over $\\cos 60^\\circ = \\sin 30^\\circ = \\frac{1}{2}$ with no second picture, and $\\sin^2 60^\\circ = 1 - \\frac{1}{4} = \\frac{3}{4}$ gives $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$, so $\\tan 60^\\circ = \\frac{\\sin 60^\\circ}{\\cos 60^\\circ} = \\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$ ✓. Check the cofunction pairing once more: $\\cos 60^\\circ$ and $\\sin 30^\\circ$ measure the same short leg from the two acute corners of one triangle, which is why both are $\\frac{1}{2}$. Check the sizes against the triangles you just built: $\\frac{1}{2}$ is a short adjacent leg for a wide angle, $\\frac{\\sqrt{2}}{2} \\approx 0.71$ sits in the middle, and $\\sqrt{3} \\approx 1.73$ is bigger than $1$ because at $60^\\circ$ the opposite leg outruns the adjacent one.',
    },
    {
      q: 'Write the exact values of $\\sin 30^\\circ$, $\\cos 60^\\circ$, and $\\tan 45^\\circ$.',
      answer: '$\\sin 30^\\circ = \\frac{1}{2}$, $\\cos 60^\\circ = \\frac{1}{2}$, $\\tan 45^\\circ = 1$',
      solution:
        'Rebuild the two special triangles. Halving an equilateral triangle of side $2$ leaves a right triangle with hypotenuse $2$, a leg of $1$ facing the $30^\\circ$ angle, and a leg of $\\sqrt{3}$ facing the $60^\\circ$ angle. Reading it, $\\sin 30^\\circ = \\frac{1}{2}$ (opposite over hypotenuse) and $\\cos 60^\\circ = \\frac{1}{2}$ (adjacent over hypotenuse — the same short side, viewed from the other angle). Halving a square of side $1$ leaves legs $1$ and $1$, so $\\tan 45^\\circ = \\frac{1}{1} = 1$ ✓. Second route, from one geometric seed pushed through the identities. The seed is that a $30^\\circ$ angle in a right triangle faces exactly half the hypotenuse, so $\\sin 30^\\circ = \\frac{1}{2}$; the cofunction pairing $\\cos(90^\\circ - \\theta) = \\sin\\theta$ then hands over $\\cos 60^\\circ = \\sin 30^\\circ = \\frac{1}{2}$ with no new picture at all. For the tangent, an isosceles right triangle has $\\sin 45^\\circ = \\cos 45^\\circ$, so $\\tan 45^\\circ = \\frac{\\sin 45^\\circ}{\\cos 45^\\circ} = 1$ whatever those two equal values happen to be ✓. Check the pairing: $\\sin 30^\\circ$ and $\\cos 60^\\circ$ agree because $30^\\circ$ and $60^\\circ$ are the two acute angles of one triangle and each one’s opposite leg is the other’s adjacent leg. A tangent of exactly $1$ means the two legs are equal, which is what $45^\\circ$ describes.',
    },
    {
      q: 'Write the exact values of $\\cos 120^\\circ$, $\\sin 150^\\circ$, and $\\tan 135^\\circ$.',
      answer: '$\\cos 120^\\circ = -\\frac{1}{2}$, $\\sin 150^\\circ = \\frac{1}{2}$, $\\tan 135^\\circ = -1$',
      solution:
        'Use the mirror rules on the supplements. Since $120^\\circ = 180^\\circ - 60^\\circ$, cosine flips sign: $\\cos 120^\\circ = -\\cos 60^\\circ = -\\frac{1}{2}$. Since $150^\\circ = 180^\\circ - 30^\\circ$, sine survives unchanged: $\\sin 150^\\circ = \\sin 30^\\circ = \\frac{1}{2}$. Since $135^\\circ = 180^\\circ - 45^\\circ$, the sine keeps its value and the cosine flips, so $\\tan 135^\\circ = \\frac{\\sin 45^\\circ}{-\\cos 45^\\circ} = -1$ ✓. Second route, numerically, by running each value through $\\sin^2\\theta + \\cos^2\\theta = 1$ and settling the sign separately. Two sign facts do the settling: every angle strictly between $0^\\circ$ and $180^\\circ$ has a positive sine, and every obtuse angle has a negative cosine. For $120^\\circ$, its height matches the height of $60^\\circ$, so $\\sin 120^\\circ = \\frac{\\sqrt{3}}{2}$ and $\\cos^2 120^\\circ = 1 - \\frac{3}{4} = \\frac{1}{4}$, giving $\\cos 120^\\circ = \\pm\\frac{1}{2}$ — and obtuse picks the minus, $-\\frac{1}{2}$. For $150^\\circ$, its width matches the width of $30^\\circ$ with the sign flipped, so $\\cos 150^\\circ = -\\frac{\\sqrt{3}}{2}$ and $\\sin^2 150^\\circ = 1 - \\frac{3}{4} = \\frac{1}{4}$, giving $\\sin 150^\\circ = \\pm\\frac{1}{2}$, of which the positive one is right: $\\frac{1}{2}$. For $135^\\circ$, the $45^\\circ$ symmetry makes height and width equal in size, so $2\\cos^2 135^\\circ = 1$ and each measures $\\frac{\\sqrt{2}}{2}$; the height is positive and the width negative, so $\\tan 135^\\circ = \\frac{\\sqrt{2}/2}{-\\sqrt{2}/2} = -1$ ✓. Check the sizes: $\\frac{1}{2}$ and $\\frac{\\sqrt{3}}{2}$ are the two legs of one half-equilateral triangle, so $\\cos 120^\\circ$ and $\\sin 150^\\circ$ must be the small one of that pair, while $135^\\circ$ sits exactly halfway between $90^\\circ$ and $180^\\circ$ and so has a tangent of size exactly $1$.',
    },
  ],

  // slot 3 — the two missing sides of a right triangle from one acute angle and
  //          one given side. The first lane hands over a leg, so the hypotenuse
  //          has to be recovered instead of divided up.
  //          Lanes: leg 15 beside 30 -> 5*sqrt(3) and 10*sqrt(3);
  //          hyp 24 at 45 -> 12*sqrt(2) twice; hyp 18 at 60 -> 9 and 9*sqrt(3).
  [
    {
      q: 'A right triangle has an acute angle of $30^\\circ$, and the leg beside that angle has length $15$. Find the exact lengths of the other leg and the hypotenuse.',
      fig: {
        view: [-2, -2, 18, 11],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [15, 8.66]], fill: false },
          { t: 'right', at: [15, 0], from: [0, 0], to: [15, 8.66] },
          { t: 'angle', at: [0, 0], from: [15, 0], to: [15, 8.66], r: 2.4, label: '30' },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [15, 4.33], text: '?', dx: 12, dy: 0 },
          { t: 'label', p: [7.5, 4.33], text: '?', dx: -8, dy: -10 },
        ],
      },
      answer: 'The other leg is $5\\sqrt{3}$ and the hypotenuse is $10\\sqrt{3}$',
      solution:
        'Take the ratios at the given angle. The leg facing the $30^\\circ$ angle is $15\\tan 30^\\circ = 15 \\cdot \\frac{\\sqrt{3}}{3} = 5\\sqrt{3}$, and the hypotenuse $h$ obeys $15 = h\\cos 30^\\circ = h \\cdot \\frac{\\sqrt{3}}{2}$, so $h = \\frac{30}{\\sqrt{3}} = 10\\sqrt{3}$ ✓. Second route, by the shape of the special triangle. The other acute angle must be $60^\\circ$, so the triangle is similar to the half-equilateral triangle with sides $1$, $\\sqrt{3}$, $2$, and the side of length $\\sqrt{3}$ is the one beside the $30^\\circ$ angle. Matching that side, the scale factor is $\\frac{15}{\\sqrt{3}} = 5\\sqrt{3}$, so the three sides scale to $5\\sqrt{3}$, $15$, and $10\\sqrt{3}$ ✓. Check with the Pythagorean Theorem: $\\left(5\\sqrt{3}\\right)^2 + 15^2 = 75 + 225 = 300 = \\left(10\\sqrt{3}\\right)^2$. The short leg $5\\sqrt{3} \\approx 8.7$ is exactly half of $10\\sqrt{3} \\approx 17.3$, which is the signature of a $30^\\circ$ angle, and the given $15$ sits between them.',
    },
    {
      q: 'A right triangle has hypotenuse $24$ and one acute angle of $45^\\circ$. Find the exact lengths of both legs.',
      fig: {
        view: [-2, -2, 20, 20],
        elems: [
          { t: 'poly', pts: [[0, 0], [16.971, 0], [16.971, 16.971]], fill: false },
          { t: 'right', at: [16.971, 0], from: [0, 0], to: [16.971, 16.971] },
          { t: 'angle', at: [0, 0], from: [16.971, 0], to: [16.971, 16.971], r: 3, label: '45' },
          { t: 'label', p: [8.486, 8.486], text: '24', dx: -10, dy: -8 },
          { t: 'label', p: [16.971, 8.486], text: '?', dx: 12, dy: 0 },
          { t: 'label', p: [8.486, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      answer: 'Both legs are $12\\sqrt{2}$',
      solution:
        'Take sine and cosine of the given angle. The leg facing the $45^\\circ$ angle is $24\\sin 45^\\circ = 24 \\cdot \\frac{\\sqrt{2}}{2} = 12\\sqrt{2}$, and the leg touching it is $24\\cos 45^\\circ = 24 \\cdot \\frac{\\sqrt{2}}{2} = 12\\sqrt{2}$ as well ✓. Second route, by the shape of the special triangle. If one acute angle is $45^\\circ$ then so is the other, so the triangle is similar to the half-square with sides $1$, $1$, $\\sqrt{2}$. Matching hypotenuses, the scale factor is $\\frac{24}{\\sqrt{2}} = 12\\sqrt{2}$, and each leg of length $1$ scales to exactly that ✓. Check with the Pythagorean Theorem: $\\left(12\\sqrt{2}\\right)^2 + \\left(12\\sqrt{2}\\right)^2 = 288 + 288 = 576 = 24^2$. Equal legs are exactly what two equal acute angles should produce, and $12\\sqrt{2} \\approx 17$ is comfortably less than the hypotenuse but more than half of it.',
    },
    {
      q: 'A right triangle has hypotenuse $18$ and one acute angle of $60^\\circ$. Find the exact lengths of both legs.',
      fig: {
        view: [-1.5, -2, 13, 18],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [9, 15.588]], fill: false },
          { t: 'right', at: [9, 0], from: [0, 0], to: [9, 15.588] },
          { t: 'angle', at: [0, 0], from: [9, 0], to: [9, 15.588], r: 1.6, label: '60' },
          { t: 'label', p: [4.5, 7.794], text: '18', dx: -10, dy: -8 },
          { t: 'label', p: [9, 7.794], text: '?', dx: 12, dy: 0 },
          { t: 'label', p: [4.5, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      answer: 'The legs are $9$ (adjacent to the $60^\\circ$ angle) and $9\\sqrt{3}$',
      solution:
        'Take sine and cosine of the given angle. The leg touching the $60^\\circ$ angle is $18\\cos 60^\\circ = 18 \\cdot \\frac{1}{2} = 9$, and the leg facing it is $18\\sin 60^\\circ = 18 \\cdot \\frac{\\sqrt{3}}{2} = 9\\sqrt{3}$ ✓. Second route, by the shape of the special triangle. The other acute angle must be $30^\\circ$, so the triangle is similar to the half-equilateral triangle with sides $1$, $\\sqrt{3}$, $2$. Matching hypotenuses, the scale factor is $\\frac{18}{2} = 9$, so the sides scale to $9$, $9\\sqrt{3}$, and $18$, with the short one facing the $30^\\circ$ angle — that is, touching the $60^\\circ$ one ✓. Check with the Pythagorean Theorem: $9^2 + \\left(9\\sqrt{3}\\right)^2 = 81 + 243 = 324 = 18^2$. Naming which leg is which matters here: the short leg $9$ is half the hypotenuse and sits beside the $60^\\circ$ angle, while $9\\sqrt{3} \\approx 15.6$ stretches across from it.',
    },
  ],

  // slot 4 — ladder against a wall with the 0.6/0.8 approximations. Two of the
  //          three lanes hand over a leg rather than the ladder, so the ladder
  //          itself has to be recovered by a division before the second leg.
  //          Lanes: 21 ft up at 37 -> 35 ft of ladder and 28 ft out;
  //          30 ft of ladder at 53 -> 24 up, 18 out;
  //          24 ft out at 53 -> 40 ft of ladder and 32 ft up.
  [
    {
      q: 'A ladder leans against a wall at a $37^\\circ$ angle of elevation, and its top rests $21$ feet up the wall. Given $\\sin 37^\\circ \\approx 0.6$ and $\\cos 37^\\circ \\approx 0.8$, about how long is the ladder, and how far is its foot from the wall?',
      fig: {
        view: [-3, -3, 34, 25],
        elems: [
          { t: 'poly', pts: [[0, 0], [28, 0], [28, 21]], fill: false },
          { t: 'right', at: [28, 0], from: [0, 0], to: [28, 21] },
          { t: 'angle', at: [0, 0], from: [28, 0], to: [28, 21], r: 4.5, label: '37' },
          { t: 'label', p: [14, 10.5], text: '?', dx: -10, dy: -10 },
          { t: 'label', p: [28, 10.5], text: '21', dx: 14, dy: 0 },
          { t: 'label', p: [14, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      answer: 'The ladder is about $35$ feet long, and its foot is about $28$ feet from the wall',
      solution:
        'The height is the leg facing the $37^\\circ$ angle, so it is the ladder times the sine. Writing $L$ for the length of the ladder, $21 = L\\sin 37^\\circ \\approx 0.6L$, which gives $L \\approx \\frac{21}{0.6} = 35$ feet; the foot then stands $35\\cos 37^\\circ \\approx 35 \\times 0.8 = 28$ feet from the wall ✓. Second route, through the $3$-$4$-$5$ family. The ratios $0.6 = \\frac{3}{5}$ and $0.8 = \\frac{4}{5}$ say that a right triangle with a $37^\\circ$ angle is a $3$-$4$-$5$ triangle in disguise, with the side of length $3$ facing the $37^\\circ$ angle. Here that side is the $21$-foot height, so the scale factor is $\\frac{21}{3} = 7$ and the sides become $21$, $28$, and $35$; the $35$ is the ladder and the $28$ runs along the ground ✓. Check with the Pythagorean Theorem: $21^2 + 28^2 = 441 + 784 = 1225 = 35^2$. The ladder had to come out longer than the $21$ feet it climbs, and the $\\frac{21}{35} = 0.6$ it climbs per foot of ladder is the sine we started from.',
    },
    {
      q: 'A $30$-foot ladder leans against a wall at a $53^\\circ$ angle of elevation. Given $\\sin 53^\\circ \\approx 0.8$ and $\\cos 53^\\circ \\approx 0.6$, about how high does the ladder reach, and how far is its foot from the wall?',
      fig: {
        view: [-2, -2, 22, 28],
        elems: [
          { t: 'poly', pts: [[0, 0], [18, 0], [18, 24]], fill: false },
          { t: 'right', at: [18, 0], from: [0, 0], to: [18, 24] },
          { t: 'angle', at: [0, 0], from: [18, 0], to: [18, 24], r: 3, label: '53' },
          { t: 'label', p: [9, 12], text: '30', dx: -10, dy: -10 },
          { t: 'label', p: [18, 12], text: '?', dx: 12, dy: 0 },
          { t: 'label', p: [9, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      answer: 'It reaches about $24$ feet up, with its foot about $18$ feet from the wall',
      solution:
        'The ladder is the hypotenuse, so take sine for the height and cosine for the distance out. Height $= 30\\sin 53^\\circ \\approx 30 \\times 0.8 = 24$ feet, and the foot stands $30\\cos 53^\\circ \\approx 30 \\times 0.6 = 18$ feet from the wall ✓. Second route, through the $3$-$4$-$5$ family. The ratios $0.8 = \\frac{4}{5}$ and $0.6 = \\frac{3}{5}$ say that a right triangle with a $53^\\circ$ angle is a $3$-$4$-$5$ triangle, with the side of length $4$ facing the $53^\\circ$ angle. Matching hypotenuses, the scale factor is $\\frac{30}{5} = 6$, so the sides become $18$, $24$, and $30$; the $24$ climbs the wall and the $18$ runs along the ground ✓. Check with the Pythagorean Theorem: $18^2 + 24^2 = 324 + 576 = 900 = 30^2$. This ladder is steeper than $45^\\circ$, so it rises more than it reaches out — the mirror image of the shallow case, since $53^\\circ$ and $37^\\circ$ together make a right angle and simply trade the two legs.',
    },
    {
      q: 'A ladder leans against a wall at a $53^\\circ$ angle of elevation, and its foot stands $24$ feet from the wall. Given $\\sin 53^\\circ \\approx 0.8$ and $\\cos 53^\\circ \\approx 0.6$, about how long is the ladder, and how far up the wall does it reach?',
      fig: {
        view: [-2, -2, 30, 36],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [24, 32]], fill: false },
          { t: 'right', at: [24, 0], from: [0, 0], to: [24, 32] },
          { t: 'angle', at: [0, 0], from: [24, 0], to: [24, 32], r: 3.5, label: '53' },
          { t: 'label', p: [12, 16], text: '?', dx: -10, dy: -10 },
          { t: 'label', p: [24, 16], text: '?', dx: 12, dy: 0 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
        ],
      },
      answer: 'The ladder is about $40$ feet long, and it reaches about $32$ feet up the wall',
      solution:
        'The distance from the wall is the leg touching the $53^\\circ$ angle, so it is the ladder times the cosine. Writing $L$ for the length of the ladder, $24 = L\\cos 53^\\circ \\approx 0.6L$, which gives $L \\approx \\frac{24}{0.6} = 40$ feet; the top then rests $40\\sin 53^\\circ \\approx 40 \\times 0.8 = 32$ feet up the wall ✓. Second route, through the $3$-$4$-$5$ family. The ratios $0.8 = \\frac{4}{5}$ and $0.6 = \\frac{3}{5}$ mark this as a $3$-$4$-$5$ triangle with the side of length $3$ touching the $53^\\circ$ angle. Here that side is the $24$ feet of ground, so the scale factor is $\\frac{24}{3} = 8$ and the sides become $24$, $32$, and $40$; the $40$ is the ladder and the $32$ climbs the wall ✓. Check with the Pythagorean Theorem: $24^2 + 32^2 = 576 + 1024 = 1600 = 40^2$. A $40$-foot ladder reaching $32$ feet has climbed four fifths of its own length, which is exactly the sine the problem handed over.',
    },
  ],

  // slot 5 — a value at a right, obtuse, or straight angle, together with the
  //          reason its sign or its size has to be what it is. Lanes:
  //          tan 120 and where its minus sign comes from;
  //          sin 90 and cos 90 with the ceiling on sine;
  //          sin 180 and the sign of cos 100.
  [
    {
      q: 'Find the exact value of $\\tan 120^\\circ$, and say which of the sine and the cosine is responsible for its sign.',
      answer: '$\\tan 120^\\circ = -\\sqrt{3}$, and the cosine is responsible: at $120^\\circ$ the sine is positive while the cosine is negative',
      solution:
        'Build the unit-circle triangle. Turn a radius of length $1$ through $120^\\circ$ and drop a perpendicular to the $x$-axis. The angle that radius makes with the negative $x$-direction is $180^\\circ - 120^\\circ = 60^\\circ$, so the little right triangle has hypotenuse $1$, a horizontal leg of $\\frac{1}{2}$, and a vertical leg of $\\frac{\\sqrt{3}}{2}$. The tip lands above the axis and to the left of the $y$-axis, at $\\left(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$, and tangent is the height divided by the width: $\\tan 120^\\circ = \\frac{\\sqrt{3}/2}{-\\frac{1}{2}} = -\\sqrt{3}$. The height came out positive and the width negative, so the minus sign is the cosine’s doing ✓. Second route, numerically, with no picture at all. Supplements have equal heights, so $\\sin 120^\\circ = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$. Feed that into $\\sin^2\\theta + \\cos^2\\theta = 1$: $\\cos^2 120^\\circ = 1 - \\frac{3}{4} = \\frac{1}{4}$, so $\\cos 120^\\circ = \\pm\\frac{1}{2}$, and an obtuse angle takes the negative one, $-\\frac{1}{2}$. The quotient is then $\\tan 120^\\circ = \\frac{\\sqrt{3}/2}{-1/2} = -\\sqrt{3}$, and once more only the cosine changed sign, since every angle strictly between $0^\\circ$ and $180^\\circ$ has a positive sine ✓. Check the size the picture demands: $\\sqrt{3} \\approx 1.73$ says the point should be about $1.73$ times as high as it is wide, and $\\frac{\\sqrt{3}}{2}$ against $\\frac{1}{2}$ is exactly that — right for a radius leaning only $30^\\circ$ off the vertical.',
    },
    {
      q: 'Find the exact values of $\\sin 90^\\circ$ and $\\cos 90^\\circ$, and explain why no angle at all can have a sine larger than $\\sin 90^\\circ$.',
      answer: '$\\sin 90^\\circ = 1$ and $\\cos 90^\\circ = 0$; a sine is the height of a point on a circle of radius $1$, so it can never climb past $1$',
      solution:
        'Build the unit-circle triangle — or rather, watch it collapse. A quarter turn takes the radius from $(1, 0)$ to straight up, and its tip is $(0, 1)$; there is no perpendicular left to drop, because the radius already lies along the $y$-axis. Unit-circle coordinates are $(\\cos\\theta, \\sin\\theta)$, so $\\cos 90^\\circ = 0$ and $\\sin 90^\\circ = 1$. Every point of that circle is $1$ unit from the center, so its height is at most $1$, and $(0, 1)$ is the single point where the height reaches that ceiling ✓. Second route, numerically, from the area of a concrete triangle. Take a triangle whose legs $6$ and $8$ meet at a right angle. Base times height halved makes its area $\\frac{1}{2} \\cdot 6 \\cdot 8 = 24$. The formula $\\frac{1}{2}ab\\sin C$ has to report the same number, and here it reads $\\frac{1}{2} \\cdot 6 \\cdot 8 \\cdot \\sin 90^\\circ = 24\\sin 90^\\circ$, so $24\\sin 90^\\circ = 24$ and $\\sin 90^\\circ = 1$. Then $\\cos^2 90^\\circ = 1 - 1^2 = 0$, so $\\cos 90^\\circ = 0$. The ceiling argument comes back in numbers too: two sides of lengths $a$ and $b$ can never enclose more than $\\frac{1}{2}ab$, so $\\sin C$ can never exceed $1$ ✓. Check the size the picture demands: a cosine of $0$ is the only value that leaves the point on the $y$-axis, and $90^\\circ$ is exactly where cosine hands over from positive to negative — the border between acute and obtuse. A sine of $1$ at that same angle says the point is as high as the circle allows.',
    },
    {
      q: 'Find the exact value of $\\sin 180^\\circ$, then decide whether $\\cos 100^\\circ$ is positive or negative and say why.',
      answer: '$\\sin 180^\\circ = 0$, and $\\cos 100^\\circ$ is negative, because $100^\\circ$ is obtuse and its unit-circle point lies to the left of the $y$-axis',
      solution:
        'Build the unit-circle triangle — or rather, watch it flatten. A half turn carries the radius from $(1, 0)$ all the way round to $(-1, 0)$. That tip sits on the $x$-axis, so its height is $0$ and $\\sin 180^\\circ = 0$. Stopping instead at $100^\\circ$ leaves the radius just past straight up, in the region above the axis and left of the $y$-axis, and every point there has a negative first coordinate, so $\\cos 100^\\circ$ is negative ✓. Second route, numerically. For the sine, use the area formula on a hinge that has been opened flat: two sides of lengths $a$ and $b$ meeting at $180^\\circ$ lie in one straight line, so the shape they close up has no height and zero area. Since $\\frac{1}{2}ab\\sin 180^\\circ$ has to report that zero and $\\frac{1}{2}ab$ is not zero, $\\sin 180^\\circ = 0$. For the cosine, the supplement mirror gives $\\cos 100^\\circ = -\\cos 80^\\circ$, and $\\cos 80^\\circ$ is an adjacent leg divided by a hypotenuse inside a right triangle with an $80^\\circ$ angle — a positive length over a positive length, hence positive. A minus sign in front of a positive number is negative ✓. Check the sizes across the whole sweep: sine leaves $0$, climbs to $1$ at $90^\\circ$, and returns to $0$ at $180^\\circ$, while cosine leaves $1$, crosses $0$ at $90^\\circ$, and falls to $-1$ at $180^\\circ$. At $100^\\circ$ that crossing is only just behind, so the cosine is negative but still small.',
    },
  ],

  // slot 6 — area from two sides and the included angle.
  //          Lanes: 16 and 9 at 30 -> 36; 10 and 7 at 150 -> 35/2;
  //          20 and 3 at 30 -> 15.
  [
    {
      q: 'Two sides of a triangle measure $16$ and $9$, and the angle between them is $30^\\circ$. Find the area of the triangle.',
      fig: {
        view: [-1, -1.5, 17.5, 6],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [7.794, 4.5]], fill: false },
          { t: 'angle', at: [0, 0], from: [16, 0], to: [7.794, 4.5], r: 2, label: '30' },
          { t: 'label', p: [11, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [3.897, 2.25], text: '9', dx: -8, dy: -8 },
        ],
      },
      answer: '$36$',
      solution:
        'Two sides and the angle between them is exactly what $\\frac{1}{2}ab\\sin C$ wants: Area $= \\frac{1}{2} \\cdot 16 \\cdot 9 \\cdot \\sin 30^\\circ = 72 \\cdot \\frac{1}{2} = 36$ ✓. Second route, by putting the triangle on coordinates. Set the shared vertex at the origin with the side of length $16$ running along the positive $x$-axis, so one vertex is $(16, 0)$. The other side leaves the origin at $30^\\circ$, so its far end is $\\left(9\\cos 30^\\circ, 9\\sin 30^\\circ\\right) = \\left(\\frac{9\\sqrt{3}}{2}, \\frac{9}{2}\\right)$. A triangle with one vertex at the origin has area $\\frac{1}{2}\\left|x_1y_2 - x_2y_1\\right| = \\frac{1}{2}\\left|16 \\cdot \\frac{9}{2} - \\frac{9\\sqrt{3}}{2} \\cdot 0\\right| = \\frac{1}{2}(72) = 36$ ✓. Check against the widest that hinge could ever open: two sides of $16$ and $9$ can enclose at most $\\frac{1}{2} \\cdot 16 \\cdot 9 = 72$, and only a right angle collects all of it. A $30^\\circ$ opening carries $\\sin 30^\\circ = \\frac{1}{2}$, so it should collect exactly half the maximum — and $36$ is half of $72$.',
    },
    {
      q: 'Two sides of a triangle measure $10$ and $7$, and the angle between them is $150^\\circ$. Find the exact area of the triangle.',
      fig: {
        view: [-8, -1.5, 11.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [-6.062, 3.5]], fill: false },
          { t: 'angle', at: [0, 0], from: [10, 0], to: [-6.062, 3.5], r: 1, label: '150' },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [-3.031, 1.75], text: '7', dx: -8, dy: -8 },
        ],
      },
      answer: '$\\frac{35}{2}$',
      solution:
        'Two sides and the angle between them is exactly what $\\frac{1}{2}ab\\sin C$ wants, and the formula is happy with an obtuse angle because sine stays positive there: Area $= \\frac{1}{2} \\cdot 10 \\cdot 7 \\cdot \\sin 150^\\circ = 35 \\cdot \\frac{1}{2} = \\frac{35}{2}$ ✓. Second route, by putting the triangle on coordinates. Set the shared vertex at the origin with the side of length $10$ along the positive $x$-axis, so one vertex is $(10, 0)$. The other side leaves the origin at $150^\\circ$, landing at $\\left(7\\cos 150^\\circ, 7\\sin 150^\\circ\\right) = \\left(-\\frac{7\\sqrt{3}}{2}, \\frac{7}{2}\\right)$ — behind the origin, since the angle is obtuse. The area is $\\frac{1}{2}\\left|x_1y_2 - x_2y_1\\right| = \\frac{1}{2}\\left|10 \\cdot \\frac{7}{2} - \\left(-\\frac{7\\sqrt{3}}{2}\\right) \\cdot 0\\right| = \\frac{35}{2}$ ✓. Check against the widest that hinge could ever open: two sides of $10$ and $7$ can enclose at most $\\frac{1}{2} \\cdot 10 \\cdot 7 = 35$, collected only at a right angle. A $150^\\circ$ opening has swung $60^\\circ$ past that best position, exactly as far from $90^\\circ$ as a $30^\\circ$ opening falls short of it, so the two capture the same fraction — half — and $\\frac{35}{2}$ is half of $35$.',
    },
    {
      q: 'Two sides of a triangle measure $20$ and $3$, and the angle between them is $30^\\circ$. Find the area of the triangle.',
      fig: {
        view: [-1.5, -1.5, 22, 5],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [2.598, 1.5]], fill: false },
          { t: 'angle', at: [0, 0], from: [20, 0], to: [2.598, 1.5], r: 1.2, label: '30' },
          { t: 'label', p: [12, 0], text: '20', dx: 0, dy: 14 },
          { t: 'label', p: [1.299, 0.75], text: '3', dx: -8, dy: -8 },
        ],
      },
      answer: '$15$',
      solution:
        'Two sides and the angle between them is exactly what $\\frac{1}{2}ab\\sin C$ wants: Area $= \\frac{1}{2} \\cdot 20 \\cdot 3 \\cdot \\sin 30^\\circ = 30 \\cdot \\frac{1}{2} = 15$ ✓. Second route, by putting the triangle on coordinates. Set the shared vertex at the origin with the side of length $20$ along the positive $x$-axis, so one vertex is $(20, 0)$. The short side leaves the origin at $30^\\circ$, ending at $\\left(3\\cos 30^\\circ, 3\\sin 30^\\circ\\right) = \\left(\\frac{3\\sqrt{3}}{2}, \\frac{3}{2}\\right)$. A triangle with one vertex at the origin has area $\\frac{1}{2}\\left|x_1y_2 - x_2y_1\\right| = \\frac{1}{2}\\left|20 \\cdot \\frac{3}{2} - 0\\right| = 15$ ✓. Check against the widest that hinge could ever open: two sides of $20$ and $3$ can enclose at most $\\frac{1}{2} \\cdot 20 \\cdot 3 = 30$, and only a right angle collects all of it; halving that for $\\sin 30^\\circ = \\frac{1}{2}$ leaves $15$. A long base with a very short slanted side makes a thin sliver of a triangle, and the modest area agrees.',
    },
  ],

  // slot 7 — Law of Sines with two angles and the side opposite the first.
  //          Every lane is pinned so the third angle is special too, which is
  //          what lets the second route drop the law entirely instead of
  //          re-deriving it with an altitude.
  //          Lanes: 30/60 with a = 7 -> 7*sqrt(3);
  //          120/30 with a = 9 -> 3*sqrt(3); 90/45 with a = 12 -> 6*sqrt(2).
  [
    {
      q: 'In triangle $ABC$, $\\angle A = 30^\\circ$, $\\angle B = 60^\\circ$, and the side $a$ opposite $\\angle A$ has length $7$. Find $b$ exactly.',
      fig: {
        view: [-1.5, -1.5, 10.5, 14.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [7, 12.124]], fill: false },
          { t: 'angle', at: [0, 0], from: [7, 0], to: [7, 12.124], r: 1.4, label: '60' },
          { t: 'angle', at: [7, 12.124], from: [0, 0], to: [7, 0], r: 1.6, label: '30' },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [7, 0], label: 'C', dx: 12, dy: 10 },
          { t: 'point', p: [7, 12.124], label: 'A', dx: 10, dy: -8 },
          { t: 'label', p: [3.5, 0], text: '7', dx: 0, dy: 14 },
          { t: 'label', p: [7, 6.06], text: '?', dx: 12, dy: 0 },
        ],
      },
      answer: '$b = 7\\sqrt{3}$',
      solution:
        'Law of Sines: $\\frac{7}{\\sin 30^\\circ} = \\frac{b}{\\sin 60^\\circ}$, so $b = \\frac{7\\sin 60^\\circ}{\\sin 30^\\circ} = \\frac{7 \\cdot \\frac{\\sqrt{3}}{2}}{\\frac{1}{2}} = 7\\sqrt{3}$ ✓. Second route, by noticing what the third angle is. The angles sum to $180^\\circ$, so $\\angle C = 180^\\circ - 30^\\circ - 60^\\circ = 90^\\circ$ and the triangle is a right triangle with hypotenuse $c$ — no general law needed. The side facing $30^\\circ$ is half the hypotenuse, so $c = 2 \\cdot 7 = 14$, and the remaining side comes from the Pythagorean Theorem: $b = \\sqrt{14^2 - 7^2} = \\sqrt{196 - 49} = \\sqrt{147} = 7\\sqrt{3}$ ✓. Check that bigger angles face bigger sides: $7\\sqrt{3} \\approx 12.1$ is longer than $7$, which fits because $\\angle B = 60^\\circ$ is larger than $\\angle A = 30^\\circ$, and both are shorter than the hypotenuse $14$ facing the largest angle of all.',
    },
    {
      q: 'In triangle $ABC$, $\\angle A = 120^\\circ$, $\\angle B = 30^\\circ$, and the side $a$ opposite $\\angle A$ has length $9$. Find $b$ exactly.',
      fig: {
        view: [-1.5, -1.5, 10.5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [4.5, 2.598]], fill: false },
          { t: 'angle', at: [0, 0], from: [9, 0], to: [4.5, 2.598], r: 1.2, label: '30' },
          { t: 'angle', at: [4.5, 2.598], from: [0, 0], to: [9, 0], r: 0.9, label: '120' },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [9, 0], label: 'C', dx: 12, dy: 10 },
          { t: 'point', p: [4.5, 2.598], label: 'A', dx: 0, dy: -12 },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [6.75, 1.299], text: '?', dx: 12, dy: 4 },
        ],
      },
      answer: '$b = 3\\sqrt{3}$',
      solution:
        'Law of Sines: $\\frac{9}{\\sin 120^\\circ} = \\frac{b}{\\sin 30^\\circ}$, so $b = \\frac{9\\sin 30^\\circ}{\\sin 120^\\circ} = \\frac{9 \\cdot \\frac{1}{2}}{\\frac{\\sqrt{3}}{2}} = \\frac{9}{\\sqrt{3}} = 3\\sqrt{3}$ after rationalizing ✓. Second route, by noticing what the third angle is. The angles sum to $180^\\circ$, so $\\angle C = 180^\\circ - 120^\\circ - 30^\\circ = 30^\\circ$, matching $\\angle B$; equal angles face equal sides, so $c = b$ and the triangle is isosceles. Now put the Law of Cosines at the $120^\\circ$ vertex, where $\\cos 120^\\circ = -\\frac{1}{2}$ and no sine appears anywhere: $9^2 = b^2 + c^2 - 2bc\\cos 120^\\circ = b^2 + b^2 + b^2 = 3b^2$, so $b^2 = 27$ and $b = 3\\sqrt{3}$ ✓. Check that bigger angles face bigger sides: $3\\sqrt{3} \\approx 5.2$ falls well short of the $9$ facing the obtuse corner, and the two $30^\\circ$ corners face the two equal short sides, which is the only way an isosceles triangle can arrange itself.',
    },
    {
      q: 'In triangle $ABC$, $\\angle A = 90^\\circ$, $\\angle B = 45^\\circ$, and the side $a$ opposite $\\angle A$ has length $12$. Find $b$ exactly.',
      fig: {
        view: [-1.5, -1.5, 14, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [6, 6]], fill: false },
          { t: 'right', at: [6, 6], from: [0, 0], to: [12, 0] },
          { t: 'angle', at: [0, 0], from: [12, 0], to: [6, 6], r: 1.6, label: '45' },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'C', dx: 12, dy: 10 },
          { t: 'point', p: [6, 6], label: 'A', dx: 0, dy: -14 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [9, 3], text: '?', dx: 12, dy: 4 },
        ],
      },
      answer: '$b = 6\\sqrt{2}$',
      solution:
        'Law of Sines: $\\frac{12}{\\sin 90^\\circ} = \\frac{b}{\\sin 45^\\circ}$, and $\\sin 90^\\circ = 1$, so $b = 12\\sin 45^\\circ = 12 \\cdot \\frac{\\sqrt{2}}{2} = 6\\sqrt{2}$ ✓. Second route, by noticing what the third angle is. The angles sum to $180^\\circ$, so $\\angle C = 180^\\circ - 90^\\circ - 45^\\circ = 45^\\circ$, equal to $\\angle B$, and equal angles face equal sides, so $c = b$. The right angle sits at $A$, which makes the side across from it, $a = 12$, the hypotenuse — so the Pythagorean Theorem finishes the job with no trigonometry at all: $b^2 + c^2 = 12^2$ becomes $2b^2 = 144$, giving $b^2 = 72$ and $b = 6\\sqrt{2}$ ✓. Check that bigger angles face bigger sides: the two $45^\\circ$ corners face the two equal sides of $6\\sqrt{2} \\approx 8.49$, and the $90^\\circ$ corner faces the longest side of the three, $12$.',
    },
  ],

  // slot 8 — third side from two sides and an included 120 degrees.
  //          Lanes: 9 and 4 -> sqrt(133); 7 and 3 -> sqrt(79);
  //          12 and 8 -> 4*sqrt(19).
  [
    {
      q: 'Two sides of a triangle measure $9$ and $4$, and the angle between them is $120^\\circ$. Find the third side.',
      fig: {
        view: [-4, -1.5, 11, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [-2, 3.464]], fill: false },
          { t: 'angle', at: [0, 0], from: [9, 0], to: [-2, 3.464], r: 1.1, label: '120' },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [-1, 1.732], text: '4', dx: -8, dy: -8 },
          { t: 'label', p: [3.5, 1.732], text: '?', dx: 10, dy: 8 },
        ],
      },
      answer: '$\\sqrt{133}$',
      solution:
        'Law of Cosines with $\\cos 120^\\circ = -\\frac{1}{2}$: $c^2 = 9^2 + 4^2 - 2 \\cdot 9 \\cdot 4 \\cdot \\left(-\\frac{1}{2}\\right) = 81 + 16 + 36 = 133$, so $c = \\sqrt{133}$, and $133 = 7 \\cdot 19$ carries no square factor to pull out ✓. Second route, by placing the triangle on coordinates and measuring. Put the shared vertex at the origin with the side of length $9$ along the positive $x$-axis, ending at $(9, 0)$. The side of length $4$ leaves the origin at $120^\\circ$, so it ends at $\\left(4\\cos 120^\\circ, 4\\sin 120^\\circ\\right) = \\left(-2, 2\\sqrt{3}\\right)$. The distance formula then gives $c^2 = (9 + 2)^2 + \\left(2\\sqrt{3}\\right)^2 = 121 + 12 = 133$, so $c = \\sqrt{133}$ ✓. Check against the right-angled case: if the angle had been $90^\\circ$ the third side would measure $\\sqrt{81 + 16} = \\sqrt{97} \\approx 9.8$, and opening the hinge to $120^\\circ$ stretches it to $\\sqrt{133} \\approx 11.5$. That is still less than $9 + 4 = 13$, as the triangle inequality insists.',
    },
    {
      q: 'Two sides of a triangle measure $7$ and $3$, and the angle between them is $120^\\circ$. Find the third side.',
      fig: {
        view: [-3, -1.5, 8.5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [-1.5, 2.598]], fill: false },
          { t: 'angle', at: [0, 0], from: [7, 0], to: [-1.5, 2.598], r: 0.9, label: '120' },
          { t: 'label', p: [3.5, 0], text: '7', dx: 0, dy: 14 },
          { t: 'label', p: [-0.75, 1.299], text: '3', dx: -8, dy: -6 },
          { t: 'label', p: [2.75, 1.299], text: '?', dx: 10, dy: 8 },
        ],
      },
      answer: '$\\sqrt{79}$',
      solution:
        'Law of Cosines with $\\cos 120^\\circ = -\\frac{1}{2}$: $c^2 = 7^2 + 3^2 - 2 \\cdot 7 \\cdot 3 \\cdot \\left(-\\frac{1}{2}\\right) = 49 + 9 + 21 = 79$, so $c = \\sqrt{79}$, and $79$ is prime so nothing comes out of the root ✓. Second route, by placing the triangle on coordinates and measuring. Put the shared vertex at the origin with the side of length $7$ along the positive $x$-axis, ending at $(7, 0)$. The side of length $3$ leaves the origin at $120^\\circ$, ending at $\\left(3\\cos 120^\\circ, 3\\sin 120^\\circ\\right) = \\left(-\\frac{3}{2}, \\frac{3\\sqrt{3}}{2}\\right)$. The distance formula gives $c^2 = \\left(7 + \\frac{3}{2}\\right)^2 + \\left(\\frac{3\\sqrt{3}}{2}\\right)^2 = \\frac{289}{4} + \\frac{27}{4} = \\frac{316}{4} = 79$, so $c = \\sqrt{79}$ ✓. Check against the right-angled case: a $90^\\circ$ hinge would give $\\sqrt{49 + 9} = \\sqrt{58} \\approx 7.6$, and widening it to $120^\\circ$ pushes the ends apart to $\\sqrt{79} \\approx 8.9$ — longer, but still under $7 + 3 = 10$.',
    },
    {
      q: 'Two sides of a triangle measure $12$ and $8$, and the angle between them is $120^\\circ$. Find the third side.',
      fig: {
        view: [-6, -2, 14, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [-4, 6.928]], fill: false },
          { t: 'angle', at: [0, 0], from: [12, 0], to: [-4, 6.928], r: 1.6, label: '120' },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [-2, 3.464], text: '8', dx: -8, dy: -8 },
          { t: 'label', p: [4, 3.464], text: '?', dx: 10, dy: 8 },
        ],
      },
      answer: '$4\\sqrt{19}$',
      solution:
        'Law of Cosines with $\\cos 120^\\circ = -\\frac{1}{2}$: $c^2 = 12^2 + 8^2 - 2 \\cdot 12 \\cdot 8 \\cdot \\left(-\\frac{1}{2}\\right) = 144 + 64 + 96 = 304$, and since $304 = 16 \\cdot 19$, $c = 4\\sqrt{19}$ ✓. Second route, by placing the triangle on coordinates and measuring. Put the shared vertex at the origin with the side of length $12$ along the positive $x$-axis, ending at $(12, 0)$. The side of length $8$ leaves the origin at $120^\\circ$, ending at $\\left(8\\cos 120^\\circ, 8\\sin 120^\\circ\\right) = \\left(-4, 4\\sqrt{3}\\right)$. The distance formula gives $c^2 = (12 + 4)^2 + \\left(4\\sqrt{3}\\right)^2 = 256 + 48 = 304$, so $c = 4\\sqrt{19}$ ✓. Check against the right-angled case: a $90^\\circ$ hinge would give $\\sqrt{144 + 64} = \\sqrt{208} \\approx 14.4$, and the wider $120^\\circ$ hinge stretches the third side to $4\\sqrt{19} \\approx 17.4$, comfortably below the limit of $12 + 8 = 20$.',
    },
  ],

  // slot 9 — largest angle (or a named angle) together with the exact area,
  //          from three sides. Lanes: 5, 16, 19 -> 120 deg and 20*sqrt(3);
  //          8, 13, 15 -> 60 deg and 30*sqrt(3); 9, 12, 15 -> 90 deg and 54.
  [
    {
      q: 'A triangle has sides of length $5$, $16$, and $19$. Find its largest angle and its exact area.',
      fig: {
        view: [-1.5, -1.5, 21, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [19, 0], [3.421, 3.646]], fill: false },
          { t: 'angle', at: [3.421, 3.646], from: [0, 0], to: [19, 0], r: 1, label: '?' },
          { t: 'label', p: [9.5, 0], text: '19', dx: 0, dy: 14 },
          { t: 'label', p: [1.71, 1.823], text: '5', dx: -8, dy: -6 },
          { t: 'label', p: [11.21, 1.823], text: '16', dx: 10, dy: 6 },
        ],
      },
      answer: 'The largest angle is $120^\\circ$ and the area is $20\\sqrt{3}$',
      solution:
        'Angle first, then area. The largest angle faces the longest side, $19$, so it sits between the sides $5$ and $16$; the rearranged Law of Cosines gives $\\cos C = \\frac{5^2 + 16^2 - 19^2}{2 \\cdot 5 \\cdot 16} = \\frac{25 + 256 - 361}{160} = \\frac{-80}{160} = -\\frac{1}{2}$, and the only angle between $0^\\circ$ and $180^\\circ$ with that cosine is $C = 120^\\circ$. Now the area formula: Area $= \\frac{1}{2} \\cdot 5 \\cdot 16 \\cdot \\sin 120^\\circ = 40 \\cdot \\frac{\\sqrt{3}}{2} = 20\\sqrt{3}$ ✓. Second route, area first, then angle, using Heron’s formula — which never mentions an angle at all. The semiperimeter is $s = \\frac{5 + 16 + 19}{2} = 20$, so the area is $\\sqrt{20(20 - 5)(20 - 16)(20 - 19)} = \\sqrt{20 \\cdot 15 \\cdot 4 \\cdot 1} = \\sqrt{1200} = 20\\sqrt{3}$. Reading $\\frac{1}{2}ab\\sin C$ backwards, $\\sin C = \\frac{2 \\cdot 20\\sqrt{3}}{5 \\cdot 16} = \\frac{\\sqrt{3}}{2}$, which allows $60^\\circ$ or $120^\\circ$; since $5^2 + 16^2 = 281$ falls short of $19^2 = 361$, the angle facing $19$ is obtuse, so it is $120^\\circ$ ✓. Check with the largest-side test: comparing each side squared against the sum of the other two, only $361 > 281$ overshoots, so exactly one angle is obtuse and it is the one we named.',
    },
    {
      q: 'A triangle has sides of length $8$, $13$, and $15$. Find the angle opposite the side of length $13$, and find the exact area of the triangle.',
      fig: {
        view: [-1.5, -1.5, 16.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [4, 6.928]], fill: false },
          { t: 'angle', at: [0, 0], from: [15, 0], to: [4, 6.928], r: 1, label: '?' },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [2, 3.464], text: '8', dx: -10, dy: -4 },
          { t: 'label', p: [9.5, 3.464], text: '13', dx: 10, dy: 4 },
        ],
      },
      answer: 'The angle opposite the side of length $13$ is $60^\\circ$ and the area is $30\\sqrt{3}$',
      solution:
        'Angle first, then area. The angle facing the side of length $13$ lies between the sides $8$ and $15$, so the rearranged Law of Cosines gives $\\cos\\theta = \\frac{8^2 + 15^2 - 13^2}{2 \\cdot 8 \\cdot 15} = \\frac{64 + 225 - 169}{240} = \\frac{120}{240} = \\frac{1}{2}$, and cosine names the angle uniquely: $\\theta = 60^\\circ$. Then Area $= \\frac{1}{2} \\cdot 8 \\cdot 15 \\cdot \\sin 60^\\circ = 60 \\cdot \\frac{\\sqrt{3}}{2} = 30\\sqrt{3}$ ✓. Second route, area first, then angle, using Heron’s formula — which never mentions an angle at all. The semiperimeter is $s = \\frac{8 + 13 + 15}{2} = 18$, so the area is $\\sqrt{18(18 - 8)(18 - 13)(18 - 15)} = \\sqrt{18 \\cdot 10 \\cdot 5 \\cdot 3} = \\sqrt{2700} = 30\\sqrt{3}$. Reading $\\frac{1}{2}ab\\sin\\theta$ backwards, $\\sin\\theta = \\frac{2 \\cdot 30\\sqrt{3}}{8 \\cdot 15} = \\frac{\\sqrt{3}}{2}$, which allows $60^\\circ$ or $120^\\circ$; since $8^2 + 15^2 = 289$ comfortably exceeds $13^2 = 169$, that angle is acute, so it is $60^\\circ$ ✓. Check with the largest-side test: $15^2 = 225$ is less than $8^2 + 13^2 = 233$, so even the biggest angle is acute and the triangle has no obtuse corner anywhere.',
    },
    {
      q: 'A triangular sail has sides measuring $9$, $12$, and $15$ feet. Find its largest angle and its exact area.',
      fig: {
        view: [-1.5, -1.5, 16.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [5.4, 7.2]], fill: false },
          { t: 'angle', at: [5.4, 7.2], from: [0, 0], to: [15, 0], r: 1.1, label: '?' },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [2.7, 3.6], text: '9', dx: -10, dy: -4 },
          { t: 'label', p: [10.2, 3.6], text: '12', dx: 10, dy: 4 },
        ],
      },
      answer: 'The largest angle is $90^\\circ$ and the area is $54$ square feet',
      solution:
        'Angle first, then area. The largest angle faces the longest side, $15$, so it sits between the sides $9$ and $12$; the rearranged Law of Cosines gives $\\cos C = \\frac{9^2 + 12^2 - 15^2}{2 \\cdot 9 \\cdot 12} = \\frac{81 + 144 - 225}{216} = \\frac{0}{216} = 0$, and the only angle between $0^\\circ$ and $180^\\circ$ with cosine $0$ is $C = 90^\\circ$. Then Area $= \\frac{1}{2} \\cdot 9 \\cdot 12 \\cdot \\sin 90^\\circ = 54 \\cdot 1 = 54$ square feet ✓. Second route, area first, then angle, using Heron’s formula — which never mentions an angle at all. The semiperimeter is $s = \\frac{9 + 12 + 15}{2} = 18$, so the area is $\\sqrt{18(18 - 9)(18 - 12)(18 - 15)} = \\sqrt{18 \\cdot 9 \\cdot 6 \\cdot 3} = \\sqrt{2916} = 54$. Reading $\\frac{1}{2}ab\\sin C$ backwards, $\\sin C = \\frac{2 \\cdot 54}{9 \\cdot 12} = 1$, and a sine of exactly $1$ leaves only one possibility, $C = 90^\\circ$ ✓. Check with the largest-side test: $9^2 + 12^2 = 81 + 144 = 225 = 15^2$, the Pythagorean relation on the nose, so the sail is a right triangle and its two shorter sides are the legs — which is also why the area came out as half their product.',
    },
  ],

  // slot 10 — all three angles of an isosceles or equilateral triangle, then the
  //           exact area. Lanes: 6, 6, 6*sqrt(2) -> 90/45/45 and 18;
  //           equilateral 8 -> 60/60/60 and 16*sqrt(3);
  //           9, 9, 9*sqrt(3) -> 120/30/30 and 81*sqrt(3)/4.
  //           The base is a given, so no lane marks it `?`.
  [
    {
      q: 'An isosceles triangle has two sides of length $6$ and a base of length $6\\sqrt{2}$. Find all three angles, then compute the exact area of the triangle.',
      fig: {
        view: [-1.5, -1.5, 10.5, 6],
        elems: [
          { t: 'poly', pts: [[0, 0], [8.485, 0], [4.243, 4.243]], fill: false },
          { t: 'tick', a: [0, 0], b: [4.243, 4.243], n: 1 },
          { t: 'tick', a: [8.485, 0], b: [4.243, 4.243], n: 1 },
          { t: 'label', p: [2.121, 2.121], text: '6', dx: -8, dy: -8 },
          { t: 'label', p: [6.364, 2.121], text: '6', dx: 8, dy: -8 },
        ],
      },
      answer: 'The angles are $90^\\circ$, $45^\\circ$, $45^\\circ$, and the area is $18$',
      solution:
        'Find the apex angle with the Law of Cosines, where the base of $6\\sqrt{2}$ faces the angle between the two sides of length $6$: $\\cos C = \\frac{6^2 + 6^2 - \\left(6\\sqrt{2}\\right)^2}{2 \\cdot 6 \\cdot 6} = \\frac{36 + 36 - 72}{72} = 0$, so $C = 90^\\circ$. Equal sides face equal angles, so the two base angles split the remaining $90^\\circ$ evenly at $45^\\circ$ each. Then Area $= \\frac{1}{2} \\cdot 6 \\cdot 6 \\cdot \\sin 90^\\circ = 18$ ✓. Second route, by cutting the triangle down its line of symmetry. The perpendicular from the apex to the base bisects the base, leaving a right triangle with hypotenuse $6$ and one leg $\\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}$, so the height is $\\sqrt{36 - 18} = \\sqrt{18} = 3\\sqrt{2}$ as well. Two equal legs mean that half-triangle is a $45$-$45$-$90$, so each base angle is $45^\\circ$ and each half of the apex is $45^\\circ$, making the apex $90^\\circ$. The area is base times height halved: $\\frac{1}{2} \\cdot 6\\sqrt{2} \\cdot 3\\sqrt{2} = \\frac{1}{2} \\cdot 36 = 18$ ✓. Check the angle sum: $90^\\circ + 45^\\circ + 45^\\circ = 180^\\circ$. The base is the longest side and faces the largest angle, and a base of exactly a side times $\\sqrt{2}$ is the fingerprint of a right angle at the apex.',
    },
    {
      q: 'An equilateral triangle has sides of length $8$. Find all three angles, then compute the exact area of the triangle.',
      fig: {
        view: [-1.5, -1.5, 9.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [4, 6.928]], fill: false },
          { t: 'tick', a: [0, 0], b: [4, 6.928], n: 1 },
          { t: 'tick', a: [8, 0], b: [4, 6.928], n: 1 },
          { t: 'tick', a: [0, 0], b: [8, 0], n: 1 },
          { t: 'label', p: [2, 3.464], text: '8', dx: -8, dy: -6 },
          { t: 'label', p: [6, 3.464], text: '8', dx: 8, dy: -6 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
        ],
      },
      answer: 'The angles are $60^\\circ$, $60^\\circ$, $60^\\circ$, and the area is $16\\sqrt{3}$',
      solution:
        'Find an angle with the Law of Cosines, taking any side as the one facing it: $\\cos C = \\frac{8^2 + 8^2 - 8^2}{2 \\cdot 8 \\cdot 8} = \\frac{64}{128} = \\frac{1}{2}$, so $C = 60^\\circ$; the same computation applies at every vertex, so all three angles are $60^\\circ$. Then Area $= \\frac{1}{2} \\cdot 8 \\cdot 8 \\cdot \\sin 60^\\circ = 32 \\cdot \\frac{\\sqrt{3}}{2} = 16\\sqrt{3}$ ✓. Second route, by cutting the triangle down its line of symmetry. The perpendicular from any vertex bisects the opposite side, leaving a right triangle with hypotenuse $8$ and one leg $4$; since that leg is exactly half the hypotenuse, the angle facing it is $30^\\circ$, and the whole vertex angle is twice that, $60^\\circ$. Three equal sides give three equal angles, which the $180^\\circ$ total confirms. The height is $\\sqrt{64 - 16} = \\sqrt{48} = 4\\sqrt{3}$, so the area is $\\frac{1}{2} \\cdot 8 \\cdot 4\\sqrt{3} = 16\\sqrt{3}$ ✓. Check the angle sum: $60^\\circ + 60^\\circ + 60^\\circ = 180^\\circ$. Every equilateral triangle is acute, and its area always works out to $\\frac{\\sqrt{3}}{4}$ times the side squared — here $\\frac{\\sqrt{3}}{4} \\cdot 64 = 16\\sqrt{3}$, matching both routes.',
    },
    {
      q: 'An isosceles triangle has two sides of length $9$ and a base of length $9\\sqrt{3}$. Find all three angles, then compute the exact area of the triangle.',
      fig: {
        view: [-2, -2, 17.5, 8],
        elems: [
          { t: 'poly', pts: [[0, 0], [15.588, 0], [7.794, 4.5]], fill: false },
          { t: 'tick', a: [0, 0], b: [7.794, 4.5], n: 1 },
          { t: 'tick', a: [15.588, 0], b: [7.794, 4.5], n: 1 },
          { t: 'label', p: [3.897, 2.25], text: '9', dx: -10, dy: -8 },
          { t: 'label', p: [11.691, 2.25], text: '9', dx: 10, dy: -8 },
        ],
      },
      answer: 'The angles are $120^\\circ$, $30^\\circ$, $30^\\circ$, and the area is $\\frac{81\\sqrt{3}}{4}$',
      solution:
        'Find the apex angle with the Law of Cosines, where the base of $9\\sqrt{3}$ faces the angle between the two sides of length $9$: $\\cos C = \\frac{9^2 + 9^2 - \\left(9\\sqrt{3}\\right)^2}{2 \\cdot 9 \\cdot 9} = \\frac{81 + 81 - 243}{162} = \\frac{-81}{162} = -\\frac{1}{2}$, so $C = 120^\\circ$. Equal sides face equal angles, so the two base angles share the remaining $60^\\circ$ evenly at $30^\\circ$ each. Then Area $= \\frac{1}{2} \\cdot 9 \\cdot 9 \\cdot \\sin 120^\\circ = \\frac{81}{2} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{81\\sqrt{3}}{4}$ ✓. Second route, by cutting the triangle down its line of symmetry. The perpendicular from the apex bisects the base, leaving a right triangle with hypotenuse $9$ and one leg $\\frac{9\\sqrt{3}}{2}$, so the height is $\\sqrt{81 - \\frac{243}{4}} = \\sqrt{\\frac{81}{4}} = \\frac{9}{2}$. That height is exactly half the hypotenuse, and the leg opposite a $30^\\circ$ angle is the one that measures half the hypotenuse, so each base angle is $30^\\circ$ and the apex is $180^\\circ - 30^\\circ - 30^\\circ = 120^\\circ$. The area is base times height halved: $\\frac{1}{2} \\cdot 9\\sqrt{3} \\cdot \\frac{9}{2} = \\frac{81\\sqrt{3}}{4}$ ✓. Check the angle sum: $120^\\circ + 30^\\circ + 30^\\circ = 180^\\circ$. Every part fits the sides it belongs to: the base $9\\sqrt{3} \\approx 15.6$ is the longest side and faces the largest angle, the two sides of $9$ face the two equal $30^\\circ$ corners, and the area $\\frac{81\\sqrt{3}}{4} \\approx 35.1$ is a believable size for a triangle roughly $15.6$ wide and only $4.5$ tall.',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 18,
  worksheet,
}
