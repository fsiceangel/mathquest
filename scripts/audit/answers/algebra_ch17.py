"""Replay independently solved MC and full worksheet proofs for graphing functions."""
import json,re
from pathlib import Path
from algebra_ch20 import main,ROOT

def normalize(text):
    return re.sub(r'\s+',' ',text.replace('—','-').replace('–','-')).strip()

if __name__=='__main__':
    out=ROOT/'notes/answer-audits/intro-algebra-ch17-reviewed.json'
    old={r['id']:r for r in json.loads(out.read_text(encoding='utf-8'))} if out.exists() else {}
    rows=main(17,write=False)
    source={r['id']:r for r in json.loads((ROOT/'notes/answer-audits/intro-algebra-source.json').read_text(encoding='utf-8'))}
    for line in Path(__file__).with_name('algebra-ch17-worksheet.tsv').read_text(encoding='utf-8').splitlines():
        if not line or line.startswith('#'):continue
        short,expected,proof=line.split('\t')
        item=source['intro-algebra/17/worksheet/'+short]
        assert item['id'] not in old or old[item['id']]['sourceDigest']==item['digest'], 'Stale proof: '+item['id']
        assert normalize(item['p']['answer'])==normalize(expected),(item['id'],expected,item['p']['answer'])
        rows.append({'id':item['id'],'sourceDigest':item['digest'],'status':'verified','method':'Independent complete worksheet derivation and pinned semantic comparison','evidence':{'derivedAnswer':expected,'proof':proof},'computed':expected,'keyMatch':True,'uniqueChoice':None,'limitations':['Manual symbolic and verbal proof; full solution prose and visual rendering not comprehensively audited.']})
    assert len(rows)==175 and len({r['id'] for r in rows})==175
    pending=out.with_suffix('.pending')
    pending.write_text(json.dumps(rows,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
    pending.replace(out)
    print('Chapter17: all175 outstanding itemversions independently verified.')
