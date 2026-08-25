// Prealgebra chapter 13 — variations for the chapter challenge and the chapter
// worksheet. All problems and solutions are original MathQuest content.

const challenge = [
  // 1. Work backwards from the mean to a missing value.
  [
    {
      q: 'The mean of $18$, $27$, $35$, and $y$ is $28$. What is $y$?',
      choices: ['$4$', '$32$', '$28$', '$112$'],
      answer: 1,
      solution: 'Mean $\\times$ count $=$ total, so four numbers with mean $28$ must total $4 \\times 28 = 112$. The three known numbers give $18 + 27 + 35 = 80$, so $y = 112 - 80 = 32$. Check: $\\frac{18 + 27 + 35 + 32}{4} = \\frac{112}{4} = 28$. ✓ ($28$ assumes the missing number must equal the mean; $4$ comes from multiplying by the $3$ known numbers instead of all $4$, giving $84 - 80$; $112$ is the total, which still needs the subtraction.)',
    },
    {
      q: 'The mean of $42$, $19$, $23$, $30$, and $m$ is $30$. What is $m$?',
      choices: ['$6$', '$114$', '$36$', '$30$'],
      answer: 2,
      solution: 'Five numbers with mean $30$ must total $5 \\times 30 = 150$. The four known numbers give $42 + 19 + 23 + 30 = 114$, so $m = 150 - 114 = 36$. Check: $\\frac{114 + 36}{5} = \\frac{150}{5} = 30$. ✓ ($30$ assumes the missing number equals the mean; $6$ comes from using the $4$ known values as the count, $120 - 114$; $114$ is the running total of what we already knew.)',
    },
    {
      q: 'Nadia scored $93$, $84$, and $87$ on three science labs. What must she score on a fourth lab so that her mean is exactly $90$?',
      choices: ['$84$', '$88$', '$90$', '$96$'],
      answer: 3,
      solution: 'Four labs with mean $90$ must total $4 \\times 90 = 360$. So far she has $93 + 84 + 87 = 264$, so she needs $360 - 264 = 96$. The surplus method agrees: her scores sit $+3$, $-6$, and $-3$ from $90$, a net shortfall of $6$, so the fourth lab must be $6$ above $90$. ($88$ is the mean of just the three labs she has already taken; $90$ assumes the last score equals the target mean; $84$ flips the sign of the shortfall and subtracts the $6$ instead of adding it.)',
    },
  ],
  // 2. Median of an even-length list — sort first, then average the two middles.
  [
    {
      q: 'What is the median of $22, 7, 13, 4, 19, 10$?',
      choices: ['$11.5$', '$8.5$', '$10$', '$12.5$'],
      answer: 0,
      solution: 'Sort first: $4, 7, 10, 13, 19, 22$. Six numbers means two middle values, $10$ and $13$, and the median is their mean: $\\frac{10 + 13}{2} = 11.5$. Notice the median is not a member of the list at all — with an even count it often is not. (Averaging the middle pair of the UNSORTED list, $13$ and $4$, gives $8.5$; stopping at the lower of the two middles gives $10$; $12.5$ is the mean of the whole list, a different statistic.)',
    },
    {
      q: 'What is the median of $8, 27, 15, 3, 20, 11$?',
      choices: ['$9$', '$11$', '$13$', '$14$'],
      answer: 2,
      solution: 'Sorting is the whole game: $3, 8, 11, 15, 20, 27$. With six values the two middles are $11$ and $15$, so the median is $\\frac{11 + 15}{2} = 13$. (Taking the middle pair of the unsorted list, $15$ and $3$, gives $9$; grabbing only the lower middle gives $11$; $14$ is the mean, since the six values total $84$.)',
    },
    {
      q: 'A player scored $17, 6, 12, 25, 9, 21$ points in six games. What is the median number of points?',
      choices: ['$12$', '$15$', '$18.5$', '$14.5$'],
      answer: 3,
      solution: 'Sort the scores: $6, 9, 12, 17, 21, 25$. Six values means two middles, $12$ and $17$, so the median is $\\frac{12 + 17}{2} = 14.5$ points — a value the player never actually scored, which is perfectly normal for an even count. (Averaging the unsorted middle pair, $12$ and $25$, gives $18.5$; reporting just the lower middle gives $12$; the mean is $\\frac{90}{6} = 15$, but that is not what was asked.)',
    },
  ],
  // 3. How far the range collapses once the outlier leaves.
  [
    {
      q: 'The data set $3, 8, 61, 5, 11$ contains the outlier $61$. By how much does the range shrink when the outlier is removed?',
      choices: ['$50$', '$8$', '$58$', '$47$'],
      answer: 0,
      solution: 'With the outlier the extremes are $61$ and $3$, so the range is $61 - 3 = 58$. Without it the data is $3, 5, 8, 11$, whose range is $11 - 3 = 8$. The shrink is $58 - 8 = 50$. Because the range looks only at the two ends, a single far-flung value can control it completely. ($58$ is the original range and $8$ is the new one — each answers a different question; $47$ comes from subtracting the new largest value, $11$, from the old range instead of subtracting the new range.)',
    },
    {
      q: 'A data set of test scores is $58, 61, 3, 64, 55$, and the $3$ is an outlier. By how much does the range shrink when it is removed?',
      choices: ['$9$', '$52$', '$61$', '$58$'],
      answer: 1,
      solution: 'Here the outlier is the SMALLEST value, not the largest. With it, the range is $64 - 3 = 61$; without it the data is $55, 58, 61, 64$, with range $64 - 55 = 9$. The shrink is $61 - 9 = 52$. ($61$ is the original range and $9$ is the new range — neither is the amount of shrink; $58$ comes from subtracting the outlier itself, $3$, from the old range instead of subtracting the new range.)',
    },
    {
      q: 'Six runners finished in $12, 14, 90, 15, 11, 13$ seconds. The $90$ is an outlier. By how much does the range shrink when that time is dropped?',
      choices: ['$4$', '$79$', '$86$', '$75$'],
      answer: 3,
      solution: 'With the outlier: range $= 90 - 11 = 79$ seconds. Without it the times are $11, 12, 13, 14, 15$, so the range is $15 - 11 = 4$. The shrink is $79 - 4 = 75$ seconds. Remember the range is one number, not an interval — it measures spread, not position. ($79$ and $4$ are the two ranges themselves; $86$ comes from subtracting the new range from the outlier, $90 - 4$, instead of comparing the two ranges.)',
    },
  ],
  // 4. A weighted mean, where averaging the averages is the trap.
  [
    {
      q: 'Dev took ten quizzes: he scored $75$ on eight of them and $95$ on the other two. What is his mean score?',
      choices: ['$79$', '$75$', '$85$', '$91$'],
      answer: 0,
      solution: 'Count the points, not the scores: $8 \\times 75 + 2 \\times 95 = 600 + 190 = 790$, over $10$ quizzes, so the mean is $\\frac{790}{10} = 79$. ($85$ is the average of the two averages, $\\frac{75 + 95}{2}$ — that would only be right with equal numbers of each score, and there are four times as many $75$s; $91$ attaches the counts to the wrong scores, $\\frac{2 \\times 75 + 8 \\times 95}{10}$; $75$ ignores the two high quizzes entirely.)',
    },
    {
      q: 'In a reading club, $6$ members read $8$ books each, $3$ members read $14$ books each, and $1$ member read $20$ books. What is the mean number of books per member?',
      choices: ['$8$', '$11$', '$14$', '$17$'],
      answer: 1,
      solution: 'Multiply each value by its frequency, then add: $6 \\times 8 + 3 \\times 14 + 1 \\times 20 = 48 + 42 + 20 = 110$ books. Divide by the number of MEMBERS, $6 + 3 + 1 = 10$, not by the three different book counts: $\\frac{110}{10} = 11$. ($14$ is $\\frac{8 + 14 + 20}{3}$, the average of the three values with the frequencies thrown away; $17$ pairs the frequencies with the wrong values, $\\frac{1 \\times 8 + 3 \\times 14 + 6 \\times 20}{10}$; $8$ is the mode, the most common value, not the mean.)',
    },
    {
      q: 'Section A has $12$ students with a mean score of $85$. Section B has $18$ students with a mean score of $75$. What is the mean score of all $30$ students?',
      choices: ['$81$', '$85$', '$79$', '$80$'],
      answer: 2,
      solution: 'Rebuild the totals: Section A holds $12 \\times 85 = 1020$ points and Section B holds $18 \\times 75 = 1350$ points. Together that is $2370$ points among $30$ students: $\\frac{2370}{30} = 79$. ($80$ averages the averages, $\\frac{85 + 75}{2}$ — but Section B is the bigger group, so the combined mean must be pulled below the midpoint, toward $75$; $81$ swaps the two group sizes; $85$ forgets Section B is even there.)',
    },
  ],
  // 5. A value joins or leaves — track the total, not the mean.
  [
    {
      q: 'Eight numbers have a mean of $15$. A ninth number, $24$, is added to the list. What is the new mean?',
      choices: ['$18$', '$16$', '$19.5$', '$15$'],
      answer: 1,
      solution: 'The old total is $8 \\times 15 = 120$. Adding $24$ makes it $144$, now shared by $9$ numbers: $\\frac{144}{9} = 16$. Shortcut: $24$ sits $9$ above the old mean, and that surplus spreads over all $9$ numbers, lifting the mean by $\\frac{9}{9} = 1$. ($18$ divides the new total by the OLD count of $8$; $19.5$ averages the old mean with the new number, $\\frac{15 + 24}{2}$, which ignores that the $15$ stands for eight numbers; $15$ assumes a new value cannot move the mean.)',
    },
    {
      q: 'Six numbers have a mean of $20$. The number $30$ is removed from the list. What is the mean of the five numbers that remain?',
      choices: ['$15$', '$20$', '$18$', '$22$'],
      answer: 2,
      solution: 'The old total is $6 \\times 20 = 120$. Removing $30$ leaves a total of $90$ shared by $5$ numbers: $\\frac{90}{5} = 18$. Shortcut: the departing value was $10$ above the mean, so its loss costs the remaining five $\\frac{10}{5} = 2$ each. ($15$ divides the new total by the old count of $6$; $22$ flips the sign and raises the mean, but removing an above-average value must LOWER it; $20$ assumes nothing changes.)',
    },
    {
      q: 'For the first four days of a week a bakery took in a mean of $\\$120$ per day. On Friday it took in $\\$220$. What is the mean daily take over those five days?',
      choices: ['$\\$120$', '$\\$170$', '$\\$175$', '$\\$140$'],
      answer: 3,
      solution: 'The first four days brought in $4 \\times 120 = 480$ dollars, and Friday adds $220$, for a five-day total of $\\$700$. The mean is $\\frac{700}{5} = \\$140$ per day. ($\\$175$ divides the new total by $4$, the old number of days; $\\$170$ averages $\\$120$ with $\\$220$, forgetting that $\\$120$ speaks for four days and $\\$220$ for only one; $\\$120$ assumes the big Friday changes nothing.)',
    },
  ],
  // 6. The median ignores what happens out at the ends; the mean does not.
  [
    {
      q: 'The seven values $4, 9, 11, 15, 20, 23, 30$ have median $15$. If the $30$ is replaced by $100$, what happens to the median?',
      choices: ['It stays $15$', 'It becomes $26$', 'It becomes $20$', 'It more than triples'],
      answer: 0,
      solution: 'The new sorted list is $4, 9, 11, 15, 20, 23, 100$, and the middle of seven values is still the fourth one: $15$. Only the POSITION of the middle matters, and stretching the largest value does not move anything past it. The mean is a different story — it climbs from $\\frac{112}{7} = 16$ to $\\frac{182}{7} = 26$. ($26$ is that new mean, not the median; $20$ slides one place right, as if a bigger value pushed the middle along; "more than triples" assumes the median scales with the largest value.)',
    },
    {
      q: 'Nine daily low temperatures, in degrees, were recorded as $12, 14, 15, 17, 18, 20, 21, 23, 25$, with median $18$. One reading was wrong: the $12$ should have been $-27$. What happens to the median?',
      choices: ['It becomes $14$', 'It drops to $-27$', 'It stays $18$', 'It becomes $17$'],
      answer: 2,
      solution: 'The corrected sorted list is $-27, 14, 15, 17, 18, 20, 21, 23, 25$. With nine values the median is the fifth, which is still $18$ — the correction changed a value at the far END of the line, so the middle never moved. The mean, however, falls from $\\frac{165}{9} \\approx 18.3$ to $\\frac{126}{9} = 14$. ($14$ is that new mean; $17$ slides one place left; $-27$ confuses the changed value with the median.)',
    },
    {
      q: 'The nine values $4, 6, 8, 11, 13, 14, 15, 17, 20$ have mean $12$ and median $13$. The $20$ is replaced by $110$. Which statement is correct?',
      choices: ['The median rises to $15$', 'Both the mean and the median rise', 'The mean stays $12$ and the median rises', 'The median stays $13$ while the mean rises to $22$'],
      answer: 3,
      solution: 'Compute both, before and after. The median is the fifth of nine sorted values: it was $13$, and in $4, 6, 8, 11, 13, 14, 15, 17, 110$ it is still $13$. The total, though, jumps from $108$ to $108 - 20 + 110 = 198$, so the mean climbs from $\\frac{108}{9} = 12$ to $\\frac{198}{9} = 22$. That is the whole lesson: one extreme value hauls the mean along and leaves the median where it was. ("The median rises to $15$" slides one place right; "both rise" assumes every statistic follows the data; the third choice has the two statistics exactly swapped.)',
    },
  ],
  // 7. Push one value to an extreme while the rest sit at their limit.
  [
    {
      q: 'Five whole numbers have a mean of $12$, and each one is at least $4$. What is the largest that any one of them can be?',
      choices: ['$44$', '$48$', '$56$', '$60$'],
      answer: 0,
      solution: 'The total is fixed at $5 \\times 12 = 60$. To let one number grow as large as possible, squeeze the other FOUR down to their floor of $4$, using $4 \\times 4 = 16$. That leaves $60 - 16 = 44$. Check: $4, 4, 4, 4, 44$ totals $60$, so its mean is $12$. ✓ ($48$ shrinks only three of the others; $56$ sets aside just one $4$; $60$ is the total, which ignores the floor entirely.)',
    },
    {
      q: 'Six whole numbers have a mean of $9$, and each one is at least $5$. What is the largest that any one of them can be?',
      choices: ['$24$', '$29$', '$34$', '$49$'],
      answer: 1,
      solution: 'The total must be $6 \\times 9 = 54$. Drop the other FIVE numbers to their minimum of $5$, using $5 \\times 5 = 25$, leaving $54 - 25 = 29$. Check: $5, 5, 5, 5, 5, 29$ totals $54$, giving a mean of $9$. ✓ ($34$ shrinks only four of the others; $49$ sets aside a single $5$; $24$ subtracts six $5$s, one too many — the big number is not also sitting at the floor.)',
    },
    {
      q: 'Five whole numbers have a mean of $18$, and none of them is greater than $20$. What is the smallest that any one of them can be?',
      choices: ['$0$', '$18$', '$30$', '$10$'],
      answer: 3,
      solution: 'This time the limit points the other way. The total is $5 \\times 18 = 90$, and to leave one number as small as possible the other FOUR should be as big as they are allowed: $4 \\times 20 = 80$. That leaves $90 - 80 = 10$. Check: $20, 20, 20, 20, 10$ totals $90$. ✓ And $9$ is impossible, since the other four could then reach only $80 < 81$. ($0$ forgets that the others are capped at $20$; $30$ pushes only three of them to the cap; $18$ is the all-equal set, which satisfies the rules but is not the smallest.)',
    },
  ],
  // 8. The leftover slice of the pie.
  [
    {
      q: 'Of $80$ concert tickets sold, $35\\%$ went to students and $40\\%$ went to adults. The rest went to seniors. How many tickets went to seniors?',
      choices: ['$20$', '$25$', '$28$', '$32$'],
      answer: 0,
      solution: 'The slices must fill the whole pie, so seniors took $100\\% - 35\\% - 40\\% = 25\\%$. Then $25\\%$ of $80$ is $\\frac{80}{4} = 20$ tickets. Check: $28 + 32 + 20 = 80$. ✓ ($25$ is the percent left over, not a ticket count — the percent still has to be applied to $80$; $28$ is the student count and $32$ is the adult count.)',
    },
    {
      q: 'In a survey of $200$ readers, $35\\%$ prefer mysteries, $20\\%$ prefer fantasy, and $15\\%$ prefer history. The rest prefer poetry. How many readers prefer poetry?',
      choices: ['$30$', '$60$', '$70$', '$40$'],
      answer: 1,
      solution: 'The named slices use $35\\% + 20\\% + 15\\% = 70\\%$, so poetry gets the remaining $30\\%$. Then $30\\%$ of $200$ is $0.3 \\times 200 = 60$ readers. Check that the counts fill the survey: $70 + 40 + 30 + 60 = 200$. ✓ ($30$ is the leftover percent mistaken for a count; $70$ is the mystery count and $40$ is the fantasy count.)',
    },
    {
      q: 'Of $250$ museum visitors, $90$ went to the dinosaur hall and $85$ went to the gem hall. Everyone else went to the space hall. What percent of the visitors went to the space hall?',
      choices: ['$34\\%$', '$36\\%$', '$30\\%$', '$70\\%$'],
      answer: 2,
      solution: 'This runs the other direction: start from counts and finish with a percent. The space hall got $250 - 90 - 85 = 75$ visitors, and $\\frac{75}{250} = \\frac{3}{10} = 30\\%$. Check the whole pie: $36\\% + 34\\% + 30\\% = 100\\%$. ✓ ($36\\%$ is the dinosaur share and $34\\%$ is the gem share; $70\\%$ is the share that did NOT go to the space hall.)',
    },
  ],
  // 9. Combining two groups of different sizes.
  [
    {
      q: 'Group A has $5$ numbers with a mean of $30$. Group B has $15$ numbers with a mean of $10$. What is the mean of all twenty numbers together?',
      choices: ['$20$', '$15$', '$25$', '$10$'],
      answer: 1,
      solution: 'Turn each mean back into a total: Group A holds $5 \\times 30 = 150$ and Group B holds $15 \\times 10 = 150$. Together that is $300$ spread over $20$ numbers: $\\frac{300}{20} = 15$. ($20$ is the average of the averages, $\\frac{30 + 10}{2}$ — but Group B is three times as big, so it pulls the combined mean down toward $10$; $25$ swaps the two group sizes; $10$ ignores Group A.)',
    },
    {
      q: 'On a trail day, $8$ hikers walked a mean of $6$ km each and $12$ hikers walked a mean of $11$ km each. What is the mean distance walked per hiker?',
      choices: ['$8$', '$8.5$', '$9$', '$15$'],
      answer: 2,
      solution: 'Totals first: $8 \\times 6 = 48$ km and $12 \\times 11 = 132$ km, so all twenty hikers covered $180$ km. The mean per hiker is $\\frac{180}{20} = 9$ km. Sense check: the larger group walked farther, so the answer should sit above the midpoint $8.5$ — and $9$ does. ($8.5$ averages the averages; $8$ attaches the group sizes to the wrong distances; $15$ divides the grand total by only the larger group, $\\frac{180}{12}$.)',
    },
    {
      q: 'A club of $20$ members has a mean age of $16$. The $12$ junior members have a mean age of $14$. What is the mean age of the other $8$ members?',
      choices: ['$18$', '$13$', '$152$', '$19$'],
      answer: 3,
      solution: 'Work with totals in both directions. All $20$ members account for $20 \\times 16 = 320$ years, and the juniors account for $12 \\times 14 = 168$. The other eight therefore hold $320 - 168 = 152$ years, a mean of $\\frac{152}{8} = 19$. Check: $\\frac{168 + 152}{20} = \\frac{320}{20} = 16$. ✓ ($18$ assumes the two group means simply average to $16$; $13$ flips the sign of the correction, but the juniors are BELOW average so the others must be above; $152$ is the other group\'s total, not its mean.)',
    },
  ],
  // 10. A frequency table with an unknown count, pinned down by the mean.
  [
    {
      q: 'In a class survey, $3$ students read $0$ books, $5$ students read $2$ books each, and $x$ students read $5$ books each. The mean is exactly $2$ books per student. What is $x$?',
      choices: ['$2$', '$0$', '$6$', '$10$'],
      answer: 0,
      solution: 'Books read: $3 \\times 0 + 5 \\times 2 + 5x = 10 + 5x$. Students: $3 + 5 + x = 8 + x$. A mean of $2$ means the books are twice the students: $10 + 5x = 2(8 + x) = 16 + 2x$, so $3x = 6$ and $x = 2$. Check: $10$ students read $0 + 10 + 10 = 20$ books, a mean of exactly $2$. ✓ ($6$ stops at the line $3x = 6$ without dividing; $10$ reports the total number of students instead; $0$ assumes nobody can sit above the mean, which is not so — the students who read $0$ balance them.)',
    },
    {
      q: 'On a test, $5$ students scored $4$, another $5$ students scored $7$, and $y$ students scored $10$. The class mean is exactly $7$. What is $y$?',
      choices: ['$0$', '$10$', '$15$', '$5$'],
      answer: 3,
      solution: 'Points: $5 \\times 4 + 5 \\times 7 + 10y = 55 + 10y$. Students: $10 + y$. Setting the mean to $7$ gives $55 + 10y = 7(10 + y) = 70 + 7y$, so $3y = 15$ and $y = 5$. Check: $15$ students scored $20 + 35 + 50 = 105$ points, and $\\frac{105}{15} = 7$. ✓ Balance view: five scores sit $3$ below the mean, a deficit of $15$, and each $10$ supplies a surplus of $3$, so five of them are needed. ($15$ stops at $3y = 15$; $10$ reports the students already listed; $0$ assumes no score may exceed the mean.)',
    },
    {
      q: 'A restaurant has $5$ tables that seat $2$, $x$ tables that seat $6$, and $3$ tables that seat $8$. The mean is exactly $5$ seats per table. What is $x$?',
      choices: ['$8$', '$14$', '$6$', '$15$'],
      answer: 2,
      solution: 'Seats: $5 \\times 2 + 6x + 3 \\times 8 = 34 + 6x$. Tables: $5 + x + 3 = 8 + x$. A mean of $5$ gives $34 + 6x = 5(8 + x) = 40 + 5x$, so $x = 6$. Check: $14$ tables hold $10 + 36 + 24 = 70$ seats, and $\\frac{70}{14} = 5$. ✓ ($8$ is the number of tables already listed; $14$ is the total number of tables, which answers a different question; $15$ comes from balancing the five $3$-below tables while forgetting that the $8$-seaters already supply $9$ of the needed surplus.)',
    },
  ],
  // 11. The gap between the mean and the median is an outlier alarm.
  [
    {
      q: 'For the data set $9, 55, 2, 11, 3$, what is the mean minus the median?',
      choices: ['$7$', '$14$', '$16$', '$53$'],
      answer: 0,
      solution: 'Mean: the values total $9 + 55 + 2 + 11 + 3 = 80$, so the mean is $\\frac{80}{5} = 16$. Median: sort to get $2, 3, 9, 11, 55$, whose middle value is $9$. The difference is $16 - 9 = 7$. A gap that wide is a signal that an outlier — here $55$ — is tugging on the mean. ($14$ uses the middle of the UNSORTED list, $2$, instead of the median; $16$ reports the mean alone; $53$ is the range, $55 - 2$.)',
    },
    {
      q: 'For the data set $4, 6, 7, 8, 10, 25$, what is the mean minus the median?',
      choices: ['$3$', '$2.5$', '$10$', '$21$'],
      answer: 1,
      solution: 'Mean: the six values total $60$, so the mean is $\\frac{60}{6} = 10$. Median: the list is already sorted and has an EVEN count, so average the two middle values: $\\frac{7 + 8}{2} = 7.5$. The difference is $10 - 7.5 = 2.5$. ($3$ takes the median to be just $7$, the lower of the two middles, instead of averaging them; $10$ reports the mean alone; $21$ is the range, $25 - 4$.)',
    },
    {
      q: 'Five employees at a small firm earn salaries, in thousands of dollars, of $18, 20, 22, 24$, and $116$. By how much does the mean exceed the median?',
      choices: ['$22$', '$40$', '$98$', '$18$'],
      answer: 3,
      solution: 'Mean: the salaries total $18 + 20 + 22 + 24 + 116 = 200$, so the mean is $\\frac{200}{5} = 40$ thousand. Median: the list is sorted and the middle of five values is $22$ thousand. The mean exceeds the median by $40 - 22 = 18$ thousand. Four of the five employees earn less than the mean, which is exactly why the median is the fairer summary here. ($40$ and $22$ are the two statistics themselves; $98$ is the range, $116 - 18$.)',
    },
  ],
  // 12. Build the set to order, then push the top value as high as the mode allows.
  [
    {
      q: 'A set of five whole numbers has mode $3$, median $8$, and mean $10$. What is the largest possible value in the set?',
      choices: ['$27$', '$18$', '$28$', '$36$'],
      answer: 0,
      solution: 'Sorted, the set must look like $3, 3, 8, a, b$: two $3$s secure the mode and $8$ sits in the middle. The mean fixes the total at $5 \\times 10 = 50$, so $a + b = 50 - 14 = 36$. Now the mode does the real work: $a$ cannot be $8$, or the set would have two $8$s and two $3$s and no single mode, so $a \\ge 9$ and $b \\le 36 - 9 = 27$. The set $3, 3, 8, 9, 27$ checks out. ($28$ comes from allowing $a = 8$; $18$ splits the $36$ evenly, but $3, 3, 8, 18, 18$ has two modes; $36$ is the pair\'s total, not one value.)',
    },
    {
      q: 'A set of five whole numbers has mode $2$, median $5$, and mean $8$. What is the largest possible value in the set?',
      choices: ['$26$', '$25$', '$31$', '$16$'],
      answer: 1,
      solution: 'The sorted set is $2, 2, 5, a, b$, and the total must be $5 \\times 8 = 40$, so $a + b = 40 - 9 = 31$. To keep $2$ as the only mode, $a$ cannot equal $5$ (that would make $5$ a second mode), so $a \\ge 6$ and $b \\le 31 - 6 = 25$. The set $2, 2, 5, 6, 25$ has mode $2$, median $5$, and mean $\\frac{40}{5} = 8$. ✓ ($26$ allows $a = 5$, which creates a tie for the mode; $31$ is $a + b$; $16$ comes from the balanced set $2, 2, 5, 15, 16$, which is legal but nowhere near the largest.)',
    },
    {
      q: 'A set of five whole numbers has mode $5$, median $7$, and mean $9$. What is the largest possible value in the set?',
      choices: ['$14$', '$21$', '$20$', '$28$'],
      answer: 2,
      solution: 'Sorted, the set is $5, 5, 7, a, b$, with total $5 \\times 9 = 45$, so $a + b = 45 - 17 = 28$. Since a second $7$ would tie the mode, $a \\ge 8$, which caps $b$ at $28 - 8 = 20$. The set $5, 5, 7, 8, 20$ has mode $5$, median $7$, and mean $\\frac{45}{5} = 9$. ✓ ($21$ comes from allowing $a = 7$, which gives the set two modes; $14$ splits the $28$ evenly, but $5, 5, 7, 14, 14$ is bimodal too; $28$ is the total of the top two, not a single value.)',
    },
  ],
]

const worksheet = [
  // 1. Mean of a short list.
  [
    {
      q: 'Find the mean of $13, 7, 18, 6$.',
      answer: '$11$',
      solution: 'Add everything: $13 + 7 + 18 + 6 = 44$. There are $4$ numbers, so divide by $4$: $\\frac{44}{4} = 11$.',
    },
    {
      q: 'Find the mean of $23, 16, 31, 12, 18$.',
      answer: '$20$',
      solution: 'The total is $23 + 16 + 31 + 12 + 18 = 100$, and there are $5$ numbers: $\\frac{100}{5} = 20$. Sense check: $20$ lands between the smallest value, $12$, and the largest, $31$, as a mean always must.',
    },
    {
      q: 'Marco read $14$, $9$, $15$, and $10$ pages on four evenings. What was the mean number of pages per evening?',
      answer: '$12$ pages',
      solution: 'Total pages: $14 + 9 + 15 + 10 = 48$ over $4$ evenings. The mean is $\\frac{48}{4} = 12$ pages per evening.',
    },
  ],
  // 2. Median — sort before you look in the middle.
  [
    {
      q: 'Find the median of $27, 14, 6, 31, 20$.',
      answer: '$20$',
      solution: 'Sort first: $6, 14, 20, 27, 31$. With five values, one sits exactly in the middle: $20$. (Grabbing the middle of the unsorted list would give $6$, which is actually the smallest value in the set.)',
    },
    {
      q: 'Find the median of $30, 8, 17, 25, 11, 21, 14$.',
      answer: '$17$',
      solution: 'Sort: $8, 11, 14, 17, 21, 25, 30$. Seven values means the fourth one is the middle, so the median is $17$. Three values sit below it and three above.',
    },
    {
      q: 'The daily high temperatures for five days were $18, 25, 21, 16, 23$ degrees. Find the median temperature.',
      answer: '$21$ degrees',
      solution: 'Sort the readings: $16, 18, 21, 23, 25$. The middle of the five is $21$ degrees.',
    },
  ],
  // 3. Mode and range together.
  [
    {
      q: 'For the list $8, 5, 12, 8, 4, 8, 15$, find the mode and the range.',
      answer: 'Mode $8$, range $11$',
      solution: 'Count each value: $8$ appears three times, while $5$, $12$, $4$, and $15$ each appear once. So the mode is $8$. The range is the biggest value minus the smallest: $15 - 4 = 11$.',
    },
    {
      q: 'For the list $6, 11, 6, 19, 6, 14, 2$, find the mode and the range.',
      answer: 'Mode $6$, range $17$',
      solution: 'The value $6$ shows up three times and no other value repeats, so the mode is $6$. The range is $19 - 2 = 17$ — a single number measuring the spread, not a pair of endpoints.',
    },
    {
      q: 'A shop sold shoes in sizes $7, 9, 7, 11, 6, 7, 10$ today. Find the mode and the range of the sizes.',
      answer: 'Mode $7$, range $5$',
      solution: 'Size $7$ was sold three times; sizes $9$, $11$, $6$, and $10$ once each. The mode is $7$. The range is $11 - 6 = 5$. Notice that the mode is the most POPULAR size while the range describes how wide a spread the shop sold.',
    },
  ],
  // 4. Solve for a missing value using the total.
  [
    {
      q: 'The mean of $8$, $15$, and $x$ is $12$. Find $x$.',
      answer: '$13$',
      solution: 'Three numbers with mean $12$ must total $3 \\times 12 = 36$. Since $8 + 15 = 23$, we need $x = 36 - 23 = 13$.',
    },
    {
      q: 'The mean of $14$, $9$, $x$, and $20$ is $15$. Find $x$.',
      answer: '$17$',
      solution: 'Four numbers with mean $15$ total $4 \\times 15 = 60$. The known values give $14 + 9 + 20 = 43$, so $x = 60 - 43 = 17$. Check: $\\frac{43 + 17}{4} = \\frac{60}{4} = 15$. ✓',
    },
    {
      q: 'Priya scored $88$, $79$, and $95$ on her first three quizzes. What must she score on the fourth quiz so that her mean is exactly $87$?',
      answer: '$86$',
      solution: 'Four quizzes with mean $87$ need a total of $4 \\times 87 = 348$. So far she has $88 + 79 + 95 = 262$, so she needs $348 - 262 = 86$. Check: $\\frac{262 + 86}{4} = \\frac{348}{4} = 87$. ✓',
    },
  ],
  // 5. Mean from a table of daily amounts.
  [
    {
      q: 'A lemonade stand took in $\\$18$ on Monday, $\\$11$ on Tuesday, $\\$7$ on Wednesday, and $\\$28$ on Thursday. What was the mean amount taken in per day?',
      answer: '$\\$16$ per day',
      solution: 'Total: $18 + 11 + 7 + 28 = 64$ dollars over $4$ days. The mean is $\\frac{64}{4} = 16$ dollars per day.',
    },
    {
      q: 'A food drive collected $24, 19, 30, 15$, and $22$ cans on five days. What was the mean number of cans collected per day?',
      answer: '$22$ cans per day',
      solution: 'Total: $24 + 19 + 30 + 15 + 22 = 110$ cans over $5$ days. The mean is $\\frac{110}{5} = 22$ cans per day. (The best day and the worst day were $30$ and $15$, and $22$ sits between them, as a mean must.)',
    },
    {
      q: 'A dog walker earned $\\$32$, $\\$26$, $\\$41$, $\\$19$, $\\$17$, and $\\$21$ on six days. What was the mean amount earned per day?',
      answer: '$\\$26$ per day',
      solution: 'Total: $32 + 26 + 41 + 19 + 17 + 21 = 156$ dollars over $6$ days. The mean is $\\frac{156}{6} = 26$ dollars per day.',
    },
  ],
  // 6. A percent of a whole.
  [
    {
      q: 'In a school of $250$ students, $36\\%$ ride the bus. How many students ride the bus?',
      answer: '$90$ students',
      solution: '$36\\%$ of $250$ is $0.36 \\times 250 = 90$ students. (Check with friendly pieces: $10\\%$ of $250$ is $25$, so $30\\%$ is $75$; $1\\%$ is $2.5$, so $6\\%$ is $15$; and $75 + 15 = 90$.)',
    },
    {
      q: 'Of the $45$ books on a shelf, $60\\%$ are novels. How many novels are on the shelf?',
      answer: '$27$ novels',
      solution: '$60\\%$ is $\\frac{3}{5}$, and $\\frac{3}{5}$ of $45$ is $3 \\times 9 = 27$ novels.',
    },
    {
      q: 'A jar holds $120$ marbles, and $15\\%$ of them are blue. How many blue marbles are in the jar?',
      answer: '$18$ marbles',
      solution: '$15\\%$ of $120$ is $0.15 \\times 120 = 18$ marbles. (Or: $10\\%$ of $120$ is $12$ and $5\\%$ is half of that, $6$; together $12 + 6 = 18$.)',
    },
  ],
  // 7. Weighted mean from group counts.
  [
    {
      q: 'On a test, $6$ students scored $60$ and $9$ students scored $80$. What was the mean score for all $15$ students?',
      answer: '$72$',
      solution: 'Total points: $6 \\times 60 + 9 \\times 80 = 360 + 720 = 1080$. Divide by all $15$ students: $\\frac{1080}{15} = 72$. The mean lands ABOVE the midpoint $70$, because more students scored $80$ than $60$, so the higher score pulls harder.',
    },
    {
      q: 'In a spelling test, $5$ students spelled $12$ words correctly, $10$ students spelled $15$, and $5$ students spelled $18$. What was the mean number of words spelled correctly?',
      answer: '$15$',
      solution: 'Multiply each value by its frequency: $5 \\times 12 + 10 \\times 15 + 5 \\times 18 = 60 + 150 + 90 = 300$ words. Divide by the number of STUDENTS, $5 + 10 + 5 = 20$, not by the three different values: $\\frac{300}{20} = 15$. The two outer groups are the same size and sit equally far from $15$, so they balance exactly.',
    },
    {
      q: 'A tour bus carries $14$ passengers holding a $\\$40$ ticket and $6$ passengers holding a $\\$90$ ticket. What is the mean ticket price?',
      answer: '$\\$55$',
      solution: 'Total money: $14 \\times 40 + 6 \\times 90 = 560 + 540 = 1100$ dollars, from $20$ passengers: $\\frac{1100}{20} = 55$ dollars. Averaging the two prices instead would give $\\$65$, which is wrong — most passengers paid the cheaper fare, so the mean must sit closer to $\\$40$.',
    },
  ],
  // 8. Recover a missing value from the mean of a longer list.
  [
    {
      q: 'The mean of six numbers is $13$. Five of them are $9, 20, 7, 15, 11$. What is the sixth number?',
      answer: '$16$',
      solution: 'The total must be $6 \\times 13 = 78$. The five known numbers give $9 + 20 + 7 + 15 + 11 = 62$, so the sixth is $78 - 62 = 16$.',
    },
    {
      q: 'The mean of four numbers is $25$. Three of them are $18, 34, 21$. What is the fourth number?',
      answer: '$27$',
      solution: 'The total must be $4 \\times 25 = 100$. The three known numbers give $18 + 34 + 21 = 73$, so the fourth is $100 - 73 = 27$. Check: $\\frac{73 + 27}{4} = \\frac{100}{4} = 25$. ✓',
    },
    {
      q: 'Over five months a family\'s electricity bills averaged $\\$96$. Four of the bills were $\\$88$, $\\$104$, $\\$79$, and $\\$110$. What was the fifth bill?',
      answer: '$\\$99$',
      solution: 'Five bills averaging $\\$96$ must total $5 \\times 96 = 480$ dollars. The four known bills add to $88 + 104 + 79 + 110 = 381$, so the fifth is $480 - 381 = 99$ dollars. Check: $\\frac{381 + 99}{5} = \\frac{480}{5} = 96$. ✓',
    },
  ],
  // 9. How far one outlier moves the mean.
  [
    {
      q: 'The data set $8, 9, 11, 12, 60$ has mean $20$. If the outlier $60$ is removed, by how much does the mean drop?',
      answer: 'By $10$ (from $20$ to $10$)',
      solution: 'Without the outlier the total is $8 + 9 + 11 + 12 = 40$ over $4$ numbers, so the new mean is $\\frac{40}{4} = 10$. The mean drops by $20 - 10 = 10$ — it is cut clean in half by removing one value. Compare the median, which only slips from $11$ to $\\frac{9 + 11}{2} = 10$: the outlier barely touched it.',
    },
    {
      q: 'The data set $3, 4, 6, 7, 45$ has mean $13$. If the outlier $45$ is removed, what is the mean of the remaining four numbers, and by how much did the mean drop?',
      answer: 'New mean $5$; a drop of $8$',
      solution: 'The remaining numbers total $3 + 4 + 6 + 7 = 20$, so the new mean is $\\frac{20}{4} = 5$, a drop of $13 - 5 = 8$. Notice that the original mean, $13$, was larger than four of the five values — a sure sign that a single extreme value was doing the talking.',
    },
    {
      q: 'The data set $2, 5, 6, 7, 10$ has mean $6$. A new value, $42$, is added to the set. By how much does the mean rise?',
      answer: 'By $6$ (from $6$ to $12$)',
      solution: 'The old total is $2 + 5 + 6 + 7 + 10 = 30$. Adding $42$ makes the total $72$, now over $6$ values: $\\frac{72}{6} = 12$. The mean rises by $12 - 6 = 6$ — it doubles. The median hardly stirs: it goes from $6$ to $\\frac{6 + 7}{2} = 6.5$, because the newcomer simply parks itself at the end of the sorted line.',
    },
  ],
  // 10. Build a data set that meets several conditions at once.
  [
    {
      q: 'Write a set of five whole numbers with mean $12$, median $10$, and mode $8$.',
      answer: 'One example: $8, 8, 10, 16, 18$',
      solution: 'The mode says to repeat $8$, and the median says the sorted middle is $10$, so start with $8, 8, 10$. The mean fixes the total at $5 \\times 12 = 60$, leaving $60 - 26 = 34$ for the last two numbers — each at least $10$, and different from each other so no second mode appears. Try $16$ and $18$: the set $8, 8, 10, 16, 18$ satisfies all three conditions. (Other answers work too, such as $8, 8, 10, 15, 19$.)',
    },
    {
      q: 'Write a set of five whole numbers with mean $8$, median $7$, and mode $5$.',
      answer: 'One example: $5, 5, 7, 11, 12$',
      solution: 'Start with $5, 5, 7$: the repeated $5$ secures the mode and $7$ sits in the middle. The total must be $5 \\times 8 = 40$, so the last two numbers add to $40 - 17 = 23$, each at least $7$ and not equal to each other. Try $11$ and $12$: the set $5, 5, 7, 11, 12$ works. (Careful — $5, 5, 7, 10, 13$ also works, but something like $5, 5, 7, 11, 11$ would not, because the two $11$s would tie $5$ for the mode.)',
    },
    {
      q: 'Write a set of six whole numbers with mean $9$, median $8$, and range $12$.',
      answer: 'One example: $3, 6, 7, 9, 14, 15$',
      solution: 'With SIX numbers the median is the mean of the two middle values, so those two must add to $2 \\times 8 = 16$ — try $7$ and $9$. The mean fixes the total at $6 \\times 9 = 54$, and the range fixes the gap between the ends; picking $3$ as the smallest makes the largest $3 + 12 = 15$. The remaining two numbers must add to $54 - (3 + 7 + 9 + 15) = 20$, with one no more than $7$ and the other at least $9$: take $6$ and $14$. The set $3, 6, 7, 9, 14, 15$ has total $54$, median $\\frac{7 + 9}{2} = 8$, and range $15 - 3 = 12$. ✓',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 13,
  challenge,
  worksheet,
}
