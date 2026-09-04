// Counting chapter 10 — variations for the CHALLENGE set.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was computed exactly in node (closed-form length or area over
//    total, shoelace on every drawn polygon) and cross-checked by a 1,000,000
//    sample Monte Carlo of the exact stated condition before any choices were
//    written. Every key matches its pin. Pin deviations: none.
//  - Answer indices are derived from the base problem, never chosen: with
//    base index b, v1 = (b+1)%4, v2 = (b+3)%4, v3 = (b+2)%4.
//  - Every solution runs two genuinely different routes that each end ✓
//    (direct measure vs. complement, areas vs. similarity or scaling,
//    region geometry vs. slicing integrals, uniformity of the relative
//    angle vs. a lap-by-lap time count), and route two never re-imports
//    route one's number. Each distractor is one named mistake, named in
//    CAPS in the order the distractors appear, marked ✗.
//  - Conventions are settled in every stem: "at random" means uniformly,
//    two random choices are independent, real numbers are chosen from
//    intervals (endpoints carry no probability), and answers stay exact.
//  - Every curved boundary is sampled from the same exact geometry the
//    solution computes with, so figures are to scale by construction.

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

const challenge = [
  // slot 1 — distance to the midpoint of a segment.
  [
    {
      q: 'A point is chosen at random on a segment of length $18$. What is the probability that it lies within $2$ units of the midpoint of the segment?',
      choices: ['$\\frac{1}{9}$', '$\\frac{2}{9}$', '$\\frac{4}{9}$', '$\\frac{7}{9}$'],
      answer: 1,
      solution:
        'Within $2$ of the midpoint means $2$ on either side of it, a stretch of length $4$ in the middle of the segment, so the probability is $\\frac{4}{18} = \\frac{2}{9}$ ✓. Second route, by complement: the point misses when it lies in one of the two outer stretches, each of length $\\frac{18 - 4}{2} = 7$, so the miss probability is $\\frac{14}{18} = \\frac{7}{9}$ and the answer is $1 - \\frac{7}{9} = \\frac{2}{9}$ ✓. The choice $\\frac{1}{9}$ COUNTS ONLY ONE SIDE of the midpoint ✗; $\\frac{4}{9}$ DOUBLES THE STRETCH A SECOND TIME, using $8$ as the favorable length ✗; $\\frac{7}{9}$ IS THE COMPLEMENT, the probability of landing far from the midpoint ✗.',
    },
    {
      q: 'A recital lasts $40$ minutes, and Ken slips into the hall at a random moment during it. What is the probability that he enters within $6$ minutes of the halfway point of the recital?',
      choices: ['$\\frac{3}{20}$', '$\\frac{3}{5}$', '$\\frac{7}{10}$', '$\\frac{3}{10}$'],
      answer: 3,
      solution:
        'The halfway point is minute $20$, so the favorable moments run from minute $14$ to minute $26$, a stretch of length $12$ out of $40$: the probability is $\\frac{12}{40} = \\frac{3}{10}$ ✓. Second route, by complement: he misses the window when he enters in the first $14$ minutes or the last $14$, a total of $28$ minutes, so the miss probability is $\\frac{28}{40} = \\frac{7}{10}$ and the answer is $1 - \\frac{7}{10} = \\frac{3}{10}$ ✓. The choice $\\frac{3}{20}$ COUNTS ONLY ONE SIDE of the halfway point ✗; $\\frac{3}{5}$ DOUBLES THE STRETCH A SECOND TIME, using $24$ minutes ✗; $\\frac{7}{10}$ IS THE COMPLEMENT ✗.',
    },
    {
      q: 'A point is chosen at random on a segment of length $30$. The probability that it lies within $d$ units of the midpoint of the segment is $\\frac{7}{15}$. What is $d$?',
      choices: ['$\\frac{7}{2}$', '$14$', '$7$', '$8$'],
      answer: 2,
      solution:
        'Within $d$ of the midpoint is a stretch of length $2d$, so $\\frac{2d}{30} = \\frac{7}{15}$, giving $2d = 14$ and $d = 7$ ✓. Second route, through the complement: the two outer stretches have total length $30 - 2d$, and their probability must be $1 - \\frac{7}{15} = \\frac{8}{15}$, so $30 - 2d = 16$ and again $d = 7$ ✓. The choice $\\frac{7}{2}$ HALVES $d$ A SECOND TIME, treating $7$ as the full two-sided stretch ✗; $14$ USES $d$ AS THE WHOLE FAVORABLE STRETCH, solving $\\frac{d}{30} = \\frac{7}{15}$ ✗; $8$ SOLVES THE COMPLEMENT EQUATION $\\frac{2d}{30} = \\frac{8}{15}$ ✗.',
    },
  ],
  // slot 2 — absolute-value and distance conditions on an interval.
  [
    {
      q: 'A real number $x$ is chosen at random from $[2, 17]$. What is the probability that $|x - 12| < 4$?',
      choices: ['$\\frac{4}{15}$', '$\\frac{8}{17}$', '$\\frac{7}{15}$', '$\\frac{8}{15}$'],
      answer: 3,
      solution:
        'The condition means $8 < x < 16$, a stretch of length $8$ inside an interval of length $15$, so the probability is $\\frac{8}{15}$ ✓. Second route, by complement: the condition fails on $[2, 8]$, length $6$, and on $[16, 17]$, length $1$, a total of $7$, so the answer is $1 - \\frac{7}{15} = \\frac{8}{15}$ ✓. The choice $\\frac{4}{15}$ COUNTS ONLY ONE SIDE of $12$ ✗; $\\frac{8}{17}$ USES THE ENDPOINT $17$ AS THE TOTAL LENGTH instead of $17 - 2 = 15$ ✗; $\\frac{7}{15}$ IS THE COMPLEMENT ✗.',
    },
    {
      q: 'A real number $x$ is chosen at random from $[0, 16]$. What is the probability that $x$ is closer to $4$ than to $10$?',
      choices: ['$\\frac{1}{2}$', '$\\frac{7}{16}$', '$\\frac{9}{16}$', '$\\frac{1}{4}$'],
      answer: 1,
      solution:
        'The points equally far from $4$ and $10$ sit at their midpoint, $7$, and everything to its left is closer to $4$. The favorable stretch is $[0, 7)$, length $7$ out of $16$, so the probability is $\\frac{7}{16}$ ✓. Second route, by algebra: $|x - 4| < |x - 10|$ squares to $x^2 - 8x + 16 < x^2 - 20x + 100$, which simplifies to $12x < 84$, so $x < 7$ and the probability is $\\frac{7}{16}$ ✓. The choice $\\frac{1}{2}$ ASSUMES THE TWO TARGETS SPLIT THE INTERVAL EVENLY, but $4$ and $10$ sit off-center ✗; $\\frac{9}{16}$ IS THE COMPLEMENT, the points closer to $10$ ✗; $\\frac{1}{4}$ USES THE POINT $4$ ITSELF AS THE FAVORABLE LENGTH ✗.',
    },
    {
      q: 'A real number $x$ is chosen at random from $[0, 24]$. For a certain positive number $r$, the probability that $|x - 9| \\le r$ is $\\frac{3}{4}$. What is $r$?',
      choices: ['$9$', '$18$', '$\\frac{9}{2}$', '$3$'],
      answer: 0,
      solution:
        'The favorable length must be $24 \\cdot \\frac{3}{4} = 18$. For $r \\le 9$ the stretch $[9 - r, 9 + r]$ lies inside the interval and has length $2r$, so $2r = 18$ gives $r = 9$ — and at $r = 9$ the left end lands exactly at $0$, so nothing spills out ✓. Second route, by complement: the unfavorable length must be $6$, and it all sits to the right of $9 + r$, since the left side reaches down to $9 - r \\ge 0$; so $24 - (9 + r) = 6$ gives $r = 9$, consistent with the left end closing at $0$ ✓. The choice $18$ USES $r$ AS THE WHOLE FAVORABLE STRETCH, solving $\\frac{r}{24} = \\frac{3}{4}$ ✗; $\\frac{9}{2}$ HALVES $r$ A SECOND TIME ✗; $3$ SOLVES FOR THE COMPLEMENT, setting $2r$ equal to the unfavorable length $6$ ✗.',
    },
  ],
  // slot 3 — a centered polygon inside a circle (areas).
  [
    {
      q: 'A square of side $6$ is drawn inside a circle of radius $5$, with the same center, as shown. A point is chosen at random inside the circle. What is the probability that it lies inside the square?',
      fig: {
        view: [-6, -6, 6, 6],
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'poly', pts: [[-3, -3], [3, -3], [3, 3], [-3, 3]] },
          { t: 'seg', a: [0, 0], b: [-3.536, 3.536], dash: true },
          { t: 'point', p: [0, 0] },
          lab(-1.768, 1.768, '5', -10, -4),
          lab(0, -3, '6', 0, 14),
        ],
      },
      choices: ['$\\frac{2}{\\pi}$', '$\\frac{9}{25\\pi}$', '$\\frac{36}{25\\pi}$', '$\\frac{3}{5\\pi}$'],
      answer: 2,
      solution:
        'The square fits: its corners sit $3\\sqrt{2} \\approx 4.24$ from the center, inside radius $5$. Its area is $36$ and the circle’s is $25\\pi$, so the probability is $\\frac{36}{25\\pi}$ ✓. Second route, by quadrant symmetry: each quadrant of the circle is a quarter disk of area $\\frac{25\\pi}{4}$ containing a $3 \\times 3$ quarter of the square, so within every quadrant the probability is $\\frac{9}{25\\pi/4} = \\frac{36}{25\\pi}$, hence the same overall ✓. The choice $\\frac{2}{\\pi}$ PUTS THE SQUARE’S CORNERS ON THE CIRCLE, using the inscribed square of area $50$ instead of this smaller one ✗; $\\frac{9}{25\\pi}$ USES THE DIAMETER $10$ AS THE RADIUS, inflating the circle’s area to $100\\pi$ ✗; $\\frac{3}{5\\pi}$ COMPARES THE SIDE $6$ TO THE CIRCUMFERENCE $10\\pi$, mixing lengths into an area problem ✗.',
    },
    {
      q: 'An $8 \\times 4$ rectangle is drawn inside a circle of radius $5$, with the same center, as shown. A point is chosen at random inside the circle. What is the probability that it lies inside the rectangle?',
      fig: {
        view: [-6, -6, 6, 6],
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'poly', pts: [[-4, -2], [4, -2], [4, 2], [-4, 2]] },
          { t: 'seg', a: [0, 0], b: [-3.536, 3.536], dash: true },
          { t: 'point', p: [0, 0] },
          lab(-1.768, 1.768, '5', -10, -4),
          lab(0, -2, '8', 0, 14),
          lab(4, 0, '4', 12, 4),
        ],
      },
      choices: ['$\\frac{32}{25\\pi}$', '$\\frac{16}{25\\pi}$', '$\\frac{8}{25\\pi}$', '$\\frac{12}{5\\pi}$'],
      answer: 0,
      solution:
        'The rectangle fits: its corners sit $\\sqrt{4^2 + 2^2} = \\sqrt{20} \\approx 4.47$ from the center, inside radius $5$. Its area is $32$ and the circle’s is $25\\pi$, so the probability is $\\frac{32}{25\\pi}$ ✓. Second route, by quadrant symmetry: each quadrant of the circle is a quarter disk of area $\\frac{25\\pi}{4}$ holding a $4 \\times 2$ quarter of the rectangle, so the probability within every quadrant is $\\frac{8}{25\\pi/4} = \\frac{32}{25\\pi}$, hence the same overall ✓. The choice $\\frac{16}{25\\pi}$ HALVES THE RECTANGLE’S AREA, as though $\\frac{1}{2} \\cdot 8 \\cdot 4$ were a triangle formula ✗; $\\frac{8}{25\\pi}$ USES THE DIAMETER $10$ AS THE RADIUS ✗; $\\frac{12}{5\\pi}$ COMPARES THE PERIMETER $24$ TO THE CIRCUMFERENCE $10\\pi$ ✗.',
    },
    {
      q: 'A square of side $s$ is drawn inside a circle of radius $10$, with the same center, as shown. A point chosen at random inside the circle lies inside the square with probability $\\frac{121}{100\\pi}$. What is $s$?',
      fig: {
        view: [-11, -11, 11, 11],
        elems: [
          { t: 'circle', c: [0, 0], r: 10 },
          { t: 'poly', pts: [[-5.5, -5.5], [5.5, -5.5], [5.5, 5.5], [-5.5, 5.5]] },
          { t: 'seg', a: [0, 0], b: [-7.071, 7.071], dash: true },
          { t: 'point', p: [0, 0] },
          lab(-3.536, 3.536, '10', -12, -4),
        ],
      },
      choices: ['$121$', '$22$', '$\\frac{11}{2}$', '$11$'],
      answer: 3,
      solution:
        'The probability is area over area: $\\frac{s^2}{100\\pi} = \\frac{121}{100\\pi}$, so $s^2 = 121$ and $s = 11$; the fit checks out, since the corners sit $\\frac{11\\sqrt{2}}{2} \\approx 7.78$ from the center, inside radius $10$ ✓. Second route, by scaling from a reference square: a centered square of side $10$ would be hit with probability $\\frac{100}{100\\pi} = \\frac{1}{\\pi}$, and the given probability is $\\frac{121}{100}$ times that; areas scale with the square of the side, so $s = 10 \\cdot \\sqrt{\\frac{121}{100}} = 11$ ✓. The choice $121$ STOPS AT $s^2$ and forgets the square root ✗; $22$ USES THE DIAMETER $20$ AS THE RADIUS, solving $\\frac{s^2}{400\\pi} = \\frac{121}{100\\pi}$ ✗; $\\frac{11}{2}$ USES HALF THE RADIUS, shrinking the circle to radius $5$ ✗.',
    },
  ],
  // slot 4 — cyclic signals with a grace window.
  [
    {
      q: 'A trail sign shows GO for $18$ seconds and then WAIT for $30$ seconds, over and over. Tess reaches the sign at a random moment and will set off only while it shows GO. What is the probability that she can set off within $12$ seconds of arriving?',
      choices: ['$\\frac{5}{8}$', '$\\frac{3}{8}$', '$\\frac{1}{4}$', '$\\frac{7}{8}$'],
      answer: 0,
      solution:
        'The cycle lasts $48$ seconds. Tess sets off within $12$ seconds if she arrives during GO ($18$ seconds) or during the last $12$ seconds of WAIT, so the favorable length is $18 + 12 = 30$ and the probability is $\\frac{30}{48} = \\frac{5}{8}$ ✓. Second route, by complement: she waits more than $12$ seconds exactly when she arrives in the first $30 - 12 = 18$ seconds of WAIT, so the miss probability is $\\frac{18}{48} = \\frac{3}{8}$ and the answer is $1 - \\frac{3}{8} = \\frac{5}{8}$ ✓. The choice $\\frac{3}{8}$ COUNTS ONLY THE GO PHASE, dropping the tail of WAIT ✗; $\\frac{1}{4}$ COUNTS ONLY THE LAST $12$ SECONDS OF WAIT, dropping GO ✗; $\\frac{7}{8}$ ADDS A $12$-SECOND WINDOW AT BOTH ENDS of WAIT ✗.',
    },
    {
      q: 'A plaza fountain sprays for $40$ seconds and then rests for $50$ seconds, over and over. Vic walks up at a random moment, wanting to photograph the spray, and will wait at most $20$ seconds. What is the probability that he gets his photo?',
      choices: ['$\\frac{4}{9}$', '$\\frac{2}{9}$', '$\\frac{2}{3}$', '$\\frac{8}{9}$'],
      answer: 2,
      solution:
        'The cycle lasts $90$ seconds. Vic succeeds if he arrives during the spray ($40$ seconds) or during the last $20$ seconds of the rest, so the favorable length is $40 + 20 = 60$ and the probability is $\\frac{60}{90} = \\frac{2}{3}$ ✓. Second route, by complement: he gives up exactly when he arrives in the first $50 - 20 = 30$ seconds of the rest, so the miss probability is $\\frac{30}{90} = \\frac{1}{3}$ and the answer is $1 - \\frac{1}{3} = \\frac{2}{3}$ ✓. The choice $\\frac{4}{9}$ COUNTS ONLY THE SPRAY, dropping the tail of the rest ✗; $\\frac{2}{9}$ COUNTS ONLY THE LAST $20$ SECONDS of the rest ✗; $\\frac{8}{9}$ ADDS A $20$-SECOND WINDOW AT BOTH ENDS of the rest ✗.',
    },
    {
      q: 'A crosswalk signal shows WALK for $w$ seconds and then DON’T WALK for $48$ seconds, over and over. Wren reaches the crosswalk at a random moment and will step off only while WALK shows. The probability that she can start crossing within $12$ seconds of arriving is $\\frac{1}{2}$. What is $w$?',
      choices: ['$12$', '$24$', '$48$', '$36$'],
      answer: 1,
      solution:
        'She can start within $12$ seconds if she arrives during WALK or in the last $12$ seconds of DON’T WALK, so $\\frac{w + 12}{w + 48} = \\frac{1}{2}$, giving $2w + 24 = w + 48$ and $w = 24$ ✓. Second route, by complement: she fails exactly during the first $36$ seconds of DON’T WALK, and a failure probability of $\\frac{1}{2}$ forces the cycle to last $2 \\cdot 36 = 72$ seconds, so $w = 72 - 48 = 24$ ✓. The choice $12$ USES THE $48$-SECOND PHASE AS THE WHOLE CYCLE, solving $\\frac{w + 12}{48} = \\frac{1}{2}$ ✗; $48$ FORGETS THE LAST $12$ SECONDS of DON’T WALK, solving $\\frac{w}{w + 48} = \\frac{1}{2}$ ✗; $36$ SETS $w + 12$ EQUAL TO $48$ instead of to half the cycle ✗.',
    },
  ],
  // slot 5 — distance from the center of a disk (areas).
  [
    {
      q: 'A point is chosen at random inside a circle of radius $8$. What is the probability that it is closer to the circle’s center than to its edge?',
      fig: {
        view: [-9, -9, 9, 9],
        elems: [
          { t: 'circle', c: [0, 0], r: 8 },
          { t: 'poly', pts: circlePts(0, 0, 4) },
          { t: 'seg', a: [0, 0], b: [-5.657, 5.657], dash: true },
          { t: 'point', p: [0, 0] },
          lab(-2.828, 2.828, '8', -10, -4),
        ],
      },
      choices: ['$\\frac{1}{2}$', '$\\frac{3}{4}$', '$\\frac{1}{16}$', '$\\frac{1}{4}$'],
      answer: 3,
      solution:
        'A point at distance $d$ from the center is at distance $8 - d$ from the edge, so it is closer to the center when $d < 8 - d$, that is, $d < 4$. The favorable region is the disk of radius $4$, area $16\\pi$ of the full $64\\pi$, so the probability is $\\frac{16\\pi}{64\\pi} = \\frac{1}{4}$ ✓. Second route, by scaling: the favorable disk is the whole disk shrunk by the factor $\\frac{1}{2}$, and areas scale with the square of the factor, so the probability is $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$ ✓. The choice $\\frac{1}{2}$ COMPARES RADII INSTEAD OF AREAS ✗; $\\frac{3}{4}$ IS THE COMPLEMENT, the outer ring closer to the edge ✗; $\\frac{1}{16}$ USES THE DIAMETER $16$ AS THE RADIUS, squaring $\\frac{4}{16}$ ✗.',
    },
    {
      q: 'A point is chosen at random inside a circle of radius $10$. What is the probability that its distance from the center is between $4$ and $7$?',
      fig: {
        view: [-11, -11, 11, 11],
        elems: [
          { t: 'circle', c: [0, 0], r: 10 },
          { t: 'poly', pts: ring(circlePts(0, 0, 7), circlePts(0, 0, 4)) },
          { t: 'seg', a: [0, 0], b: [-7.071, 7.071], dash: true },
          { t: 'seg', a: [0, 0], b: [4, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [0, -7], dash: true },
          { t: 'point', p: [0, 0] },
          lab(-3.536, 3.536, '10', -12, -4),
          lab(2, 0, '4', 0, -6),
          lab(0, -3.5, '7', 12, 4),
        ],
      },
      choices: ['$\\frac{3}{10}$', '$\\frac{33}{100}$', '$\\frac{49}{100}$', '$\\frac{9}{100}$'],
      answer: 1,
      solution:
        'The favorable region is the ring between radius $4$ and radius $7$, with area $49\\pi - 16\\pi = 33\\pi$ of the full $100\\pi$, so the probability is $\\frac{33}{100}$ ✓. Second route, by scaled disks: the probability of landing within distance $r$ of the center is $\\left(\\frac{r}{10}\\right)^2$, so the answer is $\\left(\\frac{7}{10}\\right)^2 - \\left(\\frac{4}{10}\\right)^2 = \\frac{49}{100} - \\frac{16}{100} = \\frac{33}{100}$ ✓. The choice $\\frac{3}{10}$ COMPARES LENGTHS, using $\\frac{7 - 4}{10}$ ✗; $\\frac{49}{100}$ DROPS THE INNER CONDITION, keeping the whole disk of radius $7$ ✗; $\\frac{9}{100}$ SQUARES THE DIFFERENCE of the radii instead of differencing the squares ✗.',
    },
    {
      q: 'A point is chosen at random inside a circle of radius $12$. What is the probability that it is closer to the circle’s edge than to its center, but not within $3$ of the edge?',
      fig: {
        view: [-13, -13, 13, 13],
        elems: [
          { t: 'circle', c: [0, 0], r: 12 },
          { t: 'poly', pts: ring(circlePts(0, 0, 9), circlePts(0, 0, 6)) },
          { t: 'seg', a: [0, 0], b: [-8.485, 8.485], dash: true },
          { t: 'point', p: [0, 0] },
          lab(-4.243, 4.243, '12', -12, -4),
        ],
      },
      choices: ['$\\frac{5}{16}$', '$\\frac{1}{4}$', '$\\frac{3}{4}$', '$\\frac{9}{16}$'],
      answer: 0,
      solution:
        'A point at distance $d$ from the center is at distance $12 - d$ from the edge. Closer to the edge means $12 - d < d$, so $d > 6$; not within $3$ of the edge means $12 - d > 3$, so $d < 9$. The favorable region is the ring between radius $6$ and radius $9$, area $81\\pi - 36\\pi = 45\\pi$ of the full $144\\pi$, giving $\\frac{45}{144} = \\frac{5}{16}$ ✓. Second route, by scaled disks: landing within distance $r$ of the center has probability $\\left(\\frac{r}{12}\\right)^2$, so the answer is $\\left(\\frac{9}{12}\\right)^2 - \\left(\\frac{6}{12}\\right)^2 = \\frac{9}{16} - \\frac{4}{16} = \\frac{5}{16}$ ✓. The choice $\\frac{1}{4}$ COMPARES LENGTHS, using the band width $3$ over the radius $12$ ✗; $\\frac{3}{4}$ KEEPS THE WHOLE closer-to-the-edge ring, ignoring the $3$-unit exclusion ✗; $\\frac{9}{16}$ DROPS THE closer-to-the-edge CONDITION, keeping all of $d < 9$ ✗.',
    },
  ],
  // slot 6 — a random point on a side controls a triangle's area.
  [
    {
      q: 'Square $ABCD$ has side $12$. A point $P$ is chosen at random on side $\\overline{AB}$. What is the probability that triangle $PBC$ has area less than $30$?',
      fig: {
        view: frame(12, 12),
        elems: [
          box(12, 12),
          { t: 'seg', a: [4.2, 0], b: [12, 12] },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 12 },
          { t: 'point', p: [12, 0], label: 'B', dx: 5, dy: 12 },
          { t: 'point', p: [12, 12], label: 'C', dx: 5, dy: -5 },
          { t: 'point', p: [0, 12], label: 'D', dx: -12, dy: -5 },
          { t: 'point', p: [4.2, 0], label: 'P', dx: -4, dy: 14 },
          lab(0, 6, '12', -14, 4),
        ],
      },
      choices: ['$\\frac{5}{24}$', '$\\frac{5}{12}$', '$\\frac{7}{12}$', '$\\frac{5}{6}$'],
      answer: 1,
      solution:
        'Triangle $PBC$ has a right angle at $B$ with legs $PB$ and $BC = 12$, so its area is $\\frac{1}{2} \\cdot PB \\cdot 12 = 6 \\cdot PB$. It is below $30$ exactly when $PB < 5$, a stretch of length $5$ on a side of length $12$, so the probability is $\\frac{5}{12}$ ✓. Second route, by calibrating the extremes: as $P$ slides from $B$ to $A$ the area grows linearly from $0$ to $\\frac{1}{2} \\cdot 12 \\cdot 12 = 72$, so the area is below $30$ on exactly the fraction $\\frac{30}{72} = \\frac{5}{12}$ of the side ✓. The choice $\\frac{5}{24}$ DROPS THE $\\frac{1}{2}$ in the area formula, solving $12 \\cdot PB < 30$ ✗; $\\frac{7}{12}$ IS THE COMPLEMENT ✗; $\\frac{5}{6}$ HALVES TWICE, solving $3 \\cdot PB < 30$ ✗.',
    },
    {
      q: 'Rectangle $ABCD$ has $AB = 10$ and $BC = 4$. A point $P$ is chosen at random on side $\\overline{AB}$. What is the probability that triangle $PBC$ has area greater than $6$?',
      fig: {
        view: frame(10, 4),
        elems: [
          box(10, 4),
          { t: 'seg', a: [6.8, 0], b: [10, 4] },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 12 },
          { t: 'point', p: [10, 0], label: 'B', dx: 5, dy: 12 },
          { t: 'point', p: [10, 4], label: 'C', dx: 5, dy: -5 },
          { t: 'point', p: [0, 4], label: 'D', dx: -12, dy: -5 },
          { t: 'point', p: [6.8, 0], label: 'P', dx: -4, dy: 14 },
          lab(5, 0, '10', 0, 16),
          lab(10, 2, '4', 14, 4),
        ],
      },
      choices: ['$\\frac{3}{10}$', '$\\frac{17}{20}$', '$\\frac{2}{5}$', '$\\frac{7}{10}$'],
      answer: 3,
      solution:
        'Triangle $PBC$ has a right angle at $B$ with legs $PB$ and $BC = 4$, so its area is $\\frac{1}{2} \\cdot PB \\cdot 4 = 2 \\cdot PB$. It exceeds $6$ exactly when $PB > 3$, a stretch of length $7$ on a side of length $10$, so the probability is $\\frac{7}{10}$ ✓. Second route, by calibrating the extremes: as $P$ slides from $B$ to $A$ the area grows linearly from $0$ to $\\frac{1}{2} \\cdot 10 \\cdot 4 = 20$, so it exceeds $6$ on the fraction $\\frac{20 - 6}{20} = \\frac{7}{10}$ of the side ✓. The choice $\\frac{3}{10}$ SOLVES THE WRONG DIRECTION, taking area less than $6$ ✗; $\\frac{17}{20}$ DROPS THE $\\frac{1}{2}$, solving $4 \\cdot PB > 6$ ✗; $\\frac{2}{5}$ CONFUSES THE AREA BOUND WITH A LENGTH, requiring $PB > 6$ ✗.',
    },
    {
      q: 'Square $ABCD$ has side $s$. A point $P$ is chosen at random on side $\\overline{AB}$. Triangle $PBC$ has area less than $21$ with probability $\\frac{7}{24}$. What is $s$?',
      fig: {
        view: frame(12, 12),
        elems: [
          box(12, 12),
          { t: 'seg', a: [5, 0], b: [12, 12] },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 12 },
          { t: 'point', p: [12, 0], label: 'B', dx: 5, dy: 12 },
          { t: 'point', p: [12, 12], label: 'C', dx: 5, dy: -5 },
          { t: 'point', p: [0, 12], label: 'D', dx: -12, dy: -5 },
          { t: 'point', p: [5, 0], label: 'P', dx: -4, dy: 14 },
        ],
      },
      choices: ['$144$', '$6\\sqrt{2}$', '$12$', '$6$'],
      answer: 2,
      solution:
        'Triangle $PBC$ has legs $PB$ and $BC = s$, so its area is $\\frac{1}{2} \\cdot PB \\cdot s$, below $21$ exactly when $PB < \\frac{42}{s}$. The probability is that stretch over the side: $\\frac{42/s}{s} = \\frac{42}{s^2} = \\frac{7}{24}$, so $s^2 = 144$ and $s = 12$ ✓. Second route, through the largest area: the area grows linearly from $0$ at $P = B$ to $\\frac{1}{2} s^2$ at $P = A$, so $\\frac{7}{24} = \\frac{21}{\\frac{1}{2} s^2}$, giving $\\frac{1}{2} s^2 = 72$ and $s = 12$ ✓. The choice $144$ STOPS AT $s^2$ ✗; $6\\sqrt{2}$ DROPS THE $\\frac{1}{2}$, making the largest area $s^2$ ✗; $6$ MEASURES THE STRETCH AGAINST THE PERIMETER $4s$ instead of the side ✗.',
    },
  ],
  // slot 7 — congruent circular pieces tiled into a region (areas).
  [
    {
      q: 'A square has side $6$. At each of its four corners, a quarter circle of radius $2$ is drawn inside the square, centered at that corner, as shown. A point is chosen at random in the square. What is the probability that it lies inside one of the four quarter circles?',
      fig: {
        view: frame(6, 6),
        elems: [
          box(6, 6),
          { t: 'poly', pts: [[0, 0], ...arcPts(0, 0, 2, 0, 90, 24)] },
          { t: 'poly', pts: [[6, 0], ...arcPts(6, 0, 2, 90, 180, 24)] },
          { t: 'poly', pts: [[6, 6], ...arcPts(6, 6, 2, 180, 270, 24)] },
          { t: 'poly', pts: [[0, 6], ...arcPts(0, 6, 2, 270, 360, 24)] },
          lab(3, 0, '6', 0, 16),
          lab(1, 0, '2', 0, 16),
        ],
      },
      choices: ['$\\frac{\\pi}{36}$', '$\\frac{4\\pi}{9}$', '$\\frac{\\pi}{9}$', '$\\frac{\\pi}{6}$'],
      answer: 2,
      solution:
        'The four quarter circles fit together into one full circle of radius $2$, area $4\\pi$, and the square has area $36$, so the probability is $\\frac{4\\pi}{36} = \\frac{\\pi}{9}$ ✓. Second route, by quadrants: cut the square into four $3 \\times 3$ quadrants; each holds exactly one quarter circle of area $\\frac{1}{4} \\pi \\cdot 2^2 = \\pi$, so within every quadrant the probability is $\\frac{\\pi}{9}$, hence the same overall ✓. The choice $\\frac{\\pi}{36}$ COUNTS ONLY ONE QUARTER CIRCLE ✗; $\\frac{4\\pi}{9}$ TREATS EACH QUARTER AS A FULL CIRCLE ✗; $\\frac{\\pi}{6}$ COMPARES THE ARC LENGTH $4\\pi$ TO THE PERIMETER $24$, mixing lengths into an area problem ✗.',
    },
    {
      q: 'A rectangle is $10$ units long and $6$ units wide. Two semicircles of radius $3$ are drawn inside it, one with its diameter along each of the two short sides, bulging inward, as shown. A point is chosen at random in the rectangle. What is the probability that it lies inside one of the semicircles?',
      fig: {
        view: frame(10, 6),
        elems: [
          box(10, 6),
          { t: 'poly', pts: arcPts(0, 3, 3, -90, 90, 32) },
          { t: 'poly', pts: arcPts(10, 3, 3, 90, 270, 32) },
          { t: 'seg', a: [0, 3], b: [3, 3], dash: true },
          { t: 'point', p: [0, 3] },
          lab(1.5, 3, '3', 0, -6),
          lab(5, 0, '10', 0, 16),
          lab(10, 3, '6', 14, 4),
        ],
      },
      choices: ['$\\frac{3\\pi}{20}$', '$\\frac{3\\pi}{40}$', '$\\frac{3\\pi}{10}$', '$\\frac{3\\pi}{16}$'],
      answer: 0,
      solution:
        'Each semicircle reaches $3$ units into the rectangle, and $3 + 3 < 10$, so they do not overlap. Together they form one full circle of radius $3$, area $9\\pi$, and the rectangle has area $60$, so the probability is $\\frac{9\\pi}{60} = \\frac{3\\pi}{20}$ ✓. Second route, by halves: the vertical mid-line splits the rectangle into two $5 \\times 6$ halves, each containing exactly one semicircle of area $\\frac{9\\pi}{2}$; within each half the probability is $\\frac{9\\pi/2}{30} = \\frac{3\\pi}{20}$, hence the same overall ✓. The choice $\\frac{3\\pi}{40}$ COUNTS ONLY ONE SEMICIRCLE ✗; $\\frac{3\\pi}{10}$ TREATS EACH SEMICIRCLE AS A FULL CIRCLE ✗; $\\frac{3\\pi}{16}$ COMPARES THE ARC LENGTH $6\\pi$ TO THE PERIMETER $32$ ✗.',
    },
    {
      q: 'A square has side $12$. At each of its four corners, a quarter circle of radius $r$ is drawn inside the square, centered at that corner, as shown. A point chosen at random in the square lies inside one of the four quarter circles with probability $\\frac{\\pi}{9}$. What is $r$?',
      fig: {
        view: frame(12, 12),
        elems: [
          box(12, 12),
          { t: 'poly', pts: [[0, 0], ...arcPts(0, 0, 4, 0, 90, 24)] },
          { t: 'poly', pts: [[12, 0], ...arcPts(12, 0, 4, 90, 180, 24)] },
          { t: 'poly', pts: [[12, 12], ...arcPts(12, 12, 4, 180, 270, 24)] },
          { t: 'poly', pts: [[0, 12], ...arcPts(0, 12, 4, 270, 360, 24)] },
          lab(6, 0, '12', 0, 16),
        ],
      },
      choices: ['$16$', '$8$', '$2$', '$4$'],
      answer: 3,
      solution:
        'The four quarter circles assemble into one full circle of radius $r$, so $\\frac{\\pi r^2}{144} = \\frac{\\pi}{9}$, giving $r^2 = 16$ and $r = 4$ ✓. Second route, by quadrants: each $6 \\times 6$ quadrant of the square holds one quarter circle, so $\\frac{\\pi r^2 / 4}{36} = \\frac{\\pi}{9}$, giving $r^2 = 16$ and $r = 4$ again ✓. The choice $16$ STOPS AT $r^2$ ✗; $8$ MERGES THE FOUR QUARTERS INTO ONLY ONE QUARTER circle, solving $\\frac{\\pi r^2 / 4}{144} = \\frac{\\pi}{9}$ ✗; $2$ TREATS EACH QUARTER AS A FULL CIRCLE, solving $\\frac{4\\pi r^2}{144} = \\frac{\\pi}{9}$ ✗.',
    },
  ],
  // slot 8 — meeting problems on mismatched windows (areas).
  [
    {
      q: 'Gia arrives at a café at a random time during a $50$-minute window, and Hal arrives at a random time during the first $25$ minutes of that window, independently. They meet if they arrive within $5$ minutes of each other. What is the probability that they meet?',
      fig: {
        view: frame(50, 25),
        elems: [
          box(50, 25),
          { t: 'poly', pts: [[0, 0], [5, 0], [30, 25], [20, 25], [0, 5]] },
          lab(25, 0, '50', 0, 16),
          lab(0, 12.5, '25', -14, 4),
          lab(25, 0, 'Gia (min)', 0, 32),
          lab(0, 25, 'Hal (min)', 0, -10),
        ],
      },
      choices: ['$\\frac{19}{100}$', '$\\frac{9}{25}$', '$\\frac{81}{100}$', '$\\frac{1}{5}$'],
      answer: 0,
      solution:
        'With $x$ Gia’s time and $y$ Hal’s, the pair is a random point of a $50 \\times 25$ rectangle, area $1250$, and they meet when $|x - y| \\le 5$. They miss with $x - y > 5$: from the line $x = y + 5$ out to $x = 50$, a trapezoid with parallel sides $45$ (bottom) and $20$ (top) and height $25$, area $\\frac{45 + 20}{2} \\cdot 25 = 812.5$; they also miss with $y - x > 5$, a triangle with legs $20$, area $200$. The meeting band has area $1250 - 1012.5 = 237.5$, so the probability is $\\frac{237.5}{1250} = \\frac{19}{100}$ ✓. Second route, slicing by Hal’s time: for each $y$, the favorable $x$ run over $[y - 5, y + 5]$, length $10$, except that for $y < 5$ the left end is cut off at $0$, losing $5 - y$; the loss totals $\\int_0^5 (5 - y)\\,dy = 12.5$, so the favorable area is $10 \\cdot 25 - 12.5 = 237.5$ and the probability is again $\\frac{19}{100}$ ✓. The choice $\\frac{9}{25}$ PUTS BOTH ARRIVALS IN THE SAME $25$-MINUTE WINDOW ✗; $\\frac{81}{100}$ IS THE COMPLEMENT ✗; $\\frac{1}{5}$ COMPARES $5$ MINUTES TO $25$ AS LENGTHS, never drawing the region ✗.',
    },
    {
      q: 'Ida is free from 1:00 to 1:30, and Jon is free from 1:15 to 1:45. Each arrives at a random moment of their own window, independently. They meet if they arrive within $8$ minutes of each other. What is the probability that they meet?',
      fig: {
        view: frame(30, 30),
        elems: [
          box(30, 30),
          { t: 'poly', pts: [[7, 0], [23, 0], [30, 7], [30, 23]] },
          lab(15, 0, '30', 0, 16),
          lab(0, 15, '30', -14, 4),
          lab(15, 0, 'Ida (min after 1:00)', 0, 32),
          lab(0, 30, 'Jon (min after 1:15)', 0, -10),
        ],
      },
      choices: ['$\\frac{104}{225}$', '$\\frac{11}{15}$', '$\\frac{4}{15}$', '$\\frac{8}{15}$'],
      answer: 2,
      solution:
        'Measure $x$ as Ida’s minutes after 1:00 and $y$ as Jon’s minutes after 1:15, each uniform on $[0, 30]$; Jon’s clock time is $y + 15$, so they meet when $|x - y - 15| \\le 8$, that is, $7 \\le x - y \\le 23$. In the $30 \\times 30$ square, $x - y \\ge 7$ cuts off a triangle with legs $23$, area $\\frac{529}{2}$, and $x - y \\ge 23$ cuts off a triangle with legs $7$, area $\\frac{49}{2}$; the band between has area $\\frac{529 - 49}{2} = 240$, so the probability is $\\frac{240}{900} = \\frac{4}{15}$ ✓. Second route, slicing by Ida’s time: the favorable $y$ run over $[x - 23, x - 7] \\cap [0, 30]$; for $x \\in [7, 23]$ that is $[0, x - 7]$, and $\\int_7^{23} (x - 7)\\,dx = 128$, while for $x \\in [23, 30]$ the full length $16$ survives, adding $7 \\cdot 16 = 112$. The favorable area is $128 + 112 = 240$, again $\\frac{4}{15}$ ✓. The choice $\\frac{104}{225}$ IGNORES THE $15$-MINUTE OFFSET, solving $|x - y| \\le 8$ ✗; $\\frac{11}{15}$ IS THE COMPLEMENT ✗; $\\frac{8}{15}$ DOUBLE-COUNTS THE BAND, adding a mirror copy as if the two orders were separate cases ✗.',
    },
    {
      q: 'Cleo arrives at a library at a random time between 2:00 and 3:00, and Dev arrives at a random time between 2:00 and 2:30, independently. They meet if they arrive within $10$ minutes of each other. Given that they meet, what is the probability that Dev arrived before Cleo?',
      fig: {
        view: frame(60, 30),
        elems: [
          box(60, 30),
          { t: 'poly', pts: [[0, 0], [10, 0], [40, 30], [20, 30], [0, 10]], fill: false },
          { t: 'poly', pts: [[0, 0], [10, 0], [40, 30], [30, 30]] },
          { t: 'seg', a: [0, 0], b: [30, 30], dash: true },
          lab(30, 0, '60', 0, 16),
          lab(0, 15, '30', -14, 4),
          lab(30, 0, 'Cleo (min)', 0, 32),
          lab(0, 30, 'Dev (min)', 0, -10),
        ],
      },
      choices: ['$\\frac{1}{2}$', '$\\frac{6}{11}$', '$\\frac{1}{6}$', '$\\frac{5}{11}$'],
      answer: 1,
      solution:
        'With $x$ Cleo’s minutes and $y$ Dev’s minutes after 2:00, the sample is a $60 \\times 30$ rectangle of area $1800$. The meeting region $|x - y| \\le 10$ has area $1800$ minus the miss regions: $x - y > 10$ is a trapezoid with parallel sides $50$ and $20$ and height $30$, area $1050$, and $y - x > 10$ is a triangle with legs $20$, area $200$; so the meeting area is $550$. Dev first means $0 \\le x - y \\le 10$: for each $y$, the favorable $x$ run over $[y, y + 10]$, which stays inside $[0, 60]$, so that piece has area $10 \\cdot 30 = 300$. The conditional probability is $\\frac{300}{550} = \\frac{6}{11}$ ✓. Second route, adding the two halves directly: the Cleo-first piece $0 < y - x \\le 10$ gives, for each $x \\in [0, 20]$, a $y$-run of length $10$, and for $x \\in [20, 30]$ a run of $30 - x$, totaling $200 + 50 = 250$; the Dev-first slices give $10$ for every $y \\in [0, 30]$, totaling $300$. So the meeting region splits as $300 + 250$ and the answer is $\\frac{300}{300 + 250} = \\frac{6}{11}$ ✓. The choice $\\frac{1}{2}$ ASSUMES THE TWO ORDERS ARE SYMMETRIC, but Cleo’s longer window breaks the symmetry ✗; $\\frac{1}{6}$ FORGETS TO CONDITION, dividing $300$ by the whole $1800$ ✗; $\\frac{5}{11}$ IS THE OTHER HALF, the probability that Cleo arrived first ✗.',
    },
  ],
  // slot 9 — taxicab-distance regions in a square (areas).
  [
    {
      q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 8]$, independently. What is the probability that $|x - 4| + |y - 4| < 3$?',
      fig: {
        view: frame(8, 8),
        elems: [
          box(8, 8),
          { t: 'poly', pts: [[7, 4], [4, 7], [1, 4], [4, 1]] },
          { t: 'point', p: [4, 4], label: '(4, 4)', dx: 6, dy: 14 },
          lab(4, 0, '8', 0, 16),
          lab(0, 4, '8', -12, 4),
          lab(8, 0, 'x', 14, 4),
          lab(0, 8, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{9}{64}$', '$\\frac{9}{32}$', '$\\frac{9}{16}$', '$\\frac{9\\pi}{64}$'],
      answer: 1,
      solution:
        'The condition describes the points whose horizontal and vertical distances from $(4, 4)$ add to less than $3$: a square tilted $45°$ with vertices $(7, 4)$, $(4, 7)$, $(1, 4)$, $(4, 1)$. Its diagonals are both $6$, so its area is $\\frac{6 \\cdot 6}{2} = 18$, and the probability is $\\frac{18}{64} = \\frac{9}{32}$ ✓. Second route, by quarters: in each quadrant around $(4, 4)$ the region is a right triangle with legs $3$, area $\\frac{9}{2}$; four of them give $18$, so the probability is again $\\frac{18}{64} = \\frac{9}{32}$ ✓. The choice $\\frac{9}{64}$ USES AN UPRIGHT SQUARE OF SIDE $3$ ✗; $\\frac{9}{16}$ FORGETS TO HALVE the product of the diagonals ✗; $\\frac{9\\pi}{64}$ TREATS THE REGION AS A CIRCLE of radius $3$ ✗.',
    },
    {
      q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 10]$, independently. What is the probability that both $|x - 5| < 2$ and $|y - 5| < 2$?',
      fig: {
        view: frame(10, 10),
        elems: [
          box(10, 10),
          { t: 'poly', pts: [[3, 3], [7, 3], [7, 7], [3, 7]] },
          { t: 'point', p: [5, 5], label: '(5, 5)', dx: 6, dy: 14 },
          lab(5, 0, '10', 0, 16),
          lab(0, 5, '10', -12, 4),
          lab(10, 0, 'x', 14, 4),
          lab(0, 10, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{2}{5}$', '$\\frac{8}{25}$', '$\\frac{1}{25}$', '$\\frac{4}{25}$'],
      answer: 3,
      solution:
        'The two conditions carve out the upright square $3 < x < 7$, $3 < y < 7$, of side $4$ and area $16$, so the probability is $\\frac{16}{100} = \\frac{4}{25}$ ✓. Second route, by independence: each condition alone is a stretch of length $4$ out of $10$, probability $\\frac{2}{5}$, and the two numbers are independent, so both hold with probability $\\frac{2}{5} \\cdot \\frac{2}{5} = \\frac{4}{25}$ ✓. The choice $\\frac{2}{5}$ CHECKS ONLY ONE of the two conditions ✗; $\\frac{8}{25}$ REPLACES THE PAIR OF CONDITIONS WITH THEIR SUM, shading the tilted square $|x-5| + |y-5| < 4$ of area $32$ ✗; $\\frac{1}{25}$ COUNTS ONLY ONE DIRECTION from the center in each coordinate, using a side of $2$ ✗.',
    },
    {
      q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 4]$, independently. What is the probability that $1 < |x - 2| + |y - 2| < 2$?',
      fig: {
        view: frame(4, 4),
        elems: [
          box(4, 4),
          { t: 'poly', pts: ring([[4, 2], [2, 4], [0, 2], [2, 0]], [[3, 2], [2, 3], [1, 2], [2, 1]]) },
          { t: 'point', p: [2, 2], label: '(2, 2)', dx: 6, dy: 14 },
          lab(2, 0, '4', 0, 16),
          lab(0, 2, '4', -12, 4),
          lab(4, 0, 'x', 14, 4),
          lab(0, 4, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{8}$', '$\\frac{3}{8}$', '$\\frac{3}{16}$'],
      answer: 2,
      solution:
        'The region lies between two squares tilted $45°$ around $(2, 2)$: the outer one with diagonals $4$, area $\\frac{4 \\cdot 4}{2} = 8$, and the inner one with diagonals $2$, area $2$. The band has area $8 - 2 = 6$, so the probability is $\\frac{6}{16} = \\frac{3}{8}$ ✓. Second route, by complement: the sum is at most $1$ with probability $\\frac{2}{16} = \\frac{1}{8}$ (the inner diamond) and at least $2$ with probability $\\frac{16 - 8}{16} = \\frac{1}{2}$ (outside the outer diamond), so the answer is $1 - \\frac{1}{8} - \\frac{1}{2} = \\frac{3}{8}$ ✓. The choice $\\frac{1}{2}$ FORGETS TO REMOVE THE INNER DIAMOND, keeping everything with sum below $2$ ✗; $\\frac{1}{8}$ KEEPS ONLY THE INNER DIAMOND ✗; $\\frac{3}{16}$ HALVES THE DIAMOND AREAS A SECOND TIME ✗.',
    },
  ],
  // slot 10 — cutting a stick at random points.
  [
    {
      q: 'An $18$-inch rope is cut at two points chosen at random along its length, independently. What is the probability that every one of the three pieces is longer than $4$ inches?',
      fig: {
        view: frame(18, 18),
        elems: [
          box(18, 18),
          { t: 'poly', pts: [[4, 8], [4, 14], [10, 14]] },
          { t: 'poly', pts: [[8, 4], [14, 4], [14, 10]] },
          { t: 'seg', a: [0, 0], b: [18, 18], dash: true },
          lab(9, 0, '18', 0, 16),
          lab(0, 9, '18', -14, 4),
          lab(18, 0, 'x', 14, 4),
          lab(0, 18, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{25}{81}$', '$\\frac{5}{9}$', '$\\frac{8}{9}$', '$\\frac{1}{9}$'],
      answer: 3,
      solution:
        'Let $x$ and $y$ be the cut positions, a random point of an $18 \\times 18$ square of area $324$. If $x < y$ the pieces are $x$, $y - x$, and $18 - y$, all longer than $4$ exactly when $x > 4$, $y - x > 4$, and $y < 14$: the triangle with vertices $(4, 8)$, $(4, 14)$, $(10, 14)$, area $\\frac{6 \\cdot 6}{2} = 18$. The case $y < x$ gives the mirror triangle, so the favorable area is $36$ and the probability is $\\frac{36}{324} = \\frac{1}{9}$ ✓. Second route, by similarity: within the half $x < y$, the full sample region is the triangle $0 < x < y < 18$, and the favorable region $4 < x$, $x + 4 < y < 14$ is a scaled copy of it with every side cut from $18$ down to $18 - 3 \\cdot 4 = 6$; the ratio is $\\frac{1}{3}$, so the favorable fraction is $\\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}$, and the mirror half gives the same, so the answer is $\\frac{1}{9}$ ✓. The choice $\\frac{25}{81}$ CHECKS ONLY THE TWO END PIECES, forgetting the middle one ✗; $\\frac{5}{9}$ COMPARES LENGTHS, trimming $4$ from each end of the rope once ✗; $\\frac{8}{9}$ IS THE COMPLEMENT ✗.',
    },
    {
      q: 'A $16$-inch stick is cut at two points chosen at random along its length, independently. What is the probability that the middle piece is longer than $4$ inches?',
      fig: {
        view: frame(16, 16),
        elems: [
          box(16, 16),
          { t: 'poly', pts: [[4, 0], [16, 0], [16, 12]] },
          { t: 'poly', pts: [[0, 4], [12, 16], [0, 16]] },
          { t: 'seg', a: [0, 0], b: [16, 16], dash: true },
          lab(8, 0, '16', 0, 16),
          lab(0, 8, '16', -14, 4),
          lab(16, 0, 'x', 14, 4),
          lab(0, 16, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{7}{16}$', '$\\frac{9}{16}$', '$\\frac{3}{4}$', '$\\frac{1}{4}$'],
      answer: 1,
      solution:
        'With cut positions $x$ and $y$, the middle piece has length $|x - y|$, so the condition is $|x - y| > 4$ inside a $16 \\times 16$ square. That region is two corner triangles with legs $16 - 4 = 12$, total area $2 \\cdot \\frac{144}{2} = 144$, so the probability is $\\frac{144}{256} = \\frac{9}{16}$ ✓. Second route, by complement: the band $|x - y| \\le 4$ has probability $1 - \\left(\\frac{12}{16}\\right)^2$ (the two triangles are each similar to the half-square with ratio $\\frac{12}{16}$), so the band takes $\\frac{7}{16}$ and the answer is $1 - \\frac{7}{16} = \\frac{9}{16}$ ✓. The choice $\\frac{7}{16}$ IS THE COMPLEMENT, a middle piece of at most $4$ ✗; $\\frac{3}{4}$ COMPARES LENGTHS, using $\\frac{12}{16}$ without squaring ✗; $\\frac{1}{4}$ COMPARES THE THRESHOLD $4$ TO THE STICK ✗.',
    },
    {
      q: 'A stick of length $8$ is cut at three points chosen at random along its length, independently. What is the probability that the four pieces can be arranged to form a quadrilateral?',
      choices: ['$\\frac{1}{2}$', '$\\frac{7}{8}$', '$\\frac{1}{4}$', '$\\frac{3}{4}$'],
      answer: 0,
      solution:
        'Four lengths form a quadrilateral exactly when the longest is less than the sum of the other three — here, less than $8$ minus itself, so the condition is that every piece is shorter than $4$. At most one piece can reach $4$, so the failure events for the four pieces are disjoint. The first piece exceeds $4$ exactly when all three cuts land in the right half, probability $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$, and reflecting the stick shows the last piece fails with the same probability; for a middle piece, sliding the cuts beyond the long gap down by $4$ matches its failure region measure-for-measure with the all-cuts-in-one-half region, so each of the four pieces fails with probability $\\frac{1}{8}$. The answer is $1 - 4 \\cdot \\frac{1}{8} = \\frac{1}{2}$ ✓. Second route, the ordered picture: sort the cuts as $u < v < w$, a uniform point of an ordered region in three dimensions. Each failure — $u > 4$, $v - u > 4$, $w - v > 4$, or $w < 4$ — is a corner piece of that region and is a copy of the whole region scaled by $\\frac{1}{2}$ in every direction, so each holds $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$ of the volume; the four corners are disjoint, leaving $1 - \\frac{4}{8} = \\frac{1}{2}$ ✓. The choice $\\frac{7}{8}$ EXCLUDES ONLY ONE PIECE from exceeding half the stick ✗; $\\frac{1}{4}$ REUSES THE THREE-PIECE TRIANGLE ANSWER, though a third cut changes the count of failure corners ✗; $\\frac{3}{4}$ RAISES $\\frac{1}{2}$ TO THE FOURTH POWER for each failure, one power per piece instead of per cut ✗.',
    },
  ],
  // slot 11 — angles as a uniform position on a circle.
  [
    {
      q: 'Someone glances at a wall clock at a random moment during a $12$-hour period. What is the probability that the smaller angle between the hour hand and the minute hand is less than $24°$?',
      choices: ['$\\frac{1}{15}$', '$\\frac{4}{15}$', '$\\frac{2}{15}$', '$\\frac{13}{15}$'],
      answer: 2,
      solution:
        'The minute hand turns $360°$ per hour and the hour hand $30°$, so the angle measured clockwise from the hour hand to the minute hand grows at a steady $330°$ per hour and makes exactly $11$ full laps in $12$ hours — at a random moment it is uniform on the $360°$ circle. The smaller angle is under $24°$ on the $24°$ just past $0°$ and the $24°$ just before $360°$, a total of $48°$, so the probability is $\\frac{48}{360} = \\frac{2}{15}$ ✓. Second route, by timing each lap: one lap takes $\\frac{12}{11}$ hours, and the $48°$ of favorable angle is crossed at $330°$ per hour, taking $\\frac{48}{330}$ hours per lap; over $11$ laps that is $11 \\cdot \\frac{48}{330} = \\frac{8}{5}$ hours out of $12$, and $\\frac{8/5}{12} = \\frac{2}{15}$ ✓. The choice $\\frac{1}{15}$ COUNTS ONLY ONE SIDE, when the minute hand is just ahead ✗; $\\frac{4}{15}$ DOUBLES A SECOND TIME, using $96°$ ✗; $\\frac{13}{15}$ IS THE COMPLEMENT ✗.',
    },
    {
      q: 'Two fair spinner arrows are spun and each stops pointing in a direction chosen at random, independently. What is the probability that the smaller angle between the two arrows is less than $40°$?',
      choices: ['$\\frac{2}{9}$', '$\\frac{1}{9}$', '$\\frac{4}{9}$', '$\\frac{7}{9}$'],
      answer: 0,
      solution:
        'Fix the first arrow; the second is uniform around the circle, and the smaller angle is under $40°$ exactly when the second lands within $40°$ of the first on either side, an arc of $80°$ out of $360°$: $\\frac{80}{360} = \\frac{2}{9}$ ✓. Second route, as an area: the pair of directions $(a, b)$ is uniform on a $360 \\times 360$ square, and the condition is $|a - b| < 40$ or $|a - b| > 320$. The strip $|a - b| < 40$ has area $360^2 - 320^2 = 27200$, and the two corner triangles for $|a - b| > 320$ have area $40^2 = 1600$ together, so the probability is $\\frac{28800}{129600} = \\frac{2}{9}$ ✓. The choice $\\frac{1}{9}$ COUNTS ONLY ONE SIDE of the first arrow ✗; $\\frac{4}{9}$ DOUBLES A SECOND TIME, using $160°$ ✗; $\\frac{7}{9}$ IS THE COMPLEMENT ✗.',
    },
    {
      q: 'Someone glances at a wall clock at a random moment during a $12$-hour period. What is the probability that the smaller angle between the hour hand and the minute hand is greater than $120°$?',
      choices: ['$\\frac{2}{3}$', '$\\frac{1}{6}$', '$\\frac{5}{6}$', '$\\frac{1}{3}$'],
      answer: 3,
      solution:
        'The angle measured clockwise from the hour hand to the minute hand grows at $330°$ per hour, completing exactly $11$ laps in $12$ hours, so at a random moment it is uniform on the $360°$ circle. The smaller angle exceeds $120°$ exactly when that clockwise angle lies strictly between $120°$ and $240°$, a stretch of $120°$, so the probability is $\\frac{120}{360} = \\frac{1}{3}$ ✓. Second route, by timing each lap: in every lap the clockwise angle passes once through $(120°, 240°)$, taking $\\frac{120}{330}$ hours; over $11$ laps that is $11 \\cdot \\frac{120}{330} = 4$ hours out of $12$, so the probability is $\\frac{4}{12} = \\frac{1}{3}$ ✓. The choice $\\frac{2}{3}$ SOLVES THE WRONG DIRECTION, a smaller angle below $120°$ ✗; $\\frac{1}{6}$ STOPS AT $180°$, counting only the clockwise angles in $(120°, 180°)$ ✗; $\\frac{5}{6}$ IS THAT MISCOUNT’S COMPLEMENT ✗.',
    },
  ],
  // slot 12 — ratio wedges cut by a sum line (areas).
  [
    {
      q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 6]$, independently. What is the probability that each number is less than three times the other and their sum is greater than $4$?',
      fig: {
        view: frame(6, 6),
        elems: [
          box(6, 6),
          { t: 'poly', pts: [[3, 1], [6, 2], [6, 6], [2, 6], [1, 3]] },
          { t: 'seg', a: [0, 0], b: [2, 6], dash: true },
          { t: 'seg', a: [0, 0], b: [6, 2], dash: true },
          { t: 'seg', a: [4, 0], b: [0, 4], dash: true },
          lab(3, 0, '6', 0, 16),
          lab(0, 3, '6', -12, 4),
          lab(6, 0, 'x', 14, 4),
          lab(0, 6, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{5}{9}$', '$\\frac{2}{3}$', '$\\frac{1}{9}$', '$\\frac{13}{18}$'],
      answer: 0,
      solution:
        'The conditions $y < 3x$ and $x < 3y$ describe the wedge between the lines $y = 3x$ and $y = \\frac{x}{3}$: the $6 \\times 6$ square minus two triangles with legs $6$ and $2$, area $36 - 2 \\cdot 6 = 24$. The line $x + y = 4$ crosses the wedge’s edges at $(1, 3)$ and $(3, 1)$, and the part of the wedge below it is the triangle $(0, 0)$, $(3, 1)$, $(1, 3)$, whose area by the shoelace formula is $\\frac{1}{2}|3 \\cdot 3 - 1 \\cdot 1| = 4$. That leaves $24 - 4 = 20$, so the probability is $\\frac{20}{36} = \\frac{5}{9}$ ✓. Second route, straight from the favorable pentagon $(3, 1)$, $(6, 2)$, $(6, 6)$, $(2, 6)$, $(1, 3)$: the shoelace sum gives $(3 \\cdot 2 - 6 \\cdot 1) + (6 \\cdot 6 - 6 \\cdot 2) + (6 \\cdot 6 - 2 \\cdot 6) + (2 \\cdot 3 - 1 \\cdot 6) + (1 \\cdot 1 - 3 \\cdot 3) = 0 + 24 + 24 + 0 - 8 = 40$, so the area is $\\frac{40}{2} = 20$ and the probability is $\\frac{20}{36} = \\frac{5}{9}$ ✓. The choice $\\frac{2}{3}$ KEEPS THE WHOLE WEDGE, ignoring the sum condition ✗; $\\frac{1}{9}$ KEEPS ONLY THE CUT-AWAY TRIANGLE ✗; $\\frac{13}{18}$ REMOVES ONLY ONE of the two wedge triangles from the square ✗.',
    },
    {
      q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 6]$, independently. What is the probability that $y > x$ and $x + 2y < 8$?',
      fig: {
        view: frame(6, 6),
        elems: [
          box(6, 6),
          { t: 'poly', pts: [[0, 0], [2.667, 2.667], [0, 4]] },
          { t: 'seg', a: [0, 0], b: [6, 6], dash: true },
          { t: 'seg', a: [0, 4], b: [6, 1], dash: true },
          lab(3, 0, '6', 0, 16),
          lab(0, 3, '6', -12, 4),
          lab(6, 0, 'x', 14, 4),
          lab(0, 6, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{5}{12}$', '$\\frac{1}{2}$', '$\\frac{4}{27}$', '$\\frac{2}{27}$'],
      answer: 2,
      solution:
        'The lines $y = x$ and $x + 2y = 8$ meet at $\\left(\\frac{8}{3}, \\frac{8}{3}\\right)$, and the line $x + 2y = 8$ meets the $y$-axis at $(0, 4)$. The favorable region is the triangle $(0, 0)$, $\\left(\\frac{8}{3}, \\frac{8}{3}\\right)$, $(0, 4)$: taking the base along the $y$-axis, length $4$, the opposite vertex sits $\\frac{8}{3}$ away, so the area is $\\frac{1}{2} \\cdot 4 \\cdot \\frac{8}{3} = \\frac{16}{3}$ and the probability is $\\frac{16/3}{36} = \\frac{4}{27}$ ✓. Second route, slicing vertically: for $x$ between $0$ and $\\frac{8}{3}$, the favorable $y$ run from $x$ up to $\\frac{8 - x}{2}$, a length of $4 - \\frac{3x}{2}$, and $\\int_0^{8/3}\\left(4 - \\frac{3x}{2}\\right) dx = \\frac{32}{3} - \\frac{16}{3} = \\frac{16}{3}$, giving $\\frac{4}{27}$ again ✓. The choice $\\frac{5}{12}$ DROPS THE CONDITION $y > x$, keeping the whole trapezoid under $x + 2y = 8$ ✗; $\\frac{1}{2}$ KEEPS ONLY $y > x$ ✗; $\\frac{2}{27}$ HALVES THE TRIANGLE AREA A SECOND TIME ✗.',
    },
    {
      q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 6]$, independently. What is the probability that each number is less than twice the other and their sum is less than $6$?',
      fig: {
        view: frame(6, 6),
        elems: [
          box(6, 6),
          { t: 'poly', pts: [[0, 0], [4, 2], [2, 4]] },
          { t: 'seg', a: [0, 0], b: [3, 6], dash: true },
          { t: 'seg', a: [0, 0], b: [6, 3], dash: true },
          { t: 'seg', a: [6, 0], b: [0, 6], dash: true },
          lab(3, 0, '6', 0, 16),
          lab(0, 3, '6', -12, 4),
          lab(6, 0, 'x', 14, 4),
          lab(0, 6, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{12}$'],
      answer: 1,
      solution:
        'The conditions $y < 2x$ and $x < 2y$ give the wedge between $y = 2x$ and $y = \\frac{x}{2}$, and the line $x + y = 6$ crosses those edges at $(2, 4)$ and $(4, 2)$. The favorable region is the triangle $(0, 0)$, $(4, 2)$, $(2, 4)$: by the shoelace formula its area is $\\frac{1}{2}|4 \\cdot 4 - 2 \\cdot 2| = 6$, so the probability is $\\frac{6}{36} = \\frac{1}{6}$ ✓. Second route, slicing vertically: for $x \\in [0, 2]$ the favorable $y$ run from $\\frac{x}{2}$ to $2x$, length $\\frac{3x}{2}$, and $\\int_0^2 \\frac{3x}{2}\\,dx = 3$; for $x \\in [2, 4]$ they run from $\\frac{x}{2}$ to $6 - x$, length $6 - \\frac{3x}{2}$, and $\\int_2^4 \\left(6 - \\frac{3x}{2}\\right) dx = 3$. The area is $3 + 3 = 6$, so the probability is again $\\frac{1}{6}$ ✓. The choice $\\frac{1}{2}$ KEEPS THE WHOLE WEDGE, ignoring the sum condition ✗; $\\frac{1}{3}$ SOLVES THE WRONG SIDE of the line $x + y = 6$ ✗; $\\frac{1}{12}$ HALVES THE TRIANGLE AREA A SECOND TIME ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 10,
  challenge,
}
