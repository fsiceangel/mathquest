import { inventory } from './lib/content.mjs'
const [book, from = '1', to = from, kind = 'base'] = process.argv.slice(2)
const { records } = await inventory()
for (const r of records) {
  if (book === 'arena' ? !r.paper : r.book !== book) continue
  const chapter = r.chapter ?? r.checkpoint ?? 1
  if (chapter < Number(from) || chapter > Number(to)) continue
  if (kind === 'base' && (r.round !== 1 || r.checkpoint)) continue
  if (kind === 'checkpoint' && !r.checkpoint) continue
  if (kind === 'variants' && r.round === 1) continue
  if (process.env.GROUPS && !process.env.GROUPS.split(',').includes(r.group)) continue
  console.log(`${r.id} | ${r.p.q} | KEY ${r.p.choices ? r.p.choices[r.p.answer] : r.p.answer}${process.env.SOLUTIONS ? ` | ${r.p.solution}` : ''}`)
}
