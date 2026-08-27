// Introduction to Geometry chapter 7 — variations for the printable worksheet.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key anywhere in
//    this file. Answers copy the base worksheet's phrasing shape: named
//    equalities for slot 1, `$R = ...$` / `$r = ...$` / `$h = ...$` for the
//    single-value slots, full sentences for the compound slots, and a bare
//    number for slot 10.
//  - Every answer was worked twice, by two genuinely different routes, and
//    the routes had to agree before the key was written. The pairs used are:
//    the equidistance theorem vs. the SAS congruence that proves it (slot 1);
//    half-the-hypotenuse vs. a coordinate distance check from the midpoint
//    (slot 2); Area = rs vs. the three-sliver decomposition re-derived from
//    scratch (slot 3); the 2:1 ratio vs. the equation x + 2x = median
//    (slot 4); h = 2A/b vs. solving the area equation and re-multiplying
//    (slot 5); the midsegment theorem vs. a generic-coordinates proof or the
//    1:2 similarity (slot 6); c/2 and Area/s vs. (a + b - c)/2 and exact
//    point-to-line distances (slot 7); the 2:1 ratio vs. direct coordinate
//    distance C-to-G (slot 8); Heron's pipeline vs. the exact altitude foot
//    agreeing from both slant sides plus the incenter's height (slot 9);
//    Area = r(r + 2R) vs. recovering the legs from their sum and product
//    (slot 10).
//  - Figures are coordinate-exact and were verified numerically, never
//    eyeballed. Circumcenters are true hypotenuse midpoints ((17.5, 6),
//    (10, 10.5), (20, 4.5) in slot 2; (8, 6), (20, 15), (12, 5) in slot 7),
//    incircle centers sit at the exact inradius above the base ((4, 4),
//    (10, 10), (4, 4) in slot 7; (6, 4), (10, 6), (16, 8) in slot 9), and
//    every altitude foot is the exact perpendicular foot (x = 5, 8, 15 in
//    slot 9).
//  - Figure labels are plain text: bare numerals and the letters of points.
//  - Pin deviation, reported in the authoring report: slot 5 lane 3 was
//    pinned as area 135 with side 6 giving altitude 22.5, but 2(135)/6 = 45,
//    not 22.5; the collision-checked ANSWER 22.5 is kept and the side is 12,
//    which is what area 135 and altitude 22.5 force.
//  - Two lanes brush against base content and are flagged in the authoring
//    report: slot 2 lane 2 (legs 20 and 21) shares its triangle with Section
//    7.3 problem 10, which asks for the inradius instead; slot 8 lane 2's
//    median 15 with vertex piece 10 shares its values with Section 7.4
//    problem 2, though the task here (coordinates in, three answers out) is
//    different. Slot 7 lane 1 (legs 12 and 16) deliberately shares its
//    triangle with a same-round challenge slot that runs the inverse task.
//  - Traps that run through the file, named in CAPS at the end of each
//    solution: DRAGGING IN THE SEGMENT LENGTH, HALVING THE DISTANCE,
//    ANSWERING WITH THE DIAMETER, HALVING A LEG, USING THE FULL PERIMETER,
//    FLIPPING THE FRACTION, HALVING THE MEDIAN, PUTTING THE LONG PIECE AT
//    THE MIDPOINT, DROPPING THE FACTOR OF TWO, APPLYING THE TWO TWICE,
//    DOUBLING INSTEAD OF HALVING, CALLING IT PERPENDICULAR, SWAPPING THE TWO
//    CIRCLES, AVERAGING ONLY TWO VERTICES, TAKING THE SHORT PIECE, USING THE
//    WRONG BASE, SKIPPING THE FINAL ROOT, TREATING THE RADIUS AS THE
//    HYPOTENUSE, and MULTIPLYING BY THE FULL PERIMETER.

const worksheet = [
  // slot 1 — point on a perpendicular bisector, one distance given, find the
  //          other + one-sentence why. Lanes: TD = 41; pipeline SP = 35;
  //          KV = 39 (given distance on the other endpoint).
  [
    {
      q: 'Point $T$ lies on the perpendicular bisector of $\\overline{DE}$, and $TD = 41$. Find $TE$, and give a one-sentence reason why no computation is required.',
      answer: '$TE = 41$',
      solution:
        'Route one is the theorem itself: the perpendicular bisector of $\\overline{DE}$ is exactly the set of points equidistant from $D$ and $E$, so $T$ being on it forces $TE = TD = 41$ before any arithmetic starts. Route two rebuilds that theorem from congruence: with $M$ the midpoint of $\\overline{DE}$, triangles $TMD$ and $TME$ share side $\\overline{TM}$, have $DM = ME$, and have right angles at $M$, so they are congruent by SAS and their hypotenuses match ✓. The one-sentence why: every point of the perpendicular bisector keeps equal distances to the segment’s two endpoints, because the right angle and the midpoint make the two half-triangles congruent. DRAGGING IN THE SEGMENT LENGTH stalls, waiting for $DE$ ✗ — the theorem never asks for it. HALVING THE DISTANCE reports $20.5$ ✗, confusing “equidistant from the endpoints” with “halfway along the segment.”',
    },
    {
      q: 'A pumping station $S$ is built on the perpendicular bisector of the segment joining wells $P$ and $Q$. The straight pipe from $S$ to $P$ measures $35$. How long is the straight pipe from $S$ to $Q$, and why is no calculation needed?',
      answer: '$SQ = 35$',
      solution:
        'The station sits on the perpendicular bisector of $\\overline{PQ}$, which is precisely the set of points at equal distances from $P$ and $Q$ — so $SQ = SP = 35$, and the second pipe is cut to the same length as the first. Second route without quoting the theorem: let $M$ be the midpoint of $\\overline{PQ}$; then $\\triangle SMP \\cong \\triangle SMQ$ by SAS ($PM = MQ$, right angles at $M$, shared side $\\overline{SM}$), so the two pipes are corresponding sides of congruent triangles ✓. The one-sentence why: a perpendicular bisector is a fairness line, and any point on it treats the two endpoints identically. DRAGGING IN THE SEGMENT LENGTH insists on knowing $PQ$ first ✗ — the well spacing changes nothing. HALVING THE DISTANCE lays only $17.5$ of pipe ✗ and leaves the second well dry short of the mark.',
    },
    {
      q: 'Point $K$ lies on the perpendicular bisector of $\\overline{UV}$, with $KV = 39$. Find $KU$, and explain in one sentence why the answer is forced.',
      answer: '$KU = 39$',
      solution:
        'Being on the perpendicular bisector of $\\overline{UV}$ means being equidistant from $U$ and $V$ — that is the defining property, so $KU = KV = 39$ with nothing to compute. Second route through congruence: with $M$ the midpoint of $\\overline{UV}$, the triangles $KMU$ and $KMV$ have $UM = MV$, share $\\overline{KM}$, and carry right angles at $M$, so SAS makes them congruent and $KU = KV$ ✓ — the equality is a theorem, not luck. The one-sentence why: the perpendicular bisector collects exactly the points that measure the same to both endpoints, so any distance to one endpoint is automatically the distance to the other. DRAGGING IN THE SEGMENT LENGTH waits for $UV$ ✗, information the theorem never consults. HALVING THE DISTANCE offers $19.5$ ✗ — the bisector halves the SEGMENT, not the distances to points off it.',
    },
  ],

  // slot 2 — right-triangle legs, find the circumradius (figure). Lanes:
  //          12-35-37 -> 18.5; 20-21-29 -> 14.5 (triangle shared with
  //          section 7.3 problem 10, which asks the inradius); 9-40-41
  //          -> 20.5 with D-E-F names.
  [
    {
      q: 'A right triangle has legs $12$ and $35$, as shown. Find the radius $R$ of the circle that passes through all three of its vertices.',
      fig: {
        view: [-4, -14, 38.5, 26],
        elems: [
          { t: 'circle', c: [17.5, 6], r: 18.5 },
          { t: 'poly', pts: [[0, 0], [35, 0], [0, 12]], fill: false },
          { t: 'right', at: [0, 0], from: [35, 0], to: [0, 12] },
          { t: 'label', p: [17.5, 0], text: '35', dx: 0, dy: 12 },
          { t: 'label', p: [0, 6], text: '12', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [35, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 12], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [17.5, 6], label: 'O', dx: 10, dy: -6 },
        ],
      },
      answer: '$R = 18.5$',
      solution:
        'The hypotenuse comes first: $\\sqrt{12^2 + 35^2} = \\sqrt{144 + 1225} = \\sqrt{1369} = 37$. A right triangle’s circumcenter is the midpoint of its hypotenuse — the hypotenuse subtends the right angle, so it must be a diameter — and the circumradius is half of it: $R = \\frac{37}{2} = 18.5$. Second route through coordinates: with the right angle at $A(0, 0)$, $B(35, 0)$, $C(0, 12)$, the hypotenuse midpoint is $O(17.5, 6)$, and $OA = \\sqrt{17.5^2 + 6^2} = \\sqrt{306.25 + 36} = \\sqrt{342.25} = 18.5$ ✓, with $OB$ and $OC$ each half the hypotenuse by the midpoint property — one circle really does catch all three vertices. Triple check: $37^2 - 35^2 = (37 - 35)(37 + 35) = 144 = 12^2$ ✓, so $12$-$35$-$37$ locks together. ANSWERING WITH THE DIAMETER turns in $37$ ✗ — that is the whole hypotenuse, twice the radius. HALVING A LEG reports $6$ or $17.5$ ✗; only the hypotenuse gets halved, because only the hypotenuse is a diameter.',
    },
    {
      q: 'The right triangle shown has legs $20$ and $21$. Find its circumradius.',
      fig: {
        view: [-6.5, -6, 26.5, 27],
        elems: [
          { t: 'circle', c: [10, 10.5], r: 14.5 },
          { t: 'poly', pts: [[0, 0], [20, 0], [0, 21]], fill: false },
          { t: 'right', at: [0, 0], from: [20, 0], to: [0, 21] },
          { t: 'label', p: [10, 0], text: '20', dx: 0, dy: 12 },
          { t: 'label', p: [0, 10.5], text: '21', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [20, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 21], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [10, 10.5], label: 'O', dx: 12, dy: -4 },
        ],
      },
      answer: '$R = 14.5$',
      solution:
        'The hypotenuse is $\\sqrt{20^2 + 21^2} = \\sqrt{400 + 441} = \\sqrt{841} = 29$, and the circumcenter of a right triangle is the hypotenuse midpoint, so $R = \\frac{29}{2} = 14.5$. Second route by measuring from the center in the figure: with $A(0, 0)$, $B(20, 0)$, $C(0, 21)$, the midpoint of $\\overline{BC}$ is $O(10, 10.5)$, and its distance to each vertex is $\\sqrt{10^2 + 10.5^2} = \\sqrt{100 + 110.25} = \\sqrt{210.25} = 14.5$ ✓ — the run-and-rise pair $(10, 10.5)$ repeats for all three vertices, so the three distances agree without three separate computations. Units-digit sanity: $400 + 441$ ends in $1$, and $29^2 = 841$ does too ✓. ANSWERING WITH THE DIAMETER reports $29$ ✗, forgetting the halving that turns a diameter into a radius. HALVING A LEG offers $10$ or $10.5$ ✗ — those are coordinates of the center, not its distance to anything.',
    },
    {
      q: 'In right triangle $DEF$, the right angle is at $E$, with $EF = 40$ and $ED = 9$, as shown. Find the radius of the circumscribed circle.',
      fig: {
        view: [-3, -17.5, 42.5, 26.5],
        elems: [
          { t: 'circle', c: [20, 4.5], r: 20.5 },
          { t: 'poly', pts: [[0, 0], [40, 0], [0, 9]], fill: false },
          { t: 'right', at: [0, 0], from: [40, 0], to: [0, 9] },
          { t: 'label', p: [20, 0], text: '40', dx: 0, dy: 12 },
          { t: 'label', p: [0, 4.5], text: '9', dx: -10, dy: 0 },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [40, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [0, 9], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [20, 4.5], label: 'O', dx: 10, dy: -6 },
        ],
      },
      answer: '$R = 20.5$',
      solution:
        'The hypotenuse $\\overline{DF}$ sits across from the right angle at $E$: $DF = \\sqrt{9^2 + 40^2} = \\sqrt{81 + 1600} = \\sqrt{1681} = 41$. The circumscribed circle of a right triangle has the hypotenuse as a diameter, so its radius is $R = \\frac{41}{2} = 20.5$, centered at the hypotenuse midpoint. Second route from the figure’s center: $O(20, 4.5)$ is the midpoint of $\\overline{DF}$, and $OE = \\sqrt{20^2 + 4.5^2} = \\sqrt{400 + 20.25} = \\sqrt{420.25} = 20.5$ ✓ — the right-angle vertex, which is NOT an endpoint of the diameter, still sits exactly one radius from the center, which is the whole point of the theorem. Difference-of-squares check on the triple: $41^2 - 40^2 = (1)(81) = 9^2$ ✓, so $9$-$40$-$41$ is genuine. ANSWERING WITH THE DIAMETER submits $41$ ✗. HALVING A LEG submits $4.5$ or $20$ ✗ — the legs are chords of the circle, not diameters, and chords do not get halved into radii.',
    },
  ],

  // slot 3 — perimeter and area given, find the inradius. Lanes:
  //          P = 48, A = 132 -> 5.5; P = 40, A = 90 -> 4.5;
  //          P = 44, A = 143 -> 6.5.
  [
    {
      q: 'A triangular basin has perimeter $48$, and the water surface inside it has area $132$. Find the radius of the basin’s inscribed circle.',
      answer: '$r = 5.5$',
      solution:
        'The formula Area $= rs$ wants the SEMIperimeter: $s = \\frac{48}{2} = 24$, so $132 = 24r$ and $r = \\frac{132}{24} = 5.5$. Second route rebuilds the formula instead of quoting it: joining the incenter to the three vertices cuts the triangle into three slivers whose bases are the three sides and whose common height is $r$, so the total area is $\\frac{r}{2}(\\text{sum of the sides}) = \\frac{r}{2} \\cdot 48 = 24r$; setting $24r = 132$ lands on $r = 5.5$ ✓ — the same equation, derived from scratch. Reverse check: $rs = 5.5 \\times 24 = 132$ ✓. USING THE FULL PERIMETER divides $132$ by $48$ and reports $2.75$ ✗, exactly half the truth — the halving is already built into $s$. FLIPPING THE FRACTION computes $\\frac{24}{132}$ ✗; the area rides on top, because a bigger triangle with the same boundary needs a fatter circle.',
    },
    {
      q: 'The three sides of a triangular banner add up to $40$, and the banner’s area is $90$. What is the banner’s inradius?',
      answer: '$r = 4.5$',
      solution:
        'The side sum is the perimeter, so the semiperimeter is $s = \\frac{40}{2} = 20$, and Area $= rs$ gives $90 = 20r$, so $r = \\frac{90}{20} = 4.5$. Second route through the sliver decomposition: the incenter is the one interior point at the same perpendicular distance $r$ from every side, so slicing from it to the vertices makes three triangles of areas $\\frac{r}{2}$ times each side; the areas total $\\frac{r}{2} \\cdot 40 = 20r$, and matching that to $90$ returns $r = 4.5$ ✓ — the identity is nothing more than this bookkeeping. Reverse check: $4.5 \\times 20 = 90$ ✓. USING THE FULL PERIMETER reports $\\frac{90}{40} = 2.25$ ✗, a circle half the right size. FLIPPING THE FRACTION computes $\\frac{20}{90}$ ✗ and produces a “radius” smaller than $1$ for a banner that plainly holds a bigger circle.',
    },
    {
      q: 'A triangle has perimeter $44$. Its incircle touches all three sides, and the triangle’s area is $143$. Find the incircle’s radius.',
      answer: '$r = 6.5$',
      solution:
        'Semiperimeter first: $s = \\frac{44}{2} = 22$. Then Area $= rs$ gives $143 = 22r$, so $r = \\frac{143}{22} = 6.5$. Second route re-derives the equation: connect the incenter to the three vertices; each of the three resulting triangles has a side of the big triangle as base and the SAME height $r$ (the incircle’s radius reaches every side perpendicularly), so the areas add to $\\frac{r}{2} \\cdot 44 = 22r$, and $22r = 143$ forces $r = 6.5$ ✓ — quoting nothing, just adding slivers. Reverse check: $6.5 \\times 22 = 143$ ✓. USING THE FULL PERIMETER computes $\\frac{143}{44} = 3.25$ ✗, half the answer — the most common slip in this entire section. FLIPPING THE FRACTION offers $\\frac{22}{143}$ ✗; dimensional sense alone rejects it, since dividing a length by an area cannot produce a length.',
    },
  ],

  // slot 4 — median split by the centroid, say which piece touches the
  //          vertex. Lanes: 27 -> 18/9; 33 -> 22/11; 45 -> 30/15.
  [
    {
      q: 'In triangle $PQR$, the median $\\overline{PM}$ has length $27$, and the three medians meet at $G$. Into what two lengths does $G$ divide $\\overline{PM}$? Say which piece touches the vertex $P$.',
      answer: '$18$ (vertex side) and $9$ (midpoint side)',
      solution:
        'The centroid divides every median $2:1$ with the longer piece at the vertex, so $PG = \\frac{2}{3} \\cdot 27 = 18$ and $GM = \\frac{1}{3} \\cdot 27 = 9$. Second route by equation instead of quoted fractions: call the midpoint piece $x$; then the vertex piece is $2x$, and the whole median gives $x + 2x = 27$, so $x = 9$ and $2x = 18$ ✓. Checks: $18 + 9 = 27$ ✓ and $18 : 9 = 2 : 1$ ✓, long piece against $P$. The direction has a memory hook: the centroid averages all three vertices, and two of the three sit across the triangle from $P$, so the balance point is pulled toward the far side — near the midpoint, far from the vertex. HALVING THE MEDIAN reports $13.5$ and $13.5$ ✗; the centroid is never a median’s midpoint. PUTTING THE LONG PIECE AT THE MIDPOINT swaps the split ✗ — the long haul always runs from the vertex to the centroid.',
    },
    {
      q: 'A median of a triangle measures $33$. The centroid cuts it into two pieces. How long is each piece, and which one has an endpoint at the vertex?',
      answer: '$22$ (vertex side) and $11$ (midpoint side)',
      solution:
        'The $2:1$ centroid split puts $\\frac{2}{3} \\cdot 33 = 22$ on the vertex side and $\\frac{1}{3} \\cdot 33 = 11$ on the midpoint side. Second route from the definition of thirds: the centroid sits two thirds of the way along the median measured from the vertex, so the two pieces are $\\frac{2}{3}$ and $\\frac{1}{3}$ of $33$; solving $x + 2x = 33$ delivers the same $x = 11$ and $2x = 22$ ✓. Checks: $22 + 11 = 33$ ✓, $22 : 11 = 2 : 1$ ✓. Why the vertex owns the long piece: the other two vertices both lie beyond the centroid, dragging the average toward the opposite side, so the centroid ends up close to the midpoint it is aiming at. HALVING THE MEDIAN answers $16.5$ twice ✗ — an even split would make the centroid a midpoint, which the $2:1$ theorem forbids. PUTTING THE LONG PIECE AT THE MIDPOINT reverses the labels ✗ and fails the memory hook above.',
    },
    {
      q: 'The centroid of a triangle lies on a median of length $45$. Find the lengths of the two segments the centroid creates, and state which segment touches the vertex.',
      answer: '$30$ (vertex side) and $15$ (midpoint side)',
      solution:
        'Two thirds of the median belongs to the vertex side: $\\frac{2}{3} \\cdot 45 = 30$, leaving $\\frac{1}{3} \\cdot 45 = 15$ from the centroid to the midpoint. Second route by the equation: with midpoint piece $x$ and vertex piece $2x$, the total is $3x = 45$, so $x = 15$ and $2x = 30$ ✓ — the ratio drops out of the algebra rather than being quoted. Checks: $30 + 15 = 45$ ✓ and $30 : 15 = 2 : 1$ ✓. A quick plausibility test: the centroid must sit closer to the side than to the vertex (it averages three corners, two of which are far away), and $15 < 30$ places it exactly there. HALVING THE MEDIAN reports $22.5$ and $22.5$ ✗, a split no centroid ever makes. PUTTING THE LONG PIECE AT THE MIDPOINT hands the $30$ to the wrong end ✗ — vertex to centroid is the long leg of the journey, every time.',
    },
  ],

  // slot 5 — area and one side given, find the altitude to that side.
  //          Lanes: A = 75, side 24 -> 6.25; A = 87, side 6 -> 29;
  //          A = 135, side 12 -> 22.5 (pin listed side 6, which contradicts
  //          the pinned answer; the answer 22.5 is kept and the side is 12).
  [
    {
      q: 'A triangular sail has area $75$, and the boom along its bottom edge measures $24$. Find the altitude drawn to that edge.',
      answer: '$h = 6.25$',
      solution:
        'From Area $= \\frac{1}{2} b h$ with the boom as base: $h = \\frac{2 \\cdot 75}{24} = \\frac{150}{24} = 6.25$. Second route by setting up the equation before touching numbers: $\\frac{1}{2} \\cdot 24 \\cdot h = 75$ collapses to $12h = 75$, so $h = 6.25$ ✓; the reverse check $\\frac{1}{2} \\cdot 24 \\cdot 6.25 = 12 \\times 6.25 = 75$ ✓ closes the loop. Sense check: a long base under a modest area should carry a short altitude, and $6.25$ is barely a quarter of the boom — base and height trade off to keep the product fixed. DROPPING THE FACTOR OF TWO divides $75$ by $24$ and reports $3.125$ ✗ — the area formula hides a half that must be undone. APPLYING THE TWO TWICE computes $\\frac{4 \\cdot 75}{24} = 12.5$ ✗; the two undoes the built-in half exactly once, never twice.',
    },
    {
      q: 'A tall, skinny pennant is a triangle of area $87$ whose short edge measures $6$. How long is the altitude drawn to the short edge?',
      answer: '$h = 29$',
      solution:
        'Flip the area formula: $h = \\frac{2 \\cdot \\text{Area}}{b} = \\frac{2 \\cdot 87}{6} = \\frac{174}{6} = 29$. Second route through the equation: $\\frac{1}{2} \\cdot 6 \\cdot h = 87$ says $3h = 87$, so $h = 29$ ✓, and re-multiplying $\\frac{1}{2} \\cdot 6 \\cdot 29 = 3 \\times 29 = 87$ ✓ confirms it. The shape makes sense: a base of $6$ supporting an area of $87$ must reach far — the altitude is nearly five times the base, exactly the tall-skinny pennant promised, and a good reminder that the SHORTEST side carries the LONGEST altitude. DROPPING THE FACTOR OF TWO reports $\\frac{87}{6} = 14.5$ ✗, a pennant only half as tall as its area demands. APPLYING THE TWO TWICE reports $\\frac{4 \\cdot 87}{6} = 58$ ✗ — one factor of $2$ cancels the formula’s half; a second one has no job to do.',
    },
    {
      q: 'A triangle has area $135$, and one of its sides measures $12$. Find the length of the altitude to that side.',
      answer: '$h = 22.5$',
      solution:
        'From Area $= \\frac{1}{2} b h$: $h = \\frac{2 \\cdot 135}{12} = \\frac{270}{12} = 22.5$. Second route by solving rather than substituting: $\\frac{1}{2} \\cdot 12 \\cdot h = 135$ gives $6h = 135$, so $h = 22.5$ ✓, and the reverse check $\\frac{1}{2} \\cdot 12 \\cdot 22.5 = 6 \\times 22.5 = 135$ ✓ lands back on the stated area. Worth noticing: the altitude need not fit inside the triangle at all — if the opposite vertex leans past the side, the foot lands on the side’s extension — but its LENGTH is fixed by area and base alone, which is why the problem is solvable without a picture. DROPPING THE FACTOR OF TWO turns in $\\frac{135}{12} = 11.25$ ✗, half the height. APPLYING THE TWO TWICE turns in $\\frac{4 \\cdot 135}{12} = 45$ ✗ — undoing the half is a one-time correction, not a habit.',
    },
  ],

  // slot 6 — midsegment from the third side + direction relation. Lanes:
  //          QR = 54 -> 27 (generic-coordinates route); EF = 56 -> 28
  //          (similarity route); YZ = 64 -> 32 (coordinates route).
  [
    {
      q: 'In triangle $PQR$, point $M$ is the midpoint of $\\overline{PQ}$ and point $N$ is the midpoint of $\\overline{PR}$. Given $QR = 54$, find $MN$, and state how $\\overline{MN}$ points compared with $\\overline{QR}$.',
      answer: '$MN = 27$, and $\\overline{MN} \\parallel \\overline{QR}$',
      solution:
        '$\\overline{MN}$ joins the midpoints of two sides, so it is a midsegment: parallel to the third side and half its length, giving $MN = \\frac{54}{2} = 27$ with $\\overline{MN} \\parallel \\overline{QR}$. Second route by bare coordinates, quoting nothing: put $Q(0, 0)$, $R(54, 0)$, and $P(a, b)$ anywhere at all. Then $M = \\left(\\frac{a}{2}, \\frac{b}{2}\\right)$ and $N = \\left(\\frac{a + 54}{2}, \\frac{b}{2}\\right)$: the equal heights make $\\overline{MN}$ horizontal, parallel to $\\overline{QR}$ ✓, and its length is $\\frac{a + 54}{2} - \\frac{a}{2} = 27$ ✓ no matter what $a$ and $b$ are — that “no matter what” is the midsegment theorem being reproved on the spot. DOUBLING INSTEAD OF HALVING reports $108$ ✗; doubling converts a midsegment up to its side, and this trip runs downhill. CALLING IT PERPENDICULAR ✗ misstates the relation — a midsegment runs alongside the third side, never across it.',
    },
    {
      q: 'Points $J$ and $K$ are the midpoints of sides $\\overline{DE}$ and $\\overline{DF}$ of triangle $DEF$, and $EF = 56$. Find $JK$, and describe the direction of $\\overline{JK}$ relative to $\\overline{EF}$.',
      answer: '$JK = 28$, and $\\overline{JK} \\parallel \\overline{EF}$',
      solution:
        'The midsegment theorem answers both parts at once: $JK = \\frac{56}{2} = 28$ and $\\overline{JK} \\parallel \\overline{EF}$. Second route through the similarity that powers the theorem: triangles $DJK$ and $DEF$ share the angle at $D$, and the sides around it satisfy $DJ = \\frac{1}{2} DE$ and $DK = \\frac{1}{2} DF$, so SAS similarity makes $\\triangle DJK$ a half-scale copy of $\\triangle DEF$ ✓. Copies keep angles, so $\\angle DJK = \\angle DEF$ and the lines are parallel by corresponding angles ✓; copies scale lengths, so $JK = \\frac{1}{2} \\cdot 56 = 28$ ✓ — parallel and half-length are two shadows of one similarity. DOUBLING INSTEAD OF HALVING answers $112$ ✗, growing the small triangle instead of shrinking the big one. CALLING IT PERPENDICULAR ✗ has the direction wrong by a quarter turn; a midsegment is a slid-up, shrunken copy of the far side, tilted not at all.',
    },
    {
      q: 'In triangle $XYZ$, the midpoints of $\\overline{XY}$ and $\\overline{XZ}$ are $P$ and $Q$. If the side $\\overline{YZ}$ measures $64$, how long is $\\overline{PQ}$, and how do the two segments relate in direction?',
      answer: '$PQ = 32$, and $\\overline{PQ} \\parallel \\overline{YZ}$',
      solution:
        'As the segment between the midpoints of two sides, $\\overline{PQ}$ is a midsegment, so it is parallel to $\\overline{YZ}$ and half as long: $PQ = \\frac{64}{2} = 32$. Second route with concrete-but-general coordinates: set $Y(0, 0)$, $Z(64, 0)$, and $X(a, b)$. The midpoints are $P\\left(\\frac{a}{2}, \\frac{b}{2}\\right)$ and $Q\\left(\\frac{a + 64}{2}, \\frac{b}{2}\\right)$; matching heights force $\\overline{PQ}$ horizontal — parallel to the base ✓ — and subtracting the $x$-coordinates leaves $\\frac{64}{2} = 32$ ✓ with every trace of $a$ and $b$ canceling, which is exactly why the theorem never needs to know where $X$ is. Bonus check: the three midsegments together form the medial triangle, each side half of one original side. DOUBLING INSTEAD OF HALVING reports $128$ ✗ — that recipe reconstructs a side FROM its midsegment. CALLING IT PERPENDICULAR ✗ confuses the midsegment with an altitude; nothing about midpoints manufactures a right angle.',
    },
  ],

  // slot 7 — right-triangle legs, find BOTH r and R (figure). Lanes:
  //          12-16-20 -> r 4, R 10 (triangle deliberately shared with the
  //          same-round challenge slot running the inverse task);
  //          30-40-50 -> r 10, R 25; 10-24-26 -> r 4, R 13.
  [
    {
      q: 'The right triangle shown has legs $12$ and $16$. Both of its special circles are drawn. Find the inradius $r$ and the circumradius $R$.',
      fig: {
        view: [-4, -5.5, 19.5, 17.5],
        elems: [
          { t: 'circle', c: [8, 6], r: 10 },
          { t: 'poly', pts: [[0, 0], [16, 0], [0, 12]], fill: false },
          { t: 'right', at: [0, 0], from: [16, 0], to: [0, 12] },
          { t: 'circle', c: [4, 4], r: 4 },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 12 },
          { t: 'label', p: [0, 6], text: '12', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 12], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [4, 4], label: 'I', dx: 4, dy: -10 },
          { t: 'point', p: [8, 6], label: 'O', dx: 12, dy: -4 },
        ],
      },
      answer: '$r = 4$ and $R = 10$',
      solution:
        'Two circles, two different promises. Circumradius: the hypotenuse is $\\sqrt{12^2 + 16^2} = \\sqrt{400} = 20$, and a right triangle’s circumcenter is the hypotenuse midpoint, so $R = \\frac{20}{2} = 10$. Inradius: the area is $\\frac{1}{2} \\cdot 12 \\cdot 16 = 96$ and $s = \\frac{12 + 16 + 20}{2} = 24$, so $r = \\frac{96}{24} = 4$. Second routes for both: the right-triangle shortcut gives $r = \\frac{a + b - c}{2} = \\frac{12 + 16 - 20}{2} = 4$ ✓, and coordinates give $R$ — with the right angle at $A(0, 0)$, $B(16, 0)$, $C(0, 12)$, the center $O(8, 6)$ satisfies $OA = \\sqrt{64 + 36} = 10$ ✓, while the incircle center $(4, 4)$ sits $4$ from both legs and $\\frac{|12 \\cdot 4 + 16 \\cdot 4 - 192|}{20} = \\frac{80}{20} = 4$ from the hypotenuse ✓. SWAPPING THE TWO CIRCLES trades the answers ✗: equal distances to SIDES is $r$, to VERTICES is $R$. USING THE FULL PERIMETER computes $\\frac{96}{48} = 2$ ✗, half the true inradius.',
    },
    {
      q: 'A right triangle has legs $30$ and $40$, as shown with its inscribed and circumscribed circles. Determine $r$ and $R$.',
      fig: {
        view: [-7.5, -12, 47, 42],
        elems: [
          { t: 'circle', c: [20, 15], r: 25 },
          { t: 'poly', pts: [[0, 0], [40, 0], [0, 30]], fill: false },
          { t: 'right', at: [0, 0], from: [40, 0], to: [0, 30] },
          { t: 'circle', c: [10, 10], r: 10 },
          { t: 'label', p: [20, 0], text: '40', dx: 0, dy: 12 },
          { t: 'label', p: [0, 15], text: '30', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [40, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 30], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [10, 10], label: 'I', dx: 4, dy: -10 },
          { t: 'point', p: [20, 15], label: 'O', dx: 12, dy: -4 },
        ],
      },
      answer: '$r = 10$ and $R = 25$',
      solution:
        'The hypotenuse is $\\sqrt{30^2 + 40^2} = \\sqrt{2500} = 50$ — the $3$-$4$-$5$ family scaled by $10$. Circumradius: half the hypotenuse, $R = \\frac{50}{2} = 25$, centered at the hypotenuse midpoint. Inradius: the area is $\\frac{1}{2} \\cdot 30 \\cdot 40 = 600$ and $s = \\frac{30 + 40 + 50}{2} = 60$, so $r = \\frac{600}{60} = 10$. Second routes: the shortcut $r = \\frac{30 + 40 - 50}{2} = 10$ ✓ agrees, and with $A(0, 0)$, $B(40, 0)$, $C(0, 30)$ the center $O(20, 15)$ has $OA = \\sqrt{400 + 225} = \\sqrt{625} = 25$ ✓, while the incircle center $(10, 10)$ measures $10$ to each leg and $\\frac{|30 \\cdot 10 + 40 \\cdot 10 - 1200|}{50} = \\frac{500}{50} = 10$ to the hypotenuse ✓ — every promised distance checks. Scaling sanity: the $6$-$8$-$10$ triangle has $r = 2$, $R = 5$, and multiplying all lengths by $5$ multiplies both radii by $5$ ✓. SWAPPING THE TWO CIRCLES reports $r = 25$, $R = 10$ ✗ — impossible, since the incircle fits inside the circumcircle. USING THE FULL PERIMETER gives $\\frac{600}{120} = 5$ ✗ for $r$.',
    },
    {
      q: 'Both the incircle and the circumcircle of a right triangle with legs $10$ and $24$ are shown. Find the radii $r$ and $R$ of the two circles.',
      fig: {
        view: [-3.5, -9.5, 26.5, 19.5],
        elems: [
          { t: 'circle', c: [12, 5], r: 13 },
          { t: 'poly', pts: [[0, 0], [24, 0], [0, 10]], fill: false },
          { t: 'right', at: [0, 0], from: [24, 0], to: [0, 10] },
          { t: 'circle', c: [4, 4], r: 4 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 12 },
          { t: 'label', p: [0, 5], text: '10', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 10], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [4, 4], label: 'I', dx: 4, dy: -10 },
          { t: 'point', p: [12, 5], label: 'O', dx: 12, dy: -4 },
        ],
      },
      answer: '$r = 4$ and $R = 13$',
      solution:
        'Hypotenuse first: $\\sqrt{10^2 + 24^2} = \\sqrt{100 + 576} = \\sqrt{676} = 26$. The circumcircle uses the hypotenuse as a diameter, so $R = \\frac{26}{2} = 13$. The incircle needs the area, $\\frac{1}{2} \\cdot 10 \\cdot 24 = 120$, and the semiperimeter, $s = \\frac{10 + 24 + 26}{2} = 30$: then $r = \\frac{120}{30} = 4$. Second routes: the right-triangle shortcut $r = \\frac{10 + 24 - 26}{2} = 4$ ✓, and coordinates for $R$ — with $A(0, 0)$, $B(24, 0)$, $C(0, 10)$, the hypotenuse midpoint $O(12, 5)$ has $OA = \\sqrt{144 + 25} = \\sqrt{169} = 13$ ✓, while the incircle center $(4, 4)$ sits $4$ above the horizontal leg, $4$ right of the vertical leg, and $\\frac{|10 \\cdot 4 + 24 \\cdot 4 - 240|}{26} = \\frac{104}{26} = 4$ from the hypotenuse ✓ — one number, three tangencies. SWAPPING THE TWO CIRCLES ✗ hands the vertex-circle answer to the side circle; keep the jobs straight by asking which promise each circle keeps. USING THE FULL PERIMETER computes $\\frac{120}{60} = 2$ ✗, an incircle rattling around at half size.',
    },
  ],

  // slot 8 — coordinates in: centroid, median from C, and CG (figure).
  //          Lanes: A(0,0), B(18,0), C(9,12) -> G(9,4), median 12, CG 8;
  //          A(0,0), B(24,0), C(12,15) -> G(12,5), median 15, CG 10
  //          (median 15 / vertex piece 10 shares values with section 7.4
  //          problem 2 — different task, flagged in the header);
  //          A(0,0), B(30,0), C(15,21) -> G(15,7), median 21, CG 14.
  [
    {
      q: 'Triangle $ABC$ has vertices $A(0, 0)$, $B(18, 0)$, and $C(9, 12)$. Find the centroid $G$, the length of the median from $C$, and the distance $CG$.',
      fig: {
        view: [-1.5, -1.5, 19.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [18, 0], [9, 12]], fill: false },
          { t: 'seg', a: [9, 12], b: [9, 0], dash: true },
          { t: 'right', at: [9, 0], from: [18, 0], to: [9, 12] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [18, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [9, 12], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [9, 0], label: 'M', dx: 6, dy: 12 },
          { t: 'point', p: [9, 4], label: 'G', dx: 12, dy: -2 },
        ],
      },
      answer: '$G(9, 4)$; median from $C$ has length $12$; $CG = 8$',
      solution:
        'The centroid averages the vertices: $G = \\left(\\frac{0 + 18 + 9}{3}, \\frac{0 + 0 + 12}{3}\\right) = (9, 4)$. The median from $C$ ends at the midpoint of $\\overline{AB}$, $M(9, 0)$, directly below $C(9, 12)$ — and since $CA = CB = \\sqrt{9^2 + 12^2} = 15$, the triangle is isosceles and this median doubles as the altitude — so its length is $12$. The $2:1$ split then gives $CG = \\frac{2}{3} \\cdot 12 = 8$. Second route for $CG$ with no ratio at all: measure it, from $C(9, 12)$ down to $G(9, 4)$ is $12 - 4 = 8$ ✓, and $GM = 4 - 0 = 4$ ✓, with $8 : 4 = 2 : 1$ ✓ — the coordinates PROVE the ratio here rather than assuming it. AVERAGING ONLY TWO VERTICES produces a side midpoint such as $M(9, 0)$ ✗, an endpoint of a median rather than the centroid. TAKING THE SHORT PIECE reports $CG = 4$ ✗ — the vertex owns the long two-thirds of every median.',
    },
    {
      q: 'The triangle in the figure has vertices $A(0, 0)$, $B(24, 0)$, and $C(12, 15)$. Determine the centroid $G$, the length of the median drawn from $C$, and the length $CG$.',
      fig: {
        view: [-2, -2, 26, 17],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [12, 15]], fill: false },
          { t: 'seg', a: [12, 15], b: [12, 0], dash: true },
          { t: 'right', at: [12, 0], from: [24, 0], to: [12, 15] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [12, 15], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [12, 0], label: 'M', dx: 6, dy: 12 },
          { t: 'point', p: [12, 5], label: 'G', dx: 12, dy: -2 },
        ],
      },
      answer: '$G(12, 5)$; median from $C$ has length $15$; $CG = 10$',
      solution:
        'Average the three vertices for the centroid: $G = \\left(\\frac{0 + 24 + 12}{3}, \\frac{0 + 0 + 15}{3}\\right) = (12, 5)$. The midpoint of $\\overline{AB}$ is $M(12, 0)$, straight beneath the apex $C(12, 15)$ — the triangle is isosceles ($CA = CB$ by the mirror symmetry about $x = 12$), so the median from $C$ is vertical with length $15$. The centroid takes the $2:1$ split: $CG = \\frac{2}{3} \\cdot 15 = 10$, leaving $GM = 5$. Second route for $CG$ by raw distance: from $C(12, 15)$ to $G(12, 5)$ is $15 - 5 = 10$ ✓, and the ratio check $10 : 5 = 2 : 1$ ✓ falls out for free. One more check: $G$’s height $5$ is one third of the apex height $15$ ✓, the centroid riding low as it always does. AVERAGING ONLY TWO VERTICES gives points like $(12, 7.5)$, the midpoint of the median, not the centroid ✗. TAKING THE SHORT PIECE answers $CG = 5$ ✗, handing the vertex the stub instead of the long stretch.',
    },
    {
      q: 'Let $A(0, 0)$, $B(30, 0)$, and $C(15, 21)$ be the vertices of a triangle. Compute the centroid $G$, the length of the median from vertex $C$, and how far $C$ is from $G$.',
      fig: {
        view: [-2.5, -2.5, 32.5, 23],
        elems: [
          { t: 'poly', pts: [[0, 0], [30, 0], [15, 21]], fill: false },
          { t: 'seg', a: [15, 21], b: [15, 0], dash: true },
          { t: 'right', at: [15, 0], from: [30, 0], to: [15, 21] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [30, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [15, 21], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [15, 0], label: 'M', dx: 6, dy: 12 },
          { t: 'point', p: [15, 7], label: 'G', dx: 12, dy: -2 },
        ],
      },
      answer: '$G(15, 7)$; median from $C$ has length $21$; $CG = 14$',
      solution:
        'The centroid is the vertex average: $G = \\left(\\frac{0 + 30 + 15}{3}, \\frac{0 + 0 + 21}{3}\\right) = (15, 7)$. The median from $C$ runs to the midpoint $M(15, 0)$ of $\\overline{AB}$; the apex sits directly above it ($C$ and $M$ share $x = 15$, forced by the triangle’s symmetry), so the median is the vertical drop of length $21$. Then the $2:1$ ratio yields $CG = \\frac{2}{3} \\cdot 21 = 14$ and $GM = 7$. Second route for $CG$ straight from the coordinates: $C(15, 21)$ to $G(15, 7)$ is $21 - 7 = 14$ ✓, and $GM = 7 - 0 = 7$ ✓ with $14 : 7 = 2 : 1$ ✓ — ratio confirmed by subtraction, not by decree. Sanity: $G$ hovers at height $7$, one third of the way up, the balance point pulled toward the two base vertices. AVERAGING ONLY TWO VERTICES lands at $(15, 10.5)$ ✗, the median’s midpoint. TAKING THE SHORT PIECE claims $CG = 7$ ✗; the short third belongs to the midpoint end.',
    },
  ],

  // slot 9 — scalene sides in: area, inradius, and one altitude (figure).
  //          Lanes: 13-14-15 -> 84, 4, 12 (foot at x = 5, incenter (6, 4));
  //          17-25-28 -> 210, 6, 15 (foot at x = 8, incenter (10, 6));
  //          25-29-36 -> 360, 8, 20 (foot at x = 15, incenter (16, 8)).
  [
    {
      q: 'A triangle has sides $13$, $14$, and $15$. Find its area, its inradius, and the altitude to the side of length $14$.',
      fig: {
        view: [-2, -2, 16, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [5, 12]], fill: false },
          { t: 'circle', c: [6, 4], r: 4 },
          { t: 'seg', a: [5, 12], b: [5, 0], dash: true },
          { t: 'right', at: [5, 0], from: [14, 0], to: [5, 12] },
          { t: 'label', p: [7, 0], text: '14', dx: 14, dy: 12 },
          { t: 'label', p: [2.5, 6], text: '13', dx: -12, dy: -4 },
          { t: 'label', p: [9.5, 6], text: '15', dx: 12, dy: -4 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [14, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [5, 12], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [6, 4], label: 'I', dx: 12, dy: 0 },
        ],
      },
      answer: 'Area $= 84$, $r = 4$, altitude $= 12$',
      solution:
        'Heron runs the pipeline: $s = \\frac{13 + 14 + 15}{2} = 21$, differences $8$, $7$, $6$ (check: $8 + 7 + 6 = 21 = s$ ✓), and Area $= \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = \\sqrt{7056} = 84$ — group $(21)(6) = 126$ and $(8)(7) = 56$, and $126 \\times 56 = 7056$. Then $r = \\frac{84}{21} = 4$, and the altitude to the $14$ side is $h = \\frac{2 \\cdot 84}{14} = 12$. Second route through exact coordinates: with the $14$ side from $A(0, 0)$ to $B(14, 0)$, the foot of the altitude sits at $x = 5$, because $13^2 - 5^2 = 144$ and $15^2 - 9^2 = 225 - 81 = 144$ agree ✓; so the apex is $C(5, 12)$, height exactly $12$ ✓, and the incenter lands at $(6, 4)$ — precisely $r$ above the base ✓. USING THE FULL PERIMETER reports $r = \\frac{84}{42} = 2$ ✗. USING THE WRONG BASE divides into $13$ or $15$ ✗, producing altitudes nobody asked for. SKIPPING THE FINAL ROOT turns in $7056$ ✗, the square of the area.',
    },
    {
      q: 'A triangular plate has edges $17$, $25$, and $28$. Compute the plate’s area, its inradius, and the length of the altitude drawn to the edge of length $28$.',
      fig: {
        view: [-2.5, -2.5, 30.5, 17],
        elems: [
          { t: 'poly', pts: [[0, 0], [28, 0], [8, 15]], fill: false },
          { t: 'circle', c: [10, 6], r: 6 },
          { t: 'seg', a: [8, 15], b: [8, 0], dash: true },
          { t: 'right', at: [8, 0], from: [28, 0], to: [8, 15] },
          { t: 'label', p: [14, 0], text: '28', dx: 14, dy: 12 },
          { t: 'label', p: [4, 7.5], text: '17', dx: -12, dy: -4 },
          { t: 'label', p: [18, 7.5], text: '25', dx: 12, dy: -4 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [28, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [8, 15], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [10, 6], label: 'I', dx: 12, dy: 0 },
        ],
      },
      answer: 'Area $= 210$, $r = 6$, altitude $= 15$',
      solution:
        'Heron: $s = \\frac{17 + 25 + 28}{2} = 35$, differences $18$, $10$, $7$ (check: $18 + 10 + 7 = 35 = s$ ✓). Area $= \\sqrt{35 \\cdot 18 \\cdot 10 \\cdot 7}$; group $(35)(10) = 350$ and $(18)(7) = 126$, so the product is $350 \\times 126 = 44100$ and the root is $210$. Then $r = \\frac{210}{35} = 6$ and the altitude to the $28$ edge is $h = \\frac{2 \\cdot 210}{28} = 15$. Second route by exact coordinates: put the $28$ edge from $A(0, 0)$ to $B(28, 0)$; the altitude’s foot is at $x = 8$, since $17^2 - 8^2 = 225$ and $25^2 - 20^2 = 625 - 400 = 225$ agree ✓, making the apex $C(8, 15)$ — height $15$ ✓ — and the incenter comes out at $(10, 6)$, sitting exactly $r = 6$ above the long edge ✓, with the incircle grazing all three sides. USING THE FULL PERIMETER computes $r = \\frac{210}{70} = 3$ ✗, half-sized. USING THE WRONG BASE reports $\\frac{420}{17}$ or $\\frac{420}{25}$ ✗ — real altitudes of the plate, wrong edge. SKIPPING THE FINAL ROOT submits $44100$ ✗.',
    },
    {
      q: 'A surveyor records a triangular field with sides $25$, $29$, and $36$. Find the field’s area, the radius of its inscribed circle, and the altitude to the $36$ side.',
      fig: {
        view: [-3, -3, 38.5, 22],
        elems: [
          { t: 'poly', pts: [[0, 0], [36, 0], [15, 20]], fill: false },
          { t: 'circle', c: [16, 8], r: 8 },
          { t: 'seg', a: [15, 20], b: [15, 0], dash: true },
          { t: 'right', at: [15, 0], from: [36, 0], to: [15, 20] },
          { t: 'label', p: [18, 0], text: '36', dx: 14, dy: 12 },
          { t: 'label', p: [7.5, 10], text: '25', dx: -12, dy: -4 },
          { t: 'label', p: [25.5, 10], text: '29', dx: 12, dy: -4 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [36, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [15, 20], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [16, 8], label: 'I', dx: 12, dy: 0 },
        ],
      },
      answer: 'Area $= 360$, $r = 8$, altitude $= 20$',
      solution:
        'Heron: $s = \\frac{25 + 29 + 36}{2} = 45$, differences $20$, $16$, $9$ (check: $20 + 16 + 9 = 45 = s$ ✓). Group before multiplying: $(45)(20) = 900$ and $(16)(9) = 144$, both perfect squares, so Area $= \\sqrt{900 \\times 144} = 30 \\times 12 = 360$ with no giant root extraction. Then $r = \\frac{360}{45} = 8$ and the altitude to the $36$ side is $h = \\frac{2 \\cdot 360}{36} = 20$. Second route with the base on the axis from $A(0, 0)$ to $B(36, 0)$: the foot lands at $x = 15$, because $25^2 - 15^2 = 400$ and $29^2 - 21^2 = 841 - 441 = 400$ agree ✓, so the apex is $C(15, 20)$ — height $20$ ✓ — and the incenter works out to $(16, 8)$, exactly $r = 8$ above the base ✓. Every number in the figure is that computation drawn. USING THE FULL PERIMETER answers $r = \\frac{360}{90} = 4$ ✗. USING THE WRONG BASE divides $720$ by $25$ or $29$ ✗, measuring the field against the wrong fence. SKIPPING THE FINAL ROOT files $129600$ ✗ as an “area.”',
    },
  ],

  // slot 10 — right triangle with r and R given, find the area. Lanes:
  //           r 5, R 13 -> 155 (legs irrational; existence verified through
  //           sum 36, product 310, discriminant 56 > 0);
  //           r 8, R 26 -> 480 (legs 20 and 48); r 7, R 17.5 -> 294
  //           (legs 21 and 28).
  [
    {
      q: 'A right triangle has an inscribed circle of radius $5$ and a circumscribed circle of radius $13$. Find the area of the triangle.',
      answer: '$155$',
      solution:
        'The circumcircle pins the hypotenuse: it is a diameter, so $c = 2R = 26$. For a right triangle the inradius satisfies $r = s - c$ (a rearrangement of $r = \\frac{a + b - c}{2}$), so $s = r + c = 5 + 26 = 31$, and the incircle formula finishes with no legs in sight: Area $= rs = 5 \\cdot 31 = 155$. Second route hunts the legs to be sure such a triangle exists: $a + b = 2s - c = 62 - 26 = 36$ and $a^2 + b^2 = c^2 = 676$, so $ab = \\frac{(a + b)^2 - (a^2 + b^2)}{2} = \\frac{1296 - 676}{2} = 310$ and Area $= \\frac{ab}{2} = 155$ ✓ — same answer with the legs only implied. (Those legs are irrational — the roots of $t^2 - 36t + 310$, which has discriminant $56 > 0$ ✓ — and the area never needed them named.) TREATING THE RADIUS AS THE HYPOTENUSE takes $c = 13$, gets $s = 18$, and reports $90$ ✗; the hypotenuse is the DIAMETER. MULTIPLYING BY THE FULL PERIMETER doubles the answer to $310$ ✗ — Area $= rs$ runs on the semiperimeter.',
    },
    {
      q: 'The incircle of a right triangle has radius $8$, and its circumcircle has radius $26$. What is the triangle’s area?',
      answer: '$480$',
      solution:
        'Hypotenuse from the circumcircle: $c = 2R = 52$, since a right triangle’s hypotenuse is a diameter of its circumcircle. Semiperimeter from the right-triangle identity $r = s - c$: $s = r + c = 8 + 52 = 60$ — equivalently $s = r + 2R$, worth memorizing for exactly this problem shape. Then Area $= rs = 8 \\cdot 60 = 480$. Second route recovers the actual legs: $a + b = 2s - c = 120 - 52 = 68$ and $ab = 2 \\cdot \\text{Area} = 960$, so the legs solve $t^2 - 68t + 960 = 0$, whose discriminant $68^2 - 3840 = 784 = 28^2$ gives $t = \\frac{68 \\pm 28}{2}$: legs $20$ and $48$. Check them independently: $20^2 + 48^2 = 400 + 2304 = 2704 = 52^2$ ✓, $r = \\frac{20 + 48 - 52}{2} = 8$ ✓, and Area $= \\frac{1}{2} \\cdot 20 \\cdot 48 = 480$ ✓ — the whole triangle reassembled from two radii. TREATING THE RADIUS AS THE HYPOTENUSE sets $c = 26$ and unravels from there ✗. MULTIPLYING BY THE FULL PERIMETER announces $960$ ✗, twice the truth.',
    },
    {
      q: 'A right triangle’s inscribed circle has radius $7$ and its circumscribed circle has radius $17.5$. Determine the triangle’s area.',
      answer: '$294$',
      solution:
        'The hypotenuse is the circumcircle’s diameter: $c = 2R = 35$. The right-triangle inradius identity $r = \\frac{a + b - c}{2} = s - c$ then hands over the semiperimeter, $s = r + c = 7 + 35 = 42$ (the compact form: $s = r + 2R$), and the area follows at once: Area $= rs = 7 \\cdot 42 = 294$. Second route by rebuilding the legs: $a + b = 2s - c = 84 - 35 = 49$ and $ab = 2 \\cdot 294 = 588$, so the legs are roots of $t^2 - 49t + 588 = 0$ with discriminant $49^2 - 2352 = 49 = 7^2$, giving $t = \\frac{49 \\pm 7}{2}$: legs $21$ and $28$ — the $3$-$4$-$5$ family scaled by $7$. Full check: $21^2 + 28^2 = 441 + 784 = 1225 = 35^2$ ✓, $r = \\frac{21 + 28 - 35}{2} = 7$ ✓, $R = \\frac{35}{2} = 17.5$ ✓, Area $= \\frac{1}{2} \\cdot 21 \\cdot 28 = 294$ ✓. TREATING THE RADIUS AS THE HYPOTENUSE starts from $c = 17.5$ ✗ and never meets these checks. MULTIPLYING BY THE FULL PERIMETER reports $588$ ✗ — that number is $ab$, not the area; the area is half of it.',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 7,
  worksheet,
}
