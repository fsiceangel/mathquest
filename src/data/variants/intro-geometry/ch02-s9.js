// Introduction to Geometry chapter 2 — variations for the printable worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is exactly a question,
//    an `answer` STRING, and a solution. There is no `choices` key anywhere in
//    this file and no `answer` is a number, because nothing is offered to pick
//    from — the wording has to say what is being asked and in what form. Where
//    the base answer names its parts, the variations keep that shape: slot 2
//    answers read "$a = \ldots$, $b = \ldots$, $c = \ldots$" and slots 8 and 10
//    name $\angle APB$ and $\angle A$.
//  - Every solution walks a primary route and then a genuinely independent
//    second route, not the same computation restated. A linear pair is redone
//    through the perpendicular; a crossing is redone with the full turn instead
//    of the straight angle; a third angle is redone through the exterior angle;
//    an exterior angle is redone through the interior angle at the same vertex;
//    a clock is redone by counting hour marks and again with |30H − 5.5M|; a
//    ratio is redone as a fraction of 180 degrees; a zigzag is redone by
//    extending one leg to a real triangle and using the Exterior Angle Theorem;
//    a "sum to 360" is redone by trial and adjustment at 6 degrees per unit
//    of x; and a difference-of-two-angles problem is redone by splitting the
//    difference around the average.
//  - Figures are coordinate-exact and computed in node, never eyeballed. In the
//    crossing-lines figures both endpoints of the transversal are
//    $(\pm 3\cos t, \pm 3\sin t)$ for one shared $t$; in the zigzag figures the
//    bend point is solved from the two given angles, and all three drawn angles
//    were then confirmed with a dot product.
//  - Figure text is plain text: the two parallel lines are drawn as the plain
//    letters "l" and "m", never as LaTeX.
//  - Traps that run through the file. SUBTRACTING FROM 360 INSTEAD OF 180.
//    SUBTRACTING FROM 90 INSTEAD OF 180. CALLING EVERY NEIGHBORING PAIR
//    SUPPLEMENTARY. TREATING SAME-SIDE INTERIOR ANGLES AS EQUAL. FORGETTING THE
//    HOUR HAND’S CREEP. TAKING THE LONG WAY AROUND THE CLOCK. ADDING THE RATIO
//    NUMBERS AS DEGREES. ANSWERING WITH x INSTEAD OF THE ANGLE. SUBTRACTING THE
//    TWO GIVEN ANGLES INSTEAD OF ADDING THEM. ASSUMING THE EXPRESSION WITH THE
//    EXTRA DEGREES IS LARGEST. ADDING THE WHOLE DIFFERENCE INSTEAD OF HALF OF
//    IT. TREATING THE EXTERIOR ANGLE AS THE INTERIOR ANGLE AT C.
//
// Two lanes were moved off the values I was handed, because those values
// collided with another slot in the same round: slot 4 v2 (a third angle of
// $63^\circ$ would have matched slot 3 v2) and slot 9 v2 (a largest angle of
// $120^\circ$ would have matched slot 7 v2). See the notes on those slots.

const worksheet = [
  // p1 — linear pair on a line. Lanes: 127 -> 53, 157 -> 23, 55 -> 125. The
  //      third lane gives the SMALLER angle so the answer comes out obtuse; it
  //      also had to move off 94 -> 86, which is section 2.3 slot 1 variation 3
  //      — same skill, same numbers, same attempt round.
  //      second route always goes through the perpendicular at the vertex, so
  //      it is a different subtraction from 90, not the same one from 180.
  //      The first lane deliberately avoids 118 -> 62: that exact pair is the
  //      worked example in the section 2.3 learn block, so a student who has
  //      just read the lesson would recall the answer instead of finding it.
  [
    {
      q: 'Points $D$, $O$, and $E$ lie on a line, and a ray $\\overrightarrow{OF}$ is drawn from $O$. If $\\angle DOF = 127^\\circ$, find $\\angle FOE$.',
      answer: '$53^\\circ$',
      solution:
        'The two angles sit side by side along line $DE$, so they form a linear pair and add to a straight angle: $\\angle FOE = 180^\\circ - 127^\\circ = 53^\\circ$. Second route through a perpendicular, which never uses $180$ at all. Stand a ray $\\overrightarrow{OG}$ at $O$ perpendicular to the line, on the same side as $F$. Then $\\angle DOG = 90^\\circ$, so $\\overrightarrow{OF}$ has swung $127^\\circ - 90^\\circ = 37^\\circ$ past the upright. The upright also makes a $90^\\circ$ angle with $\\overrightarrow{OE}$, and $\\overrightarrow{OF}$ has eaten $37^\\circ$ of it, leaving $\\angle FOE = 90^\\circ - 37^\\circ = 53^\\circ$ ✓. Rebuild to be sure: $127 + 53 = 180$ ✓. SUBTRACTING FROM 360 INSTEAD OF 180 gives $233^\\circ$ ✗, which is the reflex angle that swings the long way round. ADDING INSTEAD OF SUBTRACTING gives $307^\\circ$ ✗, larger than the straight angle the two pieces are supposed to fill.',
    },
    {
      q: 'Rays $\\overrightarrow{OM}$ and $\\overrightarrow{ON}$ point in exactly opposite directions, and a third ray $\\overrightarrow{OK}$ is drawn from the same point $O$. If $\\angle MOK = 157^\\circ$, find $\\angle KON$.',
      answer: '$23^\\circ$',
      solution:
        'Opposite rays make a straight angle, so $\\angle MOK$ and $\\angle KON$ are a linear pair: $\\angle KON = 180^\\circ - 157^\\circ = 23^\\circ$. Second route through the perpendicular. Put an upright ray at $O$ on $K$’s side of the line. It splits the straight angle into two $90^\\circ$ halves, and $\\overrightarrow{OK}$ lies $157^\\circ - 90^\\circ = 67^\\circ$ beyond the upright, inside the half nearer $N$. What is left of that half is $\\angle KON = 90^\\circ - 67^\\circ = 23^\\circ$ ✓. A reasonableness check: $157^\\circ$ is nearly a whole straight angle, so the leftover slice ought to be thin, and $23^\\circ$ is thin ✓. SUBTRACTING FROM 360 INSTEAD OF 180 gives $203^\\circ$ ✗ — bigger than a straight angle, so it cannot be one slice of one. SWAPPING THE ORDER gives $157 - 180 = -23$ ✗, and no angle has a negative measure.',
    },
    {
      q: '$\\angle GOH$ and $\\angle HOJ$ form a linear pair. If $\\angle GOH = 55^\\circ$, find $\\angle HOJ$.',
      answer: '$125^\\circ$',
      solution:
        'A linear pair is by definition a pair of side-by-side angles whose outer sides make a straight line, so the two measures add to $180^\\circ$: $\\angle HOJ = 180^\\circ - 55^\\circ = 125^\\circ$. Second route through the perpendicular. Drop an upright ray at $O$ on the same side as $H$. Since $\\angle GOH = 55^\\circ$ falls $90^\\circ - 55^\\circ = 35^\\circ$ short of the upright, ray $\\overrightarrow{OH}$ leans $35^\\circ$ back from it, away from $J$. So $\\angle HOJ$ covers that $35^\\circ$ plus the whole second half: $35^\\circ + 90^\\circ = 125^\\circ$ ✓. Watch what the shape of the answer is telling you: this is the one lane where the given angle is the SMALLER of the pair, so the answer has to come out obtuse. Rebuild: $55 + 125 = 180$ ✓. SUBTRACTING FROM 90 INSTEAD OF 180 gives $35^\\circ$ ✗, which is only the piece up to the upright. SUBTRACTING FROM 360 gives $305^\\circ$ ✗.',
    },
  ],

  // p2 — two crossing lines, name all three remaining angles in order. Lanes:
  //      65 -> 115/65/115, 41 -> 139/41/139, 124 -> 56/124/56. The transversal
  //      endpoints are (+-3cos t, +-3sin t) for the given t, so the drawn angle
  //      really is the labelled one.
  [
    {
      q: 'Two lines cross at $O$, and one of the four angles they make measures $65^\\circ$. Travelling around the crossing from that angle, the other three are marked $a$, $b$, and $c$. Find all three, in that order.',
      fig: {
        view: [-3.4, -3.4, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-1.2679, -2.7189], b: [1.2679, 2.7189] },
          { t: 'point', p: [0, 0], label: 'O', dx: 14, dy: 12 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.2679, 2.7189], r: 0.75, label: '65' },
          { t: 'angle', at: [0, 0], from: [1.2679, 2.7189], to: [-3, 0], r: 0.55, label: 'a' },
          { t: 'angle', at: [0, 0], from: [-3, 0], to: [-1.2679, -2.7189], r: 0.75, label: 'b' },
          { t: 'angle', at: [0, 0], from: [-1.2679, -2.7189], to: [3, 0], r: 0.55, label: 'c' },
        ],
      },
      answer: '$a = 115^\\circ$, $b = 65^\\circ$, $c = 115^\\circ$',
      solution:
        'Take them in order. $a$ sits next to the $65^\\circ$ angle along the horizontal line, so the two make a linear pair and $a = 180^\\circ - 65^\\circ = 115^\\circ$. $b$ lies directly across the crossing from the $65^\\circ$ angle, so they are vertical angles and $b = 65^\\circ$. $c$ lies directly across from $a$, so $c = 115^\\circ$. Second route using the full turn instead of the straight angle: the four angles fill a complete rotation, and they come in two matching vertical pairs, so $2(65^\\circ) + 2a = 360^\\circ$. That gives $2a = 230^\\circ$ and $a = 115^\\circ$ ✓, with $b$ and $c$ then read off as the partners of $65^\\circ$ and of $a$. Check the whole turn: $65 + 115 + 65 + 115 = 360$ ✓. CALLING EVERY NEIGHBORING PAIR SUPPLEMENTARY is the trap: it would make $b = 115^\\circ$ ✗, but $b$ is not a neighbor of the $65^\\circ$ angle, it is opposite it. SUBTRACTING FROM 90 gives $a = 25^\\circ$ ✗.',
    },
    {
      q: 'In the figure two straight lines cross, and the angle marked $41^\\circ$ is one of the four angles formed. Going around the crossing point, the remaining three angles are $a$, $b$, and $c$. State the measure of each, in order.',
      fig: {
        view: [-3.4, -3.4, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-2.2641, -1.9682], b: [2.2641, 1.9682] },
          { t: 'point', p: [0, 0], label: 'O', dx: 6, dy: 16 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [2.2641, 1.9682], r: 0.85, label: '41' },
          { t: 'angle', at: [0, 0], from: [2.2641, 1.9682], to: [-3, 0], r: 0.5, label: 'a' },
          { t: 'angle', at: [0, 0], from: [-3, 0], to: [-2.2641, -1.9682], r: 0.85, label: 'b' },
          { t: 'angle', at: [0, 0], from: [-2.2641, -1.9682], to: [3, 0], r: 0.5, label: 'c' },
        ],
      },
      answer: '$a = 139^\\circ$, $b = 41^\\circ$, $c = 139^\\circ$',
      solution:
        '$a$ and the $41^\\circ$ angle lie side by side on the horizontal line, so $a = 180^\\circ - 41^\\circ = 139^\\circ$. $b$ is directly opposite the $41^\\circ$ angle, so as vertical angles they match: $b = 41^\\circ$. $c$ is directly opposite $a$, so $c = 139^\\circ$. Second route by counting the full turn: the four slices around $O$ total $360^\\circ$ and fall into two equal pairs, so $2(41^\\circ) + 2a = 360^\\circ$, giving $2a = 278^\\circ$ and $a = 139^\\circ$ ✓. A picture check: the transversal leans steeply, so two of the slices should look thin and two should look fat, and $41^\\circ$, $139^\\circ$, $41^\\circ$, $139^\\circ$ alternates thin, fat, thin, fat exactly as drawn ✓. CALLING EVERY NEIGHBORING PAIR SUPPLEMENTARY gives $b = 139^\\circ$ ✗. SUBTRACTING FROM 360 INSTEAD OF 180 gives $a = 319^\\circ$ ✗, which alone would swallow most of the turn.',
    },
    {
      q: 'Two lines meet at a point, and one of the four angles at that point is $124^\\circ$, as shown. The other three, taken in order around the point, are labelled $a$, $b$, and $c$. Find $a$, $b$, and $c$.',
      fig: {
        view: [-3.4, -3.4, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [1.6776, -2.4871], b: [-1.6776, 2.4871] },
          { t: 'point', p: [0, 0], label: 'O', dx: 12, dy: 14 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-1.6776, 2.4871], r: 0.55, label: '124' },
          { t: 'angle', at: [0, 0], from: [-1.6776, 2.4871], to: [-3, 0], r: 0.8, label: 'a' },
          { t: 'angle', at: [0, 0], from: [-3, 0], to: [1.6776, -2.4871], r: 0.55, label: 'b' },
          { t: 'angle', at: [0, 0], from: [1.6776, -2.4871], to: [3, 0], r: 0.8, label: 'c' },
        ],
      },
      answer: '$a = 56^\\circ$, $b = 124^\\circ$, $c = 56^\\circ$',
      solution:
        'This time the given angle is the fat one. $a$ neighbors it on the horizontal line, so $a = 180^\\circ - 124^\\circ = 56^\\circ$. $b$ is across the crossing from the $124^\\circ$ angle, so $b = 124^\\circ$. $c$ is across from $a$, so $c = 56^\\circ$. Second route with the full turn: two copies of $124^\\circ$ and two copies of $a$ fill the rotation, so $2(124^\\circ) + 2a = 360^\\circ$, hence $2a = 112^\\circ$ and $a = 56^\\circ$ ✓. Sum check: $124 + 56 + 124 + 56 = 360$ ✓. CALLING EVERY NEIGHBORING PAIR SUPPLEMENTARY gives $b = 56^\\circ$ ✗, which would make the picture show four angles that shrink as you walk around it. ASSUMING THE GIVEN ANGLE MUST BE THE SMALL ONE is the other trap here: nothing says the marked angle is acute, and this one is obtuse.',
    },
  ],

  // p3 — same-side interior angle at two parallel lines. Lanes: 88 -> 92,
  //      117 -> 63, 39 -> 141. The second route hops the angle across to the
  //      far line first (corresponding or alternate interior), then finishes
  //      with a linear pair there — a different theorem in a different place.
  [
    {
      q: 'A transversal cuts across two parallel lines. Where it meets the first parallel line it makes an interior angle of $88^\\circ$. Find the measure of the same-side interior angle that pairs with it at the second parallel line.',
      answer: '$92^\\circ$',
      solution:
        'Same-side interior angles at a pair of parallel lines are supplementary, so the partner is $180^\\circ - 88^\\circ = 92^\\circ$. Second route in two hops, which never uses the same-side rule. First hop: the angle corresponding to the $88^\\circ$ angle at the second parallel line is also $88^\\circ$, since corresponding angles across parallels are equal. Second hop: at that second line, the corresponding angle and the same-side interior angle we want sit next to each other on the line, so they form a linear pair, and the one we want is $180^\\circ - 88^\\circ = 92^\\circ$ ✓. Rebuild: $88 + 92 = 180$ ✓. TREATING SAME-SIDE INTERIOR ANGLES AS EQUAL is the trap: $88^\\circ$ ✗ is the answer for ALTERNATE interior angles, which sit on opposite sides of the transversal. SUBTRACTING FROM 90 gives $2^\\circ$ ✗, a sliver far too thin for the picture.',
    },
    {
      q: 'Two parallel lines are crossed by a transversal, and one interior angle at the upper line measures $117^\\circ$. What is the measure of the interior angle at the lower line that lies on the same side of the transversal?',
      answer: '$63^\\circ$',
      solution:
        'A pair of same-side interior angles between parallel lines always adds to $180^\\circ$, so the angle at the lower line is $180^\\circ - 117^\\circ = 63^\\circ$. Second route by hopping across first. The alternate interior angle at the lower line equals $117^\\circ$, because alternate interior angles across parallels are equal — but that one sits on the OTHER side of the transversal. The angle we want and that $117^\\circ$ angle sit side by side along the lower line, so they are a linear pair, and the one we want is $180^\\circ - 117^\\circ = 63^\\circ$ ✓. A shape check: the given angle is obtuse, so its same-side partner must be acute, and $63^\\circ$ is acute ✓. TREATING SAME-SIDE INTERIOR ANGLES AS EQUAL gives $117^\\circ$ ✗ and would put two obtuse angles on the same side, which is more than $180^\\circ$ between them. SUBTRACTING FROM 360 gives $243^\\circ$ ✗.',
    },
    {
      q: 'A road crosses two parallel railway tracks. At the first track the road makes an interior angle of $39^\\circ$ with it. Find the same-side interior angle the road makes at the second track.',
      answer: '$141^\\circ$',
      solution:
        'The two tracks are parallel and the road is the transversal, so the two same-side interior angles are supplementary: the second one is $180^\\circ - 39^\\circ = 141^\\circ$. Second route with corresponding angles and then a linear pair. Slide the $39^\\circ$ angle down to the second track: the corresponding angle there is also $39^\\circ$. The angle we want shares the second track with it and lies on the other side of it along that track, so the two form a linear pair and the one we want is $180^\\circ - 39^\\circ = 141^\\circ$ ✓. Rebuild: $39 + 141 = 180$ ✓. TREATING SAME-SIDE INTERIOR ANGLES AS EQUAL gives $39^\\circ$ ✗. SUBTRACTING FROM 90 INSTEAD OF 180 gives $51^\\circ$ ✗ — that is the complement, which belongs to a right-angle question, not a parallel-lines one.',
    },
  ],

  // p4 — third angle of a triangle. Lanes: 44 + 59 -> 77, 36 + 75 -> 69,
  //      23 + 68 -> 89. The v2 lane was handed to me as 36 + 81 -> 63, but 63
  //      is already the v2 answer in slot 3, so this lane moved to 36 + 75.
  [
    {
      q: 'In triangle $KLM$, $\\angle K = 44^\\circ$ and $\\angle L = 59^\\circ$. Find $\\angle M$.',
      answer: '$77^\\circ$',
      solution:
        'The three angles of any triangle add to $180^\\circ$, so $\\angle M = 180^\\circ - 44^\\circ - 59^\\circ$. Take it in two steps: $44 + 59 = 103$, and $180 - 103 = 77$, so $\\angle M = 77^\\circ$. Second route through the exterior angle, which never adds up to $180$ inside the triangle. Extend side $\\overline{LM}$ past $M$. The exterior angle formed there equals the sum of the two remote interior angles, so it is $44^\\circ + 59^\\circ = 103^\\circ$. That exterior angle and $\\angle M$ are a linear pair along the extended side, so $\\angle M = 180^\\circ - 103^\\circ = 77^\\circ$ ✓. Rebuild: $44 + 59 + 77 = 180$ ✓. SUBTRACTING ONLY ONE OF THE GIVEN ANGLES gives $136^\\circ$ or $121^\\circ$ ✗. USING 360 INSTEAD OF 180 gives $257^\\circ$ ✗, which by itself is bigger than a triangle is allowed to hold.',
    },
    {
      q: 'A triangle has one angle of $36^\\circ$ and another of $75^\\circ$. How large is its remaining angle?',
      answer: '$69^\\circ$',
      solution:
        'The angle sum of a triangle is $180^\\circ$, so the remaining angle is $180^\\circ - 36^\\circ - 75^\\circ$. The two known angles come to $36 + 75 = 111$, and $180 - 111 = 69$, so the third angle is $69^\\circ$. Second route through the exterior angle at the third vertex. Extending a side there makes an exterior angle equal to the two remote interiors added together: $36^\\circ + 75^\\circ = 111^\\circ$. The interior angle at that vertex is its linear-pair partner, $180^\\circ - 111^\\circ = 69^\\circ$ ✓. Rebuild: $36 + 75 + 69 = 180$ ✓, and all three are under $90^\\circ$, so the triangle is acute. ADDING ALL THREE GIVEN NUMBERS AND STOPPING gives $111^\\circ$ ✗ — that is the sum of what we were told, not the missing angle. SUBTRACTING FROM 90 gives a negative number ✗.',
    },
    {
      q: 'Two of the three corners of a triangular garden plot measure $23^\\circ$ and $68^\\circ$. Find the third corner angle of the plot.',
      answer: '$89^\\circ$',
      solution:
        'Whatever its shape, a triangle holds exactly $180^\\circ$, so the third corner is $180^\\circ - 23^\\circ - 68^\\circ$. First $23 + 68 = 91$, then $180 - 91 = 89$, giving $89^\\circ$. Second route through the exterior angle: extend one side at the third corner, and the exterior angle there equals $23^\\circ + 68^\\circ = 91^\\circ$. The corner itself is the rest of the straight angle: $180^\\circ - 91^\\circ = 89^\\circ$ ✓. A reasonableness note: $89^\\circ$ is one degree shy of a right angle, so the plot looks almost right-angled but is not — the corner is acute. Rebuild: $23 + 68 + 89 = 180$ ✓. CALLING IT A RIGHT ANGLE BECAUSE IT LOOKS LIKE ONE gives $90^\\circ$ ✗; the arithmetic, not the drawing, decides. SUBTRACTING ONLY ONE GIVEN ANGLE gives $157^\\circ$ or $112^\\circ$ ✗.',
    },
  ],

  // p5 — exterior angle from the two remote interior angles. Lanes:
  //      39 + 74 -> 113, 56 + 61 -> 117, 28 + 95 -> 123. The second route goes
  //      the long way: interior angle at the vertex first, then its supplement.
  [
    {
      q: 'In triangle $PQR$, $\\angle P = 39^\\circ$ and $\\angle Q = 74^\\circ$. Side $\\overline{PR}$ is extended past $R$ to a point $S$. Find $\\angle QRS$.',
      answer: '$113^\\circ$',
      solution:
        '$\\angle QRS$ is the exterior angle at $R$, and its remote interior angles are the ones at $P$ and $Q$. By the Exterior Angle Theorem it equals their sum: $\\angle QRS = 39^\\circ + 74^\\circ = 113^\\circ$. Second route the long way round, through the interior angle at $R$. The three interior angles add to $180^\\circ$, so $\\angle R = 180^\\circ - 39^\\circ - 74^\\circ = 67^\\circ$. Since $P$, $R$, $S$ lie on one line, $\\angle QRS$ and $\\angle QRP$ form a linear pair, so $\\angle QRS = 180^\\circ - 67^\\circ = 113^\\circ$ ✓. The two routes agree, which is no accident: subtracting both remote angles from $180$ and then subtracting the result from $180$ just adds the two remote angles back. USING THE INTERIOR ANGLE AS THE ANSWER gives $67^\\circ$ ✗ — that is $\\angle QRP$, on the other side of the extension. TAKING 180 MINUS THE SUM gives $67^\\circ$ ✗ for the same reason.',
    },
    {
      q: 'A triangle has two angles measuring $56^\\circ$ and $61^\\circ$. One of its sides is extended to make an exterior angle at the third vertex. Find that exterior angle.',
      answer: '$117^\\circ$',
      solution:
        'The exterior angle at a vertex equals the sum of the two interior angles that do not touch it, so it is $56^\\circ + 61^\\circ = 117^\\circ$. Second route through the third interior angle. The angle sum gives the interior angle at that vertex as $180^\\circ - 56^\\circ - 61^\\circ = 63^\\circ$, and the exterior angle is its linear-pair partner along the extended side: $180^\\circ - 63^\\circ = 117^\\circ$ ✓. A size check that costs nothing: an exterior angle must be bigger than either remote interior angle it is built from, and $117 > 61 > 56$ ✓. USING THE INTERIOR ANGLE AS THE ANSWER gives $63^\\circ$ ✗. SUBTRACTING THE TWO GIVEN ANGLES gives $5^\\circ$ ✗, far too small to be an exterior angle of anything.',
    },
    {
      q: 'In triangle $XYZ$, $\\angle X = 28^\\circ$ and $\\angle Y = 95^\\circ$. Side $\\overline{XZ}$ is extended past $Z$ to a point $W$. Find $\\angle YZW$.',
      answer: '$123^\\circ$',
      solution:
        '$\\angle YZW$ is the exterior angle at $Z$, so it equals the sum of the remote interior angles at $X$ and $Y$: $28^\\circ + 95^\\circ = 123^\\circ$. Second route through the interior angle at $Z$: the angle sum gives $\\angle XZY = 180^\\circ - 28^\\circ - 95^\\circ = 57^\\circ$, and since $X$, $Z$, $W$ are collinear the exterior angle is $180^\\circ - 57^\\circ = 123^\\circ$ ✓. Notice that the triangle already contains an obtuse angle at $Y$, so the remaining two interior angles have to be small, and $28^\\circ$ and $57^\\circ$ are ✓. USING THE INTERIOR ANGLE AS THE ANSWER gives $57^\\circ$ ✗. FORGETTING THAT AN OBTUSE REMOTE ANGLE STILL COUNTS is the other trap: the $95^\\circ$ angle goes into the sum exactly like any other, so dropping it would give $28^\\circ$ ✗.',
    },
  ],

  // p6 — angle between the clock hands. Lanes: 9:30 -> 105, 11:30 -> 165,
  //      1:45 -> 142.5. Every lane is checked twice more: by counting hour
  //      marks, and with |30H - 5.5M| (taking 360 minus the result when it
  //      passes 180). The middle lane avoids 4:30 -> 45: the section 2.2 learn
  //      block works 4:30 out step by step, so that lane tested recall only.
  [
    {
      q: 'A clock reads 9:30. Find the angle formed by the hour hand and the minute hand.',
      answer: '$105^\\circ$',
      solution:
        'Measure both hands from the $12$. The minute hand moves $6^\\circ$ a minute, so at $30$ minutes it is at $30 \\times 6^\\circ = 180^\\circ$. The hour hand starts the hour at $9 \\times 30^\\circ = 270^\\circ$ and creeps $30 \\times 0.5^\\circ = 15^\\circ$ further, landing at $285^\\circ$. The gap is $285^\\circ - 180^\\circ = 105^\\circ$, and since that is under $180^\\circ$ it is already the angle between the hands. Second route by counting hour marks on the dial instead of degrees from the $12$. At half past, the minute hand points straight at the $6$ and the hour hand sits halfway between the $9$ and the $10$. From the $6$ to the $9$ is $3$ marks, and each mark is $30^\\circ$, giving $90^\\circ$; the extra half mark of creep adds $15^\\circ$, for $105^\\circ$ ✓. A third check with the standard formula: $|30 \\times 9 - 5.5 \\times 30| = |270 - 165| = 105$ ✓. FORGETTING THE HOUR HAND’S CREEP gives $90^\\circ$ ✗. TAKING THE LONG WAY AROUND THE CLOCK gives $255^\\circ$ ✗.',
    },
    {
      q: 'Find the angle between the hour hand and the minute hand of a clock at 11:30.',
      answer: '$165^\\circ$',
      solution:
        'Place both hands on the dial in degrees from the $12$. Minute hand: $30 \\times 6^\\circ = 180^\\circ$. Hour hand: $11 \\times 30^\\circ = 330^\\circ$ at the top of the hour, plus $30 \\times 0.5^\\circ = 15^\\circ$ of creep, so $345^\\circ$. The hands are $345^\\circ - 180^\\circ = 165^\\circ$ apart, and that is under $180^\\circ$, so it is already the angle between them. Second route by counting marks: the minute hand is on the $6$, and the hour hand is halfway between the $11$ and the $12$, sitting at mark $11\\frac{1}{2}$. From the $6$ up to mark $11\\frac{1}{2}$ is $5\\frac{1}{2}$ marks, and each mark is $30^\\circ$, giving $5.5 \\times 30^\\circ = 165^\\circ$ ✓. Formula check: $|30 \\times 11 - 5.5 \\times 30| = |330 - 165| = 165$ ✓. FORGETTING THE HOUR HAND’S CREEP gives $150^\\circ$ ✗ — it would leave the hour hand parked on the $11$, which never happens once the minutes start ticking. TAKING THE LONG WAY AROUND gives $195^\\circ$ ✗. Note how close $165^\\circ$ is to a straight angle: at half past eleven the two hands very nearly line up in opposite directions, but not quite.',
    },
    {
      q: 'A clock reads 1:45. How many degrees apart are its two hands? Give the smaller of the two angles between them.',
      answer: '$142.5^\\circ$',
      solution:
        'Minute hand: $45 \\times 6^\\circ = 270^\\circ$ from the $12$. Hour hand: $1 \\times 30^\\circ = 30^\\circ$ plus $45 \\times 0.5^\\circ = 22.5^\\circ$ of creep, giving $52.5^\\circ$. The difference is $270^\\circ - 52.5^\\circ = 217.5^\\circ$, which is more than a straight angle, so the angle BETWEEN the hands is the other way round: $360^\\circ - 217.5^\\circ = 142.5^\\circ$. Second route by counting marks: the minute hand points at the $9$, and the hour hand has gone three quarters of the way from the $1$ to the $2$, so it sits at mark $1.75$. Going clockwise from $1.75$ to $9$ is $7.25$ marks, which is $7.25 \\times 30^\\circ = 217.5^\\circ$, so the shorter way is $360^\\circ - 217.5^\\circ = 142.5^\\circ$ ✓. Formula check: $|30 \\times 1 - 5.5 \\times 45| = |30 - 247.5| = 217.5$, and $360 - 217.5 = 142.5$ ✓. TAKING THE LONG WAY AROUND THE CLOCK gives $217.5^\\circ$ ✗. FORGETTING THE HOUR HAND’S CREEP gives $240^\\circ$ ✗, which is not even the smaller angle. The half degree is real: three quarters of an hour of creep is $22.5^\\circ$, not a whole number.',
    },
  ],

  // p7 — triangle angles in a given ratio, largest one. Lanes: 3:5:7 -> 84,
  //      1:1:4 -> 120, 4:5:6 -> 72. Second route always reads the largest as a
  //      fraction of 180 directly, without ever finding x.
  [
    {
      q: 'In a triangle, the three angles are in the ratio $3:5:7$. How large is the biggest of the three?',
      answer: '$84^\\circ$',
      solution:
        'Write the angles as $3x$, $5x$, and $7x$. They add to $180^\\circ$, so $15x = 180^\\circ$ and $x = 12^\\circ$. The three angles are $36^\\circ$, $60^\\circ$, and $84^\\circ$, so the largest is $84^\\circ$. Second route without ever finding $x$: the ratio splits the triangle into $3 + 5 + 7 = 15$ equal shares, and the largest angle owns $7$ of them, so it is $\\frac{7}{15}$ of $180^\\circ$. Since $180 \\div 15 = 12$, that is $7 \\times 12 = 84^\\circ$ ✓. Rebuild: $36 + 60 + 84 = 180$ ✓, and the three are in the ratio $36:60:84 = 3:5:7$ ✓. ANSWERING WITH x INSTEAD OF THE ANGLE gives $12^\\circ$ ✗. ADDING THE RATIO NUMBERS AS DEGREES gives $15^\\circ$ ✗. TAKING THE FRACTION OF 360 INSTEAD OF 180 gives $168^\\circ$ ✗, which alone would exceed the whole triangle.',
    },
    {
      q: 'A triangle has angles in the ratio $1:1:4$. Find its largest angle.',
      answer: '$120^\\circ$',
      solution:
        'Call the angles $x$, $x$, and $4x$. Their sum is $180^\\circ$, so $6x = 180^\\circ$ and $x = 30^\\circ$. The angles are $30^\\circ$, $30^\\circ$, and $120^\\circ$, and the largest is $120^\\circ$. Second route straight from the shares: the ratio makes $1 + 1 + 4 = 6$ equal shares, the biggest angle takes $4$ of them, so it is $\\frac{4}{6} = \\frac{2}{3}$ of $180^\\circ$, which is $120^\\circ$ ✓. Rebuild: $30 + 30 + 120 = 180$ ✓. Two of the angles are equal, so this triangle is isosceles, and its largest angle is obtuse. ANSWERING WITH x INSTEAD OF THE ANGLE gives $30^\\circ$ ✗. TREATING THE RATIO NUMBERS AS DEGREES gives $4^\\circ$ ✗. DIVIDING 180 BY 4 gives $45^\\circ$ ✗ — the $4$ counts shares, not the number of pieces to cut $180^\\circ$ into.',
    },
    {
      q: 'The three angles of a triangular sail are in the ratio $4:5:6$. Find the largest of them.',
      answer: '$72^\\circ$',
      solution:
        'Let the angles be $4x$, $5x$, and $6x$. Then $15x = 180^\\circ$, so $x = 12^\\circ$, and the angles are $48^\\circ$, $60^\\circ$, and $72^\\circ$. The largest is $72^\\circ$. Second route by fractions: the shares total $4 + 5 + 6 = 15$, and the largest angle claims $6$ of them, which is $\\frac{6}{15} = \\frac{2}{5}$ of $180^\\circ$. Two fifths of $180$ is $2 \\times 36 = 72^\\circ$ ✓. Rebuild: $48 + 60 + 72 = 180$ ✓, and every angle is under $90^\\circ$, so the sail is an acute triangle. ANSWERING WITH x INSTEAD OF THE ANGLE gives $12^\\circ$ ✗. ADDING THE RATIO NUMBERS AS DEGREES gives $15^\\circ$ ✗. ASSUMING NEARLY EQUAL RATIO NUMBERS MEAN NEARLY EQUAL ANGLES is a softer trap: $4:5:6$ looks close to equal, yet the angles spread from $48^\\circ$ to $72^\\circ$, a gap of $24^\\circ$.',
    },
  ],

  // p8 — zigzag bend between two parallel lines. Lanes: 41 + 37 -> 78,
  //      52 + 66 -> 118, 29 + 45 -> 74. Bend points solved from the two given
  //      angles (never eyeballed) and confirmed by dot product; v3 is mirrored
  //      so the path bends toward the left. The second route extends one leg
  //      until it hits the other line and uses the Exterior Angle Theorem on
  //      the honest triangle that appears.
  [
    {
      q: 'Lines $\\ell$ and $m$ are parallel. A path runs from $A$ on $\\ell$ to a bend at $P$ and on to $B$ on $m$. It leaves $\\ell$ at $41^\\circ$ and reaches $m$ at $37^\\circ$, as shown. Find the bend angle $\\angle APB$.',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.9],
        elems: [
          { t: 'seg', a: [-3, 3], b: [3, 3] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-1.5707, 3], b: [0.5, 1.2] },
          { t: 'seg', a: [-1.0925, 0], b: [0.5, 1.2] },
          { t: 'point', p: [-1.5707, 3], label: 'A', dx: 0, dy: -8 },
          { t: 'point', p: [0.5, 1.2], label: 'P', dx: 14, dy: 6 },
          { t: 'point', p: [-1.0925, 0], label: 'B', dx: -6, dy: 16 },
          { t: 'label', p: [2.7, 3.3], text: 'l', dy: 4 },
          { t: 'label', p: [2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-1.5707, 3], from: [3, 3], to: [0.5, 1.2], r: 0.8, label: '41' },
          { t: 'angle', at: [-1.0925, 0], from: [3, 0], to: [0.5, 1.2], r: 0.7, label: '37' },
          { t: 'angle', at: [0.5, 1.2], from: [-1.5707, 3], to: [-1.0925, 0], r: 0.55, label: '?' },
        ],
      },
      answer: '$\\angle APB = 78^\\circ$',
      solution:
        'Draw a helper line through $P$ parallel to both $\\ell$ and $m$. It slices $\\angle APB$ into two pieces. The upper piece and the $41^\\circ$ angle at $A$ are alternate interior angles for the parallels $\\ell$ and the helper line, so that piece is $41^\\circ$; the lower piece and the $37^\\circ$ angle at $B$ are alternate interior angles for the helper line and $m$, so that piece is $37^\\circ$. Adding them, $\\angle APB = 41^\\circ + 37^\\circ = 78^\\circ$. Second route with a real triangle instead of a helper line. Extend $\\overline{AP}$ past $P$ until it strikes line $m$ at a point $Q$, to the right of $B$. The transversal $AQ$ crosses the parallels, so the angle at $Q$ between $\\overrightarrow{QP}$ and $\\overrightarrow{QB}$ is alternate interior to the $41^\\circ$ angle at $A$ and therefore measures $41^\\circ$. In triangle $PBQ$ the angle at $B$ is the given $37^\\circ$. Since $A$, $P$, $Q$ lie on one line with $P$ in the middle, $\\angle APB$ is the exterior angle of that triangle at $P$, so it equals the two remote interiors added: $41^\\circ + 37^\\circ = 78^\\circ$ ✓. SUBTRACTING THE TWO GIVEN ANGLES INSTEAD OF ADDING THEM gives $4^\\circ$ ✗, a bend so sharp the path would double back on itself. TAKING 180 MINUS THE SUM gives $102^\\circ$ ✗ — that is the angle on the other side of the bend.',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel, and a bent path goes from $A$ on $\\ell$ down to $P$ and then to $B$ on $m$. The path makes a $52^\\circ$ angle with $\\ell$ at $A$ and a $66^\\circ$ angle with $m$ at $B$, as shown. Find $\\angle APB$.',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.9],
        elems: [
          { t: 'seg', a: [-3, 3], b: [3, 3] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-1.0407, 3], b: [0.6, 0.9] },
          { t: 'seg', a: [0.1993, 0], b: [0.6, 0.9] },
          { t: 'point', p: [-1.0407, 3], label: 'A', dx: -4, dy: -8 },
          { t: 'point', p: [0.6, 0.9], label: 'P', dx: 14, dy: 4 },
          { t: 'point', p: [0.1993, 0], label: 'B', dx: 6, dy: 16 },
          { t: 'label', p: [2.7, 3.3], text: 'l', dy: 4 },
          { t: 'label', p: [2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-1.0407, 3], from: [3, 3], to: [0.6, 0.9], r: 0.7, label: '52' },
          { t: 'angle', at: [0.1993, 0], from: [3, 0], to: [0.6, 0.9], r: 0.6, label: '66' },
          { t: 'angle', at: [0.6, 0.9], from: [-1.0407, 3], to: [0.1993, 0], r: 0.5, label: '?' },
        ],
      },
      answer: '$\\angle APB = 118^\\circ$',
      solution:
        'Run a helper line through $P$ parallel to $\\ell$ and $m$. It cuts $\\angle APB$ into an upper piece and a lower piece. The upper piece is alternate interior with the $52^\\circ$ angle at $A$, so it is $52^\\circ$; the lower piece is alternate interior with the $66^\\circ$ angle at $B$, so it is $66^\\circ$. Therefore $\\angle APB = 52^\\circ + 66^\\circ = 118^\\circ$. Second route with a triangle. Extend $\\overline{BP}$ upward past $P$ until it meets $\\ell$ at a point $Q$, to the right of $A$. Line $BQ$ is a transversal of the parallels, so the angle at $Q$ between $\\overrightarrow{QP}$ and $\\overrightarrow{QA}$ is alternate interior to the $66^\\circ$ angle at $B$ and measures $66^\\circ$. In triangle $PAQ$ the angle at $A$ is the given $52^\\circ$. Because $B$, $P$, $Q$ are collinear with $P$ between $B$ and $Q$, the angle $\\angle APB$ is the exterior angle of triangle $PAQ$ at $P$, so it equals $66^\\circ + 52^\\circ = 118^\\circ$ ✓. A shape check: the bend is obtuse in the picture, and $118^\\circ$ is obtuse ✓. SUBTRACTING THE TWO GIVEN ANGLES gives $14^\\circ$ ✗. TAKING 180 MINUS THE SUM gives $62^\\circ$ ✗, which would make the drawn bend look acute.',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. A path leaves $A$ on $\\ell$, bends at $P$, and finishes at $B$ on $m$, opening to the left as shown. It makes a $29^\\circ$ angle with $\\ell$ at $A$ and a $45^\\circ$ angle with $m$ at $B$. Find the bend angle $\\angle APB$.',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.9],
        elems: [
          { t: 'seg', a: [-3, 3], b: [3, 3] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [2.0257, 3], b: [-0.5, 1.6] },
          { t: 'seg', a: [1.1, 0], b: [-0.5, 1.6] },
          { t: 'point', p: [2.0257, 3], label: 'A', dx: 4, dy: -8 },
          { t: 'point', p: [-0.5, 1.6], label: 'P', dx: -14, dy: 4 },
          { t: 'point', p: [1.1, 0], label: 'B', dx: 8, dy: 16 },
          { t: 'label', p: [-2.7, 3.3], text: 'l', dy: 4 },
          { t: 'label', p: [-2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [2.0257, 3], from: [-3, 3], to: [-0.5, 1.6], r: 0.9, label: '29' },
          { t: 'angle', at: [1.1, 0], from: [-3, 0], to: [-0.5, 1.6], r: 0.7, label: '45' },
          { t: 'angle', at: [-0.5, 1.6], from: [2.0257, 3], to: [1.1, 0], r: 0.55, label: '?' },
        ],
      },
      answer: '$\\angle APB = 74^\\circ$',
      solution:
        'The bend opens toward the left this time, but the reasoning does not care about direction. Draw a helper line through $P$ parallel to $\\ell$ and $m$. The piece of $\\angle APB$ above it is alternate interior with the $29^\\circ$ angle at $A$, and the piece below it is alternate interior with the $45^\\circ$ angle at $B$, so $\\angle APB = 29^\\circ + 45^\\circ = 74^\\circ$. Second route with a triangle. Extend $\\overline{BP}$ past $P$ until it meets $\\ell$ at a point $Q$, to the left of $A$. The angle at $Q$ between $\\overrightarrow{QP}$ and $\\overrightarrow{QA}$ is alternate interior to the $45^\\circ$ angle at $B$, so it is $45^\\circ$, and the angle at $A$ in triangle $PAQ$ is the given $29^\\circ$. With $P$ between $B$ and $Q$, $\\angle APB$ is the exterior angle of that triangle at $P$, so $\\angle APB = 45^\\circ + 29^\\circ = 74^\\circ$ ✓. LETTING THE MIRRORED PICTURE CHANGE THE RULE is the trap worth naming here: flipping the figure left to right does not turn the sum into a difference, and $45 - 29 = 16^\\circ$ ✗ is far too sharp for the drawn bend. TAKING 180 MINUS THE SUM gives $106^\\circ$ ✗.',
    },
  ],

  // p9 — four angles around a point, find the largest. Lanes: x, 2x, 3x + 10,
  //      80 -> 145; x, 3x, 2x + 30, 60 -> 135; x, 2x, 3x + 50, 70 -> 170. The
  //      v2 lane came to me as x, 3x, 2x + 30, 90 -> 120, but 120 is already
  //      the v2 answer in slot 7, so the fixed angle moved from 90 to 60, which
  //      keeps x whole and makes 3x the largest as before. The second route is
  //      trial and adjustment: every extra 1 in x adds 6 to the total.
  [
    {
      q: 'Four rays from a point $O$ divide the full turn into angles of $x$, $2x$, $3x + 10^\\circ$, and $80^\\circ$. Find the largest of these four angles.',
      answer: '$145^\\circ$',
      solution:
        'The angles around a point account for one complete rotation, so $x + 2x + (3x + 10^\\circ) + 80^\\circ = 360^\\circ$. Collect the terms: $6x + 90^\\circ = 360^\\circ$, so $6x = 270^\\circ$ and $x = 45^\\circ$. The four angles are $45^\\circ$, $90^\\circ$, $3(45^\\circ) + 10^\\circ = 145^\\circ$, and $80^\\circ$, and the largest is $145^\\circ$. Second route by trial and adjustment, with no equation at all. Try $x = 40^\\circ$: the angles come to $40 + 80 + 130 + 80 = 330$, which is $30^\\circ$ short of the full turn. Raising $x$ by $1^\\circ$ raises the total by $1 + 2 + 3 = 6^\\circ$, so we need $30 \\div 6 = 5$ more degrees of $x$, giving $x = 45^\\circ$ ✓. Rebuild: $45 + 90 + 145 + 80 = 360$ ✓. ANSWERING WITH x INSTEAD OF THE ANGLE gives $45^\\circ$ ✗. FORGETTING TO ADD THE 10 gives $135^\\circ$ ✗. USING 180 INSTEAD OF 360 gives $x = 15^\\circ$ ✗ and a set of angles that would only fill half a turn.',
    },
    {
      q: 'Around a point, four angles measure $x$, $3x$, $2x + 30^\\circ$, and $60^\\circ$. Find the largest of the four.',
      answer: '$135^\\circ$',
      solution:
        'A full turn is $360^\\circ$, so $x + 3x + (2x + 30^\\circ) + 60^\\circ = 360^\\circ$. That tidies to $6x + 90^\\circ = 360^\\circ$, so $6x = 270^\\circ$ and $x = 45^\\circ$. The four angles are $45^\\circ$, $135^\\circ$, $120^\\circ$, and $60^\\circ$, so the largest is $3x = 135^\\circ$. Second route by trial and adjustment: at $x = 40^\\circ$ the four come to $40 + 120 + 110 + 60 = 330$, which is $30^\\circ$ short; each extra degree of $x$ adds $1 + 3 + 2 = 6^\\circ$, so $x$ must rise by $30 \\div 6 = 5$, landing on $45^\\circ$ ✓. Rebuild: $45 + 135 + 120 + 60 = 360$ ✓. ASSUMING THE EXPRESSION WITH THE EXTRA DEGREES IS LARGEST is the trap this lane is built around: $2x + 30^\\circ$ carries a visible bonus of $30^\\circ$ and still lands at $120^\\circ$ ✗, below the plain $3x = 135^\\circ$. ANSWERING WITH x INSTEAD OF THE ANGLE gives $45^\\circ$ ✗.',
    },
    {
      q: 'A pinwheel has four blades meeting at one point, and the angles between neighboring blades measure $x$, $2x$, $3x + 50^\\circ$, and $70^\\circ$. Find the largest of the four angles.',
      answer: '$170^\\circ$',
      solution:
        'The four angles wrap once around the center, so they total $360^\\circ$: $x + 2x + (3x + 50^\\circ) + 70^\\circ = 360^\\circ$. This becomes $6x + 120^\\circ = 360^\\circ$, so $6x = 240^\\circ$ and $x = 40^\\circ$. The angles are $40^\\circ$, $80^\\circ$, $3(40^\\circ) + 50^\\circ = 170^\\circ$, and $70^\\circ$; the largest is $170^\\circ$. Second route by trial and adjustment: at $x = 35^\\circ$ the total is $35 + 70 + 155 + 70 = 330$, which is $30^\\circ$ short, and each degree added to $x$ adds $6^\\circ$ to the total, so $x$ climbs by $5$ to $40^\\circ$ ✓. Rebuild: $40 + 80 + 170 + 70 = 360$ ✓. Note that $170^\\circ$ is just under a straight angle, so two of the blades very nearly line up — the arithmetic says so even though a quick sketch might not. ANSWERING WITH x INSTEAD OF THE ANGLE gives $40^\\circ$ ✗. FORGETTING TO ADD THE 50 gives $120^\\circ$ ✗. USING 180 INSTEAD OF 360 gives $x = 10^\\circ$ ✗.',
    },
  ],

  // p10 — exterior angle at C given, with angle A a fixed amount larger than
  //       angle B; find angle A. Lanes: 132 and 20 -> 76, 108 and 14 -> 61,
  //       146 and 30 -> 88. The second route splits the difference around the
  //       average instead of solving an equation, and the interior angle at C
  //       gives an independent full-triangle check.
  [
    {
      q: 'The exterior angle at $C$ in triangle $ABC$ measures $132^\\circ$. If $\\angle A$ exceeds $\\angle B$ by $20^\\circ$, find $\\angle A$.',
      answer: '$\\angle A = 76^\\circ$',
      solution:
        'By the Exterior Angle Theorem the exterior angle at $C$ equals the sum of the two remote interior angles, so $\\angle A + \\angle B = 132^\\circ$. Substituting $\\angle A = \\angle B + 20^\\circ$ gives $2\\angle B + 20^\\circ = 132^\\circ$, so $2\\angle B = 112^\\circ$, $\\angle B = 56^\\circ$, and $\\angle A = 76^\\circ$. Second route by splitting the difference, with no equation. If the two angles were equal they would each be half of $132^\\circ$, which is $66^\\circ$. The $20^\\circ$ gap is shared evenly around that average — $10^\\circ$ up for the larger, $10^\\circ$ down for the smaller — so $\\angle A = 66^\\circ + 10^\\circ = 76^\\circ$ and $\\angle B = 66^\\circ - 10^\\circ = 56^\\circ$ ✓. An independent check on the whole triangle: the interior angle at $C$ is $180^\\circ - 132^\\circ = 48^\\circ$, and $76 + 56 + 48 = 180$ ✓. ADDING THE WHOLE DIFFERENCE INSTEAD OF HALF OF IT gives $86^\\circ$ ✗, and then $\\angle B$ would be $46^\\circ$, summing to $132$ only by accident — check it: $86 + 46 = 132$, but $86 - 46 = 40$ ✗, not the $20^\\circ$ gap we were given. ANSWERING WITH $\\angle B$ gives $56^\\circ$ ✗.',
    },
    {
      q: 'In triangle $ABC$, one side is extended past $C$ to make an exterior angle of $108^\\circ$. Given that $\\angle A$ is $14^\\circ$ larger than $\\angle B$, find $\\angle A$.',
      answer: '$\\angle A = 61^\\circ$',
      solution:
        'The exterior angle at $C$ equals the sum of the remote interior angles, so $\\angle A + \\angle B = 108^\\circ$. With $\\angle A = \\angle B + 14^\\circ$, that becomes $2\\angle B + 14^\\circ = 108^\\circ$, so $\\angle B = 47^\\circ$ and $\\angle A = 61^\\circ$. Second route by splitting the difference: the average of the two is $108^\\circ \\div 2 = 54^\\circ$, and half of the $14^\\circ$ gap is $7^\\circ$, so $\\angle A = 54^\\circ + 7^\\circ = 61^\\circ$ and $\\angle B = 54^\\circ - 7^\\circ = 47^\\circ$ ✓. Independent check on the triangle: $\\angle C = 180^\\circ - 108^\\circ = 72^\\circ$, and $61 + 47 + 72 = 180$ ✓, with $61 - 47 = 14$ ✓ matching the given gap. TREATING THE EXTERIOR ANGLE AS THE INTERIOR ANGLE AT C is the trap: that would give $\\angle A + \\angle B = 180^\\circ - 108^\\circ = 72^\\circ$ and $\\angle A = 43^\\circ$ ✗. ANSWERING WITH $\\angle B$ gives $47^\\circ$ ✗.',
    },
    {
      q: 'Triangle $ABC$ has an exterior angle of $146^\\circ$ at vertex $C$, and $\\angle A$ is $30^\\circ$ larger than $\\angle B$. Find $\\angle A$.',
      answer: '$\\angle A = 88^\\circ$',
      solution:
        'The exterior angle at $C$ is the sum of the two remote interior angles: $\\angle A + \\angle B = 146^\\circ$. Since $\\angle A = \\angle B + 30^\\circ$, we get $2\\angle B + 30^\\circ = 146^\\circ$, so $2\\angle B = 116^\\circ$, $\\angle B = 58^\\circ$, and $\\angle A = 88^\\circ$. Second route by splitting the difference: half of $146^\\circ$ is $73^\\circ$, and half of the $30^\\circ$ gap is $15^\\circ$, so $\\angle A = 73^\\circ + 15^\\circ = 88^\\circ$ and $\\angle B = 73^\\circ - 15^\\circ = 58^\\circ$ ✓. Full-triangle check: $\\angle C = 180^\\circ - 146^\\circ = 34^\\circ$, and $88 + 58 + 34 = 180$ ✓. Note that $\\angle A = 88^\\circ$ is acute even though the exterior angle at $C$ is a wide $146^\\circ$ — a big exterior angle means a small interior angle at that vertex, not a right angle elsewhere. ADDING THE WHOLE DIFFERENCE INSTEAD OF HALF OF IT gives $103^\\circ$ ✗. TREATING THE EXTERIOR ANGLE AS THE INTERIOR ANGLE AT C gives $\\angle A + \\angle B = 34^\\circ$ and $\\angle A = 32^\\circ$ ✗, which cannot be right because $\\angle A$ alone must be smaller than the exterior angle it helps build, yet still large enough to leave $\\angle B$ positive.',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 2,
  worksheet,
}
