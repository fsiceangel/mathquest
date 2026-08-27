// Introduction to Geometry chapter 3 — variations for section 3.4
// (ASA and AAS Congruence). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every claim was settled twice. The criterion-naming items are checked once
//    by locating the marked side relative to the marked angles, and once by a
//    genuinely different route — rebuilding the triangle from scratch to see
//    what is forced, running the third angle through the $180^\circ$ sum, or
//    testing the rival criterion against the marks the figure really carries.
//    The numeric items are checked once by the angle sum or the equation, and
//    once by substituting the finished value back into BOTH given expressions.
//  - Each slot keeps the shape of its base answer: an included-side item stays
//    an included-side item, a name-the-criterion item stays a naming item, a
//    why-it-fails item stays a why-it-fails item, and the two numeric items
//    stay numeric.
//  - Every figure is coordinate-exact. Each triangle is built with one vertex
//    at the origin of its own copy and the base along the x-axis, apex placed
//    at c*tan(B)/(tan A + tan B), c*tan A*tan B/(tan A + tan B), so a drawn
//    angle agrees with its printed label to within a hundredth of a degree.
//    In the crossed-segment figures the two parallel segments are horizontal by
//    construction, so they share the direction vector [1, 0] exactly, and each
//    crossing point was placed first with the four endpoints solved back from
//    it. Where two tick marks claim equal lengths, the coordinates deliver them.
//  - Figure labels are plain text: bare letters, bare numbers, and expressions
//    such as "4x-6" written without math delimiters.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS. The traps running through this section are: THE INCLUDED-SIDE SLIP,
//    NAMING ASA FOR A NON-INCLUDED SIDE, NAMING AAS FOR AN INCLUDED SIDE,
//    COUNTING AN UNMARKED PART, PAIRING SIDES THAT DO NOT CORRESPOND,
//    TRUSTING ANGLES TO FIX SIZE, ADDING INSTEAD OF SUBTRACTING, COPYING A
//    GIVEN ANGLE, SUBTRACTING ONLY ONE ANGLE, ANSWERING x INSTEAD OF THE
//    LENGTH, ANSWERING THE WHOLE SEGMENT, DROPPING THE MINUS SIGN, and
//    STOPPING AT 3x.
//  - No two choices inside an item name the same value.

const s34 = [
  // s1 — vocabulary: which side is included between two named angles.
  [
    {
      q: 'In $\\triangle PQR$, which side is included between $\\angle Q$ and $\\angle R$?',
      choices: ['$\\overline{QR}$', '$\\overline{PQ}$', '$\\overline{PR}$', 'Whichever side is longest'],
      answer: 0,
      solution:
        'The included side is the one whose two endpoints are the vertices of the two angles. The vertices here are $Q$ and $R$, and the side joining them is $\\overline{QR}$ ✓. Check a second, independent way by elimination instead of by the definition. Walk the three sides and ask which angles each one touches: $\\overline{PQ}$ touches $\\angle P$ and $\\angle Q$, $\\overline{PR}$ touches $\\angle P$ and $\\angle R$, and $\\overline{QR}$ touches $\\angle Q$ and $\\angle R$. Only the last one touches both of the named angles ✓, and every other side drags in $\\angle P$, which was never named. (The choices $\\overline{PQ}$ and $\\overline{PR}$ are THE INCLUDED-SIDE SLIP — each touches just one of the two angles ✗; "whichever side is longest" is a size answer to a position question, and the included side is fixed by the letters no matter which side happens to be longest ✗.)',
    },
    {
      q: 'In $\\triangle KLM$, the side included between $\\angle K$ and $\\angle M$ is which one?',
      choices: ['$\\overline{LM}$', '$\\overline{KL}$', 'The side opposite $\\angle L$ cannot be named without measurements', '$\\overline{KM}$'],
      answer: 3,
      solution:
        'Included means the side that joins the vertices of the two angles, so it must have $K$ at one end and $M$ at the other: $\\overline{KM}$ ✓. Check a second, independent way by picturing the construction. Lay down $\\overline{KM}$ as a wall, send a ray up from $K$ at the angle $\\angle K$, and send a ray up from $M$ at the angle $\\angle M$; the two rays cross at exactly one point, and that point is $L$. The wall the two angles stand on is $\\overline{KM}$ ✓ — this is why ASA locks a triangle down. (The choices $\\overline{LM}$ and $\\overline{KL}$ each touch only one of the named angles, THE INCLUDED-SIDE SLIP ✗; the measurement choice is a distraction — $\\overline{KM}$ IS the side opposite $\\angle L$, and naming it takes no measuring at all ✗.)',
    },
    {
      q: 'In $\\triangle XYZ$, side $\\overline{XZ}$ is the included side between which pair of angles?',
      choices: ['$\\angle X$ and $\\angle Y$', '$\\angle Y$ and $\\angle Z$', '$\\angle X$ and $\\angle Z$', 'Any two of the three angles'],
      answer: 2,
      solution:
        'Read the endpoints straight off the name: $\\overline{XZ}$ runs from $X$ to $Z$, so it is included between the angles at those two vertices, $\\angle X$ and $\\angle Z$ ✓. Check a second, independent way by asking which angle is left out. A side of a triangle touches exactly two of the three vertices and misses one; $\\overline{XZ}$ misses $Y$, so $\\angle Y$ is the angle it does NOT touch ✓ — and every correct pair must therefore be the other two. (The choices $\\angle X$ with $\\angle Y$ and $\\angle Y$ with $\\angle Z$ both drag in the missed vertex, THE INCLUDED-SIDE SLIP ✗; "any two" ignores that each side is included between one specific pair — the other two pairs have that side sitting outside them ✗.)',
    },
  ],
  // s2 — why AAS is safe: the third angle comes free from the 180 sum.
  [
    {
      q: 'Two triangles have two pairs of equal angles, and one pair of equal sides that are NOT included between those angles. Which statement best explains why the triangles must be congruent?',
      choices: [
        'The third angles are forced to be equal too, so the given side IS included between some matching pair of angles, and ASA finishes the job',
        'A side that is not included is always the longest side, and the longest sides settle everything',
        'Two pairs of equal angles are enough on their own',
        'They need not be congruent — a non-included side leaves the size free',
      ],
      answer: 0,
      solution:
        'The three angles of a triangle add to $180^\\circ$, so once two of them are known the third has no freedom left. Both triangles therefore have all three angles matching, and the given side, wherever it sits, is included between two angles that are known to be equal — ASA applies ✓. Check a second, independent way by building the triangle rather than quoting the rule. Draw the given side; at one end put the angle that touches it, at the other end put the third angle (computed from the $180^\\circ$ sum); the two rays meet at exactly one point, so the triangle is determined and cannot be built two different ways ✓. (The longest-side choice is COUNTING AN UNMARKED PART — nothing in the setup ranks the sides ✗; "two pairs of equal angles are enough" is TRUSTING ANGLES TO FIX SIZE, and a scaled-up copy has the same angles ✗; "they need not be congruent" would be right if the given part were a second SIDE instead of an angle, but here a matched side plus two matched angles pins the size down ✗.)',
    },
    {
      q: 'AAS is sometimes described as "ASA wearing a disguise." Which step is what strips the disguise away?',
      choices: [
        'Renaming the vertices until the given side lands between the two given angles',
        'Measuring the given side to see whether it is long enough',
        'Computing the third angle from the $180^\\circ$ angle sum, which makes the given side included between two known equal angles',
        'Assuming the two triangles are the same size to begin with',
      ],
      answer: 2,
      solution:
        'In AAS the marked side sits outside the two marked angles. Subtract the two marked angles from $180^\\circ$ in each triangle: the third angles come out equal, and now the marked side is included between the angle it touches and that newly known third angle — a genuine ASA pattern ✓. Check a second, independent way with a concrete pair. Suppose $\\angle A = \\angle D = 34^\\circ$, $\\angle B = \\angle E = 59^\\circ$, and $BC = EF$. The side $\\overline{BC}$ misses $\\angle A$, so this is AAS; but $\\angle C = \\angle F = 180^\\circ - 34^\\circ - 59^\\circ = 87^\\circ$, and $\\overline{BC}$ is included between $\\angle B$ and $\\angle C$, both of which now match ✓. (Renaming vertices is PAIRING SIDES THAT DO NOT CORRESPOND — letters cannot be shuffled once the correspondence is fixed ✗; measuring for length is COUNTING AN UNMARKED PART ✗; assuming equal size assumes the very thing to be proved ✗.)',
    },
    {
      q: 'In $\\triangle ABC$ and $\\triangle DEF$ we know $\\angle A = \\angle D$, $\\angle B = \\angle E$, and $AC = DF$. Is this enough to prove the triangles congruent, and by which criterion?',
      choices: [
        'No — the equal sides are not between the equal angles, so nothing follows',
        'Yes, by AAS: $\\overline{AC}$ misses $\\angle B$, so it is a non-included side, and two angles plus a matching side is enough',
        'Yes, by ASA: $\\overline{AC}$ is included between $\\angle A$ and $\\angle B$',
        'Yes, by SAS: $\\angle A$ sits between the two known sides',
      ],
      answer: 1,
      solution:
        'Side $\\overline{AC}$ touches $\\angle A$ but not $\\angle B$, so it is NOT included between the two known angles — that is the AAS arrangement, and AAS does prove congruence ✓. Check a second, independent way by pushing through to ASA by hand. Write $\\angle C = 180^\\circ - \\angle A - \\angle B$ and $\\angle F = 180^\\circ - \\angle D - \\angle E$; the two right sides are built from equal pieces, so $\\angle C = \\angle F$. Now $\\overline{AC}$ is included between $\\angle A$ and $\\angle C$, and $\\overline{DF}$ is included between the matching $\\angle D$ and $\\angle F$ — plain ASA ✓, same conclusion by a route that never says "AAS". (The first choice is right about the position and wrong about the consequence ✗; the ASA choice is NAMING ASA FOR A NON-INCLUDED SIDE — $\\overline{AC}$ has endpoints $A$ and $C$, not $A$ and $B$ ✗; the SAS choice is COUNTING AN UNMARKED PART, since only one pair of sides is known ✗.)',
    },
  ],
  // s3 — read the marks off a two-triangle figure and name the criterion.
  [
    {
      q: 'Which congruence criterion is justified by the marks drawn on these two triangles?',
      fig: {
        view: [-1, -1, 11, 3.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [3.3681, 2.3584]], fill: false },
          { t: 'poly', pts: [[6, 0], [10, 0], [9.3681, 2.3584]], fill: false },
          { t: 'point', p: [0, 0], label: 'K', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'L', dx: 10, dy: 10 },
          { t: 'point', p: [3.3681, 2.3584], label: 'M', dx: 8, dy: -8 },
          { t: 'point', p: [6, 0], label: 'R', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'S', dx: 10, dy: 10 },
          { t: 'point', p: [9.3681, 2.3584], label: 'T', dx: 8, dy: -8 },
          { t: 'tick', a: [0, 0], b: [4, 0], n: 1 },
          { t: 'tick', a: [6, 0], b: [10, 0], n: 1 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [3.3681, 2.3584], r: 0.8, label: '35' },
          { t: 'angle', at: [6, 0], from: [10, 0], to: [9.3681, 2.3584], r: 0.8, label: '35' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [3.3681, 2.3584], r: 0.5, label: '75' },
          { t: 'angle', at: [10, 0], from: [6, 0], to: [9.3681, 2.3584], r: 0.5, label: '75' },
        ],
      },
      choices: ['SSS', 'ASA', 'AAS', 'SAS'],
      answer: 1,
      solution:
        'The ticked side $\\overline{KL}$ has endpoints $K$ and $L$ — exactly the vertices of the marked $35^\\circ$ and $75^\\circ$ angles — so it is the included side, and $\\overline{RS}$ sits between the same two angles in the other triangle. Angle, included side, angle: ASA ✓. Check a second, independent way by rebuilding the picture. Draw a segment of the ticked length, raise a ray at $35^\\circ$ from one end and a ray at $75^\\circ$ from the other; those two rays cross once and only once, so both triangles were forced into the same shape and size from the same three ingredients ✓. (SSS and SAS are COUNTING AN UNMARKED PART — only one pair of sides carries a tick ✗; AAS is NAMING AAS FOR AN INCLUDED SIDE, which would need the tick on a side that misses one of the marked angles ✗.)',
    },
    {
      q: 'The tick marks and the angle mark show every part known to be equal. Which congruence criterion applies here?',
      fig: {
        view: [-1, -1, 11, 3.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [1.9284, 2.2981]], fill: false },
          { t: 'poly', pts: [[6, 0], [10, 0], [7.9284, 2.2981]], fill: false },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [1.9284, 2.2981], label: 'R', dx: 0, dy: -10 },
          { t: 'point', p: [6, 0], label: 'U', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'V', dx: 10, dy: 10 },
          { t: 'point', p: [7.9284, 2.2981], label: 'W', dx: 0, dy: -10 },
          { t: 'tick', a: [0, 0], b: [4, 0], n: 1 },
          { t: 'tick', a: [6, 0], b: [10, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [1.9284, 2.2981], n: 2 },
          { t: 'tick', a: [6, 0], b: [7.9284, 2.2981], n: 2 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [1.9284, 2.2981], r: 0.75, label: '50' },
          { t: 'angle', at: [6, 0], from: [10, 0], to: [7.9284, 2.2981], r: 0.75, label: '50' },
        ],
      },
      choices: ['ASA', 'AAS', 'SAS', 'SSS'],
      answer: 2,
      solution:
        'Count what is marked: two pairs of equal sides (one tick on $\\overline{PQ}$ and $\\overline{UV}$, two ticks on $\\overline{PR}$ and $\\overline{UW}$) and one pair of equal angles, at $P$ and at $U$. That angle sits between the two marked sides, so the pattern is side, included angle, side — SAS ✓. Check a second, independent way by building from the vertex outward. From $P$, lay off the one-tick length along one ray and the two-tick length along a ray turned $50^\\circ$ away; the two far endpoints are now fixed, so the third side has only one possible length and the triangle is determined ✓. Nothing was assumed about $\\angle Q$ or $\\angle R$. (ASA and AAS are COUNTING AN UNMARKED PART — each needs a SECOND pair of equal angles, and only one angle is marked ✗; SSS would need a third pair of ticked sides ✗.)',
    },
    {
      q: 'The marks below show the parts known to be equal. Which congruence criterion do they justify?',
      fig: {
        view: [-1, -1, 11, 3.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [1.4804, 2.1142]], fill: false },
          { t: 'poly', pts: [[6, 0], [10, 0], [7.4804, 2.1142]], fill: false },
          { t: 'point', p: [0, 0], label: 'G', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'H', dx: 10, dy: 10 },
          { t: 'point', p: [1.4804, 2.1142], label: 'J', dx: -4, dy: -10 },
          { t: 'point', p: [6, 0], label: 'M', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'N', dx: 10, dy: 10 },
          { t: 'point', p: [7.4804, 2.1142], label: 'P', dx: -4, dy: -10 },
          { t: 'tick', a: [4, 0], b: [1.4804, 2.1142], n: 1 },
          { t: 'tick', a: [10, 0], b: [7.4804, 2.1142], n: 1 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [1.4804, 2.1142], r: 0.7, label: '55' },
          { t: 'angle', at: [6, 0], from: [10, 0], to: [7.4804, 2.1142], r: 0.7, label: '55' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [1.4804, 2.1142], r: 0.5, label: '40' },
          { t: 'angle', at: [10, 0], from: [6, 0], to: [7.4804, 2.1142], r: 0.5, label: '40' },
        ],
      },
      choices: ['SAS', 'ASA', 'SSS', 'AAS'],
      answer: 3,
      solution:
        'The ticked side is $\\overline{HJ}$. Its endpoints are $H$ and $J$, so it touches the $40^\\circ$ angle at $H$ but misses the $55^\\circ$ angle at $G$ — the marked side is NOT included between the marked angles, and two angles with a non-included side is AAS ✓. Check a second, independent way by turning it into ASA. The third angle in each triangle is $180^\\circ - 55^\\circ - 40^\\circ = 85^\\circ$, so $\\angle J = \\angle P = 85^\\circ$ without anything new being assumed; now $\\overline{HJ}$ IS included, between the $40^\\circ$ angle at $H$ and the $85^\\circ$ angle at $J$, and $\\overline{NP}$ sits between the matching pair ✓. (ASA is NAMING ASA FOR A NON-INCLUDED SIDE — the included side here would be $\\overline{GH}$, which carries no tick ✗; SAS and SSS are COUNTING AN UNMARKED PART, since only one pair of sides is ticked ✗.)',
    },
  ],
  // s4 — two angles are given; choose the side (or angle) equality that makes ASA.
  [
    {
      q: 'In the figure, $\\angle A = \\angle D$ and $\\angle C = \\angle F$ (matching arcs). Which pair of equal sides would let us conclude $\\triangle ABC \\cong \\triangle DEF$ by ASA?',
      fig: {
        view: [-1, -1, 11, 4.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2.7899, 3.3249]], fill: false },
          { t: 'poly', pts: [[6, 0], [10, 0], [8.7899, 3.3249]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [2.7899, 3.3249], label: 'C', dx: 6, dy: -8 },
          { t: 'point', p: [6, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [8.7899, 3.3249], label: 'F', dx: 6, dy: -8 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [2.7899, 3.3249], r: 0.55 },
          { t: 'angle', at: [6, 0], from: [10, 0], to: [8.7899, 3.3249], r: 0.55 },
          { t: 'angle', at: [2.7899, 3.3249], from: [0, 0], to: [4, 0], r: 0.85 },
          { t: 'angle', at: [8.7899, 3.3249], from: [6, 0], to: [10, 0], r: 0.85 },
        ],
      },
      choices: ['$AC = DF$', '$AB = DE$', '$BC = EF$', '$AB = DF$'],
      answer: 0,
      solution:
        'ASA needs the equal sides to join the vertices of the two marked angles. The marked angles sit at $A$ and $C$, so the included side is the one running from $A$ to $C$: $\\overline{AC}$, matched with $\\overline{DF}$ ✓. Check a second, independent way by testing each candidate for what it would prove. $AB = DE$ gives a side that touches $\\angle A$ but misses $\\angle C$, so it proves congruence by AAS, not ASA; $BC = EF$ touches $\\angle C$ but misses $\\angle A$, again AAS ✓ — only $AC = DF$ leaves both marked angles standing on the ends of the known side. (The two AAS choices are NAMING ASA FOR A NON-INCLUDED SIDE — both are true and useful, just not ASA ✗; $AB = DF$ is PAIRING SIDES THAT DO NOT CORRESPOND, since $\\overline{AB}$ corresponds to $\\overline{DE}$ under $A \\to D$, $B \\to E$, $C \\to F$ ✗.)',
    },
    {
      q: 'In the figure, $\\angle S = \\angle X$ and $\\angle T = \\angle Y$ (matching arcs). Which pair of equal sides would prove $\\triangle RST \\cong \\triangle WXY$ by ASA?',
      fig: {
        view: [-1, -1, 11, 3.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [1.4641, 2.5359]], fill: false },
          { t: 'poly', pts: [[6, 0], [10, 0], [7.4641, 2.5359]], fill: false },
          { t: 'point', p: [0, 0], label: 'S', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'T', dx: 10, dy: 10 },
          { t: 'point', p: [1.4641, 2.5359], label: 'R', dx: -2, dy: -10 },
          { t: 'point', p: [6, 0], label: 'X', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'Y', dx: 10, dy: 10 },
          { t: 'point', p: [7.4641, 2.5359], label: 'W', dx: -2, dy: -10 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [1.4641, 2.5359], r: 0.6 },
          { t: 'angle', at: [6, 0], from: [10, 0], to: [7.4641, 2.5359], r: 0.6 },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [1.4641, 2.5359], r: 0.9 },
          { t: 'angle', at: [10, 0], from: [6, 0], to: [7.4641, 2.5359], r: 0.9 },
        ],
      },
      choices: ['$RS = WX$', '$RT = WY$', '$ST = XY$', '$ST = WY$'],
      answer: 2,
      solution:
        'The marked angles are at $S$ and $T$, so the side included between them is the one with those two letters as endpoints: $\\overline{ST}$, matched with $\\overline{XY}$ in the correspondence $R \\to W$, $S \\to X$, $T \\to Y$ ✓. Check a second, independent way by construction. Lay down a segment of the known length; stand the angle at $S$ on one end and the angle at $T$ on the other; the rays meet at a single point, which becomes $R$ — so the triangle is fully determined, and the same recipe run on $\\overline{XY}$ produces a copy of it ✓. Try that recipe with $\\overline{RS}$ instead and one of the two known angles is floating free of the segment, so the construction stalls until the $180^\\circ$ sum is invoked — that is AAS, a different criterion. (The choices $RS = WX$ and $RT = WY$ are NAMING ASA FOR A NON-INCLUDED SIDE ✗; $ST = WY$ is PAIRING SIDES THAT DO NOT CORRESPOND, matching $\\overline{ST}$ with the wrong side of the second triangle ✗.)',
    },
    {
      q: 'The tick marks show $HJ = LM$. Which pair of angle facts would prove $\\triangle HJK \\cong \\triangle LMN$ by ASA?',
      fig: {
        view: [-1, -1, 11, 3.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2.6, 2.4]], fill: false },
          { t: 'poly', pts: [[6, 0], [10, 0], [8.6, 2.4]], fill: false },
          { t: 'point', p: [0, 0], label: 'H', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'J', dx: 10, dy: 10 },
          { t: 'point', p: [2.6, 2.4], label: 'K', dx: 6, dy: -8 },
          { t: 'point', p: [6, 0], label: 'L', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'M', dx: 10, dy: 10 },
          { t: 'point', p: [8.6, 2.4], label: 'N', dx: 6, dy: -8 },
          { t: 'tick', a: [0, 0], b: [4, 0], n: 1 },
          { t: 'tick', a: [6, 0], b: [10, 0], n: 1 },
        ],
      },
      choices: [
        '$\\angle H = \\angle L$ and $\\angle K = \\angle N$',
        '$\\angle H = \\angle L$ and $\\angle J = \\angle M$',
        '$\\angle J = \\angle M$ and $\\angle K = \\angle N$',
        '$\\angle K = \\angle N$ on its own',
      ],
      answer: 1,
      solution:
        'This item runs the other way: the side is given and the angles are the choice. For ASA the known side must be included between the two known angles, so the angles have to sit at BOTH endpoints of $\\overline{HJ}$ — that is $\\angle H$ and $\\angle J$, matched by $\\angle L$ and $\\angle M$ ✓. Check a second, independent way by testing the rivals for what each one really delivers. Pairing $\\angle H$ with $\\angle K$ leaves the known side touching only one of them, so it proves congruence by AAS; pairing $\\angle J$ with $\\angle K$ does the same from the other end ✓. Both work, neither is ASA, and $\\angle K = \\angle N$ alone gives one angle and one side, which fixes nothing. (The two AAS choices are NAMING ASA FOR A NON-INCLUDED SIDE ✗; the single-angle choice is COUNTING AN UNMARKED PART, expecting one angle to do the work of two ✗.)',
    },
  ],
  // s5 — name the criterion again, this time with the AAS arrangement in front.
  [
    {
      q: 'The marks show every equal part. Which congruence criterion applies?',
      fig: {
        view: [-1, -1, 11, 3.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [1.3054, 2.261]], fill: false },
          { t: 'poly', pts: [[6, 0], [10, 0], [7.3054, 2.261]], fill: false },
          { t: 'point', p: [0, 0], label: 'Q', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'R', dx: 10, dy: 10 },
          { t: 'point', p: [1.3054, 2.261], label: 'S', dx: -2, dy: -10 },
          { t: 'point', p: [6, 0], label: 'T', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'U', dx: 10, dy: 10 },
          { t: 'point', p: [7.3054, 2.261], label: 'V', dx: -2, dy: -10 },
          { t: 'tick', a: [0, 0], b: [1.3054, 2.261], n: 1 },
          { t: 'tick', a: [6, 0], b: [7.3054, 2.261], n: 1 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [1.3054, 2.261], r: 0.7, label: '60' },
          { t: 'angle', at: [6, 0], from: [10, 0], to: [7.3054, 2.261], r: 0.7, label: '60' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [1.3054, 2.261], r: 0.5, label: '40' },
          { t: 'angle', at: [10, 0], from: [6, 0], to: [7.3054, 2.261], r: 0.5, label: '40' },
        ],
      },
      choices: ['AAS', 'ASA', 'SAS', 'SSS'],
      answer: 0,
      solution:
        'The ticked side is $\\overline{QS}$, whose endpoints are $Q$ and $S$. It touches the $60^\\circ$ angle at $Q$, but the other marked angle sits at $R$ — a vertex the ticked side never reaches. So the side is not included between the marked angles: AAS ✓. Check a second, independent way through the angle sum. Each triangle has third angle $180^\\circ - 60^\\circ - 40^\\circ = 80^\\circ$, so $\\angle S = \\angle V = 80^\\circ$. Now $\\overline{QS}$ is included between the $60^\\circ$ at $Q$ and the $80^\\circ$ at $S$, and $\\overline{TV}$ sits between the matching pair — ASA, reached without adding a single new assumption, which is exactly why AAS is trustworthy ✓. (ASA is NAMING ASA FOR A NON-INCLUDED SIDE, since the included side $\\overline{QR}$ carries no tick ✗; SAS and SSS are COUNTING AN UNMARKED PART ✗.)',
    },
    {
      q: 'Which congruence criterion do these marks justify?',
      fig: {
        view: [-1, -1, 11, 3.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [0.697, 2.1451]], fill: false },
          { t: 'poly', pts: [[6, 0], [10, 0], [6.697, 2.1451]], fill: false },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [0.697, 2.1451], label: 'G', dx: -2, dy: -10 },
          { t: 'point', p: [6, 0], label: 'L', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'M', dx: 10, dy: 10 },
          { t: 'point', p: [6.697, 2.1451], label: 'N', dx: -2, dy: -10 },
          { t: 'tick', a: [4, 0], b: [0.697, 2.1451], n: 1 },
          { t: 'tick', a: [10, 0], b: [6.697, 2.1451], n: 1 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [0.697, 2.1451], r: 0.6, label: '72' },
          { t: 'angle', at: [6, 0], from: [10, 0], to: [6.697, 2.1451], r: 0.6, label: '72' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [0.697, 2.1451], r: 0.85, label: '33' },
          { t: 'angle', at: [10, 0], from: [6, 0], to: [6.697, 2.1451], r: 0.85, label: '33' },
        ],
      },
      choices: ['SSS', 'ASA', 'AAS', 'SAS'],
      answer: 2,
      solution:
        'The tick sits on $\\overline{FG}$, which runs from $F$ to $G$. The two marked angles are at $E$ and $F$, so the ticked side reaches one of them and misses the other — non-included, which is AAS ✓. Check a second, independent way by asking what the ticked side is opposite to. In each triangle the ticked side lies opposite the $72^\\circ$ angle, and the same is true of $\\overline{MN}$ in the second triangle; a side of a known length lying opposite a known angle, with a second angle also known, leaves the triangle no freedom, because the third angle is $180^\\circ - 72^\\circ - 33^\\circ = 75^\\circ$ and the whole shape is then fixed by ASA on that ticked side ✓. (ASA is NAMING ASA FOR A NON-INCLUDED SIDE — the included side here is $\\overline{EF}$, unticked ✗; SSS and SAS are COUNTING AN UNMARKED PART, since only one pair of sides is ticked ✗.)',
    },
    {
      q: 'The tick marks and angle marks below show all the equal parts. Which criterion proves the triangles congruent?',
      fig: {
        view: [-1, -1, 11, 3.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [3.0403, 2.3753]], fill: false },
          { t: 'poly', pts: [[6, 0], [10, 0], [9.0403, 2.3753]], fill: false },
          { t: 'point', p: [0, 0], label: 'U', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'V', dx: 10, dy: 10 },
          { t: 'point', p: [3.0403, 2.3753], label: 'W', dx: 8, dy: -6 },
          { t: 'point', p: [6, 0], label: 'X', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'Y', dx: 10, dy: 10 },
          { t: 'point', p: [9.0403, 2.3753], label: 'Z', dx: 8, dy: -6 },
          { t: 'tick', a: [0, 0], b: [4, 0], n: 1 },
          { t: 'tick', a: [6, 0], b: [10, 0], n: 1 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [3.0403, 2.3753], r: 0.8, label: '38' },
          { t: 'angle', at: [6, 0], from: [10, 0], to: [9.0403, 2.3753], r: 0.8, label: '38' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [3.0403, 2.3753], r: 0.55, label: '68' },
          { t: 'angle', at: [10, 0], from: [6, 0], to: [9.0403, 2.3753], r: 0.55, label: '68' },
        ],
      },
      choices: ['SAS', 'AAS', 'SSS', 'ASA'],
      answer: 3,
      solution:
        'The ticked side $\\overline{UV}$ has endpoints $U$ and $V$, which are precisely the vertices carrying the $38^\\circ$ and $68^\\circ$ marks. The side is included between the two marked angles, so this is ASA ✓. Check a second, independent way by comparing with the AAS layout. In AAS the tick would have to land on a side that misses one of the marked angles — here that would be $\\overline{UW}$ or $\\overline{VW}$ — and it does not; the tick is on the base, touching both marked vertices ✓. So the pattern reads angle, side, angle in order around the triangle. (AAS is NAMING AAS FOR AN INCLUDED SIDE ✗; SAS would need a second ticked pair with the marked angle between them, and SSS a third — both are COUNTING AN UNMARKED PART ✗.)',
    },
  ],
  // s6 — crossed segments between two parallel sides: name the criterion.
  [
    {
      q: 'In the figure, $\\overline{MN} \\parallel \\overline{QP}$ and $MN = QP$. Segments $\\overline{MP}$ and $\\overline{NQ}$ cross at $T$. Which criterion proves $\\triangle TMN \\cong \\triangle TPQ$?',
      fig: {
        view: [-6, -3, 6, 3],
        elems: [
          { t: 'seg', a: [-5, 2], b: [-1, 2] },
          { t: 'seg', a: [1, -2], b: [5, -2] },
          { t: 'seg', a: [-5, 2], b: [5, -2] },
          { t: 'seg', a: [-1, 2], b: [1, -2] },
          { t: 'point', p: [-5, 2], label: 'M', dx: -12, dy: -6 },
          { t: 'point', p: [-1, 2], label: 'N', dx: 8, dy: -8 },
          { t: 'point', p: [0, 0], label: 'T', dx: 12, dy: 2 },
          { t: 'point', p: [1, -2], label: 'Q', dx: -12, dy: 14 },
          { t: 'point', p: [5, -2], label: 'P', dx: 10, dy: 12 },
          { t: 'tick', a: [-5, 2], b: [-1, 2], n: 1 },
          { t: 'tick', a: [1, -2], b: [5, -2], n: 1 },
        ],
      },
      choices: [
        'ASA — the parallel sides give equal alternate interior angles at $M$ and $P$ and again at $N$ and $Q$, and the equal sides lie between those angle pairs',
        'SAS, using the vertical angles at $T$',
        'SSS, because $T$ has to be the midpoint of both crossing segments',
        'Nothing can be proved until one of the four segments through $T$ is measured',
      ],
      answer: 0,
      solution:
        'Segment $\\overline{MP}$ is a transversal of the parallel pair, so $\\angle TMN = \\angle TPQ$; segment $\\overline{NQ}$ is a second transversal, giving $\\angle TNM = \\angle TQP$. The equal sides $\\overline{MN}$ and $\\overline{PQ}$ join the vertices of those angle pairs, so they are included: angle, side, angle ✓. Check a second, independent way by building the triangle instead of naming the rule. Take $\\overline{MN}$ as a base and swing a ray from each end at the two known angles; they meet at one point, which is $T$. Run the identical recipe on $\\overline{PQ}$ — same length, same two angles — and you get the same triangle ✓. (SAS is COUNTING AN UNMARKED PART: the vertical angles at $T$ are real, but no side through $T$ is known ✗; SSS assumes the midpoint fact, which is a CONSEQUENCE of the congruence rather than a given ✗; the last choice ignores the two free pairs of angles the parallel lines hand over ✗.)',
    },
    {
      q: 'In the figure, $\\overline{GH} \\parallel \\overline{KJ}$, and segments $\\overline{GJ}$ and $\\overline{HK}$ cross at $T$. No lengths are given. Which statement is true?',
      fig: {
        view: [-5, -4, 7, 3],
        elems: [
          { t: 'seg', a: [-4, 2], b: [-1, 2] },
          { t: 'seg', a: [1.5, -3], b: [6, -3] },
          { t: 'seg', a: [-4, 2], b: [6, -3] },
          { t: 'seg', a: [-1, 2], b: [1.5, -3] },
          { t: 'point', p: [-4, 2], label: 'G', dx: -12, dy: -6 },
          { t: 'point', p: [-1, 2], label: 'H', dx: 8, dy: -8 },
          { t: 'point', p: [0, 0], label: 'T', dx: 12, dy: 2 },
          { t: 'point', p: [1.5, -3], label: 'K', dx: -12, dy: 14 },
          { t: 'point', p: [6, -3], label: 'J', dx: 10, dy: 12 },
        ],
      },
      choices: [
        '$\\triangle TGH \\cong \\triangle TJK$ by ASA',
        '$\\triangle TGH \\cong \\triangle TJK$ by AAS',
        '$\\triangle TGH \\cong \\triangle TJK$ by SAS, using the vertical angles at $T$',
        'The triangles cannot be proved congruent: the parallel lines supply three pairs of equal angles but not one pair of equal sides, and equal angles fix shape without fixing size',
      ],
      answer: 3,
      solution:
        'The parallel lines do give $\\angle TGH = \\angle TJK$ and $\\angle THG = \\angle TKJ$ as alternate interior pairs, and the vertical angles at $T$ are equal as well — three pairs of equal angles. Not one length is known, so nothing rules out a bigger copy, and no criterion applies ✓. Check a second, independent way by reading the picture, which is drawn to scale: $\\overline{GH}$ spans $3$ units while $\\overline{KJ}$ spans $4.5$ units, so these two triangles are genuinely different sizes even though every angle matches ✗. Every congruence criterion — SSS, SAS, ASA, AAS — contains at least one $S$, and this figure supplies none. (ASA and AAS are COUNTING AN UNMARKED PART, each helping itself to a side equality that was never given ✗; SAS is the same mistake twice over, since it needs two sides ✗.)',
    },
    {
      q: 'In the figure, $\\overline{RS} \\parallel \\overline{VU}$ and the tick marks show that $P$ is the midpoint of $\\overline{RU}$. Which criterion proves $\\triangle PRS \\cong \\triangle PUV$?',
      fig: {
        view: [-5, -3, 5, 3],
        elems: [
          { t: 'seg', a: [-4, 2], b: [-1, 2] },
          { t: 'seg', a: [1, -2], b: [4, -2] },
          { t: 'seg', a: [-4, 2], b: [4, -2] },
          { t: 'seg', a: [-1, 2], b: [1, -2] },
          { t: 'point', p: [-4, 2], label: 'R', dx: -12, dy: -6 },
          { t: 'point', p: [-1, 2], label: 'S', dx: 8, dy: -8 },
          { t: 'point', p: [0, 0], label: 'P', dx: 12, dy: 2 },
          { t: 'point', p: [1, -2], label: 'V', dx: -12, dy: 14 },
          { t: 'point', p: [4, -2], label: 'U', dx: 10, dy: 12 },
          { t: 'tick', a: [-4, 2], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [4, -2], n: 1 },
        ],
      },
      choices: [
        'SAS, using the vertical angles at $P$',
        'ASA, using the alternate interior angles at $R$ and $U$ together with the vertical angles at $P$',
        'SSS, because both crossing segments are cut in half at $P$',
        'AAS, because the equal side lies outside both pairs of equal angles',
      ],
      answer: 1,
      solution:
        'Transversal $\\overline{RU}$ across the parallel pair gives $\\angle PRS = \\angle PUV$. The midpoint mark gives $RP = PU$. The vertical angles at $P$ give $\\angle RPS = \\angle UPV$. Side $\\overline{RP}$ joins the vertices $R$ and $P$ of the first two of those angles, so it is included: ASA ✓. Check a second, independent way by rotating the picture. Turn the whole figure a half turn about $P$. The midpoint mark sends $R$ onto $U$, and the half turn sends the ray $\\overline{RS}$ onto a ray through $U$ pointing the opposite way — which is the direction of $\\overline{UV}$, precisely because $\\overline{RS}$ and $\\overline{VU}$ are parallel. So $S$ lands on the line $UV$, and $\\triangle PRS$ drops exactly onto $\\triangle PUV$ ✓. (SAS is COUNTING AN UNMARKED PART — a second side through $P$, such as $PS = PV$, is never given ✗; SSS assumes the other segment is bisected too, which is a consequence and not a given ✗; the AAS choice mislocates the side, since $\\overline{RP}$ sits BETWEEN the angle at $R$ and the angle at $P$, so this is NAMING AAS FOR AN INCLUDED SIDE ✗.)',
    },
  ],
  // s7 — AAS gives congruence; the angle sum then gives the matching third angle.
  [
    {
      q: 'In $\\triangle ABC$ and $\\triangle DEF$, $\\angle A = \\angle D = 51^\\circ$, $\\angle B = \\angle E = 65^\\circ$, and $BC = EF$. What is $\\angle F$?',
      choices: ['$116^\\circ$', '$51^\\circ$', '$64^\\circ$', '$115^\\circ$'],
      answer: 2,
      solution:
        'Two pairs of equal angles and a non-included pair of equal sides is AAS, so $\\triangle ABC \\cong \\triangle DEF$ and $\\angle F$ corresponds to $\\angle C$. The angle sum gives $\\angle C = 180^\\circ - 51^\\circ - 65^\\circ = 64^\\circ$, so $\\angle F = 64^\\circ$ ✓. Check a second, independent way by working inside the second triangle alone and never mentioning $\\angle C$. In $\\triangle DEF$ we are told $\\angle D = 51^\\circ$ and $\\angle E = 65^\\circ$ outright, and its own three angles must add to $180^\\circ$, so $\\angle F = 180^\\circ - (51^\\circ + 65^\\circ) = 180^\\circ - 116^\\circ = 64^\\circ$ ✓ — the congruence is not even needed for this part, only for knowing the triangles match. (The choice $116^\\circ$ is ADDING INSTEAD OF SUBTRACTING, reporting the amount to take away ✗; $51^\\circ$ is COPYING A GIVEN ANGLE, pairing $F$ with the first angle listed instead of the leftover one ✗; $115^\\circ$ is SUBTRACTING ONLY ONE ANGLE, $180^\\circ - 65^\\circ$ ✗.)',
    },
    {
      q: 'In $\\triangle GHJ$ and $\\triangle KLM$, $\\angle G = \\angle K = 59^\\circ$, $\\angle H = \\angle L = 78^\\circ$, and $GJ = KM$. Find $\\angle M$.',
      choices: ['$137^\\circ$', '$43^\\circ$', '$59^\\circ$', '$102^\\circ$'],
      answer: 1,
      solution:
        'Side $\\overline{GJ}$ touches $\\angle G$ but misses $\\angle H$, so the given parts form the AAS pattern and $\\triangle GHJ \\cong \\triangle KLM$, with $\\angle M$ corresponding to $\\angle J$. The angle sum gives $\\angle J = 180^\\circ - 59^\\circ - 78^\\circ = 43^\\circ$, so $\\angle M = 43^\\circ$ ✓. Check a second, independent way by adding all three angles of the second triangle back up. If $\\angle M = 43^\\circ$, then $\\triangle KLM$ has angles $59^\\circ$, $78^\\circ$ and $43^\\circ$; adding, $59 + 78 = 137$ and $137 + 43 = 180$ ✓, so the total lands exactly on $180^\\circ$ and no other value can. Testing $102^\\circ$ the same way gives $59 + 78 + 102 = 239$ ✗. (The choice $137^\\circ$ is ADDING INSTEAD OF SUBTRACTING ✗; $59^\\circ$ is COPYING A GIVEN ANGLE ✗; $102^\\circ$ is SUBTRACTING ONLY ONE ANGLE, $180^\\circ - 78^\\circ$ ✗.)',
    },
    {
      q: 'Two triangles $\\triangle PQR$ and $\\triangle STU$ satisfy $\\angle P = \\angle S = 55^\\circ$, $\\angle Q = \\angle T = 49^\\circ$, and $PQ = ST$. What is $\\angle U$?',
      choices: ['$55^\\circ$', '$104^\\circ$', '$131^\\circ$', '$76^\\circ$'],
      answer: 3,
      solution:
        'Here the equal sides $\\overline{PQ}$ and $\\overline{ST}$ ARE included between the equal angles, so the triangles are congruent by ASA, and $\\angle U$ corresponds to $\\angle R$. The angle sum gives $\\angle R = 180^\\circ - 55^\\circ - 49^\\circ = 76^\\circ$, so $\\angle U = 76^\\circ$ ✓. Check a second, independent way by splitting the subtraction differently. Take the $55^\\circ$ away from $180^\\circ$ first: $180^\\circ - 55^\\circ = 125^\\circ$ is what the other two angles share; now take away the $49^\\circ$: $125^\\circ - 49^\\circ = 76^\\circ$ ✓ — same destination by a different pair of steps, which catches an arithmetic slip in either order. (The choice $104^\\circ$ is ADDING INSTEAD OF SUBTRACTING, giving the sum of the two known angles ✗; $55^\\circ$ is COPYING A GIVEN ANGLE ✗; $131^\\circ$ is SUBTRACTING ONLY ONE ANGLE, $180^\\circ - 49^\\circ$ ✗.)',
    },
  ],
  // s8 — one angle and one side known: which extra fact produces which criterion.
  [
    {
      q: 'In $\\triangle ABC$ and $\\triangle DEF$ we know $\\angle B = \\angle E$ and $BC = EF$. Which additional fact would prove the triangles congruent by ASA specifically?',
      choices: ['$\\angle C = \\angle F$', '$\\angle A = \\angle D$', '$AB = DE$', '$AC = DF$'],
      answer: 0,
      solution:
        'For ASA the known side must be included between the two known angles, so we need angles at BOTH endpoints of $\\overline{BC}$ — that is $\\angle B$, already given, and $\\angle C$. Adding $\\angle C = \\angle F$ completes the pattern ✓. Check a second, independent way by sorting each candidate into the criterion it produces. $\\angle A = \\angle D$ gives two angles with a side that misses one of them, which is AAS; $AB = DE$ gives two sides with the angle between them, which is SAS; $AC = DF$ gives two sides and an angle NOT between them, which is the unreliable SSA arrangement ✓. Only the first candidate leaves the known side standing on the vertices of two known angles. (The $\\angle A = \\angle D$ choice is NAMING ASA FOR A NON-INCLUDED SIDE — it does prove congruence, by AAS ✗; $AB = DE$ proves congruence by SAS, not ASA ✗; $AC = DF$ proves nothing at all ✗.)',
    },
    {
      q: 'In $\\triangle PQR$ and $\\triangle KLM$ we know $\\angle P = \\angle K$ and $PR = KM$. Which additional fact would give an ASA proof that $\\triangle PQR \\cong \\triangle KLM$?',
      choices: ['$\\angle Q = \\angle L$', '$QR = LM$', '$\\angle R = \\angle M$', '$PQ = KL$'],
      answer: 2,
      solution:
        'The known side $\\overline{PR}$ has endpoints $P$ and $R$. One of its angles, $\\angle P$, is already matched; ASA needs the other one, so the missing fact is $\\angle R = \\angle M$ ✓. Check a second, independent way by construction. Draw $\\overline{PR}$; stand the known angle on the $P$ end and the new angle on the $R$ end; the two rays meet once, fixing $Q$ ✓ — and repeating the recipe on $\\overline{KM}$ with the same two angles produces a triangle that matches part for part. Try it with $\\angle Q = \\angle L$ instead and the second angle is not attached to either end of the drawn segment, so the construction has to detour through the $180^\\circ$ sum first: that detour is exactly what makes it AAS. (The $\\angle Q = \\angle L$ choice is NAMING ASA FOR A NON-INCLUDED SIDE ✗; $PQ = KL$ gives SAS, since $\\angle P$ sits between $\\overline{PQ}$ and $\\overline{PR}$ ✗; $QR = LM$ gives two sides and a non-included angle, which proves nothing ✗.)',
    },
    {
      q: 'In $\\triangle MNP$ and $\\triangle VWX$ we know $\\angle M = \\angle V$ and $MN = VW$. Which additional fact would NOT be enough to prove the two triangles congruent?',
      choices: ['$\\angle N = \\angle W$', '$NP = WX$', '$\\angle P = \\angle X$', '$MP = VX$'],
      answer: 1,
      solution:
        'Test the four candidates one at a time. $\\angle N = \\angle W$ puts angles on both ends of the known side: ASA ✓. $\\angle P = \\angle X$ puts the second angle away from the side: AAS ✓. $MP = VX$ gives a second side with $\\angle M$ sitting between them: SAS ✓. That leaves $NP = WX$, which gives two sides and an angle that is not between them — the SSA arrangement, which does not force congruence ✗, so it is the answer. Check a second, independent way by seeing the SSA failure directly. Fix $\\angle M$ and the length $MN$, then swing an arc of radius $NP$ centered at $N$; when $NP$ is shorter than $MN$ but long enough to reach, that arc cuts the far ray of the angle at TWO points, giving two different triangles from the very same three measurements ✓ — this is why $\\angle M$ has to sit between the two sides for SAS to bite. (Each of the other three choices names a genuine criterion, so choosing one of them is NAMING ASA FOR A NON-INCLUDED SIDE or its cousins turned inside out ✗.)',
    },
  ],
  // s9 — the marks are there but they do not correspond: why congruence fails.
  [
    {
      q: 'Both triangles have a $35^\\circ$ angle and an $80^\\circ$ angle, and the two ticked sides are equal. Why can we NOT conclude that the triangles are congruent?',
      fig: {
        view: [-1, -1, 13.4, 4.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [3.5604, 2.493]], fill: false },
          { t: 'poly', pts: [[6, 0], [12.3207, 0], [11.6261, 3.9392]], fill: false },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [3.5604, 2.493], label: 'L', dx: 8, dy: -6 },
          { t: 'point', p: [6, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [12.3207, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [11.6261, 3.9392], label: 'R', dx: 8, dy: -6 },
          { t: 'tick', a: [0, 0], b: [4, 0], n: 1 },
          { t: 'tick', a: [12.3207, 0], b: [11.6261, 3.9392], n: 1 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [3.5604, 2.493], r: 0.8, label: '35' },
          { t: 'angle', at: [6, 0], from: [12.3207, 0], to: [11.6261, 3.9392], r: 1.1, label: '35' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [3.5604, 2.493], r: 0.5, label: '80' },
          { t: 'angle', at: [12.3207, 0], from: [6, 0], to: [11.6261, 3.9392], r: 0.7, label: '80' },
        ],
      },
      choices: [
        'The ticked sides sit in different places: $\\overline{JK}$ is included between the two marked angles, while $\\overline{QR}$ is opposite the $35^\\circ$ angle, so they are not corresponding sides',
        'They are congruent by ASA',
        'A $35^\\circ$ angle and an $80^\\circ$ angle cannot both appear in one triangle',
        'They are congruent by AAS',
      ],
      answer: 0,
      solution:
        'ASA and AAS both demand that the equal sides be CORRESPONDING sides — the same side of the same shape. Here $\\overline{JK}$ joins the vertices of the $35^\\circ$ and $80^\\circ$ angles, while $\\overline{QR}$ joins the $80^\\circ$ vertex to the far corner, sitting opposite the $35^\\circ$ angle. Equal lengths in unequal positions prove nothing ✓. Check a second, independent way by measuring the picture, which is drawn to scale. Both ticks mark a length of $4$; in the left triangle that $4$ is the base, while in the right triangle the base has grown to about $6.32$ ✓ — same three angles, different sizes, so the two triangles are visibly not congruent. (Choosing ASA or AAS is PAIRING SIDES THAT DO NOT CORRESPOND ✗; the third choice is wrong arithmetic, since $35^\\circ + 80^\\circ = 115^\\circ$ leaves a perfectly good $65^\\circ$ for the third angle ✗.)',
    },
    {
      q: 'The two triangles have a $55^\\circ$ angle and a $65^\\circ$ angle each, and no sides are marked. What can we conclude?',
      fig: {
        view: [-1, -1, 13.25, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.5, 0], [2.1009, 3.0004]], fill: false },
          { t: 'poly', pts: [[7, 0], [12.25, 0], [10.1513, 4.5006]], fill: false },
          { t: 'point', p: [0, 0], label: 'M', dx: -10, dy: 10 },
          { t: 'point', p: [3.5, 0], label: 'N', dx: 10, dy: 10 },
          { t: 'point', p: [2.1009, 3.0004], label: 'P', dx: 6, dy: -8 },
          { t: 'point', p: [7, 0], label: 'X', dx: -10, dy: 10 },
          { t: 'point', p: [12.25, 0], label: 'Y', dx: 10, dy: 10 },
          { t: 'point', p: [10.1513, 4.5006], label: 'Z', dx: 6, dy: -8 },
          { t: 'angle', at: [0, 0], from: [3.5, 0], to: [2.1009, 3.0004], r: 0.7, label: '55' },
          { t: 'angle', at: [7, 0], from: [12.25, 0], to: [10.1513, 4.5006], r: 1, label: '55' },
          { t: 'angle', at: [3.5, 0], from: [0, 0], to: [2.1009, 3.0004], r: 0.5, label: '65' },
          { t: 'angle', at: [12.25, 0], from: [7, 0], to: [10.1513, 4.5006], r: 0.75, label: '65' },
        ],
      },
      choices: [
        'They are congruent by ASA',
        'They are congruent by AAS',
        'The third angles must differ, so no criterion can apply',
        'Nothing: no pair of sides is known to be equal, and matching angles fix the shape without fixing the size',
      ],
      answer: 3,
      solution:
        'Every congruence criterion — SSS, SAS, ASA, AAS — contains at least one $S$, and this figure marks no sides at all. Two pairs of equal angles make the triangles the same SHAPE, but the size is still free ✓. Check a second, independent way by reading the drawing, which is to scale. The left base runs $3.5$ units and the right base runs $5.25$ units, exactly one and a half times as long; every angle agrees and every side of the right triangle is $1.5$ times its partner ✗ — a perfect counterexample sitting right there in the figure. (ASA and AAS are both COUNTING AN UNMARKED PART, since each helps itself to a side equality that was never given ✗; the third-angle choice is wrong twice over, because both third angles are $180^\\circ - 55^\\circ - 65^\\circ = 60^\\circ$ and so they agree ✗.)',
    },
    {
      q: 'Each triangle has a $30^\\circ$ angle and a $70^\\circ$ angle, and the two ticked sides are equal. Why does this fail to prove congruence?',
      fig: {
        view: [-1, -1, 14.5, 4.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [3.3054, 1.9084]], fill: false },
          { t: 'poly', pts: [[6, 0], [13.5175, 0], [12.2121, 3.5866]], fill: false },
          { t: 'point', p: [0, 0], label: 'G', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'H', dx: 10, dy: 10 },
          { t: 'point', p: [3.3054, 1.9084], label: 'K', dx: 8, dy: -6 },
          { t: 'point', p: [6, 0], label: 'R', dx: -10, dy: 10 },
          { t: 'point', p: [13.5175, 0], label: 'S', dx: 10, dy: 10 },
          { t: 'point', p: [12.2121, 3.5866], label: 'T', dx: 8, dy: -6 },
          { t: 'tick', a: [0, 0], b: [3.3054, 1.9084], n: 1 },
          { t: 'tick', a: [13.5175, 0], b: [12.2121, 3.5866], n: 1 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [3.3054, 1.9084], r: 0.9, label: '30' },
          { t: 'angle', at: [6, 0], from: [13.5175, 0], to: [12.2121, 3.5866], r: 1.3, label: '30' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [3.3054, 1.9084], r: 0.55, label: '70' },
          { t: 'angle', at: [13.5175, 0], from: [6, 0], to: [12.2121, 3.5866], r: 0.8, label: '70' },
        ],
      },
      choices: [
        'They are congruent by AAS, since each ticked side lies outside the two marked angles',
        'The ticked sides are in different positions — $\\overline{GK}$ touches the $30^\\circ$ angle while $\\overline{ST}$ touches the $70^\\circ$ angle — so they are not corresponding sides',
        'They are congruent by ASA',
        'The two triangles have different third angles',
      ],
      answer: 1,
      solution:
        'Both ticked sides are indeed non-included, which is why the AAS choice is tempting. But AAS still requires the sides to correspond. $\\overline{GK}$ leaves the $30^\\circ$ vertex and lies opposite the $70^\\circ$ angle; $\\overline{ST}$ leaves the $70^\\circ$ vertex and lies opposite the $30^\\circ$ angle. Different positions in the shape, so no criterion applies ✓. Check a second, independent way with the law of the longer side. In any triangle the longer side faces the larger angle, so a side facing $70^\\circ$ must be longer than the side facing $30^\\circ$ in the SAME triangle. Forcing those two differently placed sides to be equal simply blows one triangle up: the drawing shows bases of $4$ and about $7.52$ ✓, so the triangles are the same shape at different scales. (The AAS choice is PAIRING SIDES THAT DO NOT CORRESPOND ✗; ASA is that plus NAMING ASA FOR A NON-INCLUDED SIDE ✗; the third-angle choice is false, since both third angles are $180^\\circ - 30^\\circ - 70^\\circ = 80^\\circ$ ✗.)',
    },
  ],
  // s10 — ASA on the crossed figure, then solve for x and report the LENGTH.
  [
    {
      q: 'In the figure, $\\overline{AB} \\parallel \\overline{ED}$ and $AB = ED$, so $\\triangle TAB \\cong \\triangle TDE$ by ASA. If $BT = 4x - 6$ and $TE = x + 15$, what is $BT$?',
      fig: {
        view: [-6, -3, 6, 3],
        elems: [
          { t: 'seg', a: [-5, 2], b: [-1, 2] },
          { t: 'seg', a: [1, -2], b: [5, -2] },
          { t: 'seg', a: [-5, 2], b: [5, -2] },
          { t: 'seg', a: [-1, 2], b: [1, -2] },
          { t: 'point', p: [-5, 2], label: 'A', dx: -12, dy: -6 },
          { t: 'point', p: [-1, 2], label: 'B', dx: 8, dy: -8 },
          { t: 'point', p: [0, 0], label: 'T', dx: 12, dy: 4 },
          { t: 'point', p: [1, -2], label: 'E', dx: -12, dy: 14 },
          { t: 'point', p: [5, -2], label: 'D', dx: 10, dy: 12 },
          { t: 'label', p: [-0.5, 1], text: '4x-6', dx: -20, dy: 0 },
          { t: 'label', p: [0.5, -1], text: 'x+15', dx: 22, dy: 4 },
          { t: 'tick', a: [-5, 2], b: [-1, 2], n: 1 },
          { t: 'tick', a: [1, -2], b: [5, -2], n: 1 },
        ],
      },
      choices: ['$44$', '$22$', '$7$', '$18$'],
      answer: 1,
      solution:
        'In the congruence $\\triangle TAB \\cong \\triangle TDE$ the vertex order pairs $B$ with $E$, so $\\overline{TB}$ corresponds to $\\overline{TE}$ and the two lengths are equal: $4x - 6 = x + 15$. Subtract $x$ from both sides and add $6$: $3x = 21$, so $x = 7$ and $BT = 4(7) - 6 = 22$ ✓. Check a second, independent way by substituting into the OTHER expression, which was never used to find the length: $x + 15 = 7 + 15 = 22$ ✓, and the two expressions agree, which they can only do at the right $x$. Test the rival $18$: it needs $4x - 6 = 18$, so $x = 6$, but then $x + 15 = 21 \\ne 18$ ✗. (The choice $7$ is ANSWERING x INSTEAD OF THE LENGTH ✗; $44$ is ANSWERING THE WHOLE SEGMENT $BE = BT + TE$ ✗; $18$ is DROPPING THE MINUS SIGN, reading $4x - 6$ as $4x + 6$ and solving $3x = 9$ ✗.)',
    },
    {
      q: 'In the figure, $\\overline{GH} \\parallel \\overline{KJ}$ and $GH = KJ$, so $\\triangle TGH \\cong \\triangle TJK$ by ASA. If $GT = 5x - 12$ and $TJ = 2x + 15$, find $GT$.',
      fig: {
        view: [-5, -3.5, 5, 3.5],
        elems: [
          { t: 'seg', a: [-4, 2.5], b: [-1, 2.5] },
          { t: 'seg', a: [1, -2.5], b: [4, -2.5] },
          { t: 'seg', a: [-4, 2.5], b: [4, -2.5] },
          { t: 'seg', a: [-1, 2.5], b: [1, -2.5] },
          { t: 'point', p: [-4, 2.5], label: 'G', dx: -12, dy: -6 },
          { t: 'point', p: [-1, 2.5], label: 'H', dx: 8, dy: -8 },
          { t: 'point', p: [0, 0], label: 'T', dx: 12, dy: 4 },
          { t: 'point', p: [1, -2.5], label: 'K', dx: -12, dy: 14 },
          { t: 'point', p: [4, -2.5], label: 'J', dx: 10, dy: 12 },
          { t: 'label', p: [-2, 1.25], text: '5x-12', dx: -18, dy: -6 },
          { t: 'label', p: [2, -1.25], text: '2x+15', dx: 20, dy: 10 },
          { t: 'tick', a: [-4, 2.5], b: [-1, 2.5], n: 1 },
          { t: 'tick', a: [1, -2.5], b: [4, -2.5], n: 1 },
        ],
      },
      choices: ['$66$', '$9$', '$17$', '$33$'],
      answer: 3,
      solution:
        'The correspondence $\\triangle TGH \\cong \\triangle TJK$ pairs $G$ with $J$, so $\\overline{TG}$ and $\\overline{TJ}$ are matching sides and therefore equal: $5x - 12 = 2x + 15$. Subtracting $2x$ and adding $12$ gives $3x = 27$, so $x = 9$ and $GT = 5(9) - 12 = 45 - 12 = 33$ ✓. Check a second, independent way by watching the gap close. At $x = 0$ the first expression reads $-12$ and the second reads $15$, a deficit of $27$; each step of $1$ in $x$ adds $5$ to the first and only $2$ to the second, so the first gains $3$ per step and needs $27 \\div 3 = 9$ steps ✓. At that $x$ the second expression gives $2(9) + 15 = 33$, matching. (The choice $9$ is ANSWERING x INSTEAD OF THE LENGTH ✗; $66$ is ANSWERING THE WHOLE SEGMENT $GJ = GT + TJ$ ✗; $17$ is DROPPING THE MINUS SIGN, reading $5x - 12$ as $5x + 12$ and solving $3x = 3$ ✗.)',
    },
    {
      q: 'In the figure, $\\overline{RS} \\parallel \\overline{VU}$ and $RS = VU$, so $\\triangle PRS \\cong \\triangle PUV$ by ASA. If $SP = 6x - 17$ and $PV = 3x + 7$, what is $SP$?',
      fig: {
        view: [-5.5, -3, 5.5, 3],
        elems: [
          { t: 'seg', a: [-4.5, 2], b: [-1.5, 2] },
          { t: 'seg', a: [1.5, -2], b: [4.5, -2] },
          { t: 'seg', a: [-4.5, 2], b: [4.5, -2] },
          { t: 'seg', a: [-1.5, 2], b: [1.5, -2] },
          { t: 'point', p: [-4.5, 2], label: 'R', dx: -12, dy: -6 },
          { t: 'point', p: [-1.5, 2], label: 'S', dx: 8, dy: -8 },
          { t: 'point', p: [0, 0], label: 'P', dx: 12, dy: 4 },
          { t: 'point', p: [1.5, -2], label: 'V', dx: -12, dy: 14 },
          { t: 'point', p: [4.5, -2], label: 'U', dx: 10, dy: 12 },
          { t: 'label', p: [-0.75, 1], text: '6x-17', dx: -22, dy: 0 },
          { t: 'label', p: [0.75, -1], text: '3x+7', dx: 24, dy: 4 },
          { t: 'tick', a: [-4.5, 2], b: [-1.5, 2], n: 1 },
          { t: 'tick', a: [1.5, -2], b: [4.5, -2], n: 1 },
        ],
      },
      choices: ['$8$', '$62$', '$31$', '$24$'],
      answer: 2,
      solution:
        'Reading the correspondence $\\triangle PRS \\cong \\triangle PUV$ letter by letter, $S$ pairs with $V$, so $\\overline{PS}$ and $\\overline{PV}$ are matching sides and are equal: $6x - 17 = 3x + 7$. Subtract $3x$ and add $17$: $3x = 24$, so $x = 8$ and $SP = 6(8) - 17 = 48 - 17 = 31$ ✓. Check a second, independent way by testing the finished length against both expressions at once. If $SP = 31$, the first expression demands $6x = 48$, so $x = 8$; the second demands $3x = 24$, so $x = 8$ as well — one value of $x$ satisfying two separate equations ✓. Try $24$ instead and the first needs $x = 41/6$ while the second needs $x = 17/3$, two different numbers ✗. (The choice $8$ is ANSWERING x INSTEAD OF THE LENGTH ✗; $62$ is ANSWERING THE WHOLE SEGMENT $SV = SP + PV$ ✗; $24$ is STOPPING AT $3x$, the middle line of the solve ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 3,
  sections: {
    '3.4': s34,
  },
}
