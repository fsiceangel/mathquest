# Pins — intro-counting ch12 (Pascal’s Triangle)

Read `notes/variation-spec.md` first. Every KEY below was brute-force verified in node: the
triangle is built to row 40 by the additive rule alone (BigInt, no factorials), subsets are
enumerated by bitmask over the full $2^n$ range, and every sum is evaluated term by term.
Do not retarget a pin; if your own computation disagrees, STOP and report. Answer indices
are derived from the base: v1 = (b+1)%4, v2 = (b+3)%4, v3 = (b+2)%4. Worksheet items are
free response (no indices); their keys are LaTeX strings, e.g. `'$1024$'` or
`'Row $13$, position $4$'`.

Conventions to state in every stem: **“rows and positions are numbered from $0$”** wherever
any entry, row or position is named; a “subset” includes the empty set unless the stem says
“non-empty”; a committee/team/delegation of “any size” likewise includes the empty one
unless a lower bound is stated, and every lower or upper bound on size is written out;
“$n$ is a positive integer” wherever an unknown row or club size is solved for; a walk down
the triangle takes one down-left or down-right step at each stage, starting from the single
$1$ at the top.

## Already taken — do not reuse any of these entries, rows, sums or scenarios

`ch12.js` base problems + learn examples (settled version, including the two hardened
challenge items #10 and #11):

- §12.2 learn: row $5 \to$ row $6$; position $3$ of row $8$ ($56$); row summing to $256$
  (row $8$, $9$ entries). §12.2 problems: identify row $1,5,10,10,5,1$ (row $5$);
  row $6 \to$ position $2$ of row $7$ ($21$); entries in row $9$ ($10$); sum of row $10$
  ($1024$); middle of row $8$ ($70$); row $9$ without its end $1$s ($510$); position $1 = 12
  \to$ position $2$ ($66$); $84$ and $126$ side by side $\to$ parent ($56$); rows $0$–$7$
  combined ($255$); odd entries of row $12$ ($4$).
- §12.3 learn: $\binom{7}{4}$ from row $7$ ($35$); $3$ of $9$ titles ($\binom{9}{3} = 84$);
  where $210$ sits in row $10$ (positions $4$ and $6$). §12.3 problems: row $8$ position $3$
  as a symbol ($\binom{8}{3}$); $\binom{6}{3} - \binom{6}{5}$ ($14$); what else equals $210$
  ($\binom{10}{4}$); $5$-step walks to position $2$ of row $5$ ($10$); $\binom{8}{k} = 56$
  ($k = 3$ or $5$); $\binom{8}{5}$ located (position $5$, $56$); $\binom{11}{4} +
  \binom{11}{7}$ ($660$); $\binom{n}{5} = 1287$ (row $13$); $6$-step walks ending at an entry
  $\ge 15$ ($50$); equal entries $126,126$ then two rows down, position $4$ ($330$).
- §12.4 learn: $\binom{9}{3} + \binom{9}{4} = \binom{10}{4}$ ($210$); $\binom{13}{5} -
  \binom{12}{5} = \binom{12}{4}$ ($495$); $5$ from $11$ with/without Fatima ($210$, $252$,
  $462$). §12.4 problems: $\binom{7}{3} + \binom{7}{4}$ ($70$); which sum is $\binom{10}{3}$;
  $\binom{20}{9} + \binom{20}{10}$ ($\binom{21}{10}$); $792$ with children $1287,1716 \to$
  neighbours $495, 924$; $4$ from $10$, $84$ with Omar $\to 126$ without; $\binom{n-1}{3} =
  20$, $\binom{n-1}{4} = 15$ ($n = 7$); $\binom{9}{4} - \binom{8}{4} - \binom{7}{3}$
  ($\binom{7}{2}$); $\binom{n-1}{2} = 66 \to$ neither Priya nor Quinn ($165$);
  $\binom{10}{3} + \binom{10}{4} + \binom{11}{5}$ ($792$); $\binom{n}{4} - \binom{n-1}{4} =
  455 \to \binom{n}{2}$ ($120$).
- §12.5 learn: full row $8$ sum ($256$); non-empty delegations from $7$ ($127$); first half of
  row $9$ ($256$). §12.5 problems: row $7$ sum $+$ row $8$ sum ($384$); subsets of a $5$-set
  ($32$); $\binom{10}{1} + \cdots + \binom{10}{10}$ ($1023$); $\ge 2$ of $7$ toppings
  ($120$); $\binom{8}{0} + \cdots + \binom{8}{3}$ ($93$); alternating row $9$ ($0$);
  even-size subsets of an $8$-set ($128$); subsets of $\{1,\ldots,9\}$ containing $9$ and one
  more ($255$); $2^n - 1 - n = 1013$ ($n = 10$); majority committees from $10$ ($386$).
- Challenge: $13$-entry row sum ($4096$); $\binom{8}{2} + \binom{8}{3}$ ($84$); $\binom{10}{3}$
  vs $\binom{9}{4}$ (row $9$, by $6$); subsets of a $6$-set with $< 5$ elements ($57$);
  odd-index entries of row $12$ ($2048$); $66, 220$ in positions $2,3 \to$ position $4$ of the
  next row ($715$); odd entries in rows $0$–$6$ ($19$); $6$ teachers/$4$ students, $\ge 1$
  teacher ($1008$); $3003$ in positions $5$ and $6$ (rows $15 + 14 = 29$); even-size subsets
  of $\{1,\ldots,10\}$ with exactly one of $1,2$ ($256$); $2^n - 1 - n - \binom{n}{2} = 968$
  ($n = 10$); even-size subsets of $\{1,\ldots,10\}$ with at least one of $1,2$ ($384$).
- Worksheet: position $1 = 15 \to$ position $3$ ($455$); row $11$ position $3 \to$ row $12$
  position $3$ ($220$); sum of row $13$ ($8192$); $\binom{6}{2} + \binom{6}{3}$
  ($\binom{7}{3} = 35$); $\binom{20}{5} + 2\binom{20}{6} + \binom{20}{7}$ ($\binom{22}{7}$);
  $\ge 2$-element subsets of a $9$-set ($502$); where $21$ appears (rows $7$ and $21$);
  $\binom{12}{7} + \cdots + \binom{12}{12}$ ($1586$); $8$ people, Ana and Ben not together
  ($192$); $5$ boys/$5$ girls, one of each at least ($961$).

Combination and subset material elsewhere (also off limits):

- `ch04.js`: $\binom{10}{2}$, $\binom{12}{3}$, $\binom{9}{4}$, $\binom{20}{18}$,
  $\binom{30}{28}$, $\binom{12}{4}$, $\binom{18}{16}$; $\binom{9}{0} + \binom{9}{1} +
  \binom{9}{9}$; $\binom{14}{13} + \binom{14}{12}$; $\binom{25}{23} - \binom{25}{2}$;
  $\binom{n}{2} = 66$ and $\binom{n}{2} = 78$; $\binom{n}{3} = \binom{n}{7}$;
  $\binom{n}{4} = \binom{n}{9}$; count of $k$ with $\binom{12}{k} > 200$; committees of any
  size from $4$ members, $1$ to $4$ ($15$); “at least one of the twins” from $10$; the
  refuse-to-serve-together and serve-only-if pairs at $8$, $9$, $10$ people.
- `ch05.js`: $4$ from $10$ with both Priya and Raj; $5$ from $10$ with two barred; at least
  one girl from $6$ boys/$4$ girls; at least one boy and one girl from $5$/$5$ and from
  $5$ boys/$4$ girls; at least $2$ and $2$ from $6$/$5$; the $3$-and-$5$ split of eight.
- `ch13.js`: hockey sticks $\binom{3}{3} + \cdots + \binom{8}{3}$, $\binom{4}{4} + \cdots +
  \binom{9}{4}$, $\binom{6}{2} + \cdots + \binom{12}{2}$, $\binom{6}{3} + \cdots +
  \binom{13}{3}$, $\binom{3}{3} + \cdots + \binom{11}{3}$, $\binom{2}{2} + \cdots +
  \binom{9}{2}$, $\binom{5}{3} + \cdots + \binom{12}{3}$; largest/smallest-element sums over
  the $k$-subsets of $\{1,\ldots,8\}$, $\{1,\ldots,10\}$, $\{1,\ldots,12\}$; $4$-subsets of
  $\{1,\ldots,20\}$ with largest element $\le 12$.
- `ch14.js` §14.5 + challenge + worksheet: $\binom{8}{0} + \cdots + \binom{8}{7}$ ($255$);
  alternating row $7$ stopping at $\binom{7}{6}$ ($1$); $\binom{10}{2} + \binom{10}{4} +
  \binom{10}{6} + \binom{10}{8}$ ($510$); $\binom{9}{1} + \binom{9}{3} + \binom{9}{5} +
  \binom{9}{7}$ ($255$); $\binom{6}{0} + \binom{6}{2} + \binom{6}{4} + \binom{6}{6}$ ($32$);
  $\binom{7}{0} + \cdots + \binom{7}{7}$ ($128$); the weighted sums $\sum\binom{n}{k}c^k$.
- Shipped variations `src/data/variants/intro-counting/ch14-*.js` (all 186 checked; the
  identity-shaped ones matter here): $\binom{9}{0} + \cdots + \binom{9}{8}$ ($511$);
  $\binom{7}{2} + \cdots + \binom{7}{7}$ ($120$); $\binom{n}{0} + \cdots + \binom{n}{n-1} =
  16383$ ($n = 14$); $\binom{n}{0} + \cdots + \binom{n}{n} = 524288$ ($n = 19$); alternating
  row $9$ stopping at $-\binom{9}{7}$ ($-8$) and row $12$ stopping at $+\binom{12}{10}$
  ($11$); $\binom{12}{2} + \binom{12}{4} + \cdots + \binom{12}{10}$ ($2046$); odd-index row
  $13$ ($4096$); even-index row $n$ $= 32768$ ($n = 16$); $\binom{11}{0} + \binom{11}{2} +
  \cdots + \binom{11}{8}$ ($1013$); $\binom{8}{1} + \binom{8}{3} + \binom{8}{5} +
  \binom{8}{7}$ ($128$); $\binom{12}{1} + \binom{12}{3} + \cdots + \binom{12}{9}$ ($2036$);
  $\binom{7}{0}^2 + \cdots + \binom{7}{7}^2$ ($3432$ — so avoid that as an identity target,
  though row $14$’s middle entry is a different question); the Vandermonde products
  $\binom{6}{0}\binom{6}{2} + \cdots$ ($66$) and $\binom{5}{0}\binom{8}{3} + \cdots$ ($286$).

## Derived answer-index rows

§12.2 base: 1 1 0 3 1 2 0 3 2 0 | v1: 2 2 1 0 2 3 1 0 3 1 | v2: 0 0 3 2 0 1 3 2 1 3 | v3: 3 3 2 1 3 0 2 1 0 2
§12.3 base: 0 1 3 2 1 0 3 1 3 0 | v1: 1 2 0 3 2 1 0 2 0 1 | v2: 3 0 2 1 0 3 2 0 2 3 | v3: 2 3 1 0 3 2 1 3 1 2
§12.4 base: 2 0 1 3 0 1 2 3 0 1 | v1: 3 1 2 0 1 2 3 0 1 2 | v2: 1 3 0 2 3 0 1 2 3 0 | v3: 0 2 3 1 2 3 0 1 2 3
§12.5 base: 3 2 0 1 3 0 2 1 3 2 | v1: 0 3 1 2 0 1 3 2 0 3 | v2: 2 1 3 0 2 3 1 0 2 1 | v3: 1 0 2 3 1 2 0 3 1 0
Challenge base: 1 3 0 2 1 0 3 2 1 0 2 3 | v1: 2 0 1 3 2 1 0 3 2 1 3 0 | v2: 0 2 3 1 0 3 2 1 0 3 1 2 | v3: 3 1 2 0 3 2 1 0 3 2 0 1

## §12.2 Constructing Pascal’s Triangle — ch12-s1.js
base indices: 1 1 0 3 1 2 0 3 2 0
v1 indices:   2 2 1 0 2 3 1 0 3 1
v2 indices:   0 0 3 2 0 1 3 2 1 3
v3 indices:   3 3 2 1 3 0 2 1 0 2

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | One row of Pascal’s triangle begins $1, 14, 91, \ldots$. Which row is it? (Rows are numbered from $0$.) **KEY: Row $14$** | One row of Pascal’s triangle ends $\ldots, 190, 20, 1$. Which row is it? (Rows are numbered from $0$.) **KEY: Row $20$** | *Reversed:* In one row of Pascal’s triangle the entry in position $2$ is $105$. Which row is it? (Rows and positions are numbered from $0$.) **KEY: Row $15$** |
| 2 | Row $9$ of Pascal’s triangle is $1, 9, 36, 84, 126, 126, 84, 36, 9, 1$. What is the entry in position $3$ of row $10$? (Rows and positions are numbered from $0$.) **KEY: $120$** | One row of Pascal’s triangle contains the three side-by-side entries $45, 120, 210$. What is the sum of the two entries that sit directly below $120$ in the next row down? **KEY: $495$** | *Reversed:* In Pascal’s triangle the entry in position $3$ of row $10$ is $120$ and the entry in position $3$ of row $11$ is $165$. What is the entry in position $2$ of row $10$? (Rows and positions are numbered from $0$.) **KEY: $45$** |
| 3 | How many entries does row $23$ of Pascal’s triangle have? (The single $1$ at the top is row $0$.) **KEY: $24$** | Rows $0$ through $5$ of Pascal’s triangle are written out one under another. How many entries are there in all? **KEY: $21$** | *Reversed:* One row of Pascal’s triangle has exactly $17$ entries. Which row is it? (The single $1$ at the top is row $0$.) **KEY: Row $16$** |
| 4 | What is the sum of all the entries in row $14$ of Pascal’s triangle? (The single $1$ at the top is row $0$.) **KEY: $16384$** | What is the sum of every entry in row $8$ and row $9$ of Pascal’s triangle, the two rows combined? (The single $1$ at the top is row $0$.) **KEY: $768$** | *Reversed:* The entries of one row of Pascal’s triangle add up to $65536$. How many entries does that row have? **KEY: $17$** |
| 5 | What is the middle entry of row $14$ of Pascal’s triangle? (The single $1$ at the top is row $0$; row $14$ has one middle entry.) **KEY: $3432$** | Row $9$ of Pascal’s triangle has two equal largest entries. What is their sum? (The single $1$ at the top is row $0$.) **KEY: $252$** | *Reversed:* One row of Pascal’s triangle has a single largest entry, and that entry is $924$. Which row is it? (The single $1$ at the top is row $0$.) **KEY: Row $12$** |
| 6 | What is the sum of the entries of row $12$ of Pascal’s triangle, leaving out the $1$ at each end of the row? (The single $1$ at the top is row $0$.) **KEY: $4094$** | What is the sum of the entries of row $11$ of Pascal’s triangle, leaving out its two equal largest entries? (The single $1$ at the top is row $0$.) **KEY: $1124$** | *Reversed:* One row of Pascal’s triangle has entries that add up to $8190$ once the $1$ at each end is left out. Which row is it? (The single $1$ at the top is row $0$.) **KEY: Row $13$** |
| 7 | In one row of Pascal’s triangle, the entry in position $1$ is $17$. What is the entry in position $2$ of that same row? (Positions are numbered from $0$.) **KEY: $136$** | In one row of Pascal’s triangle, the entry in position $1$ is $20$. What is the sum of the entries in positions $1$ and $2$ of that row? (Positions are numbered from $0$.) **KEY: $210$** | *Reversed:* In one row of Pascal’s triangle, the entry in position $2$ is $190$. What is the entry in position $1$ of that same row? (Positions are numbered from $0$.) **KEY: $20$** |
| 8 | Two entries sitting side by side in the same row of Pascal’s triangle are $286$ and $715$. Exactly one entry in the row above is diagonally above both of them. What is that entry? **KEY: $220$** | Two entries sitting side by side in the same row of Pascal’s triangle are $45$ and $120$. Exactly one entry in the row below is diagonally below both of them. What is that entry? **KEY: $165$** | *Reversed:* An entry of Pascal’s triangle is $84$, and the two entries directly below it in the next row are $120$ (down-left) and $210$ (down-right). What is the sum of the two entries sitting on either side of $84$ in its own row? **KEY: $162$** |
| 9 | What is the sum of every entry in rows $0$ through $10$ of Pascal’s triangle, all eleven rows combined? **KEY: $2047$** | What is the sum of every entry in rows $5$ through $8$ of Pascal’s triangle, those four rows combined? **KEY: $480$** | *Reversed:* For a positive integer $n$, every entry in rows $0$ through $n$ of Pascal’s triangle adds up to $32767$. What is $n$? **KEY: $14$** |
| 10 | How many entries of row $11$ of Pascal’s triangle are odd? (The single $1$ at the top is row $0$.) **KEY: $8$** | How many entries of row $9$ of Pascal’s triangle are even? (The single $1$ at the top is row $0$.) **KEY: $6$** | *Derived:* How many entries in rows $0$ through $7$ of Pascal’s triangle, all eight rows combined, are even? **KEY: $9$** |

## §12.3 Those Numbers Look Familiar! — ch12-s2.js
base indices: 0 1 3 2 1 0 3 1 3 0
v1 indices:   1 2 0 3 2 1 0 2 0 1
v2 indices:   3 0 2 1 0 3 2 0 2 3
v3 indices:   2 3 1 0 3 2 1 3 1 2

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | Which combination is the entry in row $12$, position $5$ of Pascal’s triangle? (Rows and positions are numbered from $0$.) **KEY: $\binom{12}{5}$** | The entry in row $9$, position $2$ of Pascal’s triangle is $36$. Because every row of the triangle is a palindrome, exactly one other combination with top number $9$ also equals $36$. Which one is it? (Rows and positions are numbered from $0$.) **KEY: $\binom{9}{7}$** | *Reversed:* A student looking up $\binom{16}{4}$ in Pascal’s triangle counts lines from the top starting at $1$, and counts the numbers inside a line starting at $1$. Which line, and which number in that line, holds the value the student wants? **KEY: Line $17$, number $5$** |
| 2 | Row $9$ of Pascal’s triangle is $1, 9, 36, 84, 126, 126, 84, 36, 9, 1$. Without computing any factorials, use the row to find $\binom{9}{6} - \binom{9}{8}$. (Positions are numbered from $0$.) **KEY: $75$** | Row $10$ of Pascal’s triangle is $1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1$. Without computing any factorials, use the row to find $\binom{10}{6} - \binom{10}{2} - \binom{10}{1}$. (Positions are numbered from $0$.) **KEY: $155$** | *Reversed:* Row $12$ of Pascal’s triangle is $1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1$. One entry of this row is exactly $429$ less than the entry in position $6$. What is that smaller entry? (Positions are numbered from $0$.) **KEY: $495$** |
| 3 | The entry in row $13$, position $9$ of Pascal’s triangle is $715$. Which of the following also equals $715$? (Rows and positions are numbered from $0$.) **KEY: $\binom{13}{4}$** | For which value of $k$ other than $3$, with $0 \le k \le 14$, is $\binom{14}{k} = \binom{14}{3}$? **KEY: $11$** | *Reversed:* For a positive integer $n$ greater than $15$, $\binom{n}{4} = \binom{n}{15}$. What is $n$? **KEY: $19$** |
| 4 | A walk starts at the $1$ at the top of Pascal’s triangle and takes $7$ steps, each going down-left or down-right. How many different walks end at position $3$ of row $7$? (Rows and positions are numbered from $0$.) **KEY: $35$** | A walk starts at the $1$ at the top of Pascal’s triangle and takes $6$ steps, each going down-left or down-right. How many different walks end at position $2$ or at position $4$ of row $6$? (Rows and positions are numbered from $0$.) **KEY: $30$** | *Reversed:* A walk starts at the $1$ at the top of Pascal’s triangle and takes $9$ steps, each going down-left or down-right. Exactly $126$ walks end at one particular entry of row $9$. Which positions of row $9$ could that entry occupy? (Rows and positions are numbered from $0$.) **KEY: Positions $4$ and $5$** |
| 5 | Row $10$ of Pascal’s triangle is $1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1$. A baker chooses $k$ different fillings out of $10$ kinds for a pastry box and finds there are exactly $120$ possible choices. What can $k$ be? (Positions are numbered from $0$.) **KEY: $3$ or $7$** | Row $12$ of Pascal’s triangle is $1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1$. A gardener chooses $k$ of $12$ different seed packets and finds there are exactly $220$ possible choices. What is the sum of the two possible values of $k$? **KEY: $12$** | *Reversed:* For a positive integer $n$, choosing $k$ of $n$ different tiles can be done in exactly $3060$ ways, and among all $k$ with $0 \le k \le n$ this happens only for $k = 4$ and $k = 14$. What is $n$? **KEY: $18$** |
| 6 | The number of ways to choose $4$ of $12$ different stamps is an entry of Pascal’s triangle. Which position of row $12$ holds it, and what is its value? (Rows and positions are numbered from $0$.) **KEY: Position $4$, value $495$** | Every row of Pascal’s triangle is a palindrome, so the value $\binom{13}{10}$ can be read off row $13$ in two different positions. Which two positions are they? (Rows and positions are numbered from $0$.) **KEY: Positions $3$ and $10$** | *Reversed:* One entry of Pascal’s triangle has value $364$ and sits in position $3$ of its row. Which row is it in, and what is the entry immediately to its left in that row? (Rows and positions are numbered from $0$.) **KEY: Row $14$, entry $91$** |
| 7 | Row $12$ of Pascal’s triangle is $1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1$. What is $\binom{12}{3} + \binom{12}{9}$? **KEY: $440$** | Row $10$ of Pascal’s triangle is $1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1$. What is $\binom{10}{2} + \binom{10}{8} + \binom{10}{5}$? **KEY: $342$** | *Reversed:* Row $13$ of Pascal’s triangle is $1, 13, 78, 286, 715, 1287, 1716, 1716, 1287, 715, 286, 78, 13, 1$. For one value of $k$ with $k > 6$, $\binom{13}{3} + \binom{13}{k} = 572$. What is $k$? **KEY: $10$** |
| 8 | An entry of Pascal’s triangle equals $2380$ and sits in position $4$ of its row. Which row is it in? (Rows and positions are numbered from $0$.) **KEY: Row $17$** | For a positive integer $n$, the entry in position $3$ of row $n$ of Pascal’s triangle is $816$. How many entries does row $n$ have? (Rows and positions are numbered from $0$.) **KEY: $19$** | *Reversed:* What is the entry in position $5$ of row $14$ of Pascal’s triangle? (Rows and positions are numbered from $0$.) **KEY: $2002$** |
| 9 | A walk starts at the $1$ at the top of Pascal’s triangle and takes $7$ steps, each going down-left or down-right, ending somewhere in row $7 = 1, 7, 21, 35, 35, 21, 7, 1$. How many of the possible walks end at an entry whose value is at least $21$? **KEY: $112$** | A walk starts at the $1$ at the top of Pascal’s triangle and takes $8$ steps, each going down-left or down-right, ending somewhere in row $8 = 1, 8, 28, 56, 70, 56, 28, 8, 1$. How many of the possible walks end at an entry whose value is at most $28$? **KEY: $74$** | *Reversed:* A walk starts at the $1$ at the top of Pascal’s triangle and takes $n$ steps, each going down-left or down-right, for a positive integer $n$. In all, $4096$ different walks are possible. How many of them end at the single middle entry of row $n$? **KEY: $924$** |
| 10 | In one row of Pascal’s triangle, the entries in positions $6$ and $7$ are both $1716$. What is the entry in position $6$ of the row two rows farther down? (Rows and positions are numbered from $0$.) **KEY: $5005$** | One row of Pascal’s triangle has a single largest entry, and that entry is $252$. What is the largest entry of the row three rows farther down? (Rows are numbered from $0$.) **KEY: $1716$** | *Reversed:* The entry in position $5$ of one row of Pascal’s triangle is $6188$, and the row two rows above it has two equal middle entries. What is each of those two equal entries? (Rows and positions are numbered from $0$.) **KEY: $6435$** |

## §12.4 An Interesting Combinatorial Identity — ch12-s3.js
base indices: 2 0 1 3 0 1 2 3 0 1
v1 indices:   3 1 2 0 1 2 3 0 1 2
v2 indices:   1 3 0 2 3 0 1 2 3 0
v3 indices:   0 2 3 1 2 3 0 1 2 3

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | What is $\binom{20}{1} + \binom{20}{2}$? **KEY: $210$** | A $5$-person committee is chosen from $12$ people, one of whom is Rosa. There are $330$ possible committees that include Rosa and $462$ that leave her out. How many committees are possible in all? **KEY: $792$** | *Derived:* Pascal’s identity gives $\binom{20}{1} + \binom{20}{2} = \binom{21}{2} = 210$, and the value $210$ turns up again in row $10$, at $\binom{10}{6}$. Using that value, what is $\binom{10}{6} + \binom{10}{7}$? **KEY: $330$** |
| 2 | Which sum equals $\binom{15}{6}$? **KEY: $\binom{14}{5} + \binom{14}{6}$** | A $6$-person committee is chosen from $14$ people, one of whom is Theo. Which expression counts exactly the possible committees that leave Theo out? **KEY: $\binom{13}{6}$** | *Reversed:* The two entries of Pascal’s triangle sitting diagonally above one particular entry are $\binom{16}{6}$ and $\binom{16}{7}$. Which combination is that entry? **KEY: $\binom{17}{7}$** |
| 3 | Which single combination equals $\binom{31}{14} + \binom{31}{15}$? **KEY: $\binom{32}{15}$** | Which single combination equals $\binom{18}{7} - \binom{17}{7}$? **KEY: $\binom{17}{6}$** | *Reversed:* For an integer $k$ with $11 \le k \le 20$, $\binom{20}{k-1} + \binom{20}{k} = \binom{21}{11}$. What is $k$? **KEY: $11$** |
| 4 | An entry of Pascal’s triangle is $1287$, and it sits in the left half of a row that has $14$ entries in all. What are the two entries on either side of it in that row? **KEY: $715$ and $1716$** | An entry of Pascal’s triangle is $210$, and the two entries on either side of it in its own row are $120$ (left) and $252$ (right). What are the two entries directly below $210$ in the next row? **KEY: $330$ and $462$** | *Reversed:* An entry of Pascal’s triangle has $78$ immediately to its left in its own row, and the entry directly below and to the left of it, in the next row, is $364$. What is the entry? **KEY: $286$** |
| 5 | A $4$-person committee is chosen from $12$ people, one of whom is Nadia. There are $165$ possible committees that include Nadia. How many possible committees do not include her? **KEY: $330$** | A $3$-person committee is chosen from $n$ students, one of whom is Owen, for a positive integer $n$. There are $105$ possible committees that include Owen and $455$ that leave him out. What is $n$? **KEY: $16$** | *Reversed:* A $4$-person committee is chosen from $11$ people, one of whom is Ines, and $330$ committees are possible in all. How many of them include Ines? **KEY: $120$** |
| 6 | For some positive integer $n$, $\binom{n-1}{2} = 45$ and $\binom{n-1}{3} = 120$. What is $n$? **KEY: $11$** | For some positive integer $n$, $\binom{n-1}{4} = 495$ and $\binom{n-1}{5} = 792$. What is $\binom{n}{5}$? **KEY: $1287$** | *Reversed:* For some positive integer $n$, $\binom{n}{4} = 1820$ and $\binom{n-1}{3} = 455$. What is $\binom{n-1}{4}$? **KEY: $1365$** |
| 7 | Which single combination equals $\binom{11}{5} - \binom{10}{5} - \binom{9}{4}$? **KEY: $\binom{9}{3}$** | Which single combination equals $\binom{10}{2} + \binom{10}{3} + \binom{11}{4}$? **KEY: $\binom{12}{4}$** | *Reversed:* For an integer $k$ with $0 \le k \le 5$, $\binom{13}{6} - \binom{12}{6} - \binom{11}{5} = \binom{11}{k}$. What is $k$? **KEY: $4$** |
| 8 | From a class of $n$ students, $4$-person committees are formed, where $n$ is a positive integer. Exactly $286$ of the possible committees include Dario. How many of the possible committees include neither Dario nor Elsa? **KEY: $495$** | From a club of $n$ members, $3$-person committees are formed, where $n$ is a positive integer. Exactly $455$ of the possible committees include neither Hana nor Iris. What is $n$? **KEY: $17$** | *Reversed:* From a class of $n$ students, $4$-person committees are formed, where $n$ is a positive integer. Exactly $455$ of them include Bruno and exactly $1365$ of them leave him out. How many committees are possible in all? **KEY: $1820$** |
| 9 | What is $\binom{8}{3} + \binom{8}{4} + \binom{9}{5}$? **KEY: $252$** | What is $\binom{12}{4} + \binom{12}{5} + \binom{13}{6} + \binom{14}{7}$? **KEY: $6435$** | *Reversed:* For an integer $m$ with $0 \le m \le 6$, $\binom{10}{3} + \binom{10}{4} + \binom{11}{5} + \binom{12}{6} = \binom{13}{m}$. What is $m$? **KEY: $6$** |
| 10 | For some positive integer $n$, $\binom{n}{5} - \binom{n-1}{5} = 495$. What is $\binom{n}{2}$? **KEY: $78$** | For some positive integer $n$, $\binom{n}{3} - \binom{n-1}{3} = 136$. What is $n$? **KEY: $18$** | *Reversed:* For some positive integer $n$, $\binom{n}{2} = 105$. What is $\binom{n}{4} - \binom{n-1}{4}$? **KEY: $364$** |

## §12.5 Another Interesting Combinatorial Identity — ch12-s4.js
base indices: 3 2 0 1 3 0 2 1 3 2
v1 indices:   0 3 1 2 0 1 3 2 0 3
v2 indices:   2 1 3 0 2 3 1 0 2 1
v3 indices:   1 0 2 3 1 2 0 3 1 0

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | What is $\left(\binom{5}{0} + \binom{5}{1} + \cdots + \binom{5}{5}\right) + \left(\binom{9}{0} + \binom{9}{1} + \cdots + \binom{9}{9}\right)$? **KEY: $544$** | Set $A$ has $6$ elements and set $B$ has $9$ elements. Counting the empty set and the whole set each time, how many subsets does $A$ have and how many does $B$ have, added together? **KEY: $576$** | *Reversed:* For a positive integer $n$, the entries of row $n$ of Pascal’s triangle together with the entries of row $n+1$ add up to $384$ in all. What is $n$? (The single $1$ at the top is row $0$.) **KEY: $7$** |
| 2 | How many subsets does a set of $11$ elements have, counting the empty set and the set itself? **KEY: $2048$** | How many subsets does a set of $7$ elements have that are neither the empty set nor the whole set? **KEY: $126$** | *Derived:* A set has exactly $32768$ subsets, counting the empty set and the set itself. How many of its subsets have an odd number of elements? **KEY: $16384$** |
| 3 | What is $\binom{12}{1} + \binom{12}{2} + \binom{12}{3} + \cdots + \binom{12}{12}$? Note that the sum starts at $\binom{12}{1}$. **KEY: $4095$** | What is $\binom{9}{2} + \binom{9}{3} + \binom{9}{4} + \binom{9}{5} + \binom{9}{6} + \binom{9}{7}$? Note that the sum starts at $\binom{9}{2}$ and stops at $\binom{9}{7}$. **KEY: $492$** | *Reversed:* For a positive integer $n$, $\binom{n}{1} + \binom{n}{2} + \cdots + \binom{n}{n} = 255$. Note that the sum starts at $\binom{n}{1}$. What is $n$? **KEY: $8$** |
| 4 | A juice bar offers $8$ different add-ins. A drink must have at least $2$ add-ins and may have as many as all $8$. How many different sets of add-ins are possible? **KEY: $247$** | A study group of $8$ friends sends a subgroup to present. The subgroup may have any size from $0$ to $5$ members, the empty subgroup included. How many different subgroups are possible? **KEY: $219$** | *Derived:* A juice bar offers $n$ different add-ins, for a positive integer $n$, and a drink must have at least $2$ of them. Exactly $502$ different sets of add-ins are possible. How many sets of add-ins use at least $3$ of them? **KEY: $466$** |
| 5 | What is $\binom{14}{0} + \binom{14}{1} + \binom{14}{2} + \binom{14}{3} + \binom{14}{4} + \binom{14}{5} + \binom{14}{6}$? Note that the sum stops at $\binom{14}{6}$. **KEY: $6476$** | What is $\binom{10}{4} + \binom{10}{5} + \binom{10}{6} + \cdots + \binom{10}{10}$? Note that the sum starts at $\binom{10}{4}$. **KEY: $848$** | *Reversed:* Row $n$ of Pascal’s triangle has a single middle entry, for a positive integer $n$, and the entries lying before that middle entry add up to $386$. What is the middle entry? **KEY: $252$** |
| 6 | What is $\binom{12}{0} - \binom{12}{1} + \binom{12}{2} - \cdots + \binom{12}{12}$, with the signs alternating, if the middle term $\binom{12}{6}$ is left out of the sum altogether? **KEY: $-924$** | How many subsets of $\{1, 2, 3, \ldots, 11\}$ have an odd number of elements? **KEY: $1024$** | *Reversed:* For a positive integer $n$, an $n$-element set has exactly $2048$ subsets whose size is even (the empty set counts as having size $0$, which is even). How many subsets does the set have in all? **KEY: $4096$** |
| 7 | How many subsets of $\{1, 2, 3, \ldots, 10\}$ have an odd number of elements and contain the number $10$? **KEY: $256$** | A committee of any size, including the empty committee, is chosen from $7$ people, and the number of members on it must be even. How many committees are possible? **KEY: $64$** | *Derived:* How many subsets of $\{1, 2, 3, \ldots, 10\}$ have an even number of elements and contain at least one odd number? The empty set counts as having $0$ elements, which is even. **KEY: $496$** |
| 8 | How many subsets of $\{1, 2, 3, \ldots, 11\}$ contain the number $1$ but do not contain the number $2$? **KEY: $512$** | A committee of any size, including the empty committee, is chosen from a club of $11$ members, two of whom are the president and the treasurer. The committee must include at least one of those two. How many committees are possible? **KEY: $1536$** | *Derived:* How many subsets of $\{1, 2, 3, \ldots, 11\}$ contain the number $11$ and no other odd number? **KEY: $32$** |
| 9 | A club with $n$ members can form exactly $4083$ different committees that have at least $2$ members, for a positive integer $n$. What is $n$? **KEY: $12$** | A club with $n$ members can form exactly $562$ different committees that have at most $2$ members, counting the empty committee, for a positive integer $n$. What is $n$? **KEY: $33$** | *Reversed:* A club has $11$ members. How many of the possible committees, taken over every size, have at least $2$ members? **KEY: $2036$** |
| 10 | A club has $11$ members. A committee is any group of members, of any size, in which the members on the committee outnumber the members left off it. How many such committees are possible? **KEY: $1024$** | A club has $12$ members. A committee is any group of members, of any size. In how many of the possible committees are the members on the committee exactly as many as the members left off it? **KEY: $924$** | *Derived:* A club has $10$ members. A committee is any group of members, of any size, including the empty one. In how many of the possible committees do the members on the committee at least equal in number the members left off it? **KEY: $638$** |

## Challenge — ch12-cw.js
base indices: 1 3 0 2 1 0 3 2 1 0 2 3
v1 indices:   2 0 1 3 2 1 0 3 2 1 3 0
v2 indices:   0 2 3 1 0 3 2 1 0 3 1 2
v3 indices:   3 1 2 0 3 2 1 0 3 2 0 1

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | One row of Pascal’s triangle has exactly $16$ entries. What is the sum of those entries? (The single $1$ at the top is row $0$.) **KEY: $32768$** | One row of Pascal’s triangle has exactly $11$ entries. What is the sum of the entries of the row immediately below it? (The single $1$ at the top is row $0$.) **KEY: $2048$** | *Reversed:* The entries of one row of Pascal’s triangle add up to $8388608$. How many entries does that row have? **KEY: $24$** |
| 2 | What is $\binom{10}{5} + \binom{10}{6}$? **KEY: $462$** | Two entries sitting side by side in row $16$ of Pascal’s triangle are $\binom{16}{7}$ and $\binom{16}{8}$. What is the value of the entry directly below and between them? **KEY: $24310$** | *Reversed:* For a positive integer $n$, $\binom{n}{2} + \binom{n}{3} = 969$. What is $\binom{n}{2}$? **KEY: $153$** |
| 3 | Which is larger, the entry in row $12$, position $4$ of Pascal’s triangle or the entry in row $11$, position $5$, and by how much? (Rows and positions are numbered from $0$.) **KEY: Row $12$’s entry, by $33$** | Which is larger, $\binom{14}{5}$ or $\binom{13}{6}$, and by how much? **KEY: $\binom{14}{5}$, by $286$** | *Derived:* The entry in row $10$, position $3$ of Pascal’s triangle and the entry in row $9$, position $4$ differ by $6$. What is the sum of those two entries? (Rows and positions are numbered from $0$.) **KEY: $246$** |
| 4 | A set has $7$ elements. How many of its subsets have fewer than $5$ elements? (The empty set is a subset.) **KEY: $99$** | A set has $9$ elements. How many of its subsets have more than $6$ elements? (The whole set is a subset of itself.) **KEY: $46$** | *Derived:* A set has $8$ elements. How many of its subsets have at least $2$ elements but fewer than $5$? **KEY: $154$** |
| 5 | What is $\binom{14}{1} + \binom{14}{3} + \binom{14}{5} + \binom{14}{7} + \binom{14}{9} + \binom{14}{11} + \binom{14}{13}$? **KEY: $8192$** | What is the sum of the entries of row $15$ of Pascal’s triangle that sit in even-numbered positions? (Rows and positions are numbered from $0$, so position $0$ counts as even.) **KEY: $16384$** | *Reversed:* For a positive integer $n$, the entries of row $n$ of Pascal’s triangle that sit in odd-numbered positions add up to $32768$. What is the single middle entry of row $n$? (Rows and positions are numbered from $0$.) **KEY: $12870$** |
| 6 | In one row of Pascal’s triangle, the entries in positions $3$ and $4$ are $560$ and $1820$. What is the entry in position $5$ of the next row down? (Rows and positions are numbered from $0$.) **KEY: $6188$** | In one row of Pascal’s triangle, the entries in positions $2$ and $3$ are $105$ and $455$. What is the entry in position $3$ of the row immediately above? (Rows and positions are numbered from $0$.) **KEY: $364$** | *Reversed:* In one row of Pascal’s triangle the entry in position $2$ is $153$, and in the next row down the entry in position $4$ is $3876$. What is the entry in position $3$ of the first of those two rows? (Rows and positions are numbered from $0$.) **KEY: $816$** |
| 7 | How many odd entries are there in rows $0$ through $8$ of Pascal’s triangle, all nine rows combined? **KEY: $29$** | How many even entries are there in rows $0$ through $9$ of Pascal’s triangle, all ten rows combined? **KEY: $22$** | *Derived:* How many odd entries are there in rows $0$ through $15$ of Pascal’s triangle, all sixteen rows combined? **KEY: $81$** |
| 8 | A school council can include any of its $7$ teachers and any of its $5$ students, in any numbers, as long as at least one student is on it. How many different councils are possible? **KEY: $3968$** | A review panel can include any of $6$ writers and any of $5$ editors, in any numbers, as long as at least one writer and at least one editor are on it. How many different panels are possible? **KEY: $1953$** | *Derived:* A school council can include any of its $6$ teachers and any of its $4$ students, in any numbers, as long as at least one teacher and at least one student are on it. How many different councils are possible? **KEY: $945$** |
| 9 | The number $120$ appears in position $2$ of one row of Pascal’s triangle and in position $3$ of a different row. What is the sum of those two row numbers? (Rows and positions are numbered from $0$.) **KEY: $26$** | The number $1540$ appears in position $2$ of one row of Pascal’s triangle and in position $3$ of a different row. By how much do those two row numbers differ? (Rows and positions are numbered from $0$.) **KEY: $34$** | *Reversed:* The number $3003$ sits in position $5$ of row $15$ of Pascal’s triangle and in position $6$ of row $14$. In which other position of each of those two rows does $3003$ appear? (Rows and positions are numbered from $0$.) **KEY: Position $10$ of row $15$ and position $8$ of row $14$** |
| 10 | How many subsets of $\{1, 2, 3, \ldots, 8\}$ have an odd number of elements and contain exactly one of the numbers $1$ and $2$? **KEY: $64$** | How many subsets of $\{1, 2, 3, \ldots, 10\}$ have an even number of elements and contain exactly one of the numbers $1$, $2$ and $3$? The empty set counts as having $0$ elements, which is even. **KEY: $192$** | *Derived:* How many subsets of $\{1, 2, 3, \ldots, 10\}$ have an even number of elements and contain neither $1$ nor $2$? The empty set counts as having $0$ elements, which is even. **KEY: $128$** |
| 11 | A club with $n$ members can form exactly $32647$ different committees that have at least $3$ members, for a positive integer $n$. What is $n$? **KEY: $15$** | A club with $n$ members can form exactly $7814$ different committees that have at least $4$ members, for a positive integer $n$. What is $n$? **KEY: $13$** | *Reversed:* A club has $11$ members. How many of the possible committees, taken over every size, have at least $3$ members? **KEY: $1981$** |
| 12 | How many subsets of $\{1, 2, 3, \ldots, 12\}$ have an even number of elements and contain at least one of the numbers $1$ and $2$? The empty set counts as having $0$ elements, which is even. **KEY: $1536$** | How many subsets of $\{1, 2, 3, \ldots, 10\}$ have an odd number of elements and contain at least one of the numbers $1$, $2$ and $3$? **KEY: $448$** | *Derived:* How many subsets of $\{1, 2, 3, \ldots, 10\}$ have an even number of elements and contain at least one of the numbers $1$, $2$, $3$ and $4$? The empty set counts as having $0$ elements, which is even. **KEY: $480$** |

## Worksheet — ch12-ws.js (free response; keys are LaTeX strings, no indices)

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | In one row of Pascal’s triangle, the entry in position $1$ is $18$. What is the entry in position $3$ of that row? (Rows and positions are numbered from $0$.) **KEY: $816$** | In one row of Pascal’s triangle, the entry in position $1$ is $16$. What is the sum of the entries in positions $2$ and $3$ of that row? (Rows and positions are numbered from $0$.) **KEY: $680$** | *Reversed:* In one row of Pascal’s triangle, the entry in position $3$ is $969$. What is the entry in position $2$ of that row? (Rows and positions are numbered from $0$.) **KEY: $171$** |
| 2 | The entry in row $14$, position $4$ of Pascal’s triangle is $1001$, and the entry in row $14$, position $3$ is $364$. What is the entry in row $15$, position $4$? (Rows and positions are numbered from $0$.) **KEY: $1365$** | The entry in row $16$, position $5$ of Pascal’s triangle is $4368$, and the entry in row $15$, position $4$ is $1365$. What is the entry in row $15$, position $5$? (Rows and positions are numbered from $0$.) **KEY: $3003$** | *Reversed:* The entry in row $13$, position $5$ of Pascal’s triangle is $1287$ and the entry in row $14$, position $5$ is $2002$. What is the entry in row $13$, position $4$? (Rows and positions are numbered from $0$.) **KEY: $715$** |
| 3 | What is the sum of all the entries in row $17$ of Pascal’s triangle? (The single $1$ at the top is row $0$.) **KEY: $131072$** | What is the sum of every entry in rows $10$, $11$ and $12$ of Pascal’s triangle, those three rows combined? (The single $1$ at the top is row $0$.) **KEY: $7168$** | *Reversed:* The entries of one row of Pascal’s triangle add up to $262144$. Which row is it, and how many entries does it have? (The single $1$ at the top is row $0$.) **KEY: Row $18$, $19$ entries** |
| 4 | Express $\binom{9}{4} + \binom{9}{5}$ as a single combination, and give its value. **KEY: $\binom{10}{5} = 252$** | Express $\binom{14}{6} - \binom{13}{6}$ as a single combination, and give its value. **KEY: $\binom{13}{5} = 1287$** | *Reversed:* For a positive integer $n$, $\binom{n}{5} + \binom{n}{6} = 3003$. Find $n$ and the value of $\binom{n}{6}$. **KEY: $n = 13$, $\binom{13}{6} = 1716$** |
| 5 | Express $\binom{15}{4} + 2\binom{15}{5} + \binom{15}{6}$ as a single combination. **KEY: $\binom{17}{6}$** | Express $\binom{12}{3} + 3\binom{12}{4} + 3\binom{12}{5} + \binom{12}{6}$ as a single combination. **KEY: $\binom{15}{6}$** | *Reversed:* For an integer $k$ with $0 \le k \le 7$, $\binom{18}{k} + 2\binom{18}{k+1} + \binom{18}{k+2} = \binom{20}{9}$. What is the value of $\binom{18}{k}$? **KEY: $31824$** |
| 6 | A set has $10$ elements. How many of its subsets have at least $4$ elements? **KEY: $848$** | A set has $11$ elements. How many of its subsets have at most $2$ elements? (The empty set is a subset.) **KEY: $67$** | *Derived:* A set has $10$ elements. How many of its subsets have at least $4$ elements and at most $7$ elements? **KEY: $792$** |
| 7 | The number $10$ appears in exactly two rows of Pascal’s triangle. Name both rows and the positions within each row that hold $10$. (Rows and positions are numbered from $0$.) **KEY: Row $5$ (positions $2$ and $3$) and row $10$ (positions $1$ and $9$)** | In how many positions of Pascal’s triangle, counted over every row, does the number $15$ appear? Name each row and position. (Rows and positions are numbered from $0$.) **KEY: Four positions: row $6$ (positions $2$ and $4$) and row $15$ (positions $1$ and $14$)** | *Derived:* The number $120$ appears in position $1$ of one row of Pascal’s triangle, in position $2$ of a second row and in position $3$ of a third. Name all three rows and, for each, every position of that row holding $120$. (Rows and positions are numbered from $0$.) **KEY: Row $10$ (positions $3$ and $7$), row $16$ (positions $2$ and $14$), row $120$ (positions $1$ and $119$)** |
| 8 | Compute $\binom{16}{9} + \binom{16}{10} + \binom{16}{11} + \cdots + \binom{16}{16}$. Note that the sum starts at $\binom{16}{9}$, one step past the middle. **KEY: $26333$** | Compute $\binom{13}{7} + \binom{13}{8} + \binom{13}{9} + \cdots + \binom{13}{13}$. Note that the sum starts at $\binom{13}{7}$. **KEY: $4096$** | *Derived:* Compute $\binom{12}{6} + \binom{12}{7} + \binom{12}{8} + \cdots + \binom{12}{12}$. Note that the sum starts at the middle entry $\binom{12}{6}$ and includes it. **KEY: $2510$** |
| 9 | A committee of any size, including the empty committee, is chosen from $10$ people. Cleo and Dev refuse to serve together, though either may serve without the other. How many committees are possible? **KEY: $768$** | A committee of any size, including the empty committee, is chosen from $10$ people. Gus and Hana insist on the same decision: either both serve or neither does. How many committees are possible? **KEY: $512$** | *Derived:* A committee of any size, including the empty committee, is chosen from $9$ people. No two of Iris, Jonas and Kira may serve together, though any one of them may serve alone among the three. How many committees are possible? **KEY: $256$** |
| 10 | A group has $7$ boys and $4$ girls. A team may have any number of members, but it must include at least one boy and at least one girl. How many different teams are possible? **KEY: $1905$** | A group has $5$ singers, $4$ drummers and $3$ pianists. A band may include any number of each, but it must have at least one singer and at least one pianist; a band with no drummer is allowed. How many different bands are possible? **KEY: $3472$** | *Derived:* A group has $5$ boys and $5$ girls. A team may have any number of members, but it must include at least two boys and at least two girls. How many different teams are possible? **KEY: $676$** |

## Verification record

All 186 keys were brute-force verified in node before being written here: Pascal’s triangle
was built to row 140 by the additive rule alone (BigInt, no factorials), every subset,
committee, team and council count was obtained by enumerating all $2^n$ bitmasks and
testing the stated predicate directly, and every displayed sum was accumulated term by term
rather than being replaced by a closed form. Four stems were tightened after the check
exposed a second solution created by row symmetry (§12.4 slots 3, 7 and 9, and worksheet
slot 5); each now carries an explicit range for the unknown index. v1, v2 and v3 each hold
62 distinct keys as normalized strings (0 repeated), and no slot repeats a key across
base | v1 | v2 | v3 with the base keys included in the comparison.
