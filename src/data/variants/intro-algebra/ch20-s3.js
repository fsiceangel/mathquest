// Introduction to Algebra chapter 20 — variations for section 20.3
// (Floor and Ceiling). All problems and solutions are original MathQuest
// content.
//
// House rules for this file:
//  - Every key was worked twice by two different routes, and the second route
//    is written out in the solution. Bare floors and ceilings were found from
//    the definition (greatest integer at or below / least integer at or above)
//    AND by splitting the number into an integer plus a leftover, or by using
//    the fact that for a non-integer the ceiling is exactly one more than the
//    floor. Sums were computed term by term AND by doubling the number and
//    reading off the odd integer beside it. Interval answers were derived from
//    the definition AND by testing the endpoints one at a time. Counting
//    problems were solved by translating to an inequality AND by listing the
//    integers and testing the two neighbours that fail.
//  - Every negative case was checked on a number line: floor moves LEFT and
//    ceiling moves RIGHT, no matter which side of zero the number sits on.
//    So $\lfloor -5.4 \rfloor = -6$ and $\lceil -5.4 \rceil = -5$.
//  - Each distractor is one named mistake, named at the end of the solution,
//    and that mistake really does produce that choice. The traps running
//    through this section are: ROUNDING TO THE NEAREST INTEGER, TAKING THE
//    CEILING WHEN THE FLOOR WAS ASKED, TAKING THE FLOOR WHEN THE CEILING WAS
//    ASKED, LEAVING THE DECIMAL ALONE, STEPPING ONE INTEGER TOO FAR,
//    ROUNDING TOWARD ZERO, IGNORING THE MINUS SIGN, MOVING AN INTEGER ANYWAY,
//    DOUBLING THE FLOOR, DOUBLING THE CEILING, ADDING THE NUMBER TO ITSELF,
//    SUBTRACTING INSTEAD OF ADDING, INCLUDING THE WRONG ENDPOINT, PINNING THE
//    VARIABLE TO ONE VALUE, CHARGING BY THE FLOOR, ROUNDING AT THE END INSTEAD
//    OF THE START, NOT ROUNDING AT ALL, SUBTRACTING THE ENDPOINTS WITHOUT
//    COUNTING BOTH, and INCLUDING THE INTEGER THAT JUST MISSES.
//  - No two choices inside an item name the same number.

const s203 = [
  // p1 — floor of a positive decimal: go down, never to the nearest.
  [
    {
      q: 'What is $\\lfloor 9.4 \\rfloor$?',
      choices: ['$10$', '$8$', '$9$', '$9.4$'],
      answer: 2,
      solution:
        'The floor is the greatest integer at or below the number. $9.4$ sits between $9$ and $10$, and floor takes the integer on the left, so $\\lfloor 9.4 \\rfloor = 9$ ✓. Check a second, independent way by splitting the number into an integer plus a leftover: $9.4 = 9 + 0.4$, and a leftover of $0.4$ is not enough to carry it up to the next integer, so the integer part $9$ is what the floor keeps ✓. (The choice $10$ is TAKING THE CEILING WHEN THE FLOOR WAS ASKED; the choice $8$ is STEPPING ONE INTEGER TOO FAR — $8$ is below $9.4$, but it is not the greatest such integer ✗; the choice $9.4$ is LEAVING THE DECIMAL ALONE, and a floor is always an integer ✗.)',
    },
    {
      q: 'What is $\\lfloor 12.6 \\rfloor$?',
      choices: ['$12$', '$13$', '$11$', '$12.6$'],
      answer: 0,
      solution:
        'Floor drops to the greatest integer at or below, and the integers hugging $12.6$ are $12$ and $13$. Down means $12$, so $\\lfloor 12.6 \\rfloor = 12$ ✓. Check a second, independent way with the leftover split: $12.6 = 12 + 0.6$, and no leftover smaller than $1$ can lift the floor off $12$ ✓. (The choice $13$ is ROUNDING TO THE NEAREST INTEGER, which does send $12.6$ up — but floor never asks which integer is closer, only which is below; the choice $11$ is STEPPING ONE INTEGER TOO FAR down ✗; the choice $12.6$ is LEAVING THE DECIMAL ALONE ✗.)',
    },
    {
      q: 'What is $\\lfloor 8.2 \\rfloor$?',
      choices: ['$9$', '$8.2$', '$7$', '$8$'],
      answer: 3,
      solution:
        '$8.2$ lands just past $8$, and the greatest integer at or below it is $8$, so $\\lfloor 8.2 \\rfloor = 8$ ✓. Check a second, independent way by testing the candidates against the definition: is $9 \\le 8.2$? No ✗. Is $8 \\le 8.2$? Yes ✓ — and nothing between $8$ and $9$ is an integer, so $8$ is the greatest one that fits. (The choice $9$ is TAKING THE CEILING WHEN THE FLOOR WAS ASKED; the choice $7$ is STEPPING ONE INTEGER TOO FAR down ✗; the choice $8.2$ is LEAVING THE DECIMAL ALONE ✗.)',
    },
  ],
  // p2 — ceiling of a positive decimal: any leftover at all pushes it up.
  [
    {
      q: 'What is $\\lceil 7.2 \\rceil$?',
      choices: ['$8$', '$7$', '$7.2$', '$9$'],
      answer: 0,
      solution:
        'The ceiling is the smallest integer at or above the number. $7$ is below $7.2$, so it is disqualified ✗, and the next integer up is $8$ ✓, giving $\\lceil 7.2 \\rceil = 8$. Check a second, independent way using the floor: for a number that is not an integer, the ceiling is exactly one more than the floor. Here $\\lfloor 7.2 \\rfloor = 7$, so the ceiling is $7 + 1 = 8$ ✓. (The choice $7$ is TAKING THE FLOOR WHEN THE CEILING WAS ASKED — it is also what ROUNDING TO THE NEAREST INTEGER gives, since $0.2$ is a small leftover, but ceiling does not care how small the leftover is; the choice $7.2$ is LEAVING THE DECIMAL ALONE ✗; the choice $9$ is STEPPING ONE INTEGER TOO FAR up, past the smallest integer that works ✗.)',
    },
    {
      q: 'What is $\\lceil 11.8 \\rceil$?',
      choices: ['$11$', '$12$', '$11.8$', '$13$'],
      answer: 1,
      solution:
        'Ceiling climbs to the smallest integer at or above $11.8$. That is $12$, so $\\lceil 11.8 \\rceil = 12$ ✓. Check a second, independent way with the leftover split: $11.8 = 12 - 0.2$, so $12$ really does sit above $11.8$ ✓, and it beats every larger integer for smallness. (The choice $11$ is TAKING THE FLOOR WHEN THE CEILING WAS ASKED, and $11$ is below $11.8$ so it fails the definition ✗; the choice $11.8$ is LEAVING THE DECIMAL ALONE ✗; the choice $13$ is STEPPING ONE INTEGER TOO FAR up ✗.)',
    },
    {
      q: 'What is $\\lceil 14.2 \\rceil$?',
      choices: ['$14.2$', '$16$', '$14$', '$15$'],
      answer: 3,
      solution:
        'Even a tiny leftover pushes the ceiling up a whole step: $14.2$ is past $14$, so the smallest integer at or above it is $15$, and $\\lceil 14.2 \\rceil = 15$ ✓. Check a second, independent way using the floor: $\\lfloor 14.2 \\rfloor = 14$, and for a non-integer the ceiling is the very next integer, $14 + 1 = 15$ ✓. (The choice $14$ is TAKING THE FLOOR WHEN THE CEILING WAS ASKED, which is also where ROUNDING TO THE NEAREST INTEGER lands ✗; the choice $16$ is STEPPING ONE INTEGER TOO FAR up ✗; the choice $14.2$ is LEAVING THE DECIMAL ALONE ✗.)',
    },
  ],
  // p3 — floor of a negative decimal: down the number line means LEFT.
  [
    {
      q: 'What is $\\lfloor -5.4 \\rfloor$?',
      choices: ['$-5$', '$-6$', '$5$', '$6$'],
      answer: 1,
      solution:
        'Floor always moves down the number line, and down from a negative number means further LEFT. The integers hugging $-5.4$ are $-6$ on the left and $-5$ on the right, so the greatest integer at or below $-5.4$ is $-6$ ✓. Check a second, independent way with the leftover split: $-5.4 = -6 + 0.6$, an integer plus a leftover between $0$ and $1$, so the integer part sitting underneath is $-6$ ✓. (The choice $-5$ is ROUNDING TOWARD ZERO, chopping the decimal off — but $-5$ is greater than $-5.4$, so it cannot possibly be a floor ✗; the choice $6$ is IGNORING THE MINUS SIGN and rounding $5.4$ up; the choice $5$ is IGNORING THE MINUS SIGN and flooring $5.4$.)',
    },
    {
      q: 'What is $\\lfloor -8.6 \\rfloor$?',
      choices: ['$-8$', '$8$', '$-9$', '$9$'],
      answer: 2,
      solution:
        'Walk left from $-8.6$ until you hit an integer: the first one is $-9$, so $\\lfloor -8.6 \\rfloor = -9$ ✓. Check a second, independent way by testing candidates against the definition: is $-8 \\le -8.6$? No — $-8$ is to the RIGHT of $-8.6$ ✗. Is $-9 \\le -8.6$? Yes ✓, and it is the greatest integer that passes. (The choice $-8$ is ROUNDING TOWARD ZERO, keeping the digits and dropping the decimal ✗; the choice $9$ is IGNORING THE MINUS SIGN and rounding $8.6$ up; the choice $8$ is IGNORING THE MINUS SIGN and flooring $8.6$.)',
    },
    {
      q: 'What is $\\lfloor -1.2 \\rfloor$?',
      choices: ['$-1$', '$1$', '$2$', '$-2$'],
      answer: 3,
      solution:
        'A small negative is still a negative: $-1.2$ sits just to the left of $-1$, so the greatest integer at or below it is $-2$, and $\\lfloor -1.2 \\rfloor = -2$ ✓. Check a second, independent way with the leftover split: $-1.2 = -2 + 0.8$, so the integer underneath is $-2$ ✓. (The choice $-1$ is ROUNDING TOWARD ZERO — tempting, because $-1.2$ is so close to $-1$, but $-1 > -1.2$, so $-1$ is above the number and cannot be its floor ✗; the choice $1$ is IGNORING THE MINUS SIGN and flooring $1.2$; the choice $2$ is IGNORING THE MINUS SIGN and rounding $1.2$ up.)',
    },
  ],
  // p4 — an integer is its own floor and its own ceiling.
  [
    {
      q: 'What is $\\lfloor 9 \\rfloor + \\lceil 9 \\rceil$?',
      choices: ['$19$', '$18$', '$17$', '$9$'],
      answer: 1,
      solution:
        'An integer is already sitting on an integer, so neither function has anywhere to move it: $\\lfloor 9 \\rfloor = 9$ ✓ and $\\lceil 9 \\rceil = 9$ ✓, and the sum is $9 + 9 = 18$. Check a second, independent way with the interval descriptions: $\\lfloor x \\rfloor = 9$ holds for $9 \\le x < 10$, and $9$ is in that range ✓; $\\lceil x \\rceil = 9$ holds for $8 < x \\le 9$, and $9$ is in that range too ✓. Both come out $9$, so the total is $18$. (The choice $19$ is MOVING AN INTEGER ANYWAY on the ceiling side, $9 + 10$; the choice $17$ is MOVING AN INTEGER ANYWAY on the floor side, $8 + 9$; the choice $9$ reports one term and forgets to add the other.)',
    },
    {
      q: 'What is $\\lceil 12 \\rceil + \\lfloor 12 \\rfloor$?',
      choices: ['$24$', '$25$', '$23$', '$12$'],
      answer: 0,
      solution:
        'Ceiling asks for the smallest integer at or above $12$ — and $12$ itself qualifies, since "at or above" includes being equal ✓. Floor asks for the greatest integer at or below $12$, which is $12$ for the same reason ✓. The sum is $12 + 12 = 24$. Check a second, independent way by remembering that floor and ceiling differ only when there is a leftover to move: $12 = 12 + 0$, no leftover, so both land on $12$ and $\\lceil 12 \\rceil - \\lfloor 12 \\rfloor = 0$, forcing the sum to be double $12$, or $24$ ✓. (The choice $25$ is MOVING AN INTEGER ANYWAY on the ceiling side, $13 + 12$; the choice $23$ is MOVING AN INTEGER ANYWAY on the floor side, $12 + 11$; the choice $12$ answers with one term alone.)',
    },
    {
      q: 'What is $\\lfloor -7 \\rfloor + \\lceil -7 \\rceil$?',
      choices: ['$-15$', '$-13$', '$-14$', '$14$'],
      answer: 2,
      solution:
        'A negative integer is still an integer, so it is its own floor and its own ceiling: $\\lfloor -7 \\rfloor = -7$ ✓ and $\\lceil -7 \\rceil = -7$ ✓. The sum is $-7 + (-7) = -14$. Check a second, independent way with the definitions: the greatest integer at or below $-7$ cannot be $-8$, because $-7$ itself is at or below $-7$ and is greater ✓; the smallest integer at or above $-7$ cannot be $-6$, because $-7$ itself is at or above $-7$ and is smaller ✓. (The choice $-15$ is MOVING AN INTEGER ANYWAY on the floor side, $-8 + (-7)$; the choice $-13$ is MOVING AN INTEGER ANYWAY on the ceiling side, $-7 + (-6)$; the choice $14$ is IGNORING THE MINUS SIGN and adding $7 + 7$.)',
    },
  ],
  // p5 — ceiling of a negative decimal: up the number line means RIGHT.
  [
    {
      q: 'What is $\\lceil -7.6 \\rceil$?',
      choices: ['$-7$', '$-8$', '$7$', '$8$'],
      answer: 0,
      solution:
        'Ceiling always moves up the number line, and up from a negative number means RIGHT, toward zero. The integers hugging $-7.6$ are $-8$ and $-7$, so the smallest integer at or above $-7.6$ is $-7$ ✓. Check a second, independent way using the floor: $\\lfloor -7.6 \\rfloor = -8$, and for a non-integer the ceiling is exactly one more, $-8 + 1 = -7$ ✓. (The choice $-8$ is TAKING THE FLOOR WHEN THE CEILING WAS ASKED, and $-8$ is below $-7.6$ so it fails the definition ✗; the choice $8$ is IGNORING THE MINUS SIGN and taking the ceiling of $7.6$; the choice $7$ is IGNORING THE MINUS SIGN and taking the floor of $7.6$.)',
    },
    {
      q: 'What is $\\lceil -9.8 \\rceil$?',
      choices: ['$-10$', '$-9$', '$9$', '$10$'],
      answer: 1,
      solution:
        'Walk right from $-9.8$ until you hit an integer: the first one is $-9$, so $\\lceil -9.8 \\rceil = -9$ ✓. Check a second, independent way by testing candidates against the definition: is $-10 \\ge -9.8$? No, $-10$ is further left ✗. Is $-9 \\ge -9.8$? Yes ✓, and no integer between them exists, so $-9$ is the smallest that passes. (The choice $-10$ is TAKING THE FLOOR WHEN THE CEILING WAS ASKED — it also looks like "rounding up the $9.8$", which is exactly the trap ✗; the choice $10$ is IGNORING THE MINUS SIGN and taking the ceiling of $9.8$; the choice $9$ is IGNORING THE MINUS SIGN and taking the floor of $9.8$.)',
    },
    {
      q: 'What is $\\lceil -1.6 \\rceil$?',
      choices: ['$-2$', '$2$', '$1$', '$-1$'],
      answer: 3,
      solution:
        '$-1.6$ sits between $-2$ and $-1$, and the ceiling takes the one on the right: $\\lceil -1.6 \\rceil = -1$ ✓. Check a second, independent way with the leftover split: $-1.6 = -1 - 0.6$, so $-1$ is above $-1.6$ by $0.6$ ✓, and nothing smaller than $-1$ that is still above $-1.6$ is an integer. (The choice $-2$ is TAKING THE FLOOR WHEN THE CEILING WAS ASKED, and $-2$ lies below the number ✗; the choice $2$ is IGNORING THE MINUS SIGN and taking the ceiling of $1.6$; the choice $1$ is IGNORING THE MINUS SIGN and taking the floor of $1.6$.)',
    },
  ],
  // p6 — floor plus ceiling of the same non-integer: two consecutive integers.
  [
    {
      q: 'Compute $\\lfloor 8.4 \\rfloor + \\lceil 8.4 \\rceil$.',
      choices: ['$16$', '$17$', '$18$', '$16.8$'],
      answer: 1,
      solution:
        'Take the two pieces separately: $\\lfloor 8.4 \\rfloor = 8$ ✓ and $\\lceil 8.4 \\rceil = 9$ ✓, so the sum is $8 + 9 = 17$. Check a second, independent way by doubling: $2 \\times 8.4 = 16.8$, and the sum must be two consecutive integers straddling $8.4$, whose total is always ODD. The only odd integer next to $16.8$ is $17$ ✓ — the even choices $16$ and $18$ are ruled out before any floor is taken. (The choice $16$ is DOUBLING THE FLOOR, $8 + 8$; the choice $18$ is DOUBLING THE CEILING, $9 + 9$; the choice $16.8$ is ADDING THE NUMBER TO ITSELF and never rounding at all ✗.)',
    },
    {
      q: 'Compute $\\lfloor 12.2 \\rfloor + \\lceil 12.2 \\rceil$.',
      choices: ['$24$', '$26$', '$25$', '$24.4$'],
      answer: 2,
      solution:
        '$\\lfloor 12.2 \\rfloor = 12$ ✓ and $\\lceil 12.2 \\rceil = 13$ ✓, so the sum is $12 + 13 = 25$. Check a second, independent way by doubling: $2 \\times 12.2 = 24.4$, and because floor and ceiling of a non-integer are consecutive integers their sum is odd, so it must be $25$ rather than $24$ or $26$ ✓. Notice the tiny leftover $0.2$ does not change this — the ceiling jumps a full step no matter how small the leftover is. (The choice $24$ is DOUBLING THE FLOOR; the choice $26$ is DOUBLING THE CEILING; the choice $24.4$ is ADDING THE NUMBER TO ITSELF ✗.)',
    },
    {
      q: 'Compute $\\lfloor 16.4 \\rfloor + \\lceil 16.4 \\rceil$.',
      choices: ['$32$', '$34$', '$32.8$', '$33$'],
      answer: 3,
      solution:
        'Handle each piece on the number line. Floor moves left: $\\lfloor 16.4 \\rfloor = 16$ ✓. Ceiling moves right: $\\lceil 16.4 \\rceil = 17$ ✓. The sum is $16 + 17 = 33$. Check a second, independent way by using the shape of the answer rather than the arithmetic: whenever a number is not itself an integer, its floor and its ceiling are CONSECUTIVE integers, and two consecutive integers always add to an odd number — so the answer must be odd, which rules out $32$ and $34$ at a glance and leaves $33$ ✓. (The choice $32$ is DOUBLING THE FLOOR, $16 + 16$; the choice $34$ is DOUBLING THE CEILING, $17 + 17$; the choice $32.8$ is ADDING THE NUMBER TO ITSELF and forgetting that both brackets produce whole numbers ✗.)',
    },
  ],
  // p7 — a floor or ceiling equation describes an interval, not one value.
  [
    {
      q: 'If $\\lfloor x \\rfloor = 9$, which describes ALL possible values of $x$?',
      choices: ['$8 < x \\le 9$', '$9 \\le x < 10$', '$9 < x \\le 10$', '$x = 9$ only'],
      answer: 1,
      solution:
        'Saying the greatest integer at or below $x$ is $9$ means $x$ has reached $9$ but has not reached $10$: that is $9 \\le x < 10$ ✓. Check a second, independent way by testing the endpoints one at a time: $\\lfloor 9 \\rfloor = 9$ ✓ so $9$ belongs; $\\lfloor 9.8 \\rfloor = 9$ ✓ so everything inside belongs; $\\lfloor 10 \\rfloor = 10$ ✗ so $10$ is shut out; and $\\lfloor 8.6 \\rfloor = 8$ ✗ so nothing below $9$ belongs. (The choice $8 < x \\le 9$ is the set where the CEILING equals $9$, not the floor — INCLUDING THE WRONG ENDPOINT at both ends; the choice $9 < x \\le 10$ keeps $10$, whose floor is $10$ ✗, and throws away $9$ itself; the choice $x = 9$ only is PINNING THE VARIABLE TO ONE VALUE, forgetting the whole interval of decimals that floor down to $9$.)',
    },
    {
      q: 'If $\\lceil x \\rceil = 7$, which describes ALL possible values of $x$?',
      choices: ['$7 \\le x < 8$', '$7 < x \\le 8$', '$6 \\le x < 7$', '$6 < x \\le 7$'],
      answer: 3,
      solution:
        'Saying the smallest integer at or above $x$ is $7$ means $x$ has climbed past $6$ but has not gone beyond $7$: that is $6 < x \\le 7$ ✓. The right endpoint is included because an integer is its own ceiling, and the left endpoint is excluded because $\\lceil 6 \\rceil = 6$ ✗. Check a second, independent way by testing values: $\\lceil 6.2 \\rceil = 7$ ✓, $\\lceil 6.8 \\rceil = 7$ ✓, $\\lceil 7 \\rceil = 7$ ✓, but $\\lceil 6 \\rceil = 6$ ✗ and $\\lceil 7.2 \\rceil = 8$ ✗. (The choice $6 \\le x < 7$ has both endpoints backwards — it drops $7$ and keeps $6$; the choice $7 \\le x < 8$ is the set where the FLOOR equals $7$; the choice $7 < x \\le 8$ is the set where the ceiling equals $8$, one full step too high.)',
    },
    {
      q: 'If $\\lfloor x \\rfloor = -4$, which describes ALL possible values of $x$?',
      choices: ['$-4 \\le x < -3$', '$-5 < x \\le -4$', '$-4 < x \\le -3$', '$-5 \\le x < -4$'],
      answer: 0,
      solution:
        'The rule does not change sign: $\\lfloor x \\rfloor = n$ means $n \\le x < n + 1$, so with $n = -4$ we get $-4 \\le x < -3$ ✓. On the number line that is the stretch starting at $-4$ and running RIGHT toward $-3$, since $-3$ is greater than $-4$. Check a second, independent way by testing values: $\\lfloor -4 \\rfloor = -4$ ✓, $\\lfloor -3.6 \\rfloor = -4$ ✓, but $\\lfloor -3 \\rfloor = -3$ ✗ and $\\lfloor -4.2 \\rfloor = -5$ ✗. (The choice $-5 < x \\le -4$ is the set where the CEILING equals $-4$; the choice $-4 < x \\le -3$ INCLUDES THE WRONG ENDPOINT at both ends, keeping $-3$ and dropping $-4$; the choice $-5 \\le x < -4$ is the floor equalling $-5$, from sliding the interval the wrong way along the negative line.)',
    },
  ],
  // p8 — one floor of a negative plus one ceiling of a positive.
  [
    {
      q: 'Compute $\\lfloor -2.6 \\rfloor + \\lceil 7.2 \\rceil$.',
      choices: ['$6$', '$4$', '$-11$', '$5$'],
      answer: 3,
      solution:
        'Floor of $-2.6$ moves LEFT to $-3$ ✓. Ceiling of $7.2$ moves right to $8$ ✓. Adding: $-3 + 8 = 5$. Check a second, independent way by rewriting the sum as a distance: $8 - 3 = 5$, since adding $-3$ is the same as subtracting $3$ ✓ — same total, reached by counting down from $8$ instead of up from $-3$. (The choice $6$ is ROUNDING TOWARD ZERO on the first term, using $-2$ instead of $-3$; the choice $4$ is TAKING THE FLOOR WHEN THE CEILING WAS ASKED on the second term, using $7$; the choice $-11$ is SUBTRACTING INSTEAD OF ADDING, $-3 - 8$.)',
    },
    {
      q: 'Compute $\\lfloor -1.8 \\rfloor + \\lceil 10.4 \\rceil$.',
      choices: ['$10$', '$8$', '$9$', '$-13$'],
      answer: 2,
      solution:
        'Floor of $-1.8$ goes down the number line to $-2$ ✓ — note it does NOT stop at $-1$, which is above $-1.8$. Ceiling of $10.4$ goes up to $11$ ✓. Adding: $-2 + 11 = 9$. Check a second, independent way by counting: start at $11$ and step down twice, $11 \\to 10 \\to 9$ ✓. (The choice $10$ is ROUNDING TOWARD ZERO on the first term, using $-1$; the choice $8$ is TAKING THE FLOOR WHEN THE CEILING WAS ASKED on the second term, using $10$; the choice $-13$ is SUBTRACTING INSTEAD OF ADDING, $-2 - 11$.)',
    },
    {
      q: 'Compute $\\lfloor -7.4 \\rfloor + \\lceil 5.8 \\rceil$.',
      choices: ['$-2$', '$-1$', '$-3$', '$-14$'],
      answer: 0,
      solution:
        'Floor of $-7.4$ moves left to $-8$ ✓. Ceiling of $5.8$ moves up to $6$ ✓. Adding: $-8 + 6 = -2$. Check a second, independent way by comparing sizes: the negative term is larger in size than the positive one by $8 - 6 = 2$, so the total keeps the minus sign and is $-2$ ✓. (The choice $-1$ is ROUNDING TOWARD ZERO on the first term, using $-7$; the choice $-3$ is TAKING THE FLOOR WHEN THE CEILING WAS ASKED on the second term, using $5$; the choice $-14$ is SUBTRACTING INSTEAD OF ADDING, $-8 - 6$.)',
    },
  ],
  // p9 — "each unit or part of a unit" pricing: the ceiling sets the charge.
  [
    {
      q: 'A recording studio charges $\\$6$ for each hour or part of an hour. Kenji books the room for $3.4$ hours. What does he pay?',
      choices: ['$\\$18$', '$\\$24$', '$\\$21$', '$\\$20.40$'],
      answer: 1,
      solution:
        '"Each hour or part of an hour" means the studio rounds the TIME up before charging: $\\lceil 3.4 \\rceil = 4$ hours billed ✓, so Kenji pays $4 \\times \\$6 = \\$24$. Check a second, independent way by building the price ladder: $1$ hour costs $\\$6$, $2$ hours $\\$12$, $3$ hours $\\$18$, and the instant the clock ticks past $3$ hours the $4$-hour price of $\\$24$ takes over — $3.4$ is past $3$, so $\\$24$ ✓. (The choice $\\$18$ is CHARGING BY THE FLOOR, letting that extra $0.4$ of an hour ride free; the choice $\\$21$ is ROUNDING AT THE END INSTEAD OF THE START, computing $\\lceil 3.4 \\times 6 \\rceil = \\lceil 20.4 \\rceil$; the choice $\\$20.40$ is NOT ROUNDING AT ALL, $3.4 \\times \\$6$.)',
    },
    {
      q: 'A parking garage charges $\\$8$ for each hour or part of an hour. Mira leaves her car for $5.6$ hours. What does she pay?',
      choices: ['$\\$48$', '$\\$40$', '$\\$44.80$', '$\\$45$'],
      answer: 0,
      solution:
        'Round the hours up first: $\\lceil 5.6 \\rceil = 6$ hours billed ✓, so the charge is $6 \\times \\$8 = \\$48$. Check a second, independent way by asking what the garage would charge at $6$ hours flat and working backwards: $6$ hours costs $\\$48$, and any stay longer than $5$ hours but not past $6$ pays that same $\\$48$ — $5.6$ sits in exactly that band ✓. (The choice $\\$40$ is CHARGING BY THE FLOOR, $5 \\times \\$8$; the choice $\\$44.80$ is NOT ROUNDING AT ALL, $5.6 \\times \\$8$; the choice $\\$45$ is ROUNDING AT THE END INSTEAD OF THE START, computing $\\lceil 44.8 \\rceil$.)',
    },
    {
      q: 'A data plan bills $\\$9$ for each gigabyte or part of a gigabyte. Noor uses $2.6$ gigabytes this month. What does she pay?',
      choices: ['$\\$18$', '$\\$23.40$', '$\\$27$', '$\\$24$'],
      answer: 2,
      solution:
        'A part of a gigabyte is billed as a whole one, so round the data up first: $\\lceil 2.6 \\rceil = 3$ gigabytes billed ✓, and the bill is $3 \\times \\$9 = \\$27$. Check a second, independent way with the price ladder: $1$ GB costs $\\$9$, anything past $1$ GB costs $\\$18$, and anything past $2$ GB costs $\\$27$ — $2.6$ is past $2$, so $\\$27$ ✓. (The choice $\\$18$ is CHARGING BY THE FLOOR, $2 \\times \\$9$, which gives away $0.6$ GB; the choice $\\$23.40$ is NOT ROUNDING AT ALL, $2.6 \\times \\$9$; the choice $\\$24$ is ROUNDING AT THE END INSTEAD OF THE START, computing $\\lceil 23.4 \\rceil$.)',
    },
  ],
  // p10 — count the integers a floor or ceiling equation allows.
  [
    {
      q: 'How many integers $n$ satisfy $\\left\\lfloor \\frac{n}{5} \\right\\rfloor = 2$?',
      choices: ['$4$', '$5$', '$6$', 'Infinitely many'],
      answer: 1,
      solution:
        'Turn the floor into an inequality: $\\left\\lfloor \\frac{n}{5} \\right\\rfloor = 2$ means $2 \\le \\frac{n}{5} < 3$, and multiplying through by $5$ gives $10 \\le n < 15$. The integers there are $10$, $11$, $12$, $13$, $14$ — five of them ✓. Check a second, independent way by testing every candidate and its neighbours: $\\lfloor 10/5 \\rfloor = 2$ ✓, $\\lfloor 11/5 \\rfloor = \\lfloor 2.2 \\rfloor = 2$ ✓, $\\lfloor 12/5 \\rfloor = \\lfloor 2.4 \\rfloor = 2$ ✓, $\\lfloor 13/5 \\rfloor = \\lfloor 2.6 \\rfloor = 2$ ✓, $\\lfloor 14/5 \\rfloor = \\lfloor 2.8 \\rfloor = 2$ ✓, while $\\lfloor 9/5 \\rfloor = 1$ ✗ and $\\lfloor 15/5 \\rfloor = 3$ ✗ close both ends. (The choice $4$ is SUBTRACTING THE ENDPOINTS WITHOUT COUNTING BOTH, $14 - 10$; the choice $6$ is INCLUDING THE INTEGER THAT JUST MISSES, $n = 15$; the choice Infinitely many forgets that the interval is only $5$ wide.)',
    },
    {
      q: 'How many integers $n$ satisfy $\\left\\lceil \\frac{n}{8} \\right\\rceil = 3$?',
      choices: ['$7$', '$9$', '$8$', 'Infinitely many'],
      answer: 2,
      solution:
        'A ceiling equation gives the interval with the OTHER endpoint included: $\\left\\lceil \\frac{n}{8} \\right\\rceil = 3$ means $2 < \\frac{n}{8} \\le 3$, and multiplying by $8$ gives $16 < n \\le 24$. The integers are $17$ through $24$ ✓. Check a second, independent way by counting with a shift: $17$ through $24$ is the same size list as $1$ through $8$ once you subtract $16$ from every entry, so there are $8$ of them ✓. The ends confirm it: $\\lceil 17/8 \\rceil = \\lceil 2.125 \\rceil = 3$ ✓, $\\lceil 24/8 \\rceil = \\lceil 3 \\rceil = 3$ ✓, but $\\lceil 16/8 \\rceil = 2$ ✗ and $\\lceil 25/8 \\rceil = 4$ ✗. (The choice $7$ is SUBTRACTING THE ENDPOINTS WITHOUT COUNTING BOTH, $24 - 17$; the choice $9$ is INCLUDING THE INTEGER THAT JUST MISSES, $n = 16$, whose quotient $2$ is already an integer and so has ceiling $2$; the choice Infinitely many ignores that the interval is only $8$ wide.)',
    },
    {
      q: 'How many integers $n$ satisfy $\\left\\lfloor \\frac{n}{9} \\right\\rfloor = -2$?',
      choices: ['$8$', '$10$', 'Infinitely many', '$9$'],
      answer: 3,
      solution:
        'The same rule works below zero: $\\left\\lfloor \\frac{n}{9} \\right\\rfloor = -2$ means $-2 \\le \\frac{n}{9} < -1$, and multiplying by the positive number $9$ keeps the direction of both signs: $-18 \\le n < -9$. The integers are $-18$ through $-10$, which is $9$ of them ✓. Check a second, independent way by testing the ends: $\\lfloor -18/9 \\rfloor = \\lfloor -2 \\rfloor = -2$ ✓, $\\lfloor -10/9 \\rfloor = \\lfloor -1.11\\ldots \\rfloor = -2$ ✓ (down means left!), while $\\lfloor -19/9 \\rfloor = -3$ ✗ and $\\lfloor -9/9 \\rfloor = -1$ ✗. Counting $-18$ up to $-10$ matches counting $10$ up to $18$, which is $9$ numbers ✓. (The choice $8$ is SUBTRACTING THE ENDPOINTS WITHOUT COUNTING BOTH, $-10 - (-18)$; the choice $10$ is INCLUDING THE INTEGER THAT JUST MISSES, $n = -9$; the choice Infinitely many ignores that the interval is only $9$ wide.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 20,
  sections: {
    '20.3': s203,
  },
}
