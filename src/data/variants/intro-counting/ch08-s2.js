// Counting chapter 8 — variations for §8.3 Complementary Probabilities.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Ten slots, three variations each: v1 keeps the technique with fresh
//    numbers and a fresh scenario, v2 keeps the technique but counts different
//    objects, v3 reverses or extends the base question.
//  - Answer indices are derived from the base indices 1 3 0 2 3 0 1 2 3 0 by
//    v1 = (b+1)%4, v2 = (b+3)%4, v3 = (b+2)%4, giving 2 0 1 3 0 1 2 3 0 1 /
//    0 2 3 1 2 3 0 1 2 3 / 3 1 2 0 1 2 3 0 1 2.
//  - Every key was brute-forced in node before the stem was written: dice
//    grids, coin and spinner sequences, digit and symbol strings, divisor
//    lists, and exact rational products for the independent-trial counts.
//    Every key matches its pin. Pin deviations: none.
//  - This is the complement chapter, so each solution runs the complement
//    route and a genuinely independent direct route — full casework, an
//    inclusion-exclusion over the neighbor pairs, a "where does the first hit
//    land" decomposition, or a pattern census — and each route ends ✓ on its
//    own arithmetic. Route two never re-imports route one’s number.
//  - The two traps this section breeds are named in almost every item: giving
//    the complement itself, and multiplying one trial’s chance by the number
//    of trials. Every wrong choice is named in CAPS, ends ✗, and its
//    attribution is an arithmetically true statement about that number.
//  - Conventions are settled in every stem: dice, coins, and spinners are
//    fair, two dice are distinguishable by color, repeated trials are stated
//    to be independent, the number of trials is always given, and "at random
//    from $1$ through $n$" means every value is equally likely.

const s83 = [
  // slot 1 — a single trial, complement of a listed set.
  //          Lanes: 12-sided die, not prime -> 7/12; the twelve months, not J -> 3/4;
  //          reversed: a two-flavor jar, recover the count -> 12.
  [
    {
      q: 'A fair twelve-sided die with faces numbered $1$ through $12$ is rolled once, every face equally likely. What is the probability that the result is not a prime number?',
      choices: ['$\\frac{5}{12}$', '$\\frac{1}{2}$', '$\\frac{7}{12}$', '$\\frac{2}{3}$'],
      answer: 2,
      solution:
        'Take the complement. The primes among $1$ through $12$ are $2$, $3$, $5$, $7$, and $11$ — five faces — so $P(\\text{prime}) = \\frac{5}{12}$ and $P(\\text{not prime}) = 1 - \\frac{5}{12} = \\frac{7}{12}$ ✓. Counting the winning faces directly agrees without ever computing $P(\\text{prime})$: a face is not prime when it is $1$ (which has only one divisor) or composite, and those faces are $1, 4, 6, 8, 9, 10, 12$ — seven of the twelve, so the probability is $\\frac{7}{12}$ ✓. GIVING THE COMPLEMENT ITSELF leaves $\\frac{5}{12}$, the chance of rolling a prime ✗. COUNTING $1$ AS A PRIME makes six "primes" and leaves only $4, 6, 8, 9, 10, 12$, giving $\\frac{6}{12} = \\frac{1}{2}$ ✗. FORGETTING THAT $11$ IS PRIME leaves four primes and eight other faces, giving $\\frac{8}{12} = \\frac{2}{3}$ ✗.',
    },
    {
      q: 'One of the twelve months of the year is chosen at random, every month equally likely. What is the probability that its name does not begin with the letter J?',
      choices: ['$\\frac{3}{4}$', '$\\frac{1}{4}$', '$\\frac{11}{12}$', '$\\frac{5}{6}$'],
      answer: 0,
      solution:
        'Work through the complement. Exactly three months begin with J — January, June, and July — so $P(\\text{begins with J}) = \\frac{3}{12} = \\frac{1}{4}$, and the answer is $1 - \\frac{1}{4} = \\frac{3}{4}$ ✓. A direct census settles it a second way: the months that do not begin with J are February, March, April, May, August, September, October, November, and December — nine names, so the probability is $\\frac{9}{12} = \\frac{3}{4}$ ✓. GIVING THE COMPLEMENT ITSELF leaves $\\frac{1}{4}$, the chance the month does begin with J ✗. REMEMBERING ONLY JANUARY sets aside one month and gives $\\frac{11}{12}$ ✗. CATCHING ONLY TWO OF THE THREE J MONTHS — missing June or July — gives $\\frac{10}{12} = \\frac{5}{6}$ ✗.',
    },
    {
      q: 'A jar holds only lemon candies and lime candies, $32$ candies in all. One candy is taken out at random, every candy equally likely, and the probability that it is not a lemon candy is $\\frac{5}{8}$. How many lemon candies are in the jar?',
      choices: ['$20$', '$5$', '$4$', '$12$'],
      answer: 3,
      solution:
        'Run the complement backward. Since "not lemon" has probability $\\frac{5}{8}$, "lemon" has probability $1 - \\frac{5}{8} = \\frac{3}{8}$, and a probability of $\\frac{3}{8}$ out of $32$ equally likely candies means $\\frac{3}{8} \\cdot 32 = 12$ lemon candies ✓. Counting the other flavor first agrees without using $\\frac{3}{8}$ at all: the jar holds only two flavors, so "not a lemon" means lime, and $\\frac{5}{8} \\cdot 32 = 20$ candies are lime; the remaining $32 - 20 = 12$ candies must be lemon ✓. ANSWERING WITH THE LIMES gives $20$, the count the given fraction produces directly ✗. READING THE NUMERATOR AS A COUNT gives $5$ lemon candies, which would make $P(\\text{not lemon}) = \\frac{27}{32}$, not $\\frac{5}{8}$ ✗. TAKING ONE EIGHTH OF THE JAR gives $\\frac{32}{8} = 4$, which would make $P(\\text{not lemon}) = \\frac{28}{32} = \\frac{7}{8}$ ✗.',
    },
  ],

  // slot 2 — complement against a divisibility or category list; v3 squares the miss.
  //          Lanes: 1-15 not a divisor of 30 -> 8/15; club grades -> 5/8;
  //          derived: the base spinner twice, both miss -> 16/81.
  [
    {
      q: 'A spinner has $15$ equal sections numbered $1$ through $15$. What is the probability that one spin lands on a number that is not a divisor of $30$?',
      choices: ['$\\frac{8}{15}$', '$\\frac{7}{15}$', '$\\frac{3}{5}$', '$\\frac{11}{15}$'],
      answer: 0,
      solution:
        'Go through the complement. The divisors of $30$ that appear on the spinner are $1, 2, 3, 5, 6, 10, 15$ — seven numbers — so $P(\\text{divisor}) = \\frac{7}{15}$ and the answer is $1 - \\frac{7}{15} = \\frac{8}{15}$ ✓. Listing the winners instead gives the same value from a separate count: the sections that do not divide $30$ are $4, 7, 8, 9, 11, 12, 13, 14$, which is eight sections out of fifteen, so the probability is $\\frac{8}{15}$ ✓. GIVING THE COMPLEMENT ITSELF leaves $\\frac{7}{15}$, the chance the spin does divide $30$ ✗. FORGETTING THAT $1$ DIVIDES $30$ counts only six divisors and gives $\\frac{9}{15} = \\frac{3}{5}$ ✗. USING THE DIVISORS OF $15$ INSTEAD — $1, 3, 5, 15$, only four of them — gives $\\frac{11}{15}$ ✗.',
    },
    {
      q: 'A club has $24$ members: $10$ seventh-graders, $9$ eighth-graders, and $5$ ninth-graders. One member is chosen at random to be treasurer, every member equally likely. What is the probability that the treasurer is not an eighth-grader?',
      choices: ['$\\frac{3}{8}$', '$\\frac{5}{24}$', '$\\frac{5}{8}$', '$\\frac{5}{12}$'],
      answer: 2,
      solution:
        'Use the complement. Nine of the $24$ members are eighth-graders, so $P(\\text{eighth-grader}) = \\frac{9}{24} = \\frac{3}{8}$ and the answer is $1 - \\frac{3}{8} = \\frac{5}{8}$ ✓. Adding the other two grades directly is an independent count: $10$ seventh-graders and $5$ ninth-graders make $15$ members who are not eighth-graders, so the probability is $\\frac{15}{24} = \\frac{5}{8}$ ✓. GIVING THE COMPLEMENT ITSELF leaves $\\frac{3}{8}$, the chance the treasurer is an eighth-grader ✗. READING "NOT AN EIGHTH-GRADER" AS "A NINTH-GRADER" counts only $5$ members and gives $\\frac{5}{24}$ ✗. READING IT AS "A SEVENTH-GRADER" counts only $10$ members and gives $\\frac{10}{24} = \\frac{5}{12}$ ✗.',
    },
    {
      q: 'The $9$-section spinner from the original problem — equal sections numbered $1$ through $9$ — is spun twice, the two spins independent. What is the probability that neither spin lands on a factor of $12$?',
      choices: ['$\\frac{8}{9}$', '$\\frac{16}{81}$', '$\\frac{25}{81}$', '$\\frac{4}{9}$'],
      answer: 1,
      solution:
        'Handle one spin, then multiply. The factors of $12$ on the spinner are $1, 2, 3, 4, 6$, so a single spin misses them all with probability $\\frac{4}{9}$; the spins are independent, so both miss with probability $\\frac{4}{9} \\cdot \\frac{4}{9} = \\frac{16}{81}$ ✓. Counting outcomes confirms it from the sample space: the two spins produce $9 \\cdot 9 = 81$ equally likely ordered pairs, and a pair avoids the factors of $12$ exactly when both entries come from $\\{5, 7, 8, 9\\}$, which happens in $4 \\cdot 4 = 16$ pairs, so the probability is $\\frac{16}{81}$ ✓. ADDING THE TWO MISS CHANCES gives $\\frac{4}{9} + \\frac{4}{9} = \\frac{8}{9}$, treating two independent misses as if they were disjoint outcomes ✗. ANSWERING FOR BOTH SPINS LANDING ON A FACTOR gives $\\left(\\frac{5}{9}\\right)^2 = \\frac{25}{81}$ ✗. STOPPING AFTER ONE SPIN leaves $\\frac{4}{9}$, which ignores the second spin entirely ✗.',
    },
  ],

  // slot 3 — "at least one" over independent trials; v3 solves for the trial size.
  //          Lanes: 7-section spinner twice -> 24/49; four 5-choice guesses -> 369/625;
  //          reversed: given 7/16, find the number of sections -> 4.
  [
    {
      q: 'A spinner has $7$ equal sections, $2$ of them orange. It is spun twice, the two spins independent. What is the probability that at least one of the two spins lands on orange?',
      choices: ['$\\frac{25}{49}$', '$\\frac{24}{49}$', '$\\frac{4}{7}$', '$\\frac{4}{49}$'],
      answer: 1,
      solution:
        'The complement of "at least one orange" is "no orange at all". Each spin misses orange with probability $\\frac{5}{7}$, and the spins are independent, so both miss with probability $\\frac{5}{7} \\cdot \\frac{5}{7} = \\frac{25}{49}$ and the answer is $1 - \\frac{25}{49} = \\frac{24}{49}$ ✓. Splitting the event into its own cases is a separate computation: exactly one orange spin can come first or second, contributing $2 \\cdot \\frac{2}{7} \\cdot \\frac{5}{7} = \\frac{20}{49}$, and both spins orange contributes $\\frac{2}{7} \\cdot \\frac{2}{7} = \\frac{4}{49}$; these cases cannot both happen, so they add to $\\frac{20}{49} + \\frac{4}{49} = \\frac{24}{49}$ ✓. GIVING THE COMPLEMENT ITSELF leaves $\\frac{25}{49}$, the chance both spins miss ✗. MULTIPLYING ONE SPIN’S $\\frac{2}{7}$ BY THE TWO SPINS gives $\\frac{4}{7}$, which counts the both-orange spins twice ✗. GIVING BOTH SPINS ORANGE leaves $\\frac{4}{49}$, only part of "at least one" ✗.',
    },
    {
      q: 'Nia guesses at random on $4$ multiple-choice questions. Each question has $5$ choices with exactly one correct answer, each choice equally likely to be her guess, and her guesses are independent. What is the probability that she gets at least one of the four questions right?',
      choices: ['$\\frac{256}{625}$', '$\\frac{4}{5}$', '$\\frac{1}{625}$', '$\\frac{369}{625}$'],
      answer: 3,
      solution:
        'Go through the complement: "at least one right" fails only when she misses all four. A single guess is wrong with probability $\\frac{4}{5}$, and the guesses are independent, so all four are wrong with probability $\\left(\\frac{4}{5}\\right)^4 = \\frac{256}{625}$, leaving $1 - \\frac{256}{625} = \\frac{369}{625}$ ✓. Adding up the cases is an independent route: with $5^4 = 625$ equally likely answer sheets, exactly one right happens in $\\binom{4}{1} \\cdot 4^3 = 256$ of them, exactly two in $\\binom{4}{2} \\cdot 4^2 = 96$, exactly three in $\\binom{4}{3} \\cdot 4 = 16$, and all four in $1$, and $256 + 96 + 16 + 1 = 369$, so the probability is $\\frac{369}{625}$ ✓. GIVING THE COMPLEMENT ITSELF leaves $\\frac{256}{625}$, the chance she misses every question ✗. MULTIPLYING ONE QUESTION’S $\\frac{1}{5}$ BY THE FOUR QUESTIONS gives $\\frac{4}{5}$, which double-counts every sheet with two or more correct answers ✗. GIVING ALL FOUR RIGHT leaves $\\frac{1}{625}$ ✗.',
    },
    {
      q: 'A spinner has $n$ equal sections, exactly one of them gold. It is spun twice, the two spins independent, and the probability that at least one spin lands on gold is $\\frac{7}{16}$. What is $n$?',
      choices: ['$16$', '$7$', '$4$', '$2$'],
      answer: 2,
      solution:
        'Turn the statement into its complement. If at least one gold has probability $\\frac{7}{16}$, then both spins miss with probability $1 - \\frac{7}{16} = \\frac{9}{16}$. A single spin misses with probability $\\frac{n-1}{n}$, so $\\left(\\frac{n-1}{n}\\right)^2 = \\frac{9}{16}$ gives $\\frac{n-1}{n} = \\frac{3}{4}$, hence $4n - 4 = 3n$ and $n = 4$ ✓. Counting the outcomes directly gives the same $n$ without any complement: the two spins produce $n^2$ equally likely ordered pairs, and gold appears at least once in $2n - 1$ of them (the $n$ pairs starting gold plus the $n$ ending gold, minus the gold-gold pair counted twice), so $\\frac{2n-1}{n^2} = \\frac{7}{16}$ becomes $7n^2 - 32n + 16 = 0$, which factors as $(n - 4)(7n - 4) = 0$ and leaves $n = 4$ as the only whole number ✓. READING THE DENOMINATOR AS THE SECTION COUNT gives $16$, a spinner on which at least one gold has probability $\\frac{31}{256}$ ✗. READING THE NUMERATOR AS THE SECTION COUNT gives $7$, where the probability would be $\\frac{13}{49}$ ✗. TAKING THE NUMBER OF SPINS AS THE NUMBER OF SECTIONS gives $2$, where the probability would be $\\frac{3}{4}$ ✗.',
    },
  ],

  // slot 4 — one draw from a mixed pool; v3 recovers a hidden count.
  //          Lanes: 28 novels, 6 mysteries -> 11/14; 36 keyboard characters -> 13/18;
  //          reversed: letter tiles plus blanks, find the blanks -> 24.
  [
    {
      q: 'A shelf holds $28$ novels, and $6$ of them are mysteries. Rae takes one novel at random, every novel equally likely. What is the probability that it is not a mystery?',
      choices: ['$\\frac{3}{14}$', '$\\frac{3}{11}$', '$\\frac{3}{4}$', '$\\frac{11}{14}$'],
      answer: 3,
      solution:
        'Take the complement. Six of the $28$ novels are mysteries, so $P(\\text{mystery}) = \\frac{6}{28} = \\frac{3}{14}$, and $P(\\text{not a mystery}) = 1 - \\frac{3}{14} = \\frac{11}{14}$ ✓. Counting the other novels straight off the shelf is a separate count: $28 - 6 = 22$ novels are not mysteries, so the probability is $\\frac{22}{28} = \\frac{11}{14}$ ✓. GIVING THE COMPLEMENT ITSELF leaves $\\frac{3}{14}$, the chance she does pick a mystery ✗. COMPARING THE MYSTERIES WITH THE OTHER NOVELS instead of with the whole shelf gives $\\frac{6}{22} = \\frac{3}{11}$, which is a ratio of two groups rather than a probability ✗. AN OFF-BY-ONE SLIP THAT SETS ASIDE $7$ NOVELS gives $\\frac{21}{28} = \\frac{3}{4}$ ✗.',
    },
    {
      q: 'A single character is chosen at random from the $10$ digits $0$ through $9$ together with the $26$ lowercase letters, all $36$ characters equally likely. What is the probability that the character is not a digit?',
      choices: ['$\\frac{5}{18}$', '$\\frac{13}{18}$', '$\\frac{5}{13}$', '$\\frac{25}{36}$'],
      answer: 1,
      solution:
        'Use the complement. There are $10$ digits among the $36$ characters, so $P(\\text{digit}) = \\frac{10}{36} = \\frac{5}{18}$, and the answer is $1 - \\frac{5}{18} = \\frac{13}{18}$ ✓. Counting letters directly reaches the same value independently: the characters that are not digits are exactly the $26$ letters, so the probability is $\\frac{26}{36} = \\frac{13}{18}$ ✓. GIVING THE COMPLEMENT ITSELF leaves $\\frac{5}{18}$, the chance a digit is chosen ✗. COMPARING THE DIGITS WITH THE LETTERS rather than with all $36$ characters gives $\\frac{10}{26} = \\frac{5}{13}$ ✗. COUNTING ELEVEN DIGITS — reading "$0$ through $10$" — leaves $25$ characters and gives $\\frac{25}{36}$ ✗.',
    },
    {
      q: 'A bag holds one tile for each of the $26$ letters of the alphabet plus some blank tiles. One tile is drawn at random, every tile equally likely, and the probability that it is not a vowel (the vowels are A, E, I, O, and U) is $\\frac{9}{10}$. How many blank tiles are in the bag?',
      choices: ['$24$', '$50$', '$45$', '$26$'],
      answer: 0,
      solution:
        'Read the complement first. If "not a vowel" has probability $\\frac{9}{10}$, then a vowel is drawn with probability $\\frac{1}{10}$. There are exactly $5$ vowel tiles, so if the bag holds $T$ tiles in all then $\\frac{5}{T} = \\frac{1}{10}$, giving $T = 50$ and $50 - 26 = 24$ blank tiles ✓. Setting up the non-vowel count instead avoids the complement entirely: with $b$ blanks the bag holds $26 + b$ tiles, of which $21 + b$ are not vowels (the $21$ consonants and every blank), so $\\frac{21 + b}{26 + b} = \\frac{9}{10}$ gives $210 + 10b = 234 + 9b$ and $b = 24$ ✓. ANSWERING WITH THE TOTAL gives $50$, the number of tiles in the bag rather than the number of blanks ✗. ANSWERING WITH THE NON-VOWEL TILES gives $45$, which is $\\frac{9}{10}$ of the $50$ tiles ✗. ANSWERING WITH THE LETTERED TILES gives $26$, the count the problem already told us ✗.',
    },
  ],

  // slot 5 — complement over a two-die grid or a coin block; v3 layers two demands.
  //          Lanes: two dice, gap at most 3 -> 5/6; four coins not all alike -> 7/8;
  //          derived: the base grid, product odd and not a multiple of 5 -> 1/9.
  [
    {
      q: 'Two standard six-sided dice, one red and one blue, are rolled. What is the probability that the two numbers do not differ by more than $3$?',
      choices: ['$\\frac{5}{6}$', '$\\frac{1}{6}$', '$\\frac{2}{3}$', '$\\frac{6}{7}$'],
      answer: 0,
      solution:
        'The complement is a much shorter list: the two numbers differ by more than $3$ only for the unordered pairs $\\{1,5\\}$, $\\{1,6\\}$, and $\\{2,6\\}$, and since the dice are different colors each pair happens in two ways, so $6$ of the $36$ equally likely rolls fail. That leaves $1 - \\frac{6}{36} = \\frac{30}{36} = \\frac{5}{6}$ ✓. Counting the good rolls by their gap is an independent census of the grid: a gap of $0$ happens in $6$ rolls, a gap of $1$ in $10$, a gap of $2$ in $8$, and a gap of $3$ in $6$, so $6 + 10 + 8 + 6 = 30$ rolls have a gap of at most $3$, giving $\\frac{30}{36} = \\frac{5}{6}$ ✓. GIVING THE COMPLEMENT ITSELF leaves $\\frac{1}{6}$, the chance the gap is $4$ or more ✗. READING "MORE THAN $3$" AS "AT LEAST $3$" throws out the six gap-$3$ rolls as well and gives $\\frac{24}{36} = \\frac{2}{3}$ ✗. TREATING THE TWO DICE AS INDISTINGUISHABLE gives $21$ unordered rolls with $3$ of them bad, or $\\frac{18}{21} = \\frac{6}{7}$ — but the red and blue dice make $(1,5)$ and $(5,1)$ two different rolls ✗.',
    },
    {
      q: 'Four fair coins are flipped, the flips independent. What is the probability that they do not all show the same face?',
      choices: ['$\\frac{1}{8}$', '$\\frac{15}{16}$', '$\\frac{7}{8}$', '$\\frac{1}{16}$'],
      answer: 2,
      solution:
        'The complement is tiny: out of the $2^4 = 16$ equally likely sequences, only HHHH and TTTT have all four faces alike, so $P(\\text{all the same}) = \\frac{2}{16} = \\frac{1}{8}$ and the answer is $1 - \\frac{1}{8} = \\frac{7}{8}$ ✓. Counting by the number of heads is a separate route: the coins fail to match exactly when the head count is $1$, $2$, or $3$, which happens in $\\binom{4}{1} + \\binom{4}{2} + \\binom{4}{3} = 4 + 6 + 4 = 14$ sequences, so the probability is $\\frac{14}{16} = \\frac{7}{8}$ ✓. GIVING THE COMPLEMENT ITSELF leaves $\\frac{1}{8}$, the chance all four faces match ✗. REMOVING ONLY THE ALL-HEADS SEQUENCE gives $\\frac{15}{16}$ and forgets that all tails also matches ✗. GIVING P(ALL FOUR HEADS) leaves $\\frac{1}{16}$, half of the complement ✗.',
    },
    {
      q: 'Two standard six-sided dice, one red and one blue, are rolled, as in the original problem. What is the probability that the product of the two numbers is odd and is not a multiple of $5$?',
      choices: ['$\\frac{1}{4}$', '$\\frac{1}{9}$', '$\\frac{2}{9}$', '$\\frac{25}{36}$'],
      answer: 1,
      solution:
        'Translate each demand into a demand on the dice. A product is odd only when both factors are odd, and a product of numbers from $1$ to $6$ is a multiple of $5$ only when some die shows a $5$; so both dice must land in $\\{1, 3\\}$. Each die does that with probability $\\frac{2}{6} = \\frac{1}{3}$, and the dice are independent, so the answer is $\\frac{1}{3} \\cdot \\frac{1}{3} = \\frac{1}{9}$ ✓. Peeling the grid apart in two stages is an independent count: $9$ of the $36$ rolls have both numbers odd, and of those, the ones containing a $5$ are $(1,5)$, $(3,5)$, $(5,5)$, $(5,1)$, and $(5,3)$ — five rolls — leaving $9 - 5 = 4$ rolls, or $\\frac{4}{36} = \\frac{1}{9}$ ✓. GIVING P(PRODUCT ODD) ALONE leaves $\\frac{9}{36} = \\frac{1}{4}$ and drops the second demand ✗. REMOVING ONLY THE ROLL $(5,5)$ from the nine odd rolls gives $\\frac{8}{36} = \\frac{2}{9}$ ✗. GIVING THE ORIGINAL PROBLEM’S ANSWER, that the product is not a multiple of $5$, leaves $\\frac{25}{36}$ and drops the odd demand ✗.',
    },
  ],

  // slot 6 — "at least one" over several independent choosers; v3 solves for the count.
  //          Lanes: five students, three electives -> 211/243; a 4-character keypad code -> 671/1296;
  //          reversed: given 37/64, how many friends -> 3.
  [
    {
      q: 'Five students each independently choose one of $3$ elective courses — pottery, chorus, or debate — at random, every course equally likely for each student. What is the probability that at least one of them chooses pottery?',
      choices: ['$\\frac{32}{243}$', '$\\frac{211}{243}$', '$\\frac{80}{243}$', '$\\frac{1}{243}$'],
      answer: 1,
      solution:
        'Go through the complement: nobody chooses pottery. Each student avoids pottery with probability $\\frac{2}{3}$, and the five choices are independent, so all five avoid it with probability $\\left(\\frac{2}{3}\\right)^5 = \\frac{32}{243}$, leaving $1 - \\frac{32}{243} = \\frac{211}{243}$ ✓. Adding the cases directly is a second, self-contained count: there are $3^5 = 243$ equally likely lists of choices, and the number with exactly $k$ pottery students is $\\binom{5}{k} 2^{5-k}$, giving $80$, $80$, $40$, $10$, and $1$ for $k = 1, 2, 3, 4, 5$; those sum to $211$, so the probability is $\\frac{211}{243}$ ✓. GIVING THE COMPLEMENT ITSELF leaves $\\frac{32}{243}$, the chance nobody picks pottery ✗. ANSWERING FOR EXACTLY ONE POTTERY STUDENT gives $\\frac{80}{243}$, only the first of the five cases ✗. ANSWERING FOR ALL FIVE gives $\\frac{1}{243}$ ✗.',
    },
    {
      q: 'A $4$-character code is formed by choosing each character independently at random from the $6$ symbols on a keypad, one of which is a star, every symbol equally likely at each position. What is the probability that the code uses at least one star?',
      choices: ['$\\frac{625}{1296}$', '$\\frac{2}{3}$', '$\\frac{1}{1296}$', '$\\frac{671}{1296}$'],
      answer: 3,
      solution:
        'Take the complement: the code uses no star at all. Each character avoids the star with probability $\\frac{5}{6}$, and the four positions are independent, so a star-free code has probability $\\left(\\frac{5}{6}\\right)^4 = \\frac{625}{1296}$, leaving $1 - \\frac{625}{1296} = \\frac{671}{1296}$ ✓. Sorting the codes by where the first star falls is a genuinely different count over the $6^4 = 1296$ equally likely codes: the first star sits in position $1$ in $1 \\cdot 6^3 = 216$ codes, in position $2$ in $5 \\cdot 6^2 = 180$, in position $3$ in $5^2 \\cdot 6 = 150$, and in position $4$ in $5^3 = 125$; these cases are disjoint and cover every code with a star, and $216 + 180 + 150 + 125 = 671$, so the probability is $\\frac{671}{1296}$ ✓. GIVING THE COMPLEMENT ITSELF leaves $\\frac{625}{1296}$, the chance of a star-free code ✗. MULTIPLYING ONE POSITION’S $\\frac{1}{6}$ BY THE FOUR POSITIONS gives $\\frac{4}{6} = \\frac{2}{3}$, which counts a code with two stars twice ✗. ANSWERING FOR A CODE OF FOUR STARS gives $\\frac{1}{1296}$ ✗.',
    },
    {
      q: 'Each of $n$ friends independently names one of the four seasons at random, every season equally likely for each friend, and the probability that at least one of them names winter is $\\frac{37}{64}$. How many friends are there?',
      choices: ['$6$', '$4$', '$3$', '$2$'],
      answer: 2,
      solution:
        'Read the complement out of the given value: if at least one winter has probability $\\frac{37}{64}$, then everyone avoids winter with probability $1 - \\frac{37}{64} = \\frac{27}{64}$. Each friend avoids winter with probability $\\frac{3}{4}$, so $\\left(\\frac{3}{4}\\right)^n = \\frac{27}{64} = \\left(\\frac{3}{4}\\right)^3$, and $n = 3$ ✓. Counting lists and testing sizes gives the same answer independently, and shows it is the only one: with $n$ friends there are $4^n$ equally likely lists, of which $4^n - 3^n$ contain winter, so the probability is $\\frac{1}{4}$ at $n = 1$, $\\frac{7}{16}$ at $n = 2$, $\\frac{37}{64}$ at $n = 3$, and $\\frac{175}{256}$ at $n = 4$ — a value that keeps rising, so it equals $\\frac{37}{64}$ only at $n = 3$ ✓. READING $64$ AS A POWER OF TWO AND TAKING THE EXPONENT gives $6$, where the probability would be $\\frac{3367}{4096}$ ✗. TAKING ONE FRIEND PER SEASON gives $4$, where the probability would be $\\frac{175}{256}$ ✗. STOPPING ONE STEP EARLY IN THE LADDER gives $2$, where the probability would be $\\frac{7}{16}$, not $\\frac{37}{64}$ ✗.',
    },
  ],

  // slot 7 — "at least two" needs a two-case complement; v3 demands two at each end.
  //          Lanes: six coins, at least two heads -> 57/64; four rolls, at least two 6s -> 19/144;
  //          derived: five coins, at least two of each face -> 5/8.
  [
    {
      q: 'Six fair coins are flipped, the flips independent. What is the probability that at least two of them show heads?',
      choices: ['$\\frac{63}{64}$', '$\\frac{7}{64}$', '$\\frac{57}{64}$', '$\\frac{15}{64}$'],
      answer: 2,
      solution:
        'The complement of "at least two heads" is "zero or one head" — both cases, not just the all-tails one. Among the $2^6 = 64$ equally likely sequences, $1$ has no heads and $\\binom{6}{1} = 6$ have exactly one, so $7$ sequences fail and the answer is $1 - \\frac{7}{64} = \\frac{57}{64}$ ✓. Adding the successful head counts is an independent tally: $\\binom{6}{2} + \\binom{6}{3} + \\binom{6}{4} + \\binom{6}{5} + \\binom{6}{6} = 15 + 20 + 15 + 6 + 1 = 57$, so the probability is $\\frac{57}{64}$ ✓. REMOVING ONLY THE ALL-TAILS SEQUENCE gives $\\frac{63}{64}$ and forgets the six one-head sequences ✗. GIVING THE COMPLEMENT ITSELF leaves $\\frac{7}{64}$ ✗. ANSWERING FOR EXACTLY TWO HEADS gives $\\frac{15}{64}$, one case out of five ✗.',
    },
    {
      q: 'A standard six-sided die is rolled $4$ times, the rolls independent. What is the probability that at least two of the rolls show a $6$?',
      choices: ['$\\frac{19}{144}$', '$\\frac{125}{144}$', '$\\frac{25}{216}$', '$\\frac{671}{1296}$'],
      answer: 0,
      solution:
        'Take the two-case complement: no $6$ at all, or exactly one $6$. Among the $6^4 = 1296$ equally likely results, no $6$ happens in $5^4 = 625$ and exactly one $6$ in $\\binom{4}{1} \\cdot 5^3 = 500$, so $1125$ results fail and the answer is $1 - \\frac{1125}{1296} = \\frac{171}{1296} = \\frac{19}{144}$ ✓. Counting the successes directly agrees without the subtraction: exactly two $6$s happens in $\\binom{4}{2} \\cdot 5^2 = 150$ results, exactly three in $\\binom{4}{3} \\cdot 5 = 20$, and four in $1$, and $150 + 20 + 1 = 171$, so the probability is $\\frac{171}{1296} = \\frac{19}{144}$ ✓. GIVING THE COMPLEMENT ITSELF leaves $\\frac{1125}{1296} = \\frac{125}{144}$ ✗. ANSWERING FOR EXACTLY TWO SIXES gives $\\frac{150}{1296} = \\frac{25}{216}$ and drops the three- and four-six results ✗. REMOVING ONLY THE NO-SIX RESULTS gives $1 - \\frac{625}{1296} = \\frac{671}{1296}$, which is the chance of at least one $6$, not at least two ✗.',
    },
    {
      q: 'Five fair coins are flipped, the flips independent, as in the original problem. What is the probability that at least two of them show heads and at least two of them show tails?',
      choices: ['$\\frac{13}{16}$', '$\\frac{3}{8}$', '$\\frac{5}{16}$', '$\\frac{5}{8}$'],
      answer: 3,
      solution:
        'Work the complement of the pair of demands. The event fails when the head count is $0$ or $1$ (too few heads) or $4$ or $5$ (too few tails), and among the $2^5 = 32$ equally likely sequences those counts hold in $1 + 5 + 5 + 1 = 12$ of them, so the answer is $1 - \\frac{12}{32} = \\frac{20}{32} = \\frac{5}{8}$ ✓. Naming the head counts that work is an independent count: five coins give at least two of each face exactly when the head count is $2$ or $3$, and $\\binom{5}{2} + \\binom{5}{3} = 10 + 10 = 20$ sequences do that, so the probability is $\\frac{20}{32} = \\frac{5}{8}$ ✓. GIVING THE ORIGINAL PROBLEM’S ANSWER, at least two heads alone, leaves $\\frac{26}{32} = \\frac{13}{16}$ and never checks the tails ✗. GIVING THE COMPLEMENT ITSELF leaves $\\frac{12}{32} = \\frac{3}{8}$ ✗. COUNTING ONLY THE TWO-HEAD SEQUENCES gives $\\frac{10}{32} = \\frac{5}{16}$ and drops the three-head half ✗.',
    },
  ],

  // slot 8 — independent trials with unequal or repeated per-trial chances.
  //          Lanes: three signals at 3/4 -> 37/64; two rain days at 2/5 and 1/3 -> 3/5;
  //          derived: the base lights, exactly one stop -> 4/9.
  [
    {
      q: 'Mika’s walk to the library passes $3$ crosswalk signals, and each one shows WALK when she arrives with probability $\\frac{3}{4}$, independently of the others. What is the probability that she has to wait at least once?',
      choices: ['$\\frac{27}{64}$', '$\\frac{1}{4}$', '$\\frac{3}{4}$', '$\\frac{37}{64}$'],
      answer: 3,
      solution:
        'She waits at least once unless every signal shows WALK. The three signals are independent, so all three show WALK with probability $\\left(\\frac{3}{4}\\right)^3 = \\frac{27}{64}$, and the answer is $1 - \\frac{27}{64} = \\frac{37}{64}$ ✓. Adding the waiting cases is a separate computation: exactly one wait can happen at any of the three signals, contributing $3 \\cdot \\frac{1}{4} \\cdot \\left(\\frac{3}{4}\\right)^2 = \\frac{27}{64}$; exactly two waits contribute $3 \\cdot \\left(\\frac{1}{4}\\right)^2 \\cdot \\frac{3}{4} = \\frac{9}{64}$; and three waits contribute $\\left(\\frac{1}{4}\\right)^3 = \\frac{1}{64}$. These cases are disjoint, and $\\frac{27 + 9 + 1}{64} = \\frac{37}{64}$ ✓. GIVING THE COMPLEMENT ITSELF leaves $\\frac{27}{64}$, the chance she never waits ✗. GIVING ONE SIGNAL’S CHANCE leaves $\\frac{1}{4}$ and ignores the other two ✗. MULTIPLYING $\\frac{1}{4}$ BY THE THREE SIGNALS gives $\\frac{3}{4}$, which counts a walk with two waits twice ✗.',
    },
    {
      q: 'A forecast gives rain on Saturday probability $\\frac{2}{5}$ and rain on Sunday probability $\\frac{1}{3}$, and the two days are independent. What is the probability that it rains on at least one of the two days?',
      choices: ['$\\frac{2}{5}$', '$\\frac{3}{5}$', '$\\frac{11}{15}$', '$\\frac{2}{15}$'],
      answer: 1,
      solution:
        'Use the complement, taking care that the two misses have different probabilities. Saturday stays dry with probability $\\frac{3}{5}$ and Sunday with probability $\\frac{2}{3}$, and the days are independent, so both stay dry with probability $\\frac{3}{5} \\cdot \\frac{2}{3} = \\frac{2}{5}$, leaving $1 - \\frac{2}{5} = \\frac{3}{5}$ ✓. Splitting into disjoint cases is an independent route: rain on both days has probability $\\frac{2}{5} \\cdot \\frac{1}{3} = \\frac{2}{15}$, Saturday only has $\\frac{2}{5} \\cdot \\frac{2}{3} = \\frac{4}{15}$, and Sunday only has $\\frac{3}{5} \\cdot \\frac{1}{3} = \\frac{3}{15}$, and $\\frac{2 + 4 + 3}{15} = \\frac{9}{15} = \\frac{3}{5}$ ✓. GIVING THE COMPLEMENT ITSELF leaves $\\frac{2}{5}$, the chance of a dry weekend ✗. ADDING THE TWO RAIN CHANCES gives $\\frac{2}{5} + \\frac{1}{3} = \\frac{11}{15}$, which counts a rainy weekend twice ✗. ANSWERING FOR RAIN ON BOTH DAYS gives $\\frac{2}{15}$ ✗.',
    },
    {
      q: 'Kim’s bike ride passes $3$ traffic lights, each green when she arrives with probability $\\frac{2}{3}$ independently of the others, as in the original problem. What is the probability that she has to stop at exactly one of the three lights?',
      choices: ['$\\frac{4}{9}$', '$\\frac{19}{27}$', '$\\frac{4}{27}$', '$\\frac{1}{3}$'],
      answer: 0,
      solution:
        'Come at it from the stop-count complement. She stops at least once with probability $1 - \\left(\\frac{2}{3}\\right)^3 = \\frac{19}{27}$, and she stops at least twice with probability $3 \\cdot \\left(\\frac{1}{3}\\right)^2 \\cdot \\frac{2}{3} + \\left(\\frac{1}{3}\\right)^3 = \\frac{6}{27} + \\frac{1}{27} = \\frac{7}{27}$. Exactly one stop is what is left over: $\\frac{19}{27} - \\frac{7}{27} = \\frac{12}{27} = \\frac{4}{9}$ ✓. Counting equally likely outcomes settles it a second way: give each light three equally likely states — two shades of green and one red — so the ride has $3^3 = 27$ equally likely descriptions. Exactly one red means choosing which light is red ($3$ ways) and a shade of green for each of the other two ($2 \\cdot 2$ ways), which is $3 \\cdot 4 = 12$ descriptions, or $\\frac{12}{27} = \\frac{4}{9}$ ✓. GIVING THE ORIGINAL PROBLEM’S ANSWER, at least one stop, leaves $\\frac{19}{27}$ ✗. TAKING ONE ORDER WITHOUT THE THREE POSITIONS gives $\\frac{1}{3} \\cdot \\frac{2}{3} \\cdot \\frac{2}{3} = \\frac{4}{27}$, the chance the first light in particular is the only red one ✗. GIVING ONE LIGHT’S RED CHANCE leaves $\\frac{1}{3}$ ✗.',
    },
  ],

  // slot 9 — "some two match" over independent picks; v3 pins down the repeated value.
  //          Lanes: four dice -> 13/18; five people picking 1-10 -> 436/625;
  //          derived: three dice whose repeat is a 6 -> 2/27.
  [
    {
      q: 'Four standard six-sided dice — red, blue, green, and white — are rolled. What is the probability that at least two of them show the same number?',
      choices: ['$\\frac{13}{18}$', '$\\frac{5}{18}$', '$\\frac{4}{9}$', '$\\frac{1}{216}$'],
      answer: 0,
      solution:
        'The complement is the short list: all four numbers different. The dice are distinguishable, so there are $6^4 = 1296$ equally likely rolls, and $6 \\cdot 5 \\cdot 4 \\cdot 3 = 360$ of them use four different numbers. That gives $1 - \\frac{360}{1296} = \\frac{936}{1296} = \\frac{13}{18}$ ✓. A census of the repeat patterns confirms the count independently: all four alike happens in $6$ rolls; exactly three alike in $6 \\cdot 5 \\cdot \\binom{4}{3} = 120$; two separate pairs in $\\binom{6}{2} \\cdot \\frac{4!}{2!\\,2!} = 15 \\cdot 6 = 90$; and one pair with two other distinct values in $6 \\cdot \\binom{5}{2} \\cdot \\frac{4!}{2!} = 6 \\cdot 10 \\cdot 12 = 720$. Those add to $6 + 120 + 90 + 720 = 936$, so the probability is $\\frac{936}{1296} = \\frac{13}{18}$ ✓. GIVING THE COMPLEMENT ITSELF leaves $\\frac{360}{1296} = \\frac{5}{18}$, the chance all four differ ✗. USING ONLY THREE DICE gives $1 - \\frac{120}{216} = \\frac{4}{9}$ ✗. ANSWERING FOR ALL FOUR DICE MATCHING gives $\\frac{6}{1296} = \\frac{1}{216}$ ✗.',
    },
    {
      q: 'Five people each independently pick a whole number from $1$ to $10$ at random, every number equally likely for each person. What is the probability that at least two of them pick the same number?',
      choices: ['$\\frac{189}{625}$', '$\\frac{62}{125}$', '$\\frac{436}{625}$', '$\\frac{1}{10000}$'],
      answer: 2,
      solution:
        'Count the complement: all five picks different. There are $10^5 = 100{,}000$ equally likely lists of picks, and $10 \\cdot 9 \\cdot 8 \\cdot 7 \\cdot 6 = 30{,}240$ of them have five different numbers, so the answer is $1 - \\frac{30240}{100000} = \\frac{69760}{100000} = \\frac{436}{625}$ ✓. Asking where the first repeat appears is an independent decomposition: the first repeat is person $2$ with probability $\\frac{1}{10}$; person $3$ with probability $\\frac{9}{10} \\cdot \\frac{2}{10} = \\frac{18}{100}$; person $4$ with probability $\\frac{9}{10} \\cdot \\frac{8}{10} \\cdot \\frac{3}{10} = \\frac{216}{1000}$; and person $5$ with probability $\\frac{9}{10} \\cdot \\frac{8}{10} \\cdot \\frac{7}{10} \\cdot \\frac{4}{10} = \\frac{2016}{10000}$. These cases are disjoint, and they total $\\frac{6976}{10000} = \\frac{436}{625}$ ✓. GIVING THE COMPLEMENT ITSELF leaves $\\frac{30240}{100000} = \\frac{189}{625}$ ✗. USING ONLY FOUR PEOPLE gives $1 - \\frac{5040}{10000} = \\frac{62}{125}$ ✗. ANSWERING FOR ALL FIVE PICKING THE SAME NUMBER gives $\\frac{10}{100000} = \\frac{1}{10000}$ ✗.',
    },
    {
      q: 'Three standard six-sided dice — red, blue, and green — are rolled, as in the original problem. What is the probability that at least two of the dice show the same number and that repeated number is a $6$?',
      choices: ['$\\frac{5}{72}$', '$\\frac{2}{27}$', '$\\frac{4}{9}$', '$\\frac{1}{216}$'],
      answer: 1,
      solution:
        'The event asks for at least two sixes, so count those rolls among the $6^3 = 216$ equally likely results. Exactly two sixes means choosing which two dice show $6$ and giving the third any of the other five faces: $\\binom{3}{2} \\cdot 5 = 15$ rolls. All three sixes is $1$ roll. Together that is $16$ rolls, or $\\frac{16}{216} = \\frac{2}{27}$ ✓. The complement of "at least two sixes" gives the same value from the other side: no six at all happens in $5^3 = 125$ rolls and exactly one six in $\\binom{3}{1} \\cdot 5^2 = 75$ rolls, so $200$ rolls fail and the probability is $1 - \\frac{200}{216} = \\frac{16}{216} = \\frac{2}{27}$ ✓. STOPPING AT EXACTLY TWO SIXES gives $\\frac{15}{216} = \\frac{5}{72}$ and drops the triple six, which certainly has a repeated $6$ ✗. GIVING THE ORIGINAL PROBLEM’S ANSWER, some two dice matching at any value, leaves $\\frac{96}{216} = \\frac{4}{9}$ ✗. ANSWERING FOR ALL THREE SIXES gives $\\frac{1}{216}$ ✗.',
    },
  ],

  // slot 10 — strings whose complement is a chain of "differ from the last one" choices.
  //           Lanes: four-digit neighbors -> 271/1000; five symbols from X, Y, Z -> 65/81;
  //           derived: the base three-digit draw, all digits different -> 18/25.
  [
    {
      q: 'A four-digit positive integer is chosen at random from $1000$ through $9999$, every integer equally likely. What is the probability that some two neighboring digits of the number are equal?',
      choices: ['$\\frac{729}{1000}$', '$\\frac{271}{1000}$', '$\\frac{19}{100}$', '$\\frac{1}{1000}$'],
      answer: 1,
      solution:
        'Count the complement, where every digit differs from the one just before it. The thousands digit has $9$ choices (it cannot be $0$), and each of the next three digits has $9$ choices — any digit except the one to its left, with $0$ allowed — so $9^4 = 6561$ of the $9000$ numbers have no neighboring match, and the answer is $1 - \\frac{6561}{9000} = \\frac{2439}{9000} = \\frac{271}{1000}$ ✓. Inclusion-exclusion over the three neighbor pairs is an independent count. Let $A$, $B$, and $C$ be the events that the first pair, the middle pair, and the last pair match; each holds in $900$ of the numbers (one digit is forced, the leading digit still avoids $0$), each of the three overlaps $A \\cap B$, $B \\cap C$, and $A \\cap C$ holds in $90$, and all three hold together in the $9$ numbers with four equal digits. So the count is $3 \\cdot 900 - 3 \\cdot 90 + 9 = 2439$, giving $\\frac{2439}{9000} = \\frac{271}{1000}$ ✓. GIVING THE COMPLEMENT ITSELF leaves $\\frac{6561}{9000} = \\frac{729}{1000}$ ✗. LETTING THE LEADING DIGIT BE ANY OF TEN in the complement count gives $10 \\cdot 9^3 = 7290$ and $\\frac{1710}{9000} = \\frac{19}{100}$ ✗. ANSWERING FOR ALL FOUR DIGITS EQUAL gives $\\frac{9}{9000} = \\frac{1}{1000}$ ✗.',
    },
    {
      q: 'A five-symbol string is formed by choosing each symbol independently at random from X, Y, and Z, so all $243$ strings are equally likely. What is the probability that some two neighboring symbols are equal?',
      choices: ['$\\frac{16}{81}$', '$\\frac{1}{81}$', '$\\frac{19}{27}$', '$\\frac{65}{81}$'],
      answer: 3,
      solution:
        'Count the complement, where every symbol differs from the one before it. The first symbol is free ($3$ ways) and each later symbol must avoid its left neighbor ($2$ ways each), so $3 \\cdot 2^4 = 48$ strings have no neighboring match, and the answer is $1 - \\frac{48}{243} = \\frac{195}{243} = \\frac{65}{81}$ ✓. Sorting the strings by the leftmost neighboring match is an independent count: if the first match is at positions $1$–$2$, the string is free before it and free after, giving $3 \\cdot 1 \\cdot 3^3 = 81$ strings; at positions $2$–$3$, $3 \\cdot 2 \\cdot 1 \\cdot 3^2 = 54$; at positions $3$–$4$, $3 \\cdot 2 \\cdot 2 \\cdot 1 \\cdot 3 = 36$; at positions $4$–$5$, $3 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 1 = 24$. These cases are disjoint and cover every string with a match, and $81 + 54 + 36 + 24 = 195$, so the probability is $\\frac{195}{243} = \\frac{65}{81}$ ✓. GIVING THE COMPLEMENT ITSELF leaves $\\frac{48}{243} = \\frac{16}{81}$ ✗. ANSWERING FOR ALL FIVE SYMBOLS ALIKE gives $\\frac{3}{243} = \\frac{1}{81}$ ✗. USING A FOUR-SYMBOL STRING gives $1 - \\frac{3 \\cdot 2^3}{81} = \\frac{57}{81} = \\frac{19}{27}$ ✗.',
    },
    {
      q: 'A three-digit positive integer is chosen at random from $100$ through $999$, as in the original problem. What is the probability that all three of its digits are different?',
      choices: ['$\\frac{81}{100}$', '$\\frac{7}{25}$', '$\\frac{18}{25}$', '$\\frac{4}{5}$'],
      answer: 2,
      solution:
        'Build the number left to right. The hundreds digit has $9$ choices (not $0$), the tens digit has $9$ choices (any digit except the hundreds digit, with $0$ allowed), and the units digit has $8$ choices (avoiding both digits already used), so $9 \\cdot 9 \\cdot 8 = 648$ of the $900$ numbers have three different digits, giving $\\frac{648}{900} = \\frac{18}{25}$ ✓. Counting the numbers with a repeat and subtracting is an independent route: all three digits equal happens in $9$ numbers; the hundreds and tens digits equal with a different units digit happens in $9 \\cdot 9 = 81$; the hundreds and units equal with a different tens digit in $9 \\cdot 9 = 81$; and the tens and units equal with a different hundreds digit in $81$ as well, since the repeated digit has $10$ choices and the hundreds digit must avoid both it and $0$. That is $9 + 81 + 81 + 81 = 252$ numbers with a repeat, leaving $900 - 252 = 648$ and $\\frac{648}{900} = \\frac{18}{25}$ ✓. GIVING THE ORIGINAL PROBLEM’S COMPLEMENT, that only neighboring digits differ, leaves $\\frac{729}{900} = \\frac{81}{100}$ — a weaker demand, since it allows numbers like $101$ ✗. GIVING THE COMPLEMENT OF THIS EVENT leaves $\\frac{252}{900} = \\frac{7}{25}$, the chance some two digits match ✗. LETTING THE HUNDREDS DIGIT BE $0$ gives $10 \\cdot 9 \\cdot 8 = 720$ and $\\frac{720}{900} = \\frac{4}{5}$ ✗.',
    },
  ],
]

export default { book: 'intro-counting', number: 8, sections: { '8.3': s83 } }
