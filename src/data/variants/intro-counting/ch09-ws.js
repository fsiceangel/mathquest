// Counting chapter 9 — variations for the printable worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key and no answer
//    index anywhere in this file. Answers copy the base worksheet’s formatting:
//    an exact reduced fraction such as '$\frac{9}{55}$', or a bare whole number
//    such as '$12$' for the reversed items.
//  - Every key was brute-forced in node before the stem was written: direct
//    enumeration of pairs, trios, team splits, relative orders, dice grids, and
//    stopped sequences; the restart and turn-game shares were confirmed by
//    geometric partial sums, and the two bracket keys by exact game counts
//    cross-checked with simulation. Every key matches its pin. Pin deviations:
//    none.
//  - This is the clever-viewpoint chapter, so every solution runs two genuinely
//    independent routes that each end ✓ — one the clever viewpoint (symmetry,
//    ignoring cards that cannot decide the question, reframing the game,
//    restart shares, choosing the sample space), one the grind (a full count,
//    a geometric sum, a round-by-round tally). Route two never re-imports route
//    one’s number. The solution then names the most tempting wrong answer’s
//    trap in CAPS, ending ✗.
//  - Conventions are settled in every stem: shuffles make every order equally
//    likely; simultaneous draws make every set equally likely; team splits say
//    the sizes and that every split is equally likely; dice, coins, and
//    spinners are fair and independent; every stopping rule says exactly what
//    stops the process; people are all different.

const worksheet = [
  // slot 1 — one named in, one named out (symmetry over spots vs. pair counts).
  //          Lanes: 11 members Mia not Noa -> 9/55; both of Elle/Faye in 3 of 10
  //          -> 1/15; reversed: per-member chance 1/6 -> n = 12.
  [
    {
      q: 'A club’s eleven members include Mia and Noa. Two of the members are chosen at random to run a booth at the school fair, with every pair of members equally likely. What is the probability that Mia is chosen and Noa is not?',
      answer: '$\\frac{9}{55}$',
      solution:
        'By symmetry Mia is equally likely to be any of the $11$ members, and the chosen pair covers $2$ of them, so she is chosen with probability $\\frac{2}{11}$. Once Mia is in, the other spot is equally likely to go to any of the $10$ remaining members, and $9$ of them are not Noa, so the probability is $\\frac{2}{11} \\cdot \\frac{9}{10} = \\frac{9}{55}$ ✓. Counting pairs agrees: a favorable pair is Mia together with one of the $9$ members who are neither Mia nor Noa, so $9$ of the $\\binom{11}{2} = 55$ equally likely pairs work, again $\\frac{9}{55}$ ✓. USING $\\frac{1}{11}$ FOR MIA’S CHANCE gives $\\frac{9}{110}$; it lets Mia fill only one of the two booth spots when either spot counts ✗.',
    },
    {
      q: 'A choir’s ten singers include Elle and Faye. Three of the singers are chosen at random to sing the solos, with every set of three equally likely. What is the probability that Elle and Faye are both chosen?',
      answer: '$\\frac{1}{15}$',
      solution:
        'Elle takes one of the $3$ solo spots among $10$ equally likely singers, so she is chosen with probability $\\frac{3}{10}$; given that, Faye claims one of the $2$ remaining spots among the $9$ remaining singers, probability $\\frac{2}{9}$. So the answer is $\\frac{3}{10} \\cdot \\frac{2}{9} = \\frac{1}{15}$ ✓. Counting trios agrees: a favorable trio is Elle, Faye, and any $1$ of the other $8$ singers, so $8$ of the $\\binom{10}{3} = 120$ equally likely trios work, and $\\frac{8}{120} = \\frac{1}{15}$ ✓. SQUARING TO $\\frac{3}{10} \\cdot \\frac{3}{10} = \\frac{9}{100}$ treats the two choices as independent, but Elle’s selection uses up a spot and shrinks the pool for Faye ✗.',
    },
    {
      q: 'Two of a club’s $n$ members are chosen at random to run a booth, with every pair of members equally likely, and each member’s chance of being chosen is exactly $\\frac{1}{6}$. What is $n$?',
      answer: '$12$',
      solution:
        'By symmetry every member is equally likely to be chosen, and the pair covers $2$ of the $n$ members, so each member is chosen with probability $\\frac{2}{n}$. Setting $\\frac{2}{n} = \\frac{1}{6}$ gives $n = 12$ ✓. The complement agrees without reusing that formula: a given member is NOT chosen exactly when both picks come from the other $n - 1$ members, probability $\\frac{\\binom{n-1}{2}}{\\binom{n}{2}} = \\frac{n-2}{n}$, and setting $\\frac{n-2}{n} = \\frac{5}{6}$ again forces $n = 12$ ✓. SETTING $\\frac{1}{n} = \\frac{1}{6}$ gives $6$; it prices only one of the two booth spots when a member can be either pick ✗.',
    },
  ],

  // slot 2 — who rolls higher (tie-splitting symmetry vs. a grid count).
  //          Lanes: two d12 strictly larger -> 11/24; spinners 1-5 at least
  //          -> 3/5; reversed: strict-larger 9/20 -> n = 10.
  [
    {
      q: 'Ana and Ben each roll a fair twelve-sided die with faces numbered $1$ through $12$, independently. What is the probability that Ana’s number is strictly larger than Ben’s?',
      answer: '$\\frac{11}{24}$',
      solution:
        'Of the $12 \\cdot 12 = 144$ equally likely rolls, exactly $12$ are ties. The remaining $132$ split evenly between “Ana higher” and “Ben higher” by symmetry, so Ana is higher in $66$ of them: $\\frac{66}{144} = \\frac{11}{24}$ ✓. The grid count agrees: for each value $b$ that Ben rolls, Ana beats it with $12 - b$ of her faces, and $\\sum_{b=1}^{12}(12 - b) = 66$ of the $144$ cells, again $\\frac{11}{24}$ ✓. CALLING IT $\\frac{1}{2}$ BY SYMMETRY ignores the $12$ tied rolls, which favor neither player and must come out before the split ✗.',
    },
    {
      q: 'Priya and Quinn each spin a spinner with $5$ equal sectors numbered $1$ through $5$, independently. What is the probability that Priya’s number is at least as large as Quinn’s?',
      answer: '$\\frac{3}{5}$',
      solution:
        'Of the $25$ equally likely pairs of spins, $5$ are ties, and the other $20$ split evenly by symmetry, so Priya is strictly higher in $10$. “At least” collects the strict wins AND all the ties: $\\frac{10 + 5}{25} = \\frac{3}{5}$ ✓. Counting cells directly agrees: when Quinn spins $q$, Priya matches or beats it with $6 - q$ of her sectors, and $5 + 4 + 3 + 2 + 1 = 15$ of the $25$ cells, again $\\frac{3}{5}$ ✓. ANSWERING $\\frac{1}{2}$ splits the outcomes evenly, but every one of the $5$ ties belongs to Priya’s side of an “at least” question ✗.',
    },
    {
      q: 'Ana and Ben each roll a fair $n$-sided die with faces numbered $1$ through $n$, independently, and the probability that Ana’s number is strictly larger than Ben’s is exactly $\\frac{9}{20}$. What is $n$?',
      answer: '$10$',
      solution:
        'Ties happen with probability $\\frac{1}{n}$, and the rest splits evenly by symmetry, so Ana is strictly higher with probability $\\frac{1}{2}\\left(1 - \\frac{1}{n}\\right) = \\frac{n-1}{2n}$. Setting $\\frac{n-1}{2n} = \\frac{9}{20}$ gives $20n - 20 = 18n$, so $n = 10$ ✓. Counting cells agrees without the symmetry step: the strictly-larger cells form a staircase of $(n-1) + (n-2) + \\cdots + 1 = \\frac{n(n-1)}{2}$ of the $n^2$ cells, and $\\frac{n-1}{2n} = \\frac{9}{20}$ again forces $n = 10$ ✓. SETTING $\\frac{1}{2} - \\frac{1}{n} = \\frac{9}{20}$ gives $20$; it takes the whole tie share out of Ana’s side, when the ties come off both players evenly and only $\\frac{1}{2n}$ leaves hers ✗.',
    },
  ],

  // slot 3 — drawing a matching pair (partner argument vs. set counts).
  //          Lanes: 7 earring pairs match -> 1/13; 4 shoe pairs left+right
  //          -> 4/7; reversed: match chance 1/15 -> n = 8.
  [
    {
      q: 'A jewelry box holds $7$ pairs of earrings, $14$ earrings in all, and no two pairs are alike. Two earrings are pulled out at random, with every pair of earrings equally likely. What is the probability that they are the two earrings of one pair?',
      answer: '$\\frac{1}{13}$',
      solution:
        'The first earring can be anything. Exactly $1$ of the $13$ earrings still in the box is its partner, so the probability is $\\frac{1}{13}$ ✓. Counting sets agrees: exactly $7$ of the $\\binom{14}{2} = 91$ equally likely two-earring sets are complete pairs, and $\\frac{7}{91} = \\frac{1}{13}$ ✓. ANSWERING $\\frac{1}{14}$ makes the second earring choose among all $14$, but the first earring is already out of the box and cannot be its own partner ✗.',
    },
    {
      q: 'A closet holds $4$ pairs of shoes, $8$ shoes in all. Two shoes are grabbed at random, with every pair of shoes equally likely. What is the probability that one is a left shoe and one is a right shoe (whether or not they come from the same pair)?',
      answer: '$\\frac{4}{7}$',
      solution:
        'The first shoe can be anything. Of the $7$ shoes left in the closet, $4$ are for the opposite foot and only $3$ are for the same foot, so the probability is $\\frac{4}{7}$ ✓. Counting sets agrees: a favorable grab is one of the $4$ left shoes with one of the $4$ right shoes, $4 \\cdot 4 = 16$ of the $\\binom{8}{2} = 28$ equally likely sets, and $\\frac{16}{28} = \\frac{4}{7}$ ✓. ANSWERING $\\frac{1}{2}$ assumes the leftover shoes split evenly between the feet, but the first grab removes one shoe from its own side and leaves $4$ against $3$ ✗.',
    },
    {
      q: 'A drawer holds $n$ pairs of mittens, $2n$ mittens in all, and no two pairs are alike. Two mittens are pulled out at random, with every pair of mittens equally likely, and the probability that they are the two mittens of one pair is exactly $\\frac{1}{15}$. What is $n$?',
      answer: '$8$',
      solution:
        'The first mitten can be anything, and exactly $1$ of the $2n - 1$ mittens left is its partner, so the match probability is $\\frac{1}{2n-1}$. Setting $\\frac{1}{2n-1} = \\frac{1}{15}$ gives $2n - 1 = 15$, so $n = 8$ ✓. Counting sets agrees without the partner argument: the $n$ complete pairs sit among $\\binom{2n}{2} = n(2n-1)$ equally likely sets, so the probability is $\\frac{n}{n(2n-1)}$, and equating that to $\\frac{1}{15}$ again forces $n = 8$ ✓. TREATING THE MATCH CHANCE AS $\\frac{1}{n}$ gives $15$; the second pull chooses among mittens, not among pairs, so the denominator is $2n - 1$, not $n$ ✗.',
    },
  ],

  // slot 4 — relative order of a few named objects (scenery argument vs.
  //          position counts). Lanes: 15 cards chain of four -> 1/24; Ana and
  //          Cal ahead of Ben -> 1/3; derived: 1<2, 2<3, 1<4 -> 1/8.
  [
    {
      q: 'Fifteen cards numbered $1$ through $15$ are shuffled and laid out in a row, with every order equally likely. What is the probability that card $1$ is somewhere to the left of card $2$, card $2$ is somewhere to the left of card $3$, and card $3$ is somewhere to the left of card $4$?',
      answer: '$\\frac{1}{24}$',
      solution:
        'Only the relative order of the cards $1$, $2$, $3$, and $4$ matters; the other eleven cards are scenery. Those four appear in one of $4! = 24$ orders, all equally likely by symmetry, and exactly one order reads $1, 2, 3, 4$ from left to right, so the probability is $\\frac{1}{24}$ ✓. A full count agrees: the four cards occupy some $\\binom{15}{4}$ set of positions, in the required order just $1$ way, with the other cards in $11!$ orders, and $\\frac{\\binom{15}{4} \\cdot 11!}{15!} = \\frac{1}{4!} = \\frac{1}{24}$ ✓. MULTIPLYING THE THREE PAIRWISE CHANCES, $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$, treats the comparisons as independent when knowing $1$ is left of $2$ and $2$ left of $3$ makes “$3$ left of $4$” harder than a coin flip ✗.',
    },
    {
      q: 'Ten runners, including Ana, Ben, and Cal, finish a race in a random order with no ties, with every finishing order equally likely. What is the probability that Ana and Cal both finish ahead of Ben?',
      answer: '$\\frac{1}{3}$',
      solution:
        'Only the relative order of Ana, Ben, and Cal matters; the other seven runners are scenery. By symmetry each of the three is equally likely to finish last among them, and the event says that Ben does, so the probability is $\\frac{1}{3}$ ✓. Listing the $3! = 6$ equally likely relative orders agrees: only Ana–Cal–Ben and Cal–Ana–Ben put both ahead of Ben, and $\\frac{2}{6} = \\frac{1}{3}$ ✓. MULTIPLYING $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$ treats “Ana beats Ben” and “Cal beats Ben” as independent, but the first makes Ben later and so makes the second more likely ✗.',
    },
    {
      q: 'Twelve cards numbered $1$ through $12$ are shuffled and laid out in a row, with every order equally likely. What is the probability that card $1$ is somewhere to the left of card $2$, card $2$ is somewhere to the left of card $3$, and card $1$ is also somewhere to the left of card $4$?',
      answer: '$\\frac{1}{8}$',
      solution:
        'Only the cards $1$, $2$, $3$, and $4$ matter. The chain $1$–$2$–$3$ occupies one of its $3! = 6$ relative orders, probability $\\frac{1}{6}$; given that, card $4$ is equally likely to sit in any of the $4$ slots relative to the chain, and $3$ of the $4$ are to the right of card $1$, so the probability is $\\frac{1}{6} \\cdot \\frac{3}{4} = \\frac{1}{8}$ ✓. Listing agrees: of the $24$ equally likely relative orders of the four cards, those keeping $1 < 2 < 3$ with $4$ anywhere after $1$ are $1234$, $1243$, and $1423$ — three orders — and $\\frac{3}{24} = \\frac{1}{8}$ ✓. MULTIPLYING $\\frac{1}{6} \\cdot \\frac{1}{2} = \\frac{1}{12}$ prices “$1$ left of $4$” as a fair coin, but once $1$ leads a three-card chain it sits early in the row and beats card $4$ three times in four ✗.',
    },
  ],

  // slot 5 — which kind of card shows first (only-the-relevant-cards).
  //          Lanes: spade before either red ace -> 13/15; vowel before X, Y, Z
  //          -> 5/8; derived: both red aces before every non-ace club -> 1/91.
  [
    {
      q: 'A standard deck of $52$ cards is shuffled, with every order equally likely, and the cards are turned over one at a time. What is the probability that some spade is turned over before either of the two red aces appears?',
      answer: '$\\frac{13}{15}$',
      solution:
        'Only the $13$ spades and the $2$ red aces matter; the other $37$ cards are scenery. Whichever of those $15$ cards comes first decides the question, and by symmetry each of the $15$ is equally likely to be first, so the probability is $\\frac{13}{15}$ ✓. Counting orders agrees without any symmetry step: line up just those $15$ cards, all $15!$ orders equally likely; an order leads with a spade in $13 \\cdot 14!$ ways, so the probability is $\\frac{13 \\cdot 14!}{15!} = \\frac{13}{15}$ ✓. COUNTING ALL FOUR ACES gives $\\frac{13}{17}$; the black aces cannot decide this question either way and must be thrown out with the rest of the scenery ✗.',
    },
    {
      q: 'The $26$ letter tiles A through Z, one of each letter, are shuffled with every order equally likely and revealed one at a time. What is the probability that some vowel (A, E, I, O, or U) appears before any of the tiles X, Y, and Z?',
      answer: '$\\frac{5}{8}$',
      solution:
        'Only the $5$ vowel tiles and the $3$ tiles X, Y, Z matter; the other $18$ tiles are scenery. The first of those $8$ tiles to appear decides the question, and each of the $8$ is equally likely to be that first one, so the probability is $\\frac{5}{8}$ ✓. Counting positions agrees: among the $\\binom{8}{3} = 56$ equally likely ways to slot X, Y, Z into the $8$ relative positions, the event fails only when one of them takes the first slot, $\\binom{7}{2} = 21$ ways, so it holds in $\\frac{56 - 21}{56} = \\frac{5}{8}$ of them ✓. USING THE WHOLE ALPHABET gives $\\frac{5}{26}$; the $18$ tiles that are neither vowels nor X, Y, Z can never settle the race and do not belong in the sample space ✗.',
    },
    {
      q: 'A standard deck of $52$ cards is shuffled, with every order equally likely, and the cards are turned over one at a time. What is the probability that both red aces are turned over before any of the $12$ clubs that are not aces?',
      answer: '$\\frac{1}{91}$',
      solution:
        'Only the $2$ red aces and the $12$ non-ace clubs matter; the other $38$ cards are scenery. The event says the top two of those $14$ cards, in relative order, are the two aces: the first is an ace with probability $\\frac{2}{14}$, and then the second with probability $\\frac{1}{13}$, giving $\\frac{2}{14} \\cdot \\frac{1}{13} = \\frac{1}{91}$ ✓. Counting positions agrees: the aces occupy some $2$ of the $14$ relative slots, all $\\binom{14}{2} = 91$ choices equally likely, and only the choice $\\{1, 2\\}$ works: $\\frac{1}{91}$ ✓. SQUARING TO $\\left(\\frac{2}{14}\\right)^2 = \\frac{1}{49}$ lets the same ace lead twice; once one ace is first, only one ace remains among the $13$ cards competing for the second slot ✗.',
    },
  ],

  // slot 6 — series with a score (must-win-straight vs. pretend-play).
  //          Lanes: trailing 0-3 to four wins -> 1/16; 3 heads vs 2 tails
  //          -> 11/16; derived: Ben at 2/3 needs three straight -> 8/27.
  [
    {
      q: 'Cal and Dana play a series that ends as soon as one of them has won $4$ games; each game is won by either player with probability $\\frac{1}{2}$, independently of the others. Cal currently trails, $0$ games to $3$. What is the probability that Cal wins the series?',
      answer: '$\\frac{1}{16}$',
      solution:
        'Dana needs just one more win, so Cal must take the next four games in a row: $\\left(\\frac{1}{2}\\right)^4 = \\frac{1}{16}$ ✓. Enumerating agrees: pretend four more games are played no matter what; of the $16$ equally likely four-game futures, any Dana win ends the series in her favor, so only the single all-Cal future crowns Cal, $\\frac{1}{16}$ ✓. TREATING IT AS “CAL NEEDS $4$ OF THE NEXT $7$” gives $\\frac{\\binom{7}{4} + \\binom{7}{5} + \\binom{7}{6} + \\binom{7}{7}}{2^7} = \\frac{1}{2}$; it forgets Dana needs only one win, so the series never lasts seven more games ✗.',
    },
    {
      q: 'A fair coin is flipped repeatedly, and the flipping stops as soon as it has shown $3$ heads in total or $2$ tails in total. What is the probability that the flipping is stopped by the second tail?',
      answer: '$\\frac{11}{16}$',
      solution:
        'Pretend $3 + 2 - 1 = 4$ flips always happen. Whoever would reach their target first among those four is unchanged by the pretending, and tails reaches $2$ within four flips exactly when the four flips contain at least $2$ tails: $\\frac{\\binom{4}{2} + \\binom{4}{3} + \\binom{4}{4}}{16} = \\frac{11}{16}$ ✓. Listing the stopped sequences agrees: the second tail can land on flip $2$ (TT, probability $\\frac{1}{4}$), flip $3$ (HTT or THT, $\\frac{2}{8}$), or flip $4$ (HHTT, HTHT, or THHT, $\\frac{3}{16}$), and $\\frac{4 + 4 + 3}{16} = \\frac{11}{16}$ ✓. PRETENDING FIVE FLIPS, one per target, gives $\\frac{26}{32} = \\frac{13}{16}$; only $3 + 2 - 1 = 4$ flips are ever needed, and a fifth lets tails reach $2$ in games heads had already won ✗.',
    },
    {
      q: 'Ana and Ben play a series that ends as soon as one of them has won $4$ games. Ana currently leads, $3$ games to $1$, but Ben has found his rhythm: each remaining game is won by Ben with probability $\\frac{2}{3}$, independently of the others. What is the probability that Ben wins the series?',
      answer: '$\\frac{8}{27}$',
      solution:
        'Ana needs just one more win, so Ben must take the next three games in a row: $\\left(\\frac{2}{3}\\right)^3 = \\frac{8}{27}$ ✓. The complement agrees: Ana wins on the next game with probability $\\frac{1}{3}$, on the one after with $\\frac{2}{3} \\cdot \\frac{1}{3} = \\frac{2}{9}$, or on the third with $\\left(\\frac{2}{3}\\right)^2 \\cdot \\frac{1}{3} = \\frac{4}{27}$, totaling $\\frac{9 + 6 + 4}{27} = \\frac{19}{27}$, and $1 - \\frac{19}{27} = \\frac{8}{27}$ ✓. PRETEND-PLAYING FOUR GAMES and asking for at least $3$ Ben wins gives $\\frac{48}{81} = \\frac{16}{27}$; the targets are $3$ and $1$, so only $3 + 1 - 1 = 3$ pretend games are allowed, and a fourth credits Ben with comebacks the series never lets him play ✗.',
    },
  ],

  // slot 7 — two pairs across a team split (sequential seats vs. companion
  //          counts). Lanes: ten into fives, both pairs intact -> 13/63; two
  //          twin pairs in labeled threes -> 1/14; derived: one pair intact,
  //          one split -> 8/35.
  [
    {
      q: 'Ten players, including Ana, Ben, Cal, and Dee, are split at random into two teams of five, with every possible split equally likely. What is the probability that Ana and Ben are on the same team and Cal and Dee are also on the same team as each other (which may or may not be Ana’s team)?',
      answer: '$\\frac{13}{63}$',
      solution:
        'Place Ana first. Ben fills any of the $9$ other spots equally likely, and $4$ are on Ana’s team: $\\frac{4}{9}$. Given that, Cal takes one of the $8$ spots left: with probability $\\frac{3}{8}$ he joins Ana and Ben and Dee must take one of the $2$ remaining spots there out of $7$, and with probability $\\frac{5}{8}$ he starts the other team and Dee must join him, $4$ of $7$. So the probability is $\\frac{4}{9}\\left(\\frac{3}{8} \\cdot \\frac{2}{7} + \\frac{5}{8} \\cdot \\frac{4}{7}\\right) = \\frac{4}{9} \\cdot \\frac{26}{56} = \\frac{13}{63}$ ✓. Counting Ana’s teammates agrees: her $4$ companions are one of $\\binom{9}{4} = 126$ equally likely sets, and a favorable set contains Ben together with both of Cal and Dee ($\\binom{6}{1} = 6$ ways) or with neither ($\\binom{6}{3} = 20$ ways), so $\\frac{26}{126} = \\frac{13}{63}$ ✓. MULTIPLYING THE TWO PAIR CHANCES, $\\frac{4}{9} \\cdot \\frac{4}{9} = \\frac{16}{81}$, treats the pairs as independent, but Ana and Ben together take up seats that push Cal and Dee toward each other ✗.',
    },
    {
      q: 'Nine players, including two sets of twins, are assigned at random to three teams — the Reds, the Blues, and the Golds — of three players each, with every assignment equally likely. What is the probability that each set of twins ends up together on some team?',
      answer: '$\\frac{1}{14}$',
      solution:
        'The first twin’s sibling fills any of the $8$ remaining seats equally likely, and $2$ of them are on the first twin’s team: $\\frac{2}{8} = \\frac{1}{4}$. Given that pair seated together, their team has one seat left, so the second set of twins must share one of the other two teams: the remaining $7$ players fill $7$ seats, and the second pair lands together with probability $2 \\cdot \\frac{3}{7} \\cdot \\frac{2}{6} = \\frac{2}{7}$. So the answer is $\\frac{1}{4} \\cdot \\frac{2}{7} = \\frac{1}{14}$ ✓. Counting assignments agrees: there are $\\binom{9}{3}\\binom{6}{3} = 1680$ ways to fill the labeled teams, and a favorable one picks a team for the first pair ($3$), their third player ($5$), a team for the second pair ($2$), their third player ($4$), the last team being forced: $3 \\cdot 5 \\cdot 2 \\cdot 4 = 120$, and $\\frac{120}{1680} = \\frac{1}{14}$ ✓. SQUARING TO $\\frac{1}{4} \\cdot \\frac{1}{4} = \\frac{1}{16}$ treats the pairs as independent, but the first pair fills two of one team’s three seats and pushes the second pair toward the two untouched teams, where their chance of sharing rises from $\\frac{1}{4}$ to $\\frac{2}{7}$ ✗.',
    },
    {
      q: 'Eight players, including Ana, Ben, Cal, and Dee, are split at random into two teams of four, with every possible split equally likely. What is the probability that Ana and Ben are on the same team but Cal and Dee are on different teams from each other?',
      answer: '$\\frac{8}{35}$',
      solution:
        'Place Ana first. Ben joins her team with probability $\\frac{3}{7}$. Given that, Cal takes one of the $6$ spots left: with probability $\\frac{2}{6}$ he joins Ana’s team, and Dee must avoid its last spot, $4$ of $5$; with probability $\\frac{4}{6}$ he goes to the other team, and Dee must cross over, $2$ of $5$. So the probability is $\\frac{3}{7}\\left(\\frac{2}{6} \\cdot \\frac{4}{5} + \\frac{4}{6} \\cdot \\frac{2}{5}\\right) = \\frac{3}{7} \\cdot \\frac{16}{30} = \\frac{8}{35}$ ✓. Counting Ana’s teammates agrees: of the $\\binom{7}{3} = 35$ equally likely sets of her three companions, a favorable one is Ben, exactly one of Cal and Dee, and one of the other $4$ players: $2 \\cdot 4 = 8$ sets, so $\\frac{8}{35}$ ✓. MULTIPLYING $\\frac{3}{7} \\cdot \\frac{4}{7} = \\frac{12}{49}$ prices “Cal and Dee split” at its unconditional rate, but Ana and Ben sharing a team leaves only $2$ seats beside them against $4$ on the other side, which pushes Cal and Dee together and drops the split from $\\frac{4}{7}$ to $\\frac{8}{15}$ ✗.',
    },
  ],

  // slot 8 — parity of a stopping time (restart share vs. geometric sum).
  //          Lanes: three-letter spinner even count -> 3/5; star spinner odd
  //          count -> 10/19; derived: coin stops within 4 flips -> 7/8.
  [
    {
      q: 'A spinner with $3$ equal sectors labeled A, B, and C is spun repeatedly, with spins independent, until two consecutive spins land on the same letter, and then it stops. What is the probability that the total number of spins is even?',
      answer: '$\\frac{3}{5}$',
      solution:
        'The first spin can be anything. The second matches it with probability $\\frac{1}{3}$, stopping at $2$ spins — even. Otherwise the third matches the second with probability $\\frac{1}{3}$, an unconditional $\\frac{2}{3} \\cdot \\frac{1}{3} = \\frac{2}{9}$ — odd. Otherwise two more spins have passed, the count’s parity is unchanged, and the game is back where it stood after one spin. Restarts do not matter, so the answer is the even share of the deciding pair: $\\frac{\\frac{1}{3}}{\\frac{1}{3} + \\frac{2}{9}} = \\frac{3}{5}$ ✓. The geometric sum agrees: the game stops at spin $k$ with probability $\\left(\\frac{2}{3}\\right)^{k-2} \\cdot \\frac{1}{3}$, and adding the even $k$ gives $\\frac{1}{3}\\left(1 + \\frac{4}{9} + \\frac{16}{81} + \\cdots\\right) = \\frac{1}{3} \\cdot \\frac{9}{5} = \\frac{3}{5}$ ✓. ANSWERING $\\frac{1}{2}$ treats even and odd as symmetric, but the earliest possible stop is at $2$ spins, and that head start belongs entirely to the even side ✗.',
    },
    {
      q: 'A spinner with $10$ equal sectors, exactly one of them marked with a star, is spun repeatedly, with spins independent, until it lands on the star, and then it stops. What is the probability that the total number of spins is odd?',
      answer: '$\\frac{10}{19}$',
      solution:
        'The first spin stops the game with probability $\\frac{1}{10}$ — odd. Otherwise the second stops it, an unconditional $\\frac{9}{10} \\cdot \\frac{1}{10}$ — even. Otherwise two spins are gone, the parity is back where it started, and the game restarts. So the answer is the odd share of the deciding pair: $\\frac{\\frac{1}{10}}{\\frac{1}{10} + \\frac{9}{100}} = \\frac{10}{19}$ ✓. The geometric sum agrees: the star first appears on spin $k$ with probability $\\left(\\frac{9}{10}\\right)^{k-1} \\cdot \\frac{1}{10}$, and adding the odd $k$ gives $\\frac{1}{10}\\left(1 + \\frac{81}{100} + \\left(\\frac{81}{100}\\right)^2 + \\cdots\\right) = \\frac{1}{10} \\cdot \\frac{100}{19} = \\frac{10}{19}$ ✓. ANSWERING $\\frac{1}{2}$ pairs each odd spin with the next even one as equals, but spin $1$ is the single most likely stopping spin and tips the balance odd ✗.',
    },
    {
      q: 'A fair coin is flipped repeatedly until two consecutive flips show the same face, and then the flipping stops. What is the probability that the flipping stops within the first $4$ flips?',
      answer: '$\\frac{7}{8}$',
      solution:
        'The flipping is still going after $4$ flips exactly when the four faces alternate, and only HTHT and THTH of the $16$ equally likely four-flip strings do, so the probability of stopping is $1 - \\frac{2}{16} = \\frac{7}{8}$ ✓. Adding stop times agrees: the game stops at flip $2$ with probability $\\frac{1}{2}$, at flip $3$ with $\\frac{1}{4}$, and at flip $4$ with $\\frac{1}{8}$, and $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} = \\frac{7}{8}$ ✓. COMPUTING $1 - \\left(\\frac{1}{2}\\right)^4 = \\frac{15}{16}$ charges the first flip a survival fee it never owes; only the $3$ later flips must each differ from their predecessor for the game to survive ✗.',
    },
  ],

  // slot 9 — turn games (round shares vs. geometric sums or recursion).
  //          Lanes: three at a 1/4 spinner, third wins -> 9/37; coin, second
  //          wins -> 2/7; derived: die game, first roller -> 36/91.
  [
    {
      q: 'Rai, Sun, and Tam take turns spinning a spinner with $4$ equal sectors, exactly one of them gold, in that order, over and over, with spins independent; the first to land on gold wins. What is the probability that Tam wins?',
      answer: '$\\frac{9}{37}$',
      solution:
        'In one round of three spins, Rai wins with probability $\\frac{1}{4}$, Sun with $\\frac{3}{4} \\cdot \\frac{1}{4} = \\frac{3}{16}$, and Tam with $\\left(\\frac{3}{4}\\right)^2 \\cdot \\frac{1}{4} = \\frac{9}{64}$; otherwise the round is wasted and the game restarts. Wasted rounds do not matter, so Tam’s chance is his share of the deciding rounds: $\\frac{9}{64}$ out of $\\frac{16 + 12 + 9}{64} = \\frac{37}{64}$, which is $\\frac{9}{37}$ ✓. The geometric sum agrees: Tam wins on his $k$-th turn with probability $\\left(\\frac{27}{64}\\right)^{k-1} \\cdot \\frac{9}{64}$, and $\\frac{9/64}{1 - 27/64} = \\frac{9}{37}$ ✓. STOPPING AT $\\frac{9}{64}$, Tam’s first-round chance alone, forgets that a fully wasted round hands him a fresh chance every three spins ✗.',
    },
    {
      q: 'Ula, Vic, and Wren take turns flipping a fair coin in that order, over and over, with flips independent, and the first to flip heads wins. What is the probability that Vic wins?',
      answer: '$\\frac{2}{7}$',
      solution:
        'In one round, Ula wins with probability $\\frac{1}{2}$, Vic with $\\frac{1}{4}$, and Wren with $\\frac{1}{8}$; a fully wasted round restarts the game and does not matter. Vic’s chance is his share of the deciding rounds: $\\frac{1/4}{1/2 + 1/4 + 1/8} = \\frac{2}{7}$ ✓. Recursion agrees: let $u$ be the first player’s winning chance, so $u = \\frac{1}{2} + \\frac{1}{8}u$ (win now, or survive a whole round and be first again), giving $u = \\frac{4}{7}$; Vic wins exactly when Ula flips tails and Vic then stands as the first player of a fresh game, so his chance is $\\frac{1}{2} \\cdot \\frac{4}{7} = \\frac{2}{7}$ ✓. STOPPING AT $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$ counts only Vic’s first-round win and throws away every later round he might take ✗.',
    },
    {
      q: 'Ana, Ben, and Cal take turns rolling a standard die in that order, over and over, with rolls independent, and the first to roll a $6$ wins. What is the probability that Ana wins?',
      answer: '$\\frac{36}{91}$',
      solution:
        'In one round of three rolls, Ana wins with probability $\\frac{1}{6}$, Ben with $\\frac{5}{6} \\cdot \\frac{1}{6} = \\frac{5}{36}$, and Cal with $\\left(\\frac{5}{6}\\right)^2 \\cdot \\frac{1}{6} = \\frac{25}{216}$; wasted rounds restart the game and do not matter. Ana’s chance is her share of the deciding rounds: $\\frac{36}{216}$ out of $\\frac{36 + 30 + 25}{216} = \\frac{91}{216}$, which is $\\frac{36}{91}$ ✓. The geometric sum agrees: Ana wins on her $k$-th roll with probability $\\left(\\frac{125}{216}\\right)^{k-1} \\cdot \\frac{1}{6}$, and $\\frac{1/6}{1 - 125/216} = \\frac{216}{6 \\cdot 91} = \\frac{36}{91}$ ✓. SPLITTING EVENLY AT $\\frac{1}{3}$ ignores the first-mover advantage: rolling before the others means Ana can win rounds that never reach them, and $\\frac{36}{91} > \\frac{30}{91} > \\frac{25}{91}$ ✗.',
    },
  ],

  // slot 10 — knockout meetings (equally-likely-pair game counts vs. rounds).
  //           Lanes: 16-team bracket ever meet -> 1/8; 8 players first-round
  //           pairing -> 1/7; derived: 8-team bracket meet in the final -> 1/28.
  [
    {
      q: 'Sixteen teams, including Ana’s team and Ben’s team, are placed at random into a single-elimination bracket: eight first-round games, then four quarterfinal games among the winners, then two semifinals, then a final — $15$ games in all. Every team is equally likely to win any game it plays. What is the probability that Ana’s team and Ben’s team play each other at some point in the tournament?',
      answer: '$\\frac{1}{8}$',
      solution:
        'A random bracket with fair games treats every pair of teams the same, so in any particular game each of the $\\binom{16}{2} = 120$ pairs is equally likely to be the pair playing: the chance that a given game is Ana’s team against Ben’s is $\\frac{1}{120}$. Two teams can meet at most once, so the $15$ events never overlap, and adding them gives $\\frac{15}{120} = \\frac{1}{8}$ ✓. A round-by-round tally agrees: they meet in round one with probability $\\frac{1}{15}$; in the quarterfinals with $\\frac{2}{15} \\cdot \\frac{1}{4}$ (same group of four, not paired, both win once); in the semifinals with $\\frac{4}{15} \\cdot \\frac{1}{16}$; and in the final with $\\frac{8}{15} \\cdot \\frac{1}{64}$ — and $\\frac{8 + 4 + 2 + 1}{120} = \\frac{1}{8}$ ✓. USING ORDERED PAIRS, $\\frac{15}{16 \\cdot 15} = \\frac{1}{16}$, halves the answer; a game is an unordered pair of teams, so the denominator is $\\binom{16}{2}$, not $16 \\cdot 15$ ✗.',
    },
    {
      q: 'Eight players, including Ana and Ben, are paired off at random for the first round of a knockout, with every way of splitting the eight into four pairs equally likely. What is the probability that Ana plays Ben in the first round?',
      answer: '$\\frac{1}{7}$',
      solution:
        'By symmetry Ana’s opponent is equally likely to be any of the other $7$ players, so the probability is $\\frac{1}{7}$ ✓. Counting pairings agrees: the eight players split into four pairs in $7 \\cdot 5 \\cdot 3 \\cdot 1 = 105$ ways, and those pairing Ana with Ben leave the other six to split freely, $5 \\cdot 3 \\cdot 1 = 15$ ways, so $\\frac{15}{105} = \\frac{1}{7}$ ✓. ANSWERING $\\frac{1}{8}$ divides by all eight players, but Ana cannot be drawn against herself; her opponent comes from a pool of $7$ ✗.',
    },
    {
      q: 'Eight teams, including Ana’s team and Ben’s team, are placed at random into a single-elimination bracket: four first-round games, then two semifinals, then a final. Every team is equally likely to win any game it plays. What is the probability that Ana’s team and Ben’s team meet in the final?',
      answer: '$\\frac{1}{28}$',
      solution:
        'They can only meet in the final from opposite halves of the bracket: Ben’s team lands in the other half with probability $\\frac{4}{7}$, and then each team must win its two games, probability $\\left(\\frac{1}{2}\\right)^2 \\cdot \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{16}$, giving $\\frac{4}{7} \\cdot \\frac{1}{16} = \\frac{1}{28}$ ✓. The equally-likely-pair viewpoint agrees in one line: a random bracket with fair games treats all $\\binom{8}{2} = 28$ pairs of teams the same, so each pair is equally likely to be the pair contesting the final, and the probability is $\\frac{1}{28}$ ✓. MULTIPLYING EACH TEAM’S $\\frac{1}{4}$ CHANCE of reaching the final gives $\\frac{1}{16}$; the two runs are not independent, since teams in the same half must knock each other out before the final ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 9,
  worksheet,
}
