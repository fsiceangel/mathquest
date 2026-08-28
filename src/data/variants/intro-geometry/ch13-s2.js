// Introduction to Geometry chapter 13 — variations for section 13.2 (Power of
// a Point Problems). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is worked twice along routes that share no steps: once
//    through the power-of-a-point product the problem is about, and once
//    through an independent picture (the similar triangles that prove the rule,
//    a right triangle on the radius, or the sum-and-difference identity that
//    turns a product plus a gap into two lengths).
//  - Every figure is built from the numbers it shows. Chord crossing points are
//    solved exactly, tangent points are placed at the true foot of the tangent
//    from P, and each circle's center is computed so that all four labeled
//    points lie on it to four decimals.
//  - Each distractor is one named mistake, named in CAPS at the end.

const s132 = [
  // s1 — two chords crossing inside: AP * PB = PC * PD, solve for the missing piece.
  [
    {
      q: 'Two straight cuts across a round pizza cross each other at $P$. One cut runs from $A$ to $B$ with $AP = x$ and $PB = 12$; the other runs from $C$ to $D$ with $PC = 6$ and $PD = 8$. Solve for $x$.',
      fig: {
        view: [-5.6, -9.8, 13.6, 9.2],
        elems: [
          { t: 'circle', c: [4, -0.3917], r: 8.0096 },
          { t: 'seg', a: [-4, 0], b: [12, 0] },
          { t: 'seg', a: [-2.0521, -5.6382], b: [2.7362, 7.5175] },
          { t: 'point', p: [-4, 0], label: 'A', dx: -10, dy: 0 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 0 },
          { t: 'point', p: [-2.0521, -5.6382], label: 'C', dx: -10, dy: 8 },
          { t: 'point', p: [2.7362, 7.5175], label: 'D', dx: 8, dy: -8 },
          { t: 'point', p: [0, 0], label: 'P', dx: 8, dy: 13 },
          { t: 'label', p: [-2, 0], text: 'x', dx: 0, dy: -10 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: -10 },
          { t: 'label', p: [-1.0261, -2.8191], text: '6', dx: 14, dy: 0 },
          { t: 'label', p: [1.3681, 3.7588], text: '8', dx: -12, dy: 0 },
        ],
      },
      choices: ['$4$', '$48$', '$8$', '$2$'],
      answer: 0,
      solution:
        'Route one, the power of the point: two chords through the same interior point break into pieces whose products agree, so $AP \\cdot PB = PC \\cdot PD$. That reads $x \\cdot 12 = 6 \\cdot 8 = 48$, so $x = 48 \\div 12 = 4$ ✓. Check a second, independent way, by rebuilding the similar triangles the rule is made of: join $A$ to $C$ and $B$ to $D$. The inscribed angles $\\angle CAB$ and $\\angle CDB$ ride on the same arc $CB$, so they are equal, and the angles at $P$ are vertical angles, so $\\triangle PAC \\sim \\triangle PDB$. Matching sides give $\\frac{AP}{PD} = \\frac{PC}{PB}$, that is $\\frac{x}{8} = \\frac{6}{12} = \\frac{1}{2}$, and a half of $8$ is $4$ ✓. (The choice $48$ is STOPPING AT THE POWER and never dividing by $PB$ ✗; the choice $8$ is DIVIDING THE POWER BY $PC$ INSTEAD OF $PB$, $48 \\div 6$ ✗; the choice $2$ is ADDING AND SUBTRACTING PIECES INSTEAD OF MULTIPLYING THEM, $6 + 8 - 12$ ✗.)',
    },
    {
      q: 'Two straight support straps run underneath a round trampoline and cross at $P$. One strap meets the rim at $A$ and $B$ with $AP = x$ and $PB = 10$; the other meets the rim at $C$ and $D$ with $PC = 4$ and $PD = 15$. Solve for $x$.',
      fig: {
        view: [-9, -5.8, 13, 16.1],
        elems: [
          { t: 'circle', c: [2, 5.1581], r: 9.5187 },
          { t: 'seg', a: [-6, 0], b: [10, 0] },
          { t: 'seg', a: [-1.0353, -3.8637], b: [3.8823, 14.4889] },
          { t: 'point', p: [-6, 0], label: 'A', dx: -10, dy: 0 },
          { t: 'point', p: [10, 0], label: 'B', dx: 10, dy: 0 },
          { t: 'point', p: [-1.0353, -3.8637], label: 'C', dx: -10, dy: 8 },
          { t: 'point', p: [3.8823, 14.4889], label: 'D', dx: 8, dy: -8 },
          { t: 'point', p: [0, 0], label: 'P', dx: 9, dy: 13 },
          { t: 'label', p: [-3, 0], text: 'x', dx: 0, dy: -10 },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: -10 },
          { t: 'label', p: [-0.5176, -1.9319], text: '4', dx: 14, dy: 0 },
          { t: 'label', p: [1.9412, 7.2445], text: '15', dx: -14, dy: 0 },
        ],
      },
      choices: ['$60$', '$15$', '$9$', '$6$'],
      answer: 3,
      solution:
        'Route one, the power of the point: the two chords cross at $P$, so $AP \\cdot PB = PC \\cdot PD$, which is $x \\cdot 10 = 4 \\cdot 15 = 60$. Dividing, $x = 60 \\div 10 = 6$ ✓. Check a second, independent way, through the similar triangles underneath the rule: draw $AC$ and $BD$. The inscribed angles $\\angle CAB$ and $\\angle CDB$ cut the same arc $CB$ and so are equal, and the crossing at $P$ makes vertical angles, giving $\\triangle PAC \\sim \\triangle PDB$. Corresponding sides say $\\frac{AP}{PD} = \\frac{PC}{PB}$, so $\\frac{x}{15} = \\frac{4}{10} = \\frac{2}{5}$, and two fifths of $15$ is $6$ ✓. (The choice $60$ is STOPPING AT THE POWER without dividing by $PB$ ✗; the choice $15$ is DIVIDING THE POWER BY $PC$ INSTEAD OF $PB$, $60 \\div 4$ ✗; the choice $9$ is ADDING AND SUBTRACTING PIECES INSTEAD OF MULTIPLYING THEM, $4 + 15 - 10$ ✗.)',
    },
    {
      q: 'Two straight tape lines are stuck across a round ice rink and cross at $P$. One line touches the boards at $A$ and $B$ with $AP = x$ and $PB = 9$; the other touches at $C$ and $D$ with $PC = 6$ and $PD = 12$. Solve for $x$.',
      fig: {
        view: [-10, -7.4, 11, 13.5],
        elems: [
          { t: 'circle', c: [0.5, 3.077], r: 9.0398 },
          { t: 'seg', a: [-8, 0], b: [9, 0] },
          { t: 'seg', a: [-2.5357, -5.4378], b: [5.0714, 10.8757] },
          { t: 'point', p: [-8, 0], label: 'A', dx: -10, dy: 0 },
          { t: 'point', p: [9, 0], label: 'B', dx: 10, dy: 0 },
          { t: 'point', p: [-2.5357, -5.4378], label: 'C', dx: -10, dy: 8 },
          { t: 'point', p: [5.0714, 10.8757], label: 'D', dx: 8, dy: -8 },
          { t: 'point', p: [0, 0], label: 'P', dx: 9, dy: 13 },
          { t: 'label', p: [-4, 0], text: 'x', dx: 0, dy: -10 },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: -10 },
          { t: 'label', p: [-1.2679, -2.7189], text: '6', dx: 14, dy: 0 },
          { t: 'label', p: [2.5357, 5.4378], text: '12', dx: -14, dy: 0 },
        ],
      },
      choices: ['$72$', '$8$', '$12$', '$9$'],
      answer: 1,
      solution:
        'Route one, the power of the point: chords $\\overline{AB}$ and $\\overline{CD}$ meet at $P$, so $AP \\cdot PB = PC \\cdot PD$, giving $x \\cdot 9 = 6 \\cdot 12 = 72$ and $x = 72 \\div 9 = 8$ ✓. Check a second, independent way, from the similar triangles that produce the rule: connect $A$ to $C$ and $B$ to $D$. Inscribed angles $\\angle CAB$ and $\\angle CDB$ stand on the same arc $CB$, so they match, and the vertical angles at $P$ match, so $\\triangle PAC \\sim \\triangle PDB$. Then $\\frac{AP}{PD} = \\frac{PC}{PB}$, that is $\\frac{x}{12} = \\frac{6}{9} = \\frac{2}{3}$, and two thirds of $12$ is $8$ ✓. (The choice $72$ is STOPPING AT THE POWER and skipping the division ✗; the choice $12$ is DIVIDING THE POWER BY $PC$ INSTEAD OF $PB$, $72 \\div 6$ ✗; the choice $9$ is ADDING AND SUBTRACTING PIECES INSTEAD OF MULTIPLYING THEM, $6 + 12 - 9$ ✗.)',
    },
  ],
  // s2 — chord perpendicular to a diameter: the chord is 2 * sqrt(AP * PB).
  [
    {
      q: 'A circular porthole has a straight brass bar $\\overline{CD}$ fixed across it, meeting the vertical diameter $\\overline{AB}$ at a right angle at $P$. If $AP = 3$ inches and $PB = 27$ inches, how long is the bar $\\overline{CD}$?',
      fig: {
        view: [-17, -17, 17, 17],
        elems: [
          { t: 'circle', c: [0, 0], r: 15 },
          { t: 'seg', a: [0, 15], b: [0, -15] },
          { t: 'seg', a: [-9, 12], b: [9, 12] },
          { t: 'right', at: [0, 12], from: [9, 12], to: [0, 15] },
          { t: 'point', p: [0, 15], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [0, -15], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [-9, 12], label: 'C', dx: -10, dy: -6 },
          { t: 'point', p: [9, 12], label: 'D', dx: 10, dy: -6 },
          { t: 'point', p: [0, 12], label: 'P', dx: -10, dy: 12 },
          { t: 'label', p: [0, 13.5], text: '3', dx: 10, dy: 0 },
          { t: 'label', p: [0, -1.5], text: '27', dx: 13, dy: 0 },
          { t: 'label', p: [5, 12], text: '?', dx: 0, dy: -10 },
        ],
      },
      choices: ['$9$', '$18$', '$81$', '$15$'],
      answer: 1,
      solution:
        'Route one, the power of the point: a diameter that crosses a chord at a right angle cuts it in half, so $PC = PD$. The power at $P$ gives $PC \\cdot PD = AP \\cdot PB = 3 \\cdot 27 = 81$, so $PC^2 = 81$ and $PC = 9$. The whole bar is twice that: $CD = 18$ inches ✓. Check a second, independent way, with a right triangle on the radius: the diameter is $3 + 27 = 30$, so the radius is $15$ and the center sits $15 - 3 = 12$ above the bar. Then half the bar is $\\sqrt{15^2 - 12^2} = \\sqrt{225 - 144} = \\sqrt{81} = 9$, and the full bar is $18$ ✓. (The choice $9$ is STOPPING AT THE HALF-CHORD, the piece from $P$ out to one end ✗; the choice $81$ is FORGETTING THE SQUARE ROOT and reporting the power itself ✗; the choice $15$ is REPORTING THE RADIUS, which the second route computed on the way but is not the bar ✗.)',
    },
    {
      q: 'A round drum head has a straight tension rod $\\overline{CD}$ stretched across it, crossing the vertical diameter $\\overline{AB}$ at a right angle at $P$. If $AP = 9$ centimeters and $PB = 16$ centimeters, how long is the rod $\\overline{CD}$?',
      fig: {
        view: [-14.5, -14.5, 14.5, 14.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 12.5 },
          { t: 'seg', a: [0, 12.5], b: [0, -12.5] },
          { t: 'seg', a: [-12, 3.5], b: [12, 3.5] },
          { t: 'right', at: [0, 3.5], from: [12, 3.5], to: [0, 12.5] },
          { t: 'point', p: [0, 12.5], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [0, -12.5], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [-12, 3.5], label: 'C', dx: -10, dy: -6 },
          { t: 'point', p: [12, 3.5], label: 'D', dx: 10, dy: -6 },
          { t: 'point', p: [0, 3.5], label: 'P', dx: -10, dy: 12 },
          { t: 'label', p: [0, 8], text: '9', dx: 10, dy: 0 },
          { t: 'label', p: [0, -4.5], text: '16', dx: 13, dy: 0 },
          { t: 'label', p: [6, 3.5], text: '?', dx: 0, dy: -10 },
        ],
      },
      choices: ['$12$', '$144$', '$24$', '$25$'],
      answer: 2,
      solution:
        'Route one, the power of the point: the diameter meets the rod at a right angle, so it bisects the rod and $PC = PD$. The power at $P$ says $PC \\cdot PD = AP \\cdot PB = 9 \\cdot 16 = 144$, so $PC = \\sqrt{144} = 12$ and the whole rod is $CD = 24$ centimeters ✓. Check a second, independent way, with a right triangle on the radius: the diameter is $9 + 16 = 25$, so the radius is $12.5$ and the center lies $12.5 - 9 = 3.5$ above the rod. Half the rod is then $\\sqrt{12.5^2 - 3.5^2} = \\sqrt{156.25 - 12.25} = \\sqrt{144} = 12$, and doubling gives $24$ ✓. (The choice $12$ is STOPPING AT THE HALF-CHORD ✗; the choice $144$ is FORGETTING THE SQUARE ROOT and handing back the power ✗; the choice $25$ is REPORTING THE DIAMETER, $9 + 16$, instead of the rod ✗.)',
    },
    {
      q: 'A circular vent grille has one straight slat $\\overline{CD}$ running across it, meeting the vertical diameter $\\overline{AB}$ at a right angle at $P$. If $AP = 2$ and $PB = 50$, how long is the slat $\\overline{CD}$?',
      fig: {
        view: [-29, -29, 29, 29],
        elems: [
          { t: 'circle', c: [0, 0], r: 26 },
          { t: 'seg', a: [0, 26], b: [0, -26] },
          { t: 'seg', a: [-10, 24], b: [10, 24] },
          { t: 'right', at: [0, 24], from: [10, 24], to: [0, 26] },
          { t: 'point', p: [0, 26], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [0, -26], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [-10, 24], label: 'C', dx: -10, dy: -6 },
          { t: 'point', p: [10, 24], label: 'D', dx: 10, dy: -6 },
          { t: 'point', p: [0, 24], label: 'P', dx: -10, dy: 12 },
          { t: 'label', p: [0, 25], text: '2', dx: 10, dy: 0 },
          { t: 'label', p: [0, -1], text: '50', dx: 13, dy: 0 },
          { t: 'label', p: [5.5, 24], text: '?', dx: 0, dy: -10 },
        ],
      },
      choices: ['$10$', '$100$', '$26$', '$20$'],
      answer: 3,
      solution:
        'Route one, the power of the point: a diameter perpendicular to a chord bisects it, so $PC = PD$, and the power at $P$ gives $PC \\cdot PD = AP \\cdot PB = 2 \\cdot 50 = 100$. Then $PC = \\sqrt{100} = 10$ and the whole slat is $CD = 20$ ✓. Check a second, independent way, with a right triangle on the radius: the diameter measures $2 + 50 = 52$, so the radius is $26$ and the center sits $26 - 2 = 24$ from the slat. Half the slat is $\\sqrt{26^2 - 24^2} = \\sqrt{676 - 576} = \\sqrt{100} = 10$, so the slat is $20$ ✓. (The choice $10$ is STOPPING AT THE HALF-CHORD ✗; the choice $100$ is FORGETTING THE SQUARE ROOT ✗; the choice $26$ is REPORTING THE RADIUS instead of the slat ✗.)',
    },
  ],
  // s3 — P is the midpoint of one chord; the other chord gives a quadratic.
  [
    {
      q: 'In a circular herb garden, a straight brick path $\\overline{CD}$ of length $12$ crosses a second straight path $\\overline{AB}$ at $P$, and $P$ is exactly the midpoint of $\\overline{CD}$. Along the second path, $AP = x$ and $PB = x + 9$. Find $x$.',
      fig: {
        view: [-4.6, -10.5, 13.6, 7.6],
        elems: [
          { t: 'circle', c: [4.5, -1.4621], r: 7.6412 },
          { t: 'seg', a: [-3, 0], b: [12, 0] },
          { t: 'seg', a: [-1.8541, -5.7063], b: [1.8541, 5.7063] },
          { t: 'tick', a: [-1.8541, -5.7063], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [1.8541, 5.7063], n: 1 },
          { t: 'point', p: [-3, 0], label: 'A', dx: -10, dy: 0 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 0 },
          { t: 'point', p: [-1.8541, -5.7063], label: 'C', dx: -10, dy: 8 },
          { t: 'point', p: [1.8541, 5.7063], label: 'D', dx: 8, dy: -8 },
          { t: 'point', p: [0, 0], label: 'P', dx: 8, dy: 13 },
          { t: 'label', p: [-1.5, 0], text: 'x', dx: 0, dy: -10 },
          { t: 'label', p: [6, 0], text: 'x + 9', dx: 0, dy: -10 },
          { t: 'label', p: [-0.9271, -2.8532], text: '6', dx: 14, dy: 0 },
          { t: 'label', p: [0.9271, 2.8532], text: '6', dx: -12, dy: 0 },
        ],
      },
      choices: ['$12$', '$6$', '$3$', '$36$'],
      answer: 2,
      solution:
        'Route one, the power of the point: $P$ is the midpoint of a chord of length $12$, so $PC = PD = 6$ and the power at $P$ is $6 \\cdot 6 = 36$. The other path must match it: $x(x + 9) = 36$, so $x^2 + 9x - 36 = 0$, which factors as $(x + 12)(x - 3) = 0$. A length is positive, so $x = 3$ ✓. Check a second, independent way, without factoring: the two pieces multiply to $36$ and differ by $9$, and for any two numbers $(\\text{sum})^2 = (\\text{difference})^2 + 4(\\text{product})$. So the sum is $\\sqrt{9^2 + 4 \\cdot 36} = \\sqrt{81 + 144} = \\sqrt{225} = 15$, and the smaller piece is $\\frac{15 - 9}{2} = 3$ ✓. (The choice $12$ is REPORTING $PB$, the far piece $x + 9$, instead of $x$ ✗; the choice $6$ is COPYING THE HALF-CHORD, which measures the other path ✗; the choice $36$ is STOPPING AT THE POWER, the product rather than one factor ✗.)',
    },
    {
      q: 'Two straight plank walkways cross a round koi pond and meet at $P$. The walkway $\\overline{CD}$ is $20$ feet long and $P$ is its midpoint; the other walkway meets the edge at $A$ and $B$ with $AP = x$ and $PB = x + 15$. Find $x$.',
      fig: {
        view: [-6.7, -17, 21.7, 11.5],
        elems: [
          { t: 'circle', c: [7.5, -2.7298], r: 12.7946 },
          { t: 'seg', a: [-5, 0], b: [20, 0] },
          { t: 'seg', a: [-3.4202, -9.3969], b: [3.4202, 9.3969] },
          { t: 'tick', a: [-3.4202, -9.3969], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [3.4202, 9.3969], n: 1 },
          { t: 'point', p: [-5, 0], label: 'A', dx: -10, dy: 0 },
          { t: 'point', p: [20, 0], label: 'B', dx: 10, dy: 0 },
          { t: 'point', p: [-3.4202, -9.3969], label: 'C', dx: -10, dy: 8 },
          { t: 'point', p: [3.4202, 9.3969], label: 'D', dx: 8, dy: -8 },
          { t: 'point', p: [0, 0], label: 'P', dx: 8, dy: 13 },
          { t: 'label', p: [-2.5, 0], text: 'x', dx: 0, dy: -10 },
          { t: 'label', p: [10, 0], text: 'x + 15', dx: 0, dy: -10 },
          { t: 'label', p: [-1.7101, -4.6985], text: '10', dx: 15, dy: 0 },
          { t: 'label', p: [1.7101, 4.6985], text: '10', dx: -14, dy: 0 },
        ],
      },
      choices: ['$20$', '$10$', '$100$', '$5$'],
      answer: 3,
      solution:
        'Route one, the power of the point: $P$ is the midpoint of a $20$-foot chord, so $PC = PD = 10$ and the power at $P$ is $10 \\cdot 10 = 100$. The other walkway obeys the same number: $x(x + 15) = 100$, so $x^2 + 15x - 100 = 0$, which factors as $(x + 20)(x - 5) = 0$, and the positive root is $x = 5$ ✓. Check a second, independent way, with sums and differences: the two pieces multiply to $100$ and differ by $15$, and $(\\text{sum})^2 = (\\text{difference})^2 + 4(\\text{product}) = 225 + 400 = 625$, so the pieces add to $25$. The smaller one is $\\frac{25 - 15}{2} = 5$ ✓. (The choice $20$ is REPORTING $PB$, the far piece, instead of $x$ ✗; the choice $10$ is COPYING THE HALF-CHORD from the other walkway ✗; the choice $100$ is STOPPING AT THE POWER instead of splitting it into factors ✗.)',
    },
    {
      q: 'A circular play parachute has two straight ribbons sewn across it, crossing at $P$. The ribbon $\\overline{CD}$ is $28$ inches long and $P$ is its midpoint; the other ribbon reaches the edge at $A$ and $B$ with $AP = x$ and $PB = x + 21$. Find $x$.',
      fig: {
        view: [-9, -23.7, 30, 15.2],
        elems: [
          { t: 'circle', c: [10.5, -4.2423], r: 18.0069 },
          { t: 'seg', a: [-7, 0], b: [28, 0] },
          { t: 'seg', a: [-5.2445, -12.9806], b: [5.2445, 12.9806] },
          { t: 'tick', a: [-5.2445, -12.9806], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [5.2445, 12.9806], n: 1 },
          { t: 'point', p: [-7, 0], label: 'A', dx: -10, dy: 0 },
          { t: 'point', p: [28, 0], label: 'B', dx: 10, dy: 0 },
          { t: 'point', p: [-5.2445, -12.9806], label: 'C', dx: -10, dy: 8 },
          { t: 'point', p: [5.2445, 12.9806], label: 'D', dx: 8, dy: -8 },
          { t: 'point', p: [0, 0], label: 'P', dx: 8, dy: 13 },
          { t: 'label', p: [-3.5, 0], text: 'x', dx: 0, dy: -10 },
          { t: 'label', p: [14, 0], text: 'x + 21', dx: 0, dy: -10 },
          { t: 'label', p: [-2.6223, -6.4903], text: '14', dx: 15, dy: 0 },
          { t: 'label', p: [2.6223, 6.4903], text: '14', dx: -14, dy: 0 },
        ],
      },
      choices: ['$28$', '$7$', '$14$', '$196$'],
      answer: 1,
      solution:
        'Route one, the power of the point: $P$ is the midpoint of a $28$-inch chord, so $PC = PD = 14$ and the power at $P$ is $14 \\cdot 14 = 196$. The other ribbon must give the same product: $x(x + 21) = 196$, so $x^2 + 21x - 196 = 0$, which factors as $(x + 28)(x - 7) = 0$, and the positive root is $x = 7$ ✓. Check a second, independent way, with sums and differences: the two pieces multiply to $196$ and differ by $21$, and $(\\text{sum})^2 = 21^2 + 4 \\cdot 196 = 441 + 784 = 1225$, so they add to $35$. The smaller piece is $\\frac{35 - 21}{2} = 7$ ✓. (The choice $28$ is REPORTING $PB$, the far piece, instead of $x$ ✗; the choice $14$ is COPYING THE HALF-CHORD of the other ribbon ✗; the choice $196$ is STOPPING AT THE POWER rather than splitting it into two factors ✗.)',
    },
  ],
  // s4 — tangent length t and secant chord c: PA(PA + c) = t^2.
  [
    {
      q: 'A gardener stretches a string from a stake at $P$ so that it just grazes a circular hedge, touching at $T$, and the string measures $6$ meters. A straight walkway from the same stake cuts through the hedge, entering at $A$ and leaving at $B$, and the part inside, $\\overline{AB}$, measures $16$ meters. Find $PA$.',
      fig: {
        view: [-1.8, -5.6, 21.6, 17.6],
        elems: [
          { t: 'circle', c: [10, 6], r: 10 },
          { t: 'seg', a: [0, 0], b: [18, 0] },
          { t: 'seg', a: [0, 0], b: [0, 6] },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 6 },
          { t: 'point', p: [2, 0], label: 'A', dx: 0, dy: 14 },
          { t: 'point', p: [18, 0], label: 'B', dx: 10, dy: 6 },
          { t: 'point', p: [0, 6], label: 'T', dx: -6, dy: -10 },
          { t: 'label', p: [1, 0], text: 'x', dx: 0, dy: 14 },
          { t: 'label', p: [10, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [0, 3], text: '6', dx: -12, dy: 0 },
        ],
      },
      choices: ['$18$', '$36$', '$10$', '$2$'],
      answer: 3,
      solution:
        'Route one, the power of the point: write $PA = x$, so the whole walkway from the stake is $PB = x + 16$. A tangent is a secant whose two crossings have merged, so $PT^2 = PA \\cdot PB$: that is $x(x + 16) = 6^2 = 36$. Rearranged, $x^2 + 16x - 36 = 0$, which factors as $(x + 18)(x - 2) = 0$, and a length is positive, so $PA = 2$ meters ✓. Check a second, independent way, without factoring: $PA$ and $PB$ multiply to $36$ and differ by $16$, and for any two numbers $(\\text{sum})^2 = (\\text{difference})^2 + 4(\\text{product})$. So their sum is $\\sqrt{16^2 + 4 \\cdot 36} = \\sqrt{256 + 144} = \\sqrt{400} = 20$, and the nearer piece is $\\frac{20 - 16}{2} = 2$ ✓. (The choice $18$ is REPORTING THE WHOLE SECANT $PB$ instead of the outside piece ✗; the choice $36$ is STOPPING AT $PT^2$, the power itself ✗; the choice $10$ is SUBTRACTING THE TANGENT FROM THE CHORD, $16 - 6$, as though these lengths added and subtracted ✗.)',
    },
    {
      q: 'A hose is pulled straight from a tap at $P$ until it just touches the rim of a round wading pool at $T$, using $22$ feet of hose. A straight rope from the same tap crosses the pool, meeting the rim at $A$ then $B$, and the part over the water, $\\overline{AB}$, is $33$ feet. Find $PA$.',
      fig: {
        view: [-4, -8.8, 53, 42],
        elems: [
          { t: 'circle', c: [27.5, 16.5], r: 23.3345 },
          { t: 'seg', a: [0, 0], b: [44, 0] },
          { t: 'seg', a: [0, 0], b: [4.7052, 21.492] },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 0 },
          { t: 'point', p: [11, 0], label: 'A', dx: 0, dy: 14 },
          { t: 'point', p: [44, 0], label: 'B', dx: 10, dy: 6 },
          { t: 'point', p: [4.7052, 21.492], label: 'T', dx: -10, dy: -8 },
          { t: 'label', p: [5.5, 0], text: 'x', dx: 0, dy: 14 },
          { t: 'label', p: [27.5, 0], text: '33', dx: 0, dy: 14 },
          { t: 'label', p: [2.3526, 10.746], text: '22', dx: -14, dy: 0 },
        ],
      },
      choices: ['$11$', '$44$', '$484$', '$55$'],
      answer: 0,
      solution:
        'Route one, the power of the point: let $PA = x$, so the whole rope from the tap to the far rim is $PB = x + 33$. The tangent gives $PT^2 = PA \\cdot PB$, so $x(x + 33) = 22^2 = 484$. That is $x^2 + 33x - 484 = 0$, which factors as $(x + 44)(x - 11) = 0$, and the positive root is $PA = 11$ feet ✓. Check a second, independent way, without factoring: $PA$ and $PB$ have product $484$ and difference $33$, and $(\\text{sum})^2 = (\\text{difference})^2 + 4(\\text{product}) = 1089 + 1936 = 3025$, so they add to $55$. The nearer piece is $\\frac{55 - 33}{2} = 11$ ✓. (The choice $44$ is REPORTING THE WHOLE SECANT $PB$ ✗; the choice $484$ is STOPPING AT $PT^2$, the power ✗; the choice $55$ is REPORTING THE SUM of the two pieces, which route two works out along the way but is not $PA$ ✗.)',
    },
    {
      q: 'A laser sight at $P$ sends one beam that just skims the wall of a circular fountain basin at $T$, travelling $12$ inches to the touch point. A second beam from $P$ crosses the basin, meeting the wall at $A$ then $B$, and the crossing chord $\\overline{AB}$ is $18$ inches. Find $PA$.',
      fig: {
        view: [-2, -5.8, 28.6, 21.6],
        elems: [
          { t: 'circle', c: [15, 8], r: 12.0416 },
          { t: 'seg', a: [0, 0], b: [24, 0] },
          { t: 'seg', a: [0, 0], b: [3.4741, 11.4861] },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 0 },
          { t: 'point', p: [6, 0], label: 'A', dx: 0, dy: 14 },
          { t: 'point', p: [24, 0], label: 'B', dx: 10, dy: 6 },
          { t: 'point', p: [3.4741, 11.4861], label: 'T', dx: -8, dy: -8 },
          { t: 'label', p: [3, 0], text: 'x', dx: 0, dy: 14 },
          { t: 'label', p: [15, 0], text: '18', dx: 0, dy: 14 },
          { t: 'label', p: [1.737, 5.743], text: '12', dx: -14, dy: 0 },
        ],
      },
      choices: ['$24$', '$144$', '$6$', '$8$'],
      answer: 2,
      solution:
        'Route one, the power of the point: put $PA = x$, so the whole second beam is $PB = x + 18$. The tangent beam gives $PT^2 = PA \\cdot PB$, so $x(x + 18) = 12^2 = 144$. Rearranged, $x^2 + 18x - 144 = 0$, which factors as $(x + 24)(x - 6) = 0$, so $PA = 6$ inches ✓. Check a second, independent way, without factoring: $PA$ and $PB$ multiply to $144$ and differ by $18$, and $(\\text{sum})^2 = 18^2 + 4 \\cdot 144 = 324 + 576 = 900$, so their sum is $30$. The nearer piece is $\\frac{30 - 18}{2} = 6$ ✓. (The choice $24$ is REPORTING THE WHOLE SECANT $PB$ ✗; the choice $144$ is STOPPING AT $PT^2$ ✗; the choice $8$ is DIVIDING $PT^2$ BY THE CHORD, $144 \\div 18$, which treats $AB$ as though it started at $P$ ✗.)',
    },
  ],
  // s5 — chord perpendicular to a diameter, shorter piece known: recover the radius.
  [
    {
      q: 'A round dinner plate is measured by laying a straight ruler across it. The ruler marks a chord $\\overline{CD}$ of length $24$ centimeters that meets a diameter $\\overline{AB}$ at a right angle at $P$, cutting the diameter into two pieces, the shorter one being $PB = 6$ centimeters. What is the radius of the plate?',
      fig: {
        view: [-17, -17, 17, 17],
        elems: [
          { t: 'circle', c: [0, 0], r: 15 },
          { t: 'seg', a: [-15, 0], b: [15, 0] },
          { t: 'seg', a: [9, 12], b: [9, -12] },
          { t: 'right', at: [9, 0], from: [9, 12], to: [15, 0] },
          { t: 'point', p: [-15, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [15, 0], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [9, 12], label: 'C', dx: 8, dy: -10 },
          { t: 'point', p: [9, -12], label: 'D', dx: 8, dy: 12 },
          { t: 'point', p: [9, 0], label: 'P', dx: -8, dy: 13 },
          { t: 'label', p: [12, 0], text: '6', dx: 0, dy: -10 },
          { t: 'label', p: [9, 6], text: '12', dx: 13, dy: 0 },
          { t: 'label', p: [9, -6], text: '12', dx: 13, dy: 0 },
        ],
      },
      choices: ['$15$', '$30$', '$12$', '$24$'],
      answer: 0,
      solution:
        'Route one, the power of the point: the diameter meets the chord at a right angle, so it bisects it and $PC = PD = 12$. The power at $P$ balances the two lines through it: $12 \\cdot 12 = 6 \\cdot AP$, so $AP = 144 \\div 6 = 24$. The whole diameter is $6 + 24 = 30$, so the radius is $15$ centimeters ✓. Check a second, independent way, with a right triangle on the radius: the center sits on the diameter at distance $r - 6$ from $P$, and the radius reaches the chord end $C$, so $(r - 6)^2 + 12^2 = r^2$. Expanding, $r^2 - 12r + 36 + 144 = r^2$, so $12r = 180$ and $r = 15$ ✓. (The choice $30$ is REPORTING THE DIAMETER instead of the radius ✗; the choice $12$ is COPYING THE HALF-CHORD ✗; the choice $24$ is STOPPING AT THE LONG PIECE $AP$ of the diameter ✗.)',
    },
    {
      q: 'A fragment of a circular mirror is reassembled. A straight scratch runs across it as a chord $\\overline{CD}$ of length $16$ inches, meeting a diameter $\\overline{AB}$ at a right angle at $P$; the shorter piece of the diameter is $PB = 2$ inches. What is the radius of the mirror?',
      fig: {
        view: [-19.5, -19.5, 19.5, 19.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 17 },
          { t: 'seg', a: [-17, 0], b: [17, 0] },
          { t: 'seg', a: [15, 8], b: [15, -8] },
          { t: 'right', at: [15, 0], from: [15, 8], to: [17, 0] },
          { t: 'point', p: [-17, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [17, 0], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [15, 8], label: 'C', dx: 8, dy: -10 },
          { t: 'point', p: [15, -8], label: 'D', dx: 8, dy: 12 },
          { t: 'point', p: [15, 0], label: 'P', dx: -8, dy: 13 },
          { t: 'label', p: [16, 0], text: '2', dx: 0, dy: -10 },
          { t: 'label', p: [15, 4], text: '8', dx: 13, dy: 0 },
          { t: 'label', p: [15, -4], text: '8', dx: 13, dy: 0 },
        ],
      },
      choices: ['$34$', '$17$', '$32$', '$8$'],
      answer: 1,
      solution:
        'Route one, the power of the point: the perpendicular diameter bisects the chord, so $PC = PD = 8$. Balancing the two lines through $P$ gives $8 \\cdot 8 = 2 \\cdot AP$, so $AP = 64 \\div 2 = 32$. The diameter is $2 + 32 = 34$, so the radius is $17$ inches ✓. Check a second, independent way, with a right triangle on the radius: the center lies $r - 2$ from $P$ along the diameter, and the radius runs out to the chord end $C$, so $(r - 2)^2 + 8^2 = r^2$. Expanding, $r^2 - 4r + 4 + 64 = r^2$, so $4r = 68$ and $r = 17$ ✓. (The choice $34$ is REPORTING THE DIAMETER instead of the radius ✗; the choice $32$ is STOPPING AT THE LONG PIECE $AP$ ✗; the choice $8$ is COPYING THE HALF-CHORD ✗.)',
    },
    {
      q: 'An old circular millstone is measured with a straight edge. The edge marks a chord $\\overline{CD}$ of length $32$ that crosses a diameter $\\overline{AB}$ at a right angle at $P$, and the shorter piece of the diameter is $PB = 4$. What is the radius of the millstone?',
      fig: {
        view: [-37, -37, 37, 37],
        elems: [
          { t: 'circle', c: [0, 0], r: 34 },
          { t: 'seg', a: [-34, 0], b: [34, 0] },
          { t: 'seg', a: [30, 16], b: [30, -16] },
          { t: 'right', at: [30, 0], from: [30, 16], to: [34, 0] },
          { t: 'point', p: [-34, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [34, 0], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [30, 16], label: 'C', dx: 8, dy: -10 },
          { t: 'point', p: [30, -16], label: 'D', dx: 8, dy: 12 },
          { t: 'point', p: [30, 0], label: 'P', dx: -8, dy: 13 },
          { t: 'label', p: [32, 0], text: '4', dx: 0, dy: -10 },
          { t: 'label', p: [30, 8], text: '16', dx: 15, dy: 0 },
          { t: 'label', p: [30, -8], text: '16', dx: 15, dy: 0 },
        ],
      },
      choices: ['$68$', '$64$', '$34$', '$16$'],
      answer: 2,
      solution:
        'Route one, the power of the point: a diameter perpendicular to a chord bisects it, so $PC = PD = 16$. The power at $P$ gives $16 \\cdot 16 = 4 \\cdot AP$, so $AP = 256 \\div 4 = 64$, the diameter is $4 + 64 = 68$, and the radius is $34$ ✓. Check a second, independent way, with a right triangle on the radius: the center sits $r - 4$ from $P$ along the diameter and the radius reaches the chord end $C$, so $(r - 4)^2 + 16^2 = r^2$. Expanding, $r^2 - 8r + 16 + 256 = r^2$, so $8r = 272$ and $r = 34$ ✓. (The choice $68$ is REPORTING THE DIAMETER instead of the radius ✗; the choice $64$ is STOPPING AT THE LONG PIECE $AP$ ✗; the choice $16$ is COPYING THE HALF-CHORD ✗.)',
    },
  ],
  // s6 — two secants from an outside point; the answer is the chord piece PB - PA.
  [
    {
      q: 'From a gate post at $P$ outside a circular greenhouse, one straight sightline enters the glass at $A$ and leaves at $B$, with $PA = 4$ meters. A second straight sightline from the same post enters at $C$ and leaves at $D$, with $PC = 6$ meters and $CD = 10$ meters. Find $AB$.',
      fig: {
        view: [-1.8, -12.4, 25.8, 10.8],
        elems: [
          { t: 'circle', c: [14, -0.8162], r: 10.0333 },
          { t: 'seg', a: [0, 0], b: [24, 0] },
          { t: 'seg', a: [0, 0], b: [13.1064, 9.1772] },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 0 },
          { t: 'point', p: [4, 0], label: 'A', dx: 0, dy: 14 },
          { t: 'point', p: [24, 0], label: 'B', dx: 10, dy: 6 },
          { t: 'point', p: [4.9149, 3.4415], label: 'C', dx: -8, dy: -10 },
          { t: 'point', p: [13.1064, 9.1772], label: 'D', dx: 8, dy: -8 },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [14, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [2.4575, 1.7208], text: '6', dx: -8, dy: -6 },
          { t: 'label', p: [9.0107, 6.3094], text: '10', dx: -10, dy: -8 },
        ],
      },
      choices: ['$24$', '$96$', '$15$', '$20$'],
      answer: 3,
      solution:
        'Route one, the power of the point: build the whole sightlines from $P$ first. The second one runs $PD = PC + CD = 6 + 10 = 16$, so the power of $P$ is $PC \\cdot PD = 6 \\cdot 16 = 96$. The first sightline must match: $PA \\cdot PB = 96$, so $PB = 96 \\div 4 = 24$, and the chord inside the glass is $AB = PB - PA = 24 - 4 = 20$ meters ✓. Check a second, independent way, by rebuilding the similar triangles: join $A$ to $D$ and $C$ to $B$. The inscribed angles $\\angle ADC$ and $\\angle ABC$ stand on the same arc $AC$, so they are equal, and because $P$, $C$, $D$ lie on one line and $P$, $A$, $B$ on the other, those are the angles $\\angle PDA$ and $\\angle PBC$. The angle at $P$ is shared, so $\\triangle PDA \\sim \\triangle PBC$ and $\\frac{PD}{PB} = \\frac{PA}{PC}$, giving $PB = \\frac{PC \\cdot PD}{PA} = \\frac{6 \\cdot 16}{4} = 24$ and $AB = 20$ ✓. (The choice $24$ is REPORTING THE WHOLE SECANT $PB$ instead of the chord piece ✗; the choice $96$ is STOPPING AT THE POWER ✗; the choice $15$ is USING THE CHORD PIECES INSTEAD OF THE WHOLE SECANTS, $6 \\cdot 10 \\div 4$, but $AB$ and $CD$ do not start at $P$ ✗.)',
    },
    {
      q: 'A post stands at $P$ outside a round observatory dome. One straight cable from the post crosses the dome floor, entering at $A$ and leaving at $B$, with $PA = 5$ feet. A second cable enters at $C$ and leaves at $D$, with $PC = 6$ feet and $CD = 9$ feet. Find $AB$.',
      fig: {
        view: [-1.8, -6.2, 20, 10.9],
        elems: [
          { t: 'circle', c: [11.5, 2.3355], r: 6.9068 },
          { t: 'seg', a: [0, 0], b: [18, 0] },
          { t: 'seg', a: [0, 0], b: [11.8202, 9.2349] },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 0 },
          { t: 'point', p: [5, 0], label: 'A', dx: 0, dy: 14 },
          { t: 'point', p: [18, 0], label: 'B', dx: 10, dy: 6 },
          { t: 'point', p: [4.7281, 3.694], label: 'C', dx: -8, dy: -10 },
          { t: 'point', p: [11.8202, 9.2349], label: 'D', dx: 8, dy: -8 },
          { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [11.5, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [2.3641, 1.847], text: '6', dx: -8, dy: -6 },
          { t: 'label', p: [8.2742, 6.4645], text: '9', dx: -10, dy: -8 },
        ],
      },
      choices: ['$18$', '$13$', '$90$', '$9$'],
      answer: 1,
      solution:
        'Route one, the power of the point: the second cable measures $PD = PC + CD = 6 + 9 = 15$ from the post, so the power of $P$ is $6 \\cdot 15 = 90$. The first cable obeys the same number: $5 \\cdot PB = 90$, so $PB = 18$ and the piece over the floor is $AB = PB - PA = 18 - 5 = 13$ feet ✓. Check a second, independent way, with similar triangles: draw $AD$ and $CB$. The inscribed angles $\\angle ADC$ and $\\angle ABC$ ride on the same arc $AC$ and so are equal, and they are the angles $\\angle PDA$ and $\\angle PBC$ of the two triangles, which also share the angle at $P$. So $\\triangle PDA \\sim \\triangle PBC$, giving $\\frac{PD}{PB} = \\frac{PA}{PC}$ and $PB = \\frac{6 \\cdot 15}{5} = 18$, hence $AB = 13$ ✓. (The choice $18$ is REPORTING THE WHOLE SECANT $PB$ ✗; the choice $90$ is STOPPING AT THE POWER ✗; the choice $9$ is ASSUMING THE TWO CHORDS ARE EQUAL and copying $CD$ ✗.)',
    },
    {
      q: 'Two straight ropes are staked at a post $P$ outside a circular corral. The first rope crosses the corral, meeting the fence at $A$ then $B$, with $PA = 3$ paces. The second meets the fence at $C$ then $D$, with $PC = 6$ paces and $CD = 6$ paces. Find $AB$.',
      fig: {
        view: [-1.8, -14.4, 25.8, 10.2],
        elems: [
          { t: 'circle', c: [13.5, -2.0872], r: 10.7054 },
          { t: 'seg', a: [0, 0], b: [24, 0] },
          { t: 'seg', a: [0, 0], b: [9.1925, 7.7135] },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 0 },
          { t: 'point', p: [3, 0], label: 'A', dx: 0, dy: 14 },
          { t: 'point', p: [24, 0], label: 'B', dx: 10, dy: 6 },
          { t: 'point', p: [4.5963, 3.8567], label: 'C', dx: -8, dy: -10 },
          { t: 'point', p: [9.1925, 7.7135], label: 'D', dx: 8, dy: -8 },
          { t: 'label', p: [1.5, 0], text: '3', dx: 0, dy: 14 },
          { t: 'label', p: [13.5, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [2.2982, 1.9284], text: '6', dx: -8, dy: -6 },
          { t: 'label', p: [6.8944, 5.7851], text: '6', dx: -10, dy: -8 },
        ],
      },
      choices: ['$24$', '$72$', '$21$', '$12$'],
      answer: 2,
      solution:
        'Route one, the power of the point: the second rope reaches $PD = PC + CD = 6 + 6 = 12$ from the post, so the power of $P$ is $6 \\cdot 12 = 72$. The first rope matches it: $3 \\cdot PB = 72$, so $PB = 24$, and the part inside the corral is $AB = PB - PA = 24 - 3 = 21$ paces ✓. Check a second, independent way, with similar triangles: join $A$ to $D$ and $C$ to $B$. The inscribed angles $\\angle ADC$ and $\\angle ABC$ stand on the same arc $AC$, so they are equal, and they serve as $\\angle PDA$ and $\\angle PBC$; the angle at $P$ is common. Hence $\\triangle PDA \\sim \\triangle PBC$ and $\\frac{PD}{PB} = \\frac{PA}{PC}$, so $PB = \\frac{6 \\cdot 12}{3} = 24$ and $AB = 21$ ✓. (The choice $24$ is REPORTING THE WHOLE SECANT $PB$ ✗; the choice $72$ is STOPPING AT THE POWER ✗; the choice $12$ is USING THE CHORD PIECES INSTEAD OF THE WHOLE SECANTS, $6 \\cdot 6 \\div 3$ ✗.)',
    },
  ],
  // s7 — tangent plus one secant; the answer is the chord piece PD - PC.
  [
    {
      q: 'A straight sightline from a marker at $P$ just grazes the edge of a circular running-track infield at $T$, and $PT = 9$ meters. A straight drainage pipe from the same marker crosses the infield, entering at $C$ and leaving at $D$, with $PC = 3$ meters. Find the length of the pipe inside the infield, $CD$.',
      fig: {
        view: [-1.8, -9.6, 29.6, 19.6],
        elems: [
          { t: 'circle', c: [15, 5], r: 13 },
          { t: 'seg', a: [0, 0], b: [27, 0] },
          { t: 'seg', a: [0, 0], b: [7.2, -5.4] },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 0 },
          { t: 'point', p: [3, 0], label: 'C', dx: -2, dy: -12 },
          { t: 'point', p: [27, 0], label: 'D', dx: 10, dy: -6 },
          { t: 'point', p: [7.2, -5.4], label: 'T', dx: 8, dy: 10 },
          { t: 'label', p: [1.5, 0], text: '3', dx: 0, dy: 14 },
          { t: 'label', p: [15, 0], text: '?', dx: 0, dy: -10 },
          { t: 'label', p: [3.6, -2.7], text: '9', dx: -12, dy: 4 },
        ],
      },
      choices: ['$27$', '$81$', '$24$', '$6$'],
      answer: 2,
      solution:
        'Route one, the power of the point: a tangent is a secant whose two crossings have merged, so $PT^2 = PC \\cdot PD$. That gives $81 = 3 \\cdot PD$, so $PD = 27$ meters, and the piece inside is $CD = PD - PC = 27 - 3 = 24$ meters ✓. Check a second, independent way, with the tangent-chord angle: the angle $\\angle PTC$ between the tangent and the chord $\\overline{TC}$ is half the arc $TC$, and so is the inscribed angle $\\angle PDT$ standing on that same arc, so those two angles are equal. With the angle at $P$ shared, $\\triangle PTC \\sim \\triangle PDT$, giving $\\frac{PT}{PD} = \\frac{PC}{PT}$, so $PD = \\frac{PT^2}{PC} = \\frac{81}{3} = 27$ and $CD = 24$ ✓. (The choice $27$ is REPORTING THE WHOLE SECANT $PD$ instead of the chord ✗; the choice $81$ is STOPPING AT $PT^2$ ✗; the choice $6$ is SUBTRACTING THE TWO GIVEN LENGTHS, $9 - 3$, but a tangent and a secant relate by a product ✗.)',
    },
    {
      q: 'A beam of light from a lamp at $P$ just skims the wall of a round barn at $T$, travelling $12$ meters to the touch point. A straight wire from the same lamp passes through the barn, meeting the wall at $C$ then $D$, with $PC = 6$ meters. Find the length of the wire inside the barn, $CD$.',
      fig: {
        view: [-1.8, -6.6, 27.4, 18.3],
        elems: [
          { t: 'circle', c: [15, 6], r: 10.8167 },
          { t: 'seg', a: [0, 0], b: [24, 0] },
          { t: 'seg', a: [0, 0], b: [11.2598, -4.1494] },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 0 },
          { t: 'point', p: [6, 0], label: 'C', dx: -2, dy: -12 },
          { t: 'point', p: [24, 0], label: 'D', dx: 10, dy: -6 },
          { t: 'point', p: [11.2598, -4.1494], label: 'T', dx: 8, dy: 10 },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [15, 0], text: '?', dx: 0, dy: -10 },
          { t: 'label', p: [5.6299, -2.0747], text: '12', dx: -6, dy: 14 },
        ],
      },
      choices: ['$24$', '$144$', '$6$', '$18$'],
      answer: 3,
      solution:
        'Route one, the power of the point: the tangent beam and the wire share the point $P$, so $PT^2 = PC \\cdot PD$, which reads $144 = 6 \\cdot PD$. Then $PD = 24$ meters and the part inside the barn is $CD = PD - PC = 24 - 6 = 18$ meters ✓. Check a second, independent way, with the tangent-chord angle: $\\angle PTC$, formed by the tangent and the chord $\\overline{TC}$, is half the arc $TC$, and the inscribed angle $\\angle PDT$ on the same arc is half of it too, so the two angles agree. The angle at $P$ belongs to both triangles, so $\\triangle PTC \\sim \\triangle PDT$ and $\\frac{PT}{PD} = \\frac{PC}{PT}$, giving $PD = \\frac{144}{6} = 24$ and $CD = 18$ ✓. (The choice $24$ is REPORTING THE WHOLE SECANT $PD$ ✗; the choice $144$ is STOPPING AT $PT^2$ ✗; the choice $6$ is SUBTRACTING THE TWO GIVEN LENGTHS, $12 - 6$ ✗.)',
    },
    {
      q: 'A rail at a circular skate bowl runs straight from a corner at $P$ and just touches the bowl’s rim at $T$, with $PT = 12$ feet. A straight painted stripe from the same corner crosses the bowl, meeting the rim at $C$ then $D$, with $PC = 4$ feet. Find the length of the stripe inside the bowl, $CD$.',
      fig: {
        view: [-2, -12.9, 38.9, 24.6],
        elems: [
          { t: 'circle', c: [20, 6], r: 17.088 },
          { t: 'seg', a: [0, 0], b: [36, 0] },
          { t: 'seg', a: [0, 0], b: [9.4274, -7.4246] },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 0 },
          { t: 'point', p: [4, 0], label: 'C', dx: -2, dy: -12 },
          { t: 'point', p: [36, 0], label: 'D', dx: 10, dy: -6 },
          { t: 'point', p: [9.4274, -7.4246], label: 'T', dx: 8, dy: 10 },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [20, 0], text: '?', dx: 0, dy: -10 },
          { t: 'label', p: [4.7137, -3.7123], text: '12', dx: -8, dy: 12 },
        ],
      },
      choices: ['$32$', '$36$', '$144$', '$8$'],
      answer: 0,
      solution:
        'Route one, the power of the point: the tangent rail and the stripe leave the same corner, so $PT^2 = PC \\cdot PD$, which reads $144 = 4 \\cdot PD$. Then $PD = 36$ feet and the stripe inside the bowl is $CD = PD - PC = 36 - 4 = 32$ feet ✓. Check a second, independent way, with the tangent-chord angle: the angle $\\angle PTC$ between the rail and the chord $\\overline{TC}$ is half the arc $TC$, and the inscribed angle $\\angle PDT$ on that same arc is half of it as well, so they are equal. Sharing the angle at $P$, $\\triangle PTC \\sim \\triangle PDT$, so $\\frac{PT}{PD} = \\frac{PC}{PT}$ and $PD = \\frac{144}{4} = 36$, leaving $CD = 32$ ✓. (The choice $36$ is REPORTING THE WHOLE SECANT $PD$ ✗; the choice $144$ is STOPPING AT $PT^2$ ✗; the choice $8$ is SUBTRACTING THE TWO GIVEN LENGTHS, $12 - 4$ ✗.)',
    },
  ],
  // s8 — a circular arch from span and rise: the sagitta relation gives the radius.
  [
    {
      q: 'A stone gateway arch in a garden wall is a piece of a circle. It spans $36$ feet across the bottom, and the top of the arch rises $6$ feet above that span. What is the radius of the circle the arch is cut from?',
      fig: {
        view: [-32, -32, 32, 32],
        elems: [
          { t: 'circle', c: [0, 0], r: 30 },
          { t: 'seg', a: [-18, 24], b: [18, 24] },
          { t: 'seg', a: [0, 30], b: [0, 24] },
          { t: 'seg', a: [0, 24], b: [0, -30], dash: true },
          { t: 'point', p: [0, 30], label: 'T', dx: 0, dy: -12 },
          { t: 'point', p: [0, 24], label: 'P', dx: 12, dy: 10 },
          { t: 'point', p: [-18, 24], label: 'C', dx: -10, dy: -6 },
          { t: 'point', p: [18, 24], label: 'D', dx: 10, dy: -6 },
          { t: 'label', p: [-9, 24], text: '18', dx: 0, dy: 14 },
          { t: 'label', p: [9, 24], text: '18', dx: 0, dy: 14 },
          { t: 'label', p: [0, 27], text: '6', dx: -10, dy: 0 },
          { t: 'label', p: [0, -3], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$60$', '$30$', '$54$', '$18$'],
      answer: 1,
      solution:
        'Route one, the power of the point: the span is a chord, and the vertical line through the top of the arch is part of a diameter that cuts that chord in half, into $18$ and $18$. Let $P$ be the crossing point. The power at $P$ gives $18 \\cdot 18 = 6 \\cdot (\\text{rest of the diameter})$, so the rest is $324 \\div 6 = 54$. The whole diameter is $6 + 54 = 60$, and the radius is $30$ feet ✓. Check a second, independent way, with a right triangle on the radius: the center sits on that vertical line at distance $r - 6$ below the span, and a radius reaches the end of the span, so $(r - 6)^2 + 18^2 = r^2$. Expanding, $r^2 - 12r + 36 + 324 = r^2$, so $12r = 360$ and $r = 30$ ✓. (The choice $60$ is REPORTING THE DIAMETER instead of the radius ✗; the choice $54$ is STOPPING AT THE REST OF THE DIAMETER, before adding the rise ✗; the choice $18$ is COPYING HALF THE SPAN ✗.)',
    },
    {
      q: 'The curved fanlight window above a doorway is a piece of a circle. It is $40$ inches wide along its straight bottom edge, and its highest point is $8$ inches above that edge. What is the radius of the circle the window is cut from?',
      fig: {
        view: [-31, -31, 31, 31],
        elems: [
          { t: 'circle', c: [0, 0], r: 29 },
          { t: 'seg', a: [-20, 21], b: [20, 21] },
          { t: 'seg', a: [0, 29], b: [0, 21] },
          { t: 'seg', a: [0, 21], b: [0, -29], dash: true },
          { t: 'point', p: [0, 29], label: 'T', dx: 0, dy: -12 },
          { t: 'point', p: [0, 21], label: 'P', dx: 12, dy: 10 },
          { t: 'point', p: [-20, 21], label: 'C', dx: -10, dy: -6 },
          { t: 'point', p: [20, 21], label: 'D', dx: 10, dy: -6 },
          { t: 'label', p: [-10, 21], text: '20', dx: 0, dy: 14 },
          { t: 'label', p: [10, 21], text: '20', dx: 0, dy: 14 },
          { t: 'label', p: [0, 25], text: '8', dx: -10, dy: 0 },
          { t: 'label', p: [0, -4], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$29$', '$58$', '$50$', '$25$'],
      answer: 0,
      solution:
        'Route one, the power of the point: the bottom edge is a chord, and the vertical line through the highest point is part of a diameter that halves it into $20$ and $20$. At the crossing point $P$, the power gives $20 \\cdot 20 = 8 \\cdot (\\text{rest of the diameter})$, so the rest is $400 \\div 8 = 50$. The diameter is $8 + 50 = 58$, so the radius is $29$ inches ✓. Check a second, independent way, with a right triangle on the radius: the center lies $r - 8$ below the bottom edge, and a radius runs out to the end of that edge, so $(r - 8)^2 + 20^2 = r^2$. Expanding, $r^2 - 16r + 64 + 400 = r^2$, so $16r = 464$ and $r = 29$ ✓. (The choice $58$ is REPORTING THE DIAMETER ✗; the choice $50$ is STOPPING AT THE REST OF THE DIAMETER ✗; the choice $25$ is HALVING THAT REST, $50 \\div 2$, instead of halving the whole diameter ✗.)',
    },
    {
      q: 'The mouth of a corrugated culvert is a shallow piece of a circle. It measures $24$ inches across its straight bottom, and its highest point is only $2$ inches above that bottom. What is the radius of the circle the culvert mouth is cut from?',
      fig: {
        view: [-39, -39, 39, 39],
        elems: [
          { t: 'circle', c: [0, 0], r: 37 },
          { t: 'seg', a: [-12, 35], b: [12, 35] },
          { t: 'seg', a: [0, 37], b: [0, 35] },
          { t: 'seg', a: [0, 35], b: [0, -37], dash: true },
          { t: 'point', p: [0, 37], label: 'T', dx: 0, dy: -12 },
          { t: 'point', p: [0, 35], label: 'P', dx: 12, dy: 10 },
          { t: 'point', p: [-12, 35], label: 'C', dx: -10, dy: -6 },
          { t: 'point', p: [12, 35], label: 'D', dx: 10, dy: -6 },
          { t: 'label', p: [-6, 35], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [6, 35], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [0, 36], text: '2', dx: -10, dy: 0 },
          { t: 'label', p: [0, -1], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$74$', '$72$', '$36$', '$37$'],
      answer: 3,
      solution:
        'Route one, the power of the point: the bottom is a chord cut in half, into $12$ and $12$, by the vertical diameter through the highest point. At the crossing point $P$, the power gives $12 \\cdot 12 = 2 \\cdot (\\text{rest of the diameter})$, so the rest is $144 \\div 2 = 72$. The diameter is $2 + 72 = 74$, so the radius is $37$ inches ✓. Check a second, independent way, with a right triangle on the radius: the center sits $r - 2$ below the bottom edge and a radius reaches the end of that edge, so $(r - 2)^2 + 12^2 = r^2$. Expanding, $r^2 - 4r + 4 + 144 = r^2$, so $4r = 148$ and $r = 37$ ✓. (The choice $74$ is REPORTING THE DIAMETER instead of the radius ✗; the choice $72$ is STOPPING AT THE REST OF THE DIAMETER ✗; the choice $36$ is HALVING THAT REST, $72 \\div 2$, rather than halving the full diameter ✗.)',
    },
  ],
  // s9 — two circles through the same two points share one power, so tangents match.
  [
    {
      q: 'Two circular flower beds are laid out so that both of their edges pass through the same two stakes, $A$ and $B$. A gardener stands at $P$ on line $AB$, outside both beds, with $PA = 9$ meters and $AB = 40$ meters. She pulls a string taut from $P$ until it just grazes the larger bed at $S$. How long is the string $PS$?',
      fig: {
        view: [-2.6, -42, 56, 34],
        elems: [
          { t: 'circle', c: [29, -15], r: 25 },
          { t: 'circle', c: [29, 10], r: 22.3607 },
          { t: 'seg', a: [0, 0], b: [49, 0] },
          { t: 'seg', a: [0, 0], b: [8.6007, 19.158] },
          { t: 'seg', a: [0, 0], b: [4.6098, -20.4878], dash: true },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 0 },
          { t: 'point', p: [9, 0], label: 'A', dx: 2, dy: 14 },
          { t: 'point', p: [49, 0], label: 'B', dx: 10, dy: 0 },
          { t: 'point', p: [8.6007, 19.158], label: 'S', dx: -8, dy: -8 },
          { t: 'point', p: [4.6098, -20.4878], label: 'T', dx: -8, dy: 10 },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: -10 },
          { t: 'label', p: [29, 0], text: '40', dx: 0, dy: -10 },
          { t: 'label', p: [4.3004, 9.579], text: '?', dx: -14, dy: 0 },
        ],
      },
      choices: ['$21$', '$441$', '$7$', 'It cannot be found without the two radii'],
      answer: 0,
      solution:
        'Route one, the power of the point: the whole line from $P$ across a bed runs $PB = PA + AB = 9 + 40 = 49$, so the power of $P$ is $PA \\cdot PB = 9 \\cdot 49 = 441$. A tangent is a secant whose crossings have merged, so $PS^2 = 441$ and $PS = \\sqrt{441} = 21$ meters ✓. Check a second, independent way, and watch the size of the bed drop out: any circle through $A$ and $B$ has its center above the midpoint $M$ of $\\overline{AB}$, say at height $k$. Then $PM = 9 + 20 = 29$, the center is $\\sqrt{29^2 + k^2}$ from $P$, and its radius is $\\sqrt{20^2 + k^2}$. The tangent squared is the difference: $(841 + k^2) - (400 + k^2) = 441$, so the tangent is $21$ for every such bed, whatever $k$ is ✓. (The choice $441$ is FORGETTING THE SQUARE ROOT and reporting the power itself ✗; the choice $7$ is ROOTING ONLY THE FAR DISTANCE, $\\sqrt{49}$, instead of the product ✗; the answer that it cannot be found is MISSING THAT THE RADII CANCEL — the height $k$ vanished from the subtraction ✗.)',
    },
    {
      q: 'Two circular rugs overlap on a floor so that both of their edges pass through the same two tacks, $A$ and $B$. A lamp stands at $P$ on line $AB$, outside both rugs, with $PA = 16$ inches and $AB = 33$ inches. A tape is pulled straight from $P$ until it just touches the upper rug at $S$. How long is the tape $PS$?',
      fig: {
        view: [-2.6, -34.5, 55, 29.5],
        elems: [
          { t: 'circle', c: [32.5, -12], r: 20.4022 },
          { t: 'circle', c: [32.5, 9], r: 18.795 },
          { t: 'seg', a: [0, 0], b: [49, 0] },
          { t: 'seg', a: [0, 0], b: [18.2402, 21.2437] },
          { t: 'seg', a: [0, 0], b: [15.5175, -23.3068], dash: true },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 0 },
          { t: 'point', p: [16, 0], label: 'A', dx: 2, dy: 14 },
          { t: 'point', p: [49, 0], label: 'B', dx: 10, dy: 0 },
          { t: 'point', p: [18.2402, 21.2437], label: 'S', dx: -8, dy: -8 },
          { t: 'point', p: [15.5175, -23.3068], label: 'T', dx: -8, dy: 10 },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: -10 },
          { t: 'label', p: [32.5, 0], text: '33', dx: 0, dy: -10 },
          { t: 'label', p: [9.1201, 10.6219], text: '?', dx: -14, dy: 0 },
        ],
      },
      choices: ['$784$', '$7$', '$28$', 'It cannot be found without the two radii'],
      answer: 2,
      solution:
        'Route one, the power of the point: the whole line from $P$ across a rug measures $PB = PA + AB = 16 + 33 = 49$, so the power of $P$ is $16 \\cdot 49 = 784$. The tangent obeys $PS^2 = 784$, so $PS = \\sqrt{784} = 28$ inches ✓. Check a second, independent way, and watch the rug’s size cancel: any circle through $A$ and $B$ has its center above the midpoint $M$ of $\\overline{AB}$ at some height $k$. Here $PM = 16 + 16.5 = 32.5$, the center is $\\sqrt{32.5^2 + k^2}$ from $P$, and the radius is $\\sqrt{16.5^2 + k^2}$. Subtracting the squares, the tangent squared is $1056.25 - 272.25 = 784$, independent of $k$, so the tape is $28$ ✓. (The choice $784$ is FORGETTING THE SQUARE ROOT ✗; the choice $7$ is ROOTING ONLY THE FAR DISTANCE, $\\sqrt{49}$ ✗; the answer that it cannot be found is MISSING THAT THE RADII CANCEL out of the subtraction ✗.)',
    },
    {
      q: 'Two circular spotlight pools on a stage overlap so that both of their edges pass through the same two marks, $A$ and $B$. A camera sits at $P$ on line $AB$, outside both pools of light, with $PA = 16$ feet and $AB = 20$ feet. A straight rod is laid from $P$ so that it just touches the upper pool at $S$. How long is $PS$?',
      fig: {
        view: [-2.2, -24.5, 41.5, 21],
        elems: [
          { t: 'circle', c: [26, -9], r: 13.4536 },
          { t: 'circle', c: [26, 7], r: 12.2066 },
          { t: 'seg', a: [0, 0], b: [36, 0] },
          { t: 'seg', a: [0, 0], b: [17.828, 16.0674] },
          { t: 'seg', a: [0, 0], b: [15.9445, -17.938], dash: true },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 0 },
          { t: 'point', p: [16, 0], label: 'A', dx: 2, dy: 14 },
          { t: 'point', p: [36, 0], label: 'B', dx: 10, dy: 0 },
          { t: 'point', p: [17.828, 16.0674], label: 'S', dx: -8, dy: -8 },
          { t: 'point', p: [15.9445, -17.938], label: 'T', dx: -8, dy: 10 },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: -10 },
          { t: 'label', p: [26, 0], text: '20', dx: 0, dy: -10 },
          { t: 'label', p: [8.914, 8.0337], text: '?', dx: -14, dy: 0 },
        ],
      },
      choices: ['$576$', '$24$', '$6$', 'It cannot be found without the two radii'],
      answer: 1,
      solution:
        'Route one, the power of the point: the whole line from $P$ across a pool of light is $PB = PA + AB = 16 + 20 = 36$, so the power of $P$ is $16 \\cdot 36 = 576$. The tangent satisfies $PS^2 = 576$, so $PS = \\sqrt{576} = 24$ feet ✓. Check a second, independent way, and watch the radius cancel: any circle through $A$ and $B$ centers above the midpoint $M$ of $\\overline{AB}$ at some height $k$. Here $PM = 16 + 10 = 26$, the center is $\\sqrt{26^2 + k^2}$ from $P$, and the radius is $\\sqrt{10^2 + k^2}$. The tangent squared is the difference $676 - 100 = 576$ no matter what $k$ is, so $PS = 24$ ✓. (The choice $576$ is FORGETTING THE SQUARE ROOT ✗; the choice $6$ is ROOTING ONLY THE FAR DISTANCE, $\\sqrt{36}$ ✗; the answer that it cannot be found is MISSING THAT THE RADII CANCEL ✗.)',
    },
  ],
  // s10 — tangent plus a secant through the center: recover the radius.
  [
    {
      q: 'A circular no-boat zone is marked by buoys. From a lighthouse at $P$ outside the zone, a sightline just grazes the ring of buoys at $T$ with $PT = 56$ meters, and a straight channel from $P$ runs through the center of the zone, meeting the ring first at $A$ with $PA = 32$ meters. What is the radius of the zone?',
      fig: {
        view: [-4, -36, 102, 36],
        elems: [
          { t: 'circle', c: [65, 0], r: 33 },
          { t: 'seg', a: [0, 0], b: [98, 0] },
          { t: 'seg', a: [0, 0], b: [48.2462, 28.4308] },
          { t: 'seg', a: [65, 0], b: [48.2462, 28.4308], dash: true },
          { t: 'right', at: [48.2462, 28.4308], from: [0, 0], to: [65, 0] },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 0 },
          { t: 'point', p: [32, 0], label: 'A', dx: -4, dy: 14 },
          { t: 'point', p: [65, 0], label: 'O', dx: 2, dy: 14 },
          { t: 'point', p: [98, 0], label: 'B', dx: 10, dy: 0 },
          { t: 'point', p: [48.2462, 28.4308], label: 'T', dx: 0, dy: -12 },
          { t: 'label', p: [16, 0], text: '32', dx: 0, dy: 14 },
          { t: 'label', p: [24.1231, 14.2154], text: '56', dx: -14, dy: -4 },
          { t: 'label', p: [56.6231, 14.2154], text: '?', dx: 12, dy: 0 },
        ],
      },
      choices: ['$66$', '$98$', '$65$', '$33$'],
      answer: 3,
      solution:
        'Route one, the power of the point: the tangent and the channel leave the same point, so $PT^2 = PA \\cdot PB$, that is $56^2 = 3136 = 32 \\cdot PB$, giving $PB = 98$. Because the channel passes through the center, $\\overline{AB}$ is a whole diameter: $AB = 98 - 32 = 66$, so the radius is $66 \\div 2 = 33$ meters ✓. Check a second, independent way, with the right angle at the touch point: a tangent meets the radius $\\overline{OT}$ at $90^\\circ$, and $PO = PA + r = 32 + r$, so $PT^2 + r^2 = PO^2$ gives $3136 + r^2 = (32 + r)^2 = 1024 + 64r + r^2$. The $r^2$ cancels, leaving $64r = 2112$ and $r = 33$ ✓. (The choice $66$ is REPORTING THE DIAMETER instead of the radius ✗; the choice $98$ is REPORTING THE WHOLE SECANT $PB$ ✗; the choice $65$ is REPORTING THE DISTANCE $PO$ TO THE CENTER, $32 + 33$ ✗.)',
    },
    {
      q: 'A round grain silo is viewed from a gate at $P$. A rope pulled straight from $P$ just touches the silo wall at $T$ with $PT = 24$ meters, and a straight track from $P$ runs through the center of the silo, meeting the wall first at $A$ with $PA = 18$ meters. What is the radius of the silo?',
      fig: {
        view: [-1.8, -9, 34.5, 9.5],
        elems: [
          { t: 'circle', c: [25, 0], r: 7 },
          { t: 'seg', a: [0, 0], b: [32, 0] },
          { t: 'seg', a: [0, 0], b: [23.04, 6.72] },
          { t: 'seg', a: [25, 0], b: [23.04, 6.72], dash: true },
          { t: 'right', at: [23.04, 6.72], from: [0, 0], to: [25, 0] },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 0 },
          { t: 'point', p: [18, 0], label: 'A', dx: -4, dy: 14 },
          { t: 'point', p: [25, 0], label: 'O', dx: 2, dy: 14 },
          { t: 'point', p: [32, 0], label: 'B', dx: 10, dy: 0 },
          { t: 'point', p: [23.04, 6.72], label: 'T', dx: 0, dy: -12 },
          { t: 'label', p: [9, 0], text: '18', dx: 0, dy: 14 },
          { t: 'label', p: [11.52, 3.36], text: '24', dx: -12, dy: -4 },
          { t: 'label', p: [24.02, 3.36], text: '?', dx: 12, dy: 0 },
        ],
      },
      choices: ['$14$', '$32$', '$7$', '$25$'],
      answer: 2,
      solution:
        'Route one, the power of the point: the rope and the track start together at $P$, so $PT^2 = PA \\cdot PB$, that is $576 = 18 \\cdot PB$ and $PB = 32$. The track runs through the center, so $\\overline{AB}$ is a diameter: $AB = 32 - 18 = 14$ and the radius is $7$ meters ✓. Check a second, independent way, with the right angle at the touch point: the radius $\\overline{OT}$ meets the rope at $90^\\circ$, and $PO = 18 + r$, so $PT^2 + r^2 = PO^2$ becomes $576 + r^2 = (18 + r)^2 = 324 + 36r + r^2$. The $r^2$ cancels, so $36r = 252$ and $r = 7$ ✓. (The choice $14$ is REPORTING THE DIAMETER ✗; the choice $32$ is REPORTING THE WHOLE SECANT $PB$ ✗; the choice $25$ is REPORTING THE DISTANCE $PO$ TO THE CENTER, $18 + 7$ ✗.)',
    },
    {
      q: 'A small circular island is charted from a buoy at $P$. A sightline from $P$ just grazes the shore at $T$ with $PT = 45$ meters, and a straight ferry route from $P$ passes through the center of the island, meeting the shore first at $A$ with $PA = 25$ meters. What is the radius of the island?',
      fig: {
        view: [-3, -31, 84.5, 31],
        elems: [
          { t: 'circle', c: [53, 0], r: 28 },
          { t: 'seg', a: [0, 0], b: [81, 0] },
          { t: 'seg', a: [0, 0], b: [38.2075, 23.7736] },
          { t: 'seg', a: [53, 0], b: [38.2075, 23.7736], dash: true },
          { t: 'right', at: [38.2075, 23.7736], from: [0, 0], to: [53, 0] },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 0 },
          { t: 'point', p: [25, 0], label: 'A', dx: -4, dy: 14 },
          { t: 'point', p: [53, 0], label: 'O', dx: 2, dy: 14 },
          { t: 'point', p: [81, 0], label: 'B', dx: 10, dy: 0 },
          { t: 'point', p: [38.2075, 23.7736], label: 'T', dx: 0, dy: -12 },
          { t: 'label', p: [12.5, 0], text: '25', dx: 0, dy: 14 },
          { t: 'label', p: [19.1038, 11.8868], text: '45', dx: -14, dy: -4 },
          { t: 'label', p: [45.6038, 11.8868], text: '?', dx: 12, dy: 0 },
        ],
      },
      choices: ['$28$', '$56$', '$81$', '$53$'],
      answer: 0,
      solution:
        'Route one, the power of the point: both lines leave $P$, so $PT^2 = PA \\cdot PB$, that is $2025 = 25 \\cdot PB$ and $PB = 81$. The ferry route runs through the center, so $\\overline{AB}$ is a diameter: $AB = 81 - 25 = 56$, and the radius is $28$ meters ✓. Check a second, independent way, with the right angle at the touch point: the radius $\\overline{OT}$ is perpendicular to the sightline, and $PO = 25 + r$, so $PT^2 + r^2 = PO^2$ gives $2025 + r^2 = (25 + r)^2 = 625 + 50r + r^2$. The $r^2$ cancels, leaving $50r = 1400$ and $r = 28$ ✓. (The choice $56$ is REPORTING THE DIAMETER instead of the radius ✗; the choice $81$ is REPORTING THE WHOLE SECANT $PB$ ✗; the choice $53$ is REPORTING THE DISTANCE $PO$ TO THE CENTER, $25 + 28$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 13,
  sections: { '13.2': s132 },
}
