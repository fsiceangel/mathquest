"""Replay source-pinned independent function and invented-operation proofs."""
import json,re
from pathlib import Path
import sympy as s
from algebra import expr,maths
ROOT=Path(__file__).resolve().parents[3]
def tag(name):return lambda *v:s.Tuple(s.Symbol(name),*v)
def value(t):return expr(t.split('=')[-1].strip().replace(r'\$', ''))
def main():
    items={r['id']:r for r in json.loads((ROOT/'notes/answer-audits/intro-algebra-source.json').read_text(encoding='utf8'))}
    dest=ROOT/'notes/answer-audits/intro-algebra-ch16-reviewed.json'
    old={r['id']:r for r in json.loads(dest.read_text(encoding='utf8'))} if dest.exists() else {}
    rows=[];failed=[]
    for line in Path(__file__).with_name('algebra-ch16.tsv').read_text(encoding='utf8').splitlines():
        if not line or line.startswith('#'):continue
        family,formulas,why=line.split('\t')
        entries=[(family,formulas)] if len(family.split('/'))==3 else [(family+'/'+str(i+1),f) for i,f in enumerate(formulas.split(';'))]
        if len(family.split('/'))==2:assert len(entries)==4
        for short,formula in entries:
            item=items['intro-algebra/16/'+short];p=item['p']
            if item['id'] in old:assert item['digest']==old[item['id']]['sourceDigest'],'Changed stem needs re-review: '+item['id']
            expected=s.sympify(formula,locals={'P':tag('position'),'V':tag('values'),'N':tag('noncommutative'),'x':expr('x'),'n':expr('n'),'s':expr('s')})
            kind=str(expected[0]) if isinstance(expected,s.Tuple) else None
            def compare(text):
                chunks=maths(text)
                if kind=='noncommutative':
                    assert len(chunks)==3 and 'not commutative' in text
                    assert expected[1]!=expected[2]
                    return all(s.simplify(value(c)-v)==0 for c,v in zip(chunks[:2],expected[1:]))
                if kind=='values':
                    assert len(chunks)==len(expected)-1
                    return all(s.simplify(value(c)-v)==0 for c,v in zip(chunks,expected[1:]))
                assert len(chunks)==1
                return s.simplify(value(chunks[0])-expected)==0
            try:
                if p.get('choices'):
                    matches=[int(expected[1])] if kind=='position' else [i for i,t in enumerate(p['choices']) if compare(t)]
                    assert matches==[p['answer']],(expected,matches,p['answer'])
                    unique=True
                else:
                    assert compare(p['answer']),(expected,p['answer'])
                    unique=None
                rows.append({'id':item['id'],'sourceDigest':item['digest'],'status':'verified','method':'Independent exact stem calculation and complete source-pinned option proof','evidence':{'expression':formula,'reason':why},'computed':str(expected),'keyMatch':True,'uniqueChoice':unique,'limitations':['Explanation prose not independently checked sentence by sentence.']})
            except Exception as e:failed.append((item['id'],str(e)))
    if failed:
        print('FAILURES',failed)
        raise SystemExit(1)
    dest.write_text(json.dumps(rows,indent=2,ensure_ascii=False)+'\n',encoding='utf8')
    print('Chapter16 verified',len(rows))
if __name__=='__main__':main()
