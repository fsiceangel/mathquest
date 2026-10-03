import re, math
import sympy as s

def model(q,choices,maths,number,expr):
    low=q.lower();ms=maths(q)
    def nums():return [number(t) for t in ms]
    def out(v,why):return v,why
    def primeproduct(t):
        text=maths(t)[0];parts=re.split(r'\\(?:cdot|times)',text)
        bases=[]
        for part in parts:
            m=re.fullmatch(r'\s*(\d+)\s*(?:\^\{?(\d+)\}?)?\s*',part);assert m
            if m[2] and int(m[2])<1:return False
            bases.append(int(m[1]))
        return all(s.isprime(n) for n in bases)
    if re.fullmatch(r'(?:what is|write) the prime factorization of \$.*?\$(?: using exponents)?[.?]',low) and len(ms)==1:
        n=number(ms[0])
        return out(lambda t:primeproduct(t) and number(maths(t)[0])==n,'every displayed base must be prime, and exact product must reconstruct the given integer')
    if not ms and ('which' in low or 'in which' in low) and ('every factor prime' in low or 'every factor prime' in low.replace(' is ', ' ') or 'every factor prime' in low.replace(' is ', ' ') or 'every factor is prime' in low or 'every factor prime' in low or 'prime factorizations' in low or 'cannot be broken down any further' in low):
        invert=' not' in low
        return out(lambda t: primeproduct(t)!=invert,'test primality of every factor in every offered factorization, respecting NOT')
    if len(ms)==1 and re.fullmatch(r'(?:which number has the prime factorization \$.*?\$\?|the prime factorization of a number is \$.*?\$\. what is the number\?)',low):return out(number(ms[0]),'multiply the explicitly provided prime powers')
    if len(ms)==2 and 'has prime factorization' in low and 'how many divisors' in low:
        candidates=[number(t) for t in ms if re.search(r'\d',t)]
        if len(candidates)==1:return out(s.divisor_count(candidates[0]),'factor the specified integer independently and count positive divisors')
    if len(ms)==1 and re.fullmatch(r'a number has prime factorization \$.*?\$\. how many divisors does it have\?',low):return out(s.divisor_count(number(ms[0])),'factor the specified integer independently and count positive divisors')
    if len(ms)==1 and re.fullmatch(r'how many divisors of \$.*?\$ are perfect squares\?',low):
        return out(s.Integer(sum(s.sqrt(d).is_integer for d in s.divisors(number(ms[0])))),'enumerate positive divisors and test exact integer square roots')
    if len(ms)>=1 and re.fullmatch(r'how many divisors of \$.*?\$ are perfect cubes\? \(a perfect cube is a number of the form \$.*?\$\.\)',low):
        n=number(ms[0]);return out(s.Integer(math.prod(e//3+1 for e in s.factorint(n).values())),'prime exponents of a cube must each be multiples of three')
    if len(ms)==1 and re.fullmatch(r'what is the smallest whole number with exactly \$.*?\$ divisors\?',low):
        target=int(number(ms[0]));n=1
        while s.divisor_count(n)!=target:n+=1
        return out(s.Integer(n),'enumerate positive integers from 1 upward, stopping at first target divisor count; zero has infinitely many divisors')
    if len(ms)==2 and re.fullmatch(r'how many whole numbers less than \$.*?\$ have exactly \$.*?\$ divisors\?',low):
        n,k=map(int,nums());return out(s.Integer(sum(s.divisor_count(i)==k for i in range(1,n))),'enumerate positive integers below strict bound; zero cannot have finitely many divisors')
    if len(ms)==3 and re.fullmatch(r'how many whole numbers from \$.*?\$ to \$.*?\$ have exactly \$.*?\$ divisors\?',low):
        a,b,k=map(int,nums());return out(s.Integer(sum(s.divisor_count(i)==k for i in range(max(1,a),b+1))),'enumerate inclusive integer interval and compare divisor counts')
    if len(ms)==2 and re.fullmatch(r'how many numbers from \$.*?\$ to \$.*?\$ have an (?:odd|even) number of divisors\?',low):
        a,b=map(int,nums());parity=1 if 'odd' in low else 0
        return out(s.Integer(sum(s.divisor_count(i)%2==parity for i in range(max(1,a),b+1))),'enumerate inclusive interval and test divisor-count parity')
    if len(ms)==1 and re.fullmatch(r'which of these numbers has exactly \$.*?\$ divisors\?',low):return out(lambda t:s.divisor_count(number(maths(t)[0]))==number(ms[0]),'factor and count divisors of every choice')
    if not ms and re.fullmatch(r'which of these numbers has (?:exactly two|more than two) divisors\?',low):return out(lambda t:s.divisor_count(number(maths(t)[0]))==2 if 'exactly' in low else s.divisor_count(number(maths(t)[0]))>2,'test divisor count of each choice')
    if not ms and ('divisor count that is odd' in low or 'even number of divisors' in low):
        return out(lambda t:s.divisor_count(number(maths(t)[0]))%2==(0 if 'even' in low else 1),'compute parity of each positive integer divisor count')
    if len(ms)==1 and re.fullmatch(r'which of these numbers is not a divisor of \$.*?\$\?',low):return out(lambda t:number(ms[0])%number(maths(t)[0])!=0,'test nondivisibility of every option')
    if len(ms)==2 and re.fullmatch(r'(?:the divisors of \$.*?\$ come in buddy pairs\. which divisor is paired with \$.*?\$\?|in the buddy pairs of \$.*?\$, which divisor is paired with \$.*?\$\?)',low):
        n,d=nums();return out(n/d,'complementary positive divisor is n/d')
    if len(ms)==1 and ('smallest positive perfect square' in low or 'smallest perfect square greater than' in low) and 'multiple of' in low:
        n=number(ms[-1]);return out(s.Integer(math.prod(int(p)**(2*math.ceil(e/2)) for p,e in s.factorint(n).items())),'round each required prime exponent up to the nearest even exponent')
    if len(ms)==2 and re.fullmatch(r'what is the smallest positive integer \$k\$ so that \$\d+k\$ is a perfect square\?',low):
        n=int(re.match(r'(\d+)',ms[1])[1]);return out(s.Integer(math.prod(int(p) for p,e in s.factorint(n).items() if e%2)),'multiply precisely the primes with odd exponent')
    if re.fullmatch(r'what is the smallest prime number\?',low):return out(s.Integer(2),'2 has exactly divisors 1 and 2; 0 and 1 are not prime')
    if re.fullmatch(r'what is the smallest odd prime number\?',low):return out(s.Integer(3),'2 is even; 3 is the next integer and prime')
    if re.fullmatch(r'which number is the only even prime\?',low):return out(s.Integer(2),'any even integer greater than 2 has nontrivial factor 2')
    if len(ms)==2 and re.fullmatch(r'how many prime numbers are there (?:between \$.*?\$ and|from \$.*?\$ to) \$.*?\$\?',low):
        a,b=map(int,nums());strict='between' in low
        return out(s.Integer(len(list(s.primerange(a+int(strict),b+int(not strict))))),'enumerate primes in the stated strict/inclusive interval')
    if len(ms)==1 and re.fullmatch(r'how many prime numbers are less than \$.*?\$\?',low):return out(s.Integer(len(list(s.primerange(2,int(number(ms[0])))))),'enumerate primes below strict bound')
    if len(ms)==1 and re.fullmatch(r'what is the largest prime number less than \$.*?\$\?',low):return out(s.prevprime(number(ms[0])),'descending primality search from bound−1')
    if len(ms)==1 and re.fullmatch(r'what is the smallest prime number greater than \$.*?\$\?',low):return out(s.nextprime(number(ms[0])),'ascending primality search from bound+1')
    if len(ms)==2 and re.fullmatch(r'what is the (?:sum|product) of all the prime numbers between \$.*?\$ and \$.*?\$\?',low):
        a,b=map(int,nums());primes=list(s.primerange(a+1,b));return out(s.Integer(sum(primes) if 'sum' in low else math.prod(primes)),'enumerate all primes strictly between bounds then aggregate')
    if len(ms)==1 and re.fullmatch(r'what is the sum of all the prime numbers less than \$.*?\$\?',low):return out(s.Integer(sum(s.primerange(2,int(number(ms[0]))))),'enumerate and sum primes below strict bound')
    if len(ms)==1 and re.fullmatch(r'what is the sum of the two smallest prime numbers greater than \$.*?\$\?',low):
        a=s.nextprime(number(ms[0]));return out(a+s.nextprime(a),'find the next two primes and add')
    if 'which' in low and ('pair of twin primes' in low or 'twin prime pair' in low):
        invert='not ' in low
        def twin(t):
            vals=[number(x) for x in maths(t)];assert len(vals)==2
            return bool(all(s.isprime(v) for v in vals) and abs(vals[0]-vals[1])==2)!=invert
        return out(twin,'both entries prime and absolute difference 2, respecting NOT')
    if len(ms)==2 and re.fullmatch(r'which number (?:is a common multiple of \$.*?\$ and|appears on the multiples list of both \$.*?\$ and) \$.*?\$\?',low):
        a,b=nums();return out(lambda t: all(number(maths(t)[0])%d==0 for d in [a,b]),'test divisibility by both supplied integers')
    if len(ms)==2 and re.fullmatch(r'what is the smallest positive integer that is a multiple of both \$.*?\$ and \$.*?\$\?',low):return out(s.Integer(math.lcm(*map(int,nums()))),'least positive common multiple')
    if len(ms)==2 and re.fullmatch(r'a positive integer is a multiple of \$.*?\$ and also a multiple of \$.*?\$\. what is the smallest it could be\?',low):return out(s.Integer(math.lcm(*map(int,nums()))),'least positive common multiple')
    if len(ms)==2 and re.fullmatch(r'what is the smallest positive integer that is divisible by every whole number from \$.*?\$ to \$.*?\$\?',low):
        a,b=map(int,nums());return out(s.Integer(math.lcm(*range(a,b+1))),'LCM of every integer in the inclusive interval')
    if len(ms)==3 and re.fullmatch(r'how many multiples of \$.*?\$ are there between \$.*?\$ and \$.*?\$\?',low):
        d,a,b=map(int,nums());return out(s.Integer(sum(n%d==0 for n in range(a+1,b))),'enumerate multiples strictly between the two endpoints; inspect endpoint wording if key differs')
    if len(ms)==4 and re.fullmatch(r'how many numbers from \$.*?\$ to \$.*?\$ are multiples of both \$.*?\$ and \$.*?\$\?',low):
        a,b,c,d=map(int,nums());return out(s.Integer(sum(n%c==n%d==0 for n in range(a,b+1))),'enumerate inclusive interval with both divisibility tests')
    if len(ms)==4 and re.fullmatch(r'how many numbers from \$.*?\$ to \$.*?\$ are multiples of \$.*?\$ but not multiples of \$.*?\$\?',low):
        a,b,c,d=map(int,nums());return out(s.Integer(sum(n%c==0 and n%d!=0 for n in range(a,b+1))),'enumerate inclusive interval with inclusion and exclusion divisibility conditions')
    if len(ms) in [1,2] and re.fullmatch(r'what is the (?:smallest|largest) (?:three|four|five)-digit number divisible by (?:both )?\$.*?\$(?: and \$.*?\$)?\?',low):
        width=3 if 'three-digit' in low else 4 if 'four-digit' in low else 5;d=math.lcm(*map(int,nums()))
        n=s.ceiling(s.Rational(10**(width-1),d))*d if 'smallest' in low else (10**width-1)//d*d
        return out(n,'least/greatest multiple of required LCM within the specified digit-length bounds')
    if len(ms)==2 and re.fullmatch(r'two whole numbers have product \$.*?\$ and (?:greatest common divisor|least common multiple) \$.*?\$\. what is their (?:least common multiple|greatest common divisor)\?',low):
        p,d=nums();return out(p/d,'positive integers satisfy gcd × lcm = product')
    if len(ms)==2 and re.fullmatch(r'two whole numbers have greatest common divisor \$.*?\$ and least common multiple \$.*?\$\. what is their product\?',low):
        a,b=nums();return out(a*b,'positive integers satisfy gcd × lcm = product')
    if len(ms)==1:
        ordinal={'first':1,'second':2,'third':3,'fourth':4,'fifth':5,'sixth':6,'seventh':7,'eighth':8,'ninth':9,'tenth':10}
        m=re.fullmatch(r'what is the ([a-z]+) multiple of \$.*?\$\?',low)
        if m and m[1] in ordinal:return out(number(ms[0])*ordinal[m[1]],'kth positive multiple is k times the number')
    raise ValueError('no number-theory stem model')
