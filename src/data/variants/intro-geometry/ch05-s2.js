// Introduction to Geometry chapter 5 — variations for section 5.2
// (AA Similarity). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every length was worked twice, by two routes that do not share
//    arithmetic: a scale factor applied forward against a proportion solved by
//    cross-multiplication, a whole-side ratio against the part-to-part ratio
//    it implies, and a computed answer tested backward against the figure.
//    The two routes must agree before a key is written down.
//  - Parallel segments in the figures are parallel by construction: the cut
//    points sit at the SAME parameter t along the two sides they cut, and in
//    the sun-shadow figures the two dashed rays carry the same slope.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS. The traps running through this section are: ASSUMING THE SIDES
//    MUST MATCH TOO, CONFUSING SIMILAR WITH CONGRUENT, DEMANDING A SIDE
//    CHECK, PAIRING ANGLES THAT DO NOT CORRESPOND, MATCHING ONE ANGLE AND
//    STOPPING, DEMANDING EQUAL SIZES, SCRAMBLING THE CORRESPONDENCE,
//    MULTIPLYING BY THE HEIGHT ALONE, DIVIDING BY THE SHADOW ALONE, INVERTING
//    THE PROPORTION, STOPPING AT THE SCALE FACTOR, FORGETTING TO DIVIDE,
//    ADDING INSTEAD OF SCALING, USING THE LEFTOVER PIECE INSTEAD OF THE WHOLE
//    SIDE, SCALING THE WRONG WAY, COPYING A GIVEN LENGTH, ADDING THE
//    DIFFERENCE, ANSWERING THE TIP DISTANCE, DIVIDING BY THE FULL POLE
//    HEIGHT, ANSWERING AE INSTEAD OF AC, ANSWERING AB INSTEAD OF AC, ADDING
//    THE GIVENS, COMPARING UPSIDE DOWN, SUBTRACTING PA FROM DC, USING THE
//    TOTAL WALK INSTEAD OF THE PART, and PAIRING THE OFFSET WITH THE WHOLE
//    WALK.
//  - No two choices inside an item name the same value.

const s52 = [
  // s1 — why two matching angle pairs are enough for similarity.
  [
    {
      q: 'Nora wants to prove two triangles similar. She has checked that two angles of the first equal two angles of the second, and she stops there. Why is her proof already complete?',
      choices: [
        'The angle sum of $180^\\circ$ forces the third pair of angles to be equal automatically',
        'Two equal angle pairs force the corresponding sides to be equal',
        'Any two triangles with a shared angle are similar',
        'Checking a third angle pair would require measuring the sides',
      ],
      answer: 0,
      solution:
        'Call the two matched pairs $x$ and $y$. In each triangle the third angle is what is left from the same total: $180^\\circ - x - y$. Identical subtractions give identical results, so the third pair matches without anyone measuring it — all three angles agree, which is exactly "same shape" ✓. Check a second, independent way by trying to break it: draw a triangle whose angles are $x$, $y$, and something OTHER than $180^\\circ - x - y$. The three angles of that triangle would no longer total $180^\\circ$, so no such triangle exists — a third angle that disagrees is impossible ✓. That impossibility is the whole content of AA. (The choice about sides becoming equal is CONFUSING SIMILAR WITH CONGRUENT — similarity only makes sides proportional ✗; "any two triangles with a shared angle" is MATCHING ONE ANGLE AND STOPPING, and one pair is genuinely not enough ✗; the last choice invents a connection between angle checks and side measurements that is not there ✗.)',
    },
    {
      q: 'A geometry book lists an AA similarity test but no AAA test. Why is a separate AAA test unnecessary?',
      choices: [
        'Because AAA is a congruence test, not a similarity test',
        'Because three angle pairs can never all be checked in practice',
        'Because once two angle pairs agree, the $180^\\circ$ sum hands over the third pair for free',
        'Because AAA would also require a pair of proportional sides',
      ],
      answer: 2,
      solution:
        'AAA asks for three matching angle pairs, but the third check can never fail once the first two pass: each third angle equals $180^\\circ$ minus the two known angles, and equal subtractions from $180^\\circ$ give equal answers. So AAA and AA accept exactly the same pairs of triangles, and the shorter test wins ✓. Check a second, independent way by counting what a triangle’s angles are free to do. A triangle has three angles but only two of them can be chosen freely — the third is locked by the sum. A test that examines all three is examining one angle that carries no new information, like checking the last digit of a sum you have already verified ✓. (Calling AAA a congruence test is CONFUSING SIMILAR WITH CONGRUENT — no amount of angle information can pin down the size ✗; "can never be checked in practice" is false, third angles are checked all the time ✗; adding a side requirement is DEMANDING A SIDE CHECK that similarity of shape simply does not need ✗.)',
    },
    {
      q: 'Why does the AA test not need to mention sides at all?',
      choices: [
        'Because the sides of similar triangles are equal, so there is nothing to check',
        'Because two angle pairs already fix the shape — the third angle follows from the $180^\\circ$ sum, and shape is all similarity asks for',
        'Because sides can only be compared after the triangles are drawn to scale',
        'Because a triangle’s angles determine its side lengths exactly',
      ],
      answer: 1,
      solution:
        'Similarity is a claim about shape, not size, and shape is carried entirely by the angles. Two matching pairs force the third pair — each third angle is $180^\\circ$ minus the same two numbers — so all three angles agree and the two triangles are enlargements of one another. The sides then come along automatically, in one common ratio ✓. Check a second, independent way with a projector. Shine one triangle onto a screen: the image has exactly the same angles, while every side is scaled by the projector’s zoom. Angles survive projection and lengths do not, so a test for "same shape at any zoom" can only be built from angles ✓. (The first choice is CONFUSING SIMILAR WITH CONGRUENT — corresponding sides are proportional, not equal ✗; "only after drawn to scale" is backwards, since ratios of sides can be compared at any scale ✗; "determine its side lengths exactly" is DEMANDING EQUAL SIZES — angles fix the ratios of the sides, never the lengths themselves ✗.)',
    },
  ],
  // s2 — two angles of each triangle are given; decide whether the triangles are similar.
  [
    {
      q: 'One triangle has angles of $40^\\circ$ and $70^\\circ$. Another has angles of $70^\\circ$ and $70^\\circ$. Are the triangles similar?',
      choices: [
        'No — a $40^\\circ$ angle and a $70^\\circ$ angle are different',
        'Only if a pair of corresponding sides is also proportional',
        'Yes — the third angles make both triangles $40^\\circ$–$70^\\circ$–$70^\\circ$',
        'Only if both triangles are the same size',
      ],
      answer: 2,
      solution:
        'Complete each triangle. The first has third angle $180^\\circ - 40^\\circ - 70^\\circ = 70^\\circ$, so it is a $40$–$70$–$70$ triangle. The second has third angle $180^\\circ - 70^\\circ - 70^\\circ = 40^\\circ$ — also $40$–$70$–$70$. Same three angles, so similar by AA ✓. Check a second, independent way without finding either third angle: both triangles contain a $70^\\circ$ angle, and beyond that the first offers $40^\\circ$ while the second offers $70^\\circ$ — pair the second triangle’s OTHER $70^\\circ$ with the first triangle’s $70^\\circ$… that stalls, so instead note both are isosceles with base angles of $70^\\circ$: two equal base angles of $70^\\circ$ force an apex of $40^\\circ$ in each, and two angle pairs ($70$ and $40$) match ✓. (The "No" choice is PAIRING ANGLES THAT DO NOT CORRESPOND — the $40^\\circ$ was never supposed to match a $70^\\circ$ ✗; asking for sides is DEMANDING A SIDE CHECK that AA does not need ✗; "same size" is CONFUSING SIMILAR WITH CONGRUENT ✗.)',
    },
    {
      q: 'One triangle has angles of $35^\\circ$ and $65^\\circ$. A second triangle has angles of $65^\\circ$ and $80^\\circ$. Are the two triangles similar?',
      choices: [
        'Only if the triangles also have a pair of equal sides',
        'Yes — filling in the third angles makes both triangles $35^\\circ$–$65^\\circ$–$80^\\circ$',
        'No — the $35^\\circ$ angle has no partner in the second triangle',
        'No — the two triangles list different pairs of angles',
      ],
      answer: 1,
      solution:
        'Fill in what is missing. First triangle: $180^\\circ - 35^\\circ - 65^\\circ = 80^\\circ$, giving the set $\\{35^\\circ, 65^\\circ, 80^\\circ\\}$. Second triangle: $180^\\circ - 65^\\circ - 80^\\circ = 35^\\circ$, giving $\\{35^\\circ, 65^\\circ, 80^\\circ\\}$ again. Identical angle sets, so the triangles are similar by AA ✓. Check a second, independent way by matching two pairs directly and never computing a third angle twice: both triangles show a $65^\\circ$ angle — one pair. The second triangle’s $80^\\circ$ needs a partner, and the first triangle’s missing angle is $180^\\circ - 100^\\circ = 80^\\circ$ — a second pair. Two pairs is all AA asks ✓. (Claiming the $35^\\circ$ has no partner overlooks the second triangle’s unlisted third angle — PAIRING ANGLES THAT DO NOT CORRESPOND with only the printed ones ✗; "different pairs listed" makes the same slip, judging by the labels instead of the triangles ✗; requiring equal sides is DEMANDING A SIDE CHECK ✗.)',
    },
    {
      q: 'One triangle has angles measuring $48^\\circ$ and $60^\\circ$. Another has angles measuring $60^\\circ$ and $70^\\circ$. Are the triangles similar?',
      choices: [
        'Yes — both triangles contain a $60^\\circ$ angle',
        'Yes — the third angles complete both triangles identically',
        'Only if a protractor confirms the third angles',
        'No — the full angle sets are $48^\\circ$–$60^\\circ$–$72^\\circ$ and $50^\\circ$–$60^\\circ$–$70^\\circ$, which differ',
      ],
      answer: 3,
      solution:
        'Complete both triangles. First: $180^\\circ - 48^\\circ - 60^\\circ = 72^\\circ$, so its angles are $48^\\circ$, $60^\\circ$, $72^\\circ$. Second: $180^\\circ - 60^\\circ - 70^\\circ = 50^\\circ$, so its angles are $50^\\circ$, $60^\\circ$, $70^\\circ$. The sets share only the $60^\\circ$; the others miss each other by $2^\\circ$ every time, so no correspondence of equal angles exists and the triangles are NOT similar ✗→ the correct answer is "No" ✓. Check a second, independent way by hunting for two matching pairs, which is all AA needs: the $60^\\circ$s match, and then the first triangle offers $48^\\circ$ and $72^\\circ$ while the second offers $50^\\circ$ and $70^\\circ$ — no second pair anywhere, so AA can never fire ✓. (Both "Yes" choices are MATCHING ONE ANGLE AND STOPPING — one shared angle proves nothing, and the third angles complete the triangles differently, not identically ✗; the protractor choice dodges the question — the third angles are computable, no measuring needed ✗.)',
    },
  ],
  // s3 — a parallel cut; pick the similarity statement whose letters are in order.
  [
    {
      q: 'In the figure, $\\overline{ST} \\parallel \\overline{QR}$. Which similarity statement has the correspondence in the correct order?',
      fig: {
        view: [-5.5, -1.5, 6.5, 7.5],
        elems: [
          { t: 'poly', pts: [[-4, 0], [5, 0], [1, 6]], fill: false },
          { t: 'seg', a: [-1.5, 3], b: [3, 3] },
          { t: 'point', p: [1, 6], label: 'P', dx: 0, dy: -12 },
          { t: 'point', p: [-4, 0], label: 'Q', dx: -10, dy: 10 },
          { t: 'point', p: [5, 0], label: 'R', dx: 10, dy: 10 },
          { t: 'point', p: [-1.5, 3], label: 'S', dx: -12, dy: 0 },
          { t: 'point', p: [3, 3], label: 'T', dx: 12, dy: 0 },
        ],
      },
      choices: ['$\\triangle PQR \\sim \\triangle PTS$', '$\\triangle PQR \\sim \\triangle PST$', '$\\triangle PQR \\sim \\triangle SPT$', '$\\triangle PQR \\sim \\triangle TSP$'],
      answer: 1,
      solution:
        'Pair each vertex with the vertex playing its role. $P$ is shared, so $P \\leftrightarrow P$. The parallel segment makes $\\angle PST = \\angle PQR$ (corresponding angles), so $Q \\leftrightarrow S$; likewise $\\angle PTS = \\angle PRQ$, so $R \\leftrightarrow T$. Reading the pairs in order gives $\\triangle PQR \\sim \\triangle PST$ ✓. Check a second, independent way by testing a side ratio the statement promises: $\\triangle PQR \\sim \\triangle PST$ claims $\\overline{PQ}$ matches $\\overline{PS}$ — and indeed $S$ sits ON $\\overline{PQ}$, so the small side lies along its big partner, exactly what a shrink toward $P$ does ✓. The order $PTS$ would instead claim $\\overline{PQ}$ matches $\\overline{PT}$, sending a side of the left edge onto the right edge — SCRAMBLING THE CORRESPONDENCE ✗. ($SPT$ and $TSP$ name the same small triangle but shuffle which angle answers to which; in a similarity statement the letter order IS the claim, so a shuffled order is a wrong statement even about the right triangle ✗.)',
    },
    {
      q: 'In the figure, $\\overline{MN} \\parallel \\overline{YZ}$. Which similarity statement is written with the letters correctly matched?',
      fig: {
        view: [-4.5, -1.5, 7.5, 6.5],
        elems: [
          { t: 'poly', pts: [[-3, 0], [6, 0], [0, 5]], fill: false },
          { t: 'seg', a: [-1.8, 2], b: [3.6, 2] },
          { t: 'point', p: [0, 5], label: 'X', dx: 0, dy: -12 },
          { t: 'point', p: [-3, 0], label: 'Y', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'Z', dx: 10, dy: 10 },
          { t: 'point', p: [-1.8, 2], label: 'M', dx: -12, dy: 0 },
          { t: 'point', p: [3.6, 2], label: 'N', dx: 12, dy: 0 },
        ],
      },
      choices: ['$\\triangle XYZ \\sim \\triangle XNM$', '$\\triangle XYZ \\sim \\triangle MXN$', '$\\triangle XYZ \\sim \\triangle NMX$', '$\\triangle XYZ \\sim \\triangle XMN$'],
      answer: 3,
      solution:
        'Match roles, not neighborhoods. The apex $X$ belongs to both triangles: $X \\leftrightarrow X$. The parallel line copies $\\angle Y$ up to $\\angle XMN$ (corresponding angles along the left side), so $Y \\leftrightarrow M$, and it copies $\\angle Z$ to $\\angle XNM$, so $Z \\leftrightarrow N$. In order: $\\triangle XYZ \\sim \\triangle XMN$ ✓. Check a second, independent way through the sides: the statement $\\triangle XYZ \\sim \\triangle XMN$ promises $\\frac{XY}{XM} = \\frac{XZ}{XN} = \\frac{YZ}{MN}$, and every one of those pairs is a big side with the small side that lies on it or parallel to it — a consistent shrink toward $X$ ✓. The order $XNM$ would pair $\\overline{XY}$ with $\\overline{XN}$, a left side with a right side, which no shrink can do — SCRAMBLING THE CORRESPONDENCE ✗. ($MXN$ and $NMX$ move the shared vertex $X$ out of first position while $X$ still leads in $\\triangle XYZ$, so the shared angle gets paired with a copied one in both ✗.)',
    },
    {
      q: 'In the figure, $\\overline{GH} \\parallel \\overline{KL}$. Which similarity statement lists the vertices in a correct correspondence?',
      fig: {
        view: [-6.5, -1.5, 5.5, 7.5],
        elems: [
          { t: 'poly', pts: [[-5, 0], [4, 0], [0, 6]], fill: false },
          { t: 'seg', a: [-2.5, 3], b: [2, 3] },
          { t: 'point', p: [0, 6], label: 'J', dx: 0, dy: -12 },
          { t: 'point', p: [-5, 0], label: 'K', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'L', dx: 10, dy: 10 },
          { t: 'point', p: [-2.5, 3], label: 'G', dx: -12, dy: 0 },
          { t: 'point', p: [2, 3], label: 'H', dx: 12, dy: 0 },
        ],
      },
      choices: ['$\\triangle JKL \\sim \\triangle JHG$', '$\\triangle JKL \\sim \\triangle GJH$', '$\\triangle JKL \\sim \\triangle JGH$', '$\\triangle JKL \\sim \\triangle HGJ$'],
      answer: 2,
      solution:
        'Walk the roles one vertex at a time. $J$ is the shared apex, so $J \\leftrightarrow J$ and the small triangle’s name must start with $J$ — that alone eliminates $\\triangle GJH$ and $\\triangle HGJ$. Then the parallel segment makes $\\angle JGH = \\angle JKL$ (corresponding angles), so $K \\leftrightarrow G$, and $\\angle JHG = \\angle JLK$, so $L \\leftrightarrow H$: the statement is $\\triangle JKL \\sim \\triangle JGH$ ✓. Check a second, independent way with sides: $\\triangle JKL \\sim \\triangle JGH$ pairs $\\overline{JK}$ with $\\overline{JG}$ and $\\overline{JL}$ with $\\overline{JH}$, and each small side literally lies along its big partner, as a shrink toward $J$ requires; it also pairs $\\overline{KL}$ with $\\overline{GH}$, the two parallels ✓. The remaining wrong choice $\\triangle JHG$ swaps $G$ and $H$, sending the left side onto the right — SCRAMBLING THE CORRESPONDENCE, a wrong claim even though it names the right triangle ✗. (The other two also bury the shared vertex mid-name ✗.)',
    },
  ],
  // s4 — sun shadows: height-to-shadow ratio carried from a small object to a big one.
  [
    {
      q: 'A $1.4$ m stick pushed upright into level ground casts a $2$ m shadow. At the same moment, a flagpole casts a $25$ m shadow. How tall is the flagpole?',
      fig: {
        view: [-2.5, -2.5, 32.5, 19.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [0, 17.5] },
          { t: 'seg', a: [0, 0], b: [25, 0] },
          { t: 'seg', a: [0, 17.5], b: [25, 0], dash: true },
          { t: 'right', at: [0, 0], from: [25, 0], to: [0, 17.5] },
          { t: 'label', p: [0, 8.75], text: '?', dx: -12, dy: 0 },
          { t: 'label', p: [12.5, 0], text: '25', dx: 0, dy: 14 },
          { t: 'seg', a: [28, 0], b: [28, 1.4] },
          { t: 'seg', a: [28, 0], b: [30, 0] },
          { t: 'seg', a: [28, 1.4], b: [30, 0], dash: true },
          { t: 'right', at: [28, 0], from: [30, 0], to: [28, 1.4] },
          { t: 'label', p: [28, 0.7], text: '1.4', dx: -16, dy: 0 },
          { t: 'label', p: [29, 0], text: '2', dx: 4, dy: 14 },
        ],
      },
      choices: ['$17.5$ m', '$35$ m', '$12.5$ m', '$24.4$ m'],
      answer: 0,
      solution:
        'The sun’s rays are parallel, so the stick’s triangle and the flagpole’s triangle are similar by AA (right angles at the ground, equal ray angles). Height over shadow is therefore the same for both: $\\frac{1.4}{2} = 0.7$, so the flagpole is $25 \\times 0.7 = 17.5$ m tall ✓. Check a second, independent way through the shadow scale factor: the flagpole’s shadow is $\\frac{25}{2} = 12.5$ times the stick’s shadow, so its height is $12.5$ times the stick’s height: $12.5 \\times 1.4 = 17.5$ m ✓ — two different multiplications, one answer. (The choice $35$ m is MULTIPLYING BY THE HEIGHT ALONE, $25 \\times 1.4$ with the stick’s shadow never used ✗; $12.5$ m is DIVIDING BY THE SHADOW ALONE, $25 \\div 2$ with the stick’s height never used ✗; $24.4$ m is ADDING INSTEAD OF SCALING, tacking the extra $23$ m of shadow onto the $1.4$ m stick ✗.)',
    },
    {
      q: 'A person $1.5$ m tall casts a $2.4$ m shadow on flat ground. At the same moment, a nearby tree casts a $12$ m shadow. How tall is the tree?',
      fig: {
        view: [-2, -2, 18.5, 9.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [0, 7.5] },
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [0, 7.5], b: [12, 0], dash: true },
          { t: 'right', at: [0, 0], from: [12, 0], to: [0, 7.5] },
          { t: 'label', p: [0, 3.75], text: '?', dx: -12, dy: 0 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'seg', a: [14.5, 0], b: [14.5, 1.5] },
          { t: 'seg', a: [14.5, 0], b: [16.9, 0] },
          { t: 'seg', a: [14.5, 1.5], b: [16.9, 0], dash: true },
          { t: 'right', at: [14.5, 0], from: [16.9, 0], to: [14.5, 1.5] },
          { t: 'label', p: [14.5, 0.75], text: '1.5', dx: -16, dy: 0 },
          { t: 'label', p: [15.7, 0], text: '2.4', dx: 4, dy: 14 },
        ],
      },
      choices: ['$5$ m', '$18$ m', '$19.2$ m', '$7.5$ m'],
      answer: 3,
      solution:
        'Parallel sunlight makes the person’s triangle and the tree’s triangle similar by AA, so height and shadow keep one ratio: $\\frac{\\text{tree}}{12} = \\frac{1.5}{2.4}$. Since $\\frac{1.5}{2.4} = \\frac{5}{8}$, the tree is $12 \\times \\frac{5}{8} = 7.5$ m tall ✓. Check a second, independent way by scaling the whole triangle: the tree’s shadow is $\\frac{12}{2.4} = 5$ times the person’s shadow, so every side of the tree’s triangle is $5$ times as long, and its height is $5 \\times 1.5 = 7.5$ m ✓. Guard: $\\frac{7.5}{12} = 0.625 = \\frac{1.5}{2.4}$ ✓. (The choice $5$ m is STOPPING AT THE SCALE FACTOR, reporting the $\\times 5$ itself ✗; $18$ m is MULTIPLYING BY THE HEIGHT ALONE, $12 \\times 1.5$ without dividing by the shadow ✗; $19.2$ m is INVERTING THE PROPORTION, using $\\frac{2.4}{1.5}$ so the tree comes out taller than its shadow is long, though the person is shorter than theirs ✗.)',
    },
    {
      q: 'A $1.25$ m fence post casts a $3$ m shadow late in the afternoon. At the same moment, a water tower casts a $24$ m shadow. How tall is the water tower?',
      fig: {
        view: [-2.5, -2.5, 31.5, 12],
        elems: [
          { t: 'seg', a: [0, 0], b: [0, 10] },
          { t: 'seg', a: [0, 0], b: [24, 0] },
          { t: 'seg', a: [0, 10], b: [24, 0], dash: true },
          { t: 'right', at: [0, 0], from: [24, 0], to: [0, 10] },
          { t: 'label', p: [0, 5], text: '?', dx: -12, dy: 0 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
          { t: 'seg', a: [26.5, 0], b: [26.5, 1.25] },
          { t: 'seg', a: [26.5, 0], b: [29.5, 0] },
          { t: 'seg', a: [26.5, 1.25], b: [29.5, 0], dash: true },
          { t: 'right', at: [26.5, 0], from: [29.5, 0], to: [26.5, 1.25] },
          { t: 'label', p: [26.5, 0.625], text: '1.25', dx: -18, dy: 0 },
          { t: 'label', p: [28, 0], text: '3', dx: 4, dy: 14 },
        ],
      },
      choices: ['$8$ m', '$30$ m', '$10$ m', '$57.6$ m'],
      answer: 2,
      solution:
        'Same moment, same sun: the post’s triangle and the tower’s triangle are similar by AA. The common height-to-shadow ratio is $\\frac{1.25}{3} = \\frac{5}{12}$, so the tower stands $24 \\times \\frac{5}{12} = 10$ m tall ✓. Check a second, independent way with the shadow scale factor: $\\frac{24}{3} = 8$, so the tower’s triangle is the post’s triangle blown up $8$ times, and its height is $8 \\times 1.25 = 10$ m ✓ — a different pairing of the same four numbers. Guard: $\\frac{10}{24} = \\frac{5}{12}$ ✓. (The choice $8$ m is STOPPING AT THE SCALE FACTOR ✗; $30$ m is MULTIPLYING BY THE HEIGHT ALONE, $24 \\times 1.25$ with the $3$ m shadow ignored ✗; $57.6$ m is INVERTING THE PROPORTION, multiplying $24$ by $\\frac{3}{1.25}$ so the shadow ratio runs upside down ✗.)',
    },
  ],
  // s5 — DE parallel to BC; AD, DB, and DE given, find BC.
  [
    {
      q: 'In the figure, $\\overline{DE} \\parallel \\overline{BC}$, $AD = 8$, $DB = 2$, and $DE = 6$. Find $BC$.',
      fig: {
        view: [-1.5, -1.5, 8.5, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [0, 10]], fill: false },
          { t: 'seg', a: [0, 8], b: [5.6, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [0, 10], label: 'B', dx: 0, dy: -12 },
          { t: 'point', p: [7, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [0, 8], label: 'D', dx: -10, dy: 0 },
          { t: 'point', p: [5.6, 0], label: 'E', dx: 4, dy: 14 },
          { t: 'label', p: [0, 4], text: '8', dx: -10, dy: 0 },
          { t: 'label', p: [0, 9], text: '2', dx: -10, dy: 0 },
          { t: 'label', p: [2.8, 4], text: '6', dx: -10, dy: -8 },
          { t: 'label', p: [3.5, 5], text: '?', dx: 12, dy: 2 },
        ],
      },
      choices: ['$8$', '$4.8$', '$7.5$', '$1.5$'],
      answer: 2,
      solution:
        'The parallel gives $\\triangle ADE \\sim \\triangle ABC$ by AA, and the ratio uses the WHOLE side: $AB = AD + DB = 8 + 2 = 10$, so $\\frac{DE}{BC} = \\frac{AD}{AB} = \\frac{8}{10} = \\frac{4}{5}$. Then $BC = 6 \\div \\frac{4}{5} = 7.5$ ✓. Check a second, independent way by cross-multiplying the proportion instead of dividing: $\\frac{6}{BC} = \\frac{8}{10}$ gives $8 \\cdot BC = 60$, so $BC = 7.5$ ✓ — and $7.5 > 6$, as the big triangle’s side must be. (The choice $8$ is ADDING INSTEAD OF SCALING, tacking $DB = 2$ onto $DE = 6$ ✗; $4.8$ is SCALING THE WRONG WAY, computing $6 \\times \\frac{8}{10}$ and shrinking a side that has to grow ✗; $1.5$ is USING THE LEFTOVER PIECE INSTEAD OF THE WHOLE SIDE, comparing $DE$ to $DB$ alone via $6 \\times \\frac{2}{8}$ ✗.)',
    },
    {
      q: 'In the figure, $\\overline{DE} \\parallel \\overline{BC}$, $AD = 8$, $DB = 8$, and $DE = 5.5$. What is $BC$?',
      fig: {
        view: [-1.5, -1.5, 10.5, 17.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [0, 16]], fill: false },
          { t: 'seg', a: [0, 8], b: [4.5, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [0, 16], label: 'B', dx: 0, dy: -12 },
          { t: 'point', p: [9, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [0, 8], label: 'D', dx: -10, dy: 0 },
          { t: 'point', p: [4.5, 0], label: 'E', dx: 4, dy: 14 },
          { t: 'label', p: [0, 4], text: '8', dx: -12, dy: 0 },
          { t: 'label', p: [0, 12], text: '8', dx: -10, dy: 0 },
          { t: 'label', p: [2.25, 4], text: '5.5', dx: -12, dy: -8 },
          { t: 'label', p: [4.5, 8], text: '?', dx: 12, dy: 2 },
        ],
      },
      choices: ['$13.5$', '$11$', '$2.75$', '$22$'],
      answer: 1,
      solution:
        'By AA (shared $\\angle A$, corresponding angles at the parallel), $\\triangle ADE \\sim \\triangle ABC$. The similarity compares $AD$ with the whole side $AB = 8 + 8 = 16$: $\\frac{DE}{BC} = \\frac{8}{16} = \\frac{1}{2}$, so $BC = 5.5 \\div \\frac{1}{2} = 11$ ✓. Check a second, independent way with the enlargement factor from small triangle to big: it is $\\frac{AB}{AD} = \\frac{16}{8} = 2$, and $BC = 2 \\times 5.5 = 11$ ✓ — one route divides by a ratio, the other multiplies by its reciprocal, and they agree. $D$ is the midpoint of $\\overline{AB}$ here, so this lane is the midsegment fact seen from the far side: the middle cut is half the base ✓. (The choice $13.5$ is ADDING INSTEAD OF SCALING, $5.5 + 8$ ✗; $2.75$ is SCALING THE WRONG WAY, $5.5 \\times \\frac{1}{2}$, which hands the LARGER triangle the SMALLER side ✗; $22$ is APPLYING THE FACTOR TWICE, $5.5 \\times 4$ ✗.)',
    },
    {
      q: 'In the figure, $\\overline{DE} \\parallel \\overline{BC}$, $AD = 9$, $DB = 3$, and $DE = 6$. How long is $BC$?',
      fig: {
        view: [-1.5, -1.5, 9.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [0, 12]], fill: false },
          { t: 'seg', a: [0, 9], b: [6, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [0, 12], label: 'B', dx: 0, dy: -12 },
          { t: 'point', p: [8, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [0, 9], label: 'D', dx: -10, dy: 0 },
          { t: 'point', p: [6, 0], label: 'E', dx: 4, dy: 14 },
          { t: 'label', p: [0, 4.5], text: '9', dx: -10, dy: 0 },
          { t: 'label', p: [0, 10.5], text: '3', dx: -10, dy: 0 },
          { t: 'label', p: [3, 4.5], text: '6', dx: -10, dy: -8 },
          { t: 'label', p: [4, 6], text: '?', dx: 12, dy: 2 },
        ],
      },
      choices: ['$9$', '$18$', '$4.5$', '$8$'],
      answer: 3,
      solution:
        'The parallel cut gives $\\triangle ADE \\sim \\triangle ABC$ by AA, comparing $AD = 9$ with the whole side $AB = 9 + 3 = 12$. So $\\frac{DE}{BC} = \\frac{9}{12} = \\frac{3}{4}$ and $BC = 6 \\div \\frac{3}{4} = 8$ ✓. Check a second, independent way by cross-multiplication: $\\frac{6}{BC} = \\frac{9}{12}$ means $9 \\cdot BC = 72$, so $BC = 8$ ✓, with no fraction-flipping anywhere. Guard: the enlargement factor is $\\frac{12}{9} = \\frac{4}{3}$, and $\\frac{4}{3} \\times 6 = 8$ ✓. (The choice $9$ is ADDING INSTEAD OF SCALING, $6 + 3$ ✗; $18$ is USING THE LEFTOVER PIECE INSTEAD OF THE WHOLE SIDE in the other direction, multiplying $6$ by $\\frac{AD}{DB} = 3$ ✗; $4.5$ is SCALING THE WRONG WAY, $6 \\times \\frac{3}{4}$, shrinking when the answer must beat $6$ ✗.)',
    },
  ],
  // s6 — parallel segments cut by two crossing segments; vertical angles at P.
  [
    {
      q: 'In the figure, $\\overline{AB} \\parallel \\overline{DC}$, and $\\overline{AC}$ and $\\overline{BD}$ meet at $P$. Given $AB = 6$, $DC = 9$, and $PA = 4$, find $PC$.',
      fig: {
        view: [-6, -4.5, 6, 4],
        elems: [
          { t: 'seg', a: [-3, 2], b: [3, 2] },
          { t: 'seg', a: [-4.5, -3], b: [4.5, -3] },
          { t: 'seg', a: [-3, 2], b: [4.5, -3] },
          { t: 'seg', a: [3, 2], b: [-4.5, -3] },
          { t: 'point', p: [-3, 2], label: 'A', dx: -10, dy: -8 },
          { t: 'point', p: [3, 2], label: 'B', dx: 10, dy: -8 },
          { t: 'point', p: [4.5, -3], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [-4.5, -3], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: -6 },
          { t: 'label', p: [0, 2], text: '6', dx: 0, dy: -10 },
          { t: 'label', p: [0, -3], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [-1.5, 1], text: '4', dx: -10, dy: -4 },
          { t: 'label', p: [2.25, -1.5], text: '?', dx: 12, dy: 0 },
        ],
      },
      choices: ['$7$', '$6$', '$\\frac{8}{3}$', '$9$'],
      answer: 1,
      solution:
        'The parallels give alternate angles $\\angle PAB = \\angle PCD$, and the vertical angles at $P$ are equal, so $\\triangle PAB \\sim \\triangle PCD$ by AA. The scale factor from the $AB$ triangle to the $DC$ triangle is $\\frac{DC}{AB} = \\frac{9}{6} = \\frac{3}{2}$, so $PC = 4 \\times \\frac{3}{2} = 6$ ✓. Check a second, independent way by cross-multiplying the raw proportion: $\\frac{PC}{PA} = \\frac{DC}{AB}$ reads $\\frac{PC}{4} = \\frac{9}{6}$, so $6 \\cdot PC = 36$ and $PC = 6$ ✓. Guard: $PC > PA$, matching the fact that $PC$ sits in the larger triangle ✓. (The choice $\\frac{8}{3}$ is INVERTING THE PROPORTION, $4 \\times \\frac{6}{9}$, which shrinks the segment that must grow ✗; $7$ is ADDING THE DIFFERENCE, $4 + (9 - 6)$ ✗; $9$ is COPYING A GIVEN LENGTH, echoing $DC$ ✗.)',
    },
    {
      q: 'In the figure, $\\overline{AB} \\parallel \\overline{DC}$, and $\\overline{AC}$ and $\\overline{BD}$ cross at $P$. Given $AB = 8$, $DC = 14$, and $PA = 4$, what is $PC$?',
      fig: {
        view: [-8.5, -5, 8.5, 3.5],
        elems: [
          { t: 'seg', a: [-4, 2], b: [4, 2] },
          { t: 'seg', a: [-7, -3.5], b: [7, -3.5] },
          { t: 'seg', a: [-4, 2], b: [7, -3.5] },
          { t: 'seg', a: [4, 2], b: [-7, -3.5] },
          { t: 'point', p: [-4, 2], label: 'A', dx: -10, dy: -8 },
          { t: 'point', p: [4, 2], label: 'B', dx: 10, dy: -8 },
          { t: 'point', p: [7, -3.5], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [-7, -3.5], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: -6 },
          { t: 'label', p: [0, 2], text: '8', dx: 0, dy: -10 },
          { t: 'label', p: [0, -3.5], text: '14', dx: 0, dy: 14 },
          { t: 'label', p: [-2, 1], text: '4', dx: -10, dy: -4 },
          { t: 'label', p: [3.5, -1.75], text: '?', dx: 12, dy: 0 },
        ],
      },
      choices: ['$7$', '$10$', '$\\frac{16}{7}$', '$14$'],
      answer: 0,
      solution:
        'Alternate angles from the parallels plus vertical angles at $P$ give $\\triangle PAB \\sim \\triangle PCD$ by AA. The enlargement from the top triangle to the bottom one is $\\frac{DC}{AB} = \\frac{14}{8} = \\frac{7}{4}$, so $PC = 4 \\times \\frac{7}{4} = 7$ ✓. Check a second, independent way from the proportion alone: $\\frac{PC}{4} = \\frac{14}{8}$ cross-multiplies to $8 \\cdot PC = 56$, so $PC = 7$ ✓ — no scale factor ever named. Guard: $\\frac{7}{4} = \\frac{14}{8}$, the two ratios the similarity promises, agree ✓. (The choice $\\frac{16}{7}$ is INVERTING THE PROPORTION, $4 \\times \\frac{8}{14}$ ✗; $10$ is ADDING THE DIFFERENCE, $4 + (14 - 8)$ ✗; $14$ is COPYING A GIVEN LENGTH, restating $DC$ as if $PC$ ran the whole way ✗.)',
    },
    {
      q: 'In the figure, $\\overline{AB} \\parallel \\overline{DC}$, and $\\overline{AC}$ and $\\overline{BD}$ intersect at $P$. Given $AB = 6$, $DC = 15$, and $PA = 5$, find $PC$.',
      fig: {
        view: [-9, -5.5, 9, 3],
        elems: [
          { t: 'seg', a: [-3, 1.6], b: [3, 1.6] },
          { t: 'seg', a: [-7.5, -4], b: [7.5, -4] },
          { t: 'seg', a: [-3, 1.6], b: [7.5, -4] },
          { t: 'seg', a: [3, 1.6], b: [-7.5, -4] },
          { t: 'point', p: [-3, 1.6], label: 'A', dx: -10, dy: -8 },
          { t: 'point', p: [3, 1.6], label: 'B', dx: 10, dy: -8 },
          { t: 'point', p: [7.5, -4], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [-7.5, -4], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: -6 },
          { t: 'label', p: [0, 1.6], text: '6', dx: 0, dy: -10 },
          { t: 'label', p: [0, -4], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [-1.5, 0.8], text: '5', dx: -10, dy: -4 },
          { t: 'label', p: [3.75, -2], text: '?', dx: 12, dy: 0 },
        ],
      },
      choices: ['$2$', '$14$', '$12.5$', '$10$'],
      answer: 2,
      solution:
        'The parallels hand over alternate angles and the crossing hands over vertical angles, so $\\triangle PAB \\sim \\triangle PCD$ by AA. The ratio between the triangles is $\\frac{DC}{AB} = \\frac{15}{6} = \\frac{5}{2}$, so $PC = 5 \\times \\frac{5}{2} = 12.5$ ✓. Check a second, independent way by cross-multiplication: $\\frac{PC}{5} = \\frac{15}{6}$ gives $6 \\cdot PC = 75$, so $PC = 12.5$ ✓. Guard: $DC$ is two-and-a-half times $AB$, and $12.5$ is two-and-a-half times $5$ — the same stretch on both pairs ✓. (The choice $2$ is INVERTING THE PROPORTION, $5 \\times \\frac{6}{15}$ ✗; $14$ is ADDING THE DIFFERENCE, $5 + (15 - 6)$ ✗; $10$ is SUBTRACTING PA FROM DC, an arithmetic move with no triangle behind it ✗.)',
    },
  ],
  // s7 — complete the angle sets; find the triangle that MUST be similar.
  [
    {
      q: 'A triangle has angles of $38^\\circ$ and $84^\\circ$. Which triangle below MUST be similar to it?',
      choices: [
        'a triangle with angles $38^\\circ$ and $80^\\circ$',
        'a triangle with angles $46^\\circ$ and $84^\\circ$',
        'a triangle with angles $58^\\circ$ and $64^\\circ$',
        'a triangle with angles $84^\\circ$ and $58^\\circ$',
      ],
      answer: 3,
      solution:
        'The given triangle’s third angle is $180^\\circ - 38^\\circ - 84^\\circ = 58^\\circ$, so its full set is $\\{38, 84, 58\\}$. A triangle with angles $84^\\circ$ and $58^\\circ$ has third angle $180^\\circ - 84^\\circ - 58^\\circ = 38^\\circ$ — the same set, similar by AA ✓. Check a second, independent way: AA only needs two pairs, and $84^\\circ$ and $58^\\circ$ are BOTH already in the original’s set, so similarity is forced before any third angle is computed ✓. Now audit the impostors by completing each set: $38^\\circ$ and $80^\\circ$ gives $\\{38, 80, 62\\}$ — the shared $38$ tempts, but $80 \\ne 84$ ✗; $46^\\circ$ and $84^\\circ$ gives $\\{46, 84, 50\\}$ ✗; $58^\\circ$ and $64^\\circ$ gives $\\{58, 64, 58\\}$ — it borrows the $58$, but nothing pairs with $84$ ✗. Each wrong choice is MATCHING ONE ANGLE AND STOPPING; only two full pairs certify similarity.',
    },
    {
      q: 'A triangle has angles of $54^\\circ$ and $66^\\circ$. Which triangle below MUST be similar to it?',
      choices: [
        'a triangle with angles $66^\\circ$ and $60^\\circ$',
        'a triangle with angles $54^\\circ$ and $72^\\circ$',
        'a triangle with angles $60^\\circ$ and $64^\\circ$',
        'a triangle with angles $48^\\circ$ and $66^\\circ$',
      ],
      answer: 0,
      solution:
        'Complete the original: $180^\\circ - 54^\\circ - 66^\\circ = 60^\\circ$, so its angles are $\\{54, 66, 60\\}$. The triangle with $66^\\circ$ and $60^\\circ$ has third angle $180^\\circ - 126^\\circ = 54^\\circ$ — same set, similar by AA ✓. Check a second, independent way without touching its third angle: $66^\\circ$ and $60^\\circ$ each already appear in $\\{54, 66, 60\\}$, and two matching pairs are exactly what AA demands ✓. The others fall to the same audit: $54^\\circ$ and $72^\\circ$ completes to $\\{54, 72, 54\\}$, and $72$ has no partner ✗; $60^\\circ$ and $64^\\circ$ completes to $\\{60, 64, 56\\}$ ✗; $48^\\circ$ and $66^\\circ$ completes to $\\{48, 66, 66\\}$, which reuses $66$ but never produces $54$ or $60$ ✗. Every impostor is MATCHING ONE ANGLE AND STOPPING — a single shared angle is bait, not proof.',
    },
    {
      q: 'A triangle has angles of $35^\\circ$ and $85^\\circ$. Which triangle below MUST be similar to it?',
      choices: [
        'a triangle with angles $35^\\circ$ and $90^\\circ$',
        'a triangle with angles $60^\\circ$ and $70^\\circ$',
        'a triangle with angles $85^\\circ$ and $60^\\circ$',
        'a triangle with angles $45^\\circ$ and $85^\\circ$',
      ],
      answer: 2,
      solution:
        'The original’s third angle is $180^\\circ - 35^\\circ - 85^\\circ = 60^\\circ$, giving the set $\\{35, 85, 60\\}$. The triangle with $85^\\circ$ and $60^\\circ$ completes to $180^\\circ - 145^\\circ = 35^\\circ$ — identical set, similar by AA ✓. Check a second, independent way: both of its listed angles, $85^\\circ$ and $60^\\circ$, already sit in the original’s set, and two pairs settle AA immediately ✓. Audit the rest: $35^\\circ$ and $90^\\circ$ completes to $\\{35, 90, 55\\}$ — no $85$ anywhere ✗; $60^\\circ$ and $70^\\circ$ completes to $\\{60, 70, 50\\}$ — the $60$ matches but its partners do not ✗; $45^\\circ$ and $85^\\circ$ completes to $\\{45, 85, 50\\}$ ✗. All three wrong choices are MATCHING ONE ANGLE AND STOPPING, dangling one familiar number in front of an unfamiliar triangle.',
    },
  ],
  // s8 — streetlight: person between the pole and the shadow tip.
  [
    {
      q: 'A streetlight shines from the top of a $3.5$ m pole. A child $1.5$ m tall stands $6$ m from the base of the pole. How long is the child’s shadow?',
      fig: {
        view: [-2, -2, 12.5, 5],
        elems: [
          { t: 'seg', a: [0, 0], b: [0, 3.5] },
          { t: 'seg', a: [0, 3.5], b: [10.5, 0] },
          { t: 'seg', a: [0, 0], b: [10.5, 0] },
          { t: 'seg', a: [6, 0], b: [6, 1.5] },
          { t: 'right', at: [0, 0], from: [10.5, 0], to: [0, 3.5] },
          { t: 'right', at: [6, 0], from: [10.5, 0], to: [6, 1.5] },
          { t: 'label', p: [0, 1.75], text: '3.5', dx: -16, dy: 0 },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [6, 0.75], text: '1.5', dx: -16, dy: 0 },
          { t: 'label', p: [8.25, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$10.5$ m', '$4.5$ m', '$9$ m', '$2$ m'],
      answer: 1,
      solution:
        'Let the shadow be $s$, so its tip lies $6 + s$ from the pole. The light ray makes two similar right triangles by AA (shared angle at the tip, right angles at the ground): $\\frac{3.5}{6 + s} = \\frac{1.5}{s}$. Cross-multiplying, $3.5s = 1.5(6 + s) = 9 + 1.5s$, so $2s = 9$ and $s = 4.5$ m ✓. Check a second, independent way through the head-to-lamp triangle: from the child’s head, the pole still rises $3.5 - 1.5 = 2$ m over a run of $6$ m, so the ray drops $2$ m per $6$ m — a slope of $\\frac{1}{3}$. From the head, height $1.5$ m, the ray needs $1.5 \\times 3 = 4.5$ m of run to reach the ground ✓. (The choice $10.5$ m is ANSWERING THE TIP DISTANCE, $6 + 4.5$ ✗; $9$ m is FORGETTING TO DIVIDE, stopping at $6 \\times 1.5$ ✗; $2$ m is reporting the height gap $3.5 - 1.5$ as if it were the shadow ✗.)',
    },
    {
      q: 'A lamp sits atop a $4.8$ m pole. A person $1.6$ m tall stands $8$ m from the base of the pole. How long is the person’s shadow?',
      fig: {
        view: [-2, -2, 14, 6.3],
        elems: [
          { t: 'seg', a: [0, 0], b: [0, 4.8] },
          { t: 'seg', a: [0, 4.8], b: [12, 0] },
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [8, 0], b: [8, 1.6] },
          { t: 'right', at: [0, 0], from: [12, 0], to: [0, 4.8] },
          { t: 'right', at: [8, 0], from: [12, 0], to: [8, 1.6] },
          { t: 'label', p: [0, 2.4], text: '4.8', dx: -16, dy: 0 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [8, 0.8], text: '1.6', dx: -16, dy: 0 },
          { t: 'label', p: [10, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$12$ m', '$12.8$ m', '$\\frac{8}{3}$ m', '$4$ m'],
      answer: 3,
      solution:
        'Call the shadow $s$; its tip sits $8 + s$ from the pole. The two right triangles under the light ray are similar by AA, so $\\frac{4.8}{8 + s} = \\frac{1.6}{s}$. Cross-multiplying, $4.8s = 1.6(8 + s) = 12.8 + 1.6s$, so $3.2s = 12.8$ and $s = 4$ m ✓. Check a second, independent way from the ray’s slope: above the person’s head the pole has $4.8 - 1.6 = 3.2$ m of extra height over the $8$ m gap, so the ray falls $3.2$ m per $8$ m, or $0.4$ m per meter. From head height $1.6$ m it reaches the ground after $\\frac{1.6}{0.4} = 4$ m ✓. Guard: the tip then lies $12$ m out, and $\\frac{4.8}{12} = \\frac{1.6}{4} = 0.4$ ✓. (The choice $12$ m is ANSWERING THE TIP DISTANCE ✗; $12.8$ m is FORGETTING TO DIVIDE, stopping at $8 \\times 1.6$ ✗; $\\frac{8}{3}$ m is DIVIDING BY THE FULL POLE HEIGHT, $\\frac{8 \\times 1.6}{4.8}$, as if this were a sun-shadow problem with parallel rays ✗.)',
    },
    {
      q: 'A streetlight is mounted at the top of a $5.4$ m pole. A walker $1.8$ m tall stops $10$ m from the base of the pole. How long is the walker’s shadow?',
      fig: {
        view: [-2, -2, 17, 6.9],
        elems: [
          { t: 'seg', a: [0, 0], b: [0, 5.4] },
          { t: 'seg', a: [0, 5.4], b: [15, 0] },
          { t: 'seg', a: [0, 0], b: [15, 0] },
          { t: 'seg', a: [10, 0], b: [10, 1.8] },
          { t: 'right', at: [0, 0], from: [15, 0], to: [0, 5.4] },
          { t: 'right', at: [10, 0], from: [15, 0], to: [10, 1.8] },
          { t: 'label', p: [0, 2.7], text: '5.4', dx: -16, dy: 0 },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [10, 0.9], text: '1.8', dx: -16, dy: 0 },
          { t: 'label', p: [12.5, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$5$ m', '$15$ m', '$18$ m', '$\\frac{10}{3}$ m'],
      answer: 0,
      solution:
        'Let $s$ be the shadow, with tip $10 + s$ from the pole. The pole’s triangle and the walker’s triangle share the tip angle and both stand square on the ground, so they are similar by AA: $\\frac{5.4}{10 + s} = \\frac{1.8}{s}$. Cross-multiplying, $5.4s = 1.8(10 + s) = 18 + 1.8s$, so $3.6s = 18$ and $s = 5$ m ✓. Check a second, independent way with the light ray’s slope: over the $10$ m from pole to walker the ray descends $5.4 - 1.8 = 3.6$ m, so it drops $0.36$ m per meter; from the walker’s head at $1.8$ m it needs $\\frac{1.8}{0.36} = 5$ m more to touch down ✓. Guard: at the tip, $\\frac{5.4}{15} = 0.36 = \\frac{1.8}{5}$ ✓. (The choice $15$ m is ANSWERING THE TIP DISTANCE ✗; $18$ m is FORGETTING TO DIVIDE, stopping at $10 \\times 1.8$ ✗; $\\frac{10}{3}$ m is DIVIDING BY THE FULL POLE HEIGHT, $\\frac{10 \\times 1.8}{5.4}$, which pretends the rays are parallel like sunlight ✗.)',
    },
  ],
  // s9 — DE parallel to BC; AD, DB, EC given, find the whole side AC.
  [
    {
      q: 'In the figure, $\\overline{DE} \\parallel \\overline{BC}$, $AD = 9$, $DB = 3$, and $EC = 5$. Find $AC$.',
      fig: {
        view: [-1.5, -1.5, 10.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 12], [0, 0], [9, 2]], fill: false },
          { t: 'seg', a: [0, 3], b: [6.75, 4.5] },
          { t: 'point', p: [0, 12], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [9, 2], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0, 3], label: 'D', dx: -10, dy: 0 },
          { t: 'point', p: [6.75, 4.5], label: 'E', dx: 8, dy: -10 },
          { t: 'label', p: [0, 7.5], text: '9', dx: -10, dy: 0 },
          { t: 'label', p: [0, 1.5], text: '3', dx: -10, dy: 0 },
          { t: 'label', p: [7.875, 3.25], text: '5', dx: 6, dy: -10 },
        ],
      },
      choices: ['$20$', '$15$', '$17$', '$12$'],
      answer: 0,
      solution:
        'From $\\overline{DE} \\parallel \\overline{BC}$ we get $\\triangle ADE \\sim \\triangle ABC$, and the parallel splits the two sides in the same ratio: $\\frac{AE}{EC} = \\frac{AD}{DB} = \\frac{9}{3} = 3$. So $AE = 3 \\times 5 = 15$ and $AC = AE + EC = 15 + 5 = 20$ ✓. Check a second, independent way through the whole-side ratio: $EC$ is the same fraction of $AC$ that $DB$ is of $AB$, namely $\\frac{3}{12} = \\frac{1}{4}$. If $5$ is a quarter of $AC$, then $AC = 4 \\times 5 = 20$ ✓ — no $AE$ ever computed. Guard: $\\frac{AE}{AC} = \\frac{15}{20} = \\frac{3}{4} = \\frac{AD}{AB}$ ✓. (The choice $15$ is ANSWERING AE INSTEAD OF AC, quitting one addition early ✗; $17$ is ADDING THE GIVENS, $9 + 3 + 5$ ✗; $12$ is ANSWERING AB INSTEAD OF AC, the side the question did not ask about ✗.)',
    },
    {
      q: 'In the figure, $\\overline{DE} \\parallel \\overline{BC}$, $AD = 9$, $DB = 3$, and $EC = 4$. What is $AC$?',
      fig: {
        view: [-1.5, -1.5, 9.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 12], [0, 0], [8, 3]], fill: false },
          { t: 'seg', a: [0, 3], b: [6, 5.25] },
          { t: 'point', p: [0, 12], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [8, 3], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0, 3], label: 'D', dx: -10, dy: 0 },
          { t: 'point', p: [6, 5.25], label: 'E', dx: 8, dy: -10 },
          { t: 'label', p: [0, 7.5], text: '9', dx: -10, dy: 0 },
          { t: 'label', p: [0, 1.5], text: '3', dx: -10, dy: 0 },
          { t: 'label', p: [7, 4.125], text: '4', dx: 6, dy: -10 },
        ],
      },
      choices: ['$12$', '$7$', '$16$', '$13$'],
      answer: 2,
      solution:
        'The parallel gives $\\triangle ADE \\sim \\triangle ABC$, so the two sides are cut in the same ratio: $\\frac{AE}{EC} = \\frac{AD}{DB} = \\frac{9}{3} = 3$. Then $AE = 3 \\times 4 = 12$ and $AC = 12 + 4 = 16$ ✓. Check a second, independent way using fractions of the whole: $DB$ is $\\frac{3}{9 + 3} = \\frac{1}{4}$ of $AB$, so $EC$ is $\\frac{1}{4}$ of $AC$. A quarter of $AC$ equals $4$, so $AC = 16$ ✓ — the addition never happens in this route. Guard: $\\frac{AE}{AC} = \\frac{12}{16} = \\frac{3}{4} = \\frac{9}{12} = \\frac{AD}{AB}$ ✓. (The choice $12$ is ANSWERING AE INSTEAD OF AC ✗; $7$ is COMPARING UPSIDE DOWN, taking $AE = 4 \\times \\frac{9}{12} = 3$ from a part-to-whole ratio and then adding $4$ ✗; $13$ is ADDING THE GIVENS that touch $A$ and $C$, $9 + 4$, two pieces of different sides ✗.)',
    },
    {
      q: 'In the figure, $\\overline{DE} \\parallel \\overline{BC}$, $AD = 10$, $DB = 4$, and $EC = 6$. How long is $AC$?',
      fig: {
        view: [-1.5, -1.5, 8.5, 15.5],
        elems: [
          { t: 'poly', pts: [[0, 14], [0, 0], [7, 2.8]], fill: false },
          { t: 'seg', a: [0, 4], b: [5, 6] },
          { t: 'point', p: [0, 14], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [7, 2.8], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0, 4], label: 'D', dx: -10, dy: 0 },
          { t: 'point', p: [5, 6], label: 'E', dx: 8, dy: -10 },
          { t: 'label', p: [0, 9], text: '10', dx: -12, dy: 0 },
          { t: 'label', p: [0, 2], text: '4', dx: -10, dy: 0 },
          { t: 'label', p: [6, 4.4], text: '6', dx: 6, dy: -10 },
        ],
      },
      choices: ['$15$', '$8.4$', '$14$', '$21$'],
      answer: 3,
      solution:
        'Since $\\overline{DE} \\parallel \\overline{BC}$, the triangles $ADE$ and $ABC$ are similar and the parallel cuts both sides in the ratio $\\frac{AD}{DB} = \\frac{10}{4} = \\frac{5}{2}$. So $AE = \\frac{5}{2} \\times 6 = 15$, and $AC = AE + EC = 15 + 6 = 21$ ✓. Check a second, independent way from the whole sides: $\\frac{EC}{AC} = \\frac{DB}{AB} = \\frac{4}{14} = \\frac{2}{7}$, so $AC = 6 \\div \\frac{2}{7} = 21$ ✓ — one division replaces the multiply-then-add. Guard: $\\frac{AE}{AC} = \\frac{15}{21} = \\frac{5}{7} = \\frac{10}{14}$ ✓. (The choice $15$ is ANSWERING AE INSTEAD OF AC ✗; $8.4$ is COMPARING UPSIDE DOWN, $AE = 6 \\times \\frac{4}{10} = 2.4$ plus $6$ ✗; $14$ is ANSWERING AB INSTEAD OF AC — the fully known side, not the asked one ✗.)',
    },
  ],
  // s10 — measuring across a river with two similar right triangles on the bank.
  [
    {
      q: 'Surveyors want the width of a river. They mark $C$ on the near bank directly across from a boulder $T$ on the far bank, walk $16$ m along the bank to $D$, then $4$ m more to $E$, then turn away from the river at a right angle and walk to a point $F$ chosen so that $F$, $D$, and $T$ line up. If $EF = 7$ m, how wide is the river ($TC$)?',
      fig: {
        view: [-3, -9.5, 23.5, 30],
        elems: [
          { t: 'seg', a: [0, 0], b: [0, 28], dash: true },
          { t: 'seg', a: [0, 0], b: [20, 0] },
          { t: 'seg', a: [20, 0], b: [20, -7] },
          { t: 'seg', a: [0, 28], b: [20, -7] },
          { t: 'right', at: [0, 0], from: [16, 0], to: [0, 28] },
          { t: 'right', at: [20, 0], from: [16, 0], to: [20, -7] },
          { t: 'point', p: [0, 28], label: 'T', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'C', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [20, 0], label: 'E', dx: 12, dy: -8 },
          { t: 'point', p: [20, -7], label: 'F', dx: 12, dy: 8 },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [18, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [20, -3.5], text: '7', dx: 12, dy: 0 },
          { t: 'label', p: [0, 14], text: '?', dx: -12, dy: 0 },
        ],
      },
      choices: ['$35$ m', '$1.75$ m', '$28$ m', '$8.75$ m'],
      answer: 2,
      solution:
        'At $D$ the sightline crosses the bank, making vertical angles: $\\angle TDC = \\angle FDE$. Both triangles carry right angles ($\\triangle TCD$ at $C$, $\\triangle FED$ at $E$), so $\\triangle TCD \\sim \\triangle FED$ by AA. Corresponding legs give $\\frac{TC}{FE} = \\frac{CD}{ED}$, so $TC = 7 \\times \\frac{16}{4} = 28$ m ✓. Check a second, independent way with the sightline’s slope: walking from $E$ toward $D$, the line $FT$ gains $7$ m of cross-bank distance over $4$ m of bank — $1.75$ m per meter. From $D$ it still has $16$ m of bank to cover before reaching $C$, so it gains $16 \\times 1.75 = 28$ m, which is exactly $TC$ ✓. (The choice $35$ m is USING THE TOTAL WALK INSTEAD OF THE PART, $7 \\times \\frac{20}{4}$ ✗; $1.75$ m is INVERTING THE PROPORTION, $7 \\times \\frac{4}{16}$, a river narrower than one stride ✗; $8.75$ m is PAIRING THE OFFSET WITH THE WHOLE WALK, $7 \\times \\frac{20}{16}$ ✗.)',
    },
    {
      q: 'To find the width of a canal, a scout marks $C$ on the near bank directly opposite a post $T$ on the far bank, paces $18$ m along the bank to $D$, continues $6$ m more to $E$, then walks straight away from the canal at a right angle until reaching a point $F$ from which $F$, $D$, and $T$ line up. If $EF = 7$ m, how wide is the canal ($TC$)?',
      fig: {
        view: [-3, -9.5, 27.5, 23],
        elems: [
          { t: 'seg', a: [0, 0], b: [0, 21], dash: true },
          { t: 'seg', a: [0, 0], b: [24, 0] },
          { t: 'seg', a: [24, 0], b: [24, -7] },
          { t: 'seg', a: [0, 21], b: [24, -7] },
          { t: 'right', at: [0, 0], from: [18, 0], to: [0, 21] },
          { t: 'right', at: [24, 0], from: [18, 0], to: [24, -7] },
          { t: 'point', p: [0, 21], label: 'T', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'C', dx: -10, dy: 10 },
          { t: 'point', p: [18, 0], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [24, 0], label: 'E', dx: 12, dy: -8 },
          { t: 'point', p: [24, -7], label: 'F', dx: 12, dy: 8 },
          { t: 'label', p: [9, 0], text: '18', dx: 0, dy: 14 },
          { t: 'label', p: [21, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [24, -3.5], text: '7', dx: 12, dy: 0 },
          { t: 'label', p: [0, 10.5], text: '?', dx: -12, dy: 0 },
        ],
      },
      choices: ['$21$ m', '$28$ m', '$\\frac{7}{3}$ m', '$3$ m'],
      answer: 0,
      solution:
        'Vertical angles at $D$ ($\\angle TDC = \\angle FDE$) plus the right angles at $C$ and $E$ give $\\triangle TCD \\sim \\triangle FED$ by AA. Matching legs: $\\frac{TC}{FE} = \\frac{CD}{ED}$, so $TC = 7 \\times \\frac{18}{6} = 21$ m ✓. Check a second, independent way by slope: along the sightline $FT$, the offset grows $7$ m for every $6$ m of bank walked, i.e. $\\frac{7}{6}$ m per meter. Between $D$ and $C$ there are $18$ m of bank, so the offset grows to $18 \\times \\frac{7}{6} = 21$ m at $C$ — the width ✓. Guard: the two triangles’ leg ratios, $\\frac{21}{18}$ and $\\frac{7}{6}$, are equal ✓. (The choice $28$ m is USING THE TOTAL WALK INSTEAD OF THE PART, $7 \\times \\frac{24}{6}$ ✗; $\\frac{7}{3}$ m is INVERTING THE PROPORTION, $7 \\times \\frac{6}{18}$ ✗; $3$ m is STOPPING AT THE SCALE FACTOR, reporting $\\frac{18}{6}$ itself ✗.)',
    },
    {
      q: 'A field team measures a gorge. They mark $C$ on the near rim directly across from a pine $T$ on the far rim, walk $20$ m along the rim to $D$, go $4$ m further to $E$, then head straight away from the gorge at a right angle to a point $F$ picked so that $F$, $D$, and $T$ are in a line. If $EF = 5$ m, how wide is the gorge ($TC$)?',
      fig: {
        view: [-3, -7.5, 27.5, 27],
        elems: [
          { t: 'seg', a: [0, 0], b: [0, 25], dash: true },
          { t: 'seg', a: [0, 0], b: [24, 0] },
          { t: 'seg', a: [24, 0], b: [24, -5] },
          { t: 'seg', a: [0, 25], b: [24, -5] },
          { t: 'right', at: [0, 0], from: [20, 0], to: [0, 25] },
          { t: 'right', at: [24, 0], from: [20, 0], to: [24, -5] },
          { t: 'point', p: [0, 25], label: 'T', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'C', dx: -10, dy: 10 },
          { t: 'point', p: [20, 0], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [24, 0], label: 'E', dx: 12, dy: -8 },
          { t: 'point', p: [24, -5], label: 'F', dx: 12, dy: 8 },
          { t: 'label', p: [10, 0], text: '20', dx: 0, dy: 14 },
          { t: 'label', p: [22, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [24, -2.5], text: '5', dx: 12, dy: 0 },
          { t: 'label', p: [0, 12.5], text: '?', dx: -12, dy: 0 },
        ],
      },
      choices: ['$30$ m', '$1$ m', '$5$ m', '$25$ m'],
      answer: 3,
      solution:
        'The sightline $FT$ crosses the rim at $D$, so $\\angle TDC = \\angle FDE$ (vertical angles); with the right angles at $C$ and $E$, $\\triangle TCD \\sim \\triangle FED$ by AA. Then $\\frac{TC}{FE} = \\frac{CD}{ED}$, so $TC = 5 \\times \\frac{20}{4} = 25$ m ✓. Check a second, independent way with the sightline’s slope: it drifts $5$ m away from the rim over the $4$ m from $E$ to $D$, so $1.25$ m of drift per meter of rim. Over the $20$ m from $D$ to $C$ it drifts $20 \\times 1.25 = 25$ m — and that drift, measured at $C$, is the gorge’s width ✓. Guard: $\\frac{25}{20} = \\frac{5}{4}$, the same ratio in both triangles ✓. (The choice $30$ m is USING THE TOTAL WALK INSTEAD OF THE PART, $5 \\times \\frac{24}{4}$ ✗; $1$ m is INVERTING THE PROPORTION, $5 \\times \\frac{4}{20}$ ✗; $5$ m is STOPPING AT THE SCALE FACTOR, echoing $\\frac{20}{4} = 5$, which by coincidence also matches $EF$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 5,
  sections: { '5.2': s52 },
}
