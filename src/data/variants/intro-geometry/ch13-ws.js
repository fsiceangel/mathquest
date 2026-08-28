// Introduction to Geometry chapter 13 — variations for the printable worksheet.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key anywhere in
//    this file. Answers copy the base worksheet's formatting: a named length
//    like '$PD = 25$', '$CD = 31$', '$PT = 42$', the word form 'radius $= 37$'
//    for the radius slot, and a measured height with its unit for the arch
//    slot.
//  - Every answer was worked twice by two genuinely different routes, and the
//    routes had to agree before the key was written: the equal-products rule
//    vs. a pair of similar triangles built from equal inscribed angles (slots
//    1, 2, 3, 4); the tangent-as-limiting-secant rule vs. the tangent-chord
//    angle feeding an AA similarity whose scale factor squares to PB/PA
//    (slots 5, 6); factoring the quadratic vs. hunting the factor pair of the
//    power with the right gap (slots 7, 8); the power of the crossing point
//    vs. the Pythagorean theorem on the center-to-chord distance (slot 9);
//    finding the radius and then measuring with the Pythagorean theorem vs.
//    two applications of the power of a point that never name the radius at
//    all (slot 10).
//  - Figures are coordinate-exact and were verified numerically, never
//    eyeballed. Each crossing point sits at the origin; every labeled point on
//    a circle was checked against that circle's center and radius, and the
//    largest residual over all thirty figures was below 0.0001. Tangency was
//    checked by dotting the radius against the tangent segment, and every
//    tangent point also reproduces its stated tangent length to four decimals.
//  - Figure labels are plain text: bare numerals and the letters of points.
//  - Pin deviations: none — all thirty lanes use their pinned values.

const worksheet = [
  // slot 1 — two chords crossing inside; PD = AP·PB/CP.
  //          Lanes: 5, 20, 4 -> 25; 3, 22, 2 -> 33; 5, 24, 3 -> 40.
  [
    {
      q: 'Two ropes are stretched across a circular skate bowl and cross at a point $P$. The first runs from $A$ to $B$ with $AP = 5$ and $PB = 20$; the second runs from $C$ to $D$ with $CP = 4$. Find $PD$.',
      fig: {
        view: [-12, -9, 27, 30],
        elems: [
          { t: 'circle', c: [7.5, 10.5], r: 16.3248 },
          { t: 'seg', a: [-5, 0], b: [20, 0] },
          { t: 'seg', a: [0, -4], b: [0, 25] },
          { t: 'point', p: [-5, 0], label: 'A', dx: -11, dy: 0 },
          { t: 'point', p: [20, 0], label: 'B', dx: 11, dy: 0 },
          { t: 'point', p: [0, -4], label: 'C', dx: 0, dy: 14 },
          { t: 'point', p: [0, 25], label: 'D', dx: 0, dy: -11 },
          { t: 'point', p: [0, 0], label: 'P', dx: 11, dy: 13 },
          { t: 'label', p: [-2.5, 0], text: '5', dx: 0, dy: -10 },
          { t: 'label', p: [10, 0], text: '20', dx: 0, dy: -10 },
          { t: 'label', p: [0, -2], text: '4', dx: -11, dy: 0 },
          { t: 'label', p: [0, 12.5], text: '?', dx: -11, dy: 0 },
        ],
      },
      answer: '$PD = 25$',
      solution:
        'Both ropes are chords through the same interior point, so the two products of pieces are the same number — the power of $P$: $AP \\cdot PB = CP \\cdot PD$. That reads $5 \\cdot 20 = 4 \\cdot PD$, so $100 = 4 \\cdot PD$ and $PD = 25$ ✓. Second route through similar triangles: draw $\\overline{AC}$ and $\\overline{DB}$. The angles at $A$ and at $D$ both stand on arc $CB$, so $\\angle CAP = \\angle BDP$, and the angles at $P$ are vertical, so triangle $APC$ is similar to triangle $DPB$. Matching sides, $CP$ corresponds to $BP$: the ratio is $4 : 20 = 1 : 5$. Then $AP$ corresponds to $DP$ in that same ratio, so $DP = 5 \\cdot AP = 5 \\cdot 5 = 25$ ✓.',
    },
    {
      q: 'On a round hockey rink two straight guide lines are painted, crossing at $P$. One goes from $A$ to $B$ with $AP = 3$ and $PB = 22$; the other goes from $C$ to $D$ with $CP = 2$. Find $PD$.',
      fig: {
        view: [-16, -7, 35, 44],
        elems: [
          { t: 'circle', c: [9.5, 18.5923], r: 22.4037 },
          { t: 'seg', a: [-3, 0], b: [22, 0] },
          { t: 'seg', a: [0.5176, -1.9319], b: [-8.541, 31.8756] },
          { t: 'point', p: [-3, 0], label: 'A', dx: -11, dy: 4 },
          { t: 'point', p: [22, 0], label: 'B', dx: 11, dy: 0 },
          { t: 'point', p: [0.5176, -1.9319], label: 'C', dx: 12, dy: 4 },
          { t: 'point', p: [-8.541, 31.8756], label: 'D', dx: -11, dy: -6 },
          { t: 'point', p: [0, 0], label: 'P', dx: 9, dy: -9 },
          { t: 'label', p: [-1.5, 0], text: '3', dx: 0, dy: 15 },
          { t: 'label', p: [11, 0], text: '22', dx: 0, dy: 15 },
          { t: 'label', p: [0.2588, -0.9659], text: '2', dx: 13, dy: -4 },
          { t: 'label', p: [-4.2705, 15.9378], text: '?', dx: -12, dy: 0 },
        ],
      },
      answer: '$PD = 33$',
      solution:
        'The two guide lines are chords meeting inside the rink, so their piece-products agree: $AP \\cdot PB = CP \\cdot PD$, that is $3 \\cdot 22 = 2 \\cdot PD$. So $66 = 2 \\cdot PD$ and $PD = 33$ ✓. Second route through similar triangles: join $A$ to $C$ and $D$ to $B$. The inscribed angles $\\angle CAP$ and $\\angle BDP$ both open onto arc $CB$, so they are equal, and the angles at $P$ are a vertical pair; triangle $APC$ is therefore similar to triangle $DPB$. The side $CP$ matches $BP$ in the ratio $2 : 22 = 1 : 11$, so $AP$ matches $DP$ in that ratio too, giving $DP = 11 \\cdot 3 = 33$ ✓.',
    },
    {
      q: 'Two threads are pulled tight across a circular embroidery hoop and cross at $P$. One thread runs from $A$ to $B$ with $AP = 5$ and $PB = 24$; the other runs from $C$ to $D$ with $CP = 3$. Find $PD$.',
      fig: {
        view: [-16, -8, 35, 42],
        elems: [
          { t: 'circle', c: [9.5, 16.6071], r: 22.0464 },
          { t: 'seg', a: [-5, 0], b: [24, 0] },
          { t: 'seg', a: [-0.7765, -2.8978], b: [10.3528, 38.637] },
          { t: 'point', p: [-5, 0], label: 'A', dx: -11, dy: 0 },
          { t: 'point', p: [24, 0], label: 'B', dx: 11, dy: 0 },
          { t: 'point', p: [-0.7765, -2.8978], label: 'C', dx: -11, dy: 6 },
          { t: 'point', p: [10.3528, 38.637], label: 'D', dx: 11, dy: -4 },
          { t: 'point', p: [0, 0], label: 'P', dx: -11, dy: -8 },
          { t: 'label', p: [-2.5, 0], text: '5', dx: 0, dy: 15 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 15 },
          { t: 'label', p: [-0.3882, -1.4489], text: '3', dx: -12, dy: -2 },
          { t: 'label', p: [5.1764, 19.3185], text: '?', dx: 13, dy: 0 },
        ],
      },
      answer: '$PD = 40$',
      solution:
        'Two chords crossing inside the hoop share one power of the point: $AP \\cdot PB = CP \\cdot PD$, so $5 \\cdot 24 = 3 \\cdot PD$. That is $120 = 3 \\cdot PD$, giving $PD = 40$ ✓. Second route through similar triangles: connect $A$ to $C$ and $D$ to $B$. Both $\\angle CAP$ and $\\angle BDP$ are inscribed on arc $CB$, so they are equal, and the vertical angles at $P$ match; triangle $APC$ is similar to triangle $DPB$. Side $CP$ corresponds to $BP$ in the ratio $3 : 24 = 1 : 8$, so $DP = 8 \\cdot AP = 8 \\cdot 5 = 40$ ✓.',
    },
  ],

  // slot 2 — two chords crossing inside; PD = AP·PB/CP.
  //          Lanes: 4, 17, 2 -> 34; 4, 19, 2 -> 38; 2, 26, 4 -> 13.
  [
    {
      q: 'A round patchwork quilt has two straight seams that cross at $P$. One seam joins $A$ to $B$ with $AP = 4$ and $PB = 17$; the other joins $C$ to $D$ with $CP = 2$. Find $PD$.',
      fig: {
        view: [-16, -6, 29, 39],
        elems: [
          { t: 'circle', c: [6.5, 16.6298], r: 19.6672 },
          { t: 'seg', a: [-4, 0], b: [17, 0] },
          { t: 'seg', a: [0.1743, -1.9924], b: [-2.9633, 33.8706] },
          { t: 'point', p: [-4, 0], label: 'A', dx: -11, dy: 2 },
          { t: 'point', p: [17, 0], label: 'B', dx: 11, dy: 0 },
          { t: 'point', p: [0.1743, -1.9924], label: 'C', dx: 12, dy: 5 },
          { t: 'point', p: [-2.9633, 33.8706], label: 'D', dx: -11, dy: -5 },
          { t: 'point', p: [0, 0], label: 'P', dx: 10, dy: -9 },
          { t: 'label', p: [-2, 0], text: '4', dx: 0, dy: 15 },
          { t: 'label', p: [8.5, 0], text: '17', dx: 0, dy: 15 },
          { t: 'label', p: [0.0872, -0.9962], text: '2', dx: 13, dy: -3 },
          { t: 'label', p: [-1.4816, 16.9353], text: '?', dx: -12, dy: 0 },
        ],
      },
      answer: '$PD = 34$',
      solution:
        'The seams are chords meeting at an interior point, so the two products match: $AP \\cdot PB = CP \\cdot PD$, giving $4 \\cdot 17 = 2 \\cdot PD$. Then $68 = 2 \\cdot PD$ and $PD = 34$ ✓. Second route through similar triangles: stitch in $\\overline{AC}$ and $\\overline{DB}$. The inscribed angles $\\angle CAP$ and $\\angle BDP$ both rest on arc $CB$ and are equal, and the angles at $P$ are vertical, so triangle $APC$ is similar to triangle $DPB$. The pair $CP$ and $BP$ sits in the ratio $2 : 17$, so $AP$ and $DP$ do too: $DP = \\frac{17}{2} \\cdot 4 = 34$ ✓.',
    },
    {
      q: 'Two straight walking paths cut through a circular hedge maze and cross at $P$. One path runs from $A$ to $B$ with $AP = 4$ and $PB = 19$; the other runs from $C$ to $D$ with $CP = 2$. Find $PD$.',
      fig: {
        view: [-20, -6, 35, 50],
        elems: [
          { t: 'circle', c: [7.5, 21.885], r: 24.7225 },
          { t: 'seg', a: [-4, 0], b: [19, 0] },
          { t: 'seg', a: [0.684, -1.8794], b: [-12.9968, 35.7083] },
          { t: 'point', p: [-4, 0], label: 'A', dx: -11, dy: 5 },
          { t: 'point', p: [19, 0], label: 'B', dx: 11, dy: 0 },
          { t: 'point', p: [0.684, -1.8794], label: 'C', dx: 12, dy: 5 },
          { t: 'point', p: [-12.9968, 35.7083], label: 'D', dx: -11, dy: -5 },
          { t: 'point', p: [0, 0], label: 'P', dx: 10, dy: -9 },
          { t: 'label', p: [-2, 0], text: '4', dx: 0, dy: 15 },
          { t: 'label', p: [9.5, 0], text: '19', dx: 0, dy: 15 },
          { t: 'label', p: [0.342, -0.9397], text: '2', dx: 13, dy: -3 },
          { t: 'label', p: [-6.4984, 17.8542], text: '?', dx: -12, dy: 0 },
        ],
      },
      answer: '$PD = 38$',
      solution:
        'Both paths are chords of the maze and they meet inside it, so $AP \\cdot PB = CP \\cdot PD$: $4 \\cdot 19 = 2 \\cdot PD$, so $76 = 2 \\cdot PD$ and $PD = 38$ ✓. Second route through similar triangles: draw $\\overline{AC}$ and $\\overline{DB}$. Since $\\angle CAP$ and $\\angle BDP$ are inscribed on the same arc $CB$ they are equal, and the vertical angles at $P$ agree, so triangle $APC$ is similar to triangle $DPB$. Side $CP$ corresponds to $BP$ in the ratio $2 : 19$, so $DP = \\frac{19}{2} \\cdot AP = \\frac{19}{2} \\cdot 4 = 38$ ✓.',
    },
    {
      q: 'Beneath a circular planetarium dome two straight catwalks cross at $P$. One catwalk goes from $A$ to $B$ with $AP = 2$ and $PB = 26$; the other goes from $C$ to $D$ with $CP = 4$. Find $PD$.',
      fig: {
        view: [-6, -22, 30, 13],
        elems: [
          { t: 'circle', c: [12, -4.1949], r: 14.615 },
          { t: 'seg', a: [-2, 0], b: [26, 0] },
          { t: 'seg', a: [-2.5712, -3.0642], b: [8.3562, 9.9586] },
          { t: 'point', p: [-2, 0], label: 'A', dx: -3, dy: -11 },
          { t: 'point', p: [26, 0], label: 'B', dx: 11, dy: 0 },
          { t: 'point', p: [-2.5712, -3.0642], label: 'C', dx: -11, dy: 8 },
          { t: 'point', p: [8.3562, 9.9586], label: 'D', dx: 11, dy: -4 },
          { t: 'point', p: [0, 0], label: 'P', dx: 5, dy: 14 },
          { t: 'label', p: [-1, 0], text: '2', dx: -6, dy: 14 },
          { t: 'label', p: [13, 0], text: '26', dx: 0, dy: 15 },
          { t: 'label', p: [-1.2856, -1.5321], text: '4', dx: -12, dy: 2 },
          { t: 'label', p: [4.1781, 4.9793], text: '?', dx: 13, dy: 2 },
        ],
      },
      answer: '$PD = 13$',
      solution:
        'The catwalks are chords crossing inside the dome, so one power of the point serves both: $AP \\cdot PB = CP \\cdot PD$ gives $2 \\cdot 26 = 4 \\cdot PD$. Then $52 = 4 \\cdot PD$ and $PD = 13$ ✓. Second route through similar triangles: join $A$ to $C$ and $D$ to $B$. The angles $\\angle CAP$ and $\\angle BDP$ are inscribed on the same arc $CB$, hence equal, and the angles at $P$ are vertical, so triangle $APC$ is similar to triangle $DPB$. Here $CP$ corresponds to $BP$ in the ratio $4 : 26 = 2 : 13$, so $AP$ corresponds to $DP$ in the ratio $2 : 13$ as well, and $DP = \\frac{13}{2} \\cdot 2 = 13$ ✓.',
    },
  ],

  // slot 3 — two secants from an outside point; CD = PD − PC with
  //          PD = PA·PB/PC. Lanes: PA 9, AB 11, PC 5 -> 31;
  //          PA 6, AB 14, PC 5 -> 19; PA 5, AB 31, PC 4 -> 41.
  [
    {
      q: 'Two straight tunnels are bored from a single entrance $P$ on the outside of a circular hill. The first passes under the hill’s round base, entering at $A$ and leaving at $B$, with $PA = 9$ and $AB = 11$. The second enters at $C$ and leaves at $D$, with $PC = 5$. Find $CD$.',
      fig: {
        view: [-4, -4, 33, 33],
        elems: [
          { t: 'circle', c: [14.5, 14.6119], r: 15.6127 },
          { t: 'seg', a: [0, 0], b: [20, 0] },
          { t: 'seg', a: [0, 0], b: [27.5776, 23.1404] },
          { t: 'point', p: [0, 0], label: 'P', dx: -11, dy: 4 },
          { t: 'point', p: [9, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [20, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [3.8302, 3.2139], label: 'C', dx: -9, dy: -8 },
          { t: 'point', p: [27.5776, 23.1404], label: 'D', dx: 10, dy: -6 },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 15 },
          { t: 'label', p: [14.5, 0], text: '11', dx: 0, dy: 15 },
          { t: 'label', p: [1.9151, 1.607], text: '5', dx: -10, dy: -4 },
          { t: 'label', p: [15.7039, 13.1771], text: '?', dx: -6, dy: -11 },
        ],
      },
      answer: '$CD = 31$',
      solution:
        'Every distance in the rule is measured from $P$, so build the whole first tunnel: $PB = PA + AB = 9 + 11 = 20$, and the power of $P$ is $PA \\cdot PB = 9 \\cdot 20 = 180$. The second tunnel must give the same product: $PC \\cdot PD = 180$, so $5 \\cdot PD = 180$ and $PD = 36$. The part inside the hill is $CD = PD - PC = 36 - 5 = 31$ ✓. Second route through similar triangles: draw $\\overline{AD}$ and $\\overline{CB}$. Triangles $PAD$ and $PCB$ share the angle at $P$, and $\\angle ADC = \\angle ABC$ because both are inscribed on arc $AC$; so the triangles are similar with $PA$ matching $PC$. That ratio is $9 : 5$, so $PD$ is the same multiple of $PB$: $PD = \\frac{9}{5} \\cdot 20 = 36$, and $CD = 36 - 5 = 31$ ✓.',
    },
    {
      q: 'A drone takes off at $P$ outside a circular wheat field and flies two straight passes over it. The first crosses the edge at $A$ and then $B$, with $PA = 6$ and $AB = 14$. The second crosses at $C$ and then $D$, with $PC = 5$. Find $CD$.',
      fig: {
        view: [-3, -6, 26, 21],
        elems: [
          { t: 'circle', c: [13, 7.5061], r: 10.2636 },
          { t: 'seg', a: [0, 0], b: [20, 0] },
          { t: 'seg', a: [0, 0], b: [16.9706, 16.9706] },
          { t: 'point', p: [0, 0], label: 'P', dx: -11, dy: 4 },
          { t: 'point', p: [6, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [20, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [3.5355, 3.5355], label: 'C', dx: -9, dy: -8 },
          { t: 'point', p: [16.9706, 16.9706], label: 'D', dx: 10, dy: -6 },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 15 },
          { t: 'label', p: [13, 0], text: '14', dx: 0, dy: 15 },
          { t: 'label', p: [1.7678, 1.7678], text: '5', dx: -10, dy: -4 },
          { t: 'label', p: [10.253, 10.253], text: '?', dx: -6, dy: -11 },
        ],
      },
      answer: '$CD = 19$',
      solution:
        'First stretch the near length into the whole one: $PB = PA + AB = 6 + 14 = 20$, so the power of $P$ is $6 \\cdot 20 = 120$. The second pass matches it, $PC \\cdot PD = 120$, so $5 \\cdot PD = 120$ and $PD = 24$. The piece over the field is $CD = PD - PC = 24 - 5 = 19$ ✓. Second route through similar triangles: join $A$ to $D$ and $C$ to $B$. Triangles $PAD$ and $PCB$ share the angle at $P$, and $\\angle ADC = \\angle ABC$ since both stand on arc $AC$, so the triangles are similar with $PA$ matching $PC$ in the ratio $6 : 5$. Then $PD = \\frac{6}{5} \\cdot PB = \\frac{6}{5} \\cdot 20 = 24$, and $CD = 24 - 5 = 19$ ✓.',
    },
    {
      q: 'From a lighthouse at $P$ two straight sight lines are taken across a circular coral reef. The first meets the reef at $A$ and then $B$, with $PA = 5$ and $AB = 31$. The second meets it at $C$ and then $D$, with $PC = 4$. Find $CD$.',
      fig: {
        view: [-3, -10, 44, 37],
        elems: [
          { t: 'circle', c: [20.5, 13.4374], r: 20.5138 },
          { t: 'seg', a: [0, 0], b: [36, 0] },
          { t: 'seg', a: [0, 0], b: [36.8618, 25.8109] },
          { t: 'point', p: [0, 0], label: 'P', dx: -11, dy: 4 },
          { t: 'point', p: [5, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [36, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [3.2766, 2.2943], label: 'C', dx: -9, dy: -8 },
          { t: 'point', p: [36.8618, 25.8109], label: 'D', dx: 10, dy: -6 },
          { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 15 },
          { t: 'label', p: [20.5, 0], text: '31', dx: 0, dy: 15 },
          { t: 'label', p: [1.6383, 1.1472], text: '4', dx: -10, dy: -4 },
          { t: 'label', p: [20.0692, 14.0526], text: '?', dx: -6, dy: -11 },
        ],
      },
      answer: '$CD = 41$',
      solution:
        'Measure everything from the lighthouse: $PB = PA + AB = 5 + 31 = 36$, so the power of $P$ is $5 \\cdot 36 = 180$. The second sight line gives the same product, $4 \\cdot PD = 180$, so $PD = 45$, and the stretch across the reef is $CD = PD - PC = 45 - 4 = 41$ ✓. Second route through similar triangles: draw $\\overline{AD}$ and $\\overline{CB}$. The triangles $PAD$ and $PCB$ share the angle at $P$, and $\\angle ADC = \\angle ABC$ because both are inscribed on arc $AC$, so they are similar with $PA$ matching $PC$ in the ratio $5 : 4$. Therefore $PD = \\frac{5}{4} \\cdot PB = \\frac{5}{4} \\cdot 36 = 45$, and $CD = 45 - 4 = 41$ ✓.',
    },
  ],

  // slot 4 — two secants from an outside point; AB = PB − PA with
  //          PB = PC·PD/PA. Lanes: PC 8, CD 12, PA 4 -> 36;
  //          PC 10, CD 5, PA 5 -> 25; PC 5, CD 5, PA 2 -> 23.
  [
    {
      q: 'Two straight roads leave a village at $P$ and each one cuts across a circular marsh. The first road meets the marsh at $C$ and then $D$, with $PC = 8$ and $CD = 12$. The second meets it at $A$ and then $B$, with $PA = 4$. Find $AB$.',
      fig: {
        view: [-3, -17, 44, 27],
        elems: [
          { t: 'circle', c: [22, 5.1885], r: 18.7329 },
          { t: 'seg', a: [0, 0], b: [40, 0] },
          { t: 'seg', a: [0, 0], b: [8.4524, 18.1262] },
          { t: 'point', p: [0, 0], label: 'P', dx: -11, dy: 4 },
          { t: 'point', p: [4, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [40, 0], label: 'B', dx: 11, dy: 6 },
          { t: 'point', p: [3.3809, 7.2505], label: 'C', dx: -10, dy: -4 },
          { t: 'point', p: [8.4524, 18.1262], label: 'D', dx: 10, dy: -6 },
          { t: 'label', p: [2, 0], text: '4', dx: -3, dy: 15 },
          { t: 'label', p: [22, 0], text: '?', dx: 0, dy: 15 },
          { t: 'label', p: [1.6905, 3.6252], text: '8', dx: -11, dy: 2 },
          { t: 'label', p: [5.9167, 12.6883], text: '12', dx: -12, dy: 0 },
        ],
      },
      answer: '$AB = 36$',
      solution:
        'Turn the first road into a whole length from $P$: $PD = PC + CD = 8 + 12 = 20$, so the power of $P$ is $PC \\cdot PD = 8 \\cdot 20 = 160$. The second road matches: $PA \\cdot PB = 160$ gives $4 \\cdot PB = 160$, so $PB = 40$ and the marsh crossing is $AB = PB - PA = 40 - 4 = 36$ ✓. Second route through similar triangles: draw $\\overline{CB}$ and $\\overline{AD}$. Triangles $PCB$ and $PAD$ share the angle at $P$, and $\\angle ADC = \\angle ABC$ because both are inscribed on arc $AC$, so the triangles are similar with $PC$ matching $PA$ in the ratio $8 : 4 = 2 : 1$. The same doubling takes $PD$ to $PB$: $PB = 2 \\cdot 20 = 40$, and $AB = 40 - 4 = 36$ ✓.',
    },
    {
      q: 'Two hoses run from a spigot at $P$ and each one lies straight across a circular flower bed. One hose meets the border at $C$ and then $D$, with $PC = 10$ and $CD = 5$. The other meets it at $A$ and then $B$, with $PA = 5$. Find $AB$.',
      fig: {
        view: [-3, -13, 33, 19],
        elems: [
          { t: 'circle', c: [17.5, 3.0061], r: 12.8564 },
          { t: 'seg', a: [0, 0], b: [30, 0] },
          { t: 'seg', a: [0, 0], b: [8.6036, 12.2873] },
          { t: 'point', p: [0, 0], label: 'P', dx: -11, dy: 4 },
          { t: 'point', p: [5, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [30, 0], label: 'B', dx: 11, dy: 6 },
          { t: 'point', p: [5.7358, 8.1915], label: 'C', dx: -10, dy: -4 },
          { t: 'point', p: [8.6036, 12.2873], label: 'D', dx: 10, dy: -6 },
          { t: 'label', p: [2.5, 0], text: '5', dx: -3, dy: 15 },
          { t: 'label', p: [17.5, 0], text: '?', dx: 0, dy: 15 },
          { t: 'label', p: [2.8679, 4.0958], text: '10', dx: -12, dy: 2 },
          { t: 'label', p: [7.1697, 10.2394], text: '5', dx: -11, dy: 0 },
        ],
      },
      answer: '$AB = 25$',
      solution:
        'Build the whole length along the first hose: $PD = PC + CD = 10 + 5 = 15$, so the power of $P$ is $10 \\cdot 15 = 150$. The other hose must give the same number: $5 \\cdot PB = 150$, so $PB = 30$ and $AB = PB - PA = 30 - 5 = 25$ ✓. Second route through similar triangles: join $C$ to $B$ and $A$ to $D$. Triangles $PCB$ and $PAD$ have the angle at $P$ in common, and $\\angle ADC = \\angle ABC$ since both are inscribed on arc $AC$, so they are similar with $PC$ matching $PA$ in the ratio $10 : 5 = 2 : 1$. Doubling $PD$ therefore gives $PB = 2 \\cdot 15 = 30$, and $AB = 30 - 5 = 25$ ✓.',
    },
    {
      q: 'Two tow ropes are anchored at a dock $P$ and each is pulled straight across a circular ice rink. One rope meets the rink’s edge at $C$ and then $D$, with $PC = 5$ and $CD = 5$. The other meets it at $A$ and then $B$, with $PA = 2$. Find $AB$.',
      fig: {
        view: [-3, -12, 28, 18],
        elems: [
          { t: 'circle', c: [13.5, 3.0677], r: 11.9021 },
          { t: 'seg', a: [0, 0], b: [25, 0] },
          { t: 'seg', a: [0, 0], b: [3.4202, 9.3969] },
          { t: 'point', p: [0, 0], label: 'P', dx: -11, dy: 4 },
          { t: 'point', p: [2, 0], label: 'A', dx: 2, dy: 15 },
          { t: 'point', p: [25, 0], label: 'B', dx: 11, dy: 6 },
          { t: 'point', p: [1.7101, 4.6985], label: 'C', dx: -10, dy: -2 },
          { t: 'point', p: [3.4202, 9.3969], label: 'D', dx: 10, dy: -6 },
          { t: 'label', p: [1, 0], text: '2', dx: -7, dy: 14 },
          { t: 'label', p: [13.5, 0], text: '?', dx: 0, dy: 15 },
          { t: 'label', p: [0.8551, 2.3492], text: '5', dx: -11, dy: 2 },
          { t: 'label', p: [2.5652, 7.0477], text: '5', dx: -11, dy: 0 },
        ],
      },
      answer: '$AB = 23$',
      solution:
        'Whole lengths first: $PD = PC + CD = 5 + 5 = 10$, so the power of the dock is $5 \\cdot 10 = 50$. The second rope repeats that number: $2 \\cdot PB = 50$, so $PB = 25$ and the span across the ice is $AB = PB - PA = 25 - 2 = 23$ ✓. Second route through similar triangles: draw $\\overline{CB}$ and $\\overline{AD}$. Triangles $PCB$ and $PAD$ share the angle at $P$, and $\\angle ADC = \\angle ABC$ because both are inscribed on arc $AC$, so they are similar with $PC$ matching $PA$ in the ratio $5 : 2$. Scaling $PD$ by that ratio gives $PB = \\frac{5}{2} \\cdot 10 = 25$, and $AB = 25 - 2 = 23$ ✓.',
    },
  ],

  // slot 5 — tangent plus secant; PT = sqrt(PA·PB).
  //          Lanes: PA 36, AB 13 -> 42; PA 24, AB 30 -> 36;
  //          PA 13, AB 39 -> 26.
  [
    {
      q: 'From a lamppost at $P$ a straight beam of light just grazes the rim of a circular fountain basin, touching it at the single point $T$. A second beam from $P$ crosses the basin, meeting the rim at $A$ and then at $B$, with $PA = 36$ and $AB = 13$. Find $PT$.',
      fig: {
        view: [-3, -5, 57, 25],
        elems: [
          { t: 'circle', c: [42.5, 10], r: 11.9269 },
          { t: 'seg', a: [0, 0], b: [49, 0] },
          { t: 'seg', a: [0, 0], b: [36.7007, 20.422] },
          { t: 'seg', a: [42.5, 10], b: [36.7007, 20.422], dash: true },
          { t: 'right', at: [36.7007, 20.422], from: [0, 0], to: [42.5, 10] },
          { t: 'point', p: [0, 0], label: 'P', dx: -11, dy: 4 },
          { t: 'point', p: [36, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [49, 0], label: 'B', dx: 11, dy: 8 },
          { t: 'point', p: [36.7007, 20.422], label: 'T', dx: -4, dy: -11 },
          { t: 'point', p: [42.5, 10], label: 'O', dx: 13, dy: 4 },
          { t: 'label', p: [18, 0], text: '36', dx: 0, dy: 15 },
          { t: 'label', p: [42.5, 0], text: '13', dx: 0, dy: 15 },
          { t: 'label', p: [18.3504, 10.211], text: '?', dx: -11, dy: 0 },
        ],
      },
      answer: '$PT = 42$',
      solution:
        'The whole secant beam is $PB = PA + AB = 36 + 13 = 49$, so the power of the lamppost is $PA \\cdot PB = 36 \\cdot 49 = 1764$. A tangent is what a secant becomes when its two crossing points merge, so the tangent length obeys $PT^2 = 1764$, and since a length is positive, $PT = \\sqrt{1764} = 42$ ✓. Second route through the tangent-chord angle: $\\angle PTA$ between the tangent and chord $\\overline{TA}$ equals the inscribed angle $\\angle PBT$ on arc $TA$, and the angle at $P$ is shared, so triangle $PTA$ is similar to triangle $PBT$. One multiplier $k$ therefore carries $PA$ to $PT$ and $PT$ to $PB$, which makes $k^2 = \\frac{PB}{PA} = \\frac{49}{36}$, so $k = \\frac{7}{6}$ and $PT = 36 \\cdot \\frac{7}{6} = 42$ ✓.',
    },
    {
      q: 'A wire runs from the top of a birdhouse pole at $P$ and just touches the edge of a circular duck pond at one point $T$. A straight boardwalk from $P$ crosses the pond, meeting the edge at $A$ and then $B$, with $PA = 24$ and $AB = 30$. Find $PT$.',
      fig: {
        view: [-3, -10, 61, 34],
        elems: [
          { t: 'circle', c: [39, 12], r: 19.2094 },
          { t: 'seg', a: [0, 0], b: [54, 0] },
          { t: 'seg', a: [0, 0], b: [25.3727, 25.5387] },
          { t: 'seg', a: [39, 12], b: [25.3727, 25.5387], dash: true },
          { t: 'right', at: [25.3727, 25.5387], from: [0, 0], to: [39, 12] },
          { t: 'point', p: [0, 0], label: 'P', dx: -11, dy: 4 },
          { t: 'point', p: [24, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [54, 0], label: 'B', dx: 11, dy: 8 },
          { t: 'point', p: [25.3727, 25.5387], label: 'T', dx: -4, dy: -11 },
          { t: 'point', p: [39, 12], label: 'O', dx: 13, dy: 4 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 15 },
          { t: 'label', p: [39, 0], text: '30', dx: 0, dy: 15 },
          { t: 'label', p: [12.6864, 12.7694], text: '?', dx: -11, dy: 0 },
        ],
      },
      answer: '$PT = 36$',
      solution:
        'The whole boardwalk length from $P$ is $PB = 24 + 30 = 54$, so the power of $P$ is $24 \\cdot 54 = 1296$. The tangent wire is the merged case of a secant, so $PT^2 = 1296$ and $PT = \\sqrt{1296} = 36$ ✓. Second route through the tangent-chord angle: the angle between the wire and chord $\\overline{TA}$ equals the inscribed angle $\\angle PBT$ standing on arc $TA$, and the angle at $P$ belongs to both triangles, so triangle $PTA$ is similar to triangle $PBT$. A single multiplier $k$ sends $PA$ to $PT$ and then $PT$ to $PB$, so $k^2 = \\frac{54}{24} = \\frac{9}{4}$, giving $k = \\frac{3}{2}$ and $PT = 24 \\cdot \\frac{3}{2} = 36$ ✓.',
    },
    {
      q: 'A rope stretched from a flagpole at $P$ touches the boundary of a circular lawn at exactly one point $T$. A straight gravel strip from $P$ runs across the lawn, meeting the boundary at $A$ and then $B$, with $PA = 13$ and $AB = 39$. Find $PT$.',
      fig: {
        view: [-3, -13, 59, 39],
        elems: [
          { t: 'circle', c: [32.5, 13], r: 23.4361 },
          { t: 'seg', a: [0, 0], b: [52, 0] },
          { t: 'seg', a: [0, 0], b: [11.4659, 23.3352] },
          { t: 'seg', a: [32.5, 13], b: [11.4659, 23.3352], dash: true },
          { t: 'right', at: [11.4659, 23.3352], from: [0, 0], to: [32.5, 13] },
          { t: 'point', p: [0, 0], label: 'P', dx: -11, dy: 4 },
          { t: 'point', p: [13, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [52, 0], label: 'B', dx: 11, dy: 8 },
          { t: 'point', p: [11.4659, 23.3352], label: 'T', dx: -4, dy: -11 },
          { t: 'point', p: [32.5, 13], label: 'O', dx: 13, dy: 4 },
          { t: 'label', p: [6.5, 0], text: '13', dx: 0, dy: 15 },
          { t: 'label', p: [32.5, 0], text: '39', dx: 0, dy: 15 },
          { t: 'label', p: [5.733, 11.6676], text: '?', dx: -11, dy: 0 },
        ],
      },
      answer: '$PT = 26$',
      solution:
        'Stretch the strip into a whole length from the flagpole: $PB = 13 + 39 = 52$, so the power of $P$ is $13 \\cdot 52 = 676$. The rope is a tangent, the limiting case of a secant, so $PT^2 = 676$ and $PT = \\sqrt{676} = 26$ ✓. Second route through the tangent-chord angle: the angle the rope makes with chord $\\overline{TA}$ equals the inscribed angle $\\angle PBT$ on arc $TA$, and the angle at $P$ is common, so triangle $PTA$ is similar to triangle $PBT$. One multiplier $k$ takes $PA$ to $PT$ and $PT$ to $PB$, so $k^2 = \\frac{52}{13} = 4$, hence $k = 2$ and $PT = 13 \\cdot 2 = 26$ ✓.',
    },
  ],

  // slot 6 — tangent length known, find the chord piece: AB = PT²/PA − PA.
  //          Lanes: PT 40, PA 25 -> 39; PT 14, PA 4 -> 45;
  //          PT 20, PA 8 -> 42.
  [
    {
      q: 'A crane cable runs from a hook at $P$ and just touches the edge of a circular helipad at the single point $T$, with $PT = 40$. A straight painted stripe from $P$ crosses the helipad, meeting the edge at $A$ and then $B$, with $PA = 25$. Find the chord length $AB$.',
      fig: {
        view: [-3, -13, 72, 43],
        elems: [
          { t: 'circle', c: [44.5, 15], r: 24.6018 },
          { t: 'seg', a: [0, 0], b: [64, 0] },
          { t: 'seg', a: [0, 0], b: [25.593, 30.7408] },
          { t: 'point', p: [0, 0], label: 'P', dx: -11, dy: 4 },
          { t: 'point', p: [25, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [64, 0], label: 'B', dx: 11, dy: 6 },
          { t: 'point', p: [25.593, 30.7408], label: 'T', dx: -4, dy: -11 },
          { t: 'label', p: [12.7965, 15.3704], text: '40', dx: -14, dy: 0 },
          { t: 'label', p: [12.5, 0], text: '25', dx: 0, dy: 15 },
          { t: 'label', p: [44.5, 0], text: '?', dx: 0, dy: 15 },
        ],
      },
      answer: '$AB = 39$',
      solution:
        'The tangent length squared is the power of $P$: $PT^2 = PA \\cdot PB$, so $1600 = 25 \\cdot PB$ and $PB = 64$. That is the whole distance from $P$ to the far edge, and the question wants only the part across the helipad, so subtract the outside piece: $AB = PB - PA = 64 - 25 = 39$ ✓. Second route through the tangent-chord angle: it makes $\\angle PTA$ equal to the inscribed angle $\\angle PBT$, and with the shared angle at $P$ triangle $PTA$ is similar to triangle $PBT$. The multiplier from the smaller to the larger is $k = \\frac{PT}{PA} = \\frac{40}{25} = \\frac{8}{5}$, and the same $k$ carries $PT$ to $PB$: $PB = 40 \\cdot \\frac{8}{5} = 64$, so $AB = 64 - 25 = 39$ ✓.',
    },
    {
      q: 'A mooring line from a buoy at $P$ just brushes the outside of a circular kelp patch at one point $T$, with $PT = 14$. A diver swims in a straight line from $P$ through the patch, entering at $A$ and leaving at $B$, with $PA = 4$. Find the chord length $AB$.',
      fig: {
        view: [-3, -19, 53, 35],
        elems: [
          { t: 'circle', c: [26.5, 8], r: 23.8799 },
          { t: 'seg', a: [0, 0], b: [49, 0] },
          { t: 'seg', a: [0, 0], b: [3.288, 13.6084] },
          { t: 'point', p: [0, 0], label: 'P', dx: -11, dy: 4 },
          { t: 'point', p: [4, 0], label: 'A', dx: 2, dy: 15 },
          { t: 'point', p: [49, 0], label: 'B', dx: 11, dy: 6 },
          { t: 'point', p: [3.288, 13.6084], label: 'T', dx: -4, dy: -11 },
          { t: 'label', p: [1.644, 6.8042], text: '14', dx: -13, dy: 0 },
          { t: 'label', p: [2, 0], text: '4', dx: -6, dy: 14 },
          { t: 'label', p: [26.5, 0], text: '?', dx: 0, dy: 15 },
        ],
      },
      answer: '$AB = 45$',
      solution:
        'Tangent-secant power gives $PT^2 = PA \\cdot PB$, so $196 = 4 \\cdot PB$ and $PB = 49$. The swim through the kelp is only the inside part, so take away the outside piece: $AB = PB - PA = 49 - 4 = 45$ ✓. Second route through the tangent-chord angle: it equals the inscribed angle $\\angle PBT$, so with the shared angle at $P$ triangle $PTA$ is similar to triangle $PBT$. The scale factor from the smaller triangle to the larger is $k = \\frac{PT}{PA} = \\frac{14}{4} = \\frac{7}{2}$, and it also carries $PT$ to $PB$: $PB = 14 \\cdot \\frac{7}{2} = 49$, giving $AB = 49 - 4 = 45$ ✓.',
    },
    {
      q: 'A guy line from a tent peg at $P$ touches the round floor of a circus tent at exactly one point $T$, with $PT = 20$. A straight cable from $P$ runs across that floor, meeting its edge at $A$ and then $B$, with $PA = 8$. Find the chord length $AB$.',
      fig: {
        view: [-4, -11, 60, 51],
        elems: [
          { t: 'circle', c: [29, 20], r: 29 },
          { t: 'seg', a: [0, 0], b: [50, 0] },
          { t: 'seg', a: [0, 0], b: [0, 20] },
          { t: 'point', p: [0, 0], label: 'P', dx: -11, dy: 4 },
          { t: 'point', p: [8, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [50, 0], label: 'B', dx: 11, dy: 6 },
          { t: 'point', p: [0, 20], label: 'T', dx: -13, dy: -4 },
          { t: 'label', p: [0, 10], text: '20', dx: -13, dy: 0 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 15 },
          { t: 'label', p: [29, 0], text: '?', dx: 0, dy: 15 },
        ],
      },
      answer: '$AB = 42$',
      solution:
        'The tangent gives the power of the peg directly: $PT^2 = PA \\cdot PB$, so $400 = 8 \\cdot PB$ and $PB = 50$. Only the piece inside the tent floor is wanted, so $AB = PB - PA = 50 - 8 = 42$ ✓. Second route through the tangent-chord angle: it matches the inscribed angle $\\angle PBT$, and together with the shared angle at $P$ this makes triangle $PTA$ similar to triangle $PBT$. The scale factor is $k = \\frac{PT}{PA} = \\frac{20}{8} = 2.5$, and scaling once more sends $PT$ to $PB$: $PB = 20 \\cdot 2.5 = 50$, so $AB = 50 - 8 = 42$ ✓.',
    },
  ],

  // slot 7 — two secants, one with an unknown near piece: x(x + a) = PC·PD.
  //          Lanes: a 5, product 456 -> 19; a 9, product 36 -> 3;
  //          a 16, product 36 -> 2.
  [
    {
      q: 'From an observation deck at $P$ two straight sight lines are drawn across a circular greenhouse. The first meets the glass at $A$ and then $B$, with $PA = x$ and $AB = 5$. The second meets it at $C$ and then $D$, with $PC = 12$ and $CD = 26$. Find $PA$.',
      fig: {
        view: [-3, -3, 39, 32],
        elems: [
          { t: 'circle', c: [21.5, 14.5945], r: 14.8071 },
          { t: 'seg', a: [0, 0], b: [24, 0] },
          { t: 'seg', a: [0, 0], b: [24.4259, 29.1097] },
          { t: 'point', p: [0, 0], label: 'P', dx: -11, dy: 4 },
          { t: 'point', p: [19, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [24, 0], label: 'B', dx: 11, dy: 8 },
          { t: 'point', p: [7.7135, 9.1925], label: 'C', dx: -10, dy: -2 },
          { t: 'point', p: [24.4259, 29.1097], label: 'D', dx: 10, dy: -6 },
          { t: 'label', p: [9.5, 0], text: 'x', dx: 0, dy: 15 },
          { t: 'label', p: [21.5, 0], text: '5', dx: 0, dy: 15 },
          { t: 'label', p: [3.8567, 4.5963], text: '12', dx: -12, dy: 0 },
          { t: 'label', p: [16.0697, 19.1511], text: '26', dx: -14, dy: 0 },
        ],
      },
      answer: '$PA = 19$',
      solution:
        'The second sight line is fully known, so it fixes the power of $P$: $PD = PC + CD = 12 + 26 = 38$, and $PC \\cdot PD = 12 \\cdot 38 = 456$. The first sight line must give the same product, with whole length $PB = x + 5$: $x(x + 5) = 456$. Rearranged, $x^2 + 5x - 456 = 0$, which factors as $(x + 24)(x - 19) = 0$. A length cannot be negative, so discard $x = -24$ and keep $PA = 19$ ✓. Second route by hunting the factor pair: the equation asks for two numbers, $x$ and $x + 5$, whose product is $456$ and whose gap is $5$. Since $456 = 2^3 \\cdot 3 \\cdot 19$, its factor pairs are $1 \\cdot 456$, $2 \\cdot 228$, $3 \\cdot 152$, $4 \\cdot 114$, $6 \\cdot 76$, $8 \\cdot 57$, $12 \\cdot 38$, $19 \\cdot 24$, and only the last pair differs by $5$; the smaller member is the near piece, so $PA = 19$ ✓.',
    },
    {
      q: 'Two straight rows are cut through a circular corn maze, both starting at the gate $P$ outside it. The first meets the maze at $A$ and then $B$, with $PA = x$ and $AB = 9$. The second meets it at $C$ and then $D$, with $PC = 4$ and $CD = 5$. Find $PA$.',
      fig: {
        view: [-3, -5, 16, 12],
        elems: [
          { t: 'circle', c: [7.5, 3.1754], r: 5.5076 },
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [0, 0], b: [4.5, 7.7942] },
          { t: 'point', p: [0, 0], label: 'P', dx: -11, dy: 4 },
          { t: 'point', p: [3, 0], label: 'A', dx: 0, dy: 15 },
          { t: 'point', p: [12, 0], label: 'B', dx: 11, dy: 6 },
          { t: 'point', p: [2, 3.4641], label: 'C', dx: -10, dy: -2 },
          { t: 'point', p: [4.5, 7.7942], label: 'D', dx: 10, dy: -6 },
          { t: 'label', p: [1.5, 0], text: 'x', dx: -3, dy: 15 },
          { t: 'label', p: [7.5, 0], text: '9', dx: 0, dy: 15 },
          { t: 'label', p: [1, 1.7321], text: '4', dx: -11, dy: 0 },
          { t: 'label', p: [3.25, 5.6292], text: '5', dx: -11, dy: 0 },
        ],
      },
      answer: '$PA = 3$',
      solution:
        'The fully known row sets the power of the gate: $PD = PC + CD = 4 + 5 = 9$, so $PC \\cdot PD = 4 \\cdot 9 = 36$. The other row has whole length $PB = x + 9$, and it must match: $x(x + 9) = 36$. So $x^2 + 9x - 36 = 0$, which factors as $(x + 12)(x - 3) = 0$; a length is positive, so $PA = 3$ ✓. Second route by hunting the factor pair: we need two numbers whose product is $36$ and whose gap is $9$. Listing the pairs of $36$ gives $1 \\cdot 36$, $2 \\cdot 18$, $3 \\cdot 12$, $4 \\cdot 9$, $6 \\cdot 6$, with gaps $35$, $16$, $9$, $5$, $0$. Only $3$ and $12$ are $9$ apart, and the near piece is the smaller one, so $PA = 3$ ✓.',
    },
    {
      q: 'A well at $P$ sits outside a circular herb garden, and two straight paths lead from it across the garden. The first meets the garden’s edge at $A$ and then $B$, with $PA = x$ and $AB = 16$. The second meets it at $C$ and then $D$, with $PC = 3$ and $CD = 9$. Find $PA$.',
      fig: {
        view: [-3, -8, 22, 16],
        elems: [
          { t: 'circle', c: [10, 4.0498], r: 8.9667 },
          { t: 'seg', a: [0, 0], b: [18, 0] },
          { t: 'seg', a: [0, 0], b: [4.4938, 11.1267] },
          { t: 'point', p: [0, 0], label: 'P', dx: -11, dy: 4 },
          { t: 'point', p: [2, 0], label: 'A', dx: 4, dy: 15 },
          { t: 'point', p: [18, 0], label: 'B', dx: 11, dy: 6 },
          { t: 'point', p: [1.1234, 2.7817], label: 'C', dx: -10, dy: 0 },
          { t: 'point', p: [4.4938, 11.1267], label: 'D', dx: 10, dy: -6 },
          { t: 'label', p: [1, 0], text: 'x', dx: -7, dy: 14 },
          { t: 'label', p: [10, 0], text: '16', dx: 0, dy: 15 },
          { t: 'label', p: [0.5617, 1.3909], text: '3', dx: -11, dy: 0 },
          { t: 'label', p: [2.8086, 6.9542], text: '9', dx: -11, dy: 0 },
        ],
      },
      answer: '$PA = 2$',
      solution:
        'Read the power of the well off the known path: $PD = PC + CD = 3 + 9 = 12$, so $PC \\cdot PD = 3 \\cdot 12 = 36$. The other path runs a whole length $PB = x + 16$ and must give the same product: $x(x + 16) = 36$, that is $x^2 + 16x - 36 = 0$, which factors as $(x + 18)(x - 2) = 0$. Lengths are positive, so $PA = 2$ ✓. Second route by hunting the factor pair: we want two numbers with product $36$ and gap $16$. The pairs are $1 \\cdot 36$, $2 \\cdot 18$, $3 \\cdot 12$, $4 \\cdot 9$, $6 \\cdot 6$, with gaps $35$, $16$, $9$, $5$, $0$; only $2$ and $18$ differ by $16$, and the near piece is the smaller, so $PA = 2$ ✓.',
    },
  ],

  // slot 8 — two chords, one split into consecutive pieces: x(x + 1) = PC·PD.
  //          Lanes: 12 and 46 -> 552 -> 23; 18 and 39 -> 702 -> 26;
  //          21 and 36 -> 756 -> 27.
  [
    {
      q: 'Two straight scratches cross at $P$ on a round manhole cover. One scratch runs from $A$ to $B$ with $AP = x$ and $PB = x + 1$; the other runs from $C$ to $D$ with $PC = 12$ and $PD = 46$. Find $AP$.',
      fig: {
        view: [-32, -15, 33, 50],
        elems: [
          { t: 'circle', c: [0.5, 17.3504], r: 29.2111 },
          { t: 'seg', a: [-23, 0], b: [24, 0] },
          { t: 'seg', a: [2.0838, -11.8177], b: [-7.9878, 45.3012] },
          { t: 'point', p: [-23, 0], label: 'A', dx: -11, dy: 0 },
          { t: 'point', p: [24, 0], label: 'B', dx: 11, dy: 0 },
          { t: 'point', p: [2.0838, -11.8177], label: 'C', dx: 11, dy: 6 },
          { t: 'point', p: [-7.9878, 45.3012], label: 'D', dx: -11, dy: -5 },
          { t: 'point', p: [0, 0], label: 'P', dx: 10, dy: -9 },
          { t: 'label', p: [-11.5, 0], text: 'x', dx: 0, dy: 15 },
          { t: 'label', p: [12, 0], text: 'x + 1', dx: 0, dy: 15 },
          { t: 'label', p: [1.0419, -5.9088], text: '12', dx: 13, dy: 0 },
          { t: 'label', p: [-3.9939, 22.6506], text: '46', dx: -14, dy: 0 },
        ],
      },
      answer: '$AP = 23$',
      solution:
        'The two scratches are chords through the same interior point, so their piece-products agree: $x(x + 1) = 12 \\cdot 46 = 552$. That is $x^2 + x - 552 = 0$, which factors as $(x + 24)(x - 23) = 0$. A length must be positive, so throw out $x = -24$ and keep $AP = 23$, which makes $PB = 24$ ✓. Second route by locating the consecutive pair: the two pieces are consecutive whole numbers whose product is $552$, so each is close to $\\sqrt{552}$, and since $23^2 = 529$ and $24^2 = 576$, that square root sits between $23$ and $24$. Testing the only candidate pair, $23 \\cdot 24 = 552$ ✓, so $AP = 23$ ✓.',
    },
    {
      q: 'A round tabletop has two straight inlaid strips that meet at $P$. One strip goes from $A$ to $B$ with $AP = x$ and $PB = x + 1$; the other goes from $C$ to $D$ with $PC = 18$ and $PD = 39$. Find $AP$.',
      fig: {
        view: [-32, -20, 33, 44],
        elems: [
          { t: 'circle', c: [0.5, 11.8186], r: 29.016 },
          { t: 'seg', a: [-26, 0], b: [27, 0] },
          { t: 'seg', a: [7.6071, -16.3135], b: [-16.4821, 35.346] },
          { t: 'point', p: [-26, 0], label: 'A', dx: -11, dy: 0 },
          { t: 'point', p: [27, 0], label: 'B', dx: 11, dy: 0 },
          { t: 'point', p: [7.6071, -16.3135], label: 'C', dx: 11, dy: 6 },
          { t: 'point', p: [-16.4821, 35.346], label: 'D', dx: -11, dy: -5 },
          { t: 'point', p: [0, 0], label: 'P', dx: 9, dy: -10 },
          { t: 'label', p: [-13, 0], text: 'x', dx: 0, dy: 15 },
          { t: 'label', p: [13.5, 0], text: 'x + 1', dx: 0, dy: 15 },
          { t: 'label', p: [3.8036, -8.1568], text: '18', dx: 14, dy: 0 },
          { t: 'label', p: [-8.2411, 17.673], text: '39', dx: -14, dy: 0 },
        ],
      },
      answer: '$AP = 26$',
      solution:
        'Both strips are chords crossing inside the tabletop, so one power of the point serves them both: $x(x + 1) = 18 \\cdot 39 = 702$. Then $x^2 + x - 702 = 0$, which factors as $(x + 27)(x - 26) = 0$, and since a length is positive, $AP = 26$ with $PB = 27$ ✓. Second route by locating the consecutive pair: two consecutive whole numbers multiply to $702$, so both sit near $\\sqrt{702}$; because $26^2 = 676$ and $27^2 = 729$, that square root lies between $26$ and $27$. Checking that single candidate, $26 \\cdot 27 = 702$ ✓, so $AP = 26$ ✓.',
    },
    {
      q: 'On a round mosaic floor two straight grout lines cross at $P$. One line runs from $A$ to $B$ with $AP = x$ and $PB = x + 1$; the other runs from $C$ to $D$ with $PC = 21$ and $PD = 36$. Find $AP$.',
      fig: {
        view: [-32, -23, 33, 42],
        elems: [
          { t: 'circle', c: [0.5, 9.5059], r: 29.0966 },
          { t: 'seg', a: [-27, 0], b: [28, 0] },
          { t: 'seg', a: [12.0451, -17.2022], b: [-20.6488, 29.4895] },
          { t: 'point', p: [-27, 0], label: 'A', dx: -11, dy: 0 },
          { t: 'point', p: [28, 0], label: 'B', dx: 11, dy: 0 },
          { t: 'point', p: [12.0451, -17.2022], label: 'C', dx: 11, dy: 6 },
          { t: 'point', p: [-20.6488, 29.4895], label: 'D', dx: -11, dy: -5 },
          { t: 'point', p: [0, 0], label: 'P', dx: 8, dy: -11 },
          { t: 'label', p: [-13.5, 0], text: 'x', dx: 0, dy: 15 },
          { t: 'label', p: [14, 0], text: 'x + 1', dx: 0, dy: 15 },
          { t: 'label', p: [6.0226, -8.6011], text: '21', dx: 14, dy: 0 },
          { t: 'label', p: [-10.3244, 14.7447], text: '36', dx: -14, dy: 0 },
        ],
      },
      answer: '$AP = 27$',
      solution:
        'The grout lines are chords meeting at an interior point, so the products of their pieces are equal: $x(x + 1) = 21 \\cdot 36 = 756$. That gives $x^2 + x - 756 = 0$, which factors as $(x + 28)(x - 27) = 0$; a length cannot be negative, so $AP = 27$ and $PB = 28$ ✓. Second route by locating the consecutive pair: consecutive whole numbers with product $756$ must straddle $\\sqrt{756}$, and $27^2 = 729$ while $28^2 = 784$, so the pair can only be $27$ and $28$. Confirming, $27 \\cdot 28 = 756$ ✓, so $AP = 27$ ✓.',
    },
  ],

  // slot 9 — chord perpendicular to a diameter; (c/2)² = s(2r − s).
  //          Lanes: chord 24, short piece 2 -> 37; chord 80, piece 32 -> 41;
  //          chord 40, piece 8 -> 29.
  [
    {
      q: 'A circular porthole has a straight brace $\\overline{CD}$ of length $24$ fixed across it, meeting the vertical diameter $\\overline{AB}$ at a right angle at $P$. The short piece $AP$ of that diameter measures $2$. Find the radius of the porthole.',
      fig: {
        view: [-40, -40, 40, 40],
        elems: [
          { t: 'circle', c: [0, 0], r: 37 },
          { t: 'seg', a: [0, 37], b: [0, -37] },
          { t: 'seg', a: [-12, 35], b: [12, 35] },
          { t: 'right', at: [0, 35], from: [12, 35], to: [0, 37] },
          { t: 'point', p: [0, 37], label: 'A', dx: 0, dy: -11 },
          { t: 'point', p: [0, -37], label: 'B', dx: 0, dy: 15 },
          { t: 'point', p: [-12, 35], label: 'C', dx: -11, dy: -4 },
          { t: 'point', p: [12, 35], label: 'D', dx: 11, dy: -4 },
          { t: 'point', p: [0, 35], label: 'P', dx: -11, dy: 13 },
          { t: 'label', p: [0, 36], text: '2', dx: 13, dy: 0 },
          { t: 'label', p: [-6, 35], text: '12', dx: 0, dy: -10 },
          { t: 'label', p: [6, 35], text: '12', dx: 0, dy: -10 },
          { t: 'label', p: [0, -4], text: '?', dx: 13, dy: 0 },
        ],
      },
      answer: 'radius $= 37$',
      solution:
        'A diameter that meets a chord at a right angle cuts it in half, so the brace splits into $12$ and $12$. Now use the power of the crossing point $P$: $12 \\cdot 12 = AP \\cdot PB$, so $144 = 2 \\cdot PB$ and $PB = 72$. The whole diameter is $AP + PB = 2 + 72 = 74$, so the radius is $\\frac{74}{2} = 37$ ✓. Second route through the Pythagorean theorem: let the radius be $r$ and put the center $O$ on the diameter. The distance from $O$ down to the brace is $OP = r - 2$, and the right triangle $OPD$ has legs $OP$ and $12$ with hypotenuse the radius $OD = r$. So $(r - 2)^2 + 144 = r^2$, which expands to $r^2 - 4r + 4 + 144 = r^2$, that is $4r = 148$ and $r = 37$ ✓.',
    },
    {
      q: 'A grain silo is a circle when seen from above. A straight conveyor $\\overline{CD}$ of length $80$ runs across that circle, crossing the vertical diameter $\\overline{AB}$ at a right angle at $P$, and the short piece $AP$ measures $32$. Find the radius of the silo.',
      fig: {
        view: [-45, -45, 45, 45],
        elems: [
          { t: 'circle', c: [0, 0], r: 41 },
          { t: 'seg', a: [0, 41], b: [0, -41] },
          { t: 'seg', a: [-40, 9], b: [40, 9] },
          { t: 'right', at: [0, 9], from: [40, 9], to: [0, 41] },
          { t: 'point', p: [0, 41], label: 'A', dx: 0, dy: -11 },
          { t: 'point', p: [0, -41], label: 'B', dx: 0, dy: 15 },
          { t: 'point', p: [-40, 9], label: 'C', dx: -11, dy: -4 },
          { t: 'point', p: [40, 9], label: 'D', dx: 11, dy: -4 },
          { t: 'point', p: [0, 9], label: 'P', dx: -11, dy: 13 },
          { t: 'label', p: [0, 25], text: '32', dx: 14, dy: 0 },
          { t: 'label', p: [-20, 9], text: '40', dx: 0, dy: -10 },
          { t: 'label', p: [20, 9], text: '40', dx: 0, dy: -10 },
          { t: 'label', p: [0, -16], text: '?', dx: 13, dy: 0 },
        ],
      },
      answer: 'radius $= 41$',
      solution:
        'The diameter meets the conveyor at a right angle, so it bisects it into $40$ and $40$. The power of the crossing point $P$ then gives $40 \\cdot 40 = AP \\cdot PB$, so $1600 = 32 \\cdot PB$ and $PB = 50$. The full diameter is $32 + 50 = 82$, so the radius is $41$ ✓. Second route through the Pythagorean theorem: with radius $r$ and center $O$ on the diameter, the distance from $O$ to the conveyor is $OP = r - 32$, and triangle $OPD$ is right-angled with legs $r - 32$ and $40$ and hypotenuse $OD = r$. So $(r - 32)^2 + 1600 = r^2$, that is $r^2 - 64r + 1024 + 1600 = r^2$, so $64r = 2624$ and $r = 41$ ✓.',
    },
    {
      q: 'A round wheel of cheese is cut by a straight wire $\\overline{CD}$ of length $40$ that meets the vertical diameter $\\overline{AB}$ at a right angle at $P$. The short piece $AP$ of the diameter is $8$. Find the radius of the wheel.',
      fig: {
        view: [-33, -33, 33, 33],
        elems: [
          { t: 'circle', c: [0, 0], r: 29 },
          { t: 'seg', a: [0, 29], b: [0, -29] },
          { t: 'seg', a: [-20, 21], b: [20, 21] },
          { t: 'right', at: [0, 21], from: [20, 21], to: [0, 29] },
          { t: 'point', p: [0, 29], label: 'A', dx: 0, dy: -11 },
          { t: 'point', p: [0, -29], label: 'B', dx: 0, dy: 15 },
          { t: 'point', p: [-20, 21], label: 'C', dx: -11, dy: -4 },
          { t: 'point', p: [20, 21], label: 'D', dx: 11, dy: -4 },
          { t: 'point', p: [0, 21], label: 'P', dx: -11, dy: 13 },
          { t: 'label', p: [0, 25], text: '8', dx: 13, dy: 0 },
          { t: 'label', p: [-10, 21], text: '20', dx: 0, dy: -10 },
          { t: 'label', p: [10, 21], text: '20', dx: 0, dy: -10 },
          { t: 'label', p: [0, -4], text: '?', dx: 13, dy: 0 },
        ],
      },
      answer: 'radius $= 29$',
      solution:
        'Because the diameter is perpendicular to the wire, it bisects it, so the two halves are $20$ and $20$. The power of the crossing point $P$ gives $20 \\cdot 20 = AP \\cdot PB$, so $400 = 8 \\cdot PB$ and $PB = 50$. The diameter is $8 + 50 = 58$, so the radius is $29$ ✓. Second route through the Pythagorean theorem: let the radius be $r$; the center $O$ sits $OP = r - 8$ below the wire, and triangle $OPD$ has legs $r - 8$ and $20$ with hypotenuse $OD = r$. So $(r - 8)^2 + 400 = r^2$, which becomes $r^2 - 16r + 64 + 400 = r^2$, so $16r = 464$ and $r = 29$ ✓.',
    },
  ],

  // slot 10 — circular arch of span w and rise h; height at horizontal
  //           distance d from the center. Lanes: 120 and 40 at 16 -> 38;
  //           126 and 49 at 25 -> 44; 120 and 50 at 11 -> 49.
  [
    {
      q: 'The top of a garden gate is a circular arch. It spans $120$ centimeters across its base and rises $40$ centimeters at the middle. How high is the arch at a point $16$ centimeters (horizontally) from the center of the base?',
      fig: {
        view: [-69, -69, 69, 69],
        elems: [
          { t: 'circle', c: [0, 0], r: 65 },
          { t: 'seg', a: [-60, 25], b: [60, 25] },
          { t: 'seg', a: [0, 25], b: [0, 65] },
          { t: 'seg', a: [16, 25], b: [16, 63] },
          { t: 'seg', a: [0, 25], b: [0, -65], dash: true },
          { t: 'point', p: [0, 65], label: 'T', dx: 0, dy: -11 },
          { t: 'point', p: [0, 25], label: 'M', dx: -12, dy: 12 },
          { t: 'point', p: [16, 25], label: 'Q', dx: 6, dy: 15 },
          { t: 'label', p: [-30, 25], text: '60', dx: 0, dy: 15 },
          { t: 'label', p: [8, 25], text: '16', dx: 0, dy: 15 },
          { t: 'label', p: [0, 45], text: '40', dx: -13, dy: 0 },
          { t: 'label', p: [16, 44], text: '?', dx: 13, dy: 0 },
        ],
      },
      answer: '$38$ centimeters',
      solution:
        'First recover the circle the arch belongs to. The base is a chord cut in half by the vertical line through the top, so the halves are $60$ and $60$, and the power of the midpoint $M$ gives $60 \\cdot 60 = 40 \\cdot (\\text{the rest of that diameter})$: the rest is $3600 \\div 40 = 90$, the diameter is $40 + 90 = 130$, and the radius is $65$. Put the center at the origin; the base line then sits $65 - 40 = 25$ above it. At $16$ centimeters from the middle the circle reaches $y = \\sqrt{65^2 - 16^2} = \\sqrt{4225 - 256} = \\sqrt{3969} = 63$, so the arch stands $63 - 25 = 38$ centimeters above the base ✓. Second route using the power of a point twice and never naming the radius: from $60 \\cdot 60 = 40 \\cdot (40 + 2c)$, where $c$ is how far the base line sits above the center, we get $40 + 2c = 90$, so $2c = 50$. Now take the point $Q$ on the base $16$ from the middle. The base line through $Q$ meets the circle at distances $60 - 16 = 44$ and $60 + 16 = 76$; the vertical line through $Q$ meets it at the unknown height $t$ above and at $t + 2c = t + 50$ below. Equal products: $t(t + 50) = 44 \\cdot 76 = 3344$, so $t^2 + 50t - 3344 = 0$, which factors as $(t + 88)(t - 38) = 0$, and the positive root gives $38$ centimeters ✓.',
    },
    {
      q: 'The arched top of a stained-glass window is a circular arc. It spans $126$ centimeters across its base and rises $49$ centimeters at the middle. How high is the arch at a point $25$ centimeters (horizontally) from the center of the base?',
      fig: {
        view: [-69, -69, 69, 69],
        elems: [
          { t: 'circle', c: [0, 0], r: 65 },
          { t: 'seg', a: [-63, 16], b: [63, 16] },
          { t: 'seg', a: [0, 16], b: [0, 65] },
          { t: 'seg', a: [25, 16], b: [25, 60] },
          { t: 'seg', a: [0, 16], b: [0, -65], dash: true },
          { t: 'point', p: [0, 65], label: 'T', dx: 0, dy: -11 },
          { t: 'point', p: [0, 16], label: 'M', dx: -12, dy: 12 },
          { t: 'point', p: [25, 16], label: 'Q', dx: 6, dy: 15 },
          { t: 'label', p: [-31.5, 16], text: '63', dx: 0, dy: 15 },
          { t: 'label', p: [12.5, 16], text: '25', dx: 0, dy: 15 },
          { t: 'label', p: [0, 40.5], text: '49', dx: -13, dy: 0 },
          { t: 'label', p: [25, 38], text: '?', dx: 13, dy: 0 },
        ],
      },
      answer: '$44$ centimeters',
      solution:
        'Recover the circle first. The vertical line through the top bisects the base chord into $63$ and $63$, so the power of the midpoint $M$ gives $63 \\cdot 63 = 49 \\cdot (\\text{the rest of that diameter})$: the rest is $3969 \\div 49 = 81$, the diameter is $49 + 81 = 130$, and the radius is $65$. With the center at the origin, the base line sits $65 - 49 = 16$ above it. At $25$ centimeters from the middle the circle reaches $y = \\sqrt{65^2 - 25^2} = \\sqrt{4225 - 625} = \\sqrt{3600} = 60$, so the glass rises $60 - 16 = 44$ centimeters there ✓. Second route using the power of a point twice and never naming the radius: from $63 \\cdot 63 = 49 \\cdot (49 + 2c)$, where $c$ is the height of the base line above the center, $49 + 2c = 81$, so $2c = 32$. At the point $Q$ on the base $25$ from the middle, the base line reaches the circle at $63 - 25 = 38$ and $63 + 25 = 88$, while the vertical line through $Q$ reaches it at the unknown height $t$ above and $t + 32$ below. Equal products: $t(t + 32) = 38 \\cdot 88 = 3344$, so $t^2 + 32t - 3344 = 0$, which factors as $(t + 76)(t - 44) = 0$, giving $44$ centimeters ✓.',
    },
    {
      q: 'The opening at the back of a puppet theater is topped by a circular arch that spans $120$ centimeters across its base and rises $50$ centimeters at the middle. How high is the arch at a point $11$ centimeters (horizontally) from the center of the base?',
      fig: {
        view: [-65, -65, 65, 65],
        elems: [
          { t: 'circle', c: [0, 0], r: 61 },
          { t: 'seg', a: [-60, 11], b: [60, 11] },
          { t: 'seg', a: [0, 11], b: [0, 61] },
          { t: 'seg', a: [11, 11], b: [11, 60] },
          { t: 'seg', a: [0, 11], b: [0, -61], dash: true },
          { t: 'point', p: [0, 61], label: 'T', dx: 0, dy: -11 },
          { t: 'point', p: [0, 11], label: 'M', dx: -12, dy: 12 },
          { t: 'point', p: [11, 11], label: 'Q', dx: 8, dy: 15 },
          { t: 'label', p: [-30, 11], text: '60', dx: 0, dy: 15 },
          { t: 'label', p: [5.5, 11], text: '11', dx: 0, dy: 16 },
          { t: 'label', p: [0, 36], text: '50', dx: -13, dy: 0 },
          { t: 'label', p: [11, 35.5], text: '?', dx: 13, dy: 0 },
        ],
      },
      answer: '$49$ centimeters',
      solution:
        'Recover the circle first. The vertical line through the top splits the base chord into $60$ and $60$, so the power of the midpoint $M$ gives $60 \\cdot 60 = 50 \\cdot (\\text{the rest of that diameter})$: the rest is $3600 \\div 50 = 72$, the diameter is $50 + 72 = 122$, and the radius is $61$. Placing the center at the origin puts the base line $61 - 50 = 11$ above it. At $11$ centimeters from the middle the circle reaches $y = \\sqrt{61^2 - 11^2} = \\sqrt{3721 - 121} = \\sqrt{3600} = 60$, so the arch is $60 - 11 = 49$ centimeters high there ✓. Second route using the power of a point twice and never naming the radius: from $60 \\cdot 60 = 50 \\cdot (50 + 2c)$, where $c$ is how high the base line sits above the center, $50 + 2c = 72$, so $2c = 22$. At the point $Q$ on the base $11$ from the middle, the base line meets the circle at $60 - 11 = 49$ and $60 + 11 = 71$, while the vertical line through $Q$ meets it at the unknown height $t$ above and $t + 22$ below. Equal products: $t(t + 22) = 49 \\cdot 71 = 3479$, so $t^2 + 22t - 3479 = 0$, which factors as $(t + 71)(t - 49) = 0$, giving $49$ centimeters ✓.',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 13,
  worksheet,
}
