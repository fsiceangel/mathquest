import { createServer } from 'vite'
import { writeFileSync } from 'node:fs'
import { numericChoice } from './lib/numeric-choice.mjs'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
try {
  const { allChapters, loadVariants } = await server.ssrLoadModule('/src/data/content.js')
  const chapters = allChapters()
  await Promise.all(chapters.map(ch => loadVariants(ch.book, ch.number)))
  const groups = []
  for (const ch of chapters) for (const group of [...ch.sections.map(s => ({id:s.id,title:s.title,problems:s.problems})), {id:'challenge',title:'Chapter challenge',problems:ch.challenge}]) {
    const slots = group.problems.map((p, index) => {
      const versions = [p, ...p.variants].map(v => {
        const choices = v.choices?.map(numericChoice)
        const spec = choices?.[v.answer]
        const unsafe = /\b(which|following|below|listed|choice|option|statement|could be)\b/i.test(v.q)
        const eligible = !unsafe && !!spec
        return {id:v.calibration.id,q:v.q,choices:v.choices,answer:v.answer,level:v.calibration.level,spec,eligible}
      })
      return {index,eligible:versions.every(v => v.eligible),versions}
    })
    const eligible = slots.filter(s => s.eligible)
    const target = Math.max(2, Math.ceil(slots.length * .3))
    const count = Math.min(target, eligible.length)
    const selected = new Set(Array.from({length:count}, (_,i) => eligible[Math.floor(i * eligible.length / count)].index))
    groups.push({id:`${ch.book}/${ch.number}/${group.id}`,title:group.title,total:slots.length,target,selected:slots.filter(s=>selected.has(s.index)),other:slots.filter(s=>!selected.has(s.index))})
  }
  writeFileSync('tmp/entry-candidates.json', JSON.stringify(groups,null,2)+'\n')
  console.log(JSON.stringify({groups:groups.length,slots:groups.reduce((n,g)=>n+g.selected.length,0),sectionsShort:groups.filter(g=>!g.id.endsWith('/challenge') && g.selected.length<2).map(g=>({id:g.id,title:g.title,selected:g.selected.length,total:g.total}))},null,2))
} finally { await server.close() }
