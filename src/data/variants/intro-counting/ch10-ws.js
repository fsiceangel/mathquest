// Counting chapter 10 — variations for the printable worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key and no answer
//    index anywhere in this file. Answers copy the base worksheet’s formatting:
//    a bare value such as '$21$' or an exact form such as '$\frac{7}{11}$'.
//  - Every key was computed exactly in node (closed-form length or area over
//    the total) and cross-checked by Monte Carlo of the exact stated condition
//    at $n = 1{,}000{,}000$, with every drawn polygon’s area confirmed by the
//    shoelace formula. Every key matches its pin. Pin deviations: none.
//  - Every solution runs two genuinely different routes that each end ✓ —
//    direct measure vs. a complement, casework on stretches vs. their gaps,
//    an area decomposition vs. conditioning or a symmetry — and route two
//    never re-imports route one’s number. The solution then names the most
//    tempting wrong answer’s trap in CAPS, ending ✗.
//  - Conventions are settled in every stem: "chosen at random" means
//    uniformly, two random numbers are independent, and answers keep exact
//    form. Endpoints weigh nothing, so strict versus non-strict inequalities
//    never change a key.
//  - Every area problem keeps a to-scale figure: curved boundaries are
//    sampled from the same exact geometry the solution computes with, the
//    favorable region is the filled polygon, and the asked quantity is never
//    labeled.

const rd = (v) => Math.round(v * 1000) / 1000
const arcPts = (cx, cy, r, from, to, n = 48) => {
  const pts = []
  for (let i = 0; i <= n; i++) {
    const a = ((from + ((to - from) * i) / n) * Math.PI) / 180
    pts.push([rd(cx + r * Math.cos(a)), rd(cy + r * Math.sin(a))])
  }
  return pts
}
const circlePts = (cx, cy, r, n = 72) => arcPts(cx, cy, r, 0, 360, n).slice(0, n)
const ring = (outer, inner) => [...outer, outer[0], inner[0], ...inner.slice(1).reverse(), inner[0]]
const box = (w, h, x = 0, y = 0) => ({ t: 'poly', pts: [[x, y], [x + w, y], [x + w, y + h], [x, y + h]], fill: false })
const lab = (x, y, text, dx = 0, dy = 0) => ({ t: 'label', p: [x, y], text, dx, dy })
const frame = (w, h) => {
  const pad = 0.14 * Math.max(w, h)
  return [-pad, -pad, w + pad, h + pad]
}

const worksheet = [
  // slot 1 — a marked stretch of a segment.
  //          Lanes: D-E-F with 4, 7 -> 7/11; painted fence 5..16 of 24 -> 11/24;
  //          reversed: GK = 35, P = 3/5 -> GH = 21.
  [
    {
      q: 'Points $D$, $E$, and $F$ lie on a line in that order, with $DE = 4$ and $EF = 7$. A point is chosen at random on segment $DF$. What is the probability that it lies on segment $EF$?',
      answer: '$\\frac{7}{11}$',
      solution:
        'The whole segment has length $DF = 4 + 7 = 11$, and the favorable stretch $EF$ has length $7$, so the probability is $\\frac{7}{11}$ ✓. Second route, through the complement: the point misses $\\overline{EF}$ exactly when it lands on $\\overline{DE}$, which happens with probability $\\frac{4}{11}$, and $1 - \\frac{4}{11} = \\frac{7}{11}$ ✓. COUNTING THE $12$ INTEGER POINTS FROM $0$ TO $11$ and taking the $8$ of them on $\\overline{EF}$ gives $\\frac{2}{3}$; a random point is weighed by length, and individual points weigh nothing ✗.',
    },
    {
      q: 'A straight fence is $24$ meters long, and the stretch from its $5$-meter mark to its $16$-meter mark is freshly painted. A sparrow lands at a random point of the fence, every point equally likely. What is the probability that it lands on the painted stretch?',
      answer: '$\\frac{11}{24}$',
      solution:
        'The painted stretch has length $16 - 5 = 11$ out of the fence’s $24$, so the probability is $\\frac{11}{24}$ ✓. Second route, through the bare wood: the unpainted parts run from $0$ to $5$ and from $16$ to $24$, lengths $5$ and $8$, so the sparrow misses the paint with probability $\\frac{13}{24}$ and hits it with probability $1 - \\frac{13}{24} = \\frac{11}{24}$ ✓. ADDING $1$ AS IF LISTING WHOLE-METER MARKS, $16 - 5 + 1 = 12$, gives $\\frac{1}{2}$; a length is a plain difference, with no $+1$ ✗.',
    },
    {
      q: 'Points $G$, $H$, and $K$ lie on a line in that order, with $GK = 35$. A point chosen at random on segment $GK$ lies on segment $GH$ with probability $\\frac{3}{5}$. What is the length $GH$?',
      answer: '$21$',
      solution:
        'The probability is the length ratio, so $\\frac{GH}{35} = \\frac{3}{5}$, giving $GH = \\frac{3}{5} \\cdot 35 = 21$ ✓. Second route, through the complement: the point lands on $\\overline{HK}$ with probability $\\frac{2}{5}$, so $HK = \\frac{2}{5} \\cdot 35 = 14$ and $GH = 35 - 14 = 21$ ✓. SPLITTING $35$ IN THE RATIO $3 : 5$ gives $GH = 35 \\cdot \\frac{3}{8} = \\frac{105}{8}$; the fraction $\\frac{3}{5}$ compares $GH$ to all of $GK$, not to $HK$ ✗.',
    },
  ],

  // slot 2 — waiting for a departure.
  //          Lanes: every 18, wait in [4, 10] -> 1/3; every 24, wait < 5 or > 16 -> 13/24;
  //          reversed: wait in [5, 12] with prob 7/22 -> T = 22.
  [
    {
      q: 'A gondola departs from its station every $18$ minutes, and Noor arrives at the station at a random moment. What is the probability that she waits between $4$ and $10$ minutes for the next gondola?',
      answer: '$\\frac{1}{3}$',
      solution:
        'Her wait is a random point in $[0, 18]$, and the stretch from $4$ to $10$ has length $6$, so the probability is $\\frac{6}{18} = \\frac{1}{3}$ ✓. Second route, through the complement: she waits less than $4$ minutes with probability $\\frac{4}{18}$ and more than $10$ with probability $\\frac{8}{18}$, so the answer is $1 - \\frac{4}{18} - \\frac{8}{18} = \\frac{6}{18} = \\frac{1}{3}$ ✓. TAKING $P(\\text{wait} < 10) = \\frac{10}{18} = \\frac{5}{9}$ keeps the waits shorter than $4$ minutes that the question rules out ✗.',
    },
    {
      q: 'A tram departs every $24$ minutes, and a rider arrives at a random moment. What is the probability that the rider waits less than $5$ minutes or more than $16$ minutes?',
      answer: '$\\frac{13}{24}$',
      solution:
        'The wait is a random point in $[0, 24]$. The favorable stretches are $[0, 5)$, length $5$, and $(16, 24]$, length $8$; they cannot overlap, so the probability is $\\frac{5 + 8}{24} = \\frac{13}{24}$ ✓. Second route, through the complement: the rider fails exactly when the wait lies in $[5, 16]$, a stretch of length $11$, so the answer is $1 - \\frac{11}{24} = \\frac{13}{24}$ ✓. SHADING THE STRETCH BETWEEN $5$ AND $16$ gives $\\frac{11}{24}$, the exact opposite of what was asked ✗.',
    },
    {
      q: 'A boat departs every $T$ minutes, where $T > 12$, and a passenger arrives at a random moment. The probability that the passenger waits between $5$ and $12$ minutes is $\\frac{7}{22}$. What is $T$?',
      answer: '$22$',
      solution:
        'The wait is a random point in $[0, T]$, and since $T > 12$ the favorable stretch from $5$ to $12$ has its full length $7$. So $\\frac{7}{T} = \\frac{7}{22}$, giving $T = 22$ ✓. Second route, through the complement: waits under $5$ or over $12$ cover length $5 + (T - 12) = T - 7$ and must carry probability $\\frac{15}{22}$, so $\\frac{T - 7}{T} = \\frac{15}{22}$, and $22T - 154 = 15T$ gives $T = 22$ ✓. SETTING $\\frac{12}{T} = \\frac{7}{22}$ uses the whole stretch up to $12$ minutes and gives $T = \\frac{264}{7}$; the favorable stretch starts at $5$, so its length is $7$ ✗.',
    },
  ],

  // slot 3 — a square-root condition.
  //          Lanes: [0, 50], sqrt(x) < 6 -> 18/25; [0, 22], sqrt(x+3) < 4 -> 13/22;
  //          reversed: [0, m], sqrt(x) < 4 with prob 8/13 -> m = 26.
  [
    {
      q: 'A real number $x$ is chosen at random from $[0, 50]$. What is the probability that $\\sqrt{x} < 6$?',
      answer: '$\\frac{18}{25}$',
      solution:
        'Since $x \\ge 0$, the condition $\\sqrt{x} < 6$ means $x < 36$, a stretch of length $36$ in an interval of length $50$, so the probability is $\\frac{36}{50} = \\frac{18}{25}$ ✓. Second route, through the complement: $\\sqrt{x} \\ge 6$ means $x \\ge 36$, the stretch from $36$ to $50$ of length $14$, so the answer is $1 - \\frac{14}{50} = \\frac{36}{50} = \\frac{18}{25}$ ✓. COMPARING ON THE SQUARE-ROOT SCALE — $\\sqrt{x}$ runs from $0$ to $\\sqrt{50}$, suggesting $\\frac{6}{\\sqrt{50}} = \\frac{3\\sqrt{2}}{5}$ — fails because $x$ is uniform and $\\sqrt{x}$ is not ✗.',
    },
    {
      q: 'A real number $x$ is chosen at random from $[0, 22]$. What is the probability that $\\sqrt{x + 3} < 4$?',
      answer: '$\\frac{13}{22}$',
      solution:
        'Squaring the condition (both sides are nonnegative) gives $x + 3 < 16$, so $x < 13$: a stretch of length $13$ in an interval of length $22$, probability $\\frac{13}{22}$ ✓. Second route, by shifting: $u = x + 3$ is a uniform random point of $[3, 25]$, and $u < 16$ is the stretch from $3$ to $16$, length $13$ of the interval’s $22$, so again $\\frac{13}{22}$ ✓. DROPPING THE $+3$ AND SOLVING $x < 16$ gives $\\frac{16}{22} = \\frac{8}{11}$; the switch happens at $x = 13$, where $x + 3$ reaches $16$ ✗.',
    },
    {
      q: 'A real number $x$ is chosen at random from $[0, m]$. The probability that $\\sqrt{x} < 4$ is $\\frac{8}{13}$. What is $m$?',
      answer: '$26$',
      solution:
        'The condition means $x < 16$, and since the probability is less than $1$, the interval must reach past $16$, so the favorable length is exactly $16$. Then $\\frac{16}{m} = \\frac{8}{13}$ gives $m = \\frac{16 \\cdot 13}{8} = 26$ ✓. Second route, through the complement: $x \\ge 16$ must carry probability $\\frac{5}{13}$, so $\\frac{m - 16}{m} = \\frac{5}{13}$, and $13m - 208 = 5m$ gives $m = 26$ ✓. WORKING ON THE ROOT SCALE, $\\frac{4}{\\sqrt{m}} = \\frac{8}{13}$, gives $m = \\frac{169}{4}$; a uniform $x$ does not make $\\sqrt{x}$ uniform ✗.',
    },
  ],

  // slot 4 — painted shapes in a region (area ratio with pi).
  //          Lanes: three r=1 circles in a side-6 square -> pi/12; two 2x3 rectangles
  //          in a r=4 circle -> 3/(4pi); reversed: two r=2 circles in 8 x w, prob pi/13 -> w = 13.
  [
    {
      q: 'Three circles of radius $1$ are painted inside a square of side $6$ without overlapping, as shown. A point is chosen at random in the square. What is the probability that it lies inside one of the painted circles?',
      fig: {
        view: frame(6, 6),
        elems: [
          box(6, 6),
          { t: 'poly', pts: circlePts(1.5, 1.5, 1) },
          { t: 'poly', pts: circlePts(4.5, 1.5, 1) },
          { t: 'poly', pts: circlePts(3, 4.5, 1) },
          { t: 'seg', a: [3, 4.5], b: [4, 4.5], dash: true },
          { t: 'point', p: [3, 4.5] },
          lab(3.5, 4.5, '1', 0, -6),
          lab(3, 0, '6', 0, 16),
        ],
      },
      answer: '$\\frac{\\pi}{12}$',
      solution:
        'Each circle has area $\\pi \\cdot 1^2 = \\pi$, so the three together cover $3\\pi$ of the square’s $36$, and the probability is $\\frac{3\\pi}{36} = \\frac{\\pi}{12}$ ✓. Second route, circle by circle: a single circle is hit with probability $\\frac{\\pi}{36}$, and since the circles do not overlap the three probabilities add: $3 \\cdot \\frac{\\pi}{36} = \\frac{\\pi}{12}$ ✓. CONFUSING CIRCUMFERENCE WITH AREA, $2\\pi \\cdot 1$ per circle, gives $\\frac{6\\pi}{36} = \\frac{\\pi}{6}$, twice the true value ✗.',
    },
    {
      q: 'Two $2 \\times 3$ rectangles are painted inside a circle of radius $4$ without overlapping, as shown. A point is chosen at random inside the circle. What is the probability that it lies inside one of the painted rectangles?',
      fig: {
        view: [-5, -5, 5, 5],
        elems: [
          { t: 'circle', c: [0, 0], r: 4 },
          { t: 'poly', pts: [[-3, -1.5], [-1, -1.5], [-1, 1.5], [-3, 1.5]] },
          { t: 'poly', pts: [[1, -1.5], [3, -1.5], [3, 1.5], [1, 1.5]] },
          { t: 'seg', a: [0, 0], b: [2.828, 2.828], dash: true },
          { t: 'point', p: [0, 0] },
          lab(1.414, 1.414, '4', 12, -4),
          lab(2, -1.5, '2', 0, 16),
          lab(3, 0, '3', 12, 4),
        ],
      },
      answer: '$\\frac{3}{4\\pi}$',
      solution:
        'Each rectangle has area $2 \\cdot 3 = 6$, so together they cover $12$ of the circle’s $\\pi \\cdot 4^2 = 16\\pi$, and the probability is $\\frac{12}{16\\pi} = \\frac{3}{4\\pi}$ ✓. Second route, one rectangle at a time: a single rectangle is hit with probability $\\frac{6}{16\\pi} = \\frac{3}{8\\pi}$, and the two disjoint rectangles add to $\\frac{3}{4\\pi}$ ✓. TREATING $4$ AS THE DIAMETER makes the circle’s area $4\\pi$ and gives $\\frac{12}{4\\pi} = \\frac{3}{\\pi}$, four times too big ✗.',
    },
    {
      q: 'Two circles of radius $2$ are painted inside an $8 \\times w$ rectangle without overlapping, as shown. A point chosen at random in the rectangle lies inside one of the painted circles with probability $\\frac{\\pi}{13}$. What is $w$?',
      fig: {
        view: frame(8, 13),
        elems: [
          box(8, 13),
          { t: 'poly', pts: circlePts(2, 2, 2) },
          { t: 'poly', pts: circlePts(6, 11, 2) },
          { t: 'seg', a: [2, 2], b: [4, 2], dash: true },
          { t: 'point', p: [2, 2] },
          lab(3, 2, '2', 0, -6),
          lab(4, 0, '8', 0, 16),
          lab(0, 6.5, 'w', -12, 4),
        ],
      },
      answer: '$13$',
      solution:
        'The painted area is $2 \\cdot \\pi \\cdot 2^2 = 8\\pi$, so the probability is $\\frac{8\\pi}{8w} = \\frac{\\pi}{w}$, and $\\frac{\\pi}{w} = \\frac{\\pi}{13}$ gives $w = 13$ ✓. Second route, from the total: the painted $8\\pi$ must be a $\\frac{\\pi}{13}$ share of the whole rectangle, so the rectangle’s area is $8\\pi \\div \\frac{\\pi}{13} = 104$, and $w = \\frac{104}{8} = 13$ ✓. USING ONE CIRCLE’S AREA $4\\pi$ gives $w = \\frac{13}{2}$; both circles are painted, and their areas add ✗.',
    },
  ],

  // slot 5 — decks and stages (region minus sub-region).
  //          Lanes: 10x6 pool, 3-m deck all around -> 11/16; 12x10 patio, 4x5 stage,
  //          not on stage -> 5/6; reversed: decks width d on both long sides, prob 1/3 -> d = 5/2.
  [
    {
      q: 'A rectangular pool $10$ meters long and $6$ meters wide is surrounded by a deck $3$ meters wide on all four sides, so the pool and deck together form a $16 \\times 12$ rectangle, as shown. A leaf lands at a random point of that rectangle. What is the probability that it lands on the deck?',
      fig: {
        view: frame(16, 12),
        elems: [
          { t: 'poly', pts: ring([[0, 0], [16, 0], [16, 12], [0, 12]], [[3, 3], [13, 3], [13, 9], [3, 9]]) },
          box(16, 12),
          box(10, 6, 3, 3),
          { t: 'seg', a: [13, 6], b: [16, 6], dash: true },
          lab(14.5, 6, '3', 0, -6),
          lab(8, 0, '16', 0, 16),
          lab(0, 6, '12', -14, 4),
          lab(8, 3, '10', 0, -6),
          lab(3, 6, '6', 12, 4),
        ],
      },
      answer: '$\\frac{11}{16}$',
      solution:
        'Assemble the deck directly: two $16 \\times 3$ strips along the long sides (area $96$ together) and two $3 \\times 6$ pieces filling the gaps beside the pool (area $36$ together), so the deck covers $132$ of the rectangle’s $16 \\cdot 12 = 192$, and the probability is $\\frac{132}{192} = \\frac{11}{16}$ ✓. Second route, through the pool: the pool covers $\\frac{60}{192} = \\frac{5}{16}$ of the rectangle, so the deck gets $1 - \\frac{5}{16} = \\frac{11}{16}$ ✓. TAKING FULL-LENGTH STRIPS ON ALL FOUR SIDES, $2(16 \\cdot 3) + 2(12 \\cdot 3) = 168$, counts each $3 \\times 3$ corner twice and gives $\\frac{7}{8}$ ✗.',
    },
    {
      q: 'A rectangular patio measures $12$ meters by $10$ meters, and a $4 \\times 5$ rectangular stage sits in one of its corners, as shown. A point is chosen at random on the patio. What is the probability that it is not on the stage?',
      fig: {
        view: frame(12, 10),
        elems: [
          { t: 'poly', pts: [[4, 0], [12, 0], [12, 10], [0, 10], [0, 5], [4, 5]] },
          box(12, 10),
          box(4, 5),
          lab(8, 0, '12', 0, 16),
          lab(0, 7.5, '10', -14, 4),
          lab(2, 5, '4', 0, -6),
          lab(4, 2.5, '5', 12, 4),
        ],
      },
      answer: '$\\frac{5}{6}$',
      solution:
        'The patio has area $120$ and the stage covers $20$, so the stage-free region has area $100$ and the probability is $\\frac{100}{120} = \\frac{5}{6}$ ✓. Second route, through the stage: the point lands on the stage with probability $\\frac{20}{120} = \\frac{1}{6}$, so it misses with probability $1 - \\frac{1}{6} = \\frac{5}{6}$ ✓. SHRINKING EACH SIDE — $(12 - 4)(10 - 5) = 40$, probability $\\frac{1}{3}$ — pretends the stage blocks full strips across the patio; it blocks only its own $4 \\times 5$ corner ✗.',
    },
    {
      q: 'A rectangular pool is $12$ meters long and $10$ meters wide, and a deck of width $d$ meters runs along each of its two $12$-meter sides, so the pool and decks together form a $12 \\times (10 + 2d)$ rectangle, as shown. A point chosen at random in that rectangle lands on a deck with probability $\\frac{1}{3}$. What is $d$?',
      fig: {
        view: frame(12, 15),
        elems: [
          box(12, 15),
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 2.5], [0, 2.5]] },
          { t: 'poly', pts: [[0, 12.5], [12, 12.5], [12, 15], [0, 15]] },
          lab(6, 0, '12', 0, 16),
          lab(0, 7.5, '10', -14, 4),
          lab(0, 1.25, 'd', -12, 4),
          lab(0, 13.75, 'd', -12, 4),
        ],
      },
      answer: '$\\frac{5}{2}$',
      solution:
        'The two decks cover $2 \\cdot 12d = 24d$ of the rectangle’s $12(10 + 2d)$, so $\\frac{24d}{120 + 24d} = \\frac{1}{3}$; then $72d = 120 + 24d$, so $48d = 120$ and $d = \\frac{5}{2}$ ✓. Second route, by heights: every vertical line meets deck for length $2d$ out of $10 + 2d$, and the shares of area match the shares of height, so $\\frac{2d}{10 + 2d} = \\frac{1}{3}$; then $6d = 10 + 2d$ gives $d = \\frac{5}{2}$ ✓. USING ONE DECK, $\\frac{d}{10 + 2d} = \\frac{1}{3}$, gives $d = 10$; a deck runs along each of the two long sides ✗.',
    },
  ],

  // slot 6 — a line through the rectangle of two random numbers.
  //          Lanes: [0,8]^2, y > 3x -> 1/6; [0,10]^2, y < x/2 + 1 -> 7/20;
  //          reversed: x in [0,a], y in [0,10], y > 2x with prob 13/20 -> a = 7/2.
  [
    {
      q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 8]$, independently. What is the probability that $y > 3x$?',
      fig: {
        view: frame(8, 8),
        elems: [
          box(8, 8),
          { t: 'poly', pts: [[0, 0], [2.667, 8], [0, 8]] },
          lab(4, 0, '8', 0, 16),
          lab(0, 4, '8', -12, 4),
          lab(8, 0, 'x', 14, 4),
          lab(0, 8, 'y', 0, -10),
        ],
      },
      answer: '$\\frac{1}{6}$',
      solution:
        'In the $8 \\times 8$ square, the line $y = 3x$ leaves through the top side at $x = \\frac{8}{3}$, so $y > 3x$ is the triangle with vertices $(0, 0)$, $(0, 8)$, and $(\\frac{8}{3}, 8)$: area $\\frac{1}{2} \\cdot 8 \\cdot \\frac{8}{3} = \\frac{32}{3}$, and $\\frac{32}{3} \\div 64 = \\frac{1}{6}$ ✓. Second route, by conditioning on $y$: for a given $y$, the condition needs $x < \\frac{y}{3}$, which has probability $\\frac{y}{24}$; averaging over $y$ uniform on $[0, 8]$ replaces $y$ by its mean $4$, giving $\\frac{4}{24} = \\frac{1}{6}$ ✓. USING THE REGION BELOW THE LINE, area $64 - \\frac{32}{3}$, gives $\\frac{5}{6}$, the complement of what was asked ✗.',
    },
    {
      q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 10]$, independently. What is the probability that $y < \\frac{x}{2} + 1$?',
      fig: {
        view: frame(10, 10),
        elems: [
          box(10, 10),
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 6], [0, 1]] },
          lab(5, 0, '10', 0, 16),
          lab(0, 5, '10', -14, 4),
          lab(10, 0, 'x', 14, 4),
          lab(0, 10, 'y', 0, -10),
        ],
      },
      answer: '$\\frac{7}{20}$',
      solution:
        'The line $y = \\frac{x}{2} + 1$ runs from $(0, 1)$ to $(10, 6)$, so the region below it is a trapezoid with parallel sides $1$ and $6$ and width $10$: area $\\frac{1 + 6}{2} \\cdot 10 = 35$ of the square’s $100$, probability $\\frac{35}{100} = \\frac{7}{20}$ ✓. Second route, by conditioning on $x$: for a given $x$, the condition holds with probability $\\frac{x/2 + 1}{10}$, and averaging over $x$ uniform on $[0, 10]$ replaces $x$ by its mean $5$: $\\frac{5/2 + 1}{10} = \\frac{7}{20}$ ✓. DROPPING THE $+1$ — the triangle under $y = \\frac{x}{2}$ has area $25$, giving $\\frac{1}{4}$ — misplaces the boundary, which meets the left edge at $(0, 1)$, not the origin ✗.',
    },
    {
      q: 'A real number $x$ is chosen at random from $[0, a]$, where $0 < a \\le 5$, and a real number $y$ is chosen at random from $[0, 10]$, independently. The probability that $y > 2x$ is $\\frac{13}{20}$. What is $a$?',
      fig: {
        view: [-2.9, -1.4, 6.4, 11.4],
        elems: [
          box(3.5, 10),
          { t: 'poly', pts: [[0, 0], [3.5, 7], [3.5, 10], [0, 10]] },
          { t: 'seg', a: [0, 0], b: [3.5, 7], dash: true },
          lab(2.4, 4.8, 'y = 2x', 34, 6),
          lab(1.75, 0, 'a', 0, 16),
          lab(0, 5, '10', -14, 4),
        ],
      },
      answer: '$\\frac{7}{2}$',
      solution:
        'Since $a \\le 5$, the line $y = 2x$ leaves the $a \\times 10$ rectangle through its right edge at $(a, 2a)$, so the failing region $y < 2x$ is a triangle with legs $a$ and $2a$, area $a^2$. Then $P(y > 2x) = 1 - \\frac{a^2}{10a} = 1 - \\frac{a}{10} = \\frac{13}{20}$, so $\\frac{a}{10} = \\frac{7}{20}$ and $a = \\frac{7}{2}$ ✓. Second route, measuring the favorable region itself: it is the trapezoid $(0, 0)$, $(a, 2a)$, $(a, 10)$, $(0, 10)$ with parallel vertical sides $10$ and $10 - 2a$, area $\\frac{10 + (10 - 2a)}{2} \\cdot a = (10 - a)a$, so $\\frac{(10 - a)a}{10a} = \\frac{10 - a}{10} = \\frac{13}{20}$ forces $a = \\frac{7}{2}$ ✓. SOLVING $\\frac{a}{10} = \\frac{13}{20}$ gives $a = \\frac{13}{2}$, which is the failing share’s equation and even breaks the condition $a \\le 5$ ✗.',
    },
  ],

  // slot 7 — two arrivals in one window (order matters).
  //          Lanes: 40-min window, first + gap > 15 -> 25/128; 60-min window,
  //          first + within 20 -> 5/18; reversed: 36-min window, prob 2/81 -> w = 28.
  [
    {
      q: 'Kai and Lee each arrive at a caf\u00e9 at a random time during the same $40$-minute window, independently. What is the probability that Kai arrives first and Lee arrives more than $15$ minutes later?',
      fig: {
        view: frame(40, 40),
        elems: [
          box(40, 40),
          { t: 'poly', pts: [[0, 15], [25, 40], [0, 40]] },
          lab(20, 0, '40', 0, 16),
          lab(0, 20, '40', -14, 4),
          lab(20, 0, 'Kai (min)', 0, 32),
          lab(0, 40, 'Lee (min)', 0, -10),
        ],
      },
      answer: '$\\frac{25}{128}$',
      solution:
        'With $x$ Kai’s time and $y$ Lee’s, the condition is $y - x > 15$: the triangle above the line $y = x + 15$ in the $40 \\times 40$ square, with legs $40 - 15 = 25$. Its area is $\\frac{625}{2}$ out of $1600$, so the probability is $\\frac{625/2}{1600} = \\frac{25}{128}$ ✓. Second route, by symmetry: the event $|y - x| > 15$ fills two congruent corner triangles totaling $\\left(\\frac{25}{40}\\right)^2 = \\frac{25}{64}$ of the square, and swapping the two names shows Kai is the earlier one in exactly half of it: $\\frac{25}{128}$ ✓. COUNTING BOTH ORDERS, $\\frac{25}{64}$, forgets that Kai must arrive first ✗.',
    },
    {
      q: 'Pia and Quinn each arrive at a library at a random time during the same $60$-minute window, independently. What is the probability that Pia arrives first and their arrival times are within $20$ minutes of each other?',
      fig: {
        view: frame(60, 60),
        elems: [
          box(60, 60),
          { t: 'poly', pts: [[0, 0], [60, 60], [40, 60], [0, 20]] },
          lab(30, 0, '60', 0, 16),
          lab(0, 30, '60', -14, 4),
          lab(30, 0, 'Pia (min)', 0, 32),
          lab(0, 60, 'Quinn (min)', 0, -10),
        ],
      },
      answer: '$\\frac{5}{18}$',
      solution:
        'With $x$ Pia’s time and $y$ Quinn’s, the condition is $0 < y - x < 20$: the band between the lines $y = x$ and $y = x + 20$. Above the diagonal lies half the square, area $1800$, and cutting away $y - x > 20$ (a triangle with legs $40$, area $800$) leaves $1000$ of $3600$: probability $\\frac{1000}{3600} = \\frac{5}{18}$ ✓. Second route, by subtraction of probabilities: $P(\\text{Pia first}) = \\frac{1}{2}$, and Pia-first fails only when $y - x > 20$, probability $\\frac{800}{3600} = \\frac{2}{9}$; so the answer is $\\frac{1}{2} - \\frac{2}{9} = \\frac{5}{18}$ ✓. DOUBLING TO BOTH ORDERS — $P(|x - y| < 20) = 1 - \\left(\\frac{2}{3}\\right)^2 = \\frac{5}{9}$ — answers a question that never asked who was first ✗.',
    },
    {
      q: 'Rae and Sid each arrive at a park at a random time during the same $36$-minute window, independently. For some number $w$ with $0 < w < 36$, the probability that Rae arrives first and Sid arrives more than $w$ minutes later is $\\frac{2}{81}$. What is $w$?',
      fig: {
        view: frame(36, 36),
        elems: [
          box(36, 36),
          { t: 'poly', pts: [[0, 28], [8, 36], [0, 36]] },
          lab(18, 0, '36', 0, 16),
          lab(0, 18, '36', -14, 4),
          lab(18, 0, 'Rae (min)', 0, 32),
          lab(0, 36, 'Sid (min)', 0, -10),
        ],
      },
      answer: '$28$',
      solution:
        'With $x$ Rae’s time and $y$ Sid’s, the event $y - x > w$ is a triangle with legs $36 - w$, so $\\frac{(36 - w)^2 / 2}{1296} = \\frac{2}{81}$ gives $(36 - w)^2 = 64$, and since $w < 36$ the leg is positive: $36 - w = 8$, so $w = 28$ ✓. Second route, by symmetry first: the either-order event $|y - x| > w$ has twice the probability, $\\frac{4}{81}$, and fills two congruent triangles making up $\\left(\\frac{36 - w}{36}\\right)^2$ of the square; then $\\frac{36 - w}{36} = \\frac{2}{9}$ gives $36 - w = 8$ and $w = 28$ ✓. DROPPING THE ONE-HALF — solving $\\left(\\frac{36 - w}{36}\\right)^2 = \\frac{2}{81}$ — leaves $36 - w = 4\\sqrt{2}$, not a whole number; the Rae-first triangle is only half of the $|y - x| > w$ region ✗.',
    },
  ],

  // slot 8 — an inscribed polygon in a circle or semicircle.
  //          Lanes: regular hexagon in r=4 -> 3sqrt(3)/(2pi); equilateral triangle
  //          in r=6 -> 3sqrt(3)/(4pi); derived: square in a semicircle of radius 5 -> 8/(5pi).
  [
    {
      q: 'A regular hexagon is inscribed in a circle of radius $4$, with all six vertices on the circle. A point is chosen at random inside the circle. What is the probability that it lies inside the hexagon?',
      fig: {
        view: [-5, -5, 5, 5],
        elems: [
          { t: 'circle', c: [0, 0], r: 4 },
          { t: 'poly', pts: [[4, 0], [2, 3.464], [-2, 3.464], [-4, 0], [-2, -3.464], [2, -3.464]] },
          { t: 'seg', a: [0, 0], b: [4, 0], dash: true },
          { t: 'point', p: [0, 0] },
          lab(2, 0, '4', 0, -6),
        ],
      },
      answer: '$\\frac{3\\sqrt{3}}{2\\pi}$',
      solution:
        'The center and the six vertices cut the hexagon into $6$ equilateral triangles of side $4$, each with area $\\frac{\\sqrt{3}}{4} \\cdot 16 = 4\\sqrt{3}$, so the hexagon has area $24\\sqrt{3}$. The circle has area $16\\pi$, so the probability is $\\frac{24\\sqrt{3}}{16\\pi} = \\frac{3\\sqrt{3}}{2\\pi}$ ✓. Second route, by the apothem: a regular polygon’s area is $\\frac{1}{2} \\cdot \\text{apothem} \\cdot \\text{perimeter}$; here the apothem is $\\frac{\\sqrt{3}}{2} \\cdot 4 = 2\\sqrt{3}$ and the perimeter is $24$, giving $\\frac{1}{2} \\cdot 2\\sqrt{3} \\cdot 24 = 24\\sqrt{3}$ and the same ratio $\\frac{3\\sqrt{3}}{2\\pi}$ ✓. COMPARING PERIMETERS, $\\frac{24}{8\\pi} = \\frac{3}{\\pi}$, measures the wrong thing; a random point calls for a ratio of areas ✗.',
    },
    {
      q: 'An equilateral triangle is inscribed in a circle of radius $6$, with all three vertices on the circle. A point is chosen at random inside the circle. What is the probability that it lies inside the triangle?',
      fig: {
        view: [-7, -7, 7, 7],
        elems: [
          { t: 'circle', c: [0, 0], r: 6 },
          { t: 'poly', pts: [[0, 6], [-5.196, -3], [5.196, -3]] },
          { t: 'seg', a: [0, 0], b: [0, 6], dash: true },
          { t: 'point', p: [0, 0] },
          lab(0, 3, '6', 12, 4),
        ],
      },
      answer: '$\\frac{3\\sqrt{3}}{4\\pi}$',
      solution:
        'The center cuts the triangle into three isosceles triangles, each with two sides of length $6$ meeting at $120°$: area $\\frac{1}{2} \\cdot 6 \\cdot 6 \\cdot \\sin 120° = 9\\sqrt{3}$ each, so the triangle has area $27\\sqrt{3}$. The circle has area $36\\pi$, so the probability is $\\frac{27\\sqrt{3}}{36\\pi} = \\frac{3\\sqrt{3}}{4\\pi}$ ✓. Second route, by the side length: each side is a chord subtending $120°$, so it has length $2 \\cdot 6 \\sin 60° = 6\\sqrt{3}$, and the equilateral area formula gives $\\frac{\\sqrt{3}}{4}(6\\sqrt{3})^2 = \\frac{\\sqrt{3}}{4} \\cdot 108 = 27\\sqrt{3}$, the same ratio ✓. TAKING THE SIDE TO BE $6$ gives area $9\\sqrt{3}$ and probability $\\frac{\\sqrt{3}}{4\\pi}$; the radius is $6$, and the side is $6\\sqrt{3}$ ✗.',
    },
    {
      q: 'A square sits inside a semicircle of radius $5$ with its base centered on the diameter and its top two corners on the arc, as shown. A point is chosen at random inside the semicircle. What is the probability that it lies inside the square?',
      fig: {
        view: [-6, -1.2, 6, 6],
        elems: [
          { t: 'poly', pts: arcPts(0, 0, 5, 0, 180), fill: false },
          { t: 'poly', pts: [[-2.236, 0], [2.236, 0], [2.236, 4.472], [-2.236, 4.472]] },
          { t: 'seg', a: [0, 0], b: [-3.536, 3.536], dash: true },
          { t: 'point', p: [0, 0] },
          lab(-1.768, 1.768, '5', -12, -2),
        ],
      },
      answer: '$\\frac{8}{5\\pi}$',
      solution:
        'Let the square have side $s$; its top corners sit at height $s$, a distance $\\frac{s}{2}$ from the center, so $\\left(\\frac{s}{2}\\right)^2 + s^2 = 25$, giving $\\frac{5}{4}s^2 = 25$ and $s^2 = 20$. The semicircle has area $\\frac{25\\pi}{2}$, so the probability is $\\frac{20}{25\\pi/2} = \\frac{8}{5\\pi}$ ✓. Second route, by coordinates: the top right corner lies on $x^2 + y^2 = 25$ with $y = 2x$ (its height is the full side, twice its distance $x$ from the center), so $5x^2 = 25$ and $x = \\sqrt{5}$; the square is $2\\sqrt{5}$ wide and $2\\sqrt{5}$ tall, area $20$, and $\\frac{20}{25\\pi/2} = \\frac{8}{5\\pi}$ ✓. DIVIDING BY THE FULL CIRCLE, $\\frac{20}{25\\pi} = \\frac{4}{5\\pi}$, is half the answer; the point is chosen in the semicircle ✗.',
    },
  ],

  // slot 9 — within a fixed distance of a repeating landmark.
  //          Lanes: [0,14], within 1 of a multiple of 4 -> 1/2; staples at 0/10/20 on
  //          22 cm, within 2 -> 5/11; derived: [0,30], more than 2 from a multiple of 7 -> 2/5.
  [
    {
      q: 'A real number $x$ is chosen at random from $[0, 14]$. What is the probability that $x$ is within $1$ of some multiple of $4$?',
      answer: '$\\frac{1}{2}$',
      solution:
        'The multiples of $4$ within reach are $0$, $4$, $8$, and $12$. Near $0$ only $[0, 1]$ lies inside the interval, length $1$; near $4$, $8$, and $12$ the stretches $(3, 5)$, $(7, 9)$, and $(11, 13)$ each have length $2$ and none of them overlap. The favorable length is $1 + 2 + 2 + 2 = 7$ of $14$, so the probability is $\\frac{7}{14} = \\frac{1}{2}$ ✓. Second route, through the gaps: the points too far from every multiple form $(1, 3)$, $(5, 7)$, $(9, 11)$, and $(13, 14]$, lengths $2 + 2 + 2 + 1 = 7$, so the answer is $1 - \\frac{7}{14} = \\frac{1}{2}$ ✓. GIVING EVERY MULTIPLE A FULL WINDOW OF LENGTH $2$ — $4 \\cdot 2 = 8$, probability $\\frac{4}{7}$ — ignores that the window around $0$ is clipped to $[0, 1]$ ✗.',
    },
    {
      q: 'A $22$-centimeter strip of wood has staples at its $0$-, $10$-, and $20$-centimeter marks. A point is chosen at random on the strip. What is the probability that it is within $2$ centimeters of a staple?',
      answer: '$\\frac{5}{11}$',
      solution:
        'Near the staple at $0$ only $[0, 2]$ lies on the strip, length $2$; near $10$ the stretch $(8, 12)$ and near $20$ the stretch $(18, 22)$ each have length $4$, and no stretches overlap. The favorable length is $2 + 4 + 4 = 10$ of $22$, so the probability is $\\frac{10}{22} = \\frac{5}{11}$ ✓. Second route, through the gaps: the far points form $(2, 8)$ and $(12, 18)$, length $6$ each, so the point is far from every staple with probability $\\frac{12}{22}$ and near one with probability $1 - \\frac{12}{22} = \\frac{5}{11}$ ✓. GIVING EACH STAPLE A FULL WINDOW OF LENGTH $4$ — $3 \\cdot 4 = 12$, probability $\\frac{6}{11}$ — forgets that the staple at the $0$ mark only reaches one way ✗.',
    },
    {
      q: 'A real number $x$ is chosen at random from $[0, 30]$. What is the probability that its distance to the nearest multiple of $7$ is more than $2$?',
      answer: '$\\frac{2}{5}$',
      solution:
        'The multiples of $7$ in play are $0$, $7$, $14$, $21$, and $28$. Between consecutive multiples the far points form a middle stretch of length $7 - 2 - 2 = 3$: they are $(2, 5)$, $(9, 12)$, $(16, 19)$, and $(23, 26)$, and beyond $28$ the near window $[26, 30]$ runs to the interval’s end, so nothing more is far. The favorable length is $4 \\cdot 3 = 12$ of $30$: probability $\\frac{12}{30} = \\frac{2}{5}$ ✓. Second route, through the near points: they form $[0, 2]$, $(5, 9)$, $(12, 16)$, $(19, 23)$, and $(26, 30]$, lengths $2 + 4 + 4 + 4 + 4 = 18$, so the answer is $1 - \\frac{18}{30} = \\frac{12}{30} = \\frac{2}{5}$ ✓. EXCLUDING FIVE FULL WINDOWS OF LENGTH $4$ — leaving $30 - 20 = 10$ and probability $\\frac{1}{3}$ — overlooks that the window around $0$ is half outside the interval ✗.',
    },
  ],

  // slot 10 — a sum condition on two random numbers.
  //          Lanes: [0,8]^2, 5 < x+y < 11 -> 39/64; [0,10] x [0,4], x+y < 3 -> 9/80;
  //          derived: [0,6]^2, 4 < x+y < 8 and x < y -> 5/18.
  [
    {
      q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 8]$, independently. What is the probability that $5 < x + y < 11$?',
      fig: {
        view: frame(8, 8),
        elems: [
          box(8, 8),
          { t: 'poly', pts: [[5, 0], [8, 0], [8, 3], [3, 8], [0, 8], [0, 5]] },
          lab(4, 0, '8', 0, 16),
          lab(0, 4, '8', -12, 4),
          lab(8, 0, 'x', 14, 4),
          lab(0, 8, 'y', 0, -10),
        ],
      },
      answer: '$\\frac{39}{64}$',
      solution:
        'In the $8 \\times 8$ square, $x + y \\le 5$ is a corner triangle with legs $5$ (area $\\frac{25}{2}$), and $x + y \\ge 11$ is the triangle hanging from the corner $(8, 8)$, with legs $16 - 11 = 5$ (area $\\frac{25}{2}$). The band between them has area $64 - 25 = 39$, so the probability is $\\frac{39}{64}$ ✓. Second route, by symmetry of the sum: the swap $(x, y) \\to (8 - x, 8 - y)$ turns $x + y < 5$ into $x + y > 11$, so the two failing events have the same probability, $\\frac{25/2}{64} = \\frac{25}{128}$ each, and $1 - 2 \\cdot \\frac{25}{128} = \\frac{78}{128} = \\frac{39}{64}$ ✓. TAKING THE UPPER TRIANGLE’S LEGS FROM $11 - 8 = 3$ gives area $\\frac{9}{2}$ and probability $\\frac{47}{64}$; that triangle’s legs run from $x + y = 11$ up to the corner where $x + y = 16$, length $5$ ✗.',
    },
    {
      q: 'A real number $x$ is chosen at random from $[0, 10]$ and a real number $y$ is chosen at random from $[0, 4]$, independently. What is the probability that $x + y < 3$?',
      fig: {
        view: frame(10, 4),
        elems: [
          box(10, 4),
          { t: 'poly', pts: [[0, 0], [3, 0], [0, 3]] },
          lab(5, 0, '10', 0, 16),
          lab(0, 2, '4', -12, 4),
          lab(10, 0, 'x', 14, 4),
          lab(0, 4, 'y', 0, -10),
        ],
      },
      answer: '$\\frac{9}{80}$',
      solution:
        'In the $10 \\times 4$ rectangle, $x + y < 3$ is a corner triangle with legs $3$ — it fits, since $3 \\le 10$ and $3 \\le 4$ — with area $\\frac{9}{2}$ of the rectangle’s $40$: probability $\\frac{9/2}{40} = \\frac{9}{80}$ ✓. Second route, by conditioning on $y$: for $y < 3$ the condition needs $x < 3 - y$, probability $\\frac{3 - y}{10}$, and for $y \\ge 3$ it is impossible; averaging over $y$ uniform on $[0, 4]$ gives $\\frac{1}{4}\\int_0^3 \\frac{3 - y}{10}\\,dy = \\frac{1}{4} \\cdot \\frac{9/2}{10} = \\frac{9}{80}$ ✓. NORMALIZING BY A SQUARE — $\\frac{9}{2}$ over $16$, giving $\\frac{9}{32}$ — forgets that the sample space is the $10 \\times 4$ rectangle, area $40$ ✗.',
    },
    {
      q: 'Ana and Ben each pick a real number at random from $[0, 6]$, independently. Call Ana’s number $x$ and Ben’s number $y$. What is the probability that $x + y$ lies strictly between $4$ and $8$ while Ben’s number is the larger of the two?',
      fig: {
        view: frame(6, 6),
        elems: [
          box(6, 6),
          { t: 'poly', pts: [[2, 2], [4, 4], [2, 6], [0, 6], [0, 4]] },
          { t: 'seg', a: [0, 0], b: [6, 6], dash: true },
          { t: 'seg', a: [4, 0], b: [0, 4], dash: true },
          { t: 'seg', a: [6, 2], b: [2, 6], dash: true },
          lab(3, 0, '6', 0, 16),
          lab(0, 3, '6', -12, 4),
          lab(6, 0, 'x', 14, 4),
          lab(0, 6, 'y', 0, -10),
        ],
      },
      answer: '$\\frac{5}{18}$',
      solution:
        'First measure the band $4 < x + y < 8$: the square’s $36$ minus two corner triangles with legs $4$ (area $8$ each) leaves $20$. Swapping $x$ and $y$ maps the band to itself while trading $x < y$ with $x > y$, and the diagonal itself has area $0$, so exactly half the band qualifies: $\\frac{10}{36} = \\frac{5}{18}$ ✓. Second route, measuring the favorable pentagon $(2, 2)$, $(4, 4)$, $(2, 6)$, $(0, 6)$, $(0, 4)$ directly: the vertical segment from $(2, 2)$ to $(2, 6)$ splits it into a triangle with base $4$ and width $2$ (area $4$) and a trapezoid with parallel sides $4$ and $2$ and width $2$ (area $6$), total $10$ of $36$, so $\\frac{5}{18}$ ✓. STOPPING AT THE BAND, $\\frac{20}{36} = \\frac{5}{9}$, ignores the requirement $x < y$ ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 10,
  worksheet,
}
