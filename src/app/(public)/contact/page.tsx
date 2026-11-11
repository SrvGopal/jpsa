
export default function Page() {
  return (
    <main className="container page contact-page">
      <div className="eyebrow">EDITORIAL OFFICE</div>

      <h1>Contact</h1>

      <p className="lead">
        For editorial correspondence, manuscript-related enquiries, and
        questions concerning the Journal of Physical Science Advances,
        please contact the editorial office.
      </p>

      <section className="contact-section">
        <div className="contact-heading">
          <span className="contact-number">01</span>
          <h2>Editorial Enquiries</h2>
        </div>

        <p>
          Authors, researchers, and readers may contact the editorial
          office regarding journal-related matters, publication policies,
          and general editorial enquiries.
        </p>

        <div className="contact-email-panel">
          <div>
            <span className="contact-label">OFFICIAL EDITORIAL EMAIL</span>
            <a href="mailto:editor@jpsa-journal.org.in">
              editor@jpsa-journal.org.in
            </a>
          </div>

          <a
            className="contact-email-action"
            href="mailto:editor@jpsa-journal.org.in"
          >
            Send an Email →
          </a>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-heading">
          <span className="contact-number">02</span>
          <h2>Correspondence Guidelines</h2>
        </div>

        <p>
          To help the editorial office respond efficiently, please include
          the relevant details in your correspondence.
        </p>

        <ul>
          <li>
            For manuscript-related enquiries, mention the manuscript title
            and reference number, if available.
          </li>
          <li>
            For publication and policy enquiries, clearly identify the
            subject of your query.
          </li>
          <li>
            For general correspondence, provide your name and institutional
            affiliation where applicable.
          </li>
        </ul>
      </section>

  
      <div className="contact-footer-note">
        <strong>Journal of Physical Science Advances (JPSA)</strong>
        <span>Connecting Physics with the Allied Sciences</span>
      </div>
    </main>
  );
}
