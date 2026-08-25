// Prealgebra chapter 10 — variations for sections 10.1-10.3.
// All problems and solutions are original MathQuest content.
// Every angle stated or derived here is a whole number of degrees strictly
// between 0 and 180 unless it is deliberately a wrong choice.

const s101 = [
  // p1 — naming an angle by its size
  [
    {
      q: 'An angle measures $47^\\circ$. What kind of angle is it?',
      choices: ['Obtuse', 'Acute', 'Straight', 'Right'],
      answer: 1,
      solution:
        'An angle smaller than $90^\\circ$ is acute, and $47 < 90$, so $47^\\circ$ is acute. Obtuse would need a measure between $90^\\circ$ and $180^\\circ$; right means exactly $90^\\circ$; straight means exactly $180^\\circ$.',
    },
    {
      q: 'An angle measures $180^\\circ$. What kind of angle is it?',
      choices: ['Obtuse', 'Right', 'Acute', 'Straight'],
      answer: 3,
      solution:
        'An angle of exactly $180^\\circ$ is flat — the two arms point in opposite directions and form a straight line — so it is a straight angle. Obtuse stops just short of $180^\\circ$, so it does not include $180^\\circ$ itself; right is $90^\\circ$; acute is under $90^\\circ$.',
    },
    {
      q: 'The corner of a square tile measures $90^\\circ$. What kind of angle is it?',
      choices: ['Right', 'Straight', 'Acute', 'Obtuse'],
      answer: 0,
      solution:
        'Exactly $90^\\circ$ is a right angle. Calling it straight confuses $90^\\circ$ with $180^\\circ$ — the two easiest numbers in this chapter to swap. Acute means strictly less than $90^\\circ$ and obtuse means strictly more, so $90^\\circ$ is neither.',
    },
  ],
  // p2 — finding a complement
  [
    {
      q: 'What is the complement of a $17^\\circ$ angle?',
      choices: ['$73^\\circ$', '$163^\\circ$', '$17^\\circ$', '$83^\\circ$'],
      answer: 0,
      solution:
        'Complementary angles add to $90^\\circ$, so the complement is $90^\\circ - 17^\\circ = 73^\\circ$. Check: $73 + 17 = 90$. ✓ Using $180^\\circ$ instead gives $163^\\circ$, which is the supplement, not the complement. Complementary angles need not be equal, so $17^\\circ$ is wrong, and $83^\\circ$ comes from subtracting from $100$ instead of $90$.',
    },
    {
      q: 'What is the complement of a $41^\\circ$ angle?',
      choices: ['$139^\\circ$', '$59^\\circ$', '$49^\\circ$', '$41^\\circ$'],
      answer: 2,
      solution:
        'Subtract from $90^\\circ$: $90^\\circ - 41^\\circ = 49^\\circ$. Check: $49 + 41 = 90$. ✓ The choice $139^\\circ$ uses $180^\\circ$ — that is the supplement rule, and $c$ comes before $s$ just as $90$ comes before $180$. The choice $59^\\circ$ comes from subtracting from $100$, and $41^\\circ$ assumes a complement must match the angle.',
    },
    {
      q: 'Two angles are complementary. One of them measures $26^\\circ$. What is the other?',
      choices: ['$154^\\circ$', '$74^\\circ$', '$26^\\circ$', '$64^\\circ$'],
      answer: 3,
      solution:
        '"Complementary" means the pair adds to $90^\\circ$, so the other angle is $90^\\circ - 26^\\circ = 64^\\circ$. Check: $26 + 64 = 90$. ✓ Reaching for $180^\\circ$ gives $154^\\circ$ — that would make the pair supplementary instead. Subtracting from $100$ gives $74^\\circ$, and $26^\\circ$ would only be right if the two angles happened to be equal, which would need each to be $45^\\circ$.',
    },
  ],
  // p3 — finding a supplement
  [
    {
      q: 'What is the supplement of a $128^\\circ$ angle?',
      choices: ['$52^\\circ$', '$62^\\circ$', '$232^\\circ$', '$128^\\circ$'],
      answer: 0,
      solution:
        'Supplementary angles add to $180^\\circ$, so the supplement is $180^\\circ - 128^\\circ = 52^\\circ$. Check: $128 + 52 = 180$. ✓ The choice $232^\\circ$ subtracts from $360^\\circ$, a full turn rather than a straight line. The choice $62^\\circ$ is a borrowing slip in the subtraction, and $128^\\circ$ assumes the pair must be equal. Note there is no complement here at all: $128^\\circ$ is already bigger than $90^\\circ$.',
    },
    {
      q: 'What is the supplement of a $24^\\circ$ angle?',
      choices: ['$66^\\circ$', '$156^\\circ$', '$336^\\circ$', '$146^\\circ$'],
      answer: 1,
      solution:
        'Subtract from $180^\\circ$: $180^\\circ - 24^\\circ = 156^\\circ$. Check: $24 + 156 = 180$. ✓ The tempting wrong answer is $66^\\circ$, which is $90^\\circ - 24^\\circ$ — that is the COMPLEMENT. Subtracting from a full turn gives $336^\\circ$, and $146^\\circ$ is a borrowing slip.',
    },
    {
      q: 'Two angles are supplementary. One of them measures $93^\\circ$. What is the other?',
      choices: ['$267^\\circ$', '$97^\\circ$', '$87^\\circ$', '$3^\\circ$'],
      answer: 2,
      solution:
        'The pair adds to $180^\\circ$, so the other angle is $180^\\circ - 93^\\circ = 87^\\circ$. Check: $93 + 87 = 180$. ✓ The choice $3^\\circ$ comes from trying the complement rule, $93 - 90$; but a $93^\\circ$ angle has no complement, since it is already past $90^\\circ$. Subtracting from $360^\\circ$ gives $267^\\circ$, and $97^\\circ$ is a borrowing slip.',
    },
  ],
  // p4 — vertical angles at a crossing
  [
    {
      q: 'Two lines cross at point $R$. One of the four angles measures $118^\\circ$. What is the measure of the angle directly across from it?',
      choices: ['$62^\\circ$', '$28^\\circ$', '$236^\\circ$', '$118^\\circ$'],
      answer: 3,
      solution:
        'The angle directly across is the vertical twin, and vertical angles are always equal, so it also measures $118^\\circ$. The choice $62^\\circ$ is $180^\\circ - 118^\\circ$, which is the size of each NEIGHBOURING angle, not the one across. The choice $28^\\circ$ uses $90^\\circ$ instead of $180^\\circ$, and $236^\\circ$ doubles the angle.',
    },
    {
      q: 'Two lines cross at point $T$. One of the four angles measures $25^\\circ$. What is the measure of the angle right next to it, on the other side of one of the lines?',
      choices: ['$155^\\circ$', '$25^\\circ$', '$65^\\circ$', '$335^\\circ$'],
      answer: 0,
      solution:
        'A neighbouring angle shares an arm with the $25^\\circ$ angle, and together they lie along a straight line, so they are supplementary: $180^\\circ - 25^\\circ = 155^\\circ$. Check: $25 + 155 = 180$. ✓ The choice $25^\\circ$ answers for the angle ACROSS (the vertical twin) instead of the one next door. The choice $65^\\circ$ uses $90^\\circ$ — the complement rule — and $335^\\circ$ subtracts from a full turn.',
    },
    {
      q: 'Two lines cross at point $K$, making four angles. One of them measures $137^\\circ$. How many of the four angles measure $137^\\circ$?',
      choices: ['$1$', '$2$', '$4$', '$3$'],
      answer: 1,
      solution:
        'The angle across from the $137^\\circ$ angle is its vertical twin, so it is $137^\\circ$ too — that is $2$ angles. The other two are each $180^\\circ - 137^\\circ = 43^\\circ$, and $43 \\ne 137$. Answering $1$ forgets the vertical twin; answering $4$ would need all four angles equal, which happens only when the lines cross at $90^\\circ$; and $3$ is impossible, because the four angles always split into two matching pairs.',
    },
  ],
  // p5 — angles along a straight line
  [
    {
      q: 'Two angles fit together along one side of a straight line. One of them measures $46^\\circ$. What is the other?',
      choices: ['$44^\\circ$', '$314^\\circ$', '$134^\\circ$', '$146^\\circ$'],
      answer: 2,
      solution:
        'Angles along a straight line add to $180^\\circ$, so the other is $180^\\circ - 46^\\circ = 134^\\circ$. Check: $46 + 134 = 180$. ✓ The choice $44^\\circ$ is $90^\\circ - 46^\\circ$, the complement — that would be right only if the two angles made a right angle instead of a straight one. The choice $314^\\circ$ subtracts from a full turn, and $146^\\circ$ is a borrowing slip.',
    },
    {
      q: 'Three angles fit together along one side of a straight line. Two of them measure $55^\\circ$ and $68^\\circ$. What is the third?',
      choices: ['$123^\\circ$', '$237^\\circ$', '$47^\\circ$', '$57^\\circ$'],
      answer: 3,
      solution:
        'The three angles add to $180^\\circ$. The two known ones use $55 + 68 = 123^\\circ$, so the third is $180^\\circ - 123^\\circ = 57^\\circ$. Check: $55 + 68 + 57 = 180$. ✓ The choice $123^\\circ$ stops at the sum of the two known angles. The choice $237^\\circ$ subtracts from $360^\\circ$ — that is the rule for angles all the way around a point, not along a line. The choice $47^\\circ$ is a borrowing slip.',
    },
    {
      q: 'A ramp leans against flat ground. On one side of the ramp the angle with the ground measures $152^\\circ$. What is the angle on the other side?',
      choices: ['$208^\\circ$', '$28^\\circ$', '$38^\\circ$', '$62^\\circ$'],
      answer: 1,
      solution:
        'The ground is a straight line, so the two angles on either side of the ramp add to $180^\\circ$: the other is $180^\\circ - 152^\\circ = 28^\\circ$. Check: $152 + 28 = 180$. ✓ The choice $208^\\circ$ subtracts from $360^\\circ$, and would not even be a normal angle. The choice $62^\\circ$ comes from $152 - 90$, a complement-versus-supplement mix-up, and $38^\\circ$ is a borrowing slip.',
    },
  ],
  // p6 — angles all the way around a point
  [
    {
      q: 'Four angles fit together all the way around a point. Three of them measure $85^\\circ$, $100^\\circ$, and $65^\\circ$. What is the fourth?',
      choices: ['$250^\\circ$', '$175^\\circ$', '$110^\\circ$', '$260^\\circ$'],
      answer: 2,
      solution:
        'A full turn around a point is $360^\\circ$. The three known angles use $85 + 100 + 65 = 250^\\circ$, so the fourth is $360^\\circ - 250^\\circ = 110^\\circ$. Check: $250 + 110 = 360$. ✓ The choice $250^\\circ$ stops at the running total. The choice $175^\\circ$ leaves one of the three angles out of the subtraction ($360 - 85 - 100$), and $260^\\circ$ subtracts only the $100^\\circ$.',
    },
    {
      q: 'Three angles fit together all the way around a point. Two of them measure $128^\\circ$ and $147^\\circ$. What is the third?',
      choices: ['$275^\\circ$', '$232^\\circ$', '$95^\\circ$', '$85^\\circ$'],
      answer: 3,
      solution:
        'The three angles add to $360^\\circ$. The known pair uses $128 + 147 = 275^\\circ$, so the third is $360^\\circ - 275^\\circ = 85^\\circ$. Check: $128 + 147 + 85 = 360$. ✓ The choice $275^\\circ$ is just the sum of the two known angles. The choice $232^\\circ$ subtracts only the $128^\\circ$, and $95^\\circ$ is a borrowing slip in $360 - 275$.',
    },
    {
      q: 'A pinwheel has $5$ equal blades meeting at its centre, and the angles between neighbouring blades fill the space all the way around. What is each of those angles?',
      choices: ['$72^\\circ$', '$36^\\circ$', '$90^\\circ$', '$60^\\circ$'],
      answer: 0,
      solution:
        'All the way around a point is $360^\\circ$, shared equally by $5$ angles: $360^\\circ \\div 5 = 72^\\circ$. Check: $5 \\times 72 = 360$. ✓ The choice $36^\\circ$ divides $180^\\circ$ by $5$ — but $180^\\circ$ is a straight line, only half a turn. The choice $90^\\circ$ divides $360$ by $4$ and $60^\\circ$ divides it by $6$; both count the wrong number of blades.',
    },
  ],
  // p7 — combining the four angles at a crossing
  [
    {
      q: 'Two lines cross at a point, making four angles. One angle measures $52^\\circ$. What is the sum of the other three angles?',
      choices: ['$128^\\circ$', '$308^\\circ$', '$256^\\circ$', '$180^\\circ$'],
      answer: 1,
      solution:
        'The four angles fill a full turn, $360^\\circ$, so the other three add to $360^\\circ - 52^\\circ = 308^\\circ$. The long way agrees: the vertical twin is $52^\\circ$ and each neighbour is $180 - 52 = 128^\\circ$, and $52 + 128 + 128 = 308$. ✓ The choice $128^\\circ$ is just one neighbour, $256^\\circ$ is the two neighbours without the twin, and $180^\\circ$ treats the three remaining angles as a straight line.',
    },
    {
      q: 'Two lines cross at a point, making four angles. One angle measures $74^\\circ$. What is the sum of the two angles that sit next to it (that is, all except the angle directly across)?',
      choices: ['$286^\\circ$', '$106^\\circ$', '$212^\\circ$', '$148^\\circ$'],
      answer: 2,
      solution:
        'Each neighbour is supplementary to the $74^\\circ$ angle: $180^\\circ - 74^\\circ = 106^\\circ$. There are two of them, so the sum is $2 \\times 106^\\circ = 212^\\circ$. Check: the four angles are $74$, $106$, $74$, $106$, and $74 + 106 + 74 + 106 = 360$. ✓ The choice $286^\\circ$ is $360 - 74$, which includes the angle across as well. The choice $106^\\circ$ counts only one neighbour, and $148^\\circ$ doubles $74^\\circ$ instead.',
    },
    {
      q: 'Two lines cross at a point, making four angles. Three of those angles add to $295^\\circ$. What is the fourth angle?',
      choices: ['$115^\\circ$', '$75^\\circ$', '$180^\\circ$', '$65^\\circ$'],
      answer: 3,
      solution:
        'All four angles add to $360^\\circ$, so the fourth is $360^\\circ - 295^\\circ = 65^\\circ$. Check: the four angles must be $65$, $115$, $65$, $115$, and the three that are not the missing one add to $115 + 65 + 115 = 295$. ✓ That is why $115^\\circ$ is so tempting — it really is one of the other angles at the crossing, just not the one asked for. The choice $180^\\circ$ treats the three angles as a straight line, and $75^\\circ$ is a borrowing slip in $360 - 295$.',
    },
  ],
  // p8 — an angle described in terms of its complement or supplement
  [
    {
      q: 'An angle is $36^\\circ$ more than its complement. What is the angle?',
      choices: ['$63^\\circ$', '$27^\\circ$', '$108^\\circ$', '$45^\\circ$'],
      answer: 0,
      solution:
        'Let the complement be $c$, so the angle is $c + 36$ and the pair adds to $90^\\circ$: $c + (c + 36) = 90$. Then $2c = 54$, so $c = 27$ and the angle is $27 + 36 = 63^\\circ$. Check: $63 + 27 = 90$, and $63$ is $36$ more than $27$. ✓ The choice $27^\\circ$ is the complement, not the angle. The choice $108^\\circ$ uses $180^\\circ$ in place of $90^\\circ$ — the supplement rule — and $45^\\circ$ forgets the $36$ and just halves $90$.',
    },
    {
      q: 'An angle is $50^\\circ$ more than its supplement. What is the angle?',
      choices: ['$65^\\circ$', '$115^\\circ$', '$70^\\circ$', '$20^\\circ$'],
      answer: 1,
      solution:
        'Let the supplement be $s$, so the angle is $s + 50$ and $s + (s + 50) = 180$. Then $2s = 130$, so $s = 65$ and the angle is $65 + 50 = 115^\\circ$. Check: $115 + 65 = 180$, and $115 - 65 = 50$. ✓ The choice $65^\\circ$ is the supplement rather than the angle. The choice $70^\\circ$ comes from using $90^\\circ$ instead of $180^\\circ$, which is the complement rule, and $20^\\circ$ is the smaller piece from that same wrong equation.',
    },
    {
      q: 'Two complementary angles differ by $14^\\circ$. What is the SMALLER of the two angles?',
      choices: ['$52^\\circ$', '$83^\\circ$', '$38^\\circ$', '$76^\\circ$'],
      answer: 2,
      solution:
        'Let the smaller be $x$; the larger is $x + 14$, and complementary means they add to $90^\\circ$: $x + (x + 14) = 90$, so $2x = 76$ and $x = 38^\\circ$. Check: $38 + 52 = 90$ and $52 - 38 = 14$. ✓ The choice $52^\\circ$ is the larger angle, not the smaller. The choice $83^\\circ$ solves the same equation with $180^\\circ$, which is the supplementary rule, and $76^\\circ$ stops at $90 - 14$ without halving.',
    },
  ],
  // p9 — an angle that is a multiple of its partner
  [
    {
      q: 'An angle is five times as large as its supplement. What is the angle?',
      choices: ['$30^\\circ$', '$150^\\circ$', '$75^\\circ$', '$36^\\circ$'],
      answer: 1,
      solution:
        'Let the supplement be $s$, so the angle is $5s$ and $s + 5s = 180$. Then $6s = 180$, so $s = 30$ and the angle is $5 \\times 30 = 150^\\circ$. Check: $150 + 30 = 180$, and $150 = 5 \\times 30$. ✓ The choice $30^\\circ$ is the supplement itself. The choice $75^\\circ$ solves $6s = 90$ instead, swapping the supplement rule for the complement rule, and $36^\\circ$ divides $180$ by $5$ instead of by $6$ — the angle and its supplement together make $6$ shares, not $5$.',
    },
    {
      q: 'An angle is twice as large as its complement. What is the angle?',
      choices: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$120^\\circ$'],
      answer: 2,
      solution:
        'Let the complement be $c$, so the angle is $2c$ and $c + 2c = 90$. Then $3c = 90$, so $c = 30$ and the angle is $60^\\circ$. Check: $60 + 30 = 90$, and $60 = 2 \\times 30$. ✓ The choice $30^\\circ$ is the complement, not the angle. The choice $45^\\circ$ divides $90$ by $2$ instead of by $3$, and $120^\\circ$ uses $180^\\circ$ — the supplement rule — which cannot be right here anyway, since a $120^\\circ$ angle is too big to have a complement.',
    },
    {
      q: 'The supplement of an angle is nine times the angle itself. What is the angle?',
      choices: ['$162^\\circ$', '$20^\\circ$', '$9^\\circ$', '$18^\\circ$'],
      answer: 3,
      solution:
        'Let the angle be $x$. Its supplement is $9x$, and the pair adds to $180^\\circ$: $x + 9x = 180$, so $10x = 180$ and $x = 18^\\circ$. Check: the supplement is $9 \\times 18 = 162^\\circ$, and $18 + 162 = 180$. ✓ The choice $162^\\circ$ is the supplement, which is what you get by answering the wrong half of the pair. The choice $20^\\circ$ divides $180$ by $9$ instead of by $10$, and $9^\\circ$ solves $10x = 90$, using the complement total by mistake.',
    },
  ],
  // p10 — vertical angles given as expressions
  [
    {
      q: 'Two lines cross at a point. One pair of vertical angles measures $(2x + 25)^\\circ$ and $(4x - 15)^\\circ$. What is the measure of each of these angles?',
      choices: ['$65^\\circ$', '$20^\\circ$', '$115^\\circ$', '$95^\\circ$'],
      answer: 0,
      solution:
        'Vertical angles are equal, so $2x + 25 = 4x - 15$. Adding $15$ and subtracting $2x$ gives $40 = 2x$, so $x = 20$. The angle is $2(20) + 25 = 65^\\circ$, and the other expression agrees: $4(20) - 15 = 65^\\circ$. ✓ The choice $20^\\circ$ is $x$, which is only a step along the way. The choice $115^\\circ$ is $180 - 65$, the neighbouring angle, and $95^\\circ$ comes from a sign slip when substituting, $4(20) + 15$.',
    },
    {
      q: 'Two lines cross at a point. One pair of vertical angles measures $(4x + 6)^\\circ$ and $(2x + 30)^\\circ$. What is the measure of each of these angles?',
      choices: ['$12^\\circ$', '$102^\\circ$', '$54^\\circ$', '$126^\\circ$'],
      answer: 2,
      solution:
        'Vertical angles are EQUAL, so $4x + 6 = 2x + 30$. Subtracting $2x$ and $6$ gives $2x = 24$, so $x = 12$ and the angle is $4(12) + 6 = 54^\\circ$. Check: $2(12) + 30 = 54^\\circ$. ✓ The choice $102^\\circ$ comes from setting the two expressions SUPPLEMENTARY instead of equal: $6x + 36 = 180$ gives $x = 24$ and $4(24) + 6 = 102$ — but supplementary is the rule for neighbouring angles, not for angles across from each other. The choice $12^\\circ$ is $x$, and $126^\\circ$ is $180 - 54$, the neighbour.',
    },
    {
      q: 'Two lines cross at a point. One angle measures $(7x - 5)^\\circ$, and the angle right next to it along a straight line measures $(3x + 15)^\\circ$. What is the measure of the LARGER of these two angles?',
      choices: ['$17^\\circ$', '$66^\\circ$', '$30^\\circ$', '$114^\\circ$'],
      answer: 3,
      solution:
        'Neighbouring angles along a straight line are supplementary, so $(7x - 5) + (3x + 15) = 180$. That gives $10x + 10 = 180$, so $x = 17$. The angles are $7(17) - 5 = 114^\\circ$ and $3(17) + 15 = 66^\\circ$; check $114 + 66 = 180$. ✓ The larger is $114^\\circ$. The choice $66^\\circ$ is the smaller angle of the pair. The choice $30^\\circ$ comes from setting the two expressions EQUAL, as if they were vertical angles: $7x - 5 = 3x + 15$ gives $x = 5$ and both angles $30^\\circ$, which would add to only $60^\\circ$. The choice $17^\\circ$ is $x$.',
    },
  ],
]

const s102 = [
  // p1 — corresponding angles
  [
    {
      q: 'A transversal crosses two parallel lines. One angle measures $133^\\circ$. What is the measure of its corresponding angle at the other crossing?',
      choices: ['$133^\\circ$', '$47^\\circ$', '$227^\\circ$', '$43^\\circ$'],
      answer: 0,
      solution:
        'Corresponding angles sit in matching positions at the two crossings — the second crossing is a copy of the first, slid along the transversal — so between parallel lines they are EQUAL: $133^\\circ$. The choice $47^\\circ$ is $180 - 133$, which is what a same-side interior pair would give, since those are supplementary rather than equal. The choice $43^\\circ$ uses $133 - 90$, and $227^\\circ$ subtracts from a full turn.',
    },
    {
      q: 'A transversal crosses two parallel lines. One angle measures $84^\\circ$. What is the measure of its corresponding angle at the other crossing?',
      choices: ['$96^\\circ$', '$6^\\circ$', '$84^\\circ$', '$168^\\circ$'],
      answer: 2,
      solution:
        'Corresponding angles between parallel lines are equal, so the answer is $84^\\circ$. The choice $96^\\circ$ is the supplement, $180 - 84$; that is the size of the OTHER family of angles at the crossing, and it is what co-interior angles would give. The choice $6^\\circ$ is the complement, $90 - 84$, and $168^\\circ$ doubles the angle.',
    },
    {
      q: 'A transversal crosses two parallel lines. One angle measures $46^\\circ$, and its corresponding angle at the other crossing measures $(2x)^\\circ$. What is $x$?',
      choices: ['$46$', '$67$', '$134$', '$23$'],
      answer: 3,
      solution:
        'Corresponding angles are equal, so $2x = 46$ and $x = 23$. Check: $2(23) = 46$. ✓ The choice $67$ treats the pair as SUPPLEMENTARY, solving $2x = 180 - 46 = 134$; corresponding angles are equal, not supplementary. The choice $134$ is that supplement itself, and $46$ answers with the angle instead of with $x$.',
    },
  ],
  // p2 — alternate interior angles
  [
    {
      q: 'A transversal crosses two parallel lines. An interior angle measures $39^\\circ$. What is the measure of its alternate interior angle?',
      choices: ['$141^\\circ$', '$51^\\circ$', '$39^\\circ$', '$78^\\circ$'],
      answer: 2,
      solution:
        'Alternate interior angles lie between the parallel lines on opposite sides of the transversal, forming a Z shape, and they are EQUAL: $39^\\circ$. The choice $141^\\circ$ is $180 - 39$ — that is the same-side (co-interior) angle, the pair that really is supplementary. The choice $51^\\circ$ is the complement, $90 - 39$, and $78^\\circ$ doubles the angle.',
    },
    {
      q: 'A transversal crosses two parallel lines. An interior angle measures $126^\\circ$. What is the measure of its alternate interior angle?',
      choices: ['$54^\\circ$', '$126^\\circ$', '$234^\\circ$', '$36^\\circ$'],
      answer: 1,
      solution:
        'Alternate interior angles are equal, so the answer is $126^\\circ$. The choice $54^\\circ$ is $180 - 126$, which belongs to the same-side interior pair, not the alternate pair — mixing those two up is the classic error here. The choice $36^\\circ$ comes from $126 - 90$, and $234^\\circ$ subtracts from $360^\\circ$.',
    },
    {
      q: 'A transversal crosses two parallel lines. A pair of alternate interior angles measures $(5y)^\\circ$ and $85^\\circ$. What is $y$?',
      choices: ['$85$', '$19$', '$36$', '$17$'],
      answer: 3,
      solution:
        'Alternate interior angles are equal, so $5y = 85$ and $y = 17$. Check: $5(17) = 85$. ✓ The choice $19$ comes from treating the pair as supplementary: $5y = 180 - 85 = 95$ gives $y = 19$, but supplementary is the same-side rule, not the alternate rule. The choice $36$ divides $180$ by $5$, and $85$ answers with the angle instead of with $y$.',
    },
  ],
  // p3 — same-side (co-interior) angles
  [
    {
      q: 'A transversal crosses two parallel lines. An interior angle measures $47^\\circ$. What is the measure of the same-side interior angle at the other line?',
      choices: ['$47^\\circ$', '$133^\\circ$', '$43^\\circ$', '$313^\\circ$'],
      answer: 1,
      solution:
        'Same-side interior angles (also called co-interior) form a C shape and are SUPPLEMENTARY: $180^\\circ - 47^\\circ = 133^\\circ$. Check: $47 + 133 = 180$. ✓ The choice $47^\\circ$ treats them as equal, which is the rule for the ALTERNATE interior pair on the opposite side of the transversal. The choice $43^\\circ$ uses $90^\\circ$, and $313^\\circ$ uses $360^\\circ$.',
    },
    {
      q: 'A transversal crosses two parallel lines. An interior angle measures $128^\\circ$. What is the measure of the same-side interior angle at the other line?',
      choices: ['$128^\\circ$', '$38^\\circ$', '$232^\\circ$', '$52^\\circ$'],
      answer: 3,
      solution:
        'Same-side interior angles add to $180^\\circ$, so the other one is $180^\\circ - 128^\\circ = 52^\\circ$. Check: $128 + 52 = 180$. ✓ The choice $128^\\circ$ copies the angle across, which is what you would do for an alternate interior or corresponding pair — those are the equal ones. The choice $38^\\circ$ subtracts from $90^\\circ$ instead of $180^\\circ$, and $232^\\circ$ subtracts from $360^\\circ$.',
    },
    {
      q: 'A transversal crosses two parallel lines. Two same-side interior angles measure $(2x + 10)^\\circ$ and $(3x)^\\circ$. What is $x$?',
      choices: ['$34$', '$10$', '$16$', '$36$'],
      answer: 0,
      solution:
        'Same-side interior angles are supplementary, so $(2x + 10) + 3x = 180$. That gives $5x + 10 = 180$, so $5x = 170$ and $x = 34$. Check: the angles are $2(34) + 10 = 78^\\circ$ and $3(34) = 102^\\circ$, and $78 + 102 = 180$. ✓ The choice $10$ sets the two expressions EQUAL, as if they were alternate interior angles. The choice $16$ uses $90^\\circ$ as the total instead of $180^\\circ$, and $36$ drops the $+10$ and solves $5x = 180$.',
    },
  ],
  // p4 — counting the eight angles
  [
    {
      q: 'A transversal crosses two parallel lines, making eight angles. One angle measures $105^\\circ$. How many of the eight angles (including that one) measure $105^\\circ$?',
      choices: ['$1$', '$2$', '$8$', '$4$'],
      answer: 3,
      solution:
        'The eight angles come in only two sizes, $105^\\circ$ and $180^\\circ - 105^\\circ = 75^\\circ$. At each crossing a vertical pair measures $105^\\circ$, and the second crossing is a corresponding copy of the first, so $2 + 2 = 4$ angles measure $105^\\circ$. Answering $2$ counts only the crossing you started at; answering $1$ forgets the vertical twin; answering $8$ would need all eight equal, which happens only when the transversal is perpendicular to the parallel lines.',
    },
    {
      q: 'A transversal crosses two parallel lines, making eight angles. One angle measures $72^\\circ$. How many of the eight angles measure $108^\\circ$?',
      choices: ['$4$', '$2$', '$0$', '$8$'],
      answer: 0,
      solution:
        'Since $180^\\circ - 72^\\circ = 108^\\circ$, the two sizes present are $72^\\circ$ and $108^\\circ$, and each size appears four times — twice at each crossing. So $4$ angles measure $108^\\circ$. Answering $0$ assumes only the given size appears; answering $2$ counts just one crossing; and answering $8$ would make every angle $108^\\circ$, which cannot happen unless all eight are $90^\\circ$.',
    },
    {
      q: 'A transversal crosses two parallel lines, making eight angles. Four of them measure $143^\\circ$. What do the other four measure?',
      choices: ['$143^\\circ$', '$37^\\circ$', '$53^\\circ$', '$217^\\circ$'],
      answer: 1,
      solution:
        'The eight angles come in two sizes that add to $180^\\circ$, so the other size is $180^\\circ - 143^\\circ = 37^\\circ$. Check: $143 + 37 = 180$. ✓ The choice $143^\\circ$ assumes all eight are the same, which would need a perpendicular transversal and $90^\\circ$ everywhere. The choice $53^\\circ$ uses $143 - 90$, a complement-for-supplement swap, and $217^\\circ$ subtracts from $360^\\circ$.',
    },
  ],
  // p5 — the two sizes of the eight angles
  [
    {
      q: 'A transversal crosses two parallel lines. One of the eight angles measures $29^\\circ$. What do each of the obtuse angles measure?',
      choices: ['$151^\\circ$', '$61^\\circ$', '$29^\\circ$', '$331^\\circ$'],
      answer: 0,
      solution:
        'The two sizes add to $180^\\circ$, so the obtuse size is $180^\\circ - 29^\\circ = 151^\\circ$. Check: $29 + 151 = 180$, and $151$ is between $90$ and $180$, so it really is obtuse. ✓ The choice $61^\\circ$ uses $90^\\circ - 29^\\circ$ — that is the complement rule, and it does not even give an obtuse angle. The choice $29^\\circ$ repeats the acute size, and $331^\\circ$ subtracts from a full turn.',
    },
    {
      q: 'A transversal crosses two parallel lines. One of the eight angles measures $154^\\circ$. What do each of the acute angles measure?',
      choices: ['$154^\\circ$', '$26^\\circ$', '$64^\\circ$', '$36^\\circ$'],
      answer: 1,
      solution:
        'The two sizes are supplementary, so the acute size is $180^\\circ - 154^\\circ = 26^\\circ$. Check: $154 + 26 = 180$, and $26 < 90$, so it is acute. ✓ The choice $64^\\circ$ comes from $154 - 90$, using the complement rule where the supplement rule belongs. The choice $154^\\circ$ repeats the obtuse size, which is not acute at all, and $36^\\circ$ is a borrowing slip.',
    },
    {
      q: 'A transversal crosses two parallel lines. One of the eight angles measures $65^\\circ$. By how much does the obtuse size exceed the acute size?',
      choices: ['$180^\\circ$', '$40^\\circ$', '$50^\\circ$', '$115^\\circ$'],
      answer: 2,
      solution:
        'The two sizes are $65^\\circ$ and $180^\\circ - 65^\\circ = 115^\\circ$, so the obtuse size exceeds the acute one by $115 - 65 = 50^\\circ$. ✓ The choice $115^\\circ$ is the obtuse size itself, not the difference. The choice $180^\\circ$ adds the two sizes instead of subtracting. The choice $40^\\circ$ comes from using the complement rule to get the second size, $90 - 65 = 25$, and then $65 - 25 = 40$.',
    },
  ],
  // p6 — parallel lines in a real setting
  [
    {
      q: 'Two parallel fences are crossed by a straight footpath. The path makes a $143^\\circ$ angle with the first fence. What acute angle does the path make with the second fence?',
      choices: ['$143^\\circ$', '$47^\\circ$', '$37^\\circ$', '$53^\\circ$'],
      answer: 2,
      solution:
        'At the first fence the path makes angles of $143^\\circ$ and $180^\\circ - 143^\\circ = 37^\\circ$. The second fence is parallel, so its crossing is a corresponding copy with the same two sizes. The acute one is $37^\\circ$. The choice $143^\\circ$ gives the obtuse angle instead of the acute one. The choice $53^\\circ$ is $143 - 90$, using the complement rule, and $47^\\circ$ is a borrowing slip.',
    },
    {
      q: 'Two parallel railway tracks are crossed by a straight road. The road makes a $108^\\circ$ angle with the first track. What acute angle does the road make with the second track?',
      choices: ['$72^\\circ$', '$108^\\circ$', '$18^\\circ$', '$252^\\circ$'],
      answer: 0,
      solution:
        'The two sizes at either crossing add to $180^\\circ$: here $108^\\circ$ and $180^\\circ - 108^\\circ = 72^\\circ$. Because the tracks are parallel, both sizes appear at the second crossing too, and the acute one is $72^\\circ$. The choice $108^\\circ$ is the obtuse angle. The choice $18^\\circ$ is $108 - 90$, a complement-for-supplement swap, and $252^\\circ$ subtracts from a full turn.',
    },
    {
      q: 'Two parallel canal banks are crossed by a straight bridge. The bridge makes a $55^\\circ$ angle with the first bank. What obtuse angle does the bridge make with the second bank?',
      choices: ['$55^\\circ$', '$35^\\circ$', '$305^\\circ$', '$125^\\circ$'],
      answer: 3,
      solution:
        'At each crossing the two sizes are $55^\\circ$ and $180^\\circ - 55^\\circ = 125^\\circ$, and the parallel banks make the two crossings copies of each other. The obtuse angle — the one between $90^\\circ$ and $180^\\circ$ — is $125^\\circ$. The choice $55^\\circ$ is the acute copy, which the corresponding-angle rule gives but which is not what was asked. The choice $35^\\circ$ is the complement, $90 - 55$, and $305^\\circ$ subtracts from $360^\\circ$.',
    },
  ],
  // p7 — corresponding angles as expressions
  [
    {
      q: 'A transversal crosses two parallel lines. A pair of corresponding angles measures $(3x + 12)^\\circ$ and $63^\\circ$. What is $x$?',
      choices: ['$35$', '$17$', '$25$', '$63$'],
      answer: 1,
      solution:
        'Corresponding angles are equal, so $3x + 12 = 63$. Subtracting $12$ gives $3x = 51$, so $x = 17$. Check: $3(17) + 12 = 63$. ✓ The choice $35$ treats the pair as supplementary, solving $3x + 12 = 180 - 63 = 117$; but corresponding angles are equal, and only same-side interior angles are supplementary. The choice $25$ adds the $12$ instead of subtracting it, $(63 + 12) \\div 3$, and $63$ answers with the angle rather than with $x$.',
    },
    {
      q: 'A transversal crosses two parallel lines. A pair of corresponding angles measures $(4x)^\\circ$ and $(2x + 36)^\\circ$. What is the measure of each of these angles?',
      choices: ['$18^\\circ$', '$96^\\circ$', '$72^\\circ$', '$108^\\circ$'],
      answer: 2,
      solution:
        'Corresponding angles are equal, so $4x = 2x + 36$, giving $2x = 36$ and $x = 18$. The angle is $4(18) = 72^\\circ$, and the other expression agrees: $2(18) + 36 = 72^\\circ$. ✓ The choice $18^\\circ$ is $x$, a step and not the answer. The choice $96^\\circ$ comes from setting the pair supplementary: $6x + 36 = 180$ gives $x = 24$ and $4(24) = 96$ — the wrong rule for a corresponding pair. The choice $108^\\circ$ is $180 - 72$, the other size at the crossing.',
    },
    {
      q: 'A transversal crosses two parallel lines. A pair of corresponding angles measures $(2x + 15)^\\circ$ and $(x + 45)^\\circ$. What is $x$?',
      choices: ['$75$', '$40$', '$105$', '$30$'],
      answer: 3,
      solution:
        'Corresponding angles are equal, so $2x + 15 = x + 45$. Subtracting $x$ and $15$ gives $x = 30$. Check: $2(30) + 15 = 75$ and $30 + 45 = 75$, the same angle. ✓ The choice $40$ comes from making the pair supplementary: $3x + 60 = 180$ gives $x = 40$, which is the co-interior rule applied to a corresponding pair. The choice $75$ is the angle rather than $x$, and $105$ is $180 - 75$.',
    },
  ],
  // p8 — same-side interior angles as expressions
  [
    {
      q: 'A transversal crosses two parallel lines. Two same-side interior angles measure $(2x)^\\circ$ and $(x + 30)^\\circ$. What is the measure of the SMALLER angle?',
      choices: ['$80^\\circ$', '$100^\\circ$', '$50^\\circ$', '$60^\\circ$'],
      answer: 0,
      solution:
        'Same-side interior angles are supplementary: $2x + (x + 30) = 180$, so $3x = 150$ and $x = 50$. The angles are $2(50) = 100^\\circ$ and $50 + 30 = 80^\\circ$; check $100 + 80 = 180$. ✓ The smaller is $80^\\circ$. The choice $100^\\circ$ is the larger angle, and $50^\\circ$ is $x$. The choice $60^\\circ$ comes from setting the expressions EQUAL, as if they were alternate interior angles: $2x = x + 30$ gives $x = 30$ and both angles $60^\\circ$, which would add to only $120^\\circ$.',
    },
    {
      q: 'A transversal crosses two parallel lines. Two same-side interior angles measure $(4x + 10)^\\circ$ and $(x + 20)^\\circ$. What is the measure of the LARGER angle?',
      choices: ['$30^\\circ$', '$130^\\circ$', '$50^\\circ$', '$58^\\circ$'],
      answer: 1,
      solution:
        'Co-interior angles add to $180^\\circ$: $(4x + 10) + (x + 20) = 180$, so $5x + 30 = 180$, giving $5x = 150$ and $x = 30$. The angles are $4(30) + 10 = 130^\\circ$ and $30 + 20 = 50^\\circ$; check $130 + 50 = 180$. ✓ The larger is $130^\\circ$. The choice $50^\\circ$ is the smaller angle and $30^\\circ$ is $x$. The choice $58^\\circ$ comes from using $90^\\circ$ as the total, $5x + 30 = 90$, which gives $x = 12$ and $4(12) + 10 = 58$.',
    },
    {
      q: 'A transversal crosses two parallel lines. Two same-side interior angles measure $(5x - 15)^\\circ$ and $(3x + 35)^\\circ$. What is the measure of the LARGER angle?',
      choices: ['$85^\\circ$', '$20^\\circ$', '$95^\\circ$', '$110^\\circ$'],
      answer: 2,
      solution:
        'Same-side interior angles are supplementary: $(5x - 15) + (3x + 35) = 180$, so $8x + 20 = 180$, giving $8x = 160$ and $x = 20$. The angles are $5(20) - 15 = 85^\\circ$ and $3(20) + 35 = 95^\\circ$; check $85 + 95 = 180$. ✓ The larger is $95^\\circ$. The choice $85^\\circ$ is the smaller angle and $20^\\circ$ is $x$. The choice $110^\\circ$ comes from setting the two expressions equal — the alternate-interior rule — which gives $2x = 50$, $x = 25$, and $5(25) - 15 = 110$.',
    },
  ],
  // p9 — alternate interior angles as expressions
  [
    {
      q: 'A transversal crosses two parallel lines. A pair of alternate interior angles measures $(7x - 12)^\\circ$ and $(4x + 15)^\\circ$. What is the measure of each of these angles?',
      choices: ['$51^\\circ$', '$9^\\circ$', '$129^\\circ$', '$63^\\circ$'],
      answer: 0,
      solution:
        'Alternate interior angles are equal, so $7x - 12 = 4x + 15$. Subtracting $4x$ and adding $12$ gives $3x = 27$, so $x = 9$ and the angle is $7(9) - 12 = 51^\\circ$. Check: $4(9) + 15 = 51^\\circ$. ✓ The choice $9^\\circ$ is $x$, not the angle. The choice $129^\\circ$ is $180 - 51$, which is the same-side interior angle — the supplementary partner, not the alternate one. The choice $63^\\circ$ is $7(9)$ with the $-12$ dropped.',
    },
    {
      q: 'A transversal crosses two parallel lines. A pair of alternate interior angles measures $(6x + 5)^\\circ$ and $(2x + 45)^\\circ$. What is the measure of each of these angles?',
      choices: ['$10^\\circ$', '$115^\\circ$', '$65^\\circ$', '$60^\\circ$'],
      answer: 2,
      solution:
        'Alternate interior angles are equal: $6x + 5 = 2x + 45$, so $4x = 40$ and $x = 10$. The angle is $6(10) + 5 = 65^\\circ$, and $2(10) + 45 = 65^\\circ$ agrees. ✓ The choice $10^\\circ$ is $x$. The choice $115^\\circ$ is $180 - 65$, which would be right only for a same-side interior partner, since those are supplementary while alternate interior angles are equal. The choice $60^\\circ$ is $6(10)$ with the $+5$ forgotten.',
    },
    {
      q: 'A transversal crosses two parallel lines. A pair of alternate interior angles measures $(3x + 22)^\\circ$ and $(x + 58)^\\circ$. What is the measure of each of these angles?',
      choices: ['$18^\\circ$', '$104^\\circ$', '$97^\\circ$', '$76^\\circ$'],
      answer: 3,
      solution:
        'Alternate interior angles are equal, so $3x + 22 = x + 58$. That gives $2x = 36$, so $x = 18$ and the angle is $3(18) + 22 = 76^\\circ$. Check: $18 + 58 = 76^\\circ$. ✓ The choice $18^\\circ$ is $x$. The choice $97^\\circ$ comes from treating the equal pair as supplementary: $4x + 80 = 180$ gives $x = 25$ and $3(25) + 22 = 97$. The choice $104^\\circ$ is $180 - 76$, the co-interior partner of the correct angle.',
    },
  ],
  // p10 — a zigzag path between two parallel lines
  [
    {
      q: 'Lines $m$ and $n$ are parallel. A path starts on line $m$, goes to a point $P$ between the two lines, turns, and continues to line $n$. The first part makes a $28^\\circ$ angle with line $m$, and the second part makes a $54^\\circ$ angle with line $n$. What is the angle of the turn at $P$?',
      choices: ['$26^\\circ$', '$98^\\circ$', '$82^\\circ$', '$180^\\circ$'],
      answer: 2,
      solution:
        'Draw a helper line through $P$ parallel to both $m$ and $n$. It cuts the angle at $P$ into two pieces, and each piece is an alternate interior angle with one of the path angles — alternate interior angles are equal, so the pieces are $28^\\circ$ and $54^\\circ$. The turn is $28 + 54 = 82^\\circ$. The choice $26^\\circ$ subtracts the two angles instead of adding them. The choice $98^\\circ$ is $180 - 82$, the angle on the other side of the path, and $180^\\circ$ would mean the path never turns at all.',
    },
    {
      q: 'Lines $m$ and $n$ are parallel. A path leaves line $m$ at a $62^\\circ$ angle, turns at a point $P$ between the lines, and reaches line $n$ at a $40^\\circ$ angle. What is the angle of the turn at $P$?',
      choices: ['$22^\\circ$', '$102^\\circ$', '$78^\\circ$', '$118^\\circ$'],
      answer: 1,
      solution:
        'The helper line through $P$ parallel to $m$ and $n$ splits the angle at $P$ into two alternate interior pieces, equal to $62^\\circ$ and $40^\\circ$. So the turn measures $62 + 40 = 102^\\circ$. The choice $22^\\circ$ is the difference rather than the sum. The choice $78^\\circ$ is $180 - 102$, and $118^\\circ$ is $180 - 62$, which uses the straight-line rule on just one of the two given angles.',
    },
    {
      q: 'Lines $m$ and $n$ are parallel. A path leaves line $m$ at a $42^\\circ$ angle, turns at a point $P$ between the lines, and reaches line $n$. The turn at $P$ measures $95^\\circ$. What angle does the second part of the path make with line $n$?',
      choices: ['$137^\\circ$', '$85^\\circ$', '$48^\\circ$', '$53^\\circ$'],
      answer: 3,
      solution:
        'The helper line through $P$ parallel to both lines splits the $95^\\circ$ turn into two alternate interior pieces, one matching each path angle. One piece is $42^\\circ$, so the other is $95^\\circ - 42^\\circ = 53^\\circ$, and that is the angle at line $n$. Check: $42 + 53 = 95$. ✓ The choice $137^\\circ$ adds when it should subtract — that is the forward version of the problem run backwards by mistake. The choice $85^\\circ$ is $180 - 95$, and $48^\\circ$ is the complement $90 - 42$.',
    },
  ],
]

const s103 = [
  // p1 — the third angle of a triangle
  [
    {
      q: 'In triangle $PQR$, angle $P = 48^\\circ$ and angle $Q = 71^\\circ$. What is angle $R$?',
      choices: ['$241^\\circ$', '$119^\\circ$', '$61^\\circ$', '$71^\\circ$'],
      answer: 2,
      solution:
        'The three angles of a triangle add to $180^\\circ$. Since $48 + 71 = 119$, angle $R = 180^\\circ - 119^\\circ = 61^\\circ$. Check: $48 + 71 + 61 = 180$. ✓ The choice $119^\\circ$ stops at the sum of the two known angles. The choice $241^\\circ$ subtracts from $360^\\circ$, which is the quadrilateral total, not the triangle one, and $71^\\circ$ just repeats angle $Q$.',
    },
    {
      q: 'In triangle $DEF$, angle $D = 27^\\circ$ and angle $F = 105^\\circ$. What is angle $E$?',
      choices: ['$132^\\circ$', '$48^\\circ$', '$228^\\circ$', '$78^\\circ$'],
      answer: 1,
      solution:
        'The angles add to $180^\\circ$, and $27 + 105 = 132$, so angle $E = 180^\\circ - 132^\\circ = 48^\\circ$. Check: $27 + 105 + 48 = 180$. ✓ The choice $132^\\circ$ is the sum of the two known angles. The choice $228^\\circ$ uses $360^\\circ$ as the total, a quadrilateral rule in a triangle, and $78^\\circ$ subtracts the two known angles from each other, $105 - 27$.',
    },
    {
      q: 'Two angles of a triangle each measure $39^\\circ$. What is the third angle?',
      choices: ['$78^\\circ$', '$282^\\circ$', '$141^\\circ$', '$102^\\circ$'],
      answer: 3,
      solution:
        'The two given angles use $39 + 39 = 78^\\circ$, so the third is $180^\\circ - 78^\\circ = 102^\\circ$. Check: $39 + 39 + 102 = 180$. ✓ The choice $78^\\circ$ is the sum of the two given angles rather than what is left over. The choice $141^\\circ$ subtracts only one of them, $180 - 39$, forgetting there are two. The choice $282^\\circ$ uses $360^\\circ$ as the total.',
    },
  ],
  // p2 — the two acute angles of a right triangle
  [
    {
      q: 'A right triangle has one acute angle measuring $61^\\circ$. What is the other acute angle?',
      choices: ['$29^\\circ$', '$119^\\circ$', '$39^\\circ$', '$61^\\circ$'],
      answer: 0,
      solution:
        'The right angle takes $90^\\circ$, leaving $180^\\circ - 90^\\circ = 90^\\circ$ for the two acute angles — they are complementary. So the other is $90^\\circ - 61^\\circ = 29^\\circ$. Check: $90 + 61 + 29 = 180$. ✓ The choice $119^\\circ$ subtracts from $180^\\circ$ and forgets the right angle entirely; it is not even acute. The choice $39^\\circ$ is a borrowing slip, and $61^\\circ$ assumes the two acute angles match, which happens only when each is $45^\\circ$.',
    },
    {
      q: 'A right triangle has one acute angle measuring $17^\\circ$. What is the other acute angle?',
      choices: ['$163^\\circ$', '$83^\\circ$', '$17^\\circ$', '$73^\\circ$'],
      answer: 3,
      solution:
        'The two acute angles of a right triangle are complementary, since the right angle already uses $90^\\circ$ of the $180^\\circ$. So the other is $90^\\circ - 17^\\circ = 73^\\circ$. Check: $90 + 17 + 73 = 180$. ✓ The choice $163^\\circ$ is $180 - 17$, which forgets the right angle and gives an obtuse angle — impossible in a triangle that already has a right angle. The choice $83^\\circ$ subtracts from $100$, and $17^\\circ$ assumes the acute angles are equal.',
    },
    {
      q: 'In a right triangle the two acute angles are equal. How large is each of them?',
      choices: ['$90^\\circ$', '$60^\\circ$', '$45^\\circ$', '$30^\\circ$'],
      answer: 2,
      solution:
        'The right angle uses $90^\\circ$, so the two acute angles share the remaining $180^\\circ - 90^\\circ = 90^\\circ$ equally: each is $90^\\circ \\div 2 = 45^\\circ$. Check: $90 + 45 + 45 = 180$. ✓ The choice $60^\\circ$ splits the whole $180^\\circ$ three ways, which describes an equilateral triangle and leaves no room for the right angle. The choice $30^\\circ$ splits $90^\\circ$ three ways, and $90^\\circ$ would give a triangle with three right angles.',
    },
  ],
  // p3 — the fourth angle of a quadrilateral
  [
    {
      q: 'Three angles of a quadrilateral measure $72^\\circ$, $118^\\circ$, and $65^\\circ$. What is the fourth angle?',
      choices: ['$255^\\circ$', '$105^\\circ$', '$288^\\circ$', '$115^\\circ$'],
      answer: 1,
      solution:
        'A quadrilateral splits into $2$ triangles, so its angles add to $2 \\times 180^\\circ = 360^\\circ$. The three known angles total $72 + 118 + 65 = 255$, so the fourth is $360^\\circ - 255^\\circ = 105^\\circ$. Check: $255 + 105 = 360$. ✓ The choice $255^\\circ$ stops at the running total. The choice $288^\\circ$ subtracts only the $72^\\circ$, and $115^\\circ$ comes from subtracting $250$ and then adding the extra $5$ back instead of taking it away.',
    },
    {
      q: 'Three of the four angles of a quadrilateral are equal, each measuring $105^\\circ$. What is the fourth angle?',
      choices: ['$315^\\circ$', '$105^\\circ$', '$75^\\circ$', '$45^\\circ$'],
      answer: 3,
      solution:
        'The four angles add to $360^\\circ$. The three equal ones use $3 \\times 105 = 315^\\circ$, so the fourth is $360^\\circ - 315^\\circ = 45^\\circ$. Check: $105 + 105 + 105 + 45 = 360$. ✓ The choice $315^\\circ$ is the running total. The choice $105^\\circ$ assumes all four angles are equal, which would need each to be $90^\\circ$. The choice $75^\\circ$ is $180 - 105$, using the straight-line rule instead of the quadrilateral total.',
    },
    {
      q: 'A quadrilateral has two right angles, and a third angle measuring $58^\\circ$. What is the fourth angle?',
      choices: ['$122^\\circ$', '$238^\\circ$', '$32^\\circ$', '$212^\\circ$'],
      answer: 0,
      solution:
        'The four angles add to $360^\\circ$, and the three known ones use $90 + 90 + 58 = 238^\\circ$, so the fourth is $360^\\circ - 238^\\circ = 122^\\circ$. Check: $90 + 90 + 58 + 122 = 360$. ✓ The choice $238^\\circ$ is the running total. The choice $212^\\circ$ subtracts only one of the two right angles, and $32^\\circ$ is the complement $90 - 58$, which answers a completely different question.',
    },
  ],
  // p4 — the interior angle sum of a polygon
  [
    {
      q: 'What is the sum of the interior angles of a heptagon (seven sides)?',
      choices: ['$900^\\circ$', '$1260^\\circ$', '$1080^\\circ$', '$360^\\circ$'],
      answer: 0,
      solution:
        'Diagonals from one vertex cut a heptagon into $7 - 2 = 5$ triangles, so the sum is $5 \\times 180^\\circ = 900^\\circ$. The choice $1260^\\circ$ uses $n$ instead of $n - 2$: $7 \\times 180$. The choice $1080^\\circ$ uses $n - 1$, one triangle too many. The choice $360^\\circ$ is the total of the EXTERIOR angles, which really is $360^\\circ$ for every polygon — but that is a different total.',
    },
    {
      q: 'What is the sum of the interior angles of a decagon (ten sides)?',
      choices: ['$1800^\\circ$', '$360^\\circ$', '$1440^\\circ$', '$1620^\\circ$'],
      answer: 2,
      solution:
        'A decagon cuts into $10 - 2 = 8$ triangles, so the sum is $8 \\times 180^\\circ = 1440^\\circ$. The choice $1800^\\circ$ multiplies by $n$ rather than $n - 2$. The choice $1620^\\circ$ uses $n - 1 = 9$ triangles. The choice $360^\\circ$ is the exterior-angle total, which is $360^\\circ$ no matter how many sides the polygon has.',
    },
    {
      q: 'What is the sum of the interior angles of a hexagon (six sides)?',
      choices: ['$1080^\\circ$', '$720^\\circ$', '$900^\\circ$', '$360^\\circ$'],
      answer: 1,
      solution:
        'A hexagon splits into $6 - 2 = 4$ triangles from one vertex, so the sum is $4 \\times 180^\\circ = 720^\\circ$. The choice $1080^\\circ$ multiplies $180$ by $6$, using $n$ where $n - 2$ belongs. The choice $900^\\circ$ uses $5$ triangles, one too many. The choice $360^\\circ$ is a quadrilateral\'s total, and also the exterior-angle total for every polygon.',
    },
  ],
  // p5 — the exterior angle of a triangle
  [
    {
      q: 'In triangle $ABC$, angle $A = 48^\\circ$ and angle $B = 57^\\circ$. Side $BC$ is extended past $C$ to a point $D$. What is the measure of angle $ACD$?',
      choices: ['$75^\\circ$', '$132^\\circ$', '$105^\\circ$', '$123^\\circ$'],
      answer: 2,
      solution:
        'An exterior angle equals the sum of the two remote interior angles: angle $ACD = 48^\\circ + 57^\\circ = 105^\\circ$. Check the long way: angle $ACB = 180 - 48 - 57 = 75^\\circ$, and $180 - 75 = 105^\\circ$. ✓ The choice $75^\\circ$ is the INTERIOR angle at $C$, the one next door along the straight line $BCD$. The choice $132^\\circ$ is $180 - 48$ and $123^\\circ$ is $180 - 57$; each uses only one of the two remote angles.',
    },
    {
      q: 'In triangle $ABC$, angle $A = 72^\\circ$ and angle $B = 53^\\circ$. Side $BC$ is extended past $C$ to a point $D$. What is the measure of angle $ACD$?',
      choices: ['$55^\\circ$', '$125^\\circ$', '$108^\\circ$', '$127^\\circ$'],
      answer: 1,
      solution:
        'The exterior angle at $C$ equals the sum of the two remote interior angles: $72^\\circ + 53^\\circ = 125^\\circ$. Check: angle $ACB = 180 - 72 - 53 = 55^\\circ$, and $55 + 125 = 180$ along the straight line $BCD$. ✓ The choice $55^\\circ$ is that interior angle at $C$, not the exterior one. The choice $108^\\circ$ is $180 - 72$ and $127^\\circ$ is $180 - 53$, each leaving one remote angle out.',
    },
    {
      q: 'In triangle $ABC$, side $BC$ is extended past $C$ to a point $D$, and angle $ACD = 118^\\circ$. If angle $A = 46^\\circ$, what is angle $B$?',
      choices: ['$62^\\circ$', '$164^\\circ$', '$134^\\circ$', '$72^\\circ$'],
      answer: 3,
      solution:
        'The exterior angle equals the sum of the two remote interior angles, so $118 = 46 + \\angle B$, giving $\\angle B = 118 - 46 = 72^\\circ$. Check the long way: angle $ACB = 180 - 118 = 62^\\circ$, and $180 - 62 - 46 = 72^\\circ$. ✓ The choice $62^\\circ$ is the interior angle at $C$. The choice $164^\\circ$ adds instead of subtracting, and $134^\\circ$ is $180 - 46$, which uses the straight-line rule on the wrong angle.',
    },
  ],
  // p6 — each interior angle of a regular polygon
  [
    {
      q: 'What is the measure of each interior angle of a regular dodecagon (twelve sides)?',
      choices: ['$150^\\circ$', '$30^\\circ$', '$180^\\circ$', '$330^\\circ$'],
      answer: 0,
      solution:
        'Each exterior angle is $360^\\circ \\div 12 = 30^\\circ$, so each interior angle is $180^\\circ - 30^\\circ = 150^\\circ$. The long way agrees: $(12 - 2) \\cdot 180^\\circ = 1800^\\circ$, and $1800 \\div 12 = 150$. ✓ The choice $30^\\circ$ gives the exterior angle instead of the interior one. The choice $180^\\circ$ uses $n$ in place of $n - 2$, giving $12 \\times 180 \\div 12$ — and an interior angle of exactly $180^\\circ$ would be a flat corner, not a corner at all. The choice $330^\\circ$ subtracts the exterior angle from $360^\\circ$ instead of from $180^\\circ$.',
    },
    {
      q: 'What is the measure of each interior angle of a regular pentagon (five sides)?',
      choices: ['$72^\\circ$', '$144^\\circ$', '$108^\\circ$', '$180^\\circ$'],
      answer: 2,
      solution:
        'The interior angles add to $(5 - 2) \\cdot 180^\\circ = 540^\\circ$, shared equally among $5$ angles: $540 \\div 5 = 108^\\circ$. Quick check: each exterior angle is $360 \\div 5 = 72^\\circ$, and $180 - 72 = 108$. ✓ The choice $72^\\circ$ is that exterior angle. The choice $144^\\circ$ uses $n - 1 = 4$ triangles, giving $720 \\div 5$. The choice $180^\\circ$ uses $n$ instead of $n - 2$.',
    },
    {
      q: 'What is the measure of each interior angle of a regular nonagon (nine sides)?',
      choices: ['$40^\\circ$', '$180^\\circ$', '$160^\\circ$', '$140^\\circ$'],
      answer: 3,
      solution:
        'Each exterior angle is $360^\\circ \\div 9 = 40^\\circ$, so each interior angle is $180^\\circ - 40^\\circ = 140^\\circ$. The long way agrees: $(9 - 2) \\cdot 180^\\circ = 1260^\\circ$ and $1260 \\div 9 = 140$. ✓ The choice $40^\\circ$ is the exterior angle. The choice $160^\\circ$ uses $n - 1 = 8$ triangles, $1440 \\div 9$. The choice $180^\\circ$ uses $n$ rather than $n - 2$, and no real corner can measure $180^\\circ$.',
    },
  ],
  // p7 — isosceles triangles
  [
    {
      q: 'An isosceles triangle has a vertex angle of $36^\\circ$, and its two base angles are equal. What is each base angle?',
      choices: ['$144^\\circ$', '$27^\\circ$', '$72^\\circ$', '$108^\\circ$'],
      answer: 2,
      solution:
        'The two base angles share what is left of $180^\\circ$: $180^\\circ - 36^\\circ = 144^\\circ$, so each is $144 \\div 2 = 72^\\circ$. Check: $36 + 72 + 72 = 180$. ✓ The choice $144^\\circ$ is the total for both base angles, not each one. The choice $27^\\circ$ uses $90^\\circ$ in place of $180^\\circ$, $(90 - 36) \\div 2$. The choice $108^\\circ$ treats $36^\\circ$ as a base angle instead of the vertex angle, which would make the vertex $180 - 72 = 108^\\circ$.',
    },
    {
      q: 'An isosceles triangle has two equal base angles of $57^\\circ$ each. What is its vertex angle?',
      choices: ['$123^\\circ$', '$66^\\circ$', '$33^\\circ$', '$114^\\circ$'],
      answer: 1,
      solution:
        'The two base angles use $2 \\times 57 = 114^\\circ$, so the vertex angle is $180^\\circ - 114^\\circ = 66^\\circ$. Check: $57 + 57 + 66 = 180$. ✓ The choice $123^\\circ$ subtracts only one base angle, $180 - 57$, forgetting that there are two of them. The choice $114^\\circ$ stops at the base-angle total, and $33^\\circ$ is the complement $90 - 57$.',
    },
    {
      q: 'An isosceles triangle has a vertex angle of $96^\\circ$, and its two base angles are equal. What is each base angle?',
      choices: ['$84^\\circ$', '$48^\\circ$', '$96^\\circ$', '$42^\\circ$'],
      answer: 3,
      solution:
        'What is left for the two base angles is $180^\\circ - 96^\\circ = 84^\\circ$, so each is $84 \\div 2 = 42^\\circ$. Check: $96 + 42 + 42 = 180$. ✓ The choice $84^\\circ$ forgets to halve, and would make the angles add to $96 + 84 + 84 = 264$. The choice $48^\\circ$ halves the vertex angle instead of the leftover, and $96^\\circ$ would give three angles well over $180^\\circ$ in total.',
    },
  ],
  // p8 — working back from an interior angle sum
  [
    {
      q: 'The interior angles of a polygon add to $1440^\\circ$. How many sides does it have?',
      choices: ['$8$', '$6$', '$16$', '$10$'],
      answer: 3,
      solution:
        'The sum is $(n - 2) \\cdot 180^\\circ$, so $n - 2 = 1440 \\div 180 = 8$, which gives $n = 10$. Check: $(10 - 2) \\cdot 180 = 1440$. ✓ The choice $8$ forgets to add the $2$ back. The choice $6$ divides by $360$ instead of $180$ — $360^\\circ$ is the exterior total, not one triangle. The choice $16$ divides by $90$.',
    },
    {
      q: 'The interior angles of a polygon add to $900^\\circ$. How many sides does it have?',
      choices: ['$7$', '$5$', '$3$', '$12$'],
      answer: 0,
      solution:
        'Since $900 \\div 180 = 5$, the polygon splits into $5$ triangles, so $n - 2 = 5$ and $n = 7$. Check: $(7 - 2) \\cdot 180 = 900$. ✓ The choice $5$ is the triangle count with the $2$ never added back. The choice $3$ subtracts the $2$ instead of adding it, and $12$ divides $900$ by $90$ rather than $180$.',
    },
    {
      q: 'The interior angles of a polygon add to $1260^\\circ$. How many sides does it have?',
      choices: ['$7$', '$9$', '$5$', '$14$'],
      answer: 1,
      solution:
        'Here $1260 \\div 180 = 7$, so $n - 2 = 7$ and $n = 9$. Check: $(9 - 2) \\cdot 180 = 1260$. ✓ The choice $7$ is the triangle count, one step short of the answer. The choice $5$ subtracts $2$ instead of adding it, and $14$ divides by $90$ instead of $180$.',
    },
  ],
  // p9 — from a regular polygon's interior angle to its size
  [
    {
      q: 'Each interior angle of a regular polygon measures $162^\\circ$. How many sides does the polygon have?',
      choices: ['$20$', '$18$', '$10$', '$22$'],
      answer: 0,
      solution:
        'Each exterior angle is $180^\\circ - 162^\\circ = 18^\\circ$, and the exterior angles of any polygon add to $360^\\circ$, so there are $360 \\div 18 = 20$ sides. Check: $(20 - 2) \\cdot 180 \\div 20 = 3240 \\div 20 = 162$. ✓ The choice $18$ reports the exterior angle as if it were the number of sides. The choice $10$ divides $180$ by $18$ — the walk around a polygon is a full $360^\\circ$ turn, not a half turn. The choice $22$ adds $2$ at the end out of habit; here the $(n - 2)$ adjustment is already built into the exterior-angle method.',
    },
    {
      q: 'Each interior angle of a regular polygon measures $140^\\circ$. How many sides does the polygon have?',
      choices: ['$40$', '$9$', '$7$', '$11$'],
      answer: 1,
      solution:
        'Each exterior angle is $180^\\circ - 140^\\circ = 40^\\circ$, and all the exterior angles add to $360^\\circ$, so the polygon has $360 \\div 40 = 9$ sides. Check: $(9 - 2) \\cdot 180 \\div 9 = 1260 \\div 9 = 140$. ✓ The choice $40$ gives the exterior angle rather than the count. The choice $11$ adds $2$ to the answer and $7$ subtracts $2$; neither adjustment belongs here, because dividing $360$ by the exterior angle already lands on $n$.',
    },
    {
      q: 'Each interior angle of a regular polygon measures $144^\\circ$. What is the SUM of its interior angles?',
      choices: ['$1080^\\circ$', '$1800^\\circ$', '$1440^\\circ$', '$360^\\circ$'],
      answer: 2,
      solution:
        'First find the number of sides: each exterior angle is $180^\\circ - 144^\\circ = 36^\\circ$, and $360 \\div 36 = 10$ sides. Then the interior sum is $(10 - 2) \\cdot 180^\\circ = 1440^\\circ$. Check: $1440 \\div 10 = 144$. ✓ The choice $1800^\\circ$ uses $n$ instead of $n - 2$, $10 \\times 180$. The choice $1080^\\circ$ comes from an $8$-sided polygon, using the triangle count $8$ as the number of sides. The choice $360^\\circ$ is the exterior total, which is $360^\\circ$ for every polygon.',
    },
  ],
  // p10 — triangle angles given as a ratio
  [
    {
      q: 'The angles of a triangle are in the ratio $1 : 2 : 3$. What is the largest angle?',
      choices: ['$30^\\circ$', '$60^\\circ$', '$90^\\circ$', '$120^\\circ$'],
      answer: 2,
      solution:
        'The ratio has $1 + 2 + 3 = 6$ parts sharing $180^\\circ$, so one part is $180 \\div 6 = 30^\\circ$. The angles are $30^\\circ$, $60^\\circ$, and $90^\\circ$, so the largest is $3 \\times 30 = 90^\\circ$. Check: $30 + 60 + 90 = 180$. ✓ The choice $30^\\circ$ is the smallest angle and $60^\\circ$ is the middle one. The choice $120^\\circ$ shares $360^\\circ$ among the parts instead of $180^\\circ$, which is the quadrilateral total.',
    },
    {
      q: 'The angles of a triangle are in the ratio $3 : 4 : 5$. What is the smallest angle?',
      choices: ['$75^\\circ$', '$60^\\circ$', '$15^\\circ$', '$45^\\circ$'],
      answer: 3,
      solution:
        'There are $3 + 4 + 5 = 12$ parts sharing $180^\\circ$, so one part is $180 \\div 12 = 15^\\circ$. The angles are $45^\\circ$, $60^\\circ$, and $75^\\circ$, and the smallest is $3 \\times 15 = 45^\\circ$. Check: $45 + 60 + 75 = 180$. ✓ The choice $75^\\circ$ is the largest angle and $60^\\circ$ is the middle one. The choice $15^\\circ$ is the size of a single part, which still has to be multiplied by $3$.',
    },
    {
      q: 'The angles of a triangle are in the ratio $2 : 5 : 8$. What is the largest angle?',
      choices: ['$12^\\circ$', '$96^\\circ$', '$192^\\circ$', '$60^\\circ$'],
      answer: 1,
      solution:
        'The ratio has $2 + 5 + 8 = 15$ parts sharing $180^\\circ$, so one part is $180 \\div 15 = 12^\\circ$. The angles are $24^\\circ$, $60^\\circ$, and $96^\\circ$, so the largest is $8 \\times 12 = 96^\\circ$. Check: $24 + 60 + 96 = 180$. ✓ The choice $12^\\circ$ is one part, not the angle. The choice $60^\\circ$ is the middle angle. The choice $192^\\circ$ shares $360^\\circ$ instead of $180^\\circ$ — and no angle of a triangle can be more than $180^\\circ$, so that answer flags its own mistake.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 10,
  sections: {
    '10.1': s101,
    '10.2': s102,
    '10.3': s103,
  },
}
