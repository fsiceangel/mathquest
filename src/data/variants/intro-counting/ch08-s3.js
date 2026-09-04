// Counting chapter 8 — variations for §8.4 Probability and Multiplication.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Ten slots, three variations each: v1 keeps the technique with fresh
//    numbers and a fresh scenario, v2 keeps the technique but counts different
//    objects, v3 reverses or extends the base question.
//  - Answer indices are derived from the base indices 2 0 3 1 2 0 3 1 0 2 by
//    v1 = (b+1)%4, v2 = (b+3)%4, v3 = (b+2)%4, giving
//    v1: 3 1 0 2 3 1 0 2 1 3, v2: 1 3 2 0 1 3 2 0 3 1, v3: 0 2 1 3 0 2 1 3 2 0.
//  - Every key was brute-forced in node before the stem was written: the full
//    sample space of flip-and-spin pairs, spinner and die sequences, weighted
//    trial strings, and adjacency patterns was enumerated with exact rational
//    arithmetic, and every wrong choice was evaluated the same way so its
//    attribution is an arithmetically true statement. Pin deviations: none.
//  - This section is "and" multiplies, so every solution runs two genuinely
//    independent routes that each end ✓ — one a product of probabilities, one a
//    count of equally likely outcomes in the whole sample space (or a
//    complement, or a symmetry). Route two never re-imports route one’s number.
//    Each wrong choice is then named in CAPS, ending ✗.
//  - Conventions are settled in every stem: coins, dice, and spinners are fair
//    unless a weight is given; every repeated-trial stem says the trials are
//    independent and how many there are; a draw says with replacement; and
//    "exactly" is never left to stand in for "at least".

const s84 = [
  // slot 1 — one trial from each of two independent devices; "and" multiplies.
  //          Lanes: coin and a 5-section spinner -> 1/5; two bags -> 1/8;
  //          reversed: solve for the number of spinner sections -> 5.
  [
    {
      q: 'A fair coin is flipped once and a spinner with $5$ equal sections numbered $1$ through $5$ is spun once. The flip and the spin are independent. What is the probability that the coin shows tails AND the spinner lands on a number greater than $3$?',
      choices: ['$\\frac{9}{10}$', '$\\frac{2}{5}$', '$\\frac{3}{10}$', '$\\frac{1}{5}$'],
      answer: 3,
      solution:
        'The coin tells nothing about the spinner, so the two probabilities multiply. $P(\\text{tails}) = \\frac{1}{2}$, and the numbers greater than $3$ are $4$ and $5$, so $P(\\text{greater than } 3) = \\frac{2}{5}$. Multiplying, $\\frac{1}{2} \\times \\frac{2}{5} = \\frac{2}{10} = \\frac{1}{5}$ ✓. Counting outcomes settles it without any multiplication of fractions: a result is a pair (face, section), and there are $2 \\times 5 = 10$ of them, all equally likely because the coin is fair and the sections are equal. Exactly two of the ten — tails with $4$ and tails with $5$ — do what is asked, so the probability is $\\frac{2}{10} = \\frac{1}{5}$ ✓. ADDING THE TWO PROBABILITIES gives $\\frac{1}{2} + \\frac{2}{5} = \\frac{9}{10}$; addition is for "or" between events that cannot both happen, and here both happen together often ✗. IGNORING THE COIN leaves $\\frac{2}{5}$, which is the probability of the spinner half of the demand alone ✗. COUNTING $3$ AS GREATER THAN $3$ makes three winning sections and gives $\\frac{1}{2} \\times \\frac{3}{5} = \\frac{3}{10}$ ✗.',
    },
    {
      q: 'Bag One holds $3$ red and $5$ white tokens. Bag Two holds $4$ green and $2$ black tokens. One token is drawn at random from each bag, and the two draws are independent. What is the probability that the token from Bag One is red AND the token from Bag Two is black?',
      choices: ['$\\frac{17}{24}$', '$\\frac{1}{8}$', '$\\frac{1}{4}$', '$\\frac{3}{8}$'],
      answer: 1,
      solution:
        'Bag One has $8$ tokens, $3$ of them red, so $P(\\text{red}) = \\frac{3}{8}$. Bag Two has $6$ tokens, $2$ of them black, so $P(\\text{black}) = \\frac{2}{6} = \\frac{1}{3}$. What happens in one bag cannot change the other, so multiply: $\\frac{3}{8} \\times \\frac{1}{3} = \\frac{3}{24} = \\frac{1}{8}$ ✓. Treating the tokens as distinguishable gives the same answer by counting: a result is a pair of tokens, one from each bag, so there are $8 \\times 6 = 48$ equally likely pairs, and the pairs that work use one of the $3$ reds with one of the $2$ blacks — $3 \\times 2 = 6$ pairs. That is $\\frac{6}{48} = \\frac{1}{8}$ ✓. ADDING gives $\\frac{3}{8} + \\frac{1}{3} = \\frac{17}{24}$, which treats "and" like "or" ✗. DRAWING GREEN INSTEAD OF BLACK from Bag Two gives $\\frac{3}{8} \\times \\frac{4}{6} = \\frac{1}{4}$ ✗. STOPPING AFTER BAG ONE leaves $\\frac{3}{8}$ and never uses Bag Two ✗.',
    },
    {
      q: 'A standard die is rolled and a spinner with $n$ equal sections, exactly one of them labeled A, is spun. The roll and the spin are independent. The probability that the die shows a number less than $3$ AND the spinner lands on A is $\\frac{1}{15}$. What is $n$?',
      choices: ['$5$', '$12$', '$15$', '$45$'],
      answer: 0,
      solution:
        'The faces less than $3$ are $1$ and $2$, so $P(\\text{less than } 3) = \\frac{2}{6} = \\frac{1}{3}$, and $P(\\text{A}) = \\frac{1}{n}$. Independence makes the joint probability the product: $\\frac{1}{3} \\times \\frac{1}{n} = \\frac{1}{15}$, so $\\frac{1}{n} = \\frac{1}{15} \\times 3 = \\frac{1}{5}$ and $n = 5$ ✓. Counting reaches it without fractions at all: a result is a pair (face, section), and there are $6n$ equally likely pairs. The winning pairs use one of the $2$ small faces with the single A section, so there are $2$ of them, and $\\frac{2}{6n} = \\frac{1}{15}$ forces $6n = 30$, so $n = 5$ ✓. SUBTRACTING THE DIE’S $3$ FROM $15$ gives $12$, whose joint probability is $\\frac{1}{3} \\times \\frac{1}{12} = \\frac{1}{36}$ — probabilities multiply, so $15$ must be divided by $3$, not reduced by it ✗. IGNORING THE DIE reads $\\frac{1}{n} = \\frac{1}{15}$ and answers $15$; a $15$-section spinner would give $\\frac{1}{3} \\times \\frac{1}{15} = \\frac{1}{45}$, not $\\frac{1}{15}$ ✗. MULTIPLYING BY $3$ INSTEAD OF DIVIDING gives $45$, whose joint probability is $\\frac{1}{135}$ ✗.',
    },
  ],

  // slot 2 — a chain of identical independent trials, all landing the same way.
  //          Lanes: replacement draws -> 16/49; three quiz questions -> 27/125;
  //          derived: the base bag, but the two draws must differ -> 12/25.
  [
    {
      q: 'A bag holds $3$ green and $4$ purple marbles. A marble is drawn at random, its color is noted, and it is put back in the bag; then a marble is drawn at random again. What is the probability that both draws are purple?',
      choices: ['$\\frac{2}{7}$', '$\\frac{16}{49}$', '$\\frac{4}{7}$', '$\\frac{9}{49}$'],
      answer: 1,
      solution:
        'Because the marble goes back, the bag is identical for the second draw and the first result tells nothing about the second, so the draws are independent with the same $P(\\text{purple}) = \\frac{4}{7}$ each time. Multiply: $\\frac{4}{7} \\times \\frac{4}{7} = \\frac{16}{49}$ ✓. Counting the sample space agrees: number the seven marbles, and a result is an ordered pair (first marble, second marble) with repeats allowed, so there are $7 \\times 7 = 49$ equally likely pairs. Both entries must be one of the $4$ purple marbles, which is $4 \\times 4 = 16$ pairs, giving $\\frac{16}{49}$ ✓. NOT PUTTING THE MARBLE BACK gives $\\frac{4}{7} \\times \\frac{3}{6} = \\frac{2}{7}$, the answer to a different, dependent problem ✗. STOPPING AFTER ONE DRAW leaves $\\frac{4}{7}$ ✗. READING THE GREEN COUNT gives $\\frac{3}{7} \\times \\frac{3}{7} = \\frac{9}{49}$, the probability that both draws are green ✗.',
    },
    {
      q: 'Kai answers each question on a $3$-question quiz correctly with probability $\\frac{3}{5}$, and his answers to the three questions are independent. What is the probability that he answers all three correctly?',
      choices: ['$\\frac{117}{125}$', '$\\frac{9}{25}$', '$\\frac{8}{125}$', '$\\frac{27}{125}$'],
      answer: 3,
      solution:
        'Three independent successes in a row multiply: $\\frac{3}{5} \\times \\frac{3}{5} \\times \\frac{3}{5} = \\left(\\frac{3}{5}\\right)^3 = \\frac{27}{125}$ ✓. A count of equally likely outcomes gives the same number without cubing a fraction: picture each question as a spin of a $5$-section wheel with $3$ sections marked "right", so a whole quiz is a string of three sections. There are $5^3 = 125$ equally likely strings, and the ones with every question right use a marked section three times: $3^3 = 27$ strings. That is $\\frac{27}{125}$ ✓. ANSWERING "AT LEAST ONE RIGHT" gives $1 - \\left(\\frac{2}{5}\\right)^3 = \\frac{117}{125}$, a far weaker demand ✗. USING ONLY TWO OF THE THREE QUESTIONS leaves $\\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}$ ✗. MULTIPLYING THE WRONG-ANSWER PROBABILITY gives $\\left(\\frac{2}{5}\\right)^3 = \\frac{8}{125}$, the probability that he misses all three ✗.',
    },
    {
      q: 'A bag holds $2$ red and $3$ blue marbles. A marble is drawn at random, its color is noted, and it is put back; then a marble is drawn at random again. What is the probability that the two draws show different colors?',
      choices: ['$\\frac{6}{25}$', '$\\frac{13}{25}$', '$\\frac{12}{25}$', '$\\frac{3}{5}$'],
      answer: 2,
      solution:
        'Two different colors can happen in two orders, and they cannot both happen at once. Red then blue has probability $\\frac{2}{5} \\times \\frac{3}{5} = \\frac{6}{25}$, and blue then red has the same $\\frac{3}{5} \\times \\frac{2}{5} = \\frac{6}{25}$, so the total is $\\frac{6}{25} + \\frac{6}{25} = \\frac{12}{25}$ ✓. The complement gets there another way: the only alternative to different colors is matching colors, which is both red, $\\left(\\frac{2}{5}\\right)^2 = \\frac{4}{25}$, or both blue, $\\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}$, a total of $\\frac{13}{25}$; subtracting from $1$ leaves $\\frac{12}{25}$ ✓. KEEPING ONLY ONE ORDER gives $\\frac{6}{25}$ and forgets that blue can come first ✗. ANSWERING THE MATCHING QUESTION gives $\\frac{13}{25}$ ✗. FORGETTING THAT THE MARBLE GOES BACK gives $\\frac{2}{5} \\times \\frac{3}{4} + \\frac{3}{5} \\times \\frac{2}{4} = \\frac{3}{5}$, which shrinks the bag between draws ✗.',
    },
  ],

  // slot 3 — one exact sequence, no orders to count.
  //          Lanes: a named spinner sequence -> 1/81; four bus mornings -> 27/256;
  //          reversed: recover the weight of a coin from a sequence -> 2/3.
  [
    {
      q: 'A spinner with $3$ equal sections labeled A, B, and C is spun $4$ times, and the spins are independent. What is the probability that the results, in the order spun, are B, A, C, A?',
      choices: ['$\\frac{1}{81}$', '$\\frac{4}{27}$', '$\\frac{1}{27}$', '$\\frac{1}{9}$'],
      answer: 0,
      solution:
        'Each spin has probability $\\frac{1}{3}$ of giving the one letter demanded of it, and the spins are independent, so the four factors multiply: $\\left(\\frac{1}{3}\\right)^4 = \\frac{1}{81}$ ✓. Listing the sample space agrees: a result is a string of four letters from $\\{A, B, C\\}$, so there are $3^4 = 81$ strings, and they are equally likely because the sections are equal. Exactly one string is BACA, so the probability is $\\frac{1}{81}$ ✓. ANSWERING "TWO A’S, ONE B, AND ONE C IN ANY ORDER" counts $\\frac{4!}{2!} = 12$ strings and gives $\\frac{12}{81} = \\frac{4}{27}$; the question fixed the order ✗. USING ONLY THREE SPINS gives $\\left(\\frac{1}{3}\\right)^3 = \\frac{1}{27}$ ✗. MULTIPLYING ONLY THE B AND C SPINS gives $\\frac{1}{9}$, as if the two A spins were guaranteed ✗.',
    },
    {
      q: 'A city bus runs on time on any given morning with probability $\\frac{3}{4}$, independently of what it does on other mornings. What is the probability that over the next four mornings it runs on time, on time, late, and on time, in that order?',
      choices: ['$\\frac{27}{64}$', '$\\frac{81}{256}$', '$\\frac{27}{256}$', '$\\frac{3}{256}$'],
      answer: 2,
      solution:
        'The mornings are independent, so multiply the probability demanded of each one: $\\frac{3}{4} \\times \\frac{3}{4} \\times \\frac{1}{4} \\times \\frac{3}{4} = \\frac{27}{256}$ ✓. A count confirms it: picture each morning as a spin of a $4$-section wheel with $3$ sections marked "on time" and $1$ marked "late". Four mornings make a string of four sections, so there are $4^4 = 256$ equally likely strings, and the ones matching the pattern choose an on-time section on mornings $1$, $2$, and $4$ and the late section on morning $3$: $3 \\times 3 \\times 1 \\times 3 = 27$ strings, or $\\frac{27}{256}$ ✓. ANSWERING "EXACTLY ONE LATE MORNING IN ANY POSITION" multiplies by the $4$ places the late morning could sit and gives $\\frac{27}{64}$, a looser question than the one asked ✗. DEMANDING FOUR ON-TIME MORNINGS gives $\\left(\\frac{3}{4}\\right)^4 = \\frac{81}{256}$ ✗. READING $\\frac{3}{4}$ AS THE LATE PROBABILITY swaps the two roles and gives $\\frac{1}{4} \\times \\frac{1}{4} \\times \\frac{3}{4} \\times \\frac{1}{4} = \\frac{3}{256}$ ✗.',
    },
    {
      q: 'A weighted coin favors heads: it lands heads with probability $p > \\frac{1}{2}$ on every flip, and the flips are independent. The exact sequence heads, tails, tails, heads has probability $\\frac{4}{81}$. What is $p$?',
      choices: ['$\\frac{1}{3}$', '$\\frac{2}{3}$', '$\\frac{2}{9}$', '$\\frac{7}{9}$'],
      answer: 1,
      solution:
        'That sequence has two heads and two tails, so its probability is $p^2(1-p)^2 = \\left[p(1-p)\\right]^2$. Setting $\\left[p(1-p)\\right]^2 = \\frac{4}{81}$ and taking the positive root gives $p(1-p) = \\frac{2}{9}$, so $9p^2 - 9p + 2 = 0$ and $(3p-1)(3p-2) = 0$. The roots are $\\frac{1}{3}$ and $\\frac{2}{3}$, and only $\\frac{2}{3}$ is greater than $\\frac{1}{2}$, so $p = \\frac{2}{3}$ ✓. A second route never touches a quadratic. Measure the weight from the middle: write $p = \\frac{1}{2} + t$, where $t > 0$ because heads is favored. Then $1 - p = \\frac{1}{2} - t$, and the sequence probability is $\\left[\\left(\\frac{1}{2} + t\\right)\\left(\\frac{1}{2} - t\\right)\\right]^2 = \\left(\\frac{1}{4} - t^2\\right)^2$. Setting that equal to $\\frac{4}{81}$ and taking positive square roots gives $\\frac{1}{4} - t^2 = \\frac{2}{9}$, so $t^2 = \\frac{1}{4} - \\frac{2}{9} = \\frac{9 - 8}{36} = \\frac{1}{36}$ and $t = \\frac{1}{6}$. Then $p = \\frac{1}{2} + \\frac{1}{6} = \\frac{2}{3}$ ✓. TAKING THE OTHER ROOT gives $\\frac{1}{3}$, which does produce $\\frac{4}{81}$ but describes a coin favoring tails, against the stem ✗. STOPPING AT THE PRODUCT reports $p = \\frac{2}{9}$; that coin gives the sequence probability $\\left(\\frac{2}{9}\\right)^2\\left(\\frac{7}{9}\\right)^2 = \\frac{196}{6561}$ ✗. SUBTRACTING THE PRODUCT FROM $1$ gives $\\frac{7}{9}$, whose sequence probability is also $\\frac{196}{6561}$ ✗.',
    },
  ],

  // slot 4 — exactly k of n: one order’s product, times the count of orders.
  //          Lanes: two 5s in four spins -> 96/625; three sprouts of four -> 8/81;
  //          derived: the base d4, exactly one repeated value -> 9/16.
  [
    {
      q: 'A spinner with $5$ equal sections numbered $1$ through $5$ is spun $4$ times, and the spins are independent. What is the probability that exactly two of the spins land on $5$?',
      choices: ['$\\frac{16}{625}$', '$\\frac{6}{25}$', '$\\frac{96}{625}$', '$\\frac{113}{625}$'],
      answer: 2,
      solution:
        'Two jobs. One order — say $5$, $5$, then two spins that miss — has probability $\\frac{1}{5} \\times \\frac{1}{5} \\times \\frac{4}{5} \\times \\frac{4}{5} = \\frac{16}{625}$, and every other order with two hits uses the same four factors in a different arrangement, so it has the same probability. The two hits can occupy any $2$ of the $4$ positions, which is $\\binom{4}{2} = 6$ orders. So the probability is $6 \\times \\frac{16}{625} = \\frac{96}{625}$ ✓. Counting the sample space directly agrees: four spins make $5^4 = 625$ equally likely strings of section numbers. Build a favorable string by choosing which $2$ positions hold the $5$s ($\\binom{4}{2} = 6$ ways) and then filling each of the other two positions with any of the $4$ numbers that are not $5$ ($4 \\times 4 = 16$ ways), for $6 \\times 16 = 96$ strings, or $\\frac{96}{625}$ ✓. FORGETTING TO COUNT THE ORDERS leaves $\\frac{16}{625}$, one arrangement out of six ✗. DROPPING THE MISS FACTORS gives $6 \\times \\left(\\frac{1}{5}\\right)^2 = \\frac{6}{25}$, as if the other two spins could land anywhere ✗. ANSWERING "AT LEAST TWO" adds the three-hit and four-hit cases and gives $\\frac{113}{625}$ ✗.',
    },
    {
      q: 'Each of $4$ seedlings sprouts with probability $\\frac{1}{3}$, independently of the others. What is the probability that exactly three of them sprout?',
      choices: ['$\\frac{8}{81}$', '$\\frac{2}{81}$', '$\\frac{4}{27}$', '$\\frac{1}{81}$'],
      answer: 0,
      solution:
        'One order — the first three sprout and the fourth does not — has probability $\\left(\\frac{1}{3}\\right)^3 \\times \\frac{2}{3} = \\frac{2}{81}$. The seedling that fails can be any one of the four, and each of those four orders has that same probability because it multiplies the same numbers, so the total is $4 \\times \\frac{2}{81} = \\frac{8}{81}$ ✓. Counting equally likely outcomes gives the same answer: picture each seedling as a spin of a $3$-section wheel with one section marked "sprouts", so the plot is a string of four sections and there are $3^4 = 81$ equally likely strings. A favorable string chooses which $3$ of the $4$ seedlings sprout ($\\binom{4}{3} = 4$ ways), uses the marked section for each of those, and gives the fourth seedling either of its $2$ other sections: $4 \\times 1 \\times 2 = 8$ strings, or $\\frac{8}{81}$ ✓. KEEPING ONE ORDER ONLY leaves $\\frac{2}{81}$ ✗. DROPPING THE FAILURE FACTOR gives $4 \\times \\left(\\frac{1}{3}\\right)^3 = \\frac{4}{27}$, which lets the fourth seedling do anything ✗. DEMANDING ALL FOUR gives $\\left(\\frac{1}{3}\\right)^4 = \\frac{1}{81}$ ✗.',
    },
    {
      q: 'A fair four-sided die with faces numbered $1$ through $4$ is rolled $3$ times, and the rolls are independent. What is the probability that exactly two of the three rolls show the same number as each other and the remaining roll shows a different number?',
      choices: ['$\\frac{3}{8}$', '$\\frac{5}{8}$', '$\\frac{3}{16}$', '$\\frac{9}{16}$'],
      answer: 3,
      solution:
        'Three rolls make $4^3 = 64$ equally likely triples. Build a favorable one in three steps: choose the number that appears twice ($4$ ways), choose which of the three rolls is the odd one out ($3$ ways), and choose the odd roll’s number from the $3$ that remain ($3$ ways). That is $4 \\times 3 \\times 3 = 36$ triples, so the probability is $\\frac{36}{64} = \\frac{9}{16}$ ✓. Sorting every triple by its pattern reaches it a second way: a triple is all different, all the same, or exactly two the same, and nothing else. All different is $4 \\times 3 \\times 2 = 24$ triples, all the same is $4$ triples, so exactly two the same is $64 - 24 - 4 = 36$, again $\\frac{9}{16}$ ✓. ANSWERING "ALL THREE DIFFERENT" gives $\\frac{24}{64} = \\frac{3}{8}$ ✗. ANSWERING "AT LEAST TWO MATCH" gives $\\frac{40}{64} = \\frac{5}{8}$, which wrongly keeps the four all-same triples ✗. FORGETTING WHICH ROLL IS THE ODD ONE counts only $4 \\times 3 = 12$ triples and gives $\\frac{12}{64} = \\frac{3}{16}$ ✗.',
    },
  ],

  // slot 5 — exactly one hit in a short run of trials.
  //          Lanes: one 12 in three d12 rolls -> 121/576; two students, one topic
  //          -> 5/18; derived: the base 8-section spinner, "greater than 6" -> 3/8.
  [
    {
      q: 'A fair twelve-sided die with faces numbered $1$ through $12$ is rolled $3$ times, and the rolls are independent. What is the probability that exactly one of the rolls shows a $12$?',
      choices: ['$\\frac{121}{1728}$', '$\\frac{397}{1728}$', '$\\frac{1}{4}$', '$\\frac{121}{576}$'],
      answer: 3,
      solution:
        'One order — a $12$, then two rolls that miss — has probability $\\frac{1}{12} \\times \\frac{11}{12} \\times \\frac{11}{12} = \\frac{121}{1728}$. The single $12$ can be the first, second, or third roll, and each of those three orders multiplies the same factors, so the total is $3 \\times \\frac{121}{1728} = \\frac{363}{1728} = \\frac{121}{576}$ ✓. A count of the sample space agrees: there are $12^3 = 1728$ equally likely triples of faces. Choose which roll is the $12$ ($3$ ways) and fill the other two rolls with any of the $11$ other faces ($11 \\times 11 = 121$ ways), giving $3 \\times 121 = 363$ triples, or $\\frac{363}{1728} = \\frac{121}{576}$ ✓. FORGETTING THE THREE POSITIONS leaves $\\frac{121}{1728}$ ✗. ANSWERING "AT LEAST ONE $12$" gives $1 - \\left(\\frac{11}{12}\\right)^3 = \\frac{397}{1728}$, which also allows two or three $12$s ✗. DROPPING THE MISS FACTORS gives $3 \\times \\frac{1}{12} = \\frac{1}{4}$, as if the other two rolls did not have to avoid $12$ ✗.',
    },
    {
      q: 'Two students each independently pick one of $6$ project topics at random, every topic equally likely for each of them. What is the probability that exactly one of the two picks the volcano topic?',
      choices: ['$\\frac{5}{36}$', '$\\frac{5}{18}$', '$\\frac{11}{36}$', '$\\frac{1}{36}$'],
      answer: 1,
      solution:
        'The first student picks the volcano and the second does not with probability $\\frac{1}{6} \\times \\frac{5}{6} = \\frac{5}{36}$, and the reverse order has the same probability $\\frac{5}{6} \\times \\frac{1}{6} = \\frac{5}{36}$. The two orders cannot both happen, so add: $\\frac{5}{36} + \\frac{5}{36} = \\frac{10}{36} = \\frac{5}{18}$ ✓. Counting the sample space is just as quick: a result is an ordered pair of topics, so there are $6 \\times 6 = 36$ equally likely pairs. Exactly one volcano means the first is the volcano and the second is one of the other $5$ ($5$ pairs), or the other way round ($5$ pairs), for $10$ pairs and $\\frac{10}{36} = \\frac{5}{18}$ ✓. KEEPING ONE ORDER ONLY leaves $\\frac{5}{36}$ ✗. ANSWERING "AT LEAST ONE VOLCANO" gives $1 - \\left(\\frac{5}{6}\\right)^2 = \\frac{11}{36}$, which wrongly includes the pair where both pick it ✗. DEMANDING BOTH gives $\\frac{1}{36}$ ✗.',
    },
    {
      q: 'A spinner has $8$ equal sections numbered $1$ through $8$. It is spun twice, and the spins are independent. What is the probability that exactly one of the two spins lands on a number greater than $6$?',
      choices: ['$\\frac{3}{8}$', '$\\frac{3}{16}$', '$\\frac{7}{16}$', '$\\frac{7}{32}$'],
      answer: 0,
      solution:
        'The numbers greater than $6$ are $7$ and $8$, so a single spin is a hit with probability $\\frac{2}{8} = \\frac{1}{4}$ and a miss with probability $\\frac{3}{4}$. Hit then miss has probability $\\frac{1}{4} \\times \\frac{3}{4} = \\frac{3}{16}$, and miss then hit has the same, so the total is $2 \\times \\frac{3}{16} = \\frac{6}{16} = \\frac{3}{8}$ ✓. Counting the grid of outcomes agrees: two spins make $8 \\times 8 = 64$ equally likely ordered pairs of section numbers. A pair with the hit first uses $2$ high numbers and $6$ low ones, or $2 \\times 6 = 12$ pairs, and a pair with the hit second gives another $6 \\times 2 = 12$, for $24$ pairs and $\\frac{24}{64} = \\frac{3}{8}$ ✓. KEEPING ONE ORDER ONLY leaves $\\frac{3}{16}$ ✗. ANSWERING "AT LEAST ONE HIGH NUMBER" gives $1 - \\left(\\frac{3}{4}\\right)^2 = \\frac{7}{16}$, which also allows two ✗. COUNTING ONLY THE $8$ as a high number gives $2 \\times \\frac{1}{8} \\times \\frac{7}{8} = \\frac{7}{32}$ and forgets the $7$ ✗.',
    },
  ],

  // slot 6 — exactly k of n on an unequal spinner, plus an all-same-color follow-up.
  //          Lanes: two reds of three spins -> 108/343; three mints of four draws
  //          -> 135/1024; derived: the base spinner, all three the same -> 7/25.
  [
    {
      q: 'A spinner has $7$ equal sections: $3$ are red and $4$ are white. It is spun $3$ times, and the spins are independent. What is the probability that exactly two of the spins land on red?',
      choices: ['$\\frac{36}{343}$', '$\\frac{108}{343}$', '$\\frac{144}{343}$', '$\\frac{27}{49}$'],
      answer: 1,
      solution:
        'One order, red-red-white, has probability $\\frac{3}{7} \\times \\frac{3}{7} \\times \\frac{4}{7} = \\frac{36}{343}$. The white spin can be the first, second, or third, and each of those $\\binom{3}{2} = 3$ orders multiplies the same three factors, so the total is $3 \\times \\frac{36}{343} = \\frac{108}{343}$ ✓. Counting the sections gives the same number: three spins make $7^3 = 343$ equally likely strings of sections. Choose which spin is white ($3$ ways), give the two red spins any of the $3$ red sections ($3 \\times 3 = 9$ ways), and give the white spin any of the $4$ white sections ($4$ ways): $3 \\times 9 \\times 4 = 108$ strings, or $\\frac{108}{343}$ ✓. KEEPING ONE ORDER ONLY leaves $\\frac{36}{343}$ ✗. SWAPPING THE COLORS answers "exactly two white" and gives $3 \\times \\left(\\frac{4}{7}\\right)^2 \\times \\frac{3}{7} = \\frac{144}{343}$ ✗. DROPPING THE WHITE FACTOR gives $3 \\times \\left(\\frac{3}{7}\\right)^2 = \\frac{27}{49}$, which lets the third spin land anywhere ✗.',
    },
    {
      q: 'A bag holds $3$ mint and $5$ cherry candies. A candy is drawn at random, its flavor is noted, and it is put back; this is done $4$ times, so the draws are independent. What is the probability that exactly three of the four draws are mint?',
      choices: ['$\\frac{135}{4096}$', '$\\frac{375}{1024}$', '$\\frac{81}{4096}$', '$\\frac{135}{1024}$'],
      answer: 3,
      solution:
        'Every draw sees the same bag, so $P(\\text{mint}) = \\frac{3}{8}$ each time. One order — mint, mint, mint, cherry — has probability $\\left(\\frac{3}{8}\\right)^3 \\times \\frac{5}{8} = \\frac{135}{4096}$, and the cherry draw can be any of the four, so there are $\\binom{4}{3} = 4$ orders: $4 \\times \\frac{135}{4096} = \\frac{540}{4096} = \\frac{135}{1024}$ ✓. Counting candies confirms it: number the eight candies, and four draws with replacement make $8^4 = 4096$ equally likely ordered strings. Choose which $3$ positions are mint ($4$ ways), fill them with any of the $3$ mints ($3^3 = 27$ ways), and fill the last with any of the $5$ cherries ($5$ ways): $4 \\times 27 \\times 5 = 540$ strings, or $\\frac{540}{4096} = \\frac{135}{1024}$ ✓. KEEPING ONE ORDER ONLY leaves $\\frac{135}{4096}$ ✗. SWAPPING THE FLAVORS answers "exactly three cherry" and gives $4 \\times \\left(\\frac{5}{8}\\right)^3 \\times \\frac{3}{8} = \\frac{375}{1024}$ ✗. DEMANDING FOUR MINTS gives $\\left(\\frac{3}{8}\\right)^4 = \\frac{81}{4096}$ ✗.',
    },
    {
      q: 'A spinner has $5$ equal sections: $2$ are green and $3$ are yellow. It is spun $3$ times, and the spins are independent. What is the probability that all three spins land on the same color?',
      choices: ['$\\frac{8}{125}$', '$\\frac{27}{125}$', '$\\frac{7}{25}$', '$\\frac{18}{25}$'],
      answer: 2,
      solution:
        '"All the same color" splits into two cases that cannot both happen. All green has probability $\\left(\\frac{2}{5}\\right)^3 = \\frac{8}{125}$ and all yellow has probability $\\left(\\frac{3}{5}\\right)^3 = \\frac{27}{125}$, so the total is $\\frac{8}{125} + \\frac{27}{125} = \\frac{35}{125} = \\frac{7}{25}$ ✓. Counting sections agrees: three spins make $5^3 = 125$ equally likely strings of sections. All-green strings use the $2$ green sections three times, or $2^3 = 8$ strings, and all-yellow strings give $3^3 = 27$, for $35$ strings and $\\frac{35}{125} = \\frac{7}{25}$ ✓. KEEPING ONLY THE GREEN CASE leaves $\\frac{8}{125}$ ✗. KEEPING ONLY THE YELLOW CASE leaves $\\frac{27}{125}$ ✗. ANSWERING THE COMPLEMENT gives $1 - \\frac{7}{25} = \\frac{18}{25}$, the probability that the three spins are not all one color ✗.',
    },
  ],

  // slot 7 — repeated trials with a lopsided probability; the third asks "at least".
  //          Lanes: four makes of five -> 162/625; two defective lamps of five ->
  //          135/512; derived: the base free throws, at least two of three -> 27/32.
  [
    {
      q: 'Dev makes each penalty shot with probability $\\frac{3}{5}$, and his shots are independent. He takes $5$ shots. What is the probability that he makes exactly four of them?',
      choices: ['$\\frac{162}{625}$', '$\\frac{162}{3125}$', '$\\frac{81}{125}$', '$\\frac{1053}{3125}$'],
      answer: 0,
      solution:
        'One order — four makes and then a miss — has probability $\\left(\\frac{3}{5}\\right)^4 \\times \\frac{2}{5} = \\frac{162}{3125}$. The miss can be any one of the $5$ shots, and each of those $\\binom{5}{4} = 5$ orders multiplies the same factors, so the total is $5 \\times \\frac{162}{3125} = \\frac{810}{3125} = \\frac{162}{625}$ ✓. A count of equally likely outcomes gives the same number: picture each shot as a spin of a $5$-section wheel with $3$ sections marked "make", so five shots make $5^5 = 3125$ equally likely strings. Choose which shot misses ($5$ ways), fill the four makes with marked sections ($3^4 = 81$ ways), and fill the miss with either unmarked section ($2$ ways): $5 \\times 81 \\times 2 = 810$ strings, or $\\frac{810}{3125} = \\frac{162}{625}$ ✓. KEEPING ONE ORDER ONLY leaves $\\frac{162}{3125}$ ✗. DROPPING THE MISS FACTOR gives $5 \\times \\left(\\frac{3}{5}\\right)^4 = \\frac{81}{125}$, which lets the fifth shot go either way ✗. ANSWERING "AT LEAST FOUR" adds the all-five case and gives $\\frac{1053}{3125}$ ✗.',
    },
    {
      q: 'An inspector checks $5$ lamps. Each lamp is defective with probability $\\frac{1}{4}$, independently of the others. What is the probability that exactly two of the five are defective?',
      choices: ['$\\frac{27}{1024}$', '$\\frac{45}{512}$', '$\\frac{135}{512}$', '$\\frac{47}{128}$'],
      answer: 2,
      solution:
        'One order — the first two defective, the last three fine — has probability $\\left(\\frac{1}{4}\\right)^2 \\times \\left(\\frac{3}{4}\\right)^3 = \\frac{27}{1024}$, and every other order with two defects rearranges the same five factors. The two defective lamps can be any $2$ of the $5$, so there are $\\binom{5}{2} = 10$ orders: $10 \\times \\frac{27}{1024} = \\frac{270}{1024} = \\frac{135}{512}$ ✓. Counting equally likely outcomes agrees: give each lamp one of $4$ equally likely grades, exactly one of which means "defective", so five lamps make $4^5 = 1024$ equally likely strings. Choose which $2$ lamps are defective ($10$ ways) and give each of the other three any of its $3$ good grades ($3^3 = 27$ ways): $10 \\times 27 = 270$ strings, or $\\frac{270}{1024} = \\frac{135}{512}$ ✓. KEEPING ONE ORDER ONLY leaves $\\frac{27}{1024}$ ✗. SWAPPING DEFECTIVE FOR GOOD answers "exactly two good lamps" and gives $10 \\times \\left(\\frac{3}{4}\\right)^2\\left(\\frac{1}{4}\\right)^3 = \\frac{45}{512}$ ✗. ANSWERING "AT LEAST TWO DEFECTIVE" gives $\\frac{47}{128}$ ✗.',
    },
    {
      q: 'Ana makes each free throw with probability $\\frac{3}{4}$, and her shots are independent. She takes $3$ free throws. What is the probability that she makes at least two of them?',
      choices: ['$\\frac{27}{64}$', '$\\frac{27}{32}$', '$\\frac{63}{64}$', '$\\frac{37}{64}$'],
      answer: 1,
      solution:
        '"At least two" is exactly two or all three, and those cannot both happen. Exactly two: one order, make-make-miss, has probability $\\left(\\frac{3}{4}\\right)^2 \\times \\frac{1}{4} = \\frac{9}{64}$, and the miss can be any of the $3$ shots, so that case is $3 \\times \\frac{9}{64} = \\frac{27}{64}$. All three is $\\left(\\frac{3}{4}\\right)^3 = \\frac{27}{64}$. Adding gives $\\frac{54}{64} = \\frac{27}{32}$ ✓. The complement is a second route: "fewer than two" means no makes, $\\left(\\frac{1}{4}\\right)^3 = \\frac{1}{64}$, or exactly one make, $3 \\times \\frac{3}{4} \\times \\left(\\frac{1}{4}\\right)^2 = \\frac{9}{64}$, for $\\frac{10}{64}$ in all; subtracting from $1$ leaves $\\frac{54}{64} = \\frac{27}{32}$ ✓. STOPPING AT "EXACTLY TWO" leaves $\\frac{27}{64}$ and drops the perfect round ✗. ANSWERING "AT LEAST ONE" gives $1 - \\frac{1}{64} = \\frac{63}{64}$ ✗. ANSWERING "AT MOST TWO" gives $1 - \\frac{27}{64} = \\frac{37}{64}$, which trades the wrong tail ✗.',
    },
  ],

  // slot 8 — majorities, where the tie must be handled before any symmetry.
  //          Lanes: eight fair coins -> 93/256; a 3-to-1 spinner in six spins ->
  //          1701/2048; derived: the base six coins with the first one fixed -> 3/32.
  [
    {
      q: 'Eight fair coins are flipped, and the flips are independent. What is the probability that more of them show heads than tails?',
      choices: ['$\\frac{1}{2}$', '$\\frac{7}{32}$', '$\\frac{93}{256}$', '$\\frac{163}{256}$'],
      answer: 2,
      solution:
        'More heads than tails means $5$, $6$, $7$, or $8$ heads out of $8$. Each exact sequence has probability $\\frac{1}{256}$, and the number of sequences is $\\binom{8}{5} + \\binom{8}{6} + \\binom{8}{7} + \\binom{8}{8} = 56 + 28 + 8 + 1 = 93$, so the probability is $\\frac{93}{256}$ ✓. Symmetry gets there without adding four binomial coefficients. Turning every coin over trades heads for tails, so "more heads" and "more tails" have the same probability. The only other possibility is the $4$–$4$ tie, which happens in $\\binom{8}{4} = 70$ of the $256$ sequences. That leaves $256 - 70 = 186$ sequences split evenly between the two majorities, so $\\frac{186}{2} = 93$ favor heads and the probability is $\\frac{93}{256}$ ✓. ANSWERING $\\frac{1}{2}$ forgets that a $4$–$4$ tie is possible, so the two majorities cannot share the whole sample space ✗. TAKING EXACTLY FIVE HEADS gives $\\frac{56}{256} = \\frac{7}{32}$ ✗. COUNTING THE TIE AS A WIN gives $\\frac{93 + 70}{256} = \\frac{163}{256}$ ✗.',
    },
    {
      q: 'A spinner has $4$ equal sections: $3$ are red and $1$ is blue. It is spun $6$ times, and the spins are independent. What is the probability that more spins land on red than on blue?',
      choices: ['$\\frac{1701}{2048}$', '$\\frac{1}{2}$', '$\\frac{1215}{4096}$', '$\\frac{1971}{2048}$'],
      answer: 0,
      solution:
        'With six spins, more red than blue means at least $4$ reds. A sequence with $k$ reds has probability $\\left(\\frac{3}{4}\\right)^k \\left(\\frac{1}{4}\\right)^{6-k} = \\frac{3^k}{4096}$, so summing over $k = 4, 5, 6$ gives $\\frac{\\binom{6}{4}3^4 + \\binom{6}{5}3^5 + \\binom{6}{6}3^6}{4096} = \\frac{1215 + 1458 + 729}{4096} = \\frac{3402}{4096} = \\frac{1701}{2048}$ ✓. The complement is an independent check: at most $3$ reds contributes $\\binom{6}{0}3^0 + \\binom{6}{1}3^1 + \\binom{6}{2}3^2 + \\binom{6}{3}3^3 = 1 + 18 + 135 + 540 = 694$ out of $4096$, and $4096 - 694 = 3402$, again $\\frac{3402}{4096} = \\frac{1701}{2048}$ ✓. BORROWING THE FAIR-COIN SYMMETRY gives $\\frac{1}{2}$; turning a red into a blue changes a sequence’s probability here, so the two majorities are nothing like equally likely ✗. TAKING EXACTLY FOUR REDS gives $\\frac{1215}{4096}$ ✗. COUNTING THE $3$–$3$ SPLIT AS A RED MAJORITY adds $\\frac{540}{4096}$ and gives $\\frac{3942}{4096} = \\frac{1971}{2048}$ ✗.',
    },
    {
      q: 'Six fair coins are flipped in order, and the flips are independent. What is the probability that more of them show heads than tails AND the first coin shows tails?',
      choices: ['$\\frac{11}{64}$', '$\\frac{11}{32}$', '$\\frac{1}{4}$', '$\\frac{3}{32}$'],
      answer: 3,
      solution:
        'Fix the first coin as tails, which has probability $\\frac{1}{2}$. A majority of heads among six coins needs at least $4$ heads, and with the first coin already a tail all of them must come from the last five: at least $4$ heads there has probability $\\frac{\\binom{5}{4} + \\binom{5}{5}}{32} = \\frac{6}{32} = \\frac{3}{16}$. The first coin and the last five are independent, so $\\frac{1}{2} \\times \\frac{3}{16} = \\frac{3}{32}$ ✓. Counting sequences and subtracting reaches it another way: of the $64$ sequences, $\\binom{6}{4} + \\binom{6}{5} + \\binom{6}{6} = 15 + 6 + 1 = 22$ have a head majority. Those starting with heads need at least $3$ heads among the last five, which is $\\binom{5}{3} + \\binom{5}{4} + \\binom{5}{5} = 10 + 5 + 1 = 16$ sequences, so $22 - 16 = 6$ start with tails and the probability is $\\frac{6}{64} = \\frac{3}{32}$ ✓. TREATING THE TWO DEMANDS AS INDEPENDENT gives $\\frac{11}{32} \\times \\frac{1}{2} = \\frac{11}{64}$; a tails on the first coin makes a head majority harder, not equally likely ✗. IGNORING THE FIRST COIN leaves $\\frac{11}{32}$ ✗. TAKING THE OTHER HALF answers "head majority with a head first" and gives $\\frac{16}{64} = \\frac{1}{4}$ ✗.',
    },
  ],

  // slot 9 — a pattern condition on top of a head count; blocks, not binomials.
  //          Lanes: two adjacent heads in five weighted flips -> 288/3125; three
  //          adjacent golds in five spins -> 27/1024; derived: no two adjacent
  //          heads in the base four weighted flips -> 7/27.
  [
    {
      q: 'A weighted coin lands heads with probability $\\frac{3}{5}$ on each flip, and the flips are independent. It is flipped $5$ times. What is the probability that exactly two flips are heads and those two heads come on consecutive flips?',
      choices: ['$\\frac{72}{3125}$', '$\\frac{288}{3125}$', '$\\frac{144}{625}$', '$\\frac{216}{3125}$'],
      answer: 1,
      solution:
        'Every sequence of five flips with exactly two heads has the same probability $\\left(\\frac{3}{5}\\right)^2\\left(\\frac{2}{5}\\right)^3 = \\frac{72}{3125}$, since it multiplies the same five factors in some order. The demand is that the two head positions be side by side, and in five slots the adjacent pairs are $(1,2)$, $(2,3)$, $(3,4)$, and $(4,5)$ — $4$ of them. So the probability is $4 \\times \\frac{72}{3125} = \\frac{288}{3125}$ ✓. Counting equally likely strings agrees: picture each flip as a spin of a $5$-section wheel with $3$ sections marked "heads", giving $5^5 = 3125$ equally likely strings. Choose where the block of two heads starts ($4$ ways), fill those two flips with marked sections ($3 \\times 3 = 9$ ways), and fill the other three with unmarked ones ($2^3 = 8$ ways): $4 \\times 9 \\times 8 = 288$ strings, or $\\frac{288}{3125}$ ✓. KEEPING ONE BLOCK ONLY leaves $\\frac{72}{3125}$ ✗. IGNORING THE CONSECUTIVE CONDITION uses all $\\binom{5}{2} = 10$ two-head orders and gives $\\frac{720}{3125} = \\frac{144}{625}$ ✗. MISCOUNTING THE ADJACENT PAIRS AS $3$ gives $\\frac{216}{3125}$ ✗.',
    },
    {
      q: 'A spinner has $4$ equal sections: $1$ is gold and $3$ are gray. It is spun $5$ times, and the spins are independent. What is the probability that exactly three spins land on gold and those three gold spins are consecutive?',
      choices: ['$\\frac{9}{1024}$', '$\\frac{45}{512}$', '$\\frac{9}{256}$', '$\\frac{27}{1024}$'],
      answer: 3,
      solution:
        'Any sequence of five spins with exactly three golds has probability $\\left(\\frac{1}{4}\\right)^3\\left(\\frac{3}{4}\\right)^2 = \\frac{9}{1024}$. A block of three consecutive slots inside five can start at slot $1$, $2$, or $3$ — $3$ blocks in all — so the probability is $3 \\times \\frac{9}{1024} = \\frac{27}{1024}$ ✓. Counting sections gives the same number: five spins make $4^5 = 1024$ equally likely strings of sections. Choose where the gold block starts ($3$ ways), use the single gold section for each of those three spins ($1$ way), and give each of the other two spins any of the $3$ gray sections ($3 \\times 3 = 9$ ways): $3 \\times 9 = 27$ strings, or $\\frac{27}{1024}$ ✓. KEEPING ONE BLOCK ONLY leaves $\\frac{9}{1024}$ ✗. IGNORING THE CONSECUTIVE CONDITION uses all $\\binom{5}{3} = 10$ orders and gives $\\frac{90}{1024} = \\frac{45}{512}$ ✗. MISCOUNTING THE BLOCKS AS $4$ gives $\\frac{36}{1024} = \\frac{9}{256}$; a block of three needs three slots, so it cannot start at slot $4$ ✗.',
    },
    {
      q: 'A weighted coin lands heads with probability $\\frac{2}{3}$ on each flip, and the flips are independent. It is flipped $4$ times. What is the probability that no two consecutive flips are both heads?',
      choices: ['$\\frac{1}{2}$', '$\\frac{23}{27}$', '$\\frac{7}{27}$', '$\\frac{1}{9}$'],
      answer: 2,
      solution:
        'Sort the good sequences by how many heads they hold. Zero heads: TTTT alone, probability $\\left(\\frac{1}{3}\\right)^4 = \\frac{1}{81}$. One head: $4$ sequences, each $\\frac{2}{3}\\left(\\frac{1}{3}\\right)^3 = \\frac{2}{81}$, for $\\frac{8}{81}$. Two heads with no two adjacent: HTHT, HTTH, THTH — $3$ sequences, each $\\left(\\frac{2}{3}\\right)^2\\left(\\frac{1}{3}\\right)^2 = \\frac{4}{81}$, for $\\frac{12}{81}$. Three or four heads in four flips must put two side by side, so they contribute nothing. The total is $\\frac{1 + 8 + 12}{81} = \\frac{21}{81} = \\frac{7}{27}$ ✓. The complement is an independent route: sequences that do hold two consecutive heads are the two-head ones with the heads together (HHTT, THHT, TTHH), $3 \\times \\frac{4}{81} = \\frac{12}{81}$; every three-head sequence, $4 \\times \\left(\\frac{2}{3}\\right)^3\\frac{1}{3} = \\frac{32}{81}$; and HHHH, $\\left(\\frac{2}{3}\\right)^4 = \\frac{16}{81}$. That is $\\frac{60}{81}$, and $1 - \\frac{60}{81} = \\frac{21}{81} = \\frac{7}{27}$ ✓. TREATING THE $16$ SEQUENCES AS EQUALLY LIKELY counts the $8$ good ones and gives $\\frac{1}{2}$, which would be right only for a fair coin ✗. SUBTRACTING THE TWO-CONSECUTIVE-HEADS ANSWER $\\frac{4}{27}$ FROM $1$ gives $\\frac{23}{27}$; that $\\frac{4}{27}$ also demanded exactly two heads, so it is far from the whole bad set ✗. KEEPING ONLY $0$ OR $1$ HEAD gives $\\frac{9}{81} = \\frac{1}{9}$ and throws away the three legal two-head sequences ✗.',
    },
  ],

  // slot 10 — order among distinct results: each set arrives in one sorted order.
  //          Lanes: three independent games at unequal win chances -> 11/24;
  //          seven letters -> 5/49; derived: the base die, all different but not increasing -> 25/54.
  [
    {
      q: 'Rin plays one game against each of three different opponents, and the three games are independent. Every game ends in a win or a loss for Rin, with no draws. She beats the first opponent with probability $\\frac{1}{2}$, the second with probability $\\frac{2}{3}$, and the third with probability $\\frac{3}{4}$. What is the probability that she wins exactly two of the three games?',
      choices: ['$\\frac{17}{24}$', '$\\frac{1}{4}$', '$\\frac{1}{12}$', '$\\frac{11}{24}$'],
      answer: 3,
      solution:
        'The three win probabilities differ, so "exactly two wins" is not one product times a count of orders — each choice of which game she loses carries its own product. Losing the third game: $\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{1}{4} = \\frac{2}{24}$. Losing the second: $\\frac{1}{2} \\times \\frac{1}{3} \\times \\frac{3}{4} = \\frac{3}{24}$. Losing the first: $\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} = \\frac{6}{24}$. Those three cases are disjoint and cover every way to win exactly two, so add them: $\\frac{2 + 3 + 6}{24} = \\frac{11}{24}$ ✓. Equally likely outcomes reach the answer another way. Replace each game by a device with the same win chance: a fair coin for the first, a spinner with $3$ equal sections of which $2$ are winning for the second, and a spinner with $4$ equal sections of which $3$ are winning for the third. The devices are independent, so all $2 \\times 3 \\times 4 = 24$ combinations are equally likely. Count the combinations that are not exactly two wins: she wins all three in $1 \\times 2 \\times 3 = 6$ of them; she wins none in $1 \\times 1 \\times 1 = 1$; she wins exactly one in $1 \\times 1 \\times 1 = 1$ (the first only) plus $1 \\times 2 \\times 1 = 2$ (the second only) plus $1 \\times 1 \\times 3 = 3$ (the third only), which is $6$. That leaves $24 - 6 - 1 - 6 = 11$ combinations, or $\\frac{11}{24}$ ✓. COUNTING THE SWEEP AS WELL answers "at least two wins", which is $11 + 6 = 17$ of the $24$ equally likely combinations, or $\\frac{17}{24}$ ✗. ANSWERING "SHE WINS ALL THREE" gives $\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} = \\frac{1}{4}$ ✗. KEEPING ONLY THE CASE WHERE THE LOSS COMES LAST gives $\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{1}{4} = \\frac{1}{12}$ and drops the two other placements of the loss ✗.',
    },
    {
      q: 'Three people, one after another, each independently pick a letter at random from A, B, C, D, E, F, G, every letter equally likely and repeats allowed. What is the probability that the three letters, in the order picked, come in strictly alphabetical order?',
      choices: ['$\\frac{30}{49}$', '$\\frac{5}{49}$', '$\\frac{10}{49}$', '$\\frac{1}{343}$'],
      answer: 1,
      solution:
        'There are $7^3 = 343$ equally likely ordered triples of letters. A strictly alphabetical triple has three different letters, and each set of three different letters can be arranged in alphabetical order in exactly one way, so the favorable triples number $\\binom{7}{3} = 35$ and the probability is $\\frac{35}{343} = \\frac{5}{49}$ ✓. Two stages give the same answer. The three picks are all different with probability $\\frac{7 \\times 6 \\times 5}{343} = \\frac{210}{343} = \\frac{30}{49}$, and three different letters arrive in one of $3! = 6$ equally likely orders, exactly one of them alphabetical: $\\frac{30}{49} \\times \\frac{1}{6} = \\frac{5}{49}$ ✓. STOPPING AT "ALL DIFFERENT" leaves $\\frac{30}{49}$ ✗. DIVIDING BY $3$ INSTEAD OF $6$ gives $\\frac{10}{49}$ ✗. TAKING ONE PARTICULAR TRIPLE such as A, D, F gives $\\frac{1}{343}$ ✗.',
    },
    {
      q: 'A standard die is rolled $3$ times, and the rolls are independent. What is the probability that the three numbers are all different but do NOT come in strictly increasing order?',
      choices: ['$\\frac{25}{54}$', '$\\frac{5}{9}$', '$\\frac{5}{54}$', '$\\frac{49}{54}$'],
      answer: 0,
      solution:
        'Three rolls make $6^3 = 216$ equally likely triples, and $6 \\times 5 \\times 4 = 120$ of them have three different numbers. Any such triple arrives in one of $3! = 6$ equally likely orders, exactly one of which increases, so $5$ of every $6$ fail to increase: $120 \\times \\frac{5}{6} = 100$ triples, or $\\frac{100}{216} = \\frac{25}{54}$ ✓. Subtracting reaches the same number from different pieces. All different is $\\frac{120}{216} = \\frac{5}{9}$, and strictly increasing triples are exactly the $3$-element subsets of $\\{1, \\dots, 6\\}$, or $\\binom{6}{3} = 20$ of the $216$, which is $\\frac{5}{54}$. Every increasing triple already has three different numbers, so it sits inside the first group: $\\frac{5}{9} - \\frac{5}{54} = \\frac{30}{54} - \\frac{5}{54} = \\frac{25}{54}$ ✓. STOPPING AT "ALL DIFFERENT" leaves $\\frac{5}{9}$ and never removes the increasing runs ✗. ANSWERING THE INCREASING QUESTION gives $\\frac{5}{54}$ ✗. TAKING $1 - \\frac{5}{54} = \\frac{49}{54}$ counts every triple with a repeat as a success, but the stem demands three different numbers ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 8,
  sections: {
    '8.4': s84,
  },
}
