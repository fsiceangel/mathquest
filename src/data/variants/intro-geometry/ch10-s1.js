// Introduction to Geometry chapter 10 — variations for section 10.1 (Sides and Angles of a Triangle).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed ordering was worked twice by routes that do not share steps:
//    the opposite-partner pairing table (each angle matched to the one side that
//    misses its vertex) against an elimination or endpoint check, and every
//    solution rebuilds its 180-degree angle sum where angles are in play.
//  - Triangles with marked angles are drawn from those angles: one side is laid
//    on the x-axis and the apex is placed by the law of sines, so every numeric
//    angle label matches the drawn angle to well under a degree. Triangles with
//    marked side lengths are drawn from those lengths (apex from the two circle
//    radii), so labeled sides are true to scale.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution.

const s101 = [
  // s1 — three angles given, pick the longest side.
  [
    {
      q: 'A sailmaker cuts a jib in the shape of triangle $ABC$ shown, where $\\angle A = 75^\\circ$, $\\angle B = 45^\\circ$, and $\\angle C = 60^\\circ$. The edge that gets the reinforced seam is the longest one. Which edge is it?',
      fig: {
        view: [-0.9, -0.8, 4.9, 4.0],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [0.85, 3.15]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [0.85, 3.15], label: 'C', dx: 0, dy: -12 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [0.85, 3.15], r: 0.55, label: '75' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [0.85, 3.15], r: 0.8, label: '45' },
          { t: 'angle', at: [0.85, 3.15], from: [4, 0], to: [0, 0], r: 0.6, label: '60' },
        ],
      },
      choices: ['$\\overline{AB}$', '$\\overline{AC}$', '$\\overline{BC}$', 'it cannot be determined from angles alone'],
      answer: 2,
      solution:
        'Rebuild the angle sum first: $75^\\circ + 45^\\circ + 60^\\circ = 180^\\circ$ ✓. Now pair each angle with the side it faces — the one side that never touches its vertex: $\\angle A \\leftrightarrow \\overline{BC}$, $\\angle B \\leftrightarrow \\overline{AC}$, $\\angle C \\leftrightarrow \\overline{AB}$. The largest angle is $\\angle A = 75^\\circ$, so the longest edge is its partner, $\\overline{BC}$ ✓. Check a second, independent way by elimination: $\\overline{AC}$ faces only $45^\\circ$ and $\\overline{AB}$ faces only $60^\\circ$, and a side facing a smaller angle can never beat the side facing the biggest one ✓. (The choice $\\overline{AB}$ is PAIRING THE BIG ANGLE WITH A SIDE THAT TOUCHES ITS VERTEX ✗; $\\overline{AC}$ is MATCHING THE SMALLEST ANGLE INSTEAD OF THE LARGEST ✗; the last choice is FORGETTING THAT ANGLES ALONE FIX THE SIDE ORDER ✗.)',
    },
    {
      q: 'A landscaper stakes out a triangular flower bed $ABC$, shown with $\\angle A = 35^\\circ$, $\\angle B = 85^\\circ$, and $\\angle C = 60^\\circ$. Along which side of the bed will she need the most edging?',
      fig: {
        view: [-0.9, -0.8, 4.9, 3.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [3.77, 2.64]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [3.77, 2.64], label: 'C', dx: 6, dy: -8 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [3.77, 2.64], r: 0.9, label: '35' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [3.77, 2.64], r: 0.5, label: '85' },
          { t: 'angle', at: [3.77, 2.64], from: [4, 0], to: [0, 0], r: 0.6, label: '60' },
        ],
      },
      choices: ['$\\overline{AC}$', '$\\overline{AB}$', '$\\overline{BC}$', 'all three sides are equally long'],
      answer: 0,
      solution:
        'Rebuild the angle sum: $35^\\circ + 85^\\circ + 60^\\circ = 180^\\circ$ ✓. Pair the partners: $\\angle A \\leftrightarrow \\overline{BC}$, $\\angle B \\leftrightarrow \\overline{AC}$, $\\angle C \\leftrightarrow \\overline{AB}$. The largest angle is $\\angle B = 85^\\circ$, so the longest side is its partner, $\\overline{AC}$ ✓. Check a second, independent way by elimination: $\\overline{AB}$ faces only $60^\\circ$ and $\\overline{BC}$ faces only $35^\\circ$, so neither can top the side facing $85^\\circ$ ✓. (The choice $\\overline{AB}$ is PAIRING THE BIG ANGLE WITH A SIDE THAT TOUCHES VERTEX $B$ ✗; $\\overline{BC}$ is MATCHING THE SMALLEST ANGLE INSTEAD OF THE LARGEST ✗; equal sides would need EQUAL ANGLES ALL AROUND, and these three are far from equal ✗.)',
    },
    {
      q: 'A welder inspects the steel gusset $ABC$ shown, where $\\angle A = 70^\\circ$, $\\angle B = 42^\\circ$, and $\\angle C = 68^\\circ$. Which edge of the gusset is the longest?',
      fig: {
        view: [-0.9, -0.8, 4.9, 3.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [0.99, 2.71]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [0.99, 2.71], label: 'C', dx: 0, dy: -12 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [0.99, 2.71], r: 0.55, label: '70' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [0.99, 2.71], r: 0.85, label: '42' },
          { t: 'angle', at: [0.99, 2.71], from: [4, 0], to: [0, 0], r: 0.55, label: '68' },
        ],
      },
      choices: ['$\\overline{AC}$', '$\\overline{BC}$', '$\\overline{AB}$', 'the $70^\\circ$ and $68^\\circ$ angles are too close to call'],
      answer: 1,
      solution:
        'Rebuild the angle sum: $70^\\circ + 42^\\circ + 68^\\circ = 180^\\circ$ ✓. Pair the partners: $\\angle A \\leftrightarrow \\overline{BC}$, $\\angle B \\leftrightarrow \\overline{AC}$, $\\angle C \\leftrightarrow \\overline{AB}$. The largest angle is $\\angle A = 70^\\circ$ — it edges out $68^\\circ$ — so the longest edge is its partner, $\\overline{BC}$ ✓. Check a second, independent way by elimination: $\\overline{AB}$ faces $68^\\circ$ and $\\overline{AC}$ faces $42^\\circ$, both smaller than $70^\\circ$, so both lose ✓. (The choice $\\overline{AB}$ is GRABBING THE RUNNER-UP ANGLE’S PARTNER ✗; $\\overline{AC}$ is MATCHING THE SMALLEST ANGLE ✗; "too close to call" is THINKING A $2^\\circ$ GAP CANNOT ORDER SIDES — even $1^\\circ$ decides ✗.)',
    },
  ],
  // s2 — three sides given, pick the largest angle.
  [
    {
      q: 'A courier’s three stops $D$, $E$, and $F$ form a triangle, with $DE = 8$ km, $EF = 5$ km, and $DF = 7$ km of straight road between them. Which angle of triangle $DEF$ is the largest?',
      choices: ['$\\angle D$', '$\\angle E$', '$\\angle F$', 'it cannot be determined from the distances'],
      answer: 2,
      solution:
        'Pair each angle with the side it faces: $\\angle D \\leftrightarrow EF = 5$, $\\angle E \\leftrightarrow DF = 7$, $\\angle F \\leftrightarrow DE = 8$. The longest side is $DE = 8$, so the largest angle is its partner, $\\angle F$ ✓. Check a second, independent way with the full ordering: $5 < 7 < 8$ forces $\\angle D < \\angle E < \\angle F$, and the top of that list is $\\angle F$ ✓. (The choices $\\angle D$ and $\\angle E$ are SITTING ON THE LONGEST SIDE instead of across from it — both vertices touch $\\overline{DE}$ ✗; the last choice is FORGETTING THAT THREE SIDES PIN DOWN THE WHOLE TRIANGLE, angles included ✗.)',
    },
    {
      q: 'A triangular shelf bracket $DEF$ is machined with $DE = 9$ cm, $EF = 6$ cm, and $DF = 7$ cm. At which corner does the bracket open widest — that is, which angle is the largest?',
      choices: ['$\\angle F$', '$\\angle D$', '$\\angle E$', 'the three angles are all equal'],
      answer: 0,
      solution:
        'Pair each angle with the side it faces: $\\angle D \\leftrightarrow EF = 6$, $\\angle E \\leftrightarrow DF = 7$, $\\angle F \\leftrightarrow DE = 9$. The longest side is $DE = 9$, so the widest corner is its partner, $\\angle F$ ✓. Check a second, independent way with the full ordering: $6 < 7 < 9$ forces $\\angle D < \\angle E < \\angle F$, so $\\angle F$ tops the list ✓. (The choices $\\angle D$ and $\\angle E$ are SITTING ON THE LONGEST SIDE instead of across from it ✗; equal angles would need EQUAL SIDES ALL AROUND, and $6$, $7$, $9$ are three different lengths ✗.)',
    },
    {
      q: 'Three park benches $D$, $E$, and $F$ are joined by straight gravel paths of lengths $DE = 6$, $EF = 8$, and $DF = 5$. Which angle of triangle $DEF$ is the largest?',
      choices: ['$\\angle E$', '$\\angle F$', 'it cannot be determined without the angles', '$\\angle D$'],
      answer: 3,
      solution:
        'Pair each angle with the side it faces: $\\angle D \\leftrightarrow EF = 8$, $\\angle E \\leftrightarrow DF = 5$, $\\angle F \\leftrightarrow DE = 6$. The longest path is $EF = 8$, so the largest angle is its partner, $\\angle D$ ✓. Check a second, independent way with the full ordering: $5 < 6 < 8$ forces $\\angle E < \\angle F < \\angle D$, and $\\angle D$ tops the list ✓. (The choices $\\angle E$ and $\\angle F$ are SITTING ON THE LONGEST SIDE instead of across from it — both touch $\\overline{EF}$ ✗; the "cannot be determined" choice is FORGETTING THAT THE SIDES DETERMINE EVERY ANGLE ✗.)',
    },
  ],
  // s3 — two equal angles force two equal sides (isosceles converse).
  [
    {
      q: 'In triangle $PQR$, a protractor shows that the angles at $P$ and $Q$ have exactly the same measure. Which two sides of the triangle are forced to have the same length?',
      choices: ['$PQ = QR$', '$QR = PR$', '$PQ = PR$', 'no pair of sides is forced to be equal'],
      answer: 1,
      solution:
        'Equal angles force equal opposite partners. Pair them: $\\angle P \\leftrightarrow \\overline{QR}$ and $\\angle Q \\leftrightarrow \\overline{PR}$ — each side skips its angle’s vertex. Since $\\angle P = \\angle Q$, their partners must match: $QR = PR$ ✓. Check a second, independent way with the isosceles picture: $P$ and $Q$ are the two equal base angles, so the two legs rise from them and meet at the apex $R$ — and the legs from the base to $R$ are exactly $\\overline{QR}$ and $\\overline{PR}$ ✓. (The choices $PQ = QR$ and $PQ = PR$ each PAIR AN ANGLE WITH A SIDE THAT TOUCHES ITS OWN VERTEX ✗; the last choice DENIES THE CONVERSE — equal angles always force equal sides ✗.)',
    },
    {
      q: 'A carpenter checks a triangular roof truss $KLM$ and finds $\\angle L = \\angle M$. Without measuring, she knows two of the truss members already match in length. Which two?',
      choices: ['$KL = KM$', '$KL = LM$', '$LM = KM$', 'the sides cannot be compared without lengths'],
      answer: 0,
      solution:
        'Equal angles force equal opposite partners. Pair them: $\\angle L \\leftrightarrow \\overline{KM}$ and $\\angle M \\leftrightarrow \\overline{KL}$. Since $\\angle L = \\angle M$, their partners must match: $KL = KM$ ✓. Check a second, independent way with the isosceles picture: the equal angles at $L$ and $M$ are the base angles, so the two legs climb from the base $\\overline{LM}$ to the apex $K$ — and those legs are $\\overline{KL}$ and $\\overline{KM}$ ✓. (The choices $KL = LM$ and $LM = KM$ each PAIR AN ANGLE WITH A SIDE THAT TOUCHES ITS OWN VERTEX ✗; the last choice IGNORES THAT EQUAL ANGLES ALONE FORCE THE MATCH, no ruler needed ✗.)',
    },
    {
      q: 'Triangle $RST$ is drawn so that $\\angle R$ and $\\angle T$ are congruent. Which equation about its side lengths must be true?',
      choices: ['$RT = ST$', '$RS = RT$', '$RS = ST$', 'no two sides must match'],
      answer: 2,
      solution:
        'Equal angles force equal opposite partners. Pair them: $\\angle R \\leftrightarrow \\overline{ST}$ and $\\angle T \\leftrightarrow \\overline{RS}$ — each partner side misses its angle’s vertex. Since $\\angle R = \\angle T$, the partners must match: $RS = ST$ ✓. Check a second, independent way with the isosceles picture: $R$ and $T$ carry the equal base angles, so the legs meet at the apex $S$, and the legs are $\\overline{RS}$ and $\\overline{ST}$ ✓. (The choices $RT = ST$ and $RS = RT$ each DRAG IN THE BASE $\\overline{RT}$, which touches both equal angles and is the one side NOT forced to match ✗; the last choice DENIES THE CONVERSE ✗.)',
    },
  ],
  // s4 — three angles given, order all three sides.
  [
    {
      q: 'A triangular plaza $ABC$ is shown, with $\\angle A = 58^\\circ$, $\\angle B = 63^\\circ$, and $\\angle C = 59^\\circ$. Which list orders its three sides from shortest to longest?',
      fig: {
        view: [-0.9, -0.8, 4.9, 4.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2.2, 3.53]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [2.2, 3.53], label: 'C', dx: 4, dy: -10 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [2.2, 3.53], r: 0.7, label: '58' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [2.2, 3.53], r: 0.65, label: '63' },
          { t: 'angle', at: [2.2, 3.53], from: [4, 0], to: [0, 0], r: 0.55, label: '59' },
        ],
      },
      choices: ['$BC < AB < AC$', '$AC < AB < BC$', '$AB < AC < BC$', '$BC < AC < AB$'],
      answer: 0,
      solution:
        'Rebuild the angle sum: $58^\\circ + 63^\\circ + 59^\\circ = 180^\\circ$ ✓. Order the angles: $\\angle A = 58^\\circ < \\angle C = 59^\\circ < \\angle B = 63^\\circ$. Now swap each angle for its opposite partner: $\\angle A \\leftrightarrow \\overline{BC}$, $\\angle C \\leftrightarrow \\overline{AB}$, $\\angle B \\leftrightarrow \\overline{AC}$, so $BC < AB < AC$ ✓. Check a second, independent way with the endpoints: the shortest side must face $58^\\circ$, which is $\\overline{BC}$, and the longest must face $63^\\circ$, which is $\\overline{AC}$ — only one listed ordering starts at $BC$ and ends at $AC$ ✓. (The choice $AC < AB < BC$ is REVERSING THE MATCH, sending big angles to small sides ✗; $AB < AC < BC$ is PAIRING EACH ANGLE WITH AN ADJACENT SIDE instead of the opposite one ✗; $BC < AC < AB$ is SWAPPING THE PARTNERS OF THE NEAR-TIE $58^\\circ$ and $59^\\circ$ ✗.)',
    },
    {
      q: 'A stained-glass pane is the triangle $ABC$ shown, with $\\angle A = 72^\\circ$, $\\angle B = 51^\\circ$, and $\\angle C = 57^\\circ$. Rank the lengths of lead strip needed for its three edges, from shortest to longest.',
      fig: {
        view: [-0.9, -0.8, 4.9, 4.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [1.15, 3.53]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [1.15, 3.53], label: 'C', dx: 0, dy: -12 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [1.15, 3.53], r: 0.55, label: '72' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [1.15, 3.53], r: 0.75, label: '51' },
          { t: 'angle', at: [1.15, 3.53], from: [4, 0], to: [0, 0], r: 0.6, label: '57' },
        ],
      },
      choices: ['$BC < AB < AC$', '$AB < AC < BC$', '$BC < AC < AB$', '$AC < AB < BC$'],
      answer: 3,
      solution:
        'Rebuild the angle sum: $72^\\circ + 51^\\circ + 57^\\circ = 180^\\circ$ ✓. Order the angles: $\\angle B = 51^\\circ < \\angle C = 57^\\circ < \\angle A = 72^\\circ$. Swap each for its opposite partner: $\\angle B \\leftrightarrow \\overline{AC}$, $\\angle C \\leftrightarrow \\overline{AB}$, $\\angle A \\leftrightarrow \\overline{BC}$, so $AC < AB < BC$ ✓. Check a second, independent way with the endpoints: the shortest edge faces the smallest angle, $51^\\circ$, so it is $\\overline{AC}$; the longest faces $72^\\circ$, so it is $\\overline{BC}$ — only one choice does both ✓. (The choice $BC < AB < AC$ is REVERSING THE MATCH ✗; $BC < AC < AB$ is PAIRING EACH ANGLE WITH AN ADJACENT SIDE ✗; $AB < AC < BC$ is SWAPPING THE PARTNERS OF THE TWO SMALLER ANGLES ✗.)',
    },
    {
      q: 'The brace of a wooden ramp is the triangle $ABC$ shown, where $\\angle A = 44^\\circ$, $\\angle B = 59^\\circ$, and $\\angle C = 77^\\circ$. Which list gives its sides from shortest to longest?',
      fig: {
        view: [-0.9, -0.8, 4.9, 3.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2.53, 2.44]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [2.53, 2.44], label: 'C', dx: 4, dy: -10 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [2.53, 2.44], r: 0.85, label: '44' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [2.53, 2.44], r: 0.7, label: '59' },
          { t: 'angle', at: [2.53, 2.44], from: [4, 0], to: [0, 0], r: 0.5, label: '77' },
        ],
      },
      choices: ['$AB < AC < BC$', '$BC < AC < AB$', '$AB < BC < AC$', '$BC < AB < AC$'],
      answer: 1,
      solution:
        'Rebuild the angle sum: $44^\\circ + 59^\\circ + 77^\\circ = 180^\\circ$ ✓. Order the angles: $\\angle A = 44^\\circ < \\angle B = 59^\\circ < \\angle C = 77^\\circ$. Swap each for its opposite partner: $\\angle A \\leftrightarrow \\overline{BC}$, $\\angle B \\leftrightarrow \\overline{AC}$, $\\angle C \\leftrightarrow \\overline{AB}$, so $BC < AC < AB$ ✓. Check a second, independent way with the endpoints: the shortest side faces $44^\\circ$, so it is $\\overline{BC}$; the longest faces $77^\\circ$, so it is $\\overline{AB}$ — only one listed ordering runs from $BC$ up to $AB$ ✓. (The choice $AB < AC < BC$ is REVERSING THE MATCH ✗; $AB < BC < AC$ is PAIRING EACH ANGLE WITH AN ADJACENT SIDE ✗; $BC < AB < AC$ is SWAPPING THE PARTNERS OF THE TWO LARGER ANGLES ✗.)',
    },
  ],
  // s5 — two angles given, find the shortest side (third angle needed).
  [
    {
      q: 'A ranger’s triangular plot $PQR$ has $\\angle P = 95^\\circ$ and $\\angle Q = 35^\\circ$. She only has enough wire to fence the plot’s shortest side. Which side should she fence?',
      choices: ['$\\overline{PQ}$', '$\\overline{QR}$', '$\\overline{PR}$', 'she cannot decide without measuring the sides'],
      answer: 2,
      solution:
        'Find the missing angle first: $\\angle R = 180^\\circ - 95^\\circ - 35^\\circ = 50^\\circ$, and the sum rebuilds: $95 + 35 + 50 = 180$ ✓. Pair the partners: $\\angle P \\leftrightarrow \\overline{QR}$, $\\angle Q \\leftrightarrow \\overline{PR}$, $\\angle R \\leftrightarrow \\overline{PQ}$. The smallest angle is $\\angle Q = 35^\\circ$, so the shortest side is its partner, $\\overline{PR}$ ✓. Check a second, independent way by elimination: $\\overline{QR}$ faces the whopping $95^\\circ$ — the LONGEST side, the exact opposite of what she wants — and $\\overline{PQ}$ faces $50^\\circ$, still beating $35^\\circ$ ✓. (The choice $\\overline{QR}$ is GRABBING THE LARGEST ANGLE’S PARTNER, the longest side ✗; $\\overline{PQ}$ is MATCHING THE MIDDLE ANGLE ✗; the last choice is FORGETTING THAT ANGLES ALONE ORDER THE SIDES ✗.)',
    },
    {
      q: 'A zipline course is a triangle $PQR$ with platforms at each corner, where $\\angle P = 25^\\circ$ and $\\angle Q = 105^\\circ$. The cheapest cable to replace is the shortest one. Which cable is it?',
      choices: ['$\\overline{PR}$', '$\\overline{QR}$', '$\\overline{PQ}$', 'any of the three could be shortest'],
      answer: 1,
      solution:
        'Find the missing angle first: $\\angle R = 180^\\circ - 25^\\circ - 105^\\circ = 50^\\circ$, and the sum rebuilds: $25 + 105 + 50 = 180$ ✓. Pair the partners: $\\angle P \\leftrightarrow \\overline{QR}$, $\\angle Q \\leftrightarrow \\overline{PR}$, $\\angle R \\leftrightarrow \\overline{PQ}$. The smallest angle is $\\angle P = 25^\\circ$, so the shortest cable is its partner, $\\overline{QR}$ ✓. Check a second, independent way by elimination: $\\overline{PR}$ faces the $105^\\circ$ angle, making it the longest cable of all, and $\\overline{PQ}$ faces $50^\\circ$, which still beats $25^\\circ$ ✓. (The choice $\\overline{PR}$ is GRABBING THE LARGEST ANGLE’S PARTNER ✗; $\\overline{PQ}$ is MATCHING THE MIDDLE ANGLE ✗; the last choice is IGNORING THAT TWO ANGLES ALREADY PIN DOWN ALL THREE ✗.)',
    },
    {
      q: 'In triangle $PQR$, an engineer measures $\\angle P = 110^\\circ$ and $\\angle Q = 40^\\circ$ and must order the shortest strut for side comparison. Which side of the triangle is the shortest?',
      choices: ['$\\overline{PQ}$', '$\\overline{QR}$', '$\\overline{PR}$', 'it cannot be determined from two angles'],
      answer: 0,
      solution:
        'Find the missing angle first: $\\angle R = 180^\\circ - 110^\\circ - 40^\\circ = 30^\\circ$, and the sum rebuilds: $110 + 40 + 30 = 180$ ✓. Pair the partners: $\\angle P \\leftrightarrow \\overline{QR}$, $\\angle Q \\leftrightarrow \\overline{PR}$, $\\angle R \\leftrightarrow \\overline{PQ}$. The smallest angle is the UNSEEN one, $\\angle R = 30^\\circ$, so the shortest side is its partner, $\\overline{PQ}$ ✓. Check a second, independent way by elimination: $\\overline{QR}$ faces $110^\\circ$, the longest side, and $\\overline{PR}$ faces $40^\\circ$, which still loses to $30^\\circ$’s partner ✓. (The choice $\\overline{PR}$ is STOPPING AT THE TWO GIVEN ANGLES and assuming $40^\\circ$ is the smallest ✗; $\\overline{QR}$ is GRABBING THE LARGEST ANGLE’S PARTNER ✗; the last choice is MISSING THAT THE THIRD ANGLE IS FREE from the $180^\\circ$ sum ✗.)',
    },
  ],
  // s6 — three sides given, order all three angles.
  [
    {
      q: 'The three spars of a kite frame form triangle $XYZ$ shown, with $XY = 6$, $YZ = 11$, and $XZ = 9$. Which list orders the frame’s angles from smallest to largest?',
      fig: {
        view: [-1.2, -1, 12.2, 5.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [3.45, 4.91]], fill: false },
          { t: 'point', p: [0, 0], label: 'Y', dx: -10, dy: 8 },
          { t: 'point', p: [11, 0], label: 'Z', dx: 10, dy: 8 },
          { t: 'point', p: [3.45, 4.91], label: 'X', dx: 0, dy: -12 },
          { t: 'label', p: [5.5, 0], text: '11', dx: 0, dy: 14 },
          { t: 'label', p: [1.73, 2.46], text: '6', dx: -12, dy: 0 },
          { t: 'label', p: [7.23, 2.46], text: '9', dx: 12, dy: -4 },
        ],
      },
      choices: ['$\\angle X < \\angle Y < \\angle Z$', '$\\angle X < \\angle Z < \\angle Y$', '$\\angle Y < \\angle Z < \\angle X$', '$\\angle Z < \\angle Y < \\angle X$'],
      answer: 3,
      solution:
        'Order the sides first: $6 < 9 < 11$. Pair each side with the angle it faces: $XY = 6 \\leftrightarrow \\angle Z$, $XZ = 9 \\leftrightarrow \\angle Y$, $YZ = 11 \\leftrightarrow \\angle X$. Smaller side, smaller opposite angle, so $\\angle Z < \\angle Y < \\angle X$ ✓. Check a second, independent way with the endpoints: the smallest angle must face the $6$, and the vertex missing from $\\overline{XY}$ is $Z$; the largest must face the $11$, and the vertex missing from $\\overline{YZ}$ is $X$ — only one listed ordering starts at $\\angle Z$ and ends at $\\angle X$ ✓. (The choice $\\angle X < \\angle Y < \\angle Z$ is REVERSING THE MATCH ✗; $\\angle X < \\angle Z < \\angle Y$ is PAIRING EACH SIDE WITH AN ANGLE IT TOUCHES ✗; $\\angle Y < \\angle Z < \\angle X$ is SWAPPING THE PARTNERS OF THE TWO SHORTER SPARS ✗.)',
    },
    {
      q: 'A triangular courtyard $XYZ$ is shown, with walls $XY = 9$ m, $YZ = 12$ m, and $XZ = 7$ m. Rank its corner angles from smallest to largest.',
      fig: {
        view: [-1.2, -1, 13.2, 6.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [7.33, 5.22]], fill: false },
          { t: 'point', p: [0, 0], label: 'Y', dx: -10, dy: 8 },
          { t: 'point', p: [12, 0], label: 'Z', dx: 10, dy: 8 },
          { t: 'point', p: [7.33, 5.22], label: 'X', dx: 0, dy: -12 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [3.67, 2.61], text: '9', dx: -12, dy: 0 },
          { t: 'label', p: [9.67, 2.61], text: '7', dx: 12, dy: -4 },
        ],
      },
      choices: ['$\\angle Y < \\angle Z < \\angle X$', '$\\angle X < \\angle Z < \\angle Y$', '$\\angle Z < \\angle Y < \\angle X$', '$\\angle Y < \\angle X < \\angle Z$'],
      answer: 0,
      solution:
        'Order the sides first: $7 < 9 < 12$. Pair each side with the angle it faces: $XZ = 7 \\leftrightarrow \\angle Y$, $XY = 9 \\leftrightarrow \\angle Z$, $YZ = 12 \\leftrightarrow \\angle X$. Smaller wall, smaller opposite corner, so $\\angle Y < \\angle Z < \\angle X$ ✓. Check a second, independent way with the endpoints: the smallest corner faces the $7$-meter wall, and the vertex missing from $\\overline{XZ}$ is $Y$; the largest faces the $12$-meter wall, and the vertex missing from $\\overline{YZ}$ is $X$ — only one choice runs from $\\angle Y$ up to $\\angle X$ ✓. (The choice $\\angle X < \\angle Z < \\angle Y$ is REVERSING THE MATCH ✗; $\\angle Z < \\angle Y < \\angle X$ is SWAPPING THE PARTNERS OF THE TWO SHORTER WALLS ✗; $\\angle Y < \\angle X < \\angle Z$ is PAIRING EACH SIDE WITH AN ANGLE IT TOUCHES ✗.)',
    },
    {
      q: 'A surveyor pegs out triangle $XYZ$, shown with $XY = 13$, $YZ = 8$, and $XZ = 10$. Which list gives the triangle’s angles from smallest to largest?',
      fig: {
        view: [-1.3, -1, 14.2, 7.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [13, 0], [7.88, 6.15]], fill: false },
          { t: 'point', p: [0, 0], label: 'X', dx: -10, dy: 8 },
          { t: 'point', p: [13, 0], label: 'Y', dx: 10, dy: 8 },
          { t: 'point', p: [7.88, 6.15], label: 'Z', dx: 0, dy: -12 },
          { t: 'label', p: [6.5, 0], text: '13', dx: 0, dy: 14 },
          { t: 'label', p: [3.94, 3.08], text: '10', dx: -14, dy: 0 },
          { t: 'label', p: [10.44, 3.08], text: '8', dx: 12, dy: -4 },
        ],
      },
      choices: ['$\\angle Z < \\angle Y < \\angle X$', '$\\angle X < \\angle Z < \\angle Y$', '$\\angle X < \\angle Y < \\angle Z$', '$\\angle Y < \\angle X < \\angle Z$'],
      answer: 2,
      solution:
        'Order the sides first: $8 < 10 < 13$. Pair each side with the angle it faces: $YZ = 8 \\leftrightarrow \\angle X$, $XZ = 10 \\leftrightarrow \\angle Y$, $XY = 13 \\leftrightarrow \\angle Z$. Smaller side, smaller opposite angle, so $\\angle X < \\angle Y < \\angle Z$ ✓. Check a second, independent way with the endpoints: the smallest angle faces the $8$, and the vertex missing from $\\overline{YZ}$ is $X$; the largest faces the $13$, and the vertex missing from $\\overline{XY}$ is $Z$ — only one listed ordering starts at $\\angle X$ and ends at $\\angle Z$ ✓. (The choice $\\angle Z < \\angle Y < \\angle X$ is REVERSING THE MATCH ✗; $\\angle X < \\angle Z < \\angle Y$ is SWAPPING THE PARTNERS OF THE TWO LONGER SIDES ✗; $\\angle Y < \\angle X < \\angle Z$ is SWAPPING THE PARTNERS OF THE TWO SHORTER SIDES ✗.)',
    },
  ],
  // s7 — two equal angles plus a strictly bigger third: name the longest side.
  [
    {
      q: 'In triangle $DEF$, the angles at $D$ and $E$ are equal, and $\\angle F$ is strictly larger than both. Which side of the triangle is the longest?',
      choices: ['$\\overline{EF}$', '$\\overline{DF}$', '$\\overline{DE}$', 'two sides tie for longest'],
      answer: 2,
      solution:
        'Since $\\angle F$ beats the two equal angles, it is the single largest angle of the triangle, and the longest side is its opposite partner — the side missing vertex $F$ — which is $\\overline{DE}$ ✓. Check a second, independent way through the tie: $\\angle D = \\angle E$ forces their partners to match, $EF = DF$, so those two sides tie with each other; but $\\angle F > \\angle D$ forces $DE > EF$, so the tied pair sits strictly below $\\overline{DE}$ and the longest side stands alone ✓. (The choices $\\overline{EF}$ and $\\overline{DF}$ each PICK ONE OF THE TIED LEGS facing an equal, smaller angle ✗; the last choice PROMOTES THE TIED PAIR TO THE TOP — the tie is for second place, not first ✗.)',
    },
    {
      q: 'A triangular banner $PQR$ is sewn so that $\\angle Q = \\angle R$, while $\\angle P$ is larger than each of them. Which edge of the banner is the longest?',
      choices: ['$\\overline{QR}$', '$\\overline{PR}$', '$\\overline{PQ}$', 'all three sides are equal'],
      answer: 0,
      solution:
        'Since $\\angle P$ beats the two equal angles, it is the largest angle, and the longest edge is its opposite partner — the edge missing vertex $P$ — which is $\\overline{QR}$ ✓. Check a second, independent way through the tie: $\\angle Q = \\angle R$ forces $PR = PQ$, a tie between the other two edges; and $\\angle P > \\angle Q$ forces $QR > PR$, so the tied pair sits strictly below $\\overline{QR}$ ✓. (The choices $\\overline{PR}$ and $\\overline{PQ}$ each PICK ONE OF THE TIED LEGS ✗; all three equal would need ALL THREE ANGLES EQUAL, and $\\angle P > \\angle Q$ rules that out ✗.)',
    },
    {
      q: 'Triangle $JKL$ has $\\angle J = \\angle L$, and $\\angle K$ is strictly bigger than $\\angle J$. Which side must be the longest?',
      choices: ['$\\overline{JK}$', '$\\overline{JL}$', '$\\overline{KL}$', 'there is a tie for longest side'],
      answer: 1,
      solution:
        'Since $\\angle K$ beats the two equal angles, it is the single largest angle, and the longest side is its opposite partner — the side missing vertex $K$ — which is $\\overline{JL}$ ✓. Check a second, independent way through the tie: $\\angle J = \\angle L$ forces $KL = JK$, so those two sides tie with each other; and $\\angle K > \\angle J$ forces $JL > KL$, pushing the tied pair strictly below $\\overline{JL}$ ✓. (The choices $\\overline{JK}$ and $\\overline{KL}$ each PICK ONE OF THE TIED LEGS facing a smaller angle ✗; the last choice PROMOTES THE TIE TO FIRST PLACE — the tie is for second ✗.)',
    },
  ],
  // s8 — which of two vertices is farther from the third (figure).
  [
    {
      q: 'Radio masts stand at the corners of triangle $ABC$ shown, where $\\angle A = 52^\\circ$, $\\angle B = 57^\\circ$, and $\\angle C = 71^\\circ$. A crew at mast $A$ must haul cable to whichever of $B$ and $C$ is farther away. Which mast is that, and why?',
      fig: {
        view: [-0.9, -0.8, 4.9, 3.7],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2.18, 2.8]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [2.18, 2.8], label: 'C', dx: 4, dy: -10 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [2.18, 2.8], r: 0.8, label: '52' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [2.18, 2.8], r: 0.65, label: '57' },
          { t: 'angle', at: [2.18, 2.8], from: [4, 0], to: [0, 0], r: 0.5, label: '71' },
        ],
      },
      choices: [
        '$C$, because the triangle’s largest angle sits at $C$',
        '$B$, because $\\overline{AB}$ faces the $71^\\circ$ angle at $C$',
        '$B$ and $C$ are exactly the same distance from $A$',
        'only measured side lengths could settle it',
      ],
      answer: 1,
      solution:
        'Rebuild the angle sum: $52^\\circ + 57^\\circ + 71^\\circ = 180^\\circ$ ✓. The two distances from $A$ are the sides $\\overline{AB}$ and $\\overline{AC}$; compare them through their opposite partners: $\\overline{AB} \\leftrightarrow \\angle C = 71^\\circ$ and $\\overline{AC} \\leftrightarrow \\angle B = 57^\\circ$. Since $71^\\circ > 57^\\circ$, we get $AB > AC$, so $B$ is the farther mast ✓. Check a second, independent way with the full ordering: $52 < 57 < 71$ gives $BC < AC < AB$, so $\\overline{AB}$ is the longest side of the whole triangle and certainly beats $\\overline{AC}$ ✓. (The first choice is PUTTING THE BIG ANGLE’S OWN VERTEX FAR AWAY — a wide angle at $C$ pushes the two OTHER masts apart, it does not exile $C$ ✗; a tie would need $\\angle B = \\angle C$ ✗; the last choice FORGETS THAT ANGLES ALONE ORDER THE SIDES ✗.)',
    },
    {
      q: 'Three buoys $A$, $B$, and $C$ mark the triangular course shown, with $\\angle A = 66^\\circ$, $\\angle B = 74^\\circ$, and $\\angle C = 40^\\circ$. A swimmer resting at buoy $A$ wants to know which of the other two buoys is farther from her. Which is it, and why?',
      fig: {
        view: [-0.9, -0.8, 4.9, 6.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2.43, 5.47]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [2.43, 5.47], label: 'C', dx: 4, dy: -10 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [2.43, 5.47], r: 0.7, label: '66' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [2.43, 5.47], r: 0.55, label: '74' },
          { t: 'angle', at: [2.43, 5.47], from: [4, 0], to: [0, 0], r: 0.9, label: '40' },
        ],
      },
      choices: [
        '$C$, because $\\overline{AC}$ faces the $74^\\circ$ angle at $B$',
        '$B$, because the triangle’s largest angle sits at $B$',
        'the two buoys are equally far from $A$',
        'angles alone cannot decide the question',
      ],
      answer: 0,
      solution:
        'Rebuild the angle sum: $66^\\circ + 74^\\circ + 40^\\circ = 180^\\circ$ ✓. The distances from $A$ are $\\overline{AB}$ and $\\overline{AC}$; compare them through their opposite partners: $\\overline{AB} \\leftrightarrow \\angle C = 40^\\circ$ and $\\overline{AC} \\leftrightarrow \\angle B = 74^\\circ$. Since $74^\\circ > 40^\\circ$, we get $AC > AB$, so $C$ is the farther buoy ✓. Check a second, independent way with the full ordering: $40 < 66 < 74$ gives $AB < BC < AC$, so $\\overline{AC}$ is the longest leg of the course and certainly beats $\\overline{AB}$ ✓. Notice the trap here bites hard: the largest angle sits AT $B$, yet $B$ is the CLOSER buoy — a wide angle at $B$ spreads the other two vertices apart. (The choice naming $B$ is PUTTING THE BIG ANGLE’S OWN VERTEX FAR AWAY ✗; a tie would need $\\angle B = \\angle C$ ✗; the last choice FORGETS THAT ANGLES FIX THE SIDE ORDER ✗.)',
    },
    {
      q: 'A drone hovers over checkpoint $A$ of the orienteering triangle $ABC$ shown, where $\\angle A = 50^\\circ$, $\\angle B = 58^\\circ$, and $\\angle C = 72^\\circ$. Of the checkpoints $B$ and $C$, which one lies farther from $A$?',
      fig: {
        view: [-0.9, -0.8, 4.9, 3.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2.29, 2.73]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [2.29, 2.73], label: 'C', dx: 4, dy: -10 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [2.29, 2.73], r: 0.85, label: '50' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [2.29, 2.73], r: 0.65, label: '58' },
          { t: 'angle', at: [2.29, 2.73], from: [4, 0], to: [0, 0], r: 0.5, label: '72' },
        ],
      },
      choices: [
        '$C$, because the largest angle of the triangle is at $C$',
        '$B$ and $C$ are exactly equally distant from $A$',
        'it takes side lengths, not angles, to decide',
        '$B$, because $\\overline{AB}$ faces the $72^\\circ$ angle at $C$',
      ],
      answer: 3,
      solution:
        'Rebuild the angle sum: $50^\\circ + 58^\\circ + 72^\\circ = 180^\\circ$ ✓. The distances from $A$ are $\\overline{AB}$ and $\\overline{AC}$; compare them through their opposite partners: $\\overline{AB} \\leftrightarrow \\angle C = 72^\\circ$ and $\\overline{AC} \\leftrightarrow \\angle B = 58^\\circ$. Since $72^\\circ > 58^\\circ$, we get $AB > AC$, so checkpoint $B$ lies farther from $A$ ✓. Check a second, independent way with the full ordering: $50 < 58 < 72$ gives $BC < AC < AB$, making $\\overline{AB}$ the longest side of the triangle, so it certainly beats $\\overline{AC}$ ✓. (The choice naming $C$ is PUTTING THE BIG ANGLE’S OWN VERTEX FAR AWAY — the wide angle at $C$ stretches the side ACROSS from it ✗; a tie would need $\\angle B = \\angle C$ ✗; the third choice FORGETS THAT ANGLES ALONE ORDER THE SIDES ✗.)',
    },
  ],
  // s9 — algebraic angle expressions: find the longest side.
  [
    {
      q: 'The angles of triangle $ABC$ are in the ratio $3 : 4 : 5$, with $\\angle A = 3x$, $\\angle B = 4x$, and $\\angle C = 5x$ for some positive number $x$. Which side of the triangle is the longest?',
      choices: ['$\\overline{BC}$', '$\\overline{AC}$', 'it depends on the value of $x$', '$\\overline{AB}$'],
      answer: 3,
      solution:
        'The angles fill $180^\\circ$: $3x + 4x + 5x = 12x = 180^\\circ$, so $x = 15^\\circ$ and the angles are $45^\\circ$, $60^\\circ$, and $75^\\circ$ — which rebuild the sum, $45 + 60 + 75 = 180$ ✓. The largest is $\\angle C = 75^\\circ$, and its opposite partner — the side missing vertex $C$ — is $\\overline{AB}$ ✓. Check a second, independent way without ever finding $x$: for any positive $x$, $5x$ beats $4x$ beats $3x$, so $\\angle C$ is largest by the coefficients alone, and its share is $\\frac{5}{12} \\cdot 180^\\circ = 75^\\circ$, agreeing exactly ✓. (The choice $\\overline{BC}$ is MATCHING THE SMALLEST ANGLE’S PARTNER ✗; $\\overline{AC}$ is MATCHING THE MIDDLE ANGLE’S PARTNER ✗; "it depends on $x$" MISSES THAT THE RATIO FIXES THE ORDER for every positive $x$ ✗.)',
    },
    {
      q: 'In triangle $ABC$, the angle measures satisfy $\\angle A = 5x$, $\\angle B = 2x$, and $\\angle C = 2x$ for a positive number $x$. Which side must be the longest?',
      choices: ['$\\overline{AB}$', '$\\overline{BC}$', '$\\overline{AC}$', 'the two $2x$ angles produce two tied longest sides'],
      answer: 1,
      solution:
        'The angles fill $180^\\circ$: $5x + 2x + 2x = 9x = 180^\\circ$, so $x = 20^\\circ$ and the angles are $\\angle A = 100^\\circ$, $\\angle B = 40^\\circ$, $\\angle C = 40^\\circ$ — rebuilding the sum, $100 + 40 + 40 = 180$ ✓. The largest is $\\angle A$, and its opposite partner — the side missing vertex $A$ — is $\\overline{BC}$ ✓. Check a second, independent way from the coefficients: $5x > 2x$ for every positive $x$, so $\\angle A$ is largest no matter what, and its share is $\\frac{5}{9} \\cdot 180^\\circ = 100^\\circ$, agreeing exactly ✓. (The choices $\\overline{AB}$ and $\\overline{AC}$ each PICK ONE OF THE TIED SHORT SIDES facing a $40^\\circ$ angle ✗; the last choice PROMOTES THE TIE TO THE TOP — the equal angles produce two tied SHORTEST sides, not longest ✗.)',
    },
    {
      q: 'Triangle $ABC$ has $\\angle A = 2x$, $\\angle B = 5x$, and $\\angle C = 3x$ for some positive number $x$. Which side of the triangle is the longest?',
      choices: ['$\\overline{AC}$', '$\\overline{AB}$', '$\\overline{BC}$', 'it cannot be determined without knowing $x$'],
      answer: 0,
      solution:
        'The angles fill $180^\\circ$: $2x + 5x + 3x = 10x = 180^\\circ$, so $x = 18^\\circ$ and the angles are $\\angle A = 36^\\circ$, $\\angle B = 90^\\circ$, $\\angle C = 54^\\circ$ — rebuilding the sum, $36 + 90 + 54 = 180$ ✓. The largest is $\\angle B = 90^\\circ$, so the triangle is right and the longest side is the hypotenuse, the partner opposite $B$: $\\overline{AC}$ ✓. Check a second, independent way from the coefficients: $5x$ beats $3x$ beats $2x$ for every positive $x$, so $\\angle B$ is largest before any arithmetic, and its share is $\\frac{5}{10} \\cdot 180^\\circ = 90^\\circ$, agreeing exactly ✓. (The choice $\\overline{AB}$ is MATCHING THE MIDDLE ANGLE’S PARTNER ✗; $\\overline{BC}$ is MATCHING THE SMALLEST ANGLE’S PARTNER ✗; the last choice MISSES THAT THE COEFFICIENTS ALONE SETTLE THE ORDER ✗.)',
    },
  ],
  // s10 — isosceles triangle with a given apex angle: compare all three sides.
  [
    {
      q: 'A felt pennant is the triangle $ABC$ shown, sewn with $AB = AC$ and an apex angle of $\\angle A = 52^\\circ$. Which statement correctly compares all three of its sides?',
      fig: {
        view: [-0.9, -0.9, 4.4, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.51, 0], [1.76, 3.6]], fill: false },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 8 },
          { t: 'point', p: [3.51, 0], label: 'C', dx: 10, dy: 8 },
          { t: 'point', p: [1.76, 3.6], label: 'A', dx: 0, dy: -12 },
          { t: 'tick', a: [0, 0], b: [1.76, 3.6], n: 1 },
          { t: 'tick', a: [3.51, 0], b: [1.76, 3.6], n: 1 },
          { t: 'angle', at: [1.76, 3.6], from: [0, 0], to: [3.51, 0], r: 0.75, label: '52' },
        ],
      },
      choices: ['$AB = AC < BC$', '$BC < AB = AC$', '$AC < BC < AB$', '$BC = AB = AC$'],
      answer: 1,
      solution:
        'The equal legs give equal base angles: $\\angle B = \\angle C = \\frac{180^\\circ - 52^\\circ}{2} = 64^\\circ$, and the sum rebuilds: $52 + 64 + 64 = 180$ ✓. Pair the partners: $\\overline{BC} \\leftrightarrow \\angle A = 52^\\circ$, $\\overline{AC} \\leftrightarrow \\angle B = 64^\\circ$, $\\overline{AB} \\leftrightarrow \\angle C = 64^\\circ$. The base faces the smallest angle, so $BC < AB = AC$ ✓. Check a second, independent way with one comparison: the apex angle $52^\\circ$ is smaller than a base angle $64^\\circ$, and whenever the apex is the smallest angle, the base is the shortest side while the legs tie above it ✓. (The choice $AB = AC < BC$ is REVERSING THE COMPARISON — the base only wins when the apex tops $60^\\circ$ ✗; $AC < BC < AB$ BREAKS THE FORCED TIE between the legs ✗; all-equal would need an apex of exactly $60^\\circ$ ✗.)',
    },
    {
      q: 'The gable end of a shed is the triangle $ABC$ shown, framed with $AB = AC$ and a wide apex angle of $\\angle A = 76^\\circ$. Which statement correctly compares its three sides?',
      fig: {
        view: [-0.9, -0.9, 5.8, 4.0],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.93, 0], [2.46, 3.15]], fill: false },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 8 },
          { t: 'point', p: [4.93, 0], label: 'C', dx: 10, dy: 8 },
          { t: 'point', p: [2.46, 3.15], label: 'A', dx: 0, dy: -12 },
          { t: 'tick', a: [0, 0], b: [2.46, 3.15], n: 1 },
          { t: 'tick', a: [4.93, 0], b: [2.46, 3.15], n: 1 },
          { t: 'angle', at: [2.46, 3.15], from: [0, 0], to: [4.93, 0], r: 0.7, label: '76' },
        ],
      },
      choices: ['$BC < AB = AC$', '$AC < AB < BC$', '$AB = AC < BC$', '$AB = BC = AC$'],
      answer: 2,
      solution:
        'The equal rafters give equal base angles: $\\angle B = \\angle C = \\frac{180^\\circ - 76^\\circ}{2} = 52^\\circ$, and the sum rebuilds: $76 + 52 + 52 = 180$ ✓. Pair the partners: $\\overline{BC} \\leftrightarrow \\angle A = 76^\\circ$, $\\overline{AC} \\leftrightarrow \\angle B = 52^\\circ$, $\\overline{AB} \\leftrightarrow \\angle C = 52^\\circ$. The base faces the LARGEST angle this time, so the tied rafters sit below it: $AB = AC < BC$ ✓. Check a second, independent way with one comparison: the apex $76^\\circ$ beats a base angle $52^\\circ$, and whenever the apex is the biggest angle, the base is the longest side ✓. (The choice $BC < AB = AC$ is REVERSING THE COMPARISON — that ordering needs an apex under $60^\\circ$ ✗; $AC < AB < BC$ BREAKS THE FORCED TIE between the rafters ✗; all-equal would need an apex of exactly $60^\\circ$, not $76^\\circ$ ✗.)',
    },
    {
      q: 'A yield-style road sign is the triangle $ABC$ shown, cut with $AB = AC$ and $\\angle A = 60^\\circ$. Which statement correctly compares its three sides?',
      fig: {
        view: [-0.9, -0.9, 4.9, 4.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2, 3.46]], fill: false },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'C', dx: 10, dy: 8 },
          { t: 'point', p: [2, 3.46], label: 'A', dx: 0, dy: -12 },
          { t: 'tick', a: [0, 0], b: [2, 3.46], n: 1 },
          { t: 'tick', a: [4, 0], b: [2, 3.46], n: 1 },
          { t: 'angle', at: [2, 3.46], from: [0, 0], to: [4, 0], r: 0.8, label: '60' },
        ],
      },
      choices: ['$AB = AC = BC$', '$BC < AB = AC$', '$AB = AC < BC$', '$AB < BC < AC$'],
      answer: 0,
      solution:
        'The equal sides give equal base angles: $\\angle B = \\angle C = \\frac{180^\\circ - 60^\\circ}{2} = 60^\\circ$, and the sum rebuilds: $60 + 60 + 60 = 180$ ✓. All three angles are equal, so every pairing of partners is a tie — equal angles force equal opposite sides all around — and the triangle is equilateral: $AB = AC = BC$ ✓. Check a second, independent way with one comparison: the apex $60^\\circ$ exactly matches a base angle $60^\\circ$, so the base $\\overline{BC}$ can be neither shorter nor longer than a leg — the only option left is a three-way tie ✓. (The choice $BC < AB = AC$ ASSUMES THE APEX IS SMALLEST when it merely ties ✗; $AB = AC < BC$ ASSUMES THE APEX IS BIGGEST for the same reason ✗; $AB < BC < AC$ BREAKS THE GIVEN TIE $AB = AC$ outright ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 10,
  sections: {
    '10.1': s101,
  },
}
