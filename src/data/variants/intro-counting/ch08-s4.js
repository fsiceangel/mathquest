// Counting chapter 8 — variations for §8.5 Probability with Dependent Events.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Ten slots, three variations each: v1 keeps the technique with fresh
//    numbers and a fresh scenario, v2 keeps the technique but counts different
//    objects, v3 reverses or extends the base question.
//  - Answer indices are derived from the base indices 3 1 2 0 1 3 2 0 1 3 by
//    v1 = (b+1)%4, v2 = (b+3)%4, v3 = (b+2)%4, giving
//    v1: 0 2 3 1 2 0 3 1 2 0, v2: 2 0 1 3 0 2 1 3 0 2, v3: 1 3 0 2 3 1 0 2 3 1.
//  - Every key was computed in node with exact rational arithmetic before any
//    stem was written, and every wrong choice was evaluated the same way, so
//    each attribution is an arithmetically true statement. Pin deviations: none.
//  - This section is drawing without replacement, so every solution runs two
//    genuinely independent routes that each end ✓ — one a stage-by-stage
//    product that keeps asking "what is left?", one a count of equally likely
//    outcomes (unordered subsets, ordered draws, or the positions of the
//    special items). Route two never re-imports route one’s number.
//  - Slots 3 and 8 are conditional. For those the conditioning event and the
//    joint event were each enumerated outright and then divided, and the
//    reversed conditional was computed too and is named in the solution, so the
//    two directions can never be swapped by accident.
//  - Conventions are settled in every stem: draws say without replacement, and
//    say whether the items come out one at a time (so order is visible) or at
//    the same time (an unordered set, every set equally likely); a conditional
//    stem says exactly what is known when.

const s85 = [
  // slot 1 — both draws the same color, two stages.
  //          Lanes: pears -> 7/22; two seventh-graders -> 1/6;
  //          reversed: how many gray socks -> 8.
  [
    {
      q: 'A basket holds $5$ apples and $7$ pears. Two pieces of fruit are taken out at random, one after the other, without replacement. What is the probability that both are pears?',
      choices: ['$\\frac{7}{22}$', '$\\frac{49}{144}$', '$\\frac{7}{24}$', '$\\frac{5}{33}$'],
      answer: 0,
      solution:
        'Stage by stage, asking what is left: the first piece is a pear with probability $\\frac{7}{12}$, and once one pear is gone, $6$ pears remain among $11$ pieces, so the second is a pear with probability $\\frac{6}{11}$. Multiplying the stages, $\\frac{7}{12} \\times \\frac{6}{11} = \\frac{42}{132} = \\frac{7}{22}$ ✓. Counting gives a second, separate route: taking two pieces without replacement is the same as grabbing an unordered pair, and all $\\binom{12}{2} = 66$ pairs are equally likely. Exactly $\\binom{7}{2} = 21$ of those pairs are two pears, so the probability is $\\frac{21}{66} = \\frac{7}{22}$ ✓. PUTTING THE FIRST PIECE BACK gives $\\frac{7}{12} \\times \\frac{7}{12} = \\frac{49}{144}$, but nothing returns to the basket ✗. SHRINKING THE PEAR COUNT BUT NOT THE BASKET gives $\\frac{7}{12} \\times \\frac{6}{12} = \\frac{7}{24}$; on the second draw the basket holds $11$ pieces, not $12$ ✗. TAKING BOTH APPLES instead gives $\\frac{5}{12} \\times \\frac{4}{11} = \\frac{5}{33}$, which answers a different question ✗.',
    },
    {
      q: 'A committee of $9$ students has $4$ seventh-graders and $5$ eighth-graders. Two of the nine are chosen at random, one after the other, without replacement, to speak at an assembly. What is the probability that both speakers are seventh-graders?',
      choices: ['$\\frac{16}{81}$', '$\\frac{5}{18}$', '$\\frac{1}{6}$', '$\\frac{4}{27}$'],
      answer: 2,
      solution:
        'Count the equally likely pairs. Choosing two of the nine without replacement makes every one of the $\\binom{9}{2} = 36$ pairs equally likely, and $\\binom{4}{2} = 6$ of them use two seventh-graders, so the probability is $\\frac{6}{36} = \\frac{1}{6}$ ✓. The stage-by-stage route is independent of that count: the first speaker is a seventh-grader with probability $\\frac{4}{9}$, and then $3$ seventh-graders remain among the $8$ students left, so the second is one with probability $\\frac{3}{8}$; the product is $\\frac{4}{9} \\times \\frac{3}{8} = \\frac{12}{72} = \\frac{1}{6}$ ✓. TREATING THE TWO CHOICES AS INDEPENDENT gives $\\frac{4}{9} \\times \\frac{4}{9} = \\frac{16}{81}$, which would need the first speaker put back on the list ✗. CHOOSING TWO EIGHTH-GRADERS instead gives $\\frac{5}{9} \\times \\frac{4}{8} = \\frac{5}{18}$ ✗. SHRINKING THE SEVENTH-GRADER COUNT BUT NOT THE COMMITTEE gives $\\frac{4}{9} \\times \\frac{3}{9} = \\frac{4}{27}$; only $8$ students are left for the second choice ✗.',
    },
    {
      q: 'A drawer holds $4$ black socks and some gray socks, all loose. Two socks are pulled out at random, one after the other, without replacement, and the probability that both are gray is $\\frac{14}{33}$. How many gray socks are in the drawer?',
      choices: ['$6$', '$8$', '$7$', '$12$'],
      answer: 1,
      solution:
        'Let $g$ be the number of gray socks, so the drawer holds $g + 4$ socks. Stage by stage, $P(\\text{both gray}) = \\frac{g}{g+4} \\times \\frac{g-1}{g+3}$, and setting that equal to $\\frac{14}{33}$ gives $33g(g-1) = 14(g+4)(g+3)$, or $33g^2 - 33g = 14g^2 + 98g + 168$, so $19g^2 - 131g - 168 = 0$. Since $131^2 + 4 \\cdot 19 \\cdot 168 = 29929 = 173^2$, the positive root is $g = \\frac{131 + 173}{38} = 8$ ✓. Counting pairs checks it without touching that algebra: with $8$ gray socks the drawer holds $12$ socks, all $\\binom{12}{2} = 66$ pairs are equally likely, and $\\binom{8}{2} = 28$ of them are two gray socks, giving $\\frac{28}{66} = \\frac{14}{33}$ ✓. More gray socks can only raise that probability, so no other count works. SIX GRAY SOCKS gives $\\frac{6}{10} \\times \\frac{5}{9} = \\frac{1}{3}$, which is smaller than $\\frac{14}{33}$ ✗. SEVEN GRAY SOCKS gives $\\frac{7}{11} \\times \\frac{6}{10} = \\frac{21}{55}$, still short ✗. TWELVE is the total number of socks in the drawer, not the number of gray ones; twelve gray socks would give $\\frac{12}{16} \\times \\frac{11}{15} = \\frac{11}{20}$ ✗.',
    },
  ],

  // slot 2 — two named items in a fixed order.
  //          Lanes: tiles 5 then 11 -> 1/132; two finishers -> 1/56;
  //          derived: first is the 7 and the second is not the 3 -> 4/45.
  [
    {
      q: 'Twelve tiles numbered $1$ through $12$ are shuffled and two are dealt one after the other, without replacement. What is the probability that the first tile dealt is the $5$ and the second tile dealt is the $11$?',
      choices: ['$\\frac{1}{66}$', '$\\frac{1}{144}$', '$\\frac{1}{132}$', '$\\frac{1}{120}$'],
      answer: 2,
      solution:
        'Stage by stage: the first tile is the $5$ with probability $\\frac{1}{12}$, and after that tile is gone the $11$ is one of the $11$ tiles left, so the second stage has probability $\\frac{1}{11}$. Multiplying, $\\frac{1}{12} \\times \\frac{1}{11} = \\frac{1}{132}$ ✓. Counting the deals is a separate route: an outcome is an ordered pair of different tiles, and there are $12 \\times 11 = 132$ of them, all equally likely. Exactly one, the $5$ followed by the $11$, is asked for, so the probability is $\\frac{1}{132}$ ✓. ALLOWING EITHER ORDER counts the $11$ first as well and gives $\\frac{2}{132} = \\frac{1}{66}$, but the stem fixes which tile comes first ✗. PUTTING THE FIRST TILE BACK gives $\\frac{1}{12} \\times \\frac{1}{12} = \\frac{1}{144}$ ✗. REMOVING TWO TILES BEFORE THE SECOND DEAL gives $\\frac{1}{12} \\times \\frac{1}{10} = \\frac{1}{120}$; only the $5$ has left the pile, so $11$ tiles remain ✗.',
    },
    {
      q: 'Eight runners, including Pia and Rob, finish a race in a random order with no ties, and every order of the eight is equally likely. What is the probability that Pia finishes first and Rob finishes second?',
      choices: ['$\\frac{1}{56}$', '$\\frac{1}{64}$', '$\\frac{1}{28}$', '$\\frac{1}{8}$'],
      answer: 0,
      solution:
        'Stage by stage: Pia takes first place with probability $\\frac{1}{8}$, and given that, the second place goes to one of the $7$ remaining runners, so Rob takes it with probability $\\frac{1}{7}$. Multiplying, $\\frac{1}{8} \\times \\frac{1}{7} = \\frac{1}{56}$ ✓. Counting whole finishing orders is an independent route: there are $8!$ equally likely orders, and fixing Pia first and Rob second leaves the other six runners free in $6!$ ways, so the probability is $\\frac{6!}{8!} = \\frac{720}{40320} = \\frac{1}{56}$ ✓. TREATING THE TWO PLACES AS INDEPENDENT gives $\\frac{1}{8} \\times \\frac{1}{8} = \\frac{1}{64}$, but one runner cannot take two places ✗. ALLOWING EITHER ORDER of the two, so that Rob could be first, doubles the count to $\\frac{2}{56} = \\frac{1}{28}$ ✗. STOPPING AFTER PIA leaves $\\frac{1}{8}$, the probability of only the first half of the demand ✗.',
    },
    {
      q: 'Ten cards numbered $1$ through $10$ are shuffled and two are dealt one after the other, without replacement. What is the probability that the first card is the $7$ and the second card is NOT the $3$?',
      choices: ['$\\frac{9}{100}$', '$\\frac{1}{10}$', '$\\frac{89}{90}$', '$\\frac{4}{45}$'],
      answer: 3,
      solution:
        'Stage by stage: the first card is the $7$ with probability $\\frac{1}{10}$. Nine cards remain, one of which is the $3$, so the second card avoids the $3$ with probability $\\frac{8}{9}$. Multiplying, $\\frac{1}{10} \\times \\frac{8}{9} = \\frac{8}{90} = \\frac{4}{45}$ ✓. Counting the deals is a second route: there are $10 \\times 9 = 90$ equally likely ordered deals, and the favorable ones fix the $7$ in front and allow any of the $8$ cards other than the $3$ behind it, so $\\frac{8}{90} = \\frac{4}{45}$ ✓. PUTTING THE FIRST CARD BACK gives $\\frac{1}{10} \\times \\frac{9}{10} = \\frac{9}{100}$ ✗. FORGETTING TO BAR THE $3$ leaves $\\frac{1}{10} \\times \\frac{9}{9} = \\frac{1}{10}$, which allows the $3$ to follow ✗. NEGATING THE WHOLE STATEMENT gives $1 - \\frac{1}{90} = \\frac{89}{90}$, the probability that the deal is not "the $7$ then the $3$", which also allows the first card to be something other than the $7$ ✗.',
    },
  ],

  // slot 3 — CONDITIONAL SLOT. Two stages with different categories.
  //          Lanes: newspaper then magazine -> 4/15; specialist then not -> 12/55;
  //          derived: P(second is a novel | first is a comic) -> 3/7.
  [
    {
      q: 'A rack holds $4$ magazines and $6$ newspapers. Two of the ten are taken at random, one after the other, without replacement. What is the probability that the first one taken is a newspaper and the second one taken is a magazine?',
      choices: ['$\\frac{8}{15}$', '$\\frac{6}{25}$', '$\\frac{3}{5}$', '$\\frac{4}{15}$'],
      answer: 3,
      solution:
        'Stage by stage: the first item is a newspaper with probability $\\frac{6}{10}$. That removes a newspaper, so $9$ items remain and all $4$ magazines are still there, giving $\\frac{4}{9}$ for the second stage. Multiplying, $\\frac{6}{10} \\times \\frac{4}{9} = \\frac{24}{90} = \\frac{4}{15}$ ✓. Counting ordered takes is an independent route: there are $10 \\times 9 = 90$ equally likely ordered pairs of different items, and $6 \\times 4 = 24$ of them put a newspaper first and a magazine second, so the probability is $\\frac{24}{90} = \\frac{4}{15}$ ✓. ALLOWING EITHER ORDER adds the magazine-then-newspaper pairs and gives $\\frac{48}{90} = \\frac{8}{15}$, but the stem fixes which comes first ✗. PUTTING THE FIRST ITEM BACK gives $\\frac{6}{10} \\times \\frac{4}{10} = \\frac{6}{25}$ ✗. STOPPING AFTER THE FIRST ITEM leaves $\\frac{6}{10} = \\frac{3}{5}$, the probability of the newspaper alone ✗.',
    },
    {
      q: 'A swim squad of $11$ has $3$ freestyle specialists and $8$ other swimmers. Two swimmers are picked at random, one after the other, without replacement. What is the probability that the first pick is a specialist and the second pick is not?',
      choices: ['$\\frac{24}{121}$', '$\\frac{12}{55}$', '$\\frac{24}{55}$', '$\\frac{21}{110}$'],
      answer: 1,
      solution:
        'Stage by stage: the first pick is a specialist with probability $\\frac{3}{11}$. One specialist is now gone, so $10$ swimmers remain and all $8$ non-specialists are still among them, giving $\\frac{8}{10}$. Multiplying, $\\frac{3}{11} \\times \\frac{8}{10} = \\frac{24}{110} = \\frac{12}{55}$ ✓. Counting ordered picks confirms it separately: there are $11 \\times 10 = 110$ equally likely ordered pairs of different swimmers, and $3 \\times 8 = 24$ of them are a specialist followed by a non-specialist, so $\\frac{24}{110} = \\frac{12}{55}$ ✓. PUTTING THE FIRST SWIMMER BACK gives $\\frac{3}{11} \\times \\frac{8}{11} = \\frac{24}{121}$ ✗. ALLOWING EITHER ORDER counts the non-specialist-first pairs too and gives $\\frac{48}{110} = \\frac{24}{55}$ ✗. SHRINKING THE WRONG GROUP uses $\\frac{7}{10}$ for the second stage and gives $\\frac{3}{11} \\times \\frac{7}{10} = \\frac{21}{110}$; the swimmer who left was a specialist, so the $8$ non-specialists are all still available ✗.',
    },
    {
      q: 'A shelf holds $8$ library books: $3$ novels and $5$ comics. Two books are taken at random, one after the other, without replacement. Someone looks at the first book only and reports that it is a comic. Given that, what is the probability that the second book is a novel?',
      choices: ['$\\frac{3}{7}$', '$\\frac{5}{7}$', '$\\frac{15}{56}$', '$\\frac{3}{8}$'],
      answer: 0,
      solution:
        'Enumerate the two events separately rather than reasoning about them. An outcome is an ordered pair of different books, and there are $8 \\times 7 = 56$ of them, all equally likely. The conditioning event "the first book is a comic" holds in $5 \\times 7 = 35$ of those pairs. The joint event "the first book is a comic and the second is a novel" holds in $5 \\times 3 = 15$ of them. Dividing the joint count by the conditioning count, the answer is $\\frac{15}{35} = \\frac{3}{7}$ ✓. A second route rebuilds the shelf instead of dividing: once the first book is known to be a comic, that comic is gone and the second book is drawn from what is left — $3$ novels and $4$ comics, $7$ books, each equally likely to be next — so the probability is $\\frac{3}{7}$ ✓. Note which direction is which. THE REVERSED CONDITIONAL asks for $P(\\text{the first book is a comic} \\mid \\text{the second is a novel})$: the second book is a novel in $3 \\times 7 = 21$ of the $56$ ordered pairs, and the same $15$ pairs are joint, so that value is $\\frac{15}{21} = \\frac{5}{7}$ — a true number for a different question ✗. THE JOINT PROBABILITY, with nothing known, is $\\frac{15}{56}$, which does not use the report at all ✗. IGNORING THE REPORT ENTIRELY gives $P(\\text{the second book is a novel}) = \\frac{21}{56} = \\frac{3}{8}$ ✗.',
    },
  ],

  // slot 4 — one of each kind, so two orders.
  //          Lanes: copper and nickel -> 5/9; musician and dancer -> 4/7;
  //          reversed: how many iron keys -> 6.
  [
    {
      q: 'A pouch holds $4$ copper coins and $5$ nickel coins. Two coins are removed at random, one after the other, without replacement. What is the probability that one is copper and one is nickel?',
      choices: ['$\\frac{5}{18}$', '$\\frac{5}{9}$', '$\\frac{4}{9}$', '$\\frac{40}{81}$'],
      answer: 1,
      solution:
        'The demand can happen in two orders, and they cannot both occur, so add them. Copper then nickel is $\\frac{4}{9} \\times \\frac{5}{8} = \\frac{20}{72}$, and nickel then copper is $\\frac{5}{9} \\times \\frac{4}{8} = \\frac{20}{72}$ — the same numerators and denominators rearranged. Adding, $\\frac{40}{72} = \\frac{5}{9}$ ✓. Counting unordered pairs never mentions order at all: all $\\binom{9}{2} = 36$ pairs are equally likely, and a mixed pair is one copper and one nickel, so there are $4 \\times 5 = 20$ of them and the probability is $\\frac{20}{36} = \\frac{5}{9}$ ✓. COUNTING ONE ORDER ONLY leaves $\\frac{20}{72} = \\frac{5}{18}$ ✗. TAKING THE COMPLEMENT answers "both coins the same metal", which is $1 - \\frac{5}{9} = \\frac{4}{9}$ ✗. PUTTING THE FIRST COIN BACK gives $2 \\times \\frac{4}{9} \\times \\frac{5}{9} = \\frac{40}{81}$ ✗.',
    },
    {
      q: 'A panel of $7$ judges has $3$ musicians and $4$ dancers. Two of the judges are chosen at random at the same time, every pair equally likely. What is the probability that one is a musician and one is a dancer?',
      choices: ['$\\frac{2}{7}$', '$\\frac{3}{7}$', '$\\frac{24}{49}$', '$\\frac{4}{7}$'],
      answer: 3,
      solution:
        'Count the pairs. All $\\binom{7}{2} = 21$ pairs of judges are equally likely, and a mixed pair is built by choosing one of the $3$ musicians and one of the $4$ dancers, so there are $3 \\times 4 = 12$ of them and the probability is $\\frac{12}{21} = \\frac{4}{7}$ ✓. Choosing two at the same time gives the same probabilities as choosing them one after the other, so a stage product is an independent check: musician then dancer is $\\frac{3}{7} \\times \\frac{4}{6} = \\frac{12}{42}$, dancer then musician is $\\frac{4}{7} \\times \\frac{3}{6} = \\frac{12}{42}$, and the sum is $\\frac{24}{42} = \\frac{4}{7}$ ✓. COUNTING ONE ORDER ONLY leaves $\\frac{12}{42} = \\frac{2}{7}$ ✗. TAKING THE COMPLEMENT answers "the two judges do the same thing", which is $\\frac{\\binom{3}{2} + \\binom{4}{2}}{21} = \\frac{9}{21} = \\frac{3}{7}$ ✗. TREATING THE TWO CHOICES AS INDEPENDENT gives $2 \\times \\frac{3}{7} \\times \\frac{4}{7} = \\frac{24}{49}$, which would need a judge returned to the panel before the second choice ✗.',
    },
    {
      q: 'A key ring holds $5$ brass keys and some iron keys. Two keys are removed at random, one after the other, without replacement, and the probability that one is brass and one is iron is $\\frac{6}{11}$. How many iron keys are on the ring?',
      choices: ['$3$', '$5$', '$6$', '$7$'],
      answer: 2,
      solution:
        'Let $n$ be the number of iron keys, so the ring holds $n + 5$ keys. Adding the two orders, $P(\\text{one of each}) = \\frac{5}{n+5} \\times \\frac{n}{n+4} + \\frac{n}{n+5} \\times \\frac{5}{n+4} = \\frac{10n}{(n+5)(n+4)}$. Setting that equal to $\\frac{6}{11}$ gives $110n = 6(n+5)(n+4) = 6n^2 + 54n + 120$, so $3n^2 - 28n + 60 = 0$, whose roots are $n = 6$ and $n = \\frac{10}{3}$. Only the whole number counts, so $n = 6$ ✓. Counting pairs checks it without the equation: with $6$ iron keys the ring holds $11$ keys, all $\\binom{11}{2} = 55$ pairs are equally likely, and $5 \\times 6 = 30$ of them are mixed, giving $\\frac{30}{55} = \\frac{6}{11}$ ✓. THREE IRON KEYS is the ring from the earlier problem and gives $\\frac{30}{56} = \\frac{15}{28}$ ✗. FIVE IRON KEYS gives $\\frac{50}{90} = \\frac{5}{9}$, close but not $\\frac{6}{11}$ ✗. SEVEN IRON KEYS gives $\\frac{70}{132} = \\frac{35}{66}$ ✗.',
    },
  ],

  // slot 5 — three draws, all of one kind (and its complement).
  //          Lanes: three grape drops -> 1/6; no rookie in a trio -> 5/21;
  //          derived: at least one gold in three coins -> 23/28.
  [
    {
      q: 'A jar holds $4$ lemon drops and $6$ grape drops. Three drops are taken at random, one after the other, without replacement. What is the probability that all three are grape?',
      choices: ['$\\frac{27}{125}$', '$\\frac{1}{3}$', '$\\frac{1}{6}$', '$\\frac{3}{25}$'],
      answer: 2,
      solution:
        'Stage by stage, dropping both counts as grape drops leave: $\\frac{6}{10}$, then $\\frac{5}{9}$, then $\\frac{4}{8}$. The product is $\\frac{120}{720} = \\frac{1}{6}$ ✓. Counting is a separate route: three drops taken without replacement form an unordered set, all $\\binom{10}{3} = 120$ sets are equally likely, and $\\binom{6}{3} = 20$ of them are made only of grape drops, so the probability is $\\frac{20}{120} = \\frac{1}{6}$ ✓. PUTTING EACH DROP BACK gives $\\left(\\frac{6}{10}\\right)^3 = \\frac{27}{125}$ ✗. STOPPING AFTER TWO DROPS gives $\\frac{6}{10} \\times \\frac{5}{9} = \\frac{1}{3}$, which asks for less than the stem does ✗. SHRINKING THE GRAPE COUNT BUT NOT THE JAR gives $\\frac{6}{10} \\times \\frac{5}{10} \\times \\frac{4}{10} = \\frac{3}{25}$; the jar holds $9$ and then $8$ drops ✗.',
    },
    {
      q: 'A quiz-bowl team of $9$ players has $3$ rookies. Three of the players are picked at random at the same time, every trio equally likely, to answer a question. What is the probability that none of the three is a rookie?',
      choices: ['$\\frac{5}{21}$', '$\\frac{8}{27}$', '$\\frac{5}{12}$', '$\\frac{1}{84}$'],
      answer: 0,
      solution:
        'Count the trios. All $\\binom{9}{3} = 84$ trios are equally likely, and a rookie-free trio uses three of the $6$ veterans, so there are $\\binom{6}{3} = 20$ of them and the probability is $\\frac{20}{84} = \\frac{5}{21}$ ✓. Picking three at the same time matches picking them one at a time, so a stage product checks it independently: $\\frac{6}{9} \\times \\frac{5}{8} \\times \\frac{4}{7} = \\frac{120}{504} = \\frac{5}{21}$ ✓. TREATING THE THREE PICKS AS INDEPENDENT gives $\\left(\\frac{6}{9}\\right)^3 = \\frac{8}{27}$, which would need a player returned to the team each time ✗. STOPPING AFTER TWO PICKS gives $\\frac{6}{9} \\times \\frac{5}{8} = \\frac{5}{12}$ ✗. PICKING THE THREE ROOKIES instead gives $\\frac{\\binom{3}{3}}{84} = \\frac{1}{84}$, the opposite extreme ✗.',
    },
    {
      q: 'A bag holds $3$ gold coins and $5$ silver coins. Three coins are drawn at random, one after the other, without replacement. What is the probability that at least one of the three is gold?',
      choices: ['$\\frac{5}{28}$', '$\\frac{15}{28}$', '$\\frac{387}{512}$', '$\\frac{23}{28}$'],
      answer: 3,
      solution:
        '"At least one gold" fails only when all three coins are silver, so take the complement. All silver, stage by stage, is $\\frac{5}{8} \\times \\frac{4}{7} \\times \\frac{3}{6} = \\frac{60}{336} = \\frac{5}{28}$, and $1 - \\frac{5}{28} = \\frac{23}{28}$ ✓. Counting the favorable sets directly avoids the complement altogether: all $\\binom{8}{3} = 56$ sets of three coins are equally likely, and splitting by how many are gold gives $\\binom{3}{1}\\binom{5}{2} = 30$ sets with one gold, $\\binom{3}{2}\\binom{5}{1} = 15$ with two, and $\\binom{3}{3} = 1$ with three, a total of $46$, so the probability is $\\frac{46}{56} = \\frac{23}{28}$ ✓. STOPPING AT THE COMPLEMENT reports the all-silver value $\\frac{5}{28}$ without subtracting it from $1$ ✗. READING "AT LEAST ONE" AS "EXACTLY ONE" gives $\\frac{30}{56} = \\frac{15}{28}$, which throws away the $16$ sets with two or three gold coins ✗. DRAWING WITH REPLACEMENT gives $1 - \\left(\\frac{5}{8}\\right)^3 = \\frac{387}{512}$, but the coins do not go back ✗.',
    },
  ],

  // slot 6 — two items taken at the same time, both from one small group.
  //          Lanes: two multiples of 3 -> 1/11; two tulips -> 5/33;
  //          derived: exactly one even among two cards -> 5/9.
  [
    {
      q: 'Twelve chips numbered $1$ through $12$ are in a bag, and two of them are drawn at the same time, every pair equally likely. What is the probability that both numbers are multiples of $3$?',
      choices: ['$\\frac{1}{11}$', '$\\frac{1}{9}$', '$\\frac{1}{12}$', '$\\frac{14}{33}$'],
      answer: 0,
      solution:
        'Four of the chips — $3$, $6$, $9$, and $12$ — are multiples of $3$. Counting pairs, all $\\binom{12}{2} = 66$ pairs are equally likely and $\\binom{4}{2} = 6$ of them use two of those four chips, so the probability is $\\frac{6}{66} = \\frac{1}{11}$ ✓. Drawing two at the same time gives the same probabilities as drawing one and then another, so a stage product is an independent route: $\\frac{4}{12}$ for the first chip, then $3$ multiples of $3$ among the $11$ chips left, giving $\\frac{4}{12} \\times \\frac{3}{11} = \\frac{12}{132} = \\frac{1}{11}$ ✓. TREATING THE DRAWS AS INDEPENDENT gives $\\left(\\frac{4}{12}\\right)^2 = \\frac{1}{9}$ ✗. SHRINKING THE FAVORABLE COUNT BUT NOT THE BAG gives $\\frac{4}{12} \\times \\frac{3}{12} = \\frac{1}{12}$; only $11$ chips remain for the second draw ✗. TAKING NEITHER CHIP A MULTIPLE OF $3$ answers a different question, $\\frac{\\binom{8}{2}}{66} = \\frac{14}{33}$ ✗.',
    },
    {
      q: 'A garden bed holds $12$ bulbs, $5$ of which are tulips. Two bulbs are dug up at random at the same time, every pair equally likely. What is the probability that both are tulips?',
      choices: ['$\\frac{25}{144}$', '$\\frac{5}{36}$', '$\\frac{5}{33}$', '$\\frac{7}{22}$'],
      answer: 2,
      solution:
        'Count the pairs: all $\\binom{12}{2} = 66$ pairs of bulbs are equally likely, and $\\binom{5}{2} = 10$ of them are two tulips, so the probability is $\\frac{10}{66} = \\frac{5}{33}$ ✓. Digging two at once matches digging one and then another, so stage by stage the first bulb is a tulip with probability $\\frac{5}{12}$ and then $4$ tulips remain among $11$ bulbs, giving $\\frac{5}{12} \\times \\frac{4}{11} = \\frac{20}{132} = \\frac{5}{33}$ ✓. TREATING THE TWO BULBS AS INDEPENDENT gives $\\left(\\frac{5}{12}\\right)^2 = \\frac{25}{144}$ ✗. SHRINKING THE TULIP COUNT BUT NOT THE BED gives $\\frac{5}{12} \\times \\frac{4}{12} = \\frac{5}{36}$; the bed holds $11$ bulbs on the second dig ✗. TAKING BOTH BULBS NON-TULIPS answers the wrong question, $\\frac{\\binom{7}{2}}{66} = \\frac{7}{22}$ ✗.',
    },
    {
      q: 'Ten cards numbered $1$ through $10$ are shuffled, and two of them are drawn together at random, every pair equally likely. What is the probability that exactly one of the two numbers is even?',
      choices: ['$\\frac{1}{2}$', '$\\frac{5}{9}$', '$\\frac{7}{9}$', '$\\frac{2}{9}$'],
      answer: 1,
      solution:
        'Five cards are even and five are odd. Counting pairs, all $\\binom{10}{2} = 45$ pairs are equally likely, and a pair with exactly one even number is built by choosing one of the $5$ even cards and one of the $5$ odd cards, so there are $5 \\times 5 = 25$ of them and the probability is $\\frac{25}{45} = \\frac{5}{9}$ ✓. Ordered stages give the same value another way: even then odd is $\\frac{5}{10} \\times \\frac{5}{9} = \\frac{25}{90}$, odd then even is $\\frac{5}{10} \\times \\frac{5}{9} = \\frac{25}{90}$, and the two disjoint orders add to $\\frac{50}{90} = \\frac{5}{9}$ ✓. TREATING THE DRAWS AS INDEPENDENT gives $2 \\times \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{2}$, which would need the first card put back ✗. READING "EXACTLY ONE" AS "AT LEAST ONE" gives $1 - \\frac{\\binom{5}{2}}{45} = \\frac{35}{45} = \\frac{7}{9}$ ✗. TAKING BOTH NUMBERS EVEN gives $\\frac{\\binom{5}{2}}{45} = \\frac{2}{9}$, a different question ✗.',
    },
  ],

  // slot 7 — "the same kind", two disjoint cases.
  //          Lanes: same shape -> 4/9; same color ticket -> 31/66;
  //          derived: three buttons all the same size -> 1/5.
  [
    {
      q: 'A box holds $5$ round beads and $4$ square beads. Two beads are drawn at random, one after the other, without replacement. What is the probability that the two beads are the same shape?',
      choices: ['$\\frac{5}{9}$', '$\\frac{41}{81}$', '$\\frac{5}{18}$', '$\\frac{4}{9}$'],
      answer: 3,
      solution:
        'Split into two cases that cannot both happen. Both round is $\\frac{5}{9} \\times \\frac{4}{8} = \\frac{20}{72}$, and both square is $\\frac{4}{9} \\times \\frac{3}{8} = \\frac{12}{72}$. Adding, $\\frac{32}{72} = \\frac{4}{9}$ ✓. Counting pairs is an independent route: all $\\binom{9}{2} = 36$ pairs are equally likely, $\\binom{5}{2} = 10$ are two round beads and $\\binom{4}{2} = 6$ are two square beads, so the probability is $\\frac{16}{36} = \\frac{4}{9}$ ✓. TAKING THE COMPLEMENT answers "one of each shape", which is $1 - \\frac{4}{9} = \\frac{5}{9}$ ✗. PUTTING THE FIRST BEAD BACK gives $\\left(\\frac{5}{9}\\right)^2 + \\left(\\frac{4}{9}\\right)^2 = \\frac{41}{81}$ ✗. KEEPING ONLY THE ROUND CASE leaves $\\frac{20}{72} = \\frac{5}{18}$ and forgets that two square beads also match ✗.',
    },
    {
      q: 'A jar holds $12$ tickets: $7$ blue and $5$ orange. Two tickets are drawn at the same time, every pair equally likely. What is the probability that the two tickets are the same color?',
      choices: ['$\\frac{35}{66}$', '$\\frac{31}{66}$', '$\\frac{37}{72}$', '$\\frac{7}{22}$'],
      answer: 1,
      solution:
        'Count the matching pairs. All $\\binom{12}{2} = 66$ pairs are equally likely; $\\binom{7}{2} = 21$ are two blue tickets and $\\binom{5}{2} = 10$ are two orange, so the probability is $\\frac{21 + 10}{66} = \\frac{31}{66}$ ✓. Stage products give the same answer through order instead of sets: both blue is $\\frac{7}{12} \\times \\frac{6}{11} = \\frac{42}{132}$ and both orange is $\\frac{5}{12} \\times \\frac{4}{11} = \\frac{20}{132}$, and the two disjoint cases add to $\\frac{62}{132} = \\frac{31}{66}$ ✓. TAKING THE COMPLEMENT answers "one of each color", which is $1 - \\frac{31}{66} = \\frac{35}{66}$ ✗. TREATING THE DRAWS AS INDEPENDENT gives $\\left(\\frac{7}{12}\\right)^2 + \\left(\\frac{5}{12}\\right)^2 = \\frac{74}{144} = \\frac{37}{72}$ ✗. KEEPING ONLY THE BLUE CASE leaves $\\frac{21}{66} = \\frac{7}{22}$ ✗.',
    },
    {
      q: 'A tin holds $10$ buttons: $6$ large and $4$ small. Three buttons are drawn at random, one after the other, without replacement. What is the probability that all three are the same size?',
      choices: ['$\\frac{1}{5}$', '$\\frac{7}{25}$', '$\\frac{1}{6}$', '$\\frac{7}{15}$'],
      answer: 0,
      solution:
        'Count the sets of three. All $\\binom{10}{3} = 120$ sets are equally likely, $\\binom{6}{3} = 20$ of them are three large buttons, and $\\binom{4}{3} = 4$ are three small ones, so the probability is $\\frac{24}{120} = \\frac{1}{5}$ ✓. Stage products reach it independently: three large is $\\frac{6}{10} \\times \\frac{5}{9} \\times \\frac{4}{8} = \\frac{120}{720}$, three small is $\\frac{4}{10} \\times \\frac{3}{9} \\times \\frac{2}{8} = \\frac{24}{720}$, and the disjoint cases add to $\\frac{144}{720} = \\frac{1}{5}$ ✓. PUTTING EACH BUTTON BACK gives $\\left(\\frac{6}{10}\\right)^3 + \\left(\\frac{4}{10}\\right)^3 = \\frac{7}{25}$ ✗. KEEPING ONLY THE LARGE CASE leaves $\\frac{20}{120} = \\frac{1}{6}$ and forgets that three small buttons also match ✗. ANSWERING FOR TWO BUTTONS gives $\\frac{6}{10} \\times \\frac{5}{9} + \\frac{4}{10} \\times \\frac{3}{9} = \\frac{7}{15}$, but three buttons are drawn ✗.',
    },
  ],

  // slot 8 — CONDITIONAL SLOT. A first random stage changes the second.
  //          Lanes: transfer then draw white -> 11/28; pick a crate, draw a pair -> 11/56;
  //          derived: P(the moved marble was red | the drawn marble is red) -> 4/7.
  [
    {
      q: 'Box A holds $3$ white and $1$ red ball. Box B holds $2$ white and $4$ red balls. One ball is moved at random from Box A into Box B, and then one ball is drawn at random from Box B. What is the probability that the drawn ball is white?',
      choices: ['$\\frac{1}{3}$', '$\\frac{11}{28}$', '$\\frac{3}{7}$', '$\\frac{5}{14}$'],
      answer: 1,
      solution:
        'Branch on the moved ball, which is white with probability $\\frac{3}{4}$ and red with probability $\\frac{1}{4}$. If it is white, Box B becomes $3$ white and $4$ red, and the draw is white with probability $\\frac{3}{7}$; if it is red, Box B becomes $2$ white and $5$ red, and the draw is white with probability $\\frac{2}{7}$. The two paths are disjoint, so add: $\\frac{3}{4} \\times \\frac{3}{7} + \\frac{1}{4} \\times \\frac{2}{7} = \\frac{9 + 2}{28} = \\frac{11}{28}$ ✓. Counting equally likely outcomes avoids the branching fractions: an outcome is (which ball moved, which ball drawn), and since Box B always ends with $7$ balls there are $4 \\times 7 = 28$ of them, all equally likely. Moving one of the $3$ white balls leaves $3$ white balls to draw, giving $3 \\times 3 = 9$ favorable outcomes; moving the red ball leaves $2$ white balls, giving $1 \\times 2 = 2$ more. That is $\\frac{11}{28}$ ✓. IGNORING THE TRANSFER uses Box B as it started and gives $\\frac{2}{6} = \\frac{1}{3}$ ✗. ASSUMING THE MOVED BALL WAS WHITE gives $\\frac{3}{7}$, only one branch ✗. WEIGHTING THE TWO BRANCHES EQUALLY gives $\\frac{1}{2} \\times \\frac{3}{7} + \\frac{1}{2} \\times \\frac{2}{7} = \\frac{5}{14}$, but Box A holds three white balls to one red, so the branches are not equally likely ✗.',
    },
    {
      q: 'A shipment has two crates. Crate 1 holds $5$ blue and $3$ yellow beads; Crate 2 holds $2$ blue and $6$ yellow beads. A crate is chosen at random, each equally likely, and then two beads are drawn from that crate at the same time, every pair in it equally likely. What is the probability that both beads are blue?',
      choices: ['$\\frac{7}{40}$', '$\\frac{5}{14}$', '$\\frac{29}{128}$', '$\\frac{11}{56}$'],
      answer: 3,
      solution:
        'Branch on the crate. Within Crate 1 all $\\binom{8}{2} = 28$ pairs are equally likely and $\\binom{5}{2} = 10$ are two blue, giving $\\frac{10}{28}$; within Crate 2 only $\\binom{2}{2} = 1$ pair of the $28$ is two blue, giving $\\frac{1}{28}$. Weighting each crate by $\\frac{1}{2}$ and adding the disjoint paths, $\\frac{1}{2} \\times \\frac{10}{28} + \\frac{1}{2} \\times \\frac{1}{28} = \\frac{11}{56}$ ✓. Counting settles it in one pass: an outcome is (which crate, which pair from it), and there are $2 \\times 28 = 56$ of them, all equally likely because the crates are equally likely and each holds the same number of pairs. Exactly $10 + 1 = 11$ of those outcomes are two blue beads, so the probability is $\\frac{11}{56}$ ✓. POURING THE CRATES TOGETHER makes one $16$-bead box with $7$ blue beads and gives $\\frac{\\binom{7}{2}}{\\binom{16}{2}} = \\frac{21}{120} = \\frac{7}{40}$, but only one crate is ever opened ✗. USING CRATE 1 ALONE gives $\\frac{10}{28} = \\frac{5}{14}$ ✗. DRAWING THE TWO BEADS WITH REPLACEMENT gives $\\frac{1}{2}\\left(\\frac{5}{8}\\right)^2 + \\frac{1}{2}\\left(\\frac{2}{8}\\right)^2 = \\frac{29}{128}$, but the two beads come out together ✗.',
    },
    {
      q: 'Bag A holds $2$ red and $2$ blue marbles, and Bag B holds $3$ red and $1$ blue marble. One marble is moved at random from Bag A into Bag B, and then one marble is drawn at random from Bag B. The drawn marble turns out to be red, but nobody saw the color of the marble that was moved. Given that the drawn marble is red, what is the probability that the marble moved from Bag A was red?',
      choices: ['$\\frac{4}{5}$', '$\\frac{1}{2}$', '$\\frac{4}{7}$', '$\\frac{2}{5}$'],
      answer: 2,
      solution:
        'Enumerate the two events separately instead of reasoning about them. An outcome is (which of the $4$ marbles moved, which of the $5$ marbles in Bag B is drawn), so there are $4 \\times 5 = 20$ equally likely outcomes. The conditioning event "the drawn marble is red" happens like this: each of the $2$ red marbles of Bag A leaves Bag B with $4$ red and $1$ blue, giving $2 \\times 4 = 8$ red draws, and each of the $2$ blue marbles leaves Bag B with $3$ red and $2$ blue, giving $2 \\times 3 = 6$ more — $14$ red-draw outcomes in all. The joint event "the moved marble was red and the drawn marble is red" is the first group, $8$ outcomes. Dividing the joint count by the conditioning count, the answer is $\\frac{8}{14} = \\frac{4}{7}$ ✓. A second route divides probabilities instead of counts: $P(\\text{moved red and drawn red}) = \\frac{1}{2} \\times \\frac{4}{5} = \\frac{2}{5}$, and $P(\\text{drawn red}) = \\frac{1}{2} \\times \\frac{4}{5} + \\frac{1}{2} \\times \\frac{3}{5} = \\frac{7}{10}$, so the conditional probability is $\\frac{2/5}{7/10} = \\frac{4}{7}$ ✓. Keep the two directions straight. THE REVERSED CONDITIONAL asks for $P(\\text{the drawn marble is red} \\mid \\text{the moved marble was red})$, which is $\\frac{8}{10} = \\frac{4}{5}$ — the moved marble is red in $10$ of the $20$ outcomes, and $8$ of those draw red; that is a true value for the opposite question ✗. THE PRIOR, before anything is drawn, is $P(\\text{moved red}) = \\frac{10}{20} = \\frac{1}{2}$, which ignores the red draw ✗. THE JOINT PROBABILITY is $\\frac{8}{20} = \\frac{2}{5}$, the numerator alone, never divided by the conditioning probability ✗.',
    },
  ],

  // slot 9 — draw until a special item appears.
  //          Lanes: exactly three envelopes -> 1/7; exactly four cards -> 5/36;
  //          derived: the drawing stops within two draws -> 4/5.
  [
    {
      q: 'A tray holds $8$ sealed envelopes: $4$ of them hold a prize and $4$ are empty. Envelopes are opened at random one at a time until a prize envelope is opened, and then the opening stops. What is the probability that exactly three envelopes are opened?',
      choices: ['$\\frac{1}{8}$', '$\\frac{3}{14}$', '$\\frac{1}{7}$', '$\\frac{3}{7}$'],
      answer: 2,
      solution:
        'Exactly three envelopes are opened when the order is empty, empty, prize. Stage by stage: $\\frac{4}{8}$ for the first empty envelope, then $3$ empty ones among the $7$ envelopes left for $\\frac{3}{7}$, then all $4$ prize envelopes among the $6$ left for $\\frac{4}{6}$. The product is $\\frac{48}{336} = \\frac{1}{7}$ ✓. Counting ordered openings is a separate route: the first three envelopes form an ordered triple of different envelopes, and there are $8 \\times 7 \\times 6 = 336$ of them, all equally likely. A favorable triple takes two empty envelopes in order and then a prize envelope, which happens in $4 \\times 3 \\times 4 = 48$ ways, so the probability is $\\frac{48}{336} = \\frac{1}{7}$ ✓. TREATING EACH OPENING AS A COIN FLIP gives $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$; the tray changes after every envelope ✗. FORGETTING THAT THE THIRD ENVELOPE MUST HOLD A PRIZE leaves $\\frac{4}{8} \\times \\frac{3}{7} = \\frac{3}{14}$, the probability that the first two are empty ✗. MULTIPLYING BY THREE POSITIONS gives $3 \\times \\frac{1}{7} = \\frac{3}{7}$, but the prize envelope is not free to move — it must be the last of the three ✗.',
    },
    {
      q: 'A pile of $9$ cards contains $2$ wild cards. Cards are turned over one at a time at random without replacement until a wild card appears, and then the turning stops. What is the probability that exactly four cards are turned over?',
      choices: ['$\\frac{5}{36}$', '$\\frac{2}{9}$', '$\\frac{5}{12}$', '$\\frac{5}{54}$'],
      answer: 0,
      solution:
        'Exactly four cards are turned when the first three are plain and the fourth is wild. Stage by stage: $\\frac{7}{9} \\times \\frac{6}{8} \\times \\frac{5}{7} \\times \\frac{2}{6} = \\frac{420}{3024} = \\frac{5}{36}$ ✓. The positions of the wild cards give a route with no stages at all: shuffling the pile puts the two wild cards in one of the $\\binom{9}{2} = 36$ equally likely position pairs. The first wild card sits in position $4$ exactly when one wild card is at position $4$ and the other is somewhere in positions $5$ through $9$, which is $5$ of those pairs, so the probability is $\\frac{5}{36}$ ✓. USING THE UNCONDITIONAL FOURTH CARD gives $P(\\text{the fourth card is wild}) = \\frac{2}{9}$, which also allows a wild card earlier ✗. FORGETTING THAT THE FOURTH CARD MUST BE WILD leaves $\\frac{7}{9} \\times \\frac{6}{8} \\times \\frac{5}{7} = \\frac{5}{12}$ ✗. USING A STALE DENOMINATOR AT THE LAST STAGE gives $\\frac{7}{9} \\times \\frac{6}{8} \\times \\frac{5}{7} \\times \\frac{2}{9} = \\frac{5}{54}$; three cards are already gone, so the last stage is out of $6$, not $9$ ✗.',
    },
    {
      q: 'A box holds $3$ red and $3$ white balls. Balls are drawn at random one at a time without replacement until a red ball appears, and then the drawing stops. What is the probability that the drawing stops within the first two draws?',
      choices: ['$\\frac{1}{5}$', '$\\frac{3}{4}$', '$\\frac{1}{2}$', '$\\frac{4}{5}$'],
      answer: 3,
      solution:
        'The drawing fails to stop within two draws only when the first two balls are both white, which is $\\frac{3}{6} \\times \\frac{2}{5} = \\frac{6}{30} = \\frac{1}{5}$. Taking the complement, the probability of stopping is $1 - \\frac{1}{5} = \\frac{4}{5}$ ✓. Adding the two disjoint ways to stop is an independent route: stopping on the first draw is $\\frac{3}{6} = \\frac{1}{2}$, and stopping on the second is white then red, $\\frac{3}{6} \\times \\frac{3}{5} = \\frac{3}{10}$. Their sum is $\\frac{1}{2} + \\frac{3}{10} = \\frac{8}{10} = \\frac{4}{5}$ ✓. STOPPING AT THE COMPLEMENT reports the both-white value $\\frac{1}{5}$ without subtracting it from $1$ ✗. TREATING THE DRAWS AS INDEPENDENT gives $1 - \\left(\\frac{1}{2}\\right)^2 = \\frac{3}{4}$; the second draw comes from a box of $5$ ✗. USING THE FIRST DRAW ALONE gives $\\frac{1}{2}$ and forgets that a second draw can also end it ✗.',
    },
  ],

  // slot 10 — the position at which a specific special item appears.
  //          Lanes: second yellow is the fifth bead -> 4/21; first star is the fourth card -> 7/55;
  //          derived: the first blue marble is the fourth drawn -> 3/28.
  [
    {
      q: 'A bag holds $6$ green and $4$ yellow beads. All of them are drawn at random one at a time without replacement. What is the probability that the second yellow bead to appear is the fifth bead drawn?',
      choices: ['$\\frac{4}{21}$', '$\\frac{1}{21}$', '$\\frac{8}{21}$', '$\\frac{16}{63}$'],
      answer: 0,
      solution:
        'The event needs exactly one yellow bead among the first four draws and a yellow bead on the fifth. One order for the first four, yellow-green-green-green, has probability $\\frac{4}{10} \\times \\frac{6}{9} \\times \\frac{5}{8} \\times \\frac{4}{7} = \\frac{480}{5040} = \\frac{2}{21}$, and the yellow bead can sit in any of the $4$ positions, each order using the same four numerators and denominators rearranged, so $P(\\text{exactly one yellow in four}) = \\frac{8}{21}$. Then $3$ yellow beads remain among the $6$ beads left, so multiply by $\\frac{3}{6}$: $\\frac{8}{21} \\times \\frac{1}{2} = \\frac{4}{21}$ ✓. The positions of the yellow beads give a route with no stage products: the four yellow beads land in one of the $\\binom{10}{4} = 210$ equally likely sets of positions. The second yellow is at position $5$ exactly when one yellow is among positions $1$–$4$ and the other two are among positions $6$–$10$, which is $\\binom{4}{1}\\binom{5}{2} = 4 \\times 10 = 40$ sets, so the probability is $\\frac{40}{210} = \\frac{4}{21}$ ✓. USING ONE ORDER FOR THE FIRST FOUR gives $\\frac{2}{21} \\times \\frac{1}{2} = \\frac{1}{21}$ and forgets the other three placements of the early yellow ✗. FORGETTING THE FIFTH BEAD leaves $\\frac{8}{21}$, the probability of exactly one yellow among the first four ✗. USING A STALE YELLOW COUNT multiplies by $\\frac{4}{6}$ instead of $\\frac{3}{6}$ and gives $\\frac{16}{63}$; one yellow bead is already out ✗.',
    },
    {
      q: 'A pile of $12$ cards has $3$ starred cards. Cards are turned over one at a time at random without replacement. What is the probability that the first starred card to appear is the fourth card turned over?',
      choices: ['$\\frac{27}{256}$', '$\\frac{1}{4}$', '$\\frac{7}{55}$', '$\\frac{21}{55}$'],
      answer: 2,
      solution:
        'The first three cards must be plain and the fourth starred. Stage by stage: $\\frac{9}{12} \\times \\frac{8}{11} \\times \\frac{7}{10} \\times \\frac{3}{9} = \\frac{1512}{11880} = \\frac{7}{55}$ ✓. The positions of the starred cards give an independent route: a shuffle puts the three starred cards in one of the $\\binom{12}{3} = 220$ equally likely position sets. The first star is at position $4$ exactly when one star is at position $4$ and the other two are among positions $5$ through $12$, which is $\\binom{8}{2} = 28$ sets, so the probability is $\\frac{28}{220} = \\frac{7}{55}$ ✓. TURNING WITH REPLACEMENT gives $\\left(\\frac{9}{12}\\right)^3 \\times \\frac{3}{12} = \\frac{27}{256}$, but cards do not return to the pile ✗. USING THE UNCONDITIONAL FOURTH CARD gives $P(\\text{the fourth card is starred}) = \\frac{3}{12} = \\frac{1}{4}$, which also allows a star earlier ✗. FORGETTING THAT THE FOURTH CARD MUST BE STARRED leaves $\\frac{9}{12} \\times \\frac{8}{11} \\times \\frac{7}{10} = \\frac{21}{55}$ ✗.',
    },
    {
      q: 'A bag holds $5$ red and $3$ blue marbles. Marbles are drawn at random one at a time without replacement. What is the probability that the first blue marble to appear is the fourth marble drawn?',
      choices: ['$\\frac{3}{8}$', '$\\frac{3}{28}$', '$\\frac{5}{28}$', '$\\frac{3}{14}$'],
      answer: 1,
      solution:
        'The first three marbles must be red and the fourth blue. Stage by stage: $\\frac{5}{8} \\times \\frac{4}{7} \\times \\frac{3}{6} \\times \\frac{3}{5} = \\frac{180}{1680} = \\frac{3}{28}$ ✓. The positions of the blue marbles settle it without any stages: the three blue marbles occupy one of the $\\binom{8}{3} = 56$ equally likely position sets, and the first blue sits at position $4$ exactly when the other two blues are among positions $5$, $6$, $7$, $8$, which is $\\binom{4}{2} = 6$ sets. That gives $\\frac{6}{56} = \\frac{3}{28}$ ✓. USING THE UNCONDITIONAL FOURTH MARBLE gives $P(\\text{the fourth marble is blue}) = \\frac{3}{8}$, which also allows a blue marble earlier ✗. FORGETTING THAT THE FOURTH MARBLE MUST BE BLUE leaves $\\frac{5}{8} \\times \\frac{4}{7} \\times \\frac{3}{6} = \\frac{5}{28}$ ✗. ANSWERING FOR THE SECOND BLUE MARBLE, that is, the probability that the second blue is the fourth drawn, gives $\\frac{3}{14}$ — a different landmark ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 8,
  sections: {
    '8.5': s85,
  },
}
