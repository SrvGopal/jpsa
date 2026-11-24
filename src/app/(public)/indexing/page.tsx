
const indexingServices = [
  {
    name: "Scopus",
    organisation: "Elsevier",
    category: "International Citation Database",
    status: "Future Indexing Initiative",
    description:
      "JPSTA is working towards strengthening its editorial quality, publication consistency, and scholarly standards in alignment with the expectations of internationally recognised citation databases.",
    symbol: "S",
  },
  {
    name: "Web of Science",
    organisation: "Clarivate",
    category: "Global Citation Index",
    status: "Indexing Development Pathway",
    description:
      "The journal is committed to developing a strong editorial framework, maintaining publication standards, and expanding the international visibility of its research contributions.",
    symbol: "W",
  },
  {
    name: "DOAJ",
    organisation: "Directory of Open Access Journals",
    category: "Open Access Directory",
    status: "Open Access Visibility Initiative",
    description:
      "JPSTA supports transparent and accessible scholarly publishing and aims to strengthen its open-access policies and publication practices in accordance with recognised standards.",
    symbol: "D",
  },
  {
    name: "Google Scholar",
    organisation: "Google",
    category: "Academic Search & Discovery",
    status: "Scholarly Discoverability",
    description:
      "JPSTA aims to improve the discoverability of its published research through structured article metadata, accessible publications, and appropriate digital indexing practices.",
    symbol: "G",
  },
];

export default function IndexingPage() {
  return (
    <main className="journal-content-page">
      <section className="journal-page-hero">
        <div className="container">
          <p className="eyebrow">JOURNAL VISIBILITY & RECOGNITION</p>
          <h1>Indexing &amp; Abstracting</h1>
          <p className="journal-page-intro">
            Advancing the visibility, accessibility, and international
            discoverability of scholarly research published in JPSTA.
          </p>
        </div>
      </section>

      <section className="container journal-content-section">
        <div className="journal-content-narrow">
          <div className="indexing-intro">
            <p className="indexing-section-label">OUR VISION</p>
            <h2>Connecting research with the global academic community</h2>
            <p>
              The Journal of Physical Sciences and Technological Advances
              (JPSTA) recognises the importance of international indexing
              and abstracting services in increasing the visibility and
              accessibility of scholarly work.
            </p>
            <p>
              As part of its ongoing development, the journal is focused
              on strengthening editorial practices, publication quality,
              digital infrastructure, and research discoverability.
              These initiatives form part of JPSTA's long-term commitment
              to broader academic recognition.
            </p>
          </div>

          <div className="indexing-heading">
            <div>
              <p className="indexing-section-label">INDEXING INITIATIVES</p>
              <h2>Abstracting &amp; discovery services</h2>
            </div>
            <span className="indexing-heading-count">04 SERVICES</span>
          </div>

          <div className="indexing-grid">
            {indexingServices.map((service) => (
              <article className="indexing-card" key={service.name}>
                <div className="indexing-card-top">
                  <div className="indexing-service-symbol">
                    {service.symbol}
                  </div>
                  <span className="indexing-service-category">
                    {service.category}
                  </span>
                </div>

                <h3>{service.name}</h3>
                <p className="indexing-organisation">
                  {service.organisation}
                </p>

                <div className="indexing-card-description">
                  {service.description}
                </div>

                <div className="indexing-card-status">
                  <span className="indexing-status-indicator" />
                  {service.status}
                </div>
              </article>
            ))}
          </div>

          <div className="indexing-commitment">
            <p className="indexing-section-label">OUR COMMITMENT</p>
            <h2>Building towards wider scholarly recognition</h2>
            <p>
              JPSTA views indexing and abstracting as an important
              component of its long-term development. The journal
              continues to focus on publication ethics, editorial
              consistency, accessibility, and the quality of its
              scholarly contributions.
            </p>
            <p>
              Updates regarding formal inclusion, evaluation, or
              recognition by indexing services will be published
              following official confirmation from the respective
              organisations.
            </p>
          </div>

          <div className="indexing-contact">
            <div>
              <h3>For indexing-related enquiries</h3>
              <p>
                Contact the JPSTA editorial office for further
                information about the journal.
              </p>
            </div>
            <a href="mailto:editor@jpsa-journal.org.in">
              Contact Editorial Office →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

