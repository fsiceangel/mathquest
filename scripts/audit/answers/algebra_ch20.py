"""Replay root's independent chapter-20/22 calculations and pinned verbal proofs."""
import json,re
from pathlib import Path
import sympy as s
from algebra import expr, maths
ROOT=Path(__file__).resolve().parents[3]

def tagged(name):return lambda *v:s.Tuple(s.Symbol(name),*v)
def value(t):
    t=re.sub(r'^(?:[A-Za-z](?:\([^)]*\))?)\s*=\s*','',t)
    return expr(t.replace(r'\$',''))
def main(chapter=20,write=True):
    items={r['id']:r for r in json.loads((ROOT/'notes/answer-audits/intro-algebra-source.json').read_text(encoding='utf-8'))}
    out=ROOT/f'notes/answer-audits/intro-algebra-ch{chapter}-reviewed.json'
    old={r['id']:r for r in json.loads(out.read_text(encoding='utf-8'))} if out.exists() else {}
    rows=[]
    for line in Path(__file__).with_name(f'algebra-ch{chapter}.tsv').read_text(encoding='utf-8').splitlines():
        if not line or line.startswith('#'):continue
        family,formulas,why=line.split('\t')
        fs=formulas.split(';')
        if len(family.split('/'))==3:entries=[(family,formulas)]
        else:
            assert len(fs)==4
            entries=[(family+'/'+str(i+1),f) for i,f in enumerate(fs)]
        for short,formula in entries:
            item=items[f'intro-algebra/{chapter}/'+short];p=item['p']
            if item['id'] in old:assert old[item['id']]['sourceDigest']==item['digest'],'Stale manual proof requires re-review: '+item['id']
            expected=s.sympify(formula,locals={'P':tagged('position'),'V':tagged('values'),'F':tagged('integerList'),'A':tagged('absoluteEquation'),'I':tagged('inequality'),'B':tagged('boundedIntegers'),'x':expr('x'),'FiniteSet':s.FiniteSet,'Interval':s.Interval})
            tag=str(expected[0]) if isinstance(expected,s.Tuple) else None
            def compare(text):
                chunks=maths(text)
                if tag=='boundedIntegers':
                    lo,hi,lc,uc,mode=map(int,expected[1:]);assert len(chunks)==2
                    op1=r'\le' if lc else '<';op2=r'\le' if uc else '<'
                    chain=f'{lo}{op1}x{op2}{hi}'
                    integers=list(range(lo+(not lc),hi+uc))
                    second=chunks[1].replace(' ','')
                    return chunks[0].replace(' ','')==chain and (value(second)==len(integers) if mode else second==','.join(map(str,integers)))
                if tag=='values':
                    assert len(chunks)==len(expected)-1
                    return all(s.simplify(value(c)-v)==0 for c,v in zip(chunks,expected[1:]))
                if tag=='inequality':
                    op,bound=expected[1:];token={'le':r'\le','ge':r'\ge'}[str(op)]
                    assert len(chunks)==1
                    left,right=chunks[0].split(token)
                    return left.strip() in ['x','t'] and s.simplify(value(right)-bound)==0
                if tag=='absoluteEquation':
                    a,d,u,v=expected[1:]
                    assert len(chunks)==3
                    eq=chunks[0].replace(' ','')
                    return eq==f'|x+{a}|={d}' and {value(chunks[1]),value(chunks[2])}=={u,v} and abs(u+a)==d and abs(v+a)==d
                if tag=='integerList':
                    n,lo,hi=map(int,expected[1:]);assert hi-lo+1==n
                    assert len(chunks)==2
                    listed=chunks[1].replace(' ','').removeprefix('x=')
                    target=','.join(str(k) for k in range(lo,hi+1)) if n==3 else f'{lo},{lo+1},\\ldots,{hi}'
                    return value(chunks[0])==n and listed==target
                assert len(chunks)==1
                return s.simplify(value(chunks[0])-expected)==0
            if p.get('choices'):
                matches=[int(expected[1])] if tag=='position' else [i for i,t in enumerate(p['choices']) if compare(t)]
                assert matches==[p['answer']],(item['id'],expected,matches,p['answer'])
                unique=True
            else:
                assert compare(p['answer']),(item['id'],expected,p['answer'])
                unique=None
            rows.append({'id':item['id'],'sourceDigest':item['digest'],'status':'verified','method':'Independent exact calculation and complete pinned option proof','evidence':{'expression':formula,'reason':why},'computed':str(expected),'keyMatch':True,'uniqueChoice':unique,'limitations':['Source-pinned manual semantic proofs; explanatory prose not fully sentence-by-sentence audited.']})
    if write:
        pending=out.with_suffix('.pending')
        pending.write_text(json.dumps(rows,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
        pending.replace(out)
    print(f'Chapter{chapter}: {len(rows)} additional independently reviewed itemversions passed.')
    return rows

if __name__=='__main__':
    import sys
    main(int(sys.argv[1]) if len(sys.argv)>1 else 20)
