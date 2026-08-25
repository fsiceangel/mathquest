// Introduction to Algebra chapter 14 — variations for section 14.2, Circles.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was derived from the question text alone and then confirmed a
//    SECOND, INDEPENDENT way: a point is substituted back into the equation, a
//    distance to the centre is measured, a completed square is re-expanded, or a
//    convenient second point on the circle is spot-checked. A check is never run
//    at a place where both sides collapse to the same trivial number.
//  - A variation changes the numbers AND, where it makes sense, the direction of
//    the question: hand back a point and ask for the radius, hand back the
//    centre and ask which equation matches, hand back the radius and ask for the
//    missing constant, ask how far apart two crossings are instead of where they
//    are.
//  - Five traps run through the section, and every distractor is one of them,
//    named in the solution with its wrong route worked out so you can see it
//    really lands on that number. THE UNFLIPPED SIGN: $(x-h)$ means the centre
//    coordinate is $+h$, so the sign you read is the opposite of the sign you
//    want. THE UNSQUARED RADIUS: the right side of the equation is $r^2$, and
//    reporting it as $r$ (or reporting $r$ where $r^2$ belongs) is the same slip
//    twice. THE UNHALVED COEFFICIENT: completing the square halves the middle
//    coefficient before squaring it. THE DIAMETER IN DISGUISE: a diameter is
//    twice the radius, and the equation never wants the diameter. THE MISSING
//    BRANCH: unsquaring hands back two numbers, so an axis crossing usually
//    comes in a pair.
//  - Figures are coordinate-exact: every plotted centre, radius and point was
//    checked against the equation the item is about, and every view window holds
//    the whole circle with room to spare. Labels are plain text.
//  - No two choices inside an item name the same value, even written two ways.

const s142 = [
  // p1 — read the radius off x^2 + y^2 = r^2. The middle variation runs backwards
  //      from a point on the circle; the last has an irrational radius.
  [
    {
      q: 'What is the radius of the circle $x^2 + y^2 = 144$?',
      choices: ['$12$', '$144$', '$24$', '$72$'],
      answer: 0,
      solution:
        'The template is $x^2 + y^2 = r^2$, so the number printed on the right is the radius SQUARED. Here $r^2 = 144$, and therefore $r = \\sqrt{144} = 12$. Check a second, independent way by walking $12$ units straight up from the centre: the point $(0, 12)$ should be on the circle, and $0^2 + 12^2 = 144$ ✓. (THE UNSQUARED RADIUS gives $144$ — reading the right side as the radius itself, which would put the point $(0,144)$ on the circle, and $144^2 = 20736 \\ne 144$ ✗. THE DIAMETER IN DISGUISE gives $24$, the distance all the way across, which is twice too far ✗. The choice $72$ comes from halving $144$ instead of taking its square root, and $72^2 = 5184$, nowhere near $144$ ✗.)',
    },
    {
      q: 'The circle $x^2 + y^2 = c$ passes through the point $(0, -11)$. What is its radius?',
      choices: ['$\\sqrt{11}$', '$121$', '$11$', '$22$'],
      answer: 2,
      solution:
        'A point on the circle makes the equation true, so substitute it: $0^2 + (-11)^2 = 121$, which tells us $c = 121$. Since $c$ is $r^2$, the radius is $\\sqrt{121} = 11$. Check a second, independent way without the equation at all: $(0, -11)$ sits $11$ units straight down the $y$-axis from the centre $(0,0)$, and the radius is exactly that distance ✓. Spot-check a different point too: $(11, 0)$ should also be on the circle, and $11^2 + 0^2 = 121$ ✓. (THE UNSQUARED RADIUS gives $121$ — that is $c$, the radius squared, not the radius ✗. THE DIAMETER IN DISGUISE gives $22$, the full width of the circle ✗. The choice $\\sqrt{11}$ comes from square-rooting the number in the point instead of squaring it: it is about $3.32$, and a circle that small would not reach $(0,-11)$ at all ✗.)',
    },
    {
      q: 'What is the radius of the circle $x^2 + y^2 = 50$, written in simplest form?',
      choices: ['$50$', '$25$', '$10$', '$5\\sqrt{2}$'],
      answer: 3,
      solution:
        'Again the right side is $r^2$, so $r = \\sqrt{50}$. That is not a whole number, but it does simplify: $50 = 25 \\times 2$, so $\\sqrt{50} = \\sqrt{25}\\sqrt{2} = 5\\sqrt{2}$. Check a second, independent way by squaring the answer back: $(5\\sqrt{2})^2 = 5^2 \\times (\\sqrt{2})^2 = 25 \\times 2 = 50$ ✓, exactly the right side. For scale, $5\\sqrt{2} \\approx 7.07$, which is sensibly between $7$ and $8$ since $7^2 = 49$ and $8^2 = 64$. (THE UNSQUARED RADIUS gives $50$ ✗. The choice $25$ comes from halving $50$ instead of rooting it, and $25^2 = 625$ ✗. The choice $10$ comes from mis-simplifying: after writing $\\sqrt{25 \\times 2}$ a student pulls BOTH factors out as $5 \\times 2 = 10$, but only the perfect square may leave the radical, and $10^2 = 100 \\ne 50$ ✗.)',
    },
  ],
  // p2 — read the centre off (x-h)^2 + (y-k)^2 = r^2. The middle variation runs
  //      the other way (centre given, pick the equation); the last has h = 0.
  [
    {
      q: 'What is the center of the circle $(x + 4)^2 + (y - 7)^2 = 36$?',
      choices: ['$(4, -7)$', '$(-4, 7)$', '$(4, 7)$', '$(-4, -7)$'],
      answer: 1,
      solution:
        'Match the equation against the template $(x-h)^2 + (y-k)^2 = r^2$. We need $x - h = x + 4$, so $h = -4$; and $y - k = y - 7$, so $k = 7$. The center is $(-4, 7)$. Check a second, independent way by testing a point the centre predicts: with $r^2 = 36$ the radius is $6$, so $(-4+6, 7) = (2, 7)$ should be on the circle. Substitute: $(2+4)^2 + (7-7)^2 = 36 + 0 = 36$ ✓. (THE UNFLIPPED SIGN gives $(4, -7)$, copying the signs straight off the page — but then $(4,-7)$ would be the centre, and the equation would have to read $(x-4)^2 + (y+7)^2 = 36$ ✗. The choice $(4, 7)$ flips only the $y$ sign, and $(-4,-7)$ flips only the $x$ sign; each leaves one coordinate uncorrected ✗.)',
    },
    {
      q: 'Which of these equations describes a circle with center $(-5, 3)$?',
      choices: [
        '$(x + 5)^2 + (y - 3)^2 = 4$',
        '$(x - 5)^2 + (y + 3)^2 = 4$',
        '$(x + 5)^2 + (y + 3)^2 = 4$',
        '$(x - 5)^2 + (y - 3)^2 = 4$',
      ],
      answer: 0,
      solution:
        'This runs the reading backwards: you know the centre and must build the equation. The template subtracts each centre coordinate, so with $h = -5$ we write $x - (-5) = x + 5$, and with $k = 3$ we write $y - 3$. The equation is $(x+5)^2 + (y-3)^2 = 4$. Check a second, independent way by testing a point: the radius is $\\sqrt{4} = 2$, so $(-3, 3)$ — two units right of the centre — must satisfy it, and $(-3+5)^2 + (3-3)^2 = 4 + 0 = 4$ ✓. Test the same point in the runner-up $(x-5)^2 + (y+3)^2 = 4$: $(-3-5)^2 + (3+3)^2 = 64 + 36 = 100 \\ne 4$ ✗. (THE UNFLIPPED SIGN is the whole game here: $(x-5)^2 + (y+3)^2 = 4$ is centred at $(5,-3)$, the exact opposite corner; $(x+5)^2 + (y+3)^2 = 4$ is centred at $(-5,-3)$; and $(x-5)^2 + (y-3)^2 = 4$ is centred at $(5,3)$ ✗.)',
    },
    {
      q: 'What is the center of the circle $x^2 + (y + 9)^2 = 20$?',
      choices: ['$(0, 9)$', '$(9, 0)$', '$(0, -9)$', '$(-9, 0)$'],
      answer: 2,
      solution:
        'A bare $x^2$ is really $(x - 0)^2$, so $h = 0$: the centre sits on the $y$-axis. Then $y - k = y + 9$ gives $k = -9$, and the center is $(0, -9)$. Check a second, independent way with a point. Try $(2, -5)$: $2^2 + (-5+9)^2 = 4 + 16 = 20$ ✓, so $(2,-5)$ is on this circle. Its distance from $(0,-9)$ is $\\sqrt{4 + 16} = \\sqrt{20}$, the radius ✓ — while its distance from $(0, 9)$ would be $\\sqrt{4 + 196} = \\sqrt{200}$, far too big, so the centre really is the low one. (THE UNFLIPPED SIGN gives $(0, 9)$: a circle centred there would need $(y-9)^2$ in the equation ✗. The choices $(9, 0)$ and $(-9, 0)$ swap the coordinates, putting the centre on the $x$-axis — but it is the $y$ term that carries the shift, so the centre must move vertically ✗.)',
    },
  ],
  // p3 — build the equation of an origin-centred circle. The middle variation
  //      hands over a diameter, the last a point on the circle.
  [
    {
      q: 'Which equation describes the circle centered at the origin with radius $11$?',
      choices: ['$x^2 + y^2 = 11$', '$x + y = 121$', '$x^2 + y^2 = 121$', '$x^2 + y^2 = 22$'],
      answer: 2,
      solution:
        'The centre is $(0,0)$, so the equation is $x^2 + y^2 = r^2$, and $r^2 = 11^2 = 121$: the circle is $x^2 + y^2 = 121$. Check a second, independent way by testing a point $11$ units from the origin. Straight up: $(0,11)$ gives $0 + 121 = 121$ ✓. And a slanted one, since $11$ is the hypotenuse of nothing tidy, test the mirror point $(-11, 0)$: $121 + 0 = 121$ ✓. (THE UNSQUARED RADIUS gives $x^2 + y^2 = 11$, whose radius is only $\\sqrt{11} \\approx 3.3$ ✗. The choice $x^2 + y^2 = 22$ doubles the radius instead of squaring it, giving a circle of radius $\\sqrt{22} \\approx 4.7$ ✗. The choice $x + y = 121$ drops both squares; testing $(0,11)$ there gives $11 \\ne 121$ ✗, and without the squares the distance formula is not being used at all.)',
    },
    {
      q: 'A circle is centered at the origin and has diameter $10$. Which equation describes it?',
      choices: ['$x^2 + y^2 = 100$', '$x^2 + y^2 = 25$', '$x^2 + y^2 = 10$', '$x^2 + y^2 = 5$'],
      answer: 1,
      solution:
        'The equation is built from the RADIUS, and a diameter of $10$ means a radius of $5$. So $r^2 = 25$ and the circle is $x^2 + y^2 = 25$. Check a second, independent way with a point that has nothing to do with the axes: $(3, 4)$ is $5$ units from the origin by the $3$-$4$-$5$ triangle, and $3^2 + 4^2 = 9 + 16 = 25$ ✓. (THE DIAMETER IN DISGUISE gives $x^2 + y^2 = 100$, squaring $10$ without halving it first — that circle has radius $10$, twice the one described ✗. THE UNSQUARED RADIUS appears twice more: $x^2 + y^2 = 10$ copies the diameter straight down, giving radius $\\sqrt{10} \\approx 3.2$ ✗, and $x^2 + y^2 = 5$ copies the radius without squaring it, giving radius $\\sqrt{5} \\approx 2.2$ ✗.)',
    },
    {
      q: 'Which equation describes the circle centered at the origin that passes through $(0, 7)$?',
      choices: ['$x^2 + y^2 = 7$', '$x^2 + y^2 = 14$', '$x^2 - y^2 = 49$', '$x^2 + y^2 = 49$'],
      answer: 3,
      solution:
        'The point $(0,7)$ sits $7$ units above the centre, so the radius is $7$ and $r^2 = 49$: the circle is $x^2 + y^2 = 49$. Check a second, independent way by substituting the given point straight into the answer: $0^2 + 7^2 = 49$ ✓. Spot-check a point that is not on an axis, $(0, -7)$ being too easy — try $(7, 0)$: $49 + 0 = 49$ ✓, and it is indeed $7$ units from the centre. (THE UNSQUARED RADIUS gives $x^2 + y^2 = 7$; substituting $(0,7)$ there gives $49 \\ne 7$ ✗. The choice $x^2 + y^2 = 14$ doubles instead of squaring, and $49 \\ne 14$ ✗. The choice $x^2 - y^2 = 49$ swaps the plus for a minus; substituting $(0,7)$ gives $0 - 49 = -49 \\ne 49$ ✗ — the plus is what makes the left side a squared distance.)',
    },
  ],
  // p4 — read a circle off a figure and place a point relative to it. Inside,
  //      outside, and exactly on, with the centre moved off the origin twice.
  [
    {
      q: 'The circle shown has center $C$. Is the point $P = (2, -3)$ inside, on, or outside it?',
      fig: {
        view: [-6, -6, 6, 6],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 4 },
          { t: 'point', p: [0, 0], label: 'C', dx: -14, dy: -6 },
          { t: 'point', p: [2, -3], label: 'P', dx: 8, dy: -8 },
        ],
      },
      choices: ['Inside the circle', 'On the circle', 'Outside the circle', 'It cannot be determined'],
      answer: 0,
      solution:
        'Read the picture first: the centre is the origin and the circle reaches out to $x = 4$, so its equation is $x^2 + y^2 = 16$. Now test the point by plugging it into the left side: $2^2 + (-3)^2 = 4 + 9 = 13$. Since $13 < 16$, the point is nearer the centre than the radius is, so $P$ is inside. Check a second, independent way with an actual distance: $P$ is $\\sqrt{13} \\approx 3.61$ units from the centre, and $3.61 < 4$ ✓. (Answering "on the circle" would need $13 = 16$ ✗; the point that is on the circle straight out that way is roughly $(2.2, -3.3)$, a little farther out than $P$. Answering "outside" reverses the comparison, reading $13 > 16$ ✗. Nothing is undetermined here — the figure hands you both the centre and the radius.)',
    },
    {
      q: 'The circle shown has center $C$. Is the point $P = (2, 4)$ inside, on, or outside it?',
      fig: {
        view: [-6, -3, 4, 7],
        grid: true,
        elems: [
          { t: 'circle', c: [-1, 2], r: 3 },
          { t: 'point', p: [-1, 2], label: 'C', dx: -14, dy: -6 },
          { t: 'point', p: [2, 4], label: 'P', dx: 8, dy: -8 },
        ],
      },
      choices: ['On the circle', 'It cannot be determined', 'Inside the circle', 'Outside the circle'],
      answer: 3,
      solution:
        'From the figure the centre is $C = (-1, 2)$ and the circle runs from $x = -4$ to $x = 2$, so the radius is $3$ and the equation is $(x+1)^2 + (y-2)^2 = 9$. Test $P$: $(2+1)^2 + (4-2)^2 = 9 + 4 = 13$. Since $13 > 9$, the point is farther out than the radius, so $P$ is outside. Check a second, independent way with the distance itself: $\\sqrt{13} \\approx 3.61$, which is more than $3$ ✓. Notice the figure agrees — $P$ is drawn just past the rim. (Answering "on the circle" is the trap, because $P$ is only a little way out; it would require $13 = 9$ ✗, and the point directly outward from $C$ that IS on the circle is about $(1.5, 3.7)$. Answering "inside" would need $13 < 9$ ✗.)',
    },
    {
      q: 'The circle shown has center $C$. Is the point $P = (5, 1)$ inside, on, or outside it?',
      fig: {
        view: [-5, -8, 7, 4],
        grid: true,
        elems: [
          { t: 'circle', c: [1, -2], r: 5 },
          { t: 'point', p: [1, -2], label: 'C', dx: -14, dy: -6 },
          { t: 'point', p: [5, 1], label: 'P', dx: 8, dy: -8 },
        ],
      },
      choices: ['Outside the circle', 'On the circle', 'Inside the circle', 'It cannot be determined'],
      answer: 1,
      solution:
        'The figure gives centre $C = (1, -2)$, and the circle stretches from $y = -7$ up to $y = 3$ — ten units tall, so the radius is $5$. The equation is $(x-1)^2 + (y+2)^2 = 25$. Test $P$: $(5-1)^2 + (1+2)^2 = 16 + 9 = 25$, exactly $r^2$, so $P$ is ON the circle. Check a second, independent way without the equation: from $C$ to $P$ you move $4$ right and $3$ up, and a $3$-$4$-$5$ right triangle makes that a distance of exactly $5$ ✓ — the radius. (Answering "inside" comes from comparing $25$ against the radius $5$ instead of against $r^2 = 25$, since $25 > 5$ feels like nothing until you notice the units do not match ✗. Answering "outside" comes from the same mismatch read the other way ✗. The equal case is easy to distrust, but $16 + 9$ is $25$ on the nose.)',
    },
  ],
  // p5 — build the equation of a circle drawn on a grid. The last variation runs
  //      the other way: the circle is given, and you pick a point on it.
  [
    {
      q: 'The circle shown has center $C$. Which equation describes it?',
      fig: {
        view: [-6, -1, 2, 7],
        grid: true,
        elems: [
          { t: 'circle', c: [-2, 3], r: 2 },
          { t: 'point', p: [-2, 3], label: 'C', dx: 8, dy: -8 },
        ],
      },
      choices: [
        '$(x - 2)^2 + (y + 3)^2 = 4$',
        '$(x + 2)^2 + (y - 3)^2 = 2$',
        '$(x + 3)^2 + (y - 2)^2 = 4$',
        '$(x + 2)^2 + (y - 3)^2 = 4$',
      ],
      answer: 3,
      solution:
        'Read the centre off the picture: $C = (-2, 3)$. The circle runs from $x = -4$ to $x = 0$, four units across, so the radius is $2$ and $r^2 = 4$. Subtracting the centre coordinates gives $(x+2)^2 + (y-3)^2 = 4$. Check a second, independent way by testing the topmost point of the drawn circle, $(-2, 5)$: $(-2+2)^2 + (5-3)^2 = 0 + 4 = 4$ ✓. (THE UNFLIPPED SIGN gives $(x-2)^2 + (y+3)^2 = 4$, a circle centred at $(2,-3)$, down in the fourth quadrant instead of the second ✗. THE UNSQUARED RADIUS gives $(x+2)^2 + (y-3)^2 = 2$; testing $(-2,5)$ there gives $4 \\ne 2$ ✗. The choice $(x+3)^2 + (y-2)^2 = 4$ swaps the two coordinates, centring the circle at $(-3, 2)$ ✗.)',
    },
    {
      q: 'Which equation describes the circle drawn on the grid below?',
      fig: {
        view: [-3, -8, 9, 4],
        grid: true,
        elems: [
          { t: 'circle', c: [3, -2], r: 4 },
          { t: 'point', p: [3, -2], label: 'C', dx: 8, dy: -8 },
        ],
      },
      choices: [
        '$(x - 3)^2 + (y + 2)^2 = 16$',
        '$(x + 3)^2 + (y - 2)^2 = 16$',
        '$(x - 3)^2 + (y + 2)^2 = 4$',
        '$(x - 3)^2 + (y + 2)^2 = 8$',
      ],
      answer: 0,
      solution:
        'The centre is at $C = (3, -2)$, and the circle reaches from $y = -6$ to $y = 2$, eight units tall, so the radius is $4$ and $r^2 = 16$. Subtracting the centre coordinates flips both signs on the page: $(x-3)^2 + (y+2)^2 = 16$. Check a second, independent way by testing the leftmost drawn point, $(-1, -2)$: $(-1-3)^2 + (-2+2)^2 = 16 + 0 = 16$ ✓. (THE UNFLIPPED SIGN gives $(x+3)^2 + (y-2)^2 = 16$, centred at $(-3, 2)$ — the wrong quadrant entirely ✗. THE UNSQUARED RADIUS gives right side $4$; testing $(-1,-2)$ there gives $16 \\ne 4$ ✗. The right side $8$ comes from doubling the radius instead of squaring it, and $2 \\times 4 = 8$ while $4^2 = 16$ ✗.)',
    },
    {
      q: 'Which of these points lies exactly on the circle shown?',
      fig: {
        view: [-5, -4, 7, 8],
        grid: true,
        elems: [
          { t: 'circle', c: [1, 2], r: 5 },
          { t: 'point', p: [1, 2], label: 'C', dx: -14, dy: -6 },
        ],
      },
      choices: ['$(4, 7)$', '$(6, 7)$', '$(4, 6)$', '$(5, 6)$'],
      answer: 2,
      solution:
        'First read the circle: the centre is $C = (1, 2)$ and the circle runs from $x = -4$ to $x = 6$, so the radius is $5$ and the equation is $(x-1)^2 + (y-2)^2 = 25$. Now test the candidates. For $(4, 6)$: $(4-1)^2 + (6-2)^2 = 9 + 16 = 25$ ✓ — exactly $r^2$, so this one is on the circle. Check a second, independent way without the equation: from $C$ to $(4,6)$ you go $3$ right and $4$ up, and $3$-$4$-$5$ makes that a distance of exactly $5$, the radius ✓. (The choice $(4, 7)$ steps $3$ across and then the WHOLE radius $5$ up, as if the two legs did not have to fit the triangle: $9 + 25 = 34 > 25$, outside ✗. The choice $(5, 6)$ uses equal legs of $4$ and $4$: $16 + 16 = 32 > 25$, outside ✗. The choice $(6, 7)$ adds the radius to BOTH coordinates: $25 + 25 = 50$, far outside ✗ — that lands at the corner of a square, not on the rim.)',
    },
  ],
  // p6 — centre plus a point on the circle. The last variation asks for the
  //      radius itself rather than the equation, so the square root is back.
  [
    {
      q: 'A circle has center $(5, -2)$ and passes through the origin. What is its equation?',
      choices: [
        '$(x + 5)^2 + (y - 2)^2 = 29$',
        '$(x - 5)^2 + (y + 2)^2 = 21$',
        '$(x - 5)^2 + (y + 2)^2 = 29$',
        '$(x - 5)^2 + (y + 2)^2 = \\sqrt{29}$',
      ],
      answer: 2,
      solution:
        'The radius is the distance from $(5,-2)$ to $(0,0)$, and since the equation only ever needs $r^2$, no square root is required: $r^2 = 5^2 + (-2)^2 = 25 + 4 = 29$. Subtracting the centre coordinates gives $(x-5)^2 + (y+2)^2 = 29$. Check a second, independent way by substituting the origin back in: $(0-5)^2 + (0+2)^2 = 25 + 4 = 29$ ✓, so the origin really is on this circle. (THE UNFLIPPED SIGN gives $(x+5)^2 + (y-2)^2 = 29$, centred at $(-5, 2)$; the origin is still $\\sqrt{29}$ from that centre, which is exactly why the trap is tempting — but the centre named in the problem is $(5,-2)$ ✗. The right side $21$ comes from subtracting the squares, $25 - 4$, instead of adding them; substituting the origin then gives $29 \\ne 21$ ✗. The right side $\\sqrt{29}$ puts $r$ where $r^2$ belongs, shrinking the radius to about $2.32$ ✗.)',
    },
    {
      q: 'A circle has center $(1, 4)$ and passes through the point $(4, 8)$. What is its equation?',
      choices: [
        '$(x - 1)^2 + (y - 4)^2 = 25$',
        '$(x - 1)^2 + (y - 4)^2 = 5$',
        '$(x + 1)^2 + (y + 4)^2 = 25$',
        '$(x - 4)^2 + (y - 8)^2 = 25$',
      ],
      answer: 0,
      solution:
        'Measure from the centre to the point: across $4 - 1 = 3$ and up $8 - 4 = 4$, so $r^2 = 3^2 + 4^2 = 9 + 16 = 25$. The equation is $(x-1)^2 + (y-4)^2 = 25$. Check a second, independent way by substituting the given point: $(4-1)^2 + (8-4)^2 = 9 + 16 = 25$ ✓. Spot-check one more point the answer predicts — the radius is $5$, so $(6, 4)$ should be on the circle: $(6-1)^2 + (4-4)^2 = 25 + 0 = 25$ ✓. (THE UNSQUARED RADIUS gives right side $5$; the given point then reads $25 \\ne 5$ ✗. THE UNFLIPPED SIGN gives $(x+1)^2 + (y+4)^2 = 25$, centred at $(-1,-4)$ ✗. The last choice centres the circle on the point it passes through instead of on the stated centre; substituting $(4,8)$ there gives $0 \\ne 25$ ✗ — the centre is the one point that is never on the circle.)',
    },
    {
      q: 'A circle has center $(-6, 3)$ and passes through the point $(-2, 0)$. What is its radius?',
      choices: ['$25$', '$5$', '$7$', '$\\sqrt{7}$'],
      answer: 1,
      solution:
        'This time the question wants $r$, not $r^2$, so there is one extra step. From $(-6,3)$ to $(-2,0)$ you move $4$ right and $3$ down, so $r^2 = 4^2 + 3^2 = 16 + 9 = 25$ and $r = \\sqrt{25} = 5$. Check a second, independent way: $3$, $4$, $5$ is a right triangle, so a horizontal leg of $4$ and a vertical leg of $3$ give a hypotenuse of exactly $5$ ✓. Check once more by building the equation and testing the point: $(x+6)^2 + (y-3)^2 = 25$, and $(-2+6)^2 + (0-3)^2 = 16 + 9 = 25$ ✓. (THE UNSQUARED RADIUS gives $25$, which is $r^2$ ✗. The choice $7$ comes from ADDING the two legs, $4 + 3$, instead of using the Pythagorean Theorem — that is the distance you would walk going around the corner, not straight across ✗. The choice $\\sqrt{7}$ takes the square root of that same wrong sum, giving about $2.65$, which does not even reach the point ✗.)',
    },
  ],
  // p7 — inside, on, or outside for an algebraically given circle. The last
  //      variation reverses it: the point is fixed and the circles vary.
  [
    {
      q: 'Is the point $(7, 1)$ inside, on, or outside the circle $(x - 3)^2 + (y - 1)^2 = 16$?',
      choices: ['Inside', 'On the circle', 'Outside', 'It cannot be determined without a graph'],
      answer: 1,
      solution:
        'Plug the point into the left side and compare with the right: $(7-3)^2 + (1-1)^2 = 16 + 0 = 16$. That is exactly $r^2$, so the point is ON the circle. Check a second, independent way with the geometry: the centre is $(3, 1)$ and the radius is $\\sqrt{16} = 4$; the point $(7,1)$ has the same $y$-coordinate as the centre and sits $7 - 3 = 4$ units to its right ✓ — right on the rim. (Answering "inside" comes from comparing $16$ with the RADIUS $4$ rather than with $r^2 = 16$, and $16 > 4$ then feels like it must mean something ✗. Answering "outside" comes from the same comparison read the other way, or from expecting an exact hit to be impossible ✗. No graph is needed — the test is pure arithmetic.)',
    },
    {
      q: 'Is the point $(-1, 6)$ inside, on, or outside the circle $(x + 4)^2 + (y - 2)^2 = 20$?',
      choices: ['Inside', 'On the circle', 'It cannot be determined without more information', 'Outside'],
      answer: 3,
      solution:
        'Substitute into the left side: $(-1+4)^2 + (6-2)^2 = 3^2 + 4^2 = 9 + 16 = 25$. Compare with $r^2 = 20$: since $25 > 20$, the point is farther from the centre than the radius, so it lies outside. Check a second, independent way with distances. The centre is $(-4, 2)$, and the point is $\\sqrt{25} = 5$ units away by the $3$-$4$-$5$ triangle. The radius is $\\sqrt{20} \\approx 4.47$, and $5 > 4.47$ ✓. (Answering "inside" is the trap, and it comes from a specific slip: taking the square root on one side only, comparing the distance $5$ against $r^2 = 20$, and concluding $5 < 20$ ✗. Either square both or root both — never one of each. Answering "on the circle" would need $25 = 20$ ✗. Everything needed is printed in the equation, so nothing is missing.)',
    },
    {
      q: 'The point $(2, 5)$ is inside exactly one of these four circles. Which one?',
      choices: [
        '$(x - 1)^2 + (y - 1)^2 = 16$',
        '$x^2 + y^2 = 29$',
        '$(x + 1)^2 + (y - 3)^2 = 16$',
        '$(x - 6)^2 + (y - 1)^2 = 9$',
      ],
      answer: 2,
      solution:
        'Run the same test four times: put $(2,5)$ into each left side and compare it with the right. For $(x-1)^2 + (y-1)^2 = 16$: $1 + 16 = 17 > 16$, just outside ✗. For $x^2 + y^2 = 29$: $4 + 25 = 29$, exactly equal — on the circle, not inside ✗. For $(x+1)^2 + (y-3)^2 = 16$: $9 + 4 = 13 < 16$, inside ✓. For $(x-6)^2 + (y-1)^2 = 9$: $16 + 16 = 32 > 9$, well outside ✗. Check the winner a second, independent way: its centre is $(-1, 3)$ with radius $4$, and the distance from $(-1,3)$ to $(2,5)$ is $\\sqrt{9+4} = \\sqrt{13} \\approx 3.61$, comfortably under $4$ ✓. (The first choice is the near miss: $17$ against $16$ overshoots by a single unit, so it catches anyone who eyeballs the numbers instead of finishing the arithmetic ✗. The second choice catches anyone who counts "on the circle" as inside; the boundary belongs to neither the inside nor the outside ✗. The fourth choice catches the root-one-side-only slip: the distance from its centre $(6,1)$ is $\\sqrt{32} \\approx 5.66$, and holding that up against $r^2 = 9$ makes it look comfortably inside, when the honest comparison is $32$ against $9$ ✗.)',
    },
  ],
  // p8 — complete the square twice to unscramble an expanded equation. The last
  //      variation runs backwards: the radius is given and a constant is not.
  [
    {
      q: 'The equation $x^2 + y^2 + 6x - 10y + 9 = 0$ describes a circle. What are its center and radius?',
      choices: [
        'Center $(-3, 5)$, radius $5$',
        'Center $(3, -5)$, radius $5$',
        'Center $(-3, 5)$, radius $25$',
        'Center $(-6, 10)$, radius $5$',
      ],
      answer: 0,
      solution:
        'Complete both squares. For the $x$ terms, half of $6$ is $3$, so $x^2 + 6x = (x+3)^2 - 9$. For the $y$ terms, half of $-10$ is $-5$, so $y^2 - 10y = (y-5)^2 - 25$. Substituting: $(x+3)^2 - 9 + (y-5)^2 - 25 + 9 = 0$, which tidies to $(x+3)^2 + (y-5)^2 = 25$. So the center is $(-3, 5)$ and the radius is $\\sqrt{25} = 5$. Check a second, independent way by expanding back: $(x+3)^2 + (y-5)^2 = x^2 + 6x + 9 + y^2 - 10y + 25 = 25$, so $x^2 + y^2 + 6x - 10y + 9 = 0$ ✓ — every coefficient matches. Check a point too: with centre $(-3,5)$ and radius $5$, the point $(2, 5)$ should be on the circle, and $4 + 25 + 12 - 50 + 9 = 0$ ✓. (THE UNFLIPPED SIGN gives centre $(3, -5)$ ✗. THE UNSQUARED RADIUS reports $25$, the right side, as the radius ✗. THE UNHALVED COEFFICIENT gives centre $(-6, 10)$, copying the whole coefficients instead of their halves; testing $(2,5)$ against that centre and radius $5$ gives $64 + 25 = 89 \\ne 25$ ✗.)',
    },
    {
      q: 'The equation $x^2 + y^2 - 12x - 2y + 21 = 0$ describes a circle. What are its center and radius?',
      choices: [
        'Center $(6, 1)$, radius $16$',
        'Center $(6, 1)$, radius $4$',
        'Center $(-6, -1)$, radius $4$',
        'Center $(12, 2)$, radius $4$',
      ],
      answer: 1,
      solution:
        'Half of $-12$ is $-6$, so $x^2 - 12x = (x-6)^2 - 36$. Half of $-2$ is $-1$, so $y^2 - 2y = (y-1)^2 - 1$. The equation becomes $(x-6)^2 - 36 + (y-1)^2 - 1 + 21 = 0$, that is $(x-6)^2 + (y-1)^2 = 16$. The center is $(6, 1)$ and the radius is $\\sqrt{16} = 4$. Check a second, independent way by expanding: $(x-6)^2 + (y-1)^2 = x^2 - 12x + 36 + y^2 - 2y + 1$, and setting that equal to $16$ gives $x^2 + y^2 - 12x - 2y + 21 = 0$ ✓. Check a point as well: $(6, 5)$ is four units above the centre, and $36 + 25 - 72 - 10 + 21 = 0$ ✓. (THE UNSQUARED RADIUS reports $16$ ✗. THE UNFLIPPED SIGN gives centre $(-6, -1)$; testing $(6,5)$ against it gives $144 + 36 = 180 \\ne 16$ ✗. THE UNHALVED COEFFICIENT gives centre $(12, 2)$ ✗.)',
    },
    {
      q: 'The equation $x^2 + y^2 - 10x + 4y + c = 0$ describes a circle of radius $6$. What is $c$?',
      choices: ['$23$', '$7$', '$80$', '$-7$'],
      answer: 3,
      solution:
        'Complete the squares while $c$ is still a letter. Half of $-10$ is $-5$, so $x^2 - 10x = (x-5)^2 - 25$; half of $4$ is $2$, so $y^2 + 4y = (y+2)^2 - 4$. The equation becomes $(x-5)^2 + (y+2)^2 - 25 - 4 + c = 0$, that is $(x-5)^2 + (y+2)^2 = 29 - c$. A radius of $6$ means the right side is $36$, so $29 - c = 36$ and $c = -7$. Check a second, independent way by putting $c = -7$ back in and testing a point the answer predicts: the centre is $(5,-2)$ with radius $6$, so $(11, -2)$ should be on the circle, and $121 + 4 - 110 - 8 - 7 = 0$ ✓. (THE UNSQUARED RADIUS sets $29 - c = 6$ and gives $c = 23$ — a circle of radius $\\sqrt{6} \\approx 2.4$, not $6$ ✗. The choice $7$ is the same equation with the sign of $c$ mishandled, solving $29 + c = 36$ ✗; testing $(11,-2)$ there gives $121 + 4 - 110 - 8 + 7 = 14 \\ne 0$ ✗. THE UNHALVED COEFFICIENT builds $(x-10)^2 + (y+4)^2$, needing $100 + 16 - c = 36$ and giving $c = 80$ ✗.)',
    },
  ],
  // p9 — where a circle meets an axis. One y-axis pair, one circle that misses
  //      the axis entirely, and one that asks for the distance between crossings.
  [
    {
      q: 'Where does the circle $(x - 3)^2 + (y + 1)^2 = 25$ cross the $y$-axis?',
      choices: [
        'At $(0, 3)$ only',
        'At $(3, 0)$ and $(-5, 0)$',
        'At $(0, 3)$ and $(0, -5)$',
        'It never crosses the $y$-axis',
      ],
      answer: 2,
      solution:
        'Every point on the $y$-axis has $x = 0$, so substitute that: $(0-3)^2 + (y+1)^2 = 25$, which is $9 + (y+1)^2 = 25$, so $(y+1)^2 = 16$. Unsquaring gives $y + 1 = \\pm 4$, so $y = 3$ or $y = -5$: the crossings are $(0, 3)$ and $(0, -5)$. Check a second, independent way by substituting both back into the original: $(0-3)^2 + (3+1)^2 = 9 + 16 = 25$ ✓ and $(0-3)^2 + (-5+1)^2 = 9 + 16 = 25$ ✓. A third look confirms the shape: the centre is $(3,-1)$, so the two crossings should sit symmetrically above and below $y = -1$, and $3$ is four above while $-5$ is four below ✓. (THE MISSING BRANCH gives $(0,3)$ alone, keeping only $+4$ ✗. The choice $(3,0)$ and $(-5,0)$ writes the numbers into the $x$ slot, describing $x$-axis crossings instead ✗ — and testing $(3,0)$ gives $0 + 1 = 1 \\ne 25$. "Never crosses" is wrong because the centre is only $3$ units from the axis while the radius is $5$ ✗.)',
    },
    {
      q: 'Where does the circle $(x - 2)^2 + (y - 6)^2 = 9$ cross the $x$-axis?',
      choices: [
        'At $(2, 0)$ only',
        'At $(5, 0)$ and $(-1, 0)$',
        'At $(2, 3)$ and $(2, 9)$',
        'It never crosses the $x$-axis',
      ],
      answer: 3,
      solution:
        'On the $x$-axis $y = 0$, so substitute: $(x-2)^2 + (0-6)^2 = 9$, that is $(x-2)^2 + 36 = 9$, so $(x-2)^2 = -27$. No real number squares to a negative, so there are no crossings at all. Check a second, independent way by looking at the picture the equation describes: the centre is $(2, 6)$, sitting $6$ units above the $x$-axis, while the radius is only $\\sqrt{9} = 3$. The circle reaches down only as far as $y = 6 - 3 = 3$ ✓ — it stops three units short of the axis. (The choice $(5,0)$ and $(-1,0)$ drops the $+36$ and solves $(x-2)^2 = 9$; testing $(5,0)$ in the real equation gives $9 + 36 = 45 \\ne 9$ ✗. The choice $(2,3)$ and $(2,9)$ finds the bottom and top of the circle — both genuinely on it, but neither is on the $x$-axis, since neither has $y = 0$ ✗. The choice $(2,0)$ drops a line straight down from the centre to the axis, which lands outside the circle ✗.)',
    },
    {
      q: 'The circle $x^2 + y^2 - 6x - 16 = 0$ crosses the $x$-axis at two points. How far apart are those two points?',
      choices: ['$10$', '$6$', '$5$', '$8$'],
      answer: 0,
      solution:
        'Set $y = 0$: $x^2 - 6x - 16 = 0$. That factors as $(x-8)(x+2) = 0$, so $x = 8$ or $x = -2$, and the crossings are $(8, 0)$ and $(-2, 0)$. The distance between them is $8 - (-2) = 10$. Check a second, independent way by completing the square: $x^2 - 6x = (x-3)^2 - 9$, so the circle is $(x-3)^2 + y^2 = 25$ — centre $(3, 0)$, radius $5$. The centre sits ON the $x$-axis, so the axis cuts the circle along a full diameter, and a diameter is $2 \\times 5 = 10$ ✓. (The choice $6$ comes from treating both roots as positive and computing $8 - 2$, which forgets that $-2$ is two units on the OTHER side of the origin ✗. The choice $5$ reports the radius instead of the distance across ✗. The choice $8$ reports the larger crossing itself rather than the gap between the two ✗.)',
    },
  ],
  // p10 — a diameter, given by its endpoints. The middle variation walks from one
  //       endpoint through the centre to the other; the last has a half-integer
  //       radius, so the diameter cannot simply be copied down.
  [
    {
      q: 'A circle has a diameter with endpoints $(2, -3)$ and $(8, 5)$. What is its equation?',
      choices: [
        '$(x - 5)^2 + (y - 1)^2 = 100$',
        '$(x - 5)^2 + (y - 1)^2 = 25$',
        '$(x - 3)^2 + (y - 4)^2 = 25$',
        '$(x + 5)^2 + (y + 1)^2 = 25$',
      ],
      answer: 1,
      solution:
        'The centre of a circle is the midpoint of any diameter: $\\left(\\frac{2+8}{2}, \\frac{-3+5}{2}\\right) = (5, 1)$. The radius runs from there to an endpoint, so $r^2 = (8-5)^2 + (5-1)^2 = 9 + 16 = 25$. The equation is $(x-5)^2 + (y-1)^2 = 25$. Check a second, independent way by testing the OTHER endpoint, which the calculation never used: $(2-5)^2 + (-3-1)^2 = 9 + 16 = 25$ ✓ — both ends land on the circle, exactly as a diameter should. (THE DIAMETER IN DISGUISE gives $100$: the two endpoints are $\\sqrt{36+64} = 10$ apart, and squaring that whole length doubles the circle ✗. The centre $(3, 4)$ comes from halving the DIFFERENCES, $\\frac{8-2}{2}$ and $\\frac{5-(-3)}{2}$, instead of averaging the coordinates; testing $(8,5)$ against it gives $25 + 1 = 26 \\ne 25$ ✗. THE UNFLIPPED SIGN gives $(x+5)^2 + (y+1)^2 = 25$, centred at $(-5,-1)$ ✗.)',
    },
    {
      q: 'One endpoint of a diameter of a circle is $(1, 2)$, and the center of the circle is $(4, 6)$. What is the other endpoint, and what is the radius?',
      choices: [
        'Endpoint $(7, 10)$, radius $10$',
        'Endpoint $\\left(\\frac{5}{2}, 4\\right)$, radius $5$',
        'Endpoint $(7, 10)$, radius $5$',
        'Endpoint $(-2, -2)$, radius $5$',
      ],
      answer: 2,
      solution:
        'The centre is the midpoint, so whatever step takes you from the endpoint to the centre must be repeated to reach the far end. From $(1,2)$ to $(4,6)$ you move $3$ right and $4$ up; repeating that from $(4,6)$ lands on $(7, 10)$. That same step is the radius, and $3$-$4$-$5$ makes it $5$. Check a second, independent way with the midpoint formula, which was never used above: $\\left(\\frac{1+7}{2}, \\frac{2+10}{2}\\right) = (4, 6)$ ✓, the stated centre. Check the radius from the far end too: $(7-4)^2 + (10-6)^2 = 9 + 16 = 25$, so $r = 5$ ✓. (THE DIAMETER IN DISGUISE pairs the right endpoint with radius $10$, which is the distance from $(1,2)$ all the way to $(7,10)$ ✗. The endpoint $\\left(\\frac{5}{2}, 4\\right)$ comes from averaging $(1,2)$ with the CENTRE, as if the centre were the other end of the diameter ✗. The endpoint $(-2,-2)$ steps $3$ left and $4$ down from $(1,2)$, walking away from the centre instead of through it ✗ — and its midpoint with $(1,2)$ is $\\left(-\\frac{1}{2}, 0\\right)$, not $(4,6)$.)',
    },
    {
      q: 'A circle has a diameter with endpoints $(-5, 4)$ and $(7, -1)$. What is its radius?',
      choices: ['$13$', '$\\frac{169}{4}$', '$\\frac{17}{2}$', '$\\frac{13}{2}$'],
      answer: 3,
      solution:
        'Find the diameter first, then halve it. The endpoints differ by $7 - (-5) = 12$ across and $-1 - 4 = -5$ down, so the diameter has length $\\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$. The radius is half of that: $\\frac{13}{2}$. Check a second, independent way by going through the centre, which the first route skipped: the midpoint is $\\left(\\frac{-5+7}{2}, \\frac{4-1}{2}\\right) = \\left(1, \\frac{3}{2}\\right)$, and the distance from there to $(7,-1)$ is $\\sqrt{6^2 + \\left(\\frac{5}{2}\\right)^2} = \\sqrt{36 + \\frac{25}{4}} = \\sqrt{\\frac{169}{4}} = \\frac{13}{2}$ ✓. (THE DIAMETER IN DISGUISE gives $13$, the full width ✗. The choice $\\frac{169}{4}$ is $r^2$ reported as $r$ ✗. The choice $\\frac{17}{2}$ comes from ADDING the legs, $12 + 5 = 17$, instead of using the Pythagorean Theorem, and then halving: the corner route is $17$, but the straight line is only $13$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 14,
  sections: {
    '14.2': s142,
  },
}
