import { parseEntry } from '../../../src/lib/answer-entry.js'

// Conservative candidate discovery only. Reviewed IDs, not this heuristic,
// determine which questions use entry in the product.
export function numericChoice(choice) {
  // Only explicit numeric math and reviewed units; never flatten mixed numbers.
  choice = choice.replace(/\s*\\text\{\s*([a-zA-Z /]+)\s*\}\$$/, (_, unit) => `$ ${unit}`)
  const m = /^\$([^$]+)\$\s*([a-zA-Z²³%° /-]*)$/.exec(choice.trim())
  if (!m) return null
  let value = m[1].replace(/\{,\}/g, ',')
  let unit = (m[2] ?? '').trim()
  if (unit === 'only') unit = ''
  const variable = /^([a-z])\s*=\s*/.exec(value)
  if (variable) value = value.slice(variable[0].length)
  value = value.replace(/^([+-]?)\\(?:d?frac)\{(-?\d+)\}\{(\d+)\}$/, '$1$2/$3')
  // Grouping commas are accepted only in unambiguous groups of three.
  if (/^[+-]?\d{1,3}(,\d{3})+(\.\d+)?$/.test(value)) value = value.replaceAll(',', '')
  if (/\^\\circ$/.test(value)) { if (unit) return null; value = value.replace(/\^\\circ$/, ''); unit = '°' }
  if (/\\%$/.test(value)) { if (unit) return null; value = value.replace(/\\%$/, ''); unit = '%' }
  if (unit && !new Set(['mL','L','kg','degrees','°','km','m','cm','mm','inches','minutes','g','seconds','miles','km/h','pages per minute','bottles per minute','boxes per hour','km per liter','hours','liters per second','m/s','%','blocks','meters','liters','toys per hour','days','mph','times the area','ft','feet']).has(unit)) return null
  if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+|\d+\/\d+)$/.test(value)) return null
  const parsed = parseEntry(value, 'rational')
  if (!parsed.valid) return null
  return { kind: 'rational', expected: value, ...(unit ? {unit} : {}), ...(variable ? {label:variable[1]} : {}) }
}

