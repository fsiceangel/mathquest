// Introduction to Geometry chapter 18 — variations for section 18.3
// (Law of Sines and Law of Cosines).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is reached twice along routes that share no steps. For a
//    third side that means the Law of Cosines once and a coordinate placement
//    with the Pythagorean Theorem once. For a missing side from two angles it
//    means the Law of Sines once and special-triangle ratios once, usually
//    reached by dropping an altitude. For an angle from three sides it means the
//    rearranged Law of Cosines once and a construction that rebuilds the
//    triangle once. For a circumradius it means the ratio
//    $\frac{a}{\sin A} = 2R$ once and the central angle over the chord once.
//  - Figures are drawn to scale from exact coordinates, they carry no grid, and
//    they label only what the reader is given. The quantity being asked for is
//    always marked with a question mark, never with its value.
//  - Each distractor is one named mistake — flipping the ratio, dropping the
//    factor of two in front of the cosine term, losing the minus sign that makes
//    an angle obtuse, reporting the diameter where the radius was asked for —
//    and it is named in CAPS.

const s183 = [
  // s1 — read the given parts and name the tool that fits them.
  [
    {
      q: 'A surveyor knows two sides of a triangular lot and the angle where those two sides meet. She wants the length of the third side. Which tool does that job?',
      choices: ['Law of Sines', 'the Pythagorean Theorem', 'Law of Cosines', 'the formula $\\frac{1}{2}ab\\sin C$'],
      answer: 2,
      solution:
        'Route one, take an inventory and match it to what each tool asks for. The surveyor holds two sides and the angle squeezed between them, and $c^2 = a^2 + b^2 - 2ab\\cos C$ asks for exactly that trio: side $a$, side $b$, and the angle $C$ between them. Nothing is missing and nothing is spare, so the Law of Cosines is the tool ✓. Check a second, independent way, by testing the recipe on a triangle whose answer is already known: take sides $6$ and $8$ meeting at $90^\\circ$. The Law of Cosines gives $c^2 = 36 + 64 - 2 \\cdot 6 \\cdot 8 \\cdot 0 = 100$, so $c = 10$, and the $6$–$8$–$10$ right triangle says the same. A rule that runs on only the parts the surveyor holds and passes the one case we can check independently is the rule she wants ✓. (The choice of the Law of Sines is PAIRING AN ANGLE WITH A SIDE THAT DOES NOT FACE IT, since $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$ needs a side together with the angle opposite it, and here the one known angle sits between the two known sides instead of across from either ✗; the choice of the Pythagorean Theorem is TREATING EVERY TRIANGLE AS A RIGHT TRIANGLE, which would report $\\sqrt{a^2 + b^2}$ no matter how wide or narrow the corner between the sides is opened ✗; the choice of $\\frac{1}{2}ab\\sin C$ is GRABBING THE FORMULA THAT EATS THE SAME THREE GIVENS BUT SERVES BACK AN AREA, since it returns square meters where a length was asked for ✗.)',
    },
    {
      q: 'A carpenter has a triangular brace with a square corner, and he has measured both sides that meet at that corner. He wants the long slanted side. Which tool reaches it in one step, with no trigonometry at all?',
      choices: ['the Pythagorean Theorem', 'Law of Sines', 'the formula $\\frac{1}{2}ab\\sin C$', 'the Law of Cosines'],
      answer: 0,
      solution:
        'Route one, take an inventory and match it to what each tool asks for. A right angle with both of its sides measured is precisely the input of $c^2 = a^2 + b^2$: square the two sides, add, take the square root, done. No angle other than the right angle is needed and no trigonometric value ever appears, so the Pythagorean Theorem is the one-step tool ✓. Check a second, independent way, by running the general machine and watching it collapse. The Law of Cosines says $c^2 = a^2 + b^2 - 2ab\\cos C$, and at $C = 90^\\circ$ the factor $\\cos C$ is $0$, so the whole correction term disappears and the statement left behind is $c^2 = a^2 + b^2$. With sides $5$ and $12$ both roads give $c^2 = 169$ and $c = 13$. The general law does not compete with the Pythagorean Theorem here; it hands it back ✓. (The choice of the Law of Sines is REACHING FOR A RATIO WHEN NO SIDE-AND-OPPOSITE-ANGLE PAIR IS IN HAND, since the only known angle is the right angle and the side facing it is the very thing being hunted ✗; the choice of $\\frac{1}{2}ab\\sin C$ is ANSWERING WITH AN AREA WHEN A LENGTH WAS ASKED FOR, which is the wrong kind of quantity entirely ✗; the choice of the Law of Cosines is REACHING PAST THE ONE-STEP TOOL FOR THE GENERAL ONE, which does reach the same $13$ but only after looking up $\\cos 90^\\circ$ and carrying a term that turns out to be $0$ ✗.)',
    },
    {
      q: 'A gardener measures two edges of a triangular flower bed and the angle at the corner where those edges meet. She wants to know how much soil covers the bed, so she needs its area. Which tool gives it directly?',
      choices: ['Law of Cosines', 'Law of Sines', 'the Pythagorean Theorem', 'the formula $\\frac{1}{2}ab\\sin C$'],
      answer: 3,
      solution:
        'Route one, take an inventory and match it to what each tool asks for. The gardener holds two sides and the angle between them, and $\\frac{1}{2}ab\\sin C$ asks for two sides and the angle between them and returns an area. The inputs line up and the output is the right kind of quantity, so that formula is the tool ✓. Check a second, independent way, by rebuilding the area from base and height, which is the only area rule a gardener needs to trust. Call the edges $a$ and $b$ with the measured angle $C$ between them. Treat $b$ as the base and drop a perpendicular from the far end of $a$ down to the line of $b$. That perpendicular is the short side of a right triangle whose hypotenuse is $a$ and whose angle at the corner is $C$, so its length is $a\\sin C$. Then area $=\\frac{1}{2} \\cdot \\text{base} \\cdot \\text{height} = \\frac{1}{2} \\cdot b \\cdot a\\sin C$, which is the formula named ✓. (The choice of the Law of Cosines is GRABBING THE LAW THAT EATS THE SAME THREE GIVENS BUT SERVES BACK THE THIRD SIDE, a length rather than the area the gardener asked for ✗; the choice of the Law of Sines is PAIRING AN ANGLE WITH A SIDE THAT DOES NOT FACE IT, since the measured angle sits between the two measured edges and faces neither, so the ratio cannot even be started ✗; the choice of the Pythagorean Theorem is ASSUMING A RIGHT ANGLE THAT WAS NEVER GIVEN, and it too would return a length instead of an area ✗.)',
    },
  ],
  // s2 — specialize the Law of Cosines at a friendly angle.
  [
    {
      q: 'Set $C = 60^\\circ$ in the Law of Cosines $c^2 = a^2 + b^2 - 2ab\\cos C$. Which equation is left?',
      choices: ['$c^2 = a^2 + b^2 - 2ab$', '$c^2 = a^2 + b^2 - ab$', '$c^2 = a^2 + b^2 + ab$', '$c^2 = a^2 + b^2 - \\frac{ab}{2}$'],
      answer: 1,
      solution:
        'Route one, substitute the special value. Since $\\cos 60^\\circ = \\frac{1}{2}$, the correction term becomes $-2ab \\cdot \\frac{1}{2} = -ab$, and the law reads $c^2 = a^2 + b^2 - ab$ ✓. Check a second, independent way, with coordinates and never a cosine rule at all. Put the $60^\\circ$ corner at the origin with the side of length $b$ running along the positive $x$-axis to $(b, 0)$. The side of length $a$ leaves the origin at $60^\\circ$, so its far end sits at $\\left(\\frac{a}{2}, \\frac{a\\sqrt{3}}{2}\\right)$, using the $30$-$60$-$90$ ratios. The distance formula gives $c^2 = \\left(b - \\frac{a}{2}\\right)^2 + \\frac{3a^2}{4} = b^2 - ab + \\frac{a^2}{4} + \\frac{3a^2}{4} = a^2 + b^2 - ab$ ✓. (The choice $c^2 = a^2 + b^2 - 2ab$ is READING $\\cos 60^\\circ$ AS $1$, which leaves the factor $2ab$ standing untouched ✗; the choice $c^2 = a^2 + b^2 + ab$ is USING THE COSINE OF THE SUPPLEMENT, since $\\cos 120^\\circ = -\\frac{1}{2}$ flips the sign of the correction and stretches $c$ instead of shrinking it ✗; the choice $c^2 = a^2 + b^2 - \\frac{ab}{2}$ is DROPPING THE FACTOR OF $2$ IN FRONT OF $ab$, multiplying only $ab$ by $\\frac{1}{2}$ ✗.)',
    },
    {
      q: 'Set $C = 120^\\circ$ in the Law of Cosines $c^2 = a^2 + b^2 - 2ab\\cos C$. Which equation is left?',
      choices: ['$c^2 = a^2 + b^2 - ab$', '$c^2 = a^2 + b^2 + 2ab$', '$c^2 = a^2 + b^2 + \\frac{ab}{2}$', '$c^2 = a^2 + b^2 + ab$'],
      answer: 3,
      solution:
        'Route one, substitute the special value. Since $\\cos 120^\\circ = -\\frac{1}{2}$, the correction term becomes $-2ab \\cdot \\left(-\\frac{1}{2}\\right) = +ab$, and the law reads $c^2 = a^2 + b^2 + ab$ ✓. Check a second, independent way, with coordinates and never a cosine rule at all. Put the $120^\\circ$ corner at the origin with the side of length $b$ along the positive $x$-axis to $(b, 0)$. The side of length $a$ leaves the origin at $120^\\circ$, so its far end sits at $\\left(-\\frac{a}{2}, \\frac{a\\sqrt{3}}{2}\\right)$ — the same $30$-$60$-$90$ ratios, now leaning backward. The horizontal gap is $b + \\frac{a}{2}$, so $c^2 = \\left(b + \\frac{a}{2}\\right)^2 + \\frac{3a^2}{4} = b^2 + ab + \\frac{a^2}{4} + \\frac{3a^2}{4} = a^2 + b^2 + ab$ ✓. (The choice $c^2 = a^2 + b^2 - ab$ is USING THE COSINE OF THE ACUTE PARTNER $60^\\circ$ AND KEEPING ITS POSITIVE SIGN, which shrinks $c$ when opening the hinge past a right angle should stretch it ✗; the choice $c^2 = a^2 + b^2 + 2ab$ is READING $\\cos 120^\\circ$ AS $-1$, which leaves the whole factor $2ab$ standing ✗; the choice $c^2 = a^2 + b^2 + \\frac{ab}{2}$ is DROPPING THE FACTOR OF $2$ IN FRONT OF $ab$, multiplying only $ab$ by $-\\frac{1}{2}$ ✗.)',
    },
    {
      q: 'Set $C = 45^\\circ$ in the Law of Cosines $c^2 = a^2 + b^2 - 2ab\\cos C$. Which equation is left?',
      choices: ['$c^2 = a^2 + b^2 - \\frac{ab\\sqrt{2}}{2}$', '$c^2 = a^2 + b^2 - 2ab\\sqrt{2}$', '$c^2 = a^2 + b^2 - ab\\sqrt{2}$', '$c^2 = a^2 + b^2 + ab\\sqrt{2}$'],
      answer: 2,
      solution:
        'Route one, substitute the special value. Since $\\cos 45^\\circ = \\frac{\\sqrt{2}}{2}$, the correction term becomes $-2ab \\cdot \\frac{\\sqrt{2}}{2} = -ab\\sqrt{2}$, because the $2$ in front cancels the $2$ underneath. The law reads $c^2 = a^2 + b^2 - ab\\sqrt{2}$ ✓. Check a second, independent way, with coordinates and never a cosine rule at all. Put the $45^\\circ$ corner at the origin with the side of length $b$ along the positive $x$-axis to $(b, 0)$. The side of length $a$ leaves the origin at $45^\\circ$, so by the $45$-$45$-$90$ ratios its far end sits at $\\left(\\frac{a\\sqrt{2}}{2}, \\frac{a\\sqrt{2}}{2}\\right)$. Then $c^2 = \\left(b - \\frac{a\\sqrt{2}}{2}\\right)^2 + \\frac{a^2}{2} = b^2 - ab\\sqrt{2} + \\frac{a^2}{2} + \\frac{a^2}{2} = a^2 + b^2 - ab\\sqrt{2}$ ✓. (The choice $c^2 = a^2 + b^2 - \\frac{ab\\sqrt{2}}{2}$ is DROPPING THE FACTOR OF $2$ IN FRONT OF $ab$, so nothing cancels the $2$ underneath the radical ✗; the choice $c^2 = a^2 + b^2 - 2ab\\sqrt{2}$ is READING $\\cos 45^\\circ$ AS $\\sqrt{2}$ INSTEAD OF $\\frac{\\sqrt{2}}{2}$, which leaves the $2$ in front untouched ✗; the choice $c^2 = a^2 + b^2 + ab\\sqrt{2}$ is USING $\\cos 135^\\circ$ IN PLACE OF $\\cos 45^\\circ$, a sign slip that stretches $c$ when an acute corner should shrink it ✗.)',
    },
  ],
  // s3 — Law of Sines when one of the two known angles is right or obtuse.
  [
    {
      q: 'Triangle $ABC$ has $\\angle A = 45^\\circ$ and $\\angle B = 90^\\circ$, and the side $a$ facing $\\angle A$ measures $10$. How long is the side $b$?',
      fig: {
        view: [-2, -2, 13, 12.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [0, 10]], fill: false },
          { t: 'right', at: [0, 0], from: [10, 0], to: [0, 10] },
          { t: 'angle', at: [10, 0], from: [0, 0], to: [0, 10], r: 1.5, label: '45' },
          { t: 'point', p: [0, 0], label: 'B', dx: -12, dy: 12 },
          { t: 'point', p: [10, 0], label: 'A', dx: 12, dy: 12 },
          { t: 'point', p: [0, 10], label: 'C', dx: -12, dy: -6 },
          { t: 'label', p: [0, 5], text: '10', dx: -14, dy: 0 },
          { t: 'label', p: [5, 5], text: '?', dx: 12, dy: 8 },
        ],
      },
      choices: ['$10\\sqrt{2}$', '$10$', '$5\\sqrt{2}$', '$\\frac{20\\sqrt{3}}{3}$'],
      answer: 0,
      solution:
        'Route one, run the ratio. The Law of Sines pairs each side with the angle facing it: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$, so $b = \\frac{10\\sin 90^\\circ}{\\sin 45^\\circ} = \\frac{10 \\cdot 1}{\\frac{\\sqrt{2}}{2}} = \\frac{20}{\\sqrt{2}} = 10\\sqrt{2}$ ✓. Check a second, independent way, with right-triangle facts and no ratio at all. The angle at $B$ is $90^\\circ$, so the triangle is right-angled at $B$ and $b$ is its hypotenuse. The angles must total $180^\\circ$, so $\\angle C = 180^\\circ - 45^\\circ - 90^\\circ = 45^\\circ$, which makes the two legs equal; the leg $a$ facing $\\angle A$ is $10$, so the other leg is $10$ as well. The Pythagorean Theorem then gives $b = \\sqrt{100 + 100} = \\sqrt{200} = 10\\sqrt{2} \\approx 14.14$ ✓. (The choice $10$ is NAMING THE OTHER LEG INSTEAD OF THE HYPOTENUSE, which is indeed $10$ in this isosceles right triangle but is the side $c$, not the side $b$ the question asks for ✗; the choice $5\\sqrt{2}$ is FLIPPING THE RATIO, computing $\\frac{10\\sin 45^\\circ}{\\sin 90^\\circ} = 5\\sqrt{2}$ and so shrinking the hypotenuse below the leg it must beat ✗; the choice $\\frac{20\\sqrt{3}}{3}$ is READING $\\sin 45^\\circ$ AS $\\frac{\\sqrt{3}}{2}$, the value that belongs to $60^\\circ$, which turns the division into $\\frac{10}{\\frac{\\sqrt{3}}{2}} = \\frac{20}{\\sqrt{3}}$ ✗.)',
    },
    {
      q: 'A triangle $ABC$ has $\\angle A = 30^\\circ$ and $\\angle B = 135^\\circ$, with the side $a$ facing $\\angle A$ equal to $11$. Give the exact length of $b$.',
      fig: {
        view: [-6, -1.5, 19, 8],
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [-4.026, 4.026]], fill: false },
          { t: 'angle', at: [0, 0], from: [11, 0], to: [-4.026, 4.026], r: 1.2, label: '135' },
          { t: 'angle', at: [-4.026, 4.026], from: [0, 0], to: [11, 0], r: 1.2, label: '30' },
          { t: 'point', p: [0, 0], label: 'B', dx: -6, dy: 16 },
          { t: 'point', p: [11, 0], label: 'C', dx: 12, dy: 12 },
          { t: 'point', p: [-4.026, 4.026], label: 'A', dx: -14, dy: -4 },
          { t: 'label', p: [5.5, 0], text: '11', dx: 0, dy: 14 },
          { t: 'label', p: [3.487, 2.013], text: '?', dx: 6, dy: -8 },
        ],
      },
      choices: ['$22$', '$\\frac{11\\sqrt{2}}{2}$', '$11\\sqrt{2}$', '$11\\sqrt{3}$'],
      answer: 2,
      solution:
        'Route one, run the ratio. $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$ gives $b = \\frac{11\\sin 135^\\circ}{\\sin 30^\\circ} = \\frac{11 \\cdot \\frac{\\sqrt{2}}{2}}{\\frac{1}{2}} = 11\\sqrt{2}$ ✓. Check a second, independent way, by dropping an altitude and reading off two special triangles. Extend the side $AB$ past $B$ and drop the perpendicular from $C$ to that line, landing at $H$. Because $\\angle ABC = 135^\\circ$, the leftover angle $\\angle HBC$ is $180^\\circ - 135^\\circ = 45^\\circ$, so triangle $BHC$ is a $45$-$45$-$90$ triangle with hypotenuse $BC = 11$; its height is $CH = 11 \\cdot \\frac{\\sqrt{2}}{2} = \\frac{11\\sqrt{2}}{2}$. Now read the same height out of triangle $AHC$, which is right-angled at $H$ with a $30^\\circ$ angle at $A$: the leg facing $30^\\circ$ is half the hypotenuse, so $CH = \\frac{AC}{2} = \\frac{b}{2}$. Setting the two readings equal gives $b = 2 \\cdot \\frac{11\\sqrt{2}}{2} = 11\\sqrt{2} \\approx 15.56$, the longest side, as the side facing the widest angle must be ✓. (The choice $22$ is READING $\\sin 135^\\circ$ AS $1$, treating the obtuse angle as though it were the right angle that would give $\\frac{11}{\\frac{1}{2}} = 22$ ✗; the choice $\\frac{11\\sqrt{2}}{2}$ is FLIPPING THE RATIO, computing $\\frac{11\\sin 30^\\circ}{\\sin 135^\\circ} = \\frac{11}{\\sqrt{2}}$ and so making the side opposite the widest angle the shortest one ✗; the choice $11\\sqrt{3}$ is BORROWING THE SINE OF $120^\\circ$, whose $\\frac{\\sqrt{3}}{2}$ belongs to a different obtuse angle than the one drawn ✗.)',
    },
    {
      q: 'Triangle $ABC$ has $\\angle A = 60^\\circ$ and $\\angle B = 90^\\circ$, and the side facing $\\angle A$ measures $9$. Give the exact length of the side $b$ facing $\\angle B$.',
      fig: {
        view: [-1.5, -1.5, 7.5, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [5.196, 0], [0, 9]], fill: false },
          { t: 'right', at: [0, 0], from: [5.196, 0], to: [0, 9] },
          { t: 'angle', at: [5.196, 0], from: [0, 0], to: [0, 9], r: 1.2, label: '60' },
          { t: 'point', p: [0, 0], label: 'B', dx: -12, dy: 12 },
          { t: 'point', p: [5.196, 0], label: 'A', dx: 10, dy: 14 },
          { t: 'point', p: [0, 9], label: 'C', dx: -12, dy: -6 },
          { t: 'label', p: [0, 4.5], text: '9', dx: -12, dy: 0 },
          { t: 'label', p: [2.598, 4.5], text: '?', dx: 12, dy: 6 },
        ],
      },
      choices: ['$9\\sqrt{3}$', '$6\\sqrt{3}$', '$\\frac{9\\sqrt{3}}{2}$', '$9\\sqrt{2}$'],
      answer: 1,
      solution:
        'Route one, run the ratio. $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$ gives $b = \\frac{9\\sin 90^\\circ}{\\sin 60^\\circ} = \\frac{9}{\\frac{\\sqrt{3}}{2}} = \\frac{18}{\\sqrt{3}} = \\frac{18\\sqrt{3}}{3} = 6\\sqrt{3}$ ✓. Check a second, independent way, with the Pythagorean Theorem and a halving rule. The right angle at $B$ makes $a$ and $c$ the legs and $b$ the hypotenuse. The third angle is $\\angle C = 180^\\circ - 60^\\circ - 90^\\circ = 30^\\circ$, and the leg facing a $30^\\circ$ angle in a right triangle is half the hypotenuse, so $c = \\frac{b}{2}$. Feed that into $a^2 + c^2 = b^2$: $81 + \\frac{b^2}{4} = b^2$, so $81 = \\frac{3b^2}{4}$, giving $b^2 = 108$ and $b = 6\\sqrt{3}$ ✓. (The choice $9\\sqrt{3}$ is TREATING THE GIVEN SIDE AS THE SHORT LEG AND MULTIPLYING BY $\\sqrt{3}$, though $9$ faces the $60^\\circ$ angle and is already the long leg ✗; the choice $\\frac{9\\sqrt{3}}{2}$ is FLIPPING THE RATIO, computing $\\frac{9\\sin 60^\\circ}{\\sin 90^\\circ}$ and landing on a hypotenuse shorter than the leg $9$ it must beat ✗; the choice $9\\sqrt{2}$ is READING $\\sin 60^\\circ$ AS $\\frac{\\sqrt{2}}{2}$, the value that belongs to $45^\\circ$, which turns the division into $\\frac{9}{\\frac{\\sqrt{2}}{2}} = 9\\sqrt{2}$ ✗.)',
    },
  ],
  // s4 — third side from two sides and the included angle, one obtuse round.
  [
    {
      q: 'A kite frame is built from two struts of length $4$ and $6$ joined at an angle of $120^\\circ$. How far apart are their free ends?',
      fig: {
        view: [-3.5, -1.5, 7.5, 5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [-2, 3.464]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [-2, 3.464], r: 0.9, label: '120' },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [-1, 1.732], text: '4', dx: -12, dy: -4 },
          { t: 'label', p: [2, 1.732], text: '?', dx: 12, dy: 8 },
        ],
      },
      choices: ['$2\\sqrt{7}$', '$8$', '$2\\sqrt{13}$', '$2\\sqrt{19}$'],
      answer: 3,
      solution:
        'Route one, the Law of Cosines with $\\cos 120^\\circ = -\\frac{1}{2}$: $c^2 = 4^2 + 6^2 - 2 \\cdot 4 \\cdot 6 \\cdot \\left(-\\frac{1}{2}\\right) = 16 + 36 + 24 = 76$, so $c = \\sqrt{76} = 2\\sqrt{19}$ ✓. Check a second, independent way, with coordinates and the Pythagorean Theorem. Put the wide corner at the origin and run the strut of length $6$ along the positive $x$-axis to $(6, 0)$. The strut of length $4$ leaves the origin at $120^\\circ$, so it leans back over the negative $x$-axis, meeting that axis at $60^\\circ$. Drop a perpendicular from its free end to the $x$-axis and a $30$-$60$-$90$ triangle with hypotenuse $4$ appears: its short leg is $2$ and its long leg is $2\\sqrt{3}$, putting the free end at $\\left(-2, 2\\sqrt{3}\\right)$. The two free ends are $8$ apart horizontally and $2\\sqrt{3}$ apart vertically, so the square of the distance between them is $8^2 + \\left(2\\sqrt{3}\\right)^2 = 64 + 12 = 76$ and the distance is $2\\sqrt{19} \\approx 8.72$ — longer than either strut, as a corner opened past a right angle demands ✓. (The choice $2\\sqrt{7}$ is USING $\\cos 60^\\circ$ IN PLACE OF $\\cos 120^\\circ$, which subtracts $24$ instead of adding it and gives $\\sqrt{28}$ ✗; the choice $8$ is DROPPING THE FACTOR OF $2$ IN THE CORRECTION TERM, adding only $4 \\cdot 6 \\cdot \\frac{1}{2} = 12$ to $52$ for $\\sqrt{64}$ ✗; the choice $2\\sqrt{13}$ is SKIPPING THE CORRECTION TERM ENTIRELY, adding $16 + 36 = 52$ as though the struts met at a square corner ✗.)',
    },
    {
      q: 'A triangular garden bed has two edges measuring $7$ and $8$ meters that meet at a $60^\\circ$ corner. How long is the third edge?',
      fig: {
        view: [-1.5, -1.5, 9.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [3.5, 6.062]], fill: false },
          { t: 'angle', at: [0, 0], from: [8, 0], to: [3.5, 6.062], r: 1, label: '60' },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [1.75, 3.031], text: '7', dx: -12, dy: -4 },
          { t: 'label', p: [5.75, 3.031], text: '?', dx: 12, dy: 8 },
        ],
      },
      choices: ['$\\sqrt{113}$', '$\\sqrt{57}$', '$13$', '$\\frac{7\\sqrt{3}}{2}$'],
      answer: 1,
      solution:
        'Route one, the Law of Cosines with $\\cos 60^\\circ = \\frac{1}{2}$: $c^2 = 7^2 + 8^2 - 2 \\cdot 7 \\cdot 8 \\cdot \\frac{1}{2} = 49 + 64 - 56 = 57$, so the third edge is $\\sqrt{57}$ meters ✓. Check a second, independent way, with coordinates and the Pythagorean Theorem. Put the $60^\\circ$ corner at the origin and lay the $8$-meter edge along the positive $x$-axis to $(8, 0)$. The $7$-meter edge leaves the origin at $60^\\circ$, so dropping a perpendicular from its far end to the $x$-axis makes a $30$-$60$-$90$ triangle with hypotenuse $7$: the short leg is $3.5$ and the long leg is $\\frac{7\\sqrt{3}}{2}$, so that far end sits at $\\left(3.5, \\frac{7\\sqrt{3}}{2}\\right)$. The horizontal gap to $(8, 0)$ is $4.5$ and the vertical gap is $\\frac{7\\sqrt{3}}{2}$, so the square of the third edge is $20.25 + \\frac{147}{4} = 20.25 + 36.75 = 57$ ✓. (The choice $\\sqrt{113}$ is SKIPPING THE CORRECTION TERM ENTIRELY, adding $49 + 64$ as though the corner were square ✗; the choice $13$ is A SIGN SLIP THAT USES $\\cos 120^\\circ$, adding $56$ to $113$ for $\\sqrt{169}$ and reporting an edge longer than either given one, which these two sides at $60^\\circ$ cannot produce, since $2b\\cos C = 8$ exceeds $a = 7$ ✗; the choice $\\frac{7\\sqrt{3}}{2}$ is MEASURING THE HEIGHT INSTEAD OF THE EDGE, since $\\frac{7\\sqrt{3}}{2}$ is the perpendicular drop from the far end of the $7$-meter edge down to the $8$-meter edge, not the edge that joins the two free ends ✗.)',
    },
    {
      q: 'Two sides of a triangle are $2$ and $6$ units long and meet at an angle of $120^\\circ$. Find the length of the remaining side.',
      fig: {
        view: [-2.5, -1.5, 7, 4],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [-1, 1.732]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [-1, 1.732], r: 0.7, label: '120' },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [-0.5, 0.866], text: '2', dx: -12, dy: -6 },
          { t: 'label', p: [2.5, 0.866], text: '?', dx: 8, dy: -8 },
        ],
      },
      choices: ['$2\\sqrt{13}$', '$2\\sqrt{10}$', '$\\sqrt{46}$', '$8$'],
      answer: 0,
      solution:
        'Route one, the Law of Cosines with $\\cos 120^\\circ = -\\frac{1}{2}$: $c^2 = 2^2 + 6^2 - 2 \\cdot 2 \\cdot 6 \\cdot \\left(-\\frac{1}{2}\\right) = 4 + 36 + 12 = 52$, so $c = \\sqrt{52} = 2\\sqrt{13}$ ✓. Check a second, independent way, with coordinates and the Pythagorean Theorem. Put the wide corner at the origin and run the side of length $6$ along the positive $x$-axis to $(6, 0)$. The side of length $2$ leaves the origin at $120^\\circ$, so it leans back over the negative $x$-axis, meeting that axis at $60^\\circ$. The perpendicular from its far end down to the $x$-axis cuts out a $30$-$60$-$90$ triangle with hypotenuse $2$, whose legs are $1$ and $\\sqrt{3}$, so that far end sits at $\\left(-1, \\sqrt{3}\\right)$. The horizontal gap is $7$ and the vertical gap is $\\sqrt{3}$, so the square of the third side is $49 + 3 = 52$ and the side is $2\\sqrt{13} \\approx 7.21$, comfortably between $6 - 2 = 4$ and $6 + 2 = 8$ ✓. (The choice $2\\sqrt{10}$ is SKIPPING THE CORRECTION TERM ENTIRELY, adding $4 + 36$ as though the corner were square ✗; the choice $\\sqrt{46}$ is DROPPING THE FACTOR OF $2$ IN THE CORRECTION TERM, adding only $2 \\cdot 6 \\cdot \\frac{1}{2} = 6$ to $40$ ✗; the choice $8$ is ADDING THE TWO SIDES OUTRIGHT, the length reached only if the corner were flattened all the way to $180^\\circ$ ✗.)',
    },
  ],
  // s5 — Law of Sines with two acute angles, exact answer.
  [
    {
      q: 'In a triangle, a $60^\\circ$ angle and a $30^\\circ$ angle sit at two of the corners, and the side facing the $60^\\circ$ angle measures $6$. How long is the side facing the $30^\\circ$ angle?',
      fig: {
        view: [-1.5, -1.5, 9, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [0, 3.464]], fill: false },
          { t: 'angle', at: [6, 0], from: [0, 0], to: [0, 3.464], r: 1, label: '30' },
          { t: 'angle', at: [0, 3.464], from: [0, 0], to: [6, 0], r: 0.8, label: '60' },
          { t: 'point', p: [0, 0], label: 'C', dx: -12, dy: 12 },
          { t: 'point', p: [6, 0], label: 'B', dx: 12, dy: 12 },
          { t: 'point', p: [0, 3.464], label: 'A', dx: -12, dy: -6 },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [0, 1.732], text: '?', dx: -12, dy: 0 },
        ],
      },
      choices: ['$6\\sqrt{3}$', '$2\\sqrt{3}$', '$3$', '$4\\sqrt{3}$'],
      answer: 1,
      solution:
        'Route one, run the ratio. Name the $60^\\circ$ corner $A$ and the $30^\\circ$ corner $B$, so $a = 6$ and $b$ is wanted. The Law of Sines gives $b = \\frac{a\\sin B}{\\sin A} = \\frac{6 \\cdot \\frac{1}{2}}{\\frac{\\sqrt{3}}{2}} = \\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$ ✓. Check a second, independent way, by naming the shape and reading its ratios straight off. The angles total $180^\\circ$, so the third corner $C$ measures $180^\\circ - 60^\\circ - 30^\\circ = 90^\\circ$ and the triangle is a $30$-$60$-$90$ triangle, whose sides always run in the ratio $1 : \\sqrt{3} : 2$ from the smallest angle up. The side facing $60^\\circ$ is the $\\sqrt{3}$ part and it measures $6$, so one part is $\\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$. The side facing $30^\\circ$ is exactly one part, so it measures $2\\sqrt{3} \\approx 3.46$ ✓. (The choice $6\\sqrt{3}$ is FLIPPING THE RATIO, computing $\\frac{6\\sin 60^\\circ}{\\sin 30^\\circ}$ and handing the longer side to the smaller angle ✗; the choice $3$ is SCALING BY THE ANGLES THEMSELVES INSTEAD OF THEIR SINES, since $6 \\cdot \\frac{30}{60} = 3$ treats sides as proportional to angles, which they are not ✗; the choice $4\\sqrt{3}$ is NAMING THE LONGEST SIDE INSTEAD, the $2$ part of the ratio, which faces the $90^\\circ$ corner rather than the $30^\\circ$ one ✗.)',
    },
    {
      q: 'A triangle has a $45^\\circ$ angle facing a side of length $24$, and a second angle measuring $30^\\circ$. Give the exact length of the side facing that $30^\\circ$ angle.',
      fig: {
        view: [-3, -3, 35, 21],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [28.392, 16.392]], fill: false },
          { t: 'angle', at: [0, 0], from: [24, 0], to: [28.392, 16.392], r: 3, label: '30' },
          { t: 'angle', at: [28.392, 16.392], from: [0, 0], to: [24, 0], r: 3.6, label: '45' },
          { t: 'point', p: [0, 0], label: 'B', dx: -12, dy: 12 },
          { t: 'point', p: [24, 0], label: 'C', dx: 0, dy: 16 },
          { t: 'point', p: [28.392, 16.392], label: 'A', dx: 12, dy: -6 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [26.196, 8.196], text: '?', dx: 12, dy: 4 },
        ],
      },
      choices: ['$24\\sqrt{2}$', '$16$', '$12$', '$12\\sqrt{2}$'],
      answer: 3,
      solution:
        'Route one, run the ratio. Name the $45^\\circ$ corner $A$ and the $30^\\circ$ corner $B$, so $a = 24$ and $b$ is wanted. The Law of Sines gives $b = \\frac{a\\sin B}{\\sin A} = \\frac{24 \\cdot \\frac{1}{2}}{\\frac{\\sqrt{2}}{2}} = \\frac{12 \\cdot 2}{\\sqrt{2}} = 12\\sqrt{2}$ ✓. Check a second, independent way, by dropping an altitude and using nothing but special right triangles. Let $C$ be the third corner and drop the perpendicular from $C$ onto the side joining $A$ and $B$, with foot $H$ and length $h$. The piece containing $B$ is a right triangle with a $30^\\circ$ angle at $B$ and hypotenuse $a = 24$; the leg facing a $30^\\circ$ angle is half the hypotenuse, so $h = 12$. The piece containing $A$ is a right triangle with a $45^\\circ$ angle at $A$, so it is a $45$-$45$-$90$ triangle with leg $h = 12$, and its hypotenuse is $b = 12\\sqrt{2}$ ✓. Since $12\\sqrt{2} \\approx 16.97$ is less than $24$, the smaller angle keeps the smaller side, as it must. (The choice $24\\sqrt{2}$ is FLIPPING THE RATIO, computing $\\frac{24\\sin 45^\\circ}{\\sin 30^\\circ}$ and giving the $30^\\circ$ corner the longest side in the triangle ✗; the choice $16$ is SCALING BY THE ANGLES THEMSELVES INSTEAD OF THEIR SINES, since $24 \\cdot \\frac{30}{45} = 16$ ✗; the choice $12$ is READING $\\sin 45^\\circ$ AS $1$, which stops the calculation at $24 \\cdot \\frac{1}{2}$ ✗.)',
    },
    {
      q: 'A triangle has a $60^\\circ$ angle and a $45^\\circ$ angle. The side facing the $60^\\circ$ angle measures $9$. Give the exact length of the side facing the $45^\\circ$ angle.',
      fig: {
        view: [-1.5, -1.5, 12, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [7.098, 7.098]], fill: false },
          { t: 'angle', at: [0, 0], from: [9, 0], to: [7.098, 7.098], r: 1.3, label: '45' },
          { t: 'angle', at: [7.098, 7.098], from: [0, 0], to: [9, 0], r: 1.6, label: '60' },
          { t: 'point', p: [0, 0], label: 'B', dx: -12, dy: 12 },
          { t: 'point', p: [9, 0], label: 'C', dx: 10, dy: 14 },
          { t: 'point', p: [7.098, 7.098], label: 'A', dx: 4, dy: -10 },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [8.049, 3.549], text: '?', dx: 12, dy: 4 },
        ],
      },
      choices: ['$\\frac{9\\sqrt{6}}{2}$', '$\\frac{27}{4}$', '$3\\sqrt{6}$', '$\\frac{9\\sqrt{2}}{2}$'],
      answer: 2,
      solution:
        'Route one, run the ratio. Name the $60^\\circ$ corner $A$ and the $45^\\circ$ corner $B$, so $a = 9$ and $b$ is wanted: $b = \\frac{a\\sin B}{\\sin A} = \\frac{9 \\cdot \\frac{\\sqrt{2}}{2}}{\\frac{\\sqrt{3}}{2}} = \\frac{9\\sqrt{2}}{\\sqrt{3}} = \\frac{9\\sqrt{6}}{3} = 3\\sqrt{6}$ ✓. Check a second, independent way, by dropping an altitude and using the tangent of a special angle. Let $C$ be the third corner and drop the perpendicular from $C$ onto the side joining $A$ and $B$, with foot $H$ and length $h$. The piece containing $B$ is a $45$-$45$-$90$ triangle with hypotenuse $a = 9$, so $h = \\frac{9}{\\sqrt{2}} = \\frac{9\\sqrt{2}}{2}$. In the piece containing $A$ the angle at $A$ is $60^\\circ$, and $\\tan 60^\\circ = \\sqrt{3}$ compares the far leg $h$ to the near leg $AH$, so $AH = \\frac{h}{\\sqrt{3}} = \\frac{9\\sqrt{2}}{2\\sqrt{3}} = \\frac{3\\sqrt{6}}{2}$. That near leg faces the $30^\\circ$ angle of a $30$-$60$-$90$ triangle, so the hypotenuse is twice it: $b = 3\\sqrt{6}$ ✓. (The choice $\\frac{9\\sqrt{6}}{2}$ is FLIPPING THE RATIO, computing $\\frac{9\\sin 60^\\circ}{\\sin 45^\\circ}$ and awarding the longer side to the smaller angle ✗; the choice $\\frac{27}{4}$ is SCALING BY THE ANGLES THEMSELVES INSTEAD OF THEIR SINES, since $9 \\cdot \\frac{45}{60} = \\frac{27}{4}$ ✗; the choice $\\frac{9\\sqrt{2}}{2}$ is READING $\\sin 60^\\circ$ AS $1$, which leaves the altitude $h$ standing in for the side $b$ ✗.)',
    },
  ],
  // s6 — an angle read out of three known side lengths, isosceles in the first
  // round and scalene afterwards.
  [
    {
      q: 'An isosceles triangle has sides $3$, $3$, and $3\\sqrt{2}$. What is the measure of an angle opposite a side of length $3$?',
      choices: ['$30^\\circ$', '$90^\\circ$', '$45^\\circ$', '$60^\\circ$'],
      answer: 2,
      solution:
        'Route one, the rearranged Law of Cosines. The angle facing a side of length $3$ sits between the sides $3$ and $3\\sqrt{2}$, so $\\cos\\theta = \\frac{3^2 + \\left(3\\sqrt{2}\\right)^2 - 3^2}{2 \\cdot 3 \\cdot 3\\sqrt{2}} = \\frac{9 + 18 - 9}{18\\sqrt{2}} = \\frac{18}{18\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$. Cosine fingerprints an angle uniquely between $0^\\circ$ and $180^\\circ$, so there is no second candidate to weigh: $\\theta = 45^\\circ$ ✓. Check a second, independent way, with the converse of the Pythagorean Theorem and the angle sum. The two short sides satisfy $3^2 + 3^2 = 18$, and $\\left(3\\sqrt{2}\\right)^2 = 18$ as well, so the corner between the two sides of length $3$ is a right angle. The remaining two angles share $180^\\circ - 90^\\circ = 90^\\circ$, and they are equal because they face the two equal sides, so each measures $45^\\circ$ ✓. (The choice $30^\\circ$ is CONFUSING THE $1$-$1$-$\\sqrt{2}$ TRIANGLE WITH THE $1$-$\\sqrt{3}$-$2$ TRIANGLE, whose smallest angle really is $30^\\circ$, though this triangle has two equal sides and that one has none ✗; the choice $90^\\circ$ is NAMING THE ANGLE OPPOSITE THE LONGEST SIDE, which is the right angle facing $3\\sqrt{2}$ rather than the angle the question asked about ✗; the choice $60^\\circ$ is ASSUMING TWO EQUAL SIDES MAKE THE TRIANGLE EQUILATERAL, though the third side is $3\\sqrt{2} \\approx 4.24$, not $3$ ✗.)',
    },
    {
      q: 'A triangle has sides $\\sqrt{7}$, $4$, and $3\\sqrt{3}$. What is the measure of the angle opposite the side of length $\\sqrt{7}$?',
      choices: ['$30^\\circ$', '$60^\\circ$', '$45^\\circ$', '$150^\\circ$'],
      answer: 0,
      solution:
        'Route one, the rearranged Law of Cosines. The angle facing $\\sqrt{7}$ sits between the sides $4$ and $3\\sqrt{3}$, so $\\cos\\theta = \\frac{4^2 + \\left(3\\sqrt{3}\\right)^2 - \\left(\\sqrt{7}\\right)^2}{2 \\cdot 4 \\cdot 3\\sqrt{3}} = \\frac{16 + 27 - 7}{24\\sqrt{3}} = \\frac{36}{24\\sqrt{3}} = \\frac{3}{2\\sqrt{3}} = \\frac{\\sqrt{3}}{2}$, and the one angle between $0^\\circ$ and $180^\\circ$ with that cosine is $\\theta = 30^\\circ$ ✓. Check a second, independent way, by rebuilding the triangle on a coordinate grid. Lay the side $3\\sqrt{3}$ along the horizontal axis from $P$ at $(0, 0)$ to $Q$ at $\\left(3\\sqrt{3}, 0\\right)$, and let $R$ be the remaining corner, $4$ away from $P$ and $\\sqrt{7}$ away from $Q$. Writing both distances with the Pythagorean Theorem gives $x^2 + y^2 = 16$ and $\\left(x - 3\\sqrt{3}\\right)^2 + y^2 = 7$; subtracting clears $y^2$ and leaves $6\\sqrt{3}x - 27 = 9$, so $x = 2\\sqrt{3}$, and then $y^2 = 16 - 12 = 4$ puts $R$ at $\\left(2\\sqrt{3}, 2\\right)$. Drop the perpendicular from $R$ to the axis and the right triangle it cuts off has hypotenuse $4$ and a leg of $2$ across from the corner at $P$. A leg exactly half the hypotenuse faces a $30^\\circ$ angle, and the corner at $P$ is the one facing $\\sqrt{7}$, so the answer is $30^\\circ$ ✓. (The choice $60^\\circ$ is READING THE SINE ROW INSTEAD OF THE COSINE ROW, since $\\sin 60^\\circ$ is also $\\frac{\\sqrt{3}}{2}$ ✗; the choice $45^\\circ$ is MISREADING $\\frac{\\sqrt{3}}{2}$ AS $\\frac{\\sqrt{2}}{2}$, the cosine that belongs to $45^\\circ$ ✗; the choice $150^\\circ$ is A SIGN SLIP IN THE NUMERATOR, subtracting both known squares instead of the unknown one for $\\frac{7 - 16 - 27}{24\\sqrt{3}} = -\\frac{\\sqrt{3}}{2}$, which would hand the shortest side the widest angle ✗.)',
    },
    {
      q: 'A triangle has sides $3$, $3\\sqrt{3}$, and $6$. What is the measure of the angle opposite the side of length $6$?',
      choices: ['$30^\\circ$', '$60^\\circ$', '$120^\\circ$', '$90^\\circ$'],
      answer: 3,
      solution:
        'Route one, the rearranged Law of Cosines. The angle facing $6$ sits between the sides $3$ and $3\\sqrt{3}$, so $\\cos\\theta = \\frac{3^2 + \\left(3\\sqrt{3}\\right)^2 - 6^2}{2 \\cdot 3 \\cdot 3\\sqrt{3}} = \\frac{9 + 27 - 36}{18\\sqrt{3}} = 0$, and the one angle between $0^\\circ$ and $180^\\circ$ with cosine $0$ is $\\theta = 90^\\circ$ ✓. Check a second, independent way, by rebuilding the triangle on a coordinate grid and comparing slopes. Lay the side $6$ along the horizontal axis from $P$ at $(0, 0)$ to $Q$ at $(6, 0)$, and let $R$ be the remaining corner, $3$ away from $P$ and $3\\sqrt{3}$ away from $Q$. Then $x^2 + y^2 = 9$ and $(x - 6)^2 + y^2 = 27$; subtracting clears $y^2$ and leaves $12x - 36 = -18$, so $x = \\frac{3}{2}$, and $y^2 = 9 - \\frac{9}{4} = \\frac{27}{4}$ puts $R$ at $\\left(\\frac{3}{2}, \\frac{3\\sqrt{3}}{2}\\right)$. The segment from $R$ back to $P$ drops $\\frac{3\\sqrt{3}}{2}$ over a run of $\\frac{3}{2}$, a slope of $\\sqrt{3}$, while the segment from $R$ to $Q$ drops the same $\\frac{3\\sqrt{3}}{2}$ over a run of $\\frac{9}{2}$, a slope of $-\\frac{\\sqrt{3}}{3}$. Their product is $-1$, so the two sides meeting at $R$ are perpendicular and the corner facing $6$ is a right angle ✓. (The choice $30^\\circ$ is NAMING THE ANGLE ACROSS FROM THE SHORTEST SIDE, which really does measure $30^\\circ$ here but faces the $3$ rather than the $6$ the question named ✗; the choice $60^\\circ$ is NAMING THE ANGLE ACROSS FROM THE MIDDLE SIDE, the corner facing $3\\sqrt{3}$ ✗; the choice $120^\\circ$ is ASSUMING THE ANGLE FACING THE LONGEST SIDE MUST BE OBTUSE, borrowing the familiar wide apex of a triangle built on $\\sqrt{3}$, though here $9 + 27$ lands exactly on $36$ and stops the corner at square ✗.)',
    },
  ],
  // s7 — tool choice again, this time with a case that no tool can settle.
  [
    {
      q: 'From two posts $40$ meters apart on a riverbank, a surveyor sights the same rock on the far bank and records the angle to it at each post. She wants the distance from the first post to the rock. Which tool finds it most directly?',
      choices: ['Law of Sines', 'Law of Cosines', 'the Pythagorean Theorem', 'it cannot be determined from what is given'],
      answer: 0,
      solution:
        'Route one, take an inventory and match it to what each tool asks for. The surveyor holds two angles and the side between them. The two angles hand over the third for free, since all three must total $180^\\circ$, and that third angle sits at the rock, directly facing the $40$-meter baseline. A side together with the angle across from it is exactly the matched pair the Law of Sines needs to set its ratio, and $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$ then delivers the distance to the rock ✓. Check a second, independent way, by testing the recipe on a sighting whose answer is already known. Suppose both recorded angles come out at $45^\\circ$. The angle at the rock is then $90^\\circ$, so the triangle is a $45$-$45$-$90$ shape with the $40$-meter baseline as its hypotenuse, and each post must stand $\\frac{40}{\\sqrt{2}} = 20\\sqrt{2} \\approx 28.28$ meters from the rock. The Law of Sines predicts $\\frac{40\\sin 45^\\circ}{\\sin 90^\\circ} = 20\\sqrt{2}$, matching ✓. (The choice of the Law of Cosines is REACHING FOR THE LAW THAT NEEDS TWO SIDES BEFORE IT CAN START, since $c^2 = a^2 + b^2 - 2ab\\cos C$ has two side-shaped holes and only the baseline is on offer ✗; the choice of the Pythagorean Theorem is ASSUMING A RIGHT ANGLE THAT WAS NEVER GIVEN, since the two sighted angles may be anything at all ✗; the choice that it cannot be determined is MISTAKING TWO ANGLES AND A BASELINE FOR TOO LITTLE INFORMATION, though the angles fix the shape of the triangle and the $40$ meters fix its size ✗.)',
    },
    {
      q: 'An engineer knows two sides of a triangular truss and the angle between them. She does not want the third side — she wants the size of one of the other two corners. Which tool can get her started?',
      choices: ['Law of Sines', 'the Pythagorean Theorem', 'Law of Cosines', 'the formula $\\frac{1}{2}ab\\sin C$'],
      answer: 2,
      solution:
        'Route one, take an inventory and match it to what each tool asks for. The one known angle sits between the two known sides, so no side arrives paired with the angle facing it and the Law of Sines has nothing to set its ratio with. The Law of Cosines runs on exactly this inventory: $c^2 = a^2 + b^2 - 2ab\\cos C$ hands over the third side, and once all three sides are known the same law rearranged, $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$, names whichever corner she likes. One law does both halves of the job, so it is the tool that gets her started ✓. Check a second, independent way, by running the plan on a truss whose corners are already known. Take sides $6$ and $6$ meeting at $90^\\circ$. The Law of Cosines gives $c^2 = 36 + 36 - 0 = 72$, so $c = 6\\sqrt{2}$, and then $\\cos A = \\frac{36 + 72 - 36}{2 \\cdot 6 \\cdot 6\\sqrt{2}} = \\frac{72}{72\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$, putting that corner at $45^\\circ$. An isosceles right triangle does carry two $45^\\circ$ corners, so the plan returns what the shape already promised ✓. (The choice of the Law of Sines is REACHING FOR A RATIO WITH NO MATCHED PAIR TO SET IT, since the one known angle is wedged between the two known sides and faces neither of them ✗; the choice of the Pythagorean Theorem is ASSUMING A RIGHT ANGLE THAT WAS NEVER GIVEN, and it reports lengths rather than corner sizes in any case ✗; the choice of $\\frac{1}{2}ab\\sin C$ is ANSWERING WITH AN AREA WHEN AN ANGLE WAS ASKED FOR, since it swallows exactly her three givens and hands back square units ✗.)',
    },
    {
      q: 'All three angles of a triangle are known and not a single side length is given. Which tool finds the sides?',
      choices: ['Law of Sines', 'no tool can — the sides are not determined', 'Law of Cosines', 'the formula $\\frac{1}{2}ab\\sin C$'],
      answer: 1,
      solution:
        'Route one, take an inventory and match it to what each tool asks for. Every rule in this section needs at least one length before it can speak: the Law of Sines needs a matched side to set the common ratio, the Law of Cosines needs two sides, and the area formula needs two sides. Angles carry no unit of length at all, so nothing can convert them into meters or inches, and the sides are not determined ✓. Check a second, independent way, with a counterexample. The triangle with sides $1$, $\\sqrt{3}$, $2$ has angles $30^\\circ$, $60^\\circ$, $90^\\circ$, and so does the triangle with sides $2$, $2\\sqrt{3}$, $4$, since doubling every side leaves every angle untouched. Two triangles with the same three angles and different sides means the angles alone cannot name the sides ✓. (The choice of the Law of Sines is TRUSTING THE RATIO WITH NOTHING TO ANCHOR IT, since $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$ fixes only how the sides compare to one another and never how big any of them is ✗; the choice of the Law of Cosines is HOPING A FORMULA BUILT FROM SIDES WILL RUN ON ANGLES ALONE, since $c^2 = a^2 + b^2 - 2ab\\cos C$ leaves two unknowns standing ✗; the choice of $\\frac{1}{2}ab\\sin C$ is ANSWERING A QUESTION ABOUT LENGTHS WITH A FORMULA THAT ALSO DEMANDS TWO SIDES BEFORE IT WILL START ✗.)',
    },
  ],
  // s8 — third side from two sides meeting at 60 degrees.
  [
    {
      q: 'A triangular sail has two edges of $5$ and $12$ feet meeting at a corner of $60^\\circ$. How long is the sail’s third edge?',
      fig: {
        view: [-1.5, -1.5, 8.5, 12],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [6, 10.392]], fill: false },
          { t: 'angle', at: [0, 0], from: [5, 0], to: [6, 10.392], r: 1, label: '60' },
          { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [3, 5.196], text: '12', dx: -14, dy: -4 },
          { t: 'label', p: [5.5, 5.196], text: '?', dx: 12, dy: 6 },
        ],
      },
      choices: ['$\\sqrt{229}$', '$13$', '$\\sqrt{139}$', '$\\sqrt{109}$'],
      answer: 3,
      solution:
        'Route one, the Law of Cosines with $\\cos 60^\\circ = \\frac{1}{2}$: $c^2 = 5^2 + 12^2 - 2 \\cdot 5 \\cdot 12 \\cdot \\frac{1}{2} = 25 + 144 - 60 = 109$, so the third edge is $\\sqrt{109}$ feet ✓. Check a second, independent way, with coordinates and the Pythagorean Theorem. Put the $60^\\circ$ corner at the origin with the $5$-foot edge along the positive $x$-axis to $(5, 0)$. The $12$-foot edge leaves the origin at $60^\\circ$, so the perpendicular from its far end down to the $x$-axis cuts out a $30$-$60$-$90$ triangle with hypotenuse $12$, whose legs are $6$ and $6\\sqrt{3}$; that far end sits at $\\left(6, 6\\sqrt{3}\\right)$. The two free ends differ by $1$ horizontally and $6\\sqrt{3}$ vertically, so the third edge squared is $1 + 108 = 109$ and the edge is $\\sqrt{109} \\approx 10.44$ ✓. (The choice $\\sqrt{229}$ is A SIGN SLIP THAT USES $\\cos 120^\\circ$, adding $60$ to $169$ instead of subtracting it and stretching the edge past both givens ✗; the choice $13$ is SKIPPING THE CORRECTION TERM ENTIRELY, adding $25 + 144$ as though the corner were square, which is also the hypotenuse the $5$-$12$-$13$ triple offers to anyone who stops reading at the two edge lengths ✗; the choice $\\sqrt{139}$ is DROPPING THE FACTOR OF $2$ IN THE CORRECTION TERM, subtracting only $5 \\cdot 12 \\cdot \\frac{1}{2} = 30$ from $169$ ✗.)',
    },
    {
      q: 'Two walls of a triangular courtyard measure $3$ and $9$ meters and meet at a $60^\\circ$ corner. How long is the third wall?',
      fig: {
        view: [-1.5, -1.5, 10.5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [1.5, 2.598]], fill: false },
          { t: 'angle', at: [0, 0], from: [9, 0], to: [1.5, 2.598], r: 0.8, label: '60' },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [0.75, 1.299], text: '3', dx: -12, dy: -6 },
          { t: 'label', p: [5.25, 1.299], text: '?', dx: 8, dy: -8 },
        ],
      },
      choices: ['$\\sqrt{117}$', '$3\\sqrt{7}$', '$3\\sqrt{10}$', '$7$'],
      answer: 1,
      solution:
        'Route one, the Law of Cosines with $\\cos 60^\\circ = \\frac{1}{2}$: $c^2 = 3^2 + 9^2 - 2 \\cdot 3 \\cdot 9 \\cdot \\frac{1}{2} = 9 + 81 - 27 = 63$, so the third wall is $\\sqrt{63} = 3\\sqrt{7}$ meters ✓. Check a second, independent way, with coordinates and the Pythagorean Theorem. Put the $60^\\circ$ corner at the origin with the $9$-meter wall along the positive $x$-axis to $(9, 0)$. The $3$-meter wall leaves the origin at $60^\\circ$, ending at $\\left(1.5, \\frac{3\\sqrt{3}}{2}\\right)$. The horizontal gap is $7.5$ and the vertical gap is $\\frac{3\\sqrt{3}}{2}$, so the square of the third wall is $56.25 + \\frac{27}{4} = 56.25 + 6.75 = 63$, giving $3\\sqrt{7} \\approx 7.94$, which sits sensibly between $9 - 3 = 6$ and $9 + 3 = 12$ ✓. (The choice $\\sqrt{117}$ is A SIGN SLIP THAT USES $\\cos 120^\\circ$, adding $27$ to $90$ instead of subtracting it ✗; the choice $3\\sqrt{10}$ is SKIPPING THE CORRECTION TERM ENTIRELY, adding $9 + 81$ as though the corner were square ✗; the choice $7$ is MIS-SIMPLIFYING THE RADICAL AT THE LAST STEP, spotting the perfect square in $\\sqrt{63} = \\sqrt{9 \\cdot 7}$ and then dividing it out as $\\frac{63}{9} = 7$ instead of pulling a $3$ outside ✗.)',
    },
    {
      q: 'A triangular window pane has two edges of $6$ and $13$ inches meeting at an angle of $60^\\circ$. How long is its third edge?',
      fig: {
        view: [-1.5, -1.5, 14.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [13, 0], [3, 5.196]], fill: false },
          { t: 'angle', at: [0, 0], from: [13, 0], to: [3, 5.196], r: 1, label: '60' },
          { t: 'label', p: [6.5, 0], text: '13', dx: 0, dy: 14 },
          { t: 'label', p: [1.5, 2.598], text: '6', dx: -12, dy: -4 },
          { t: 'label', p: [8, 2.598], text: '?', dx: 12, dy: 8 },
        ],
      },
      choices: ['$\\sqrt{127}$', '$\\sqrt{205}$', '$\\sqrt{166}$', '$\\sqrt{283}$'],
      answer: 0,
      solution:
        'Route one, the Law of Cosines with $\\cos 60^\\circ = \\frac{1}{2}$: $c^2 = 6^2 + 13^2 - 2 \\cdot 6 \\cdot 13 \\cdot \\frac{1}{2} = 36 + 169 - 78 = 127$, so the third edge is $\\sqrt{127}$ inches ✓. Check a second, independent way, with coordinates and the Pythagorean Theorem. Put the $60^\\circ$ corner at the origin with the $13$-inch edge along the positive $x$-axis to $(13, 0)$. The $6$-inch edge leaves the origin at $60^\\circ$, so the perpendicular from its far end down to the $x$-axis cuts out a $30$-$60$-$90$ triangle with hypotenuse $6$, whose legs are $3$ and $3\\sqrt{3}$; that far end sits at $\\left(3, 3\\sqrt{3}\\right)$. The horizontal gap is $10$ and the vertical gap is $3\\sqrt{3}$, so the square of the third edge is $100 + 27 = 127$ and the edge is $\\sqrt{127} \\approx 11.27$, sitting sensibly between $13 - 6 = 7$ and $13 + 6 = 19$ ✓. (The choice $\\sqrt{205}$ is SKIPPING THE CORRECTION TERM ENTIRELY, adding $36 + 169$ as though the corner were square ✗; the choice $\\sqrt{166}$ is DROPPING THE FACTOR OF $2$ IN THE CORRECTION TERM, subtracting only $6 \\cdot 13 \\cdot \\frac{1}{2} = 39$ from $205$ ✗; the choice $\\sqrt{283}$ is A SIGN SLIP THAT USES $\\cos 120^\\circ$, adding $78$ to $205$ instead of subtracting it ✗.)',
    },
  ],
  // s9 — largest angle from three sides; the sign of the cosine does the sorting.
  [
    {
      q: 'A triangular plot of land has sides of $9$, $12$, and $15$ meters. How big is its largest angle?',
      choices: ['$75^\\circ$', '$90^\\circ$', '$120^\\circ$', '$45^\\circ$'],
      answer: 1,
      solution:
        'Route one, the rearranged Law of Cosines. The largest angle faces the longest side, $15$, so it sits between the sides $9$ and $12$: $\\cos\\theta = \\frac{9^2 + 12^2 - 15^2}{2 \\cdot 9 \\cdot 12} = \\frac{81 + 144 - 225}{216} = \\frac{0}{216} = 0$. Exactly one angle between $0^\\circ$ and $180^\\circ$ has cosine $0$, so $\\theta = 90^\\circ$ ✓. Check a second, independent way, by building the triangle instead of measuring it. Draw a right angle at the origin with one arm running to $(12, 0)$ and the other to $(0, 9)$. The Pythagorean Theorem makes the slanted side $\\sqrt{144 + 81} = \\sqrt{225} = 15$, so this constructed triangle has sides $9$, $12$, and $15$ — the same three lengths as the plot. Three side lengths pin a triangle down to a single shape, so the plot is a copy of the drawing, and the biggest angle in the drawing is the right angle at the origin, facing the longest side ✓. (The choice $75^\\circ$ is SPLITTING $180^\\circ$ IN PROPORTION TO THE SIDES, since $\\frac{15}{9 + 12 + 15} \\cdot 180^\\circ = 75^\\circ$, though it is the sine of an angle, not the angle itself, that grows in step with the opposite side ✗; the choice $120^\\circ$ is ASSUMING THE BIGGEST ANGLE IS ALWAYS OBTUSE and reaching for the familiar obtuse value, though a cosine of $0$ is neither positive nor negative and stops the angle exactly at square ✗; the choice $45^\\circ$ is HALVING THE RIGHT ANGLE YOU SPOTTED IN THE $3$-$4$-$5$ SHAPE, since $9$, $12$, $15$ is that shape tripled and its square corner is the whole angle, not twice the answer ✗.)',
    },
    {
      q: 'A triangle has sides $3$, $3\\sqrt{2}$, and $3\\sqrt{5}$. What is the measure of its largest angle?',
      choices: ['$90^\\circ$', '$120^\\circ$', '$45^\\circ$', '$135^\\circ$'],
      answer: 3,
      solution:
        'Route one, the rearranged Law of Cosines. Compare the sides first: $3\\sqrt{2} \\approx 4.24$ and $3\\sqrt{5} \\approx 6.71$, so the longest side is $3\\sqrt{5}$ and the largest angle sits between $3$ and $3\\sqrt{2}$. Then $\\cos\\theta = \\frac{3^2 + \\left(3\\sqrt{2}\\right)^2 - \\left(3\\sqrt{5}\\right)^2}{2 \\cdot 3 \\cdot 3\\sqrt{2}} = \\frac{9 + 18 - 45}{18\\sqrt{2}} = \\frac{-18}{18\\sqrt{2}} = -\\frac{\\sqrt{2}}{2}$. A negative cosine can belong only to an obtuse angle, and cosine names an angle uniquely between $0^\\circ$ and $180^\\circ$, so there is no acute partner to choose between: $\\theta = 135^\\circ$ ✓. Check a second, independent way, by building the triangle instead of measuring it. Put a $135^\\circ$ corner at the origin with the side of length $3\\sqrt{2}$ along the positive $x$-axis to $\\left(3\\sqrt{2}, 0\\right)$, and let the side of length $3$ leave the origin at $135^\\circ$, ending at $\\left(-\\frac{3\\sqrt{2}}{2}, \\frac{3\\sqrt{2}}{2}\\right)$. The horizontal gap between the two free ends is $3\\sqrt{2} + \\frac{3\\sqrt{2}}{2} = \\frac{9\\sqrt{2}}{2}$ and the vertical gap is $\\frac{3\\sqrt{2}}{2}$, so the third side squared is $\\frac{162}{4} + \\frac{18}{4} = 45$, making that side $3\\sqrt{5}$. The drawing reproduces all three given lengths, and two sides with the angle between them pin a triangle down to a single shape, so $135^\\circ$ is the angle ✓. (The choice $90^\\circ$ is TAKING THE LONGEST SIDE FOR A HYPOTENUSE WITHOUT TESTING IT, since $9 + 18 = 27$ falls well short of $45$ and the corner therefore opens past square ✗; the choice $120^\\circ$ is READING $-\\frac{\\sqrt{2}}{2}$ AS $-\\frac{1}{2}$, swapping one clean negative cosine for the other ✗; the choice $45^\\circ$ is DROPPING THE MINUS SIGN, which turns the obtuse angle into its acute partner and would leave $135^\\circ$ to be shared by the two angles facing the shorter sides, which cannot happen ✗.)',
    },
    {
      q: 'The three sides of a triangle measure $2$, $2\\sqrt{3}$, and $2\\sqrt{7}$. How big is its largest angle?',
      choices: ['$30^\\circ$', '$120^\\circ$', '$150^\\circ$', '$135^\\circ$'],
      answer: 2,
      solution:
        'Route one, the rearranged Law of Cosines. The largest angle faces the longest side, $2\\sqrt{7}$, so it sits between the sides $2$ and $2\\sqrt{3}$: $\\cos\\theta = \\frac{2^2 + \\left(2\\sqrt{3}\\right)^2 - \\left(2\\sqrt{7}\\right)^2}{2 \\cdot 2 \\cdot 2\\sqrt{3}} = \\frac{4 + 12 - 28}{8\\sqrt{3}} = \\frac{-12}{8\\sqrt{3}} = -\\frac{3}{2\\sqrt{3}} = -\\frac{\\sqrt{3}}{2}$. The minus sign announces an obtuse angle before any measuring, and cosine names an angle uniquely between $0^\\circ$ and $180^\\circ$, so $\\theta = 150^\\circ$ with no second candidate ✓. Check a second, independent way, by building the triangle instead of measuring it. Put a $150^\\circ$ corner at the origin with the side of length $2\\sqrt{3}$ along the positive $x$-axis to $\\left(2\\sqrt{3}, 0\\right)$, and let the side of length $2$ leave the origin at $150^\\circ$, ending at $\\left(-\\sqrt{3}, 1\\right)$. The horizontal gap between the free ends is $2\\sqrt{3} + \\sqrt{3} = 3\\sqrt{3}$ and the vertical gap is $1$, so the third side squared is $27 + 1 = 28$ and that side is $2\\sqrt{7}$. The drawing reproduces all three given lengths, so the triangle is this one and its widest corner is $150^\\circ$ ✓. (The choice $30^\\circ$ is DROPPING THE MINUS SIGN, reading $\\cos\\theta = \\frac{\\sqrt{3}}{2}$ and turning the widest angle into the narrowest kind ✗; the choice $120^\\circ$ is READING $-\\frac{\\sqrt{3}}{2}$ AS $-\\frac{1}{2}$, mistaking which special value the radical belongs to ✗; the choice $135^\\circ$ is TRADING $\\sqrt{3}$ FOR $\\sqrt{2}$ IN THE COSINE, since $-\\frac{\\sqrt{2}}{2}$ is the other clean negative value ✗.)',
    },
  ],
  // s10 — the Law of Sines ratio as the diameter of the circle through the vertices.
  [
    {
      q: 'A triangle has an angle of $45^\\circ$, and the side facing it measures $8$. Every triangle satisfies $\\frac{a}{\\sin A} = 2R$, where $R$ is the radius of the circle through all three vertices. What is $R$?',
      choices: ['$8\\sqrt{2}$', '$4$', '$8$', '$4\\sqrt{2}$'],
      answer: 3,
      solution:
        'Route one, run the ratio and then halve it. $\\frac{a}{\\sin A} = \\frac{8}{\\sin 45^\\circ} = \\frac{8}{\\frac{\\sqrt{2}}{2}} = \\frac{16}{\\sqrt{2}} = 8\\sqrt{2}$. That is the diameter $2R$, so $R = \\frac{8\\sqrt{2}}{2} = 4\\sqrt{2}$ ✓. Check a second, independent way, from the center of the circle outward, without the ratio. An angle drawn at the rim of a circle is half the angle the same chord makes at the center, so the chord of length $8$ is seen from the center at $2 \\cdot 45^\\circ = 90^\\circ$. Join the center to both ends of that chord: the two joins are radii, so they are equal, and they meet at a right angle. That makes an isosceles right triangle with legs $R$ and hypotenuse $8$, and the Pythagorean Theorem gives $R^2 + R^2 = 64$, so $R^2 = 32$ and $R = 4\\sqrt{2}$ ✓. (The choice $8\\sqrt{2}$ is REPORTING THE DIAMETER WHERE THE RADIUS WAS ASKED FOR, stopping one halving too early ✗; the choice $4$ is HALVING THE SIDE AND FORGETTING THE SINE ALTOGETHER, as though the chord itself were the diameter ✗; the choice $8$ is READING $\\sin 45^\\circ$ AS $\\frac{1}{2}$, which makes the ratio $16$ and the radius $8$ ✗.)',
    },
    {
      q: 'One angle of a triangle measures $135^\\circ$ and the side across from it measures $6$. Using $\\frac{a}{\\sin A} = 2R$ for the circle that passes through the three vertices, what is $R$?',
      choices: ['$6\\sqrt{2}$', '$3\\sqrt{2}$', '$3$', '$6$'],
      answer: 1,
      solution:
        'Route one, run the ratio and then halve it. $\\frac{a}{\\sin A} = \\frac{6}{\\sin 135^\\circ} = \\frac{6}{\\frac{\\sqrt{2}}{2}} = \\frac{12}{\\sqrt{2}} = 6\\sqrt{2}$. That is the diameter $2R$, so $R = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}$ ✓. Check a second, independent way, from the center of the circle outward, without the ratio. A rim angle of $135^\\circ$ is obtuse, so its vertex sits on the shorter of the two arcs cut off by the chord, and the chord is seen from the center through the reflex angle $2 \\cdot 135^\\circ = 270^\\circ$. The ordinary angle left over on the other side of the center is $360^\\circ - 270^\\circ = 90^\\circ$. Join the center to both ends of the chord: the two joins are radii, so they are equal, and they meet at that right angle, making an isosceles right triangle with hypotenuse $6$. The Pythagorean Theorem gives $R^2 + R^2 = 36$, so $R^2 = 18$ and $R = 3\\sqrt{2} \\approx 4.24$ ✓. (The choice $6\\sqrt{2}$ is REPORTING THE DIAMETER WHERE THE RADIUS WAS ASKED FOR, stopping one halving too early ✗; the choice $3$ is HALVING THE SIDE AND FORGETTING THE SINE ALTOGETHER, as though the chord were a diameter ✗; the choice $6$ is READING $\\sin 135^\\circ$ AS $\\frac{1}{2}$, which makes the ratio $12$ and the radius $6$ ✗.)',
    },
    {
      q: 'A triangle is drawn so that all three of its vertices sit on one circle. One of its angles measures $90^\\circ$ and the side facing that angle measures $14$. Given that $\\frac{a}{\\sin A} = 2R$, find the radius $R$ of the circle.',
      choices: ['$7$', '$14$', '$7\\sqrt{2}$', '$\\frac{14\\sqrt{3}}{3}$'],
      answer: 0,
      solution:
        'Route one, run the ratio and then halve it. $\\frac{a}{\\sin A} = \\frac{14}{\\sin 90^\\circ} = \\frac{14}{1} = 14$. That is the diameter $2R$, so $R = 7$ ✓. Check a second, independent way, from the center of the circle outward, without the ratio. The chord of length $14$ is seen from the center at twice the rim angle, that is at $2 \\cdot 90^\\circ = 180^\\circ$. Two radii that meet at $180^\\circ$ point in exactly opposite directions, so the chord joining their far ends runs straight through the center: it is a diameter. A diameter of $14$ belongs to a circle of radius $R = 7$ ✓. (The choice $14$ is REPORTING THE DIAMETER WHERE THE RADIUS WAS ASKED FOR, since $14$ is $2R$ ✗; the choice $7\\sqrt{2}$ is PUTTING THE RIGHT ANGLE AT THE CENTER INSTEAD OF THE RIM, which would set two radii at $90^\\circ$ across a chord of $14$ and give $R\\sqrt{2} = 14$ ✗; the choice $\\frac{14\\sqrt{3}}{3}$ is READING $\\sin 90^\\circ$ AS $\\frac{\\sqrt{3}}{2}$, which makes the ratio $\\frac{28}{\\sqrt{3}}$ and the radius $\\frac{14\\sqrt{3}}{3}$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 18,
  sections: { '18.3': s183 },
}
