// Counting & Probability — Chapter 10: Geometric Probability
// All problems, explanations, and examples are original MathQuest content.

// Every curved boundary in this chapter is sampled from the same exact
// geometry the solution computes with, so figures are to scale by construction.
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
// A region with a hole: trace the outer boundary one way and the hole the other
// way, joined by a bridge from outer[0] to inner[0] (zero length when they touch).
const ring = (outer, inner) => [...outer, outer[0], inner[0], ...inner.slice(1).reverse(), inner[0]]
const box = (w, h, x = 0, y = 0) => ({ t: 'poly', pts: [[x, y], [x + w, y], [x + w, y + h], [x, y + h]], fill: false })
const lab = (x, y, text, dx = 0, dy = 0) => ({ t: 'label', p: [x, y], text, dx, dy })
const frame = (w, h) => {
  const pad = 0.14 * Math.max(w, h)
  return [-pad, -pad, w + pad, h + pad]
}

const s102 = {
  id: '10.2',
  title: 'Probability Using Lengths',
  learn: {
    concepts: [
      {
        heading: 'When counting fails, measure',
        body: 'Pick a point at random on a segment and every point is equally likely — but there are infinitely many of them, so "favorable outcomes over total outcomes" has nothing to count. Length takes over the job of counting: $P = \\frac{\\text{favorable length}}{\\text{total length}}$. A point chosen at random on a segment of length $10$ lands in a particular stretch of length $3$ with probability $\\frac{3}{10}$.',
      },
      {
        heading: 'Time is a segment',
        body: 'A moment chosen at random inside a time window is a point on a number line. If a shuttle leaves every $20$ minutes and you show up at a random moment, your wait is a random point in $[0, 20]$; waiting under $5$ minutes is a stretch of length $5$, so the probability is $\\frac{5}{20} = \\frac{1}{4}$. Draw the window, mark the moments that satisfy the condition, and compare lengths.',
      },
      {
        heading: 'Endpoints weigh nothing',
        body: 'A single point has length $0$, so it makes no difference whether a condition says "less than $5$" or "at most $5$" — the probability is the same. That is unlike counting integers, where the boundary value is a whole extra outcome. The trap runs the other way too: never add $1$ the way you would for a list of integers.',
      },
      {
        heading: 'Turn the condition into stretches',
        body: 'A condition like $x^2 < 9$ or "closer to $A$ than to $B$" is really a description of which stretches of the segment count. Find the boundary points where the condition switches on or off, add the lengths of the stretches where it holds, and divide by the whole length. When there are several stretches, check whether any of them overlap before adding.',
      },
    ],
    examples: [
      {
        problem: 'A point $P$ is chosen at random on a segment $AB$ of length $15$. What is the probability that $P$ is within $3$ units of one of the endpoints?',
        steps: [
          'The points within $3$ of $A$ form a stretch of length $3$, and the points within $3$ of $B$ form another stretch of length $3$.',
          'Since $3 + 3 < 15$, the two stretches do not overlap, so the favorable length is $6$.',
          'The probability is $\\frac{6}{15} = \\frac{2}{5}$.',
        ],
        answer: '$\\frac{2}{5}$',
      },
      {
        problem: 'A tram stops at Mia’s corner every $12$ minutes, and she walks up at a random moment. What is the probability that she has to wait more than $9$ minutes?',
        steps: [
          'Measure time from the tram she just missed: she arrives at a random moment in $[0, 12]$, and her wait is $12$ minus that moment.',
          'She waits more than $9$ minutes exactly when she arrives less than $3$ minutes after the previous tram, a stretch of length $3$.',
          'The probability is $\\frac{3}{12} = \\frac{1}{4}$.',
        ],
        answer: '$\\frac{1}{4}$',
      },
      {
        problem: 'A real number $x$ is chosen at random from the interval $[-3, 5]$. What is the probability that $x^2 < 4$?',
        steps: [
          'The interval has length $5 - (-3) = 8$.',
          'The condition $x^2 < 4$ means $-2 < x < 2$, not just $x < 2$: a negative number like $-3$ has a square bigger than $4$.',
          'The stretch from $-2$ to $2$ has length $4$, and it lies entirely inside $[-3, 5]$.',
          'So the probability is $\\frac{4}{8} = \\frac{1}{2}$.',
        ],
        answer: '$\\frac{1}{2}$',
      },
    ],
  },
  problems: [
    {
      q: 'A point is chosen at random on a segment $AB$ of length $18$. What is the probability that it is within $3$ units of $A$?',
      choices: ['$\\frac{1}{5}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{5}{6}$'],
      answer: 1,
      solution: 'The favorable points form a stretch of length $3$ starting at $A$, out of a total length of $18$, so the probability is $\\frac{3}{18} = \\frac{1}{6}$. Dividing by the leftover $15$ gives the wrong $\\frac{1}{5}$; $\\frac{1}{3}$ counts a stretch at both ends, but the question only asks about $A$; $\\frac{5}{6}$ is the complement.',
    },
    {
      q: 'A real number is chosen at random from the interval $[2, 12]$. What is the probability that it is less than $5$?',
      choices: ['$\\frac{3}{10}$', '$\\frac{1}{2}$', '$\\frac{5}{12}$', '$\\frac{7}{10}$'],
      answer: 0,
      solution: 'The interval has length $12 - 2 = 10$, and the favorable numbers run from $2$ up to $5$, a stretch of length $3$. The probability is $\\frac{3}{10}$. Using $5$ as the favorable length forgets that the interval starts at $2$, and $\\frac{5}{12}$ forgets it in the denominator as well; $\\frac{7}{10}$ is the complement.',
    },
    {
      q: 'A bus stops outside Theo’s school every $15$ minutes. He walks out at a random moment. What is the probability that he waits less than $6$ minutes for the next bus?',
      choices: ['$\\frac{1}{3}$', '$\\frac{3}{5}$', '$\\frac{2}{5}$', '$\\frac{2}{3}$'],
      answer: 2,
      solution: 'His wait is a random point in $[0, 15]$, and waiting less than $6$ minutes is a stretch of length $6$, so the probability is $\\frac{6}{15} = \\frac{2}{5}$. The complement $\\frac{3}{5}$ is the chance he waits $6$ minutes or more; $\\frac{2}{3}$ comes from dividing by $15 - 6 = 9$ instead of $15$.',
    },
    {
      q: 'Points $A$, $C$, and $B$ lie on a line in that order with $AC = 3$ and $CB = 7$, as shown. A point $P$ is chosen at random on segment $AB$. What is the probability that $P$ is closer to $C$ than to $B$?',
      fig: {
        view: [-0.8, -1.3, 10.8, 1.3],
        elems: [
          { t: 'seg', a: [0, 0], b: [10, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: -4, dy: -10 },
          { t: 'point', p: [3, 0], label: 'C', dx: -4, dy: -10 },
          { t: 'point', p: [10, 0], label: 'B', dx: -4, dy: -10 },
          lab(1.5, 0, '3', 0, 18),
          lab(6.5, 0, '7', 0, 18),
        ],
      },
      choices: ['$\\frac{3}{10}$', '$\\frac{7}{20}$', '$\\frac{1}{2}$', '$\\frac{13}{20}$'],
      answer: 3,
      solution: 'Put $A$ at $0$, so $C$ is at $3$ and $B$ is at $10$. A point is closer to $C$ than to $B$ exactly when it lies to the left of the midpoint of $CB$, which is at $6.5$. That stretch runs from $0$ to $6.5$, so the probability is $\\frac{6.5}{10} = \\frac{13}{20}$. Stopping at $C$ itself gives $\\frac{3}{10}$, and $\\frac{7}{20}$ is the complement.',
    },
    {
      q: 'A traffic light repeats a cycle: red for $40$ seconds, then green for $50$ seconds, then yellow for $5$ seconds. A car reaches the light at a random moment. What is the probability that the light is red or yellow?',
      choices: ['$\\frac{9}{19}$', '$\\frac{8}{19}$', '$\\frac{1}{2}$', '$\\frac{10}{19}$'],
      answer: 0,
      solution: 'One full cycle lasts $40 + 50 + 5 = 95$ seconds, and the light is red or yellow for $40 + 5 = 45$ of them, so the probability is $\\frac{45}{95} = \\frac{9}{19}$. Forgetting the yellow gives $\\frac{8}{19}$; leaving yellow out of the cycle length gives $\\frac{45}{90} = \\frac{1}{2}$; $\\frac{10}{19}$ is the green share.',
    },
    {
      q: 'A real number $x$ is chosen at random from $[-4, 6]$. What is the probability that $x^3 < 8$?',
      choices: ['$\\frac{2}{5}$', '$\\frac{1}{2}$', '$\\frac{3}{5}$', '$\\frac{4}{5}$'],
      answer: 2,
      solution: 'Cubing keeps order, and negative numbers have negative cubes, so $x^3 < 8$ means exactly $x < 2$. The favorable stretch runs from $-4$ to $2$, length $6$, out of a total length of $10$: the probability is $\\frac{3}{5}$. Treating it like a square and taking $-2 < x < 2$ gives $\\frac{2}{5}$, which is also the complement.',
    },
    {
      q: 'A $24$-inch wire is cut at a point chosen at random along its length. What is the probability that the shorter piece is at least $8$ inches long?',
      choices: ['$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
      answer: 1,
      solution: 'Measure the cut from one end. The shorter piece is at least $8$ inches exactly when both pieces are, which means the cut lies between $8$ and $16$ inches, a stretch of length $8$. The probability is $\\frac{8}{24} = \\frac{1}{3}$. The stretches $[0, 8]$ and $[16, 24]$ are the cuts that make a piece shorter than $8$, so together they give the complement $\\frac{2}{3}$.',
    },
    {
      q: 'A real number $x$ is chosen at random from $[0, 20]$. What is the probability that $|x - 8| < 3$ or $|x - 14| < 4$?',
      choices: ['$\\frac{2}{5}$', '$\\frac{3}{5}$', '$\\frac{7}{10}$', '$\\frac{13}{20}$'],
      answer: 3,
      solution: 'The first condition is the stretch $5 < x < 11$ (length $6$) and the second is $10 < x < 18$ (length $8$). They overlap on $10 < x < 11$, so together they cover $5 < x < 18$, a stretch of length $13$, and the probability is $\\frac{13}{20}$. Adding $6 + 8$ without removing the overlap gives $\\frac{14}{20} = \\frac{7}{10}$; $\\frac{3}{5}$ comes from subtracting the overlap twice, and $\\frac{2}{5}$ is the second stretch alone.',
    },
    {
      q: 'A point $P$ is chosen at random on a segment $AB$ of length $10$. What is the probability that $PA \\cdot PB > 16$?',
      choices: ['$\\frac{3}{5}$', '$\\frac{2}{5}$', '$\\frac{4}{5}$', '$\\frac{1}{2}$'],
      answer: 0,
      solution: 'Let $PA = x$, so $PB = 10 - x$ and the condition is $x(10 - x) > 16$, which rearranges to $x^2 - 10x + 16 < 0$, or $(x - 2)(x - 8) < 0$. That holds exactly when $2 < x < 8$, a stretch of length $6$, so the probability is $\\frac{6}{10} = \\frac{3}{5}$. Taking the outside of the two roots instead gives the complement $\\frac{2}{5}$.',
    },
    {
      q: 'Two bus routes serve one stop. Route A buses leave at $12$-minute intervals starting on the hour ($0, 12, 24, \\ldots$ minutes past), and Route B buses leave at $20$-minute intervals starting at $5$ minutes past the hour. Nia arrives at a random moment and takes whichever bus leaves first. What is the probability that she waits less than $3$ minutes?',
      choices: ['$\\frac{1}{4}$', '$\\frac{2}{5}$', '$\\frac{11}{30}$', '$\\frac{11}{20}$'],
      answer: 2,
      solution: 'The pattern repeats every $60$ minutes, and in one hour buses leave at $0, 5, 12, 24, 25, 36, 45$, and $48$ minutes past. Nia waits less than $3$ minutes when she arrives in the $3$ minutes before some departure. The windows before $24$ and before $25$ overlap, together covering $21$ to $25$ (length $4$); the other six windows are separate and have length $3$ each. The favorable length is $4 + 18 = 22$, so the probability is $\\frac{22}{60} = \\frac{11}{30}$. Counting $8 \\times 3 = 24$ ignores the overlap and gives $\\frac{2}{5}$; $\\frac{1}{4}$ uses Route A alone.',
    },
  ],
}

const s103 = {
  id: '10.3',
  title: 'Probability Using Areas',
  learn: {
    concepts: [
      {
        heading: 'Area is the new length',
        body: 'When a point is chosen at random inside a region, every spot is equally likely, and the chance of landing in a target is $P = \\frac{\\text{favorable area}}{\\text{total area}}$. Both areas are computed exactly; if a circle is involved the answer keeps a $\\pi$ in it, like $\\frac{\\pi}{4}$, and that is the finished form — nobody wants a decimal here.',
      },
      {
        heading: 'Match the size to the shape',
        body: 'The most common slip is mixing up which number belongs to which shape. A circle inscribed in a square has radius equal to half the side, so a square of side $2r$ (area $4r^2$) around a circle of area $\\pi r^2$ gives $\\frac{\\pi}{4}$. A square inscribed in a circle has diagonal $2r$, so its area is $\\frac{(2r)^2}{2} = 2r^2$ and the probability is $\\frac{2}{\\pi}$. Write the side and the radius down separately before squaring anything.',
      },
      {
        heading: 'Borders and complements',
        body: 'A target described as "within $1$ of the edge" is the whole shape with an inner copy removed, so its area is total minus inner. Careful: shrinking a rectangle by $1$ on every side takes $2$ off each dimension. And when a question says "outside" or "not within", it is usually easiest to find the probability of the inside and subtract from $1$.',
      },
      {
        heading: 'Two random numbers are one random point',
        body: 'If $x$ and $y$ are each chosen at random from $[0, 60]$, the pair $(x, y)$ is a random point in a $60 \\times 60$ square. A condition like "within $15$ of each other", $|x - y| \\le 15$, is a diagonal band; the band is the square minus two corner triangles with legs $45$, so it has area $3600 - 2 \\cdot \\frac{45 \\cdot 45}{2} = 1575$ and probability $\\frac{1575}{3600} = \\frac{7}{16}$. Sketch the square, draw the boundary lines of the condition, and shade.',
      },
    ],
    examples: [
      {
        problem: 'A $10$ by $6$ rectangular board has a $4$ by $3$ rectangle painted on it, as shown. A dart lands at a random point on the board. What is the probability that it lands on the painted rectangle?',
        fig: {
          view: frame(10, 6),
          elems: [
            box(10, 6),
            { t: 'poly', pts: [[3, 1.5], [7, 1.5], [7, 4.5], [3, 4.5]] },
            lab(5, 0, '10', 0, 16),
            lab(0, 3, '6', -12, 4),
            lab(5, 4.5, '4', 0, -6),
            lab(7, 3, '3', 10, 4),
          ],
        },
        steps: [
          'The whole board has area $10 \\cdot 6 = 60$.',
          'The painted rectangle has area $4 \\cdot 3 = 12$.',
          'So the probability is $\\frac{12}{60} = \\frac{1}{5}$; where the painted rectangle sits on the board makes no difference.',
        ],
        answer: '$\\frac{1}{5}$',
      },
      {
        problem: 'A circle of radius $2$ is drawn in the middle of a square of side $8$. A point is chosen at random inside the square. What is the probability that it lies inside the circle?',
        fig: {
          view: frame(8, 8),
          elems: [
            box(8, 8),
            { t: 'poly', pts: circlePts(4, 4, 2) },
            { t: 'seg', a: [4, 4], b: [6, 4], dash: true },
            { t: 'point', p: [4, 4] },
            lab(5, 4, '2', 0, -6),
            lab(4, 0, '8', 0, 16),
          ],
        },
        steps: [
          'The square has area $8^2 = 64$.',
          'The circle has area $\\pi \\cdot 2^2 = 4\\pi$.',
          'The probability is $\\frac{4\\pi}{64} = \\frac{\\pi}{16}$, and that expression with $\\pi$ is the final answer.',
        ],
        answer: '$\\frac{\\pi}{16}$',
      },
      {
        problem: 'Priya and Quinn each arrive at a café at a random time between 3:00 and 4:00, independently. Each waits $20$ minutes for the other and then leaves. What is the probability that they meet?',
        fig: {
          view: frame(60, 60),
          elems: [
            box(60, 60),
            { t: 'poly', pts: [[0, 0], [20, 0], [60, 40], [60, 60], [40, 60], [0, 20]] },
            lab(30, 0, '60', 0, 16),
            lab(0, 30, '60', -14, 4),
            lab(30, 0, 'Priya (min)', 0, 32),
            lab(0, 60, 'Quinn (min)', 0, -10),
          ],
        },
        steps: [
          'Let $x$ and $y$ be their arrival times in minutes after 3:00; the pair $(x, y)$ is a random point in a $60 \\times 60$ square of area $3600$.',
          'They meet exactly when $|x - y| \\le 20$, the band between the lines $y = x + 20$ and $y = x - 20$.',
          'The two corner triangles outside the band each have legs $40$, so the band has area $3600 - 2 \\cdot \\frac{40 \\cdot 40}{2} = 3600 - 1600 = 2000$.',
          'The probability is $\\frac{2000}{3600} = \\frac{5}{9}$.',
        ],
        answer: '$\\frac{5}{9}$',
      },
    ],
  },
  problems: [
    {
      q: 'A triangle is drawn inside a $12$ by $8$ rectangle as shown, with a base of length $8$ along the bottom side and its top vertex on the top side. A point is chosen at random in the rectangle. What is the probability that it lies inside the triangle?',
      fig: {
        view: frame(12, 8),
        elems: [
          box(12, 8),
          { t: 'poly', pts: [[2, 0], [10, 0], [4, 8]] },
          lab(6, 0, '12', 0, 16),
          lab(0, 4, '8', -12, 4),
          lab(6, 0, '8', 0, -6),
        ],
      },
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$'],
      answer: 2,
      solution: 'The rectangle has area $12 \\cdot 8 = 96$. The triangle’s base is $8$ and its height is the full $8$ of the rectangle, wherever the top vertex sits, so its area is $\\frac{1}{2} \\cdot 8 \\cdot 8 = 32$. The probability is $\\frac{32}{96} = \\frac{1}{3}$. Forgetting the $\\frac{1}{2}$ in the triangle formula gives $\\frac{2}{3}$, and $\\frac{1}{2}$ is what you would get if the base were the whole $12$.',
    },
    {
      q: 'A quarter circle of radius $6$ is drawn inside a square of side $6$, centered at one corner of the square, as shown. A point is chosen at random in the square. What is the probability that it lies inside the quarter circle?',
      fig: {
        view: frame(6, 6),
        elems: [
          box(6, 6),
          { t: 'poly', pts: [[0, 0], ...arcPts(0, 0, 6, 0, 90)] },
          lab(3, 0, '6', 0, 16),
          lab(0, 3, '6', -12, 4),
        ],
      },
      choices: ['$\\frac{\\pi}{4}$', '$\\frac{\\pi}{16}$', '$\\frac{\\pi}{8}$', '$\\frac{\\pi}{6}$'],
      answer: 0,
      solution: 'The square has area $36$, and a quarter of a circle of radius $6$ has area $\\frac{1}{4} \\cdot 36\\pi = 9\\pi$. The probability is $\\frac{9\\pi}{36} = \\frac{\\pi}{4}$. Taking a quarter of that again gives $\\frac{\\pi}{16}$; using $6\\pi$ for the quarter circle (radius not squared) gives $\\frac{\\pi}{6}$.',
    },
    {
      q: 'A point is chosen at random inside a square of side $8$. What is the probability that it is within $1$ unit of at least one side of the square?',
      fig: {
        view: frame(8, 8),
        elems: [
          box(8, 8),
          { t: 'poly', pts: ring([[8, 4], [8, 8], [0, 8], [0, 0], [8, 0]], [[7, 4], [7, 7], [1, 7], [1, 1], [7, 1]]) },
          lab(4, 0, '8', 0, 16),
          lab(4, 7.5, '1', 0, 4),
        ],
      },
      choices: ['$\\frac{15}{64}$', '$\\frac{9}{16}$', '$\\frac{1}{2}$', '$\\frac{7}{16}$'],
      answer: 3,
      solution: 'The points more than $1$ from every side form an inner square of side $8 - 2 = 6$, area $36$. The border region is $64 - 36 = 28$, so the probability is $\\frac{28}{64} = \\frac{7}{16}$. Shrinking the side by only $1$ gives an inner area of $49$ and the wrong $\\frac{15}{64}$; $\\frac{9}{16}$ is the probability of the inner square, the complement.',
    },
    {
      q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 4]$, independently. What is the probability that $x + y < 2$?',
      fig: {
        view: frame(4, 4),
        elems: [
          box(4, 4),
          { t: 'poly', pts: [[0, 0], [2, 0], [0, 2]] },
          lab(2, 0, '4', 0, 16),
          lab(0, 2, '4', -12, 4),
          lab(4, 0, 'x', 14, 4),
          lab(0, 4, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{1}{4}$', '$\\frac{1}{8}$', '$\\frac{1}{2}$', '$\\frac{1}{16}$'],
      answer: 1,
      solution: 'The pair $(x, y)$ is a random point in a $4 \\times 4$ square of area $16$. The condition $x + y < 2$ is the triangle below the line from $(2, 0)$ to $(0, 2)$, with area $\\frac{1}{2} \\cdot 2 \\cdot 2 = 2$. The probability is $\\frac{2}{16} = \\frac{1}{8}$. Using the whole $2 \\times 2$ square instead of half of it gives $\\frac{1}{4}$.',
    },
    {
      q: 'A circular target has radius $6$, and its bullseye is a concentric circle of radius $2$. A dart hits a random point on the target. What is the probability that it hits the bullseye?',
      fig: {
        view: [-7, -7, 7, 7],
        elems: [
          { t: 'circle', c: [0, 0], r: 6 },
          { t: 'poly', pts: circlePts(0, 0, 2) },
          { t: 'seg', a: [0, 0], b: [-4.243, 4.243], dash: true },
          { t: 'seg', a: [0, 0], b: [2, 0], dash: true },
          { t: 'point', p: [0, 0] },
          lab(-2.121, 2.121, '6', -10, -4),
          lab(1, 0, '2', 0, -6),
        ],
      },
      choices: ['$\\frac{1}{9}$', '$\\frac{1}{3}$', '$\\frac{1}{6}$', '$\\frac{8}{9}$'],
      answer: 0,
      solution: 'The areas are $36\\pi$ and $4\\pi$, so the probability is $\\frac{4\\pi}{36\\pi} = \\frac{1}{9}$; the $\\pi$ cancels. Comparing radii instead of areas gives $\\frac{1}{3}$, and $\\frac{8}{9}$ is the probability of missing the bullseye.',
    },
    {
      q: 'A point is chosen at random inside square $ABCD$ with side $6$. What is the probability that it is closer to side $AB$ than to each of the other three sides?',
      fig: {
        view: frame(6, 6),
        elems: [
          box(6, 6),
          { t: 'poly', pts: [[0, 0], [6, 0], [3, 3]] },
          { t: 'seg', a: [0, 0], b: [6, 6], dash: true },
          { t: 'seg', a: [6, 0], b: [0, 6], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 12 },
          { t: 'point', p: [6, 0], label: 'B', dx: 5, dy: 12 },
          { t: 'point', p: [6, 6], label: 'C', dx: 5, dy: -5 },
          { t: 'point', p: [0, 6], label: 'D', dx: -12, dy: -5 },
          lab(0, 3, '6', -12, 4),
        ],
      },
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{1}{4}$', '$\\frac{1}{8}$'],
      answer: 2,
      solution: 'The points closer to $AB$ than to the opposite side $CD$ are the bottom half; being closer to $AB$ than to $AD$ means lying below the diagonal from $A$, and closer than to $BC$ means lying below the diagonal from $B$. Together these cut out the triangle with base $AB$ and apex at the center, which has area $\\frac{1}{2} \\cdot 6 \\cdot 3 = 9$ out of $36$, so the probability is $\\frac{1}{4}$ — just as symmetry predicts, since each of the four sides claims an equal share. Stopping after the first condition gives $\\frac{1}{2}$.',
    },
    {
      q: 'A rectangle is $6$ units wide and $4$ units tall. A semicircle is drawn inside it with its diameter along the left side of the rectangle, as shown. A point is chosen at random in the rectangle. What is the probability that it lies inside the semicircle?',
      fig: {
        view: frame(6, 4),
        elems: [
          box(6, 4),
          { t: 'poly', pts: arcPts(0, 2, 2, -90, 90) },
          lab(3, 0, '6', 0, 16),
          lab(0, 2, '4', -12, 4),
        ],
      },
      choices: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{12}$', '$\\frac{\\pi}{24}$', '$\\frac{\\pi}{3}$'],
      answer: 1,
      solution: 'The diameter is the $4$-unit side, so the radius is $2$ and the semicircle has area $\\frac{1}{2} \\cdot \\pi \\cdot 2^2 = 2\\pi$. The rectangle has area $24$, so the probability is $\\frac{2\\pi}{24} = \\frac{\\pi}{12}$. Using the diameter $4$ as the radius gives $8\\pi$ and the wrong $\\frac{\\pi}{3}$; forgetting the half gives $\\frac{\\pi}{6}$.',
    },
    {
      q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 6]$, independently. What is the probability that they differ by at least $2$?',
      fig: {
        view: frame(6, 6),
        elems: [
          box(6, 6),
          { t: 'poly', pts: [[0, 2], [4, 6], [0, 6]] },
          { t: 'poly', pts: [[2, 0], [6, 0], [6, 4]] },
          lab(3, 0, '6', 0, 16),
          lab(0, 3, '6', -12, 4),
          lab(6, 0, 'x', 14, 4),
          lab(0, 6, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{1}{3}$', '$\\frac{5}{9}$', '$\\frac{2}{3}$', '$\\frac{4}{9}$'],
      answer: 3,
      solution: 'In the $6 \\times 6$ square, $|x - y| \\ge 2$ is the pair of corner triangles above $y = x + 2$ and below $y = x - 2$. Each has legs $6 - 2 = 4$, so together they have area $2 \\cdot \\frac{4 \\cdot 4}{2} = 16$, and the probability is $\\frac{16}{36} = \\frac{4}{9}$. The band between the lines, $\\frac{5}{9}$, is the complement; $\\frac{1}{3}$ comes from giving the triangles legs $6$ and $2$.',
    },
    {
      q: 'Ana and Ben each arrive at a park at a random time between noon and 1:00, independently. Whoever comes first waits for the other, but Ana will wait only $10$ minutes while Ben will wait $20$ minutes. What is the probability that they meet?',
      fig: {
        view: frame(60, 60),
        elems: [
          box(60, 60),
          { t: 'poly', pts: [[0, 0], [20, 0], [60, 40], [60, 60], [50, 60], [0, 10]] },
          lab(30, 0, '60', 0, 16),
          lab(0, 30, '60', -14, 4),
          lab(30, 0, 'Ana (min)', 0, 32),
          lab(0, 60, 'Ben (min)', 0, -10),
        ],
      },
      choices: ['$\\frac{11}{36}$', '$\\frac{31}{72}$', '$\\frac{41}{72}$', '$\\frac{5}{9}$'],
      answer: 1,
      solution: 'Let $x$ and $y$ be Ana’s and Ben’s arrival times in minutes after noon. If Ana is first they meet when $y - x \\le 10$; if Ben is first they meet when $x - y \\le 20$. The failures are two corner triangles of the $60 \\times 60$ square: $y - x > 10$ has legs $50$ (area $1250$) and $x - y > 20$ has legs $40$ (area $800$). So the meeting region has area $3600 - 2050 = 1550$ and the probability is $\\frac{1550}{3600} = \\frac{31}{72}$. Giving both people Ana’s $10$-minute patience yields $\\frac{11}{36}$, giving both Ben’s $20$ yields $\\frac{5}{9}$, and $\\frac{41}{72}$ is the complement.',
    },
    {
      q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 6]$, independently. What is the probability that segments of lengths $x$, $y$, and $3$ can be the three sides of a triangle?',
      fig: {
        view: frame(6, 6),
        elems: [
          box(6, 6),
          { t: 'poly', pts: [[3, 0], [6, 3], [6, 6], [3, 6], [0, 3]] },
          lab(3, 0, '6', 0, 16),
          lab(0, 3, '6', -12, 4),
          lab(6, 0, 'x', 14, 4),
          lab(0, 6, 'y', 0, -10),
        ],
      },
      choices: ['$\\frac{5}{8}$', '$\\frac{3}{4}$', '$\\frac{7}{8}$', '$\\frac{1}{2}$'],
      answer: 0,
      solution: 'Three lengths make a triangle when each is less than the sum of the other two: $x + y > 3$, $x + 3 > y$, and $y + 3 > x$. In the $6 \\times 6$ square each condition fails on a corner triangle with legs $3$, area $\\frac{9}{2}$: the bottom-left corner for the first, and the top-left and bottom-right corners for the other two. The three corners do not overlap, so the favorable area is $36 - 3 \\cdot \\frac{9}{2} = \\frac{45}{2}$ and the probability is $\\frac{45}{72} = \\frac{5}{8}$. Checking only $x + y > 3$ gives $\\frac{7}{8}$; checking only the two conditions that amount to $|x - y| < 3$ gives $\\frac{3}{4}$.',
    },
  ],
}

const challenge = [
  {
    q: 'A point is chosen at random on a segment of length $25$. What is the probability that it lies within $4$ units of the midpoint of the segment?',
    choices: ['$\\frac{8}{25}$', '$\\frac{4}{25}$', '$\\frac{2}{5}$', '$\\frac{16}{25}$'],
    answer: 0,
    solution: 'Within $4$ of the midpoint means $4$ on either side, a stretch of length $8$ in the middle of the segment. The probability is $\\frac{8}{25}$. Counting only one side gives $\\frac{4}{25}$, and doubling once too often gives $\\frac{16}{25}$.',
  },
  {
    q: 'A real number $x$ is chosen at random from $[3, 13]$. What is the probability that $|x - 6| \\le 2$?',
    choices: ['$\\frac{1}{5}$', '$\\frac{4}{13}$', '$\\frac{2}{5}$', '$\\frac{1}{2}$'],
    answer: 2,
    solution: 'The condition means $4 \\le x \\le 8$, a stretch of length $4$ inside an interval of length $10$, so the probability is $\\frac{2}{5}$. Using $2$ as the favorable length forgets that the stretch extends both ways from $6$; $\\frac{4}{13}$ uses the endpoint $13$ as the total length.',
  },
  {
    q: 'A square of side $4$ is drawn inside a circle of radius $4$, with the same center, as shown. A point is chosen at random inside the circle. What is the probability that it lies inside the square?',
    fig: {
      view: [-5, -5, 5, 5],
      elems: [
        { t: 'circle', c: [0, 0], r: 4 },
        { t: 'poly', pts: [[-2, -2], [2, -2], [2, 2], [-2, 2]] },
        { t: 'seg', a: [0, 0], b: [-2.828, 2.828], dash: true },
        { t: 'point', p: [0, 0] },
        lab(-1.414, 1.414, '4', -10, -4),
        lab(0, -2, '4', 0, 14),
      ],
    },
    choices: ['$\\frac{2}{\\pi}$', '$\\frac{1}{\\pi}$', '$\\frac{1}{4}$', '$\\frac{4}{\\pi}$'],
    answer: 1,
    solution: 'The square has area $16$ and the circle has area $16\\pi$, so the probability is $\\frac{16}{16\\pi} = \\frac{1}{\\pi}$. The answer $\\frac{2}{\\pi}$ belongs to a square inscribed in the circle, with its corners on the circle — this square is smaller, since its diagonal $4\\sqrt{2}$ is well short of the diameter $8$. Doubling that answer by mistake gives $\\frac{4}{\\pi}$, which is bigger than $1$ and so cannot be a probability.',
  },
  {
    q: 'A crosswalk signal shows WALK for $25$ seconds and then DON’T WALK for $35$ seconds, over and over. Omar reaches the crosswalk at a random moment and will step off the curb only while the signal shows WALK. What is the probability that he can start crossing within $10$ seconds of arriving?',
    choices: ['$\\frac{5}{12}$', '$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{7}{12}$'],
    answer: 3,
    solution: 'The cycle lasts $60$ seconds. Omar can start within $10$ seconds if he arrives during WALK ($25$ seconds) or during the last $10$ seconds of DON’T WALK. That is $35$ favorable seconds out of $60$, so the probability is $\\frac{35}{60} = \\frac{7}{12}$. Counting only WALK gives $\\frac{5}{12}$; counting only the final $10$ seconds gives $\\frac{1}{6}$.',
  },
  {
    q: 'A point is chosen at random inside a circle of radius $6$. What is the probability that it is closer to the circle’s edge than to its center?',
    fig: {
      view: [-7, -7, 7, 7],
      elems: [
        { t: 'circle', c: [0, 0], r: 6 },
        { t: 'poly', pts: ring(circlePts(0, 0, 6), circlePts(0, 0, 3)) },
        { t: 'seg', a: [0, 0], b: [-4.243, 4.243], dash: true },
        { t: 'point', p: [0, 0] },
        lab(-2.121, 2.121, '6', -10, -4),
      ],
    },
    choices: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{3}{4}$', '$\\frac{2}{3}$'],
    answer: 2,
    solution: 'A point at distance $d$ from the center is at distance $6 - d$ from the edge, so it is closer to the edge when $6 - d < d$, that is, $d > 3$. The favorable region is the ring between radius $3$ and radius $6$, with area $36\\pi - 9\\pi = 27\\pi$, and the probability is $\\frac{27\\pi}{36\\pi} = \\frac{3}{4}$. Comparing radii instead of areas suggests $\\frac{1}{2}$, and $\\frac{1}{4}$ is the inner disk, the complement.',
  },
  {
    q: 'Square $ABCD$ has side $6$. A point $P$ is chosen at random on side $AB$. What is the probability that triangle $PBC$ has area less than $6$?',
    fig: {
      view: frame(6, 6),
      elems: [
        box(6, 6),
        { t: 'seg', a: [2.6, 0], b: [6, 6] },
        { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 12 },
        { t: 'point', p: [6, 0], label: 'B', dx: 5, dy: 12 },
        { t: 'point', p: [6, 6], label: 'C', dx: 5, dy: -5 },
        { t: 'point', p: [0, 6], label: 'D', dx: -12, dy: -5 },
        { t: 'point', p: [2.6, 0], label: 'P', dx: -4, dy: 14 },
        lab(0, 3, '6', -12, 4),
      ],
    },
    choices: ['$\\frac{1}{3}$', '$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
    answer: 0,
    solution: 'Triangle $PBC$ has a right angle at $B$, with legs $PB$ and $BC = 6$, so its area is $\\frac{1}{2} \\cdot PB \\cdot 6 = 3 \\cdot PB$. It is less than $6$ exactly when $PB < 2$, a stretch of length $2$ on a side of length $6$, so the probability is $\\frac{2}{6} = \\frac{1}{3}$. Forgetting the $\\frac{1}{2}$ in the area formula gives $PB < 1$ and $\\frac{1}{6}$; $\\frac{2}{3}$ is the complement.',
  },
  {
    q: 'A square has side $4$. At each of its four corners, a quarter circle of radius $1$ is drawn inside the square, centered at that corner, as shown. A point is chosen at random in the square. What is the probability that it lies inside one of the four quarter circles?',
    fig: {
      view: frame(4, 4),
      elems: [
        box(4, 4),
        { t: 'poly', pts: [[0, 0], ...arcPts(0, 0, 1, 0, 90, 24)] },
        { t: 'poly', pts: [[4, 0], ...arcPts(4, 0, 1, 90, 180, 24)] },
        { t: 'poly', pts: [[4, 4], ...arcPts(4, 4, 1, 180, 270, 24)] },
        { t: 'poly', pts: [[0, 4], ...arcPts(0, 4, 1, 270, 360, 24)] },
        lab(2, 0, '4', 0, 16),
        lab(0.5, 0, '1', 0, 16),
      ],
    },
    choices: ['$\\frac{\\pi}{4}$', '$\\frac{\\pi}{16}$', '$\\frac{\\pi}{64}$', '$\\frac{\\pi}{8}$'],
    answer: 1,
    solution: 'Four quarter circles of radius $1$ fit together into one full circle of radius $1$, area $\\pi$. The square has area $16$, so the probability is $\\frac{\\pi}{16}$. Counting only one quarter circle gives $\\frac{\\pi}{64}$; $\\frac{\\pi}{4}$ is the answer for a full circle of radius $2$ inscribed in the square, a different picture.',
  },
  {
    q: 'Cleo arrives at a library at a random time between 2:00 and 3:00, and Dev arrives at a random time between 2:00 and 2:30, independently. They meet if they arrive within $10$ minutes of each other. What is the probability that they meet?',
    fig: {
      view: frame(60, 30),
      elems: [
        box(60, 30),
        { t: 'poly', pts: [[0, 0], [10, 0], [40, 30], [20, 30], [0, 10]] },
        lab(30, 0, '60', 0, 16),
        lab(0, 15, '30', -14, 4),
        lab(30, 0, 'Cleo (min)', 0, 32),
        lab(0, 30, 'Dev (min)', 0, -10),
      ],
    },
    choices: ['$\\frac{5}{9}$', '$\\frac{1}{3}$', '$\\frac{25}{36}$', '$\\frac{11}{36}$'],
    answer: 3,
    solution: 'With $x$ Cleo’s time and $y$ Dev’s time in minutes after 2:00, the pair $(x, y)$ is a random point in a $60 \\times 30$ rectangle of area $1800$. They miss when $x - y > 10$: that region runs from the line $x = y + 10$ out to $x = 60$, a trapezoid with parallel sides $50$ (along the bottom) and $20$ (along the top) and height $30$, area $\\frac{50 + 20}{2} \\cdot 30 = 1050$. They also miss when $y - x > 10$, a triangle with legs $20$, area $200$. The meeting band has area $1800 - 1250 = 550$, so the probability is $\\frac{550}{1800} = \\frac{11}{36}$. The complement is $\\frac{25}{36}$, and $\\frac{5}{9}$ is what a $30 \\times 30$ square would give.',
  },
  {
    q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 4]$, independently. What is the probability that $|x - 2| + |y - 2| < 1$?',
    fig: {
      view: frame(4, 4),
      elems: [
        box(4, 4),
        { t: 'poly', pts: [[3, 2], [2, 3], [1, 2], [2, 1]] },
        { t: 'point', p: [2, 2], label: '(2, 2)', dx: 6, dy: 14 },
        lab(2, 0, '4', 0, 16),
        lab(0, 2, '4', -12, 4),
        lab(4, 0, 'x', 14, 4),
        lab(0, 4, 'y', 0, -10),
      ],
    },
    choices: ['$\\frac{1}{8}$', '$\\frac{1}{16}$', '$\\frac{\\pi}{16}$', '$\\frac{1}{4}$'],
    answer: 0,
    solution: 'The condition describes the points whose horizontal and vertical distances from $(2, 2)$ add to less than $1$: a square tilted $45°$, with vertices $(3, 2)$, $(2, 3)$, $(1, 2)$, and $(2, 1)$. Its diagonals are both $2$, so its area is $\\frac{2 \\cdot 2}{2} = 2$, and the probability is $\\frac{2}{16} = \\frac{1}{8}$. Treating the region as a circle of radius $1$ gives $\\frac{\\pi}{16}$; treating it as an upright square of side $2$ gives $\\frac{1}{4}$.',
  },
  {
    q: 'A stick of length $12$ is cut at two points chosen at random along its length, independently. What is the probability that the three pieces can be arranged to form a triangle?',
    fig: {
      view: frame(12, 12),
      elems: [
        box(12, 12),
        { t: 'poly', pts: [[0, 6], [6, 6], [6, 12]] },
        { t: 'poly', pts: [[6, 0], [12, 6], [6, 6]] },
        { t: 'seg', a: [0, 0], b: [12, 12], dash: true },
        lab(6, 0, '12', 0, 16),
        lab(0, 6, '12', -14, 4),
        lab(12, 0, 'x', 14, 4),
        lab(0, 12, 'y', 0, -10),
      ],
    },
    choices: ['$\\frac{1}{8}$', '$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{3}{4}$'],
    answer: 2,
    solution: 'Let $x$ and $y$ be the two cut positions, so $(x, y)$ is a random point in a $12 \\times 12$ square of area $144$. If $x < y$, the pieces have lengths $x$, $y - x$, and $12 - y$, and three lengths form a triangle exactly when each is less than half the total: $x < 6$, $y - x < 6$, and $y > 6$. That region is the triangle with vertices $(0, 6)$, $(6, 6)$, and $(6, 12)$, area $\\frac{1}{2} \\cdot 6 \\cdot 6 = 18$; the case $y < x$ gives the mirror triangle across $y = x$, so the favorable area is $36$ and the probability is $\\frac{36}{144} = \\frac{1}{4}$. Checking only the middle piece, $|x - y| < 6$, gives $\\frac{3}{4}$; requiring only the two end pieces to be short gives $\\frac{1}{2}$; forgetting the mirror case gives $\\frac{1}{8}$.',
  },
  {
    q: 'Someone glances at a wall clock at a random moment during a $12$-hour period. What is the probability that the smaller angle between the hour hand and the minute hand is less than $30°$?',
    choices: ['$\\frac{1}{12}$', '$\\frac{1}{6}$', '$\\frac{1}{4}$', '$\\frac{1}{3}$'],
    answer: 1,
    solution: 'The minute hand turns $360°$ per hour and the hour hand $30°$ per hour, so the angle measured clockwise from the hour hand to the minute hand grows at a steady $330°$ per hour. Over $12$ hours it makes exactly $11$ full laps, so it is a random point on a $360°$ circle, every value equally likely. The smaller angle is under $30°$ when that clockwise angle is in the $30°$ just past $0°$ or the $30°$ just before $360°$, a total of $60°$, so the probability is $\\frac{60}{360} = \\frac{1}{6}$. Counting only one of those two stretches gives $\\frac{1}{12}$.',
  },
  {
    q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 6]$, independently. What is the probability that each number is less than twice the other and their sum is greater than $6$?',
    fig: {
      view: frame(6, 6),
      elems: [
        box(6, 6),
        { t: 'poly', pts: [[4, 2], [6, 3], [6, 6], [3, 6], [2, 4]] },
        { t: 'seg', a: [0, 0], b: [3, 6], dash: true },
        { t: 'seg', a: [0, 0], b: [6, 3], dash: true },
        { t: 'seg', a: [0, 6], b: [6, 0], dash: true },
        lab(3, 0, '6', 0, 16),
        lab(0, 3, '6', -12, 4),
        lab(6, 0, 'x', 14, 4),
        lab(0, 6, 'y', 0, -10),
      ],
    },
    choices: ['$\\frac{1}{2}$', '$\\frac{1}{6}$', '$\\frac{1}{4}$', '$\\frac{1}{3}$'],
    answer: 3,
    solution: 'The conditions $y < 2x$ and $x < 2y$ describe the wedge between the lines $y = 2x$ and $y = \\frac{x}{2}$; inside the $6 \\times 6$ square this wedge is the square minus two triangles with legs $6$ and $3$, area $36 - 2 \\cdot 9 = 18$. The line $x + y = 6$ crosses the wedge at $(2, 4)$ and $(4, 2)$, and the part of the wedge below it is the triangle with vertices $(0, 0)$, $(4, 2)$, $(2, 4)$, of area $6$. That leaves $18 - 6 = 12$, so the probability is $\\frac{12}{36} = \\frac{1}{3}$. The wedge alone gives $\\frac{1}{2}$, and $\\frac{1}{6}$ is the triangle that was cut away.',
  },
]

const worksheet = [
  {
    q: 'Points $A$, $B$, and $C$ lie on a line in that order, with $AB = 5$ and $BC = 9$. A point is chosen at random on segment $AC$. What is the probability that it lies on segment $AB$?',
    answer: '$\\frac{5}{14}$',
    solution: '$AC = 5 + 9 = 14$, and the favorable stretch $AB$ has length $5$, so the probability is $\\frac{5}{14}$.',
  },
  {
    q: 'A ferry leaves the pier every $25$ minutes. Lena arrives at a random moment. What is the probability that she waits between $5$ and $15$ minutes for the next ferry?',
    answer: '$\\frac{2}{5}$',
    solution: 'Her wait is a random point in $[0, 25]$, and the stretch from $5$ to $15$ has length $10$, so the probability is $\\frac{10}{25} = \\frac{2}{5}$.',
  },
  {
    q: 'A real number $x$ is chosen at random from $[0, 20]$. What is the probability that $\\sqrt{x} < 3$?',
    answer: '$\\frac{9}{20}$',
    solution: 'Since $x \\ge 0$, the condition $\\sqrt{x} < 3$ means $x < 9$, a stretch of length $9$ in an interval of length $20$, so the probability is $\\frac{9}{20}$.',
  },
  {
    q: 'Two circles of radius $2$ are painted inside a square of side $8$ without overlapping, as shown. A point is chosen at random in the square. What is the probability that it lies inside one of the painted circles?',
    fig: {
      view: frame(8, 8),
      elems: [
        box(8, 8),
        { t: 'poly', pts: circlePts(2.5, 2.5, 2) },
        { t: 'poly', pts: circlePts(5.5, 5.5, 2) },
        { t: 'seg', a: [2.5, 2.5], b: [4.5, 2.5], dash: true },
        { t: 'point', p: [2.5, 2.5] },
        lab(3.5, 2.5, '2', 0, -6),
        lab(4, 0, '8', 0, 16),
      ],
    },
    answer: '$\\frac{\\pi}{8}$',
    solution: 'Each circle has area $\\pi \\cdot 2^2 = 4\\pi$, so together they cover $8\\pi$ of the square’s $64$. The probability is $\\frac{8\\pi}{64} = \\frac{\\pi}{8}$.',
  },
  {
    q: 'A rectangular pool is $12$ meters long and $8$ meters wide, and a deck $2$ meters wide runs along each of its two long sides, so the pool and decks together form a $12$ by $12$ square, as shown. A leaf lands at a random point of that square. What is the probability that it lands on a deck?',
    fig: {
      view: frame(12, 12),
      elems: [
        box(12, 12),
        { t: 'poly', pts: [[0, 0], [12, 0], [12, 2], [0, 2]] },
        { t: 'poly', pts: [[0, 10], [12, 10], [12, 12], [0, 12]] },
        lab(6, 0, '12', 0, 16),
        lab(0, 6, '8', -12, 4),
        lab(0, 1, '2', -12, 4),
        lab(0, 11, '2', -12, 4),
      ],
    },
    answer: '$\\frac{1}{3}$',
    solution: 'Each deck is $12$ by $2$, area $24$, so the two decks cover $48$ of the square’s $144$. The probability is $\\frac{48}{144} = \\frac{1}{3}$.',
  },
  {
    q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 5]$, independently. What is the probability that $y > 2x$?',
    fig: {
      view: frame(5, 5),
      elems: [
        box(5, 5),
        { t: 'poly', pts: [[0, 0], [2.5, 5], [0, 5]] },
        lab(2.5, 0, '5', 0, 16),
        lab(0, 2.5, '5', -12, 4),
        lab(5, 0, 'x', 14, 4),
        lab(0, 5, 'y', 0, -10),
      ],
    },
    answer: '$\\frac{1}{4}$',
    solution: 'In the $5 \\times 5$ square, $y > 2x$ is the triangle above the line $y = 2x$, with vertices $(0, 0)$, $(0, 5)$, and $(\\frac{5}{2}, 5)$. Its area is $\\frac{1}{2} \\cdot 5 \\cdot \\frac{5}{2} = \\frac{25}{4}$, so the probability is $\\frac{25}{4} \\div 25 = \\frac{1}{4}$.',
  },
  {
    q: 'Amy and Ben each arrive at a bus shelter at a random time during the same $30$-minute window, independently. What is the probability that Amy arrives first and Ben arrives more than $10$ minutes after her?',
    fig: {
      view: frame(30, 30),
      elems: [
        box(30, 30),
        { t: 'poly', pts: [[0, 10], [20, 30], [0, 30]] },
        lab(15, 0, '30', 0, 16),
        lab(0, 15, '30', -14, 4),
        lab(15, 0, 'Amy (min)', 0, 32),
        lab(0, 30, 'Ben (min)', 0, -10),
      ],
    },
    answer: '$\\frac{2}{9}$',
    solution: 'With $x$ Amy’s time and $y$ Ben’s, the condition is $y - x > 10$: the triangle above the line $y = x + 10$ in the $30 \\times 30$ square, with legs $20$. Its area is $200$ out of $900$, so the probability is $\\frac{200}{900} = \\frac{2}{9}$.',
  },
  {
    q: 'A square is inscribed in a circle of radius $3$, with all four corners on the circle. A point is chosen at random inside the circle. What is the probability that it lies inside the square?',
    fig: {
      view: [-4, -4, 4, 4],
      elems: [
        { t: 'circle', c: [0, 0], r: 3 },
        { t: 'poly', pts: [[-2.121, -2.121], [2.121, -2.121], [2.121, 2.121], [-2.121, 2.121]] },
        { t: 'seg', a: [0, 0], b: [2.121, 2.121], dash: true },
        { t: 'point', p: [0, 0] },
        lab(1.061, 1.061, '3', 12, 2),
      ],
    },
    answer: '$\\frac{2}{\\pi}$',
    solution: 'The square’s diagonal is a diameter, $6$, so its area is $\\frac{6 \\cdot 6}{2} = 18$. The circle has area $9\\pi$, so the probability is $\\frac{18}{9\\pi} = \\frac{2}{\\pi}$.',
  },
  {
    q: 'A real number $x$ is chosen at random from $[0, 12]$. What is the probability that $x$ is within $1$ of some multiple of $5$?',
    answer: '$\\frac{5}{12}$',
    solution: 'The multiples of $5$ within reach are $0$, $5$, and $10$. Within $1$ of $0$ is the stretch from $0$ to $1$, length $1$, since the part below $0$ lies outside the interval; within $1$ of $5$ is $(4, 6)$ and within $1$ of $10$ is $(9, 11)$, length $2$ each. The favorable length is $5$ out of $12$, so the probability is $\\frac{5}{12}$.',
  },
  {
    q: 'Two real numbers $x$ and $y$ are each chosen at random from $[0, 6]$, independently. What is the probability that $4 < x + y < 8$?',
    fig: {
      view: frame(6, 6),
      elems: [
        box(6, 6),
        { t: 'poly', pts: [[4, 0], [6, 0], [6, 2], [2, 6], [0, 6], [0, 4]] },
        lab(3, 0, '6', 0, 16),
        lab(0, 3, '6', -12, 4),
        lab(6, 0, 'x', 14, 4),
        lab(0, 6, 'y', 0, -10),
      ],
    },
    answer: '$\\frac{5}{9}$',
    solution: 'In the $6 \\times 6$ square, $x + y \\le 4$ is a corner triangle with legs $4$ (area $8$) and $x + y \\ge 8$ is the opposite corner triangle, also with legs $4$ (area $8$). The band between them has area $36 - 16 = 20$, so the probability is $\\frac{20}{36} = \\frac{5}{9}$.',
  },
]

export default {
  id: 'intro-counting-ch10',
  book: 'intro-counting',
  number: 10,
  title: 'Geometric Probability',
  intro: 'So far every probability came from counting outcomes. This chapter handles the cases where there are infinitely many of them — a random moment, a random point on a line or inside a shape — by measuring instead of counting: favorable length over total length, then favorable area over total area. The same idea turns "two friends arrive at random times" into a shaded region inside a square.',
  sections: [s102, s103],
  challenge,
  worksheet,
}
