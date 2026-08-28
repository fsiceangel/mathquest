// Introduction to Geometry chapter 17 — variations for section 17.3
// (Basic Analytic Geometry Problems).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is reached twice along routes that share no steps.
//    For areas that means one route by base times height or by a bounding box
//    with its corner pieces removed, and a second route by the shoelace sum.
//    For classification it means one route by squared side lengths and a second
//    route by slopes. For collinearity it means slopes once and a line equation
//    once.
//  - Figures are coordinate-exact: a point drawn at (4, -1) sits at (4, -1) in
//    the view box, and the view box holds every point the answer names. Labels
//    are plain text, never LaTeX.
//  - Each distractor is one named mistake — dropping the one-half, adding the
//    legs instead of multiplying them, stopping at the two legs of a perimeter,
//    settling for a true but vaguer name — and it is named in CAPS.

const s173 = [
  // s1 — area of a right triangle whose legs lie along the axes.
  [
    {
      q: 'A toy sail is cut as the triangle with vertices $(0, 0)$, $(7, 0)$, and $(0, 6)$. What is its area?',
      fig: {
        view: [-1, -1, 8, 7],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [0, 6]], fill: false },
          { t: 'right', at: [0, 0], from: [7, 0], to: [0, 6] },
          { t: 'point', p: [0, 0], dx: -10, dy: 12 },
          { t: 'point', p: [7, 0], dx: 10, dy: 12 },
          { t: 'point', p: [0, 6], dx: -12, dy: -6 },
        ],
      },
      choices: ['$21$', '$42$', '$13$', '$84$'],
      answer: 0,
      solution:
        'Route one, use the two legs as base and height: one leg runs along the $x$-axis from $(0, 0)$ to $(7, 0)$, so it is $7$ long, and the other runs up the $y$-axis from $(0, 0)$ to $(0, 6)$, so it is $6$ long. They meet at the origin at a right angle, which makes one the base and the other the height with no extra work. Area $= \\frac{1}{2} \\cdot 7 \\cdot 6 = 21$ ✓. Check a second, independent way, with the shoelace sum: $\\frac{1}{2}\\left|0(0 - 6) + 7(6 - 0) + 0(0 - 0)\\right| = \\frac{1}{2}\\left|0 + 42 + 0\\right| = 21$ ✓. (The choice $42$ is DROPPING THE ONE-HALF, which reports the $7$ by $6$ rectangle the sail is cut from rather than the sail ✗; the choice $13$ is ADDING THE TWO LEGS INSTEAD OF MULTIPLYING THEM, since $7 + 6 = 13$ ✗; the choice $84$ is MULTIPLYING BY $2$ WHERE THE FORMULA DIVIDES BY $2$, giving $7 \\cdot 6 \\cdot 2 = 84$ ✗.)',
    },
    {
      q: 'A vegetable patch is fenced as the triangle with vertices $(0, 0)$, $(6, 0)$, and $(0, 9)$, measured in meters. How many square meters does it cover?',
      fig: {
        view: [-1, -1, 7, 10],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [0, 9]], fill: false },
          { t: 'right', at: [0, 0], from: [6, 0], to: [0, 9] },
          { t: 'point', p: [0, 0], dx: -10, dy: 12 },
          { t: 'point', p: [6, 0], dx: 10, dy: 12 },
          { t: 'point', p: [0, 9], dx: -12, dy: -6 },
        ],
      },
      choices: ['$54$', '$15$', '$27$', '$18$'],
      answer: 2,
      solution:
        'Route one, use the two legs as base and height: the leg along the $x$-axis stretches from $(0, 0)$ to $(6, 0)$ and measures $6$, and the leg up the $y$-axis stretches from $(0, 0)$ to $(0, 9)$ and measures $9$. The corner at the origin is square, so those two lengths are exactly the base and the height. Area $= \\frac{1}{2} \\cdot 6 \\cdot 9 = 27$ square meters ✓. Check a second, independent way, with the shoelace sum: $\\frac{1}{2}\\left|0(0 - 9) + 6(9 - 0) + 0(0 - 0)\\right| = \\frac{1}{2}\\left|54\\right| = 27$ ✓. (The choice $54$ is DROPPING THE ONE-HALF, the area of the $6$ by $9$ rectangle rather than of the patch ✗; the choice $15$ is ADDING THE TWO LEGS INSTEAD OF MULTIPLYING THEM, since $6 + 9 = 15$ ✗; the choice $18$ is USING THE SHORTER LEG FOR BOTH THE BASE AND THE HEIGHT, giving $\\frac{1}{2} \\cdot 6 \\cdot 6 = 18$ ✗.)',
    },
    {
      q: 'A skateboard ramp is drawn side-on as the triangle with vertices $(0, 0)$, $(10, 0)$, and $(0, 7)$. What is the area of that side view?',
      fig: {
        view: [-1, -1, 11, 8],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [0, 7]], fill: false },
          { t: 'right', at: [0, 0], from: [10, 0], to: [0, 7] },
          { t: 'point', p: [0, 0], dx: -10, dy: 12 },
          { t: 'point', p: [10, 0], dx: 10, dy: 12 },
          { t: 'point', p: [0, 7], dx: -12, dy: -6 },
        ],
      },
      choices: ['$70$', '$35$', '$17$', '$50$'],
      answer: 1,
      solution:
        'Route one, use the two legs as base and height: the floor of the ramp runs from $(0, 0)$ to $(10, 0)$, a length of $10$, and the back wall runs from $(0, 0)$ to $(0, 7)$, a height of $7$. Floor and wall meet at a right angle at the origin, so they serve directly as base and height. Area $= \\frac{1}{2} \\cdot 10 \\cdot 7 = 35$ ✓. Check a second, independent way, with the shoelace sum: $\\frac{1}{2}\\left|0(0 - 7) + 10(7 - 0) + 0(0 - 0)\\right| = \\frac{1}{2}\\left|70\\right| = 35$ ✓. (The choice $70$ is DROPPING THE ONE-HALF, the area of the $10$ by $7$ rectangle the ramp fits inside ✗; the choice $17$ is ADDING THE TWO LEGS INSTEAD OF MULTIPLYING THEM, since $10 + 7 = 17$ ✗; the choice $50$ is USING THE LONGER LEG FOR BOTH THE BASE AND THE HEIGHT, giving $\\frac{1}{2} \\cdot 10 \\cdot 10 = 50$ ✗.)',
    },
  ],
  // s2 — decide collinearity and say which slopes settle it.
  [
    {
      q: 'A hiker records three trail markers at $(1, 2)$, $(3, 8)$, and $(7, 16)$. Do the three markers lie on one straight line?',
      choices: [
        'No — the first slope is $\\frac{1}{3}$ and the second is $\\frac{1}{2}$',
        'No — the first slope is $3$ and the second is $2$',
        'Yes — the slope from the first marker to the third is $\\frac{7}{3}$, so the three lie on one line',
        'No — the three markers sit at different distances apart, so no straight line can hold them',
      ],
      answer: 1,
      solution:
        'Route one, compare the slopes of consecutive pairs: from $(1, 2)$ to $(3, 8)$ the slope is $\\frac{8 - 2}{3 - 1} = \\frac{6}{2} = 3$, and from $(3, 8)$ to $(7, 16)$ it is $\\frac{16 - 8}{7 - 3} = \\frac{8}{4} = 2$. The two pairs share the marker $(3, 8)$, so equal slopes would force one line and unequal slopes force a bend. The first slope is $3$ and the second is $2$, so the markers are not collinear ✓. Check a second, independent way, by writing the line through the first two markers and testing the third: slope $3$ through $(1, 2)$ gives $y = 3(x - 1) + 2 = 3x - 1$. At $x = 7$ that line sits at $y = 21 - 1 = 20$, while the third marker sits at $y = 16$. The marker misses the line by $4$, so the three are not collinear ✓. (The choice naming $\\frac{1}{3}$ and $\\frac{1}{2}$ is WRITING RUN OVER RISE INSTEAD OF RISE OVER RUN, since $\\frac{3 - 1}{8 - 2} = \\frac{1}{3}$ and $\\frac{7 - 3}{16 - 8} = \\frac{1}{2}$ ✗; the choice naming $\\frac{7}{3}$ is CHECKING ONLY THE OUTER PAIR, and $\\frac{16 - 2}{7 - 1} = \\frac{14}{6} = \\frac{7}{3}$ is a test any three points pass, since some line always joins the outer two ✗; the choice about distances is TESTING WITH DISTANCES INSTEAD OF SLOPES, and points on one line may be spaced as unevenly as they like ✗.)',
    },
    {
      q: 'A ski lift has towers at $(0, 6)$, $(4, 4)$, and $(10, 1)$ on a map. Do the three towers lie on one straight line?',
      choices: [
        'Yes — the slope from each tower to the next is $-2$ both times',
        'No — the first slope is $-\\frac{1}{2}$ and the second is $\\frac{1}{2}$',
        'No — the towers are spaced at different distances, so they cannot lie on one line',
        'Yes — the slope from each point to the next is $-\\frac{1}{2}$ both times',
      ],
      answer: 3,
      solution:
        'Route one, compare the slopes of consecutive pairs: from $(0, 6)$ to $(4, 4)$ the slope is $\\frac{4 - 6}{4 - 0} = \\frac{-2}{4} = -\\frac{1}{2}$, and from $(4, 4)$ to $(10, 1)$ it is $\\frac{1 - 4}{10 - 4} = \\frac{-3}{6} = -\\frac{1}{2}$. Equal slopes through the shared tower $(4, 4)$ mean one unbroken line, so the towers are collinear ✓. Check a second, independent way, by writing the line through the outer two towers and testing the middle one: from $(0, 6)$ to $(10, 1)$ the slope is $\\frac{1 - 6}{10 - 0} = -\\frac{1}{2}$, and the $y$-intercept is $6$, so the line is $y = -\\frac{1}{2}x + 6$. At $x = 4$ it gives $y = -2 + 6 = 4$, which is exactly the middle tower ✓. (The choice naming $-2$ is WRITING RUN OVER RISE INSTEAD OF RISE OVER RUN, since $\\frac{4 - 0}{4 - 6} = -2$ and $\\frac{10 - 4}{1 - 4} = -2$ ✗; the choice naming $-\\frac{1}{2}$ then $\\frac{1}{2}$ is SUBTRACTING IN OPPOSITE ORDERS IN THE SECOND SLOPE, taking $\\frac{4 - 1}{10 - 4} = \\frac{1}{2}$ with the top of the fraction reversed ✗; the choice about spacing is TESTING WITH DISTANCES INSTEAD OF SLOPES, and the gaps $\\sqrt{20}$ and $\\sqrt{45}$ differ on a perfectly straight lift line ✗.)',
    },
    {
      q: 'Three nails are hammered into a board at $(0, 1)$, $(3, 5)$, and $(7, 11)$. Can one taut string touch all three nails?',
      choices: [
        'No — the first slope is $\\frac{3}{4}$ and the second is $\\frac{2}{3}$',
        'No — the first slope is $\\frac{4}{3}$ and the second is $\\frac{6}{7}$',
        'No — the first slope is $\\frac{4}{3}$ and the second is $\\frac{3}{2}$',
        'Yes — the three $x$-coordinates $0$, $3$, and $7$ are all different, so the nails line up',
      ],
      answer: 2,
      solution:
        'Route one, compare the slopes of consecutive pairs: from $(0, 1)$ to $(3, 5)$ the slope is $\\frac{5 - 1}{3 - 0} = \\frac{4}{3}$, and from $(3, 5)$ to $(7, 11)$ it is $\\frac{11 - 5}{7 - 3} = \\frac{6}{4} = \\frac{3}{2}$. Since $\\frac{4}{3}$ and $\\frac{3}{2}$ are not the same number, the string would have to bend at the middle nail, so no taut string touches all three ✓. Check a second, independent way, by writing the line through the first two nails and testing the third: slope $\\frac{4}{3}$ through $(0, 1)$ gives $y = \\frac{4}{3}x + 1$. At $x = 7$ that line sits at $y = \\frac{28}{3} + 1 = \\frac{31}{3}$, and $\\frac{31}{3}$ is short of $11 = \\frac{33}{3}$. The third nail sits $\\frac{2}{3}$ above the line ✓. (The choice naming $\\frac{3}{4}$ and $\\frac{2}{3}$ is WRITING RUN OVER RISE INSTEAD OF RISE OVER RUN, since $\\frac{3 - 0}{5 - 1} = \\frac{3}{4}$ and $\\frac{7 - 3}{11 - 5} = \\frac{2}{3}$ ✗; the choice naming $\\frac{6}{7}$ is MEASURING THE SECOND RUN FROM THE FIRST NAIL INSTEAD OF THE MIDDLE ONE, which pairs the rise $11 - 5 = 6$ with the run $7 - 0 = 7$ ✗; the choice about the $x$-coordinates is MISTAKING A CONDITION THAT MERELY LETS THE SLOPES EXIST FOR THE COLLINEARITY TEST, since three points with different $x$-coordinates usually form a triangle ✗.)',
    },
  ],
  // s3 — perimeter of a right triangle with one horizontal and one vertical side.
  [
    {
      q: 'A garden bed is shaped as the triangle with vertices $(2, 1)$, $(8, 1)$, and $(8, 9)$. How much edging is needed to run all the way around it?',
      choices: ['$14$', '$28$', '$24$', '$16$'],
      answer: 2,
      solution:
        'Route one, take the three sides one at a time: the side from $(2, 1)$ to $(8, 1)$ is horizontal, so its length is just $8 - 2 = 6$. The side from $(8, 1)$ to $(8, 9)$ is vertical, so its length is $9 - 1 = 8$. The remaining side runs from $(2, 1)$ to $(8, 9)$, and the distance formula gives $\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$. The edging measures $6 + 8 + 10 = 24$ ✓. Check a second, independent way, without any square root: a horizontal side meeting a vertical side makes a right angle at $(8, 1)$, and the slanted side is the hypotenuse across a run of $6$ and a rise of $8$. That is the $3$–$4$–$5$ triangle with every length doubled, so the hypotenuse is $2 \\cdot 5 = 10$. Counting squares along the grid gives $6$ across and $8$ up, and $6 + 8 + 10 = 24$ ✓. (The choice $14$ is STOPPING AT THE TWO LEGS and never walking the slanted side home, since $6 + 8 = 14$ ✗; the choice $28$ is TAKING THE HYPOTENUSE TO BE THE SUM OF THE LEGS, which turns $\\sqrt{36 + 64}$ into $6 + 8 = 14$ and the perimeter into $6 + 8 + 14 = 28$ ✗; the choice $16$ is TAKING THE HYPOTENUSE TO BE THE DIFFERENCE OF THE LEGS, giving $8 - 6 = 2$ and a total of $6 + 8 + 2 = 16$ ✗.)',
    },
    {
      q: 'A sail is stitched along the edges of the triangle with vertices $(1, 2)$, $(10, 2)$, and $(10, 14)$. What is the total length of stitching around the sail?',
      choices: ['$36$', '$21$', '$54$', '$42$'],
      answer: 0,
      solution:
        'Route one, take the three sides one at a time: the side from $(1, 2)$ to $(10, 2)$ is horizontal with length $10 - 1 = 9$, and the side from $(10, 2)$ to $(10, 14)$ is vertical with length $14 - 2 = 12$. The slanted side joins $(1, 2)$ to $(10, 14)$, and the distance formula gives $\\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$. The stitching runs $9 + 12 + 15 = 36$ ✓. Check a second, independent way, without any square root: the horizontal and vertical sides meet squarely at $(10, 2)$, and the slanted side spans a run of $9$ and a rise of $12$ — the $3$–$4$–$5$ triangle with every length tripled, so its hypotenuse is $3 \\cdot 5 = 15$. Adding the three grid-counted lengths gives $9 + 12 + 15 = 36$ ✓. (The choice $21$ is STOPPING AT THE TWO LEGS, since $9 + 12 = 21$ leaves the slanted edge unstitched ✗; the choice $54$ is REPORTING THE AREA INSTEAD OF THE PERIMETER, since $\\frac{1}{2} \\cdot 9 \\cdot 12 = 54$ ✗; the choice $42$ is TAKING THE HYPOTENUSE TO BE THE SUM OF THE LEGS, giving $9 + 12 = 21$ for the slanted side and $9 + 12 + 21 = 42$ in all ✗.)',
    },
    {
      q: 'A pennant is cut as the triangle with vertices $(2, 3)$, $(10, 3)$, and $(10, 18)$, and ribbon is glued along every edge. How long is the ribbon?',
      choices: ['$23$', '$60$', '$46$', '$40$'],
      answer: 3,
      solution:
        'Route one, take the three sides one at a time: the edge from $(2, 3)$ to $(10, 3)$ is horizontal with length $10 - 2 = 8$, and the edge from $(10, 3)$ to $(10, 18)$ is vertical with length $18 - 3 = 15$. The slanted edge joins $(2, 3)$ to $(10, 18)$, so the distance formula gives $\\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$. The ribbon measures $8 + 15 + 17 = 40$ ✓. Check a second, independent way, by testing the candidate hypotenuse with a difference of squares: if the slanted edge really is $17$, then $17^2 - 15^2$ must equal the square of the horizontal edge. Factoring, $17^2 - 15^2 = (17 - 15)(17 + 15) = 2 \\cdot 32 = 64 = 8^2$, which it does, so $17$ is right and the three edges total $8 + 15 + 17 = 40$ ✓. (The choice $23$ is STOPPING AT THE TWO LEGS, since $8 + 15 = 23$ skips the slanted edge ✗; the choice $60$ is REPORTING THE AREA INSTEAD OF THE PERIMETER, since $\\frac{1}{2} \\cdot 8 \\cdot 15 = 60$ ✗; the choice $46$ is TAKING THE HYPOTENUSE TO BE THE SUM OF THE LEGS, giving $8 + 15 = 23$ for the slanted edge and $8 + 15 + 23 = 46$ altogether ✗.)',
    },
  ],
  // s4 — name a triangle as precisely as the coordinates allow.
  [
    {
      q: 'Describe the triangle with vertices $(0, 0)$, $(4, 2)$, and $(1, 5)$ as precisely as you can.',
      fig: {
        view: [-1, -1, 6, 7],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 2], [1, 5]], fill: false },
          { t: 'point', p: [0, 0], dx: -10, dy: 12 },
          { t: 'point', p: [4, 2], dx: 12, dy: 8 },
          { t: 'point', p: [1, 5], dx: -4, dy: -12 },
        ],
      },
      choices: ['an equilateral triangle', 'an isosceles triangle', 'a scalene right triangle', 'a scalene triangle'],
      answer: 3,
      solution:
        'Route one, compare squared side lengths and then test for a right angle: from $(0, 0)$ to $(4, 2)$ the square is $4^2 + 2^2 = 20$; from $(0, 0)$ to $(1, 5)$ it is $1^2 + 5^2 = 26$; from $(4, 2)$ to $(1, 5)$ it is $3^2 + 3^2 = 18$. Three different numbers mean three different side lengths, so the triangle is scalene. A right angle would force the two smaller squares to add to the largest, but $18 + 20 = 38$, not $26$. Scalene with no right angle is as far as the description goes: a scalene triangle ✓. Check a second, independent way, with slopes and symmetry: the sides have slopes $\\frac{2 - 0}{4 - 0} = \\frac{1}{2}$, $\\frac{5 - 0}{1 - 0} = 5$, and $\\frac{5 - 2}{1 - 4} = -1$. The three products $\\frac{1}{2} \\cdot 5 = \\frac{5}{2}$, $\\frac{1}{2} \\cdot (-1) = -\\frac{1}{2}$, and $5 \\cdot (-1) = -5$ all miss $-1$, so no corner is square. Two sides meeting at a vertex are equal only when that vertex sits on the perpendicular bisector of the third side. That bisector for the side from $(4, 2)$ to $(1, 5)$ is $y = x + 1$, which misses $(0, 0)$; for the side from $(0, 0)$ to $(1, 5)$ it passes through $\\left(\\frac{1}{2}, \\frac{5}{2}\\right)$ with slope $-\\frac{1}{5}$ and sits at height $\\frac{9}{5}$ when $x = 4$, missing $(4, 2)$; for the side from $(0, 0)$ to $(4, 2)$ it is $y = -2x + 5$, which sits at height $3$ when $x = 1$ and misses $(1, 5)$. All three vertices miss, so no two sides are equal ✓. (The choice of equilateral is COUNTING GRID STEPS INSTEAD OF MEASURING THE STRAIGHT-LINE DISTANCE, since $4 + 2$, $1 + 5$, and $3 + 3$ all come to $6$ steps while the three real lengths differ ✗; the choice of isosceles is ROUNDING THE SIDE LENGTHS TO WHOLE NUMBERS, since $\\sqrt{18} \\approx 4.24$ and $\\sqrt{20} \\approx 4.47$ both round to $4$ though $18 \\ne 20$ ✗; the choice of a scalene right triangle is TREATING ANY NEGATIVE SLOPE PRODUCT AS A RIGHT ANGLE, since the product $-\\frac{1}{2}$ is negative but perpendicular slopes must multiply to exactly $-1$ ✗.)',
    },
    {
      q: 'Describe the triangle with vertices $(0, 0)$, $(6, 0)$, and $(3, 3)$ as precisely as you can.',
      fig: {
        view: [-1, -1, 7, 5],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [3, 3]], fill: false },
          { t: 'point', p: [0, 0], dx: -10, dy: 12 },
          { t: 'point', p: [6, 0], dx: 10, dy: 12 },
          { t: 'point', p: [3, 3], dx: 0, dy: -12 },
        ],
      },
      choices: ['an isosceles triangle', 'an isosceles right triangle', 'a right triangle', 'an equilateral triangle'],
      answer: 1,
      solution:
        'Route one, compare squared side lengths and then test for a right angle: the base from $(0, 0)$ to $(6, 0)$ has square $36$; the side from $(0, 0)$ to $(3, 3)$ has square $3^2 + 3^2 = 18$; the side from $(6, 0)$ to $(3, 3)$ has square $3^2 + 3^2 = 18$. Two sides share the length $\\sqrt{18}$ and the third is $6$, so the triangle is isosceles and not equilateral. The two smaller squares add to $18 + 18 = 36$, which is exactly the largest, so there is a right angle. The precise name is an isosceles right triangle ✓. Check a second, independent way, with slopes and symmetry: the apex $(3, 3)$ sits directly above $(3, 0)$, the midpoint of the base, so the vertical line $x = 3$ is the perpendicular bisector of the base and the apex is equidistant from both base ends — the two slanted sides are equal. The slanted sides have slopes $\\frac{3 - 0}{3 - 0} = 1$ and $\\frac{0 - 3}{6 - 3} = -1$, whose product is $-1$, so they meet at a right angle at the apex. That makes the base the hypotenuse, and a hypotenuse always beats either leg, so the base cannot join the equal pair ✓. (The choice of an isosceles triangle is STOPPING AFTER THE TWO EQUAL SIDES AND NEVER TESTING FOR THE RIGHT ANGLE, a true statement but a vaguer one than the question asks for ✗; the choice of a right triangle is STOPPING AFTER THE RIGHT ANGLE AND NEVER COMPARING THE SIDE LENGTHS, again true but vaguer ✗; the choice of equilateral is COUNTING GRID STEPS INSTEAD OF MEASURING THE STRAIGHT-LINE DISTANCE, since the base is $6$ steps and each slanted side is $3 + 3 = 6$ steps, yet a slanted side really measures $\\sqrt{18} \\approx 4.24$ ✗.)',
    },
    {
      q: 'Describe the triangle with vertices $(1, 1)$, $(3, 5)$, and $(9, 2)$ as precisely as you can.',
      fig: {
        view: [0, 0, 10, 6],
        grid: true,
        elems: [
          { t: 'poly', pts: [[1, 1], [3, 5], [9, 2]], fill: false },
          { t: 'point', p: [1, 1], dx: -8, dy: 12 },
          { t: 'point', p: [3, 5], dx: -4, dy: -12 },
          { t: 'point', p: [9, 2], dx: 12, dy: 8 },
        ],
      },
      choices: ['a scalene right triangle', 'a scalene triangle', 'a right triangle', 'an isosceles right triangle'],
      answer: 0,
      solution:
        'Route one, compare squared side lengths and then test for a right angle: from $(1, 1)$ to $(3, 5)$ the square is $2^2 + 4^2 = 20$; from $(3, 5)$ to $(9, 2)$ it is $6^2 + 3^2 = 45$; from $(1, 1)$ to $(9, 2)$ it is $8^2 + 1^2 = 65$. The numbers $20$, $45$, $65$ are all different, so the triangle is scalene, and $20 + 45 = 65$ exactly, so there is a right angle. The precise name is a scalene right triangle ✓. Check a second, independent way, with slopes and symmetry: the side from $(1, 1)$ to $(3, 5)$ has slope $\\frac{5 - 1}{3 - 1} = 2$ and the side from $(3, 5)$ to $(9, 2)$ has slope $\\frac{2 - 5}{9 - 3} = -\\frac{1}{2}$. Their product is $2 \\cdot \\left(-\\frac{1}{2}\\right) = -1$, so the corner at $(3, 5)$ is square and the side from $(1, 1)$ to $(9, 2)$ is the hypotenuse — longer than either leg, so it matches neither. The two legs would be equal only if $(3, 5)$ sat on the perpendicular bisector of the hypotenuse, which runs through $(5, \\frac{3}{2})$ with slope $-8$ and sits at height $\\frac{35}{2}$ when $x = 3$, nowhere near $(3, 5)$. No two sides match ✓. (The choice of a scalene triangle is STOPPING BEFORE THE RIGHT-ANGLE TEST, true but vaguer than the question asks ✗; the choice of a right triangle is STOPPING BEFORE COMPARING THE SIDE LENGTHS, also true but vaguer ✗; the choice of an isosceles right triangle is COUNTING GRID STEPS INSTEAD OF MEASURING THE STRAIGHT-LINE DISTANCE, since $6 + 3$ and $8 + 1$ both come to $9$ steps though the sides really measure $\\sqrt{45}$ and $\\sqrt{65}$ ✗.)',
    },
  ],
  // s5 — shoelace area, checked against a bounding box with its corner pieces removed.
  [
    {
      q: 'Use the shoelace formula to find the area of the triangle with vertices $(0, 1)$, $(6, 0)$, and $(4, 6)$.',
      fig: {
        view: [-1, -1, 7, 7],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 1], [6, 0], [4, 6]], fill: false },
          { t: 'point', p: [0, 1], dx: -12, dy: -4 },
          { t: 'point', p: [6, 0], dx: 12, dy: 8 },
          { t: 'point', p: [4, 6], dx: 4, dy: -12 },
        ],
      },
      choices: ['$34$', '$17$', '$20$', '$36$'],
      answer: 1,
      solution:
        'Route one, run the shoelace formula with each $x$ meeting the difference of the other two $y$-values: $\\frac{1}{2}\\left|0(0 - 6) + 6(6 - 1) + 4(1 - 0)\\right| = \\frac{1}{2}\\left|0 + 30 + 4\\right| = \\frac{34}{2} = 17$ ✓. Check a second, independent way, with a bounding box: the $x$-coordinates run from $0$ to $6$ and the $y$-coordinates from $0$ to $6$, so the smallest box holding the triangle is $6$ by $6$ with area $36$. Three right triangles fill the space between the triangle and the box — one with legs $1$ and $6$ in the bottom left corner (area $3$), one with legs $6$ and $2$ in the top right corner (area $6$), and one with legs $4$ and $5$ in the top left corner (area $10$). The triangle is what remains: $36 - 3 - 6 - 10 = 17$ ✓. (The choice $34$ is DROPPING THE FINAL HALVING, since the shoelace sum $34$ is twice the area ✗; the choice $20$ is SUBTRACTING ONLY TWO OF THE THREE CORNER PIECES, leaving the corner of area $3$ inside and reporting $36 - 6 - 10 = 20$ ✗; the choice $36$ is REPORTING THE BOUNDING BOX ITSELF and never taking any corner away ✗.)',
    },
    {
      q: 'A triangular flag has corners at $(0, 0)$, $(4, 3)$, and $(1, 7)$. What is its area?',
      fig: {
        view: [-1, -1, 5, 8],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 3], [1, 7]], fill: false },
          { t: 'point', p: [0, 0], dx: -10, dy: 12 },
          { t: 'point', p: [4, 3], dx: 12, dy: 6 },
          { t: 'point', p: [1, 7], dx: -4, dy: -12 },
        ],
      },
      choices: ['$25$', '$28$', '$16$', '$\\frac{25}{2}$'],
      answer: 3,
      solution:
        'Route one, run the shoelace formula with each $x$ meeting the difference of the other two $y$-values: $\\frac{1}{2}\\left|0(3 - 7) + 4(7 - 0) + 1(0 - 3)\\right| = \\frac{1}{2}\\left|0 + 28 - 3\\right| = \\frac{25}{2}$ ✓. Check a second, independent way, with a bounding box: the $x$-coordinates run from $0$ to $4$ and the $y$-coordinates from $0$ to $7$, so the box is $4$ by $7$ with area $28$. Three right triangles fill the gap — one with legs $4$ and $3$ in the bottom right corner (area $6$), one with legs $4$ and $3$ in the top right corner (area $6$), and one with legs $1$ and $7$ in the top left corner (area $\\frac{7}{2}$). What remains is $28 - 6 - 6 - \\frac{7}{2} = \\frac{25}{2}$ ✓. (The choice $25$ is DROPPING THE FINAL HALVING, since $25$ is the shoelace sum before the last step ✗; the choice $28$ is REPORTING THE BOUNDING BOX ITSELF and never taking any corner away ✗; the choice $16$ is SUBTRACTING ONLY TWO OF THE THREE CORNER PIECES, leaving the corner of area $\\frac{7}{2}$ inside and reporting $28 - 6 - 6 = 16$ ✗.)',
    },
    {
      q: 'A kite is cut in the shape of the triangle with corners $(0, 0)$, $(7, 2)$, and $(2, 6)$. How much fabric does it use?',
      fig: {
        view: [-1, -1, 8, 7],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 2], [2, 6]], fill: false },
          { t: 'point', p: [0, 0], dx: -10, dy: 12 },
          { t: 'point', p: [7, 2], dx: 12, dy: 6 },
          { t: 'point', p: [2, 6], dx: -4, dy: -12 },
        ],
      },
      choices: ['$38$', '$42$', '$19$', '$26$'],
      answer: 2,
      solution:
        'Route one, run the shoelace formula with each $x$ meeting the difference of the other two $y$-values: $\\frac{1}{2}\\left|0(2 - 6) + 7(6 - 0) + 2(0 - 2)\\right| = \\frac{1}{2}\\left|0 + 42 - 4\\right| = \\frac{38}{2} = 19$ ✓. Check a second, independent way, with a bounding box: the $x$-coordinates run from $0$ to $7$ and the $y$-coordinates from $0$ to $6$, so the box is $7$ by $6$ with area $42$. Three right triangles fill the space between the kite and the box — one with legs $7$ and $2$ along the bottom (area $7$), one with legs $4$ and $5$ in the top right corner (area $10$), and one with legs $2$ and $6$ in the top left corner (area $6$). The fabric left over is $42 - 7 - 10 - 6 = 19$ ✓. (The choice $38$ is DROPPING THE FINAL HALVING, since $38$ is the shoelace sum before the last step ✗; the choice $42$ is REPORTING THE BOUNDING BOX ITSELF and never taking any corner away ✗; the choice $26$ is SUBTRACTING ONLY TWO OF THE THREE CORNER PIECES, leaving the corner of area $7$ inside and reporting $42 - 10 - 6 = 26$ ✗.)',
    },
  ],
  // s6 — locate the right angle by vertex name, using P, Q, R.
  [
    {
      q: 'Triangle $PQR$ has vertices $P = (2, 3)$, $Q = (8, 6)$, and $R = (0, 7)$. At which vertex is the right angle?',
      fig: {
        view: [-1, 2, 9, 8],
        grid: true,
        elems: [
          { t: 'poly', pts: [[2, 3], [8, 6], [0, 7]], fill: false },
          { t: 'point', p: [2, 3], label: 'P', dx: -4, dy: 14 },
          { t: 'point', p: [8, 6], label: 'Q', dx: 12, dy: 6 },
          { t: 'point', p: [0, 7], label: 'R', dx: -12, dy: -4 },
        ],
      },
      choices: ['$P$', '$Q$', '$R$', 'There is no right angle'],
      answer: 0,
      solution:
        'Route one, multiply slopes at each corner: $\\overline{PQ}$ has slope $\\frac{6 - 3}{8 - 2} = \\frac{1}{2}$, $\\overline{PR}$ has slope $\\frac{7 - 3}{0 - 2} = -2$, and $\\overline{QR}$ has slope $\\frac{7 - 6}{0 - 8} = -\\frac{1}{8}$. At $P$ the two sides give $\\frac{1}{2} \\cdot (-2) = -1$, so those sides are perpendicular and the right angle sits at $P$ ✓. Check a second, independent way, with squared side lengths: $PQ^2 = 6^2 + 3^2 = 45$, $PR^2 = 2^2 + 4^2 = 20$, and $QR^2 = 8^2 + 1^2 = 65$. Since $45 + 20 = 65$, the side $\\overline{QR}$ is the hypotenuse, and the right angle of a triangle always sits at the vertex the hypotenuse skips — that vertex is $P$ ✓. (The choice $Q$ is NAMING THE VERTEX WHERE THE TWO LONGEST SIDES MEET, since $\\overline{QR}$ at $65$ and $\\overline{PQ}$ at $45$ do meet at $Q$, but the right angle sits across from the longest side rather than on it ✗; the choice $R$ is NAMING THE VERTEX WHERE THE SHORTEST AND LONGEST SIDES MEET, since $\\overline{PR}$ at $20$ and $\\overline{QR}$ at $65$ meet at $R$ ✗; the choice that there is no right angle is TESTING ONLY ONE CORNER AND STOPPING, since the two sides at $Q$ give $\\frac{1}{2} \\cdot \\left(-\\frac{1}{8}\\right) = -\\frac{1}{16}$ and a single failure says nothing about the other two corners ✗.)',
    },
    {
      q: 'A tent is pegged at the three points $P = (5, 7)$, $Q = (6, 0)$, and $R = (3, 1)$. Which peg sits at the right angle of triangle $PQR$?',
      fig: {
        view: [-1, -1, 7, 8],
        grid: true,
        elems: [
          { t: 'poly', pts: [[5, 7], [6, 0], [3, 1]], fill: false },
          { t: 'point', p: [5, 7], label: 'P', dx: 4, dy: -12 },
          { t: 'point', p: [6, 0], label: 'Q', dx: 12, dy: 10 },
          { t: 'point', p: [3, 1], label: 'R', dx: -12, dy: 6 },
        ],
      },
      choices: ['$P$', '$Q$', '$R$', 'There is no right angle'],
      answer: 2,
      solution:
        'Route one, multiply slopes at each corner: $\\overline{RP}$ has slope $\\frac{7 - 1}{5 - 3} = 3$, $\\overline{RQ}$ has slope $\\frac{0 - 1}{6 - 3} = -\\frac{1}{3}$, and $\\overline{PQ}$ has slope $\\frac{0 - 7}{6 - 5} = -7$. At $R$ the two sides give $3 \\cdot \\left(-\\frac{1}{3}\\right) = -1$, so the right angle is at the peg $R$ ✓. Check a second, independent way, with squared side lengths: $RP^2 = 2^2 + 6^2 = 40$, $RQ^2 = 3^2 + 1^2 = 10$, and $PQ^2 = 1^2 + 7^2 = 50$. Since $40 + 10 = 50$, the side $\\overline{PQ}$ is the hypotenuse, and the right angle belongs to the vertex the hypotenuse leaves out — that is $R$ ✓. (The choice $P$ is NAMING THE VERTEX WHERE THE TWO LONGEST SIDES MEET, since $\\overline{PQ}$ at $50$ and $\\overline{RP}$ at $40$ meet at $P$, though the right angle faces the longest side instead of touching it ✗; the choice $Q$ is NAMING THE VERTEX WHERE THE SHORTEST AND LONGEST SIDES MEET, since $\\overline{RQ}$ at $10$ and $\\overline{PQ}$ at $50$ meet at $Q$ ✗; the choice that there is no right angle is TESTING ONLY ONE CORNER AND STOPPING, since the two sides at $P$ give $3 \\cdot (-7) = -21$ and one failed corner leaves the other two untested ✗.)',
    },
    {
      q: 'Three lamp posts stand at $P = (6, 3)$, $Q = (2, 1)$, and $R = (-2, 9)$. At which post does triangle $PQR$ turn a right angle?',
      fig: {
        view: [-3, 0, 7, 10],
        grid: true,
        elems: [
          { t: 'poly', pts: [[6, 3], [2, 1], [-2, 9]], fill: false },
          { t: 'point', p: [6, 3], label: 'P', dx: 12, dy: 6 },
          { t: 'point', p: [2, 1], label: 'Q', dx: 4, dy: 14 },
          { t: 'point', p: [-2, 9], label: 'R', dx: -12, dy: -4 },
        ],
      },
      choices: ['$P$', '$Q$', '$R$', 'There is no right angle'],
      answer: 1,
      solution:
        'Route one, multiply slopes at each corner: $\\overline{QP}$ has slope $\\frac{3 - 1}{6 - 2} = \\frac{1}{2}$, $\\overline{QR}$ has slope $\\frac{9 - 1}{-2 - 2} = -2$, and $\\overline{PR}$ has slope $\\frac{9 - 3}{-2 - 6} = -\\frac{3}{4}$. At $Q$ the two sides give $\\frac{1}{2} \\cdot (-2) = -1$, so the right angle stands at the post $Q$ ✓. Check a second, independent way, with squared side lengths: $QP^2 = 4^2 + 2^2 = 20$, $QR^2 = 4^2 + 8^2 = 80$, and $PR^2 = 8^2 + 6^2 = 100$. Since $20 + 80 = 100$, the side $\\overline{PR}$ is the hypotenuse, and the right angle lives at the one vertex the hypotenuse misses — that is $Q$ ✓. (The choice $R$ is NAMING THE VERTEX WHERE THE TWO LONGEST SIDES MEET, since $\\overline{PR}$ at $100$ and $\\overline{QR}$ at $80$ meet at $R$, though the right angle sits opposite the longest side ✗; the choice $P$ is NAMING THE VERTEX WHERE THE SHORTEST AND LONGEST SIDES MEET, since $\\overline{QP}$ at $20$ and $\\overline{PR}$ at $100$ meet at $P$ ✗; the choice that there is no right angle is TESTING ONLY ONE CORNER AND STOPPING, since the two sides at $P$ give $\\frac{1}{2} \\cdot \\left(-\\frac{3}{4}\\right) = -\\frac{3}{8}$ and one miss does not clear the other corners ✗.)',
    },
  ],
  // s7 — name a quadrilateral as precisely as the coordinates allow.
  [
    {
      q: 'Taken in order, the quadrilateral with vertices $(0, 0)$, $(6, 3)$, $(4, 7)$, and $(-2, 4)$ is best described as which of these?',
      fig: {
        view: [-3, -1, 7, 8],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 3], [4, 7], [-2, 4]], fill: false },
          { t: 'point', p: [0, 0], dx: -6, dy: 14 },
          { t: 'point', p: [6, 3], dx: 12, dy: 6 },
          { t: 'point', p: [4, 7], dx: 10, dy: -6 },
          { t: 'point', p: [-2, 4], dx: -12, dy: -4 },
        ],
      },
      choices: ['square', 'parallelogram', 'rectangle', 'trapezoid with exactly one pair of parallel sides'],
      answer: 2,
      solution:
        'Route one, walk the four sides with slopes and lengths: the sides in order have slopes $\\frac{3 - 0}{6 - 0} = \\frac{1}{2}$, $\\frac{7 - 3}{4 - 6} = -2$, $\\frac{4 - 7}{-2 - 4} = \\frac{1}{2}$, and $\\frac{0 - 4}{0 - (-2)} = -2$. Both pairs of opposite sides are parallel, and neighboring sides multiply to $\\frac{1}{2} \\cdot (-2) = -1$, so all four corners are square. The squared side lengths are $6^2 + 3^2 = 45$ and $2^2 + 4^2 = 20$, which differ, so the sides do not all match. Four right angles with unequal neighboring sides is a rectangle ✓. Check a second, independent way, using only the diagonals: one diagonal runs from $(0, 0)$ to $(4, 7)$ and the other from $(6, 3)$ to $(-2, 4)$. Their midpoints are $\\left(2, \\frac{7}{2}\\right)$ and $\\left(2, \\frac{7}{2}\\right)$ — the same point, so the diagonals cut each other in half. Their squared lengths are $4^2 + 7^2 = 65$ and $8^2 + 1^2 = 65$, so they are equal, and diagonals that are equal and bisect each other belong to a rectangle. They are not perpendicular, since $4 \\cdot (-8) + 7 \\cdot 1 = -25$, so the rectangle is not a square ✓. (The choice of square is ASSUMING FOUR RIGHT ANGLES FORCE FOUR EQUAL SIDES, though the squared lengths $45$ and $20$ are different ✗; the choice of parallelogram is STOPPING AT THE TWO PAIRS OF PARALLEL SIDES AND NEVER TESTING THE CORNERS, true but vaguer than the question asks ✗; the choice of a trapezoid with exactly one pair of parallel sides is CHECKING ONLY ONE PAIR OF OPPOSITE SIDES, since the other pair share the slope $-2$ and are parallel as well ✗.)',
    },
    {
      q: 'Taken in order, the quadrilateral with vertices $(0, 0)$, $(9, 0)$, $(6, 4)$, and $(2, 4)$ is best described as which of these?',
      fig: {
        view: [-1, -1, 10, 5],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [6, 4], [2, 4]], fill: false },
          { t: 'point', p: [0, 0], dx: -10, dy: 12 },
          { t: 'point', p: [9, 0], dx: 10, dy: 12 },
          { t: 'point', p: [6, 4], dx: 10, dy: -6 },
          { t: 'point', p: [2, 4], dx: -10, dy: -6 },
        ],
      },
      choices: ['trapezoid', 'parallelogram', 'rhombus', 'kite'],
      answer: 0,
      solution:
        'Route one, walk the four sides with slopes: the bottom side from $(0, 0)$ to $(9, 0)$ has slope $0$ and the top side from $(6, 4)$ to $(2, 4)$ also has slope $0$, so that pair is parallel. The right side from $(9, 0)$ to $(6, 4)$ has slope $\\frac{4 - 0}{6 - 9} = -\\frac{4}{3}$ and the left side from $(2, 4)$ to $(0, 0)$ has slope $\\frac{0 - 4}{0 - 2} = 2$, so that pair is not parallel. Exactly one pair of parallel sides makes it a trapezoid ✓. Check a second, independent way, from heights and lengths: the bottom two corners both sit at height $0$ and the top two both sit at height $4$, so those two sides are level and therefore parallel. The left side leans right as it rises while the right side leans left as it rises, so extending them upward would bring them together — they are not parallel. The four squared side lengths are $81$, $25$, $16$, and $20$, all different, so no two sides of this shape match at all ✓. (The choice of parallelogram is ASSUMING ONE PAIR OF PARALLEL SIDES FORCES THE OTHER PAIR TO BE PARALLEL TOO, though the slopes $-\\frac{4}{3}$ and $2$ are nothing alike ✗; the choice of rhombus is TAKING FOUR SIDES THAT LOOK SIMILAR IN THE PICTURE FOR FOUR EQUAL SIDES, though $81$, $25$, $16$, and $20$ are four different squares ✗; the choice of kite is LOOKING FOR EQUAL SIDES AMONG NEIGHBORS, and here no neighboring pair matches either, since $81 \\ne 25$, $25 \\ne 16$, $16 \\ne 20$, and $20 \\ne 81$ ✗.)',
    },
    {
      q: 'Taken in order, the quadrilateral with vertices $(0, 0)$, $(7, 1)$, $(9, 7)$, and $(2, 6)$ is best described as which of these?',
      fig: {
        view: [-1, -1, 10, 8],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 1], [9, 7], [2, 6]], fill: false },
          { t: 'point', p: [0, 0], dx: -6, dy: 14 },
          { t: 'point', p: [7, 1], dx: 12, dy: 8 },
          { t: 'point', p: [9, 7], dx: 12, dy: -4 },
          { t: 'point', p: [2, 6], dx: -12, dy: -4 },
        ],
      },
      choices: ['rectangle', 'rhombus', 'trapezoid with exactly one pair of parallel sides', 'parallelogram'],
      answer: 3,
      solution:
        'Route one, walk the four sides with slopes and lengths: the sides in order have slopes $\\frac{1 - 0}{7 - 0} = \\frac{1}{7}$, $\\frac{7 - 1}{9 - 7} = 3$, $\\frac{6 - 7}{2 - 9} = \\frac{1}{7}$, and $\\frac{0 - 6}{0 - 2} = 3$. Both pairs of opposite sides are parallel, so the shape is a parallelogram. Neighboring sides give $\\frac{1}{7} \\cdot 3 = \\frac{3}{7}$, not $-1$, so no corner is square, and the squared side lengths $7^2 + 1^2 = 50$ and $2^2 + 6^2 = 40$ differ, so the sides are not all equal. Parallelogram is as precise as it gets ✓. Check a second, independent way, using only the diagonals: one diagonal joins $(0, 0)$ to $(9, 7)$ and the other joins $(7, 1)$ to $(2, 6)$, and both have midpoint $\\left(\\frac{9}{2}, \\frac{7}{2}\\right)$, so they bisect each other — the signature of a parallelogram. Their squared lengths are $9^2 + 7^2 = 130$ and $5^2 + 5^2 = 50$, so the diagonals are unequal and the shape is no rectangle, and $9 \\cdot (-5) + 7 \\cdot 5 = -10$ is not $0$, so they are not perpendicular and the shape is no rhombus ✓. (The choice of rectangle is ASSUMING TWO SIDES THAT ARE NOT PARALLEL MUST MEET AT A RIGHT ANGLE, though $\\frac{1}{7} \\cdot 3 = \\frac{3}{7}$ is a long way from $-1$ ✗; the choice of rhombus is COUNTING GRID STEPS INSTEAD OF MEASURING THE STRAIGHT-LINE DISTANCE, since $7 + 1$ and $2 + 6$ both come to $8$ steps while the true squares are $50$ and $40$ ✗; the choice of a trapezoid with exactly one pair of parallel sides is CHECKING ONLY ONE PAIR OF OPPOSITE SIDES, since the other pair share the slope $3$ and are parallel as well ✗.)',
    },
  ],

  // s8 — classify a quadrilateral, second pass, with a different word list from s7.
  [
    {
      q: 'Taken in order, the quadrilateral with vertices $(0, 0)$, $(4, 3)$, $(1, 7)$, and $(-3, 4)$ is best described as which of these?',
      fig: {
        view: [-4, -1, 5, 8],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 3], [1, 7], [-3, 4]], fill: false },
          { t: 'point', p: [0, 0], dx: 4, dy: 14 },
          { t: 'point', p: [4, 3], dx: 12, dy: 4 },
          { t: 'point', p: [1, 7], dx: 10, dy: -4 },
          { t: 'point', p: [-3, 4], dx: -14, dy: -2 },
        ],
      },
      choices: ['rhombus', 'rectangle', 'kite', 'square'],
      answer: 3,
      solution:
        'Route one, walk the four sides. Their squared lengths are $4^2 + 3^2 = 25$, $(-3)^2 + 4^2 = 25$, $(-4)^2 + (-3)^2 = 25$, and $3^2 + (-4)^2 = 25$, so all four sides measure $5$. Their slopes in order are $\\frac{3}{4}$, $-\\frac{4}{3}$, $\\frac{3}{4}$, and $-\\frac{4}{3}$, and $\\frac{3}{4} \\cdot \\left(-\\frac{4}{3}\\right) = -1$, so every corner is a right angle. Four equal sides and four right angles make a square ✓. Check a second, independent way, using only the diagonals: one runs from $(0, 0)$ to $(1, 7)$ and the other from $(4, 3)$ to $(-3, 4)$. Both have midpoint $\\left(\\frac{1}{2}, \\frac{7}{2}\\right)$, so they bisect each other; their squared lengths are $1^2 + 7^2 = 50$ and $(-7)^2 + 1^2 = 50$, so they are equal; and $1 \\cdot (-7) + 7 \\cdot 1 = 0$, so they are perpendicular. Diagonals that bisect, match, and cross at right angles belong to a square ✓. (The choice of rhombus is STOPPING AT THE FOUR EQUAL SIDES WITHOUT EVER CHECKING A CORNER, which leaves a true but vaguer name than the corners deserve ✗; the choice of rectangle is STOPPING AT THE FOUR RIGHT ANGLES WITHOUT EVER COMPARING THE SIDE LENGTHS, which again names less than the shape has earned ✗; the choice of kite is READING THE TWO EQUAL SIDES AT EACH CORNER AS THE MOST THAT CAN BE SAID, though all four squares are the same $25$, not two pairs ✗.)',
    },
    {
      q: 'Taken in order, the quadrilateral with vertices $(0, 0)$, $(7, 1)$, $(12, 6)$, and $(5, 5)$ is best described as which of these?',
      fig: {
        view: [-1, -1, 13, 7],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 1], [12, 6], [5, 5]], fill: false },
          { t: 'point', p: [0, 0], dx: -6, dy: 14 },
          { t: 'point', p: [7, 1], dx: 6, dy: 14 },
          { t: 'point', p: [12, 6], dx: 12, dy: 0 },
          { t: 'point', p: [5, 5], dx: -10, dy: -4 },
        ],
      },
      choices: ['parallelogram', 'rhombus', 'square', 'rectangle'],
      answer: 1,
      solution:
        'Route one, walk the four sides. Their squared lengths are $7^2 + 1^2 = 50$, $5^2 + 5^2 = 50$, $(-7)^2 + (-1)^2 = 50$, and $(-5)^2 + (-5)^2 = 50$, so all four sides are equal. Their slopes in order are $\\frac{1}{7}$, $1$, $\\frac{1}{7}$, and $1$, and $\\frac{1}{7} \\cdot 1 = \\frac{1}{7}$ is not $-1$, so no corner is square. Four equal sides without right angles is a rhombus ✓. Check a second, independent way, using only the diagonals: one runs from $(0, 0)$ to $(12, 6)$ and the other from $(7, 1)$ to $(5, 5)$. Both have midpoint $(6, 3)$, so they bisect each other, and $12 \\cdot (-2) + 6 \\cdot 4 = -24 + 24 = 0$, so they are perpendicular. Their squared lengths are $12^2 + 6^2 = 180$ and $(-2)^2 + 4^2 = 20$, so they are far from equal. Diagonals that bisect each other at right angles but do not match in length belong to a rhombus ✓. (The choice of parallelogram is STOPPING AT THE TWO PAIRS OF PARALLEL SIDES AND NEVER MEASURING THEM, when all four squares came to the same $50$ ✗; the choice of square is ASSUMING FOUR EQUAL SIDES FORCE FOUR RIGHT ANGLES, though the slopes $\\frac{1}{7}$ and $1$ multiply to $\\frac{1}{7}$ ✗; the choice of rectangle is TREATING PERPENDICULAR DIAGONALS AS THOUGH THEY WERE EQUAL DIAGONALS, though $180$ and $20$ are nowhere near the same ✗.)',
    },
    {
      q: 'Taken in order, the quadrilateral with vertices $(0, 0)$, $(4, 2)$, $(0, 9)$, and $(-4, 2)$ is best described as which of these?',
      fig: {
        view: [-5, -1, 5, 10],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 2], [0, 9], [-4, 2]], fill: false },
          { t: 'point', p: [0, 0], dx: 4, dy: 14 },
          { t: 'point', p: [4, 2], dx: 12, dy: 4 },
          { t: 'point', p: [0, 9], dx: 4, dy: -4 },
          { t: 'point', p: [-4, 2], dx: -14, dy: 4 },
        ],
      },
      choices: ['kite', 'rhombus', 'square', 'parallelogram'],
      answer: 0,
      solution:
        'Route one, walk the four sides. Their squared lengths are $4^2 + 2^2 = 20$, $(-4)^2 + 7^2 = 65$, $(-4)^2 + (-7)^2 = 65$, and $4^2 + (-2)^2 = 20$, so the two short sides sit side by side at $(0, 0)$ and the two long sides sit side by side at $(0, 9)$. Their slopes in order are $\\frac{1}{2}$, $-\\frac{7}{4}$, $\\frac{7}{4}$, and $-\\frac{1}{2}$, all four different, so not one pair of sides is parallel. Two pairs of equal neighboring sides and no parallel sides make a kite ✓. Check a second, independent way, using only the diagonals: one runs from $(0, 0)$ to $(0, 9)$ straight up the $y$-axis with length $9$, and the other runs from $(4, 2)$ to $(-4, 2)$ straight across at height $2$ with length $8$, so they meet at a right angle. The short diagonal has midpoint $(0, 2)$, which does lie on the long one, but the long diagonal has midpoint $\\left(0, \\frac{9}{2}\\right)$, which the short one misses. One diagonal cutting the other in half at a right angle, without being cut in half itself, is exactly a kite ✓. (The choice of rhombus is ASSUMING TWO PAIRS OF EQUAL SIDES MEANS ALL FOUR ARE EQUAL, though $20$ and $65$ are different squares ✗; the choice of square is TAKING PERPENDICULAR DIAGONALS AS PROOF OF A SQUARE, though these diagonals measure $9$ and $8$ and only one of them is bisected ✗; the choice of parallelogram is ASSUMING THE EQUAL SIDES MUST BE OPPOSITE ONE ANOTHER, when here each equal pair meets at a shared corner ✗.)',
    },
  ],

  // s9 — area of a tilted triangle that lands on a half unit.
  [
    {
      q: 'Three tent stakes are driven in at $(1, 1)$, $(8, 2)$, and $(3, 6)$ on a coordinate map, and a triangular groundsheet is stretched between them. What is the area of the groundsheet, in square units?',
      fig: {
        view: [0, 0, 9, 7],
        grid: true,
        elems: [
          { t: 'poly', pts: [[1, 1], [8, 2], [3, 6]], fill: true },
          { t: 'point', p: [1, 1], dx: -12, dy: 12 },
          { t: 'point', p: [8, 2], dx: 12, dy: 8 },
          { t: 'point', p: [3, 6], dx: 0, dy: -8 },
        ],
      },
      choices: ['$33$', '$\\frac{33}{2}$', '$\\frac{35}{2}$', '$\\frac{37}{2}$'],
      answer: 1,
      solution:
        'Route one, the shoelace sum. Taking the stakes in the order $(1, 1)$, $(8, 2)$, $(3, 6)$, the sum is $1(2 - 6) + 8(6 - 1) + 3(1 - 2) = -4 + 40 - 3 = 33$, and half of that is $\\frac{33}{2}$ ✓. Check a second, independent way, by boxing the triangle in. The smallest rectangle holding all three stakes runs from $x = 1$ to $x = 8$ and from $y = 1$ to $y = 6$, so it measures $7$ by $5$, an area of $35$. Three right triangles fill the space between that rectangle and the groundsheet: one with legs $7$ and $1$ has area $\\frac{7}{2}$, one with legs $5$ and $4$ has area $10$, and one with legs $2$ and $5$ has area $5$. Those come to $\\frac{7}{2} + 10 + 5 = \\frac{37}{2}$, and $35 - \\frac{37}{2} = \\frac{33}{2}$ ✓. (The choice $33$ is FORGETTING THE ONE-HALF AT THE END OF THE SHOELACE SUM, which reports twice the area ✗; the choice $\\frac{35}{2}$ is TAKING HALF OF THE SURROUNDING RECTANGLE, a shortcut that only works when the triangle cuts the rectangle along a diagonal ✗; the choice $\\frac{37}{2}$ is REPORTING THE THREE CORNER PIECES INSTEAD OF WHAT IS LEFT AFTER THEY ARE REMOVED ✗.)',
    },
    {
      q: 'Three buoys sit at $(2, 1)$, $(9, 3)$, and $(4, 8)$ on a lake map. What is the area, in square units, of the triangle they mark out?',
      fig: {
        view: [1, 0, 10, 9],
        grid: true,
        elems: [
          { t: 'poly', pts: [[2, 1], [9, 3], [4, 8]], fill: true },
          { t: 'point', p: [2, 1], dx: -12, dy: 12 },
          { t: 'point', p: [9, 3], dx: 12, dy: 8 },
          { t: 'point', p: [4, 8], dx: 0, dy: -8 },
        ],
      },
      choices: ['$45$', '$\\frac{49}{2}$', '$\\frac{53}{2}$', '$\\frac{45}{2}$'],
      answer: 3,
      solution:
        'Route one, the shoelace sum. Taking the buoys in the order $(2, 1)$, $(9, 3)$, $(4, 8)$, the sum is $2(3 - 8) + 9(8 - 1) + 4(1 - 3) = -10 + 63 - 8 = 45$, and half of that is $\\frac{45}{2}$ ✓. Check a second, independent way, by boxing the triangle in. The smallest rectangle holding all three buoys runs from $x = 2$ to $x = 9$ and from $y = 1$ to $y = 8$, a $7$ by $7$ square of area $49$. The three right triangles left over have legs $7$ and $2$, legs $5$ and $5$, and legs $2$ and $7$, giving areas $7$, $\\frac{25}{2}$, and $7$. Those total $\\frac{53}{2}$, and $49 - \\frac{53}{2} = \\frac{45}{2}$ ✓. (The choice $45$ is FORGETTING THE ONE-HALF AT THE END OF THE SHOELACE SUM, which is exactly twice the area ✗; the choice $\\frac{49}{2}$ is TAKING HALF OF THE SURROUNDING SQUARE, though no side of this triangle is a diagonal of that square ✗; the choice $\\frac{53}{2}$ is REPORTING THE THREE CORNER PIECES INSTEAD OF THE TRIANGLE THEY SURROUND ✗.)',
    },
    {
      q: 'A paper sail is cut as the triangle with vertices $(1, 1)$, $(6, 3)$, and $(3, 6)$. What is its area, in square units?',
      fig: {
        view: [0, 0, 7, 7],
        grid: true,
        elems: [
          { t: 'poly', pts: [[1, 1], [6, 3], [3, 6]], fill: true },
          { t: 'point', p: [1, 1], dx: -12, dy: 12 },
          { t: 'point', p: [6, 3], dx: 12, dy: 8 },
          { t: 'point', p: [3, 6], dx: 0, dy: -8 },
        ],
      },
      choices: ['$21$', '$\\frac{25}{2}$', '$\\frac{21}{2}$', '$\\frac{29}{2}$'],
      answer: 2,
      solution:
        'Route one, the shoelace sum. Taking the corners in the order $(1, 1)$, $(6, 3)$, $(3, 6)$, the sum is $1(3 - 6) + 6(6 - 1) + 3(1 - 3) = -3 + 30 - 6 = 21$, and half of that is $\\frac{21}{2}$ ✓. Check a second, independent way, by boxing the sail in. The smallest rectangle holding all three corners runs from $x = 1$ to $x = 6$ and from $y = 1$ to $y = 6$, a $5$ by $5$ square of area $25$. The three right triangles left over have legs $5$ and $2$, legs $3$ and $3$, and legs $2$ and $5$, giving areas $5$, $\\frac{9}{2}$, and $5$. Those total $\\frac{29}{2}$, and $25 - \\frac{29}{2} = \\frac{21}{2}$ ✓. (The choice $21$ is FORGETTING THE ONE-HALF AT THE END OF THE SHOELACE SUM, which doubles the true area ✗; the choice $\\frac{25}{2}$ is TAKING HALF OF THE SURROUNDING SQUARE, which would only be right if one side of the sail ran corner to corner across it ✗; the choice $\\frac{29}{2}$ is REPORTING THE THREE CORNER PIECES INSTEAD OF THE SAIL LEFT BETWEEN THEM ✗.)',
    },
  ],

  // s10 — solve for the coordinate that makes three points collinear.
  [
    {
      q: 'The points $(2, 3)$, $(5, 9)$, and $(6, t)$ all lie on one straight line. What is $t$?',
      choices: ['$15$', '$\\frac{19}{2}$', '$5$', '$11$'],
      answer: 3,
      solution:
        'Route one, step along the line. From $(2, 3)$ to $(5, 9)$ the rise is $9 - 3 = 6$ and the run is $5 - 2 = 3$, so the slope is $\\frac{6}{3} = 2$. Going on from $(5, 9)$ to $x = 6$ is a run of $1$, which lifts the height by $2 \\cdot 1 = 2$, so $t = 9 + 2 = 11$ ✓. Check a second, independent way, using the other two pairs and never the slope above: the slope from $(2, 3)$ to $(6, t)$ is $\\frac{t - 3}{4}$ and the slope from $(5, 9)$ to $(6, t)$ is $\\frac{t - 9}{1}$. Setting these equal gives $t - 3 = 4(t - 9)$, so $t - 3 = 4t - 36$, then $33 = 3t$ and $t = 11$ ✓. (The choice $15$ is ASSUMING THE HEIGHTS CLIMB BY EQUAL AMOUNTS WHEN THE $x$-STEPS ARE NOT EQUAL, adding another $6$ to reach $15$ although the last step is only a third as wide ✗; the choice $\\frac{19}{2}$ is DIVIDING THE RUN BY THE RISE INSTEAD OF THE RISE BY THE RUN, which gives a slope of $\\frac{1}{2}$ and a height of $9 + \\frac{1}{2}$ ✗; the choice $5$ is MEASURING THE LAST RUN FROM THE FIRST POINT INSTEAD OF THE SECOND, computing $3 + 2 \\cdot 1$ when the run from $(2, 3)$ out to $x = 6$ is really $4$ ✗.)',
    },
    {
      q: 'The points $(t, 0)$, $(5, 6)$, and $(9, 9)$ all lie on one straight line. What is $t$?',
      choices: ['$\\frac{1}{2}$', '$-3$', '$13$', '$1$'],
      answer: 1,
      solution:
        'Route one, start from the pair with no unknown in it. The slope from $(5, 6)$ to $(9, 9)$ is $\\frac{9 - 6}{9 - 5} = \\frac{3}{4}$. The point $(t, 0)$ sits $6$ units below $(5, 6)$, and a drop of $6$ along a slope of $\\frac{3}{4}$ needs a run of $-8$, since $\\frac{3}{4} \\cdot (-8) = -6$. So $t = 5 - 8 = -3$ ✓. Check a second, independent way, by pairing $(t, 0)$ with the far point instead: the slope from $(t, 0)$ to $(9, 9)$ is $\\frac{9}{9 - t}$, and setting that equal to $\\frac{3}{4}$ gives $36 = 3(9 - t)$, so $12 = 9 - t$ and $t = -3$ ✓. (The choice $\\frac{1}{2}$ is TURNING THE SLOPE UPSIDE DOWN, using $\\frac{4}{3}$ so that the drop of $6$ asks for a run of $-4\\frac{1}{2}$ ✗; the choice $13$ is RUNNING THE RIGHT DISTANCE IN THE WRONG DIRECTION, going $8$ units right of $(5, 6)$ when a falling height calls for going left ✗; the choice $1$ is ASSUMING THE THREE POINTS ARE EVENLY SPACED ACROSS, repeating the $x$-step of $-4$ that carried $(9, 9)$ to $(5, 6)$, though the height falls by $6$ on the second stretch and only $3$ on the first ✗.)',
    },
    {
      q: 'The points $(0, 2)$, $(6, t)$, and $(8, 8)$ all lie on one straight line. What is $t$?',
      choices: ['$\\frac{13}{2}$', '$5$', '$10$', '$\\frac{7}{2}$'],
      answer: 0,
      solution:
        'Route one, use the two outer points, whose coordinates are both known. From $(0, 2)$ to $(8, 8)$ the rise is $6$ and the run is $8$, so the slope is $\\frac{6}{8} = \\frac{3}{4}$. Starting at $(0, 2)$ and running $6$ to the right lifts the height by $\\frac{3}{4} \\cdot 6 = \\frac{9}{2}$, so $t = 2 + \\frac{9}{2} = \\frac{13}{2}$ ✓. Check a second, independent way, never using that outer slope: the slope from $(0, 2)$ to $(6, t)$ is $\\frac{t - 2}{6}$ and the slope from $(6, t)$ to $(8, 8)$ is $\\frac{8 - t}{2}$. Setting them equal gives $2(t - 2) = 6(8 - t)$, so $2t - 4 = 48 - 6t$, then $8t = 52$ and $t = \\frac{13}{2}$ ✓. (The choice $5$ is TAKING THE MIDDLE POINT TO SIT HALFWAY UP, averaging $2$ and $8$, though $x = 6$ is three quarters of the way across, not halfway ✗; the choice $10$ is TURNING THE SLOPE UPSIDE DOWN, using $\\frac{8}{6} = \\frac{4}{3}$ to get $2 + \\frac{4}{3} \\cdot 6$ ✗; the choice $\\frac{7}{2}$ is SUBTRACTING THE RISE FROM THE LAST POINT INSTEAD OF ADDING IT TO THE FIRST, computing $8 - \\frac{9}{2}$ when the run of $6$ is measured from $x = 0$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 17,
  sections: { '17.3': s173 },
}
