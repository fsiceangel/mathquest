# Counting & Probability ch02 — variation pins (Basic Counting Techniques)

Every KEY below was brute-forced in node (objects enumerated directly: digit strings, permutations of
1..n, dice/spinner tuples, triangle triples) before being written. The three rounds were checked as
normalized strings: v1 62 distinct / 0 repeated, v2 62 / 0, v3 62 / 0; every slot base|v1|v2|v3 has four
different keys. Indices are derived from the base answer index `b`: v1 = (b+1)%4, v2 = (b+3)%4,
v3 = (b+2)%4. Worksheet keys are free-response LaTeX strings (no `choices`).

Conventions to state in every stem: people/objects are all different (distinguishable); a row has a
left and a right end (no circles in this chapter); "at most/at least" is inclusive; digit strings that
"may start with 0" are strings, not integers; "no padding" means 77 has two digits.

## Already taken — do not reuse any of these number sets or scenarios

**ch02 learn examples.** Positive integers < 100 with digit sum 7 (8). 40 cents from quarters/dimes/
nickels (7). Squares in a 4×4 grid (30). 1–100 not multiples of 4 (75). Three-digit with at least one 0
(171). 1–60 divisible by neither 2 nor 3 (20). Three-digit all digits prime (64). Three-digit three
different digits (648). Three-digit distinct multiples of 5 (136). 5 books, atlas+dictionary adjacent
(48). 6 friends, Mia at an end (240). 5 people, Raj+Sam not adjacent (72).

**ch02 base problems.** §2.2: penny/nickel/dime at most one head (4); red+blue dice sum multiple of 5
(7); two-digit digits differ by exactly 4 (11); two-digit tens ≥ units+3 (28); $2/$3 stickers, $18
(4); (a,b) positive with a+2b ≤ 10 (20); integer triangles perimeter 15 (7); three-digit digit sum 23
(15); 1–999 exactly two 7s (27); < 1000 digit product 24 (25). §2.3: two-digit not multiples of 3
(60); 5 flips at least one head (31); four-digit at least one 5 (3168); two dice different numbers
(30); 3-letter codes from A–D with an A (37); 1–200 neither square nor cube (183); 4-strings from 1–4
at least two different digits (252); 1–999 at least one 3 (271); three dice at least one 6 not all same
(90); 5 friends 3 flavors all used (150). §2.4: 4-digit PIN distinct (5040); three-digit middle 0
distinct (72); vowel + 3 distinct digits (3600); three-digit distinct no 7 (448); four-digit distinct
containing 0 (1512); 8 runners Kai medals (126); 4-strings from 1–3 no equal neighbors (24);
three-digit even digit sum (450); even four-digit distinct (2296); four-digit distinct divisible by 25
(154). §2.5: 5 children Ivy+Jun last two (12); PQRSTU with PQR in order (24); 7 cars red in 3 nearest
(2160); 6 students Dev front Eli not behind (96); 6 books 3 math together (144); 3 boys 4 girls
alternate (144); 7 people Ava+Ben at ends (240); 6 people Ava-Ben adjacent + Cal at end (96); Cal at end
+ Ava-Ben not adjacent (144); 4 boys 3 girls no two girls adjacent (1440). Challenge: 1–100 by 2 or 5
not 10 (50); dice odd product or sum 7 (15); three-digit with a repeated digit (252); 5 people Ann/Ben
not at ends (36); four-digit digit sum 5 (35); a+b+c=10 with a<b<c (4); Ann not next to Ben or Cal, 5
people (36); 1–999 a 4 and no 5 (217); three-digit exactly two digits same (243); 4 boys 4 girls no two
girls adjacent (2880); four-digit distinct divisible by 4 (1120); 7 people Ava-Ben adjacent Cal not next
(960). Worksheet: two-digit units ≥ 2×tens (20); integer rectangles perimeter 20 (5); 1–200 multiples of
3 not 5 (53); XY strings length 5 at least two X (26); odd four-digit distinct (2240); 7 books atlas
left + cookbooks adjacent (240); 6 people Ava-Ben adjacent Cal not at end (144); three dice at least one
6 not three different (31); three-digit digit product 8 (10); 4 boys 3 girls boys at ends no two girls
adjacent (144).

**prealgebra ch14.** Lists 12–47, 5–15, pages 8–20, multiples of 5 to 60, 3..30 step 3, evens 14–58,
houses 25–104, soccer/chess 16/11/5, multiples of 4 from 30–90, 1–100 by 3 or 5, fence 60 ft posts every
5; 3 flavors × 4 toppings, 4 books, letter+nonzero digit tag, 2 sandwiches × 3 drinks, 4 shirts × 2 hats,
coin then die, 3 T/F questions, 3 students, 4 trophies, 2-digit bike lock, 2 letters + 1 digit plate,
4-digit all odd, 5 friends Ava first; dice sum 6 / 4 / 7 / 10+, 30 c from dimes+nickels, 20 c, 25 c
pennies+nickels, 40 c dimes+nickels, two-digit sum 7 / 10 / 5 / 4 (three-digit), both digits same,
tens > units, dice product 12, soups/salads/drinks lunch; handshakes 6/4/10/13/20, round-robin
8/5/12/10 (twice), 3 boys × 4 girls dance, 3 girls × 5 boys relay, 6 points on a circle, 7 members 2
co-captains, 28 handshakes → guests, 4 red × 5 blue, 9 people two feuding, octagon diagonals; seats
37–118, multiples of 6 from 100–300, 1–60 by 4 or 6, two different letters + two different digits,
three-digit all different, Jo+Kim adjacent (5), three-digit sum 5, cafe 4×3×2, multiples of 7 to 150,
three-digit > 500 all odd; probability items (coin, die, marbles, spinner 8 sections, two coins, dice sum
7/8, spinner 1–4 twice, at least one 6, 3 flips at least one head).

**intro-counting ch01.** Lists 23–91, 7..152 step 5, multiples of 6 in (100,400), 14–63, bibs 37–112,
4..96, multiples of 7 in 50–300, 3..199 step 4, three-digit units digit 3, −17 ≤ n ≤ 42, squares in
(50,1000), 5,12,19,… < 1000, odd squares in (100,2000); 1–80 by 6 or 8, 48 books hardcover/English,
1–100 neither 3 nor 7, chess 12 / go 9 disjoint, 1–60 by 6 or 9, apples/bananas 30/18/15/7, two-digit
containing 7, 1–200 by 6 not 8, bike/scooter 32/20/14/5, three-digit by 5 or 7, 1–100 by 2, 3, or 5,
1–1000 containing 0, 1–500 none of 3, 4, 5; locker letter + 2 digits, shirt then pants-or-shorts, odd
three-digit distinct (320), keychain 3×5×2, 4-char password from 36, five-digit digits in {1,2,3},
three-digit distinct all even, spinner twice + two dice, 6 mains + optional dessert, even three-digit
distinct, 4 distinct letters vowel-first consonant-last, < 1000 distinct nonzero digits, three-digit
exactly one 5; 6 runners, 9 competitors medals, Ana at an end (5), GRAPH, 7 students 3 offices, 8!/6!,
4 letters from 8 distinct, Jo leftmost Kai not rightmost (6), four-digit distinct (4536), 5 boys 3
girls block, PLANET consonants at ends, 7 people Ann+Ben not adjacent, digits 1–5 even and > 30000;
challenge/worksheet: −8..61 step 3, three-digit all even, 1–360 by 4/6/9, 1–300 containing 7,
three-digit digit sum ≥ 25, 1–1000 by 3 or 5 not both, 4 couples in a row, 3 boys 3 girls alternate,
digit product 12, CRAYON C left of R, four-digit distinct with 0 and 9, four-digit distinct by 5,
31–118, 9..380 step 7, 11,18,… 40 terms, 1–90 neither 4 nor 9, soccer/band 28/17/13/6, four-digit
distinct all odd (120), 9!/7!, Mia and Noah at opposite ends (6), three-digit exactly one 0 (162),
digits 1–5 odd and > 40000.

Pinned scenarios below avoid all of the above: no $2/$3, no perimeter 15/20, no digit sums 5/7/23/25,
no products 8/12/24, no 7-books-atlas-left, no 5-people Ann/Ben ends, no two-dice sum 5/6/7/10, etc.

## §2.2 Casework — ch02-s1.js
base indices: 2 0 3 1 0 2 3 0 2 3
v1 indices:   3 1 0 2 1 3 0 1 3 0
v2 indices:   1 3 2 0 3 1 2 3 1 2
v3 indices:   0 2 1 3 2 0 1 2 0 1

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | A penny, a nickel, a dime, and a quarter are each flipped once. Ways the four coins can land with at most one tail. **KEY: $5$** | A spinner with three equal sections (red, green, blue) is spun $5$ times and the sequence of colors is recorded. Sequences in which red appears at most once. **KEY: $112$** | *Reversed:* $n$ different coins are each flipped once, and there are exactly $9$ ways for them to land with at most one head. Find $n$. **KEY: $8$** |
| 2 | A red die and a blue die are rolled. Rolls (of the $36$) whose sum is a multiple of $4$. **KEY: $9$** | Two spinners each have $8$ equal sections numbered $1$–$8$; each is spun once and the result recorded as an ordered pair (first spinner, second spinner). Pairs whose sum is a multiple of $6$. **KEY: $10$** | *Reversed:* A red die and a blue die are rolled. For exactly one integer $k > 1$, exactly $9$ of the $36$ rolls have a sum that is a multiple of $k$. Find $k$. **KEY: $4$** |
| 3 | Two-digit positive integers whose two digits differ by exactly $3$. **KEY: $13$** | Three-digit positive integers whose hundreds digit and units digit differ by exactly $7$ (the tens digit is unrestricted). **KEY: $50$** | *Derived:* Two-digit positive integers whose two digits differ by $7$ or more. **KEY: $9$** |
| 4 | Two-digit positive integers whose units digit is at least $4$ more than the tens digit. **KEY: $15$** | A red die and a blue die are rolled. Rolls in which the red die shows at least $3$ more than the blue die. **KEY: $6$** | *Reversed:* Exactly $15$ two-digit positive integers have a tens digit that is at least $k$ more than the units digit. Find $k$. **KEY: $5$** |
| 5 | Muffins cost $\$4$ and pies cost $\$6$. Ways to spend exactly $\$60$ (only the number of each item matters; either kind may be skipped). **KEY: $6$** | A crate of $48$ identical apples is packed into bags that hold $4$ apples or $6$ apples, every apple bagged and every bag full; only the number of bags of each size matters. **KEY: $5$** | *Derived:* Child tickets cost $\$4$ and adult tickets $\$7$. A group paid exactly $\$75$ and included at least one child and at least one adult. How many (children, adults) counts are possible? **KEY: $3$** |
| 6 | Ordered pairs of positive integers $(a, b)$ with $2a + 3b \le 20$. **KEY: $27$** | Ordered pairs of positive integers $(m, n)$ with $mn \le 12$. **KEY: $35$** | *Reversed:* The number of ordered pairs of positive integers $(a, b)$ with $a + 3b \le N$ is exactly $12$. Find $N$. **KEY: $10$** |
| 7 | Triangles with integer side lengths and perimeter $20$ (same three lengths = same triangle). **KEY: $8$** | Triangles with integer side lengths, each side at most $6$ (same three lengths = same triangle). **KEY: $34$** | *Reversed:* What is the smallest perimeter $P$ for which there are at least $10$ different triangles with integer side lengths and perimeter $P$? **KEY: $19$** |
| 8 | Three-digit positive integers whose digits add to $24$. **KEY: $10$** | Four-digit positive integers whose digits add to $33$. **KEY: $20$** | *Derived:* Three-digit positive integers whose digits add to $22$. **KEY: $21$** |
| 9 | Integers from $1$ to $9999$ with exactly three digits equal to $5$ (no leading-zero padding). **KEY: $36$** | Strings of $4$ letters, each A, B, or C (repeats allowed), containing exactly two A’s. **KEY: $24$** | *Derived:* Integers from $1$ to $9999$ with exactly two digits equal to $9$ (no padding; $99$ has two digits). **KEY: $486$** |
| 10 | Positive integers less than $1000$ whose digits have product $36$. **KEY: $24$** | Ordered triples of positive integers $(a, b, c)$ with $abc = 72$. **KEY: $60$** | *Derived:* Positive integers less than $1000$ whose digits have product $16$. **KEY: $15$** |

## §2.3 Complementary Counting — ch02-s2.js
base indices: 1 2 0 3 1 2 0 3 2 1
v1 indices:   2 3 1 0 2 3 1 0 3 2
v2 indices:   0 1 3 2 0 1 3 2 1 0
v3 indices:   3 0 2 1 3 0 2 1 0 3

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | Three-digit positive integers that are not multiples of $7$. **KEY: $772$** | Integers from $1$ to $250$ that are not perfect squares. **KEY: $235$** | *Reversed:* For exactly one integer $k \ge 2$, exactly $75$ of the two-digit positive integers are not multiples of $k$. Find $k$. **KEY: $6$** |
| 2 | A coin is flipped $6$ times, sequence recorded. Sequences with at least one tail. **KEY: $63$** | A quiz has $4$ questions, each answered A, B, or C. Answer sheets with at least one A. **KEY: $65$** | *Reversed:* A coin is flipped $n$ times and $127$ of the possible sequences contain at least one head. Find $n$. **KEY: $7$** |
| 3 | Five-digit positive integers containing at least one digit $2$. **KEY: $37512$** | Strings of $4$ letters from A, B, C, D, E, F (repeats allowed) containing at least one E. **KEY: $671$** | *Derived:* Four-digit positive integers containing at least one $5$ and at least one $0$. **KEY: $703$** |
| 4 | Red, blue, and green dice rolled; outcomes (of $216$) in which the three dice do not all show the same number. **KEY: $210$** | Lin and Mo each write down one digit from $0$ to $9$. Ordered choices (Lin’s, Mo’s) in which they write different digits. **KEY: $90$** | *Derived:* A red die and a blue die are rolled. Rolls in which the two numbers differ by at least $2$. **KEY: $20$** |
| 5 | Codes of $4$ letters from A, B, C, D, E (repeats allowed) with at least one E. **KEY: $369$** | Strings of $5$ digits, each $1$, $2$, or $3$ (repeats allowed), with at least one $3$. **KEY: $211$** | *Derived:* Codes of $3$ letters from A, B, C, D (repeats allowed) containing at least one A and at least one B. **KEY: $18$** |
| 6 | Integers from $1$ to $500$ that are neither perfect squares nor perfect cubes. **KEY: $473$** | Integers from $1$ to $300$ that are neither perfect squares nor multiples of $10$. **KEY: $254$** | *Reversed:* Integers from $1$ to $1000$ that are perfect squares or perfect cubes (or both). **KEY: $38$** |
| 7 | Strings of $5$ digits, each $1$, $2$, or $3$ (repeats allowed), using at least two different digits. **KEY: $240$** | Five friends each choose one of $4$ pizza toppings. Choices in which they do not all pick the same topping. **KEY: $1020$** | *Derived:* Strings of $5$ digits from $1, 2, 3, 4$ (repeats allowed) that use exactly two different digits. **KEY: $180$** |
| 8 | Integers from $1$ to $9999$ containing at least one digit $8$. **KEY: $3439$** | Three-digit positive integers with at least one even digit. **KEY: $775$** | *Derived:* Integers from $1$ to $999$ containing at least one $1$ and at least one $2$. **KEY: $54$** |
| 9 | Four dice (red, blue, green, yellow) rolled; outcomes with at least one $6$ that are not all four the same. **KEY: $670$** | Three spinners, each with $4$ equal sections numbered $1$–$4$, spun once each (ordered); outcomes with at least one $4$ that are not all three the same. **KEY: $36$** | *Derived:* Red, blue, green dice; outcomes with at least one $6$ in which exactly two of the dice show the same number. **KEY: $30$** |
| 10 | Six friends each pick mint, mango, or fudge; every flavor is picked by at least one friend. **KEY: $540$** | Five different balls are placed into $4$ labeled boxes; placements in which every box gets at least one ball. **KEY: $240$** | *Derived:* Five friends pick from mint, mango, fudge; ways in which exactly one flavor is picked by nobody. **KEY: $90$** |

## §2.4 Constructive Counting — ch02-s3.js
base indices: 1 0 2 3 1 0 3 2 1 2
v1 indices:   2 1 3 0 2 1 0 3 2 3
v2 indices:   0 3 1 2 0 3 2 1 0 1
v3 indices:   3 2 0 1 3 2 1 0 3 0

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | A PIN is $5$ digits and may start with $0$. PINs with five different digits. **KEY: $30240$** | A $3$-letter code from the $26$ letters with no letter repeated. **KEY: $15600$** | *Reversed:* $4$-digit PINs (may start with $0$) with at least one repeated digit. **KEY: $4960$** |
| 2 | Four-digit positive integers with hundreds digit $0$ and no repeated digit. **KEY: $504$** | A $3$-letter tag whose middle letter is X, with no letter repeated ($26$ letters). **KEY: $600$** | *Derived:* Odd three-digit positive integers with tens digit $0$ and no repeated digit. **KEY: $40$** |
| 3 | A tag is two different consonants ($21$ consonants) followed by two different digits. **KEY: $37800$** | A bike-lock setting is one of $4$ colors followed by a $3$-letter code of different letters from A–F. **KEY: $480$** | *Reversed:* Tags = one vowel (A, E, I, O, U) then $3$ digits, where the digits are NOT all different. **KEY: $1400$** |
| 4 | Four-digit positive integers with four different digits, none equal to $5$. **KEY: $2688$** | $3$-letter strings of different letters from A–H that do not use E. **KEY: $210$** | *Reversed:* Three-digit positive integers with three different digits, at least one of which is $7$. **KEY: $200$** |
| 5 | Five-digit positive integers with five different digits that contain the digit $0$. **KEY: $12096$** | $4$-letter strings of different letters from A–J that contain the letter A. **KEY: $2016$** | *Reversed:* Four-digit positive integers with four different digits, none equal to $0$. **KEY: $3024$** |
| 6 | Ten swimmers; gold, silver, bronze to the first three (no ties). Ways Lena wins one of the medals. **KEY: $216$** | A club of $9$ elects a president, vice president, and treasurer (three different people). Ways in which Omar holds one of the offices. **KEY: $168$** | *Reversed:* Eight runners, three medals, no ties. Ways Kai wins no medal. **KEY: $210$** |
| 7 | Five-digit strings from $1, 2, 3, 4$ with no two neighboring digits equal. **KEY: $324$** | A row of $6$ flags, each red, green, or blue, no two neighboring flags the same color. **KEY: $96$** | *Reversed:* Four-digit strings from $1, 2, 3$ with at least one pair of equal neighboring digits. **KEY: $57$** |
| 8 | Four-digit positive integers with an odd digit sum. **KEY: $4500$** | Strings of $4$ digits (leading $0$ allowed) whose digit sum is a multiple of $5$. **KEY: $2000$** | *Derived:* Even three-digit positive integers with an even digit sum. **KEY: $225$** |
| 9 | Even five-digit positive integers with five different digits. **KEY: $13776$** | $4$-letter codes of different letters from A–H whose last letter is A or E. **KEY: $420$** | *Derived:* Even four-digit positive integers with four different digits and an even thousands digit. **KEY: $896$** |
| 10 | Five-digit positive integers with five different digits, divisible by $25$. **KEY: $924$** | Three-digit positive integers with three different digits, divisible by $15$. **KEY: $47$** | *Derived:* Odd four-digit positive integers with four different digits, divisible by $25$. **KEY: $98$** |

## §2.5 Counting with Restrictions — ch02-s4.js
base indices: 1 2 1 0 3 2 0 2 3 0
v1 indices:   2 3 2 1 0 3 1 3 0 1
v2 indices:   0 1 0 3 2 1 3 1 2 3
v3 indices:   3 0 3 2 1 0 2 0 1 2

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | Six hikers walk single file; the two guides, Pia and Quinn, must be the first two, in either order. **KEY: $48$** | Eight different books on a shelf; the $4$ cookbooks must occupy the $4$ leftmost spots, in any order. **KEY: $576$** | *Reversed:* Five children (incl. Ivy, Jun) line up; lines in which Ivy and Jun are NOT both among the last two. **KEY: $108$** |
| 2 | The letters A–G in a row; A, B, C side by side reading ABC left to right. **KEY: $120$** | Seven different cars in a row of $7$ spaces; the $3$ vans must be together, in any order. **KEY: $720$** | *Reversed:* P, Q, R, S, T, U in a row; P, Q, R side by side in ANY order. **KEY: $144$** |
| 3 | Eight runners are assigned lanes $1$–$8$, one each; Tomas must get lane $1$ or lane $2$. **KEY: $10080$** | A playlist orders $5$ different songs; the title track must be among the first $3$. **KEY: $72$** | *Reversed:* Seven different cars, $7$ spaces; the red car must NOT take any of the $3$ spaces nearest the entrance. **KEY: $2880$** |
| 4 | Seven campers single file; Fay at the front, Gus not directly behind her. **KEY: $600$** | Eight beads of different colors on a straight string (left/right ends distinct); the black bead at the left end, the white bead not at the right end. **KEY: $4320$** | *Derived:* Six students in a line; Dev at the front OR the back, and Eli not next to Dev. **KEY: $192$** |
| 5 | Nine different books; the $4$ novels all next to each other. **KEY: $17280$** | Six boys and two girls, all different, in a row; the two girls next to each other. **KEY: $10080$** | *Reversed:* Six different books, $3$ of them math; arrangements in which the math books are NOT all together. **KEY: $576$** |
| 6 | Five boys and six girls, all different, in a row with boys and girls alternating. **KEY: $86400$** | Digits $1$–$8$ each used once to form an $8$-digit number in which odd and even digits alternate. **KEY: $1152$** | *Derived:* Three boys, four girls alternating, with Ana (a girl) at the left end. **KEY: $36$** |
| 7 | Eight people incl. Kit and Lou in a row of $8$ chairs; Kit and Lou occupy the two end chairs. **KEY: $1440$** | Seven trophies in a row; gold and silver with exactly one trophy between them. **KEY: $1200$** | *Reversed:* Seven people incl. Ava, Ben; seatings with NEITHER Ava nor Ben at an end. **KEY: $2400$** |
| 8 | Seven people incl. Ren, Sol, Tam; Ren and Sol adjacent, Tam at an end. **KEY: $480$** | The letters A–H in a row; A and B adjacent, H in the first position. **KEY: $1440$** | *Derived:* Six people incl. Ava, Ben, Cal; Ava-Ben adjacent, Cal at an end, and Ava to the left of Ben. **KEY: $48$** |
| 9 | Eight people incl. Xia, Yen, Zed; Zed at an end, Xia and Yen not adjacent. **KEY: $7200$** | The $7$ letters of FLOWING; G at an end, F and L not adjacent. **KEY: $960$** | *Derived:* Six people incl. Ava, Ben, Cal; Cal NOT at an end, Ava and Ben not adjacent. **KEY: $336$** |
| 10 | Five boys and three girls, all different, no two girls adjacent. **KEY: $14400$** | Six different math books and two different novels on a shelf; the novels not adjacent. **KEY: $30240$** | *Reversed:* Four boys, three girls; arrangements with at least two girls adjacent. **KEY: $3600$** |

## Challenge — ch02-cw.js
base indices: 2 1 3 0 2 3 2 1 0 1 0 3
v1 indices:   3 2 0 1 3 0 3 2 1 2 1 0
v2 indices:   1 0 2 3 1 2 1 0 3 0 3 2
v3 indices:   0 3 1 2 0 1 0 3 2 3 2 1

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | Integers $1$–$150$ divisible by $3$ or $5$ but not by $15$. **KEY: $60$** | Integers $1$–$200$ divisible by exactly one of $4$ and $6$. **KEY: $51$** | *Derived:* Integers $1$–$100$ divisible by none of $2$, $3$, $5$. **KEY: $26$** |
| 2 | Red and blue dice; rolls where both dice are odd or the sum is $8$ (overlap exists). **KEY: $12$** | Two spinners numbered $1$–$5$ (equal sections), one spin each (ordered); odd product or sum $6$. **KEY: $11$** | *Derived:* Red and blue dice; rolls where both dice are even or the sum is $9$ (no overlap). **KEY: $13$** |
| 3 | Four-digit positive integers with at least one repeated digit. **KEY: $4464$** | $3$-letter strings from A–H (repeats allowed) with at least one repeated letter. **KEY: $176$** | *Derived:* Even three-digit positive integers with at least one repeated digit. **KEY: $122$** |
| 4 | Seven people incl. Cy, Di in a row; neither Cy nor Di at an end. **KEY: $2400$** | Digits $1$–$8$ each once form an $8$-digit number; neither end digit is prime. **KEY: $8640$** | *Reversed:* Five people incl. Ann, Ben; at least one of Ann, Ben stands at an end. **KEY: $84$** |
| 5 | Four-digit positive integers with digit sum $6$. **KEY: $56$** | Ordered triples of positive integers $(a, b, c)$ with $a + b + c = 9$. **KEY: $28$** | *Derived:* Even four-digit positive integers with digit sum $5$. **KEY: $22$** |
| 6 | Ordered triples of positive integers with $a + b + c = 16$ and $a < b < c$. **KEY: $14$** | Triples of positive integers with $a \le b \le c$ and $a + b + c = 12$. **KEY: $12$** | *Derived:* Triples of positive integers with $a < b < c$ and $a + b + c \le 10$. **KEY: $11$** |
| 7 | Six people incl. Ann, Ben, Cal; Ann next to neither Ben nor Cal. **KEY: $288$** | Six people incl. Ann, Ben, Cal, Dee; Ann not next to Ben AND Cal not next to Dee. **KEY: $336$** | *Reversed:* Five people incl. Ann, Ben, Cal; Ann next to BOTH Ben and Cal. **KEY: $12$** |
| 8 | Integers $1$–$9999$ with at least one $6$ and no $7$. **KEY: $2465$** | $3$-letter strings from A–F (repeats allowed) with at least one A and no B. **KEY: $61$** | *Reversed:* Integers $1$–$999$ with no $4$ and no $5$. **KEY: $511$** |
| 9 | Four-digit positive integers with exactly two digits the same (the other two different from it and from each other). **KEY: $3888$** | $4$-letter strings from A–E with exactly two letters the same and the other two different. **KEY: $360$** | *Derived:* Even three-digit positive integers with exactly two digits the same. **KEY: $118$** |
| 10 | Five boys and four girls, all different; no two girls adjacent. **KEY: $43200$** | Six different red cards and three different black cards in a row; no two black cards adjacent. **KEY: $151200$** | *Reversed:* Four boys, four girls; arrangements with at least two girls adjacent. **KEY: $37440$** |
| 11 | Five-digit positive integers with five different digits, divisible by $4$. **KEY: $6720$** | Three-digit positive integers with three different digits, divisible by $6$. **KEY: $115$** | *Reversed:* Four-digit positive integers with four different digits that are NOT divisible by $4$. **KEY: $3416$** |
| 12 | Nine people incl. Ava, Ben, Cal; Ava-Ben adjacent, Cal next to neither. **KEY: $60480$** | Seven people incl. Ava, Ben, Cal, Dee; Ava-Ben adjacent, Cal-Dee adjacent, and neither Ava nor Ben next to Cal or Dee. **KEY: $288$** | *Derived:* Seven people; Ava-Ben adjacent, Cal next to neither, and Cal at an end. **KEY: $384$** |

## Worksheet — ch02-ws.js (free response; `answer` is a LaTeX string)

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | Two-digit positive integers whose units digit is MORE than twice the tens digit. **KEY: `'$16$'`** | Red and blue dice; rolls where blue is at least twice red. **KEY: `'$9$'`** | *Reversed:* Two-digit positive integers whose units digit is LESS than twice the tens digit. **KEY: `'$70$'`** |
| 2 | Rectangles with positive integer sides and perimeter $30$ (turned = same). **KEY: `'$7$'`** | Rectangles with positive integer sides and area $120$ (turned = same). **KEY: `'$8$'`** | *Derived:* Rectangles with positive integer sides and perimeter at most $30$ (turned = same). **KEY: `'$56$'`** |
| 3 | Integers $1$–$300$ that are multiples of $4$ but not of $6$. **KEY: `'$50$'`** | Three-digit multiples of $7$ that are not multiples of $3$. **KEY: `'$85$'`** | *Derived:* Integers $1$–$200$ that are multiples of $3$ or $5$ but not both. **KEY: `'$80$'`** |
| 4 | Strings of $6$ letters from X, Y (repeats allowed) with at least two X’s. **KEY: `'$57$'`** | Five people each choose soup or salad; choices with at least two soups and at least one salad. **KEY: `'$25$'`** | *Derived:* Strings of $5$ letters from X, Y with fewer X’s than Y’s. **KEY: `'$16$'`** |
| 5 | Odd five-digit positive integers with five different digits. **KEY: `'$13440$'`** | $4$-letter codes of different letters from A–H ending in a consonant. **KEY: `'$1260$'`** | *Derived:* Odd four-digit positive integers with four different digits that are greater than $5000$. **KEY: `'$1232$'`** |
| 6 | Eight different books; the dictionary at the right end and the three atlases together. **KEY: `'$720$'`** | Digits $1$–$8$ each once form an $8$-digit number; first digit $8$, and $1, 2, 3$ adjacent reading $123$ left to right. **KEY: `'$120$'`** | *Reversed:* Seven different books; atlas at the left end and the two cookbooks NOT adjacent. **KEY: `'$480$'`** |
| 7 | Seven campers incl. Uma, Vic, Wes in a row; Uma-Vic adjacent, Wes not at an end. **KEY: `'$960$'`** | Eight different flowers in a row; the two roses adjacent, the sunflower not at an end. **KEY: `'$7200$'`** | *Derived:* Six people; Ava-Ben adjacent, Cal not at an end, Ava to the left of Ben. **KEY: `'$72$'`** |
| 8 | Four dice (red, blue, green, yellow); outcomes with at least one $6$ that do NOT show four different numbers. **KEY: `'$431$'`** | Three spinners numbered $1$–$4$, one spin each (ordered); outcomes with at least one $4$ that do not show three different numbers. **KEY: `'$19$'`** | *Derived:* Red, blue, green dice; outcomes with at least one $6$ and an even sum. **KEY: `'$46$'`** |
| 9 | Three-digit positive integers whose digits have product $48$. **KEY: `'$21$'`** | Four-digit positive integers whose digits have product $6$. **KEY: `'$16$'`** | *Derived:* Three-digit positive integers whose digits have product $72$. **KEY: `'$24$'`** |
| 10 | Five boys, three girls, all different; a boy at each end and no two girls adjacent. **KEY: `'$2880$'`** | Six different red cards and four different black cards; a red card at each end and no two black cards adjacent. **KEY: `'$86400$'`** | *Reversed:* Four boys, three girls, no two girls adjacent, with a girl at at least one end. **KEY: `'$1296$'`** |
