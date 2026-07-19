import { books } from '../data/books.js'
import { isChapterAvailable } from '../data/content.js'
import { ArrowRight } from '../components/icons.jsx'

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
      <div className="book-grid">
        {books.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </main>
  )
}
