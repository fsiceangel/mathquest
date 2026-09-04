# Pins — intro-counting ch01 (Counting Is Arithmetic)

Read `notes/variation-spec.md` first. Every KEY below was brute-forced in node by enumerating
the objects (lists, digit strings, permutations of labeled people). Do not retarget a pin;
if your own count disagrees, STOP and report. Answer indices are derived from the base:
v1 = (b+1)%4, v2 = (b+3)%4, v3 = (b+2)%4. Worksheet items are free response (no indices);
their keys are LaTeX strings, e.g. `'$94$'`.

Conventions to state in every stem: people/letters/books are all different (distinguishable);
"row" means order matters; digit strings are positive integers with no leading zero unless the
stem says a code; "between" is strict, "from … to" and "inclusive" include both ends.

## Already taken — do not reuse any of these number sets or scenarios

Base problems + learn examples in `ch01.js`:
- Lists: $23..91$ (69); $7,12,\ldots,152$ (30); multiples of $6$ between $100$ and $400$ (50); $14..63$ (50); bibs $37..112$ (76); $4,8,\ldots,96$ (24); multiples of $7$ from $50$ to $300$ (35); $3,7,\ldots,199$ (50); three-digit with units digit $3$ (90); $-17 \le n \le 42$ (60); squares strictly between $50$ and $1000$ (24); $5,12,19,\ldots$ terms $<1000$ (143); odd squares strictly between $100$ and $2000$ (17); $-8,-5,\ldots,61$ (24); $31..118$ (88); $9,16,\ldots,380$ (54); $11,18,\ldots,m$ with $40$ terms (284).
- Add/subtract: multiples of $6$ or $8$ to $80$ (20); $48$ books $30$ hardcover $25$ English $12$ both (5); neither $3$ nor $7$ to $100$ (57); chess $12$ + go $9$ disjoint (21); $6$ or $9$ to $60$ (13); $30$ students apples $18$ bananas $15$ both $7$ (4); two-digit containing $7$ (18); $6$ not $8$ to $200$ (25); $32$ students bike $20$ scooter $14$ neither $5$ (7); three-digit $5$ or $7$ (282); at least one of $2,3,5$ to $100$ (74); $1..1000$ containing $0$ (181); none of $3,4,5$ to $500$ (200); at least one of $4,6,9$ to $360$ (140); $1..300$ containing $7$ (57); digit sum $\ge 25$ (10); $3$ or $5$ not both to $1000$ (401); digit product $12$ (15); neither $4$ nor $9$ to $90$ (60); $28$ students soccer $17$ band $13$ neither $6$ (8); three-digit exactly one $0$ (162).
- Multiply: letter + two digits (2600); shirt $4$, pants $3$ or shorts $2$ (20); odd three-digit distinct (320); keychain $3 \cdot 5 \cdot 2$ (30); $36^4$ password (1679616); five-digit over $\{1,2,3\}$ (243); three-digit distinct even digits (48); spinner $3$ twice + two dice (324); $6$ mains, $4$ desserts or skip (30); even three-digit distinct (328); four distinct letters vowel-first consonant-last (57960); $<1000$ distinct nonzero digits (585); three-digit exactly one $5$ (225); three-digit all even (100); four-digit distinct with $0$ and $9$ (504); four-digit distinct divisible by $5$ (952); four-digit distinct odd digits (120).
- Permutations: $6$ runners (720); $9$ competitors, $3$ medals (504); Ana at an end of $5$ (48); GRAPH (120); $7$ students, $3$ offices (210); $8!/6!$ (56); $4$-letter strings from A–H distinct (1680); Jo leftmost, Kai not rightmost, $6$ chairs (96); four-digit distinct (4536); $5$ boys $3$ girls, girls in a block (4320); PLANET consonant both ends (288); Ann/Ben not adjacent in $7$ (3600); digits $1$–$5$ even $>30000$ (30); $4$ couples in a row of $8$ (384); $4$ boys $3$ girls no two girls adjacent (1440); CRAYON C left of R (360); $9!/7!$ (72); Mia/Noah at the two ends of $6$ (48); digits $1$–$5$ odd $>40000$ (30).

Counting problems in `src/data/prealgebra/ch14.js` (also off limits):
lists $12..47$, $5..15$, $18..74$, pages $8..20$, houses $25..104$, seats $37..118$; even numbers $10$–$50$, $14$–$58$; multiples of $5$ to $60$, of $4$ from $30$ to $90$, of $6$ from $100$ to $300$, of $7$ to $150$; $3,6,\ldots,30$; fence $60$ ft posts every $5$ ft; dog $14$ cat $9$ both $4$; soccer $16$ chess $11$ both $5$; $3$ or $5$ to $100$; $4$ or $6$ to $60$; yogurt $3 \cdot 4$; $4$ books; letter + nonzero digit (234); sandwich $2$ drink $3$; $4$ shirts $2$ hats; coin then die; $3$ true-false; $3$ students; $4$ trophies; $2$-digit lock; two letters + digit; four-digit all odd (625); Ava first of $5$; Jo and Kim adjacent in $5$; two different letters + two different digits; three-digit all distinct (648); cafe $4 \cdot 3 \cdot 2$; $2$ soups $3$ salads $2$ drinks; three-digit $>500$ all odd (75); digit-sum problems for $4$, $5$, $7$, $10$; both digits same; tens $>$ units; dice sums/products; coin-change; handshakes/round-robins; probabilities.

## §1.2 Counting Lists of Numbers — ch01-s1.js
base indices: 2 0 1 3 0 2 1 3 0 2
v1 indices:   3 1 2 0 1 3 2 0 1 3
v2 indices:   1 3 0 2 3 1 0 2 3 1
v3 indices:   0 2 3 1 2 0 3 1 2 0

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | How many integers are in the list $27, 28, 29, \ldots, 85$? **KEY: $59$** | A hotel’s rooms are numbered $213$ through $289$ with no number skipped. How many rooms? **KEY: $77$** | *Reversed:* The list $19, 20, 21, \ldots, n$ contains exactly $45$ integers. What is $n$? **KEY: $63$** |
| 2 | Hallway lockers are numbered $152$ through $243$, none skipped, one student per locker. How many students? **KEY: $92$** | A school play runs every day from March $4$ through March $30$, both dates included. How many performances? **KEY: $27$** | *Reversed:* Raffle tickets are numbered consecutively starting at $251$; exactly $68$ tickets are printed. What is the last ticket number? **KEY: $318$** |
| 3 | How many numbers are in the list $6, 12, 18, \ldots, 174$? **KEY: $29$** | A trail has a distance marker every $9$ meters: at $9$ m, $18$ m, $27$ m, …, with the last at $405$ m (none at the start). How many markers? **KEY: $45$** | *Reversed:* The list $11, 22, 33, \ldots, m$ contains exactly $38$ numbers. What is $m$? **KEY: $418$** |
| 4 | How many multiples of $9$ are there from $40$ to $500$, inclusive? **KEY: $51$** | How many three-digit positive integers are multiples of $12$? **KEY: $75$** | *Reversed:* $N$ is a multiple of $8$, and there are exactly $30$ multiples of $8$ from $100$ to $N$ inclusive. What is $N$? **KEY: $336$** |
| 5 | How many numbers are in the list $5, 11, 17, \ldots, 245$? **KEY: $41$** | A bus leaves the terminal at 6:05, 6:20, 6:35, and so on every $15$ minutes; the last bus leaves at 10:50. How many buses leave? **KEY: $20$** | *Reversed:* An arithmetic list starts at $8$, climbs by $6$ each time, and contains exactly $52$ numbers. What is its last number? **KEY: $314$** |
| 6 | How many four-digit positive integers have $7$ as their units digit? **KEY: $900$** | How many positive integers less than $700$ have units digit $4$? **KEY: $70$** | *Reversed:* The three-digit positive integers whose tens digit is $5$ are listed in increasing order. What is the $37$th number in the list? **KEY: $456$** |
| 7 | How many integers $n$ satisfy $-23 \le n \le 31$? **KEY: $55$** | How many integers $n$ satisfy $-15 < n < 43$ (both inequalities strict)? **KEY: $57$** | *Reversed:* The integers from $-14$ up to $k$ inclusive number exactly $40$. What is $k$? **KEY: $25$** |
| 8 | How many perfect squares are there from $200$ to $3000$, inclusive? **KEY: $40$** | How many perfect cubes are strictly between $10$ and $5000$? **KEY: $15$** | *Reversed:* The perfect squares greater than $100$ are listed in increasing order. What is the $25$th one? **KEY: $1225$** |
| 9 | The sequence $4, 13, 22, \ldots$ adds $9$ each time. How many of its terms are less than $800$? **KEY: $89$** | Tam starts at $2$ on a number line and jumps $11$ units to the right each time. Counting the starting point $2$, how many of his landing points are at most $500$? **KEY: $46$** | *Reversed:* The sequence $6, 17, 28, \ldots$ adds $11$ each time. What is the smallest term greater than $1000$? **KEY: $1007$** |
| 10 | How many even perfect squares are strictly between $300$ and $5000$? **KEY: $27$** | How many perfect squares from $1$ to $3000$ inclusive are multiples of $5$? **KEY: $10$** | *Derived:* How many even perfect cubes are strictly between $1$ and $20{,}000$? **KEY: $13$** |

## §1.3 Counting with Addition and Subtraction — ch01-s2.js
base indices: 1 3 0 2 1 0 3 2 0 1
v1 indices:   2 0 1 3 2 1 0 3 1 2
v2 indices:   0 2 3 1 0 3 2 1 3 0
v3 indices:   3 1 2 0 3 2 1 0 2 3

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | A library has $14$ people in its mystery club and $11$ in its poetry club, and nobody is in both. How many people are in at least one club? **KEY: $25$** | A drawer holds $8$ red socks, $6$ blue socks, and $9$ white socks, every sock exactly one color. How many socks? **KEY: $23$** | *Reversed:* Each of the $37$ orchestra members plays exactly one of strings or winds; $22$ play strings. How many play winds? **KEY: $15$** |
| 2 | How many integers from $1$ to $120$ are multiples of $4$ or of $10$? **KEY: $36$** | How many integers from $1$ to $100$ are perfect squares or perfect cubes? **KEY: $12$** | *Derived:* How many integers from $1$ to $90$ are multiples of exactly one of $6$ and $10$? **KEY: $18$** |
| 3 | Of $45$ campers, $26$ went swimming, $22$ went canoeing, $12$ did both. How many did neither? **KEY: $9$** | In a lot of $55$ cars, $31$ are white, $22$ have a sunroof, $9$ are white with a sunroof. How many are neither white nor have a sunroof? **KEY: $11$** | *Derived:* Of $40$ students, $24$ like pizza, $19$ like tacos, $11$ like both. How many like exactly one of the two? **KEY: $21$** |
| 4 | How many three-digit positive integers contain the digit $4$ at least once? **KEY: $252$** | How many two-digit positive integers have at least one even digit? **KEY: $65$** | *Derived:* How many two-digit positive integers contain the digit $5$ or the digit $6$ at least once? **KEY: $34$** |
| 5 | How many integers from $1$ to $300$ are divisible by $4$ but not by $6$? **KEY: $50$** | How many three-digit positive integers are divisible by $9$ but not by $5$? **KEY: $80$** | *Derived:* How many integers from $1$ to $300$ are divisible by $6$ but by neither $8$ nor $9$? **KEY: $26$** |
| 6 | Of $50$ campers, $29$ hiked, $33$ fished, $4$ did neither. How many did both? **KEY: $16$** | A box holds $40$ buttons: $23$ round, $25$ red, $6$ neither round nor red. How many are round and red? **KEY: $14$** | *Reversed:* In a class, $21$ own a dog, $16$ own a cat, $9$ own both, $7$ own neither. How many students are in the class? **KEY: $35$** |
| 7 | How many three-digit positive integers are divisible by $4$ or by $9$? **KEY: $300$** | How many integers from $1$ to $400$ are perfect squares or even (or both)? **KEY: $210$** | *Derived:* How many three-digit positive integers are divisible by exactly one of $5$ and $8$? **KEY: $248$** |
| 8 | How many integers from $1$ to $200$ are divisible by at least one of $3$, $4$, $5$? **KEY: $120$** | In a school of $150$: $60$ in band, $45$ in choir, $40$ in drama; $20$ band+choir, $15$ band+drama, $12$ choir+drama, $5$ in all three. How many are in at least one? **KEY: $103$** | *Derived:* How many integers from $1$ to $210$ are divisible by at least two of $2$, $3$, $5$? **KEY: $56$** |
| 9 | How many integers from $1$ to $1000$ contain the digit $5$ at least once? **KEY: $271$** | How many integers from $1$ to $1000$ contain at least one digit greater than $7$ (an $8$ or a $9$)? **KEY: $488$** | *Derived:* How many integers from $1$ to $1000$ contain at least one $0$ and at least one $8$? **KEY: $36$** |
| 10 | How many integers from $1$ to $720$ are divisible by none of $4$, $5$, $6$? **KEY: $384$** | How many two-digit positive integers are divisible by none of $3$, $5$, $7$? **KEY: $41$** | *Derived:* How many integers from $1$ to $300$ are divisible by exactly one of $3$, $5$, $8$? **KEY: $125$** |

## §1.4 Counting Multiple Events — ch01-s3.js
base indices: 3 0 2 1 0 3 1 2 0 2
v1 indices:   0 1 3 2 1 0 2 3 1 3
v2 indices:   2 3 1 0 3 2 0 1 3 1
v3 indices:   1 2 0 3 2 1 3 0 2 0

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | A sandwich is one of $4$ breads, one of $6$ fillings, one of $3$ sauces. How many sandwiches? **KEY: $72$** | A quiz has $2$ true-false questions and $2$ questions with $5$ choices each; every question is answered. How many ways to fill the sheet? **KEY: $100$** | *Reversed:* A snack combo is one of $4$ drinks, one of $n$ chip flavors, one of $3$ dips; there are $84$ combos. What is $n$? **KEY: $7$** |
| 2 | A code is $3$ characters, each one of the $26$ uppercase letters or the digits $1$–$9$, repeats allowed. How many codes? **KEY: $42875$** | A garden has $5$ beds in a row; each bed gets one of $4$ kinds of flower, and kinds may repeat. How many plantings? **KEY: $1024$** | *Reversed:* Codes of $3$ symbols from an alphabet of $n$ symbols, repeats allowed, number $4913$. What is $n$? **KEY: $17$** |
| 3 | How many six-digit positive integers have every digit equal to $4$ or $7$? **KEY: $64$** | A string of $7$ lights, each red, green, blue, or white. How many colorings? **KEY: $16384$** | *Derived:* How many positive integers less than $10{,}000$ have every digit equal to $1$ or $2$? **KEY: $30$** |
| 4 | How many four-digit positive integers have four different digits, all even? **KEY: $96$** | A three-digit door code uses digits $1$–$8$, no digit repeated, first digit even. How many codes? **KEY: $168$** | *Derived:* How many three-digit positive integers have all three digits even and at least two digits equal? **KEY: $52$** |
| 5 | Flip a coin $3$ times, then spin a $5$-section spinner twice. How many sequences of results? **KEY: $200$** | Roll a standard die, draw one of the $13$ hearts from a deck, then pick one of $4$ doors. How many outcomes? **KEY: $312$** | *Reversed:* A die is rolled once and an $n$-section spinner spun twice; there are $486$ sequences. What is $n$? **KEY: $9$** |
| 6 | A bike: one of $5$ frames, then one of $3$ baskets or no basket, then one of $2$ bells or no bell. How many bikes? **KEY: $60$** | A form has $3$ questions: the first has $5$ options, the other two $3$ each, and any question may be left blank. How many ways to fill it? **KEY: $96$** | *Reversed:* A meal is one of $8$ mains with either one of $n$ sides or no side; $56$ meals. What is $n$? **KEY: $6$** |
| 7 | How many three-digit positive integers with three different digits are divisible by $5$? **KEY: $136$** | Three-letter strings of different letters from A–J that end in a vowel (A, E, I) and do not start with A. How many? **KEY: $200$** | *Derived:* How many even three-digit positive integers with three different digits are less than $500$? **KEY: $144$** |
| 8 | Strings of $5$ different letters that begin with a consonant and end with a vowel. How many? **KEY: $1275120$** | From $7$ teachers and $5$ students, a row of $4$ different people with a teacher at the left end and a student at the right end. How many rows? **KEY: $3150$** | *Derived:* Strings of $4$ different letters that begin with a vowel or end with a consonant (or both). How many? **KEY: $300840$** |
| 9 | How many positive integers less than $10{,}000$ have all digits different and all digits odd? **KEY: $205$** | Strings of $1$, $2$, or $3$ letters from A–F with no letter repeated. How many? **KEY: $156$** | *Derived:* How many positive integers less than $1000$ have all their digits different ($0$ allowed)? **KEY: $738$** |
| 10 | How many four-digit positive integers contain exactly one digit equal to $3$? **KEY: $2673$** | How many three-digit positive integers have exactly two equal digits (the third different)? **KEY: $243$** | *Derived:* How many three-digit positive integers contain at least two digits equal to $5$? **KEY: $27$** |

## §1.5 Permutations — ch01-s4.js
base indices: 1 3 0 2 3 0 1 2 3 1
v1 indices:   2 0 1 3 0 1 2 3 0 2
v2 indices:   0 2 3 1 2 3 0 1 2 0
v3 indices:   3 1 2 0 1 2 3 0 1 3

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | The seven letters of JUMPING arranged in a row. How many arrangements? **KEY: $5040$** | Eight different paintings hung in a row along a wall. How many orders? **KEY: $40320$** | *Reversed:* A word with all different letters has $40{,}320$ arrangements. How many letters? **KEY: $8$** |
| 2 | A team of $11$ picks a captain, co-captain, treasurer (all different). How many ways? **KEY: $990$** | A florist puts one of $8$ different flowers in each of $3$ different vases. How many ways? **KEY: $336$** | *Reversed:* A club fills president, vice president, treasurer (all different) in $1320$ ways. How many members? **KEY: $12$** |
| 3 | What is $\frac{11!}{9!}$? **KEY: $110$** | What is $\frac{12!}{10! \cdot 2!}$? **KEY: $66$** | *Derived:* What is $\frac{11!}{9!} + \frac{10!}{8!}$? **KEY: $200$** |
| 4 | Five-letter strings from the $9$ letters A–I, no letter used more than once. How many? **KEY: $15120$** | Four of $12$ different songs placed in order on a playlist. How many playlists? **KEY: $11880$** | *Derived:* Four-letter strings from A–H, no letter repeated, that contain the letter A. How many? **KEY: $840$** |
| 5 | Seven people incl. Lee and Max in $7$ chairs; Lee in the rightmost chair, Max not in the leftmost. How many seatings? **KEY: $600$** | Five different books incl. a dictionary and an atlas shelved in a row; dictionary at the left end, atlas not next to it. How many? **KEY: $18$** | *Derived:* Six people incl. Pat and Quinn in $6$ chairs; Pat at either end, Quinn not next to Pat. How many? **KEY: $192$** |
| 6 | How many five-digit positive integers have five different digits? **KEY: $27216$** | How many four-digit positive integers with four different digits are greater than $6000$? **KEY: $2016$** | *Derived:* How many four-digit positive integers have at least two digits the same? **KEY: $4464$** |
| 7 | Ten different people, $7$ adults and $3$ children, in a row; the children in a single block. How many? **KEY: $241920$** | Eight different books, $4$ cookbooks and $4$ novels, on a shelf; the cookbooks together in a block. How many? **KEY: $2880$** | *Derived:* Eight people, $5$ boys and $3$ girls, in a row; the three girls do NOT all stand together. How many? **KEY: $36000$** |
| 8 | The letters of MONARCH arranged; a vowel at both ends. How many? **KEY: $240$** | Six adults and $2$ children (all different) in a row of $8$; an adult at each end. How many? **KEY: $21600$** | *Derived:* The letters of DOLPHIN arranged; a vowel at at least one end. How many? **KEY: $2640$** |
| 9 | Eight people incl. Cara and Dev in a row; Cara and Dev not next to each other. How many? **KEY: $30240$** | Five different books incl. two math books on a shelf; the math books not adjacent. How many? **KEY: $72$** | *Derived:* Seven people incl. Eve and Finn in a row; exactly one person between Eve and Finn. How many? **KEY: $1200$** |
| 10 | Digits $1$–$6$ each once form a six-digit number; how many are odd and greater than $400{,}000$? **KEY: $192$** | Digits $0,1,2,3,4$ each once form a five-digit number (no leading $0$); how many are even? **KEY: $60$** | *Derived:* Digits $1$–$5$ each once form a five-digit number; how many are odd OR greater than $30{,}000$ (or both)? **KEY: $102$** |

## Challenge — ch01-cw.js
base indices: 2 0 3 1 0 2 1 3 0 2 1 3
v1 indices:   3 1 0 2 1 3 2 0 1 3 2 0
v2 indices:   1 3 2 0 3 1 0 2 3 1 0 2
v3 indices:   0 2 1 3 2 0 3 1 2 0 3 1

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | How many numbers are in the list $-13, -9, -5, \ldots, 87$? **KEY: $26$** | A number line has a dot at every multiple of $7$ from $-63$ to $105$ inclusive. How many dots? **KEY: $25$** | *Reversed:* The list $-11, -7, -3, \ldots$ has exactly $30$ numbers. What is the last? **KEY: $105$** |
| 2 | How many four-digit positive integers have all four digits even? **KEY: $500$** | How many three-digit positive integers have every digit greater than $5$ and a digit sum that is a multiple of $3$? **KEY: $22$** | *Derived:* How many three-digit positive integers have all digits even OR all digits odd? **KEY: $225$** |
| 3 | How many integers from $1$ to $420$ are multiples of at least one of $5$, $6$, $7$? **KEY: $180$** | How many integers from $1$ to $1000$ are a perfect square, a perfect cube, or a perfect fifth power? **KEY: $40$** | *Derived:* How many integers from $1$ to $540$ are multiples of exactly two of $4$, $6$, $9$? **KEY: $45$** |
| 4 | How many integers from $1$ to $700$ contain the digit $4$ at least once? **KEY: $214$** | How many three-digit positive integers contain at least one $6$ or at least one $7$? **KEY: $452$** | *Derived:* How many integers from $1$ to $500$ contain the digit $2$ exactly twice? **KEY: $22$** |
| 5 | How many three-digit positive integers have digit sum $24$ or more? **KEY: $20$** | How many four-digit positive integers have digit sum $33$ or more? **KEY: $35$** | *Derived:* How many three-digit positive integers have digit sum exactly $21$? **KEY: $28$** |
| 6 | How many integers from $1$ to $600$ are divisible by $4$ or $6$ but not both? **KEY: $150$** | How many three-digit positive integers are divisible by $3$ or $8$ but not both? **KEY: $338$** | *Derived:* How many integers from $1$ to $420$ are divisible by exactly one of $3$, $5$, $7$? **KEY: $176$** |
| 7 | Five married couples in a row of $10$, each couple side by side. How many? **KEY: $3840$** | Six different books, two each of math, science, history; same-subject books adjacent. How many shelvings? **KEY: $48$** | *Derived:* Four couples in a row of $8$, each couple together, and the Novak couple at the far left. How many? **KEY: $96$** |
| 8 | Five boys and $3$ girls in a row of $8$, no two girls adjacent. How many? **KEY: $14400$** | Five girls and $2$ boys in a row of $7$; at least two girls between the boys. How many? **KEY: $2400$** | *Derived:* Four boys and $4$ girls in a row of $8$; at least two girls adjacent. How many? **KEY: $37440$** |
| 9 | How many three-digit positive integers have digit product $24$? **KEY: $21$** | How many four-digit positive integers have digit product $6$? **KEY: $16$** | *Derived:* How many three-digit positive integers have digit product $72$? **KEY: $24$** |
| 10 | The letters of BLANKET arranged; B somewhere left of T. How many? **KEY: $2520$** | Six runners finish with no ties; Ada ahead of Bo and Bo ahead of Cy. How many orders? **KEY: $120$** | *Derived:* The letters of TURKEY arranged; T left of U but not adjacent to it. How many? **KEY: $240$** |
| 11 | Five-digit positive integers with five different digits containing both $0$ and $5$. How many? **KEY: $5376$** | Four-letter strings of different letters from A–H containing both A and B. How many? **KEY: $360$** | *Derived:* Four-digit positive integers with four different digits containing $0$ but not $9$. How many? **KEY: $1008$** |
| 12 | Five-digit positive integers with five different digits divisible by $5$. How many? **KEY: $5712$** | Four-digit positive integers with four different digits divisible by $25$. How many? **KEY: $154$** | *Derived:* Four-digit positive integers with four different digits that are even. How many? **KEY: $2296$** |

## Worksheet — ch01-ws.js (free response; keys are strings, no indices)

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | How many integers in $44, 45, \ldots, 137$? **KEY: $94$** | A garage numbers its spaces $116$ through $261$, none skipped. How many spaces? **KEY: $146$** | *Reversed:* A list of consecutive integers ends at $210$ and has $64$ members. What is its first number? **KEY: $147$** |
| 2 | How many numbers in $13, 21, 29, \ldots, 373$? **KEY: $46$** | A light blinks at $4$ s, $13$ s, $22$ s, … every $9$ seconds, last at $490$ s. How many blinks? **KEY: $55$** | *Reversed:* An arithmetic list of $41$ numbers starts at $3$ and ends at $563$. What is its step? **KEY: $14$** |
| 3 | The list $4, 13, 22, \ldots, m$ (step $9$) has $33$ numbers. What is $m$? **KEY: $292$** | An arithmetic list of $25$ numbers with step $8$ ends at $250$. What is its first number? **KEY: $58$** | *Reversed:* How many numbers in $14, 23, 32, \ldots, 356$? **KEY: $39$** |
| 4 | How many integers from $1$ to $140$ are multiples of neither $5$ nor $8$? **KEY: $98$** | How many three-digit positive integers are divisible by neither $5$ nor $8$? **KEY: $630$** | *Derived:* How many integers from $1$ to $126$ are multiples of exactly one of $6$ and $7$? **KEY: $33$** |
| 5 | Of $42$ students, $25$ play hockey, $20$ do drama, $9$ do neither. How many do both? **KEY: $12$** | Of $70$ houses, $41$ have a garage, $36$ a porch, $10$ neither. How many have both? **KEY: $17$** | *Reversed:* A class of $33$: $24$ like math, $19$ like art, everyone likes at least one. How many like both? **KEY: $10$** |
| 6 | How many four-digit positive integers have four different digits, all prime ($2,3,5,7$)? **KEY: $24$** | A four-digit code uses four different digits from $3$–$9$. How many codes? **KEY: $840$** | *Derived:* How many four-digit positive integers have four different odd digits and are greater than $5000$? **KEY: $72$** |
| 7 | What is $\frac{12!}{10!}$? **KEY: $132$** | What is $\frac{9! - 8!}{8!}$? **KEY: $8$** | *Reversed:* For which $n$ is $\frac{n!}{(n-3)!} = 3360$? **KEY: $16$** |
| 8 | Eight friends incl. Ola and Pim in a row; Ola at one end, Pim at the other. How many? **KEY: $1440$** | Five trophies of different heights in a row; tallest at the left end, shortest at the right end. How many? **KEY: $6$** | *Derived:* Seven friends incl. Raj and Sol in a row; neither Raj nor Sol at either end. How many? **KEY: $2400$** |
| 9 | How many four-digit positive integers contain exactly one digit equal to $0$? **KEY: $2187$** | How many four-digit positive integers contain exactly one $0$ and have no repeated digit? **KEY: $1512$** | *Derived:* How many three-digit positive integers contain at least one $0$? **KEY: $171$** |
| 10 | Digits $2$–$7$ each once form a six-digit number; how many are even and greater than $300{,}000$? **KEY: $312$** | Digits $1$–$6$ each once form a six-digit number; how many are divisible by $4$ and start with an odd digit? **KEY: $108$** | *Derived:* Digits $1$–$5$ each once form a five-digit number; how many are odd and less than $40{,}000$? **KEY: $42$** |

## Verification record
All 186 keys brute-forced by enumeration; v1, v2, v3 each 62 distinct keys (0 repeated); 0 slots with a repeated key across base|v1|v2|v3.
