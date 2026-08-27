// Introduction to Geometry chapter 5 — variations for the printable worksheet.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key anywhere in
//    this file. Where the base answer is a bare number the variation answers
//    with a bare number; where it names a segment or carries units or a
//    criterion-plus-factor sentence, the variations keep that shape.
//  - Every answer was worked twice, by two genuinely different routes, and the
//    routes had to agree before the key was written. The pairs used are:
//    scaling the perimeter by the factor vs. scaling the three sides one at a
//    time and adding (slot 1); computing both third angles vs. matching two
//    pairs directly once the missing angles are filled in (slot 2); the
//    whole-side proportion vs. the piece-to-piece shortcut (slot 3); the
//    height-over-shadow ratio vs. the shadow-to-shadow scale factor (slot 4);
//    dividing sorted sides vs. clearing the decimals and reducing both triples
//    to a common primitive (slot 5); SAS similarity vs. the dilation about the
//    shared vertex, confirmed against the drawn coordinates (slot 6); the area
//    computed two ways vs. the geometric-mean relations on the hypotenuse
//    pieces (slot 7); the ratio share of the diagonal vs. the exact metric
//    coordinates of the drawn trapezoid (slot 8); subtracting the k²-scaled
//    small triangle vs. the one-step factor 1 − k² (slot 9); the similar-
//    triangle proportion vs. the constant sideways-drift-per-meter of the
//    sight line (slot 10).
//  - Figures are coordinate-exact and were verified in node, never eyeballed.
//    Every labelled length in a figure is the true distance between its drawn
//    endpoints (slots 1, 3, 6, 7, 8, 10), every parallel segment is parallel
//    BY CONSTRUCTION — the cut points sit at the same parameter along both
//    sides (slots 3 and 9) — and every right-angle marker marks a true 90°.
//    In slot 8 even the diagonal length and the answer segment are metric: the
//    drawn distance from the crossing point to the far vertex IS the answer.
//  - Figure labels are plain text: bare numerals and the letters of points.
//  - Pin deviation, recorded here on purpose: slot 5 lane 1 was pinned as
//    6, 8, 10 vs. 9, 12, 15, but that is word-for-word the first worked
//    example of the Section 5.4 learn block, so answering it tests recall of
//    the lesson rather than reasoning. The lane keeps the pinned ANSWER
//    (yes, scale factor 3/2) on the fresh triples 7, 9, 11 and
//    10.5, 13.5, 16.5 — the first repair (8-15-17 scaled by 3/2) turned out
//    to be the exact triangle pair the Section 5.4 perimeter slot runs in
//    the same attempt round, so it moved again. Slot 9 lane 1 originally
//    shared its numbers (1/2, 48 -> 36) with Section 5.5 problem 10 and now
//    runs 1/2, 56 -> 42; lane 2 moved off 3/4, 32 -> 14, which doubled the
//    14 of the slot 4 shadow lane in the same round, and now runs
//    3/4, 80 -> 35.
//  - Traps that run through the file, named in CAPS at the end of each
//    solution: SQUARING THE FACTOR, ADDING THE GROWTH, COMPARING ONLY THE
//    LISTED PAIRS, SEEING ONE SHARED ANGLE AND SAYING YES, USING THE PIECE
//    INSTEAD OF THE WHOLE SIDE, ANSWERING WITH THE WHOLE SIDE, FLIPPING THE
//    RATIO, DROPPING THE UNITS, CHECKING ONLY TWO RATIOS, COMPARING UNSORTED
//    SIDES, USING THE PIECE RATIO, AVERAGING THE LEGS, ANSWERING WITH A LEG,
//    HALVING THE DIAGONAL, FLIPPING THE SHARES, USING THE RATIO ONCE,
//    ANSWERING WITH THE SMALL TRIANGLE, and USING THE WHOLE WALK.

const worksheet = [
  // slot 1 — Pythagorean triple, one side of the similar copy, perimeter.
  //          Lanes: 7-24-25 with 10.5 (k = 3/2, P = 84); 10-24-26 with 15
  //          (k = 3/2, P = 90); 5-12-13 with 20 (k = 4, P = 120).
  [
    {
      q: '$\\triangle PQR$ has $PQ = 7$, $QR = 24$, and $RP = 25$, as shown. $\\triangle JKL \\sim \\triangle PQR$ with $JK = 10.5$. Find the perimeter of $\\triangle JKL$.',
      fig: {
        view: [-2, -2, 25.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [0, 7]], fill: false },
          { t: 'right', at: [0, 0], from: [24, 0], to: [0, 7] },
          { t: 'point', p: [0, 7], label: 'P', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'Q', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'R', dx: 10, dy: 10 },
          { t: 'label', p: [0, 3.5], text: '7', dx: -10, dy: 0 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [12, 3.5], text: '25', dx: 10, dy: -8 },
        ],
      },
      answer: '$84$',
      solution:
        'Match the named sides by letter order: $\\overline{JK}$ corresponds to $\\overline{PQ}$, so the scale factor is $\\frac{JK}{PQ} = \\frac{10.5}{7} = \\frac{3}{2}$. The perimeter of $\\triangle PQR$ is $7 + 24 + 25 = 56$, and a perimeter is a sum of sides, so it picks up the factor exactly once: $56 \\times \\frac{3}{2} = 84$. Second route, side by side: $KL = \\frac{3}{2} \\times 24 = 36$ and $LJ = \\frac{3}{2} \\times 25 = 37.5$, and $10.5 + 36 + 37.5 = 84$ ✓. Existence check on the given triangle: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$ ✓, a genuine right triangle, as the figure shows. SQUARING THE FACTOR gives $56 \\times \\frac{9}{4} = 126$ ✗ — that is how areas scale, not perimeters. ADDING THE GROWTH tacks $10.5 - 7 = 3.5$ onto each side and lands on $56 + 10.5 = 66.5$ ✗; similarity multiplies every side, it never adds.',
    },
    {
      q: 'In the figure, $\\triangle TUV$ has $TU = 10$, $UV = 24$, and $VT = 26$. $\\triangle MNP \\sim \\triangle TUV$ with $MN = 15$. What is the perimeter of $\\triangle MNP$?',
      fig: {
        view: [-1.5, -2, 26.5, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [24, 10]], fill: false },
          { t: 'right', at: [24, 0], from: [0, 0], to: [24, 10] },
          { t: 'point', p: [24, 10], label: 'T', dx: 0, dy: -12 },
          { t: 'point', p: [24, 0], label: 'U', dx: 10, dy: 10 },
          { t: 'point', p: [0, 0], label: 'V', dx: -10, dy: 10 },
          { t: 'label', p: [24, 5], text: '10', dx: 12, dy: 0 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [12, 5], text: '26', dx: -10, dy: -8 },
        ],
      },
      answer: '$90$',
      solution:
        'The letters pair $\\overline{MN}$ with $\\overline{TU}$, so the scale factor is $\\frac{MN}{TU} = \\frac{15}{10} = \\frac{3}{2}$. The perimeter of $\\triangle TUV$ is $10 + 24 + 26 = 60$, and the perimeter scales by the same single factor: $60 \\times \\frac{3}{2} = 90$. Second route through the full side list: $NP = \\frac{3}{2} \\times 24 = 36$ and $PM = \\frac{3}{2} \\times 26 = 39$, so the perimeter is $15 + 36 + 39 = 90$ ✓. Sanity check on the givens: $10^2 + 24^2 = 100 + 576 = 676 = 26^2$ ✓, matching the right angle drawn at $U$. USING THE WRONG SIDE PAIR — matching the $15$ against $24$ because both are “the next number” — gives factor $\\frac{5}{8}$ ✗, which would make the new triangle SMALLER even though its known side is larger. SQUARING THE FACTOR gives $60 \\times \\frac{9}{4} = 135$ ✗, the area-style mistake.',
    },
    {
      q: '$\\triangle DEF$ has $DE = 5$, $EF = 12$, and $FD = 13$, as in the figure. A similar triangle $\\triangle RST \\sim \\triangle DEF$ has $RS = 20$. Find the perimeter of $\\triangle RST$.',
      fig: {
        view: [-1.5, -2, 13.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [0, 5]], fill: false },
          { t: 'right', at: [0, 0], from: [12, 0], to: [0, 5] },
          { t: 'point', p: [0, 5], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'label', p: [0, 2.5], text: '5', dx: -10, dy: 0 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [6, 2.5], text: '13', dx: 10, dy: -8 },
        ],
      },
      answer: '$120$',
      solution:
        '$\\overline{RS}$ corresponds to $\\overline{DE}$ by the letter order, so the scale factor is $\\frac{RS}{DE} = \\frac{20}{5} = 4$. The perimeter of $\\triangle DEF$ is $5 + 12 + 13 = 30$, so the perimeter of $\\triangle RST$ is $30 \\times 4 = 120$. Second route by listing the sides of the big triangle outright: $ST = 4 \\times 12 = 48$ and $TR = 4 \\times 13 = 52$, and $20 + 48 + 52 = 120$ ✓. The givens check out as a right triangle: $5^2 + 12^2 = 25 + 144 = 169 = 13^2$ ✓. ADDING THE GROWTH — “each side grew by $15$, so the perimeter grows by $45$” — gives $75$ ✗; only the side matched with $\\overline{DE}$ grew by $15$, and the longer sides grew by more. SQUARING THE FACTOR gives $30 \\times 16 = 480$ ✗, which is how the AREA of this triangle would scale, not its boundary.',
    },
  ],

  // slot 2 — AA from two named angles per triangle, yes/no with explanation.
  //          Lanes: 30/60 vs 60/90 (yes), 40/60 vs 60/80 (yes), and
  //          25/65 vs 65/95 (NO — third angles 90 and 20).
  [
    {
      q: 'One triangle has angles of $30^\\circ$ and $60^\\circ$. Another has angles of $60^\\circ$ and $90^\\circ$. Are the triangles similar? Explain.',
      answer: 'Yes — both are $30^\\circ$–$60^\\circ$–$90^\\circ$ triangles, so they are similar by AA.',
      solution:
        'Fill in the missing angles first: the first triangle has $180^\\circ - 30^\\circ - 60^\\circ = 90^\\circ$, and the second has $180^\\circ - 60^\\circ - 90^\\circ = 30^\\circ$. Both triangles carry the same angle set $\\{30^\\circ, 60^\\circ, 90^\\circ\\}$, and matching two pairs of angles is exactly what AA Similarity requires. Second route without computing the second triangle’s third angle at all: the first triangle contains a $60^\\circ$ angle and (by its own angle sum) a $90^\\circ$ angle, and the second triangle lists a $60^\\circ$ and a $90^\\circ$ directly — two matching pairs, so AA is already satisfied ✓. COMPARING ONLY THE LISTED PAIRS is the trap: the lists $30/60$ and $60/90$ share just one number, which tempts a “no” ✗ — but the listed angles are a sample, not the whole triangle, and the hidden third angles are what complete the match.',
    },
    {
      q: 'Two cardboard triangles are measured. The first has angles of $40^\\circ$ and $60^\\circ$; the second has angles of $60^\\circ$ and $80^\\circ$. Must the triangles be similar? Explain.',
      answer: 'Yes — both are $40^\\circ$–$60^\\circ$–$80^\\circ$ triangles, so they are similar by AA.',
      solution:
        'Compute each third angle: $180^\\circ - 40^\\circ - 60^\\circ = 80^\\circ$ for the first triangle, and $180^\\circ - 60^\\circ - 80^\\circ = 40^\\circ$ for the second. Each triangle therefore has the angle set $\\{40^\\circ, 60^\\circ, 80^\\circ\\}$, and two matching pairs (here all three) give similarity by AA — size never enters into it, so the cardboard pieces can be wildly different sizes and still be similar. Second route: the first triangle owns a $60^\\circ$ angle and, by its angle sum, an $80^\\circ$ angle; the second lists $60^\\circ$ and $80^\\circ$ outright. Two pairs matched, AA done ✓. COMPARING ONLY THE LISTED PAIRS sees $40/60$ against $60/80$, panics over the mismatched $40$ and $80$, and answers “no” ✗. SEEING ONE SHARED ANGLE AND SAYING YES happens to give the right verdict here but for a wrong reason ✗ — one pair alone never proves similarity, as the next lane shows.',
    },
    {
      q: 'One triangle has angles of $25^\\circ$ and $65^\\circ$. Another has angles of $65^\\circ$ and $95^\\circ$. Are the triangles similar? Explain.',
      answer: 'No — the first triangle is $25^\\circ$–$65^\\circ$–$90^\\circ$ and the second is $20^\\circ$–$65^\\circ$–$95^\\circ$, so the angle sets do not match.',
      solution:
        'Find both third angles: $180^\\circ - 25^\\circ - 65^\\circ = 90^\\circ$ for the first triangle, and $180^\\circ - 65^\\circ - 95^\\circ = 20^\\circ$ for the second. The angle sets are $\\{25^\\circ, 65^\\circ, 90^\\circ\\}$ and $\\{20^\\circ, 65^\\circ, 95^\\circ\\}$ — only the $65^\\circ$ appears in both, and one matching pair is not similarity. Second route, no third-angle arithmetic needed: if the triangles were similar, the second triangle would have to contain the first one’s $90^\\circ$ angle somewhere. But the second triangle already has a $95^\\circ$ angle, and $95^\\circ + 90^\\circ = 185^\\circ > 180^\\circ$, so a $90^\\circ$ angle cannot fit in it ✓ — not similar. SEEING ONE SHARED ANGLE AND SAYING YES is exactly the trap this lane springs: the matching $65^\\circ$ pair proves nothing on its own ✗, because AA needs TWO matched pairs and the second pair is nowhere to be found.',
    },
  ],

  // slot 3 — parallel segment cuts off a similar triangle; given both pieces
  //          of one side and the near piece of the other, find the far piece.
  //          Lanes: 6/2 with 9 -> 3; 10/4 with 15 -> 6 (mirrored figure);
  //          10/5 with 13 -> 6.5 (apex-up figure). All cut points sit at the
  //          same parameter along both sides, so the parallels are exact.
  [
    {
      q: 'In the figure, $\\overline{PQ} \\parallel \\overline{LM}$, with $KP = 6$, $PL = 2$, and $KQ = 9$. Find $QM$.',
      fig: {
        view: [-1.5, -1.5, 13.5, 8],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.8, 6.4], [12, 0]], fill: false },
          { t: 'seg', a: [3.6, 4.8], b: [9, 0] },
          { t: 'point', p: [0, 0], label: 'K', dx: -10, dy: 10 },
          { t: 'point', p: [4.8, 6.4], label: 'L', dx: 0, dy: -12 },
          { t: 'point', p: [12, 0], label: 'M', dx: 10, dy: 10 },
          { t: 'point', p: [3.6, 4.8], label: 'P', dx: -12, dy: -4 },
          { t: 'point', p: [9, 0], label: 'Q', dx: 4, dy: 14 },
          { t: 'label', p: [1.8, 2.4], text: '6', dx: -10, dy: 0 },
          { t: 'label', p: [4.2, 5.6], text: '2', dx: -10, dy: 0 },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [10.5, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      answer: '$QM = 3$',
      solution:
        'The parallel segment gives $\\triangle KPQ \\sim \\triangle KLM$ by AA (shared $\\angle K$, plus corresponding angles at $P$ and $L$). Compare WHOLE sides: $KL = 6 + 2 = 8$, so $\\frac{KQ}{KM} = \\frac{KP}{KL} = \\frac{6}{8} = \\frac{3}{4}$. Then $KM = 9 \\times \\frac{4}{3} = 12$ and $QM = KM - KQ = 12 - 9 = 3$. Second route by the piece-to-piece shortcut, which skips the whole side entirely: the parallel cut makes the leftover pieces proportional to the near pieces, $\\frac{QM}{KQ} = \\frac{PL}{KP} = \\frac{2}{6} = \\frac{1}{3}$, so $QM = 9 \\times \\frac{1}{3} = 3$ ✓ — the two routes agree. USING THE PIECE INSTEAD OF THE WHOLE SIDE writes $\\frac{KQ}{KM} = \\frac{KP}{PL} = 3$ and produces $KM = 3$ ✗, an absurdity since $KM$ must exceed $KQ = 9$. ANSWERING WITH THE WHOLE SIDE stops at $12$ ✗; the question asks for the far piece $QM$, not $KM$.',
    },
    {
      q: 'In the figure, $\\overline{UV} \\parallel \\overline{ST}$, with $RU = 10$, $US = 4$, and $RV = 15$. Find $VT$.',
      fig: {
        view: [-22.5, -1.5, 1.5, 12.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [-8.4, 11.2], [-21, 0]], fill: false },
          { t: 'seg', a: [-6, 8], b: [-15, 0] },
          { t: 'point', p: [0, 0], label: 'R', dx: 10, dy: 10 },
          { t: 'point', p: [-8.4, 11.2], label: 'S', dx: 0, dy: -12 },
          { t: 'point', p: [-21, 0], label: 'T', dx: -10, dy: 10 },
          { t: 'point', p: [-6, 8], label: 'U', dx: 12, dy: -6 },
          { t: 'point', p: [-15, 0], label: 'V', dx: 4, dy: 14 },
          { t: 'label', p: [-3, 4], text: '10', dx: 12, dy: 0 },
          { t: 'label', p: [-7.2, 9.6], text: '4', dx: 12, dy: 0 },
          { t: 'label', p: [-7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [-18, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      answer: '$VT = 6$',
      solution:
        'Since $\\overline{UV} \\parallel \\overline{ST}$, we get $\\triangle RUV \\sim \\triangle RST$ by AA — the triangles share $\\angle R$, and the parallel copies $\\angle S$ down to $\\angle RUV$. The whole side is $RS = 10 + 4 = 14$, so $\\frac{RV}{RT} = \\frac{RU}{RS} = \\frac{10}{14} = \\frac{5}{7}$, giving $RT = 15 \\times \\frac{7}{5} = 21$ and $VT = 21 - 15 = 6$. Second route by pieces: $\\frac{VT}{RV} = \\frac{US}{RU} = \\frac{4}{10} = \\frac{2}{5}$, so $VT = 15 \\times \\frac{2}{5} = 6$ ✓, no whole side ever computed. Cross-check the split: $RV : VT = 15 : 6 = 5 : 2$, matching $RU : US = 10 : 4 = 5 : 2$ ✓. USING THE PIECE INSTEAD OF THE WHOLE SIDE compares $RU$ with $US$ inside the whole-side proportion and yields $RT = 6$ ✗, shorter than $RV$ itself. ANSWERING WITH THE WHOLE SIDE hands over $21$ ✗, one subtraction short of what was asked.',
    },
    {
      q: 'In the figure, $\\overline{MN} \\parallel \\overline{YZ}$, with $XM = 10$, $MY = 5$, and $XN = 13$. Find $NZ$.',
      fig: {
        view: [-10.5, -5, 13.2, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 12], [-9, 0], [11.7, -3.6]], fill: false },
          { t: 'seg', a: [-6, 4], b: [7.8, 1.6] },
          { t: 'point', p: [0, 12], label: 'X', dx: 0, dy: -12 },
          { t: 'point', p: [-9, 0], label: 'Y', dx: -10, dy: 10 },
          { t: 'point', p: [11.7, -3.6], label: 'Z', dx: 12, dy: 8 },
          { t: 'point', p: [-6, 4], label: 'M', dx: -12, dy: 0 },
          { t: 'point', p: [7.8, 1.6], label: 'N', dx: 10, dy: -8 },
          { t: 'label', p: [-3, 8], text: '10', dx: -12, dy: 0 },
          { t: 'label', p: [-7.5, 2], text: '5', dx: -12, dy: 0 },
          { t: 'label', p: [3.9, 6.8], text: '13', dx: 12, dy: 0 },
          { t: 'label', p: [9.75, -1], text: '?', dx: 12, dy: 0 },
        ],
      },
      answer: '$NZ = 6.5$',
      solution:
        'The parallel gives $\\triangle XMN \\sim \\triangle XYZ$ by AA (shared $\\angle X$, corresponding angles at $M$ and $Y$). The whole side is $XY = 10 + 5 = 15$, so $\\frac{XN}{XZ} = \\frac{XM}{XY} = \\frac{10}{15} = \\frac{2}{3}$. Then $XZ = 13 \\times \\frac{3}{2} = 19.5$, and $NZ = 19.5 - 13 = 6.5$. Second route straight through the pieces: $\\frac{NZ}{XN} = \\frac{MY}{XM} = \\frac{5}{10} = \\frac{1}{2}$, so $NZ = 13 \\times \\frac{1}{2} = 6.5$ ✓. The two answers agree, and the split checks: $XN : NZ = 13 : 6.5 = 2 : 1 = XM : MY$ ✓. USING THE PIECE INSTEAD OF THE WHOLE SIDE sets $\\frac{XN}{XZ} = \\frac{10}{5}$ and gets $XZ = 6.5$ ✗ — the right number in the wrong place, and a length shorter than $XN$, which is impossible for the whole side. ANSWERING WITH THE WHOLE SIDE gives $19.5$ ✗; the ask is the leftover piece $NZ$.',
    },
  ],

  // slot 4 — shadow reckoning with a 1 m reference. Lanes: 1/2 with 44 -> 22 m;
  //          1/2.5 with 35 -> 14 m; 1/4 with 50 -> 12.5 m. Units kept.
  [
    {
      q: 'A vertical post exactly $1$ m tall casts a shadow $2$ m long. At the same moment, an office tower casts a shadow $44$ m long. How tall is the tower?',
      answer: '$22$ m',
      solution:
        'The sun’s rays are parallel, so the post-and-shadow triangle and the tower-and-shadow triangle are similar by AA (right angles at the ground, equal sun angles). Height over shadow is therefore the same for both: $\\frac{h}{44} = \\frac{1}{2}$, so $h = \\frac{44}{2} = 22$ m. Second route by scaling shadow to shadow: the tower’s shadow is $\\frac{44}{2} = 22$ times the post’s shadow, so the tower is $22$ times the post’s height, $22 \\times 1 = 22$ m ✓. Reasonableness: the shadow is twice the height for every object at this moment, and indeed $44 = 2 \\times 22$ ✓. FLIPPING THE RATIO computes $44 \\times 2 = 88$ m ✗ — but a $1$ m post with a $2$ m shadow means every object here is SHORTER than its shadow, so $88$ m of tower with $44$ m of shadow has it backwards. DROPPING THE UNITS leaves a bare $22$ ✗; a surveyor’s answer carries meters.',
    },
    {
      q: 'A $1$ m garden stake casts a $2.5$ m shadow. At the same moment, a water tower casts a shadow $35$ m long. Find the height of the water tower.',
      answer: '$14$ m',
      solution:
        'Parallel sunlight makes the stake triangle and the water-tower triangle similar by AA, so heights and shadows sit in one common ratio: $\\frac{h}{35} = \\frac{1}{2.5}$, giving $h = \\frac{35}{2.5} = 14$ m. Second route via the shadow-to-shadow factor: $\\frac{35}{2.5} = 14$, so the tower is $14$ stakes tall, and $14 \\times 1 = 14$ m ✓. Check it forward: a $14$ m tower at this sun angle casts $14 \\times 2.5 = 35$ m of shadow ✓, exactly what was measured. FLIPPING THE RATIO gives $35 \\times 2.5 = 87.5$ m ✗, a skyscraper the shadow cannot support — when the reference shadow is longer than the reference object, every height must come out SHORTER than its shadow, and $87.5 > 35$ fails that test instantly. DROPPING THE UNITS gives $14$ with nothing attached ✗; the meters are part of the answer.',
    },
    {
      q: 'Late in the afternoon, a $1$ m fence post casts a shadow $4$ m long. At the same moment, a lighthouse casts a shadow $50$ m long. How tall is the lighthouse?',
      answer: '$12.5$ m',
      solution:
        'The two right triangles — post with its shadow, lighthouse with its shadow — are similar by AA, since the sun’s parallel rays strike both at the same angle. So $\\frac{h}{50} = \\frac{1}{4}$, and $h = \\frac{50}{4} = 12.5$ m. Second route by counting posts: the lighthouse shadow holds $\\frac{50}{4} = 12.5$ post shadows, so the lighthouse stands $12.5$ posts tall, $12.5 \\times 1 = 12.5$ m ✓. Late-day sanity check: shadows are long, four times the height of whatever casts them, so every answer must be a quarter of its shadow — and $12.5 = \\frac{50}{4}$ ✓. FLIPPING THE RATIO multiplies instead and reports $200$ m ✗, taller than almost any lighthouse on Earth and four times its own shadow at a moment when shadows dwarf their objects. DROPPING THE UNITS turns a measurement into a bare number ✗.',
    },
  ],

  // slot 5 — SSS verdict plus scale factor, first to second. Lanes:
  //          8-15-17 vs 12-22.5-25.5 -> 3/2 (pin deviation: dressing moved off
  //          the 5.4 learn example 6-8-10 vs 9-12-15; the pinned answer is
  //          kept); 5-12-13 vs 12.5-30-32.5 -> 5/2; 4-7-9 vs 14-24.5-31.5
  //          presented jumbled -> 7/2.
  [
    {
      q: 'A carpenter cuts two triangular braces, one with sides $7, 9, 11$ and one with sides $10.5, 13.5, 16.5$. Are the braces similar? If so, give the scale factor from the first to the second.',
      answer: 'Yes — similar by SSS, with scale factor $\\frac{3}{2}$.',
      solution:
        'Both triples arrive sorted, so divide matching entries: $\\frac{10.5}{7} = 1.5$, $\\frac{13.5}{9} = 1.5$, $\\frac{16.5}{11} = 1.5$. All three ratios equal $\\frac{3}{2}$, which is exactly SSS Similarity with scale factor $\\frac{3}{2}$. Second route by clearing the decimals: double the second triple to get $(21, 27, 33)$, which is $3 \\times (7, 9, 11)$ — so the second brace is $\\frac{3}{2}$ of the first, the same verdict with whole numbers only ✓. Bonus check through the perimeters: $7 + 9 + 11 = 27$ and $10.5 + 13.5 + 16.5 = 40.5 = 27 \\times \\frac{3}{2}$ ✓ — the perimeters carry the same factor, as similarity demands. CHECKING ONLY TWO RATIOS is a habit that fails silently ✗ — two matches with a third mismatch happens often, and only the full three-for-three earns the SSS verdict. FLIPPING THE RATIO reports $\\frac{2}{3}$ ✗, the factor from second brace back to first, not the direction asked.',
    },
    {
      q: 'Are triangles with sides $5, 12, 13$ and $12.5, 30, 32.5$ similar? If so, give the scale factor from the first to the second.',
      answer: 'Yes — similar by SSS, with scale factor $\\frac{5}{2}$.',
      solution:
        'Divide sorted entry by sorted entry: $\\frac{12.5}{5} = 2.5$, $\\frac{30}{12} = 2.5$, $\\frac{32.5}{13} = 2.5$. One common ratio across all three pairs is SSS Similarity, scale factor $\\frac{5}{2}$. Second route without any decimal division: double the second triple to $(25, 60, 65)$ and factor it, $25 = 5 \\times 5$, $60 = 5 \\times 12$, $65 = 5 \\times 13$ — so twice the second triangle is five times the first, meaning the second is $\\frac{5}{2}$ of the first ✓. Both are $5$–$12$–$13$ right triangles at heart: $5^2 + 12^2 = 25 + 144 = 169 = 13^2$ ✓. COMPARING UNSORTED SIDES — say the $13$ against the $12.5$ because they sit nearest in size across the lists — produces ratios that disagree and a false “not similar” ✗; shortest goes with shortest, longest with longest. CHECKING ONLY TWO RATIOS and quitting early ✗ never earns the SSS badge, even when it happens to guess right.',
    },
    {
      q: 'One triangle has sides $9, 4, 7$; another has sides $24.5, 14, 31.5$. Are the triangles similar? If so, give the scale factor from the first to the second.',
      answer: 'Yes — similar by SSS, with scale factor $\\frac{7}{2}$.',
      solution:
        'These triples arrive jumbled, so sort before anything else: $(4, 7, 9)$ and $(14, 24.5, 31.5)$. Now divide in order: $\\frac{14}{4} = 3.5$, $\\frac{24.5}{7} = 3.5$, $\\frac{31.5}{9} = 3.5$ — all three ratios equal $\\frac{7}{2}$, so the triangles are similar by SSS with scale factor $\\frac{7}{2}$. Second route with the decimals cleared: doubling the second sorted triple gives $(28, 49, 63) = 7 \\times (4, 7, 9)$, so the second triangle is $\\frac{7}{2}$ times the first ✓. Existence check on the seed triple: $4 + 7 = 11 > 9$ ✓, a genuine triangle, and scaling preserves that. COMPARING UNSORTED SIDES pairs the listed $9$ with the listed $24.5$ and gets $\\frac{24.5}{9} \\ne 3.5$, then wrongly declares them not similar ✗ — the sort is not optional. FLIPPING THE RATIO answers $\\frac{2}{7}$ ✗, the shrinking direction, when the question runs small to large.',
    },
  ],

  // slot 6 — SAS about a shared vertex, both far points past the near ones on
  //          their rays. Lanes: 6,8 -> 9,12 with 7 (k=3/2, DE=10.5);
  //          6,8 -> 15,20 with 9 (k=5/2, 22.5); 4,6 -> 18,27 with 3 (k=9/2,
  //          13.5). Figures metric: the far points are exact multiples of the
  //          near ones, so the drawn ?-segments measure the true answers.
  [
    {
      q: 'In the figure, $N$ is on ray $\\overrightarrow{GH}$ beyond $H$, and $P$ is on ray $\\overrightarrow{GK}$ beyond $K$, with $GH = 6$, $GK = 8$, $GN = 9$, $GP = 12$, and $HK = 7$. Find $NP$.',
      fig: {
        view: [-1.5, -1.5, 13.5, 8.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [4.7813, 7.625] },
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [3.1875, 5.0833], b: [8, 0] },
          { t: 'seg', a: [4.7813, 7.625], b: [12, 0] },
          { t: 'point', p: [0, 0], label: 'G', dx: -10, dy: 10 },
          { t: 'point', p: [3.1875, 5.0833], label: 'H', dx: -10, dy: -6 },
          { t: 'point', p: [8, 0], label: 'K', dx: 0, dy: 14 },
          { t: 'point', p: [4.7813, 7.625], label: 'N', dx: 0, dy: -12 },
          { t: 'point', p: [12, 0], label: 'P', dx: 12, dy: 6 },
          { t: 'label', p: [1.59, 2.54], text: '6', dx: -10, dy: 0 },
          { t: 'label', p: [3.98, 6.35], text: '3', dx: -12, dy: 0 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [10, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [5.59, 2.54], text: '7', dx: 10, dy: 0 },
          { t: 'label', p: [8.39, 3.81], text: '?', dx: 10, dy: 0 },
        ],
      },
      answer: '$NP = 10.5$',
      solution:
        '$\\triangle GHK$ and $\\triangle GNP$ share $\\angle G$, and the arms around it match ratios: $\\frac{GN}{GH} = \\frac{9}{6} = \\frac{3}{2}$ and $\\frac{GP}{GK} = \\frac{12}{8} = \\frac{3}{2}$. Equal included angle plus equal arm ratios is SAS Similarity with factor $\\frac{3}{2}$, so $NP = \\frac{3}{2} \\times HK = \\frac{3}{2} \\times 7 = 10.5$. Second route by the enlargement itself: the stretch centered at $G$ with factor $\\frac{3}{2}$ sends $H$ to $N$ and $K$ to $P$ (that is what the ray distances say), so it lays $\\overline{HK}$ onto $\\overline{NP}$ and multiplies its length by $\\frac{3}{2}$, giving $10.5$ ✓ — the drawn figure is built exactly this way, with $N$ and $P$ at $\\frac{3}{2}$ times the coordinates of $H$ and $K$. ADDING THE GROWTH says $HN = 3$, so $NP = 7 + 3 = 10$ ✗; similarity multiplies. USING THE PIECE RATIO $\\frac{HN}{GH} = \\frac{3}{6}$ scales by $\\frac{1}{2}$ and gets $3.5$ ✗, a triangle smaller than the one it contains.',
    },
    {
      q: 'In the figure, $X$ is on ray $\\overrightarrow{MN}$ beyond $N$, and $Y$ is on ray $\\overrightarrow{MP}$ beyond $P$, with $MN = 6$, $MP = 8$, $MX = 15$, $MY = 20$, and $NP = 9$. Find $XY$.',
      fig: {
        view: [-1.5, -1.5, 21.5, 15.7],
        elems: [
          { t: 'seg', a: [0, 0], b: [2.9688, 14.7033] },
          { t: 'seg', a: [0, 0], b: [20, 0] },
          { t: 'seg', a: [1.1875, 5.8813], b: [8, 0] },
          { t: 'seg', a: [2.9688, 14.7033], b: [20, 0] },
          { t: 'point', p: [0, 0], label: 'M', dx: -10, dy: 10 },
          { t: 'point', p: [1.1875, 5.8813], label: 'N', dx: -10, dy: -6 },
          { t: 'point', p: [8, 0], label: 'P', dx: 0, dy: 14 },
          { t: 'point', p: [2.9688, 14.7033], label: 'X', dx: 0, dy: -12 },
          { t: 'point', p: [20, 0], label: 'Y', dx: 12, dy: 6 },
          { t: 'label', p: [0.59, 2.94], text: '6', dx: -10, dy: 0 },
          { t: 'label', p: [2.08, 10.29], text: '9', dx: -12, dy: 0 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [14, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [4.59, 2.94], text: '9', dx: 10, dy: 0 },
          { t: 'label', p: [11.48, 7.35], text: '?', dx: 10, dy: 0 },
        ],
      },
      answer: '$XY = 22.5$',
      solution:
        'Both triangles claim the same angle at $M$, and the arms agree in ratio: $\\frac{MX}{MN} = \\frac{15}{6} = \\frac{5}{2}$ and $\\frac{MY}{MP} = \\frac{20}{8} = \\frac{5}{2}$. That is SAS Similarity, $\\triangle MNP \\sim \\triangle MXY$ with factor $\\frac{5}{2}$, so $XY = \\frac{5}{2} \\times NP = \\frac{5}{2} \\times 9 = 22.5$. Second route through the enlargement centered at $M$ with factor $\\frac{5}{2}$: it carries $N$ to $X$ and $P$ to $Y$ by the very distances given, so it carries the segment $\\overline{NP}$ onto $\\overline{XY}$, stretching $9$ into $22.5$ ✓ — and in the drawn coordinates $X$ is exactly $\\frac{5}{2}$ times $N$, so the picture measures $22.5$ as well. A curiosity of this lane: the piece $NX = 15 - 6 = 9$ equals $NP = 9$, which makes ADDING THE GROWTH especially tempting — $9 + 9 = 18$ ✗ is wrong because growth is multiplicative. USING THE PIECE RATIO $\\frac{9}{6}$ scales by $\\frac{3}{2}$ and gives $13.5$ ✗, the answer to a different triangle’s question.',
    },
    {
      q: 'In the figure, $S$ is on ray $\\overrightarrow{JK}$ beyond $K$, and $T$ is on ray $\\overrightarrow{JL}$ beyond $L$, with $JK = 4$, $JL = 6$, $JS = 18$, $JT = 27$, and $KL = 3$. Find $ST$.',
      fig: {
        view: [-1.5, -1.5, 28.5, 9.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [16.125, 7.999] },
          { t: 'seg', a: [0, 0], b: [27, 0] },
          { t: 'seg', a: [3.5833, 1.7776], b: [6, 0] },
          { t: 'seg', a: [16.125, 7.999], b: [27, 0] },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [3.5833, 1.7776], label: 'K', dx: -8, dy: -10 },
          { t: 'point', p: [6, 0], label: 'L', dx: 4, dy: 14 },
          { t: 'point', p: [16.125, 7.999], label: 'S', dx: 0, dy: -12 },
          { t: 'point', p: [27, 0], label: 'T', dx: 12, dy: 6 },
          { t: 'label', p: [1.79, 0.89], text: '4', dx: -8, dy: -8 },
          { t: 'label', p: [9.85, 4.89], text: '14', dx: -10, dy: -6 },
          { t: 'label', p: [3, 0], text: '6', dx: -6, dy: 14 },
          { t: 'label', p: [16.5, 0], text: '21', dx: 0, dy: 14 },
          { t: 'label', p: [4.79, 0.89], text: '3', dx: 10, dy: 2 },
          { t: 'label', p: [21.56, 4], text: '?', dx: 10, dy: 0 },
        ],
      },
      answer: '$ST = 13.5$',
      solution:
        'Check the arms around the shared $\\angle J$: $\\frac{JS}{JK} = \\frac{18}{4} = \\frac{9}{2}$ and $\\frac{JT}{JL} = \\frac{27}{6} = \\frac{9}{2}$. Same ratio, same included angle — SAS Similarity with factor $\\frac{9}{2}$, so $ST = \\frac{9}{2} \\times KL = \\frac{9}{2} \\times 3 = 13.5$. Second route by the enlargement about $J$ with factor $\\frac{9}{2}$: it moves $K$ out to $S$ and $L$ out to $T$, dragging $\\overline{KL}$ onto $\\overline{ST}$ and multiplying its length by $\\frac{9}{2}$, so $ST = 13.5$ ✓; the figure’s coordinates place $S$ at exactly $\\frac{9}{2}$ times $K$, and the drawn $\\overline{ST}$ measures $13.5$ on the nose. Note the shape of this lane: the factor is large but the seed side $KL = 3$ is tiny, so the answer stays modest — a good self-check against wild results. ADDING THE GROWTH computes $KS = 14$ and answers $3 + 14 = 17$ ✗. USING THE PIECE RATIO $\\frac{KS}{JK} = \\frac{14}{4}$ scales by $\\frac{7}{2}$ and gives $10.5$ ✗ — close enough to feel right, which is what makes it dangerous.',
    },
  ],

  // slot 7 — altitude from the right angle to the hypotenuse, legs and
  //          hypotenuse given. Lanes: 30-40-50 -> 24; 21-28-35 -> 16.8
  //          (legs swapped in orientation); 27-36-45 -> 21.6 (hypotenuse
  //          drawn along the bottom). Feet of the altitudes computed exactly.
  [
    {
      q: 'A right triangle has legs $30$ and $40$ and hypotenuse $50$, as shown. Find the length of the altitude from the right angle to the hypotenuse.',
      fig: {
        view: [-2, -2.5, 42, 31.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [40, 0], [0, 30]], fill: false },
          { t: 'seg', a: [0, 0], b: [14.4, 19.2] },
          { t: 'right', at: [0, 0], from: [40, 0], to: [0, 30] },
          { t: 'right', at: [14.4, 19.2], from: [40, 0], to: [0, 0] },
          { t: 'point', p: [0, 0], label: 'N', dx: -10, dy: 10 },
          { t: 'point', p: [40, 0], label: 'P', dx: 10, dy: 10 },
          { t: 'point', p: [0, 30], label: 'M', dx: 0, dy: -12 },
          { t: 'point', p: [14.4, 19.2], label: 'F', dx: 8, dy: -8 },
          { t: 'label', p: [20, 0], text: '40', dx: 0, dy: 14 },
          { t: 'label', p: [0, 15], text: '30', dx: -12, dy: 0 },
          { t: 'label', p: [20, 15], text: '50', dx: 10, dy: -6 },
          { t: 'label', p: [7.2, 9.6], text: '?', dx: 8, dy: 8 },
        ],
      },
      answer: '$24$',
      solution:
        'Compute the area two ways. With the legs: $\\frac{1}{2} \\times 30 \\times 40 = 600$. With the hypotenuse as base and the altitude $h$ as height: $\\frac{1}{2} \\times 50 \\times h$. Equating, $25h = 600$ and $h = 24$. Second route through the similar triangles the altitude creates: the foot $F$ splits the hypotenuse into $\\frac{30^2}{50} = 18$ (next to the leg $30$) and $\\frac{40^2}{50} = 32$ (next to the leg $40$), with $18 + 32 = 50$ ✓, and the geometric-mean relation gives $h^2 = 18 \\times 32 = 576$, so $h = 24$ ✓ — both roads meet. Shape check: the altitude to the hypotenuse is always the shortest of the three heights, and $24 < 30 < 40$ ✓. AVERAGING THE LEGS offers $35$ ✗, a number with no theorem behind it. ANSWERING WITH A LEG hands back $30$ ✗ — a leg IS an altitude of the triangle, but not the one to the hypotenuse that was asked for.',
    },
    {
      q: 'In $\\triangle XYZ$, the right angle is at $Z$, with $ZX = 21$, $ZY = 28$, and $XY = 35$, as in the figure. How far is $Z$ from the line $XY$?',
      fig: {
        view: [-2, -2.5, 23, 29.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [21, 0], [0, 28]], fill: false },
          { t: 'seg', a: [0, 0], b: [13.44, 10.08] },
          { t: 'right', at: [0, 0], from: [21, 0], to: [0, 28] },
          { t: 'right', at: [13.44, 10.08], from: [21, 0], to: [0, 0] },
          { t: 'point', p: [0, 0], label: 'Z', dx: -10, dy: 10 },
          { t: 'point', p: [21, 0], label: 'X', dx: 10, dy: 10 },
          { t: 'point', p: [0, 28], label: 'Y', dx: 0, dy: -12 },
          { t: 'point', p: [13.44, 10.08], label: 'K', dx: 10, dy: -6 },
          { t: 'label', p: [10.5, 0], text: '21', dx: 0, dy: 14 },
          { t: 'label', p: [0, 14], text: '28', dx: -12, dy: 0 },
          { t: 'label', p: [10.5, 14], text: '35', dx: 10, dy: -6 },
          { t: 'label', p: [6.72, 5.04], text: '?', dx: 6, dy: 10 },
        ],
      },
      answer: '$16.8$',
      solution:
        'The distance from $Z$ to line $XY$ is the length of the perpendicular from $Z$ — the altitude $\\overline{ZK}$ to the hypotenuse. Area two ways: $\\frac{1}{2} \\times 21 \\times 28 = 294$ and $\\frac{1}{2} \\times 35 \\times ZK$, so $17.5 \\times ZK = 294$ and $ZK = 16.8$. Second route by the hypotenuse pieces: $K$ splits $\\overline{XY}$ into $\\frac{21^2}{35} = 12.6$ next to $X$ and $\\frac{28^2}{35} = 22.4$ next to $Y$, with $12.6 + 22.4 = 35$ ✓; the altitude is their geometric mean, $ZK^2 = 12.6 \\times 22.4 = 282.24 = 16.8^2$ ✓. The triple itself checks: $21^2 + 28^2 = 441 + 784 = 1225 = 35^2$ ✓ (it is $7$ times $3$–$4$–$5$). AVERAGING THE LEGS gives $24.5$ ✗, which is not how altitudes work. ANSWERING WITH A LEG gives $21$ or $28$ ✗ — those measure distances to the other two sides, and both are longer than the true $16.8$, as the altitude to the hypotenuse must be the shortest.',
    },
    {
      q: 'In the figure, $\\triangle UVW$ has a right angle at $V$, with $UV = 27$, $VW = 36$, and $UW = 45$. The altitude from $V$ meets $\\overline{UW}$ at $K$. Find $VK$.',
      fig: {
        view: [-2, -2.5, 47, 23.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [45, 0], [16.2, 21.6]], fill: false },
          { t: 'seg', a: [16.2, 21.6], b: [16.2, 0] },
          { t: 'right', at: [16.2, 0], from: [45, 0], to: [16.2, 21.6] },
          { t: 'right', at: [16.2, 21.6], from: [0, 0], to: [45, 0] },
          { t: 'point', p: [0, 0], label: 'U', dx: -10, dy: 10 },
          { t: 'point', p: [45, 0], label: 'W', dx: 10, dy: 10 },
          { t: 'point', p: [16.2, 21.6], label: 'V', dx: 0, dy: -12 },
          { t: 'point', p: [16.2, 0], label: 'K', dx: 0, dy: 14 },
          { t: 'label', p: [8.1, 10.8], text: '27', dx: -12, dy: -4 },
          { t: 'label', p: [30.6, 10.8], text: '36', dx: 12, dy: -4 },
          { t: 'label', p: [22.5, 0], text: '45', dx: 8, dy: 14 },
          { t: 'label', p: [16.2, 10.8], text: '?', dx: -10, dy: 0 },
        ],
      },
      answer: '$21.6$',
      solution:
        'Two computations of the same area: from the legs, $\\frac{1}{2} \\times 27 \\times 36 = 486$; from the hypotenuse and altitude, $\\frac{1}{2} \\times 45 \\times VK$. So $22.5 \\times VK = 486$ and $VK = 21.6$. Second route by the three-similar-triangles picture: $\\triangle UKV \\sim \\triangle UVW$ gives $UK = \\frac{UV^2}{UW} = \\frac{729}{45} = 16.2$, the other piece is $KW = \\frac{36^2}{45} = 28.8$, and the altitude is the geometric mean of the pieces: $VK^2 = 16.2 \\times 28.8 = 466.56 = 21.6^2$ ✓, with $16.2 + 28.8 = 45$ ✓ closing the hypotenuse. The triple is sound: $27^2 + 36^2 = 729 + 1296 = 2025 = 45^2$ ✓. AVERAGING THE LEGS proposes $31.5$ ✗ — no mean of the legs measures this height. ANSWERING WITH A LEG offers $27$ ✗; from $V$ the legs run to the corners, but the distance to the opposite SIDE is the shorter $21.6$.',
    },
  ],

  // slot 8 — hourglass in a trapezoid: parallel sides and one diagonal given,
  //          find the crossing-to-far-vertex piece. Lanes: 7/21 with 36 -> 27;
  //          9/18 with 33 -> 22; 8/12 with 30 -> 18. Figures fully metric —
  //          the drawn diagonal and the drawn answer segment have exactly the
  //          stated and keyed lengths (3-4-5-flavored heights make them exact).
  [
    {
      q: 'In trapezoid $EFGH$ shown, $\\overline{EF} \\parallel \\overline{HG}$, $EF = 7$, $HG = 21$, and diagonal $FH = 36$. The diagonals meet at $P$. Find $PH$.',
      fig: {
        view: [-1.5, -1.5, 23.5, 30.5],
        elems: [
          { t: 'poly', pts: [[14.6, 28.8], [21.6, 28.8], [21, 0], [0, 0]], fill: false },
          { t: 'seg', a: [14.6, 28.8], b: [21, 0] },
          { t: 'seg', a: [21.6, 28.8], b: [0, 0] },
          { t: 'point', p: [14.6, 28.8], label: 'E', dx: -10, dy: -6 },
          { t: 'point', p: [21.6, 28.8], label: 'F', dx: 10, dy: -6 },
          { t: 'point', p: [21, 0], label: 'G', dx: 10, dy: 10 },
          { t: 'point', p: [0, 0], label: 'H', dx: -10, dy: 10 },
          { t: 'point', p: [16.2, 21.6], label: 'P', dx: -12, dy: 0 },
          { t: 'label', p: [18.1, 28.8], text: '7', dx: 0, dy: -10 },
          { t: 'label', p: [10.5, 0], text: '21', dx: 0, dy: 14 },
        ],
      },
      answer: '$PH = 27$',
      solution:
        'The diagonals build the hourglass: $\\triangle PEF \\sim \\triangle PGH$ by AA (alternate angles from the parallels, vertical angles at $P$), so $P$ cuts diagonal $\\overline{FH}$ in the ratio of the parallel sides, $FP : PH = EF : GH = 7 : 21 = 1 : 3$. Then $PH$ is $\\frac{3}{1+3} = \\frac{3}{4}$ of the diagonal: $PH = \\frac{3}{4} \\times 36 = 27$, and $FP = 9$ with $9 + 27 = 36$ ✓. Second route through the scale factor as an equation: $PH = 3 \\times FP$ because the bottom triangle is three times the top, and $FP + 3 \\times FP = 36$ forces $FP = 9$, $PH = 27$ ✓ — the drawn figure is metric, and the distance from $P$ to $H$ in it measures exactly $27$. HALVING THE DIAGONAL answers $18$ ✗; trapezoid diagonals do not bisect each other — only a parallelogram’s do. FLIPPING THE SHARES gives $PH = \\frac{1}{4} \\times 36 = 9$ ✗, but $PH$ hugs the LONGER parallel side, so it must be the bigger piece.',
    },
    {
      q: 'In trapezoid $PQRS$ shown, $\\overline{PQ} \\parallel \\overline{SR}$, $PQ = 9$, $SR = 18$, and diagonal $QS = 33$. The diagonals cross at $T$. Find $TS$.',
      fig: {
        view: [-1.5, -1.5, 21.5, 28],
        elems: [
          { t: 'poly', pts: [[10.8, 26.4], [19.8, 26.4], [18, 0], [0, 0]], fill: false },
          { t: 'seg', a: [10.8, 26.4], b: [18, 0] },
          { t: 'seg', a: [19.8, 26.4], b: [0, 0] },
          { t: 'point', p: [10.8, 26.4], label: 'P', dx: -10, dy: -6 },
          { t: 'point', p: [19.8, 26.4], label: 'Q', dx: 10, dy: -6 },
          { t: 'point', p: [18, 0], label: 'R', dx: 10, dy: 10 },
          { t: 'point', p: [0, 0], label: 'S', dx: -10, dy: 10 },
          { t: 'point', p: [13.2, 17.6], label: 'T', dx: -12, dy: 0 },
          { t: 'label', p: [15.3, 26.4], text: '9', dx: 0, dy: -10 },
          { t: 'label', p: [9, 0], text: '18', dx: 0, dy: 14 },
        ],
      },
      answer: '$TS = 22$',
      solution:
        'The crossing diagonals give $\\triangle TPQ \\sim \\triangle TRS$ by AA — the parallels supply equal alternate angles, and the angles at $T$ are vertical. Corresponding pieces of diagonal $\\overline{QS}$ therefore split as $QT : TS = PQ : RS = 9 : 18 = 1 : 2$, so $TS = \\frac{2}{1+2} \\times 33 = 22$, leaving $QT = 11$, and $11 + 22 = 33$ ✓. Second route by lengths instead of shares: the bottom triangle doubles the top, so $TS = 2 \\times QT$; substituting into $QT + TS = 33$ gives $3 \\times QT = 33$, $QT = 11$, $TS = 22$ ✓ — and the metric figure agrees, the drawn $\\overline{TS}$ measuring exactly $22$. HALVING THE DIAGONAL proposes $16.5$ ✗, quietly assuming a parallelogram that is not there. FLIPPING THE SHARES puts the short piece at $S$ and answers $11$ ✗ — backwards, because the piece of a diagonal next to the longer parallel side is always the longer piece.',
    },
    {
      q: 'In trapezoid $DEFG$ shown, $\\overline{DE} \\parallel \\overline{GF}$, $DE = 8$, $GF = 12$, and diagonal $EG = 30$. The diagonals intersect at $H$. Find $HG$.',
      fig: {
        view: [-1.5, -1.5, 19.5, 25.5],
        elems: [
          { t: 'poly', pts: [[10, 24], [18, 24], [12, 0], [0, 0]], fill: false },
          { t: 'seg', a: [10, 24], b: [12, 0] },
          { t: 'seg', a: [18, 24], b: [0, 0] },
          { t: 'point', p: [10, 24], label: 'D', dx: -10, dy: -6 },
          { t: 'point', p: [18, 24], label: 'E', dx: 10, dy: -6 },
          { t: 'point', p: [12, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [0, 0], label: 'G', dx: -10, dy: 10 },
          { t: 'point', p: [10.8, 14.4], label: 'H', dx: -12, dy: 0 },
          { t: 'label', p: [14, 24], text: '8', dx: 0, dy: -10 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
        ],
      },
      answer: '$HG = 18$',
      solution:
        'The hourglass triangles $\\triangle HDE$ and $\\triangle HFG$ are similar by AA (alternate angles from $\\overline{DE} \\parallel \\overline{GF}$, vertical angles at $H$), so the crossing point divides diagonal $\\overline{EG}$ as $EH : HG = DE : FG = 8 : 12 = 2 : 3$. Then $HG = \\frac{3}{2+3} \\times 30 = 18$, with $EH = 12$ and $12 + 18 = 30$ ✓. Second route through the factor: $HG = \\frac{3}{2} \\times EH$, so $EH + \\frac{3}{2} EH = 30$, meaning $\\frac{5}{2} EH = 30$, $EH = 12$, and $HG = 18$ ✓ — the drawn trapezoid is metric, and $H$ sits exactly $18$ from $G$. Notice the near-miss ratio: $8 : 12$ reduces to $2 : 3$, not $1 : 2$, so eyeballing “about double” corrupts every share. HALVING THE DIAGONAL gives $15$ ✗ — the diagonals of a trapezoid never bisect each other unless both pairs of sides are parallel. FLIPPING THE SHARES gives $\\frac{2}{5} \\times 30 = 12$ ✗, which is $EH$, the piece on the short-side end.',
    },
  ],

  // slot 9 — parallel cut at a given fraction, area of the leftover trapezoid.
  //          Lanes: 1/2 of 88 -> 66 (moved off 1/2 of 48 -> 36, which is
  //          Section 5.5 problem 10's exact pair); 3/4 of 80 -> 35 (moved off
  //          3/4 of 32 -> 14, which doubled the slot 4 shadow lane's 14 in
  //          the same round); 2/5 of 50 -> 42. Cut points at the exact
  //          parameter, so the drawn parallels are true.
  [
    {
      q: 'In the figure, $\\overline{UV} \\parallel \\overline{ST}$ and $\\frac{RU}{RS} = \\frac{1}{2}$. The area of $\\triangle RST$ is $88$. Find the area of trapezoid $USTV$.',
      fig: {
        view: [-5.5, -1.5, 6.5, 7.5],
        elems: [
          { t: 'poly', pts: [[-4, 0], [5, 0], [0, 6]], fill: false },
          { t: 'seg', a: [-2, 3], b: [2.5, 3] },
          { t: 'point', p: [0, 6], label: 'R', dx: 0, dy: -12 },
          { t: 'point', p: [-4, 0], label: 'S', dx: -10, dy: 10 },
          { t: 'point', p: [5, 0], label: 'T', dx: 10, dy: 10 },
          { t: 'point', p: [-2, 3], label: 'U', dx: -12, dy: 0 },
          { t: 'point', p: [2.5, 3], label: 'V', dx: 12, dy: 0 },
        ],
      },
      answer: '$66$',
      solution:
        'The parallel gives $\\triangle RUV \\sim \\triangle RST$ with ratio $\\frac{RU}{RS} = \\frac{1}{2}$, and area picks up that ratio TWICE: the small triangle has area $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$ of the whole, which is $88 \\times \\frac{1}{4} = 22$. The trapezoid is what remains: $88 - 22 = 66$. Second route in one step: the trapezoid’s share of the area is $1 - k^2 = 1 - \\frac{1}{4} = \\frac{3}{4}$, and $88 \\times \\frac{3}{4} = 66$ ✓ — same number, no subtraction at the end. Check by reassembly: $22 + 66 = 88$ ✓, the pieces refill the triangle. USING THE RATIO ONCE treats area like length, takes half of $88$, and reports $88 - 44 = 44$ ✗ — halving the sides quarters the area, so the top piece is far smaller than half. ANSWERING WITH THE SMALL TRIANGLE stops at $22$ ✗; the question asks for the trapezoid below the cut, not the cap above it.',
    },
    {
      q: 'In the figure, $\\overline{GH} \\parallel \\overline{EF}$ and $\\frac{DG}{DE} = \\frac{3}{4}$. The area of $\\triangle DEF$ is $80$. What is the area of trapezoid $GEFH$?',
      fig: {
        view: [-4.5, -1.5, 7.5, 9.5],
        elems: [
          { t: 'poly', pts: [[-3, 0], [6, 0], [0, 8]], fill: false },
          { t: 'seg', a: [-2.25, 2], b: [4.5, 2] },
          { t: 'point', p: [0, 8], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [-3, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [-2.25, 2], label: 'G', dx: -12, dy: 0 },
          { t: 'point', p: [4.5, 2], label: 'H', dx: 12, dy: 0 },
        ],
      },
      answer: '$35$',
      solution:
        '$\\triangle DGH \\sim \\triangle DEF$ by AA with ratio $\\frac{3}{4}$, so the small triangle’s area is $\\left(\\frac{3}{4}\\right)^2 = \\frac{9}{16}$ of the whole: $80 \\times \\frac{9}{16} = 45$. The trapezoid takes the rest, $80 - 45 = 35$. Second route by the leftover fraction directly: $1 - k^2 = 1 - \\frac{9}{16} = \\frac{7}{16}$, and $80 \\times \\frac{7}{16} = 35$ ✓. Reassemble to be sure: $45 + 35 = 80$ ✓. Worth pausing on the shape of this lane: the cut sits three quarters of the way down, yet the trapezoid holds LESS than half the area ($\\frac{7}{16}$), because the strip near the base is wide but thin. USING THE RATIO ONCE takes $\\frac{3}{4}$ of $80$ to get $60$ and answers $80 - 60 = 20$ ✗ — length thinking applied to area. ANSWERING WITH THE SMALL TRIANGLE returns $45$ ✗, the piece above the parallel cut instead of the trapezoid named in the question.',
    },
    {
      q: 'In the figure, $\\overline{PQ} \\parallel \\overline{YZ}$ and $\\frac{XP}{XY} = \\frac{2}{5}$. The area of $\\triangle XYZ$ is $50$. Find the area of trapezoid $PYZQ$.',
      fig: {
        view: [-5.5, -1.5, 7.5, 6.5],
        elems: [
          { t: 'poly', pts: [[-4, 0], [6, 0], [1, 5]], fill: false },
          { t: 'seg', a: [-1, 3], b: [3, 3] },
          { t: 'point', p: [1, 5], label: 'X', dx: 0, dy: -12 },
          { t: 'point', p: [-4, 0], label: 'Y', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'Z', dx: 10, dy: 10 },
          { t: 'point', p: [-1, 3], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [3, 3], label: 'Q', dx: 12, dy: 0 },
        ],
      },
      answer: '$42$',
      solution:
        'The parallel cut makes $\\triangle XPQ \\sim \\triangle XYZ$ with ratio $\\frac{2}{5}$, so the top triangle’s area is $\\left(\\frac{2}{5}\\right)^2 = \\frac{4}{25}$ of the whole: $50 \\times \\frac{4}{25} = 8$. The trapezoid gets everything else: $50 - 8 = 42$. Second route through the complement: the trapezoid’s fraction is $1 - \\frac{4}{25} = \\frac{21}{25}$, and $50 \\times \\frac{21}{25} = 42$ ✓. Reassembly: $8 + 42 = 50$ ✓. The cut is high on this triangle — two fifths of the way down — so the cap is tiny and the trapezoid keeps the lion’s share, $84\\%$ of the area; a quick glance at the figure confirms the proportions. USING THE RATIO ONCE computes $\\frac{2}{5}$ of $50 = 20$ and answers $50 - 20 = 30$ ✗, forgetting that BOTH the base and the height of the cap shrank by $\\frac{2}{5}$. ANSWERING WITH THE SMALL TRIANGLE gives $8$ ✗ — the cap, not the trapezoid $PYZQ$ that was requested.',
    },
  ],

  // slot 10 — measuring across water by walking the bank: vertical angles and
  //          two right angles. Lanes: 30/6 offset 7 -> 35 m; 25/5 offset 8 ->
  //          40 m; 32/8 offset 11 -> 44 m. Each figure is metric with the
  //          sight line exactly collinear through the pivot point.
  [
    {
      q: 'To measure a river, a surveyor marks $M$ on the near bank directly across from a willow $W$ on the far bank. She walks $30$ m along the bank to $N$, then $6$ m more to $P$, then turns away from the river at a right angle and walks to a point $Q$ chosen so that $Q$, $N$, and $W$ line up. She measures $PQ = 7$ m. How wide is the river ($MW$)?',
      fig: {
        view: [-2.5, -9.5, 38.5, 37.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [0, 35], dash: true },
          { t: 'seg', a: [0, 0], b: [36, 0] },
          { t: 'seg', a: [36, 0], b: [36, -7] },
          { t: 'seg', a: [0, 35], b: [36, -7] },
          { t: 'right', at: [0, 0], from: [30, 0], to: [0, 35] },
          { t: 'right', at: [36, 0], from: [30, 0], to: [36, -7] },
          { t: 'point', p: [0, 35], label: 'W', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'M', dx: -10, dy: 10 },
          { t: 'point', p: [30, 0], label: 'N', dx: 0, dy: -12 },
          { t: 'point', p: [36, 0], label: 'P', dx: 12, dy: -8 },
          { t: 'point', p: [36, -7], label: 'Q', dx: 12, dy: 8 },
          { t: 'label', p: [15, 0], text: '30', dx: 0, dy: 14 },
          { t: 'label', p: [33, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [36, -3.5], text: '7', dx: 12, dy: 0 },
          { t: 'label', p: [0, 17.5], text: '?', dx: -12, dy: 0 },
        ],
      },
      answer: '$MW = 35$ m',
      solution:
        'At $N$ the two sight lines cross, so $\\angle WNM = \\angle QNP$ (vertical angles), and the right angles at $M$ and $P$ complete AA: $\\triangle WMN \\sim \\triangle QPN$. Corresponding sides give $\\frac{MW}{PQ} = \\frac{MN}{PN}$, so $MW = 7 \\times \\frac{30}{6} = 35$ m. Second route by the drift of the sight line: from $Q$ to $N$ the line moves $7$ m toward the bank while covering $6$ m of bank, a rate of $\\frac{7}{6}$ m of width per meter walked; the same straight line runs $30$ m of bank from $N$ to $M$, so it stands $30 \\times \\frac{7}{6} = 35$ m off the bank at $M$ ✓. The whole point of the setup: three short measurements on dry land replace the one nobody can pace off. USING THE WHOLE WALK divides by $36$ instead of $6$ — or worse, multiplies by it, $7 \\times \\frac{36}{6} = 42$ ✗ — but the small triangle’s bank leg is only the $6$ m from $N$ to $P$. FLIPPING THE RATIO gives $7 \\times \\frac{6}{30} = 1.4$ m ✗, a river to step over.',
    },
    {
      q: 'A scout troop wants the distance across a river. They hammer a stake $S$ into the near bank directly opposite a boulder $R$ on the far bank, pace $25$ m along the bank to $U$, continue $5$ m more to $V$, then walk straight away from the water at a right angle until the boulder, $U$, and their position $K$ line up, which happens at $VK = 8$ m. How wide is the river ($SR$)?',
      fig: {
        view: [-2.5, -10.5, 32.5, 42.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [0, 40], dash: true },
          { t: 'seg', a: [0, 0], b: [30, 0] },
          { t: 'seg', a: [30, 0], b: [30, -8] },
          { t: 'seg', a: [0, 40], b: [30, -8] },
          { t: 'right', at: [0, 0], from: [25, 0], to: [0, 40] },
          { t: 'right', at: [30, 0], from: [25, 0], to: [30, -8] },
          { t: 'point', p: [0, 40], label: 'R', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'S', dx: -10, dy: 10 },
          { t: 'point', p: [25, 0], label: 'U', dx: 0, dy: -12 },
          { t: 'point', p: [30, 0], label: 'V', dx: 12, dy: -8 },
          { t: 'point', p: [30, -8], label: 'K', dx: 12, dy: 8 },
          { t: 'label', p: [12.5, 0], text: '25', dx: 0, dy: 14 },
          { t: 'label', p: [27.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [30, -4], text: '8', dx: 12, dy: 0 },
          { t: 'label', p: [0, 20], text: '?', dx: -12, dy: 0 },
        ],
      },
      answer: '$SR = 40$ m',
      solution:
        'The sight line $\\overline{RK}$ pivots at $U$, making vertical angles $\\angle RUS = \\angle KUV$; with the right angles at $S$ and $V$, AA gives $\\triangle RSU \\sim \\triangle KVU$. Then $\\frac{SR}{VK} = \\frac{SU}{VU}$, so $SR = 8 \\times \\frac{25}{5} = 40$ m. Second route by unit rate along the line of sight: between $K$ and $U$ the line closes $8$ m of offset over $5$ m of bank, so it gains $\\frac{8}{5}$ m of width per meter of bank; carried across the $25$ m from $U$ back to $S$, that is $25 \\times \\frac{8}{5} = 40$ m ✓. Scale check: the far triangle is $\\frac{25}{5} = 5$ times the near one, and $5 \\times 8 = 40$ ✓ — three consistent reads. USING THE WHOLE WALK takes the bank leg as $30$ and reports $8 \\times \\frac{30}{5} = 48$ m ✗; the similar triangle on the land side only reaches from $V$ back to $U$. FLIPPING THE RATIO shrinks instead, $8 \\times \\frac{5}{25} = 1.6$ m ✗ — no troop needs a rope bridge for that.',
    },
    {
      q: 'A harbor crew must find the width of a canal. They set a peg $P$ on the near edge directly across from a mooring post $L$ on the far edge, walk $32$ m along the edge to $Q$, then $8$ m more to $R$, then head straight inland at a right angle to a point $S$ from which $S$, $Q$, and $L$ are in a line, with $RS = 11$ m. How wide is the canal ($PL$)?',
      fig: {
        view: [-2.5, -13.5, 42.5, 46.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [0, 44], dash: true },
          { t: 'seg', a: [0, 0], b: [40, 0] },
          { t: 'seg', a: [40, 0], b: [40, -11] },
          { t: 'seg', a: [0, 44], b: [40, -11] },
          { t: 'right', at: [0, 0], from: [32, 0], to: [0, 44] },
          { t: 'right', at: [40, 0], from: [32, 0], to: [40, -11] },
          { t: 'point', p: [0, 44], label: 'L', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [32, 0], label: 'Q', dx: 0, dy: -12 },
          { t: 'point', p: [40, 0], label: 'R', dx: 12, dy: -8 },
          { t: 'point', p: [40, -11], label: 'S', dx: 12, dy: 8 },
          { t: 'label', p: [16, 0], text: '32', dx: 0, dy: 14 },
          { t: 'label', p: [36, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [40, -5.5], text: '11', dx: 12, dy: 0 },
          { t: 'label', p: [0, 22], text: '?', dx: -12, dy: 0 },
        ],
      },
      answer: '$PL = 44$ m',
      solution:
        'The line from $L$ to $S$ crosses the walked edge at $Q$, so $\\angle LQP = \\angle SQR$ (vertical angles), and the construction planted right angles at $P$ and $R$ — AA gives $\\triangle LPQ \\sim \\triangle SRQ$. Corresponding sides: $\\frac{PL}{RS} = \\frac{PQ}{RQ}$, so $PL = 11 \\times \\frac{32}{8} = 44$ m. Second route by the sight line’s constant slope: it gains $11$ m of offset across the $8$ m from $R$ to $Q$, that is $\\frac{11}{8}$ m per meter of edge, and over the $32$ m from $Q$ to $P$ it accumulates $32 \\times \\frac{11}{8} = 44$ m ✓. Factor check: the water-side triangle is $\\frac{32}{8} = 4$ times the land-side one, and $4 \\times 11 = 44$ ✓. USING THE WHOLE WALK runs the proportion with $32 + 8 = 40$ and gets $11 \\times \\frac{40}{8} = 55$ m ✗ — the pivot at $Q$ separates the $32$ from the $8$, and only the $8$ belongs to the small triangle. FLIPPING THE RATIO gives $11 \\times \\frac{8}{32} = 2.75$ m ✗, narrower than a rowboat.',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 5,
  worksheet,
}
