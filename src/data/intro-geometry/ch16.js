// Introduction to Geometry — Chapter 16: The More Things Change...
// All problems, explanations, and examples are original MathQuest content.

const s161 = {
  id: '16.1',
  title: 'Translations',
  learn: {
    concepts: [
      {
        heading: 'Sliding without turning',
        body: 'A translation slides every point of a figure the same distance in the same direction — no turning, no flipping, no resizing. Imagine pushing a book across a table: it ends up somewhere new, but it is still the same book, facing the same way.',
      },
      {
        heading: 'The coordinate rule',
        body: 'On the coordinate plane, a translation has a wonderfully simple rule: $(x, y) \\to (x + a, y + b)$ slides every point $a$ units horizontally and $b$ units vertically. Positive $a$ moves right, negative $a$ moves left; positive $b$ moves up, negative $b$ moves down.',
      },
      {
        heading: 'Reading the rule from before and after',
        body: 'Given a point and its image, subtract to find the translation: if $P(1, 5)$ lands on $P\'(4, 3)$, then the slide is $4 - 1 = 3$ right and $3 - 5 = -2$, so the rule is $(x, y) \\to (x + 3, y - 2)$. Every other point of the figure moves by that exact same amount.',
      },
      {
        heading: 'What translations preserve — and how they combine',
        body: 'A translation keeps size, shape, AND orientation: the image is congruent to the original and faces the same way. Two translations in a row are just one bigger translation — the slides add. Following $(x + 2, y + 1)$ with $(x + 3, y - 5)$ gives $(x + 5, y - 4)$.',
      },
    ],
    examples: [
      {
        problem: 'Triangle $ABC$ has vertices $A(1, 1)$, $B(4, 1)$, and $C(1, 3)$. Find the image after the translation $(x, y) \\to (x + 3, y + 2)$.',
        steps: [
          'Apply the rule to each vertex separately — every point takes the same trip: $3$ right and $2$ up.',
          '$A(1, 1) \\to A\'(4, 3)$, $B(4, 1) \\to B\'(7, 3)$, and $C(1, 3) \\to C\'(4, 5)$.',
          'The image triangle is congruent to the original and faces the same way — a translation never turns or flips anything.',
        ],
        answer: '$A\'(4, 3)$, $B\'(7, 3)$, $C\'(4, 5)$',
        fig: {
          view: [-1, -1, 9, 7],
          grid: true,
          elems: [
            { t: 'poly', pts: [[1, 1], [4, 1], [1, 3]] },
            { t: 'poly', pts: [[4, 3], [7, 3], [4, 5]] },
            { t: 'seg', a: [1, 1], b: [4, 3], dash: true },
            { t: 'point', p: [1, 1], label: 'A', dx: -10, dy: 12 },
            { t: 'point', p: [4, 1], label: 'B', dx: 10, dy: 12 },
            { t: 'point', p: [1, 3], label: 'C', dx: -10, dy: -6 },
            { t: 'point', p: [4, 3], label: "A'", dx: -12, dy: -6 },
            { t: 'point', p: [7, 3], label: "B'", dx: 12, dy: 4 },
            { t: 'point', p: [4, 5], label: "C'", dx: 0, dy: -10 },
          ],
        },
      },
      {
        problem: 'A translation sends $P(-3, 2)$ to $P\'(1, -1)$. What is the coordinate rule?',
        steps: [
          'Compare the coordinates. Horizontally: from $-3$ to $1$ is a change of $1 - (-3) = 4$, so the slide is $4$ units right.',
          'Vertically: from $2$ to $-1$ is a change of $-1 - 2 = -3$, so the slide is $3$ units down.',
          'So the rule is $(x, y) \\to (x + 4, y - 3)$. Check with $P$: $(-3 + 4, 2 - 3) = (1, -1)$. ✓',
        ],
        answer: '$(x, y) \\to (x + 4, y - 3)$',
        fig: {
          view: [-5, -3, 3, 4],
          grid: true,
          elems: [
            { t: 'seg', a: [-3, 2], b: [1, -1], dash: true },
            { t: 'point', p: [-3, 2], label: 'P', dx: -10, dy: -6 },
            { t: 'point', p: [1, -1], label: "P'", dx: 12, dy: 4 },
          ],
        },
      },
      {
        problem: 'A robot first slides by $(x, y) \\to (x + 2, y - 5)$, then by $(x, y) \\to (x - 6, y + 1)$. What single translation does the same job?',
        steps: [
          'Translations combine by adding their slides. Horizontally: $+2$ then $-6$ makes $-4$ in total.',
          'Vertically: $-5$ then $+1$ makes $-4$ in total.',
          'So one slide of $4$ left and $4$ down does everything both moves did: $(x, y) \\to (x - 4, y - 4)$.',
        ],
        answer: '$(x, y) \\to (x - 4, y - 4)$',
      },
    ],
  },
  problems: [
    {
      q: 'What is the image of the point $(2, 3)$ under the translation $(x, y) \\to (x + 4, y - 1)$?',
      fig: {
        view: [-1, -1, 7, 4],
        grid: true,
        elems: [
          { t: 'point', p: [2, 3], label: 'P', dx: 0, dy: -10 },
        ],
      },
      choices: ['$(-2, 4)$', '$(6, 4)$', '$(6, 2)$', '$(1, 7)$'],
      answer: 2,
      solution: 'Add $4$ to the $x$-coordinate and subtract $1$ from the $y$-coordinate: $(2 + 4, 3 - 1) = (6, 2)$. Careful with $(-2, 4)$ — that reverses both signs of the slide, and $(6, 4)$ adds $1$ instead of subtracting.',
    },
    {
      q: 'Which rule translates every point $5$ units left and $2$ units up?',
      choices: ['$(x, y) \\to (x - 5, y + 2)$', '$(x, y) \\to (x + 5, y - 2)$', '$(x, y) \\to (x + 2, y - 5)$', '$(x, y) \\to (x - 2, y + 5)$'],
      answer: 0,
      solution: 'Left means the $x$-coordinate shrinks, so we subtract $5$; up means the $y$-coordinate grows, so we add $2$. That is $(x, y) \\to (x - 5, y + 2)$. The rule $(x + 5, y - 2)$ goes right and down — the exact opposite trip.',
    },
    {
      q: 'The triangle with vertices $(0, 0)$, $(2, 0)$, $(0, 2)$ is translated to the triangle with vertices $(4, 1)$, $(6, 1)$, $(4, 3)$. Which rule was used?',
      fig: {
        view: [-1, -1, 7, 4],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [2, 0], [0, 2]] },
          { t: 'poly', pts: [[4, 1], [6, 1], [4, 3]] },
          { t: 'seg', a: [0, 0], b: [4, 1], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [4, 1], label: "A'", dx: 0, dy: 14 },
        ],
      },
      choices: ['$(x, y) \\to (x + 1, y + 4)$', '$(x, y) \\to (x + 4, y + 1)$', '$(x, y) \\to (x - 4, y - 1)$', '$(x, y) \\to (x + 4, y - 1)$'],
      answer: 1,
      solution: 'Track one matching pair of points: $(0, 0)$ lands on $(4, 1)$, which is $4$ right and $1$ up, so the rule is $(x, y) \\to (x + 4, y + 1)$. Check another pair to be sure: $(2, 0) \\to (6, 1)$. ✓ The rule $(x + 1, y + 4)$ swaps the two slides.',
    },
    {
      q: 'The translation $(x, y) \\to (x + 3, y - 4)$ sends point $A$ to $A\'(5, -2)$. What was $A$?',
      fig: {
        view: [-1, -4, 7, 3],
        grid: true,
        elems: [
          { t: 'point', p: [5, -2], label: "A'", dx: 12, dy: 0 },
        ],
      },
      choices: ['$(8, -6)$', '$(8, 2)$', '$(2, -6)$', '$(2, 2)$'],
      answer: 3,
      solution: 'To go backwards, undo the slide: subtract $3$ from $x$ and add $4$ to $y$. So $A = (5 - 3, -2 + 4) = (2, 2)$. Check forwards: $(2 + 3, 2 - 4) = (5, -2)$. ✓ Choosing $(8, -6)$ applies the rule forward a second time instead of undoing it.',
    },
    {
      q: 'The segment with endpoints $(1, 2)$ and $(5, 4)$ is translated by $(x, y) \\to (x - 2, y + 3)$. What is the image of the endpoint $(5, 4)$?',
      fig: {
        view: [-2, -1, 6, 5],
        grid: true,
        elems: [
          { t: 'seg', a: [1, 2], b: [5, 4] },
          { t: 'point', p: [1, 2], label: 'P', dx: -10, dy: 12 },
          { t: 'point', p: [5, 4], label: 'Q', dx: 10, dy: 0 },
        ],
      },
      choices: ['$(3, 7)$', '$(7, 1)$', '$(3, 1)$', '$(7, 7)$'],
      answer: 0,
      solution: 'Each endpoint travels on its own: $(5 - 2, 4 + 3) = (3, 7)$. The choice $(7, 1)$ slides right and down — the reverse of this rule — and $(3, 1)$ subtracts $3$ instead of adding it.',
    },
    {
      q: 'A point is translated by $(x, y) \\to (x + 3, y + 1)$ and then by $(x, y) \\to (x - 1, y + 4)$. Which single translation has the same effect?',
      choices: ['$(x, y) \\to (x + 4, y + 5)$', '$(x, y) \\to (x + 2, y - 3)$', '$(x, y) \\to (x + 2, y + 5)$', '$(x, y) \\to (x - 2, y - 5)$'],
      answer: 2,
      solution: 'Slides add. Horizontally: $+3$ then $-1$ gives $+2$. Vertically: $+1$ then $+4$ gives $+5$. So one translation $(x, y) \\to (x + 2, y + 5)$ does it all. The choice $(x + 4, y + 5)$ forgets that the $-1$ cancels part of the $+3$.',
    },
    {
      q: 'A rectangle has vertices $(1, 1)$, $(4, 1)$, $(4, 3)$, and $(1, 3)$. A translation sends the corner $(1, 1)$ to $(-2, 2)$. Where does the corner $(4, 3)$ land?',
      fig: {
        view: [-4, -1, 6, 5],
        grid: true,
        elems: [
          { t: 'poly', pts: [[1, 1], [4, 1], [4, 3], [1, 3]] },
          { t: 'seg', a: [1, 1], b: [-2, 2], dash: true },
          { t: 'point', p: [1, 1], label: 'A', dx: 8, dy: 14 },
          { t: 'point', p: [4, 3], label: 'B', dx: 10, dy: -6 },
          { t: 'point', p: [-2, 2], label: "A'", dx: -12, dy: -6 },
        ],
      },
      choices: ['$(7, 2)$', '$(1, 4)$', '$(1, 2)$', '$(4, 4)$'],
      answer: 1,
      solution: 'From $(1, 1)$ to $(-2, 2)$ is $3$ left and $1$ up, so the rule is $(x, y) \\to (x - 3, y + 1)$. Apply it to $(4, 3)$: $(4 - 3, 3 + 1) = (1, 4)$. Every corner of the rectangle makes the identical trip — that is what makes it a translation.',
    },
    {
      q: 'Which properties does a translation always preserve?',
      choices: ['shape but not size', 'orientation but not size', 'size and shape but not orientation', 'size, shape, and orientation'],
      answer: 3,
      solution: 'A translation is a pure slide: nothing turns, flips, or stretches. So the image has the same size, the same shape, and the same orientation as the original — it is a congruent copy facing the same way. (Reflections are the ones that reverse orientation, and dilations are the ones that change size.)',
    },
    {
      q: 'A translation sends $A(2, -1)$ to $A\'(-3, 1)$. Where does it send $B(4, 4)$?',
      fig: {
        view: [-5, -2, 6, 6],
        grid: true,
        elems: [
          { t: 'seg', a: [2, -1], b: [-3, 1], dash: true },
          { t: 'point', p: [2, -1], label: 'A', dx: 10, dy: 12 },
          { t: 'point', p: [-3, 1], label: "A'", dx: -12, dy: -6 },
          { t: 'point', p: [4, 4], label: 'B', dx: 10, dy: 0 },
        ],
      },
      choices: ['$(-1, 6)$', '$(-1, 2)$', '$(9, 2)$', '$(6, -1)$'],
      answer: 0,
      solution: 'First read the slide from $A$: horizontally $-3 - 2 = -5$, vertically $1 - (-1) = 2$, so the rule is $(x, y) \\to (x - 5, y + 2)$. Now apply it to $B$: $(4 - 5, 4 + 2) = (-1, 6)$. The choice $(9, 2)$ runs the slide backwards.',
    },
    {
      q: 'A translation $T$ moves $(0, 0)$ to $(3, 4)$. If you apply $T$ three times in a row to the point $(1, -2)$, where does it end up?',
      choices: ['$(4, 2)$', '$(7, 6)$', '$(10, 10)$', '$(9, 12)$'],
      answer: 2,
      solution: 'One application of $T$ slides by $(3, 4)$, so three applications slide by $(9, 12)$ in total. Starting from $(1, -2)$: $(1 + 9, -2 + 12) = (10, 10)$. The choice $(9, 12)$ is the total slide itself but forgets the starting point, and $(4, 2)$ stops after just one application.',
    },
  ],
}

const s162 = {
  id: '16.2',
  title: 'Rotations',
  learn: {
    concepts: [
      {
        heading: 'Spinning around a point',
        body: 'A rotation spins a figure around a fixed point called the center of rotation, through a given angle. The center itself does not move — everything else travels along a circle around it. In this book (and almost everywhere in math), a rotation angle is measured counterclockwise unless we say otherwise.',
      },
      {
        heading: 'Rules for rotating about the origin',
        body: 'Rotating counterclockwise about the origin has three rules worth knowing by heart: $90^\\circ$ sends $(x, y) \\to (-y, x)$; $180^\\circ$ sends $(x, y) \\to (-x, -y)$; and $270^\\circ$ sends $(x, y) \\to (y, -x)$. A $270^\\circ$ counterclockwise turn is the same as a $90^\\circ$ clockwise turn — going three quarters one way equals one quarter the other way.',
      },
      {
        heading: 'Rotational symmetry',
        body: 'A figure has rotational symmetry if some rotation of less than $360^\\circ$ maps it exactly onto itself. A regular polygon with $n$ sides has rotational symmetry of order $n$: the smallest turn that works is $\\frac{360^\\circ}{n}$. A square repeats every $90^\\circ$, a regular hexagon every $60^\\circ$.',
      },
      {
        heading: 'What rotations preserve',
        body: 'Rotations preserve size, shape, and orientation — the image is congruent to the original and, if you trace its vertices in order, they still go around the same way (counterclockwise stays counterclockwise). The only point that stays put is the center of rotation.',
      },
    ],
    examples: [
      {
        problem: 'Rotate the point $P(3, 1)$ by $90^\\circ$ counterclockwise about the origin.',
        steps: [
          'The $90^\\circ$ counterclockwise rule is $(x, y) \\to (-y, x)$: the coordinates swap, and the new first coordinate flips sign.',
          'So $P(3, 1) \\to P\'(-1, 3)$.',
          'Sanity check: $P$ was in Quadrant I, and a quarter-turn counterclockwise should land in Quadrant II — and $(-1, 3)$ is indeed in Quadrant II. Both points are the same distance $\\sqrt{10}$ from the origin. ✓',
        ],
        answer: '$P\'(-1, 3)$',
        fig: {
          view: [-3, -1, 4, 4],
          grid: true,
          elems: [
            { t: 'seg', a: [0, 0], b: [3, 1], dash: true },
            { t: 'seg', a: [0, 0], b: [-1, 3], dash: true },
            { t: 'arc', c: [0, 0], r: 1.4, from: 18, to: 108 },
            { t: 'point', p: [3, 1], label: 'P', dx: 12, dy: 0 },
            { t: 'point', p: [-1, 3], label: "P'", dx: -10, dy: -6 },
          ],
        },
      },
      {
        problem: 'Triangle $ABC$ has vertices $A(1, 0)$, $B(3, 1)$, $C(1, 2)$. Find its image after a $180^\\circ$ rotation about the origin.',
        steps: [
          'The $180^\\circ$ rule is the friendliest of all: $(x, y) \\to (-x, -y)$ — just flip both signs.',
          '$A(1, 0) \\to A\'(-1, 0)$, $B(3, 1) \\to B\'(-3, -1)$, $C(1, 2) \\to C\'(-1, -2)$.',
          'Each image point is directly opposite its original through the origin, at the same distance — the origin is the midpoint of every point-image pair.',
        ],
        answer: '$A\'(-1, 0)$, $B\'(-3, -1)$, $C\'(-1, -2)$',
        fig: {
          view: [-4, -3, 4, 3],
          grid: true,
          elems: [
            { t: 'poly', pts: [[1, 0], [3, 1], [1, 2]] },
            { t: 'poly', pts: [[-1, 0], [-3, -1], [-1, -2]] },
            { t: 'seg', a: [3, 1], b: [-3, -1], dash: true },
            { t: 'point', p: [1, 0], label: 'A', dx: 8, dy: 14 },
            { t: 'point', p: [3, 1], label: 'B', dx: 12, dy: 0 },
            { t: 'point', p: [1, 2], label: 'C', dx: 0, dy: -10 },
            { t: 'point', p: [-1, 0], label: "A'", dx: -10, dy: -8 },
            { t: 'point', p: [-3, -1], label: "B'", dx: -12, dy: 0 },
            { t: 'point', p: [-1, -2], label: "C'", dx: 4, dy: 16 },
          ],
        },
      },
      {
        problem: 'What is the smallest positive rotation that maps a regular pentagon onto itself, and what is its order of rotational symmetry?',
        steps: [
          'A regular pentagon has $5$ identical sides arranged evenly around its center, so turning by one "slot" maps it onto itself.',
          'One slot is $\\frac{360^\\circ}{5} = 72^\\circ$.',
          'The rotations that work are $72^\\circ, 144^\\circ, 216^\\circ, 288^\\circ$, and $360^\\circ$ — five in all, so the order of rotational symmetry is $5$.',
        ],
        answer: 'Smallest rotation $72^\\circ$; order $5$',
      },
    ],
  },
  problems: [
    {
      q: 'What is the image of $(2, 5)$ after a $90^\\circ$ counterclockwise rotation about the origin?',
      fig: {
        view: [-6, -1, 4, 6],
        grid: true,
        elems: [
          { t: 'seg', a: [0, 0], b: [2, 5], dash: true },
          { t: 'point', p: [2, 5], label: 'P', dx: 12, dy: 0 },
        ],
      },
      choices: ['$(5, -2)$', '$(-5, 2)$', '$(-2, -5)$', '$(5, 2)$'],
      answer: 1,
      solution: 'Use the $90^\\circ$ counterclockwise rule $(x, y) \\to (-y, x)$: the image is $(-5, 2)$. Sanity check: a quarter-turn counterclockwise carries Quadrant I to Quadrant II, and $(-5, 2)$ is in Quadrant II. ✓ The choice $(5, -2)$ is the clockwise quarter-turn instead.',
    },
    {
      q: 'What is the image of $(-3, 4)$ after a $180^\\circ$ rotation about the origin?',
      fig: {
        view: [-5, -5, 5, 5],
        grid: true,
        elems: [
          { t: 'seg', a: [0, 0], b: [-3, 4], dash: true },
          { t: 'point', p: [-3, 4], label: 'P', dx: -10, dy: -6 },
        ],
      },
      choices: ['$(-3, -4)$', '$(3, 4)$', '$(-4, 3)$', '$(3, -4)$'],
      answer: 3,
      solution: 'A $180^\\circ$ rotation flips both signs: $(x, y) \\to (-x, -y)$, so $(-3, 4) \\to (3, -4)$. Careful with $(-3, -4)$ and $(3, 4)$ — each flips only one sign, which is a reflection over an axis, not a half-turn.',
    },
    {
      q: 'What is the smallest positive angle of rotation that maps a regular hexagon onto itself?',
      choices: ['$60^\\circ$', '$90^\\circ$', '$45^\\circ$', '$120^\\circ$'],
      answer: 0,
      solution: 'A regular hexagon has $6$ identical sides evenly spaced around its center, so rotating by one slot, $\\frac{360^\\circ}{6} = 60^\\circ$, maps it onto itself. Rotating by $120^\\circ$ also works, but it is two slots — not the smallest.',
    },
    {
      q: 'What is the image of $(1, 4)$ after a $270^\\circ$ counterclockwise rotation about the origin?',
      fig: {
        view: [-2, -2, 6, 5],
        grid: true,
        elems: [
          { t: 'seg', a: [0, 0], b: [1, 4], dash: true },
          { t: 'point', p: [1, 4], label: 'P', dx: 10, dy: 0 },
        ],
      },
      choices: ['$(-4, 1)$', '$(-1, -4)$', '$(4, -1)$', '$(4, 1)$'],
      answer: 2,
      solution: 'The $270^\\circ$ counterclockwise rule is $(x, y) \\to (y, -x)$, giving $(4, -1)$. You can also think of it as a $90^\\circ$ clockwise turn — three quarters one way equals one quarter the other way. The choice $(-4, 1)$ is the $90^\\circ$ counterclockwise image instead.',
    },
    {
      q: 'Triangle $ABC$ has vertices $A(1, 1)$, $B(4, 1)$, $C(4, 3)$. After a $90^\\circ$ counterclockwise rotation about the origin, what is the image of $C$?',
      fig: {
        view: [-5, -1, 6, 5],
        grid: true,
        elems: [
          { t: 'poly', pts: [[1, 1], [4, 1], [4, 3]] },
          { t: 'point', p: [1, 1], label: 'A', dx: -8, dy: 14 },
          { t: 'point', p: [4, 1], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [4, 3], label: 'C', dx: 10, dy: -4 },
        ],
      },
      choices: ['$(-3, 4)$', '$(3, -4)$', '$(-4, -3)$', '$(-4, 3)$'],
      answer: 0,
      solution: 'Apply $(x, y) \\to (-y, x)$ to $C(4, 3)$: the image is $(-3, 4)$. The choice $(3, -4)$ turns clockwise instead of counterclockwise, and $(-4, -3)$ is the $180^\\circ$ image. Each vertex rotates by the same rule, so the whole triangle swings a quarter-turn into Quadrant II.',
    },
    {
      q: 'A $90^\\circ$ clockwise rotation about the origin is the same transformation as which counterclockwise rotation?',
      choices: ['$90^\\circ$', '$180^\\circ$', '$360^\\circ$', '$270^\\circ$'],
      answer: 3,
      solution: 'Going a quarter of the way around clockwise lands you at the same spot as going three quarters of the way around counterclockwise: $360^\\circ - 90^\\circ = 270^\\circ$. That is why the $270^\\circ$ counterclockwise rule $(x, y) \\to (y, -x)$ is also the $90^\\circ$ clockwise rule.',
    },
    {
      q: 'What is the order of rotational symmetry of a square?',
      fig: {
        view: [-1, -1, 4, 4],
        grid: true,
        elems: [
          { t: 'poly', pts: [[1, 1], [3, 1], [3, 3], [1, 3]] },
          { t: 'point', p: [2, 2] },
        ],
      },
      choices: ['$2$', '$4$', '$8$', '$1$'],
      answer: 1,
      solution: 'Rotations of $90^\\circ$, $180^\\circ$, $270^\\circ$, and $360^\\circ$ about the center all map a square onto itself — that is $4$ rotations, so the order is $4$. The answer $8$ counts the square\'s $4$ lines of symmetry too, but those are reflections, not rotations.',
    },
    {
      q: 'After a $90^\\circ$ counterclockwise rotation about the origin, a point lands at $P\'(-2, 7)$. Where did it start?',
      fig: {
        view: [-4, -1, 9, 8],
        grid: true,
        elems: [
          { t: 'seg', a: [0, 0], b: [-2, 7], dash: true },
          { t: 'point', p: [-2, 7], label: "P'", dx: -12, dy: 0 },
        ],
      },
      choices: ['$(7, 2)$', '$(-7, -2)$', '$(2, 7)$', '$(-7, 2)$'],
      answer: 0,
      solution: 'To undo a $90^\\circ$ counterclockwise turn, rotate $90^\\circ$ clockwise — that is the rule $(x, y) \\to (y, -x)$. Applying it to $(-2, 7)$ gives $(7, 2)$. Check forwards: rotating $(7, 2)$ counterclockwise by $90^\\circ$ gives $(-2, 7)$. ✓ The choice $(-7, -2)$ rotates another $90^\\circ$ forward instead of backward.',
    },
    {
      q: 'The point $(5, -2)$ is rotated $180^\\circ$ about the origin, and the result is then rotated $90^\\circ$ counterclockwise about the origin. Where does it end up?',
      fig: {
        view: [-4, -7, 7, 3],
        grid: true,
        elems: [
          { t: 'seg', a: [0, 0], b: [5, -2], dash: true },
          { t: 'point', p: [5, -2], label: 'P', dx: 12, dy: 4 },
        ],
      },
      choices: ['$(2, 5)$', '$(-5, 2)$', '$(-2, -5)$', '$(5, 2)$'],
      answer: 2,
      solution: 'Rotations about the same center add their angles: $180^\\circ + 90^\\circ = 270^\\circ$ counterclockwise, whose rule is $(x, y) \\to (y, -x)$. So $(5, -2) \\to (-2, -5)$. Step by step gives the same thing: $180^\\circ$ sends $(5, -2)$ to $(-5, 2)$, then $90^\\circ$ sends that to $(-2, -5)$. ✓',
    },
    {
      q: 'What is the image of the point $A(4, 2)$ after a $180^\\circ$ rotation about the point $C(2, 1)$?',
      fig: {
        view: [-2, -2, 6, 4],
        grid: true,
        elems: [
          { t: 'seg', a: [4, 2], b: [2, 1], dash: true },
          { t: 'point', p: [4, 2], label: 'A', dx: 10, dy: -4 },
          { t: 'point', p: [2, 1], label: 'C', dx: 6, dy: 14 },
        ],
      },
      choices: ['$(-4, -2)$', '$(0, 0)$', '$(0, 2)$', '$(2, 0)$'],
      answer: 1,
      solution: 'A $180^\\circ$ rotation about $C$ sends $A$ to the point directly opposite through $C$, at the same distance — so $C$ is the midpoint of $A$ and its image. From $A(4, 2)$, travel to $C(2, 1)$ (left $2$, down $1$) and the same amount again: $(0, 0)$. The choice $(-4, -2)$ rotates about the origin, but the center here is $(2, 1)$.',
    },
  ],
}

const s163 = {
  id: '16.3',
  title: 'Reflections',
  learn: {
    concepts: [
      {
        heading: 'Mirror images',
        body: 'A reflection flips a figure over a line, called the line of reflection or mirror line. Each point and its image sit on opposite sides of the mirror, the same distance away — the mirror line is the perpendicular bisector of the segment joining them. A figure has line symmetry if reflecting over some line maps it onto itself; a rectangle has $2$ such lines, a square has $4$.',
      },
      {
        heading: 'Rules for the axes and the line y = x',
        body: 'Three mirror lines have famous rules. Over the x-axis: $(x, y) \\to (x, -y)$ — the $y$-coordinate flips. Over the y-axis: $(x, y) \\to (-x, y)$ — the $x$-coordinate flips. Over the line $y = x$: $(x, y) \\to (y, x)$ — the coordinates trade places.',
      },
      {
        heading: 'Other vertical and horizontal mirrors',
        body: 'To reflect over the vertical line $x = 3$, keep $y$ and send $x$ to $6 - x$, because the mirror must sit exactly halfway between $x$ and its image: $(x, y) \\to (6 - x, y)$. In general, the line $x = a$ gives $(x, y) \\to (2a - x, y)$, and the line $y = b$ gives $(x, y) \\to (x, 2b - y)$.',
      },
      {
        heading: 'Reflections reverse orientation',
        body: 'A reflection preserves size and shape but reverses orientation — trace the vertices of the image in the same letter order and they go around the opposite way, like a left hand versus a right hand. And here is a lovely fact: reflecting over two parallel lines, one after the other, is the same as a single translation, moving twice the distance between the lines.',
      },
    ],
    examples: [
      {
        problem: 'Triangle $ABC$ has vertices $A(1, 1)$, $B(3, 1)$, $C(1, 4)$. Find its image after a reflection over the y-axis.',
        steps: [
          'The y-axis rule flips the $x$-coordinate: $(x, y) \\to (-x, y)$.',
          '$A(1, 1) \\to A\'(-1, 1)$, $B(3, 1) \\to B\'(-3, 1)$, $C(1, 4) \\to C\'(-1, 4)$.',
          'Notice the orientation reversed: reading $A \\to B \\to C$ goes counterclockwise, but $A\' \\to B\' \\to C\'$ goes clockwise. That flip is the signature of every reflection.',
        ],
        answer: '$A\'(-1, 1)$, $B\'(-3, 1)$, $C\'(-1, 4)$',
        fig: {
          view: [-5, -1, 5, 6],
          grid: true,
          elems: [
            { t: 'poly', pts: [[1, 1], [3, 1], [1, 4]] },
            { t: 'poly', pts: [[-1, 1], [-3, 1], [-1, 4]] },
            { t: 'point', p: [1, 1], label: 'A', dx: 6, dy: 14 },
            { t: 'point', p: [3, 1], label: 'B', dx: 12, dy: 4 },
            { t: 'point', p: [1, 4], label: 'C', dx: 10, dy: -4 },
            { t: 'point', p: [-1, 1], label: "A'", dx: -6, dy: 16 },
            { t: 'point', p: [-3, 1], label: "B'", dx: -12, dy: 4 },
            { t: 'point', p: [-1, 4], label: "C'", dx: -12, dy: -4 },
          ],
        },
      },
      {
        problem: 'Reflect the point $P(2, 5)$ over the line $y = x$.',
        steps: [
          'The rule for the mirror $y = x$ is a simple trade: $(x, y) \\to (y, x)$.',
          'So $P(2, 5) \\to P\'(5, 2)$.',
          'Check the mirror is really halfway between: the midpoint of $P$ and $P\'$ is $\\left(\\frac{7}{2}, \\frac{7}{2}\\right)$, which lies on $y = x$. ✓',
        ],
        answer: '$P\'(5, 2)$',
        fig: {
          view: [-1, -1, 7, 7],
          grid: true,
          elems: [
            { t: 'seg', a: [-1, -1], b: [7, 7], dash: true },
            { t: 'seg', a: [2, 5], b: [5, 2], dash: true },
            { t: 'point', p: [2, 5], label: 'P', dx: -10, dy: -6 },
            { t: 'point', p: [5, 2], label: "P'", dx: 12, dy: 8 },
          ],
        },
      },
      {
        problem: 'Reflect the point $(1, 2)$ over the vertical line $x = 3$.',
        steps: [
          'A vertical mirror leaves the $y$-coordinate alone; only $x$ changes.',
          'The point $x = 1$ sits $2$ units left of the mirror $x = 3$, so its image sits $2$ units right of it, at $x = 5$. In rule form: $x \\to 2(3) - x = 6 - x$.',
          'So $(1, 2) \\to (5, 2)$. The mirror $x = 3$ is exactly halfway between $1$ and $5$. ✓',
        ],
        answer: '$(5, 2)$',
        fig: {
          view: [-1, -1, 7, 4],
          grid: true,
          elems: [
            { t: 'seg', a: [3, -1], b: [3, 4], dash: true },
            { t: 'seg', a: [1, 2], b: [5, 2], dash: true },
            { t: 'point', p: [1, 2], label: 'P', dx: -10, dy: -6 },
            { t: 'point', p: [5, 2], label: "P'", dx: 12, dy: -6 },
          ],
        },
      },
    ],
  },
  problems: [
    {
      q: 'What is the image of $(4, -3)$ after a reflection over the x-axis?',
      fig: {
        view: [-1, -5, 6, 5],
        grid: true,
        elems: [
          { t: 'point', p: [4, -3], label: 'P', dx: 12, dy: 4 },
        ],
      },
      choices: ['$(4, 3)$', '$(-4, -3)$', '$(-4, 3)$', '$(-3, 4)$'],
      answer: 0,
      solution: 'Reflecting over the x-axis flips only the $y$-coordinate: $(4, -3) \\to (4, 3)$. The point hops from below the axis to the matching spot above it. The choice $(-4, -3)$ reflects over the y-axis instead.',
    },
    {
      q: 'What is the image of $(-2, 5)$ after a reflection over the y-axis?',
      choices: ['$(-2, -5)$', '$(2, -5)$', '$(2, 5)$', '$(5, -2)$'],
      answer: 2,
      solution: 'The y-axis mirror flips only the $x$-coordinate: $(-2, 5) \\to (2, 5)$. The height stays the same; the point just crosses to the other side of the y-axis. The choice $(-2, -5)$ uses the x-axis as the mirror instead.',
    },
    {
      q: 'How many lines of symmetry does a (non-square) rectangle have?',
      fig: {
        view: [0, 0, 7, 5],
        grid: true,
        elems: [
          { t: 'poly', pts: [[1, 1], [6, 1], [6, 4], [1, 4]] },
        ],
      },
      choices: ['$4$', '$2$', '$1$', '$0$'],
      answer: 1,
      solution: 'A rectangle folds onto itself over the vertical line through the midpoints of the long sides, and over the horizontal line through the midpoints of the short sides — that is $2$ lines. Careful with $4$: the diagonals are NOT lines of symmetry unless the rectangle is a square, because folding over a diagonal makes the long and short sides swap.',
    },
    {
      q: 'What is the image of $(3, 7)$ after a reflection over the line $y = x$?',
      fig: {
        view: [-1, -1, 9, 9],
        grid: true,
        elems: [
          { t: 'seg', a: [-1, -1], b: [9, 9], dash: true },
          { t: 'point', p: [3, 7], label: 'P', dx: -10, dy: -6 },
        ],
      },
      choices: ['$(-3, -7)$', '$(-7, -3)$', '$(3, -7)$', '$(7, 3)$'],
      answer: 3,
      solution: 'Reflecting over $y = x$ trades the coordinates: $(3, 7) \\to (7, 3)$. No signs change — the point just swaps its across and up distances. The choices with flipped signs mix in reflections over the axes, which use different mirrors.',
    },
    {
      q: 'What is the image of $(1, 2)$ after a reflection over the vertical line $x = 4$?',
      fig: {
        view: [-1, -1, 9, 6],
        grid: true,
        elems: [
          { t: 'seg', a: [4, -1], b: [4, 6], dash: true },
          { t: 'point', p: [1, 2], label: 'P', dx: -10, dy: -6 },
        ],
      },
      choices: ['$(7, 2)$', '$(-1, 2)$', '$(1, 6)$', '$(5, 2)$'],
      answer: 0,
      solution: 'The point is $3$ units left of the mirror $x = 4$, so its image lands $3$ units right of it: $x = 7$, giving $(7, 2)$. In rule form, $x \\to 2(4) - 1 = 7$. The choice $(-1, 2)$ uses the y-axis as the mirror, and $(1, 6)$ reflects over the horizontal line $y = 4$ instead.',
    },
    {
      q: 'Triangle $ABC$ has vertices $A(2, 1)$, $B(5, 1)$, $C(5, 3)$. After a reflection over the x-axis, what is the image of $C$?',
      fig: {
        view: [-1, -4, 7, 5],
        grid: true,
        elems: [
          { t: 'poly', pts: [[2, 1], [5, 1], [5, 3]] },
          { t: 'point', p: [2, 1], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [5, 1], label: 'B', dx: 12, dy: 8 },
          { t: 'point', p: [5, 3], label: 'C', dx: 10, dy: -4 },
        ],
      },
      choices: ['$(-5, 3)$', '$(-5, -3)$', '$(5, -3)$', '$(3, 5)$'],
      answer: 2,
      solution: 'Over the x-axis, only the $y$-coordinate flips: $C(5, 3) \\to (5, -3)$. The whole triangle drops to a mirror copy below the axis, and its orientation reverses — that is the tell-tale sign of a reflection.',
    },
    {
      q: 'Which of these transformations reverses the orientation of a figure?',
      choices: ['a translation', 'a rotation', 'a reflection', 'a translation followed by a rotation'],
      answer: 2,
      solution: 'Only the reflection flips a figure over, turning it into its mirror image — like turning a left hand into a right hand. Translations and rotations (and any combination of them) slide and spin a figure but always keep it facing the same way around.',
    },
    {
      q: 'What is the image of $(3, -1)$ after a reflection over the horizontal line $y = 2$?',
      fig: {
        view: [-1, -3, 7, 7],
        grid: true,
        elems: [
          { t: 'seg', a: [-1, 2], b: [7, 2], dash: true },
          { t: 'point', p: [3, -1], label: 'P', dx: 12, dy: 4 },
        ],
      },
      choices: ['$(3, 1)$', '$(3, 5)$', '$(3, -5)$', '$(-3, -1)$'],
      answer: 1,
      solution: 'The point sits $3$ units below the mirror $y = 2$, so its image sits $3$ units above it, at $y = 5$: the image is $(3, 5)$. In rule form, $y \\to 2(2) - (-1) = 5$. The choice $(3, 1)$ forgets that the distance below the mirror is $3$, not $1$.',
    },
    {
      q: 'The point $P(1, 3)$ is reflected over the line $x = 2$, and the result is reflected over the line $x = 5$. Where does $P$ end up?',
      fig: {
        view: [-1, -1, 9, 7],
        grid: true,
        elems: [
          { t: 'seg', a: [2, -1], b: [2, 6], dash: true },
          { t: 'seg', a: [5, -1], b: [5, 6], dash: true },
          { t: 'point', p: [1, 3], label: 'P', dx: -10, dy: -6 },
        ],
      },
      choices: ['$(3, 3)$', '$(13, 3)$', '$(-5, 3)$', '$(7, 3)$'],
      answer: 3,
      solution: 'Step by step: over $x = 2$, the point $(1, 3)$ goes to $(3, 3)$; then over $x = 5$, the point $(3, 3)$ goes to $(7, 3)$. Notice the shortcut: two reflections over parallel lines make a translation of twice the gap — the lines are $3$ apart, so the point slides $6$ right, from $x = 1$ to $x = 7$. ✓',
    },
    {
      q: 'The point $(4, 1)$ is reflected over the line $y = x$, and the result is reflected over the y-axis. What is the final image?',
      fig: {
        view: [-3, -2, 6, 6],
        grid: true,
        elems: [
          { t: 'seg', a: [-2, -2], b: [6, 6], dash: true },
          { t: 'point', p: [4, 1], label: 'P', dx: 12, dy: 0 },
        ],
      },
      choices: ['$(-1, 4)$', '$(4, -1)$', '$(1, 4)$', '$(-4, -1)$'],
      answer: 0,
      solution: 'Over $y = x$, the coordinates trade: $(4, 1) \\to (1, 4)$. Over the y-axis, the $x$-coordinate flips: $(1, 4) \\to (-1, 4)$. Interesting bonus: the combined effect is exactly a $90^\\circ$ counterclockwise rotation, $(x, y) \\to (-y, x)$ — two reflections over intersecting lines always make a rotation. The choice $(4, -1)$ flips only the $y$-coordinate — a single reflection over the x-axis, not this two-step trip. (And doing the two steps in the other order lands at $(1, -4)$ — order matters!)',
    },
  ],
}

const s164 = {
  id: '16.4',
  title: 'Dilation',
  learn: {
    concepts: [
      {
        heading: 'Zooming in and out',
        body: 'A dilation resizes a figure from a fixed point called the center, multiplying every distance from the center by the scale factor $k$. Centered at the origin, the rule is beautifully short: $(x, y) \\to (kx, ky)$. Each point slides along the ray from the origin through it, ending up $k$ times as far away.',
      },
      {
        heading: 'What the scale factor tells you',
        body: 'If $k > 1$, the figure grows; if $0 < k < 1$, it shrinks — a scale factor of $k = \\frac{1}{2}$ produces a half-size copy. A negative scale factor is allowed too: $k = -2$ doubles every distance AND sends each point to the opposite side of the center, so the image also looks rotated $180^\\circ$.',
      },
      {
        heading: 'Shape survives, size scales',
        body: 'A dilation preserves shape but (unless $|k| = 1$) not size: the image is similar to the original, with all angles unchanged. Every length gets multiplied by $|k|$, and every area gets multiplied by $k^2$ — area scales twice, once for each dimension. A scale factor of $3$ makes lengths $3$ times as long but areas $9$ times as big.',
      },
      {
        heading: 'Finding the scale factor',
        body: 'Given a point and its image under a dilation centered at the origin, divide to find $k$: if $(2, 3)$ maps to $(8, 12)$, then $k = \\frac{8}{2} = \\frac{12}{3} = 4$. Both coordinates must give the same ratio — that is your built-in check.',
      },
    ],
    examples: [
      {
        problem: 'Triangle $ABC$ has vertices $A(1, 1)$, $B(3, 1)$, $C(1, 2)$. Find its image under a dilation centered at the origin with scale factor $k = 2$.',
        steps: [
          'Multiply both coordinates of each vertex by $2$: $A(1, 1) \\to A\'(2, 2)$, $B(3, 1) \\to B\'(6, 2)$, $C(1, 2) \\to C\'(2, 4)$.',
          'Each image vertex lies on the ray from the origin through the original vertex, twice as far out.',
          'Side $AB$ had length $2$; side $A\'B\'$ has length $4$ — every length doubled, so the image is a same-shape, double-size copy. The area is $2^2 = 4$ times as big.',
        ],
        answer: '$A\'(2, 2)$, $B\'(6, 2)$, $C\'(2, 4)$',
        fig: {
          view: [-1, -1, 8, 6],
          grid: true,
          elems: [
            { t: 'seg', a: [0, 0], b: [6, 2], dash: true },
            { t: 'seg', a: [0, 0], b: [2, 4], dash: true },
            { t: 'poly', pts: [[1, 1], [3, 1], [1, 2]] },
            { t: 'poly', pts: [[2, 2], [6, 2], [2, 4]] },
            { t: 'point', p: [1, 1], label: 'A', dx: 2, dy: 16 },
            { t: 'point', p: [3, 1], label: 'B', dx: 10, dy: 12 },
            { t: 'point', p: [1, 2], label: 'C', dx: -10, dy: -4 },
            { t: 'point', p: [2, 2], label: "A'", dx: -4, dy: 18 },
            { t: 'point', p: [6, 2], label: "B'", dx: 12, dy: 8 },
            { t: 'point', p: [2, 4], label: "C'", dx: -6, dy: -8 },
          ],
        },
      },
      {
        problem: 'Find the image of $(4, 6)$ under a dilation centered at the origin with scale factor $k = \\frac{1}{2}$.',
        steps: [
          'Multiply both coordinates by $\\frac{1}{2}$: $(4, 6) \\to (2, 3)$.',
          'The image is on the same ray from the origin, half as far out — a dilation with $0 < k < 1$ shrinks toward the center.',
          'Distances confirm it: $(4, 6)$ is $\\sqrt{52} = 2\\sqrt{13}$ from the origin, and $(2, 3)$ is $\\sqrt{13}$ — exactly half. ✓',
        ],
        answer: '$(2, 3)$',
        fig: {
          view: [-1, -1, 6, 8],
          grid: true,
          elems: [
            { t: 'seg', a: [0, 0], b: [4, 6], dash: true },
            { t: 'point', p: [4, 6], label: 'P', dx: 12, dy: 0 },
            { t: 'point', p: [2, 3], label: "P'", dx: 12, dy: 4 },
          ],
        },
      },
      {
        problem: 'A dilation centered at the origin sends $A(2, 3)$ to $A\'(8, 12)$. Find the scale factor, and decide how the areas of the original and image of any figure compare.',
        steps: [
          'Divide image coordinates by original coordinates: $\\frac{8}{2} = 4$ and $\\frac{12}{3} = 4$. Both agree, so $k = 4$.',
          'Lengths are multiplied by $4$, so any figure carried by this dilation gets $4$ times the perimeter.',
          'Areas are multiplied by $k^2 = 16$ — a square unit in the original becomes a $4 \\times 4$ patch in the image.',
        ],
        answer: '$k = 4$; areas grow by a factor of $16$',
      },
    ],
  },
  problems: [
    {
      q: 'What is the image of $(3, 2)$ under a dilation centered at the origin with scale factor $3$?',
      fig: {
        view: [-1, -1, 11, 8],
        grid: true,
        elems: [
          { t: 'seg', a: [0, 0], b: [9, 6], dash: true },
          { t: 'point', p: [3, 2], label: 'P', dx: 0, dy: -10 },
        ],
      },
      choices: ['$(6, 5)$', '$(9, 2)$', '$(3, 6)$', '$(9, 6)$'],
      answer: 3,
      solution: 'Multiply both coordinates by the scale factor: $(3 \\cdot 3, 3 \\cdot 2) = (9, 6)$. The choice $(6, 5)$ adds $3$ instead of multiplying — dilations always multiply. And $(9, 2)$ scales only the $x$-coordinate; both must be scaled.',
    },
    {
      q: 'What is the image of $(8, -4)$ under a dilation centered at the origin with scale factor $\\frac{1}{2}$?',
      fig: {
        view: [-1, -6, 10, 2],
        grid: true,
        elems: [
          { t: 'seg', a: [0, 0], b: [8, -4], dash: true },
          { t: 'point', p: [8, -4], label: 'P', dx: 12, dy: 0 },
        ],
      },
      choices: ['$(16, -8)$', '$(4, -2)$', '$(4, 2)$', '$(-4, 2)$'],
      answer: 1,
      solution: 'Multiply both coordinates by $\\frac{1}{2}$: $(4, -2)$. The point slides halfway in toward the origin along its ray, keeping its signs. The choice $(16, -8)$ uses $k = 2$ and doubles instead of halving.',
    },
    {
      q: 'A dilation centered at the origin sends $A(2, 1)$ to $A\'(6, 3)$. What is the scale factor?',
      fig: {
        view: [-1, -1, 8, 5],
        grid: true,
        elems: [
          { t: 'seg', a: [0, 0], b: [6, 3], dash: true },
          { t: 'point', p: [2, 1], label: 'A', dx: 0, dy: -10 },
          { t: 'point', p: [6, 3], label: "A'", dx: 12, dy: -4 },
        ],
      },
      choices: ['$3$', '$4$', '$\\frac{1}{3}$', '$2$'],
      answer: 0,
      solution: 'Divide matching coordinates: $\\frac{6}{2} = 3$ and $\\frac{3}{1} = 3$. Both ratios agree, so $k = 3$. The choice $4$ comes from the difference $6 - 2$, but dilations multiply distances rather than adding to them, and $\\frac{1}{3}$ is the factor going the other way, from $A\'$ back to $A$.',
    },
    {
      q: 'A dilation with scale factor $k = 5$ is applied to a triangle. Which properties of the triangle are preserved?',
      choices: ['size and shape', 'shape, but not necessarily size', 'size, but not necessarily shape', 'neither size nor shape'],
      answer: 1,
      solution: 'A dilation produces a similar copy: all the angles stay the same, so the shape is preserved. But with $k = 5$ every side becomes $5$ times as long, so the size definitely changes. Same shape, new size — that is the defining behavior of a dilation.',
    },
    {
      q: 'A square with side length $2$ is dilated by a scale factor of $3$. What is the area of the image?',
      fig: {
        view: [0, 0, 4, 4],
        grid: true,
        elems: [
          { t: 'poly', pts: [[1, 1], [3, 1], [3, 3], [1, 3]] },
        ],
      },
      choices: ['$12$', '$6$', '$36$', '$24$'],
      answer: 2,
      solution: 'The image is a square with side $2 \\cdot 3 = 6$, so its area is $6^2 = 36$. Equivalently, the original area $4$ gets multiplied by $k^2 = 9$: $4 \\cdot 9 = 36$. The choice $12$ multiplies the area by $k$ instead of $k^2$, and $24$ is the new perimeter, not the new area.',
    },
    {
      q: 'What is the image of $(2, -3)$ under a dilation centered at the origin with scale factor $k = -1$?',
      fig: {
        view: [-4, -4, 4, 4],
        grid: true,
        elems: [
          { t: 'seg', a: [-2, 3], b: [2, -3], dash: true },
          { t: 'point', p: [2, -3], label: 'P', dx: 12, dy: 4 },
        ],
      },
      choices: ['$(-2, 3)$', '$(2, 3)$', '$(-2, -3)$', '$(3, -2)$'],
      answer: 0,
      solution: 'Multiply both coordinates by $-1$: $(-2, 3)$. The point keeps its distance from the origin but jumps to the opposite side — a dilation with $k = -1$ is exactly the same as a $180^\\circ$ rotation about the center. The choices that flip just one sign are axis reflections instead.',
    },
    {
      q: 'The triangle with vertices $(2, 0)$, $(4, 2)$, $(0, 2)$ is dilated from the origin with scale factor $\\frac{1}{2}$. What is the image of the vertex $(4, 2)$?',
      fig: {
        view: [-1, -1, 5, 3],
        grid: true,
        elems: [
          { t: 'poly', pts: [[2, 0], [4, 2], [0, 2]] },
          { t: 'point', p: [2, 0], label: 'A', dx: 0, dy: 16 },
          { t: 'point', p: [4, 2], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [0, 2], label: 'C', dx: -10, dy: -4 },
        ],
      },
      choices: ['$(8, 4)$', '$(2, 2)$', '$(4, 1)$', '$(2, 1)$'],
      answer: 3,
      solution: 'Halve both coordinates: $(4, 2) \\to (2, 1)$. The choices $(2, 2)$ and $(4, 1)$ each halve only one coordinate, but a dilation scales in every direction at once — both coordinates get multiplied by $k$.',
    },
    {
      q: 'A dilation centered at the origin with scale factor $3$ sends point $A$ to $A\'(-6, 9)$. What was $A$?',
      fig: {
        view: [-8, -1, 3, 10],
        grid: true,
        elems: [
          { t: 'seg', a: [0, 0], b: [-6, 9], dash: true },
          { t: 'point', p: [-6, 9], label: "A'", dx: -12, dy: 0 },
        ],
      },
      choices: ['$(-18, 27)$', '$(2, -3)$', '$(-2, 3)$', '$(-3, 2)$'],
      answer: 2,
      solution: 'To undo a dilation by $3$, divide both coordinates by $3$: $A = (-2, 3)$. Check forwards: $3 \\cdot (-2, 3) = (-6, 9)$. ✓ The choice $(-18, 27)$ applies the dilation forward a second time, and $(2, -3)$ flips the signs, which no positive scale factor does.',
    },
    {
      q: 'A dilation takes a segment of length $4$ to a segment of length $10$. If a figure carried by this dilation has area $8$, what is the area of its image?',
      choices: ['$20$', '$50$', '$40$', '$80$'],
      answer: 1,
      solution: 'The scale factor is $k = \\frac{10}{4} = \\frac{5}{2}$. Areas scale by $k^2 = \\frac{25}{4}$, so the image area is $8 \\cdot \\frac{25}{4} = 50$. The choice $20$ scales the area by $k$ — but area picks up the factor twice, once for each dimension.',
    },
    {
      q: 'A dilation centered at the origin sends $(2, 1)$ to $(5, 2.5)$. Where does it send $(-4, 6)$?',
      fig: {
        view: [-1, -1, 7, 4],
        grid: true,
        elems: [
          { t: 'seg', a: [0, 0], b: [6, 3], dash: true },
          { t: 'point', p: [2, 1], label: 'A', dx: 0, dy: -10 },
          { t: 'point', p: [5, 2.5], label: "A'", dx: 4, dy: -10 },
        ],
      },
      choices: ['$(-10, 15)$', '$(-8, 12)$', '$(-1, 9)$', '$(10, -15)$'],
      answer: 0,
      solution: 'First find the scale factor: $\\frac{5}{2} = \\frac{2.5}{1} = \\frac{5}{2}$, so $k = \\frac{5}{2}$. Then $(-4, 6) \\to \\left(-4 \\cdot \\frac{5}{2}, 6 \\cdot \\frac{5}{2}\\right) = (-10, 15)$. The choice $(-1, 9)$ treats the dilation as the translation "add $3$", but $(2,1) \\to (5, 2.5)$ adds different amounts to each coordinate — only a multiplication by $\\frac{5}{2}$ explains both.',
    },
  ],
}

const s165 = {
  id: '16.5',
  title: 'Changing the Question',
  learn: {
    concepts: [
      {
        heading: 'Transformations as tools',
        body: 'So far we have transformed figures because we were asked to. The real power move is transforming a figure to make a hard question easy: slide, flip, or spin part of a picture so that a crooked problem straightens out. The answer does not change — because translations, rotations, and reflections preserve lengths and areas — but the problem becomes one you already know how to do.',
      },
      {
        heading: 'The reflection trick for shortest paths',
        body: 'Suppose you must walk from $A$ to a straight river, touch it, and continue to $B$. Which touch point makes the trip shortest? Reflect $B$ over the river line to get $B\'$. Any path $A \\to$ river $\\to B$ has the same length as the matching path $A \\to$ river $\\to B\'$, and the shortest route from $A$ to $B\'$ is a straight segment! So the best total length is simply the distance $AB\'$, and the best touch point is where segment $AB\'$ crosses the river.',
      },
      {
        heading: 'Cut and slide',
        body: 'Areas do not change when pieces are translated. A slanted region can often be cut into pieces that slide into a plain rectangle: a parallelogram is a rectangle with a triangle sliced off one end and slid to the other, which is exactly why its area is base times height. When a region looks tilted or jagged, ask: can I cut and slide it straight?',
      },
      {
        heading: 'Symmetry shortcuts and tilings',
        body: 'Symmetry is free information. If a figure has a mirror line, then matching lengths and angles on the two sides are automatically equal — no computation needed. The same thinking explains which shapes tile the plane: copies of a shape fit together exactly when the angles meeting at each point add to $360^\\circ$, which is why equilateral triangles ($6 \\times 60^\\circ$), squares ($4 \\times 90^\\circ$), and regular hexagons ($3 \\times 120^\\circ$) tessellate.',
      },
    ],
    examples: [
      {
        problem: 'An ant at $A(1, 4)$ must walk to the x-axis (a river), take a drink, and then walk to $B(7, 2)$. What is the shortest possible total distance?',
        steps: [
          'Reflect $B(7, 2)$ over the x-axis to get $B\'(7, -2)$. Every path from the river to $B$ has a mirror-image path of the same length from the river to $B\'$.',
          'So the shortest total trip equals the straight-line distance from $A$ to $B\'$: $\\sqrt{(7 - 1)^2 + (-2 - 4)^2} = \\sqrt{36 + 36} = 6\\sqrt{2}$.',
          'The best drinking spot is where segment $AB\'$ crosses the x-axis — at $(5, 0)$. The reflection turned a bent-path puzzle into a straight-line distance.',
        ],
        answer: '$6\\sqrt{2}$, touching the river at $(5, 0)$',
        fig: {
          view: [-1, -3, 9, 6],
          grid: true,
          elems: [
            { t: 'poly', pts: [[1, 4], [5, 0], [7, 2]], closed: false },
            { t: 'seg', a: [5, 0], b: [7, -2], dash: true },
            { t: 'seg', a: [7, 2], b: [7, -2], dash: true },
            { t: 'point', p: [1, 4], label: 'A', dx: -10, dy: -4 },
            { t: 'point', p: [7, 2], label: 'B', dx: 12, dy: -4 },
            { t: 'point', p: [7, -2], label: "B'", dx: 12, dy: 4 },
            { t: 'point', p: [5, 0], label: 'P', dx: -4, dy: -10 },
          ],
        },
      },
      {
        problem: 'Find the area of the parallelogram with vertices $(0, 0)$, $(4, 0)$, $(6, 3)$, and $(2, 3)$.',
        steps: [
          'The parallelogram leans to the right. Slice off the triangle with vertices $(4, 0)$, $(6, 3)$, $(2, 3)$... actually, the cleanest cut is the vertical line $x = 4$: it splits off a right triangle on the right end.',
          'Translate that triangle $4$ units left — it fits exactly into the notch on the left end, because the two slanted sides are parallel and equal (that is what "parallelogram" guarantees).',
          'The rearranged figure is a plain $4 \\times 3$ rectangle, so the area is $4 \\cdot 3 = 12$. Sliding a piece never changes area, so the parallelogram\'s area is $12$ too.',
        ],
        answer: '$12$ square units',
        fig: {
          view: [-1, -1, 8, 5],
          grid: true,
          elems: [
            { t: 'poly', pts: [[0, 0], [4, 0], [6, 3], [2, 3]] },
            { t: 'seg', a: [4, 0], b: [4, 3], dash: true },
            { t: 'label', p: [3, 1.5], text: 'slide the right piece left', dy: 4 },
          ],
        },
      },
      {
        problem: 'Copies of a regular polygon are arranged around a single point, edge to edge, with no gaps or overlaps. Which regular polygons can do this?',
        steps: [
          'The angles meeting at the point must add to exactly $360^\\circ$, so the polygon\'s interior angle must divide $360^\\circ$ evenly.',
          'Check the candidates: equilateral triangle $60^\\circ$ (six fit), square $90^\\circ$ (four fit), regular hexagon $120^\\circ$ (three fit) — all divide $360^\\circ$.',
          'A regular pentagon\'s angle is $108^\\circ$, and $\\frac{360}{108}$ is not a whole number: three pentagons leave a $36^\\circ$ gap, and four overlap. So pentagons cannot tile around a point.',
        ],
        answer: 'Equilateral triangles, squares, and regular hexagons — the only regular polygons that tessellate',
      },
    ],
  },
  problems: [
    {
      q: 'You want the shortest path that starts at $A$, touches the x-axis, and ends at $B$ (both points are above the x-axis). Which point should you construct to solve the problem?',
      choices: ['the reflection of $B$ over the x-axis', 'the reflection of $B$ over the y-axis', 'the point directly below $B$ on the x-axis', 'the midpoint of segment $AB$'],
      answer: 0,
      solution: 'Reflect $B$ over the mirror you must touch — the x-axis. Paths from the axis to $B$ and to the reflected point $B\'$ have equal lengths, so the shortest bent path from $A$ through the axis to $B$ straightens into the segment $AB\'$. (Reflecting $A$ instead works just as well; the key is to reflect over the line you must touch.)',
    },
    {
      q: 'A path starts at $A(0, 3)$, touches the x-axis, and ends at $B(4, 1)$. What is the shortest possible total length?',
      fig: {
        view: [-1, -2, 6, 5],
        grid: true,
        elems: [
          { t: 'seg', a: [0, 3], b: [4, -1], dash: true },
          { t: 'seg', a: [4, 1], b: [4, -1], dash: true },
          { t: 'point', p: [0, 3], label: 'A', dx: -10, dy: -4 },
          { t: 'point', p: [4, 1], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [4, -1], label: "B'", dx: 12, dy: 4 },
        ],
      },
      choices: ['$2\\sqrt{5}$', '$4$', '$4\\sqrt{2}$', '$6$'],
      answer: 2,
      solution: 'Reflect $B(4, 1)$ over the x-axis to $B\'(4, -1)$. The shortest bent path has the same length as the straight segment $AB\'$: $\\sqrt{(4 - 0)^2 + (-1 - 3)^2} = \\sqrt{16 + 16} = 4\\sqrt{2}$. The choice $2\\sqrt{5}$ is the straight distance from $A$ to $B$, but that path never touches the axis.',
    },
    {
      q: 'What is the area of the parallelogram with vertices $(0, 0)$, $(5, 0)$, $(7, 3)$, and $(2, 3)$?',
      fig: {
        view: [-1, -1, 9, 5],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [7, 3], [2, 3]] },
          { t: 'seg', a: [5, 0], b: [5, 3], dash: true },
        ],
      },
      choices: ['$21$', '$15$', '$18$', '$30$'],
      answer: 1,
      solution: 'Cut along the dashed line $x = 5$ and slide the right-hand triangle $5$ units left; it fills the notch on the left perfectly, leaving a $5 \\times 3$ rectangle of area $15$. Translation preserves area, so the parallelogram has area $15$. The choice $21$ multiplies $7 \\times 3$, but $7$ is the reach of the top edge, not the base length.',
    },
    {
      q: 'Which regular polygon can NOT tile the plane by itself?',
      choices: ['equilateral triangle', 'square', 'regular pentagon', 'regular hexagon'],
      answer: 2,
      solution: 'Around any point of a tiling, angles must add to exactly $360^\\circ$. Triangles ($60^\\circ$), squares ($90^\\circ$), and hexagons ($120^\\circ$) each divide $360^\\circ$ evenly. The regular pentagon\'s interior angle is $108^\\circ$, which does not divide $360^\\circ$: three copies leave a gap and four overlap. So pentagons cannot tessellate alone.',
    },
    {
      q: 'A robot starts at $A(2, 5)$, must touch the y-axis (a charging wall), and then travel to $B(6, 1)$. What is the shortest possible total distance?',
      fig: {
        view: [-8, -1, 8, 7],
        grid: true,
        elems: [
          { t: 'seg', a: [2, 5], b: [-6, 1], dash: true },
          { t: 'seg', a: [6, 1], b: [-6, 1], dash: true },
          { t: 'point', p: [2, 5], label: 'A', dx: 10, dy: -4 },
          { t: 'point', p: [6, 1], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [-6, 1], label: "B'", dx: -12, dy: -4 },
        ],
      },
      choices: ['$4\\sqrt{2}$', '$8$', '$10$', '$4\\sqrt{5}$'],
      answer: 3,
      solution: 'This time the mirror is the y-axis, so reflect $B(6, 1)$ over it to get $B\'(-6, 1)$. The shortest total distance is $AB\' = \\sqrt{(-6 - 2)^2 + (1 - 5)^2} = \\sqrt{64 + 16} = 4\\sqrt{5}$. The choice $4\\sqrt{2}$ is the straight $A$-to-$B$ distance, which skips the wall.',
    },
    {
      q: 'A ramp-shaped region is bounded below by the zigzag from $(0, 0)$ to $(2, 1)$ to $(4, 0)$, above by the same zigzag translated up $3$ units, and by vertical segments at the two ends. What is its area?',
      fig: {
        view: [-1, -1, 5, 5],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [2, 1], [4, 0], [4, 3], [2, 4], [0, 3]] },
          { t: 'seg', a: [0, 0], b: [0, 3], dash: true },
          { t: 'seg', a: [4, 0], b: [4, 3], dash: true },
        ],
      },
      choices: ['$12$', '$10$', '$14$', '$16$'],
      answer: 0,
      solution: 'The top boundary is the bottom boundary slid up $3$. Cut the region along vertical lines and every vertical slice has height exactly $3$, no matter where the zigzag bends — so the region rearranges into a $4 \\times 3$ rectangle. Area: $12$. You can also check with the two bumps: the triangle poking up on top is congruent to the notch cut out of the bottom, so they trade places.',
    },
    {
      q: 'A square has vertices $(0, 0)$, $(6, 0)$, $(6, 6)$, $(0, 6)$, and the point $P(3, 5)$ lies on the vertical line $x = 3$. Without computing any distances, which pair of vertices must be equally far from $P$?',
      fig: {
        view: [-1, -1, 7, 7],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 6], [0, 6]], fill: false },
          { t: 'seg', a: [3, -1], b: [3, 7], dash: true },
          { t: 'point', p: [3, 5], label: 'P', dx: 12, dy: 0 },
        ],
      },
      choices: ['$(0, 0)$ and $(0, 6)$', '$(0, 0)$ and $(6, 0)$', '$(0, 0)$ and $(6, 6)$', '$(6, 0)$ and $(6, 6)$'],
      answer: 1,
      solution: 'The line $x = 3$ is a mirror line of the square: reflecting over it swaps $(0, 0)$ with $(6, 0)$ and leaves $P$ exactly where it is. A reflection preserves distances, so $P$ must be the same distance from those two swapped vertices. (It is also equidistant from $(0, 6)$ and $(6, 6)$ for the same reason.) Symmetry answered the question with zero arithmetic.',
    },
    {
      q: 'The point $(0, 2)$ is reflected over the line $x = 1$, and the result is reflected over the line $x = 4$. Where does the point end up?',
      fig: {
        view: [-2, -1, 8, 5],
        grid: true,
        elems: [
          { t: 'seg', a: [1, -1], b: [1, 5], dash: true },
          { t: 'seg', a: [4, -1], b: [4, 5], dash: true },
          { t: 'point', p: [0, 2], label: 'P', dx: -10, dy: -6 },
        ],
      },
      choices: ['$(2, 2)$', '$(8, 2)$', '$(-6, 2)$', '$(6, 2)$'],
      answer: 3,
      solution: 'Step by step: over $x = 1$, the point $(0, 2)$ maps to $(2, 2)$; over $x = 4$, that maps to $(6, 2)$. The shortcut confirms it: two reflections over parallel lines make a translation by twice the gap — the lines are $3$ apart, so the net effect is a slide of $6$ to the right. The choice $(2, 2)$ stops after only the first reflection.',
    },
    {
      q: 'A hiker at $A(1, 2)$ wants to reach the x-axis river and then camp at $B(5, 4)$, walking as little as possible. At which point should she touch the river?',
      fig: {
        view: [-2, -5, 9, 5],
        grid: true,
        elems: [
          { t: 'seg', a: [1, 2], b: [5, -4], dash: true },
          { t: 'seg', a: [5, 4], b: [5, -4], dash: true },
          { t: 'point', p: [1, 2], label: 'A', dx: -10, dy: -4 },
          { t: 'point', p: [5, 4], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [5, -4], label: "B'", dx: 12, dy: 4 },
        ],
      },
      choices: ['$\\left(\\frac{7}{3}, 0\\right)$', '$(3, 0)$', '$(2, 0)$', '$\\left(\\frac{7}{2}, 0\\right)$'],
      answer: 0,
      solution: 'Reflect $B(5, 4)$ to $B\'(5, -4)$; the best touch point is where segment $AB\'$ crosses the x-axis. From $A(1, 2)$ to $B\'(5, -4)$ the run is $4$ and the drop is $6$, so the path reaches height $0$ after $\\frac{2}{6} = \\frac{1}{3}$ of the trip: $x = 1 + \\frac{1}{3} \\cdot 4 = \\frac{7}{3}$. Touch at $\\left(\\frac{7}{3}, 0\\right)$. The choice $(3, 0)$ just averages the $x$-coordinates, but the crossing point depends on the heights too.',
    },
    {
      q: 'A $6 \\times 6$ square garden has a slanted path of uniform horizontal width $1$ running from the bottom edge to the top edge (the parallelogram with vertices $(2, 0)$, $(3, 0)$, $(5, 6)$, $(4, 6)$). What is the area of the garden NOT covered by the path?',
      fig: {
        view: [-1, -1, 7, 7],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 6], [0, 6]], fill: false },
          { t: 'poly', pts: [[2, 0], [3, 0], [5, 6], [4, 6]] },
        ],
      },
      choices: ['$36 - 6\\sqrt{2}$', '$30$', '$35$', '$24$'],
      answer: 1,
      solution: 'Slide the grass piece right of the path $1$ unit to the left — it fits snugly against the left piece, forming a plain $5 \\times 6$ rectangle. So the grass area is $30$. Directly: the path is a parallelogram with base $1$ (measured horizontally) and height $6$, so its area is $6$, and $36 - 6 = 30$. The tempting $36 - 6\\sqrt{2}$ uses the slanted side length as the base, but the horizontal width of $1$ is what pairs with the vertical height of $6$.',
    },
  ],
}

const challenge = [
  {
    q: 'The point $(3, 1)$ is rotated $90^\\circ$ counterclockwise about the origin, and the result is reflected over the x-axis. What is the final image?',
    choices: ['$(-1, 3)$', '$(1, 3)$', '$(-1, -3)$', '$(3, -1)$'],
    answer: 2,
    solution: 'The rotation sends $(3, 1)$ to $(-1, 3)$ by the rule $(x, y) \\to (-y, x)$. The reflection over the x-axis then flips the $y$-coordinate: $(-1, 3) \\to (-1, -3)$. Doing the transformations in the stated order matters — reflecting first and rotating second lands at $(1, 3)$ instead.',
  },
  {
    q: 'A point $(a, b)$ with $a > 0$ and $b > 0$ is rotated $180^\\circ$ about the origin. In which quadrant does its image lie?',
    choices: ['Quadrant III', 'Quadrant II', 'Quadrant IV', 'Quadrant I'],
    answer: 0,
    solution: 'The point starts in Quadrant I. A $180^\\circ$ rotation sends $(a, b)$ to $(-a, -b)$, which has both coordinates negative — that is Quadrant III, diagonally opposite. A half-turn always sends a point to the quadrant across the origin from it.',
  },
  {
    q: 'A triangle with area $7$ is dilated with scale factor $k = -2$. What is the area of the image?',
    choices: ['$14$', '$28$', '$-28$', '$49$'],
    answer: 1,
    solution: 'Area scales by $k^2 = (-2)^2 = 4$, so the image area is $7 \\cdot 4 = 28$. The negative sign flips the figure to the other side of the center, but it cannot make area negative — area is always positive. The choice $14$ scales by $|k|$ only, which is how lengths scale, not areas.',
  },
  {
    q: 'A translation sends $(2, 3)$ to $(7, 1)$. Where does the same translation send $(-4, 6)$?',
    choices: ['$(-9, 8)$', '$(1, 8)$', '$(5, -2)$', '$(1, 4)$'],
    answer: 3,
    solution: 'From $(2, 3)$ to $(7, 1)$ the slide is $+5$ horizontally and $-2$ vertically. Apply the same slide: $(-4 + 5, 6 - 2) = (1, 4)$. The choice $(5, -2)$ is the slide itself rather than the image, and $(-9, 8)$ slides backwards.',
  },
  {
    q: 'Reflecting a figure over the x-axis and then over the y-axis is the same as which single transformation?',
    choices: ['a rotation of $180^\\circ$ about the origin', 'a rotation of $90^\\circ$ about the origin', 'a translation', 'a reflection over the line $y = x$'],
    answer: 0,
    solution: 'Track a point: $(x, y) \\to (x, -y) \\to (-x, -y)$. Flipping both signs is exactly the $180^\\circ$ rotation rule. It makes sense that two reflections combine into a rotation: each reflection reverses orientation, so doing two restores it — and only rotations and translations preserve orientation. Since the axes intersect, the result is a rotation, by twice the $90^\\circ$ angle between them.',
  },
  {
    q: 'What is the image of $(-2, -3)$ after a $270^\\circ$ counterclockwise rotation about the origin?',
    choices: ['$(3, -2)$', '$(2, 3)$', '$(-3, 2)$', '$(-2, 3)$'],
    answer: 2,
    solution: 'The $270^\\circ$ counterclockwise rule is $(x, y) \\to (y, -x)$: the image is $(-3, 2)$. Check by quadrants: the point starts in Quadrant III, and three counterclockwise quarter-turns (III to IV to I to II) should end in Quadrant II — and $(-3, 2)$ is in Quadrant II. ✓',
  },
  {
    q: 'A cyclist at $A(0, 4)$ must touch the straight road along the x-axis and then ride to $B(8, 6)$. What is the shortest possible total distance?',
    fig: {
      view: [-1, -7, 10, 8],
      grid: true,
      elems: [
        { t: 'seg', a: [0, 4], b: [8, -6], dash: true },
        { t: 'seg', a: [8, 6], b: [8, -6], dash: true },
        { t: 'point', p: [0, 4], label: 'A', dx: -10, dy: -4 },
        { t: 'point', p: [8, 6], label: 'B', dx: 12, dy: -4 },
        { t: 'point', p: [8, -6], label: "B'", dx: 12, dy: 4 },
      ],
    },
    choices: ['$2\\sqrt{17}$', '$2\\sqrt{41}$', '$12$', '$10$'],
    answer: 1,
    solution: 'Reflect $B(8, 6)$ over the x-axis to $B\'(8, -6)$. The shortest total distance is the straight length $AB\' = \\sqrt{8^2 + (-6 - 4)^2} = \\sqrt{64 + 100} = \\sqrt{164} = 2\\sqrt{41}$. The choice $2\\sqrt{17}$ is the direct $A$-to-$B$ distance, which never visits the road.',
  },
  {
    q: 'The point $(9, -6)$ is dilated from the origin with scale factor $\\frac{1}{3}$, and the image is then translated by $(x, y) \\to (x + 1, y + 5)$. What is the final position?',
    choices: ['$(3, -2)$', '$(10, -1)$', '$(2, -7)$', '$(4, 3)$'],
    answer: 3,
    solution: 'The dilation divides both coordinates by $3$: $(9, -6) \\to (3, -2)$. The translation then adds: $(3 + 1, -2 + 5) = (4, 3)$. The choice $(3, -2)$ stops after the dilation, and $(10, -1)$ translates the original point without ever dilating.',
  },
  {
    q: 'A figure has $90^\\circ$ rotational symmetry about its center. Which statement MUST be true?',
    choices: ['it has exactly four lines of symmetry', 'it also has $180^\\circ$ rotational symmetry', 'it must be a square', 'it must be a regular polygon'],
    answer: 1,
    solution: 'If turning $90^\\circ$ maps the figure onto itself, then doing that twice — a $180^\\circ$ turn — must map it onto itself as well. The other statements can fail: a pinwheel shape has $90^\\circ$ rotational symmetry but no mirror lines at all, and it is certainly not a square or a regular polygon.',
  },
  {
    q: 'The point $(4, 1)$ is reflected over the line $y = x$, and the result is rotated $90^\\circ$ counterclockwise about the origin. What is the final image?',
    choices: ['$(-4, 1)$', '$(4, -1)$', '$(1, 4)$', '$(-1, -4)$'],
    answer: 0,
    solution: 'The reflection over $y = x$ trades coordinates: $(4, 1) \\to (1, 4)$. The rotation then applies $(x, y) \\to (-y, x)$: $(1, 4) \\to (-4, 1)$. The choice $(4, -1)$ performs the two steps in the opposite order — with transformations, order usually matters.',
  },
  {
    q: 'A dilation triples the AREA of every figure. What is its (positive) scale factor?',
    choices: ['$3$', '$\\frac{3}{2}$', '$\\sqrt{3}$', '$9$'],
    answer: 2,
    solution: 'Area scales by $k^2$, so we need $k^2 = 3$, giving $k = \\sqrt{3}$. The choice $3$ would multiply areas by $9$, and $9$ would multiply them by $81$. Going from an area ratio back to a length ratio always means taking a square root.',
  },
  {
    q: 'Reflecting over the line $x = 2$ and then over the line $x = 7$ is the same as which single translation?',
    choices: ['$(x, y) \\to (x + 5, y)$', '$(x, y) \\to (x - 10, y)$', '$(x, y) \\to (x + 9, y)$', '$(x, y) \\to (x + 10, y)$'],
    answer: 3,
    solution: 'Two reflections over parallel lines make a translation of TWICE the distance between them, in the direction from the first mirror to the second. The mirrors are $7 - 2 = 5$ apart, so the translation is $10$ to the right: $(x, y) \\to (x + 10, y)$. Test a point to be sure: $(0, 0) \\to (4, 0) \\to (10, 0)$. ✓ The choice $(x + 5, y)$ forgets the doubling.',
  },
]

const worksheet = [
  {
    q: 'Find the image of the point $(-3, 5)$ under the translation $(x, y) \\to (x + 6, y - 4)$.',
    answer: '$(3, 1)$',
    solution: 'Add $6$ to the $x$-coordinate and subtract $4$ from the $y$-coordinate: $(-3 + 6, 5 - 4) = (3, 1)$.',
  },
  {
    q: 'Find the image of the point $(2, 6)$ after a $90^\\circ$ counterclockwise rotation about the origin.',
    fig: {
      view: [-8, -1, 4, 8],
      grid: true,
      elems: [
        { t: 'seg', a: [0, 0], b: [2, 6], dash: true },
        { t: 'point', p: [2, 6], label: 'P', dx: 12, dy: 0 },
      ],
    },
    answer: '$(-6, 2)$',
    solution: 'Use the rule $(x, y) \\to (-y, x)$: the image is $(-6, 2)$. As a check, the point moves from Quadrant I to Quadrant II, exactly what a quarter-turn counterclockwise should do, and both points are $\\sqrt{40}$ from the origin.',
  },
  {
    q: 'Find the image of the point $(-4, 7)$ after a reflection over the y-axis.',
    answer: '$(4, 7)$',
    solution: 'A reflection over the y-axis flips only the $x$-coordinate: $(-4, 7) \\to (4, 7)$. The height is unchanged, and the y-axis is exactly halfway between $x = -4$ and $x = 4$.',
  },
  {
    q: 'A translation sends $(1, -2)$ to $(-3, 4)$. Write the coordinate rule for this translation.',
    answer: '$(x, y) \\to (x - 4, y + 6)$',
    solution: 'Subtract to find the slide: horizontally $-3 - 1 = -4$, vertically $4 - (-2) = 6$. So every point moves $4$ left and $6$ up: $(x, y) \\to (x - 4, y + 6)$.',
  },
  {
    q: 'Find the image of the point $(-2, 5)$ under a dilation centered at the origin with scale factor $3$.',
    answer: '$(-6, 15)$',
    solution: 'Multiply both coordinates by $3$: $(-2 \\cdot 3, 5 \\cdot 3) = (-6, 15)$. The image lies on the same ray from the origin, three times as far out.',
  },
  {
    q: 'How many lines of symmetry does a regular hexagon have, and what is its order of rotational symmetry?',
    answer: '$6$ lines of symmetry; rotational symmetry of order $6$',
    solution: 'A regular hexagon has $6$ mirror lines: $3$ through opposite vertices and $3$ through midpoints of opposite sides. Its smallest self-matching rotation is $\\frac{360^\\circ}{6} = 60^\\circ$, and the rotations $60^\\circ, 120^\\circ, \\ldots, 360^\\circ$ give order $6$. For every regular $n$-gon, both counts equal $n$.',
  },
  {
    q: 'The point $(2, -3)$ is reflected over the line $y = x$, and the result is reflected over the x-axis. Find the final image.',
    answer: '$(-3, -2)$',
    solution: 'Over $y = x$ the coordinates trade places: $(2, -3) \\to (-3, 2)$. Over the x-axis the $y$-coordinate flips: $(-3, 2) \\to (-3, -2)$. Two reflections over these intersecting lines amount to a rotation about the origin — orientation is restored, but the point has swung around.',
  },
  {
    q: 'A camper at $A(2, 3)$ must walk to the river along the x-axis and then to a tent at $B(8, 5)$. Find the shortest possible total distance.',
    fig: {
      view: [-1, -6, 11, 6],
      grid: true,
      elems: [
        { t: 'seg', a: [2, 3], b: [8, -5], dash: true },
        { t: 'seg', a: [8, 5], b: [8, -5], dash: true },
        { t: 'point', p: [2, 3], label: 'A', dx: -10, dy: -4 },
        { t: 'point', p: [8, 5], label: 'B', dx: 12, dy: -4 },
        { t: 'point', p: [8, -5], label: "B'", dx: 12, dy: 4 },
      ],
    },
    answer: '$10$',
    solution: 'Reflect $B(8, 5)$ over the x-axis to get $B\'(8, -5)$. Any river-touching path to $B$ has the same length as the matching path to $B\'$, so the minimum is the straight distance $AB\' = \\sqrt{(8 - 2)^2 + (-5 - 3)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$. A $6$-$8$-$10$ right triangle was hiding in the problem!',
  },
  {
    q: 'A dilation carries a square of area $9$ to a square of area $25$. What is the (positive) scale factor?',
    answer: '$k = \\frac{5}{3}$',
    solution: 'Areas scale by $k^2$, so $k^2 = \\frac{25}{9}$ and $k = \\frac{5}{3}$. As a check with lengths: the first square has side $3$ and the second has side $5$, and $\\frac{5}{3}$ carries one to the other.',
  },
  {
    q: 'The point $(3, -2)$ is rotated $180^\\circ$ about the origin, and the result is translated by $(x, y) \\to (x + 4, y + 1)$. Find the final image.',
    answer: '$(1, 3)$',
    solution: 'The $180^\\circ$ rotation flips both signs: $(3, -2) \\to (-3, 2)$. The translation then adds: $(-3 + 4, 2 + 1) = (1, 3)$. Keeping the two steps in order is the whole game — translating first and rotating second would land at $(-7, 1)$ instead.',
  },
]

export default {
  id: 'intro-geometry-ch16',
  book: 'intro-geometry',
  number: 16,
  title: 'The More Things Change...',
  intro:
    'Slide it, spin it, flip it, resize it — this chapter is about transformations, the ways a figure can move while staying recognizably itself. You will learn exact coordinate rules for translations, rotations, reflections, and dilations, and discover what each one preserves. Best of all, you will see how transforming a figure can transform a hard problem into an easy one.',
  sections: [s161, s162, s163, s164, s165],
  challenge,
  worksheet,
}
