// Counting chapter 9 — variations for §9.2 Problems.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Ten slots, three variations each: v1 keeps the technique with fresh
//    numbers and a fresh scenario, v2 keeps the technique but counts different
//    objects, v3 reverses or extends the base question.
//  - Answer indices are derived from the base indices 0 2 1 3 1 0 2 3 1 2 by
//    v1 = (b+1)%4, v2 = (b+3)%4, v3 = (b+2)%4.
//  - Every key was brute-forced in node before the stem was written: relative
//    orders of the named cards or people, colored subsets, dice grids, team
//    splits, deal positions, stopped draw sequences, and geometric partial sums
//    for the turn games. Every key matches its pin. Pin deviations: none.
//  - This is the clever-viewpoint chapter, so every solution runs two genuinely
//    independent routes that each end ✓ — one the clever viewpoint (symmetry,
//    ignoring the outcomes that cannot decide the question, reframing the game,
//    choosing the sample space), one the grind (a full enumeration, a product
//    of conditional chances, a geometric sum). Route two never re-imports route
//    one’s number. Each wrong choice is then named in CAPS, ending ✗, and every
//    attribution is an arithmetically true statement about that number.
//  - Conventions are settled in every stem: shuffles make every order equally
//    likely; simultaneous draws make every set equally likely; splits say the
//    sizes and that every split is equally likely; dice, coins, and spinners
//    are fair and independent; every stopping rule says what stops the process
//    and what a wasted spin or roll does; people are all different.

const s92 = [
  // slot 1 — relative order of a few named cards; the rest of the deck is scenery.
  //          Lanes: one card above two -> 1/3; three independent pair races -> 1/8;
  //          derived: two separate pair races -> 1/4.
  [
    {
      q: 'A standard deck of $52$ cards is shuffled so that every order is equally likely. What is the probability that the ace of clubs lies above both the ace of hearts and the ace of diamonds?',
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{1}{4}$', '$\\frac{1}{6}$'],
      answer: 1,
      solution:
        'Only the relative order of the three aces named matters; the other $49$ cards can be swept aside. Those three cards appear in one of $3! = 6$ relative orders, all equally likely because nothing about a shuffle prefers one suit to another, and the ace of clubs is on top in $2$ of them (clubs–hearts–diamonds and clubs–diamonds–hearts): $\\frac{2}{6} = \\frac{1}{3}$ ✓. A conditional count agrees without ever listing an order: whichever of the three aces sits highest is equally likely to be any one of the three, since the three are interchangeable in the shuffle, so the ace of clubs is highest with probability $\\frac{1}{3}$ ✓. MULTIPLYING TWO HALVES gives $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$; the two races are not independent, because the ace of clubs beating the ace of hearts already makes it likelier to beat the ace of diamonds ✗. COMPARING THE ACE OF CLUBS WITH ONLY ONE RED ACE gives $\\frac{1}{2}$ and forgets the other ✗. PICKING ONE SPECIFIC ORDER of the three aces gives $\\frac{1}{6}$, which is a single arrangement rather than the two that work ✗.',
    },
    {
      q: 'A teacher hands back $30$ graded quizzes one at a time in a random order, with every order of the $30$ quizzes equally likely. The class includes Ana, Ben, Cal, Dee, Eve, and Finn. What is the probability that Ana’s quiz comes back before Ben’s, Cal’s comes back before Dee’s, and Eve’s comes back before Finn’s?',
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{1}{720}$', '$\\frac{1}{8}$'],
      answer: 3,
      solution:
        'Take the three pairs one at a time. Within the pair Ana–Ben, swapping the two quizzes turns every order with Ana first into one with Ben first, so each is right half the time; the same symmetry applies to Cal–Dee and to Eve–Finn. The three questions involve six different quizzes, so knowing who won one race says nothing about the others, and the three halves multiply: $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$ ✓. A direct count of the sample space agrees: only the relative order of the six named quizzes matters, so there are $6! = 720$ equally likely orders, and a favorable one is built by choosing which $2$ of the $6$ positions hold Ana and Ben ($\\binom{6}{2} = 15$ ways, with Ana in the earlier one), which $2$ of the remaining $4$ hold Cal and Dee ($\\binom{4}{2} = 6$ ways), and the last two for Eve and Finn ($1$ way) — that is $15 \\cdot 6 \\cdot 1 = 90$ orders, and $\\frac{90}{720} = \\frac{1}{8}$ ✓. CHECKING ONLY ONE PAIR leaves $\\frac{1}{2}$ ✗. CHECKING ONLY TWO OF THE THREE PAIRS leaves $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$ ✗. DEMANDING ONE SPECIFIC ORDER OF ALL SIX quizzes gives $\\frac{1}{720}$, far stricter than the three races asked for ✗.',
    },
    {
      q: 'A standard deck of $52$ cards is shuffled so that every order is equally likely. What is the probability that the ace of spades lies above the ace of hearts and, at the same time, the king of spades lies above the king of hearts?',
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{1}{4}$', '$\\frac{1}{24}$'],
      answer: 2,
      solution:
        'Settle one race first: nothing about a shuffle prefers spades to hearts, so swapping the two aces pairs up the orders and the ace of spades beats the ace of hearts exactly half the time. The kings run a second race among two different cards, and no card is shared between the races, so learning the winner of one tells nothing about the other. Two independent halves give $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$ ✓. Enumerating the sample space agrees: only the relative order of the four named cards matters, giving $4! = 24$ equally likely orders. Choosing which $2$ of the $4$ positions the two aces occupy fixes everything — the spade ace takes the earlier of those two, the spade king the earlier of the other two — so $\\binom{4}{2} = 6$ orders work, and $\\frac{6}{24} = \\frac{1}{4}$ ✓. STOPPING AFTER THE ACES gives $\\frac{1}{2}$ and ignores the kings entirely ✗. RACING THE ACE OF SPADES AGAINST BOTH HEARTS instead of pairing spades with hearts by rank gives $\\frac{1}{3}$, the chance that the ace of spades outranks both the ace and the king of hearts ✗. DEMANDING ONE SPECIFIC ORDER of the four cards gives $\\frac{1}{24}$ ✗.',
    },
  ],

  // slot 2 — repeated trials until a deciding outcome; wasted trials do not matter.
  //          Lanes: 12-sector prime vs square -> 5/8; two dice 7 vs 11 -> 3/4;
  //          derived: the base spinner, odd stop number -> 5/7.
  [
    {
      q: 'A spinner has $12$ equal sectors numbered $1$ through $12$. It is spun again and again until it lands on a number that is either a prime ($2$, $3$, $5$, $7$, $11$) or a perfect square ($1$, $4$, $9$); a spin on any other number changes nothing and the spinner is simply spun again. What is the probability that the number it finally stops on is prime?',
      choices: ['$\\frac{5}{12}$', '$\\frac{3}{8}$', '$\\frac{2}{3}$', '$\\frac{5}{8}$'],
      answer: 3,
      solution:
        'Eight sectors can stop the spinner: the five primes and the three squares, and no number is both. A spin on $6$, $8$, $10$, or $12$ is thrown away and leaves the game exactly as it was, so those spins cannot tilt the answer. Among the eight sectors that can end the game, all are equally likely, and five of them are prime: $\\frac{5}{8}$ ✓. Summing the rounds agrees. On any one spin the game ends on a prime with probability $\\frac{5}{12}$ and drags on with probability $\\frac{4}{12} = \\frac{1}{3}$, so the chance of ending on a prime is $\\frac{5}{12} + \\frac{1}{3} \\cdot \\frac{5}{12} + \\left(\\frac{1}{3}\\right)^2 \\cdot \\frac{5}{12} + \\cdots = \\frac{\\frac{5}{12}}{1 - \\frac{1}{3}} = \\frac{5}{12} \\cdot \\frac{3}{2} = \\frac{5}{8}$ ✓. USING ONE SPIN ONLY gives $\\frac{5}{12}$, the chance that the very next spin is a prime, which ignores that wasted spins do not count ✗. ANSWERING THE OTHER HALF gives $\\frac{3}{8}$, the chance of stopping on a square ✗. COUNTING EVERY STOPPING SECTOR gives $\\frac{8}{12} = \\frac{2}{3}$, the chance that one spin ends the game at all ✗.',
    },
    {
      q: 'Two standard six-sided dice are rolled together again and again until their sum is $7$ or $11$, at which point the rolling stops; any other sum simply means the pair is rolled again. What is the probability that the sum that stops the rolling is $7$?',
      choices: ['$\\frac{1}{6}$', '$\\frac{3}{4}$', '$\\frac{2}{9}$', '$\\frac{1}{4}$'],
      answer: 1,
      solution:
        'Of the $36$ equally likely pairs of faces, six give a sum of $7$ and two give a sum of $11$; the other $28$ pairs leave the situation untouched. Restrict attention to the eight pairs that can end the rolling — they are equally likely to each other, and six are sevens: $\\frac{6}{8} = \\frac{3}{4}$ ✓. A ratio-of-odds route agrees without any restricting. Each round, "seven" and "eleven" occur in the ratio $6 : 2 = 3 : 1$, and every wasted round reproduces the same ratio, so across the whole game sevens outnumber elevens $3$ to $1$: sevens take $\\frac{3}{3+1} = \\frac{3}{4}$ of the endings ✓. USING ONE ROLL ONLY gives $\\frac{6}{36} = \\frac{1}{6}$, the chance that the very next roll is a seven ✗. COUNTING ALL THE STOPPING ROLLS gives $\\frac{8}{36} = \\frac{2}{9}$, the chance that a given roll ends the game ✗. WEIGHING THE TWO SUMS AGAINST THE STOPPING TOTAL BACKWARD gives $\\frac{2}{8} = \\frac{1}{4}$, which is the probability the game ends on an eleven ✗.',
    },
    {
      q: 'A spinner has $10$ equal sectors numbered $1$ through $10$, and it is spun again and again until it lands on a number that is either a prime or a perfect square; any other spin is simply repeated. What is the probability that the number it finally stops on is odd?',
      choices: ['$\\frac{5}{7}$', '$\\frac{1}{2}$', '$\\frac{4}{7}$', '$\\frac{7}{10}$'],
      answer: 0,
      solution:
        'The stopping numbers are $1$, $2$, $3$, $4$, $5$, $7$, and $9$ — seven sectors, since $6$, $8$, and $10$ are neither prime nor square. Wasted spins leave the game unchanged, so the answer is decided by the seven stopping sectors alone, all equally likely; the odd ones are $1$, $3$, $5$, $7$, and $9$, five of the seven: $\\frac{5}{7}$ ✓. A sum over rounds agrees. Each spin ends the game on an odd stopping number with probability $\\frac{5}{10}$ and repeats with probability $\\frac{3}{10}$, so the total is $\\frac{1}{2}\\left(1 + \\frac{3}{10} + \\left(\\frac{3}{10}\\right)^2 + \\cdots\\right) = \\frac{1}{2} \\cdot \\frac{10}{7} = \\frac{5}{7}$ ✓. USING ONE SPIN ONLY gives $\\frac{5}{10} = \\frac{1}{2}$, the chance that the very next spin is an odd stopping number ✗. ANSWERING THE BASE QUESTION gives $\\frac{4}{7}$, the chance of stopping on a prime, which drops the square $1$ and $9$ and keeps the even prime $2$ ✗. COUNTING THE STOPPING SECTORS THEMSELVES gives $\\frac{7}{10}$, the chance that one spin ends the game ✗.',
    },
  ],

  // slot 3 — simultaneous draws, so every set is equally likely.
  //          Lanes: 5R 4B 3G all different -> 3/11; 4 gold 6 silver one of each -> 8/15;
  //          derived: the base bag, all three the same color -> 5/84.
  [
    {
      q: 'A bag holds $5$ red, $4$ blue, and $3$ green marbles, all otherwise identical. Three marbles are drawn at the same time, with every set of three equally likely. What is the probability that the three marbles are all different colors?',
      choices: ['$\\frac{1}{22}$', '$\\frac{1}{11}$', '$\\frac{3}{11}$', '$\\frac{8}{11}$'],
      answer: 2,
      solution:
        'Choose the sample space to match the draw: unordered sets. There are $\\binom{12}{3} = 220$ equally likely sets of three, and a rainbow set is built by picking one marble of each color in $5 \\cdot 4 \\cdot 3 = 60$ ways, so the probability is $\\frac{60}{220} = \\frac{3}{11}$ ✓. Ordered draws agree as long as they are used on both sides of the fraction: there are $12 \\cdot 11 \\cdot 10 = 1320$ equally likely ordered triples, and a rainbow triple can come out in $3! = 6$ color orders, giving $6 \\cdot 60 = 360$ of them, so $\\frac{360}{1320} = \\frac{3}{11}$ ✓. MIXING THE TWO SAMPLE SPACES gives $\\frac{60}{1320} = \\frac{1}{22}$, an unordered count over an ordered total ✗. FORGETTING THE GREEN CHOICE gives $\\frac{5 \\cdot 4}{220} = \\frac{20}{220} = \\frac{1}{11}$, which picks the red and the blue marble but treats the green one as fixed ✗. ANSWERING THE OPPOSITE QUESTION gives $\\frac{8}{11}$, the chance that some two of the three marbles share a color ✗.',
    },
    {
      q: 'A box holds $4$ gold rings and $6$ silver rings, all otherwise identical. Two rings are drawn at the same time, with every pair equally likely. What is the probability that one ring is gold and the other is silver?',
      choices: ['$\\frac{8}{15}$', '$\\frac{4}{15}$', '$\\frac{7}{15}$', '$\\frac{12}{25}$'],
      answer: 0,
      solution:
        'Count unordered pairs, matching the way the rings come out: $\\binom{10}{2} = 45$ equally likely pairs, and a mixed pair is one gold with one silver, $4 \\cdot 6 = 24$ of them, so $\\frac{24}{45} = \\frac{8}{15}$ ✓. Ordered draws agree if the two orders are both counted: imagine pulling the rings out one after the other, which is the same experiment relabeled. Gold then silver has probability $\\frac{4}{10} \\cdot \\frac{6}{9} = \\frac{24}{90}$ and silver then gold has probability $\\frac{6}{10} \\cdot \\frac{4}{9} = \\frac{24}{90}$, and the two cases together give $\\frac{48}{90} = \\frac{8}{15}$ ✓. COUNTING ONLY ONE ORDER gives $\\frac{4}{10} \\cdot \\frac{6}{9} = \\frac{4}{15}$ and misses the draws where the silver ring comes out first ✗. ANSWERING THE OPPOSITE QUESTION gives $\\frac{7}{15}$, the chance the two rings match in color ✗. PUTTING THE FIRST RING BACK gives $2 \\cdot \\frac{4}{10} \\cdot \\frac{6}{10} = \\frac{12}{25}$, but the rings are drawn together and none is replaced ✗.',
    },
    {
      q: 'A bag holds $4$ red, $3$ blue, and $2$ green marbles. Three are drawn at the same time, with every set of three equally likely. What is the probability that all three marbles are the same color?',
      choices: ['$\\frac{1}{21}$', '$\\frac{5}{504}$', '$\\frac{79}{84}$', '$\\frac{5}{84}$'],
      answer: 3,
      solution:
        'Only two colors even have three marbles, so casework is short. Of the $\\binom{9}{3} = 84$ equally likely sets, the all-red sets number $\\binom{4}{3} = 4$ and the all-blue set is the single $\\binom{3}{3} = 1$; green cannot fill three slots. That is $\\frac{4 + 1}{84} = \\frac{5}{84}$ ✓. A conditional route agrees without any binomial coefficients: whatever the first marble is, the second must match it and then the third must match as well. Red first happens with probability $\\frac{4}{9}$ and is followed by $\\frac{3}{8} \\cdot \\frac{2}{7}$; blue first happens with probability $\\frac{3}{9}$ and is followed by $\\frac{2}{8} \\cdot \\frac{1}{7}$; green first can never finish. The total is $\\frac{4}{9} \\cdot \\frac{3}{8} \\cdot \\frac{2}{7} + \\frac{3}{9} \\cdot \\frac{2}{8} \\cdot \\frac{1}{7} = \\frac{24}{504} + \\frac{6}{504} = \\frac{30}{504} = \\frac{5}{84}$ ✓. STOPPING AT RED gives $\\frac{4}{84} = \\frac{1}{21}$ and forgets that the three blue marbles also make a set ✗. MIXING SAMPLE SPACES gives $\\frac{5}{504}$, an unordered count of $5$ sets over the ordered total $9 \\cdot 8 \\cdot 7 = 504$ ✗. ANSWERING THE OPPOSITE QUESTION gives $\\frac{79}{84}$, the chance that the three marbles are not all one color ✗.',
    },
  ],

  // slot 4 — relative order of the named people; everyone else is scenery.
  //          Lanes: Ana leftmost of four -> 1/4; two named at both ends of four -> 1/6;
  //          derived: Ana between Ben and Cal with Dee to the right of all -> 1/12.
  [
    {
      q: 'Nine dancers, including Ana, Ben, Cal, and Dee, line up in a random order, with every order of the nine equally likely. What is the probability that Ana stands to the left of Ben, Cal, and Dee — that is, that Ana is the leftmost of those four?',
      choices: ['$\\frac{1}{4}$', '$\\frac{1}{9}$', '$\\frac{1}{24}$', '$\\frac{1}{2}$'],
      answer: 0,
      solution:
        'The five unnamed dancers are scenery: only the relative order of Ana, Ben, Cal, and Dee decides the question. Those four are interchangeable as far as the random line-up is concerned, so each is equally likely to be the leftmost of the four, and Ana is that one with probability $\\frac{1}{4}$ ✓. Counting arrangements agrees. Look at which four of the nine spots the named dancers occupy; whatever those spots are, the four dancers fill them in $4! = 24$ equally likely ways, and Ana takes the leftmost of the four spots in $3! = 6$ of them, so $\\frac{6}{24} = \\frac{1}{4}$ ✓. USING ALL NINE DANCERS gives $\\frac{1}{9}$, the chance Ana leads the entire line, which is much more than the question asks ✗. DEMANDING ONE SPECIFIC ORDER of the four named dancers gives $\\frac{1}{24}$ ✗. COMPARING ANA WITH ONE DANCER ONLY gives $\\frac{1}{2}$ and ignores the other two ✗.',
    },
    {
      q: 'Twenty parade floats pass a reviewing stand in a random order, with every order equally likely. Among them are the dragon, the lion, the swan, and the phoenix. What is the probability that the lion and the swan are, in either order, the first and the last of those four floats to pass?',
      choices: ['$\\frac{1}{12}$', '$\\frac{1}{8}$', '$\\frac{1}{6}$', '$\\frac{1}{24}$'],
      answer: 2,
      solution:
        'The other sixteen floats cannot affect the answer, so work with the $4! = 24$ equally likely relative orders of the four named floats. A favorable order puts the lion and the swan in the outer two places and the dragon and the phoenix in the inner two: $2$ ways to arrange the outer pair times $2$ ways for the inner pair is $4$ orders, so $\\frac{4}{24} = \\frac{1}{6}$ ✓. A choosing route agrees. Ask only which two of the four named floats land in the outer two positions. Every pair is equally likely to be that pair, by the same symmetry, and there are $\\binom{4}{2} = 6$ pairs, exactly one of which is lion-and-swan: $\\frac{1}{6}$ ✓. FIXING THE ORDER OF THE OUTER PAIR gives $\\frac{2}{24} = \\frac{1}{12}$, counting only lion-first-swan-last ✗. TREATING THE TWO ENDS AS INDEPENDENT gives $2 \\cdot \\frac{1}{4} \\cdot \\frac{1}{4} = \\frac{1}{8}$; once the lion is first, the swan has only $3$ places left, not $4$ ✗. DEMANDING ONE SPECIFIC ORDER of all four floats gives $\\frac{1}{24}$ ✗.',
    },
    {
      q: 'Six friends, including Ana, Ben, Cal, and Dee, line up in a random order, with every order equally likely. What is the probability that Ana stands somewhere between Ben and Cal (not necessarily next to either) and Dee stands to the right of all three of them?',
      choices: ['$\\frac{1}{3}$', '$\\frac{1}{12}$', '$\\frac{1}{4}$', '$\\frac{1}{24}$'],
      answer: 1,
      solution:
        'Work with the $4! = 24$ equally likely relative orders of Ana, Ben, Cal, and Dee; the other two friends are scenery. Dee must be last of the four, which leaves the first three places for Ana, Ben, and Cal in $3! = 6$ orders, and Ana is in the middle of those three in exactly $2$ of them. So $2$ of the $24$ orders work: $\\frac{2}{24} = \\frac{1}{12}$ ✓. Splitting the two demands agrees. Dee is equally likely to be any of the four in last place, so she is last with probability $\\frac{1}{4}$; given that, the remaining three take their $3! = 6$ orders equally often and Ana is in the middle in $2$ of them, a further $\\frac{1}{3}$. The product is $\\frac{1}{4} \\cdot \\frac{1}{3} = \\frac{1}{12}$ ✓. STOPPING AFTER ANA gives $\\frac{1}{3}$, the chance that Ana is between Ben and Cal with nothing said about Dee ✗. STOPPING AFTER DEE gives $\\frac{1}{4}$, the chance she trails the other three with Ana’s position unchecked ✗. DEMANDING ONE SPECIFIC ORDER such as Ben–Ana–Cal–Dee gives $\\frac{1}{24}$ and misses the mirror order Cal–Ana–Ben–Dee ✗.',
    },
  ],

  // slot 5 — independent picks: all different, then one relative order among them.
  //          Lanes: three from 1-8 increasing -> 7/64; three spins of 1-5 decreasing -> 2/25;
  //          derived: three from 1-10 with the first the largest -> 6/25.
  [
    {
      q: 'Three friends, one after another, each independently choose a whole number from $1$ to $8$, with every number equally likely and repeats allowed. What is the probability that the three numbers are all different and are announced in increasing order, so that the first friend’s number is the smallest and the third friend’s is the largest?',
      choices: ['$\\frac{1}{6}$', '$\\frac{21}{32}$', '$\\frac{7}{64}$', '$\\frac{15}{64}$'],
      answer: 2,
      solution:
        'Split the question in two. All three numbers differ with probability $\\frac{8}{8} \\cdot \\frac{7}{8} \\cdot \\frac{6}{8} = \\frac{21}{32}$, since the second friend must miss one number and the third must miss two. Given three different numbers, the friends could have announced them in any of $3! = 6$ orders, and nothing in the choosing favors one order over another, so exactly $\\frac{1}{6}$ of those outcomes climb. The answer is $\\frac{21}{32} \\cdot \\frac{1}{6} = \\frac{21}{192} = \\frac{7}{64}$ ✓. A direct count agrees: there are $8^3 = 512$ equally likely triples, and an increasing triple is determined by its set of three values, so there are $\\binom{8}{3} = 56$ of them, giving $\\frac{56}{512} = \\frac{7}{64}$ ✓. FORGETTING THAT TIES ARE POSSIBLE gives $\\frac{1}{6}$, which would be right only if repeats were banned ✗. STOPPING AT THE FIRST STEP gives $\\frac{21}{32}$, the chance the numbers are merely all different ✗. ALLOWING EQUAL NEIGHBORS counts non-decreasing triples, $\\binom{10}{3} = 120$ of them, for $\\frac{120}{512} = \\frac{15}{64}$ ✗.',
    },
    {
      q: 'A spinner has $5$ equal sectors numbered $1$ through $5$. It is spun three times and the results are written down in the order they occur. What is the probability that the three results are all different and come in strictly decreasing order, so that each result is smaller than the one before it?',
      choices: ['$\\frac{2}{25}$', '$\\frac{1}{6}$', '$\\frac{12}{25}$', '$\\frac{7}{25}$'],
      answer: 0,
      solution:
        'A strictly decreasing triple is decided entirely by which three of the five numbers appear, since three different numbers can be written in decreasing order in exactly one way. So there are $\\binom{5}{3} = 10$ favorable sequences out of the $5^3 = 125$ equally likely ones: $\\frac{10}{125} = \\frac{2}{25}$ ✓. The two-step route agrees. The three spins are all different with probability $\\frac{5}{5} \\cdot \\frac{4}{5} \\cdot \\frac{3}{5} = \\frac{12}{25}$, and given three different numbers the six possible orders are equally likely by symmetry, so decreasing order carries $\\frac{1}{6}$ of them: $\\frac{12}{25} \\cdot \\frac{1}{6} = \\frac{2}{25}$ ✓. FORGETTING THAT REPEATS ARE POSSIBLE gives $\\frac{1}{6}$ ✗. STOPPING AT THE ALL-DIFFERENT STEP gives $\\frac{12}{25}$ ✗. ALLOWING EQUAL NEIGHBORS counts non-increasing triples, $\\binom{7}{3} = 35$ of them, for $\\frac{35}{125} = \\frac{7}{25}$ ✗.',
    },
    {
      q: 'Three people, one after another, each independently choose a whole number from $1$ to $10$, with every number equally likely and repeats allowed. What is the probability that the three numbers are all different and the first person’s number is the largest of the three?',
      choices: ['$\\frac{1}{3}$', '$\\frac{18}{25}$', '$\\frac{3}{25}$', '$\\frac{6}{25}$'],
      answer: 3,
      solution:
        'The three numbers are all different with probability $\\frac{10}{10} \\cdot \\frac{9}{10} \\cdot \\frac{8}{10} = \\frac{18}{25}$. Given three different numbers, all $3! = 6$ announcement orders are equally likely, and the first person holds the largest in $2$ of them — the two orders that start with the biggest number — so a share of $\\frac{2}{6} = \\frac{1}{3}$ survives. The answer is $\\frac{18}{25} \\cdot \\frac{1}{3} = \\frac{6}{25}$ ✓. Counting outcomes agrees: of the $1000$ equally likely triples, a favorable one is fixed by choosing the three values ($\\binom{10}{3} = 120$ sets) and then ordering the two smaller ones in either of $2$ ways behind the largest, giving $240$ triples and $\\frac{240}{1000} = \\frac{6}{25}$ ✓. FORGETTING THAT TIES ARE POSSIBLE gives $\\frac{1}{3}$ ✗. STOPPING AT THE ALL-DIFFERENT STEP gives $\\frac{18}{25}$ ✗. COUNTING ONE ORDER INSTEAD OF TWO gives $\\frac{18}{25} \\cdot \\frac{1}{6} = \\frac{3}{25}$, which is the chance of a strictly decreasing announcement rather than the looser demand that only the first number be the largest ✗.',
    },
  ],

  // slot 6 — random splits: fix one person, then count the seats the others can take.
  //          Lanes: 8 into two 4s, exactly one of Ben/Cal with Ana -> 4/7;
  //          12 into two 6s, both with Ana -> 2/11; derived: 10 into two 5s, two named
  //          together -> 4/9.
  [
    {
      q: 'Eight players, including Ana, Ben, and Cal, are split at random into two teams of four, with every possible split equally likely. What is the probability that exactly one of Ben and Cal is on Ana’s team?',
      choices: ['$\\frac{2}{7}$', '$\\frac{4}{7}$', '$\\frac{3}{7}$', '$\\frac{1}{2}$'],
      answer: 1,
      solution:
        'Seat Ana first and look at the world from her seat: $3$ places remain beside her and $4$ are on the other team, and by symmetry Ben is equally likely to take any of those $7$. If Ben joins Ana (probability $\\frac{3}{7}$), Cal must take one of the $4$ far places out of the $6$ left, for $\\frac{3}{7} \\cdot \\frac{4}{6} = \\frac{2}{7}$; if Ben goes away (probability $\\frac{4}{7}$), Cal must take one of the $3$ places beside Ana out of the $6$ left, for $\\frac{4}{7} \\cdot \\frac{3}{6} = \\frac{2}{7}$. Together, $\\frac{2}{7} + \\frac{2}{7} = \\frac{4}{7}$ ✓. Counting Ana’s teammate sets agrees. Her three teammates form one of the $\\binom{7}{3} = 35$ equally likely $3$-subsets of the other players; a favorable subset holds Ben or Cal but not both, which means picking one of the $2$ of them and $2$ of the $5$ others: $2 \\cdot \\binom{5}{2} = 20$ subsets, so $\\frac{20}{35} = \\frac{4}{7}$ ✓. TAKING ONLY THE CASE WHERE BEN JOINS ANA gives $\\frac{2}{7}$ and drops the mirror case ✗. ASKING ABOUT BEN ALONE gives $\\frac{3}{7}$, the chance Ben is Ana’s teammate with Cal unchecked ✗. TREATING BEN AND CAL AS TWO COIN FLIPS gives $2 \\cdot \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{2}$, which forgets both that Ana has already taken a place and that Cal’s options shrink once Ben is placed ✗.',
    },
    {
      q: 'Twelve campers, including Ana, Ben, and Cal, are assigned at random to two canoes holding six campers each, with every assignment equally likely. What is the probability that Ben and Cal are both in Ana’s canoe?',
      choices: ['$\\frac{5}{11}$', '$\\frac{1}{4}$', '$\\frac{25}{121}$', '$\\frac{2}{11}$'],
      answer: 3,
      solution:
        'Put Ana in a canoe and count from there. Five places are left beside her and $6$ are in the other canoe, so Ben joins her with probability $\\frac{5}{11}$. That leaves $4$ places beside Ana out of the $10$ still open, so Cal joins as well with probability $\\frac{4}{10}$, and the answer is $\\frac{5}{11} \\cdot \\frac{4}{10} = \\frac{20}{110} = \\frac{2}{11}$ ✓. Counting Ana’s crew agrees. The five campers who share Ana’s canoe form one of the $\\binom{11}{5} = 462$ equally likely $5$-subsets of the other eleven, and a favorable subset contains Ben, Cal, and $3$ of the remaining $9$ campers: $\\binom{9}{3} = 84$ subsets, so $\\frac{84}{462} = \\frac{2}{11}$ ✓. STOPPING AFTER BEN gives $\\frac{5}{11}$ and never places Cal ✗. TREATING THE TWO CAMPERS AS COIN FLIPS gives $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$, ignoring that Ana already fills one of the six seats ✗. REUSING BEN’S CHANCE FOR CAL gives $\\left(\\frac{5}{11}\\right)^2 = \\frac{25}{121}$ and forgets that Ben has taken one of the places beside Ana ✗.',
    },
    {
      q: 'Ten players, including Ben and Cal, are split at random into two teams of five, with every possible split equally likely. What is the probability that Ben and Cal end up on the same team?',
      choices: ['$\\frac{1}{2}$', '$\\frac{5}{9}$', '$\\frac{4}{9}$', '$\\frac{2}{9}$'],
      answer: 2,
      solution:
        'Place Ben, then ask where Cal lands. Whichever team Ben is on has $4$ open places, and the other team has $5$; Cal is equally likely to take any one of those $9$ places, so he joins Ben with probability $\\frac{4}{9}$ ✓. Counting teammate sets agrees. Ben’s four teammates form one of the $\\binom{9}{4} = 126$ equally likely $4$-subsets of the other nine players, and a favorable subset holds Cal plus $3$ of the remaining $8$: $\\binom{8}{3} = 56$ subsets, giving $\\frac{56}{126} = \\frac{4}{9}$ ✓. TREATING THE TWO PLAYERS AS INDEPENDENT COIN FLIPS gives $\\frac{1}{2}$ and forgets that Ben has already used one of the five places on his team ✗. ANSWERING THE OPPOSITE QUESTION gives $\\frac{5}{9}$, the chance that Ben and Cal are opponents ✗. FIXING WHICH TEAM THEY SHARE gives $\\frac{5}{10} \\cdot \\frac{4}{9} = \\frac{2}{9}$, the chance that both land on one particular team of the two ✗.',
    },
  ],

  // slot 7 — series: pretend every remaining game is played anyway.
  //          Lanes: first to 4, game-1 winner -> 21/32; first to 4 from 2-0 -> 13/16;
  //          derived: first to 3, exactly five games -> 3/8.
  [
    {
      q: 'Two evenly matched teams play a series that ends as soon as one team has won $4$ games; each game is won by either team with probability $\\frac{1}{2}$, independently of the others. What is the probability that the team that wins game $1$ goes on to win the series?',
      choices: ['$\\frac{1}{2}$', '$\\frac{11}{32}$', '$\\frac{11}{16}$', '$\\frac{21}{32}$'],
      answer: 3,
      solution:
        'Call the game-$1$ winner team $A$. It needs $3$ more wins while the other team needs $4$, so at most $6$ more games can matter. Reframe: play all $6$ of those games no matter what, which cannot change who reaches $4$ wins first — team $A$ takes the series exactly when it wins at least $3$ of the $6$. Of the $2^6 = 64$ equally likely results, the number with at least $3$ wins is $\\binom{6}{3} + \\binom{6}{4} + \\binom{6}{5} + \\binom{6}{6} = 20 + 15 + 6 + 1 = 42$, so the probability is $\\frac{42}{64} = \\frac{21}{32}$ ✓. Casework on the true length of the series agrees. Team $A$ collects its third extra win on game $k$ of the remainder for $k = 3, 4, 5, 6$, with probability $\\binom{k-1}{2}\\left(\\frac{1}{2}\\right)^k$: that is $\\frac{1}{8}$, $\\frac{3}{16}$, $\\frac{6}{32}$, and $\\frac{10}{64}$, and $\\frac{8}{64} + \\frac{12}{64} + \\frac{12}{64} + \\frac{10}{64} = \\frac{42}{64} = \\frac{21}{32}$ ✓. IGNORING THE HEAD START gives $\\frac{1}{2}$ ✗. DEMANDING AT LEAST $4$ OF THE $6$ gives $\\frac{15 + 6 + 1}{64} = \\frac{11}{32}$ and forgets that $3$ extra wins already close the series at $4$–$3$ ✗. USING A SERIES THAT ENDS AT $3$ WINS gives $\\frac{11}{16}$, the answer to a shorter series than this one ✗.',
    },
    {
      q: 'Ria and Sol play a match that ends as soon as one of them has won $4$ points; each point is won by either player with probability $\\frac{1}{2}$, independently of the others. Ria leads $2$ points to $0$. What is the probability that Ria wins the match?',
      choices: ['$\\frac{31}{32}$', '$\\frac{13}{16}$', '$\\frac{3}{4}$', '$\\frac{1}{2}$'],
      answer: 1,
      solution:
        'Ria needs $2$ more points and Sol needs $4$, so at most $5$ more points can be contested. Reframe: play all $5$ of them anyway, which cannot change who gets to $4$ first — Ria wins exactly when she takes at least $2$ of the $5$. Of the $2^5 = 32$ equally likely results, she takes $0$ or $1$ in $1 + 5 = 6$ of them, so the answer is $1 - \\frac{6}{32} = \\frac{26}{32} = \\frac{13}{16}$ ✓. Casework on when the match ends agrees. Ria wins her second remaining point on point $k$ for $k = 2, 3, 4, 5$, with probability $(k-1)\\left(\\frac{1}{2}\\right)^k$: that is $\\frac{1}{4}$, $\\frac{2}{8}$, $\\frac{3}{16}$, and $\\frac{4}{32}$, and $\\frac{8}{32} + \\frac{8}{32} + \\frac{6}{32} + \\frac{4}{32} = \\frac{26}{32} = \\frac{13}{16}$ ✓. SUBTRACTING ONLY THE SHUTOUT gives $1 - \\frac{1}{32} = \\frac{31}{32}$ and forgets that winning exactly one of the five points also loses the match ✗. ASSUMING RIA LOSES ONLY BY DROPPING THE NEXT TWO POINTS gives $1 - \\frac{1}{4} = \\frac{3}{4}$, which quietly hands her the match whenever she wins one of those two ✗. IGNORING THE LEAD gives $\\frac{1}{2}$ ✗.',
    },
    {
      q: 'Two evenly matched teams play a series that ends as soon as one team has won $3$ games; each game is won by either team with probability $\\frac{1}{2}$, independently of the others. What is the probability that the series lasts exactly five games?',
      choices: ['$\\frac{3}{8}$', '$\\frac{1}{4}$', '$\\frac{3}{16}$', '$\\frac{5}{8}$'],
      answer: 0,
      solution:
        'A fifth game is played exactly when neither team has $3$ wins after four games, which means the first four games split $2$–$2$; game $5$ then certainly ends the series. So the question is only about the first four games, and it does not matter who wins the fifth. Of the $2^4 = 16$ equally likely results of four games, $\\binom{4}{2} = 6$ are $2$–$2$ splits: $\\frac{6}{16} = \\frac{3}{8}$ ✓. Working out the other lengths agrees. A three-game series is a sweep, $2$ of the $8$ three-game results, or $\\frac{1}{4}$; a four-game series has the winner taking game $4$ and exactly $2$ of the first $3$, which is $2 \\cdot \\binom{3}{2} = 6$ of the $16$ four-game results, or $\\frac{3}{8}$. Since every series ends in three, four, or five games, the five-game share is $1 - \\frac{1}{4} - \\frac{3}{8} = \\frac{3}{8}$ ✓. ANSWERING FOR THE SHORTEST SERIES gives $\\frac{1}{4}$, the chance of a sweep ✗. DIVIDING THE $2$–$2$ SPLITS BY THE $32$ FIVE-GAME SEQUENCES gives $\\frac{6}{32} = \\frac{3}{16}$, counting four-game patterns against a five-game sample space ✗. ANSWERING THE OPPOSITE QUESTION gives $\\frac{5}{8}$, the chance the series is over in three or four games ✗.',
    },
  ],

  // slot 8 — draw until a color repeats: a fixed number of draws already decides it.
  //          Lanes: 5R 7B, first to two -> 4/11; 4G 6Y, first to three -> 11/42;
  //          derived: the base bag, stopping after exactly two draws -> 7/15.
  [
    {
      q: 'A bag holds $5$ red and $7$ blue chips, identical apart from color. They are drawn one at a time without replacement, in a random order, until one color has been drawn twice, and then the drawing stops. What is the probability that red is the color that reaches two chips first?',
      choices: ['$\\frac{4}{11}$', '$\\frac{5}{12}$', '$\\frac{5}{33}$', '$\\frac{7}{11}$'],
      answer: 0,
      solution:
        'Reframe: pretend three chips are always drawn, even after the game is over. Any three chips must include two of some color, and that color is the one that reached two first, so the first three chips settle the question by themselves. Red wins exactly when at least $2$ of those three are red. Of the $\\binom{12}{3} = 220$ equally likely sets of three chips, the sets with exactly two reds number $\\binom{5}{2} \\cdot 7 = 70$ and the all-red sets number $\\binom{5}{3} = 10$, so the probability is $\\frac{80}{220} = \\frac{4}{11}$ ✓. Following the draws one at a time agrees: red wins on the sequences RR, RBR, and BRR, with probabilities $\\frac{5}{12} \\cdot \\frac{4}{11} = \\frac{20}{132}$, $\\frac{5}{12} \\cdot \\frac{7}{11} \\cdot \\frac{4}{10} = \\frac{140}{1320}$, and $\\frac{7}{12} \\cdot \\frac{5}{11} \\cdot \\frac{4}{10} = \\frac{140}{1320}$; converting the first to $\\frac{200}{1320}$ gives $\\frac{200 + 140 + 140}{1320} = \\frac{480}{1320} = \\frac{4}{11}$ ✓. LOOKING AT ONE CHIP gives $\\frac{5}{12}$, the chance the first chip is red ✗. COUNTING ONLY AN IMMEDIATE PAIR gives $\\frac{5}{12} \\cdot \\frac{4}{11} = \\frac{5}{33}$, the chance the first two chips are both red ✗. ANSWERING FOR THE OTHER COLOR gives $\\frac{7}{11}$ ✗.',
    },
    {
      q: 'A box holds $4$ green and $6$ yellow tickets, identical apart from color. They are drawn one at a time without replacement, in a random order, until one color has been drawn three times, and then the drawing stops. What is the probability that green is the color that reaches three tickets first?',
      choices: ['$\\frac{2}{5}$', '$\\frac{1}{30}$', '$\\frac{11}{42}$', '$\\frac{31}{42}$'],
      answer: 2,
      solution:
        'Reframe: pretend five tickets are always drawn. Any five tickets contain three of some color, and that color is the one that reached three first, so the first five tickets settle everything. Green wins exactly when at least $3$ of them are green. Of the $\\binom{10}{5} = 252$ equally likely sets of five, those with exactly three greens number $\\binom{4}{3}\\binom{6}{2} = 4 \\cdot 15 = 60$ and those with all four greens number $\\binom{4}{4}\\binom{6}{1} = 6$, so the probability is $\\frac{66}{252} = \\frac{11}{42}$ ✓. Tracking when the third green appears agrees. The third green lands on draw $3$ with probability $\\frac{4}{10} \\cdot \\frac{3}{9} \\cdot \\frac{2}{8} = \\frac{1}{30}$; on draw $4$ with probability $\\frac{\\binom{4}{2}\\binom{6}{1}}{\\binom{10}{3}} \\cdot \\frac{2}{7} = \\frac{36}{120} \\cdot \\frac{2}{7} = \\frac{3}{35}$; and on draw $5$ with probability $\\frac{\\binom{4}{2}\\binom{6}{2}}{\\binom{10}{4}} \\cdot \\frac{2}{6} = \\frac{90}{210} \\cdot \\frac{1}{3} = \\frac{1}{7}$. Over a common denominator, $\\frac{7}{210} + \\frac{18}{210} + \\frac{30}{210} = \\frac{55}{210} = \\frac{11}{42}$ ✓. LOOKING AT ONE TICKET gives $\\frac{4}{10} = \\frac{2}{5}$, the chance the first ticket is green ✗. COUNTING ONLY THREE GREENS IN A ROW gives $\\frac{1}{30}$ ✗. ANSWERING FOR THE OTHER COLOR gives $\\frac{31}{42}$, the chance yellow reaches three first ✗.',
    },
    {
      q: 'A bag holds $4$ red and $6$ blue marbles, drawn one at a time without replacement in a random order until one color has been drawn twice, and then the drawing stops. What is the probability that the drawing stops after exactly two draws?',
      choices: ['$\\frac{8}{15}$', '$\\frac{7}{15}$', '$\\frac{1}{3}$', '$\\frac{13}{25}$'],
      answer: 1,
      solution:
        'The drawing stops at two draws exactly when the first two marbles match in color, so the rest of the bag never enters the question. Count unordered pairs: of the $\\binom{10}{2} = 45$ equally likely first-two pairs, $\\binom{4}{2} = 6$ are two reds and $\\binom{6}{2} = 15$ are two blues, giving $\\frac{21}{45} = \\frac{7}{15}$ ✓. A conditional route agrees, and it needs no counting at all: whatever the first marble is, the second must match it. Red first happens with probability $\\frac{4}{10}$ and is matched with probability $\\frac{3}{9}$; blue first happens with probability $\\frac{6}{10}$ and is matched with probability $\\frac{5}{9}$. The total is $\\frac{12}{90} + \\frac{30}{90} = \\frac{42}{90} = \\frac{7}{15}$ ✓. ANSWERING THE OPPOSITE QUESTION gives $\\frac{8}{15}$, the chance the first two marbles differ and a third draw is needed ✗. KEEPING ONLY THE BLUE CASE gives $\\frac{6}{10} \\cdot \\frac{5}{9} = \\frac{1}{3}$ and drops the red pairs ✗. PUTTING THE FIRST MARBLE BACK gives $\\left(\\frac{4}{10}\\right)^2 + \\left(\\frac{6}{10}\\right)^2 = \\frac{13}{25}$, but the marbles are not replaced ✗.',
    },
  ],

  // slot 9 — a deal is a random assignment of a few named items to groups.
  //          Lanes: two black aces in one hand -> 4/17; three jelly donuts in one box
  //          -> 3/55; derived: three named spades in three different hands -> 169/425.
  [
    {
      q: 'A standard deck of $52$ cards is shuffled and dealt out completely to four players, $13$ cards each. What is the probability that the ace of spades and the ace of clubs are dealt to the same player?',
      choices: ['$\\frac{1}{4}$', '$\\frac{13}{51}$', '$\\frac{4}{17}$', '$\\frac{1}{17}$'],
      answer: 2,
      solution:
        'The other $50$ cards are scenery. Wherever the ace of spades lands, its owner holds $12$ of the $51$ cards still unaccounted for, and by symmetry the ace of clubs is equally likely to be any one of those $51$ cards. So the two black aces share a hand with probability $\\frac{12}{51} = \\frac{4}{17}$ ✓. Counting seat positions agrees. Think of the $52$ dealing positions, with positions $1$–$13$ going to the first player and so on; the two black aces occupy one of the $\\binom{52}{2} = 1326$ equally likely pairs of positions. A pair lands in one hand when both positions come from the same block of $13$, which happens in $4 \\cdot \\binom{13}{2} = 4 \\cdot 78 = 312$ ways, so $\\frac{312}{1326} = \\frac{4}{17}$ ✓. COUNTING ALL $52$ SLOTS gives $\\frac{13}{52} = \\frac{1}{4}$ and forgets that the ace of spades has already used one of its owner’s thirteen slots ✗. KEEPING ALL $13$ SLOTS OPEN gives $\\frac{13}{51}$, which fixes the total but not the slot the first ace took ✗. FIXING WHICH PLAYER gives $\\frac{13}{52} \\cdot \\frac{12}{51} = \\frac{1}{17}$, the chance both black aces land in one particular player’s hand ✗.',
    },
    {
      q: 'A dozen donuts, exactly $3$ of them jelly, are packed at random into three boxes holding four donuts each, with every packing equally likely. What is the probability that all three jelly donuts end up in the same box?',
      choices: ['$\\frac{3}{55}$', '$\\frac{3}{11}$', '$\\frac{9}{121}$', '$\\frac{1}{9}$'],
      answer: 0,
      solution:
        'The nine plain donuts are scenery. Wherever the first jelly donut is packed, its box has $3$ of the $11$ remaining slots, so the second jelly donut joins it with probability $\\frac{3}{11}$; that box then has $2$ of the $10$ slots still open, so the third joins with probability $\\frac{2}{10}$. The answer is $\\frac{3}{11} \\cdot \\frac{2}{10} = \\frac{6}{110} = \\frac{3}{55}$ ✓. Counting slot sets agrees. Number the twelve slots so that slots $1$–$4$ are the first box and so on; the jelly donuts occupy one of the $\\binom{12}{3} = 220$ equally likely sets of slots, and a favorable set uses three slots from a single box: $3$ boxes times $\\binom{4}{3} = 4$ choices is $12$ sets, so $\\frac{12}{220} = \\frac{3}{55}$ ✓. STOPPING AFTER THE SECOND DONUT gives $\\frac{3}{11}$ ✗. REUSING THAT CHANCE FOR THE THIRD gives $\\left(\\frac{3}{11}\\right)^2 = \\frac{9}{121}$ and forgets that the second jelly donut filled a slot ✗. TREATING EACH JELLY DONUT AS PICKING A BOX FREELY gives $\\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}$, which ignores that boxes fill up ✗.',
    },
    {
      q: 'A standard deck of $52$ cards is shuffled and dealt out completely to four players, $13$ cards each. What is the probability that the ace, king, and queen of spades go to three different players?',
      choices: ['$\\frac{3}{8}$', '$\\frac{13}{17}$', '$\\frac{403}{425}$', '$\\frac{169}{425}$'],
      answer: 3,
      solution:
        'The other $49$ cards never matter. Once the ace of spades is dealt, $39$ of the $51$ remaining cards belong to the three other players, so the king avoids the ace’s owner with probability $\\frac{39}{51}$. Two players are then out of bounds for the queen, and they hold $26$ of the $50$ cards still unaccounted for, so the queen avoids both with probability $\\frac{26}{50}$. The answer is $\\frac{39}{51} \\cdot \\frac{26}{50} = \\frac{1014}{2550} = \\frac{169}{425}$ ✓. Counting dealing positions agrees. The three spades occupy one of the $\\binom{52}{3} = 22100$ equally likely sets of positions, and a favorable set uses one position from each of three different blocks of $13$: choose the three blocks in $\\binom{4}{3} = 4$ ways and a position inside each in $13^3 = 2197$ ways, for $4 \\cdot 2197 = 8788$ sets, and $\\frac{8788}{22100} = \\frac{169}{425}$ ✓. TREATING EACH CARD AS PICKING A PLAYER FREELY gives $\\frac{3}{4} \\cdot \\frac{2}{4} = \\frac{3}{8}$, which ignores that a player’s hand fills up as cards are placed ✗. STOPPING AFTER THE KING gives $\\frac{39}{51} = \\frac{13}{17}$ and never places the queen ✗. SUBTRACTING ONLY THE ALL-THREE-TOGETHER CASE gives $1 - \\frac{22}{425} = \\frac{403}{425}$ and forgets the deals in which exactly two of the three spades share a player ✗.',
    },
  ],

  // slot 10 — turn games: a wasted round restarts the game unchanged.
  //          Lanes: 6-sector spinner, Ana first -> 6/11; one spin per round with a
  //          replay color -> 2/3; reversed: Ana's share is 5/9, find the sector count.
  [
    {
      q: 'A spinner has $6$ equal sectors, exactly one of them gold. Ana and Ben take turns spinning it, Ana first, and the first person to land on gold wins. What is the probability that Ana wins?',
      choices: ['$\\frac{1}{2}$', '$\\frac{11}{36}$', '$\\frac{5}{11}$', '$\\frac{6}{11}$'],
      answer: 3,
      solution:
        'Treat one round as Ana’s spin followed by Ben’s. Ana wins the round with probability $\\frac{1}{6}$; Ben wins it with probability $\\frac{5}{6} \\cdot \\frac{1}{6} = \\frac{5}{36}$; otherwise nobody wins and the game restarts in exactly the position it started from, so those rounds cannot favor either player. Ana’s chance is therefore her share of the deciding rounds: $\\frac{\\frac{6}{36}}{\\frac{6}{36} + \\frac{5}{36}} = \\frac{6}{11}$ ✓. Summing the spins agrees. Ana wins on spin $1$, $3$, $5$, and so on, and the game reaches her $k$-th turn only after $2k - 2$ misses, so her chance is $\\frac{1}{6}\\left(1 + \\frac{25}{36} + \\left(\\frac{25}{36}\\right)^2 + \\cdots\\right) = \\frac{1}{6} \\cdot \\frac{36}{11} = \\frac{6}{11}$ ✓. IGNORING THE ADVANTAGE OF SPINNING FIRST gives $\\frac{1}{2}$ ✗. ANSWERING FOR ONE ROUND gives $\\frac{1}{6} + \\frac{5}{36} = \\frac{11}{36}$, the chance that the game ends within the first two spins ✗. ANSWERING FOR THE OTHER PLAYER gives $\\frac{5}{11}$, Ben’s chance of winning ✗.',
    },
    {
      q: 'A spinner has $5$ equal sectors: $2$ pink, $1$ teal, and $2$ gray. Each round the spinner is spun once. If it lands on pink, Mara wins; if it lands on teal, Nell wins; if it lands on gray, nobody wins and a new round begins exactly as before. What is the probability that Mara wins?',
      choices: ['$\\frac{2}{5}$', '$\\frac{2}{3}$', '$\\frac{1}{3}$', '$\\frac{3}{5}$'],
      answer: 1,
      solution:
        'A gray spin leaves the game in exactly the state it began, so gray sectors cannot change who wins — they only delay the ending. Ignore them and look at the three sectors that can decide the game: $2$ pink and $1$ teal, equally likely to each other, so Mara wins with probability $\\frac{2}{3}$ ✓. Summing the rounds agrees. Mara wins in round $k$ only after $k - 1$ gray spins, so her chance is $\\frac{2}{5}\\left(1 + \\frac{2}{5} + \\left(\\frac{2}{5}\\right)^2 + \\cdots\\right) = \\frac{2}{5} \\cdot \\frac{5}{3} = \\frac{2}{3}$ ✓. USING ONE SPIN ONLY gives $\\frac{2}{5}$, the chance Mara wins in the very first round ✗. ANSWERING FOR THE OTHER PLAYER gives $\\frac{1}{3}$, Nell’s chance ✗. COUNTING THE DECIDING SECTORS gives $\\frac{3}{5}$, the chance that a given round ends the game at all ✗.',
    },
    {
      q: 'A spinner has $n$ equal sectors, exactly one of them red. Ana and Ben take turns spinning it, Ana first, and the first person to land on red wins. Ana’s probability of winning is $\\frac{5}{9}$. What is $n$?',
      choices: ['$5$', '$3$', '$6$', '$9$'],
      answer: 0,
      solution:
        'Use the restart viewpoint. In one round Ana wins with probability $\\frac{1}{n}$ and Ben wins with probability $\\frac{n-1}{n} \\cdot \\frac{1}{n} = \\frac{n-1}{n^2}$, while any other round leaves the game unchanged. Ana’s share of the deciding rounds is $\\frac{\\frac{n}{n^2}}{\\frac{n}{n^2} + \\frac{n-1}{n^2}} = \\frac{n}{2n-1}$, so $\\frac{n}{2n-1} = \\frac{5}{9}$ gives $9n = 10n - 5$ and $n = 5$ ✓. Evaluating small spinners directly agrees and shows the answer is unique. Writing $p = \\frac{1}{n}$ and $q = 1 - p$, Ana wins by taking spin $1$, $3$, $5$, …, so her chance is $p + q^2 p + q^4 p + \\cdots = \\frac{p}{1 - q^2} = \\frac{1}{1+q}$. That value falls as $n$ grows — $\\frac{2}{3}$ at $n = 2$, $\\frac{3}{5}$ at $n = 3$, $\\frac{4}{7}$ at $n = 4$, $\\frac{5}{9}$ at $n = 5$, $\\frac{6}{11}$ at $n = 6$ — so it equals $\\frac{5}{9}$ only at $n = 5$ ✓. READING $\\frac{5}{9}$ AS THE CHANCE THE GAME ENDS IN THE FIRST ROUND gives $n = 3$, since a three-sector spinner ends in round one with probability $\\frac{1}{3} + \\frac{2}{3} \\cdot \\frac{1}{3} = \\frac{5}{9}$ — but there Ana wins with probability $\\frac{3}{5}$ ✗. READING THE $5$ AS THE NUMBER OF SECTORS THAT ARE NOT RED gives $n = 6$, a spinner on which Ana wins with probability $\\frac{6}{11}$ ✗. READING THE $9$ AS THE NUMBER OF SECTORS gives $n = 9$, a spinner on which Ana wins with probability $\\frac{9}{17}$ ✗.',
    },
  ],
]

export default { book: 'intro-counting', number: 9, sections: { '9.2': s92 } }
