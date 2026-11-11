
import Image from "next/image";
import Link from "next/link";

import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { journal, researchAreas } from "@/config/journal";

export default function Home() {
  return (
    <>
      {/* JOURNAL HERO */}

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">
              {journal.name}
            </div>

            <h1>
              Advancing knowledge across the physical sciences.
            </h1>

            <p className="hero-copy">
              {journal.description}
              {" "}JPSA provides a scholarly platform for research,
              scientific communication and the dissemination of
              developments across the physical sciences.
            </p>

            <div className="actions">
              <Link
                href="/articles"
                className="button button-dark"
              >
                Explore Publications
              </Link>

              <Link
                href="/authors/guidelines"
                className="button button-light"
              >
                Information for Authors
              </Link>
            </div>

            <p className="article-meta">
              Journal status: {journal.publicationStatus}
            </p>
          </div>

          <div className="hero-panel">
            <Image
              src="/logo/jpsa-emblem.png"
              alt="JPSA journal emblem"
              width={220}
              height={220}
              className="hero-logo"
              priority
            />

            <strong>
              {journal.shortName}
            </strong>

            <p>
              Journal of Physical Sciences Advances
            </p>

            <p>
              Research · Scientific Integrity · Knowledge
            </p>
          </div>
        </div>
      </section>

      {/* JOURNAL INFORMATION */}

      <section className="journal-strip">
        <div className="container strip-grid">
          <div>
            <span>Publication frequency</span>
            <strong>{journal.publicationFrequency}</strong>
          </div>

          <div>
            <span>Access model</span>
            <strong>{journal.accessModel}</strong>
          </div>

          <div>
            <span>Journal status</span>
            <strong>{journal.publicationStatus}</strong>
          </div>

          <div>
            <span>ISSN / e-ISSN</span>
            <strong>
              {journal.issn || journal.eIssn
                ? [journal.issn, journal.eIssn]
                    .filter(Boolean)
                    .join(" / ")
                : "Not yet assigned"}
            </strong>
          </div>
        </div>
      </section>

      {/* LATEST PUBLICATIONS */}

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                SCHOLARLY RECORD
              </div>

              <h2>Published research</h2>
            </div>

            <Link
              className="text-link"
              href="/articles"
            >
              Browse publications →
            </Link>
          </div>

          {articles.length > 0 ? (
            <div className="article-list">
              {articles.slice(0, 5).map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="eyebrow">
                PUBLICATION RECORD
              </div>

              <h3>No articles published yet</h3>

              <p>
                The JPSA publication archive is being prepared.
                Published research and its associated bibliographic
                records will appear here when available.
              </p>

              <Link
                href="/issues"
                className="text-link"
              >
                View journal archive →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ABOUT THE JOURNAL */}

      <section className="section section-muted">
        <div className="container two-col">
          <div>
            <div className="eyebrow">
              ABOUT THE JOURNAL
            </div>

            <h2>
              A dedicated platform for scientific scholarship.
            </h2>
          </div>

          <div className="prose">
            <p>
              The Journal of Physical Sciences Advances
              (JPSA) is intended to provide a scholarly forum
              for original contributions and developments
              across the physical sciences.
            </p>

            <p>
              The journal's scope encompasses theoretical,
              experimental, computational and interdisciplinary
              research in relevant scientific fields.
            </p>

            <Link
              href="/about"
              className="text-link"
            >
              Discover JPSA →
            </Link>
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS */}

      <section className="section">
        <div className="container">
          <div className="eyebrow">
            SUBJECT COVERAGE
          </div>

          <h2>Research areas</h2>

          <p className="lead">
            The journal's intended subject coverage includes
            the following areas.
          </p>

          <div className="area-grid">
            {researchAreas.map((area) => (
              <div
                className="area-item"
                key={area}
              >
                {area}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 25 }}>
            <Link
              href="/about/aims-and-scope"
              className="text-link"
            >
              Read aims and scope →
            </Link>
          </div>
        </div>
      </section>

      {/* EDITORIAL INFORMATION */}

      <section className="section section-muted">
        <div className="container two-col">
          <div>
            <div className="eyebrow">
              EDITORIAL GOVERNANCE
            </div>

            <h2>
              Transparency is fundamental to scholarly publishing.
            </h2>

            <p className="prose">
              Editorial responsibilities, publication policies
              and author requirements should be clearly documented
              and accessible.
            </p>

            <Link
              href="/policies"
              className="text-link"
            >
              Explore publication policies →
            </Link>
          </div>

          <div className="feature-list">
            <div>
              <strong>Editorial Board</strong>

              <p>
                Information about the journal's editorial
                leadership and responsibilities.
              </p>

              <Link
                href="/about/editorial-board"
                className="text-link"
              >
                View editorial board →
              </Link>
            </div>

            <div>
              <strong>Publication Ethics</strong>

              <p>
                Ethical principles and responsibilities
                relevant to scholarly publishing.
              </p>

              <Link
                href="/policies"
                className="text-link"
              >
                View policies →
              </Link>
            </div>

            <div>
              <strong>Author Information</strong>

              <p>
                Guidance on manuscript preparation and
                journal submission requirements.
              </p>

              <Link
                href="/authors"
                className="text-link"
              >
                Author centre →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="section">
        <div className="container narrow">
          <div className="eyebrow">
            CONTACT THE JOURNAL
          </div>

          <h2>Editorial correspondence</h2>

          <p className="prose">
            For journal-related enquiries and editorial
            correspondence, contact:
          </p>

          <p>
            <a
              className="text-link"
              href={`mailto:${journal.contact.editorial}`}
            >
              {journal.contact.editorial}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
