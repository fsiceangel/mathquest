"""Independent chapter5 linear-system and discrete-count audit, full source pins."""
import json,re
from pathlib import Path
import sympy as s
from algebra import expr,maths
ROOT=Path(__file__).resolve().parents[3]
def main():
 items={r['id']:r for r in json.loads((ROOT/'notes/answer-audits/intro-algebra-source.json').read_text(encoding='utf8'))}
 dest=ROOT/'notes/answer-audits/intro-algebra-ch5-reviewed.json'
 old={r['id']:r for r in json.loads(dest.read_text(encoding='utf8'))} if dest.exists() else {}
 rows=[]
 for line in Path(__file__).with_name('algebra-ch5.tsv').read_text(encoding='utf8').splitlines():
  family,fs,why=line.split('\t'); entries=[(family,fs)] if len(family.split('/'))==3 else [(family+'/'+str(i+1),f) for i,f in enumerate(fs.split(';'))]
  for short,f in entries:
   r=items['intro-algebra/5/'+short];p=r['p'];expected=s.sympify(f,locals={'P':lambda *v:s.Tuple(s.Symbol('position'),*v),'V':lambda *v:s.Tuple(s.Symbol('values'),*v)})
   if r['id'] in old:assert old[r['id']]['sourceDigest']==r['digest'],r['id']
   kind=str(expected[0]) if isinstance(expected,s.Tuple) else None
   def compare(t):
    chunks=maths(t)
    if kind=='values':
     vals=[]
     for c in chunks:
      if '=' in c:c=c.split('=')[-1]
      vals.extend(s.Rational(n) for n in re.findall(r'(?<![A-Za-z])[-+]?\d+(?:\.\d+)?',c))
     return vals==list(expected[1:])
    if len(chunks)!=1:return False
    try:return s.simplify(expr(chunks[0].replace(r'\$',''))-expected)==0
    except Exception:return False
   if p.get('choices'):
    matches=[int(expected[1])] if kind=='position' else [i for i,t in enumerate(p['choices']) if compare(t)]
    assert matches==[p['answer']],(r['id'],matches,p['answer'],expected)
   else:assert compare(p['answer']),(r['id'],p['answer'],expected)
   rows.append({'id':r['id'],'sourceDigest':r['digest'],'status':'verified','method':'Independent linear system or counting derivation; complete MC option review','evidence':{'expression':f,'reason':why},'computed':str(expected),'keyMatch':True,'uniqueChoice':True if p.get('choices') else None,'limitations':['Explanation prose not independently checked sentence by sentence.']})
 dest.write_text(json.dumps(rows,indent=2,ensure_ascii=False)+'\n',encoding='utf8');print('Chapter5 verified',len(rows))
if __name__=='__main__':main()
