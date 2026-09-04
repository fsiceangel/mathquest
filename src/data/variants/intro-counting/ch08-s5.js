// Counting chapter 8 — variations for §8.6, the multi-stage games.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Items are multiple choice: a question, four `choices`, an `answer` INDEX,
//    and a solution. The index is derived from the base problem’s index b,
//    never chosen: v1 = (b+1)%4, v2 = (b+3)%4, v3 = (b+2)%4. The base row for
//    §8.6 is 0 2 1 3 2 0 1 3 0 2, so the three derived rows are
//      v1: 1 3 2 0 3 1 2 0 1 3
//      v2: 3 1 0 2 1 3 0 2 3 1
//      v3: 2 0 3 1 0 2 3 1 2 0
//    and each was transcribed and then re-checked against the base file.
//  - Every key was computed exactly in node with rational arithmetic before a
//    single choice was written: an explicit stage tree for each game, with the
//    branch probabilities of every tree checked to total exactly $1$, plus
//    uniform-subset counts for the without-replacement games and a full
//    sequence sweep (and an independent state-machine recursion) for the
//    stop-on-two-in-a-row games. Every key matches its pin. Pin deviations: none.
//  - The two conditional slots — 3 and 4 — were never reasoned. For each, the
//    conditioning event and the joint event were ENUMERATED separately and then
//    divided: slot 3 over the four coin-then-spin leaves (P(no star) $=\frac{17}{24}$,
//    P(Spinner Q and no star) $=\frac38$), slot 4 over the four carnival leaves
//    (P(lost) $=\frac{5}{12}$, P(lost in the bonus round) $=\frac14$). The reversed
//    conditional was computed too — $\frac34$ and $\frac12$ — and each appears as
//    a distractor whose trap sentence says which direction is which.
//  - Every distractor value was computed in node as well, so each trap’s
//    attribution is arithmetically true rather than a guess. The classic slips
//    for this section are the ones stocked here: dropping a winning path, and
//    forgetting the orders within a path.
//  - Each solution runs two genuinely different routes that each end ✓ — paths
//    added against a complement, a stage tree against a count of equally likely
//    tickets, a path product against a uniform-subset count, an early-stopping
//    argument against a play-out-every-game count, a pair argument against a
//    geometric series — and route two never re-imports route one’s number. Each
//    wrong choice’s trap is then named in CAPS, ending ✗, in the order the
//    choices are listed.
//  - Conventions are settled in every stem: coins, dice, and spinners are fair
//    and independent unless a weight is given; draws say without replacement;
//    every repeated-trial stem says the trials are independent; and every game
//    says exactly what stops it and what counts as a win.

const sections = {
  '8.6': [
    // slot 1 — the first success on one of the first two trials.
    //          Lanes: bell $\frac25$ -> 16/25; daily raffle $\frac15$ -> 9/25;
    //          derived: three misses before a fourth spin -> 8/27.
    [
      {
        q: 'A spinner lands on a bell with probability $\\frac{2}{5}$ on every spin, and the spins are independent of one another. Kit spins it over and over and stops the moment a bell appears. What is the probability that the first bell comes on the first spin or on the second spin?',
        choices: ['$\\frac{4}{5}$', '$\\frac{16}{25}$', '$\\frac{6}{25}$', '$\\frac{9}{25}$'],
        answer: 1,
        solution:
          'List the paths that stop the spinning in time. A bell on the first spin is a path of length one, probability $\\frac{2}{5}$. A bell on the second spin is the path miss-then-bell, probability $\\frac{3}{5} \\cdot \\frac{2}{5} = \\frac{6}{25}$. The two paths part company at the first spin, so they are disjoint and they add: $\\frac{10}{25} + \\frac{6}{25} = \\frac{16}{25}$ ✓. The tree out to two spins has exactly three endings — bell, miss-bell, miss-miss — and $\\frac{10}{25} + \\frac{6}{25} + \\frac{9}{25} = 1$, so no path is missing. The complement gives the same number without touching either winning path. Kit fails only if both of the first two spins miss, and the spins are independent, so that has probability $\\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}$; therefore the answer is $1 - \\frac{9}{25} = \\frac{16}{25}$ ✓. ADDING $\\frac{2}{5} + \\frac{2}{5} = \\frac{4}{5}$ prices the second spin as though it happened whatever the first spin did, but a second spin is taken only after a miss ✗. TAKING $\\frac{6}{25}$ answers with the second-spin path alone and drops the first-spin path ✗. TAKING $\\frac{9}{25}$ answers with the complement, the chance that both spins miss ✗.',
      },
      {
        q: 'A shop holds a raffle every day, and each day’s raffle gives Mei a prize with probability $\\frac{1}{5}$, independently of every other day. She enters every day and stops entering the moment she wins a prize. What is the probability that she wins on one of her first two days?',
        choices: ['$\\frac{2}{5}$', '$\\frac{4}{25}$', '$\\frac{16}{25}$', '$\\frac{9}{25}$'],
        answer: 3,
        solution:
          'Two disjoint paths end with Mei holding a prize. She wins on day one with probability $\\frac{1}{5}$. She wins on day two along the path lose-then-win, probability $\\frac{4}{5} \\cdot \\frac{1}{5} = \\frac{4}{25}$. Add them: $\\frac{5}{25} + \\frac{4}{25} = \\frac{9}{25}$ ✓. The two-day tree ends in win, lose-win, or lose-lose, and $\\frac{5}{25} + \\frac{4}{25} + \\frac{16}{25} = 1$, so the list is complete. Complementary counting is quicker. The only way to fail is to lose both raffles, and the days are independent, so that probability is $\\left(\\frac{4}{5}\\right)^2 = \\frac{16}{25}$, leaving $1 - \\frac{16}{25} = \\frac{9}{25}$ ✓. ADDING $\\frac{1}{5} + \\frac{1}{5} = \\frac{2}{5}$ treats day two as certain to be played, but Mei enters it only after losing day one ✗. TAKING $\\frac{4}{25}$ keeps only the day-two path and forgets she could win immediately ✗. TAKING $\\frac{16}{25}$ answers with the chance she loses both days ✗.',
      },
      {
        q: 'A spinner lands on gold with probability $\\frac{1}{3}$ on every spin, the spins independent, and it is spun over and over until it lands on gold, at which point the spinning stops. What is the probability that the first three spins all miss, so that a fourth spin has to be taken?',
        choices: ['$\\frac{1}{27}$', '$\\frac{19}{27}$', '$\\frac{8}{27}$', '$\\frac{4}{27}$'],
        answer: 2,
        solution:
          'A fourth spin is taken exactly when spins one, two, and three all miss. Each spin misses with probability $\\frac{2}{3}$ and the spins are independent, so the path miss-miss-miss has probability $\\left(\\frac{2}{3}\\right)^3 = \\frac{8}{27}$ ✓. Sorting the endings by the spin that stops the game confirms it from the other side. The spinning stops on spin one with probability $\\frac{1}{3} = \\frac{9}{27}$, on spin two with probability $\\frac{2}{3} \\cdot \\frac{1}{3} = \\frac{6}{27}$, and on spin three with probability $\\left(\\frac{2}{3}\\right)^2 \\cdot \\frac{1}{3} = \\frac{4}{27}$. Those three disjoint paths cover every way of finishing inside three spins and total $\\frac{19}{27}$, so a fourth spin is needed with probability $1 - \\frac{19}{27} = \\frac{8}{27}$ ✓. TAKING $\\frac{1}{27}$ computes $\\left(\\frac{1}{3}\\right)^3$, the chance all three spins land on gold — but the spinning would have stopped after the first ✗. TAKING $\\frac{19}{27}$ answers with the chance the game finishes within three spins, the opposite event ✗. TAKING $\\frac{4}{27}$ answers with the single path that ends on spin three, not the paths that survive it ✗.',
      },
    ],
    // slot 2 — the first success on a stated later trial.
    //          Lanes: moon $\frac13$ on spin 3 or 4 -> 20/81; first bad package
    //          -> 55/216; reversed: solve $p(1-p)=\frac{6}{25}$ -> 2/5.
    [
      {
        q: 'A spinner lands on a moon with probability $\\frac{1}{3}$ on every spin, the spins independent, and it is spun over and over until a moon appears, at which point the spinning stops. What is the probability that the first moon comes on the third spin or on the fourth spin?',
        choices: ['$\\frac{4}{27}$', '$\\frac{8}{81}$', '$\\frac{2}{3}$', '$\\frac{20}{81}$'],
        answer: 3,
        solution:
          'Each ending is one forced path. The first moon on spin three is miss-miss-moon, probability $\\left(\\frac{2}{3}\\right)^2 \\cdot \\frac{1}{3} = \\frac{4}{27} = \\frac{12}{81}$. The first moon on spin four is miss-miss-miss-moon, probability $\\left(\\frac{2}{3}\\right)^3 \\cdot \\frac{1}{3} = \\frac{8}{81}$. The two paths differ at spin three, so they are disjoint: $\\frac{12}{81} + \\frac{8}{81} = \\frac{20}{81}$ ✓. A tail argument reaches the same value without either path. The spinning lasts at least three spins exactly when the first two miss, probability $\\left(\\frac{2}{3}\\right)^2 = \\frac{36}{81}$, and it lasts at least five spins exactly when the first four miss, probability $\\left(\\frac{2}{3}\\right)^4 = \\frac{16}{81}$. The moon lands on spin three or four precisely on the difference of those two tails: $\\frac{36}{81} - \\frac{16}{81} = \\frac{20}{81}$ ✓. TAKING $\\frac{4}{27}$ keeps only the spin-three path ✗. TAKING $\\frac{8}{81}$ keeps only the spin-four path ✗. ADDING $\\frac{1}{3} + \\frac{1}{3} = \\frac{2}{3}$ ignores the misses that have to come first on both paths ✗.',
      },
      {
        q: 'A machine seals each package correctly with probability $\\frac{5}{6}$, independently of every other package. An inspector checks the packages one at a time and stops the moment she finds a badly sealed one. What is the probability that the first badly sealed package is the second one she checks or the third one she checks?',
        choices: ['$\\frac{5}{36}$', '$\\frac{55}{216}$', '$\\frac{25}{216}$', '$\\frac{1}{3}$'],
        answer: 1,
        solution:
          'A package is badly sealed with probability $1 - \\frac{5}{6} = \\frac{1}{6}$. The first bad package is number two along the single path good-bad, probability $\\frac{5}{6} \\cdot \\frac{1}{6} = \\frac{5}{36} = \\frac{30}{216}$. It is number three along good-good-bad, probability $\\left(\\frac{5}{6}\\right)^2 \\cdot \\frac{1}{6} = \\frac{25}{216}$. The paths are disjoint, so add: $\\frac{30}{216} + \\frac{25}{216} = \\frac{55}{216}$ ✓. Tails give it again from nothing already used. The inspection reaches a second package exactly when the first is good, probability $\\frac{5}{6} = \\frac{180}{216}$, and it reaches a fourth package exactly when the first three are good, probability $\\left(\\frac{5}{6}\\right)^3 = \\frac{125}{216}$. Stopping on package two or three is the difference: $\\frac{180}{216} - \\frac{125}{216} = \\frac{55}{216}$ ✓. TAKING $\\frac{5}{36}$ keeps only the path that stops on package two ✗. TAKING $\\frac{25}{216}$ keeps only the path that stops on package three ✗. ADDING $\\frac{1}{6} + \\frac{1}{6} = \\frac{1}{3}$ forgets that the earlier packages have to be sealed correctly for the inspection to get that far ✗.',
      },
      {
        q: 'A spinner lands on a star with probability $p$ on every spin, the spins independent, and it is spun over and over until a star appears, at which point the spinning stops. The probability that the first star comes on exactly the second spin is $\\frac{6}{25}$, and $p < \\frac{1}{2}$. What is $p$?',
        choices: ['$\\frac{2}{5}$', '$\\frac{3}{5}$', '$\\frac{19}{25}$', '$\\frac{6}{25}$'],
        answer: 0,
        solution:
          'The first star lands on spin two along one path only: miss, then star. Its probability is $(1 - p)p$, so $(1 - p)p = \\frac{6}{25}$. Clear the denominator: $25p - 25p^2 = 6$, that is $25p^2 - 25p + 6 = 0$, which factors as $(5p - 2)(5p - 3) = 0$. The roots are $p = \\frac{2}{5}$ and $p = \\frac{3}{5}$, and only $\\frac{2}{5}$ satisfies $p < \\frac{1}{2}$ ✓. Testing values instead of solving reaches the same place. The denominator $25$ points at fifths, so run the path probability $(1 - p)p$ across them: $p = \\frac{1}{5}$ gives $\\frac{4}{5} \\cdot \\frac{1}{5} = \\frac{4}{25}$, $p = \\frac{2}{5}$ gives $\\frac{3}{5} \\cdot \\frac{2}{5} = \\frac{6}{25}$, $p = \\frac{3}{5}$ gives $\\frac{2}{5} \\cdot \\frac{3}{5} = \\frac{6}{25}$, and $p = \\frac{4}{5}$ gives $\\frac{4}{25}$ again. Two values work and only $\\frac{2}{5}$ is below $\\frac{1}{2}$ ✓. TAKING $\\frac{3}{5}$ picks the other root, which is above $\\frac{1}{2}$ and so is ruled out by the stem ✗. TAKING $\\frac{19}{25}$ comes from setting $1 - p = \\frac{6}{25}$, which prices the opening miss but forgets the star that follows it ✗. TAKING $\\frac{6}{25}$ answers with the given path probability instead of the per-spin probability ✗.',
      },
    ],
    // slot 3 — one stage chooses the machinery for the next.
    //          Lanes: die picks a bag -> 23/60; six-sector spinner with three
    //          different second stages -> 1/2; derived CONDITIONAL: which
    //          spinner, given no star -> 9/17.
    [
      {
        q: 'Lena rolls a standard fair die to choose a bag. On a $1$ or a $2$ she draws one marble at random from Bag X, which holds $2$ red and $3$ white marbles; on any other roll she draws one marble at random from Bag Y, which holds $3$ red and $5$ white marbles. She draws exactly one marble, from whichever bag the die chose, every marble in that bag equally likely, and the game ends with that single draw. What is the probability that Lena draws a red marble?',
        choices: ['$\\frac{31}{40}$', '$\\frac{31}{80}$', '$\\frac{23}{60}$', '$\\frac{3}{20}$'],
        answer: 2,
        solution:
          'The die sends her to Bag X with probability $\\frac{2}{6} = \\frac{1}{3}$ and to Bag Y with probability $\\frac{4}{6} = \\frac{2}{3}$. Two disjoint paths give a red marble. Bag X then red: $\\frac{1}{3} \\cdot \\frac{2}{5} = \\frac{2}{15} = \\frac{8}{60}$. Bag Y then red: $\\frac{2}{3} \\cdot \\frac{3}{8} = \\frac{1}{4} = \\frac{15}{60}$. Add: $\\frac{8}{60} + \\frac{15}{60} = \\frac{23}{60}$ ✓. The full tree has four leaves — the two above plus Bag X then white, $\\frac{1}{3} \\cdot \\frac{3}{5} = \\frac{12}{60}$, and Bag Y then white, $\\frac{2}{3} \\cdot \\frac{5}{8} = \\frac{25}{60}$ — and $\\frac{8}{60} + \\frac{12}{60} + \\frac{15}{60} + \\frac{25}{60} = 1$. Route two runs the white side and never touches a red branch. White comes from Bag X with probability $\\frac{1}{3} \\cdot \\frac{3}{5} = \\frac{1}{5} = \\frac{12}{60}$ and from Bag Y with probability $\\frac{2}{3} \\cdot \\frac{5}{8} = \\frac{5}{12} = \\frac{25}{60}$, so white has probability $\\frac{37}{60}$ and red has probability $1 - \\frac{37}{60} = \\frac{23}{60}$ ✓. ADDING $\\frac{2}{5} + \\frac{3}{8} = \\frac{31}{40}$ forgets the die entirely and prices both bags as though both were drawn from ✗. TAKING $\\frac{31}{80}$ splits the two bags evenly at $\\frac{1}{2}$ each, but the die sends Lena to Bag Y twice as often as to Bag X ✗. MULTIPLYING $\\frac{2}{5} \\cdot \\frac{3}{8} = \\frac{3}{20}$ prices a red from each bag at once, which never happens ✗.',
      },
      {
        q: 'A spinner has $6$ equal sections: $1$ is marked X, $2$ are marked Y, and $3$ are marked Z. Tam spins it once. On X he wins at once and the game ends. On Y he flips a fair coin and wins exactly when it shows heads. On Z he rolls a standard fair die and wins exactly when it shows a $5$ or a $6$. The coin and the die are independent of the spin, and the game ends after that second stage either way. What is the probability that Tam wins?',
        choices: ['$\\frac{1}{2}$', '$\\frac{11}{18}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$'],
        answer: 0,
        solution:
          'Three disjoint paths win. Landing on X wins outright: $\\frac{1}{6}$. Landing on Y and then flipping heads: $\\frac{2}{6} \\cdot \\frac{1}{2} = \\frac{1}{6}$. Landing on Z and then rolling a $5$ or a $6$: $\\frac{3}{6} \\cdot \\frac{2}{6} = \\frac{1}{6}$. The three paths happen to carry the same weight, and adding gives $\\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} = \\frac{1}{2}$ ✓. The tree also has two losing leaves, Y then tails at $\\frac{2}{6} \\cdot \\frac{1}{2} = \\frac{1}{6}$ and Z then a roll of $1$ through $4$ at $\\frac{3}{6} \\cdot \\frac{4}{6} = \\frac{1}{3}$, and $\\frac{1}{2} + \\frac{1}{6} + \\frac{1}{3} = 1$, so nothing is missing. Route two counts the losses only. Tam loses on Y with tails, probability $\\frac{1}{3} \\cdot \\frac{1}{2} = \\frac{1}{6}$, and on Z with a roll below $5$, probability $\\frac{1}{2} \\cdot \\frac{2}{3} = \\frac{1}{3}$; X never loses. So he loses with probability $\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2}$ and wins with probability $1 - \\frac{1}{2} = \\frac{1}{2}$ ✓. TAKING $\\frac{11}{18}$ treats X, Y, and Z as three equally likely results at $\\frac{1}{3}$ apiece, but their shares of the spinner are $\\frac{1}{6}$, $\\frac{2}{6}$, and $\\frac{3}{6}$ ✗. TAKING $\\frac{1}{6}$ counts only the instant win on X ✗. TAKING $\\frac{1}{3}$ adds just two of the three winning paths and drops the third ✗.',
      },
      {
        q: 'Lena flips a fair coin to choose a spinner. On heads she spins Spinner P, which has $3$ equal sections with exactly one of them marked with a star; on tails she spins Spinner Q, which has $4$ equal sections with exactly one of them marked with a star. She makes exactly one spin, on whichever spinner the coin chose, and the spin is independent of the flip. Given that her spin did NOT land on a star, what is the probability that she was spinning Spinner Q?',
        choices: ['$\\frac{3}{4}$', '$\\frac{1}{2}$', '$\\frac{3}{8}$', '$\\frac{9}{17}$'],
        answer: 3,
        solution:
          'Build the two-stage tree and read its four leaves off separately. Heads then a star: $\\frac{1}{2} \\cdot \\frac{1}{3} = \\frac{4}{24}$. Heads then no star: $\\frac{1}{2} \\cdot \\frac{2}{3} = \\frac{8}{24}$. Tails then a star: $\\frac{1}{2} \\cdot \\frac{1}{4} = \\frac{3}{24}$. Tails then no star: $\\frac{1}{2} \\cdot \\frac{3}{4} = \\frac{9}{24}$. Those four add to $\\frac{24}{24} = 1$, so the tree is complete. Now take the two events one at a time. The conditioning event, "no star", is the second and fourth leaves: $\\frac{8}{24} + \\frac{9}{24} = \\frac{17}{24}$. The joint event, "Spinner Q AND no star", is the fourth leaf alone: $\\frac{9}{24} = \\frac{3}{8}$. Dividing the joint by the conditioning event gives $\\frac{9/24}{17/24} = \\frac{9}{17}$ ✓. Equally likely tickets say the same thing by counting. Give the experiment $24$ tickets: $12$ for heads, split $4$ per section of Spinner P, and $12$ for tails, split $3$ per section of Spinner Q. Then $4$ tickets are heads-and-star, $8$ are heads-and-no-star, $3$ are tails-and-star, and $9$ are tails-and-no-star, which is $4 + 8 + 3 + 9 = 24$ ✓. Among the $8 + 9 = 17$ no-star tickets, $9$ belong to Spinner Q, so the answer is $\\frac{9}{17}$ ✓. TAKING $\\frac{3}{4}$ answers the REVERSED conditional, P(no star given Spinner Q): it divides the joint $\\frac{9}{24}$ by the $\\frac{12}{24}$ of tails outcomes instead of by the $\\frac{17}{24}$ of no-star outcomes ✗. TAKING $\\frac{1}{2}$ answers with P(Spinner Q) before the no-star news is used at all ✗. TAKING $\\frac{3}{8}$ stops at the joint probability of Spinner Q and no star, which still has to be divided by $\\frac{17}{24}$ ✗.',
      },
    ],
    // slot 4 — win at once, lose at once, or go to a bonus round.
    //          Lanes: eight-section spinner into a die -> 5/12; ten cards into a
    //          spinner -> 11/25; derived CONDITIONAL: where the loss happened,
    //          given a loss -> 3/5.
    [
      {
        q: 'Rui spins a spinner with $8$ equal sections numbered $1$ through $8$. A $1$ or a $2$ wins a prize at once and the game ends; a $3$ or a $4$ loses at once and the game ends; any other section sends her to a bonus round, where she rolls a standard fair die, independent of the spin, and wins a prize exactly when it shows a $5$ or a $6$. The game ends after the bonus round either way. What is the probability that Rui wins a prize?',
        choices: ['$\\frac{5}{12}$', '$\\frac{1}{4}$', '$\\frac{3}{4}$', '$\\frac{1}{2}$'],
        answer: 0,
        solution:
          'Two disjoint paths win. The instant win needs section $1$ or $2$: $\\frac{2}{8} = \\frac{1}{4}$. The bonus win needs one of the four sections $5$ through $8$ and then a $5$ or a $6$: $\\frac{4}{8} \\cdot \\frac{2}{6} = \\frac{1}{2} \\cdot \\frac{1}{3} = \\frac{1}{6}$. Add: $\\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$ ✓. The tree closes: instant win $\\frac{3}{12}$, instant loss $\\frac{3}{12}$, bonus win $\\frac{2}{12}$, and bonus loss $\\frac{4}{8} \\cdot \\frac{4}{6} = \\frac{4}{12}$, totalling $1$. Counting equally likely tickets gets there another way. Pair every spin with a roll of the die, even on the sections where the roll changes nothing: that makes $8 \\cdot 6 = 48$ equally likely pairs. Sections $1$ and $2$ win with any of the six faces, which is $2 \\cdot 6 = 12$ pairs. Sections $5$ through $8$ win only on faces $5$ and $6$, which is $4 \\cdot 2 = 8$ pairs. Sections $3$ and $4$ never win. So $12 + 8 = 20$ of the $48$ pairs win, and $\\frac{20}{48} = \\frac{5}{12}$ ✓. TAKING $\\frac{1}{4}$ counts only the instant win and drops the bonus-round path ✗. TAKING $\\frac{3}{4}$ counts the whole bonus branch as a win, as though reaching the bonus round were the same as winning it ✗. TAKING $\\frac{1}{2}$ sends the losing sections $3$ and $4$ to the bonus round too, giving $\\frac{1}{4} + \\frac{3}{4} \\cdot \\frac{1}{3}$, but those sections end the game at once ✗.',
      },
      {
        q: 'Rio draws one card at random from $10$ cards numbered $1$ through $10$, every card equally likely. A $9$ or a $10$ wins at once and the game ends; a $1$ or a $2$ loses at once and the game ends; any other card sends him to a bonus round, where he spins a spinner with $5$ equal sections, exactly $2$ of them winning. The spinner is independent of the card, and the game ends after the bonus round either way. What is the probability that Rio wins?',
        choices: ['$\\frac{1}{5}$', '$\\frac{4}{5}$', '$\\frac{11}{25}$', '$\\frac{3}{5}$'],
        answer: 2,
        solution:
          'Two disjoint winning paths. Instant win on a $9$ or a $10$: $\\frac{2}{10} = \\frac{1}{5} = \\frac{5}{25}$. Bonus win on one of the six cards $3$ through $8$ followed by a winning section: $\\frac{6}{10} \\cdot \\frac{2}{5} = \\frac{6}{25}$. Add: $\\frac{5}{25} + \\frac{6}{25} = \\frac{11}{25}$ ✓. The tree closes: instant win $\\frac{5}{25}$, instant loss $\\frac{5}{25}$, bonus win $\\frac{6}{25}$, bonus loss $\\frac{6}{10} \\cdot \\frac{3}{5} = \\frac{9}{25}$, and those total $1$. Equally likely tickets confirm it by counting. Pair every card with a spin, even where the spin is irrelevant: $10 \\cdot 5 = 50$ equally likely pairs. Cards $9$ and $10$ win on all five sections, $2 \\cdot 5 = 10$ pairs. Cards $3$ through $8$ win on two sections each, $6 \\cdot 2 = 12$ pairs. Cards $1$ and $2$ win on none. So $10 + 12 = 22$ of $50$ pairs win, and $\\frac{22}{50} = \\frac{11}{25}$ ✓. TAKING $\\frac{1}{5}$ counts only the instant win ✗. TAKING $\\frac{4}{5}$ treats every card that leads to the bonus round as a win already ✗. ADDING $\\frac{1}{5} + \\frac{2}{5} = \\frac{3}{5}$ uses the spinner’s chance at full weight, but Rio spins only after drawing one of the six middle cards ✗.',
      },
      {
        q: 'Vera plays a carnival game in stages. She rolls a standard fair die. A $5$ or a $6$ wins a prize at once and the game ends; a $1$ loses at once and the game ends; any other roll sends her to a bonus round, where she flips a fair coin, independent of the die, and wins a prize exactly when it shows heads, a tails losing. Given that Vera lost, what is the probability that she lost in the bonus round?',
        choices: ['$\\frac{1}{2}$', '$\\frac{3}{5}$', '$\\frac{1}{4}$', '$\\frac{2}{5}$'],
        answer: 1,
        solution:
          'Lay out the four leaves of the game and price them separately. Win at once, on a $5$ or a $6$: $\\frac{2}{6} = \\frac{4}{12}$. Lose at once, on a $1$: $\\frac{1}{6} = \\frac{2}{12}$. Reach the bonus round on a $2$, $3$, or $4$ and then flip heads: $\\frac{3}{6} \\cdot \\frac{1}{2} = \\frac{3}{12}$. Reach the bonus round and flip tails: $\\frac{3}{6} \\cdot \\frac{1}{2} = \\frac{3}{12}$. Those four total $\\frac{12}{12} = 1$, so the tree is complete. Now enumerate the two events on their own. The conditioning event, "Vera lost", is the two losing leaves: $\\frac{2}{12} + \\frac{3}{12} = \\frac{5}{12}$. The joint event, "she lost AND the loss came in the bonus round", is the fourth leaf alone: $\\frac{3}{12} = \\frac{1}{4}$. Divide the joint by the conditioning event: $\\frac{3/12}{5/12} = \\frac{3}{5}$ ✓. Equally likely tickets count it instead. Pair each die face with a coin flip, even on the faces where the flip changes nothing: $6 \\cdot 2 = 12$ equally likely pairs. Face $1$ loses with either flip, which is $2$ pairs; faces $2$, $3$, $4$ lose only with tails, which is $3$ pairs; faces $5$ and $6$ never lose. Of the $2 + 3 = 5$ losing pairs, $3$ are bonus-round losses, so the answer is $\\frac{3}{5}$ ✓. TAKING $\\frac{1}{2}$ answers the REVERSED conditional, P(she lost given that she reached the bonus round): that divides the $\\frac{1}{4}$ by the $\\frac{1}{2}$ chance of reaching the bonus round instead of by the $\\frac{5}{12}$ of all losses ✗. TAKING $\\frac{1}{4}$ stops at the joint probability of losing in the bonus round and never divides ✗. TAKING $\\frac{2}{5}$ answers with the other share of the same conditional, P(she lost at once given that she lost) $= \\frac{1/6}{5/12}$; the two shares add to $1$, and the bonus-round share is the larger one ✗.',
      },
    ],
    // slot 5 — shooting until the first failure, counting successes or trials.
    //          Lanes: baskets between $2$ and $4$ at $\frac35$ -> 882/3125;
    //          seeds $2$ or $3$ at $\frac34$ -> 63/256; derived: exactly five
    //          shots at $\frac23$ -> 16/243.
    [
      {
        q: 'Nova makes each free throw with probability $\\frac{3}{5}$, and her shots are independent. She keeps shooting and stops the moment she misses; the miss is not a basket. What is the probability that she makes at least $2$ baskets but no more than $4$ baskets?',
        choices: ['$\\frac{144}{625}$', '$\\frac{1632}{3125}$', '$\\frac{441}{625}$', '$\\frac{882}{3125}$'],
        answer: 3,
        solution:
          'Organize by the number of baskets. Making exactly $k$ baskets is one forced path — $k$ makes and then the miss that stops her — with probability $\\left(\\frac{3}{5}\\right)^k \\cdot \\frac{2}{5}$. So exactly $2$ baskets is $\\frac{9}{25} \\cdot \\frac{2}{5} = \\frac{18}{125} = \\frac{450}{3125}$, exactly $3$ is $\\frac{27}{125} \\cdot \\frac{2}{5} = \\frac{54}{625} = \\frac{270}{3125}$, and exactly $4$ is $\\frac{81}{625} \\cdot \\frac{2}{5} = \\frac{162}{3125}$. The three paths are disjoint, so add: $\\frac{450 + 270 + 162}{3125} = \\frac{882}{3125}$ ✓. Tails give it without any of those three products. Nova makes at least $k$ baskets exactly when her first $k$ shots all go in, probability $\\left(\\frac{3}{5}\\right)^k$. The event asked for is "at least $2$" minus "at least $5$": $\\left(\\frac{3}{5}\\right)^2 - \\left(\\frac{3}{5}\\right)^5 = \\frac{1125}{3125} - \\frac{243}{3125} = \\frac{882}{3125}$ ✓. TAKING $\\frac{144}{625}$ adds only the $2$-basket and $3$-basket paths and loses the $4$-basket path ✗. TAKING $\\frac{1632}{3125}$ throws in the $1$-basket path as well, answering "at least $1$ and at most $4$" ✗. TAKING $\\frac{441}{625}$ adds $\\left(\\frac{3}{5}\\right)^2 + \\left(\\frac{3}{5}\\right)^3 + \\left(\\frac{3}{5}\\right)^4$ and forgets the miss that has to end each path ✗.',
      },
      {
        q: 'A gardener plants seeds one at a time. Each seed sprouts with probability $\\frac{3}{4}$, independently of every other seed, and he stops planting the moment a seed fails to sprout. What is the probability that exactly $2$ or exactly $3$ of his seeds sprout before he stops?',
        choices: ['$\\frac{9}{64}$', '$\\frac{63}{256}$', '$\\frac{27}{256}$', '$\\frac{63}{64}$'],
        answer: 1,
        solution:
          'Each count of sprouts is one forced path: that many sprouts, then the failure that stops him. Exactly $2$ sprouts is $\\left(\\frac{3}{4}\\right)^2 \\cdot \\frac{1}{4} = \\frac{9}{64} = \\frac{36}{256}$. Exactly $3$ is $\\left(\\frac{3}{4}\\right)^3 \\cdot \\frac{1}{4} = \\frac{27}{256}$. The paths are disjoint, so add: $\\frac{36}{256} + \\frac{27}{256} = \\frac{63}{256}$ ✓. A difference of tails avoids both products. He gets at least $k$ sprouts exactly when his first $k$ seeds all take, probability $\\left(\\frac{3}{4}\\right)^k$. The event is "at least $2$" minus "at least $4$": $\\left(\\frac{3}{4}\\right)^2 - \\left(\\frac{3}{4}\\right)^4 = \\frac{144}{256} - \\frac{81}{256} = \\frac{63}{256}$ ✓. TAKING $\\frac{9}{64}$ keeps only the $2$-sprout path ✗. TAKING $\\frac{27}{256}$ keeps only the $3$-sprout path ✗. TAKING $\\frac{63}{64}$ adds $\\left(\\frac{3}{4}\\right)^2 + \\left(\\frac{3}{4}\\right)^3$ and forgets the failed seed that has to end each path ✗.',
      },
      {
        q: 'Star makes each free throw with probability $\\frac{2}{3}$, and her shots are independent. She keeps shooting and stops the moment she misses; the miss counts as one of her shots. What is the probability that she takes exactly $5$ shots?',
        choices: ['$\\frac{16}{243}$', '$\\frac{32}{243}$', '$\\frac{80}{243}$', '$\\frac{32}{729}$'],
        answer: 0,
        solution:
          'Count shots, not baskets. Taking exactly $5$ shots means shots $1$ through $4$ all go in — otherwise she would have stopped earlier — and shot $5$ is the miss. That is one forced path, with probability $\\left(\\frac{2}{3}\\right)^4 \\cdot \\frac{1}{3} = \\frac{16}{81} \\cdot \\frac{1}{3} = \\frac{16}{243}$ ✓. A difference of tails gives the same value from the other direction. She takes at least $5$ shots exactly when her first $4$ go in, probability $\\left(\\frac{2}{3}\\right)^4 = \\frac{48}{243}$; she takes at least $6$ shots exactly when her first $5$ go in, probability $\\left(\\frac{2}{3}\\right)^5 = \\frac{32}{243}$. Exactly $5$ is the difference: $\\frac{48}{243} - \\frac{32}{243} = \\frac{16}{243}$ ✓. TAKING $\\frac{32}{243}$ computes $\\left(\\frac{2}{3}\\right)^5$, five makes in a row, but a run of makes never stops the game ✗. TAKING $\\frac{80}{243}$ multiplies by $\\binom{5}{4} = 5$, letting the miss fall anywhere among the five shots, though the miss must come last ✗. TAKING $\\frac{32}{729}$ computes $\\left(\\frac{2}{3}\\right)^5 \\cdot \\frac{1}{3}$, which is five BASKETS and so six shots ✗.',
      },
    ],
    // slot 6 — rounds that either decide the game or restart it unchanged.
    //          Lanes: two dice, ties replay -> 35/72; cards with a third
    //          outcome for the opponent -> 129/256; derived: Ana inside three
    //          rounds -> 7/16.
    [
      {
        q: 'Each round, Rai and Sim each roll a standard fair die at the same time, all rolls independent. Rai wins the game at once if her number is strictly larger than Sim’s; Sim wins at once if his number is strictly larger; if the two numbers are equal the round decides nothing and a brand new round is played, with the game in exactly the state it started in. What is the probability that Rai wins during the first two rounds?',
        choices: ['$\\frac{5}{12}$', '$\\frac{35}{72}$', '$\\frac{5}{6}$', '$\\frac{95}{144}$'],
        answer: 1,
        solution:
          'Price one round first. Of the $36$ equally likely ordered pairs of numbers, $6$ are equal, and the remaining $30$ split evenly by symmetry, so Rai is larger in $15$ and Sim is larger in $15$. One round therefore gives Rai a win with probability $\\frac{15}{36} = \\frac{5}{12}$, Sim a win with probability $\\frac{5}{12}$, and a replay with probability $\\frac{6}{36} = \\frac{1}{6}$; those three add to $1$. Rai wins in round one with probability $\\frac{5}{12} = \\frac{30}{72}$. A second round is played only after a tie, so she wins in round two along the path tie-then-win: $\\frac{1}{6} \\cdot \\frac{5}{12} = \\frac{5}{72}$. Add the disjoint paths: $\\frac{30}{72} + \\frac{5}{72} = \\frac{35}{72}$ ✓. Route two never lists a path. The game is settled by the first round that is not a tie, and on a decided round Rai and Sim are interchangeable, so Rai takes it with probability $\\frac{1}{2}$. The first two rounds fail to decide anything only if both are ties, probability $\\left(\\frac{1}{6}\\right)^2 = \\frac{1}{36}$, so something is decided within two rounds with probability $\\frac{35}{36}$, and Rai owns half of that: $\\frac{1}{2} \\cdot \\frac{35}{36} = \\frac{35}{72}$ ✓. TAKING $\\frac{5}{12}$ counts round one alone ✗. ADDING $\\frac{5}{12} + \\frac{5}{12} = \\frac{5}{6}$ prices round two as though it were always played ✗. TAKING $\\frac{95}{144}$ uses "Rai did not win round one", probability $\\frac{21}{36} = \\frac{7}{12}$, as the chance of reaching round two, but the game continues only on a tie, not on a Sim win ✗.',
      },
      {
        q: 'Each round, one card is drawn at random from $8$ cards numbered $1$ through $8$ and then put back, so every card is equally likely each time and the rounds are independent. A $1$ or a $2$ ends the game with Bo winning; a $3$ ends the game with Cy winning; any other card decides nothing and a brand new round is played. What is the probability that Bo wins during the first three rounds?',
        choices: ['$\\frac{1}{4}$', '$\\frac{3}{4}$', '$\\frac{37}{64}$', '$\\frac{129}{256}$'],
        answer: 3,
        solution:
          'One round gives Bo the game with probability $\\frac{2}{8} = \\frac{1}{4}$, Cy the game with probability $\\frac{1}{8}$, and a replay with probability $\\frac{5}{8}$; those add to $\\frac{8}{8} = 1$. Bo wins in round one with probability $\\frac{1}{4}$, in round two along replay-then-win with probability $\\frac{5}{8} \\cdot \\frac{1}{4}$, and in round three along replay-replay-win with probability $\\left(\\frac{5}{8}\\right)^2 \\cdot \\frac{1}{4}$. Adding the three disjoint paths, $\\frac{1}{4}\\left(1 + \\frac{5}{8} + \\frac{25}{64}\\right) = \\frac{1}{4} \\cdot \\frac{129}{64} = \\frac{129}{256}$ ✓. Route two splits the question in two and never writes a path. The game is settled by the first round that is not a replay, and on such a round Bo’s share is $\\frac{2/8}{3/8} = \\frac{2}{3}$. The first three rounds settle nothing only if all three replay, probability $\\left(\\frac{5}{8}\\right)^3 = \\frac{125}{512}$, so the game ends within three rounds with probability $\\frac{387}{512}$. Bo owns two thirds of that: $\\frac{2}{3} \\cdot \\frac{387}{512} = \\frac{258}{512} = \\frac{129}{256}$ ✓. TAKING $\\frac{1}{4}$ counts round one alone ✗. ADDING $\\frac{1}{4}$ three times to get $\\frac{3}{4}$ prices all three rounds as though all three were always played ✗. TAKING $\\frac{37}{64}$ uses "Bo did not win", probability $\\frac{3}{4}$, as the chance of reaching the next round, but a $3$ ends the game with Cy winning ✗.',
      },
      {
        q: 'Ana and Ben play a game in rounds. In each round both flip a fair coin at the same time, all flips independent. Ana wins the game at once if her coin shows heads and Ben’s shows tails; Ben wins at once if his shows heads and Ana’s shows tails; if the two coins match, the round decides nothing and a brand new round is played. What is the probability that Ana wins during the first three rounds?',
        choices: ['$\\frac{3}{8}$', '$\\frac{3}{4}$', '$\\frac{7}{16}$', '$\\frac{1}{2}$'],
        answer: 2,
        solution:
          'One round has four equally likely results: heads-tails gives Ana the game, tails-heads gives it to Ben, and the two matching results replay. So a round gives Ana $\\frac{1}{4}$, Ben $\\frac{1}{4}$, and a replay $\\frac{1}{2}$, adding to $1$. Ana wins in round one with probability $\\frac{1}{4}$, in round two along replay-then-win with probability $\\frac{1}{2} \\cdot \\frac{1}{4} = \\frac{1}{8}$, and in round three along replay-replay-win with probability $\\left(\\frac{1}{2}\\right)^2 \\cdot \\frac{1}{4} = \\frac{1}{16}$. Add the disjoint paths: $\\frac{4}{16} + \\frac{2}{16} + \\frac{1}{16} = \\frac{7}{16}$ ✓. Route two argues from the deciding round. The game is settled by the first round whose coins differ, and by symmetry Ana takes that round with probability $\\frac{1}{2}$. Three rounds all fail to decide with probability $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$, so the game ends within three rounds with probability $\\frac{7}{8}$, and Ana owns half of it: $\\frac{1}{2} \\cdot \\frac{7}{8} = \\frac{7}{16}$ ✓. TAKING $\\frac{3}{8}$ stops after two rounds and drops the round-three path ✗. ADDING $\\frac{1}{4}$ three times to get $\\frac{3}{4}$ prices all three rounds as though they were always played ✗. TAKING $\\frac{1}{2}$ is Ana’s chance of winning eventually, with no three-round limit at all ✗.',
      },
    ],
    // slot 7 — drawing without replacement until a fixed number of specials
    //          are out. Lanes: three blues of eight marbles, ends on draw $5$
    //          -> 3/28; two marked of seven cards, stops on card $4$ -> 9/35;
    //          derived: both blues on draw $2$ -> 1/10.
    [
      {
        q: 'A bag holds $5$ red and $3$ blue marbles. Marbles are drawn at random one at a time without replacement, and the drawing stops the moment all THREE blue marbles have been drawn. What is the probability that the drawing ends on the fifth draw?',
        choices: ['$\\frac{1}{56}$', '$\\frac{3}{56}$', '$\\frac{3}{28}$', '$\\frac{5}{28}$'],
        answer: 2,
        solution:
          'Look only at which draws the blue marbles land on. Every choice of $3$ of the $8$ draw positions for the blues is equally likely, and there are $\\binom{8}{3} = 56$ of them. The drawing ends on draw $5$ exactly when draw $5$ is blue and the other two blues sit among draws $1$ through $4$, which can happen in $\\binom{4}{2} = 6$ ways. So the probability is $\\frac{6}{56} = \\frac{3}{28}$ ✓. Sorting all endings this way — $\\binom{2}{2} = 1$ ending on draw $3$, $\\binom{3}{2} = 3$ on draw $4$, $6$ on draw $5$, $10$ on draw $6$, $15$ on draw $7$, $21$ on draw $8$ — gives $1 + 3 + 6 + 10 + 15 + 21 = 56$, the whole space. Multiplying along the paths is the second route. The first four draws must be $2$ blue and $2$ red in some order, $\\binom{4}{2} = 6$ orders, and the fifth draw is the last blue. Every one of those orders has the same probability, because they all use the same numerators: for instance blue-blue-red-red-blue is $\\frac{3}{8} \\cdot \\frac{2}{7} \\cdot \\frac{5}{6} \\cdot \\frac{4}{5} \\cdot \\frac{1}{4} = \\frac{120}{6720} = \\frac{1}{56}$. Six such paths give $\\frac{6}{56} = \\frac{3}{28}$ ✓. TAKING $\\frac{1}{56}$ prices a single order of the first four draws, when there are six ✗. TAKING $\\frac{3}{56}$ answers for the drawing ending on the FOURTH draw, where only $\\binom{3}{2} = 3$ arrangements work ✗. TAKING $\\frac{5}{28}$ adds the endings on draws $3$, $4$, and $5$, answering "ends on or before the fifth draw" ✗.',
      },
      {
        q: 'A pile of $7$ cards contains $3$ marked cards. The cards are turned over one at a time in a random order, every order equally likely, and the turning stops the moment TWO marked cards have appeared. What is the probability that it stops on the fourth card?',
        choices: ['$\\frac{9}{35}$', '$\\frac{3}{35}$', '$\\frac{8}{35}$', '$\\frac{22}{35}$'],
        answer: 0,
        solution:
          'Work with the positions of the marked cards. Every choice of $3$ of the $7$ positions is equally likely, and there are $\\binom{7}{3} = 35$ of them. Stopping on card $4$ needs position $4$ marked, exactly one of positions $1$, $2$, $3$ marked, and the third marked card somewhere in positions $5$, $6$, $7$. That is $3$ choices for the early one times $3$ choices for the late one, so $9$ position sets, and the probability is $\\frac{9}{35}$ ✓. Sorting every stopping point this way gives $1 \\cdot 5 = 5$ sets stopping on card $2$, $2 \\cdot 4 = 8$ on card $3$, $9$ on card $4$, $4 \\cdot 2 = 8$ on card $5$, and $5 \\cdot 1 = 5$ on card $6$, and $5 + 8 + 9 + 8 + 5 = 35$, the whole space. Multiplying along the paths is the second route. The first three cards are one marked and two unmarked in some order — $3$ orders — and the fourth card is marked. One such order, marked-unmarked-unmarked-marked, has probability $\\frac{3}{7} \\cdot \\frac{4}{6} \\cdot \\frac{3}{5} \\cdot \\frac{2}{4} = \\frac{72}{840} = \\frac{3}{35}$, and all three orders share it because they share numerators. So $3 \\cdot \\frac{3}{35} = \\frac{9}{35}$ ✓. TAKING $\\frac{3}{35}$ prices only one of the three orders of the first three cards ✗. TAKING $\\frac{8}{35}$ answers for stopping on the THIRD card ✗. TAKING $\\frac{22}{35}$ adds the stops on cards $2$, $3$, and $4$, answering "stops on or before the fourth card" ✗.',
      },
      {
        q: 'A bag holds $3$ red and $2$ blue marbles. Marbles are drawn at random one at a time without replacement, and the drawing stops the moment both blue marbles have been drawn. What is the probability that the drawing ends on the second draw?',
        choices: ['$\\frac{4}{25}$', '$\\frac{3}{10}$', '$\\frac{2}{5}$', '$\\frac{1}{10}$'],
        answer: 3,
        solution:
          'The drawing ends on draw $2$ only when both of the first two marbles are blue. Multiplying along that single path, the first marble is blue with probability $\\frac{2}{5}$, and then one blue remains among the four marbles left, so the second is blue with probability $\\frac{1}{4}$: $\\frac{2}{5} \\cdot \\frac{1}{4} = \\frac{1}{10}$ ✓. Counting positions is the second route. Every choice of which $2$ of the $5$ draws hold the blue marbles is equally likely, and there are $\\binom{5}{2} = 10$ such choices; exactly one of them puts both blues on draws $1$ and $2$, so the probability is $\\frac{1}{10}$ ✓. The other endings check out too: $1$ set ends on draw $2$, $2$ on draw $3$, $3$ on draw $4$, and $4$ on draw $5$, and $1 + 2 + 3 + 4 = 10$. TAKING $\\frac{4}{25}$ computes $\\left(\\frac{2}{5}\\right)^2$, which would be right if the first marble were put back, but it is not ✗. TAKING $\\frac{3}{10}$ answers for the drawing ending on the FOURTH draw ✗. TAKING $\\frac{2}{5}$ is only the chance that the first marble is blue, which by itself ends nothing ✗.',
      },
    ],
    // slot 8 — series that stop the moment somebody reaches the target.
    //          Lanes: first to $3$ at $\frac34$, exactly five games -> 27/128;
    //          first to $2$ at $\frac25$, exactly two sets -> 13/25; derived:
    //          the loser of game 1 comes back to win the series -> 22/81.
    [
      {
        q: 'Two teams play a series that ends the moment one team has won $3$ games. There are no tied games, and the Comets win each game with probability $\\frac{3}{4}$, independently of every other game. What is the probability that the series ends after exactly $5$ games?',
        choices: ['$\\frac{27}{128}$', '$\\frac{9}{256}$', '$\\frac{81}{512}$', '$\\frac{3}{8}$'],
        answer: 0,
        solution:
          'A fifth game is played exactly when the first four games split $2$–$2$, and once they do, game $5$ is certain to end the series, because the winner of it reaches $3$. So the answer is just the probability of a $2$–$2$ split. There are $\\binom{4}{2} = 6$ orders for which two games the Comets take, and each order has probability $\\left(\\frac{3}{4}\\right)^2\\left(\\frac{1}{4}\\right)^2 = \\frac{9}{256}$, giving $6 \\cdot \\frac{9}{256} = \\frac{54}{256} = \\frac{27}{128}$ ✓. Route two builds game $5$ explicitly and splits it by who clinches. The Comets clinch in five along $6$ paths of three Comet wins and two losses, each $\\left(\\frac{3}{4}\\right)^3\\left(\\frac{1}{4}\\right)^2 = \\frac{27}{1024}$, for $\\frac{162}{1024}$; the other team clinches in five along $6$ paths of three losses and two Comet wins, each $\\left(\\frac{3}{4}\\right)^2\\left(\\frac{1}{4}\\right)^3 = \\frac{9}{1024}$, for $\\frac{54}{1024}$. Add: $\\frac{216}{1024} = \\frac{27}{128}$ ✓. TAKING $\\frac{9}{256}$ prices one $2$–$2$ order and forgets the six ways to arrange it ✗. TAKING $\\frac{81}{512}$ keeps only the branch where the Comets themselves win in five and drops the other team’s five-game wins ✗. TAKING $\\frac{3}{8}$ computes $\\binom{4}{2}\\left(\\frac{1}{2}\\right)^4$, pricing the games as fair coin flips instead of $\\frac{3}{4}$ ✗.',
      },
      {
        q: 'Ida and Jun play a match that ends the moment one of them has won $2$ sets. There are no tied sets, and Ida wins each set with probability $\\frac{2}{5}$, independently of every other set. What is the probability that the match ends after exactly $2$ sets?',
        choices: ['$\\frac{4}{25}$', '$\\frac{9}{25}$', '$\\frac{13}{25}$', '$\\frac{12}{25}$'],
        answer: 2,
        solution:
          'The match ends in two sets exactly when one player sweeps them both, and there are two disjoint sweeps. Ida takes both with probability $\\left(\\frac{2}{5}\\right)^2 = \\frac{4}{25}$; Jun takes both with probability $\\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}$. Add: $\\frac{4}{25} + \\frac{9}{25} = \\frac{13}{25}$ ✓. The complement gets there without either sweep. The match runs past two sets exactly when the first two sets are split, which happens in two orders — Ida then Jun, or Jun then Ida — each of probability $\\frac{2}{5} \\cdot \\frac{3}{5} = \\frac{6}{25}$, for $\\frac{12}{25}$. So the match ends in two sets with probability $1 - \\frac{12}{25} = \\frac{13}{25}$ ✓, and $\\frac{13}{25} + \\frac{12}{25} = 1$ confirms the two lengths cover everything. TAKING $\\frac{4}{25}$ counts only Ida’s sweep and forgets that Jun sweeping also ends the match in two ✗. TAKING $\\frac{9}{25}$ counts only Jun’s sweep ✗. TAKING $\\frac{12}{25}$ answers with the split, which is the probability the match lasts THREE sets ✗.',
      },
      {
        q: 'Two teams play a series that ends the moment one team has won $3$ games. There are no tied games, and the Rockets win each game with probability $\\frac{2}{3}$, independently of every other game. What is the probability that the team that loses game $1$ comes back and wins the series?',
        choices: ['$\\frac{10}{81}$', '$\\frac{22}{81}$', '$\\frac{16}{81}$', '$\\frac{2}{27}$'],
        answer: 1,
        solution:
          'Split on who loses the opening game; either way that team must then win $3$ games before the other side wins $2$ more. Say the Rockets lose game $1$, which happens with probability $\\frac{1}{3}$. They can sweep games $2$, $3$, and $4$, probability $\\left(\\frac{2}{3}\\right)^3 = \\frac{8}{27}$; or they can drop exactly one of games $2$, $3$, $4$ and take game $5$, which is $3$ orders each of probability $\\left(\\frac{2}{3}\\right)^3 \\cdot \\frac{1}{3} = \\frac{8}{81}$, for $\\frac{24}{81} = \\frac{8}{27}$. So from $0$–$1$ down they recover with probability $\\frac{8}{27} + \\frac{8}{27} = \\frac{16}{27}$, and this branch contributes $\\frac{1}{3} \\cdot \\frac{16}{27} = \\frac{16}{81}$. Now say the Rockets win game $1$, probability $\\frac{2}{3}$. Their opponents sweep games $2$–$4$ with probability $\\left(\\frac{1}{3}\\right)^3 = \\frac{1}{27}$, or drop one of those three and take game $5$, $3$ orders each of probability $\\left(\\frac{1}{3}\\right)^3 \\cdot \\frac{2}{3} = \\frac{2}{81}$, for $\\frac{6}{81} = \\frac{2}{27}$; that is $\\frac{1}{27} + \\frac{2}{27} = \\frac{1}{9}$ in all, so this branch contributes $\\frac{2}{3} \\cdot \\frac{1}{9} = \\frac{6}{81}$. The two branches are disjoint, since they disagree about game $1$: $\\frac{16}{81} + \\frac{6}{81} = \\frac{22}{81}$ ✓. Route two never looks at game $1$ first; it sorts the series by length. A three-game series is a sweep, and a team that sweeps did not lose game $1$, so three-game series contribute nothing. In a four-game series the losing side wins exactly one game, and for this event that game must be game $1$, so the series reads loss-win-win-win for its winner: the Rockets do that with probability $\\frac{1}{3}\\left(\\frac{2}{3}\\right)^3 = \\frac{8}{81}$, their opponents with probability $\\frac{2}{3}\\left(\\frac{1}{3}\\right)^3 = \\frac{2}{81}$, for $\\frac{10}{81}$. In a five-game series the losing side wins two of the first four games, one of them game $1$, leaving $3$ places for the other: the Rockets win such a series with probability $3\\left(\\frac{2}{3}\\right)^3\\left(\\frac{1}{3}\\right)^2 = \\frac{8}{81}$, their opponents with probability $3\\left(\\frac{1}{3}\\right)^3\\left(\\frac{2}{3}\\right)^2 = \\frac{4}{81}$, for $\\frac{12}{81}$. Add: $\\frac{10}{81} + \\frac{12}{81} = \\frac{22}{81}$ ✓. The lengths themselves total $\\frac{9}{27} + \\frac{10}{27} + \\frac{8}{27} = 1$, so no ending is missing. TAKING $\\frac{10}{81}$ counts only the comebacks that finish in four games and drops the five-game ones ✗. TAKING $\\frac{16}{81}$ keeps only the branch in which the ROCKETS are the team that loses game $1$ and recovers, forgetting that their opponents can do it too ✗. TAKING $\\frac{2}{27}$ keeps only the opponents’ branch, the smaller of the two ✗.',
      },
    ],
    // slot 9 — shooting until two successes land back to back.
    //          Lanes: $p=\frac13$ exactly four shots -> 2/27; $p=\frac25$
    //          exactly five spins -> 252/3125; derived: $p=\frac12$, still
    //          shooting after five shots -> 13/32.
    [
      {
        q: 'Dara makes each free throw with probability $\\frac{1}{3}$, and her shots are independent. She keeps shooting until she has made two baskets in a row, and she stops the moment that happens. What is the probability that she takes exactly $4$ shots?',
        choices: ['$\\frac{8}{81}$', '$\\frac{2}{27}$', '$\\frac{4}{81}$', '$\\frac{1}{9}$'],
        answer: 1,
        solution:
          'Work backwards from the stop. Shots $3$ and $4$ must both be makes, since the game ends on the second of the pair. Shot $2$ must be a miss: a make there would have paired with shot $3$ and stopped her after three shots. Shot $1$ is then free, and neither of its values ends the game early, because shot $2$ misses. That leaves exactly two paths. Make-miss-make-make has probability $\\frac{1}{3} \\cdot \\frac{2}{3} \\cdot \\frac{1}{3} \\cdot \\frac{1}{3} = \\frac{2}{81}$, and miss-miss-make-make has probability $\\frac{2}{3} \\cdot \\frac{2}{3} \\cdot \\frac{1}{3} \\cdot \\frac{1}{3} = \\frac{4}{81}$. Add: $\\frac{6}{81} = \\frac{2}{27}$ ✓. Route two runs the game forward as a two-state machine and never lists a path. After each shot a game still going is in state A, meaning the last shot was a make, or state B, meaning it was a miss. After shot $1$: A has $\\frac{1}{3}$, B has $\\frac{2}{3}$. Shot $2$ stops the game from A with a make, probability $\\frac{1}{3} \\cdot \\frac{1}{3} = \\frac{1}{9}$; the survivors are A $= \\frac{2}{3} \\cdot \\frac{1}{3} = \\frac{2}{9}$ and B $= \\left(\\frac{1}{3} + \\frac{2}{3}\\right)\\frac{2}{3} = \\frac{2}{3}$, and $\\frac{1}{9} + \\frac{2}{9} + \\frac{2}{3} = 1$. Shot $3$ stops from A with probability $\\frac{2}{9} \\cdot \\frac{1}{3} = \\frac{2}{27}$, leaving A $= \\frac{2}{3} \\cdot \\frac{1}{3} = \\frac{2}{9}$. Shot $4$ then stops from A with probability $\\frac{2}{9} \\cdot \\frac{1}{3} = \\frac{2}{27}$ ✓. TAKING $\\frac{8}{81}$ allows the first two shots to be anything but make-make, computing $\\left(1 - \\frac{1}{9}\\right)\\left(\\frac{1}{3}\\right)^2$, and forgets that shot $2$ specifically must miss ✗. TAKING $\\frac{4}{81}$ keeps only the miss-miss beginning and drops the make-miss one ✗. TAKING $\\frac{1}{9}$ prices the two closing makes and ignores the first two shots entirely ✗.',
      },
      {
        q: 'A spinner has $5$ equal sections, exactly $2$ of them gold, and the spins are independent. It is spun over and over and stops the moment two consecutive spins both land on gold. What is the probability that it takes exactly $5$ spins?',
        choices: ['$\\frac{84}{625}$', '$\\frac{108}{3125}$', '$\\frac{4}{25}$', '$\\frac{252}{3125}$'],
        answer: 3,
        solution:
          'A spin lands on gold with probability $\\frac{2}{5}$ and misses with probability $\\frac{3}{5}$. Spins $4$ and $5$ must both be gold. Spin $3$ must miss, or spins $3$ and $4$ would have stopped the spinner at spin $4$. Spins $1$ and $2$ may be anything except gold-gold, which would have stopped it at spin $2$; and since spin $3$ misses, nothing else can end the game early. The chance the first two spins are not both gold is $1 - \\left(\\frac{2}{5}\\right)^2 = \\frac{21}{25}$, so the answer is $\\frac{21}{25} \\cdot \\frac{3}{5} \\cdot \\left(\\frac{2}{5}\\right)^2 = \\frac{21}{25} \\cdot \\frac{3}{5} \\cdot \\frac{4}{25} = \\frac{252}{3125}$ ✓. Route two lists the allowed beginnings instead of subtracting. Writing G for gold and n for a miss, spins $1$ through $3$ must avoid an adjacent GG and must end in n, which leaves exactly three beginnings: nnn at $\\left(\\frac{3}{5}\\right)^3 = \\frac{27}{125}$, nGn at $\\frac{3}{5} \\cdot \\frac{2}{5} \\cdot \\frac{3}{5} = \\frac{18}{125}$, and Gnn at $\\frac{2}{5} \\cdot \\frac{3}{5} \\cdot \\frac{3}{5} = \\frac{18}{125}$, totalling $\\frac{63}{125}$. Each is then followed by GG at $\\frac{4}{25}$: $\\frac{63}{125} \\cdot \\frac{4}{25} = \\frac{252}{3125}$ ✓. TAKING $\\frac{84}{625}$ drops the requirement that spin $3$ miss, computing $\\frac{21}{25} \\cdot \\frac{4}{25}$ ✗. TAKING $\\frac{108}{3125}$ keeps only the beginning where all three early spins miss and loses nGn and Gnn ✗. TAKING $\\frac{4}{25}$ prices only the two closing gold spins and ignores the first three ✗.',
      },
      {
        q: 'Star makes each free throw with probability $\\frac{1}{2}$, and her shots are independent. She keeps shooting until she has made two baskets in a row, and she stops the moment that happens. What is the probability that she has not stopped after $5$ shots, so that a sixth shot is needed?',
        choices: ['$\\frac{19}{32}$', '$\\frac{17}{32}$', '$\\frac{13}{32}$', '$\\frac{1}{2}$'],
        answer: 2,
        solution:
          'Route one prices every way the game can already be over and takes the complement. She stops on shot $2$ only by make-make, probability $\\frac{1}{4} = \\frac{8}{32}$. She stops on shot $3$ by miss-make-make — shot $1$ has to be a miss, or she would have stopped at shot $2$ — probability $\\frac{1}{8} = \\frac{4}{32}$. She stops on shot $4$ when shots $3$ and $4$ are makes and shot $2$ is a miss, with shot $1$ free: $2$ four-shot sequences, each of probability $\\frac{1}{16}$, so $\\frac{1}{8} = \\frac{4}{32}$. She stops on shot $5$ when shots $4$ and $5$ are makes, shot $3$ is a miss, and shots $1$ and $2$ are anything but make-make: $3$ sequences, each of probability $\\frac{1}{32}$, so $\\frac{3}{32}$. Those four endings are disjoint and cover every finish inside five shots, totalling $\\frac{8 + 4 + 4 + 3}{32} = \\frac{19}{32}$, so a sixth shot is needed with probability $1 - \\frac{19}{32} = \\frac{13}{32}$ ✓. Route two never mentions a stopping time. Imagine she stubbornly takes all $5$ shots even after a stop; the extra shots cannot undo a pair of makes, so she is still shooting after five exactly when her $5$ shots contain no two makes in a row. All $2^5 = 32$ sequences are equally likely, so count the good ones by their last shot: let $a_n$ be the number of good sequences of $n$ shots ending in a make and $b_n$ the number ending in a miss. A good sequence ending in a make needs a miss in front of it, so $a_{n+1} = b_n$, while any good sequence may be extended by a miss, so $b_{n+1} = a_n + b_n$. From $a_1 = b_1 = 1$: $(a_2, b_2) = (1, 2)$, then $(2, 3)$, then $(3, 5)$, then $(a_5, b_5) = (5, 8)$. That is $5 + 8 = 13$ good sequences, giving $\\frac{13}{32}$ ✓. TAKING $\\frac{19}{32}$ answers with the opposite event, the chance she has already stopped somewhere inside five shots ✗. TAKING $\\frac{17}{32}$ subtracts the shot-$2$, shot-$3$, and shot-$5$ endings but forgets that she can also stop on shot $4$ ✗. TAKING $\\frac{1}{2}$ counts the $8$ good sequences of four shots and stops one shot early, answering for a fifth shot instead of a sixth ✗.',
      },
    ],
    // slot 10 — play until somebody leads by two, paired points.
    //          Lanes: $p=\frac23$ -> 4/5; ties replayed, $p=\frac25$ -> 4/13;
    //          derived: the first pair settles it -> 13/25.
    [
      {
        q: 'Tia and Uma play a game one point at a time, with no ties on a point; Tia wins each point with probability $\\frac{2}{3}$, independently of every other point. Play continues until one player is ahead by two points, and that player wins the game at once. What is the probability that Tia wins?',
        choices: ['$\\frac{4}{9}$', '$\\frac{2}{3}$', '$\\frac{8}{9}$', '$\\frac{4}{5}$'],
        answer: 3,
        solution:
          'Group the points into pairs starting from a level score. A pair goes to Tia twice with probability $\\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$ and ends the game in her favor; to Uma twice with probability $\\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}$ and ends it in hers; and splits with probability $2 \\cdot \\frac{2}{3} \\cdot \\frac{1}{3} = \\frac{4}{9}$, which returns the score to level, exactly the position the pair began from. Those three add to $\\frac{4}{9} + \\frac{1}{9} + \\frac{4}{9} = 1$. So the game is settled by the first pair that does not split, and Tia’s share of a settling pair is $\\frac{4/9}{4/9 + 1/9} = \\frac{4}{5}$ ✓. Route two sums the paths instead. Tia wins on pair $1$, or after one split, or after two splits, and so on: $\\frac{4}{9}\\left(1 + \\frac{4}{9} + \\left(\\frac{4}{9}\\right)^2 + \\cdots\\right)$. The geometric series in the parentheses sums to $\\frac{1}{1 - 4/9} = \\frac{9}{5}$, so the total is $\\frac{4}{9} \\cdot \\frac{9}{5} = \\frac{4}{5}$ ✓. TAKING $\\frac{4}{9}$ counts only the games decided by the very first pair ✗. TAKING $\\frac{2}{3}$ answers with a single point ✗. TAKING $\\frac{8}{9}$ adds $\\frac{4}{9} + \\frac{4}{9}$, counting a split pair as a Tia win when it merely restarts the game ✗.',
      },
      {
        q: 'Amir and Bea play rounds of a hand game. A tied round counts for nothing and is simply replayed; on a decided round Amir wins with probability $\\frac{2}{5}$ and Bea wins with probability $\\frac{3}{5}$, independently of every other round. They keep going until one of them is two decided rounds ahead of the other, and that player wins the match. What is the probability that Amir wins the match?',
        choices: ['$\\frac{4}{25}$', '$\\frac{4}{13}$', '$\\frac{2}{5}$', '$\\frac{16}{25}$'],
        answer: 1,
        solution:
          'Tied rounds change nothing about the score, so ignore them and look only at decided rounds, grouped into pairs from a level score. A pair goes to Amir twice with probability $\\left(\\frac{2}{5}\\right)^2 = \\frac{4}{25}$ and ends the match; to Bea twice with probability $\\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}$ and ends it; and splits with probability $2 \\cdot \\frac{2}{5} \\cdot \\frac{3}{5} = \\frac{12}{25}$, returning the match to level. Those add to $\\frac{4 + 9 + 12}{25} = 1$. The match is settled by the first pair that does not split, so Amir’s share is $\\frac{4/25}{4/25 + 9/25} = \\frac{4}{13}$ ✓. Route two sums the paths. Amir wins on the first pair, or after one split, or after two, and so on: $\\frac{4}{25}\\left(1 + \\frac{12}{25} + \\left(\\frac{12}{25}\\right)^2 + \\cdots\\right) = \\frac{4}{25} \\cdot \\frac{1}{1 - 12/25} = \\frac{4}{25} \\cdot \\frac{25}{13} = \\frac{4}{13}$ ✓. TAKING $\\frac{4}{25}$ counts only the matches decided by the very first pair ✗. TAKING $\\frac{2}{5}$ answers with a single decided round ✗. TAKING $\\frac{16}{25}$ adds $\\frac{4}{25} + \\frac{12}{25}$, counting a split pair as an Amir win when it only restarts the match ✗.',
      },
      {
        q: 'Ria and Sol play a game one point at a time, with no ties on a point; Ria wins each point with probability $\\frac{3}{5}$, independently of every other point. Play continues until one player is ahead by two points, and that player wins the game at once. What is the probability that the very first pair of points already ends the game, with no return to a level score?',
        choices: ['$\\frac{13}{25}$', '$\\frac{9}{25}$', '$\\frac{12}{25}$', '$\\frac{4}{25}$'],
        answer: 0,
        solution:
          'The first pair ends the game exactly when the same player takes both points, and there are two disjoint ways for that. Ria takes both with probability $\\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}$; Sol takes both with probability $\\left(\\frac{2}{5}\\right)^2 = \\frac{4}{25}$. Add: $\\frac{9}{25} + \\frac{4}{25} = \\frac{13}{25}$ ✓. The complement gets there without either sweep. The pair fails to end the game exactly when it splits, and a split comes in two orders — Ria then Sol, or Sol then Ria — each of probability $\\frac{3}{5} \\cdot \\frac{2}{5} = \\frac{6}{25}$, so splitting has probability $\\frac{12}{25}$ and the answer is $1 - \\frac{12}{25} = \\frac{13}{25}$ ✓. The three pair outcomes total $\\frac{9}{25} + \\frac{4}{25} + \\frac{12}{25} = 1$, so nothing is missing. TAKING $\\frac{9}{25}$ counts only Ria sweeping the pair and forgets that Sol sweeping ends the game just as firmly ✗. TAKING $\\frac{12}{25}$ answers with the split, the one outcome that does NOT end the game ✗. TAKING $\\frac{4}{25}$ counts only Sol’s sweep ✗.',
      },
    ],
  ],
}

export default { book: 'intro-counting', number: 8, sections }
