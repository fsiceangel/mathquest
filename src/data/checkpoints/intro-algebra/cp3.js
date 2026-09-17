// Introduction to Algebra — Checkpoint 3: sits after chapter 9 and draws on chapters 1–9.
// All problems, figures, and solutions are original MathQuest content.

const problems = [
  // ---- Band A ----
  {
    q: 'On the surveyor’s grid shown, a straight wire runs from the top of a post at $(2, 6)$ to the top of a shorter post at $(6, 3)$ and continues in the same straight line past the shorter post until it is pegged into the ground line, which is the $x$-axis. At what $x$-coordinate is the peg?',
    fig: {
      view: [-1, -1, 12, 8],
      grid: true,
      elems: [
        { t: 'seg', a: [2, 0], b: [2, 6] },
        { t: 'seg', a: [6, 0], b: [6, 3] },
        { t: 'seg', a: [2, 6], b: [6, 3] },
        { t: 'seg', a: [6, 3], b: [8, 1.5], dash: true },
        { t: 'point', p: [2, 6], label: '(2, 6)', dx: -6, dy: -8 },
        { t: 'point', p: [6, 3], label: '(6, 3)', dx: 16, dy: -6 },
      ],
    },
    choices: ['$6$', '$6.5$', '$7.5$', '$8$', '$10$'],
    answer: 4,
    solution:
      'Between the post tops the wire drops $3$ while moving $4$ to the right, so its slope is $-\\frac{3}{4}$. From the top of the shorter post at $(6, 3)$ it still has $3$ to drop, which takes another run of $4$, so the peg is at $x = 10$; the same comes from the equation $y = -\\frac{3}{4}x + 7.5$ with $y = 0$. The choice $6$ is the foot of the shorter post, where the wire would land only if it dropped straight down. Using the reciprocal slope $\\frac{4}{3}$ makes the drop of $6$ from the first post need a run of only $4.5$, giving $6.5$. The choice $7.5$ is the $y$-intercept, where the wire’s line crosses the vertical axis, not the ground. And $8$ is the total run of $8$ from the first post, forgotten to be added to that post’s own $x$-coordinate of $2$.',
    topic: 'geometry',
    chapter: 8,
  },
  {
    q: 'A ride-share app charges a flat pickup fee of $\\$3.50$ plus $\\$1.80$ for every kilometer, and it only bills whole kilometers. Tomas has exactly $\\$30$ and wants the longest ride he can afford. How many kilometers long can his ride be?',
    choices: ['$14$', '$15$', '$16$', '$17$', '$18$'],
    answer: 0,
    solution:
      'After the pickup fee, $30 - 3.50 = 26.50$ dollars remain for distance, and $26.50 \\div 1.80 \\approx 14.72$. A ride of $14$ km costs $3.50 + 25.20 = 28.70$ dollars and fits; the next whole kilometer does not, so the answer is $14$. Rounding $14.72$ up gives $15$, but that ride costs $\\$30.50$ and is over budget. Ignoring the fee entirely, $30 \\div 1.80 \\approx 16.67$, gives $16$, and rounding that up gives $17$. Adding the fee to the budget instead of subtracting it, $33.50 \\div 1.80 \\approx 18.6$, gives $18$.',
    topic: 'rates',
    chapter: 9,
  },
  {
    q: 'A square lawn has an area of $112$ square meters. The gardener needs to know the exact length of edging that will run around all four sides of the lawn. What is that length, in meters?',
    choices: ['$4\\sqrt{7}$', '$8\\sqrt{7}$', '$28$', '$12\\sqrt{7}$', '$16\\sqrt{7}$'],
    answer: 4,
    solution:
      'The side of the lawn is $\\sqrt{112}$, and since $112 = 16 \\cdot 7$, that is $\\sqrt{16} \\cdot \\sqrt{7} = 4\\sqrt{7}$ meters. Four sides make the edging $4 \\cdot 4\\sqrt{7} = 16\\sqrt{7}$ meters. The choice $4\\sqrt{7}$ is a single side, and $8\\sqrt{7}$ adds only a length and a width, as if the perimeter were two sides. The choice $28$ divides the area by $4$, treating the perimeter as a quarter of the area instead of four times the root of it. And $12\\sqrt{7}$ counts three sides, leaving one side of the lawn without edging.',
    topic: 'number theory',
    chapter: 1,
  },
  // ---- Band B ----
  {
    q: 'A crew of $9$ painters, all working at the same steady rate, is hired to repaint a stadium in $16$ days. After $4$ days, $3$ of the painters are reassigned to another site and the remaining $6$ finish the job at the same rate. How many days later than planned is the job finished?',
    choices: ['$6$', '$8$', '$12$', '$18$', '$22$'],
    answer: 0,
    solution:
      'Measure the job in painter-days: $9 \\times 16 = 144$ in all. The first $4$ days use $9 \\times 4 = 36$ of them, leaving $108$ painter-days of work. Six painters need $108 \\div 6 = 18$ days for it, where the plan allowed only $16 - 4 = 12$, so the job runs $6$ days late. The choice $8$ hands the whole job to six painters, $144 \\div 6 = 24$ days against $16$, forgetting that the first four days ran at full strength. The choice $12$ is the number of days the plan still had left, $18$ is the number of days the remaining work takes, and $22$ is the new total length of the job, $4 + 18$, rather than how much later it ends.',
    topic: 'rates',
    chapter: 7,
  },
  {
    q: 'On a builder’s plan, one unit is one meter and a straight fence follows the line $5x + 4y = 60$. Together with the two walls that lie along the axes, the fence closes off the triangular corner of the yard shown. What is the area of that corner, in square meters?',
    fig: {
      view: [-1.5, -1.5, 14, 17],
      grid: true,
      elems: [
        { t: 'poly', pts: [[0, 0], [12, 0], [0, 15]], fill: false },
      ],
    },
    choices: ['$27$', '$45$', '$60$', '$90$', '$180$'],
    answer: 3,
    solution:
      'The fence meets the $x$-axis where $y = 0$, at $5x = 60$, so $x = 12$, and meets the $y$-axis where $x = 0$, at $4y = 60$, so $y = 15$. The corner is a right triangle with legs $12$ and $15$ along the walls, so its area is $\\frac{1}{2} \\cdot 12 \\cdot 15 = 90$. The choice $27$ adds the two intercepts instead of multiplying them. The choice $45$ halves the product twice, and $60$ is just the constant from the fence’s equation. The choice $180$ is the full $12$ by $15$ rectangle, never cut in half.',
    topic: 'geometry',
    chapter: 8,
  },
  {
    q: 'A trampoline park charges $\\$9$ per visit for drop-ins. A season pass instead costs $\\$60$ up front and then $\\$4$ per visit. Over the season, Lena’s pass ends up saving her exactly $\\$40$ compared with paying per visit. How many visits does she make?',
    choices: ['$4$', '$8$', '$12$', '$20$', '$25$'],
    answer: 3,
    solution:
      'With $v$ visits, drop-ins cost $9v$ and the pass costs $60 + 4v$. The pass saves $9v - (60 + 4v) = 5v - 60$, and setting that equal to $40$ gives $5v = 100$, so $v = 20$: drop-ins would cost $\\$180$ against the pass’s $\\$140$. The choice $4$ solves $60 - 5v = 40$, which is when the pass costs $\\$40$ more, not less. The choice $8$ is $40 \\div 5$, forgetting the $\\$60$ that the savings must first pay back. The choice $12$ is the break-even count, where the two plans cost the same. The choice $25$ divides $60 + 40 = 100$ by the pass’s $\\$4$ rate, as if the drop-in price played no part.',
    topic: 'algebra',
    chapter: 5,
  },
  {
    q: 'A workshop prices its canvas awnings in proportion to their area. An awning $4$ meters long and $5$ meters wide costs $\\$250$. A customer orders one that is $50\\%$ longer and $20\\%$ narrower. What does it cost?',
    choices: ['$\\$200$', '$\\$250$', '$\\$300$', '$\\$325$', '$\\$375$'],
    answer: 2,
    solution:
      'The new awning is $4 \\times 1.5 = 6$ meters long and $5 \\times 0.8 = 4$ meters wide, so its area is $24$ square meters against the original $20$: the factor is $\\frac{24}{20} = 1.2$, and the price is $250 \\times 1.2 = \\$300$. The same factor comes straight from $1.5 \\times 0.8 = 1.2$. The choice $\\$200$ applies only the width change, $250 \\times 0.8$. The choice $\\$250$ assumes a $50\\%$ rise and a $20\\%$ drop cancel out. The choice $\\$325$ adds the percents to get a $30\\%$ rise, and $\\$375$ applies only the length change, $250 \\times 1.5$.',
    topic: 'ratios',
    chapter: 7,
  },
  // ---- Band C ----
  {
    q: 'A farmer has $53$ meters of fencing to make a rectangular pen against a long straight barn wall. The wall forms one side of the pen and the fencing forms the other three sides, each a whole number of meters. What is the largest area the pen can have, in square meters?',
    choices: ['$306$', '$323$', '$350$', '$351$', '$702$'],
    answer: 3,
    solution:
      'Let each of the two sides that run out from the wall be $b$ meters, so the side parallel to the wall is $53 - 2b$ and the area is $b(53 - 2b) = 53b - 2b^2$. This is a downward parabola with its peak at $b = \\frac{53}{4} = 13.25$, so the best whole number is $b = 13$, giving a $27$ by $13$ pen of area $351$; the neighbor $b = 14$ gives $25 \\times 14 = 350$, one less. The choices $306$ and $323$ come from making the pen as close to square as possible, with all three fenced sides near $53 \\div 3$: a $17$ by $18$ pen and a $19$ by $17$ pen. The choice $350$ steps to the wrong side of the peak. The choice $702$ treats the fencing as only two sides adding to $53$, a $26$ by $27$ rectangle, forgetting that the depth is fenced twice.',
    topic: 'number theory',
    chapter: 9,
  },
  {
    q: 'A three-digit locker code has digits that add up to $14$, and its middle digit equals the sum of its other two digits. When the code is written backwards, the result is $297$ less than the original code. What is the code?',
    choices: ['$275$', '$473$', '$572$', '$671$', '$770$'],
    answer: 2,
    solution:
      'Call the digits $a$, $b$, $c$ from left to right. Then $a + b + c = 14$ and $b = a + c$, so $2b = 14$ and $b = 7$, leaving $a + c = 7$. The code is $100a + 10b + c$ and its reverse is $100c + 10b + a$, so the difference is $99(a - c) = 297$, giving $a - c = 3$. With $a + c = 7$ that forces $a = 5$ and $c = 2$: the code is $572$, and indeed $572 - 275 = 297$. The choice $275$ is the code written backwards, which is $297$ more than its reverse, not less. The choices $473$ and $671$ have digit sum $14$ and middle digit $7$, but reversing them changes the code by $99$ and $495$. The choice $770$ also passes both digit checks, but $770 - 077 = 693$.',
    topic: 'number theory',
    chapter: 5,
  },
  {
    q: 'A courier drives the same fixed route every morning at a steady speed. She works out that driving $6$ km/h faster would get her there $1$ hour sooner, while driving $6$ km/h slower would get her there $2$ hours later. How long is the route, in kilometers?',
    choices: ['$4$', '$18$', '$48$', '$54$', '$72$'],
    answer: 4,
    solution:
      'Let the usual speed be $v$ km/h and the usual time $t$ hours, so the route is $vt$ km. The faster trip gives $(v + 6)(t - 1) = vt$, which expands and cancels $vt$ to leave $6t - v = 6$. The slower trip gives $(v - 6)(t + 2) = vt$, leaving $2v - 6t = 12$. Adding the two equations, $v = 18$, and then $t = 4$, so the route is $18 \\times 4 = 72$ km. The choice $4$ is the usual time in hours and $18$ is the usual speed. The choice $48$ multiplies the slower speed $12$ by the usual time $4$, and $54$ multiplies the usual speed $18$ by the shorter time $3$; each pairs a speed with a time from a different trip.',
    topic: 'rates',
    chapter: 7,
  },
  {
    q: 'A tilted rectangular flower bed is drawn on a park map. One side lies along the line $y = 2x + 1$ and the adjacent side is perpendicular to it; the two sides meet at the corner $A(1, 3)$, and the corner of the bed opposite $A$ is $C(1, 8)$. Both lines through $A$ are shown. What is the area of the bed, in square units?',
    fig: {
      view: [-3, -1, 6, 10],
      grid: true,
      elems: [
        { t: 'line', a: [1, 3], b: [3, 7] },
        { t: 'line', a: [1, 3], b: [-1, 4] },
        { t: 'point', p: [1, 3], label: 'A', dx: 12, dy: 6 },
        { t: 'point', p: [1, 8], label: 'C', dx: 12, dy: 4 },
      ],
    },
    choices: ['$5$', '$10$', '$12.5$', '$20$', '$25$'],
    answer: 1,
    solution:
      'The side through $A$ perpendicular to $y = 2x + 1$ has slope $-\\frac{1}{2}$, so it is $y = -\\frac{1}{2}x + \\frac{7}{2}$. The other two sides pass through $C$ with the same two slopes: $y = -\\frac{1}{2}x + \\frac{17}{2}$ meets $y = 2x + 1$ at $B(3, 7)$, and $y = 2x + 6$ meets the perpendicular through $A$ at $D(-1, 4)$. Then $AB = \\sqrt{2^2 + 4^2} = 2\\sqrt{5}$ and $AD = \\sqrt{2^2 + 1^2} = \\sqrt{5}$, so the area is $2\\sqrt{5} \\cdot \\sqrt{5} = 10$. The choice $5$ is the length of the diagonal $AC$, not an area. The choice $12.5$ is $\\frac{5^2}{2}$, the area the bed would have if it were a square with diagonal $5$. The choice $20$ squares the longer side, $(2\\sqrt{5})^2$, and $25$ squares the diagonal.',
    topic: 'geometry',
    chapter: 8,
  },
  // ---- Band D ----
  {
    q: 'A market stall has $\\$500$ to spend and $50$ units of shelf space. Ceramic planters cost $\\$40$ each, take $2$ units of shelf space, and earn a profit of $\\$9$ each. Lanterns cost $\\$25$ each, take $5$ units of shelf space, and earn a profit of $\\$7$ each. Every item bought is sold. What is the largest total profit the stall can make, in dollars?',
    choices: ['$114$', '$118$', '$121$', '$122$', '$140$'],
    answer: 1,
    solution:
      'With $p$ planters and $l$ lanterns the budget gives $40p + 25l \\le 500$ and the shelves give $2p + 5l \\le 50$, and the profit is $9p + 7l$. The two limits are both exactly met at $p = \\frac{25}{3}$, $l = \\frac{20}{3}$, where the profit would be about $121.67$, but items come whole, so search the whole-number points near the budget line: $p = 10$, $l = 4$ spends exactly $\\$500$, uses $40$ shelf units and earns $90 + 28 = 118$; $p = 9$, $l = 5$ earns $116$; $p = 11$, $l = 2$ earns $113$; $p = 7$, $l = 7$ earns $112$; and no other allowed pair beats $118$. The choice $114$ rounds the crossing point down to $8$ planters and $6$ lanterns. The choice $121$ is $8$ planters and $7$ lanterns, which needs $51$ shelf units, one more than there are. The choice $122$ rounds the crossing’s profit itself, a point that cannot be stocked. The choice $140$ ignores the shelves and buys $20$ lanterns, which would take $100$ units of space.',
    topic: 'algebra',
    chapter: 9,
  },
  {
    q: 'Ten friends each pick a different positive whole number, and the ten numbers add up to $130$. What is the smallest that the largest of the ten numbers could possibly be?',
    choices: ['$13$', '$14$', '$17$', '$18$', '$85$'],
    answer: 3,
    solution:
      'If the largest number is $M$, the ten different numbers can be at most $M, M - 1, \\ldots, M - 9$, whose total is $10M - 45$. For the sum to reach $130$ we need $10M - 45 \\ge 130$, so $M \\ge 17.5$, and $M$ is a whole number, so $M \\ge 18$. A largest of $18$ really can happen: $10, 11, \\ldots, 18$ add to $126$, and adding $4$ makes ten different numbers with sum $130$. The choice $13$ is the average, a bound that ignores the numbers having to differ. The choice $14$ rounds the average up, but ten different numbers no bigger than $14$ add to at most $95$. The choice $17$ rounds $17.5$ the wrong way, and ten different numbers no bigger than $17$ add to at most $125$. The choice $85$ answers the opposite question: it is what the largest must be when the other nine are as small as possible, $1$ through $9$.',
    topic: 'number theory',
    chapter: 9,
  },
  {
    q: 'A surveyor’s line $4x + 9y = 72$ cuts a triangle off the corner formed by the two axes, as shown. A tree is to be planted at every point with whole-number coordinates that lies strictly inside the triangle, touching neither the line nor either axis. How many trees are planted?',
    fig: {
      view: [-1.5, -1.5, 19.5, 9.5],
      grid: true,
      elems: [
        { t: 'poly', pts: [[0, 0], [18, 0], [0, 8]], fill: false },
      ],
    },
    choices: ['$59$', '$60$', '$72$', '$84$', '$87$'],
    answer: 0,
    solution:
      'Go column by column. For a whole number $x$ from $1$ to $17$, the points inside have $y \\ge 1$ and $9y < 72 - 4x$, so $y$ runs up to the largest whole number below $\\frac{72 - 4x}{9}$. That gives $7, 7, 6, 6, 5, 5, 4, 4$ for $x = 1$ to $8$; at $x = 9$ the line passes exactly through $(9, 4)$, so only $3$ points count; then $3, 3, 2, 2, 1, 1, 0, 0$ for $x = 10$ to $17$. The total is $7 + 7 + 6 + 6 + 5 + 5 + 4 + 4 + 3 + 3 + 3 + 2 + 2 + 1 + 1 = 59$. The choice $60$ counts the point $(9, 4)$, which sits on the line. The choice $72$ is the triangle’s area, $\\frac{1}{2} \\cdot 18 \\cdot 8$. The choice $84$ also plants the $25$ points that lie on the two axes, and $87$ counts every whole-number point of the triangle, line and axes included.',
    topic: 'counting',
    chapter: 8,
  },
  {
    q: 'An escalator carries Mira upward while she walks up it at a steady pace, and she counts $18$ steps passing under her feet before she reaches the top. The next day she runs up the same moving escalator at exactly twice her walking pace and counts $27$ steps. How many steps of the escalator are visible at any moment?',
    choices: ['$36$', '$45$', '$54$', '$63$', '$81$'],
    answer: 2,
    solution:
      'Let $N$ be the number of visible steps and suppose the escalator moves $k$ steps in the time Mira walks one step. Walking, she climbs $18$ steps while the escalator carries her past $18k$ more, so $N = 18 + 18k$. Running at twice the pace, each of her $27$ steps takes half as long, so the escalator moves only $\\frac{k}{2}$ per step and $N = 27 + 13.5k$. Then $18 + 18k = 27 + 13.5k$ gives $4.5k = 9$, so $k = 2$ and $N = 18 + 36 = 54$. The choice $36$ assumes the escalator moves exactly as fast as she walks. The choice $45$ simply adds her two counts. The choice $63$ is $27 + 36$, pairing the runner’s count with the walker’s escalator share. The choice $81$ is $27 + 54$, forgetting that running halves the time the escalator has to move.',
    topic: 'rates',
    chapter: 7,
  },
]

export default {
  id: 'intro-algebra-cp3',
  book: 'intro-algebra',
  number: 3,
  after: 9,
  covers: [1, 9],
  title: 'Fence Lines',
  blurb: 'Wires, fences and hired crews that each hide a line or a rate, a locker code that gives itself away when reversed, and a closing stretch where the obvious corner is never quite the best whole-number spot.',
  minutes: 25,
  problems,
}
