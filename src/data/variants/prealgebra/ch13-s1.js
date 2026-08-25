// Prealgebra chapter 13 — variations for sections 13.1-13.3.
// All problems and solutions are original MathQuest content.
//
// House rules for this chapter:
//  - Medians are always taken from the SORTED list. The middle of the unsorted
//    list is used only as a named distractor, never as an answer.
//  - Every mode claimed here was checked to be unique. Where a list has no mode
//    or two modes, the solution says so on purpose.
//  - Every mean is an exact quotient of integers; nothing is rounded.
//  - Weighted averages are computed from totals, never by averaging averages.

const s131 = [
  // p1 — mean of a short list
  [
    {
      q: 'What is the mean of $5, 9, 12, 14$?',
      choices: ['$10$', '$40$', '$10.5$', '$9$'],
      answer: 0,
      solution:
        'Add everything: $5 + 9 + 12 + 14 = 40$. Then divide by the count, $4$: $\\frac{40}{4} = 10$. The total $40$ is only half the job — the mean needs the division too. The choice $10.5$ is the median (sort to get $5, 9, 12, 14$ and average the two middle values), and $9$ is the range, $14 - 5$.',
    },
    {
      q: 'A team scored $3, 6, 9$, and $14$ goals in four games. What was the mean number of goals per game?',
      choices: ['$32$', '$8$', '$7.5$', '$11$'],
      answer: 1,
      solution:
        'Total goals: $3 + 6 + 9 + 14 = 32$. There were $4$ games, so the mean is $\\frac{32}{4} = 8$ goals per game. The choice $32$ is the season total, not a per-game number. The choice $7.5$ is the median — sorted, the two middle values are $6$ and $9$, and $\\frac{6 + 9}{2} = 7.5$. The choice $11$ is the range, $14 - 3$.',
    },
    {
      q: 'What is the mean of $2, 9, 10, 15$?',
      choices: ['$36$', '$12$', '$9.5$', '$9$'],
      answer: 3,
      solution:
        'The total is $2 + 9 + 10 + 15 = 36$, and there are $4$ numbers, so the mean is $\\frac{36}{4} = 9$. The choice $36$ stops at the total. The choice $12$ comes from dividing by $3$ instead of $4$ — count the numbers carefully. The choice $9.5$ is the median: sorted, the middle pair is $9$ and $10$, and $\\frac{9 + 10}{2} = 9.5$.',
    },
  ],
  // p2 — median of five values, given out of order
  [
    {
      q: 'What is the median of $14, 6, 11, 3, 9$?',
      choices: ['$11$', '$9$', '$8.6$', '$8.5$'],
      answer: 1,
      solution:
        'Sort first: $3, 6, 9, 11, 14$. Five numbers means one value sits exactly in the middle, and that value is $9$. The choice $11$ is the middle of the list as it was written — grabbing that without sorting is the classic median mistake. The choice $8.6$ is the mean, $\\frac{43}{5}$, a different statistic. The choice $8.5$ is halfway between the smallest and largest, $\\frac{3 + 14}{2}$, which is not the median either.',
    },
    {
      q: 'What is the median of $20, 4, 15, 8, 12$?',
      choices: ['$15$', '$11.8$', '$12$', '$16$'],
      answer: 2,
      solution:
        'Sort the list: $4, 8, 12, 15, 20$. The third of five values is $12$, so the median is $12$. The choice $15$ is the middle of the unsorted list — always sort before you read off the middle. The choice $11.8$ is the mean, $\\frac{59}{5}$, and $16$ is the range, $20 - 4$.',
    },
    {
      q: 'What is the median of $7, 2, 13, 5, 10$?',
      choices: ['$13$', '$7.4$', '$11$', '$7$'],
      answer: 3,
      solution:
        'Sorted, the list is $2, 5, 7, 10, 13$, and the middle of the five values is $7$. The choice $13$ is the middle entry of the unsorted list, which is why sorting comes first. The choice $7.4$ is the mean, $\\frac{37}{5}$, and $11$ is the range, $13 - 2$.',
    },
  ],
  // p3 — the mode
  [
    {
      q: 'What is the mode of $3, 8, 3, 5, 8, 8, 2$?',
      choices: ['$8$', '$3$', '$5$', '$2$'],
      answer: 0,
      solution:
        'Count each value: $8$ appears three times, $3$ appears twice, and $5$ and $2$ appear once each. The most frequent value is $8$, so the mode is $8$. The choice $3$ is the runner-up — it repeats, but not the most. The choice $5$ is the median (sorted, the list is $2, 3, 3, 5, 8, 8, 8$), and $2$ is simply the smallest value.',
    },
    {
      q: 'What is the mode of $5, 2, 9, 2, 5, 2, 7$?',
      choices: ['$5$', '$7$', '$2$', '$9$'],
      answer: 2,
      solution:
        'Tally the values: $2$ appears three times, $5$ appears twice, and $9$ and $7$ once each. So the mode is $2$. Notice the mode does not have to be a big number — it is about how OFTEN a value shows up, not how large it is. The choice $5$ repeats only twice (and it is also the median). The choice $7$ is the range, $9 - 2$, and $9$ is just the largest value.',
    },
    {
      q: 'The daily high temperatures for a week were $12, 15, 12, 18, 15, 12$, and $20$ degrees. Which temperature is the mode?',
      choices: ['$15$', '$20$', '$8$', '$12$'],
      answer: 3,
      solution:
        'Count the repeats: $12$ occurs three times, $15$ occurs twice, and $18$ and $20$ occur once each. The mode is $12$ degrees. The choice $15$ repeats too, but only twice — it is the runner-up, and it also happens to be the median. The choice $20$ is the highest temperature, and $8$ is the range, $20 - 12$.',
    },
  ],
  // p4 — the range
  [
    {
      q: 'What is the range of $17, 4, 11, 25, 8$?',
      choices: ['$21$', '$29$', '$25$', '$11$'],
      answer: 0,
      solution:
        'The range is the largest value minus the smallest: $25 - 4 = 21$. The choice $29$ adds the two extremes instead of subtracting them. The choice $25$ reports only the largest value — the range needs both ends. The choice $11$ is the median (sorted: $4, 8, 11, 17, 25$).',
    },
    {
      q: 'Over five days a library lent out $30, 12, 45, 27$, and $19$ books. What is the range of these numbers?',
      choices: ['$57$', '$33$', '$45$', '$27$'],
      answer: 1,
      solution:
        'The busiest day was $45$ and the quietest was $12$, so the range is $45 - 12 = 33$ books. The choice $57$ adds the extremes rather than subtracting. The choice $45$ gives only the largest value, and $27$ is the median (sorted: $12, 19, 27, 30, 45$). Remember the range is one single number, not a pair like "$12$ to $45$".',
    },
    {
      q: 'A set of test scores has a highest score of $94$ and a range of $28$. What was the lowest score?',
      choices: ['$122$', '$-66$', '$66$', '$28$'],
      answer: 2,
      solution:
        'Since range $=$ highest $-$ lowest, we get $28 = 94 -$ lowest, so the lowest score is $94 - 28 = 66$. Check: $94 - 66 = 28$. ✓ The choice $122$ adds the range to the highest score instead of subtracting it — that would put the lowest score ABOVE the highest. The choice $-66$ subtracts in the wrong order, $28 - 94$, and a test score cannot be negative. The choice $28$ just repeats the range.',
    },
  ],
  // p5 — median of an even number of values
  [
    {
      q: 'What is the median of $7, 2, 10, 5, 14, 6$?',
      choices: ['$6$', '$6.5$', '$7.5$', '$7$'],
      answer: 1,
      solution:
        'Sort: $2, 5, 6, 7, 10, 14$. With six numbers there is no single middle, so take the two middle values, $6$ and $7$, and average them: $\\frac{6 + 7}{2} = 6.5$. The median need not be one of the numbers in the list! The choices $6$ and $7$ each keep only one of the two middle values. The choice $7.5$ averages the two middle entries of the UNSORTED list, $10$ and $5$.',
    },
    {
      q: 'What is the median of $11, 4, 9, 20, 6, 15$?',
      choices: ['$9$', '$14.5$', '$10$', '$11$'],
      answer: 2,
      solution:
        'Sorted, the list is $4, 6, 9, 11, 15, 20$. The two middle values are $9$ and $11$, so the median is $\\frac{9 + 11}{2} = 10$. The choices $9$ and $11$ stop after picking just one of the middle pair. The choice $14.5$ averages the third and fourth entries of the unsorted list, $9$ and $20$ — sorting has to come first.',
    },
    {
      q: 'What is the median of $16, 9, 4, 21, 12, 7$?',
      choices: ['$9$', '$12.5$', '$12$', '$10.5$'],
      answer: 3,
      solution:
        'Sort: $4, 7, 9, 12, 16, 21$. Six values means two in the middle, $9$ and $12$, and the median is their mean: $\\frac{9 + 12}{2} = 10.5$. The choices $9$ and $12$ take only one of the pair. The choice $12.5$ averages the middle two entries of the unsorted list, $4$ and $21$, which are actually the two extremes.',
    },
  ],
  // p6 — the score needed to hit a target mean
  [
    {
      q: 'Leo scored $78$, $84$, and $90$ on three quizzes. What must he score on a fourth quiz so his mean is exactly $85$?',
      choices: ['$88$', '$85$', '$84$', '$3$'],
      answer: 0,
      solution:
        'Four quizzes with mean $85$ must total $4 \\times 85 = 340$. So far Leo has $78 + 84 + 90 = 252$, so he needs $340 - 252 = 88$. Check: $\\frac{252 + 88}{4} = \\frac{340}{4} = 85$. ✓ The choice $85$ assumes he just scores the target, but his current mean is below $85$, so the new score must be higher. The choice $84$ is his current mean, $\\frac{252}{3}$. The choice $3$ comes from using $3 \\times 85 = 255$ instead of $4 \\times 85$.',
    },
    {
      q: 'Nina scored $110$, $96$, and $103$ in her first three games. What must she score in a fourth game to make her mean exactly $105$?',
      choices: ['$105$', '$111$', '$103$', '$6$'],
      answer: 1,
      solution:
        'Four games with mean $105$ need a total of $4 \\times 105 = 420$. She has $110 + 96 + 103 = 309$, so the fourth game must give $420 - 309 = 111$. Check: $\\frac{309 + 111}{4} = \\frac{420}{4} = 105$. ✓ The choice $105$ scores the target itself, which would leave the mean stuck below it. The choice $103$ is her current mean, $\\frac{309}{3}$, and $6$ comes from using three games ($3 \\times 105 = 315$) in place of four.',
    },
    {
      q: 'Ravi read $32$, $45$, and $28$ pages on three days. How many pages must he read on the fourth day so that his mean is exactly $40$ pages per day?',
      choices: ['$40$', '$35$', '$15$', '$55$'],
      answer: 3,
      solution:
        'Four days with a mean of $40$ pages need a total of $4 \\times 40 = 160$ pages. So far Ravi has read $32 + 45 + 28 = 105$, so day four needs $160 - 105 = 55$ pages. Check: $\\frac{105 + 55}{4} = \\frac{160}{4} = 40$. ✓ The choice $40$ just reads the target amount, which cannot lift a mean that is currently only $35$. The choice $35$ is that current mean, $\\frac{105}{3}$, and $15$ uses $3 \\times 40 = 120$ instead of $4 \\times 40$.',
    },
  ],
  // p7 — one value changes; what happens to the mean
  [
    {
      q: 'Six numbers have a mean of $12$. One of the numbers changes from $7$ to $19$, and the rest stay the same. What is the new mean?',
      choices: ['$14$', '$24$', '$12$', '$19$'],
      answer: 0,
      solution:
        'The old total was $6 \\times 12 = 72$. The change adds $19 - 7 = 12$ to the total, making it $84$, so the new mean is $\\frac{84}{6} = 14$. Shortcut: the extra $12$ is shared across $6$ numbers, so the mean climbs by $\\frac{12}{6} = 2$. The choice $24$ adds the whole increase of $12$ to the mean instead of sharing it out. The choice $12$ assumes nothing changes, and $19$ is just the new value.',
    },
    {
      q: 'Eight numbers have a mean of $30$. One of them changes from $22$ to $46$, and the rest stay the same. What is the new mean?',
      choices: ['$54$', '$264$', '$33$', '$30$'],
      answer: 2,
      solution:
        'The old total was $8 \\times 30 = 240$. The change adds $46 - 22 = 24$, so the new total is $264$ and the new mean is $\\frac{264}{8} = 33$. Shortcut: the extra $24$ spread over $8$ numbers raises the mean by $\\frac{24}{8} = 3$. The choice $54$ adds the full increase of $24$ straight onto the mean. The choice $264$ is the new total, one division short of a mean, and $30$ assumes the mean does not move at all.',
    },
    {
      q: 'Five numbers have a mean of $18$. One of the numbers changes from $26$ to $6$, and the rest stay the same. What is the new mean?',
      choices: ['$18$', '$22$', '$-2$', '$14$'],
      answer: 3,
      solution:
        'The old total was $5 \\times 18 = 90$. The change takes away $26 - 6 = 20$, so the new total is $70$ and the new mean is $\\frac{70}{5} = 14$. Shortcut: losing $20$ across $5$ numbers drops the mean by $\\frac{20}{5} = 4$. The choice $22$ moves the mean the wrong way — the value got smaller, so the mean must fall. The choice $-2$ subtracts the whole loss of $20$ from the mean instead of sharing it out, and $18$ assumes nothing changes.',
    },
  ],
  // p8 — combining two statistics
  [
    {
      q: 'For the list $9, 3, 7, 9, 5$, what is the mode minus the median?',
      choices: ['$2$', '$-2$', '$9$', '$2.4$'],
      answer: 0,
      solution:
        'Sort the list: $3, 5, 7, 9, 9$. The median is the middle value, $7$. The mode is the value that repeats, $9$. So mode $-$ median $= 9 - 7 = 2$. The choice $-2$ subtracts in the wrong order, median $-$ mode. The choice $9$ stops after finding the mode. The choice $2.4$ uses the MEAN in place of the median: the total is $33$, the mean is $\\frac{33}{5} = 6.6$, and $9 - 6.6 = 2.4$.',
    },
    {
      q: 'For the list $12, 4, 8, 12, 6$, what is the mode minus the median?',
      choices: ['$-4$', '$4$', '$3.6$', '$12$'],
      answer: 1,
      solution:
        'Sorted, the list is $4, 6, 8, 12, 12$. The median is $8$ and the mode is $12$, so mode $-$ median $= 12 - 8 = 4$. The choice $-4$ subtracts the wrong way round. The choice $3.6$ uses the mean instead of the median: the total is $42$, the mean is $\\frac{42}{5} = 8.4$, and $12 - 8.4 = 3.6$. The choice $12$ is the mode by itself, with the subtraction never done.',
    },
    {
      q: 'For the list $6, 14, 6, 20, 11$, what is the median minus the mode?',
      choices: ['$-5$', '$6$', '$5$', '$5.4$'],
      answer: 2,
      solution:
        'Sort: $6, 6, 11, 14, 20$. The median is the middle value, $11$, and the mode is the repeated value, $6$. So median $-$ mode $= 11 - 6 = 5$. Read the order of the subtraction carefully — the choice $-5$ is mode minus median, which is the reverse. The choice $6$ is the mode alone. The choice $5.4$ uses the mean in place of the median: the total is $57$, the mean is $\\frac{57}{5} = 11.4$, and $11.4 - 6 = 5.4$.',
    },
  ],
  // p9 — the score needed to RAISE a running mean
  [
    {
      q: 'After four tests, Mia\'s mean score is $76$. What must she score on a fifth test to raise her mean to $80$?',
      choices: ['$96$', '$80$', '$16$', '$20$'],
      answer: 0,
      solution:
        'Five tests with mean $80$ need a total of $5 \\times 80 = 400$. Her first four total $4 \\times 76 = 304$. So she needs $400 - 304 = 96$. Scoring only $80$ is not enough: the new score has to drag four older, lower scores up with it, so it must land well above the target. The choice $16$ uses the OLD count for the new total ($4 \\times 80 = 320$, then $320 - 304$). The choice $20$ uses the NEW count for the old total ($5 \\times 80 - 5 \\times 76$).',
    },
    {
      q: 'After six games, a player\'s mean is $18$ points. How many points must she score in the seventh game to raise her mean to $20$?',
      choices: ['$20$', '$32$', '$14$', '$12$'],
      answer: 1,
      solution:
        'Seven games with mean $20$ need $7 \\times 20 = 140$ points in total. Her six games so far give $6 \\times 18 = 108$. So game seven needs $140 - 108 = 32$ points. Check: $\\frac{108 + 32}{7} = \\frac{140}{7} = 20$. ✓ The choice $20$ scores just the target, which cannot lift six lower games. The choice $12$ uses six games for the new total ($6 \\times 20 - 108$), and $14$ uses seven games for the old total ($7 \\times 20 - 7 \\times 18$).',
    },
    {
      q: 'Over eight days, Omar has read a mean of $25$ pages per day. How many pages must he read on the ninth day to raise his mean to $27$ pages per day?',
      choices: ['$27$', '$18$', '$16$', '$43$'],
      answer: 3,
      solution:
        'Nine days with a mean of $27$ need $9 \\times 27 = 243$ pages. His first eight days give $8 \\times 25 = 200$ pages. So day nine needs $243 - 200 = 43$ pages. Check: $\\frac{200 + 43}{9} = \\frac{243}{9} = 27$. ✓ The choice $27$ reads only the target amount, which leaves the mean below it. The choice $18$ uses nine days for the old total too ($9 \\times 27 - 9 \\times 25$), and $16$ uses eight days for the new total ($8 \\times 27 - 200$).',
    },
  ],
  // p10 — finding the value that was added to the list
  [
    {
      q: 'The mean of seven numbers is $22$. When an eighth number joins the list, the mean becomes $24$. What is the eighth number?',
      choices: ['$38$', '$24$', '$16$', '$2$'],
      answer: 0,
      solution:
        'The total jumps from $7 \\times 22 = 154$ to $8 \\times 24 = 192$. The eighth number supplied the whole jump: $192 - 154 = 38$. It has to be above $24$, since a new number can only pull the mean UP by being bigger than the mean. The choice $24$ is the new mean itself, which would have left the mean unchanged. The choice $2$ is just the rise in the mean, and $16$ uses eight numbers for the old total as well ($8 \\times 24 - 8 \\times 22$).',
    },
    {
      q: 'The mean of six numbers is $9$. When a seventh number is added, the mean drops to $8$. What is the seventh number?',
      choices: ['$8$', '$-6$', '$2$', '$1$'],
      answer: 2,
      solution:
        'The old total is $6 \\times 9 = 54$ and the new total is $7 \\times 8 = 56$. The seventh number is the difference: $56 - 54 = 2$. Sense check: to pull a mean DOWN, the new number must sit below the old mean, and $2$ certainly does. The choice $8$ is the new mean, which would have kept the mean at $9$... not dropped it. The choice $1$ is only the size of the drop, and $-6$ uses six numbers for the new total ($6 \\times 8 - 54$).',
    },
    {
      q: 'The mean of four numbers is $30$. When a fifth number joins, the mean becomes $32$. What is the fifth number?',
      choices: ['$32$', '$10$', '$2$', '$40$'],
      answer: 3,
      solution:
        'The total climbs from $4 \\times 30 = 120$ to $5 \\times 32 = 160$, and the fifth number accounts for all of it: $160 - 120 = 40$. Check: $\\frac{120 + 40}{5} = \\frac{160}{5} = 32$. ✓ The choice $32$ is the new mean, which by itself would not have raised anything. The choice $2$ is just the rise, and $10$ uses five numbers for the old total too ($5 \\times 32 - 5 \\times 30$).',
    },
  ],
]

const s132 = [
  // p1 — spotting the outlier
  [
    {
      q: 'Which value in the list $41, 3, 4, 5, 6$ is an outlier?',
      choices: ['$41$', '$6$', '$3$', '$5$'],
      answer: 0,
      solution:
        'An outlier is a value that sits far away from the rest of the data. Here $3, 4, 5, 6$ are all packed within $3$ of each other, while $41$ is more than thirty away from every one of them. So $41$ is the outlier. The choice $6$ is the biggest of the tight cluster, not an outlier. The choice $3$ is the smallest value, but small does not mean "far away", and $5$ sits right in the middle of the crowd.',
    },
    {
      q: 'The rainfall over five days was $2, 3, 60, 4$, and $3$ millimetres. Which value is an outlier?',
      choices: ['$4$', '$3$', '$60$', '$2$'],
      answer: 2,
      solution:
        'Four of the readings ($2, 3, 4, 3$) are within $2$ millimetres of one another, but $60$ towers over all of them — that is the outlier. The choice $4$ is merely the largest of the cluster. The choice $3$ is the mode, the value that repeats, which has nothing to do with being an outlier. The choice $2$ is the smallest reading, and it fits right in with its neighbours.',
    },
    {
      q: 'Which value in the list $18, 20, 1, 19, 21$ is an outlier?',
      choices: ['$21$', '$18$', '$20$', '$1$'],
      answer: 3,
      solution:
        'Outliers can sit BELOW the crowd as well as above it. The values $18, 19, 20, 21$ are bunched within $3$ of each other, while $1$ is seventeen below the nearest of them, so $1$ is the outlier. The choice $21$ is the largest value but is snug against the cluster. The choice $18$ is the smallest of the cluster, and $20$ is the median.',
    },
  ],
  // p2 — the median stays put while the mean chases the outlier
  [
    {
      q: 'For the list $4, 5, 6, 7, 63$, the mean is $17$. What is the median?',
      choices: ['$17$', '$6$', '$63$', '$5.5$'],
      answer: 1,
      solution:
        'The list is already sorted, and the middle of the five values is $6$, so the median is $6$. Compare the two statistics: the outlier $63$ hauled the mean up to $17$, above four of the five values, while the median calmly stayed at $6$, right in the crowd. The choice $17$ is the mean, which the question already gave. The choice $63$ is the outlier itself, and $5.5$ is the median of the four values you get after throwing the outlier away.',
    },
    {
      q: 'For the list $11, 12, 14, 15, 98$, the mean is $30$. What is the median?',
      choices: ['$30$', '$98$', '$14$', '$13$'],
      answer: 2,
      solution:
        'The list is sorted already, and the third of the five values is $14$ — that is the median. The mean of $30$ is higher than four of the five values because the outlier $98$ dragged it up; the median ignores how extreme the largest value is and only asks where the middle of the line falls. The choice $30$ repeats the mean, $98$ is the outlier, and $13$ is the median of the four values left after removing the outlier, $\\frac{12 + 14}{2}$.',
    },
    {
      q: 'Five customers waited $3, 3, 4, 5$, and $50$ minutes, and the mean wait is $13$ minutes. What is the median wait?',
      choices: ['$13$', '$50$', '$3$', '$4$'],
      answer: 3,
      solution:
        'The times are already in order, so the median is the third of the five, $4$ minutes. That describes a typical customer far better than the mean of $13$ minutes, which nobody actually waited — the single $50$-minute wait pulled the mean up. The choice $13$ is that mean, $50$ is the outlier, and $3$ is the mode (the only value that repeats), not the median.',
    },
  ],
  // p3 — which statistic describes a typical value
  [
    {
      q: 'Five friends have $12, 13, 15, 16$, and $84$ stickers. Which statistic best describes how many stickers a typical friend has?',
      choices: ['The mean, $28$', 'The median, $15$', 'The range, $72$', 'The mean and the median describe it equally well'],
      answer: 1,
      solution:
        'The total is $12 + 13 + 15 + 16 + 84 = 140$, so the mean is $\\frac{140}{5} = 28$ — but four of the five friends have $16$ stickers or fewer, so $28$ describes nobody! The outlier $84$ inflated it. The median is the middle of the sorted list, $15$, which sits right among the friends. The range, $84 - 12 = 72$, measures spread, not a typical value. And the last option is false: the two statistics are $13$ apart here.',
    },
    {
      q: 'A shop counted $22, 24, 25, 27$, and $152$ customers over five days. Which statistic best describes a typical day?',
      choices: ['The range, $130$', 'The mean, $50$', 'The median, $25$', 'The mode, since one value repeats'],
      answer: 2,
      solution:
        'The total is $22 + 24 + 25 + 27 + 152 = 250$, so the mean really is $\\frac{250}{5} = 50$ — but four days had fewer than $30$ customers, so $50$ describes no day at all. The median, the middle of the sorted list, is $25$, which matches a typical day. The range, $152 - 22 = 130$, tells you about spread, not a typical value. And the last option fails on its own terms: every value here appears exactly once, so this data has NO mode.',
    },
    {
      q: 'Seven employees earn, in thousands of dollars, $30, 32, 34, 35, 36, 38$, and $250$. Which statistic best describes a typical salary?',
      choices: ['The mean, $65$', 'The range, $220$', 'The largest salary, $250$', 'The median, $35$'],
      answer: 3,
      solution:
        'The total is $30 + 32 + 34 + 35 + 36 + 38 + 250 = 455$, so the mean is $\\frac{455}{7} = 65$ — nearly double what six of the seven employees actually earn. One enormous salary did that. With seven values the median is the fourth in sorted order, $35$, and six of the seven salaries sit within $5$ of it. The range, $250 - 30 = 220$, measures spread, and the largest salary is the very outlier that caused the trouble.',
    },
  ],
  // p4 — the mean after the outlier is removed
  [
    {
      q: 'The list $2, 5, 6, 7, 40$ has mean $12$. If the outlier $40$ is removed, what is the mean of the remaining four numbers?',
      choices: ['$5$', '$12$', '$4$', '$5.5$'],
      answer: 0,
      solution:
        'The remaining numbers total $2 + 5 + 6 + 7 = 20$, and there are now $4$ of them, so the new mean is $\\frac{20}{4} = 5$. Removing one value cut the mean from $12$ to $5$ — that is how much leverage a single extreme value has. The choice $12$ leaves the mean unchanged. The choice $4$ divides the new total by the OLD count of $5$; when a value goes, the count goes down too. The choice $5.5$ is the median of the four remaining numbers, $\\frac{5 + 6}{2}$.',
    },
    {
      q: 'The list $8, 9, 11, 12, 60$ has mean $20$. If the outlier $60$ is removed, what is the mean of the remaining four numbers?',
      choices: ['$20$', '$10$', '$8$', '$4$'],
      answer: 1,
      solution:
        'The four remaining numbers total $8 + 9 + 11 + 12 = 40$, so the new mean is $\\frac{40}{4} = 10$ — half of what it was. The choice $20$ keeps the old mean. The choice $8$ divides the new total by $5$, the old count, instead of $4$. The choice $4$ is the range of the remaining numbers, $12 - 8$, which is a measure of spread rather than a mean.',
    },
    {
      q: 'A gym counted $10, 11, 12, 13, 14$, and $96$ visitors on six days, giving a mean of $26$. If the outlier $96$ is removed, what is the mean of the remaining five days?',
      choices: ['$26$', '$10$', '$4$', '$12$'],
      answer: 3,
      solution:
        'The five remaining days total $10 + 11 + 12 + 13 + 14 = 60$, so the new mean is $\\frac{60}{5} = 12$ visitors per day — a number that actually matches the five ordinary days. The choice $26$ is the old mean. The choice $10$ divides the new total by $6$, the old count. The choice $4$ is the range of the remaining days, $14 - 10$.',
    },
  ],
  // p5 — replacing an extreme value leaves the median alone
  [
    {
      q: 'The list $5, 8, 11, 14, 17$ has median $11$. If the $17$ is replaced by $95$, what is the new median?',
      choices: ['$11$', '$95$', '$26.6$', '$14$'],
      answer: 0,
      solution:
        'The new sorted list is $5, 8, 11, 14, 95$, and the middle of the five values is still $11$. The median only asks which value stands in the middle of the line, so stretching the largest value changes nothing. The mean, though, leaps from $11$ to $\\frac{5 + 8 + 11 + 14 + 95}{5} = \\frac{133}{5} = 26.6$ — that is the choice $26.6$. The choice $95$ is the new value, and $14$ comes from sliding the "middle" one position to the right.',
    },
    {
      q: 'The seven values $20, 22, 24, 26, 28, 30, 32$ have median $26$. If the $32$ is replaced by $130$, what is the new median?',
      choices: ['$28$', '$26$', '$40$', '$130$'],
      answer: 1,
      solution:
        'The new sorted list is $20, 22, 24, 26, 28, 30, 130$. With seven values the median is the fourth one, which is still $26$. Only the LAST value changed, and the fourth position never noticed. The mean does notice: it rises from $26$ to $\\frac{280}{7} = 40$, which is the choice $40$. The choice $28$ slides the middle one position along, and $130$ is the new value itself.',
    },
    {
      q: 'The list $9, 12, 15, 18, 21$ has median $15$. If the $9$ is replaced by $1$, what is the new median?',
      choices: ['$13.4$', '$12$', '$15$', '$1$'],
      answer: 2,
      solution:
        'The new sorted list is $1, 12, 15, 18, 21$, and the middle of the five values is still $15$. An extreme value at the BOTTOM end is just as invisible to the median as one at the top. The mean falls, though, from $15$ to $\\frac{1 + 12 + 15 + 18 + 21}{5} = \\frac{67}{5} = 13.4$ — that is the choice $13.4$. The choice $12$ slides the middle one position toward the small end, and $1$ is the new value.',
    },
  ],
  // p6 — build/identify a set matching mean, median, and mode
  [
    {
      q: 'Which data set has mean $8$, median $7$, and mode $5$?',
      choices: ['$5, 5, 7, 10, 13$', '$5, 6, 7, 9, 11$', '$5, 5, 7, 8, 10$', '$5, 7, 7, 8, 13$'],
      answer: 0,
      solution:
        'Check $5, 5, 7, 10, 13$: the total is $40$, so the mean is $\\frac{40}{5} = 8$ ✓; the middle value is $7$ ✓; and $5$ is the only repeated value, so the mode is $5$ ✓. All three match. The set $5, 6, 7, 9, 11$ has median $7$ but every value appears once, so it has no mode at all. The set $5, 5, 7, 8, 10$ totals $35$, so its mean is $7$, not $8$. The set $5, 7, 7, 8, 13$ has mean $8$ and median $7$, but its repeated value is $7$, so its mode is $7$.',
    },
    {
      q: 'Which data set has mean $9$, median $8$, and mode $6$?',
      choices: ['$6, 7, 8, 9, 10$', '$6, 6, 8, 10, 12$', '$6, 6, 8, 12, 13$', '$6, 8, 8, 11, 12$'],
      answer: 2,
      solution:
        'Check $6, 6, 8, 12, 13$: the total is $45$, so the mean is $\\frac{45}{5} = 9$ ✓; the middle value is $8$ ✓; and $6$ is the only value that repeats ✓. The set $6, 7, 8, 9, 10$ has median $8$ but no repeats, so it has no mode. The set $6, 6, 8, 10, 12$ gets the median and mode right but totals $42$, giving a mean of $8.4$. The set $6, 8, 8, 11, 12$ has mean $9$ and median $8$, but $8$ is the value that repeats, so its mode is $8$.',
    },
    {
      q: 'Which data set has mean $12$, median $11$, and mode $9$?',
      choices: ['$9, 10, 11, 13, 17$', '$9, 9, 11, 12, 14$', '$9, 11, 11, 14, 15$', '$9, 9, 11, 15, 16$'],
      answer: 3,
      solution:
        'Check $9, 9, 11, 15, 16$: the total is $60$, so the mean is $\\frac{60}{5} = 12$ ✓; the middle value is $11$ ✓; and $9$ is the only repeated value ✓. Watch out for $9, 10, 11, 13, 17$ — it matches the mean AND the median, but no value repeats, so it has no mode. The set $9, 9, 11, 12, 14$ totals $55$, giving a mean of $11$. The set $9, 11, 11, 14, 15$ has mean $12$ and median $11$, but its mode is $11$.',
    },
  ],
  // p7 — equal means, unequal spreads
  [
    {
      q: 'Set A is $14, 15, 16$ and Set B is $3, 15, 27$. Which statement is true?',
      choices: ['The sets have the same mean, but Set B is more spread out', 'Set A has the larger mean', 'The two sets have the same range', 'Set B has the larger median'],
      answer: 0,
      solution:
        'Both sets total $45$, so both means are $\\frac{45}{3} = 15$, and both medians are $15$ too. The difference shows up in the range: Set A has $16 - 14 = 2$, while Set B has $27 - 3 = 24$, twelve times as wide. So the means match while the spreads do not — which is exactly why one statistic is never enough. The three other statements each claim a difference in a statistic the two sets actually share.',
    },
    {
      q: 'Set A is $30, 40, 50$ and Set B is $39, 40, 41$. Which statement is true?',
      choices: ['Set B has the larger mean', 'The sets have the same mean and median, but Set A has the larger range', 'Set A has the smaller median', 'The two sets have equal ranges'],
      answer: 1,
      solution:
        'Both sets total $120$, so both means are $\\frac{120}{3} = 40$, and the middle value of each sorted set is also $40$. The ranges differ sharply: Set A spans $50 - 30 = 20$ while Set B spans only $41 - 39 = 2$. The first and third options claim a gap in a statistic that is identical, and the fourth ignores the ten-fold difference in range.',
    },
    {
      q: 'Two shops each sold $60$ items over three days. Shop A sold $19, 20, 21$ and Shop B sold $2, 20, 38$. Which statement is true?',
      choices: ['Shop B had the higher mean', 'The two shops had the same range', 'Shop A had the higher median', 'The means and medians are equal, but Shop B\'s daily sales varied far more'],
      answer: 3,
      solution:
        'Both shops total $60$, so both means are $\\frac{60}{3} = 20$, and both medians are $20$ as well. But Shop A\'s range is $21 - 19 = 2$ while Shop B\'s is $38 - 2 = 36$ — eighteen times as wide. Two shops with identical averages had completely different weeks. The first and third options claim a difference in a statistic the shops share, and the second ignores the huge gap in spread.',
    },
  ],
  // p8 — why a mean can mislead
  [
    {
      q: 'For the data $1, 2, 2, 3, 42$, the mean is $10$. Why might the mean be a poor summary of this data?',
      choices: ['The mean was computed incorrectly', 'The mean is bigger than four of the five values, because the outlier $42$ pulled it up', 'The mean is smaller than the median', 'A mean is never a useful summary'],
      answer: 1,
      solution:
        'The total is $1 + 2 + 2 + 3 + 42 = 50$, so the mean really is $\\frac{50}{5} = 10$ — the arithmetic is fine, which rules out the first option. But four of the five values are $3$ or less! The lone outlier $42$ hauled the mean above almost the whole data set. The median here is $2$, so the mean is far BIGGER than the median, not smaller. And a mean is a fine summary when the data has no extreme values, so the last option overstates the case.',
    },
    {
      q: 'A blog reports that its five posts average $500$ views. The actual view counts were $60, 70, 80, 90$, and $2200$. Why is "an average of $500$ views" misleading?',
      choices: ['The average was computed incorrectly', 'The median view count is also $500$', 'Four of the five posts got under $100$ views — the single post with $2200$ views pulled the mean up to $500$', 'The range of the view counts is $500$'],
      answer: 2,
      solution:
        'The total is $60 + 70 + 80 + 90 + 2200 = 2500$, and $\\frac{2500}{5} = 500$, so the arithmetic is correct — the first option is wrong. The trouble is that four posts got under $100$ views while one viral post got $2200$; that one value alone accounts for most of the total. The median is the middle of the sorted list, $80$, not $500$, and the range is $2200 - 60 = 2140$, not $500$. Reporting the median would describe a typical post far more honestly.',
    },
    {
      q: 'For the data $5, 6, 6, 7, 96$, the mean is $24$. Which statement explains why the mean misrepresents this data?',
      choices: ['The mean of $24$ is wrong; the correct mean is $6$', 'The data has no mode, so no statistic can summarise it', 'The median, $24$, is a better summary', 'Every value except $96$ is below $8$, so the outlier $96$ dragged the mean far above the crowd'],
      answer: 3,
      solution:
        'The total is $5 + 6 + 6 + 7 + 96 = 120$, so the mean is genuinely $\\frac{120}{5} = 24$ — the first option confuses the mean with the median. This data does have a mode: $6$ appears twice, so the second option is false too. The median is the middle of the sorted list, $6$, not $24$, so the third option misstates it. What is true is that four of the five values are under $8$, and the single value $96$ pushed the mean up to $24$.',
    },
  ],
  // p9 — the largest possible value under mean/median constraints
  [
    {
      q: 'Five whole numbers, each at least $2$, have mean $10$ and median $6$. What is the largest possible value in the set?',
      choices: ['$34$', '$42$', '$38$', '$26$'],
      answer: 0,
      solution:
        'Mean $10$ means the total is $5 \\times 10 = 50$. Write the sorted set as $a, b, 6, d, e$. To make $e$ as big as possible, shrink everything else to its floor: $a$ and $b$ can be $2$, and $d$ must be at least the median, $6$. That uses $2 + 2 + 6 + 6 = 16$, leaving $e = 50 - 16 = 34$. The set $2, 2, 6, 6, 34$ checks out ✓. The choice $42$ pushes ALL four other numbers down to $2$, which would move the median. The choice $38$ keeps the median at $6$ but lets $d$ fall to $2$, and $d$ cannot sit below the middle value. The choice $26$ makes every other number $6$, which is smaller than necessary.',
    },
    {
      q: 'Five whole numbers, each at least $3$, have mean $12$ and median $8$. What is the largest possible value in the set?',
      choices: ['$48$', '$38$', '$43$', '$28$'],
      answer: 1,
      solution:
        'The total must be $5 \\times 12 = 60$. In sorted order the set is $a, b, 8, d, e$. Push $a$ and $b$ down to the floor of $3$, and let $d$ be as small as it is allowed to be, namely the median $8$. That accounts for $3 + 3 + 8 + 8 = 22$, so $e = 60 - 22 = 38$. The set $3, 3, 8, 8, 38$ works ✓. The choice $48$ sets all four other numbers to $3$, destroying the median. The choice $43$ remembers the median but lets $d$ drop to $3$, below the middle value. The choice $28$ makes every other number $8$.',
    },
    {
      q: 'Seven whole numbers, each at least $1$, have mean $9$ and median $4$. What is the largest possible value in the set?',
      choices: ['$57$', '$54$', '$48$', '$39$'],
      answer: 2,
      solution:
        'Mean $9$ over seven numbers means the total is $7 \\times 9 = 63$. Sorted, the set is $a, b, c, 4, e, f, g$, with the fourth value the median. Send $a, b, c$ to the floor of $1$, and let $e$ and $f$ be as small as allowed, which is the median value $4$. That uses $1 + 1 + 1 + 4 + 4 + 4 = 15$, so $g = 63 - 15 = 48$. The set $1, 1, 1, 4, 4, 4, 48$ checks out ✓. The choice $57$ sets all six other numbers to $1$ and ignores the median. The choice $54$ keeps the median but lets $e$ and $f$ drop to $1$, which they cannot do. The choice $39$ makes every other number $4$.',
    },
  ],
  // p10 — comparing two groups with the same average
  [
    {
      q: 'Team A ran $12, 14, 16, 18$, and $20$ practice laps, and Team B ran $15, 15, 16, 17$, and $17$. Which statement is true?',
      choices: ['The means and medians are equal, but Team A\'s lap counts are far more spread out', 'Team A has the higher mean', 'Team B has the larger range', 'The two teams have different medians'],
      answer: 0,
      solution:
        'Both teams total $80$ laps, so both means are $\\frac{80}{5} = 16$, and the middle value of each sorted list is $16$ as well. The spread is where they part company: Team A has range $20 - 12 = 8$, while Team B has range $17 - 15 = 2$. So Team A varies four times as widely — the second, third, and fourth options each claim a difference in a statistic the teams actually share, or get the range backwards.',
    },
    {
      q: 'Shop A\'s daily sales were $40, 45, 50, 55, 60$ and Shop B\'s were $25, 35, 50, 65, 75$. Which statement is true?',
      choices: ['Shop B has the higher mean', 'Shop A has the higher median', 'The means and medians match, but Shop B\'s range is more than twice Shop A\'s', 'The two shops have the same range'],
      answer: 2,
      solution:
        'Both shops total $250$, so both means are $\\frac{250}{5} = 50$, and the middle value of each sorted list is $50$. Their ranges differ: Shop A spans $60 - 40 = 20$ and Shop B spans $75 - 25 = 50$, and $50$ is indeed more than twice $20$. The first two options claim a gap in a statistic that is identical for the two shops, and the fourth denies the difference in spread entirely.',
    },
    {
      q: 'Two gardens each produced $120$ tomatoes over four weeks. Garden A produced $28, 29, 31, 32$ and Garden B produced $10, 20, 40, 50$. Which statement is true?',
      choices: ['Garden B produced more tomatoes in total', 'Garden A has the larger range', 'The two gardens have different medians', 'Both gardens have mean $30$ and median $30$, but Garden B\'s weekly output swings ten times as widely'],
      answer: 3,
      solution:
        'Each garden totals $120$, so each mean is $\\frac{120}{4} = 30$. With four values the median is the mean of the middle two: Garden A gives $\\frac{29 + 31}{2} = 30$ and Garden B gives $\\frac{20 + 40}{2} = 30$ — identical. But Garden A\'s range is $32 - 28 = 4$ and Garden B\'s is $50 - 10 = 40$, exactly ten times as wide. The first three options each assert a difference in a statistic the gardens share, or get the range the wrong way round.',
    },
  ],
]

const s133 = [
  // p1 — total from a table
  [
    {
      q: 'A book club sold raffle tickets: Monday $15$, Tuesday $11$, Wednesday $9$, Thursday $18$. How many tickets did the club sell in all?',
      choices: ['$44$', '$53$', '$35$', '$42$'],
      answer: 1,
      solution:
        'Add all four days: $15 + 11 + 9 + 18 = 53$ tickets. Pairing makes it easy: $15 + 11 = 26$ and $9 + 18 = 27$, and $26 + 27 = 53$. The other choices each leave a day out: $44$ skips Wednesday\'s $9$, $35$ skips Thursday\'s $18$, and $42$ skips Tuesday\'s $11$. Always tick off each row of the table as you add it.',
    },
    {
      q: 'A school garden harvested carrots: Week 1: $23$, Week 2: $17$, Week 3: $26$, Week 4: $14$. How many carrots were harvested altogether?',
      choices: ['$63$', '$20$', '$80$', '$66$'],
      answer: 2,
      solution:
        '"Altogether" means add every row: $23 + 17 + 26 + 14 = 80$ carrots. Grouping helps: $23 + 17 = 40$ and $26 + 14 = 40$, so the total is $80$. The choice $63$ leaves out Week 2\'s $17$ and $66$ leaves out Week 4\'s $14$. The choice $20$ is the MEAN per week, $\\frac{80}{4}$ — a per-week number, not a total.',
    },
    {
      q: 'A juice stand sold cups on four days: Friday $19$, Saturday $27$, Sunday $22$, Monday $14$. How many cups did it sell in total?',
      choices: ['$68$', '$20.5$', '$63$', '$82$'],
      answer: 3,
      solution:
        'Add the four days: $19 + 27 + 22 + 14 = 82$ cups. Check by grouping: $19 + 27 = 46$ and $22 + 14 = 36$, and $46 + 36 = 82$. ✓ The choice $68$ leaves out Monday\'s $14$ and $63$ leaves out Friday\'s $19$. The choice $20.5$ is the mean per day, $\\frac{82}{4}$, which answers a different question.',
    },
  ],
  // p2 — mean per day from a table
  [
    {
      q: 'A café sold muffins: Monday $14$, Tuesday $9$, Wednesday $18$, Thursday $11$. What was the mean number of muffins sold per day?',
      choices: ['$13$', '$52$', '$12.5$', '$9$'],
      answer: 0,
      solution:
        'First the total: $14 + 9 + 18 + 11 = 52$ muffins. Then divide by the $4$ days: $\\frac{52}{4} = 13$ muffins per day. Sense check: $13$ lands between the best day, $18$, and the worst, $9$, as a mean always must. The choice $52$ is the total, which is not a per-day figure. The choice $12.5$ is the median: sorted, the middle pair is $11$ and $14$, and $\\frac{11 + 14}{2} = 12.5$. The choice $9$ is the range, $18 - 9$.',
    },
    {
      q: 'Over five days a bike shop rented out $12, 9, 15, 8$, and $16$ bikes. What was the mean number of bikes rented per day?',
      choices: ['$60$', '$12$', '$15$', '$8$'],
      answer: 1,
      solution:
        'The total is $12 + 9 + 15 + 8 + 16 = 60$ bikes, spread over $5$ days: $\\frac{60}{5} = 12$ bikes per day. The choice $60$ is the total, one division short. The choice $15$ divides by $4$ instead of $5$ — count the days, not the gaps between them. The choice $8$ is the range, $16 - 8$, which measures spread rather than a typical day.',
    },
    {
      q: 'A flower stall sold $7, 10, 4, 9, 12$, and $12$ bunches on six days. What was the mean number of bunches sold per day?',
      choices: ['$54$', '$10.8$', '$9.5$', '$9$'],
      answer: 3,
      solution:
        'Total: $7 + 10 + 4 + 9 + 12 + 12 = 54$ bunches. Divide by the $6$ days: $\\frac{54}{6} = 9$ bunches per day. The choice $54$ is the total. The choice $10.8$ divides by $5$ instead of $6$, $\\frac{54}{5}$ — do not forget the repeated $12$; a value that appears twice must be counted twice. The choice $9.5$ is the median: sorted, the list is $4, 7, 9, 10, 12, 12$ and the middle pair averages to $\\frac{9 + 10}{2} = 9.5$.',
    },
  ],
  // p3 — comparing two categories
  [
    {
      q: 'A snack survey found: popcorn $11$, pretzels $6$, apples $8$. How many more students chose popcorn than pretzels?',
      choices: ['$5$', '$17$', '$3$', '$25$'],
      answer: 0,
      solution:
        '"How many more" is a subtraction between the two named categories: $11 - 6 = 5$ students. The choice $17$ adds the two categories, which answers "how many chose popcorn or pretzels". The choice $3$ compares the wrong pair, $11 - 8$ (popcorn against apples). The choice $25$ is the grand total of all three categories.',
    },
    {
      q: 'A class tally shows how students get to school: walk $13$, bus $21$, bike $5$. How many more students take the bus than walk?',
      choices: ['$34$', '$8$', '$16$', '$39$'],
      answer: 1,
      solution:
        'Subtract the two categories the question names: $21 - 13 = 8$ students. The choice $34$ adds them instead. The choice $16$ compares bus against bike, $21 - 5$, which is the wrong pair. The choice $39$ is the total number of students, $13 + 21 + 5$.',
    },
    {
      q: 'A library log shows books borrowed: mysteries $24$, poetry $9$, comics $16$. How many fewer poetry books than comics were borrowed?',
      choices: ['$25$', '$15$', '$7$', '$49$'],
      answer: 2,
      solution:
        '"How many fewer" is still a subtraction, and it compares poetry with comics: $16 - 9 = 7$ books. The choice $25$ adds the two categories. The choice $15$ subtracts the wrong pair, $24 - 9$, comparing poetry with mysteries. The choice $49$ is the grand total, $24 + 9 + 16$.',
    },
  ],
  // p4 — a percent of a total
  [
    {
      q: 'In a group of $32$ students, $25\\%$ chose swimming as their favourite sport. How many students is that?',
      choices: ['$8$', '$25$', '$16$', '$24$'],
      answer: 0,
      solution:
        '$25\\%$ is one quarter, and one quarter of $32$ is $\\frac{32}{4} = 8$ students. The choice $25$ reads the percent as if it were a head count, but $25\\%$ is a share, not a number of students. The choice $16$ takes half of $32$ instead of a quarter, and $24$ counts the other three quarters — the students who did NOT choose swimming.',
    },
    {
      q: 'Of the $50$ books on a shelf, $40\\%$ are picture books. How many picture books are there?',
      choices: ['$40$', '$30$', '$20$', '$5$'],
      answer: 2,
      solution:
        '$40\\%$ of $50$ is $0.4 \\times 50 = 20$ books. A quick check: $10\\%$ of $50$ is $5$, and four of those makes $20$. ✓ The choice $40$ mistakes the percent for a count. The choice $30$ counts the other $60\\%$, the books that are not picture books. The choice $5$ is $10\\%$ of $50$ — one shift of the decimal point too many.',
    },
    {
      q: 'A club has $60$ members, and $35\\%$ of them play chess. How many members play chess?',
      choices: ['$35$', '$39$', '$18$', '$21$'],
      answer: 3,
      solution:
        '$35\\%$ of $60$ is $0.35 \\times 60 = 21$ members. Building it up: $10\\%$ of $60$ is $6$, so $30\\%$ is $18$, and $5\\%$ is $3$; then $18 + 3 = 21$. ✓ The choice $35$ treats the percent as a head count. The choice $39$ counts the other $65\\%$, the members who do not play chess. The choice $18$ stops at $30\\%$ and forgets the last $5\\%$.',
    },
  ],
  // p5 — weighted mean from two group sizes
  [
    {
      q: 'On a spelling test, three students scored $60$ and seven students scored $90$. What was the mean score for all ten students?',
      choices: ['$75$', '$81$', '$69$', '$90$'],
      answer: 1,
      solution:
        'Total points: $3 \\times 60 + 7 \\times 90 = 180 + 630 = 810$. Divide by all $10$ students: $\\frac{810}{10} = 81$. The choice $75$ averages the two SCORES, $\\frac{60 + 90}{2}$, which would only be right if equal numbers of students got each score — here more students scored $90$, so the mean must lean toward $90$. The choice $69$ swaps the group sizes ($7 \\times 60 + 3 \\times 90$). The choice $90$ reports the more common score alone.',
    },
    {
      q: 'In a reading contest, five students each read $12$ books and fifteen students each read $20$ books. What was the mean number of books read per student?',
      choices: ['$16$', '$14$', '$18$', '$72$'],
      answer: 2,
      solution:
        'Total books: $5 \\times 12 + 15 \\times 20 = 60 + 300 = 360$. There are $5 + 15 = 20$ students, so the mean is $\\frac{360}{20} = 18$ books. The choice $16$ averages the two amounts, $\\frac{12 + 20}{2}$ — but the group of fifteen pulls three times as hard as the group of five, so the mean sits much closer to $20$. The choice $14$ swaps the group sizes ($15 \\times 12 + 5 \\times 20$), and $72$ divides the $360$ books by $5$ instead of by all $20$ students.',
    },
    {
      q: 'On a basketball team, eight players scored $15$ points each and two players scored $30$ points each. What was the mean number of points per player?',
      choices: ['$22.5$', '$27$', '$90$', '$18$'],
      answer: 3,
      solution:
        'Total points: $8 \\times 15 + 2 \\times 30 = 120 + 60 = 180$, scored by $8 + 2 = 10$ players. The mean is $\\frac{180}{10} = 18$ points. The choice $22.5$ averages the two SCORES, $\\frac{15 + 30}{2}$, ignoring that four times as many players scored $15$. The choice $27$ swaps the group sizes ($2 \\times 15 + 8 \\times 30$). The choice $90$ divides the $180$ points by the $2$ different score values instead of by the $10$ players.',
    },
  ],
  // p6 — mean from a frequency count
  [
    {
      q: 'In a survey, $4$ students have $0$ pets, $3$ students have $1$ pet, $2$ students have $2$ pets, and $1$ student has $3$ pets. What is the mean number of pets per student?',
      choices: ['$1$', '$1.5$', '$2.5$', '$0$'],
      answer: 0,
      solution:
        'Multiply each value by its frequency: $4 \\times 0 = 0$, $3 \\times 1 = 3$, $2 \\times 2 = 4$, $1 \\times 3 = 3$. The grand total is $0 + 3 + 4 + 3 = 10$ pets among $4 + 3 + 2 + 1 = 10$ students, so the mean is $\\frac{10}{10} = 1$ pet. The choice $1.5$ averages the four different VALUES, $\\frac{0 + 1 + 2 + 3}{4}$, ignoring how many students each one covers. The choice $2.5$ divides the $10$ pets by the $4$ different values instead of the $10$ students. The choice $0$ is the mode, the most common number of pets.',
    },
    {
      q: 'In a survey, $5$ students own $0$ hats, $3$ students own $2$ hats, and $2$ students own $4$ hats. What is the mean number of hats per student?',
      choices: ['$2$', '$1.4$', '$14$', '$0$'],
      answer: 1,
      solution:
        'Multiply each value by its frequency: $5 \\times 0 = 0$, $3 \\times 2 = 6$, $2 \\times 4 = 8$. That is $0 + 6 + 8 = 14$ hats among $5 + 3 + 2 = 10$ students, so the mean is $\\frac{14}{10} = 1.4$ hats. Notice the mean is not a whole number, and that is perfectly fine — nobody owns $1.4$ hats, but that is the fair share. The choice $2$ averages the three different values, $\\frac{0 + 2 + 4}{3}$. The choice $14$ is the total number of hats, and $0$ is the mode.',
    },
    {
      q: 'A coach recorded goals: $2$ players scored $1$ goal, $6$ players scored $2$ goals, and $2$ players scored $5$ goals. What is the mean number of goals per player?',
      choices: ['$8$', '$24$', '$2.4$', '$2$'],
      answer: 2,
      solution:
        'Multiply value by frequency: $2 \\times 1 = 2$, $6 \\times 2 = 12$, $2 \\times 5 = 10$. The grand total is $2 + 12 + 10 = 24$ goals among $2 + 6 + 2 = 10$ players, so the mean is $\\frac{24}{10} = 2.4$ goals. The choice $8$ divides the $24$ goals by the $3$ different values instead of the $10$ players. The choice $24$ is the total number of goals, not a per-player figure. The choice $2$ is the mode — the most common number of goals — which is a different statistic.',
    },
  ],
  // p7 — the leftover slice of a percent breakdown
  [
    {
      q: 'A class cast $60$ votes for a class pet: $45\\%$ chose a hamster, $35\\%$ chose a fish, and the rest chose a turtle. How many votes did the turtle get?',
      choices: ['$12$', '$20$', '$27$', '$21$'],
      answer: 0,
      solution:
        'First find the leftover share: $100\\% - 45\\% - 35\\% = 20\\%$. Then take $20\\%$ of $60$: $0.2 \\times 60 = 12$ votes. Check the whole pie: $27 + 21 + 12 = 60$ ✓. The choice $20$ is the turtle\'s PERCENT, not its vote count — the percent still has to be converted. The choice $27$ is the hamster count, $45\\%$ of $60$, and $21$ is the fish count, $35\\%$ of $60$.',
    },
    {
      q: 'Of $80$ survey responses, $30\\%$ picked blue, $45\\%$ picked green, and the rest picked red. How many responses picked red?',
      choices: ['$25$', '$20$', '$24$', '$36$'],
      answer: 1,
      solution:
        'Red gets whatever percent is left: $100\\% - 30\\% - 45\\% = 25\\%$. Since $25\\%$ is one quarter, that is $\\frac{80}{4} = 20$ responses. Check: $24 + 36 + 20 = 80$ ✓. The choice $25$ reports red\'s percent instead of its count. The choice $24$ is the blue count, $30\\%$ of $80$, and $36$ is the green count, $45\\%$ of $80$.',
    },
    {
      q: 'A survey of $200$ readers found that $52\\%$ prefer mysteries, $33\\%$ prefer adventure, and the rest prefer poetry. How many readers prefer poetry?',
      choices: ['$15$', '$104$', '$66$', '$30$'],
      answer: 3,
      solution:
        'The poetry slice is $100\\% - 52\\% - 33\\% = 15\\%$ of the pie. Then $15\\%$ of $200$ is $0.15 \\times 200 = 30$ readers. Check the whole survey: $104 + 66 + 30 = 200$ ✓. The choice $15$ is the poetry percent, which is not yet a number of readers. The choice $104$ is the mystery count, $52\\%$ of $200$, and $66$ is the adventure count, $33\\%$ of $200$.',
    },
  ],
  // p8 — one category as a percent of the total
  [
    {
      q: 'A store sold $9, 14, 12$, and $15$ jackets over four weeks. What percent of the total was sold in the last week?',
      choices: ['$25\\%$', '$30\\%$', '$15\\%$', '$28\\%$'],
      answer: 1,
      solution:
        'First the total: $9 + 14 + 12 + 15 = 50$ jackets. The last week\'s share is $\\frac{15}{50} = \\frac{3}{10} = 30\\%$. The choice $25\\%$ assumes all four weeks were equal, which they were not. The choice $15\\%$ reads the jacket count as a percent — the count still has to be compared to the total. The choice $28\\%$ uses the wrong week: $\\frac{14}{50} = 28\\%$ is the second week\'s share.',
    },
    {
      q: 'A team scored $18, 24, 22$, and $16$ points in four games. What percent of its total points came in the second game?',
      choices: ['$25\\%$', '$24\\%$', '$30\\%$', '$27.5\\%$'],
      answer: 2,
      solution:
        'The total is $18 + 24 + 22 + 16 = 80$ points. The second game gave $24$ of them, so its share is $\\frac{24}{80} = \\frac{3}{10} = 30\\%$. The choice $25\\%$ assumes the four games were equal. The choice $24\\%$ mistakes the point count for a percent. The choice $27.5\\%$ uses the third game instead: $\\frac{22}{80} = 27.5\\%$.',
    },
    {
      q: 'A bakery sold $12, 8, 14$, and $6$ loaves over four days. What percent of the total was sold on the third day?',
      choices: ['$25\\%$', '$14\\%$', '$30\\%$', '$35\\%$'],
      answer: 3,
      solution:
        'The total is $12 + 8 + 14 + 6 = 40$ loaves. The third day sold $14$, so its share is $\\frac{14}{40} = \\frac{7}{20} = 35\\%$. The choice $25\\%$ assumes every day was the same. The choice $14\\%$ reads the loaf count straight off as a percent. The choice $30\\%$ uses the first day instead: $\\frac{12}{40} = 30\\%$.',
    },
  ],
  // p9 — combining two group averages
  [
    {
      q: 'In a club, $8$ juniors have a mean age of $11$ years and $12$ seniors have a mean age of $16$ years. What is the mean age of the whole club?',
      choices: ['$14$', '$13.5$', '$13$', '$16$'],
      answer: 0,
      solution:
        'Turn each average into a total: the juniors account for $8 \\times 11 = 88$ years and the seniors for $12 \\times 16 = 192$ years. Together: $\\frac{88 + 192}{20} = \\frac{280}{20} = 14$ years. The choice $13.5$ averages the two AVERAGES, $\\frac{11 + 16}{2}$ — that would only be right with equal group sizes, and here there are more seniors, so the mean tilts toward $16$. The choice $13$ swaps the two group sizes, and $16$ reports the larger group\'s average alone.',
    },
    {
      q: 'On a quiz, $6$ students in Group A averaged $95$ and $24$ students in Group B averaged $75$. What is the mean score for all $30$ students?',
      choices: ['$85$', '$91$', '$79$', '$75$'],
      answer: 2,
      solution:
        'Totals first: Group A scored $6 \\times 95 = 570$ points and Group B scored $24 \\times 75 = 1800$. Together: $\\frac{570 + 1800}{30} = \\frac{2370}{30} = 79$. The choice $85$ averages the two averages, $\\frac{95 + 75}{2}$, ignoring that Group B is four times as large — so the class mean has to sit near $75$, not halfway. The choice $91$ swaps the group sizes ($24 \\times 95 + 6 \\times 75$), and $75$ takes the bigger group\'s average by itself, which forgets Group A entirely.',
    },
    {
      q: 'A choir has $25$ singers whose mean practice time is $40$ minutes and $15$ singers whose mean practice time is $64$ minutes. What is the mean practice time for all $40$ singers?',
      choices: ['$52$', '$55$', '$1960$', '$49$'],
      answer: 3,
      solution:
        'Convert each average to a total: $25 \\times 40 = 1000$ minutes and $15 \\times 64 = 960$ minutes. Together that is $1960$ minutes among $40$ singers: $\\frac{1960}{40} = 49$ minutes. The choice $52$ averages the two averages, $\\frac{40 + 64}{2}$ — but the group of $25$ outweighs the group of $15$, so the true mean sits below the midpoint. The choice $55$ swaps the group sizes ($15 \\times 40 + 25 \\times 64$), and $1960$ is the grand total of minutes, one division short of a mean.',
    },
  ],
  // p10 — a misleading average
  [
    {
      q: 'An arcade advertises, "our players win an average of $\\$40$ per visit!" The six recorded winnings were $\\$0, \\$0, \\$5, \\$5, \\$10$, and $\\$220$. Why is the advertisement misleading?',
      choices: ['Five of the six players won $\\$10$ or less — a single $\\$220$ win pulled the mean up to $\\$40$', 'The mean was computed incorrectly; it is really $\\$5$', 'The median winning is also $\\$40$', 'The range of the winnings is $\\$40$'],
      answer: 0,
      solution:
        'The total is $0 + 0 + 5 + 5 + 10 + 220 = 240$ dollars, so the mean really is $\\frac{240}{6} = \\$40$ ✓ — the arithmetic is honest, which rules out the second option. The trouble is that five of the six players won $\\$10$ or less, while one lucky player won $\\$220$ and supplied almost the entire total by himself. With six values the median is the mean of the two middle ones, $\\frac{5 + 5}{2} = \\$5$, not $\\$40$, and the range is $220 - 0 = \\$220$, not $\\$40$. Advertising the median would describe a typical visit far more honestly.',
    },
    {
      q: 'A tutoring service claims, "students gain an average of $30$ points!" The five recorded gains were $2, 3, 4, 5$, and $136$ points. Why is the claim misleading?',
      choices: ['The average was computed incorrectly', 'Four of the five students gained $5$ points or fewer; one gain of $136$ points dragged the mean up to $30$', 'The median gain is $30$ points as well', 'Averages can never be reported honestly'],
      answer: 1,
      solution:
        'The total is $2 + 3 + 4 + 5 + 136 = 150$, so the mean really is $\\frac{150}{5} = 30$ — the arithmetic is correct, which rules out the first option. But four of the five students gained at most $5$ points; the single gain of $136$ supplied most of the total on its own. The median is the middle of the sorted list, $4$ points, not $30$. And averages are perfectly honest for data without extreme values, so the last option goes too far.',
    },
    {
      q: 'A town reports that the mean number of people per household is $6$. The six households hold $2, 2, 2, 3, 3$, and $24$ people. Which statement best explains why the mean misleads here?',
      choices: ['The mean is really $7.2$, not $6$', 'The median is $6$, so both statistics agree', 'A mean should never be used for household data', 'Every household but one holds $3$ people or fewer, so the single household of $24$ lifted the mean to $6$ — the median, $2.5$, describes the town far better'],
      answer: 3,
      solution:
        'The total is $2 + 2 + 2 + 3 + 3 + 24 = 36$ people in $6$ households, so the mean is $\\frac{36}{6} = 6$ ✓. The choice $7.2$ comes from dividing $36$ by $5$ instead of $6$ — the count of households includes the big one. With six values the median is the mean of the two middle ones, $\\frac{2 + 3}{2} = 2.5$, so the second option is wrong: the two statistics disagree sharply, which is the whole point. And a mean is a fine summary when no value is extreme, so the third option overstates the case.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 13,
  sections: {
    '13.1': s131,
    '13.2': s132,
    '13.3': s133,
  },
}
