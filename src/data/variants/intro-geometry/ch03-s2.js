// Introduction to Geometry chapter 3 — variations for section 3.3
// (SAS Congruence). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every answer was reached twice by genuinely different routes. The
//    conceptual items are settled once by the definition of "included angle"
//    and once by testing each rival choice against a concrete consequence; the
//    numeric bowtie items are settled once through the SAS correspondence and
//    once through the half turn about the crossing point, which carries each
//    endpoint onto the opposite endpoint and so carries one triangle onto the
//    other without any letter-matching at all. The key is written down only
//    when the two routes agree.
//  - Each slot keeps the shape of its base answer: a vocabulary item stays a
//    vocabulary item, a criterion-naming item still names a criterion, a length
//    item reports a length, and an algebra item reports the LENGTH, never $x$.
//  - The four slots that live on the "two segments bisect each other" picture
//    deliberately pull in different directions: slot 5 asks for the reason,
//    slot 6 for a length, slot 9 for a length behind an equation, slot 10 for
//    an angle. Inside each slot one variation runs with no figure at all, and
//    one runs the question backward.
//  - Every figure is coordinate-exact. In a bowtie the far endpoints are the
//    exact negatives of the near ones, so the tick marks really do mark equal
//    halves; the length labels in slot 6 are drawn to scale (the crossing angle
//    comes from the law of cosines on the triangle those lengths make); and a
//    numeric angle label matches the angle actually drawn to within a rounding
//    step.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS. The traps running through this section are: NAMING AN ANGLE THAT
//    USES AN UNMARKED SIDE, NAMING THE THIRD VERTEX, ACCEPTING ANY ANGLE,
//    MOVING THE VERTEX, DENYING THE ANGLE EXISTS, ANSWERING WITH A DIFFERENT
//    CRITERION, CHOOSING A NON-INCLUDED ANGLE, DEMANDING A THIRD SIDE,
//    DISMISSING ANGLES ALTOGETHER, COUNTING MARKS THAT ARE NOT THERE, READING
//    SSA AS SAS, MISMATCHING THE CORRESPONDENCE, CALLING THE MARKS INSUFFICIENT,
//    LEANING ON THE PICTURE, COPYING A HALF-SEGMENT, ADDING THE TWO HALVES,
//    STOPPING AT x, STOPPING AT THE INTERMEDIATE STEP, DOUBLING TO THE WHOLE
//    SEGMENT, TREATING THE ANGLES AS SUPPLEMENTARY, TREATING THE ANGLES AS
//    COMPLEMENTARY, DOUBLING THE ANGLE, ASSUMING A RIGHT ANGLE, and CLAIMING
//    THE TRIANGLES CANNOT BE CONGRUENT.
//  - No two choices inside an item name the same thing.

const s33 = [
  // s1 — which angle is squeezed between two named sides.
  [
    {
      q: 'In $\\triangle PQR$, which angle is included between sides $\\overline{PQ}$ and $\\overline{PR}$?',
      fig: {
        view: [-1, -1, 5.4, 4],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.4, 0], [1.1, 3]], fill: false },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [4.4, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [1.1, 3], label: 'R', dx: 0, dy: -10 },
        ],
      },
      choices: ['$\\angle P$', '$\\angle Q$', '$\\angle R$', 'Either $\\angle Q$ or $\\angle R$'],
      answer: 0,
      solution:
        'Write down the endpoints of each named side. Side $\\overline{PQ}$ has endpoints $P$ and $Q$; side $\\overline{PR}$ has endpoints $P$ and $R$. The endpoint they share is $P$, so the two sides meet at $P$ and the angle they form there is $\\angle P$ ✓. Check a second, independent way by starting from the angles instead of the sides. Every angle of a triangle is built from exactly two sides: $\\angle Q$ is built from $\\overline{QP}$ and $\\overline{QR}$, and $\\overline{QR}$ was never named ✗; $\\angle R$ is built from $\\overline{RP}$ and $\\overline{RQ}$, and again $\\overline{RQ}$ was never named ✗. Only $\\angle P$ is built from the two named sides and nothing else ✓. (Choosing $\\angle Q$ or $\\angle R$ is NAMING AN ANGLE THAT USES AN UNMARKED SIDE; choosing "either $\\angle Q$ or $\\angle R$" is ACCEPTING ANY ANGLE, which is the exact habit SAS forbids.)',
    },
    {
      q: 'In $\\triangle KLM$, the angle $\\angle L$ is the included angle for which pair of sides?',
      fig: {
        view: [-1, -1, 4.8, 3.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.8, 0], [2.6, 2.9]], fill: false },
          { t: 'point', p: [0, 0], label: 'K', dx: -10, dy: 10 },
          { t: 'point', p: [3.8, 0], label: 'L', dx: 10, dy: 10 },
          { t: 'point', p: [2.6, 2.9], label: 'M', dx: 0, dy: -10 },
          { t: 'angle', at: [3.8, 0], from: [0, 0], to: [2.6, 2.9], r: 0.6 },
        ],
      },
      choices: [
        '$\\overline{KL}$ and $\\overline{KM}$',
        '$\\overline{KL}$ and $\\overline{LM}$',
        '$\\overline{KM}$ and $\\overline{LM}$',
        'No pair of sides — $\\angle L$ is never an included angle',
      ],
      answer: 1,
      solution:
        'This is the previous question run backward: instead of hunting for the shared vertex, we are handed the vertex and asked for the two arms. The arms of $\\angle L$ are the two sides that have an endpoint at $L$, and those are $\\overline{KL}$ and $\\overline{LM}$ ✓. Check a second, independent way by taking each offered pair and finding where it meets. $\\overline{KL}$ and $\\overline{KM}$ share the endpoint $K$, so that pair belongs to $\\angle K$ ✗. $\\overline{KM}$ and $\\overline{LM}$ share $M$, so that pair belongs to $\\angle M$ ✗. That leaves one pair, and it meets at $L$ ✓ — the same answer, found by elimination rather than by construction. (Choosing the $K$ pair or the $M$ pair is MOVING THE VERTEX to a different corner of the triangle; choosing "no pair" is DENYING THE ANGLE EXISTS, when every angle of every triangle is included between two of its sides.)',
    },
    {
      q: 'Nadia plans to prove two triangles congruent by SAS. In $\\triangle STU$ she has already marked the sides $\\overline{SU}$ and $\\overline{TU}$. Which angle must she mark?',
      fig: {
        view: [-1, -1, 5.6, 3.7],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.6, 0], [3.3, 2.7]], fill: false },
          { t: 'point', p: [0, 0], label: 'S', dx: -10, dy: 10 },
          { t: 'point', p: [4.6, 0], label: 'T', dx: 10, dy: 10 },
          { t: 'point', p: [3.3, 2.7], label: 'U', dx: 0, dy: -10 },
        ],
      },
      choices: ['$\\angle S$', '$\\angle T$', 'Any one of the three angles', '$\\angle U$'],
      answer: 3,
      solution: 'SAS works only when the angle sits between the two marked sides, so Nadia needs the angle at the vertex where $\\overline{SU}$ and $\\overline{TU}$ meet. Both of those sides have $U$ as an endpoint, so the angle she must mark is $\\angle U$ ✓. Check a second, independent way with the hinge picture. Hold the two marked sides as two rigid arms joined at $U$. Fixing the opening at that joint pins down the whole triangle, because the far ends of the arms are then locked in place and $\\overline{ST}$ has only one possible length. Fixing $\\angle S$ instead leaves the arm $\\overline{TU}$ free to swing, so the triangle is not pinned down ✗ — and that swinging is exactly the SSA failure. (Choosing $\\angle S$ or $\\angle T$ is CHOOSING A NON-INCLUDED ANGLE, each of which uses the unmarked side $\\overline{ST}$; choosing "any one" is ACCEPTING ANY ANGLE.)',
    },
  ],
  // s2 — the vocabulary of the criterion: where the A must sit.
  [
    {
      q: 'Two triangles are known to have two pairs of equal sides. Which extra piece of information finishes the job by SAS?',
      choices: [
        'The angles at the two vertices where the marked sides meet are equal',
        'The angles facing the longer marked sides are equal',
        'The angles facing the shorter marked sides are equal',
        'The third pair of sides is equal',
      ],
      answer: 0,
      solution:
        'SAS asks for the angle that is included — the one at the vertex where the two marked sides meet — so the fact we want is that those two vertex angles are equal ✓. Check a second, independent way by asking what each rival fact would actually deliver. An angle facing a marked side is not between the marked sides, so both of those choices hand over the SSA arrangement, which does not pin a triangle down ✗ ✗. Equal third sides do prove the triangles congruent, but by SSS, not SAS — and the question asked for the fact that finishes the job by SAS ✗. One choice puts the angle in the only place SAS accepts ✓. (Either "facing" choice is CHOOSING A NON-INCLUDED ANGLE; the third-side choice is ANSWERING WITH A DIFFERENT CRITERION.)',
    },
    {
      q: 'Which arrangement of three matching parts is the Side-Angle-Side criterion?',
      choices: [
        'Two sides and any angle you like',
        'Two sides and the angle where those two sides meet',
        'Two angles and the side between them',
        'Two sides and the angle facing the longer one',
      ],
      answer: 1,
      solution:
        'Read the name in order: Side, Angle, Side. The angle is written between the two sides because it sits between them in the triangle, at the vertex where they meet ✓. Check a second, independent way with a pair of scissors as a model. Open a pair of scissors to a chosen angle: the two blades are the two sides, the joint is the angle, and the distance between the blade tips is then fixed with no freedom left, so only one triangle can be built ✓. Now try to build from "two sides and any angle": the same two blade lengths with an angle marked out at a tip instead of at the joint leaves the joint free to open and close, and different openings give different triangles ✗. The choice naming two angles and a side describes a different arrangement altogether, with only one side in it ✗. (The "any angle" choice is ACCEPTING ANY ANGLE; the "facing the longer one" choice is CHOOSING A NON-INCLUDED ANGLE; the two-angles choice is ANSWERING WITH A DIFFERENT CRITERION, since it has the wrong count of sides for SAS.)',
    },
    {
      q: 'Yusuf says, "If two triangles have two pairs of equal sides and one pair of equal angles, then they must be congruent." Which reply is correct?',
      choices: [
        'He is right, and what he described is exactly SAS',
        'He is wrong, because SAS also needs the third pair of sides to be equal',
        'He is right only when the equal angles lie between the two pairs of equal sides',
        'He is wrong, because equal angles are never any help in proving congruence',
      ],
      answer: 2,
      solution:
        'Yusuf has counted the parts correctly but has said nothing about where the angle sits, and placement is the whole point of SAS. His claim is right when the equal angles are included between the equal sides and unreliable when they are not ✓. Check a second, independent way by hunting for a counterexample to his sentence as written. Take a triangle with two sides of $5$ and $8$ and an angle marked at the far end of the $8$-side; that angle does not sit between the two sides, and the $5$-side can swing to two different positions, giving two triangles that share all three named measurements and are not congruent ✗. So his sentence cannot be right as it stands, yet it also cannot be wrong every time, since the included case is a theorem — the conditional reply is the only one that survives both tests ✓. (The "exactly SAS" reply is READING SSA AS SAS; the "third pair of sides" reply is DEMANDING A THIRD SIDE, which describes SSS; the last reply is DISMISSING ANGLES ALTOGETHER.)',
    },
  ],
  // s3 — read the marks off a pair of triangles and name the criterion.
  [
    {
      q: 'Which criterion proves $\\triangle PQR \\cong \\triangle XYZ$ from the marks shown?',
      fig: {
        view: [-1, -1.9, 12.3, 3.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.2, 0], [1.8017, 2.8834]], fill: false },
          { t: 'poly', pts: [[7.4, 0.9], [11.2369, -0.8083], [10.2187, 2.8013]], fill: false },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [4.2, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [1.8017, 2.8834], label: 'R', dx: 0, dy: -10 },
          { t: 'point', p: [7.4, 0.9], label: 'X', dx: -10, dy: 10 },
          { t: 'point', p: [11.2369, -0.8083], label: 'Y', dx: 10, dy: 10 },
          { t: 'point', p: [10.2187, 2.8013], label: 'Z', dx: 6, dy: -8 },
          { t: 'tick', a: [0, 0], b: [4.2, 0], n: 1 },
          { t: 'tick', a: [7.4, 0.9], b: [11.2369, -0.8083], n: 1 },
          { t: 'tick', a: [0, 0], b: [1.8017, 2.8834], n: 2 },
          { t: 'tick', a: [7.4, 0.9], b: [10.2187, 2.8013], n: 2 },
          { t: 'angle', at: [0, 0], from: [4.2, 0], to: [1.8017, 2.8834], r: 0.7, label: '58' },
          { t: 'angle', at: [7.4, 0.9], from: [11.2369, -0.8083], to: [10.2187, 2.8013], r: 0.7, label: '58' },
        ],
      },
      choices: ['SSS', 'SAS', 'ASA', 'SSA'],
      answer: 1,
      solution:
        'The single ticks give $PQ = XY$, the double ticks give $PR = XZ$, and the two $58^\\circ$ angles sit at $P$ and at $X$. Both marked sides of the left triangle have an endpoint at $P$, so the $58^\\circ$ angle is included between them, and the same holds at $X$: two sides with the angle between them is Side-Angle-Side ✓. Check a second, independent way by counting what is marked and testing each rival name. Sides marked: two pairs. Angles marked: one pair. SSS would need three pairs of sides and only two are marked ✗. A criterion built on two angles would need a second pair of angles, and none is marked ✗. SSA would need the marked angle to sit away from the marked sides, and here it sits right between them ✗. Two sides, one included angle, exactly one name left ✓. (Choosing SSS is COUNTING MARKS THAT ARE NOT THERE; choosing ASA is ANSWERING WITH A DIFFERENT CRITERION; choosing SSA is CHOOSING A NON-INCLUDED ANGLE that the figure does not show.)',
    },
    {
      q: 'The marks in the figure are the only information given about $\\triangle GHJ$ and $\\triangle KLM$. Which criterion proves them congruent?',
      fig: {
        view: [-1, -1, 13.6, 6.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.4, 0], [1.75, 2.4367]], fill: false },
          { t: 'poly', pts: [[12.6, 3.9], [8.715, 5.9657], [9.9109, 2.5701]], fill: false },
          { t: 'point', p: [0, 0], label: 'G', dx: -10, dy: 10 },
          { t: 'point', p: [4.4, 0], label: 'H', dx: 10, dy: 10 },
          { t: 'point', p: [1.75, 2.4367], label: 'J', dx: 0, dy: -10 },
          { t: 'point', p: [12.6, 3.9], label: 'K', dx: 10, dy: 6 },
          { t: 'point', p: [8.715, 5.9657], label: 'L', dx: -8, dy: -6 },
          { t: 'point', p: [9.9109, 2.5701], label: 'M', dx: 0, dy: 14 },
          { t: 'tick', a: [0, 0], b: [4.4, 0], n: 1 },
          { t: 'tick', a: [12.6, 3.9], b: [8.715, 5.9657], n: 1 },
          { t: 'tick', a: [0, 0], b: [1.75, 2.4367], n: 2 },
          { t: 'tick', a: [12.6, 3.9], b: [9.9109, 2.5701], n: 2 },
          { t: 'tick', a: [4.4, 0], b: [1.75, 2.4367], n: 3 },
          { t: 'tick', a: [8.715, 5.9657], b: [9.9109, 2.5701], n: 3 },
        ],
      },
      choices: ['ASA', 'SAS', 'SSS', 'Not enough information'],
      answer: 2,
      solution:
        'Count the marks: single ticks give $GH = KL$, double ticks give $GJ = KM$, triple ticks give $HJ = LM$. That is three pairs of equal sides and no angle marked at all, which is Side-Side-Side ✓. Check a second, independent way by asking what a criterion needs to have available. SAS and ASA both need a marked angle, and this figure marks none, so neither is even reachable here ✗ ✗. Is the information enough? A triangle built from three fixed side lengths cannot be flexed — pushing on any corner would have to change a side — so the three lengths lock the shape and the triangles must be congruent ✗ for the "not enough" choice ✓ for SSS. The second triangle is drawn turned around, which changes nothing, since congruence does not care how a triangle is set on the page. (Choosing SAS or ASA is COUNTING MARKS THAT ARE NOT THERE; choosing "not enough information" is CALLING THE MARKS INSUFFICIENT when three side pairs are the oldest criterion in the book.)',
    },
    {
      q: 'From the marks shown, which criterion proves $\\triangle EFG \\cong \\triangle RST$?',
      fig: {
        view: [-2.7, -4.6, 8.9, 1],
        elems: [
          { t: 'poly', pts: [[0, 0], [-1.6957, -2.7138], [2.0667, -3.3074]], fill: false },
          { t: 'poly', pts: [[7.9, -3.6], [7.4546, -0.4311], [4.1909, -2.3948]], fill: false },
          { t: 'point', p: [0, 0], label: 'E', dx: 0, dy: -10 },
          { t: 'point', p: [-1.6957, -2.7138], label: 'F', dx: -10, dy: 10 },
          { t: 'point', p: [2.0667, -3.3074], label: 'G', dx: 10, dy: 10 },
          { t: 'point', p: [7.9, -3.6], label: 'R', dx: 10, dy: 8 },
          { t: 'point', p: [7.4546, -0.4311], label: 'S', dx: 10, dy: -4 },
          { t: 'point', p: [4.1909, -2.3948], label: 'T', dx: -10, dy: 4 },
          { t: 'tick', a: [0, 0], b: [-1.6957, -2.7138], n: 1 },
          { t: 'tick', a: [7.9, -3.6], b: [7.4546, -0.4311], n: 1 },
          { t: 'tick', a: [0, 0], b: [2.0667, -3.3074], n: 2 },
          { t: 'tick', a: [7.9, -3.6], b: [4.1909, -2.3948], n: 2 },
          { t: 'angle', at: [0, 0], from: [-1.6957, -2.7138], to: [2.0667, -3.3074], r: 0.8, label: '64' },
          { t: 'angle', at: [7.9, -3.6], from: [7.4546, -0.4311], to: [4.1909, -2.3948], r: 0.8, label: '64' },
        ],
      },
      choices: ['SSS', 'SSA', 'ASA', 'SAS'],
      answer: 3,
      solution:
        'The marked sides of the left triangle are $\\overline{EF}$ and $\\overline{EG}$, which share the endpoint $E$, and the $64^\\circ$ angle is drawn at $E$ — right between them. In the right triangle the marked sides $\\overline{RS}$ and $\\overline{RT}$ share $R$, and the $64^\\circ$ angle is drawn at $R$. Two sides and the included angle: SAS ✓. Check a second, independent way by testing the marked angle against the definition of "included" rather than trusting the picture. The angle at $E$ has arms $\\overline{EF}$ and $\\overline{EG}$; both of those carry tick marks, and the unmarked side $\\overline{FG}$ is not an arm of it. An angle whose two arms are exactly the two marked sides is by definition the included angle ✓, so the SSA arrangement — where one arm of the angle is the unmarked side — is ruled out ✗. Three side pairs are not marked, so SSS is out ✗, and no second angle is marked, so ASA is out ✗. (Choosing SSA is CHOOSING A NON-INCLUDED ANGLE; choosing SSS or ASA is COUNTING MARKS THAT ARE NOT THERE.)',
    },
  ],
  // s4 — one side pair and one angle pair given; which second pair fits?
  [
    {
      q: 'In $\\triangle PQR$ and $\\triangle STU$ it is known that $PQ = ST$ and $\\angle Q = \\angle T$. Which additional fact would prove the triangles congruent by SAS?',
      choices: ['$QR = TU$', '$PR = SU$', '$\\angle P = \\angle S$', '$QR = SU$'],
      answer: 0,
      solution:
        'The equal angles sit at $Q$ and at $T$, so for SAS both marked sides must be arms of those angles. The arms of $\\angle Q$ are $\\overline{QP}$ and $\\overline{QR}$; one of them, $\\overline{QP}$, is already matched, so the missing pair is $QR = TU$ ✓ — and $U$ is the right partner for $R$, since the matching so far is $P \\leftrightarrow S$, $Q \\leftrightarrow T$, $R \\leftrightarrow U$. Check a second, independent way with the hinge. Fix the opening at $Q$ and lay one arm of length $PQ$ along it; the triangle is still unfinished, because the other arm can be any length at all. Cutting that other arm to a fixed length $QR$ closes the shape with no freedom left, and doing exactly the same at $T$ builds the very same triangle ✓. Knowing $PR$ instead leaves the arm $\\overline{QR}$ free to slide long or short, so nothing is pinned down ✗. (The choice $PR = SU$ is CHOOSING A NON-INCLUDED ANGLE seen from the other end — with $\\overline{PR}$ facing the marked angle it is the SSA arrangement ✗; $\\angle P = \\angle S$ is ANSWERING WITH A DIFFERENT CRITERION, since it gives two angles and only one side ✗; $QR = SU$ is MISMATCHING THE CORRESPONDENCE, pairing $R$ with $S$ when $R$ belongs with $U$ ✗.)',
    },
    {
      q: 'In $\\triangle MNP$ and $\\triangle QRS$ it is known that $MN = QR$ and $NP = RS$. What else must be true before SAS applies?',
      choices: ['$\\angle M = \\angle Q$', '$\\angle P = \\angle S$', '$\\angle N = \\angle R$', '$MP = QS$'],
      answer: 2,
      solution:
        'This one runs the opposite way from its neighbor: the two sides are handed over and the angle is missing. The marked sides $\\overline{MN}$ and $\\overline{NP}$ share the endpoint $N$, and $\\overline{QR}$ and $\\overline{RS}$ share $R$, so the included angles are $\\angle N$ and $\\angle R$, and the fact still needed is $\\angle N = \\angle R$ ✓. Check a second, independent way by testing each offered angle against the two marked sides. $\\angle M$ has arms $\\overline{MN}$ and $\\overline{MP}$, and $\\overline{MP}$ carries no mark ✗. $\\angle P$ has arms $\\overline{PN}$ and $\\overline{PM}$, and the unmarked $\\overline{MP}$ turns up again ✗. Exactly one offered angle has both marked sides as its arms ✓. (Either of the other angle choices is CHOOSING A NON-INCLUDED ANGLE, each leaving the unreliable SSA arrangement; $MP = QS$ is ANSWERING WITH A DIFFERENT CRITERION, since a third pair of equal sides proves congruence by SSS rather than by SAS.)',
    },
    {
      q: 'In $\\triangle GHK$ and $\\triangle LMP$ it is known that $HK = MP$ and $\\angle K = \\angle P$. Which additional fact completes an SAS argument?',
      choices: ['$GH = LM$', '$\\angle H = \\angle M$', '$GK = LM$', '$GK = LP$'],
      answer: 3,
      solution:
        'The equal angles sit at $K$ and at $P$, so the two sides in the argument have to be the arms of those angles. The arms of $\\angle K$ are $\\overline{KH}$ and $\\overline{KG}$; the first is already given by $HK = MP$, so the fact still needed is $GK = LP$ ✓, with $G$ matched to $L$ as the correspondence $G \\leftrightarrow L$, $H \\leftrightarrow M$, $K \\leftrightarrow P$ demands. Check a second, independent way by building the triangle outward from the angle. Draw $\\angle K$ at its known size, step off $KH$ along one arm, and the figure is finished the instant a length is fixed along the other arm — that arm ends at $G$, so the length that finishes it is $GK$ ✓. Knowing $GH$ instead gives a length stretched across the opening rather than along an arm, and the arms can still shift under it ✗. (The choice $GH = LM$ is CHOOSING A NON-INCLUDED ANGLE, leaving SSA, since $\\overline{GH}$ faces the marked angle ✗; $\\angle H = \\angle M$ is ANSWERING WITH A DIFFERENT CRITERION ✗; $GK = LM$ is MISMATCHING THE CORRESPONDENCE, since $K$ belongs with $P$ and not with $M$ ✗.)',
    },
  ],
  // s5 — the bowtie: why the two triangles match, and in which order.
  [
    {
      q: 'Segments $\\overline{RT}$ and $\\overline{SU}$ bisect each other at $N$. Which statement correctly explains why $\\triangle RNS \\cong \\triangle TNU$?',
      fig: {
        view: [-4.4, -3.8, 4.4, 3.8],
        elems: [
          { t: 'seg', a: [-3.4, 1.1], b: [3.4, -1.1] },
          { t: 'seg', a: [-1.2, -2.8], b: [1.2, 2.8] },
          { t: 'seg', a: [-3.4, 1.1], b: [-1.2, -2.8] },
          { t: 'seg', a: [3.4, -1.1], b: [1.2, 2.8] },
          { t: 'point', p: [-3.4, 1.1], label: 'R', dx: -12, dy: -6 },
          { t: 'point', p: [-1.2, -2.8], label: 'S', dx: -10, dy: 12 },
          { t: 'point', p: [3.4, -1.1], label: 'T', dx: 12, dy: 8 },
          { t: 'point', p: [1.2, 2.8], label: 'U', dx: 10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'N', dx: 12, dy: 12 },
          { t: 'tick', a: [-3.4, 1.1], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [3.4, -1.1], n: 1 },
          { t: 'tick', a: [-1.2, -2.8], b: [0, 0], n: 2 },
          { t: 'tick', a: [0, 0], b: [1.2, 2.8], n: 2 },
        ],
      },
      choices: [
        'SAS, because $\\angle RNS$ and $\\angle TNU$ are vertical angles',
        'SSS, because every side of one triangle is marked equal to a side of the other',
        'SSA, using the two half-segments and the angle at $R$',
        'Nothing can be proved unless the length $RS$ is given',
      ],
      answer: 0,
      solution:
        'Bisecting hands over two pairs of equal sides at once: $RN = TN$ and $SN = UN$. The angles $\\angle RNS$ and $\\angle TNU$ face each other across the crossing, so they are vertical angles and equal — and each sits at the vertex where its own triangle’s two marked sides meet. Two sides with the included angle is SAS ✓. Check a second, independent way, with no criterion quoted anywhere. Spin the whole picture a half turn about $N$. Since $N$ is the midpoint of $\\overline{RT}$, the turn sends $R$ to $T$; since $N$ is the midpoint of $\\overline{SU}$, it sends $S$ to $U$; and $N$ itself stays put. So the turn carries $\\triangle RNS$ exactly onto $\\triangle TNU$, and turning changes neither size nor shape ✓. (Choosing SSS is COUNTING MARKS THAT ARE NOT THERE — only two pairs of sides are known, and $RS$ against $TU$ is the very thing being concluded ✗; choosing SSA is CHOOSING A NON-INCLUDED ANGLE, at a vertex where nothing is known ✗; the last choice is CALLING THE MARKS INSUFFICIENT ✗.)',
    },
    {
      q: 'Two segments bisect each other at $K$, making a bowtie out of the two triangles on either side of $K$. The bisecting supplies two pairs of equal sides. Where does the matching pair of angles come from, with nothing measured?',
      choices: [
        'From the two triangles looking like the same shape',
        'From the vertical angles at $K$',
        'From the two segments having equal lengths',
        'From a right angle at $K$',
      ],
      answer: 1,
      solution:
        'The two triangles touch only at $K$, and the angles they hold there lie on opposite sides of the crossing — a pair of vertical angles, equal for free ✓. That free pair is what makes this picture such a dependable SAS machine. Check a second, independent way by chasing linear pairs instead of naming the vertical rule. Call the angle at $K$ inside the first triangle $a$. Its neighbor along one of the straight segments measures $180^\\circ - a$, and the neighbor of that neighbor, along the other straight segment, measures $180^\\circ - (180^\\circ - a) = a$ — and that last angle is the one inside the second triangle ✓. Two subtractions carry the value straight back to where it started. (The first choice is LEANING ON THE PICTURE, which is the habit a proof exists to replace; the third is COUNTING MARKS THAT ARE NOT THERE, since bisecting says nothing about how the two segments compare with each other; the last is ASSUMING A RIGHT ANGLE that nobody promised.)',
    },
    {
      q: 'Segments $\\overline{EG}$ and $\\overline{FH}$ bisect each other at $P$. Which statement is true?',
      fig: {
        view: [-4, -3.6, 4, 3.6],
        elems: [
          { t: 'seg', a: [-3, -1.9], b: [3, 1.9] },
          { t: 'seg', a: [-1.4, 2.6], b: [1.4, -2.6] },
          { t: 'seg', a: [-3, -1.9], b: [-1.4, 2.6] },
          { t: 'seg', a: [3, 1.9], b: [1.4, -2.6] },
          { t: 'point', p: [-3, -1.9], label: 'E', dx: -12, dy: 8 },
          { t: 'point', p: [-1.4, 2.6], label: 'F', dx: -10, dy: -8 },
          { t: 'point', p: [3, 1.9], label: 'G', dx: 12, dy: -6 },
          { t: 'point', p: [1.4, -2.6], label: 'H', dx: 10, dy: 12 },
          { t: 'point', p: [0, 0], label: 'P', dx: 12, dy: 12 },
          { t: 'tick', a: [-3, -1.9], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [3, 1.9], n: 1 },
          { t: 'tick', a: [-1.4, 2.6], b: [0, 0], n: 2 },
          { t: 'tick', a: [0, 0], b: [1.4, -2.6], n: 2 },
        ],
      },
      choices: [
        '$\\triangle EPF \\cong \\triangle GPH$ by SSS',
        '$\\triangle EPF \\cong \\triangle HPG$ by SAS',
        '$\\triangle EPF \\cong \\triangle GPH$ by SAS',
        'No congruence can be proved from bisecting alone',
      ],
      answer: 2,
      solution:
        'Two things must be right here: the criterion and the order of the letters. Bisecting gives $EP = GP$ and $FP = HP$, the vertical angles $\\angle EPF$ and $\\angle GPH$ are equal, and each of those angles sits between its triangle’s two known sides, so SAS applies with $E$ paired to $G$ and $F$ paired to $H$: $\\triangle EPF \\cong \\triangle GPH$ ✓. Check a second, independent way with the half turn about $P$. That turn sends $E$ to $G$ and $F$ to $H$, because $P$ is the midpoint of both segments, so it lays $\\triangle EPF$ on top of $\\triangle GPH$ in that order ✓ — the letters are forced by the motion, not chosen by hand. Now read the near miss: $\\triangle EPF \\cong \\triangle HPG$ pairs $E$ with $H$, which would need $EP = HP$, and nothing here says the two segments are equal to each other ✗. (The SSS choice is COUNTING MARKS THAT ARE NOT THERE, since only two pairs of sides are known; the $\\triangle HPG$ choice is MISMATCHING THE CORRESPONDENCE; the last choice is CALLING THE MARKS INSUFFICIENT.)',
    },
  ],
  // s6 — the bowtie: a length carried across the crossing.
  [
    {
      q: 'Segments $\\overline{GJ}$ and $\\overline{HK}$ bisect each other at $N$, with $GN = 7$, $HN = 9$, and $GH = 11$. How long is $\\overline{JK}$?',
      fig: {
        view: [-4.8, -3.9, 4.8, 3.9],
        elems: [
          { t: 'seg', a: [-0.2562, 2.9288], b: [0.2562, -2.9288] },
          { t: 'seg', a: [3.7325, 0.5976], b: [-3.7325, -0.5976] },
          { t: 'seg', a: [-0.2562, 2.9288], b: [3.7325, 0.5976] },
          { t: 'seg', a: [0.2562, -2.9288], b: [-3.7325, -0.5976] },
          { t: 'point', p: [-0.2562, 2.9288], label: 'G', dx: -6, dy: -10 },
          { t: 'point', p: [3.7325, 0.5976], label: 'H', dx: 12, dy: -6 },
          { t: 'point', p: [0.2562, -2.9288], label: 'J', dx: 6, dy: 14 },
          { t: 'point', p: [-3.7325, -0.5976], label: 'K', dx: -12, dy: 6 },
          { t: 'point', p: [0, 0], label: 'N', dx: 12, dy: 14 },
          { t: 'label', p: [-0.1281, 1.4644], text: '7', dx: -12, dy: 0 },
          { t: 'label', p: [1.8663, 0.2988], text: '9', dx: 0, dy: -12 },
          { t: 'label', p: [1.7382, 1.7632], text: '11', dx: 12, dy: -4 },
          { t: 'tick', a: [-0.2562, 2.9288], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [0.2562, -2.9288], n: 1 },
          { t: 'tick', a: [3.7325, 0.5976], b: [0, 0], n: 2 },
          { t: 'tick', a: [0, 0], b: [-3.7325, -0.5976], n: 2 },
        ],
      },
      choices: ['$9$', '$11$', '$7$', '$16$'],
      answer: 1,
      solution:
        'Bisecting gives $GN = JN$ and $HN = KN$, and $\\angle GNH = \\angle JNK$ because those two are vertical angles, so $\\triangle GNH \\cong \\triangle JNK$ by SAS. Corresponding sides of congruent triangles are equal, and $\\overline{JK}$ corresponds to $\\overline{GH}$ — first and second letters of each triangle name — so $JK = GH = 11$ ✓. Check a second, independent way with the half turn about $N$, which needs no letter-matching whatsoever. Turning the whole figure $180^\\circ$ about $N$ sends $G$ to $J$ and $H$ to $K$, since $N$ is the midpoint of both segments. A half turn is a rigid motion, so the image of $\\overline{GH}$ has the same length as $\\overline{GH}$, and that image is $\\overline{JK}$: $JK = 11$ ✓. The numbers $7$ and $9$ are the half-segments, and they answer a different question. (The choice $7$ or $9$ is COPYING A HALF-SEGMENT ✗; $16$ is ADDING THE TWO HALVES, which only bounds the answer from above, since travelling $G$ to $N$ to $H$ is the longest that trip could ever be ✗.)',
    },
    {
      q: 'Segments $\\overline{TV}$ and $\\overline{UW}$ bisect each other at $Z$. Given $ZT = 8$, $ZU = 9$, and $VW = 14$, how long is $\\overline{TU}$?',
      choices: ['$14$', '$17$', '$8$', '$9$'],
      answer: 0,
      solution:
        'Here the bowtie runs backward: the far side is the one given, and the near side is the unknown. Bisecting gives $ZT = ZV$ and $ZU = ZW$, the vertical angles $\\angle TZU$ and $\\angle VZW$ are equal, and each sits between the two half-segments of its own triangle, so $\\triangle TZU \\cong \\triangle VZW$ by SAS and $TU = VW = 14$ ✓. Check a second, independent way with the half turn about $Z$. Because $Z$ is the midpoint of both segments, turning the picture $180^\\circ$ about $Z$ swaps $T$ with $V$ and swaps $U$ with $W$, so $\\overline{VW}$ lands exactly on $\\overline{TU}$; turning cannot stretch a segment, so the two lengths agree ✓. A rough sketch also shows the answer is sensible: a triangle with sides $8$, $9$, and $14$ closes up properly, since $8 + 9$ comes to more than $14$. (The choice $17$ is ADDING THE TWO HALVES ✗; $8$ or $9$ is COPYING A HALF-SEGMENT, answering with a piece of the crossing instead of the side facing it ✗.)',
    },
    {
      q: 'Segments $\\overline{FH}$ and $\\overline{GJ}$ bisect each other at $V$. The figure gives $FV = 4$, $GV = 5$, and $FG = 6$. What is $HJ$?',
      fig: {
        view: [-4.1, -3.4, 4.1, 3.4],
        elems: [
          { t: 'seg', a: [-0.122, 2.477], b: [0.122, -2.477] },
          { t: 'seg', a: [3.0529, 0.5383], b: [-3.0529, -0.5383] },
          { t: 'seg', a: [-0.122, 2.477], b: [3.0529, 0.5383] },
          { t: 'seg', a: [0.122, -2.477], b: [-3.0529, -0.5383] },
          { t: 'point', p: [-0.122, 2.477], label: 'F', dx: -6, dy: -10 },
          { t: 'point', p: [3.0529, 0.5383], label: 'G', dx: 12, dy: -6 },
          { t: 'point', p: [0.122, -2.477], label: 'H', dx: 6, dy: 14 },
          { t: 'point', p: [-3.0529, -0.5383], label: 'J', dx: -12, dy: 6 },
          { t: 'point', p: [0, 0], label: 'V', dx: 12, dy: 14 },
          { t: 'label', p: [-0.061, 1.2385], text: '4', dx: -12, dy: 0 },
          { t: 'label', p: [1.5265, 0.2692], text: '5', dx: 0, dy: -12 },
          { t: 'label', p: [1.4655, 1.5077], text: '6', dx: 12, dy: -4 },
          { t: 'tick', a: [-0.122, 2.477], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [0.122, -2.477], n: 1 },
          { t: 'tick', a: [3.0529, 0.5383], b: [0, 0], n: 2 },
          { t: 'tick', a: [0, 0], b: [-3.0529, -0.5383], n: 2 },
        ],
      },
      choices: ['$4$', '$5$', '$9$', '$6$'],
      answer: 3,
      solution:
        'Settle the correspondence at the crossing before touching any number. Bisecting gives $FV = HV$ and $GV = JV$, and $\\angle FVG = \\angle HVJ$ as vertical angles, so $\\triangle FVG \\cong \\triangle HVJ$ by SAS, pairing $F$ with $H$ and $G$ with $J$. Then $\\overline{HJ}$ corresponds to $\\overline{FG}$, giving $HJ = FG = 6$ ✓. Check a second, independent way with the half turn about $V$, which fixes the pairing without chasing letters: the turn sends $F$ to $H$ and $G$ to $J$, sliding $\\overline{FG}$ onto $\\overline{HJ}$, and lengths survive the trip ✓. This figure is drawn to scale, so a ruler settles it a third time — $\\overline{HJ}$ is drawn exactly as long as $\\overline{FG}$, and both are drawn longer than the side labelled $5$ ✓. (The choice $4$ or $5$ is COPYING A HALF-SEGMENT ✗; $9$ is ADDING THE TWO HALVES ✗.)',
    },
  ],
  // s7 — why two sides and a non-included angle prove nothing.
  [
    {
      q: 'The figure marks $JK = RS$, $JL = RT$, and the two angles shown as equal. Why can we NOT conclude congruence by SAS?',
      fig: {
        view: [-1, -1.2, 13.3, 3.7],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.8, 0], [2.1534, 2.23]], fill: false },
          { t: 'poly', pts: [[7.6, 1], [12.2574, -0.1612], [10.2289, 2.6428]], fill: false },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [4.8, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [2.1534, 2.23], label: 'L', dx: 0, dy: -10 },
          { t: 'point', p: [7.6, 1], label: 'R', dx: -10, dy: 8 },
          { t: 'point', p: [12.2574, -0.1612], label: 'S', dx: 10, dy: 10 },
          { t: 'point', p: [10.2289, 2.6428], label: 'T', dx: 4, dy: -8 },
          { t: 'tick', a: [0, 0], b: [4.8, 0], n: 1 },
          { t: 'tick', a: [7.6, 1], b: [12.2574, -0.1612], n: 1 },
          { t: 'tick', a: [0, 0], b: [2.1534, 2.23], n: 2 },
          { t: 'tick', a: [7.6, 1], b: [10.2289, 2.6428], n: 2 },
          { t: 'angle', at: [4.8, 0], from: [0, 0], to: [2.1534, 2.23], r: 0.8 },
          { t: 'angle', at: [12.2574, -0.1612], from: [7.6, 1], to: [10.2289, 2.6428], r: 0.8 },
        ],
      },
      choices: [
        'The equal angles are at $K$ and $S$, not between the two marked sides',
        'The two triangles are drawn in different positions on the page',
        'SAS works only when the equal angle is a right angle',
        'SAS needs three pairs of equal angles',
      ],
      answer: 0,
      solution:
        'Find where the marked sides meet. In the left triangle $\\overline{JK}$ and $\\overline{JL}$ both have an endpoint at $J$, so the included angle is $\\angle J$ — but the angle actually marked is at $K$, out at the far end of one of them. The same mismatch appears on the right, where the sides meet at $R$ and the mark sits at $S$. That is the SSA arrangement, not SAS ✓. Check a second, independent way by trying to build the triangle from the marked parts. Draw the marked angle at $K$, run one arm out to the length $JK$ to reach $J$, then open a compass to the length $JL$ and swing it from $J$, hunting for $L$ on the other arm. That circle can cut the other arm at two different distances from $K$, so two different triangles can carry these very same three markings — which is exactly why the arrangement proves nothing ✗ for SAS. (The position choice is LEANING ON THE PICTURE, since sliding or turning a triangle changes none of its parts; the right-angle choice is ASSUMING A RIGHT ANGLE that SAS never asks for; the three-angles choice is COUNTING MARKS THAT ARE NOT THERE and misstates the criterion.)',
    },
    {
      q: 'Two triangles have two pairs of equal sides and one pair of equal angles, and those equal angles are NOT between the equal sides. What is the most that can be said?',
      choices: [
        'They are congruent by SAS',
        'They are congruent by SSS',
        'This is the SSA arrangement, which does not guarantee congruence',
        'They definitely are not congruent',
      ],
      answer: 2,
      solution:
        'SAS insists that the angle sit at the vertex where the two marked sides meet. Here it does not, so the arrangement is SSA and no conclusion follows: the triangles might happen to be congruent, and they might not ✓. Check a second, independent way by testing the two extreme claims against examples. Could such a pair be congruent? Take two identical triangles and mark two sides and a far-off angle in each — every marking matches and the triangles certainly are congruent, so "definitely not congruent" is false ✗. Could such a pair fail to be congruent? Fix an angle, run one arm out to a set length, and swing the second marked side from that arm’s far end; the swing can land in two different places, giving two triangles with identical markings and different shapes, so "congruent by SAS" is false as well ✗. Both extremes fall, and the careful statement is the survivor ✓. (Choosing SAS is READING SSA AS SAS; choosing SSS is COUNTING MARKS THAT ARE NOT THERE, since only two pairs of sides are known; choosing the last is CLAIMING THE TRIANGLES CANNOT BE CONGRUENT, which reads "not proved" as "disproved".)',
    },
    {
      q: 'Priya marks $HJ = NP$ and $JK = PQ$ in her two triangles, then marks $\\angle H = \\angle N$ and writes "congruent by SAS." What is wrong with her work?',
      choices: [
        'Nothing is wrong; her reasoning is correct',
        'She needed all three pairs of sides to be equal',
        'She should have marked a right angle instead',
        'The angle she marked is at $H$, but the two marked sides meet at $J$',
      ],
      answer: 3,
      solution:
        'List the endpoints of Priya’s marked sides: $\\overline{HJ}$ has endpoints $H$ and $J$, and $\\overline{JK}$ has endpoints $J$ and $K$. They share $J$, so the included angle in her triangle is $\\angle J$, while the angle she marked is $\\angle H$ ✓ — the mark is at the far end of one marked side, the SSA arrangement. Check a second, independent way by looking at which sides the marked angle is built from. $\\angle H$ has arms $\\overline{HJ}$ and $\\overline{HK}$; the second of those carries no mark at all, so her angle is anchored partly to an unmarked side, and an included angle never is ✓. Her side pairs and her angle pair are each fine on their own — the placement is the whole problem, and moving the mark from $H$ to $J$ would rescue the proof. (The first choice is READING SSA AS SAS; the second is DEMANDING A THIRD SIDE, which describes SSS; the third is ASSUMING A RIGHT ANGLE.)',
    },
  ],
  // s8 — two triangles that share a side.
  [
    {
      q: 'In the figure, $\\triangle PQS$ and $\\triangle RQS$ share the side $\\overline{QS}$. The marks show $QP = QR$ and $\\angle PQS = \\angle RQS$. Which criterion proves $\\triangle PQS \\cong \\triangle RQS$?',
      fig: {
        view: [-1, -2.9, 6.4, 2.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [5.4, 0], [2.7358, 1.8453]], fill: false },
          { t: 'poly', pts: [[0, 0], [5.4, 0], [2.7358, -1.8453]], fill: false },
          { t: 'point', p: [0, 0], label: 'Q', dx: -12, dy: 0 },
          { t: 'point', p: [5.4, 0], label: 'S', dx: 12, dy: 0 },
          { t: 'point', p: [2.7358, 1.8453], label: 'P', dx: 0, dy: -10 },
          { t: 'point', p: [2.7358, -1.8453], label: 'R', dx: 0, dy: 14 },
          { t: 'tick', a: [0, 0], b: [2.7358, 1.8453], n: 1 },
          { t: 'tick', a: [0, 0], b: [2.7358, -1.8453], n: 1 },
          { t: 'angle', at: [0, 0], from: [5.4, 0], to: [2.7358, 1.8453], r: 0.9 },
          { t: 'angle', at: [0, 0], from: [5.4, 0], to: [2.7358, -1.8453], r: 0.9 },
        ],
      },
      choices: ['SSS', 'SAS', 'SSA', 'ASA'],
      answer: 1,
      solution:
        'A shared side is a free pair of equal sides: $QS = QS$. With the marks that makes two pairs, $QP = QR$ and $QS = QS$, and both pairs run out of the vertex $Q$. The marked angles $\\angle PQS$ and $\\angle RQS$ sit at $Q$, exactly between those sides, so this is SAS ✓. Check a second, independent way by counting what a criterion would need. Three pairs of sides are not available — $\\overline{PS}$ and $\\overline{RS}$ carry no marks, and they are what the congruence will hand us afterward — so SSS is out ✗. Only one pair of angles is marked, so a two-angle criterion is out ✗. Is the angle included? Its arms are $\\overline{QP}$ (marked) and $\\overline{QS}$ (the shared side), so both arms are known sides, which is the test for included and rules out SSA ✗. One name is left ✓. (Choosing SSS is COUNTING MARKS THAT ARE NOT THERE; choosing SSA is CHOOSING A NON-INCLUDED ANGLE; choosing ASA is ANSWERING WITH A DIFFERENT CRITERION.)',
    },
    {
      q: 'Two triangles share the side $\\overline{XZ}$, and the marks show $XW = XY$ together with $ZW = ZY$. Which criterion proves $\\triangle XWZ \\cong \\triangle XYZ$?',
      fig: {
        view: [-3.7, -3.4, 3.7, 4.9],
        elems: [
          { t: 'seg', a: [0, 3.9], b: [0, -2.4] },
          { t: 'poly', pts: [[0, 3.9], [-2.7, 0.5], [0, -2.4]], fill: false },
          { t: 'poly', pts: [[0, 3.9], [2.7, 0.5], [0, -2.4]], fill: false },
          { t: 'point', p: [0, 3.9], label: 'X', dx: 0, dy: -10 },
          { t: 'point', p: [-2.7, 0.5], label: 'W', dx: -12, dy: 0 },
          { t: 'point', p: [2.7, 0.5], label: 'Y', dx: 12, dy: 0 },
          { t: 'point', p: [0, -2.4], label: 'Z', dx: 0, dy: 16 },
          { t: 'tick', a: [0, 3.9], b: [-2.7, 0.5], n: 1 },
          { t: 'tick', a: [0, 3.9], b: [2.7, 0.5], n: 1 },
          { t: 'tick', a: [0, -2.4], b: [-2.7, 0.5], n: 2 },
          { t: 'tick', a: [0, -2.4], b: [2.7, 0.5], n: 2 },
        ],
      },
      choices: ['SAS', 'SSA', 'SSS', 'Not enough information'],
      answer: 2,
      solution:
        'Count the sides. The single ticks give $XW = XY$, the double ticks give $ZW = ZY$, and the two triangles share $\\overline{XZ}$, which equals itself. That is three pairs of equal sides, so the criterion is SSS ✓. Check a second, independent way by asking what SAS would still need. SAS wants a pair of equal angles between known sides, and this figure marks no angles at all, so SAS is unreachable here even though the two side pairs are present ✗ — the shared side is doing the work an angle would otherwise do. Is the information enough? Three fixed side lengths cannot be flexed into a second shape, so the triangles must match ✗ for the last choice ✓ for SSS. (Choosing SAS is COUNTING MARKS THAT ARE NOT THERE; choosing SSA is CHOOSING A NON-INCLUDED ANGLE that the figure never marks; choosing "not enough information" is CALLING THE MARKS INSUFFICIENT.)',
    },
    {
      q: 'In the figure, $\\overline{KL}$ meets $\\overline{JM}$ at $L$ at right angles, and $JL = LM$. Which criterion proves $\\triangle JLK \\cong \\triangle MLK$?',
      fig: {
        view: [-0.6, -0.3, 7.2, 5.8],
        elems: [
          { t: 'seg', a: [0.4162, 2.4269], b: [6.1838, 0.7731] },
          { t: 'poly', pts: [[0.4162, 2.4269], [3.3, 1.6], [4.2096, 4.7722]], fill: false },
          { t: 'poly', pts: [[6.1838, 0.7731], [3.3, 1.6], [4.2096, 4.7722]], fill: false },
          { t: 'point', p: [0.4162, 2.4269], label: 'J', dx: -12, dy: -4 },
          { t: 'point', p: [6.1838, 0.7731], label: 'M', dx: 12, dy: 4 },
          { t: 'point', p: [3.3, 1.6], label: 'L', dx: -2, dy: 16 },
          { t: 'point', p: [4.2096, 4.7722], label: 'K', dx: 4, dy: -10 },
          { t: 'tick', a: [0.4162, 2.4269], b: [3.3, 1.6], n: 1 },
          { t: 'tick', a: [3.3, 1.6], b: [6.1838, 0.7731], n: 1 },
          { t: 'right', at: [3.3, 1.6], from: [0.4162, 2.4269], to: [4.2096, 4.7722] },
          { t: 'right', at: [3.3, 1.6], from: [6.1838, 0.7731], to: [4.2096, 4.7722] },
        ],
      },
      choices: ['SSS', 'ASA', 'SSA', 'SAS'],
      answer: 3,
      solution:
        'Collect the three matching parts. The ticks give $JL = ML$; the side $\\overline{KL}$ belongs to both triangles, so $KL = KL$; and the two right angles at $L$ are equal, both being $90^\\circ$. Each right angle sits at the vertex where its triangle’s two known sides meet, so the angle is included and the criterion is SAS ✓. Check a second, independent way by folding. Fold the page along the line $KL$. Since the angles at $L$ are square on both sides, the ray $\\overrightarrow{LJ}$ folds onto the ray $\\overrightarrow{LM}$, and since $JL = LM$, the point $J$ lands exactly on $M$; $K$ and $L$ are on the crease and do not move. The whole of $\\triangle JLK$ therefore lands on $\\triangle MLK$ ✓, which also tells us $JK = MK$ — a fact the figure never marked. (Choosing SSS is COUNTING MARKS THAT ARE NOT THERE, since $\\overline{JK}$ and $\\overline{MK}$ are conclusions rather than givens; choosing ASA is ANSWERING WITH A DIFFERENT CRITERION; choosing SSA is CHOOSING A NON-INCLUDED ANGLE, when the right angles sit squarely between the known sides.)',
    },
  ],
  // s9 — the two halves given as expressions; report the LENGTH, never x.
  [
    {
      q: 'Segments $\\overline{DF}$ and $\\overline{EG}$ bisect each other at $N$, with $EN = 2x + 1$ and $GN = 5x - 11$. How long is $\\overline{EN}$?',
      fig: {
        view: [-4.2, -3.7, 4.2, 3.7],
        elems: [
          { t: 'seg', a: [-3.2, 1.4], b: [3.2, -1.4] },
          { t: 'seg', a: [-1.6, -2.7], b: [1.6, 2.7] },
          { t: 'point', p: [-3.2, 1.4], label: 'D', dx: -12, dy: -6 },
          { t: 'point', p: [3.2, -1.4], label: 'F', dx: 12, dy: 8 },
          { t: 'point', p: [-1.6, -2.7], label: 'E', dx: -10, dy: 12 },
          { t: 'point', p: [1.6, 2.7], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'N', dx: 13, dy: 2 },
          { t: 'label', p: [-0.8, -1.35], text: '2x+1', dx: -22, dy: 2 },
          { t: 'label', p: [0.8, 1.35], text: '5x-11', dx: 22, dy: 0 },
          { t: 'tick', a: [-3.2, 1.4], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [3.2, -1.4], n: 1 },
          { t: 'tick', a: [-1.6, -2.7], b: [0, 0], n: 2 },
          { t: 'tick', a: [0, 0], b: [1.6, 2.7], n: 2 },
        ],
      },
      choices: ['$4$', '$9$', '$12$', '$18$'],
      answer: 1,
      solution:
        'Bisecting means $N$ is the midpoint of $\\overline{EG}$, so the two halves are equal: $2x + 1 = 5x - 11$. Adding $11$ and subtracting $2x$ from both sides gives $12 = 3x$, so $x = 4$ and $EN = 2(4) + 1 = 9$ ✓. Check a second, independent way by testing the candidate through both expressions instead of solving. If $EN$ is $9$, then $2x + 1 = 9$ forces $x = 4$, and the other half reads $5(4) - 11 = 9$ ✓ — the two descriptions land on the same number, which is exactly what being a midpoint demands. Test $12$ the same way: $2x + 1 = 12$ does not even give a whole-number $x$ ✗. The whole segment $\\overline{EG}$ measures $18$, but the question asked for one half. (The choice $4$ is STOPPING AT x, which is a step and not a length ✗; $12$ is STOPPING AT THE INTERMEDIATE STEP, handing back the $3x$ total ✗; $18$ is DOUBLING TO THE WHOLE SEGMENT ✗.)',
    },
    {
      q: 'The segments $\\overline{LN}$ and $\\overline{PS}$ bisect each other at $T$. If $PT = 4x - 5$ and $ST = 2x + 5$, how long is each of the two halves of $\\overline{PS}$?',
      choices: ['$30$', '$10$', '$5$', '$15$'],
      answer: 3,
      solution:
        'Since $T$ is the midpoint of $\\overline{PS}$, the halves match: $4x - 5 = 2x + 5$. Subtracting $2x$ and adding $5$ gives $2x = 10$, so $x = 5$ and each half measures $4(5) - 5 = 15$ ✓. Check a second, independent way by comparing the two expressions directly rather than solving for $x$. The first expression exceeds the second by $(4x - 5) - (2x + 5) = 2x - 10$, and for the halves to be equal that gap has to vanish, so $2x = 10$; feeding $x = 5$ into the second expression gives $2(5) + 5 = 15$ ✓, matching the first. Both halves come to $15$, so the whole of $\\overline{PS}$ is $30$ — a number the question did not ask for. (The choice $5$ is STOPPING AT x ✗; $10$ is STOPPING AT THE INTERMEDIATE STEP, reporting $2x$ ✗; $30$ is DOUBLING TO THE WHOLE SEGMENT ✗.)',
    },
    {
      q: 'Segments $\\overline{KM}$ and $\\overline{LP}$ bisect each other at $Q$, with $LQ = 5x + 2$ and $PQ = 3x + 8$. Find $LQ$.',
      fig: {
        view: [-4, -3.6, 4, 3.6],
        elems: [
          { t: 'seg', a: [-3, -1.7], b: [3, 1.7] },
          { t: 'seg', a: [-1.5, 2.6], b: [1.5, -2.6] },
          { t: 'point', p: [-3, -1.7], label: 'K', dx: -12, dy: 8 },
          { t: 'point', p: [3, 1.7], label: 'M', dx: 12, dy: -4 },
          { t: 'point', p: [-1.5, 2.6], label: 'L', dx: -10, dy: -8 },
          { t: 'point', p: [1.5, -2.6], label: 'P', dx: 10, dy: 12 },
          { t: 'point', p: [0, 0], label: 'Q', dx: 13, dy: 14 },
          { t: 'label', p: [-0.75, 1.3], text: '5x+2', dx: -22, dy: 0 },
          { t: 'label', p: [0.75, -1.3], text: '3x+8', dx: 22, dy: 0 },
          { t: 'tick', a: [-3, -1.7], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [3, 1.7], n: 1 },
          { t: 'tick', a: [-1.5, 2.6], b: [0, 0], n: 2 },
          { t: 'tick', a: [0, 0], b: [1.5, -2.6], n: 2 },
        ],
      },
      choices: ['$3$', '$6$', '$17$', '$34$'],
      answer: 2,
      solution:
        'The point $Q$ is the midpoint of $\\overline{LP}$, so the halves are equal: $5x + 2 = 3x + 8$. Subtracting $3x$ and then $2$ leaves $2x = 6$, so $x = 3$ and $LQ = 5(3) + 2 = 17$ ✓. Check a second, independent way by pushing the candidate back through both expressions. If $LQ$ is $17$, then $5x + 2 = 17$ forces $x = 3$, and the partner expression gives $3(3) + 8 = 17$ ✓ — both halves agree, as a midpoint requires. Try $34$ instead: $5x + 2 = 34$ has no whole-number solution, and $34$ is the length of the entire segment $\\overline{LP}$ rather than a half ✗. (The choice $3$ is STOPPING AT x ✗; $6$ is STOPPING AT THE INTERMEDIATE STEP, reporting the $2x$ line of the working ✗; $34$ is DOUBLING TO THE WHOLE SEGMENT ✗.)',
    },
  ],
  // s10 — the bowtie: an angle carried from one end to the other.
  [
    {
      q: 'Segments $\\overline{JL}$ and $\\overline{KN}$ bisect each other at $P$, and $\\angle PJK = 47^\\circ$. What is $\\angle PLN$?',
      fig: {
        view: [-4.2, -2.6, 4.2, 2.6],
        elems: [
          { t: 'seg', a: [-3.2, 1.6], b: [3.2, -1.6] },
          { t: 'seg', a: [-2.4644, -0.8938], b: [2.4644, 0.8938] },
          { t: 'seg', a: [-3.2, 1.6], b: [-2.4644, -0.8938] },
          { t: 'seg', a: [3.2, -1.6], b: [2.4644, 0.8938] },
          { t: 'point', p: [-3.2, 1.6], label: 'J', dx: -12, dy: -4 },
          { t: 'point', p: [-2.4644, -0.8938], label: 'K', dx: -12, dy: 10 },
          { t: 'point', p: [3.2, -1.6], label: 'L', dx: 12, dy: 8 },
          { t: 'point', p: [2.4644, 0.8938], label: 'N', dx: 12, dy: -4 },
          { t: 'point', p: [0, 0], label: 'P', dx: 4, dy: 16 },
          { t: 'angle', at: [-3.2, 1.6], from: [-2.4644, -0.8938], to: [0, 0], r: 0.8, label: '47' },
          { t: 'tick', a: [-3.2, 1.6], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [3.2, -1.6], n: 1 },
          { t: 'tick', a: [-2.4644, -0.8938], b: [0, 0], n: 2 },
          { t: 'tick', a: [0, 0], b: [2.4644, 0.8938], n: 2 },
        ],
      },
      choices: ['$47^\\circ$', '$133^\\circ$', '$43^\\circ$', '$94^\\circ$'],
      answer: 0,
      solution:
        'Bisecting gives $JP = LP$ and $KP = NP$, and the vertical angles at $P$ are equal, so $\\triangle PJK \\cong \\triangle PLN$ by SAS, matching $J$ with $L$ and $K$ with $N$. Corresponding angles of congruent triangles are equal, so $\\angle PLN = \\angle PJK = 47^\\circ$ ✓. Check a second, independent way with the half turn about $P$. That turn sends $J$ to $L$ and $K$ to $N$, so it sends the whole of $\\angle PJK$ onto $\\angle PLN$; turning a figure never opens or closes an angle, so the two measure the same ✓. A bonus reading of the result: two equal angles on opposite sides of the transversal $\\overline{JL}$ are alternate interior angles, which means $\\overline{JK}$ and $\\overline{LN}$ are parallel — and the drawing agrees. (The choice $133^\\circ$ is TREATING THE ANGLES AS SUPPLEMENTARY, from $180 - 47$ ✗; $43^\\circ$ is TREATING THE ANGLES AS COMPLEMENTARY, from $90 - 47$ ✗; $94^\\circ$ is DOUBLING THE ANGLE ✗.)',
    },
    {
      q: 'Segments $\\overline{RU}$ and $\\overline{SV}$ bisect each other at $W$, and $\\angle WUV$ measures $29^\\circ$. How large is $\\angle WRS$?',
      choices: ['$58^\\circ$', '$29^\\circ$', '$151^\\circ$', '$61^\\circ$'],
      answer: 1,
      solution:
        'This time the known angle sits at the far end and the question asks about the near one, but the argument travels in either direction. Bisecting gives $RW = UW$ and $SW = VW$, the vertical angles $\\angle RWS$ and $\\angle UWV$ are equal, and each sits between the two half-segments, so $\\triangle WRS \\cong \\triangle WUV$ by SAS with $R$ matched to $U$ and $S$ matched to $V$. Hence $\\angle WRS = \\angle WUV = 29^\\circ$ ✓. Check a second, independent way through parallel lines. The congruence makes $\\overline{RS}$ and $\\overline{UV}$ parallel, and $\\overline{RU}$ cuts across both of them; $\\angle WRS$ and $\\angle WUV$ sit on opposite sides of that crossing line, one at each parallel, so they are alternate interior angles and equal ✓. (The choice $151^\\circ$ is TREATING THE ANGLES AS SUPPLEMENTARY ✗; $61^\\circ$ is TREATING THE ANGLES AS COMPLEMENTARY ✗; $58^\\circ$ is DOUBLING THE ANGLE ✗.)',
    },
    {
      q: 'Segments $\\overline{GK}$ and $\\overline{HL}$ bisect each other at $N$, and $\\angle NGH = 62^\\circ$. Find $\\angle NKL$.',
      fig: {
        view: [-3.9, -2.5, 3.9, 2.5],
        elems: [
          { t: 'seg', a: [-2.9, -1.5], b: [2.9, 1.5] },
          { t: 'seg', a: [-2.8728, 0.8998], b: [2.8728, -0.8998] },
          { t: 'seg', a: [-2.9, -1.5], b: [-2.8728, 0.8998] },
          { t: 'seg', a: [2.9, 1.5], b: [2.8728, -0.8998] },
          { t: 'point', p: [-2.9, -1.5], label: 'G', dx: -12, dy: 8 },
          { t: 'point', p: [-2.8728, 0.8998], label: 'H', dx: -12, dy: -4 },
          { t: 'point', p: [2.9, 1.5], label: 'K', dx: 12, dy: -4 },
          { t: 'point', p: [2.8728, -0.8998], label: 'L', dx: 12, dy: 8 },
          { t: 'point', p: [0, 0], label: 'N', dx: 2, dy: 16 },
          { t: 'angle', at: [-2.9, -1.5], from: [-2.8728, 0.8998], to: [0, 0], r: 0.75, label: '62' },
          { t: 'tick', a: [-2.9, -1.5], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [2.9, 1.5], n: 1 },
          { t: 'tick', a: [-2.8728, 0.8998], b: [0, 0], n: 2 },
          { t: 'tick', a: [0, 0], b: [2.8728, -0.8998], n: 2 },
        ],
      },
      choices: ['$124^\\circ$', '$28^\\circ$', '$62^\\circ$', '$118^\\circ$'],
      answer: 2,
      solution:
        'Set up the congruence first. Bisecting gives $GN = KN$ and $HN = LN$; the angles $\\angle GNH$ and $\\angle KNL$ are vertical angles, so they are equal, and each lies between the two half-segments of its own triangle. By SAS, $\\triangle NGH \\cong \\triangle NKL$ with $G$ matched to $K$ and $H$ matched to $L$, so $\\angle NKL = \\angle NGH = 62^\\circ$ ✓. Check a second, independent way with the half turn about $N$: it carries $G$ to $K$ and $H$ to $L$, so it carries $\\angle NGH$ onto $\\angle NKL$, and a rigid turn leaves every angle the size it was ✓. Notice what the answer is not — the two angles are equal rather than supplementary, because the half turn matches them up directly instead of leaving them side by side along a line. (The choice $118^\\circ$ is TREATING THE ANGLES AS SUPPLEMENTARY ✗; $28^\\circ$ is TREATING THE ANGLES AS COMPLEMENTARY ✗; $124^\\circ$ is DOUBLING THE ANGLE ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 3,
  sections: {
    '3.3': s33,
  },
}
