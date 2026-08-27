// Introduction to Geometry chapter 3 — variations for section 3.2
// (SSS Congruence). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every correspondence was read twice: once by letter POSITION (first
//    letter to first letter, second to second, third to third) and once by
//    building the full vertex dictionary and eliminating the choices that
//    contradict it. The two readings must agree before a key is written.
//  - Every solution carries a primary route AND a second route that is
//    genuinely independent of the first — an elimination sweep, a closing-gap
//    rate argument, a counterexample, a size check, or the same figure read
//    from a different vertex — never the same arithmetic said twice.
//  - Each slot keeps the shape of its base answer: a correspondence question
//    stays a correspondence question, a criterion question stays a criterion
//    question, a length stays a length. Where the base asks for an output,
//    one variation asks for the input instead.
//  - Every figure was computed, not eyeballed. A tick mark is only drawn on
//    two segments whose coordinates give them the same length, and the
//    isosceles figures in slot 10 are built from the actual given angle: with
//    base half-width w and base angle B the apex sits at height w*tan(B), so
//    the drawn half-apex angle really is the one the question states. Figure
//    labels are plain text.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS. The traps running through this section are: READING THE LETTERS
//    ALPHABETICALLY, SHIFTING THE CORRESPONDENCE BY ONE, PAIRING THE OUTER
//    LETTERS, REVERSING THE CORRESPONDENCE, ANSWERING IN THE WRONG TRIANGLE,
//    DISTRUSTING A COMPLETE STATEMENT, RESTATING THE GIVEN PART, CONFUSING
//    CONGRUENCE WITH SIMILARITY, DEMANDING THE SAME ORIENTATION, DEMANDING
//    EQUAL SIZE, MISPLACING THE VERTEX LETTER, NAMING A CRITERION THE MARKS
//    DO NOT SUPPORT, COUNTING THE SHARED SIDE AS NEW INFORMATION, USING THE
//    CONCLUSION AS AN INGREDIENT, ASSUMING AN UNMARKED ANGLE, HANDING BACK A
//    GIVEN LENGTH, SUMMING THE WHOLE PERIMETER, ANSWERING WITH x INSTEAD OF
//    THE LENGTH, MOVING A CONSTANT WITHOUT FLIPPING ITS SIGN, STOPPING AT 2x,
//    DOUBLING THE LENGTH, ECHOING THE GIVEN ANGLE, FORGETTING THE RIGHT
//    ANGLE, ANSWERING THE HALF INSTEAD OF THE WHOLE, and ANSWERING THE WHOLE
//    INSTEAD OF THE HALF.
//  - No two choices inside an item name the same value or the same object.
//  - Slot 4 v2 draws two triangles that are genuinely NOT congruent, on
//    purpose: its answer is that two marked pairs of sides are not enough, so
//    an honest drawing must not quietly make the third pair equal too.

const s32 = [
  // s1 — a congruence statement pairs sides by letter position.
  [
    {
      q: 'If $\\triangle KLM \\cong \\triangle RST$, which side must have the same length as $\\overline{LM}$?',
      choices: ['$\\overline{RS}$', '$\\overline{RT}$', '$\\overline{ST}$', 'It cannot be determined'],
      answer: 2,
      solution:
        'The statement lines the vertices up in order: $K \\leftrightarrow R$, $L \\leftrightarrow S$, $M \\leftrightarrow T$. Segment $\\overline{LM}$ is built from the second and third letters of $\\triangle KLM$, so its partner is built from the second and third letters of $\\triangle RST$, which is $\\overline{ST}$ ✓. Check a second, independent way by sweeping the other candidates out with the vertex dictionary. $\\overline{RS}$ joins the partners of $K$ and $L$, so $RS = KL$ ✗; $\\overline{RT}$ joins the partners of $K$ and $M$, so $RT = KM$ ✗. Every side of $\\triangle RST$ is now spoken for, and the only one left holding $L$ and $M$ is $\\overline{ST}$ ✓. (Choosing $\\overline{RS}$ is SHIFTING THE CORRESPONDENCE BY ONE ✗; $\\overline{RT}$ is PAIRING THE OUTER LETTERS ✗; "cannot be determined" is DISTRUSTING A COMPLETE STATEMENT — the letter order settles it with no figure needed ✗.)',
    },
    {
      q: 'Given $\\triangle HJN \\cong \\triangle WYZ$, a student measures and finds $WZ = 9$. Which side of $\\triangle HJN$ must also be $9$ units long?',
      choices: ['$\\overline{HJ}$', '$\\overline{HN}$', '$\\overline{JN}$', 'It cannot be determined'],
      answer: 1,
      solution:
        'Read the dictionary off the statement: $H \\leftrightarrow W$, $J \\leftrightarrow Y$, $N \\leftrightarrow Z$. The measured side $\\overline{WZ}$ uses $W$ and $Z$, whose partners are $H$ and $N$, so the matching side is $\\overline{HN}$ and $HN = 9$ ✓. Check a second, independent way by running the dictionary forwards instead of backwards, translating all three sides of $\\triangle HJN$ into the other triangle: $\\overline{HJ}$ becomes $\\overline{WY}$, $\\overline{JN}$ becomes $\\overline{YZ}$, and $\\overline{HN}$ becomes $\\overline{WZ}$ ✓. Only one line of that table mentions $\\overline{WZ}$, and it points at $\\overline{HN}$ ✓. (Choosing $\\overline{HJ}$ is SHIFTING THE CORRESPONDENCE BY ONE, treating $\\overline{WZ}$ as the first two letters ✗; $\\overline{JN}$ is dropping the leading letter and PAIRING THE OUTER LETTERS from the wrong end ✗; "cannot be determined" is DISTRUSTING A COMPLETE STATEMENT ✗.)',
    },
    {
      q: 'In the congruence $\\triangle CDE \\cong \\triangle FGH$, which side of $\\triangle CDE$ corresponds to $\\overline{FH}$?',
      choices: ['$\\overline{CD}$', '$\\overline{DE}$', 'It cannot be determined', '$\\overline{CE}$'],
      answer: 3,
      solution:
        'Position by position, $C \\leftrightarrow F$, $D \\leftrightarrow G$, $E \\leftrightarrow H$. The side $\\overline{FH}$ is built from the first and third letters of $\\triangle FGH$, so its partner is built from the first and third letters of $\\triangle CDE$, namely $\\overline{CE}$ ✓. Check a second, independent way by asking which vertex each side skips. In $\\triangle FGH$ the side $\\overline{FH}$ is the one that misses $G$; in $\\triangle CDE$ the side that misses $G$’s partner $D$ is $\\overline{CE}$ ✓ — the same conclusion reached by naming the left-out vertex instead of the two used ones. (Choosing $\\overline{CD}$ is SHIFTING THE CORRESPONDENCE BY ONE ✗; $\\overline{DE}$ is REVERSING THE CORRESPONDENCE, matching the first letter of one triangle with the last of the other ✗; "cannot be determined" is DISTRUSTING A COMPLETE STATEMENT ✗.)',
    },
  ],
  // s2 — what congruence does and does not promise.
  [
    {
      q: 'Rosa cuts a paper triangle out with scissors and traces around it. She then turns the paper over, presses it down somewhere else, and traces around it again. What is true of her two traced triangles?',
      choices: [
        'They are congruent, because turning the paper over changes no side length and no angle',
        'They are not congruent, because one tracing is a mirror image of the other',
        'They are congruent only if the paper triangle is isosceles',
        'They have equal angles but different side lengths',
      ],
      answer: 0,
      solution:
        'Congruent means exact copy, and the test is whether every pair of corresponding sides and angles matches. Flipping the paper does not stretch an edge or open a corner, so all six parts survive the flip and the two tracings are congruent ✓. Check a second, independent way with a physical test rather than a list of parts: two figures are congruent exactly when one can be laid on the other, and flips are allowed in that laying — pick up the second tracing, turn it back over, and it drops onto the first with no gap ✓. (Choice B is DEMANDING THE SAME ORIENTATION, insisting a mirror image is a different shape ✗; choice C would mean congruence depends on the kind of triangle, which no part of the definition mentions ✗; choice D is CONFUSING CONGRUENCE WITH SIMILARITY, keeping the angles but letting the sides change ✗.)',
    },
    {
      q: 'Which statement about two congruent triangles is FALSE?',
      choices: [
        'Their corresponding sides are equal in length',
        'Their corresponding angles are equal in measure',
        'They must point in the same direction on the page',
        'They have the same perimeter',
      ],
      answer: 2,
      solution:
        'Congruence is a promise about the six parts, not about how the triangle is parked: a congruent copy may be slid, spun, or flipped and stays congruent, so "must point in the same direction" is the false statement ✓. Check a second, independent way by producing a counterexample to that one claim and confirming the other three from the definition. Draw a triangle, then draw its copy rotated a quarter turn: the two are still exact copies, so the direction claim fails ✗ while sides and angles are equal by the very definition of congruent ✓, and equal sides force equal perimeters, since a perimeter is nothing but the three side lengths added up ✓. (Choices A and B restate the definition, so neither can be the false statement ✗; choice D follows from A, so it cannot be false either ✗ — picking any of the three is DEMANDING THE SAME ORIENTATION in reverse, treating the one claim about placement as though it were part of the definition.)',
    },
    {
      q: 'Two triangles have three pairs of equal angles. What can you conclude for certain?',
      choices: [
        'They must be congruent',
        'They must have the same perimeter',
        'They must have the same area',
        'They have the same shape, but not necessarily the same size',
      ],
      answer: 3,
      solution:
        'Equal angles fix the shape and nothing else: the triangles could be a small one and a big one with matching corners, so all we may conclude is same shape, possibly different size ✓. Check a second, independent way with one concrete counterexample that kills the other three at once. Take a triangle with corners $40^\\circ$, $60^\\circ$, $80^\\circ$ and sides of some length, then draw a second triangle with those same three corners but every side twice as long. The angles still match, yet the second triangle has twice the perimeter ✗ and four times the area ✗, so it is not a copy of the first ✗ — while both remain the same shape ✓. (Choice A is CONFUSING CONGRUENCE WITH SIMILARITY ✗; choices B and C are DEMANDING EQUAL SIZE from information that only pins down shape, one by perimeter and one by area ✗.)',
    },
  ],
  // s3 — a congruence statement pairs angles by letter position too.
  [
    {
      q: 'Given $\\triangle DEF \\cong \\triangle MNP$, which angle must equal $\\angle F$?',
      choices: ['$\\angle M$', '$\\angle P$', '$\\angle N$', '$\\angle E$'],
      answer: 1,
      solution:
        '$F$ is the third letter of $\\triangle DEF$, so it corresponds to the third letter of $\\triangle MNP$, which is $P$. Therefore $\\angle F = \\angle P$ ✓. Check a second, independent way through the sides instead of the letters. Angle $F$ is squeezed between $\\overline{DF}$ and $\\overline{EF}$; those sides correspond to $\\overline{MP}$ and $\\overline{NP}$, and the angle squeezed between $\\overline{MP}$ and $\\overline{NP}$ has its vertex at $P$ ✓ — same answer, reached without ever counting letter positions. (Choosing $\\angle M$ is READING THE LETTERS ALPHABETICALLY, grabbing the first letter offered ✗; $\\angle N$ is SHIFTING THE CORRESPONDENCE BY ONE ✗; $\\angle E$ is ANSWERING IN THE WRONG TRIANGLE, since $E$ lives in $\\triangle DEF$ alongside $F$ ✗.)',
    },
    {
      q: 'A worksheet states $\\triangle GHJ \\cong \\triangle RST$ and reports that $\\angle S = 64^\\circ$. Which angle of $\\triangle GHJ$ measures $64^\\circ$?',
      choices: ['$\\angle G$', '$\\angle J$', '$\\angle R$', '$\\angle H$'],
      answer: 3,
      solution:
        'Match by position: $G \\leftrightarrow R$, $H \\leftrightarrow S$, $J \\leftrightarrow T$. The reported angle sits at $S$, whose partner is $H$, so $\\angle H = 64^\\circ$ ✓. Check a second, independent way by translating the whole of $\\triangle GHJ$ into the other triangle and reading which line lands on $S$: $\\angle G \\to \\angle R$, $\\angle H \\to \\angle S$, $\\angle J \\to \\angle T$. Exactly one line mentions $S$, and it starts at $H$ ✓. (Choosing $\\angle G$ is READING THE LETTERS ALPHABETICALLY, pairing the first letter with the first measurement handed over ✗; $\\angle J$ is SHIFTING THE CORRESPONDENCE BY ONE ✗; $\\angle R$ is ANSWERING IN THE WRONG TRIANGLE — the question asks for an angle of $\\triangle GHJ$, and $R$ is not one of its vertices ✗.)',
    },
    {
      q: 'Given $\\triangle WXY \\cong \\triangle BCD$, which angle must equal $\\angle D$?',
      choices: ['$\\angle Y$', '$\\angle W$', '$\\angle X$', '$\\angle C$'],
      answer: 0,
      solution:
        'Reading the statement backwards works just as well as reading it forwards: $B \\leftrightarrow W$, $C \\leftrightarrow X$, $D \\leftrightarrow Y$. So $\\angle D = \\angle Y$ ✓. Check a second, independent way by elimination on the picture the letters describe. If $\\angle D$ matched $\\angle W$, then $D$ would be the first letter of its triangle, but $D$ is written third ✗; if it matched $\\angle X$, then $D$ would be written second ✗. Only the third-letter slot is consistent with $D$’s position, and the third letter of $\\triangle WXY$ is $Y$ ✓. (Choosing $\\angle W$ is READING THE LETTERS ALPHABETICALLY, sending the first letter of one triangle to the first letter of the alphabet in the other ✗; $\\angle X$ is SHIFTING THE CORRESPONDENCE BY ONE ✗; $\\angle C$ is ANSWERING IN THE WRONG TRIANGLE ✗.)',
    },
  ],
  // s4 — three pairs of equal sides is SSS, and two pairs is not enough.
  [
    {
      q: 'The tick marks show three pairs of equal sides. Which congruence criterion proves $\\triangle HJK \\cong \\triangle LMN$?',
      fig: {
        view: [-1, -1, 12, 4],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.5, 0], [3, 2.5]], fill: false },
          { t: 'poly', pts: [[6.5, 0], [11, 0], [9.5, 2.5]], fill: false },
          { t: 'point', p: [0, 0], label: 'H', dx: -10, dy: 10 },
          { t: 'point', p: [4.5, 0], label: 'J', dx: 10, dy: 10 },
          { t: 'point', p: [3, 2.5], label: 'K', dx: 6, dy: -8 },
          { t: 'point', p: [6.5, 0], label: 'L', dx: -10, dy: 10 },
          { t: 'point', p: [11, 0], label: 'M', dx: 10, dy: 10 },
          { t: 'point', p: [9.5, 2.5], label: 'N', dx: 6, dy: -8 },
          { t: 'tick', a: [0, 0], b: [4.5, 0], n: 1 },
          { t: 'tick', a: [6.5, 0], b: [11, 0], n: 1 },
          { t: 'tick', a: [4.5, 0], b: [3, 2.5], n: 2 },
          { t: 'tick', a: [11, 0], b: [9.5, 2.5], n: 2 },
          { t: 'tick', a: [3, 2.5], b: [0, 0], n: 3 },
          { t: 'tick', a: [9.5, 2.5], b: [6.5, 0], n: 3 },
        ],
      },
      choices: ['SAS', 'ASA', 'SSS', 'AAS'],
      answer: 2,
      solution:
        'Read the marks: one tick gives $HJ = LM$, two ticks give $JK = MN$, three ticks give $KH = NL$. That is three pairs of corresponding sides and not a word about angles, which is exactly the Side-Side-Side criterion ✓. Check a second, independent way by auditing what each of the other names would need before it could be used. SAS needs an angle between two marked sides, ASA needs two marked angles, and AAS needs two marked angles as well — but the figure carries no angle marks at all, so all three are asking for an ingredient that is not in the kitchen ✗. Only the criterion built purely from sides survives ✓. (Choosing SAS, ASA, or AAS is NAMING A CRITERION THE MARKS DO NOT SUPPORT ✗.)',
    },
    {
      q: 'The only information given about the two triangles below is the marking shown. Which statement is correct?',
      fig: {
        view: [-1, -1, 11.5, 4],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [1, 2.8]], fill: false },
          { t: 'poly', pts: [[6, 0], [10, 0], [6.67, 2.4]], fill: false },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [1, 2.8], label: 'R', dx: 0, dy: -10 },
          { t: 'point', p: [6, 0], label: 'U', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'V', dx: 10, dy: 10 },
          { t: 'point', p: [6.67, 2.4], label: 'W', dx: 6, dy: -8 },
          { t: 'tick', a: [0, 0], b: [4, 0], n: 1 },
          { t: 'tick', a: [6, 0], b: [10, 0], n: 1 },
          { t: 'tick', a: [4, 0], b: [1, 2.8], n: 2 },
          { t: 'tick', a: [10, 0], b: [6.67, 2.4], n: 2 },
        ],
      },
      choices: [
        'The marks are not enough — SSS still needs a third pair, $RP = WU$',
        'SSS, because three pairs of equal sides are marked',
        'SAS, because the angles at $Q$ and $V$ are equal',
        'ASA, using the two pairs of marks shown',
      ],
      answer: 0,
      solution:
        'Count the marks honestly: one tick gives $PQ = UV$ and two ticks give $QR = VW$. That is two pairs of sides, and SSS asks for three, so the missing ingredient is the third pair $RP = WU$ ✓. Check a second, independent way by trying to build a counterexample, which is the real test of whether information is enough. Hold two sticks of the fixed lengths $PQ$ and $QR$ joined at $Q$ and swing the free ends apart or together like a hinge: every opening gives a legal triangle with those same two marked sides, and the third side grows and shrinks as you swing. The figure shows that hinge in two different positions, and the two triangles are not copies of each other ✗ — so two pairs of sides cannot force congruence ✓. (Choice B miscounts the ticks ✗; choice C is ASSUMING AN UNMARKED ANGLE, since nothing in the figure claims those corners are equal ✗; choice D is NAMING A CRITERION THE MARKS DO NOT SUPPORT, as ASA needs angles ✗.)',
    },
    {
      q: 'All six side lengths are given in the figure. Which congruence criterion proves $\\triangle KLM \\cong \\triangle RST$?',
      fig: {
        view: [-1, -1.4, 11.2, 3.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.05, 0], [1.43, 1.74]], fill: false },
          { t: 'poly', pts: [[6, 0], [10.05, 0], [7.43, 1.74]], fill: false },
          { t: 'point', p: [0, 0], label: 'K', dx: -10, dy: 10 },
          { t: 'point', p: [4.05, 0], label: 'L', dx: 10, dy: 10 },
          { t: 'point', p: [1.43, 1.74], label: 'M', dx: 0, dy: -10 },
          { t: 'point', p: [6, 0], label: 'R', dx: -10, dy: 10 },
          { t: 'point', p: [10.05, 0], label: 'S', dx: 10, dy: 10 },
          { t: 'point', p: [7.43, 1.74], label: 'T', dx: 0, dy: -10 },
          { t: 'label', p: [2.02, 0], text: '9', dx: 0, dy: 15 },
          { t: 'label', p: [2.74, 0.87], text: '7', dx: 13, dy: 2 },
          { t: 'label', p: [0.72, 0.87], text: '5', dx: -13, dy: 0 },
          { t: 'label', p: [8.02, 0], text: '9', dx: 0, dy: 15 },
          { t: 'label', p: [8.74, 0.87], text: '7', dx: 13, dy: 2 },
          { t: 'label', p: [6.72, 0.87], text: '5', dx: -13, dy: 0 },
        ],
      },
      choices: ['ASA', 'SSS', 'SAS', 'The triangles are not necessarily congruent'],
      answer: 1,
      solution:
        'Match the numbers position by position: $KL = RS = 9$, $LM = ST = 7$, and $MK = TR = 5$. Three pairs of corresponding sides are equal, and three sides is the Side-Side-Side criterion ✓. Check a second, independent way by asking whether the numbers could describe two different shapes. Three fixed lengths lock a triangle rigidly — build one out of sticks $5$, $7$, and $9$ and there is no hinge left to swing, no way to press it into a different outline ✓ — so the two triangles here are forced to be copies, with no angle information required. (Choosing ASA or SAS is NAMING A CRITERION THE MARKS DO NOT SUPPORT, since no angle is given anywhere in the figure ✗; the last choice ignores that three matching sides settle a triangle completely ✗.)',
    },
  ],
  // s5 — the shared side is the free third pair.
  [
    {
      q: 'In the figure, $RS = RU$ and $TS = TU$, and the segment $\\overline{RT}$ is drawn. To prove $\\triangle RST \\cong \\triangle RUT$ by SSS we use $RT = RT$ as the third pair. What makes that third pair true?',
      fig: {
        view: [-1.5, -4, 8.5, 4],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 2.6], [7, 0], [3, -2.6]], fill: false },
          { t: 'seg', a: [0, 0], b: [7, 0] },
          { t: 'point', p: [0, 0], label: 'R', dx: -12, dy: 4 },
          { t: 'point', p: [3, 2.6], label: 'S', dx: 0, dy: -10 },
          { t: 'point', p: [7, 0], label: 'T', dx: 12, dy: 4 },
          { t: 'point', p: [3, -2.6], label: 'U', dx: 0, dy: 16 },
          { t: 'tick', a: [0, 0], b: [3, 2.6], n: 1 },
          { t: 'tick', a: [0, 0], b: [3, -2.6], n: 1 },
          { t: 'tick', a: [7, 0], b: [3, 2.6], n: 2 },
          { t: 'tick', a: [7, 0], b: [3, -2.6], n: 2 },
        ],
      },
      choices: [
        'It follows from the triangles being congruent',
        'It follows because $S$ and $U$ are the same distance from $R$',
        'It is one of the facts given in the problem',
        'A segment always equals itself, and both triangles use that same segment',
      ],
      answer: 3,
      solution:
        'The segment $\\overline{RT}$ is a side of $\\triangle RST$ and a side of $\\triangle RUT$ — one single segment doing duty in both triangles. A length is equal to itself, so $RT = RT$ needs no measuring and no hypothesis ✓. That is why a shared side is free. Check a second, independent way by asking what the proof would look like if any other explanation were used. A proof of congruence may not lean on the congruence it is trying to establish, so the first choice would argue in a circle ✗. The problem statement lists only $RS = RU$ and $TS = TU$, so the third choice claims a given that was never given ✗. And the distances from $R$ to $S$ and to $U$ say nothing whatever about the distance from $R$ to $T$ ✗. One explanation is left, and it is the one that costs nothing ✓. (The first choice is USING THE CONCLUSION AS AN INGREDIENT ✗; the second is quoting a marked fact that concerns the wrong segment ✗; the third is RESTATING THE GIVEN PART incorrectly ✗.)',
    },
    {
      q: 'In the figure, $\\triangle ABD$ and $\\triangle CBD$ share the side $\\overline{BD}$, and the marks show $AB = CB$. Which single extra fact would let you conclude $\\triangle ABD \\cong \\triangle CBD$ by SSS?',
      fig: {
        view: [-1, -4.2, 6.8, 4.2],
        elems: [
          { t: 'poly', pts: [[1.5, 3], [5.5, 0], [1.5, -3], [0, 0]], fill: false },
          { t: 'seg', a: [0, 0], b: [5.5, 0] },
          { t: 'point', p: [1.5, 3], label: 'A', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'B', dx: -12, dy: 0 },
          { t: 'point', p: [1.5, -3], label: 'C', dx: 0, dy: 16 },
          { t: 'point', p: [5.5, 0], label: 'D', dx: 12, dy: 0 },
          { t: 'tick', a: [0, 0], b: [1.5, 3], n: 1 },
          { t: 'tick', a: [0, 0], b: [1.5, -3], n: 1 },
        ],
      },
      choices: ['$AD = CD$', '$\\angle ABD = \\angle CBD$', '$BD = BD$', '$\\angle A = \\angle C$'],
      answer: 0,
      solution:
        'SSS wants three pairs of corresponding sides. The marks hand over $AB = CB$, and the shared side hands over $BD = BD$ at no cost, so exactly one pair is still missing: the third sides $\\overline{AD}$ and $\\overline{CD}$. The fact needed is $AD = CD$ ✓. Check a second, independent way by listing the six sides and crossing off the ones already settled. $\\triangle ABD$ is made of $\\overline{AB}$, $\\overline{BD}$, $\\overline{AD}$; $\\triangle CBD$ is made of $\\overline{CB}$, $\\overline{BD}$, $\\overline{CD}$. Cross off the first pair (marked) and the second pair (shared) and one uncrossed pair stares back: $\\overline{AD}$ against $\\overline{CD}$ ✓. (Choice B and choice D supply angles, which SSS never uses ✗ — they are NAMING A CRITERION THE MARKS DO NOT SUPPORT in disguise; choice C is COUNTING THE SHARED SIDE AS NEW INFORMATION, offering a fact we already had for free ✗.)',
    },
    {
      q: 'In the figure, $MN = MQ$ and $PN = PQ$, and the diagonal $\\overline{MP}$ is drawn. Which statement correctly explains why $\\triangle MNP \\cong \\triangle MQP$?',
      fig: {
        view: [-4.5, -4, 4.5, 5],
        elems: [
          { t: 'poly', pts: [[0, 3.5], [3, 0], [0, -2.5], [-3, 0]], fill: false },
          { t: 'seg', a: [0, 3.5], b: [0, -2.5] },
          { t: 'point', p: [0, 3.5], label: 'M', dx: 0, dy: -10 },
          { t: 'point', p: [3, 0], label: 'N', dx: 12, dy: 0 },
          { t: 'point', p: [0, -2.5], label: 'P', dx: 0, dy: 14 },
          { t: 'point', p: [-3, 0], label: 'Q', dx: -12, dy: 0 },
          { t: 'tick', a: [0, 3.5], b: [3, 0], n: 1 },
          { t: 'tick', a: [0, 3.5], b: [-3, 0], n: 1 },
          { t: 'tick', a: [0, -2.5], b: [3, 0], n: 2 },
          { t: 'tick', a: [0, -2.5], b: [-3, 0], n: 2 },
        ],
      },
      choices: [
        'ASA, using the shared side together with the marked sides',
        'SAS, because the angles at $M$ are equal',
        'SSS, because the shared diagonal $\\overline{MP}$ supplies the third pair of equal sides',
        'There is not enough information to decide',
      ],
      answer: 2,
      solution:
        'Two pairs come from the marks, $MN = MQ$ and $PN = PQ$, and the diagonal is a side of both triangles, so $MP = MP$ gives the third pair for free. Three pairs of sides is SSS ✓. Check a second, independent way by counting ingredients against each criterion instead of naming one outright. The figure supplies three side facts and zero angle facts. ASA needs two angle facts ✗, SAS needs one ✗, and "not enough information" would require fewer than three side pairs, yet we have three ✓. Exactly one criterion runs on sides alone, and the tally hands it the win ✓. (Choice A is NAMING A CRITERION THE MARKS DO NOT SUPPORT ✗; choice B is ASSUMING AN UNMARKED ANGLE — the angles at $M$ turn out to be equal, but that is a prize we collect AFTER proving congruence, not a fact we may spend before ✗; choice D forgets that a shared side is itself information ✗.)',
    },
  ],
  // s6 — read a length off a congruence statement.
  [
    {
      q: '$\\triangle JKL \\cong \\triangle PQR$, with $JK = 13$, $KL = 8$, and $LJ = 11$. What is $PQ$?',
      fig: {
        view: [-1, -1, 10.5, 3.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.9, 0], [2.61, 2.02]], fill: false },
          { t: 'poly', pts: [[5.5, 0], [9.4, 0], [8.11, 2.02]], fill: false },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [3.9, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [2.61, 2.02], label: 'L', dx: 4, dy: -9 },
          { t: 'point', p: [5.5, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [9.4, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [8.11, 2.02], label: 'R', dx: 4, dy: -9 },
          { t: 'label', p: [1.95, 0], text: '13', dx: 0, dy: 15 },
          { t: 'label', p: [3.26, 1.01], text: '8', dx: 13, dy: 2 },
          { t: 'label', p: [1.31, 1.01], text: '11', dx: -13, dy: 0 },
          { t: 'tick', a: [0, 0], b: [3.9, 0], n: 1 },
          { t: 'tick', a: [5.5, 0], b: [9.4, 0], n: 1 },
          { t: 'tick', a: [3.9, 0], b: [2.61, 2.02], n: 2 },
          { t: 'tick', a: [9.4, 0], b: [8.11, 2.02], n: 2 },
          { t: 'tick', a: [2.61, 2.02], b: [0, 0], n: 3 },
          { t: 'tick', a: [8.11, 2.02], b: [5.5, 0], n: 3 },
        ],
      },
      choices: ['$8$', '$11$', '$13$', '$32$'],
      answer: 2,
      solution:
        '$\\overline{PQ}$ is built from the first and second letters of $\\triangle PQR$, so it corresponds to the first and second letters of $\\triangle JKL$, which is $\\overline{JK}$. Therefore $PQ = JK = 13$ ✓. Check a second, independent way by filling in the whole table and seeing that the assignment is forced. The other two sides of $\\triangle PQR$ must take the other two numbers: $QR = KL = 8$ and $RP = LJ = 11$. If $PQ$ were $8$ or $11$, some other side of $\\triangle PQR$ would be left with no number at all, and the copy would be incomplete ✗. Only $13$ leaves every side supplied exactly once ✓, which matches the single-tick pair in the figure joining $\\overline{JK}$ to $\\overline{PQ}$ ✓. (Choosing $8$ is SHIFTING THE CORRESPONDENCE BY ONE ✗; $11$ is PAIRING THE OUTER LETTERS ✗; $32$ is SUMMING THE WHOLE PERIMETER, $13 + 8 + 11$, instead of reporting one side ✗.)',
    },
    {
      q: '$\\triangle UVW \\cong \\triangle XYZ$, and in the figure $XY = 12$, $YZ = 6$, and $ZX = 9$. What is $VW$?',
      fig: {
        view: [-1, -1, 10.4, 2.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.84, 0], [2.52, 1.394]], fill: false },
          { t: 'poly', pts: [[5.5, 0], [9.34, 0], [8.02, 1.394]], fill: false },
          { t: 'point', p: [0, 0], label: 'U', dx: -10, dy: 10 },
          { t: 'point', p: [3.84, 0], label: 'V', dx: 10, dy: 10 },
          { t: 'point', p: [2.52, 1.394], label: 'W', dx: 4, dy: -9 },
          { t: 'point', p: [5.5, 0], label: 'X', dx: -10, dy: 10 },
          { t: 'point', p: [9.34, 0], label: 'Y', dx: 10, dy: 10 },
          { t: 'point', p: [8.02, 1.394], label: 'Z', dx: 4, dy: -9 },
          { t: 'label', p: [7.42, 0], text: '12', dx: 0, dy: 15 },
          { t: 'label', p: [8.68, 0.697], text: '6', dx: 13, dy: 2 },
          { t: 'label', p: [6.76, 0.697], text: '9', dx: -13, dy: 0 },
          { t: 'tick', a: [0, 0], b: [3.84, 0], n: 1 },
          { t: 'tick', a: [5.5, 0], b: [9.34, 0], n: 1 },
        ],
      },
      choices: ['$6$', '$12$', '$9$', '$27$'],
      answer: 0,
      solution:
        'This time the numbers live in the second triangle, so read the dictionary in that direction: $U \\leftrightarrow X$, $V \\leftrightarrow Y$, $W \\leftrightarrow Z$. Segment $\\overline{VW}$ uses the second and third letters, so its partner is $\\overline{YZ}$, and $VW = YZ = 6$ ✓. Check a second, independent way by a size argument that never touches the letters twice. Congruent triangles are copies, so $\\triangle UVW$ must carry the same three lengths $12$, $9$, $6$ — and in the figure $\\overline{VW}$ is plainly the SHORTEST side of its triangle, so it must receive the smallest of the three numbers ✓. The smallest is $6$, and $12$, $9$ belong to the longer sides ✗. (Choosing $12$ is SHIFTING THE CORRESPONDENCE BY ONE, reading $\\overline{VW}$ as if it were the first pair ✗; $9$ is PAIRING THE OUTER LETTERS, matching $\\overline{VW}$ with $\\overline{ZX}$ ✗; $27$ is SUMMING THE WHOLE PERIMETER ✗.)',
    },
    {
      q: '$\\triangle CDE \\cong \\triangle FGH$. The figure gives $FG = 9$, $GH = 15$, and $HF = 11$. What is $DE$?',
      fig: {
        view: [-1, -1, 8.6, 4],
        elems: [
          { t: 'poly', pts: [[0.5, 0], [3.02, 0], [0.14, 3.06]], fill: false },
          { t: 'poly', pts: [[5, 0], [7.52, 0], [4.64, 3.06]], fill: false },
          { t: 'point', p: [0.5, 0], label: 'C', dx: -4, dy: 12 },
          { t: 'point', p: [3.02, 0], label: 'D', dx: 10, dy: 8 },
          { t: 'point', p: [0.14, 3.06], label: 'E', dx: -4, dy: -9 },
          { t: 'point', p: [5, 0], label: 'F', dx: -4, dy: 12 },
          { t: 'point', p: [7.52, 0], label: 'G', dx: 10, dy: 8 },
          { t: 'point', p: [4.64, 3.06], label: 'H', dx: -4, dy: -9 },
          { t: 'label', p: [6.26, 0], text: '9', dx: 0, dy: 15 },
          { t: 'label', p: [6.08, 1.53], text: '15', dx: 14, dy: 0 },
          { t: 'label', p: [4.82, 1.53], text: '11', dx: -14, dy: 0 },
          { t: 'tick', a: [0.5, 0], b: [3.02, 0], n: 1 },
          { t: 'tick', a: [5, 0], b: [7.52, 0], n: 1 },
          { t: 'tick', a: [0.5, 0], b: [0.14, 3.06], n: 2 },
          { t: 'tick', a: [5, 0], b: [4.64, 3.06], n: 2 },
        ],
      },
      choices: ['$9$', '$11$', '$35$', '$15$'],
      answer: 3,
      solution:
        'Position by position, $C \\leftrightarrow F$, $D \\leftrightarrow G$, $E \\leftrightarrow H$. Segment $\\overline{DE}$ is the second-and-third-letter side, so it partners the second-and-third-letter side $\\overline{GH}$, giving $DE = GH = 15$ ✓. Check a second, independent way by naming the vertex each side skips. In $\\triangle FGH$ the side $\\overline{GH}$ is the one that avoids $F$; in $\\triangle CDE$ the side that avoids $F$’s partner $C$ is $\\overline{DE}$ ✓ — and the two ticked pairs in the figure confirm the leftovers, since $\\overline{CD}$ is tied to $\\overline{FG}$ and $\\overline{CE}$ to $\\overline{FH}$, leaving $\\overline{DE}$ no partner but $\\overline{GH}$ ✓. (Choosing $9$ is SHIFTING THE CORRESPONDENCE BY ONE ✗; $11$ is PAIRING THE OUTER LETTERS, handing $\\overline{DE}$ the side $\\overline{HF}$ ✗; $35$ is SUMMING THE WHOLE PERIMETER, $9 + 15 + 11$ ✗.)',
    },
  ],
  // s7 — let the tick marks dictate the order of the letters.
  [
    {
      q: 'Use the tick marks to match up the vertices. Which congruence statement lists the letters in the correct order?',
      fig: {
        view: [-1, -1, 11, 4],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [1.2, 3]], fill: false },
          { t: 'poly', pts: [[6, 3], [10, 3], [7.2, 0]], fill: false },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [1.2, 3], label: 'L', dx: 0, dy: -10 },
          { t: 'point', p: [6, 3], label: 'S', dx: -10, dy: -8 },
          { t: 'point', p: [10, 3], label: 'T', dx: 10, dy: -8 },
          { t: 'point', p: [7.2, 0], label: 'R', dx: 0, dy: 14 },
          { t: 'tick', a: [0, 0], b: [4, 0], n: 1 },
          { t: 'tick', a: [6, 3], b: [10, 3], n: 1 },
          { t: 'tick', a: [4, 0], b: [1.2, 3], n: 2 },
          { t: 'tick', a: [10, 3], b: [7.2, 0], n: 2 },
          { t: 'tick', a: [1.2, 3], b: [0, 0], n: 3 },
          { t: 'tick', a: [7.2, 0], b: [6, 3], n: 3 },
        ],
      },
      choices: [
        '$\\triangle JKL \\cong \\triangle STR$',
        '$\\triangle JKL \\cong \\triangle RST$',
        '$\\triangle JKL \\cong \\triangle TSR$',
        '$\\triangle JKL \\cong \\triangle RTS$',
      ],
      answer: 0,
      solution:
        'Follow the marks: $JK = ST$ (one tick), $KL = TR$ (two ticks), $LJ = RS$ (three ticks). The letter $K$ appears in the first two equalities and $T$ appears in their partners, so $K \\leftrightarrow T$; that leaves $J \\leftrightarrow S$ and $L \\leftrightarrow R$. Writing the second triangle in the order $J, K, L$ gives $\\triangle JKL \\cong \\triangle STR$ ✓. Check a second, independent way by testing each candidate against a single measurement, the one-tick side. The statement must send $\\overline{JK}$ to the first two letters of the right-hand name: $\\triangle STR$ offers $\\overline{ST}$, the one-tick side ✓; $\\triangle RST$ offers $\\overline{RS}$, a three-tick side ✗; $\\triangle TSR$ offers $\\overline{TS}$, which is the one-tick side, so test it further — it then sends $\\overline{KL}$ to $\\overline{SR}$, a three-tick side, while $\\overline{KL}$ carries two ✗; $\\triangle RTS$ offers $\\overline{RT}$, a two-tick side ✗. One name passes every test ✓. (Choosing $\\triangle RST$ is READING THE LETTERS ALPHABETICALLY and ignoring the flip ✗; $\\triangle TSR$ is REVERSING THE CORRESPONDENCE ✗; $\\triangle RTS$ is SHIFTING THE CORRESPONDENCE BY ONE ✗.)',
    },
    {
      q: 'The equal sides are shown by tick marks, and the second triangle has been turned upside down. Which congruence statement has its letters in a correct matching order?',
      fig: {
        view: [-1, -1, 13.5, 4],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [1.5, 2.4]], fill: false },
          { t: 'poly', pts: [[12, 2.4], [7, 2.4], [10.5, 0]], fill: false },
          { t: 'point', p: [0, 0], label: 'G', dx: -10, dy: 10 },
          { t: 'point', p: [5, 0], label: 'H', dx: 10, dy: 10 },
          { t: 'point', p: [1.5, 2.4], label: 'K', dx: 0, dy: -10 },
          { t: 'point', p: [12, 2.4], label: 'V', dx: 10, dy: -6 },
          { t: 'point', p: [7, 2.4], label: 'W', dx: -10, dy: -6 },
          { t: 'point', p: [10.5, 0], label: 'U', dx: 0, dy: 14 },
          { t: 'tick', a: [0, 0], b: [5, 0], n: 1 },
          { t: 'tick', a: [12, 2.4], b: [7, 2.4], n: 1 },
          { t: 'tick', a: [5, 0], b: [1.5, 2.4], n: 2 },
          { t: 'tick', a: [7, 2.4], b: [10.5, 0], n: 2 },
          { t: 'tick', a: [1.5, 2.4], b: [0, 0], n: 3 },
          { t: 'tick', a: [10.5, 0], b: [12, 2.4], n: 3 },
        ],
      },
      choices: [
        '$\\triangle GHK \\cong \\triangle UVW$',
        '$\\triangle GHK \\cong \\triangle WVU$',
        '$\\triangle GHK \\cong \\triangle VWU$',
        '$\\triangle GHK \\cong \\triangle UWV$',
      ],
      answer: 2,
      solution:
        'Read the marks: $GH = VW$ (one tick), $HK = WU$ (two ticks), $KG = UV$ (three ticks). The vertex $H$ sits in both of the first two equalities and $W$ sits in both partners, so $H \\leftrightarrow W$; the remaining letters then give $G \\leftrightarrow V$ and $K \\leftrightarrow U$. In the order $G, H, K$ that reads $\\triangle GHK \\cong \\triangle VWU$ ✓. Check a second, independent way by looking only at the LONGEST side of each triangle. The one-tick sides $\\overline{GH}$ and $\\overline{VW}$ are the longest in their triangles, and a correct statement must line up the two longest sides letter for letter, so the first two letters on the right must be $V$ and $W$ in some order. That instantly kills $\\triangle UVW$ and $\\triangle UWV$, which both open with $U$ ✗. Between the survivors, $\\triangle WVU$ would send $G$ to $W$, but $G$ is an endpoint of the three-tick side while $W$ is not ✗. Only $\\triangle VWU$ is left ✓. (Choosing $\\triangle UVW$ is READING THE LETTERS ALPHABETICALLY ✗; $\\triangle WVU$ is REVERSING THE CORRESPONDENCE ✗; $\\triangle UWV$ is SHIFTING THE CORRESPONDENCE BY ONE ✗.)',
    },
    {
      q: 'The tick marks show which sides are equal. Three of the statements below are correct ways to record the congruence. Which one is WRONG?',
      fig: {
        view: [-1, -1, 13, 4],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.6, 0], [1.4, 2.7]], fill: false },
          { t: 'poly', pts: [[12, 0], [7.4, 0], [10.6, 2.7]], fill: false },
          { t: 'point', p: [0, 0], label: 'C', dx: -10, dy: 10 },
          { t: 'point', p: [4.6, 0], label: 'D', dx: 10, dy: 10 },
          { t: 'point', p: [1.4, 2.7], label: 'E', dx: 0, dy: -10 },
          { t: 'point', p: [12, 0], label: 'N', dx: 10, dy: 10 },
          { t: 'point', p: [7.4, 0], label: 'M', dx: -10, dy: 10 },
          { t: 'point', p: [10.6, 2.7], label: 'L', dx: 0, dy: -10 },
          { t: 'tick', a: [0, 0], b: [4.6, 0], n: 1 },
          { t: 'tick', a: [12, 0], b: [7.4, 0], n: 1 },
          { t: 'tick', a: [4.6, 0], b: [1.4, 2.7], n: 2 },
          { t: 'tick', a: [7.4, 0], b: [10.6, 2.7], n: 2 },
          { t: 'tick', a: [1.4, 2.7], b: [0, 0], n: 3 },
          { t: 'tick', a: [10.6, 2.7], b: [12, 0], n: 3 },
        ],
      },
      choices: [
        '$\\triangle DCE \\cong \\triangle MNL$',
        '$\\triangle CDE \\cong \\triangle NLM$',
        '$\\triangle EDC \\cong \\triangle LMN$',
        '$\\triangle CED \\cong \\triangle NLM$',
      ],
      answer: 1,
      solution:
        'First build the dictionary from the marks: $CD = NM$ (one tick), $DE = ML$ (two ticks), $EC = LN$ (three ticks). The vertex $D$ appears in the first two equalities and $M$ in both partners, so $D \\leftrightarrow M$, and then $C \\leftrightarrow N$ and $E \\leftrightarrow L$. A statement is correct exactly when the letters in matching seats are partners. Checking the second choice, $\\triangle CDE \\cong \\triangle NLM$ puts $D$ opposite $L$, but $D$’s partner is $M$ ✗ — that is the wrong one ✓. Check a second, independent way by not using the dictionary at all and instead comparing tick counts seat by seat. In $\\triangle CDE \\cong \\triangle NLM$ the first two letters name $\\overline{CD}$, a one-tick side, against $\\overline{NL}$, a three-tick side ✗ — a mismatch on its own. Run the same tick-count test on the other three and every seat agrees: $\\overline{DC}$ (one tick) against $\\overline{MN}$ (one tick) ✓, $\\overline{ED}$ (two) against $\\overline{LM}$ (two) ✓, $\\overline{CE}$ (three) against $\\overline{NL}$ (three) ✓, and so on for each ✓. (The wrong statement is SHIFTING THE CORRESPONDENCE BY ONE inside the right-hand triangle, which is easy to miss because two of the choices end in the same three letters $NLM$ — a reminder that the LEFT side of a congruence statement has to be read just as carefully as the right ✗.)',
    },
  ],
  // s8 — name the angle that matches a three-letter angle name.
  [
    {
      q: 'SSS shows $\\triangle JKL \\cong \\triangle PQR$ in the figure. Which angle must equal $\\angle KJL$?',
      fig: {
        view: [-1, -1, 11, 4],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [1.5, 3]], fill: false },
          { t: 'poly', pts: [[6, 0], [10, 0], [7.5, 3]], fill: false },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [1.5, 3], label: 'L', dx: 0, dy: -10 },
          { t: 'point', p: [6, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [7.5, 3], label: 'R', dx: 0, dy: -10 },
          { t: 'tick', a: [0, 0], b: [4, 0], n: 1 },
          { t: 'tick', a: [6, 0], b: [10, 0], n: 1 },
          { t: 'tick', a: [4, 0], b: [1.5, 3], n: 2 },
          { t: 'tick', a: [10, 0], b: [7.5, 3], n: 2 },
          { t: 'tick', a: [1.5, 3], b: [0, 0], n: 3 },
          { t: 'tick', a: [7.5, 3], b: [6, 0], n: 3 },
        ],
      },
      choices: ['$\\angle PQR$', '$\\angle QRP$', '$\\angle JKL$', '$\\angle QPR$'],
      answer: 3,
      solution:
        'A three-letter angle name puts the vertex in the middle, so $\\angle KJL$ has its vertex at $J$. Since $J \\leftrightarrow P$, the matching angle has its vertex at $P$, and its two sides run to the partners of $K$ and $L$, namely $Q$ and $R$. Written with the vertex in the middle, that is $\\angle QPR$ ✓. Check a second, independent way through the sides that form the angle. $\\angle KJL$ is the angle between $\\overline{JK}$ (one tick) and $\\overline{JL}$ (three ticks); in the other triangle the one-tick and three-tick sides are $\\overline{PQ}$ and $\\overline{PR}$, and they meet at $P$ ✓ — the same vertex found by counting ticks instead of letters. (Choosing $\\angle PQR$ has vertex $Q$, the partner of $K$, so it is SHIFTING THE CORRESPONDENCE BY ONE ✗; $\\angle QRP$ has vertex $R$, the partner of $L$, which is MISPLACING THE VERTEX LETTER ✗; $\\angle JKL$ is RESTATING THE GIVEN PART in the wrong triangle ✗.)',
    },
    {
      q: 'SSS shows $\\triangle GHK \\cong \\triangle XYZ$ in the figure. Which angle of $\\triangle GHK$ must equal $\\angle ZXY$?',
      fig: {
        view: [-1, -1, 11.2, 4],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.2, 0], [3, 2.8]], fill: false },
          { t: 'poly', pts: [[6, 0], [10.2, 0], [9, 2.8]], fill: false },
          { t: 'point', p: [0, 0], label: 'G', dx: -10, dy: 10 },
          { t: 'point', p: [4.2, 0], label: 'H', dx: 10, dy: 10 },
          { t: 'point', p: [3, 2.8], label: 'K', dx: 6, dy: -8 },
          { t: 'point', p: [6, 0], label: 'X', dx: -10, dy: 10 },
          { t: 'point', p: [10.2, 0], label: 'Y', dx: 10, dy: 10 },
          { t: 'point', p: [9, 2.8], label: 'Z', dx: 6, dy: -8 },
          { t: 'tick', a: [0, 0], b: [4.2, 0], n: 1 },
          { t: 'tick', a: [6, 0], b: [10.2, 0], n: 1 },
          { t: 'tick', a: [4.2, 0], b: [3, 2.8], n: 2 },
          { t: 'tick', a: [10.2, 0], b: [9, 2.8], n: 2 },
          { t: 'tick', a: [3, 2.8], b: [0, 0], n: 3 },
          { t: 'tick', a: [9, 2.8], b: [6, 0], n: 3 },
        ],
      },
      choices: ['$\\angle HKG$', '$\\angle HGK$', '$\\angle GHK$', '$\\angle YZX$'],
      answer: 1,
      solution:
        'The middle letter of $\\angle ZXY$ is $X$, so that angle sits at vertex $X$. Reading the congruence backwards, $X \\leftrightarrow G$, so the matching angle sits at $G$, with its sides running to the partners of $Z$ and $Y$, which are $K$ and $H$. With the vertex in the middle that is $\\angle HGK$ ✓. Check a second, independent way by the sides meeting at the vertex. At $X$ the two sides are $\\overline{XY}$ (one tick) and $\\overline{XZ}$ (three ticks); the one-tick and three-tick sides of the other triangle are $\\overline{GH}$ and $\\overline{GK}$, and they meet at $G$ ✓. (Choosing $\\angle HKG$ places the vertex at $K$, the partner of $Z$, which is MISPLACING THE VERTEX LETTER by grabbing the first letter of the given name ✗; $\\angle GHK$ places it at $H$, the partner of $Y$, which is grabbing the last letter instead ✗; $\\angle YZX$ is ANSWERING IN THE WRONG TRIANGLE, since the question asks for an angle of $\\triangle GHK$ ✗.)',
    },
    {
      q: 'SSS shows $\\triangle MNP \\cong \\triangle STU$ in the figure. Which angle must equal $\\angle NPM$?',
      fig: {
        view: [-1, -1, 11.4, 4],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.4, 0], [1, 2.6]], fill: false },
          { t: 'poly', pts: [[6, 0], [10.4, 0], [7, 2.6]], fill: false },
          { t: 'point', p: [0, 0], label: 'M', dx: -10, dy: 10 },
          { t: 'point', p: [4.4, 0], label: 'N', dx: 10, dy: 10 },
          { t: 'point', p: [1, 2.6], label: 'P', dx: 0, dy: -10 },
          { t: 'point', p: [6, 0], label: 'S', dx: -10, dy: 10 },
          { t: 'point', p: [10.4, 0], label: 'T', dx: 10, dy: 10 },
          { t: 'point', p: [7, 2.6], label: 'U', dx: 0, dy: -10 },
          { t: 'tick', a: [0, 0], b: [4.4, 0], n: 1 },
          { t: 'tick', a: [6, 0], b: [10.4, 0], n: 1 },
          { t: 'tick', a: [4.4, 0], b: [1, 2.6], n: 2 },
          { t: 'tick', a: [10.4, 0], b: [7, 2.6], n: 2 },
          { t: 'tick', a: [1, 2.6], b: [0, 0], n: 3 },
          { t: 'tick', a: [7, 2.6], b: [6, 0], n: 3 },
        ],
      },
      choices: ['$\\angle TUS$', '$\\angle STU$', '$\\angle TSU$', '$\\angle NPM$'],
      answer: 0,
      solution:
        'The middle letter of $\\angle NPM$ is $P$, so the angle sits at $P$, and $P \\leftrightarrow U$. The matching angle therefore sits at $U$, with sides running to the partners of $N$ and $M$, which are $T$ and $S$. Vertex in the middle gives $\\angle TUS$ ✓. Check a second, independent way by counting ticks at the vertex. The angle $\\angle NPM$ is formed by $\\overline{PN}$ (two ticks) and $\\overline{PM}$ (three ticks); in $\\triangle STU$ the two-tick and three-tick sides are $\\overline{UT}$ and $\\overline{US}$, and the corner where they meet is $U$ ✓. (Choosing $\\angle STU$ puts the vertex at $T$, the partner of $N$, which is MISPLACING THE VERTEX LETTER ✗; $\\angle TSU$ puts it at $S$, the partner of $M$ ✗; $\\angle NPM$ is RESTATING THE GIVEN PART instead of naming its partner ✗.)',
    },
  ],
  // s9 — corresponding sides are equal, so the two expressions are equal.
  [
    {
      q: '$\\triangle BCD \\cong \\triangle FGH$, where $BC = 3x - 1$ and $FG = x + 9$. What is the length $BC$?',
      choices: ['$14$', '$5$', '$11$', '$28$'],
      answer: 0,
      solution:
        'Since $B \\leftrightarrow F$ and $C \\leftrightarrow G$, the side $\\overline{BC}$ corresponds to $\\overline{FG}$, so their lengths are equal: $3x - 1 = x + 9$. Subtracting $x$ from both sides gives $2x - 1 = 9$, then $2x = 10$ and $x = 5$. The question asks for a LENGTH, so finish the job: $BC = 3(5) - 1 = 14$ ✓. Check a second, independent way by watching the gap close, with no equation solved at all. At $x = 0$ the two expressions read $-1$ and $9$, a gap of $10$. Every time $x$ goes up by $1$, the first expression climbs by $3$ and the second climbs by $1$, so the gap shrinks by $2$ per step. Ten units of gap at two per step takes five steps, landing at $x = 5$, where both expressions read $14$ ✓ — and $5 + 9 = 14$ confirms it from the second expression ✓. (Choosing $5$ is ANSWERING WITH x INSTEAD OF THE LENGTH ✗; $11$ is MOVING A CONSTANT WITHOUT FLIPPING ITS SIGN, getting $2x = 9 - 1 = 8$ and $x = 4$, then $3(4) - 1 = 11$ ✗; $28$ is DOUBLING THE LENGTH, adding the two equal sides together ✗.)',
    },
    {
      q: '$\\triangle KLM \\cong \\triangle PQR$, where $LM = 4x - 4$ and $QR = 2x + 8$. What is the length $QR$?',
      choices: ['$6$', '$20$', '$12$', '$4$'],
      answer: 1,
      solution:
        'The letters give $L \\leftrightarrow Q$ and $M \\leftrightarrow R$, so $\\overline{LM}$ and $\\overline{QR}$ correspond and must be equal: $4x - 4 = 2x + 8$. Subtract $2x$ to get $2x - 4 = 8$, then $2x = 12$ and $x = 6$. Now report the length the question asked for: $QR = 2(6) + 8 = 20$ ✓. Check a second, independent way by the closing-gap argument. At $x = 0$ the expressions read $-4$ and $8$, a gap of $12$; each step of $1$ in $x$ raises the first by $4$ and the second by $2$, closing the gap by $2$ a step. Six steps close a gap of $12$, so $x = 6$ and the common value is $4(6) - 4 = 20$ ✓, matching the other expression exactly ✓. (Choosing $6$ is ANSWERING WITH x INSTEAD OF THE LENGTH ✗; $12$ is STOPPING AT 2x and handing back that number ✗; $4$ is MOVING A CONSTANT WITHOUT FLIPPING ITS SIGN, getting $2x = 8 - 4 = 4$ and $x = 2$, then $4(2) - 4 = 4$ ✗.)',
    },
    {
      q: '$\\triangle DEF \\cong \\triangle VUT$, where $DE = 5x + 1$ and $UV = 3x + 11$. What is the length $DE$?',
      choices: ['$5$', '$10$', '$31$', '$26$'],
      answer: 3,
      solution:
        'Read the order carefully: the statement pairs $D \\leftrightarrow V$, $E \\leftrightarrow U$, $F \\leftrightarrow T$. So $\\overline{DE}$ corresponds to $\\overline{VU}$, which is the same segment as $\\overline{UV}$, and the two expressions must be equal: $5x + 1 = 3x + 11$. Subtracting $3x$ gives $2x + 1 = 11$, so $2x = 10$ and $x = 5$, making $DE = 5(5) + 1 = 26$ ✓. Check a second, independent way by the closing gap. At $x = 0$ the expressions read $1$ and $11$, a gap of $10$; each step of $1$ in $x$ lifts the first by $5$ and the second by $3$, so the gap narrows by $2$ per step and closes after five steps. At $x = 5$ both sides read $26$ — from the second expression, $3(5) + 11 = 26$ ✓. (Choosing $5$ is ANSWERING WITH x INSTEAD OF THE LENGTH ✗; $10$ is STOPPING AT 2x ✗; $31$ is MOVING A CONSTANT WITHOUT FLIPPING ITS SIGN, getting $2x = 11 + 1 = 12$ and $x = 6$, then $5(6) + 1 = 31$ ✗.)',
    },
  ],
  // s10 — the apex-to-midpoint segment of an isosceles triangle, asked three
  // new ways. The right angle at the foot is the tool, not the question.
  [
    {
      q: 'In the figure, $PQ = PR$ and $N$ is the midpoint of $\\overline{QR}$, so SSS gives $\\triangle PQN \\cong \\triangle PRN$. If $\\angle QPN = 32^\\circ$, what is $\\angle PQN$?',
      fig: {
        view: [-1, -1, 5, 4.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2, 3.2]], fill: false },
          { t: 'seg', a: [2, 3.2], b: [2, 0] },
          { t: 'point', p: [0, 0], label: 'Q', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'R', dx: 10, dy: 10 },
          { t: 'point', p: [2, 3.2], label: 'P', dx: 0, dy: -10 },
          { t: 'point', p: [2, 0], label: 'N', dx: 0, dy: 14 },
          { t: 'tick', a: [0, 0], b: [2, 3.2], n: 1 },
          { t: 'tick', a: [4, 0], b: [2, 3.2], n: 1 },
          { t: 'tick', a: [0, 0], b: [2, 0], n: 2 },
          { t: 'tick', a: [2, 0], b: [4, 0], n: 2 },
        ],
      },
      choices: ['$32^\\circ$', '$148^\\circ$', '$58^\\circ$', '$64^\\circ$'],
      answer: 2,
      solution:
        'The congruence gives $\\angle PNQ = \\angle PNR$, and those two angles sit side by side on the straight line $QR$, so they add to $180^\\circ$ and each must be $90^\\circ$. Now work inside $\\triangle PQN$: its three angles add to $180^\\circ$, so $\\angle PQN = 180^\\circ - 90^\\circ - 32^\\circ = 58^\\circ$ ✓. Check a second, independent way using the big triangle and never mentioning the right angle. The congruence also gives $\\angle QPN = \\angle RPN$, so the whole apex angle is $\\angle QPR = 2 \\times 32^\\circ = 64^\\circ$. Since $PQ = PR$, the triangle is isosceles and its two base angles are equal, so each is $\\frac{180^\\circ - 64^\\circ}{2} = \\frac{116^\\circ}{2} = 58^\\circ$ ✓ — same answer, different triangle, different tool. (Choosing $32^\\circ$ is ECHOING THE GIVEN ANGLE ✗; $148^\\circ$ is FORGETTING THE RIGHT ANGLE, computing $180^\\circ - 32^\\circ$ ✗; $64^\\circ$ is ANSWERING THE WHOLE INSTEAD OF THE HALF, reporting the apex angle $\\angle QPR$ ✗.)',
    },
    {
      q: 'In the figure, $DE = DF$ and $K$ is the midpoint of $\\overline{EF}$, so SSS gives $\\triangle DEK \\cong \\triangle DFK$. If $\\angle DEK = 63^\\circ$, what is $\\angle EDK$?',
      fig: {
        view: [-1, -1, 5, 5],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2, 3.93]], fill: false },
          { t: 'seg', a: [2, 3.93], b: [2, 0] },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [2, 3.93], label: 'D', dx: 0, dy: -10 },
          { t: 'point', p: [2, 0], label: 'K', dx: 0, dy: 14 },
          { t: 'tick', a: [0, 0], b: [2, 3.93], n: 1 },
          { t: 'tick', a: [4, 0], b: [2, 3.93], n: 1 },
          { t: 'tick', a: [0, 0], b: [2, 0], n: 2 },
          { t: 'tick', a: [2, 0], b: [4, 0], n: 2 },
        ],
      },
      choices: ['$27^\\circ$', '$63^\\circ$', '$54^\\circ$', '$117^\\circ$'],
      answer: 0,
      solution:
        'From the congruence, $\\angle DKE = \\angle DKF$, and the two of them lie side by side on the straight line $EF$, so each is $90^\\circ$. Inside $\\triangle DEK$ the angles add to $180^\\circ$, giving $\\angle EDK = 180^\\circ - 90^\\circ - 63^\\circ = 27^\\circ$ ✓. Check a second, independent way through the full triangle $\\triangle DEF$. Because $DE = DF$, the base angles are equal, so $\\angle DEF = \\angle DFE = 63^\\circ$ and the apex angle is $\\angle EDF = 180^\\circ - 63^\\circ - 63^\\circ = 54^\\circ$. The congruence also gives $\\angle EDK = \\angle FDK$, so $\\overline{DK}$ splits that apex angle into two equal halves: $\\angle EDK = \\frac{54^\\circ}{2} = 27^\\circ$ ✓. (Choosing $63^\\circ$ is ECHOING THE GIVEN ANGLE ✗; $54^\\circ$ is ANSWERING THE WHOLE INSTEAD OF THE HALF, handing back the apex angle $\\angle EDF$ ✗; $117^\\circ$ is FORGETTING THE RIGHT ANGLE, computing $180^\\circ - 63^\\circ$ ✗.)',
    },
    {
      q: 'In the figure, $XY = XZ$ and $W$ is the midpoint of $\\overline{YZ}$, so SSS gives $\\triangle XYW \\cong \\triangle XZW$. If $\\angle XZW = 71^\\circ$, what is $\\angle YXZ$?',
      fig: {
        view: [-1.2, -1, 5.2, 6.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2, 5.81]], fill: false },
          { t: 'seg', a: [2, 5.81], b: [2, 0] },
          { t: 'point', p: [0, 0], label: 'Y', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'Z', dx: 10, dy: 10 },
          { t: 'point', p: [2, 5.81], label: 'X', dx: 0, dy: -10 },
          { t: 'point', p: [2, 0], label: 'W', dx: 0, dy: 14 },
          { t: 'tick', a: [0, 0], b: [2, 5.81], n: 1 },
          { t: 'tick', a: [4, 0], b: [2, 5.81], n: 1 },
          { t: 'tick', a: [0, 0], b: [2, 0], n: 2 },
          { t: 'tick', a: [2, 0], b: [4, 0], n: 2 },
        ],
      },
      choices: ['$19^\\circ$', '$38^\\circ$', '$71^\\circ$', '$109^\\circ$'],
      answer: 1,
      solution:
        'Since $XY = XZ$, the triangle $\\triangle XYZ$ is isosceles and its two base angles are equal, so $\\angle XYZ = \\angle XZW = 71^\\circ$. The three angles of $\\triangle XYZ$ add to $180^\\circ$, so the apex angle is $\\angle YXZ = 180^\\circ - 71^\\circ - 71^\\circ = 38^\\circ$ ✓. Check a second, independent way inside the small triangle. The congruence gives $\\angle XWY = \\angle XWZ$, a pair of equal angles resting side by side on the line $YZ$, so each is $90^\\circ$; then in $\\triangle XZW$ the angles add to $180^\\circ$ and $\\angle ZXW = 180^\\circ - 90^\\circ - 71^\\circ = 19^\\circ$. The congruence also gives $\\angle YXW = \\angle ZXW$, so the whole apex angle is $\\angle YXZ = 2 \\times 19^\\circ = 38^\\circ$ ✓ — same answer, reached through the right angle instead of the base angles. (Choosing $19^\\circ$ is ANSWERING THE HALF INSTEAD OF THE WHOLE ✗; $71^\\circ$ is ECHOING THE GIVEN ANGLE ✗; $109^\\circ$ is FORGETTING THE RIGHT ANGLE and subtracting only one base angle, $180^\\circ - 71^\\circ$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 3,
  sections: {
    '3.2': s32,
  },
}
