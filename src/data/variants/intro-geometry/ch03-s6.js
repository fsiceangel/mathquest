// Introduction to Geometry chapter 3 — variations for the CHALLENGE set.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every answer was worked twice by two genuinely different routes, and the
//    two routes had to agree before the key was written. The pairs used are:
//    the angle sum inside the triangle that carries both givens vs. transferring
//    both angles across the correspondence first and then the Exterior Angle
//    Theorem (slot 1); the angle sum in the triangle cut off by the diagonal vs.
//    the $360^\circ$ total of the four angles of the quadrilateral (slot 2);
//    solving for $x$ and substituting vs. eliminating $x$ between scaled copies
//    of the two expressions so the length falls out with $x$ never found
//    (slots 3, 8); the criterion itself vs. a construction or superimposition
//    argument that rebuilds the triangle from scratch (slots 4, 10); naming the
//    included angle vs. an explicit two-triangle counterexample built from the
//    height $h = \text{adjacent} \times \sin\theta$ (slots 5, 11); the
//    Pythagorean Theorem vs. the difference of squares $b^2 = (c-a)(c+a)$
//    (slot 6); the isosceles inner triangle vs. the exterior angle of the outer
//    one (slot 7); listing what corresponding parts are equal vs. asking what a
//    fact would have to add that is not already free (slot 9); testing the leg
//    reading against the triangle inequality vs. the rule that every side of a
//    triangle is shorter than half its perimeter (slot 12).
//  - Every figure is coordinate-exact. The kites of slot 2 are built by placing
//    the diagonal on the $x$-axis and locating the far vertex from the two given
//    angles by the sine rule, then reflecting it, so the two pairs of equal
//    sides are equal to the last decimal and every drawn angle agrees with its
//    label to better than $0.001^\circ$. The equilateral triangles of slot 8
//    carry the two expressions, not resolved lengths, so no drawn measurement
//    can disagree with the algebra.
//  - Figure labels are plain text: bare numerals, short expressions in $x$, and
//    the letters of the points.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS. The traps running through this challenge set are: COPYING THE ANGLE
//    AT THE WRONG VERTEX, ADDING THE TWO GIVEN ANGLES, SUBTRACTING ONLY ONE
//    ANGLE FROM 180, COPYING A GIVEN ANGLE, ANSWERING WITH x, DROPPING THE
//    CONSTANT TERM, DOUBLING THE SIDE, CALLING A NON-INCLUDED ANGLE INCLUDED,
//    COUNTING A SIDE THAT WAS NEVER GIVEN, CLAIMING THREE MEASUREMENTS ALWAYS
//    SUFFICE, BLAMING THE SIZE OF THE ANGLE, FORGETTING THE COMPUTED LEG,
//    SUBTRACTING LENGTHS INSTEAD OF SQUARES, ADDING BOTH PERIMETERS, ANSWERING
//    WITH THE BASE ANGLE, COPYING THE VERTEX ANGLE, HALVING THE VERTEX ANGLE,
//    ANSWERING WITH ONE SIDE, ADDING ONLY TWO SIDES, CLAIMING PERPENDICULAR
//    DIAGONALS, TREATING VERTICAL ANGLES AS NEW INFORMATION, DEMANDING AN ANGLE
//    THAT IS ALREADY FREE, SWINGING THE SHORT SIDE, DECLARING SSA HOPELESS,
//    CALLING SSA A CASE OF SAS, TREATING THE GIVEN SIDE AS A LEG, FORGETTING TO
//    HALVE, and COPYING THE GIVEN SIDE.
//  - No two choices inside an item name the same value, and across the base
//    problem and its three variations every one of the four answer positions is
//    used exactly once.

const challenge = [
  // slot 1 — a congruence statement plus two angles, read off at the matching
  // vertex of the other triangle. Lane: 95 / 68 / 111.
  [
    {
      q: 'Given that $\\triangle DEF \\cong \\triangle GHJ$, with $\\angle G = 35^\\circ$ and $\\angle J = 50^\\circ$, find $\\angle E$.',
      choices: ['$35^\\circ$', '$50^\\circ$', '$85^\\circ$', '$95^\\circ$'],
      answer: 3,
      solution:
        'Read the correspondence off the statement letter by letter: $D$ matches $G$, $E$ matches $H$, and $F$ matches $J$. So $\\angle E = \\angle H$, and both given angles sit in $\\triangle GHJ$, where the three angles add to $180^\\circ$. That gives $\\angle H = 180^\\circ - 35^\\circ - 50^\\circ = 95^\\circ$, so $\\angle E = 95^\\circ$ ✓. Check a second, independent way by moving the angles across the correspondence first and never touching $\\triangle GHJ$ again. Since $\\angle D = \\angle G = 35^\\circ$ and $\\angle F = \\angle J = 50^\\circ$, extend $\\overline{DE}$ past $E$ and look at the exterior angle there. The Exterior Angle Theorem says it equals the two remote interior angles added together, $35^\\circ + 50^\\circ = 85^\\circ$, and $\\angle E$ is its supplement, $180^\\circ - 85^\\circ = 95^\\circ$ ✓. A last sanity check: $95^\\circ$ is obtuse, and a triangle whose other two angles are $35^\\circ$ and $50^\\circ$ has plenty of room left for one obtuse angle ✓. (The choices $35^\\circ$ and $50^\\circ$ are COPYING THE ANGLE AT THE WRONG VERTEX — $E$ matches $H$, not $G$ or $J$; the choice $85^\\circ$ is ADDING THE TWO GIVEN ANGLES, which produces the exterior angle at $E$ rather than $\\angle E$ itself.)',
    },
    {
      q: 'In two congruent triangles, $\\triangle MNP \\cong \\triangle STU$. If $\\angle M = 47^\\circ$ and $\\angle P = 65^\\circ$, what is $\\angle T$?',
      choices: ['$68^\\circ$', '$47^\\circ$', '$112^\\circ$', '$65^\\circ$'],
      answer: 0,
      solution:
        'The statement pairs $M$ with $S$, $N$ with $T$, and $P$ with $U$, so the angle asked for, $\\angle T$, is the twin of $\\angle N$. Both given angles live in $\\triangle MNP$, so work there: $\\angle N = 180^\\circ - 47^\\circ - 65^\\circ = 68^\\circ$, and therefore $\\angle T = 68^\\circ$ ✓. Check a second, independent way by carrying the givens over to $\\triangle STU$ before doing any arithmetic. Corresponding angles are equal, so $\\angle S = 47^\\circ$ and $\\angle U = 65^\\circ$. Now slide along side $\\overline{SU}$ and out past $T$: the exterior angle at $T$ equals the sum of the two remote interior angles, $47^\\circ + 65^\\circ = 112^\\circ$, and the interior angle is what is left of the straight angle, $180^\\circ - 112^\\circ = 68^\\circ$ ✓. (The choices $47^\\circ$ and $65^\\circ$ are COPYING THE ANGLE AT THE WRONG VERTEX; $T$ is the second letter of $STU$, so it matches the second letter of $MNP$. The choice $112^\\circ$ is ADDING THE TWO GIVEN ANGLES and stopping at the exterior angle, which is larger than the whole triangle can spare for one interior angle here.)',
    },
    {
      q: 'Suppose $\\triangle BCD \\cong \\triangle QRS$. Given $\\angle C = 28^\\circ$ and $\\angle D = 41^\\circ$, find $\\angle Q$.',
      choices: ['$41^\\circ$', '$69^\\circ$', '$111^\\circ$', '$28^\\circ$'],
      answer: 2,
      solution:
        'Line the letters up: $B$ with $Q$, $C$ with $R$, $D$ with $S$. The angle wanted is $\\angle Q$, the twin of $\\angle B$, and $\\angle B$ is exactly the angle of $\\triangle BCD$ that was not handed to you. The three angles of that triangle total $180^\\circ$, so $\\angle B = 180^\\circ - 28^\\circ - 41^\\circ = 111^\\circ$, and $\\angle Q = 111^\\circ$ ✓. Check a second, independent way inside $\\triangle QRS$ instead. Corresponding parts give $\\angle R = 28^\\circ$ and $\\angle S = 41^\\circ$ directly. Extend $\\overline{RQ}$ beyond $Q$; the exterior angle formed there is $28^\\circ + 41^\\circ = 69^\\circ$ by the Exterior Angle Theorem, and $\\angle Q$ fills out the straight angle at $180^\\circ - 69^\\circ = 111^\\circ$ ✓. Both routes agree, and the size is believable: with two small angles of $28^\\circ$ and $41^\\circ$, the third must be badly obtuse ✓. (The choices $28^\\circ$ and $41^\\circ$ are COPYING THE ANGLE AT THE WRONG VERTEX; the choice $69^\\circ$ is ADDING THE TWO GIVEN ANGLES, which names the exterior angle at $Q$, not $\\angle Q$.)',
    },
  ],

  // slot 2 — kite split by a diagonal; two angles on one side give the vertex
  // angle on the other. Lane: 98 / 124 / 87.
  [
    {
      q: 'In quadrilateral $PQRS$, $PQ = PS$ and $RQ = RS$, and the diagonal $\\overline{PR}$ is drawn. If $\\angle QPR = 32^\\circ$ and $\\angle QRP = 50^\\circ$, what is $\\angle PSR$?',
      fig: {
        view: [-1, -3.5, 7, 3.5],
        alt: 'Quadrilateral PQRS with diagonal PR drawn, PQ equal to PS and RQ equal to RS',
        elems: [
          { t: 'poly', pts: [[0, 0], [3.9362, 2.4596], [6, 0], [3.9362, -2.4596]] },
          { t: 'seg', a: [0, 0], b: [6, 0], dash: true },
          { t: 'tick', a: [0, 0], b: [3.9362, 2.4596], n: 1 },
          { t: 'tick', a: [0, 0], b: [3.9362, -2.4596], n: 1 },
          { t: 'tick', a: [6, 0], b: [3.9362, 2.4596], n: 2 },
          { t: 'tick', a: [6, 0], b: [3.9362, -2.4596], n: 2 },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [3.9362, 2.4596], r: 0.9, label: '32' },
          { t: 'angle', at: [6, 0], from: [0, 0], to: [3.9362, 2.4596], r: 0.7, label: '50' },
          { t: 'point', p: [0, 0], label: 'P', dx: -14, dy: 0 },
          { t: 'point', p: [3.9362, 2.4596], label: 'Q', dx: 2, dy: -12 },
          { t: 'point', p: [6, 0], label: 'R', dx: 12, dy: 0 },
          { t: 'point', p: [3.9362, -2.4596], label: 'S', dx: 2, dy: 16 },
        ],
      },
      choices: ['$82^\\circ$', '$98^\\circ$', '$130^\\circ$', '$50^\\circ$'],
      answer: 1,
      solution:
        'The diagonal $\\overline{PR}$ cuts the quadrilateral into $\\triangle PQR$ and $\\triangle PSR$, and those two triangles are congruent by SSS: $PQ = PS$, $RQ = RS$, and $\\overline{PR}$ is shared. Both given angles sit in $\\triangle PQR$, so its third angle is $\\angle PQR = 180^\\circ - 32^\\circ - 50^\\circ = 98^\\circ$. Corresponding parts of congruent triangles are equal, and $Q$ matches $S$ in the congruence $\\triangle PQR \\cong \\triangle PSR$, so $\\angle PSR = 98^\\circ$ ✓. Check a second, independent way without ever using the angle sum of a triangle. The congruence also says the diagonal splits the angle at $P$ into two equal halves and the angle at $R$ into two equal halves, so $\\angle QPS = 2 \\times 32^\\circ = 64^\\circ$ and $\\angle QRS = 2 \\times 50^\\circ = 100^\\circ$. The four angles of any quadrilateral add to $360^\\circ$, and the two remaining ones, $\\angle PQR$ and $\\angle PSR$, are equal, so each is $\\frac{360^\\circ - 64^\\circ - 100^\\circ}{2} = \\frac{196^\\circ}{2} = 98^\\circ$ ✓. The picture agrees: the corner at $S$ is clearly blunt, a little past square ✓. (The choice $82^\\circ$ is ADDING THE TWO GIVEN ANGLES; the choice $130^\\circ$ is SUBTRACTING ONLY ONE ANGLE FROM 180 and forgetting the other; the choice $50^\\circ$ is COPYING A GIVEN ANGLE, which belongs to the corner at $R$, not the corner at $S$.)',
    },
    {
      q: 'Quadrilateral $WXYZ$ has $WX = WZ$ and $YX = YZ$, and the diagonal $\\overline{WY}$ has been drawn. Given $\\angle XWY = 18^\\circ$ and $\\angle XYW = 38^\\circ$, find $\\angle WZY$.',
      fig: {
        view: [-1, -2.5, 7, 2.5],
        alt: 'Quadrilateral WXYZ with diagonal WY drawn, WX equal to WZ and YX equal to YZ',
        elems: [
          { t: 'poly', pts: [[0, 0], [4.2377, 1.3769], [6, 0], [4.2377, -1.3769]] },
          { t: 'seg', a: [0, 0], b: [6, 0], dash: true },
          { t: 'tick', a: [0, 0], b: [4.2377, 1.3769], n: 1 },
          { t: 'tick', a: [0, 0], b: [4.2377, -1.3769], n: 1 },
          { t: 'tick', a: [6, 0], b: [4.2377, 1.3769], n: 2 },
          { t: 'tick', a: [6, 0], b: [4.2377, -1.3769], n: 2 },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [4.2377, 1.3769], r: 1.1, label: '18' },
          { t: 'angle', at: [6, 0], from: [0, 0], to: [4.2377, 1.3769], r: 0.7, label: '38' },
          { t: 'point', p: [0, 0], label: 'W', dx: -16, dy: 0 },
          { t: 'point', p: [4.2377, 1.3769], label: 'X', dx: 2, dy: -12 },
          { t: 'point', p: [6, 0], label: 'Y', dx: 12, dy: 0 },
          { t: 'point', p: [4.2377, -1.3769], label: 'Z', dx: 2, dy: 16 },
        ],
      },
      choices: ['$124^\\circ$', '$56^\\circ$', '$162^\\circ$', '$38^\\circ$'],
      answer: 0,
      solution:
        'The diagonal makes two triangles that share it, so $\\triangle WXY \\cong \\triangle WZY$ by SSS: $WX = WZ$, $YX = YZ$, and $\\overline{WY} = \\overline{WY}$. The two given angles are the angles of $\\triangle WXY$ at $W$ and at $Y$, so the corner at $X$ is $\\angle WXY = 180^\\circ - 18^\\circ - 38^\\circ = 124^\\circ$. The congruence matches $X$ with $Z$, so $\\angle WZY = 124^\\circ$ ✓. Check a second, independent way using the quadrilateral as a whole. Because the two triangles are congruent, the diagonal bisects the corner angles it passes through, giving $\\angle XWZ = 2 \\times 18^\\circ = 36^\\circ$ and $\\angle XYZ = 2 \\times 38^\\circ = 76^\\circ$. The four corners total $360^\\circ$ and the two unknown ones are equal to each other, so each equals $\\frac{360^\\circ - 36^\\circ - 76^\\circ}{2} = \\frac{248^\\circ}{2} = 124^\\circ$ ✓. That also matches the drawing, where the corners at $X$ and $Z$ are the wide ones ✓. (The choice $56^\\circ$ is ADDING THE TWO GIVEN ANGLES; the choice $162^\\circ$ is SUBTRACTING ONLY ONE ANGLE FROM 180; the choice $38^\\circ$ is COPYING A GIVEN ANGLE.)',
    },
    {
      q: 'A quadrilateral $EFGH$ satisfies $EF = EH$ and $GF = GH$. The diagonal $\\overline{EG}$ is drawn, and $\\angle FEG = 41^\\circ$ while $\\angle FGE = 52^\\circ$. What is $\\angle EHG$?',
      fig: {
        view: [-1, -4.1, 7, 4.1],
        alt: 'Quadrilateral EFGH with diagonal EG drawn, EF equal to EH and GF equal to GH',
        elems: [
          { t: 'poly', pts: [[0, 0], [3.5732, 3.1061], [6, 0], [3.5732, -3.1061]] },
          { t: 'seg', a: [0, 0], b: [6, 0], dash: true },
          { t: 'tick', a: [0, 0], b: [3.5732, 3.1061], n: 1 },
          { t: 'tick', a: [0, 0], b: [3.5732, -3.1061], n: 1 },
          { t: 'tick', a: [6, 0], b: [3.5732, 3.1061], n: 2 },
          { t: 'tick', a: [6, 0], b: [3.5732, -3.1061], n: 2 },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [3.5732, 3.1061], r: 0.9, label: '41' },
          { t: 'angle', at: [6, 0], from: [0, 0], to: [3.5732, 3.1061], r: 0.7, label: '52' },
          { t: 'point', p: [0, 0], label: 'E', dx: -14, dy: 0 },
          { t: 'point', p: [3.5732, 3.1061], label: 'F', dx: 2, dy: -12 },
          { t: 'point', p: [6, 0], label: 'G', dx: 12, dy: 0 },
          { t: 'point', p: [3.5732, -3.1061], label: 'H', dx: 2, dy: 16 },
        ],
      },
      choices: ['$93^\\circ$', '$41^\\circ$', '$87^\\circ$', '$128^\\circ$'],
      answer: 2,
      solution:
        'Split the quadrilateral along $\\overline{EG}$. The two halves are congruent by SSS, since $EF = EH$, $GF = GH$, and the diagonal is shared, so $\\triangle EFG \\cong \\triangle EHG$. Inside $\\triangle EFG$ the two given angles leave $\\angle EFG = 180^\\circ - 41^\\circ - 52^\\circ = 87^\\circ$, and $F$ corresponds to $H$, so $\\angle EHG = 87^\\circ$ ✓. Check a second, independent way by counting the whole quadrilateral. The congruence doubles the two split angles: $\\angle FEH = 2 \\times 41^\\circ = 82^\\circ$ and $\\angle FGH = 2 \\times 52^\\circ = 104^\\circ$. Since all four corners add to $360^\\circ$ and the two left over are equal, each is $\\frac{360^\\circ - 82^\\circ - 104^\\circ}{2} = \\frac{174^\\circ}{2} = 87^\\circ$ ✓. Notice this one is just under a right angle, and in the drawing the corner at $H$ is indeed a whisker sharper than square ✓. (The choice $93^\\circ$ is ADDING THE TWO GIVEN ANGLES; the choice $128^\\circ$ is SUBTRACTING ONLY ONE ANGLE FROM 180; the choice $41^\\circ$ is COPYING A GIVEN ANGLE.)',
    },
  ],

  // slot 3 — segments that bisect each other, two corresponding sides written as
  // expressions, and the LENGTH is what is wanted. Lane: 19 / 25 / 29.
  [
    {
      q: 'Segments $\\overline{PR}$ and $\\overline{QS}$ bisect each other at $N$. This makes $\\triangle NPQ \\cong \\triangle NRS$ by SAS, so $PQ = RS$. If $RS = 2x + 7$ and $PQ = 4x - 5$, what is $PQ$?',
      choices: ['$6$', '$24$', '$19$', '$38$'],
      answer: 2,
      solution:
        'The congruence hands you one equation: the two matching sides have the same length, so $2x + 7 = 4x - 5$. Collect the $x$ terms on one side, $12 = 2x$, so $x = 6$. The question asks for a length, not for $x$, so substitute: $PQ = 4(6) - 5 = 24 - 5 = 19$ ✓. Check a second, independent way that never finds $x$ at all. Call the common length $L$, so $2x + 7 = L$ and $4x - 5 = L$. Double the first equation to get $4x + 14 = 2L$, then subtract the second equation from it: the $4x$ terms cancel and $14 - (-5) = 2L - L$, that is $19 = L$ ✓. The two routes agree, and the check inside the problem works too: with $x = 6$, $RS = 2(6) + 7 = 19$ as well, so the two sides really do match ✓. (The choice $6$ is ANSWERING WITH x, the value that was only a stepping stone; the choice $24$ is DROPPING THE CONSTANT TERM and reporting $4x$; the choice $38$ is DOUBLING THE SIDE, adding $PQ$ and $RS$ together when they are two names for the same distance.)',
    },
    {
      q: 'Point $K$ is the midpoint of both $\\overline{EG}$ and $\\overline{FH}$. If $EF = 5x - 10$ and $GH = 3x + 4$, find $EF$.',
      choices: ['$7$', '$25$', '$35$', '$50$'],
      answer: 1,
      solution:
        'Because $K$ is the midpoint of both segments, $EK = GK$ and $FK = HK$, and the angles at $K$ are vertical angles, so $\\triangle KEF \\cong \\triangle KGH$ by SAS. Corresponding sides are equal, which gives $5x - 10 = 3x + 4$. Then $2x = 14$ and $x = 7$, so $EF = 5(7) - 10 = 35 - 10 = 25$ ✓. Check a second, independent way by eliminating $x$ instead of solving for it. Write the common length as $L$. Multiplying $5x - 10 = L$ by $3$ gives $15x - 30 = 3L$, and multiplying $3x + 4 = L$ by $5$ gives $15x + 20 = 5L$. Subtracting the first of these from the second kills the $15x$: $50 = 2L$, so $L = 25$ ✓. Confirm the equality with the other expression as well: $3(7) + 4 = 25$ ✓. (The choice $7$ is ANSWERING WITH x; the choice $35$ is DROPPING THE CONSTANT TERM and reporting just $5x$; the choice $50$ is DOUBLING THE SIDE, which is $EF + GH$ rather than $EF$.)',
    },
    {
      q: 'Two segments $\\overline{VX}$ and $\\overline{WY}$ cross at $Z$, and each one bisects the other. If $VW = 7x - 6$ and $XY = 4x + 9$, how long is $\\overline{VW}$?',
      choices: ['$5$', '$35$', '$58$', '$29$'],
      answer: 3,
      solution:
        'Each segment being bisected means $VZ = XZ$ and $WZ = YZ$, and the angles $\\angle VZW$ and $\\angle XZY$ are vertical angles, so $\\triangle ZVW \\cong \\triangle ZXY$ by SAS. Matching sides then give $7x - 6 = 4x + 9$, so $3x = 15$ and $x = 5$. Substituting, $VW = 7(5) - 6 = 35 - 6 = 29$ ✓. Check a second, independent way, keeping $x$ hidden the whole time. Let the shared length be $L$. Multiply $7x - 6 = L$ by $4$ to get $28x - 24 = 4L$, and multiply $4x + 9 = L$ by $7$ to get $28x + 63 = 7L$. Subtracting removes $28x$ entirely and leaves $87 = 3L$, so $L = 29$ ✓. As a final check, $4(5) + 9 = 29$ matches ✓. (The choice $5$ is ANSWERING WITH x; the choice $35$ is DROPPING THE CONSTANT TERM; the choice $58$ is DOUBLING THE SIDE, which counts the same distance twice.)',
    },
  ],

  // slot 4 — read the arrangement of the given parts and name the criterion.
  // Lane: ASA / HL / SAS.
  [
    {
      q: 'In $\\triangle PQR$ and $\\triangle UVW$ you are told that $\\angle Q = \\angle V$, $\\angle R = \\angle W$, and $QR = VW$. Which criterion proves the triangles congruent?',
      choices: ['AAS', 'ASA', 'SAS', 'SSS'],
      answer: 1,
      solution:
        'Locate the given side relative to the given angles. The side $\\overline{QR}$ runs from $Q$ to $R$, and $Q$ and $R$ are exactly the two vertices whose angles were given, so the side lies between the two angles. Two angles with the included side is ASA ✓. Check a second, independent way by building the triangle from nothing and seeing whether the pieces force it. Draw a segment of length $QR$. At one end open a ray making the angle $\\angle Q$, and at the other end open a ray making the angle $\\angle R$. The two rays are not parallel, since the two angles are together less than $180^\\circ$ in any triangle, so they cross at exactly one point, and that point has to be the third vertex. There is only one triangle with these measurements, which is what a valid criterion means ✓. (The choice AAS is CALLING A NON-INCLUDED ANGLE INCLUDED in reverse — AAS is the pattern where the known side is opposite one of the angles, as $\\overline{PQ}$ or $\\overline{PR}$ would be, and $\\overline{QR}$ is opposite neither; the choice SAS is impossible because only one angle can be included between two sides and only one side is known here; the choice SSS is COUNTING A SIDE THAT WAS NEVER GIVEN, since two of the three side lengths are unknown.)',
    },
    {
      q: '$\\triangle GHJ$ has a right angle at $H$ and $\\triangle KLM$ has a right angle at $L$. You also know $GJ = KM$ and $HJ = LM$. Which criterion settles the congruence?',
      choices: ['HL', 'SAS', 'SSA, so congruence is not guaranteed', 'ASA'],
      answer: 0,
      solution:
        'Sort the two given sides. In a right triangle the side opposite the right angle is the hypotenuse, so $\\overline{GJ}$ and $\\overline{KM}$ are the hypotenuses, and they are equal. The other pair, $\\overline{HJ}$ and $\\overline{LM}$, each touch the right angle, so they are legs, and they are equal too. A right angle plus a matching hypotenuse plus a matching leg is HL ✓. Check a second, independent way, using arithmetic rather than a named rule. The Pythagorean Theorem gives $GH^2 = GJ^2 - HJ^2$ and $KL^2 = KM^2 - LM^2$. The two right-hand sides are built from equal numbers, so $GH^2 = KL^2$ and $GH = KL$. Now all three pairs of sides are equal and SSS finishes the job ✓ — so the triangles really are congruent, no matter which name is used for the shortcut. (The choice SAS fails because the equal angle here is at $H$ and $L$, which is not between the two named sides — $\\overline{GJ}$ does not even touch $H$; the choice ASA fails because only one angle is known in each triangle; the SSA choice is the trap of DECLARING SSA HOPELESS, and the Pythagorean check above shows why the right angle rescues this arrangement when a general angle would not.)',
    },
    {
      q: 'For $\\triangle DEF$ and $\\triangle RST$, you know $\\angle E = \\angle S$, $DE = RS$, and $EF = ST$. Which criterion applies?',
      choices: ['SSA', 'ASA', 'AAS', 'SAS'],
      answer: 3,
      solution:
        'Find where the two known sides meet. $\\overline{DE}$ and $\\overline{EF}$ share the vertex $E$, and the given angle is the angle at $E$, so the angle sits between the two sides. Two sides with the included angle is SAS ✓. Check a second, independent way with a hinge argument that rebuilds the triangle. Fix the angle at $E$ and lay one arm of length $DE$ and the other of length $EF$ along its two sides. The endpoints $D$ and $F$ are now pinned down completely, so the distance $DF$ is determined by the three given numbers alone. The same construction in the second triangle gives $RT$ equal to that same distance, and then SSS closes it ✓. Since the third sides are forced, only one triangle fits the data. (The choice SSA is the arrangement where the given angle is not between the given sides, which is not what happens here; the choices ASA and AAS both need two angles, and only one angle is known in each triangle.)',
    },
  ],

  // slot 5 — the same three letters, arranged so the angle is NOT included.
  // Lane: name the SSA pattern / explain the two-triangle picture / repair a
  // student’s bad label.
  [
    {
      q: 'In $\\triangle JKL$ and $\\triangle PQR$ it is given that $\\angle L = \\angle R$, $JK = PQ$, and $KL = QR$. Is that enough to conclude the triangles are congruent?',
      choices: [
        'Yes, by SAS',
        'Yes, by AAS',
        'No — $\\angle L$ does not lie between $\\overline{JK}$ and $\\overline{KL}$, so these parts form the SSA pattern',
        'Yes, by SSS',
      ],
      answer: 2,
      solution:
        'Find the vertex where the two given sides meet. $\\overline{JK}$ and $\\overline{KL}$ both contain $K$, so the angle sitting between them is $\\angle K$. The angle you were handed is at $L$ instead, which is opposite $\\overline{JK}$. Two sides and an angle that is not between them is SSA, and SSA is not a congruence criterion ✓. Check a second, independent way by building an actual pair of triangles that fit the description and are not congruent. Take $\\angle L = 30^\\circ$ and lay off $KL = 10$ along one arm. The third vertex $J$ must sit on the other arm, at distance $JK = 6$ from $K$. The shortest distance from $K$ to that arm is $10 \\times \\sin 30^\\circ = 5$, and $5 < 6 < 10$, so a compass opened to $6$ and centered at $K$ crosses the arm in two different spots — one making an acute triangle and one making an obtuse one. Both have the required $30^\\circ$, the required $10$, and the required $6$, and they are not congruent ✓. (The choice SAS is CALLING A NON-INCLUDED ANGLE INCLUDED; the choice AAS demands two known angles per triangle and only one is given; the choice SSS demands three known sides per triangle and only two are given.)',
    },
    {
      q: 'A student measures $\\triangle XYZ$ and finds $\\angle X = 40^\\circ$, $XY = 10$, and $YZ = 7$. A classmate measures a different triangle $\\triangle RST$ and finds $\\angle R = 40^\\circ$, $RS = 10$, and $ST = 7$. Why might these two triangles fail to be congruent?',
      choices: [
        'Because $\\overline{YZ}$, the side opposite the $40^\\circ$ angle, is shorter than the side $\\overline{XY}$ beside it, so it can reach the far arm in two different places',
        'Because three measurements are never enough to pin down a triangle',
        'Because a $40^\\circ$ angle is too small to determine a triangle',
        'They must be congruent — these parts form an SAS pattern',
      ],
      answer: 0,
      solution:
        'Set the picture up. The angle is at $X$, and one of its arms carries $XY = 10$. The remaining side, $YZ = 7$, hangs from $Y$ and must land somewhere on the other arm — it swings. The shortest reach from $Y$ to that arm is the perpendicular distance, $10 \\times \\sin 40^\\circ \\approx 6.43$. Since $6.43 < 7$, the swinging side is long enough to reach; since $7 < 10$, it is too short to have already passed the vertex $X$. Both crossings therefore land on the correct side of $X$, giving two genuinely different triangles from the same three numbers ✓. Check a second, independent way by watching the third angle instead of the picture. If $\\angle Z$ is acute, the triangle closes one way; if $\\angle Z$ is obtuse, it closes another, and nothing in the given data rules either out — the two possibilities are supplementary. Only when the swinging side is at least as long as its neighbor does one of the two get eliminated, and $7 < 10$, so both survive ✓. (The choice about three measurements CLAIMS THREE MEASUREMENTS ALWAYS SUFFICE is false in reverse: SSS, SAS, and ASA are all three measurements and all work, so the count is not the problem — the arrangement is. The choice about $40^\\circ$ is BLAMING THE SIZE OF THE ANGLE, and the same trouble appears at $70^\\circ$ or $10^\\circ$ whenever the opposite side is the shorter one. The last choice is CALLING SSA A CASE OF SAS; the $40^\\circ$ angle is opposite $\\overline{YZ}$, not between the two given sides.)',
    },
    {
      q: 'In $\\triangle LMN$ and $\\triangle PQR$ it is known that $LN = PR$, $MN = QR$, and $\\angle L = \\angle P$. A student writes, “Two sides and an angle — congruent by SAS.” What is wrong with the argument?',
      choices: [
        'Nothing is wrong — the argument is correct',
        'The triangles are congruent, but the criterion should be called ASA',
        'SAS requires all three pairs of sides to be equal',
        'The two given sides meet at $N$, so the included angle is $\\angle N$; using $\\angle L$ makes this SSA, which proves nothing by itself',
      ],
      answer: 3,
      solution:
        'SAS is not a headcount of two sides and an angle; the angle has to be the one the two sides make with each other. Here $\\overline{LN}$ and $\\overline{MN}$ share the vertex $N$, so the included angle is $\\angle N$. The angle actually given is at $L$, at the far end of one of those sides, so the pattern is side-side-angle and the argument collapses ✓. Check a second, independent way by trying to build the triangle from the data. Draw $\\angle L$, mark $LN$ along one arm, and then try to place $M$: it must be on the other arm and at distance $MN$ from $N$. That is a circle centered at $N$ meeting a ray, and a circle can cut a ray twice. Unless $MN \\ge LN$ forces one of the crossings off the ray, two different triangles satisfy every given measurement, so no proof is possible from these three facts alone ✓. (Saying nothing is wrong is CALLING A NON-INCLUDED ANGLE INCLUDED; ASA needs two known angles in each triangle and only one is known; the claim that SAS needs three equal sides confuses SAS with SSS.)',
    },
  ],

  // slot 6 — a pair of right triangles matched by HL, then the perimeter.
  // Lane: 56 / 12 / 84.
  [
    {
      q: '$\\triangle ABC$ has a right angle at $C$ and $\\triangle DEF$ has a right angle at $F$. The hypotenuses satisfy $AB = DE = 25$, and the legs satisfy $BC = EF = 7$. What is the perimeter of $\\triangle DEF$?',
      choices: ['$32$', '$50$', '$112$', '$56$'],
      answer: 3,
      solution:
        'The two triangles are right triangles with equal hypotenuses and one pair of equal legs, so they are congruent by HL — and that means they have the same perimeter, so finding one of them is enough. The missing leg comes from the Pythagorean Theorem: $DF^2 = 25^2 - 7^2 = 625 - 49 = 576$, so $DF = 24$. The perimeter is $7 + 24 + 25 = 56$ ✓. Check a second, independent way by factoring instead of squaring and subtracting. Since $b^2 = c^2 - a^2 = (c - a)(c + a)$, the missing leg satisfies $DF^2 = (25 - 7)(25 + 7) = 18 \\times 32 = 576$, and $576 = 24^2$, so $DF = 24$ ✓. The same total follows, $56$. (The choice $32$ is FORGETTING THE COMPUTED LEG and adding only the two lengths that were printed; the choice $50$ is SUBTRACTING LENGTHS INSTEAD OF SQUARES, taking the leg to be $25 - 7 = 18$ — the factoring above shows $18$ is only one factor of $DF^2$, not $DF$; the choice $112$ is ADDING BOTH PERIMETERS when only one triangle was asked about.)',
    },
    {
      q: 'Two cardboard right triangles are cut so that each has a hypotenuse of $5$ cm and a shorter leg of $3$ cm. The two triangles are congruent by HL. What is the perimeter of one of them, in centimeters?',
      choices: ['$8$', '$12$', '$10$', '$24$'],
      answer: 1,
      solution:
        'Only one length is missing, the longer leg. By the Pythagorean Theorem it is $\\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$ cm, so the three edges are $3$, $4$, and $5$, and the perimeter of one triangle is $3 + 4 + 5 = 12$ cm ✓. Check a second, independent way with the difference of squares: the longer leg $b$ satisfies $b^2 = (5 - 3)(5 + 3) = 2 \\times 8 = 16$, so $b = 4$ ✓, and the perimeter is again $12$ cm. Because HL makes the two pieces congruent, the second triangle has the same perimeter — the cardboard shapes are copies of each other, and they would stack exactly ✓. (The choice $8$ is FORGETTING THE COMPUTED LEG; the choice $10$ is SUBTRACTING LENGTHS INSTEAD OF SQUARES and using $5 - 3 = 2$ as the leg, which the factoring shows is a factor of $b^2$ rather than $b$ itself — and $2$, $3$, $5$ could not even close into a triangle; the choice $24$ is ADDING BOTH PERIMETERS.)',
    },
    {
      q: '$\\triangle PQR$ is right-angled at $Q$ and $\\triangle STU$ is right-angled at $T$. Given $PR = SU = 37$ and $PQ = ST = 12$, find the perimeter of $\\triangle PQR$.',
      choices: ['$49$', '$74$', '$84$', '$168$'],
      answer: 2,
      solution:
        'The right angles are at $Q$ and $T$, so $\\overline{PR}$ and $\\overline{SU}$ are the hypotenuses and $\\overline{PQ}$ and $\\overline{ST}$ are legs. Equal hypotenuse plus equal leg plus the right angle is HL, so the triangles are congruent and share a perimeter. Find the third side of $\\triangle PQR$: $QR^2 = 37^2 - 12^2 = 1369 - 144 = 1225$, so $QR = 35$, and the perimeter is $12 + 35 + 37 = 84$ ✓. Check a second, independent way by factoring: $QR^2 = (37 - 12)(37 + 12) = 25 \\times 49 = 1225$, and since $1225 = 25 \\times 49$ is a product of two perfect squares, $QR = 5 \\times 7 = 35$ ✓ with no long multiplication at all. Both routes give $84$. (The choice $49$ is FORGETTING THE COMPUTED LEG; the choice $74$ is SUBTRACTING LENGTHS INSTEAD OF SQUARES, using $37 - 12 = 25$ as the third side; the choice $168$ is ADDING BOTH PERIMETERS.)',
    },
  ],

  // slot 7 — isosceles triangle with a second isosceles triangle folded into it;
  // the answer is (180 - 3A)/2. Lane: 45 / 39 / 75. The middle lane moved off
  // A = 40, because the base chapter's worksheet runs this exact configuration
  // with a 40-degree vertex — same triangle, same asked angle, same answer.
  [
    {
      q: 'In $\\triangle PQR$, $PQ = PR$ and $\\angle P = 30^\\circ$. Point $S$ lies on $\\overline{PQ}$ so that $RS = RQ$. Find $\\angle PRS$.',
      choices: ['$45^\\circ$', '$75^\\circ$', '$30^\\circ$', '$15^\\circ$'],
      answer: 0,
      solution:
        'Start with the big triangle. Since $PQ = PR$, the base angles are equal, and they share what is left of $180^\\circ$ after the vertex angle: $\\angle Q = \\angle PRQ = \\frac{180^\\circ - 30^\\circ}{2} = 75^\\circ$. Now look at the small triangle $\\triangle RSQ$. It is isosceles with $RS = RQ$, so the angles opposite those sides are equal: $\\angle RSQ = \\angle RQS = 75^\\circ$, which forces $\\angle SRQ = 180^\\circ - 150^\\circ = 30^\\circ$. The angle wanted is what is left of $\\angle PRQ$ after $\\angle SRQ$ is removed: $\\angle PRS = 75^\\circ - 30^\\circ = 45^\\circ$ ✓. Check a second, independent way that never computes $\\angle SRQ$. Since $S$ is on $\\overline{PQ}$, the angle $\\angle RSQ$ is an exterior angle of $\\triangle PRS$ at $S$, so it equals the sum of the two remote interior angles: $\\angle RSQ = \\angle P + \\angle PRS$. The isosceles small triangle already gave $\\angle RSQ = 75^\\circ$, so $75^\\circ = 30^\\circ + \\angle PRS$ and $\\angle PRS = 45^\\circ$ ✓. (The choice $75^\\circ$ is ANSWERING WITH THE BASE ANGLE, which is the whole of $\\angle PRQ$ rather than the piece next to $\\overline{PR}$; the choice $30^\\circ$ is COPYING THE VERTEX ANGLE — and note that $\\angle SRQ$ does equal $\\angle P$ here, so it names the wrong one of the two pieces; the choice $15^\\circ$ is HALVING THE VERTEX ANGLE.)',
    },
    {
      q: 'Triangle $XYZ$ has $XY = XZ$ and $\\angle X = 34^\\circ$. A point $W$ is marked on $\\overline{XY}$ with $ZW = ZY$. What is $\\angle XZW$?',
      choices: ['$73^\\circ$', '$34^\\circ$', '$39^\\circ$', '$17^\\circ$'],
      answer: 2,
      solution:
        'The equal sides $XY$ and $XZ$ make the base angles equal, so $\\angle Y = \\angle XZY = \\frac{180^\\circ - 34^\\circ}{2} = 73^\\circ$. Inside, $\\triangle ZWY$ has $ZW = ZY$, so $\\angle ZWY = \\angle ZYW = 73^\\circ$ and $\\angle WZY = 180^\\circ - 146^\\circ = 34^\\circ$. Subtracting that piece from the base angle at $Z$ gives $\\angle XZW = 73^\\circ - 34^\\circ = 39^\\circ$ ✓. Check a second, independent way with the exterior angle. Because $W$ sits on $\\overline{XY}$, the angle $\\angle ZWY$ is exterior to $\\triangle XZW$ at $W$, so it equals $\\angle X + \\angle XZW$. That reads $73^\\circ = 34^\\circ + \\angle XZW$, giving $\\angle XZW = 39^\\circ$ ✓ without ever finding $\\angle WZY$. (The choice $73^\\circ$ is ANSWERING WITH THE BASE ANGLE; the choice $34^\\circ$ is COPYING THE VERTEX ANGLE, which happens to equal the other piece $\\angle WZY$ and so is very easy to grab; the choice $17^\\circ$ is HALVING THE VERTEX ANGLE.)',
    },
    {
      q: 'In $\\triangle DEF$, $DE = DF$ and the vertex angle $\\angle D$ measures $10^\\circ$. Point $G$ is on $\\overline{DE}$ with $FG = FE$. Find $\\angle DFG$.',
      choices: ['$85^\\circ$', '$75^\\circ$', '$10^\\circ$', '$5^\\circ$'],
      answer: 1,
      solution:
        'A vertex angle this thin makes the base angles very large: $\\angle E = \\angle DFE = \\frac{180^\\circ - 10^\\circ}{2} = 85^\\circ$. The inner triangle $\\triangle FGE$ has $FG = FE$, so $\\angle FGE = \\angle FEG = 85^\\circ$, leaving $\\angle GFE = 180^\\circ - 170^\\circ = 10^\\circ$. Then $\\angle DFG = 85^\\circ - 10^\\circ = 75^\\circ$ ✓. Check a second, independent way. With $G$ on $\\overline{DE}$, the angle $\\angle FGE$ is an exterior angle of $\\triangle DFG$ at $G$, so it equals the remote interior angles added: $\\angle FGE = \\angle D + \\angle DFG$, that is $85^\\circ = 10^\\circ + \\angle DFG$, so $\\angle DFG = 75^\\circ$ ✓. Worth noticing across all of these: the piece $\\angle GFE$ came out equal to $\\angle D$ again, which is why the answer is always the base angle minus the vertex angle. (The choice $85^\\circ$ is ANSWERING WITH THE BASE ANGLE; the choice $10^\\circ$ is COPYING THE VERTEX ANGLE, which names $\\angle GFE$ rather than $\\angle DFG$; the choice $5^\\circ$ is HALVING THE VERTEX ANGLE.)',
    },
  ],

  // slot 8 — equilateral triangle, two sides given as expressions, perimeter
  // wanted. Lane: 60 / 90 / 48.
  [
    {
      q: 'A garden bed is an equilateral triangle. One side measures $2x - 2$ feet and another measures $x + 9$ feet. How many feet of edging are needed to go all the way around the bed?',
      fig: {
        view: [-1, -1.5, 5, 4.5],
        alt: 'An equilateral triangle with two sides labelled 2x minus 2 and x plus 9',
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2, 3.4641]] },
          { t: 'tick', a: [0, 0], b: [4, 0], n: 1 },
          { t: 'tick', a: [4, 0], b: [2, 3.4641], n: 1 },
          { t: 'tick', a: [2, 3.4641], b: [0, 0], n: 1 },
          { t: 'label', p: [1, 1.7321], text: '2x - 2', dx: -40, dy: 0 },
          { t: 'label', p: [3, 1.7321], text: 'x + 9', dx: 10, dy: 0 },
        ],
      },
      choices: ['$60$', '$20$', '$40$', '$11$'],
      answer: 0,
      solution:
        'Equilateral means all three sides are the same length, so the two expressions describe the same number: $2x - 2 = x + 9$. Subtracting $x$ from both sides gives $x - 2 = 9$, so $x = 11$, and one side is $11 + 9 = 20$ feet. The edging runs around all three sides, so it needs $3 \\times 20 = 60$ feet ✓. Check a second, independent way without ever finding $x$. Call the side length $s$, so $2x - 2 = s$ and $x + 9 = s$. Doubling the second equation gives $2x + 18 = 2s$; subtracting the first from it cancels the $2x$ and leaves $20 = s$ ✓, so the perimeter is $60$ feet. As a final check, $2(11) - 2 = 20$ matches $11 + 9 = 20$ ✓. (The choice $20$ is ANSWERING WITH ONE SIDE and forgetting that a border wraps the whole shape; the choice $40$ is ADDING ONLY TWO SIDES, the two the problem happened to describe; the choice $11$ is ANSWERING WITH x.)',
    },
    {
      q: 'Triangle $LMN$ is equilateral, with $LM = 7x - 12$ and $MN = 4x + 6$. What is its perimeter?',
      fig: {
        view: [-1, -1.5, 5, 4.5],
        alt: 'Equilateral triangle LMN with side LM labelled 7x minus 12 and side MN labelled 4x plus 6',
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2, 3.4641]] },
          { t: 'tick', a: [0, 0], b: [4, 0], n: 1 },
          { t: 'tick', a: [4, 0], b: [2, 3.4641], n: 1 },
          { t: 'tick', a: [2, 3.4641], b: [0, 0], n: 1 },
          { t: 'point', p: [2, 3.4641], label: 'L', dx: -4, dy: -12 },
          { t: 'point', p: [0, 0], label: 'M', dx: -14, dy: 14 },
          { t: 'point', p: [4, 0], label: 'N', dx: 8, dy: 14 },
          { t: 'label', p: [1, 1.7321], text: '7x - 12', dx: -44, dy: 0 },
          { t: 'label', p: [2, 0], text: '4x + 6', dx: -22, dy: 20 },
        ],
      },
      choices: ['$6$', '$30$', '$60$', '$90$'],
      answer: 3,
      solution:
        'All three sides of an equilateral triangle are equal, so $7x - 12 = 4x + 6$. That gives $3x = 18$ and $x = 6$, so each side is $7(6) - 12 = 42 - 12 = 30$, and the perimeter is $3 \\times 30 = 90$ ✓. Check a second, independent way that gets the perimeter directly and never mentions $x$. Write $s$ for the side. Multiply $7x - 12 = s$ by $4$ to get $28x - 48 = 4s$, and multiply $4x + 6 = s$ by $7$ to get $28x + 42 = 7s$. Subtracting the first from the second removes $28x$ and leaves $90 = 3s$ — and $3s$ is exactly the perimeter, so the perimeter is $90$ ✓ with no side length ever computed. Confirm the equality: $4(6) + 6 = 30$ ✓. (The choice $6$ is ANSWERING WITH x; the choice $30$ is ANSWERING WITH ONE SIDE; the choice $60$ is ADDING ONLY TWO SIDES.)',
    },
    {
      q: 'An equilateral triangle $TUV$ has one side of length $5x - 9$ and another of length $2x + 6$. What is the distance all the way around the triangle?',
      fig: {
        view: [-1, -1.5, 5, 4.5],
        alt: 'Equilateral triangle TUV with two sides labelled 5x minus 9 and 2x plus 6',
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2, 3.4641]] },
          { t: 'tick', a: [0, 0], b: [4, 0], n: 1 },
          { t: 'tick', a: [4, 0], b: [2, 3.4641], n: 1 },
          { t: 'tick', a: [2, 3.4641], b: [0, 0], n: 1 },
          { t: 'point', p: [2, 3.4641], label: 'T', dx: -4, dy: -12 },
          { t: 'point', p: [0, 0], label: 'U', dx: -14, dy: 14 },
          { t: 'point', p: [4, 0], label: 'V', dx: 8, dy: 14 },
          { t: 'label', p: [1, 1.7321], text: '5x - 9', dx: -40, dy: 0 },
          { t: 'label', p: [3, 1.7321], text: '2x + 6', dx: 10, dy: 0 },
        ],
      },
      choices: ['$16$', '$48$', '$5$', '$32$'],
      answer: 1,
      solution:
        'The sides of an equilateral triangle are all equal, so the two expressions are equal: $5x - 9 = 2x + 6$. Then $3x = 15$, so $x = 5$ and each side is $5(5) - 9 = 25 - 9 = 16$. Going all the way around covers three sides, $3 \\times 16 = 48$ ✓. Check a second, independent way, eliminating $x$ rather than solving for it. With $s$ for the side, doubling $5x - 9 = s$ gives $10x - 18 = 2s$, and multiplying $2x + 6 = s$ by $5$ gives $10x + 30 = 5s$. Subtracting leaves $48 = 3s$, which is the perimeter itself ✓. Check the equality too: $2(5) + 6 = 16$ ✓. (The choice $16$ is ANSWERING WITH ONE SIDE; the choice $5$ is ANSWERING WITH x; the choice $32$ is ADDING ONLY TWO SIDES.)',
    },
  ],

  // slot 9 — what a congruence does and does not buy you. Lane: spot the
  // unearned claim / name what the pair of congruences builds / find the
  // missing ingredient.
  [
    {
      q: 'Segments $\\overline{JL}$ and $\\overline{KN}$ bisect each other at $P$, which makes $\\triangle PJK \\cong \\triangle PLN$ by SAS. Which statement does this congruence NOT justify?',
      choices: [
        '$JK = LN$',
        '$\\angle PKJ = \\angle PNL$',
        '$\\overline{JL} \\perp \\overline{KN}$',
        '$\\overline{JK} \\parallel \\overline{LN}$',
      ],
      answer: 2,
      solution:
        'Take the choices one at a time against the congruence $\\triangle PJK \\cong \\triangle PLN$. The letters pair $J$ with $L$ and $K$ with $N$, so $\\overline{JK}$ corresponds to $\\overline{LN}$ and $JK = LN$ is a corresponding part ✓. The angles at $K$ and $N$ correspond as well, so $\\angle PKJ = \\angle PNL$ ✓. Those equal angles are alternate interior angles for the lines $\\overline{JK}$ and $\\overline{LN}$ cut by the transversal $\\overline{KN}$, so the two segments are parallel ✓. The one left over is the claim that the segments cross at a right angle, and nothing in the setup measures that angle: bisecting says the crossing point is the middle of each segment, not that the crossing is square ✓. Check a second, independent way by moving the picture. Hold $\\overline{JL}$ still and pivot $\\overline{KN}$ about $P$ to any tilt you like. Both segments are still bisected at $P$, the congruence still holds by SAS with the same vertical angles, and every one of the other three statements survives — but the crossing angle changes with every pivot, so it cannot be a consequence ✓. (The perpendicular choice is CLAIMING PERPENDICULAR DIAGONALS, which would need the extra fact that the four half-segments are all equal in length.)',
    },
    {
      q: 'Segments $\\overline{AE}$ and $\\overline{BF}$ bisect each other at $M$. Both $\\triangle MAB \\cong \\triangle MEF$ and $\\triangle MAF \\cong \\triangle MEB$. What do these two congruences together prove about quadrilateral $ABEF$?',
      choices: [
        'Both pairs of opposite sides are equal, and equal alternate interior angles make them parallel, so $ABEF$ is a parallelogram',
        'All four of its sides are equal',
        'Its two diagonals are equal in length',
        'Nothing follows until one of its angles is measured',
      ],
      answer: 0,
      solution:
        'The quadrilateral $ABEF$ has sides $\\overline{AB}$, $\\overline{BE}$, $\\overline{EF}$, and $\\overline{FA}$, and the two segments given are its diagonals. The first congruence matches $\\overline{AB}$ with $\\overline{EF}$, so those opposite sides are equal; the second matches $\\overline{AF}$ with $\\overline{EB}$, so the other pair of opposite sides is equal. Each congruence also gives a pair of equal angles at $A$ and $E$, which are alternate interior angles across the diagonal $\\overline{AE}$, so each pair of opposite sides is parallel as well ✓. That is a parallelogram. Check a second, independent way by construction. Pick any point $M$, draw any two segments through it, and cut each one exactly in half at $M$. Join the four endpoints in order. Rotating the whole picture a half turn about $M$ sends each endpoint to the opposite endpoint, so it sends every side to the opposite side — equal in length and pointing the opposite way, which is exactly what parallel and equal opposite sides mean ✓. (The four-equal-sides choice would make it a rhombus, and that needs the two diagonals to be perpendicular, which was never given; the equal-diagonals choice would make it a rectangle, and the two segments here may have any lengths at all; the last choice ignores that the bisecting alone has already done the work.)',
    },
    {
      q: 'Segments $\\overline{RT}$ and $\\overline{SU}$ cross at $M$, and it is known that $RM = TM$ and that $\\angle RMS = \\angle TMU$. A student writes $\\triangle MRS \\cong \\triangle MTU$. What is missing?',
      choices: [
        'Nothing — this is a complete SAS argument',
        'The measure of the vertical angles at $M$',
        'The fact that $\\overline{RT}$ and $\\overline{SU}$ are perpendicular',
        'A second pair of equal sides, $SM = UM$ — the angles at $M$ are vertical angles, so that given adds nothing new',
      ],
      answer: 3,
      solution:
        'Count what is genuinely known. SAS needs two sides and the angle between them. Only one pair of sides, $RM = TM$, has been given. The angle statement $\\angle RMS = \\angle TMU$ looks like a second fact, but $\\angle RMS$ and $\\angle TMU$ are vertical angles wherever two segments cross, so they are equal automatically and no information was added by saying so. The argument is one side short, and the side needed is $SM = UM$ ✓. Check a second, independent way by finding a counterexample to the student’s claim. Keep $R$, $T$, and $M$ exactly where they are and slide $S$ along its ray, away from $M$. The two vertical angles stay equal, $RM = TM$ is untouched, and every stated hypothesis still holds — but $\\triangle MRS$ grows while $\\triangle MTU$ does not, so the two triangles stop being congruent. A claim that survives no such sliding cannot follow from the givens ✓. (Choosing “nothing is missing” is TREATING VERTICAL ANGLES AS NEW INFORMATION; asking for the measure of the vertical angles is DEMANDING AN ANGLE THAT IS ALREADY FREE, since equal is all a criterion ever needs; the perpendicular choice would fix that measure at $90^\\circ$ and still leave the triangles free to slide.)',
    },
  ],

  // slot 10 — the ingredient the picture hands you for free in a shared or
  // overlapping configuration. Lane: HL / SAS / ASA.
  [
    {
      q: 'In $\\triangle ABC$ it is given that $AB = AC$. From $A$, a segment $\\overline{AD}$ is drawn perpendicular to $\\overline{BC}$, meeting it at $D$. Which criterion proves $\\triangle ABD \\cong \\triangle ACD$?',
      choices: [
        'SSS, because all three pairs of sides are given',
        'HL, using the shared leg $\\overline{AD}$ and the equal hypotenuses $\\overline{AB}$ and $\\overline{AC}$',
        'SAS, using the right angles at $D$',
        'Not guaranteed — this is SSA',
      ],
      answer: 1,
      solution:
        'List honestly what is known before the proof starts: $AB = AC$, the angles at $D$ are both right angles, and $\\overline{AD}$ belongs to both triangles, so it is equal to itself. The perpendicular makes each triangle a right triangle with the right angle at $D$, so $\\overline{AB}$ and $\\overline{AC}$ are the hypotenuses and $\\overline{AD}$ is a leg in both. Equal hypotenuse, equal leg, right angle: HL ✓. Check a second, independent way that avoids HL entirely. Since $AB = AC$, the base angles are equal, $\\angle B = \\angle C$. Now each triangle has a right angle at $D$, an equal angle at $B$ or $C$, and the shared side $\\overline{AD}$, which lies opposite the equal base angle in each. Two angles and a non-included side is AAS, and it closes the proof too ✓ — two different routes, one conclusion. (The SSS choice is COUNTING A SIDE THAT WAS NEVER GIVEN: $BD = CD$ is a conclusion of this proof, not a hypothesis, so it cannot be used to build it. The SAS choice fails because the right angle at $D$ lies between $\\overline{AD}$ and $\\overline{BD}$, and $BD$ is exactly the length not yet known. The last choice is DECLARING SSA HOPELESS, and the right angle is what turns this arrangement into a valid one.)',
    },
    {
      q: 'Points $A$, $B$, $C$, $D$ lie on one line in that order, with $AB = CD$. A point $E$ sits off the line with $EB = EC$. Which criterion proves $\\triangle ABE \\cong \\triangle DCE$?',
      choices: [
        'SSS, since $AE = DE$ is given',
        'ASA, using the angles at $A$ and $D$',
        'SAS: $\\angle ABE$ and $\\angle DCE$ are supplements of the equal base angles $\\angle EBC$ and $\\angle ECB$, so they are equal and lie between the two pairs of equal sides',
        'Congruence is not guaranteed',
      ],
      answer: 2,
      solution:
        'The two triangles already share two pairs of equal sides: $AB = CD$ is given, and $EB = EC$ is given. The angle between those sides in $\\triangle ABE$ is $\\angle ABE$, and in $\\triangle DCE$ it is $\\angle DCE$, so the whole proof turns on showing those two are equal. Since $EB = EC$, triangle $\\triangle EBC$ is isosceles and $\\angle EBC = \\angle ECB$. Because $A$, $B$, $C$, $D$ are in that order on a line, $\\angle ABE$ is the supplement of $\\angle EBC$ and $\\angle DCE$ is the supplement of $\\angle ECB$. Equal angles have equal supplements, so $\\angle ABE = \\angle DCE$ and the pattern is SAS ✓. Check a second, independent way with a symmetry argument. Drop the perpendicular from $E$ to the line; because $EB = EC$, its foot $M$ is the midpoint of $\\overline{BC}$. Then $AM = AB + BM$ and $DM = DC + CM$ are equal, so reflecting the picture in that perpendicular swaps $A$ with $D$ and $B$ with $C$ while fixing $E$ — which carries one triangle exactly onto the other ✓. (The SSS choice invents $AE = DE$, which is a conclusion here rather than a given; the ASA choice needs the angles at $A$ and $D$, and nothing supplies them; the last choice gives up on a configuration that the supplement argument settles completely.)',
    },
    {
      q: 'In $\\triangle GHK$, point $M$ lies on $\\overline{GH}$ and point $N$ lies on $\\overline{GK}$. It is given that $GH = GK$ and that $\\angle GHN = \\angle GKM$. Which criterion proves $\\triangle GHN \\cong \\triangle GKM$?',
      choices: [
        'SAS, using the shared angle at $G$',
        'Not guaranteed — only one pair of sides is known',
        'AAS, because the equal side is not between the equal angles',
        'ASA: the shared angle at $G$ and the marked angles at $H$ and $K$ sit at the two ends of the equal sides $\\overline{GH}$ and $\\overline{GK}$',
      ],
      answer: 3,
      solution:
        'The free ingredient here is the angle at $G$: it belongs to both triangles, so it equals itself. In $\\triangle GHN$ the known parts are $\\angle G$, then the side $\\overline{GH}$, then $\\angle GHN$; in $\\triangle GKM$ they are $\\angle G$, the side $\\overline{GK}$, and $\\angle GKM$. In each triangle the known side runs from the vertex of one known angle to the vertex of the other, so it is the included side and the pattern is ASA ✓. Check a second, independent way by superimposing one triangle on the other. Rotate the plane about $G$ so that ray $\\overrightarrow{GK}$ falls onto ray $\\overrightarrow{GH}$; the equal angle at $G$ then carries ray $\\overrightarrow{GH}$ onto ray $\\overrightarrow{GK}$. Because $GK = GH$, the point $K$ lands exactly on $H$, and the equal marked angles make ray $\\overrightarrow{KM}$ fall along ray $\\overrightarrow{HN}$, so $M$ lands on $N$. Every vertex matches, so the triangles are congruent ✓. (The SAS choice is one side short — only $\\overline{GH}$ and $\\overline{GK}$ are known, and $\\overline{GN}$ and $\\overline{GM}$ are not; the AAS choice misreads the picture, since $\\overline{GH}$ runs between the two known angles rather than away from them; the give-up choice ignores that a shared angle is a genuine second angle.)',
    },
  ],

  // slot 11 — when the side-side-angle arrangement can be trusted. Lane: which
  // placement is ambiguous / why exactly one triangle fits / does the pair have
  // to be congruent.
  [
    {
      q: 'A triangle has two sides of lengths $9$ and $14$, and a $30^\\circ$ angle that is not between them. In which placement of the $30^\\circ$ angle can two different, non-congruent triangles fit the description?',
      choices: [
        'When the $30^\\circ$ angle is opposite the side of length $14$',
        'When the $30^\\circ$ angle is opposite the side of length $9$',
        'In neither placement — SSA always determines the triangle',
        'In both placements',
      ],
      answer: 1,
      solution:
        'Set the angle up and swing the far side. The side that is not touching the $30^\\circ$ angle is the one that swings, and the other given side sits along one arm. Put the $30^\\circ$ angle opposite the $9$: then the $14$ lies along an arm, the shortest reach from its far endpoint to the other arm is $14 \\times \\sin 30^\\circ = 7$, and the swinging side has length $9$. Since $7 < 9 < 14$, the swinging side is long enough to reach the arm but too short to overshoot the vertex, so it crosses the arm in two places and two different triangles exist ✓. Put the $30^\\circ$ angle opposite the $14$ instead: the $9$ lies along an arm, the swinging side is $14$, and $14 > 9$ means the circle of radius $14$ encloses the vertex, so it meets that arm exactly once. One triangle only ✓. Check a second, independent way with the third angle. In the ambiguous placement the angle opposite the $14$ satisfies $\\sin\\theta = \\frac{14 \\sin 30^\\circ}{9} = \\frac{7}{9}$, and both an acute and an obtuse angle have that sine, with $30^\\circ$ still leaving room for either — two triangles. In the other placement the angle opposite the $9$ satisfies $\\sin\\theta = \\frac{9 \\sin 30^\\circ}{14} = \\frac{4.5}{14}$, and its obtuse partner would sit opposite the shorter side while a bigger angle already sits opposite the longer one, which is impossible — one triangle ✓. (Choosing the $14$ is SWINGING THE SHORT SIDE and reversing which side is free to move; “neither” is CALLING SSA A CASE OF SAS in effect, trusting an arrangement that has a genuine counterexample; “both” forgets that a long swinging side can only reach its arm once.)',
    },
    {
      q: 'Exactly one triangle can be built with a $45^\\circ$ angle, a side of length $7$ next to that angle, and a side of length $9$ opposite it. Why is there only one?',
      choices: [
        'Because the side opposite the $45^\\circ$ angle, $9$, is longer than the side beside it, $7$, so the swinging side can reach the far arm in only one place',
        'Because $45^\\circ$ is exactly half of a right angle',
        'Because SSA always determines a triangle when the given angle is acute',
        'It does not — two different triangles fit this description',
      ],
      answer: 0,
      solution:
        'Draw the $45^\\circ$ angle and lay the $7$ along one arm, ending at a point call it $B$. The third vertex must sit on the other arm at distance $9$ from $B$, so draw a circle of radius $9$ about $B$ and see where it meets that arm. The distance from $B$ back to the vertex is only $7$, which is less than the radius $9$, so the vertex sits inside the circle. A circle that contains the starting point of a ray crosses that ray exactly once — go outward from inside the circle and you leave it once and never return. One crossing, one triangle ✓. Check a second, independent way with the angle opposite the $7$. Its sine is $\\frac{7 \\sin 45^\\circ}{9} \\approx 0.55$, so it is either about $33.4^\\circ$ or about $146.6^\\circ$. The obtuse reading is impossible: it would leave $45^\\circ + 146.6^\\circ$ already past $180^\\circ$, and beyond that it would put the biggest angle opposite the shortest side. Only the acute reading survives, and one set of angles with one fixed side means one triangle ✓. (Blaming the value $45^\\circ$ is BLAMING THE SIZE OF THE ANGLE — the same $7$ and $9$ behave the same way at $20^\\circ$ or $80^\\circ$; the claim that an acute angle is enough is false, since $\\angle X = 40^\\circ$ with sides $10$ and $7$ is acute and ambiguous; the last choice reverses which side is longer.)',
    },
    {
      q: 'In $\\triangle PQR$ and $\\triangle STU$ it is given that $\\angle P = \\angle S = 60^\\circ$, $PQ = ST = 10$, and $QR = TU = 11$. Must the two triangles be congruent?',
      choices: [
        'No — SSA never guarantees congruence',
        'Yes, by SAS',
        'No — the swinging side is shorter than the side beside it, so two triangles fit',
        'Yes — the side opposite the $60^\\circ$ angle, $11$, is longer than the side beside it, $10$, so only one triangle fits these measurements',
      ],
      answer: 3,
      solution:
        'First name the arrangement. In $\\triangle PQR$ the angle is at $P$, one given side $\\overline{PQ}$ touches $P$, and the other given side $\\overline{QR}$ is opposite $P$. Angle, adjacent side, opposite side is the SSA pattern, and SSA usually proves nothing — but it does when the side opposite the angle is at least as long as the side beside it. Here $11 > 10$, so build it: lay the $10$ along one arm of the $60^\\circ$ angle ending at $Q$, then swing $11$ from $Q$. The vertex $P$ is only $10$ from $Q$, so $P$ lies inside the circle of radius $11$, and that circle meets the other arm exactly once. One triangle fits, both triangles are that triangle, and they are congruent ✓. Check a second, independent way by computing the third side. The Law of Cosines is not needed — simply note that the angle opposite the $10$ has sine $\\frac{10 \\sin 60^\\circ}{11} \\approx 0.787$, so it is about $51.9^\\circ$ or about $128.1^\\circ$; the obtuse value is impossible because it would be the largest angle in the triangle while sitting opposite the shortest given side. Only $51.9^\\circ$ survives, which leaves about $68.1^\\circ$ for the third angle, and all three angles plus a side are then pinned down ✓. (The first choice is DECLARING SSA HOPELESS, when a long enough opposite side rescues it; the SAS choice is CALLING SSA A CASE OF SAS, and the $60^\\circ$ angle is not between $\\overline{PQ}$ and $\\overline{QR}$ — the angle between those is $\\angle Q$; the third choice is SWINGING THE SHORT SIDE, reading the $11$ as shorter than the $10$.)',
    },
  ],

  // slot 12 — perimeter and one side of an isosceles triangle, where the given
  // side is forced to be the base. Lane: 18 / 22 / 21.
  [
    {
      q: 'A triangular pennant is isosceles. Its three edges total $44$ inches, and one edge measures $8$ inches. How long is each of the two equal edges, in inches?',
      choices: ['$18$', '$8$', '$28$', '$36$'],
      answer: 0,
      solution:
        'There are two ways the $8$ could sit, so test both. If the $8$ were one of the two equal edges, the other equal edge would also be $8$ and the remaining edge would be $44 - 8 - 8 = 28$. But $8 + 8 = 16$ is less than $28$, and two sides of a triangle must together exceed the third, so that pennant cannot be built ✗. The $8$ must therefore be the odd edge out. The two equal edges then share $44 - 8 = 36$ inches, so each is $\\frac{36}{2} = 18$ inches ✓, and $18 + 18 = 36 > 8$, so this one is a genuine triangle ✓. Check a second, independent way with a rule that never mentions the two cases. Every side of a triangle is shorter than half its perimeter, because the other two sides must beat it and all three together make the perimeter. Half of $44$ is $22$, so no edge may reach $22$ inches. The equal-edge reading demanded an edge of $28$ inches, which is over the limit ✗, so only the other reading survives and each equal edge is $18$ inches ✓. (The choice $28$ is TREATING THE GIVEN SIDE AS A LEG; the choice $36$ is FORGETTING TO HALVE the $36$ inches shared by two edges; the choice $8$ is COPYING THE GIVEN SIDE.)',
    },
    {
      q: 'An isosceles triangle $DEF$ has a perimeter of $58$ and one side of length $14$. How long is each of its two equal sides?',
      choices: ['$14$', '$44$', '$22$', '$30$'],
      answer: 2,
      solution:
        'Try the $14$ as one of the equal sides first. Then two sides are $14$ each and the third is $58 - 28 = 30$. Those lengths fail the triangle inequality, since $14 + 14 = 28$ falls short of $30$ ✗ — the two short sides could not meet above the long one. So the $14$ has to be the third side, and the two equal sides split the remaining $58 - 14 = 44$, giving $\\frac{44}{2} = 22$ each ✓. The result is consistent: $22 + 22 = 44 > 14$, and $22 + 14 = 36 > 22$ ✓. Check a second, independent way. In any triangle each side is less than half the perimeter, here less than $\\frac{58}{2} = 29$. The equal-side reading forces a side of $30$, which exceeds $29$ ✗, and the answer $22$ comfortably clears the bar at $22 < 29$ ✓. (The choice $30$ is TREATING THE GIVEN SIDE AS A LEG and reporting the third side of the impossible triangle; the choice $44$ is FORGETTING TO HALVE; the choice $14$ is COPYING THE GIVEN SIDE.)',
    },
    {
      q: 'The three sides of an isosceles triangle add to $52$, and one of the sides measures $10$. Find the length of each of the two equal sides.',
      choices: ['$32$', '$21$', '$10$', '$42$'],
      answer: 1,
      solution:
        'Suppose the $10$ were one of the equal pair. Then the sides would be $10$, $10$, and $52 - 20 = 32$, and $10 + 10 = 20$ is nowhere near $32$, so no such triangle exists ✗. The $10$ must be the unequal side. The two equal sides then divide $52 - 10 = 42$ between them, so each is $\\frac{42}{2} = 21$ ✓, and the sides $21$, $21$, $10$ satisfy every inequality: $21 + 21 = 42 > 10$ and $21 + 10 = 31 > 21$ ✓. Check a second, independent way with the half-perimeter rule: no side of this triangle can be as long as $\\frac{52}{2} = 26$. The equal-side reading needed a side of $32$ ✗, which settles it in one line, and $21 < 26$ passes ✓. (The choice $32$ is TREATING THE GIVEN SIDE AS A LEG; the choice $42$ is FORGETTING TO HALVE the amount the two equal sides share; the choice $10$ is COPYING THE GIVEN SIDE.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 3,
  challenge,
}
