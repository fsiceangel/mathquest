// Prealgebra chapter 10 (Angles) — variations for the chapter challenge and the
// chapter worksheet. All problems and solutions are original MathQuest content.
//
// Every figure in this chapter is described in words rather than drawn, so each
// variation is checked by closure instead: triangle angles sum to $180^\circ$,
// quadrilaterals to $360^\circ$, angles around a point to $360^\circ$, and the
// exterior angles of any convex polygon to $360^\circ$. Every angle that the
// student is meant to see in the picture lands strictly between 0 and 180
// degrees.

const challenge = [
  // 1. An angle described in terms of a multiple of its complement/supplement.
  [
    {
      q: 'An angle is $18^\\circ$ more than half its supplement. What is the angle?',
      choices: ['$42^\\circ$', '$72^\\circ$', '$60^\\circ$', '$108^\\circ$'],
      answer: 1,
      solution: 'Call the angle $x$. Its supplement is $180 - x$, and the angle is half of that plus $18$: $x = \\frac{180 - x}{2} + 18$. Double both sides: $2x = 180 - x + 36 = 216 - x$, so $3x = 216$ and $x = 72^\\circ$. Check: the supplement is $108^\\circ$, half of it is $54^\\circ$, and $54 + 18 = 72$. ✓ ($42^\\circ$ comes from using the complement rule, $90 - x$, where the supplement rule $180 - x$ belongs; $60^\\circ$ comes from dropping the extra $18^\\circ$ and solving $x = \\frac{180-x}{2}$; $108^\\circ$ is the supplement itself, not the angle asked for.)',
    },
    {
      q: 'The supplement of an angle is $30^\\circ$ more than four times the angle. What is the angle?',
      choices: ['$150^\\circ$', '$12^\\circ$', '$30^\\circ$', '$36^\\circ$'],
      answer: 2,
      solution: 'Let the angle be $x$. Supplementary means the pair adds to $180^\\circ$, so the supplement is $180 - x$, and we are told $180 - x = 4x + 30$. Then $150 = 5x$, so $x = 30^\\circ$. Check: the supplement is $150^\\circ$, and $4(30) + 30 = 150$. ✓ ($150^\\circ$ is the supplement, not the angle; $12^\\circ$ comes from writing $90 - x$ instead of $180 - x$ — that is the complement rule; $36^\\circ$ comes from forgetting the $+30$ and solving $180 - x = 4x$.)',
    },
    {
      q: 'The supplement of an angle is $8^\\circ$ more than three times its complement. What is the angle?',
      choices: ['$41^\\circ$', '$45^\\circ$', '$131^\\circ$', '$49^\\circ$'],
      answer: 3,
      solution: 'Let the angle be $x$. Its supplement is $180 - x$ (adding to $180^\\circ$) and its complement is $90 - x$ (adding to $90^\\circ$). The sentence says $180 - x = 3(90 - x) + 8 = 278 - 3x$, so $2x = 98$ and $x = 49^\\circ$. Check: the supplement is $131^\\circ$, the complement is $41^\\circ$, and $3(41) + 8 = 131$. ✓ ($41^\\circ$ is the complement and $131^\\circ$ is the supplement — both are steps, not the answer; $45^\\circ$ comes from dropping the $+8$.)',
    },
  ],
  // 2. Angles that share a full turn (or a straight line) in given proportions.
  [
    {
      q: 'Five angles fit together all the way around a point, measuring $x^\\circ$, $2x^\\circ$, $2x^\\circ$, $3x^\\circ$, and $4x^\\circ$. What is the largest of the five angles?',
      choices: ['$120^\\circ$', '$60^\\circ$', '$30^\\circ$', '$72^\\circ$'],
      answer: 0,
      solution: 'Angles all the way around a point add to a full turn, $360^\\circ$: $x + 2x + 2x + 3x + 4x = 12x = 360$, so $x = 30$. The five angles are $30^\\circ$, $60^\\circ$, $60^\\circ$, $90^\\circ$, and $120^\\circ$ — they add to $360^\\circ$ ✓ — and the largest is $4x = 120^\\circ$. ($60^\\circ$ comes from using $180^\\circ$ for the turn instead of $360^\\circ$, which gives $x = 15$; $30^\\circ$ is $x$, the smallest angle; $72^\\circ$ comes from dividing $360$ by the $5$ angles instead of by the $12$ parts.)',
    },
    {
      q: 'Three angles fit together along one side of a straight line, measuring $2x^\\circ$, $3x^\\circ$, and $4x^\\circ$. What is the largest of the three angles?',
      choices: ['$20^\\circ$', '$160^\\circ$', '$80^\\circ$', '$60^\\circ$'],
      answer: 2,
      solution: 'Angles along one side of a straight line add to $180^\\circ$, not $360^\\circ$: $2x + 3x + 4x = 9x = 180$, so $x = 20$. The angles are $40^\\circ$, $60^\\circ$, and $80^\\circ$, which add to $180^\\circ$ ✓, and the largest is $4x = 80^\\circ$. ($160^\\circ$ comes from using $360^\\circ$ — the rule for a full turn around a point — which gives $x = 40$; $20^\\circ$ is just $x$; $60^\\circ$ is the middle angle.)',
    },
    {
      q: 'Four angles fit together all the way around a point, and their measures are in the ratio $3 : 4 : 5 : 6$. What is the difference between the largest angle and the smallest angle?',
      choices: ['$30^\\circ$', '$120^\\circ$', '$100^\\circ$', '$60^\\circ$'],
      answer: 3,
      solution: 'The ratio has $3 + 4 + 5 + 6 = 18$ parts sharing a full turn of $360^\\circ$, so each part is $360 \\div 18 = 20^\\circ$. The four angles are $60^\\circ$, $80^\\circ$, $100^\\circ$, and $120^\\circ$ — they add to $360^\\circ$ ✓ — so the difference is $120 - 60 = 60^\\circ$. ($30^\\circ$ comes from sharing $180^\\circ$ instead of $360^\\circ$, making each part $10^\\circ$; $120^\\circ$ is the largest angle, not the difference; $100^\\circ$ comes from subtracting one part, $20^\\circ$, from the largest angle instead of subtracting the smallest angle.)',
    },
  ],
  // 3. Same-side interior angles: supplementary, never equal.
  [
    {
      q: 'A transversal crosses two parallel lines. One same-side interior angle is $6^\\circ$ less than twice the other. What is the smaller of the two angles?',
      choices: ['$62^\\circ$', '$118^\\circ$', '$60^\\circ$', '$32^\\circ$'],
      answer: 0,
      solution: 'Same-side (co-interior) angles between parallel lines are supplementary — they add to $180^\\circ$. Let the smaller be $x$; the other is $2x - 6$. Then $x + (2x - 6) = 180$, so $3x = 186$ and $x = 62^\\circ$. The other angle is $2(62) - 6 = 118^\\circ$, and $62 + 118 = 180$ ✓. ($118^\\circ$ is the larger angle, not the smaller; $60^\\circ$ comes from forgetting the $-6$; $32^\\circ$ comes from making the pair add to $90^\\circ$ — that is the complementary rule, and co-interior angles are supplementary.)',
    },
    {
      q: 'A transversal crosses two parallel lines. Two same-side interior angles are in the ratio $4 : 5$. What is the larger of the two angles?',
      choices: ['$80^\\circ$', '$100^\\circ$', '$50^\\circ$', '$90^\\circ$'],
      answer: 1,
      solution: 'Same-side interior angles are supplementary, so the $4 + 5 = 9$ parts share $180^\\circ$: each part is $20^\\circ$. The angles are $80^\\circ$ and $100^\\circ$, and $80 + 100 = 180$ ✓, so the larger is $100^\\circ$. ($80^\\circ$ is the smaller angle; $50^\\circ$ comes from sharing $90^\\circ$ instead of $180^\\circ$; $90^\\circ$ comes from treating the pair as EQUAL — that would be true of alternate interior or corresponding angles, but same-side interior angles add to $180^\\circ$ instead.)',
    },
    {
      q: 'A transversal crosses two parallel lines. The acute angle it makes at the first line is $\\frac{2}{7}$ as large as the obtuse angle it makes at the second line. What is the obtuse angle?',
      choices: ['$40^\\circ$', '$70^\\circ$', '$90^\\circ$', '$140^\\circ$'],
      answer: 3,
      solution: 'The acute angle at the first line equals the acute angle at the second line (corresponding angles between parallel lines are equal), and at that second crossing the acute and obtuse angles sit along a straight line, so they add to $180^\\circ$. Let the obtuse angle be $y$; then the acute angle is $\\frac{2}{7}y$ and $y + \\frac{2}{7}y = \\frac{9}{7}y = 180$, giving $y = 140^\\circ$. The acute angle is $40^\\circ$, and $40 + 140 = 180$ ✓. ($40^\\circ$ is the acute angle, not the obtuse one; $70^\\circ$ comes from using $90^\\circ$ for the straight line instead of $180^\\circ$ — and $70^\\circ$ is not even obtuse; $90^\\circ$ comes from treating the two sizes as equal and halving $180^\\circ$, which is also not obtuse.)',
    },
  ],
  // 4. Triangle angle sum with two angles described in terms of the third.
  [
    {
      q: 'In triangle $PQR$, angle $Q$ is three times angle $P$, and angle $R$ is $15^\\circ$ less than angle $P$. What is angle $Q$?',
      choices: ['$117^\\circ$', '$39^\\circ$', '$108^\\circ$', '$24^\\circ$'],
      answer: 0,
      solution: 'Let angle $P = p$. The three angles add to $180^\\circ$: $p + 3p + (p - 15) = 180$, so $5p = 195$ and $p = 39$. Then angle $Q = 3(39) = 117^\\circ$ and angle $R = 39 - 15 = 24^\\circ$. Check the closure: $39 + 117 + 24 = 180$ ✓. ($39^\\circ$ is angle $P$ and $24^\\circ$ is angle $R$ — both are steps along the way; $108^\\circ$ comes from dropping the $-15$ and solving $5p = 180$.)',
    },
    {
      q: 'In triangle $DEF$, angle $E$ is $20^\\circ$ more than angle $D$, and angle $F$ is twice angle $E$. What is angle $F$?',
      choices: ['$50^\\circ$', '$100^\\circ$', '$60^\\circ$', '$30^\\circ$'],
      answer: 1,
      solution: 'Let angle $D = d$. Then angle $E = d + 20$ and angle $F = 2(d + 20) = 2d + 40$. The sum is $180^\\circ$: $d + (d + 20) + (2d + 40) = 4d + 60 = 180$, so $4d = 120$ and $d = 30$. The angles are $30^\\circ$, $50^\\circ$, and $100^\\circ$, adding to $180^\\circ$ ✓, so angle $F = 100^\\circ$. ($50^\\circ$ is angle $E$ and $30^\\circ$ is angle $D$; $60^\\circ$ comes from doubling angle $D$ instead of angle $E$.)',
    },
    {
      q: 'In triangle $KLM$, angle $M$ is $30^\\circ$ more than angle $K$, and angle $L$ is exactly the average of the other two angles. What is the largest angle of the triangle?',
      choices: ['$45^\\circ$', '$60^\\circ$', '$75^\\circ$', '$90^\\circ$'],
      answer: 2,
      solution: 'Angle $L$ is the average of $K$ and $M$, so $K + M = 2L$. Since $K + L + M = 180$, that gives $3L = 180$ and $L = 60^\\circ$. Then $K + M = 120$, and with $M = K + 30$ we get $2K + 30 = 120$, so $K = 45^\\circ$ and $M = 75^\\circ$. Closure: $45 + 60 + 75 = 180$ ✓, and the largest angle is $75^\\circ$. ($45^\\circ$ is angle $K$ and $60^\\circ$ is angle $L$; $90^\\circ$ comes from misreading the clue as "angle $M$ is $30^\\circ$ more than angle $L$".)',
    },
  ],
  // 5. Exterior angles of a regular polygon add to a single full turn.
  [
    {
      q: 'Each exterior angle of a regular polygon measures $18^\\circ$. How many sides does the polygon have?',
      choices: ['$20$', '$10$', '$22$', '$40$'],
      answer: 0,
      solution: 'Walking once around any convex polygon, the exterior angles add to exactly one full turn, $360^\\circ$, no matter how many sides there are. Each turn is $18^\\circ$, so the number of turns is $360 \\div 18 = 20$, and one turn per vertex means $20$ sides. ($10$ comes from using $180^\\circ$ for the walk instead of $360^\\circ$; $22$ comes from computing $20$ and then adding $2$, borrowing the $n - 2$ from the interior-angle formula where it does not belong; $40$ comes from using $720^\\circ$ — the interior-angle total of a hexagon — as the walk.)',
    },
    {
      q: 'Walking all the way around a regular polygon, you turn $15^\\circ$ at each corner. How many corners does the polygon have?',
      choices: ['$12$', '$26$', '$24$', '$48$'],
      answer: 2,
      solution: 'One trip around brings you back facing the way you started, so the turns add to $360^\\circ$. With every turn equal to $15^\\circ$, the number of corners is $360 \\div 15 = 24$. (Each interior angle is then $180 - 15 = 165^\\circ$, if you want to check with the other formula: $(24 - 2) \\cdot 180 \\div 24 = 3960 \\div 24 = 165$ ✓.) ($12$ comes from using $180^\\circ$ for the trip; $26$ comes from adding $2$ to the answer, mixing in the $n - 2$ of the interior-angle formula; $48$ comes from using $720^\\circ$ for the trip, which is two full turns.)',
    },
    {
      q: 'At each corner of a regular polygon, the interior angle is five times the exterior angle. How many sides does the polygon have?',
      choices: ['$24$', '$6$', '$5$', '$12$'],
      answer: 3,
      solution: 'At any corner the interior and exterior angles sit along a straight line, so they are supplementary: they add to $180^\\circ$. If the exterior angle is $e$, then $e + 5e = 180$, so $e = 30^\\circ$ and the interior angle is $150^\\circ$. The exterior angles add to $360^\\circ$, so there are $360 \\div 30 = 12$ sides. Check: $(12 - 2) \\cdot 180 \\div 12 = 1800 \\div 12 = 150^\\circ$ ✓. ($24$ comes from making the two angles complementary, adding to $90^\\circ$, instead of supplementary; $6$ comes from making them add to $360^\\circ$; $5$ is just the multiplier from the question.)',
    },
  ],
  // 6. Each interior angle of a regular polygon.
  [
    {
      q: 'What is the measure of each interior angle of a regular polygon with $12$ sides?',
      choices: ['$30^\\circ$', '$150^\\circ$', '$180^\\circ$', '$1800^\\circ$'],
      answer: 1,
      solution: 'Each exterior angle is $360^\\circ \\div 12 = 30^\\circ$, so each interior angle is $180^\\circ - 30^\\circ = 150^\\circ$. The long way agrees: $(12 - 2) \\cdot 180^\\circ = 1800^\\circ$ shared among $12$ equal angles is $1800 \\div 12 = 150^\\circ$ ✓ (the division is exact). ($30^\\circ$ is the exterior angle, not the interior one; $180^\\circ$ comes from using $n$ instead of $n - 2$ on top, giving $\\frac{12 \\cdot 180}{12}$ — but a $180^\\circ$ corner is a straight line, so no polygon can have one; $1800^\\circ$ is the total of all twelve angles, not each one.)',
    },
    {
      q: 'What is the measure of each interior angle of a regular polygon with $15$ sides?',
      choices: ['$24^\\circ$', '$168^\\circ$', '$156^\\circ$', '$2340^\\circ$'],
      answer: 2,
      solution: 'Each exterior angle is $360^\\circ \\div 15 = 24^\\circ$, so each interior angle is $180^\\circ - 24^\\circ = 156^\\circ$. Checking with the sum formula: $(15 - 2) \\cdot 180^\\circ = 2340^\\circ$, and $2340 \\div 15 = 156$ exactly ✓. ($24^\\circ$ is the exterior angle; $168^\\circ$ comes from using $n - 1$ instead of $n - 2$, that is $\\frac{14 \\cdot 180}{15}$; $2340^\\circ$ is the total of all fifteen angles, not each one.)',
    },
    {
      q: 'What is the measure of each interior angle of a regular polygon with $9$ sides?',
      choices: ['$1260^\\circ$', '$40^\\circ$', '$220^\\circ$', '$140^\\circ$'],
      answer: 3,
      solution: 'Each exterior angle is $360^\\circ \\div 9 = 40^\\circ$, so each interior angle is $180^\\circ - 40^\\circ = 140^\\circ$. The sum formula agrees: $(9 - 2) \\cdot 180^\\circ = 1260^\\circ$, and $1260 \\div 9 = 140$ exactly ✓. ($1260^\\circ$ is the total of all nine angles; $40^\\circ$ is the exterior angle; $220^\\circ$ comes from ADDING the exterior angle to $180^\\circ$ instead of subtracting it, and no interior angle of a polygon can be more than $180^\\circ$.)',
    },
  ],
  // 7. Two crossing lines: vertical angles equal, neighbours supplementary.
  [
    {
      q: 'Two lines cross at a point. A pair of vertical angles measures $(7x - 18)^\\circ$ and $(5x + 30)^\\circ$. What is the measure of each of these angles?',
      choices: ['$150^\\circ$', '$24^\\circ$', '$80^\\circ$', '$30^\\circ$'],
      answer: 0,
      solution: 'Vertical angles — the pair directly across from each other — are EQUAL, so $7x - 18 = 5x + 30$. Then $2x = 48$ and $x = 24$, giving $7(24) - 18 = 150^\\circ$. Check the other expression: $5(24) + 30 = 150^\\circ$ ✓. ($24^\\circ$ is just $x$, not the angle; $80^\\circ$ comes from treating the pair as SUPPLEMENTARY and solving $12x + 12 = 180$, but that rule belongs to neighbouring angles, not vertical ones; $30^\\circ$ is the neighbouring angle, $180 - 150$.)',
    },
    {
      q: 'Two lines cross at a point. One of the four angles measures $(2x + 25)^\\circ$, and the angle next to it along one of the lines measures $(3x + 15)^\\circ$. What is the measure of the larger of these two angles?',
      choices: ['$28^\\circ$', '$81^\\circ$', '$99^\\circ$', '$45^\\circ$'],
      answer: 2,
      solution: 'Neighbouring angles along a straight line are supplementary, so $(2x + 25) + (3x + 15) = 180$. That gives $5x + 40 = 180$, so $x = 28$ and the angles are $2(28) + 25 = 81^\\circ$ and $3(28) + 15 = 99^\\circ$. Closure: $81 + 99 = 180$ ✓, and the larger is $99^\\circ$. ($28^\\circ$ is just $x$; $81^\\circ$ is the smaller angle; $45^\\circ$ comes from setting the two expressions EQUAL, which is the rule for vertical angles, not for neighbours.)',
    },
    {
      q: 'Two lines cross at a point. One of the four angles measures $(4x)^\\circ$ and its vertical twin measures $(x + 63)^\\circ$. What is the measure of a neighbouring angle?',
      choices: ['$21^\\circ$', '$84^\\circ$', '$6^\\circ$', '$96^\\circ$'],
      answer: 3,
      solution: 'Vertical angles are equal: $4x = x + 63$, so $3x = 63$ and $x = 21$, making that pair $4(21) = 84^\\circ$ each. A neighbouring angle sits along a straight line with an $84^\\circ$ angle, so it measures $180^\\circ - 84^\\circ = 96^\\circ$. Check the full turn: $84 + 96 + 84 + 96 = 360$ ✓. ($21^\\circ$ is just $x$; $84^\\circ$ is the vertical pair itself, not the neighbour; $6^\\circ$ comes from using $90^\\circ - 84^\\circ$ — that is the complement, but neighbours along a line are supplementary.)',
    },
  ],
  // 8. Chaining the complement and supplement rules, in order.
  [
    {
      q: 'What is the complement of the supplement of a $115^\\circ$ angle?',
      choices: ['$25^\\circ$', '$65^\\circ$', '$155^\\circ$', '$115^\\circ$'],
      answer: 0,
      solution: 'Work from the inside out. The supplement of $115^\\circ$ is $180^\\circ - 115^\\circ = 65^\\circ$. The complement of $65^\\circ$ is $90^\\circ - 65^\\circ = 25^\\circ$. (Note the order matters here: $115^\\circ$ has no complement at all, since it is already larger than $90^\\circ$.) ($65^\\circ$ stops after the first step; $155^\\circ$ takes one step too many, the supplement of $25^\\circ$; $115^\\circ$ assumes the two operations undo each other, which they do not.)',
    },
    {
      q: 'The complement of an angle measures $28^\\circ$. What is the supplement of that same angle?',
      choices: ['$62^\\circ$', '$118^\\circ$', '$152^\\circ$', '$298^\\circ$'],
      answer: 1,
      solution: 'First find the angle: complements add to $90^\\circ$, so the angle is $90^\\circ - 28^\\circ = 62^\\circ$. Its supplement adds to $180^\\circ$: $180^\\circ - 62^\\circ = 118^\\circ$. ($62^\\circ$ is the angle itself, not its supplement; $152^\\circ$ takes the supplement of $28^\\circ$ — the complement — rather than of the angle; $298^\\circ$ comes from using a full turn of $360^\\circ$, which would be a reflex angle, not a supplement.)',
    },
    {
      q: 'The supplement of an angle measures $121^\\circ$. What is the complement of that same angle?',
      choices: ['$59^\\circ$', '$149^\\circ$', '$31^\\circ$', '$121^\\circ$'],
      answer: 2,
      solution: 'First find the angle: supplements add to $180^\\circ$, so the angle is $180^\\circ - 121^\\circ = 59^\\circ$. Its complement adds to $90^\\circ$: $90^\\circ - 59^\\circ = 31^\\circ$. ($59^\\circ$ is the angle itself; $149^\\circ$ goes one step too far, taking the supplement of $31^\\circ$; $121^\\circ$ comes from using $180^\\circ$ for the complement too, which just lands you back where you started.)',
    },
  ],
  // 9. Two angle sizes at a transversal: they add to 180 and differ by a given gap.
  [
    {
      q: 'A transversal crosses two parallel lines. The obtuse angles it makes are $44^\\circ$ larger than the acute angles. What do the obtuse angles measure?',
      choices: ['$68^\\circ$', '$112^\\circ$', '$44^\\circ$', '$67^\\circ$'],
      answer: 1,
      solution: 'A transversal across parallel lines makes only two sizes of angle, and any two neighbouring ones sit along a straight line, so the two sizes are supplementary: they add to $180^\\circ$. Let the acute size be $a$; then $a + (a + 44) = 180$, so $2a = 136$ and $a = 68^\\circ$. The obtuse size is $68 + 44 = 112^\\circ$, and $68 + 112 = 180$ ✓. ($68^\\circ$ is the acute size, not the obtuse one; $44^\\circ$ is just the gap between them; $67^\\circ$ comes from making the two sizes add to $90^\\circ$ instead of $180^\\circ$ — and $67^\\circ$ is not obtuse anyway.)',
    },
    {
      q: 'A transversal crosses two parallel lines. The acute angles it makes are $\\frac{2}{3}$ as large as the obtuse angles. What is the difference between an obtuse angle and an acute angle?',
      choices: ['$108^\\circ$', '$72^\\circ$', '$36^\\circ$', '$18^\\circ$'],
      answer: 2,
      solution: 'The two sizes are supplementary, adding to $180^\\circ$. Let the obtuse size be $y$; the acute size is $\\frac{2}{3}y$, so $y + \\frac{2}{3}y = \\frac{5}{3}y = 180$, giving $y = 108^\\circ$ and an acute size of $72^\\circ$. Closure: $108 + 72 = 180$ ✓. The difference is $108 - 72 = 36^\\circ$. ($108^\\circ$ and $72^\\circ$ are the two angles themselves, not the difference; $18^\\circ$ comes from making the pair add to $90^\\circ$, the complementary rule, instead of $180^\\circ$.)',
    },
    {
      q: 'Two parallel fences are crossed by a straight path. At the first fence the two angles the path makes differ by $70^\\circ$. What is the larger of the two angles the path makes at the SECOND fence?',
      choices: ['$55^\\circ$', '$90^\\circ$', '$80^\\circ$', '$125^\\circ$'],
      answer: 3,
      solution: 'At the first fence the two angles sit along a straight line, so they add to $180^\\circ$. With the smaller called $a$: $a + (a + 70) = 180$, so $2a = 110$ and $a = 55^\\circ$, making the angles $55^\\circ$ and $125^\\circ$ — they add to $180^\\circ$ and differ by $70^\\circ$ ✓. The second fence is parallel, so its crossing is a corresponding copy with the same two sizes, and the larger is $125^\\circ$. ($55^\\circ$ is the smaller angle; $90^\\circ$ comes from assuming the two angles are equal and halving $180^\\circ$; $80^\\circ$ comes from making the pair add to $90^\\circ$ instead of $180^\\circ$, which gives $10^\\circ$ and $80^\\circ$.)',
    },
  ],
  // 10. Polygon angle sums with one angle missing.
  [
    {
      q: 'Five angles of a hexagon measure $100^\\circ$, $130^\\circ$, $115^\\circ$, $140^\\circ$, and $125^\\circ$. What is the sixth angle?',
      choices: ['$110^\\circ$', '$120^\\circ$', '$290^\\circ$', '$70^\\circ$'],
      answer: 0,
      solution: 'A hexagon splits into $6 - 2 = 4$ triangles, so its angles add to $4 \\cdot 180^\\circ = 720^\\circ$. The five known angles total $100 + 130 + 115 + 140 + 125 = 610$, so the sixth is $720 - 610 = 110^\\circ$. Closure check: $610 + 110 = 720$ ✓. ($120^\\circ$ comes from assuming the hexagon is regular and computing $720 \\div 6$, but nothing here says the sides are equal; $290^\\circ$ comes from using $(6 - 1) \\cdot 180 = 900$ for the sum, and it is a reflex angle anyway; $70^\\circ$ comes from using a pentagon’s $540^\\circ$ and then subtracting the wrong way round.)',
    },
    {
      q: 'Five of the six angles of a hexagon each measure $128^\\circ$. What is the sixth angle?',
      choices: ['$260^\\circ$', '$80^\\circ$', '$120^\\circ$', '$52^\\circ$'],
      answer: 1,
      solution: 'The angles of a hexagon add to $(6 - 2) \\cdot 180^\\circ = 720^\\circ$. Five angles of $128^\\circ$ use up $5 \\times 128 = 640^\\circ$, so the sixth is $720 - 640 = 80^\\circ$. Closure: $640 + 80 = 720$ ✓. ($260^\\circ$ comes from using $(6 - 1) \\cdot 180 = 900$ as the sum, and a $260^\\circ$ corner is reflex, not possible here; $120^\\circ$ comes from assuming the hexagon is regular, but then all six angles would be equal and none would be $128^\\circ$; $52^\\circ$ is $180 - 128$, the exterior angle at one of those corners, not the missing interior angle.)',
    },
    {
      q: 'Five angles of a hexagon are equal to each other, and the sixth angle is $60^\\circ$ smaller than each of them. What is the sixth angle?',
      choices: ['$130^\\circ$', '$120^\\circ$', '$100^\\circ$', '$70^\\circ$'],
      answer: 3,
      solution: 'Let each of the five equal angles be $x$; the sixth is $x - 60$. The six add to $(6 - 2) \\cdot 180^\\circ = 720^\\circ$: $5x + (x - 60) = 720$, so $6x = 780$ and $x = 130$. The sixth angle is $130 - 60 = 70^\\circ$. Closure: $5 \\times 130 + 70 = 650 + 70 = 720$ ✓. ($130^\\circ$ is each of the five equal angles, not the sixth; $120^\\circ$ comes from assuming the hexagon is regular; $100^\\circ$ comes from using $(6 - 1) \\cdot 180 = 900$ as the sum.)',
    },
  ],
  // 11. The exterior angle of a triangle equals the sum of the two remote interiors.
  [
    {
      q: 'In triangle $PQR$, side $QR$ is extended past $R$ to a point $S$, and angle $PRS = 124^\\circ$. If angle $Q = 51^\\circ$, what is angle $P$?',
      choices: ['$73^\\circ$', '$56^\\circ$', '$129^\\circ$', '$5^\\circ$'],
      answer: 0,
      solution: 'Angle $PRS$ is an exterior angle of the triangle at $R$, so it equals the sum of the two remote interior angles: $124 = \\angle P + 51$, giving $\\angle P = 73^\\circ$. Check the long way: the interior angle at $R$ is $180 - 124 = 56^\\circ$, and $73 + 51 + 56 = 180$ ✓. ($56^\\circ$ is the interior angle at $R$, not angle $P$; $129^\\circ$ is $180 - 51$, the supplement of the wrong angle; $5^\\circ$ comes from treating $124^\\circ$ as an interior angle of the triangle and computing $180 - 124 - 51$.)',
    },
    {
      q: 'In triangle $XYZ$, angle $X = 38^\\circ$ and angle $Y = 74^\\circ$. Side $XZ$ is extended past $Z$ to a point $W$. What is the measure of angle $YZW$?',
      choices: ['$68^\\circ$', '$112^\\circ$', '$106^\\circ$', '$36^\\circ$'],
      answer: 1,
      solution: 'Angle $YZW$ is the exterior angle at $Z$, so it equals the sum of the two remote interior angles: $38 + 74 = 112^\\circ$. Check the long way: the interior angle at $Z$ is $180 - 38 - 74 = 68^\\circ$, and $180 - 68 = 112^\\circ$ ✓. ($68^\\circ$ is the interior angle at $Z$; $106^\\circ$ is $180 - 74$, the supplement of angle $Y$ instead of the exterior angle at $Z$; $36^\\circ$ comes from subtracting the two given angles instead of adding them.)',
    },
    {
      q: 'In triangle $ABC$, side $BC$ is extended past $C$, and the exterior angle formed there measures $(5x + 10)^\\circ$. Angle $A$ measures $(2x + 20)^\\circ$ and angle $B$ measures $(2x)^\\circ$. What is the exterior angle at $C$?',
      choices: ['$10^\\circ$', '$120^\\circ$', '$40^\\circ$', '$60^\\circ$'],
      answer: 3,
      solution: 'The exterior angle equals the sum of the two remote interior angles: $5x + 10 = (2x + 20) + 2x = 4x + 20$, so $x = 10$. The exterior angle is $5(10) + 10 = 60^\\circ$. Check everything closes: angle $A = 40^\\circ$, angle $B = 20^\\circ$, the interior angle at $C$ is $180 - 60 = 120^\\circ$, and $40 + 20 + 120 = 180$ ✓. ($10^\\circ$ is just $x$; $120^\\circ$ is the INTERIOR angle at $C$, the supplement of the one asked for; $40^\\circ$ is angle $A$.)',
    },
  ],
  // 12. From a regular polygon's interior angle back to the number of sides.
  [
    {
      q: 'Each interior angle of a regular polygon measures $150^\\circ$. How many sides does the polygon have?',
      choices: ['$12$', '$6$', '$14$', '$30$'],
      answer: 0,
      solution: 'Each exterior angle is $180^\\circ - 150^\\circ = 30^\\circ$, because the interior and exterior angles at a corner sit along a straight line and so are supplementary. The exterior angles of any convex polygon add to $360^\\circ$, so there are $360 \\div 30 = 12$ sides. Check: $(12 - 2) \\cdot 180 \\div 12 = 1800 \\div 12 = 150^\\circ$ ✓. ($6$ comes from using $180^\\circ$ instead of $360^\\circ$ for the total of the exterior angles; $14$ comes from finding $12$ and then adding $2$; $30$ is the exterior angle in degrees, which is not a count of sides.)',
    },
    {
      q: 'Each interior angle of a regular polygon measures $170^\\circ$. How many sides does the polygon have?',
      choices: ['$18$', '$36$', '$38$', '$10$'],
      answer: 1,
      solution: 'Each exterior angle is $180^\\circ - 170^\\circ = 10^\\circ$ (interior and exterior are supplementary at each corner), and all the exterior angles add to $360^\\circ$. So there are $360 \\div 10 = 36$ sides. Check: $(36 - 2) \\cdot 180 \\div 36 = 6120 \\div 36 = 170^\\circ$ ✓. ($18$ comes from using $180^\\circ$ rather than $360^\\circ$ for the exterior total; $38$ comes from adding $2$ to the answer; $10$ is the exterior angle in degrees, not a count of sides.)',
    },
    {
      q: 'At each corner of a regular polygon, the interior angle is eleven times the exterior angle. How many sides does the polygon have?',
      choices: ['$48$', '$12$', '$24$', '$11$'],
      answer: 2,
      solution: 'Interior and exterior angles at a corner are supplementary, adding to $180^\\circ$. With the exterior angle called $e$: $e + 11e = 180$, so $12e = 180$ and $e = 15^\\circ$ (the interior angle is $165^\\circ$). The exterior angles add to $360^\\circ$, so there are $360 \\div 15 = 24$ sides. Check: $(24 - 2) \\cdot 180 \\div 24 = 3960 \\div 24 = 165^\\circ$ ✓. ($48$ comes from making the pair complementary, adding to $90^\\circ$; $12$ comes from making them add to $360^\\circ$; $11$ is just the multiplier from the question.)',
    },
  ],
]

const worksheet = [
  // 1. Complement and supplement of a given angle.
  [
    {
      q: 'Find the complement and the supplement of a $53^\\circ$ angle.',
      answer: 'Complement: $37^\\circ$; supplement: $127^\\circ$',
      solution: 'The complement makes $90^\\circ$ with the angle: $90 - 53 = 37^\\circ$. The supplement makes $180^\\circ$: $180 - 53 = 127^\\circ$. Remember which is which — $c$ before $s$, $90$ before $180$.',
    },
    {
      q: 'Find the complement and the supplement of a $16^\\circ$ angle.',
      answer: 'Complement: $74^\\circ$; supplement: $164^\\circ$',
      solution: 'The complement is $90 - 16 = 74^\\circ$, and the supplement is $180 - 16 = 164^\\circ$. Check both: $16 + 74 = 90$ ✓ and $16 + 164 = 180$ ✓.',
    },
    {
      q: 'The complement of an angle measures $41^\\circ$. Find the angle and its supplement.',
      answer: 'The angle is $49^\\circ$ and its supplement is $131^\\circ$',
      solution: 'Complements add to $90^\\circ$, so the angle is $90 - 41 = 49^\\circ$. Its supplement adds to $180^\\circ$: $180 - 49 = 131^\\circ$. Careful not to take the supplement of $41^\\circ$ by mistake — that would give $139^\\circ$, which belongs to the complement, not to the angle.',
    },
  ],
  // 2. Four angles made by two crossing lines.
  [
    {
      q: 'Two lines cross at a point. One of the four angles measures $38^\\circ$. Find the other three angles.',
      answer: '$38^\\circ$, $142^\\circ$, and $142^\\circ$',
      solution: 'The angle directly across is the vertical twin, so it is also $38^\\circ$. Each of the two neighbours pairs with $38^\\circ$ along a straight line, so each is $180 - 38 = 142^\\circ$. Check the full turn: $38 + 38 + 142 + 142 = 360$ ✓.',
    },
    {
      q: 'Two lines cross at a point. One of the four angles measures $115^\\circ$. Find the other three angles.',
      answer: '$115^\\circ$, $65^\\circ$, and $65^\\circ$',
      solution: 'The vertical twin across from $115^\\circ$ is also $115^\\circ$. The two neighbours each sit along a straight line with it, so each measures $180 - 115 = 65^\\circ$. Check: $115 + 115 + 65 + 65 = 360$ ✓.',
    },
    {
      q: 'Two lines cross at a point, and one of the four angles measures $126^\\circ$. What is the sum of the two acute angles?',
      answer: '$108^\\circ$',
      solution: 'The neighbours of the $126^\\circ$ angle each measure $180 - 126 = 54^\\circ$, and those two are the acute ones (the fourth angle is the $126^\\circ$ vertical twin). Their sum is $54 + 54 = 108^\\circ$. Check the whole turn: $126 + 126 + 54 + 54 = 360$ ✓.',
    },
  ],
  // 3. Two angle sizes at a transversal across parallel lines.
  [
    {
      q: 'A transversal crosses two parallel lines and makes a $143^\\circ$ angle with the first line. What acute angle does it make with the second line?',
      answer: '$37^\\circ$',
      solution: 'Only two angle sizes appear at the two crossings, and neighbouring angles along a line are supplementary, so the sizes are $143^\\circ$ and $180 - 143 = 37^\\circ$. The second crossing is a corresponding copy of the first, so both sizes appear there too, and the acute one is $37^\\circ$.',
    },
    {
      q: 'A transversal crosses two parallel lines and makes a $64^\\circ$ angle with the first line. What obtuse angle does it make with the second line?',
      answer: '$116^\\circ$',
      solution: 'The two sizes at each crossing add to $180^\\circ$, so they are $64^\\circ$ and $180 - 64 = 116^\\circ$. Corresponding angles make the second crossing a copy of the first, so the obtuse angle there is $116^\\circ$. (Using $90^\\circ$ instead would give $26^\\circ$, which is not even obtuse.)',
    },
    {
      q: 'Two parallel railings are crossed by a straight brace. The brace makes an angle of $27^\\circ$ with the first railing. What is the difference between the two angle sizes that appear where the brace meets the second railing?',
      answer: '$126^\\circ$',
      solution: 'At the first railing the two sizes are $27^\\circ$ and $180 - 27 = 153^\\circ$. The second railing is parallel, so its crossing is a corresponding copy with the same two sizes. The difference is $153 - 27 = 126^\\circ$.',
    },
  ],
  // 4. Triangle angle sum.
  [
    {
      q: 'A triangle has angles of $90^\\circ$ and $58^\\circ$. What is the third angle?',
      answer: '$32^\\circ$',
      solution: 'The three angles add to $180^\\circ$: the third is $180 - 90 - 58 = 32^\\circ$. Check: $90 + 58 + 32 = 180$ ✓. (The two acute angles of a right triangle are always complementary, and $58 + 32 = 90$ ✓.)',
    },
    {
      q: 'A triangle has angles of $47^\\circ$ and $68^\\circ$. What is the third angle?',
      answer: '$65^\\circ$',
      solution: 'The two known angles use $47 + 68 = 115^\\circ$, so the third is $180 - 115 = 65^\\circ$. Check: $47 + 68 + 65 = 180$ ✓.',
    },
    {
      q: 'Two angles of a triangle are equal to each other, and the third measures $96^\\circ$. What is each of the two equal angles?',
      answer: '$42^\\circ$',
      solution: 'The two equal angles share what is left of $180^\\circ$: that is $180 - 96 = 84^\\circ$. Since they are equal, each is $84 \\div 2 = 42^\\circ$. Check: $42 + 42 + 96 = 180$ ✓. ($84^\\circ$ is the total for both, not each one.)',
    },
  ],
  // 5. Quadrilateral angle sum.
  [
    {
      q: 'Three angles of a quadrilateral measure $105^\\circ$, $72^\\circ$, and $118^\\circ$. What is the fourth angle?',
      answer: '$65^\\circ$',
      solution: 'The angles of a quadrilateral add to $360^\\circ$. The three known angles total $105 + 72 + 118 = 295$, so the fourth is $360 - 295 = 65^\\circ$. Check: $295 + 65 = 360$ ✓.',
    },
    {
      q: 'Three angles of a quadrilateral measure $90^\\circ$, $90^\\circ$, and $137^\\circ$. What is the fourth angle?',
      answer: '$43^\\circ$',
      solution: 'The three known angles total $90 + 90 + 137 = 317$, and a quadrilateral’s angles add to $360^\\circ$, so the fourth is $360 - 317 = 43^\\circ$. Check: $317 + 43 = 360$ ✓.',
    },
    {
      q: 'A quadrilateral has two angles measuring $78^\\circ$ and $112^\\circ$, and its other two angles are equal to each other. What is each of those two equal angles?',
      answer: '$85^\\circ$',
      solution: 'The two known angles use $78 + 112 = 190^\\circ$ of the quadrilateral’s $360^\\circ$, leaving $360 - 190 = 170^\\circ$ for the other two. Since they are equal, each is $170 \\div 2 = 85^\\circ$. Check: $78 + 112 + 85 + 85 = 360$ ✓.',
    },
  ],
  // 6. Interior angle sums of larger polygons.
  [
    {
      q: 'What is the sum of the interior angles of a dodecagon (twelve sides)?',
      answer: '$1800^\\circ$',
      solution: 'Diagonals from one vertex cut a twelve-sided polygon into $12 - 2 = 10$ triangles, so the sum is $10 \\times 180^\\circ = 1800^\\circ$. (Using $12$ triangles instead of $10$ would give $2160^\\circ$ — remember the $n - 2$.)',
    },
    {
      q: 'What is the sum of the interior angles of an octagon (eight sides)?',
      answer: '$1080^\\circ$',
      solution: 'An octagon splits into $8 - 2 = 6$ triangles from one vertex, so the sum is $6 \\times 180^\\circ = 1080^\\circ$.',
    },
    {
      q: 'The interior angles of a polygon add to $1440^\\circ$. How many sides does the polygon have?',
      answer: '$10$ sides',
      solution: 'The sum is $(n - 2) \\cdot 180^\\circ$, so $n - 2 = 1440 \\div 180 = 8$, giving $n = 10$. Do not forget to add the $2$ back at the end. Check: $(10 - 2) \\cdot 180 = 1440$ ✓.',
    },
  ],
  // 7. Relating an angle's supplement to its complement.
  [
    {
      q: 'An angle’s supplement is four times as large as its complement. What is the angle?',
      answer: '$60^\\circ$',
      solution: 'Call the angle $x$. Its supplement is $180 - x$ and its complement is $90 - x$, so $180 - x = 4(90 - x) = 360 - 4x$. Adding $4x$ to both sides gives $180 + 3x = 360$, so $3x = 180$ and $x = 60^\\circ$. Check: the supplement is $120^\\circ$, the complement is $30^\\circ$, and $120 = 4 \\times 30$ ✓.',
    },
    {
      q: 'An angle’s supplement is $10^\\circ$ more than twice its complement. What is the angle?',
      answer: '$10^\\circ$',
      solution: 'Call the angle $x$. Then $180 - x = 2(90 - x) + 10 = 190 - 2x$. Adding $2x$ to both sides gives $180 + x = 190$, so $x = 10^\\circ$. Check: the supplement is $170^\\circ$, the complement is $80^\\circ$, and $2 \\times 80 + 10 = 170$ ✓.',
    },
    {
      q: 'An angle’s supplement is $30^\\circ$ less than three times its complement. What is the angle?',
      answer: '$30^\\circ$',
      solution: 'Call the angle $x$. Then $180 - x = 3(90 - x) - 30 = 240 - 3x$. Adding $3x$ to both sides gives $180 + 2x = 240$, so $2x = 60$ and $x = 30^\\circ$. Check: the supplement is $150^\\circ$, the complement is $60^\\circ$, and $3 \\times 60 - 30 = 150$ ✓.',
    },
  ],
  // 8. Solving for angles at a transversal using the right relationship.
  [
    {
      q: 'A transversal crosses two parallel lines. A pair of corresponding angles measures $(4x - 7)^\\circ$ and $(2x + 33)^\\circ$. Find the measure of each of these angles.',
      answer: '$73^\\circ$',
      solution: 'Corresponding angles between parallel lines are EQUAL, so $4x - 7 = 2x + 33$. Subtracting $2x$ and adding $7$ gives $2x = 40$, so $x = 20$ and each angle measures $4(20) - 7 = 73^\\circ$. Check the other expression: $2(20) + 33 = 73^\\circ$ ✓. (Setting them supplementary instead would be the co-interior rule, and it does not apply here.)',
    },
    {
      q: 'A transversal crosses two parallel lines. Two same-side interior angles measure $(5x + 12)^\\circ$ and $(3x + 8)^\\circ$. Find both angles.',
      answer: '$112^\\circ$ and $68^\\circ$',
      solution: 'Same-side (co-interior) angles are SUPPLEMENTARY, so $(5x + 12) + (3x + 8) = 180$. That gives $8x + 20 = 180$, so $8x = 160$ and $x = 20$. The angles are $5(20) + 12 = 112^\\circ$ and $3(20) + 8 = 68^\\circ$. Check: $112 + 68 = 180$ ✓.',
    },
    {
      q: 'A transversal crosses two parallel lines. A pair of alternate interior angles measures $(6x - 40)^\\circ$ and $(2x + 24)^\\circ$. Find the measure of each of these angles.',
      answer: '$56^\\circ$',
      solution: 'Alternate interior angles form a Z shape between parallel lines and are EQUAL, so $6x - 40 = 2x + 24$. Subtracting $2x$ and adding $40$ gives $4x = 64$, so $x = 16$ and each angle measures $6(16) - 40 = 56^\\circ$. Check: $2(16) + 24 = 56^\\circ$ ✓. (Remember $x = 16$ is only a step — the question asks for the angle.)',
    },
  ],
  // 9. Regular polygons, via the exterior angle.
  [
    {
      q: 'Each interior angle of a regular polygon measures $171^\\circ$. How many sides does the polygon have?',
      answer: '$40$ sides',
      solution: 'At each corner the interior and exterior angles are supplementary, so each exterior angle is $180 - 171 = 9^\\circ$. The exterior angles of any convex polygon add to $360^\\circ$, so the polygon has $360 \\div 9 = 40$ sides. Check: $(40 - 2) \\cdot 180 \\div 40 = 6840 \\div 40 = 171^\\circ$ ✓.',
    },
    {
      q: 'Each exterior angle of a regular polygon measures $12^\\circ$. How many sides does it have, and what is each interior angle?',
      answer: '$30$ sides, each interior angle $168^\\circ$',
      solution: 'The exterior angles add to $360^\\circ$, so the number of sides is $360 \\div 12 = 30$. Each interior angle is the supplement of its exterior angle: $180 - 12 = 168^\\circ$. Check: $(30 - 2) \\cdot 180 \\div 30 = 5040 \\div 30 = 168^\\circ$ ✓.',
    },
    {
      q: 'Each interior angle of a regular polygon measures $135^\\circ$. How many sides does the polygon have?',
      answer: '$8$ sides',
      solution: 'Each exterior angle is $180 - 135 = 45^\\circ$, and the exterior angles add to $360^\\circ$, so there are $360 \\div 45 = 8$ sides. Check: $(8 - 2) \\cdot 180 \\div 8 = 1080 \\div 8 = 135^\\circ$ ✓.',
    },
  ],
  // 10. The angle between two angle bisectors of a triangle.
  [
    {
      q: 'In triangle $ABC$, angle $A = 50^\\circ$. The lines that split angle $B$ and angle $C$ each exactly in half meet at a point $I$ inside the triangle. What is the measure of angle $BIC$?',
      answer: '$115^\\circ$',
      solution: 'Since angle $A = 50^\\circ$, the other two angles share $180 - 50 = 130^\\circ$, so $\\angle B + \\angle C = 130^\\circ$. Inside triangle $BIC$ the angles at $B$ and $C$ are the halves, adding to $130 \\div 2 = 65^\\circ$, so $\\angle BIC = 180 - 65 = 115^\\circ$. The shortcut agrees: $\\angle BIC = 90 + \\frac{1}{2}\\angle A = 90 + 25 = 115^\\circ$ ✓.',
    },
    {
      q: 'In triangle $PQR$, the lines that split angle $Q$ and angle $R$ each exactly in half meet at a point $I$ inside the triangle, and angle $QIR = 130^\\circ$. What is angle $P$?',
      answer: '$80^\\circ$',
      solution: 'In triangle $QIR$ the two half-angles add to $180 - 130 = 50^\\circ$, so the full angles satisfy $\\angle Q + \\angle R = 2 \\times 50 = 100^\\circ$. Then $\\angle P = 180 - 100 = 80^\\circ$. Check with the shortcut: $\\angle QIR = 90 + \\frac{1}{2}\\angle P = 90 + 40 = 130^\\circ$ ✓.',
    },
    {
      q: 'In triangle $ABC$, angle $B = 50^\\circ$ and angle $C = 68^\\circ$. The lines that split angle $B$ and angle $C$ each exactly in half meet at a point $I$ inside the triangle. What is the measure of angle $BIC$?',
      answer: '$121^\\circ$',
      solution: 'The half-angles at $B$ and $C$ measure $25^\\circ$ and $34^\\circ$, and inside triangle $BIC$ they add to $59^\\circ$, so $\\angle BIC = 180 - 59 = 121^\\circ$. Check with the shortcut: angle $A = 180 - 50 - 68 = 62^\\circ$, and $90 + \\frac{1}{2}(62) = 90 + 31 = 121^\\circ$ ✓.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 10,
  challenge,
  worksheet,
}
