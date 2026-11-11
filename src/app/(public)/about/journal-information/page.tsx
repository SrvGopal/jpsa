
import Link from "next/link";
import { journal } from "@/config/journal";

const information = [
  {
    label: "Full journal title",
    value: journal.name
  },
  {
    label: "Abbreviation",
    value: journal.shortName
  },
  {
    label: "Publisher",
    value: journal.publisher || "JPSA Publishing House"
  },
  {
    label: "Print ISSN",
    value: journal.issn || "202X-XXXX (to be assigned)"
  },
  {
    label: "Electronic ISSN",
    value: journal.eIssn || "E209X-XXXX (to be assigned)"
  },
  {
    label: "Publication frequency",
    value: journal.publicationFrequency
  },
  {
    label: "Access model",
    value: journal.accessModel
  },

  {
    label: "DOI registration",
    value: "In progress" 
  },
  {
    label: "Journal website",
    value: journal.domain
  },
  {
    label: "Editorial contact",
    value: journal.contact.editorial
  }
];

export default function JournalInformationPage() {
  return (
    <div className="container page">
      <div className="eyebrow">
        ABOUT JPSA
      </div>

      <h1>Journal Information</h1>

      <p className="lead">
        Official identification, publishing information
        and contact details for the Journal of Physical
        Sciences Advances.
      </p>

      <section className="journal-info-section">
        <h2>General Information</h2>

        <div className="journal-info-table">
          {information.map((item) => (
            <div
              className="journal-info-row"
              key={item.label}
            >
              <div className="journal-info-label">
                {item.label}
              </div>

              <div className="journal-info-value">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="journal-info-section">
        <h2>Subject Coverage</h2>

        <p className="prose">
          JPSA is intended to cover research across the
          physical sciences, including theoretical physics,
          applied physics, condensed matter physics,
          materials physics, optics and photonics,
          computational physics, nuclear and particle
          physics, and interdisciplinary physical sciences.
        </p>

        <Link
          href="/about/aims-and-scope"
          className="text-link"
        >
          Read Aims and Scope →
        </Link>
      </section>

      <section className="journal-info-section">
        <h2>Publication and Access</h2>

        <p className="prose">
          The declared publication frequency is monthly.
          The journal's stated access model is subscription.
          Detailed access arrangements, subscription terms
          and any applicable charges must be published
          before the relevant services are offered.
        </p>
      </section>

      <section className="journal-info-section">
        <h2>Manuscript Submission</h2>

        <p className="prose">
          The online manuscript submission system is
          currently under development.
        </p>

        <div className="notice">
          {journal.manuscriptSubmission.message}
        </div>

        <Link
          href="/authors/guidelines"
          className="text-link"
        >
          Read Author Guidelines →
        </Link>
      </section>

      <section className="journal-info-section">
        <h2>Editorial Correspondence</h2>

        <p className="prose">
          For enquiries regarding the journal, its scope
          and editorial information, please contact the
          editorial office.
        </p>

        <p>
          <a
            href={`mailto:${journal.contact.editorial}`}
            className="text-link"
          >
            {journal.contact.editorial}
          </a>
        </p>
      </section>

      <section className="journal-info-section">
        <h2>Related Information</h2>

        <div className="link-grid">
          <Link href="/about">
            About the Journal →
          </Link>

          <Link href="/about/editorial-board">
            Editorial Board →
          </Link>

          <Link href="/policies">
            Publication Policies →
          </Link>

          <Link href="/authors">
            Information for Authors →
          </Link>

          <Link href="/contact">
            Contact →
          </Link>

          <Link href="/issues">
            Journal Archive →
          </Link>
        </div>
      </section>
    </div>
  );
}
