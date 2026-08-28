// Introduction to Geometry chapter 18 — variations for section 18.2
// (Not Just For Right Triangles). All problems, figures, and solutions are
// original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is reached twice along routes that share no steps. The
//    unit circle offers three separate machines and each item picks two of
//    them: the mirror rule $\sin(180^\circ - \theta) = \sin\theta$ with
//    $\cos(180^\circ - \theta) = -\cos\theta$; the coordinates of the terminal
//    point, read off a special right triangle dropped to the $x$-axis; and the
//    identity $\sin^2\theta + \cos^2\theta = 1$ or the slope of the terminal
//    ray. Area items pair the formula $\frac{1}{2}ab\sin C$ against an
//    altitude built from a $30$-$60$-$90$ or $45$-$45$-$90$ triangle.
//  - Figures are coordinate-exact to three decimals wherever what is drawn is
//    something the problem already hands over: a ray at a stated $150^\circ$
//    stops at $(-0.866, 0.5)$, and a triangle with stated sides $11$ and $8$
//    around a stated $150^\circ$ is drawn with those side lengths. Where the
//    unknown is itself an angle, the triangle is drawn deliberately
//    off-measure, so a protractor cannot answer the question; where the
//    unknown is the endpoint of a sweep, the sweep appears as a small arc
//    rather than as a terminal ray pointing at the answer; and no segment
//    carrying the asked-for length is tagged with a question mark. No grid
//    appears where a grid would let a coordinate be counted off, and labels
//    are plain text, never LaTeX.
//  - Each distractor is one named mistake — dropping the second quadrant’s
//    minus sign, folding the angle against $90^\circ$ instead of $180^\circ$,
//    handing back a coordinate where a ratio was asked for, losing the
//    $\frac{1}{2}$ in the area formula — and it is named in CAPS.

const s182 = [
  // s1 — read the coordinates of a terminal point off the unit circle.
  [
    {
      q: 'A radius of the unit circle is rotated $180^\\circ$ counterclockwise from the positive $x$-axis. What are the coordinates of the point where it lands?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [1, 0], dash: true },
          { t: 'arc', c: [0, 0], r: 0.35, from: 0, to: 180 },
          { t: 'label', p: [0, 0.35], text: '180', dx: 0, dy: -8 },
        ],
      },
      choices: ['$(-1, 0)$', '$(1, 0)$', '$(0, 1)$', '$(0, -1)$'],
      answer: 0,
      solution:
        'Route one, walk the rotation around the circle: a full turn is $360^\\circ$, so $180^\\circ$ is exactly half a turn. The radius starts along the positive $x$-axis and ends pointing the opposite way, along the negative $x$-axis. The circle has radius $1$, so the endpoint is one unit to the left of the center, at $(-1, 0)$ ✓. Check a second, independent way, with the mirror rule: the point at angle $\\theta$ is $(\\cos\\theta, \\sin\\theta)$, and $180^\\circ = 180^\\circ - 0^\\circ$, so $\\cos 180^\\circ = -\\cos 0^\\circ = -1$ and $\\sin 180^\\circ = \\sin 0^\\circ = 0$. The coordinates are $(-1, 0)$ ✓. (The choice $(1, 0)$ is NOT ROTATING AT ALL, handing back the starting point that belongs to $0^\\circ$ ✗; the choice $(0, 1)$ is STOPPING A QUARTER TURN SHORT at $90^\\circ$, straight up instead of straight across ✗; the choice $(0, -1)$ is SWEEPING THREE QUARTERS OF A TURN, the endpoint of $270^\\circ$ rather than of a half turn ✗.)',
    },
    {
      q: 'On the unit circle, a radius sweeps counterclockwise through $270^\\circ$. Where does its endpoint sit?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [1, 0], dash: true },
          { t: 'arc', c: [0, 0], r: 0.35, from: 0, to: 270 },
          { t: 'label', p: [-0.35, 0.35], text: '270', dx: -4, dy: -4 },
        ],
      },
      choices: ['$(0, 1)$', '$(-1, 0)$', '$(0, -1)$', '$(1, 0)$'],
      answer: 2,
      solution:
        'Route one, count quarter turns: $270^\\circ = 3 \\times 90^\\circ$, so the radius makes three quarter turns counterclockwise. It passes straight up at $90^\\circ$, straight left at $180^\\circ$, and comes to rest pointing straight down. The endpoint is one unit below the center, at $(0, -1)$ ✓. Check a second, independent way, by trading the sweep for the opposite sweep: a counterclockwise turn of $270^\\circ$ and a clockwise turn of $90^\\circ$ finish in the same place, because the two together make one full $360^\\circ$ turn. Turning the starting point $(1, 0)$ a quarter turn clockwise swings it from due east to due south, one unit below the center, so the coordinates are $(0, -1)$ — and that point does sit on the circle, since $0^2 + (-1)^2 = 1$ ✓. (The choice $(0, 1)$ is TURNING THE WRONG WAY, sweeping $270^\\circ$ clockwise, which is the same as $90^\\circ$ counterclockwise ✗; the choice $(-1, 0)$ is STOPPING AT THE HALF TURN, one quarter short of the angle asked for ✗; the choice $(1, 0)$ is GOING THE WHOLE WAY AROUND, the endpoint of a full $360^\\circ$ turn ✗.)',
    },
    {
      q: 'The point $P = (1, 0)$ is rotated $135^\\circ$ counterclockwise about the origin. What are the coordinates of its image?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [1, 0], dash: true },
          { t: 'point', p: [1, 0], label: 'P', dx: 8, dy: 16 },
          { t: 'arc', c: [0, 0], r: 0.35, from: 0, to: 135 },
          { t: 'label', p: [0.191, 0.462], text: '135', dx: 6, dy: 0 },
        ],
      },
      choices: [
        '$\\left(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}\\right)$',
        '$\\left(-\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}\\right)$',
        '$\\left(\\frac{\\sqrt{2}}{2}, -\\frac{\\sqrt{2}}{2}\\right)$',
        '$\\left(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$',
      ],
      answer: 1,
      solution:
        'Route one, use the reference angle and a sign chart: rotating $P$ keeps it one unit from the origin, so its image is the unit-circle point at $135^\\circ$. Now $135^\\circ$ is $180^\\circ - 45^\\circ$, so its reference angle is $45^\\circ$ and both coordinates have size $\\frac{\\sqrt{2}}{2}$. The image lands in the second quadrant, where $x$ is negative and $y$ is positive, so the point is $\\left(-\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}\\right)$ ✓. Check a second, independent way, with algebra on the ray’s line: a $135^\\circ$ ray rises as fast as it runs leftward, so it lies on the line $y = -x$. A point of that line on the unit circle satisfies $x^2 + y^2 = 1$, and substituting $y = -x$ gives $2x^2 = 1$, so $x = \\pm\\frac{\\sqrt{2}}{2}$. The ray heads left and up, which picks $x = -\\frac{\\sqrt{2}}{2}$ and then $y = \\frac{\\sqrt{2}}{2}$ ✓. (The choice $\\left(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}\\right)$ is FORGETTING THE SECOND QUADRANT’S MINUS SIGN, which describes the $45^\\circ$ point instead ✗; the choice $\\left(\\frac{\\sqrt{2}}{2}, -\\frac{\\sqrt{2}}{2}\\right)$ is MIRRORING ACROSS THE $x$-AXIS INSTEAD OF THE $y$-AXIS, dropping the point below the axis where no angle between $0^\\circ$ and $180^\\circ$ can reach ✗; the choice $\\left(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$ is READING THE REFERENCE ANGLE AS $60^\\circ$, which is the $120^\\circ$ point ✗.)',
    },
  ],
  // s2 — an exact sine or cosine of an obtuse angle, straight from the mirror rule.
  [
    {
      q: 'What is the exact value of $\\sin 150^\\circ$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [-0.866, 0.5] },
          { t: 'seg', a: [0, 0], b: [0.866, 0.5], dash: true },
          { t: 'seg', a: [0, 0], b: [1, 0], dash: true },
          { t: 'angle', at: [0, 0], from: [1, 0], to: [-0.866, 0.5], r: 0.3, label: '150' },
        ],
      },
      choices: ['$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$', '$-\\frac{1}{2}$', '$-\\frac{\\sqrt{3}}{2}$'],
      answer: 1,
      solution:
        'Route one, apply the mirror rule: $150^\\circ = 180^\\circ - 30^\\circ$, and the rule says $\\sin(180^\\circ - \\theta) = \\sin\\theta$, so $\\sin 150^\\circ = \\sin 30^\\circ = \\frac{1}{2}$ ✓. Check a second, independent way, by measuring the terminal point: drop a perpendicular from the point where the $150^\\circ$ ray meets the circle down to the $x$-axis. That perpendicular, the piece of axis, and the radius form a right triangle whose hypotenuse is the radius $1$ and whose acute angle at the center is $180^\\circ - 150^\\circ = 30^\\circ$. In a $30$-$60$-$90$ triangle the leg opposite the $30^\\circ$ angle is half the hypotenuse, so the point stands $\\frac{1}{2}$ above the axis. Sine is that height, so $\\sin 150^\\circ = \\frac{1}{2}$ ✓. (The choice $\\frac{\\sqrt{3}}{2}$ is TAKING THE COSINE OF THE REFERENCE ANGLE, since $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$ while the sine was wanted ✗; the choice $-\\frac{1}{2}$ is HANGING THE SECOND QUADRANT’S MINUS SIGN ON THE SINE, though it is the $x$-coordinate that turns negative there, never the height ✗; the choice $-\\frac{\\sqrt{3}}{2}$ makes BOTH SLIPS AT ONCE and lands on $\\cos 150^\\circ$ ✗.)',
    },
    {
      q: 'What is the exact value of $\\sin 135^\\circ$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [-0.707, 0.707] },
          { t: 'seg', a: [0, 0], b: [0.707, 0.707], dash: true },
          { t: 'seg', a: [0, 0], b: [1, 0], dash: true },
          { t: 'angle', at: [0, 0], from: [1, 0], to: [-0.707, 0.707], r: 0.3, label: '135' },
        ],
      },
      choices: ['$-\\frac{\\sqrt{2}}{2}$', '$\\frac{1}{2}$', '$-\\frac{1}{2}$', '$\\frac{\\sqrt{2}}{2}$'],
      answer: 3,
      solution:
        'Route one, apply the mirror rule: $135^\\circ = 180^\\circ - 45^\\circ$, and sine survives the mirror unchanged, so $\\sin 135^\\circ = \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$ ✓. Check a second, independent way, with the isosceles right triangle: the perpendicular from the terminal point to the $x$-axis makes a right triangle whose acute angle at the center is $180^\\circ - 135^\\circ = 45^\\circ$, so the triangle is $45$-$45$-$90$ with hypotenuse $1$. Its two legs are equal, and $\\text{leg}^2 + \\text{leg}^2 = 1$ gives $\\text{leg} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$. The vertical leg is the height of the point, which is the sine ✓. (The choice $-\\frac{\\sqrt{2}}{2}$ is PUTTING THE SECOND QUADRANT’S MINUS SIGN ON THE HEIGHT, which produces $\\cos 135^\\circ$ instead ✗; the choice $\\frac{1}{2}$ is READING THE REFERENCE ANGLE AS $30^\\circ$, off by the wrong special triangle ✗; the choice $-\\frac{1}{2}$ commits BOTH ERRORS TOGETHER, a $30^\\circ$ reference angle wearing a stray minus sign ✗.)',
    },
    {
      q: 'What is the exact value of $\\cos 150^\\circ$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [-0.866, 0.5] },
          { t: 'seg', a: [0, 0], b: [1, 0], dash: true },
          { t: 'seg', a: [-0.866, 0.5], b: [-0.866, 0], dash: true },
          { t: 'right', at: [-0.866, 0], from: [0, 0], to: [-0.866, 0.5] },
          { t: 'angle', at: [0, 0], from: [1, 0], to: [-0.866, 0.5], r: 0.3, label: '150' },
        ],
      },
      choices: ['$\\frac{\\sqrt{3}}{2}$', '$-\\frac{1}{2}$', '$-\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$'],
      answer: 2,
      solution:
        'Route one, apply the mirror rule: $150^\\circ = 180^\\circ - 30^\\circ$, and cosine flips sign across the mirror, so $\\cos 150^\\circ = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$ ✓. Check a second, independent way, from the identity: the terminal point sits $\\frac{1}{2}$ above the axis, since the right triangle drawn in the figure has hypotenuse $1$ and a $30^\\circ$ angle at the center, making its vertical leg half the hypotenuse. Then $\\cos^2 150^\\circ = 1 - \\sin^2 150^\\circ = 1 - \\frac{1}{4} = \\frac{3}{4}$, so the cosine is $\\pm\\frac{\\sqrt{3}}{2}$. The point lies to the left of the $y$-axis, so its $x$-coordinate is negative and $\\cos 150^\\circ = -\\frac{\\sqrt{3}}{2}$ ✓. (The choice $\\frac{\\sqrt{3}}{2}$ is SKIPPING THE SIGN FLIP THE MIRROR PERFORMS, quoting $\\cos 30^\\circ$ unchanged ✗; the choice $-\\frac{1}{2}$ is FOLDING TO A $60^\\circ$ REFERENCE ANGLE INSTEAD OF $30^\\circ$, which is $\\cos 120^\\circ$ ✗; the choice $\\frac{1}{2}$ is HANDING BACK THE HEIGHT OF THE POINT, the sine, rather than how far left or right it stands ✗.)',
    },
  ],
  // s3 — the boundary angles, where the terminal point lands on an axis.
  [
    {
      q: 'What is the exact value of $\\sin 180^\\circ$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [-1, 0] },
          { t: 'seg', a: [0, 0], b: [1, 0], dash: true },
          { t: 'angle', at: [0, 0], from: [1, 0], to: [-1, 0], r: 0.32, label: '180' },
        ],
      },
      choices: ['$-1$', '$1$', 'undefined', '$0$'],
      answer: 3,
      solution:
        'Route one, read the coordinates: half a turn carries the radius from $(1, 0)$ to $(-1, 0)$, and the point at angle $\\theta$ is $(\\cos\\theta, \\sin\\theta)$. Sine is the second coordinate, the height above the axis, and $(-1, 0)$ has height $0$ ✓. Check a second, independent way, with the mirror rule: $180^\\circ = 180^\\circ - 0^\\circ$, so $\\sin 180^\\circ = \\sin 0^\\circ$. The $0^\\circ$ radius lies flat along the axis with its endpoint at $(1, 0)$, so $\\sin 0^\\circ = 0$ and therefore $\\sin 180^\\circ = 0$ ✓. (The choice $-1$ is HANDING BACK THE COSINE, the $x$-coordinate of the same point, where the height was asked for ✗; the choice $1$ is STOPPING AT THE QUARTER TURN, the height of the $90^\\circ$ point rather than the $180^\\circ$ one ✗; the choice undefined is ASSUMING A STRAIGHT ANGLE HAS NO SINE, though the unit circle hands $180^\\circ$ a point like any other angle ✗.)',
    },
    {
      q: 'What is the exact value of $\\sin 90^\\circ$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [0, 1] },
          { t: 'seg', a: [0, 0], b: [1, 0], dash: true },
          { t: 'angle', at: [0, 0], from: [1, 0], to: [0, 1], r: 0.3, label: '90' },
        ],
      },
      choices: ['$0$', '$1$', '$-1$', '$\\frac{\\sqrt{2}}{2}$'],
      answer: 1,
      solution:
        'Route one, read the coordinates: a quarter turn counterclockwise carries the radius from $(1, 0)$ to the top of the circle, $(0, 1)$. Sine is the second coordinate, so $\\sin 90^\\circ = 1$ ✓. Check a second, independent way, with the identity: the top of the circle sits on the $y$-axis, so its $x$-coordinate is $0$, which means $\\cos 90^\\circ = 0$. Then $\\sin^2 90^\\circ = 1 - \\cos^2 90^\\circ = 1 - 0 = 1$, so $\\sin 90^\\circ = \\pm 1$, and the point is above the axis, which picks $+1$ ✓. (The choice $0$ is SWAPPING THE TWO COORDINATES, reporting the cosine of $90^\\circ$ instead of its sine ✗; the choice $-1$ is SENDING THE POINT TO THE BOTTOM OF THE CIRCLE, the height at $270^\\circ$ ✗; the choice $\\frac{\\sqrt{2}}{2}$ is HALVING THE QUARTER TURN and quoting $\\sin 45^\\circ$ ✗.)',
    },
    {
      q: 'What is the exact value of $\\cos 90^\\circ$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [0, 1] },
          { t: 'seg', a: [0, 0], b: [1, 0], dash: true },
          { t: 'angle', at: [0, 0], from: [1, 0], to: [0, 1], r: 0.3, label: '90' },
        ],
      },
      choices: ['$0$', '$1$', '$-1$', 'undefined'],
      answer: 0,
      solution:
        'Route one, read the coordinates: a quarter turn lands the radius on the top of the circle, $(0, 1)$. Cosine is the first coordinate, how far right or left of the center the point stands, and the top of the circle stands directly above it, so $\\cos 90^\\circ = 0$ ✓. Check a second, independent way, with the mirror rule alone: $90^\\circ = 180^\\circ - 90^\\circ$, so the rule $\\cos(180^\\circ - \\theta) = -\\cos\\theta$ says $\\cos 90^\\circ = -\\cos 90^\\circ$. Adding $\\cos 90^\\circ$ to both sides gives $2\\cos 90^\\circ = 0$, and the only number that is its own opposite is $0$ ✓. (The choice $1$ is HANDING BACK THE SINE, the height of the top point, where its horizontal position was asked for ✗; the choice $-1$ is TURNING A HALF TURN INSTEAD OF A QUARTER, which is $\\cos 180^\\circ$ ✗; the choice undefined is BORROWING THE TANGENT’S TROUBLE, since $\\tan 90^\\circ$ fails only because its denominator is this very cosine, which is a perfectly good $0$ ✗.)',
    },
  ],
  // s4 — rewrite an obtuse value as an acute one, signs included.
  [
    {
      q: 'Which expression is equal to $\\cos 160^\\circ$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [-0.94, 0.342] },
          { t: 'seg', a: [0, 0], b: [0.94, 0.342] },
          { t: 'seg', a: [-0.94, 0.342], b: [0.94, 0.342], dash: true },
          { t: 'angle', at: [0, 0], from: [1, 0], to: [-0.94, 0.342], r: 0.26, label: '160' },
          { t: 'point', p: [-0.94, 0.342], label: 'P', dx: -10, dy: -10 },
          { t: 'point', p: [0.94, 0.342], label: 'Q', dx: 12, dy: -8 },
        ],
      },
      choices: ['$\\cos 20^\\circ$', '$-\\sin 20^\\circ$', '$-\\cos 20^\\circ$', '$\\cos 70^\\circ$'],
      answer: 2,
      solution:
        'Route one, apply the mirror rule: $160^\\circ = 180^\\circ - 20^\\circ$, so the points $P$ and $Q$ in the figure are mirror images across the $y$-axis. A mirror across the $y$-axis keeps the height and negates the horizontal position, and cosine is that horizontal position, so $\\cos 160^\\circ = -\\cos 20^\\circ$ ✓. Check a second, independent way, by sizing the answer before choosing: the $160^\\circ$ ray points nearly straight left, so its endpoint is close to $(-1, 0)$ and its cosine is a negative number close to $-1$. Every positive candidate is out at once, which leaves the two that carry a minus sign. Of those, $-\\sin 20^\\circ$ has the size of the small height of the $20^\\circ$ point, nowhere near $1$, while $-\\cos 20^\\circ$ has the size of that point’s long horizontal reach ✓. (The choice $\\cos 20^\\circ$ is SKIPPING THE SIGN FLIP, though a second-quadrant point has negative $x$ ✗; the choice $-\\sin 20^\\circ$ is SWAPPING THE FUNCTION, trading the horizontal reach for the height ✗; the choice $\\cos 70^\\circ$ is SUBTRACTING FROM $90^\\circ$ INSTEAD OF $180^\\circ$, since $160^\\circ - 90^\\circ = 70^\\circ$, and it drops the minus sign along the way ✗.)',
    },
    {
      q: 'Which expression is equal to $\\sin 165^\\circ$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [-0.966, 0.259] },
          { t: 'seg', a: [0, 0], b: [0.966, 0.259] },
          { t: 'seg', a: [-0.966, 0.259], b: [0.966, 0.259], dash: true },
          { t: 'angle', at: [0, 0], from: [1, 0], to: [-0.966, 0.259], r: 0.26, label: '165' },
          { t: 'point', p: [-0.966, 0.259], label: 'P', dx: -10, dy: -10 },
          { t: 'point', p: [0.966, 0.259], label: 'Q', dx: 12, dy: -8 },
        ],
      },
      choices: ['$\\sin 15^\\circ$', '$-\\sin 15^\\circ$', '$-\\cos 15^\\circ$', '$\\sin 75^\\circ$'],
      answer: 0,
      solution:
        'Route one, apply the mirror rule: $165^\\circ = 180^\\circ - 15^\\circ$, so $P$ and $Q$ are mirror images across the $y$-axis and sit at exactly the same height. Sine is that height, so $\\sin 165^\\circ = \\sin 15^\\circ$ ✓. Check a second, independent way, by sizing the answer before choosing: the $165^\\circ$ ray falls only $15^\\circ$ short of pointing straight left, so its endpoint is barely above the axis and its sine is a small positive number. The two negatives are impossible for a second-quadrant point, and $\\sin 75^\\circ$ is close to $1$, far too large for the sliver of height in the figure. Only $\\sin 15^\\circ$ is small and positive ✓. (The choice $-\\sin 15^\\circ$ is BORROWING THE COSINE’S SIGN FLIP for a value that keeps its sign across the mirror ✗; the choice $-\\cos 15^\\circ$ is SWAPPING SINE FOR COSINE AND BORROWING THE SIGN FLIP AS WELL, two slips stacked on one reference angle ✗; the choice $\\sin 75^\\circ$ is FOLDING THE ANGLE AGAINST $90^\\circ$ INSTEAD OF $180^\\circ$, since $165^\\circ - 90^\\circ = 75^\\circ$, while the mirror pairs angles that add to $180^\\circ$ ✗.)',
    },
    {
      q: 'Which expression is equal to $\\cos 110^\\circ$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [-0.342, 0.94] },
          { t: 'seg', a: [0, 0], b: [0.342, 0.94] },
          { t: 'seg', a: [-0.342, 0.94], b: [0.342, 0.94], dash: true },
          { t: 'angle', at: [0, 0], from: [1, 0], to: [-0.342, 0.94], r: 0.3, label: '110' },
          { t: 'point', p: [-0.342, 0.94], label: 'P', dx: -12, dy: -8 },
          { t: 'point', p: [0.342, 0.94], label: 'Q', dx: 12, dy: -8 },
        ],
      },
      choices: ['$\\cos 70^\\circ$', '$-\\sin 70^\\circ$', '$\\cos 20^\\circ$', '$-\\cos 70^\\circ$'],
      answer: 3,
      solution:
        'Route one, apply the mirror rule: $110^\\circ = 180^\\circ - 70^\\circ$, so $P$ and $Q$ are mirror images across the $y$-axis. The mirror negates the horizontal position and cosine reads that position, so $\\cos 110^\\circ = -\\cos 70^\\circ$ ✓. Check a second, independent way, by sizing the answer before choosing: the $110^\\circ$ ray points a little past straight up, so its endpoint has a small negative $x$ and a large positive $y$. The cosine must therefore be negative and small in size. That rules out both positive candidates at once. Between the two negative ones, $-\\sin 70^\\circ$ has the size of the tall height of the $70^\\circ$ point, close to $1$, while $-\\cos 70^\\circ$ has the size of its short horizontal reach — small, as required ✓. (The choice $\\cos 70^\\circ$ is SKIPPING THE SIGN FLIP the mirror performs on cosine ✗; the choice $-\\sin 70^\\circ$ is SWAPPING THE FUNCTION while keeping the flip, trading a short leg for a long one ✗; the choice $\\cos 20^\\circ$ is SUBTRACTING FROM $90^\\circ$ INSTEAD OF $180^\\circ$, since $110^\\circ - 90^\\circ = 20^\\circ$, and it loses the minus sign as well ✗.)',
    },
  ],
  // s5 — tangents of obtuse angles, and one cosine dressed as a wheel spoke.
  [
    {
      q: 'What is the exact value of $\\tan 135^\\circ$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [-0.707, 0.707] },
          { t: 'seg', a: [0, 0], b: [1, 0], dash: true },
          { t: 'angle', at: [0, 0], from: [1, 0], to: [-0.707, 0.707], r: 0.3, label: '135' },
        ],
      },
      choices: ['$-1$', '$1$', '$\\frac{\\sqrt{2}}{2}$', '$-\\frac{\\sqrt{2}}{2}$'],
      answer: 0,
      solution:
        'Route one, divide sine by cosine: the mirror rule gives $\\sin 135^\\circ = \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$ and $\\cos 135^\\circ = -\\cos 45^\\circ = -\\frac{\\sqrt{2}}{2}$, so $\\tan 135^\\circ = \\frac{\\sin 135^\\circ}{\\cos 135^\\circ} = \\frac{\\frac{\\sqrt{2}}{2}}{-\\frac{\\sqrt{2}}{2}} = -1$ ✓. Check a second, independent way, by reading the slope of the terminal ray: the tangent of an angle is the rise over the run of its terminal ray measured from the origin, which is exactly the slope of that ray. A $135^\\circ$ ray climbs one unit for every one unit it travels to the left, so from the origin its slope is $\\frac{1}{-1} = -1$, and the whole ray lies on the line $y = -x$, whose slope is $-1$ ✓. (The choice $1$ is DROPPING THE SECOND QUADRANT’S MINUS SIGN and quoting $\\tan 45^\\circ$, the slope of the mirror ray that climbs to the right ✗; the choice $\\frac{\\sqrt{2}}{2}$ is HANDING BACK THE SINE, the height of the terminal point, instead of dividing that height by the horizontal position ✗; the choice $-\\frac{\\sqrt{2}}{2}$ is HANDING BACK THE COSINE, the horizontal position by itself ✗.)',
    },
    {
      q: 'What is the exact value of $\\tan 150^\\circ$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [-0.866, 0.5] },
          { t: 'seg', a: [0, 0], b: [1, 0], dash: true },
          { t: 'angle', at: [0, 0], from: [1, 0], to: [-0.866, 0.5], r: 0.3, label: '150' },
        ],
      },
      choices: ['$\\frac{\\sqrt{3}}{3}$', '$-\\sqrt{3}$', '$-\\frac{\\sqrt{3}}{3}$', '$-\\frac{\\sqrt{3}}{2}$'],
      answer: 2,
      solution:
        'Route one, divide sine by cosine: the mirror rule gives $\\sin 150^\\circ = \\frac{1}{2}$ and $\\cos 150^\\circ = -\\frac{\\sqrt{3}}{2}$, so $\\tan 150^\\circ = \\frac{\\frac{1}{2}}{-\\frac{\\sqrt{3}}{2}} = -\\frac{1}{\\sqrt{3}} = -\\frac{\\sqrt{3}}{3}$ after multiplying top and bottom by $\\sqrt{3}$ ✓. Check a second, independent way, by reading the slope of the terminal ray: the ray makes a $30^\\circ$ angle with the negative $x$-axis, so travelling along it away from the origin, every $\\sqrt{3}$ units of leftward run comes with $1$ unit of rise — that is the $30$-$60$-$90$ shape. Slope is rise over run, and the run counts as negative because the ray heads left, giving slope $\\frac{1}{-\\sqrt{3}} = -\\frac{\\sqrt{3}}{3}$ ✓. (The choice $\\frac{\\sqrt{3}}{3}$ is DROPPING THE MINUS SIGN and quoting $\\tan 30^\\circ$, the slope of a ray climbing to the right ✗; the choice $-\\sqrt{3}$ is TURNING THE RATIO UPSIDE DOWN, dividing the horizontal position by the height, which is $\\tan 120^\\circ$ ✗; the choice $-\\frac{\\sqrt{3}}{2}$ is HANDING BACK THE COSINE where the ratio of the two coordinates was asked for ✗.)',
    },
    {
      q: 'A wheel spoke one meter long starts out pointing due east from the hub, then swings $120^\\circ$ counterclockwise. How many meters east or west of the hub is the tip?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [-0.5, 0.866] },
          { t: 'seg', a: [0, 0], b: [1, 0], dash: true },
          { t: 'seg', a: [-0.5, 0.866], b: [-0.5, 0], dash: true },
          { t: 'right', at: [-0.5, 0], from: [0, 0], to: [-0.5, 0.866] },
          { t: 'angle', at: [0, 0], from: [1, 0], to: [-0.5, 0.866], r: 0.28, label: '120' },
        ],
      },
      choices: ['$\\frac{1}{2}$ meter east', '$\\frac{1}{2}$ meter west', '$\\frac{\\sqrt{3}}{2}$ meter west', '$1$ meter west'],
      answer: 1,
      solution:
        'Route one, apply the mirror rule: the hub is the center of a circle of radius one meter, so east-west position is the spoke length times $\\cos 120^\\circ$. Since $120^\\circ = 180^\\circ - 60^\\circ$, cosine flips sign across the mirror: $\\cos 120^\\circ = -\\cos 60^\\circ = -\\frac{1}{2}$, a negative position, which means west. The tip has ended up half a meter west of the hub ✓. Check a second, independent way, with the special triangle in the figure: the spoke, the dashed vertical, and the dashed piece of the east-west line form a right triangle. Its angle at the hub is $180^\\circ - 120^\\circ = 60^\\circ$, so the remaining angle is $30^\\circ$ and the triangle is $30$-$60$-$90$ with hypotenuse $1$ — the spoke. The leg along the ground is the one opposite the $30^\\circ$ angle, so it is half the hypotenuse, half a meter, and it runs to the west side of the hub ✓. (The choice $\\frac{1}{2}$ meter east is FORGETTING THAT THE TIP HAS CROSSED TO THE WEST SIDE, reporting the position of a $60^\\circ$ swing instead ✗; the choice $\\frac{\\sqrt{3}}{2}$ meter west is SWAPPING THE TWO SPECIAL VALUES, taking $\\cos 30^\\circ$ for $\\cos 60^\\circ$, which is where a $150^\\circ$ swing would land ✗; the choice $1$ meter west is SWINGING THE SPOKE ALL THE WAY TO DUE WEST, which would take a half turn rather than $120^\\circ$ ✗.)',
    },
  ],
  // s6 — two sides and the included angle, area by the sine formula.
  [
    {
      q: 'A triangle has sides of length $9$ and $14$ meeting at a $30^\\circ$ angle. What is its area?',
      fig: {
        view: [-1, -1.5, 15.5, 6],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [7.794, 4.5]], fill: false },
          { t: 'angle', at: [0, 0], from: [14, 0], to: [7.794, 4.5], r: 1.6, label: '30' },
          { t: 'label', p: [9, 0], text: '14', dx: 0, dy: 14 },
          { t: 'label', p: [3.897, 2.25], text: '9', dx: -10, dy: -6 },
        ],
      },
      choices: ['$63$', '$\\frac{63}{2}$', '$\\frac{63\\sqrt{3}}{2}$', '$126$'],
      answer: 1,
      solution:
        'Route one, use the formula for two sides and the angle between them: Area $= \\frac{1}{2}ab\\sin C = \\frac{1}{2} \\cdot 9 \\cdot 14 \\cdot \\sin 30^\\circ = 63 \\cdot \\frac{1}{2} = \\frac{63}{2}$ ✓. Check a second, independent way, with a base and a height and no trigonometry at all: stand the triangle on the side of length $14$. The side of length $9$ leaves that base at $30^\\circ$, so dropping a perpendicular from its far end makes a $30$-$60$-$90$ triangle with hypotenuse $9$. The leg opposite the $30^\\circ$ angle is half the hypotenuse, so the height is $\\frac{9}{2}$. Then Area $= \\frac{1}{2} \\cdot \\text{base} \\cdot \\text{height} = \\frac{1}{2} \\cdot 14 \\cdot \\frac{9}{2} = \\frac{63}{2}$ ✓. (The choice $63$ is LOSING THE $\\frac{1}{2}$ THAT STANDS IN FRONT OF THE FORMULA ✗; the choice $\\frac{63\\sqrt{3}}{2}$ is GRABBING THE COSINE OF THE INCLUDED ANGLE, since $\\frac{1}{2} \\cdot 126 \\cdot \\frac{\\sqrt{3}}{2}$ builds exactly that ✗; the choice $126$ is MULTIPLYING THE TWO SIDES AND STOPPING, which is twice the area of the right triangle the two sides would bound, not this triangle’s area ✗.)',
    },
    {
      q: 'Two sides of a triangle measure $16$ and $5$, and the angle between them is $30^\\circ$. What is the area of the triangle?',
      fig: {
        view: [-1, -1.5, 17.5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [4.33, 2.5]], fill: false },
          { t: 'angle', at: [0, 0], from: [16, 0], to: [4.33, 2.5], r: 1.7, label: '30' },
          { t: 'label', p: [10, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [2.165, 1.25], text: '5', dx: -10, dy: -4 },
        ],
      },
      choices: ['$40$', '$80$', '$20\\sqrt{3}$', '$20$'],
      answer: 3,
      solution:
        'Route one, use the formula for two sides and the angle between them: Area $= \\frac{1}{2} \\cdot 16 \\cdot 5 \\cdot \\sin 30^\\circ = 40 \\cdot \\frac{1}{2} = 20$ ✓. Check a second, independent way, with a base and a height and no trigonometry at all: stand the triangle on the side of length $16$. The side of length $5$ leaves that base at $30^\\circ$, so the perpendicular dropped from its far end is the short leg of a $30$-$60$-$90$ triangle with hypotenuse $5$, making the height $\\frac{5}{2}$. Then Area $= \\frac{1}{2} \\cdot 16 \\cdot \\frac{5}{2} = 20$ ✓. (The choice $40$ is LOSING THE $\\frac{1}{2}$ THAT STANDS IN FRONT OF THE FORMULA ✗; the choice $80$ is MULTIPLYING THE TWO SIDES AND STOPPING, ignoring both the half and the sine ✗; the choice $20\\sqrt{3}$ is GRABBING THE COSINE OF THE INCLUDED ANGLE, since $\\frac{1}{2} \\cdot 80 \\cdot \\frac{\\sqrt{3}}{2} = 20\\sqrt{3}$ ✗.)',
    },
    {
      q: 'A triangle has sides of length $11$ and $8$ meeting at a $150^\\circ$ angle. What is its area?',
      fig: {
        view: [-8.5, -1.5, 12.5, 6],
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [-6.928, 4]], fill: false },
          { t: 'angle', at: [0, 0], from: [11, 0], to: [-6.928, 4], r: 1.5, label: '150' },
          { t: 'label', p: [5.5, 0], text: '11', dx: 0, dy: 14 },
          { t: 'label', p: [-3.464, 2], text: '8', dx: -8, dy: -8 },
        ],
      },
      choices: ['$44$', '$22\\sqrt{3}$', '$22$', '$88$'],
      answer: 2,
      solution:
        'Route one, use the formula for two sides and the angle between them, which works for an obtuse angle just as well: $\\sin 150^\\circ = \\sin 30^\\circ = \\frac{1}{2}$ by the mirror rule, so Area $= \\frac{1}{2} \\cdot 11 \\cdot 8 \\cdot \\frac{1}{2} = 44 \\cdot \\frac{1}{2} = 22$ ✓. Check a second, independent way, with a base and a height: stand the triangle on the side of length $11$. Because the included angle is obtuse, the far vertex leans out past the base, and the perpendicular from it meets the base line on the extension beyond the corner. The angle between the side of length $8$ and that extension is $180^\\circ - 150^\\circ = 30^\\circ$, so the perpendicular is the short leg of a $30$-$60$-$90$ triangle with hypotenuse $8$, a height of $4$. The base still measures $11$, so Area $= \\frac{1}{2} \\cdot 11 \\cdot 4 = 22$ ✓. (The choice $44$ is LOSING THE $\\frac{1}{2}$ THAT STANDS IN FRONT OF THE FORMULA ✗; the choice $22\\sqrt{3}$ is USING THE SIZE OF THE COSINE, since $\\cos 150^\\circ$ has size $\\frac{\\sqrt{3}}{2}$, where the formula asks for the sine ✗; the choice $88$ is MULTIPLYING THE TWO SIDES AND STOPPING ✗.)',
    },
  ],
  // s7 — derived work: a sum of coordinates, a ratio from a given cosine, and
  // a symbolic mirror identity. No single line of the exact-value table
  // answers any of the three.
  [
    {
      q: 'What is the exact value of $\\sin 150^\\circ + \\cos 150^\\circ$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [-0.866, 0.5] },
          { t: 'seg', a: [0, 0], b: [1, 0], dash: true },
          { t: 'seg', a: [-0.866, 0.5], b: [-0.866, 0], dash: true },
          { t: 'seg', a: [-0.866, 0.5], b: [0, 0.5], dash: true },
          { t: 'angle', at: [0, 0], from: [1, 0], to: [-0.866, 0.5], r: 0.3, label: '150' },
          { t: 'point', p: [-0.866, 0.5], label: 'P', dx: -12, dy: -6 },
        ],
      },
      choices: [
        '$\\frac{1+\\sqrt{3}}{2}$',
        '$\\frac{\\sqrt{3}-1}{2}$',
        '$-\\frac{1+\\sqrt{3}}{2}$',
        '$\\frac{1-\\sqrt{3}}{2}$',
      ],
      answer: 3,
      solution:
        'Route one, mirror each piece separately: $150^\\circ = 180^\\circ - 30^\\circ$, and sine survives the mirror while cosine flips sign, so $\\sin 150^\\circ = \\sin 30^\\circ = \\frac{1}{2}$ and $\\cos 150^\\circ = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$. Adding, $\\frac{1}{2} - \\frac{\\sqrt{3}}{2} = \\frac{1-\\sqrt{3}}{2}$ ✓. Check a second, independent way, by building the point $P$ from its right triangle: the radius to $P$, the dashed vertical, and the stretch of axis beneath it form a right triangle with hypotenuse $1$ and an angle of $180^\\circ - 150^\\circ = 30^\\circ$ at the center. That makes it a $30$-$60$-$90$ triangle, so the leg opposite the $30^\\circ$ angle is $\\frac{1}{2}$ and the leg along the axis is $\\frac{\\sqrt{3}}{2}$. Since $P$ stands above the axis and to the left of the center, $P = \\left(-\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$. The quantity asked for is the sum of the two coordinates of $P$, namely $-\\frac{\\sqrt{3}}{2} + \\frac{1}{2} = \\frac{1-\\sqrt{3}}{2}$ ✓. Since $\\sqrt{3}$ is a little more than $1.7$, the value is a small negative number, which fits a point that leans far left while rising only a little. (The choice $\\frac{1+\\sqrt{3}}{2}$ is SKIPPING THE SIGN FLIP THE MIRROR PERFORMS ON COSINE, adding two positive lengths ✗; the choice $\\frac{\\sqrt{3}-1}{2}$ is HANGING THE MINUS SIGN ON THE SINE INSTEAD OF THE COSINE, though it is the horizontal position that turns negative in the second quadrant ✗; the choice $-\\frac{1+\\sqrt{3}}{2}$ is SENDING BOTH COORDINATES NEGATIVE, as though an obtuse angle put its point below the axis as well as left of the center ✗.)',
    },
    {
      q: 'The angle $\\theta$ is obtuse and $\\cos\\theta = -\\frac{3}{5}$. What is $\\tan\\theta$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [1, 0], dash: true },
          { t: 'seg', a: [-0.6, -1.3], b: [-0.6, 1.3], dash: true },
        ],
      },
      choices: ['$\\frac{4}{3}$', '$-\\frac{4}{3}$', '$-\\frac{3}{4}$', '$-\\frac{4}{5}$'],
      answer: 1,
      solution:
        'Route one, run the identity and let the quadrant fix the sign: $\\sin^2\\theta = 1 - \\cos^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$, so $\\sin\\theta = \\pm\\frac{4}{5}$. An obtuse angle lands its point above the $x$-axis, so $\\sin\\theta = \\frac{4}{5}$. Tangent is sine divided by cosine, so $\\tan\\theta = \\frac{\\frac{4}{5}}{-\\frac{3}{5}} = -\\frac{4}{3}$ ✓. Check a second, independent way, by reading the slope of the terminal ray: the terminal point sits on the dashed vertical line, three fifths of a unit to the left of the center, and the radius reaching it makes a right triangle with hypotenuse $1$ and horizontal leg $\\frac{3}{5}$. Scale that triangle by $5$ and it is the familiar $3$-$4$-$5$ right triangle, so the vertical leg is $\\frac{4}{5}$ before scaling. Tangent is the slope of the terminal ray, and travelling out along that ray means running $\\frac{3}{5}$ to the left while climbing $\\frac{4}{5}$, a slope of $\\frac{4/5}{-3/5} = -\\frac{4}{3}$ ✓. (The choice $\\frac{4}{3}$ is DROPPING THE SECOND QUADRANT’S MINUS SIGN, the slope of the acute mirror partner that climbs to the right ✗; the choice $-\\frac{3}{4}$ is TURNING THE RATIO UPSIDE DOWN, dividing the horizontal position by the height ✗; the choice $-\\frac{4}{5}$ is HANDING BACK THE HEIGHT WITH THE COSINE’S MINUS SIGN BORROWED, a single coordinate where a ratio of two was asked for ✗.)',
    },
    {
      q: 'Let $\\theta$ be an acute angle. Which expression is equal to $\\frac{\\sin(180^\\circ - \\theta)}{\\cos(180^\\circ - \\theta)}$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [-0.423, 0.906] },
          { t: 'seg', a: [0, 0], b: [0.423, 0.906] },
          { t: 'seg', a: [-0.423, 0.906], b: [0.423, 0.906], dash: true },
          { t: 'seg', a: [0, 0], b: [1, 0], dash: true },
          { t: 'point', p: [-0.423, 0.906], label: 'P', dx: -12, dy: -6 },
          { t: 'point', p: [0.423, 0.906], label: 'Q', dx: 12, dy: -6 },
        ],
      },
      choices: ['$-\\tan\\theta$', '$\\tan\\theta$', '$-\\frac{1}{\\tan\\theta}$', '$\\frac{1}{\\tan\\theta}$'],
      answer: 0,
      solution:
        'Route one, mirror the numerator and the denominator one at a time: the rule $\\sin(180^\\circ - \\theta) = \\sin\\theta$ leaves the top alone, and the rule $\\cos(180^\\circ - \\theta) = -\\cos\\theta$ turns the bottom into $-\\cos\\theta$. So the fraction is $\\frac{\\sin\\theta}{-\\cos\\theta} = -\\frac{\\sin\\theta}{\\cos\\theta} = -\\tan\\theta$ ✓. Check a second, independent way, with slopes: the quotient of sine by cosine at any angle is the slope of that angle’s terminal ray. In the figure $Q$ is the terminal point of $\\theta$ and $P$ is the terminal point of $180^\\circ - \\theta$, and the two are mirror images across the $y$-axis. Reflecting a ray across the $y$-axis keeps every rise and reverses every run, so it negates the slope. The slope belonging to $180^\\circ - \\theta$ is therefore the negative of the slope belonging to $\\theta$, which says the fraction equals $-\\tan\\theta$ ✓. (The choice $\\tan\\theta$ is FLIPPING NEITHER FUNCTION, treating the mirror as though it left both coordinates untouched, which would leave an obtuse angle with a positive tangent ✗; the choice $-\\frac{1}{\\tan\\theta}$ is TURNING THE RATIO UPSIDE DOWN, dividing the horizontal position by the height ✗; the choice $\\frac{1}{\\tan\\theta}$ is TURNING THE RATIO UPSIDE DOWN AND LOSING THE SIGN FLIP TOO ✗.)',
    },
  ],
  // s8 — exact areas, where the sine of the included angle carries a radical.
  [
    {
      q: 'A triangle has sides of length $10$ and $6$ meeting at a $45^\\circ$ angle. What is its exact area?',
      fig: {
        view: [-1, -1.5, 11.5, 6],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [4.243, 4.243]], fill: false },
          { t: 'angle', at: [0, 0], from: [10, 0], to: [4.243, 4.243], r: 1.3, label: '45' },
          { t: 'label', p: [7, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [2.121, 2.121], text: '6', dx: -10, dy: -4 },
        ],
      },
      choices: ['$30\\sqrt{2}$', '$30$', '$15\\sqrt{2}$', '$60$'],
      answer: 2,
      solution:
        'Route one, use the formula for two sides and the angle between them: Area $= \\frac{1}{2} \\cdot 10 \\cdot 6 \\cdot \\sin 45^\\circ = 30 \\cdot \\frac{\\sqrt{2}}{2} = 15\\sqrt{2}$ ✓. Check a second, independent way, with a base and a height and no trigonometry at all: stand the triangle on the side of length $10$. The side of length $6$ leaves that base at $45^\\circ$, so the perpendicular dropped from its far end makes a $45$-$45$-$90$ triangle with hypotenuse $6$. Its two legs are equal, and $\\text{leg}^2 + \\text{leg}^2 = 36$ gives $\\text{leg} = \\frac{6}{\\sqrt{2}} = 3\\sqrt{2}$, the height. Then Area $= \\frac{1}{2} \\cdot 10 \\cdot 3\\sqrt{2} = 15\\sqrt{2}$ ✓. (The choice $30\\sqrt{2}$ is LOSING THE $\\frac{1}{2}$ THAT STANDS IN FRONT OF THE FORMULA ✗; the choice $30$ is DROPPING THE SINE FACTOR ENTIRELY, which would treat the two sides as legs of a right angle ✗; the choice $60$ is MULTIPLYING THE TWO SIDES AND STOPPING ✗.)',
    },
    {
      q: 'Two sides of a triangle measure $8$ and $5$, and the angle between them is $135^\\circ$. What is the exact area of the triangle?',
      fig: {
        view: [-5, -1.5, 9.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [-3.536, 3.536]], fill: false },
          { t: 'angle', at: [0, 0], from: [8, 0], to: [-3.536, 3.536], r: 1.2, label: '135' },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [-1.768, 1.768], text: '5', dx: -8, dy: -8 },
        ],
      },
      choices: ['$10\\sqrt{2}$', '$20\\sqrt{2}$', '$20$', '$40$'],
      answer: 0,
      solution:
        'Route one, use the formula for two sides and the angle between them: the mirror rule gives $\\sin 135^\\circ = \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$, so Area $= \\frac{1}{2} \\cdot 8 \\cdot 5 \\cdot \\frac{\\sqrt{2}}{2} = 20 \\cdot \\frac{\\sqrt{2}}{2} = 10\\sqrt{2}$ ✓. Check a second, independent way, with a base and a height: stand the triangle on the side of length $8$. The included angle is obtuse, so the far vertex leans out past the corner and the perpendicular from it lands on the extension of the base. The angle between the side of length $5$ and that extension is $180^\\circ - 135^\\circ = 45^\\circ$, so the perpendicular is a leg of a $45$-$45$-$90$ triangle with hypotenuse $5$, making the height $\\frac{5}{\\sqrt{2}} = \\frac{5\\sqrt{2}}{2}$. Then Area $= \\frac{1}{2} \\cdot 8 \\cdot \\frac{5\\sqrt{2}}{2} = 10\\sqrt{2}$ ✓. (The choice $20\\sqrt{2}$ is LOSING THE $\\frac{1}{2}$ THAT STANDS IN FRONT OF THE FORMULA ✗; the choice $20$ is DROPPING THE SINE FACTOR ENTIRELY ✗; the choice $40$ is MULTIPLYING THE TWO SIDES AND STOPPING ✗.)',
    },
    {
      q: 'A triangle has sides of length $6$ and $9$ meeting at a $45^\\circ$ angle. What is its exact area?',
      fig: {
        view: [-1, -1.5, 10.5, 6],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [4.243, 4.243]], fill: false },
          { t: 'angle', at: [0, 0], from: [9, 0], to: [4.243, 4.243], r: 1.3, label: '45' },
          { t: 'label', p: [6.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [2.121, 2.121], text: '6', dx: -10, dy: -4 },
        ],
      },
      choices: ['$27\\sqrt{2}$', '$27$', '$54$', '$\\frac{27\\sqrt{2}}{2}$'],
      answer: 3,
      solution:
        'Route one, use the formula for two sides and the angle between them: Area $= \\frac{1}{2} \\cdot 6 \\cdot 9 \\cdot \\sin 45^\\circ = 27 \\cdot \\frac{\\sqrt{2}}{2} = \\frac{27\\sqrt{2}}{2}$ ✓. Check a second, independent way, with a base and a height and no trigonometry at all: stand the triangle on the side of length $9$. The side of length $6$ leaves that base at $45^\\circ$, so the perpendicular dropped from its far end is a leg of a $45$-$45$-$90$ triangle with hypotenuse $6$, and equal legs satisfying $2\\,\\text{leg}^2 = 36$ give $\\text{leg} = 3\\sqrt{2}$. Then Area $= \\frac{1}{2} \\cdot 9 \\cdot 3\\sqrt{2} = \\frac{27\\sqrt{2}}{2}$ ✓. (The choice $27\\sqrt{2}$ is LOSING THE $\\frac{1}{2}$ THAT STANDS IN FRONT OF THE FORMULA ✗; the choice $27$ is DROPPING THE SINE FACTOR ENTIRELY ✗; the choice $54$ is MULTIPLYING THE TWO SIDES AND STOPPING ✗.)',
    },
  ],
  // s9 — a value is given and the obtuse condition picks the angle.
  [
    {
      q: 'The angle $\\theta$ is obtuse and $\\cos\\theta = -\\frac{\\sqrt{2}}{2}$. What is $\\theta$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [1, 0], dash: true },
          { t: 'seg', a: [-0.707, 0.707], b: [-0.707, -0.707], dash: true },
        ],
      },
      choices: ['$45^\\circ$', '$120^\\circ$', '$150^\\circ$', '$135^\\circ$'],
      answer: 3,
      solution:
        'Route one, take the reference angle and then fix the quadrant: the size of the cosine is $\\frac{\\sqrt{2}}{2}$, which belongs to the reference angle $45^\\circ$. A negative cosine means the point sits left of the $y$-axis, and an obtuse angle puts it above the $x$-axis, so $\\theta$ lives in the second quadrant: $\\theta = 180^\\circ - 45^\\circ = 135^\\circ$ ✓. Check a second, independent way, by locating the point itself: cosine is the $x$-coordinate, so the terminal point lies somewhere on the dashed vertical line $x = -\\frac{\\sqrt{2}}{2}$. Being on the unit circle, $y^2 = 1 - \\frac{1}{2} = \\frac{1}{2}$, and obtuse means $y > 0$, so $y = \\frac{\\sqrt{2}}{2}$ and the point is $\\left(-\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}\\right)$, the upper of the two crossings. That point has equal rise and leftward run, so the radius to it bisects the quarter turn between straight up and straight left — it is $90^\\circ + 45^\\circ = 135^\\circ$ ✓. (The choice $45^\\circ$ is REPORTING THE REFERENCE ANGLE AND STOPPING, but $\\cos 45^\\circ$ is positive and $45^\\circ$ is not obtuse ✗; the choice $120^\\circ$ is FOLDING AGAINST A $60^\\circ$ REFERENCE ANGLE, whose cosine has size $\\frac{1}{2}$ rather than $\\frac{\\sqrt{2}}{2}$ ✗; the choice $150^\\circ$ is READING THE SIZE AS $\\frac{\\sqrt{3}}{2}$, which belongs to a $30^\\circ$ reference angle instead ✗.)',
    },
    {
      q: 'The angle $\\theta$ is obtuse and $\\sin\\theta = \\frac{\\sqrt{3}}{2}$. What is $\\theta$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [1, 0], dash: true },
          { t: 'seg', a: [-0.5, 0.866], b: [0.5, 0.866], dash: true },
        ],
      },
      choices: ['$60^\\circ$', '$120^\\circ$', '$150^\\circ$', '$135^\\circ$'],
      answer: 1,
      solution:
        'Route one, take the reference angle and then fix the quadrant: a sine of $\\frac{\\sqrt{3}}{2}$ belongs to the reference angle $60^\\circ$, and a positive sine allows either the first or the second quadrant. The dashed line of height $\\frac{\\sqrt{3}}{2}$ cuts the circle twice, once right of the $y$-axis and once at its mirror image on the left, so the two candidates are $60^\\circ$ and $180^\\circ - 60^\\circ = 120^\\circ$. The obtuse condition picks $120^\\circ$ ✓. Check a second, independent way, by locating the point itself: sine is the $y$-coordinate, so the terminal point has $y = \\frac{\\sqrt{3}}{2}$ and therefore $x^2 = 1 - \\frac{3}{4} = \\frac{1}{4}$, giving $x = \\pm\\frac{1}{2}$. Obtuse means $x$ is negative, so the point is $\\left(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$. Its horizontal reach is half the radius while its height is much greater, the mark of a $30$-$60$-$90$ triangle standing on its short leg, and a radius that leans $30^\\circ$ past straight up is at $90^\\circ + 30^\\circ = 120^\\circ$ ✓. (The choice $60^\\circ$ is KEEPING THE ACUTE PARTNER, the crossing right of the $y$-axis, though the problem says the angle is obtuse ✗; the choice $150^\\circ$ is USING A $30^\\circ$ REFERENCE ANGLE INSTEAD OF $60^\\circ$, and $\\sin 150^\\circ$ is $\\frac{1}{2}$ ✗; the choice $135^\\circ$ is REACHING FOR THE MIDDLE OBTUSE SPECIAL ANGLE, whose sine is $\\frac{\\sqrt{2}}{2}$ ✗.)',
    },
    {
      q: 'The angle $\\theta$ is obtuse and $\\cos\\theta = -\\frac{1}{2}$. What is $\\sin\\theta$?',
      fig: {
        view: [-1.7, -1.7, 1.7, 1.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 0], b: [-0.5, 0.866] },
          { t: 'seg', a: [0, 0], b: [1, 0], dash: true },
          { t: 'seg', a: [-0.5, 0.866], b: [-0.5, 0], dash: true },
          { t: 'right', at: [-0.5, 0], from: [0, 0], to: [-0.5, 0.866] },
          { t: 'point', p: [-0.5, 0.866], label: 'P', dx: -12, dy: -6 },
        ],
      },
      choices: ['$\\frac{\\sqrt{3}}{2}$', '$-\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$', '$\\frac{\\sqrt{2}}{2}$'],
      answer: 0,
      solution:
        'Route one, run the identity and let the quadrant choose the sign: $\\sin^2\\theta = 1 - \\cos^2\\theta = 1 - \\frac{1}{4} = \\frac{3}{4}$, so $\\sin\\theta = \\pm\\frac{\\sqrt{3}}{2}$. An obtuse angle lands its point in the second quadrant, above the $x$-axis, so the height is positive: $\\sin\\theta = \\frac{\\sqrt{3}}{2}$ ✓. Check a second, independent way, by naming the angle first: the size of the cosine is $\\frac{1}{2}$, the cosine of the reference angle $60^\\circ$, and the minus sign with the obtuse condition puts $\\theta$ in the second quadrant, so $\\theta = 180^\\circ - 60^\\circ = 120^\\circ$. The mirror rule leaves sine alone, so $\\sin\\theta = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$ ✓. (The choice $-\\frac{\\sqrt{3}}{2}$ is CARRYING THE COSINE’S MINUS SIGN OVER TO THE SINE, though only the horizontal coordinate turns negative in the second quadrant ✗; the choice $\\frac{1}{2}$ is HANDING BACK THE SIZE OF THE GIVEN COSINE, swapping the two coordinates of $P$ ✗; the choice $\\frac{\\sqrt{2}}{2}$ is MISTAKING THE ANGLE FOR $135^\\circ$, whose cosine is $-\\frac{\\sqrt{2}}{2}$ rather than $-\\frac{1}{2}$ ✗.)',
    },
  ],
  // s10 — run the area formula backwards to recover an obtuse angle, or a
  // function of it. These triangles are the one place in the file where the
  // drawing is deliberately off-measure: the unknown IS an angle, so drawing
  // it truly would let a protractor answer the question.
  [
    {
      q: 'Two sides of a triangle measure $10$ and $4$, and the angle $A$ between them is obtuse. If the area of the triangle is $10\\sqrt{3}$, how large is angle $A$?',
      fig: {
        view: [-3.5, -1.5, 11.5, 5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [-0.968, 3.881]], fill: false },
          { t: 'angle', at: [0, 0], from: [10, 0], to: [-0.968, 3.881], r: 1.2, label: '?' },
          { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: 16 },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [-0.484, 1.941], text: '4', dx: -10, dy: -4 },
        ],
      },
      choices: ['$60^\\circ$', '$150^\\circ$', '$120^\\circ$', '$30^\\circ$'],
      answer: 2,
      solution:
        'Route one, run the area formula backwards: $10\\sqrt{3} = \\frac{1}{2} \\cdot 10 \\cdot 4 \\cdot \\sin A = 20\\sin A$, so $\\sin A = \\frac{10\\sqrt{3}}{20} = \\frac{\\sqrt{3}}{2}$. Between $0^\\circ$ and $180^\\circ$ that leaves $60^\\circ$ and $120^\\circ$, and the obtuse condition selects $A = 120^\\circ$ ✓. Check a second, independent way, with coordinates, never touching the sine formula: put $A$ at the origin with the side of length $10$ running along the positive $x$-axis, and call the far end of the side of length $4$ the point $B$. Standing the triangle on that base, the area is $\\frac{1}{2} \\cdot 10 \\cdot y_B$, so $5y_B = 10\\sqrt{3}$ and $y_B = 2\\sqrt{3}$. The point $B$ is $4$ units from the origin, so $x_B^2 = 16 - 12 = 4$ and $x_B = \\pm 2$; an obtuse angle at $A$ puts $B$ to the left of the $y$-axis, so $x_B = -2$. Shrinking $B = \\left(-2, 2\\sqrt{3}\\right)$ by a factor of $4$ lands on the unit circle at $\\left(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$, and a cosine of $-\\frac{1}{2}$ names the angle $180^\\circ - 60^\\circ = 120^\\circ$ ✓. (The choice $60^\\circ$ is KEEPING THE ACUTE SOLUTION, which the obtuse condition was there to rule out ✗; the choice $150^\\circ$ is MATCHING $\\frac{\\sqrt{3}}{2}$ TO THE WRONG OBTUSE ANGLE, since $\\sin 150^\\circ = \\frac{1}{2}$ ✗; the choice $30^\\circ$ is READING THE AREA FORMULA AS THOUGH IT USED THE COSINE, and $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$ ✗.)',
    },
    {
      q: 'A triangle has sides of length $12$ and $7$ enclosing an obtuse angle $A$, and its area is $21\\sqrt{2}$. What is $\\cos A$?',
      fig: {
        view: [-5, -1.5, 13.5, 7],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [-3.286, 6.181]], fill: false },
          { t: 'angle', at: [0, 0], from: [12, 0], to: [-3.286, 6.181], r: 1.4, label: '?' },
          { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: 16 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [-1.643, 3.091], text: '7', dx: -10, dy: -4 },
        ],
      },
      choices: ['$-\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$-\\frac{1}{2}$', '$-\\frac{\\sqrt{3}}{2}$'],
      answer: 0,
      solution:
        'Route one, find the angle and then read its cosine: $21\\sqrt{2} = \\frac{1}{2} \\cdot 12 \\cdot 7 \\cdot \\sin A = 42\\sin A$, so $\\sin A = \\frac{21\\sqrt{2}}{42} = \\frac{\\sqrt{2}}{2}$. That allows $45^\\circ$ or $135^\\circ$, and obtuse picks $A = 135^\\circ$, whose cosine is $-\\cos 45^\\circ = -\\frac{\\sqrt{2}}{2}$ by the mirror rule ✓. Check a second, independent way, without ever naming the angle: once the area gives $\\sin A = \\frac{\\sqrt{2}}{2}$, the identity gives $\\cos^2 A = 1 - \\sin^2 A = 1 - \\frac{1}{2} = \\frac{1}{2}$, so $\\cos A = \\pm\\frac{\\sqrt{2}}{2}$. An obtuse angle puts its point left of the $y$-axis, where the $x$-coordinate is negative, so $\\cos A = -\\frac{\\sqrt{2}}{2}$ ✓. (The choice $\\frac{\\sqrt{2}}{2}$ is LEAVING THE COSINE POSITIVE, which would describe the acute $45^\\circ$ the problem excluded ✗; the choice $-\\frac{1}{2}$ is READING THE SINE AS $\\frac{\\sqrt{3}}{2}$ AND TAKING $A = 120^\\circ$, whose cosine is $-\\frac{1}{2}$ ✗; the choice $-\\frac{\\sqrt{3}}{2}$ is MATCHING $\\frac{\\sqrt{2}}{2}$ TO THE $150^\\circ$ FAMILY, though $\\sin 150^\\circ$ is $\\frac{1}{2}$, not $\\frac{\\sqrt{2}}{2}$ ✗.)',
    },
    {
      q: 'Two sides of a triangle measure $15$ and $8$, and the obtuse angle between them is $A$. The area of the triangle is $30\\sqrt{3}$. What is $\\tan A$?',
      fig: {
        view: [-4.5, -1.5, 16.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [-2.071, 7.727]], fill: false },
          { t: 'angle', at: [0, 0], from: [15, 0], to: [-2.071, 7.727], r: 1.6, label: '?' },
          { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: 16 },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [-1.036, 3.864], text: '8', dx: -10, dy: -4 },
        ],
      },
      choices: ['$\\sqrt{3}$', '$-\\frac{\\sqrt{3}}{3}$', '$-\\frac{1}{2}$', '$-\\sqrt{3}$'],
      answer: 3,
      solution:
        'Route one, run the area formula backwards and then take the ratio: $30\\sqrt{3} = \\frac{1}{2} \\cdot 15 \\cdot 8 \\cdot \\sin A = 60\\sin A$, so $\\sin A = \\frac{30\\sqrt{3}}{60} = \\frac{\\sqrt{3}}{2}$. Between $0^\\circ$ and $180^\\circ$ that allows $60^\\circ$ and $120^\\circ$, and the obtuse condition selects $A = 120^\\circ$. The mirror rule then gives $\\cos 120^\\circ = -\\cos 60^\\circ = -\\frac{1}{2}$, so $\\tan A = \\frac{\\frac{\\sqrt{3}}{2}}{-\\frac{1}{2}} = -\\sqrt{3}$ ✓. Check a second, independent way, with coordinates and a slope, never naming the angle: put $A$ at the origin with the side of length $15$ along the positive $x$-axis, and call the far end of the side of length $8$ the point $C$. On that base the area is $\\frac{1}{2} \\cdot 15 \\cdot y_C$, so $y_C = \\frac{60\\sqrt{3}}{15} = 4\\sqrt{3}$. The point $C$ is $8$ units from the origin, so $x_C^2 = 64 - 48 = 16$ and $x_C = \\pm 4$; an obtuse angle at $A$ puts $C$ left of the $y$-axis, so $x_C = -4$. Tangent is the slope of the ray from $A$ through $C$, which is $\\frac{4\\sqrt{3}}{-4} = -\\sqrt{3}$ ✓. (The choice $\\sqrt{3}$ is KEEPING THE ACUTE PARTNER, the $60^\\circ$ ray that climbs to the right with a positive slope ✗; the choice $-\\frac{\\sqrt{3}}{3}$ is TURNING THE RATIO UPSIDE DOWN, dividing the horizontal position by the height, which is $\\tan 150^\\circ$ ✗; the choice $-\\frac{1}{2}$ is HANDING BACK THE COSINE alone where the ratio of the two coordinates was asked for ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 18,
  sections: { '18.2': s182 },
}
