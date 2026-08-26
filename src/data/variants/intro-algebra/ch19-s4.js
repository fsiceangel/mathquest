// Introduction to Algebra chapter 19 — variations for section 19.4
// (What is a Logarithm?). All problems and solutions are original MathQuest
// content.
//
// House rules for this file:
//  - Every key was worked twice. First by the definition: $\log_b a = c$ means
//    exactly $b^c = a$, so every solution converts the log into a power and
//    reads the exponent off. Then by a second, independent route — raising the
//    base to the keyed answer and confirming the argument comes back, walking
//    the powers of the base up (or down) one step at a time, counting zeros,
//    or evaluating each term of a sum on its own.
//  - Every answer here is an exact whole number or an exact simple fraction.
//    No logarithm in this file is left approximate.
//  - Each distractor is one named mistake, named at the end of the solution,
//    and that mistake really does produce that choice. The traps running
//    through this section are: SWAPPING THE BASE AND THE ARGUMENT, DIVIDING
//    THE ARGUMENT BY THE BASE instead of raising the base to a power,
//    ANSWERING THE ARGUMENT ITSELF, COUNTING THE DIGITS instead of the zeros,
//    ANSWERING $1$ INSTEAD OF $0$ for the log of $1$, ANSWERING THE BASE
//    ITSELF, DROPPING THE SIGN of a negative logarithm, TURNING A FRACTION
//    INSIDE INTO A FRACTION ANSWER, MULTIPLYING $b \cdot c$ instead of
//    computing $b^c$, ADDING $b + c$, ADDING THE INSIDE NUMBERS of two logs,
//    ANSWERING THE PRODUCT instead of its exponent, and STOPPING AT THE INNER
//    LOG of a nested expression.
//  - No two choices inside an item name the same number.

const s194 = [
  // p1 — plain evaluation: ask "the base to WHAT power?"
  [
    {
      q: 'Evaluate $\\log_7 49$.',
      choices: ['$7$', '$49$', '$\\frac{1}{2}$', '$2$'],
      answer: 3,
      solution:
        'A logarithm asks one question: $7$ raised to what power gives $49$? Since $7^2 = 49$, the exponent is $2$, so $\\log_7 49 = 2$. Check a second, independent way by walking the powers of $7$ up from the start and stopping the moment $49$ appears: $7^1 = 7$, $7^2 = 49$ ✓ — two steps, so the log is $2$. (The choice $7$ is DIVIDING THE ARGUMENT BY THE BASE, $49 \\div 7$, which answers "$7$ times what gives $49$" rather than "$7$ to what power"; the choice $49$ is ANSWERING THE ARGUMENT ITSELF; the choice $\\frac{1}{2}$ is SWAPPING THE BASE AND THE ARGUMENT, since $\\log_{49} 7 = \\frac{1}{2}$.)',
    },
    {
      q: 'Evaluate $\\log_2 16$.',
      choices: ['$8$', '$5$', '$4$', '$16$'],
      answer: 2,
      solution:
        'Ask: $2$ raised to what power gives $16$? Since $2^4 = 16$, the answer is $4$. Check a second, independent way by doubling from $1$ and counting the doublings: $1 \\to 2 \\to 4 \\to 8 \\to 16$, which is four doublings ✓. (The choice $8$ is DIVIDING THE ARGUMENT BY THE BASE, $16 \\div 2$; the choice $5$ counts the five NUMBERS written in the chain $1, 2, 4, 8, 16$ instead of the four arrows between them; the choice $16$ is ANSWERING THE ARGUMENT ITSELF.)',
    },
    {
      q: 'Evaluate $\\log_3 27$.',
      choices: ['$3$', '$9$', '$27$', '$\\frac{1}{3}$'],
      answer: 0,
      solution:
        'Ask: $3$ raised to what power gives $27$? Since $3^3 = 27$, the answer is $3$. Check a second, independent way by building $27$ out of threes: $27 = 3 \\cdot 3 \\cdot 3$, and three factors of $3$ means the exponent is $3$ ✓. (The choice $9$ is DIVIDING THE ARGUMENT BY THE BASE, $27 \\div 3$; the choice $27$ is ANSWERING THE ARGUMENT ITSELF; the choice $\\frac{1}{3}$ is SWAPPING THE BASE AND THE ARGUMENT, since $\\log_{27} 3 = \\frac{1}{3}$.)',
    },
  ],
  // p2 — the two costumes: b^c = a and log_b a = c say the same thing.
  [
    {
      q: 'Which equation says the same thing as $6^3 = 216$?',
      choices: ['$\\log_3 216 = 6$', '$\\log_6 216 = 3$', '$\\log_{216} 6 = 3$', '$\\log_6 3 = 216$'],
      answer: 1,
      solution:
        'The rule is $b^c = a$ becomes $\\log_b a = c$: the base stays the base, the big result becomes the argument, and the log EQUALS the exponent. Here $b = 6$, $c = 3$, and $a = 216$, so the log form is $\\log_6 216 = 3$. Check a second, independent way by reading the answer back as a question: $\\log_6 216$ asks "$6$ to what power gives $216$?" and $6 \\cdot 6 \\cdot 6 = 216$, so the value really is $3$ ✓. (The choice $\\log_3 216 = 6$ SWAPS THE BASE AND THE EXPONENT; the choice $\\log_{216} 6 = 3$ makes the big result the base; the choice $\\log_6 3 = 216$ puts the exponent inside the log and the result outside, exactly backwards.)',
    },
    {
      q: 'Which equation says the same thing as $\\log_2 128 = 7$?',
      choices: ['$7^2 = 128$', '$2^{128} = 7$', '$2^7 = 128$', '$128^7 = 2$'],
      answer: 2,
      solution:
        'Run the conversion the other way: $\\log_b a = c$ becomes $b^c = a$. The base of the log is $2$, the value of the log is the exponent $7$, and the argument $128$ is the result, so the exponential form is $2^7 = 128$. Check a second, independent way by computing that power: $2, 4, 8, 16, 32, 64, 128$ — seven doublings from $1$ land exactly on $128$ ✓. (The choice $7^2 = 128$ SWAPS THE BASE AND THE EXPONENT, and $7^2$ is only $49$; the choice $2^{128} = 7$ treats the argument as the exponent; the choice $128^7 = 2$ makes the argument the base.)',
    },
    {
      q: 'Which equation says the same thing as $7^4 = 2401$?',
      choices: ['$\\log_{2401} 7 = 4$', '$\\log_7 4 = 2401$', '$\\log_4 2401 = 7$', '$\\log_7 2401 = 4$'],
      answer: 3,
      solution:
        'Convert with $b^c = a \\Rightarrow \\log_b a = c$. The base is $7$, the result is $2401$, and the exponent is $4$, so the log form is $\\log_7 2401 = 4$. Check a second, independent way by asking the log question out loud: $\\log_7 2401$ asks "$7$ to what power gives $2401$?" and stepping up gives $7, 49, 343, 2401$ — four steps ✓. (The choice $\\log_{2401} 7 = 4$ makes the result the base; the choice $\\log_7 4 = 2401$ puts the exponent inside the log; the choice $\\log_4 2401 = 7$ SWAPS THE BASE AND THE EXPONENT.)',
    },
  ],
  // p3 — base-10 logs count zeros, not digits.
  [
    {
      q: 'Evaluate $\\log_{10} 100000$.',
      choices: ['$6$', '$10000$', '$5$', '$\\frac{1}{5}$'],
      answer: 2,
      solution:
        'Ask: $10$ to what power gives $100000$? A power of $10$ is a $1$ followed by that many zeros, and $100000$ has five zeros, so $100000 = 10^5$ and the log is $5$. Check a second, independent way by multiplying by $10$ from the start and counting: $1 \\to 10 \\to 100 \\to 1000 \\to 10000 \\to 100000$, which is five multiplications ✓. (The choice $6$ is COUNTING THE DIGITS — $100000$ has six digits but only five zeros; the choice $10000$ is DIVIDING THE ARGUMENT BY THE BASE; the choice $\\frac{1}{5}$ is SWAPPING THE BASE AND THE ARGUMENT, since $\\log_{100000} 10 = \\frac{1}{5}$.)',
    },
    {
      q: 'Mia writes down a number that is a $1$ followed by $8$ zeros. What is the base-$10$ logarithm of her number?',
      choices: ['$8$', '$9$', '$100000000$', '$\\frac{1}{8}$'],
      answer: 0,
      solution:
        'Each zero on a power of $10$ is one more factor of $10$, so a $1$ followed by $8$ zeros is $10^8$. The logarithm asks for the exponent, and the exponent is $8$. Check a second, independent way by converting back with the definition: $\\log_{10} a = 8$ means $a = 10^8$, and writing $10^8$ out gives $1$ followed by eight zeros ✓ — exactly Mia’s number. (The choice $9$ is COUNTING THE DIGITS, since the number has nine digits in all; the choice $100000000$ is ANSWERING THE ARGUMENT ITSELF instead of its exponent; the choice $\\frac{1}{8}$ is SWAPPING THE BASE AND THE ARGUMENT.)',
    },
    {
      q: 'Evaluate $\\log_{10} 10000000$.',
      choices: ['$8$', '$1000000$', '$\\frac{1}{7}$', '$7$'],
      answer: 3,
      solution:
        'Ask: $10$ to what power gives $10000000$? Count the zeros — there are seven of them — so $10000000 = 10^7$ and the log is $7$. Check a second, independent way by raising the base to the answer and seeing whether the argument comes back: $10^7$ is $10$ multiplied by itself seven times, which builds $10, 100, 1000, 10000, 100000, 1000000, 10000000$ ✓. (The choice $8$ is COUNTING THE DIGITS rather than the zeros; the choice $1000000$ is DIVIDING THE ARGUMENT BY THE BASE; the choice $\\frac{1}{7}$ is SWAPPING THE BASE AND THE ARGUMENT.)',
    },
  ],
  // p4 — the freebie log_b b = 1.
  [
    {
      q: 'Evaluate $\\log_{12} 12$.',
      choices: ['$12$', '$1$', '$0$', '$144$'],
      answer: 1,
      solution:
        'Ask: $12$ to what power gives $12$? The first power leaves a number alone, so $12^1 = 12$ and the log is $1$. Check a second, independent way with the definition run backwards: $\\log_{12} 12 = c$ means $12^c = 12$, and the only exponent that leaves $12$ unchanged is $c = 1$ ✓. This is one of the two freebies: $\\log_b b = 1$ for every legal base. (The choice $12$ is ANSWERING THE BASE ITSELF; the choice $0$ is confusing this freebie with the other one, $\\log_b 1 = 0$; the choice $144$ is $12^2$, raising the base instead of naming the exponent.)',
    },
    {
      q: 'Evaluate $\\log_{100} 100$.',
      choices: ['$100$', '$0$', '$2$', '$1$'],
      answer: 3,
      solution:
        'A big-looking base changes nothing. Ask: $100$ to what power gives $100$? The answer is the first power, $100^1 = 100$, so $\\log_{100} 100 = 1$. Check a second, independent way by converting to exponential form: $\\log_{100} 100 = c$ means $100^c = 100$, which forces $c = 1$ ✓. (The choice $100$ is ANSWERING THE BASE ITSELF; the choice $0$ mixes this up with $\\log_b 1 = 0$; the choice $2$ reads the base as $10$ and computes $\\log_{10} 100$ instead — a different question with a different base.)',
    },
    {
      q: 'Kai notices that whenever he takes the logarithm of a number in that same number’s own base, he always gets the same answer. What is that answer?',
      choices: ['$1$', '$0$', '$b$', '$\\frac{1}{b}$'],
      answer: 0,
      solution:
        'Kai is asking about $\\log_b b$ for a legal base $b$. Written as a power question it says: $b$ to what power gives $b$? The first power does it, since $b^1 = b$, so the answer is $1$ no matter which base he picks. Check a second, independent way by testing two very different bases: $\\log_3 3 = 1$ because $3^1 = 3$, and $\\log_{40} 40 = 1$ because $40^1 = 40$ ✓ — same answer both times, as Kai noticed. (The choice $0$ is the value of $\\log_b 1$, the OTHER freebie; the choice $b$ is ANSWERING THE BASE ITSELF; the choice $\\frac{1}{b}$ treats the logarithm as though it undid the base by dividing.)',
    },
  ],
  // p5 — the freebie log_b 1 = 0.
  [
    {
      q: 'Evaluate $\\log_{11} 1$.',
      choices: ['$0$', '$1$', '$11$', '$-1$'],
      answer: 0,
      solution:
        'Ask: $11$ to what power gives $1$? The zero power turns every legal base into $1$, so $11^0 = 1$ and $\\log_{11} 1 = 0$. Check a second, independent way by testing the rival answers against the definition: $11^1 = 11$ ✗ and $11^{-1} = \\frac{1}{11}$ ✗, while $11^0 = 1$ ✓ — only the exponent $0$ lands on $1$. (The choice $1$ is ANSWERING $1$ INSTEAD OF $0$, the classic mix-up of $\\log_b 1$ with $\\log_b b$; the choice $11$ is ANSWERING THE BASE ITSELF; the choice $-1$ assumes a small-looking argument must force a negative exponent, but $11^{-1}$ is $\\frac{1}{11}$, not $1$.)',
    },
    {
      q: 'Which of these logarithms is equal to $0$?',
      choices: ['$\\log_7 7$', '$\\log_{16} 4$', '$\\log_{30} 1$', '$\\log_3 9$'],
      answer: 2,
      solution:
        'A logarithm is $0$ exactly when the base raised to the zero power gives the argument, and $b^0 = 1$ for every legal base — so the argument has to be $1$. The only choice with $1$ inside is $\\log_{30} 1$, and $30^0 = 1$ ✓. Check a second, independent way by evaluating all four and confirming just one is $0$: $\\log_7 7 = 1$ since $7^1 = 7$; $\\log_{16} 4 = \\frac{1}{2}$ since $16^{1/2} = 4$; $\\log_{30} 1 = 0$ ✓; and $\\log_3 9 = 2$ since $3^2 = 9$. Four different values, one match. (The choice $\\log_7 7$ is the OTHER freebie and equals $1$, not $0$; the choice $\\log_{16} 4$ tempts anyone who thinks a small argument means a small log; the choice $\\log_3 9$ is a plain whole-number log with nothing special about it.)',
    },
    {
      q: 'Evaluate $\\log_{50} 1$.',
      choices: ['$50$', '$1$', '$\\frac{1}{50}$', '$0$'],
      answer: 3,
      solution:
        'Ask: $50$ to what power gives $1$? Any legal base raised to the zero power is $1$, so $50^0 = 1$ and $\\log_{50} 1 = 0$. Check a second, independent way by stepping the powers of $50$ down: $50^2 = 2500$, $50^1 = 50$, and one step further down is $50^0 = 1$ ✓ — the exponent that reaches $1$ is $0$. (The choice $50$ is ANSWERING THE BASE ITSELF; the choice $1$ is ANSWERING $1$ INSTEAD OF $0$, copying the argument straight out; the choice $\\frac{1}{50}$ is COPYING THE TWO NUMBERS INTO A FRACTION rather than answering the exponent question.)',
    },
  ],
  // p6 — an argument below 1 forces a NEGATIVE logarithm.
  [
    {
      q: 'Evaluate $\\log_5 \\frac{1}{25}$.',
      choices: ['$2$', '$-\\frac{1}{2}$', '$-2$', '$-5$'],
      answer: 2,
      solution:
        'Ask: $5$ to what power gives $\\frac{1}{25}$? Positive exponents make $5$ grow, so the answer has to be negative, and a negative exponent makes a reciprocal: $5^{-2} = \\frac{1}{5^2} = \\frac{1}{25}$. So $\\log_5 \\frac{1}{25} = -2$. Check a second, independent way by stepping the powers of $5$ downward past zero: $5^1 = 5$, $5^0 = 1$, $5^{-1} = \\frac{1}{5}$, $5^{-2} = \\frac{1}{25}$ ✓ — the exponent that lands on $\\frac{1}{25}$ is $-2$. The sign is right because the argument sits below $1$. (The choice $2$ is DROPPING THE SIGN, and $5^2 = 25$, not $\\frac{1}{25}$; the choice $-\\frac{1}{2}$ is TURNING THE FRACTION INSIDE INTO A FRACTION ANSWER; the choice $-5$ attaches the minus to the BASE instead of naming the exponent.)',
    },
    {
      q: 'Evaluate $\\log_8 \\frac{1}{8}$.',
      choices: ['$-1$', '$1$', '$0$', '$-8$'],
      answer: 0,
      solution:
        'Ask: $8$ to what power gives $\\frac{1}{8}$? Flipping a base upside down is exactly what the exponent $-1$ does: $8^{-1} = \\frac{1}{8}$, so $\\log_8 \\frac{1}{8} = -1$. Check a second, independent way by testing the rivals against the definition: $8^1 = 8$ ✗, $8^0 = 1$ ✗, and $8^{-1} = \\frac{1}{8}$ ✓ — only $-1$ works, and the answer is negative because $\\frac{1}{8}$ is below $1$. (The choice $1$ is DROPPING THE SIGN and gives $8$, not $\\frac{1}{8}$; the choice $0$ spots the $1$ on top of the fraction and answers as though the argument were $1$; the choice $-8$ attaches the minus to the base.)',
    },
    {
      q: 'Evaluate $\\log_3 \\frac{1}{27}$.',
      choices: ['$3$', '$-\\frac{1}{3}$', '$-27$', '$-3$'],
      answer: 3,
      solution:
        'Ask: $3$ to what power gives $\\frac{1}{27}$? Since $27 = 3^3$, the reciprocal $\\frac{1}{27}$ is $3^{-3}$, so $\\log_3 \\frac{1}{27} = -3$. Check a second, independent way by raising the base to the keyed answer and seeing whether the argument returns: $3^{-3} = \\frac{1}{3^3} = \\frac{1}{27}$ ✓. The sign is negative, as it must be for an argument below $1$. (The choice $3$ is DROPPING THE SIGN, and $3^3 = 27$ rather than $\\frac{1}{27}$; the choice $-\\frac{1}{3}$ is TURNING THE FRACTION INSIDE INTO A FRACTION ANSWER; the choice $-27$ is ANSWERING THE ARGUMENT’S DENOMINATOR with a minus sign stuck on.)',
    },
  ],
  // p7 — a root makes the logarithm a FRACTION.
  [
    {
      q: 'Evaluate $\\log_9 3$.',
      choices: ['$2$', '$3$', '$-\\frac{1}{2}$', '$\\frac{1}{2}$'],
      answer: 3,
      solution:
        'Ask: $9$ to what power gives $3$? The argument is smaller than the base but still bigger than $1$, so the exponent is a fraction between $0$ and $1$. A one-half power is a square root: $9^{1/2} = \\sqrt{9} = 3$, so $\\log_9 3 = \\frac{1}{2}$. Check a second, independent way by squaring the answer’s effect — applying the exponent $\\frac{1}{2}$ twice multiplies the exponents to $1$, and indeed $3^2 = 9$ brings the base back ✓. (The choice $2$ is SWAPPING THE BASE AND THE ARGUMENT, since $\\log_3 9 = 2$; the choice $3$ is DIVIDING THE ARGUMENT INTO THE BASE, $9 \\div 3$; the choice $-\\frac{1}{2}$ assumes an argument below the base forces a negative exponent, but negatives only appear when the argument drops below $1$.)',
    },
    {
      q: 'Evaluate $\\log_{25} 5$.',
      choices: ['$\\frac{1}{2}$', '$2$', '$5$', '$\\frac{1}{5}$'],
      answer: 0,
      solution:
        'Ask: $25$ to what power gives $5$? Since $5$ is the square root of $25$, and a square root is the one-half power, $25^{1/2} = 5$ and $\\log_{25} 5 = \\frac{1}{2}$. Check a second, independent way by raising the base to the keyed answer directly: $25^{1/2} = \\sqrt{25} = 5$ ✓, exactly the argument. (The choice $2$ is SWAPPING THE BASE AND THE ARGUMENT, since $\\log_5 25 = 2$; the choice $5$ is DIVIDING THE ARGUMENT INTO THE BASE, $25 \\div 5$; the choice $\\frac{1}{5}$ is COPYING THE ARGUMENT INTO A FRACTION instead of finding the exponent.)',
    },
    {
      q: 'Evaluate $\\log_8 2$.',
      choices: ['$4$', '$\\frac{1}{3}$', '$3$', '$\\frac{1}{4}$'],
      answer: 1,
      solution:
        'Ask: $8$ to what power gives $2$? Here $2$ is the cube root of $8$, and a cube root is the one-third power: $8^{1/3} = 2$, so $\\log_8 2 = \\frac{1}{3}$. Check a second, independent way by raising the base to the keyed answer and confirming the argument comes back: $8^{1/3}$ asks for the number whose cube is $8$, and $2 \\cdot 2 \\cdot 2 = 8$ ✓. (The choice $4$ is DIVIDING THE ARGUMENT INTO THE BASE, $8 \\div 2$; the choice $3$ is SWAPPING THE BASE AND THE ARGUMENT, since $\\log_2 8 = 3$; the choice $\\frac{1}{4}$ divides first and then flips, combining both slips.)',
    },
  ],
  // p8 — solve for the ARGUMENT by converting to exponential form.
  [
    {
      q: 'Solve for $x$: $\\log_3 x = 4$.',
      choices: ['$81$', '$12$', '$64$', '$7$'],
      answer: 0,
      solution:
        'Convert the log equation into exponential form with the definition: $\\log_3 x = 4$ means $3^4 = x$. The base is $3$ and the exponent is $4$, so $x = 3 \\cdot 3 \\cdot 3 \\cdot 3 = 81$. Check a second, independent way by putting the answer back into the original question: $\\log_3 81$ asks "$3$ to what power gives $81$?" and stepping up gives $3, 9, 27, 81$ — four steps ✓. (The choice $12$ is MULTIPLYING $3 \\cdot 4$ instead of computing $3^4$; the choice $64$ SWAPS THE BASE AND THE EXPONENT, giving $4^3$; the choice $7$ is ADDING $3 + 4$.)',
    },
    {
      q: 'Solve for $x$: $\\log_5 x = 3$.',
      choices: ['$15$', '$243$', '$125$', '$8$'],
      answer: 2,
      solution:
        'Rewrite in exponential form: $\\log_5 x = 3$ means $5^3 = x$, so $x = 5 \\cdot 5 \\cdot 5 = 125$. Check a second, independent way by feeding the answer back to the log: $\\log_5 125$ asks "$5$ to what power gives $125$?" and $5, 25, 125$ is three steps ✓. Notice which slot the unknown sits in — here the base is known and the ARGUMENT is missing, so the base gets raised to the given exponent. (The choice $15$ is MULTIPLYING $5 \\cdot 3$; the choice $243$ SWAPS THE BASE AND THE EXPONENT, giving $3^5$; the choice $8$ is ADDING $5 + 3$.)',
    },
    {
      q: 'A number $x$ satisfies $\\log_{12} x = 2$. What is $x$?',
      choices: ['$24$', '$144$', '$14$', '$4096$'],
      answer: 1,
      solution:
        'The equation says the base $12$ raised to the exponent $2$ gives $x$, so $x = 12^2 = 144$. Check a second, independent way by asking the log question of the answer: $\\log_{12} 144$ asks "$12$ to what power gives $144$?" and $12 \\cdot 12 = 144$, so the value is $2$ ✓ — the equation we were handed. (The choice $24$ is MULTIPLYING $12 \\cdot 2$ instead of squaring; the choice $14$ is ADDING $12 + 2$; the choice $4096$ SWAPS THE BASE AND THE EXPONENT, giving $2^{12}$.)',
    },
  ],
  // p9 — a sum of logs is the log of the PRODUCT.
  [
    {
      q: 'Evaluate $\\log_{10} 20 + \\log_{10} 50$.',
      choices: ['$70$', '$1000$', '$4$', '$3$'],
      answer: 3,
      solution:
        'Neither piece is a whole number on its own, so use the property that logs turn products into sums: $\\log_{10} 20 + \\log_{10} 50 = \\log_{10} (20 \\cdot 50) = \\log_{10} 1000$. The product really is a clean power of the base, since $1000$ is a $1$ with three zeros, so $1000 = 10^3$ and the value is $3$. Check a second, independent way by converting the answer back with the definition: $10^3 = 1000$, and $1000$ is exactly $20 \\cdot 50$ ✓. (The choice $70$ is ADDING THE INSIDE NUMBERS, $20 + 50$ — logs turn products into sums, never sums into sums; the choice $1000$ is ANSWERING THE PRODUCT instead of its exponent; the choice $4$ is COUNTING THE DIGITS of $1000$ rather than its three zeros.)',
    },
    {
      q: 'Evaluate $\\log_8 4 + \\log_8 16$.',
      choices: ['$20$', '$64$', '$2$', '$\\frac{4}{3}$'],
      answer: 2,
      solution:
        'By the product property, $\\log_8 4 + \\log_8 16 = \\log_8 (4 \\cdot 16) = \\log_8 64$. That product is a clean power of the base: $8^2 = 64$, so the value is $2$. Check a second, independent way by evaluating each term on its own, which is possible here: $8^{2/3} = (8^{1/3})^2 = 2^2 = 4$, so $\\log_8 4 = \\frac{2}{3}$; and $8^{4/3} = (8^{1/3})^4 = 2^4 = 16$, so $\\log_8 16 = \\frac{4}{3}$. Then $\\frac{2}{3} + \\frac{4}{3} = \\frac{6}{3} = 2$ ✓ — the same answer by a completely different road. (The choice $20$ is ADDING THE INSIDE NUMBERS, $4 + 16$; the choice $64$ is ANSWERING THE PRODUCT instead of its exponent; the choice $\\frac{4}{3}$ is STOPPING AFTER ONE TERM and reporting only $\\log_8 16$.)',
    },
    {
      q: 'Evaluate $\\log_6 8 + \\log_6 27$.',
      choices: ['$3$', '$35$', '$216$', '$2$'],
      answer: 0,
      solution:
        'Combine with the product property: $\\log_6 8 + \\log_6 27 = \\log_6 (8 \\cdot 27) = \\log_6 216$. Confirm the product is a clean power of the base before trusting it: $6^1 = 6$, $6^2 = 36$, $6^3 = 216$ ✓. So the value is $3$. Check a second, independent way by converting the answer back with the definition: $6^3 = 216$, and $216 = 8 \\cdot 27$ ✓. Neither term is a whole number alone, which is exactly why the product property is the tool here. (The choice $35$ is ADDING THE INSIDE NUMBERS, $8 + 27$; the choice $216$ is ANSWERING THE PRODUCT instead of its exponent; the choice $2$ stops one power short, answering as though the product were $36$.)',
    },
  ],
  // p10 — nested logs: settle the inner one completely, then the outer.
  [
    {
      q: 'Evaluate $\\log_2 \\left(\\log_5 625\\right)$.',
      choices: ['$4$', '$2$', '$10$', '$16$'],
      answer: 1,
      solution:
        'Work from the inside out, and write the inner value down before touching anything else. Inner: $\\log_5 625$ asks "$5$ to what power gives $625$?" and $5, 25, 125, 625$ is four steps, so $\\log_5 625 = 4$. The expression is now $\\log_2 4$. Outer: $2^2 = 4$, so the value is $2$. Check a second, independent way by rebuilding the whole expression from the answer: $2^2 = 4$ and $5^4 = 625$ ✓, which is exactly what was written. (The choice $4$ is STOPPING AT THE INNER LOG; the choice $10$ MULTIPLIES THE TWO BASES, $2 \\cdot 5$; the choice $16$ raises the outer base to the inner value, computing $2^4$ instead of taking a logarithm.)',
    },
    {
      q: 'Evaluate $\\log_6 \\left(\\log_3 729\\right)$.',
      choices: ['$6$', '$0$', '$18$', '$1$'],
      answer: 3,
      solution:
        'Settle the inner logarithm first. Inner: $\\log_3 729$ asks "$3$ to what power gives $729$?" and stepping up gives $3, 9, 27, 81, 243, 729$ — six steps, so $\\log_3 729 = 6$. The expression is now $\\log_6 6$, and a base logged in its own base is $1$, since $6^1 = 6$. So the value is $1$. Check a second, independent way by rebuilding from the answer: $6^1 = 6$ and $3^6 = 729$ ✓. (The choice $6$ is STOPPING AT THE INNER LOG; the choice $0$ confuses $\\log_6 6$ with $\\log_6 1$; the choice $18$ MULTIPLIES THE TWO BASES, $6 \\cdot 3$.)',
    },
    {
      q: 'Evaluate $\\log_3 \\left(\\log_2 512\\right)$.',
      choices: ['$2$', '$9$', '$6$', '$3$'],
      answer: 0,
      solution:
        'Evaluate the inner logarithm on its own first. Inner: $\\log_2 512$ asks "$2$ to what power gives $512$?" and the doublings run $2, 4, 8, 16, 32, 64, 128, 256, 512$ — nine of them, so $\\log_2 512 = 9$. The expression is now $\\log_3 9$, and $3^2 = 9$, so the value is $2$. Check a second, independent way by rebuilding from the answer: $3^2 = 9$ and $2^9 = 512$ ✓. (The choice $9$ is STOPPING AT THE INNER LOG; the choice $6$ MULTIPLIES THE TWO BASES, $3 \\cdot 2$; the choice $3$ DIVIDES THE INNER VALUE BY THE OUTER BASE, $9 \\div 3$, instead of taking a logarithm.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 19,
  sections: {
    '19.4': s194,
  },
}
