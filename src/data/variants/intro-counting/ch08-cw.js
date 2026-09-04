// Counting chapter 8 — variations for the challenge set.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Challenge items are multiple choice: a question, four `choices`, an
//    `answer` INDEX, and a solution. The index is derived from the base
//    problem’s index b, never chosen: v1 = (b+1)%4, v2 = (b+3)%4,
//    v3 = (b+2)%4. Base indices: 1 3 0 2 1 3 0 2 3 1 0 2.
//  - Every key was computed exactly in node with rational arithmetic before a
//    single choice was written: full sample-space enumeration for the finite
//    problems (digit ranges, letter and symbol strings, dice grids, coin and
//    spinner sequences, ordered draws, unordered draws) and explicit stage
//    trees whose branches were checked to total exactly $1$ for the series and
//    stopping games. Every key matches its pin. Pin deviations: none.
//  - The two conditional slots — 4 and 12 — were never reasoned. For each, the
//    conditioning event and the joint event were enumerated SEPARATELY and then
//    divided: slot 4 over the $504$ ordered grabs of three pens ($392$ start
//    with a working pen, $182$ of those also contain a dry one), slot 12 over
//    the full best-of-five tree (P(Hawks win) $=\frac{99}{128}$, P(they win in
//    exactly three) $=\frac{9}{32}$).
//  - Every distractor value was computed in node too, so each trap’s
//    attribution is arithmetically true rather than a guess.
//  - Each solution runs two genuinely different routes that each end ✓ — a
//    count and a probability argument, inclusion-exclusion and a complement,
//    a stage tree and a play-out-every-game count, a bijection and a sum — and
//    route two never re-imports route one’s number. Each wrong choice’s trap is
//    then named in CAPS, ending ✗.
//  - Challenge variations stay as hard as the base problems they replace.
//  - Conventions are settled in every stem: dice, coins, and spinners are fair
//    and independent, and dice that could need telling apart are colored;
//    draws say with or without replacement and say whether they come one at a
//    time or at the same time; every repeated-trial stem says the trials are
//    independent; every game says exactly what stops it.

const challenge = [
  // slot 1 — inclusion-exclusion on the digits or letters of a random string.
  //          Lanes: four-digit thousands/units -> 2/3; five-letter strings
  //          -> 209/512; derived: hundreds odd or units odd -> 7/9.
  [
    {
      q: 'A four-digit positive integer is chosen at random from $1000$ through $9999$, every one of them equally likely. What is the probability that its thousands digit is prime — that is, $2$, $3$, $5$, or $7$ — or its units digit is a multiple of $3$, counting $0$ as a multiple of $3$?',
      choices: ['$\\frac{38}{45}$', '$\\frac{11}{18}$', '$\\frac{2}{3}$', '$\\frac{8}{45}$'],
      answer: 2,
      solution:
        'Count the integers. There are $9000$ of them: the thousands digit runs over $1$ through $9$ and the other three digits run over $0$ through $9$. A prime thousands digit fixes one of $4$ values and leaves the last three free, so $4 \\cdot 1000 = 4000$ integers qualify on that side. A units digit in $\\{0, 3, 6, 9\\}$ leaves the thousands digit its $9$ values and the tens digit its $10$, so $9 \\cdot 10 \\cdot 10 \\cdot 4 = 3600$ qualify on the other. Both at once: $4 \\cdot 10 \\cdot 10 \\cdot 4 = 1600$. The union is $4000 + 3600 - 1600 = 6000$, and $\\frac{6000}{9000} = \\frac{2}{3}$ ✓. Probabilities give the same answer without ever counting to $9000$. The thousands digit is uniform on $1$ through $9$, so it is prime with probability $\\frac49$; the units digit is uniform on $0$ through $9$, so it is a multiple of $3$ with probability $\\frac{4}{10} = \\frac25$; the two digits are chosen independently, so both happen with probability $\\frac49 \\cdot \\frac25 = \\frac{8}{45}$. Then $\\frac49 + \\frac25 - \\frac{8}{45} = \\frac{20}{45} + \\frac{18}{45} - \\frac{8}{45} = \\frac{30}{45} = \\frac23$ ✓. ADDING $\\frac49 + \\frac25 = \\frac{38}{45}$ leaves the $1600$ integers with both features counted twice ✗. READING "multiple of $3$" as $\\{3, 6, 9\\}$ drops $0$ from the units list and gives $\\frac49 + \\frac{3}{10} - \\frac{12}{90} = \\frac{11}{18}$ ✗. MULTIPLYING to $\\frac{8}{45}$ prices both features at once, which is the overlap, not the union ✗.',
    },
    {
      q: 'A five-letter string is formed by choosing each of its five letters independently at random from A, B, C, D, so all $1024$ strings are equally likely. What is the probability that the string begins with A or contains no D at all?',
      choices: ['$\\frac{209}{512}$', '$\\frac{499}{1024}$', '$\\frac{243}{1024}$', '$\\frac{81}{1024}$'],
      answer: 0,
      solution:
        'Count the strings. All told there are $4^5 = 1024$. Strings beginning with A: the first letter is fixed and the last four are free, so $4^4 = 256$. Strings with no D: every letter is one of $3$, so $3^5 = 243$. Strings with both features: the A is fixed and the remaining four avoid D, so $1 \\cdot 3^4 = 81$. The union is $256 + 243 - 81 = 418$, and $\\frac{418}{1024} = \\frac{209}{512}$ ✓. Complementary counting confirms it. A string fails both conditions when it does not begin with A and it does contain a D. Split on the first letter. If it is D — $1$ way — the D requirement is already met and the other four letters are free: $4^4 = 256$ strings. If it is B or C — $2$ ways — the last four must supply the D, and $4^4 - 3^4 = 256 - 81 = 175$ of them do, giving $2 \\cdot 175 = 350$. So $256 + 350 = 606$ strings fail, leaving $1024 - 606 = 418$, or $\\frac{209}{512}$ ✓. ADDING $\\frac{256 + 243}{1024} = \\frac{499}{1024}$ counts the $81$ overlap strings twice ✗. SUBTRACTING $256$ as the overlap treats every string beginning with A as D-free and gives $\\frac{243}{1024}$ ✗. TAKING $\\frac{81}{1024}$ answers with the overlap, the strings that do both ✗.',
    },
    {
      q: 'A three-digit positive integer is chosen at random from $100$ through $999$, every one of them equally likely. What is the probability that its hundreds digit is odd or its units digit is odd?',
      choices: ['$\\frac{1}{2}$', '$\\frac{5}{18}$', '$\\frac{3}{4}$', '$\\frac{7}{9}$'],
      answer: 3,
      solution:
        'Count the $900$ integers. An odd hundreds digit picks one of $\\{1, 3, 5, 7, 9\\}$ and leaves the last two digits free: $5 \\cdot 10 \\cdot 10 = 500$. An odd units digit leaves the hundreds digit its $9$ values and the tens its $10$: $9 \\cdot 10 \\cdot 5 = 450$. Both at once: $5 \\cdot 10 \\cdot 5 = 250$. So the union is $500 + 450 - 250 = 700$, and $\\frac{700}{900} = \\frac79$ ✓. The complement is faster and uses nothing above. The number fails only when both digits are even; the hundreds digit is then one of $\\{2, 4, 6, 8\\}$ — $0$ is not available in the lead — the tens digit is free, and the units digit is one of $\\{0, 2, 4, 6, 8\\}$: $4 \\cdot 10 \\cdot 5 = 200$ integers. That leaves $900 - 200 = 700$, or $\\frac79$ ✓. SUBTRACTING the $250$ overlap from the $500$ as well as from the union gives $\\frac{450}{900} = \\frac12$, which removes the shared numbers twice ✗. TAKING $\\frac{250}{900} = \\frac{5}{18}$ answers with the numbers whose hundreds AND units digits are both odd ✗. TREATING the hundreds digit as uniform over all ten digits makes both halves $\\frac12$ and gives $\\frac12 + \\frac12 - \\frac14 = \\frac34$, but a three-digit number cannot lead with $0$ ✗.',
    },
  ],

  // slot 2 — "none of one value, at least one of another" over independent
  //          trials. Lanes: four-sided die -> 65/256; five people picking
  //          1 through 5 -> 781/3125; derived: a 5 AND a 6 in three rolls.
  [
    {
      q: 'A fair four-sided die with faces $1$ through $4$ is rolled four times, the rolls independent. What is the probability that no roll is a $4$ but at least one roll is a $3$?',
      choices: ['$\\frac{65}{256}$', '$\\frac{81}{256}$', '$\\frac{1}{8}$', '$\\frac{65}{81}$'],
      answer: 0,
      solution:
        'Count the sequences. There are $4^4 = 256$ equally likely sequences of four rolls. Avoiding $4$ altogether leaves each roll three faces: $3^4 = 81$ sequences. Of those, the ones that also avoid $3$ use only $\\{1, 2\\}$: $2^4 = 16$. So $81 - 16 = 65$ sequences avoid $4$ and still show a $3$, and the probability is $\\frac{65}{256}$ ✓. Casework on how many $3$s appear reaches the same count from the other side. If exactly $k$ of the four rolls are $3$s, the remaining $4 - k$ rolls must come from $\\{1, 2\\}$, since $4$ is banned and a $3$ there would change $k$: that is $\\binom4k \\cdot 2^{4-k}$ sequences. Summing $k = 1, 2, 3, 4$ gives $4 \\cdot 8 + 6 \\cdot 4 + 4 \\cdot 2 + 1 \\cdot 1 = 32 + 24 + 8 + 1 = 65$, so $\\frac{65}{256}$ ✓. STOPPING at $\\frac{81}{256}$ answers "no roll is a $4$" and forgets that a $3$ must appear ✗. TAKING $\\frac{32}{256} = \\frac18$ keeps only the $k = 1$ case, but two, three, or four $3$s are allowed ✗. DIVIDING by $3^4$ to get $\\frac{65}{81}$ answers a conditional — the chance of a $3$ GIVEN no $4$ — instead of the plain probability ✗.',
    },
    {
      q: 'Five people each independently pick a whole number from $1$ to $5$ at random, every number equally likely, and two people may pick the same number. What is the probability that nobody picks $5$ but somebody picks $1$?',
      choices: ['$\\frac{1024}{3125}$', '$\\frac{81}{625}$', '$\\frac{781}{3125}$', '$\\frac{781}{1024}$'],
      answer: 2,
      solution:
        'Count the lists of five picks. There are $5^5 = 3125$ of them, all equally likely. Lists that avoid $5$ give each person $4$ choices: $4^5 = 1024$. Of those, the lists that also avoid $1$ give each person $3$ choices: $3^5 = 243$. So $1024 - 243 = 781$ lists avoid $5$ and still contain a $1$, and the probability is $\\frac{781}{3125}$ ✓. Casework on how many people pick $1$ confirms the count. If exactly $k$ people pick $1$, the other $5 - k$ must pick from $\\{2, 3, 4\\}$: $\\binom5k \\cdot 3^{5-k}$ lists. Summing $k = 1$ through $5$ gives $5 \\cdot 81 + 10 \\cdot 27 + 10 \\cdot 9 + 5 \\cdot 3 + 1 = 405 + 270 + 90 + 15 + 1 = 781$, so $\\frac{781}{3125}$ ✓. STOPPING at $\\frac{1024}{3125}$ prices only "nobody picks $5$" ✗. TAKING $\\frac{405}{3125} = \\frac{81}{625}$ keeps only the lists where exactly one person picks $1$ ✗. DIVIDING by $4^5$ to get $\\frac{781}{1024}$ answers the chance of a $1$ GIVEN that no one picked $5$ ✗.',
    },
    {
      q: 'A standard die is rolled three times, the rolls independent. What is the probability that at least one roll is a $5$ and at least one roll is a $6$?',
      choices: ['$\\frac{19}{27}$', '$\\frac{5}{36}$', '$\\frac{1}{9}$', '$\\frac{91}{216}$'],
      answer: 1,
      solution:
        'Work with the complements. Of the $6^3 = 216$ equally likely triples, $5^3 = 125$ show no $5$, another $125$ show no $6$, and $4^3 = 64$ show neither. A triple fails the demand when it misses a $5$ or misses a $6$, which is $125 + 125 - 64 = 186$ triples, so $216 - 186 = 30$ triples succeed: $\\frac{30}{216} = \\frac{5}{36}$ ✓. Listing what such a triple looks like gives the same $30$. It must contain a $5$ and a $6$, so its three faces are either $5$, $6$, and one value from $\\{1, 2, 3, 4\\}$ — $4$ values, each arrangeable in $3! = 6$ orders, for $24$ triples — or two of one and one of the other: $5, 5, 6$ in $3$ orders and $5, 6, 6$ in $3$ orders, for $6$ more. That is $24 + 6 = 30$, or $\\frac{5}{36}$ ✓. TAKING $\\frac{152}{216} = \\frac{19}{27}$ answers "a $5$ OR a $6$ appears", which is the union, not the demand for both ✗. TAKING $\\frac{24}{216} = \\frac19$ keeps only the triples with exactly one $5$ and exactly one $6$ and throws away $5, 5, 6$ and $5, 6, 6$ ✗. QUOTING $\\frac{91}{216}$ gives the chance of at least one $5$ and never asks about the $6$ ✗.',
    },
  ],

  // slot 3 — binomial counts on repeated independent trials, and the
  //          multinomial version. Lanes: 5 colors in 5 spins -> 128/625;
  //          6 replaced draws from 4 tokens -> 1215/4096; derived: two reds
  //          and one blue in four spins -> 4/27.
  [
    {
      q: 'A spinner has $5$ equal sections colored red, blue, green, yellow, and white. It is spun $5$ times, the spins independent. What is the probability that exactly two of the spins land on red?',
      choices: ['$\\frac{64}{3125}$', '$\\frac{128}{625}$', '$\\frac{821}{3125}$', '$\\frac{2}{5}$'],
      answer: 1,
      solution:
        'Price one arrangement, then count the arrangements. A single sequence with two reds and three non-reds has probability $\\left(\\frac15\\right)^2 \\left(\\frac45\\right)^3 = \\frac{1}{25} \\cdot \\frac{64}{125} = \\frac{64}{3125}$, and the two red spins can sit in $\\binom52 = 10$ places, so the answer is $10 \\cdot \\frac{64}{3125} = \\frac{640}{3125} = \\frac{128}{625}$ ✓. Counting sequences avoids fractions entirely. Every spin has $5$ equally likely colors, so there are $5^5 = 3125$ equally likely sequences. Choose the two spins that come up red — $\\binom52 = 10$ ways — and give each of the other three spins one of the $4$ remaining colors: $4^3 = 64$. That is $10 \\cdot 64 = 640$ sequences, so $\\frac{640}{3125} = \\frac{128}{625}$ ✓. TAKING $\\frac{64}{3125}$ prices a single sequence and never counts the $10$ places for the reds ✗. QUOTING $\\frac{821}{3125}$ answers "at least two reds", adding in three, four, and five reds ✗. MULTIPLYING $\\binom52 \\left(\\frac15\\right)^2 = \\frac{10}{25} = \\frac25$ forgets that the other three spins must miss red ✗.',
    },
    {
      q: 'A bag holds $4$ tokens: $1$ gold and $3$ gray. A token is drawn at random, its color noted, and put back before the next draw; this is done $6$ times, so the draws are independent. What is the probability that exactly two of the six draws are gold?',
      choices: ['$\\frac{81}{4096}$', '$\\frac{1909}{4096}$', '$\\frac{405}{1024}$', '$\\frac{1215}{4096}$'],
      answer: 3,
      solution:
        'Price one arrangement, then count the arrangements. Because the token goes back, each draw is gold with probability $\\frac14$ and gray with probability $\\frac34$, independently of the others. One sequence with two golds and four grays has probability $\\left(\\frac14\\right)^2 \\left(\\frac34\\right)^4 = \\frac{1}{16} \\cdot \\frac{81}{256} = \\frac{81}{4096}$, and the two gold draws can sit in $\\binom62 = 15$ places, giving $15 \\cdot \\frac{81}{4096} = \\frac{1215}{4096}$ ✓. Counting sequences of tokens gives the same value. Each draw picks one of the $4$ named tokens equally likely, so there are $4^6 = 4096$ equally likely sequences. Choose the two draws that produce the gold token — $\\binom62 = 15$ ways — and give each of the other four draws one of the $3$ gray tokens: $3^4 = 81$. That is $15 \\cdot 81 = 1215$ sequences, so $\\frac{1215}{4096}$ ✓. TAKING $\\frac{81}{4096}$ prices one sequence and drops the $15$ placements ✗. QUOTING $\\frac{1909}{4096}$ answers "at least two golds" ✗. WRITING $15 \\cdot \\frac{1}{16} \\cdot \\frac{27}{64} = \\frac{405}{1024}$ leaves only three gray draws in the product when four draws must be gray ✗.',
    },
    {
      q: 'A spinner has $3$ equal sections colored red, green, and blue. It is spun $4$ times, the spins independent. What is the probability that exactly two of the spins land on red and exactly one lands on blue?',
      choices: ['$\\frac{2}{27}$', '$\\frac{2}{9}$', '$\\frac{4}{27}$', '$\\frac{1}{81}$'],
      answer: 2,
      solution:
        'Read off the multiset. Two reds and one blue among four spins force the fourth spin to be green, so the four results are exactly red, red, blue, green in some order. Those four letters arrange in $\\frac{4!}{2!\\,1!\\,1!} = 12$ distinct orders, and each order has probability $\\left(\\frac13\\right)^4 = \\frac{1}{81}$, so the answer is $\\frac{12}{81} = \\frac{4}{27}$ ✓. A two-stage argument confirms it without any multiset counting. First ask only about red: exactly two of the four spins are red with probability $\\binom42 \\left(\\frac13\\right)^2 \\left(\\frac23\\right)^2 = 6 \\cdot \\frac19 \\cdot \\frac49 = \\frac{24}{81}$. Given that, the two non-red spins are each green or blue, equally likely and independently, so exactly one of them is blue with probability $2 \\cdot \\frac12 \\cdot \\frac12 = \\frac12$. Multiplying, $\\frac{24}{81} \\cdot \\frac12 = \\frac{12}{81} = \\frac{4}{27}$ ✓. TAKING $\\frac{6}{81} = \\frac{2}{27}$ counts only the choice of which two spins are red and never decides which leftover spin is the blue one ✗. ALLOWING at least one blue among the other two spins gives $\\frac{18}{81} = \\frac29$, which lets both leftovers be blue ✗. TAKING $\\frac{1}{81}$ prices a single ordering and drops all $12$ arrangements ✗.',
    },
  ],

  // slot 4 — at least one bad item in a simultaneous grab, then the
  //          conditional version. Lanes: 12 batteries -> 41/55; 11 students
  //          -> 26/33; derived (CONDITIONAL): 9 pens, first one works.
  [
    {
      q: 'A drawer holds $12$ batteries, and exactly $3$ of them are dead. Four batteries are taken out at random at the same time, so every set of four is equally likely. What is the probability that at least one of the four is dead?',
      choices: ['$\\frac{14}{55}$', '$\\frac{175}{256}$', '$\\frac{28}{55}$', '$\\frac{41}{55}$'],
      answer: 3,
      solution:
        'Use the complement. There are $\\binom{12}{4} = 495$ equally likely sets of four. A set with no dead battery is drawn from the $9$ good ones: $\\binom94 = 126$. So the probability of no dead battery is $\\frac{126}{495} = \\frac{14}{55}$, and the answer is $1 - \\frac{14}{55} = \\frac{41}{55}$ ✓. Counting the good cases directly agrees. Exactly one dead: $3 \\cdot \\binom93 = 3 \\cdot 84 = 252$. Exactly two: $\\binom32 \\cdot \\binom92 = 3 \\cdot 36 = 108$. All three: $1 \\cdot \\binom91 = 9$. That is $252 + 108 + 9 = 369$ sets, and $\\frac{369}{495} = \\frac{41}{55}$ ✓. QUOTING $\\frac{14}{55}$ answers the complement, the chance that every battery works ✗. WRITING $1 - \\left(\\frac34\\right)^4 = \\frac{175}{256}$ treats the four picks as independent draws with replacement, but the batteries come out together and never repeat ✗. TAKING $\\frac{252}{495} = \\frac{28}{55}$ keeps only the sets with exactly one dead battery ✗.',
    },
    {
      q: 'A class of $11$ students includes exactly $4$ who have not done the reading. Three students are called on at random at the same time, so every trio is equally likely. What is the probability that at least one of them has not done the reading?',
      choices: ['$\\frac{7}{33}$', '$\\frac{26}{33}$', '$\\frac{988}{1331}$', '$\\frac{28}{55}$'],
      answer: 1,
      solution:
        'Use the complement. There are $\\binom{11}{3} = 165$ equally likely trios, and a trio in which everyone has read is drawn from the $7$ prepared students: $\\binom73 = 35$. So the probability that all three have read is $\\frac{35}{165} = \\frac{7}{33}$, and the answer is $1 - \\frac{7}{33} = \\frac{26}{33}$ ✓. Counting directly gives the same numerator. Exactly one unprepared: $4 \\cdot \\binom72 = 4 \\cdot 21 = 84$. Exactly two: $\\binom42 \\cdot 7 = 6 \\cdot 7 = 42$. All three: $\\binom43 = 4$. That is $84 + 42 + 4 = 130$ trios, and $\\frac{130}{165} = \\frac{26}{33}$ ✓. QUOTING $\\frac{7}{33}$ answers the complement ✗. WRITING $1 - \\left(\\frac{7}{11}\\right)^3 = \\frac{988}{1331}$ treats the three calls as independent picks with replacement, but one student cannot be called twice ✗. TAKING $\\frac{84}{165} = \\frac{28}{55}$ keeps only the trios with exactly one unprepared student ✗.',
    },
    {
      q: 'A pencil case holds $9$ pens, and exactly $2$ of them are out of ink. Noa grabs three pens one after the other at random, without replacement. Given that the first pen she grabs works, what is the probability that at least one of the three pens is out of ink?',
      choices: ['$\\frac{13}{28}$', '$\\frac{7}{12}$', '$\\frac{13}{21}$', '$\\frac{3}{7}$'],
      answer: 0,
      solution:
        'Enumerate the two events over the ordered grabs and divide. There are $9 \\cdot 8 \\cdot 7 = 504$ equally likely ordered grabs of three pens. The CONDITIONING event, "the first pen works", fixes one of the $7$ working pens first and leaves the other two grabs free: $7 \\cdot 8 \\cdot 7 = 392$ grabs. The JOINT event is "the first pen works and at least one of the three is dry"; among those $392$, the grabs with no dry pen anywhere are $7 \\cdot 6 \\cdot 5 = 210$, so the joint event holds in $392 - 210 = 182$ grabs. Dividing, $\\frac{182}{392} = \\frac{13}{28}$ ✓. Restarting after the news gives the same value from a smaller sample space. Once the first pen is known to work, $8$ pens remain and exactly $2$ of them are dry; the last two grabs are then an equally likely pair from those $8$. Both are working with probability $\\frac{\\binom62}{\\binom82} = \\frac{15}{28}$, so at least one is dry with probability $1 - \\frac{15}{28} = \\frac{13}{28}$ ✓. ANSWERING $\\frac{7}{12}$ is the unconditional probability that a grab of three contains a dry pen — it throws away the news about the first pen ✗. DIVIDING the $182$ joint grabs by the $294$ grabs that contain a dry pen gives $\\frac{13}{21}$, which conditions on the wrong event: it prices the chance the first pen works GIVEN a dry pen appears ✗. TAKING $\\frac{2 \\cdot 6}{\\binom82} = \\frac{12}{28} = \\frac37$ counts only the pairs with exactly one dry pen and drops the pair that is dry twice ✗.',
    },
  ],
];

// slot 5 — inclusion-exclusion on a dice grid. Lanes: two dice, sum a
//          multiple of 4 or both even -> 13/36; three dice, sum a multiple
//          of 5 or all odd -> 11/36; derived: exactly one condition -> 5/12.
const slot5 = [
  {
    q: 'Two standard dice, one red and one blue, are rolled. What is the probability that the sum of the two numbers is a multiple of $4$ or both dice show even numbers?',
    choices: ['$\\frac{1}{2}$', '$\\frac{5}{18}$', '$\\frac{13}{36}$', '$\\frac{5}{36}$'],
    answer: 2,
    solution:
      'Count on the $36$-cell grid. A sum that is a multiple of $4$ means $4$, $8$, or $12$: the sum $4$ happens in $3$ rolls, the sum $8$ in $5$, the sum $12$ in $1$, for $9$ rolls. Both dice even is $3 \\cdot 3 = 9$ rolls. The overlap — both even with a multiple-of-$4$ sum — is $(2,2)$, $(2,6)$, $(6,2)$, $(4,4)$, and $(6,6)$, so $5$ rolls. The union is $9 + 9 - 5 = 13$, giving $\\frac{13}{36}$ ✓. Splitting by parity counts the same rolls once each, with no subtraction at all. Every one of the $9$ both-even rolls is in the event. A roll that is not both even can only qualify through its sum, and a multiple of $4$ is even, so the two dice must then both be odd; two odd faces summing to $4$ are $(1,3)$ and $(3,1)$, and summing to $8$ are $(3,5)$ and $(5,3)$, while $12$ is out of reach for two odd faces. That is $4$ more rolls, so $9 + 4 = 13$ and the probability is $\\frac{13}{36}$ ✓. ADDING $\\frac{9}{36} + \\frac{9}{36} = \\frac12$ counts the $5$ shared rolls twice ✗. COUNTING "both dice even" as $3 + 3 = 6$ rolls instead of $3 \\cdot 3 = 9$ gives $\\frac{9 + 6 - 5}{36} = \\frac{5}{18}$ ✗. TAKING $\\frac{5}{36}$ answers with the overlap, the rolls that do both ✗.',
  },
  {
    q: 'Three standard dice — one red, one blue, and one green — are rolled. What is the probability that the sum of the three numbers is a multiple of $5$ or all three dice show odd numbers?',
    choices: ['$\\frac{11}{36}$', '$\\frac{35}{108}$', '$\\frac{43}{216}$', '$\\frac{1}{8}$'],
    answer: 0,
    solution:
      'Count on the $216$ ordered triples. The reachable multiples of $5$ are $5$, $10$, and $15$, and listing the triples by their faces gives $\\{1,1,3\\}$ and $\\{1,2,2\\}$ for the sum $5$ — $3 + 3 = 6$ triples; $\\{1,3,6\\}$, $\\{1,4,5\\}$, $\\{2,3,5\\}$ with $6$ orders each and $\\{2,2,6\\}$, $\\{2,4,4\\}$, $\\{3,3,4\\}$ with $3$ orders each for the sum $10$ — $18 + 9 = 27$ triples; and $\\{3,6,6\\}$ with $3$, $\\{4,5,6\\}$ with $6$, $\\{5,5,5\\}$ with $1$ for the sum $15$ — $10$ triples. That is $6 + 27 + 10 = 43$. All three odd is $3^3 = 27$. The overlap needs an odd sum that is a multiple of $5$, so $5$ or $15$: $\\{1,1,3\\}$ in $3$ orders and $\\{5,5,5\\}$ in $1$, for $4$ triples. The union is $43 + 27 - 4 = 66$, giving $\\frac{66}{216} = \\frac{11}{36}$ ✓. Splitting by parity reaches $66$ with a different count of the multiples of $5$. All $27$ all-odd triples are in the event outright. For the other $189$ triples the sum must be a multiple of $5$, so count those sums by conditioning on the first two dice: for each of the $36$ ordered pairs $(a, b)$, the third die must satisfy $c \\equiv -a - b \\pmod 5$, and among $1$ through $6$ the residue $1$ is hit twice (by $1$ and $6$) while every other residue is hit once. The residue needed is $1$ exactly when $a + b \\equiv 4 \\pmod 5$, that is $a + b = 4$ or $9$, which happens in $3 + 4 = 7$ pairs. So the multiple-of-$5$ triples number $7 \\cdot 2 + 29 \\cdot 1 = 43$, of which the all-odd ones — the $3$ orders of $\\{1,1,3\\}$ and $\\{5,5,5\\}$ — are already counted, leaving $39$. Then $27 + 39 = 66$ and the probability is $\\frac{11}{36}$ ✓. ADDING $\\frac{43 + 27}{216} = \\frac{35}{108}$ counts the $4$ shared triples twice ✗. TAKING $\\frac{43}{216}$ answers only the multiple-of-$5$ sums ✗. TAKING $\\frac{27}{216} = \\frac18$ answers only the all-odd triples ✗.',
  },
  {
    q: 'Two standard dice, one red and one blue, are rolled. Consider the two conditions "the sum of the two numbers is a multiple of $3$" and "both dice show odd numbers". What is the probability that exactly one of these two conditions holds?',
    choices: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{1}{12}$', '$\\frac{5}{12}$'],
    answer: 3,
    solution:
      'Count each condition and strip out what they share. On the $36$-cell grid, $12$ rolls have a sum that is a multiple of $3$ — the sums $3$, $6$, $9$, and $12$ appear $2$, $5$, $4$, and $1$ times — and $3 \\cdot 3 = 9$ rolls have both dice odd. The overlap needs two odd faces with a multiple-of-$3$ sum; that sum is even, so it is $6$ or $12$, and only $(1,5)$, $(5,1)$, $(3,3)$ qualify, since $12$ is out of reach for two odd faces. "Exactly one" keeps the $12 - 3 = 9$ rolls that make the sum work while failing the parity test, plus the $9 - 3 = 6$ rolls that are both odd with a sum that is not a multiple of $3$: $9 + 6 = 15$, so $\\frac{15}{36} = \\frac{5}{12}$ ✓. Sorting the grid by parity counts the same $15$ rolls without ever computing an overlap. If both dice are odd — $9$ rolls — the parity condition holds, so exactly one condition holds when the sum is not a multiple of $3$; the two odd faces summing to $6$ are $(1,5)$, $(5,1)$, $(3,3)$, so $9 - 3 = 6$ rolls qualify. If the dice are not both odd — $27$ rolls — the parity condition fails, so the sum must be a multiple of $3$: both even gives $(2,4)$, $(4,2)$, $(6,6)$, and one odd with one even gives the odd sums $3$ — $(1,2)$, $(2,1)$ — and $9$ — $(3,6)$, $(6,3)$, $(4,5)$, $(5,4)$ — for $3 + 6 = 9$ rolls. Together $6 + 9 = 15$, so $\\frac{5}{12}$ ✓. TAKING $\\frac{18}{36} = \\frac12$ answers the union, which also keeps the rolls that satisfy both conditions ✗. TAKING $\\frac{9}{36} = \\frac14$ keeps only the multiple-of-$3$ half of the answer ✗. TAKING $\\frac{3}{36} = \\frac{1}{12}$ answers with the rolls where BOTH conditions hold ✗.',
  },
];

// slot 6 — overlapping run conditions inside one sequence of trials.
//          Lanes: 6 flips, two blocks of three -> 7/16; 5 spins, two end
//          pairs -> 5/9; derived: three overlapping events -> 13/16.
const slot6 = [
  {
    q: 'A fair coin is flipped $6$ times, the flips independent. What is the probability that the first three flips all match each other or the last three flips all match each other?',
    choices: ['$\\frac{7}{16}$', '$\\frac{1}{2}$', '$\\frac{1}{16}$', '$\\frac{15}{64}$'],
    answer: 0,
    solution:
      'Work with probabilities. Three particular flips all match when the second and third copy the first: $\\frac12 \\cdot \\frac12 = \\frac14$. That gives $\\frac14$ for the first block and $\\frac14$ for the last block, and the two blocks use disjoint coins, so they are independent and both happen with probability $\\frac14 \\cdot \\frac14 = \\frac{1}{16}$. The union is $\\frac14 + \\frac14 - \\frac{1}{16} = \\frac{7}{16}$ ✓. Counting the $2^6 = 64$ sequences confirms it. The first three match in $2$ ways with the last three free: $2 \\cdot 2^3 = 16$ sequences. Likewise $16$ for the last three. Both blocks constant is $2 \\cdot 2 = 4$ sequences. The union is $16 + 16 - 4 = 28$, and $\\frac{28}{64} = \\frac{7}{16}$ ✓. ADDING $\\frac14 + \\frac14 = \\frac12$ counts the $4$ sequences with both blocks constant twice ✗. TAKING $\\frac{1}{16}$ answers with the overlap, both blocks constant at once ✗. READING "all match" as "all heads" makes each block $\\frac18$ and gives $\\frac18 + \\frac18 - \\frac{1}{64} = \\frac{15}{64}$, but three tails match too ✗.',
  },
  {
    q: 'A spinner with $3$ equal sections labeled A, B, C is spun $5$ times, the spins independent. What is the probability that the first two spins match each other or the last two spins match each other?',
    choices: ['$\\frac{2}{3}$', '$\\frac{1}{9}$', '$\\frac{5}{9}$', '$\\frac{17}{81}$'],
    answer: 2,
    solution:
      'Work with probabilities. Two particular spins match when the second copies the first, which happens with probability $\\frac13$. So each of the two events has probability $\\frac13$, and since spins $1$ and $2$ share no section with spins $4$ and $5$ the two events are independent, giving an overlap of $\\frac13 \\cdot \\frac13 = \\frac19$. The union is $\\frac13 + \\frac13 - \\frac19 = \\frac59$ ✓. The complement needs no inclusion-exclusion at all. Neither pair matches when spin $2$ differs from spin $1$ — probability $\\frac23$ — and spin $5$ differs from spin $4$ — probability $\\frac23$ — with spin $3$ free. That is $\\frac23 \\cdot \\frac23 = \\frac49$, so the answer is $1 - \\frac49 = \\frac59$ ✓. ADDING $\\frac13 + \\frac13 = \\frac23$ double-counts the sequences where both pairs match ✗. TAKING $\\frac19$ answers with the overlap ✗. READING "match" as "both land on one named section" makes each event $\\frac19$ and gives $\\frac19 + \\frac19 - \\frac{1}{81} = \\frac{17}{81}$, but a match on any of the three sections counts ✗.',
  },
  {
    q: 'A fair coin is flipped $5$ times, the flips independent. What is the probability that the first two flips match each other, or the last two flips match each other, or the middle three flips — flips $2$, $3$, and $4$ — all match each other?',
    choices: ['$\\frac{3}{4}$', '$\\frac{13}{16}$', '$\\frac{3}{16}$', '$\\frac{65}{128}$'],
    answer: 1,
    solution:
      'Run inclusion-exclusion over the $2^5 = 32$ sequences. Call the events $A$ (flips $1$ and $2$ match), $B$ (flips $4$ and $5$ match), and $C$ (flips $2$, $3$, $4$ all match). Then $|A| = 16$ and $|B| = 16$, since one flip is forced and the other three are free, and $|C| = 2 \\cdot 2 \\cdot 2 = 8$, since two flips are forced and flips $1$ and $5$ are free. For the pairs: $A \\cap B$ forces two flips and leaves three free, so $8$; $A \\cap C$ makes flips $1$ through $4$ all equal with flip $5$ free, so $4$; $B \\cap C$ makes flips $2$ through $5$ all equal with flip $1$ free, so $4$. All three at once makes every flip equal: $2$. So the union is $16 + 16 + 8 - 8 - 4 - 4 + 2 = 26$, giving $\\frac{26}{32} = \\frac{13}{16}$ ✓. Counting the failures directly is quicker and touches none of those terms. A sequence fails when flip $1 \\ne$ flip $2$, flip $4 \\ne$ flip $5$, and flips $2$, $3$, $4$ are not all equal. Pick flip $2$ freely — $2$ ways — and flip $1$ is forced; pick flip $4$ freely — $2$ ways — and flip $5$ is forced; pick flip $3$ freely — $2$ ways. That is $8$ sequences meeting the first two demands, and among them the ones with flips $2$, $3$, $4$ all equal need flip $4$ to copy flip $2$ and flip $3$ to match as well, which happens in $2$ of the $8$. So $8 - 2 = 6$ sequences fail, leaving $32 - 6 = 26$, or $\\frac{13}{16}$ ✓. TAKING $\\frac{24}{32} = \\frac34$ answers with $A \\cup B$ alone and never adds the sequences that only the middle-three event catches ✗. TAKING $\\frac{6}{32} = \\frac{3}{16}$ answers with the failures instead of the successes ✗. READING "match" as "both heads" and "all match" as "all heads" shrinks the three events to $\\frac14$, $\\frac14$, and $\\frac18$, and multiplying those complements gives $1 - \\frac34 \\cdot \\frac34 \\cdot \\frac78 = \\frac{65}{128}$, but three tails match just as well as three heads ✗.',
  },
];

// slot 7 — "both of two named outcomes appear" over independent trials.
//          Lanes: 5-color spinner, 4 spins -> 194/625; 5 people, 3 doors
//          -> 20/27; derived: exactly two colors in four spins -> 21/64.
const slot7 = [
  {
    q: 'A spinner has $5$ equal sections colored red, blue, green, yellow, and white. It is spun $4$ times, the spins independent. What is the probability that at least one spin lands on red and at least one spin lands on blue?',
    choices: ['$\\frac{113}{625}$', '$\\frac{194}{625}$', '$\\frac{544}{625}$', '$\\frac{108}{625}$'],
    answer: 1,
    solution:
      'Take the complement of a union. There are $5^4 = 625$ equally likely spin sequences. A sequence fails when it has no red or no blue. No red: $4^4 = 256$. No blue: $4^4 = 256$. Neither color: $3^4 = 81$. So the failures number $256 + 256 - 81 = 431$, leaving $625 - 431 = 194$ successes and $\\frac{194}{625}$ ✓. Casework on the number of red spins builds the same count from nothing. If exactly $r$ spins are red — $\\binom4r$ choices of position — the other $4 - r$ spins avoid red and must include a blue, which happens in $4^{4-r} - 3^{4-r}$ ways. For $r = 1$: $4(64 - 27) = 148$. For $r = 2$: $6(16 - 9) = 42$. For $r = 3$: $4(4 - 3) = 4$. For $r = 4$ there is no room for blue, so $0$. That totals $148 + 42 + 4 = 194$, or $\\frac{194}{625}$ ✓. TAKING $\\frac{625 - 256 - 256}{625} = \\frac{113}{625}$ subtracts the $81$ all-other-color sequences twice and never adds them back ✗. QUOTING $\\frac{544}{625}$ answers "red or blue appears", the union rather than both ✗. TAKING $\\frac{108}{625}$ counts only the sequences with exactly one red and exactly one blue ✗.',
  },
  {
    q: 'Five people each independently pick one of $3$ doors at random, every door equally likely, and two people may pick the same door. What is the probability that at least one person picks Door 1 and at least one person picks Door 2?',
    choices: ['$\\frac{179}{243}$', '$\\frac{242}{243}$', '$\\frac{50}{81}$', '$\\frac{20}{27}$'],
    answer: 3,
    solution:
      'Take the complement of a union. There are $3^5 = 243$ equally likely assignments. Nobody picks Door 1: each person has $2$ doors, so $2^5 = 32$. Nobody picks Door 2: $32$. Nobody picks either: everyone takes Door 3, so $1$. The failures number $32 + 32 - 1 = 63$, leaving $243 - 63 = 180$ and $\\frac{180}{243} = \\frac{20}{27}$ ✓. Casework on Door 3 rebuilds that $180$. Let $k$ people choose Door 3 — $\\binom5k$ ways — and the remaining $5 - k$ split between Doors 1 and 2 using both, which happens in $2^{5-k} - 2$ ways. For $k = 0$: $1 \\cdot 30 = 30$. For $k = 1$: $5 \\cdot 14 = 70$. For $k = 2$: $10 \\cdot 6 = 60$. For $k = 3$: $10 \\cdot 2 = 20$. For $k = 4$ or $5$ there are not two people left, so $0$. That totals $30 + 70 + 60 + 20 = 180$, or $\\frac{20}{27}$ ✓. TAKING $\\frac{243 - 64}{243} = \\frac{179}{243}$ forgets to add back the single all-Door-3 assignment that both failure counts removed ✗. QUOTING $\\frac{242}{243}$ answers "Door 1 or Door 2 gets someone" ✗. TAKING $\\frac{150}{243} = \\frac{50}{81}$ counts the assignments that use all three doors, which needlessly demands a taker for Door 3 ✗.',
  },
  {
    q: 'A spinner has $4$ equal sections colored red, blue, green, and yellow. It is spun $4$ times, the spins independent. What is the probability that exactly two different colors appear among the four spins?',
    choices: ['$\\frac{3}{8}$', '$\\frac{11}{32}$', '$\\frac{21}{64}$', '$\\frac{9}{64}$'],
    answer: 2,
    solution:
      'Choose the pair of colors, then fill the spins. There are $4^4 = 256$ equally likely sequences. Pick the two colors that appear: $\\binom42 = 6$ ways. Sequences using only those two colors number $2^4 = 16$, but $2$ of them use just one color, so $14$ use both. That gives $6 \\cdot 14 = 84$ sequences and $\\frac{84}{256} = \\frac{21}{64}$ ✓. Sorting by how the four spins split between the two colors reaches $84$ another way. Exactly two colors means the split is $3$–$1$ or $2$–$2$. For $3$–$1$: choose the color used three times ($4$), the color used once ($3$), and the position of the lone spin ($4$), giving $48$. For $2$–$2$: choose the unordered pair of colors ($\\binom42 = 6$) and which two of the four spins take the first of them ($\\binom42 = 6$), giving $36$. Together $48 + 36 = 84$, or $\\frac{21}{64}$ ✓. TAKING $\\frac{6 \\cdot 16}{256} = \\frac38$ forgets to remove the sequences that use only one of the two chosen colors ✗. TAKING $\\frac{88}{256} = \\frac{11}{32}$ answers "at most two colors", adding the $4$ single-color sequences ✗. TAKING $\\frac{36}{256} = \\frac{9}{64}$ keeps only the $2$–$2$ splits ✗.',
  },
];

// slot 8 — series that stop as soon as a player reaches a fixed number of
//          wins. Lanes: first to 4, series lasts 7 -> 160/729; first to 3
//          points, exactly 4 points -> 45/128; derived: who wins -> 992/3125.
const slot8 = [
  {
    q: 'Two teams play a series that ends as soon as one team has won $4$ games. The Larks win each game with probability $\\frac{1}{3}$, independently of the other games. What is the probability that the series lasts the full $7$ games?',
    choices: ['$\\frac{8}{729}$', '$\\frac{5}{16}$', '$\\frac{160}{2187}$', '$\\frac{160}{729}$'],
    answer: 3,
    solution:
      'Ask what must be true after six games. A seventh game is played exactly when neither team has four wins yet, which means the first six games split $3$–$3$; nothing about game $7$ matters. Choosing which three of the first six the Larks take gives $\\binom63 = 20$ orders, each of probability $\\left(\\frac13\\right)^3\\left(\\frac23\\right)^3 = \\frac{8}{729}$, so the probability is $20 \\cdot \\frac{8}{729} = \\frac{160}{729}$ ✓. Adding up the shorter series and subtracting from $1$ never mentions a $3$–$3$ split. A series ends in $4$ games with probability $\\left(\\frac13\\right)^4 + \\left(\\frac23\\right)^4 = \\frac{1}{81} + \\frac{16}{81} = \\frac{17}{81}$. It ends in $5$ when one team wins $3$ of the first $4$ and then game $5$: $\\binom43\\left(\\frac13\\right)^3\\left(\\frac23\\right)\\cdot\\frac13 + \\binom43\\left(\\frac23\\right)^3\\left(\\frac13\\right)\\cdot\\frac23 = \\frac{8}{243} + \\frac{64}{243} = \\frac{72}{243}$. It ends in $6$ when one team wins $3$ of the first $5$ and then game $6$: $\\binom53\\left(\\frac13\\right)^3\\left(\\frac23\\right)^2\\cdot\\frac13 + \\binom53\\left(\\frac23\\right)^3\\left(\\frac13\\right)^2\\cdot\\frac23 = \\frac{40}{729} + \\frac{160}{729} = \\frac{200}{729}$. Over the common denominator $729$ these are $\\frac{153}{729}$, $\\frac{216}{729}$, and $\\frac{200}{729}$, totaling $\\frac{569}{729}$, so the seventh game is reached with probability $1 - \\frac{569}{729} = \\frac{160}{729}$ ✓. TAKING $\\frac{8}{729}$ prices one $3$–$3$ order and drops the $20$ arrangements ✗. USING $\\frac{\\binom63}{2^6} = \\frac{5}{16}$ treats the games as fair coin flips, but the Larks win only $\\frac13$ of the time ✗. MULTIPLYING by the Larks’ chance in game $7$ gives $\\frac{160}{2187}$, which answers "the Larks win in $7$" rather than "the series lasts $7$" ✗.',
  },
  {
    q: 'Vik and Wen play a match that ends as soon as one of them has won $3$ points. Vik wins each point with probability $\\frac{1}{4}$, independently of the other points. What is the probability that the match lasts exactly $4$ points?',
    choices: ['$\\frac{81}{256}$', '$\\frac{45}{128}$', '$\\frac{9}{256}$', '$\\frac{15}{128}$'],
    answer: 1,
    solution:
      'Ask who finishes on point $4$ and where the single loss sits. The match ends on point $4$ exactly when one player wins $3$ of the $4$ points with the loss among the first three. Vik doing it: $\\binom31$ places for his loss, each path of probability $\\left(\\frac14\\right)^3\\left(\\frac34\\right) = \\frac{3}{256}$, so $\\frac{9}{256}$. Wen doing it: $\\binom31$ places, each path $\\left(\\frac34\\right)^3\\left(\\frac14\\right) = \\frac{27}{256}$, so $\\frac{81}{256}$. Together $\\frac{90}{256} = \\frac{45}{128}$ ✓. The other two lengths add to the rest of $1$, which pins the same value. The match ends in $3$ points with a sweep: $\\left(\\frac14\\right)^3 + \\left(\\frac34\\right)^3 = \\frac{1}{64} + \\frac{27}{64} = \\frac{7}{16}$. It ends in $5$ when the first four points split $2$–$2$ and the fifth decides: $\\binom42\\left(\\frac14\\right)^2\\left(\\frac34\\right)^2 \\cdot \\frac14 + \\binom42\\left(\\frac34\\right)^2\\left(\\frac14\\right)^2 \\cdot \\frac34 = \\frac{54}{1024} + \\frac{162}{1024} = \\frac{27}{128}$. Since a match must end in $3$, $4$, or $5$ points, the answer is $1 - \\frac{7}{16} - \\frac{27}{128} = \\frac{128 - 56 - 27}{128} = \\frac{45}{128}$ ✓. TAKING $\\frac{81}{256}$ counts only the matches Wen finishes on point $4$ ✗. TAKING $\\frac{9}{256}$ counts only the matches Vik finishes ✗. DROPPING the $\\binom31$ placements gives $\\frac{3}{256} + \\frac{27}{256} = \\frac{15}{128}$, which prices one order per player ✗.',
  },
  {
    q: 'Riko and Sana play a badminton match that ends as soon as one of them has won $3$ games. Riko wins each game with probability $\\frac{2}{5}$, independently of the other games. What is the probability that Riko wins the match?',
    choices: ['$\\frac{992}{3125}$', '$\\frac{8}{125}$', '$\\frac{56}{125}$', '$\\frac{392}{3125}$'],
    answer: 0,
    solution:
      'Organize by how long the match runs. Riko can win in $3$, $4$, or $5$ games, and in every case the last game is hers. In $3$: $\\left(\\frac25\\right)^3 = \\frac{8}{125} = \\frac{200}{3125}$. In $4$: her one loss sits among the first three, so $\\binom32\\left(\\frac25\\right)^3\\left(\\frac35\\right) = 3 \\cdot \\frac{8}{125} \\cdot \\frac35 = \\frac{360}{3125}$. In $5$: her two losses sit among the first four, so $\\binom42\\left(\\frac25\\right)^3\\left(\\frac35\\right)^2 = 6 \\cdot \\frac{8}{125} \\cdot \\frac{9}{25} = \\frac{432}{3125}$. Adding, $\\frac{200 + 360 + 432}{3125} = \\frac{992}{3125}$ ✓. Playing out all five games gives the answer with no casework on length. Imagine the pair keeps playing dead games until five have been played; the extra games cannot change who reached $3$ wins first, so Riko wins the real match exactly when she wins at least $3$ of $5$ independent games. That is $\\binom53\\left(\\frac25\\right)^3\\left(\\frac35\\right)^2 + \\binom54\\left(\\frac25\\right)^4\\left(\\frac35\\right) + \\left(\\frac25\\right)^5 = \\frac{720}{3125} + \\frac{240}{3125} + \\frac{32}{3125} = \\frac{992}{3125}$ ✓. TAKING $\\frac{8}{125}$ counts only the straight-sets sweep ✗. USING $\\binom43$ and $\\binom53$ for the four- and five-game wins gives $\\frac{1400}{3125} = \\frac{56}{125}$, which lets the clinching game fall anywhere instead of last ✗. ADDING $\\left(\\frac25\\right)^3 + \\left(\\frac25\\right)^3\\left(\\frac35\\right) + \\left(\\frac25\\right)^3\\left(\\frac35\\right)^2 = \\frac{392}{3125}$ prices one order per length and drops the arrangements ✗.',
  },
];

// slot 9 — patterns in a random arrangement of two kinds of item. Lanes:
//          8 marbles alternating -> 1/35; 3 Y cards never adjacent -> 2/7;
//          derived: two of the first three marbles red -> 9/20.
const slot9 = [
  {
    q: 'A bag holds $4$ red and $4$ blue marbles. All eight are drawn at random one at a time without replacement. What is the probability that the colors alternate for the whole sequence, so that no two neighboring marbles share a color?',
    choices: ['$\\frac{1}{35}$', '$\\frac{1}{70}$', '$\\frac{1}{128}$', '$\\frac{1}{256}$'],
    answer: 0,
    solution:
      'Look only at the pattern of colors. The eight draws produce a string of four R’s and four B’s, and every one of the $\\binom84 = 70$ such strings is equally likely, since the marbles come out in a uniformly random order. Exactly $2$ of those strings alternate: RBRBRBRB and BRBRBRBR. So the probability is $\\frac{2}{70} = \\frac{1}{35}$ ✓. Walking the draws one at a time gives the same value from the stage probabilities. The first marble can be anything. After it, $7$ marbles remain and $4$ are the other color, so the second draw alternates with probability $\\frac47$; then $6$ remain with $3$ of the needed color, $\\frac36$; then $\\frac35$, $\\frac24$, $\\frac23$, $\\frac12$, and the last marble is forced. Multiplying, $\\frac47 \\cdot \\frac36 \\cdot \\frac35 \\cdot \\frac24 \\cdot \\frac23 \\cdot \\frac12 \\cdot 1 = \\frac{1}{35}$ ✓. TAKING $\\frac{1}{70}$ counts one alternating string and forgets the sequence may start with either color ✗. USING $2 \\cdot \\left(\\frac12\\right)^8 = \\frac{1}{128}$ treats each draw as an independent coin flip, but the bag empties and the colors run out ✗. USING $\\left(\\frac12\\right)^8 = \\frac{1}{256}$ makes both of those slips at once ✗.',
  },
  {
    q: 'Four cards marked X and three cards marked Y are shuffled and laid out in a row, so all $\\binom{7}{3} = 35$ arrangements of the marks are equally likely. What is the probability that no two Y cards are next to each other?',
    choices: ['$\\frac{4}{35}$', '$\\frac{5}{7}$', '$\\frac{2}{7}$', '$\\frac{1}{21}$'],
    answer: 2,
    solution:
      'Build the good arrangements with gaps. Lay the four X cards down first: _ X _ X _ X _ X _. They create $5$ openings, counting the two ends, and putting each Y card into its own opening guarantees no two Y’s touch, while any legal arrangement arises this way exactly once. So there are $\\binom53 = 10$ good arrangements out of $\\binom73 = 35$, giving $\\frac{10}{35} = \\frac27$ ✓. Subtracting the bad arrangements confirms the $10$. An arrangement is bad when its Y positions contain at least one of the $6$ neighboring pairs $\\{1,2\\}, \\{2,3\\}, \\ldots, \\{6,7\\}$. Each such pair leaves $5$ choices for the third Y, giving $6 \\cdot 5 = 30$, but an arrangement whose three Y’s are three in a row contains two of those pairs and is counted twice; there are $5$ runs of three consecutive positions, so the bad count is $30 - 5 = 25$. That leaves $35 - 25 = 10$ good arrangements, or $\\frac27$ ✓. USING $\\binom43 = 4$ gaps gives $\\frac{4}{35}$ and forgets one of the end openings ✗. TAKING $\\frac{25}{35} = \\frac57$ answers the complement, some two Y cards adjacent ✗. DIVIDING by the ordered count $7 \\cdot 6 \\cdot 5 = 210$ gives $\\frac{10}{210} = \\frac{1}{21}$, mixing an unordered numerator with an ordered denominator ✗.',
  },
  {
    q: 'A bag holds $3$ red and $3$ blue marbles. All six are drawn at random one at a time without replacement. What is the probability that exactly two of the first three marbles drawn are red?',
    choices: ['$\\frac{1}{2}$', '$\\frac{9}{20}$', '$\\frac{3}{8}$', '$\\frac{3}{20}$'],
    answer: 1,
    solution:
      'Treat the first three draws as an unordered set. Because the six marbles come out in a uniformly random order, the set of the first three is an equally likely $3$-element subset of the six, and there are $\\binom63 = 20$ of them. A subset with exactly two reds picks $2$ of the $3$ reds and $1$ of the $3$ blues: $\\binom32\\binom31 = 3 \\cdot 3 = 9$. So the probability is $\\frac{9}{20}$ ✓. Counting ordered triples reaches the same fraction. There are $6 \\cdot 5 \\cdot 4 = 120$ equally likely ordered first-three draws. The blue marble sits in one of $3$ positions; for each choice, the two red slots can be filled in $3 \\cdot 2 = 6$ ways and the blue slot in $3$ ways, giving $18$ orders. That is $3 \\cdot 18 = 54$, and $\\frac{54}{120} = \\frac{9}{20}$ ✓. TAKING $\\frac{10}{20} = \\frac12$ answers "at least two red", adding the one all-red subset ✗. USING $\\binom32\\left(\\frac12\\right)^3 = \\frac38$ treats each draw as an independent fair color, but the reds run out ✗. TAKING $\\frac{3}{20}$ counts only the choice of which two reds appear and never picks the blue marble ✗.',
  },
];

// slot 10 — comparing the head counts of two people with different numbers
//           of trials. Lanes: 5 coins vs 4 coins -> 63/256; 3 spins vs 2
//           spins at p = 1/4 -> 149/512; derived: the shorter side wins.
const slot10 = [
  {
    q: 'Cam flips $5$ fair coins and Dee flips $4$ fair coins, all nine flips independent. What is the probability that Cam gets exactly one more head than Dee?',
    choices: ['$\\frac{1}{2}$', '$\\frac{21}{128}$', '$\\frac{63}{256}$', '$\\frac{105}{256}$'],
    answer: 2,
    solution:
      'Sum over Dee’s head count. All $2^9 = 512$ outcomes are equally likely. If Dee gets $k$ heads — $\\binom4k$ ways — Cam must get $k + 1$ — $\\binom5{k+1}$ ways. That gives $\\binom40\\binom51 + \\binom41\\binom52 + \\binom42\\binom53 + \\binom43\\binom54 + \\binom44\\binom55 = 5 + 40 + 60 + 20 + 1 = 126$ outcomes, so $\\frac{126}{512} = \\frac{63}{256}$ ✓. Turning Cam’s coins over collapses the sum to a single binomial coefficient. Write $C$ for Cam’s heads and $D$ for Dee’s. Then $C = D + 1$ is the same statement as $(5 - C) + D = 4$, and $5 - C$ is the number of TAILS among Cam’s five coins. Cam’s five tail-marks and Dee’s four head-marks are $9$ independent marks, each appearing with probability $\\frac12$, so the demand is that exactly $4$ of the $9$ marks appear: $\\frac{\\binom94}{2^9} = \\frac{126}{512} = \\frac{63}{256}$ ✓. TAKING $\\frac12$ answers "Cam gets more heads than Dee", which the extra coin makes exactly even but which is not the same as exactly one more ✗. TAKING $\\frac{84}{512} = \\frac{21}{128}$ prices DEE getting one more head than Cam ✗. TAKING $\\frac{210}{512} = \\frac{105}{256}$ allows the two head counts to differ by one in either direction ✗.',
  },
  {
    q: 'A spinner has $4$ equal sections, exactly one of them gold. Gia spins it $3$ times and Han spins the same spinner $2$ times, all five spins independent. What is the probability that Gia lands on gold exactly one more time than Han?',
    choices: ['$\\frac{149}{512}$', '$\\frac{5}{16}$', '$\\frac{197}{512}$', '$\\frac{189}{1024}$'],
    answer: 0,
    solution:
      'Count spin sequences, weighting each gold count. Gia has $4^3 = 64$ equally likely sequences, of which $27$ have no gold, $27$ have one, $9$ have two, and $1$ has three; Han has $4^2 = 16$, of which $9$ have no gold, $6$ have one, and $1$ has two. The $64 \\cdot 16 = 1024$ pairs are equally likely, and Gia beats Han by exactly one in $27 \\cdot 9 + 9 \\cdot 6 + 1 \\cdot 1 = 243 + 54 + 1 = 298$ of them, so $\\frac{298}{1024} = \\frac{149}{512}$ ✓. Setting Gia’s third spin aside gives a different decomposition. Let $G_2$ be Gia’s gold count on her first two spins and $X$ her third spin, so $G_2$ and Han’s count $H$ have the same distribution, namely $\\frac{9}{16}, \\frac{6}{16}, \\frac{1}{16}$ for $0$, $1$, $2$ golds. If the third spin is gold — probability $\\frac14$ — Gia needs $G_2 = H$, which happens with probability $\\frac{81 + 36 + 1}{256} = \\frac{118}{256}$. If it is not gold — probability $\\frac34$ — she needs $G_2 = H + 1$, which happens with probability $\\frac{6 \\cdot 9 + 1 \\cdot 6}{256} = \\frac{60}{256}$. Together $\\frac14 \\cdot \\frac{118}{256} + \\frac34 \\cdot \\frac{60}{256} = \\frac{59}{512} + \\frac{90}{512} = \\frac{149}{512}$ ✓. USING $\\frac{5}{16}$ imports the fair-coin answer for $3$ trials against $2$, but gold comes up only $\\frac14$ of the time ✗. TAKING $\\frac{394}{1024} = \\frac{197}{512}$ answers "Gia lands on gold more often than Han" ✗. TAKING $\\frac{189}{1024}$ prices HAN beating Gia by exactly one ✗.',
  },
  {
    q: 'Ann flips $4$ fair coins and Bo flips $3$ fair coins, all seven flips independent. What is the probability that Bo gets strictly more heads than Ann?',
    choices: ['$\\frac{1}{2}$', '$\\frac{35}{128}$', '$\\frac{93}{128}$', '$\\frac{29}{128}$'],
    answer: 3,
    solution:
      'Sum over Ann’s head count. All $2^7 = 128$ outcomes are equally likely. Ann’s counts come in $1, 4, 6, 4, 1$ ways for $0$ through $4$ heads, and Bo’s in $1, 3, 3, 1$ ways for $0$ through $3$. If Ann gets $0$, Bo beats her in $3 + 3 + 1 = 7$ ways, so $1 \\cdot 7 = 7$; if Ann gets $1$, Bo needs $2$ or $3$, so $4 \\cdot 4 = 16$; if Ann gets $2$, Bo needs $3$, so $6 \\cdot 1 = 6$; Ann with $3$ or $4$ heads cannot be beaten. That is $7 + 16 + 6 = 29$ outcomes, or $\\frac{29}{128}$ ✓. Symmetry plus the tie count gets there without summing the winning cases. Ann has one coin more than Bo, and the coin-turning argument says the player with the extra coin gets strictly more heads exactly half the time, so $P(\\text{Ann} > \\text{Bo}) = \\frac12$. A tie needs equal counts: $\\binom40\\binom30 + \\binom41\\binom31 + \\binom42\\binom32 + \\binom43\\binom33 = 1 + 12 + 18 + 4 = 35$, so $P(\\text{tie}) = \\frac{35}{128}$. The three cases exhaust everything, so $P(\\text{Bo} > \\text{Ann}) = 1 - \\frac12 - \\frac{35}{128} = \\frac{64 - 35}{128} = \\frac{29}{128}$ ✓. TAKING $\\frac12$ gives the probability that ANN comes out ahead, the side the extra coin favors ✗. TAKING $\\frac{35}{128}$ answers with the ties ✗. TAKING $1 - \\frac{35}{128} = \\frac{93}{128}$ removes the ties but keeps both directions of the comparison ✗.',
  },
];

// slot 11 — drawing until a color or picture repeats. Lanes: four pairs of
//           marbles, stop on draw 3 -> 2/7; four picture pairs, stop on card
//           4 -> 12/35; derived: stop on draw 3 with a RED pair -> 2/15.
const slot11 = [
  {
    q: 'A bag holds $2$ red, $2$ blue, $2$ green, and $2$ yellow marbles, $8$ in all. Marbles are drawn at random one at a time without replacement until two marbles of the same color have been drawn, and then the drawing stops. What is the probability that the drawing stops on the third draw?',
    choices: ['$\\frac{1}{7}$', '$\\frac{2}{7}$', '$\\frac{3}{8}$', '$\\frac{1}{3}$'],
    answer: 1,
    solution:
      'Take the two stages in turn. A third marble is drawn only if the first two differ in color: after the first marble, $7$ remain and exactly $1$ matches it, so the drawing survives with probability $\\frac67$. Then it must stop, so the third marble must match one of the first two colors; $6$ marbles remain and exactly $2$ of them do, giving $\\frac26 = \\frac13$. Multiplying, $\\frac67 \\cdot \\frac13 = \\frac27$ ✓. Counting ordered triples confirms it. There are $8 \\cdot 7 \\cdot 6 = 336$ equally likely ordered first-three draws. A stopping triple either matches the first marble — choose the repeated color ($4$), order its two marbles into positions $1$ and $3$ ($2$ ways), and pick the middle marble from the $6$ of other colors, for $4 \\cdot 2 \\cdot 6 = 48$ — or matches the second marble, which by the same count gives another $48$. That is $96$ triples, and $\\frac{96}{336} = \\frac27$ ✓. TAKING $\\frac{48}{336} = \\frac17$ counts only the triples whose third marble matches the FIRST one ✗. USING $\\frac34 \\cdot \\frac24 = \\frac38$ treats each draw as an independent pick among four colors, but marbles do not go back ✗. TAKING $\\frac13$ prices only the second stage and forgets that the first two marbles must differ ✗.',
  },
  {
    q: 'Eight cards form four matching pairs — four different pictures, two cards each. Cards are turned over one at a time at random without replacement until two cards showing the same picture have appeared, and then the turning stops. What is the probability that it stops on the fourth card?',
    choices: ['$\\frac{4}{7}$', '$\\frac{9}{32}$', '$\\frac{4}{35}$', '$\\frac{12}{35}$'],
    answer: 3,
    solution:
      'Take the stages in turn. For a fourth card to be turned, the first three must show three different pictures: the second card avoids the first card’s partner with probability $\\frac67$, and the third avoids both partners already on the table with probability $\\frac46$. That is $\\frac67 \\cdot \\frac46 = \\frac47$. Then the fourth card must match one of those three pictures, and $3$ of the $5$ remaining cards do: $\\frac35$. Multiplying, $\\frac47 \\cdot \\frac35 = \\frac{12}{35}$ ✓. Counting ordered turns agrees. There are $8 \\cdot 7 \\cdot 6 \\cdot 5 = 1680$ equally likely ordered first-fours. For the first three cards, choose which three pictures appear — $\\binom43 = 4$ — then arrange those three pictures in order ($3! = 6$) and pick which copy of each shows ($2^3 = 8$), giving $4 \\cdot 48 = 192$. The fourth card must be the partner of one of the three, so $3$ choices: $192 \\cdot 3 = 576$. Then $\\frac{576}{1680} = \\frac{12}{35}$ ✓. TAKING $\\frac47$ stops at "the first three pictures are all different" and never asks for a match on card $4$ ✗. USING $\\frac34 \\cdot \\frac24 \\cdot \\frac34 = \\frac{9}{32}$ treats the turns as independent picks among four pictures, ignoring that cards leave the deck ✗. TAKING $\\frac47 \\cdot \\frac15 = \\frac{4}{35}$ lets the fourth card match one named picture rather than any of the three on the table ✗.',
  },
  {
    q: 'Six marbles sit in a bag — $2$ red, $2$ blue, and $2$ green. One at a time and at random, marbles are taken out without replacement, and the drawing halts the moment some color has come out twice. What is the probability that the halt comes on the third draw and the repeated color is red?',
    choices: ['$\\frac{2}{5}$', '$\\frac{1}{3}$', '$\\frac{2}{15}$', '$\\frac{1}{15}$'],
    answer: 2,
    solution:
      'Enumerate the ordered triples. There are $6 \\cdot 5 \\cdot 4 = 120$ equally likely ordered first-three draws. Stopping on the third draw with a red pair means both red marbles are drawn, the second of them is the third draw, and the remaining draw is a non-red marble. So the reds occupy positions $\\{1, 3\\}$ or $\\{2, 3\\}$. For positions $\\{1, 3\\}$: the two reds go in $2$ orders and the middle marble is any of the $4$ non-reds, giving $8$. For positions $\\{2, 3\\}$: again $2 \\cdot 4 = 8$. That is $16$ triples, and $\\frac{16}{120} = \\frac{2}{15}$ ✓. Symmetry splits the stopping probability three ways. The drawing reaches a third marble when the second differs in color from the first — $4$ of the remaining $5$ marbles do — and then stops when the third matches one of them — $2$ of the remaining $4$: $\\frac45 \\cdot \\frac24 = \\frac25$. Red, blue, and green play identical roles in the bag, so given that the drawing stops on the third draw the repeated color is equally likely to be any of the three, and the answer is $\\frac13 \\cdot \\frac25 = \\frac{2}{15}$ ✓. TAKING $\\frac25$ answers "stops on the third draw" with any color as the pair ✗. TAKING $\\frac13$ answers the CONDITIONAL probability that the pair is red given the drawing stops on the third draw, not the joint probability asked for ✗. COMPUTING $\\frac26 \\cdot \\frac45 \\cdot \\frac14 = \\frac{1}{15}$ forces a red marble to be the very first draw, which leaves out the triples whose first red comes second ✗.',
  },
];

// slot 12 — a series whose game-by-game probabilities change with the venue,
//           then the conditional version. Lanes: Falcons best-of-five ->
//           46/81; Pia best-of-three -> 11/16; derived (CONDITIONAL): given
//           the Hawks win, the chance they swept it in three -> 4/11.
const slot12 = [
  {
    q: 'The Falcons and the Owls play a series that ends as soon as one team has won $3$ games. Games $1$, $2$, and $5$ (if needed) are at the Falcons’ home, where the Falcons win with probability $\\frac{2}{3}$; games $3$ and $4$ (if needed) are away, where the Falcons win with probability $\\frac{1}{3}$. Games are independent. What is the probability that the Falcons win the series?',
    choices: ['$\\frac{64}{81}$', '$\\frac{1}{2}$', '$\\frac{8}{27}$', '$\\frac{46}{81}$'],
    answer: 3,
    solution:
      'Sort the winning paths by length. A sweep takes games $1$, $2$, $3$: $\\frac23 \\cdot \\frac23 \\cdot \\frac13 = \\frac{4}{27}$. A four-game win puts one loss among games $1$–$3$ and then takes game $4$ at $\\frac13$: losing game $1$ gives $\\frac13 \\cdot \\frac23 \\cdot \\frac13 \\cdot \\frac13 = \\frac{2}{81}$, losing game $2$ gives $\\frac{2}{81}$, and losing game $3$ gives $\\frac23 \\cdot \\frac23 \\cdot \\frac23 \\cdot \\frac13 = \\frac{8}{81}$, for $\\frac{12}{81} = \\frac{4}{27}$. A five-game win puts two losses among games $1$–$4$ and then takes game $5$ at $\\frac23$; the six loss patterns contribute $\\frac{1}{81}, \\frac{4}{81}, \\frac{4}{81}, \\frac{4}{81}, \\frac{4}{81}, \\frac{16}{81}$, totaling $\\frac{33}{81}$, and $\\frac{33}{81} \\cdot \\frac23 = \\frac{22}{81}$. Adding, $\\frac{12}{81} + \\frac{12}{81} + \\frac{22}{81} = \\frac{46}{81}$ ✓. Playing out all five games avoids the casework. Dead games cannot change who reached $3$ wins first, so the Falcons win exactly when they take at least $3$ of the $5$ scheduled games, with probabilities $\\frac23, \\frac23, \\frac13, \\frac13, \\frac23$. Their win count has generating function $\\left(\\frac13 + \\frac23 x\\right)^3\\left(\\frac23 + \\frac13 x\\right)^2 = \\frac{1}{243}\\left(1 + 2x\\right)^3\\left(2 + x\\right)^2$, whose coefficients from $x^0$ to $x^5$ are $4, 28, 73, 86, 44, 8$ over $243$ — and these total $243$, as they must. So at least three wins has probability $\\frac{86 + 44 + 8}{243} = \\frac{138}{243} = \\frac{46}{81}$ ✓. USING $\\frac23$ for every game gives $\\frac{64}{81}$ and ignores that two games are played away ✗. AVERAGING the two venue numbers into a coin flip gives $\\frac12$, but the strong games and weak games are not interchangeable in a series that may stop early ✗. ADDING only the three- and four-game wins gives $\\frac{4}{27} + \\frac{4}{27} = \\frac{8}{27}$ and drops every five-game win ✗.',
  },
  {
    q: 'Pia and Quill play a best-of-three match, the match ending as soon as one of them has won $2$ games. Pia wins game $1$ and game $3$ (if needed) with probability $\\frac{3}{4}$ each, and she wins game $2$ with probability $\\frac{1}{3}$; the games are independent. What is the probability that Pia wins the match?',
    choices: ['$\\frac{27}{32}$', '$\\frac{11}{16}$', '$\\frac{1}{4}$', '$\\frac{5}{8}$'],
    answer: 1,
    solution:
      'List Pia’s three winning paths. Winning games $1$ and $2$: $\\frac34 \\cdot \\frac13 = \\frac14$. Winning game $1$, losing game $2$, winning game $3$: $\\frac34 \\cdot \\frac23 \\cdot \\frac34 = \\frac38$. Losing game $1$, then winning games $2$ and $3$: $\\frac14 \\cdot \\frac13 \\cdot \\frac34 = \\frac{1}{16}$. Adding, $\\frac{4}{16} + \\frac{6}{16} + \\frac{1}{16} = \\frac{11}{16}$ ✓. Pricing Quill instead reaches the answer through the complement. Quill wins game $1$ with probability $\\frac14$, game $2$ with probability $\\frac23$, and game $3$ with probability $\\frac14$. His paths are: games $1$ and $2$, $\\frac14 \\cdot \\frac23 = \\frac16$; game $1$, then a loss, then game $3$, $\\frac14 \\cdot \\frac13 \\cdot \\frac14 = \\frac{1}{48}$; a loss, then games $2$ and $3$, $\\frac34 \\cdot \\frac23 \\cdot \\frac14 = \\frac18$. Together $\\frac{8}{48} + \\frac{1}{48} + \\frac{6}{48} = \\frac{15}{48} = \\frac{5}{16}$. Someone must win, so Pia takes the match with probability $1 - \\frac{5}{16} = \\frac{11}{16}$ ✓. GIVING Pia $\\frac34$ in every game yields $\\frac{27}{32}$ and ignores that game $2$ is her weak one ✗. TAKING $\\frac14$ counts only the two-game sweep ✗. ADDING $\\frac14 + \\frac38 = \\frac58$ drops the path where she loses the opener and takes the last two ✗.',
  },
  {
    q: 'The Hawks and the Owls play a series that ends as soon as one team has won $3$ games. Games $1$, $2$, and $5$ (if needed) are at the Hawks’ home court, where the Hawks win with probability $\\frac{3}{4}$; games $3$ and $4$ (if needed) are away, where the Hawks win with probability $\\frac{1}{2}$. Games are independent. Given that the Hawks win the series, what is the probability that they win it in exactly three games?',
    choices: ['$\\frac{4}{11}$', '$\\frac{9}{32}$', '$\\frac{9}{10}$', '$\\frac{5}{16}$'],
    answer: 0,
    solution:
      'Build the whole tree, price the two events separately, and divide. The JOINT event — the Hawks win the series in exactly three games — is the single path of winning games $1$, $2$, $3$: $\\frac34 \\cdot \\frac34 \\cdot \\frac12 = \\frac{9}{32} = \\frac{36}{128}$. The CONDITIONING event — the Hawks win the series at all — is the sum over lengths. In four games: one loss among games $1$–$3$, then game $4$ at $\\frac12$, giving $\\frac{3}{64} + \\frac{3}{64} + \\frac{9}{64} = \\frac{15}{64} = \\frac{30}{128}$. In five games: two losses among games $1$–$4$, whose six patterns total $\\frac{1 + 3 + 3 + 3 + 3 + 9}{64} = \\frac{22}{64}$, then game $5$ at $\\frac34$, giving $\\frac{22}{64} \\cdot \\frac34 = \\frac{33}{128}$. So the Hawks win with probability $\\frac{36 + 30 + 33}{128} = \\frac{99}{128}$. Dividing, $\\frac{36/128}{99/128} = \\frac{36}{99} = \\frac{4}{11}$ ✓. Recomputing the denominator by playing out all five games leaves the same quotient. Dead games change nothing, so the Hawks win the series exactly when they take at least $3$ of the $5$ scheduled games, and their win count has generating function $\\left(\\frac14 + \\frac34 x\\right)^3\\left(\\frac12 + \\frac12 x\\right)^2 = \\frac{1}{256}(1 + 3x)^3(1 + x)^2$, with coefficients $1, 11, 46, 90, 81, 27$ over $256$ — totaling $256$. At least three wins is $\\frac{90 + 81 + 27}{256} = \\frac{198}{256} = \\frac{99}{128}$, and $\\frac{9}{32} \\div \\frac{99}{128} = \\frac{4}{11}$ ✓. TAKING $\\frac{9}{32}$ answers with the joint probability and never divides by the chance the Hawks win ✗. DIVIDING $\\frac{9}{32}$ by the chance the series ends in three games, $\\frac{9}{32} + \\frac14 \\cdot \\frac14 \\cdot \\frac12 = \\frac{10}{32}$, gives $\\frac{9}{10}$, which conditions on the length of the series rather than on who won it ✗. QUOTING $\\frac{10}{32} = \\frac{5}{16}$ reports the chance the series ends in three games, the wrong denominator offered as the answer ✗.',
  },
];

challenge.push(slot5, slot6, slot7, slot8, slot9, slot10, slot11, slot12);

export default {
  book: 'intro-counting',
  number: 8,
  challenge,
};
