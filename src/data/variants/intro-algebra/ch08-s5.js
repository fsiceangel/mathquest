// Introduction to Algebra chapter 8 — variations for the chapter worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE: each variation carries a question, an
//    `answer` string, and a solution. Nothing is offered to pick from, so all
//    of the teaching lives in the solution.
//  - Every key was re-derived from the question text alone and then pushed
//    FORWARD: a quadrant is re-checked against a sample point, a midpoint is
//    shown to sit the same distance from both endpoints, an intercept is
//    substituted back into its equation, a slope is re-read off the two points,
//    a finished line is evaluated at the given point, and an intersection is
//    tested in the line that was NOT used to find it.
//  - A variation changes the numbers AND the framing, and where it makes sense
//    the direction too: hand over the distance and ask for the missing
//    coordinate, hand over the midpoint and ask for the far endpoint, hand over
//    the total bill and ask how many months it bought.
//  - Two named traps run through the file. The SIGN trap: subtracting a
//    negative coordinate adds, and dividing by a negative coefficient flips
//    every sign. The RECIPROCAL trap: rise over run, never run over rise, and
//    "flip the fraction" belongs to perpendicular lines only.
//  - Figures are coordinate-exact: every plotted point sits on a lattice
//    intersection inside the view, every drawn line passes through two lattice
//    points that satisfy its equation, and figure labels are plain text.

const worksheet = [
  // w1 — name the quadrant a point lives in, from coordinates, from a picture,
  //      and from a sign argument about a reflected point.
  [
    {
      q: 'In which quadrant does the point $(5, -9)$ lie?',
      answer: 'Quadrant IV',
      solution:
        'Read sideways first: the $x$-coordinate $5$ is positive, so the point sits to the RIGHT of the $y$-axis. The $y$-coordinate $-9$ is negative, so it sits BELOW the $x$-axis. Right and down is the lower-right region, Quadrant IV. Check forward: Quadrant IV is exactly the $(+, -)$ corner, and $(5, -9)$ has signs $(+, -)$ ✓.',
    },
    {
      q: 'Point $P$ is plotted on the grid below. In which quadrant does it lie?',
      fig: {
        view: [-6, -6, 6, 6],
        grid: true,
        elems: [{ t: 'point', p: [-4, 3], label: 'P', dx: 8, dy: -8 }],
      },
      answer: 'Quadrant II',
      solution:
        'Read the address off the grid: $P$ sits $4$ units LEFT of the origin and $3$ units UP, so $P = (-4, 3)$. Negative $x$ with positive $y$ is the upper-left region, Quadrant II. Check forward: Quadrant II is the $(-, +)$ corner, and $(-4, 3)$ has signs $(-, +)$ ✓.',
    },
    {
      q: 'The point $(a, b)$ lies in Quadrant III. In which quadrant does the point $(-a, -b)$ lie?',
      answer: 'Quadrant I',
      solution:
        'Quadrant III is the $(-, -)$ corner, so $a$ is negative and $b$ is negative. Negating a negative number makes it positive, so $-a$ is positive and $-b$ is positive: the new point has signs $(+, +)$, which is Quadrant I. Check forward with a sample: $(-2, -5)$ really is in Quadrant III, and $(2, 5)$ really is in Quadrant I ✓.',
    },
  ],
  // w2 — distance along a grid line: subtract the coordinate that changes. The
  //      middle variation hands over the distance and asks for the endpoint.
  [
    {
      q: 'Find the distance between the points $(-6, -4)$ and $(-6, 9)$.',
      answer: '$13$',
      solution:
        'The $x$-coordinates match ($-6$ both times), so the segment is VERTICAL and the distance is the gap in $y$: $9 - (-4) = 9 + 4 = 13$. Subtracting a negative adds — that is the SIGN trap in one step. Check forward: from height $-4$, climbing $13$ lands at $-4 + 13 = 9$ ✓.',
    },
    {
      q: 'The points $(-5, 2)$ and $(t, 2)$ are $14$ units apart, and $t$ is positive. What is $t$?',
      answer: '$t = 9$',
      solution:
        'Both points sit at height $2$, so the segment is horizontal and its length is the gap in $x$: $t - (-5) = t + 5$. Set that equal to $14$: $t + 5 = 14$, so $t = 9$. Check forward: the distance from $(-5, 2)$ to $(9, 2)$ is $9 - (-5) = 14$ ✓. (Going the other way, $t = -19$ would also be $14$ units away, but the question asks for the positive value.)',
    },
    {
      q: 'How long is the segment joining $(-8, -3)$ to $(7, -3)$?',
      answer: '$15$',
      solution:
        'The $y$-coordinates match ($-3$ both times), so the segment is HORIZONTAL and its length is the gap in $x$: $7 - (-8) = 7 + 8 = 15$. Check forward: starting at $-8$ and stepping $15$ to the right lands at $-8 + 15 = 7$ ✓. A length is never negative, so subtracting the other way and keeping the minus sign would be a red flag.',
    },
  ],
  // w3 — midpoint of a horizontal or vertical segment: average the coordinate
  //      that moves. The middle variation runs the average backwards.
  [
    {
      q: 'Find the midpoint of the segment from $(-9, -5)$ to $(3, -5)$.',
      answer: '$(-3, -5)$',
      solution:
        'The heights match, so the segment is horizontal: keep $y = -5$ and average the $x$-coordinates. $\\frac{-9 + 3}{2} = \\frac{-6}{2} = -3$, so the midpoint is $(-3, -5)$. Check forward: it is $-3 - (-9) = 6$ units from the left endpoint and $3 - (-3) = 6$ units from the right one — equal distances, as a midpoint demands ✓.',
    },
    {
      q: 'A vertical segment has midpoint $(-2, 4)$, and one of its endpoints is $(-2, -3)$. What is the other endpoint?',
      answer: '$(-2, 11)$',
      solution:
        'This one runs the average BACKWARDS. The segment is vertical, so every point on it keeps $x = -2$. From the known endpoint up to the midpoint is $4 - (-3) = 7$ units, and the midpoint must be the same distance from the far endpoint, so climb another $7$: $4 + 7 = 11$. The other endpoint is $(-2, 11)$. Check forward: $\\frac{-3 + 11}{2} = \\frac{8}{2} = 4$, the given midpoint ✓.',
    },
    {
      q: 'Find the midpoint of the segment from $(-5, 3)$ to $(-5, -13)$.',
      answer: '$(-5, -5)$',
      solution:
        'The $x$-coordinates match, so the segment is vertical: keep $x = -5$ and average the $y$-coordinates. $\\frac{3 + (-13)}{2} = \\frac{-10}{2} = -5$, giving the midpoint $(-5, -5)$. Check forward: it is $3 - (-5) = 8$ units below the top endpoint and $-5 - (-13) = 8$ units above the bottom one ✓.',
    },
  ],
  // w4 — is the point on the line? Substitute. One yes, one no, and one that
  //      hands over the line and asks for the missing coordinate.
  [
    {
      q: 'Is the point $(-2, 5)$ on the line $3x + 4y = 14$? Explain how you know.',
      answer: 'Yes',
      solution:
        'A point is on a line exactly when it makes the equation TRUE, so substitute $x = -2$ and $y = 5$ into the left side: $3(-2) + 4(5) = -6 + 20 = 14$. That matches the right side, so the pair is a solution and the point is on the line ✓. No graphing needed — arithmetic settles it.',
    },
    {
      q: 'Is the point $(4, -3)$ on the line $5x - 2y = 14$? Explain how you know.',
      answer: 'No',
      solution:
        'Substitute $x = 4$ and $y = -3$: $5(4) - 2(-3) = 20 + 6 = 26$. Watch the SIGN trap — subtracting $-3$ ADDS $6$. Since $26$ does not equal $14$, the pair is not a solution, so the point is NOT on the line. Check forward: the line does pass through $(4, 3)$, since $20 - 6 = 14$, so the point we were given sits well below it.',
    },
    {
      q: 'The point $(-4, k)$ lies on the line $3x + 2y = 10$. What is $k$?',
      answer: '$k = 11$',
      solution:
        'Being on the line means the coordinates satisfy the equation, so substitute $x = -4$ and leave $k$ standing: $3(-4) + 2k = 10$, that is $-12 + 2k = 10$. Add $12$: $2k = 22$, so $k = 11$. Check forward: $3(-4) + 2(11) = -12 + 22 = 10$ ✓.',
    },
  ],
  // w5 — both intercepts of a standard-form line. The last variation reverses
  //      it: an intercept is given and a coefficient is missing.
  [
    {
      q: 'Find the $x$-intercept and the $y$-intercept of the line $3x + 7y = 21$.',
      answer: '$x$-intercept $(7, 0)$; $y$-intercept $(0, 3)$',
      solution:
        'The $x$-axis is where $y = 0$: $3x = 21$, so $x = 7$ and the $x$-intercept is $(7, 0)$. The $y$-axis is where $x = 0$: $7y = 21$, so $y = 3$ and the $y$-intercept is $(0, 3)$. Check both forward: $3(7) + 7(0) = 21$ ✓ and $3(0) + 7(3) = 21$ ✓. Notice each intercept divides $21$ by the coefficient of ITS OWN variable — swapping them is the classic slip.',
    },
    {
      q: 'Find the $x$-intercept and the $y$-intercept of the line $4x - 3y = -24$.',
      answer: '$x$-intercept $(-6, 0)$; $y$-intercept $(0, 8)$',
      solution:
        'Set $y = 0$: $4x = -24$, so $x = -6$ and the $x$-intercept is $(-6, 0)$. Set $x = 0$: $-3y = -24$, and dividing a negative by a negative gives $y = 8$, so the $y$-intercept is $(0, 8)$. Check both forward: $4(-6) - 3(0) = -24$ ✓ and $4(0) - 3(8) = -24$ ✓. Both signs matter here — the line crosses to the LEFT of the origin and ABOVE it.',
    },
    {
      q: 'The line $6x + cy = 18$ has $y$-intercept $(0, -9)$. Find $c$, and then find the $x$-intercept of the line.',
      answer: '$c = -2$; $x$-intercept $(3, 0)$',
      solution:
        'The point $(0, -9)$ must satisfy the equation, so substitute it: $6(0) + c(-9) = 18$, that is $-9c = 18$ and $c = -2$. The line is therefore $6x - 2y = 18$. Now set $y = 0$ for the other intercept: $6x = 18$, so $x = 3$. Check both forward: at $x = 0$, $-2y = 18$ gives $y = -9$ ✓, and at $y = 0$, $6(3) = 18$ ✓.',
    },
  ],
  // w6 — slope from two points, from a graph, and (reversed) from a slope plus
  //      one missing coordinate.
  [
    {
      q: 'Find the slope of the line through $(-3, -4)$ and $(5, 8)$.',
      answer: '$\\frac{3}{2}$',
      solution:
        'Slope is $\\frac{\\text{rise}}{\\text{run}}$, with the two points taken in the SAME order top and bottom. Rise: $8 - (-4) = 12$. Run: $5 - (-3) = 8$. Slope $= \\frac{12}{8} = \\frac{3}{2}$. Check forward: starting at $(-3, -4)$ and stepping right $2$ and up $3$ four times lands on $(5, 8)$ ✓. The line climbs, so a positive slope is right; $\\frac{8}{12}$ would be the RECIPROCAL trap.',
    },
    {
      q: 'Find the slope of the line drawn on the grid below.',
      fig: {
        view: [-5, -4, 5, 4],
        grid: true,
        elems: [
          { t: 'line', a: [-3, -2], b: [3, 2] },
          { t: 'point', p: [-3, -2], label: '(-3, -2)', dx: -14, dy: 18 },
          { t: 'point', p: [3, 2], label: '(3, 2)', dx: 8, dy: -10 },
        ],
      },
      answer: '$\\frac{2}{3}$',
      solution:
        'Use the two marked lattice points, $(-3, -2)$ and $(3, 2)$. Rise: $2 - (-2) = 4$. Run: $3 - (-3) = 6$. Slope $= \\frac{4}{6} = \\frac{2}{3}$. Check forward: from $(-3, -2)$, going right $3$ and up $2$ reaches $(0, 0)$, and another right $3$, up $2$ reaches $(3, 2)$ — both on the drawn line ✓. The line rises gently, so a positive slope less than $1$ matches the picture.',
    },
    {
      q: 'The line through $(-1, 6)$ and $(3, k)$ has slope $-2$. What is $k$?',
      answer: '$k = -2$',
      solution:
        'Write the slope with $k$ still in it: $\\frac{k - 6}{3 - (-1)} = \\frac{k - 6}{4}$, and that must equal $-2$. Multiply both sides by $4$: $k - 6 = -8$, so $k = -2$. Check forward: from $(-1, 6)$ to $(3, -2)$ the rise is $-2 - 6 = -8$ and the run is $4$, and $\\frac{-8}{4} = -2$ ✓. A negative slope means the line falls, so $k$ landing BELOW $6$ is exactly right.',
    },
  ],
  // w7 — build the equation in slope-intercept form: from slope and a point,
  //      and (once) from two points, which needs the slope first.
  [
    {
      q: 'Find the equation of the line with slope $\\frac{2}{3}$ that passes through $(-6, 1)$. Write your answer in slope-intercept form.',
      answer: '$y = \\frac{2}{3}x + 5$',
      solution:
        'Point-slope form: $y - 1 = \\frac{2}{3}(x + 6)$ — with a negative $x$-coordinate, $x - (-6)$ becomes $x + 6$, the SIGN trap in action. Distribute: $y - 1 = \\frac{2}{3}x + 4$, so $y = \\frac{2}{3}x + 5$. Check forward: at $x = -6$, $y = \\frac{2}{3}(-6) + 5 = -4 + 5 = 1$ ✓.',
    },
    {
      q: 'Find the equation of the line through $(-2, 7)$ and $(2, -1)$. Write your answer in slope-intercept form.',
      answer: '$y = -2x + 3$',
      solution:
        'Two points, so find the slope first: $m = \\frac{-1 - 7}{2 - (-2)} = \\frac{-8}{4} = -2$. Now use point-slope with $(-2, 7)$: $y - 7 = -2(x + 2)$, so $y - 7 = -2x - 4$ and $y = -2x + 3$. Check forward in the OTHER point: at $x = 2$, $y = -4 + 3 = -1$ ✓. Both given points fit, and two points pin down exactly one line.',
    },
    {
      q: 'Find the equation of the line with slope $-3$ that passes through $(5, -4)$. Write your answer in slope-intercept form.',
      answer: '$y = -3x + 11$',
      solution:
        'Point-slope form: $y - (-4) = -3(x - 5)$, that is $y + 4 = -3x + 15$. Subtract $4$: $y = -3x + 11$. Check forward: at $x = 5$, $y = -15 + 11 = -4$ ✓. Dropping $-4$ straight into the $b$ seat would give $y = -3x - 4$, but $-4$ is the height at $x = 5$, not at $x = 0$.',
    },
  ],
  // w8 — a story that is secretly y = mx + b: the per-unit charge is the slope
  //      and the one-time amount is the starting value. One variation runs the
  //      rule backwards, and one has a NEGATIVE slope.
  [
    {
      q: 'A pottery studio charges a one-time registration fee of $\\$24$, plus $\\$9$ for each class you attend. Write an equation for the total cost $C$ after $n$ classes, and find the total cost of $12$ classes.',
      answer: '$C = 9n + 24$; $12$ classes cost $\\$132$',
      solution:
        'The charge per class is the slope ($9$ dollars for each extra class) and the registration fee is the starting value, the cost when $n = 0$. So $C = 9n + 24$. At $n = 12$: $C = 9(12) + 24 = 108 + 24 = 132$ dollars. Check forward: $12$ classes at $\\$9$ each is $\\$108$, and adding the one-time $\\$24$ gives $\\$132$ ✓ — the fee is paid ONCE, not once per class.',
    },
    {
      q: 'A phone plan costs $\\$18$ per month plus a one-time activation fee of $\\$25$. Write an equation for the total cost $C$ after $m$ months, and find how many months of service cost a total of $\\$205$.',
      answer: '$C = 18m + 25$; $10$ months',
      solution:
        'The monthly charge is the slope and the activation fee is the starting value: $C = 18m + 25$. This time the total is handed to us, so run the rule BACKWARDS: $205 = 18m + 25$, so $18m = 180$ and $m = 10$ months. Check forward: $18(10) + 25 = 180 + 25 = 205$ ✓. Dividing $205$ by $18$ straight away would forget the fee that is not part of the monthly rate.',
    },
    {
      q: 'Lena has a gift card worth $\\$80$ and spends $\\$6$ from it every week. Write an equation for the balance $B$ left after $w$ weeks, and find the balance after $9$ weeks.',
      answer: '$B = 80 - 6w$; after $9$ weeks the balance is $\\$26$',
      solution:
        'The balance starts at $80$ and FALLS by $6$ each week, so the slope is $-6$ and the equation is $B = 80 - 6w$. At $w = 9$: $B = 80 - 6(9) = 80 - 54 = 26$ dollars. Check forward: spending $\\$26$ more would take $\\frac{26}{6}$ more weeks, and indeed the card runs out partway through week $14$, since $6(13) = 78$ leaves only $\\$2$ ✓. A shrinking quantity always means a negative slope.',
    },
  ],
  // w9 — perpendicular through a given point: flip and negate, then use the
  //      point. One line arrives in standard form and must be rewritten first.
  [
    {
      q: 'Find the equation of the line through $(-6, 4)$ that is perpendicular to $y = 3x + 5$.',
      answer: '$y = -\\frac{1}{3}x + 2$',
      solution:
        'Perpendicular slopes multiply to $-1$, so from $3m = -1$ we get $m = -\\frac{1}{3}$: flip the fraction AND flip the sign, two moves. Point-slope through $(-6, 4)$: $y - 4 = -\\frac{1}{3}(x + 6)$, so $y - 4 = -\\frac{1}{3}x - 2$ and $y = -\\frac{1}{3}x + 2$. Check forward: at $x = -6$, $y = 2 + 2 = 4$ ✓, and $3 \\cdot \\left(-\\frac{1}{3}\\right) = -1$ ✓.',
    },
    {
      q: 'Find the equation of the line through $(4, -5)$ that is perpendicular to $2x + 5y = 15$.',
      answer: '$y = \\frac{5}{2}x - 15$',
      solution:
        'Get the given slope first: $5y = -2x + 15$, so $y = -\\frac{2}{5}x + 3$ and its slope is $-\\frac{2}{5}$. Flip and negate: the perpendicular slope is $\\frac{5}{2}$. Point-slope through $(4, -5)$: $y + 5 = \\frac{5}{2}(x - 4)$, so $y + 5 = \\frac{5}{2}x - 10$ and $y = \\frac{5}{2}x - 15$. Check forward: at $x = 4$, $y = 10 - 15 = -5$ ✓, and $-\\frac{2}{5} \\cdot \\frac{5}{2} = -1$ ✓.',
    },
    {
      q: 'Find the equation of the line through $(-3, -1)$ that is perpendicular to $y = -\\frac{1}{2}x + 6$.',
      answer: '$y = 2x + 5$',
      solution:
        'Here the given slope is the fraction and the answer is the whole number: $-\\frac{1}{2} \\cdot m = -1$ gives $m = 2$. Point-slope through $(-3, -1)$: $y + 1 = 2(x + 3)$, so $y + 1 = 2x + 6$ and $y = 2x + 5$. Check forward: at $x = -3$, $y = -6 + 5 = -1$ ✓, and $-\\frac{1}{2} \\cdot 2 = -1$ ✓. Keeping the slope at $-2$ would only flip the sign, not the fraction — half of the job.',
    },
  ],
  // w10 — where two lines cross. One pair is both in y = form, one arrives in
  //      standard form, and one hands over the crossing x and asks for a
  //      missing constant.
  [
    {
      q: 'Find the point where the lines $y = -x + 10$ and $y = 3x - 6$ intersect.',
      answer: '$(4, 6)$',
      solution:
        'At the crossing point both rules give the same height, so set the right sides equal: $-x + 10 = 3x - 6$. Add $x$ and add $6$: $16 = 4x$, so $x = 4$. Then $y = -4 + 10 = 6$. Check in the line NOT used for $y$: $3(4) - 6 = 12 - 6 = 6$ ✓. The lines cross at $(4, 6)$.',
    },
    {
      q: 'Find the point where the lines $y = 2x - 3$ and $x + y = 12$ intersect.',
      answer: '$(5, 7)$',
      solution:
        'The first line already tells us what $y$ is, so substitute it into the second: $x + (2x - 3) = 12$, that is $3x - 3 = 12$, so $3x = 15$ and $x = 5$. Then $y = 2(5) - 3 = 7$. Check in the equation NOT used to find $y$: $5 + 7 = 12$ ✓. The lines cross at $(5, 7)$.',
    },
    {
      q: 'The lines $y = 4x - 9$ and $y = -x + k$ cross at the point where $x = 2$. Find $k$ and the point where the lines cross.',
      answer: '$k = 1$; the lines cross at $(2, -1)$',
      solution:
        'The crossing point sits on BOTH lines, and the first line is fully known, so use it to find the height: at $x = 2$, $y = 4(2) - 9 = -1$. The crossing point is $(2, -1)$. Now make the second line pass through it: $-1 = -2 + k$, so $k = 1$. Check forward: $y = -x + 1$ at $x = 2$ gives $-1$ ✓, matching the first line exactly there.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 8,
  worksheet,
}
