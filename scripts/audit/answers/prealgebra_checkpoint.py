"""Independent finite searches for the pinned Prealgebra checkpoint proofs.

No answer-key or solution-text input. Constants below are transcribed from
reviewed problem statements. Their callers are bound to full source digests.
"""
import itertools, math
import sympy as s

def calculate(code):
    code=int(code)
    if code==102:
        return sum(set(s.factorint(n))=={2,7} for n in range(10,100))
    if code==103:
        return sum(n*n%10==6 for n in range(1,31))
    if code==112:
        return min(a+b for a in s.divisors(240) for b in s.divisors(240)
                   if math.gcd(a,b)==6 and math.lcm(a,b)==240)
    if code==115:
        n=next(n for n in range(1,2001) if (n*(n+1)//2)%1000==0)
        return sum(map(int,str(n)))
    if code==203:
        return sum(set(s.factorint(d))<={2,5} for d in range(2,21))
    if code==205:
        return sum(math.gcd(n,12)==1 for n in range(3,20))
    if code==210:
        return next(k for k in range(1,100) if 54*s.Rational(2,3)**k<s.Rational(15,2))
    if code==212:
        return sum(math.gcd(n,90)==1 for n in range(1,90))
    if code==213:
        return max(math.prod(v) for v in itertools.combinations([-8,-5,-3,2,4,7],3))
    if code==215:
        cups=[s.Rational(48,3)]*3
        for source in [2,1,0]:
            others=[i for i in range(3) if i!=source]
            for i in others:cups[i]/=2
            cups[source]+=sum(cups[i] for i in others)
        initial=cups[:]
        for source in [0,1,2]:
            others=[i for i in range(3) if i!=source]
            cups[source]-=sum(cups[i] for i in others)
            for i in others:cups[i]*=2
            assert min(cups)>=0
        assert cups==[16,16,16] and sum(initial)==48
        return initial[0]
    if code==313:
        def cost(n):
            raw=s.Rational(16,5)*n
            return raw*s.Rational(85,100) if raw>=40 else raw
        n=max(n for n in range(101) if cost(n)<=42)
        assert cost(n+1)>42 and cost(100)>42
        return 42-cost(n)
    if code==314:
        values={s.Rational(n,d) for d in range(1,13) for n in range(1,d)
                if math.gcd(n,d)==1 and s.Rational(1,3)<s.Rational(n,d)<s.Rational(2,3)}
        return sum(values)
    if code==406:
        return sum(12**2<2*a*a<30**2 for a in range(1,31))
    if code==413:
        pairs=[]
        for d in s.divisors(24**2):
            e=24**2//d
            if d<e and (d+e)%2==0:
                b,c=(e-d)//2,(e+d)//2
                assert b>0 and c*c==24**2+b*b
                pairs.append((b,c))
        assert len(pairs)==len(set(pairs))
        return len(pairs)
    if code==414:
        return sum(4*(x*x+y*y)<49 for x in range(-3,4) for y in range(-3,4))
    if code==415:
        return sum(360%n==0 for n in range(3,101))
    if code==504:
        hits=sum(u%t==0 for t in range(1,10) for u in range(1,10))
        return s.Rational(hits,90)
    if code==508:
        ds=s.divisors(120)
        return s.Rational(sum(d%2==1 for d in ds),len(ds))
    if code==512:
        pairs=list(itertools.combinations(range(1,13),2))
        return s.Rational(sum((a+b)%5==0 for a,b in pairs),len(pairs))
    raise ValueError('Unreviewed checkpoint enumeration')
