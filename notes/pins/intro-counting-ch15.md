# Pins — intro-counting ch15 (More Challenging Problems)

Read `notes/variation-spec.md` first. Every KEY below was brute-forced in node (full
enumeration of dice/flip/permutation sample spaces; exact rationals; geometry by exact
decomposition with a Monte Carlo cross-check). Do not retarget a pin; if your own count
disagrees, STOP and report. Answer indices are derived from the base: v1 = (b+1)%4,
v2 = (b+3)%4, v3 = (b+2)%4. Worksheet items are free response (no indices); their keys
are LaTeX strings, e.g. `'$\frac{9}{2}$'`.

This chapter is the capstone: every base problem mixes at least two techniques, and every
variation below must too (linearity of expectation + a symmetry count, complement + a
recursion, bijection + casework, geometric area + decomposition, …). Conventions to state
in every stem: dice are standard and fair unless the stem says eight-sided; coins and
spinners are fair with independent trials; drawn objects are distinguishable; "$0$ counts"
whenever a multiple-of condition can be met by zero; continuous choices are uniform and
independent; expected values are exact fractions.

NOTE: the settled `ch15.js` (after the 2026-09 hardening pass) is the authority for base
stems. Four bases differ from older snapshots: section #5 is now all-different + largest
$6$ + even sum (KEY $\frac{1}{9}$), section #7 is first-flip-heads + heads a multiple of
$3$ (KEY $\frac{21}{128}$), challenge #7 is the $3 \times 2$ rectangle nearest side (KEY
$\frac{7}{18}$), challenge #12 is records among the last three of $8$ cards (KEY
$\frac{73}{168}$).

## Already taken — do not reuse any of these scenarios or number sets

Base problems in `ch15.js` (post-hardening):
- Section 15.2: integers $1$–$999$ all digits odd (155); $4$ die rolls expected step-ups
  ($\frac{5}{4}$); $a+b+c=12$ each $\le 6$ (28); arrangements of $1,1,2,2,3,3$ no equal
  neighbors (30); four dice all different + largest $6$ + even sum ($\frac{1}{9}$); $6$-step
  $\pm 1$ walk back at $0$ never left of $0$ ($\frac{5}{64}$); $7$ flips first heads + heads
  multiple of $3$ ($\frac{21}{128}$); band $|x-y|<1$ in $[0,3]\times[0,2]$ with figure
  ($\frac{7}{12}$); four-digit distinct digits not monotone (4200); $5$ boys $5$ girls round
  table expected boy–girl neighbor pairs ($\frac{50}{9}$).
- Challenge: $5$-symbol strings over $X,Y,Z$ no equal neighbors all used (42); pairs
  $A \subsetneq B$ of subsets of $\{1..5\}$ (211); three dice sum multiple of $3$
  ($\frac{1}{3}$); $1$–$8$ in a row expected adjacent differ-by-$1$ pairs ($\frac{7}{4}$);
  four-digit first-two digit sum $=$ last-two (615); subsets of $\{1..10\}$ more odds than
  evens (386); $3\times2$ rectangle expected distance to nearest side ($\frac{7}{18}$);
  $3\times3$ grid $3$ shaded no two share a side ($\frac{11}{42}$); frog jumps $1$ or $2$
  lands on $4$ ($\frac{11}{16}$); $1$–$7$ row expected peaks ($\frac{8}{3}$); $10$ flips
  contain $HHH$ ($\frac{65}{128}$); records among last three of $8$ cards ($\frac{73}{168}$).
- Worksheet: $5$ flips expected runs (3); $3$R$3$B$3$G draw $3$ all same or all different
  ($\frac{5}{14}$); positive $m+n\le20$ (190); $4$ dice expected lonely dice
  ($\frac{125}{54}$); $A$ before $B,C$ and $D$ before $E$ in $A$–$F$ ($\frac{1}{6}$); wedge
  $x<y<2x$ in $[0,4]\times[0,2]$ ($\frac{1}{8}$); $1\le a<b\le c\le10$ (165); $4\times4$ dots
  triangles (516); three dice product multiple of $4$ ($\frac{5}{8}$); $8$ circle points
  choose $4$ expected short sides ($\frac{12}{7}$).
- Learn examples: $9$ points on a circle, triangle contains the center ($\frac{5}{14}$);
  $6$ hats returned at random, expected swapped pairs ($\frac{1}{2}$); $6$-meter ribbon cut
  twice, every piece $<4$ ($\frac{2}{3}$). Do not reuse circle-point-vs-center triangles,
  hat/derangement swaps, or stick/ribbon cutting anywhere in the variations.

Technique families ch15 reuses from `ch01.js`–`ch14.js` (scan done; the base checker
already replaced 13 problems for duplication, so treat these as hard exclusions):
- ch02–03: boys/girls alternating or non-adjacent rows; BUBBLE-type "no two B’s adjacent";
  $3$ black + $3$ white tiles "no three consecutive same"; every round-table SEATING problem
  (people in seats, Ann/Ben adjacency, couples, opposite seats); four-digit strings over
  $\{1,2,3\}$ with no two neighboring digits equal.
- ch04–06: points on two lines / decagon-diagonal triangle counts; $3$-element subsets of
  $\{1..10\}$ with no two consecutive; $a+b+c=12$ all different; $8$ flips exactly $3$ heads
  none adjacent first flip heads; grid paths.
- ch07–09: probability versions of the above, incl. three numbers from $\{1..10\}$ no two
  consecutive, alternating-flip probability, sock pairs, "flip until two consecutive equal".
- ch10: every named geometric figure there (triangle-in-rectangle, quarter circle,
  bullseye, semicircle, stick of length $12$, square-in-circle, pool with decks,
  triangle-inequality segments from $[0,6]$). New geometry below uses only fresh shapes:
  bands/wedges in fresh rectangles, distance-to-side, distance-to-hypotenuse.
- ch11: single-value expected values (one die, spinner payouts, sum/product/larger of two
  dice, matches of neighboring coins, letters-in-envelopes, number of different values on
  three dice). ch15 variations must keep the linearity-over-indicator flavor, not payout
  tables.
- ch12–14: Pascal row identities; hockey stick sums $\binom{3}{3}+\cdots$; ALL stars-and-bars
  scenarios (candies/marbles/jars with min/max caps, $x+y+z\le n$, odd/even part
  constraints, non-decreasing strings incl. "alphabetical order" strings); binomial
  coefficients of expansions. S3/W3 variations below were chosen to avoid every ch13 cap
  pattern in use ($\le$-inequality pairs with a parity leg, and a $2$-to-$7$ two-sided cap
  triple, neither of which appears there).

## §15.2 Problems — ch15-s1.js
base indices: 1 2 1 0 0 3 2 2 3 0
v1 indices:   2 3 2 1 1 0 3 3 0 1
v2 indices:   0 1 0 3 3 2 1 1 2 3
v3 indices:   3 0 3 2 2 1 0 0 1 2

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | How many of the integers from $1$ to $9999$ have every digit even and no digit equal to $0$? **KEY: $340$** | How many odd positive integers less than $1000$ have every digit prime (each digit one of $2, 3, 5, 7$)? **KEY: $63$** | *Reversed:* The positive integers whose digits are all odd are listed in increasing order: $1, 3, 5, 7, 9, 11, \ldots$ What is the $100$th number in the list? **KEY: $579$** |
| 2 | A fair spinner numbered $1$–$4$ is spun $6$ times; a spin is a drop if it is strictly smaller than the spin just before it (the first spin cannot be a drop). Expected number of drops? **KEY: $\frac{15}{8}$** | Cards numbered $1$–$8$ are shuffled into a row; a card (other than the leftmost) is a rise if it is larger than the card immediately to its left. Expected number of rises? (No ties can occur.) **KEY: $\frac{7}{2}$** | *Reversed:* A standard die is rolled $n$ times and the expected number of step-ups (a roll strictly larger than the roll just before it) is $\frac{35}{12}$. What is $n$? **KEY: $8$** |
| 3 | How many ordered quadruples of nonnegative integers $(a, b, c, d)$ satisfy $a+b+c+d = 10$ with each entry at most $4$? **KEY: $68$** | Fifteen identical candies go into $3$ labeled bags so that every bag gets at least $2$ and at most $7$ candies. How many distributions? **KEY: $25$** | *Reversed:* The ordered triples of nonnegative integers $(a, b, c)$ with $a+b+c = 12$ and every entry at most $m$ number exactly $46$. What is $m$? **KEY: $7$** |
| 4 | How many seven-digit numbers use each of the digits $1, 1, 2, 2, 3, 3, 4$ exactly once and have no two equal digits next to each other? **KEY: $246$** | In how many arrangements of the letters of BANANA are no two equal letters next to each other? **KEY: $10$** | *Derived:* How many six-digit numbers use each of the digits $1, 1, 2, 2, 3, 3$ exactly once and have exactly one pair of equal digits next to each other (equal digits in exactly one pair of neighboring positions)? **KEY: $36$** |
| 5 | Four standard dice: probability that the four numbers are all different, the smallest is $1$, and the sum is a multiple of $3$? **KEY: $\frac{1}{18}$** | Three fair eight-sided dice (faces $1$–$8$): probability that the three numbers are all different and the largest is exactly $5$? **KEY: $\frac{9}{128}$** | *Derived:* Four standard dice are rolled and the four numbers turn out to be all different. Given that, what is the probability that the largest is $6$ and the sum is odd? **KEY: $\frac{4}{15}$** |
| 6 | A token starts at $0$, moves $\pm1$ each second with probability $\frac{1}{2}$, for $8$ seconds. Probability it ends at $0$ and is never left of $0$? **KEY: $\frac{7}{128}$** | Six ballots, $3$ for Ana and $3$ for Ben, are counted one at a time in random order (all $\binom{6}{3}$ orders equally likely). Probability Ana’s running count is never behind Ben’s at any point? **KEY: $\frac{1}{4}$** | *Derived:* The $6$-second $\pm1$ token again: probability it ends at $0$, is never left of $0$, AND reaches $+2$ at some moment? **KEY: $\frac{1}{16}$** |
| 7 | A fair coin is flipped $8$ times: probability the number of heads is a multiple of $4$ ($0$ counts) and the last flip is tails? **KEY: $\frac{9}{64}$** | A fair spinner numbered $1$–$4$ is spun $5$ times: probability the number of $1$’s is even ($0$ counts) and the first spin is not a $1$? **KEY: $\frac{51}{128}$** | *Reversed:* A fair coin is flipped $7$ times and the number of heads turns out to be a multiple of $3$. Given that, what is the probability the first flip was heads? **KEY: $\frac{21}{43}$** |
| 8 | $x$ uniform on $[0,4]$, $y$ uniform on $[0,3]$, independent: probability $-2 < x-y < 2$ (the two numbers differ by less than $2$)? To-scale figure: $4 \times 3$ rectangle with the band between the lines $y = x+2$ and $y = x-2$. **KEY: $\frac{19}{24}$** | $x$ uniform on $[0,4]$, $y$ uniform on $[0,2]$, independent: probability $1 < x+y < 4$? To-scale figure: $4 \times 2$ rectangle with the band between the lines $x+y=1$ and $x+y=4$. **KEY: $\frac{11}{16}$** | *Derived:* $x$ uniform on $[0,3]$, $y$ uniform on $[0,2]$, independent, and it is given that $-1 < x-y < 1$ (they differ by less than $1$). What is the probability that $x > 2$? To-scale figure: $3 \times 2$ rectangle, band $-1<x-y<1$, dashed line $x=2$. **KEY: $\frac{1}{7}$** |
| 9 | How many five-digit positive integers have five different digits that are neither strictly increasing nor strictly decreasing left to right? **KEY: $26838$** | How many four-digit positive integers have four different digits that are neither all even nor all odd? **KEY: $4320$** | *Reversed:* How many four-digit positive integers have four different digits in strictly increasing or strictly decreasing order? **KEY: $336$** |
| 10 | Four boys and four girls sit in random order around a round table with $8$ seats. Expected number of neighboring pairs consisting of one boy and one girl? **KEY: $\frac{32}{7}$** | Four red cards and six black cards are shuffled into a row of $10$. Expected number of neighboring pairs showing two different colors? **KEY: $\frac{24}{5}$** | *Derived:* Five boys and five girls at a random round table of $10$: expected number of neighboring pairs consisting of two girls? **KEY: $\frac{20}{9}$** |

## Challenge — ch15-cw.js
base indices: 1 1 0 2 2 1 3 3 2 0 3 1
v1 indices:   2 2 1 3 3 2 0 0 3 1 0 2
v2 indices:   0 0 3 1 1 0 2 2 1 3 2 0
v3 indices:   3 3 2 0 0 3 1 1 0 2 1 3

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | How many strings of $6$ symbols from $X, Y, Z$ have no two equal symbols adjacent and use all three symbols at least once? **KEY: $90$** | A row of $5$ houses is painted, each house one of $4$ colors, no two neighboring houses the same color, and all $4$ colors used at least once. How many paintings? **KEY: $144$** | *Derived:* How many strings of $5$ symbols from $X, Y, Z$ have no two equal symbols adjacent and have their first symbol equal to their last symbol? **KEY: $18$** |
| 2 | How many ordered pairs $(A, B)$ of subsets of $\{1, \ldots, 6\}$ have $A \subseteq B$ and $A \neq B$? **KEY: $665$** | How many ordered pairs $(A, B)$ of subsets of $\{1, \ldots, 5\}$ have $A \cap B$ containing exactly one element? **KEY: $405$** | *Derived:* How many ordered triples $(A, B, C)$ of subsets of $\{1, 2, 3, 4\}$ satisfy $A \subseteq B \subseteq C$? **KEY: $256$** |
| 3 | A fair spinner numbered $1$–$8$ is spun three times. Probability the sum of the three spins is a multiple of $4$? (Residues $1$–$8$ are uniform mod $4$ — same symmetry-on-the-last-spin idea.) **KEY: $\frac{1}{4}$** | Five standard dice are rolled. Probability the product of the five numbers is a multiple of $3$? **KEY: $\frac{211}{243}$** | *Derived:* Three standard dice are rolled and the sum turns out to be a multiple of $3$. Given that, what is the probability all three dice show the same number? **KEY: $\frac{1}{12}$** |
| 4 | The numbers $1$–$10$ in a row in random order: expected number of adjacent pairs whose numbers differ by exactly $2$? **KEY: $\frac{8}{5}$** | The numbers $1$–$6$ are placed at random around a circle (all arrangements of the $6$ positions equally likely): expected number of neighboring pairs summing to $7$? **KEY: $\frac{6}{5}$** | *Reversed:* The numbers $1$–$n$ in a row in random order have expected number of adjacent differ-by-$1$ pairs equal to $\frac{9}{5}$. What is $n$? **KEY: $10$** |
| 5 | How many four-digit positive integers have the product of their first two digits equal to the product of their last two digits? **KEY: $380$** | Four standard dice are rolled in order. How many of the $1296$ outcomes have the sum of the first two dice equal to the sum of the last two? **KEY: $146$** | *Derived:* How many four-digit positive integers have the sum of their first two digits strictly greater than the sum of their last two digits? **KEY: $4500$** |
| 6 | How many subsets of $\{1, 2, \ldots, 8\}$ contain more odd numbers than even numbers? (Empty set has none of each.) **KEY: $93$** | From $6$ men and $6$ women, how many committees (any size, the empty committee allowed) have more women than men? **KEY: $1586$** | *Derived:* How many subsets of $\{1, 2, \ldots, 10\}$ contain at least as many odd numbers as even numbers? **KEY: $638$** |
| 7 | A point uniform in a $4 \times 2$ rectangle: expected distance to the nearest side? **KEY: $\frac{5}{12}$** | A point uniform inside a right triangle with legs $3$ and $4$: expected distance to the hypotenuse? (Centroid altitude, no integral.) **KEY: $\frac{4}{5}$** | *Derived:* A point uniform in a $3 \times 2$ rectangle: probability its distance to the nearest side is greater than $\frac{1}{2}$? **KEY: $\frac{1}{3}$** |
| 8 | A $3 \times 3$ grid: $4$ of the $9$ unit squares are shaded at random. Probability no two shaded squares share a side? **KEY: $\frac{1}{21}$** | Eight chairs are evenly spaced around a round table and $3$ people pick seats at random (all $\binom{8}{3}$ seat sets equally likely). Probability no two of them sit in adjacent chairs? **KEY: $\frac{2}{7}$** | *Derived:* A $3 \times 3$ grid: $3$ squares shaded at random. Probability no two shaded squares share a side or a corner? **KEY: $\frac{2}{21}$** |
| 9 | The frog ($+1$ or $+2$ each second, probability $\frac{1}{2}$ each): probability it lands on $5$ at some point? **KEY: $\frac{21}{32}$** | Nia flips a fair coin repeatedly; heads adds $1$ point, tails adds $2$ points to her running total. Probability her total ever equals exactly $3$? **KEY: $\frac{5}{8}$** | *Derived:* The frog again, and its first jump is $2$ units. Given that, what is the probability it lands on $4$ at some point? **KEY: $\frac{3}{4}$** |
| 10 | The numbers $1$–$9$ in a row in random order: expected number of peaks (larger than every neighbor; ends have one neighbor)? **KEY: $\frac{10}{3}$** | The numbers $1$–$9$ placed at random around a circle: expected number of peaks (larger than both neighbors)? **KEY: $3$** | *Reversed:* The numbers $1$–$n$ ($n \ge 3$) in a row in random order have expected number of peaks equal to $4$. What is $n$? **KEY: $11$** |
| 11 | A fair coin is flipped $8$ times. Probability that at some point three consecutive flips are all heads? **KEY: $\frac{107}{256}$** | A row of $7$ light switches is set at random, each up or down with probability $\frac{1}{2}$. Probability no two adjacent switches are both up? **KEY: $\frac{17}{64}$** | *Derived:* A fair coin is flipped $10$ times. Probability that at some point three consecutive flips all show the same face (three heads or three tails in a row)? **KEY: $\frac{423}{512}$** |
| 12 | Cards $1$–$6$ shuffled into a row; a card is a record if larger than every card to its left. Expected number of records among the last two cards? **KEY: $\frac{11}{30}$** | Seven books of different heights are shelved in random order; a book is visible from the left if it is taller than every book to its left. Expected number of visible books? **KEY: $\frac{363}{140}$** | *Derived:* Cards $1$–$8$ shuffled into a row: probability that exactly one of the last three cards is a record? **KEY: $\frac{107}{336}$** |

## Worksheet — ch15-ws.js (free response; keys are strings, no indices)

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | A fair coin is flipped $8$ times: expected number of runs (maximal blocks of equal faces)? **KEY: $\frac{9}{2}$** | A standard die is rolled $6$ times: expected number of runs of equal rolls? **KEY: $\frac{31}{6}$** | *Reversed:* A fair coin flipped $n$ times has expected number of runs $\frac{13}{2}$. What is $n$? **KEY: $12$** |
| 2 | A jar holds $4$ red, $4$ blue, $4$ green tokens; $3$ drawn at once. Probability all same color or all different colors? **KEY: $\frac{19}{55}$** | Three people each independently pick one of $4$ doors (equally likely). Probability all three pick the same door or all pick different doors? **KEY: $\frac{7}{16}$** | *Derived:* A jar holds $3$ red, $3$ blue, $3$ green tokens; $3$ drawn at once. Probability exactly two of them share a color? **KEY: $\frac{9}{14}$** |
| 3 | How many ordered pairs of positive integers $(m, n)$ satisfy $m+n \le 15$? **KEY: $105$** | How many ordered pairs of positive integers $(m, n)$ satisfy $m+n \le 30$ with $m$ even? **KEY: $210$** | *Reversed:* The ordered pairs of positive integers with $m+n \le k$ number exactly $325$. What is $k$? **KEY: $26$** |
| 4 | Five standard dice: expected number of lonely dice (value on no other die)? **KEY: $\frac{3125}{1296}$** | Four people each independently pick a whole number from $1$ to $8$ (equally likely): expected number of people whose number was picked by nobody else? **KEY: $\frac{343}{128}$** | *Derived:* Four standard dice: expected number of dice that share their value with at least one other die? **KEY: $\frac{91}{54}$** |
| 5 | The letters $A$–$G$ in a row in random order: probability $A$ is before each of $B$, $C$, $D$, and $E$ is before $F$? **KEY: $\frac{1}{8}$** | Six runners including Pia, Quinn, Rob, Sam finish in random order (no ties): probability Pia beats Quinn, Pia beats Rob, and Sam beats Quinn? **KEY: $\frac{5}{24}$** | *Derived:* The letters $A$–$F$ in a row in random order, and $A$ turns out to be before $B$. Given that, what is the probability $A$ is also before $C$? **KEY: $\frac{2}{3}$** |
| 6 | $x$ uniform on $[0,5]$, $y$ uniform on $[0,2]$, independent: probability $x < y < 2x$? **KEY: $\frac{1}{10}$** | $x$ and $y$ each uniform on $[0,2]$, independent: probability $y < \frac{x}{2}$ or $y > 2x$? **KEY: $\frac{1}{2}$** | *Reversed:* $x$ uniform on $[0,a]$ with $a \ge 2$, $y$ uniform on $[0,2]$, independent, and the probability that $x < y < 2x$ is $\frac{1}{12}$. What is $a$? **KEY: $6$** |
| 7 | How many ordered triples of integers $(a, b, c)$ satisfy $1 \le a \le b < c \le 12$? **KEY: $286$** | How many ordered quadruples of integers $(a, b, c, d)$ satisfy $1 \le a < b < c < d \le 12$ with $b - a \ge 2$? **KEY: $330$** | *Reversed:* The ordered triples with $1 \le a < b \le c \le n$ number exactly $364$. What is $n$? **KEY: $13$** |
| 8 | Twelve dots in a $3$-row by $4$-column unit grid: how many triangles have all three corners at dots? **KEY: $200$** | Twenty-five dots in a $5 \times 5$ unit grid: how many squares (any orientation, tilted included) have all four corners at dots? **KEY: $50$** | *Derived:* Sixteen dots in a $4 \times 4$ unit grid; three dots chosen at random (all $\binom{16}{3}$ sets equally likely). Probability they form a triangle (are not collinear)? **KEY: $\frac{129}{140}$** |
| 9 | Four standard dice: probability the product of the four numbers is a multiple of $4$? **KEY: $\frac{37}{48}$** | Three people each independently pick a whole number from $1$ to $9$ (equally likely): probability the product of the three numbers is a multiple of $3$? **KEY: $\frac{19}{27}$** | *Derived:* Three standard dice: probability the product is a multiple of $4$ but not a multiple of $8$? **KEY: $\frac{7}{24}$** |
| 10 | Ten points equally spaced on a circle; $5$ chosen at random (all $\binom{10}{5}$ sets equally likely) and joined in circular order into a pentagon; a side is short if it joins two neighboring points. Expected number of short sides? **KEY: $\frac{20}{9}$** | Twelve chairs in a row; $5$ are occupied at random (all $\binom{12}{5}$ seat sets equally likely). Expected number of adjacent pairs of occupied chairs? **KEY: $\frac{5}{3}$** | *Derived:* Eight points equally spaced on a circle, $4$ chosen at random and joined in circular order into a quadrilateral: expected number of sides that are NOT short? **KEY: $\frac{16}{7}$** |

## Verification record
All 96 variation keys brute-forced in node (full enumeration for every discrete problem —
including the $8!$ record permutations, all $6^4$/$8^3$ dice outcomes, all multiset
arrangements, all subset pairs/triples — exact rationals throughout; the four continuous
keys verified by exact area/centroid decomposition AND Monte Carlo at $n \ge 3{,}000{,}000$).
Rounds v1, v2, v3: each 32 distinct normalized keys, 0 repeated. Slots: 0 of 32 repeat a
key across base|v1|v2|v3 (base keys taken from the settled post-hardening `ch15.js`).
