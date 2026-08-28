// Introduction to Geometry chapter 19 — variations for section 19.3 (Proofs).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - This section is conceptual, so the ten slots are ten different jobs a
//    prover has to do: pick a criterion, name the reason for a line, find the
//    exact step where an argument breaks, tell a theorem from its converse, and
//    judge a coordinate placement. No two lanes are the same job in new words.
//  - Every solution reaches the key twice along routes that share no steps. For
//    a reasoning item the second route is a built counterexample, a
//    construction that pins the triangle down without naming any criterion, or
//    a trace of what would follow if the wrong choice were accepted.
//  - Every distractor is a mistake a careful nine-year-old really makes: the
//    converse of the right reason, a true theorem whose hypotheses are missing
//    here, a part that was never given, or CPCTC cited before any congruence
//    has been proved. Each is named in CAPS.
//  - Auxiliary segments are dashed, matching the chapter’s own convention that a
//    dashed line is one the prover drew.

const s193 = [
  // s1 — what a set of matching parts is worth.
  [
    {
      q: 'Ines lists four reasons on a card and plans to use them to prove two triangles congruent. Which one on her card can never finish the job?',
      choices: [
        'SSS — three pairs of equal sides',
        'AAS — two pairs of equal angles and a pair of equal sides that is not between them',
        'HL — in two right triangles, equal hypotenuses and one pair of equal legs',
        'AAA — all three pairs of angles equal',
      ],
      answer: 3,
      solution:
        'Route one, build a counterexample to AAA. Take an equilateral triangle with side $3$ and an equilateral triangle with side $6$. Every angle in both is $60^\\circ$, so all three pairs of angles match, yet one triangle has three times the area of the other and no side of one equals a side of the other. Matching angles fix the shape and leave the size free, so AAA cannot force congruence ✓. Check a second, independent way, by clearing the other three cards off the table. SSS: three fixed side lengths leave nothing to bend, since a triangle built from three given lengths can be assembled in only one shape. AAS: two angles give the third for free, because the three must total $180^\\circ$, and then the known side sits between two known angles. HL: in a right triangle the two legs and the hypotenuse are locked together, so equal hypotenuses and one pair of equal legs force the remaining legs equal, which is SSS. Three of the four cards survive every test, so the one left standing as useless is AAA ✓. (The choice of SSS is DOUBTING THE MOST RIGID SET OF ALL, since three fixed lengths leave a triangle no hinge to swing on ✗; the choice of AAS is CONFUSING IT WITH THE ARRANGEMENT THAT REALLY FAILS, which is two sides and an angle outside them, not two angles and a side ✗; the choice of HL is TREATING THE RIGHT ANGLE AS DECORATION, when the right angle is exactly what rescues this pattern and makes it a legal criterion ✗.)',
    },
    {
      q: 'Two right triangles are marked so that their hypotenuses are equal and one pair of legs is equal, as shown. Which criterion proves them congruent?',
      fig: {
        view: [-1, -1, 13, 4],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [0, 3]], fill: false },
          { t: 'poly', pts: [[7, 3], [12, 3], [12, 0]], fill: false },
          { t: 'right', at: [0, 0], from: [5, 0], to: [0, 3] },
          { t: 'right', at: [12, 3], from: [7, 3], to: [12, 0] },
          { t: 'tick', a: [5, 0], b: [0, 3], n: 1 },
          { t: 'tick', a: [7, 3], b: [12, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [0, 3], n: 2 },
          { t: 'tick', a: [12, 3], b: [12, 0], n: 2 },
        ],
      },
      choices: [
        'SAS, taking the right angle as the angle between the two marked sides',
        'HL, the right-triangle criterion built from a hypotenuse and a leg',
        'Nothing follows, since the equal angle is not between the two equal sides',
        'AAS, using the right angles together with the angles opposite the equal legs',
      ],
      answer: 1,
      solution:
        'Route one, match the marks to the criterion. Each triangle has a right angle, the hypotenuses carry the same single tick, and one pair of legs carries the same double tick. Hypotenuse and leg in a right triangle is exactly what HL asks for ✓. Check a second, independent way, by building the triangle and seeing whether any freedom is left. Draw the right angle, mark the known leg along one arm, and then swing an arc whose radius is the known hypotenuse from the far end of that leg. Because the hypotenuse is longer than the leg, that arc crosses the other arm at exactly one point, so the third vertex has only one place to land and the triangle is fully determined. Two triangles determined by the same three numbers can be laid on top of each other, so they are congruent ✓. (The choice of SAS is PUTTING THE RIGHT ANGLE IN THE WRONG PLACE, since the right angle sits between the two legs, not between a leg and the hypotenuse it faces ✗; the choice of nothing following is READING THIS AS THE AMBIGUOUS TWO-SIDES-AND-AN-OUTSIDE-ANGLE PATTERN, which can go two ways only while the known angle is acute, and the known angle here is the right angle itself ✗; the choice of AAS is CLAIMING A SECOND PAIR OF EQUAL ANGLES THAT WAS NEVER GIVEN, since the angles opposite the equal legs are a conclusion of the proof, not a mark on the figure ✗.)',
    },
    {
      q: 'Sam matches two pairs of equal sides between two triangles and one pair of equal angles, and in each triangle that angle is not the one between the two matched sides. What may Sam conclude?',
      choices: [
        'Nothing yet — that arrangement can produce two different triangles',
        'The triangles are congruent by SAS',
        'The triangles are congruent, because two sides and an angle always fix a triangle',
        'The triangles are congruent, and the leftover parts match by CPCTC',
      ],
      answer: 0,
      solution:
        'Route one, build the two different triangles. Start an angle of $30^\\circ$ at $A$, run a long arm out from $A$, and set $B$ on the other arm with $AB = 10$. Now the third vertex $C$ must sit on the long arm with $BC = 6$. The shortest distance from $B$ to that arm is $10 \\cdot \\sin 30^\\circ = 5$, and $5 < 6 < 10$, so a circle of radius $6$ about $B$ crosses the arm twice. Both crossings give a genuine triangle with the same $30^\\circ$ angle, the same $AB = 10$, and the same $BC = 6$, yet one is squat and one is stretched. Same three parts, two different triangles ✓. Check a second, independent way, with no numbers at all. Draw any triangle $ABD$ with $AB = AD$, then extend $\\overline{BD}$ past $D$ to a point $C$. Compare $\\triangle ACB$ with $\\triangle ACD$: they share $\\overline{AC}$, they have $AB = AD$, and they share the angle at $C$, which in each triangle lies outside the pair of matched sides. So the parts match in exactly Sam’s arrangement, yet one triangle sits inside the other and $CB$ is longer than $CD$. Congruence fails ✓. (The choice of SAS is CALLING AN ANGLE INCLUDED WHEN IT SITS OUTSIDE THE TWO SIDES, and the single word "between" is the whole content of SAS ✗; the choice that two sides and an angle always fix a triangle is TREATING A NON-CRITERION AS A CRITERION, which the two triangles built above refute directly ✗; the last choice is CITING CPCTC BEFORE ANY CONGRUENCE HAS BEEN PROVED, which puts the payoff of a proof in front of the proof ✗.)',
    },
  ],
  // s2 — name the reason a single line of a proof leans on.
  [
    {
      q: 'In the figure, $\\overline{PQ}$ is parallel to $\\overline{RS}$ and the line through $Q$ and $R$ crosses both. A proof contains the line "$\\angle PQR = \\angle SRQ$." Which reason justifies it?',
      fig: {
        view: [-1, -1.5, 9, 4.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [7, 0] },
          { t: 'seg', a: [1, 3], b: [8, 3] },
          { t: 'seg', a: [6, -1], b: [1, 4] },
          { t: 'angle', at: [5, 0], from: [0, 0], to: [2, 3], r: 0.8 },
          { t: 'angle', at: [2, 3], from: [7, 3], to: [5, 0], r: 0.8 },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 12 },
          { t: 'point', p: [5, 0], label: 'Q', dx: 8, dy: 16 },
          { t: 'point', p: [2, 3], label: 'R', dx: -12, dy: -6 },
          { t: 'point', p: [7, 3], label: 'S', dx: 10, dy: -6 },
        ],
      },
      choices: [
        'Corresponding angles formed by parallel lines are congruent',
        'Alternate interior angles formed by parallel lines are congruent',
        'Vertical angles are congruent',
        'Same-side interior angles between parallel lines are supplementary',
      ],
      answer: 1,
      solution:
        'Route one, read the position of the two angles. Both lie in the strip between the parallels, so both are interior, and they open toward opposite sides of the crossing line $\\overleftrightarrow{QR}$. Interior, opposite sides, one at each parallel: that is the alternate interior pair, and alternate interior angles between parallels are congruent ✓. Check a second, independent way, by chasing around the point $R$ instead. Let $\\angle SRQ$ have some size, and look at the other angle at $R$ inside the strip, the one on the same side of $\\overleftrightarrow{QR}$ as $\\angle PQR$. Those two angles at $R$ form a straight line, so they add to $180^\\circ$. That other angle and $\\angle PQR$ are same-side interior angles, so they also add to $180^\\circ$. Two angles that fill up the same $180^\\circ$ alongside one shared angle must be equal, so $\\angle PQR = \\angle SRQ$ ✓. (The choice of corresponding angles is NAMING THE PAIR THAT STRADDLES THE STRIP, since a corresponding pair has one angle inside and one outside, while both angles here are inside ✗; the choice of vertical angles is CITING A REASON FOR ANGLES THAT MEET AT ONE POINT, and these two sit at two different points, $Q$ and $R$ ✗; the choice of same-side interior angles is A TRUE THEOREM POINTED AT THE WRONG PAIR, since it applies to the angles on one side of $\\overleftrightarrow{QR}$ and gives $180^\\circ$, not equality ✗.)',
    },
    {
      q: 'Two triangles in a proof share the side $\\overline{AM}$. One line of the proof reads "$AM = AM$." Which reason justifies that line?',
      choices: [
        'CPCTC, since $\\overline{AM}$ is a corresponding part of the two triangles',
        'The definition of a midpoint, since $M$ is the middle of the shared side',
        'The given information',
        'The reflexive property',
      ],
      answer: 3,
      solution:
        'Route one, read what the line says. It compares a length with itself, and the property that every quantity equals itself is the reflexive property. That is the whole reason, and it is the standard way a shared side gets to enter a congruence argument ✓. Check a second, independent way, by asking how much the line depends on the figure. Erase the drawing, stretch it, or redraw the triangles in any shape you like; the segment $\\overline{AM}$ still has whatever length it has, and that number still equals itself. A line that stays true no matter how the figure is redrawn cannot be leaning on a given, on a definition about $M$, or on any congruence, since all of those would break when the figure changed. The only thing holding it up is equality itself ✓. (The choice of CPCTC is USING THE PRIZE BEFORE WINNING IT, since CPCTC speaks only about triangles already proved congruent, and this line is one of the steps building toward that proof ✗; the choice of the definition of a midpoint is INVENTING A HYPOTHESIS NOBODY GAVE, since nothing says $M$ is the middle of anything, and the line would be true even if it were not ✗; the choice of the given information is CITING A GIVEN THAT WAS NEVER WRITTEN DOWN, when a proof may cite only the facts it was handed ✗.)',
    },
    {
      q: '$M$ is the midpoint of $\\overline{BC}$. A proof contains the line "$BM = MC$." Which reason justifies that line?',
      choices: [
        'The reflexive property',
        'CPCTC',
        'The definition of a midpoint',
        'The perpendicular bisector theorem, since $M$ is where the perpendicular meets $\\overline{BC}$',
      ],
      answer: 2,
      solution:
        'Route one, unpack the word in the given. A midpoint is defined as the point of a segment that divides it into two equal pieces, so the moment $M$ is called the midpoint of $\\overline{BC}$, the equality $BM = MC$ is already paid for. Citing the definition is citing the given in the only form it takes ✓. Check a second, independent way, by testing whether any other feature of $M$ could deliver the same line. Take a scalene triangle $ABC$ and drop the perpendicular from $A$ to $\\overline{BC}$; the foot lands nearer the shorter side and cuts $\\overline{BC}$ into two unequal pieces, so being the foot of a perpendicular does not make the halves equal. Take instead the point where the bisector of $\\angle A$ meets $\\overline{BC}$; in that same scalene triangle it splits $\\overline{BC}$ unevenly too. Every property of $M$ except "midpoint" leaves the two pieces free to differ, so "midpoint" is the one carrying the line ✓. (The choice of the reflexive property is MISREADING TWO DIFFERENT SEGMENTS AS ONE, since $\\overline{BM}$ and $\\overline{MC}$ are separate pieces of the segment, not one thing compared with itself ✗; the choice of CPCTC is CITING CONGRUENT TRIANGLES WHEN NO TRIANGLE HAS EVEN BEEN NAMED YET ✗; the choice of the perpendicular bisector theorem is A TRUE THEOREM WHOSE HYPOTHESIS WAS NEVER CHECKED, since nothing in the given says any line through $M$ is perpendicular to $\\overline{BC}$ ✗.)',
    },
  ],
  // s3 — how a proof is put together.
  [
    {
      q: 'In a two-column proof, every statement in the left column is paired with an entry in the right column. What must that entry be?',
      choices: [
        'a length or angle measure read off the figure',
        'a check with ruler and protractor showing the statement is true in the drawing',
        'a reason: a definition, a postulate, a previously proved theorem, or one of the givens',
        'the conclusion of the proof, repeated to keep the steps aimed at the goal',
      ],
      answer: 2,
      solution:
        'Route one, look at what a proof is for. A proof is a chain in which every link is licensed by something already agreed on, and geometry agrees on exactly four kinds of thing: definitions, postulates, theorems already proved, and the facts handed over as givens. So the right column holds a reason drawn from that list ✓. Check a second, independent way, by watching a proof that skips the license. Suppose a proof is handed only "quadrilateral $ABCD$ has $AB = CD$" and the sketch happens to look like a parallelogram, so a step is written "$\\overline{AB} \\parallel \\overline{CD}$, because the picture shows it." Now redraw the figure as an isosceles trapezoid with $AB = CD$ as its two slanted legs: every given still holds, and the legs are not parallel at all. The step was true of one drawing and false of another that obeyed the same givens, so a drawing cannot license a step. Only a reason that holds for every figure obeying the givens can ✓. (The choice of a measure read off the figure is TREATING ONE DRAWING AS ALL DRAWINGS, when a proof must cover every figure the givens allow ✗; the choice of measuring is TRUSTING AN INSTRUMENT THAT ROUNDS, since a protractor cannot tell $90^\\circ$ from $89.6^\\circ$ and a proof has to ✗; the choice of repeating the conclusion is CIRCULAR REASONING, the one move a proof may never make, since the conclusion is what the chain is supposed to earn ✗.)',
    },
    {
      q: 'The last line of a proof reads "so $\\angle B = \\angle C$ by CPCTC." What must the line immediately before it have said?',
      choices: [
        'that two triangles containing those angles are congruent',
        'that $\\angle B$ and $\\angle C$ are the base angles of an isosceles triangle',
        'that $\\angle B$ and $\\angle C$ are vertical angles',
        'that the sides opposite $\\angle B$ and $\\angle C$ are equal',
      ],
      answer: 0,
      solution:
        'Route one, unpack the letters. CPCTC stands for "corresponding parts of congruent triangles are congruent." It is a machine that takes a triangle congruence in and hands a pair of matching parts back out, so it cannot run until a congruence has been fed to it. The line before must therefore be a congruence statement about two triangles, one holding $\\angle B$ and the other holding $\\angle C$ ✓. Check a second, independent way, by letting the machine run on nothing and watching the damage. Sketch $\\triangle ABC$ with $\\angle B = 30^\\circ$ and $\\angle C = 70^\\circ$. If CPCTC could be cited without a congruence in hand, this proof would announce $30^\\circ = 70^\\circ$, and every angle in geometry would collapse into every other. The step is only safe because something before it ruled out that case, and the only thing that rules it out is a proved congruence ✓. (The choice of base angles of an isosceles triangle is NAMING A DIFFERENT THEOREM ENTIRELY, since that conclusion would be reasoned from equal sides and would be cited as the isosceles triangle theorem, not as CPCTC ✗; the choice of vertical angles is CITING A REASON THAT NEEDS TWO CROSSING LINES AND NO TRIANGLES, which is a different picture and a different justification ✗; the choice of equal opposite sides is HANDING CPCTC AN INPUT IT DOES NOT ACCEPT, since equal sides feed the isosceles triangle theorem while CPCTC eats only congruent triangles ✗.)',
    },
    {
      q: 'You must prove that two segments in a figure are equal, but no triangle in the figure contains both of them. What is the sensible next move?',
      choices: [
        'measure both segments in the figure and compare the numbers',
        'assume the two segments are equal and check that the figure still makes sense',
        'cite CPCTC for the two triangles that will turn out to be congruent',
        'draw an auxiliary segment so that each of the two lengths sits inside a triangle',
      ],
      answer: 3,
      solution:
        'Route one, work backward from the tool. Almost every proof of equal segments finishes with congruent triangles and CPCTC, and congruent triangles need triangles. If the figure holds none containing the segments in question, the figure is not yet ready, and the standard repair is to add one line, dashed, that creates the triangles. A diagonal, a median, an altitude, or a radius to a point of tangency all do this job ✓. Check a second, independent way, by taking inventory of the figure. A quadrilateral drawn with four sides and nothing else contains zero triangles, so no congruence tool can even be started on it, and the same is true of a five-sided figure or a circle with two chords. One drawn segment changes that count: in quadrilateral $ABCD$, drawing $\\overline{BD}$ creates $\\triangle ABD$ and $\\triangle CDB$, and now $\\overline{AD}$ lives in the first while $\\overline{CB}$ lives in the second, with the drawn segment shared by both. The move that turns a figure with no triangles into a figure with two is the move that unlocks the proof ✓. (The choice of measuring is PROVING A CLAIM ABOUT ONE DRAWING INSTEAD OF ALL FIGURES, and a proof owes every figure the givens allow ✗; the choice of assuming the segments equal is CIRCULAR REASONING WEARING A DISGUISE, since a conclusion that survives a consistency check has still never been derived ✗; the choice of citing CPCTC is REACHING FOR THE PAYOFF BEFORE THE CONGRUENCE EXISTS, and here the triangles it names have not been drawn, let alone proved congruent ✗.)',
    },
  ],
  // s4 — find the exact step where an argument breaks.
  [
    {
      q: 'Nils writes: "In triangles $ABC$ and $DEF$ we are given $AC = DF$ and $BC = EF$. Therefore $\\triangle ABC \\cong \\triangle DEF$ by HL." No right angle appears anywhere in the givens. What is the flaw?',
      choices: [
        'HL applies only to right triangles, and the proof never shows that either triangle has a right angle',
        'The two triangles were named in the wrong order',
        'HL needs three pairs of equal sides, and only two pairs are given',
        'There is no flaw, since two pairs of equal sides always force congruence',
      ],
      answer: 0,
      solution:
        'Route one, check the hypotheses of the theorem being cited. HL is stated for right triangles, and its two letters name a hypotenuse and a leg, words that mean nothing until a right angle exists. The givens list two side equalities and no angle at all, so the theorem was fired before its trigger was pulled ✓. Check a second, independent way, by building two triangles that obey every given and are not congruent. Let $AC = DF = 6$ and $BC = EF = 5$ in both. In the first triangle open the angle at $C$ to $40^\\circ$; in the second open the angle at $F$ to $100^\\circ$. Both triangles honor the givens, but the wider hinge pushes its third side out far past the narrower one, so the two triangles end with different third sides and different areas. The conclusion Nils announced is not merely unsupported, it is false ✓. (The choice of naming order is POINTING AT A HARMLESS DETAIL, since renaming the vertices cannot conjure the missing right angle ✗; the choice that HL needs three pairs of sides is MISREMEMBERING THE CRITERION, since HL is genuinely happy with two sides once a right angle is present, and the trouble here is only that no right angle is ✗; the choice that there is no flaw is BELIEVING THAT TWO PAIRS OF SIDES ARE ENOUGH, which the hinge above refutes in one picture ✗.)',
    },
    {
      q: 'A proof contains the step: "From the figure, $\\angle A$ looks like a right angle, so $\\angle A = 90^\\circ$." The givens never mention a right angle. What is the flaw?',
      fig: {
        view: [-1, -1, 11, 8],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [0.3, 7]], fill: false },
          { t: 'angle', at: [0, 0], from: [10, 0], to: [0.3, 7], r: 1.1 },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 14 },
          { t: 'point', p: [10, 0], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [0.3, 7], label: 'C', dx: -4, dy: -10 },
        ],
      },
      choices: [
        'The flaw is that $\\angle A$ is obtuse rather than right',
        'There is no flaw, because a figure drawn to scale may be read for right angles',
        'How a figure looks is not a reason, and the right angle was never given',
        'The flaw is that $\\angle A$ should have been measured with a protractor first',
      ],
      answer: 2,
      solution:
        'Route one, hold the step up against the rule for reasons. Every line of a proof must cite a definition, a postulate, a theorem already proved, or a given. "It looks like one" is none of those four, and the givens say nothing about $\\angle A$, so the step has no license at all ✓. Check a second, independent way, by finding a figure that fools the eye. Put $A$ at $(0, 0)$, $B$ at $(10, 0)$, and $C$ at $(0.3, 7)$. The arm $\\overline{AC}$ leans just $2.5^\\circ$ off vertical, so $\\angle A$ measures about $87.5^\\circ$ and no eye can tell it from square. A proof that called it $90^\\circ$ would then compute $BC = \\sqrt{10^2 + 7^2} = \\sqrt{149} \\approx 12.21$, while the true distance from $(10, 0)$ to $(0.3, 7)$ is $\\sqrt{9.7^2 + 7^2} = \\sqrt{143.09} \\approx 11.96$. Reading the angle off the picture produced a wrong length, so the eye is not a reason ✓. (The first choice is INVENTING A FACT ABOUT THIS ONE ANGLE, when the trouble is with the method rather than with the size of $\\angle A$ in any single drawing ✗; the second choice is TRUSTING SCALE DRAWINGS, and the $87.5^\\circ$ figure above obeys every given while breaking the step ✗; the fourth choice is SWAPPING ONE MEASUREMENT FOR ANOTHER, since a protractor reading is still a fact about one drawing and still not a reason ✗.)',
    },
    {
      q: 'A proof has established $\\triangle ABC \\cong \\triangle DEF$ and then writes "therefore $AB = EF$." What is the flaw?',
      choices: [
        'There is no flaw, since congruent triangles have equal sides, so any side of one equals any side of the other',
        'The congruence statement pairs $\\overline{AB}$ with $\\overline{DE}$, not with $\\overline{EF}$',
        'CPCTC was cited before the two triangles were proved congruent',
        'Congruent triangles have equal angles only, so no conclusion about sides may be drawn',
      ],
      answer: 1,
      solution:
        'Route one, read the congruence statement letter by letter. Writing $\\triangle ABC \\cong \\triangle DEF$ announces the matching $A \\leftrightarrow D$, $B \\leftrightarrow E$, $C \\leftrightarrow F$. Sides inherit that matching from their endpoints, so $\\overline{AB}$ pairs with $\\overline{DE}$, $\\overline{BC}$ pairs with $\\overline{EF}$, and $\\overline{CA}$ pairs with $\\overline{FD}$. The step claimed $AB = EF$, which crosses the pairing ✓. Check a second, independent way, with a pair of real triangles. Let $\\triangle ABC$ have $AB = 7$, $BC = 9$, $CA = 11$, and let $\\triangle DEF$ be the congruent copy with $DE = 7$, $EF = 9$, $FD = 11$. The congruence $\\triangle ABC \\cong \\triangle DEF$ holds, since matching sides are equal all the way around. Yet $AB = 7$ while $EF = 9$, so the claimed equality is false for a pair of triangles that satisfy the hypothesis exactly ✓. (The first choice is TREATING CONGRUENCE AS "ALL SIDES EQUAL TO ALL SIDES", which would make every congruent triangle equilateral ✗; the third choice is DIAGNOSING A DISEASE THE PROOF DOES NOT HAVE, since the congruence was established before the step, and the error is in reading it, not in its timing ✗; the fourth choice is SHRINKING CPCTC DOWN TO ANGLES, when corresponding sides match too, which is precisely why the correct line here is $AB = DE$ ✗.)',
    },
  ],
  // s5 — name the criterion from the parts in hand.
  [
    {
      q: 'Kite $ABCD$ has $AB = AD$ and $CB = CD$, and the diagonal $\\overline{AC}$ has been drawn. Which criterion proves $\\triangle ABC \\cong \\triangle ADC$?',
      fig: {
        view: [-1, -3, 9, 3],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 2], [8, 0], [3, -2]], fill: false },
          { t: 'seg', a: [0, 0], b: [8, 0], dash: true },
          { t: 'tick', a: [0, 0], b: [3, 2], n: 1 },
          { t: 'tick', a: [0, 0], b: [3, -2], n: 1 },
          { t: 'tick', a: [8, 0], b: [3, 2], n: 2 },
          { t: 'tick', a: [8, 0], b: [3, -2], n: 2 },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 4 },
          { t: 'point', p: [3, 2], label: 'B', dx: 0, dy: -10 },
          { t: 'point', p: [8, 0], label: 'C', dx: 10, dy: 4 },
          { t: 'point', p: [3, -2], label: 'D', dx: 0, dy: 18 },
        ],
      },
      choices: ['SAS', 'SSS', 'ASA', 'HL'],
      answer: 1,
      solution:
        'Route one, take inventory of the two triangles. In $\\triangle ABC$ and $\\triangle ADC$: $AB = AD$ is given, $CB = CD$ is given, and $AC = AC$ by the reflexive property, since the drawn diagonal belongs to both. Three pairs of sides and not one angle: that is SSS ✓. Check a second, independent way, by folding the kite along the diagonal. Line $\\overleftrightarrow{AC}$ holds $A$ and $C$ still. Reflecting $B$ across that line sends it to the point on the far side that is the same distance from $A$ and the same distance from $C$, and $D$ is exactly that point, because $AD = AB$ and $CD = CB$. So the fold carries $\\triangle ABC$ onto $\\triangle ADC$, and a reflection changes no length and no angle, which is congruence. The parts the fold used were the three side lengths, nothing more ✓. (The choice of SAS is BORROWING THE ANGLE AT $B$, which nothing marks equal to the angle at $D$ and which the proof is heading toward proving ✗; the choice of ASA is ASSUMING THE DIAGONAL SPLITS THE ANGLE AT $A$ EVENLY, another conclusion of this proof rather than a given ✗; the choice of HL is CITING A RIGHT-TRIANGLE CRITERION WITH NO RIGHT ANGLE IN SIGHT, since nothing in the givens makes any angle of the kite square ✗.)',
    },
    {
      q: 'Triangles $DEG$ and $FEG$ share the side $\\overline{EG}$. The proof has established $DE = FE$ and $\\angle DEG = \\angle FEG$, and those angles are the ones between the shared side and the equal sides. Which criterion applies?',
      choices: ['ASA', 'SSS', 'AAS', 'SAS'],
      answer: 3,
      solution:
        'Route one, list the parts in the order they sit. Going around $\\triangle DEG$ from the shared side: $\\overline{EG}$, then $\\angle DEG$ at $E$, then $\\overline{ED}$. The matching walk around $\\triangle FEG$ gives $\\overline{EG}$, $\\angle FEG$, $\\overline{EF}$. Side, angle between them, side: SAS ✓. Check a second, independent way, by building the second triangle from those parts and seeing how much freedom is left. Draw $\\overline{EG}$; it is the same segment in both triangles, so its ends are already fixed. At $E$ swing a ray making the known angle with $\\overline{EG}$; that ray has only one place to go once the angle is chosen. Along it, mark the known length $ED$; that pins the last vertex to one point. Every part of the triangle was forced, so any two triangles carrying these parts land on top of each other ✓. (The choice of ASA is COUNTING THE KNOWN LENGTH AS A SECOND ANGLE, when only one angle has been established ✗; the choice of SSS is COUNTING THE SHARED SIDE TWICE AND IMAGINING A THIRD PAIR OF EQUAL SIDES, since $DG$ and $FG$ are what the proof intends to conclude ✗; the choice of AAS is AGAIN CLAIMING TWO PAIRS OF EQUAL ANGLES, and the angles at $G$ have not been shown equal ✗.)',
    },
    {
      q: 'Two triangles have two pairs of equal angles, and they also have a pair of equal sides which in each triangle lies outside the two named angles. Which criterion applies?',
      choices: ['ASA', 'SAS', 'AAS', 'No criterion applies, because the side is not between the two angles'],
      answer: 2,
      solution:
        'Route one, name the pattern by the position of the side. Two angles are known and a side is known, and the side does not sit between them. Angle, angle, then a side outside the pair is exactly what the letters AAS record ✓. Check a second, independent way, by showing the parts leave no freedom, without naming a criterion. The three angles of a triangle add to $180^\\circ$, so once two angles are known the third is known too, and both triangles therefore have all three angles matching. Now look at the known side: in each triangle it lies between one of the original angles and the newly computed third angle. Lay the two triangles so those equal sides coincide; at one end the equal angles send the two triangles along the same ray, and at the other end the equal third angles do the same. Two rays cross in one point, so the remaining vertex has a single home and the triangles coincide ✓. (The choice of ASA is FORGETTING TO CHECK WHERE THE SIDE SITS, since ASA is the same three kinds of part with the side squeezed between the angles ✗; the choice of SAS is COUNTING ONE OF THE ANGLES AS A SIDE, when only one side is known ✗; the last choice is CONFUSING THIS WITH THE TWO-SIDES-AND-AN-OUTSIDE-ANGLE PATTERN, which is the arrangement that fails; with two angles in hand the third angle comes free and the ambiguity disappears ✗.)',
    },
  ],
  // s6 — circle reasons.
  [
    {
      q: '$\\overline{AB}$ is a diameter of the circle with center $O$, and $C$ is another point on the circle. A proof states "$\\angle ACB = 90^\\circ$." Which reason justifies that step?',
      fig: {
        view: [-6, -6, 6, 6],
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'seg', a: [-5, 0], b: [5, 0] },
          { t: 'seg', a: [-5, 0], b: [3, 4] },
          { t: 'seg', a: [3, 4], b: [5, 0] },
          { t: 'seg', a: [0, 0], b: [3, 4], dash: true },
          { t: 'point', p: [-5, 0], label: 'A', dx: -12, dy: 6 },
          { t: 'point', p: [5, 0], label: 'B', dx: 10, dy: 6 },
          { t: 'point', p: [3, 4], label: 'C', dx: 8, dy: -8 },
          { t: 'point', p: [0, 0], label: 'O', dx: -2, dy: 16 },
        ],
      },
      choices: [
        'A tangent line is perpendicular to the radius drawn to the point of tangency',
        'All radii of a circle are congruent',
        'A radius perpendicular to a chord bisects that chord',
        'An angle inscribed in a semicircle is a right angle',
      ],
      answer: 3,
      solution:
        'Route one, cite the theorem the picture was built for. $\\overline{AB}$ is a diameter, so it splits the circle into two semicircles and the arc from $A$ to $B$ on the far side from $C$ measures $180^\\circ$. The angle at $C$ is inscribed and cuts off that arc, and an inscribed angle is half its arc, giving $\\frac{180^\\circ}{2} = 90^\\circ$. That is the semicircle theorem, quoted exactly ✓. Check a second, independent way, with two isosceles triangles and no circle theorems at all. Draw the radius $\\overline{OC}$, dashed. Then $OA = OC$ and $OB = OC$, since all three are radii, so $\\triangle OAC$ and $\\triangle OBC$ are both isosceles. Let $\\angle OAC = \\angle OCA = x$ and $\\angle OBC = \\angle OCB = y$. The angles of $\\triangle ABC$ add to $180^\\circ$, and they are $x$ at $A$, $y$ at $B$, and $x + y$ at $C$, so $2x + 2y = 180^\\circ$ and $x + y = 90^\\circ$. That sum is $\\angle ACB$ ✓. (The first choice is CITING A TANGENT THEOREM IN A FIGURE WITH NO TANGENT LINE, since every line drawn here is a chord or a radius ✗; the second choice is A TRUE FACT THAT PRODUCES NO ANGLE, since equal radii alone can never announce a right angle, though the second route does lean on them ✗; the third choice is A TRUE THEOREM ABOUT A DIFFERENT PICTURE, since nothing here is a radius drawn perpendicular to a chord ✗.)',
    },
    {
      q: 'Points $C$ and $D$ lie on the same arc of a circle, on the same side of the chord $\\overline{AB}$. A proof states "$\\angle ADB = \\angle ACB$." Which reason justifies that step?',
      fig: {
        view: [-6, -6, 6, 6],
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'seg', a: [-3, -4], b: [3, -4] },
          { t: 'seg', a: [-3, -4], b: [0, 5] },
          { t: 'seg', a: [3, -4], b: [0, 5] },
          { t: 'seg', a: [-3, -4], b: [-4, 3] },
          { t: 'seg', a: [3, -4], b: [-4, 3] },
          { t: 'point', p: [-3, -4], label: 'A', dx: -12, dy: 10 },
          { t: 'point', p: [3, -4], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 5], label: 'C', dx: 0, dy: -10 },
          { t: 'point', p: [-4, 3], label: 'D', dx: -12, dy: -4 },
        ],
      },
      choices: [
        'Vertical angles are congruent',
        'Inscribed angles that intercept the same arc are congruent',
        'An angle inscribed in a semicircle is a right angle',
        'All radii are congruent, so triangles $ACB$ and $ADB$ are congruent',
      ],
      answer: 1,
      solution:
        'Route one, classify both angles. Each has its vertex on the circle and both of its arms are chords, so each is an inscribed angle, and each cuts off the arc $AB$ that lies on the far side from $C$ and $D$. Two inscribed angles that intercept the same arc are congruent, which is the step exactly ✓. Check a second, independent way, by passing through the central angle and testing it on real numbers. Put the center at $O$ and draw the radii $\\overline{OA}$ and $\\overline{OB}$. The chord $\\overline{AB}$ fixes $\\angle AOB$ once and for all, no matter where a third point wanders on the far arc, and each inscribed angle on that arc measures half of $\\angle AOB$. One fixed number halved twice gives the same result twice. Try it with the figure: take the circle of radius $5$ about the origin with $A(-3, -4)$ and $B(3, -4)$. Then $\\angle AOB$ works out to about $73.7^\\circ$. Placing $C$ at $(0, 5)$ gives $\\angle ACB \\approx 36.9^\\circ$, and placing $D$ at $(-4, 3)$ gives $\\angle ADB \\approx 36.9^\\circ$, both exactly half ✓. (The first choice is CITING A REASON THAT NEEDS TWO CROSSING LINES, and the two angles here sit at two separate points of the circle ✗; the third choice is A TRUE THEOREM WHOSE HYPOTHESIS IS MISSING, since $\\overline{AB}$ is an ordinary chord and not a diameter ✗; the fourth choice is CLAIMING A CONGRUENCE THAT DOES NOT EXIST, since $\\triangle ACB$ and $\\triangle ADB$ have different side lengths even though the two angles at $C$ and $D$ agree ✗.)',
    },
    {
      q: 'A radius of a circle is drawn so that it crosses a chord at a right angle. A proof states that the chord is cut into two equal pieces at that crossing point. Which reason justifies the step?',
      fig: {
        view: [-6, -6, 6, 6],
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'seg', a: [-4, 3], b: [4, 3] },
          { t: 'seg', a: [0, 0], b: [0, 5], dash: true },
          { t: 'right', at: [0, 3], from: [4, 3], to: [0, 0] },
          { t: 'point', p: [-4, 3], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [4, 3], label: 'B', dx: 10, dy: 0 },
          { t: 'point', p: [0, 3], label: 'M', dx: -6, dy: 16 },
          { t: 'point', p: [0, 0], label: 'O', dx: -12, dy: 6 },
        ],
      },
      choices: [
        'A radius perpendicular to a chord bisects that chord',
        'A tangent line is perpendicular to the radius drawn to the point of tangency',
        'A radius that bisects a chord is perpendicular to that chord',
        'All radii of a circle are congruent',
      ],
      answer: 0,
      solution:
        'Route one, match the hypotheses to the theorem. What is on the page is a radius, a chord, and a right angle where they meet. The theorem stored under exactly that hypothesis reads: a radius perpendicular to a chord bisects the chord. Its conclusion is the step being justified ✓. Check a second, independent way, by proving the halving from scratch with triangles. Call the crossing point $M$ and the chord $\\overline{AB}$, and draw $\\overline{OA}$ and $\\overline{OB}$. Both are radii, so $OA = OB$. The segment $\\overline{OM}$ belongs to both $\\triangle OMA$ and $\\triangle OMB$, so $OM = OM$. Each of those triangles has a right angle at $M$. Equal hypotenuses and a shared leg in two right triangles is HL, so $\\triangle OMA \\cong \\triangle OMB$, and $AM = MB$ by CPCTC ✓. (The second choice is A TANGENT THEOREM IN A PICTURE WITH NO TANGENT, since $\\overline{AB}$ meets the circle twice ✗; the third choice is THE CONVERSE OF THE RIGHT THEOREM, running from bisecting to perpendicular when what is given is perpendicular and what is wanted is bisecting ✗; the fourth choice is A TRUE FACT THAT HALVES NOTHING BY ITSELF, though the second route uses it as one ingredient among several ✗.)',
    },
  ],
  // s7 — a theorem and its converse are two different statements.
  [
    {
      q: 'Bo argues: "Every square is a rhombus. Shape $Q$ is a rhombus. Therefore $Q$ is a square." What is wrong with the argument?',
      choices: [
        'Nothing is wrong; the argument is valid',
        'The first sentence is false, since a square is not a rhombus',
        'It reverses a true statement, and a rhombus with $60^\\circ$ angles is a counterexample',
        'It would be fine if $Q$ were also known to have four equal sides',
      ],
      answer: 2,
      solution:
        'Route one, watch the arrows. Bo starts from the true implication "square $\\Rightarrow$ rhombus" and then travels the arrow backward, using "rhombus $\\Rightarrow$ square." That reversed statement is the converse, and a converse is a brand new claim that has to be earned on its own ✓. Check a second, independent way, by building the shape that kills the converse. Take four rods of length $6$ and pin them into a square, then push the top of the square sideways until the corners open to $60^\\circ$ and $120^\\circ$. The rods never changed length, so all four sides are still $6$ and the shape is still a rhombus, yet not one of its corners is square. One such shape settles the matter, since a claim about every rhombus is destroyed by a single rhombus that disobeys ✓. (The first choice is ACCEPTING A REVERSED IMPLICATION AS FREE, which is the single most common flaw in student proofs ✗; the second choice is DENYING A TRUE STATEMENT, since a square has four equal sides and so meets the definition of a rhombus ✗; the fourth choice is ADDING A CONDITION THAT IS ALREADY THERE, since every rhombus has four equal sides by definition, so the extra hypothesis changes nothing about the pushed-over rhombus ✗.)',
    },
    {
      q: 'Wren argues: "Vertical angles are equal. In this figure $\\angle 1 = \\angle 2$. Therefore $\\angle 1$ and $\\angle 2$ are vertical angles." What is wrong with the argument?',
      choices: [
        'It uses the converse, and the base angles of an isosceles triangle are equal without being vertical',
        'Nothing is wrong, since equal angles must come from two crossing lines',
        'The first sentence is false, since vertical angles need not be equal',
        'The flaw is that $\\angle 1$ and $\\angle 2$ were never measured',
      ],
      answer: 0,
      solution:
        'Route one, watch the arrows. The theorem points from "vertical" to "equal." Wren enters at "equal" and exits at "vertical," which is the converse of the theorem, and a converse carries none of the original theorem’s authority ✓. Check a second, independent way, by producing equal angles that were never made by crossing lines. Draw a triangle with two sides of length $7$ and a base of length $4$. Its two base angles are equal, since equal sides face equal angles, yet they sit at opposite ends of the base with no crossing lines anywhere near them. So "equal" arrives here from a completely different source, and equality by itself cannot tell you where a pair of angles came from ✓. (The second choice is TREATING ONE CAUSE AS THE ONLY CAUSE, when equal angles also come from parallel lines, from isosceles triangles, from bisected angles, and from congruent triangles ✗; the third choice is DENYING A TRUE THEOREM, since vertical angles are equal and that half of the argument is sound ✗; the fourth choice is BLAMING MISSING MEASUREMENTS, when measuring would only confirm the equality that was already assumed and would say nothing about where the angles sit ✗.)',
    },
    {
      q: 'The statement "if a triangle is equilateral, then it is isosceles" is true. Is its converse also true?',
      choices: [
        'Yes, since both words describe triangles with sides of equal length',
        'Yes, since the converse of a true statement is always true',
        'No, since the original statement is false and so has no converse',
        'No — sides $5$, $5$, $8$ give a triangle that is isosceles but not equilateral',
      ],
      answer: 3,
      solution:
        'Route one, state the converse and hunt for one triangle that breaks it. The converse reads "if a triangle is isosceles, then it is equilateral." Take sides $5$, $5$, and $8$. Those lengths build a real triangle, since $5 + 5 = 10 > 8$, and two of the sides are equal so it is isosceles, but the third side is $8$ rather than $5$, so it is not equilateral. The converse fails ✓. Check a second, independent way, by looking at the whole family instead of one member. Fix two sides at $5$ each and let the base grow from just above $0$ to just under $10$, which is as far as the triangle inequality allows. Every triangle in that sweep has two equal sides, so every single one is isosceles, and exactly one of them, the one with base $5$, is equilateral. An endless family of isosceles triangles with one equilateral member inside it shows the failure is the rule rather than a fluke ✓. (The first choice is TREATING TWO WORDS AS THE SAME WORD, when isosceles asks for at least two equal sides and equilateral asks for all three ✗; the second choice is BELIEVING CONVERSES COME FREE, the exact habit this section is built to break ✗; the third choice is DENYING THE ORIGINAL STATEMENT, which is true, since three equal sides certainly include two equal sides ✗.)',
    },
  ],
  // s8 — name the criterion and the parts it runs on.
  [
    {
      q: '$\\overrightarrow{BM}$ bisects $\\angle ABC$. From $M$, perpendiculars are dropped to the two sides of the angle, meeting them at $P$ and $Q$. Which criterion proves $\\triangle BPM \\cong \\triangle BQM$, using only what is given?',
      fig: {
        view: [-1, -1, 9, 8],
        elems: [
          { t: 'seg', a: [0, 0], b: [4, 6.928] },
          { t: 'seg', a: [0, 0], b: [8, 0] },
          { t: 'seg', a: [0, 0], b: [3.464, 2], dash: true },
          { t: 'seg', a: [3.464, 2], b: [1.732, 3] },
          { t: 'seg', a: [3.464, 2], b: [3.464, 0] },
          { t: 'right', at: [1.732, 3], from: [0, 0], to: [3.464, 2] },
          { t: 'right', at: [3.464, 0], from: [0, 0], to: [3.464, 2] },
          { t: 'angle', at: [0, 0], from: [8, 0], to: [3.464, 2], r: 1.2 },
          { t: 'angle', at: [0, 0], from: [3.464, 2], to: [4, 6.928], r: 1.2 },
          { t: 'point', p: [0, 0], label: 'B', dx: -12, dy: 12 },
          { t: 'point', p: [8, 0], label: 'C', dx: 8, dy: 14 },
          { t: 'point', p: [4, 6.928], label: 'A', dx: 6, dy: -6 },
          { t: 'point', p: [3.464, 2], label: 'M', dx: 12, dy: 4 },
          { t: 'point', p: [1.732, 3], label: 'P', dx: -12, dy: -2 },
          { t: 'point', p: [3.464, 0], label: 'Q', dx: 2, dy: 16 },
        ],
      },
      choices: [
        'SAS: the two halves of the bisected angle, the shared side $\\overline{BM}$, and the perpendicular segments $MP = MQ$',
        'AAS: the right angles at $P$ and $Q$, the two halves of the bisected angle at $B$, and the shared side $\\overline{BM}$',
        'ASA: the two halves of the bisected angle, the right angles, and the shared side $\\overline{BM}$ between them',
        'HL: the shared hypotenuse $\\overline{BM}$ and the legs $MP = MQ$',
      ],
      answer: 1,
      solution:
        'Route one, sort the given parts and check where the side sits. The givens supply two right angles, one at $P$ and one at $Q$; two equal angles at $B$, since $\\overrightarrow{BM}$ bisects $\\angle ABC$; and $BM = BM$ by the reflexive property. That is two angles and a side. In each triangle $\\overline{BM}$ faces the right angle, so it lies opposite one of the two known angles rather than between them, and two angles with a side outside them is AAS ✓. Check a second, independent way, by showing the parts force the triangles to match, without quoting any criterion. In $\\triangle BPM$ the angles are $90^\\circ$ at $P$, half of $\\angle ABC$ at $B$, and whatever is left at $M$; in $\\triangle BQM$ the angles are the same two known values, so the leftover at $M$ is the same number in both. Now lay the two triangles so their copies of $\\overline{BM}$ coincide. At the $B$ end the equal half-angles send both triangles off along one ray, and at the $M$ end the equal leftover angles send them off along one ray as well. Two rays meet at a single point, so $P$ and $Q$ land on top of each other and the triangles coincide ✓. (The choice of SAS is CITING $MP = MQ$, WHICH IS THE CONCLUSION THIS PROOF EXISTS TO REACH, so using it is circular ✗; the choice of ASA is MISPLACING THE SHARED SIDE, since the side between the right angle at $P$ and the half-angle at $B$ is $\\overline{BP}$, not $\\overline{BM}$ ✗; the choice of HL is AGAIN LEANING ON $MP = MQ$, an equality no given supplies ✗.)',
    },
    {
      q: 'A proof about parallelogram $PQRS$ has already established $PQ = SR$ and $PS = QR$, and it now draws the diagonal $\\overline{PR}$. No fact about any angle has been written down yet. Which criterion proves $\\triangle PQR \\cong \\triangle RSP$?',
      fig: {
        view: [-1, -1, 10, 5],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [9, 4], [2, 4]], fill: false },
          { t: 'seg', a: [0, 0], b: [9, 4], dash: true },
          { t: 'tick', a: [0, 0], b: [7, 0], n: 1 },
          { t: 'tick', a: [2, 4], b: [9, 4], n: 1 },
          { t: 'tick', a: [0, 0], b: [2, 4], n: 2 },
          { t: 'tick', a: [7, 0], b: [9, 4], n: 2 },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 12 },
          { t: 'point', p: [7, 0], label: 'Q', dx: 10, dy: 12 },
          { t: 'point', p: [9, 4], label: 'R', dx: 10, dy: -6 },
          { t: 'point', p: [2, 4], label: 'S', dx: -12, dy: -6 },
        ],
      },
      choices: [
        'ASA: two pairs of alternate interior angles and the shared diagonal between them',
        'SAS: one pair of opposite sides, the shared diagonal, and the angle between them',
        'HL: the diagonal serves as the hypotenuse of each triangle',
        'SSS: both pairs of opposite sides and the shared diagonal',
      ],
      answer: 3,
      solution:
        'Route one, count what is on the page. $PQ = SR$ is written down, $PS = QR$ is written down, and $PR = RP$ is free by the reflexive property, since the diagonal belongs to both triangles. Three pairs of equal sides and no angle facts at all: the criterion that runs on this fuel is SSS ✓. Check a second, independent way, by rebuilding each triangle with a compass. Take the three lengths $PQ$, $QR$, and $RP$. Draw the longest of them, then swing an arc of the second length from one end and an arc of the third length from the other end; the arcs cross at one point on each side of the drawn segment, and those two crossings are mirror images, so they give the same triangle. Doing this for $\\triangle RSP$ uses the same three numbers, since $RS = PQ$ and $SP = QR$ and the shared side is the same segment, so it produces the same triangle ✓. (The choice of ASA is CITING ANGLE FACTS THE PROOF HAS NOT WRITTEN DOWN, and a step may use only what is on the page, even when the missing facts happen to be provable ✗; the choice of SAS is NAMING AN ANGLE BETWEEN THE TWO SIDES WHEN NO ANGLE IS KNOWN, which is the same disease in smaller print ✗; the choice of HL is CALLING A SEGMENT A HYPOTENUSE WITH NO RIGHT ANGLE ANYWHERE, since a parallelogram need not have one ✗.)',
    },
    {
      q: 'Triangles $RST$ and $RSU$ share the side $\\overline{RS}$, and it has been shown that $\\angle TRS = \\angle URS$ and $\\angle TSR = \\angle USR$. Which criterion proves the triangles congruent?',
      choices: [
        'AAS: two pairs of equal angles together with a side',
        'SAS: the shared side twice with the equal angles between',
        'ASA: the two pairs of equal angles and the shared side between them',
        'AAA: two pairs of equal angles force the third pair, so all three match',
      ],
      answer: 2,
      solution:
        'Route one, check where the shared side sits. The two known angles of $\\triangle RST$ are at $R$ and at $S$, which are the two ends of $\\overline{RS}$, so the shared side runs from one known angle straight to the other. Angle, the side between them, angle: that is ASA ✓. Check a second, independent way, by counting how the third vertex is pinned. The segment $\\overline{RS}$ is the same in both triangles, so both ends are already fixed. The angle at $R$ decides one ray leaving $R$, the angle at $S$ decides one ray leaving $S$, and both triangles use the same two angles, so both use the same two rays. Two rays that are not parallel cross in exactly one point, so $T$ and $U$ have nowhere to go but the same spot, and the triangles coincide. (If $U$ started on the far side of $\\overline{RS}$, reflect $\\triangle RSU$ across $\\overline{RS}$ first, which changes no length and no angle.) ✓ (The choice of AAS is IGNORING THE POSITION OF THE SIDE, since AAS is the version where the known side lies outside the two angles and this one lies between them ✗; the choice of SAS is COUNTING ONE SEGMENT AS TWO SIDES, when only a single side is known here ✗; the choice of AAA is FORGETTING THAT ANGLES FIX SHAPE BUT NOT SIZE, since a triangle and a doubled copy of it match in all three angles and are not congruent; what saves this problem is the shared side, not the angles alone ✗.)',
    },
  ],
  // s9 — reasons that come from a definition, a theorem, or a construction.
  [
    {
      q: 'In the figure, $\\overline{AP}$ is parallel to $\\overline{BQ}$ and $\\overline{AB}$ crosses both. A proof states "$\\angle A + \\angle B = 180^\\circ$," where $\\angle A$ means $\\angle BAP$ and $\\angle B$ means $\\angle ABQ$. Which reason justifies it?',
      fig: {
        view: [-1, -1, 6, 7],
        elems: [
          { t: 'seg', a: [0, 0], b: [0, 5] },
          { t: 'seg', a: [0, 0], b: [5, 1] },
          { t: 'seg', a: [0, 5], b: [5, 6] },
          { t: 'angle', at: [0, 0], from: [0, 5], to: [5, 1], r: 0.9 },
          { t: 'angle', at: [0, 5], from: [0, 0], to: [5, 6], r: 0.9 },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 6 },
          { t: 'point', p: [0, 5], label: 'B', dx: -12, dy: 4 },
          { t: 'point', p: [5, 1], label: 'P', dx: 10, dy: 4 },
          { t: 'point', p: [5, 6], label: 'Q', dx: 10, dy: 4 },
        ],
      },
      choices: [
        'the theorem that same-side interior angles between parallel lines are supplementary',
        'the theorem that alternate interior angles between parallel lines are congruent',
        'the definition of a linear pair',
        'the theorem that the angles of a triangle sum to $180^\\circ$',
      ],
      answer: 0,
      solution:
        'Route one, locate the two angles. Both open into the strip between the parallels, so both are interior, and both open toward the same side of the crossing segment $\\overline{AB}$. Interior and on one side is the same-side interior pair, and the theorem for that pair says the two add to $180^\\circ$ ✓. Check a second, independent way, by chasing the angle at $B$ around to $A$. Extend the ray $\\overrightarrow{BQ}$ backward past $B$. The angle $\\angle ABQ$ and the new angle on the other side of $B$ sit on a straight line, so they add to $180^\\circ$. That new angle and $\\angle BAP$ are alternate interior angles for the same two parallels, so they are equal. Replacing the new angle by $\\angle BAP$ in the straight-line sum gives $\\angle BAP + \\angle ABQ = 180^\\circ$ ✓. (The second choice is A TRUE THEOREM AIMED AT THE WRONG PAIR, since alternate interior angles lie on opposite sides of the crossing line and give equality, not a sum of $180^\\circ$ ✗; the third choice is CITING A RULE ABOUT ANGLES AT ONE POINT, and these two angles sit at $A$ and at $B$, which are different points ✗; the fourth choice is BORROWING A TRIANGLE THAT IS NOT IN THE FIGURE, since $\\overline{AP}$ and $\\overline{BQ}$ never meet and so close off nothing ✗.)',
    },
    {
      q: 'A proof about parallelogram $ABCD$ contains the line "$\\overline{AB}$ is parallel to $\\overline{DC}$." Which reason justifies that line?',
      choices: [
        'the theorem that opposite sides of a parallelogram are congruent',
        'CPCTC',
        'the definition of a parallelogram',
        'the theorem that the diagonals of a parallelogram bisect each other',
      ],
      answer: 2,
      solution:
        'Route one, read the definition of the word in the given. A parallelogram is defined as a quadrilateral whose opposite sides are parallel in both directions. Being told $ABCD$ is a parallelogram therefore hands over $\\overline{AB} \\parallel \\overline{DC}$ at once, with no work in between, so the reason is the definition ✓. Check a second, independent way, by asking whether any of the parallelogram theorems could deliver parallel sides on their own. Equal opposite sides cannot: a kite has two pairs of equal sides and not a single pair of parallel ones, and an isosceles trapezoid has two equal legs that are not parallel either. Bisecting diagonals cannot be cited first either, since that property is proved from the parallel sides rather than the other way round. Every route to parallelism runs back through the definition, which is where the fact was handed over free ✓. (The first choice is USING A THEOREM ABOUT LENGTHS TO CONCLUDE A FACT ABOUT DIRECTION, which the kite refutes ✗; the choice of CPCTC is INVOKING CONGRUENT TRIANGLES WHEN NO TRIANGLE HAS BEEN DRAWN, and CPCTC delivers equal parts rather than parallel ones ✗; the fourth choice is CITING A LATER THEOREM TO SUPPORT THE FACT IT WAS BUILT ON, which turns the proof in a circle ✗.)',
    },
    {
      q: 'A proof needs the line "the interior angles of quadrilateral $ABCD$ add to $360^\\circ$." Which reason supports it?',
      choices: [
        'a rectangle has four right angles, and four times $90^\\circ$ is $360^\\circ$',
        'a diagonal splits the quadrilateral into two triangles, and each triangle contributes $180^\\circ$',
        'the angles around a point add to $360^\\circ$',
        'measuring the four angles of the drawing gives $360^\\circ$',
      ],
      answer: 1,
      solution:
        'Route one, cut the quadrilateral in two. Draw the diagonal $\\overline{AC}$, dashed. It splits $ABCD$ into $\\triangle ABC$ and $\\triangle ACD$, and it splits the corner angles honestly: $\\angle A$ becomes $\\angle BAC$ plus $\\angle CAD$, $\\angle C$ becomes $\\angle BCA$ plus $\\angle DCA$, while $\\angle B$ and $\\angle D$ pass into one triangle each untouched. So the six angles of the two triangles are exactly the four angles of the quadrilateral, chopped up, giving $180^\\circ + 180^\\circ = 360^\\circ$ ✓. Check a second, independent way, by walking around the outside. Start at $A$ facing along $\\overline{AB}$ and walk the whole boundary. At each corner you turn by the amount left over from a straight line, that is $180^\\circ$ minus the interior angle there. Arriving back at $A$ facing the original direction means the four turns total one full spin, $360^\\circ$. So $4 \\times 180^\\circ$ minus the sum of the interior angles equals $360^\\circ$, and the sum of the interior angles is $720^\\circ - 360^\\circ = 360^\\circ$ ✓. (The first choice is PROVING ONE SPECIAL CASE AND CLAIMING ALL, since the line is about every quadrilateral $ABCD$ and most are not rectangles ✗; the third choice is A TRUE THEOREM ABOUT A DIFFERENT PICTURE, since the four interior angles sit at four separate corners and do not surround a single point ✗; the fourth choice is READING A DRAWING INSTEAD OF GIVING A REASON, which proves nothing about the quadrilaterals nobody drew ✗.)',
    },
  ],
  // s10 — is this coordinate placement legitimate?
  [
    {
      q: 'To prove a theorem about every rectangle, Dev places the corners at $(0, 0)$, $(a, 0)$, $(a, b)$, and $(0, b)$ and computes with coordinates. Is this legitimate?',
      choices: [
        'No, since those coordinates force the sides to run along the axes, which covers only some rectangles',
        'No, since coordinate calculations can never count as a geometry proof',
        'Yes — a rigid motion carries any rectangle onto that position, and rigid motions preserve lengths and angles',
        'No, since $a$ and $b$ must be replaced by numbers before anything can be computed',
      ],
      answer: 2,
      solution:
        'Route one, move an arbitrary rectangle into place. Take any rectangle at all. Slide it until one corner sits on the origin, then spin it about that corner until one of the two sides at that corner lies along the positive $x$-axis. Sliding and spinning are rigid motions: they change no length and no angle, so the moved rectangle satisfies exactly the same theorems as the original. The corner on the $x$-axis is now $(a, 0)$ for whatever positive number $a$ that side measures, the right angles push the remaining corners to $(a, b)$ and $(0, b)$, and $b$ is whatever the other side measures. Nothing about the rectangle was chosen for us ✓. Check a second, independent way, by hunting for a hidden extra hypothesis, which is the real danger in coordinate proofs. A placement cheats when its coordinates force a relationship that the theorem never assumed. Compare $(0, 0)$, $(5, 0)$, $(5, 2)$, $(0, 2)$, which locks the shape to five by two, or $(0, 0)$, $(a, 0)$, $(a, a)$, $(0, a)$, which secretly makes the rectangle a square. Dev’s letters $a$ and $b$ carry no equation tying them together, so no such secret is present, and the placement describes the whole family of rectangles ✓. (The first choice is MISTAKING THE AXES FOR AN EXTRA ASSUMPTION, since the axes are lines we drew and a rigid motion put the rectangle onto them without altering it ✗; the second choice is BANNING A LEGITIMATE PROOF TOOL, since a coordinate computation is as binding as a congruence argument when the placement is honest ✗; the fourth choice is DEMANDING NUMBERS, which is precisely what would destroy the generality by pinning the rectangle to one size ✗.)',
    },
    {
      q: 'To prove a theorem about every triangle, Rae places the vertices at $(0, 0)$, $(4, 0)$, and $(1, 3)$ and computes with coordinates. Is this legitimate?',
      fig: {
        view: [-1, -1, 5, 4],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [1, 3]], fill: false },
          { t: 'point', p: [0, 0] },
          { t: 'point', p: [4, 0] },
          { t: 'point', p: [1, 3] },
          { t: 'label', p: [0, 0], text: '(0, 0)', dx: -14, dy: 16 },
          { t: 'label', p: [4, 0], text: '(4, 0)', dx: 6, dy: 16 },
          { t: 'label', p: [1, 3], text: '(1, 3)', dx: 4, dy: -10 },
        ],
      },
      choices: [
        'No — those coordinates pin down one particular triangle, so nothing general is proved',
        'Yes, since every triangle can be moved so that one vertex sits at the origin and one side lies along the $x$-axis',
        'Yes, since the numbers can be scaled up or down afterward',
        'No, since coordinate proofs are allowed only for right triangles',
      ],
      answer: 0,
      solution:
        'Route one, measure what Rae drew. The side from $(0, 0)$ to $(4, 0)$ has length $4$, the side from $(4, 0)$ to $(1, 3)$ has length $\\sqrt{9 + 9} = \\sqrt{18}$, and the side from $(1, 3)$ back to $(0, 0)$ has length $\\sqrt{1 + 9} = \\sqrt{10}$. Three fixed numbers describe one single triangle. A computation about it is a fact about that one triangle, and it says nothing about a tall thin triangle or an equilateral one ✓. Check a second, independent way, by pointing the method at a claim known to be false. Suppose someone claimed "every triangle has a side of length $4$." Running Rae’s method, the placed triangle does have a side of length $4$, so the method would stamp the claim proved. Since the claim is false, any method that proves it must be broken, and the break is exactly the choice of numbers in place of letters ✓. (The second choice is A TRUE STATEMENT THAT DOES NOT RESCUE THIS PLACEMENT, since moving a triangle to the origin and the axis is fine, but the coordinates that follow must stay as letters or the generality is thrown away ✗; the third choice is BELIEVING SCALING FIXES IT, since scaling changes size while leaving shape alone, so it still never reaches a triangle of a different shape ✗; the fourth choice is INVENTING A RULE ABOUT RIGHT TRIANGLES, when the honest placement $(0, 0)$, $(a, 0)$, $(b, c)$ works for triangles of every kind ✗.)',
    },
    {
      q: 'To prove a theorem about every isosceles triangle, Iris places the vertices at $(-a, 0)$, $(a, 0)$, and $(0, h)$ and computes with coordinates. Is this legitimate?',
      choices: [
        'No, since the letters must be replaced by numbers before anything can be computed',
        'No, since the placement forces the base to be horizontal, which is a special case',
        'Yes, but only for equilateral triangles',
        'Yes — those three points always form an isosceles triangle, and every isosceles triangle can be carried onto that position',
      ],
      answer: 3,
      solution:
        'Route one, check the placement in both directions with the distance formula. Going out: the distance from $(0, h)$ to $(a, 0)$ is $\\sqrt{a^2 + h^2}$, and the distance from $(0, h)$ to $(-a, 0)$ is $\\sqrt{a^2 + h^2}$ as well, so whatever positive numbers $a$ and $h$ turn out to be, the triangle drawn has two equal sides. Coming back: given any isosceles triangle, slide the midpoint of its base to the origin and spin it until the base lies along the $x$-axis. Then $a$ is half the base and $h$ is the height, and the sliding and spinning changed nothing ✓. Check a second, independent way, by auditing the coordinates for a smuggled extra hypothesis. A placement goes wrong when its letters are secretly tied together. Compare $(-a, 0)$, $(a, 0)$, $(0, a)$, where reusing the letter $a$ for the height forces the apex angle to be exactly $90^\\circ$ and quietly narrows the theorem to right isosceles triangles. In Iris’s placement $h$ is a fresh letter with no equation linking it to $a$, so the apex may be low and wide or tall and thin, and picking $a = 3$ with $h = 7$ or $a = 7$ with $h = 3$ reaches shapes of both kinds ✓. (The first choice is DEMANDING NUMBERS, which is what would collapse the argument to one triangle ✗; the second choice is MISTAKING A CHOICE OF AXES FOR A RESTRICTION, since the axes are ours to place and a rigid motion does the placing without changing the triangle ✗; the third choice is CONFUSING THE FAMILY WITH ONE OF ITS MEMBERS, since equilateral triangles are the single case $h = a\\sqrt{3}$, and every other value of $h$ gives an isosceles triangle that is not equilateral ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 19,
  sections: { '19.3': s193 },
}
