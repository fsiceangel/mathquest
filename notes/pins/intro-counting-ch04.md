# Pins — intro-counting ch04 (Committees and Combinations)

Read `notes/variation-spec.md` first. Every KEY below was brute-forced in node by enumerating the
objects themselves (k-subsets of a labeled pool, ordered lists, subsets satisfying a stated
restriction); the "find $n$" pins were checked by scanning $n$ and enumerating at each value.
Do not retarget a pin; if your own count disagrees, STOP and report. Answer indices are derived
from the base: v1 = (b+1)%4, v2 = (b+3)%4, v3 = (b+2)%4. Worksheet items are free response
(no indices); their keys are LaTeX strings, e.g. `'$55$'`.

Conventions to state in every stem: people, books, flavors, letters and so on are all
different (distinguishable) and each may be chosen at most once; a committee/team/set has
**no roles and no order** unless the stem names roles; "exactly one", "at least two",
"more X than Y" are stated in words, never left to inference; a pair rule is always spelled
out in both directions ("A serves only if B serves, and B may serve without A" versus
"A and B refuse to serve together, though either may serve alone" versus "both serve or
neither serves"); when a group is chosen and then one member is singled out, the stem says
two selections are the same only if both the group and the singled-out member agree.

## Already taken — do not reuse any of these number sets or scenarios

Base problems + learn examples in `ch04.js`:
- §4.2 learn: $5$ people president+treasurer ($20$) vs committee of $2$ ($10$); $7$ choose $3$ ($35$);
  $9$ choose $2$ ($36$); $6$ midfielders choose $3$ ($20$); $2$ of $5$ parents with $1$ of $4$ teachers ($40$).
- §4.2 problems: $6$ choose $2$ ($15$); $5$ choose $3$ ($10$); repeats among $7\cdot6\cdot5=210$ lists ($6$);
  $8$ people $P-Q$ ($28$); $4$ flavors choose $3$ ($4$); $9$ choose $3$ ($84$); $10$ choose $4$ ($210$);
  $2$ of $5$ girls and $2$ of $6$ boys ($150$); Maya–Noor one-way rule, $4$ of $8$ ($50$);
  Ravi–Sofia refuse together, $4$ of $9$ ($105$).
- §4.3 learn: $\binom{8}{3}=56$; $\binom{13}{2}=78$, $\binom{13}{1}$, $\binom{13}{0}$; $8$ toppings choose $4$ ($70$);
  $\binom{10}{3}=120$; $\binom{6}{2}=15$; $\binom{9}{4}$ four factors.
- §4.3 problems: $\binom{10}{2}$ ($45$); $\binom{12}{3}$ ($220$); $\binom{9}{0}+\binom{9}{1}+\binom{9}{9}$ ($11$);
  $15$ stickers choose $2$ ($105$); $\binom{9}{4}$ ($126$); $5$ of $11$ trails ($462$); $\binom{n}{2}=66$ ($12$);
  $3$ of $7$ dogs with $2$ of $4$ cats ($210$); $11$ players $2$ goalies, lineup $5$ exactly one goalie ($252$);
  $12$ points, $5$ on one line and $4$ on another, triangles ($206$).
- §4.4 learn: $\binom{16}{15}=16$ and $\binom{24}{22}=276$; $7$ of $10$ players ($120$); $\binom{n}{4}=\binom{n}{9}$ ($13$,
  with $\binom{13}{4}=715$); $\binom{7}{2}=\binom{7}{5}=21$; $\binom{20}{18}=190$; $\binom{n}{3}=\binom{n}{7}\Rightarrow n=10$.
- §4.4 problems: $\binom{20}{18}$ ($190$); $\binom{14}{13}+\binom{14}{12}$ ($105$); $\binom{11}{4}=\binom{11}{7}$;
  $10$ of $12$ books ($66$); $\binom{n}{3}=\binom{n}{7}$ ($10$); $9$ of $11$ ($55$); $\binom{25}{23}-\binom{25}{2}$ ($0$);
  $10$ of $12$ then a leader ($660$); $12$ of $14$ posed, at least one of Ana/Ben out ($25$);
  $\binom{12}{k}>200$ count ($7$).
- Challenge: $5$ of $8$ spices ($56$); $4$ members, sizes $1$–$4$ ($15$); $\binom{30}{28}$ ($435$);
  $2$ of $5$ boys and $2$ of $4$ girls ($60$); $3$ of $10$ with at least one twin ($64$);
  $3$ of $8$ flavors with one on top ($168$); $4$ letters of A–I in alphabetical order ($126$);
  $4$ of $6$ teachers + $5$ students, at least $2$ students ($215$); Lena–Marco both-or-neither, $5$ of $9$ ($56$);
  $5$ from $4$ adults + $6$ children, $\ge 2$ adults, twins not both ($158$); $5$ from $6$ forwards + $4$ defenders,
  $\ge 2$ defenders, twins together-or-not ($80$); $4$ from $5$ seniors + $6$ juniors, more seniors, no Priya–Quinn ($59$).
- Worksheet: $2$ of $8$ puzzles ($28$); $\binom{12}{4}$ ($495$); $\binom{18}{16}$ ($153$); $2$ of $8$ then a host from $6$ ($168$);
  $2$ red of $4$ with $2$ blue of $5$ ($60$); $3$ of $10$ with Dev on it ($36$); $\binom{n}{2}=78$ ($13$);
  Eli–Fay not together, $4$ of $10$ ($182$); $8$ points on a circle, quadrilaterals through $P$ ($35$);
  $5$ from $6$ women + $5$ men, $\ge 3$ women, no Wanda–Max ($231$).

Other chapters that already own a scenario family — stay off it:
- `prealgebra/ch14.js` and `intro-counting/ch03.js` own **handshakes, round-robin schedules,
  diagonals of a polygon, every-pair-joined segments**: $4$/$6$/$9$/$10$/$12$/$13$/$14$/$16$ people,
  $5$/$7$/$8$/$9$/$10$/$11$/$12$ teams, hexagon/nonagon/decagon diagonals, $54$ diagonals $\Rightarrow 12$ sides,
  red–blue segment counts, feuding-pair and hat-wearer handshake variants. No variation here may be a
  handshake or round-robin problem, even in disguise.
- `intro-counting/ch05.js` §5.3 owns the restriction menagerie: $2$ of $6$ sprinters + $1$ of $4$ + $1$ of $5$ ($300$);
  $4$ of $10$ with both Priya and Raj ($28$); $5$ of $10$ with two barred ($56$); $3$ from $6$ boys $4$ girls at least one
  girl ($100$); $4$ from $5$+$5$ both kinds ($200$); split $8$ into unnamed teams of $3$ and $5$ ($56$); Tia–Uma one-way
  ($50$); $5$ from $6$ boys $5$ girls at least $2$ each ($350$); $9$ into three unnamed teams of $3$ ($280$);
  $12$ into three unnamed teams of $4$ with two apart ($4200$); $4$ of $10$ at least one of Ann/Ben ($140$);
  $12$ then $3$ then $2$ presenters ($660$); $3$-crew from $4$ couples ($32$); $4$ from $5$ boys $4$ girls ($120$);
  $5$ of $12$ with Hana in and Ivan out ($210$); twins split across unnamed teams ($20$, $56$).
  **No variation here divides people into unnamed teams, and none repeats those number sets.**
- `intro-counting/ch06.js` and its variants own committee-then-officer counts ($270$, $400$, $600$, $1080$),
  non-consecutive subsets of $\{1,\ldots,n\}$ ($56$, $40$, $64$, $504$), the $9$/$10$-member clubs with
  Ana/Ben/Cal/Dee rules ($66$, $41$, $132$), the $3$-of-$8$-toppings conditional pizza ($36$), and the
  regular polygon triangle counts ($28$, $50$).
- `intro-counting/ch12.js` and the ch14/ch15 variants own **Pascal's-triangle framings, sums of a whole row,
  $2^n$ subset counts, and binomial-sum equations**. Nothing here may be phrased as a row, a position in a row,
  or a sum over all $k$; the two "any number of members" pins below stay small and concrete.
- Already shipped variation files: `ch01-*`, `ch02-*`, `ch06-*`, `ch10-*`, `ch14-*`, `ch15-*`. Their committee-ish
  keys are listed above; nothing below repeats one of their stems.

## Hardening already applied to `ch04.js` — do not re-edit the base file

The chapter's four ambiguous stems were settled earlier and are present in the committed file
(which is unmodified): §4.2[5] says the three scoops "are mixed together so their order does not
matter"; §4.2[6] says "Noor is willing to serve with or without Maya"; §4.3[10] says "no other three
of the twelve points are collinear" and its solution notes the two lines share no marked point;
challenge[6] says two sundaes are the same only if they use the same three flavors and the same
flavor on top. Leave all four alone.

## §4.2 Committee Forming — ch04-s1.js
base indices: 1 2 2 0 2 3 1 2 3 0
v1 indices:   2 3 3 1 3 0 2 3 0 1
v2 indices:   0 1 1 3 1 2 0 1 2 3
v3 indices:   3 0 0 2 0 1 3 0 1 2

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | A chess club has $7$ members, and $2$ of them will be sent to a tournament; the two are sent as equals, with no first or second. How many pairs can be sent? **KEY: $21$** | A gardener has $9$ different seed packets and will plant exactly $2$ of them in one bed; the two plants share the bed with no order or position. How many different beds are possible? **KEY: $36$** | *Reversed:* A club sends $2$ of its members to a fair, the two chosen as equals, and there are exactly $45$ possible pairs. How many members does the club have? **KEY: $10$** |
| 2 | Seven cousins will send $4$ of their group to a family reunion; the four have no roles. How many groups of four are possible? **KEY: $35$** | A music teacher has $6$ different songs and will put $3$ of them on a program; the playing order is set later, so only the set of three matters now. How many sets are possible? **KEY: $20$** | *Reversed:* Choosing $3$ people from a group of $n$ one at a time gives $n(n-1)(n-2)$ ordered lists, and the group can form exactly $56$ different $3$-person committees. What is $n$? **KEY: $8$** |
| 3 | Choosing $4$ people from $12$ one at a time gives $12 \times 11 \times 10 \times 9 = 11880$ ordered lists. How many of those lists describe one and the same $4$-person committee? **KEY: $24$** | A baker picks $5$ of her $10$ different pastries and lines them up on a tray, giving $30240$ ordered trays. Two trays are called twins when they hold the same five pastries. How many of the ordered trays are twins of one fixed tray, counting that tray itself? **KEY: $120$** | *Derived:* The $9 \times 8 \times 7 = 504$ ordered ways to pick $3$ of $9$ swimmers describe how many different $3$-swimmer groups? **KEY: $84$** |
| 4 | A team has $12$ players. Let $P$ be the number of ways to choose a captain and a scorekeeper (two different people), and let $Q$ be the number of ways to choose $2$ players as equal co-captains. What is $P - Q$? **KEY: $66$** | A shelf holds $10$ different mugs. Let $A$ be the number of ways to pick one mug for tea and a different mug for coffee, and let $B$ be the number of ways to pick $2$ mugs to wash (the two washed mugs are interchangeable). What is $A - B$? **KEY: $45$** | *Reversed:* In a club of $n$ people, the number of ways to choose a president and a treasurer (two different people) is exactly $120$ more than the number of ways to choose $2$ equal co-chairs. What is $n$? **KEY: $16$** |
| 5 | A snack box holds $4$ different fruits chosen from the $6$ kinds on the shelf, jumbled together so their order does not matter. How many different boxes are possible? **KEY: $15$** | A tasting flight holds $7$ of the $8$ different teas a shop sells, and the teas in a flight are set out in no particular order. How many different flights are possible? **KEY: $8$** | *Reversed:* A shop's bowls each hold $3$ scoops of different flavors, mixed so their order does not matter, and exactly $10$ different bowls can be made. How many flavors does the shop offer? **KEY: $5$** |
| 6 | A class of $11$ students needs a $3$-person recycling team with no captain and no other roles. How many different teams are possible? **KEY: $165$** | A photographer will send $3$ of her $15$ different prints to a contest; the contest judges the three as a set, in no order. How many different entries are possible? **KEY: $455$** | *Derived:* A class of $10$ students can form a certain number of $3$-person crews, all crew members equal. How many more crews is that than a class of $9$ students can form? **KEY: $36$** |
| 7 | A coach picks $5$ of her $12$ swimmers for a relay squad; the swimming order will be decided later. How many different squads of $5$ can she pick? **KEY: $792$** | A radio host will play $3$ of the $14$ new songs tonight, and the playing order is decided later, so only the set of three matters. How many different sets are possible? **KEY: $364$** | *Reversed:* A coach picks a group of fewer than $5$ of her $10$ players for a drill, the players in the group all equal, and there are exactly $120$ possible groups. How many players are in a group? **KEY: $3$** |
| 8 | A panel is made of $2$ teachers chosen from $7$ teachers and $2$ parents chosen from $6$ parents; nobody on the panel has a title. How many different panels are possible? **KEY: $315$** | A gift basket holds $3$ of the $6$ kinds of cheese and $3$ of the $5$ kinds of jam, all kinds different and none repeated. How many different baskets are possible? **KEY: $200$** | *Reversed:* A committee takes $2$ of the $5$ coaches and $2$ of the $n$ referees, with no titles on either side, and there are exactly $360$ possible committees. What is $n$? **KEY: $9$** |
| 9 | A $3$-person crew is chosen from $9$ people. Rae will serve only if Sam also serves; Sam is willing to serve with or without Rae. How many crews are possible? **KEY: $63$** | A backpack will hold exactly $3$ of $8$ different gadgets. The tripod goes in only if the camera also goes in, while the camera may go in with or without the tripod. How many different packings are possible? **KEY: $41$** | *Derived:* A $4$-person committee is chosen from $9$ people. How many of the possible committees include Pia but not Quinn? **KEY: $35$** |
| 10 | A $3$-person study group is chosen from $10$ students. Tara and Uma refuse to be in it together, though either may be in it without the other. How many study groups are possible? **KEY: $112$** | A gardener puts $3$ of her $9$ different herbs into one pot. Rosemary and mint cannot share a pot, though either may share with any other herb. How many pots are possible? **KEY: $77$** | *Reversed:* A $3$-person team is chosen from $n$ people, two of whom refuse to serve together, though either may serve without the other; exactly $156$ teams obey the rule. What is $n$? **KEY: $11$** |

## §4.3 How to Compute Combinations — ch04-s2.js
base indices: 2 0 1 3 1 2 3 2 1 2
v1 indices:   3 1 2 0 2 3 0 3 2 3
v2 indices:   1 3 0 2 0 1 2 1 0 1
v3 indices:   0 2 3 1 3 0 1 0 3 0

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | What is $\binom{14}{2}$? **KEY: $91$** | A shelf holds $17$ different novels, and a reader takes $2$ of them on a trip; the two are simply packed together, in no order. How many pairs can she take? **KEY: $136$** | *Derived:* A group of $10$ people can be split into pairs of two members in $45$ ways, counting each unordered pair once. One more person joins the group. How many pairs are there now? **KEY: $55$** |
| 2 | What is $\binom{13}{3}$? **KEY: $286$** | A café has $16$ different pastries and puts $3$ different ones in a box; the box has no order. How many boxes are possible? **KEY: $560$** | *Reversed:* For a positive integer $n$, $\binom{n}{3} = 286$. What is $n$? **KEY: $13$** |
| 3 | What is $\binom{15}{0} + \binom{15}{1} + \binom{15}{15}$? **KEY: $17$** | A gardener may plant a bed with none of her $12$ different kinds of seed, or with exactly one kind, or with all twelve kinds. How many different beds is that altogether? **KEY: $14$** | *Reversed:* For a positive integer $n$, $\binom{n}{0} + \binom{n}{1} + \binom{n}{n} = 25$. What is $n$? **KEY: $23$** |
| 4 | A shop has $19$ different bookmarks and gives $2$ of them to a customer; the pair has no order. How many different pairs could the customer receive? **KEY: $171$** | A tiler will use exactly $2$ of the $23$ colors a shop sells, and the two colors play the same role in the pattern. How many color choices are possible? **KEY: $253$** | *Derived:* A teacher has $14$ different stickers. She gives $2$ of them to Ana, then gives $2$ of the remaining $12$ to Ben; neither pair is ordered. In how many ways can this be done? **KEY: $6006$** |
| 5 | What is $\binom{14}{4}$? **KEY: $1001$** | A chef picks $4$ of the $15$ different vegetables in the pantry for a soup; the four go into the pot together, in no order. How many choices are possible? **KEY: $1365$** | *Reversed:* For a positive integer $n$, $\binom{n}{4} = 3060$. What is $n$? **KEY: $18$** |
| 6 | What is $\binom{13}{6}$? **KEY: $1716$** | A lock opens when exactly $5$ of its $13$ buttons are pressed at the same time, so the order of pressing does not matter. How many different button sets open a lock of this kind? **KEY: $1287$** | *Reversed:* A hiker will walk $5$ of her club's $n$ different trails, and there are exactly $792$ possible sets of five. What is $n$? **KEY: $12$** |
| 7 | For which value of $n$ is $\binom{n}{2} = 120$? **KEY: $16$** | A shop sells sample packs, each holding $2$ of its $n$ different teas, and there are exactly $105$ possible packs. How many teas does the shop sell? **KEY: $15$** | *Derived:* For how many integers $n$ with $n \ge 2$ is $\binom{n}{2} \le 200$? **KEY: $19$** |
| 8 | A science fair will display $2$ of the $9$ posters and $3$ of the $5$ models entered; nothing displayed is ranked. How many different displays are possible? **KEY: $360$** | A playlist takes $3$ of the $6$ new songs and $2$ of the $7$ old songs, with the playing order decided later. How many different playlists are possible? **KEY: $420$** | *Reversed:* A show picks $3$ of the $8$ birds and $2$ of the $n$ rabbits, none of them ranked, and there are exactly $840$ possible groups. What is $n$? **KEY: $6$** |
| 9 | A band has $12$ musicians, $4$ of whom are drummers. A group of $5$ is chosen for a recording session and must contain exactly one drummer. How many groups are possible? **KEY: $280$** | Ten seedlings sit on a table, exactly $2$ of them tomato seedlings. A gardener plants $3$ of the ten in one bed, and the bed must contain exactly one tomato seedling. How many choices are possible? **KEY: $56$** | *Derived:* A club has $12$ members, $3$ of whom are lifeguards. A team of $4$ is chosen with no roles. How many teams contain at least one lifeguard? **KEY: $369$** |
| 10 | Ten points are marked on a page. Exactly $4$ of them lie on one straight line, and no other three of the ten are collinear. How many triangles have all three vertices among the ten points? **KEY: $116$** | Ten points are marked on a page. Exactly $4$ of them lie on one straight line, and no other three of the ten are collinear. How many different straight lines pass through at least two of the points? **KEY: $40$** | *Reversed:* A page has $n$ marked points, exactly $5$ of them on one straight line and no other three collinear, and exactly $354$ triangles have all three vertices among the points. What is $n$? **KEY: $14$** |

## §4.4 Our First Combinatorial Identity — ch04-s3.js
base indices: 1 3 0 2 1 2 0 1 3 3
v1 indices:   2 0 1 3 2 3 1 2 0 0
v2 indices:   0 2 3 1 0 1 3 0 2 2
v3 indices:   3 1 2 0 3 0 2 3 1 1

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | What is $\binom{22}{20}$? **KEY: $231$** | A shop displays $19$ of its $21$ different hats in the window; the window shows them as a set, in no order. How many different displays are possible? **KEY: $210$** | *Reversed:* For a positive integer $n$, $\binom{n}{n-2} = 300$. What is $n$? **KEY: $25$** |
| 2 | What is $\binom{17}{16} + \binom{17}{15}$? **KEY: $153$** | A club of $15$ members must leave exactly $13$ people out of a photo, or else exactly $14$ people out. How many more ways are there to leave out $13$ than to leave out $14$? **KEY: $90$** | *Reversed:* For a positive integer $n$, $\binom{n}{n-1} + \binom{n}{n-2} = 120$. What is $n$? **KEY: $15$** |
| 3 | Which of the following is equal to $\binom{15}{6}$? (Offer $\binom{15}{9}$, $\binom{15}{4}$, $\binom{9}{6}$, $\binom{15}{11}$.) **KEY: $\binom{15}{9}$** | Which of the following is equal to $\binom{n}{n-3}$ for every integer $n \ge 3$? (Offer $\binom{n}{3}$, $\binom{n-3}{3}$, $\binom{3}{n}$, $\binom{n}{n}$.) **KEY: $\binom{n}{3}$** | *Reversed:* $\binom{16}{k} = \binom{16}{9}$ and $k \ne 9$. What is $k$? **KEY: $7$** |
| 4 | A cook will use $11$ of her $13$ different spice jars this week; the jars used are a set, in no order. How many choices are possible? **KEY: $78$** | A test has $13$ questions and a student answers exactly $10$ of them; only which questions are answered matters, not the order. How many choices are possible? **KEY: $286$** | *Reversed:* A librarian displays all but $2$ of her $n$ different new books, and exactly $231$ different displays are possible. What is $n$? **KEY: $22$** |
| 5 | For what positive integer $n$ with $n \ge 9$ is $\binom{n}{2} = \binom{n}{9}$? **KEY: $11$** | A team has $n$ players, and the number of different groups of $3$ that can be chosen from it equals the number of different groups of $13$ that can be chosen from it, where $n \ge 13$. What is $n$? **KEY: $16$** | *Reversed:* For which positive integer $k$ is $\binom{40}{k} = \binom{40}{k+6}$? **KEY: $17$** |
| 6 | A crew of $11$ is chosen from $14$ workers, with no roles on the crew. How many crews are possible? **KEY: $364$** | A quilt is made from $15$ of the $18$ different fabric squares in a box; only which squares are used matters. How many choices are possible? **KEY: $816$** | *Reversed:* A committee of $n-3$ people is chosen from a club of $n$ people, and there are exactly $1140$ possible committees. What is $n$? **KEY: $20$** |
| 7 | What is $\binom{21}{19} + \binom{21}{2}$? **KEY: $420$** | What is $\dfrac{\binom{30}{27}}{\binom{30}{3}}$? **KEY: $1$** | *Reversed:* $\binom{26}{k} = \binom{26}{22}$ and $k \ne 22$. What is $k$? **KEY: $4$** |
| 8 | From $14$ people, $11$ are chosen for a trip and then one of the $11$ is named guide. Two outcomes are the same only if the same eleven travel and the same person guides. In how many ways can this be done? **KEY: $4004$** | A museum displays $9$ of its $11$ different masks and gives one of the displayed masks a spotlight. Two outcomes are the same only if the same nine are displayed and the same mask is lit. In how many ways can this be done? **KEY: $495$** | *Derived:* From $11$ people, $9$ are chosen for a trip and then $2$ of the $9$ are named co-leaders, the two co-leaders equal to each other. In how many ways can this be done? **KEY: $1980$** |
| 9 | A choir of $16$ will send $13$ singers to a festival, and at least one of Cleo and Dev must stay home. How many different groups of $13$ can be sent? **KEY: $196$** | A florist will use $12$ of her $15$ different flowers in an arrangement, and at least one of the two roses must be left out. How many different arrangements are possible? **KEY: $169$** | *Derived:* A photographer poses $9$ of the $12$ people at a party, so $3$ are left out, and exactly one of Rosa and Sam must be left out. How many different groups of $9$ can be posed? **KEY: $90$** |
| 10 | For how many integers $k$ with $0 \le k \le 10$ is $\binom{10}{k}$ greater than $100$? **KEY: $5$** | For how many integers $k$ with $0 \le k \le 11$ is $\binom{11}{k}$ less than $100$? **KEY: $6$** | *Derived:* Over the integers $k$ with $0 \le k \le 15$, what is the largest value of $\binom{15}{k}$? **KEY: $6435$** |

## Challenge — ch04-cw.js
base indices: 1 0 3 2 1 2 1 3 2 0 3 2
v1 indices:   2 1 0 3 2 3 2 0 3 1 0 3
v2 indices:   0 3 2 1 0 1 0 2 1 3 2 1
v3 indices:   3 2 1 0 3 0 3 1 0 2 1 0

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | A painter will use $5$ of her $10$ different pigments in one mix; the pigments are stirred together, so their order does not matter. How many different mixes are possible? **KEY: $252$** | A gardener leaves $6$ of her $9$ different pots outside for the night and brings the rest indoors; only which pots stay out matters. How many choices are possible? **KEY: $84$** | *Derived:* A cook has $9$ different spices and uses at least $7$ of them in a rub, in no particular order. How many different sets of spices could the rub use? **KEY: $46$** |
| 2 | A club has $5$ members. A committee may have any number of members from $1$ to $5$, and members are not ranked. How many different committees can the club form? **KEY: $31$** | A sandwich shop offers $5$ different extras. A sandwich may include any set of the extras, including none at all, and the extras are not ordered. How many different sandwiches are possible? **KEY: $32$** | *Derived:* A club has $6$ members. A committee must have at least $3$ members and may have as many as all $6$, with no ranks. How many different committees can the club form? **KEY: $42$** |
| 3 | What is $\binom{40}{38}$? **KEY: $780$** | A stack holds $26$ different cards, and all but $2$ of them are removed; only which two are left matters. How many outcomes are possible? **KEY: $325$** | *Reversed:* For a positive integer $n$, $\binom{n}{n-2} = 528$. What is $n$? **KEY: $33$** |
| 4 | A team of $5$ is chosen from $7$ juniors and $6$ seniors and must have exactly $3$ juniors and $2$ seniors, with no titles. How many different teams are possible? **KEY: $525$** | A fruit basket holds exactly $2$ of the $8$ kinds of apple and $2$ of the $5$ kinds of pear the market sells, each kind used at most once. How many different baskets are possible? **KEY: $280$** | *Reversed:* A show picks exactly $3$ of its $5$ dancers and exactly $2$ of its $n$ singers, none of them ranked, and there are exactly $2760$ possible groups. What is $n$? **KEY: $24$** |
| 5 | A $4$-person committee is chosen from $11$ people, two of whom are the cousins Rio and Tess. How many committees include at least one of the two cousins? **KEY: $204$** | A playlist takes $4$ of $8$ different songs, two of which are duets, and at least one of the two duets must be on it; the playing order is set later. How many playlists are possible? **KEY: $55$** | *Derived:* A $4$-person team is chosen from $9$ people, two of whom are the twins Kit and Lou. How many teams include exactly one of the twins? **KEY: $70$** |
| 6 | A trio of $3$ different instruments is chosen from $7$, and one of the three is named the lead. Two trios are the same only if they use the same three instruments and name the same lead. How many different trios are possible? **KEY: $105$** | A gardener plants $4$ of her $9$ different bulbs in a bed and marks one of the four planted bulbs with a stake. Two plantings are the same only if the same four bulbs are planted and the same bulb is staked. How many plantings are possible? **KEY: $504$** | *Derived:* A layered dessert uses $3$ of the $9$ different syrups a shop stocks, and one of the three is poured on top. How many such desserts have caramel, one of the $9$ syrups, as the top syrup? **KEY: $28$** |
| 7 | A code is a string of $5$ different letters chosen from the eleven letters $A$ through $K$ and written in alphabetical order, such as $BDFHK$. How many different codes are there? **KEY: $462$** | A hiker's log names $4$ of the $14$ rest stops along a trail, listed in the order she passes them, which is fixed by the trail. How many different logs are possible? **KEY: $1001$** | *Derived:* A code is a string of $4$ different letters chosen from the ten letters $A$ through $J$ and written in alphabetical order. How many codes contain $A$ but not $B$? **KEY: $56$** |
| 8 | A committee of $4$ is chosen from $7$ adults and $4$ teens; it must contain at least $2$ teens, and nobody on it has a title. How many committees are possible? **KEY: $155$** | A gift box holds $5$ items chosen from $6$ different books and $4$ different toys, and it must contain at least $3$ toys. How many different boxes are possible? **KEY: $66$** | *Derived:* A panel of $4$ is chosen from $5$ coaches and $6$ athletes, and it may contain at most $1$ athlete. How many panels are possible? **KEY: $65$** |
| 9 | A crew of $4$ is chosen from $10$ people. Nia and Otto are inseparable: either both serve or neither serves. How many crews are possible? **KEY: $98$** | A window display uses $4$ of $11$ different items, two of which are matching lamps; the two lamps are displayed together or not at all. How many displays are possible? **KEY: $162$** | *Derived:* A committee of $4$ is chosen from $10$ people, two of whom are Ada and Bo. Exactly one of Ada and Bo must serve. How many committees are possible? **KEY: $112$** |
| 10 | A crew of $4$ is chosen from $5$ adults and $6$ students. At least $2$ adults must serve, and the twins Eve and Fin, both students, will not both serve. How many crews are possible? **KEY: $205$** | A display uses $5$ of $9$ plants: $4$ different cacti and $5$ different ferns. It must contain at least $3$ ferns, and the two matching ferns are never both used. How many displays are possible? **KEY: $50$** | *Derived:* A team of $4$ is chosen from $3$ coaches and $6$ players. At least $1$ coach must serve, and the twins Gus and Hal, both players, will not both serve. How many teams are possible? **KEY: $96$** |
| 11 | A band of $5$ is chosen from $7$ guitarists and $3$ drummers. It must include at least $1$ drummer, and the guitarists Ana and Ben play together or not at all. How many bands are possible? **KEY: $101$** | A bouquet has $4$ stems chosen from $5$ different roses and $4$ different lilies. It must contain at least $2$ lilies, and the two matching roses are used together or not at all. How many bouquets are possible? **KEY: $37$** | *Derived:* A lineup of $4$ is chosen from $5$ forwards and $4$ defenders. It must include at least $2$ defenders, and the forwards Mo and Ned refuse to play together, though either may play without the other. How many lineups are possible? **KEY: $75$** |
| 12 | A committee of $4$ is chosen from $7$ boys and $5$ girls. It must have more boys than girls, and it cannot include both Tom (a boy) and Uma (a girl). How many committees are possible? **KEY: $195$** | A gift box holds $5$ items chosen from $6$ different books and $4$ different games. It must contain more books than games, and it cannot contain both the atlas (a book) and the puzzle (a game). How many boxes are possible? **KEY: $146$** | *Derived:* A committee of $4$ is chosen from $6$ seniors and $5$ juniors. It must have more seniors than juniors, and Priya, a senior, must be on it. How many committees are possible? **KEY: $60$** |

## Worksheet — ch04-ws.js
Free response: no answer indices; every key is a LaTeX string.

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | How many ways are there to choose $2$ of $11$ different board games to bring to a party, the two games chosen as equals? **KEY: `'$55$'`** | A shop puts $2$ of its $13$ different cakes in the window; the two sit side by side with neither one first. How many pairs are possible? **KEY: `'$78$'`** | *Reversed:* A group of friends can choose $2$ of themselves, with no distinction between the two, in exactly $210$ ways. How many friends are in the group? **KEY: `'$21$'`** |
| 2 | Compute $\binom{11}{4}$. **KEY: `'$330$'`** | Compute $\binom{12}{5}$. **KEY: `'$792$'`** | *Derived:* Compute $\binom{12}{4} + \binom{12}{8}$. **KEY: `'$990$'`** |
| 3 | Compute $\binom{23}{21}$. **KEY: `'$253$'`** | A jeweler shows $17$ of her $19$ different rings in a case; only which rings are shown matters. How many different showings are possible? **KEY: `'$171$'`** | *Reversed:* For a positive integer $n$, $\binom{n}{n-2} = 351$. What is $n$? **KEY: `'$27$'`** |
| 4 | A team of $10$ chooses $3$ of its members to plan a trip, and then $1$ of the remaining $7$ to drive the van. The three planners are not ranked. In how many ways can this be done? **KEY: `'$840$'`** | A gardener picks $2$ of her $9$ different seed packets to plant in the front bed, and then $1$ of the remaining $7$ packets to plant in a pot. The two front-bed seeds are not ranked. In how many ways can this be done? **KEY: `'$252$'`** | *Derived:* A club of $9$ members chooses $2$ of them to pick the book and then $2$ of the remaining $7$ to bring snacks. Neither pair is ranked. In how many ways can this be done? **KEY: `'$756$'`** |
| 5 | A box holds $6$ different stickers and $5$ different stamps. How many ways are there to choose $3$ stickers and $2$ stamps, with no order within either group? **KEY: `'$200$'`** | A menu offers $7$ different soups and $6$ different salads. How many ways are there to choose $2$ soups and $2$ salads for a tasting, with no order within either pair? **KEY: `'$315$'`** | *Derived:* A bag holds $5$ different red marbles and $5$ different blue marbles, one of the blue ones being the blue star. How many ways are there to choose $2$ red marbles and $2$ blue marbles if the blue star must be one of the chosen marbles? **KEY: `'$40$'`** |
| 6 | A $4$-person committee is chosen from $11$ people, and Rosa must be on it. How many committees are possible? **KEY: `'$120$'`** | A gardener plants $5$ of her $10$ different bulbs, and the tulip must be one of them; the planted bulbs have no order. How many choices are possible? **KEY: `'$126$'`** | *Derived:* A $3$-person committee is chosen from $12$ people. Ida must be on it and Jon must not. How many committees are possible? **KEY: `'$45$'`** |
| 7 | Find the positive integer $n$ for which $\binom{n}{2} = 171$. **KEY: `'$19$'`** | A shop sells gift pairs, each holding $2$ of its different candles with neither candle first, and there are exactly $253$ possible pairs. How many kinds of candle does the shop sell? **KEY: `'$23$'`** | *Derived:* For a positive integer $n$, $\binom{n}{2} = 45$. What is $\binom{n}{3}$ for that same $n$? **KEY: `'$120$'`** |
| 8 | A $4$-person committee is chosen from $11$ people. Gia and Hal will not serve together, though either may serve without the other. How many committees are possible? **KEY: `'$294$'`** | A florist puts $3$ of $10$ different flowers in a vase. The lily and the iris cannot both be in it, though either may be in it without the other. How many vases are possible? **KEY: `'$112$'`** | *Derived:* A $4$-person committee is chosen from $13$ people. Ivy must serve, and Gia and Hal refuse to serve together, though either may serve without the other. How many committees are possible? **KEY: `'$210$'`** |
| 9 | Ten points, one of them labeled $Q$, are marked on a circle. How many triangles with all three vertices among the ten points have $Q$ as one of their vertices? **KEY: `'$36$'`** | Nine points, one of them labeled $R$, are marked on a circle. How many pentagons with all five vertices among the nine points have $R$ as one of their vertices? **KEY: `'$70$'`** | *Derived:* Fourteen points, two of them labeled $P$ and $Q$, are marked on a circle. How many quadrilaterals with all four vertices among the fourteen points have both $P$ and $Q$ as vertices? **KEY: `'$66$'`** |
| 10 | A committee of $4$ is chosen from $7$ students and $5$ teachers. It must contain at least $2$ students, and it cannot contain both Nora (a student) and Otto (a teacher). How many committees are possible? **KEY: `'$381$'`** | A basket holds $4$ pieces of fruit chosen from $6$ different apples and $5$ different oranges. It must contain at least $2$ apples, and it cannot contain both the red apple and the navel orange. How many baskets are possible? **KEY: `'$235$'`** | *Derived:* A committee of $4$ is chosen from $5$ women and $5$ men. It must contain at least $2$ women, and Wren, a woman, must be on it. How many committees are possible? **KEY: `'$74$'`** |

## Designer's verification log

- Scratch brute-forcers checked all $156$ keys: $161$ checks, $0$ failures.
  The `C(n,k)` used there is a real k-subset enumerator, cross-checked against the exact
  factorial value for every $n \le 18$; restriction pins are counted by enumerating subsets of a
  labeled pool under the stated predicate, the "how many orderings" pins by generating the
  orderings, and the "find $n$" pins by scanning $n$ and enumerating at each value. Only
  §4.4[5]v3 ($\binom{40}{k} = \binom{40}{k+6}$) is beyond enumeration; it is verified by exact
  integer arithmetic plus an enumerated small analogue, $\binom{10}{k} = \binom{10}{k+2}$.
- A scratch script checked the design table against the base keys: round 2, round 3 and round 4
  each hold $52$ distinct keys with $0$ repeats, and $0$ slots repeat a key across base | v1 | v2 | v3.
- Every answer-index row above is computed from the base indices, not chosen.
