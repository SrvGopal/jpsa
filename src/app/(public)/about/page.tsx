import Link from "next/link";
import { journalInfo } from "@/lib/journal-content";

export default function AboutPage() {
  return (
    <main className="journal-content-page">
      <section className="journal-page-hero">
        <div className="container">
          <p className="eyebrow">ABOUT JPSA</p>
          <h1>About the Journal</h1>
          <p className="journal-page-intro">
            Journal of Physical Science Advances (JPSA)
          </p>
        </div>
      </section>

      <section className="container journal-content-section">
        <div className="journal-content-narrow">
          <h2>About the Journal</h2>
          <p>{journalInfo.about}</p>
        </div>
      </section>

      <section className="journal-theme-section">
        <div className="container journal-content-section">
          <div className="journal-content-narrow">
            <p className="eyebrow">OUR FOCUS</p>
            <h2>Journal Theme</h2>
            <h3 className="journal-theme-title">
              “{journalInfo.theme.title}”
            </h3>
            <p>{journalInfo.theme.description}</p>
          </div>
        </div>
      </section>

      <section className="container journal-content-section">
        <p className="eyebrow">SCOPE OF THE JOURNAL</p>
        <h2>Major Areas Covered</h2>

        <div className="subject-area-grid">
          {journalInfo.subjectAreas.map((area) => (
            <article className="subject-area-card" key={area.title}>
              <h3>{area.title}</h3>
              <ul>
                {area.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="journal-theme-section">
        <div className="container journal-content-section">
          <div className="journal-content-narrow">
            <p className="eyebrow">OUR PURPOSE</p>
            <h2>Vision</h2>
            <p>{journalInfo.vision}</p>
          </div>
        </div>
      </section>

      <section className="container journal-content-section">
        <div className="journal-content-narrow">
          <p className="eyebrow">OUR COMMITMENT</p>
          <h2>Mission</h2>
          <ol className="journal-mission-list">
            {journalInfo.mission.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="journal-about-links">
        <div className="container journal-about-links-inner">
          <div>
            <h2>Explore JPSA</h2>
            <p>
              Learn more about the people behind the journal and its indexing
              information.
            </p>
          </div>

          <div className="journal-page-actions">
            <Link
              href="/about/editorial-board"
              className="journal-action-link"
            >
              Editorial Board
            </Link>
            <Link href="/indexing" className="journal-action-link">
              Indexing & Abstracting
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}