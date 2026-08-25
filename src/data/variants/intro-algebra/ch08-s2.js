// Introduction to Algebra chapter 8 — variations for sections 8.3 and 8.4. All
// problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every slope was computed as rise over run with BOTH subtractions taken in
//    the same order, and every key is then checked FORWARD through the story:
//    start at one named point, apply the slope across the run, and land exactly
//    on the other named point.
//  - Every equation answer is checked by substituting a point that was NOT used
//    to build it, so a lucky algebra slip cannot survive.
//  - Two traps are deliberately stocked in almost every item, and the solution
//    names both: the SIGN error (dropping a minus, or flipping the order of one
//    subtraction only) and the RECIPROCAL error (run over rise). They are always
//    checked against each other so the two never land on the same value.
//  - Other distractors are named mistakes too — stopping at the rise, treating a
//    point's height as the y-intercept, mistaking the constant of a horizontal
//    line for its slope, confusing "zero" with "undefined", counting hours on
//    fingers, or repeating a jump when the run has changed length.
//  - No two choices in an item share a VALUE: the fractions, the equations and
//    the coordinate pairs were compared as numbers, not as strings.
//  - Story sanity: every rate points the direction the words say, every clock
//    time lands on the hour, and every figure's marked points are lattice points
//    that really sit on the drawn line.

const s83 = [
  // p1 — slope of a line through the origin
  [
    {
      q: 'What is the slope of the line through $(0, 0)$ and $(3, 12)$?',
      choices: ['$\\frac{1}{4}$', '$3$', '$4$', '$12$'],
      answer: 2,
      solution:
        'Rise over run: $\\frac{12 - 0}{3 - 0} = \\frac{12}{3} = 4$. Check it forward: starting at $(0, 0)$ and climbing $4$ for every step right, three steps land on $(3, 12)$. ✓ (The choice $\\frac{1}{4}$ turns the fraction upside down, run over rise; the choice $12$ stops at the rise and never divides; the choice $3$ reports the run instead.)',
    },
    {
      q: 'The line through $(0, 0)$ and $(5, k)$ has slope $3$. What is $k$?',
      choices: ['$15$', '$8$', '$\\frac{5}{3}$', '$3$'],
      answer: 0,
      solution:
        'The slope is $\\frac{k - 0}{5 - 0} = \\frac{k}{5}$, so $\\frac{k}{5} = 3$ and $k = 15$. Check it forward: from $(0, 0)$ to $(5, 15)$ the rise is $15$ and the run is $5$, and $\\frac{15}{5} = 3$. ✓ (The choice $\\frac{5}{3}$ writes the slope upside down as $\\frac{5}{k} = 3$; the choice $8$ ADDS $5 + 3$, but a slope is a ratio, never a sum; the choice $3$ just repeats the slope.)',
    },
    {
      q: 'What is the slope of the line through $(0, 0)$ and $(6, -9)$?',
      choices: ['$\\frac{3}{2}$', '$-\\frac{3}{2}$', '$-\\frac{2}{3}$', '$\\frac{2}{3}$'],
      answer: 1,
      solution:
        'Rise: $-9 - 0 = -9$. Run: $6 - 0 = 6$. Slope $= \\frac{-9}{6} = -\\frac{3}{2}$. Check it forward: from the origin, a run of $6$ changes the height by $6 \\times \\left(-\\frac{3}{2}\\right) = -9$, landing exactly on $(6, -9)$. ✓ (The choice $\\frac{3}{2}$ drops the minus sign, but this line FALLS as it moves right; the choice $-\\frac{2}{3}$ divides run by rise; the choice $\\frac{2}{3}$ makes both slips at once.)',
    },
  ],
  // p2 — slope from two points
  [
    {
      q: 'What is the slope of the line through $(3, 4)$ and $(8, 19)$?',
      choices: ['$-3$', '$\\frac{1}{3}$', '$15$', '$3$'],
      answer: 3,
      solution:
        'Rise: $19 - 4 = 15$. Run: $8 - 3 = 5$. Slope $= \\frac{15}{5} = 3$. Check it forward: from $(3, 4)$, five steps right at $3$ up per step reaches $(8, 4 + 15) = (8, 19)$. ✓ (The choice $-3$ subtracts in opposite orders on top and bottom, $\\frac{19 - 4}{3 - 8}$; the choice $\\frac{1}{3}$ is run over rise; the choice $15$ stops at the rise.)',
    },
    {
      q: 'What is the slope of the line through $(-2, 1)$ and $(4, 10)$?',
      choices: ['$\\frac{2}{3}$', '$\\frac{3}{2}$', '$-\\frac{3}{2}$', '$\\frac{9}{2}$'],
      answer: 1,
      solution:
        'Rise: $10 - 1 = 9$. Run: $4 - (-2) = 6$. Slope $= \\frac{9}{6} = \\frac{3}{2}$. Check it forward: from $(-2, 1)$, a run of $6$ lifts the line $6 \\times \\frac{3}{2} = 9$, landing on $(4, 10)$. ✓ (The choice $\\frac{9}{2}$ takes the run to be $4 - 2 = 2$, forgetting that subtracting $-2$ ADDS; the choice $\\frac{2}{3}$ is run over rise; the choice $-\\frac{3}{2}$ flips the subtraction order in the denominator only.)',
    },
    {
      q: 'A line passes through $(1, -3)$ and $(5, 5)$. What is its slope?',
      choices: ['$\\frac{1}{2}$', '$-2$', '$2$', '$8$'],
      answer: 2,
      solution:
        'Rise: $5 - (-3) = 8$. Run: $5 - 1 = 4$. Slope $= \\frac{8}{4} = 2$. Check it forward: from $(1, -3)$, four steps right at $2$ up per step reaches $(5, 5)$. ✓ (The choice $\\frac{1}{2}$ divides run by rise; the choice $-2$ comes from subtracting in opposite orders, $\\frac{-3 - 5}{5 - 1}$; the choice $8$ reports the rise alone.)',
    },
  ],
  // p3 — the slope of a horizontal line is zero
  [
    {
      q: 'A line passes through $(-4, 7)$ and $(9, 7)$. What is its slope?',
      choices: ['$0$', '$7$', '$13$', 'Undefined'],
      answer: 0,
      solution:
        'The two heights are equal, so the rise is $7 - 7 = 0$ while the run is $9 - (-4) = 13$. Slope $= \\frac{0}{13} = 0$. Check it forward: a slope of $0$ means the line never climbs, and sure enough both points sit at height $7$. ✓ (The choice "Undefined" divides the other way, $\\frac{13}{0}$, which belongs to a VERTICAL line; the choice $13$ reports the run; the choice $7$ reports the shared height.)',
    },
    {
      q: 'Which of these lines has slope $0$?',
      choices: ['$x = 6$', '$y = 6x$', '$y = x$', '$y = 6$'],
      answer: 3,
      solution:
        'A slope of $0$ means a flat, horizontal line, and $y = 6$ holds every point at height $6$ no matter what $x$ does. Check it forward with two of its points, $(0, 6)$ and $(10, 6)$: $\\frac{6 - 6}{10 - 0} = 0$. ✓ (The choice $x = 6$ is the vertical line, whose slope is UNDEFINED rather than zero — the classic swap; the choice $y = 6x$ has slope $6$, reading the constant as a coefficient; the choice $y = x$ has slope $1$.)',
    },
    {
      q: 'What is the slope of the line $y = -5$?',
      choices: ['Undefined', '$-5$', '$0$', '$-\\frac{1}{5}$'],
      answer: 2,
      solution:
        'The equation pins the height at $-5$ and lets $x$ roam, so the graph is horizontal. Check it forward with two of its points, $(1, -5)$ and $(7, -5)$: the rise is $0$, so the slope is $\\frac{0}{6} = 0$. ✓ (The choice "Undefined" confuses this with a vertical line such as $x = -5$; the choice $-5$ mistakes the constant for a slope; the choice $-\\frac{1}{5}$ takes a reciprocal of that constant.)',
    },
  ],
  // p4 — negative slope, with negative coordinates in the way
  [
    {
      q: 'What is the slope of the line through $(-2, 5)$ and $(4, -7)$?',
      choices: ['$2$', '$-\\frac{1}{2}$', '$-12$', '$-2$'],
      answer: 3,
      solution:
        'Rise: $-7 - 5 = -12$. Run: $4 - (-2) = 6$. Slope $= \\frac{-12}{6} = -2$. Check it forward: from $(-2, 5)$, a run of $6$ changes the height by $6 \\times (-2) = -12$, landing on $(4, -7)$. ✓ (The choice $2$ drops the minus, but the line clearly falls; the choice $-\\frac{1}{2}$ divides run by rise; the choice $-12$ stops at the rise.)',
    },
    {
      q: 'What is the slope of the line through $(-5, -2)$ and $(1, -8)$?',
      choices: ['$1$', '$-1$', '$\\frac{3}{2}$', '$-\\frac{5}{3}$'],
      answer: 1,
      solution:
        'Rise: $-8 - (-2) = -6$. Run: $1 - (-5) = 6$. Slope $= \\frac{-6}{6} = -1$. Check it forward: from $(-5, -2)$, six steps right drop the line $6$, landing on $(1, -8)$. ✓ (The choice $\\frac{3}{2}$ takes the run to be $1 - 5 = -4$, forgetting that subtracting $-5$ adds; the choice $-\\frac{5}{3}$ makes the same slip on top, using $-8 - 2 = -10$ for the rise; the choice $1$ loses the sign entirely.)',
    },
    {
      q: 'What is the slope of the line through $(-6, 3)$ and $(2, -1)$?',
      choices: ['$-\\frac{1}{2}$', '$\\frac{1}{2}$', '$-2$', '$1$'],
      answer: 0,
      solution:
        'Rise: $-1 - 3 = -4$. Run: $2 - (-6) = 8$. Slope $= \\frac{-4}{8} = -\\frac{1}{2}$. Check it forward: from $(-6, 3)$, a run of $8$ changes the height by $8 \\times \\left(-\\frac{1}{2}\\right) = -4$, landing on $(2, -1)$. ✓ (The choice $\\frac{1}{2}$ drops the minus sign; the choice $-2$ divides run by rise; the choice $1$ uses a run of $2 - 6 = -4$, mishandling the negative coordinate.)',
    },
  ],
  // p5 — the slope of a vertical line is undefined
  [
    {
      q: 'What is the slope of the line $x = -7$?',
      choices: ['$0$', '$-7$', 'Undefined', '$-\\frac{1}{7}$'],
      answer: 2,
      solution:
        'Every point on this line has $x = -7$, so any two of them — say $(-7, 1)$ and $(-7, 6)$ — give a run of $-7 - (-7) = 0$. Check it forward: the slope would have to be $\\frac{5}{0}$, and no number times $0$ gives $5$, so the slope is undefined. ✓ (The choice $0$ belongs to a HORIZONTAL line, where the RISE is zero — the classic swap; the choice $-7$ mistakes the constant for a slope; the choice $-\\frac{1}{7}$ takes a reciprocal of that constant.)',
    },
    {
      q: 'A line passes through $(5, -2)$ and $(5, 9)$. What is its slope?',
      choices: ['$0$', 'Undefined', '$11$', '$\\frac{11}{5}$'],
      answer: 1,
      solution:
        'The $x$-coordinates match, so the run is $5 - 5 = 0$ while the rise is $9 - (-2) = 11$. Check it forward: the slope would have to be $\\frac{11}{0}$, which no number equals, so the slope is undefined and the line is vertical. ✓ (The choice $0$ hands back the run itself, confusing a zero DENOMINATOR with a zero answer; the choice $11$ reports the rise; the choice $\\frac{11}{5}$ uses the shared coordinate $5$ as the run, but the run is the DIFFERENCE of the $x$-coordinates.)',
    },
    {
      q: 'Which of these lines has an undefined slope?',
      choices: ['$x = 2$', '$y = 2$', '$y = 2x$', '$x + y = 2$'],
      answer: 0,
      solution:
        'A slope is undefined only when the run is $0$, which happens for a vertical line. Check it forward: $x = 2$ contains $(2, 0)$ and $(2, 5)$, and the run between them is $2 - 2 = 0$. ✓ (The choice $y = 2$ is horizontal with slope $0$, and zero is a perfectly good number, so that slope IS defined; the choice $y = 2x$ has slope $2$; the choice $x + y = 2$ rearranges to $y = -x + 2$, slope $-1$.)',
    },
  ],
  // p6 — read the slope off a graph
  [
    {
      q: 'The line below passes through the two marked lattice points. What is its slope?',
      fig: {
        view: [-5, -3, 5, 5],
        grid: true,
        elems: [
          { t: 'line', a: [-3, 1], b: [3, 3] },
          { t: 'point', p: [-3, 1], label: '(-3, 1)', dx: -8, dy: 18 },
          { t: 'point', p: [3, 3], label: '(3, 3)', dx: 8, dy: -8 },
        ],
      },
      choices: ['$3$', '$-\\frac{1}{3}$', '$2$', '$\\frac{1}{3}$'],
      answer: 3,
      solution:
        'Use the two marked lattice points $(-3, 1)$ and $(3, 3)$. Rise: $3 - 1 = 2$. Run: $3 - (-3) = 6$. Slope $= \\frac{2}{6} = \\frac{1}{3}$. Check it forward: from $(-3, 1)$, a run of $6$ lifts the line $6 \\times \\frac{1}{3} = 2$, landing on $(3, 3)$. ✓ The line climbs very gently, so a small positive slope fits the picture. (The choice $3$ is run over rise; the choice $-\\frac{1}{3}$ flips the subtraction order on top only and would make the line fall; the choice $2$ stops at the rise.)',
    },
    {
      q: 'What is the slope of the line in the graph below?',
      fig: {
        view: [-4, -4, 5, 5],
        grid: true,
        elems: [
          { t: 'line', a: [-1, 4], b: [3, -1] },
          { t: 'point', p: [-1, 4], label: '(-1, 4)', dx: -10, dy: -10 },
          { t: 'point', p: [3, -1], label: '(3, -1)', dx: 10, dy: 14 },
        ],
      },
      choices: ['$\\frac{5}{4}$', '$-\\frac{4}{5}$', '$-\\frac{5}{4}$', '$-5$'],
      answer: 2,
      solution:
        'Use the marked points $(-1, 4)$ and $(3, -1)$. Rise: $-1 - 4 = -5$. Run: $3 - (-1) = 4$. Slope $= -\\frac{5}{4}$. Check it forward: from $(-1, 4)$, a run of $4$ changes the height by $4 \\times \\left(-\\frac{5}{4}\\right) = -5$, landing on $(3, -1)$. ✓ The line falls steeply, so the slope should be negative and bigger than $1$ in size. (The choice $\\frac{5}{4}$ drops the minus sign; the choice $-\\frac{4}{5}$ divides run by rise; the choice $-5$ stops at the rise.)',
    },
    {
      q: 'What is the slope of the line drawn here?',
      fig: {
        view: [-4, -4, 4, 4],
        grid: true,
        elems: [
          { t: 'line', a: [-2, -3], b: [1, 3] },
          { t: 'point', p: [-2, -3], label: '(-2, -3)', dx: 8, dy: 14 },
          { t: 'point', p: [1, 3], label: '(1, 3)', dx: 10, dy: -6 },
        ],
      },
      choices: ['$\\frac{1}{2}$', '$2$', '$-2$', '$6$'],
      answer: 1,
      solution:
        'Use the marked points $(-2, -3)$ and $(1, 3)$. Rise: $3 - (-3) = 6$. Run: $1 - (-2) = 3$. Slope $= \\frac{6}{3} = 2$. Check it forward: from $(-2, -3)$, three steps right at $2$ up per step reaches $(1, 3)$. ✓ (The choice $\\frac{1}{2}$ is run over rise; the choice $-2$ flips the subtraction order on top only; the choice $6$ stops at the rise.)',
    },
  ],
  // p7 — slope as a rate of change in a story
  [
    {
      q: 'A bamboo shoot was $18$ cm tall on day $2$ and $46$ cm tall on day $9$, growing at a steady rate. How fast did it grow?',
      choices: ['$4$ cm per day', '$7$ cm per day', '$28$ cm per day', '$\\frac{1}{4}$ cm per day'],
      answer: 0,
      solution:
        'A steady growth rate is a slope: $\\frac{46 - 18}{9 - 2} = \\frac{28}{7} = 4$ cm per day. Check it forward: seven days at $4$ cm per day adds $28$ cm, and $18 + 28 = 46$. ✓ (The choice $28$ is the TOTAL growth, not the rate; the choice $7$ is the number of days; the choice $\\frac{1}{4}$ divides days by centimetres, answering "days per centimetre".)',
    },
    {
      q: 'A snow bank was $60$ cm deep at 8 am and had melted steadily to $45$ cm deep by 11 am. At the same rate, how deep will it be at 1 pm?',
      choices: ['$40$ cm', '$55$ cm', '$35$ cm', '$30$ cm'],
      answer: 2,
      solution:
        'The rate is a slope: $\\frac{45 - 60}{3} = -5$ cm per hour. From 11 am to 1 pm is $2$ more hours, so the bank loses another $10$ cm: $45 - 10 = 35$ cm. Check it forward from the start: 8 am to 1 pm is $5$ hours, and $60 - 5 \\times 5 = 35$. ✓ (The choice $40$ counts only one extra hour; the choice $30$ repeats the whole $15$ cm drop again, ignoring that the second stretch is shorter; the choice $55$ ADDS the melt instead of subtracting it, which would have the snow growing.)',
    },
    {
      q: 'A tank held $340$ litres at 1 pm and $190$ litres at 6 pm, draining steadily. What is the slope of its volume-versus-time graph?',
      choices: [
        '$30$ litres per hour',
        '$-150$ litres per hour',
        '$-\\frac{1}{30}$ litre per hour',
        '$-30$ litres per hour',
      ],
      answer: 3,
      solution:
        'Slope is the change in volume over the change in time: $\\frac{190 - 340}{6 - 1} = \\frac{-150}{5} = -30$ litres per hour. Check it forward: five hours at $-30$ litres per hour is $-150$ litres, and $340 - 150 = 190$. ✓ The minus sign says the tank is emptying. (The choice $30$ drops that sign; the choice $-150$ is the total change across the whole five hours, not the rate; the choice $-\\frac{1}{30}$ divides hours by litres.)',
    },
  ],
  // p8 — a missing coordinate, recovered from the slope
  [
    {
      q: 'The line through $(2, k)$ and $(6, 20)$ has slope $3$. What is $k$?',
      choices: ['$32$', '$8$', '$17$', '$12$'],
      answer: 1,
      solution:
        'Set up the slope: $\\frac{20 - k}{6 - 2} = 3$, so $20 - k = 12$ and $k = 8$. Check it forward: from $(2, 8)$ to $(6, 20)$ the rise is $12$ and the run is $4$, and $\\frac{12}{4} = 3$. ✓ (The choice $32$ adds the rise instead of subtracting it, $20 + 12$; the choice $17$ subtracts the SLOPE, $20 - 3$, instead of the whole rise; the choice $12$ stops at the rise itself.)',
    },
    {
      q: 'The line through $(h, 5)$ and $(9, 17)$ has slope $4$. What is $h$?',
      choices: ['$6$', '$12$', '$3$', '$5$'],
      answer: 0,
      solution:
        'The rise is $17 - 5 = 12$, so the run must satisfy $\\frac{12}{9 - h} = 4$, giving $9 - h = 3$ and $h = 6$. Check it forward: from $(6, 5)$ to $(9, 17)$ the rise is $12$ and the run is $3$, and $\\frac{12}{3} = 4$. ✓ (The choice $12$ sets the run equal to the RISE, $9 - h = 12$; the choice $3$ stops at the run without turning it back into an $x$-coordinate; the choice $5$ subtracts the slope from $9$.)',
    },
    {
      q: 'The line through $(-1, 8)$ and $(3, k)$ has slope $-2$. What is $k$?',
      choices: ['$16$', '$6$', '$-8$', '$0$'],
      answer: 3,
      solution:
        'The run is $3 - (-1) = 4$, so the rise must be $4 \\times (-2) = -8$, giving $k = 8 - 8 = 0$. Check it forward: from $(-1, 8)$ to $(3, 0)$ the slope is $\\frac{0 - 8}{4} = -2$. ✓ (The choice $16$ adds the rise instead of subtracting it, ignoring the minus in the slope; the choice $6$ subtracts the slope, $8 - 2$; the choice $-8$ reports the rise instead of the height.)',
    },
  ],
  // p9 — a steady rate, run out to a time or a value
  [
    {
      q: 'A pool holds $500$ litres at 10 am, and a hose adds water steadily at $125$ litres per hour. At what time will the pool hold $1250$ litres?',
      choices: ['4 am', '2 pm', '4 pm', '8 pm'],
      answer: 2,
      solution:
        'The pool still needs $1250 - 500 = 750$ litres, and at $125$ litres per hour that takes $\\frac{750}{125} = 6$ hours. Six hours after 10 am is 4 pm. Check it forward: $500 + 6 \\times 125 = 500 + 750 = 1250$. ✓ (The choice 8 pm divides the whole $1250$ by $125$, forgetting the $500$ litres already in the pool; the choice 2 pm divides the STARTING amount $500$ by $125$; the choice 4 am counts the six hours backwards from 10 am.)',
    },
    {
      q: 'At 7 am a reservoir holds $900$ kilolitres and is drawn down steadily at $65$ kilolitres per hour. How much does it hold at 11 am?',
      choices: ['$640$ kL', '$1160$ kL', '$835$ kL', '$575$ kL'],
      answer: 0,
      solution:
        'From 7 am to 11 am is $4$ hours, so the reservoir loses $4 \\times 65 = 260$ kL: $900 - 260 = 640$ kL. Check it forward: $640 + 260 = 900$, exactly the level it started at. ✓ (The choice $1160$ ADDS the loss, which would have a draining reservoir filling up; the choice $835$ counts only one hour; the choice $575$ counts $5$ hours by ticking off 7, 8, 9, 10 and 11 on five fingers — but the gap from 7 to 11 is $4$ hours.)',
    },
    {
      q: 'A hiker descends at a steady $120$ metres of altitude per hour. At 2 pm she is at $1450$ m. What was her altitude at 10 am?',
      choices: ['$970$ m', '$1930$ m', '$1570$ m', '$2050$ m'],
      answer: 1,
      solution:
        'From 10 am to 2 pm is $4$ hours, and she has dropped $4 \\times 120 = 480$ m, so she began $480$ m HIGHER: $1450 + 480 = 1930$ m. Check it forward: starting at $1930$ m and losing $480$ m puts her at $1450$ m at 2 pm. ✓ (The choice $970$ subtracts instead of adding, running the descent the wrong way through time; the choice $1570$ counts only one hour; the choice $2050$ counts $5$ hours instead of $4$.)',
    },
  ],
  // p10 — three points on one line
  [
    {
      q: 'The points $(2, 1)$, $(5, 7)$, and $(8, k)$ all lie on one line. What is $k$?',
      choices: ['$9$', '$14$', '$10$', '$13$'],
      answer: 3,
      solution:
        'From $(2, 1)$ to $(5, 7)$ the slope is $\\frac{7 - 1}{5 - 2} = \\frac{6}{3} = 2$. Points on one line share that slope, so another run of $3$ lifts the line $6$: $k = 7 + 6 = 13$. Check it forward with the outer pair: $\\frac{13 - 1}{8 - 2} = \\frac{12}{6} = 2$. ✓ (The choice $9$ adds the SLOPE $2$ instead of the rise $6$; the choice $10$ adds the run $3$; the choice $14$ doubles $7$, treating the pattern as multiplication.)',
    },
    {
      q: 'The points $(-1, 3)$, $(2, 9)$, and $(6, k)$ all lie on one line. What is $k$?',
      choices: ['$15$', '$17$', '$11$', '$18$'],
      answer: 1,
      solution:
        'Slope from the first two points: $\\frac{9 - 3}{2 - (-1)} = \\frac{6}{3} = 2$. The last gap is wider — from $x = 2$ to $x = 6$ is a run of $4$ — so the rise is $4 \\times 2 = 8$ and $k = 9 + 8 = 17$. Check it forward with the outer pair: $\\frac{17 - 3}{6 - (-1)} = \\frac{14}{7} = 2$. ✓ (The choice $15$ repeats the earlier jump of $6$ without noticing the run grew from $3$ to $4$; the choice $11$ adds the slope $2$; the choice $18$ doubles $9$.)',
    },
    {
      q: 'The points $(1, -2)$, $(4, 4)$, and $(h, 10)$ all lie on one line. What is $h$?',
      choices: ['$6$', '$10$', '$7$', '$16$'],
      answer: 2,
      solution:
        'Slope from the first two points: $\\frac{4 - (-2)}{4 - 1} = \\frac{6}{3} = 2$. Climbing from $y = 4$ to $y = 10$ is a rise of $6$, which needs a run of $\\frac{6}{2} = 3$, so $h = 4 + 3 = 7$. Check it forward: $\\frac{10 - (-2)}{7 - 1} = \\frac{12}{6} = 2$. ✓ (The choice $10$ adds the rise $6$ to the $x$-coordinate instead of the run; the choice $16$ MULTIPLIES the rise by the slope, $4 + 6 \\times 2$, when a run comes from DIVIDING by the slope; the choice $6$ adds the slope $2$.)',
    },
  ],
]

const s84 = [
  // p1 — build y = mx + b from a slope and a y-intercept
  [
    {
      q: 'Which equation describes the line with slope $6$ and $y$-intercept $(0, -1)$?',
      choices: ['$y = 6x - 1$', '$y = -x + 6$', '$y = 6x + 1$', '$y = -6x - 1$'],
      answer: 0,
      solution:
        'In $y = mx + b$ the slope multiplies $x$ and the $y$-intercept is the constant, so $m = 6$ and $b = -1$ give $y = 6x - 1$. Check it forward: at $x = 0$, $y = -1$ ✓, and at $x = 1$, $y = 5$ — a rise of $6$ for one step right. ✓ (The choice $y = -x + 6$ swaps the two roles; the choice $y = 6x + 1$ loses the minus on the intercept; the choice $y = -6x - 1$ loses the sign of the slope, giving a line that falls instead of climbing.)',
    },
    {
      q: 'The line $y = -4x + 7$ has which slope and $y$-intercept?',
      choices: [
        'Slope $7$, $y$-intercept $(0, -4)$',
        'Slope $4$, $y$-intercept $(0, 7)$',
        'Slope $-4$, $y$-intercept $(0, 7)$',
        'Slope $-4$, $y$-intercept $(0, -7)$',
      ],
      answer: 2,
      solution:
        'Compare with $y = mx + b$: the coefficient of $x$ is the slope, $m = -4$, and the constant is the intercept, $b = 7$. Check it forward: at $x = 0$, $y = 7$, so $(0, 7)$ is on the line ✓, and at $x = 1$, $y = 3$ — down $4$ for one step right, matching $m = -4$. ✓ (The first choice swaps the two numbers; the choice with slope $4$ drops the minus sign; the last choice flips the sign of the intercept.)',
    },
    {
      q: 'A line has slope $\\frac{2}{3}$ and $y$-intercept $(0, -4)$. Which equation describes it?',
      choices: [
        '$y = \\frac{3}{2}x - 4$',
        '$y = -4x + \\frac{2}{3}$',
        '$y = \\frac{2}{3}x + 4$',
        '$y = \\frac{2}{3}x - 4$',
      ],
      answer: 3,
      solution:
        'Put the slope in front of $x$ and the intercept at the end: $y = \\frac{2}{3}x - 4$. Check it forward: at $x = 0$, $y = -4$ ✓, and at $x = 3$, $y = 2 - 4 = -2$ — a rise of $2$ over a run of $3$. ✓ (The choice $y = \\frac{3}{2}x - 4$ turns the slope upside down; the choice $y = -4x + \\frac{2}{3}$ swaps the two roles; the choice $y = \\frac{2}{3}x + 4$ loses the minus on the intercept.)',
    },
  ],
  // p2 — a slope and a point that sits on the y-axis
  [
    {
      q: 'A line has slope $-5$ and passes through $(0, -2)$. What is its equation?',
      choices: ['$y = 5x - 2$', '$y = -5x - 2$', '$y = -5x + 2$', '$y = -2x - 5$'],
      answer: 1,
      solution:
        'The point $(0, -2)$ sits on the $y$-axis, so it IS the $y$-intercept: $b = -2$, and with $m = -5$ the equation is $y = -5x - 2$. Check it forward: at $x = 0$, $y = -2$ ✓, and at $x = 1$, $y = -7$ — down $5$ for one step right. ✓ (The choice $y = 5x - 2$ drops the minus on the slope; the choice $y = -5x + 2$ drops the minus on the intercept and so misses the given point; the choice $y = -2x - 5$ swaps the two roles.)',
    },
    {
      q: 'A line crosses the $y$-axis at $(0, 9)$ and falls $2$ units for every $1$ unit to the right. What is its equation?',
      choices: ['$y = 2x + 9$', '$y = 9x - 2$', '$y = -2x - 9$', '$y = -2x + 9$'],
      answer: 3,
      solution:
        'Falling $2$ for each step right is a rise of $-2$ over a run of $1$, so $m = -2$; the crossing point gives $b = 9$. The equation is $y = -2x + 9$. Check it forward: at $x = 0$, $y = 9$ ✓, and at $x = 1$, $y = 7$ — two units lower, exactly as described. ✓ (The choice $y = 2x + 9$ ignores the word "falls" and climbs instead; the choice $y = -2x - 9$ flips the sign of the intercept; the choice $y = 9x - 2$ swaps the two roles.)',
    },
    {
      q: 'A line passes through the origin with slope $\\frac{3}{4}$. What is its equation?',
      choices: ['$y = \\frac{3}{4}x$', '$y = \\frac{4}{3}x$', '$y = x + \\frac{3}{4}$', '$y = \\frac{3}{4}$'],
      answer: 0,
      solution:
        'The origin $(0, 0)$ is the $y$-intercept, so $b = 0$ and the constant term disappears: $y = \\frac{3}{4}x$. Check it forward: at $x = 0$, $y = 0$ ✓, and at $x = 4$, $y = 3$ — up $3$ for a run of $4$. ✓ (The choice $y = \\frac{4}{3}x$ turns the slope upside down; the choice $y = x + \\frac{3}{4}$ puts the slope where the intercept belongs; the choice $y = \\frac{3}{4}$ has no $x$ at all and is a horizontal line.)',
    },
  ],
  // p3 — the equation of a horizontal line
  [
    {
      q: 'What is the equation of the horizontal line through $(-3, 8)$?',
      choices: ['$x = -3$', '$x = 8$', '$y = 8$', '$y = -3$'],
      answer: 2,
      solution:
        'A horizontal line keeps the same height everywhere, so it fixes $y$ at the height of the given point: $y = 8$. Check it forward: $(-3, 8)$ satisfies it, and so does $(100, 8)$ — every point at height $8$, which is exactly a horizontal line. ✓ (The choice $x = -3$ is the VERTICAL line through that point; the choice $y = -3$ takes the wrong coordinate; the choice $x = 8$ has the right number but the wrong variable.)',
    },
    {
      q: 'A line has slope $0$ and passes through $(6, -4)$. What is its equation?',
      choices: ['$y = 6$', '$y = -4$', '$x = 6$', '$y = 0$'],
      answer: 1,
      solution:
        'A slope of $0$ makes the $mx$ term vanish, leaving $y = b$, and the line must contain $(6, -4)$, so $b = -4$ and the equation is $y = -4$. Check it forward: $y = 0 \\cdot x + (-4) = -4$ for every $x$, and at $x = 6$ that is the given point. ✓ (The choice $y = 6$ uses the $x$-coordinate as the height; the choice $x = 6$ is the vertical line through the point, whose slope is undefined rather than $0$; the choice $y = 0$ mistakes the SLOPE for the intercept.)',
    },
    {
      q: 'Which of these points lies on the line $y = -6$?',
      choices: ['$(4, -6)$', '$(-6, 4)$', '$(-6, 0)$', '$(0, 6)$'],
      answer: 0,
      solution:
        'The equation says nothing about $x$ and everything about $y$: a point is on the line exactly when its SECOND coordinate is $-6$. Check it forward: $(4, -6)$ has $y = -6$ ✓, and no other choice does. (The choice $(-6, 4)$ has the coordinates swapped; the choice $(-6, 0)$ belongs to the vertical line $x = -6$; the choice $(0, 6)$ loses the minus sign.)',
    },
  ],
  // p4 — point-slope with a point off both axes
  [
    {
      q: 'A line has slope $3$ and passes through $(2, 11)$. What is its equation?',
      choices: ['$y = 3x + 11$', '$y = 3x + 17$', '$y = 3x + 9$', '$y = 3x + 5$'],
      answer: 3,
      solution:
        'Point-slope form: $y - 11 = 3(x - 2)$, so $y - 11 = 3x - 6$ and $y = 3x + 5$. Check it forward: at $x = 2$, $y = 6 + 5 = 11$. ✓ (The choice $y = 3x + 11$ treats $11$ as the $y$-intercept, but $11$ is the height at $x = 2$, not at $x = 0$; the choice $y = 3x + 17$ distributes $3(x + 2)$, flipping the sign inside the parentheses; the choice $y = 3x + 9$ subtracts the $x$-coordinate $2$ instead of $3 \\times 2 = 6$.)',
    },
    {
      q: 'A line has slope $-2$ and passes through $(3, 1)$. What is its equation?',
      choices: ['$y = -2x + 1$', '$y = -2x - 5$', '$y = -2x + 7$', '$y = 2x - 5$'],
      answer: 2,
      solution:
        'Point-slope form: $y - 1 = -2(x - 3)$, so $y - 1 = -2x + 6$ and $y = -2x + 7$. Check it forward: at $x = 3$, $y = -6 + 7 = 1$. ✓ (The choice $y = -2x + 1$ treats the height $1$ as the $y$-intercept; the choice $y = -2x - 5$ distributes $-2(x + 3)$, flipping the sign inside the parentheses; the choice $y = 2x - 5$ drops the minus on the slope and then fits the point, giving a line that climbs where this one falls.)',
    },
    {
      q: 'The line $y = 5x + b$ passes through $(2, 3)$. What is $b$?',
      choices: ['$7$', '$-7$', '$13$', '$3$'],
      answer: 1,
      solution:
        'Substitute the point: $3 = 5(2) + b = 10 + b$, so $b = -7$. Check it forward: $y = 5x - 7$ at $x = 2$ gives $10 - 7 = 3$. ✓ (The choice $7$ subtracts the wrong way round, $10 - 3$; the choice $13$ ADDS, $3 + 10$; the choice $3$ takes the height at $x = 2$ as the intercept, but $b$ is the height at $x = 0$.)',
    },
  ],
  // p5 — the equation of a vertical line
  [
    {
      q: 'What is the equation of the vertical line through $(-5, 2)$?',
      choices: ['$x = -5$', '$y = -5$', '$x = 2$', '$y = 2$'],
      answer: 0,
      solution:
        'A vertical line fixes the $x$-coordinate, and this one runs through points with $x = -5$. Check it forward: $(-5, 2)$ and $(-5, 100)$ both satisfy $x = -5$, and each sits directly above or below the given point. ✓ (The choice $y = 2$ is the HORIZONTAL line through the point; the choice $x = 2$ uses the wrong coordinate; the choice $y = -5$ has the right number but the wrong variable.)',
    },
    {
      q: 'A line has undefined slope and passes through $(8, -1)$. What is its equation?',
      choices: ['$y = -1$', '$x = -1$', '$y = 8$', '$x = 8$'],
      answer: 3,
      solution:
        'An undefined slope means the run between any two of its points is $0$, so the line is vertical and every point shares the $x$-coordinate $8$: the equation is $x = 8$. Check it forward: $(8, -1)$ and $(8, 4)$ both satisfy it, and the run between them is $8 - 8 = 0$. ✓ (The choice $y = -1$ is the horizontal line through the point, whose slope is $0$ — defined, not undefined; the choice $x = -1$ uses the $y$-coordinate; the choice $y = 8$ has the right number but the wrong variable.)',
    },
    {
      q: 'The points $(-2, 3)$ and $(-2, 9)$ lie on the same line. What is its equation?',
      choices: ['$y = -2$', '$x = 6$', '$x = -2$', '$y = 6$'],
      answer: 2,
      solution:
        'Both points share the $x$-coordinate $-2$, so the line is vertical: $x = -2$. Check it forward: both $(-2, 3)$ and $(-2, 9)$ satisfy $x = -2$, and no slanted or horizontal line could hold two points stacked directly above each other. ✓ (The choice $y = -2$ has the right number but the wrong variable; the choice $x = 6$ uses the rise $9 - 3 = 6$; the choice $y = 6$ is the horizontal line halfway between the two heights, which passes through NEITHER point.)',
    },
  ],
  // p6 — two points, both with positive coordinates
  [
    {
      q: 'Which equation describes the line through $(1, 4)$ and $(3, 10)$?',
      choices: ['$y = 3x - 1$', '$y = 3x + 1$', '$y = \\frac{1}{3}x + 1$', '$y = 3x + 4$'],
      answer: 1,
      solution:
        'Slope first: $m = \\frac{10 - 4}{3 - 1} = \\frac{6}{2} = 3$. Point-slope with $(1, 4)$: $y - 4 = 3(x - 1)$, so $y = 3x + 1$. Check the OTHER point: at $x = 3$, $y = 9 + 1 = 10$. ✓ (The choice $y = 3x - 1$ computes the intercept backwards as $3(1) - 4$ instead of $4 - 3(1)$; the choice $y = \\frac{1}{3}x + 1$ builds the slope as run over rise; the choice $y = 3x + 4$ treats the height at $x = 1$ as the $y$-intercept.)',
    },
    {
      q: 'Which equation describes the line through $(-2, 1)$ and $(2, 9)$?',
      choices: ['$y = 2x + 5$', '$y = 2x - 3$', '$y = \\frac{1}{2}x + 5$', '$y = -2x + 5$'],
      answer: 0,
      solution:
        'Slope: $m = \\frac{9 - 1}{2 - (-2)} = \\frac{8}{4} = 2$. Point-slope with $(2, 9)$: $y - 9 = 2(x - 2)$, so $y = 2x + 5$. Check the OTHER point: at $x = -2$, $y = -4 + 5 = 1$. ✓ (The choice $y = 2x - 3$ uses $(-2, 1)$ but writes $y - 1 = 2(x - 2)$, forgetting that the $x$-coordinate is negative; the choice $y = \\frac{1}{2}x + 5$ builds the slope as run over rise; the choice $y = -2x + 5$ flips the sign of the slope, which would send the line down to the right.)',
    },
    {
      q: 'Which equation describes the line through $(1, 6)$ and $(4, 0)$?',
      choices: ['$y = 2x + 8$', '$y = -\\frac{1}{2}x + 8$', '$y = -2x - 8$', '$y = -2x + 8$'],
      answer: 3,
      solution:
        'Slope: $m = \\frac{0 - 6}{4 - 1} = \\frac{-6}{3} = -2$. Point-slope with $(4, 0)$: $y - 0 = -2(x - 4)$, so $y = -2x + 8$. Check the OTHER point: at $x = 1$, $y = -2 + 8 = 6$. ✓ (The choice $y = 2x + 8$ drops the minus on the slope, though the line clearly falls; the choice $y = -2x - 8$ distributes $-2(x + 4)$, flipping the sign inside the parentheses; the choice $y = -\\frac{1}{2}x + 8$ builds the slope as run over rise.)',
    },
  ],
  // p7 — moving between standard form and slope-intercept form
  [
    {
      q: 'Write $3x - 4y = 8$ in slope-intercept form.',
      choices: [
        '$y = \\frac{3}{4}x - 2$',
        '$y = -\\frac{3}{4}x + 2$',
        '$y = \\frac{3}{4}x + 2$',
        '$y = \\frac{4}{3}x - 2$',
      ],
      answer: 0,
      solution:
        'Isolate the $y$ term: $-4y = -3x + 8$. Dividing every term by $-4$ flips both signs: $y = \\frac{3}{4}x - 2$. Check it forward at $x = 4$: the new form gives $y = 3 - 2 = 1$, and the original gives $3(4) - 4(1) = 8$. ✓ (The choice $y = -\\frac{3}{4}x + 2$ divides by $4$ instead of $-4$, leaving every sign wrong; the choice $y = \\frac{3}{4}x + 2$ flips the sign of the $x$ term only; the choice $y = \\frac{4}{3}x - 2$ turns the slope upside down.)',
    },
    {
      q: 'Write $5x + 2y = 14$ in slope-intercept form.',
      choices: [
        '$y = \\frac{5}{2}x + 7$',
        '$y = -\\frac{5}{2}x + 14$',
        '$y = -\\frac{5}{2}x + 7$',
        '$y = -\\frac{2}{5}x + 7$',
      ],
      answer: 2,
      solution:
        'Move the $x$ term across: $2y = -5x + 14$. Divide every term by $2$: $y = -\\frac{5}{2}x + 7$. Check it forward at $x = 2$: the new form gives $y = -5 + 7 = 2$, and the original gives $5(2) + 2(2) = 14$. ✓ (The choice $y = \\frac{5}{2}x + 7$ forgets to negate the $x$ term when moving it across; the choice $y = -\\frac{5}{2}x + 14$ divides only the $x$ term by $2$ and leaves the constant alone; the choice $y = -\\frac{2}{5}x + 7$ turns the slope upside down.)',
    },
    {
      q: 'The line $y = -\\frac{1}{3}x + 4$ can be written without fractions in the form $ax + by = c$. Which equation is it?',
      choices: ['$x - 3y = 12$', '$x + 3y = 12$', '$3x + y = 12$', '$x + 3y = 4$'],
      answer: 1,
      solution:
        'Multiply every term by $3$: $3y = -x + 12$. Then add $x$ to both sides: $x + 3y = 12$. Check it forward with two points of the original line: $(0, 4)$ gives $0 + 12 = 12$ ✓ and $(3, 3)$ gives $3 + 9 = 12$ ✓, and $-\\frac{1}{3}(3) + 4 = 3$, so that point really is on the original. (The choice $x - 3y = 12$ subtracts the $x$ term instead of adding it; the choice $3x + y = 12$ multiplies the $x$ term rather than the $y$ term by $3$; the choice $x + 3y = 4$ forgets to multiply the constant.)',
    },
  ],
  // p8 — two points with negative coordinates
  [
    {
      q: 'Which equation describes the line through $(-2, 7)$ and $(1, -2)$?',
      choices: ['$y = 3x + 1$', '$y = -3x + 13$', '$y = -3x + 1$', '$y = -\\frac{1}{3}x + 1$'],
      answer: 2,
      solution:
        'Slope: $m = \\frac{-2 - 7}{1 - (-2)} = \\frac{-9}{3} = -3$. Point-slope with $(1, -2)$: $y + 2 = -3(x - 1)$, so $y = -3x + 1$. Check the OTHER point: at $x = -2$, $y = 6 + 1 = 7$. ✓ (The choice $y = 3x + 1$ drops the minus on the slope, though the line falls; the choice $y = -3x + 13$ uses $(-2, 7)$ but writes $y - 7 = -3(x - 2)$, forgetting that the $x$-coordinate is negative; the choice $y = -\\frac{1}{3}x + 1$ builds the slope as run over rise.)',
    },
    {
      q: 'Which equation describes the line through $(-3, -1)$ and $(3, 7)$?',
      choices: [
        '$y = \\frac{3}{4}x + 3$',
        '$y = \\frac{4}{3}x - 3$',
        '$y = \\frac{4}{3}x + 7$',
        '$y = \\frac{4}{3}x + 3$',
      ],
      answer: 3,
      solution:
        'Slope: $m = \\frac{7 - (-1)}{3 - (-3)} = \\frac{8}{6} = \\frac{4}{3}$. Point-slope with $(3, 7)$: $y - 7 = \\frac{4}{3}(x - 3)$, so $y = \\frac{4}{3}x - 4 + 7 = \\frac{4}{3}x + 3$. Check the OTHER point: at $x = -3$, $y = -4 + 3 = -1$. ✓ (The choice $y = \\frac{3}{4}x + 3$ turns the slope upside down; the choice $y = \\frac{4}{3}x - 3$ flips the sign of the intercept; the choice $y = \\frac{4}{3}x + 7$ treats the height at $x = 3$ as the $y$-intercept.)',
    },
    {
      q: 'A line passes through $(-4, 9)$ and $(2, -3)$. Where does it cross the $y$-axis?',
      choices: ['$(0, -7)$', '$(0, 1)$', '$(0, -2)$', '$\\left(\\frac{1}{2}, 0\\right)$'],
      answer: 1,
      solution:
        'Slope: $m = \\frac{-3 - 9}{2 - (-4)} = \\frac{-12}{6} = -2$, so $y = -2x + b$. Using $(2, -3)$: $-3 = -4 + b$, so $b = 1$ and the line crosses at $(0, 1)$. Check it forward with the other point: $-2(-4) + 1 = 9$. ✓ (The choice $(0, -7)$ drops the minus on the slope and then fits $(2, -3)$; the choice $(0, -2)$ uses the upside-down slope $-\\frac{1}{2}$; the choice $\\left(\\frac{1}{2}, 0\\right)$ is where the line crosses the OTHER axis.)',
    },
  ],
  // p9 — a fractional slope and a point
  [
    {
      q: 'A line has slope $\\frac{1}{3}$ and passes through $(6, -2)$. What is its equation?',
      choices: ['$y = \\frac{1}{3}x - 2$', '$y = \\frac{1}{3}x$', '$y = 3x - 20$', '$y = \\frac{1}{3}x - 4$'],
      answer: 3,
      solution:
        'Point-slope form: $y + 2 = \\frac{1}{3}(x - 6)$, so $y + 2 = \\frac{1}{3}x - 2$ and $y = \\frac{1}{3}x - 4$. Check it forward: at $x = 6$, $y = 2 - 4 = -2$. ✓ (The choice $y = \\frac{1}{3}x - 2$ treats the height at $x = 6$ as the $y$-intercept; the choice $y = \\frac{1}{3}x$ adds the $2$ instead of subtracting it, landing on $b = 0$; the choice $y = 3x - 20$ turns the slope upside down and then fits the point.)',
    },
    {
      q: 'A line has slope $-\\frac{2}{3}$ and passes through $(9, 1)$. What is its equation?',
      choices: [
        '$y = -\\frac{2}{3}x + 7$',
        '$y = -\\frac{2}{3}x + 1$',
        '$y = -\\frac{2}{3}x - 5$',
        '$y = -\\frac{3}{2}x + 7$',
      ],
      answer: 0,
      solution:
        'Point-slope form: $y - 1 = -\\frac{2}{3}(x - 9)$, so $y - 1 = -\\frac{2}{3}x + 6$ and $y = -\\frac{2}{3}x + 7$. Check it forward: at $x = 9$, $y = -6 + 7 = 1$. ✓ (The choice $y = -\\frac{2}{3}x + 1$ treats the height at $x = 9$ as the $y$-intercept; the choice $y = -\\frac{2}{3}x - 5$ subtracts the $6$ instead of adding it; the choice $y = -\\frac{3}{2}x + 7$ turns the slope upside down.)',
    },
    {
      q: 'A line with slope $\\frac{3}{5}$ passes through $(10, 4)$. What is its $y$-intercept?',
      choices: ['$(0, 4)$', '$(0, 10)$', '$(0, -2)$', '$\\left(\\frac{10}{3}, 0\\right)$'],
      answer: 2,
      solution:
        'Write $y = \\frac{3}{5}x + b$ and substitute the point: $4 = \\frac{3}{5}(10) + b = 6 + b$, so $b = -2$ and the intercept is $(0, -2)$. Check it forward: $\\frac{3}{5}(10) - 2 = 6 - 2 = 4$. ✓ (The choice $(0, 10)$ adds the $6$ instead of subtracting it; the choice $(0, 4)$ takes the height at $x = 10$ as the intercept; the choice $\\left(\\frac{10}{3}, 0\\right)$ is the $x$-intercept, on the wrong axis.)',
    },
  ],
  // p10 — a line through two opposite points, so it passes through the origin
  [
    {
      q: 'Which equation describes the line through $(2, -5)$ and $(-2, 5)$?',
      choices: ['$y = -\\frac{5}{2}x$', '$y = \\frac{5}{2}x$', '$y = -\\frac{2}{5}x$', '$y = -\\frac{5}{2}x + 5$'],
      answer: 0,
      solution:
        'Slope: $m = \\frac{5 - (-5)}{-2 - 2} = \\frac{10}{-4} = -\\frac{5}{2}$. The two points are opposites, so the midpoint of the segment is the origin and $b = 0$: the equation is $y = -\\frac{5}{2}x$. Check it forward at $x = 2$: $-\\frac{5}{2}(2) = -5$. ✓ (The choice $y = \\frac{5}{2}x$ drops the minus on the slope; the choice $y = -\\frac{2}{5}x$ turns it upside down; the choice $y = -\\frac{5}{2}x + 5$ borrows a $y$-coordinate for the intercept, but here the intercept is $0$.)',
    },
    {
      q: 'Which equation describes the line through $(-6, -4)$ and $(6, 4)$?',
      choices: ['$y = \\frac{3}{2}x$', '$y = \\frac{2}{3}x$', '$y = \\frac{2}{3}x + 4$', '$y = -\\frac{2}{3}x$'],
      answer: 1,
      solution:
        'Slope: $m = \\frac{4 - (-4)}{6 - (-6)} = \\frac{8}{12} = \\frac{2}{3}$. The points are opposites, so the line runs through the origin and $b = 0$: $y = \\frac{2}{3}x$. Check it forward at $x = 6$: $\\frac{2}{3}(6) = 4$. ✓ (The choice $y = \\frac{3}{2}x$ turns the slope upside down; the choice $y = \\frac{2}{3}x + 4$ borrows a $y$-coordinate for the intercept; the choice $y = -\\frac{2}{3}x$ flips the sign, which would send the line down to the right.)',
    },
    {
      q: 'A line through the origin also passes through $(-8, 6)$. Which of these points is on the same line?',
      choices: ['$(4, 3)$', '$(3, -4)$', '$(8, 6)$', '$(4, -3)$'],
      answer: 3,
      solution:
        'Slope: $m = \\frac{6 - 0}{-8 - 0} = -\\frac{3}{4}$, and $b = 0$, so the line is $y = -\\frac{3}{4}x$. Check it forward: at $x = 4$, $y = -3$, so $(4, -3)$ is on the line ✓ — it is the point directly opposite $(-8, 6)$ through the origin, halved. (The choice $(4, 3)$ drops the minus sign; the choice $(3, -4)$ uses the upside-down slope $-\\frac{4}{3}$; the choice $(8, 6)$ flips only the $x$-coordinate, landing on the mirror image of the line rather than on the line.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 8,
  sections: { '8.3': s83, '8.4': s84 },
}
