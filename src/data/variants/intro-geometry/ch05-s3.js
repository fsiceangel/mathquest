// Introduction to Geometry chapter 5 — variations for section 5.3
// (SAS Similarity). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every length was worked twice by routes that do not share arithmetic:
//    the scale factor from one pair of arms against the factor from the other
//    pair, a scaled side against the Pythagorean Theorem, a scaled perimeter
//    against the side-by-side sum, and an algebraic result against a backward
//    test of the four printed candidates. The two routes must agree before a
//    key is written down.
//  - Every triple of side lengths was checked against the triangle
//    inequality before it was allowed into a problem.
//  - Figures are built from their own numbers: in the nested configuration
//    the small triangle sits inside the large one sharing vertex A, with B on
//    segment AD and C on segment AE, and every drawn segment has exactly the
//    length its label claims (to the precision of the printed coordinates).
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS. The traps running through this section: MISPLACING THE EQUAL
//    ANGLE, ACCEPTING A NON-INCLUDED ANGLE, REQUIRING A RIGHT ANGLE,
//    DEMANDING THE THIRD SIDES, DEMANDING EQUAL ANGLES EVERYWHERE, DEMANDING
//    EQUAL PERIMETERS, CONFUSING SAS WITH SSS, MATCHING A SHORT ARM TO A LONG
//    ARM, INVERTING THE SCALE FACTOR, ADDING THE EXTENSION INSTEAD OF
//    MULTIPLYING, DIVIDING BY THE SCALE FACTOR, APPLYING THE FACTOR TWICE,
//    CONFUSING SIMILARITY WITH CONGRUENCE, REQUIRING ACUTENESS, ADDING THE
//    LEGS, FORGETTING TO SCALE, COMPARING TO THE LEFTOVER PIECE, SUBTRACTING
//    THE SIDES INSTEAD OF DIVIDING, PAIRING THE ARMS CROSSWISE, DIVIDING THE
//    TWO GIVEN SIDES, DENYING THE OVERLAP OF CONGRUENT AND SIMILAR, ANSWERING
//    THE SMALL PERIMETER, and ADDING ONLY THE VISIBLE GROWTH.
//  - No two choices inside an item name the same value.

const s53 = [
  // slot 1 — what SAS Similarity needs; the angle must be INCLUDED.
  [
    {
      q: 'To use SAS Similarity on $\\triangle GHK$ and $\\triangle RST$, you first match two pairs of sides in the same ratio. Where must the pair of equal angles sit?',
      choices: [
        'at the vertices where the two compared sides meet, included between the proportional pairs',
        'opposite the longer of the two compared sides',
        'at any pair of matching vertices',
        'they must both be right angles',
      ],
      answer: 0,
      solution:
        'SAS Similarity is a hinge test: two arms in the same ratio, and the hinge — the angle at the vertex where those very arms meet — opened the same amount in both triangles. Once the arms are proportional and the hinge between them is equal, the whole shape is locked, so the equal angles must be the INCLUDED ones ✓. Check it a second way by trying to break the rule: keep the two side ratios fixed and move the equal angle to a non-included spot. That is the SSA picture, where the far side can swing into two different positions and close the triangle in two genuinely different shapes from the same data — so the theorem cannot survive with the angle anywhere else, and the included position is the only one that works ✓. (The choice “opposite the longer side” is MISPLACING THE EQUAL ANGLE, which SAS never allows ✗; “any pair of matching vertices” is ACCEPTING A NON-INCLUDED ANGLE, the SSA trap ✗; “right angles” is REQUIRING A RIGHT ANGLE, but the hinge may be open to any measure ✗.)',
    },
    {
      q: 'Mira has verified that $\\frac{XY}{QR} = \\frac{XZ}{QS}$ for triangles $XYZ$ and $QRS$. What is the one remaining check before SAS Similarity lets her declare the triangles similar?',
      choices: [
        'that the third pair of sides is in the same ratio too',
        'that all three pairs of angles are equal',
        'that $\\angle X = \\angle Q$ — the angles included between the compared sides',
        'that the two triangles have equal perimeters',
      ],
      answer: 2,
      solution:
        'Read the compared sides: $\\overline{XY}$ and $\\overline{XZ}$ both leave vertex $X$, and $\\overline{QR}$ and $\\overline{QS}$ both leave vertex $Q$. The angle between each pair of arms is $\\angle X$ and $\\angle Q$, so the missing ingredient is $\\angle X = \\angle Q$ — side, INCLUDED angle, side ✓. Check it a second way by counting what pins down a triangle: two arm lengths plus the opening between them determine the third side completely (swing the hinge and the far endpoints are fixed), so once the arms are in ratio and the hinges agree, no freedom is left and the shapes must match ✓ — nothing about the third side needs to be measured. (Checking the third pair of sides is CONFUSING SAS WITH SSS, a different test ✗; “all three pairs of angles” is DEMANDING EQUAL ANGLES EVERYWHERE, which is more than SAS asks ✗; “equal perimeters” is DEMANDING EQUAL PERIMETERS, which would force congruence, not test similarity ✗.)',
    },
    {
      q: 'Which list of facts, on its own, is exactly the SAS Similarity test for two triangles?',
      choices: [
        'two pairs of sides in the same ratio and any one pair of equal angles',
        'two pairs of equal angles and one pair of proportional sides',
        'three pairs of sides in the same ratio and one pair of equal angles',
        'two pairs of sides in the same ratio and equal angles included between those sides',
      ],
      answer: 3,
      solution:
        'Spell the name out: S–A–S is side, then the angle BETWEEN the sides, then the other side. In similarity form that reads: two pairs of sides in the same ratio, plus equal angles sitting between the compared pairs ✓. Check it a second way by stress-testing the closest wrong version: with the equal angle allowed to sit anywhere, the data becomes SSA, and SSA famously fits two different triangle shapes at once — a swinging side can close the figure short or long — so “any one pair of equal angles” cannot be a similarity guarantee, and the included condition is what separates the true test from the broken one ✓. (The first choice is ACCEPTING A NON-INCLUDED ANGLE ✗; “two pairs of equal angles…” is a disguise of AA with an extra hypothesis, not SAS — it MISPLACES which test is being named ✗; “three pairs of sides…” is CONFUSING SAS WITH SSS, which needs no angle at all ✗.)',
    },
  ],
  // slot 2 — equal marked angles, sides around them: similar, with what factor?
  [
    {
      q: 'The two sheet-metal triangles shown have equal marked angles. The first has sides $5$ and $7$ around its marked angle; the second has sides $10$ and $14$ around its marked angle. What can you conclude?',
      fig: {
        view: [-1.5, -1.5, 18.5, 12.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [4.2, 5.6]], fill: false },
          { t: 'angle', at: [0, 0], from: [5, 0], to: [4.2, 5.6], r: 1, label: 'a' },
          { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [2.1, 2.8], text: '7', dx: -12, dy: 0 },
          { t: 'poly', pts: [[7, 0], [17, 0], [15.4, 11.2]], fill: false },
          { t: 'angle', at: [7, 0], from: [17, 0], to: [15.4, 11.2], r: 1, label: 'a' },
          { t: 'label', p: [12, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [11.2, 5.6], text: '14', dx: -14, dy: 0 },
        ],
      },
      choices: [
        'The triangles are not similar',
        'The triangles are similar, with scale factor $2$',
        'The triangles are similar, with scale factor $\\frac{10}{7}$',
        'Similarity cannot be decided without the third sides',
      ],
      answer: 1,
      solution:
        'Match short arm to short arm and long arm to long arm around the equal angles: $\\frac{10}{5} = 2$ and $\\frac{14}{7} = 2$. Same ratio, equal included angle — SAS Similarity with scale factor $2$ ✓. Check it a second way without dividing at all: double every arm of the first triangle and it reads $10$ and $14$ around the same hinge, exactly the second triangle’s data, so the second triangle IS the doubled copy ✓. The third sides are pinned down for free, since a hinge and two arms leave the far side no freedom. (The value $\\frac{10}{7}$ is MATCHING A SHORT ARM TO A LONG ARM, dividing $10$ by $7$ across the pairs ✗; “not similar” denies two clean equal ratios ✗; “cannot be decided” is DEMANDING THE THIRD SIDES, which SAS never needs ✗.)',
    },
    {
      q: 'Two paper cutouts are triangles with equal marked angles, as shown. The first has sides $6$ and $9$ around its marked angle; the second has sides $8$ and $12$ around its marked angle. What can you conclude?',
      fig: {
        view: [-1.5, -1.5, 17.5, 13],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [2.52, 8.64]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [2.52, 8.64], r: 1, label: 'b' },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [1.26, 4.32], text: '9', dx: -12, dy: 0 },
          { t: 'poly', pts: [[8, 0], [16, 0], [11.36, 11.52]], fill: false },
          { t: 'angle', at: [8, 0], from: [16, 0], to: [11.36, 11.52], r: 1, label: 'b' },
          { t: 'label', p: [12, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [9.68, 5.76], text: '12', dx: -14, dy: 0 },
        ],
      },
      choices: [
        'The triangles are not similar',
        'Similarity cannot be decided without the third sides',
        'The triangles are similar, with scale factor $\\frac{3}{4}$',
        'The triangles are similar, with scale factor $\\frac{4}{3}$',
      ],
      answer: 3,
      solution:
        'Compare arm to arm around the equal angles: $\\frac{8}{6} = \\frac{4}{3}$ and $\\frac{12}{9} = \\frac{4}{3}$. Equal included angles plus one common ratio is SAS Similarity, with scale factor $\\frac{4}{3}$ from the first cutout to the second ✓. Check it a second way by reducing each pair instead of dividing across: $6 : 8$ reduces to $3 : 4$, and $9 : 12$ reduces to $3 : 4$ as well — the same reduced ratio from arithmetic that never produced the fraction $\\frac{4}{3}$ directly ✓. (The value $\\frac{3}{4}$ is INVERTING THE SCALE FACTOR, the direction from the second cutout back to the first ✗; “not similar” overlooks that both ratios agree ✗; “cannot be decided” is DEMANDING THE THIRD SIDES, but the hinge and two arms already fix the shape ✗.)',
    },
    {
      q: 'Two quilting pieces are triangles with equal marked angles, as shown. The first has sides $4$ and $10$ around its marked angle; the second has sides $6$ and $15$ around its marked angle. What can you conclude?',
      fig: {
        view: [-1.5, -1.5, 17.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [6, 8]], fill: false },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [6, 8], r: 1, label: 'c' },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [3, 4], text: '10', dx: -14, dy: 0 },
          { t: 'poly', pts: [[7, 0], [13, 0], [16, 12]], fill: false },
          { t: 'angle', at: [7, 0], from: [13, 0], to: [16, 12], r: 1, label: 'c' },
          { t: 'label', p: [10, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [11.5, 6], text: '15', dx: -14, dy: 0 },
        ],
      },
      choices: [
        'The triangles are similar, with scale factor $\\frac{2}{3}$',
        'Similarity cannot be decided without the third sides',
        'The triangles are similar, with scale factor $\\frac{3}{2}$',
        'The triangles are not similar',
      ],
      answer: 2,
      solution:
        'Divide arm by matching arm around the equal angles: $\\frac{6}{4} = \\frac{3}{2}$ and $\\frac{15}{10} = \\frac{3}{2}$. Both ratios agree and the equal angle is the included one, so SAS Similarity gives similar pieces with scale factor $\\frac{3}{2}$ ✓. Check it a second way by scaling forward: multiply the first piece’s arms by $\\frac{3}{2}$ and you get $4 \\times \\frac{3}{2} = 6$ and $10 \\times \\frac{3}{2} = 15$ — landing exactly on the second piece’s measurements, hinge unchanged ✓. (The value $\\frac{2}{3}$ is INVERTING THE SCALE FACTOR, the shrink going the other way ✗; “not similar” contradicts two matching ratios ✗; “cannot be decided” is DEMANDING THE THIRD SIDES, which the hinge already determines ✗.)',
    },
  ],
  // slot 3 — D on ray AB, E on ray AC, beyond B and C: find DE.
  [
    {
      q: 'In the figure, $D$ is on ray $\\overrightarrow{AB}$ and $E$ is on ray $\\overrightarrow{AC}$, with $AB = 5$, $AC = 7$, $AD = 15$, $AE = 21$, and $BC = 4.5$. Find $DE$.',
      fig: {
        view: [-1.5, -1.5, 22.5, 11],
        elems: [
          { t: 'seg', a: [0, 0], b: [11.5179, 9.6093] },
          { t: 'seg', a: [0, 0], b: [21, 0] },
          { t: 'seg', a: [3.8393, 3.2031], b: [7, 0] },
          { t: 'seg', a: [11.5179, 9.6093], b: [21, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [3.8393, 3.2031], label: 'B', dx: -10, dy: -6 },
          { t: 'point', p: [7, 0], label: 'C', dx: 0, dy: 14 },
          { t: 'point', p: [11.5179, 9.6093], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [21, 0], label: 'E', dx: 12, dy: 6 },
          { t: 'label', p: [1.9196, 1.6015], text: '5', dx: -10, dy: -4 },
          { t: 'label', p: [7.6786, 6.4062], text: '10', dx: -12, dy: -4 },
          { t: 'label', p: [3.5, 0], text: '7', dx: 0, dy: 14 },
          { t: 'label', p: [14, 0], text: '14', dx: 0, dy: 14 },
          { t: 'label', p: [5.4196, 1.6015], text: '4.5', dx: 12, dy: 4 },
          { t: 'label', p: [16.2589, 4.8046], text: '?', dx: 10, dy: 0 },
        ],
      },
      choices: ['$13.5$', '$14.5$', '$1.5$', '$40.5$'],
      answer: 0,
      solution:
        'Triangles $ABC$ and $ADE$ share $\\angle A$, and the arms give $\\frac{AD}{AB} = \\frac{15}{5} = 3$ and $\\frac{AE}{AC} = \\frac{21}{7} = 3$ — two independent divisions landing on the same factor, so $\\triangle ABC \\sim \\triangle ADE$ by SAS with scale factor $3$, and $DE = 3 \\times 4.5 = 13.5$ ✓. Check it a second way by testing the printed candidates against the locked ratio $\\frac{DE}{BC} = 3$: $\\frac{14.5}{4.5}$ is not $3$ ✗, $\\frac{1.5}{4.5} = \\frac{1}{3}$ ✗, $\\frac{40.5}{4.5} = 9$ ✗, and $\\frac{13.5}{4.5} = 3$ ✓ — one survivor, the same one. (The value $14.5$ is ADDING THE EXTENSION INSTEAD OF MULTIPLYING, tacking the $10$ that $\\overline{AB}$ grew by onto $4.5$ ✗; $1.5$ is DIVIDING BY THE SCALE FACTOR ✗; $40.5$ is APPLYING THE FACTOR TWICE, $4.5 \\times 9$ ✗.)',
    },
    {
      q: 'In the figure, $D$ is on ray $\\overrightarrow{AB}$ beyond $B$, and $E$ is on ray $\\overrightarrow{AC}$ beyond $C$, with $AB = 4$, $AC = 6$, $AD = 10$, $AE = 15$, and $BC = 5$. Find $DE$.',
      fig: {
        view: [-1.5, -1.5, 11.5, 13.9],
        elems: [
          { t: 'seg', a: [0, 0], b: [10, 0] },
          { t: 'seg', a: [0, 0], b: [8.4375, 12.4019] },
          { t: 'seg', a: [4, 0], b: [3.375, 4.9608] },
          { t: 'seg', a: [10, 0], b: [8.4375, 12.4019] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'B', dx: 2, dy: 14 },
          { t: 'point', p: [3.375, 4.9608], label: 'C', dx: -12, dy: -4 },
          { t: 'point', p: [10, 0], label: 'D', dx: 12, dy: 8 },
          { t: 'point', p: [8.4375, 12.4019], label: 'E', dx: 0, dy: -12 },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [7, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [1.6875, 2.4804], text: '6', dx: -10, dy: -4 },
          { t: 'label', p: [5.90625, 8.6814], text: '9', dx: -12, dy: -4 },
          { t: 'label', p: [3.6875, 2.4804], text: '5', dx: 12, dy: 4 },
          { t: 'label', p: [9.21875, 6.2010], text: '?', dx: 12, dy: 0 },
        ],
      },
      choices: ['$11$', '$12.5$', '$2$', '$31.25$'],
      answer: 1,
      solution:
        'The shared angle at $A$ sits between both pairs of arms, and $\\frac{AD}{AB} = \\frac{10}{4} = \\frac{5}{2}$ while $\\frac{AE}{AC} = \\frac{15}{6} = \\frac{5}{2}$ — the same factor from two separate divisions, so $\\triangle ABC \\sim \\triangle ADE$ by SAS and $DE = \\frac{5}{2} \\times 5 = 12.5$ ✓. Check it a second way with a proportion that never computes the factor: $\\frac{DE}{BC} = \\frac{AD}{AB}$ means $\\frac{DE}{5} = \\frac{10}{4}$, and cross-multiplying gives $4 \\cdot DE = 50$, so $DE = 12.5$ ✓ — same number, different arithmetic. Sanity: $DE$ must beat $BC = 5$, and it does. (The value $11$ is ADDING THE EXTENSION INSTEAD OF MULTIPLYING, $5 + 6$ from the growth of $\\overline{AB}$ ✗; $2$ is DIVIDING BY THE SCALE FACTOR ✗; $31.25$ is APPLYING THE FACTOR TWICE, $5 \\times \\frac{25}{4}$ ✗.)',
    },
    {
      q: 'In the figure, $D$ is on ray $\\overrightarrow{AB}$ and $E$ is on ray $\\overrightarrow{AC}$, with $AB = 6$, $AC = 8$, $AD = 9$, $AE = 12$, and $BC = 7$. Find $DE$.',
      fig: {
        view: [-1.5, -1.5, 13.5, 9.5],
        elems: [
          { t: 'seg', a: [12, 0], b: [7.21875, 7.6249] },
          { t: 'seg', a: [12, 0], b: [0, 0] },
          { t: 'seg', a: [8.8125, 5.0833], b: [4, 0] },
          { t: 'seg', a: [7.21875, 7.6249], b: [0, 0] },
          { t: 'point', p: [12, 0], label: 'A', dx: 12, dy: 8 },
          { t: 'point', p: [8.8125, 5.0833], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [4, 0], label: 'C', dx: 0, dy: 14 },
          { t: 'point', p: [7.21875, 7.6249], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'label', p: [10.40625, 2.5417], text: '6', dx: 12, dy: 0 },
          { t: 'label', p: [8.015625, 6.3541], text: '3', dx: 12, dy: -4 },
          { t: 'label', p: [8, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [6.40625, 2.5417], text: '7', dx: -10, dy: 4 },
          { t: 'label', p: [3.609375, 3.8125], text: '?', dx: -10, dy: -4 },
        ],
      },
      choices: ['$10$', '$15.75$', '$\\frac{14}{3}$', '$10.5$'],
      answer: 3,
      solution:
        'Both triangles use the hinge at $A$: $\\frac{AD}{AB} = \\frac{9}{6} = \\frac{3}{2}$ and $\\frac{AE}{AC} = \\frac{12}{8} = \\frac{3}{2}$ — two independent quotients agreeing, so SAS Similarity applies with factor $\\frac{3}{2}$, and $DE = \\frac{3}{2} \\times 7 = 10.5$ ✓. Check it a second way by cross-multiplying the proportion $\\frac{DE}{7} = \\frac{12}{8}$ without ever reducing to $\\frac{3}{2}$: $8 \\cdot DE = 84$, so $DE = 10.5$ ✓. Guard: the big triangle’s sides $9$, $12$, $10.5$ are exactly $\\frac{3}{2}$ times $6$, $8$, $7$, and both triples satisfy the triangle inequality. (The value $10$ is ADDING THE EXTENSION INSTEAD OF MULTIPLYING, $7 + 3$ ✗; $\\frac{14}{3}$ is DIVIDING BY THE SCALE FACTOR ✗; $15.75$ is APPLYING THE FACTOR TWICE, $7 \\times \\frac{9}{4}$ ✗.)',
    },
  ],
  // slot 4 — equal marked angles: are the triangles similar? check the proportion.
  [
    {
      q: 'The two triangles shown have equal marked angles. The first has sides $4$ and $6$ around its marked angle; the second has sides $8$ and $10$ around its marked angle. Are the triangles similar?',
      fig: {
        view: [-1.5, -1.5, 15.5, 11],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [1.68, 5.76]], fill: false },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [1.68, 5.76], r: 1, label: 'a' },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [0.84, 2.88], text: '6', dx: -12, dy: 0 },
          { t: 'poly', pts: [[6, 0], [14, 0], [8.8, 9.6]], fill: false },
          { t: 'angle', at: [6, 0], from: [14, 0], to: [8.8, 9.6], r: 1, label: 'a' },
          { t: 'label', p: [10, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [7.4, 4.8], text: '10', dx: -14, dy: 0 },
        ],
      },
      choices: [
        'Yes, by SAS Similarity',
        'Yes, by AA Similarity',
        'No — $\\frac{8}{4} = 2$ but $\\frac{10}{6} = \\frac{5}{3} \\neq 2$, so the sides around the equal angles are not proportional',
        'Yes, but only if both triangles are acute',
      ],
      answer: 2,
      solution:
        'SAS needs BOTH arm ratios to agree. Here $\\frac{8}{4} = 2$ while $\\frac{10}{6} = \\frac{5}{3}$, and $2 \\neq \\frac{5}{3}$, so the test fails and no similarity follows ✓. Check it a second way by scaling forward: if the second triangle were the first scaled by $2$ (the factor the short arms suggest), its long arm would have to be $6 \\times 2 = 12$ — but it is $10$, two short ✗, so the second triangle is not a scaled copy. One equal angle with mismatched arms leaves the shapes genuinely different. (Choosing “Yes, by SAS” accepts MATCHING ratios that do not match ✗; “Yes, by AA” needs a second pair of equal angles, and only one is marked ✗; “only if acute” is REQUIRING ACUTENESS, which is never part of any similarity test ✗.)',
    },
    {
      q: 'The two triangles shown have equal marked angles. The first has sides $4$ and $6$ around its marked angle; the second has sides $10$ and $15$ around its marked angle. Are the triangles similar?',
      fig: {
        view: [-1.5, -1.5, 19.5, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [4.8, 3.6]], fill: false },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [4.8, 3.6], r: 1, label: 'b' },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [2.4, 1.8], text: '6', dx: -8, dy: -10 },
          { t: 'poly', pts: [[6, 0], [16, 0], [18, 9]], fill: false },
          { t: 'angle', at: [6, 0], from: [16, 0], to: [18, 9], r: 1, label: 'b' },
          { t: 'label', p: [11, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [12, 4.5], text: '15', dx: -8, dy: -10 },
        ],
      },
      choices: [
        'Yes — $\\frac{10}{4} = \\frac{15}{6} = \\frac{5}{2}$ and the equal angles are included, so SAS Similarity applies',
        'No — $10 \\neq 4$ and $15 \\neq 6$, so the triangles cannot match',
        'Similarity cannot be decided without the third sides',
        'Yes, but only if both triangles are acute',
      ],
      answer: 0,
      solution:
        'Divide matching arms: $\\frac{10}{4} = \\frac{5}{2}$ and $\\frac{15}{6} = \\frac{5}{2}$. Both ratios agree, and the equal marked angles sit between the compared sides — exactly SAS Similarity, with scale factor $\\frac{5}{2}$ ✓. Check it a second way by reducing each pair instead of dividing across: $4 : 10$ reduces to $2 : 5$, and $6 : 15$ reduces to $2 : 5$ as well — same reduced ratio, reached without the fraction $\\frac{5}{2}$ ever appearing ✓. (Saying “no, the sides are unequal” is CONFUSING SIMILARITY WITH CONGRUENCE — similarity asks for proportion, not equality ✗; “cannot be decided” is DEMANDING THE THIRD SIDES, but a hinge and two arms already lock the shape ✗; “only if acute” is REQUIRING ACUTENESS, an invented condition ✗.)',
    },
    {
      q: 'The two triangles shown have equal marked angles. The first has sides $5$ and $8$ around its marked angle; the second has sides $10$ and $14$ around its marked angle. Are the triangles similar?',
      fig: {
        view: [-1.5, -1.5, 18.5, 15],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [2.24, 7.68]], fill: false },
          { t: 'angle', at: [0, 0], from: [5, 0], to: [2.24, 7.68], r: 1, label: 'c' },
          { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [1.12, 3.84], text: '8', dx: -12, dy: 0 },
          { t: 'poly', pts: [[7, 0], [17, 0], [10.92, 13.44]], fill: false },
          { t: 'angle', at: [7, 0], from: [17, 0], to: [10.92, 13.44], r: 1, label: 'c' },
          { t: 'label', p: [12, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [8.96, 6.72], text: '14', dx: -14, dy: 0 },
        ],
      },
      choices: [
        'Yes, by SAS Similarity',
        'Yes, by AA Similarity',
        'Yes, but only if both triangles are right triangles',
        'No — $\\frac{10}{5} = 2$ but $\\frac{14}{8} = \\frac{7}{4} \\neq 2$, so the arms around the equal angles disagree',
      ],
      answer: 3,
      solution:
        'Run both divisions: $\\frac{10}{5} = 2$, but $\\frac{14}{8} = \\frac{7}{4}$. The two ratios disagree, so SAS yields nothing and the triangles are not shown to be similar ✓. Check it a second way by scaling: doubling the first triangle’s arms (the factor its short arm suggests) would demand a long arm of $8 \\times 2 = 16$, and the second triangle offers only $14$ ✗ — the enlargement falls short on one arm, so it is no enlargement at all. An equal hinge cannot rescue mismatched arms. (Choosing “Yes, by SAS” overlooks that only ONE ratio checks out ✗; “Yes, by AA” would need a second pair of equal angles, and none is given ✗; “only if right triangles” is REQUIRING A RIGHT ANGLE, which no similarity test asks for ✗.)',
    },
  ],
  // slot 5 — right angles as the included angle: find the big hypotenuse.
  [
    {
      q: 'In the figure, $\\angle B$ and $\\angle E$ are both right angles, $AB = 5$, $BC = 12$, $DE = 15$, and $EF = 36$. Find $DF$.',
      fig: {
        view: [-1.5, -1.5, 37.5, 23.5],
        elems: [
          { t: 'poly', pts: [[0, 17], [12, 17], [0, 22]], fill: false },
          { t: 'right', at: [0, 17], from: [12, 17], to: [0, 22] },
          { t: 'point', p: [0, 22], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [0, 17], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [12, 17], label: 'C', dx: 12, dy: 6 },
          { t: 'label', p: [0, 19.5], text: '5', dx: -10, dy: 0 },
          { t: 'label', p: [6, 17], text: '12', dx: 0, dy: 14 },
          { t: 'poly', pts: [[0, 0], [36, 0], [0, 15]], fill: false },
          { t: 'right', at: [0, 0], from: [36, 0], to: [0, 15] },
          { t: 'point', p: [0, 15], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [36, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'label', p: [0, 7.5], text: '15', dx: -12, dy: 0 },
          { t: 'label', p: [18, 0], text: '36', dx: 0, dy: 14 },
          { t: 'label', p: [18, 7.5], text: '?', dx: 10, dy: -8 },
        ],
      },
      choices: ['$13$', '$51$', '$\\frac{13}{3}$', '$39$'],
      answer: 3,
      solution:
        'The right angles are equal and included between the given legs, and $\\frac{15}{5} = 3 = \\frac{36}{12}$ — so $\\triangle ABC \\sim \\triangle DEF$ by SAS with factor $3$. The small triangle is the $5$–$12$–$13$ right triangle, so $DF = 3 \\times 13 = 39$ ✓. Check it a second way with the Pythagorean Theorem straight on the big legs, never using the factor: $15^2 + 36^2 = 225 + 1296 = 1521$, and $\\sqrt{1521} = 39$ ✓ — two routes, one answer. (The value $13$ is FORGETTING TO SCALE, reporting the small hypotenuse ✗; $51$ is ADDING THE LEGS, $15 + 36$, which no hypotenuse ever equals ✗; $\\frac{13}{3}$ is DIVIDING BY THE SCALE FACTOR instead of multiplying ✗.)',
    },
    {
      q: 'In the figure, $\\angle B$ and $\\angle E$ are both right angles, $AB = 5$, $BC = 12$, $DE = 10$, and $EF = 24$. Find $DF$.',
      fig: {
        view: [-1.5, -1.5, 39.5, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 5]], fill: false },
          { t: 'right', at: [12, 0], from: [0, 0], to: [12, 5] },
          { t: 'point', p: [12, 5], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 0], label: 'C', dx: -10, dy: 10 },
          { t: 'label', p: [12, 2.5], text: '5', dx: 12, dy: 0 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'poly', pts: [[14, 0], [38, 0], [38, 10]], fill: false },
          { t: 'right', at: [38, 0], from: [14, 0], to: [38, 10] },
          { t: 'point', p: [38, 10], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [38, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [14, 0], label: 'F', dx: -10, dy: 10 },
          { t: 'label', p: [38, 5], text: '10', dx: 14, dy: 0 },
          { t: 'label', p: [26, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [26, 5], text: '?', dx: -10, dy: -8 },
        ],
      },
      choices: ['$26$', '$13$', '$34$', '$6.5$'],
      answer: 0,
      solution:
        'Equal right angles between proportional legs: $\\frac{10}{5} = 2 = \\frac{24}{12}$, so $\\triangle ABC \\sim \\triangle DEF$ by SAS with factor $2$. The small triangle is the classic $5$–$12$–$13$, so $DF = 2 \\times 13 = 26$ ✓. Check it a second way with the Pythagorean Theorem on the big legs alone: $10^2 + 24^2 = 100 + 576 = 676 = 26^2$ ✓ — the scaled answer and the direct computation agree. (The value $13$ is FORGETTING TO SCALE, the small hypotenuse left unmultiplied ✗; $34$ is ADDING THE LEGS, $10 + 24$ ✗; $6.5$ is DIVIDING BY THE SCALE FACTOR, shrinking when the triangle grew ✗.)',
    },
    {
      q: 'In the figure, $\\angle B$ and $\\angle E$ are both right angles, $AB = 8$, $BC = 15$, $DE = 12$, and $EF = 22.5$. Find $DF$.',
      fig: {
        view: [-1.5, -1.5, 41, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [0, 8]], fill: false },
          { t: 'right', at: [0, 0], from: [15, 0], to: [0, 8] },
          { t: 'point', p: [0, 8], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [15, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'label', p: [0, 4], text: '8', dx: -10, dy: 0 },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'poly', pts: [[17, 0], [39.5, 0], [17, 12]], fill: false },
          { t: 'right', at: [17, 0], from: [39.5, 0], to: [17, 12] },
          { t: 'point', p: [17, 12], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [17, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [39.5, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'label', p: [17, 6], text: '12', dx: -12, dy: 0 },
          { t: 'label', p: [28.25, 0], text: '22.5', dx: 0, dy: 14 },
          { t: 'label', p: [28.25, 6], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$34.5$', '$17$', '$25.5$', '$\\frac{34}{3}$'],
      answer: 2,
      solution:
        'The right angles are the included angles, and the legs are proportional: $\\frac{12}{8} = \\frac{3}{2}$ and $\\frac{22.5}{15} = \\frac{3}{2}$ — SAS Similarity with factor $\\frac{3}{2}$. The small triangle is the $8$–$15$–$17$ right triangle, so $DF = \\frac{3}{2} \\times 17 = 25.5$ ✓. Check it a second way with the Pythagorean Theorem on the big legs, factor-free: $12^2 + 22.5^2 = 144 + 506.25 = 650.25$, and $25.5^2 = 650.25$ ✓ — both routes meet at $25.5$. (The value $17$ is FORGETTING TO SCALE, the small hypotenuse ✗; $34.5$ is ADDING THE LEGS, $12 + 22.5$ ✗; $\\frac{34}{3}$ is DIVIDING BY THE SCALE FACTOR, $17 \\div \\frac{3}{2}$ ✗.)',
    },
  ],
  // slot 6 — D on segment AB, E on segment AC: the ratio DE : BC.
  [
    {
      q: 'In the figure, $D$ is on $\\overline{AB}$ and $E$ is on $\\overline{AC}$, with $AD = 4$, $AB = 10$, $AE = 6$, and $AC = 15$. What is $\\frac{DE}{BC}$?',
      fig: {
        view: [-1.5, -1.5, 16.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [6, 8]], fill: false },
          { t: 'seg', a: [2.4, 3.2], b: [6, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 8], label: 'B', dx: 0, dy: -12 },
          { t: 'point', p: [15, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [2.4, 3.2], label: 'D', dx: -12, dy: 0 },
          { t: 'point', p: [6, 0], label: 'E', dx: 2, dy: 14 },
          { t: 'label', p: [1.2, 1.6], text: '4', dx: -10, dy: -4 },
          { t: 'label', p: [4.2, 5.6], text: '6', dx: -10, dy: -4 },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [10.5, 0], text: '9', dx: 0, dy: 14 },
        ],
      },
      choices: ['$\\frac{5}{2}$', 'It cannot be determined without knowing $BC$', '$\\frac{2}{5}$', '$\\frac{2}{3}$'],
      answer: 2,
      solution:
        '$\\triangle ADE$ and $\\triangle ABC$ share $\\angle A$, and the whole-side ratios agree: $\\frac{AD}{AB} = \\frac{4}{10} = \\frac{2}{5}$ and $\\frac{AE}{AC} = \\frac{6}{15} = \\frac{2}{5}$. SAS Similarity then makes EVERY pair of corresponding sides carry this same ratio, so $\\frac{DE}{BC} = \\frac{2}{5}$ ✓ — no measurement of $\\overline{BC}$ required. Check it a second way through the second arm alone: $6 : 15$ reduces by dividing out $3$ to $2 : 5$, arithmetic that never touches the pair $4$ and $10$, and it lands on the same reduced ratio ✓. (The value $\\frac{5}{2}$ is INVERTING THE SCALE FACTOR — $\\overline{DE}$ belongs to the SMALLER triangle ✗; “cannot be determined” forgets that similarity transfers the ratio to the third pair for free ✗; $\\frac{2}{3}$ is COMPARING TO THE LEFTOVER PIECE, $\\frac{AD}{DB} = \\frac{4}{6}$, when similarity uses the whole side $AB$ ✗.)',
    },
    {
      q: 'In the figure, $D$ is on $\\overline{AB}$ and $E$ is on $\\overline{AC}$, with $AD = 6$, $AB = 9$, $AE = 8$, and $AC = 12$. What is $\\frac{DE}{BC}$?',
      fig: {
        view: [-1.5, -1.5, 13.5, 7],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [7.2, 5.4]], fill: false },
          { t: 'seg', a: [4.8, 3.6], b: [8, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [7.2, 5.4], label: 'B', dx: 0, dy: -12 },
          { t: 'point', p: [12, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [4.8, 3.6], label: 'D', dx: -12, dy: -4 },
          { t: 'point', p: [8, 0], label: 'E', dx: 2, dy: 14 },
          { t: 'label', p: [2.4, 1.8], text: '6', dx: -8, dy: -10 },
          { t: 'label', p: [6, 4.5], text: '3', dx: -8, dy: -10 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [10, 0], text: '4', dx: 0, dy: 14 },
        ],
      },
      choices: ['$\\frac{3}{2}$', '$\\frac{2}{3}$', '$2$', 'It cannot be determined without knowing $BC$'],
      answer: 1,
      solution:
        'Compare whole sides from the shared vertex: $\\frac{AD}{AB} = \\frac{6}{9} = \\frac{2}{3}$ and $\\frac{AE}{AC} = \\frac{8}{12} = \\frac{2}{3}$. With the shared $\\angle A$ included between the arms, SAS Similarity gives $\\triangle ADE \\sim \\triangle ABC$, and the third pair of sides inherits the common ratio: $\\frac{DE}{BC} = \\frac{2}{3}$ ✓. Check it a second way by reducing each pair separately: $6 : 9$ divides down by $3$ to $2 : 3$, and $8 : 12$ divides down by $4$ to $2 : 3$ — two unrelated reductions, one ratio ✓. (The value $\\frac{3}{2}$ is INVERTING THE SCALE FACTOR, reading the ratio from big to small ✗; $2$ is COMPARING TO THE LEFTOVER PIECE, $\\frac{AD}{DB} = \\frac{6}{3}$, instead of using the whole side ✗; “cannot be determined” misses that similarity fixes the ratio of ALL corresponding sides at once ✗.)',
    },
    {
      q: 'In the figure, $D$ is on $\\overline{AB}$ and $E$ is on $\\overline{AC}$, with $AD = 5$, $AB = 8$, $AE = 7.5$, and $AC = 12$. What is $\\frac{DE}{BC}$?',
      fig: {
        view: [-1.5, -1.5, 13.5, 9.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [2.24, 7.68]], fill: false },
          { t: 'seg', a: [1.4, 4.8], b: [7.5, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [2.24, 7.68], label: 'B', dx: 0, dy: -12 },
          { t: 'point', p: [12, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [1.4, 4.8], label: 'D', dx: -12, dy: 0 },
          { t: 'point', p: [7.5, 0], label: 'E', dx: 2, dy: 14 },
          { t: 'label', p: [0.7, 2.4], text: '5', dx: -10, dy: 0 },
          { t: 'label', p: [1.82, 6.24], text: '3', dx: -10, dy: 0 },
          { t: 'label', p: [3.75, 0], text: '7.5', dx: 0, dy: 14 },
          { t: 'label', p: [9.75, 0], text: '4.5', dx: 0, dy: 14 },
        ],
      },
      choices: ['$\\frac{8}{5}$', 'It cannot be determined without knowing $BC$', '$\\frac{5}{3}$', '$\\frac{5}{8}$'],
      answer: 3,
      solution:
        'The triangles share $\\angle A$, and the whole-side ratios are $\\frac{AD}{AB} = \\frac{5}{8}$ and $\\frac{AE}{AC} = \\frac{7.5}{12} = \\frac{5}{8}$ (multiply top and bottom by $2$: $\\frac{15}{24} = \\frac{5}{8}$). SAS Similarity hands the same ratio to the third pair: $\\frac{DE}{BC} = \\frac{5}{8}$ ✓. Check it a second way by clearing the decimal first: $7.5 : 12$ doubles to $15 : 24$, and dividing out $3$ gives $5 : 8$ — arithmetic independent of the pair $5$ and $8$, agreeing with it ✓. (The value $\\frac{8}{5}$ is INVERTING THE SCALE FACTOR, big over small ✗; “cannot be determined” overlooks that similarity sets every corresponding ratio at once ✗; $\\frac{5}{3}$ is COMPARING TO THE LEFTOVER PIECE, $\\frac{AD}{DB} = \\frac{5}{3}$, rather than the full side $AB = 8$ ✗.)',
    },
  ],
  // slot 7 — SAS with ratio exactly 1: congruent, and similar with factor 1.
  [
    {
      q: '$\\triangle ABC$ has $AB = 6$, $\\angle A = 35^\\circ$, and $AC = 9$. $\\triangle DEF$ has $DE = 6$, $\\angle D = 35^\\circ$, and $DF = 9$. What is the best description of how the triangles are related?',
      choices: [
        'congruent — and therefore also similar, with scale factor exactly $1$',
        'similar but not congruent',
        'neither similar nor congruent',
        'it cannot be determined without the third sides',
      ],
      answer: 0,
      solution:
        'The arms around the equal $35^\\circ$ angles are in ratio $\\frac{6}{6} = \\frac{9}{9} = 1$. A ratio of $1$ means SAS Congruence: the triangles are identical copies — and every congruent pair is automatically similar, with scale factor exactly $1$ ✓. Check it a second way by construction: draw a $35^\\circ$ hinge, mark $6$ along one arm and $9$ along the other, and connect the marks. Both triangles are built by this exact recipe, and the recipe has no freedom left, so it can only produce one triangle ✓ — the third sides match without being measured. (“Similar but not congruent” forgets that a ratio of $1$ IS congruence ✗; “neither” is DENYING THE OVERLAP OF CONGRUENT AND SIMILAR ✗; “cannot be determined” is DEMANDING THE THIRD SIDES, which the hinge recipe already fixes ✗.)',
    },
    {
      q: '$\\triangle JKL$ has $JK = 4$, $\\angle J = 52^\\circ$, and $JL = 11$. $\\triangle PQR$ has $PQ = 4$, $\\angle P = 52^\\circ$, and $PR = 11$. How are the triangles related?',
      choices: [
        'similar, with scale factor $\\frac{11}{4}$',
        'similar but not congruent',
        'it is impossible to determine',
        'congruent — and also similar, with scale factor exactly $1$',
      ],
      answer: 3,
      solution:
        'Check the sides around the equal $52^\\circ$ angles: $\\frac{PQ}{JK} = \\frac{4}{4} = 1$ and $\\frac{PR}{JL} = \\frac{11}{11} = 1$. Equal included angles with ratio $1$ is SAS Congruence, and congruent triangles are always similar too, with scale factor exactly $1$ ✓. Check it a second way through the similarity lens alone: SAS Similarity certainly applies (the ratios agree), so the triangles are similar with factor $\\frac{4}{4} = 1$, and a similarity that changes no lengths is precisely a congruence ✓ — both readings of the same data meet in the middle. (The value $\\frac{11}{4}$ is DIVIDING THE TWO GIVEN SIDES of one triangle by each other, which compares a triangle with itself ✗; “similar but not congruent” misses that factor $1$ means congruent ✗; “impossible to determine” is DEMANDING THE THIRD SIDES, but side–included angle–side pins a triangle down completely ✗.)',
    },
    {
      q: '$\\triangle XYZ$ has $XY = 7.5$, $\\angle X = 63^\\circ$, and $XZ = 10$. $\\triangle MNP$ has $MN = 7.5$, $\\angle M = 63^\\circ$, and $MP = 10$. What is the best description of how the triangles are related?',
      choices: [
        'similar but not congruent',
        'neither similar nor congruent',
        'congruent — and therefore similar, with scale factor exactly $1$',
        'similar, with scale factor $\\frac{4}{3}$',
      ],
      answer: 2,
      solution:
        'The arms around the equal $63^\\circ$ angles compare as $\\frac{7.5}{7.5} = 1$ and $\\frac{10}{10} = 1$: SAS with ratio $1$, which is congruence — and congruence is similarity’s special case, scale factor exactly $1$ ✓. Check it a second way by superposition: slide $\\triangle MNP$ so that $M$ lands on $X$ and ray $\\overrightarrow{MN}$ lies along ray $\\overrightarrow{XY}$. The equal angles make ray $\\overrightarrow{MP}$ lie along ray $\\overrightarrow{XZ}$, and the equal arm lengths drop $N$ on $Y$ and $P$ on $Z$ — every vertex covered, so the triangles coincide ✓. (“Similar but not congruent” forgets that factor $1$ upgrades similarity to congruence ✗; “neither” is DENYING THE OVERLAP OF CONGRUENT AND SIMILAR — congruent pairs are always similar ✗; $\\frac{4}{3}$ is DIVIDING THE TWO GIVEN SIDES, $10 \\div 7.5$, a comparison inside one triangle rather than between the two ✗.)',
    },
  ],
  // slot 8 — scale factor from two labelled side pairs around equal marked angles.
  [
    {
      q: 'In the figure, the marked angles at $A$ and $D$ are equal, $AB = 6$, $AC = 9$, $DE = 8$, and $DF = 12$. What is the scale factor from $\\triangle ABC$ to $\\triangle DEF$?',
      fig: {
        view: [-1.5, -1.5, 17.5, 11],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [5.4, 7.2]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [5.4, 7.2], r: 1.2, label: 'a' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [5.4, 7.2], label: 'C', dx: 0, dy: -12 },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [2.7, 3.6], text: '9', dx: -12, dy: 0 },
          { t: 'poly', pts: [[8, 0], [16, 0], [15.2, 9.6]], fill: false },
          { t: 'angle', at: [8, 0], from: [16, 0], to: [15.2, 9.6], r: 1.2, label: 'a' },
          { t: 'point', p: [8, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [15.2, 9.6], label: 'F', dx: 0, dy: -12 },
          { t: 'label', p: [12, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [11.6, 4.8], text: '12', dx: -14, dy: 0 },
        ],
      },
      choices: ['$\\frac{3}{4}$', '$\\frac{4}{3}$', '$2$', '$\\frac{9}{8}$'],
      answer: 1,
      solution:
        'Check both arms around the equal angles: $\\frac{DE}{AB} = \\frac{8}{6} = \\frac{4}{3}$ and $\\frac{DF}{AC} = \\frac{12}{9} = \\frac{4}{3}$. The ratios agree, so SAS Similarity holds and the scale factor from $\\triangle ABC$ to $\\triangle DEF$ is $\\frac{4}{3}$ ✓. Check it a second way by scaling forward: multiplying the first triangle’s arms by $\\frac{4}{3}$ gives $6 \\times \\frac{4}{3} = 8$ and $9 \\times \\frac{4}{3} = 12$, exactly the second triangle’s labels ✓ — the factor reproduces the data it came from, from either arm independently. (The value $\\frac{3}{4}$ is INVERTING THE SCALE FACTOR, the direction from $\\triangle DEF$ back to $\\triangle ABC$ ✗; $2$ is SUBTRACTING THE SIDES INSTEAD OF DIVIDING, $8 - 6$ ✗; $\\frac{9}{8}$ is PAIRING THE ARMS CROSSWISE, dividing $\\overline{AC}$ by $\\overline{DE}$ ✗.)',
    },
    {
      q: 'In the figure, the marked angles at $A$ and $D$ are equal, $AB = 10$, $AC = 14$, $DE = 15$, and $DF = 21$. What is the scale factor from $\\triangle ABC$ to $\\triangle DEF$?',
      fig: {
        view: [-1.5, -1.5, 31.5, 14],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [11.2, 8.4]], fill: false },
          { t: 'angle', at: [0, 0], from: [10, 0], to: [11.2, 8.4], r: 1.4, label: 'b' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [11.2, 8.4], label: 'C', dx: 0, dy: -12 },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [5.6, 4.2], text: '14', dx: -10, dy: -10 },
          { t: 'poly', pts: [[13, 0], [28, 0], [29.8, 12.6]], fill: false },
          { t: 'angle', at: [13, 0], from: [28, 0], to: [29.8, 12.6], r: 1.4, label: 'b' },
          { t: 'point', p: [13, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [28, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [29.8, 12.6], label: 'F', dx: 0, dy: -12 },
          { t: 'label', p: [20.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [21.4, 6.3], text: '21', dx: -10, dy: -10 },
        ],
      },
      choices: ['$\\frac{3}{2}$', '$\\frac{2}{3}$', '$5$', '$\\frac{15}{14}$'],
      answer: 0,
      solution:
        'Divide arm by corresponding arm: $\\frac{DE}{AB} = \\frac{15}{10} = \\frac{3}{2}$ and $\\frac{DF}{AC} = \\frac{21}{14} = \\frac{3}{2}$ — two separate quotients, one factor, so SAS Similarity gives scale factor $\\frac{3}{2}$ from $\\triangle ABC$ to $\\triangle DEF$ ✓. Check it a second way by reducing each pair to lowest terms instead of dividing across: $10 : 15$ reduces to $2 : 3$, and $14 : 21$ reduces to $2 : 3$ — same reduced ratio via different common divisors ($5$ and $7$) ✓. (The value $\\frac{2}{3}$ is INVERTING THE SCALE FACTOR ✗; $5$ is SUBTRACTING THE SIDES INSTEAD OF DIVIDING, $15 - 10$ ✗; $\\frac{15}{14}$ is PAIRING THE ARMS CROSSWISE, matching $\\overline{DE}$ against $\\overline{AC}$ ✗.)',
    },
    {
      q: 'In the figure, the marked angles at $A$ and $D$ are equal, $AB = 8$, $AC = 20$, $DE = 6$, and $DF = 15$. What is the scale factor from $\\triangle ABC$ to $\\triangle DEF$?',
      fig: {
        view: [-1.5, -1.5, 24.5, 17.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [12, 16]], fill: false },
          { t: 'angle', at: [0, 0], from: [8, 0], to: [12, 16], r: 1.4, label: 'c' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [8, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [12, 16], label: 'C', dx: 0, dy: -12 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [6, 8], text: '20', dx: -14, dy: 0 },
          { t: 'poly', pts: [[14, 0], [20, 0], [23, 12]], fill: false },
          { t: 'angle', at: [14, 0], from: [20, 0], to: [23, 12], r: 1.4, label: 'c' },
          { t: 'point', p: [14, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [20, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [23, 12], label: 'F', dx: 0, dy: -12 },
          { t: 'label', p: [17, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [18.5, 6], text: '15', dx: -14, dy: 0 },
        ],
      },
      choices: ['$\\frac{4}{3}$', '$2$', '$\\frac{3}{10}$', '$\\frac{3}{4}$'],
      answer: 3,
      solution:
        'This time the second triangle is the smaller one. Compare corresponding arms: $\\frac{DE}{AB} = \\frac{6}{8} = \\frac{3}{4}$ and $\\frac{DF}{AC} = \\frac{15}{20} = \\frac{3}{4}$. Both quotients agree, so SAS Similarity gives scale factor $\\frac{3}{4}$ from $\\triangle ABC$ to $\\triangle DEF$ — a factor below $1$, as a shrink should be ✓. Check it a second way by scaling forward: $8 \\times \\frac{3}{4} = 6$ and $20 \\times \\frac{3}{4} = 15$, landing exactly on the second triangle’s labels ✓. (The value $\\frac{4}{3}$ is INVERTING THE SCALE FACTOR, the direction from small back to large ✗; $2$ is SUBTRACTING THE SIDES INSTEAD OF DIVIDING, $8 - 6$ ✗; $\\frac{3}{10}$ is PAIRING THE ARMS CROSSWISE, $6$ against $20$ ✗.)',
    },
  ],
  // slot 9 — the equal angle is not included: no conclusion.
  [
    {
      q: 'In $\\triangle GHK$ and $\\triangle PQR$, you know $\\frac{GH}{PQ} = \\frac{HK}{QR} = \\frac{5}{3}$ and $\\angle K = \\angle R$. Can you conclude the triangles are similar by SAS?',
      choices: [
        'Yes — two proportional sides and an equal angle are exactly what SAS asks for',
        'Yes — by AA, since $\\angle K = \\angle R$',
        'No — $\\overline{GH}$ and $\\overline{HK}$ meet at $H$, so the included angle is $\\angle H$, and nothing is known about it',
        'Yes, provided both triangles are acute',
      ],
      answer: 2,
      solution:
        'Locate the hinge: the proportional sides $\\overline{GH}$ and $\\overline{HK}$ share the vertex $H$, so the angle included between them is $\\angle H$ — and the given equality is about $\\angle K$, a vertex the two sides merely touch at one end. With the equal angle out of position, the data is the similarity version of SSA, and SSA can be satisfied by two different shapes at once, so no conclusion follows ✓. Check it a second way by the swing test: fix the two arms in ratio $\\frac{5}{3}$ at $H$ and $Q$, then let the far side swing to make $\\angle K = \\angle R$ — the swinging side can often close the triangle in two distinct positions, one acute and one obtuse, and only one of them is similar to the other triangle ✓. To use SAS here you would need $\\angle H = \\angle Q$. (The first choice is ACCEPTING A NON-INCLUDED ANGLE ✗; “by AA” needs TWO pairs of equal angles, and only one is given ✗; “provided both are acute” is REQUIRING ACUTENESS, which repairs nothing — the angle is still in the wrong seat ✗.)',
    },
    {
      q: 'You are told that $\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{7}{4}$ and $\\angle C = \\angle F$ in triangles $ABC$ and $DEF$. Does SAS Similarity apply?',
      choices: [
        'No — the included angle for $\\overline{AB}$ and $\\overline{BC}$ is $\\angle B$, and $\\angle C$ sits in the wrong position, so no conclusion follows',
        'Yes — SAS needs two ratios and one equal angle, and both are given',
        'Yes — by AA, since $\\angle C = \\angle F$',
        'Yes, but only if $\\angle C$ and $\\angle F$ are both obtuse',
      ],
      answer: 0,
      solution:
        'Find where the compared sides meet: $\\overline{AB}$ and $\\overline{BC}$ share vertex $B$, so SAS would need $\\angle B = \\angle E$. The given fact $\\angle C = \\angle F$ concerns an angle that only touches ONE of the proportional sides, so the S-A-S pattern is broken and the test says nothing ✓. Check it a second way by recalling why the included position matters: side, included angle, side is a complete construction recipe — arms and hinge determine the triangle. Side, side, non-included angle is not a recipe: drawing $\\overline{BC}$, then $\\angle C$, then trying to fit $\\overline{AB}$ of the right length, the fitting arc can cross the free ray twice, giving two shapes that both satisfy the data ✓ — a guarantee cannot rest on ambiguous instructions. (Choice two is ACCEPTING A NON-INCLUDED ANGLE, the SSA trap ✗; “by AA” has only one pair of equal angles, not two ✗; the obtuse condition is an invented repair — the angle is still not included ✗.)',
    },
    {
      q: 'Two triangular garden plots satisfy $\\frac{ST}{XY} = \\frac{TU}{YZ} = \\frac{4}{3}$, and a surveyor also measures $\\angle S = \\angle X$. She claims the plots are similar by SAS. Is the claim justified?',
      choices: [
        'Yes — two matching ratios plus any equal angle settle it',
        'No — the equal angle would have to be $\\angle T = \\angle Y$, the angle between the two measured sides; an equal angle elsewhere proves nothing',
        'Yes — by SSS Similarity',
        'No — similar plots would need the ratio to be exactly $1$',
      ],
      answer: 1,
      solution:
        'The measured sides $\\overline{ST}$ and $\\overline{TU}$ meet at $T$, and $\\overline{XY}$ and $\\overline{YZ}$ meet at $Y$, so the included angles are $\\angle T$ and $\\angle Y$ — the surveyor measured $\\angle S$ and $\\angle X$ instead, angles at the END of one arm. SAS demands the hinge itself, so the claim is not justified ✓. Check it a second way with the swing picture: hold the two arms at $T$ in ratio $\\frac{4}{3}$ to the arms at $Y$, but leave the hinge free; as the hinge opens, $\\angle S$ changes continuously, so SOME opening matches the measured $\\angle S = \\angle X$ without the hinges agreeing — data satisfied, plots not similar ✓. (The first choice is ACCEPTING A NON-INCLUDED ANGLE ✗; “by SSS” is CONFUSING SAS WITH SSS — the third pair of sides was never measured ✗; “ratio exactly $1$” is CONFUSING SIMILARITY WITH CONGRUENCE, and similarity welcomes any ratio ✗.)',
    },
  ],
  // slot 10 — nested SAS with a shared vertex: perimeter of the enlarged triangle.
  [
    {
      q: 'In the figure, $D$ is on ray $\\overrightarrow{AB}$ and $E$ is on ray $\\overrightarrow{AC}$, with $AB = 12$, $AD = 18$, $AC = 10$, $AE = 15$, and $BC = 11$. What is the perimeter of $\\triangle ADE$?',
      fig: {
        view: [-1.5, -1.5, 16.5, 17],
        elems: [
          { t: 'seg', a: [0, 0], b: [9.225, 15.4564] },
          { t: 'seg', a: [0, 0], b: [15, 0] },
          { t: 'seg', a: [6.15, 10.3042], b: [10, 0] },
          { t: 'seg', a: [9.225, 15.4564], b: [15, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6.15, 10.3042], label: 'B', dx: -12, dy: -4 },
          { t: 'point', p: [10, 0], label: 'C', dx: 0, dy: 14 },
          { t: 'point', p: [9.225, 15.4564], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [15, 0], label: 'E', dx: 12, dy: 6 },
          { t: 'label', p: [3.075, 5.1521], text: '12', dx: -12, dy: -4 },
          { t: 'label', p: [7.6875, 12.8803], text: '6', dx: -12, dy: -4 },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [12.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [8.075, 5.1521], text: '11', dx: 12, dy: 0 },
        ],
      },
      choices: ['$49.5$', '$33$', '$74.25$', '$44$'],
      answer: 0,
      solution:
        'Shared $\\angle A$ with $\\frac{AD}{AB} = \\frac{18}{12} = \\frac{3}{2}$ and $\\frac{AE}{AC} = \\frac{15}{10} = \\frac{3}{2}$ gives $\\triangle ABC \\sim \\triangle ADE$ by SAS with factor $\\frac{3}{2}$. The small perimeter is $12 + 10 + 11 = 33$, and perimeter scales by the factor itself: $33 \\times \\frac{3}{2} = 49.5$ ✓. Check it a second way by summing the big sides one at a time: $AD = 18$, $AE = 15$, and $DE = \\frac{3}{2} \\times 11 = 16.5$, so the perimeter is $18 + 15 + 16.5 = 49.5$ ✓ — the shortcut and the side-by-side sum agree. (The value $33$ is ANSWERING THE SMALL PERIMETER, forgetting to scale ✗; $74.25$ is APPLYING THE FACTOR TWICE, $33 \\times \\frac{9}{4}$, which is how AREA scales, not perimeter ✗; $44$ is ADDING ONLY THE VISIBLE GROWTH, $33 + 6 + 5$, while forgetting the third side grows too ✗.)',
    },
    {
      q: 'In the figure, $D$ is on ray $\\overrightarrow{AB}$ beyond $B$, and $E$ is on ray $\\overrightarrow{AC}$ beyond $C$, with $AB = 10$, $AD = 25$, $AC = 8$, $AE = 20$, and $BC = 6$. What is the perimeter of $\\triangle ADE$?',
      fig: {
        view: [-1.5, -1.5, 21.5, 16.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [20, 15] },
          { t: 'seg', a: [0, 0], b: [20, 0] },
          { t: 'seg', a: [8, 6], b: [8, 0] },
          { t: 'seg', a: [20, 15], b: [20, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [8, 6], label: 'B', dx: -8, dy: -8 },
          { t: 'point', p: [8, 0], label: 'C', dx: -4, dy: 14 },
          { t: 'point', p: [20, 15], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [20, 0], label: 'E', dx: 12, dy: 8 },
          { t: 'label', p: [4, 3], text: '10', dx: -10, dy: -6 },
          { t: 'label', p: [14, 10.5], text: '15', dx: -10, dy: -6 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [14, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [8, 3], text: '6', dx: 12, dy: 0 },
        ],
      },
      choices: ['$24$', '$60$', '$150$', '$51$'],
      answer: 1,
      solution:
        'The triangles share the hinge at $A$, and $\\frac{AD}{AB} = \\frac{25}{10} = \\frac{5}{2}$ while $\\frac{AE}{AC} = \\frac{20}{8} = \\frac{5}{2}$ — SAS Similarity with factor $\\frac{5}{2}$. The small perimeter is $10 + 8 + 6 = 24$, and scaling every side by $\\frac{5}{2}$ scales the sum too: $24 \\times \\frac{5}{2} = 60$ ✓. Check it a second way side by side: $AD = 25$, $AE = 20$, and $DE = \\frac{5}{2} \\times 6 = 15$, so the perimeter is $25 + 20 + 15 = 60$ ✓ — assembled without ever scaling the total. (The value $24$ is ANSWERING THE SMALL PERIMETER ✗; $150$ is APPLYING THE FACTOR TWICE, $24 \\times \\frac{25}{4}$, the area behavior ✗; $51$ is ADDING ONLY THE VISIBLE GROWTH, $24 + 15 + 12$, missing that $\\overline{DE}$ outgrows $\\overline{BC}$ as well ✗.)',
    },
    {
      q: 'In the figure, $D$ is on ray $\\overrightarrow{AB}$ and $E$ is on ray $\\overrightarrow{AC}$, with $AB = 8$, $AD = 12$, $AC = 6$, $AE = 9$, and $BC = 7$. What is the perimeter of $\\triangle ADE$?',
      fig: {
        view: [-1.5, -1.5, 13.5, 9.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [0, 0], b: [4.78125, 7.6249] },
          { t: 'seg', a: [8, 0], b: [3.1875, 5.0833] },
          { t: 'seg', a: [12, 0], b: [4.78125, 7.6249] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [8, 0], label: 'B', dx: 2, dy: 14 },
          { t: 'point', p: [3.1875, 5.0833], label: 'C', dx: -12, dy: -4 },
          { t: 'point', p: [12, 0], label: 'D', dx: 12, dy: 8 },
          { t: 'point', p: [4.78125, 7.6249], label: 'E', dx: 0, dy: -12 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [10, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [1.59375, 2.5417], text: '6', dx: -10, dy: -4 },
          { t: 'label', p: [3.984375, 6.3541], text: '3', dx: -12, dy: -4 },
          { t: 'label', p: [5.59375, 2.5417], text: '7', dx: 10, dy: 4 },
        ],
      },
      choices: ['$47.25$', '$21$', '$31.5$', '$28$'],
      answer: 2,
      solution:
        'Shared $\\angle A$, and the arms give $\\frac{AD}{AB} = \\frac{12}{8} = \\frac{3}{2}$ with $\\frac{AE}{AC} = \\frac{9}{6} = \\frac{3}{2}$ — SAS Similarity with factor $\\frac{3}{2}$. The small perimeter is $8 + 6 + 7 = 21$, and the whole boundary stretches by the same factor: $21 \\times \\frac{3}{2} = 31.5$ ✓. Check it a second way by adding the large sides directly: $AD = 12$, $AE = 9$, and $DE = \\frac{3}{2} \\times 7 = 10.5$, giving $12 + 9 + 10.5 = 31.5$ ✓ — the scaled total and the piecewise sum coincide. Guard: $12$, $9$, $10.5$ passes the triangle inequality, as it must. (The value $21$ is ANSWERING THE SMALL PERIMETER ✗; $47.25$ is APPLYING THE FACTOR TWICE, $21 \\times \\frac{9}{4}$ — that is how area scales ✗; $28$ is ADDING ONLY THE VISIBLE GROWTH, $21 + 4 + 3$, while the third side quietly grows by $3.5$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 5,
  sections: { '5.3': s53 },
}
