"""Conservative stem-derived models. Never pass answer/solution into derive()."""
from pathlib import Path
import json, re, math
import sympy as s
from algebra import expr as algebra_expr, maths, same, ans_value as algebra_answer
from prealgebra_models import model
from prealgebra_number import model as number_model
ROOT=Path(__file__).resolve().parents[3]

def expr(t):
    if re.search(r'\\(?:cdots|ldots|dots)|\.\.\.',t):raise ValueError('ellipsis needs a sequence model')
    t=re.sub(r'(\d*)\.(\d*)\\overline\{(\d+)\}',lambda m: str(s.Rational(int((m[1] or '0')+(m[2] or '')+m[3])-int((m[1] or '0')+(m[2] or '')),10**len(m[2])*(10**len(m[3])-1))),t)
    t=t.replace('\\$', '').replace('\\%', '/100').replace('^\\circ','').replace('^{\\circ}','')
    out=algebra_expr(t)
    if out.free_symbols and any(len(str(v))>1 for v in out.free_symbols):raise ValueError('unknown symbol')
    return out

def number(t):
    v=expr(t)
    if v.free_symbols:raise ValueError('expected a numeric quantity')
    return v

def answer(t):
    text=str(t); ms=maths(text)
    if any(x in text.lower() for x in ['undefined','no solution','every number','every real','all real']):
        if 'undefined' in text.lower():return s.zoo
        if 'no solution' in text.lower():return s.EmptySet
        return s.S.Reals
    if len(ms)>1 and re.fullmatch(r'\$.*?\$(?: (?:or|and) \$.*?\$)+',text):return s.FiniteSet(*[expr(x) for x in ms])
    if len(ms)!=1:raise ValueError('answer requires a semantic model')
    if re.search(r'\brational\b|irrational|approximately|about|\bif\b',text.lower()):raise ValueError('compound answer requires semantic check')
    t=ms[0]
    if '=' in t:
        left,right=t.split('=',1)
        if re.fullmatch(r'\s*[a-z]\s*',left):t=right
        else:raise ValueError('compound equality')
    return expr(t)

def relation(t):
    for op in ['\\leq','\\geq','\\le','\\ge','<=','>=','<','>','=']:
        if op in t:
            a,b=t.split(op,1);a,b=expr(a),expr(b)
            cls={'\\leq':s.Le,'\\geq':s.Ge,'\\le':s.Le,'\\ge':s.Ge,'<=':s.Le,'>=':s.Ge,'<':s.Lt,'>':s.Gt,'=':s.Eq}[op]
            return cls(a,b)
    raise ValueError('not a relation')

def derive(q, choices=None):
    low=q.lower(); ms=maths(q)
    try:return model(q,choices,maths,number,expr)
    except ValueError:pass
    try:return number_model(q,choices,maths,number,expr)
    except ValueError:pass
    # Explicit equation systems: derive the requested expression, not arbitrary
    # parameters. Only accept when all solutions determine a numeric value.
    if re.match(r'if |a (?:positive )?number |two numbers |find the number |for which (?:value|exponent|fraction)',low) and not any(w in low for w in ['how many','reciprocal','opposite','whole number','integer']):
        equations=[t for t in ms if t.count('=')==1]
        targets=list(dict.fromkeys(t for t in ms if '=' not in t))
        if equations and len(targets)==1:
            eqs=[expr(t.split('=')[0])-expr(t.split('=')[1]) for t in equations]
            target=expr(targets[0]);sols=s.solve(eqs,dict=True)
            values=[]
            for sol in sols:
                if 'positive number' in low and any(v.is_positive is not True for v in sol.values()):continue
                value=s.simplify(target.subs(sol))
                if value.free_symbols or value.is_real is not True:raise ValueError('target not uniquely numerically determined')
                values.append(value)
            if values:return (values[0] if all(same(values[0],v) for v in values) else s.FiniteSet(*values)),'independently solve the explicit equations, substitute the requested expression, and check stated positivity'
    if len(ms)==1 and re.fullmatch(r'(?:which addition means the same thing as|which expression means|which of these expressions (?:has the value|equals)|which of these sums equals) \$.*?\$\?',low):return expr(ms[0]),'evaluate the given expression and compare each offered expression'
    if len(ms)==1 and re.fullmatch(r'\$.*?\$ is another way of writing which subtraction\?',low):return expr(ms[0]),'subtraction is addition of the additive inverse'
    if len(ms)==1 and re.fullmatch(r'rewrite \$.*?\$ as an addition\.',low):return expr(ms[0]),'subtraction is addition of the additive inverse'
    if len(ms)==1 and re.fullmatch(r'the power \$.*?\$ is the short way of writing which product\?',low):return expr(ms[0]),'evaluate the repeated product and compare all options'
    if len(ms)==2 and re.fullmatch(r'which power of \$.*?\$ equals \$.*?\$\?',low):return number(ms[1]),'compute the target value exactly and compare offered powers'
    if re.fullmatch(r'write \$.*?\$ as a (?:single )?power(?: of \$.*?\$)?\.',low):return number(ms[0]),'exact power identity; compare values, with offered choices manually constrained to power notation'
    if len(ms)==1 and re.fullmatch(r'which of these (?:expressions|quotients) is (?:positive|negative)\?',low):
        return lambda t: bool(number(maths(t)[0])>0 if 'positive' in low else number(maths(t)[0])<0),'evaluate sign of every offered expression'
    if not ms and re.fullmatch(r'which of these (?:expressions|quotients) is (?:positive|negative)\?',low):
        return lambda t: bool(number(maths(t)[0])>0 if 'positive' in low else number(maths(t)[0])<0),'evaluate sign of every offered expression'
    if len(ms)==1 and re.fullmatch(r'(?:without squaring either number, find|use the distributive property to compute) \$.*?\$\.',low):return expr(ms[0]),'exact arithmetic; difference of squares or distributive property is a computational aid'
    if len(ms)==1 and re.fullmatch(r'evaluate \$.*?\$\. write your answer as a fraction\.',low):return expr(ms[0]),'exact rational power computation'
    if len(ms)==2 and low.startswith('you know that ') and 'what is' in low:return expr(ms[1]),'compute the requested expression independently of the supplied intermediate product'
    if len(ms)==1 and 'which' in low and 'smaller than its own reciprocal' in low:
        return lambda t: bool(number(maths(t)[0])<1/number(maths(t)[0])),'compare every choice against its reciprocal'
    if not ms and 'which' in low and 'smaller than its own reciprocal' in low:
        return lambda t: bool(number(maths(t)[0])<1/number(maths(t)[0])),'compare every choice against its reciprocal'
    if not ms and 'which' in low and 'equal to its own reciprocal' in low:
        return lambda t: number(maths(t)[0])!=0 and bool(number(maths(t)[0])==1/number(maths(t)[0])),'solve x²=1 with x nonzero, testing every option'
    if len(ms)==2 and re.fullmatch(r'what number (?:times|divided by|added to) \$.*?\$ gives \$.*?\$\?',low):
        a,b=map(number,ms);return (a*b if 'divided by' in low else b-a if 'added to' in low else b/a),'invert the single stated operation'
    if len(ms)==2 and re.fullmatch(r'what number must be added to \$.*?\$ to reach \$.*?\$\?',low):return number(ms[1])-number(ms[0]),'missing addend = total − known addend'
    if len(ms)==2 and re.fullmatch(r'which number multiplied by \$.*?\$ gives exactly \$.*?\$\?',low):return number(ms[1])/number(ms[0]),'missing multiplicative factor'
    if len(ms)==1 and re.fullmatch(r'two consecutive perfect squares differ by \$.*?\$\. what is (?:the larger square|the smaller square|the larger of the two numbers being squared|their sum)\?',low):
        n=(number(ms[0])-1)/2;assert n.is_integer and n>=0
        return ((n+1)**2 if 'larger square' in low else n*n if 'smaller square' in low else n+1 if 'numbers being squared' in low else n*n+(n+1)**2),'solve (n+1)²−n² = 2n+1, then evaluate the requested quantity'
    if len(ms)==1 and low.startswith('two whole numbers, each bigger than') and ('largest their sum' in low or 'smallest their sum' in low):
        raise ValueError('integer factor-pair model requires the product and lower bound')
    if len(ms)==2 and re.fullmatch(r'two whole numbers, each bigger than \$.*?\$, multiply to \$.*?\$\. what is the (?:largest|smallest) their sum could be\?',low):
        bound,n=map(int,map(number,ms));sums=[d+n//d for d in range(bound+1,n) if n%d==0 and n//d>bound]
        return s.Integer(max(sums) if 'largest' in low else min(sums)),'enumerate all admissible integer factor pairs and optimize their sum'
    if len(ms)==2 and re.fullmatch(r'two whole numbers, each bigger than \$.*?\$, multiply to \$.*?\$\. which of these could not be their sum\?',low):
        bound,n=map(int,map(number,ms));sums={d+n//d for d in range(bound+1,n) if n%d==0 and n//d>bound}
        return lambda t: number(maths(t)[0]) not in sums,'enumerate all admissible integer factor-pair sums, then test exclusions'
    if len(ms)==1 and ('compute' in low or 'what is the sum' in low) and '\\cdots' in ms[0]:
        t=re.sub(r'\s+','',ms[0])
        if re.fullmatch(r'[+-]?\d+(?:[+-]\d+)+[+-]\\cdots(?:[+-]\d+)+',t):
            before,after=t.split('\\cdots');first=[int(x) for x in re.findall(r'[+-]?\d+',before)];last=[int(x) for x in re.findall(r'[+-]?\d+',after)]
            step=abs(first[1])-abs(first[0]);assert step and (abs(last[-1])-abs(first[0]))%step==0
            count=(abs(last[-1])-abs(first[0]))//step+1;assert 0<count<100000
            alternating=(first[0]>0)!=(first[1]>0);sign=1 if first[0]>0 else -1
            values=[sign*(-1 if alternating and i%2 else 1)*(abs(first[0])+i*step) for i in range(count)]
            assert values[:len(first)]==first and values[-len(last):]==last
            return s.Integer(sum(values)),'expand the explicitly indicated arithmetic progression and alternating signs, checking both displayed endpoints'
        pairs=re.findall(r'\((\d+)-(\d+)\)',t)
        if pairs and re.fullmatch(r'\(\d+-\d+\)(?:\\times\(\d+-\d+\))+\\times\\cdots\\times\(\d+-\d+\)',t):
            a,b=map(int,pairs[0]);z,w=map(int,pairs[-1]);assert all(int(y)-int(x)==b-a for x,y in pairs)
            assert pairs[1]==(str(a+1),str(b+1)) and z>=a
            return s.Integer((a-b)**(z-a+1)),'expand consecutive constant-difference factors; count factors inclusively'
    # Returned predicates inspect every possible choice, never the keyed one.
    if re.search(r'which.*(?:is prime|is a prime number)',low):
        return lambda t: bool(s.isprime(number(maths(t)[0]))),'trial division / primality test for every offered integer'
    if re.search(r'which.*is composite',low):
        return lambda t: number(maths(t)[0])>1 and not s.isprime(number(maths(t)[0])),'test positive compositeness of each choice'
    m=re.search(r'which.*(?:multiple of|divisible by)\s*\$([^$]+)\$',low)
    if m and len(ms)==1:
        d=number(ms[0]); invert='not ' in low
        return lambda t: bool(number(maths(t)[0])%d==0) != invert,'integer remainder of every choice'
    if 'which' in low and 'a perfect square' in low:
        invert='not ' in low
        return lambda t: bool(number(maths(t)[0])>=0 and s.sqrt(number(maths(t)[0])).is_integer) != invert,'integer square-root test for every choice, respecting NOT'
    if 'which' in low and 'unit fraction' in low:
        invert='not ' in low
        return lambda t: bool(re.fullmatch(r'\\frac\{1\}\{[1-9]\d*\}',maths(t)[0])) != invert,'unit fraction has numerator 1 and positive integral denominator; respect NOT'
    if 'which' in low and 'already in simplest form' in low:
        def reduced(t):
            match=re.fullmatch(r'\\frac\{(\d+)\}\{(\d+)\}',maths(t)[0]); assert match
            return math.gcd(int(match[1]),int(match[2]))==1
        return reduced,'Euclidean GCD of each numerator and denominator'
    if 'which' in low and ('terminat' in low or 'decimal that stops' in low or 'repeating decimal' in low):
        repeat=('repeating' in low) != ('not ' in low)
        def terminates(t):
            d=s.denom(number(maths(t)[0])); factors=set(s.factorint(d))
            return (factors <= {2,5}) != repeat
        return terminates,'reduce each rational; finite base-ten expansion iff denominator has only prime factors 2 and 5'
    if 'which' in low and 'no reciprocal' in low:return s.Integer(0),'zero is the unique real number with no multiplicative inverse'
    if 'which' in low and 'bigger than its own reciprocal' in low:
        return lambda t: bool(number(maths(t)[0])>1/number(maths(t)[0])),'compare each nonzero number directly with its reciprocal'
    if 'which' in low and 'not a whole number' in low:
        return lambda t: not bool(number(maths(t)[0]).is_integer and number(maths(t)[0])>=0),'test nonnegative integrality'
    if 'which' in low and 'is a divisor of' in low and len(ms)==1:
        n=number(ms[0]);return lambda t: bool(n%number(maths(t)[0])==0),'test positive divisibility of each choice'
    if 'which' in low and ('odd number of divisors' in low):
        return lambda t: bool(s.divisor_count(number(maths(t)[0]))%2==1),'factor-count parity for every choice'
    if 'which' in low and ('largest' in low or 'smallest' in low) and not ms and choices:
        vals=[number(maths(t)[0]) for t in choices]
        return (max(vals) if 'largest' in low else min(vals)),'exact comparison of all offered numeric expressions'
    if ('which is bigger' in low or 'which is larger' in low or 'which is greater' in low or 'which is smaller' in low or 'which is less' in low) and len(ms)==2:
        return (min if 'smaller' in low or 'which is less' in low else max)(map(number,ms)),'compare both exact rational quantities'
    if 'which' in low and 'largest' in low and len(ms)>1 and all('=' not in t for t in ms):
        return max(map(number,ms)),'compare all quantities explicitly listed in the stem'
    if 'which' in low and len(ms)==1 and ('greater than' in low or 'less than' in low):
        n=number(ms[0]);invert='not ' in low; reciprocal='reciprocal' in low
        def compare(t):
            x=number(maths(t)[0]);x=1/x if reciprocal else x
            return bool(x>n if 'greater than' in low else x<n) != invert
        return compare,'compare every choice (or its reciprocal when requested) with the stated bound; respect NOT'
    if 'which fraction lies between' in low and len(ms)==2:
        a,b=map(number,ms);return lambda t: bool(a<number(maths(t)[0])<b),'strict comparison with both endpoints'
    if 'opposite of' in low and len(ms)==1:return (-1)**low.count('opposite of')*number(ms[0]),'apply each stated additive inverse'
    if 'reciprocal of' in low and len(ms)==1:return number(ms[0])**((-1)**low.count('reciprocal of')),'apply each stated multiplicative inverse'
    if re.fullmatch(r'(?:what is|find) the units digit of \$.*?\$[.?]',q,re.I) and len(ms)==1:return number(ms[0])%10,'exact integer exponentiation modulo 10'
    if low.startswith('round ') and len(ms)==1:
        scale=1000 if 'thousandth' in low else 100 if 'hundredth' in low else 10 if 'tenth' in low else 1
        n=number(ms[0]);assert n>=0
        return s.floor(n*scale+s.Rational(1,2))/scale,'round-half-up using exact rational arithmetic'
    if 'hundredths place' in low and len(ms)==1:return s.floor(number(ms[0])*100)%10,'floor at hundredths, then remainder 10'
    if 'thousandths place' in low and len(ms)==1:return s.floor(number(ms[0])*1000)%10,'floor at thousandths, then remainder 10'
    if 'tenths place' in low and len(ms)==1:return s.floor(number(ms[0])*10)%10,'floor at tenths, then remainder 10'
    if len(ms)==1 and re.search(r'(?:\\text\{lcm\}|\\operatorname\{lcm\}|\\gcd)\(',ms[0]):
        m=re.fullmatch(r'(\\text\{lcm\}|\\operatorname\{lcm\}|\\gcd)\((.*?)\)',ms[0]);assert m
        nums=[int(number(x)) for x in m[2].split(',')]
        return s.Integer(math.gcd(*nums) if 'gcd' in m[1] else math.lcm(*nums)),'Euclidean GCD / least common multiple'
    m=re.search(r'how many (?:positive )?divisors does \$([^$]+)\$ have',q,re.I)
    if m:return s.divisor_count(number(m[1])),'prime exponents: product of (exponent + 1)'
    if len(ms)==1 and re.fullmatch(r'(?:Solve|Find all solutions of)\s+\$.*?\$[.?]?',q,re.I):
        rel=relation(ms[0]);syms=rel.free_symbols
        if len(syms)!=1:raise ValueError('equation needs a declared variable or identity model')
        var=next(iter(syms))
        return s.solveset(rel,var,domain=s.S.Reals) if isinstance(rel,s.Equality) else s.solve_univariate_inequality(rel,var,relational=False),'solve the stem relation over the real numbers'
    if len(ms)>=2 and (low.startswith('evaluate ') or low.startswith('if ')):
        given=[t for t in ms if re.fullmatch(r'\s*[a-z]\s*=.*',t)]; targets=[t for t in ms if t not in given]
        if len(targets)==1 and given:
            subs={expr(t.split('=')[0]):number(t.split('=')[1]) for t in given}
            value=expr(targets[0]).subs(subs)
            if value.free_symbols:raise ValueError('incomplete substitutions')
            return value,'substitute only the values stated in the problem'
    if len(ms)==2 and re.fullmatch(r'What is \$.*?\$ of \$.*?\$\?',q):return number(ms[0])*number(ms[1]),'fraction of a quantity is multiplication'
    if len(ms)==2 and 'how much bigger' in low:return number(ms[0])-number(ms[1]),'ordered difference'
    if len(ms)==2 and 'what must be added' in low:return number(ms[1])-number(ms[0]),'missing addend'
    if len(ms)==1 and '\\square' in ms[0] and '=' in ms[0]:
        rel=relation(ms[0].replace('\\square','x'));return s.solveset(rel,expr('x'),domain=s.S.Reals),'solve the missing-value equation'
    if len(ms)==1 and re.fullmatch(r'(?:Compute(?: the product)?|Evaluate|Simplify(?: the complex fraction)?|What is|Find the value of|Combine like terms:|Distribute:)\s*\$.*?\$[.?]?(?: \(.*?\))?',q,re.I):
        return expr(ms[0]),'exact symbolic arithmetic from the complete displayed expression'
    if len(ms)==1 and re.fullmatch(r'(?:Write|Convert)\s+\$.*?\$ (?:as|to) (?:an? |a mixed |an improper )?(?:decimal|fraction|mixed number)(?: in simplest form)?[.]?',q,re.I):
        return number(ms[0]),'exact rational equivalence; conversion preserves the numeric value'
    raise ValueError('requires a specific model or recorded proof')

def audit(item):
    p=item['p']; row={'id':item['id'],'sourceDigest':item['digest'],'status':'needs-review','method':'unreviewed','keyMatch':None,'uniqueChoice':None,'limitations':['Explanation prose not yet independently checked sentence by sentence.','Rendered figure not certified by this numeric check.']}
    try:
        result,method=derive(p['q'],p.get('choices')); row['method']=method;row['computed']=str(result) if not callable(result) else 'choice predicate; see independent method'
        if p.get('choices'):
            matches=[];unread=[]
            for i,t in enumerate(p['choices']):
                try:
                    if callable(result):ok=result(t)
                    elif isinstance(result,s.Set):
                        ms=maths(t)
                        if len(ms)==1 and any(op in ms[0] for op in ['<','>','\\le','\\ge']):v=s.solve_univariate_inequality(relation(ms[0]),expr('x'),relational=False)
                        else:
                            v=answer(t)
                            if not isinstance(v,s.Set):v=s.FiniteSet(v)
                        ok=same(result,v)
                    else:ok=same(result,answer(t))
                    if ok:matches.append(i)
                except Exception:unread.append(i)
            row.update(matchingChoices=matches,uninterpretedChoices=unread,keyMatch=p['answer'] in matches,uniqueChoice=len(matches)==1 and not unread)
            row['status']='needs-review' if unread else 'verified' if matches==[p['answer']] else 'possible-error'
        else:
            if callable(result):row['keyMatch']=bool(result(p['answer']))
            else:
                v=answer(p['answer'])
                if isinstance(result,s.Set) and not isinstance(v,s.Set):v=s.FiniteSet(v)
                row['keyMatch']=same(result,v)
            row['status']='verified' if row['keyMatch'] else 'possible-error'
    except Exception as e:row['reason']=str(e)
    return row

if __name__=='__main__':
    import sys
    from prealgebra_manual import declarations, receipt
    from collections import Counter
    items=json.loads((ROOT/'notes/answer-audits/prealgebra-source.json').read_text(encoding='utf-8'))
    manual=declarations();rows=[]
    for item in items:
        row=receipt(item,manual[item['id']],number,maths,'--record-new-digests' in sys.argv) if item['id'] in manual else None
        rows.append(row or audit(item))
    (ROOT/'notes/answer-audits/prealgebra-ledger.jsonl').write_text(''.join(json.dumps(r,ensure_ascii=False)+'\n' for r in rows),encoding='utf-8')
    print(dict(Counter(r['status'] for r in rows)))
    for r in rows:
        if r['status']=='possible-error':print(r['id'],r.get('computed'),r.get('matchingChoices'))
