// Prealgebra — Chapter 13: Data and Statistics
// All problems, explanations, and examples are original MathQuest content.

const s131 = {
  id: '13.1',
  title: 'Basic Statistics',
  learn: {
    concepts: [
      {
        heading: 'The mean: share it out evenly',
        body: 'The mean (or average) of a list is the total divided by how many numbers there are. If four friends have $4$, $6$, $8$, and $10$ marbles, the total is $28$, and sharing evenly gives each friend $\\frac{28}{4} = 7$ marbles. The mean is the "everyone gets the same" number.',
      },
      {
        heading: 'The median: the middle of the sorted line',
        body: 'The median is the middle value once the list is sorted from smallest to largest. Sorting first is the step people forget most often! With an odd count, one number sits exactly in the middle. With an even count, take the mean of the two middle numbers.',
      },
      {
        heading: 'The mode and the range',
        body: 'The mode is the value that appears most often — the most popular number in the list. The range measures how spread out the data is: range $=$ biggest value $-$ smallest value. Notice the range is a single number, not a pair!',
      },
      {
        heading: 'Work backwards from the mean',
        body: 'Since mean $\\times$ count $=$ total, you can find a missing value: figure out what the total must be, then subtract the numbers you know. This "total first" trick solves almost every mean puzzle.',
      },
    ],
    examples: [
      {
        problem: 'Find the mean of $11$, $15$, $7$, and $19$.',
        steps: [
          'Add everything: $11 + 15 + 7 + 19 = 52$.',
          'There are $4$ numbers, so divide the total by $4$: $\\frac{52}{4} = 13$.',
        ],
        answer: 'The mean is $13$',
      },
      {
        problem: 'Find the median of $14, 3, 8, 20, 11$ and the median of $4, 9, 13, 6$.',
        steps: [
          'Sort the first list: $3, 8, 11, 14, 20$. Five numbers means one middle value: the third one, $11$.',
          'Sort the second list: $4, 6, 9, 13$. Four numbers means two middle values, $6$ and $9$.',
          'Take their mean: $\\frac{6 + 9}{2} = 7.5$. So the medians are $11$ and $7.5$.',
        ],
        answer: 'The medians are $11$ and $7.5$',
      },
      {
        problem: 'The mean of $12$, $18$, and $x$ is $15$. Find $x$.',
        steps: [
          'Three numbers with mean $15$ must total $3 \\times 15 = 45$.',
          'The known numbers give $12 + 18 = 30$.',
          'So $x = 45 - 30 = 15$.',
        ],
        answer: '$x = 15$',
      },
    ],
  },
  problems: [
    {
      q: 'What is the mean of $4, 6, 8, 10$?',
      choices: ['$6$', '$28$', '$7$', '$8$'],
      answer: 2,
      solution: 'Add the numbers: $4 + 6 + 8 + 10 = 28$. Then divide by the count, $4$: $\\frac{28}{4} = 7$. (The total $28$ is only halfway there — the mean still needs the division step.)',
    },
    {
      q: 'What is the median of $9, 2, 7, 3, 5$?',
      choices: ['$5$', '$7$', '$9$', '$5.2$'],
      answer: 0,
      solution: 'Sort first! The sorted list is $2, 3, 5, 7, 9$, and the middle value is $5$. Picking $7$ comes from grabbing the middle of the unsorted list — always sort before finding the median. ($5.2$ is the mean, a different statistic.)',
    },
    {
      q: 'What is the mode of $4, 7, 7, 2, 9, 7, 4$?',
      choices: ['$4$', '$7$', '$2$', '$9$'],
      answer: 1,
      solution: 'Count how often each value appears: $7$ shows up three times, $4$ shows up twice, and everything else once. The most frequent value is $7$, so the mode is $7$.',
    },
    {
      q: 'What is the range of $12, 5, 9, 20, 3$?',
      choices: ['$20$', '$23$', '$15$', '$17$'],
      answer: 3,
      solution: 'The range is the biggest value minus the smallest: $20 - 3 = 17$. (Careful: we subtract, not add — $20 + 3 = 23$ is a tempting slip.)',
    },
    {
      q: 'What is the median of $3, 8, 5, 11, 9, 12$?',
      choices: ['$8.5$', '$8$', '$9$', '$9.5$'],
      answer: 0,
      solution: 'Sort: $3, 5, 8, 9, 11, 12$. With six numbers there are two middle values, $8$ and $9$. The median is their mean: $\\frac{8 + 9}{2} = 8.5$. (The mean of the whole list happens to be $8$, but the median asks only about the middle.)',
    },
    {
      q: 'Ava scored $72$, $85$, and $91$ on three quizzes. What must she score on a fourth quiz so her mean is exactly $84$?',
      choices: ['$84$', '$92$', '$88$', '$86$'],
      answer: 2,
      solution: 'Four quizzes with mean $84$ must total $4 \\times 84 = 336$. So far she has $72 + 85 + 91 = 248$. She needs $336 - 248 = 88$. Check: $\\frac{248 + 88}{4} = \\frac{336}{4} = 84$.',
    },
    {
      q: 'Five numbers have a mean of $20$. One of the numbers changes from $10$ to $25$, and the rest stay the same. What is the new mean?',
      choices: ['$21$', '$23$', '$25$', '$35$'],
      answer: 1,
      solution: 'The total was $5 \\times 20 = 100$. The change adds $25 - 10 = 15$ to the total, making it $115$. The new mean is $\\frac{115}{5} = 23$. A neat shortcut: the extra $15$ gets spread over $5$ numbers, so the mean rises by $\\frac{15}{5} = 3$.',
    },
    {
      q: 'For the list $6, 11, 4, 11, 8$, what is the mode minus the median?',
      choices: ['$0$', '$7$', '$11$', '$3$'],
      answer: 3,
      solution: 'Sort: $4, 6, 8, 11, 11$. The median (middle value) is $8$, and the mode (most frequent value) is $11$. So mode $-$ median $= 11 - 8 = 3$.',
    },
    {
      q: 'After five quizzes, Ben\'s mean score is $82$. What must he score on the sixth quiz to raise his mean to $84$?',
      choices: ['$86$', '$84$', '$94$', '$92$'],
      answer: 2,
      solution: 'Six quizzes with mean $84$ need a total of $6 \\times 84 = 504$. His first five total $5 \\times 82 = 410$. So he needs $504 - 410 = 94$. Scoring just $84$ is not enough — the new score must pull five old scores upward, so it has to be well above the target mean.',
    },
    {
      q: 'The mean of five numbers is $14$. When a sixth number joins the list, the mean becomes $15$. What is the sixth number?',
      choices: ['$15$', '$20$', '$19$', '$16$'],
      answer: 1,
      solution: 'The total jumps from $5 \\times 14 = 70$ to $6 \\times 15 = 90$. The sixth number supplied the whole jump: $90 - 70 = 20$. It makes sense that it is above $15$: a new number can only raise the mean by being bigger than the mean.',
    },
  ],
}

const s132 = {
  id: '13.2',
  title: 'Limits of Basic Statistics',
  learn: {
    concepts: [
      {
        heading: 'Outliers: the numbers that do not fit in',
        body: 'An outlier is a value far away from the rest of the data — like a $52$ sitting in the list $6, 7, 8, 9, 52$. Outliers are not errors (sometimes they are the most interesting data point!), but they can bend our statistics.',
      },
      {
        heading: 'The mean chases outliers; the median does not',
        body: 'Every value feeds into the mean\'s total, so one giant value can drag the mean far from the crowd. The median only cares about the middle of the sorted line, so an outlier at the end barely moves it. When data has outliers, the median usually describes a "typical" value better.',
      },
      {
        heading: 'One statistic never tells the whole story',
        body: 'The lists $9, 10, 11$ and $0, 10, 20$ have the same mean, $10$ — but the first is bunched tightly and the second is spread wide. That is why we also report the range: two data sets can match in one statistic and be wildly different in another.',
      },
      {
        heading: 'Building data sets to order',
        body: 'You can design a data set with a required mean, median, and mode. Work like an architect: the mode tells you which value to repeat, the median pins down the middle of the sorted list, and the mean fixes the total. Then choose the remaining values to make the total come out right.',
      },
    ],
    examples: [
      {
        problem: 'Five friends have weekly allowances of $4, 5, 5, 6, 30$ dollars. Compare the mean and the median. Which describes a typical allowance better?',
        steps: [
          'The total is $4 + 5 + 5 + 6 + 30 = 50$, so the mean is $\\frac{50}{5} = 10$.',
          'The list is already sorted, and the middle value is $5$ — that is the median.',
          'Four of the five friends get $6$ or less, so a "typical" allowance is about $5$, not $10$. The outlier $30$ dragged the mean above almost everyone.',
        ],
        answer: 'Mean $= 10$, median $= 5$; the median describes a typical allowance better',
      },
      {
        problem: 'Build a set of five whole numbers with mean $6$, median $5$, and mode $4$.',
        steps: [
          'Mean $6$ means the total must be $5 \\times 6 = 30$. Median $5$ means the middle of the sorted list is $5$. Mode $4$ means $4$ must appear most often.',
          'Start with $4, 4, 5$ as the three smallest values — the repeated $4$s secure the mode, and $5$ sits in the middle.',
          'The last two numbers must add to $30 - 13 = 17$ and each be bigger than $5$. Try $8$ and $9$: the set $4, 4, 5, 8, 9$ works!',
        ],
        answer: 'One answer: $4, 4, 5, 8, 9$',
      },
      {
        problem: 'Show that $9, 10, 11$ and $0, 10, 20$ have the same mean but very different spreads.',
        steps: [
          'First set: total $30$, mean $\\frac{30}{3} = 10$, range $11 - 9 = 2$.',
          'Second set: total $30$, mean $\\frac{30}{3} = 10$, range $20 - 0 = 20$.',
          'Same mean, but one range is ten times the other — the mean alone cannot tell these sets apart.',
        ],
        answer: 'Both means are $10$, but the ranges are $2$ and $20$',
      },
    ],
  },
  problems: [
    {
      q: 'Which value in the list $6, 7, 8, 9, 52$ is an outlier?',
      choices: ['$9$', '$52$', '$6$', '$8$'],
      answer: 1,
      solution: 'An outlier sits far from the rest of the data. The values $6, 7, 8, 9$ are all close together, but $52$ is way out on its own — it is the outlier.',
    },
    {
      q: 'For the list $6, 7, 8, 9, 52$, the mean is $16.4$. What is the median?',
      choices: ['$8$', '$16.4$', '$9$', '$52$'],
      answer: 0,
      solution: 'The list is already sorted, and the middle of the five values is $8$. Notice how far apart the two statistics are: the outlier $52$ dragged the mean up to $16.4$, but the median calmly stayed at $8$.',
    },
    {
      q: 'Five workers earn $8, 9, 10, 11, 42$ dollars per hour. Which statistic best describes what a typical worker earns?',
      choices: ['The median, $10$', 'The mean, $16$', 'The range, $34$', 'The mean and median describe it equally well'],
      answer: 0,
      solution: 'The total is $80$, so the mean is $16$ — but four of the five workers earn $11$ or less, so $16$ describes nobody! The outlier $42$ inflated the mean. The median, $10$, matches what a typical worker actually earns.',
    },
    {
      q: 'The list $3, 4, 5, 6, 32$ has mean $10$. If the outlier $32$ is removed, what is the mean of the remaining four numbers?',
      choices: ['$10$', '$5$', '$4.5$', '$6$'],
      answer: 2,
      solution: 'The remaining numbers total $3 + 4 + 5 + 6 = 18$, so the new mean is $\\frac{18}{4} = 4.5$. Removing one outlier cut the mean from $10$ down to $4.5$ — that is how much power a single extreme value has over the mean.',
    },
    {
      q: 'The list $10, 12, 14, 16, 18$ has median $14$. If the $18$ is replaced by $88$, what is the new median?',
      choices: ['$28$', '$88$', '$16$', '$14$'],
      answer: 3,
      solution: 'The new sorted list is $10, 12, 14, 16, 88$, and the middle value is still $14$. The median does not budge, because only the position of the middle matters — meanwhile the mean leaps from $14$ to $\\frac{140}{5} = 28$.',
    },
    {
      q: 'Which data set has mean $7$, median $6$, and mode $5$?',
      choices: ['$5, 6, 7, 8, 9$', '$5, 5, 6, 9, 10$', '$5, 5, 6, 7, 7$', '$4, 5, 6, 10, 10$'],
      answer: 1,
      solution: 'Check $5, 5, 6, 9, 10$: the total is $35$, so the mean is $\\frac{35}{5} = 7$; the middle value is $6$; and $5$ appears most often. All three match! The set $5, 6, 7, 8, 9$ has median $7$ and no mode, the set $5, 5, 6, 7, 7$ has mean $6$, and the set $4, 5, 6, 10, 10$ has mode $10$.',
    },
    {
      q: 'Set A is $18, 20, 22$ and Set B is $5, 20, 35$. Which statement is true?',
      choices: ['Set B has a larger mean', 'The two sets have the same range', 'The sets have the same mean, but Set B is more spread out', 'Set A has a larger median'],
      answer: 2,
      solution: 'Both sets total $60$, so both means are $\\frac{60}{3} = 20$ (and both medians are $20$ too). But the ranges are very different: Set A has range $22 - 18 = 4$, while Set B has range $35 - 5 = 30$. Equal means, completely different spreads.',
    },
    {
      q: 'For the data $2, 3, 3, 4, 38$, the mean is $10$. Why might the mean be a poor summary of this data?',
      choices: ['The mean is larger than four of the five values, because the outlier $38$ pulled it up', 'The mean is always a poor summary', 'The mean was computed incorrectly', 'The mean is smaller than the median'],
      answer: 0,
      solution: 'The total is $50$, so the mean really is $\\frac{50}{5} = 10$ — no computing mistake. But four of the five values are $4$ or less! The single outlier $38$ hauled the mean above almost the entire data set, so $10$ does not describe a typical value. (The median here is $3$, which fits the data much better.)',
    },
    {
      q: 'Five whole numbers, each at least $1$, have mean $8$ and median $5$. What is the largest possible value in the set?',
      choices: ['$32$', '$40$', '$27$', '$28$'],
      answer: 3,
      solution: 'Mean $8$ means the total is $5 \\times 8 = 40$. In sorted order the middle number is $5$, and the two numbers after the median must be at least $5$. To make one number huge, shrink everything else: $1, 1, 5, 5$ uses up $12$, leaving $40 - 12 = 28$. The set $1, 1, 5, 5, 28$ checks out. (You cannot go higher: the fourth number is not allowed to drop below the median $5$.)',
    },
    {
      q: 'Class A scored $70, 75, 80, 85, 90$ on a test, and Class B scored $78, 79, 80, 81, 82$. Which statement is true?',
      choices: ['Class A has the higher mean', 'The means are equal, but Class A\'s scores are more spread out', 'Class B has the larger range', 'The two classes have different medians'],
      answer: 1,
      solution: 'Both classes total $400$, so both means are $\\frac{400}{5} = 80$ — and both medians are $80$ as well. The difference is spread: Class A has range $90 - 70 = 20$, while Class B has range $82 - 78 = 4$. Identical averages can hide very different classes!',
    },
  ],
}

const s133 = {
  id: '13.3',
  title: 'Tables, Graphs, and Charts',
  learn: {
    concepts: [
      {
        heading: 'A table is just an organized list',
        body: 'Data often arrives day by day or category by category: "Monday $12$, Tuesday $8$, Wednesday $15$." Everything you know about statistics still applies — add the values for a total, divide by the number of categories for a mean, and compare entries to find the biggest or smallest.',
      },
      {
        heading: 'Frequencies: counting how many of each',
        body: 'A frequency count tells how many times each value occurs: "$3$ students have $0$ pets, $5$ students have $1$ pet, $2$ students have $2$ pets." The total number of students is the sum of the frequencies: $3 + 5 + 2 = 10$.',
      },
      {
        heading: 'Averages from frequencies: multiply, then add',
        body: 'To find the mean from frequency data, multiply each value by its frequency, add those products for the grand total, then divide by the total count — not by the number of different values! This is called a weighted average, because common values pull harder on the mean than rare ones.',
      },
      {
        heading: 'Percents slice up the whole pie',
        body: 'A pie chart in words sounds like "half chose pizza, a quarter chose tacos." Each percent is a share of the whole, and all the shares must add to $100\\%$. To count a slice, take its percent of the total: $25\\%$ of $24$ students is $\\frac{1}{4} \\times 24 = 6$ students.',
      },
    ],
    examples: [
      {
        problem: 'The bake sale earned: Monday $\\$12$, Tuesday $\\$8$, Wednesday $\\$15$, Thursday $\\$5$. Find the total and the mean per day.',
        steps: [
          'Total: $12 + 8 + 15 + 5 = 40$ dollars.',
          'There are $4$ days, so the mean is $\\frac{40}{4} = 10$ dollars per day.',
          'Quick sense check: $10$ sits between the best day ($15$) and the worst day ($5$). The mean always lands between the extremes.',
        ],
        answer: 'Total $\\$40$; mean $\\$10$ per day',
      },
      {
        problem: 'On a quiz, three students scored $6$, five students scored $8$, and two students scored $10$. Find the class mean.',
        steps: [
          'Multiply each score by how many students earned it: $3 \\times 6 = 18$, $5 \\times 8 = 40$, $2 \\times 10 = 20$.',
          'Grand total: $18 + 40 + 20 = 78$ points, earned by $3 + 5 + 2 = 10$ students.',
          'Mean: $\\frac{78}{10} = 7.8$. Divide by $10$ students, not by the $3$ different scores!',
        ],
        answer: 'The class mean is $7.8$',
      },
      {
        problem: 'In a class vote of $20$ students, $50\\%$ chose pizza, $30\\%$ chose tacos, and the rest chose soup. How many students chose each?',
        steps: [
          'Pizza: $50\\%$ of $20$ is half of $20$, which is $10$ students.',
          'Tacos: $30\\%$ of $20$ is $0.3 \\times 20 = 6$ students.',
          'Soup gets the leftover percent: $100\\% - 50\\% - 30\\% = 20\\%$, and $20\\%$ of $20$ is $4$ students. Check: $10 + 6 + 4 = 20$.',
        ],
        answer: 'Pizza $10$, tacos $6$, soup $4$',
      },
    ],
  },
  problems: [
    {
      q: 'The craft club sold bracelets: Monday $12$, Tuesday $8$, Wednesday $10$, Thursday $14$. How many bracelets did they sell in all?',
      choices: ['$44$', '$40$', '$46$', '$34$'],
      answer: 0,
      solution: 'Add the four days: $12 + 8 + 10 + 14 = 44$ bracelets. Pairing helps: $12 + 8 = 20$ and $10 + 14 = 24$, so $20 + 24 = 44$.',
    },
    {
      q: 'Using the same sales — Monday $12$, Tuesday $8$, Wednesday $10$, Thursday $14$ — what was the mean number of bracelets sold per day?',
      choices: ['$12$', '$44$', '$11$', '$10$'],
      answer: 2,
      solution: 'The total is $44$ bracelets over $4$ days, so the mean is $\\frac{44}{4} = 11$ per day. (The total $44$ by itself is not a "per day" number — the division finishes the job.)',
    },
    {
      q: 'A pet survey found: cats $7$, dogs $9$, fish $4$. How many more students chose dogs than fish?',
      choices: ['$2$', '$13$', '$4$', '$5$'],
      answer: 3,
      solution: 'Compare the two categories with subtraction: $9 - 4 = 5$ more students chose dogs than fish. (Adding $9 + 4 = 13$ would answer a different question — how many chose dogs or fish.)',
    },
    {
      q: 'In a class of $24$ students, $25\\%$ chose art as their favorite subject. How many students is that?',
      choices: ['$4$', '$6$', '$8$', '$12$'],
      answer: 1,
      solution: '$25\\%$ is one quarter, and one quarter of $24$ is $\\frac{24}{4} = 6$ students.',
    },
    {
      q: 'On a test, four students scored $70$ and six students scored $80$. What was the mean score for all ten students?',
      choices: ['$76$', '$75$', '$78$', '$74$'],
      answer: 0,
      solution: 'Total points: $4 \\times 70 + 6 \\times 80 = 280 + 480 = 760$. Divide by all $10$ students: $\\frac{760}{10} = 76$. The answer is not $75$ — that would be the mean if the two scores had equal numbers of students, but more students scored $80$, so the mean leans toward $80$.',
    },
    {
      q: 'In a survey, $3$ students have $0$ siblings, $5$ students have $1$ sibling, and $2$ students have $2$ siblings. What is the mean number of siblings per student?',
      choices: ['$1$', '$1.5$', '$3$', '$0.9$'],
      answer: 3,
      solution: 'Total siblings: $3 \\times 0 + 5 \\times 1 + 2 \\times 2 = 0 + 5 + 4 = 9$. Total students: $3 + 5 + 2 = 10$. Mean: $\\frac{9}{10} = 0.9$ siblings per student. Dividing by the $3$ different values instead of the $10$ students would give the wrong answer of $1$.',
    },
    {
      q: 'The class cast $40$ votes for lunch: $40\\%$ chose pizza, $35\\%$ chose burgers, and the rest chose salad. How many votes did salad get?',
      choices: ['$14$', '$16$', '$10$', '$25$'],
      answer: 2,
      solution: 'Salad\'s share is the leftover percent: $100\\% - 40\\% - 35\\% = 25\\%$. Then $25\\%$ of $40$ votes is $\\frac{40}{4} = 10$ votes. (The $25$ is a percent, not a vote count — always convert the percent to a number of votes.)',
    },
    {
      q: 'A team scored $12, 15, 9, 24$ points in four games. What percent of its total points came in the last game?',
      choices: ['$40\\%$', '$24\\%$', '$25\\%$', '$45\\%$'],
      answer: 0,
      solution: 'The season total is $12 + 15 + 9 + 24 = 60$ points. The last game\'s share is $\\frac{24}{60} = \\frac{2}{5} = 40\\%$. ($25\\%$ would only be right if all four games were equal — they were not!)',
    },
    {
      q: 'A class has $5$ girls whose scores average $90$ and $15$ boys whose scores average $70$. What is the mean score for the whole class?',
      choices: ['$80$', '$75$', '$78$', '$72$'],
      answer: 1,
      solution: 'Total points: $5 \\times 90 + 15 \\times 70 = 450 + 1050 = 1500$, shared by $20$ students: $\\frac{1500}{20} = 75$. The midpoint $80$ is a trap — there are three times as many boys, so their average of $70$ pulls the class mean strongly toward $70$.',
    },
    {
      q: 'A charity announces, "our average gift is $\\$20$!" The five gifts were $\\$5, \\$5, \\$5, \\$5, \\$80$. Why is the announcement misleading?',
      choices: ['The mean was computed incorrectly', 'The median gift is $\\$20$', 'Four of the five gifts were far below $\\$20$ — one gift of $\\$80$ pulled the mean up', 'The range of the gifts is $\\$20$'],
      answer: 2,
      solution: 'The mean really is $\\frac{5 + 5 + 5 + 5 + 80}{5} = \\frac{100}{5} = 20$, so the arithmetic is fine — but the typical gift was $\\$5$! A single $\\$80$ gift dragged the mean to four times the median. Reporting the median ($\\$5$) would describe a typical donor far more honestly.',
    },
  ],
}

const challenge = [
  {
    q: 'The mean of $24$, $31$, $17$, and $x$ is $25$. What is $x$?',
    choices: ['$28$', '$25$', '$27$', '$24$'],
    answer: 0,
    solution: 'Four numbers with mean $25$ total $4 \\times 25 = 100$. The known three give $24 + 31 + 17 = 72$, so $x = 100 - 72 = 28$.',
  },
  {
    q: 'What is the median of $15, 3, 8, 21, 10, 6$?',
    choices: ['$10$', '$9$', '$8$', '$14.5$'],
    answer: 1,
    solution: 'Sort: $3, 6, 8, 10, 15, 21$. Six numbers means two middle values, $8$ and $10$, and the median is their mean: $\\frac{8 + 10}{2} = 9$. Taking the middle of the unsorted list gives $14.5$ — sorting first is the whole game.',
  },
  {
    q: 'The data set $4, 52, 7, 9, 6$ contains the outlier $52$. By how much does the range shrink when the outlier is removed?',
    choices: ['$5$', '$48$', '$43$', '$47$'],
    answer: 2,
    solution: 'With the outlier: range $= 52 - 4 = 48$. Without it, the data is $4, 6, 7, 9$: range $= 9 - 4 = 5$. The shrink is $48 - 5 = 43$. The range depends entirely on the two extremes, so it is extremely sensitive to outliers.',
  },
  {
    q: 'Rosa took ten quizzes: she scored $80$ on six of them and $90$ on four of them. What is her mean score?',
    choices: ['$85$', '$86$', '$83$', '$84$'],
    answer: 3,
    solution: 'Total points: $6 \\times 80 + 4 \\times 90 = 480 + 360 = 840$, over $10$ quizzes: $\\frac{840}{10} = 84$. The midpoint $85$ would require equal numbers of each score — but there are more $80$s, so the mean tilts toward $80$.',
  },
  {
    q: 'Seven numbers have a mean of $15$. An eighth number, $31$, is added to the list. What is the new mean?',
    choices: ['$17$', '$16$', '$23$', '$15.5$'],
    answer: 0,
    solution: 'The old total is $7 \\times 15 = 105$. Adding $31$ makes the total $136$ over $8$ numbers: $\\frac{136}{8} = 17$. Shortcut: $31$ is $16$ above the old mean, and that excess spreads over $8$ numbers, raising the mean by $\\frac{16}{8} = 2$.',
  },
  {
    q: 'The nine values $2, 4, 5, 6, 7, 8, 9, 10, 12$ have median $7$. If the $12$ is replaced by $120$, what happens to the median?',
    choices: ['It doubles', 'It stays $7$', 'It becomes $19$', 'It becomes $8$'],
    answer: 1,
    solution: 'The sorted list becomes $2, 4, 5, 6, 7, 8, 9, 10, 120$ — the fifth (middle) value is still $7$. The median only asks where the middle of the line is, so stretching the largest value, even by a factor of ten, changes nothing.',
  },
  {
    q: 'Four whole numbers have a mean of $10$, and each number is at least $7$. What is the largest that any one of them can be?',
    choices: ['$26$', '$40$', '$19$', '$12$'],
    answer: 2,
    solution: 'The total is $4 \\times 10 = 40$. To make one number as big as possible, make the other three as small as allowed: $7$ each, using $21$. That leaves $40 - 21 = 19$. Check: $7, 7, 7, 19$ has mean $\\frac{40}{4} = 10$.',
  },
  {
    q: 'Of $60$ students, $45\\%$ ride the bus and $30\\%$ walk. The rest ride bikes. How many students ride bikes?',
    choices: ['$25$', '$18$', '$27$', '$15$'],
    answer: 3,
    solution: 'The bike slice is $100\\% - 45\\% - 30\\% = 25\\%$ of the pie. Then $25\\%$ of $60$ is $\\frac{60}{4} = 15$ students. ($27$ and $18$ are the bus and walking counts.)',
  },
  {
    q: 'Group A has $4$ numbers with mean $12$, and Group B has $6$ numbers with mean $22$. What is the mean of all ten numbers together?',
    choices: ['$18$', '$17$', '$16$', '$20$'],
    answer: 0,
    solution: 'Totals first: Group A holds $4 \\times 12 = 48$ and Group B holds $6 \\times 22 = 132$. Together: $\\frac{48 + 132}{10} = \\frac{180}{10} = 18$. The midpoint $17$ ignores that Group B has more numbers — the bigger group pulls the combined mean its way.',
  },
  {
    q: 'In a class survey, $2$ students have $0$ pets, $4$ students have $1$ pet, and $x$ students have $2$ pets. The mean is exactly $1$ pet per student. What is $x$?',
    choices: ['$4$', '$2$', '$3$', '$1$'],
    answer: 1,
    solution: 'Total pets: $2 \\times 0 + 4 \\times 1 + 2x = 4 + 2x$. Total students: $2 + 4 + x = 6 + x$. A mean of $1$ means pets equal students: $4 + 2x = 6 + x$, so $x = 2$. Check: $8$ pets among $8$ students gives a mean of $1$.',
  },
  {
    q: 'For the data set $1, 5, 6, 7, 41$, what is the mean minus the median?',
    choices: ['$12$', '$35$', '$6$', '$5$'],
    answer: 2,
    solution: 'The total is $1 + 5 + 6 + 7 + 41 = 60$, so the mean is $\\frac{60}{5} = 12$. The sorted middle value is $6$, the median. The gap is $12 - 6 = 6$ — a big gap like this is a clue that an outlier (here, $41$) is tugging on the mean.',
  },
  {
    q: 'A set of five whole numbers has mode $4$, median $6$, and mean $7$. What is the largest possible value in the set?',
    choices: ['$13$', '$21$', '$15$', '$14$'],
    answer: 3,
    solution: 'The sorted set looks like $4, 4, 6, a, b$: two $4$s secure the mode, and $6$ is the median. The total must be $5 \\times 7 = 35$, so $a + b = 35 - 14 = 21$. To keep $4$ as the only mode, $a$ cannot equal $6$ (that would create a second pair), so $a$ is at least $7$, making $b$ at most $21 - 7 = 14$. The set $4, 4, 6, 7, 14$ checks out.',
  },
]

const worksheet = [
  {
    q: 'Find the mean of $9, 14, 6, 11$.',
    answer: '$10$',
    solution: 'The total is $9 + 14 + 6 + 11 = 40$, and there are $4$ numbers: $\\frac{40}{4} = 10$.',
  },
  {
    q: 'Find the median of $12, 5, 19, 8, 15$.',
    answer: '$12$',
    solution: 'Sort first: $5, 8, 12, 15, 19$. The middle of the five values is $12$.',
  },
  {
    q: 'For the list $7, 3, 9, 3, 12, 3$, find the mode and the range.',
    answer: 'Mode $3$, range $9$',
    solution: 'The value $3$ appears three times — more than any other — so the mode is $3$. The range is biggest minus smallest: $12 - 3 = 9$.',
  },
  {
    q: 'The mean of $6$, $10$, and $x$ is $9$. Find $x$.',
    answer: '$11$',
    solution: 'Three numbers with mean $9$ total $3 \\times 9 = 27$. Since $6 + 10 = 16$, we need $x = 27 - 16 = 11$.',
  },
  {
    q: 'The book fair earned: Monday $\\$15$, Tuesday $\\$9$, Wednesday $\\$12$, Thursday $\\$24$. What was the mean amount earned per day?',
    answer: '$\\$15$ per day',
    solution: 'Total: $15 + 9 + 12 + 24 = 60$ dollars over $4$ days. Mean: $\\frac{60}{4} = 15$ dollars per day.',
  },
  {
    q: 'In a class of $30$ students, $40\\%$ chose soccer as their favorite sport. How many students chose soccer?',
    answer: '$12$ students',
    solution: '$40\\%$ of $30$ is $0.4 \\times 30 = 12$ students. (Check: $10\\%$ of $30$ is $3$, and four of those makes $12$.)',
  },
  {
    q: 'On a test, $8$ students scored $75$ and $12$ students scored $85$. What was the mean score for all $20$ students?',
    answer: '$81$',
    solution: 'Total points: $8 \\times 75 + 12 \\times 85 = 600 + 1020 = 1620$. Divide by all $20$ students: $\\frac{1620}{20} = 81$. The mean lands closer to $85$ because more students scored $85$.',
  },
  {
    q: 'The mean of five numbers is $16$. Four of the numbers are $10, 21, 17, 12$. What is the fifth number?',
    answer: '$20$',
    solution: 'The total must be $5 \\times 16 = 80$. The four known numbers give $10 + 21 + 17 + 12 = 60$, so the fifth is $80 - 60 = 20$.',
  },
  {
    q: 'The data set $5, 6, 7, 8, 34$ has mean $12$. If the outlier $34$ is removed, by how much does the mean drop?',
    answer: 'By $5.5$ (from $12$ to $6.5$)',
    solution: 'Without the outlier, the total is $5 + 6 + 7 + 8 = 26$ over $4$ numbers: $\\frac{26}{4} = 6.5$. The mean drops by $12 - 6.5 = 5.5$. One extreme value nearly doubled the mean of this data set!',
  },
  {
    q: 'Write a set of five whole numbers with mean $10$, median $9$, and mode $7$.',
    answer: 'One example: $7, 7, 9, 12, 15$',
    solution: 'The mode says to repeat $7$, the median says the sorted middle is $9$, so start with $7, 7, 9$. The mean says the total is $5 \\times 10 = 50$, leaving $50 - 23 = 27$ for the last two numbers, each bigger than $9$ and not equal to each other. Try $12$ and $15$: the set $7, 7, 9, 12, 15$ satisfies all three conditions. (Other answers work too, such as $7, 7, 9, 13, 14$.)',
  },
]

export default {
  id: 'prealgebra-ch13',
  book: 'prealgebra',
  number: 13,
  title: 'Data and Statistics',
  intro:
    'Numbers love to travel in groups — test scores, game points, daily sales — and statistics is the art of summarizing a whole group with just a few well-chosen numbers. In this chapter you will master the mean, median, mode, and range, discover when each one tells the truth (and when it fibs), and learn to read data presented in tables, frequency counts, and percent breakdowns.',
  sections: [s131, s132, s133],
  challenge,
  worksheet,
}
