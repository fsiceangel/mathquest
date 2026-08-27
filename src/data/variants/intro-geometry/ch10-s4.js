// Introduction to Geometry chapter 10 — variations for the CHALLENGE set.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every answer was worked twice by two genuinely different routes, and the
//    two routes had to agree before the key was written. The pairs used are:
//    computing the third angle vs. ranking all three sides by their partner
//    angles (slot 1); the two-case square comparison vs. auditing the
//    boundary integers directly (slots 2 and 3); halving the apex remainder
//    vs. the full side-angle matching table (slot 4); the extend-and-chain
//    proof vs. testing extreme positions of the interior point (slot 5);
//    intersecting the two triangle windows vs. checking the flat endpoints
//    of each triangle separately (slot 6); squaring the longest side vs.
//    scaling to an integer triangle (slot 7); solving the binding inequality
//    vs. testing the candidate and its predecessor by hand (slot 8); the
//    Pythagorean comparison vs. the right-triangle hypotenuse benchmark
//    (slot 9); shrinking the third side to its floor vs. verifying the flat
//    value below it (slot 10); the opposite-partner theorem vs. a concrete
//    numeric triangle (slot 11); intersecting the windows vs. auditing the
//    edge integers in both triples (slot 12).
//  - Enumerations are listed in full inside the solutions, and every
//    boundary exclusion (a right-triangle value, a flat value) is named.
//  - Every figure is coordinate-exact: each slot 6 quadrilateral was solved
//    from its four stated side lengths (vertices agree with the labels to
//    within 0.1%), is convex, and carries its diagonal as a dashed segment.
//  - Figure labels are plain text: bare numerals and the letters of points.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS.
//  - No two choices inside an item name the same value, and across the base
//    problem and its three variations every one of the four answer positions
//    is used exactly once.

const challenge = [
  // slot 1 — two angles given, find the longest side.
  // Lane: 57/62 -> AC / 64/55 -> BC / 49/63 -> AB.
  [
    {
      q: 'A surveyor pegs out triangle $ABC$ and measures $\\angle A = 57^\\circ$ and $\\angle B = 62^\\circ$ before packing up for the day. Which side of the plot is the longest?',
      choices: ['$\\overline{AC}$', '$\\overline{AB}$', '$\\overline{BC}$', 'all three sides are equal'],
      answer: 0,
      solution:
        'The unmeasured angle is $\\angle C = 180^\\circ - 57^\\circ - 62^\\circ = 61^\\circ$, so the largest angle is $\\angle B = 62^\\circ$, and the longest side is the one opposite it — the side not touching $B$, which is $\\overline{AC}$ ✓. Check a second, independent way by ranking every side by its partner angle: $\\angle A = 57^\\circ < \\angle C = 61^\\circ < \\angle B = 62^\\circ$, so $BC < AB < AC$, and $\\overline{AC}$ tops the list ✓ — a $1^\\circ$ margin decides it. (The choice $\\overline{AB}$ is ASSUMING THE COMPUTED THIRD ANGLE IS LARGEST — $\\overline{AB}$ faces $\\angle C = 61^\\circ$, the runner-up; the choice $\\overline{BC}$ is PICKING A SIDE THAT TOUCHES $B$ — opposite means not touching; the choice about equal sides is ROUNDING ALL THREE ANGLES TO $60^\\circ$.)',
    },
    {
      q: 'Two angles of triangle $ABC$ measure $\\angle A = 64^\\circ$ and $\\angle B = 55^\\circ$. Kaya claims she can name the longest side without measuring a single length. Which side should she name?',
      choices: ['$\\overline{AB}$', '$\\overline{BC}$', '$\\overline{AC}$', 'it cannot be determined without side lengths'],
      answer: 1,
      solution:
        'The third angle is $\\angle C = 180^\\circ - 64^\\circ - 55^\\circ = 61^\\circ$, so the largest angle is $\\angle A = 64^\\circ$ and the longest side is the one across from it: $\\overline{BC}$ ✓ — Kaya is right, angles alone settle it. Check a second, independent way by ordering everything: $\\angle B = 55^\\circ < \\angle C = 61^\\circ < \\angle A = 64^\\circ$ gives $AC < AB < BC$, and the top of the list is $\\overline{BC}$ ✓. (The choice $\\overline{AB}$ is ASSUMING THE MISSING ANGLE $\\angle C$ IS LARGEST; the choice $\\overline{AC}$ is PICKING THE SIDE OPPOSITE THE SMALLEST ANGLE, reading the ordering upside down; the last choice is DEMANDING LENGTHS THE ANGLES ALREADY DETERMINE.)',
    },
    {
      q: 'The corner braces of a triangular shelf $ABC$ meet at $\\angle A = 49^\\circ$ and $\\angle B = 63^\\circ$; the third corner is unmarked. Along which side should the carpenter cut the longest strip of edge banding?',
      choices: ['$\\overline{BC}$', '$\\overline{AC}$', 'all three sides are equal', '$\\overline{AB}$'],
      answer: 3,
      solution:
        'The unmarked corner measures $\\angle C = 180^\\circ - 49^\\circ - 63^\\circ = 68^\\circ$, the largest of the three, so the longest side faces it: $\\overline{AB}$ ✓. Check a second, independent way with the full ranking: $\\angle A = 49^\\circ < \\angle B = 63^\\circ < \\angle C = 68^\\circ$ flips to $BC < AC < AB$ ✓ — the unmarked corner wins, so the side avoiding it needs the longest strip. (The choice $\\overline{BC}$ is MATCHING THE FIRST-NAMED ANGLE to the longest side — it faces the smallest angle, $49^\\circ$; the choice $\\overline{AC}$ is ASSUMING A MARKED ANGLE MUST BEAT THE UNMARKED ONE; the equal-sides choice is ROUNDING ALL THREE ANGLES TO $60^\\circ$.)',
    },
  ],

  // slot 2 — count the integers n making the triangle acute.
  // Lane: 11, 13 -> {7..17} = 11 / 12, 13 -> {6..17} = 12 / 9, 11 -> {7..14} = 8.
  [
    {
      q: 'For how many integers $n$ does the triangle with sides $11$, $13$, and $n$ have three acute angles?',
      choices: ['$11$', '$7$', '$21$', '$13$'],
      answer: 0,
      solution:
        'Triangle inequality first: $2 < n < 24$. Case 1, $13$ is the longest side ($n \\le 13$): acute needs $169 < 121 + n^2$, so $n^2 > 48$, giving $n \\ge 7$ — the list is $n = 7, 8, 9, 10, 11, 12, 13$, seven values. Case 2, $n$ is the longest side ($n \\ge 14$): acute needs $n^2 < 121 + 169 = 290$; since $17^2 = 289 < 290 < 324 = 18^2$, the list is $n = 14, 15, 16, 17$, four values. Neither $48$ nor $290$ is a perfect square, so no right triangle sits on a boundary. Total: $7 + 4 = 11$, that is $n \\in \\{7, \\ldots, 17\\}$ ✓. Check a second, independent way at the edges: $n = 6$ gives $169 > 121 + 36 = 157$, obtuse; $n = 7$ gives $169 < 170$, acute ✓; $n = 17$ gives $289 < 290$, acute ✓; $n = 18$ gives $324 > 290$, obtuse ✓. (The choice $7$ is KEEPING ONLY THE SHORT-$n$ CASE; the choice $21$ is COUNTING EVERY LEGAL TRIANGLE, acute or not; the choice $13$ is ROUNDING THE SQUARE-ROOT BOUNDS OUTWARD to sweep in $n = 6$ and $n = 18$.)',
    },
    {
      q: 'The sides of a triangle are $12$, $13$, and $n$ for some integer $n$. For how many values of $n$ is the triangle acute?',
      choices: ['$8$', '$23$', '$12$', '$13$'],
      answer: 2,
      solution:
        'Triangle inequality: $1 < n < 25$. Case 1, $13$ is the longest side ($n \\le 13$): acute needs $169 < 144 + n^2$, so $n^2 > 25$, meaning $n \\ge 6$ — the list is $n = 6, 7, \\ldots, 13$, eight values. The boundary matters here: $n = 5$ gives $n^2 = 25$ exactly, the famous $5$-$12$-$13$ RIGHT triangle, so $5$ is excluded. Case 2, $n$ is the longest side ($n \\ge 14$): acute needs $n^2 < 144 + 169 = 313$; since $17^2 = 289 < 313 < 324 = 18^2$, the list is $n = 14, 15, 16, 17$, four values. Total: $8 + 4 = 12$, that is $n \\in \\{6, \\ldots, 17\\}$ ✓. Check a second, independent way at the edges: $n = 6$ gives $169 < 180$, acute ✓; $n = 17$ gives $289 < 313$, acute ✓; $n = 18$ gives $324 > 313$, obtuse ✓. (The choice $13$ is COUNTING $n = 5$, the right-triangle boundary; the choice $8$ is KEEPING ONLY THE SHORT-$n$ CASE; the choice $23$ is COUNTING EVERY LEGAL TRIANGLE from $2$ to $24$.)',
    },
    {
      q: 'A carpenter has two rods of lengths $9$ and $11$, plus a bin holding one rod of every integer length. How many rods in the bin could join the pair to build an acute triangle?',
      choices: ['$5$', '$17$', '$10$', '$8$'],
      answer: 3,
      solution:
        'Call the third rod $n$. Triangle inequality: $2 < n < 20$. Case 1, $11$ is the longest side ($n \\le 11$): acute needs $121 < 81 + n^2$, so $n^2 > 40$, meaning $n \\ge 7$ — the list is $n = 7, 8, 9, 10, 11$, five rods. Case 2, $n$ is the longest side ($n \\ge 12$): acute needs $n^2 < 81 + 121 = 202$; since $14^2 = 196 < 202 < 225 = 15^2$, the list is $n = 12, 13, 14$, three rods. Neither $40$ nor $202$ is a perfect square, so no right triangle hides on a boundary. Total: $5 + 3 = 8$, that is $n \\in \\{7, \\ldots, 14\\}$ ✓. Check a second, independent way at the edges: $n = 6$ gives $121 > 81 + 36 = 117$, obtuse; $n = 7$ gives $121 < 130$, acute ✓; $n = 14$ gives $196 < 202$, acute ✓; $n = 15$ gives $225 > 202$, obtuse ✓. (The choice $5$ is KEEPING ONLY THE SHORT-$n$ CASE; the choice $17$ is COUNTING EVERY LEGAL TRIANGLE from $3$ to $19$; the choice $10$ is ROUNDING THE SQUARE-ROOT BOUNDS OUTWARD to sweep in $n = 6$ and $n = 15$.)',
    },
  ],

  // slot 3 — count the integers x making the triangle obtuse (both cases).
  // Lane: 6, 10 -> {5,6,7} u {12..15} = 7 / 6, 11 -> {6..9} u {13..16} = 8 /
  // 9, 14 -> {6..10} u {17..22} = 11.
  [
    {
      q: 'For how many integers $x$ does the triangle with sides $6$, $10$, and $x$ have an obtuse angle?',
      choices: ['$8$', '$3$', '$11$', '$7$'],
      answer: 3,
      solution:
        'Triangle inequality: $4 < x < 16$, so $x = 5, \\ldots, 15$. Case 1, $10$ is the longest side ($x \\le 10$): obtuse needs $100 > 36 + x^2$, so $x^2 < 64$, giving the list $x = 5, 6, 7$. The boundary is the trap: $x = 8$ gives $64 = 64$ exactly, the $6$-$8$-$10$ RIGHT triangle, so $8$ is excluded. Case 2, $x$ is the longest side ($x \\ge 11$): obtuse needs $x^2 > 36 + 100 = 136$; since $11^2 = 121 < 136 < 144 = 12^2$, the list is $x = 12, 13, 14, 15$. Total: $3 + 4 = 7$, that is $x \\in \\{5, 6, 7\\} \\cup \\{12, 13, 14, 15\\}$ ✓. Check a second, independent way at the seams: $x = 9$ gives $100 < 117$, acute; $x = 11$ gives $121 < 136$, acute; $x = 12$ gives $144 > 136$, obtuse ✓ — the middle really is a dead zone. (The choice $8$ is COUNTING $x = 8$, the right-triangle boundary; the choice $3$ is KEEPING ONLY THE SHORT-$x$ CASE; the choice $11$ is COUNTING EVERY LEGAL TRIANGLE from $5$ to $15$.)',
    },
    {
      q: 'The triangle with sides $6$, $11$, and $x$ is obtuse, where $x$ is an integer. How many values can $x$ take?',
      choices: ['$8$', '$4$', '$11$', '$9$'],
      answer: 0,
      solution:
        'Triangle inequality: $5 < x < 17$, so $x = 6, \\ldots, 16$. Case 1, $11$ is the longest side ($x \\le 11$): obtuse needs $121 > 36 + x^2$, so $x^2 < 85$, giving the list $x = 6, 7, 8, 9$ (since $9^2 = 81 < 85 < 100 = 10^2$). Case 2, $x$ is the longest side ($x \\ge 12$): obtuse needs $x^2 > 36 + 121 = 157$; since $12^2 = 144 < 157 < 169 = 13^2$, the list is $x = 13, 14, 15, 16$. Neither $85$ nor $157$ is a perfect square, so no integer lands on a right-triangle boundary; the flat values $5$ and $17$ are excluded by the strict window. Total: $4 + 4 = 8$, that is $x \\in \\{6, 7, 8, 9\\} \\cup \\{13, 14, 15, 16\\}$ ✓. Check a second, independent way at the seams: $x = 10$ gives $121 < 136$, acute; $x = 12$ gives $144 < 157$, acute; $x = 13$ gives $169 > 157$, obtuse ✓. (The choice $4$ is KEEPING ONLY ONE CASE; the choice $11$ is COUNTING EVERY LEGAL TRIANGLE from $6$ to $16$; the choice $9$ is ROUNDING $\\sqrt{157}$ DOWN and sweeping $x = 12$ into the second list.)',
    },
    {
      q: 'How many integer values of $x$ make the triangle with sides $9$, $14$, and $x$ an obtuse triangle?',
      choices: ['$17$', '$11$', '$5$', '$13$'],
      answer: 1,
      solution:
        'Triangle inequality: $5 < x < 23$, so $x = 6, \\ldots, 22$. Case 1, $14$ is the longest side ($x \\le 14$): obtuse needs $196 > 81 + x^2$, so $x^2 < 115$, giving the list $x = 6, 7, 8, 9, 10$ (since $10^2 = 100 < 115 < 121 = 11^2$). Case 2, $x$ is the longest side ($x \\ge 15$): obtuse needs $x^2 > 81 + 196 = 277$; since $16^2 = 256 < 277 < 289 = 17^2$, the list is $x = 17, 18, 19, 20, 21, 22$. Neither $115$ nor $277$ is a perfect square, so no right triangle sits on a boundary; the flat values $5$ and $23$ are already shut out by the strict window. Total: $5 + 6 = 11$, that is $x \\in \\{6, \\ldots, 10\\} \\cup \\{17, \\ldots, 22\\}$ ✓. Check a second, independent way at the seams: $x = 11$ gives $196 < 202$, acute; $x = 15$ gives $225 < 277$, acute; $x = 16$ gives $256 < 277$, acute; $x = 17$ gives $289 > 277$, obtuse ✓. (The choice $5$ is KEEPING ONLY THE SHORT-$x$ CASE; the choice $17$ is COUNTING EVERY LEGAL TRIANGLE from $6$ to $22$; the choice $13$ is ROUNDING BOTH SQUARE-ROOT BOUNDS OUTWARD to sweep in $x = 11$ and $x = 16$.)',
    },
  ],

  // slot 4 — isosceles triangle, one base angle given, rank all three sides.
  // Lane: B = 70 -> apex 40, BC shortest / B = 50 -> apex 80, BC longest /
  // B = 62 -> apex 56, BC shortest.
  [
    {
      q: 'A triangular pennant $ABC$ is sewn with $AB = AC$, and the angle at corner $B$ measures $74^\\circ$. Which statement correctly ranks the pennant’s three edges?',
      choices: ['$AB = AC < BC$', '$BC < AB = AC$', '$BC = AB = AC$', '$AC < BC < AB$'],
      answer: 1,
      solution:
        'Equal sides give equal base angles, so $\\angle C = \\angle B = 74^\\circ$ and the apex is $\\angle A = 180^\\circ - 148^\\circ = 32^\\circ$. The edge $\\overline{BC}$ faces the smallest angle, $32^\\circ$, while $\\overline{AB}$ and $\\overline{AC}$ each face a $74^\\circ$ angle, so $BC < AB = AC$ ✓. Check a second, independent way with the full matching table: $\\overline{BC} \\leftrightarrow \\angle A = 32^\\circ$, $\\overline{AC} \\leftrightarrow \\angle B = 74^\\circ$, $\\overline{AB} \\leftrightarrow \\angle C = 74^\\circ$, and the re-added angles $32 + 74 + 74 = 180$ ✓ confirm the ordering $BC < AC = AB$ ✓. (The choice $AB = AC < BC$ is PUTTING THE BASE OPPOSITE THE BASE ANGLES — $\\overline{BC}$ faces the apex, not a $74^\\circ$ angle; the all-equal choice is TREATING EVERY ISOSCELES TRIANGLE AS EQUILATERAL, which needs all angles at $60^\\circ$; the strict chain $AC < BC < AB$ is FORGETTING THE GIVEN $AB = AC$, which forbids any strict ordering of those two.)',
    },
    {
      q: 'In triangle $ABC$ the sides $AB$ and $AC$ are equal, and $\\angle B = 50^\\circ$. Which comparison of all three sides is correct?',
      choices: ['$BC < AB = AC$', '$BC = AB = AC$', '$AB = AC < BC$', '$AB < BC < AC$'],
      answer: 2,
      solution:
        'The base angles match: $\\angle C = \\angle B = 50^\\circ$, so the apex is $\\angle A = 180^\\circ - 100^\\circ = 80^\\circ$ — this time the apex is the LARGEST angle. The side facing it is $\\overline{BC}$, so $AB = AC < BC$ ✓. Check a second, independent way with the matching table: $\\overline{BC} \\leftrightarrow \\angle A = 80^\\circ$, $\\overline{AC} \\leftrightarrow \\angle B = 50^\\circ$, $\\overline{AB} \\leftrightarrow \\angle C = 50^\\circ$, and $80 + 50 + 50 = 180$ ✓ — the lone big angle pushes its opposite side out longest ✓. (The choice $BC < AB = AC$ is ASSUMING THE BASE IS ALWAYS SHORTEST — that held for a $74^\\circ$ base angle, but a small base angle flips it; the all-equal choice is TREATING ISOSCELES AS EQUILATERAL; the strict chain $AB < BC < AC$ is FORGETTING THE GIVEN $AB = AC$.)',
    },
    {
      q: 'Triangle $ABC$ is isosceles with $AB = AC$, and its base angle at $B$ measures $62^\\circ$. Rank the three sides from the information given.',
      choices: ['$AB = AC < BC$', '$AB = BC < AC$', '$BC = AB = AC$', '$BC < AB = AC$'],
      answer: 3,
      solution:
        'Since $AB = AC$, the base angles agree: $\\angle C = \\angle B = 62^\\circ$, leaving the apex $\\angle A = 180^\\circ - 124^\\circ = 56^\\circ$. The base $\\overline{BC}$ faces that smallest angle, so $BC < AB = AC$ ✓ — a slim $6^\\circ$ gap still decides it. Check a second, independent way with the matching table: $\\overline{BC} \\leftrightarrow \\angle A = 56^\\circ$, $\\overline{AC} \\leftrightarrow \\angle B = 62^\\circ$, $\\overline{AB} \\leftrightarrow \\angle C = 62^\\circ$, and re-adding $56 + 62 + 62 = 180$ ✓ locks in $BC < AC = AB$ ✓. (The choice $AB = AC < BC$ is PUTTING THE APEX ANGLE ON TOP without computing it — $56^\\circ$ loses to $62^\\circ$; the choice $AB = BC < AC$ is PAIRING THE WRONG TWO SIDES, breaking the given $AB = AC$; the all-equal choice is TREATING ISOSCELES AS EQUILATERAL, which would need $60^\\circ$ everywhere.)',
    },
  ],

  // slot 5 — interior point beats no fence: interior sums stay below the two
  // enclosing sides. Lane: T in DEF / W in XYZ / M in JKL, answer < each time.
  [
    {
      q: 'A ranger station $T$ stands strictly inside the triangular park $DEF$. Straight trails run from the station to the two entrances at $E$ and at $F$. How do the trail lengths compare with the two park edges that meet at $D$?',
      choices: ['$TE + TF < DE + DF$', '$TE + TF = DE + DF$', '$TE + TF > DE + DF$', 'any of these can happen, depending on where $T$ sits'],
      answer: 0,
      solution:
        'Extend $\\overline{ET}$ past $T$ until it meets side $\\overline{DF}$ at a point $X$. Triangle inequality twice: in triangle $TXF$, $TF < TX + XF$, so $TE + TF < ET + TX + XF = EX + XF$; and in triangle $DEX$, $EX < DE + DX$, so $EX + XF < DE + DX + XF = DE + DF$. Chaining: $TE + TF < DE + DF$ ✓, for every interior station. Check a second, independent way by pushing $T$ to the extremes: slide $T$ toward $D$ and $TE + TF$ climbs toward $DE + DF$ without reaching it; slide $T$ toward edge $\\overline{EF}$ and the sum falls toward $EF$, which the triangle inequality keeps below $DE + DF$ — every position stays strictly under the bound ✓. (The choice $=$ is TREATING THE UNREACHABLE BOUND AS ATTAINABLE — equality would need $T$ to sit at $D$ itself, not inside; the choice $>$ is BELIEVING AN INSIDE DETOUR CAN BEAT THE FENCE around it; the last choice is MISTAKING A UNIVERSAL INEQUALITY FOR A CASE-BY-CASE ONE.)',
    },
    {
      q: 'A drone hub $W$ is planted strictly inside a triangular delivery zone $XYZ$. Which comparison between the hub’s straight-line distances to $Y$ and $Z$ and the zone’s two sides through $X$ is always correct?',
      choices: ['$WY + WZ > XY + XZ$', '$WY + WZ = XY + XZ$', 'any of these can happen, depending on where $W$ sits', '$WY + WZ < XY + XZ$'],
      answer: 3,
      solution:
        'Extend $\\overline{YW}$ until it crosses side $\\overline{XZ}$ at a point $S$. In triangle $WSZ$, $WZ < WS + SZ$, so $WY + WZ < YW + WS + SZ = YS + SZ$; and in triangle $XYS$, $YS < XY + XS$, so $YS + SZ < XY + XS + SZ = XY + XZ$. The chain gives $WY + WZ < XY + XZ$ ✓ no matter where the hub sits. Check a second, independent way with extreme positions: a hub creeping up to the corner $X$ pushes the sum arbitrarily close to $XY + XZ$ from below, and a hub creeping toward side $\\overline{YZ}$ pulls it down toward $YZ$, which is itself less than $XY + XZ$ — strictly below in every case ✓. (The choice $>$ is BELIEVING AN INTERIOR DETOUR CAN BEAT THE TWO SIDES THAT FENCE IT IN; the choice $=$ is TREATING THE UNREACHABLE BOUND AS ATTAINABLE; the case-by-case choice is MISTAKING A UNIVERSAL INEQUALITY FOR A LOCATION-DEPENDENT ONE.)',
    },
    {
      q: 'A fountain $M$ is built strictly inside the triangular plaza $JKL$, and straight walkways connect it to the corners $K$ and $L$. A visitor claims the two walkways together outmeasure the two plaza sides meeting at $J$. What is the truth?',
      choices: ['$MK + ML = JK + JL$ always', '$MK + ML < JK + JL$ always — the visitor is wrong', '$MK + ML > JK + JL$ always — the visitor is right', 'the comparison depends on where $M$ sits'],
      answer: 1,
      solution:
        'The visitor is wrong: $MK + ML < JK + JL$ for every interior fountain. Extend $\\overline{KM}$ until it meets side $\\overline{JL}$ at a point $N$. In triangle $MNL$, $ML < MN + NL$, so $MK + ML < KM + MN + NL = KN + NL$; and in triangle $JKN$, $KN < JK + JN$, so $KN + NL < JK + JN + NL = JK + JL$ ✓. Check a second, independent way with extreme positions: a fountain sliding toward $J$ sends $MK + ML$ up toward $JK + JL$ without touching it, and one sliding toward side $\\overline{KL}$ sends the sum down toward $KL$, which the triangle inequality holds below $JK + JL$ — the walkways never win ✓. (The choice $=$ is TREATING THE UNREACHABLE BOUND AS ATTAINABLE — it would need the fountain at the corner $J$; the choice $>$ is BELIEVING THE INSIDE DETOUR BEATS ITS FENCE; the last choice is MISTAKING A UNIVERSAL INEQUALITY FOR A CASE-BY-CASE ONE.)',
    },
  ],

  // slot 6 — quadrilateral with four sides given, count the integer diagonals
  // (figure). Lane: 7,8,15,10 -> 5 < AC < 15 -> 9 / 2,6,5,7 -> 4 < AC < 8 -> 3 /
  // 6,9,11,7 -> 4 < AC < 15 -> 10. Every quadrilateral is solved from its own
  // side lengths and drawn convex, with the diagonal dashed.
  [
    {
      q: 'Quadrilateral $ABCD$ has $AB = 7$, $BC = 8$, $CD = 15$, and $DA = 10$. How many integer values can the length of the diagonal $\\overline{AC}$ take?',
      fig: {
        view: [-10.4, -1, 8.7, 9.6],
        alt: 'Quadrilateral ABCD with sides 7, 8, 15, 10 and dashed diagonal AC labeled d',
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [6.0714, 7.9459], [-8.6425, 5.0306]], fill: false },
          { t: 'seg', a: [0, 0], b: [6.0714, 7.9459], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -4, dy: 12 },
          { t: 'point', p: [7, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [6.0714, 7.9459], label: 'C', dx: 12, dy: -4 },
          { t: 'point', p: [-8.6425, 5.0306], label: 'D', dx: -10, dy: -8 },
          { t: 'label', p: [3.5, 0], text: '7', dx: 0, dy: 14 },
          { t: 'label', p: [6.54, 3.97], text: '8', dx: 14, dy: 0 },
          { t: 'label', p: [-1.29, 6.49], text: '15', dx: 0, dy: -12 },
          { t: 'label', p: [-4.32, 2.52], text: '10', dx: -8, dy: 10 },
          { t: 'label', p: [3.04, 3.97], text: 'd', dx: -10, dy: 4 },
        ],
      },
      choices: ['$13$', '$11$', '$9$', '$19$'],
      answer: 2,
      solution:
        'The diagonal $\\overline{AC}$ lives in two triangles at once. In triangle $ABC$ with sides $7$ and $8$: $1 < AC < 15$. In triangle $ACD$ with sides $15$ and $10$: $5 < AC < 25$. Both windows must hold, so intersect them: $5 < AC < 15$, giving the integers $6, 7, 8, 9, 10, 11, 12, 13, 14$ — nine values ✓. Check a second, independent way at the flat endpoints: $AC = 5$ collapses triangle $ACD$ flat, since $5 + 10 = 15$; $AC = 15$ collapses triangle $ABC$ flat, since $7 + 8 = 15$; while a middle value such as $AC = 10$ passes both checks, $7 + 8 > 10$ ✓ and $10 + 10 > 15$ ✓. (The choice $13$ is USING ONLY TRIANGLE $ABC$, counting $2$ through $14$; the choice $19$ is USING ONLY TRIANGLE $ACD$, counting $6$ through $24$; the choice $11$ is KEEPING THE FLAT ENDPOINTS $5$ and $15$.)',
    },
    {
      q: 'The four fence rails of quadrilateral $ABCD$ measure $AB = 2$, $BC = 6$, $CD = 5$, and $DA = 7$, and a straight brace is to run along the diagonal $\\overline{AC}$. If the brace must have an integer length, how many lengths are possible?',
      fig: {
        view: [-5.4, -1, 3.4, 7],
        alt: 'Quadrilateral ABCD with sides 2, 6, 5, 7 and dashed diagonal AC labeled d',
        elems: [
          { t: 'poly', pts: [[0, 0], [2, 0], [1, 5.92], [-4, 5.75]], fill: false },
          { t: 'seg', a: [0, 0], b: [1, 5.92], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [2, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [1, 5.92], label: 'C', dx: 12, dy: -4 },
          { t: 'point', p: [-4, 5.75], label: 'D', dx: -8, dy: -8 },
          { t: 'label', p: [1, 0], text: '2', dx: 0, dy: 14 },
          { t: 'label', p: [1.5, 2.96], text: '6', dx: 14, dy: 0 },
          { t: 'label', p: [-1.5, 5.84], text: '5', dx: 0, dy: -10 },
          { t: 'label', p: [-2, 2.88], text: '7', dx: -12, dy: 0 },
          { t: 'label', p: [0.5, 2.96], text: 'd', dx: -10, dy: 4 },
        ],
      },
      choices: ['$3$', '$9$', '$5$', '$12$'],
      answer: 0,
      solution:
        'The brace $\\overline{AC}$ is a side of triangle $ABC$ (with $2$ and $6$) and of triangle $ACD$ (with $5$ and $7$). Triangle $ABC$ demands $4 < AC < 8$; triangle $ACD$ demands $2 < AC < 12$. Intersecting, $4 < AC < 8$, so the integer lengths are $5, 6, 7$ — three braces ✓. Check a second, independent way at the flat endpoints: $AC = 4$ lies flat in triangle $ABC$, since $2 + 4 = 6$; $AC = 8$ lies flat there too, since $2 + 6 = 8$; and the survivor $AC = 6$ passes both triangles, $2 + 6 > 6$ ✓ and $5 + 6 > 7$ with $5 + 7 > 6$ ✓. (The choice $9$ is USING ONLY TRIANGLE $ACD$, counting $3$ through $11$; the choice $5$ is KEEPING THE FLAT ENDPOINTS $4$ and $8$; the choice $12$ is ADDING THE TWO WINDOWS’ COUNTS instead of intersecting the windows.)',
    },
    {
      q: 'In quadrilateral $ABCD$ shown, $AB = 6$, $BC = 9$, $CD = 11$, and $DA = 7$. The diagonal $\\overline{AC}$ turns out to have integer length. How many different lengths could it be?',
      fig: {
        view: [-8.1, -1, 7.6, 10.2],
        alt: 'Quadrilateral ABCD with sides 6, 9, 11, 7 and dashed diagonal AC labeled d',
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [3, 8.4853], [-6.4161, 2.7988]], fill: false },
          { t: 'seg', a: [0, 0], b: [3, 8.4853], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -2, dy: 12 },
          { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [3, 8.4853], label: 'C', dx: 10, dy: -6 },
          { t: 'point', p: [-6.4161, 2.7988], label: 'D', dx: -10, dy: -6 },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [4.5, 4.24], text: '9', dx: 14, dy: 0 },
          { t: 'label', p: [-1.71, 5.64], text: '11', dx: -4, dy: -12 },
          { t: 'label', p: [-3.21, 1.4], text: '7', dx: -6, dy: 12 },
          { t: 'label', p: [1.5, 4.24], text: 'd', dx: -10, dy: 4 },
        ],
      },
      choices: ['$11$', '$13$', '$12$', '$10$'],
      answer: 3,
      solution:
        'Split along the diagonal: triangle $ABC$ has sides $6$ and $9$, so $3 < AC < 15$; triangle $ACD$ has sides $11$ and $7$, so $4 < AC < 18$. Both must hold, and the intersection is $4 < AC < 15$: the integers $5, 6, 7, 8, 9, 10, 11, 12, 13, 14$ — ten values ✓. Check a second, independent way at the flat endpoints: $AC = 4$ lies flat in triangle $ACD$, since $4 + 7 = 11$; $AC = 15$ lies flat in triangle $ABC$, since $6 + 9 = 15$; and a middle value such as $AC = 9$ clears every check, $6 + 9 > 9$ ✓, $7 + 9 > 11$ ✓ — each triangle donates one wall of the final window. (The choice $11$ is USING ONLY TRIANGLE $ABC$, counting $4$ through $14$; the choice $13$ is USING ONLY TRIANGLE $ACD$, counting $5$ through $17$; the choice $12$ is KEEPING THE FLAT ENDPOINTS $4$ and $15$.)',
    },
  ],

  // slot 7 — classify a triangle with decimal sides.
  // Lane: 4.5, 6, 7.5 -> right / 3.5, 4.5, 6 -> obtuse / 5.5, 6, 7 -> acute.
  [
    {
      q: 'Classify the triangle whose sides measure $4.5$, $6$, and $7.5$.',
      choices: ['acute', 'right', 'obtuse', 'the sides do not form a triangle'],
      answer: 1,
      solution:
        'Test the longest side: $7.5^2 = 56.25$ and $4.5^2 + 6^2 = 20.25 + 36 = 56.25$. Exactly equal, so the angle opposite the $7.5$ is exactly $90^\\circ$ — a right triangle ✓. Check a second, independent way by scaling: doubling every side gives $9$-$12$-$15$, which is the $3$-$4$-$5$ right triangle scaled by $3$, and scaling never changes a triangle’s angles ✓. (The choice ACUTE is TESTING A SHORTER SIDE — $6^2 = 36 < 4.5^2 + 7.5^2 = 76.5$ is guaranteed to look acute and proves nothing; the choice OBTUSE is MISSQUARING THE DECIMAL, as $4.5^2 = 16.25$ would give $52.25 < 56.25$; the last choice is MISTRUSTING DECIMAL SIDES — the check $4.5 + 6 = 10.5 > 7.5$ passes comfortably.)',
    },
    {
      q: 'Is the triangle with side lengths $3.5$, $4.5$, and $6$ acute, right, or obtuse?',
      choices: ['obtuse', 'acute', 'right', 'the sides do not form a triangle'],
      answer: 0,
      solution:
        'The longest side is $6$: compare $6^2 = 36$ with $3.5^2 + 4.5^2 = 12.25 + 20.25 = 32.5$. Since $36 > 32.5$, the angle opposite the $6$ passes $90^\\circ$ — obtuse ✓. Check a second, independent way by doubling to whole numbers: the sides $7$, $9$, $12$ give $12^2 = 144 > 7^2 + 9^2 = 130$, obtuse again ✓, and scaling preserves every angle. (The choice ACUTE is TESTING A SHORTER SIDE — $4.5^2 = 20.25 < 12.25 + 36$ always comes out acute; the choice RIGHT is ASSUMING HALF-INTEGER SIDES MUST HIDE A SCALED PYTHAGOREAN TRIPLE, but $7$-$9$-$12$ is no triple; the last choice is BOTCHING THE FLAT CHECK — $3.5 + 4.5 = 8 > 6$, so the triangle closes just fine.)',
    },
    {
      q: 'A triangle has side lengths $5.5$, $6$, and $7$. What kind of triangle is it?',
      choices: ['obtuse', 'right', 'the sides do not form a triangle', 'acute'],
      answer: 3,
      solution:
        'Test the longest side, $7$: $7^2 = 49$ and $5.5^2 + 6^2 = 30.25 + 36 = 66.25$. Since $49 < 66.25$, the largest angle is acute, and then all three are — the triangle is acute ✓. Check a second, independent way with the hypotenuse benchmark: a RIGHT triangle with legs $5.5$ and $6$ would need a hypotenuse of $\\sqrt{66.25} \\approx 8.14$, and our longest side $7$ falls well short of that, so the top angle stays under $90^\\circ$ ✓. (The choice OBTUSE is REVERSING THE COMPARISON RULE, reading $49 < 66.25$ backwards; the choice RIGHT is EXPECTING THE BOUNDARY AT $7$ WITHOUT COMPUTING — the boundary sits at $8.14$, not $7$; the remaining choice is DEMANDING WHOLE-NUMBER SIDES, but $5.5 + 6 = 11.5 > 7$ closes the triangle easily.)',
    },
  ],

  // slot 8 — smallest integer n making three related lengths a triangle.
  // Lane: n, n+5, n+14 -> 10 / n, n+6, n+12 -> 7 / n, n+6, n+13 -> 8.
  [
    {
      q: 'Rods of lengths $n$, $n + 5$, and $n + 14$ are hinged end to end. What is the smallest integer $n$ for which they swing into a genuine triangle?',
      choices: ['$9$', '$1$', '$10$', '$11$'],
      answer: 2,
      solution:
        'Only one inequality binds — the two shortest rods against the longest: $n + (n + 5) > n + 14$, which simplifies to $n > 9$. The smallest integer beyond $9$ is $n = 10$, giving the honest triangle $10$, $15$, $24$ ✓. Check a second, independent way by testing the fence posts: at $n = 9$ the rods are $9$, $14$, $23$ and $9 + 14 = 23$ lies FLAT — a degenerate line, not a triangle; at $n = 10$, $10 + 15 = 25 > 24$ ✓ swings open. (The choice $9$ is ACCEPTING THE FLAT CASE, where the sum merely equals the long rod; the choice $1$ is CHECKING THE WRONG PAIR — $(n+5) + (n+14) > n$ holds for every positive $n$ and filters nothing; the choice $11$ is OVERSHOOTING BY ONE, as if the strict inequality banned $n = 10$ as well.)',
    },
    {
      q: 'Find the smallest integer $n$ such that $n$, $n + 6$, and $n + 12$ can be the side lengths of a triangle.',
      choices: ['$6$', '$1$', '$8$', '$7$'],
      answer: 3,
      solution:
        'The binding check pits the two shortest sides against the longest: $n + (n + 6) > n + 12$ simplifies to $n > 6$, so the smallest integer is $n = 7$, giving the triangle $7$, $13$, $19$ ✓. Check a second, independent way at the boundary: $n = 6$ produces $6$, $12$, $18$, and $6 + 12 = 18$ lies FLAT along the long side — zero area, excluded; $n = 7$ gives $7 + 13 = 20 > 19$ ✓, a real triangle. (The choice $6$ is ACCEPTING THE FLAT CASE; the choice $1$ is CHECKING THE WRONG PAIR, since the two longest sides beat the shortest for every positive $n$; the choice $8$ is OVERSHOOTING BY ONE past the first legal integer.)',
    },
    {
      q: 'For which smallest integer $n$ do sticks of lengths $n$, $n + 6$, and $n + 13$ close up into a triangle?',
      choices: ['$8$', '$7$', '$1$', '$9$'],
      answer: 0,
      solution:
        'The two shorter sticks must beat the longest: $n + (n + 6) > n + 13$ simplifies to $n > 7$, so the smallest integer is $n = 8$, and the sticks $8$, $14$, $21$ close up ✓ since $8 + 14 = 22 > 21$. Check a second, independent way at the boundary: $n = 7$ gives $7$, $13$, $20$, and $7 + 13 = 20$ exactly — the sticks lie FLAT along the longest one and enclose nothing, so $7$ fails; $n = 8$ is the first success ✓. (The choice $7$ is ACCEPTING THE FLAT CASE; the choice $1$ is CHECKING THE WRONG PAIR — the two longest sticks always beat the shortest; the choice $9$ is OVERSHOOTING BY ONE, banning the legal $n = 8$.)',
    },
  ],

  // slot 9 — classify AND locate the largest angle (compound statement).
  // Lane: 6,7,8 -> acute at Q / 9,6,8 -> acute at R / 7,9,6 -> acute at P.
  [
    {
      q: 'Triangle $PQR$ has $PQ = 6$, $QR = 7$, and $PR = 8$. Which statement is true?',
      choices: [
        'The triangle is acute, and its largest angle is at $P$',
        'The triangle is acute, and its largest angle is at $Q$',
        'The triangle is right, with the right angle at $Q$',
        'The triangle is obtuse, with the obtuse angle at $Q$',
      ],
      answer: 1,
      solution:
        'Classify with the longest side, $PR = 8$: compare $64$ with $6^2 + 7^2 = 85$. Since $64 < 85$, the largest angle is acute, so all three are — the triangle is acute. That largest angle faces $\\overline{PR}$, and the vertex not on $\\overline{PR}$ is $Q$ ✓. Check a second, independent way with the hypotenuse benchmark: legs $6$ and $7$ would need a hypotenuse of $\\sqrt{85} \\approx 9.22$ to make a right angle at $Q$, and $8$ falls short, so $\\angle Q$ stays under $90^\\circ$ ✓ while still topping the other two. (The choice naming $P$ is MATCHING THE LONGEST SIDE TO A VERTEX IT TOUCHES — $P$ sits on $\\overline{PR}$; the RIGHT choice is ASSUMING NEAR-CONSECUTIVE SIDES SIT ON THE BOUNDARY, but $64 \\ne 85$; the OBTUSE choice is REVERSING THE COMPARISON $64 < 85$.)',
    },
    {
      q: 'In triangle $PQR$, $PQ = 9$, $QR = 6$, and $PR = 8$. Which statement is true?',
      choices: [
        'The triangle is obtuse, with the obtuse angle at $R$',
        'The triangle is acute, and its largest angle is at $Q$',
        'The triangle is acute, and its largest angle is at $R$',
        'The triangle is right, with the right angle at $R$',
      ],
      answer: 2,
      solution:
        'The longest side is $PQ = 9$: compare $81$ with $6^2 + 8^2 = 100$. Since $81 < 100$, the triangle is acute. The largest angle faces $\\overline{PQ}$, and the vertex not on $\\overline{PQ}$ is $R$ — acute, largest angle at $R$ ✓. Check a second, independent way with the benchmark: a right angle at $R$ would demand $PQ = \\sqrt{6^2 + 8^2} = 10$ (the $6$-$8$-$10$ triangle), and our $PQ = 9$ is shorter, so $\\angle R$ stays acute ✓ yet remains the largest, since it faces the longest side. (The OBTUSE choice is REVERSING THE COMPARISON $81 < 100$; the choice naming $Q$ is PICKING A VERTEX ON THE LONGEST SIDE — $Q$ lies on $\\overline{PQ}$; the RIGHT choice is ROUNDING $9$ UP TO THE $6$-$8$-$10$ BOUNDARY that the sides never reach.)',
    },
    {
      q: 'Triangle $PQR$ has $PQ = 7$, $QR = 9$, and $PR = 6$. Which statement is true?',
      choices: [
        'The triangle is right, with the right angle at $P$',
        'The triangle is obtuse, with the obtuse angle at $P$',
        'The triangle is acute, and its largest angle is at $R$',
        'The triangle is acute, and its largest angle is at $P$',
      ],
      answer: 3,
      solution:
        'The longest side is $QR = 9$: compare $81$ with $7^2 + 6^2 = 85$. Since $81 < 85$ — barely — the largest angle is acute, so the whole triangle is acute. That angle faces $\\overline{QR}$, and the vertex not on $\\overline{QR}$ is $P$ ✓. Check a second, independent way with the benchmark: a right angle at $P$ would need $QR = \\sqrt{85} \\approx 9.22$, and $9$ falls just under it, so $\\angle P$ slips in below $90^\\circ$ ✓ while still beating the other two angles. (The RIGHT choice is ROUNDING $85$ DOWN TO $81$ — close is not equal; the OBTUSE choice is REVERSING THE COMPARISON $81 < 85$; the choice naming $R$ is PICKING A VERTEX ON THE LONGEST SIDE, since $R$ lies on $\\overline{QR}$.)',
    },
  ],

  // slot 10 — two integer sides given, smallest possible integer perimeter.
  // Lane: 5, 11 -> third 7 -> 23 / 6, 13 -> third 8 -> 27 / 7, 15 -> third 9 -> 31.
  [
    {
      q: 'Two sides of a triangle with integer side lengths measure $5$ and $11$. What is the smallest the perimeter can be?',
      choices: ['$23$', '$22$', '$24$', '$17$'],
      answer: 0,
      solution:
        'The third side $c$ obeys $11 - 5 < c < 11 + 5$, so $6 < c < 16$, and the smallest integer allowed is $c = 7$. Perimeter: $5 + 11 + 7 = 23$ ✓. Check a second, independent way by auditing the floor: $c = 6$ fails because $5 + 6 = 11$ lies FLAT along the long side — a degenerate figure, not a triangle — while $c = 7$ passes, $5 + 7 = 12 > 11$ ✓, so no smaller perimeter exists. (The choice $22$ is ACCEPTING THE FLAT THIRD SIDE $c = 6$; the choice $24$ is OVERSHOOTING TO $c = 8$, one past the first legal integer; the choice $17$ is BOLTING ON A THIRD SIDE OF $1$ with no triangle check at all.)',
    },
    {
      q: 'A triangle has integer side lengths, and two of its sides measure $6$ and $13$. Find the smallest possible perimeter.',
      choices: ['$26$', '$27$', '$28$', '$20$'],
      answer: 1,
      solution:
        'The third side $c$ satisfies $13 - 6 < c < 13 + 6$, so $7 < c < 19$, and the smallest legal integer is $c = 8$. Perimeter: $6 + 13 + 8 = 27$ ✓. Check a second, independent way at the boundary: $c = 7$ gives $6 + 7 = 13$, a FLAT figure hugging the longest side, so it is excluded; $c = 8$ gives $6 + 8 = 14 > 13$ ✓, the first honest triangle. (The choice $26$ is ACCEPTING THE FLAT THIRD SIDE $c = 7$; the choice $28$ is OVERSHOOTING TO $c = 9$; the choice $20$ is BOLTING ON A THIRD SIDE OF $1$ and skipping the triangle inequality.)',
    },
    {
      q: 'The sides of a triangle are all integers, and two of them are $7$ and $15$. What is the least value its perimeter could have?',
      choices: ['$30$', '$23$', '$31$', '$32$'],
      answer: 2,
      solution:
        'The third side $c$ must satisfy $15 - 7 < c < 15 + 7$, so $8 < c < 22$, making $c = 9$ the smallest choice. Least perimeter: $7 + 15 + 9 = 31$ ✓. Check a second, independent way at the floor: $c = 8$ collapses FLAT, since $7 + 8 = 15$ exactly matches the longest side; $c = 9$ stands up, $7 + 9 = 16 > 15$ ✓, so $31$ cannot be beaten. (The choice $30$ is ACCEPTING THE FLAT THIRD SIDE $c = 8$; the choice $32$ is OVERSHOOTING TO $c = 10$; the choice $23$ is BOLTING ON A THIRD SIDE OF $1$, which fails the inequality badly.)',
    },
  ],

  // slot 11 — one side inequality given, deduce the angle inequality.
  // Lane: XY > YZ -> Z > X / PQ > QR -> R > P / DE > EF -> F > D.
  [
    {
      q: 'In triangle $XYZ$, all that is known is $XY > YZ$. Which of the following MUST be true?',
      choices: ['$\\angle X > \\angle Z$', '$\\angle Y$ is the largest angle of the triangle', '$\\angle Z > \\angle X$', '$\\overline{XZ}$ is the shortest side'],
      answer: 2,
      solution:
        'Compare the two named sides through their opposite angles: $\\overline{XY}$ faces $\\angle Z$ and $\\overline{YZ}$ faces $\\angle X$. A longer side faces a bigger angle, so $XY > YZ$ forces $\\angle Z > \\angle X$ ✓. Check a second, independent way with a concrete triangle: sides $XY = 6$, $YZ = 4$, $XZ = 5$ satisfy the given, and the angle order follows the side order $YZ < XZ < XY$, so $\\angle X < \\angle Y < \\angle Z$ — indeed $\\angle Z > \\angle X$ ✓, while in that same triangle $\\angle Y$ is NOT the largest and $\\overline{XZ}$ is NOT the shortest, killing both pretenders. (The choice $\\angle X > \\angle Z$ is MATCHING EACH SIDE TO A VERTEX IT TOUCHES instead of the opposite one; the $\\angle Y$ choice and the $\\overline{XZ}$ choice are both CLAIMING FACTS ABOUT THE UNMENTIONED SIDE, which the given inequality leaves completely free.)',
    },
    {
      q: 'A triangle $PQR$ satisfies $PQ > QR$, and nothing else about it is known. Which conclusion is forced?',
      choices: ['$\\angle R > \\angle P$', '$\\angle P > \\angle R$', '$\\angle Q$ is the smallest angle of the triangle', '$\\overline{PR}$ is the longest side'],
      answer: 0,
      solution:
        'Swap each side for its opposite angle: $\\overline{PQ}$ faces $\\angle R$ and $\\overline{QR}$ faces $\\angle P$, so $PQ > QR$ forces $\\angle R > \\angle P$ ✓ — bigger side, bigger opposite partner. Check a second, independent way with a concrete triangle: $PQ = 7$, $QR = 5$, $PR = 6$ fits the given; the side order $QR < PR < PQ$ flips to $\\angle P < \\angle Q < \\angle R$, confirming $\\angle R > \\angle P$ ✓ — and in this example $\\angle Q$ is the MIDDLE angle and $\\overline{PR}$ the MIDDLE side, so neither of those claims is forced. (The choice $\\angle P > \\angle R$ is MATCHING EACH SIDE TO A VERTEX IT TOUCHES; the $\\angle Q$ choice and the $\\overline{PR}$ choice are CLAIMING FACTS ABOUT THE UNMENTIONED SIDE, which could be longest, shortest, or in between.)',
    },
    {
      q: 'About triangle $DEF$ we are told only that $DE > EF$. Which statement is guaranteed?',
      choices: ['$\\angle D > \\angle F$', '$\\angle F > \\angle D$', '$\\overline{DF}$ is the shortest side', '$\\angle E$ is the largest angle of the triangle'],
      answer: 1,
      solution:
        'Match opposites: $\\overline{DE}$ faces $\\angle F$ and $\\overline{EF}$ faces $\\angle D$, so $DE > EF$ forces $\\angle F > \\angle D$ ✓ — the ordering of two sides transfers straight to their partner angles. Check a second, independent way with a concrete triangle: $DE = 8$, $EF = 5$, $DF = 7$ satisfies the given; ordering sides $EF < DF < DE$ and flipping gives $\\angle D < \\angle E < \\angle F$, so $\\angle F > \\angle D$ ✓ — yet here $\\overline{DF}$ is the MIDDLE side and $\\angle E$ the MIDDLE angle, so the other claims can fail. (The choice $\\angle D > \\angle F$ is MATCHING EACH SIDE TO A VERTEX IT TOUCHES rather than the vertex across; the $\\overline{DF}$ choice and the $\\angle E$ choice are CLAIMING FACTS ABOUT THE UNMENTIONED SIDE, which the single given inequality never pins down.)',
    },
  ],

  // slot 12 — one integer x must serve two triples at once.
  // Lane: (4,9,x) & (6,10,x) -> {6..12} = 7 / (4,10,x) & (5,12,x) -> {8..13} = 6 /
  // (2,9,x) & (6,12,x) -> {8,9,10} = 3.
  [
    {
      q: 'A single integer $x$ must serve as the third side of TWO different triangles: one with sides $4$ and $9$, the other with sides $6$ and $10$. How many values of $x$ work?',
      choices: ['$7$', '$11$', '$9$', '$18$'],
      answer: 0,
      solution:
        'Each pair opens a window for $x$. From $4$ and $9$: $5 < x < 13$, so $x \\in \\{6, 7, 8, 9, 10, 11, 12\\}$. From $6$ and $10$: $4 < x < 16$, so $x \\in \\{5, 6, \\ldots, 15\\}$. Both must hold, and the overlap is $5 < x < 13$: the seven integers $6, 7, 8, 9, 10, 11, 12$ ✓ — the first window did all the limiting. Check a second, independent way at the edges: $x = 5$ fails the first triple FLAT, since $4 + 5 = 9$; $x = 13$ fails it flat too, since $4 + 9 = 13$; while $x = 6$ passes both, $4 + 6 > 9$ ✓ and $6 + 6 > 10$ ✓, and $x = 12$ passes both, $4 + 9 > 12$ ✓ and $6 + 10 > 12$ ✓. (The choice $11$ is USING ONLY THE SECOND WINDOW; the choice $9$ is KEEPING THE FLAT ENDPOINTS $5$ and $13$; the choice $18$ is ADDING THE TWO WINDOWS’ COUNTS instead of overlapping them.)',
    },
    {
      q: 'For how many integers $x$ can BOTH $(4, 10, x)$ and $(5, 12, x)$ be the side lengths of triangles?',
      choices: ['$7$', '$9$', '$6$', '$8$'],
      answer: 2,
      solution:
        'Window one, from $4$ and $10$: $6 < x < 14$, so $x \\in \\{7, 8, \\ldots, 13\\}$. Window two, from $5$ and $12$: $7 < x < 17$, so $x \\in \\{8, 9, \\ldots, 16\\}$. The overlap is $7 < x < 14$: the six integers $8, 9, 10, 11, 12, 13$ ✓ — each window trims one end of the other. Check a second, independent way at the edges: $x = 7$ fails the SECOND triple flat, since $5 + 7 = 12$; $x = 14$ fails the FIRST flat, since $4 + 10 = 14$; while $x = 8$ passes both, $4 + 8 > 10$ ✓ and $5 + 8 > 12$ ✓, and $x = 13$ passes both, $4 + 10 > 13$ ✓ and $5 + 12 > 13$ ✓. (The choice $7$ is USING ONLY THE FIRST WINDOW; the choice $9$ is USING ONLY THE SECOND WINDOW; the choice $8$ is KEEPING THE FLAT ENDPOINTS $7$ and $14$.)',
    },
    {
      q: 'Kip needs one integer length $x$ so that the triples $(2, 9, x)$ and $(6, 12, x)$ each form a valid triangle. How many choices does Kip have?',
      choices: ['$11$', '$3$', '$5$', '$14$'],
      answer: 1,
      solution:
        'The pair $2$ and $9$ demands $7 < x < 11$, so $x \\in \\{8, 9, 10\\}$. The pair $6$ and $12$ demands $6 < x < 18$, so $x \\in \\{7, 8, \\ldots, 17\\}$. Both windows must hold, and the overlap is $7 < x < 11$: just the three integers $8, 9, 10$ ✓ — the narrow first window does all the work. Check a second, independent way at the edges: $x = 7$ fails the first triple FLAT, since $2 + 7 = 9$; $x = 11$ fails it flat too, since $2 + 9 = 11$; while $x = 8$ passes both, $2 + 8 > 9$ ✓ and $6 + 8 > 12$ ✓, and $x = 10$ passes both, $2 + 9 > 10$ ✓ and $6 + 10 > 12$ ✓. (The choice $11$ is USING ONLY THE SECOND WINDOW; the choice $5$ is KEEPING THE FLAT ENDPOINTS $7$ and $11$; the choice $14$ is ADDING THE TWO WINDOWS’ COUNTS instead of overlapping them.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 10,
  challenge,
}
