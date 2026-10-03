import { inventory } from '../lib/content.mjs'
import { createHash } from 'node:crypto'
import { mkdirSync, writeFileSync } from 'node:fs'
const { records } = await inventory()
const items = records.filter(r => r.book === 'prealgebra').map(r => ({ ...r,
  digest: createHash('sha256').update(JSON.stringify(r.p)).digest('hex'),
}))
mkdirSync('notes/answer-audits', { recursive: true })
writeFileSync('notes/answer-audits/prealgebra-source.json', JSON.stringify(items, null, 2) + '\n')
console.log(`Exported ${items.length} Prealgebra items.`)
