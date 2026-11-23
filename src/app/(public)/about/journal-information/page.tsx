
import Link from "next/link";
import { journal } from "@/config/journal";

const information = [
  { label: "Full journal title", value: journal.name },
  { label: "Abbreviation", value: journal.shortName },
  { label: "Publisher", value: journal.publisher || "Not yet specified" },
  { label: "Print ISSN", value: journal.issn || "To be assigned" },
  { label: "Electronic ISSN", value: journal.eIssn || "To be assigned" },
  { label: "Publication frequency", value: journal.publicationFrequency },
  { label: "Access model", value: journal.accessModel },
  { label: "DOI registration", value: journal.doiRegistration },
  { label: "Journal website", value: journal.domain },
  { label: "Editorial contact", value: journal.contact.editorial },
];

export default function JournalInformationPage() {
  return (
    <div className="container page">
      <div className="eyebrow">ABOUT JPSTA</div>

      <h1>Journal Information</h1>

      <p className="lead">
        Official identification, publishing information and contact
        details for the Journal of Physical Sciences and Technological
        Advances.
      </p>

      <section className="journal-info-section">
        <h2>General Information</h2>

        <div className="journal-info-table">
          {information.map((item) => (
            <div className="journal-info-row" key={item.label}>
              <div className="journal-info-label">{item.label}</div>
              <div className="journal-info-value">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="journal-info-section">
        <h2>Subject Coverage</h2>

        <p className="prose">
          JPSTA covers physical sciences, chemical sciences, mathematical
          sciences, computer science and information technology, electrical
          and electronics engineering, mechanical engineering, and civil
          engineering. Environmental Engineering is included within Civil
          Engineering.
        </p>

        <Link href="/about/aims-and-scope" className="text-link">
          Read Aims and Scope →
        </Link>
      </section>

      <section className="journal-info-section">
        <h2>Publication and Access</h2>

        <p className="prose">
          The declared publication frequency is monthly. The journal's
          stated access model is {journal.accessModel.toLowerCase()}. Detailed access
          arrangements and any applicable charges
          must be published before the relevant services are offered.
        </p>
      </section>

      <section className="journal-info-section">
        <h2>Manuscript Submission</h2>

        <p className="prose">
          Authors may submit manuscripts to the JPSTA Editorial Office
          by email at{" "}
          <a href="mailto:editor@jpsa-journal.org.in" className="text-link">
            editor@jpsa-journal.org.in
          </a>.
          Please consult the author guidelines and submission process
          before sending a manuscript.
        </p>

        <div className="notice">
          {journal.manuscriptSubmission.message}
        </div>

        <Link href="/authors/guidelines" className="text-link">
          Read Author Guidelines →
        </Link>
      </section>

      <section className="journal-info-section">
        <h2>Editorial Correspondence</h2>

        <p className="prose">
          For enquiries regarding the journal, its scope and editorial
          information, please contact the editorial office.
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
          <Link href="/about">About the Journal →</Link>
          <Link href="/about/editorial-board">Editorial Board →</Link>
          <Link href="/policies">Publication Policies →</Link>
          <Link href="/authors">Information for Authors →</Link>
          <Link href="/contact">Contact →</Link>
          <Link href="/issues">Journal Archive →</Link>
        </div>
      </section>
    </div>
  );
}
