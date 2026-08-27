// Introduction to Geometry chapter 3 — variations for section 3.5
// (SSA Not-Necessarily Congruence). All problems, figures, and solutions are
// original MathQuest content.
//
// House rules for this file:
//  - The section turns on one inequality: with an angle, its neighbouring
//    side $n$, and the side $s$ across from it, the rod of length $s$ swings
//    from the far end of $n$ and meets the base ray TWICE exactly when
//    $h < s < n$, where $h = n \sin(\text{angle})$ is the straight drop to the
//    base line. Every item in this file was checked against that inequality,
//    not just against the loose slogan "shorter side means two triangles".
//  - Every figure was built from its own numbers. Each swing figure was
//    verified numerically: the drawn angle at the far vertex matches its
//    printed label to better than a hundredth of a degree, the two feet are
//    placed symmetrically about the true foot of the perpendicular so the
//    ticked sides are genuinely equal, and BOTH feet land on the positive
//    ray so the two triangles really do share the marked angle.
//  - Every right-angle marker spans a real $90^\circ$, and every equal tick
//    pair sits on genuinely equal segments.
//  - Each slot keeps the shape of its base answer: a "why does SSA fail"
//    stays conceptual, a "find the missing leg" stays numeric, a criterion
//    question still names a criterion.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS. The traps running through this section are: BLAMING THE SIDES
//    INSTEAD OF THE SWING, DEMANDING ALL THREE ANGLES, CALLING THE OBTUSE
//    CASE THE BROKEN ONE, TRUSTING A CAREFUL DRAWING, CONFUSING EQUAL AREA
//    WITH CONGRUENCE, REACHING FOR AAA, MISTAKING SSA FOR SAS, TREATING THE
//    ACUTE CASE AS THE SAFE ONE, INVENTING A SIZE-GAP RULE, DECLARING SSA
//    ALWAYS USELESS, PUTTING THE RIGHT ANGLE BETWEEN THE HYPOTENUSE AND THE
//    LEG, CLAIMING ALL RIGHT TRIANGLES ARE ALIKE, DEMANDING THE THIRD PAIR
//    OF SIDES, THINKING THE MARKED LEG'S POSITION MATTERS, SUBTRACTING THE
//    LENGTHS INSTEAD OF THE SQUARES, ADDING THE LENGTHS, FORGETTING TO TAKE
//    THE SQUARE ROOT, ANSWERING THE HALF-CHORD, ANSWERING THE HEIGHT,
//    COPYING THE SWINGING SIDE, PICKING THE PAIR THAT IS CLOSEST IN LENGTH,
//    FORGETTING THE ROD MUST REACH THE BASE LINE, and RENAMING VERTICES
//    INSTEAD OF FIXING THE REASON.
//  - No two choices inside an item name the same value.

const s35 = [
  // s1 — why SSA is not a congruence test. Conceptual; each solution pairs the
  //      general swing argument with a concrete pair of triangles the reader
  //      can build, using a different Pythagorean drop each time.
  [
    {
      q: 'A puzzle sheet gives you one angle, the side that touches it, and a third side that does NOT touch it. Why does that information fail to pin down a single triangle?',
      choices: [
        'Because the side across from the given angle can usually reach the base line at two different points',
        'Because a triangle cannot be drawn until all three of its angles are known',
        'Because the two given sides might turn out to be equal to each other',
        'Because the arrangement only breaks down when the given angle is obtuse',
      ],
      answer: 0,
      solution:
        'Lay the angle down with its touching side attached, and treat the third side as a rod hinged at the far end of that side. Swinging the rod traces a circle, and a circle can cross the base line in two places — so the rod lands at two different spots and two genuinely different triangles carry exactly the same three measurements ✓. A test that permits two answers cannot certify congruence. Check a second, independent way by building the pair with real numbers instead of arguing in general. Take the angle to be $30^\\circ$ with a touching side of $30$; the far end then sits $30 \\times \\frac{1}{2} = 15$ above the base line. Now swing a rod of length $17$ from that point. Its foot-to-landing distance is $\\sqrt{17^2 - 15^2} = \\sqrt{289 - 225} = \\sqrt{64} = 8$, so it touches down $8$ units before the drop point and again $8$ units after it ✓. One angle, one touching side, one rod length — two different triangles, built by hand. (The choice about the two given sides is BLAMING THE SIDES INSTEAD OF THE SWING; the sides are equal to their partners by assumption, and that is not where the trouble lives ✗. The choice demanding every angle is DEMANDING ALL THREE ANGLES, when in fact three angles alone fix only the shape, never the size ✗. The obtuse choice is CALLING THE OBTUSE CASE THE BROKEN ONE — the side across from an obtuse angle is the longest side, so that case is the safe one ✗.)',
    },
    {
      q: 'Rafi measures one angle of a triangle, the side beside it, and the side across from it, then reads the three numbers aloud to two friends. Each friend draws a triangle, and the two drawings are not the same shape. How did that happen?',
      choices: [
        'One friend must have misread a number, because three measurements always fix a triangle',
        'The two drawings enclose the same area, so they count as congruent anyway',
        'The side across from the angle swung to a second landing spot, so a genuinely different triangle carries the same three numbers',
        'An angle can never help fix a triangle; only three sides can',
      ],
      answer: 2,
      solution:
        'Nobody misread anything. The side across from the angle is the loose end of the setup: hinged at the far end of the measured side, it sweeps a circle that meets the base line twice, so both friends drew a triangle that honestly matches all three numbers ✓. Check a second, independent way by reconstructing what Rafi could have said. Suppose the angle was $30^\\circ$, the side beside it $32$, and the side across from it $20$. The far end sits $32 \\times \\frac{1}{2} = 16$ above the base line, and $\\sqrt{20^2 - 16^2} = \\sqrt{400 - 256} = \\sqrt{144} = 12$, so the rod touches down $12$ units on either side of the drop point ✓. The near landing gives a squat triangle, the far landing a stretched one, and the two friends simply picked different landings. Notice the ordering that made it possible: $20$ is shorter than $32$. (The misreading choice is TRUSTING A CAREFUL DRAWING over the logic — accurate measuring cannot rescue an arrangement that admits two answers ✗. The area choice is CONFUSING EQUAL AREA WITH CONGRUENCE; congruent shapes have equal area, but equal area never runs backwards ✗. The last choice is DEMANDING ALL THREE SIDES, which throws away SAS and ASA along with SSA ✗.)',
    },
    {
      q: 'Which statement about the SSA arrangement — an angle, the side next to it, and a side that does not touch it — is correct?',
      choices: [
        'It fixes the triangle whenever the given angle is acute',
        'It can leave two different triangles on the table, so it is not a congruence criterion',
        'It is just SAS with the three parts written in a different order',
        'It fails only when the two given sides are far apart in length',
      ],
      answer: 1,
      solution:
        'The non-touching side is free to swing, and when it is the shorter of the two given sides it reaches the base line twice. Two triangles fit the same data, so the arrangement cannot serve as a congruence criterion ✓. Check a second, independent way by testing the statement against the one case where SSA is known to succeed. Hypotenuse-Leg is SSA data with a $90^\\circ$ angle, and it is perfectly reliable, so any statement claiming SSA "always fails" would be wrong; the honest statement is the guarded one — SSA *can* leave two triangles, which is enough to disqualify it as a general rule ✓. That is exactly what this choice says, and a concrete instance seals it: a $30^\\circ$ angle with a touching side of $36$ puts the far end $18$ above the base line, and a rod of $30$ lands $\\sqrt{900 - 324} = \\sqrt{576} = 24$ on each side of the drop point ✓ — two triangles from one data set. (The acute choice is TREATING THE ACUTE CASE AS THE SAFE ONE, when the acute case is precisely where the double landing lives ✗. The SAS choice is MISTAKING SSA FOR SAS; in SAS the angle sits *between* the two sides, and here it deliberately does not ✗. The last choice is INVENTING A SIZE-GAP RULE — what matters is which side is shorter, not by how much ✗.)',
    },
  ],
  // s2 — responding to a written "by SSA". Same shape as the base: a critique
  //      of a stated reason. v2 flips the direction (the conclusion is true,
  //      the reason is not); v3 asks for the repair rather than the objection.
  [
    {
      q: 'A homework answer reads "$\\triangle KLM \\cong \\triangle PQR$ because SSA." What is the best thing to say back?',
      choices: [
        'The reason is fine as long as both triangles were drawn with a ruler and a protractor',
        'SSA is reliable whenever the two triangles have the same perimeter',
        'SSA is not a congruence criterion — check whether the angle really sits between the two sides, which would make it SAS, or hunt for another fact',
        'The line should cite AAA instead, which is the stronger reason',
      ],
      answer: 2,
      solution:
        'No congruence claim may rest on SSA, because SSA data can fit two different triangles. The useful response is not "you are wrong" but "look again at where the angle sits": very often the angle really is between the two named sides, and relabelling it turns a broken SSA line into a sound SAS line ✓. Check a second, independent way by asking what a valid reason has to accomplish. A reason must rule out every triangle except one. Feed SSA data with a $30^\\circ$ angle, a touching side of $30$, and a non-touching side of $17$ into a construction and two triangles come out — the feet land $8$ units either side of the drop point, since $\\sqrt{289 - 225} = 8$ ✓. Because the data survives two triangles, no argument built on it alone can eliminate one, so the line proves nothing as written ✓. (The ruler-and-protractor choice is TRUSTING A CAREFUL DRAWING; a drawing shows one of the two triangles and hides the other ✗. The perimeter choice is CONFUSING EQUAL AREA WITH CONGRUENCE in its perimeter costume — the two swing triangles have different perimeters, and equal perimeters would still not force congruence ✗. The AAA choice is REACHING FOR AAA, which is weaker still: it fixes shape but not size ✗.)',
    },
    {
      q: 'Nadia proves two triangles congruent and writes "SSA" as her reason. Her teacher marks the reason wrong even though the two triangles genuinely are congruent. Why is that mark fair?',
      choices: [
        'Because congruence may only ever be proved with SSS',
        'Because SSA applies only to triangles drawn the same way up on the page',
        'Because if the triangles are congruent then Nadia must have measured the wrong parts',
        'Because a reason has to rule out every rival triangle, and SSA data can fit a second one — the conclusion may be true, but this reason does not establish it',
      ],
      answer: 3,
      solution:
        'A conclusion and a reason are separate things. Nadia’s conclusion may well be correct, but her reason has to close the door on every other triangle, and SSA data leaves a second triangle standing ✓. So the reason is unfair to the conclusion: it would license the same claim in cases where the claim is false. Check a second, independent way by running her reason on a case where the answer is known to be no. Take a $30^\\circ$ angle, a touching side of $24$, and a non-touching side of $13$. The drop is $12$, and the rod reaches the base line $\\sqrt{169 - 144} = 5$ units either side of the drop point, so two different triangles carry that SSA data ✓. Nadia’s reason would declare those two congruent, which is false — a reason that certifies a false statement cannot certify a true one either ✓. (The SSS choice is DEMANDING ALL THREE SIDES and would outlaw SAS and ASA as well ✗. The orientation choice is TRUSTING A CAREFUL DRAWING; congruence survives flipping and turning, so how a triangle sits on the page is irrelevant ✗. The measurement choice gets the logic backwards — a true conclusion says nothing about whether the reason was valid ✗.)',
    },
    {
      q: 'A study group is checking a proof whose last line reads "congruent by SSA." Which repair could genuinely save the proof?',
      choices: [
        'Redraw both triangles at the same size on the page',
        'Show that the marked angle is a right angle, which upgrades the setup to HL',
        'Add a note that the two triangles enclose equal areas',
        'Rename the vertices so that the letters of the two triangles match up in order',
      ],
      answer: 1,
      solution:
        'SSA is rescued by exactly one famous special case. If the marked angle turns out to be $90^\\circ$, then the side across from it is the hypotenuse — the longest side of a right triangle — and a rod longer than its neighbour cannot swing to a second landing spot. That is the HL criterion, and it is a real theorem ✓. Check a second, independent way through the Pythagorean theorem, which never mentions swinging at all. Once the angle is right, the hypotenuse $h$ and the marked leg $a$ determine the remaining leg as $\\sqrt{h^2 - a^2}$, and that expression returns the same number in both triangles. Three pairs of equal sides is SSS, so congruence follows ✓ — two independent arguments, one geometric and one algebraic, and both need the right angle that the repair supplies. (The redrawing choice is TRUSTING A CAREFUL DRAWING ✗. The area choice is CONFUSING EQUAL AREA WITH CONGRUENCE ✗. The renaming choice is RENAMING VERTICES INSTEAD OF FIXING THE REASON — tidy lettering makes a proof readable, never valid ✗.)',
    },
  ],
  // s3 — read the swing figure. Every figure here is a true ambiguous case:
  //      drop < rod < neighbouring side, both feet on the positive ray, feet
  //      placed symmetrically about the foot of the perpendicular.
  [
    {
      q: 'The figure shows triangles $JKL$ and $JKM$ standing on one ray from $J$. Both contain the $40^\\circ$ angle at $J$ and the shared side $\\overline{JK}$, and the ticks mark $KL = KM$. What does the picture establish?',
      fig: {
        view: [-1.2, -1.2, 13.5, 7.5],
        alt: 'A ray from J with a segment up to K, and two equal segments from K down to points L and M on the ray.',
        elems: [
          { t: 'seg', a: [0, 0], b: [12.2, 0] },
          { t: 'seg', a: [0, 0], b: [6.894, 5.785] },
          { t: 'seg', a: [6.894, 5.785], b: [2.953, 0] },
          { t: 'seg', a: [6.894, 5.785], b: [10.835, 0] },
          { t: 'point', p: [0, 0], label: 'J', dx: -12, dy: 10 },
          { t: 'point', p: [6.894, 5.785], label: 'K', dx: 0, dy: -10 },
          { t: 'point', p: [2.953, 0], label: 'L', dx: -4, dy: 16 },
          { t: 'point', p: [10.835, 0], label: 'M', dx: 4, dy: 16 },
          { t: 'label', p: [3.447, 2.893], text: '9', dx: -12, dy: -4 },
          { t: 'label', p: [4.924, 2.893], text: '7', dx: -10, dy: 2 },
          { t: 'label', p: [8.865, 2.893], text: '7', dx: 10, dy: 2 },
          { t: 'tick', a: [6.894, 5.785], b: [2.953, 0], n: 1 },
          { t: 'tick', a: [6.894, 5.785], b: [10.835, 0], n: 1 },
          { t: 'angle', at: [0, 0], from: [12.2, 0], to: [6.894, 5.785], r: 1.4, label: '40' },
        ],
      },
      choices: [
        'That $\\triangle JKL \\cong \\triangle JKM$ by SSA',
        'That every triangle containing a $40^\\circ$ angle is obtuse',
        'That SSS can break down once a triangle is stretched',
        'That two triangles can match in two sides and a non-included angle without being congruent',
      ],
      answer: 3,
      solution:
        'Walk the matching parts. Both triangles carry the $40^\\circ$ angle at $J$, both carry the side $\\overline{JK} = 9$, and the ticks give both a side of $7$ running down from $K$. That is a complete SSA package. Yet $\\triangle JKL$ is short and squat while $\\triangle JKM$ is long and lean, so they are plainly not congruent ✓ — the figure is a counterexample, not a proof. Check a second, independent way with the numbers behind the drawing. The height of $K$ above the ray is $9 \\sin 40^\\circ \\approx 5.79$, and the rod of length $7$ clears that height, so $\\sqrt{7^2 - 5.79^2} \\approx 3.94$ tells you the rod lands about $3.94$ units on each side of the point directly below $K$ ✓. Two landings, two triangles. The ordering is what allowed it: the swinging side $7$ is shorter than its neighbour $9$. (The SSA choice is MISTAKING SSA FOR SAS and reading the figure as a proof when it is a refutation ✗. The obtuse choice is a red herring: $\\triangle JKM$ has all angles under $90^\\circ$, so a $40^\\circ$ angle certainly does not force obtuseness ✗. The SSS choice is BLAMING THE SIDES INSTEAD OF THE SWING — SSS is untouched here, since the third sides $JL$ and $JM$ are different lengths ✗.)',
    },
    {
      q: 'In the figure, $\\angle G = 35^\\circ$ and the segment $\\overline{GH}$ runs from the angle up to $H$. A rod is hinged at $H$ and swung down to the base line, landing once at $P$ and once at $Q$; the dashed segment is the straight drop from $H$ to the base line. What lets the rod reach the base line in two places?',
      fig: {
        view: [-1.3, -1.3, 16.5, 7.5],
        alt: 'A ray from G up to H, a dashed vertical drop from H to the base line, and two equal rods from H to points P and Q on the base line.',
        elems: [
          { t: 'seg', a: [0, 0], b: [15.2, 0] },
          { t: 'seg', a: [0, 0], b: [8.192, 5.736] },
          { t: 'seg', a: [8.192, 5.736], b: [2.615, 0] },
          { t: 'seg', a: [8.192, 5.736], b: [13.769, 0] },
          { t: 'seg', a: [8.192, 5.736], b: [8.192, 0], dash: true },
          { t: 'right', at: [8.192, 0], from: [0, 0], to: [8.192, 5.736] },
          { t: 'point', p: [0, 0], label: 'G', dx: -12, dy: 10 },
          { t: 'point', p: [8.192, 5.736], label: 'H', dx: 0, dy: -10 },
          { t: 'point', p: [2.615, 0], label: 'P', dx: -6, dy: 16 },
          { t: 'point', p: [13.769, 0], label: 'Q', dx: 4, dy: 16 },
          { t: 'label', p: [4.096, 2.868], text: '10', dx: -14, dy: -4 },
          { t: 'label', p: [5.404, 2.868], text: '8', dx: -8, dy: 4 },
          { t: 'label', p: [10.981, 2.868], text: '8', dx: 10, dy: 2 },
          { t: 'tick', a: [8.192, 5.736], b: [2.615, 0], n: 1 },
          { t: 'tick', a: [8.192, 5.736], b: [13.769, 0], n: 1 },
          { t: 'angle', at: [0, 0], from: [15.2, 0], to: [8.192, 5.736], r: 1.6, label: '35' },
        ],
      },
      choices: [
        'The rod is shorter than $\\overline{GH}$, yet still longer than the straight drop from $H$ to the base line',
        'The rod is longer than $\\overline{GH}$',
        'The angle at $G$ is obtuse',
        'The rod is exactly as long as the straight drop from $H$ to the base line',
      ],
      answer: 0,
      solution:
        'Two conditions have to hold at once, and the figure shows both. The rod must be long enough to touch the base line at all, which means longer than the dashed drop; and it must be short enough that its circle has not swallowed the vertex $G$, which means shorter than $\\overline{GH}$. Here the drop is $10 \\sin 35^\\circ \\approx 5.74$, the rod is $8$, and $\\overline{GH}$ is $10$, so $5.74 < 8 < 10$ ✓ — the rod lands twice, at $P$ and at $Q$. Check a second, independent way by thinking about circles instead of inequalities. Swinging the rod traces a circle centered at $H$ with radius $8$. A line and a circle meet twice, once, or not at all, according to whether the circle’s radius beats the distance from the center to the line. That distance is the dashed drop, $\\approx 5.74$, which is under $8$, so the circle cuts the base line twice ✓. The second condition keeps both crossings on the correct side of $G$: since $8 < 10$, neither crossing slips past $G$ onto the opposite ray. (The longer-rod choice is TREATING THE ACUTE CASE AS THE SAFE ONE in reverse — a rod longer than $\\overline{GH}$ puts one crossing behind $G$, leaving just one usable triangle ✗. The obtuse choice is CALLING THE OBTUSE CASE THE BROKEN ONE; the angle here is $35^\\circ$, and an obtuse angle would force the opposite side to be longest and the triangle unique ✗. The exact-drop choice is FORGETTING THE ROD MUST REACH THE BASE LINE with room to spare: a rod exactly as long as the drop touches down at one point only, giving a single right triangle ✗.)',
    },
    {
      q: 'The figure shows $\\triangle TUV$ and $\\triangle TUW$ built on one ray from $T$. They share the $28^\\circ$ angle at $T$ and the side $\\overline{TU}$, and the ticks show $UV = UW$. A student says the two triangles must therefore be congruent. What is the flaw in that claim?',
      fig: {
        view: [-1.3, -1.3, 16.8, 6.8],
        alt: 'A ray from T with a segment up to U, and two equal segments from U down to points V and W on the ray.',
        elems: [
          { t: 'seg', a: [0, 0], b: [15.5, 0] },
          { t: 'seg', a: [0, 0], b: [8.83, 4.695] },
          { t: 'seg', a: [8.83, 4.695], b: [3.638, 0] },
          { t: 'seg', a: [8.83, 4.695], b: [14.022, 0] },
          { t: 'point', p: [0, 0], label: 'T', dx: -12, dy: 10 },
          { t: 'point', p: [8.83, 4.695], label: 'U', dx: 0, dy: -10 },
          { t: 'point', p: [3.638, 0], label: 'V', dx: -6, dy: 16 },
          { t: 'point', p: [14.022, 0], label: 'W', dx: 4, dy: 16 },
          { t: 'label', p: [4.415, 2.348], text: '10', dx: -14, dy: -4 },
          { t: 'label', p: [6.234, 2.348], text: '7', dx: -6, dy: 4 },
          { t: 'label', p: [11.426, 2.348], text: '7', dx: 10, dy: 2 },
          { t: 'tick', a: [8.83, 4.695], b: [3.638, 0], n: 1 },
          { t: 'tick', a: [8.83, 4.695], b: [14.022, 0], n: 1 },
          { t: 'angle', at: [0, 0], from: [15.5, 0], to: [8.83, 4.695], r: 1.7, label: '28' },
        ],
      },
      choices: [
        'The angle at $T$ is too small for a triangle to exist',
        'The ticks are on the wrong segments; they belong on $\\overline{TU}$',
        'The matching parts are two sides and a non-included angle, and that arrangement fits two different triangles — the figure is showing you both',
        'The two triangles overlap, and overlapping triangles are never congruent',
      ],
      answer: 2,
      solution:
        'List what truly matches: the angle at $T$, the side $\\overline{TU} = 10$, and a side of $7$ dropping from $U$. The angle at $T$ does not sit between those two sides — $\\overline{UV}$ never touches $T$ — so this is SSA, and SSA is not a congruence criterion. The figure is the counterexample, drawn twice on one ray ✓. Check a second, independent way by comparing a part the student did not check. In $\\triangle TUV$ the third side is $TV \\approx 3.64$; in $\\triangle TUW$ it is $TW \\approx 14.02$. Congruent triangles have all three sides equal, and $3.64 \\ne 14.02$, so these two are not congruent — settled without ever naming a criterion ✓. Both routes agree, and the ordering explains why it was possible: the swinging side $7$ is shorter than its neighbour $10$. (The small-angle choice is wrong on its face: both triangles are drawn and both exist ✗. The tick choice is BLAMING THE SIDES INSTEAD OF THE SWING; $\\overline{TU}$ is shared outright, so marking it would add nothing ✗. The overlap choice invents a rule — congruence does not care whether two triangles share territory, and here they share $\\triangle TUV$ entirely ✗.)',
    },
  ],
  // s4 — two right triangles, equal hypotenuse and one equal leg. The base
  //      problem restates the section's second worked example almost exactly,
  //      so these three deliberately move: one names the criterion, one asks
  //      how much MORE is needed, one drops the letters and mirrors the
  //      orientation so the marked leg sits differently in each triangle.
  [
    {
      q: 'Two right triangles have their right angles at $M$ and at $S$. Their hypotenuses are equal and one pair of legs is equal, as the ticks show. Which criterion settles the congruence?',
      fig: {
        view: [-1.2, -1.2, 12.5, 4.5],
        alt: 'Two right triangles, the second a mirror image of the first, with matching ticks on the hypotenuses and on one pair of legs.',
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [0, 3]], fill: false },
          { t: 'poly', pts: [[11, 0], [7, 0], [11, 3]], fill: false },
          { t: 'point', p: [0, 0], label: 'M', dx: -12, dy: 12 },
          { t: 'point', p: [4, 0], label: 'N', dx: 10, dy: 12 },
          { t: 'point', p: [0, 3], label: 'P', dx: -4, dy: -10 },
          { t: 'point', p: [11, 0], label: 'S', dx: 10, dy: 12 },
          { t: 'point', p: [7, 0], label: 'T', dx: -10, dy: 12 },
          { t: 'point', p: [11, 3], label: 'U', dx: 6, dy: -10 },
          { t: 'right', at: [0, 0], from: [4, 0], to: [0, 3] },
          { t: 'right', at: [11, 0], from: [7, 0], to: [11, 3] },
          { t: 'tick', a: [4, 0], b: [0, 3], n: 1 },
          { t: 'tick', a: [7, 0], b: [11, 3], n: 1 },
          { t: 'tick', a: [0, 0], b: [0, 3], n: 2 },
          { t: 'tick', a: [11, 0], b: [11, 3], n: 2 },
        ],
      },
      choices: [
        'HL',
        'ASA, using the two right angles',
        'SAS, with the right angle included between the hypotenuse and the leg',
        'Nothing settles it — SSA information never determines a triangle',
      ],
      answer: 0,
      solution:
        'The matching parts are a right angle, a hypotenuse, and a leg. That is SSA in form, but it is the one SSA setup that works: the side across from a right angle is the hypotenuse, the longest side of a right triangle, so it cannot be the shorter, swinging side. One landing spot, one triangle, and the criterion has a name — HL ✓. Check a second, independent way with the Pythagorean theorem, which never mentions swinging. Writing the hypotenuse as $c$ and the marked leg as $a$, the remaining leg is $\\sqrt{c^2 - a^2}$ in each triangle, and the same two inputs give the same output. Three pairs of equal sides is SSS, so the triangles are congruent ✓. Notice the second triangle is drawn as a mirror image of the first — congruence tolerates flipping, so that changes nothing. (The ASA choice is wrong because only ONE pair of angles is known, and ASA needs two angles with the side between them ✗. The SAS choice is PUTTING THE RIGHT ANGLE BETWEEN THE HYPOTENUSE AND THE LEG; the right angle sits between the two LEGS, with the hypotenuse across from it — which is exactly why HL looks like SSA ✗. The last choice is DECLARING SSA ALWAYS USELESS, forgetting that the right-angle case is its famous success ✗.)',
    },
    {
      q: 'In right triangles $\\triangle BCD$ and $\\triangle FGH$ the right angles sit at $C$ and $G$, the hypotenuses $\\overline{BD}$ and $\\overline{FH}$ are equal, and $\\overline{CD} = \\overline{GH}$. Alex wants to know how much more information he needs before he may call the triangles congruent. What should he be told?',
      fig: {
        view: [-1.5, -1.5, 19.5, 8],
        alt: 'Two right triangles with matching ticks on the hypotenuses and on one pair of legs.',
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [0, 6]], fill: false },
          { t: 'poly', pts: [[10, 0], [18, 0], [10, 6]], fill: false },
          { t: 'point', p: [0, 0], label: 'C', dx: -12, dy: 12 },
          { t: 'point', p: [8, 0], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [0, 6], label: 'D', dx: -4, dy: -10 },
          { t: 'point', p: [10, 0], label: 'G', dx: -12, dy: 12 },
          { t: 'point', p: [18, 0], label: 'F', dx: 10, dy: 12 },
          { t: 'point', p: [10, 6], label: 'H', dx: -4, dy: -10 },
          { t: 'right', at: [0, 0], from: [8, 0], to: [0, 6] },
          { t: 'right', at: [10, 0], from: [18, 0], to: [10, 6] },
          { t: 'tick', a: [8, 0], b: [0, 6], n: 1 },
          { t: 'tick', a: [18, 0], b: [10, 6], n: 1 },
          { t: 'tick', a: [0, 0], b: [0, 6], n: 2 },
          { t: 'tick', a: [10, 0], b: [10, 6], n: 2 },
        ],
      },
      choices: [
        'He needs the third pair of sides marked equal as well',
        'He needs nothing more — a hypotenuse and a leg already force congruence, by HL',
        'He needs a second pair of angles, because two sides can never be enough on their own',
        'He can never conclude congruence here, because the equal angle is not between the equal sides',
      ],
      answer: 1,
      solution:
        'Alex already has everything. A right angle, a hypotenuse, and a leg is precisely the HL package, and HL is a theorem: the side across from the right angle is the longest side of the triangle, so no second landing spot exists and the triangle is pinned down ✓. Check a second, independent way by trying to build a rival triangle and watching it fail. Fix the right angle at $G$, lay $\\overline{GH}$ down as the known leg, and swing the hypotenuse of the known length from $H$. It must land on the ray perpendicular to $\\overline{GH}$ at $G$, and a circle meets a ray in at most one point on that side — the second crossing sits on the opposite ray, which would put the right angle outside the triangle ✓. Exactly one rival, and it is the original. (The third-pair choice is DEMANDING THE THIRD PAIR OF SIDES, extra marks that HL makes unnecessary ✗. The second-angle choice is DEMANDING ALL THREE ANGLES in disguise, and would also outlaw SSS ✗. The last choice is DECLARING SSA ALWAYS USELESS: the observation about the angle not being included is correct, but the conclusion drawn from it is not, because the right angle rescues this case ✗.)',
    },
    {
      q: 'Two right triangles are cut from card. Each one has a hypotenuse of $13$ cm and a leg of $5$ cm. Must the two pieces be identical in shape and size?',
      fig: {
        view: [-1.5, -1.5, 21.5, 13.5],
        alt: 'Two right triangles in different orientations, each with a hypotenuse marked 13 and one leg marked 5.',
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [0, 5]], fill: false },
          { t: 'poly', pts: [[15, 0], [20, 0], [15, 12]], fill: false },
          { t: 'right', at: [0, 0], from: [12, 0], to: [0, 5] },
          { t: 'right', at: [15, 0], from: [20, 0], to: [15, 12] },
          { t: 'tick', a: [12, 0], b: [0, 5], n: 1 },
          { t: 'tick', a: [20, 0], b: [15, 12], n: 1 },
          { t: 'tick', a: [0, 0], b: [0, 5], n: 2 },
          { t: 'tick', a: [15, 0], b: [20, 0], n: 2 },
          { t: 'label', p: [6, 2.5], text: '13', dx: 12, dy: -4 },
          { t: 'label', p: [0, 2.5], text: '5', dx: -14, dy: 0 },
          { t: 'label', p: [17.5, 6], text: '13', dx: 16, dy: 0 },
          { t: 'label', p: [17.5, 0], text: '5', dx: 0, dy: 16 },
        ],
      },
      choices: [
        'No — the $5$ cm legs might sit in different positions, so the pieces could differ',
        'No — SSA information never determines a triangle',
        'Only if the third sides are measured too and found to be equal',
        'Yes — a hypotenuse and a leg fix a right triangle completely, which is the HL criterion',
      ],
      answer: 3,
      solution:
        'A right angle plus a hypotenuse plus a leg is the HL package. The hypotenuse is the longest side of a right triangle, so the leg cannot swing to a second landing spot, and only one triangle fits the description ✓. The two pieces are congruent, even though the picture stands one of them on a different side. Check a second, independent way by simply finishing both triangles. In each piece the missing leg is $\\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$ cm, so both pieces have sides $5$, $12$, $13$ ✓. Three matching sides is SSS, so the pieces are congruent — computed, not assumed. (The position choice is THINKING THE MARKED LEG’S POSITION MATTERS; turning or flipping a piece of card never changes its shape, and the figure shows the same triangle in two poses ✗. The never-determines choice is DECLARING SSA ALWAYS USELESS ✗. The third-side choice is DEMANDING THE THIRD PAIR OF SIDES: the third side is already forced to be $12$, so measuring it adds nothing ✗.)',
    },
  ],
  // s5 — WHY HL is trustworthy. The base answer is the Pythagoras-to-SSS
  //      route, so v1 argues from "the hypotenuse is longest" instead, v2
  //      asks which computation performs the upgrade, and v3 flips the
  //      direction to a find-the-false-statement question.
  [
    {
      q: 'Which reason best explains why the HL criterion can be trusted, even though it looks like SSA?',
      choices: [
        'Because all right triangles have the same shape as one another',
        'Because the right angle sits between the hypotenuse and the marked leg',
        'Because the hypotenuse is the longest side of a right triangle, so the swinging side cannot reach a second landing spot',
        'Because a right triangle is always exactly half of a square',
      ],
      answer: 2,
      solution:
        'SSA collapses only when the swinging side is the shorter of the two given sides, because that is when its circle crosses the base line twice on the usable side. In HL the swinging side is the hypotenuse, and in a right triangle the hypotenuse beats both legs, so the shortness that causes the trouble simply cannot occur ✓. One landing spot, one triangle. Check a second, independent way by pushing the height argument. Put the right angle at $C$ with the known leg along one arm; the second vertex must land on the perpendicular ray at $C$. The distance from the far end of the hypotenuse to that ray is exactly the known leg, and a circle whose radius exceeds that distance meets the FULL line twice — but the two crossings sit on opposite sides of $C$, so only one of them lies on the ray that carries the triangle ✓. The other would place the right angle outside the figure. (The all-alike choice is CLAIMING ALL RIGHT TRIANGLES ARE ALIKE; a $3$-$4$-$5$ and a $5$-$12$-$13$ triangle are both right and plainly different shapes ✗. The included-angle choice is PUTTING THE RIGHT ANGLE BETWEEN THE HYPOTENUSE AND THE LEG — it sits between the two legs ✗. The half-a-square choice holds only for the $45$-$45$-$90$ triangle, not for right triangles in general ✗.)',
    },
    {
      q: 'Two right triangles have equal hypotenuses of length $h$ and equal legs of length $a$. Which single computation turns the HL argument into an SSS argument?',
      choices: [
        'Adding the two given lengths to get $h + a$',
        'Halving the hypotenuse, since the hypotenuse is twice the shorter leg',
        'Comparing the two areas',
        'Computing the remaining leg as $\\sqrt{h^2 - a^2}$, which comes out the same in both triangles',
      ],
      answer: 3,
      solution:
        'The Pythagorean theorem says leg$^2$ + leg$^2$ = hypotenuse$^2$, so the unknown leg satisfies $b^2 = h^2 - a^2$ and therefore $b = \\sqrt{h^2 - a^2}$. Both triangles feed in the same $h$ and the same $a$, so both get the same $b$ — and now all three pairs of sides match, which is SSS ✓. Check a second, independent way with a concrete pair instead of symbols. Give both triangles a hypotenuse of $17$ and a leg of $8$. Then each remaining leg is $\\sqrt{289 - 64} = \\sqrt{225} = 15$, so both triangles have sides $8$, $15$, $17$ ✓, and SSS finishes the job with no swinging-rod picture anywhere in sight. (The addition choice is ADDING THE LENGTHS, which is what Pythagoras is designed to prevent ✗. The halving choice is CLAIMING ALL RIGHT TRIANGLES ARE ALIKE in a specific costume: the hypotenuse is twice the shorter leg only in a $30$-$60$-$90$ triangle ✗. The area choice is CONFUSING EQUAL AREA WITH CONGRUENCE ✗.)',
    },
    {
      q: 'Three of the statements below about the HL criterion are true. Which one is FALSE?',
      choices: [
        'HL may not be used until both pairs of legs have been marked equal',
        'HL applies only when both triangles contain a right angle',
        'The side across from the right angle is the longest side of the triangle',
        'HL can be replaced by an SSS argument once the Pythagorean theorem supplies the third side',
      ],
      answer: 0,
      solution:
        'HL asks for a right angle, a pair of equal hypotenuses, and ONE pair of equal legs — that is the whole point of the criterion, and the second leg is forced rather than assumed. So the statement demanding both pairs of legs is the false one ✓. Check a second, independent way by confirming the other three, one at a time, so the false statement is identified by elimination rather than by recognition. A right angle in both triangles is what makes the swinging side the hypotenuse, so that requirement is genuine ✓. The side across from the largest angle is the longest side, and in a right triangle the right angle is the largest, so the hypotenuse is longest ✓. And $\\sqrt{h^2 - a^2}$ hands you the third side from the two given ones, turning HL into SSS ✓. Three survivors, one casualty — and the casualty is the demand for both legs. (Choosing the right-angle statement is DECLARING SSA ALWAYS USELESS in reverse, treating a true requirement as a false one ✗. Choosing the longest-side statement means missing that the hypotenuse is opposite the biggest angle ✗. Choosing the SSS statement is missing the Pythagorean shortcut the section builds ✗. The keyed answer is DEMANDING THE THIRD PAIR OF SIDES, which would make HL pointless: with all three sides marked you would simply cite SSS.)',
    },
  ],
  // s6 — HL, then Pythagoras for the missing leg. Triples: 9-12-15, 12-16-20,
  //      9-40-41. The 9-40-41 figure is stacked rather than side by side,
  //      because two 40-wide triangles in a row render as an unreadable strip.
  [
    {
      q: '$\\triangle RST$ and $\\triangle XYZ$ have right angles at $R$ and $X$, with $RS = XY = 9$ and hypotenuses $ST = YZ = 15$. The triangles are congruent by HL. How long is $\\overline{XZ}$?',
      fig: {
        view: [-1.5, -1.5, 24.5, 14.5],
        alt: 'Two congruent right triangles, each with a leg of 9 and a hypotenuse of 15; the remaining leg of the second is marked with a question mark.',
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [0, 12]], fill: false },
          { t: 'poly', pts: [[13, 0], [22, 0], [13, 12]], fill: false },
          { t: 'point', p: [0, 0], label: 'R', dx: -12, dy: 12 },
          { t: 'point', p: [9, 0], label: 'S', dx: 10, dy: 12 },
          { t: 'point', p: [0, 12], label: 'T', dx: -4, dy: -10 },
          { t: 'point', p: [13, 0], label: 'X', dx: -12, dy: 12 },
          { t: 'point', p: [22, 0], label: 'Y', dx: 10, dy: 12 },
          { t: 'point', p: [13, 12], label: 'Z', dx: -4, dy: -10 },
          { t: 'right', at: [0, 0], from: [9, 0], to: [0, 12] },
          { t: 'right', at: [13, 0], from: [22, 0], to: [13, 12] },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 16 },
          { t: 'label', p: [4.5, 6], text: '15', dx: 14, dy: 0 },
          { t: 'label', p: [17.5, 0], text: '9', dx: 0, dy: 16 },
          { t: 'label', p: [17.5, 6], text: '15', dx: 14, dy: 0 },
          { t: 'label', p: [13, 6], text: '?', dx: -14, dy: 0 },
        ],
      },
      choices: ['$6$', '$12$', '$144$', '$24$'],
      answer: 1,
      solution:
        'The right angle sits at $X$, so $\\overline{YZ}$ is the hypotenuse and $\\overline{XY}$ and $\\overline{XZ}$ are the legs. Pythagoras gives $XZ^2 = 15^2 - 9^2 = 225 - 81 = 144$, so $XZ = \\sqrt{144} = 12$ ✓. Check a second, independent way by recognising the family instead of computing. Divide every length by $3$: the hypotenuse becomes $5$ and the known leg becomes $3$, which is the $3$-$4$-$5$ right triangle, whose third side is $4$. Scaling back up by $3$ gives $4 \\times 3 = 12$ ✓. As a guard, $9^2 + 12^2 = 81 + 144 = 225 = 15^2$ ✓. HL is what let us copy the answer across: $\\triangle RST \\cong \\triangle XYZ$, so $XZ$ matches $RT$. (The choice $6$ is SUBTRACTING THE LENGTHS INSTEAD OF THE SQUARES, computing $15 - 9$ ✗. The choice $144$ is FORGETTING TO TAKE THE SQUARE ROOT and reporting $XZ^2$ ✗. The choice $24$ is ADDING THE LENGTHS, $15 + 9$, which is longer than the hypotenuse and could not be a leg ✗.)',
    },
    {
      q: 'Right triangles $\\triangle DEF$ and $\\triangle PQR$ have their right angles at $E$ and $Q$. Their hypotenuses are $DF = PR = 20$, and one pair of legs is $EF = QR = 12$. HL makes the two triangles congruent. What is $PQ$?',
      fig: {
        view: [-1.5, -1.5, 28.5, 18],
        alt: 'Two congruent right triangles, each with a leg of 12 and a hypotenuse of 20; the remaining leg of the second is marked with a question mark.',
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [0, 16]], fill: false },
          { t: 'poly', pts: [[14, 0], [26, 0], [14, 16]], fill: false },
          { t: 'point', p: [0, 0], label: 'E', dx: -12, dy: 12 },
          { t: 'point', p: [12, 0], label: 'F', dx: 10, dy: 12 },
          { t: 'point', p: [0, 16], label: 'D', dx: -4, dy: -10 },
          { t: 'point', p: [14, 0], label: 'Q', dx: -12, dy: 12 },
          { t: 'point', p: [26, 0], label: 'R', dx: 10, dy: 12 },
          { t: 'point', p: [14, 16], label: 'P', dx: -4, dy: -10 },
          { t: 'right', at: [0, 0], from: [12, 0], to: [0, 16] },
          { t: 'right', at: [14, 0], from: [26, 0], to: [14, 16] },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 16 },
          { t: 'label', p: [6, 8], text: '20', dx: 16, dy: 0 },
          { t: 'label', p: [20, 0], text: '12', dx: 0, dy: 16 },
          { t: 'label', p: [20, 8], text: '20', dx: 16, dy: 0 },
          { t: 'label', p: [14, 8], text: '?', dx: -14, dy: 0 },
        ],
      },
      choices: ['$16$', '$8$', '$256$', '$32$'],
      answer: 0,
      solution:
        'With the right angle at $Q$, the hypotenuse is $\\overline{PR} = 20$ and the two legs are $\\overline{QR} = 12$ and $\\overline{PQ}$. Pythagoras gives $PQ^2 = 20^2 - 12^2 = 400 - 144 = 256$, so $PQ = \\sqrt{256} = 16$ ✓. Check a second, independent way by scaling a familiar triangle. Dividing every length by $4$ turns the hypotenuse into $5$ and the known leg into $3$ — the $3$-$4$-$5$ triangle again — and its third side of $4$ scales back to $4 \\times 4 = 16$ ✓. Guard: $12^2 + 16^2 = 144 + 256 = 400 = 20^2$ ✓, and $16$ is comfortably under the hypotenuse, as a leg must be. (The choice $8$ is SUBTRACTING THE LENGTHS INSTEAD OF THE SQUARES, computing $20 - 12$ ✗. The choice $256$ is FORGETTING TO TAKE THE SQUARE ROOT ✗. The choice $32$ is ADDING THE LENGTHS ✗.)',
    },
    {
      q: 'In right triangles $\\triangle GHK$ and $\\triangle LMN$ the right angles are at $H$ and $M$. The hypotenuses satisfy $GK = LN = 41$, and the legs $GH = LM = 9$. By HL the two triangles are congruent. How long is $\\overline{MN}$?',
      fig: {
        view: [-3, -3, 44, 25],
        alt: 'Two congruent long thin right triangles stacked one above the other, each with a short leg of 9 and a hypotenuse of 41; the long leg of the lower one is marked with a question mark.',
        elems: [
          { t: 'poly', pts: [[0, 13], [40, 13], [0, 22]], fill: false },
          { t: 'poly', pts: [[40, 0], [0, 0], [40, 9]], fill: false },
          { t: 'point', p: [0, 13], label: 'H', dx: -12, dy: 12 },
          { t: 'point', p: [40, 13], label: 'K', dx: 12, dy: 10 },
          { t: 'point', p: [0, 22], label: 'G', dx: -12, dy: -4 },
          { t: 'point', p: [40, 0], label: 'M', dx: 12, dy: 12 },
          { t: 'point', p: [0, 0], label: 'N', dx: -12, dy: 10 },
          { t: 'point', p: [40, 9], label: 'L', dx: 12, dy: -4 },
          { t: 'right', at: [0, 13], from: [40, 13], to: [0, 22] },
          { t: 'right', at: [40, 0], from: [0, 0], to: [40, 9] },
          { t: 'label', p: [0, 17.5], text: '9', dx: -14, dy: 0 },
          { t: 'label', p: [20, 17.5], text: '41', dx: 0, dy: -8 },
          { t: 'label', p: [40, 4.5], text: '9', dx: 14, dy: 0 },
          { t: 'label', p: [20, 4.5], text: '41', dx: 0, dy: -8 },
          { t: 'label', p: [20, 0], text: '?', dx: 0, dy: 16 },
        ],
      },
      choices: ['$32$', '$50$', '$40$', '$1600$'],
      answer: 2,
      solution:
        'The right angle at $M$ makes $\\overline{LN} = 41$ the hypotenuse, with legs $\\overline{LM} = 9$ and $\\overline{MN}$. Pythagoras gives $MN^2 = 41^2 - 9^2 = 1681 - 81 = 1600$, so $MN = \\sqrt{1600} = 40$ ✓. Check a second, independent way using the difference of squares, which avoids the two big multiplications entirely: $41^2 - 9^2 = (41 - 9)(41 + 9) = 32 \\times 50 = 1600$, and $\\sqrt{1600} = 40$ ✓. Guard: $9^2 + 40^2 = 81 + 1600 = 1681$, and $41^2 = 1681$ ✓. HL is what licenses reading the answer off the congruent partner, since $\\overline{MN}$ matches $\\overline{HK}$. (The choice $32$ is SUBTRACTING THE LENGTHS INSTEAD OF THE SQUARES, $41 - 9$ — and it is no accident that it appears as a factor above, which is exactly why it feels plausible ✗. The choice $50$ is ADDING THE LENGTHS ✗. The choice $1600$ is FORGETTING TO TAKE THE SQUARE ROOT ✗.)',
    },
  ],
  // s7 — the uniqueness condition. v2 flips to the danger condition, v3 makes
  //      the reader apply it to four numeric reports, including one where the
  //      rod is too short to reach the base line at all.
  [
    {
      q: 'You are handed an angle, the side beside it, and the side across from it. Under which condition is exactly one triangle possible?',
      choices: [
        'When the side across from the angle is the shorter of the two given sides',
        'When the given angle measures less than $90^\\circ$',
        'Never — two triangles always fit SSA data',
        'When the side across from the angle is at least as long as the side beside it',
      ],
      answer: 3,
      solution:
        'The side across from the angle is the one that swings. If it is at least as long as its neighbour, its circle reaches past the vertex of the angle, so the second crossing falls behind the vertex on the wrong ray and cannot serve as a triangle. One usable landing spot means one triangle ✓. Check a second, independent way with a numerical trial. Take the angle to be $30^\\circ$ and the side beside it $10$, so the drop is $5$. Swing a rod of length $12$: it crosses the full base line at $10\\cos 30^\\circ \\pm \\sqrt{144 - 25} \\approx 8.66 \\pm 10.91$, giving $19.57$ and $-2.25$ ✓. The negative crossing sits on the opposite side of the vertex, so only $19.57$ builds a triangle with the $30^\\circ$ angle — exactly one triangle, and the rod was the longer side ✓. (The shorter-side choice is exactly backwards: that is the danger zone where two triangles appear ✗. The acute choice is TREATING THE ACUTE CASE AS THE SAFE ONE, when acute angles are where the double landing happens ✗. The never choice is DECLARING SSA ALWAYS USELESS, which HL alone refutes ✗.)',
    },
    {
      q: 'A set of SSA measurements is called risky when a second triangle can sneak in. Which description marks the risky case?',
      choices: [
        'The side across from the angle is longer than the side beside it',
        'The given angle is obtuse',
        'The side across from the angle is shorter than the side beside it, yet still long enough to reach the base line',
        'The two given sides are equal to each other',
      ],
      answer: 2,
      solution:
        'Two things have to go wrong at once. The swinging side must be short enough that both crossings stay on the correct side of the vertex, which means shorter than its neighbour; and it must still be long enough to touch the base line at all. Both conditions together are the risky case ✓. Check a second, independent way by testing the boundary from each direction. Fix a $30^\\circ$ angle with a neighbouring side of $20$, so the drop is $10$. A rod of $9$ never reaches the base line — zero triangles, not two ✗. A rod of $10$ touches down exactly once, at the foot of the drop, giving a single right triangle. A rod of $15$ lands at $20\\cos 30^\\circ \\pm \\sqrt{225 - 100} \\approx 17.32 \\pm 11.18$, that is at $6.14$ and $28.50$, both on the correct ray — two triangles ✓. A rod of $25$ lands at $17.32 \\pm 22.91$, and the crossing at $-5.59$ is behind the vertex, so one triangle again. Only the middle band is risky ✓. (The longer choice describes the safe case ✗. The obtuse choice is CALLING THE OBTUSE CASE THE BROKEN ONE; opposite an obtuse angle sits the longest side, so that case is safe ✗. The equal-sides choice is INVENTING A SIZE-GAP RULE: when the swinging side exactly equals its neighbour, the second crossing lands on the vertex itself and collapses, leaving one triangle ✗.)',
    },
    {
      q: 'Four students each report an angle and two sides, with the angle NOT sitting between them. Whose numbers pin down exactly one triangle?',
      choices: [
        'Angle $50^\\circ$, side beside it $14$, side across from it $11$',
        'Angle $50^\\circ$, side beside it $11$, side across from it $14$',
        'Angle $50^\\circ$, side beside it $14$, side across from it $9$',
        'Angle $50^\\circ$, side beside it $14$, side across from it $13$',
      ],
      answer: 1,
      solution:
        'Compare the swinging side with its neighbour in each report. Only the second has the side across from the angle ($14$) at least as long as the side beside it ($11$), so only there does the circle put its second crossing behind the vertex, leaving exactly one triangle ✓. Check a second, independent way by computing the drop and locating the landings, which also exposes what is wrong with each rival. In the three reports built on a neighbouring side of $14$, the drop is $14 \\sin 50^\\circ \\approx 10.72$ and the foot sits at $14 \\cos 50^\\circ \\approx 9.00$. A rod of $11$ lands at $9.00 \\pm \\sqrt{121 - 115.02} \\approx 9.00 \\pm 2.45$, so at $6.55$ and $11.44$ — two triangles. A rod of $13$ lands at $9.00 \\pm 7.35$, so at $1.65$ and $16.35$ — two triangles again. A rod of $9$ is shorter than the drop of $10.72$ and never touches the base line — zero triangles ✓. In the winning report the drop is $11 \\sin 50^\\circ \\approx 8.43$, the foot is at $\\approx 7.07$, and the rod of $14$ lands at $7.07 \\pm 11.18$; the crossing at $-4.11$ is behind the vertex, so exactly one triangle survives ✓. (The report with $11$ is TREATING THE ACUTE CASE AS THE SAFE ONE, since nothing about it looks alarming ✗. The report with $13$ is PICKING THE PAIR THAT IS CLOSEST IN LENGTH, as though nearly equal sides were nearly safe — what matters is which one is shorter, not by how much ✗. The report with $9$ is FORGETTING THE ROD MUST REACH THE BASE LINE: it produces no triangle at all, and zero is not one ✗.)',
    },
  ],
  // s8 — spot the SSA and say why congruence fails. Every set of numbers here
  //      was checked against drop < swinging side < neighbour, so the two
  //      triangles genuinely exist; the base problem's own numbers (40, 8, 6)
  //      and the section's worked example (35, 5, 9) are both avoided.
  [
    {
      q: 'Omar knows that $\\angle P = \\angle X = 42^\\circ$, $PQ = XY = 12$, and $QR = YZ = 9$. Why can he NOT conclude that $\\triangle PQR \\cong \\triangle XYZ$?',
      choices: [
        'Because two triangles can never be called congruent unless all three sides are given',
        'Because the $42^\\circ$ angle does not sit between the two given sides, and the side across from it ($9$) is shorter than $12$ — so it can land in two different spots',
        'Because $42^\\circ$ is not a whole number of right angles',
        'Because $\\angle Q$ and $\\angle Y$ were never measured, and any congruence claim needs three angles',
      ],
      answer: 1,
      solution:
        'Check where the angle sits first. Sides $\\overline{PQ}$ and $\\overline{QR}$ meet at $Q$, so the included angle is $\\angle Q$ — but Omar was given $\\angle P$, which is outside the pair. That makes this SSA. Then check the ordering: the side across from $\\angle P$ is $\\overline{QR} = 9$, shorter than the neighbouring $\\overline{PQ} = 12$, so it is free to swing to two landing spots and each triangle could be either version ✓. Check a second, independent way by building both versions and measuring the leftover side. The drop from $Q$ to line $\\overline{PR}$ is $12 \\sin 42^\\circ \\approx 8.03$, which the rod of $9$ clears, and $\\sqrt{81 - 64.5} \\approx 4.07$. The foot sits at $12 \\cos 42^\\circ \\approx 8.92$, so $R$ lands at about $4.85$ or about $12.99$ ✓. Two possible values for $PR$ from the same three measurements — that is a refutation, not a proof. (The all-three-sides choice is DEMANDING ALL THREE SIDES, which would also outlaw SAS ✗. The right-angle-multiple choice invents a rule about angle sizes that no criterion contains ✗. The three-angles choice is DEMANDING ALL THREE ANGLES, and three angles would not settle size anyway ✗.)',
    },
    {
      q: 'Two triangles are known to satisfy $\\angle B = \\angle E = 25^\\circ$, $BC = EF = 20$, and $CA = FD = 11$. Petra says congruence follows. Is she right?',
      choices: [
        'Yes, by SAS',
        'Yes, because both a pair of sides and a pair of sides are given',
        'No, because no triangle can have a $25^\\circ$ angle beside a side of length $20$',
        'No — the angle is not included, and the side across from it is the shorter one, so two different triangles fit the same data',
      ],
      answer: 3,
      solution:
        'Locate the angle relative to the two sides. $\\overline{BC}$ touches $\\angle B$, but $\\overline{CA}$ does not, so $\\angle B$ is not included and this is SSA. Now compare lengths: the swinging side $\\overline{CA} = 11$ is shorter than its neighbour $\\overline{BC} = 20$, which is the danger zone ✓. Congruence does not follow. Check a second, independent way by locating both landing spots. The drop from $C$ to line $\\overline{BA}$ is $20 \\sin 25^\\circ \\approx 8.45$, and the rod of $11$ clears it, so the two landings sit $\\sqrt{121 - 71.4} \\approx 7.04$ either side of the foot at $20 \\cos 25^\\circ \\approx 18.13$ ✓. That puts $A$ at roughly $11.09$ or roughly $25.17$ from $B$ — two different triangles from Petra’s three numbers, so no argument built on them alone can pick one ✓. (The SAS choice is MISTAKING SSA FOR SAS; SAS would need $\\angle C$, the angle where the two given sides really meet ✗. The "both pairs given" choice is BLAMING THE SIDES INSTEAD OF THE SWING, counting matching parts without checking their arrangement ✗. The no-such-triangle choice is wrong on the arithmetic: two such triangles exist, as the drop calculation shows ✗.)',
    },
    {
      q: 'Marisol has $\\angle J = \\angle T = 48^\\circ$, $JK = TU = 15$, and $KL = UV = 13$, and she wants to know why congruence is not guaranteed. Which side is the one that can swing, and what does that mean?',
      choices: [
        '$\\overline{KL}$ swings, because it does not touch $\\angle J$; being shorter than $\\overline{JK}$, it can land in two places',
        '$\\overline{JK}$ swings, because it is the longer of the two given sides',
        'Neither side swings; the real trouble is that $48^\\circ$ was measured at the wrong vertex',
        '$\\overline{KL}$ swings, but since it is shorter than $\\overline{JK}$ no triangle exists at all',
      ],
      answer: 0,
      solution:
        'The swinging side is always the one across from the marked angle — the side that does not touch it. Here $\\angle J$ is at $J$, and $\\overline{KL}$ never touches $J$, so $\\overline{KL}$ is the rod. It measures $13$, shorter than its neighbour $\\overline{JK} = 15$, which is exactly the arrangement that lets it reach the base line twice ✓. Check a second, independent way by asking which side is genuinely pinned. Once the $48^\\circ$ angle and the side $\\overline{JK} = 15$ are drawn, the vertices $J$ and $K$ are both locked in place, so $\\overline{JK}$ cannot move at all; the only vertex still free is $L$, and it is $\\overline{KL}$ that carries it ✓. That identifies the rod without any inequality. Its two landings are real, too: the drop from $K$ is $15 \\sin 48^\\circ \\approx 11.15$, under $13$, so the rod does reach the base line, twice ✓. (The $\\overline{JK}$ choice picks the pinned side ✗. The wrong-vertex choice is RENAMING VERTICES INSTEAD OF FIXING THE REASON — nothing was mismeasured; the arrangement itself is the problem ✗. The no-triangle choice is FORGETTING THE ROD MUST REACH THE BASE LINE and misapplying it: $13$ clears the drop of about $11.15$, so triangles certainly exist — two of them ✗.)',
    },
  ],
  // s9 — the swing figure, measured. h = AB sin(30) = AB/2, half-chord =
  //      sqrt(BC^2 - h^2), CD = twice that. Each setup keeps BC < AB so both
  //      feet land on the ray in front of A and the two triangles genuinely
  //      share the marked angle; a setup with BC > AB would put C behind A
  //      and the figure would argue against its own caption.
  [
    {
      q: 'In the figure, $\\angle A = 30^\\circ$, $AB = 40$, and $BC = BD = 25$. How long is $\\overline{CD}$?',
      fig: {
        view: [-3, -3, 57, 27],
        alt: 'A ray from A with a segment up to B, and two equal segments of length 25 from B down to C and D on the ray.',
        elems: [
          { t: 'seg', a: [0, 0], b: [54, 0] },
          { t: 'seg', a: [0, 0], b: [34.641, 20] },
          { t: 'seg', a: [34.641, 20], b: [19.641, 0] },
          { t: 'seg', a: [34.641, 20], b: [49.641, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 12 },
          { t: 'point', p: [34.641, 20], label: 'B', dx: 0, dy: -10 },
          { t: 'point', p: [19.641, 0], label: 'C', dx: -6, dy: 16 },
          { t: 'point', p: [49.641, 0], label: 'D', dx: 6, dy: 16 },
          { t: 'label', p: [17.32, 10], text: '40', dx: -14, dy: -4 },
          { t: 'label', p: [27.141, 10], text: '25', dx: -12, dy: 4 },
          { t: 'label', p: [42.141, 10], text: '25', dx: 12, dy: 2 },
          { t: 'tick', a: [34.641, 20], b: [19.641, 0], n: 1 },
          { t: 'tick', a: [34.641, 20], b: [49.641, 0], n: 1 },
          { t: 'angle', at: [0, 0], from: [54, 0], to: [34.641, 20], r: 5.5, label: '30' },
        ],
      },
      choices: ['$30$', '$15$', '$25$', '$20$'],
      answer: 0,
      solution:
        'Because $\\angle A = 30^\\circ$, the height of $B$ above the ray is half of $AB$, that is $40 \\times \\frac{1}{2} = 20$. Since $BC = BD$, triangle $BCD$ is isosceles, so the perpendicular from $B$ lands exactly at the midpoint of $\\overline{CD}$. Each half of $\\overline{CD}$ therefore satisfies half$^2 + 20^2 = 25^2$, giving half $= \\sqrt{625 - 400} = \\sqrt{225} = 15$, and $CD = 2 \\times 15 = 30$ ✓. Check a second, independent way by locating $C$ and $D$ separately and subtracting, never using the midpoint at all. The foot of the perpendicular sits at $40 \\cos 30^\\circ = 20\\sqrt{3} \\approx 34.64$ along the ray. The two landings are at $34.64 - 15 \\approx 19.64$ and $34.64 + 15 \\approx 49.64$, so $CD \\approx 49.64 - 19.64 = 30$ ✓. Both feet are in front of $A$, which is what makes the two triangles genuine rivals: $25$ is shorter than $40$. (The choice $15$ is ANSWERING THE HALF-CHORD and forgetting to double ✗. The choice $20$ is ANSWERING THE HEIGHT of $B$ above the ray ✗. The choice $25$ is COPYING THE SWINGING SIDE $BC$ instead of measuring the gap between its two landings ✗.)',
    },
    {
      q: 'In the figure, $\\angle A = 30^\\circ$, $AB = 24$, and $BC = BD = 13$. How long is $\\overline{CD}$?',
      fig: {
        view: [-2, -2, 31, 15],
        alt: 'A ray from A with a segment up to B, and two equal segments of length 13 from B down to C and D on the ray.',
        elems: [
          { t: 'seg', a: [0, 0], b: [29, 0] },
          { t: 'seg', a: [0, 0], b: [20.785, 12] },
          { t: 'seg', a: [20.785, 12], b: [15.785, 0] },
          { t: 'seg', a: [20.785, 12], b: [25.785, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 12 },
          { t: 'point', p: [20.785, 12], label: 'B', dx: 0, dy: -10 },
          { t: 'point', p: [15.785, 0], label: 'C', dx: -8, dy: 16 },
          { t: 'point', p: [25.785, 0], label: 'D', dx: 6, dy: 16 },
          { t: 'label', p: [10.393, 6], text: '24', dx: -14, dy: -4 },
          { t: 'label', p: [18.285, 6], text: '13', dx: -14, dy: 4 },
          { t: 'label', p: [23.285, 6], text: '13', dx: 12, dy: 2 },
          { t: 'tick', a: [20.785, 12], b: [15.785, 0], n: 1 },
          { t: 'tick', a: [20.785, 12], b: [25.785, 0], n: 1 },
          { t: 'angle', at: [0, 0], from: [29, 0], to: [20.785, 12], r: 3.2, label: '30' },
        ],
      },
      choices: ['$5$', '$12$', '$10$', '$13$'],
      answer: 2,
      solution:
        'A $30^\\circ$ angle puts $B$ at half the height of $AB$, so $B$ sits $24 \\times \\frac{1}{2} = 12$ above the ray. Triangle $BCD$ is isosceles because $BC = BD$, so the perpendicular from $B$ bisects $\\overline{CD}$, and each half satisfies half$^2 + 12^2 = 13^2$. That gives half $= \\sqrt{169 - 144} = \\sqrt{25} = 5$, so $CD = 2 \\times 5 = 10$ ✓. Check a second, independent way by finding the two landing points along the ray and subtracting. The perpendicular foot is at $24 \\cos 30^\\circ = 12\\sqrt{3} \\approx 20.78$, and the landings are at $20.78 - 5 \\approx 15.78$ and $20.78 + 5 \\approx 25.78$, so $CD \\approx 25.78 - 15.78 = 10$ ✓. This is the $5$-$12$-$13$ right triangle appearing twice, back to back. (The choice $5$ is ANSWERING THE HALF-CHORD ✗. The choice $12$ is ANSWERING THE HEIGHT of $B$ ✗. The choice $13$ is COPYING THE SWINGING SIDE ✗.)',
    },
    {
      q: 'In the figure, $\\angle A = 30^\\circ$, $AB = 18$, and $BC = BD = 15$. How long is $\\overline{CD}$?',
      fig: {
        view: [-2, -2, 33, 14],
        alt: 'A ray from A with a segment up to B, and two equal segments of length 15 from B down to C and D on the ray.',
        elems: [
          { t: 'seg', a: [0, 0], b: [31, 0] },
          { t: 'seg', a: [0, 0], b: [15.588, 9] },
          { t: 'seg', a: [15.588, 9], b: [3.588, 0] },
          { t: 'seg', a: [15.588, 9], b: [27.588, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 12 },
          { t: 'point', p: [15.588, 9], label: 'B', dx: 0, dy: -10 },
          { t: 'point', p: [3.588, 0], label: 'C', dx: -6, dy: 16 },
          { t: 'point', p: [27.588, 0], label: 'D', dx: 6, dy: 16 },
          { t: 'label', p: [3.897, 2.25], text: '18', dx: -14, dy: -4 },
          { t: 'label', p: [9.588, 4.5], text: '15', dx: 10, dy: 6 },
          { t: 'label', p: [21.588, 4.5], text: '15', dx: 12, dy: 2 },
          { t: 'tick', a: [15.588, 9], b: [3.588, 0], n: 1 },
          { t: 'tick', a: [15.588, 9], b: [27.588, 0], n: 1 },
          { t: 'angle', at: [0, 0], from: [31, 0], to: [15.588, 9], r: 3.4, label: '30' },
        ],
      },
      choices: ['$12$', '$9$', '$15$', '$24$'],
      answer: 3,
      solution:
        'The $30^\\circ$ angle at $A$ puts $B$ at half the length of $AB$ above the ray, so the height is $18 \\times \\frac{1}{2} = 9$. With $BC = BD$, triangle $BCD$ is isosceles and the perpendicular from $B$ meets $\\overline{CD}$ at its midpoint, so each half satisfies half$^2 + 9^2 = 15^2$. Then half $= \\sqrt{225 - 81} = \\sqrt{144} = 12$ and $CD = 2 \\times 12 = 24$ ✓. Check a second, independent way by placing $C$ and $D$ on the ray and subtracting. The foot of the perpendicular is at $18 \\cos 30^\\circ = 9\\sqrt{3} \\approx 15.59$, so the landings are at $15.59 - 12 \\approx 3.59$ and $15.59 + 12 \\approx 27.59$, and the gap is $27.59 - 3.59 = 24$ ✓. Note how close $C$ comes to $A$: had the swinging side been any longer than $18$, that landing would have slipped behind $A$ and only one triangle would survive. (The choice $12$ is ANSWERING THE HALF-CHORD ✗. The choice $9$ is ANSWERING THE HEIGHT of $B$ ✗. The choice $15$ is COPYING THE SWINGING SIDE ✗.)',
    },
  ],
  // s10 — SSA wearing an SAS costume. v2 flips the direction: three of the
  //      four pairings are SSA and the reader has to find the genuine SAS.
  [
    {
      q: 'A proof ends with "$\\triangle DEF \\cong \\triangle STU$ by SAS," citing $DE = ST$, $EF = TU$, and $\\angle D = \\angle S$. Where does it go wrong?',
      fig: {
        view: [-1, -1, 13.5, 4],
        alt: 'Two triangles with matching ticks on two pairs of sides and matching angle marks at D and S.',
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [1.5, 2.8]], fill: false },
          { t: 'poly', pts: [[7, 0], [12, 0], [8.5, 2.8]], fill: false },
          { t: 'point', p: [0, 0], label: 'D', dx: -12, dy: 12 },
          { t: 'point', p: [5, 0], label: 'E', dx: 10, dy: 12 },
          { t: 'point', p: [1.5, 2.8], label: 'F', dx: -2, dy: -10 },
          { t: 'point', p: [7, 0], label: 'S', dx: -12, dy: 12 },
          { t: 'point', p: [12, 0], label: 'T', dx: 10, dy: 12 },
          { t: 'point', p: [8.5, 2.8], label: 'U', dx: -2, dy: -10 },
          { t: 'tick', a: [0, 0], b: [5, 0], n: 1 },
          { t: 'tick', a: [7, 0], b: [12, 0], n: 1 },
          { t: 'tick', a: [5, 0], b: [1.5, 2.8], n: 2 },
          { t: 'tick', a: [12, 0], b: [8.5, 2.8], n: 2 },
          { t: 'angle', at: [0, 0], from: [5, 0], to: [1.5, 2.8], r: 0.75 },
          { t: 'angle', at: [7, 0], from: [12, 0], to: [8.5, 2.8], r: 0.75 },
        ],
      },
      choices: [
        'Nothing is wrong; the three parts may be listed in any order',
        'SAS needs the two sides to be equal to each other, not to the other triangle’s sides',
        'The two triangles must first be shown to have equal perimeters',
        'Sides $\\overline{DE}$ and $\\overline{EF}$ meet at $E$, so the included angle is $\\angle E$ — quoting $\\angle D$ turns the argument into SSA',
      ],
      answer: 3,
      solution:
        'Find where the two named sides meet. $\\overline{DE}$ runs from $D$ to $E$ and $\\overline{EF}$ runs from $E$ to $F$, so they share the vertex $E$ — the included angle is $\\angle E$. Citing $\\angle D$ places the angle outside the pair, which is SSA, and SSA proves nothing on its own ✓. Check a second, independent way by counting vertices rather than reading the figure. SAS means the angle is bounded by the two sides, so the angle’s vertex must be a letter appearing in BOTH side names. Here $\\overline{DE}$ and $\\overline{EF}$ share only the letter $E$, and the proof named $D$, a letter that appears in just one of them ✓ — the mismatch is visible in the labels alone. The triangles may well be congruent, but this reasoning does not show it; the fix is to establish $\\angle E = \\angle T$ instead. (The any-order choice is MISTAKING SSA FOR SAS ✗. The equal-to-each-other choice misreads what congruence marks mean: ticks match parts across the two triangles, not within one ✗. The perimeter choice is CONFUSING EQUAL AREA WITH CONGRUENCE in its perimeter form ✗.)',
    },
    {
      q: 'In $\\triangle ABC$ and $\\triangle GHK$, which pairing of equal parts is a genuine SAS argument rather than SSA in disguise?',
      fig: {
        view: [-1, -1, 12.7, 4.2],
        alt: 'Two congruent triangles with vertices labelled A, B, C and G, H, K.',
        elems: [
          { t: 'poly', pts: [[0, 0], [4.6, 0], [1.3, 2.9]], fill: false },
          { t: 'poly', pts: [[6.6, 0], [11.2, 0], [7.9, 2.9]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 12 },
          { t: 'point', p: [4.6, 0], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [1.3, 2.9], label: 'C', dx: -2, dy: -10 },
          { t: 'point', p: [6.6, 0], label: 'G', dx: -12, dy: 12 },
          { t: 'point', p: [11.2, 0], label: 'H', dx: 10, dy: 12 },
          { t: 'point', p: [7.9, 2.9], label: 'K', dx: -2, dy: -10 },
        ],
      },
      choices: [
        '$AB = GH$, $BC = HK$, $\\angle A = \\angle G$',
        '$AB = GH$, $BC = HK$, $\\angle B = \\angle H$',
        '$AB = GH$, $BC = HK$, $\\angle C = \\angle K$',
        '$AB = GH$, $AC = GK$, $\\angle B = \\angle H$',
      ],
      answer: 1,
      solution:
        'SAS requires the angle to sit between the two named sides, so its vertex must be the letter the two side names share. In the second pairing the sides are $\\overline{AB}$ and $\\overline{BC}$, which share $B$, and the angle cited is $\\angle B$ ✓ — a genuine SAS. Check a second, independent way by disqualifying the other three on the same shared-letter test. In the first pairing the sides $\\overline{AB}$ and $\\overline{BC}$ still meet at $B$, but $\\angle A$ is cited, so the angle is outside the pair — SSA ✗. In the third pairing the same two sides appear with $\\angle C$ cited, again outside the pair — SSA ✗. In the fourth pairing the sides are $\\overline{AB}$ and $\\overline{AC}$, which meet at $A$, yet $\\angle B$ is cited — SSA once more ✗. Exactly one survivor, and it is the one the shared-letter rule named ✓. (Each rejected pairing is MISTAKING SSA FOR SAS: the first reads the angle off the first letter of the first side, the third reads it off the last letter of the second side, and the fourth changes which sides are used while leaving the angle where it was ✗.)',
    },
    {
      q: 'Two triangles satisfy $\\angle M = \\angle R$, $MN = RS$, and $NP = ST$. A student labels this SAS. What is the correct label, and does it prove congruence?',
      fig: {
        view: [-1, -1, 13.1, 4.3],
        alt: 'Two triangles with matching ticks on two pairs of sides and matching angle marks at M and R.',
        elems: [
          { t: 'poly', pts: [[0, 0], [4.8, 0], [1.2, 3]], fill: false },
          { t: 'poly', pts: [[6.8, 0], [11.6, 0], [8, 3]], fill: false },
          { t: 'point', p: [0, 0], label: 'M', dx: -12, dy: 12 },
          { t: 'point', p: [4.8, 0], label: 'N', dx: 10, dy: 12 },
          { t: 'point', p: [1.2, 3], label: 'P', dx: -2, dy: -10 },
          { t: 'point', p: [6.8, 0], label: 'R', dx: -12, dy: 12 },
          { t: 'point', p: [11.6, 0], label: 'S', dx: 10, dy: 12 },
          { t: 'point', p: [8, 3], label: 'T', dx: -2, dy: -10 },
          { t: 'tick', a: [0, 0], b: [4.8, 0], n: 1 },
          { t: 'tick', a: [6.8, 0], b: [11.6, 0], n: 1 },
          { t: 'tick', a: [4.8, 0], b: [1.2, 3], n: 2 },
          { t: 'tick', a: [11.6, 0], b: [8, 3], n: 2 },
          { t: 'angle', at: [0, 0], from: [4.8, 0], to: [1.2, 3], r: 0.7 },
          { t: 'angle', at: [6.8, 0], from: [11.6, 0], to: [8, 3], r: 0.7 },
        ],
      },
      choices: [
        'It is SSA, since $\\overline{MN}$ and $\\overline{NP}$ meet at $N$ while the marked angle sits at $M$ — so on its own it proves nothing',
        'It is SAS, and it does prove congruence',
        'It is ASA, and it does prove congruence',
        'It is SSS, because three parts were listed',
      ],
      answer: 0,
      solution:
        'The two named sides $\\overline{MN}$ and $\\overline{NP}$ share the vertex $N$, so the included angle is $\\angle N$. The marked angle is at $M$, outside the pair, which makes this SSA — and SSA cannot certify congruence ✓. Check a second, independent way by seeing what the data leaves free. Draw $\\angle M$ and lay $\\overline{MN}$ along one arm, fixing $M$ and $N$. The only vertex still loose is $P$, and it is pinned solely by the length $NP$, which sweeps a circle from $N$. Whenever that circle crosses the other arm of the angle twice, two triangles fit the same three facts ✓, so the label SAS is claiming more than the data supports. (The SAS choice is MISTAKING SSA FOR SAS ✗. The ASA choice would need two angles with the side between them, and only one angle is given ✗. The SSS choice is BLAMING THE SIDES INSTEAD OF THE SWING and counting parts instead of reading them: only two of the three listed parts are sides ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 3,
  sections: {
    '3.5': s35,
  },
}
