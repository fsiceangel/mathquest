// Introduction to Algebra — Checkpoint 5: sits after chapter 15 and draws on chapters 1–15.
// All problems, figures, and solutions are original MathQuest content.

const problems = [
  // ---- Band A ----
  {
    q: 'The map shows a lawn sprinkler at $S(2, 1)$ that waters every point of the lawn within $5$ meters of it, with one grid unit equal to one meter. Five flower beds sit at $A(-2, -1)$, $B(7, 3)$, $C(-3, 2)$, $D(6, -3)$ and $E(3, 6)$. Which bed gets watered?',
    fig: {
      view: [-5, -5, 9, 8],
      grid: true,
      elems: [
        { t: 'point', p: [2, 1], label: 'S', dx: 8, dy: 12 },
        { t: 'point', p: [-2, -1], label: 'A', dx: -8, dy: 10 },
        { t: 'point', p: [7, 3], label: 'B', dx: 8, dy: -6 },
        { t: 'point', p: [-3, 2], label: 'C', dx: -8, dy: -6 },
        { t: 'point', p: [6, -3], label: 'D', dx: 8, dy: 6 },
        { t: 'point', p: [3, 6], label: 'E', dx: 8, dy: -6 },
      ],
    },
    choices: ['$A$', '$B$', '$C$', '$D$', '$E$'],
    answer: 0,
    solution:
      'A bed is watered when its squared distance from $S$ is at most $5^2 = 25$, and squared distances need no roots. For $A$, the gaps are $4$ and $2$, so the squared distance is $16 + 4 = 20 \\le 25$: bed $A$ is watered. Each of the other beds is within $5$ of $S$ in the horizontal direction and within $5$ in the vertical direction, which is the trap of checking each coordinate on its own. $B$ is $5$ across and $2$ up, giving $25 + 4 = 29$; $C$ is $5$ across and $1$ up, giving $26$; $D$ is $4$ across and $4$ down, giving $32$; and $E$ is $1$ across and $5$ up, giving $1 + 25 = 26$. All four exceed $25$, so a box around the sprinkler wrongly waters every one of them, and only the sum of the two squares tells the truth.',
    topic: 'geometry',
    chapter: 14,
  },
  {
    q: 'In a hotel atrium, a tennis ball is tossed straight up from a balcony $4$ meters above the floor. Its height above the floor $t$ seconds later is $4 + vt - 5t^2$ meters, where $v$ is the launch speed in meters per second. The ball just grazes the atrium ceiling, $9$ meters above the floor, touching it at exactly one instant without passing through it. What is $v$?',
    choices: ['$5$', '$5\\sqrt{2}$', '$4\\sqrt{5}$', '$10$', '$6\\sqrt{5}$'],
    answer: 3,
    solution:
      'The ball is at ceiling height when $4 + vt - 5t^2 = 9$, that is, when $5t^2 - vt + 5 = 0$. Touching the ceiling at exactly one instant means this equation has exactly one solution, so its discriminant is zero: $v^2 - 4 \\cdot 5 \\cdot 5 = 0$, giving $v^2 = 100$ and $v = 10$. The choice $5$ drops the factor $4$ from the discriminant and solves $v^2 = 25$; $5\\sqrt{2}$ uses $v^2 = 2 \\cdot 5 \\cdot 5$, halving it instead; $4\\sqrt{5}$ measures the climb as the balcony height $4$ rather than the $5$ meters from balcony to ceiling, solving $v^2 = 80$; and $6\\sqrt{5}$ measures it from the floor, using $9$ and solving $v^2 = 180$.',
    topic: 'rates',
    chapter: 13,
  },
  {
    q: 'A pottery studio that fires $n$ bowls in a day makes a profit of $n(36 - n) - 275$ dollars that day, a loss when this is negative. For how many whole numbers $n$ does the studio make a positive profit?',
    choices: ['$13$', '$14$', '$15$', '$25$', '$36$'],
    answer: 0,
    solution:
      'The profit is $-n^2 + 36n - 275$, which is zero when $n^2 - 36n + 275 = 0$, and this factors as $(n - 11)(n - 25) = 0$. A downward parabola is positive strictly between its roots, so the profitable days are $n = 12, 13, \\ldots, 24$, which is $24 - 12 + 1 = 13$ values. One value inside and one outside confirm it: $n = 18$ gives $18 \\cdot 18 - 275 = 49 > 0$, while $n = 11$ gives exactly $0$, break-even rather than profit. Counting one of $n = 11$ and $n = 25$ as profitable gives $14$, counting both gives $15$, $25$ is the larger root itself, and $36$ counts the values $n = 1, 2, \\ldots, 36$ for which $n(36 - n)$ is not negative, ignoring the $275$ entirely.',
    topic: 'counting',
    chapter: 15,
  },
  // ---- Band B ----
  {
    q: 'A footbridge over a stream is a parabolic arch whose feet rest on the banks at $(0, 0)$ and $(24, 0)$, with $x$ measured in meters along the stream and $y$ the height above the water, as shown. The arch is $18$ meters tall at its highest point. A lamp hangs from the arch directly above the point $x = 4$. How many meters above the water is the lamp?',
    fig: {
      view: [-2, -3, 26, 21],
      elems: [
        { t: 'seg', a: [-2, 0], b: [26, 0] },
        { t: 'parabola', a: -0.125, b: 3, c: 0 },
        { t: 'seg', a: [12, 0], b: [12, 18], dash: true },
        { t: 'label', p: [12, 9], text: '18', dx: 12, dy: 4 },
        { t: 'seg', a: [4, 0], b: [4, 10], dash: true },
        { t: 'point', p: [4, 10], label: '?', dx: -10, dy: -4 },
        { t: 'label', p: [0, 0], text: '0', dx: 0, dy: 14 },
        { t: 'label', p: [4, 0], text: '4', dx: 0, dy: 14 },
        { t: 'label', p: [24, 0], text: '24', dx: 0, dy: 14 },
      ],
    },
    choices: ['$6$', '$10$', '$16$', '$18$', '$80$'],
    answer: 1,
    solution:
      'Since the arch meets the water at $x = 0$ and $x = 24$, its equation has the form $y = a \\cdot x(x - 24)$, and the peak sits halfway between the feet, at $x = 12$: $a \\cdot 12 \\cdot (-12) = 18$ gives $a = -\\frac{1}{8}$. At $x = 4$, $y = -\\frac{1}{8} \\cdot 4 \\cdot (-20) = 10$, so the lamp hangs $10$ meters above the water. Treating the arch as a straight ramp from the foot to the peak gives $\\frac{4}{12} \\cdot 18 = 6$. Writing the vertex form but measuring the offset from the foot instead of from the axis of symmetry, $18 - \\frac{1}{8} \\cdot 4^2 = 16$, is the choice $16$. The choice $18$ is the peak itself, and $80$ is $x(24 - x)$ at $x = 4$ with the scale factor $a$ forgotten.',
    topic: 'geometry',
    chapter: 14,
  },
  {
    q: 'A rectangular rug has an area of $12$ square meters, and its longer side measures $3 + \\sqrt{3}$ meters. A fringe is to be sewn along all four edges. What is the exact length of the fringe, in meters?',
    choices: ['$6 - 2\\sqrt{3}$', '$9 - \\sqrt{3}$', '$18 - 2\\sqrt{3}$', '$18 + 6\\sqrt{3}$', '$14 + 10\\sqrt{3}$'],
    answer: 2,
    solution:
      'The shorter side is $\\frac{12}{3 + \\sqrt{3}}$; multiplying top and bottom by $3 - \\sqrt{3}$ turns the denominator into $9 - 3 = 6$, so the side is $\\frac{12(3 - \\sqrt{3})}{6} = 6 - 2\\sqrt{3}$ meters, about $2.54$, which is indeed the shorter one. The fringe is the perimeter, $2\\left[(3 + \\sqrt{3}) + (6 - 2\\sqrt{3})\\right] = 2(9 - \\sqrt{3}) = 18 - 2\\sqrt{3}$. The choice $6 - 2\\sqrt{3}$ stops at the missing side, and $9 - \\sqrt{3}$ is the sum of two adjacent sides, half the perimeter. Multiplying top and bottom by $3 + \\sqrt{3}$ instead of the conjugate, and still dividing by $6$, produces a side of $6 + 2\\sqrt{3}$ and a fringe of $18 + 6\\sqrt{3}$. Splitting the division term by term, $\\frac{12}{3} + \\frac{12}{\\sqrt{3}} = 4 + 4\\sqrt{3}$, gives a fringe of $14 + 10\\sqrt{3}$.',
    topic: 'algebra',
    chapter: 11,
  },
  {
    q: 'A robot beetle starts at the point $(3, 0)$ on a tabletop grid. Every second, its position $(x, y)$, read as the complex number $x + yi$, is multiplied by $1 + i$ to give its new position, so the beetle winds outward in a spiral. After how many seconds is the beetle first more than $60$ units from the origin?',
    choices: ['$5$', '$8$', '$9$', '$12$', '$41$'],
    answer: 2,
    solution:
      'Multiplying by $1 + i$ multiplies the distance from the origin by $|1 + i| = \\sqrt{1 + 1} = \\sqrt{2}$, so after $n$ seconds the beetle is $3(\\sqrt{2})^n$ from the origin, and every two seconds the distance doubles: $3, 6, 12, 24, 48$ after $0, 2, 4, 6, 8$ seconds. At $8$ seconds it is $48$ away, still short; at $9$ seconds it is $48\\sqrt{2} \\approx 67.9$ away, past $60$. Treating $1 + i$ as if it doubled the distance every second, $3 \\cdot 2^n > 60$, gives $5$. Solving $3 \\cdot 2^{n/2} > 60$ and rounding $n \\approx 8.6$ down, or stopping at the $48$ that is nearly there, gives $8$. Forgetting that the beetle starts $3$ from the origin, $(\\sqrt{2})^n > 60$, needs $n = 12$. Adding $\\sqrt{2}$ to the distance each second instead of multiplying by it, $3 + n\\sqrt{2} > 60$, gives $41$.',
    topic: 'patterns',
    chapter: 12,
  },
  {
    q: 'A geocache is buried at the only point $(x, y)$ of a park for which $x^2 + y^2 + 6x + 25 = 8y$. The lock on the cache opens with the code $x + y$. What is the code?',
    choices: ['$-7$', '$-1$', '$1$', '$5$', '$7$'],
    answer: 2,
    solution:
      'Bring everything to one side and complete two squares: $x^2 + 6x + 9 + y^2 - 8y + 16 = 0$, since $9 + 16 = 25$, so $(x + 3)^2 + (y - 4)^2 = 0$. Two squares add to zero only when both are zero, so $x = -3$ and $y = 4$ is the single point, and the code is $x + y = 1$. Taking both shifts as negative, $(-3, -4)$, gives $-7$; reading the squares with the signs reversed, $x = 3$ and $y = -4$, gives $-1$; $5$ is the distance of the point from the origin, $\\sqrt{9 + 16}$, the wrong quantity; and taking both shifts as positive, $(3, 4)$, gives $7$.',
    topic: 'logic',
    chapter: 15,
  },
  // ---- Band C ----
  {
    q: 'The two solutions of $x^2 - kx + 40 = 0$ are the ages, in whole years, of Mira and her brother, who is $3$ years older than she is. What is $k$?',
    choices: ['$-13$', '$5$', '$8$', '$13$', '$40$'],
    answer: 3,
    solution:
      'The product of the two solutions is $40$ and their sum is $k$. Let Mira be $r$ years old; then $r(r + 3) = 40$, so $r^2 + 3r - 40 = (r + 8)(r - 5) = 0$ and $r = 5$, since $r = -8$ is not an age. The ages are $5$ and $8$, so $k = 5 + 8 = 13$; as a check, $x^2 - 13x + 40 = (x - 5)(x - 8)$. The choice $-13$ takes the pair $-8$ and $-5$, which also multiply to $40$ and differ by $3$ but cannot be ages; $5$ and $8$ are the two ages themselves, from a student who found the roots and stopped; and $40$ confuses $k$ with the constant term, which is the product of the roots rather than their sum.',
    topic: 'algebra',
    chapter: 13,
  },
  {
    q: 'A garden arch follows the curve $y = 3x - \\frac{x^2}{9}$, with $x$ and $y$ in meters, its feet on the ground at $x = 0$ and $x = 27$. A straight guy-wire lies along the line $y = \\frac{4}{3}x + 6$ and passes through the arch at two points, as shown. How many meters apart are those two points?',
    fig: {
      view: [-2, -2, 29, 23],
      elems: [
        { t: 'seg', a: [-2, 0], b: [29, 0] },
        { t: 'parabola', a: -1 / 9, b: 3, c: 0 },
        { t: 'seg', a: [-1.5, 4], b: [12, 22] },
        { t: 'label', p: [11, 22], text: 'wire', dx: -14, dy: -2 },
        { t: 'point', p: [6, 14] },
        { t: 'point', p: [9, 18] },
        { t: 'label', p: [0, 0], text: '0', dx: 0, dy: 14 },
        { t: 'label', p: [27, 0], text: '27', dx: 0, dy: 14 },
      ],
    },
    choices: ['$3$', '$4$', '$5$', '$7$', '$15$'],
    answer: 2,
    solution:
      'Where the wire meets the arch, $3x - \\frac{x^2}{9} = \\frac{4}{3}x + 6$; multiplying through by $9$ gives $27x - x^2 = 12x + 54$, so $x^2 - 15x + 54 = 0$ and $(x - 6)(x - 9) = 0$. The crossings are at $x = 6$ and $x = 9$, where the wire has $y = 14$ and $y = 18$, so the points are $(6, 14)$ and $(9, 18)$; on the arch, $18 - 4 = 14$ and $27 - 9 = 18$ confirm them. Their distance is $\\sqrt{3^2 + 4^2} = 5$. The choice $3$ is only the horizontal gap between the crossings, and $4$ is only the vertical gap; $7$ adds the two gaps instead of using the Pythagorean theorem; and $15$ is the sum of the two $x$-coordinates, read off the quadratic and mistaken for a distance.',
    topic: 'geometry',
    chapter: 14,
  },
  {
    q: 'On a test track, a car traveling at $40$ km/h needs $20$ meters to stop once the brakes are applied, and the stopping distance is proportional to the square of the speed. On a road where this car must be able to stop within $45$ meters, what is the greatest speed, in km/h, at which it may travel?',
    choices: ['$50$', '$60$', '$65$', '$80$', '$90$'],
    answer: 1,
    solution:
      'Stopping distance $d$ and speed $v$ are tied by $d = cv^2$; from $20 = c \\cdot 40^2$ the constant is $c = \\frac{1}{80}$. Then $45 = \\frac{v^2}{80}$ gives $v^2 = 3600$ and $v = 60$ km/h. Equivalently, the distance grows by the factor $\\frac{45}{20} = \\frac{9}{4}$, so the speed grows by $\\sqrt{\\frac{9}{4}} = \\frac{3}{2}$. Reading the factor $2.25$ as a $25\\%$ increase gives $40 \\cdot 1.25 = 50$. Halving the $125\\%$ increase in distance to get a $62.5\\%$ increase in speed, instead of taking a square root, gives $65$. Reasoning that a distance roughly doubled means the speed doubled gives $80$. Scaling the speed by the full factor $\\frac{9}{4}$, as if distance were proportional to speed itself, gives $90$.',
    topic: 'rates',
    chapter: 7,
  },
  {
    q: 'A game board is an endless grid of points with integer coordinates. A token may be placed on a point $(x, y)$ of the board only if $x^2 + 8x + y^2 - 2y = 8$. On how many points of the board may a token be placed?',
    choices: ['$4$', '$6$', '$8$', '$10$', '$12$'],
    answer: 4,
    solution:
      'Completing both squares, $(x + 4)^2 + (y - 1)^2 = 8 + 16 + 1 = 25$: the allowed points are the lattice points on a circle of radius $5$ centered at $(-4, 1)$. Two squares adding to $25$ must be $0 + 25$, $25 + 0$, $9 + 16$ or $16 + 9$. The first two give the four points $5$ steps straight from the center: $(1, 1)$, $(-9, 1)$, $(-4, 6)$ and $(-4, -4)$. The other two give $(-4 \\pm 3, 1 \\pm 4)$ and $(-4 \\pm 4, 1 \\pm 3)$, four sign choices each, eight points. In all there are $12$. The choice $4$ counts only the points straight across from the center and misses the $3$-$4$-$5$ triangles; $6$ adds to those only the offsets $(3, 4)$ and $(4, 3)$ without their sign variants; $8$ counts the eight triangle points and misses the straight ones; and $10$ leaves out the two points directly above and below the center.',
    topic: 'counting',
    chapter: 13,
  },
  // ---- Band D ----
  {
    q: 'A cargo boat must make a $200$ km delivery run at a steady speed of $v$ km/h, which the captain may choose. While underway, fuel costs $\\frac{v^2}{2}$ dollars per hour, since the engine burns fuel faster at higher speeds, and the crew is paid $\\$200$ per hour. What is the least possible total cost of the run, in dollars?',
    choices: ['$2000$', '$4000$', '$4100$', '$5000$', '$8500$'],
    answer: 1,
    solution:
      'The run takes $\\frac{200}{v}$ hours, so the total cost is $\\frac{200}{v}\\left(\\frac{v^2}{2} + 200\\right) = 100v + \\frac{40000}{v}$. For any positive $v$, $\\left(\\sqrt{100v} - \\sqrt{\\frac{40000}{v}}\\right)^2 \\ge 0$ expands to $100v + \\frac{40000}{v} \\ge 2\\sqrt{100 \\cdot 40000} = 2 \\cdot 2000 = 4000$, with equality exactly when $100v = \\frac{40000}{v}$, that is, at $v = 20$: a $10$-hour run costing $2000$ in fuel and $2000$ in wages, $4000$ in all. The choice $2000$ is $\\sqrt{100 \\cdot 40000}$ with the factor $2$ dropped, or the fuel bill alone at the best speed, and no speed makes the whole run that cheap. The remaining choices are the cost at speeds that look reasonable but are not the balance point: $4100$ at $v = 25$, a $2500 + 1600$ split; $5000$ at both $v = 10$ and $v = 40$; and $8500$ at a fuel-saving crawl of $v = 5$, where the wages balloon to $8000$.',
    topic: 'algebra',
    chapter: 15,
  },
  {
    q: 'A puzzle card reads: “Pick an integer $n$ and work out $n^2 + 6n + 54$. If your result is a perfect square, you win.” For how many integers $n$ does the card pay out?',
    choices: ['$2$', '$3$', '$4$', '$6$', '$12$'],
    answer: 3,
    solution:
      'Complete the square: $n^2 + 6n + 54 = (n + 3)^2 + 45$. If this equals $m^2$ with $m \\ge 0$, then $m^2 - (n + 3)^2 = 45$, so $(m - n - 3)(m + n + 3) = 45$. The two factors have the same parity, since their sum is $2m$, and $45$ is odd, so every positive factor pair works: $1 \\cdot 45$, $3 \\cdot 15$ and $5 \\cdot 9$ give $m = 23, 9, 7$ with $n + 3 = \\pm 22, \\pm 6, \\pm 2$, so $n$ is one of $19, -25, 3, -9, -1, -5$, six integers; for instance $n = -5$ gives $25 - 30 + 54 = 49$. The choice $2$ counts only the positive winners $3$ and $19$, since negative $n$ are easy to forget; $3$ takes one $n$ from each factor pair, ignoring the sign of $n + 3$; $4$ counts $\\pm 3$ and $\\pm 19$, mirroring $n$ instead of $n + 3$; and $12$ also counts the negative factor pairs, which only repeat the same six values of $n$.',
    topic: 'number theory',
    chapter: 13,
  },
  {
    q: 'A circular pond sits in the corner of a walled garden and touches both walls, which lie along the positive $x$-axis and the positive $y$-axis. A fountain jet lands at the point $P(8, 1)$ on the edge of the pond. Two different ponds fit this description, as shown, and the gardener wants to know how much lining the two would need together. What is the combined area of the two ponds, in square units?',
    fig: {
      view: [-1, -1, 27, 27],
      elems: [
        { t: 'seg', a: [-1, 0], b: [27, 0] },
        { t: 'seg', a: [0, -1], b: [0, 27] },
        { t: 'circle', c: [5, 5], r: 5 },
        { t: 'circle', c: [13, 13], r: 13 },
        { t: 'point', p: [8, 1], label: 'P', dx: 10, dy: 12 },
      ],
    },
    choices: ['$25\\pi$', '$65\\pi$', '$162\\pi$', '$169\\pi$', '$194\\pi$'],
    answer: 4,
    solution:
      'A circle touching both walls in the first quadrant has center $(r, r)$ and radius $r$. Passing through $(8, 1)$ means $(r - 8)^2 + (r - 1)^2 = r^2$, which expands to $r^2 - 18r + 65 = 0$. The two radii $r_1$ and $r_2$ are the roots of this quadratic, so $r_1 + r_2 = 18$ and $r_1 r_2 = 65$ straight from the coefficients, and the combined area is $\\pi(r_1^2 + r_2^2) = \\pi\\left[(r_1 + r_2)^2 - 2r_1 r_2\\right] = \\pi(324 - 130) = 194\\pi$, with no need to find either pond. The roots happen to be $5$ and $13$, and $3^2 + 4^2 = 25$ and $5^2 + 12^2 = 169$ confirm them. The choice $25\\pi$ is the smaller pond alone, from stopping after the first root; $65\\pi$ dresses the product of the radii, the constant term, as an area; $162\\pi$ gives both ponds the average radius $9$, so $2 \\cdot 81$; and $169\\pi$ is the larger pond alone.',
    topic: 'geometry',
    chapter: 14,
  },
  {
    q: 'Among all real numbers $k$ for which the equation $x^2 - kx + 3k - 5 = 0$ has real solutions $r$ and $s$ (possibly equal), which $k$ makes $r^2 + s^2$ as small as possible?',
    choices: ['$1$', '$2$', '$3$', '$6$', '$10$'],
    answer: 1,
    solution:
      'The solutions satisfy $r + s = k$ and $rs = 3k - 5$, so $r^2 + s^2 = (r + s)^2 - 2rs = k^2 - 6k + 10$, a parabola in $k$ with its vertex at $k = 3$. But the solutions must be real: the discriminant $k^2 - 4(3k - 5) = k^2 - 12k + 20 = (k - 2)(k - 10)$ must be at least $0$, so $k \\le 2$ or $k \\ge 10$, and $k = 3$ is forbidden, its discriminant being $-7$. On $k \\le 2$ the expression $k^2 - 6k + 10$ decreases as $k$ moves toward the vertex, so its least value there is at $k = 2$, giving $r^2 + s^2 = 2$; on $k \\ge 10$ it only grows from $50$. So $k = 2$, where the equation is $x^2 - 2x + 1 = 0$ with $r = s = 1$. The choice $1$ reports that repeated root instead of $k$; $3$ is the vertex, taken without checking that the solutions exist; $6$ is the midpoint of $2$ and $10$, the vertex of the discriminant rather than of $r^2 + s^2$; and $10$ is the other edge of the allowed region, where $r^2 + s^2$ is $50$.',
    topic: 'algebra',
    chapter: 13,
  },
]

export default {
  id: 'intro-algebra-cp5',
  book: 'intro-algebra',
  number: 5,
  after: 15,
  covers: [1, 15],
  title: 'Grazing the Ceiling',
  blurb: 'Sprinklers, arches and a spiraling beetle each hide a square somewhere, and the closing stretch asks not only for the turning point but whether it is even allowed.',
  minutes: 25,
  problems,
}
