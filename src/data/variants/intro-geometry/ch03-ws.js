// Introduction to Geometry chapter 3 — variations for the printable worksheet.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution. There is no `choices` key anywhere in this
//    file and no `answer` is a number, because nothing is offered to pick from —
//    the wording has to say what is wanted and in what form. Where the base
//    answer names two parts (slot 1) or pairs a criterion with a length
//    (slots 3 and 6), the variations keep that shape.
//  - Every answer was worked twice, by two genuinely different routes, and the
//    routes had to agree before the key was written. The pairs used are: reading
//    the correspondence letter by letter vs. sliding one triangle bodily onto
//    the other (slot 1); matching the three sides one at a time vs. locating the
//    single vertex where the two given sides meet (slot 2); the SAS congruence
//    vs. a half-turn about the crossing point, which carries one segment onto
//    the other without any congruence criterion at all (slot 3); the
//    $180^\circ$ angle sum vs. the altitude to the base, which makes each base
//    angle $90^\circ - \tfrac{1}{2}(\text{vertex angle})$ (slot 4); solving for
//    the unknown and substituting vs. eliminating it between scaled copies of
//    the two expressions, so the measure falls out with $x$ never found
//    (slot 5); the Pythagorean Theorem vs. the difference of squares
//    $b^2 = (c-a)(c+a)$ (slot 6); the isosceles inner triangle vs. the exterior
//    angle of the outer one (slots 7 and 9); the circle-and-ray count vs. the
//    swing rule that compares the swinging side with the height and with the
//    fixed side (slot 8); solving the perimeter equation vs. trial and
//    adjustment at a fixed number of units per step (slot 10).
//  - Existence was checked, not assumed. Every triangle described here has its
//    angle sum and its triangle inequality confirmed in node, and slot 8 exists
//    precisely to make the point: one of its three lanes describes a triangle
//    that CANNOT be built, and the answer is "none". No lane anywhere in this
//    file quietly relies on an SSA figure being unique.
//  - Figures are coordinate-exact and computed in node, never eyeballed. Slot 7
//    is the only base problem carrying a figure, so it is the only slot with
//    figures here. Each apex sits at $(1.5,\ 1.5 / \tan(\alpha/2))$ for its own
//    apex angle $\alpha$, and the point on the slanted side is the root of
//    $|D - B| = BC$ on that side, not a guess; with the coordinates rounded to
//    four decimals every drawn angle still agrees with its label to better than
//    $0.002^\circ$ and the two ticked pairs are equal to within $3 \times
//    10^{-5}$.
//  - Figure labels are plain text: bare numerals and the letters of the points.
//  - Traps that run through the file, named in CAPS at the end of each solution:
//    READING THE LETTERS OUT OF ORDER, COPYING THE ANGLE AT THE WRONG VERTEX,
//    WRITING THE SECOND TRIANGLE IN ALPHABETICAL ORDER, COUNTING THE SHARED SIDE
//    AS TWO DIFFERENT SIDES, CLAIMING THE DIAGONAL BISECTS AN ANGLE, ADDING THE
//    TWO HALF-SEGMENTS, TREATING VERTICAL ANGLES AS AN EXTRA SIDE, HALVING THE
//    VERTEX ANGLE, SUBTRACTING FROM 90 INSTEAD OF 180, ANSWERING WITH x,
//    SUBTRACTING LENGTHS INSTEAD OF SQUARES, CALLING IT SSA AND GIVING UP,
//    ASSUMING SSA ALWAYS GIVES TWO, FORGETTING TO CHECK THE HEIGHT, COPYING THE
//    BASE ANGLE, TAKING THE GIVEN ANGLE AS THE ANSWER, ANSWERING WITH THE LEG
//    INSTEAD OF THE BASE, and SKIPPING THE TRIANGLE INEQUALITY.

const worksheet = [
  // slot 1 — read two parts off a congruence statement. Lanes: PQR/LMN with
  //          8, 11, 57; DEF/RST reversed so the givens sit in the SECOND
  //          triangle; GHJ/UVW with only the parts that are actually needed.
  //          Each lane carries one decoy length that belongs to a different
  //          letter pair.
  [
    {
      q: 'Given $\\triangle PQR \\cong \\triangle LMN$ with $PQ = 8$, $QR = 11$, and $\\angle M = 57^\\circ$, find $LM$ and $\\angle Q$.',
      answer: '$LM = 8$ and $\\angle Q = 57^\\circ$',
      solution:
        'Read the statement letter by letter: $P \\leftrightarrow L$, $Q \\leftrightarrow M$, $R \\leftrightarrow N$. Side $\\overline{LM}$ is built from the first and second letters of $\\triangle LMN$, so it corresponds to the first and second letters of $\\triangle PQR$, which is $\\overline{PQ}$; therefore $LM = PQ = 8$. The angle at $Q$ corresponds to the angle at $M$, so $\\angle Q = \\angle M = 57^\\circ$. Second route without reading any letters, by moving the triangle instead. Congruent means one triangle can be picked up, turned or flipped as needed, and set down exactly on the other with $P$ landing on $L$, $Q$ on $M$, and $R$ on $N$. Then the segment joining $P$ to $Q$ lands exactly along the segment joining $L$ to $M$, so those two segments have the same length, $8$ ✓; and the corner sitting at $Q$ lands inside the corner at $M$, so those two angles have the same measure, $57^\\circ$ ✓. Notice what the $11$ is doing: $QR$ matches $\\overline{MN}$, not $\\overline{LM}$, so it is a decoy for the first part. READING THE LETTERS OUT OF ORDER gives $LM = 11$ ✗. COPYING THE ANGLE AT THE WRONG VERTEX would answer $\\angle Q$ with $\\angle L$ or $\\angle N$, but $Q$ is the second letter, so it can only match the second letter, $M$ ✗.',
    },
    {
      q: 'In two congruent triangles, $\\triangle DEF \\cong \\triangle RST$. The second triangle has $RS = 6$ and $ST = 9$, and the first has $\\angle F = 48^\\circ$. Find $DE$ and $\\angle T$.',
      answer: '$DE = 6$ and $\\angle T = 48^\\circ$',
      solution:
        'This time the two side lengths were handed to us in the SECOND triangle and the angle in the first, so the correspondence gets used in both directions. The statement pairs $D \\leftrightarrow R$, $E \\leftrightarrow S$, $F \\leftrightarrow T$. So $\\overline{DE}$ (letters one and two) matches $\\overline{RS}$ (letters one and two), giving $DE = RS = 6$, and $\\angle T$ matches $\\angle F$, giving $\\angle T = 48^\\circ$. Second route by superimposition: set $\\triangle DEF$ down on $\\triangle RST$ so that $D$ covers $R$, $E$ covers $S$, and $F$ covers $T$. The side from $D$ to $E$ then lies along the side from $R$ to $S$, so $DE = 6$ ✓, and the corner at $F$ fills the corner at $T$, so $\\angle T = 48^\\circ$ ✓. The direction of the copying never matters — congruence is a two-way street. The $9$ is the decoy again: $ST$ matches $\\overline{EF}$, which is not what was asked. READING THE LETTERS OUT OF ORDER gives $DE = 9$ ✗. COPYING THE ANGLE AT THE WRONG VERTEX gives $\\angle T = \\angle D$ or $\\angle E$ ✗; $T$ is the third letter of $RST$, so it matches the third letter of $DEF$.',
    },
    {
      q: 'Given $\\triangle GHJ \\cong \\triangle UVW$ with $HJ = 13$ and $\\angle U = 64^\\circ$, find $VW$ and $\\angle G$.',
      answer: '$VW = 13$ and $\\angle G = 64^\\circ$',
      solution:
        'The correspondence is $G \\leftrightarrow U$, $H \\leftrightarrow V$, $J \\leftrightarrow W$. Side $\\overline{VW}$ uses the second and third letters of $\\triangle UVW$, so it matches $\\overline{HJ}$, the second and third letters of $\\triangle GHJ$: $VW = HJ = 13$. The angle at $G$ matches the angle at $U$, so $\\angle G = 64^\\circ$. Second route by superimposition: lay $\\triangle GHJ$ onto $\\triangle UVW$ so $G$ falls on $U$, $H$ on $V$, and $J$ on $W$. The side running from $H$ to $J$ comes to rest on the side running from $V$ to $W$, so $VW = 13$ ✓, and the corner at $G$ fills the corner at $U$, so $\\angle G = 64^\\circ$ ✓. This lane gives you exactly the two facts you need and no decoy — which is its own kind of trap, because there is nothing left over to warn you if you pick the wrong pair. READING THE LETTERS OUT OF ORDER makes $\\overline{VW}$ match $\\overline{GH}$, whose length was never given at all ✗ — if your matching leaves you with an unknown, the matching is wrong. COPYING THE ANGLE AT THE WRONG VERTEX gives $\\angle G = \\angle V$ or $\\angle W$ ✗.',
    },
  ],

  // slot 2 — a quadrilateral with two pairs of equal opposite sides, one
  //          diagonal drawn, congruence statement plus criterion. Lanes: PQRS
  //          on diagonal PR, KLMN on the OTHER diagonal LN, and a window frame
  //          WXYZ on diagonal XZ. The named vertex order is what is being
  //          tested, so every lane is checked side by side by side.
  [
    {
      q: 'In quadrilateral $PQRS$, $PQ = RS$ and $PS = RQ$. Diagonal $\\overline{PR}$ is drawn. Write a congruence statement for the two triangles it creates, and name the criterion.',
      answer: '$\\triangle PQR \\cong \\triangle RSP$ by SSS',
      solution:
        'The diagonal cuts the quadrilateral into $\\triangle PQR$ and $\\triangle RSP$, and it belongs to both, so $PR = RP$ for free. Now match the sides one at a time. $PQ = RS$ is given, and $QR = SP$ is the other given fact written backwards ($PS = RQ$). With the shared diagonal that is three pairs of equal sides and no angles at all, so the criterion is SSS. To get the letter order right, list the sides in the same order in both names: $PQ$ with $RS$, $QR$ with $SP$, $RP$ with $PR$ — so the statement is $\\triangle PQR \\cong \\triangle RSP$. Second route by finding one vertex first. In $\\triangle PQR$ the two non-diagonal sides meet at $Q$; in the other triangle they meet at $S$. So $Q$ must correspond to $S$, and the remaining two letters are forced: $P \\leftrightarrow R$ and $R \\leftrightarrow P$, which spells the same statement ✓. COUNTING THE SHARED SIDE AS TWO DIFFERENT SIDES is worth naming: $\\overline{PR}$ and $\\overline{RP}$ are one segment, and it supplies one pair, not two. WRITING THE SECOND TRIANGLE IN ALPHABETICAL ORDER gives $\\triangle PQR \\cong \\triangle PSR$ ✗, which would claim $PQ = PS$, something we were never told. CLAIMING THE DIAGONAL BISECTS AN ANGLE and calling it SAS ✗ has it backwards: equal angles at $P$ are a conclusion you may draw after the congruence, never an ingredient of it.',
    },
    {
      q: 'In quadrilateral $KLMN$, $KL = MN$ and $KN = ML$, and diagonal $\\overline{LN}$ is drawn. Write a congruence statement for the two triangles and name the criterion.',
      answer: '$\\triangle KLN \\cong \\triangle MNL$ by SSS',
      solution:
        'Here the diagonal joins the OTHER two corners, so the triangles are $\\triangle KLN$ and $\\triangle MNL$. The diagonal is shared: $LN = NL$. The givens supply the rest: $KL = MN$, and $NK = LM$ (that is $KN = ML$ read backwards). Three pairs of sides, no angles, so SSS. Line the letters up in matching order — $KL$ with $MN$, $LN$ with $NL$, $NK$ with $LM$ — and the statement reads $\\triangle KLN \\cong \\triangle MNL$. Second route by locating one vertex. In $\\triangle KLN$ the two sides that are not the diagonal meet at $K$; in the other triangle they meet at $M$. So $K \\leftrightarrow M$, and since the diagonal endpoints must swap, $L \\leftrightarrow N$ and $N \\leftrightarrow L$ ✓ — the same statement. A useful habit: read your finished statement back as three equations and check each one is either given or free. $KL = MN$ ✓ given, $LN = NL$ ✓ free, $NK = LM$ ✓ given. WRITING THE SECOND TRIANGLE IN ALPHABETICAL ORDER gives $\\triangle KLN \\cong \\triangle MLN$ ✗, which claims $KL = ML$ — not given, and false in general. COUNTING THE SHARED SIDE AS TWO DIFFERENT SIDES ✗ leaves you thinking you have four pairs.',
    },
    {
      q: 'A quadrilateral window frame $WXYZ$ has $WX = YZ$ and $WZ = YX$. A brace is fitted along the diagonal $\\overline{XZ}$. Write a congruence statement for the two triangles the brace makes, and name the criterion.',
      answer: '$\\triangle WXZ \\cong \\triangle YZX$ by SSS',
      solution:
        'The brace splits the frame into $\\triangle WXZ$ and $\\triangle YZX$, and the brace itself is a side of both: $XZ = ZX$. The frame gives $WX = YZ$ and $ZW = XY$ (that is $WZ = YX$ written backwards). Three pairs of equal sides, so SSS proves the triangles congruent, and matching the sides in order — $WX$ with $YZ$, $XZ$ with $ZX$, $ZW$ with $XY$ — gives $\\triangle WXZ \\cong \\triangle YZX$. Second route by finding the odd vertex out. The two sides of the frame that are not the brace meet at $W$ in one triangle and at $Y$ in the other, so $W \\leftrightarrow Y$; the brace endpoints then have to trade places, $X \\leftrightarrow Z$ and $Z \\leftrightarrow X$ ✓. Practical payoff worth noticing: because the triangles are congruent, the brace divides the frame into two identical halves, so a carpenter can cut one template and use it twice. CLAIMING THE DIAGONAL BISECTS AN ANGLE ✗ — nothing about a brace forces it to split the corner evenly, and the congruence is what proves the corner angles at $W$ and $Y$ equal, not the other way round. WRITING THE SECOND TRIANGLE IN THE ORDER IT IS DRAWN, $\\triangle WXZ \\cong \\triangle YXZ$ ✗, would claim $WX = YX$, which was not given.',
    },
  ],

  // slot 3 — the bowtie: two segments bisecting each other, then a
  //          corresponding side. Lanes: PR/QS at T asking for the far side
  //          (10, not 12 — the section 3.3 learn block works the bowtie with
  //          12, so 12 would test recall of the lesson, not reasoning);
  //          JL/KM at N running the OTHER way, from the far side back to the
  //          near one; AC/BD at M asking for a PERIMETER, so the answer is a
  //          number the congruence only partly supplies.
  [
    {
      q: 'Segments $\\overline{PR}$ and $\\overline{QS}$ bisect each other at $T$, and $PQ = 10$. Find $RS$, and name the criterion that justifies your answer.',
      answer: '$RS = 10$, by SAS',
      solution:
        'Bisecting means $T$ is the midpoint of both segments, so $PT = RT$ and $QT = ST$. The angles $\\angle PTQ$ and $\\angle RTS$ are vertical angles, so they are equal — and each one sits exactly between the two sides just matched. Two sides with the included angle is SAS, so $\\triangle PTQ \\cong \\triangle RTS$, and the corresponding sides $\\overline{PQ}$ and $\\overline{RS}$ are equal: $RS = 10$. Second route with no congruence criterion at all. Rotate the whole figure a half turn about $T$. A half turn about the midpoint of a segment swaps its endpoints, so this rotation sends $P$ to $R$ and $Q$ to $S$; therefore it sends the segment $\\overline{PQ}$ exactly onto the segment $\\overline{RS}$. Rotations do not stretch anything, so $RS = PQ = 10$ ✓. TREATING VERTICAL ANGLES AS AN EXTRA SIDE and calling it SSS ✗ is the standard slip — we know only two pairs of sides here, and the third piece of information is an angle. ADDING THE TWO HALF-SEGMENTS ✗ answers a question nobody asked: $PT + QT$ is a path from $P$ to $Q$ through $T$, and it is longer than $PQ$, not equal to it.',
    },
    {
      q: 'Segments $\\overline{JL}$ and $\\overline{KM}$ bisect each other at $N$. If $LM = 14$, find $JK$, and name the criterion.',
      answer: '$JK = 14$, by SAS',
      solution:
        'This lane runs the other way: the length we are given is on the far side of the crossing from the one we want. It makes no difference. Since $N$ bisects $\\overline{JL}$ we have $NJ = NL$, and since it bisects $\\overline{KM}$ we have $NK = NM$. The angles $\\angle JNK$ and $\\angle LNM$ are vertical, hence equal, and each is included between its own pair of matched sides. By SAS, $\\triangle JNK \\cong \\triangle LNM$, so $JK = LM = 14$. Second route by the half turn about $N$: it swaps $J$ with $L$ and swaps $K$ with $M$, so it carries $\\overline{LM}$ onto $\\overline{JK}$ and the lengths must agree, $JK = 14$ ✓. A check on the correspondence itself: the answer should not depend on which of the two triangles you call "first", and it does not — the half turn is its own undoing, since doing it twice brings every point home. TREATING VERTICAL ANGLES AS AN EXTRA SIDE ✗ turns two S’s into three. MATCHING THE WRONG PAIR OF ENDPOINTS ✗ would set $JK$ equal to $JM$ or $KL$, the two segments the half turn does NOT carry onto it.',
    },
    {
      q: 'Segments $\\overline{AC}$ and $\\overline{BD}$ bisect each other at $M$, with $AM = 6$, $BM = 7$, and $CD = 10$. Find the perimeter of $\\triangle AMB$, and name the criterion that supplies the missing side.',
      answer: '$23$, by SAS',
      solution:
        'Two of the three sides of $\\triangle AMB$ are handed to us: $AM = 6$ and $BM = 7$. The third one, $\\overline{AB}$, has to be earned. Bisecting gives $AM = CM$ and $BM = DM$, and the vertical angles at $M$ are equal and included, so $\\triangle AMB \\cong \\triangle CMD$ by SAS; the corresponding side $\\overline{AB}$ therefore equals $\\overline{CD} = 10$. The perimeter is $6 + 7 + 10 = 23$. Second route by the half turn about $M$, which needs no criterion: it sends $C$ to $A$ and $D$ to $B$, so it lays $\\overline{CD}$ down exactly on $\\overline{AB}$ and $AB = 10$ ✓, giving the same perimeter. Does this triangle exist? Check the triangle inequality on $6$, $7$, $10$: $6 + 7 = 13 > 10$ ✓, $6 + 10 = 16 > 7$ ✓, $7 + 10 = 17 > 6$ ✓ — a genuine triangle. ANSWERING WITH THE MISSING SIDE ALONE gives $10$ ✗; the question asked for a perimeter. USING THE FULL DIAGONALS gives $12 + 14 + 10 = 36$ ✗, but $\\triangle AMB$ reaches only as far as $M$, so it uses the halves. TREATING VERTICAL ANGLES AS AN EXTRA SIDE ✗ again mislabels this as SSS.',
    },
  ],

  // slot 4 — isosceles triangle, vertex angle and base angles. Lanes:
  //          46 -> 67 (vertex given), 52 -> 76 (BASE given, so the question
  //          runs backwards), 96 -> 42 (obtuse vertex, so the base angles come
  //          out small). Second route is always the altitude to the base.
  [
    {
      q: 'The two equal sides of an isosceles triangle meet at an angle of $46^\\circ$. How large is each of the other two angles?',
      answer: '$67^\\circ$',
      solution:
        'The angle where the two equal sides meet is the vertex angle, and the other two angles are the base angles, which are equal to each other. All three add to $180^\\circ$, so the two base angles together make $180^\\circ - 46^\\circ = 134^\\circ$, and each one is $134^\\circ \\div 2 = 67^\\circ$. Second route by the altitude, which never subtracts from $180$ at all. Drop the segment from the vertex to the midpoint of the base: it splits the triangle into two congruent right triangles (SSS: the two equal sides, the two half-bases, and the shared segment). Each right triangle contains a right angle, half the vertex angle, and one base angle, so the base angle is $90^\\circ - \\tfrac{46^\\circ}{2} = 90^\\circ - 23^\\circ = 67^\\circ$ ✓. Rebuild to be sure: $46 + 67 + 67 = 180$ ✓. HALVING THE VERTEX ANGLE gives $23^\\circ$ ✗ — that is half of the vertex angle, which is one piece of the right triangle, not the base angle. SUBTRACTING FROM 180 AND STOPPING gives $134^\\circ$ ✗, the two base angles added together; a single angle of $134^\\circ$ plus another one the same size would already blow past $180^\\circ$.',
    },
    {
      q: 'Each base angle of an isosceles triangle measures $52^\\circ$. Find its vertex angle.',
      answer: '$76^\\circ$',
      solution:
        'This one runs backwards: the equal angles are given and the odd one out is wanted. The two base angles use up $2 \\times 52^\\circ = 104^\\circ$ of the $180^\\circ$, so the vertex angle is $180^\\circ - 104^\\circ = 76^\\circ$. Second route by the altitude to the base. It cuts the triangle into two congruent right triangles, each holding a right angle, one base angle, and half the vertex angle. So half the vertex angle is $90^\\circ - 52^\\circ = 38^\\circ$, and the whole vertex angle is $2 \\times 38^\\circ = 76^\\circ$ ✓. Rebuild: $52 + 52 + 76 = 180$ ✓. A shape check: the vertex angle came out larger than either base angle, so the side opposite it — the base — is the longest side of this triangle, which matches the picture you get from two short equal sides splayed fairly wide. FORGETTING TO DOUBLE THE BASE ANGLE gives $128^\\circ$ ✗, and then $128 + 52 + 52 = 232$ ✗. HALVING AT THE END gives $38^\\circ$ ✗, which is only half the vertex angle.',
    },
    {
      q: 'A roof truss is an isosceles triangle whose peak angle measures $96^\\circ$. Find each of its two base angles.',
      answer: '$42^\\circ$',
      solution:
        'The peak angle is the vertex angle, so the two equal base angles share what is left of $180^\\circ$: together they make $180^\\circ - 96^\\circ = 84^\\circ$, and each is $84^\\circ \\div 2 = 42^\\circ$. Second route by the altitude from the peak to the midpoint of the base — the vertical post of the truss. It makes two congruent right triangles, each containing $90^\\circ$, half the peak angle, and one base angle, so each base angle is $90^\\circ - \\tfrac{96^\\circ}{2} = 90^\\circ - 48^\\circ = 42^\\circ$ ✓. Rebuild: $96 + 42 + 42 = 180$ ✓. Note the shape this lane is teaching: the peak is obtuse, so the truss is wide and low, and its base angles have to be well under $45^\\circ$ — $42^\\circ$ fits. SUBTRACTING FROM 90 INSTEAD OF 180 is the trap here, because $96^\\circ$ is close enough to $90^\\circ$ to make it tempting; it gives a negative answer ✗, which is a loud signal that the wrong total was used. HALVING THE VERTEX ANGLE gives $48^\\circ$ ✗, half the peak rather than a base angle — and $48 + 48 + 96 = 192$ ✗.',
    },
  ],

  // slot 5 — two corresponding parts written as expressions, set equal. Lanes:
  //          angles 2x+16 = 3x -> x = 16, 48 (moved off 57, which slot 1 lane
  //          1 already answers in the same round); SIDES 5y-4 = 2y+11 -> y = 5,
  //          21; angles 7x-2 = 5x+16 -> x = 9, 61, and this lane asks for the
  //          angle in the OTHER triangle. The second route always eliminates
  //          the unknown between scaled copies, so the measure appears without
  //          x ever being found.
  [
    {
      q: '$\\triangle PQR \\cong \\triangle XYZ$, with $\\angle Q = (2x + 16)^\\circ$ and $\\angle Y = (3x)^\\circ$. Find $x$ and the measure of $\\angle Q$.',
      answer: '$x = 16$ and $\\angle Q = 48^\\circ$',
      solution:
        'The correspondence pairs $Q$ with $Y$ (both are second letters), and corresponding angles of congruent triangles are equal, so $2x + 16 = 3x$. Subtract $2x$ from both sides: $x = 16$. Then $\\angle Q = 2(16) + 16 = 48^\\circ$, and the check $\\angle Y = 3(16) = 48^\\circ$ ✓ agrees. Second route that finds the angle without ever finding $x$. Call the common measure $m$. Then $3(2x + 16) - 2(3x) = 6x + 48 - 6x = 48$, with the $x$ terms cancelling exactly; but the same combination in terms of $m$ is $3m - 2m = m$. So $m = 48$, giving $\\angle Q = 48^\\circ$ ✓ straight away — and $x$ can then be recovered from either expression if you want it. ANSWERING WITH x gives $16^\\circ$ ✗; $x$ is a number in an expression, not the angle — and this lane makes the slip loud, because here $x$ and the $16$ inside the expression happen to match. STOPPING AFTER FINDING x is the quiet version of the same mistake — the question asks for two things.',
    },
    {
      q: '$\\triangle DEF \\cong \\triangle GHK$, with $DE = 5y - 4$ and $GH = 2y + 11$. Find $y$ and the length $DE$.',
      answer: '$y = 5$ and $DE = 21$',
      solution:
        'This lane uses sides rather than angles, but the machinery is identical: $\\overline{DE}$ and $\\overline{GH}$ are both built from the first two letters, so they correspond and are equal. That gives $5y - 4 = 2y + 11$. Subtract $2y$: $3y - 4 = 11$, so $3y = 15$ and $y = 5$. Then $DE = 5(5) - 4 = 21$, and $GH = 2(5) + 11 = 21$ ✓ agrees. Second route eliminating $y$ between scaled copies. With $m$ for the common length, $2(5y - 4) - 5(2y + 11) = 10y - 8 - 10y - 55 = -63$, while the same combination in $m$ is $2m - 5m = -3m$. So $-3m = -63$ and $m = 21$ ✓, with $y$ never used. A reasonableness check: both expressions must be positive lengths at the answer, and $21 > 0$ ✓ for each. ANSWERING WITH y gives $5$ ✗ — and note how easily that hides here, because $5$ is also a coefficient in the problem. ADDING THE EXPRESSIONS instead of equating them gives $7y + 7 = 42$ ✗, which answers no question at all: equal quantities are set equal, not summed.',
    },
    {
      q: '$\\triangle ABC \\cong \\triangle RST$, with $\\angle C = (7x - 2)^\\circ$ and $\\angle T = (5x + 16)^\\circ$. Find $x$ and the measure of $\\angle T$.',
      answer: '$x = 9$ and $\\angle T = 61^\\circ$',
      solution:
        '$C$ and $T$ are both third letters, so they correspond and their angles are equal: $7x - 2 = 5x + 16$. Subtract $5x$: $2x - 2 = 16$, so $2x = 18$ and $x = 9$. The question asks for $\\angle T$, which is $5(9) + 16 = 61^\\circ$; the other expression confirms it, $7(9) - 2 = 63 - 2 = 61^\\circ$ ✓. Second route with $x$ eliminated. Writing $m$ for the shared measure, $5(7x - 2) - 7(5x + 16) = 35x - 10 - 35x - 112 = -122$, and in terms of $m$ the same combination is $5m - 7m = -2m$. Hence $-2m = -122$ and $m = 61$ ✓. Because the two angles are equal, it does not matter which expression you substitute into — a useful safety net, and a reason to do both. ANSWERING WITH x gives $9^\\circ$ ✗. USING THE WRONG EXPRESSION FOR THE ANGLE ASKED FOR is harmless here precisely because the two expressions agree at $x = 9$; if they had not agreed, that disagreement would be the signal that the arithmetic went wrong somewhere ✗.',
    },
  ],

  // slot 6 — HL plus the third side of a right triangle. Lanes: 29/20 -> 21,
  //          30/18 -> 24, 26/24 -> 10. Every lane is a genuine Pythagorean
  //          triple, verified in node, and the second route is always
  //          b^2 = (c-a)(c+a). The 25/7 -> 24 lane was rejected because the
  //          challenge set already runs those exact numbers in the same
  //          attempt round, and the perimeter ask was rejected because the
  //          base chapter reserves the HL-perimeter question for its
  //          challenge set — this slot keeps to the missing side.
  [
    {
      q: 'Two right triangles are known to have hypotenuses of the same length, $29$, and one pair of legs of the same length, $20$. Which criterion proves them congruent, and how long is the third side of each?',
      answer: 'HL; the third side is $21$',
      solution:
        'For right triangles there is a special criterion: matching hypotenuses and one matching pair of legs is enough, and it is called Hypotenuse-Leg, HL. (It is not SSA sneaking through the back door — the right angle is what removes the ambiguity, since the third side of a right triangle is completely determined by the other two.) That third side comes from the Pythagorean Theorem: $b^2 = 29^2 - 20^2 = 841 - 400 = 441$, so $b = \\sqrt{441} = 21$. Second route by the difference of squares, which avoids squaring the big number: $b^2 = (29 - 20)(29 + 20) = 9 \\times 49 = 441$, so $b = 21$ ✓. Check the triple directly: $20^2 + 21^2 = 400 + 441 = 841 = 29^2$ ✓. Also check the shape: the hypotenuse must be the longest side, and $29 > 21 > 20$ ✓. SUBTRACTING LENGTHS INSTEAD OF SQUARES gives $29 - 20 = 9$ ✗, and then $20^2 + 9^2 = 481 \\ne 841$ ✗. CALLING IT SSA AND GIVING UP ✗ misses that a right angle is included information of a special kind — HL is a genuine criterion, not a wish.',
    },
    {
      q: 'A pair of right triangles share the same hypotenuse length $30$ and the same leg length $18$. Name the criterion that makes them congruent, then find the remaining leg of each triangle.',
      answer: 'HL; the remaining leg is $24$',
      solution:
        'Equal hypotenuses plus one equal pair of legs in right triangles is exactly the Hypotenuse-Leg criterion, HL, so the triangles are congruent — and in particular their remaining legs are equal, which is why the question can ask for "the" remaining leg as a single number. The Pythagorean Theorem finds it: $b^2 = 30^2 - 18^2 = 900 - 324 = 576$, so $b = \\sqrt{576} = 24$. Second route by the difference of squares: $b^2 = (30 - 18)(30 + 18) = 12 \\times 48 = 576$, so $b = 24$ ✓ — and $12 \\times 48$ is easier in the head than squaring. Verify the triple: $18^2 + 24^2 = 324 + 576 = 900 = 30^2$ ✓, and dividing every side by $6$ reveals an old friend, the $3$-$4$-$5$ right triangle ✓. SUBTRACTING LENGTHS INSTEAD OF SQUARES gives $30 - 18 = 12$ ✗; the check $18^2 + 12^2 = 468 \\ne 900$ ✗ catches it at once. ADDING THE SQUARES gives $\\sqrt{900 + 324} = \\sqrt{1224}$ ✗, not even a whole number — that formula is for finding a hypotenuse, and the hypotenuse here is already known.',
    },
    {
      q: 'Two right triangles each have a hypotenuse of $26$ and a leg of $24$, and these are the only measurements given. Name the criterion proving the triangles congruent and find the missing leg.',
      answer: 'HL; the missing leg is $10$',
      solution:
        'Hypotenuse-Leg (HL) is the criterion: in right triangles, one matching hypotenuse and one matching leg force everything else. The missing leg is $b$ with $b^2 = 26^2 - 24^2 = 676 - 576 = 100$, so $b = 10$. Second route by the difference of squares, which here is much lighter arithmetic: $b^2 = (26 - 24)(26 + 24) = 2 \\times 50 = 100$, so $b = 10$ ✓. Confirm the triple: $10^2 + 24^2 = 100 + 576 = 676 = 26^2$ ✓, and $26 > 24 > 10$, so the hypotenuse is the longest side as it must be ✓. This lane is the one where the given leg is nearly as long as the hypotenuse, which is exactly when SUBTRACTING LENGTHS INSTEAD OF SQUARES looks most plausible: it gives $2$ ✗, and $2^2 + 24^2 = 580 \\ne 676$ ✗. ASSUMING THE MISSING SIDE IS THE HYPOTENUSE gives $\\sqrt{26^2 + 24^2} = \\sqrt{1252}$ ✗, not even a whole number — the hypotenuse was already named.',
    },
  ],

  // slot 7 — the base problem's figure lane. Apex angle alpha, a point on one
  //          slanted side making a second isosceles triangle on the base:
  //          angle ABD = (180 - 3*alpha)/2. Lanes: alpha = 50 -> 15,
  //          alpha = 44 -> 24, and a REVERSED lane where the 18 degrees is
  //          given and the apex angle 48 is wanted. Coordinates computed in
  //          node; the drawn apex angles read 49.9995, 44.0003, and the drawn
  //          18 degree angle reads 18.0008.
  [
    {
      q: 'In $\\triangle KLM$, $KL = KM$ and $\\angle K = 50^\\circ$. Point $P$ lies on $\\overline{KM}$ with $LP = LM$. Find $\\angle KLP$.',
      fig: {
        view: [-1, -1, 4, 4.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [1.5, 3.2168]], fill: false },
          { t: 'seg', a: [0, 0], b: [1.9284, 2.2981] },
          { t: 'point', p: [0, 0], label: 'L', dx: -10, dy: 10 },
          { t: 'point', p: [3, 0], label: 'M', dx: 10, dy: 10 },
          { t: 'point', p: [1.5, 3.2168], label: 'K', dx: 0, dy: -10 },
          { t: 'point', p: [1.9284, 2.2981], label: 'P', dx: 12, dy: -6 },
          { t: 'tick', a: [1.5, 3.2168], b: [0, 0], n: 1 },
          { t: 'tick', a: [1.5, 3.2168], b: [3, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [1.9284, 2.2981], n: 2 },
          { t: 'tick', a: [0, 0], b: [3, 0], n: 2 },
          { t: 'angle', at: [1.5, 3.2168], from: [0, 0], to: [3, 0], r: 0.9, label: '50' },
        ],
      },
      answer: '$\\angle KLP = 15^\\circ$',
      solution:
        'Work outward from the big triangle. $KL = KM$ makes $\\triangle KLM$ isosceles with apex $K$, so its base angles are equal: $\\angle KLM = \\angle KML = (180^\\circ - 50^\\circ) \\div 2 = 65^\\circ$. Now the small triangle: $LP = LM$ makes $\\triangle LPM$ isosceles with apex $L$, so its base angles at $P$ and $M$ are equal, and the one at $M$ is the $65^\\circ$ we just found. That leaves $\\angle PLM = 180^\\circ - 65^\\circ - 65^\\circ = 50^\\circ$. Finally $\\angle KLP$ is what is left of the big base angle after $\\angle PLM$ is taken out: $65^\\circ - 50^\\circ = 15^\\circ$. Second route through an exterior angle instead of the inner triangle. In $\\triangle KLP$, extend $\\overline{KP}$ to $M$: the angle $\\angle LPM$ is the exterior angle at $P$, so it equals the two remote interior angles added, $\\angle K + \\angle KLP = 50^\\circ + \\angle KLP$. But $\\angle LPM = \\angle LMP = 65^\\circ$ because $\\triangle LPM$ is isosceles, so $50^\\circ + \\angle KLP = 65^\\circ$ and $\\angle KLP = 15^\\circ$ ✓. Rebuild every angle: $\\triangle KLP$ has $50 + 15 + 115 = 180$ ✓ (the angle at $P$ inside it is $180 - 65 = 115$), and $\\triangle LPM$ has $50 + 65 + 65 = 180$ ✓. COPYING THE BASE ANGLE gives $65^\\circ$ ✗, the whole angle at $L$ rather than the sliver above $\\overline{LP}$. TAKING THE GIVEN ANGLE AS THE ANSWER gives $50^\\circ$ ✗, which is $\\angle PLM$, the other piece of that same base angle.',
    },
    {
      q: 'In $\\triangle XYZ$, $XY = XZ$ and $\\angle X = 44^\\circ$. Point $W$ lies on $\\overline{XZ}$ with $YW = YZ$. Find $\\angle XYW$.',
      fig: {
        view: [-1, -1, 4, 4.7],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [1.5, 3.7126]], fill: false },
          { t: 'seg', a: [0, 0], b: [2.158, 2.084] },
          { t: 'point', p: [0, 0], label: 'Y', dx: -10, dy: 10 },
          { t: 'point', p: [3, 0], label: 'Z', dx: 10, dy: 10 },
          { t: 'point', p: [1.5, 3.7126], label: 'X', dx: 0, dy: -10 },
          { t: 'point', p: [2.158, 2.084], label: 'W', dx: 12, dy: -6 },
          { t: 'tick', a: [1.5, 3.7126], b: [0, 0], n: 1 },
          { t: 'tick', a: [1.5, 3.7126], b: [3, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [2.158, 2.084], n: 2 },
          { t: 'tick', a: [0, 0], b: [3, 0], n: 2 },
          { t: 'angle', at: [1.5, 3.7126], from: [0, 0], to: [3, 0], r: 0.9, label: '44' },
        ],
      },
      answer: '$\\angle XYW = 24^\\circ$',
      solution:
        'Start with the big isosceles triangle. $XY = XZ$ gives equal base angles, so $\\angle XYZ = \\angle XZY = (180^\\circ - 44^\\circ) \\div 2 = 68^\\circ$. Then the small one: $YW = YZ$ makes $\\triangle YWZ$ isosceles with apex $Y$, so $\\angle YWZ = \\angle YZW = 68^\\circ$ and $\\angle WYZ = 180^\\circ - 68^\\circ - 68^\\circ = 44^\\circ$. Subtracting that from the base angle at $Y$ leaves $\\angle XYW = 68^\\circ - 44^\\circ = 24^\\circ$. Second route by the exterior angle of $\\triangle XYW$ at $W$. Since $X$, $W$, $Z$ lie on one line with $W$ between them, $\\angle YWZ$ is that exterior angle, so it equals $\\angle X + \\angle XYW = 44^\\circ + \\angle XYW$. The isosceles small triangle already told us $\\angle YWZ = 68^\\circ$, so $\\angle XYW = 68^\\circ - 44^\\circ = 24^\\circ$ ✓. Notice the pattern the two lanes share: $\\angle WYZ$ always comes out equal to the apex angle, so the answer is always (base angle) minus (apex angle). Rebuild: $\\triangle XYW$ has $44 + 24 + 112 = 180$ ✓. COPYING THE BASE ANGLE gives $68^\\circ$ ✗. TAKING THE GIVEN ANGLE AS THE ANSWER gives $44^\\circ$ ✗ — that is $\\angle WYZ$, the lower piece of the angle at $Y$, not the upper one.',
    },
    {
      q: 'In $\\triangle PQR$, $PQ = PR$, and $S$ is a point on $\\overline{PR}$ with $QS = QR$. If $\\angle PQS = 18^\\circ$, find $\\angle P$.',
      fig: {
        view: [-1, -1, 4, 4.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [1.5, 3.3691]], fill: false },
          { t: 'seg', a: [0, 0], b: [2.0074, 2.2294] },
          { t: 'point', p: [0, 0], label: 'Q', dx: -10, dy: 10 },
          { t: 'point', p: [3, 0], label: 'R', dx: 10, dy: 10 },
          { t: 'point', p: [1.5, 3.3691], label: 'P', dx: 0, dy: -10 },
          { t: 'point', p: [2.0074, 2.2294], label: 'S', dx: 12, dy: -6 },
          { t: 'tick', a: [1.5, 3.3691], b: [0, 0], n: 1 },
          { t: 'tick', a: [1.5, 3.3691], b: [3, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [2.0074, 2.2294], n: 2 },
          { t: 'tick', a: [0, 0], b: [3, 0], n: 2 },
          { t: 'angle', at: [0, 0], from: [1.5, 3.3691], to: [2.0074, 2.2294], r: 1.1, label: '18' },
        ],
      },
      answer: '$\\angle P = 48^\\circ$',
      solution:
        'This lane runs backwards: the sliver is given and the apex angle is wanted. Write $\\angle P = a$. The big triangle is isosceles ($PQ = PR$), so its base angles are $\\angle PQR = \\angle PRQ = \\dfrac{180^\\circ - a}{2}$. The small triangle is isosceles too ($QS = QR$), so $\\angle QSR = \\angle QRS = \\dfrac{180^\\circ - a}{2}$ as well, which forces $\\angle SQR = 180^\\circ - 2\\left(\\dfrac{180^\\circ - a}{2}\\right) = a$. The sliver is the base angle minus that: $\\angle PQS = \\dfrac{180^\\circ - a}{2} - a = 18^\\circ$. Multiply through by $2$: $180^\\circ - a - 2a = 36^\\circ$, so $3a = 144^\\circ$ and $a = 48^\\circ$. Second route with no algebra, by the exterior angle. In $\\triangle PQS$, the angle $\\angle QSR$ is exterior at $S$, so $\\angle QSR = \\angle P + \\angle PQS = a + 18^\\circ$. But $\\angle QSR$ equals the base angle $\\angle QRS$ of the big triangle, which is $\\dfrac{180^\\circ - a}{2}$. Setting those equal and clearing the fraction gives $2a + 36^\\circ = 180^\\circ - a$, hence $a = 48^\\circ$ ✓. Check the whole picture at $a = 48$: base angles $66^\\circ$, $\\angle SQR = 48^\\circ$, sliver $66 - 48 = 18$ ✓, and $\\triangle PQS$ closes as $48 + 18 + 114 = 180$ ✓. FORGETTING THAT THE SLIVER IS A DIFFERENCE and setting $\\angle P = 18^\\circ$ ✗ leaves the picture inconsistent: with $a = 18$ the base angles would be $81^\\circ$ and the sliver $63^\\circ$, nothing like the thin wedge drawn. TRIPLING OR HALVING AT THE WRONG STEP gives $54^\\circ$ or $36^\\circ$ ✗; only $48^\\circ$ satisfies $\\tfrac{180 - a}{2} - a = 18$.',
    },
  ],

  // slot 8 — the SSA count. This is the slot where a triangle can fail to
  //          exist, so the three lanes deliberately land on THREE DIFFERENT
  //          answers: two, one, and none. Every lane was checked by intersecting
  //          the circle of the swinging side with the ray, and counting the
  //          roots with a positive coordinate: 30/16/10 -> roots at 7.856 and
  //          19.856; 30/12/15 -> a single positive root at 24.140 (the other is
  //          negative, i.e. behind the vertex); 30/20/8 -> height 10 > 8, no
  //          roots at all.
  [
    {
      q: 'A triangle is described by $\\angle P = 30^\\circ$, $PQ = 16$, and $QR = 10$. How many different (non-congruent) triangles fit this description? Explain.',
      answer: 'Two',
      solution:
        'The given angle is at $P$, the given side $\\overline{PQ}$ touches it, and the other given side $\\overline{QR}$ is across from it — the SSA arrangement, so counting is the whole job. Put $P$ at a corner, draw one ray for the base, and place $Q$ on the other ray at distance $16$. The shortest possible reach from $Q$ down to the base ray is the height, $h = 16 \\sin 30^\\circ = 8$. Now swing the side of length $10$ from $Q$: since $10 > 8$, it reaches the base ray, and since $10 < 16$ it lands on the far side of the foot in both directions, so it meets the ray at two different points. Two non-congruent triangles fit. Second route by the swing rule, which sorts SSA into three cases: if the swinging side is shorter than the height, none; if it is between the height and the fixed side, two; if it is at least as long as the fixed side, exactly one. Here $8 < 10 < 16$, the middle case, so the answer is two ✓. Concretely, the two feet sit at distances $16\\cos 30^\\circ \\pm \\sqrt{10^2 - 8^2} = 13.86 \\pm 6$ from $P$, that is at about $7.86$ and $19.86$ ✓ — both in front of $P$, so both are legal. CALLING IT SAS AND ANSWERING ONE ✗ ignores that the $30^\\circ$ angle is not between the two given sides. ASSUMING SSA ALWAYS GIVES TWO ✗ is the flip side of the same carelessness, and the other two lanes of this problem show why it fails.',
    },
    {
      q: 'A triangle has $\\angle D = 30^\\circ$, $DE = 12$, and $EF = 15$. How many non-congruent triangles match this description? Explain.',
      answer: 'One',
      solution:
        'Again the angle is not between the two sides, so this is SSA and the count has to be argued. Place $D$ at the corner with the base ray running out from it, and put $E$ on the other ray at distance $12$; the height from $E$ down to the base ray is $12 \\sin 30^\\circ = 6$. The swinging side $\\overline{EF}$ has length $15$, which clears the height easily — but it is also LONGER than $DE = 12$, and that is what settles it. A circle of radius $15$ centred at $E$ does cross the base line twice, at distances $12\\cos 30^\\circ \\pm \\sqrt{15^2 - 6^2} = 10.39 \\pm 13.75$ from $D$; the two crossings are at about $24.14$ and $-3.36$. The negative one lies behind $D$, on the opposite ray, so it does not make a triangle with the given $30^\\circ$ angle at $D$. Exactly one triangle fits. Second route by the swing rule: when the swinging side is at least as long as the fixed side, exactly one triangle exists, because one of the two circle crossings always falls behind the vertex. Since $15 \\ge 12$, the answer is one ✓. FORGETTING THAT ONE CROSSING CAN FALL BEHIND THE VERTEX gives two ✗. COMPARING ONLY WITH THE HEIGHT gives two as well ✗ — passing the height test is necessary but not sufficient; the comparison with the fixed side is the second half of the rule.',
    },
    {
      q: 'How many different (non-congruent) triangles have $\\angle X = 30^\\circ$, $XY = 20$, and $YZ = 8$? Explain.',
      answer: 'None',
      solution:
        'Set it up the same way: the $30^\\circ$ angle at $X$, one ray as the base, and $Y$ on the other ray at distance $20$. The closest the point $Z$ can ever be to $Y$ while sitting on the base ray is the perpendicular distance from $Y$ down to that ray, which is $h = 20 \\sin 30^\\circ = 10$. The side $\\overline{YZ}$ is supposed to be $8$, and $8 < 10$ — it is too short to reach the base at all. No such triangle exists, so the answer is none. Second route by the swing rule, whose first case is exactly this: if the swinging side is shorter than the height, the circle centred at $Y$ misses the base line entirely and there are zero triangles ✓. You can also see it as a circle-and-line question: a circle of radius $8$ about a centre standing $10$ away from a line cannot touch that line ✓. This lane is the reason the question is worth asking at all. A described triangle is not guaranteed to exist, and "how many" has three possible answers, not one. ASSUMING SSA ALWAYS GIVES TWO gives two ✗. FORGETTING TO CHECK THE HEIGHT gives one or two ✗ — whichever it gives, it is describing a triangle nobody can draw. TRUSTING A SKETCH ✗ is the deepest version of the trap: a hand drawing of "a $30^\\circ$ angle with sides $20$ and $8$" always closes up, because the hand quietly stretches the $8$.',
    },
  ],

  // slot 9 — a point on the base making a second isosceles triangle, with the
  //          angle at that point given: angle BAC = 180 - theta. Lanes:
  //          theta = 104 -> 76, theta = 110 -> 70, and a REVERSED lane where
  //          the apex 84 is given and theta = 96 is wanted. Every lane keeps
  //          theta < 120, which is what makes the interior point land strictly
  //          between the two base vertices; all four angles of each figure were
  //          rebuilt in coordinates before the key was written.
  [
    {
      q: 'In $\\triangle GHJ$, $GH = GJ$. Point $K$ lies on $\\overline{HJ}$ with $GK = HK$, and $\\angle GKJ = 104^\\circ$. Find $\\angle HGJ$.',
      answer: '$\\angle HGJ = 76^\\circ$',
      solution:
        'The point $K$ sits on the base, so $\\angle GKH$ and $\\angle GKJ$ are a linear pair: $\\angle GKH = 180^\\circ - 104^\\circ = 76^\\circ$. In $\\triangle GHK$ the sides $GK$ and $HK$ are equal, so the angles opposite them are equal, and together with the $76^\\circ$ they fill $180^\\circ$: each is $(180^\\circ - 76^\\circ) \\div 2 = 52^\\circ$. In particular $\\angle GHK = 52^\\circ$, and that angle is the base angle $\\angle GHJ$ of the big triangle. Since $GH = GJ$, the other base angle matches: $\\angle GJH = 52^\\circ$. So $\\angle HGJ = 180^\\circ - 52^\\circ - 52^\\circ = 76^\\circ$. Second route through the exterior angle, skipping the linear pair entirely. In $\\triangle GHK$, the angle $\\angle GKJ$ is exterior at $K$, so it equals the sum of the two remote interior angles $\\angle KGH$ and $\\angle KHG$ — and those two are equal because $GK = HK$. So each is $104^\\circ \\div 2 = 52^\\circ$, giving the base angle straight away, and $\\angle HGJ = 180^\\circ - 2(52^\\circ) = 76^\\circ$ ✓. Notice the shortcut the two routes reveal: the answer is always $180^\\circ$ minus the given angle. Rebuild: $52 + 52 + 76 = 180$ ✓, and $\\triangle GHK$ closes as $52 + 52 + 76 = 180$ ✓. COPYING THE GIVEN ANGLE gives $104^\\circ$ ✗. ANSWERING WITH THE BASE ANGLE gives $52^\\circ$ ✗ — that is $\\angle GHJ$, not the angle at $G$.',
    },
    {
      q: 'In $\\triangle MNP$, $MN = MP$. Point $Q$ lies on $\\overline{NP}$ with $MQ = NQ$, and $\\angle MQP = 110^\\circ$. Find $\\angle NMP$.',
      answer: '$\\angle NMP = 70^\\circ$',
      solution:
        'Because $Q$ lies on segment $\\overline{NP}$, the angles $\\angle MQN$ and $\\angle MQP$ form a linear pair, so $\\angle MQN = 180^\\circ - 110^\\circ = 70^\\circ$. The triangle $\\triangle MNQ$ has $MQ = NQ$, so its other two angles are equal and share what is left: each is $(180^\\circ - 70^\\circ) \\div 2 = 55^\\circ$. That makes $\\angle MNQ = 55^\\circ$, which is the base angle $\\angle MNP$ of the big isosceles triangle; its partner $\\angle MPN$ is $55^\\circ$ too, since $MN = MP$. Therefore $\\angle NMP = 180^\\circ - 55^\\circ - 55^\\circ = 70^\\circ$. Second route by the exterior angle at $Q$. In $\\triangle MNQ$, the angle $\\angle MQP$ is exterior, so it equals the two remote interior angles added, and those two are equal by $MQ = NQ$: each is $110^\\circ \\div 2 = 55^\\circ$ ✓, and the apex follows as $180^\\circ - 110^\\circ = 70^\\circ$ ✓. Rebuild: $55 + 55 + 70 = 180$ ✓. A structural check worth making: $\\angle QMP = 180^\\circ - 110^\\circ - 55^\\circ = 15^\\circ$, a positive angle, which confirms $Q$ really does lie strictly between $N$ and $P$ rather than beyond $P$ ✓. COPYING THE GIVEN ANGLE gives $110^\\circ$ ✗, and it cannot be right: $110^\\circ$ plus two base angles of $55^\\circ$ would come to $220^\\circ$. ANSWERING WITH THE BASE ANGLE gives $55^\\circ$ ✗.',
    },
    {
      q: 'In $\\triangle XYZ$, $XY = XZ$. Point $W$ lies on $\\overline{YZ}$ with $XW = YW$. If $\\angle YXZ = 84^\\circ$, find $\\angle XWZ$.',
      answer: '$\\angle XWZ = 96^\\circ$',
      solution:
        'This lane is the reverse of the other two: the apex is given and the angle at the interior point is wanted. Since $XY = XZ$, the base angles are $\\angle XYZ = \\angle XZY = (180^\\circ - 84^\\circ) \\div 2 = 48^\\circ$. Now look at $\\triangle XYW$: it has $XW = YW$, so the angles opposite those sides are equal, and one of them is $\\angle XYW$, which is the base angle $48^\\circ$. Hence $\\angle YXW = 48^\\circ$ as well, and $\\angle XWY = 180^\\circ - 48^\\circ - 48^\\circ = 84^\\circ$. Because $W$ lies on $\\overline{YZ}$, the angle we want is the supplement: $\\angle XWZ = 180^\\circ - 84^\\circ = 96^\\circ$. Second route by the exterior angle, which reaches the answer without ever computing $\\angle XWY$. In $\\triangle XYW$ the angle $\\angle XWZ$ is exterior at $W$, so it equals $\\angle YXW + \\angle XYW$; both of those are $48^\\circ$ because that triangle is isosceles, so $\\angle XWZ = 48^\\circ + 48^\\circ = 96^\\circ$ ✓. Consistency with the other lanes: there the answer was $180^\\circ$ minus the given angle at the interior point, and here it is $180^\\circ - 84^\\circ$ again, the same relationship read backwards ✓. Also check $W$ is genuinely between $Y$ and $Z$: $\\angle WXZ = 84^\\circ - 48^\\circ = 36^\\circ > 0$ ✓. COPYING THE GIVEN ANGLE gives $84^\\circ$ ✗, which is $\\angle XWY$ on the other side of $W$. HALVING THE APEX gives $42^\\circ$ ✗.',
    },
  ],

  // slot 10 — isosceles triangle with expressions for the sides and a given
  //           perimeter. Lanes: legs 3x-4, base x+6, perimeter 54 -> base 14;
  //           legs 2y+1, base 3y-2, perimeter 49, asking for the LEGS -> 15;
  //           and a lane where BOTH given expressions are the equal sides, so
  //           they are set equal to each other and the base falls out of the
  //           perimeter -> 22. Every lane's three sides were run through the
  //           triangle inequality in node.
  [
    {
      q: 'In $\\triangle PQR$, $\\angle Q = \\angle R$, $PQ = 3x - 4$, and $QR = x + 6$. The perimeter is $54$. Find $QR$.',
      answer: '$QR = 14$',
      solution:
        'Equal angles mean equal opposite sides. The side opposite $\\angle Q$ is $\\overline{PR}$ and the side opposite $\\angle R$ is $\\overline{PQ}$, so $PR = PQ = 3x - 4$; the remaining side $\\overline{QR} = x + 6$ is the base. Add them: $2(3x - 4) + (x + 6) = 7x - 2$, and that equals the perimeter $54$, so $7x = 56$ and $x = 8$. Then $QR = 8 + 6 = 14$. Second route by trial and adjustment, with no equation solved. The perimeter as a function of $x$ climbs by $7$ for every $1$ added to $x$, since the two legs contribute $3$ each and the base $1$. Try $x = 7$: the sides are $17$, $17$, $13$, a perimeter of $47$ — that is $7$ short of $54$, so $x$ must rise by exactly $1$ to $8$ ✓, giving sides $20$, $20$, $14$ and a perimeter of $54$ ✓. Existence check: $20 + 14 > 20$ ✓ and $20 + 20 > 14$ ✓, so this triangle can actually be built. ANSWERING WITH x gives $8$ ✗. ANSWERING WITH THE LEG INSTEAD OF THE BASE gives $20$ ✗ — the question named $\\overline{QR}$, which is the side between the two equal angles. MISREADING WHICH SIDES ARE EQUAL, by pairing $\\overline{QR}$ with a leg, gives a different and wrong equation ✗; the rule is that equal angles face equal sides.',
    },
    {
      q: 'In $\\triangle KLM$, $\\angle K = \\angle M$, $KL = 2y + 1$, and $KM = 3y - 2$. The perimeter is $49$. Find the length of each of the two equal sides.',
      answer: 'Each equal side is $15$',
      solution:
        'The side opposite $\\angle K$ is $\\overline{LM}$ and the side opposite $\\angle M$ is $\\overline{KL}$, so the equal pair is $LM = KL = 2y + 1$, and $\\overline{KM} = 3y - 2$ is the base. The perimeter gives $2(2y + 1) + (3y - 2) = 7y = 49$, so $y = 7$, and each equal side is $2(7) + 1 = 15$. Second route by trial and adjustment: the perimeter is $7y$ exactly, so it rises by $7$ per unit of $y$; at $y = 6$ the sides are $13$, $13$, $16$ for a perimeter of $42$, which is $7$ short of $49$, so $y = 7$ ✓, giving $15$, $15$, $19$ and $15 + 15 + 19 = 49$ ✓. Existence check: $15 + 15 = 30 > 19$ ✓, so the triangle is real — worth doing, because the base here is longer than either equal side, which is the situation where a described isosceles triangle is most likely to be impossible. ANSWERING WITH y gives $7$ ✗. ANSWERING WITH THE BASE gives $19$ ✗ — this lane asks for the equal sides, the opposite of what the base problem wanted. FORGETTING TO DOUBLE THE EQUAL SIDE in the perimeter gives $5y - 1 = 49$ and a fractional $y$ ✗, which is itself a signal that a side was left out.',
    },
    {
      q: 'In $\\triangle UVW$, $\\angle U = \\angle W$, $UV = 3x + 2$, and $VW = 5x - 6$. The perimeter is $50$. Find $UW$.',
      answer: '$UW = 22$',
      solution:
        'Read which sides are equal first, because in this lane BOTH given expressions belong to the equal pair. The side opposite $\\angle U$ is $\\overline{VW}$ and the side opposite $\\angle W$ is $\\overline{UV}$, so $VW = UV$, that is $5x - 6 = 3x + 2$. Subtract $3x$: $2x - 6 = 2$, so $2x = 8$ and $x = 4$, making each of those sides $3(4) + 2 = 14$ (and $5(4) - 6 = 14$ ✓). The third side is whatever the perimeter has left: $UW = 50 - 14 - 14 = 22$. Second route by trial and adjustment on the gap between the two expressions. The difference $(5x - 6) - (3x + 2) = 2x - 8$ has to be zero, and it grows by $2$ for every $1$ added to $x$; at $x = 3$ the expressions are $11$ and $9$, a gap of $-2$, so one more unit of $x$ closes it and $x = 4$ ✓. SKIPPING THE TRIANGLE INEQUALITY is the trap this lane is built to catch, so run it: $14 + 14 = 28 > 22$ ✓, $14 + 22 = 36 > 14$ ✓ — the triangle exists. (Had the perimeter been $60$ instead, the same equal sides would leave a base of $32$, and $14 + 14 = 28 < 32$ ✗ would describe a triangle nobody can draw. Always check.) ANSWERING WITH x gives $4$ ✗. ANSWERING WITH THE EQUAL SIDE gives $14$ ✗; the question asked for $\\overline{UW}$, the one side not written as an expression.',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 3,
  worksheet,
}
