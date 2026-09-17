import { Fragment } from 'react'
import { isChapterAvailable, getChapterContent } from '../data/content.js'
import { checkpointsFor } from '../data/checkpoints/index.js'
import { getResult, starsFor } from '../lib/storage.js'
import { Lock, ArrowRight, Swords } from '../components/icons.jsx'
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
        {sectionCount && <span className="ch-sub">{sectionCount} section{sectionCount === 1 ? '' : 's'}</span>}
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

// A checkpoint card sits in the chapter list right after the last chapter it
// covers, so it reads as the next thing to do rather than a separate mode.
function CheckpointCard({ book, cp }) {
  const best = getResult(`checkpoint/${cp.id}`)
  const [from, to] = cp.covers
  return (
    <a className="chapter-card is-checkpoint accent-amber" href={`#/book/${book.id}/checkpoint/${cp.number}`}>
      <span className="ch-num ch-crest">
        <Swords size={22} />
      </span>
      <span className="ch-info">
        <span className="ch-kicker">
          Checkpoint {cp.number} · Chapters {from}–{to}
        </span>
        <span className="ch-title">{cp.title}</span>
        <span className="ch-sub">
          {cp.problems.length} problems · {cp.minutes ?? 25} minutes · timed
        </span>
      </span>
      <span className="ch-side">
        <span className="ch-stars">{best ? `Best ${best.correct}/${best.total}` : 'Not attempted'}</span>
        <ArrowRight size={18} />
      </span>
    </a>
  )
}

export default function BookPage({ book }) {
  const checkpoints = checkpointsFor(book.id)
  return (
    <main className="page">
      <BackLink href="#/">All books</BackLink>
      <header className="page-head">
        <h1>{book.title}</h1>
        <p className="lede">{book.subtitle}</p>
      </header>
      <div className="chapter-list">
        {book.chapters.map((c) => (
          <Fragment key={c.number}>
            <ChapterCard book={book} chapter={c} />
            {checkpoints
              .filter((cp) => cp.after === c.number)
              .map((cp) => (
                <CheckpointCard key={`cp${cp.number}`} book={book} cp={cp} />
              ))}
          </Fragment>
        ))}
      </div>
    </main>
  )
}
