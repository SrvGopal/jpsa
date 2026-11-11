import { indexingServices } from "@/lib/journal-content";

export default function IndexingPage() {
  return (
    <main className="journal-content-page">
      <section className="journal-page-hero">
        <div className="container">
          <p className="eyebrow">JOURNAL VISIBILITY</p>
          <h1>Indexed / Abstracted In</h1>
          <p className="journal-page-intro">
            Discover the databases and scholarly platforms listed in the
            journal's indexing information.
          </p>
        </div>
      </section>

      <section className="container journal-content-section">
        <div className="journal-content-narrow">
          <p>
            <strong>Journal of Physical Science Advances (JPSA)</strong> is
            listed in the following databases and repositories in the
            information supplied for this page:
          </p>
        </div>

        <div className="indexing-grid">
          {indexingServices.map((service) => (
            <div className="indexing-card" key={service}>
              <span className="indexing-indicator" aria-hidden="true" />
              <span>{service}</span>
            </div>
          ))}
        </div>

        <p className="indexing-note">
          Indexing and abstracting information should be checked against each
          database's official records.
        </p>
      </section>
    </main>
  );
}