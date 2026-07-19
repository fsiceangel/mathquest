import { isChapterAvailable, getChapterContent } from '../data/content.js'
import { getResult, starsFor } from '../lib/storage.js'
import { Lock, ArrowRight } from '../components/icons.jsx'
import { BackLink } from '../components/ui.jsx'

function chapterStars(bookId, content) {
  if (!content) return { earned: 0, possible: 0 }
  const ids = [
    ...content.sections.map((s) => `${bookId}/${content.number}/${s.id}`),
    `${bookId}/${content.number}/challenge`,
  ]
  const earned = ids.reduce((sum, id) => sum + starsFor(getResult(id)?.pct), 0)
  return { earned, possible: ids.length * 3 }
}

function ChapterCard({ book, chapter }) {
  const available = isChapterAvailable(book.id, chapter.number)
  const content = available ? getChapterContent(book.id, chapter.number) : null
  const stars = chapterStars(book.id, content)
  const sectionCount = chapter.sections?.length

  const inner = (
    <>
      <span className="ch-num">{chapter.number}</span>
      <span className="ch-info">
        <span className="ch-title">{chapter.title}</span>
        {sectionCount && <span className="ch-sub">{sectionCount} sections</span>}
      </span>
      {available ? (
        <span className="ch-side">
          <span className="ch-stars">
            ★ {stars.earned}/{stars.possible}
          </span>
          <ArrowRight size={18} />
        </span>
      ) : (
        <span className="ch-side ch-locked">
          <Lock size={16} />
          <span>Soon</span>
        </span>
      )}
    </>
  )

  return available ? (
    <a className="chapter-card" href={`#/book/${book.id}/ch/${chapter.number}`}>
      {inner}
    </a>
  ) : (
    <div className="chapter-card is-locked" aria-disabled="true">
      {inner}
    </div>
  )
}

export default function BookPage({ book }) {
  return (
    <main className="page">
      <BackLink href="#/">All books</BackLink>
      <header className="page-head">
        <h1>{book.title}</h1>
        <p className="lede">{book.subtitle}</p>
      </header>
      <div className="chapter-list">
        {book.chapters.map((c) => (
          <ChapterCard key={c.number} book={book} chapter={c} />
        ))}
      </div>
    </main>
  )
}
