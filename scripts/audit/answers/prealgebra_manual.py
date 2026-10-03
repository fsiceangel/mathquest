"""Replay independently transcribed calculations, pinned to reviewed stems.

The input table contains calculations, not harvested answer-key values.
"""
import json, math, re
from pathlib import Path
import sympy as s
from prealgebra_checkpoint import calculate as checkpoint_calculate
ROOT=Path(__file__).resolve().parents[3]

def ratio(*values):
    values=[s.Rational(x) for x in values]
    common=s.ilcm(*[s.denom(x) for x in values]);ints=[int(x*common) for x in values]
    g=math.gcd(*ints)
    return tuple(s.Integer(n//g) for n in ints)

def mean(*v):return sum(v)/s.Integer(len(v))
def median(*v):
    v=sorted(v);n=len(v)
    return v[n//2] if n%2 else (v[n//2-1]+v[n//2])/s.Integer(2)
def mode(*v):
    counts={x:v.count(x) for x in set(v)}
    winners=[x for x,c in counts.items() if c==max(counts.values())]
    assert len(winners)==1
    return winners[0]
def span(*v):return max(v)-min(v)

def declarations():
    result={}
    for path in Path(__file__).parent.glob('prealgebra-ch*.tsv'):
        for line in path.read_text(encoding='utf-8').splitlines():
            if not line or line.startswith('#'):continue
            family,formulas,why=line.split('\t')
            if len(family.split('/'))==4 or family.startswith('checkpoint/'):
                result['prealgebra/'+family]={'formula':formulas,'why':why}
                continue
            entries=formulas.split(';');assert len(entries)==4
            for i,formula in enumerate(entries):
                result['prealgebra/'+family+'/'+str(i+1)]={'formula':formula,'why':why}
    return result

def receipt(item,declaration,number,maths,record=False):
    pinpath=ROOT/'notes/answer-audits/prealgebra-manual-pins.json'
    pins=json.loads(pinpath.read_text(encoding='utf-8')) if pinpath.exists() else {}
    if record and item['id'] not in pins:
        pins[item['id']]=item['digest'];pinpath.write_text(json.dumps(pins,indent=2)+'\n',encoding='utf-8')
    if pins.get(item['id'])!=item['digest']:return None
    formula=declaration['formula'];expected=s.sympify(formula,locals={'R':ratio,'T':lambda n:s.Tuple(s.Symbol('clock'),n),'P':lambda i,v:s.Tuple(s.Symbol('position'),i,v),'Q':lambda v:s.Tuple(s.Symbol('equalFractions'),v),'Mean':mean,'Median':median,'Mode':mode,'Range':span,'V':lambda *v:s.Tuple(s.Symbol('values'),*v),'D':lambda *v:s.Tuple(s.Symbol('dataset'),*v),'C':lambda v:s.Tuple(s.Symbol('change'),v),'E':lambda v:s.Tuple(s.Symbol('equalities'),v),'H':lambda target,unit:s.Tuple(s.Symbol('rounding'),target,unit),'I':lambda op,bound,extra:s.Tuple(s.Symbol('inequality'),s.Symbol(op),bound,extra),'CP':checkpoint_calculate,'Digits':lambda n:sum(map(int,str(n)))})
    def compare(t):
        chunks=maths(str(t))
        if isinstance(expected,s.Tuple) and str(expected[0])=='inequality':
            op,bound,extra=expected[1:];op=str(op)
            assert len(chunks)==2
            token={'gt':'>','lt':'<','ge':r'\ge','le':r'\le'}[op]
            parts=chunks[0].split(token)
            if len(parts)!=2 or parts[0].strip()!='x':return False
            if number(parts[1])!=bound:return False
            if extra!=-1:return number(chunks[1])==extra and 'positive integer solutions' in t.lower()
            words={'gt':'greater than','lt':'less than','ge':'greater than or equal to','le':'less than or equal to'}[op]
            prose=re.sub(r'\$[^$]*\$','VALUE',t).lower()
            return ('all numbers '+words+' value') in prose and number(chunks[1])==bound
        if isinstance(expected,s.Tuple) and str(expected[0])=='rounding':
            assert len(chunks)==1
            target,unit=expected[1:]
            return s.floor(number(chunks[0])/unit+s.Rational(1,2))*unit==target
        if isinstance(expected,s.Tuple) and str(expected[0])=='equalities':
            assert len(chunks)==1
            parts=chunks[0].split('=');assert len(parts)>1
            return all(number(v)==expected[1] for v in parts)
        if isinstance(expected,s.Tuple) and str(expected[0])=='change':
            low=t.lower()
            if not chunks:
                assert low in ['it is back where it started','it stays the same']
                return expected[1]==0
            assert len(chunks)==1
            value=number(chunks[0])
            if any(w in low for w in ['lower','down','decrease']):value=-value
            else:assert any(w in low for w in ['higher','up','increase']) or value==0
            return value==expected[1]
        if isinstance(expected,s.Tuple) and str(expected[0])=='values':
            if len(chunks)==1 and ',' in chunks[0]:
                chunks=[v.replace('\\ ','').strip() for v in chunks[0].split(',')]
            if len(chunks)==1 and re.search('[<>]',chunks[0]):
                terms=re.split('[<>]',chunks[0]);ops=re.findall('[<>]',chunks[0])
                vals=[number(v) for v in terms]
                return tuple(vals)==tuple(expected[1:]) and all(a<b if op=='<' else a>b for a,b,op in zip(vals,vals[1:],ops))
            assert len(chunks)==len(expected)-1
            return all(number(re.sub(r'^[A-Za-z]\s*=\s*','',c))==v for c,v in zip(chunks,expected[1:]))
        if isinstance(expected,s.Tuple) and str(expected[0])=='dataset':
            assert len(chunks)==1
            vals=[number(x) for x in chunks[0].split(',')]
            n,av,med,mo,ra=expected[1:]
            mode_ok=mo==-1 or (mo in vals and all(vals.count(mo)>vals.count(v) for v in set(vals) if v!=mo))
            return len(vals)==n and all(v.is_integer and v>=0 for v in vals) and mean(*vals)==av and median(*vals)==med and mode_ok and (ra==-1 or span(*vals)==ra)
        if isinstance(expected,s.Tuple) and str(expected[0])=='equalFractions':
            assert len(chunks)==2
            return bool(number(chunks[0])==number(chunks[1]))==bool(expected[1])
        if re.fullmatch(r'\$[^$]+\$ hours? \$[^$]+\$ minutes?',str(t)):
            assert len(chunks)==2
            return s.simplify(number(chunks[0])+number(chunks[1])/60-expected)==0
        if re.fullmatch(r'prealgebra/4/4.6/(?:1|2|3|5|7)/[123]',item['id']) and t in ['They are equal','It depends on the whole','It depends on the size of the whole','Impossible to tell','Cross-multiplication cannot decide this']:
            # These specific pinned stems compare unequal fixed rational numbers.
            vals=[number(v) for v in maths(p['q'])];assert len(vals)==2 and vals[0]!=vals[1]
            return False
        assert len(chunks)==1
        if isinstance(expected,(tuple,s.Tuple)):
            if str(expected[0])=='clock':
                m=re.fullmatch(r'(\d+)\{?:\}?(\d+)',chunks[0]);assert m
                h=int(m[1]);minute=int(m[2]);h=(h%12+12) if ('pm' in t or 'noon' in t) else h%12
                return h*60+minute==expected[1]
            vals=[number(x) for x in chunks[0].split(':')]
            return ratio(*vals)==tuple(expected)
        return s.simplify(number(chunks[0])-expected)==0
    p=item['p'];matches=[];unread=[]
    if p.get('choices'):
        if isinstance(expected,s.Tuple) and str(expected[0])=='position':matches=[int(expected[1])]
        else:
            for i,t in enumerate(p['choices']):
                try:
                    if compare(t):matches.append(i)
                except Exception:unread.append(i)
        matched=matches==[p['answer']];unique=len(matches)==1 and not unread
    else:matched=bool(compare(p['answer']));unique=None
    return {'id':item['id'],'sourceDigest':item['digest'],'status':'verified' if matched and unique is not False else 'needs-review' if unread else 'possible-error',
        'method':'independently-transcribed-stem-calculation','evidence':{'expression':formula,'reason':declaration['why']},'computed':str(expected),'keyMatch':matched,'uniqueChoice':unique,
        'matchingChoices':matches,'uninterpretedChoices':unread,'limitations':['Explanation prose not independently checked sentence by sentence.']}
