// Introduction to Geometry — Chapter 1: What's in a Name?
// All problems, explanations, and examples are original MathQuest content.

const s12 = {
  id: '1.2',
  title: 'Points, Lines, and Planes',
  learn: {
    concepts: [
      {
        heading: 'The tiniest idea in math',
        body: 'A point is a location — nothing more. It has no size, no width, no thickness. We draw a dot so we can see it, but the real point is infinitely small. Points are named with capital letters, like point $A$ or point $P$.',
      },
      {
        heading: 'Lines, segments, and rays',
        body: 'A line goes on forever in both directions. A segment $\\overline{AB}$ is the piece of a line between two endpoints $A$ and $B$ — it stops at both ends. A ray $\\overrightarrow{AB}$ starts at $A$, passes through $B$, and keeps going forever in that one direction. For rays, order matters: $\\overrightarrow{AB}$ and $\\overrightarrow{BA}$ point opposite ways!',
      },
      {
        heading: 'Two points pin down a line',
        body: 'Through any two distinct points there is exactly one line. One point is not enough — infinitely many lines spin through a single point — but a second point locks the line in place. Points that all lie on one line are called collinear.',
      },
      {
        heading: 'Planes: flat and endless',
        body: 'A plane is a perfectly flat surface that extends forever in every direction, like an infinite tabletop. Three points that are not collinear determine exactly one plane — that is why a three-legged stool never wobbles. When two different planes meet, their intersection is a whole line, like the crease where a wall meets the floor.',
      },
    ],
    examples: [
      {
        problem: 'Points $A$, $B$, and $C$ lie on a line in that order. Is $\\overrightarrow{BA}$ the same ray as $\\overrightarrow{BC}$?',
        steps: [
          'Both rays start at the same endpoint, $B$ — so far so good.',
          'But $\\overrightarrow{BA}$ shoots off through $A$, to the left, while $\\overrightarrow{BC}$ shoots off through $C$, to the right.',
          'They point in opposite directions, so they contain completely different points (only $B$ is shared).',
        ],
        answer: 'No — they are opposite rays, sharing only the endpoint $B$',
        fig: {
          view: [-1, -2, 7, 2],
          elems: [
            { t: 'line', a: [0, 0], b: [6, 0] },
            { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: -12 },
            { t: 'point', p: [3, 0], label: 'B', dx: 0, dy: -12 },
            { t: 'point', p: [6, 0], label: 'C', dx: 0, dy: -12 },
          ],
        },
      },
      {
        problem: 'Points $P$, $Q$, $R$, and $S$ lie on a line. How many different segments have both endpoints among these four points?',
        steps: [
          'A segment is named by its two endpoints, so we just need to count the pairs of points.',
          'List them: from $P$ we get $\\overline{PQ}$, $\\overline{PR}$, $\\overline{PS}$; from $Q$ we add $\\overline{QR}$, $\\overline{QS}$; from $R$ we add $\\overline{RS}$.',
          'That is $3 + 2 + 1 = 6$ segments. In general, $n$ points give $\\frac{n(n-1)}{2}$ pairs, and $\\frac{4 \\times 3}{2} = 6$. ✓',
        ],
        answer: '$6$ segments',
        fig: {
          view: [-1, -2, 7, 2],
          elems: [
            { t: 'line', a: [0, 0], b: [6, 0] },
            { t: 'point', p: [0, 0], label: 'P', dx: 0, dy: -12 },
            { t: 'point', p: [2, 0], label: 'Q', dx: 0, dy: -12 },
            { t: 'point', p: [4, 0], label: 'R', dx: 0, dy: -12 },
            { t: 'point', p: [6, 0], label: 'S', dx: 0, dy: -12 },
          ],
        },
      },
      {
        problem: 'Points $X$, $Y$, and $Z$ are not collinear. How many different lines pass through at least two of them?',
        steps: [
          'Two points determine one line, so count the pairs: $XY$, $XZ$, and $YZ$.',
          'Since the points are not collinear, these three lines are all different — no two pairs share the same line.',
          'So there are exactly $3$ lines. (If the points were collinear, all the pairs would give the same single line!)',
        ],
        answer: '$3$ lines',
        fig: {
          view: [-2, -2, 6, 5],
          elems: [
            { t: 'line', a: [0, 0], b: [4, 0] },
            { t: 'line', a: [0, 0], b: [1, 3] },
            { t: 'line', a: [4, 0], b: [1, 3] },
            { t: 'point', p: [0, 0], label: 'X', dx: -10, dy: 12 },
            { t: 'point', p: [4, 0], label: 'Y', dx: 10, dy: 12 },
            { t: 'point', p: [1, 3], label: 'Z', dx: 0, dy: -12 },
          ],
        },
      },
    ],
  },
  problems: [
    {
      q: 'Which symbol names the segment with endpoints $A$ and $B$?',
      choices: ['$\\overline{AB}$', '$\\overrightarrow{AB}$', 'line $AB$', 'point $AB$'],
      answer: 0,
      solution: 'A segment has two endpoints, and the bar with no arrows shows that it stops at both ends: $\\overline{AB}$. The arrow in $\\overrightarrow{AB}$ means a ray that runs on forever past $B$, and line $AB$ runs forever both ways. Points are named with single letters, so "point $AB$" is not a thing.',
    },
    {
      q: 'How many different lines pass through both of two distinct points $P$ and $Q$?',
      choices: ['none', 'exactly one', 'exactly two', 'infinitely many'],
      answer: 1,
      solution: 'Through a single point you can spin infinitely many lines — but the moment you require the line to hit a second point too, it is locked in place. Exactly one line passes through two given points. This is one of geometry\'s most basic postulates.',
    },
    {
      q: 'Points $A$, $B$, and $C$ lie on a line in that order. Which ray is exactly the same as $\\overrightarrow{AB}$?',
      fig: {
        view: [-1, -2, 8, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [7, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [4, 0], label: 'B', dx: 0, dy: -12 },
          { t: 'point', p: [7, 0], label: 'C', dx: 0, dy: -12 },
        ],
      },
      choices: ['$\\overrightarrow{BA}$', '$\\overrightarrow{BC}$', '$\\overline{AC}$', '$\\overrightarrow{AC}$'],
      answer: 3,
      solution: 'A ray is determined by its starting point and its direction. $\\overrightarrow{AB}$ starts at $A$ and heads through $B$ — and $\\overrightarrow{AC}$ starts at $A$ and heads through $C$, which is the exact same direction, so it is the exact same set of points. $\\overrightarrow{BA}$ and $\\overrightarrow{BC}$ start at the wrong point, and $\\overline{AC}$ is a segment that stops at $C$.',
    },
    {
      q: 'Which of these has exactly two endpoints?',
      choices: ['a line', 'a ray', 'a segment', 'a plane'],
      answer: 2,
      solution: 'A segment stops at both ends — two endpoints. A ray has just one endpoint (it runs forever the other way), a line has none (forever both ways), and a plane spreads out forever with no edge at all.',
    },
    {
      q: 'Points $X$, $Y$, and $Z$ are not collinear. How many different lines pass through at least two of the three points?',
      fig: {
        view: [-2, -2, 7, 5],
        elems: [
          { t: 'line', a: [0, 0], b: [5, 0] },
          { t: 'line', a: [0, 0], b: [2, 3] },
          { t: 'line', a: [5, 0], b: [2, 3] },
          { t: 'point', p: [0, 0], label: 'X', dx: -10, dy: 12 },
          { t: 'point', p: [5, 0], label: 'Y', dx: 10, dy: 12 },
          { t: 'point', p: [2, 3], label: 'Z', dx: 0, dy: -12 },
        ],
      },
      choices: ['$1$', '$3$', '$6$', '$2$'],
      answer: 1,
      solution: 'Each pair of points gives one line: $XY$, $XZ$, and $YZ$ — that is $3$ lines. Careful with $6$: that counts $XY$ and $YX$ separately, but they are the same line! And one single line cannot pass through all three, because the points are not collinear.',
    },
    {
      q: 'Points $P$, $Q$, and $R$ all lie on line $\\ell$, in that order. Which of the following is NOT a correct name for line $\\ell$?',
      fig: {
        view: [-1, -2, 7, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [6, 0] },
          { t: 'point', p: [0, 0], label: 'P', dx: 0, dy: -12 },
          { t: 'point', p: [3, 0], label: 'Q', dx: 0, dy: -12 },
          { t: 'point', p: [6, 0], label: 'R', dx: 0, dy: -12 },
        ],
      },
      choices: ['$\\overrightarrow{QR}$', 'line $PQ$', 'line $PR$', 'line $QR$'],
      answer: 0,
      solution: 'Any two of the points name the whole line, so line $PQ$, line $PR$, and line $QR$ are all fine names for $\\ell$. But $\\overrightarrow{QR}$ is a ray — it starts at $Q$ and never covers the points on the other side, like $P$. A ray is only part of the line.',
    },
    {
      q: 'Points $X$, $Y$, and $Z$ are not collinear. How many planes contain all three of them?',
      choices: ['none', 'exactly three', 'exactly one', 'infinitely many'],
      answer: 2,
      solution: 'Three non-collinear points determine exactly one plane — just as two points determine exactly one line. This is why a camera tripod or a three-legged stool always sits steady: its three feet fix one flat plane.',
    },
    {
      q: 'What is the greatest number of points in which two distinct lines can intersect?',
      fig: {
        view: [-4, -3, 4, 3],
        elems: [
          { t: 'line', a: [-3, -2], b: [3, 2] },
          { t: 'line', a: [-3, 2], b: [3, -2] },
        ],
      },
      choices: ['$0$', '$2$', 'infinitely many', '$1$'],
      answer: 3,
      solution: 'Suppose two lines met at two different points. Then both lines would pass through those same two points — but exactly one line passes through two given points, so the "two" lines would really be the same line! Distinct lines can therefore cross at most once.',
    },
    {
      q: 'Five points $A$, $B$, $C$, $D$, $E$ lie on a line. How many different segments have both endpoints among the five points?',
      fig: {
        view: [-1, -2, 7, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [6, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [1.5, 0], label: 'B', dx: 0, dy: -12 },
          { t: 'point', p: [3, 0], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [4.5, 0], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [6, 0], label: 'E', dx: 0, dy: -12 },
        ],
      },
      choices: ['$5$', '$20$', '$10$', '$25$'],
      answer: 2,
      solution: 'Each segment is a pair of endpoints. Count pairs: $A$ pairs with $4$ others, $B$ with $3$ new ones, $C$ with $2$, $D$ with $1$ — so $4 + 3 + 2 + 1 = 10$. The answer $20$ comes from $5 \\times 4$, which counts every segment twice ($\\overline{AB}$ and $\\overline{BA}$ are the same segment), so we divide by $2$: $\\frac{5 \\times 4}{2} = 10$.',
    },
    {
      q: 'Six points $A$ through $F$ are drawn so that no three of them are collinear. How many different lines pass through two of the six points?',
      fig: {
        view: [-3.5, -1.5, 7.5, 7.5],
        elems: [
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [6, 3], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [4, 6], label: 'D', dx: 10, dy: -10 },
          { t: 'point', p: [0, 6], label: 'E', dx: -10, dy: -10 },
          { t: 'point', p: [-2, 3], label: 'F', dx: -12, dy: 0 },
        ],
      },
      choices: ['$12$', '$15$', '$30$', '$6$'],
      answer: 1,
      solution: 'Every pair of points determines a line, and since no three points are collinear, different pairs always give different lines. Counting pairs: each of the $6$ points pairs with $5$ others, giving $6 \\times 5 = 30$ — but that counts each line twice (once from each end), so there are $\\frac{30}{2} = 15$ lines.',
    },
  ],
}

const s13 = {
  id: '1.3',
  title: 'Round and Round',
  learn: {
    concepts: [
      {
        heading: 'What a circle really is',
        body: 'A circle is the set of ALL points that sit at one fixed distance (the radius, $r$) from one fixed point (the center). Only the ring itself is the circle — the center is not part of the circle, and neither is the space inside. Every radius of a circle has the same length; that is the whole definition!',
      },
      {
        heading: 'Radius, chord, diameter',
        body: 'A radius is a segment from the center to a point on the circle. A chord is a segment whose two endpoints are both on the circle. A diameter is a special chord that passes through the center — it is two radii glued end to end, so a diameter has length $2r$. No chord can be longer than a diameter.',
      },
      {
        heading: 'Inside, on, or outside?',
        body: 'The radius sorts every point in the plane into three camps. If a point\'s distance from the center is less than $r$, it is inside the circle; if the distance equals $r$ exactly, the point is on the circle; if the distance is more than $r$, it is outside. One comparison tells you everything.',
      },
      {
        heading: 'Arcs and central angles',
        body: 'Two points on a circle cut it into two arcs. The smaller one (the minor arc) is named with two letters like $\\overset{\\frown}{AB}$; the larger (major) arc gets three letters, like $\\overset{\\frown}{ACB}$, to show which way around it goes. A central angle is an angle whose vertex is the center, and the arc it cuts off has the same measure as the angle. A diameter splits the circle into two semicircles of $180^\\circ$ each.',
      },
    ],
    examples: [
      {
        problem: 'A circle with center $O$ has radius $5$. Point $P$ satisfies $OP = 3$, point $Q$ satisfies $OQ = 5$, and point $R$ satisfies $OR = 6.5$. Where is each point?',
        steps: [
          'Compare each distance to the radius, $5$.',
          '$OP = 3 < 5$, so $P$ is inside the circle. $OQ = 5$ exactly, so $Q$ is on the circle.',
          '$OR = 6.5 > 5$, so $R$ is outside the circle.',
        ],
        answer: '$P$ is inside, $Q$ is on the circle, $R$ is outside',
        fig: {
          view: [-8, -6.5, 7, 7],
          elems: [
            { t: 'circle', c: [0, 0], r: 5 },
            { t: 'seg', a: [0, 0], b: [1.8, 2.4], dash: true },
            { t: 'seg', a: [0, 0], b: [4, 3], dash: true },
            { t: 'seg', a: [0, 0], b: [-6, 2.5], dash: true },
            { t: 'label', p: [0.9, 1.2], text: '3', dx: 10, dy: 0 },
            { t: 'label', p: [2, 1.5], text: '5', dx: 8, dy: 10 },
            { t: 'label', p: [-3, 1.25], text: '6.5', dx: 0, dy: -10 },
            { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
            { t: 'point', p: [1.8, 2.4], label: 'P', dx: 0, dy: -12 },
            { t: 'point', p: [4, 3], label: 'Q', dx: 12, dy: -8 },
            { t: 'point', p: [-6, 2.5], label: 'R', dx: -12, dy: -8 },
          ],
        },
      },
      {
        problem: 'A circle has radius $7$. Can it have a chord of length $13$?',
        steps: [
          'The longest chord in any circle is a diameter, which here has length $2 \\times 7 = 14$.',
          'Since $13 < 14$, a chord of length $13$ fits — slide a chord from a diameter toward the edge and it shrinks smoothly from $14$ down toward $0$, hitting $13$ along the way.',
          'A chord of length $15$, on the other hand, would be impossible: nothing beats the diameter.',
        ],
        answer: 'Yes — any length up to the diameter $14$ is possible',
        fig: {
          view: [-8, -8, 8, 8],
          elems: [
            { t: 'circle', c: [0, 0], r: 7 },
            { t: 'seg', a: [-6.5, 2.6], b: [6.5, 2.6] },
            { t: 'label', p: [0, 2.6], text: '13', dx: 0, dy: -10 },
            { t: 'seg', a: [0, 0], b: [4.95, -4.95], dash: true },
            { t: 'label', p: [2.5, -2.5], text: '7', dx: 10, dy: -4 },
            { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: -12 },
            { t: 'point', p: [-6.5, 2.6], label: 'M', dx: -12, dy: -8 },
            { t: 'point', p: [6.5, 2.6], label: 'N', dx: 12, dy: -8 },
          ],
        },
      },
      {
        problem: '$\\overline{AB}$ is a diameter of a circle with center $O$, and point $C$ is on the circle with central angle $\\angle AOC = 60^\\circ$. What is the measure of arc $CB$?',
        steps: [
          'A diameter cuts the circle into two semicircles, so the arc from $A$ to $B$ through $C$ measures $180^\\circ$.',
          'The central angle $\\angle AOC = 60^\\circ$ cuts off arc $AC = 60^\\circ$.',
          'What remains of the semicircle is arc $CB = 180^\\circ - 60^\\circ = 120^\\circ$.',
        ],
        answer: 'Arc $CB$ measures $120^\\circ$',
        fig: {
          view: [-4, -4, 4, 4],
          elems: [
            { t: 'circle', c: [0, 0], r: 3 },
            { t: 'seg', a: [-3, 0], b: [3, 0] },
            { t: 'seg', a: [0, 0], b: [-1.5, 2.6] },
            { t: 'angle', at: [0, 0], from: [-1.5, 2.6], to: [-3, 0], r: 0.7, label: '60' },
            { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
            { t: 'point', p: [-3, 0], label: 'A', dx: -12, dy: 0 },
            { t: 'point', p: [3, 0], label: 'B', dx: 12, dy: 0 },
            { t: 'point', p: [-1.5, 2.6], label: 'C', dx: -8, dy: -10 },
          ],
        },
      },
    ],
  },
  problems: [
    {
      q: 'A segment from the center of a circle to a point on the circle is called',
      choices: ['a chord', 'a diameter', 'a radius', 'an arc'],
      answer: 2,
      solution: 'Center to circle is exactly what a radius is. A chord connects two points ON the circle (the center is not on the circle!), a diameter is a chord through the center, and an arc is a curved piece of the circle, not a segment at all.',
    },
    {
      q: 'A circle with center $O$ has radius $6$, as shown. What is the length of a diameter of this circle?',
      fig: {
        view: [-7.5, -7.5, 7.5, 7.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 6 },
          { t: 'seg', a: [0, 0], b: [6, 0] },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'A', dx: 12, dy: 0 },
        ],
      },
      choices: ['$12$', '$6$', '$36$', '$3$'],
      answer: 0,
      solution: 'A diameter is two radii laid end to end through the center, so it is twice the radius: $2 \\times 6 = 12$.',
    },
    {
      q: 'In the figure, $M$, $N$, and $P$ are on the circle with center $O$. Which segment is a chord?',
      fig: {
        view: [-5, -5, 5, 5],
        elems: [
          { t: 'circle', c: [0, 0], r: 4 },
          { t: 'seg', a: [-3.46, 2], b: [3.46, 2] },
          { t: 'seg', a: [0, 0], b: [4, 0] },
          { t: 'seg', a: [0, 0], b: [-3.46, 2], dash: true },
          { t: 'seg', a: [0, 0], b: [3.46, 2], dash: true },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3.46, 2], label: 'M', dx: -12, dy: -8 },
          { t: 'point', p: [3.46, 2], label: 'N', dx: 12, dy: -8 },
          { t: 'point', p: [4, 0], label: 'P', dx: 12, dy: 8 },
        ],
      },
      choices: ['$\\overline{OP}$', '$\\overline{MN}$', '$\\overline{OM}$', '$\\overline{ON}$'],
      answer: 1,
      solution: 'A chord needs BOTH endpoints on the circle. $\\overline{MN}$ qualifies: $M$ and $N$ are both on the circle. Each of $\\overline{OP}$, $\\overline{OM}$, and $\\overline{ON}$ has one endpoint at the center $O$, which is not on the circle — those are radii, not chords.',
    },
    {
      q: 'What is true about all the radii of one circle?',
      choices: ['They come in two different sizes', 'The longest one is called the diameter', 'They can have many different lengths', 'They all have the same length'],
      answer: 3,
      solution: 'A circle is defined as all the points at ONE fixed distance from the center — so every radius has exactly that length. Equal radii is not a coincidence; it is the definition. (A diameter is longer than a radius, but a diameter is a chord, not a radius.)',
    },
    {
      q: 'A circle has radius $9$. What is the length of the longest possible chord of this circle?',
      choices: ['$18$', '$9$', '$27$', '$81$'],
      answer: 0,
      solution: 'The longest chord is always a diameter — a chord anywhere else misses the widest part of the circle. The diameter is twice the radius: $2 \\times 9 = 18$.',
    },
    {
      q: 'A circle with center $O$ has radius $7$. Point $T$ satisfies $OT = 7$. Where is $T$?',
      choices: ['inside the circle', 'outside the circle', 'on the circle', 'at the center'],
      answer: 2,
      solution: 'The circle IS the set of points at distance exactly $7$ from $O$. Since $OT = 7$ exactly, $T$ sits right on the circle — not inside (that would need $OT < 7$) and not outside (that would need $OT > 7$).',
    },
    {
      q: 'In the circle with center $O$ shown, the central angle $\\angle AOB$ measures $80^\\circ$. What is the measure of minor arc $AB$?',
      fig: {
        view: [-4.5, -4.5, 4.5, 4.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 3.5 },
          { t: 'seg', a: [0, 0], b: [3.29, 1.2] },
          { t: 'seg', a: [0, 0], b: [-0.61, 3.45] },
          { t: 'angle', at: [0, 0], from: [3.29, 1.2], to: [-0.61, 3.45], r: 0.8, label: '80' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [3.29, 1.2], label: 'A', dx: 12, dy: -6 },
          { t: 'point', p: [-0.61, 3.45], label: 'B', dx: -8, dy: -10 },
        ],
      },
      choices: ['$40^\\circ$', '$80^\\circ$', '$160^\\circ$', '$100^\\circ$'],
      answer: 1,
      solution: 'An arc has the same measure as its central angle — the angle at the center "opens up" exactly that much of the circle. So minor arc $AB$ measures $80^\\circ$, the same as $\\angle AOB$. (No doubling or halving needed for CENTRAL angles!)',
    },
    {
      q: 'A circle has diameter $26$. Which of the following can NOT be the length of a chord of this circle?',
      choices: ['$5$', '$13$', '$26$', '$28$'],
      answer: 3,
      solution: 'Chords can have any length from just above $0$ up to the diameter, $26$. So $5$ and $13$ are fine, and $26$ is the diameter itself. But $28 > 26$ is longer than the longest chord — impossible.',
    },
    {
      q: '$\\overline{AB}$ is a diameter of the circle with center $O$, and $C$ is on the circle. If arc $AC$ measures $70^\\circ$, what is the measure of arc $CB$?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [-1.03, 2.82] },
          { t: 'angle', at: [0, 0], from: [-1.03, 2.82], to: [-3, 0], r: 0.7, label: '70' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [3, 0], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [-1.03, 2.82], label: 'C', dx: -6, dy: -12 },
        ],
      },
      choices: ['$110^\\circ$', '$70^\\circ$', '$290^\\circ$', '$140^\\circ$'],
      answer: 0,
      solution: 'A diameter cuts the circle into two semicircles of $180^\\circ$ each. Arcs $AC$ and $CB$ together make the semicircle on $C$\'s side, so arc $CB = 180^\\circ - 70^\\circ = 110^\\circ$. (Subtract from $180^\\circ$, not $360^\\circ$ — the full circle includes the other semicircle too.)',
    },
    {
      q: 'Eight points $A$ through $H$ lie on a circle. How many different chords have both endpoints among the eight points?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'point', p: [3, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [2.12, 2.12], label: 'B', dx: 10, dy: -10 },
          { t: 'point', p: [0, 3], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [-2.12, 2.12], label: 'D', dx: -10, dy: -10 },
          { t: 'point', p: [-3, 0], label: 'E', dx: -12, dy: 0 },
          { t: 'point', p: [-2.12, -2.12], label: 'F', dx: -10, dy: 10 },
          { t: 'point', p: [0, -3], label: 'G', dx: 0, dy: 14 },
          { t: 'point', p: [2.12, -2.12], label: 'H', dx: 10, dy: 10 },
        ],
      },
      choices: ['$16$', '$56$', '$28$', '$8$'],
      answer: 2,
      solution: 'A chord is just a pair of points on the circle, so count the pairs: each of the $8$ points pairs with $7$ others, giving $8 \\times 7 = 56$ — but $\\overline{AB}$ and $\\overline{BA}$ are the same chord, so every chord got counted twice. The answer is $\\frac{56}{2} = 28$.',
    },
  ],
}

const s15 = {
  id: '1.5',
  title: 'The Burden of Proof',
  learn: {
    concepts: [
      {
        heading: 'Examples are not proofs',
        body: 'Checking a claim for ten numbers — or ten million — only shows it works for those cases. A proof is a chain of logic showing the claim must hold in EVERY case, even the ones nobody will ever test. That is the burden of proof: examples can make you suspicious that something is true, but only a proof settles it.',
      },
      {
        heading: 'One counterexample is enough',
        body: 'Disproving is a different game. A claim that says "every..." or "always..." dies the moment you find one single case where it fails. That case is called a counterexample, and one is all you need. You never need two.',
      },
      {
        heading: 'Definitions, postulates, theorems',
        body: 'Geometry is built from three kinds of statements. A definition just says what a word means (a chord is a segment with both endpoints on a circle). A postulate is a basic fact we accept without proof (through two points there is exactly one line). A theorem is a fact we PROVE using definitions, postulates, and earlier theorems. Every theorem carries the burden of proof; postulates get a free pass.',
      },
      {
        heading: 'The converse trap',
        body: 'Flipping an if-then statement gives its converse: the converse of "if $P$, then $Q$" is "if $Q$, then $P$". A statement and its converse are different claims — one can be true while the other is false! "If a figure is a square, then it has four right angles" is true, but its converse fails: a non-square rectangle has four right angles too. Never assume a converse for free.',
      },
    ],
    examples: [
      {
        problem: 'Priya claims: "Every multiple of $5$ ends in the digit $5$." Is she right?',
        steps: [
          'Test the claim: $5$, $15$, $25$ all end in $5$... looking good so far. But "so far" is not a proof!',
          'Hunt for a counterexample: $10$ is a multiple of $5$ ($5 \\times 2 = 10$), and it ends in $0$, not $5$.',
          'One counterexample kills a "every..." claim. The truth: multiples of $5$ end in $5$ or $0$.',
        ],
        answer: 'No — $10$ is a counterexample',
      },
      {
        problem: 'The statement "If a figure is a square, then it has four right angles" is true. Is its converse also true?',
        steps: [
          'The converse swaps the two halves: "If a figure has four right angles, then it is a square."',
          'Look for a counterexample: the $4 \\times 2$ rectangle shown has four right angles, but its sides are not all equal, so it is not a square.',
          'One counterexample is enough: the converse is false, even though the original statement is true.',
        ],
        answer: 'No — a non-square rectangle has four right angles',
        fig: {
          view: [-1, -1, 5, 3],
          elems: [
            { t: 'poly', pts: [[0, 0], [4, 0], [4, 2], [0, 2]], fill: false },
            { t: 'right', at: [0, 0], from: [4, 0], to: [0, 2] },
            { t: 'right', at: [4, 0], from: [4, 2], to: [0, 0] },
            { t: 'right', at: [4, 2], from: [0, 2], to: [4, 0] },
            { t: 'right', at: [0, 2], from: [0, 0], to: [4, 2] },
            { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
            { t: 'label', p: [0, 1], text: '2', dx: -12, dy: 0 },
          ],
        },
      },
      {
        problem: 'You are told: every widget is a gadget, and every gadget is a gizmo. Rosa owns a widget. What can you conclude?',
        steps: [
          'Chain the statements together, one step at a time.',
          'Rosa\'s widget is a widget, so by the first fact it is a gadget. Since it is a gadget, by the second fact it is a gizmo.',
          'Two solid links make a solid chain: the widget is a gadget AND a gizmo. But be careful — we could NOT run the chain backward: owning a gizmo would not prove it is a widget!',
        ],
        answer: 'Rosa\'s widget is also a gadget and a gizmo',
      },
    ],
  },
  problems: [
    {
      q: 'How many counterexamples does it take to disprove the claim "every blue whale can fly"?',
      choices: ['none — you need many examples', 'just one', 'at least ten', 'one for every whale'],
      answer: 1,
      solution: 'A claim about "every" member of a group fails as soon as ONE member breaks it. A single non-flying blue whale finishes the job. Extra counterexamples are fun, but the first one already did all the work.',
    },
    {
      q: 'In geometry, a basic statement that we accept as true without proof is called',
      choices: ['a theorem', 'a definition', 'a counterexample', 'a postulate'],
      answer: 3,
      solution: 'Postulates are the starting assumptions of geometry — we accept them without proof and build everything else on top. Theorems must be proved, definitions just explain what words mean, and a counterexample is a case that disproves a claim.',
    },
    {
      q: 'Jamal checks a claim for $100$ different numbers, and it works every single time. Has he proved the claim?',
      choices: ['No — a proof must cover every possible case', 'Yes — $100$ examples is plenty', 'Yes — since he found no counterexample, none exists', 'Only if the $100$ numbers were chosen randomly'],
      answer: 0,
      solution: 'Examples only cover the cases you actually check, and there are infinitely many numbers left over. Case number $101$ — or $101$ trillion — could still fail. To prove a claim, you need a logical argument that works for every case at once, not a pile of examples.',
    },
    {
      q: 'What is the converse of the statement "If it is raining, then the ground is wet"?',
      choices: ['If it is raining, then the ground is wet', 'If it is not raining, then the ground is not wet', 'If the ground is wet, then it is raining', 'If the ground is not wet, then it is not raining'],
      answer: 2,
      solution: 'The converse swaps the "if" part and the "then" part: "If the ground is wet, then it is raining." Notice it is a genuinely different claim — a garden hose can wet the ground on a sunny day, so this converse is actually false even though the original is true!',
    },
    {
      q: 'Which number is a counterexample to the claim "every prime number is odd"?',
      choices: ['$2$', '$9$', '$15$', '$1$'],
      answer: 0,
      solution: 'A counterexample must be a prime that is not odd. $2$ is prime (its only divisors are $1$ and $2$) and it is even — claim destroyed! $9 = 3 \\times 3$ and $15 = 3 \\times 5$ are not prime at all, and $1$ is not considered prime, so none of them tests the claim.',
    },
    {
      q: 'The figure shows a quadrilateral with four right angles whose sides have lengths $5$ and $2$. This figure is a counterexample to which claim?',
      fig: {
        view: [-1, -1, 6, 3],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [5, 2], [0, 2]], fill: false },
          { t: 'right', at: [0, 0], from: [5, 0], to: [0, 2] },
          { t: 'right', at: [5, 0], from: [5, 2], to: [0, 0] },
          { t: 'right', at: [5, 2], from: [0, 2], to: [5, 0] },
          { t: 'right', at: [0, 2], from: [0, 0], to: [5, 2] },
          { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [0, 1], text: '2', dx: -12, dy: 0 },
        ],
      },
      choices: ['Every rectangle has four right angles', 'Every square has four equal sides', 'A rectangle is longer than it is tall', 'Every figure with four right angles is a square'],
      answer: 3,
      solution: 'This figure HAS four right angles but is NOT a square (its sides $5$ and $2$ are unequal) — so it breaks exactly the claim "every figure with four right angles is a square." The first two choices are true statements, and the figure actually agrees with the third rather than disproving anything about it.',
    },
    {
      q: 'In the figure, chord $\\overline{MN}$ does not pass through the center $O$. The figure is a counterexample to which claim?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-1.8, 2.4], b: [3, 0] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-1.8, 2.4], label: 'M', dx: -10, dy: -10 },
          { t: 'point', p: [3, 0], label: 'N', dx: 12, dy: 0 },
        ],
      },
      choices: ['Every diameter of a circle is a chord', 'Every chord of a circle is a diameter', 'A chord never passes through the center', 'Every chord has both endpoints on the circle'],
      answer: 1,
      solution: '$\\overline{MN}$ is a chord (both endpoints on the circle) that misses the center, so it is NOT a diameter — one counterexample to "every chord is a diameter." The other direction, "every diameter is a chord," is still true, and this figure cannot disprove "a chord never passes through the center" (for that you would show a chord that DOES pass through it).',
    },
    {
      q: 'All zibbles are quorks. All quorks are flims. Tam is a zibble. What can you conclude?',
      choices: ['Tam is a quork but might not be a flim', 'All flims are zibbles', 'Tam is both a quork and a flim', 'Nothing — the words are made up'],
      answer: 2,
      solution: 'Chain the facts: Tam is a zibble, so Tam is a quork; Tam is a quork, so Tam is a flim. Both links hold, so Tam is a quork AND a flim. And it does not matter that the words are nonsense — logic only cares about the structure! (But "all flims are zibbles" runs the chain backward, which is the converse trap.)',
    },
    {
      q: 'Consider the claim: "For every whole number $n$, the value $n^2 + n + 11$ is prime." Which value of $n$ is a counterexample?',
      choices: ['$n = 1$', '$n = 2$', '$n = 3$', '$n = 10$'],
      answer: 3,
      solution: 'Check each: $n=1$ gives $13$, $n=2$ gives $17$, $n=3$ gives $23$ — all prime, so those support the claim rather than break it. But $n = 10$ gives $100 + 10 + 11 = 121 = 11 \\times 11$, which is not prime. The claim survives many tests and still falls — that is exactly why examples are not proofs!',
    },
    {
      q: 'It is a fact that every blorb has exactly $4$ sides. A certain shape has exactly $4$ sides. Can we conclude that the shape is a blorb?',
      choices: ['Yes — the given fact guarantees it', 'No — that reasoning uses the converse, which is not automatic', 'Yes — but only if we also check its angles', 'No — a blorb must have more than $4$ sides'],
      answer: 1,
      solution: 'The fact says blorb $\\Rightarrow$ $4$ sides. Concluding $4$ sides $\\Rightarrow$ blorb flips it around — that is the converse, and converses are not free! Compare: every square has $4$ sides, but a $4$-sided shape need not be a square. Without more information, the shape might or might not be a blorb.',
    },
  ],
}

const challenge = [
  {
    q: 'Seven points $A$ through $G$ lie on a line. How many different segments have both endpoints among the seven points?',
    fig: {
      view: [-1, -2, 7, 2],
      elems: [
        { t: 'line', a: [0, 0], b: [6, 0] },
        { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: -12 },
        { t: 'point', p: [1, 0], label: 'B', dx: 0, dy: -12 },
        { t: 'point', p: [2, 0], label: 'C', dx: 0, dy: -12 },
        { t: 'point', p: [3, 0], label: 'D', dx: 0, dy: -12 },
        { t: 'point', p: [4, 0], label: 'E', dx: 0, dy: -12 },
        { t: 'point', p: [5, 0], label: 'F', dx: 0, dy: -12 },
        { t: 'point', p: [6, 0], label: 'G', dx: 0, dy: -12 },
      ],
    },
    choices: ['$7$', '$42$', '$21$', '$14$'],
    answer: 2,
    solution: 'Each segment is a pair of endpoints, so count pairs of points: $\\frac{7 \\times 6}{2} = 21$. The $42$ counts every segment twice (once from each end), and $7$ and $14$ are far too few — even the leftmost point alone starts $6$ different segments.',
  },
  {
    q: 'What is the greatest possible number of intersection points among four distinct lines in a plane?',
    choices: ['$6$', '$4$', '$8$', '$12$'],
    answer: 0,
    solution: 'Two distinct lines cross at most once, so the best we can hope for is one intersection per PAIR of lines. Four lines make $\\frac{4 \\times 3}{2} = 6$ pairs, and if no two lines are parallel and no three pass through the same point, all $6$ crossings really happen.',
  },
  {
    q: 'Ten points lie on a circle. How many different chords have both endpoints among the ten points?',
    choices: ['$90$', '$100$', '$10$', '$45$'],
    answer: 3,
    solution: 'A chord is a pair of the marked points: $\\frac{10 \\times 9}{2} = 45$. Remember to divide by $2$ — choosing $A$ then $B$ gives the same chord as choosing $B$ then $A$, so $90$ double-counts everything.',
  },
  {
    q: 'Points $A$, $B$, and $C$ lie on a line, in that order. How many different rays lie on this line and have their endpoint at one of the three points?',
    fig: {
      view: [-1, -2, 5, 2],
      elems: [
        { t: 'line', a: [0, 0], b: [4, 0] },
        { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: -12 },
        { t: 'point', p: [2, 0], label: 'B', dx: 0, dy: -12 },
        { t: 'point', p: [4, 0], label: 'C', dx: 0, dy: -12 },
      ],
    },
    choices: ['$3$', '$6$', '$4$', '$12$'],
    answer: 1,
    solution: 'From each point, exactly two rays run along the line — one in each direction. Three points times two directions gives $6$ rays. Careful: $\\overrightarrow{AB}$ and $\\overrightarrow{AC}$ look like different names, but they are the SAME ray (same endpoint, same direction), so counting names would overcount.',
  },
  {
    q: 'A circle has radius $8$. Which of the following is a possible length for a chord of this circle?',
    choices: ['$20$', '$17$', '$16$', '$18$'],
    answer: 2,
    solution: 'The longest chord is the diameter, $2 \\times 8 = 16$. So $17$, $18$, and $20$ are all too long — but $16$ itself is achieved by any diameter. A chord can have any length from just above $0$ up to and including $16$.',
  },
  {
    q: 'Points $A$, $B$, $C$, $D$ lie on a line in that order, with $AB = 3$, $BC = 5$, and $CD = 2$. How many of the six segments with endpoints among these points are longer than $5$?',
    fig: {
      view: [-1, -2, 11, 2],
      elems: [
        { t: 'line', a: [0, 0], b: [10, 0] },
        { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: -12 },
        { t: 'point', p: [3, 0], label: 'B', dx: 0, dy: -12 },
        { t: 'point', p: [8, 0], label: 'C', dx: 0, dy: -12 },
        { t: 'point', p: [10, 0], label: 'D', dx: 0, dy: -12 },
        { t: 'label', p: [1.5, 0], text: '3', dx: 0, dy: 14 },
        { t: 'label', p: [5.5, 0], text: '5', dx: 0, dy: 14 },
        { t: 'label', p: [9, 0], text: '2', dx: 0, dy: 14 },
      ],
    },
    choices: ['$3$', '$4$', '$2$', '$5$'],
    answer: 0,
    solution: 'Add along the line to find all six lengths: $AB = 3$, $BC = 5$, $CD = 2$, $AC = 3 + 5 = 8$, $BD = 5 + 2 = 7$, and $AD = 3 + 5 + 2 = 10$. Longer than $5$: $AC$, $BD$, and $AD$ — that is $3$ segments. (Note $BC = 5$ is not LONGER than $5$.)',
  },
  {
    q: '$\\overline{AB}$ is a diameter of the circle with center $O$, and $C$ is on the circle with arc $AC = 35^\\circ$. What is the measure of arc $CB$?',
    fig: {
      view: [-4, -4, 4, 4],
      elems: [
        { t: 'circle', c: [0, 0], r: 3 },
        { t: 'seg', a: [-3, 0], b: [3, 0] },
        { t: 'seg', a: [0, 0], b: [-2.46, 1.72] },
        { t: 'angle', at: [0, 0], from: [-2.46, 1.72], to: [-3, 0], r: 0.9, label: '35' },
        { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
        { t: 'point', p: [-3, 0], label: 'A', dx: -12, dy: 6 },
        { t: 'point', p: [3, 0], label: 'B', dx: 12, dy: 0 },
        { t: 'point', p: [-2.46, 1.72], label: 'C', dx: -12, dy: -8 },
      ],
    },
    choices: ['$35^\\circ$', '$325^\\circ$', '$55^\\circ$', '$145^\\circ$'],
    answer: 3,
    solution: 'The semicircle from $A$ to $B$ through $C$ measures $180^\\circ$, and arcs $AC$ and $CB$ fill it together. So arc $CB = 180^\\circ - 35^\\circ = 145^\\circ$. Watch out for $55^\\circ$ — that subtracts from $90^\\circ$, but a semicircle is $180^\\circ$, not $90^\\circ$.',
  },
  {
    q: 'Which value of $n$ is a counterexample to the claim "$n^2 > n$ for every whole number $n$"?',
    choices: ['$n = 2$', '$n = 1$', '$n = 3$', '$n = 5$'],
    answer: 1,
    solution: 'Test $n = 1$: $1^2 = 1$, and $1 > 1$ is false — the square is equal, not bigger. That single failure disproves "every." For $n = 2, 3, 5$ the claim holds ($4 > 2$, $9 > 3$, $25 > 5$), so they cannot serve as counterexamples.',
  },
  {
    q: 'Which of these true statements has a converse that is ALSO true?',
    choices: ['If a number is a multiple of $10$, then it is even', 'If a shape is a square, then it has four sides', 'If a number is even, then it is $2$ times some whole number', 'If a segment is a diameter of a circle, then it is a chord of that circle'],
    answer: 2,
    solution: 'Take the converses one at a time. "Even $\\Rightarrow$ multiple of $10$" fails ($4$ is even). "Four sides $\\Rightarrow$ square" fails (a long rectangle). "Chord $\\Rightarrow$ diameter" fails (a short chord misses the center). But "$2$ times a whole number $\\Rightarrow$ even" is exactly the definition of even — definitions work in both directions, so that converse is true.',
  },
  {
    q: 'Points $P$, $Q$, and $R$ are collinear. How many planes contain all three of them?',
    choices: ['exactly one', 'none', 'exactly three', 'infinitely many'],
    answer: 3,
    solution: 'Three NON-collinear points pin down one plane — but collinear points all sit on a single line, and a plane can spin around that line like the pages of a book around its spine. Every page position is a different plane containing all three points, so there are infinitely many.',
  },
  {
    q: 'Five points are drawn: $A$, $B$, $C$ are collinear, and no other three of the points are collinear. How many different lines pass through at least two of the five points?',
    fig: {
      view: [-1.5, -2, 5.5, 4],
      elems: [
        { t: 'line', a: [0, 0], b: [4, 0] },
        { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: 14 },
        { t: 'point', p: [2, 0], label: 'B', dx: 0, dy: 14 },
        { t: 'point', p: [4, 0], label: 'C', dx: 0, dy: 14 },
        { t: 'point', p: [1, 3], label: 'D', dx: -10, dy: -8 },
        { t: 'point', p: [3, 2], label: 'E', dx: 12, dy: -6 },
      ],
    },
    choices: ['$8$', '$10$', '$7$', '$9$'],
    answer: 0,
    solution: 'Five points make $\\frac{5 \\times 4}{2} = 10$ pairs. If no three points were collinear that would mean $10$ lines — but the pairs $AB$, $AC$, and $BC$ all give the SAME line, so those $3$ pairs produce just $1$ line instead of $3$. That merges $3$ lines into $1$, losing $2$: the total is $10 - 3 + 1 = 8$.',
  },
  {
    q: 'Points $A$, $B$, and $C$ lie on a circle with center $O$. Central angles $\\angle AOB = 90^\\circ$ and $\\angle BOC = 120^\\circ$, as shown. What is the measure of arc $CA$ that does not contain $B$?',
    fig: {
      view: [-4, -4, 4, 4],
      elems: [
        { t: 'circle', c: [0, 0], r: 3 },
        { t: 'seg', a: [0, 0], b: [-2.9, 0.78] },
        { t: 'seg', a: [0, 0], b: [0.78, 2.9] },
        { t: 'seg', a: [0, 0], b: [2.12, -2.12] },
        { t: 'angle', at: [0, 0], from: [0.78, 2.9], to: [-2.9, 0.78], r: 0.7, label: '90' },
        { t: 'angle', at: [0, 0], from: [2.12, -2.12], to: [0.78, 2.9], r: 1, label: '120' },
        { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
        { t: 'point', p: [-2.9, 0.78], label: 'A', dx: -12, dy: -6 },
        { t: 'point', p: [0.78, 2.9], label: 'B', dx: 8, dy: -10 },
        { t: 'point', p: [2.12, -2.12], label: 'C', dx: 12, dy: 8 },
      ],
    },
    choices: ['$210^\\circ$', '$150^\\circ$', '$120^\\circ$', '$90^\\circ$'],
    answer: 1,
    solution: 'The three central angles at $O$ wrap all the way around, so they sum to $360^\\circ$. The angle $\\angle COA$ on the side away from $B$ measures $360^\\circ - 90^\\circ - 120^\\circ = 150^\\circ$, and an arc matches its central angle: arc $CA = 150^\\circ$. ($210^\\circ$ is the arc from $C$ to $A$ that goes THROUGH $B$.)',
  },
]

const worksheet = [
  {
    q: 'Points $A$ and $B$ are two distinct points. Write the symbols for: (a) the segment with endpoints $A$ and $B$, (b) the ray that starts at $A$ and passes through $B$, and (c) the line through $A$ and $B$.',
    answer: '(a) $\\overline{AB}$, (b) $\\overrightarrow{AB}$, (c) line $AB$',
    solution: 'The bar with no arrows, $\\overline{AB}$, stops at both endpoints. The single arrow, $\\overrightarrow{AB}$, starts at $A$ (the first letter is always the endpoint!) and runs forever past $B$. The line runs forever both ways and can be written as line $AB$ or line $BA$ — for a line, the order does not matter.',
  },
  {
    q: 'A circle with center $O$ has radius $4.5$, as shown. Find the length of a diameter of the circle.',
    fig: {
      view: [-5.5, -5.5, 5.5, 5.5],
      elems: [
        { t: 'circle', c: [0, 0], r: 4.5 },
        { t: 'seg', a: [0, 0], b: [4.5, 0] },
        { t: 'label', p: [2.25, 0], text: '4.5', dx: 0, dy: -10 },
        { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
        { t: 'point', p: [4.5, 0], label: 'A', dx: 12, dy: 0 },
      ],
    },
    answer: '$9$',
    solution: 'A diameter is a chord through the center — two radii joined end to end. So its length is $2 \\times 4.5 = 9$.',
  },
  {
    q: 'Six points lie on a line. How many different segments have both endpoints among the six points?',
    answer: '$15$',
    solution: 'Each segment is a pair of points, and there are $\\frac{6 \\times 5}{2} = 15$ pairs. (We divide by $2$ because picking $P$ then $Q$ gives the same segment as picking $Q$ then $P$.)',
  },
  {
    q: 'Find a counterexample to the claim: "Every multiple of $3$ is odd."',
    answer: '$6$ (any even multiple of $3$ works, such as $6$, $12$, or $18$)',
    solution: 'We need a multiple of $3$ that is not odd. $6 = 3 \\times 2$ is a multiple of $3$, and it is even. One such number is enough to disprove the "every" claim — the examples $3$, $9$, and $15$ that seem to support it cannot save it.',
  },
  {
    q: 'Write the converse of the statement: "If a segment is a diameter of a circle, then it is a chord of that circle." Then decide whether the converse is true or false.',
    answer: 'Converse: "If a segment is a chord of a circle, then it is a diameter of that circle." It is false.',
    solution: 'The converse swaps the if-part and the then-part. It is false: a chord only needs both endpoints on the circle, and a short chord near the edge misses the center entirely, so it is not a diameter. The original statement is true, but truth does not transfer to the converse for free!',
  },
  {
    q: 'Points $P$, $Q$, and $R$ lie on a line, with $Q$ between $P$ and $R$. If $PQ = 4$ and $QR = 3$, find $PR$.',
    fig: {
      view: [-1, -2, 8, 2],
      elems: [
        { t: 'line', a: [0, 0], b: [7, 0] },
        { t: 'point', p: [0, 0], label: 'P', dx: 0, dy: -12 },
        { t: 'point', p: [4, 0], label: 'Q', dx: 0, dy: -12 },
        { t: 'point', p: [7, 0], label: 'R', dx: 0, dy: -12 },
        { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
        { t: 'label', p: [5.5, 0], text: '3', dx: 0, dy: 14 },
      ],
    },
    answer: '$7$',
    solution: 'Since $Q$ is between $P$ and $R$, the two smaller distances add up to the whole: $PR = PQ + QR = 4 + 3 = 7$. (This adding-up fact only works because $Q$ is BETWEEN the other two points.)',
  },
  {
    q: 'Points $A$, $B$, $C$, $D$, and $E$ lie on a circle. How many different chords have both endpoints among the five points?',
    fig: {
      view: [-4, -4, 4, 4],
      elems: [
        { t: 'circle', c: [0, 0], r: 3 },
        { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -12 },
        { t: 'point', p: [-2.85, 0.93], label: 'B', dx: -12, dy: -4 },
        { t: 'point', p: [-1.76, -2.43], label: 'C', dx: -10, dy: 12 },
        { t: 'point', p: [1.76, -2.43], label: 'D', dx: 10, dy: 12 },
        { t: 'point', p: [2.85, 0.93], label: 'E', dx: 12, dy: -4 },
      ],
    },
    answer: '$10$',
    solution: 'A chord is a pair of the marked points, so count pairs: $\\frac{5 \\times 4}{2} = 10$. You can also count directly: $A$ starts $4$ chords, $B$ starts $3$ new ones, then $2$, then $1$, and $4 + 3 + 2 + 1 = 10$.',
  },
  {
    q: 'A circle with center $O$ has radius $6$. Point $A$ satisfies $OA = 4.5$, point $B$ satisfies $OB = 6$, and point $C$ satisfies $OC = 7.2$. Decide whether each point is inside the circle, on the circle, or outside the circle.',
    fig: {
      view: [-7.5, -7.5, 8.5, 7.5],
      elems: [
        { t: 'circle', c: [0, 0], r: 6 },
        { t: 'seg', a: [0, 0], b: [2.7, 3.6], dash: true },
        { t: 'seg', a: [0, 0], b: [-3.6, 4.8], dash: true },
        { t: 'seg', a: [0, 0], b: [4.32, -5.76], dash: true },
        { t: 'label', p: [1.35, 1.8], text: '4.5', dx: 12, dy: 4 },
        { t: 'label', p: [-1.8, 2.4], text: '6', dx: -10, dy: -4 },
        { t: 'label', p: [2.16, -2.88], text: '7.2', dx: -12, dy: -6 },
        { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: -12 },
        { t: 'point', p: [2.7, 3.6], label: 'A', dx: 4, dy: -12 },
        { t: 'point', p: [-3.6, 4.8], label: 'B', dx: -10, dy: -10 },
        { t: 'point', p: [4.32, -5.76], label: 'C', dx: 12, dy: 8 },
      ],
    },
    answer: '$A$ is inside, $B$ is on the circle, $C$ is outside',
    solution: 'Compare each distance to the radius, $6$. $OA = 4.5 < 6$, so $A$ is inside. $OB = 6$ exactly, so $B$ sits right on the circle. $OC = 7.2 > 6$, so $C$ is outside. The radius is the referee for every point in the plane.',
  },
  {
    q: '$\\overline{AB}$ is a diameter of the circle with center $O$, and $C$ is a point on the circle with arc $AC = 48^\\circ$. Find the measure of arc $CB$.',
    fig: {
      view: [-4, -4, 4, 4],
      elems: [
        { t: 'circle', c: [0, 0], r: 3 },
        { t: 'seg', a: [-3, 0], b: [3, 0] },
        { t: 'seg', a: [0, 0], b: [-2.01, 2.23] },
        { t: 'angle', at: [0, 0], from: [-2.01, 2.23], to: [-3, 0], r: 0.8, label: '48' },
        { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
        { t: 'point', p: [-3, 0], label: 'A', dx: -12, dy: 6 },
        { t: 'point', p: [3, 0], label: 'B', dx: 12, dy: 0 },
        { t: 'point', p: [-2.01, 2.23], label: 'C', dx: -10, dy: -10 },
      ],
    },
    answer: '$132^\\circ$',
    solution: 'The diameter $\\overline{AB}$ splits the circle into two semicircles of $180^\\circ$. Arcs $AC$ and $CB$ together make the semicircle containing $C$, so arc $CB = 180^\\circ - 48^\\circ = 132^\\circ$.',
  },
  {
    q: 'Consider the claim: "If $n$ is an even whole number, then $n + 1$ is prime." Find a counterexample.',
    answer: '$n = 8$ (then $n + 1 = 9 = 3 \\times 3$, which is not prime)',
    solution: 'Test the even numbers in order: $n = 2$ gives $3$ (prime), $n = 4$ gives $5$ (prime), $n = 6$ gives $7$ (prime) — the claim looks great! But $n = 8$ gives $9 = 3 \\times 3$, which is not prime. The claim passed three tests in a row and still failed, which is exactly why we demand proofs instead of examples.',
  },
]

export default {
  id: 'intro-geometry-ch01',
  book: 'intro-geometry',
  number: 1,
  title: "What's in a Name?",
  intro:
    'Welcome to geometry — the mathematics of points, lines, circles, and shapes! Before we can build anything, we need to agree on what our words and symbols mean, the way builders agree on a blueprint. In this chapter you will learn the language of geometry, meet your first circles, and discover what it really takes to prove something is true.',
  sections: [s12, s13, s15],
  challenge,
  worksheet,
}
