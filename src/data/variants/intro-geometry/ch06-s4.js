// Introduction to Geometry chapter 6 — variations for section 6.4
// (Congruence and Similarity Revisited). All problems, figures, and solutions
// are original MathQuest content.
//
// House rules for this file:
//  - Every numeric key was worked twice, by two routes that do not share
//    arithmetic: a Pythagorean subtraction against a triple-family scaling,
//    the area computed two ways against a similar-triangle proportion, a
//    geometric-mean relation against a Pythagorean closure of the whole
//    triangle, and a leg-rule product against Pythagoras inside the small
//    triangle. The two routes must agree before a key is written down.
//  - Every figure was built from its own numbers: altitude feet sit at their
//    exact coordinates (for legs a horizontal and b vertical the foot lands
//    at leg-squared over hypotenuse along each axis), right-angle squares sit
//    at both the apex and the foot, and every marked right angle was checked
//    against a dot product.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS. The traps running through this section: CALLING THE RIGHT ANGLE
//    THE BIGGEST, SHRINKING THE DATA, BORROWING THE CONCLUSION, FORCING
//    ISOSCELES, DENYING THE RULE, TRUE FACT WRONG JOB, OUTLAWING 41 AS A LEG,
//    IMPORTING EXTRA DATA, COUNTING THE MIRROR IMAGE TWICE, SUBTRACTING THE
//    LENGTHS, ADDING THE SQUARES, ADDING THE LENGTHS, PROMOTING SIMILAR TO
//    CONGRUENT, OUTLAWING THE SPECIAL CASE, GRABBING THE 30-60-90, HANDING
//    BACK THE SHARED ANGLE, POINTING AT THE RIGHT ANGLE, DENYING THE
//    SIMILARITY, PICKING A PIECE OF THE OLD HYPOTENUSE, PICKING THE ALTITUDE,
//    REUSING THE BIG HYPOTENUSE, ANSWERING A HYPOTENUSE PIECE, HALVING THE
//    HYPOTENUSE, TAKING THE ARITHMETIC MEAN, FORGETTING THE SQUARE ROOT,
//    SUBTRACTING THE PIECES, ANSWERING THE ALTITUDE, ANSWERING THE OTHER
//    PIECE, DOUBLING THE ANGLE, HALVING THE ANGLE, TRUSTING THE 45-DEGREE
//    DEFAULT, ANSWERING THE SHORTER LEG, MATCHING THE HYPOTENUSE TO A LEG,
//    ADDING THE HYPOTENUSE DIFFERENCE, SCALING BY THE LEFTOVER HYPOTENUSE,
//    KEEPING ONLY THE OTHER PIECE, LAYING THE ALTITUDE ALONG THE HYPOTENUSE,
//    and ANSWERING THE LONGER LEG.
//  - No two choices inside an item name the same value.

const s64 = [
  // s1 — why HL succeeds where SSA fails: Pythagoras pins the third side.
  [
    {
      q: 'Marisol’s teacher lists SSA — two sides and a non-included angle — among the matchings that do NOT guarantee congruence. Yet HL, which is a hypotenuse and a leg with the right angle not between them, is a genuine congruence rule. What makes the right-angle case immune to the usual SSA failure?',
      choices: [
        'A right angle is the largest angle any triangle can contain, so it can only fit into the triangle one way',
        'Once the hypotenuse $c$ and a leg $a$ are fixed, the remaining leg must be $\\sqrt{c^2 - a^2}$, and SSS finishes the job',
        'Any two right triangles with the same hypotenuse are automatically congruent',
        'HL is secretly ASA, because the two acute angles are already known to match',
      ],
      answer: 1,
      solution:
        'Fix the hypotenuse $c$ and one leg $a$. The Pythagorean Theorem gives the other leg no choice: it must equal $\\sqrt{c^2 - a^2}$ in both triangles, so all three pairs of sides agree, and SSS delivers congruence ✓. Check a second, independent way with the swinging-side picture that breaks SSA: ordinarily the side opposite the known angle can swing across and cut the base line in two different spots, building two genuinely different triangles from one set of data. When the known angle is the right angle, the leg stands perpendicular to the base, and the swinging hypotenuse meets the base at two points the same distance from the foot — mirror images of one triangle, not two triangles ✓. (The first choice is CALLING THE RIGHT ANGLE THE BIGGEST — an obtuse triangle contains a larger angle, so the claim is false before it can explain anything ✗; "same hypotenuse is enough" is SHRINKING THE DATA, since a hypotenuse of $10$ sits just as happily over legs $6$ and $8$ as over two legs of $\\sqrt{50}$ ✗; the ASA story is BORROWING THE CONCLUSION — the acute angles are only known to match after congruence is proved ✗.)',
    },
    {
      q: 'Here is how SSA fails in general: draw the fixed angle, walk out along one ray, and swing a compass set to the second side’s length — the arc can cut the far ray in two places, producing two different triangles from the same SSA data. Why does this two-triangle ambiguity vanish when the fixed angle is a right angle, giving us the HL congruence rule?',
      choices: [
        'The two compass crossings merge only for an isosceles triangle, and every right triangle is isosceles',
        'It does not vanish — HL quietly fails for certain right triangles',
        'The hypotenuse faces the largest angle of the triangle, and larger angles always face longer sides',
        'With hypotenuse $c$ and leg $a$ fixed, the Pythagorean Theorem allows exactly one length, $\\sqrt{c^2 - a^2}$, for the remaining leg',
      ],
      answer: 3,
      solution:
        'Algebra first: the sides of a right triangle are chained together by $a^2 + b^2 = c^2$, so fixing $c$ and $a$ pins the last leg at $b = \\sqrt{c^2 - a^2}$ — every triangle built from the data carries the same three sides, and SSS seals the congruence ✓. Check a second, independent way inside the compass picture itself: stand the leg of length $a$ perpendicular to the base line and swing the hypotenuse from its top end; the arc does cross the base twice, but at points sitting the same distance $\\sqrt{c^2 - a^2}$ on either side of the foot, so the two "different" triangles are mirror images of each other — and mirror images are congruent ✓. (The isosceles story is FORCING ISOSCELES onto right triangles that need not be ✗; "HL quietly fails" is DENYING THE RULE the computation just verified ✗; the largest-angle fact is TRUE FACT, WRONG JOB — it explains why the hypotenuse is longest, not why the third side is determined ✗.)',
    },
    {
      q: 'A design app lets you drag out any triangle you like. Kenji enters three constraints: a right angle, a hypotenuse of $41$, and one leg of $9$. He claims the app now has no freedom left — every triangle meeting his constraints is congruent to every other. Which fact proves him right?',
      choices: [
        'The remaining leg is forced to be $\\sqrt{41^2 - 9^2} = 40$, so all three sides are pinned and SSS applies',
        'In a right triangle, $41$ could never serve as a leg, only as a hypotenuse',
        'The app can look up both acute angles in a table, which supplies two extra constraints',
        'He is wrong: a right triangle and its mirror image satisfy the same constraints but are different shapes',
      ],
      answer: 0,
      solution:
        'The right angle chains the sides: $9^2 + b^2 = 41^2$, so $b^2 = 1681 - 81 = 1600$ and $b = 40$, with no second option ✓. All three sides — $9$, $40$, $41$ — are now fixed, and SSS makes every triangle carrying them congruent to every other. Check a second, independent way by hunting for a rival: any competing triangle with the same constraints but a different third side $x$ would still have to satisfy $9^2 + x^2 = 41^2$, which forces $x^2 = 1600$ and $x = 40$ again — the rival is the same triangle ✓. This is exactly why HL earns a place on the congruence list while SSA never does. (Banning $41$ from leg duty is OUTLAWING $41$ AS A LEG — a right triangle with legs $41$ and $1$ exists just fine, so the claim is false and proves nothing ✗; the angle table is IMPORTING EXTRA DATA that the three constraints never granted, and the sides are pinned without it ✗; the mirror-image objection is COUNTING THE MIRROR IMAGE TWICE, since a flip is itself a congruence ✗.)',
    },
  ],
  // s2 — HL in numbers: the forced third side.
  [
    {
      q: 'Two steel gate braces are right triangles. Each was cut with a hypotenuse of $26$ and one leg of $10$, so the HL rule says the two braces are congruent. How long is the remaining side of each brace?',
      fig: {
        view: [-2, -3, 56, 13],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [0, 10]], fill: false },
          { t: 'right', at: [0, 0], from: [24, 0], to: [0, 10] },
          { t: 'label', p: [12, 5], text: '26', dx: 12, dy: -8 },
          { t: 'label', p: [0, 5], text: '10', dx: -12, dy: 0 },
          { t: 'label', p: [12, 0], text: '?', dx: 0, dy: 14 },
          { t: 'poly', pts: [[30, 0], [54, 0], [30, 10]], fill: false },
          { t: 'right', at: [30, 0], from: [54, 0], to: [30, 10] },
          { t: 'label', p: [42, 5], text: '26', dx: 12, dy: -8 },
          { t: 'label', p: [30, 5], text: '10', dx: -12, dy: 0 },
          { t: 'label', p: [42, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$16$', '$2\\sqrt{194}$', '$24$', '$36$'],
      answer: 2,
      solution:
        'The remaining leg has no freedom: it is $\\sqrt{26^2 - 10^2} = \\sqrt{676 - 100} = \\sqrt{576} = 24$ ✓ — and this forced value is the entire reason HL works, since neither brace can be anything else. Check a second, independent way through triple families: halving $10$ and $26$ gives $5$ and $13$, the $5$-$12$-$13$ family scaled by $2$, so the missing side is $2 \\times 12 = 24$ ✓. Guard: the answer must be shorter than the hypotenuse, and $24 < 26$ ✓. (The choice $16$ is SUBTRACTING THE LENGTHS $26 - 10$ without ever squaring ✗; $2\\sqrt{194}$ is ADDING THE SQUARES, $\\sqrt{676 + 100}$, as if $26$ were a second leg ✗; $36$ is ADDING THE LENGTHS ✗.)',
    },
    {
      q: 'Right triangles $GHI$ and $JKL$ have their right angles at $I$ and $L$, with hypotenuses $GH = JK = 35$ and legs $HI = KL = 21$. By HL the two triangles are congruent. Find the shared length of the third side.',
      fig: {
        view: [-2.5, -3.5, 64.5, 24],
        elems: [
          { t: 'poly', pts: [[0, 0], [28, 0], [0, 21]], fill: false },
          { t: 'right', at: [0, 0], from: [28, 0], to: [0, 21] },
          { t: 'label', p: [14, 10.5], text: '35', dx: 12, dy: -8 },
          { t: 'label', p: [0, 10.5], text: '21', dx: -12, dy: 0 },
          { t: 'label', p: [14, 0], text: '?', dx: 0, dy: 14 },
          { t: 'poly', pts: [[34, 0], [62, 0], [34, 21]], fill: false },
          { t: 'right', at: [34, 0], from: [62, 0], to: [34, 21] },
          { t: 'label', p: [48, 10.5], text: '35', dx: 12, dy: -8 },
          { t: 'label', p: [34, 10.5], text: '21', dx: -12, dy: 0 },
          { t: 'label', p: [48, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$14$', '$28$', '$7\\sqrt{34}$', '$56$'],
      answer: 1,
      solution:
        'Subtract squares: $\\sqrt{35^2 - 21^2} = \\sqrt{1225 - 441} = \\sqrt{784} = 28$ ✓ — the same forced number in both triangles, which is HL’s whole secret. Check a second, independent way by unmasking the triple: $35 = 7 \\times 5$ and $21 = 7 \\times 3$, so this is the $3$-$4$-$5$ family scaled by $7$, and the third side is $7 \\times 4 = 28$ ✓. Guard: $21^2 + 28^2 = 441 + 784 = 1225 = 35^2$ ✓. (The choice $14$ is SUBTRACTING THE LENGTHS $35 - 21$ ✗; $7\\sqrt{34}$ is ADDING THE SQUARES, $\\sqrt{1225 + 441} = \\sqrt{1666}$, treating the hypotenuse as a leg ✗; $56$ is ADDING THE LENGTHS ✗.)',
    },
    {
      q: 'A workshop stamps out matched pairs of right-triangular panels. Every panel in a pair has a hypotenuse of $50$ and one leg of $14$, which is why HL certifies each pair congruent. What is the length of each panel’s third side?',
      fig: {
        w: 440,
        view: [-3, -4.5, 105, 17.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [48, 0], [0, 14]], fill: false },
          { t: 'right', at: [0, 0], from: [48, 0], to: [0, 14], s: 1.2 },
          { t: 'label', p: [24, 7], text: '50', dx: 12, dy: -8 },
          { t: 'label', p: [0, 7], text: '14', dx: -12, dy: 0 },
          { t: 'label', p: [24, 0], text: '?', dx: 0, dy: 14 },
          { t: 'poly', pts: [[54, 0], [102, 0], [54, 14]], fill: false },
          { t: 'right', at: [54, 0], from: [102, 0], to: [54, 14], s: 1.2 },
          { t: 'label', p: [78, 7], text: '50', dx: 12, dy: -8 },
          { t: 'label', p: [54, 7], text: '14', dx: -12, dy: 0 },
          { t: 'label', p: [78, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$36$', '$2\\sqrt{674}$', '$64$', '$48$'],
      answer: 3,
      solution:
        'The Pythagorean Theorem leaves one value: $\\sqrt{50^2 - 14^2} = \\sqrt{2500 - 196} = \\sqrt{2304} = 48$ ✓ — every stamped panel gets the same third side whether the press likes it or not, which is what HL is really saying. Check a second, independent way through the triple family: halving gives $7$ and $25$, the $7$-$24$-$25$ family scaled by $2$, so the missing side is $2 \\times 24 = 48$ ✓. Guard: $14^2 + 48^2 = 196 + 2304 = 2500 = 50^2$ ✓. (The choice $36$ is SUBTRACTING THE LENGTHS $50 - 14$ ✗; $2\\sqrt{674}$ is ADDING THE SQUARES, $\\sqrt{2500 + 196} = \\sqrt{2696}$ ✗; $64$ is ADDING THE LENGTHS ✗.)',
    },
  ],
  // s3 — the altitude to the hypotenuse and its three similar triangles.
  [
    {
      q: 'The altitude to the hypotenuse always cuts a right triangle into two smaller triangles that are similar to each other. When are the two pieces congruent as well?',
      choices: [
        'Always — similar triangles that share an altitude are congruent',
        'Never — the two pieces are always different sizes',
        'Exactly when the hypotenuse is twice the shorter leg',
        'Exactly when the two legs of the original triangle are equal',
      ],
      answer: 3,
      solution:
        'Watch whose hypotenuse is whose: each small piece has one of the original LEGS as its own hypotenuse, so congruent pieces force the legs to match, $a = b$; and conversely, when $a = b$ the whole figure is mirror-symmetric across the altitude, which folds one piece exactly onto the other ✓. Check a second, independent way through the hypotenuse pieces: the foot of the altitude splits the hypotenuse into $p = \\frac{a^2}{c}$ and $q = \\frac{b^2}{c}$, and congruent pieces need $p = q$, which happens exactly when $a^2 = b^2$ — again $a = b$ ✓, the $45$-$45$-$90$ triangle. (Always is PROMOTING SIMILAR TO CONGRUENT — same shape says nothing about same size ✗; "never" is OUTLAWING THE SPECIAL CASE that the isosceles right triangle happily provides ✗; hypotenuse twice the shorter leg is GRABBING THE $30$-$60$-$90$, whose pieces are $\\frac{c}{4}$ and $\\frac{3c}{4}$ — nowhere near equal ✗.)',
    },
    {
      q: 'In right triangle $ABC$ the right angle is at $C$, and the altitude from $C$ meets $\\overline{AB}$ at $D$, splitting the right angle into $\\angle ACD$ and $\\angle BCD$. The angle $\\angle ACD$ is equal in measure to which angle of $\\triangle ABC$?',
      choices: [
        '$\\angle B$',
        '$\\angle A$',
        '$\\angle ACB$',
        'It matches no angle of $\\triangle ABC$',
      ],
      answer: 0,
      solution:
        'Chase the angle sum in $\\triangle ACD$: it holds $\\angle A$, a right angle at $D$, and $\\angle ACD$, so $\\angle ACD = 180^\\circ - 90^\\circ - \\angle A = 90^\\circ - \\angle A$ — and $90^\\circ - \\angle A$ is precisely $\\angle B$, because the two acute angles of $\\triangle ABC$ also total $90^\\circ$ ✓. Check a second, independent way through similarity: $\\triangle ACD \\sim \\triangle ABC$ (shared $\\angle A$, right angles at $D$ and $C$), and in that correspondence vertex $C$ of the small triangle pairs with vertex $B$ of the big one, making $\\angle ACD$ and $\\angle B$ corresponding angles ✓ — this recycled angle is the engine behind all three similar triangles in the figure. (Choosing $\\angle A$ is HANDING BACK THE SHARED ANGLE, the one $\\angle ACD$ is complementary to, not equal to ✗; $\\angle ACB$ is POINTING AT THE RIGHT ANGLE, the full $90^\\circ$ that $\\angle ACD$ is only a slice of ✗; "no angle" is DENYING THE SIMILARITY that AA hands over for free ✗.)',
    },
    {
      q: 'In right triangle $ABC$ the right angle is at $C$, and the altitude from $C$ meets the hypotenuse $\\overline{AB}$ at $D$, creating the smaller triangle $ACD$, which is similar to $\\triangle ABC$. In this similarity, which side of $\\triangle ACD$ plays the role of the hypotenuse?',
      choices: ['$\\overline{AD}$', '$\\overline{CD}$', '$\\overline{AC}$', '$\\overline{AB}$'],
      answer: 2,
      solution:
        'A hypotenuse is the side opposite the right angle. In $\\triangle ACD$ the right angle sits at $D$, where the altitude meets $\\overline{AB}$, and the side opposite $D$ is $\\overline{AC}$ ✓ — so a leg of the big triangle is promoted to hypotenuse of the small one. Check a second, independent way by lining up the proportion: the similarity $\\triangle ACD \\sim \\triangle ABC$ gives $\\frac{AD}{AC} = \\frac{AC}{AB}$, i.e. $AC^2 = AD \\times AB$, and $\\overline{AC}$ occupies the same slot in the small triangle’s ratio that the true hypotenuse $\\overline{AB}$ occupies in the big one ✓ — which is exactly where the leg rule $\\text{leg}^2 = (\\text{adjacent piece}) \\times (\\text{whole hypotenuse})$ comes from. (Choosing $\\overline{AD}$ is PICKING A PIECE OF THE OLD HYPOTENUSE — inside the small triangle it is merely a leg ✗; $\\overline{CD}$ is PICKING THE ALTITUDE, the small triangle’s other leg ✗; $\\overline{AB}$ is REUSING THE BIG HYPOTENUSE, which is not even a side of $\\triangle ACD$ ✗.)',
    },
  ],
  // s4 — legs given, altitude to the hypotenuse wanted.
  [
    {
      q: 'A sail is a right triangle whose two shorter edges, meeting at the right angle, measure $6$ m and $8$ m. A reinforcing seam runs from the right-angle corner straight to the longest edge, meeting it at a right angle. How long is the seam?',
      fig: {
        view: [-1.5, -2.5, 11.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [6.4, 4.8]], fill: false },
          { t: 'seg', a: [6.4, 4.8], b: [6.4, 0], dash: true },
          { t: 'right', at: [6.4, 4.8], from: [0, 0], to: [10, 0] },
          { t: 'right', at: [6.4, 0], from: [10, 0], to: [6.4, 4.8] },
          { t: 'label', p: [3.2, 2.4], text: '8', dx: -10, dy: -6 },
          { t: 'label', p: [8.2, 2.4], text: '6', dx: 12, dy: -6 },
          { t: 'label', p: [5, 0], text: '10', dx: -14, dy: 14 },
          { t: 'label', p: [6.4, 2.4], text: '?', dx: 10, dy: 4 },
        ],
      },
      choices: ['$4.8$ m', '$3.6$ m', '$5$ m', '$6.4$ m'],
      answer: 0,
      solution:
        'One area, two bases. From the legs: $\\frac{1}{2} \\times 6 \\times 8 = 24$. The longest edge is $\\sqrt{6^2 + 8^2} = 10$, and using it as the base, $24 = \\frac{1}{2} \\times 10 \\times h$, so $h = 4.8$ m ✓. Check a second, independent way through the similar triangle the seam creates: the small triangle at the $8$ m edge’s corner shares that corner’s angle with the whole sail and has its own right angle at the seam’s foot, so by AA, $\\frac{h}{6} = \\frac{8}{10}$, giving $h = 6 \\times \\frac{8}{10} = 4.8$ ✓. Guard with the geometric mean: the seam’s foot splits the long edge into $\\frac{8^2}{10} = 6.4$ and $\\frac{6^2}{10} = 3.6$, and $4.8^2 = 23.04 = 6.4 \\times 3.6$ ✓. (The choices $3.6$ m and $6.4$ m are each ANSWERING A HYPOTENUSE PIECE instead of the seam ✗; $5$ m is HALVING THE HYPOTENUSE, which measures the median from the right angle, not the altitude ✗.)',
    },
    {
      q: 'In right triangle $UVW$, the legs $UV = 12$ and $VW = 16$ meet at the right angle $V$. Find the length of the altitude drawn from $V$ to the hypotenuse $\\overline{UW}$.',
      fig: {
        view: [-2, -3, 22, 12],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [7.2, 9.6]], fill: false },
          { t: 'seg', a: [7.2, 9.6], b: [7.2, 0], dash: true },
          { t: 'right', at: [7.2, 9.6], from: [0, 0], to: [20, 0] },
          { t: 'right', at: [7.2, 0], from: [20, 0], to: [7.2, 9.6] },
          { t: 'point', p: [0, 0], label: 'U', dx: -10, dy: 12 },
          { t: 'point', p: [20, 0], label: 'W', dx: 10, dy: 12 },
          { t: 'point', p: [7.2, 9.6], label: 'V', dx: 0, dy: -10 },
          { t: 'label', p: [3.6, 4.8], text: '12', dx: -12, dy: -6 },
          { t: 'label', p: [13.6, 4.8], text: '16', dx: 12, dy: -6 },
          { t: 'label', p: [7.2, 4.8], text: '?', dx: 10, dy: 4 },
        ],
      },
      choices: ['$7.2$', '$10$', '$9.6$', '$12.8$'],
      answer: 2,
      solution:
        'Compute the area twice. From the legs: $\\frac{1}{2} \\times 12 \\times 16 = 96$. The hypotenuse is $\\sqrt{144 + 256} = \\sqrt{400} = 20$, and with it as the base, $96 = \\frac{1}{2} \\times 20 \\times h$, so $h = 9.6$ ✓. Check a second, independent way with similar triangles: $\\triangle UHV \\sim \\triangle UVW$ for the altitude’s foot $H$ (shared $\\angle U$, right angles at $H$ and $V$), so $\\frac{h}{16} = \\frac{12}{20}$, giving $h = 16 \\times \\frac{12}{20} = 9.6$ ✓. Guard with the geometric mean: the foot splits the hypotenuse into $\\frac{12^2}{20} = 7.2$ and $\\frac{16^2}{20} = 12.8$, and $9.6^2 = 92.16 = 7.2 \\times 12.8$ ✓. (The choices $7.2$ and $12.8$ are each ANSWERING A HYPOTENUSE PIECE ✗; $10$ is HALVING THE HYPOTENUSE — that is the median from $V$, which always beats the altitude ✗.)',
    },
    {
      q: 'A concrete pad is shaped like a right triangle with legs of $18$ ft and $24$ ft around the right angle. A drainage channel runs from the right-angle corner straight across the pad, meeting the hypotenuse at a right angle. How long is the channel?',
      fig: {
        view: [-2.5, -3.5, 33, 17],
        elems: [
          { t: 'poly', pts: [[0, 0], [30, 0], [10.8, 14.4]], fill: false },
          { t: 'seg', a: [10.8, 14.4], b: [10.8, 0], dash: true },
          { t: 'right', at: [10.8, 14.4], from: [0, 0], to: [30, 0] },
          { t: 'right', at: [10.8, 0], from: [30, 0], to: [10.8, 14.4] },
          { t: 'label', p: [5.4, 7.2], text: '18', dx: -12, dy: -6 },
          { t: 'label', p: [20.4, 7.2], text: '24', dx: 12, dy: -6 },
          { t: 'label', p: [15, 0], text: '30', dx: 14, dy: 14 },
          { t: 'label', p: [10.8, 7.2], text: '?', dx: 10, dy: 4 },
        ],
      },
      choices: ['$10.8$ ft', '$14.4$ ft', '$15$ ft', '$19.2$ ft'],
      answer: 1,
      solution:
        'Hold the area steady while switching bases. Legs: $\\frac{1}{2} \\times 18 \\times 24 = 216$. The hypotenuse is $30$ (the $3$-$4$-$5$ family scaled by $6$), so $216 = \\frac{1}{2} \\times 30 \\times h$ and $h = \\frac{432}{30} = 14.4$ ft ✓. Check a second, independent way by proportion in the similar triangles the channel creates: the piece at the $18$ ft corner shares that angle with the whole pad and owns a right angle at the channel’s far end, so $\\frac{h}{24} = \\frac{18}{30}$, giving $h = 24 \\times \\frac{18}{30} = 14.4$ ✓. Guard with the geometric mean: the channel’s end splits the hypotenuse into $\\frac{18^2}{30} = 10.8$ and $\\frac{24^2}{30} = 19.2$, and $14.4^2 = 207.36 = 10.8 \\times 19.2$ ✓. (The choices $10.8$ ft and $19.2$ ft are each ANSWERING A HYPOTENUSE PIECE ✗; $15$ ft is HALVING THE HYPOTENUSE, the median’s length rather than the altitude’s ✗.)',
    },
  ],
  // s5 — hypotenuse pieces given, altitude wanted: h^2 = pq.
  [
    {
      q: 'In right triangle $ABC$ the right angle is at $C$, and the altitude $\\overline{CH}$ meets the hypotenuse at $H$ with $AH = 3$ and $HB = 12$, as shown. How long is the altitude?',
      fig: {
        view: [-1.5, -2.5, 17, 8],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [3, 6]], fill: false },
          { t: 'seg', a: [3, 6], b: [3, 0], dash: true },
          { t: 'right', at: [3, 6], from: [0, 0], to: [15, 0] },
          { t: 'right', at: [3, 0], from: [15, 0], to: [3, 6] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [15, 0], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [3, 6], label: 'C', dx: 0, dy: -10 },
          { t: 'point', p: [3, 0], label: 'H', dx: 4, dy: 14 },
          { t: 'label', p: [1.5, 0], text: '3', dx: -4, dy: 14 },
          { t: 'label', p: [9, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [3, 3], text: '?', dx: 10, dy: 0 },
        ],
      },
      choices: ['$7.5$', '$6$', '$36$', '$9$'],
      answer: 1,
      solution:
        'The altitude is the geometric mean of the two hypotenuse pieces: $\\triangle AHC \\sim \\triangle CHB$ gives $\\frac{AH}{CH} = \\frac{CH}{HB}$, so $CH^2 = 3 \\times 12 = 36$ and $CH = 6$ ✓. Check a second, independent way by closing the big right angle: with $CH = 6$, the legs satisfy $AC^2 = 3^2 + 6^2 = 45$ and $CB^2 = 6^2 + 12^2 = 180$, and $45 + 180 = 225 = 15^2 = AB^2$ ✓ — the Pythagorean equation of $\\triangle ACB$ closes exactly, which only the true altitude can arrange. (The choice $7.5$ is TAKING THE ARITHMETIC MEAN of $3$ and $12$; the similar triangles demand the geometric mean, which is always smaller ✗; $36$ is FORGETTING THE SQUARE ROOT and reporting $CH^2$ ✗; $9$ is SUBTRACTING THE PIECES, $12 - 3$ ✗.)',
    },
    {
      q: 'A kite frame is a right triangle stiffened by a spar that runs from the right-angle corner perpendicular to the longest rod. The spar’s foot divides the longest rod into sections of $4$ and $16$, as shown. How long is the spar?',
      fig: {
        view: [-1.5, -3, 22, 10],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [4, 8]], fill: false },
          { t: 'seg', a: [4, 8], b: [4, 0], dash: true },
          { t: 'right', at: [4, 8], from: [0, 0], to: [20, 0] },
          { t: 'right', at: [4, 0], from: [20, 0], to: [4, 8] },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [12, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [4, 4], text: '?', dx: 10, dy: 0 },
        ],
      },
      choices: ['$10$', '$64$', '$12$', '$8$'],
      answer: 3,
      solution:
        'The spar splits the frame into two similar right triangles, and matching their sides gives $\\frac{4}{h} = \\frac{h}{16}$, so $h^2 = 4 \\times 16 = 64$ and $h = 8$ ✓ — the geometric mean of the two sections. Check a second, independent way by rebuilding the whole frame: with $h = 8$, the two short rods come out as $\\sqrt{4^2 + 8^2} = \\sqrt{80}$ and $\\sqrt{8^2 + 16^2} = \\sqrt{320}$, and $80 + 320 = 400 = 20^2$ ✓ — exactly the square of the long rod $4 + 16 = 20$, so the frame really closes with a right angle at the corner. (The choice $10$ is TAKING THE ARITHMETIC MEAN of $4$ and $16$, always a bit too big ✗; $64$ is FORGETTING THE SQUARE ROOT — that number is $h^2$ ✗; $12$ is SUBTRACTING THE PIECES, $16 - 4$ ✗.)',
    },
    {
      q: 'The altitude from the right angle of a right triangle meets the hypotenuse, which is $50$ units long, at a point $5$ units from one end, as shown. What is the length of the altitude?',
      fig: {
        w: 400,
        view: [-2, -4, 54, 18],
        elems: [
          { t: 'poly', pts: [[0, 0], [50, 0], [5, 15]], fill: false },
          { t: 'seg', a: [5, 15], b: [5, 0], dash: true },
          { t: 'right', at: [5, 15], from: [0, 0], to: [50, 0], s: 0.8 },
          { t: 'right', at: [5, 0], from: [50, 0], to: [5, 15], s: 0.8 },
          { t: 'label', p: [2.5, 0], text: '5', dx: -4, dy: 14 },
          { t: 'label', p: [27.5, 0], text: '45', dx: 0, dy: 14 },
          { t: 'label', p: [5, 7.5], text: '?', dx: 10, dy: 0 },
        ],
      },
      choices: ['$25$', '$40$', '$15$', '$225$'],
      answer: 2,
      solution:
        'The point splits the hypotenuse into $5$ and $50 - 5 = 45$, and the altitude is their geometric mean: $h^2 = 5 \\times 45 = 225$, so $h = 15$ ✓ — spotted faster as $\\sqrt{5 \\times 45} = \\sqrt{5 \\times 5 \\times 9} = 5 \\times 3$. Check a second, independent way by closing the triangle: with $h = 15$, the legs satisfy $5^2 + 15^2 = 250$ and $15^2 + 45^2 = 2250$, and $250 + 2250 = 2500 = 50^2$ ✓ — the full hypotenuse squared, so the right angle at the top is genuine. (The choice $25$ is TAKING THE ARITHMETIC MEAN of $5$ and $45$, which always overshoots the geometric mean ✗; $40$ is SUBTRACTING THE PIECES, $45 - 5$ ✗; $225$ is FORGETTING THE SQUARE ROOT and handing in $h^2$ ✗.)',
    },
  ],
  // s6 — the leg rule: leg^2 = (adjacent piece) x (whole hypotenuse).
  [
    {
      q: 'In right triangle $PQR$ the right angle is at $R$, and the altitude from $R$ meets the hypotenuse $\\overline{PQ}$ at $F$, with $PF = 3$ and $PQ = 27$. Find the leg $PR$.',
      fig: {
        view: [-2.5, -3, 29.5, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [27, 0], [3, 8.485]], fill: false },
          { t: 'seg', a: [3, 8.485], b: [3, 0], dash: true },
          { t: 'right', at: [3, 8.485], from: [0, 0], to: [27, 0] },
          { t: 'right', at: [3, 0], from: [27, 0], to: [3, 8.485] },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 12 },
          { t: 'point', p: [27, 0], label: 'Q', dx: 10, dy: 12 },
          { t: 'point', p: [3, 8.485], label: 'R', dx: 0, dy: -10 },
          { t: 'point', p: [3, 0], label: 'F', dx: 4, dy: 14 },
          { t: 'label', p: [1.5, 0], text: '3', dx: -4, dy: 14 },
          { t: 'label', p: [15, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [1.5, 4.24], text: '?', dx: -12, dy: -4 },
        ],
      },
      choices: ['$6\\sqrt{2}$', '$24$', '$81$', '$9$'],
      answer: 3,
      solution:
        'The leg $\\overline{PR}$ touches the hypotenuse piece $\\overline{PF}$, so the leg rule applies: $PR^2 = PF \\times PQ = 3 \\times 27 = 81$, giving $PR = 9$ ✓. Check a second, independent way through the altitude: $RF^2 = PF \\times FQ = 3 \\times 24 = 72$, and Pythagoras inside $\\triangle PFR$ gives $PR = \\sqrt{PF^2 + RF^2} = \\sqrt{9 + 72} = \\sqrt{81} = 9$ ✓ — the same $9$ with the leg rule never invoked. Guard: a leg must be shorter than the hypotenuse, and $9 < 27$ ✓. (The choice $6\\sqrt{2}$ is ANSWERING THE ALTITUDE, since $RF = \\sqrt{72} = 6\\sqrt{2}$ — a real length in the figure, but not the one requested ✗; $24$ is ANSWERING THE OTHER PIECE, $FQ$ ✗; $81$ is FORGETTING THE SQUARE ROOT and reporting $PR^2$ ✗.)',
    },
    {
      q: 'Right triangle $XYZ$ has its right angle at $Z$. The altitude from $Z$ lands on the hypotenuse $\\overline{XY}$ at $W$, with $XW = 13$ and $XY = 52$, as shown. How long is the leg $\\overline{XZ}$?',
      fig: {
        w: 400,
        view: [-3.5, -4.5, 56, 25.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [52, 0], [13, 22.517]], fill: false },
          { t: 'seg', a: [13, 22.517], b: [13, 0], dash: true },
          { t: 'right', at: [13, 22.517], from: [0, 0], to: [52, 0], s: 0.8 },
          { t: 'right', at: [13, 0], from: [52, 0], to: [13, 22.517], s: 0.8 },
          { t: 'point', p: [0, 0], label: 'X', dx: -10, dy: 12 },
          { t: 'point', p: [52, 0], label: 'Y', dx: 10, dy: 12 },
          { t: 'point', p: [13, 22.517], label: 'Z', dx: 0, dy: -10 },
          { t: 'point', p: [13, 0], label: 'W', dx: 4, dy: 14 },
          { t: 'label', p: [6.5, 0], text: '13', dx: -4, dy: 14 },
          { t: 'label', p: [32.5, 0], text: '39', dx: 0, dy: 14 },
          { t: 'label', p: [6.5, 11.26], text: '?', dx: -12, dy: -4 },
        ],
      },
      choices: ['$39$', '$26$', '$13\\sqrt{3}$', '$676$'],
      answer: 1,
      solution:
        'The leg $\\overline{XZ}$ is adjacent to the piece $\\overline{XW}$, so the leg rule gives $XZ^2 = XW \\times XY = 13 \\times 52 = 676$, and $XZ = 26$ ✓. Check a second, independent way with no leg rule in it: the altitude satisfies $ZW^2 = XW \\times WY = 13 \\times 39 = 507$, and Pythagoras in $\\triangle XWZ$ gives $XZ = \\sqrt{13^2 + 507} = \\sqrt{169 + 507} = \\sqrt{676} = 26$ ✓. Guard: $26$ is the geometric mean of $13$ and $52$, and it sits properly between them ✓. (The choice $39$ is ANSWERING THE OTHER PIECE, $WY = 52 - 13$ ✗; $13\\sqrt{3}$ is ANSWERING THE ALTITUDE, since $ZW = \\sqrt{507} = 13\\sqrt{3}$ ✗; $676$ is FORGETTING THE SQUARE ROOT — that is $XZ^2$ ✗.)',
    },
    {
      q: 'In right triangle $KLM$ the right angle is at $M$, and the altitude from $M$ meets the hypotenuse $\\overline{KL}$ at $H$. Given $KH = 4$ and $KL = 49$, find the leg $\\overline{KM}$.',
      fig: {
        w: 400,
        view: [-3, -4.5, 52.5, 15.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [49, 0], [4, 13.416]], fill: false },
          { t: 'seg', a: [4, 13.416], b: [4, 0], dash: true },
          { t: 'right', at: [4, 13.416], from: [0, 0], to: [49, 0], s: 0.8 },
          { t: 'right', at: [4, 0], from: [49, 0], to: [4, 13.416], s: 0.8 },
          { t: 'point', p: [0, 0], label: 'K', dx: -10, dy: 12 },
          { t: 'point', p: [49, 0], label: 'L', dx: 10, dy: 12 },
          { t: 'point', p: [4, 13.416], label: 'M', dx: 0, dy: -10 },
          { t: 'point', p: [4, 0], label: 'H', dx: 4, dy: 14 },
          { t: 'label', p: [2, 0], text: '4', dx: -4, dy: 14 },
          { t: 'label', p: [26.5, 0], text: '45', dx: 0, dy: 14 },
          { t: 'label', p: [2, 6.7], text: '?', dx: -12, dy: -4 },
        ],
      },
      choices: ['$14$', '$6\\sqrt{5}$', '$45$', '$196$'],
      answer: 0,
      solution:
        'Each leg is the geometric mean of the whole hypotenuse and its own adjacent piece: $KM^2 = KH \\times KL = 4 \\times 49 = 196$, so $KM = 14$ ✓ — visible at a glance as $\\sqrt{4} \\times \\sqrt{49} = 2 \\times 7$. Check a second, independent way through the altitude: $MH^2 = KH \\times HL = 4 \\times 45 = 180$, and Pythagoras inside $\\triangle KHM$ gives $KM = \\sqrt{4^2 + 180} = \\sqrt{16 + 180} = \\sqrt{196} = 14$ ✓. Guard: the geometric mean of $4$ and $49$ must land between them, and $4 < 14 < 49$ ✓. (The choice $6\\sqrt{5}$ is ANSWERING THE ALTITUDE, since $MH = \\sqrt{180} = 6\\sqrt{5}$ ✗; $45$ is ANSWERING THE OTHER PIECE, $HL = 49 - 4$ ✗; $196$ is FORGETTING THE SQUARE ROOT, handing in $KM^2$ ✗.)',
    },
  ],
  // s7 — one acute angle pins the shape of a right triangle.
  [
    {
      q: 'A drafting triangle has an acute angle of $28^\\circ$. Which of the following right triangles is guaranteed to be similar to it?',
      choices: [
        'one with an acute angle of $45^\\circ$',
        'one with an acute angle of $56^\\circ$',
        'one with an acute angle of $62^\\circ$',
        'one with an acute angle of $14^\\circ$',
      ],
      answer: 2,
      solution:
        'The two acute angles of a right triangle are complements, so the drafting triangle’s angles are $28^\\circ$, $90^\\circ - 28^\\circ = 62^\\circ$, and $90^\\circ$. A right triangle with a $62^\\circ$ angle rebuilds the same set — its third angle is $90^\\circ - 62^\\circ = 28^\\circ$ — and one matching acute angle plus the free right angle is AA similarity ✓. Check a second, independent way with the angle sum: $28^\\circ + 62^\\circ + 90^\\circ = 180^\\circ$ ✓, while a right triangle with a $56^\\circ$ angle carries $34^\\circ$, $56^\\circ$, $90^\\circ$ — no $28^\\circ$ anywhere, so nothing forces similarity ✗. (The choice $56^\\circ$ is DOUBLING THE ANGLE instead of complementing it ✗; $14^\\circ$ is HALVING THE ANGLE ✗; $45^\\circ$ is TRUSTING THE $45$-DEGREE DEFAULT, as if every right triangle matched the isosceles one ✗.)',
    },
    {
      q: 'A ladder leaning against a wall makes a $41^\\circ$ angle with the ground, so the ladder, the wall, and the ground form a right triangle. Which right triangle below must be similar to it?',
      choices: [
        'one with an acute angle of $49^\\circ$',
        'one with an acute angle of $82^\\circ$',
        'one with an acute angle of $45^\\circ$',
        'one with an acute angle of $20.5^\\circ$',
      ],
      answer: 0,
      solution:
        'The ladder triangle’s angle set is $41^\\circ$, $90^\\circ - 41^\\circ = 49^\\circ$, and $90^\\circ$. Any right triangle holding a $49^\\circ$ angle is forced to hold $41^\\circ$ as well, so the two triangles share two angle pairs — AA similarity, with the right angle coming free ✓. Check a second, independent way by totaling: $41^\\circ + 49^\\circ + 90^\\circ = 180^\\circ$ ✓, and no other listed angle can coexist with $41^\\circ$ in a right triangle, since $90^\\circ$ minus each of $82^\\circ$, $45^\\circ$, $20.5^\\circ$ gives $8^\\circ$, $45^\\circ$, $69.5^\\circ$ — never $41^\\circ$ ✗. (The choice $82^\\circ$ is DOUBLING THE ANGLE ✗; $20.5^\\circ$ is HALVING THE ANGLE ✗; $45^\\circ$ is TRUSTING THE $45$-DEGREE DEFAULT — the isosceles right triangle matches only itself ✗.)',
    },
    {
      q: 'A roof truss is a right triangle whose pitch makes a $33^\\circ$ angle at the eave. A second truss, of a different size, is a right triangle too. Which measurement guarantees that the second truss is similar to the first?',
      choices: [
        'an acute angle of $66^\\circ$',
        'an acute angle of $57^\\circ$',
        'an acute angle of $45^\\circ$',
        'an acute angle of $16.5^\\circ$',
      ],
      answer: 1,
      solution:
        'Complements first: the truss carries $33^\\circ$, $90^\\circ - 33^\\circ = 57^\\circ$, and $90^\\circ$. A right triangle with a $57^\\circ$ angle must complete itself with $33^\\circ$, so the two trusses match in two angles — AA, and size never enters the argument ✓. Check a second, independent way with the angle sum: $33^\\circ + 57^\\circ + 90^\\circ = 180^\\circ$ ✓, whereas a right triangle with $66^\\circ$ carries $24^\\circ$, with $45^\\circ$ carries $45^\\circ$, and with $16.5^\\circ$ carries $73.5^\\circ$ — none of them owns a $33^\\circ$ angle, so none is forced into the first truss’s family ✗. (The choice $66^\\circ$ is DOUBLING THE ANGLE rather than subtracting it from $90^\\circ$ ✗; $16.5^\\circ$ is HALVING THE ANGLE ✗; $45^\\circ$ is TRUSTING THE $45$-DEGREE DEFAULT ✗.)',
    },
  ],
  // s8 — a similar right triangle scaled through its hypotenuse; longer leg wanted.
  [
    {
      q: 'A surveyor’s sketch shows a right triangle with legs $9$ and $12$. The plot of land itself is a similar right triangle whose hypotenuse measures $45$. Find the longer leg of the plot.',
      fig: {
        view: [-2, -3.5, 55, 30],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [0, 9]], fill: false },
          { t: 'right', at: [0, 0], from: [12, 0], to: [0, 9] },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [0, 4.5], text: '9', dx: -10, dy: 0 },
          { t: 'poly', pts: [[16, 0], [52, 0], [16, 27]], fill: false },
          { t: 'right', at: [16, 0], from: [52, 0], to: [16, 27] },
          { t: 'label', p: [34, 13.5], text: '45', dx: 12, dy: -8 },
          { t: 'label', p: [34, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$36$', '$27$', '$60$', '$42$'],
      answer: 0,
      solution:
        'The sketch’s hypotenuse is $\\sqrt{9^2 + 12^2} = 15$ (the $3$-$4$-$5$ family times $3$), so the scale factor from sketch to plot is $\\frac{45}{15} = 3$, and the longer leg is $12 \\times 3 = 36$ ✓. Check a second, independent way by closing the plot’s Pythagorean equation: if the longer leg is $36$, the shorter leg must be $\\sqrt{45^2 - 36^2} = \\sqrt{2025 - 1296} = \\sqrt{729} = 27$, and $27 : 36 : 45$ reduces to $3 : 4 : 5$ — precisely the sketch’s shape $9 : 12 : 15$ ✓, so the whole triangle is consistent. (The choice $27$ is ANSWERING THE SHORTER LEG, $9 \\times 3$ ✗; $60$ is MATCHING THE HYPOTENUSE TO A LEG, scaling by $\\frac{45}{9} = 5$ as though $45$ corresponded to the leg of $9$ ✗; $42$ is ADDING THE HYPOTENUSE DIFFERENCE $45 - 15$ to the leg of $12$ ✗.)',
    },
    {
      q: 'A photo shows a right-triangular pennant with legs $5$ and $12$. An enlargement of the photo shows the same pennant as a similar right triangle with hypotenuse $65$. What is the longer leg in the enlargement?',
      fig: {
        w: 400,
        view: [-2, -3.5, 79, 28],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [0, 5]], fill: false },
          { t: 'right', at: [0, 0], from: [12, 0], to: [0, 5], s: 0.8 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [0, 2.5], text: '5', dx: -10, dy: 0 },
          { t: 'poly', pts: [[16, 0], [76, 0], [16, 25]], fill: false },
          { t: 'right', at: [16, 0], from: [76, 0], to: [16, 25], s: 0.8 },
          { t: 'label', p: [46, 12.5], text: '65', dx: 12, dy: -8 },
          { t: 'label', p: [46, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$25$', '$156$', '$60$', '$64$'],
      answer: 2,
      solution:
        'Legs $5$ and $12$ put the small pennant in the $5$-$12$-$13$ family, so its hypotenuse is $13$ and the enlargement’s scale factor is $\\frac{65}{13} = 5$. The longer leg becomes $12 \\times 5 = 60$ ✓. Check a second, independent way through Pythagoras in the enlargement: a longer leg of $60$ under a hypotenuse of $65$ leaves $\\sqrt{65^2 - 60^2} = \\sqrt{4225 - 3600} = \\sqrt{625} = 25$ for the shorter leg, and $25 : 60 : 65$ reduces to $5 : 12 : 13$ ✓ — the photo’s shape exactly, so every side scaled by the same $5$. (The choice $25$ is ANSWERING THE SHORTER LEG ✗; $156$ is MATCHING THE HYPOTENUSE TO A LEG, scaling by $\\frac{65}{5} = 13$ ✗; $64$ is ADDING THE HYPOTENUSE DIFFERENCE $65 - 13$ to the leg of $12$ ✗.)',
    },
    {
      q: 'A right triangle has legs $7$ and $24$. A banner is made in the shape of a similar right triangle whose hypotenuse is $75$. How long is the banner’s longer leg?',
      fig: {
        w: 440,
        view: [-2.5, -4, 103, 24],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [0, 7]], fill: false },
          { t: 'right', at: [0, 0], from: [24, 0], to: [0, 7], s: 1 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [0, 3.5], text: '7', dx: -10, dy: 0 },
          { t: 'poly', pts: [[28, 0], [100, 0], [28, 21]], fill: false },
          { t: 'right', at: [28, 0], from: [100, 0], to: [28, 21], s: 1 },
          { t: 'label', p: [64, 10.5], text: '75', dx: 12, dy: -8 },
          { t: 'label', p: [64, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$21$', '$74$', '$48$', '$72$'],
      answer: 3,
      solution:
        'The legs $7$ and $24$ complete to the $7$-$24$-$25$ triple, so the original hypotenuse is $25$ and the banner’s scale factor is $\\frac{75}{25} = 3$. The longer leg stretches to $24 \\times 3 = 72$ ✓. Check a second, independent way with the banner’s own Pythagorean equation: a leg of $72$ under a hypotenuse of $75$ forces the other leg to $\\sqrt{75^2 - 72^2} = \\sqrt{5625 - 5184} = \\sqrt{441} = 21$, and $21 : 72 : 75$ reduces to $7 : 24 : 25$ ✓ — the original’s shape, confirming a single scale factor of $3$ throughout. (The choice $21$ is ANSWERING THE SHORTER LEG, $7 \\times 3$ ✗; $74$ is ADDING THE HYPOTENUSE DIFFERENCE $75 - 25$ to the leg of $24$ ✗; $48$ is SCALING BY THE LEFTOVER HYPOTENUSE, multiplying the leg by $\\frac{75 - 25}{25} = 2$ ✗.)',
    },
  ],
  // s9 — altitude plus one hypotenuse piece; the whole hypotenuse wanted.
  [
    {
      q: 'In a right triangle, the altitude to the hypotenuse measures $10$, and the shorter of the two pieces it cuts from the hypotenuse measures $4$, as shown. How long is the entire hypotenuse?',
      fig: {
        view: [-1.5, -2.5, 31, 12],
        elems: [
          { t: 'poly', pts: [[0, 0], [29, 0], [4, 10]], fill: false },
          { t: 'seg', a: [4, 10], b: [4, 0], dash: true },
          { t: 'right', at: [4, 10], from: [0, 0], to: [29, 0] },
          { t: 'right', at: [4, 0], from: [29, 0], to: [4, 10] },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [16.5, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [4, 5], text: '10', dx: -12, dy: 0 },
        ],
      },
      choices: ['$25$', '$29$', '$21$', '$14$'],
      answer: 1,
      solution:
        'The altitude is the geometric mean of the two pieces, so $10^2 = 4 \\times q$ gives the hidden piece $q = \\frac{100}{4} = 25$, and the hypotenuse is $4 + 25 = 29$ ✓. Check a second, independent way by closing the big triangle: the legs satisfy $4^2 + 10^2 = 116$ and $10^2 + 25^2 = 725$, and $116 + 725 = 841 = 29^2$ ✓ — the Pythagorean equation of the whole triangle lands exactly on the claimed hypotenuse. (The choice $25$ is KEEPING ONLY THE OTHER PIECE and forgetting to add the $4$ back on ✗; $21$ is SUBTRACTING THE PIECES, $25 - 4$ ✗; $14$ is LAYING THE ALTITUDE ALONG THE HYPOTENUSE, adding $10 + 4$ as if the altitude were a piece of it ✗.)',
    },
    {
      q: 'A triangular gusset plate is a right triangle. Its altitude to the hypotenuse is $8$, and the foot of that altitude sits $2$ units from one end of the hypotenuse, as shown. Find the length of the hypotenuse.',
      fig: {
        view: [-1.5, -2.5, 36, 10],
        elems: [
          { t: 'poly', pts: [[0, 0], [34, 0], [2, 8]], fill: false },
          { t: 'seg', a: [2, 8], b: [2, 0], dash: true },
          { t: 'right', at: [2, 8], from: [0, 0], to: [34, 0] },
          { t: 'right', at: [2, 0], from: [34, 0], to: [2, 8] },
          { t: 'label', p: [1, 0], text: '2', dx: -2, dy: 14 },
          { t: 'label', p: [18, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [2, 4], text: '8', dx: -10, dy: 0 },
        ],
      },
      choices: ['$32$', '$10$', '$34$', '$30$'],
      answer: 2,
      solution:
        'Run the geometric-mean relation backward: $8^2 = 2 \\times q$, so the far piece is $q = \\frac{64}{2} = 32$, and the hypotenuse totals $2 + 32 = 34$ ✓. Check a second, independent way with a Pythagorean closure: the two legs satisfy $2^2 + 8^2 = 68$ and $8^2 + 32^2 = 1088$, and $68 + 1088 = 1156 = 34^2$ ✓ — only the correct far piece makes the corner a true right angle. (The choice $32$ is KEEPING ONLY THE OTHER PIECE — the question asks for the whole hypotenuse ✗; $30$ is SUBTRACTING THE PIECES, $32 - 2$ ✗; $10$ is LAYING THE ALTITUDE ALONG THE HYPOTENUSE, adding $8 + 2$ even though the altitude sticks out perpendicular to it ✗.)',
    },
    {
      q: 'The altitude drawn from the right angle of a right triangle has length $12$ and meets the hypotenuse $4$ units from one endpoint, as shown. What is the length of the hypotenuse?',
      fig: {
        view: [-2, -3, 42.5, 14.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [40, 0], [4, 12]], fill: false },
          { t: 'seg', a: [4, 12], b: [4, 0], dash: true },
          { t: 'right', at: [4, 12], from: [0, 0], to: [40, 0] },
          { t: 'right', at: [4, 0], from: [40, 0], to: [4, 12] },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [22, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [4, 6], text: '12', dx: -12, dy: 0 },
        ],
      },
      choices: ['$36$', '$32$', '$16$', '$40$'],
      answer: 3,
      solution:
        'The geometric-mean relation $h^2 = pq$ gives $144 = 4 \\times q$, so the far piece is $q = 36$ and the hypotenuse is $4 + 36 = 40$ ✓. Check a second, independent way by rebuilding the whole triangle: the legs satisfy $4^2 + 12^2 = 160$ and $12^2 + 36^2 = 1440$, and $160 + 1440 = 1600 = 40^2$ ✓ — the top corner closes to exactly $90^\\circ$, which is the signature of the true altitude. (The choice $36$ is KEEPING ONLY THE OTHER PIECE instead of the full hypotenuse ✗; $32$ is SUBTRACTING THE PIECES, $36 - 4$ ✗; $16$ is LAYING THE ALTITUDE ALONG THE HYPOTENUSE, adding $12 + 4$ although the altitude never lies along it ✗.)',
    },
  ],
  // s10 — hypotenuse and altitude given; recover the legs, report the shorter.
  [
    {
      q: 'A right-triangular garden plot has its longest side equal to $30$ m, and the perpendicular distance from the right-angle corner to that side is $14.4$ m. How long is the plot’s shortest side?',
      fig: {
        view: [-2.5, -3.5, 33, 17.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [30, 0], [10.8, 14.4]], fill: false },
          { t: 'seg', a: [10.8, 14.4], b: [10.8, 0], dash: true },
          { t: 'right', at: [10.8, 14.4], from: [0, 0], to: [30, 0] },
          { t: 'right', at: [10.8, 0], from: [30, 0], to: [10.8, 14.4] },
          { t: 'label', p: [15, 0], text: '30', dx: 16, dy: 14 },
          { t: 'label', p: [10.8, 7.2], text: '14.4', dx: 16, dy: 4 },
          { t: 'label', p: [5.4, 7.2], text: '?', dx: -12, dy: -4 },
        ],
      },
      choices: ['$24$ m', '$10.8$ m', '$15$ m', '$18$ m'],
      answer: 3,
      solution:
        'Area two ways: $\\frac{1}{2} \\times 30 \\times 14.4 = 216$, so the legs satisfy $ab = 432$ alongside $a^2 + b^2 = 900$. Try the triple family $18$-$24$-$30$, which is $6 \\times (3$-$4$-$5)$: $18 \\times 24 = 432$ ✓ and $324 + 576 = 900$ ✓, so the legs are $18$ and $24$ and the shorter is $18$ m. Check a second, independent way through the hypotenuse pieces: they multiply to $14.4^2 = 207.36$ and add to $30$, which pins them at $10.8$ and $19.2$ ($10.8 \\times 19.2 = 207.36$ ✓); the leg rule then gives the shorter leg as $\\sqrt{10.8 \\times 30} = \\sqrt{324} = 18$ ✓. (The choice $24$ m is ANSWERING THE LONGER LEG ✗; $10.8$ m is ANSWERING A HYPOTENUSE PIECE, the segment under the shorter leg ✗; $15$ m is HALVING THE HYPOTENUSE, the median’s length ✗.)',
    },
    {
      q: 'In right triangle $DEF$ the right angle is at $E$, the hypotenuse $\\overline{DF}$ measures $50$, and the altitude from $E$ to $\\overline{DF}$ measures $24$. What is the length of the shorter leg?',
      fig: {
        w: 400,
        view: [-3, -4, 54, 27],
        elems: [
          { t: 'poly', pts: [[0, 0], [50, 0], [18, 24]], fill: false },
          { t: 'seg', a: [18, 24], b: [18, 0], dash: true },
          { t: 'right', at: [18, 24], from: [0, 0], to: [50, 0], s: 0.8 },
          { t: 'right', at: [18, 0], from: [50, 0], to: [18, 24], s: 0.8 },
          { t: 'point', p: [0, 0], label: 'D', dx: -10, dy: 12 },
          { t: 'point', p: [50, 0], label: 'F', dx: 10, dy: 12 },
          { t: 'point', p: [18, 24], label: 'E', dx: 0, dy: -10 },
          { t: 'label', p: [25, 0], text: '50', dx: 16, dy: 14 },
          { t: 'label', p: [18, 12], text: '24', dx: 14, dy: 4 },
          { t: 'label', p: [9, 12], text: '?', dx: -12, dy: -4 },
        ],
      },
      choices: ['$40$', '$30$', '$25$', '$18$'],
      answer: 1,
      solution:
        'Two facts trap the legs: the area gives $ab = 50 \\times 24 = 1200$, and Pythagoras gives $a^2 + b^2 = 2500$. The family $30$-$40$-$50$, which is $10 \\times (3$-$4$-$5)$, satisfies both: $30 \\times 40 = 1200$ ✓ and $900 + 1600 = 2500$ ✓, so the shorter leg is $30$. Check a second, independent way through the foot of the altitude: the two hypotenuse pieces multiply to $24^2 = 576$ and add to $50$, forcing $18$ and $32$ ($18 \\times 32 = 576$ ✓), and the leg rule gives the shorter leg as $\\sqrt{18 \\times 50} = \\sqrt{900} = 30$ ✓. (The choice $40$ is ANSWERING THE LONGER LEG ✗; $18$ is ANSWERING A HYPOTENUSE PIECE, the one under the shorter leg ✗; $25$ is HALVING THE HYPOTENUSE — that is the median from $E$, never the altitude in a non-isosceles right triangle ✗.)',
    },
    {
      q: 'A pennant is cut as a right triangle with hypotenuse $45$ cm, and the altitude from the right-angle corner to the hypotenuse comes out to $21.6$ cm. Find the length of the pennant’s shorter leg.',
      fig: {
        view: [-3, -4, 48, 24.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [45, 0], [16.2, 21.6]], fill: false },
          { t: 'seg', a: [16.2, 21.6], b: [16.2, 0], dash: true },
          { t: 'right', at: [16.2, 21.6], from: [0, 0], to: [45, 0], s: 0.8 },
          { t: 'right', at: [16.2, 0], from: [45, 0], to: [16.2, 21.6], s: 0.8 },
          { t: 'label', p: [22.5, 0], text: '45', dx: 16, dy: 14 },
          { t: 'label', p: [16.2, 10.8], text: '21.6', dx: 16, dy: 4 },
          { t: 'label', p: [8.1, 10.8], text: '?', dx: -12, dy: -4 },
        ],
      },
      choices: ['$27$ cm', '$36$ cm', '$22.5$ cm', '$16.2$ cm'],
      answer: 0,
      solution:
        'The area pins the product of the legs: $ab = 45 \\times 21.6 = 972$, while Pythagoras demands $a^2 + b^2 = 2025$. The triple family $27$-$36$-$45$, which is $9 \\times (3$-$4$-$5)$, checks on both counts: $27 \\times 36 = 972$ ✓ and $729 + 1296 = 2025$ ✓, so the legs are $27$ and $36$ and the shorter is $27$ cm. Check a second, independent way via the hypotenuse pieces: they multiply to $21.6^2 = 466.56$ and sum to $45$, which forces $16.2$ and $28.8$ ($16.2 \\times 28.8 = 466.56$ ✓); the leg rule then delivers $\\sqrt{16.2 \\times 45} = \\sqrt{729} = 27$ ✓. (The choice $36$ cm is ANSWERING THE LONGER LEG ✗; $16.2$ cm is ANSWERING A HYPOTENUSE PIECE, the one beneath the shorter leg ✗; $22.5$ cm is HALVING THE HYPOTENUSE, which measures the median rather than either leg ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 6,
  sections: {
    '6.4': s64,
  },
}
