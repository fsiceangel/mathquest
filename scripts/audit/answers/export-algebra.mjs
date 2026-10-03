import { inventory } from '../lib/content.mjs'
import { createHash } from 'node:crypto'
import { mkdirSync, writeFileSync } from 'node:fs'

// A digest covers the complete authored item, including choices and explanation.
// The independent solver receives only the stem and figure, never the key.
const { records } = await inventory()
const items = records.filter(r => r.book === 'intro-algebra').map(r => ({
  ...r,
  digest: createHash('sha256').update(JSON.stringify(r.p)).digest('hex'),
}))
mkdirSync('notes/answer-audits', { recursive: true })
writeFileSync('notes/answer-audits/intro-algebra-source.json', JSON.stringify(items, null, 2) + '\n')
console.log(`Exported ${items.length} current Algebra items with SHA-256 digests.`)
