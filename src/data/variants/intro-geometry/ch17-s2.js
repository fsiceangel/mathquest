// Introduction to Geometry chapter 17 — variations for section 17.2 (Circles).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is reached twice along routes that share no steps:
//    once by driving the standard form $(x - h)^2 + (y - k)^2 = r^2$ term by
//    term, and once by an independent second route — listing points that
//    satisfy the equation and averaging them, slicing the circle with a line,
//    reading a chord’s two endpoints off a factored quadratic, or measuring a
//    right triangle whose hypotenuse is the radius.
//  - Figures are coordinate-exact: a circle of radius 5 about (3, -2) is drawn
//    at radius 5 about (3, -2), and every view box holds the whole circle plus
//    every point the answer names. Labels are plain text, never LaTeX, and a
//    figure never carries the very number the question asks for.
//  - Each distractor is one named mistake — flipping the center’s signs,
//    reporting $r^2$ where the radius was asked for, moving the constant across
//    the equals sign without flipping it, stepping a whole radius along an axis
//    the center does not sit on — and it is named in CAPS.

const s172 = [
  // s1 — read the center and the radius straight off the standard form.
  [
    {
      q: 'A ripple spreading on a pond is traced by the equation $(x + 3)^2 + (y - 2)^2 = 49$. What are the center and the radius of that circle?',
      choices: [
        'center $(3, -2)$, radius $7$',
        'center $(-3, 2)$, radius $7$',
        'center $(-3, 2)$, radius $49$',
        'center $(-3, 2)$, radius $14$',
      ],
      answer: 1,
      solution:
        'Route one, match the equation against $(x - h)^2 + (y - k)^2 = r^2$ one piece at a time: the form subtracts $h$, so $(x + 3)^2$ has to be read as $(x - (-3))^2$, giving $h = -3$. The second bracket is already a subtraction, so $k = 2$. The right side is $r^2$, so $r = \\sqrt{49} = 7$. The center is $(-3, 2)$ and the radius is $7$ ✓. Check a second, independent way, by collecting points that satisfy the equation and measuring them: $(4, 2)$ gives $7^2 + 0^2 = 49$, $(-10, 2)$ gives $(-7)^2 + 0^2 = 49$, $(-3, 9)$ gives $0^2 + 7^2 = 49$, and $(-3, -5)$ gives $0^2 + (-7)^2 = 49$, so all four sit on the ripple. The first two are $14$ apart along the line $y = 2$ and the last two are $14$ apart along the line $x = -3$; both pairs have midpoint $(-3, 2)$, and each of the four points is $7$ from it. A circle whose widest span is $14$ has radius $7$, centered at $(-3, 2)$ ✓. (The choice center $(3, -2)$ is FLIPPING THE SIGNS THE WRONG WAY, reading the numbers as they appear instead of undoing the subtraction the form already performs ✗; the choice radius $49$ is REPORTING $r^2$ AS THE RADIUS, though the right side of the standard form is the radius squared ✗; the choice radius $14$ is HANDING BACK THE DIAMETER, the full $14$-unit span across the ripple rather than half of it ✗.)',
    },
    {
      q: 'The rim of a round trampoline is drawn on a backyard plan as $(x - 5)^2 + (y + 6)^2 = 16$. What are the center and the radius of that circle?',
      choices: [
        'center $(-5, 6)$, radius $4$',
        'center $(5, -6)$, radius $16$',
        'center $(5, -6)$, radius $8$',
        'center $(5, -6)$, radius $4$',
      ],
      answer: 3,
      solution:
        'Route one, match the equation against $(x - h)^2 + (y - k)^2 = r^2$ one piece at a time: $(x - 5)^2$ hands over $h = 5$ directly, and $(y + 6)^2$ rewritten as $(y - (-6))^2$ hands over $k = -6$. The right side is $r^2 = 16$, so $r = 4$. The center is $(5, -6)$ and the radius is $4$ ✓. Check a second, independent way, by collecting points that satisfy the equation and measuring them: $(9, -6)$ gives $4^2 + 0^2 = 16$, $(1, -6)$ gives $(-4)^2 + 0^2 = 16$, $(5, -2)$ gives $0^2 + 4^2 = 16$, and $(5, -10)$ gives $0^2 + (-4)^2 = 16$, so all four lie on the rim. The first pair spans $8$ units along $y = -6$ and the second spans $8$ units along $x = 5$, and both spans have midpoint $(5, -6)$. A rim whose widest span is $8$ has radius $4$ about $(5, -6)$ ✓. (The choice center $(-5, 6)$ is FLIPPING THE SIGNS THE WRONG WAY, copying $-5$ and $6$ out of the brackets instead of undoing the subtractions ✗; the choice radius $16$ is REPORTING $r^2$ AS THE RADIUS ✗; the choice radius $8$ is HANDING BACK THE DIAMETER, the whole $8$-unit width of the trampoline ✗.)',
    },
    {
      q: 'A radar display shows a warning ring whose equation is $(x + 1)^2 + (y + 7)^2 = 36$. What are the center and the radius of that ring?',
      choices: [
        'center $(1, 7)$, radius $6$',
        'center $(-1, -7)$, radius $36$',
        'center $(-1, -7)$, radius $6$',
        'center $(-1, -7)$, radius $12$',
      ],
      answer: 2,
      solution:
        'Route one, match the equation against $(x - h)^2 + (y - k)^2 = r^2$ one piece at a time: both brackets carry plus signs, so rewrite them as $(x - (-1))^2$ and $(y - (-7))^2$, which give $h = -1$ and $k = -7$. The right side is $r^2 = 36$, so $r = 6$. The center is $(-1, -7)$ and the radius is $6$ ✓. Check a second, independent way, by collecting points that satisfy the equation and measuring them: $(5, -7)$ gives $6^2 + 0^2 = 36$, $(-7, -7)$ gives $(-6)^2 + 0^2 = 36$, $(-1, -1)$ gives $0^2 + 6^2 = 36$, and $(-1, -13)$ gives $0^2 + (-6)^2 = 36$. All four are on the ring, the horizontal pair is $12$ apart, the vertical pair is $12$ apart, and both pairs have midpoint $(-1, -7)$. A ring $12$ units across has radius $6$, centered at $(-1, -7)$ ✓. (The choice center $(1, 7)$ is FLIPPING THE SIGNS THE WRONG WAY, reading the brackets as though they subtracted $-1$ and $-7$ ✗; the choice radius $36$ is REPORTING $r^2$ AS THE RADIUS ✗; the choice radius $12$ is HANDING BACK THE DIAMETER, the full width of the ring instead of half of it ✗.)',
    },
  ],
  // s2 — build the standard form from a stated center and radius.
  [
    {
      q: 'A lawn sprinkler stands at $(4, -1)$ and throws water exactly $7$ units in every direction. Which equation describes the circle its spray traces?',
      choices: [
        '$(x + 4)^2 + (y - 1)^2 = 49$',
        '$(x - 4)^2 + (y + 1)^2 = 7$',
        '$(x + 1)^2 + (y - 4)^2 = 49$',
        '$(x - 4)^2 + (y + 1)^2 = 49$',
      ],
      answer: 3,
      solution:
        'Route one, substitute into $(x - h)^2 + (y - k)^2 = r^2$: with $h = 4$ the first bracket is $(x - 4)^2$, and with $k = -1$ the second is $(y - (-1))^2 = (y + 1)^2$ — a negative coordinate turns into a plus sign inside the bracket. The right side is $r^2 = 7^2 = 49$, so the spray traces $(x - 4)^2 + (y + 1)^2 = 49$ ✓. Check a second, independent way, by testing a drop of water whose position is obvious: the spray reaches $7$ units due east of the sprinkler, so $(11, -1)$ must satisfy the right equation, and so must $(4, 6)$, which is $7$ units due north. Feeding $(11, -1)$ into the four candidates gives $15^2 + (-2)^2 = 229$, then $49$ against a right side of $7$, then $12^2 + (-5)^2 = 169$, and finally $7^2 + 0^2 = 49$. Only the last candidate accepts the drop, and it accepts $(4, 6)$ too, since $0^2 + 7^2 = 49$ ✓. (The choice $(x + 4)^2 + (y - 1)^2 = 49$ is COPYING THE CENTER’S NUMBERS STRAIGHT INTO THE BRACKETS, which describes a sprinkler at $(-4, 1)$ ✗; the choice with $7$ on the right is PUTTING THE RADIUS THERE INSTEAD OF ITS SQUARE ✗; the choice $(x + 1)^2 + (y - 4)^2 = 49$ is SWAPPING THE CENTER’S TWO COORDINATES, which moves the sprinkler to $(-1, 4)$ ✗.)',
    },
    {
      q: 'A small radio tower at $(-6, -3)$ reaches every listener within $10$ units of it. Which equation describes the boundary circle of its range?',
      choices: [
        '$(x - 6)^2 + (y - 3)^2 = 100$',
        '$(x + 6)^2 + (y + 3)^2 = 100$',
        '$(x + 6)^2 + (y + 3)^2 = 10$',
        '$(x + 3)^2 + (y + 6)^2 = 100$',
      ],
      answer: 1,
      solution:
        'Route one, substitute into $(x - h)^2 + (y - k)^2 = r^2$: here $h = -6$, so the first bracket is $(x - (-6))^2 = (x + 6)^2$, and $k = -3$ makes the second $(y + 3)^2$. The right side is $r^2 = 10^2 = 100$, so the boundary is $(x + 6)^2 + (y + 3)^2 = 100$ ✓. Check a second, independent way, by testing a listener standing at the edge: someone $10$ units due east of the tower sits at $(4, -3)$, and that listener must satisfy the right equation. The four candidates give $(-2)^2 + (-6)^2 = 40$, then $10^2 + 0^2 = 100$, then $100$ against a right side of $10$, then $7^2 + 3^2 = 58$. Only the second candidate puts this listener on the boundary ✓. (The choice $(x - 6)^2 + (y - 3)^2 = 100$ is COPYING THE CENTER’S NUMBERS STRAIGHT INTO THE BRACKETS, which builds a tower at $(6, 3)$ ✗; the choice with $10$ on the right is PUTTING THE RADIUS THERE INSTEAD OF ITS SQUARE ✗; the choice $(x + 3)^2 + (y + 6)^2 = 100$ is SWAPPING THE CENTER’S TWO COORDINATES, which moves the tower to $(-3, -6)$ ✗.)',
    },
    {
      q: 'A lighthouse beam sweeps out a circle of radius $8$ centered at the point $(7, 0)$. Which equation describes the edge of the lit region?',
      choices: [
        '$(x - 7)^2 + y^2 = 64$',
        '$(x + 7)^2 + y^2 = 64$',
        '$(x - 7)^2 + y^2 = 8$',
        '$x^2 + (y - 7)^2 = 64$',
      ],
      answer: 0,
      solution:
        'Route one, substitute into $(x - h)^2 + (y - k)^2 = r^2$: with $h = 7$ the first bracket is $(x - 7)^2$, and with $k = 0$ the second is $(y - 0)^2$, which is just $y^2$. The right side is $r^2 = 8^2 = 64$, so the lit edge is $(x - 7)^2 + y^2 = 64$ ✓. Check a second, independent way, by testing the two ends of the beam along the $x$-axis: the light reaches $8$ units either side of $(7, 0)$, so $(15, 0)$ and $(-1, 0)$ both sit on the edge. In the four candidates $(15, 0)$ gives $8^2 + 0^2 = 64$, then $22^2 + 0^2 = 484$, then $64$ against a right side of $8$, then $15^2 + 7^2 = 274$. Only the first candidate accepts it, and it accepts $(-1, 0)$ as well, since $(-8)^2 + 0^2 = 64$ ✓. (The choice $(x + 7)^2 + y^2 = 64$ is COPYING THE CENTER’S NUMBER STRAIGHT INTO THE BRACKET, which puts the lighthouse at $(-7, 0)$ ✗; the choice with $8$ on the right is PUTTING THE RADIUS THERE INSTEAD OF ITS SQUARE ✗; the choice $x^2 + (y - 7)^2 = 64$ is SWAPPING THE CENTER’S TWO COORDINATES, which stands the lighthouse at $(0, 7)$ ✗.)',
    },
  ],
  // s3 — the radius of a circle centered at the origin.
  [
    {
      q: 'A circular running track is drawn on a map as the curve $x^2 + y^2 = 81$. What is the radius of the track?',
      choices: ['$81$', '$18$', '$9$', '$\\sqrt{9}$'],
      answer: 2,
      solution:
        'Route one, match the equation against the standard form: $x^2 + y^2 = 81$ is $(x - 0)^2 + (y - 0)^2 = 81$, a circle centered at the origin with $r^2 = 81$. Taking the square root of the right side gives $r = \\sqrt{81} = 9$ ✓. Check a second, independent way, by finding a point of the track and measuring it: the track meets the positive $x$-axis where $y = 0$, and there $x^2 = 81$, so the point $(9, 0)$ lies on it. Every point of a circle is exactly one radius from the center, and $(9, 0)$ sits $9$ units from the origin, so the radius is $9$ ✓. (The choice $81$ is READING THE RIGHT SIDE AS THE RADIUS, though the standard form puts $r^2$ there ✗; the choice $18$ is DOUBLING THE RADIUS INTO THE DIAMETER, the distance all the way across the track ✗; the choice $\\sqrt{9}$ is TAKING THE SQUARE ROOT A SECOND TIME, rooting the radius $9$ that the first root already produced ✗.)',
    },
    {
      q: 'A circle centered at the origin has the equation $x^2 + y^2 = 30$. What is its radius?',
      choices: ['$\\sqrt{30}$', '$30$', '$\\sqrt{15}$', '$15$'],
      answer: 0,
      solution:
        'Route one, match the equation against the standard form: $x^2 + y^2 = 30$ is $(x - 0)^2 + (y - 0)^2 = 30$, so $r^2 = 30$ and $r = \\sqrt{30}$. That root does not simplify, since $30 = 2 \\cdot 3 \\cdot 5$ carries no square factor, so the radius stays $\\sqrt{30}$ ✓. Check a second, independent way, by finding a point of the circle and measuring it: setting $y = 0$ gives $x^2 = 30$, so the circle passes through $(\\sqrt{30}, 0)$, whose distance from the origin is $\\sqrt{30}$. Since $5^2 = 25$ and $6^2 = 36$, this radius sits between $5$ and $6$ ✓. (The choice $30$ is READING THE RIGHT SIDE AS THE RADIUS, though the standard form puts $r^2$ there ✗; the choice $\\sqrt{15}$ is HALVING THE RIGHT SIDE BEFORE TAKING THE SQUARE ROOT, as though half of $r^2$ gave half of $r$ ✗; the choice $15$ is MISREADING $r^2$ AS $2r$ and solving $2r = 30$ ✗.)',
    },
    {
      q: 'A Ferris wheel is drawn with its hub at the origin, so the rim is the circle $x^2 + y^2 = 121$. How long is the radius of the rim?',
      choices: ['$121$', '$\\sqrt{11}$', '$22$', '$11$'],
      answer: 3,
      solution:
        'Route one, match the equation against the standard form: $x^2 + y^2 = 121$ is $(x - 0)^2 + (y - 0)^2 = 121$, a circle about the origin with $r^2 = 121$, so $r = \\sqrt{121} = 11$ ✓. Check a second, independent way, by finding a point of the rim and measuring it: the highest seat sits where $x = 0$, and there $y^2 = 121$, giving the point $(0, 11)$. That seat is $11$ units above the hub, and a seat on the rim is exactly one radius from the hub, so the radius is $11$ ✓. (The choice $121$ is READING THE RIGHT SIDE AS THE RADIUS, though the standard form puts $r^2$ there ✗; the choice $\\sqrt{11}$ is TAKING THE SQUARE ROOT A SECOND TIME, rooting the $11$ that the first root already produced ✗; the choice $22$ is DOUBLING THE RADIUS INTO THE DIAMETER, the full height of the wheel ✗.)',
    },
  ],
  // s4 — test a point against a circle by comparing squared distances.
  [
    {
      q: 'Is the point $(2, 3)$ inside, on, or outside the circle $x^2 + y^2 = 25$?',
      fig: {
        view: [-6, -6, 6, 6],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'seg', a: [0, 0], b: [2, 3], dash: true },
          { t: 'point', p: [2, 3], label: 'P', dx: 12, dy: -6 },
        ],
      },
      choices: ['outside the circle', 'inside the circle', 'on the circle', 'at the center'],
      answer: 1,
      solution:
        'Route one, compare squared distances and skip the square roots: the center is the origin, so the squared distance out to $(2, 3)$ is $2^2 + 3^2 = 13$, while the circle carries $r^2 = 25$. Since $13 < 25$, the point is nearer the center than the circle reaches, so it lies inside ✓. Check a second, independent way, by slicing the circle with a horizontal line: on the line $y = 3$ the equation becomes $x^2 + 9 = 25$, so $x^2 = 16$ and the circle crosses that line at $(-4, 3)$ and $(4, 3)$. The tested point rides the same line at $x = 2$, and $-4 < 2 < 4$ puts it strictly between the two crossings — inside ✓. (The choice outside the circle is COMPARING THE SQUARED DISTANCE TO THE RADIUS INSTEAD OF TO $r^2$, since $13 > 5$ ✗; the choice on the circle is ADDING THE COORDINATES INSTEAD OF SQUARING THEM, since $2 + 3 = 5$ matches the radius ✗; the choice at the center is TREATING ANY INTERIOR POINT AS THE CENTER, though the only center here is the origin ✗.)',
    },
    {
      q: 'A drone hovers above the point $(8, 7)$. Is that point inside, on, or outside the circle $(x - 2)^2 + (y + 1)^2 = 100$?',
      fig: {
        view: [-9, -12, 13, 10],
        grid: true,
        elems: [
          { t: 'circle', c: [2, -1], r: 10 },
          { t: 'seg', a: [2, -1], b: [8, 7], dash: true },
          { t: 'point', p: [2, -1], label: 'C', dx: -12, dy: 12 },
          { t: 'point', p: [8, 7], label: 'D', dx: 12, dy: -6 },
        ],
      },
      choices: ['inside the circle', 'outside the circle', 'at the center', 'on the circle'],
      answer: 3,
      solution:
        'Route one, compare squared distances and skip the square roots: the center is $(2, -1)$, so substituting the drone’s position gives $(8 - 2)^2 + (7 + 1)^2 = 36 + 64 = 100$, exactly the $r^2$ on the right side. Equal means the point sits on the circle ✓. Check a second, independent way, by measuring the trip from the center: going from $(2, -1)$ to $(8, 7)$ takes $6$ units across and $8$ units up, and those legs make a right triangle whose hypotenuse is $\\sqrt{36 + 64} = 10$. The radius is $\\sqrt{100} = 10$, so the drone hovers exactly one radius from the center — on the circle ✓. (The choice inside the circle is DROPPING THE PLUS SIGN IN THE SECOND BRACKET and using the center $(2, 1)$, which returns $36 + 36 = 72$ ✗; the choice outside the circle is SWAPPING THE POINT’S TWO COORDINATES into $(7, 8)$, which returns $25 + 81 = 106$ ✗; the choice at the center is READING THE NUMBERS INSIDE THE BRACKETS AS THE POINT BEING TESTED, which describes $(2, -1)$ and not the drone ✗.)',
    },
    {
      q: 'A tent peg is driven in at $(10, 3)$. Is that peg inside, on, or outside the circle $(x - 2)^2 + (y + 3)^2 = 64$?',
      fig: {
        view: [-7, -12, 11, 6],
        grid: true,
        elems: [
          { t: 'circle', c: [2, -3], r: 8 },
          { t: 'seg', a: [2, -3], b: [10, 3], dash: true },
          { t: 'point', p: [2, -3], label: 'C', dx: -12, dy: 12 },
          { t: 'point', p: [10, 3], label: 'T', dx: 12, dy: -6 },
        ],
      },
      choices: ['on the circle', 'inside the circle', 'outside the circle', 'at the center'],
      answer: 2,
      solution:
        'Route one, compare squared distances and skip the square roots: the center is $(2, -3)$, so the peg gives $(10 - 2)^2 + (3 + 3)^2 = 64 + 36 = 100$, while the circle carries $r^2 = 64$. Since $100 > 64$, the peg stands farther from the center than the circle reaches — outside ✓. Check a second, independent way, by slicing the circle with a vertical line: on the line $x = 10$ the equation becomes $64 + (y + 3)^2 = 64$, so $(y + 3)^2 = 0$ and $y = -3$ is the only solution. That line brushes the circle at the single point $(10, -3)$ and everywhere else stays clear of it. The peg rides that same line at $y = 3$, which is not the one touching point, so the peg is off the circle on the far side — outside ✓. (The choice on the circle is DROPPING THE PLUS SIGN IN THE SECOND BRACKET and using the center $(2, 3)$, which returns $64 + 0 = 64$ ✗; the choice inside the circle is COMPARING THE DISTANCE $10$ WITH $r^2 = 64$ instead of with the radius $8$ ✗; the choice at the center is READING THE NUMBERS INSIDE THE BRACKETS AS THE POINT BEING TESTED, which describes $(2, -3)$ and not the peg ✗.)',
    },
  ],
  // s5 — uncover the center of a circle hiding in general form.
  [
    {
      q: 'Find the center of the circle $x^2 + y^2 + 6x - 10y + 18 = 0$.',
      choices: ['$(-3, 5)$', '$(3, -5)$', '$(-6, 10)$', '$(-3, -5)$'],
      answer: 0,
      solution:
        'Route one, complete both squares: group the equation as $(x^2 + 6x) + (y^2 - 10y) = -18$. Half of $6$ is $3$ and $3^2 = 9$; half of $-10$ is $-5$ and $(-5)^2 = 25$. Adding both to each side gives $(x^2 + 6x + 9) + (y^2 - 10y + 25) = -18 + 9 + 25$, which factors as $(x + 3)^2 + (y - 5)^2 = 16$. Reading the standard form, the center is $(-3, 5)$ ✓. Check a second, independent way, by bisecting chords: every horizontal chord of a circle is cut in half by the vertical line through the center. Fix any height $y$ that the circle reaches; the equation becomes $x^2 + 6x + C = 0$ with $C = y^2 - 10y + 18$. If its two solutions are $x_1$ and $x_2$, then $x^2 + 6x + C = (x - x_1)(x - x_2) = x^2 - (x_1 + x_2)x + x_1 x_2$, so $x_1 + x_2 = -6$ and the chord’s midpoint sits at $x = -3$ no matter which height was chosen. The same argument on vertical chords turns the equation into $y^2 - 10y + C\' = 0$, whose solutions add to $10$ for a midpoint height of $5$. The center is $(-3, 5)$ ✓. (The choice $(3, -5)$ is HALVING EACH COEFFICIENT WITHOUT FLIPPING ITS SIGN ✗; the choice $(-6, 10)$ is FLIPPING THE SIGNS BUT FORGETTING TO HALVE ✗; the choice $(-3, -5)$ is FLIPPING THE SIGN ON THE $x$-TERM AND LEAVING THE $y$-TERM ALONE ✗.)',
    },
    {
      q: 'A circle arrives in the disguised form $x^2 + y^2 - 12x - 4y + 15 = 0$. Where is its center?',
      choices: ['$(-6, -2)$', '$(12, 4)$', '$(6, 2)$', '$(6, -2)$'],
      answer: 2,
      solution:
        'Route one, complete both squares: group the equation as $(x^2 - 12x) + (y^2 - 4y) = -15$. Half of $-12$ is $-6$ and $(-6)^2 = 36$; half of $-4$ is $-2$ and $(-2)^2 = 4$. Adding both to each side gives $(x^2 - 12x + 36) + (y^2 - 4y + 4) = -15 + 36 + 4$, which factors as $(x - 6)^2 + (y - 2)^2 = 25$, so the center is $(6, 2)$ ✓. Check a second, independent way, by bisecting chords: the vertical line through the center cuts every horizontal chord in half. Fix a height the circle reaches; the equation becomes $x^2 - 12x + C = 0$, and writing that as $(x - x_1)(x - x_2) = x^2 - (x_1 + x_2)x + x_1 x_2$ shows the two crossings add to $12$, so their midpoint sits at $x = 6$ for every such height. Turning the argument sideways, the vertical crossings satisfy $y^2 - 4y + C\' = 0$ and add to $4$, for a midpoint height of $2$. The center is $(6, 2)$ ✓. (The choice $(-6, -2)$ is HALVING EACH COEFFICIENT WITHOUT FLIPPING ITS SIGN ✗; the choice $(12, 4)$ is FLIPPING THE SIGNS BUT FORGETTING TO HALVE ✗; the choice $(6, -2)$ is FLIPPING THE SIGN ON THE $x$-TERM AND LEAVING THE $y$-TERM ALONE ✗.)',
    },
    {
      q: 'Where is the center of the circle $x^2 + y^2 + 10x + 8y + 32 = 0$?',
      choices: ['$(5, 4)$', '$(-5, -4)$', '$(-10, -8)$', '$(-5, 4)$'],
      answer: 1,
      solution:
        'Route one, complete both squares: group the equation as $(x^2 + 10x) + (y^2 + 8y) = -32$. Half of $10$ is $5$ and $5^2 = 25$; half of $8$ is $4$ and $4^2 = 16$. Adding both to each side gives $(x^2 + 10x + 25) + (y^2 + 8y + 16) = -32 + 25 + 16$, which factors as $(x + 5)^2 + (y + 4)^2 = 9$, so the center is $(-5, -4)$ ✓. Check a second, independent way, by bisecting chords: a horizontal chord of a circle is bisected by the vertical line through the center. At any height the circle reaches, the equation becomes $x^2 + 10x + C = 0$, and comparing it with $(x - x_1)(x - x_2) = x^2 - (x_1 + x_2)x + x_1 x_2$ gives $x_1 + x_2 = -10$, so every such chord has its midpoint at $x = -5$. The vertical crossings satisfy $y^2 + 8y + C\' = 0$ and add to $-8$, for a midpoint height of $-4$. The center is $(-5, -4)$ ✓. (The choice $(5, 4)$ is HALVING EACH COEFFICIENT WITHOUT FLIPPING ITS SIGN ✗; the choice $(-10, -8)$ is FLIPPING THE SIGNS BUT FORGETTING TO HALVE ✗; the choice $(-5, 4)$ is FLIPPING THE SIGN ON THE $x$-TERM AND LEAVING THE $y$-TERM ALONE ✗.)',
    },
  ],
  // s6 — the radius of a circle hiding in general form.
  [
    {
      q: 'What is the radius of the circle $x^2 + y^2 - 24x - 4y + 48 = 0$?',
      choices: ['$100$', '$14$', '$10$', '$5$'],
      answer: 2,
      solution:
        'Route one, complete both squares: group the equation as $(x^2 - 24x) + (y^2 - 4y) = -48$, moving the constant across the equals sign, where it flips to $-48$. Half of $-24$ is $-12$ and $(-12)^2 = 144$; half of $-4$ is $-2$ and $(-2)^2 = 4$. Adding both to each side gives $(x^2 - 24x + 144) + (y^2 - 4y + 4) = -48 + 144 + 4$, which factors as $(x - 12)^2 + (y - 2)^2 = 100$, so $r = \\sqrt{100} = 10$ ✓. Check a second, independent way, by measuring a chord of the circle itself: every horizontal chord is bisected by the vertical line through the center, and at any height the equation reads $x^2 - 24x + C = 0$, whose two solutions add to $24$ — so the center sits at $x = 12$. Now walk up that line by putting $x = 12$ into the original equation: $144 + y^2 - 288 - 4y + 48 = 0$, that is $y^2 - 4y - 96 = 0$, which factors as $(y - 12)(y + 8) = 0$. The circle meets the line at $(12, 12)$ and $(12, -8)$, points $20$ apart whose midpoint $(12, 2)$ is the center — so that chord is a diameter, and the radius is half of $20$, namely $10$ ✓. (The choice $100$ is REPORTING $r^2$ WHERE THE RADIUS WAS ASKED FOR ✗; the choice $14$ is MOVING THE CONSTANT ACROSS THE EQUALS SIGN WITHOUT FLIPPING ITS SIGN, which builds $48 + 144 + 4 = 196$ on the right ✗; the choice $5$ is HALVING THE RADIUS, as though $\\sqrt{100}$ had been a diameter ✗.)',
    },
    {
      q: 'How long is the radius of the circle $x^2 + y^2 - 12x - 2y + 12 = 0$?',
      choices: ['$5$', '$25$', '$7$', '$10$'],
      answer: 0,
      solution:
        'Route one, complete both squares: group the equation as $(x^2 - 12x) + (y^2 - 2y) = -12$, since the constant flips sign as it crosses. Half of $-12$ is $-6$ and $(-6)^2 = 36$; half of $-2$ is $-1$ and $(-1)^2 = 1$. Adding both to each side gives $(x^2 - 12x + 36) + (y^2 - 2y + 1) = -12 + 36 + 1$, which factors as $(x - 6)^2 + (y - 1)^2 = 25$, so $r = \\sqrt{25} = 5$ ✓. Check a second, independent way, by measuring a chord of the circle itself: at any height the equation reads $x^2 - 12x + C = 0$, whose two solutions add to $12$, so every horizontal chord has its midpoint at $x = 6$ and the center sits on that line. Putting $x = 6$ into the original equation gives $36 + y^2 - 72 - 2y + 12 = 0$, that is $y^2 - 2y - 24 = 0$, which factors as $(y - 6)(y + 4) = 0$. The circle meets the line at $(6, 6)$ and $(6, -4)$, points $10$ apart whose midpoint $(6, 1)$ is the center — a diameter, so the radius is $5$ ✓. (The choice $25$ is REPORTING $r^2$ WHERE THE RADIUS WAS ASKED FOR ✗; the choice $7$ is MOVING THE CONSTANT ACROSS THE EQUALS SIGN WITHOUT FLIPPING ITS SIGN, which builds $12 + 36 + 1 = 49$ on the right ✗; the choice $10$ is DOUBLING THE RADIUS INTO THE DIAMETER ✗.)',
    },
    {
      q: 'A circle is written as $x^2 + y^2 - 18x - 2y + 18 = 0$. What is its radius?',
      choices: ['$64$', '$10$', '$16$', '$8$'],
      answer: 3,
      solution:
        'Route one, complete both squares: group the equation as $(x^2 - 18x) + (y^2 - 2y) = -18$, the constant flipping sign as it moves. Half of $-18$ is $-9$ and $(-9)^2 = 81$; half of $-2$ is $-1$ and $(-1)^2 = 1$. Adding both to each side gives $(x^2 - 18x + 81) + (y^2 - 2y + 1) = -18 + 81 + 1$, which factors as $(x - 9)^2 + (y - 1)^2 = 64$, so $r = \\sqrt{64} = 8$ ✓. Check a second, independent way, by measuring a chord of the circle itself: at any height the equation reads $x^2 - 18x + C = 0$, whose two solutions add to $18$, so every horizontal chord is bisected at $x = 9$ and the center lies on that vertical line. Putting $x = 9$ into the original equation gives $81 + y^2 - 162 - 2y + 18 = 0$, that is $y^2 - 2y - 63 = 0$, which factors as $(y - 9)(y + 7) = 0$. The circle meets the line at $(9, 9)$ and $(9, -7)$, points $16$ apart whose midpoint $(9, 1)$ is the center — a diameter, so the radius is $8$ ✓. (The choice $64$ is REPORTING $r^2$ WHERE THE RADIUS WAS ASKED FOR ✗; the choice $10$ is MOVING THE CONSTANT ACROSS THE EQUALS SIGN WITHOUT FLIPPING ITS SIGN, which builds $18 + 81 + 1 = 100$ on the right ✗; the choice $16$ is DOUBLING THE RADIUS INTO THE DIAMETER ✗.)',
    },
  ],
  // s7 — build a circle from the two endpoints of a diameter.
  [
    {
      q: 'The endpoints of a diameter of a circle are $(2, -1)$ and $(8, 7)$. What is the equation of the circle?',
      fig: {
        view: [-1, -3, 11, 9],
        grid: true,
        elems: [
          { t: 'circle', c: [5, 3], r: 5 },
          { t: 'seg', a: [2, -1], b: [8, 7] },
          { t: 'point', p: [2, -1], label: 'A', dx: -12, dy: 8 },
          { t: 'point', p: [8, 7], label: 'B', dx: 12, dy: -6 },
          { t: 'point', p: [5, 3], label: 'C', dx: 12, dy: 10 },
        ],
      },
      choices: [
        '$(x - 5)^2 + (y - 3)^2 = 100$',
        '$(x + 5)^2 + (y + 3)^2 = 25$',
        '$(x - 10)^2 + (y - 6)^2 = 25$',
        '$(x - 5)^2 + (y - 3)^2 = 25$',
      ],
      answer: 3,
      solution:
        'Route one, find the center and then the radius: a diameter has the center as its midpoint, so the center is $\\left(\\frac{2 + 8}{2}, \\frac{-1 + 7}{2}\\right) = (5, 3)$. The diameter’s length is $\\sqrt{(8 - 2)^2 + (7 - (-1))^2} = \\sqrt{36 + 64} = 10$, and the radius is half of that, so $r = 5$ and $r^2 = 25$. The circle is $(x - 5)^2 + (y - 3)^2 = 25$ ✓. Check a second, independent way, by asking which candidate accepts both endpoints, since the ends of a diameter certainly lie on the circle: feeding $(2, -1)$ into the four candidates gives $(-3)^2 + (-4)^2 = 25$ against a right side of $100$, then $7^2 + 2^2 = 53$ against $25$, then $(-8)^2 + (-7)^2 = 113$ against $25$, and finally $25$ against $25$. Only the last one takes it, and it takes $(8, 7)$ too, since $3^2 + 4^2 = 25$ ✓. (The choice with $100$ on the right is USING THE WHOLE DIAMETER AS THE RADIUS, squaring $10$ instead of $5$ ✗; the choice $(x + 5)^2 + (y + 3)^2 = 25$ is COPYING THE CENTER’S NUMBERS INTO THE BRACKETS WITH THE WRONG SIGNS, which centers the circle at $(-5, -3)$ ✗; the choice $(x - 10)^2 + (y - 6)^2 = 25$ is ADDING THE TWO ENDPOINTS WITHOUT DIVIDING BY $2$, which lands on $(10, 6)$ instead of the midpoint ✗.)',
    },
    {
      q: 'A circle has a diameter running from $(0, 0)$ to $(12, 16)$. What is its equation?',
      fig: {
        view: [-5, -3, 17, 19],
        grid: true,
        elems: [
          { t: 'circle', c: [6, 8], r: 10 },
          { t: 'seg', a: [0, 0], b: [12, 16] },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 10 },
          { t: 'point', p: [12, 16], label: 'B', dx: 12, dy: -6 },
          { t: 'point', p: [6, 8], label: 'C', dx: 14, dy: 8 },
        ],
      },
      choices: [
        '$(x - 6)^2 + (y - 8)^2 = 400$',
        '$(x - 6)^2 + (y - 8)^2 = 100$',
        '$(x - 12)^2 + (y - 16)^2 = 100$',
        '$(x + 6)^2 + (y + 8)^2 = 100$',
      ],
      answer: 1,
      solution:
        'Route one, find the center and then the radius: the center is the midpoint of the diameter, $\\left(\\frac{0 + 12}{2}, \\frac{0 + 16}{2}\\right) = (6, 8)$. The diameter measures $\\sqrt{12^2 + 16^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20$, so $r = 10$ and $r^2 = 100$. The circle is $(x - 6)^2 + (y - 8)^2 = 100$ ✓. Check a second, independent way, by asking which candidate accepts both endpoints: the point $(0, 0)$ gives $36 + 64 = 100$ against a right side of $400$, then $100$ against $100$, then $144 + 256 = 400$ against $100$, and then $36 + 64 = 100$ against $100$ — two candidates survive, so bring in the other endpoint. Feeding $(12, 16)$ into those two gives $6^2 + 8^2 = 100$ for the second candidate and $18^2 + 24^2 = 900$ for the fourth. Only $(x - 6)^2 + (y - 8)^2 = 100$ holds both ends of the diameter ✓. (The choice with $400$ on the right is USING THE WHOLE DIAMETER AS THE RADIUS, squaring $20$ instead of $10$ ✗; the choice $(x - 12)^2 + (y - 16)^2 = 100$ is ADDING THE TWO ENDPOINTS WITHOUT DIVIDING BY $2$, which centers the circle on the far endpoint ✗; the choice $(x + 6)^2 + (y + 8)^2 = 100$ is COPYING THE CENTER’S NUMBERS INTO THE BRACKETS WITH THE WRONG SIGNS, which centers the circle at $(-6, -8)$ ✗.)',
    },
    {
      q: 'A circle has a diameter with endpoints $(-5, -1)$ and $(7, 3)$. Which equation describes it?',
      fig: {
        view: [-7, -7, 9, 9],
        grid: true,
        elems: [
          { t: 'circle', c: [1, 1], r: Math.sqrt(40) },
          { t: 'seg', a: [-5, -1], b: [7, 3] },
          { t: 'point', p: [-5, -1], label: 'A', dx: -12, dy: 10 },
          { t: 'point', p: [7, 3], label: 'B', dx: 12, dy: -6 },
          { t: 'point', p: [1, 1], label: 'C', dx: 10, dy: 14 },
        ],
      },
      choices: [
        '$(x - 1)^2 + (y - 1)^2 = 40$',
        '$(x - 1)^2 + (y - 1)^2 = 160$',
        '$(x - 2)^2 + (y - 2)^2 = 40$',
        '$(x + 1)^2 + (y + 1)^2 = 40$',
      ],
      answer: 0,
      solution:
        'Route one, find the center and then the radius: the midpoint of the diameter is $\\left(\\frac{-5 + 7}{2}, \\frac{-1 + 3}{2}\\right) = (1, 1)$. The diameter’s squared length is $(7 - (-5))^2 + (3 - (-1))^2 = 144 + 16 = 160$; halving the diameter quarters its square, so $r^2 = \\frac{160}{4} = 40$ and the root never has to be taken. The circle is $(x - 1)^2 + (y - 1)^2 = 40$ ✓. Check a second, independent way, by asking which candidate accepts both endpoints: the point $(-5, -1)$ gives $(-6)^2 + (-2)^2 = 40$ against a right side of $40$, then that same $40$ against $160$, then $(-7)^2 + (-3)^2 = 58$ against $40$, and then $(-4)^2 + 0^2 = 16$ against $40$. Only the first candidate takes it, and it takes $(7, 3)$ as well, since $6^2 + 2^2 = 40$ ✓. (The choice with $160$ on the right is USING THE WHOLE DIAMETER AS THE RADIUS, keeping the squared diameter instead of a quarter of it ✗; the choice $(x - 2)^2 + (y - 2)^2 = 40$ is ADDING THE TWO ENDPOINTS WITHOUT DIVIDING BY $2$, which lands on $(2, 2)$ instead of the midpoint ✗; the choice $(x + 1)^2 + (y + 1)^2 = 40$ is COPYING THE CENTER’S NUMBERS INTO THE BRACKETS WITH THE WRONG SIGNS, which centers the circle at $(-1, -1)$ ✗.)',
    },
  ],
  // s8 — which of four points satisfies the equation exactly.
  [
    {
      q: 'Which of these points sits exactly ON the circle $(x - 2)^2 + (y - 3)^2 = 25$?',
      choices: ['$(-2, 2)$', '$(-2, 6)$', '$(6, -2)$', '$(4, 4)$'],
      answer: 1,
      solution:
        'Route one, feed each point into the left side and look for exactly $25$: $(-2, 2)$ gives $(-4)^2 + (-1)^2 = 17$; $(-2, 6)$ gives $(-4)^2 + 3^2 = 16 + 9 = 25$; $(6, -2)$ gives $4^2 + (-5)^2 = 41$; $(4, 4)$ gives $2^2 + 1^2 = 5$. Only $(-2, 6)$ hits $25$, so only $(-2, 6)$ is on the circle ✓. Check a second, independent way, by measuring each trip out from the center $(2, 3)$ and comparing it with the radius $\\sqrt{25} = 5$: the trip to $(-2, 6)$ runs $4$ left and $3$ up, the legs of a $3$-$4$-$5$ right triangle, so that point stands exactly $5$ from the center. The trip to $(4, 4)$ is only $2$ across and $1$ up, far short of $5$; the trip to $(-2, 2)$ is $4$ across and $1$ down, still short; the trip to $(6, -2)$ is $4$ across and $5$ down, already a full $5$ on the downward leg by itself, so the trip has to overshoot $5$. The single point at radius distance is $(-2, 6)$ ✓. (The choice $(-2, 2)$ is ADDING THE CENTER’S COORDINATES INSTEAD OF SUBTRACTING THEM, since $(-2 + 2)^2 + (2 + 3)^2 = 25$ ✗; the choice $(6, -2)$ is READING THE CORRECT POINT WITH ITS COORDINATES IN THE WRONG ORDER ✗; the choice $(4, 4)$ is COMPARING THE LEFT SIDE WITH THE RADIUS $5$ INSTEAD OF WITH $r^2 = 25$ ✗.)',
    },
    {
      q: 'Which point lies on the circle $(x - 3)^2 + y^2 = 25$?',
      choices: ['$(1, 3)$', '$(-3, 7)$', '$(5, -1)$', '$(7, -3)$'],
      answer: 3,
      solution:
        'Route one, feed each point into the left side and look for exactly $25$: $(1, 3)$ gives $(-2)^2 + 3^2 = 13$; $(-3, 7)$ gives $(-6)^2 + 7^2 = 85$; $(5, -1)$ gives $2^2 + (-1)^2 = 5$; $(7, -3)$ gives $4^2 + (-3)^2 = 16 + 9 = 25$. Only $(7, -3)$ hits $25$ ✓. Check a second, independent way, by measuring each trip out from the center $(3, 0)$ and comparing it with the radius $\\sqrt{25} = 5$: the trip to $(7, -3)$ runs $4$ right and $3$ down, the legs of a $3$-$4$-$5$ right triangle, so that point is exactly $5$ from the center. The trip to $(5, -1)$ is $2$ right and $1$ down, far too short; the trip to $(1, 3)$ is $2$ left and $3$ up, also short; the trip to $(-3, 7)$ is $6$ left and $7$ up, longer than $5$ on either leg by itself. The point at radius distance is $(7, -3)$ ✓. (The choice $(1, 3)$ is ADDING THE CENTER’S COORDINATE INSTEAD OF SUBTRACTING IT, since $(1 + 3)^2 + 3^2 = 25$ ✗; the choice $(-3, 7)$ is READING THE CORRECT POINT WITH ITS COORDINATES IN THE WRONG ORDER ✗; the choice $(5, -1)$ is COMPARING THE LEFT SIDE WITH THE RADIUS $5$ INSTEAD OF WITH $r^2 = 25$ ✗.)',
    },
    {
      q: 'Which of these four points lies on the circle $(x + 5)^2 + (y - 1)^2 = 100$?',
      choices: ['$(-2, 0)$', '$(11, 7)$', '$(1, 9)$', '$(9, 1)$'],
      answer: 2,
      solution:
        'Route one, feed each point into the left side and look for exactly $100$: $(-2, 0)$ gives $3^2 + (-1)^2 = 10$; $(11, 7)$ gives $16^2 + 6^2 = 292$; $(1, 9)$ gives $6^2 + 8^2 = 36 + 64 = 100$; $(9, 1)$ gives $14^2 + 0^2 = 196$. Only $(1, 9)$ hits $100$ ✓. Check a second, independent way, by measuring each trip out from the center $(-5, 1)$ and comparing it with the radius $\\sqrt{100} = 10$: the trip to $(1, 9)$ runs $6$ right and $8$ up, the legs of a $6$-$8$-$10$ right triangle, so that point stands exactly $10$ from the center. The trip to $(-2, 0)$ is $3$ right and $1$ down, nowhere near $10$; the trip to $(9, 1)$ is a straight $14$ to the right, too far; the trip to $(11, 7)$ is $16$ right and $6$ up, farther still. The point at radius distance is $(1, 9)$ ✓. (The choice $(11, 7)$ is ADDING THE CENTER’S COORDINATES INSTEAD OF SUBTRACTING THEM, since $(11 - 5)^2 + (7 + 1)^2 = 100$ ✗; the choice $(9, 1)$ is READING THE CORRECT POINT WITH ITS COORDINATES IN THE WRONG ORDER ✗; the choice $(-2, 0)$ is COMPARING THE LEFT SIDE WITH THE RADIUS $10$ INSTEAD OF WITH $r^2 = 100$ ✗.)',
    },
  ],
  // s9 — set y = 0 and solve; the height of the center pulls the crossings in.
  [
    {
      q: 'At what points does the circle $(x - 6)^2 + (y - 3)^2 = 25$ cross the $x$-axis?',
      fig: {
        view: [0, -3, 12, 9],
        grid: true,
        elems: [
          { t: 'circle', c: [6, 3], r: 5 },
          { t: 'seg', a: [6, 3], b: [6, 0], dash: true },
          { t: 'point', p: [6, 3], label: 'C', dx: 12, dy: 0 },
        ],
      },
      choices: [
        '$(2, 0)$ and $(10, 0)$',
        '$(1, 0)$ and $(11, 0)$',
        '$(-2, 0)$ and $(10, 0)$',
        '$(6, 0)$ only',
      ],
      answer: 0,
      solution:
        'Route one, put $y = 0$ into the equation: $(x - 6)^2 + (0 - 3)^2 = 25$ becomes $(x - 6)^2 + 9 = 25$, so $(x - 6)^2 = 16$ and $x - 6 = \\pm 4$. That gives $x = 6 + 4 = 10$ and $x = 6 - 4 = 2$, so the circle cuts the axis at $(2, 0)$ and $(10, 0)$ ✓. Check a second, independent way, with a right triangle: drop a perpendicular from the center $(6, 3)$ to the axis; its foot is $(6, 0)$ and its length is $3$. A radius drawn to either crossing is the hypotenuse of a right triangle with that perpendicular as one leg, so the other leg measures $\\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$ — the familiar $3$-$4$-$5$ triangle. Stepping $4$ each way along the axis from $(6, 0)$ lands on $(2, 0)$ and $(10, 0)$ ✓. (The choice $(1, 0)$ and $(11, 0)$ is STEPPING A WHOLE RADIUS LEFT AND RIGHT FROM THE CENTER, which ignores that the center floats $3$ above the axis and the crossings are pulled inward ✗; the choice $(-2, 0)$ and $(10, 0)$ is SUBTRACTING IN THE WRONG ORDER ON THE LEFT BRANCH, computing $4 - 6$ instead of $6 - 4$ ✗; the choice $(6, 0)$ only is ASSUMING THE CIRCLE MERELY TOUCHES THE AXIS AT THE FOOT BELOW THE CENTER, which happens only when the height matches the radius, and here $3$ is less than $5$ ✗.)',
    },
    {
      q: 'At which points does the circle $x^2 + (y + 3)^2 = 25$ meet the $x$-axis?',
      fig: {
        view: [-6, -9, 6, 3],
        grid: true,
        elems: [
          { t: 'circle', c: [0, -3], r: 5 },
          { t: 'seg', a: [0, -3], b: [0, 0], dash: true },
          { t: 'point', p: [0, -3], label: 'C', dx: 12, dy: 0 },
        ],
      },
      choices: [
        '$(-5, 0)$ and $(5, 0)$',
        '$(0, 2)$ and $(0, -8)$',
        '$(-4, 0)$ and $(4, 0)$',
        '$(-3, 0)$ and $(3, 0)$',
      ],
      answer: 2,
      solution:
        'Route one, put $y = 0$ into the equation: $x^2 + (0 + 3)^2 = 25$ becomes $x^2 + 9 = 25$, so $x^2 = 16$ and $x = \\pm 4$. The circle meets the axis at $(-4, 0)$ and $(4, 0)$ ✓. Check a second, independent way, with a right triangle: the center $(0, -3)$ sits $3$ below the axis, and its perpendicular foot is the origin. A radius running to a meeting point is the hypotenuse of a right triangle whose vertical leg is that $3$, so the horizontal leg is $\\sqrt{5^2 - 3^2} = 4$. Stepping $4$ each way from the origin along the axis gives $(-4, 0)$ and $(4, 0)$ ✓. (The choice $(-5, 0)$ and $(5, 0)$ is STEPPING A WHOLE RADIUS LEFT AND RIGHT FROM THE CENTER, ignoring the $3$ units of depth the radius must also cover ✗; the choice $(0, 2)$ and $(0, -8)$ is SETTING $x = 0$ INSTEAD OF $y = 0$, which finds where the circle meets the $y$-axis ✗; the choice $(-3, 0)$ and $(3, 0)$ is STEPPING THE CENTER’S DEPTH ALONG THE AXIS, using the $3$ as a horizontal move instead of solving for $x$ ✗.)',
    },
    {
      q: 'Where does the circle $(x - 5)^2 + (y + 3)^2 = 25$ cross the $x$-axis?',
      fig: {
        view: [-1, -9, 11, 3],
        grid: true,
        elems: [
          { t: 'circle', c: [5, -3], r: 5 },
          { t: 'seg', a: [5, -3], b: [5, 0], dash: true },
          { t: 'point', p: [5, -3], label: 'C', dx: 12, dy: 0 },
        ],
      },
      choices: [
        '$(0, 0)$ and $(10, 0)$',
        '$(1, 0)$ and $(9, 0)$',
        '$(5, 0)$ only',
        '$(2, 0)$ and $(8, 0)$',
      ],
      answer: 1,
      solution:
        'Route one, put $y = 0$ into the equation: $(x - 5)^2 + (0 + 3)^2 = 25$ becomes $(x - 5)^2 + 9 = 25$, so $(x - 5)^2 = 16$ and $x - 5 = \\pm 4$. That gives $x = 9$ and $x = 1$, so the crossings are $(1, 0)$ and $(9, 0)$ ✓. Check a second, independent way, with a right triangle: the center $(5, -3)$ lies $3$ below the axis, and the perpendicular from it meets the axis at $(5, 0)$. A radius drawn to a crossing is the hypotenuse of a right triangle with legs $3$ and the horizontal step, so that step is $\\sqrt{5^2 - 3^2} = 4$. Moving $4$ each way from $(5, 0)$ lands on $(1, 0)$ and $(9, 0)$ ✓. (The choice $(0, 0)$ and $(10, 0)$ is STEPPING A WHOLE RADIUS LEFT AND RIGHT FROM THE CENTER, which would be right only if the center sat on the axis ✗; the choice $(5, 0)$ only is ASSUMING THE CIRCLE MERELY TOUCHES THE AXIS AT THE POINT DIRECTLY ABOVE THE CENTER, which happens only when the depth matches the radius, and here $3$ is less than $5$ ✗; the choice $(2, 0)$ and $(8, 0)$ is STEPPING THE CENTER’S DEPTH ALONG THE AXIS, using the $3$ as a horizontal move instead of solving for $x$ ✗.)',
    },
  ],
  // s10 — subtract the two equations, then finish on either circle.
  [
    {
      q: 'The circles $x^2 + y^2 = 100$ and $(x - 12)^2 + y^2 = 100$ meet at which two points?',
      fig: {
        view: [-11, -11, 23, 11],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 10 },
          { t: 'circle', c: [12, 0], r: 10 },
          { t: 'point', p: [0, 0], label: 'C', dx: -12, dy: 14 },
          { t: 'point', p: [12, 0], label: 'D', dx: 14, dy: 14 },
        ],
      },
      choices: [
        '$(8, 6)$ and $(8, -6)$',
        '$(6, 0)$ only',
        '$(6, 8)$ and $(6, -8)$',
        '$(10, 0)$ and $(-10, 0)$',
      ],
      answer: 2,
      solution:
        'Route one, set the two left sides equal, since both equal $100$: $x^2 + y^2 = (x - 12)^2 + y^2$. The $y^2$ terms cancel and $x^2 = x^2 - 24x + 144$ leaves $24x = 144$, so $x = 6$. Putting that into the first circle gives $36 + y^2 = 100$, so $y^2 = 64$ and $y = \\pm 8$. The circles meet at $(6, 8)$ and $(6, -8)$ ✓. Check a second, independent way, by symmetry: the two circles have the same radius, so any point on both is the same distance from $(0, 0)$ as from $(12, 0)$ and must lie on the perpendicular bisector of the segment joining the centers — the vertical line halfway between them, $x = 6$. A point $(6, y)$ on the first circle satisfies $36 + y^2 = 100$, giving $y = 8$ or $y = -8$, and both points satisfy the second circle too, since $(6 - 12)^2 + 64 = 36 + 64 = 100$ ✓. (The choice $(8, 6)$ and $(8, -6)$ is SWAPPING THE TWO COORDINATES OF EACH MEETING POINT ✗; the choice $(6, 0)$ only is STOPPING AT $x = 6$ AND SETTING $y = 0$ instead of solving for $y$ ✗; the choice $(10, 0)$ and $(-10, 0)$ is REPORTING WHERE THE FIRST CIRCLE MEETS THE $x$-AXIS rather than where the two circles meet each other ✗.)',
    },
    {
      q: 'Where do the circles $x^2 + y^2 = 25$ and $(x - 8)^2 + y^2 = 25$ cross each other?',
      fig: {
        view: [-6, -6, 14, 6],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'circle', c: [8, 0], r: 5 },
          { t: 'point', p: [0, 0], label: 'C', dx: -12, dy: 14 },
          { t: 'point', p: [8, 0], label: 'D', dx: 14, dy: 14 },
        ],
      },
      choices: [
        '$(4, 3)$ and $(4, -3)$',
        '$(3, 4)$ and $(3, -4)$',
        '$(5, 0)$ and $(-5, 0)$',
        '$(4, 0)$ only',
      ],
      answer: 0,
      solution:
        'Route one, set the two left sides equal, since both equal $25$: $x^2 + y^2 = (x - 8)^2 + y^2$. The $y^2$ terms cancel and $x^2 = x^2 - 16x + 64$ leaves $16x = 64$, so $x = 4$. Putting that into the first circle gives $16 + y^2 = 25$, so $y^2 = 9$ and $y = \\pm 3$. The circles cross at $(4, 3)$ and $(4, -3)$ ✓. Check a second, independent way, by symmetry: equal radii mean any shared point is as far from $(0, 0)$ as from $(8, 0)$, so it lies on the perpendicular bisector of the segment joining the centers, the line $x = 4$. A point $(4, y)$ on the first circle satisfies $16 + y^2 = 25$, giving $y = 3$ or $y = -3$, and each also satisfies the second circle, since $(4 - 8)^2 + 9 = 16 + 9 = 25$ ✓. (The choice $(3, 4)$ and $(3, -4)$ is SWAPPING THE TWO COORDINATES OF EACH CROSSING POINT ✗; the choice $(5, 0)$ and $(-5, 0)$ is REPORTING WHERE THE FIRST CIRCLE MEETS THE $x$-AXIS rather than where the two circles meet each other ✗; the choice $(4, 0)$ only is STOPPING AT $x = 4$ AND SETTING $y = 0$ instead of solving for $y$ ✗.)',
    },
    {
      q: 'The circles $x^2 + y^2 = 29$ and $(x + 4)^2 + y^2 = 29$ intersect at which points?',
      fig: {
        view: [-10, -6, 6, 6],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: Math.sqrt(29) },
          { t: 'circle', c: [-4, 0], r: Math.sqrt(29) },
          { t: 'point', p: [0, 0], label: 'C', dx: 12, dy: 14 },
          { t: 'point', p: [-4, 0], label: 'D', dx: -14, dy: 14 },
        ],
      },
      choices: [
        '$(5, -2)$ and $(-5, -2)$',
        '$(-2, 0)$ only',
        '$(-2, 25)$ and $(-2, -25)$',
        '$(-2, 5)$ and $(-2, -5)$',
      ],
      answer: 3,
      solution:
        'Route one, set the two left sides equal, since both equal $29$: $x^2 + y^2 = (x + 4)^2 + y^2$. The $y^2$ terms cancel and $x^2 = x^2 + 8x + 16$ leaves $8x = -16$, so $x = -2$. Putting that into the first circle gives $4 + y^2 = 29$, so $y^2 = 25$ and $y = \\pm 5$. The circles intersect at $(-2, 5)$ and $(-2, -5)$ ✓. Check a second, independent way, by symmetry: the radii are equal, so a shared point is the same distance from $(0, 0)$ as from $(-4, 0)$ and lies on the perpendicular bisector of the segment joining the centers, the line $x = -2$. A point $(-2, y)$ on the first circle satisfies $4 + y^2 = 29$, giving $y = 5$ or $y = -5$, and each lands on the second circle as well, since $(-2 + 4)^2 + 25 = 4 + 25 = 29$ ✓. (The choice $(5, -2)$ and $(-5, -2)$ is SWAPPING THE TWO COORDINATES OF EACH INTERSECTION POINT ✗; the choice $(-2, 0)$ only is STOPPING AT $x = -2$ AND SETTING $y = 0$ instead of solving for $y$ ✗; the choice $(-2, 25)$ and $(-2, -25)$ is FORGETTING TO TAKE THE SQUARE ROOT after reaching $y^2 = 25$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 17,
  sections: { '17.2': s172 },
}
