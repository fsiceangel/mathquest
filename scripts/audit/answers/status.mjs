import { readFileSync, existsSync, writeFileSync, mkdirSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { inventory } from '../lib/content.mjs'
const root='notes/answer-audits'
const files=['prealgebra-ledger.jsonl','intro-algebra-ledger.jsonl','intro-counting-ledger.json','intro-geometry-ledger.jsonl','arena-ledger.jsonl','transition-ledger.jsonl']
const ledger=new Map(),duplicates=[]
for(const file of files) {
  if(!existsSync(`${root}/${file}`))continue
  const text=readFileSync(`${root}/${file}`,'utf8').trim()
  // Agents write their own ledgers. Read only completed JSONL records.
  const rows=file.endsWith('.json')?JSON.parse(text):text.split('\n').flatMap(line=>{try{return [JSON.parse(line)]}catch{return []}})
  for(const row of rows){if(ledger.has(row.id))duplicates.push(row.id);ledger.set(row.id,row)}
}
if(duplicates.length)throw Error(`Duplicate answer audit IDs: ${duplicates.join(', ')}`)
const {records}=await inventory(),counts={},chapters={}
const items=records.map(r=>{
  const digest=createHash('sha256').update(JSON.stringify(r.p)).digest('hex')
  const evidence=ledger.get(r.id),book=r.book??'arena',chapter=r.chapter??(r.checkpoint?`checkpoint-${r.checkpoint}`:r.paper)
  let status='needs-review'
  if(evidence?.sourceDigest!==digest&&evidence)status='stale-evidence'
  else if(['verified','answer-verified'].includes(evidence?.status)&&evidence.keyMatch===true&&evidence.uniqueChoice!==false)status='answer-verified'
  else if(evidence?.status==='confirmed-error')status='confirmed-error'
  else if(evidence?.status==='possible-error')status='requires-investigation'
  counts[book]??={total:0};counts[book].total++;counts[book][status]=(counts[book][status]??0)+1
  const k=`${book}/${chapter}`;chapters[k]??={total:0};chapters[k].total++;chapters[k][status]=(chapters[k][status]??0)+1
  return {id:r.id,path:r.path,sourceDigest:digest,status,method:evidence?.method??null}
})
mkdirSync(root,{recursive:true})
writeFileSync(`${root}/status.json`,JSON.stringify({generatedAt:new Date().toISOString(),counts,chapters,items},null,2)+'\n')
const verified=items.filter(r=>r.status==='answer-verified').length
const lines=['# 答案独立核验进度','',`当前题库共 ${items.length} 个题目版本，其中 ${verified} 个答案已有匹配当前内容的独立核验记录。`,verified===items.length?'全部题目版本均有匹配当前内容的答案核验记录；没有待审、过期证据或未解决的答案错误。':`尚未独立通过：${items.length-verified}。这份进度表不能被描述成全题库已验证。`,'','| 书 / 卷 | 全部 | 答案通过 | 待审 | 证据过期 | 待调查 / 确证错误 |','|---|---:|---:|---:|---:|---:|',...Object.entries(counts).map(([book,c])=>`| ${book} | ${c.total} | ${c['answer-verified']??0} | ${c['needs-review']??0} | ${c['stale-evidence']??0} | ${(c['requires-investigation']??0)+(c['confirmed-error']??0)} |`),'','核验覆盖：独立从题干求解，与答案键比较；选择题还检查唯一正确选项。每条证据绑定完整题目内容的 SHA-256，修改题干、图、选项、答案或解释后需重新核验。','', '局限：答案通过不等同于逐句解析、每张图的视觉呈现或学生实际难度均已认证。各书 ledger 保留具体方法和限制。Worksheet 中构造题可有多个合格答案，检查的是所给示例是否满足条件。','', '进度保存修复与浏览器验证见 [progress-saving.md](progress-saving.md)。原教材对应关系见各书 source 报告；网站练习为原创配套题，不能冒充原教材题号逐题对应。','']
writeFileSync(`${root}/README.md`,lines.join('\n'))
console.log(JSON.stringify({total:items.length,verified,remaining:items.length-verified,counts},null,2))
if(process.argv.includes('--require-complete')&&verified!==items.length)process.exitCode=1
