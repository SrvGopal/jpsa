
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Author Guidelines | JPSA",
  description:
    "Guidance for authors preparing manuscripts for the Journal of Physical Sciences Advances.",
};

export default function AuthorGuidelinesPage() {
  return (
    <main className="container page">
      <div className="eyebrow">INFORMATION FOR CONTRIBUTORS</div>

      <h1>Author Guidelines</h1>

      <p className="lead">
        These guidelines describe the general expectations for
        preparing scholarly manuscripts for consideration by the
        Journal of Physical Sciences Advances.
      </p>

      <div className="notice">
        <strong>Important publication information</strong>
        <p>
          These guidelines are a working version. The journal must
          formally approve its manuscript template, article-specific
          requirements, publication charges and final submission
          policies before accepting manuscripts.
        </p>
      </div>

      <section className="prose">
        <h2>1. Scope and suitability</h2>

        <p>
          Manuscripts should address relevant topics in physics and
          the physical sciences, including theoretical, experimental,
          computational and interdisciplinary research.
        </p>

        <p>
          Authors should consult the journal's aims and scope before
          submitting their work.
        </p>

        <h2>2. Originality and exclusive submission</h2>

        <p>
          Submitted work should be original and should not be under
          consideration by another journal at the same time.
          Previously published material must be clearly identified
          and appropriately cited.
        </p>

        <p>
          Authors must disclose substantial overlap with their
          previous publications, preprints or related manuscripts.
        </p>

        <h2>3. Manuscript structure</h2>

        <p>
          Research manuscripts should normally contain the following
          elements, where appropriate to the article type:
        </p>

        <ol>
          <li>Title of the manuscript.</li>
          <li>Full names of all authors.</li>
          <li>Institutional affiliations and corresponding author details.</li>
          <li>Abstract summarizing the work.</li>
          <li>Keywords describing the research.</li>
          <li>Introduction and research background.</li>
          <li>Methods, theoretical framework or experimental details.</li>
          <li>Results and discussion.</li>
          <li>Conclusion.</li>
          <li>Acknowledgements, declarations and references.</li>
        </ol>

        <p>
          The exact structure may vary for review articles,
          theoretical papers, short communications and other
          approved article categories.
        </p>

        <h2>4. Authors and affiliations</h2>

        <p>
          Every listed author should have made a meaningful
          contribution to the research and should approve the
          submitted version of the manuscript.
        </p>

        <p>
          The corresponding author is responsible for coordinating
          communication with the editorial office and confirming
          that all co-authors approve submission and publication.
        </p>

        <h2>5. Abstract and keywords</h2>

        <p>
          The abstract should clearly communicate the research
          objective, approach, principal findings and significance.
          It should be understandable without requiring readers
          to consult the full manuscript.
        </p>

        <p>
          Authors should provide relevant keywords that accurately
          represent the subject of the work. The final word limits
          and keyword limits will be specified in the approved
          journal template.
        </p>

        <h2>6. Figures, tables and equations</h2>

        <ul>
          <li>Number figures and tables consistently.</li>
          <li>Provide descriptive captions and titles.</li>
          <li>Refer to every figure and table in the manuscript text.</li>
          <li>Use clear, readable labels and appropriate units.</li>
          <li>Identify the source of material reproduced from elsewhere.</li>
          <li>Use consistent equation numbering where applicable.</li>
        </ul>

        <h2>7. References and citations</h2>

        <p>
          Every source cited in the manuscript should appear in
          the reference list, and every listed reference should
          be cited in the text.
        </p>

        <p>
          Authors should provide accurate bibliographic information,
          including DOI identifiers where available. The journal's
          final reference style must be followed once formally
          specified.
        </p>

        <h2>8. Research ethics and declarations</h2>

        <p>
          Authors are expected to disclose information relevant
          to the integrity and transparency of their research.
          Depending on the manuscript, this may include:
        </p>

        <ul>
          <li>Funding and financial support.</li>
          <li>Conflicts of interest.</li>
          <li>Author contributions.</li>
          <li>Data availability.</li>
          <li>Ethical approval, where applicable.</li>
          <li>Permissions for reproduced material.</li>
        </ul>

        <p>
          Authors must not fabricate, falsify or improperly
          manipulate research data, results or images.
        </p>

        <h2>9. Editorial screening and peer review</h2>

        <p>
          Submitted manuscripts undergo an initial editorial
          assessment for suitability and completeness. Manuscripts
          considered suitable may proceed to the journal's
          peer-review process.
        </p>

        <p>
          Editorial decisions may include acceptance, rejection
          or a request for revision. Submission does not guarantee
          acceptance or publication.
        </p>

        <h2>10. Publication charges</h2>

        <p>
          If an Article Processing Charge applies, the journal
          should communicate the approved amount, currency,
          applicable taxes, payment instructions and refund
          conditions to authors transparently.
        </p>

        <p>
          Any applicable publication charge is separate from
          editorial evaluation. Payment must not guarantee
          acceptance, influence peer review or override an
          editorial decision.
        </p>

        <p>
          Authors should receive an appropriate payment
          acknowledgement or receipt for verified transactions.
        </p>

        <h2>11. Corrections and post-publication matters</h2>

        <p>
          Authors should promptly notify the editorial office
          if they discover a significant error in their published
          work. Corrections, expressions of concern and
          retractions should be handled under the journal's
          applicable publication ethics policies.
        </p>

        <h2>12. Submission status</h2>

        <div className="notice">
          <strong>Submission portal not yet available</strong>
          <p>
            The online submission and manuscript tracking system
            is under development. These guidelines do not constitute
            an active submission channel.
          </p>
        </div>

        <h2>Related information</h2>

        <p>
          Authors should also review the following resources:
        </p>

        <ul>
          <li>
            <Link href="/authors/manuscript-preparation">
              Manuscript Preparation
            </Link>
          </li>
          <li>
            <Link href="/authors/peer-review">Peer Review Process</Link>
          </li>
          <li>
            <Link href="/authors/submission-process">
              Submission Process
            </Link>
          </li>
          <li>
            <Link href="/policies">Publication Policies</Link>
          </li>
          <li>
            <Link href="/apc">Article Processing Charges</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
