// Introduction to Geometry chapter 17 — variations for section 17.5 (Distance
// Between a Point and a Line). All problems, figures, and solutions are
// original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is reached twice along routes that share no steps. The
//    pairings used here are: read the perpendicular off the picture versus run
//    the point-line formula; the area method versus the point-line formula;
//    pick a point and use the formula versus intersect the perpendicular and
//    use the distance formula; the formula from the center versus locating the
//    nearest point of the circle outright.
//  - Figures are coordinate-exact and sit only where the base problems carry
//    them: the area-method slot, the closest-point slot, and the circle slot.
//    Labels are plain text, never LaTeX.
//  - Each distractor is one named mistake — stopping at the vertical gap,
//    forgetting the square root in the denominator, adding the coefficients
//    instead of taking their root, reporting the center-to-line distance, and
//    so on — and it is named in CAPS.

const s175 = [
  // s1 — distance from a point to a vertical line.
  [
    {
      q: 'A hiking trail on a park map runs along the vertical line $x = 5$. A ranger station stands at $(-3, 5)$. How far is the station from the trail?',
      choices: ['$2$', '$3$', '$8$', '$64$'],
      answer: 2,
      solution:
        'Route one, drop the perpendicular and read a coordinate difference: the shortest path from a point to a vertical line is horizontal, so the foot is the point of the trail at the station’s own height, namely $(5, 5)$. Travelling from $x = -3$ to $x = 5$ covers $5 - (-3) = 8$ units, and the height never changes along the way, so the distance is $8$ ✓. Route two, the point-line formula: in standard form the trail is $x - 5 = 0$, so $a = 1$, $b = 0$, $c = -5$, and the distance from $(-3, 5)$ is $\\frac{|1(-3) + 0(5) - 5|}{\\sqrt{1^2 + 0^2}} = \\frac{|-8|}{1} = 8$ ✓. (The choice $2$ is MISHANDLING THE NEGATIVE COORDINATE, computing $5 - 3$ as though the station stood at $x = 3$ ✗; the choice $3$ is MEASURING TO THE $y$-AXIS instead of to the trail, a run of only $|-3| = 3$ ✗; the choice $64$ is FORGETTING THE SQUARE ROOT AT THE END OF THE DISTANCE FORMULA, leaving $8^2 + 0^2 = 64$ as if it were the length ✗.)',
    },
    {
      q: 'A fence is drawn on a garden plan as the vertical line $x = -5$. A birdbath sits at the point $(4, -6)$. What is the distance from the birdbath to the fence?',
      choices: ['$9$', '$1$', '$4$', '$81$'],
      answer: 0,
      solution:
        'Route one, drop the perpendicular and read a coordinate difference: the shortest route to a vertical line runs straight across, so the foot is $(-5, -6)$, the fence point at the birdbath’s own height. From $x = 4$ to $x = -5$ is $4 - (-5) = 9$ units, so the distance is $9$ ✓. Route two, the point-line formula: the fence is $x + 5 = 0$, giving $a = 1$, $b = 0$, $c = 5$, so the distance from $(4, -6)$ is $\\frac{|1(4) + 0(-6) + 5|}{\\sqrt{1^2 + 0^2}} = \\frac{9}{1} = 9$ ✓. (The choice $1$ is MISHANDLING THE NEGATIVE COORDINATE, computing $4 - 5$ as though the fence were $x = 5$ ✗; the choice $4$ is MEASURING TO THE $y$-AXIS instead of to the fence, a run of only $|4| = 4$ ✗; the choice $81$ is FORGETTING THE SQUARE ROOT AT THE END OF THE DISTANCE FORMULA, leaving $9^2 = 81$ standing as the length ✗.)',
    },
    {
      q: 'On a floor plan a wall runs along the vertical line $x = 4$, and a lamp is plugged in at $(-8, 3)$. How far is the lamp from the wall?',
      choices: ['$4$', '$8$', '$144$', '$12$'],
      answer: 3,
      solution:
        'Route one, drop the perpendicular and read a coordinate difference: the perpendicular from a point to a vertical wall is horizontal, so the foot is $(4, 3)$. Going from $x = -8$ to $x = 4$ covers $4 - (-8) = 12$ units at a constant height, so the distance is $12$ ✓. Route two, the point-line formula: the wall is $x - 4 = 0$, so $a = 1$, $b = 0$, $c = -4$, and the distance from $(-8, 3)$ is $\\frac{|1(-8) + 0(3) - 4|}{\\sqrt{1^2 + 0^2}} = \\frac{|-12|}{1} = 12$ ✓. (The choice $4$ is MISHANDLING THE NEGATIVE COORDINATE, computing $4 - 8$ as though the lamp sat at $x = 8$ ✗; the choice $8$ is MEASURING TO THE $y$-AXIS instead of to the wall, a run of only $|-8| = 8$ ✗; the choice $144$ is FORGETTING THE SQUARE ROOT AT THE END OF THE DISTANCE FORMULA, leaving $12^2 = 144$ in place of the length ✗.)',
    },
  ],
  // s2 — distance from a point to a horizontal line.
  [
    {
      q: 'A ceiling in a side view of a room is the horizontal line $y = 4$. A balloon floats at $(7, -2)$. How far is the balloon from the ceiling?',
      choices: ['$6$', '$2$', '$7$', '$36$'],
      answer: 0,
      solution:
        'Route one, rise straight to the line and read a coordinate difference: the shortest path from a point to a horizontal line is vertical, so the foot is the ceiling point directly above the balloon, namely $(7, 4)$. Climbing from $y = -2$ to $y = 4$ covers $4 - (-2) = 6$ units and never changes the first coordinate, so the distance is $6$ ✓. Route two, the point-line formula: the ceiling is $y - 4 = 0$, so $a = 0$, $b = 1$, $c = -4$, and the distance from $(7, -2)$ is $\\frac{|0(7) + 1(-2) - 4|}{\\sqrt{0^2 + 1^2}} = \\frac{|-6|}{1} = 6$ ✓. (The choice $2$ is MISHANDLING THE NEGATIVE COORDINATE, computing $4 - 2$ as though the balloon were at height $2$ ✗; the choice $7$ is READING THE WRONG COORDINATE, measuring across with the first coordinate when a horizontal line is met by a vertical climb ✗; the choice $36$ is FORGETTING THE SQUARE ROOT AT THE END OF THE DISTANCE FORMULA, leaving $0^2 + 6^2 = 36$ as the answer ✗.)',
    },
    {
      q: 'The floor of a stage is drawn as the horizontal line $y = -3$, and a spotlight hangs at the point $(-5, 8)$. What is the distance from the spotlight to the floor?',
      choices: ['$5$', '$8$', '$11$', '$121$'],
      answer: 2,
      solution:
        'Route one, drop straight to the line and read a coordinate difference: the perpendicular from a point to a horizontal line is vertical, so the foot is $(-5, -3)$, the floor point directly beneath the spotlight. Falling from $y = 8$ to $y = -3$ covers $8 - (-3) = 11$ units, so the distance is $11$ ✓. Route two, the point-line formula: the floor is $y + 3 = 0$, so $a = 0$, $b = 1$, $c = 3$, and the distance from $(-5, 8)$ is $\\frac{|0(-5) + 1(8) + 3|}{\\sqrt{0^2 + 1^2}} = \\frac{11}{1} = 11$ ✓. (The choice $5$ is MISHANDLING THE NEGATIVE COORDINATE, computing $8 - 3$ as though the floor were $y = 3$ ✗; the choice $8$ is MEASURING TO THE $x$-AXIS instead of to the floor, a drop of only $|8| = 8$ ✗; the choice $121$ is FORGETTING THE SQUARE ROOT AT THE END OF THE DISTANCE FORMULA, leaving $11^2 = 121$ as the length ✗.)',
    },
    {
      q: 'On a cross-section diagram the surface of a lake is the horizontal line $y = 6$, and a diving drone hovers at $(6, -4)$. How far is the drone from the surface?',
      choices: ['$2$', '$10$', '$4$', '$100$'],
      answer: 1,
      solution:
        'Route one, rise straight to the line and read a coordinate difference: the shortest trip from the drone to a horizontal line goes straight up, so the foot is $(6, 6)$. Rising from $y = -4$ to $y = 6$ covers $6 - (-4) = 10$ units, so the distance is $10$ ✓. Route two, the point-line formula: the surface is $y - 6 = 0$, so $a = 0$, $b = 1$, $c = -6$, and the distance from $(6, -4)$ is $\\frac{|0(6) + 1(-4) - 6|}{\\sqrt{0^2 + 1^2}} = \\frac{|-10|}{1} = 10$ ✓. (The choice $2$ is MISHANDLING THE NEGATIVE COORDINATE, computing $6 - 4$ as though the drone sat at height $4$ ✗; the choice $4$ is MEASURING TO THE $x$-AXIS instead of to the surface, a rise of only $|-4| = 4$ ✗; the choice $100$ is FORGETTING THE SQUARE ROOT AT THE END OF THE DISTANCE FORMULA, leaving $10^2 = 100$ where the length belongs ✗.)',
    },
  ],
  // s3 — the area method: origin to a line given in standard form.
  [
    {
      q: 'Use the area method to find the distance from the origin to the line $3x + 4y = 15$.',
      fig: {
        view: [-1, -1, 6, 5],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [0, 3.75]], fill: false },
          { t: 'seg', a: [0, 0], b: [1.8, 2.4], dash: true },
          { t: 'point', p: [0, 0], dx: -10, dy: 12 },
          { t: 'point', p: [5, 0], dx: 8, dy: 12 },
          { t: 'point', p: [0, 3.75], dx: -10, dy: -6 },
        ],
      },
      choices: ['$\\frac{3}{5}$', '$3$', '$\\frac{15}{7}$', '$\\frac{15}{4}$'],
      answer: 1,
      solution:
        'Route one, the area method: setting $y = 0$ gives the crossing $(5, 0)$ and setting $x = 0$ gives $\\left(0, \\frac{15}{4}\\right)$, so with the origin the line cuts off a right triangle with legs $5$ and $\\frac{15}{4}$ and area $\\frac{1}{2} \\cdot 5 \\cdot \\frac{15}{4} = \\frac{75}{8}$. Now read that same triangle with its slanted side as the base: that side is $\\sqrt{5^2 + \\left(\\frac{15}{4}\\right)^2} = \\sqrt{\\frac{625}{16}} = \\frac{25}{4}$ long, and the height standing on it is the distance from the origin to the line. One triangle has one area, so $h = \\frac{2 \\cdot \\frac{75}{8}}{\\frac{25}{4}} = \\frac{75}{4} \\cdot \\frac{4}{25} = 3$ ✓. Route two, the point-line formula: with the line as $3x + 4y - 15 = 0$, the distance from $(0, 0)$ is $\\frac{|3(0) + 4(0) - 15|}{\\sqrt{3^2 + 4^2}} = \\frac{15}{5} = 3$ ✓. (The choice $\\frac{3}{5}$ is FORGETTING THE SQUARE ROOT IN THE DENOMINATOR, dividing by $3^2 + 4^2 = 25$ to get $\\frac{15}{25}$ ✗; the choice $\\frac{15}{7}$ is ADDING THE COEFFICIENTS INSTEAD OF TAKING THEIR ROOT, dividing by $3 + 4 = 7$ ✗; the choice $\\frac{15}{4}$ is STOPPING AT THE $y$-INTERCEPT, measuring to where the line crosses the $y$-axis rather than to its nearest point ✗.)',
    },
    {
      q: 'A guy wire is stretched along the line $8x + 15y = 120$. Using the area method, how far is the origin from the wire?',
      fig: {
        view: [-2, -2, 17, 10],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [0, 8]], fill: false },
          { t: 'seg', a: [0, 0], b: [3.32, 6.23], dash: true },
          { t: 'point', p: [0, 0], dx: -10, dy: 12 },
          { t: 'point', p: [15, 0], dx: 4, dy: 14 },
          { t: 'point', p: [0, 8], dx: -10, dy: -6 },
        ],
      },
      choices: ['$\\frac{120}{289}$', '$\\frac{120}{23}$', '$8$', '$\\frac{120}{17}$'],
      answer: 3,
      solution:
        'Route one, the area method: the wire crosses the axes at $(15, 0)$ and $(0, 8)$, so with the origin it bounds a right triangle with legs $15$ and $8$ and area $\\frac{1}{2} \\cdot 15 \\cdot 8 = 60$. Re-read the same triangle with the wire itself as the base: that base is $\\sqrt{15^2 + 8^2} = \\sqrt{289} = 17$ long, and the height onto it is the distance from the origin to the wire. Equal areas give $\\frac{1}{2} \\cdot 17 \\cdot h = 60$, so $h = \\frac{120}{17}$ ✓. Route two, the point-line formula: writing the wire as $8x + 15y - 120 = 0$, the distance from $(0, 0)$ is $\\frac{|8(0) + 15(0) - 120|}{\\sqrt{8^2 + 15^2}} = \\frac{120}{17}$ ✓. (The choice $\\frac{120}{289}$ is FORGETTING THE SQUARE ROOT IN THE DENOMINATOR, dividing by $8^2 + 15^2 = 289$ ✗; the choice $\\frac{120}{23}$ is ADDING THE COEFFICIENTS INSTEAD OF TAKING THEIR ROOT, dividing by $8 + 15 = 23$ ✗; the choice $8$ is STOPPING AT THE $y$-INTERCEPT, measuring to $(0, 8)$ rather than to the nearest point of the wire ✗.)',
    },
    {
      q: 'A laser beam travels along the line $3x + 4y = 30$. Use the area method to find how far the origin lies from the beam.',
      fig: {
        view: [-2, -2, 12, 10],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [0, 7.5]], fill: false },
          { t: 'seg', a: [0, 0], b: [3.6, 4.8], dash: true },
          { t: 'point', p: [0, 0], dx: -10, dy: 12 },
          { t: 'point', p: [10, 0], dx: 6, dy: 14 },
          { t: 'point', p: [0, 7.5], dx: -10, dy: -6 },
        ],
      },
      choices: ['$\\frac{6}{5}$', '$\\frac{30}{7}$', '$6$', '$\\frac{15}{2}$'],
      answer: 2,
      solution:
        'Route one, the area method: the beam meets the axes at $(10, 0)$ and $\\left(0, \\frac{15}{2}\\right)$, so with the origin it encloses a right triangle with legs $10$ and $\\frac{15}{2}$ and area $\\frac{1}{2} \\cdot 10 \\cdot \\frac{15}{2} = \\frac{75}{2}$. Read the same triangle with the beam as the base: that base measures $\\sqrt{10^2 + \\left(\\frac{15}{2}\\right)^2} = \\sqrt{\\frac{625}{4}} = \\frac{25}{2}$, and the height on it is the distance from the origin to the beam. Equal areas give $\\frac{1}{2} \\cdot \\frac{25}{2} \\cdot h = \\frac{75}{2}$, that is $\\frac{25}{4}h = \\frac{75}{2}$, so $h = \\frac{75}{2} \\cdot \\frac{4}{25} = 6$ ✓. Route two, the point-line formula: writing the beam as $3x + 4y - 30 = 0$, the distance from $(0, 0)$ is $\\frac{|3(0) + 4(0) - 30|}{\\sqrt{3^2 + 4^2}} = \\frac{30}{5} = 6$ ✓. (The choice $\\frac{6}{5}$ is FORGETTING THE SQUARE ROOT IN THE DENOMINATOR, dividing by $3^2 + 4^2 = 25$ to get $\\frac{30}{25}$ ✗; the choice $\\frac{30}{7}$ is ADDING THE COEFFICIENTS INSTEAD OF TAKING THEIR ROOT, dividing by $3 + 4 = 7$ ✗; the choice $\\frac{15}{2}$ is STOPPING AT THE $y$-INTERCEPT, measuring to where the beam crosses the $y$-axis instead of to its nearest point ✗.)',
    },
  ],
  // s4 — distance from a point to the diagonal line y = x.
  [
    {
      q: 'How far is the point $(5, -1)$ from the line $y = x$?',
      choices: ['$6$', '$\\sqrt{26}$', '$6\\sqrt{2}$', '$3\\sqrt{2}$'],
      answer: 3,
      solution:
        'Route one, intersect the perpendicular: the line $y = x$ has slope $1$, so the perpendicular through $(5, -1)$ has slope $-1$, giving $y + 1 = -(x - 5)$, or $y = -x + 4$. It meets $y = x$ where $x = -x + 4$, so $x = 2$ and the foot is $(2, 2)$. The distance from $(5, -1)$ to $(2, 2)$ is $\\sqrt{3^2 + (-3)^2} = \\sqrt{18} = 3\\sqrt{2}$ ✓. Route two, the point-line formula: written in standard form the line is $x - y = 0$, so the distance is $\\frac{|5 - (-1)|}{\\sqrt{1^2 + (-1)^2}} = \\frac{6}{\\sqrt{2}} = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}$ ✓. (The choice $6$ is MEASURING STRAIGHT UP TO THE LINE, the climb from $(5, -1)$ to $(5, 5)$, which is a slanted trip relative to a $45°$ line and so longer than the perpendicular ✗; the choice $\\sqrt{26}$ is MEASURING TO THE ORIGIN, a point that does sit on the line but is not the closest one, since $\\sqrt{5^2 + (-1)^2} = \\sqrt{26}$ ✗; the choice $6\\sqrt{2}$ is MULTIPLYING BY $\\sqrt{2}$ INSTEAD OF DIVIDING, which stretches the gap rather than shrinking it ✗.)',
    },
    {
      q: 'A mirror lies along the line $y = x$, and a candle stands at $(-2, 3)$. What is the distance from the candle to the mirror?',
      choices: ['$5$', '$\\frac{5\\sqrt{2}}{2}$', '$\\sqrt{13}$', '$5\\sqrt{2}$'],
      answer: 1,
      solution:
        'Route one, intersect the perpendicular: the mirror has slope $1$, so the perpendicular through $(-2, 3)$ has slope $-1$, giving $y - 3 = -(x + 2)$, or $y = -x + 1$. It meets $y = x$ where $x = -x + 1$, so $x = \\frac{1}{2}$ and the foot is $\\left(\\frac{1}{2}, \\frac{1}{2}\\right)$. The distance from $(-2, 3)$ to that foot is $\\sqrt{\\left(\\frac{5}{2}\\right)^2 + \\left(\\frac{5}{2}\\right)^2} = \\sqrt{\\frac{25}{2}} = \\frac{5}{\\sqrt{2}} = \\frac{5\\sqrt{2}}{2}$ ✓. Route two, the point-line formula: the mirror is $x - y = 0$, so the distance is $\\frac{|-2 - 3|}{\\sqrt{1^2 + (-1)^2}} = \\frac{5}{\\sqrt{2}} = \\frac{5\\sqrt{2}}{2}$ ✓. (The choice $5$ is MEASURING STRAIGHT DOWN TO THE LINE, the drop from $(-2, 3)$ to $(-2, -2)$, which runs at an angle to the mirror instead of square to it ✗; the choice $\\sqrt{13}$ is MEASURING TO THE ORIGIN, which lies on the mirror but is not its nearest point, since $\\sqrt{(-2)^2 + 3^2} = \\sqrt{13}$ ✗; the choice $5\\sqrt{2}$ is MULTIPLYING BY $\\sqrt{2}$ INSTEAD OF DIVIDING, stretching the gap by a factor of $2$ where the perpendicular drop shrinks it by a factor of $\\frac{\\sqrt{2}}{2}$ ✗.)',
    },
    {
      q: 'A straight canal follows the line $y = x$ on a survey map. A well is drilled at $(3, -5)$. How far is the well from the canal?',
      choices: ['$4\\sqrt{2}$', '$8$', '$\\sqrt{34}$', '$8\\sqrt{2}$'],
      answer: 0,
      solution:
        'Route one, intersect the perpendicular: the canal has slope $1$, so the perpendicular through $(3, -5)$ has slope $-1$, giving $y + 5 = -(x - 3)$, or $y = -x - 2$. It crosses $y = x$ where $x = -x - 2$, so $x = -1$ and the foot is $(-1, -1)$. The distance from $(3, -5)$ to $(-1, -1)$ is $\\sqrt{4^2 + (-4)^2} = \\sqrt{32} = 4\\sqrt{2}$ ✓. Route two, the point-line formula: the canal is $x - y = 0$, so the distance is $\\frac{|3 - (-5)|}{\\sqrt{1^2 + (-1)^2}} = \\frac{8}{\\sqrt{2}} = \\frac{8\\sqrt{2}}{2} = 4\\sqrt{2}$ ✓. (The choice $8$ is MEASURING STRAIGHT UP TO THE LINE, the climb from $(3, -5)$ to $(3, 3)$, a slanted path across a $45°$ canal rather than the square crossing ✗; the choice $\\sqrt{34}$ is MEASURING TO THE ORIGIN, a canal point that is not the nearest one, since $\\sqrt{3^2 + (-5)^2} = \\sqrt{34}$ ✗; the choice $8\\sqrt{2}$ is MULTIPLYING BY $\\sqrt{2}$ INSTEAD OF DIVIDING, growing the gap where the tilt should shrink it ✗.)',
    },
  ],
  // s5 — distance between two parallel lines given in slope-intercept form.
  [
    {
      q: 'What is the distance between the parallel lines $y = x + 1$ and $y = x + 9$?',
      choices: ['$8$', '$4$', '$4\\sqrt{2}$', '$8\\sqrt{2}$'],
      answer: 2,
      solution:
        'Route one, pick a point and use the point-line formula: both lines have slope $1$, so they never meet and stay a fixed distance apart. The point $(0, 1)$ sits on the first line, and the second line in standard form is $x - y + 9 = 0$, so the distance is $\\frac{|0 - 1 + 9|}{\\sqrt{1^2 + (-1)^2}} = \\frac{8}{\\sqrt{2}} = 4\\sqrt{2}$ ✓. Route two, intersect the common perpendicular: through $(0, 1)$ the perpendicular has slope $-1$, so it is $y = -x + 1$. It meets $y = x + 9$ where $-x + 1 = x + 9$, giving $x = -4$ and $y = 5$. The distance from $(0, 1)$ to $(-4, 5)$ is $\\sqrt{(-4)^2 + 4^2} = \\sqrt{32} = 4\\sqrt{2}$ ✓. (The choice $8$ is SUBTRACTING THE INTERCEPTS AND STOPPING, reporting the vertical gap $9 - 1$, which is measured up the page rather than square to the lines ✗; the choice $4$ is FORGETTING THE SQUARE ROOT IN THE DENOMINATOR, dividing the gap by $1^2 + (-1)^2 = 2$ ✗; the choice $8\\sqrt{2}$ is MULTIPLYING THE VERTICAL GAP BY $\\sqrt{2}$ INSTEAD OF DIVIDING, though tilting the ruler can only shorten the gap ✗.)',
    },
    {
      q: 'Two train tracks are drawn as the parallel lines $y = 2x + 1$ and $y = 2x + 11$. How far apart are the tracks?',
      choices: ['$2\\sqrt{5}$', '$10$', '$2$', '$10\\sqrt{5}$'],
      answer: 0,
      solution:
        'Route one, pick a point and use the point-line formula: the shared slope $2$ makes the tracks parallel, so one measurement settles the gap everywhere. Take $(0, 1)$ on the first track and write the second as $2x - y + 11 = 0$. The distance is $\\frac{|2(0) - 1 + 11|}{\\sqrt{2^2 + (-1)^2}} = \\frac{10}{\\sqrt{5}} = \\frac{10\\sqrt{5}}{5} = 2\\sqrt{5}$ ✓. Route two, intersect the common perpendicular: through $(0, 1)$ the perpendicular has slope $-\\frac{1}{2}$, so it is $y = -\\frac{1}{2}x + 1$. It meets $y = 2x + 11$ where $2x + 11 = -\\frac{1}{2}x + 1$, so $\\frac{5}{2}x = -10$, giving $x = -4$ and $y = 3$. The distance from $(0, 1)$ to $(-4, 3)$ is $\\sqrt{(-4)^2 + 2^2} = \\sqrt{20} = 2\\sqrt{5}$ ✓. (The choice $10$ is SUBTRACTING THE INTERCEPTS AND STOPPING, reporting the vertical gap $11 - 1$ instead of the perpendicular one ✗; the choice $2$ is FORGETTING THE SQUARE ROOT IN THE DENOMINATOR, dividing by $2^2 + (-1)^2 = 5$ ✗; the choice $10\\sqrt{5}$ is MULTIPLYING THE VERTICAL GAP BY $\\sqrt{5}$ INSTEAD OF DIVIDING, which makes the tracks farther apart than the drawing allows ✗.)',
    },
    {
      q: 'A bike path and a hedge run along the parallel lines $y = -x + 3$ and $y = -x - 4$. What is the distance between them?',
      choices: ['$7$', '$\\frac{7}{2}$', '$7\\sqrt{2}$', '$\\frac{7\\sqrt{2}}{2}$'],
      answer: 3,
      solution:
        'Route one, pick a point and use the point-line formula: both have slope $-1$, so the gap is the same all the way along. The point $(0, 3)$ lies on the bike path, and the hedge in standard form is $x + y + 4 = 0$, so the distance is $\\frac{|0 + 3 + 4|}{\\sqrt{1^2 + 1^2}} = \\frac{7}{\\sqrt{2}} = \\frac{7\\sqrt{2}}{2}$ ✓. Route two, intersect the common perpendicular: through $(0, 3)$ the perpendicular has slope $1$, so it is $y = x + 3$. It meets $y = -x - 4$ where $x + 3 = -x - 4$, giving $x = -\\frac{7}{2}$ and $y = -\\frac{1}{2}$. The distance from $(0, 3)$ to $\\left(-\\frac{7}{2}, -\\frac{1}{2}\\right)$ is $\\sqrt{\\left(\\frac{7}{2}\\right)^2 + \\left(\\frac{7}{2}\\right)^2} = \\sqrt{\\frac{49}{2}} = \\frac{7}{\\sqrt{2}} = \\frac{7\\sqrt{2}}{2}$ ✓. (The choice $7$ is SUBTRACTING THE INTERCEPTS AND STOPPING, reporting the vertical gap $3 - (-4)$ rather than the perpendicular distance ✗; the choice $\\frac{7}{2}$ is FORGETTING THE SQUARE ROOT IN THE DENOMINATOR, dividing the gap by $1^2 + 1^2 = 2$ ✗; the choice $7\\sqrt{2}$ is MULTIPLYING THE VERTICAL GAP BY $\\sqrt{2}$ INSTEAD OF DIVIDING, stretching the gap when the $45°$ tilt shortens it ✗.)',
    },
  ],
  // s6 — the closest point of a line to a given point.
  [
    {
      q: 'Which point on the line $y = 3x$ is closest to the point $(10, 0)$?',
      fig: {
        view: [-2, -4, 11, 7],
        grid: true,
        elems: [
          { t: 'line', a: [-1, -3], b: [2, 6] },
          { t: 'point', p: [10, 0], dx: 4, dy: 14 },
        ],
      },
      choices: ['$(5, 15)$', '$(1, 3)$', '$(10, 30)$', '$(3, 1)$'],
      answer: 1,
      solution:
        'Route one, intersect the perpendicular: the closest point is the foot of the perpendicular. The line has slope $3$, so the perpendicular through $(10, 0)$ has slope $-\\frac{1}{3}$, giving $y = -\\frac{1}{3}(x - 10)$. Setting that equal to $y = 3x$: $3x = -\\frac{1}{3}x + \\frac{10}{3}$, so $\\frac{10}{3}x = \\frac{10}{3}$ and $x = 1$, putting the foot at $(1, 3)$ ✓. Route two, find the shortest distance first and see which point achieves it: in standard form the line is $3x - y = 0$, so the closest approach measures $\\frac{|3(10) - 0|}{\\sqrt{3^2 + (-1)^2}} = \\frac{30}{\\sqrt{10}} = 3\\sqrt{10}$. Among the offered points, $(1, 3)$ lies on the line and sits $\\sqrt{(10 - 1)^2 + (0 - 3)^2} = \\sqrt{90} = 3\\sqrt{10}$ away, matching the minimum exactly ✓. (The choice $(5, 15)$ is FLIPPING ONLY THE SIGN OF THE SLOPE, using $-3$ in place of $-\\frac{1}{3}$ and crossing the line at $(5, 15)$ ✗; the choice $(10, 30)$ is MOVING STRAIGHT UP TO THE LINE, the line point sharing the first coordinate $10$ ✗; the choice $(3, 1)$ is WRITING THE FOOT’S COORDINATES IN THE WRONG ORDER, and $(3, 1)$ does not even satisfy $y = 3x$ ✗.)',
    },
    {
      q: 'A shoreline follows the line $y = \\frac{1}{2}x$, and a buoy floats at $(0, 5)$. Which point of the shoreline is nearest the buoy?',
      fig: {
        view: [-3, -2, 9, 7],
        grid: true,
        elems: [
          { t: 'line', a: [-2, -1], b: [8, 4] },
          { t: 'point', p: [0, 5], dx: -12, dy: -4 },
        ],
      },
      choices: ['$\\left(5, \\frac{5}{2}\\right)$', '$(0, 0)$', '$(1, 2)$', '$(2, 1)$'],
      answer: 3,
      solution:
        'Route one, intersect the perpendicular: the nearest shoreline point is the foot of the perpendicular from the buoy. The shoreline has slope $\\frac{1}{2}$, so the perpendicular through $(0, 5)$ has slope $-2$, giving $y = -2x + 5$. Setting that equal to $y = \\frac{1}{2}x$: $\\frac{1}{2}x = -2x + 5$, so $\\frac{5}{2}x = 5$ and $x = 2$, putting the foot at $(2, 1)$ ✓. Route two, find the shortest distance first and see which point achieves it: in standard form the shoreline is $x - 2y = 0$, so the closest approach is $\\frac{|0 - 2(5)|}{\\sqrt{1^2 + (-2)^2}} = \\frac{10}{\\sqrt{5}} = 2\\sqrt{5}$. Of the points offered, $(2, 1)$ lies on the shoreline and sits $\\sqrt{(0 - 2)^2 + (5 - 1)^2} = \\sqrt{20} = 2\\sqrt{5}$ from the buoy, hitting the minimum ✓. (The choice $\\left(5, \\frac{5}{2}\\right)$ is FLIPPING ONLY THE SIGN OF THE SLOPE, using $-\\frac{1}{2}$ in place of $-2$ and meeting the shoreline there ✗; the choice $(0, 0)$ is DROPPING STRAIGHT DOWN TO THE LINE, the shoreline point sharing the first coordinate $0$ ✗; the choice $(1, 2)$ is WRITING THE FOOT’S COORDINATES IN THE WRONG ORDER, and $(1, 2)$ fails the equation $y = \\frac{1}{2}x$ ✗.)',
    },
    {
      q: 'A conveyor belt runs along the line $y = 2x - 6$. A sensor is mounted at $(-4, 1)$. Which point of the belt is closest to the sensor?',
      fig: {
        view: [-6, -9, 8, 6],
        grid: true,
        elems: [
          { t: 'line', a: [0, -6], b: [5, 4] },
          { t: 'point', p: [-4, 1], dx: -12, dy: -4 },
        ],
      },
      choices: ['$(-4, -14)$', '$\\left(\\frac{7}{2}, 1\\right)$', '$(2, -2)$', '$(-2, 2)$'],
      answer: 2,
      solution:
        'Route one, intersect the perpendicular: the closest belt point is the foot of the perpendicular from the sensor. The belt has slope $2$, so the perpendicular through $(-4, 1)$ has slope $-\\frac{1}{2}$, giving $y = -\\frac{1}{2}x - 1$. Setting that equal to $y = 2x - 6$: $2x - 6 = -\\frac{1}{2}x - 1$, so $\\frac{5}{2}x = 5$ and $x = 2$, putting the foot at $(2, -2)$ ✓. Route two, find the shortest distance first and see which point achieves it: in standard form the belt is $2x - y - 6 = 0$, so the closest approach is $\\frac{|2(-4) - 1 - 6|}{\\sqrt{2^2 + (-1)^2}} = \\frac{15}{\\sqrt{5}} = 3\\sqrt{5}$. Among the offered points, $(2, -2)$ lies on the belt and sits $\\sqrt{(-4 - 2)^2 + (1 + 2)^2} = \\sqrt{45} = 3\\sqrt{5}$ from the sensor, matching the minimum ✓. (The choice $(-4, -14)$ is DROPPING STRAIGHT DOWN TO THE LINE, the belt point sharing the first coordinate $-4$ ✗; the choice $\\left(\\frac{7}{2}, 1\\right)$ is SLIDING STRAIGHT ACROSS TO THE LINE, the belt point at the sensor’s own height ✗; the choice $(-2, 2)$ is WRITING THE FOOT’S COORDINATES IN THE WRONG ORDER, and $(-2, 2)$ does not satisfy $y = 2x - 6$ ✗.)',
    },
  ],
  // s7 — origin to the line joining the two intercepts of a right triangle.
  [
    {
      q: 'A sail is cut as the triangle with vertices $(0, 0)$, $(3, 0)$, and $(0, 4)$. What is the distance from the origin to the line through $(3, 0)$ and $(0, 4)$?',
      choices: ['$\\frac{12}{5}$', '$\\frac{12}{25}$', '$\\frac{6}{5}$', '$\\frac{5}{2}$'],
      answer: 0,
      solution:
        'Route one, the area method: the two legs lie on the axes, so the sail is a right triangle with legs $3$ and $4$ and area $\\frac{1}{2} \\cdot 3 \\cdot 4 = 6$. Its slanted side measures $\\sqrt{3^2 + 4^2} = 5$, and read against that side as the base, the height is exactly the distance we want: $\\frac{1}{2} \\cdot 5 \\cdot h = 6$ gives $h = \\frac{12}{5}$ ✓. Route two, the point-line formula: the line through $(3, 0)$ and $(0, 4)$ is $4x + 3y = 12$, so the distance from $(0, 0)$ is $\\frac{|4(0) + 3(0) - 12|}{\\sqrt{4^2 + 3^2}} = \\frac{12}{5}$ ✓. (The choice $\\frac{12}{25}$ is FORGETTING THE SQUARE ROOT IN THE DENOMINATOR, dividing by $4^2 + 3^2 = 25$ ✗; the choice $\\frac{6}{5}$ is FORGETTING TO DOUBLE THE AREA, using $\\frac{\\text{area}}{\\text{base}}$ when the height formula calls for $\\frac{2 \\times \\text{area}}{\\text{base}}$ ✗; the choice $\\frac{5}{2}$ is MEASURING TO THE MIDPOINT OF THE SLANTED SIDE, the point $\\left(\\frac{3}{2}, 2\\right)$, which sits $\\frac{5}{2}$ from the origin but is not the foot of the perpendicular ✗.)',
    },
    {
      q: 'A triangular garden bed has corners at $(0, 0)$, $(6, 0)$, and $(0, 8)$. How far is the origin from the line through $(6, 0)$ and $(0, 8)$?',
      choices: ['$\\frac{24}{25}$', '$\\frac{12}{5}$', '$\\frac{24}{5}$', '$5$'],
      answer: 2,
      solution:
        'Route one, the area method: the bed is a right triangle with legs $6$ and $8$ along the axes, so its area is $\\frac{1}{2} \\cdot 6 \\cdot 8 = 24$ and its slanted side is $\\sqrt{6^2 + 8^2} = 10$ long. Reading the slanted side as the base, the height on it is the distance from the origin: $\\frac{1}{2} \\cdot 10 \\cdot h = 24$ gives $h = \\frac{24}{5}$ ✓. Route two, the point-line formula: the line through $(6, 0)$ and $(0, 8)$ is $4x + 3y = 24$, so the distance from $(0, 0)$ is $\\frac{|4(0) + 3(0) - 24|}{\\sqrt{4^2 + 3^2}} = \\frac{24}{5}$ ✓. (The choice $\\frac{24}{25}$ is FORGETTING THE SQUARE ROOT IN THE DENOMINATOR, dividing by $4^2 + 3^2 = 25$ ✗; the choice $\\frac{12}{5}$ is FORGETTING TO DOUBLE THE AREA, computing $\\frac{24}{10}$ instead of $\\frac{2 \\cdot 24}{10}$ ✗; the choice $5$ is MEASURING TO THE MIDPOINT OF THE SLANTED SIDE, the point $(3, 4)$, which is $5$ from the origin but is not the foot of the perpendicular ✗.)',
    },
    {
      q: 'A triangular flag has vertices $(0, 0)$, $(9, 0)$, and $(0, 12)$. Find the distance from the origin to the line through $(9, 0)$ and $(0, 12)$.',
      choices: ['$\\frac{36}{25}$', '$\\frac{36}{5}$', '$\\frac{18}{5}$', '$\\frac{15}{2}$'],
      answer: 1,
      solution:
        'Route one, the area method: the flag is a right triangle with legs $9$ and $12$ on the axes, so its area is $\\frac{1}{2} \\cdot 9 \\cdot 12 = 54$ and its slanted side is $\\sqrt{9^2 + 12^2} = 15$. Taking that side as the base, the height on it is the distance from the origin: $\\frac{1}{2} \\cdot 15 \\cdot h = 54$ gives $h = \\frac{108}{15} = \\frac{36}{5}$ ✓. Route two, the point-line formula: the line through $(9, 0)$ and $(0, 12)$ is $4x + 3y = 36$, so the distance from $(0, 0)$ is $\\frac{|4(0) + 3(0) - 36|}{\\sqrt{4^2 + 3^2}} = \\frac{36}{5}$ ✓. (The choice $\\frac{36}{25}$ is FORGETTING THE SQUARE ROOT IN THE DENOMINATOR, dividing by $4^2 + 3^2 = 25$ ✗; the choice $\\frac{18}{5}$ is FORGETTING TO DOUBLE THE AREA, computing $\\frac{54}{15}$ instead of $\\frac{2 \\cdot 54}{15}$ ✗; the choice $\\frac{15}{2}$ is MEASURING TO THE MIDPOINT OF THE SLANTED SIDE, the point $\\left(\\frac{9}{2}, 6\\right)$, which lies $\\frac{15}{2}$ from the origin but is not the foot of the perpendicular ✗.)',
    },
  ],
  // s8 — distance from a point to a line that passes through the origin.
  [
    {
      q: 'What is the distance from the point $(5, -2)$ to the line $3x - 4y = 0$?',
      choices: ['$\\frac{23}{25}$', '$23$', '$\\frac{7}{5}$', '$\\frac{23}{5}$'],
      answer: 3,
      solution:
        'Route one, the point-line formula: with $a = 3$, $b = -4$, and $c = 0$, the distance is $\\frac{|3(5) - 4(-2)|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|15 + 8|}{5} = \\frac{23}{5}$ ✓. Route two, the area method on a triangle built from the origin: the line runs through $O(0, 0)$ and also through $Q(4, 3)$, since $3(4) - 4(3) = 0$, and $OQ = \\sqrt{4^2 + 3^2} = 5$. The triangle $OQP$ with $P(5, -2)$ has area $\\frac{1}{2}|4(-2) - 3(5)| = \\frac{1}{2}|-23| = \\frac{23}{2}$. Reading $OQ$ as the base, the height from $P$ is the distance to the line: $\\frac{1}{2} \\cdot 5 \\cdot h = \\frac{23}{2}$ gives $h = \\frac{23}{5}$ ✓. (The choice $\\frac{23}{25}$ is FORGETTING THE SQUARE ROOT IN THE DENOMINATOR, dividing by $3^2 + (-4)^2 = 25$ ✗; the choice $23$ is DROPPING THE DENOMINATOR ENTIRELY, since the numerator on its own is not a length ✗; the choice $\\frac{7}{5}$ is MISHANDLING THE MINUS SIGN AGAINST THE NEGATIVE COORDINATE, computing $15 - 8 = 7$ when $-4(-2)$ adds $8$ ✗.)',
    },
    {
      q: 'A rope is stretched along the line $8x - 15y = 0$. How far from the rope is the point $(6, 2)$?',
      choices: ['$\\frac{18}{289}$', '$\\frac{18}{17}$', '$18$', '$\\frac{78}{17}$'],
      answer: 1,
      solution:
        'Route one, the point-line formula: with $a = 8$, $b = -15$, and $c = 0$, the distance is $\\frac{|8(6) - 15(2)|}{\\sqrt{8^2 + (-15)^2}} = \\frac{|48 - 30|}{17} = \\frac{18}{17}$ ✓. Route two, the area method on a triangle built from the origin: the rope runs through $O(0, 0)$ and through $Q(15, 8)$, since $8(15) - 15(8) = 0$, and $OQ = \\sqrt{15^2 + 8^2} = 17$. The triangle $OQP$ with $P(6, 2)$ has area $\\frac{1}{2}|15(2) - 8(6)| = \\frac{1}{2}|-18| = 9$. With $OQ$ as the base, the height from $P$ is the distance to the rope: $\\frac{1}{2} \\cdot 17 \\cdot h = 9$ gives $h = \\frac{18}{17}$ ✓. (The choice $\\frac{18}{289}$ is FORGETTING THE SQUARE ROOT IN THE DENOMINATOR, dividing by $8^2 + (-15)^2 = 289$ ✗; the choice $18$ is DROPPING THE DENOMINATOR ENTIRELY, leaving the numerator standing as a length ✗; the choice $\\frac{78}{17}$ is ADDING WHERE THE LINE SUBTRACTS, treating $8(6) - 15(2)$ as $48 + 30 = 78$ ✗.)',
    },
    {
      q: 'A zip line is drawn along $4x + 3y = 0$ on a plan of a ropes course. What is the distance from the point $(3, -6)$ to the zip line?',
      choices: ['$\\frac{6}{5}$', '$\\frac{6}{25}$', '$\\frac{6}{7}$', '$6$'],
      answer: 0,
      solution:
        'Route one, the point-line formula: with $a = 4$, $b = 3$, and $c = 0$, the distance is $\\frac{|4(3) + 3(-6)|}{\\sqrt{4^2 + 3^2}} = \\frac{|12 - 18|}{5} = \\frac{6}{5}$ ✓. Route two, the area method on a triangle built from the origin: the zip line runs through $O(0, 0)$ and through $Q(3, -4)$, since $4(3) + 3(-4) = 0$, and $OQ = \\sqrt{3^2 + (-4)^2} = 5$. The triangle $OQP$ with $P(3, -6)$ has area $\\frac{1}{2}|3(-6) - (-4)(3)| = \\frac{1}{2}|-6| = 3$. Reading $OQ$ as the base, the height from $P$ is the distance to the zip line: $\\frac{1}{2} \\cdot 5 \\cdot h = 3$ gives $h = \\frac{6}{5}$ ✓. (The choice $\\frac{6}{25}$ is FORGETTING THE SQUARE ROOT IN THE DENOMINATOR, dividing by $4^2 + 3^2 = 25$ ✗; the choice $\\frac{6}{7}$ is ADDING THE COEFFICIENTS INSTEAD OF TAKING THEIR ROOT, dividing by $4 + 3 = 7$ ✗; the choice $6$ is DROPPING THE DENOMINATOR ENTIRELY, since $|12 - 18|$ by itself is not a distance ✗.)',
    },
  ],
  // s9 — distance between two parallel lines given in standard form.
  [
    {
      q: 'What is the distance between the parallel lines $5x - 12y = 13$ and $5x - 12y = 104$?',
      choices: ['$91$', '$7$', '$\\frac{91}{169}$', '$\\frac{91}{17}$'],
      answer: 1,
      solution:
        'Route one, pick a point and use the point-line formula: the point $(5, 1)$ lies on the first line, since $5(5) - 12(1) = 13$. Its distance to $5x - 12y - 104 = 0$ is $\\frac{|5(5) - 12(1) - 104|}{\\sqrt{5^2 + (-12)^2}} = \\frac{|-91|}{13} = 7$, and because the lines are parallel that one measurement is the gap everywhere ✓. Route two, shrink the vertical gap with a slope triangle: solving for $y$ gives $y = \\frac{5x - 13}{12}$ and $y = \\frac{5x - 104}{12}$, so straight up the page the lines are $\\frac{91}{12}$ apart. A slope of $\\frac{5}{12}$ means a run of $12$ pairs with a rise of $5$ and a slanted step of $13$. That vertical segment is the hypotenuse of a small right triangle similar to the slope triangle, with the perpendicular distance matching the leg of length $12$, so the distance is $\\frac{91}{12} \\cdot \\frac{12}{13} = 7$ ✓. (The choice $91$ is SUBTRACTING THE CONSTANTS AND STOPPING, never dividing by $\\sqrt{a^2 + b^2}$ ✗; the choice $\\frac{91}{169}$ is FORGETTING THE SQUARE ROOT IN THE DENOMINATOR, dividing by $5^2 + (-12)^2 = 169$ ✗; the choice $\\frac{91}{17}$ is ADDING THE COEFFICIENTS INSTEAD OF TAKING THEIR ROOT, dividing by $5 + 12 = 17$ ✗.)',
    },
    {
      q: 'Two parallel curbs are drawn as $8x + 15y = 34$ and $8x + 15y = 136$. How wide is the road between them?',
      choices: ['$102$', '$\\frac{102}{289}$', '$\\frac{102}{23}$', '$6$'],
      answer: 3,
      solution:
        'Route one, pick a point and use the point-line formula: the point $(8, -2)$ lies on the first curb, since $8(8) + 15(-2) = 34$. Its distance to $8x + 15y - 136 = 0$ is $\\frac{|8(8) + 15(-2) - 136|}{\\sqrt{8^2 + 15^2}} = \\frac{|-102|}{17} = 6$, and parallel curbs keep that gap all the way along ✓. Route two, shrink the vertical gap with a slope triangle: solving for $y$ gives $y = \\frac{34 - 8x}{15}$ and $y = \\frac{136 - 8x}{15}$, so straight up the page the curbs are $\\frac{102}{15} = \\frac{34}{5}$ apart. A slope of $-\\frac{8}{15}$ means a run of $15$ pairs with a drop of $8$ and a slanted step of $17$, and the vertical segment is the hypotenuse of a right triangle similar to that one, with the perpendicular distance matching the leg of length $15$. So the width is $\\frac{34}{5} \\cdot \\frac{15}{17} = 6$ ✓. (The choice $102$ is SUBTRACTING THE CONSTANTS AND STOPPING, skipping the division by $\\sqrt{a^2 + b^2}$ ✗; the choice $\\frac{102}{289}$ is FORGETTING THE SQUARE ROOT IN THE DENOMINATOR, dividing by $8^2 + 15^2 = 289$ ✗; the choice $\\frac{102}{23}$ is ADDING THE COEFFICIENTS INSTEAD OF TAKING THEIR ROOT, dividing by $8 + 15 = 23$ ✗.)',
    },
    {
      q: 'How far apart are the parallel lines $4x - 3y = 5$ and $4x - 3y = 15$?',
      choices: ['$10$', '$\\frac{2}{5}$', '$2$', '$\\frac{10}{7}$'],
      answer: 2,
      solution:
        'Route one, pick a point and use the point-line formula: the point $(2, 1)$ lies on the first line, since $4(2) - 3(1) = 5$. Its distance to $4x - 3y - 15 = 0$ is $\\frac{|4(2) - 3(1) - 15|}{\\sqrt{4^2 + (-3)^2}} = \\frac{|-10|}{5} = 2$, and that single measurement settles the whole gap because the lines are parallel ✓. Route two, shrink the vertical gap with a slope triangle: solving for $y$ gives $y = \\frac{4x - 5}{3}$ and $y = \\frac{4x - 15}{3}$, so straight up the page the lines are $\\frac{10}{3}$ apart. A slope of $\\frac{4}{3}$ means a run of $3$ pairs with a rise of $4$ and a slanted step of $5$, and the vertical segment is the hypotenuse of a right triangle similar to that one, with the perpendicular distance matching the leg of length $3$. So the distance is $\\frac{10}{3} \\cdot \\frac{3}{5} = 2$ ✓. (The choice $10$ is SUBTRACTING THE CONSTANTS AND STOPPING, leaving out the division by $\\sqrt{a^2 + b^2}$ ✗; the choice $\\frac{2}{5}$ is FORGETTING THE SQUARE ROOT IN THE DENOMINATOR, dividing by $4^2 + (-3)^2 = 25$ to get $\\frac{10}{25}$ ✗; the choice $\\frac{10}{7}$ is ADDING THE COEFFICIENTS INSTEAD OF TAKING THEIR ROOT, dividing by $4 + 3 = 7$ ✗.)',
    },
  ],
  // s10 — shortest distance from a circle to a line that misses it.
  [
    {
      q: 'What is the shortest distance from the circle $x^2 + y^2 = 16$ to the line $3x + 4y = 45$?',
      fig: {
        view: [-6, -6, 12, 11],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 4 },
          { t: 'line', a: [3, 9], b: [11, 3] },
          { t: 'seg', a: [0, 0], b: [5.4, 7.2], dash: true },
          { t: 'point', p: [0, 0], dx: -10, dy: 12 },
          { t: 'point', p: [5.4, 7.2], dx: 12, dy: 4 },
        ],
      },
      choices: ['$9$', '$13$', '$5$', '$\\frac{41}{5}$'],
      answer: 2,
      solution:
        'Route one, measure from the center and then subtract the radius: the circle has center $(0, 0)$ and radius $4$, and the center sits $\\frac{|3(0) + 4(0) - 45|}{\\sqrt{3^2 + 4^2}} = \\frac{45}{5} = 9$ from the line. Since $9 > 4$, the line misses the circle entirely, and the circle reaches $4$ units along that same perpendicular, so the gap left over is $9 - 4 = 5$ ✓. Route two, name the two nearest points outright: the perpendicular from the center runs in the direction $\\left(\\frac{3}{5}, \\frac{4}{5}\\right)$, so the foot on the line is $9\\left(\\frac{3}{5}, \\frac{4}{5}\\right) = \\left(\\frac{27}{5}, \\frac{36}{5}\\right)$, which checks out since $3\\left(\\frac{27}{5}\\right) + 4\\left(\\frac{36}{5}\\right) = 45$. The same ray leaves the circle at $4\\left(\\frac{3}{5}, \\frac{4}{5}\\right) = \\left(\\frac{12}{5}, \\frac{16}{5}\\right)$. Those two points are $\\sqrt{3^2 + 4^2} = 5$ apart ✓. (The choice $9$ is STOPPING AT THE CENTER, reporting the center-to-line distance and forgetting that the circle itself reaches toward the line ✗; the choice $13$ is ADDING THE RADIUS INSTEAD OF SUBTRACTING IT, which measures to the far side of the circle ✗; the choice $\\frac{41}{5}$ is SUBTRACTING THE RADIUS BEFORE DIVIDING, computing $\\frac{45 - 4}{5}$ instead of $\\frac{45}{5} - 4$ ✗.)',
    },
    {
      q: 'A circular pond is described by $(x - 1)^2 + (y - 2)^2 = 25$, and a straight fence runs along $3x + 4y = 51$. What is the shortest distance from the pond to the fence?',
      fig: {
        view: [-6, -5, 11, 13],
        grid: true,
        elems: [
          { t: 'circle', c: [1, 2], r: 5 },
          { t: 'line', a: [9, 6], b: [1, 12] },
          { t: 'seg', a: [1, 2], b: [5.8, 8.4], dash: true },
          { t: 'point', p: [1, 2], dx: -10, dy: 12 },
          { t: 'point', p: [5.8, 8.4], dx: 12, dy: 4 },
        ],
      },
      choices: ['$3$', '$8$', '$13$', '$\\frac{26}{5}$'],
      answer: 0,
      solution:
        'Route one, measure from the center and then subtract the radius: the pond has center $(1, 2)$ and radius $5$, and the center lies $\\frac{|3(1) + 4(2) - 51|}{\\sqrt{3^2 + 4^2}} = \\frac{|-40|}{5} = 8$ from the fence. Since $8 > 5$, the fence clears the pond, and the water reaches $5$ units along that perpendicular, leaving $8 - 5 = 3$ ✓. Route two, name the two nearest points outright: the perpendicular from the center runs in the direction $\\left(\\frac{3}{5}, \\frac{4}{5}\\right)$, so the foot on the fence is $(1, 2) + 8\\left(\\frac{3}{5}, \\frac{4}{5}\\right) = \\left(\\frac{29}{5}, \\frac{42}{5}\\right)$, and indeed $3\\left(\\frac{29}{5}\\right) + 4\\left(\\frac{42}{5}\\right) = 51$. The same ray leaves the pond at $(1, 2) + 5\\left(\\frac{3}{5}, \\frac{4}{5}\\right) = (4, 6)$. Those two points are $\\sqrt{\\left(\\frac{9}{5}\\right)^2 + \\left(\\frac{12}{5}\\right)^2} = \\frac{15}{5} = 3$ apart ✓. (The choice $8$ is STOPPING AT THE CENTER, reporting the center-to-fence distance and ignoring the water in between ✗; the choice $13$ is ADDING THE RADIUS INSTEAD OF SUBTRACTING IT, reaching the far bank rather than the near one ✗; the choice $\\frac{26}{5}$ is MEASURING FROM THE ORIGIN INSTEAD OF FROM THE CENTER, computing $\\frac{51}{5} - 5$ as though the pond were centered at $(0, 0)$ ✗.)',
    },
    {
      q: 'How close does the circle $x^2 + y^2 = 36$ come to the line $5x + 12y = 91$?',
      fig: {
        view: [-8, -8, 12, 10],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 6 },
          { t: 'line', a: [-1, 8], b: [11, 3] },
          { t: 'seg', a: [0, 0], b: [2.69, 6.46], dash: true },
          { t: 'point', p: [0, 0], dx: -10, dy: 12 },
          { t: 'point', p: [2.69, 6.46], dx: 12, dy: 4 },
        ],
      },
      choices: ['$7$', '$13$', '$\\frac{85}{13}$', '$1$'],
      answer: 3,
      solution:
        'Route one, measure from the center and then subtract the radius: the circle has center $(0, 0)$ and radius $6$, and the center sits $\\frac{|5(0) + 12(0) - 91|}{\\sqrt{5^2 + 12^2}} = \\frac{91}{13} = 7$ from the line. Since $7 > 6$, the line stays clear of the circle, and the circle reaches $6$ units along that perpendicular, so only $7 - 6 = 1$ remains ✓. Route two, name the two nearest points outright: the perpendicular from the center runs in the direction $\\left(\\frac{5}{13}, \\frac{12}{13}\\right)$, so the foot on the line is $7\\left(\\frac{5}{13}, \\frac{12}{13}\\right) = \\left(\\frac{35}{13}, \\frac{84}{13}\\right)$, and $5\\left(\\frac{35}{13}\\right) + 12\\left(\\frac{84}{13}\\right) = \\frac{1183}{13} = 91$ confirms it. The same ray leaves the circle at $6\\left(\\frac{5}{13}, \\frac{12}{13}\\right) = \\left(\\frac{30}{13}, \\frac{72}{13}\\right)$. Those two points are $\\sqrt{\\left(\\frac{5}{13}\\right)^2 + \\left(\\frac{12}{13}\\right)^2} = \\frac{13}{13} = 1$ apart ✓. (The choice $7$ is STOPPING AT THE CENTER, reporting the center-to-line distance rather than the circle-to-line one ✗; the choice $13$ is ADDING THE RADIUS INSTEAD OF SUBTRACTING IT, measuring to the far edge of the circle ✗; the choice $\\frac{85}{13}$ is SUBTRACTING THE RADIUS BEFORE DIVIDING, computing $\\frac{91 - 6}{13}$ instead of $\\frac{91}{13} - 6$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 17,
  sections: { '17.5': s175 },
}
