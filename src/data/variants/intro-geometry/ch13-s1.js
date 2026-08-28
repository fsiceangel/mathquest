// Introduction to Geometry chapter 13 — variations for section 13.1 (Power of a Point).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is worked twice along routes that share no steps: once
//    through the power-of-a-point product the problem is about, and once
//    through an independent picture (similar triangles built from inscribed
//    angles, or the perpendicular from the center to a chord together with the
//    Pythagorean theorem, which turns the power into r^2 - OP^2).
//  - Every figure is built from the numbers it shows. Each labeled point on a
//    circle really lies on that circle: chord crossings are solved exactly, and
//    each tangent point T sits where PT is perpendicular to the radius OT.
//  - Each distractor is one named mistake, named in CAPS at the end.

const s131 = [
  // s1 — two chords crossing inside: AP · PB = CP · PD.
  [
    {
      q: 'Two straight basting threads are pinned across a circular quilting hoop and cross at a point $P$ inside it. One thread runs from $A$ to $B$ with $AP = 4$ centimeters and $PB = 15$ centimeters; the other runs from $C$ to $D$ with $CP = 10$ centimeters. How long is $PD$?',
      fig: {
        view: [-5.7103, -11.1452, 16.7103, 11.2753],
        elems: [
          { t: 'circle', c: [5.5, 0.0651], r: 9.5002 },
          { t: 'seg', a: [-4, 0], b: [15, 0] },
          { t: 'seg', a: [3.7461, -9.2718], b: [-2.2476, 5.5631] },
          { t: 'point', p: [-4, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [15, 0], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [3.7461, -9.2718], label: 'C', dx: 5, dy: 12 },
          { t: 'point', p: [-2.2476, 5.5631], label: 'D', dx: -5, dy: -12 },
          { t: 'point', p: [0, 0], label: 'P', dx: 8, dy: -12 },
          { t: 'label', p: [-2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [1.873, -4.6359], text: '10', dx: 12, dy: -5 },
          { t: 'label', p: [-1.1238, 2.7816], text: '?', dx: -12, dy: 5 },
        ],
      },
      choices: ['$6$', '$600$', '$9$', '$10$'],
      answer: 0,
      solution:
        'Route one, the crossing-chords product: two chords through the same interior point cut each other so that $AP \\cdot PB = CP \\cdot PD$. Here $4 \\cdot 15 = 10 \\cdot PD$, so $60 = 10 \\cdot PD$ and $PD = 6$ centimeters ✓. Check a second, independent way, with similar triangles: join $A$ to $C$ and $D$ to $B$. The inscribed angles $\\angle CAB$ and $\\angle CDB$ stand on the same arc $CB$, so they are equal, and $\\angle APC = \\angle DPB$ because they are vertical angles, which makes $\\triangle PAC \\sim \\triangle PDB$. Matching the sides gives $\\frac{PA}{PD} = \\frac{PC}{PB}$, that is $\\frac{4}{PD} = \\frac{10}{15}$, so $PD = \\frac{4 \\cdot 15}{10} = 6$ ✓. (The choice $600$ is MULTIPLYING WHERE THE STEP CALLS FOR DIVIDING, $60 \\cdot 10$ instead of $60 \\div 10$ ✗; the choice $9$ is ADDING AND SUBTRACTING LENGTHS, $4 + 15 - 10$, which is not what the theorem balances ✗; the choice $10$ is ASSUMING THE SECOND THREAD IS CUT INTO TWO EQUAL PIECES and copying $CP$ ✗.)',
    },
    {
      q: 'A round pizza is sliced by two straight cuts that cross at a point $P$ inside the crust. The first cut runs from $A$ to $B$ with $AP = 4$ inches and $PB = 21$ inches; the second runs from $C$ to $D$ with $CP = 6$ inches. How long is $PD$?',
      fig: {
        view: [-6.3896, -13.1657, 23.3896, 16.6135],
        w: 400,
        elems: [
          { t: 'circle', c: [8.5, 1.7239], r: 12.6183 },
          { t: 'seg', a: [-4, 0], b: [21, 0] },
          { t: 'seg', a: [-1.6538, -5.7676], b: [3.8589, 13.4577] },
          { t: 'point', p: [-4, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [21, 0], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [-1.6538, -5.7676], label: 'C', dx: -4, dy: 12 },
          { t: 'point', p: [3.8589, 13.4577], label: 'D', dx: 4, dy: -12 },
          { t: 'point', p: [0, 0], label: 'P', dx: -8, dy: -11 },
          { t: 'label', p: [-2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [10.5, 0], text: '21', dx: 0, dy: 14 },
          { t: 'label', p: [-0.8269, -2.8838], text: '6', dx: 12, dy: 4 },
          { t: 'label', p: [1.9295, 6.7288], text: '?', dx: -12, dy: -4 },
        ],
      },
      choices: ['$504$', '$19$', '$14$', '$6$'],
      answer: 2,
      solution:
        'Route one, the crossing-chords product: $AP \\cdot PB = CP \\cdot PD$, so $4 \\cdot 21 = 6 \\cdot PD$. That is $84 = 6 \\cdot PD$, giving $PD = 14$ inches ✓. Check a second, independent way, with similar triangles: draw $AC$ and $DB$. The inscribed angles $\\angle CAB$ and $\\angle CDB$ cut off the same arc $CB$, so they match, and the vertical angles at $P$ match too, so $\\triangle PAC \\sim \\triangle PDB$. Therefore $\\frac{PA}{PD} = \\frac{PC}{PB}$, that is $\\frac{4}{PD} = \\frac{6}{21}$, and $PD = \\frac{4 \\cdot 21}{6} = 14$ ✓. (The choice $504$ is MULTIPLYING WHERE THE STEP CALLS FOR DIVIDING, $84 \\cdot 6$ ✗; the choice $19$ is ADDING AND SUBTRACTING LENGTHS, $4 + 21 - 6$ ✗; the choice $6$ is ASSUMING THE SECOND CUT IS SPLIT INTO TWO EQUAL PIECES and copying $CP$ ✗.)',
    },
    {
      q: 'Two straight strips of tape are stretched across a circular drum head and cross at a point $P$ inside it. One strip runs from $A$ to $B$ with $AP = 4$ centimeters and $PB = 11$ centimeters; the other runs from $C$ to $D$ with $CP = 2$ centimeters. How long is $PD$?',
      fig: {
        view: [-10.8168, -4.7797, 17.8168, 23.8539],
        elems: [
          { t: 'circle', c: [3.5, 9.5371], r: 12.1329 },
          { t: 'seg', a: [-4, 0], b: [11, 0] },
          { t: 'seg', a: [-0.3473, -1.9696], b: [3.8203, 21.6658] },
          { t: 'point', p: [-4, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [11, 0], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [-0.3473, -1.9696], label: 'C', dx: -2, dy: 13 },
          { t: 'point', p: [3.8203, 21.6658], label: 'D', dx: 2, dy: -13 },
          { t: 'point', p: [0, 0], label: 'P', dx: -9, dy: -11 },
          { t: 'label', p: [-2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [5.5, 0], text: '11', dx: 0, dy: 14 },
          { t: 'label', p: [-0.1736, -0.9848], text: '2', dx: 13, dy: 2 },
          { t: 'label', p: [1.9101, 10.8329], text: '?', dx: -13, dy: -2 },
        ],
      },
      choices: ['$88$', '$13$', '$2$', '$22$'],
      answer: 3,
      solution:
        'Route one, the crossing-chords product: $AP \\cdot PB = CP \\cdot PD$ gives $4 \\cdot 11 = 2 \\cdot PD$, so $44 = 2 \\cdot PD$ and $PD = 22$ centimeters ✓. Check a second, independent way, with similar triangles: join $A$ to $C$ and $D$ to $B$. Angles $\\angle CAB$ and $\\angle CDB$ are inscribed on the same arc $CB$, so they are equal, and the vertical angles at $P$ are equal, so $\\triangle PAC \\sim \\triangle PDB$. Then $\\frac{PA}{PD} = \\frac{PC}{PB}$, that is $\\frac{4}{PD} = \\frac{2}{11}$, and $PD = \\frac{4 \\cdot 11}{2} = 22$ ✓. (The choice $88$ is MULTIPLYING WHERE THE STEP CALLS FOR DIVIDING, $44 \\cdot 2$ ✗; the choice $13$ is ADDING AND SUBTRACTING LENGTHS, $4 + 11 - 2$ ✗; the choice $2$ is ASSUMING THE SECOND STRIP IS CUT INTO TWO EQUAL PIECES and copying $CP$ ✗.)',
    },
  ],
  // s2 — naming the relation that two secants from an outside point always obey.
  [
    {
      q: 'A lighthouse lamp at $L$ sends one straight beam across a circular reef: the beam enters the reef at $M$ and leaves it at $N$. A second beam from the same lamp enters the reef at $R$ and leaves at $S$. Which equation is always true, no matter how the two beams are aimed?',
      fig: {
        view: [-1.1465, -3.7024, 13.8859, 9.0694],
        elems: [
          { t: 'circle', c: [7.5, 2.6835], r: 5.2394 },
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [0, 0], b: [5.1622, 7.3724] },
          { t: 'point', p: [0, 0], label: 'L', dx: -12, dy: 0 },
          { t: 'point', p: [3, 0], label: 'M', dx: 0, dy: 15 },
          { t: 'point', p: [12, 0], label: 'N', dx: 12, dy: 6 },
          { t: 'point', p: [2.2943, 3.2766], label: 'R', dx: -11, dy: -7 },
          { t: 'point', p: [5.1622, 7.3724], label: 'S', dx: 7, dy: -11 },
        ],
      },
      choices: [
        '$LM \\cdot LN = LR \\cdot LS$',
        '$LM \\cdot MN = LR \\cdot RS$',
        '$LM + LN = LR + LS$',
        '$MN \\cdot RS = LM \\cdot LR$',
      ],
      answer: 0,
      solution:
        'Route one, similar triangles: join $M$ to $S$ and $R$ to $N$. Triangles $LMS$ and $LRN$ share the angle at $L$, and $\\angle LSM = \\angle LNR$ because those two inscribed angles stand on the same arc $MR$, so $\\triangle LMS \\sim \\triangle LRN$. Matching sides gives $\\frac{LM}{LR} = \\frac{LS}{LN}$, and cross-multiplying gives $LM \\cdot LN = LR \\cdot LS$ ✓. Check a second, independent way, by testing a real reef: on a circle where the first beam has $LM = 3$ and $LN = 12$ and the second has $LR = 4$ and $LS = 9$, the crossing pieces are $MN = 9$ and $RS = 5$. Now score the candidates: $LM \\cdot MN = 27$ against $LR \\cdot RS = 20$, $LM + LN = 15$ against $LR + LS = 13$, and $MN \\cdot RS = 45$ against $LM \\cdot LR = 12$ — three mismatches — while $LM \\cdot LN = 36 = LR \\cdot LS$ balances exactly ✓. (The choice $LM \\cdot MN = LR \\cdot RS$ is MULTIPLYING THE OUTSIDE PART BY THE CROSSING PIECE, but $MN$ does not start at $L$ ✗; the choice $LM + LN = LR + LS$ is ADDING WHEN THE INVARIANT IS A PRODUCT ✗; the choice $MN \\cdot RS = LM \\cdot LR$ is PAIRING THE TWO CROSSING PIECES AGAINST THE TWO OUTSIDE PARTS, which mixes one beam with the other ✗.)',
    },
    {
      q: 'A survey boat at $Q$ sends one straight sonar line through a circular kelp bed, entering at $E$ and leaving at $F$. A second sonar line from the same boat enters the kelp bed at $G$ and leaves at $H$. Which equation is always true, whichever directions the boat chooses?',
      fig: {
        view: [-1.0838, -5.473, 13.1263, 6.7797],
        elems: [
          { t: 'circle', c: [7, 0.6533], r: 5.0425 },
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [0, 0], b: [3.8567, 4.5963] },
          { t: 'point', p: [0, 0], label: 'Q', dx: -12, dy: 0 },
          { t: 'point', p: [2, 0], label: 'E', dx: 0, dy: 15 },
          { t: 'point', p: [12, 0], label: 'F', dx: 12, dy: 6 },
          { t: 'point', p: [2.5712, 3.0642], label: 'G', dx: -10, dy: -8 },
          { t: 'point', p: [3.8567, 4.5963], label: 'H', dx: 8, dy: -10 },
        ],
      },
      choices: [
        '$QE + QF = QG + QH$',
        '$QE \\cdot QF = QG \\cdot QH$',
        '$QE \\cdot EF = QG \\cdot GH$',
        '$EF \\cdot GH = QE \\cdot QG$',
      ],
      answer: 1,
      solution:
        'Route one, similar triangles: draw $EH$ and $GF$. Triangles $QEH$ and $QGF$ share the angle at $Q$, and $\\angle QHE = \\angle QFG$ since both are inscribed on arc $EG$, so $\\triangle QEH \\sim \\triangle QGF$. That gives $\\frac{QE}{QG} = \\frac{QH}{QF}$, and cross-multiplying gives $QE \\cdot QF = QG \\cdot QH$ ✓. Check a second, independent way, by testing a real kelp bed: suppose $QE = 2$, $QF = 12$, $QG = 4$, $QH = 6$, so the crossing pieces are $EF = 10$ and $GH = 2$. Then $QE + QF = 14$ against $QG + QH = 10$, $QE \\cdot EF = 20$ against $QG \\cdot GH = 8$, and $EF \\cdot GH = 20$ against $QE \\cdot QG = 8$ — all three fail — while $QE \\cdot QF = 24 = QG \\cdot QH$ ✓. (The choice $QE + QF = QG + QH$ is ADDING WHEN THE INVARIANT IS A PRODUCT ✗; the choice $QE \\cdot EF = QG \\cdot GH$ is MULTIPLYING THE OUTSIDE PART BY THE CROSSING PIECE, and $EF$ does not start at $Q$ ✗; the choice $EF \\cdot GH = QE \\cdot QG$ is PAIRING THE CROSSING PIECES AGAINST THE OUTSIDE PARTS, which combines one line with the other ✗.)',
    },
    {
      q: 'Two laser pointers are clamped side by side at the same spot $V$ and aimed at a round dartboard. The first beam crosses the board’s rim at $W$ and again at $X$; the second crosses it at $Y$ and again at $Z$. Which equation is always true, however the beams are angled?',
      fig: {
        view: [-1.3885, -5.1051, 16.8164, 9.5276],
        elems: [
          { t: 'circle', c: [9.5, 2.2112], r: 5.9279 },
          { t: 'seg', a: [0, 0], b: [15, 0] },
          { t: 'seg', a: [0, 0], b: [6.6913, 7.4314] },
          { t: 'point', p: [0, 0], label: 'V', dx: -12, dy: 0 },
          { t: 'point', p: [4, 0], label: 'W', dx: 0, dy: 15 },
          { t: 'point', p: [15, 0], label: 'X', dx: 12, dy: 6 },
          { t: 'point', p: [4.0148, 4.4589], label: 'Y', dx: -10, dy: -9 },
          { t: 'point', p: [6.6913, 7.4314], label: 'Z', dx: 9, dy: -10 },
        ],
      },
      choices: [
        '$VW \\cdot WX = VY \\cdot YZ$',
        '$WX \\cdot YZ = VW \\cdot VY$',
        '$VW + VX = VY + VZ$',
        '$VW \\cdot VX = VY \\cdot VZ$',
      ],
      answer: 3,
      solution:
        'Route one, similar triangles: join $W$ to $Z$ and $Y$ to $X$. Triangles $VWZ$ and $VYX$ share the angle at $V$, and $\\angle VZW = \\angle VXY$ because both are inscribed on arc $WY$, so $\\triangle VWZ \\sim \\triangle VYX$. Hence $\\frac{VW}{VY} = \\frac{VZ}{VX}$, which cross-multiplies to $VW \\cdot VX = VY \\cdot VZ$ ✓. Check a second, independent way, by testing a real board: take $VW = 4$, $VX = 15$, $VY = 6$, $VZ = 10$, so the crossing pieces are $WX = 11$ and $YZ = 4$. Then $VW \\cdot WX = 44$ against $VY \\cdot YZ = 24$, $WX \\cdot YZ = 44$ against $VW \\cdot VY = 24$, and $VW + VX = 19$ against $VY + VZ = 16$ — every one of them tilts — while $VW \\cdot VX = 60 = VY \\cdot VZ$ ✓. (The choice $VW \\cdot WX = VY \\cdot YZ$ is MULTIPLYING THE OUTSIDE PART BY THE CROSSING PIECE, though $WX$ does not begin at $V$ ✗; the choice $WX \\cdot YZ = VW \\cdot VY$ is PAIRING THE CROSSING PIECES AGAINST THE OUTSIDE PARTS, mixing the two beams together ✗; the choice $VW + VX = VY + VZ$ is ADDING WHEN THE INVARIANT IS A PRODUCT ✗.)',
    },
  ],
  // s3 — tangent from an outside point: PT = sqrt(PA · PB).
  [
    {
      q: 'A camera post stands at $P$ beside a circular skate bowl. One straight sight line from the post crosses the rim at $A$ and again at $B$, with $PA = 4$ meters and $PB = 16$ meters. A second sight line from $P$ just grazes the rim at the single point $T$. How long is $PT$?',
      fig: {
        view: [-1.6029, -4.4132, 19.4132, 14.4132],
        elems: [
          { t: 'circle', c: [10, 5], r: 7.8102 },
          { t: 'seg', a: [0, 0], b: [16, 0] },
          { t: 'seg', a: [0, 0], b: [2.6207, 7.5586] },
          { t: 'seg', a: [10, 5], b: [2.6207, 7.5586], dash: true },
          { t: 'right', at: [2.6207, 7.5586], from: [0, 0], to: [10, 5] },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [4, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [16, 0], label: 'B', dx: 12, dy: 6 },
          { t: 'point', p: [2.6207, 7.5586], label: 'T', dx: 4, dy: -12 },
          { t: 'point', p: [10, 5], label: 'O', dx: 12, dy: 8 },
          { t: 'label', p: [1.3104, 3.7793], text: '?', dx: -12, dy: -4 },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [10, 0], text: '12', dx: 0, dy: 14 },
        ],
      },
      choices: ['$64$', '$8$', '$12$', '$6$'],
      answer: 1,
      solution:
        'Route one, the tangent-secant power: a tangent is a secant whose two crossing points have merged, so $PT^2 = PA \\cdot PB = 4 \\cdot 16 = 64$ and $PT = 8$ meters ✓. Check a second, independent way, with the perpendicular from the center: let $M$ be the midpoint of chord $AB$, so $OM$ is perpendicular to the sight line, $PM = \\frac{4 + 16}{2} = 10$ and $MB = \\frac{16 - 4}{2} = 6$. The tangent meets radius $OT$ at a right angle, so $PT^2 = OP^2 - r^2$; and $OP^2 = PM^2 + OM^2$ while $r^2 = MB^2 + OM^2$, so the $OM^2$ cancels and $PT^2 = 10^2 - 6^2 = 100 - 36 = 64$, giving $PT = 8$ ✓. (The figure marks the pieces $4$ and $12$; the whole sight line is $PB = 4 + 12 = 16$.) (The choice $64$ is STOPPING AT $PT^2$ and never taking the square root ✗; the choice $12$ is REPORTING THE CROSSING PIECE $AB$ instead of the tangent ✗; the choice $6$ is SQUARE-ROOTING EACH FACTOR SEPARATELY AND ADDING, $2 + 4$, which is not how a square root of a product behaves ✗.)',
    },
    {
      q: 'A weather vane sits at $P$ outside a round barn. One straight guy wire from $P$ passes over the barn’s circular wall, meeting it at $A$ and again at $B$, with $PA = 9$ feet and $PB = 25$ feet. A second wire from $P$ is pulled taut so that it just touches the wall at the single point $T$. How long is $PT$?',
      fig: {
        view: [-2.4867, -6.1169, 30.1169, 20.1169],
        w: 420,
        elems: [
          { t: 'circle', c: [17, 7], r: 10.6301 },
          { t: 'seg', a: [0, 0], b: [25, 0] },
          { t: 'seg', a: [0, 0], b: [8.0143, 12.6795] },
          { t: 'seg', a: [17, 7], b: [8.0143, 12.6795], dash: true },
          { t: 'right', at: [8.0143, 12.6795], from: [0, 0], to: [17, 7] },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [9, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [25, 0], label: 'B', dx: 12, dy: 6 },
          { t: 'point', p: [8.0143, 12.6795], label: 'T', dx: 7, dy: -11 },
          { t: 'point', p: [17, 7], label: 'O', dx: 12, dy: 8 },
          { t: 'label', p: [4.0072, 6.3398], text: '?', dx: -11, dy: -7 },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [17, 0], text: '16', dx: 0, dy: 14 },
        ],
      },
      choices: ['$225$', '$16$', '$15$', '$8$'],
      answer: 2,
      solution:
        'Route one, the tangent-secant power: $PT^2 = PA \\cdot PB = 9 \\cdot 25 = 225$, so $PT = 15$ feet ✓. Check a second, independent way, with the perpendicular from the center: let $M$ be the midpoint of chord $AB$. Then $PM = \\frac{9 + 25}{2} = 17$ and $MB = \\frac{25 - 9}{2} = 8$, while $OM$ is perpendicular to the wire. Because the tangent meets radius $OT$ at a right angle, $PT^2 = OP^2 - r^2 = (PM^2 + OM^2) - (MB^2 + OM^2) = 17^2 - 8^2 = 289 - 64 = 225$, so $PT = 15$ ✓. (The figure marks the pieces $9$ and $16$; the whole wire is $PB = 9 + 16 = 25$.) (The choice $225$ is STOPPING AT $PT^2$ without the square root ✗; the choice $16$ is REPORTING THE CROSSING PIECE $AB$ instead of the tangent ✗; the choice $8$ is SQUARE-ROOTING EACH FACTOR SEPARATELY AND ADDING, $3 + 5$ ✗.)',
    },
    {
      q: 'A ticket booth stands at $P$ outside a circular carousel platform. A straight handrail from the booth crosses the platform’s edge at $A$ and again at $B$, with $PA = 9$ feet and $PB = 36$ feet. A straight rope from $P$ is stretched until it just brushes the edge at the single point $T$. How long is $PT$?',
      fig: {
        view: [-3.4852, -10.7102, 42.2102, 28.7102],
        w: 460,
        elems: [
          { t: 'circle', c: [22.5, 9], r: 16.225 },
          { t: 'seg', a: [0, 0], b: [36, 0] },
          { t: 'seg', a: [0, 0], b: [7.9379, 16.1552] },
          { t: 'seg', a: [22.5, 9], b: [7.9379, 16.1552], dash: true },
          { t: 'right', at: [7.9379, 16.1552], from: [0, 0], to: [22.5, 9] },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [9, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [36, 0], label: 'B', dx: 12, dy: 6 },
          { t: 'point', p: [7.9379, 16.1552], label: 'T', dx: 6, dy: -12 },
          { t: 'point', p: [22.5, 9], label: 'O', dx: 12, dy: 8 },
          { t: 'label', p: [3.969, 8.0776], text: '?', dx: -12, dy: -6 },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [22.5, 0], text: '27', dx: 0, dy: 14 },
        ],
      },
      choices: ['$27$', '$324$', '$9$', '$18$'],
      answer: 3,
      solution:
        'Route one, the tangent-secant power: $PT^2 = PA \\cdot PB = 9 \\cdot 36 = 324$, so $PT = 18$ feet ✓. Check a second, independent way, with the perpendicular from the center: let $M$ be the midpoint of chord $AB$, so $PM = \\frac{9 + 36}{2} = 22.5$ and $MB = \\frac{36 - 9}{2} = 13.5$, and $OM$ is perpendicular to the handrail. The tangent is perpendicular to radius $OT$, so $PT^2 = OP^2 - r^2 = (PM^2 + OM^2) - (MB^2 + OM^2) = 22.5^2 - 13.5^2 = 506.25 - 182.25 = 324$, giving $PT = 18$ ✓. (The figure marks the pieces $9$ and $27$; the whole handrail is $PB = 9 + 27 = 36$.) (The choice $27$ is REPORTING THE CROSSING PIECE $AB$ instead of the rope ✗; the choice $324$ is STOPPING AT $PT^2$ and skipping the square root ✗; the choice $9$ is SQUARE-ROOTING EACH FACTOR SEPARATELY AND ADDING, $3 + 6$ ✗.)',
    },
  ],
  // 4. P is the midpoint of one chord: AP^2 = CP * PD
  [
    {
      q: 'A rose window is a circle of stained glass. One lead strip runs straight across it from $A$ to $B$, and a second strip $CD$ crosses it at $P$, the exact midpoint of $AB$. Along the second strip the two pieces measure $CP = 4$ inches and $PD = 25$ inches. How long is $AP$?',
      fig: {
        w: 420,
        view: [-17.6943, -6.5204, 17.6943, 28.8682],
        elems: [
          { t: 'circle', c: [0, 11.1739], r: 14.9952 },
          { t: 'seg', a: [-10, 0], b: [10, 0] },
          { t: 'seg', a: [-1.3681, -3.7588], b: [8.5505, 23.4923] },
          { t: 'tick', a: [-10, 0], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [10, 0], n: 1 },
          { t: 'point', p: [-10, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [10, 0], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [-1.3681, -3.7588], label: 'C', dx: -4, dy: 12 },
          { t: 'point', p: [8.5505, 23.4923], label: 'D', dx: 4, dy: -12 },
          { t: 'point', p: [0, 0], label: 'P', dx: -8, dy: -11 },
          { t: 'label', p: [-5, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [-0.684, -1.8794], text: '4', dx: 12, dy: 4 },
          { t: 'label', p: [4.2753, 11.7462], text: '25', dx: -12, dy: -4 },
        ],
      },
      choices: ['$10$', '$100$', '$29$', '$20$'],
      answer: 0,
      solution:
        'Route one, power of a point: the two chords meet inside the circle, so $AP \\cdot PB = CP \\cdot PD = 4 \\cdot 25 = 100$. The tick marks say $P$ is the midpoint of $AB$, so $PB = AP$ and the left side is $AP^2$. Then $AP^2 = 100$ and $AP = 10$ inches ✓. Check a second, independent way, with the perpendicular from the center $O$: a radius drawn to the midpoint of a chord is perpendicular to that chord, so $OP \\perp AB$ and $r^2 = OP^2 + AP^2$, which rearranges to $AP^2 = r^2 - OP^2$. Let $M$ be the midpoint of $CD$; the whole strip is $CD = 4 + 25 = 29$, so $CM = 14.5$ and $PM = 14.5 - 4 = 10.5$. Since $OM \\perp CD$, $r^2 - OP^2 = (CM^2 + OM^2) - (PM^2 + OM^2) = 14.5^2 - 10.5^2 = 210.25 - 110.25 = 100$, giving $AP = 10$ ✓. (The choice $100$ is STOPPING AT $AP^2$ and skipping the square root ✗; the choice $29$ is ADDING THE TWO PIECES $4 + 25$ instead of multiplying ✗; the choice $20$ is REPORTING THE WHOLE CHORD $AB$ when the question asks for the half $AP$ ✗.)',
    },
    {
      q: 'The house of a curling sheet is a set of painted circles frozen into the ice. A chalk line $AB$ is snapped across the outer circle, and a second chalk line $CD$ crosses it at $P$, the midpoint of $AB$. The two pieces of the second line measure $CP = 8$ feet and $PD = 18$ feet. How long is $AP$?',
      fig: {
        w: 400,
        view: [-15.4212, -10.2449, 15.4212, 20.5976],
        elems: [
          { t: 'circle', c: [0, 5.1764], r: 13.0689 },
          { t: 'seg', a: [-12, 0], b: [12, 0] },
          { t: 'seg', a: [-2.0706, -7.7274], b: [4.6587, 17.3867] },
          { t: 'tick', a: [-12, 0], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [12, 0], n: 1 },
          { t: 'point', p: [-12, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [12, 0], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [-2.0706, -7.7274], label: 'C', dx: -3, dy: 13 },
          { t: 'point', p: [4.6587, 17.3867], label: 'D', dx: 3, dy: -13 },
          { t: 'point', p: [0, 0], label: 'P', dx: -9, dy: -11 },
          { t: 'label', p: [-6, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [-1.0353, -3.8637], text: '8', dx: 13, dy: 3 },
          { t: 'label', p: [2.3294, 8.6933], text: '18', dx: -13, dy: -3 },
        ],
      },
      choices: ['$144$', '$12$', '$26$', '$24$'],
      answer: 1,
      solution:
        'Route one, power of a point: the chords cross at $P$, so $AP \\cdot PB = CP \\cdot PD = 8 \\cdot 18 = 144$. The tick marks make $AP = PB$, so $AP^2 = 144$ and $AP = 12$ feet ✓. Check a second, independent way, with the perpendicular from the center $O$: because $P$ is the midpoint of $AB$, the radius $OP$ is perpendicular to $AB$, so $AP^2 = r^2 - OP^2$. Let $M$ be the midpoint of $CD$; the whole line is $CD = 8 + 18 = 26$, so $CM = 13$ and $PM = 13 - 8 = 5$. Since $OM \\perp CD$, $r^2 - OP^2 = (CM^2 + OM^2) - (PM^2 + OM^2) = 13^2 - 5^2 = 169 - 25 = 144$, so $AP = 12$ ✓. (The choice $144$ is STOPPING AT $AP^2$ ✗; the choice $26$ is ADDING $8 + 18$ instead of multiplying ✗; the choice $24$ is GIVING THE WHOLE CHORD $AB$ INSTEAD OF $AP$ ✗.)',
    },
    {
      q: 'A round braided rug has two straight seams. Seam $AB$ runs edge to edge, and seam $CD$ crosses it at $P$, the midpoint of $AB$. Along the second seam the pieces measure $CP = 7$ inches and $PD = 28$ inches. How long is $AP$?',
      fig: {
        w: 440,
        view: [-21.2481, -9.9235, 21.2481, 32.5727],
        elems: [
          { t: 'circle', c: [0, 11.3246], r: 18.0069 },
          { t: 'seg', a: [-14, 0], b: [14, 0] },
          { t: 'seg', a: [-2.6222, -6.4903], b: [10.489, 25.9611] },
          { t: 'tick', a: [-14, 0], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [14, 0], n: 1 },
          { t: 'point', p: [-14, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [14, 0], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [-2.6222, -6.4903], label: 'C', dx: -5, dy: 12 },
          { t: 'point', p: [10.489, 25.9611], label: 'D', dx: 5, dy: -12 },
          { t: 'point', p: [0, 0], label: 'P', dx: -8, dy: -12 },
          { t: 'label', p: [-7, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [-1.3111, -3.2451], text: '7', dx: 12, dy: 5 },
          { t: 'label', p: [5.2445, 12.9806], text: '28', dx: -12, dy: -5 },
        ],
      },
      choices: ['$35$', '$196$', '$14$', '$28$'],
      answer: 2,
      solution:
        'Route one, power of a point: the two seams cross inside the rug, so $AP \\cdot PB = CP \\cdot PD = 7 \\cdot 28 = 196$. The tick marks say $P$ is the midpoint of $AB$, so $AP = PB$ and $AP^2 = 196$, giving $AP = 14$ inches ✓. Check a second, independent way, with the perpendicular from the center $O$: the radius to the midpoint of a chord is perpendicular to it, so $OP \\perp AB$ and $AP^2 = r^2 - OP^2$. Let $M$ be the midpoint of the second seam; $CD = 7 + 28 = 35$, so $CM = 17.5$ and $PM = 17.5 - 7 = 10.5$. Then $r^2 - OP^2 = (CM^2 + OM^2) - (PM^2 + OM^2) = 17.5^2 - 10.5^2 = 306.25 - 110.25 = 196$, so $AP = 14$ ✓. (The choice $35$ is ADDING $7 + 28$ instead of multiplying ✗; the choice $196$ is STOPPING AT $AP^2$ ✗; the choice $28$ is REPORTING THE WHOLE SEAM $AB$ rather than the half $AP$ ✗.)',
    },
  ],
  // 5. Two secants from an outside point: find the far chord CD
  [
    {
      q: 'A center-pivot sprinkler waters a circular patch of field. A farmer stands at a gate $P$ outside the patch and sights two straight lines across it. The first line meets the circle at $A$ and $B$ with $PA = 2$ meters and $AB = 10$ meters. The second line meets the circle at $C$ and $D$ with $PC = 3$ meters. How long is $CD$?',
      fig: {
        view: [-1.0804, -5.8708, 13.085, 6.2992],
        elems: [
          { t: 'circle', c: [7, 0.2142], r: 5.0046 },
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [0, 0], b: [6.1284, 5.1423] },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [2, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [12, 0], label: 'B', dx: 12, dy: 6 },
          { t: 'point', p: [2.2981, 1.9284], label: 'C', dx: -8, dy: -10 },
          { t: 'point', p: [6.1284, 5.1423], label: 'D', dx: 10, dy: -8 },
          { t: 'label', p: [1, 0], text: '2', dx: 0, dy: 14 },
          { t: 'label', p: [7, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [1.1491, 0.9642], text: '3', dx: -8, dy: -10 },
          { t: 'label', p: [4.2132, 3.5353], text: '?', dx: -9, dy: -11 },
        ],
      },
      choices: ['$8$', '$24$', '$5$', '$10$'],
      answer: 2,
      solution:
        'Route one, two secants from an outside point: the whole first secant is $PB = PA + AB = 2 + 10 = 12$, so the power of $P$ is $PA \\cdot PB = 2 \\cdot 12 = 24$. The second secant obeys the same product, $PC \\cdot PD = 24$, so $PD = 24 \\div 3 = 8$ and $CD = PD - PC = 8 - 3 = 5$ meters ✓. Check a second, independent way, with the perpendicular from the center: let $M$ be the midpoint of chord $AB$, so $PM = 2 + 5 = 7$ and $MB = 5$, and $OM \\perp AB$. Then the power is $OP^2 - r^2 = (PM^2 + OM^2) - (MB^2 + OM^2) = 7^2 - 5^2 = 49 - 25 = 24$. Writing $CD = x$ gives $PC \\cdot PD = 3(3 + x) = 24$, so $3 + x = 8$ and $x = 5$ ✓. (The choice $8$ is REPORTING THE WHOLE SECANT $PD$ instead of the chord $CD$ ✗; the choice $24$ is HANDING BACK THE POWER $PA \\cdot PB$ ✗; the choice $10$ is COPYING $AB$ and assuming the two chords match ✗.)',
    },
    {
      q: 'A traffic roundabout is a circle of grass. From a lamppost $P$ on the sidewalk a surveyor runs two straight tapes across the grass. The first tape enters at $A$ and leaves at $B$, with $PA = 5$ meters and $AB = 15$ meters. The second tape enters at $C$ and leaves at $D$, with $PC = 4$ meters. How long is $CD$?',
      fig: {
        w: 400,
        view: [-2.2339, -4.7795, 27.0554, 24.3313],
        elems: [
          { t: 'circle', c: [12.5, 9.7759], r: 12.3215 },
          { t: 'seg', a: [0, 0], b: [20, 0] },
          { t: 'seg', a: [0, 0], b: [11.7368, 22.0737] },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [5, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [20, 0], label: 'B', dx: 12, dy: 6 },
          { t: 'point', p: [1.8779, 3.5318], label: 'C', dx: -11, dy: -6 },
          { t: 'point', p: [11.7368, 22.0737], label: 'D', dx: 6, dy: -11 },
          { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [12.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [0.9389, 1.7659], text: '4', dx: -11, dy: -6 },
          { t: 'label', p: [6.8073, 12.8027], text: '?', dx: -12, dy: -7 },
        ],
      },
      choices: ['$100$', '$15$', '$25$', '$21$'],
      answer: 3,
      solution:
        'Route one, two secants from an outside point: the whole first secant is $PB = 5 + 15 = 20$, so the power of $P$ is $PA \\cdot PB = 5 \\cdot 20 = 100$. The second tape gives $PC \\cdot PD = 100$, so $PD = 100 \\div 4 = 25$ and $CD = 25 - 4 = 21$ meters ✓. Check a second, independent way, with the perpendicular from the center: let $M$ be the midpoint of chord $AB$, so $PM = 5 + 7.5 = 12.5$ and $MB = 7.5$. Since $OM \\perp AB$, the power is $OP^2 - r^2 = (PM^2 + OM^2) - (MB^2 + OM^2) = 12.5^2 - 7.5^2 = 156.25 - 56.25 = 100$. Writing $CD = x$ gives $4(4 + x) = 100$, so $4 + x = 25$ and $x = 21$ ✓. (The choice $100$ is HANDING BACK THE POWER instead of a length ✗; the choice $15$ is COPYING $AB$ and assuming both chords are equal ✗; the choice $25$ is REPORTING THE WHOLE SECANT $PD$ rather than the chord $CD$ ✗.)',
    },
    {
      q: 'A circular fire pit is ringed with stone. From a bench at $P$ outside the ring, two straight sight-lines cross the pit. One line meets the ring at $A$ and $B$, with $PA = 4$ feet and $AB = 5$ feet. The other meets the ring at $C$ and $D$, with $PC = 3$ feet. How long is $CD$?',
      fig: {
        view: [-1.0807, -1.6808, 13.0883, 11.4957],
        elems: [
          { t: 'circle', c: [6.5, 4.9075], r: 5.5076 },
          { t: 'seg', a: [0, 0], b: [9, 0] },
          { t: 'seg', a: [0, 0], b: [6, 10.3923] },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [4, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [9, 0], label: 'B', dx: 12, dy: 6 },
          { t: 'point', p: [1.5, 2.5981], label: 'C', dx: -11, dy: -7 },
          { t: 'point', p: [6, 10.3923], label: 'D', dx: 7, dy: -11 },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [6.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [0.75, 1.299], text: '3', dx: -11, dy: -7 },
          { t: 'label', p: [3.75, 6.4952], text: '?', dx: -12, dy: -7 },
        ],
      },
      choices: ['$36$', '$9$', '$12$', '$5$'],
      answer: 1,
      solution:
        'Route one, two secants from an outside point: the whole first sight-line is $PB = 4 + 5 = 9$, so the power of $P$ is $PA \\cdot PB = 4 \\cdot 9 = 36$. The other sight-line gives $PC \\cdot PD = 36$, so $PD = 36 \\div 3 = 12$ and $CD = 12 - 3 = 9$ feet ✓. Check a second, independent way, with the perpendicular from the center: let $M$ be the midpoint of chord $AB$, so $PM = 4 + 2.5 = 6.5$ and $MB = 2.5$. With $OM \\perp AB$, the power is $OP^2 - r^2 = (PM^2 + OM^2) - (MB^2 + OM^2) = 6.5^2 - 2.5^2 = 42.25 - 6.25 = 36$. Writing $CD = x$ gives $3(3 + x) = 36$, so $3 + x = 12$ and $x = 9$ ✓. (The choice $36$ is HANDING BACK THE POWER OF THE POINT instead of a length ✗; the choice $12$ is REPORTING THE WHOLE SECANT $PD$ instead of the chord $CD$ ✗; the choice $5$ is COPYING $AB$ and assuming the two chords are the same ✗.)',
    },
  ],
  // 6. Tangent and secant from an outside point: find the chord AB
  [
    {
      q: 'A koi pond is a perfect circle. A straight plank $PT$ touches the rim at exactly one point $T$, and from the same post $P$ a rope runs across the pond, entering at $A$ and leaving at $B$. The plank is $PT = 12$ meters and the post-to-rim distance is $PA = 9$ meters. How long is the chord $AB$?',
      fig: {
        view: [-1.7502, -2.6964, 21.1964, 14.6964],
        elems: [
          { t: 'circle', c: [12.5, 6], r: 6.9462 },
          { t: 'seg', a: [0, 0], b: [16, 0] },
          { t: 'seg', a: [0, 0], b: [6.7614, 9.9138] },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [9, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [16, 0], label: 'B', dx: 12, dy: 6 },
          { t: 'point', p: [6.7614, 9.9138], label: 'T', dx: 7, dy: -11 },
          { t: 'label', p: [3.3807, 4.9569], text: '12', dx: -11, dy: -7 },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [12.5, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$16$', '$3$', '$144$', '$7$'],
      answer: 3,
      solution:
        'Route one, the tangent-secant power: $PT^2 = PA \\cdot PB$, so $12^2 = 9 \\cdot PB$ and $PB = 144 \\div 9 = 16$. That is the whole rope from the post, so the chord is $AB = PB - PA = 16 - 9 = 7$ meters ✓. Check a second, independent way, with the perpendicular from the center, solving for the chord directly: call the chord $AB = w$ and let $M$ be its midpoint, so $PM = 9 + \\frac{w}{2}$ and $MB = \\frac{w}{2}$. A tangent meets the radius $OT$ at a right angle, so $PT^2 = OP^2 - r^2 = \\left(PM^2 + OM^2\\right) - \\left(MB^2 + OM^2\\right) = \\left(9 + \\frac{w}{2}\\right)^2 - \\left(\\frac{w}{2}\\right)^2 = 81 + 9w$. Setting $81 + 9w = 144$ gives $9w = 63$ and $w = 7$ ✓. (The choice $16$ is REPORTING THE WHOLE SECANT $PB$ instead of the chord ✗; the choice $3$ is SUBTRACTING THE TWO GIVENS, $12 - 9$ ✗; the choice $144$ is HANDING BACK $PT^2$ ✗.)',
    },
    {
      q: 'A round tabletop has a straight ruler laid so it just grazes the edge at one point $T$, starting from a pin $P$ on the tabletop mat. A second ruler from the same pin crosses the tabletop, meeting the edge at $A$ and again at $B$. The grazing ruler measures $PT = 28$ inches and $PA = 14$ inches. How long is the chord $AB$?',
      fig: {
        w: 400,
        view: [-4, -11, 66, 51],
        elems: [
          { t: 'circle', c: [35, 20], r: 29 },
          { t: 'seg', a: [0, 0], b: [56, 0] },
          { t: 'seg', a: [0, 0], b: [6.8923, 27.1379] },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [14, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [56, 0], label: 'B', dx: 12, dy: 6 },
          { t: 'point', p: [6.8923, 27.1379], label: 'T', dx: 6, dy: -12 },
          { t: 'label', p: [3.4461, 13.569], text: '28', dx: -12, dy: -6 },
          { t: 'label', p: [7, 0], text: '14', dx: 0, dy: 14 },
          { t: 'label', p: [35, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$42$', '$56$', '$14$', '$784$'],
      answer: 0,
      solution:
        'Route one, the tangent-secant power: $PT^2 = PA \\cdot PB$ gives $28^2 = 14 \\cdot PB$, so $PB = 784 \\div 14 = 56$ and the chord is $AB = 56 - 14 = 42$ inches ✓. Check a second, independent way, with the perpendicular from the center, aiming straight at the chord: write $AB = w$ and let $M$ be the midpoint of $AB$, so $PM = 14 + \\frac{w}{2}$ and $MB = \\frac{w}{2}$. Because the tangent is perpendicular to the radius $OT$, $PT^2 = OP^2 - r^2 = \\left(14 + \\frac{w}{2}\\right)^2 - \\left(\\frac{w}{2}\\right)^2 = 196 + 14w$. Then $196 + 14w = 784$, so $14w = 588$ and $w = 42$ ✓. (The choice $56$ is REPORTING THE WHOLE SECANT $PB$ rather than the chord $AB$ ✗; the choice $14$ is SUBTRACTING THE GIVENS, $28 - 14$ ✗; the choice $784$ is STOPPING AT $PT^2$ ✗.)',
    },
    {
      q: 'A round grain bin is fenced in a circle. A straight cable from a stake $P$ touches the fence at one point $T$ and measures $PT = 12$ feet. A second cable from the same stake cuts across the bin, entering the fence at $A$ and reaching the far side at $B$, with the whole cable $PB = 18$ feet. How long is the chord $AB$?',
      fig: {
        view: [-1.8729, -3.6832, 22.6832, 15.6832],
        elems: [
          { t: 'circle', c: [13, 6], r: 7.8102 },
          { t: 'seg', a: [0, 0], b: [18, 0] },
          { t: 'seg', a: [0, 0], b: [6.3886, 10.158] },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [8, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [18, 0], label: 'B', dx: 12, dy: 6 },
          { t: 'point', p: [6.3886, 10.158], label: 'T', dx: 7, dy: -11 },
          { t: 'label', p: [3.1943, 5.079], text: '12', dx: -11, dy: -7 },
          { t: 'label', p: [13, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [9, 0], text: '18', dx: 0, dy: -12 },
        ],
      },
      choices: ['$6$', '$144$', '$10$', '$8$'],
      answer: 2,
      solution:
        'Route one, the tangent-secant power: $PT^2 = PA \\cdot PB$, and this time the whole cable $PB = 18$ is the known factor, so $144 = PA \\cdot 18$ and $PA = 8$. The chord is the leftover piece, $AB = PB - PA = 18 - 8 = 10$ feet ✓. Check a second, independent way, with the perpendicular from the center: write $AB = w$, so $PA = 18 - w$ and the midpoint $M$ of $AB$ sits at $PM = \\frac{(18 - w) + 18}{2} = 18 - \\frac{w}{2}$, with $MB = \\frac{w}{2}$. Since the tangent is perpendicular to radius $OT$, $PT^2 = \\left(18 - \\frac{w}{2}\\right)^2 - \\left(\\frac{w}{2}\\right)^2 = 324 - 18w$. Setting $324 - 18w = 144$ gives $18w = 180$ and $w = 10$ ✓. (The choice $6$ is SUBTRACTING THE GIVENS, $18 - 12$ ✗; the choice $144$ is HANDING BACK $PT^2$ instead of a length ✗; the choice $8$ is STOPPING AT THE NEAR PIECE $PA$ ✗.)',
    },
  ],
  // 7. Two chords crossing inside: find the far piece PB
  [
    {
      q: 'A round sandbox has two planks laid across it. Plank $CD$ is $15$ feet long and crosses plank $AB$ at the point $P$, which sits $3$ feet from the end $C$. On the other plank, $AP = 4$ feet. How long is $PB$?',
      fig: {
        view: [-7.1841, -4.6739, 12.1841, 14.6943],
        elems: [
          { t: 'circle', c: [2.5, 5.0102], r: 8.2069 },
          { t: 'seg', a: [-4, 0], b: [9, 0] },
          { t: 'seg', a: [0.5209, -2.9544], b: [-2.0838, 11.8177] },
          { t: 'point', p: [-4, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [9, 0], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [0.5209, -2.9544], label: 'C', dx: 2, dy: 13 },
          { t: 'point', p: [-2.0838, 11.8177], label: 'D', dx: -2, dy: -13 },
          { t: 'point', p: [0, 0], label: 'P', dx: 9, dy: -11 },
          { t: 'label', p: [-2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [4.5, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [0.2605, -1.4772], text: '3', dx: 13, dy: -2 },
        ],
      },
      choices: ['$9$', '$12$', '$11.25$', '$36$'],
      answer: 0,
      solution:
        'Route one, power of a point: first split the long plank, $PD = CD - CP = 15 - 3 = 12$. Two chords crossing inside give $AP \\cdot PB = CP \\cdot PD = 3 \\cdot 12 = 36$, so $PB = 36 \\div 4 = 9$ feet ✓. Check a second, independent way, with the perpendicular from the center: let $N$ be the midpoint of $CD$, so $CN = 7.5$ and $PN = 7.5 - 3 = 4.5$; since $ON \\perp CD$, the quantity $r^2 - OP^2 = \\left(CN^2 + ON^2\\right) - \\left(PN^2 + ON^2\\right) = 7.5^2 - 4.5^2 = 56.25 - 20.25 = 36$. The same quantity worked on chord $AB$ must give $AP \\cdot PB = 36$, so $PB = 9$; and it closes, since $AB = 4 + 9 = 13$ makes the half-chord $6.5$ with $P$ at $6.5 - 4 = 2.5$ from the midpoint, and $6.5^2 - 2.5^2 = 42.25 - 6.25 = 36$ ✓. (The choice $12$ is STOPPING AT $PD$ ✗; the choice $11.25$ is USING THE WHOLE PLANK $CD$ IN PLACE OF $PD$, $3 \\cdot 15 \\div 4$ ✗; the choice $36$ is HANDING BACK THE PRODUCT instead of the missing length ✗.)',
    },
    {
      q: 'Two straight spokes are stretched across a bicycle wheel. Spoke $CD$ measures $14$ inches and meets spoke $AB$ at $P$, which lies $4$ inches from $C$. Along the other spoke, $AP = 5$ inches. How long is $PB$?',
      fig: {
        view: [-7.0194, -5.3768, 10.0194, 11.6621],
        elems: [
          { t: 'circle', c: [1.5, 3.1427], r: 7.2199 },
          { t: 'seg', a: [-5, 0], b: [8, 0] },
          { t: 'seg', a: [0.3486, -3.9848], b: [-0.8716, 9.9619] },
          { t: 'point', p: [-5, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [8, 0], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [0.3486, -3.9848], label: 'C', dx: 1, dy: 13 },
          { t: 'point', p: [-0.8716, 9.9619], label: 'D', dx: -1, dy: -13 },
          { t: 'point', p: [0, 0], label: 'P', dx: 9, dy: -10 },
          { t: 'label', p: [-2.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [4, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [0.1743, -1.9924], text: '4', dx: 13, dy: -1 },
        ],
      },
      choices: ['$10$', '$11.2$', '$40$', '$8$'],
      answer: 3,
      solution:
        'Route one, power of a point: split the first spoke, $PD = 14 - 4 = 10$. Crossing chords give $AP \\cdot PB = CP \\cdot PD = 4 \\cdot 10 = 40$, so $PB = 40 \\div 5 = 8$ inches ✓. Check a second, independent way, with the perpendicular from the center: let $N$ be the midpoint of $CD$, so $CN = 7$ and $PN = 7 - 4 = 3$, and $ON \\perp CD$ gives $r^2 - OP^2 = 7^2 - 3^2 = 49 - 9 = 40$. Chord $AB$ must produce the same $40$, so $5 \\cdot PB = 40$ and $PB = 8$; the check closes, because $AB = 5 + 8 = 13$ has half-chord $6.5$ with $P$ sitting $6.5 - 5 = 1.5$ from the midpoint, and $6.5^2 - 1.5^2 = 42.25 - 2.25 = 40$ ✓. (The choice $10$ is STOPPING AT $PD$ ✗; the choice $11.2$ is PUTTING THE WHOLE SPOKE $CD$ WHERE $PD$ BELONGS, $4 \\cdot 14 \\div 5$ ✗; the choice $40$ is HANDING BACK THE PRODUCT rather than the length ✗.)',
    },
    {
      q: 'A cook draws two straight cuts across a round tortilla. Cut $CD$ is $15$ centimeters long and crosses cut $AB$ at $P$, a point $5$ centimeters from $C$. On the other cut, $AP = 10$ centimeters. How long is $PB$?',
      fig: {
        view: [-11.6897, -7.0919, 6.6897, 11.2874],
        elems: [
          { t: 'circle', c: [-2.5, 2.0977], r: 7.7878 },
          { t: 'seg', a: [-10, 0], b: [5, 0] },
          { t: 'seg', a: [0.8682, -4.924], b: [-1.7365, 9.8481] },
          { t: 'point', p: [-10, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [5, 0], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [0.8682, -4.924], label: 'C', dx: 2, dy: 13 },
          { t: 'point', p: [-1.7365, 9.8481], label: 'D', dx: -2, dy: -13 },
          { t: 'point', p: [0, 0], label: 'P', dx: 9, dy: -11 },
          { t: 'label', p: [-5, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [2.5, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [0.4341, -2.462], text: '5', dx: 13, dy: -2 },
        ],
      },
      choices: ['$10$', '$5$', '$7.5$', '$50$'],
      answer: 1,
      solution:
        'Route one, power of a point: the far piece of the first cut is $PD = 15 - 5 = 10$. Crossing chords give $AP \\cdot PB = CP \\cdot PD = 5 \\cdot 10 = 50$, so $PB = 50 \\div 10 = 5$ centimeters ✓. Check a second, independent way, with the perpendicular from the center: let $N$ be the midpoint of $CD$, so $CN = 7.5$ and $PN = 7.5 - 5 = 2.5$; then $r^2 - OP^2 = 7.5^2 - 2.5^2 = 56.25 - 6.25 = 50$. Cut $AB$ must give the same $50$, so $10 \\cdot PB = 50$ and $PB = 5$; the check closes, since $AB = 10 + 5 = 15$ has half-chord $7.5$ with $P$ at $7.5 - 5 = 2.5$ from the midpoint, and $7.5^2 - 2.5^2 = 50$ ✓. (The choice $10$ is STOPPING AT $PD$, or simply copying $AP$ ✗; the choice $7.5$ is USING THE WHOLE CUT $CD$ IN PLACE OF $PD$, $5 \\cdot 15 \\div 10$ ✗; the choice $50$ is HANDING BACK THE PRODUCT instead of the missing piece ✗.)',
    },
  ],
  // 8. Tangent and secant again, larger numbers: find the chord AB
  [
    {
      q: 'A circular jogging loop is drawn on a park map. From a bench at $P$ a straight path touches the loop at exactly one point $T$, with $PT = 24$ meters. A second straight path from the bench cuts the loop at $A$ and $B$, with $PA = 18$ meters. How long is the chord $AB$?',
      fig: {
        w: 460,
        view: [-3.5003, -5.3928, 42.3928, 29.3928],
        elems: [
          { t: 'circle', c: [25, 12], r: 13.8924 },
          { t: 'seg', a: [0, 0], b: [32, 0] },
          { t: 'seg', a: [0, 0], b: [13.5227, 19.8277] },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [18, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [32, 0], label: 'B', dx: 12, dy: 6 },
          { t: 'point', p: [13.5227, 19.8277], label: 'T', dx: 7, dy: -11 },
          { t: 'label', p: [6.7614, 9.9138], text: '24', dx: -11, dy: -7 },
          { t: 'label', p: [9, 0], text: '18', dx: 0, dy: 14 },
          { t: 'label', p: [25, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$32$', '$14$', '$6$', '$576$'],
      answer: 1,
      solution:
        'Route one, the tangent-secant power: $PT^2 = PA \\cdot PB$ gives $24^2 = 18 \\cdot PB$, so $PB = 576 \\div 18 = 32$ and the chord is $AB = PB - PA = 32 - 18 = 14$ meters ✓. Check a second, independent way, with similar triangles: the angle between the tangent $PT$ and the chord $TA$ equals the inscribed angle $\\angle TBA$ in the far arc, and triangles $PTA$ and $PBT$ share the angle at $P$, so $\\triangle PTA \\sim \\triangle PBT$. Matching sides gives $\\frac{PA}{PT} = \\frac{PT}{PB}$, that is $\\frac{18}{24} = \\frac{24}{PB}$, so $PB = \\frac{24 \\cdot 24}{18} = 32$ and $AB = 32 - 18 = 14$ ✓. (The choice $32$ is REPORTING THE WHOLE SECANT $PB$ instead of the chord ✗; the choice $6$ is SUBTRACTING THE GIVENS, $24 - 18$ ✗; the choice $576$ is HANDING BACK $PT^2$ ✗.)',
    },
    {
      q: 'A fountain basin is a circle of water. A handrail from a gate $P$ touches the basin rim at one point $T$, with $PT = 20$ feet. A hose from the same gate crosses the water, meeting the rim at $A$ and again at $B$, with $PA = 16$ feet. How long is the chord $AB$?',
      fig: {
        w: 420,
        view: [-2.7506, -3.8129, 33.3129, 21.8129],
        elems: [
          { t: 'circle', c: [20.5, 9], r: 10.0623 },
          { t: 'seg', a: [0, 0], b: [25, 0] },
          { t: 'seg', a: [0, 0], b: [12.7457, 15.4126] },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [16, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [25, 0], label: 'B', dx: 12, dy: 6 },
          { t: 'point', p: [12.7457, 15.4126], label: 'T', dx: 8, dy: -10 },
          { t: 'label', p: [6.3729, 7.7063], text: '20', dx: -10, dy: -8 },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [20.5, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$25$', '$400$', '$9$', '$4$'],
      answer: 2,
      solution:
        'Route one, the tangent-secant power: $PT^2 = PA \\cdot PB$ gives $400 = 16 \\cdot PB$, so $PB = 25$ and the chord is $AB = 25 - 16 = 9$ feet ✓. Check a second, independent way, with similar triangles: the tangent-chord angle at $T$ equals the inscribed angle $\\angle TBA$ that stands on the same arc, and the two triangles share the angle at $P$, so $\\triangle PTA \\sim \\triangle PBT$. Then $\\frac{PA}{PT} = \\frac{PT}{PB}$, that is $\\frac{16}{20} = \\frac{20}{PB}$, so $PB = \\frac{400}{16} = 25$ and $AB = 25 - 16 = 9$ ✓. (The choice $25$ is REPORTING THE WHOLE HOSE $PB$ rather than the chord ✗; the choice $400$ is STOPPING AT $PT^2$ ✗; the choice $4$ is SUBTRACTING THE GIVENS, $20 - 16$ ✗.)',
    },
    {
      q: 'A goat pen is a circle of fence. From a stake $P$ just outside it, a taut rope touches the fence at one point $T$ with $PT = 6$ meters, and a second rope from the stake runs across the pen, meeting the fence at $A$ and $B$ with $PA = 2$ meters. How long is the chord $AB$?',
      fig: {
        w: 360,
        view: [-2.5436, -5.5436, 22.5436, 19.5436],
        elems: [
          { t: 'circle', c: [10, 7], r: 10.6301 },
          { t: 'seg', a: [0, 0], b: [18, 0] },
          { t: 'seg', a: [0, 0], b: [-0.5803, 5.9719] },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [2, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [18, 0], label: 'B', dx: 12, dy: 6 },
          { t: 'point', p: [-0.5803, 5.9719], label: 'T', dx: -1, dy: -13 },
          { t: 'label', p: [-0.2902, 2.9859], text: '6', dx: -13, dy: 1 },
          { t: 'label', p: [1, 0], text: '2', dx: 0, dy: 14 },
          { t: 'label', p: [10, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$16$', '$18$', '$4$', '$36$'],
      answer: 0,
      solution:
        'Route one, the tangent-secant power: $PT^2 = PA \\cdot PB$ gives $36 = 2 \\cdot PB$, so $PB = 18$ and the chord is $AB = 18 - 2 = 16$ meters ✓. Check a second, independent way, with similar triangles: the angle between tangent $PT$ and chord $TA$ matches the inscribed angle $\\angle TBA$, and both triangles carry the angle at $P$, so $\\triangle PTA \\sim \\triangle PBT$ and $\\frac{PA}{PT} = \\frac{PT}{PB}$. That reads $\\frac{2}{6} = \\frac{6}{PB}$, so $PB = 18$ and $AB = 18 - 2 = 16$ ✓. (The choice $18$ is REPORTING THE WHOLE SECANT $PB$ instead of the chord $AB$ ✗; the choice $4$ is SUBTRACTING THE GIVENS, $6 - 2$ ✗; the choice $36$ is HANDING BACK $PT^2$ ✗.)',
    },
  ],
  // 9. Diameter perpendicular to a chord: CP^2 = AP * PB
  [
    {
      q: 'A round swimming pool has a lane rope $AB$ stretched straight across the middle, through the center, and a second rope $CD$ that crosses it at right angles at the point $P$. Along the first rope, $AP = 4$ feet and $PB = 9$ feet. How long is rope $CD$?',
      fig: {
        view: [-7.67, -7.67, 7.67, 7.67],
        elems: [
          { t: 'circle', c: [0, 0], r: 6.5 },
          { t: 'seg', a: [0, 6.5], b: [0, -6.5] },
          { t: 'seg', a: [-6, 2.5], b: [6, 2.5] },
          { t: 'right', at: [0, 2.5], from: [6, 2.5], to: [0, 6.5] },
          { t: 'point', p: [0, 6.5], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [0, -6.5], label: 'B', dx: 0, dy: 15 },
          { t: 'point', p: [-6, 2.5], label: 'C', dx: -12, dy: -6 },
          { t: 'point', p: [6, 2.5], label: 'D', dx: 12, dy: -6 },
          { t: 'point', p: [0, 2.5], label: 'P', dx: -11, dy: 11 },
          { t: 'label', p: [0, 4.5], text: '4', dx: 11, dy: 0 },
          { t: 'label', p: [0, -2], text: '9', dx: 11, dy: 0 },
          { t: 'label', p: [3, 2.5], text: '?', dx: 0, dy: -11 },
        ],
      },
      choices: ['$6$', '$36$', '$12$', '$13$'],
      answer: 2,
      solution:
        'Route one, power of a point: the two ropes cross inside, so $CP \\cdot PD = AP \\cdot PB = 4 \\cdot 9 = 36$. A diameter that meets a chord at right angles cuts that chord in half, so $CP = PD$ and $CP^2 = 36$, giving $CP = 6$ and $CD = 2 \\cdot 6 = 12$ feet ✓. Check a second, independent way, with the radius: the whole rope $AB$ is a diameter of length $4 + 9 = 13$, so $r = 6.5$ and the center $O$ sits $OP = 6.5 - 4 = 2.5$ from $P$. Drawing the radius $OD$ makes a right triangle with legs $OP$ and $PD$, so $PD^2 = r^2 - OP^2 = 6.5^2 - 2.5^2 = 42.25 - 6.25 = 36$, $PD = 6$, and $CD = 12$ ✓. (The choice $6$ is STOPPING AT THE HALF-ROPE $PD$ ✗; the choice $36$ is HANDING BACK THE PRODUCT $4 \\cdot 9$ ✗; the choice $13$ is GIVING THE DIAMETER $AB$ instead of the crossing rope ✗.)',
    },
    {
      q: 'A circular garden bed has a board $AB$ laid across it through the center, and a second board $CD$ meeting it at a right angle at $P$. Along the first board, $AP = 5$ feet and $PB = 20$ feet. How long is board $CD$?',
      fig: {
        view: [-14.75, -14.75, 14.75, 14.75],
        elems: [
          { t: 'circle', c: [0, 0], r: 12.5 },
          { t: 'seg', a: [0, 12.5], b: [0, -12.5] },
          { t: 'seg', a: [-10, 7.5], b: [10, 7.5] },
          { t: 'right', at: [0, 7.5], from: [10, 7.5], to: [0, 12.5] },
          { t: 'point', p: [0, 12.5], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [0, -12.5], label: 'B', dx: 0, dy: 15 },
          { t: 'point', p: [-10, 7.5], label: 'C', dx: -12, dy: -6 },
          { t: 'point', p: [10, 7.5], label: 'D', dx: 12, dy: -6 },
          { t: 'point', p: [0, 7.5], label: 'P', dx: -11, dy: 11 },
          { t: 'label', p: [0, 10], text: '5', dx: 11, dy: 0 },
          { t: 'label', p: [0, -2.5], text: '20', dx: 11, dy: 0 },
          { t: 'label', p: [5, 7.5], text: '?', dx: 0, dy: -11 },
        ],
      },
      choices: ['$20$', '$10$', '$100$', '$25$'],
      answer: 0,
      solution:
        'Route one, power of a point: the boards cross inside the bed, so $CP \\cdot PD = AP \\cdot PB = 5 \\cdot 20 = 100$. The right angle marks $AB$ as a diameter perpendicular to $CD$, which bisects $CD$, so $CP = PD$ and $CP^2 = 100$. Then $CP = 10$ and $CD = 20$ feet ✓. Check a second, independent way, with the radius: the diameter is $5 + 20 = 25$, so $r = 12.5$ and $OP = 12.5 - 5 = 7.5$. The radius $OD$ closes a right triangle on legs $OP$ and $PD$, so $PD^2 = 12.5^2 - 7.5^2 = 156.25 - 56.25 = 100$, $PD = 10$, and $CD = 20$ ✓. (The choice $10$ is STOPPING AT THE HALF-BOARD $PD$ ✗; the choice $100$ is HANDING BACK THE PRODUCT ✗; the choice $25$ is REPORTING THE DIAMETER $AB$ ✗.)',
    },
    {
      q: 'Children hold a round play parachute flat. A ribbon $AB$ runs across it through the center, and a second ribbon $CD$ crosses $AB$ at a right angle at the point $P$. Along the first ribbon, $AP = 2$ feet and $PB = 18$ feet. How long is ribbon $CD$?',
      fig: {
        view: [-11.8, -11.8, 11.8, 11.8],
        elems: [
          { t: 'circle', c: [0, 0], r: 10 },
          { t: 'seg', a: [0, 10], b: [0, -10] },
          { t: 'seg', a: [-6, 8], b: [6, 8] },
          { t: 'right', at: [0, 8], from: [6, 8], to: [0, 10] },
          { t: 'point', p: [0, 10], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [0, -10], label: 'B', dx: 0, dy: 15 },
          { t: 'point', p: [-6, 8], label: 'C', dx: -12, dy: -6 },
          { t: 'point', p: [6, 8], label: 'D', dx: 12, dy: -6 },
          { t: 'point', p: [0, 8], label: 'P', dx: -11, dy: 11 },
          { t: 'label', p: [0, 9], text: '2', dx: 11, dy: 0 },
          { t: 'label', p: [0, -1], text: '18', dx: 11, dy: 0 },
          { t: 'label', p: [3, 8], text: '?', dx: 0, dy: -11 },
        ],
      },
      choices: ['$36$', '$6$', '$20$', '$12$'],
      answer: 3,
      solution:
        'Route one, power of a point: the ribbons cross inside the parachute, so $CP \\cdot PD = AP \\cdot PB = 2 \\cdot 18 = 36$. Ribbon $AB$ is a diameter and it meets $CD$ at a right angle, so it bisects $CD$: $CP = PD$ and $CP^2 = 36$, giving $CP = 6$ and $CD = 12$ feet ✓. Check a second, independent way, with the radius: the diameter is $2 + 18 = 20$, so $r = 10$ and $OP = 10 - 2 = 8$. The radius $OD$ makes a right triangle with legs $OP = 8$ and $PD$, so $PD^2 = 10^2 - 8^2 = 100 - 64 = 36$, $PD = 6$, and the whole ribbon is $CD = 12$ ✓. (The choice $36$ is HANDING BACK THE PRODUCT $2 \\cdot 18$ ✗; the choice $6$ is STOPPING AT THE HALF-RIBBON $PD$ ✗; the choice $20$ is REPORTING THE DIAMETER $AB$ ✗.)',
    },
  ],
  // 10. Secant through the center plus a tangent: find PT
  [
    {
      q: 'A circular hedge maze has radius $12$ meters. From a gate $P$ outside the hedge, a straight walkway runs through the center $O$, entering the hedge at $A$ and leaving at $B$, with $PA = 8$ meters. A second straight walkway from the gate just touches the hedge at $T$. How long is $PT$?',
      fig: {
        w: 440,
        view: [-2.88, -14.88, 34.88, 14.88],
        elems: [
          { t: 'circle', c: [20, 0], r: 12 },
          { t: 'seg', a: [0, 0], b: [32, 0] },
          { t: 'seg', a: [0, 0], b: [12.8, 9.6] },
          { t: 'seg', a: [20, 0], b: [12.8, 9.6], dash: true },
          { t: 'right', at: [12.8, 9.6], from: [0, 0], to: [20, 0] },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [8, 0], label: 'A', dx: -4, dy: 15 },
          { t: 'point', p: [20, 0], label: 'O', dx: 0, dy: 15 },
          { t: 'point', p: [32, 0], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [12.8, 9.6], label: 'T', dx: 10, dy: -8 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [26, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [16.4, 4.8], text: '12', dx: 8, dy: 8 },
          { t: 'label', p: [6.4, 4.8], text: '?', dx: -8, dy: -10 },
        ],
      },
      choices: ['$256$', '$20$', '$4\\sqrt{10}$', '$16$'],
      answer: 3,
      solution:
        'Route one, the tangent-secant power: the walkway through the center crosses the whole hedge, a distance of $2r = 24$, so $PB = PA + 24 = 8 + 24 = 32$. Then $PT^2 = PA \\cdot PB = 8 \\cdot 32 = 256$ and $PT = 16$ meters ✓. Check a second, independent way, with the right triangle at the touch point: a tangent meets the radius $OT$ at a right angle, and $OP = PA + r = 8 + 12 = 20$, so $PT^2 = OP^2 - r^2 = 20^2 - 12^2 = 400 - 144 = 256$ and $PT = 16$ ✓. (The choice $256$ is STOPPING AT $PT^2$ ✗; the choice $20$ is REPORTING THE DISTANCE $OP$ TO THE CENTER instead of the tangent ✗; the choice $4\\sqrt{10}$ is USING $OP$ AS THE FAR INTERSECTION, $\\sqrt{8 \\cdot 20}$ ✗.)',
    },
    {
      q: 'An outdoor ice rink is a circle of radius $24$ meters. From a bench at $P$ a straight path runs through the center $O$, meeting the edge at $A$ and then at $B$, with $PA = 2$ meters. Another straight path from the bench touches the edge at a single point $T$. How long is $PT$?',
      fig: {
        w: 480,
        view: [-4.5, -28.5, 54.5, 28.5],
        elems: [
          { t: 'circle', c: [26, 0], r: 24 },
          { t: 'seg', a: [0, 0], b: [50, 0] },
          { t: 'seg', a: [0, 0], b: [3.8462, 9.2308] },
          { t: 'seg', a: [26, 0], b: [3.8462, 9.2308], dash: true },
          { t: 'right', at: [3.8462, 9.2308], from: [0, 0], to: [26, 0] },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [2, 0], label: 'A', dx: -4, dy: 15 },
          { t: 'point', p: [26, 0], label: 'O', dx: 0, dy: 15 },
          { t: 'point', p: [50, 0], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [3.8462, 9.2308], label: 'T', dx: 5, dy: -12 },
          { t: 'label', p: [1, 0], text: '2', dx: 0, dy: 14 },
          { t: 'label', p: [38, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [14.9231, 4.6154], text: '24', dx: 8, dy: 8 },
          { t: 'label', p: [1.9231, 4.6154], text: '?', dx: -12, dy: -5 },
        ],
      },
      choices: ['$100$', '$10$', '$26$', '$2\\sqrt{13}$'],
      answer: 1,
      solution:
        'Route one, the tangent-secant power: the path through the center crosses the full width $2r = 48$, so $PB = 2 + 48 = 50$. Then $PT^2 = PA \\cdot PB = 2 \\cdot 50 = 100$ and $PT = 10$ meters ✓. Check a second, independent way, with the right triangle at the touch point: the tangent is perpendicular to radius $OT$, and $OP = PA + r = 2 + 24 = 26$, so $PT^2 = OP^2 - r^2 = 676 - 576 = 100$, giving $PT = 10$ ✓. (The choice $100$ is STOPPING AT $PT^2$ ✗; the choice $26$ is REPORTING $OP$, the distance to the center ✗; the choice $2\\sqrt{13}$ is MULTIPLYING $PA$ BY $OP$ INSTEAD OF $PB$, $\\sqrt{2 \\cdot 26}$ ✗.)',
    },
    {
      q: 'An observatory dome has a circular base of radius $20$ feet. From a marker at $P$ on the floor outside, a chalk line runs through the center $O$, meeting the base at $A$ and then at $B$, with $PA = 5$ feet. A second chalk line from the marker touches the base at exactly one point $T$. How long is $PT$?',
      fig: {
        w: 460,
        view: [-4.05, -24.05, 49.05, 24.05],
        elems: [
          { t: 'circle', c: [25, 0], r: 20 },
          { t: 'seg', a: [0, 0], b: [45, 0] },
          { t: 'seg', a: [0, 0], b: [9, 12] },
          { t: 'seg', a: [25, 0], b: [9, 12], dash: true },
          { t: 'right', at: [9, 12], from: [0, 0], to: [25, 0] },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [5, 0], label: 'A', dx: -4, dy: 15 },
          { t: 'point', p: [25, 0], label: 'O', dx: 0, dy: 15 },
          { t: 'point', p: [45, 0], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [9, 12], label: 'T', dx: 8, dy: -10 },
          { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [35, 0], text: '20', dx: 0, dy: 14 },
          { t: 'label', p: [17, 6], text: '20', dx: 8, dy: 8 },
          { t: 'label', p: [4.5, 6], text: '?', dx: -10, dy: -8 },
        ],
      },
      choices: ['$225$', '$25$', '$15$', '$5\\sqrt{5}$'],
      answer: 2,
      solution:
        'Route one, the tangent-secant power: the chalk line through the center spans the full width $2r = 40$, so $PB = 5 + 40 = 45$. Then $PT^2 = PA \\cdot PB = 5 \\cdot 45 = 225$ and $PT = 15$ feet ✓. Check a second, independent way, with the right triangle at the touch point: the tangent meets radius $OT$ at a right angle, and $OP = PA + r = 5 + 20 = 25$, so $PT^2 = OP^2 - r^2 = 625 - 400 = 225$ and $PT = 15$ ✓. (The choice $225$ is STOPPING AT $PT^2$ ✗; the choice $25$ is REPORTING $OP$, the distance from the marker to the center ✗; the choice $5\\sqrt{5}$ is PAIRING $PA$ WITH $OP$ INSTEAD OF $PB$, $\\sqrt{5 \\cdot 25}$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 13,
  sections: { '13.1': s131 },
}
