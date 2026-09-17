# Introduction to Geometry — checkpoint lanes

Six checkpoints (`src/data/checkpoints/intro-geometry/cp1.js` … `cp6.js`), placed after
chapters 3, 6, 9, 12, 15, 19. Each covers chapters 1 through the one it follows; Prealgebra
is assumed known and may be drawn on freely (it counts toward neither quota). Read
`notes/checkpoint-spec.md` first — bands, quotas, choice ordering, verification — and the
arena lane table in `notes/arena-spec.md`, whose geometry shapes are taken.

How to read a lane: the archetype names the idea AND the twist that hides it. The author
picks the scenario, the numbers, and the key; the lane fixes the idea and the chapter. "fig"
lanes use the DSL in `src/components/Fig.jsx` (`poly`, `seg` with `dash:true`, `line`,
`circle`, `arc`, `point`, `label`, `angle`, `right`, `tick`; `grid` where chapter files use
it) at uniform scale, so the asked quantity is never labeled and at least one distractor
sits on the same side of every labeled reference length as the answer. Every lane is a
contest-style disguise of a technique, never a restatement of a library stem. Never name a
competition, a textbook, or a publisher anywhere.

Verify keys with coordinates (or brute force for counts) before writing choices. Where a
lane names sample numbers they are illustrations of the shape, not the key — choose fresh
numbers and check them.

## Checkpoint 1 — after chapter 3, covers 1–3

Angles, parallel lines, triangle angle sums, congruence and isosceles facts, and the
counting vocabulary of chapter 1. No lengths beyond what Prealgebra supplies.

| slot | band | archetype | chapter | fig |
|---|---|---|---|---|
| 1 | A | Two transversals meet between a pair of parallel lines and form a triangle; the two given angles sit OUTSIDE the parallels, so each must be carried across by an alternate-interior step before the triangle sum finishes it | 2 | yes |
| 2 | A | Segments determined by marked points on two intersecting lines that share one marked point: count the segments lying wholly on one of the lines — the shared point is counted once, and the cross-line segments are the tempting overcount | 1 | no |
| 3 | A | A quadrilateral built from two congruent triangles glued along a diagonal; only one triangle's three sides are labeled and the student must read from the tick marks which labeled side is the diagonal (not in the perimeter) before adding | 3 | yes |
| 4 | B | Angle bisector from one vertex of a triangle meets the opposite side; an exterior angle at another vertex is given and the asked angle lies between the bisector and the opposite side — two applications of the exterior-angle relation, no figure so the student must draw it | 2 | no |
| 5 | B | Clock hands exactly opposite each other: the first time after a given hour when the hands point in opposite directions, as an exact fraction of a minute (hour hand moves 0.5° per minute, minute hand 6°) — a story that hides a linear equation in angles | 2 | no |
| 6 | B | Equilateral triangle drawn INSIDE a square on one of its sides; the asked angle is at the triangle's apex looking at the far side — two hidden isosceles triangles (square side = triangle side) with a 30° apex each, then the full-turn around the apex | 3 | yes |
| 7 | B | Bisectors of the two co-interior angles made by a transversal with two parallel lines meet at a point; the angle at that point — hidden relation: the two angles are supplementary so their halves sum to 90°, whatever the transversal's tilt | 2 | no |
| 8 | C | Ray reflecting off two mirrors set at a known angle to each other (angle in equals angle out at each mirror); the total turn between incoming and outgoing rays — the triangle formed by the two mirrors and the ray segment between them holds the relation (turn = twice the mirror angle) | 2 | no |
| 9 | C | Isosceles triangle with equal cuts on the two legs (D on AB, E on AC with BD = CE); segments BE and CD cross at P; the angle at P — SAS congruence gives equal base-splitting angles, so triangle PBC is isosceles and the chase closes | 3 | yes |
| 10 | C | The two interior angle bisectors from the base vertices of a triangle meet at a point; the angle there is given and the apex angle is asked (reverse direction of the usual chase: the student must set the half-angles as unknowns and use the sum) | 2 | no |
| 11 | C | Triangles with vertices among marked points lying on two lines (say four points on one, three on the other, the lines meeting elsewhere): total choose-three minus the collinear triples — the second line's triple is the one people forget | 1 | no |
| 12 | D | Point inside a square making 15° with the base at both base vertices; the asked angle is one the student cannot reach without discovering the hidden equilateral triangle on the far side (build the equilateral triangle, prove congruence, then read the angle) | 3 | yes |
| 13 | D | Points on a circle with every chord drawn, no three chords through one interior point: count the interior crossing points — the construction is the bijection crossing ↔ four endpoints; the naive count of chord pairs is a distractor | 1 | no |
| 14 | D | On side BC of a triangle, D with BD = BA and E with CE = CA (the two segments overlap); the angle DAE depends only on the apex angle A — the student must discover the independence from B and C by chasing two isosceles triangles and cancelling | 3 | yes |
| 15 | D | An isosceles triangle is cut by one segment from a vertex into two isosceles triangles; classify all possible apex angles (36°, 90°, 108°, 180/7°) and ask for the least, or for how many shapes exist up to similarity — organized casework on where the cut starts and which sides are equal | 3 | no |

Newest-three-chapters count: 15 (chapters 1–3 are the whole book so far).
Reach-back count: n/a for cp1 — every covered chapter is among the newest three; chapter 1
carries slots 2, 11, 13 (3) so the oldest material is still exercised.

Avoid (library stems a lazy author drifts into): the angle between clock hands at a stated
time (ch2); "segments bisect each other at M, why congruent" (ch3); "six rays in a
half-plane, how many angles" (ch2).

## Checkpoint 2 — after chapter 6, covers 1–6

Perimeter and area, same-base/same-altitude, similarity, Pythagoras and the two special
triangles, with three lanes reaching back to angles and congruence.

| slot | band | archetype | chapter | fig |
|---|---|---|---|---|
| 1 | A | Two shapes with the same perimeter — a stated rectangle and a square — and the difference of their areas; the reading step is that equal perimeter is what fixes the square | 4 | no |
| 2 | A | A rectangular gate braced by one diagonal: total length of timber (four sides plus the brace); the brace is a Pythagorean triple and the perimeter-only total is the trap | 6 | no |
| 3 | A | Isosceles triangle with one EXTERIOR angle given; the apex angle depends on whether that exterior angle sits at the apex or at a base vertex — the stem pins it with a reading detail, and the other case's answer is a distractor | 3 | no |
| 4 | B | Right triangles with integer legs and a given hypotenuse (e.g. 25 admits two): count them — the student must search for triples, not compute one | 6 | no |
| 5 | B | Height of a tree by a mirror laid on the ground between observer and tree (angle in equals angle out gives similar triangles); the eye height, the two ground distances labeled, the tree unlabeled | 5 | yes |
| 6 | B | Point inside a parallelogram joined to all four vertices; three of the four triangle areas given, find the fourth — hidden relation: the two triangles on opposite sides together fill half the parallelogram | 4 | no |
| 7 | B | A paper strip (two parallel edges) folded once; the crease makes a stated angle with the edge, and the angle between the two edge directions after the fold is asked — folding is reflection, so equal angles at the crease plus parallel-line angles close it | 2 | yes |
| 8 | C | A segment parallel to a triangle's base cuts off a similar triangle with exactly HALF the area; the length of that segment (base times 1/√2) — area scales by the square of the ratio, and the base/2 is the trap | 5 | yes |
| 9 | C | Two segments cross to form a bowtie (two triangles sharing vertical angles); the four tip angles are given in terms of a variable and one is asked — hidden relation: the two tips on one side sum to the two on the other | 2 | no |
| 10 | C | Tilted square inside a square, its vertices dividing the outer sides in a stated ratio (say 3 : 5); the tilted square's area as a fraction of the outer — subtract four congruent right triangles, no Pythagoras needed | 4 | yes |
| 11 | C | Two vertical poles of different heights; wires run from the top of each to the foot of the other; the height of the crossing point (harmonic-style: ab/(a+b)) — two pairs of similar triangles, distance between poles irrelevant and given as a red herring | 5 | no |
| 12 | D | Point inside a rectangle with its distances to three corners given; the distance to the fourth — the construction is dropping perpendiculars to the sides and chaining two Pythagorean identities so the sums of squares of opposite pairs match | 6 | no |
| 13 | D | Largest square with one side lying ON the hypotenuse of a given right triangle (not the square in the right-angle corner); its side length — two similar-triangle relations at the hypotenuse's ends and the altitude to the hypotenuse must be found first | 5 | yes |
| 14 | D | Quadrilateral split by both diagonals into four triangles; three areas given, find the fourth via the product-of-opposite-areas relation (same-altitude ratio used twice on the two diagonals) — then the total | 4 | no |
| 15 | D | Triangle with angles 45° and 30° and the side between them given; its area — the extra line is the altitude to that side, which is the leg of a 45-45-90 and the short leg of a 30-60-90 at once, giving an equation h + h√3 = side | 6 | yes |

Newest-three-chapters count: 12 (slots 1, 2, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15).
Reach-back count: 3 (slots 3, 7, 9).

Avoid: "a person 1.5 m tall casts a 2 m shadow / streetlight on a pole" (ch5); "a 13-foot
ladder with its foot 5 feet from the wall" (ch6); "DE ∥ BC with AD, DB, DE given, find BC" (ch5).

## Checkpoint 3 — after chapter 9, covers 1–9

Special points of a triangle, quadrilaterals, polygons; reach-back to area, similarity and
right triangles.

| slot | band | archetype | chapter | fig |
|---|---|---|---|---|
| 1 | A | Regular polygon whose interior angle exceeds its exterior angle by a stated amount; number of sides — a system of two facts (sum 180°, difference given), then 360 over the exterior | 9 | no |
| 2 | A | Rhombus with its area and ONE diagonal given; its perimeter — recover the other diagonal, halve both, Pythagoras for the side, times four | 8 | no |
| 3 | A | Guy wire from the top of a pole re-anchored farther out: wire length and first anchor distance given, second anchor distance given, new wire length asked — two Pythagorean triples chained through the pole height | 6 | no |
| 4 | B | Segment joining the midpoints of a trapezoid's two DIAGONALS; its length from the bases — it lies on the midsegment and equals half the difference of the bases (half the sum is the trap) | 8 | yes |
| 5 | B | Triangle inside a rectangle with one vertex at a corner and the other two on the far sides at stated fractions; its area by subtracting three right triangles from the rectangle | 4 | yes |
| 6 | B | A triangle has two altitudes and one side given (altitude to the given side, altitude to an unknown side); find the unknown side — the area computed two ways, the lengths of the altitudes swapped is the trap | 7 | no |
| 7 | B | Isosceles trapezoid with base angles of 60° and both bases given; its perimeter — drop two altitudes so each leg is the hypotenuse of a 30-60-90 whose short leg is half the base difference | 8 | no |
| 8 | C | Two medians of a triangle are perpendicular and their lengths are given; the side they end on — the centroid cuts each 2 : 1, so a right triangle with legs two-thirds of each median | 7 | no |
| 9 | C | Triangle formed by joining every other vertex of a regular hexagon; the fraction of the hexagon it covers (one half) — decompose into six congruent triangles and see three of them cut in half | 9 | yes |
| 10 | C | Isosceles trapezoid whose diagonals are perpendicular; the area from the two bases alone — the height equals half the sum of the bases (the 45° triangles at the crossing), so the area is the midsegment squared | 8 | yes |
| 11 | C | Regular octagon made by cutting four congruent corner triangles off a square of given side; the octagon's side length — each cut leg is x and x√2 + 2x = side, giving side (√2 − 1) | 6 | no |
| 12 | D | Distance between the incenter and the circumcenter of a right triangle with given legs — the inradius from (a + b − c)/2, the circumcenter at the hypotenuse midpoint, then coordinates or a small right triangle between the two centers | 7 | yes |
| 13 | D | Segment through the intersection of a trapezoid's diagonals, parallel to the bases, with endpoints on the legs; its length from the bases (2ab/(a + b)) — two similar-triangle setups, one on each diagonal, and the midsegment is the trap | 8 | no |
| 14 | D | Area of a regular 12-gon whose vertices are a given distance from its center — twelve isosceles triangles with 30° apex, and the insight is the altitude of a 30° triangle is half a side (no trig) | 9 | no |
| 15 | D | The four interior angle bisectors of a non-rhombus parallelogram bound a rectangle; the rectangle's diagonal from the parallelogram's sides — hidden: each bisector cuts off an isosceles triangle, so the diagonal equals the difference of the sides, whatever the angle | 7 | yes |

Newest-three-chapters count: 12 (slots 1, 2, 4, 6, 7, 8, 9, 10, 12, 13, 14, 15).
Reach-back count: 3 (slots 3, 5, 11).

Avoid: "each interior angle measures 140°, how many sides / how many diagonals in a
dodecagon" (ch9); "isosceles trapezoid with bases 16 and 6 and legs 13, find the area"
(ch8); "right triangle with legs 5 and 12, find the inradius or circumradius" (ch7).

## Checkpoint 4 — after chapter 12, covers 1–12

Inequalities, circle measure, angles in and around circles, tangents; reach-back to
polygons, same-altitude area and the altitude to a hypotenuse.

| slot | band | archetype | chapter | fig |
|---|---|---|---|---|
| 1 | A | Four sticks of stated lengths; how many different triangles can be made from three of them — check each triple against the triangle inequality, the one failing triple is what separates 3 from 4 | 10 | no |
| 2 | A | Window shaped as a rectangle topped by a semicircle; total length of frame around it (three sides plus the arc, not the fourth side) — the diameter is the width, and counting the top edge twice is the trap | 11 | no |
| 3 | A | Two regular polygons in a story (a stop sign and a hexagonal tile): the difference between one interior angle of each — two interior-angle computations then a subtraction | 9 | no |
| 4 | B | Rectangle inscribed in a circle of given radius with one side given; the other side — hidden relation: the rectangle's diagonal is a diameter (inscribed right angle), then Pythagoras | 12 | no |
| 5 | B | Belt around two equal pulleys with radius and center distance labeled; total belt length — two straight tangent segments plus two semicircles that together make one circumference | 11 | yes |
| 6 | B | Trapezoid cut by one diagonal into two triangles whose areas are in a stated ratio; one base given, find the other — same altitude between the parallels, so areas are in the ratio of the bases | 4 | no |
| 7 | B | Altitude to the hypotenuse of a right triangle splits it into two stated pieces; the altitude's length (geometric mean) via the two similar triangles — the average of the pieces is the trap | 6 | no |
| 8 | C | Goat tethered by a rope to an outside corner of a rectangular shed longer than the rope in neither direction; area it can graze — a three-quarter circle plus two quarter circles of reduced radius where the rope wraps the corners | 11 | yes |
| 9 | C | Shortest route from a point to a straight river bank and on to a second point on the same side, with the two perpendicular distances and the separation along the bank given; its length — reflect one point across the bank, then one right triangle; the triangle inequality is why it is shortest | 10 | no |
| 10 | C | Cyclic quadrilateral with a tangent line drawn at one vertex; the angle between the tangent and a side is given and the angle at the OPPOSITE vertex is asked — tangent-chord angle, then opposite angles of a cyclic quadrilateral are supplementary | 12 | yes |
| 11 | C | A coin rolls without slipping once around a fixed coin of larger radius; how many full turns it makes — the center travels a circle of radius (sum of radii), so the count is (R + r)/r, not R/r | 11 | no |
| 12 | D | Circle inscribed in a quarter-disc of given radius (tangent to both radii and the arc); its radius — the construction is the center's distance to the corner: r√2 along the bisector, plus r to the arc, equals the big radius | 12 | yes |
| 13 | D | Semicircles drawn outward on the two legs of a right triangle and one on the hypotenuse through the vertex; the two crescents (lunes) shaded — their total area equals the triangle's area, so π cancels; the student must set up and subtract the half-disc pieces | 11 | yes |
| 14 | D | Triangles with integer sides whose LONGEST side is exactly a stated value (8 gives 20); count them — casework on the middle side with the inequality bounding the shortest, and the fixed-perimeter version is not this | 10 | no |
| 15 | D | Isosceles trapezoid with an inscribed circle, both bases given; its height — tangent lengths make each leg half the sum of the bases (sum of opposite sides equal), then one 30-60-90-free Pythagoras on the leg over half the base difference | 12 | yes |

Newest-three-chapters count: 12 (slots 1, 2, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15).
Reach-back count: 3 (slots 3, 6, 7).

Avoid: "tangent from P touches circle O (radius 6) at T, OP = 10" (ch12); "how many
integers n make 5, 12, n obtuse / 9, 12, n acute" (ch10); "ring between concentric circles
of radii 4 and 2 / circle inscribed in a square of side 6" (ch11).

## Checkpoint 5 — after chapter 15, covers 1–15

Power of a point, solids, curved surfaces; reach-back to arcs, polygons and tangents.

| slot | band | archetype | chapter | fig |
|---|---|---|---|---|
| 1 | A | A pyramid and a prism stand on the same base with the same height; the prism's volume is given as a story (a tank, a block) and the pyramid's asked — the reading step is that the factor is one third, whatever the base shape | 14 | no |
| 2 | A | A can's label, peeled off, is a rectangle whose sides are given (one of them a π-multiple); the can's volume — the π-side is the circumference, so recover the radius first | 15 | no |
| 3 | A | Distance traveled by the tip of a clock's minute hand of given length over a stated number of minutes — an arc length whose fraction of a turn is minutes over sixty | 11 | no |
| 4 | B | A cube with one corner sliced off by a plane through three edge points; count its edges (or faces and vertices) — the cut adds three edges and one face; a second slice at a different corner extends it | 14 | no |
| 5 | B | Ice-cream cone: a cone with a hemisphere of the same radius sitting on its open end; total volume from labeled radius and cone height — two formulas summed, the full sphere is the trap | 15 | yes |
| 6 | B | A polygon has a stated number of diagonals; the sum of its interior angles — solve n(n − 3)/2 for n, then (n − 2)·180; the diagonals-plus-sides confusion is the trap | 9 | no |
| 7 | B | Staircase solid built from unit cubes (three or four steps, one cube deep or more); its total surface area — the view from front and back, from the two sides, and from above and below each count in pairs, so the exposed faces are found without touching each cube | 14 | yes |
| 8 | C | Two tangent lines to a circle from a point whose distance from the center is exactly twice the radius; the angle between the tangents — each radius-tangent triangle is a 30-60-90, and the angle at the center (120°) is the trap | 12 | no |
| 9 | C | A median of an inscribed triangle is extended to meet the circumscribed circle again; the extension's length from the side and the median — the midpoint is where two chords cross, so the half-side squared equals median times extension | 13 | yes |
| 10 | C | Square pyramid with base edge and LATERAL EDGE given (not slant height); its volume — the right triangle to the apex uses half the base diagonal, not half the base edge | 14 | no |
| 11 | C | Cylinder standing inside a cone (base on the cone's base, top rim on the slant surface) with the cone's radius and height and the cylinder's radius given; the cylinder's height — similar triangles in the cross-section | 15 | yes |
| 12 | D | An ant walks on the surface of a rectangular box between two opposite corners; the shortest route — unfold, compare the three candidate nets (the route crosses two faces), and the space diagonal is the trap because it goes through the box | 14 | yes |
| 13 | D | Three identical balls in one layer inside a cylindrical can, each touching the other two and the wall; the least radius of the can — the centers form an equilateral triangle, so the can's radius is the ball's radius plus the triangle's circumradius (2r/√3) | 15 | no |
| 14 | D | Two circles cross at A and B; a common tangent touches them at T and U, and line AB meets segment TU at M; TU's length from MA and AB — M has equal power to both circles, so MT² = MU² = MA·MB and M is the midpoint of TU | 13 | yes |
| 15 | D | A cube is sliced by the plane through the midpoints of six edges (the hexagonal cross-section); the cross-section's area from the cube's edge — it is a regular hexagon whose side is half a face diagonal; a square or rectangle cross-section is the trap | 14 | no |

Newest-three-chapters count: 12 (slots 1, 2, 4, 5, 7, 9, 10, 11, 12, 13, 14, 15).
Reach-back count: 3 (slots 3, 6, 8).

Avoid: "circular bridge arch spans 30 m and rises 5 m" (ch13); "4×4×4 cube built from unit
cubes, painted, count cubes with k painted faces" (ch14); "a 240° sector of radius 9 rolled
into a cone" (ch15).

## Checkpoint 6 — after chapter 19, covers 1–19

Analytic geometry, right-triangle ratios (never name sine, cosine or tangent — state the
ratio, or set the numbers so a special triangle or an altitude does the work), and the
extra-line / assign-a-variable strategies. Chapter 16 counts as reach-back here.

| slot | band | archetype | chapter | fig |
|---|---|---|---|---|
| 1 | A | Lattice points on the segment between two given lattice points (including the ends) — gcd of the coordinate differences plus one; the reading step is that "on the segment" includes the endpoints | 17 | no |
| 2 | A | Quadrilateral inscribed in a circle with one angle a stated multiple of its opposite; the larger of the two — supplementary opposite angles set up a one-step equation | 12 | no |
| 3 | A | Rectangle whose length exceeds its width by a stated amount and whose diagonal is given; its perimeter — assign a variable, Pythagoras gives a quadratic that factors to a triple | 19 | no |
| 4 | B | Triangle cut from the axes by a given line (intercept form); the shortest distance from the origin to the line — the area two ways (legs, then hypotenuse with that altitude), and the smaller intercept is the trap | 17 | no |
| 5 | B | Two straight roads leave a junction at 60°; two walkers go stated distances along them; how far apart they are — drop a perpendicular from one walker to the other road, 30-60-90, then one Pythagoras (no law named) | 18 | no |
| 6 | B | L-shaped region with all edge lengths labeled; the straight distance between two non-adjacent outer corners — the extra line completes one large right triangle whose legs are sums of edges | 19 | yes |
| 7 | B | Point of a given circle (center and radius given) nearest to the origin, and its distance — the line through the origin and the center is the hidden construction; distance to the center minus the radius | 17 | no |
| 8 | C | Area of a triangle with three given sides that hide a 60° angle (5, 7, 8 pattern) — the student may go by the semiperimeter product or by finding the 60° angle from the sides and using an altitude; either way no formula is named in the stem | 6 | no |
| 9 | C | Lattice points strictly inside a right triangle with legs on the axes and lattice vertices; the count — row-by-row counting, or area minus half the boundary plus one, where the boundary count needs the gcd along the hypotenuse | 17 | yes |
| 10 | C | Circle inscribed in a right triangle with the hypotenuse and the radius given; the triangle's area — tangent lengths give legs summing to hypotenuse plus twice the radius, then area equals radius times semiperimeter (or solve the two facts) | 19 | yes |
| 11 | C | A figure reflected over one line and then over a second line meeting the first at a stated angle; through what angle has it turned, about what point — two reflections compose to a rotation by twice the angle between the lines | 16 | no |
| 12 | D | A circle tangent to both coordinate axes passes through a given lattice point (say (8, 9)); there are two such circles and the figure shows the small one — the radius of the OTHER (the quadratic in r has roots 5 and 29) | 17 | yes |
| 13 | D | Triangle with two sides and its area given, the area chosen so the included angle is ambiguous (60° or 120°); the two possible third sides, and the paper asks for the sum of their squares — one altitude, two cases, two Pythagorean computations | 18 | no |
| 14 | D | Point inside a square with its distances to three consecutive vertices given (1, 2, 3 pattern); the square's side — the construction is a 90° rotation about a vertex carrying the point to a new point, exposing a right isosceles triangle and a 3-4-5-style right angle at the image, then one more length computation | 19 | yes |
| 15 | D | Triangle with all three sides given; the length of the median to one side — the extra line doubles the median to a parallelogram (or place the side on an axis and solve two distance equations); pick sides so the median is an integer (7, 9, 8 gives 7) | 19 | no |

Newest-three-chapters count: 12 (slots 1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 14, 15).
Reach-back count: 3 (slots 2, 8, 11).

Avoid: "which point on the y-axis is equidistant from two points" and "the circles
x² + y² = 25 and (x − 6)² + y² = 25 intersect at which points" (ch17); "a 20 m ramp at 37°,
given the sine" (ch18); "rectangle with diagonal 17 and area 120, find the perimeter" (ch19).

## Cross-checkpoint notes

- Two "point inside a square" lanes exist on purpose with different ideas: cp1 #12 (hidden
  equilateral triangle) and cp6 #14 (rotation about a vertex). Do not let cp6 #14 drift into
  a 15° angle chase.
- Two integer-triangle counts: cp2 #4 (Pythagorean triples with a fixed hypotenuse) and
  cp4 #14 (triangle inequality with a fixed longest side). Different ideas; keep them so.
- cp4 #13 (lunes) sits nearest the arena's "shaded region from overlapping circles or
  sectors"; its identity is that π cancels and the answer is the triangle's area — write it
  so the choices are mostly π-multiples and the key is not.
- Sample numbers in the lanes above are illustrations of the shape, not keys. Authors
  choose their own, keep number sets distinct from the chapter library, and verify.

