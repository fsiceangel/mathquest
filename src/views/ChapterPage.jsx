import { getResult, starsFor, isLearned } from '../lib/storage.js'
import { Bulb, Target, Trophy, Printer, Check, ArrowRight } from '../components/icons.jsx'
import { BackLink, StarBar } from '../components/ui.jsx'
import { M } from '../lib/math.jsx'

function SectionRow({ book, content, section }) {
  const base = `#/book/${book.id}/ch/${content.number}`
  const learned = isLearned(`${book.id}/${content.number}/${section.id}`)
  const result = getResult(`${book.id}/${content.number}/${section.id}`)
  const stars = starsFor(result?.pct)
  return (
    <li className="section-row">
      <span className="sec-chip">{section.id}</span>
      <span className="sec-title">{section.title}</span>
      <span className="sec-actions">
        <a className="btn btn-ghost" href={`${base}/learn/${section.id}`}>
          <Bulb size={17} />
          Learn
          {learned && <Check size={15} className="learned-check" />}
        </a>
        <a className="btn btn-accent" href={`${base}/practice/${section.id}`}>
          <Target size={17} />
          Practice
        </a>
        <StarBar stars={stars} size={15} />
      </span>
    </li>
  )
}

export default function ChapterPage({ book, meta, content }) {
  const base = `#/book/${book.id}/ch/${content.number}`
  const challengeResult = getResult(`${book.id}/${content.number}/challenge`)
  const challengeStars = starsFor(challengeResult?.pct)
  return (
    <main className="page">
      <BackLink href={`#/book/${book.id}`}>{book.title}</BackLink>
      <header className="page-head">
        <p className="eyebrow">Chapter {content.number}</p>
        <h1>{content.title}</h1>
        <p className="lede">
          <M>{content.intro}</M>
        </p>
      </header>

      <h2 className="list-heading">Sections</h2>
      <ol className="section-list">
        {content.sections.map((s) => (
          <SectionRow key={s.id} book={book} content={content} section={s} />
        ))}
      </ol>

      <div className="feature-grid">
        <a className="feature-card" href={`${base}/challenge`}>
          <span className="feature-icon">
            <Trophy size={26} />
          </span>
          <span className="feature-body">
            <span className="feature-title">Chapter Challenge</span>
            <span className="feature-sub">
              {content.challenge.length} mixed problems — trickier than practice. Earn your trophy!
            </span>
            <StarBar stars={challengeStars} size={15} />
          </span>
          <ArrowRight size={18} />
        </a>
        <a className="feature-card" href={`${base}/worksheet`}>
          <span className="feature-icon">
            <Printer size={26} />
          </span>
          <span className="feature-body">
            <span className="feature-title">Printable Worksheet</span>
            <span className="feature-sub">
              {content.worksheet.length} write-it-out problems for paper practice, with a grown-up answer key.
            </span>
          </span>
          <ArrowRight size={18} />
        </a>
      </div>
    </main>
  )
}
