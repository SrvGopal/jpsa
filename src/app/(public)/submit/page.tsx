
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Your Manuscript | JPSTA",
  description:
    "Instructions for submitting manuscripts to the Journal of Physical Sciences and Technological Advances.",
};

const editorialEmail = "editor@jpsa-journal.org.in";

export default function SubmitManuscriptPage() {
  return (
    <main className="container page">
      <div className="eyebrow">INFORMATION FOR AUTHORS</div>

      <h1>Submit Your Manuscript</h1>

      <p className="lead">
        Authors may submit their manuscripts to the Journal of Physical
        Sciences and Technological Advances (JPSTA) by email to the
        Editorial Office. Please review the author guidelines and
        submission requirements before sending your manuscript.
      </p>

      <section className="prose">
        <h2>Manuscript submission by email</h2>

        <div className="notice">
          <strong>Submit your manuscript to the JPSTA Editorial Office</strong>
          <p>
            Send your manuscript and relevant submission details to:
          </p>
          <p>
            <a href={`mailto:${editorialEmail}`} className="text-link">
              {editorialEmail}
            </a>
          </p>
        </div>

        <h2>Information to include in your email</h2>

        <ul>
          <li>Full title of the manuscript.</li>
          <li>Names of all authors and their institutional affiliations.</li>
          <li>Name and email address of the corresponding author.</li>
          <li>Abstract and relevant keywords.</li>
          <li>Article category, where applicable.</li>
          <li>
            Relevant declarations concerning originality, authorship,
            funding and competing interests.
          </li>
        </ul>

        <h2>Files to attach</h2>

        <ul>
          <li>
            <strong>Main manuscript:</strong> Attach the complete
            manuscript, preferably in PDF format.
          </li>
          <li>
            <strong>Figures and tables:</strong> Include relevant
            supporting files where they are not incorporated into
            the manuscript.
          </li>
          <li>
            <strong>Cover letter:</strong> Include one if applicable.
          </li>
          <li>
            <strong>Additional documents:</strong> Include supplementary
            materials, declarations or permissions where applicable.
          </li>
        </ul>

        <h2>Email subject line</h2>

        <p>
          To help the editorial office identify your submission, use
          the following subject format:
        </p>

        <p>
          <strong>Manuscript Submission – [Manuscript Title]</strong>
        </p>

        <h2>After submission</h2>

        <p>
          The corresponding author should use the same email address
          for subsequent communication with the editorial office.
          The editorial office may contact the corresponding author
          if additional information or documents are required.
        </p>

        <p>
          Submission does not guarantee acceptance or publication.
          Manuscripts are subject to editorial assessment and the
          journal's applicable review process.
        </p>

        <h2>Author resources</h2>

        <ul>
          <li>
            <a href="/authors/guidelines" className="text-link">
              Author Guidelines
            </a>
          </li>
          <li>
            <a href="/authors/manuscript-preparation" className="text-link">
              Manuscript Preparation
            </a>
          </li>
          <li>
            <a href="/authors/submission-process" className="text-link">
              Submission Process
            </a>
          </li>
          <li>
            <a href="/authors/peer-review" className="text-link">
              Peer Review Process
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
