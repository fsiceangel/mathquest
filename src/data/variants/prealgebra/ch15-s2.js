// Prealgebra chapter 15 — variations for sections 15.3 and 15.4.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Fencepost direction is stated explicitly every time. On a STRAIGHT run,
//    posts = gaps + 1 and cuts = pieces - 1. On a CLOSED loop, posts = gaps
//    exactly, and cuts = pieces exactly, because a loop has no ends.
//  - Straight and closed cases are deliberately mixed so the rule cannot be
//    memorised as a single "+1".
//  - Every "work backwards" answer was run FORWARD through the original steps,
//    and that forward run appears in the solution text.
//  - Every number here is an exact integer; no answer depends on a decimal
//    comparison.
//  - The named mistake is checked against the key: in no item does the wrong
//    method produce the keyed answer.

const s153 = [
  // p1 — cuts and pieces (straight loaf in the base; one loop case here)
  [
    {
      q: 'A chef slices a long carrot into $8$ pieces. How many slices does she make?',
      choices: ['$7$', '$8$', '$9$', '$4$'],
      answer: 0,
      solution:
        'Draw the carrot as a bar and mark the slices: piece, cut, piece, cut, ... , piece. The cuts sit BETWEEN the pieces, so on a straight carrot there is always one fewer cut than piece: $8 - 1 = 7$ slices. The choice $8$ is the off-by-one trap — it charges one cut per piece, but the two ends of the carrot were already ends and needed no cutting. The choice $9$ adds one instead of subtracting one. The choice $4$ comes from thinking each cut produces two pieces, $8 \\div 2$, which is only true for the very first cut.',
    },
    {
      q: 'A closed loop of string is cut into $6$ pieces. How many cuts are needed?',
      choices: ['$5$', '$6$', '$7$', '$3$'],
      answer: 1,
      solution:
        'Careful — a loop is not a straight string! Draw a circle and mark the cuts around it: every cut you make becomes the end of one piece and the start of the next, all the way round, so the cuts and the pieces match one for one: $6$ cuts give $6$ pieces. The choice $5$ is the off-by-one trap: it applies the straight-string rule (pieces $- 1$), but that rule only works because a straight string already has two ends. A loop starts with no ends at all, so the first cut makes just one piece, not two. The choice $7$ adds one. The choice $3$ assumes each cut makes two pieces, $6 \\div 2$.',
    },
    {
      q: 'A gardener makes $9$ cuts across a straight bamboo pole. How many pieces does she get?',
      choices: ['$8$', '$9$', '$18$', '$10$'],
      answer: 3,
      solution:
        'This one runs the other way: we are given the cuts and want the pieces. Sketch the pole with $9$ marks on it and count the stretches between and beyond them — there are $10$. On a straight pole, pieces $=$ cuts $+ 1$, because the two outer stretches are bounded by the ends of the pole rather than by a cut. The choice $8$ subtracts one when this direction calls for adding one — that is the off-by-one going the wrong way. The choice $9$ pairs one piece with each cut. The choice $18$ doubles, as if every cut created two fresh pieces.',
    },
  ],
  // p2 — posts along a straight run from length and spacing
  [
    {
      q: 'A straight fence is $56$ metres long with a post every $7$ metres, including one at each end. How many posts are there?',
      choices: ['$9$', '$8$', '$10$', '$7$'],
      answer: 0,
      solution:
        'First find the gaps: $56 \\div 7 = 8$ gaps of $7$ metres. Now draw the dots. A straight fence has a post at both ends, so there is one more post than gap: $8 + 1 = 9$ posts. The choice $8$ is the fencepost trap itself — it reports the number of GAPS as if it were the number of posts. The choice $10$ adds one at each end instead of one overall; the far end is already included in the $8 + 1$. The choice $7$ divides $56$ by $8$ instead of by $7$, mixing up the spacing with the gap count.',
    },
    {
      q: 'A straight path carries a row of $12$ lamps, with $5$ metres between neighbouring lamps and a lamp at each end of the path. How long is the path?',
      choices: ['$60$ metres', '$50$ metres', '$55$ metres', '$65$ metres'],
      answer: 2,
      solution:
        'The metres live in the GAPS, not in the lamps. With $12$ lamps in a straight row there are $12 - 1 = 11$ gaps, so the path is $11 \\times 5 = 55$ metres. Check it by listing the lamp positions: $0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55$ — that is $12$ lamps, and the last one stands at the $55$ metre mark. The choice $60$ is the off-by-one: it multiplies $12 \\times 5$, paying for a gap in front of the very first lamp that does not exist. The choice $50$ uses $10$ gaps, one too few, and $65$ uses $13$.',
    },
    {
      q: 'A straight driveway is $48$ metres long, and a marker is set every $8$ metres, including one at each end. How many markers are there?',
      choices: ['$6$', '$8$', '$5$', '$7$'],
      answer: 3,
      solution:
        'Gaps first: $48 \\div 8 = 6$ gaps. Rather than trust a formula, write the marker positions out: $0, 8, 16, 24, 32, 40, 48$. Count them — $7$ markers spanning $6$ gaps, exactly one more marker than gap, because the driveway is straight and both of its ends carry a marker. The choice $6$ is the fencepost trap, reporting the gaps. The choice $8$ adds one to each end on top of the gaps, and $5$ drops one marker instead of adding one.',
    },
  ],
  // p3 — hopping up and down a building
  [
    {
      q: 'A lift starts on floor $12$, goes down $7$ floors, up $9$ floors, then down $3$ floors. What floor is it on now?',
      choices: ['$11$', '$14$', '$5$', '$31$'],
      answer: 0,
      solution:
        'Draw a vertical number line and hop along it one move at a time: $12 \\to 5 \\to 14 \\to 11$. The lift finishes on floor $11$. The choice $14$ stops one move early, forgetting the final descent. The choice $5$ stops after the very first move. The choice $31$ adds all three moves upward, $12 + 7 + 9 + 3$, ignoring that two of them go down — the sketch makes the directions impossible to lose.',
    },
    {
      q: 'A hotel lift starts on floor $5$, goes up $11$ floors, down $6$ floors, then up $4$ floors. What floor is it on now?',
      choices: ['$10$', '$14$', '$26$', '$16$'],
      answer: 1,
      solution:
        'Trace the trip on a sketch of the floors: $5 \\to 16 \\to 10 \\to 14$. The lift ends on floor $14$. The choice $10$ stops one move short of the end. The choice $16$ stops after the first move. The choice $26$ treats every move as an ascent, $5 + 11 + 6 + 4$ — a picture of the shaft shows the middle move heading downward.',
    },
    {
      q: 'A car park lift starts on level $9$, goes down $5$ levels, up $2$ levels, then down $4$ levels. What level is it on now?',
      choices: ['$4$', '$6$', '$2$', '$20$'],
      answer: 2,
      solution:
        'Hop along a vertical line: $9 \\to 4 \\to 6 \\to 2$. The lift ends on level $2$. The choice $4$ stops after the first move and $6$ stops one move early — with three moves it is easy to lose count, which is exactly why the picture helps. The choice $20$ adds every move on, $9 + 5 + 2 + 4$, as though the lift only ever went up.',
    },
  ],
  // p4 — time per cut
  [
    {
      q: 'Each cut through a plank takes $4$ minutes. How long does it take to saw the plank into $6$ pieces?',
      choices: ['$20$ minutes', '$24$ minutes', '$16$ minutes', '$30$ minutes'],
      answer: 0,
      solution:
        'Time is spent on cuts, not on pieces, so count the cuts first. Draw the plank split into $6$ pieces: the cuts are the $5$ lines between them, one fewer than the pieces because the plank is straight and its two ends are already ends. So the job takes $5 \\times 4 = 20$ minutes. The choice $24$ is the classic off-by-one — it charges for $6$ cuts, one per piece. The choice $16$ uses only $4$ cuts, and $30$ multiplies the $6$ pieces by the $5$ cuts, mixing the two counts together.',
    },
    {
      q: 'Sawing a straight beam into pieces takes $3$ minutes per cut, and the whole job took $21$ minutes. How many pieces did the sawyer end up with?',
      choices: ['$7$', '$6$', '$8$', '$9$'],
      answer: 2,
      solution:
        'Work out the cuts first: $21 \\div 3 = 7$ cuts. Now go from cuts to pieces, which on a straight beam means adding one, since the two outer pieces are bounded by the ends of the beam and not by a cut: $7 + 1 = 8$ pieces. The choice $7$ is the off-by-one — it stops at the cut count and never converts it into pieces. The choice $6$ subtracts one when this direction adds one, and $9$ adds two.',
    },
    {
      q: 'A blacksmith cuts a closed metal ring into $5$ separate arcs, and each cut takes $6$ minutes. How long does the job take?',
      choices: ['$24$ minutes', '$60$ minutes', '$36$ minutes', '$30$ minutes'],
      answer: 3,
      solution:
        'A ring is a closed loop, so the straight-bar rule does not apply. Draw a circle and mark $5$ points on it: those $5$ cuts chop the ring into exactly $5$ arcs, since each cut serves as the end of one arc and the start of the next. So the time is $5 \\times 6 = 30$ minutes. The choice $24$ is the off-by-one — it pays for $5 - 1 = 4$ cuts, which is the rule for a straight bar, but a loop has no ends to start from. The choice $60$ charges two cuts per arc, forgetting that neighbouring arcs SHARE their cuts, and $36$ pays for $6$ cuts.',
    },
  ],
  // p5 — signed walk on a number line
  [
    {
      q: 'A snail sits at $-8$ on a number line. It slides $12$ units right, then $5$ units left. Where is it now?',
      choices: ['$4$', '$-1$', '$9$', '$-25$'],
      answer: 1,
      solution:
        'Draw the number line and walk it: $-8 + 12 = 4$, then $4 - 5 = -1$. The snail lands on $-1$. The choice $4$ stops halfway, after the rightward slide only. The choice $9$ treats the second slide as another move to the right, $-8 + 12 + 5$, and $-25$ sends both slides leftward, $-8 - 12 - 5$. Marking the arrows on the sketch keeps the directions honest.',
    },
    {
      q: 'A marker starts at $6$ on a number line, moves $15$ units left, then $4$ units further left. Where does it end?',
      choices: ['$-9$', '$-5$', '$-13$', '$25$'],
      answer: 2,
      solution:
        'Both moves go the same way, so the marker keeps travelling left: $6 - 15 = -9$, then $-9 - 4 = -13$. The choice $-9$ stops after the first move. The choice $-5$ turns the second move around, $6 - 15 + 4$, which a sketch would immediately contradict. The choice $25$ adds everything, $6 + 15 + 4$, ignoring the word "left" altogether.',
    },
    {
      q: 'A frog starts at $-11$ on a number line. It hops $4$ units left, then $20$ units right. Where does it land?',
      choices: ['$-15$', '$13$', '$-35$', '$5$'],
      answer: 3,
      solution:
        'Take the hops in order on a sketch: $-11 - 4 = -15$, then $-15 + 20 = 5$. The big rightward hop carries the frog past zero and up to $5$. The choice $-15$ stops after the first hop. The choice $13$ points the first hop rightward too, $-11 + 4 + 20$, and $-35$ points both hops leftward, $-11 - 4 - 20$.',
    },
  ],
  // p6 — overlapping groups
  [
    {
      q: 'In a group of $40$ campers, $25$ can swim, $18$ can canoe, and $9$ can do both. How many campers can do neither?',
      choices: ['$6$', '$-3$', '$34$', '$15$'],
      answer: 0,
      solution:
        'Draw two overlapping circles and fill the overlap first: $9$ campers sit there. Adding $25 + 18 = 43$ counts those $9$ twice, so the number who can do at least one activity is $43 - 9 = 34$. That leaves $40 - 34 = 6$ campers outside both circles. The choice $-3$ comes from $40 - 25 - 18$, which forgets the overlap entirely — and a count of campers can never be negative, so that answer refutes itself. The choice $34$ stops one step early, at the campers who can do at least one activity. The choice $15$ is $40 - 25$, the non-swimmers, a group that still contains canoeists.',
    },
    {
      q: 'In a class of $28$ pupils, $16$ play the piano, $13$ play the guitar, and $6$ play both. How many pupils play neither instrument?',
      choices: ['$-1$', '$5$', '$23$', '$12$'],
      answer: 1,
      solution:
        'Put the $6$ double-players in the overlap of two circles. Pupils who play at least one instrument: $16 + 13 - 6 = 23$, subtracting the $6$ once because adding the two groups counted them twice. So $28 - 23 = 5$ pupils play neither. The choice $-1$ is $28 - 16 - 13$, which ignores the overlap and lands on an impossible negative count. The choice $23$ stops at the at-least-one total. The choice $12$ is $28 - 16$, everyone who does not play piano — which still includes guitarists.',
    },
    {
      q: 'Every one of the $50$ members of a club likes tea or coffee, or both. If $34$ like tea and $27$ like coffee, how many like both?',
      choices: ['$61$', '$16$', '$23$', '$11$'],
      answer: 3,
      solution:
        'Draw the two circles with no one outside them, since every member likes at least one drink. Adding $34 + 27 = 61$ counts the both-drinks members twice, but there are only $50$ members — so the surplus $61 - 50 = 11$ is exactly the group that got counted twice. $11$ members like both. The choice $61$ stops at the double-counted sum. The choice $16$ is $50 - 34$, the members who do not like tea, and $23$ is $50 - 27$, the members who do not like coffee; neither of those is the overlap.',
    },
  ],
  // p7 — posts around a closed border
  [
    {
      q: 'A rectangular pen measures $16$ metres by $8$ metres. A post stands at every corner and every $4$ metres along the border. How many posts are there?',
      choices: ['$12$', '$13$', '$16$', '$6$'],
      answer: 0,
      solution:
        'The border is a closed loop of $2 \\times (16 + 8) = 48$ metres, so there are $48 \\div 4 = 12$ gaps. On a loop every post is shared by the gap before it and the gap after it, so posts equal gaps: $12$ posts. Walk the border and list them to be sure, starting at a corner: $0, 4, 8, 12$ along the long side, then $16, 20$ along the short side, then $24, 28, 32, 36$, then $40, 44$ — and the next position, $48$, is the starting corner again. That is $12$ posts. The choice $13$ adds one as if this were a straight fence, but a loop has no ends. The choice $16$ counts each side separately as a straight fence, $5 + 3 + 5 + 3$, which counts every one of the $4$ corners twice — and indeed $16 - 4 = 12$. The choice $6$ uses $16 + 8 = 24$ as the perimeter, which is only half the way round.',
    },
    {
      q: 'A circular flower bed has a border $54$ metres around. A lantern is set every $6$ metres along it. How many lanterns are there?',
      choices: ['$10$', '$9$', '$8$', '$18$'],
      answer: 1,
      solution:
        'Divide to get the gaps: $54 \\div 6 = 9$. A circle is a closed loop, so the lanterns and the gaps match one for one: $9$ lanterns. List the positions round the rim to see why: $0, 6, 12, 18, 24, 30, 36, 42, 48$ — and the next position, $54$, is the very same spot as $0$, so it is not a new lantern. The choice $10$ is the off-by-one trap: it adds one the way a straight path does, but on a straight path the extra post pays for the far END, and a circle has no end. The choice $8$ drops a lantern, and $18$ puts two at every gap.',
    },
    {
      q: 'A triangular field has sides of $30$ metres, $24$ metres and $18$ metres. Posts are placed all the way round, one at each corner and one every $6$ metres. How many posts are there?',
      choices: ['$13$', '$15$', '$12$', '$9$'],
      answer: 2,
      solution:
        'Go all the way round: the perimeter is $30 + 24 + 18 = 72$ metres, giving $72 \\div 6 = 12$ gaps. The border is a closed loop, so posts equal gaps: $12$ posts. (Each side divides evenly, $5$, $4$ and $3$ gaps, so a post does land on every corner.) The choice $13$ adds one as on a straight fence — the off-by-one that a loop never needs. The choice $15$ treats each side as its own straight fence, $6 + 5 + 4$, which counts each of the $3$ corners twice; $15 - 3 = 12$ confirms it. The choice $9$ leaves the $18$ metre side out of the perimeter.',
    },
  ],
  // p8 — flights of stairs between floors
  [
    {
      q: 'Sam walks up from the $2$nd floor to the $8$th floor. Each flight between two neighbouring floors has $15$ steps. How many steps does he climb?',
      choices: ['$120$', '$90$', '$105$', '$75$'],
      answer: 1,
      solution:
        'Draw the floors as dots and the flights as the gaps between them. From floor $2$ to floor $8$ there are $8 - 2 = 6$ flights — count the gaps, not the floors. So Sam climbs $6 \\times 15 = 90$ steps. The choice $120$ uses $8$ flights, which would mean starting at ground level rather than at floor $2$. The choice $105$ is the off-by-one: it counts the $7$ FLOORS from $2$ to $8$ inclusive instead of the $6$ flights between them. The choice $75$ uses $5$ flights, one too few.',
    },
    {
      q: 'Priya walks down from the $11$th floor to the $4$th floor. Each flight between two neighbouring floors has $14$ steps. How many steps does she walk down?',
      choices: ['$154$', '$112$', '$98$', '$84$'],
      answer: 2,
      solution:
        'Sketch the floors as dots: from floor $11$ down to floor $4$ there are $11 - 4 = 7$ gaps, so $7$ flights. That is $7 \\times 14 = 98$ steps. The choice $154$ uses $11$ flights, as if she walked all the way to the ground. The choice $112$ is the off-by-one — it counts the $8$ floors from $4$ to $11$ inclusive rather than the $7$ flights between them. The choice $84$ uses $6$ flights.',
    },
    {
      q: 'Climbing from the $1$st floor to the $6$th floor takes $60$ steps, and every flight has the same number of steps. How many steps are in one flight?',
      choices: ['$10$', '$15$', '$60$', '$12$'],
      answer: 3,
      solution:
        'The $60$ steps are spread over the FLIGHTS, and from floor $1$ to floor $6$ there are $6 - 1 = 5$ flights (draw six dots and count the five gaps). So one flight has $60 \\div 5 = 12$ steps. Check: $5 \\times 12 = 60$. The choice $10$ is the off-by-one — it divides by the $6$ floors instead of the $5$ flights. The choice $15$ divides by $4$, and $60$ just repeats the total without dividing at all.',
    },
  ],
  // p9 — climbing with a nightly slip (hard)
  [
    {
      q: 'A beetle is at the bottom of a $15$-metre pit. Each day it climbs up $4$ metres, and each night it slips back $2$ metres. On which day does it first reach the top?',
      choices: ['Day $7$', 'Day $8$', 'Day $4$', 'Day $6$'],
      answer: 0,
      solution:
        'Draw the pit and mark the beetle at dawn each day. Over a full day and night it gains $4 - 2 = 2$ metres, so at the end of night $n$ it sits at $2n$ metres: $2, 4, 6, 8, 10, 12, \\ldots$ On day $7$ it starts from $12$ metres and climbs $4$ to reach $16$, which is past the $15$ metre rim — it is out, and never slips again. Check the day before: on day $6$ it starts at $10$ and reaches only $14$, still inside, so it slips back to $12$. So day $7$ it is. The choice $8$ divides the depth by the net gain, $15 \\div 2$ rounded up — that is the trap, because it makes the beetle slip on the last night when it has already escaped. The choice $6$ is one day too few, and $4$ ignores the slipping entirely, $15 \\div 4$ rounded up.',
    },
    {
      q: 'A frog is at the bottom of a $12$-metre pit. Each day it hops up $5$ metres, and each night it slides back $3$ metres. On which day does it first reach the top?',
      choices: ['Day $6$', 'Day $3$', 'Day $5$', 'Day $4$'],
      answer: 2,
      solution:
        'Each full day-and-night nets $5 - 3 = 2$ metres, so after night $n$ the frog is at $2n$ metres: $2, 4, 6, 8, \\ldots$ On day $5$ it starts from $8$ metres and hops $5$ to reach $13$, clearing the $12$ metre rim, so it is out before nightfall. The day before, day $4$, it starts at $6$ and reaches only $11$, then slides back to $8$ — that is why the choice Day $4$ is wrong. The choice Day $6$ is the classic trap, $12 \\div 2$ from the net gain, which wrongly charges the frog for a slide on the night it escapes. The choice Day $3$ ignores the nightly slide, $12 \\div 5$ rounded up.',
    },
    {
      q: 'A caterpillar climbs a $20$-metre pole. Each day it climbs $6$ metres, and each night it slips down $4$ metres. On which day does it first reach the top?',
      choices: ['Day $10$', 'Day $9$', 'Day $4$', 'Day $8$'],
      answer: 3,
      solution:
        'The net gain over a whole day and night is $6 - 4 = 2$ metres, so after night $n$ the caterpillar is at $2n$: $2, 4, 6, \\ldots, 14$ after night $7$. On day $8$ it climbs $6$ from $14$ and reaches exactly $20$ — the top, with no night left to slip. The day before, it started at $12$ and got to $18$, short of the top, then slipped to $14$. The choice Day $10$ is the trap of dividing the height by the net gain, $20 \\div 2$; it forgets that the final climb is never followed by a slip. The choice Day $9$ is one day too many, and Day $4$ ignores the slipping, $20 \\div 6$ rounded up.',
    },
  ],
  // p10 — strips glued with overlaps
  [
    {
      q: 'Four wooden planks, each $50$ cm long, are joined end to end into one long plank. Each of the three joints overlaps by $8$ cm. How long is the finished plank?',
      choices: ['$176$ cm', '$200$ cm', '$184$ cm', '$168$ cm'],
      answer: 0,
      solution:
        'Draw four bars in a row with their ends tucked into one another. Four planks in a straight line have $4 - 1 = 3$ joints — one fewer than the planks, the same fencepost idea as cuts and pieces. The wood totals $4 \\times 50 = 200$ cm, and each joint hides $8$ cm of doubled-up length, so the finished plank is $200 - 3 \\times 8 = 200 - 24 = 176$ cm. The choice $200$ forgets the overlaps completely. The choice $184$ subtracts only two overlaps, and $168$ subtracts four — one per plank, which is the off-by-one; the picture shows exactly three places where planks meet.',
    },
    {
      q: 'Three ribbons, each $25$ cm long, are glued into one long ribbon, with the same overlap at each of the two joints. The finished ribbon is $63$ cm long. How long is each overlap?',
      choices: ['$4$ cm', '$6$ cm', '$12$ cm', '$3$ cm'],
      answer: 1,
      solution:
        'The ribbon material totals $3 \\times 25 = 75$ cm but the finished strip is only $63$ cm, so $75 - 63 = 12$ cm went into overlaps. Three ribbons in a straight line meet at $3 - 1 = 2$ joints, so each joint hides $12 \\div 2 = 6$ cm. Check forwards: $75 - 2 \\times 6 = 63$ cm. The choice $4$ is the off-by-one — it shares the lost $12$ cm among the $3$ RIBBONS instead of the $2$ joints. The choice $12$ reports the total overlap rather than the overlap at one joint, and $3$ divides by $4$.',
    },
    {
      q: 'Five pipes, each $60$ cm long, are pushed together into one straight line, and each joint overlaps by $5$ cm. How long is the line of pipes?',
      choices: ['$300$ cm', '$275$ cm', '$280$ cm', '$285$ cm'],
      answer: 2,
      solution:
        'Sketch five bars in a row. The joints are the places where two pipes meet, and there are $5 - 1 = 4$ of them, one fewer than the pipes. The pipework totals $5 \\times 60 = 300$ cm, and each joint swallows $5$ cm, so the line measures $300 - 4 \\times 5 = 300 - 20 = 280$ cm. The choice $300$ ignores the overlaps. The choice $275$ subtracts five overlaps, one per pipe — the off-by-one, since the outer ends of the first and last pipes join nothing. The choice $285$ subtracts only three.',
    },
  ],
]

const s154 = [
  // p1 — one step to undo
  [
    {
      q: 'I think of a number and add $9$. The result is $23$. What was my number?',
      choices: ['$32$', '$14$', '$9$', '$23$'],
      answer: 1,
      solution:
        'Start at the end and press the undo button. The step was "add $9$", and the undo of adding is subtracting: $23 - 9 = 14$. Check forwards: $14 + 9 = 23$. ✓ The choice $32$ is the mistake this problem is really about — it ADDS $9$ again, $23 + 9$, instead of applying the inverse. Running that forwards gives $32 + 9 = 41$, nowhere near $23$. The choice $9$ repeats the number that was added, and $23$ repeats the result.',
    },
    {
      q: 'I think of a number and multiply it by $6$. The result is $54$. What was my number?',
      choices: ['$324$', '$60$', '$9$', '$48$'],
      answer: 2,
      solution:
        'The step was "multiply by $6$", and division undoes multiplication: $54 \\div 6 = 9$. Check forwards: $9 \\times 6 = 54$. ✓ The choice $324$ multiplies by $6$ a second time, $54 \\times 6$, which is doing the operation again rather than undoing it — forwards it gives $324 \\times 6 = 1944$. The choices $60$ and $48$ add and subtract $6$, undoing an operation that was never done: the number was multiplied, not shifted.',
    },
    {
      q: 'I think of a number and subtract $8$. The result is $15$. What was my number?',
      choices: ['$7$', '$8$', '$120$', '$23$'],
      answer: 3,
      solution:
        'Subtraction is undone by addition, so the number was $15 + 8 = 23$. Check forwards: $23 - 8 = 15$. ✓ The choice $7$ subtracts $8$ all over again, $15 - 8$, which is the trap — it repeats the operation instead of reversing it, and forwards it lands on $7 - 8 = -1$. The choice $8$ is just the amount taken away, and $120$ multiplies $15 \\times 8$ when nothing here was multiplied.',
    },
  ],
  // p2 — two steps, multiply then shift
  [
    {
      q: 'I think of a number, multiply it by $5$, then subtract $7$. The result is $38$. What was my number?',
      choices: ['$9$', '$45$', '$31$', '$190$'],
      answer: 0,
      solution:
        'Undo the LAST step first. Undo "subtract $7$" by adding: $38 + 7 = 45$. Then undo "multiply by $5$" by dividing: $45 \\div 5 = 9$. Check forwards: $9 \\times 5 = 45$, and $45 - 7 = 38$. ✓ The choice $31$ subtracts $7$ again, $38 - 7$, instead of adding it back — the same-operation-twice mistake. The choice $45$ does the first undo correctly and then forgets to divide. The choice $190$ multiplies by $5$ instead of dividing.',
    },
    {
      q: 'I think of a number, multiply it by $4$, then add $9$. The result is $41$. What was my number?',
      choices: ['$32$', '$50$', '$8$', '$164$'],
      answer: 2,
      solution:
        'Reverse the steps from the back. Undo "add $9$" by subtracting: $41 - 9 = 32$. Then undo "multiply by $4$" by dividing: $32 \\div 4 = 8$. Check forwards: $8 \\times 4 = 32$, and $32 + 9 = 41$. ✓ The choice $50$ adds $9$ a second time, $41 + 9$, which repeats the operation rather than inverting it. The choice $32$ stops after the first undo, one division short. The choice $164$ multiplies $41 \\times 4$ where the undo calls for dividing.',
    },
    {
      q: 'I think of a number, divide it by $3$, then add $8$. The result is $20$. What was my number?',
      choices: ['$12$', '$4$', '$84$', '$36$'],
      answer: 3,
      solution:
        'Work back from $20$. Undo "add $8$": $20 - 8 = 12$. Undo "divide by $3$" by multiplying: $12 \\times 3 = 36$. Check forwards: $36 \\div 3 = 12$, and $12 + 8 = 20$. ✓ The choice $4$ divides by $3$ again, $12 \\div 3$, instead of multiplying — the operation repeated rather than reversed. The choice $12$ stops after the first undo. The choice $84$ adds the $8$ back the wrong way, $(20 + 8) \\times 3$, undoing an addition by adding.',
    },
  ],
  // p3 — two steps where the ORDER of undoing matters
  [
    {
      q: 'I think of a number, subtract $9$, then triple the result. I end with $24$. What was my number?',
      choices: ['$17$', '$11$', '$8$', '$63$'],
      answer: 0,
      solution:
        'Shoes before socks: undo the tripling first, because it happened last. $24 \\div 3 = 8$, and then undo "subtract $9$" by adding: $8 + 9 = 17$. Check forwards: $17 - 9 = 8$, and $8 \\times 3 = 24$. ✓ The choice $11$ undoes in the wrong order — it adds $9$ to $24$ first and then divides, $(24 + 9) \\div 3$. Test it forwards: $11 - 9 = 2$, and $2 \\times 3 = 6$, not $24$. The choice $8$ stops after the first undo, and $63$ multiplies by $3$ instead of dividing.',
    },
    {
      q: 'I think of a number, add $4$, then multiply by $5$. The result is $60$. What was my number?',
      choices: ['$12$', '$8$', '$56$', '$296$'],
      answer: 1,
      solution:
        'The last step was the multiplication, so undo that first: $60 \\div 5 = 12$. Then undo "add $4$" by subtracting: $12 - 4 = 8$. Check forwards: $8 + 4 = 12$, and $12 \\times 5 = 60$. ✓ The choice $56$ undoes in the wrong order, taking $4$ off the $60$ before dividing. The choice $12$ stops after the first undo. The choice $296$ multiplies by $5$ instead of dividing, $60 \\times 5 - 4$ — doing the operation again rather than its inverse.',
    },
    {
      q: 'I think of a number, subtract $8$, then multiply by $4$. I end with $24$. What was my number?',
      choices: ['$8$', '$6$', '$96$', '$14$'],
      answer: 3,
      solution:
        'Undo the last step first: $24 \\div 4 = 6$. Then undo "subtract $8$" by adding: $6 + 8 = 14$. Check forwards: $14 - 8 = 6$, and $6 \\times 4 = 24$. ✓ The choice $8$ is the order mistake, adding the $8$ before dividing, $(24 + 8) \\div 4$; forwards it gives $8 - 8 = 0$, then $0 \\times 4 = 0$, not $24$. The choice $6$ stops after the division, and $96$ multiplies $24 \\times 4$ where the undo asks you to divide.',
    },
  ],
  // p4 — a fraction of a number, then a shift
  [
    {
      q: 'A third of a number, plus $7$, equals $19$. What is the number?',
      choices: ['$36$', '$4$', '$12$', '$78$'],
      answer: 0,
      solution:
        'Undo the last step first: $19 - 7 = 12$, so a third of the number is $12$. A third was taken by dividing, so undo it by multiplying: $12 \\times 3 = 36$. Check forwards: $36 \\div 3 = 12$, and $12 + 7 = 19$. ✓ The choice $4$ divides by $3$ again, $12 \\div 3$, instead of multiplying — pressing the same button rather than the undo button. The choice $12$ stops before the multiplication, and $78$ adds the $7$ instead of subtracting it, $(19 + 7) \\times 3$.',
    },
    {
      q: 'Half of a number, minus $6$, equals $9$. What is the number?',
      choices: ['$6$', '$30$', '$15$', '$18$'],
      answer: 1,
      solution:
        'Work backwards from $9$. Undo "minus $6$" by adding: $9 + 6 = 15$, so half the number is $15$. Undo the halving by doubling: $15 \\times 2 = 30$. Check forwards: half of $30$ is $15$, and $15 - 6 = 9$. ✓ The choice $6$ subtracts $6$ again, $(9 - 6) \\times 2$, instead of adding it back. The choice $15$ stops at the halfway mark. The choice $18$ doubles the $9$ and drops the $6$ altogether.',
    },
    {
      q: 'A quarter of a number, plus $5$, equals $17$. What is the number?',
      choices: ['$12$', '$3$', '$48$', '$88$'],
      answer: 2,
      solution:
        'Undo the addition first: $17 - 5 = 12$, so a quarter of the number is $12$. Undo the quartering by multiplying: $12 \\times 4 = 48$. Check forwards: $48 \\div 4 = 12$, and $12 + 5 = 17$. ✓ The choice $3$ divides by $4$ a second time, $12 \\div 4$, which repeats the operation instead of inverting it. The choice $12$ stops one step short, and $88$ adds the $5$ rather than subtracting it, $(17 + 5) \\times 4$.',
    },
  ],
  // p5 — passengers on and off, with a fraction leaving
  [
    {
      q: 'A ferry leaves the dock with some passengers. At the first stop $9$ get off and $14$ get on. At the second stop half of the passengers get off, leaving $13$ aboard. How many passengers left the dock?',
      choices: ['$31$', '$21$', '$8$', '$26$'],
      answer: 1,
      solution:
        'Rewind from the $13$ still aboard. Undo the second stop: $13$ is the half that stayed, so before it there were $13 \\times 2 = 26$. Now undo the first stop by REVERSING both changes — send the $14$ who boarded back off and bring the $9$ who left back on: $26 - 14 + 9 = 21$. Check forwards: $21 - 9 = 12$, then $12 + 14 = 26$, then half of $26$ get off, leaving $13$. ✓ The choice $31$ repeats the first stop instead of reversing it, $26 + 14 - 9$. The choice $8$ forgets to undo the halving and works from $13$ directly. The choice $26$ stops after undoing the second stop.',
    },
    {
      q: 'A train leaves the terminal with some passengers. At the first stop $6$ get on and $11$ get off. At the second stop half of the passengers get off, leaving $17$ aboard. How many passengers left the terminal?',
      choices: ['$29$', '$22$', '$39$', '$34$'],
      answer: 2,
      solution:
        'Start at the end: $17$ is the half that stayed on, so before the second stop there were $17 \\times 2 = 34$. Reverse the first stop — take off the $6$ who boarded and put back the $11$ who left: $34 - 6 + 11 = 39$. Check forwards: $39 + 6 = 45$, then $45 - 11 = 34$, then half of $34$ get off, leaving $17$. ✓ The choice $29$ repeats the first stop rather than reversing it, $34 + 6 - 11$. The choice $22$ never undoes the halving. The choice $34$ stops one step early.',
    },
    {
      q: 'A bus leaves the station with some students. At the first stop half of them get off. At the second stop $3$ more get off and $11$ get on, leaving $14$ on board. How many students left the station?',
      choices: ['$44$', '$6$', '$3$', '$12$'],
      answer: 3,
      solution:
        'Undo the LAST stop first: put the $11$ boarders back off and return the $3$ who left, $14 - 11 + 3 = 6$. That $6$ is the half who stayed on at the first stop, so double it: $6 \\times 2 = 12$. Check forwards: half of $12$ get off, leaving $6$; then $6 - 3 = 3$, and $3 + 11 = 14$. ✓ The choice $3$ HALVES the $6$ instead of doubling it — that is the mistake this problem hunts for, applying the operation again rather than its inverse. The choice $44$ reverses the second stop the wrong way, $(14 + 11 - 3) \\times 2$, and $6$ stops before undoing the halving.',
    },
  ],
  // p6 — money spent in two steps
  [
    {
      q: 'Jonah spends half of his money on a game, then $\\$7$ on lunch. He has $\\$9$ left. How much did he start with?',
      choices: ['$\\$32$', '$\\$25$', '$\\$16$', '$\\$8$'],
      answer: 0,
      solution:
        'Rewind from $\\$9$. The last thing he did was buy lunch, so undo that first: $9 + 7 = 16$. That $\\$16$ is the half he kept, so double it: $16 \\times 2 = 32$. Check forwards: half of $\\$32$ is $\\$16$ spent, leaving $\\$16$; then $16 - 7 = 9$. ✓ The choice $\\$25$ undoes in the wrong order, doubling the $\\$9$ before adding the lunch back. The choice $\\$16$ stops halfway. The choice $\\$8$ halves the $\\$16$ instead of doubling it — the same operation again in place of its inverse.',
    },
    {
      q: 'Rosa spends $\\$8$ on a book, then half of what is left on a poster. She has $\\$11$ left. How much did she start with?',
      choices: ['$\\$38$', '$\\$22$', '$\\$30$', '$\\$19$'],
      answer: 2,
      solution:
        'The poster was the last purchase, so undo it first: the $\\$11$ is the half she did not spend, so before the poster she had $11 \\times 2 = 22$. Then undo the book: $22 + 8 = 30$. Check forwards: $30 - 8 = 22$; half of $\\$22$ is $\\$11$ spent on the poster, leaving $\\$11$. ✓ The choice $\\$38$ undoes in the wrong order, adding the $\\$8$ back before doubling, $(11 + 8) \\times 2$. The choice $\\$22$ stops one step short, and $\\$19$ never undoes the halving at all.',
    },
    {
      q: 'Lena spends half of her savings on a bike helmet, then earns $\\$9$ babysitting. She now has $\\$23$. How much did she have at the start?',
      choices: ['$\\$64$', '$\\$14$', '$\\$46$', '$\\$28$'],
      answer: 3,
      solution:
        'The last event was money coming IN, so undo it by taking it out: $23 - 9 = 14$. That $\\$14$ is the half left after the helmet, so double it: $14 \\times 2 = 28$. Check forwards: half of $\\$28$ is $\\$14$ spent, leaving $\\$14$; then $14 + 9 = 23$. ✓ The choice $\\$64$ adds the $\\$9$ again instead of subtracting it, $(23 + 9) \\times 2$ — earning twice rather than undoing the earning. The choice $\\$14$ stops before doubling, and $\\$46$ doubles the $\\$23$ before dealing with the babysitting, undoing the steps in the wrong order.',
    },
  ],
  // p7 — undoing a percent change
  [
    {
      q: 'After a $20\\%$ discount, a jacket costs $\\$40$. What was the original price?',
      choices: ['$\\$50$', '$\\$48$', '$\\$32$', '$\\$200$'],
      answer: 0,
      solution:
        'A $20\\%$ discount means you pay $80\\%$, which is $\\frac{4}{5}$ of the original. So $\\$40$ is four fifths: one fifth is $40 \\div 4 = 10$, and five fifths make $10 \\times 5 = 50$. Check forwards: $20\\%$ of $\\$50$ is $\\$10$, and $50 - 10 = 40$. ✓ The choice $\\$48$ adds $20\\%$ of the SALE price, $40 + 8$ — but the discount was measured from the larger original price, not from $\\$40$. The choice $\\$32$ takes another $20\\%$ off, discounting again instead of undoing. The choice $\\$200$ divides by the discount rate, $40 \\div 0.2$, instead of by the paying rate $0.8$.',
    },
    {
      q: 'A number increased by $25\\%$ of itself becomes $60$. What was the number?',
      choices: ['$45$', '$48$', '$75$', '$15$'],
      answer: 1,
      solution:
        'Growing by $25\\%$ makes the result $\\frac{5}{4}$ of the start, so $60$ is five quarters: one quarter is $60 \\div 5 = 12$, and four quarters make $12 \\times 4 = 48$. Check forwards: $25\\%$ of $48$ is $12$, and $48 + 12 = 60$. ✓ The choice $45$ takes $25\\%$ off the $60$, but the percent was measured from the smaller starting number, not from the answer. The choice $75$ grows by $25\\%$ a second time — doing the operation again instead of reversing it. The choice $15$ is just $25\\%$ of $60$.',
    },
    {
      q: 'After a $40\\%$ discount, a pair of boots costs $\\$60$. What was the original price?',
      choices: ['$\\$84$', '$\\$36$', '$\\$150$', '$\\$100$'],
      answer: 3,
      solution:
        'A $40\\%$ discount means the shopper pays $60\\%$, which is $\\frac{3}{5}$ of the original. So $\\$60$ is three fifths: one fifth is $60 \\div 3 = 20$, and five fifths make $20 \\times 5 = 100$. Check forwards: $40\\%$ of $\\$100$ is $\\$40$, and $100 - 40 = 60$. ✓ The choice $\\$84$ adds $40\\%$ of the sale price, $60 + 24$, measuring the percent from the wrong number. The choice $\\$36$ discounts by $40\\%$ again rather than undoing the discount. The choice $\\$150$ divides by the discount rate, $60 \\div 0.4$, when the sale price is $0.6$ of the original.',
    },
  ],
  // p8 — three steps to unwind
  [
    {
      q: 'I think of a number, triple it, subtract $5$, then double the result. I end with $32$. What was my number?',
      choices: ['$7$', '$21$', '$23$', '$16$'],
      answer: 0,
      solution:
        'Three steps, undone back to front. Undo the doubling: $32 \\div 2 = 16$. Undo "subtract $5$": $16 + 5 = 21$. Undo the tripling: $21 \\div 3 = 7$. Check forwards: $7 \\times 3 = 21$, $21 - 5 = 16$, $16 \\times 2 = 32$. ✓ The choice $23$ DOUBLES the $32$ instead of halving it, $(32 \\times 2 + 5) \\div 3$ — the operation repeated rather than inverted. The choices $16$ and $21$ stop partway through the rewind.',
    },
    {
      q: 'I think of a number, add $7$, double the result, then subtract $4$. I end with $30$. What was my number?',
      choices: ['$34$', '$10$', '$17$', '$61$'],
      answer: 1,
      solution:
        'Rewind from $30$. Undo "subtract $4$": $30 + 4 = 34$. Undo the doubling: $34 \\div 2 = 17$. Undo "add $7$": $17 - 7 = 10$. Check forwards: $10 + 7 = 17$, $17 \\times 2 = 34$, $34 - 4 = 30$. ✓ The choice $61$ doubles the $34$ instead of halving it, $34 \\times 2 - 7$, pressing the same button rather than the undo button. The choices $34$ and $17$ each stop before the rewind is finished.',
    },
    {
      q: 'I think of a number, halve it, add $9$, then triple the result. The result is $45$. What was my number?',
      choices: ['$6$', '$3$', '$12$', '$48$'],
      answer: 2,
      solution:
        'Undo the three steps in reverse. Undo the tripling: $45 \\div 3 = 15$. Undo "add $9$": $15 - 9 = 6$. Undo the halving by doubling: $6 \\times 2 = 12$. Check forwards: $12 \\div 2 = 6$, $6 + 9 = 15$, $15 \\times 3 = 45$. ✓ The choice $3$ halves the $6$ again instead of doubling it, which is exactly the trap — the undo of halving is doubling. The choice $6$ stops one step early, and $48$ adds the $9$ rather than subtracting it, $(15 + 9) \\times 2$.',
    },
  ],
  // p9 — a chain of halvings (hard)
  [
    {
      q: 'A bag of marbles is raided. Priya takes half of them, then Quinn takes half of what is left, then Rohan takes $4$. Now $5$ marbles remain. How many were in the bag at the start?',
      choices: ['$24$', '$36$', '$18$', '$9$'],
      answer: 1,
      solution:
        'Rewind the raid, last raider first. Before Rohan took his $4$ there were $5 + 4 = 9$. Before Quinn took half there were $9 \\times 2 = 18$. Before Priya took half there were $18 \\times 2 = 36$. Check forwards: $36 \\to 18 \\to 9 \\to 5$. ✓ The choice $24$ undoes in the wrong order, doubling twice before putting Rohan\'s $4$ back, $5 \\times 2 \\times 2 + 4$; forwards that gives $24 \\to 12 \\to 6 \\to 2$, not $5$. The choices $18$ and $9$ stop partway back through the chain.',
    },
    {
      q: 'A pile of coins shrinks: Alex takes $6$, then Bea takes half of what is left, then Cody takes half of what is left after that. Now $7$ coins remain. How many coins were in the pile at the start?',
      choices: ['$52$', '$28$', '$34$', '$14$'],
      answer: 2,
      solution:
        'Undo the takings from the back. Before Cody halved the pile there were $7 \\times 2 = 14$. Before Bea halved it there were $14 \\times 2 = 28$. Before Alex took his $6$ there were $28 + 6 = 34$. Check forwards: $34 - 6 = 28$, then $28 \\to 14 \\to 7$. ✓ The choice $52$ puts Alex\'s $6$ back first and then doubles twice, $(7 + 6) \\times 2 \\times 2$ — the right operations in the wrong order. Forwards, $52 - 6 = 46$, then $46 \\to 23 \\to 11.5$, which is not $7$. The choices $28$ and $14$ stop before the rewind is complete.',
    },
    {
      q: 'A jar of beads is emptied bit by bit: Tia takes half of them, then Uma takes $3$, then Vik takes half of what is left. Now $6$ beads remain. How many beads were in the jar at the start?',
      choices: ['$36$', '$15$', '$12$', '$30$'],
      answer: 3,
      solution:
        'Rewind, last step first. Before Vik took half there were $6 \\times 2 = 12$. Before Uma took $3$ there were $12 + 3 = 15$. Before Tia took half there were $15 \\times 2 = 30$. Check forwards: $30 \\to 15$, then $15 - 3 = 12$, then $12 \\to 6$. ✓ The choice $36$ puts Uma\'s $3$ back before undoing Vik\'s halving, $(6 + 3) \\times 2 \\times 2$ — undoing in the wrong order. Forwards it gives $36 \\to 18$, then $18 - 3 = 15$, then $15 \\to 7.5$, not $6$. The choices $15$ and $12$ stop partway back.',
    },
  ],
  // p10 — a percent cut and a flat amount off
  [
    {
      q: 'A jacket is on sale: first the price is cut by $25\\%$, then a voucher takes $\\$6$ more off. The final price is $\\$36$. What was the original price?',
      choices: ['$\\$56$', '$\\$42$', '$\\$48$', '$\\$168$'],
      answer: 0,
      solution:
        'Undo the LAST step first: put the voucher back, $36 + 6 = 42$. Now $\\$42$ is what remained after the $25\\%$ cut, so it is $75\\% = \\frac{3}{4}$ of the original: one quarter is $42 \\div 3 = 14$, and four quarters make $14 \\times 4 = 56$. Check forwards: $25\\%$ of $\\$56$ is $\\$14$, so the sale price is $56 - 14 = 42$, and the voucher brings it to $42 - 6 = 36$. ✓ The choice $\\$48$ undoes the percent cut before the voucher, $36 \\div 0.75$ — the right two undos in the wrong order. The choice $\\$42$ stops after the voucher, and $\\$168$ divides by the discount rate instead of the paying rate, $42 \\div 0.25$.',
    },
    {
      q: 'A bike is on sale: first the price drops by $40\\%$, then a coupon takes $\\$9$ off. The final price is $\\$81$. What was the original price?',
      choices: ['$\\$90$', '$\\$150$', '$\\$135$', '$\\$225$'],
      answer: 1,
      solution:
        'Work backwards from $\\$81$. Undo the coupon: $81 + 9 = 90$. That $\\$90$ is $60\\% = \\frac{3}{5}$ of the original, since a $40\\%$ drop leaves $60\\%$: one fifth is $90 \\div 3 = 30$, and five fifths make $30 \\times 5 = 150$. Check forwards: $40\\%$ of $\\$150$ is $\\$60$, so the sale price is $150 - 60 = 90$, and the coupon makes it $90 - 9 = 81$. ✓ The choice $\\$135$ undoes the percent drop first and forgets the coupon until too late, $81 \\div 0.6$. The choice $\\$90$ stops after the coupon, and $\\$225$ divides by the discount rate, $90 \\div 0.4$, rather than the $0.6$ actually paid.',
    },
    {
      q: 'A shop first takes $\\$8$ off the price of a coat, then cuts the reduced price by $20\\%$. The final price is $\\$48$. What was the original price?',
      choices: ['$\\$60$', '$\\$70$', '$\\$68$', '$\\$56$'],
      answer: 2,
      solution:
        'Here the percent cut came LAST, so undo it first. Paying $80\\% = \\frac{4}{5}$ leaves $\\$48$, so one fifth is $48 \\div 4 = 12$ and the reduced price was $12 \\times 5 = 60$. Now undo the flat $\\$8$: $60 + 8 = 68$. Check forwards: $68 - 8 = 60$, then $20\\%$ of $\\$60$ is $\\$12$, and $60 - 12 = 48$. ✓ The choice $\\$70$ undoes in the wrong order, adding the $\\$8$ back before the percent, $(48 + 8) \\div 0.8$; forwards that gives $70 - 8 = 62$ and $62 - 12.4 = 49.6$, not $\\$48$. The choice $\\$60$ stops after undoing the percent cut, and $\\$56$ is $48 + 8$, ignoring the percent cut entirely.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 15,
  sections: {
    '15.3': s153,
    '15.4': s154,
  },
}
