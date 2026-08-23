import { useEffect, useState } from 'react'
import { markLearned } from '../lib/storage.js'
import { M } from '../lib/math.jsx'
import { BackLink } from '../components/ui.jsx'
import { Target, ArrowRight } from '../components/icons.jsx'
import { Fig } from '../components/Fig.jsx'

function Example({ example, index }) {
  const [revealed, setRevealed] = useState(0)
  const total = example.steps.length
  const showAnswer = revealed > total
  return (
    <article className="example-card">
      <header className="example-head">
        <span className="example-chip">Example {index + 1}</span>
        <p className="example-problem">
          <M>{example.problem}</M>
        </p>
      </header>
      {example.fig && <Fig fig={example.fig} />}
      <ol className="example-steps">
        {example.steps.slice(0, revealed).map((step, i) => (
          <li key={i} className="example-step">
            <span className="step-num">{i + 1}</span>
            <span>
              <M>{step}</M>
            </span>
          </li>
        ))}
      </ol>
      {showAnswer ? (
        <p className="example-answer">
          <M>{example.answer}</M>
        </p>
      ) : (
        <button className="btn btn-ghost" onClick={() => setRevealed((r) => r + 1)}>
          {revealed < total ? `Show step ${revealed + 1}` : 'Reveal the answer'}
        </button>
      )}
    </article>
  )
}

export default function LearnView({ book, chapter, section }) {
  const base = `#/book/${book.id}/ch/${chapter.number}`
  useEffect(() => {
    markLearned(`${book.id}/${chapter.number}/${section.id}`)
  }, [book.id, chapter.number, section.id])

  return (
    <main className="page page-narrow">
      <BackLink href={base}>
        Chapter {chapter.number}: {chapter.title}
      </BackLink>
      <header className="page-head">
        <p className="eyebrow">Section {section.id} · Learn</p>
        <h1>{section.title}</h1>
      </header>

      <div className="concept-list">
        {section.learn.concepts.map((c, i) => (
          <section key={i} className="concept-card">
            <span className="concept-num">{i + 1}</span>
            <div>
              <h2>
                <M>{c.heading}</M>
              </h2>
              <p>
                <M>{c.body}</M>
              </p>
            </div>
          </section>
        ))}
      </div>

      <h2 className="list-heading">Let&rsquo;s try some together</h2>
      <div className="example-list">
        {section.learn.examples.map((ex, i) => (
          <Example key={i} example={ex} index={i} />
        ))}
      </div>

      <div className="cta-card">
        <p>Feeling ready? Ten problems are waiting for you.</p>
        <a className="btn btn-accent btn-lg" href={`${base}/practice/${section.id}`}>
          <Target size={18} />
          Practice this section
          <ArrowRight size={18} />
        </a>
      </div>
    </main>
  )
}
