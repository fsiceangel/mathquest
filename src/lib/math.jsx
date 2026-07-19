import katex from 'katex'

// Math chunks are $...$ where the inside may contain escaped dollar signs
// (\$ for currency). The delimiters themselves must be unescaped dollars.
const MATH_SPLIT = /((?<!\\)\$(?:\\\$|[^$])+\$)/g

// Renders a content string, converting each $...$ chunk to KaTeX.
export function M({ children }) {
  const text = String(children ?? '')
  const parts = text.split(MATH_SPLIT)
  return (
    <>
      {parts.map((part, i) => {
        if (part.length > 2 && part.startsWith('$') && part.endsWith('$')) {
          const html = katex.renderToString(part.slice(1, -1), { throwOnError: false })
          return <span key={i} dangerouslySetInnerHTML={{ __html: html }} />
        }
        return part ? <span key={i}>{part}</span> : null
      })}
    </>
  )
}
