# Pins — intro-counting ch14 (The Binomial Theorem)

Read `notes/variation-spec.md` first. Every KEY below was verified in node by exact BigInt
Laurent-polynomial expansion (negative exponents included) or exact BigInt sums; decimals
were computed as integer powers (e.g. $98^4 = 92236816$) and scaled. Do not retarget a pin;
if your own computation disagrees, STOP and report. Answer indices are derived from the
base: v1 = (b+1)%4, v2 = (b+3)%4, v3 = (b+2)%4. Worksheet items are free response (no
indices); their keys are LaTeX strings, e.g. `'$-35$'` or `'$\frac{3125}{32}$'`.

Conventions to state in every stem: "the coefficient of $x^k$" always means after full
expansion and combining of like terms; "the constant term" is the term with exponent $0$;
where a sum stops early, say so explicitly ("Note that the sum stops at …"); unknowns
($n$, $c$, $p$, $q$) are stated positive when the key needs it; decimal answers are exact
values, never rounded.

## Already taken — do not reuse any of these expansions, targets, or identities

Base problems + learn examples in `ch14.js` (settled version, incl. the new challenge #10):
- §14.2: $(x+3)^2$; $(2x-1)^3$; $a^2b^2$ in $(a+b)^4$ (6); $(x+y)^2-(x-y)^2$ ($4xy$); products of $(a+b)^3$ before combining (8); $(2x+1)^2$; $(x-2)^3$; $a^2b^3$ among the 32 products of $(a+b)^5$ (10); $x^2$ in $(x+3)^3$ (9); $(3x-2y)^2$; $x^4$ in $(x^2+x)^3$ (3); $x^5$ in $(x^2+2x+1)^3$ (6); $x^4$ in $(x+1)^3(x-1)^3$ ($-3$).
- §14.3: $a^3b^2$ in $(a+b)^5$ (10); $x^2$ in $(x+4)^5$ (640); $x^3$ term of $(2x-3)^4$ ($-96x^3$); term test $15a^4b^2$ in $(a+b)^6$; coefficient 32 in $(x+2)^4$ ($x$); $y^5$ in $(y-1)^7$ (21); $x^2$ in $(3x+1)^4$ (54); $x^4$ in $(2x-1)^6$ (240); $x^3y^7$ in $(x+y)^{10}$ (120); $a^3b^3$ in $(a-2b)^6$ ($-160$); $x^6$ in $(x^2+3)^5$ (90); $x^2$ in $(x+\frac{1}{x})^6$ (15); $x^5$ in $(1+2x)^7-(1-2x)^7$ (1344).
- §14.4: $x^3$ in $(x+2)^6$ (160); $9^4 = 6561$; constant of $(x^2+\frac{2}{x})^6$ (240); $x^{98}$ in $(x+1)^{100}$ (4950); $101^3 = 1030301$; constant of $(x+\frac{2}{x})^5$ (0); $1.02^4 = 1.08243216$; $x^5$ in $(2-x)^7$ ($-84$); constant of $(x^3-\frac{1}{x})^8$ (28); $11^4-9^4 = 8080$; $x^3$ in $(1+x)^4(1+x)^5$ (84); $x^2$ in $(1+x)^3(1-x)^4$ ($-3$); constant of $(2x-\frac{1}{x^2})^9$ ($-5376$).
- §14.5: row 7 sum (128); even-index row 6 (32); $\sum\binom{5}{k}2^k$ (243); row 8 stop at $\binom{8}{7}$ (255); alternating row 7 stop at $\binom{7}{6}$ (1); $\binom{10}{2}+\binom{10}{4}+\binom{10}{6}+\binom{10}{8}$ (510); $\sum\binom{4}{k}3^{4-k}2^k$ (625); coefficient sum of $(2x-y)^6$ (1); $\sum\binom{5}{k}(-2)^k$ ($-1$); $\sum\binom{7}{k}3^{7-k}$ (16384); $4^n=1024$ ($n=5$); even-$k$ of $\sum\binom{6}{k}2^k$ (365); $\sum\binom{7}{k}\binom{7}{3-k}$ (364).
- Challenge: $x^2y^2$ in $(x+y)^4+(x+y)^5$ (6); $x$ in $(x-3)^3$ (27); $\sum\binom{6}{k}2^{6-k}(-1)^k$ (1); $0.99^3 = 0.970299$; $x^4$ in $(2x+3)^5$ (240); constant of $(x-\frac{1}{x})^8$ (70); $x^6$ in $(1+x^2)^5(1-x^3)^2$ (11); $(-2)^n=64$ ($n=6$); $\binom{n}{3}=4\binom{n}{2}$ ($n=14$); constant of $(x+\frac{1}{x})^6(x-\frac{1}{x})^4$ (12); $x^2$ in $(1+x)^2+\cdots+(1+x)^{10}$ (165); constant of $(x+2+\frac{1}{x})^5$ (252).
- Worksheet: $a^2b^4$ in $(a-b)^6$ (15); $x^3$ in $(x-2)^5$ (40); $21^4 = 194481$; constant of $(2x^2-\frac{1}{x})^6$ (60); $\binom{9}{1}+\binom{9}{3}+\binom{9}{5}+\binom{9}{7}$ (255); $\sum\binom{5}{k}4^{5-k}(-1)^k$ (243); $x^3$ in $(x^2+\frac{1}{x})^{12}$ (792); $x^2$ in $(1+3x)^4(1-x)^2$ (31); $4\binom{n}{2}=112$ ($n=8$); $\sum\binom{8}{k}(\frac{1}{2})^k$ ($\frac{6561}{256}$).

Identity/sum problems elsewhere (also off limits — the base checker replaced 26 of 62 for these):
- `ch04.js`: $\binom{9}{0}+\binom{9}{1}+\binom{9}{9}$; $\binom{n}{2}=66$ and $\binom{n}{2}=78$; $\binom{14}{13}+\binom{14}{12}$; $\binom{25}{23}-\binom{25}{2}$; $\binom{n}{3}=\binom{n}{7}$; $\binom{12}{k}>200$ count.
- `ch12.js`: row sums $2^{10}$, $2^{12}$ (13-entry row), $2^{13}$; rows 0–7 combined ($2^8-1=255$); row 9 minus both end 1s (510); $\binom{7}{0}+\cdots+\binom{7}{7}$ plus row 8 (384); $\binom{10}{1}+\cdots+\binom{10}{10}$ (1023); $\binom{8}{0}+\cdots+\binom{8}{3}$ (93); alternating row 9 (0); even-size subsets of an 8-set (128); $\binom{12}{1}+\binom{12}{3}+\cdots+\binom{12}{11}$ (2048); subsets with $\ge 2$ elements of a 9-set (502); committee counts $1013$, $968$ reversed to $n$; subsets of a 5-set (32); Pascal recurrences $\binom{7}{3}+\binom{7}{4}$, $\binom{20}{9}+\binom{20}{10}$, $\binom{20}{5}+2\binom{20}{6}+\binom{20}{7}$, $\binom{6}{2}+\binom{6}{3}$, $\binom{8}{2}+\binom{8}{3}$; $\binom{12}{7}+\cdots+\binom{12}{12}$.
- `ch13.js`: hockey sticks $\binom{3}{3}+\cdots+\binom{8}{3}$ (126), $\binom{4}{4}+\cdots+\binom{9}{4}$ (252), $\binom{6}{2}+\cdots+\binom{12}{2}$ (266), $\binom{2}{2}+\cdots+\binom{14}{2}$ (455), $\binom{3}{3}+\cdots+\binom{11}{3}$ (495); triangular-number sums (286, 1540); $1\cdot 2+2\cdot 3+\cdots+14\cdot 15$; $1\cdot 9+2\cdot 8+\cdots+9\cdot 1$; largest/smallest-element sums.

## Derived answer-index rows

§14.2 base: 0 2 1 3 1 0 2 3 2 1 | v1: 1 3 2 0 2 1 3 0 3 2 | v2: 3 1 0 2 0 3 1 2 1 0 | v3: 2 0 3 1 3 2 0 1 0 3
§14.3 base: 3 1 3 1 0 2 3 1 2 0 | v1: 0 2 0 2 1 3 0 2 3 1 | v2: 2 0 2 0 3 1 2 0 1 3 | v3: 1 3 1 3 2 0 1 3 0 2
§14.4 base: 0 3 0 2 3 1 2 2 1 3 | v1: 1 0 1 3 0 2 3 3 2 0 | v2: 3 2 3 1 2 0 1 1 0 2 | v3: 2 1 2 0 1 3 0 0 3 1
§14.5 base: 1 2 0 1 3 3 0 2 3 0 | v1: 2 3 1 2 0 0 1 3 0 1 | v2: 0 1 3 0 2 2 3 1 2 3 | v3: 3 0 2 3 1 1 2 0 1 2
Challenge base: 2 3 0 1 3 1 0 0 3 1 2 2 | v1: 3 0 1 2 0 2 1 1 0 2 3 3 | v2: 1 2 3 0 2 0 3 3 2 0 1 1 | v3: 0 1 2 3 1 3 2 2 1 3 0 0

## §14.2 A Little Algebra — ch14-s1.js
base indices: 0 2 1 3 1 0 2 3 2 1
v1 indices:   1 3 2 0 2 1 3 0 3 2
v2 indices:   3 1 0 2 0 3 1 2 1 0
v3 indices:   2 0 3 1 3 2 0 1 0 3

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | Which of the following equals $(x+2y)^2 - (x-2y)^2$? **KEY: $8xy$** | Which of the following equals $(x+y)^2 + (x-y)^2$? **KEY: $2x^2 + 2y^2$** | *Derived:* Which of the following equals $(a+b)^3 + (a-b)^3$? **KEY: $2a^3 + 6ab^2$** |
| 2 | When $(x+y)^5$ is multiplied out completely, before any like terms are combined, how many products are there in all? **KEY: $32$** | When $(a+b+c)^2 = (a+b+c)(a+b+c)$ is multiplied out completely, before combining like terms, how many products are there? **KEY: $9$** | *Reversed:* Multiplying out $(a+b)^n$ completely gives $128$ products before like terms are combined. What is $n$? **KEY: $7$** |
| 3 | Which of the following equals $(3x+2)^2$? **KEY: $9x^2 + 12x + 4$** | Which of the following equals $(5-2x)^2$? **KEY: $4x^2 - 20x + 25$** | *Reversed:* The expansion of $(3x+c)^2$ has middle term $30x$ for a positive number $c$. What is the constant term of the expansion? **KEY: $25$** |
| 4 | Which of the following equals $(x-3)^3$? **KEY: $x^3 - 9x^2 + 27x - 27$** | Which of the following equals $(2x-y)^3$? **KEY: $8x^3 - 12x^2y + 6xy^2 - y^3$** | *Derived:* What is the coefficient of $x$ in the expansion of $(x-2)^4$? **KEY: $-32$** |
| 5 | Imagine multiplying out $(a+b)^6$ completely, before combining like terms, so there are $64$ products in all. How many of them equal $a^4b^2$? **KEY: $15$** | Among the $32$ products obtained by multiplying out $(x+y)^5$ before combining like terms, how many contain at least four $y$’s? **KEY: $6$** | *Reversed:* When $(a+b)^n$ is multiplied out before combining like terms, exactly $56$ of the products equal $a^5b^3$. What is $n$? **KEY: $8$** |
| 6 | What is the coefficient of $x^2$ when $(x+6)^3$ is expanded? **KEY: $18$** | What is the coefficient of $a^2b$ when $(a+4b)^3$ is expanded? **KEY: $12$** | *Reversed:* For a positive number $c$, the coefficient of $x$ in the expansion of $(x+c)^3$ is $48$. What is $c$? **KEY: $4$** |
| 7 | Which of the following equals $(4x-3y)^2$? **KEY: $16x^2 - 24xy + 9y^2$** | Which of the following equals $(2a+5b)^2$? **KEY: $4a^2 + 20ab + 25b^2$** | *Reversed:* For positive numbers $p$ and $q$, $(px-qy)^2 = 49x^2 - 42xy + 9y^2$. What is $p + q$? **KEY: $10$** |
| 8 | What is the coefficient of $x^6$ when $(x^2+x)^5$ is expanded? **KEY: $5$** | What is the coefficient of $x^4$ when $(x^2+3x)^3$ is expanded? **KEY: $27$** | *Derived:* When $(x^2+x)^5$ is expanded and like terms are combined, what is the sum of all its coefficients? **KEY: $32$** |
| 9 | What is the coefficient of $x^7$ when $(x^2+2x+1)^4$ is expanded? **KEY: $8$** | What is the coefficient of $x^3$ when $(x^2-2x+1)^3$ is expanded? **KEY: $-20$** | *Reversed:* For a positive integer $n$, the coefficient of $x$ in the expansion of $(x^2+2x+1)^n$ is $22$. What is $n$? **KEY: $11$** |
| 10 | What is the coefficient of $x^6$ when $(x+1)^4(x-1)^4$ is expanded? **KEY: $-4$** | What is the coefficient of $x^2$ when $(x+2)^2(x-2)^2$ is expanded? **KEY: $-8$** | *Reversed:* For a positive integer $n$, the coefficient of $x^{2n-2}$ when $(x+1)^n(x-1)^n$ is expanded is $-9$. What is $n$? **KEY: $9$** |

## §14.3 The Theorem — ch14-s2.js
base indices: 3 1 3 1 0 2 3 1 2 0
v1 indices:   0 2 0 2 1 3 0 2 3 1
v2 indices:   2 0 2 0 3 1 2 0 1 3
v3 indices:   1 3 1 3 2 0 1 3 0 2

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | Which of the following is a term in the expansion of $(a+b)^8$? **KEY: $56a^5b^3$** | Which of the following is a term in the expansion of $(a-b)^7$? **KEY: $-35a^4b^3$** | *Reversed:* One term in the expansion of $(a+b)^n$ is $715a^9b^4$. What is $n$? **KEY: $13$** |
| 2 | In the expansion of $(x+3)^4$, which power of $x$ has coefficient $54$? **KEY: $x^2$** | In the expansion of $(4x+1)^5$, which power of $x$ has coefficient $640$? **KEY: $x^3$** | *Derived:* What is the largest coefficient in the expansion of $(x+3)^4$? **KEY: $108$** |
| 3 | What is the coefficient of $y^7$ in the expansion of $(y-1)^9$? **KEY: $36$** | What is the coefficient of $t^5$ in the expansion of $(t-2)^7$? **KEY: $84$** | *Reversed:* For a positive integer $n$, the coefficient of $y^{n-2}$ in the expansion of $(y-1)^n$ is $105$. What is $n$? **KEY: $15$** |
| 4 | What is the coefficient of $x^2$ in the expansion of $(2x+1)^5$? **KEY: $40$** | What is the coefficient of $a^2b^3$ in the expansion of $(a+2b)^5$? **KEY: $80$** | *Reversed:* For a positive number $c$, the coefficient of $x^2$ in the expansion of $(cx+1)^5$ is $90$. What is $c$? **KEY: $3$** |
| 5 | What is the coefficient of $x^3$ in the expansion of $(2x-1)^5$? **KEY: $80$** | What is the coefficient of $x^4$ in the expansion of $(1-3x)^5$? **KEY: $405$** | *Reversed:* For a positive integer $n$, the coefficient of $x^{n-1}$ in the expansion of $(2x-1)^n$ is $-192$. What is $n$? **KEY: $6$** |
| 6 | What is the coefficient of $x^4y^8$ in the expansion of $(x+y)^{12}$? **KEY: $495$** | What is the coefficient of $a^5b^6$ in the expansion of $(a+b)^{11}$? **KEY: $462$** | *Reversed:* For a positive integer $n$, the coefficient of $x^2y^{n-2}$ in the expansion of $(x+y)^n$ is $325$. What is $n$? **KEY: $26$** |
| 7 | What is the coefficient of $a^2b^3$ in the expansion of $(a-3b)^5$? **KEY: $-270$** | What is the coefficient of $x^3y^2$ in the expansion of $(2x+3y)^5$? **KEY: $720$** | *Reversed:* For a positive number $c$, the coefficient of $a^4b^2$ in the expansion of $(a-cb)^6$ is $60$. What is $c$? **KEY: $2$** |
| 8 | What is the coefficient of $x^4$ in the expansion of $(x^2+2)^6$? **KEY: $240$** | What is the coefficient of $x^9$ in the expansion of $(x^3+2)^4$? **KEY: $8$** | *Reversed:* For a positive integer $n$, the coefficient of $x^{2n-2}$ in the expansion of $(x^2+3)^n$ is $54$. What is $n$? **KEY: $18$** |
| 9 | What is the coefficient of $x^4$ in the expansion of $\left(x + \frac{1}{x}\right)^8$? **KEY: $28$** | What is the coefficient of $x^3$ in the expansion of $\left(x + \frac{2}{x}\right)^5$? **KEY: $10$** | *Reversed:* For a positive integer $n$, the coefficient of $x^{n-2}$ in the expansion of $\left(x + \frac{1}{x}\right)^n$ is $20$. What is $n$? **KEY: $20$** |
| 10 | What is the coefficient of $x^3$ when $(1+3x)^5 - (1-3x)^5$ is expanded and simplified? **KEY: $540$** | What is the coefficient of $x^4$ when $(1+x)^8 + (1-x)^8$ is expanded and simplified? **KEY: $140$** | *Derived:* What is the coefficient of $x^4$ when $(1+2x)^7 - (1-2x)^7$ is expanded and simplified? **KEY: $0$** |

## §14.4 Applications of the Binomial Theorem — ch14-s3.js
base indices: 0 3 0 2 3 1 2 2 1 3
v1 indices:   1 0 1 3 0 2 3 3 2 0
v2 indices:   3 2 3 1 2 0 1 1 0 2
v3 indices:   2 1 2 0 1 3 0 0 3 1

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | What is the coefficient of $x^{48}$ in the expansion of $(x+1)^{50}$? **KEY: $1225$** | What is the coefficient of $x^{58}$ in the expansion of $(x+2)^{60}$? **KEY: $7080$** | *Reversed:* For a positive integer $n$, the coefficient of $x^{n-2}$ in the expansion of $(x+1)^n$ is $1128$. What is $n$? **KEY: $48$** |
| 2 | Using the expansion of $(100+2)^3$, what is $102^3$? **KEY: $1061208$** | Using the expansion of $(100-2)^3$, what is $98^3$? **KEY: $941192$** | *Derived:* Using the expansion of $(100+1)^4$, what is $101^4$? **KEY: $104060401$** |
| 3 | What is the constant term in the expansion of $\left(x + \frac{2}{x}\right)^6$? **KEY: $160$** | What is the constant term in the expansion of $\left(2x - \frac{3}{x}\right)^4$? **KEY: $216$** | *Derived:* The expansion of $\left(x + \frac{2}{x}\right)^5$ has no constant term. What is the coefficient of $\frac{1}{x}$ in that expansion? **KEY: $80$** |
| 4 | What is the exact value of $1.03^3$? **KEY: $1.092727$** | What is the exact value of $0.97^3$? **KEY: $0.912673$** | *Derived:* What is the exact value of $2.01^4$, computed from $(2 + 0.01)^4$? **KEY: $16.32240801$** |
| 5 | What is the coefficient of $x^4$ in the expansion of $(3-x)^6$? **KEY: $135$** | What is the coefficient of $x^3$ in the expansion of $(1-2x)^6$? **KEY: $-160$** | *Reversed:* In the expansion of $(2-x)^7$, which power of $x$ has coefficient $672$? **KEY: $x^2$** |
| 6 | What is the constant term in the expansion of $\left(x^2 - \frac{1}{x}\right)^9$? **KEY: $84$** | What is the constant term in the expansion of $\left(2x^3 - \frac{1}{x^3}\right)^4$? **KEY: $24$** | *Derived:* The expansion of $\left(x^3 - \frac{1}{x}\right)^{10}$ has no constant term. What is the coefficient of $x^2$ in that expansion? **KEY: $-120$** |
| 7 | Using the expansions of $(20+1)^3$ and $(20-1)^3$, what is $21^3 - 19^3$? **KEY: $2402$** | Using the expansions of $(10+2)^3$ and $(10-2)^3$, what is $12^3 + 8^3$? **KEY: $2240$** | *Derived:* Using the expansions of $(30+1)^3$ and $(30-1)^3$, what is $31^3 - 29^3$? **KEY: $5402$** |
| 8 | What is the coefficient of $x^2$ when $(1+x)^3(1+x)^4$ is expanded? **KEY: $21$** | What is the coefficient of $x^4$ when $(1+x)^6(1+x)^6$ is expanded? **KEY: $495$** | *Reversed:* For a positive integer $n$, the coefficient of $x^2$ when $(1+x)^3(1+x)^n$ is expanded is $190$. What is $n$? **KEY: $17$** |
| 9 | What is the coefficient of $x^2$ when $(1+x)^2(1-x)^3$ is expanded? **KEY: $-2$** | What is the coefficient of $x^2$ when $(1+3x)^2(1-2x)^2$ is expanded? **KEY: $-11$** | *Derived:* What is the coefficient of $x^6$ when $(1+x)^3(1-x)^4$ is expanded? **KEY: $-1$** |
| 10 | What is the constant term in the expansion of $\left(3x - \frac{1}{x^2}\right)^6$? **KEY: $1215$** | What is the constant term in the expansion of $\left(x^2 + \frac{2}{x^3}\right)^5$? **KEY: $40$** | *Derived:* What is the coefficient of $x^3$ in the expansion of $\left(2x - \frac{1}{x^2}\right)^9$? **KEY: $4608$** |

## §14.5 Using the Binomial Theorem in Identities — ch14-s4.js
base indices: 1 2 0 1 3 3 0 2 3 0
v1 indices:   2 3 1 2 0 0 1 3 0 1
v2 indices:   0 1 3 0 2 2 3 1 2 3
v3 indices:   3 0 2 3 1 1 2 0 1 2

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | What is $\binom{9}{0} + \binom{9}{1} + \binom{9}{2} + \cdots + \binom{9}{8}$? Note that the sum stops at $\binom{9}{8}$. **KEY: $511$** | What is $\binom{7}{2} + \binom{7}{3} + \binom{7}{4} + \cdots + \binom{7}{7}$? Note that the sum starts at $\binom{7}{2}$. **KEY: $120$** | *Reversed:* For a positive integer $n$, $\binom{n}{0} + \binom{n}{1} + \cdots + \binom{n}{n-1} = 16383$. What is $n$? **KEY: $14$** |
| 2 | What is $\binom{9}{0} - \binom{9}{1} + \binom{9}{2} - \cdots - \binom{9}{7}$, with signs alternating? Note that the sum stops at $-\binom{9}{7}$. **KEY: $-8$** | What is $\binom{12}{0} - \binom{12}{1} + \binom{12}{2} - \cdots + \binom{12}{10}$, with signs alternating? Note that the sum stops at $+\binom{12}{10}$. **KEY: $11$** | *Derived:* What is $\binom{11}{0} - \binom{11}{1} + \binom{11}{2} - \binom{11}{3} + \binom{11}{4} - \binom{11}{5}$? **KEY: $-252$** |
| 3 | What is $\binom{12}{2} + \binom{12}{4} + \binom{12}{6} + \binom{12}{8} + \binom{12}{10}$? **KEY: $2046$** | What is $\binom{13}{1} + \binom{13}{3} + \binom{13}{5} + \cdots + \binom{13}{13}$, the sum of every odd-index entry of row $13$? **KEY: $4096$** | *Reversed:* For a positive integer $n$, the sum $\binom{n}{0} + \binom{n}{2} + \binom{n}{4} + \cdots$ of every even-index entry of row $n$ equals $32768$. What is $n$? **KEY: $16$** |
| 4 | What is $\binom{5}{0}2^5 + \binom{5}{1}2^4\cdot 3 + \binom{5}{2}2^3\cdot 3^2 + \binom{5}{3}2^2\cdot 3^3 + \binom{5}{4}2\cdot 3^4 + \binom{5}{5}3^5$? **KEY: $3125$** | What is $\binom{4}{0}5^4 - \binom{4}{1}5^3\cdot 3 + \binom{4}{2}5^2\cdot 3^2 - \binom{4}{3}5\cdot 3^3 + \binom{4}{4}3^4$? **KEY: $16$** | *Derived:* What is $\binom{4}{0}3^4 - \binom{4}{1}3^3\cdot 2 + \binom{4}{2}3^2\cdot 2^2 - \binom{4}{3}3\cdot 2^3 + \binom{4}{4}2^4$? **KEY: $1$** |
| 5 | When $(3x-y)^4$ is expanded and like terms are combined, what is the sum of all its coefficients? **KEY: $16$** | When $(2x^2-x-2)^3$ is expanded and like terms are combined, what is the sum of all its coefficients? **KEY: $-1$** | *Derived:* When $(3x-y)^6$ is expanded, what is the sum of the coefficients of the terms with even powers of $y$? **KEY: $2080$** |
| 6 | What is $\sum_{k=0}^{6}\binom{6}{k}(-3)^k$? **KEY: $64$** | What is $\sum_{k=0}^{4}\binom{4}{k}(-5)^k$? **KEY: $256$** | *Derived:* What is $\sum_{k=0}^{4}\binom{4}{k}7^{4-k}(-4)^k$? **KEY: $81$** |
| 7 | What is $\binom{6}{0}5^6 + \binom{6}{1}5^5 + \binom{6}{2}5^4 + \cdots + \binom{6}{6}$? **KEY: $46656$** | What is $\binom{9}{0}2^9 + \binom{9}{1}2^8 + \binom{9}{2}2^7 + \cdots + \binom{9}{9}$? **KEY: $19683$** | *Derived:* What is $\sum_{k=0}^{7}\binom{7}{k}3^{7-k}2^k$? **KEY: $78125$** |
| 8 | For a positive integer $n$, $\sum_{k=0}^{n}\binom{n}{k}5^k = 1296$. What is $n$? **KEY: $4$** | For a positive integer $n$, the sum of all the coefficients of the expansion of $(x+2)^n$ is $2187$. What is $n$? **KEY: $7$** | *Reversed:* For a positive integer $n$, $\binom{n}{0} + \binom{n}{1} + \cdots + \binom{n}{n} = 524288$. What is $n$? **KEY: $19$** |
| 9 | What is $\binom{5}{0} + \binom{5}{2}3^2 + \binom{5}{4}3^4$, the sum of the terms of $\sum_{k=0}^{5}\binom{5}{k}3^k$ with even $k$? **KEY: $496$** | What is $\binom{6}{1}3 + \binom{6}{3}3^3 + \binom{6}{5}3^5$, the sum of the terms of $\sum_{k=0}^{6}\binom{6}{k}3^k$ with odd $k$? **KEY: $2016$** | *Derived:* What is $\binom{7}{1}2 + \binom{7}{3}2^3 + \binom{7}{5}2^5 + \binom{7}{7}2^7$, the sum of the terms of $\sum_{k=0}^{7}\binom{7}{k}2^k$ with odd $k$? **KEY: $1094$** |
| 10 | What is $\binom{6}{0}\binom{6}{2} + \binom{6}{1}\binom{6}{1} + \binom{6}{2}\binom{6}{0}$? **KEY: $66$** | What is $\binom{5}{0}\binom{8}{3} + \binom{5}{1}\binom{8}{2} + \binom{5}{2}\binom{8}{1} + \binom{5}{3}\binom{8}{0}$? **KEY: $286$** | *Derived:* What is $\binom{7}{0}^2 + \binom{7}{1}^2 + \binom{7}{2}^2 + \cdots + \binom{7}{7}^2$? **KEY: $3432$** |

## Challenge — ch14-cw.js
base indices: 2 3 0 1 3 1 0 0 3 1 2 2
v1 indices:   3 0 1 2 0 2 1 1 0 2 3 3
v2 indices:   1 2 3 0 2 0 3 3 2 0 1 1
v3 indices:   0 1 2 3 1 3 2 2 1 3 0 0

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | What is the coefficient of $x^3y^2$ when $(x+y)^5 + (x+y)^6$ is expanded and simplified? **KEY: $10$** | What is the coefficient of $x^2y^2$ when $(x+y)^6 - (x+y)^4$ is expanded and simplified? **KEY: $-6$** | *Derived:* What is the coefficient of $x^2y^2$ when $(x+y)^4 + (x+2y)^4$ is expanded and simplified? **KEY: $30$** |
| 2 | What is the coefficient of $x$ when $(x-4)^3$ is expanded? **KEY: $48$** | What is the coefficient of $x^2$ when $(x-5)^4$ is expanded? **KEY: $150$** | *Derived:* When $(x-3)^3$ is expanded and like terms are combined, what is the sum of all its coefficients? **KEY: $-8$** |
| 3 | What is $\binom{4}{0}5^4 - \binom{4}{1}5^3\cdot 2 + \binom{4}{2}5^2\cdot 2^2 - \binom{4}{3}5\cdot 2^3 + \binom{4}{4}2^4$? **KEY: $81$** | What is $\binom{6}{0} - \binom{6}{1}\cdot 3 + \binom{6}{2}\cdot 3^2 - \binom{6}{3}\cdot 3^3 + \binom{6}{4}\cdot 3^4 - \binom{6}{5}\cdot 3^5 + \binom{6}{6}\cdot 3^6$? (The growing powers sit on the alternating side: this is $(3-1)^6$.) **KEY: $64$** | *Reversed:* For a positive integer $n$, $\sum_{k=0}^{n}\binom{n}{k}4^{n-k}(-2)^k = 2097152$. What is $n$? **KEY: $21$** |
| 4 | What is the exact value of $0.98^4$? **KEY: $0.92236816$** | What is the exact value of $0.95^3$? **KEY: $0.857375$** | *Reversed:* A number $x = 1 - d$ for a small positive decimal $d$ satisfies $x^3 = 0.804357$ exactly. What is $x$? **KEY: $0.93$** |
| 5 | What is the coefficient of $x^3$ in the expansion of $(3x+2)^4$? **KEY: $216$** | What is the coefficient of $x^2y^2$ in the expansion of $(2x+5y)^4$? **KEY: $600$** | *Derived:* What is the coefficient of $x^3$ in the expansion of $(2x+3)^5$? **KEY: $720$** |
| 6 | What is the constant term in the expansion of $\left(x - \frac{1}{x}\right)^{10}$? **KEY: $-252$** | What is the constant term in the expansion of $\left(3x - \frac{1}{x}\right)^4$? **KEY: $54$** | *Derived:* What is the coefficient of $x^2$ in the expansion of $\left(x - \frac{1}{x}\right)^8$? **KEY: $-56$** |
| 7 | What is the coefficient of $x^6$ when $(1+x^2)^5(1-x^4)^2$ is expanded? **KEY: $0$** | What is the coefficient of $x^4$ when $(1+2x)^4(1+x^2)^2$ is expanded? **KEY: $65$** | *Derived:* What is the coefficient of $x^9$ when $(1+x^2)^5(1-x^3)^2$ is expanded? **KEY: $-20$** |
| 8 | For a positive integer $n$, $\sum_{k=0}^{n}\binom{n}{k}(-4)^k = -27$. What is $n$? **KEY: $3$** | For a positive integer $n$, $\sum_{k=0}^{n}\binom{n}{k}5^k = 7776$. What is $n$? **KEY: $5$** | *Reversed:* For a positive integer $c$, $\sum_{k=0}^{3}\binom{3}{k}c^k = 12167$. What is $c$? **KEY: $22$** |
| 9 | In the expansion of $(1+x)^n$, the coefficient of $x^4$ is exactly five times the coefficient of $x^3$. What is $n$? **KEY: $23$** | For an integer $n > 8$, the coefficients of $x^5$ and $x^8$ in the expansion of $(1+x)^n$ are equal and nonzero. What is $n$? **KEY: $13$** | *Reversed:* In the expansion of $(1+x)^n$, the coefficient of $x^2$ is exactly $13$ times the coefficient of $x$. What is $n$? **KEY: $27$** |
| 10 | What is the constant term in the expansion of $\left(x + \frac{1}{x}\right)^2\left(x - \frac{1}{x}\right)^6$? (Pair factors into $\left(x^2 - \frac{1}{x^2}\right)^2\left(x - \frac{1}{x}\right)^4$.) **KEY: $-10$** | What is the constant term in the expansion of $\left(x + \frac{3}{x}\right)^2\left(x - \frac{3}{x}\right)^2$? **KEY: $-18$** | *Derived:* What is the coefficient of $x^6$ in the expansion of $\left(x + \frac{1}{x}\right)^6\left(x - \frac{1}{x}\right)^4$? **KEY: $-3$** |
| 11 | What is the coefficient of $x^2$ when $(1+x)^3 + (1+x)^4 + \cdots + (1+x)^{12}$ is expanded and simplified? **KEY: $285$** | What is the coefficient of $x^4$ when $(1+x)^4 + (1+x)^5 + (1+x)^6 + (1+x)^7$ is expanded and simplified? **KEY: $56$** | *Reversed:* For an integer $m \ge 2$, the coefficient of $x^2$ when $(1+x)^2 + (1+x)^3 + \cdots + (1+x)^m$ is expanded and simplified is $2024$. What is $m$? **KEY: $23$** |
| 12 | What is the constant term in the expansion of $\left(x - 2 + \frac{1}{x}\right)^4$? (Write it as $\frac{(x-1)^8}{x^4}$.) **KEY: $70$** | What is the constant term in the expansion of $\left(4x + 4 + \frac{1}{x}\right)^3$? (Write it as $\frac{(2x+1)^6}{x^3}$.) **KEY: $160$** | *Derived:* What is the coefficient of $x$ in the expansion of $\left(x + 2 + \frac{1}{x}\right)^5$? **KEY: $210$** |

## Worksheet — ch14-ws.js (free response; keys are strings, no indices)

| slot | v1 | v2 | v3 |
|---|---|---|---|
| 1 | What is the coefficient of $a^6b^3$ in the expansion of $(a-b)^9$? **KEY: $-84$** | What is the coefficient of $a^3b^2$ in the expansion of $(a-3b)^5$? **KEY: $90$** | *Reversed:* For a positive integer $n$, the coefficient of $a^{n-2}b^2$ in the expansion of $(a-b)^n$ is $276$. What is $n$? **KEY: $24$** |
| 2 | What is the coefficient of $x^2$ in the expansion of $(x-3)^4$? **KEY: $54$** | What is the coefficient of $x^3$ in the expansion of $(2x-1)^4$? **KEY: $-32$** | *Derived:* In the expansion of $(x-2)^5$, what is the sum of the coefficients of $x^3$ and $x^2$? **KEY: $-40$** |
| 3 | Compute $19^4$ by expanding $(20-1)^4$. **KEY: $130321$** | Compute $41^3$ by expanding $(40+1)^3$. **KEY: $68921$** | *Derived:* Compute $22^4$ by expanding $(20+2)^4$. **KEY: $234256$** |
| 4 | What is the constant term in the expansion of $\left(2x^2 - \frac{1}{x}\right)^9$? **KEY: $672$** | What is the constant term in the expansion of $\left(x - \frac{3}{x^2}\right)^6$? **KEY: $135$** | *Derived:* What is the coefficient of $x^3$ in the expansion of $\left(2x^2 - \frac{1}{x}\right)^6$? **KEY: $-160$** |
| 5 | What is $\binom{11}{0} + \binom{11}{2} + \binom{11}{4} + \binom{11}{6} + \binom{11}{8}$? Note that the sum stops at $\binom{11}{8}$. **KEY: $1013$** | What is $\binom{8}{1} + \binom{8}{3} + \binom{8}{5} + \binom{8}{7}$? **KEY: $128$** | *Derived:* What is $\binom{12}{1} + \binom{12}{3} + \binom{12}{5} + \binom{12}{7} + \binom{12}{9}$? Note that the sum stops at $\binom{12}{9}$. **KEY: $2036$** |
| 6 | What is $\binom{4}{0}5^4 - \binom{4}{1}5^3 + \binom{4}{2}5^2 - \binom{4}{3}5 + \binom{4}{4}$? **KEY: $256$** | What is $\binom{4}{0}2^4 + \binom{4}{1}2^3\cdot 5 + \binom{4}{2}2^2\cdot 5^2 + \binom{4}{3}2\cdot 5^3 + \binom{4}{4}5^4$? **KEY: $2401$** | *Reversed:* For a positive integer $c$, $\sum_{k=0}^{5}\binom{5}{k}c^{5-k}(-1)^k = 1024$. What is $c$? **KEY: $5$** |
| 7 | What is the coefficient of $x$ in the expansion of $\left(x^2 + \frac{1}{x}\right)^{11}$? **KEY: $330$** | What is the coefficient of $\frac{1}{x^3}$ in the expansion of $\left(x^2 + \frac{1}{x}\right)^9$? **KEY: $36$** | *Derived:* What is the coefficient of $x^{12}$ in the expansion of $\left(x^2 + \frac{1}{x}\right)^{12}$? **KEY: $495$** |
| 8 | What is the coefficient of $x^2$ when $(1+3x)^3(1-2x)^2$ is expanded? **KEY: $-5$** | What is the coefficient of $x^2$ when $(1+2x)^4(1-3x)^2$ is expanded? **KEY: $-15$** | *Derived:* What is the coefficient of $x^4$ when $(1+3x)^4(1-x)^2$ is expanded? **KEY: $-81$** |
| 9 | For a positive integer $n$, the coefficient of $x^2$ in the expansion of $(1+3x)^n$ is $324$. What is $n$? **KEY: $9$** | For a positive integer $n$, the coefficient of $x^3$ in the expansion of $(1+2x)^n$ is $2912$. What is $n$? **KEY: $14$** | *Derived:* What is the coefficient of $x^3$ in the expansion of $(1+2x)^8$? **KEY: $448$** |
| 10 | Evaluate $\sum_{k=0}^{6}\binom{6}{k}\left(\frac{1}{3}\right)^k$. Give an exact fraction. **KEY: $\frac{4096}{729}$** | Evaluate $\sum_{k=0}^{7}\binom{7}{k}\left(-\frac{1}{2}\right)^k$. Give an exact fraction. **KEY: $\frac{1}{128}$** | *Derived:* Evaluate $\sum_{k=0}^{5}\binom{5}{k}\left(\frac{3}{2}\right)^k$. Give an exact fraction. **KEY: $\frac{3125}{32}$** |

## Verification record
All 186 keys computed exactly in node (BigInt Laurent expansion for coefficients and
constant terms, integer powers for exact decimals, exact BigInt sums for identities);
v1, v2, v3 each hold 62 distinct keys as normalized strings (0 repeated); 0 slots with a
repeated key across base|v1|v2|v3 (base keys included in the check).
