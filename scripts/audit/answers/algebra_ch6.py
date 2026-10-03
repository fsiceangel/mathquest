"""Replay chapter6 independent exact arithmetic, preserving ordered ratio semantics."""
import json,re,math
from pathlib import Path
import sympy as s
from algebra import expr,maths
ROOT=Path(__file__).resolve().parents[3]
def tag(name):return lambda *v:s.Tuple(s.Symbol(name),*v)
def numeric(t):
    out=expr(t.replace(r'\$', '').replace(r'\%', ''))
    assert not out.free_symbols
    return out
def ratio(v):
    assert all(x>0 for x in v)
    return tuple(s.cancel(x/v[0]) for x in v)
def main():
    items={r['id']:r for r in json.loads((ROOT/'notes/answer-audits/intro-algebra-source.json').read_text(encoding='utf8'))}
    dest=ROOT/'notes/answer-audits/intro-algebra-ch6-reviewed.json'
    old={r['id']:r for r in json.loads(dest.read_text(encoding='utf8'))} if dest.exists() else {}
    rows=[];failed=[]
    for line in Path(__file__).with_name('algebra-ch6.tsv').read_text(encoding='utf8').splitlines():
        if not line or line.startswith('#'):continue
        family,formulas,why=line.split('\t')
        entries=[(family,formulas)] if len(family.split('/'))==3 else [(family+'/'+str(i+1),f) for i,f in enumerate(formulas.split(';'))]
        if len(family.split('/'))==2:assert len(entries)==4
        for short,formula in entries:
            item=items['intro-algebra/6/'+short];p=item['p']
            if item['id'] in old:assert item['digest']==old[item['id']]['sourceDigest'],'Changed stem needs re-review: '+item['id']
            expected=s.sympify(formula,locals={'R':tag('ratio'),'P':tag('position'),'C':tag('change')})
            kind=str(expected[0]) if isinstance(expected,s.Tuple) else None
            def compare(text):
                chunks=maths(text)
                if kind=='change':
                    if text=='No change at all':return expected[1]==0
                    assert len(chunks)==1 and r'\%' in chunks[0]
                    assert ('increase' in text.lower()) != ('decrease' in text.lower())
                    sign=-1 if 'decrease' in text.lower() else 1
                    return sign*numeric(chunks[0])==expected[1]
                assert len(chunks)==1
                if kind=='ratio':return ratio([numeric(t) for t in chunks[0].split(':')])==ratio(expected[1:])
                chunk=chunks[0]
                if item['group']=='6.3' and item['round']>1:
                    units={1:['mm','m','mL'],2:['min','h','s'],4:['kg','m','L'],5:['m/s']*3,6:['km/h']*3,7:['cm','L','m'],8:['tins','ticks','gems'],9:['m','m','s'],10:['pages','bottles','crates']}
                    unit=units[item['index']+1][item['round']-2]
                    suffix=r'\text{ '+unit+'}'
                    assert chunk.endswith(suffix),('Unexpected unit',chunk,unit)
                    chunk=chunk[:-len(suffix)]
                return s.simplify(numeric(chunk)-expected)==0
            try:
                if p.get('choices'):
                    matches=[int(expected[1])] if kind=='position' else [i for i,t in enumerate(p['choices']) if compare(t)]
                    assert matches==[p['answer']],(expected,matches,p['answer'])
                    unique=True
                else:
                    assert compare(p['answer']),(expected,p['answer'])
                    unique=None
                rows.append({'id':item['id'],'sourceDigest':item['digest'],'status':'verified','method':'Independent exact stem calculation and complete option comparison','evidence':{'expression':formula,'reason':why},'computed':str(expected),'keyMatch':True,'uniqueChoice':unique,'limitations':['Explanation prose not independently checked sentence by sentence.']})
            except Exception as e:failed.append((item['id'],str(e)))
    if failed:
        print('FAILURES',failed)
        raise SystemExit(1)
    dest.write_text(json.dumps(rows,indent=2,ensure_ascii=False)+'\n',encoding='utf8')
    print('Chapter6 verified',len(rows))
if __name__=='__main__':main()
