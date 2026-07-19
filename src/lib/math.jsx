import katex from 'katex'

// Renders a content string, converting each $...$ chunk to KaTeX.
export function M({ children }) {
  const text = String(children ?? '')
  const parts = text.split(/(\$[^$]+\$)/g)
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
