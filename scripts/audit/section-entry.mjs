import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { createServer } from 'vite'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { numericChoice } from './lib/numeric-choice.mjs'
import { gradeEntry, parseEntry } from '../../src/lib/answer-entry.js'
import { sectionAnswerEntries } from '../../src/data/section-answer-entry.js'
import { practiceProblems } from '../../src/lib/practice-format.js'
import { newAttempt, reconcileAttempt, saveAttempt } from '../../src/lib/attempts.js'

assert.equal(numericChoice('$8\\frac{1}{12}$'),null,'Never concatenate mixed numbers')
assert.equal(numericChoice('$25\\%$ lower'),null,'Never lose change direction')
assert.equal(numericChoice('$0.75\\text{ kg}$').expected,'0.75')
assert.equal(numericChoice('$x = -\\frac{3}{4}$').expected,'-3/4')
assert.equal(numericChoice('$4$ only').unit,undefined)
assert.equal(numericChoice('$4$ apples or oranges'),null)
const memory = new Map()
globalThis.localStorage = {getItem:k=>memory.get(k)??null,setItem:(k,v)=>memory.set(k,v),removeItem:k=>memory.delete(k)}
globalThis.window = {dispatchEvent(){}}
const server = await createServer({server:{middlewareMode:true},appType:'custom',logLevel:'error'})
try {
  const {allChapters,loadVariants} = await server.ssrLoadModule('/src/data/content.js')
  const {default:QuizView} = await server.ssrLoadModule('/src/views/QuizView.jsx')
  const chapters=allChapters()
  await Promise.all(chapters.map(c=>loadVariants(c.book,c.number)))
  const all = chapters.flatMap(ch=>[...ch.sections.map(s=>s.problems),ch.challenge].flatMap(ps=>ps.flatMap(p=>[p,...p.variants])))
  const byId = new Map(all.map(p=>[p.calibration.id,p]))
  const digests={},seenSections=new Set(),coveredChapters=new Set()
  let versions=0,submitted=0
  for (const [slot,specs] of Object.entries(sectionAnswerEntries)) {
    assert.equal(specs.length,4)
    for (let round=1;round<=4;round++) {
      const id=`${slot}/${round}`,p=byId.get(id),spec=specs[round-1]
      assert(p,`Missing ${id}`)
      assert.equal(p.answerEntry,undefined,'Raw registry must retain choice format')
      const extracted = numericChoice(p.choices[p.answer])
      assert(extracted,`Unparseable keyed answer ${id}`)
      assert.deepEqual(parseEntry(spec.expected,'rational'),parseEntry(extracted.expected,'rational'),id)
      assert.equal(spec.unit,extracted.unit,id)
      assert.equal(spec.label,extracted.label,id)
      assert.equal(gradeEntry(spec.expected,spec).correct,true,id)
      const shown=practiceProblems([p],'quiz')
      assert.deepEqual(shown[0].answerEntry,spec)
      assert.equal(practiceProblems([p],'arena')[0],p,'Timed paper changed format')
      const draft=newAttempt('quiz',shown)
      draft.inputs[0]='abc'
      assert.equal(reconcileAttempt(draft,practiceProblems([p],'quiz',draft)).attempt.answers[0],null)
      draft.answers[0]={type:'input',value:spec.expected}
      assert.deepEqual(reconcileAttempt(draft,practiceProblems([p],'quiz',draft)).attempt.answers,draft.answers)
      const old=newAttempt('quiz',[p]);old.answers[0]=p.answer
      const migrated=practiceProblems([p],'quiz',old)
      assert.equal(migrated[0],p,'Already answered legacy choice must survive')
      assert.equal(reconcileAttempt(old,migrated).changed,false)
      const timed=newAttempt('arena',[p]);timed.answers[0]=p.answer
      assert.equal(reconcileAttempt(timed,practiceProblems([p],'arena',timed)).changed,false)
      digests[id]=createHash('sha256').update(JSON.stringify([p.q,p.choices,p.answer,p.fig])).digest('hex')
      const parts=slot.split('/');coveredChapters.add(parts.slice(0,2).join('/'))
      if(parts[2]!=='challenge') seenSections.add(parts.slice(0,3).join('/'))
      versions++;submitted++
    }
  }
  assert.equal(versions,4100)
  assert.equal(seenSections.size,275)
  assert.equal(coveredChapters.size,71)
  const pins='notes/audits/section-entry-reviewed-digests.json'
  if(process.argv.includes('--record-reviewed')) writeFileSync(pins,JSON.stringify(digests,null,2)+'\n')
  else assert.deepEqual(digests,JSON.parse(readFileSync(pins,'utf8')),'Reviewed question changed; repeat suitability review')
  // Exercise the actual hook on a fresh section and after a legacy three-answer save.
  const section=chapters.find(ch=>ch.book==='prealgebra'&&ch.number===1).sections[0]
  const base=section.problems, firstTyped=base.findIndex(p=>practiceProblems([p],'quiz')[0].answerEntry)
  const id='prealgebra/1/1.2'
  const attempt=newAttempt('quiz',practiceProblems(base,'quiz'));attempt.index=firstTyped
  saveAttempt(id,attempt)
  const props={title:'Test section',problems:base,storageId:id,backHref:'#/'}
  const html=renderToStaticMarkup(createElement(QuizView,props))
  assert(html.includes('Check answer')&&!html.includes('class="choices"'))
  const old=newAttempt('quiz',base);old.answers=base.map((p,i)=>i<3?p.answer:null);old.index=firstTyped
  saveAttempt(id,old)
  const legacyHtml=renderToStaticMarkup(createElement(QuizView,props))
  assert(legacyHtml.includes('aria-valuenow="3"'))
  assert(legacyHtml.includes('class="choices"'))
  assert(!legacyHtml.includes('Check answer'))
  console.log(JSON.stringify({status:'passed',slots:Object.keys(sectionAnswerEntries).length,versions,sections:seenSections.size,chapters:coveredChapters.size,restoredTypedAnswers:submitted,legacyAndTimedAnswersPreserved:true},null,2))
} finally { await server.close() }
