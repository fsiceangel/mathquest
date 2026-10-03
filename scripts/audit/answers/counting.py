"""Independent Counting answer computations. Run export-counting.mjs first.

Fixtures are transcribed mathematical models of stems, never parsed solutions.
The LaTeX parser is used ONLY to compare choices/accepted keys to computed results.
Unmodelled or unparseable records remain needs-review; no optimistic fallbacks.
"""
import ast, json, re, pathlib, collections, sys
import sympy as S
from math import prod
from functools import lru_cache
from itertools import combinations, permutations, combinations_with_replacement, product
from sympy.parsing.sympy_parser import parse_expr, standard_transformations, implicit_multiplication_application, convert_xor, rationalize

ROOT = pathlib.Path(__file__).resolve().parents[3]
SYMS = {c:S.Symbol(c) for c in 'abcdefghijklmnopqrstuvwxyz'}
def C(n,k): return S.binomial(n,k)
def F(n): return S.factorial(n)
def coeff(expr,k,var=None): return S.expand(expr).coeff(var if var is not None else SYMS['x'], k)
@lru_cache(None)
def row(n):
    if n==0: return (1,)
    prev=row(n-1)
    return (1,)+tuple(prev[k-1]+prev[k] for k in range(1,n))+(1,)
def invC(k,value):
    n=k
    while row(n)[k]<value: n+=1
    if row(n)[k]!=value: raise ValueError('No binomial inverse')
    return n
def locations(value):
    out=[]
    for n in range(value+1):
        ks=[k for k,v in enumerate(row(n)) if v==value]
        if ks: out.extend([n,*ks])
    return ('sequence',tuple(out))
def D(total,variables,lo=0,hi=None,step=1):
    """Convolve independently allowed occupancy sets, retaining an exact count for each sum."""
    lows=[lo]*variables if isinstance(lo,int) else lo
    highs=[total if hi is None else hi]*variables if isinstance(hi,(int,type(None))) else hi
    steps=[step]*variables if isinstance(step,int) else step
    dp=[1]+[0]*total
    for a,b,c in zip(lows,highs,steps):
        nxt=[0]*(total+1)
        for used,v in enumerate(dp):
            if v:
                for take in range(a,min(b,total-used)+1,c): nxt[used+take]+=v
        dp=nxt
    return dp[total]
def T(total,predicate,minimum=0):
    return sum(bool(predicate(a,b,total-a-b)) for a in range(minimum,total+1) for b in range(minimum,total-a+1) if total-a-b>=minimum)
def Q(total,predicate,minimum=0):
    return sum(bool(predicate(a,b,c,total-a-b-c)) for a in range(minimum,total+1) for b in range(minimum,total-a+1) for c in range(minimum,total-a-b+1) if total-a-b-c>=minimum)
def G(w,h,blocked=(),diagonal=False,edges=()):
    """Grid vertex DP; remove specified vertices or directed unit edges before counting."""
    dp={}
    moves=[(1,0),(0,1)]+([(1,1)] if diagonal else [])
    for x in range(w+1):
        for y in range(h+1):
            if (x,y) in blocked: dp[x,y]=0;continue
            if (x,y)==(0,0): dp[x,y]=1;continue
            dp[x,y]=sum(dp.get((x-dx,y-dy),0) for dx,dy in moves if ((x-dx,y-dy),(x,y)) not in edges)
    return dp[w,h]
@lru_cache(None)
def St(n,k):
    if n==0:return int(k==0)
    if k<=0:return 0
    return St(n-1,k-1)+k*St(n-1,k)
def Seats(n,predicate,circle=False):
    """Enumerate positions of labelled people; fix person 0 for rotation classes."""
    return sum(bool(predicate((0,)+v if circle else v)) for v in permutations(range(1,n) if circle else range(n)))
def unique_words(word):
    counts=collections.Counter(word)
    def visit(prefix):
        if len(prefix)==len(word):yield prefix;return
        for letter in counts:
            if counts[letter]:
                counts[letter]-=1
                yield from visit(prefix+letter)
                counts[letter]+=1
    return visit('')
def Words(word,predicate):
    return sum(bool(predicate(v)) for v in unique_words(word))
def orbit_canonical(s,flip=False):
    rotations=[s[k:]+s[:k] for k in range(len(s))]
    if flip:
        rev=s[::-1];rotations.extend(rev[k:]+rev[:k] for k in range(len(s)))
    return min(rotations)
def Orbit(n,k,flip=False):
    return len({orbit_canonical(v,flip) for v in product(range(k),repeat=n)})
def MOrbit(word,flip=False):
    return len({orbit_canonical(v,flip) for v in unique_words(word)})
def Paths(w,h,predicate):
    total=0
    for rights in combinations(range(w+h),w):
        v=[(0,0)];x=y=0
        for i in range(w+h):
            if i in rights:x+=1
            else:y+=1
            v.append((x,y))
        total+=bool(predicate(v))
    return total
def Rect(w,h,predicate):
    return sum(bool(predicate(a,b,c,d)) for a,b in combinations(range(w+1),2) for c,d in combinations(range(h+1),2))
def Squares(points):
    result=0
    for vertices in combinations(points,4):
        ds=sorted((a[0]-b[0])**2+(a[1]-b[1])**2 for a,b in combinations(vertices,2))
        result+=ds[0]>0 and ds[:4]==[ds[0]]*4 and ds[4:]==[2*ds[0]]*2
    return result
def Area(w,h,constraints):
    """Exact convex clipping of rectangle by independently modelled linear halfplanes."""
    poly=[(S.Integer(0),S.Integer(0)),(S.sympify(w),S.Integer(0)),(S.sympify(w),S.sympify(h)),(S.Integer(0),S.sympify(h))]
    for a,b,c in constraints:
        out=[]
        for p,q in zip(poly,poly[1:]+poly[:1]):
            fp=a*p[0]+b*p[1]-c;fq=a*q[0]+b*q[1]-c
            if fp<=0:out.append(p)
            if (fp<=0)!=(fq<=0):
                t=fp/(fp-fq);out.append((p[0]+t*(q[0]-p[0]),p[1]+t*(q[1]-p[1])))
        poly=out
    return abs(sum(p[0]*q[1]-p[1]*q[0] for p,q in zip(poly,poly[1:]+poly[:1])))/2
def StopE(p,gain,tries,measure='score'):
    result=0
    for outcomes in product((0,1),repeat=tries):
        weight=p**sum(outcomes)*(1-p)**(tries-sum(outcomes));score=0
        for count,won in enumerate(outcomes,1):
            score+=gain if won else -1
            if score>0:break
        result+=weight*(score if measure=='score' else count)
    return result
def BP(n,p,predicate):
    return sum(p**sum(a)*(1-p)**(n-sum(a)) for a in product((0,1),repeat=n) if predicate(a))
def Series(ps):
    return sum(prod(p if won else 1-p for p,won in zip(ps,a)) for a in product((0,1),repeat=len(ps)) if sum(a)>len(ps)//2)
class ExactDivision(ast.NodeTransformer):
    def visit_BinOp(self,node):
        self.generic_visit(node)
        if isinstance(node.op,ast.Div):
            return ast.copy_location(ast.Call(func=ast.Name(id='exact_div',ctx=ast.Load()),args=[node.left,node.right],keywords=[]),node)
        return node
def evaluate_model(expression):
    tree=ast.fix_missing_locations(ExactDivision().visit(ast.parse(expression,mode='eval')))
    return eval(compile(tree,'<independent-counting-model>','eval'),dict(ENV,__builtins__={}))
ENV = dict(SYMS, C=C, F=F, R=S.Rational, sqrt=S.sqrt, pi=S.pi, coeff=coeff,
           expand=S.expand, sum=sum, range=range, abs=abs, min=min, max=max, TERM=lambda e:('term',S.expand(e)),
           row=row, invC=invC, SEQ=lambda *a:('sequence',a), LOC=locations,D=D,T=T,Q=Q,combinations=combinations,
           COUNT=lambda lo,hi,p:sum(bool(p(n)) for n in range(lo,hi+1)),str=str,int=int,len=len,any=any,all=all,set=set,
           permutations=permutations,product=product,combinations_with_replacement=combinations_with_replacement,P=lambda n,k:F(n)/F(n-k),prod=prod,
           SUB=lambda n,k,p:sum(bool(p(s)) for s in combinations(range(n),k)),G=G,St=St,
           IP=lambda n,k,lo=0:sum(sum(v)==n for v in combinations_with_replacement(range(lo,n+1),k)),
           AS=lambda n,k,p:sum(bool(p(a)) for a in product(range(k),repeat=n)))
ENV.update(Seats=Seats,Words=Words,Paths=Paths,Rect=Rect,Squares=Squares,Area=Area,StopE=StopE,BP=BP,Series=Series,Orbit=Orbit,MOrbit=MOrbit,tuple=tuple,zip=zip,sorted=sorted,
           digits=lambda n:tuple(int(d) for d in str(n)),adj=lambda a,b,n:abs(a-b) in (1,n-1),integrate=S.integrate,bool=bool,gcd=S.gcd,
           exact_div=lambda a,b:S.sympify(a)/S.sympify(b))

def latex(text):
    text=str(text).replace('\\$','')
    fragments=re.findall(r'\$([^$]+)\$',str(text))
    if len(fragments)==1: text=fragments[0]
    text=str(text).strip().replace('$','').replace('{,}','').replace(',','').replace('−','-').replace('\\left','').replace('\\right','')
    text=re.sub(r'\\(?:text|mathrm)\{[^{}]*\}', '',text)
    text=re.sub(r'\\sqrt\{([^{}]*)\}',r'sqrt(\1)',text)
    for cmd,op in [('binom',','),('frac','/'),('dfrac','/'),('tfrac','/')]:
        pattern=r'\\'+cmd+r'\{([^{}]*)\}\{([^{}]*)\}'
        while re.search(pattern,text):
            text=re.sub(pattern, lambda m: ('C('+m[1]+','+m[2]+')') if op==',' else '(('+m[1]+')/('+m[2]+'))',text)
    text=re.sub(r'\\sqrt\{([^{}]*)\}',r'sqrt(\1)',text)
    text=text.replace('\\cdot','*').replace('\\times','*').replace('\\pi','pi').replace('\\,','').replace('\\!','')
    text=text.replace('{','(').replace('}',')')
    if '\\' in text or not re.fullmatch(r'[a-zA-Z0-9+*/,(). !^=-]+',text): raise ValueError(text)
    if '=' in text:
        pieces=[parse_expr(t,local_dict=ENV,transformations=standard_transformations+(implicit_multiplication_application,convert_xor,rationalize)) for t in text.split('=')]
        if not all(isinstance(p,S.Symbol) or same(p,pieces[-1]) for p in pieces[:-1]): raise ValueError('False key equation: '+text)
        return pieces[-1]
    return parse_expr(text, local_dict=ENV, transformations=standard_transformations+(implicit_multiplication_application,convert_xor,rationalize))

def same(a,b):
    try:
        if isinstance(a,tuple) and a[0]=='term':
            return any(S.simplify(t-b)==0 for t in S.Add.make_args(a[1]))
        return S.simplify(a-b)==0
    except Exception: return False

def matches(result,raw):
    if isinstance(result,tuple) and result[0]=='sequence':
        bits=re.findall(r'\$([^$]+)\$',raw)
        if not bits: bits=re.findall(r'\d+',raw)
        return len(bits)==len(result[1]) and all(same(x,latex(y)) for x,y in zip(result[1],bits))
    return same(result,latex(raw))

def main():
    records=json.loads((ROOT/'tmp/counting-answers-source.json').read_text(encoding='utf8'))
    fixtures={}
    for path in sorted((ROOT/'scripts/audit/answers').glob('counting-ch[0-9][0-9].tsv')):
        for line in path.read_text(encoding='utf8').splitlines():
            if not line.strip() or line.startswith('#'): continue
            parts=line.split('\t')
            if len(parts)!=4: raise ValueError((path,line))
            group,number,expressions,evidence=parts
            if len(expressions.split('|'))!=4: raise ValueError('Exactly four round models required: '+line)
            chapter=int(path.stem.split('ch')[-1])
            for r,expr in enumerate(expressions.split('|'),1):
                if expr.strip()=='?': continue
                fixtures[f'intro-counting/{chapter}/{group}/{number}/{r}']=(expr,evidence)
    for line in (ROOT/'scripts/audit/answers/counting-checkpoints.tsv').read_text(encoding='utf8').splitlines():
        if not line.strip() or line.startswith('#'):continue
        cp,num,expr,evidence=line.split('\t')
        fixtures[f'intro-counting/checkpoint/{cp}/{num}']=(expr,evidence)
    ledger=[]
    pin_path=ROOT/'scripts/audit/answers/counting-pins.json'
    pins=json.loads(pin_path.read_text(encoding='utf8')) if pin_path.exists() else {}
    if '--pin-new' in sys.argv:
        for rec in records:
            if rec['id'] in fixtures and rec['id'] not in pins: pins[rec['id']]=rec['sourceDigest']
        pin_path.write_text(json.dumps(pins,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
    for rec in records:
        p=rec['p'];rid=rec['id']
        row={'id':rid,'sourceDigest':rec['sourceDigest'],'status':'needs-review','method':None,
             'computed':None,'keyMatch':None,'uniqueChoice':None,'evidence':None,
             'solutionReview':'needs-review','limitations':[]}
        if rid in fixtures:
            expr,evidence=fixtures[rid]
            try:
                if pins.get(rid)!=rec['sourceDigest']: raise ValueError('Source changed or model is unpinned; independently re-review before updating the digest pin.')
                result=evaluate_model(expr)
                row.update(method='independent-exact-stem-model',computed=str(result if isinstance(result,tuple) else S.simplify(result)),evidence={'expression':expr,'reason':evidence})
                raw=p['choices'][p['answer']] if p.get('choices') else p['answer']
                row['keyMatch']=bool(matches(result,raw))
                if p.get('choices'):
                    matching=[i for i,c in enumerate(p['choices']) if matches(result,c)]
                    row['uniqueChoice']=matching==[p['answer']]
                    row['matchingChoiceIndices']=matching
                else: row['uniqueChoice']='not-applicable'
                row['status']='answer-verified' if row['keyMatch'] and row['uniqueChoice'] in (True,'not-applicable') else 'mismatch'
            except Exception as e: row['limitations'].append('Computation/comparison requires review: '+str(e))
        ledger.append(row)
    out=ROOT/'notes/answer-audits';out.mkdir(parents=True,exist_ok=True)
    (out/'intro-counting-ledger.json').write_text(json.dumps(ledger,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
    counts=collections.Counter(r['status'] for r in ledger)
    by_chapter=[]
    for ch in range(1,16):
        part=[r for r in ledger if r['id'].split('/')[1]==str(ch)]
        by_chapter.append(f"| {ch} | {len(part)} | {sum(r['status']=='answer-verified' for r in part)} | {sum(r['status']!='answer-verified' for r in part)} |")
    cp=[r for r in ledger if '/checkpoint/' in r['id']]
    report=f'''# Counting independent answer audit — {'all answers verified' if counts['answer-verified']==len(ledger) else 'in progress'}

Current coverage: **{counts['answer-verified']} / {len(ledger)} answers independently computed and compared**, {counts['needs-review']} need review, {counts['mismatch']} mismatches. This answer audit is separate from the difficulty/stem review and from sentence-by-sentence explanation review. The ledger contains all 780 base questions, 2340 variants, and 75 checkpoints; absence of an independent model never counts as a pass.

| Chapter | Questions | Answer verified | Remaining |
|---|---:|---:|---:|
{chr(10).join(by_chapter)}
| Checkpoints | {len(cp)} | {sum(r['status']=='answer-verified' for r in cp)} | {sum(r['status']!='answer-verified' for r in cp)} |

Run `node scripts/audit/answers/export-counting.mjs` then `python scripts/audit/answers/counting.py`. The TSV models encode mathematics read from each stem, never numbers extracted from its solution. Symbolic expansion, exact rational arithmetic, Pascal recurrence, occupancy convolution, and exhaustive integer-triple enumeration compute answers. Every MC choice is compared, so keyed correctness and uniqueness are separate checks. Multi-part answers retain their ordered components. Source SHA-256 is the full digest of JavaScript `JSON.stringify(p)` after omitting `calibration` and `variants`; digest pins invalidate a result if source content changes. `--pin-new` records newly authored models only, never silently updates an existing pin.

Confirmed repairs: chapter 14 challenge #9 base / round 2 / round 4 omitted a lower bound on n, admitting a vacuous zero-coefficient equality. Added n>=3 / n>=4 / n>=2 respectively; intended answers remain 14 / 23 / 27. Chapter 2 section 2.2 #4 round 4 and #6 round 4 omitted an integer restriction on inverse thresholds k/N, otherwise whole real intervals solve the counting equations; added positive-integer domains, with intended keys 5 and 10 unchanged. Chapter 15 worksheet #3 round 4 and #7 round 4 likewise lacked integer domains for k/n: the original conditions admitted every real value in [26,27) and [13,14), respectively. Added positive-integer domains; answers 26 and 13 unchanged.

The resumed audit completed chapters 2, 3, 6, 7, 8, 9, 10, 11, 15 and all five checkpoints. Models include exhaustive digit/seat/multiset/path enumeration, exact rotation/reflection orbits (including repeated colors), hypergeometric position subsets, stopped-game sample spaces, weighted binomial outcomes, exact convex polygon clipping for geometric probability, and bounded occupancy convolution. Every division inside a model is evaluated symbolically to avoid floating-point equality claims. Diagram-dependent models transcribe actual coordinates or labels from the figure data; this certifies the encoded geometry, not a separate visual-layout inspection.

**Explanation and acceptance limits:** `answer-verified` proves the modeled mathematical answer and (for MC) exactly one listed choice, not every sentence in the stored explanation. Detailed solution review remains separately `needs-review` until actually read and checked. Worksheet comparisons certify the stored key; the UI acceptance normalizer is outside this book-only audit. Inverse problems carry uniqueness arguments in their evidence. Any remaining record is explicitly unresolved; no difficulty receipt or assertion of “two routes” is treated as proof.

Original-source evidence: [intro-counting-source.md](intro-counting-source.md) records actual visual inspection of the local DJVU contents, matching all 15 chapter titles and instructional sections, including source hashes and printed page numbers. This establishes chapter/section structure, not identity with publisher exercise numbers.
'''
    (out/'intro-counting.md').write_text(report,encoding='utf8')
    print(dict(counts))
    for r in ledger:
        if r['status']=='mismatch' or (r['id'] in fixtures and r['status']!='answer-verified'): print(r['id'],r['computed'],r['status'],r['limitations'])

if __name__=='__main__': main()
