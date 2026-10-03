import { books } from '../data/books.js'
import { isChapterAvailable } from '../data/content.js'
import { ArrowRight, Clock, Swords } from '../components/icons.jsx'

function BookCard({ book }) {
  const ready = book.chapters.filter((c) => isChapterAvailable(book.id, c.number)).length
  return (
    <a className={`book-card accent-${book.accent}`} href={`#/book/${book.id}`}>
      <div className="book-cover">
        <span className="book-cover-title">{book.title}</span>
      </div>
      <div className="book-body">
        <p className="book-sub">{book.subtitle}</p>
        <p className="book-meta">
          {book.chapters.length} chapters
          {ready > 0 ? ` · ${ready} ready to play` : ''}
          {ready === 0 && <span className="pill">Coming soon</span>}
        </p>
        <span className="book-go">
          Open the book <ArrowRight size={16} />
        </span>
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <h1>
          Learn it. Practice it. <em>Master it.</em>
        </h1>
        <p className="lede">
          Pick a book, work through each section&rsquo;s mini-lesson, earn three stars in practice,
          then take on the chapter challenge. Ready?
        </p>
      </section>
      <aside className="learning-note">
        <h2>After Beast Academy</h2>
        <p>Use Prealgebra alongside your textbook. Try a section first if it feels familiar; revisit its lesson
          when you need it. Aim to explain your method and get about 8 of 10 right on two different rounds
          before moving on. This is a practice guide, not a contest-score prediction.</p>
        <p>After Prealgebra, choose core and contest-bridge sections from the Introduction books.
          Optional extensions can wait. Start mixed practice without a timer before full contest papers.</p>
      </aside>
      <div className="book-grid">
        {books.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
      <a className="arena-banner accent-amber" href="#/arena">
        <span className="arena-banner-crest">
          <Swords size={28} />
        </span>
        <span className="arena-banner-body">
          <span className="arena-banner-title">Challenge Arena</span>
          <span className="arena-banner-sub">
            Build from untimed mixed practice to short timed rounds and full papers, with worked solutions.
          </span>
          <span className="arena-banner-meta">
            <Clock size={15} /> No timer, 15 or 40 minutes
          </span>
        </span>
        <ArrowRight size={20} />
      </a>
    </main>
  )
}
