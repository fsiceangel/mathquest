// Counting chapter 7 — variations for §7.4 Counting Techniques in Probability Problems.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Ten slots, three variations each: v1 keeps the technique with fresh
//    numbers and a fresh scenario, v2 keeps the technique but counts different
//    objects, v3 reverses or extends the base question.
//  - Answer indices are derived from the base indices 2 0 3 1 2 3 0 1 3 2 by
//    v1 = (b+1)%4, v2 = (b+3)%4, v3 = (b+2)%4, giving the rows
//    v1: 3 1 0 2 3 0 1 2 0 3, v2: 1 3 2 0 1 2 3 0 2 1, v3: 0 2 1 3 0 1 2 3 1 0.
//  - Every key was brute-forced in node before the stem was written, by direct
//    enumeration of the sample space: all subsets of the marble, card, tile,
//    pen, and committee pools; full permutation lists for the row-of-people,
//    shelf, lane, and letter-tile items, with repeated letters deduplicated so
//    each distinct arrangement counts once; and every team or playlist split
//    listed as a subset of the twelve or ten members. Every key matches its
//    pin. Pin deviations: none.
//  - This is the section where the numerator and the denominator are each a
//    counting problem, so every solution runs two genuinely independent routes
//    that each end ✓ — typically one in the unordered currency (subsets,
//    $\binom{n}{k}$, which positions a marked pair takes) and one in the
//    ordered currency (a full $n!$ or $n(n-1)\cdots$ count, a chain of draws,
//    or a relabeled-tiles count) — and route two never re-imports route one’s
//    number. Each wrong choice is then named in CAPS, ending ✗, and every
//    attribution is an arithmetically true statement about that number.
//  - Conventions are settled in every stem: everyone and everything is
//    different unless the stem says the objects are identical; drawing "at the
//    same time" means every set of that size is equally likely; a random order
//    means all $n!$ orders are equally likely; letter tiles carry one letter
//    each, repeats are identical, and the equally likely outcomes are the
//    distinct arrangements; every split names the two groups and their sizes.

const s74 = [
  // slot 1 — a subset drawn all from one group.
  //          Lanes: 3 of 9 all dancers -> 1/21; 2 of 12 both blue -> 7/22;
  //          derived: the base group, one of each kind -> 8/15.
  [
    {
      q: 'Nine finalists — $5$ singers and $4$ dancers, all nine different people — are waiting backstage, and $3$ of them are chosen at random to perform first, every set of three equally likely. What is the probability that all three chosen are dancers?',
      choices: ['$\\frac{4}{9}$', '$\\frac{5}{42}$', '$\\frac{1}{126}$', '$\\frac{1}{21}$'],
      answer: 3,
      solution:
        'Count in the unordered currency. The equally likely outcomes are the $\\binom{9}{3} = 84$ sets of three finalists, and an all-dancer set is three of the four dancers, $\\binom{4}{3} = 4$ of them: $\\frac{4}{84} = \\frac{1}{21}$ ✓. The ordered currency gives the same fraction without borrowing a single number from that count: imagine the three performers named one after another, so the outcomes are the $9 \\cdot 8 \\cdot 7 = 504$ ordered triples of different finalists, and the ones that are all dancers number $4 \\cdot 3 \\cdot 2 = 24$, giving $\\frac{24}{504} = \\frac{1}{21}$ ✓. READING OFF A SINGLE FINALIST gives $\\frac{4}{9}$, the chance that one randomly chosen person is a dancer ✗. COUNTING THE ALL-SINGER SETS instead gives $\\binom{5}{3} = 10$ of $84$, or $\\frac{5}{42}$ ✗. MIXING THE TWO CURRENCIES — the $4$ unordered sets on top, the $504$ ordered triples below — gives $\\frac{1}{126}$ ✗.',
    },
    {
      q: 'A drawer holds $7$ blue pens and $5$ black pens, all $12$ pens different. Two pens are taken out at the same time, every pair of pens equally likely. What is the probability that both are blue?',
      choices: ['$\\frac{7}{12}$', '$\\frac{7}{22}$', '$\\frac{49}{144}$', '$\\frac{5}{33}$'],
      answer: 1,
      solution:
        'The equally likely outcomes are the $\\binom{12}{2} = 66$ pairs of pens, and a blue pair is two of the seven blue pens, $\\binom{7}{2} = 21$ of them: $\\frac{21}{66} = \\frac{7}{22}$ ✓. Drawing one pen and then the other instead gives an ordered sample space of $12 \\cdot 11 = 132$ pairs, of which $7 \\cdot 6 = 42$ are blue then blue, so $\\frac{42}{132} = \\frac{7}{22}$ ✓ — the same answer, because the numerator and the denominator were both doubled. READING OFF A SINGLE PEN gives $\\frac{7}{12}$ ✗. TREATING THE TWO PENS AS INDEPENDENT DRAWS WITH REPLACEMENT gives $\\left(\\frac{7}{12}\\right)^2 = \\frac{49}{144}$, which allows the same pen to be counted twice ✗. ANSWERING “BOTH BLACK” gives $\\binom{5}{2} = 10$ of $66$, or $\\frac{5}{33}$ ✗.',
    },
    {
      q: 'Two of the $10$ people in a group of $6$ women and $4$ men, all ten different, are chosen at random at the same time to carry a banner, every pair of people equally likely. What is the probability that one of the two chosen is a woman and the other is a man?',
      choices: ['$\\frac{8}{15}$', '$\\frac{4}{15}$', '$\\frac{1}{3}$', '$\\frac{12}{25}$'],
      answer: 0,
      solution:
        'The equally likely outcomes are the $\\binom{10}{2} = 45$ pairs. A mixed pair pairs one of the $6$ women with one of the $4$ men, $6 \\cdot 4 = 24$ pairs: $\\frac{24}{45} = \\frac{8}{15}$ ✓. Switching to ordered draws settles it independently: there are $10 \\cdot 9 = 90$ ordered ways to pick a first and a second person, and a mixed result comes as woman then man, $6 \\cdot 4 = 24$ ways, or man then woman, $4 \\cdot 6 = 24$ ways, for $48$ of the $90$, or $\\frac{8}{15}$ ✓. MIXING THE CURRENCIES — the $24$ unordered mixed pairs over the $90$ ordered draws — gives $\\frac{4}{15}$ ✗. ANSWERING “BOTH WOMEN” gives $\\binom{6}{2} = 15$ of $45$, or $\\frac{1}{3}$ ✗. TREATING THE TWO PICKS AS INDEPENDENT WITH REPLACEMENT gives $2 \\cdot \\frac{6}{10} \\cdot \\frac{4}{10} = \\frac{12}{25}$ ✗.',
    },
  ],

  // slot 2 — one marked object landing in one named position of a random row.
  //          Lanes: gold cup in the middle of 7 -> 1/7; Mira off the ends of 6 -> 2/3;
  //          reversed: middle probability 1/9 pins the shelf size -> 9.
  [
    {
      q: 'Seven different trophies, one of which is the gold cup, are lined up on a shelf in random order, all $7! = 5040$ orders equally likely. What is the probability that the gold cup ends up in the middle — the fourth — position?',
      choices: ['$\\frac{2}{7}$', '$\\frac{1}{7}$', '$\\frac{1}{5040}$', '$\\frac{6}{7}$'],
      answer: 1,
      solution:
        'Count the orders. Pin the gold cup to the fourth spot; the other six trophies fill the remaining six spots in $6! = 720$ ways, so $720$ of the $5040$ orders work: $\\frac{720}{5040} = \\frac{1}{7}$ ✓. A symmetry route never touches a factorial: a random order treats the seven shelf positions alike, so the gold cup is equally likely to end up in any one of the $7$ positions, and the middle one is a single position out of seven, $\\frac{1}{7}$ ✓. ANSWERING “AT EITHER END” gives $2$ of the $7$ positions, or $\\frac{2}{7}$ ✗. COUNTING ONE SINGLE ARRANGEMENT of all seven trophies gives $\\frac{1}{5040}$, far stricter than the question ✗. ANSWERING THE COMPLEMENT — the gold cup anywhere but the middle — gives $\\frac{6}{7}$ ✗.',
    },
    {
      q: 'Six friends, one of whom is Mira, stand in a line in random order, all $6! = 720$ orders equally likely. What is the probability that Mira is not at either end of the line?',
      choices: ['$\\frac{1}{3}$', '$\\frac{1}{6}$', '$\\frac{5}{6}$', '$\\frac{2}{3}$'],
      answer: 3,
      solution:
        'A random order shows no preference among the six spots, so Mira is equally likely to be in any one of them. Four of the six spots — the second, third, fourth, and fifth — are not ends, so the probability is $\\frac{4}{6} = \\frac{2}{3}$ ✓. Counting the orders confirms it from scratch: choose one of the $4$ interior spots for Mira and arrange the other five friends in the remaining spots, $5! = 120$ ways each, for $4 \\cdot 120 = 480$ orders out of $720$, or $\\frac{2}{3}$ ✓. ANSWERING “AT AN END” gives the two end spots, $\\frac{2}{6} = \\frac{1}{3}$ ✗. PINNING MIRA TO ONE PARTICULAR INTERIOR SPOT gives $\\frac{1}{6}$, one spot instead of four ✗. BARRING ONLY THE LEFT END leaves $5$ of the $6$ spots, $\\frac{5}{6}$ ✗.',
    },
    {
      q: 'A shelf holds $n$ different books, one of which is a dictionary, placed in random order with all $n!$ orders equally likely. The number $n$ is odd, so the shelf has one exact middle position, and the probability that the dictionary lands in that middle position is $\\frac{1}{9}$. What is $n$?',
      choices: ['$4$', '$10$', '$9$', '$18$'],
      answer: 2,
      solution:
        'Set up the count. Pinning the dictionary to the middle spot leaves $(n-1)!$ orders for the other books out of $n!$ in all, so the probability is $\\frac{(n-1)!}{n!} = \\frac{1}{n}$; setting $\\frac{1}{n} = \\frac{1}{9}$ gives $n = 9$ ✓. Checking the candidates one by one reaches the same place independently: a shelf of $7$ books puts the dictionary in the fourth spot with probability $\\frac{1}{7}$, a shelf of $9$ puts it in the fifth spot with probability $\\frac{1}{9}$, and a shelf of $11$ gives $\\frac{1}{11}$ — the chance strictly shrinks as the shelf grows, so $9$ is the only odd size that produces $\\frac{1}{9}$ ✓. ANSWERING THE NUMBER OF BOOKS ON EACH SIDE of the dictionary on a nine-book shelf gives $4$ ✗. SETTING THE COUNT OF THE OTHER BOOKS TO $9$ gives $n = 10$, which is even and has no exact middle position ✗. READING THE $\\frac{1}{9}$ AS TWO CHANCES OUT OF $n$ gives $\\frac{2}{n} = \\frac{1}{9}$ and $n = 18$, again an even shelf with no middle position ✗.',
    },
  ],

  // slot 3 — a committee avoiding a marked subgroup, and its complement.
  //          Lanes: 4 of 11 with no goalkeeper -> 7/33; 3 of 12 with no wild card -> 7/44;
  //          derived: the base club, at least one officer -> 5/6.
  [
    {
      q: 'A team of $4$ is chosen at random from a squad of $11$ different players, $3$ of whom are goalkeepers, every set of four players equally likely. What is the probability that the team contains no goalkeeper?',
      choices: ['$\\frac{7}{33}$', '$\\frac{8}{11}$', '$\\frac{28}{55}$', '$\\frac{26}{33}$'],
      answer: 0,
      solution:
        'The equally likely outcomes are the $\\binom{11}{4} = 330$ teams. A goalkeeper-free team is four of the $11 - 3 = 8$ outfield players, $\\binom{8}{4} = 70$ teams: $\\frac{70}{330} = \\frac{7}{33}$ ✓. The ordered currency confirms it independently: naming the four players one at a time gives $11 \\cdot 10 \\cdot 9 \\cdot 8 = 7920$ equally likely ordered selections, of which $8 \\cdot 7 \\cdot 6 \\cdot 5 = 1680$ use only outfield players, and $\\frac{1680}{7920} = \\frac{7}{33}$ ✓. READING OFF A SINGLE PLAYER gives $\\frac{8}{11}$ ✗. ANSWERING “EXACTLY ONE GOALKEEPER” gives $\\binom{3}{1}\\binom{8}{3} = 3 \\cdot 56 = 168$ of $330$, or $\\frac{28}{55}$ ✗. ANSWERING THE COMPLEMENT — at least one goalkeeper — gives $\\frac{330 - 70}{330} = \\frac{26}{33}$ ✗.',
    },
    {
      q: 'A hand of $3$ cards is dealt at random from a pile of $12$ different cards, $5$ of which are wild, every hand equally likely. What is the probability that the hand contains no wild card?',
      choices: ['$\\frac{7}{12}$', '$\\frac{37}{44}$', '$\\frac{7}{44}$', '$\\frac{7}{264}$'],
      answer: 2,
      solution:
        'The equally likely outcomes are the $\\binom{12}{3} = 220$ hands, and a wild-free hand is three of the $12 - 5 = 7$ ordinary cards, $\\binom{7}{3} = 35$ hands: $\\frac{35}{220} = \\frac{7}{44}$ ✓. Dealing the cards one at a time reaches the same value by a different road: the first card is ordinary with probability $\\frac{7}{12}$, then $\\frac{6}{11}$, then $\\frac{5}{10}$, and $\\frac{7}{12} \\cdot \\frac{6}{11} \\cdot \\frac{5}{10} = \\frac{210}{1320} = \\frac{7}{44}$ ✓. READING OFF A SINGLE CARD gives $\\frac{7}{12}$ ✗. ANSWERING THE COMPLEMENT — at least one wild card — gives $\\frac{220 - 35}{220} = \\frac{37}{44}$ ✗. MIXING THE CURRENCIES — the $35$ unordered hands over the $12 \\cdot 11 \\cdot 10 = 1320$ ordered deals — gives $\\frac{7}{264}$ ✗.',
    },
    {
      q: 'A club has $10$ different members, $4$ of whom are officers. A committee of $3$ members is chosen at random, every set of three equally likely. What is the probability that the committee contains at least one officer?',
      choices: ['$\\frac{1}{6}$', '$\\frac{5}{6}$', '$\\frac{1}{2}$', '$\\frac{98}{125}$'],
      answer: 1,
      solution:
        'There are $\\binom{10}{3} = 120$ equally likely committees. “At least one officer” spreads over three cases, but its opposite is one case: a committee of three non-officers, $\\binom{6}{3} = 20$ of them. So $120 - 20 = 100$ committees qualify, and the probability is $\\frac{100}{120} = \\frac{5}{6}$ ✓. Counting the cases head-on agrees without using the complement: exactly one officer is $\\binom{4}{1}\\binom{6}{2} = 4 \\cdot 15 = 60$, exactly two is $\\binom{4}{2}\\binom{6}{1} = 6 \\cdot 6 = 36$, and all three is $\\binom{4}{3} = 4$, adding to $60 + 36 + 4 = 100$ committees, or $\\frac{5}{6}$ ✓. ANSWERING “NO OFFICER” gives $\\frac{20}{120} = \\frac{1}{6}$ ✗. STOPPING AFTER THE EXACTLY-ONE-OFFICER CASE gives $\\frac{60}{120} = \\frac{1}{2}$ ✗. TREATING THE THREE SEATS AS INDEPENDENT PICKS WITH REPLACEMENT gives $1 - \\left(\\frac{3}{5}\\right)^3 = \\frac{98}{125}$ ✗.',
    },
  ],

  // slot 4 — random arrangements with the end positions restricted.
  //          Lanes: GARDEN vowel at both ends -> 1/15; red runners in lanes 1 and 7 -> 1/7;
  //          derived: BREAD begins with a vowel but does not end with one -> 3/10.
  [
    {
      q: 'The $6$ letters of the word GARDEN are written on identical tiles, one letter per tile, and arranged in a row in random order, all $6! = 720$ orders equally likely. What is the probability that the arrangement begins with a vowel and ends with a vowel?',
      choices: ['$\\frac{1}{3}$', '$\\frac{1}{30}$', '$\\frac{1}{15}$', '$\\frac{1}{9}$'],
      answer: 2,
      solution:
        'GARDEN has exactly two vowels, A and E, and four consonants. Fill the picky spots first: the first letter can be either vowel, $2$ ways, the last letter must be the other vowel, $1$ way, and G, R, D, N fill the middle four spots in $4! = 24$ ways, for $2 \\cdot 1 \\cdot 24 = 48$ arrangements out of $720$: $\\frac{48}{720} = \\frac{1}{15}$ ✓. A route that never counts an arrangement at all: only where A and E land matters, and the pair of spots they occupy is equally likely to be any of the $\\binom{6}{2} = 15$ pairs of positions. Exactly one of those pairs is the first-and-last pair, so the probability is $\\frac{1}{15}$ ✓. LOOKING ONLY AT THE FIRST LETTER gives $\\frac{2}{6} = \\frac{1}{3}$ ✗. FORGETTING THAT A AND E CAN SWAP ENDS counts $1 \\cdot 1 \\cdot 24 = 24$ arrangements of $720$, or $\\frac{1}{30}$ ✗. MULTIPLYING TWO SEPARATE END CHANCES gives $\\frac{2}{6} \\cdot \\frac{2}{6} = \\frac{1}{9}$, which pretends the same vowel could sit at both ends ✗.',
    },
    {
      q: 'Seven runners, three of whom wear red, line up in random order in $7$ numbered lanes, one runner per lane, all seven runners different and all $7! = 5040$ orders equally likely. What is the probability that lane $1$ and lane $7$ are both taken by red-wearing runners?',
      choices: ['$\\frac{1}{7}$', '$\\frac{3}{7}$', '$\\frac{9}{49}$', '$\\frac{1}{14}$'],
      answer: 0,
      solution:
        'Fill the two picky lanes first: lane $1$ can go to any of the $3$ red-wearing runners and lane $7$ to either of the $2$ remaining ones, $3 \\cdot 2 = 6$ ways, and the other five runners fill lanes $2$ through $6$ in $5! = 120$ ways, for $6 \\cdot 120 = 720$ line-ups out of $5040$: $\\frac{720}{5040} = \\frac{1}{7}$ ✓. A count that ignores the individual runners: the set of three lanes taken by red-wearing runners is equally likely to be any of the $\\binom{7}{3} = 35$ three-lane sets, and the sets containing both lane $1$ and lane $7$ are fixed by their third lane, $5$ choices, so $\\frac{5}{35} = \\frac{1}{7}$ ✓. CHECKING ONLY LANE $1$ gives $\\frac{3}{7}$ ✗. MULTIPLYING TWO COPIES OF $\\frac{3}{7}$ gives $\\frac{9}{49}$, which lets the same runner fill both lanes ✗. CHOOSING WHICH TWO REDS TAKE THE END LANES WITHOUT ORDERING THEM counts $\\binom{3}{2} \\cdot 5! = 3 \\cdot 120 = 360$ line-ups of $5040$, or $\\frac{1}{14}$ ✗.',
    },
    {
      q: 'The $5$ letters of the word BREAD are written on identical tiles, one letter per tile, and arranged in a row in random order, all $5! = 120$ orders equally likely. What is the probability that the arrangement begins with a vowel but does not end with a vowel?',
      choices: ['$\\frac{2}{5}$', '$\\frac{1}{10}$', '$\\frac{3}{5}$', '$\\frac{3}{10}$'],
      answer: 3,
      solution:
        'BREAD has the vowels E and A and the consonants B, R, D. Fill the two named spots first: the first letter is one of the $2$ vowels, the last is one of the $3$ consonants, and the remaining three letters fill the middle in $3! = 6$ ways, for $2 \\cdot 3 \\cdot 6 = 36$ arrangements out of $120$: $\\frac{36}{120} = \\frac{3}{10}$ ✓. A positions-only route settles it independently: only where E and A land matters, and their pair of spots is equally likely to be any of the $\\binom{5}{2} = 10$ position pairs. The condition asks for a pair that contains position $1$ but not position $5$, which leaves $\\{1,2\\}$, $\\{1,3\\}$, and $\\{1,4\\}$ — $3$ of the $10$ pairs, or $\\frac{3}{10}$ ✓. ANSWERING “BEGINS WITH A VOWEL” alone gives $\\frac{2}{5}$ ✗. ANSWERING “BEGINS AND ENDS WITH A VOWEL” gives $\\frac{1}{10}$, the opposite ending condition ✗. ANSWERING “DOES NOT END WITH A VOWEL” alone gives $\\frac{3}{5}$ ✗.',
    },
  ],

  // slot 5 — parity of a sum or product of a simultaneous draw.
  //          Lanes: two of nine cards, odd sum -> 5/9; three of eight tiles, even sum -> 1/2;
  //          derived: the base five cards, even product -> 7/10.
  [
    {
      q: 'Nine cards numbered $1$ through $9$ are shuffled, and two of them are drawn at the same time, every pair of cards equally likely. What is the probability that the sum of the two numbers is odd?',
      choices: ['$\\frac{4}{9}$', '$\\frac{1}{2}$', '$\\frac{5}{18}$', '$\\frac{5}{9}$'],
      answer: 3,
      solution:
        'The equally likely outcomes are the $\\binom{9}{2} = 36$ pairs of cards. A sum is odd exactly when one card is odd and the other even; there are $5$ odd cards and $4$ even ones, so $5 \\cdot 4 = 20$ pairs qualify: $\\frac{20}{36} = \\frac{5}{9}$ ✓. In the ordered currency the sample space is the $9 \\cdot 8 = 72$ ordered draws, and an odd sum comes as odd then even, $5 \\cdot 4 = 20$ ways, or even then odd, $4 \\cdot 5 = 20$ ways, for $40$ of $72$, or $\\frac{5}{9}$ ✓. ANSWERING “EVEN SUM” gives $\\binom{5}{2} + \\binom{4}{2} = 10 + 6 = 16$ of $36$, or $\\frac{4}{9}$ ✗. ASSUMING ODD AND EVEN SUMS ARE EQUALLY LIKELY gives $\\frac{1}{2}$, which would need equally many odd and even cards ✗. MIXING THE CURRENCIES — the $20$ unordered pairs over the $72$ ordered draws — gives $\\frac{5}{18}$ ✗.',
    },
    {
      q: 'A bag holds $8$ tiles numbered $1$ through $8$. Three tiles are drawn at the same time, every set of three tiles equally likely. What is the probability that the sum of the three numbers is even?',
      choices: ['$\\frac{1}{14}$', '$\\frac{1}{2}$', '$\\frac{3}{7}$', '$\\frac{1}{12}$'],
      answer: 1,
      solution:
        'The equally likely outcomes are the $\\binom{8}{3} = 56$ sets, and there are $4$ odd tiles and $4$ even ones. A sum of three numbers is even exactly when an even number of them are odd, so either no odd tiles — all three even, $\\binom{4}{3} = 4$ sets — or two odd and one even, $\\binom{4}{2}\\binom{4}{1} = 6 \\cdot 4 = 24$ sets: $4 + 24 = 28$ of $56$, or $\\frac{1}{2}$ ✓. The ordered currency settles it with its own numbers: drawing the three tiles one after another gives $8 \\cdot 7 \\cdot 6 = 336$ equally likely ordered triples of different tiles. All three even is $4 \\cdot 3 \\cdot 2 = 24$ of those triples, and two odd with one even is $3$ choices for which draw brings the even tile, $4$ even tiles for it, and $4 \\cdot 3 = 12$ ordered ways to fill the other two draws with odd tiles, or $3 \\cdot 4 \\cdot 12 = 144$ triples; together $24 + 144 = 168$ of the $336$, or $\\frac{1}{2}$ ✓. COUNTING ONLY THE ALL-EVEN SETS gives $\\frac{4}{56} = \\frac{1}{14}$ ✗. COUNTING ONLY THE TWO-ODD-ONE-EVEN SETS gives $\\frac{24}{56} = \\frac{3}{7}$ ✗. MIXING THE CURRENCIES — the $28$ unordered sets over the $8 \\cdot 7 \\cdot 6 = 336$ ordered draws — gives $\\frac{1}{12}$ ✗.',
    },
    {
      q: 'Five cards numbered $1$ through $5$ are shuffled, and two of them are drawn at the same time, every pair of cards equally likely. What is the probability that the product of the two numbers is even?',
      choices: ['$\\frac{7}{10}$', '$\\frac{3}{10}$', '$\\frac{16}{25}$', '$\\frac{1}{2}$'],
      answer: 0,
      solution:
        'There are $\\binom{5}{2} = 10$ equally likely pairs. A product of two whole numbers is odd only when both factors are odd, and the odd cards are $1$, $3$, $5$, giving $\\binom{3}{2} = 3$ odd-product pairs; the rest have an even product, so the probability is $1 - \\frac{3}{10} = \\frac{7}{10}$ ✓. Counting the even-product pairs directly agrees: the product is even as soon as an even card is drawn, which happens with exactly one even card, $\\binom{2}{1}\\binom{3}{1} = 2 \\cdot 3 = 6$ pairs, or with both even cards, $\\binom{2}{2} = 1$ pair, for $7$ of the $10$ pairs, or $\\frac{7}{10}$ ✓. ANSWERING “ODD PRODUCT” gives $\\frac{3}{10}$ ✗. TREATING THE TWO DRAWS AS INDEPENDENT WITH REPLACEMENT gives $1 - \\left(\\frac{3}{5}\\right)^2 = \\frac{16}{25}$, which allows the same card twice ✗. GUESSING THAT EVEN AND ODD PRODUCTS ARE EQUALLY LIKELY gives $\\frac{1}{2}$ ✗.',
    },
  ],

  // slot 6 — committees split by how many come from each group.
  //          Lanes: 3 of 4+6 with exactly one coach -> 1/2; 4 of 6+5 with exactly three books -> 10/33;
  //          derived: the base pool, at least three teachers -> 5/33.
  [
    {
      q: 'A panel of $3$ is chosen at random from $4$ coaches and $6$ athletes, all ten people different and every set of three equally likely. What is the probability that the panel has exactly $1$ coach?',
      choices: ['$\\frac{1}{2}$', '$\\frac{19}{120}$', '$\\frac{2}{5}$', '$\\frac{3}{10}$'],
      answer: 0,
      solution:
        'There are $\\binom{10}{3} = 120$ equally likely panels. A panel with exactly one coach is built by choosing the coach, $\\binom{4}{1} = 4$ ways, and then two of the six athletes, $\\binom{6}{2} = 15$ ways, and those choices multiply: $4 \\cdot 15 = 60$ panels, or $\\frac{60}{120} = \\frac{1}{2}$ ✓. Counting every other case instead reaches the same place: no coach at all is $\\binom{6}{3} = 20$ panels, two coaches is $\\binom{4}{2}\\binom{6}{1} = 6 \\cdot 6 = 36$, and three coaches is $\\binom{4}{3} = 4$, adding to $20 + 36 + 4 = 60$, so the panels left over — exactly the one-coach panels — number $120 - 60 = 60$ and the probability is $\\frac{1}{2}$ ✓. ADDING THE TWO COUNTS instead of multiplying gives $4 + 15 = 19$ of $120$, or $\\frac{19}{120}$ ✗. READING OFF A SINGLE PERSON gives $\\frac{4}{10} = \\frac{2}{5}$ ✗. ANSWERING “EXACTLY ONE ATHLETE” gives $\\binom{6}{1}\\binom{4}{2} = 6 \\cdot 6 = 36$ of $120$, or $\\frac{3}{10}$ ✗.',
    },
    {
      q: 'A gift bag of $4$ items is filled at random from $6$ different books and $5$ different puzzles, every set of four items equally likely. What is the probability that the bag holds exactly $3$ books?',
      choices: ['$\\frac{5}{66}$', '$\\frac{2}{11}$', '$\\frac{10}{33}$', '$\\frac{23}{66}$'],
      answer: 2,
      solution:
        'There are $\\binom{11}{4} = 330$ equally likely bags. Exactly three books means three of the six books and one of the five puzzles: $\\binom{6}{3}\\binom{5}{1} = 20 \\cdot 5 = 100$ bags, so $\\frac{100}{330} = \\frac{10}{33}$ ✓. The ordered currency gives the same fraction from different numbers: picking the four items one at a time makes $11 \\cdot 10 \\cdot 9 \\cdot 8 = 7920$ equally likely ordered selections, and a favorable one has the single puzzle in one of the $4$ pick positions, the three books filling the rest in $6 \\cdot 5 \\cdot 4 = 120$ ordered ways, and $5$ choices for the puzzle: $4 \\cdot 120 \\cdot 5 = 2400$, and $\\frac{2400}{7920} = \\frac{10}{33}$ ✓. ADDING THE TWO COUNTS instead of multiplying gives $20 + 5 = 25$ of $330$, or $\\frac{5}{66}$ ✗. ANSWERING “EXACTLY $3$ PUZZLES” gives $\\binom{5}{3}\\binom{6}{1} = 10 \\cdot 6 = 60$ of $330$, or $\\frac{2}{11}$ ✗. ANSWERING “AT LEAST $3$ BOOKS” also counts the $\\binom{6}{4} = 15$ all-book bags, giving $115$ of $330$, or $\\frac{23}{66}$ ✗.',
    },
    {
      q: 'A committee of $4$ is chosen at random from $5$ teachers and $7$ students, all twelve people different and every set of four equally likely. What is the probability that the committee has at least $3$ teachers?',
      choices: ['$\\frac{14}{99}$', '$\\frac{5}{33}$', '$\\frac{19}{33}$', '$\\frac{1}{99}$'],
      answer: 1,
      solution:
        'There are $\\binom{12}{4} = 495$ equally likely committees. “At least $3$ teachers” splits into two cases: three teachers and one student, $\\binom{5}{3}\\binom{7}{1} = 10 \\cdot 7 = 70$ committees, and four teachers, $\\binom{5}{4} = 5$ committees, for $75$ in all: $\\frac{75}{495} = \\frac{5}{33}$ ✓. The complement counts the other three cases from scratch: no teacher is $\\binom{7}{4} = 35$, one teacher is $\\binom{5}{1}\\binom{7}{3} = 5 \\cdot 35 = 175$, and two teachers is $\\binom{5}{2}\\binom{7}{2} = 10 \\cdot 21 = 210$, adding to $420$, so $495 - 420 = 75$ committees have at least three teachers, or $\\frac{5}{33}$ ✓. STOPPING AT EXACTLY THREE TEACHERS gives $\\frac{70}{495} = \\frac{14}{99}$ ✗. ANSWERING “AT LEAST $2$ TEACHERS” also counts the $210$ two-teacher committees, giving $285$ of $495$, or $\\frac{19}{33}$ ✗. COUNTING ONLY THE ALL-TEACHER COMMITTEES gives $\\frac{5}{495} = \\frac{1}{99}$ ✗.',
    },
  ],

  // slot 7 — the gap between two named people or objects in a random row.
  //          Lanes: exactly two between Ria and Sol among 7 -> 4/21; red and green books adjacent among 9 -> 2/9;
  //          derived: the base row of six, Ana left of Ben with one between -> 2/15.
  [
    {
      q: 'Seven people, including Ria and Sol, sit in a row of $7$ chairs in random order, all seven people different and all $7! = 5040$ seatings equally likely. What is the probability that exactly two people sit between Ria and Sol?',
      choices: ['$\\frac{2}{21}$', '$\\frac{4}{21}$', '$\\frac{2}{7}$', '$\\frac{5}{21}$'],
      answer: 1,
      solution:
        'Only the pair of chairs Ria and Sol take matters, and in a random seating that pair is equally likely to be any of the $\\binom{7}{2} = 21$ chair pairs. Two people between them means chairs three apart: $(1,4)$, $(2,5)$, $(3,6)$, $(4,7)$ — $4$ pairs, so $\\frac{4}{21}$ ✓. Counting seatings confirms it with entirely different numbers: for each of those $4$ chair pairs Ria and Sol can sit in either order, $2$ ways, and the other five people fill the remaining chairs in $5! = 120$ ways, for $4 \\cdot 2 \\cdot 120 = 960$ seatings out of $5040$, and $\\frac{960}{5040} = \\frac{4}{21}$ ✓. FIXING THE ORDER — counting only the seatings with Ria to the left of Sol — halves it to $480$ of $5040$, or $\\frac{2}{21}$ ✗. ANSWERING “NEXT TO EACH OTHER” gives the $6$ adjacent chair pairs of $21$, or $\\frac{2}{7}$ ✗. ANSWERING “EXACTLY ONE PERSON BETWEEN” gives the $5$ chair pairs two apart, or $\\frac{5}{21}$ ✗.',
    },
    {
      q: 'Nine different books, including one red book and one green book, are shelved in a row in random order, all $9!$ orders equally likely. What is the probability that the red and the green books stand next to each other?',
      choices: ['$\\frac{1}{9}$', '$\\frac{7}{36}$', '$\\frac{7}{9}$', '$\\frac{2}{9}$'],
      answer: 3,
      solution:
        'Only the two shelf positions of the red and green books matter, and that pair of positions is equally likely to be any of the $\\binom{9}{2} = 36$ position pairs. Adjacent pairs run $(1,2)$ through $(8,9)$, $8$ of them, so the probability is $\\frac{8}{36} = \\frac{2}{9}$ ✓. The block method counts the orders instead: glue the red and green books together, leaving the block and the other $7$ books as $8$ objects arranged in $8! = 40320$ ways, and the block can be red-then-green or green-then-red, giving $2 \\cdot 40320 = 80640$ of the $9! = 362880$ orders, and $\\frac{80640}{362880} = \\frac{2}{9}$ ✓. FORGETTING THAT THE BLOCK HAS TWO INTERNAL ORDERS gives $\\frac{40320}{362880} = \\frac{1}{9}$ ✗. ANSWERING “EXACTLY ONE BOOK BETWEEN THEM” gives the $7$ position pairs two apart of $36$, or $\\frac{7}{36}$ ✗. ANSWERING THE COMPLEMENT gives $\\frac{7}{9}$ ✗.',
    },
    {
      q: 'Six people, including Ana and Ben, sit in a row of $6$ chairs in random order, all six people different and all $6! = 720$ seatings equally likely. What is the probability that Ana sits somewhere to the left of Ben with exactly one person between them?',
      choices: ['$\\frac{4}{15}$', '$\\frac{1}{3}$', '$\\frac{2}{15}$', '$\\frac{1}{6}$'],
      answer: 2,
      solution:
        'Because the question cares which of the two sits farther left, work with ordered chair pairs: the pair (Ana’s chair, Ben’s chair) is equally likely to be any of the $6 \\cdot 5 = 30$ ordered pairs of different chairs. Ana to the left with one person between means Ben’s chair is Ana’s plus $2$: $(1,3)$, $(2,4)$, $(3,5)$, $(4,6)$ — $4$ of the $30$, or $\\frac{2}{15}$ ✓. Counting seatings gives the same fraction from a different sample space: $4$ chair pairs two apart, Ana in the left chair and Ben in the right one so no swapping, and the other four people in $4! = 24$ arrangements, for $4 \\cdot 24 = 96$ seatings out of $720$, and $\\frac{96}{720} = \\frac{2}{15}$ ✓. ALLOWING EITHER ORDER doubles it to $8$ of the $30$ ordered pairs, or $\\frac{4}{15}$ ✗. ANSWERING “NEXT TO EACH OTHER IN EITHER ORDER” gives the $10$ adjacent ordered pairs of $30$, or $\\frac{1}{3}$ ✗. ANSWERING “ANA DIRECTLY LEFT OF BEN” gives the $5$ ordered pairs $(1,2)$ through $(5,6)$, or $\\frac{1}{6}$ ✗.',
    },
  ],

  // slot 8 — arrangements of identical letters or flags with blocks glued.
  //          Lanes: COFFEE with FF and EE both together -> 2/15; three reds of nine flags together -> 1/12;
  //          derived: PEPPER with PPP and EE both together -> 1/10.
  [
    {
      q: 'The $6$ letters of the word COFFEE are written on identical tiles, one letter per tile, and arranged in a row in random order; the two F tiles are identical to each other and the two E tiles are identical to each other, so the equally likely outcomes are the $\\frac{6!}{2! \\, 2!} = 180$ distinct arrangements. What is the probability that the two F’s are next to each other and the two E’s are also next to each other?',
      choices: ['$\\frac{1}{3}$', '$\\frac{1}{30}$', '$\\frac{2}{15}$', '$\\frac{8}{15}$'],
      answer: 2,
      solution:
        'Glue the two F’s into one block and the two E’s into another. The FF block, the EE block, C, and O are four objects, all different from one another, and a block has no internal choice because the letters inside it are identical, so they line up in $4! = 24$ distinct arrangements: $\\frac{24}{180} = \\frac{2}{15}$ ✓. A second route works in the labeled currency, where the tiles are pretended to be distinguishable — call them F$_1$, F$_2$, E$_1$, E$_2$ — giving $6! = 720$ equally likely labeled orders, each distinct arrangement corresponding to $2! \\cdot 2! = 4$ of them. A favorable labeled order glues both blocks and then orders the four objects, $4! = 24$ ways, with $2$ internal orders inside each block: $24 \\cdot 2 \\cdot 2 = 96$ labeled orders, and $\\frac{96}{720} = \\frac{2}{15}$ ✓. ANSWERING “THE F’S ARE TOGETHER” alone gives $60$ of the $180$ distinct arrangements, or $\\frac{1}{3}$ ✗. PUTTING THE $24$ BLOCK ARRANGEMENTS OVER $6! = 720$ gives $\\frac{1}{30}$, distinct arrangements on top and labeled orders below ✗. MULTIPLYING THE $24$ BY THE TWO INTERNAL ORDERS OF EACH BLOCK while keeping the $180$ distinct arrangements below gives $\\frac{96}{180} = \\frac{8}{15}$ ✗.',
    },
    {
      q: 'Nine flags — $3$ red, $3$ blue, and $3$ white, identical within each color — are hung in a row in random order, the equally likely outcomes being the $\\frac{9!}{3! \\, 3! \\, 3!} = 1680$ distinct arrangements. What is the probability that the three red flags are all next to each other?',
      choices: ['$\\frac{1}{12}$', '$\\frac{1}{240}$', '$\\frac{11}{12}$', '$\\frac{1}{84}$'],
      answer: 0,
      solution:
        'Glue the three reds into a single block. That block, together with the $3$ blue and $3$ white flags, makes $7$ objects with two identical triples among them, so they hang in $\\frac{7!}{3! \\, 3!} = \\frac{5040}{36} = 140$ distinct arrangements: $\\frac{140}{1680} = \\frac{1}{12}$ ✓. Counting positions instead avoids blocks entirely: an arrangement is decided by which $3$ of the $9$ spots hold red flags, which $3$ of the remaining $6$ hold blue, and the rest white, and the red spots on their own are equally likely to be any of the $\\binom{9}{3} = 84$ three-spot sets. The consecutive triples are $(1,2,3)$ through $(7,8,9)$, $7$ of them, so $\\frac{7}{84} = \\frac{1}{12}$ ✓. COUNTING ONLY THE $7$ BLOCK PLACEMENTS and dividing by all $1680$ arrangements gives $\\frac{1}{240}$, since it forgets to arrange the blue and white flags around the block ✗. ANSWERING THE COMPLEMENT gives $\\frac{11}{12}$ ✗. DEMANDING THAT THE THREE BLUES BE TOGETHER TOO cuts the count to $20$ of $1680$, or $\\frac{1}{84}$ ✗.',
    },
    {
      q: 'The $6$ letters of the word PEPPER are written on identical tiles, one letter per tile, and arranged in a row in random order, the equally likely outcomes being the $\\frac{6!}{3! \\, 2!} = 60$ distinct arrangements. What is the probability that the three P’s are all next to each other and the two E’s are also next to each other?',
      choices: ['$\\frac{1}{5}$', '$\\frac{1}{3}$', '$\\frac{1}{120}$', '$\\frac{1}{10}$'],
      answer: 3,
      solution:
        'Glue PPP into one block and EE into another. Those two blocks and the lone R are three objects, all different, and neither block has an internal choice because its letters are identical, so they line up in $3! = 6$ distinct arrangements: $\\frac{6}{60} = \\frac{1}{10}$ ✓. The labeled currency confirms it with its own numbers: pretend the three P’s and the two E’s are distinguishable, giving $6! = 720$ equally likely labeled orders, each distinct arrangement matching $3! \\cdot 2! = 12$ of them. A favorable labeled order arranges the three objects in $3! = 6$ ways, the P’s inside their block in $3! = 6$ ways, and the E’s inside theirs in $2! = 2$ ways: $6 \\cdot 6 \\cdot 2 = 72$ labeled orders, and $\\frac{72}{720} = \\frac{1}{10}$ ✓. ANSWERING “THE P’S ARE TOGETHER” alone gives $12$ of the $60$ distinct arrangements, or $\\frac{1}{5}$ ✗. ANSWERING “THE E’S ARE TOGETHER” alone gives $20$ of $60$, or $\\frac{1}{3}$ ✗. PUTTING THE $6$ BLOCK ARRANGEMENTS OVER $6! = 720$ gives $\\frac{1}{120}$, distinct arrangements on top and labeled orders below ✗.',
    },
  ],

  // slot 9 — the largest or smallest member of a simultaneous draw.
  //          Lanes: three of ten, largest is 8 -> 7/40; four of nine, smallest is 3 -> 10/63;
  //          derived: the base eight cards, largest at most 6 -> 5/14.
  [
    {
      q: 'Ten cards numbered $1$ through $10$ are shuffled, and three of them are drawn at the same time, every set of three cards equally likely. What is the probability that the largest number drawn is $8$?',
      choices: ['$\\frac{7}{40}$', '$\\frac{3}{10}$', '$\\frac{7}{15}$', '$\\frac{1}{10}$'],
      answer: 0,
      solution:
        'There are $\\binom{10}{3} = 120$ equally likely hands. The largest card is $8$ exactly when the $8$ is in the hand and the other two cards come from $1$ through $7$: $\\binom{7}{2} = 21$ hands, so $\\frac{21}{120} = \\frac{7}{40}$ ✓. A subtraction route reaches it from two different counts: hands whose cards are all at most $8$ number $\\binom{8}{3} = 56$, and hands whose cards are all at most $7$ number $\\binom{7}{3} = 35$, so the hands whose largest card is exactly $8$ number $56 - 35 = 21$, and $\\frac{21}{120} = \\frac{7}{40}$ ✓. ANSWERING “THE HAND CONTAINS THE $8$” gives $\\binom{9}{2} = 36$ of $120$, or $\\frac{3}{10}$ ✗. ANSWERING “THE LARGEST IS AT MOST $8$” gives $\\frac{56}{120} = \\frac{7}{15}$ ✗. ASSUMING EACH OF THE TEN CARDS IS EQUALLY LIKELY TO BE THE LARGEST gives $\\frac{1}{10}$, though a $1$ or a $2$ can never be the largest of three ✗.',
    },
    {
      q: 'A bag holds $9$ tiles numbered $1$ through $9$. Four tiles are drawn at the same time, every set of four tiles equally likely. What is the probability that the smallest number drawn is $3$?',
      choices: ['$\\frac{5}{18}$', '$\\frac{4}{9}$', '$\\frac{10}{63}$', '$\\frac{1}{9}$'],
      answer: 2,
      solution:
        'There are $\\binom{9}{4} = 126$ equally likely sets. The smallest tile is $3$ exactly when the $3$ is drawn and the other three tiles come from $4$ through $9$: $\\binom{6}{3} = 20$ sets, so $\\frac{20}{126} = \\frac{10}{63}$ ✓. Subtracting two “nothing smaller” counts gives it again: sets whose tiles are all at least $3$ number $\\binom{7}{4} = 35$, and sets whose tiles are all at least $4$ number $\\binom{6}{4} = 15$, so $35 - 15 = 20$ sets have $3$ as their smallest, and $\\frac{20}{126} = \\frac{10}{63}$ ✓. CHOOSING THE OTHER THREE TILES FROM $3$ THROUGH $9$, as if the $3$ could be drawn a second time, gives $\\binom{7}{3} = 35$ of $126$, or $\\frac{5}{18}$ ✗. ANSWERING “THE SET CONTAINS THE $3$” gives $\\binom{8}{3} = 56$ of $126$, or $\\frac{4}{9}$ ✗. ASSUMING EACH OF THE NINE TILES IS EQUALLY LIKELY TO BE THE SMALLEST gives $\\frac{1}{9}$, though a $7$, $8$, or $9$ can never be the smallest of four ✗.',
    },
    {
      q: 'Eight cards numbered $1$ through $8$ are shuffled, and three of them are drawn at the same time, every set of three cards equally likely. What is the probability that the largest number drawn is at most $6$?',
      choices: ['$\\frac{5}{28}$', '$\\frac{5}{14}$', '$\\frac{9}{14}$', '$\\frac{27}{64}$'],
      answer: 1,
      solution:
        'There are $\\binom{8}{3} = 56$ equally likely hands. Saying the largest card is at most $6$ is the same as saying every card drawn comes from $1$ through $6$, which happens in $\\binom{6}{3} = 20$ hands: $\\frac{20}{56} = \\frac{5}{14}$ ✓. Adding the cases by which card turns out to be the largest gives the same total from four separate counts: largest $3$ needs the other two from $1$–$2$, $\\binom{2}{2} = 1$ hand; largest $4$, $\\binom{3}{2} = 3$; largest $5$, $\\binom{4}{2} = 6$; largest $6$, $\\binom{5}{2} = 10$ — together $1 + 3 + 6 + 10 = 20$ hands, or $\\frac{5}{14}$ ✓. ANSWERING “THE LARGEST IS EXACTLY $6$” gives $\\frac{10}{56} = \\frac{5}{28}$ ✗. ANSWERING THE COMPLEMENT, that a $7$ or an $8$ is drawn, gives $\\frac{36}{56} = \\frac{9}{14}$ ✗. TREATING THE THREE CARDS AS INDEPENDENT DRAWS WITH REPLACEMENT gives $\\left(\\frac{6}{8}\\right)^3 = \\frac{27}{64}$ ✗.',
    },
  ],

  // slot 10 — marked members landing on the same half of a random split.
  //          Lanes: two brothers of twelve campers -> 5/11; three band songs of twelve -> 2/11;
  //          derived: the base ten students, exactly two siblings on the red team -> 5/12.
  [
    {
      q: 'Twelve different campers, including two brothers, are split at random into two cabins of $6$ — the North cabin and the South cabin — every split equally likely. What is the probability that the two brothers share a cabin?',
      choices: ['$\\frac{6}{11}$', '$\\frac{1}{2}$', '$\\frac{5}{22}$', '$\\frac{5}{11}$'],
      answer: 3,
      solution:
        'Place the older brother first, wherever he lands. That cabin has $5$ beds left and the other cabin has all $6$, so the younger brother is equally likely to take any of the $11$ remaining beds, and $5$ of them are beside his brother: $\\frac{5}{11}$ ✓. Counting splits reaches the same fraction through much larger numbers: a split is fixed by the North roster, so there are $\\binom{12}{6} = 924$ equally likely splits; both brothers North means choosing $4$ more campers from the other $10$, $\\binom{10}{4} = 210$ splits, and both South is another $210$, for $420$ of $924$, or $\\frac{5}{11}$ ✓. ANSWERING “DIFFERENT CABINS” gives $\\frac{6}{11}$ ✗. GUESSING THAT THE SECOND BROTHER IS AS LIKELY TO JOIN THE FIRST AS NOT gives $\\frac{1}{2}$, which forgets that his brother’s cabin has only $5$ open beds against the other cabin’s $6$ ✗. COUNTING ONLY THE SPLITS WITH BOTH BROTHERS IN THE NORTH CABIN gives $\\frac{210}{924} = \\frac{5}{22}$ ✗.',
    },
    {
      q: 'Twelve different songs, three of them by one band, are split at random into two playlists of $6$ — a morning list and an evening list — every split equally likely. What is the probability that the three band songs all land on the same playlist?',
      choices: ['$\\frac{1}{11}$', '$\\frac{2}{11}$', '$\\frac{9}{11}$', '$\\frac{1}{4}$'],
      answer: 1,
      solution:
        'A split is fixed by the morning list, so the equally likely outcomes are the $\\binom{12}{6} = 924$ ways to choose it. All three band songs on the morning list means filling the remaining $3$ morning slots from the other $9$ songs, $\\binom{9}{3} = 84$ splits, and all three on the evening list is another $84$: $\\frac{168}{924} = \\frac{2}{11}$ ✓. Following the songs one at a time avoids every binomial coefficient: put the first band song wherever it goes; of the $11$ slots left, $5$ are on its playlist, so the second band song joins it with probability $\\frac{5}{11}$, and then $4$ of the $10$ remaining slots are on that playlist, so the third joins with probability $\\frac{4}{10}$, giving $\\frac{5}{11} \\cdot \\frac{4}{10} = \\frac{20}{110} = \\frac{2}{11}$ ✓. COUNTING ONLY THE MORNING-LIST CASE gives $\\frac{84}{924} = \\frac{1}{11}$ ✗. ANSWERING THE COMPLEMENT gives $\\frac{9}{11}$ ✗. TREATING THE SECOND AND THIRD SONGS AS INDEPENDENT COIN FLIPS gives $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$, ignoring that each playlist holds only six songs ✗.',
    },
    {
      q: 'Ten different students, including three siblings, are split at random into a red team of $5$ and a blue team of $5$, every split equally likely. What is the probability that exactly two of the three siblings end up on the red team?',
      choices: ['$\\frac{5}{12}$', '$\\frac{5}{6}$', '$\\frac{1}{6}$', '$\\frac{3}{8}$'],
      answer: 0,
      solution:
        'A split is fixed by the red roster, so there are $\\binom{10}{5} = 252$ equally likely splits. Exactly two siblings on red means choosing which two of the three go red, $\\binom{3}{2} = 3$ ways, and filling the other $3$ red spots from the $7$ non-siblings, $\\binom{7}{3} = 35$ ways: $3 \\cdot 35 = 105$ splits, or $\\frac{105}{252} = \\frac{5}{12}$ ✓. Looking only at where the siblings land gives an independent count: the five red spots and five blue spots are ten distinct places, and the three siblings occupy an equally likely $3$-element set of them, $\\binom{10}{3} = 120$ sets in all. Exactly two on red means two of the five red spots and one of the five blue spots, $\\binom{5}{2}\\binom{5}{1} = 10 \\cdot 5 = 50$ sets, and $\\frac{50}{120} = \\frac{5}{12}$ ✓. ANSWERING “EXACTLY TWO SIBLINGS TOGETHER ON EITHER TEAM” doubles the count to $210$ of $252$, or $\\frac{5}{6}$ ✗. ANSWERING “ALL THREE ON THE SAME TEAM” gives $42$ of $252$, or $\\frac{1}{6}$ ✗. TREATING EACH SIBLING AS AN INDEPENDENT COIN FLIP gives $3 \\cdot \\left(\\frac{1}{2}\\right)^3 = \\frac{3}{8}$, which ignores that each team has exactly five spots ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 7,
  sections: { '7.4': s74 },
}
