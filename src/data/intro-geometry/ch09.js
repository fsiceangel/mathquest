// Introduction to Geometry — Chapter 9: Polygons
// All problems, explanations, and examples are original MathQuest content.

const s91 = {
  id: '9.1',
  title: 'Introduction to Polygons',
  learn: {
    concepts: [
      {
        heading: 'What counts as a polygon?',
        body: 'A polygon is a closed figure built from segments (its sides) that meet only at their endpoints (its vertices). We name polygons by their side count: triangle ($3$), quadrilateral ($4$), pentagon ($5$), hexagon ($6$), heptagon ($7$), octagon ($8$), nonagon ($9$), decagon ($10$), and dodecagon ($12$). For big or unknown counts we just say $n$-gon — a $17$-gon has $17$ sides, no fancy name required.',
      },
      {
        heading: 'Convex or concave?',
        body: 'A polygon is convex if every one of its interior angles is less than $180^\\circ$ — no vertex points inward. If even one vertex caves in (an interior angle bigger than $180^\\circ$), the polygon is concave. Here is a quick test: in a convex polygon, every segment connecting two points of the polygon stays inside it; in a concave polygon, some such segment escapes outside.',
      },
      {
        heading: 'Regular polygons',
        body: 'A polygon is regular when BOTH of these hold: all its sides have equal length AND all its angles have equal measure. You need both! A rhombus has four equal sides but unequal angles, and a rectangle has four equal angles but unequal sides — neither is regular. A square passes both tests, so it is the regular quadrilateral.',
      },
      {
        heading: 'Counting diagonals',
        body: 'A diagonal connects two vertices that are not next to each other. From each of the $n$ vertices you can draw a diagonal to $n - 3$ others (skip the vertex itself and its $2$ neighbors). That gives $n(n-3)$ — but every diagonal got counted twice, once from each end. So a polygon has $\\frac{n(n-3)}{2}$ diagonals.',
      },
    ],
    examples: [
      {
        problem: 'Pentagon $ABCDE$ shown has a vertex $D$ that points into the figure. Show that the pentagon is concave.',
        steps: [
          'Look at vertex $D$: the interior angle there opens up beyond $180^\\circ$ — the polygon caves in at that spot.',
          'We can confirm with the segment test: connect $C$ and $E$. The dashed segment $\\overline{CE}$ passes over the notch, so part of it lies OUTSIDE the pentagon.',
          'In a convex polygon, no segment between two of its points ever leaves the polygon. Since $\\overline{CE}$ escapes, $ABCDE$ is concave.',
        ],
        answer: '$ABCDE$ is concave: its interior angle at $D$ exceeds $180^\\circ$',
        fig: {
          view: [-1, -1, 7, 5],
          elems: [
            { t: 'poly', pts: [[0, 0], [6, 0], [6, 4], [3, 1.5], [0, 4]], fill: false },
            { t: 'seg', a: [6, 4], b: [0, 4], dash: true },
            { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
            { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 10 },
            { t: 'point', p: [6, 4], label: 'C', dx: 10, dy: -8 },
            { t: 'point', p: [3, 1.5], label: 'D', dx: 0, dy: 14 },
            { t: 'point', p: [0, 4], label: 'E', dx: -10, dy: -8 },
          ],
        },
      },
      {
        problem: 'How many diagonals does an octagon have?',
        steps: [
          'Pick one vertex, say $A$. It cannot connect to itself or to its $2$ neighbors, so it sends diagonals to $8 - 3 = 5$ vertices — the dashed segments in the figure.',
          'All $8$ vertices do the same, giving $8 \\times 5 = 40$ endpoints of diagonals. But each diagonal was counted twice, once from each end.',
          'So the octagon has $\\frac{8 \\times 5}{2} = 20$ diagonals. This is exactly the formula $\\frac{n(n-3)}{2}$ with $n = 8$.',
        ],
        answer: '$20$ diagonals',
        fig: {
          view: [-4, -4, 4, 4],
          elems: [
            { t: 'poly', pts: [[2.77, 1.15], [1.15, 2.77], [-1.15, 2.77], [-2.77, 1.15], [-2.77, -1.15], [-1.15, -2.77], [1.15, -2.77], [2.77, -1.15]], fill: false },
            { t: 'seg', a: [2.77, 1.15], b: [-1.15, 2.77], dash: true },
            { t: 'seg', a: [2.77, 1.15], b: [-2.77, 1.15], dash: true },
            { t: 'seg', a: [2.77, 1.15], b: [-2.77, -1.15], dash: true },
            { t: 'seg', a: [2.77, 1.15], b: [-1.15, -2.77], dash: true },
            { t: 'seg', a: [2.77, 1.15], b: [1.15, -2.77], dash: true },
            { t: 'point', p: [2.77, 1.15], label: 'A', dx: 12, dy: -6 },
          ],
        },
      },
      {
        problem: 'A convex polygon has exactly $54$ diagonals. How many sides does it have?',
        steps: [
          'Set the diagonal formula equal to $54$: $\\frac{n(n-3)}{2} = 54$, so $n(n-3) = 108$.',
          'We need two numbers that differ by $3$ and multiply to $108$. Try $n = 12$: $12 \\times 9 = 108$. ✓',
          'To be sure it is the only answer, note that $n(n-3)$ grows as $n$ grows, so no other positive $n$ works. The polygon is a dodecagon.',
        ],
        answer: '$12$ sides',
      },
    ],
  },
  problems: [
    {
      q: 'The regular polygon shown has $7$ sides. What is it called?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'poly', pts: [[0, 3], [-2.35, 1.87], [-2.92, -0.67], [-1.3, -2.7], [1.3, -2.7], [2.92, -0.67], [2.35, 1.87]], fill: false },
          { t: 'tick', a: [0, 3], b: [-2.35, 1.87], n: 1 },
          { t: 'tick', a: [-2.35, 1.87], b: [-2.92, -0.67], n: 1 },
          { t: 'tick', a: [-2.92, -0.67], b: [-1.3, -2.7], n: 1 },
          { t: 'tick', a: [-1.3, -2.7], b: [1.3, -2.7], n: 1 },
          { t: 'tick', a: [1.3, -2.7], b: [2.92, -0.67], n: 1 },
          { t: 'tick', a: [2.92, -0.67], b: [2.35, 1.87], n: 1 },
          { t: 'tick', a: [2.35, 1.87], b: [0, 3], n: 1 },
        ],
      },
      choices: ['a hexagon', 'a heptagon', 'an octagon', 'a nonagon'],
      answer: 1,
      solution: 'Count the sides: seven. A $7$-sided polygon is a heptagon. A hexagon has $6$ sides, an octagon $8$, and a nonagon $9$ — the names march up one side at a time.',
    },
    {
      q: 'How many sides does a dodecagon have?',
      choices: ['$10$', '$11$', '$12$', '$20$'],
      answer: 2,
      solution: 'A dodecagon has $12$ sides — "dodeca" means twelve. The $10$-sided polygon is the decagon, and an $11$-sided one is usually just called an $11$-gon.',
    },
    {
      q: 'One vertex of the pentagon shown points into the figure. This polygon is best described as',
      fig: {
        view: [-1, -1, 7, 4],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [6, 3], [3, 1.2], [0, 3]], fill: false },
        ],
      },
      choices: ['convex', 'regular', 'concave', 'equilateral'],
      answer: 2,
      solution: 'The inward-pointing vertex creates an interior angle bigger than $180^\\circ$, which is exactly what makes a polygon concave. A convex polygon has no dents, a regular polygon needs equal sides AND equal angles, and this pentagon\'s sides are clearly not all equal.',
    },
    {
      q: 'The figure shows a hexagon with all of its diagonals drawn. How many diagonals does a hexagon have?',
      fig: {
        view: [-4, -3.6, 4, 3.6],
        elems: [
          { t: 'poly', pts: [[3, 0], [1.5, 2.6], [-1.5, 2.6], [-3, 0], [-1.5, -2.6], [1.5, -2.6]], fill: false },
          { t: 'seg', a: [3, 0], b: [-1.5, 2.6], dash: true },
          { t: 'seg', a: [3, 0], b: [-3, 0], dash: true },
          { t: 'seg', a: [3, 0], b: [-1.5, -2.6], dash: true },
          { t: 'seg', a: [1.5, 2.6], b: [-3, 0], dash: true },
          { t: 'seg', a: [1.5, 2.6], b: [-1.5, -2.6], dash: true },
          { t: 'seg', a: [1.5, 2.6], b: [1.5, -2.6], dash: true },
          { t: 'seg', a: [-1.5, 2.6], b: [1.5, -2.6], dash: true },
          { t: 'seg', a: [-1.5, 2.6], b: [-1.5, -2.6], dash: true },
          { t: 'seg', a: [-3, 0], b: [1.5, -2.6], dash: true },
        ],
      },
      choices: ['$9$', '$15$', '$6$', '$18$'],
      answer: 0,
      solution: 'Use the formula: $\\frac{n(n-3)}{2} = \\frac{6 \\times 3}{2} = 9$. Watch out for $15$ — that is $\\frac{6 \\times 5}{2}$, which counts ALL pairs of vertices, including the $6$ sides. Diagonals skip the neighbors, so we use $n - 3$, not $n - 1$.',
    },
    {
      q: 'In the decagon shown, all the diagonals from vertex $A$ are drawn. How many diagonals leave a single vertex of a decagon?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'poly', pts: [[0, 3], [-1.76, 2.43], [-2.85, 0.93], [-2.85, -0.93], [-1.76, -2.43], [0, -3], [1.76, -2.43], [2.85, -0.93], [2.85, 0.93], [1.76, 2.43]], fill: false },
          { t: 'seg', a: [0, 3], b: [-2.85, 0.93], dash: true },
          { t: 'seg', a: [0, 3], b: [-2.85, -0.93], dash: true },
          { t: 'seg', a: [0, 3], b: [-1.76, -2.43], dash: true },
          { t: 'seg', a: [0, 3], b: [0, -3], dash: true },
          { t: 'seg', a: [0, 3], b: [1.76, -2.43], dash: true },
          { t: 'seg', a: [0, 3], b: [2.85, -0.93], dash: true },
          { t: 'seg', a: [0, 3], b: [2.85, 0.93], dash: true },
          { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -12 },
        ],
      },
      choices: ['$10$', '$8$', '$9$', '$7$'],
      answer: 3,
      solution: 'From one vertex you cannot draw a diagonal to itself or to its two neighbors — those connections are sides, not diagonals. That removes $3$ of the $10$ vertices, leaving $10 - 3 = 7$ diagonals. Count the dashed segments in the figure to confirm!',
    },
    {
      q: 'The quadrilateral shown has four sides of equal length (see the tick marks), yet it is NOT a regular polygon. Why not?',
      fig: {
        view: [-1, -1, 6, 4],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [4.5, 2.6], [1.5, 2.6]], fill: false },
          { t: 'tick', a: [0, 0], b: [3, 0], n: 1 },
          { t: 'tick', a: [3, 0], b: [4.5, 2.6], n: 1 },
          { t: 'tick', a: [4.5, 2.6], b: [1.5, 2.6], n: 1 },
          { t: 'tick', a: [1.5, 2.6], b: [0, 0], n: 1 },
        ],
      },
      choices: ['Its angles are not all equal', 'It has too few sides to be regular', 'Its sides are not truly equal', 'A quadrilateral can never be regular'],
      answer: 0,
      solution: 'Regular means equal sides AND equal angles — both at once. This rhombus passes the side test but leans over, so two of its angles are sharp and two are wide. Equal angles fail, so it is not regular. (A quadrilateral CAN be regular: that is exactly what a square is.)',
    },
    {
      q: 'How many diagonals does a regular dodecagon have?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'poly', pts: [[2.9, 0.78], [2.12, 2.12], [0.78, 2.9], [-0.78, 2.9], [-2.12, 2.12], [-2.9, 0.78], [-2.9, -0.78], [-2.12, -2.12], [-0.78, -2.9], [0.78, -2.9], [2.12, -2.12], [2.9, -0.78]], fill: false },
        ],
      },
      choices: ['$66$', '$54$', '$108$', '$48$'],
      answer: 1,
      solution: 'Apply $\\frac{n(n-3)}{2}$ with $n = 12$: $\\frac{12 \\times 9}{2} = 54$. The value $108$ forgets to divide by $2$ (each diagonal has two ends!), and $66 = \\frac{12 \\times 11}{2}$ counts the sides as well as the diagonals.',
    },
    {
      q: 'A convex polygon has exactly $20$ diagonals. How many sides does it have?',
      choices: ['$8$', '$7$', '$10$', '$9$'],
      answer: 0,
      solution: 'Solve $\\frac{n(n-3)}{2} = 20$, so $n(n-3) = 40$. We need two numbers $3$ apart with product $40$: $8 \\times 5 = 40$. ✓ So $n = 8$, an octagon. Quick check with the formula: $\\frac{8 \\times 5}{2} = 20$. ✓',
    },
    {
      q: 'A convex polygon has exactly $35$ diagonals. How many sides does it have?',
      choices: ['$9$', '$11$', '$10$', '$14$'],
      answer: 2,
      solution: 'From $\\frac{n(n-3)}{2} = 35$ we get $n(n-3) = 70$. Hunt for two numbers $3$ apart multiplying to $70$: $10 \\times 7 = 70$. ✓ So $n = 10$. If you try $n = 9$ you get $\\frac{9 \\times 6}{2} = 27$ — too few — and $n = 11$ gives $44$ — too many.',
    },
    {
      q: 'A convex polygon has exactly twice as many diagonals as sides. How many sides does it have?',
      choices: ['$5$', '$6$', '$8$', '$7$'],
      answer: 3,
      solution: 'Translate to an equation: $\\frac{n(n-3)}{2} = 2n$. Multiply both sides by $2$: $n(n-3) = 4n$. Since $n \\neq 0$ we may divide by $n$: $n - 3 = 4$, so $n = 7$. Check: a heptagon has $\\frac{7 \\times 4}{2} = 14$ diagonals, and $14 = 2 \\times 7$. ✓',
    },
  ],
}

const s92 = {
  id: '9.2',
  title: 'Angles in a Polygon',
  learn: {
    concepts: [
      {
        heading: 'Slice it into triangles',
        body: 'Draw all the diagonals from ONE vertex of an $n$-gon, and the polygon falls apart into $n - 2$ triangles. Each triangle contributes $180^\\circ$, and together the triangle angles make up exactly the polygon\'s interior angles. So the interior angles of any $n$-gon sum to $(n-2) \\cdot 180^\\circ$. A pentagon: $3 \\cdot 180^\\circ = 540^\\circ$. A decagon: $8 \\cdot 180^\\circ = 1440^\\circ$.',
      },
      {
        heading: 'Each angle of a regular polygon',
        body: 'In a REGULAR $n$-gon all interior angles are equal, so each one is the total divided evenly: $\\frac{(n-2) \\cdot 180^\\circ}{n}$. For a regular hexagon that is $\\frac{4 \\cdot 180^\\circ}{6} = 120^\\circ$. This only works when the polygon is regular — an irregular hexagon still has angles summing to $720^\\circ$, but they need not be equal.',
      },
      {
        heading: 'Exterior angles always total 360',
        body: 'An exterior angle sits between one side and the extension of its neighbor. Imagine walking around the polygon: at each vertex you turn by the exterior angle, and by the time you return to the start you have made exactly one full spin. So the exterior angles of ANY convex polygon sum to $360^\\circ$ — whether it has $3$ sides or $3000$. For a regular $n$-gon, each exterior angle is $\\frac{360^\\circ}{n}$.',
      },
      {
        heading: 'Interior and exterior are partners',
        body: 'At each vertex, the interior and exterior angles lie along a straight line, so they add to $180^\\circ$. This gives a fast route to $n$: from an interior angle of a regular polygon, subtract from $180^\\circ$ to get the exterior angle, then compute $n = \\frac{360^\\circ}{\\text{exterior}}$. It is almost always easier than wrestling with the interior-angle formula.',
      },
    ],
    examples: [
      {
        problem: 'Find the sum of the interior angles of a heptagon.',
        steps: [
          'Draw the diagonals from one vertex, say $A$. They split the heptagon into $5$ triangles — that is $n - 2$ with $n = 7$, and you can count them in the figure.',
          'Every angle of every triangle lands inside an angle of the heptagon, and together they tile all of the heptagon\'s angles perfectly.',
          'So the interior angles sum to $5 \\cdot 180^\\circ = 900^\\circ$.',
        ],
        answer: '$(7-2) \\cdot 180^\\circ = 900^\\circ$',
        fig: {
          view: [-4, -4, 4, 4],
          elems: [
            { t: 'poly', pts: [[0, 3], [-2.35, 1.87], [-2.92, -0.67], [-1.3, -2.7], [1.3, -2.7], [2.92, -0.67], [2.35, 1.87]], fill: false },
            { t: 'seg', a: [0, 3], b: [-2.92, -0.67], dash: true },
            { t: 'seg', a: [0, 3], b: [-1.3, -2.7], dash: true },
            { t: 'seg', a: [0, 3], b: [1.3, -2.7], dash: true },
            { t: 'seg', a: [0, 3], b: [2.92, -0.67], dash: true },
            { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -12 },
          ],
        },
      },
      {
        problem: 'What is the measure of each interior angle of a regular pentagon?',
        steps: [
          'First the total: a pentagon splits into $5 - 2 = 3$ triangles, so its angles sum to $3 \\cdot 180^\\circ = 540^\\circ$.',
          'Because the pentagon is regular, its $5$ angles are all equal, so each is $\\frac{540^\\circ}{5} = 108^\\circ$.',
        ],
        answer: 'Each interior angle is $108^\\circ$',
        fig: {
          view: [-4, -3.6, 4, 4],
          elems: [
            { t: 'poly', pts: [[0, 3], [-2.85, 0.93], [-1.76, -2.43], [1.76, -2.43], [2.85, 0.93]], fill: false },
            { t: 'angle', at: [0, 3], from: [-2.85, 0.93], to: [2.85, 0.93], r: 0.9, label: '108' },
            { t: 'tick', a: [0, 3], b: [-2.85, 0.93], n: 1 },
            { t: 'tick', a: [-2.85, 0.93], b: [-1.76, -2.43], n: 1 },
            { t: 'tick', a: [-1.76, -2.43], b: [1.76, -2.43], n: 1 },
            { t: 'tick', a: [1.76, -2.43], b: [2.85, 0.93], n: 1 },
            { t: 'tick', a: [2.85, 0.93], b: [0, 3], n: 1 },
          ],
        },
      },
      {
        problem: 'Each interior angle of a regular polygon measures $156^\\circ$. How many sides does the polygon have?',
        steps: [
          'Switch to exterior angles — they are easier. Each exterior angle is $180^\\circ - 156^\\circ = 24^\\circ$.',
          'The exterior angles of any convex polygon sum to $360^\\circ$, and in a regular polygon they are all equal, so $n = \\frac{360^\\circ}{24^\\circ} = 15$.',
          'Check: each interior angle of a regular $15$-gon is $\\frac{13 \\cdot 180^\\circ}{15} = 156^\\circ$. ✓',
        ],
        answer: '$15$ sides',
      },
    ],
  },
  problems: [
    {
      q: 'The pentagon shown is split into triangles by the diagonals from one vertex. What is the sum of the interior angles of a pentagon?',
      fig: {
        view: [-4, -3.6, 4, 4],
        elems: [
          { t: 'poly', pts: [[0, 3], [-2.85, 0.93], [-1.76, -2.43], [1.76, -2.43], [2.85, 0.93]], fill: false },
          { t: 'seg', a: [0, 3], b: [-1.76, -2.43], dash: true },
          { t: 'seg', a: [0, 3], b: [1.76, -2.43], dash: true },
        ],
      },
      choices: ['$540^\\circ$', '$900^\\circ$', '$360^\\circ$', '$720^\\circ$'],
      answer: 0,
      solution: 'The two diagonals cut the pentagon into $3$ triangles, and $3 \\cdot 180^\\circ = 540^\\circ$. The trap answer $900^\\circ$ is $5 \\cdot 180^\\circ$ — but a pentagon makes only $n - 2 = 3$ triangles, not $n$.',
    },
    {
      q: 'What is the measure of each interior angle of the regular hexagon shown?',
      fig: {
        view: [-4, -3.6, 4.5, 3.6],
        elems: [
          { t: 'poly', pts: [[3, 0], [1.5, 2.6], [-1.5, 2.6], [-3, 0], [-1.5, -2.6], [1.5, -2.6]], fill: false },
          { t: 'angle', at: [3, 0], from: [1.5, -2.6], to: [1.5, 2.6], r: 0.8, label: '?' },
          { t: 'tick', a: [3, 0], b: [1.5, 2.6], n: 1 },
          { t: 'tick', a: [1.5, 2.6], b: [-1.5, 2.6], n: 1 },
          { t: 'tick', a: [-1.5, 2.6], b: [-3, 0], n: 1 },
          { t: 'tick', a: [-3, 0], b: [-1.5, -2.6], n: 1 },
          { t: 'tick', a: [-1.5, -2.6], b: [1.5, -2.6], n: 1 },
          { t: 'tick', a: [1.5, -2.6], b: [3, 0], n: 1 },
        ],
      },
      choices: ['$108^\\circ$', '$135^\\circ$', '$120^\\circ$', '$60^\\circ$'],
      answer: 2,
      solution: 'The interior angles of a hexagon sum to $(6-2) \\cdot 180^\\circ = 720^\\circ$, and a regular hexagon shares that total equally among $6$ angles: $\\frac{720^\\circ}{6} = 120^\\circ$. ($108^\\circ$ belongs to the regular pentagon and $135^\\circ$ to the regular octagon — easy to mix up!)',
    },
    {
      q: 'What is the sum of the exterior angles of a convex $25$-gon (one exterior angle at each vertex)?',
      choices: ['$4140^\\circ$', '$360^\\circ$', '$9000^\\circ$', '$720^\\circ$'],
      answer: 1,
      solution: 'Walk once around the polygon: at each vertex you turn through the exterior angle, and after all $25$ vertices you have spun exactly once around — $360^\\circ$. The number of sides never matters! ($4140^\\circ$ is the INTERIOR angle sum, $(25-2) \\cdot 180^\\circ$.)',
    },
    {
      q: 'In the figure, one side of a regular octagon is extended to form an exterior angle. What is its measure?',
      fig: {
        view: [-4, -4, 5, 4],
        elems: [
          { t: 'poly', pts: [[2.77, 1.15], [1.15, 2.77], [-1.15, 2.77], [-2.77, 1.15], [-2.77, -1.15], [-1.15, -2.77], [1.15, -2.77], [2.77, -1.15]], fill: false },
          { t: 'seg', a: [2.77, -1.15], b: [3.92, 0], dash: true },
          { t: 'angle', at: [2.77, -1.15], from: [3.92, 0], to: [2.77, 1.15], r: 1.1, label: '?' },
        ],
      },
      choices: ['$60^\\circ$', '$36^\\circ$', '$135^\\circ$', '$45^\\circ$'],
      answer: 3,
      solution: 'The exterior angles of a regular polygon are all equal and total $360^\\circ$, so each one is $\\frac{360^\\circ}{8} = 45^\\circ$. ($135^\\circ$ is the INTERIOR angle of the regular octagon — the exterior angle is its partner along the straight line: $180^\\circ - 135^\\circ = 45^\\circ$.)',
    },
    {
      q: 'The decagon shown is split into triangles by the diagonals from one vertex. What is the sum of the interior angles of a decagon?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'poly', pts: [[0, 3], [-1.76, 2.43], [-2.85, 0.93], [-2.85, -0.93], [-1.76, -2.43], [0, -3], [1.76, -2.43], [2.85, -0.93], [2.85, 0.93], [1.76, 2.43]], fill: false },
          { t: 'seg', a: [0, 3], b: [-2.85, 0.93], dash: true },
          { t: 'seg', a: [0, 3], b: [-2.85, -0.93], dash: true },
          { t: 'seg', a: [0, 3], b: [-1.76, -2.43], dash: true },
          { t: 'seg', a: [0, 3], b: [0, -3], dash: true },
          { t: 'seg', a: [0, 3], b: [1.76, -2.43], dash: true },
          { t: 'seg', a: [0, 3], b: [2.85, -0.93], dash: true },
          { t: 'seg', a: [0, 3], b: [2.85, 0.93], dash: true },
        ],
      },
      choices: ['$1440^\\circ$', '$1800^\\circ$', '$1620^\\circ$', '$1080^\\circ$'],
      answer: 0,
      solution: 'The $7$ diagonals from one vertex cut the decagon into $10 - 2 = 8$ triangles, so the interior angles sum to $8 \\cdot 180^\\circ = 1440^\\circ$. The answer $1800^\\circ$ uses $n$ triangles instead of $n - 2$, and $1620^\\circ$ uses $n - 1$.',
    },
    {
      q: 'Each exterior angle of a regular polygon measures $30^\\circ$. How many sides does the polygon have?',
      choices: ['$6$', '$10$', '$12$', '$15$'],
      answer: 2,
      solution: 'The exterior angles total $360^\\circ$ and are all equal, so $n = \\frac{360^\\circ}{30^\\circ} = 12$. It is a regular dodecagon. Check: $12$ turns of $30^\\circ$ spin you around exactly once. ✓',
    },
    {
      q: 'Each interior angle of the regular polygon shown measures $140^\\circ$. How many sides does it have?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'poly', pts: [[0, 3], [-1.93, 2.3], [-2.95, 0.52], [-2.6, -1.5], [-1.03, -2.82], [1.03, -2.82], [2.6, -1.5], [2.95, 0.52], [1.93, 2.3]], fill: false },
          { t: 'angle', at: [0, 3], from: [-1.93, 2.3], to: [1.93, 2.3], r: 0.9, label: '140' },
        ],
      },
      choices: ['$9$', '$7$', '$10$', '$8$'],
      answer: 0,
      solution: 'Go through the exterior angle: $180^\\circ - 140^\\circ = 40^\\circ$ at each vertex, and the exterior angles must total $360^\\circ$, so $n = \\frac{360^\\circ}{40^\\circ} = 9$. A regular nonagon — count the sides in the figure to confirm!',
    },
    {
      q: 'The interior angles of the quadrilateral shown measure $x^\\circ$, $2x^\\circ$, $3x^\\circ$, and $4x^\\circ$. What is the measure of the largest angle?',
      fig: {
        view: [-1, -1, 8, 6],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [7, 4], [1, 5]], fill: false },
          { t: 'label', p: [0, 0], text: 'x', dx: 14, dy: -8 },
          { t: 'label', p: [6, 0], text: '2x', dx: -14, dy: -8 },
          { t: 'label', p: [7, 4], text: '3x', dx: -16, dy: 8 },
          { t: 'label', p: [1, 5], text: '4x', dx: 12, dy: 12 },
        ],
      },
      choices: ['$36^\\circ$', '$144^\\circ$', '$120^\\circ$', '$150^\\circ$'],
      answer: 1,
      solution: 'A quadrilateral\'s angles sum to $(4-2) \\cdot 180^\\circ = 360^\\circ$, so $x + 2x + 3x + 4x = 10x = 360$, giving $x = 36$. The largest angle is $4x = 144^\\circ$. (Choosing $36^\\circ$ stops at $x$ — but the question asks for the largest angle, not $x$ itself.)',
    },
    {
      q: 'Four angles of the pentagon shown measure $100^\\circ$, $105^\\circ$, $115^\\circ$, and $125^\\circ$. What is the measure of the fifth angle?',
      fig: {
        view: [-2, -1, 8, 7],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [7, 3.5], [3, 6], [-1, 3.5]], fill: false },
          { t: 'label', p: [0, 0], text: '100', dx: 18, dy: -10 },
          { t: 'label', p: [6, 0], text: '105', dx: -18, dy: -10 },
          { t: 'label', p: [7, 3.5], text: '115', dx: -18, dy: 4 },
          { t: 'label', p: [3, 6], text: '125', dx: 0, dy: 16 },
          { t: 'label', p: [-1, 3.5], text: '?', dx: 16, dy: 4 },
        ],
      },
      choices: ['$85^\\circ$', '$105^\\circ$', '$115^\\circ$', '$95^\\circ$'],
      answer: 3,
      solution: 'A pentagon\'s interior angles total $(5-2) \\cdot 180^\\circ = 540^\\circ$. The four known angles give $100 + 105 + 115 + 125 = 445$, so the fifth is $540^\\circ - 445^\\circ = 95^\\circ$.',
    },
    {
      q: 'In a certain regular polygon, each interior angle is exactly $4$ times the exterior angle at the same vertex. How many sides does the polygon have?',
      choices: ['$8$', '$12$', '$10$', '$9$'],
      answer: 2,
      solution: 'Let the exterior angle be $e$. Then the interior angle is $4e$, and the two are partners on a straight line: $e + 4e = 180^\\circ$, so $e = 36^\\circ$. Now $n = \\frac{360^\\circ}{36^\\circ} = 10$. Check: a regular decagon has interior angles of $144^\\circ$, and $144 = 4 \\times 36$. ✓',
    },
  ],
}

const s93 = {
  id: '9.3',
  title: 'Polygon Area',
  learn: {
    concepts: [
      {
        heading: 'A hexagon is six equilateral triangles',
        body: 'Connect the center of a regular hexagon to its $6$ vertices. This makes $6$ triangles, each with a $\\frac{360^\\circ}{6} = 60^\\circ$ angle at the center between two equal segments — so each triangle is equilateral with side $s$! An equilateral triangle has area $\\frac{\\sqrt{3}}{4}s^2$, so the hexagon\'s area is $6 \\cdot \\frac{\\sqrt{3}}{4}s^2 = \\frac{3\\sqrt{3}}{2}s^2$. No memorizing needed — you can rebuild this anytime.',
      },
      {
        heading: 'Every regular polygon splits the same way',
        body: 'Center-to-vertex segments cut any regular $n$-gon into $n$ congruent triangles. Each triangle has base $s$ (a side) and height $a$, the apothem — the distance from the center straight out to the middle of a side. So the area is $n \\cdot \\frac{1}{2} s a = \\frac{1}{2} a \\cdot (ns)$, and since $ns$ is the perimeter $P$, every regular polygon satisfies $[\\text{polygon}] = \\frac{1}{2} a P$.',
      },
      {
        heading: 'Decompose the irregular ones',
        body: 'Irregular polygons rarely have a formula, but they always surrender to slicing. Cut the region into rectangles and triangles whose areas you know, then add. Sometimes it is faster to work backwards: surround the polygon with a big rectangle and SUBTRACT the extra pieces.',
      },
      {
        heading: 'Octagons from corner-cut squares',
        body: 'Snip a right triangle off each corner of a square and you get an octagon. If each snipped triangle has legs of length $x$, you removed $4 \\cdot \\frac{1}{2}x^2 = 2x^2$ of area, so the octagon\'s area is the square\'s area minus $2x^2$. Subtracting the cut corners is almost always easier than building the octagon up from pieces.',
      },
    ],
    examples: [
      {
        problem: 'Find the area of a regular hexagon with side length $4$.',
        steps: [
          'Split the hexagon from its center into $6$ triangles, as in the figure. The central angle of each is $\\frac{360^\\circ}{6} = 60^\\circ$, and the two segments from the center are equal — an isosceles triangle with a $60^\\circ$ apex is equilateral.',
          'So we have $6$ equilateral triangles of side $4$, each with area $\\frac{\\sqrt{3}}{4} \\cdot 4^2 = 4\\sqrt{3}$.',
          'Total area: $6 \\cdot 4\\sqrt{3} = 24\\sqrt{3}$.',
        ],
        answer: '$24\\sqrt{3}$',
        fig: {
          view: [-4, -3.6, 4, 3.6],
          elems: [
            { t: 'poly', pts: [[3, 0], [1.5, 2.6], [-1.5, 2.6], [-3, 0], [-1.5, -2.6], [1.5, -2.6]], fill: false },
            { t: 'seg', a: [0, 0], b: [3, 0], dash: true },
            { t: 'seg', a: [0, 0], b: [1.5, 2.6], dash: true },
            { t: 'seg', a: [0, 0], b: [-1.5, 2.6], dash: true },
            { t: 'seg', a: [0, 0], b: [-3, 0], dash: true },
            { t: 'seg', a: [0, 0], b: [-1.5, -2.6], dash: true },
            { t: 'seg', a: [0, 0], b: [1.5, -2.6], dash: true },
            { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: -12 },
            { t: 'label', p: [0, -2.6], text: '4', dx: 0, dy: 14 },
          ],
        },
      },
      {
        problem: 'A regular pentagon has side length $10$ and apothem approximately $6.88$. Estimate its area.',
        steps: [
          'Split the pentagon from its center $O$ into $5$ congruent triangles, one per side. Each has base $10$ and height equal to the apothem, about $6.88$.',
          'One triangle: $\\frac{1}{2} \\cdot 10 \\cdot 6.88 = 34.4$. Five of them: $5 \\cdot 34.4 = 172$.',
          'That is exactly the shortcut $\\frac{1}{2} a P$ with perimeter $P = 50$: $\\frac{1}{2} \\cdot 6.88 \\cdot 50 = 172$.',
        ],
        answer: 'About $172$ square units',
        fig: {
          view: [-4, -3.8, 4, 4],
          elems: [
            { t: 'poly', pts: [[0, 3], [-2.85, 0.93], [-1.76, -2.43], [1.76, -2.43], [2.85, 0.93]], fill: false },
            { t: 'seg', a: [0, 0], b: [0, -2.43], dash: true },
            { t: 'right', at: [0, -2.43], from: [1.76, -2.43], to: [0, 0] },
            { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: -10 },
            { t: 'label', p: [0, -1.2], text: '6.88', dx: -22, dy: 0 },
            { t: 'label', p: [0, -2.43], text: '10', dx: 30, dy: 14 },
          ],
        },
      },
      {
        problem: 'Each corner of a square with side $6$ is cut off along a right triangle with legs of length $2$, leaving an octagon. Find the octagon\'s area.',
        steps: [
          'Work by subtraction: start with the whole square, area $6^2 = 36$.',
          'Each snipped corner is a right triangle with legs $2$, so it has area $\\frac{1}{2} \\cdot 2 \\cdot 2 = 2$, and the four corners together remove $4 \\cdot 2 = 8$.',
          'The octagon keeps the rest: $36 - 8 = 28$.',
        ],
        answer: '$28$ square units',
        fig: {
          view: [-1, -1, 7, 7],
          elems: [
            { t: 'poly', pts: [[2, 0], [4, 0], [6, 2], [6, 4], [4, 6], [2, 6], [0, 4], [0, 2]], fill: false },
            { t: 'seg', a: [0, 0], b: [2, 0], dash: true },
            { t: 'seg', a: [0, 0], b: [0, 2], dash: true },
            { t: 'seg', a: [6, 0], b: [4, 0], dash: true },
            { t: 'seg', a: [6, 0], b: [6, 2], dash: true },
            { t: 'seg', a: [6, 6], b: [4, 6], dash: true },
            { t: 'seg', a: [6, 6], b: [6, 4], dash: true },
            { t: 'seg', a: [0, 6], b: [2, 6], dash: true },
            { t: 'seg', a: [0, 6], b: [0, 4], dash: true },
            { t: 'label', p: [1, 0], text: '2', dx: 0, dy: 14 },
            { t: 'label', p: [0, 1], text: '2', dx: -12, dy: 0 },
            { t: 'label', p: [3, 6], text: '6', dx: 0, dy: -10 },
          ],
        },
      },
    ],
  },
  problems: [
    {
      q: 'A regular hexagon is divided into $6$ equilateral triangles by segments from its center. If each triangle has area $7$, what is the area of the hexagon?',
      choices: ['$42$', '$36$', '$21$', '$49$'],
      answer: 0,
      solution: 'The $6$ triangles tile the hexagon exactly — no gaps, no overlaps — so the hexagon\'s area is just $6 \\times 7 = 42$.',
    },
    {
      q: 'What is the area of the equilateral triangle shown, which has side length $6$?',
      fig: {
        view: [-1, -1, 7, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [3, 5.2]], fill: false },
          { t: 'tick', a: [0, 0], b: [6, 0], n: 1 },
          { t: 'tick', a: [6, 0], b: [3, 5.2], n: 1 },
          { t: 'tick', a: [3, 5.2], b: [0, 0], n: 1 },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
        ],
      },
      choices: ['$18\\sqrt{3}$', '$9\\sqrt{3}$', '$36\\sqrt{3}$', '$6\\sqrt{3}$'],
      answer: 1,
      solution: 'The equilateral triangle formula gives $\\frac{\\sqrt{3}}{4}s^2 = \\frac{\\sqrt{3}}{4} \\cdot 36 = 9\\sqrt{3}$. This little formula is the building block for the hexagon area, so it is worth knowing cold!',
    },
    {
      q: 'Find the area of the regular hexagon shown, which has side length $2$.',
      fig: {
        view: [-3, -2.6, 3, 2.6],
        elems: [
          { t: 'poly', pts: [[2, 0], [1, 1.73], [-1, 1.73], [-2, 0], [-1, -1.73], [1, -1.73]], fill: false },
          { t: 'tick', a: [-1, -1.73], b: [1, -1.73], n: 1 },
          { t: 'tick', a: [1, -1.73], b: [2, 0], n: 1 },
          { t: 'label', p: [0, -1.73], text: '2', dx: 0, dy: 14 },
        ],
      },
      choices: ['$12\\sqrt{3}$', '$3\\sqrt{3}$', '$4\\sqrt{3}$', '$6\\sqrt{3}$'],
      answer: 3,
      solution: 'Six equilateral triangles of side $2$, each with area $\\frac{\\sqrt{3}}{4} \\cdot 4 = \\sqrt{3}$, so the hexagon has area $6\\sqrt{3}$. Or plug into $\\frac{3\\sqrt{3}}{2}s^2 = \\frac{3\\sqrt{3}}{2} \\cdot 4 = 6\\sqrt{3}$ — same thing, because the formula IS the six triangles.',
    },
    {
      q: 'The house-shaped pentagon shown is a rectangle $8$ wide and $5$ tall, topped by a triangle of height $3$. What is its total area?',
      fig: {
        view: [-1, -1, 9, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 5], [4, 8], [0, 5]], fill: false },
          { t: 'seg', a: [0, 5], b: [8, 5], dash: true },
          { t: 'seg', a: [4, 5], b: [4, 8], dash: true },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [8, 2.5], text: '5', dx: 12, dy: 0 },
          { t: 'label', p: [4, 6.5], text: '3', dx: 10, dy: 0 },
        ],
      },
      choices: ['$64$', '$52$', '$46$', '$60$'],
      answer: 1,
      solution: 'Slice along the dashed line: the rectangle has area $8 \\times 5 = 40$, and the roof triangle has base $8$ and height $3$, so area $\\frac{1}{2} \\cdot 8 \\cdot 3 = 12$. Together: $40 + 12 = 52$. (The trap $64$ treats the roof as a full rectangle — remember the $\\frac{1}{2}$ for triangles.)',
    },
    {
      q: 'A regular octagon has side length $5$ and apothem approximately $6$, as shown. Estimate its area.',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'poly', pts: [[2.77, 1.15], [1.15, 2.77], [-1.15, 2.77], [-2.77, 1.15], [-2.77, -1.15], [-1.15, -2.77], [1.15, -2.77], [2.77, -1.15]], fill: false },
          { t: 'seg', a: [0, 0], b: [0, -2.77], dash: true },
          { t: 'right', at: [0, -2.77], from: [1.15, -2.77], to: [0, 0] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: -10 },
          { t: 'label', p: [0, -1.4], text: '6', dx: -12, dy: 0 },
          { t: 'label', p: [0, -2.77], text: '5', dx: 26, dy: 14 },
        ],
      },
      choices: ['$240$', '$60$', '$120$', '$200$'],
      answer: 2,
      solution: 'Use the regular-polygon shortcut $\\frac{1}{2} a P$: the perimeter is $8 \\times 5 = 40$, so the area is about $\\frac{1}{2} \\cdot 6 \\cdot 40 = 120$. Behind the formula are $8$ triangles, each with base $5$ and height $6$: $8 \\cdot \\frac{1}{2} \\cdot 5 \\cdot 6 = 120$. Same answer, same idea.',
    },
    {
      q: 'Each corner of a square with side $10$ is cut off along a right triangle with legs of length $2$, leaving the octagon shown. What is the octagon\'s area?',
      fig: {
        view: [-1, -1, 11, 11],
        elems: [
          { t: 'poly', pts: [[2, 0], [8, 0], [10, 2], [10, 8], [8, 10], [2, 10], [0, 8], [0, 2]], fill: false },
          { t: 'seg', a: [0, 0], b: [2, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [0, 2], dash: true },
          { t: 'seg', a: [10, 0], b: [8, 0], dash: true },
          { t: 'seg', a: [10, 0], b: [10, 2], dash: true },
          { t: 'seg', a: [10, 10], b: [8, 10], dash: true },
          { t: 'seg', a: [10, 10], b: [10, 8], dash: true },
          { t: 'seg', a: [0, 10], b: [2, 10], dash: true },
          { t: 'seg', a: [0, 10], b: [0, 8], dash: true },
          { t: 'label', p: [1, 0], text: '2', dx: 0, dy: 14 },
          { t: 'label', p: [0, 1], text: '2', dx: -12, dy: 0 },
          { t: 'label', p: [5, 10], text: '10', dx: 0, dy: -10 },
        ],
      },
      choices: ['$84$', '$96$', '$92$', '$88$'],
      answer: 2,
      solution: 'Subtract the snipped corners from the square: the square has area $100$, and each corner triangle has area $\\frac{1}{2} \\cdot 2 \\cdot 2 = 2$. Four corners remove $8$, leaving $100 - 8 = 92$. (The trap $84$ removes $4 \\times 4 = 16$, treating each corner as a full $2 \\times 2$ square instead of half of one.)',
    },
    {
      q: 'Find the area of the L-shaped polygon shown.',
      fig: {
        view: [-1, -1, 12, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 8], [6, 8], [6, 5], [0, 5]], fill: false },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [10, 4], text: '8', dx: 12, dy: 0 },
          { t: 'label', p: [8, 8], text: '4', dx: 0, dy: -10 },
          { t: 'label', p: [6, 6.5], text: '3', dx: -10, dy: 0 },
          { t: 'label', p: [3, 5], text: '6', dx: 0, dy: -10 },
          { t: 'label', p: [0, 2.5], text: '5', dx: -12, dy: 0 },
        ],
      },
      choices: ['$62$', '$80$', '$68$', '$56$'],
      answer: 0,
      solution: 'Two good routes. Slice: a $10 \\times 5$ rectangle on the bottom ($50$) plus a $4 \\times 3$ rectangle in the upper right ($12$) gives $62$. Or subtract: the full $10 \\times 8$ rectangle ($80$) minus the missing $6 \\times 3$ block ($18$) also gives $80 - 18 = 62$. Two methods agreeing is the best kind of check!',
    },
    {
      q: 'In the regular hexagon shown, the dashed diagonal between opposite vertices has length $8$. What is the hexagon\'s area?',
      fig: {
        view: [-5, -4.5, 5, 4.5],
        elems: [
          { t: 'poly', pts: [[4, 0], [2, 3.46], [-2, 3.46], [-4, 0], [-2, -3.46], [2, -3.46]], fill: false },
          { t: 'seg', a: [-4, 0], b: [4, 0], dash: true },
          { t: 'label', p: [0, 0], text: '8', dx: 0, dy: -8 },
        ],
      },
      choices: ['$48\\sqrt{3}$', '$16\\sqrt{3}$', '$32\\sqrt{3}$', '$24\\sqrt{3}$'],
      answer: 3,
      solution: 'The long diagonal passes through the center and is made of two center-to-vertex segments. Those segments are sides of the six equilateral triangles, so each equals the side length: $s = \\frac{8}{2} = 4$. Then the area is $\\frac{3\\sqrt{3}}{2} \\cdot 4^2 = 24\\sqrt{3}$. (Using $s = 8$ would give $96\\sqrt{3}$ — way too big, because the diagonal is twice the side, not the side.)',
    },
    {
      q: 'A quadrilateral has vertices at $(0, 0)$, $(7, 0)$, $(5, 6)$, and $(0, 4)$. What is its area?',
      fig: {
        view: [-1, -1, 8, 7],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [5, 6], [0, 4]], fill: false },
          { t: 'seg', a: [0, 0], b: [5, 6], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [7, 0], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [5, 6], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 4], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$62$', '$31$', '$34$', '$26$'],
      answer: 1,
      solution: 'Cut along the dashed diagonal from $A(0,0)$ to $C(5,6)$. Triangle $ABC$ has base $AB = 7$ on the $x$-axis and height $6$ (the $y$-coordinate of $C$): area $\\frac{1}{2} \\cdot 7 \\cdot 6 = 21$. Triangle $ACD$ has base $AD = 4$ on the $y$-axis and height $5$ (the $x$-coordinate of $C$): area $\\frac{1}{2} \\cdot 4 \\cdot 5 = 10$. Total: $21 + 10 = 31$.',
    },
    {
      q: 'A regular hexagon has apothem $3\\sqrt{3}$. What is its area?',
      choices: ['$54\\sqrt{3}$', '$27\\sqrt{3}$', '$108\\sqrt{3}$', '$36\\sqrt{3}$'],
      answer: 0,
      solution: 'In a regular hexagon the apothem is the height of an equilateral triangle with side $s$, so $a = \\frac{s\\sqrt{3}}{2}$. From $\\frac{s\\sqrt{3}}{2} = 3\\sqrt{3}$ we get $s = 6$. Now use either formula: $\\frac{3\\sqrt{3}}{2} \\cdot 36 = 54\\sqrt{3}$, or $\\frac{1}{2} a P = \\frac{1}{2} \\cdot 3\\sqrt{3} \\cdot 36 = 54\\sqrt{3}$. They agree, as they must!',
    },
  ],
}

const s94 = {
  id: '9.4',
  title: 'Polygon Problems',
  learn: {
    concepts: [
      {
        heading: 'Which regular polygons tile the plane?',
        body: 'To tile the plane with copies of one regular polygon, several must meet snugly at each point — so the interior angle must divide $360^\\circ$ evenly. Checking the candidates: the equilateral triangle ($60^\\circ$, six meet), the square ($90^\\circ$, four meet), and the regular hexagon ($120^\\circ$, three meet) all work. The regular pentagon fails: $\\frac{360}{108}$ is not a whole number. For $n > 6$ the interior angle is bigger than $120^\\circ$ but less than $180^\\circ$, so it can never divide $360^\\circ$ — triangles, squares, and hexagons are the only three.',
      },
      {
        heading: 'Mixing polygons at a point',
        body: 'Different regular polygons can share a corner as long as the angles there total exactly $360^\\circ$. For example, two regular octagons and one square fit: $135^\\circ + 135^\\circ + 90^\\circ = 360^\\circ$ — look at any bathroom-tile pattern of octagons and small squares. Less than $360^\\circ$ leaves a gap; more forces an overlap.',
      },
      {
        heading: 'Star angle chases',
        body: 'A five-pointed star hides a beautiful fact: its five tip angles always total $180^\\circ$, no matter how lopsided the star. One slick proof: walk around the star\'s outline. You end up facing your starting direction after TWO full spins, so your turns total $720^\\circ$. At each tip you turn $180^\\circ$ minus the tip angle, so $5 \\cdot 180^\\circ - (\\text{tip sum}) = 720^\\circ$, which forces the tip sum to be $180^\\circ$.',
      },
      {
        heading: 'Combine your tools',
        body: 'The best polygon problems chain several facts together: an angle tells you $n$, then $n$ tells you the diagonal count or the perimeter, and the perimeter feeds an area formula. Slow down, extract $n$ first, and the rest usually falls into place one step at a time.',
      },
    ],
    examples: [
      {
        problem: 'Explain why copies of a regular pentagon cannot tile the plane.',
        steps: [
          'Each interior angle of a regular pentagon is $\\frac{(5-2) \\cdot 180^\\circ}{5} = 108^\\circ$.',
          'Fit pentagons around one point: three of them use up $3 \\cdot 108^\\circ = 324^\\circ$, leaving a skinny $36^\\circ$ gap — too narrow for another pentagon, as the figure shows.',
          'Four pentagons would need $432^\\circ > 360^\\circ$, an overlap. Since $108$ does not divide $360$ evenly, pentagons can never fit perfectly, so no tiling exists.',
        ],
        answer: 'Because $108^\\circ$ does not divide $360^\\circ$: three pentagons leave a $36^\\circ$ gap',
        fig: {
          view: [-3.5, -3, 4, 3.5],
          elems: [
            { t: 'seg', a: [0, 0], b: [3, 0] },
            { t: 'seg', a: [0, 0], b: [-0.93, 2.85] },
            { t: 'seg', a: [0, 0], b: [-2.43, -1.76] },
            { t: 'seg', a: [0, 0], b: [2.43, -1.76] },
            { t: 'angle', at: [0, 0], from: [3, 0], to: [-0.93, 2.85], r: 0.8, label: '108' },
            { t: 'angle', at: [0, 0], from: [-0.93, 2.85], to: [-2.43, -1.76], r: 0.9, label: '108' },
            { t: 'angle', at: [0, 0], from: [-2.43, -1.76], to: [2.43, -1.76], r: 1, label: '108' },
            { t: 'angle', at: [0, 0], from: [2.43, -1.76], to: [3, 0], r: 1.5, label: '36' },
          ],
        },
      },
      {
        problem: 'In the regular five-pointed star shown, find the measure of each tip angle.',
        steps: [
          'The five tip angles of any five-pointed star total $180^\\circ$ (walk around the outline: two full spins of turning, $720^\\circ$, equals $5 \\cdot 180^\\circ$ minus the tip sum).',
          'This star is regular, so the five tips are equal: each is $\\frac{180^\\circ}{5} = 36^\\circ$.',
        ],
        answer: 'Each tip angle is $36^\\circ$',
        fig: {
          view: [-4, -3.6, 4, 4],
          elems: [
            { t: 'seg', a: [0, 3], b: [-1.76, -2.43] },
            { t: 'seg', a: [-1.76, -2.43], b: [2.85, 0.93] },
            { t: 'seg', a: [2.85, 0.93], b: [-2.85, 0.93] },
            { t: 'seg', a: [-2.85, 0.93], b: [1.76, -2.43] },
            { t: 'seg', a: [1.76, -2.43], b: [0, 3] },
            { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -12 },
            { t: 'point', p: [-2.85, 0.93], label: 'B', dx: -12, dy: -6 },
            { t: 'point', p: [-1.76, -2.43], label: 'C', dx: -10, dy: 12 },
            { t: 'point', p: [1.76, -2.43], label: 'D', dx: 10, dy: 12 },
            { t: 'point', p: [2.85, 0.93], label: 'E', dx: 12, dy: -6 },
          ],
        },
      },
      {
        problem: 'Each interior angle of a regular polygon measures $150^\\circ$. How many diagonals does the polygon have?',
        steps: [
          'First find $n$ from the angle: the exterior angle is $180^\\circ - 150^\\circ = 30^\\circ$, so $n = \\frac{360^\\circ}{30^\\circ} = 12$.',
          'Now count diagonals with the formula: $\\frac{n(n-3)}{2} = \\frac{12 \\times 9}{2} = 54$.',
          'Two separate tools — the exterior-angle trick and the diagonal formula — chained together. That is the flavor of this whole section!',
        ],
        answer: '$54$ diagonals',
      },
    ],
  },
  problems: [
    {
      q: 'Copies of which ONE of these regular polygons can tile the plane with no gaps or overlaps?',
      choices: ['regular pentagon', 'regular hexagon', 'regular octagon', 'regular heptagon'],
      answer: 1,
      solution: 'The interior angle must divide $360^\\circ$. The hexagon\'s $120^\\circ$ works: $\\frac{360}{120} = 3$ hexagons meet at each point — that is the honeycomb! The pentagon ($108^\\circ$), octagon ($135^\\circ$), and heptagon ($\\approx 128.6^\\circ$) all fail to divide $360^\\circ$ evenly.',
    },
    {
      q: 'In the honeycomb tiling shown, how many regular hexagons meet at each point?',
      fig: {
        view: [-4.5, -4, 4.5, 5],
        elems: [
          { t: 'poly', pts: [[0, 0], [-1.73, 1], [-1.73, 3], [0, 4], [1.73, 3], [1.73, 1]], fill: false },
          { t: 'poly', pts: [[0, 0], [-1.73, 1], [-3.46, 0], [-3.46, -2], [-1.73, -3], [0, -2]], fill: false },
          { t: 'poly', pts: [[0, 0], [0, -2], [1.73, -3], [3.46, -2], [3.46, 0], [1.73, 1]], fill: false },
          { t: 'point', p: [0, 0], label: 'P', dx: 14, dy: 0 },
        ],
      },
      choices: ['$4$', '$6$', '$3$', '$2$'],
      answer: 2,
      solution: 'Each interior angle of a regular hexagon is $120^\\circ$, and the angles around point $P$ must total $360^\\circ$: $\\frac{360^\\circ}{120^\\circ} = 3$ hexagons. You can count them in the figure — bees figured this out long before we did.',
    },
    {
      q: 'Two regular octagons meet at a point in a tiling, as shown. A third regular polygon fills the remaining gap exactly. What is it?',
      fig: {
        view: [-3.5, -3, 5, 6],
        elems: [
          { t: 'poly', pts: [[-1, 0], [1, 0], [2.41, 1.41], [2.41, 3.41], [1, 4.83], [-1, 4.83], [-2.41, 3.41], [-2.41, 1.41]], fill: false },
          { t: 'poly', pts: [[-1, 0], [1, 0], [1, -2], [-1, -2]], fill: false },
          { t: 'angle', at: [1, 0], from: [2.41, 1.41], to: [-1, 0], r: 0.7, label: '135' },
          { t: 'angle', at: [1, 0], from: [-1, 0], to: [1, -2], r: 0.55, label: '90' },
          { t: 'label', p: [2.3, -0.9], text: '?', dx: 0, dy: 0 },
        ],
      },
      choices: ['an equilateral triangle', 'a regular hexagon', 'a regular pentagon', 'a square'],
      answer: 3,
      solution: 'Each octagon contributes an interior angle of $135^\\circ$, so two of them use $270^\\circ$. The gap is $360^\\circ - 270^\\circ = 90^\\circ$ — exactly one square\'s corner. This octagon-and-square pattern is a classic floor tiling.',
    },
    {
      q: 'A regular pentagon and a square have the same perimeter, $60$. What is the side length of the pentagon?',
      choices: ['$12$', '$15$', '$10$', '$20$'],
      answer: 0,
      solution: 'A regular pentagon has $5$ equal sides, so each is $\\frac{60}{5} = 12$. (The square\'s side would be $\\frac{60}{4} = 15$ — same perimeter, different side lengths because the side counts differ.)',
    },
    {
      q: 'The star shown is a regular five-pointed star. What is the measure of the tip angle at $A$?',
      fig: {
        view: [-4, -3.6, 4, 4],
        elems: [
          { t: 'seg', a: [0, 3], b: [-1.76, -2.43] },
          { t: 'seg', a: [-1.76, -2.43], b: [2.85, 0.93] },
          { t: 'seg', a: [2.85, 0.93], b: [-2.85, 0.93] },
          { t: 'seg', a: [-2.85, 0.93], b: [1.76, -2.43] },
          { t: 'seg', a: [1.76, -2.43], b: [0, 3] },
          { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -12 },
        ],
      },
      choices: ['$72^\\circ$', '$36^\\circ$', '$108^\\circ$', '$30^\\circ$'],
      answer: 1,
      solution: 'The five tip angles of any five-pointed star sum to $180^\\circ$, and in a regular star they are all equal: $\\frac{180^\\circ}{5} = 36^\\circ$. ($72^\\circ$ is the central angle $\\frac{360^\\circ}{5}$ — a natural guess, but the tips are only half that.)',
    },
    {
      q: 'Five of the six exterior angles of the convex hexagon shown measure $40^\\circ$, $60^\\circ$, $70^\\circ$, $50^\\circ$, and $80^\\circ$. What is the sixth exterior angle?',
      fig: {
        view: [-4.5, -4, 4.5, 4],
        elems: [
          { t: 'poly', pts: [[3, 0], [1.5, 2.6], [-1.5, 2.6], [-3, 0], [-1.5, -2.6], [1.5, -2.6]], fill: false },
          { t: 'label', p: [3, 0], text: '40', dx: 18, dy: 0 },
          { t: 'label', p: [1.5, 2.6], text: '60', dx: 14, dy: -10 },
          { t: 'label', p: [-1.5, 2.6], text: '70', dx: -14, dy: -10 },
          { t: 'label', p: [-3, 0], text: '50', dx: -18, dy: 0 },
          { t: 'label', p: [-1.5, -2.6], text: '80', dx: -14, dy: 12 },
          { t: 'label', p: [1.5, -2.6], text: '?', dx: 14, dy: 12 },
        ],
      },
      choices: ['$60^\\circ$', '$120^\\circ$', '$90^\\circ$', '$300^\\circ$'],
      answer: 0,
      solution: 'Exterior angles of any convex polygon total $360^\\circ$ — six sides or sixty, it makes no difference. The five known angles sum to $40 + 60 + 70 + 50 + 80 = 300$, so the sixth is $360^\\circ - 300^\\circ = 60^\\circ$.',
    },
    {
      q: 'Each interior angle of a regular polygon measures $144^\\circ$. How many diagonals does the polygon have?',
      choices: ['$44$', '$54$', '$35$', '$27$'],
      answer: 2,
      solution: 'Chain two tools. First, $n$: the exterior angle is $180^\\circ - 144^\\circ = 36^\\circ$, so $n = \\frac{360^\\circ}{36^\\circ} = 10$. Second, diagonals: $\\frac{10 \\times 7}{2} = 35$. ($54$ is the diagonal count of a $12$-gon — that is what you get if the angle were $150^\\circ$.)',
    },
    {
      q: 'A square and an equilateral triangle share vertex $P$, as shown, without overlapping. How many degrees of angle around $P$ remain uncovered?',
      fig: {
        view: [-4, -2.5, 4.5, 5],
        elems: [
          { t: 'poly', pts: [[0, 0], [1.5, 2.6], [-1.1, 4.1], [-2.6, 1.5]], fill: false },
          { t: 'poly', pts: [[0, 0], [3, 0], [1.5, 2.6]], fill: false },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 12 },
          { t: 'label', p: [0.5, -1.2], text: '?', dx: 0, dy: 0 },
        ],
      },
      choices: ['$150^\\circ$', '$120^\\circ$', '$90^\\circ$', '$210^\\circ$'],
      answer: 3,
      solution: 'The full angle around any point is $360^\\circ$. The square covers $90^\\circ$ at $P$ and the triangle covers $60^\\circ$, so $360^\\circ - 90^\\circ - 60^\\circ = 210^\\circ$ remains. ($150^\\circ$ is just $90 + 60$ — that is the covered part, not the leftover.)',
    },
    {
      q: 'A regular hexagon and an equilateral triangle have equal perimeters, as shown with hexagon side $2$ and triangle side $4$. What is the ratio of the hexagon\'s area to the triangle\'s area?',
      fig: {
        view: [-5.5, -2.5, 5.5, 2.5],
        elems: [
          { t: 'poly', pts: [[-1, 0], [-2, 1.73], [-4, 1.73], [-5, 0], [-4, -1.73], [-2, -1.73]], fill: false },
          { t: 'poly', pts: [[1, -1.73], [5, -1.73], [3, 1.73]], fill: false },
          { t: 'label', p: [-3, -1.73], text: '2', dx: 0, dy: 14 },
          { t: 'label', p: [3, -1.73], text: '4', dx: 0, dy: 14 },
        ],
      },
      choices: ['$2:1$', '$3:2$', '$1:1$', '$4:3$'],
      answer: 1,
      solution: 'Count in small equilateral triangles of side $2$. The hexagon is exactly $6$ of them. The big triangle of side $4$ is $4$ of them (doubling the side quadruples the area). So the ratio is $6:4 = 3:2$ — same perimeter, but the hexagon holds more area. Rounder shapes enclose more!',
    },
    {
      q: 'The interior angles of a convex polygon sum to $2520^\\circ$. How many diagonals does the polygon have?',
      choices: ['$104$', '$120$', '$91$', '$112$'],
      answer: 0,
      solution: 'Recover $n$ first: $(n-2) \\cdot 180 = 2520$ gives $n - 2 = 14$, so $n = 16$. Then apply the diagonal formula: $\\frac{16 \\times 13}{2} = 104$. Two clean steps — angle sum to $n$, then $n$ to diagonals.',
    },
  ],
}

const challenge = [
  {
    q: 'A convex polygon has exactly $65$ diagonals. How many sides does it have?',
    choices: ['$11$', '$13$', '$10$', '$15$'],
    answer: 1,
    solution: 'Solve $\\frac{n(n-3)}{2} = 65$, so $n(n-3) = 130$. Two numbers $3$ apart with product $130$: $13 \\times 10 = 130$. ✓ So $n = 13$. Since $n(n-3)$ only grows as $n$ grows, no other side count works.',
  },
  {
    q: 'What is the measure of each interior angle of a regular $20$-gon?',
    choices: ['$162^\\circ$', '$160^\\circ$', '$168^\\circ$', '$18^\\circ$'],
    answer: 0,
    solution: 'Fastest through the exterior angle: each is $\\frac{360^\\circ}{20} = 18^\\circ$, so each interior angle is $180^\\circ - 18^\\circ = 162^\\circ$. The formula agrees: $\\frac{18 \\cdot 180^\\circ}{20} = 162^\\circ$.',
  },
  {
    q: 'The interior angles of a convex polygon sum to $2340^\\circ$. How many diagonals does the polygon have?',
    choices: ['$105$', '$78$', '$90$', '$60$'],
    answer: 2,
    solution: 'From $(n-2) \\cdot 180 = 2340$ we get $n - 2 = 13$, so $n = 15$. Then the diagonal count is $\\frac{15 \\times 12}{2} = 90$. ($105 = \\frac{15 \\times 14}{2}$ counts all pairs of vertices, sides included.)',
  },
  {
    q: 'In a regular polygon, each interior angle is $5$ times the exterior angle at the same vertex. How many sides does the polygon have?',
    choices: ['$10$', '$15$', '$12$', '$6$'],
    answer: 2,
    solution: 'Interior and exterior angles are partners along a straight line: $e + 5e = 180^\\circ$, so $e = 30^\\circ$. Then $n = \\frac{360^\\circ}{30^\\circ} = 12$. Check: a regular dodecagon\'s interior angle is $150^\\circ = 5 \\times 30^\\circ$. ✓',
  },
  {
    q: 'What is the area of a regular hexagon with side length $8$?',
    choices: ['$48\\sqrt{3}$', '$96\\sqrt{3}$', '$192\\sqrt{3}$', '$64\\sqrt{3}$'],
    answer: 1,
    solution: 'Six equilateral triangles of side $8$: each has area $\\frac{\\sqrt{3}}{4} \\cdot 64 = 16\\sqrt{3}$, so the hexagon has $6 \\cdot 16\\sqrt{3} = 96\\sqrt{3}$. Equivalently, $\\frac{3\\sqrt{3}}{2} \\cdot 8^2 = 96\\sqrt{3}$.',
  },
  {
    q: 'Each corner of a square with side $12$ is cut off along a right triangle with legs of length $3$, as shown. What is the area of the resulting octagon?',
    fig: {
      view: [-1, -1, 13, 13],
      elems: [
        { t: 'poly', pts: [[3, 0], [9, 0], [12, 3], [12, 9], [9, 12], [3, 12], [0, 9], [0, 3]], fill: false },
        { t: 'seg', a: [0, 0], b: [3, 0], dash: true },
        { t: 'seg', a: [0, 0], b: [0, 3], dash: true },
        { t: 'seg', a: [12, 0], b: [9, 0], dash: true },
        { t: 'seg', a: [12, 0], b: [12, 3], dash: true },
        { t: 'seg', a: [12, 12], b: [9, 12], dash: true },
        { t: 'seg', a: [12, 12], b: [12, 9], dash: true },
        { t: 'seg', a: [0, 12], b: [3, 12], dash: true },
        { t: 'seg', a: [0, 12], b: [0, 9], dash: true },
        { t: 'label', p: [1.5, 0], text: '3', dx: 0, dy: 14 },
        { t: 'label', p: [0, 1.5], text: '3', dx: -12, dy: 0 },
        { t: 'label', p: [6, 12], text: '12', dx: 0, dy: -10 },
      ],
    },
    choices: ['$126$', '$108$', '$135$', '$120$'],
    answer: 0,
    solution: 'Subtract the corners from the square: $12^2 = 144$, and each corner triangle has area $\\frac{1}{2} \\cdot 3 \\cdot 3 = 4.5$. The four corners remove $4 \\times 4.5 = 18$, leaving $144 - 18 = 126$. ($108$ subtracts $4 \\times 9 = 36$, forgetting the $\\frac{1}{2}$ in the triangle area.)',
  },
  {
    q: 'The five tip angles of the (not necessarily regular) five-pointed star shown are added together. What is their sum?',
    fig: {
      view: [-4, -3.6, 4, 4],
      elems: [
        { t: 'seg', a: [0, 3], b: [-1.76, -2.43] },
        { t: 'seg', a: [-1.76, -2.43], b: [2.85, 0.93] },
        { t: 'seg', a: [2.85, 0.93], b: [-2.85, 0.93] },
        { t: 'seg', a: [-2.85, 0.93], b: [1.76, -2.43] },
        { t: 'seg', a: [1.76, -2.43], b: [0, 3] },
      ],
    },
    choices: ['$360^\\circ$', '$540^\\circ$', '$180^\\circ$', '$900^\\circ$'],
    answer: 2,
    solution: 'Walk once around the star\'s outline. You return facing your starting direction after exactly TWO full spins, so your turning totals $720^\\circ$. At each of the $5$ tips you turn $180^\\circ$ minus the tip angle, so $5 \\cdot 180^\\circ - (\\text{tip sum}) = 720^\\circ$, which gives a tip sum of $900^\\circ - 720^\\circ = 180^\\circ$ — for EVERY five-pointed star, lopsided or not.',
  },
  {
    q: 'Each interior angle of a regular polygon measures $160^\\circ$. How many sides does the polygon have?',
    choices: ['$16$', '$18$', '$20$', '$24$'],
    answer: 1,
    solution: 'The exterior angle is $180^\\circ - 160^\\circ = 20^\\circ$, and all $n$ of them must total $360^\\circ$: $n = \\frac{360^\\circ}{20^\\circ} = 18$.',
  },
  {
    q: 'The interior angles of the pentagon shown measure $2x^\\circ$, $3x^\\circ$, $4x^\\circ$, $5x^\\circ$, and $6x^\\circ$. What is the measure of the largest angle?',
    fig: {
      view: [-2.5, -1, 9, 7.5],
      elems: [
        { t: 'poly', pts: [[0, 0], [6, 0], [7.5, 4], [3, 6.5], [-1.5, 4]], fill: false },
        { t: 'label', p: [0, 0], text: '2x', dx: 16, dy: -10 },
        { t: 'label', p: [6, 0], text: '3x', dx: -16, dy: -10 },
        { t: 'label', p: [7.5, 4], text: '4x', dx: -18, dy: 4 },
        { t: 'label', p: [3, 6.5], text: '5x', dx: 0, dy: 18 },
        { t: 'label', p: [-1.5, 4], text: '6x', dx: 18, dy: 4 },
      ],
    },
    choices: ['$27^\\circ$', '$135^\\circ$', '$162^\\circ$', '$150^\\circ$'],
    answer: 2,
    solution: 'A pentagon\'s angles total $540^\\circ$, so $2x + 3x + 4x + 5x + 6x = 20x = 540$ and $x = 27$. The largest angle is $6x = 162^\\circ$. (Stopping at $x = 27^\\circ$ answers a different question!)',
  },
  {
    q: 'A convex polygon has exactly three times as many diagonals as sides. How many sides does it have?',
    choices: ['$12$', '$6$', '$8$', '$9$'],
    answer: 3,
    solution: 'Set up $\\frac{n(n-3)}{2} = 3n$. Doubling gives $n(n-3) = 6n$, and dividing by $n$ leaves $n - 3 = 6$, so $n = 9$. Check: a nonagon has $\\frac{9 \\times 6}{2} = 27$ diagonals, and $27 = 3 \\times 9$. ✓',
  },
  {
    q: 'Two regular dodecagons meet at a point in a tiling. A third regular polygon fills the remaining gap exactly. What is it?',
    choices: ['a square', 'an equilateral triangle', 'a regular pentagon', 'a regular hexagon'],
    answer: 1,
    solution: 'Each interior angle of a regular dodecagon is $180^\\circ - \\frac{360^\\circ}{12} = 150^\\circ$. Two of them cover $300^\\circ$, leaving $360^\\circ - 300^\\circ = 60^\\circ$ — exactly an equilateral triangle\'s corner. This triangle-and-dodecagon pattern really tiles the plane!',
  },
  {
    q: 'An equilateral triangle with side $4$ is attached to one side of a regular hexagon with side $4$, as shown, forming a single polygon. What is the total area?',
    fig: {
      view: [-5, -4.5, 7.5, 4.5],
      elems: [
        { t: 'poly', pts: [[4, 0], [2, 3.46], [-2, 3.46], [-4, 0], [-2, -3.46], [2, -3.46]], fill: false },
        { t: 'poly', pts: [[4, 0], [2, 3.46], [6, 3.46]], fill: false },
        { t: 'label', p: [0, -3.46], text: '4', dx: 0, dy: 14 },
      ],
    },
    choices: ['$24\\sqrt{3}$', '$32\\sqrt{3}$', '$30\\sqrt{3}$', '$28\\sqrt{3}$'],
    answer: 3,
    solution: 'The hexagon is six equilateral triangles of side $4$, and attaching one more makes seven. Each has area $\\frac{\\sqrt{3}}{4} \\cdot 16 = 4\\sqrt{3}$, so the total is $7 \\cdot 4\\sqrt{3} = 28\\sqrt{3}$. Seeing the hexagon as six triangles turns this into simple counting.',
  },
]

const worksheet = [
  {
    q: 'How many diagonals does a nonagon have?',
    answer: '$27$',
    solution: 'Use $\\frac{n(n-3)}{2}$ with $n = 9$: each of the $9$ vertices sends diagonals to $9 - 3 = 6$ others, and dividing by $2$ fixes the double count: $\\frac{9 \\times 6}{2} = 27$.',
  },
  {
    q: 'The octagon shown is split into triangles by the diagonals from one vertex. Use the triangles to find the sum of the interior angles of an octagon.',
    fig: {
      view: [-4, -4, 4, 4],
      elems: [
        { t: 'poly', pts: [[2.77, 1.15], [1.15, 2.77], [-1.15, 2.77], [-2.77, 1.15], [-2.77, -1.15], [-1.15, -2.77], [1.15, -2.77], [2.77, -1.15]], fill: false },
        { t: 'seg', a: [2.77, 1.15], b: [-1.15, 2.77], dash: true },
        { t: 'seg', a: [2.77, 1.15], b: [-2.77, 1.15], dash: true },
        { t: 'seg', a: [2.77, 1.15], b: [-2.77, -1.15], dash: true },
        { t: 'seg', a: [2.77, 1.15], b: [-1.15, -2.77], dash: true },
        { t: 'seg', a: [2.77, 1.15], b: [1.15, -2.77], dash: true },
      ],
    },
    answer: '$1080^\\circ$',
    solution: 'The $5$ diagonals from one vertex cut the octagon into $8 - 2 = 6$ triangles, and the triangle angles exactly fill the octagon\'s angles. So the sum is $6 \\cdot 180^\\circ = 1080^\\circ$.',
  },
  {
    q: 'For a regular decagon, find (a) the measure of each interior angle and (b) the measure of each exterior angle.',
    answer: '(a) $144^\\circ$, (b) $36^\\circ$',
    solution: 'Exterior first: the ten equal exterior angles share $360^\\circ$, so each is $\\frac{360^\\circ}{10} = 36^\\circ$. Interior and exterior are partners on a straight line, so each interior angle is $180^\\circ - 36^\\circ = 144^\\circ$. (Check with the formula: $\\frac{8 \\cdot 180^\\circ}{10} = 144^\\circ$. ✓)',
  },
  {
    q: 'Find the area of a regular hexagon with side length $10$.',
    answer: '$150\\sqrt{3}$',
    solution: 'Split the hexagon into $6$ equilateral triangles of side $10$; each has area $\\frac{\\sqrt{3}}{4} \\cdot 100 = 25\\sqrt{3}$, so the hexagon has $6 \\cdot 25\\sqrt{3} = 150\\sqrt{3}$. This is the formula $\\frac{3\\sqrt{3}}{2}s^2$ in action.',
  },
  {
    q: 'A convex polygon has exactly $44$ diagonals. How many sides does it have?',
    answer: '$11$',
    solution: 'From $\\frac{n(n-3)}{2} = 44$ we get $n(n-3) = 88$. We need two numbers $3$ apart with product $88$: $11 \\times 8 = 88$. ✓ So $n = 11$.',
  },
  {
    q: 'Three angles of the quadrilateral shown measure $85^\\circ$, $95^\\circ$, and $110^\\circ$. Find the fourth angle.',
    fig: {
      view: [-1.5, -1, 8, 6.5],
      elems: [
        { t: 'poly', pts: [[0, 0], [6, 0], [7, 4], [2, 5.5]], fill: false },
        { t: 'label', p: [0, 0], text: '85', dx: 16, dy: -10 },
        { t: 'label', p: [6, 0], text: '95', dx: -16, dy: -10 },
        { t: 'label', p: [7, 4], text: '110', dx: -20, dy: 6 },
        { t: 'label', p: [2, 5.5], text: '?', dx: 4, dy: 18 },
      ],
    },
    answer: '$70^\\circ$',
    solution: 'A quadrilateral\'s interior angles total $(4-2) \\cdot 180^\\circ = 360^\\circ$. The three known angles sum to $85 + 95 + 110 = 290$, so the fourth is $360^\\circ - 290^\\circ = 70^\\circ$.',
  },
  {
    q: 'Each interior angle of a regular polygon measures $165^\\circ$. How many sides does the polygon have?',
    answer: '$24$',
    solution: 'The exterior angle at each vertex is $180^\\circ - 165^\\circ = 15^\\circ$. The exterior angles of a convex polygon always total $360^\\circ$, so $n = \\frac{360^\\circ}{15^\\circ} = 24$. Going through the exterior angle beats solving $\\frac{(n-2) \\cdot 180}{n} = 165$ directly — though that works too!',
  },
  {
    q: 'Each corner of a square with side $8$ is cut off along a right triangle with legs of length $2$, as shown. Find the area of the resulting octagon.',
    fig: {
      view: [-1, -1, 9, 9],
      elems: [
        { t: 'poly', pts: [[2, 0], [6, 0], [8, 2], [8, 6], [6, 8], [2, 8], [0, 6], [0, 2]], fill: false },
        { t: 'seg', a: [0, 0], b: [2, 0], dash: true },
        { t: 'seg', a: [0, 0], b: [0, 2], dash: true },
        { t: 'seg', a: [8, 0], b: [6, 0], dash: true },
        { t: 'seg', a: [8, 0], b: [8, 2], dash: true },
        { t: 'seg', a: [8, 8], b: [6, 8], dash: true },
        { t: 'seg', a: [8, 8], b: [8, 6], dash: true },
        { t: 'seg', a: [0, 8], b: [2, 8], dash: true },
        { t: 'seg', a: [0, 8], b: [0, 6], dash: true },
        { t: 'label', p: [1, 0], text: '2', dx: 0, dy: 14 },
        { t: 'label', p: [0, 1], text: '2', dx: -12, dy: 0 },
        { t: 'label', p: [4, 8], text: '8', dx: 0, dy: -10 },
      ],
    },
    answer: '$56$',
    solution: 'Subtract the cut corners from the square: the square has area $8^2 = 64$, and each corner triangle has area $\\frac{1}{2} \\cdot 2 \\cdot 2 = 2$. Removing all four takes away $8$, so the octagon has area $64 - 8 = 56$.',
  },
  {
    q: 'A regular hexagon has side length $12$. Find (a) its apothem and (b) its area, using the apothem.',
    fig: {
      view: [-4, -3.6, 4, 3.6],
      elems: [
        { t: 'poly', pts: [[3, 0], [1.5, 2.6], [-1.5, 2.6], [-3, 0], [-1.5, -2.6], [1.5, -2.6]], fill: false },
        { t: 'seg', a: [0, 0], b: [0, -2.6], dash: true },
        { t: 'right', at: [0, -2.6], from: [1.5, -2.6], to: [0, 0] },
        { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: -10 },
        { t: 'label', p: [0, -1.3], text: 'a', dx: -10, dy: 0 },
        { t: 'label', p: [0, -2.6], text: '12', dx: 30, dy: 14 },
      ],
    },
    answer: '(a) $6\\sqrt{3}$, (b) $216\\sqrt{3}$',
    solution: 'The apothem is the height of one of the six equilateral triangles of side $12$: it splits the triangle into two right triangles with legs $6$ and $a$ and hypotenuse $12$, so $a = \\sqrt{144 - 36} = \\sqrt{108} = 6\\sqrt{3}$. Then $[\\text{hexagon}] = \\frac{1}{2} a P = \\frac{1}{2} \\cdot 6\\sqrt{3} \\cdot 72 = 216\\sqrt{3}$. (The direct formula $\\frac{3\\sqrt{3}}{2} \\cdot 144$ agrees. ✓)',
  },
  {
    q: 'The interior angles of a convex polygon add up to exactly $5$ times the sum of its exterior angles. How many sides does the polygon have?',
    answer: '$12$',
    solution: 'The exterior angles of any convex polygon total $360^\\circ$, so the interior angles must total $5 \\cdot 360^\\circ = 1800^\\circ$. Then $(n-2) \\cdot 180 = 1800$ gives $n - 2 = 10$, so $n = 12$. A regular or irregular dodecagon — the angle sums do not care which!',
  },
]

export default {
  id: 'intro-geometry-ch09',
  book: 'intro-geometry',
  number: 9,
  title: 'Polygons',
  intro:
    'Triangles and quadrilaterals are just the beginning — now we open the door to polygons with any number of sides. In this chapter you will learn to count their diagonals, tame their angles with two powerful sum formulas, and slice them into triangles to find their areas. By the end, a shape with sixteen sides will feel no scarier than one with three.',
  sections: [s91, s92, s93, s94],
  challenge,
  worksheet,
}
