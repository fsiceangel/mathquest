// Introduction to Geometry chapter 10 — variations for section 10.2
// (Pythagoras — Not Just For Right Triangles).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed value was worked twice by routes that do not share arithmetic:
//    the squares comparison against a scaling of a known triple or a
//    difference-of-squares factoring, an obtuse verdict against the
//    right-angle yardstick sqrt(a^2 + b^2), a quadratic solution against
//    direct substitution, and every count rebuilt by explicit enumeration
//    of the candidates. Both routes must agree before a key is written down.
//  - Figures are coordinate-exact: each labeled side length matches the
//    drawn distance to within a thousandth, and the unknown side is dashed,
//    matching the base problem's convention.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution.

const s102 = [
  // s1 — classify a right triangle from its three sides.
  [
    {
      q: 'A carpenter saws a triangular gusset for a loft bed with sides of $12$ cm, $16$ cm, and $20$ cm. Which classification fits the gusset?',
      choices: ['acute', 'obtuse', 'right', 'the sides cannot close into a triangle'],
      answer: 2,
      solution:
        'Run the test on the longest side: $20^2 = 400$, while $12^2 + 16^2 = 144 + 256 = 400$. The squares balance exactly, so the angle opposite the $20$ cm side is exactly $90^\\circ$ — a right triangle ✓. Check a second, independent way by scaling: dividing every side by $4$ gives $3$-$4$-$5$, the most famous right triangle there is, and scaling never changes a triangle’s angles ✓. (The choice “acute” is COMPARING THE WRONG SIDE — testing $16^2 = 256$ against $12^2 + 20^2 = 544$ reads acute in every triangle ✗; “obtuse” is FORGETTING THE TIE CASE — obtuse needs $c^2$ to EXCEED the sum, and $400 = 400$ has no excess ✗; “no triangle” is MISFIRING THE TRIANGLE INEQUALITY — $12 + 16 = 28 > 20$, so the sides close up fine ✗.)',
    },
    {
      q: 'A metal shelf bracket is a triangle whose sides measure $8$, $15$, and $17$ inches. Is the bracket acute, right, or obtuse?',
      choices: ['right', 'obtuse', 'acute', 'the sides cannot close into a triangle'],
      answer: 0,
      solution:
        'Test the longest side: $17^2 = 289$, while $8^2 + 15^2 = 64 + 225 = 289$. Exact balance, so the angle opposite the $17$-inch side is exactly $90^\\circ$: a right triangle ✓. Check a second, independent way by factoring the gap: $17^2 - 15^2 = (17 - 15)(17 + 15) = 2 \\cdot 32 = 64 = 8^2$, which is the equality $8^2 + 15^2 = 17^2$ rebuilt without ever squaring $17$ ✓. (The choice “obtuse” is FORGETTING THE TIE CASE — $289 = 289$ leaves no excess for an obtuse verdict ✗; “acute” is COMPARING THE WRONG SIDE — $15^2 = 225$ against $8^2 + 17^2 = 353$ reads acute no matter what triangle you feed it ✗; “no triangle” is MISFIRING THE TRIANGLE INEQUALITY — $8 + 15 = 23 > 17$ ✗.)',
    },
    {
      q: 'Rope sides of $20$ m, $21$ m, and $29$ m are staked out to enclose a triangular play area. Classify the triangle they make.',
      choices: ['acute', 'right', 'obtuse', 'the sides cannot close into a triangle'],
      answer: 1,
      solution:
        'Test the longest rope: $29^2 = 841$, while $20^2 + 21^2 = 400 + 441 = 841$. The squares match exactly, so the angle opposite the $29$ m side is exactly $90^\\circ$ — a right triangle ✓. Check a second, independent way by factoring the gap: $29^2 - 21^2 = (29 - 21)(29 + 21) = 8 \\cdot 50 = 400 = 20^2$, the same balance reached with no big squares at all ✓. (The choice “acute” is COMPARING THE WRONG SIDE — $21^2 = 441$ against $20^2 + 29^2 = 1241$ is guaranteed to read acute ✗; “obtuse” is FORGETTING THE TIE CASE — the test demands a strict excess, and $841 = 841$ has none ✗; “no triangle” is MISFIRING THE TRIANGLE INEQUALITY — $20 + 21 = 41 > 29$ ✗.)',
    },
  ],
  // s2 — classify an obtuse triangle from its three sides.
  [
    {
      q: 'A jeweler solders three straight wires of lengths $4$, $7$, and $9$ into a triangular pendant frame. Is the frame acute, right, or obtuse?',
      choices: ['obtuse', 'acute', 'right', 'the sides cannot close into a triangle'],
      answer: 0,
      solution:
        'Test the longest wire: $9^2 = 81$ against $4^2 + 7^2 = 16 + 49 = 65$. Since $81 > 65$, the angle opposite the $9$ opens past $90^\\circ$ — obtuse ✓. Check a second, independent way with the right-angle yardstick: if the $4$ and $7$ met at exactly $90^\\circ$, the far side would be $\\sqrt{65} \\approx 8.06$; ours is $9$, longer, so the hinge between them must be open wider than a right angle ✓. (Existence is safe: $4 + 7 = 11 > 9$. The choice “acute” is COMPARING THE WRONG SIDE — $7^2 = 49$ against $4^2 + 9^2 = 97$ reads acute in every triangle ✗; “right” is STOPPING AT THE TRIANGLE CHECK — $4 + 7 > 9$ only proves the sides close up, not that any angle is $90^\\circ$ ✗; “no triangle” is MISREADING THE WINDOW — the third side only has to beat $9 - 7 = 2$, and $4$ does ✗.)',
    },
    {
      q: 'Three straight trails of lengths $6$ km, $7$ km, and $11$ km form a triangular loop around a lake. What kind of triangle is the loop?',
      choices: ['acute', 'right', 'the sides cannot close into a triangle', 'obtuse'],
      answer: 3,
      solution:
        'Test the longest trail: $11^2 = 121$ against $6^2 + 7^2 = 36 + 49 = 85$. Since $121 > 85$, the angle opposite the $11$ km trail passes $90^\\circ$ — obtuse ✓. Check a second, independent way with the right-angle yardstick: legs of $6$ and $7$ meeting at a right angle would span only $\\sqrt{85} \\approx 9.2$ km, and our far side is $11$ km — the corner between the short trails is forced wider than $90^\\circ$ ✓. (Existence is safe: $6 + 7 = 13 > 11$. The choice “acute” is COMPARING THE WRONG SIDE — $7^2 = 49$ against $36 + 121 = 157$ reads acute automatically ✗; “right” is STOPPING AT THE TRIANGLE CHECK — closing up is not the same as squaring up ✗; “no triangle” is MISREADING THE WINDOW — the check that matters, $6 + 7 = 13 > 11$, passes ✗.)',
    },
    {
      q: 'A stage crew braces a backdrop with a triangle of boards measuring $3$ ft, $8$ ft, and $9$ ft. Classify the brace.',
      choices: ['right', 'acute', 'obtuse', 'the sides cannot close into a triangle'],
      answer: 2,
      solution:
        'Test the longest board: $9^2 = 81$ against $3^2 + 8^2 = 9 + 64 = 73$. Since $81 > 73$, the angle opposite the $9$ ft board is obtuse ✓. Check a second, independent way with the right-angle yardstick: boards of $3$ and $8$ at a perfect right angle would reach only $\\sqrt{73} \\approx 8.54$ ft, and our third board is $9$ ft — the corner must open beyond $90^\\circ$ to let it fit ✓. (Existence is safe: $3 + 8 = 11 > 9$. The choice “right” is STOPPING AT THE TRIANGLE CHECK — $11 > 9$ says the brace exists, nothing more ✗; “acute” is COMPARING THE WRONG SIDE — $8^2 = 64$ against $9 + 81 = 90$ reads acute for every triangle ever built ✗; “no triangle” is MISREADING THE WINDOW — $9 - 8 = 1 < 3$, so the short board clears the gap ✗.)',
    },
  ],
  // s3 — classify an acute triangle from its three sides.
  [
    {
      q: 'A sandwich shop cuts a signature snack into a triangle with sides $6$, $7$, and $8$ cm. Is the triangle acute, right, or obtuse?',
      choices: ['obtuse', 'acute', 'right', 'the sides cannot close into a triangle'],
      answer: 1,
      solution:
        'Test the longest side: $8^2 = 64$ against $6^2 + 7^2 = 36 + 49 = 85$. Since $64 < 85$, the LARGEST angle is acute — and once the largest angle is acute, all three are, so the triangle is acute ✓. Check a second, independent way with the right-angle yardstick: legs of $6$ and $7$ at a right angle would span $\\sqrt{85} \\approx 9.2$ cm, and our far side is only $8$ — it falls short of the right-angle stretch, so the angle between the $6$ and $7$ stays under $90^\\circ$ ✓. (The choice “obtuse” is REVERSING THE COMPARISON — obtuse would need $64$ to be the LARGER number ✗; “right” is FORCING A TIE — $64 \\ne 85$, and only exact equality earns a right angle ✗; “no triangle” is MISFIRING THE TRIANGLE INEQUALITY — $6 + 7 = 13 > 8$ ✗.)',
    },
    {
      q: 'A civic garden is bounded by three straight paths of lengths $9$, $10$, and $11$ meters. What kind of triangle do the paths enclose?',
      choices: ['right', 'obtuse', 'acute', 'the sides cannot close into a triangle'],
      answer: 2,
      solution:
        'Test the longest path: $11^2 = 121$ against $9^2 + 10^2 = 81 + 100 = 181$. Since $121 < 181$, the largest angle is acute, so every angle is — an acute triangle ✓. Check a second, independent way with the right-angle yardstick: legs of $9$ and $10$ at a right angle would need a far side of $\\sqrt{181} \\approx 13.5$ m, and ours is only $11$ — well short, so the widest corner never reaches $90^\\circ$ ✓. (The choice “right” is FORCING A TIE — $121$ and $181$ are not equal ✗; “obtuse” is REVERSING THE COMPARISON — the big square must WIN for an obtuse verdict, and $121 < 181$ ✗; “no triangle” is MISFIRING THE TRIANGLE INEQUALITY — $9 + 10 = 19 > 11$ ✗.)',
    },
    {
      q: 'A pennant is sewn as a triangle with sides $5$, $6$, and $6$ inches. Classify it as acute, right, or obtuse.',
      choices: ['acute', 'right', 'the sides cannot close into a triangle', 'obtuse'],
      answer: 0,
      solution:
        'The longest side is a $6$ (the two longest tie, and either works): $6^2 = 36$ against $5^2 + 6^2 = 25 + 36 = 61$. Since $36 < 61$, the largest angle is acute, so the pennant is an acute triangle ✓. Check a second, independent way with the right-angle yardstick: sides of $5$ and $6$ at a right angle would span $\\sqrt{61} \\approx 7.8$ inches, and the remaining side is only $6$ — far below the right-angle stretch ✓. (The choice “right” is FORCING A TIE — $36 \\ne 61$ ✗; “obtuse” is REVERSING THE COMPARISON — $36$ would have to beat $61$ ✗; “no triangle” is MISFIRING THE TRIANGLE INEQUALITY — $5 + 6 = 11 > 6$ ✗.)',
    },
  ],
  // s4 — critique of running the test on a side that is not the longest.
  [
    {
      q: 'To decide whether the triangle with sides $8$, $9$, and $12$ is acute, right, or obtuse, Priya compares $9^2$ with $8^2 + 12^2$, gets $81 < 208$, and declares the triangle acute. What is the best evaluation of her work?',
      choices: [
        'Her comparison is valid because $9$ is the middle side, which balances the other two',
        'She should have compared $8^2$ with $9^2 + 12^2$ instead',
        'No comparison is needed: sides this close in length always make an acute triangle',
        'The test only means something on the longest side: compare $12^2 = 144$ with $8^2 + 9^2 = 145$',
      ],
      answer: 3,
      solution:
        'The angle opposite a shorter side is acute in EVERY triangle, so Priya’s comparison was settled before she squared a single number — it carries no information. The only angle that could reach or pass $90^\\circ$ faces the longest side, so the honest test is $12^2 = 144$ against $8^2 + 9^2 = 64 + 81 = 145$ ✓. Since $144 < 145$ — by a single unit! — the triangle really is acute, so her verdict survives on pure luck ✓. (The choice about the MIDDLE side is TRUSTING THE MIDDLE SIDE — no side but the longest can face a non-acute angle ✗; testing $8^2$ is STILL TESTING A SHORTER SIDE, the same empty exercise ✗; “sides this close are always acute” is JUDGING BY EYE — $5$, $5$, $8$ are close too, yet $64 > 50$ makes them obtuse ✗.)',
    },
    {
      q: 'Marcus checks the triangle with sides $6$, $9$, and $11$ by comparing $6^2$ with $9^2 + 11^2$. Since $36 < 202$, he reports an acute triangle. What went wrong, if anything?',
      choices: [
        'Nothing went wrong — the comparison may be run on any of the three sides',
        'He tested a short side, which always reads acute; the true test, $11^2 = 121$ versus $6^2 + 9^2 = 117$, shows the triangle is obtuse',
        'His only slip was arithmetic: $9^2 + 11^2$ is $200$, not $202$',
        'He tested the wrong short side; comparing $9^2$ with $6^2 + 11^2$ fixes the method',
      ],
      answer: 1,
      solution:
        'The classification test is only informative on the longest side, because a shorter side faces an acute angle in every triangle — Marcus’s comparison could never come out any other way. Run it properly: $11^2 = 121$ against $6^2 + 9^2 = 36 + 81 = 117$, and $121 > 117$, so the triangle is obtuse — his conclusion is wrong, not just his method ✓. Check the verdict a second, independent way: legs of $6$ and $9$ at a right angle would reach $\\sqrt{117} \\approx 10.8$, and the far side is $11$, longer, confirming an angle past $90^\\circ$ ✓. (The choice “any side works” is BELIEVING ANY SIDE WORKS — only the longest can face a non-acute angle ✗; the arithmetic complaint is BLAMING ARITHMETIC — $81 + 121 = 202$ was correct ✗; switching to $9^2$ is STILL TESTING A SHORTER SIDE ✗.)',
    },
    {
      q: 'A quiz asks whether the triangle with sides $7$, $8$, and $12$ is acute, right, or obtuse. Elena compares $8^2$ with $7^2 + 12^2$, finds $64 < 193$, and answers “acute.” Which critique is correct?',
      choices: [
        'Only the longest side can face a non-acute angle, so the honest test is $12^2 = 144$ against $7^2 + 8^2 = 113$ — the triangle is obtuse',
        'Her method is sound; every side gives the same verdict',
        'Her method fails only when the triangle is right, so here it is fine',
        'She only needed the triangle inequality: $7 + 8 > 12$ already proves the triangle is acute',
      ],
      answer: 0,
      solution:
        'A triangle has at most one angle of $90^\\circ$ or more, and it must sit opposite the longest side — so testing the $8$ was guaranteed to read acute and proves nothing. The real test: $12^2 = 144$ against $7^2 + 8^2 = 49 + 64 = 113$, and $144 > 113$, so the triangle is obtuse and Elena’s answer is wrong ✓. Check the verdict a second, independent way: sides $7$ and $8$ at a right angle would span $\\sqrt{113} \\approx 10.6$, and the actual far side is $12$ — the corner between the $7$ and $8$ has been pried open past $90^\\circ$ ✓. (The choice “every side gives the same verdict” is BELIEVING ANY SIDE WORKS ✗; “fails only when right” is EXCUSING THE SHORTCUT — the shortcut fails here, on an obtuse triangle ✗; the triangle-inequality claim is CONFUSING EXISTENCE WITH SHAPE — $7 + 8 = 15 > 12$ says the triangle exists, not what kind it is ✗.)',
    },
  ],
  // s5 — classify a right triangle built on a bigger Pythagorean triple.
  [
    {
      q: 'A zip line runs $41$ m from a platform to an anchor stake; a support cable of $40$ m and a post brace of $9$ m complete a triangle with it. Classify that triangle.',
      choices: ['right', 'acute', 'obtuse', 'the sides cannot close into a triangle'],
      answer: 0,
      solution:
        'Test the longest side: $41^2 = 1681$, while $9^2 + 40^2 = 81 + 1600 = 1681$. An exact tie, so the angle opposite the $41$ m run is exactly $90^\\circ$ — right ✓. Check a second, independent way by factoring the gap: $41^2 - 40^2 = (41 - 40)(41 + 40) = 1 \\cdot 81 = 81 = 9^2$, the same balance found with no four-digit squaring ✓. (The choice “acute” is COMPARING THE WRONG SIDE — $40^2 = 1600$ against $81 + 1681 = 1762$ reads acute for every triangle ✗; “obtuse” is TRUSTING THE PICTURE — a long, skinny triangle looks obtuse, but the squares say otherwise ✗; “no triangle” is TRUSTING THE PICTURE the other way — $9 + 40 = 49 > 41$, so the skinny shape still closes ✗.)',
    },
    {
      q: 'Surveyors stake a triangular plot whose sides come out to $12$ chains, $35$ chains, and $37$ chains. Is the plot acute, right, or obtuse?',
      choices: ['obtuse', 'acute', 'right', 'the sides cannot close into a triangle'],
      answer: 2,
      solution:
        'Test the longest side: $37^2 = 1369$, while $12^2 + 35^2 = 144 + 1225 = 1369$. The squares balance exactly, so the plot is a right triangle, with the right angle opposite the $37$-chain side ✓. Check a second, independent way by factoring the gap: $37^2 - 35^2 = (37 - 35)(37 + 35) = 2 \\cdot 72 = 144 = 12^2$ — the Pythagorean balance rebuilt from small numbers ✓. (The choice “acute” is COMPARING THE WRONG SIDE — $35^2 = 1225$ against $144 + 1369 = 1513$ is guaranteed to read acute ✗; “obtuse” is TRUSTING THE PICTURE — long and thin does not mean obtuse ✗; “no triangle” is MISFIRING THE TRIANGLE INEQUALITY — $12 + 35 = 47 > 37$ ✗.)',
    },
    {
      q: 'A kite frame is built from spars of $11$, $60$, and $61$ cm joined tip to tip. What kind of triangle is the frame?',
      choices: ['acute', 'obtuse', 'the sides cannot close into a triangle', 'right'],
      answer: 3,
      solution:
        'Test the longest spar: $61^2 = 3721$, while $11^2 + 60^2 = 121 + 3600 = 3721$. Exactly equal, so the angle opposite the $61$ cm spar is exactly $90^\\circ$: a right triangle ✓. Check a second, independent way by factoring the gap: $61^2 - 60^2 = (61 - 60)(61 + 60) = 1 \\cdot 121 = 121 = 11^2$, which is the same equality with none of the heavy squaring ✓. (The choice “acute” is COMPARING THE WRONG SIDE — $60^2 = 3600$ against $121 + 3721 = 3842$ reads acute automatically ✗; “obtuse” is TRUSTING THE PICTURE — the frame is extremely skinny, but skinny is not obtuse ✗; “no triangle” is TRUSTING THE PICTURE the other way — $11 + 60 = 71 > 61$, so the spars close up ✗.)',
    },
  ],
  // s6 — obtuse triangles that narrowly miss being right.
  [
    {
      q: 'A triangle has sides $7$, $9$, and $12$. Run the Pythagorean check-up: what is the verdict?',
      choices: ['acute', 'right', 'obtuse', 'the sides cannot close into a triangle'],
      answer: 2,
      solution:
        'Test the longest side: $12^2 = 144$ against $7^2 + 9^2 = 49 + 81 = 130$. Since $144 > 130$, the angle opposite the $12$ is past $90^\\circ$ — obtuse ✓. Check a second, independent way with the right-angle yardstick: legs of $7$ and $9$ at a right angle would span $\\sqrt{130} \\approx 11.4$, and the far side is $12$, longer, so the angle between the $7$ and $9$ is pried open beyond a right angle ✓. (Existence: $7 + 9 = 16 > 12$. The choice “right” is CALLING A NEAR MISS A TIE — $130$ is close to $144$, but the test demands exact equality ✗; “acute” is WRITING THE TEST BACKWARDS — acute needs $144$ to be the SMALLER number ✗; “no triangle” is MISFIRING THE TRIANGLE INEQUALITY — $16 > 12$ passes ✗.)',
    },
    {
      q: 'Three dowels of lengths $5$, $9$, and $11$ inches are glued into a triangular picture stand. Classify the triangle they form.',
      choices: ['acute', 'obtuse', 'the sides cannot close into a triangle', 'right'],
      answer: 1,
      solution:
        'Test the longest dowel: $11^2 = 121$ against $5^2 + 9^2 = 25 + 81 = 106$. Since $121 > 106$, the angle opposite the $11$-inch dowel is obtuse ✓. Check a second, independent way with the right-angle yardstick: dowels of $5$ and $9$ at exactly $90^\\circ$ would need a far side of $\\sqrt{106} \\approx 10.3$ inches, and ours is $11$ — the corner must open wider than a right angle to reach it ✓. (Existence: $5 + 9 = 14 > 11$. The choice “right” is CALLING A NEAR MISS A TIE — $106$ and $121$ are neighbors, not equals ✗; “acute” is WRITING THE TEST BACKWARDS — the big square won, so the verdict cannot be acute ✗; “no triangle” is MISREADING THE WINDOW — $11 - 9 = 2 < 5$, so the short dowel clears the gap ✗.)',
    },
    {
      q: 'A triangle has sides $10$, $11$, and $15$. A student suspects it is right because the numbers look close to a familiar triple. What is the correct classification?',
      choices: ['right', 'acute', 'the sides cannot close into a triangle', 'obtuse'],
      answer: 3,
      solution:
        'Test the longest side: $15^2 = 225$ against $10^2 + 11^2 = 100 + 121 = 221$. Since $225 > 221$ — by just $4$! — the angle opposite the $15$ sneaks past $90^\\circ$, and the triangle is obtuse ✓. Check a second, independent way with the right-angle yardstick: legs of $10$ and $11$ at a right angle would span $\\sqrt{221} \\approx 14.87$, and the far side is $15$, a hair longer — a hair is all it takes ✓. (Existence: $10 + 11 = 21 > 15$. The choice “right” is CALLING A NEAR MISS A TIE — the check-up is exact, and $221 \\ne 225$ ✗; “acute” is WRITING THE TEST BACKWARDS — acute needs the long side’s square to LOSE ✗; “no triangle” is MISFIRING THE TRIANGLE INEQUALITY — $21 > 15$ ✗.)',
    },
  ],
  // s7 — figure: two sides given, dashed third side of integer length n, make it right.
  [
    {
      q: 'In the figure, $AB = 12$ and $AC = 5$, and the dashed side $\\overline{CB}$ must have integer length $n$. Which value of $n$ makes triangle $ABC$ a right triangle?',
      fig: {
        view: [-1.4, -1, 13.4, 5.9],
        elems: [
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [0, 0], b: [1, 4.9] },
          { t: 'seg', a: [12, 0], b: [1, 4.9], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [1, 4.9], label: 'C', dx: 0, dy: -12 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [0.5, 2.45], text: '5', dx: -12, dy: 0 },
          { t: 'label', p: [6.5, 2.45], text: 'n', dx: 12, dy: -6 },
        ],
      },
      choices: ['$11$', '$13$', '$15$', '$17$'],
      answer: 1,
      solution:
        'If $n$ is the hypotenuse, then $n^2 = 5^2 + 12^2 = 25 + 144 = 169$, so $n = 13$ ✓. Check a second, independent way by clearing the other case and substituting back: if $12$ were the hypotenuse instead, $n^2 = 144 - 25 = 119$, which sits between $10^2 = 100$ and $11^2 = 121$ — no integer; and $5$-$12$-$13$ verifies directly, $25 + 144 = 169 = 13^2$ ✓. (The choice $17$ is ADDING THE LEGS, $5 + 12$, instead of adding their squares ✗; $11$ is ROUNDING THE LEG CASE — $\\sqrt{119} \\approx 10.9$ is not an integer, and $11^2 = 121 \\ne 119$ ✗; $15$ is BORROWING THE $9$-$12$-$15$ TRIPLE, whose legs are not ours ✗.)',
    },
    {
      q: 'Triangle $DEF$ in the figure has $DE = 12$ and $DF = 9$, and the dashed side $\\overline{EF}$ has integer length $n$. For which $n$ is the triangle right?',
      fig: {
        view: [-1.4, -1, 13.4, 9.9],
        elems: [
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [0, 0], b: [2, 8.775] },
          { t: 'seg', a: [12, 0], b: [2, 8.775], dash: true },
          { t: 'point', p: [0, 0], label: 'D', dx: -10, dy: 8 },
          { t: 'point', p: [12, 0], label: 'E', dx: 10, dy: 8 },
          { t: 'point', p: [2, 8.775], label: 'F', dx: 0, dy: -12 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [1, 4.39], text: '9', dx: -12, dy: 0 },
          { t: 'label', p: [7, 4.39], text: 'n', dx: 12, dy: -6 },
        ],
      },
      choices: ['$15$', '$13$', '$17$', '$21$'],
      answer: 0,
      solution:
        'If $n$ is the hypotenuse, then $n^2 = 9^2 + 12^2 = 81 + 144 = 225$, so $n = 15$ ✓. Check a second, independent way by clearing the other case and substituting back: if $12$ were the hypotenuse, $n^2 = 144 - 81 = 63$, which sits between $7^2 = 49$ and $8^2 = 64$ — no integer there; and $9$-$12$-$15$ is $3$-$4$-$5$ scaled by $3$, so $81 + 144 = 225 = 15^2$ checks ✓. (The choice $21$ is ADDING THE LEGS, $9 + 12$ ✗; $13$ is BORROWING THE $5$-$12$-$13$ TRIPLE — the $12$ matches but the other leg is $9$, not $5$ ✗; $17$ is BORROWING THE $8$-$15$-$17$ TRIPLE, which shares no leg with this triangle ✗.)',
    },
    {
      q: 'In the figure, $XY = 15$ and $XZ = 8$, while the dashed side $\\overline{YZ}$ must take an integer length $n$. Find the $n$ that makes triangle $XYZ$ right.',
      fig: {
        view: [-1.6, -1, 16.6, 8.9],
        elems: [
          { t: 'seg', a: [0, 0], b: [15, 0] },
          { t: 'seg', a: [0, 0], b: [1.5, 7.858] },
          { t: 'seg', a: [15, 0], b: [1.5, 7.858], dash: true },
          { t: 'point', p: [0, 0], label: 'X', dx: -10, dy: 8 },
          { t: 'point', p: [15, 0], label: 'Y', dx: 10, dy: 8 },
          { t: 'point', p: [1.5, 7.858], label: 'Z', dx: 0, dy: -12 },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [0.75, 3.93], text: '8', dx: -12, dy: 0 },
          { t: 'label', p: [8.25, 3.93], text: 'n', dx: 12, dy: -6 },
        ],
      },
      choices: ['$13$', '$15$', '$17$', '$23$'],
      answer: 2,
      solution:
        'If $n$ is the hypotenuse, then $n^2 = 8^2 + 15^2 = 64 + 225 = 289$, so $n = 17$ ✓. Check a second, independent way by clearing the other case and substituting back: if $15$ were the hypotenuse, $n^2 = 225 - 64 = 161$, which sits between $12^2 = 144$ and $13^2 = 169$ — no integer; and $8$-$15$-$17$ verifies directly, $64 + 225 = 289 = 17^2$ ✓. (The choice $23$ is ADDING THE LEGS, $8 + 15$ ✗; $13$ is ROUNDING THE LEG CASE — $\\sqrt{161} \\approx 12.7$ rounds to $13$, but $169 \\ne 161$ ✗; $15$ is REUSING A GIVEN SIDE as the answer ✗.)',
    },
  ],
  // s8 — count the integers n, with n the longest side, that make the triangle obtuse.
  [
    {
      q: 'Rods of length $7$ and $10$ are joined at a hinge, and a third rod of integer length $n$ — longer than both — closes the triangle. For how many values of $n$ is the triangle obtuse?',
      choices: ['$3$', '$5$', '$6$', '$4$'],
      answer: 3,
      solution:
        'For $n$ to be the longest side, $n \\ge 11$; the triangle inequality caps it at $n < 7 + 10 = 17$. Candidates: $n = 11, 12, 13, 14, 15, 16$. Obtuse needs $n^2 > 7^2 + 10^2 = 149$; square each candidate: $121$ ✗, $144$ ✗, $169$ ✓, $196$ ✓, $225$ ✓, $256$ ✓ — so $n \\in \\{13, 14, 15, 16\\}$, four values ✓. Check a second, independent way from the threshold: $\\sqrt{149} \\approx 12.2$, so the obtuse integers start at $13$ and run to $16$, and $16 - 13 + 1 = 4$ ✓. (The choice $6$ is COUNTING EVERY CANDIDATE, skipping the squares test entirely ✗; $5$ is INCLUDING THE FLAT CASE $n = 17$, where $7 + 10 = 17$ lies flat ✗; $3$ is THROWING OUT $n = 13$ as if it were the right-triangle value — the right-triangle length here is $\\sqrt{149}$, not $13$ ✗.)',
    },
    {
      q: 'A triangle must be built with sides $8$, $12$, and an integer $n$ that is strictly the longest of the three. How many choices of $n$ give an obtuse triangle?',
      choices: ['$4$', '$7$', '$5$', '$6$'],
      answer: 2,
      solution:
        'Longest means $n \\ge 13$, and the triangle inequality demands $n < 8 + 12 = 20$. Candidates: $n = 13, 14, 15, 16, 17, 18, 19$. Obtuse needs $n^2 > 8^2 + 12^2 = 208$; square each: $169$ ✗, $196$ ✗, $225$ ✓, $256$ ✓, $289$ ✓, $324$ ✓, $361$ ✓ — so $n \\in \\{15, 16, 17, 18, 19\\}$, five values ✓. Check a second, independent way from the threshold: $\\sqrt{208} \\approx 14.4$, so the count runs from $15$ to $19$, and $19 - 15 + 1 = 5$ ✓. (The choice $7$ is COUNTING EVERY CANDIDATE without the squares test ✗; $6$ is INCLUDING $n = 14$ — an off-by-one at the boundary, since $196 < 208$ ✗; $4$ is DROPPING $n = 19$ by misreading $n < 20$ as $n \\le 18$ ✗.)',
    },
    {
      q: 'Two legs of a folding easel measure $10$ and $13$; a crossbar of integer length $n$, longer than either leg, completes a triangle with them. Count the values of $n$ for which that triangle is obtuse.',
      choices: ['$6$', '$9$', '$5$', '$7$'],
      answer: 0,
      solution:
        'Longest means $n \\ge 14$, and the triangle inequality gives $n < 10 + 13 = 23$. Candidates: $n = 14, 15, 16, 17, 18, 19, 20, 21, 22$. Obtuse needs $n^2 > 10^2 + 13^2 = 269$; square each: $196$ ✗, $225$ ✗, $256$ ✗, $289$ ✓, $324$ ✓, $361$ ✓, $400$ ✓, $441$ ✓, $484$ ✓ — so $n \\in \\{17, 18, 19, 20, 21, 22\\}$, six values ✓. Check a second, independent way from the threshold: $\\sqrt{269} \\approx 16.4$, so the run is $17$ through $22$, and $22 - 17 + 1 = 6$ ✓. (The choice $9$ is COUNTING EVERY CANDIDATE ✗; $7$ is INCLUDING $n = 16$ — off-by-one at the boundary, since $256 < 269$ ✗; $5$ is DROPPING $n = 22$ by misreading $n < 23$ as $n \\le 21$ ✗.)',
    },
  ],
  // s9 — count the integers n that make the triangle acute (both cases).
  [
    {
      q: 'For how many integers $n$ do the lengths $8$, $10$, and $n$ form an acute triangle?',
      choices: ['$7$', '$6$', '$8$', '$5$'],
      answer: 1,
      solution:
        'Triangle inequality first: $2 < n < 18$. Split by which side is longest. If $n \\le 10$, the longest side is $10$: acute needs $100 < 64 + n^2$, so $n^2 > 36$ — and $n = 6$ gives $36 = 36$, the right triangle $6$-$8$-$10$, so the acute values are $n = 7, 8, 9, 10$. If $n \\ge 11$, acute needs $n^2 < 64 + 100 = 164$: $11^2 = 121$ ✓, $12^2 = 144$ ✓, $13^2 = 169$ ✗, so $n = 11, 12$. Full list: $\\{7, 8, 9, 10, 11, 12\\}$ — six integers ✓. Check the count a second, independent way: the acute values form one unbroken run from $7$ to $12$, and $12 - 7 + 1 = 6$; neither boundary hides a right triangle, since $n = 6$ was already excluded and $164$ is not a perfect square ✓. (The choice $7$ is COUNTING THE RIGHT-TRIANGLE VALUE $n = 6$ ✗; $8$ is INCLUDING BOTH BOUNDARY VALUES, $6$ and $13$, one right and one obtuse ✗; $5$ is DROPPING $n = 12$ by misreading $\\sqrt{164} \\approx 12.8$ ✗.)',
    },
    {
      q: 'A triangle is to have sides $12$, $16$, and an integer $n$. How many values of $n$ make every angle of the triangle acute?',
      choices: ['$8$', '$10$', '$3$', '$9$'],
      answer: 3,
      solution:
        'Triangle inequality first: $4 < n < 28$. Split by the longest side. If $n \\le 16$, the longest side is $16$: acute needs $256 < 144 + n^2$, so $n^2 > 112$ — $10^2 = 100$ ✗ but $11^2 = 121$ ✓, giving $n = 11, 12, 13, 14, 15, 16$, six values. If $n \\ge 17$, acute needs $n^2 < 144 + 256 = 400$, so $n < 20$: $n = 17, 18, 19$, three values — and $n = 20$ is exactly the right triangle $12$-$16$-$20$, not acute. Full list: $\\{11, 12, \\ldots, 19\\}$ — nine integers ✓. Check the count a second, independent way: one unbroken run from $11$ to $19$ gives $19 - 11 + 1 = 9$, and the only perfect-square boundary, $400 = 20^2$, was correctly left out ✓. (The choice $10$ is COUNTING THE RIGHT-TRIANGLE VALUE $n = 20$ ✗; $8$ is DROPPING $n = 11$ — an off-by-one at $\\sqrt{112} \\approx 10.6$ ✗; $3$ is FORGETTING THE CASE where $16$ stays the longest side ✗.)',
    },
    {
      q: 'Count the integers $n$ for which a triangle with sides $7$, $11$, and $n$ is acute.',
      choices: ['$3$', '$7$', '$5$', '$6$'],
      answer: 2,
      solution:
        'Triangle inequality first: $4 < n < 18$. Split by the longest side. If $n \\le 11$, the longest side is $11$: acute needs $121 < 49 + n^2$, so $n^2 > 72$ — $8^2 = 64$ ✗ but $9^2 = 81$ ✓, giving $n = 9, 10, 11$, three values. If $n \\ge 12$, acute needs $n^2 < 49 + 121 = 170$: $12^2 = 144$ ✓, $13^2 = 169$ ✓ (just under!), $14^2 = 196$ ✗, so $n = 12, 13$, two values. Full list: $\\{9, 10, 11, 12, 13\\}$ — five integers ✓. Check the count a second, independent way: one unbroken run from $9$ to $13$ gives $13 - 9 + 1 = 5$, and no right triangle hides at a boundary because neither $72$ nor $170$ is a perfect square ✓. (The choice $3$ is STOPPING AFTER THE FIRST CASE and never letting $n$ be the longest side ✗; $7$ is INCLUDING BOTH OFF-BY-ONE NEIGHBORS, $8$ and $14$ ✗; $6$ is INCLUDING $n = 8$, even though $64 < 72$ makes that triangle obtuse ✗.)',
    },
  ],
  // s10 — sides n, n+k, n+2k: solve a quadratic for the right triangle.
  [
    {
      q: 'The sides of a triangle measure $n$, $n + 2$, and $n + 4$ for a positive integer $n$, and the triangle is right. What is $n$?',
      choices: ['$6$', '$2$', '$8$', '$10$'],
      answer: 0,
      solution:
        'The longest side, $n + 4$, must be the hypotenuse: $(n + 4)^2 = n^2 + (n + 2)^2$. Expanding, $n^2 + 8n + 16 = 2n^2 + 4n + 4$, so $n^2 - 4n - 12 = 0$, which factors as $(n - 6)(n + 2) = 0$ — and since a side length is positive, $n = 6$ ✓. Check a second, independent way by substitution: the sides become $6$, $8$, $10$, and $6^2 + 8^2 = 36 + 64 = 100 = 10^2$, a perfect balance (it is $3$-$4$-$5$ doubled) ✓. (The choice $2$ is SIGN-FLIPPING THE REJECTED ROOT $n = -2$ ✗; $8$ is REPORTING THE MIDDLE SIDE, $n + 2$, instead of $n$ ✗; $10$ is REPORTING THE HYPOTENUSE, $n + 4$ ✗.)',
    },
    {
      q: 'Three sticks of lengths $n$, $n + 3$, and $n + 6$ form a right triangle. Solve for the positive value of $n$.',
      choices: ['$3$', '$9$', '$12$', '$15$'],
      answer: 1,
      solution:
        'The hypotenuse is the longest stick, $n + 6$: $(n + 6)^2 = n^2 + (n + 3)^2$. Expanding, $n^2 + 12n + 36 = 2n^2 + 6n + 9$, so $n^2 - 6n - 27 = 0$, which factors as $(n - 9)(n + 3) = 0$ — the positive root is $n = 9$ ✓. Check a second, independent way by substitution: the sticks become $9$, $12$, $15$, and $9^2 + 12^2 = 81 + 144 = 225 = 15^2$ — a $3$-$4$-$5$ triangle scaled by $3$ ✓. (The choice $3$ is SIGN-FLIPPING THE REJECTED ROOT $n = -3$ ✗; $12$ is REPORTING THE MIDDLE SIDE, $n + 3$ ✗; $15$ is REPORTING THE HYPOTENUSE, $n + 6$ ✗.)',
    },
    {
      q: 'A right triangle has sides of lengths $n$, $n + 7$, and $n + 8$ for some positive number $n$. Find $n$.',
      choices: ['$3$', '$12$', '$13$', '$5$'],
      answer: 3,
      solution:
        'The longest side, $n + 8$, is the hypotenuse: $(n + 8)^2 = n^2 + (n + 7)^2$. Expanding, $n^2 + 16n + 64 = 2n^2 + 14n + 49$, so $n^2 - 2n - 15 = 0$, which factors as $(n - 5)(n + 3) = 0$ — lengths are positive, so $n = 5$ ✓. Check a second, independent way by substitution: the sides become $5$, $12$, $13$, and $5^2 + 12^2 = 25 + 144 = 169 = 13^2$, exactly right ✓. (The choice $3$ is SIGN-FLIPPING THE REJECTED ROOT $n = -3$ ✗; $12$ is REPORTING THE MIDDLE SIDE, $n + 7$ ✗; $13$ is REPORTING THE HYPOTENUSE, $n + 8$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 10,
  sections: {
    '10.2': s102,
  },
}
