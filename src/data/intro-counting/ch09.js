// Counting & Probability — Chapter 9: Think About It!
// All problems, explanations, and examples are original MathQuest content.

const s92 = {
  id: '9.2',
  title: 'Problems',
  learn: {
    concepts: [
      {
        heading: 'Let symmetry do the counting',
        body: 'A shuffled deck has $52!$ orders, but you almost never need that number. Nothing about position $17$ prefers a king to a two, so the card sitting there is equally likely to be any of the $52$ cards, and the probability that it is a king is simply $\\frac{4}{52} = \\frac{1}{13}$ — the same as for the top card. Symmetry applies whenever swapping two objects, or two positions, changes nothing about the setup. Its trap: a rule that treats things differently (“the reds go in first”, “Ana sits at the head”) breaks the symmetry, and then you have to count.',
      },
      {
        heading: 'The other outcomes do not matter',
        body: 'When a question is about only some of the objects, mentally throw the rest away. Roll a die until a $1$ or a $6$ appears: the rolls showing $2$ through $5$ are just delays, so the stopping roll is a $6$ with probability $\\frac{1}{2}$. In a random lineup, whether Ana stands ahead of Ben depends only on the relative order of those two, so everyone else is scenery. Ask “which outcomes decide the question?” and compare only those. The trap is that the ignored outcomes must be truly irrelevant: if drawing a green marble changed what could happen next, you could not skip it.',
      },
      {
        heading: 'Reframe the game',
        body: 'A race to $2$ wins can stop after $2$ games or $3$, which makes its outcomes lumpy and unequal. Pretend the players always play all $3$ games: whoever wins the majority is exactly the player who would have reached $2$ wins first, because the extra games can never undo a race that is already over. Now every outcome is a string of $3$ results, all equally likely. Reframing means swapping the process for a simpler one with the same probabilities — a fixed-length series, a complement, or a game that “restarts” after a wasted round. The trap: check that the new process matches the old one in every case, not just the typical one.',
      },
      {
        heading: 'Choose the sample space on purpose',
        body: 'Drawing two marbles “at once” or “one after the other” is the same physical event, so you may count unordered pairs or ordered pairs — as long as the numerator and the denominator use the same choice. Two reds from $4$ red and $2$ blue: $\\frac{\\binom{4}{2}}{\\binom{6}{2}} = \\frac{6}{15}$, or $\\frac{4 \\cdot 3}{6 \\cdot 5} = \\frac{12}{30}$, and both are $\\frac{2}{5}$. Use ordered outcomes when positions are named (“the third ball”) and unordered ones when the question is about a set. The trap is mixing: an ordered favorable count over an unordered total is the most common wrong answer in this whole chapter.',
      },
    ],
    examples: [
      {
        problem: 'A standard deck of $52$ cards is shuffled so that every order is equally likely. What is the probability that the bottom card is a heart?',
        steps: [
          'The long way: there are $52!$ orders, and the ones with a heart on the bottom number $13 \\cdot 51!$, so the probability is $\\frac{13 \\cdot 51!}{52!}$.',
          'That fraction collapses to $\\frac{13}{52}$, since every factor except the choice of bottom card cancels.',
          'The short way sees this at once: by symmetry the bottom card is equally likely to be any of the $52$ cards, and $13$ of them are hearts.',
        ],
        answer: 'The probability is $\\frac{1}{4}$.',
      },
      {
        problem: 'A jar holds $3$ red, $2$ blue, and $4$ green marbles. Marbles are drawn one at a time without replacement until a red or a blue marble appears. What is the probability that this marble is blue?',
        steps: [
          'The long way splits on how many greens come out first: no greens then blue is $\\frac{2}{9}$, one green then blue is $\\frac{4}{9} \\cdot \\frac{2}{8} = \\frac{1}{9}$, and so on through four greens, with the five cases adding to $\\frac{2}{5}$.',
          'The short way notices that the greens only delay the moment of truth and change nothing else.',
          'Whichever of the $5$ red-or-blue marbles comes out first among those five is the stopping marble, and by symmetry each of the five is equally likely to be that one.',
          'So the probability is the fraction of the relevant marbles that are blue: $\\frac{2}{5}$.',
        ],
        answer: 'The probability is $\\frac{2}{5}$.',
      },
      {
        problem: 'Three standard dice are rolled. What is the probability that the sum of the three numbers showing is odd?',
        steps: [
          'The long way sorts the $216$ rolls by how many dice show an odd number: the sum is odd when exactly one die or all three dice are odd, which happens in $3 \\cdot 3 \\cdot 3^2 + 3^3 = 81 + 27 = 108$ rolls, for $\\frac{108}{216}$.',
          'The short way reframes: look at the first two dice, whatever they show, and let the third die decide.',
          'If the first two dice have an even total, the sum is odd exactly when the third die is odd; if their total is odd, exactly when the third die is even — and either way that is $3$ of the $6$ faces.',
          'So the probability is $\\frac{1}{2}$ no matter what the first two dice show, agreeing with the grind; the reframing works because each die is odd or even with equal probability, and a spinner with three odd numbers and two even ones would not split the sum so neatly.',
        ],
        answer: 'The probability is $\\frac{1}{2}$.',
      },
    ],
  },
  problems: [
    {
      q: 'A standard deck of $52$ cards is shuffled so that every order is equally likely. What is the probability that the ace of spades is somewhere above the ace of hearts in the deck?',
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{26}{51}$', '$\\frac{1}{13}$'],
      answer: 0,
      solution: 'Nothing about the shuffle prefers spades to hearts, so swapping the two aces turns every order with the ace of spades higher into one with the ace of hearts higher, and back again. The two cases are equally likely and cover everything, so the probability is $\\frac{1}{2}$; the other $50$ cards never need a thought. The choice $\\frac{1}{4}$ multiplies two halves as if each ace had to pass a separate test; $\\frac{26}{51}$ parks the ace of spades in the middle of the deck and counts the slots below it, which is only one of its $52$ possible positions; $\\frac{1}{13}$ is the chance that a given card is an ace, which is not what was asked.',
    },
    {
      q: 'A spinner has $10$ equal sectors numbered $1$ through $10$. It is spun again and again until it lands on a number that is either a prime or a perfect square. What is the probability that the number it stops on is prime?',
      choices: ['$\\frac{2}{5}$', '$\\frac{1}{2}$', '$\\frac{4}{7}$', '$\\frac{3}{7}$'],
      answer: 2,
      solution: 'The stopping numbers are the primes $2, 3, 5, 7$ and the squares $1, 4, 9$ — seven sectors in all. A spin landing on $6$, $8$, or $10$ is simply repeated and changes nothing, so only the seven relevant sectors compete, each equally likely: $\\frac{4}{7}$. The choice $\\frac{2}{5}$ is $\\frac{4}{10}$, the chance of a prime on one spin, which forgets that the wasted spins do not count; $\\frac{3}{7}$ is the probability of stopping on a square instead.',
    },
    {
      q: 'A bag holds $4$ red, $3$ blue, and $2$ green marbles. Three marbles are drawn at the same time, with every set of three equally likely. What is the probability that the three marbles are all different colors?',
      choices: ['$\\frac{1}{21}$', '$\\frac{2}{7}$', '$\\frac{1}{7}$', '$\\frac{5}{7}$'],
      answer: 1,
      solution: 'Count unordered sets: there are $\\binom{9}{3} = 84$ equally likely sets of three, and one marble of each color can be picked in $4 \\cdot 3 \\cdot 2 = 24$ ways, so the probability is $\\frac{24}{84} = \\frac{2}{7}$. Ordered draws agree if used throughout: the three colors can come out in $3! = 6$ orders, so $\\frac{6 \\cdot 24}{9 \\cdot 8 \\cdot 7} = \\frac{144}{504} = \\frac{2}{7}$. The choice $\\frac{1}{21} = \\frac{24}{504}$ puts the unordered count over the ordered total; $\\frac{1}{7} = \\frac{12}{84}$ multiplies the red and blue choices but forgets the $2$ choices of green marble; $\\frac{5}{7}$ is the complement, the chance that some two of the marbles share a color.',
    },
    {
      q: 'Six friends, including Ana, Ben, and Cal, line up in a random order, with all $720$ orders equally likely. What is the probability that Ana stands somewhere between Ben and Cal (not necessarily next to either of them)?',
      choices: ['$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{1}{15}$', '$\\frac{1}{3}$'],
      answer: 3,
      solution: 'Only the relative order of Ana, Ben, and Cal matters; the other three friends are scenery. The three of them appear in one of $3! = 6$ orders, all equally likely by symmetry, and Ana is in the middle in exactly $2$ of them (Ben–Ana–Cal and Cal–Ana–Ben): $\\frac{2}{6} = \\frac{1}{3}$. The choice $\\frac{1}{6}$ picks a single order; $\\frac{1}{2}$ only compares Ana with Ben; $\\frac{1}{15}$ insists the three stand side by side.',
    },
    {
      q: 'Three people, one after another, each independently choose a whole number from $1$ to $10$, every number equally likely. What is the probability that the three numbers are all different and come in increasing order, so that the first person’s number is the smallest and the third person’s is the largest?',
      choices: ['$\\frac{1}{6}$', '$\\frac{3}{25}$', '$\\frac{18}{25}$', '$\\frac{11}{50}$'],
      answer: 1,
      solution: 'First ask whether the three numbers are all different: the second person misses the first with probability $\\frac{9}{10}$ and the third misses both with probability $\\frac{8}{10}$, so all three differ with probability $\\frac{18}{25}$. Now the viewpoint: three different numbers can be announced in $3! = 6$ orders, and nothing about the choosing favors one order over another, so exactly $\\frac{1}{6}$ of those outcomes are increasing. The probability is $\\frac{18}{25} \\cdot \\frac{1}{6} = \\frac{3}{25}$, and a direct count agrees: the favorable outcomes are the $\\binom{10}{3} = 120$ increasing triples out of $1000$. The choice $\\frac{1}{6}$ forgets that ties are possible; $\\frac{18}{25}$ stops after the first step; $\\frac{11}{50} = \\frac{220}{1000}$ allows equal neighbors and counts non-decreasing triples instead.',
    },
    {
      q: 'Ten players, including Ana, Ben, and Cal, are split at random into two teams of five, with every possible split equally likely. What is the probability that exactly one of Ben and Cal is on Ana’s team?',
      choices: ['$\\frac{5}{9}$', '$\\frac{4}{9}$', '$\\frac{1}{2}$', '$\\frac{5}{18}$'],
      answer: 0,
      solution: 'Put Ana on her team first: $4$ spots remain beside her and $5$ on the other team, and by symmetry Ben is equally likely to fill any of those $9$ spots. Ben joins Ana with probability $\\frac{4}{9}$, and then Cal must take one of the $5$ spots on the other team out of the $8$ left: $\\frac{4}{9} \\cdot \\frac{5}{8} = \\frac{5}{18}$. The mirror case, Ben away and Cal with Ana, has probability $\\frac{5}{9} \\cdot \\frac{4}{8} = \\frac{5}{18}$ as well, so the answer is $\\frac{5}{18} + \\frac{5}{18} = \\frac{5}{9}$. The choice $\\frac{5}{18}$ counts only the case where it is Ben who joins Ana; $\\frac{4}{9}$ is the chance that Ben is with Ana, with Cal ignored; $\\frac{1}{2}$ treats Ben and Cal as two coin flips and forgets that Ana already took a seat.',
    },
    {
      q: 'Two evenly matched teams play a series that ends as soon as one team has won $3$ games; each game is won by either team with probability $\\frac{1}{2}$, independently of the others. What is the probability that the team that wins game $1$ goes on to win the series?',
      choices: ['$\\frac{3}{4}$', '$\\frac{1}{2}$', '$\\frac{11}{16}$', '$\\frac{7}{8}$'],
      answer: 2,
      solution: 'Call the game-$1$ winner team $A$. It needs $2$ more wins before the other team collects $3$, and at most $4$ more games can be played. Reframe: play all $4$ remaining games no matter what — $A$ wins the series exactly when it wins at least $2$ of those $4$. Of the $16$ equally likely outcomes, $A$ wins $0$ or $1$ of the games in $1 + 4 = 5$ cases, so the answer is $1 - \\frac{5}{16} = \\frac{11}{16}$. The choice $\\frac{1}{2}$ ignores the head start; $\\frac{7}{8}$ subtracts only the outcome where $A$ loses every remaining game, forgetting that one win is also not enough; $\\frac{3}{4}$ assumes the series is lost only if $A$ drops the next two games.',
    },
    {
      q: 'A bag holds $4$ red and $6$ blue marbles. They are drawn one at a time without replacement, in a random order, until one color has been drawn twice, and then the drawing stops. What is the probability that red is the color that reaches two draws first?',
      choices: ['$\\frac{1}{2}$', '$\\frac{2}{15}$', '$\\frac{1}{5}$', '$\\frac{1}{3}$'],
      answer: 3,
      solution: 'Reframe as in a series: the first three marbles settle which color reaches two draws first, because any three marbles contain two of one color, and that color is the winner. So pretend three marbles are always drawn, and ask whether at least two of them are red. Of the $\\binom{10}{3} = 120$ equally likely sets of three, those with exactly two reds number $\\binom{4}{2} \\cdot 6 = 36$ and those with three reds number $\\binom{4}{3} = 4$, for $\\frac{40}{120} = \\frac{1}{3}$. The choice $\\frac{1}{2}$ assumes the two colors are symmetric, but there are fewer reds; $\\frac{2}{15}$ counts only the sequences that start red–red; $\\frac{1}{5}$ counts red–blue–red and blue–red–red but leaves out red–red.',
    },
    {
      q: 'A standard deck of $52$ cards is shuffled and dealt out completely to four players, $13$ cards each. What is the probability that the ace, king, and queen of spades are all dealt to the same player?',
      choices: ['$\\frac{1}{16}$', '$\\frac{22}{425}$', '$\\frac{26}{425}$', '$\\frac{16}{289}$'],
      answer: 1,
      solution: 'The other $49$ cards do not matter. Wherever the ace of spades lands, its owner holds $12$ of the $51$ other cards, and by symmetry the king of spades is equally likely to be any one of those $51$: it joins the ace with probability $\\frac{12}{51}$. That owner now holds $11$ of the $50$ cards still unaccounted for, so the queen joins them with probability $\\frac{11}{50}$, and the answer is $\\frac{12}{51} \\cdot \\frac{11}{50} = \\frac{132}{2550} = \\frac{22}{425}$. Counting hands agrees: a given player’s hand is one of $\\binom{52}{13}$ equally likely sets, $\\binom{49}{10}$ of them contain all three spades, and any of the $4$ players may be the one, so $\\frac{4\\binom{49}{10}}{\\binom{52}{13}} = \\frac{4 \\cdot 13 \\cdot 12 \\cdot 11}{52 \\cdot 51 \\cdot 50} = \\frac{22}{425}$. The choice $\\frac{1}{16}$ treats the king and the queen as two independent $\\frac{1}{4}$ chances and forgets that the ace has already filled one of its owner’s $13$ slots; $\\frac{26}{425} = \\frac{13}{51} \\cdot \\frac{12}{50}$ counts all $13$ slots as open for the king; $\\frac{16}{289} = \\left(\\frac{12}{51}\\right)^2$ forgets that the king used up a slot before the queen was placed.',
    },
    {
      q: 'A spinner has $3$ equal sectors, exactly one of them red. Ana and Ben take turns spinning it, Ana first, and the first person to land on red wins. What is the probability that Ana wins?',
      choices: ['$\\frac{1}{2}$', '$\\frac{5}{9}$', '$\\frac{3}{5}$', '$\\frac{2}{3}$'],
      answer: 2,
      solution: 'Think of one round as Ana’s spin followed by Ben’s. In a round, Ana wins with probability $\\frac{1}{3}$, Ben wins with probability $\\frac{2}{3} \\cdot \\frac{1}{3} = \\frac{2}{9}$, and with probability $\\frac{4}{9}$ nobody wins and the game restarts as if nothing had happened. The restarts do not matter, so Ana’s chance is her share of the rounds that decide the game: $\\frac{\\frac{1}{3}}{\\frac{1}{3} + \\frac{2}{9}} = \\frac{3}{5}$. The choice $\\frac{5}{9}$ is the chance that the game ends in the first round; $\\frac{1}{2}$ ignores Ana’s advantage of spinning first; $\\frac{2}{3}$ is the chance that a single spin misses red.',
    },
  ],
}

const challenge = [
  {
    q: 'A standard deck of $52$ cards is shuffled and then cut into two piles of $26$ cards, the top half and the bottom half. What is the probability that the two red aces are in the same pile?',
    choices: ['$\\frac{1}{2}$', '$\\frac{25}{51}$', '$\\frac{26}{51}$', '$\\frac{1}{4}$'],
    answer: 1,
    solution: 'Wherever the ace of hearts lands, its pile has $25$ other cards, and by symmetry the ace of diamonds is equally likely to be any of the $51$ other cards in the deck. So the two aces share a pile with probability $\\frac{25}{51}$. The choice $\\frac{1}{2}$ forgets that the first ace has used up one of its pile’s $26$ slots; $\\frac{26}{51}$ is the probability that they are in different piles; $\\frac{1}{4}$ multiplies $\\frac{1}{2} \\cdot \\frac{1}{2}$ as if both aces had to land in one named pile independently.',
  },
  {
    q: 'Five cards are dealt from a shuffled standard deck of $52$ cards. What is the probability that the queen of hearts is one of the five?',
    choices: ['$\\frac{5}{52}$', '$\\frac{1}{52}$', '$\\frac{1}{13}$', '$\\frac{5}{47}$'],
    answer: 0,
    solution: 'Turn the question around: the queen of hearts is equally likely to be in any of the $52$ positions of the shuffled deck, and the hand is made of $5$ of those positions. So the queen is in the hand with probability $\\frac{5}{52}$. Choosing $\\frac{1}{52}$ asks about a single position instead of five; $\\frac{1}{13}$ is the chance that the top card is a queen of any suit; $\\frac{5}{47}$ compares the hand to the leftover pile instead of to the whole deck.',
  },
  {
    q: 'Eight people, including Ana and Ben, sit down at random in the $8$ chairs spaced evenly around a round table, every seating equally likely. What is the probability that Ana sits directly opposite Ben?',
    choices: ['$\\frac{1}{8}$', '$\\frac{1}{4}$', '$\\frac{2}{7}$', '$\\frac{1}{7}$'],
    answer: 3,
    solution: 'Let Ana sit wherever she lands. Exactly one of the remaining $7$ chairs is directly across from her, and by symmetry Ben is equally likely to be in any of those $7$: $\\frac{1}{7}$. The other six people never enter the calculation. The choice $\\frac{1}{8}$ forgets that Ana’s own chair is not available to Ben; $\\frac{2}{7}$ is the chance that Ben is one of Ana’s two neighbors.',
  },
  {
    q: 'Three different numbers are chosen at random from $\\{1, 2, 3, \\ldots, 10\\}$, with every set of three equally likely. What is the probability that no two of the chosen numbers are consecutive integers?',
    choices: ['$\\frac{8}{15}$', '$\\frac{3}{5}$', '$\\frac{7}{15}$', '$\\frac{2}{5}$'],
    answer: 2,
    solution: 'Choose the sample space to be the $\\binom{10}{3} = 120$ sets, then look for a bijection. Write a set with no two consecutive numbers in increasing order as $a < b < c$ and replace it by $a, b - 1, c - 2$: each gap shrinks by one, so the new numbers are three different numbers from $1$ to $8$, and adding back $0, 1, 2$ recovers the original set from any such triple. So the favorable sets number $\\binom{8}{3} = 56$ and the probability is $\\frac{56}{120} = \\frac{7}{15}$. The choice $\\frac{8}{15}$ is the complement; $\\frac{3}{5} = \\frac{72}{120}$ counts the sets containing a consecutive pair as $9$ pairs times $8$ third numbers, which counts a run like $\\{4, 5, 6\\}$ twice; $\\frac{2}{5}$ is one minus that overcount.',
  },
  {
    q: 'Ana rolls a standard six-sided die and Ben rolls a fair four-sided die with faces numbered $1$ through $4$. If the two numbers are equal, both roll again, and they keep doing so until the numbers differ; the player with the larger number then wins. What is the probability that Ana wins?',
    choices: ['$\\frac{7}{10}$', '$\\frac{7}{12}$', '$\\frac{3}{4}$', '$\\frac{1}{2}$'],
    answer: 0,
    solution: 'A tied round changes nothing and the game restarts, so ties do not matter: only the pairs of a single round that are not ties decide the game, and there are $24 - 4 = 20$ of them, all equally likely. Ana’s number is larger in $5 + 4 + 3 + 2 = 14$ of those pairs (count them by Ben’s number $1, 2, 3, 4$), so Ana wins with probability $\\frac{14}{20} = \\frac{7}{10}$. The choice $\\frac{7}{12} = \\frac{14}{24}$ forgets that ties are replayed and leaves them in the denominator; $\\frac{3}{4} = \\frac{18}{24}$ hands the ties to Ana; $\\frac{1}{2}$ pretends the two dice are alike.',
  },
  {
    q: 'Ana flips $3$ fair coins and Ben flips $3$ fair coins. What is the probability that Ana and Ben get the same number of heads?',
    choices: ['$\\frac{1}{8}$', '$\\frac{1}{2}$', '$\\frac{9}{32}$', '$\\frac{5}{16}$'],
    answer: 3,
    solution: 'Reframe by imagining every one of Ben’s coins turned over, so that his heads become tails and his tails become heads; each coin is fair, so the six flips are still equally likely to show any pattern. Ben originally had the same number of heads as Ana exactly when, after the turnover, his heads number $3$ minus Ana’s heads — that is, when the six coins show exactly $3$ heads in total. So the probability is $\\frac{\\binom{6}{3}}{2^6} = \\frac{20}{64} = \\frac{5}{16}$, and adding the four cases $\\frac{1 \\cdot 1 + 3 \\cdot 3 + 3 \\cdot 3 + 1 \\cdot 1}{64}$ agrees. The choice $\\frac{9}{32}$ drops the all-heads and all-tails cases; $\\frac{1}{8}$ demands that Ben match Ana coin by coin; $\\frac{1}{2}$ treats “same” and “different” as equally likely.',
  },
  {
    q: 'A standard deck of $52$ cards is shuffled and turned over one card at a time. What is the probability that the first two aces to appear are both black?',
    choices: ['$\\frac{1}{4}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$'],
    answer: 1,
    solution: 'The $48$ non-aces are scenery: only the order in which the four aces appear among themselves matters, and by symmetry all $4! = 24$ of those orders are equally likely. The first ace is black with probability $\\frac{2}{4}$, and then the second is the other black ace with probability $\\frac{1}{3}$, for $\\frac{2}{4} \\cdot \\frac{1}{3} = \\frac{1}{6}$; equivalently, exactly $1$ of the $\\binom{4}{2} = 6$ equally likely pairs of aces is the black pair. The choice $\\frac{1}{4}$ multiplies $\\frac{1}{2} \\cdot \\frac{1}{2}$ as if the second ace could repeat the first; $\\frac{1}{3}$ stops after the first ace is known to be black; $\\frac{1}{2}$ only asks about the first ace.',
  },
  {
    q: 'Twelve students, including Ana, Ben, and Cal, are divided at random into three groups of four, one group for each of three different projects, with every division equally likely. What is the probability that exactly two of Ana, Ben, and Cal work on the same project, with the third one on a different project?',
    choices: ['$\\frac{12}{55}$', '$\\frac{39}{55}$', '$\\frac{36}{55}$', '$\\frac{16}{55}$'],
    answer: 2,
    solution: 'Place Ana first and count the two cases to avoid; the other nine students never matter. Her group has $3$ empty spots among the $11$ spots left, so Ben joins her with probability $\\frac{3}{11}$, and then Cal joins them both with probability $\\frac{2}{10}$: all three together has probability $\\frac{3}{11} \\cdot \\frac{2}{10} = \\frac{3}{55}$. Ben lands away from Ana with probability $\\frac{8}{11}$, and then Cal avoids both of their groups by taking one of the $4$ spots in the third group out of the $10$ left: all three apart has probability $\\frac{8}{11} \\cdot \\frac{4}{10} = \\frac{16}{55}$. Exactly two together is everything else: $1 - \\frac{3}{55} - \\frac{16}{55} = \\frac{36}{55}$. Adding the pairings directly agrees: Ana with Ben and Cal elsewhere is $\\frac{3}{11} \\cdot \\frac{8}{10} = \\frac{12}{55}$, and the pairings Ana–Cal and Ben–Cal each have the same probability by symmetry, for $3 \\cdot \\frac{12}{55} = \\frac{36}{55}$. That the projects have names makes no difference to any of this. The choice $\\frac{39}{55}$ is the chance that at least two of the three share a project, which wrongly keeps the case of all three together; $\\frac{12}{55}$ counts only the pairing Ana–Ben and forgets the other two pairs; $\\frac{16}{55}$ is the chance that the three land on three different projects.',
  },
  {
    q: 'Three standard dice are rolled. What is the probability that the largest number showing is $6$ and the smallest is $1$?',
    choices: ['$\\frac{5}{36}$', '$\\frac{1}{6}$', '$\\frac{1}{36}$', '$\\frac{1}{18}$'],
    answer: 0,
    solution: 'Count the complement with an overlap. Of the $216$ rolls, $125$ have no $6$ and $125$ have no $1$, but the $64$ rolls with neither a $1$ nor a $6$ sit in both groups. Rolls missing at least one of the two values number $125 + 125 - 64 = 186$, leaving $216 - 186 = 30$ rolls that show both: $\\frac{30}{216} = \\frac{5}{36}$. The choice $\\frac{1}{6} = \\frac{36}{216}$ picks one die to show $6$ and another to show $1$ and lets the third be anything, which double-counts rolls like $1, 6, 6$; $\\frac{1}{36}$ fixes which die shows which value; $\\frac{1}{18}$ only lets two named dice carry the $1$ and the $6$.',
  },
  {
    q: 'A jar holds $4$ red balls and $6$ white balls. Balls are drawn one at a time without replacement, in a random order, until all four red balls have been drawn. What is the probability that this takes at most $8$ draws?',
    choices: ['$\\frac{3}{5}$', '$\\frac{2}{3}$', '$\\frac{2}{15}$', '$\\frac{1}{3}$'],
    answer: 3,
    solution: 'Reframe: the reds are all out within $8$ draws exactly when the last two balls left in the jar are both white. Imagine all $10$ balls laid out in their draw order; by symmetry the two balls in the last two positions are as random as any two, so both are white with probability $\\frac{6}{10} \\cdot \\frac{5}{9} = \\frac{1}{3}$. No casework about where the first three reds fall is needed. The choice $\\frac{3}{5}$ only makes the last ball white, which still allows a red in position $9$; $\\frac{2}{3}$ is the complement, a red among the last two; $\\frac{2}{15}$ is the chance that the last two balls are both red.',
  },
  {
    q: 'A drawer holds $5$ pairs of socks, $10$ socks in all, and no two pairs look alike. Three socks are pulled out at random. What is the probability that at least two of the three socks match?',
    choices: ['$\\frac{1}{5}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$', '$\\frac{1}{9}$'],
    answer: 1,
    solution: 'Count the complement one sock at a time. The first sock can be anything. The second must avoid the first sock’s mate: $\\frac{8}{9}$. The third must avoid the mates of both socks already out: $\\frac{6}{8}$. So no match has probability $\\frac{8}{9} \\cdot \\frac{6}{8} = \\frac{2}{3}$, and a match has probability $1 - \\frac{2}{3} = \\frac{1}{3}$. Stopping at $\\frac{2}{3}$ answers the complement; $\\frac{1}{9}$ is only the chance that the second sock matches the first; $\\frac{1}{5}$ guesses one pair out of five.',
  },
  {
    q: 'A standard deck of $52$ cards is shuffled so that every order is equally likely, and the cards are turned over one at a time until the first ace appears. What is the probability that the very next card is also an ace? (If the first ace is the last card of the deck, there is no next card and the event does not happen.)',
    choices: ['$\\frac{1}{17}$', '$\\frac{4}{51}$', '$\\frac{1}{13}$', '$\\frac{1}{16}$'],
    answer: 2,
    solution: 'Ask first about one named card: what is the chance that the ace of spades sits immediately after the first ace among the other $51$ cards? Take the ace of spades out, shuffle the other $51$, and put it back into one of the $52$ gaps, each equally likely. Exactly one gap is directly after the first ace of those $51$; in any other gap the ace of spades is either not the card following that ace, or it is the first ace itself with some other card after it. So the ace of spades is the card after the first ace with probability $\\frac{1}{52}$, and the gap argument works word for word for each of the other three aces. Only one card can follow the first ace, so the four events never overlap, and the card after the first ace is an ace with probability $\\frac{4}{52} = \\frac{1}{13}$. The choice $\\frac{1}{17} = \\frac{3}{51}$ treats the first ace as a card removed at random, forgetting that every card before it is known to be a non-ace; $\\frac{4}{51}$ makes the same mistake without even removing an ace; $\\frac{1}{16} = \\frac{3}{48}$ ignores where the aces sit entirely.',
  },
]

const worksheet = [
  {
    q: 'Nine students, including Ana and Ben, are in a club. Two of them are chosen at random to give a presentation, with every pair of students equally likely. What is the probability that Ana is chosen and Ben is not?',
    answer: '$\\frac{7}{36}$',
    solution: 'By symmetry Ana is equally likely to be any of the $9$ students, and the chosen pair covers $2$ of them, so she is chosen with probability $\\frac{2}{9}$. Once Ana is in, the other spot is equally likely to go to any of the $8$ remaining students, and $7$ of them are not Ben. So the probability is $\\frac{2}{9} \\cdot \\frac{7}{8} = \\frac{7}{36}$; counting pairs agrees, since $7$ of the $\\binom{9}{2} = 36$ pairs contain Ana without Ben.',
  },
  {
    q: 'Ana and Ben each roll a fair eight-sided die with faces numbered $1$ through $8$. What is the probability that Ana’s number is strictly larger than Ben’s?',
    answer: '$\\frac{7}{16}$',
    solution: 'Of the $64$ equally likely rolls, $8$ are ties. The remaining $56$ split evenly between “Ana higher” and “Ben higher” by symmetry, so Ana is higher in $28$ rolls: $\\frac{28}{64} = \\frac{7}{16}$.',
  },
  {
    q: 'A drawer holds $4$ pairs of gloves, $8$ gloves in all, and each pair is a different color. Two gloves are pulled out at random. What is the probability that they are the two gloves of one pair?',
    answer: '$\\frac{1}{7}$',
    solution: 'The first glove can be anything. Exactly $1$ of the $7$ gloves left is its partner, so the probability is $\\frac{1}{7}$. Counting sets gives the same thing: $4$ matching pairs out of $\\binom{8}{2} = 28$ possible pairs of gloves.',
  },
  {
    q: 'Twelve cards numbered $1$ through $12$ are shuffled and laid out in a row, with every order equally likely. What is the probability that card $1$ is somewhere to the left of card $2$, and card $2$ is somewhere to the left of card $3$?',
    answer: '$\\frac{1}{6}$',
    solution: 'Only the relative order of the cards $1$, $2$, and $3$ matters; the other nine cards are scenery. Those three appear in one of $3! = 6$ orders, all equally likely by symmetry, and exactly one of them reads $1, 2, 3$ from left to right. So the probability is $\\frac{1}{6}$, no matter how many other cards are in the row.',
  },
  {
    q: 'A standard deck of $52$ cards is shuffled and the cards are turned over one at a time. What is the probability that some club is turned over before any ace is? (The ace of clubs counts as an ace, not as a club, for this question.)',
    answer: '$\\frac{3}{4}$',
    solution: 'Only the $12$ non-ace clubs and the $4$ aces matter; the other $36$ cards are scenery. Whichever of those $16$ cards comes first decides the question, and by symmetry each of the $16$ is equally likely to be the first. So the probability is $\\frac{12}{16} = \\frac{3}{4}$.',
  },
  {
    q: 'Ana and Ben play a series that ends as soon as one of them has won $4$ games; each game is won by either player with probability $\\frac{1}{2}$, independently of the others. Ana currently leads $3$ games to $1$. What is the probability that Ben wins the series?',
    answer: '$\\frac{1}{8}$',
    solution: 'Ben needs $3$ more wins before Ana gets even one, so he must win the next three games in a row: $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$. Reframing as “play three more games no matter what” makes it plain that any Ana win among those three ends the series in her favor.',
  },
  {
    q: 'Eight players, including Ana, Ben, Cal, and Dee, are split at random into two teams of four, with every possible split equally likely. What is the probability that Ana and Ben are on the same team and Cal and Dee are also on the same team as each other (which may or may not be Ana’s team)?',
    answer: '$\\frac{1}{5}$',
    solution: 'Place Ana first. Ben is equally likely to fill any of the $7$ other spots, and $3$ of them are on Ana’s team: $\\frac{3}{7}$. Now Cal takes one of the $6$ spots left. With probability $\\frac{2}{6}$ he joins Ana and Ben, and then Dee must take the last spot on that team, $1$ of the $5$ left; with probability $\\frac{4}{6}$ he goes to the other team, and Dee must join him there, $3$ of $5$. So the probability is $\\frac{3}{7}\\left(\\frac{2}{6} \\cdot \\frac{1}{5} + \\frac{4}{6} \\cdot \\frac{3}{5}\\right) = \\frac{3}{7} \\cdot \\frac{14}{30} = \\frac{1}{5}$. Counting splits agrees: of the $\\frac{1}{2}\\binom{8}{4} = 35$ splits, the favorable ones put all four on one team ($1$ split) or pair Ana and Ben with $2$ of the other four players while Cal and Dee take the other side ($\\binom{4}{2} = 6$ splits), giving $\\frac{7}{35}$.',
  },
  {
    q: 'A fair coin is flipped repeatedly until two consecutive flips show the same face, and then the flipping stops. What is the probability that the total number of flips is even?',
    answer: '$\\frac{2}{3}$',
    solution: 'The first flip can be anything. The second flip matches it with probability $\\frac{1}{2}$, stopping at $2$ flips, an even count. Otherwise the third flip matches the second with probability $\\frac{1}{2}$, stopping at $3$ flips, an odd count. Otherwise, with probability $\\frac{1}{4}$, three flips have been used, the last two differ, and the situation is exactly the one after the first flip — the count has moved on by $2$, which does not change whether it ends even or odd. Restarts do not matter, so the answer is the share of the deciding rounds that stop at an even count: $\\frac{\\frac{1}{2}}{\\frac{1}{2} + \\frac{1}{4}} = \\frac{2}{3}$. The geometric sum $\\frac{1}{2} + \\frac{1}{8} + \\frac{1}{32} + \\cdots = \\frac{2}{3}$ agrees.',
  },
  {
    q: 'Three players, Ana, Ben, and Cal, take turns rolling a standard die in that order, over and over, and the first to roll a $6$ wins. What is the probability that Cal wins?',
    answer: '$\\frac{25}{91}$',
    solution: 'In one round of three rolls, Ana wins with probability $\\frac{1}{6}$, Ben with $\\frac{5}{6} \\cdot \\frac{1}{6} = \\frac{5}{36}$, Cal with $\\left(\\frac{5}{6}\\right)^2 \\cdot \\frac{1}{6} = \\frac{25}{216}$, and otherwise the round is wasted and the game restarts. Wasted rounds do not matter, so Cal’s chance is his share of the deciding rounds: $\\frac{25}{216}$ out of $\\frac{36 + 30 + 25}{216} = \\frac{91}{216}$, which is $\\frac{25}{91}$.',
  },
  {
    q: 'Eight teams, including Ana’s team and Ben’s team, are placed at random into a single-elimination bracket: four first-round games, then two semifinals between the four winners, then a final between the two semifinal winners. Every team is equally likely to win any game it plays. What is the probability that Ana’s team and Ben’s team play each other at some point in the tournament?',
    answer: '$\\frac{1}{4}$',
    solution: 'The tournament always has exactly $7$ games, each between one pair of teams. A random bracket with fair games treats every pair of teams the same, so in any particular game each of the $\\binom{8}{2} = 28$ pairs is equally likely to be the pair playing: the chance that a given game is Ana’s team against Ben’s team is $\\frac{1}{28}$. Two teams can meet at most once, so these $7$ events never overlap, and adding them gives $\\frac{7}{28} = \\frac{1}{4}$. Checking round by round agrees: $\\frac{1}{7}$ for the first round, $\\frac{2}{7} \\cdot \\frac{1}{4}$ for a semifinal, and $\\frac{4}{7} \\cdot \\frac{1}{16}$ for the final add to $\\frac{4 + 2 + 1}{28} = \\frac{1}{4}$.',
  },
]

export default {
  id: 'intro-counting-ch09',
  book: 'intro-counting',
  number: 9,
  title: 'Think About It!',
  intro:
    'Some probability problems look like they need a mountain of counting — until you tilt your head and the mountain disappears. This chapter collects four ways of tilting: using symmetry, ignoring the outcomes that cannot change the answer, reframing a game as a simpler one, and picking the sample space that makes the count easy. The clever answer always agrees with the grind; the point is to find it first.',
  sections: [s92],
  challenge,
  worksheet,
}
