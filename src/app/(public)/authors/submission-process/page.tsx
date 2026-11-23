
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Submission Process | JPSTA",
  description:
    "Instructions and requirements for submitting manuscripts to the Journal of Physical Sciences and Technological Advances.",
};

export default function SubmissionProcessPage() {
  return (
    <main className="container page">
      <div className="eyebrow">INFORMATION FOR AUTHORS</div>

      <h1>Submission Process</h1>

      <p className="lead">
        The Journal of Physical Sciences and Technological Advances (JPSTA) welcomes
        scholarly contributions within its areas of interest.
        Authors are expected to follow the journal's submission
        requirements and ensure that all necessary information
        and supporting documents are prepared before submitting
        a manuscript.
      </p>

      <div className="notice">
        <strong>Manuscript submission by email</strong>
        <p>
          Submit your manuscript and relevant submission details
          to the JPSTA Editorial Office at{" "}
          <a href="mailto:editor@jpsa-journal.org.in">
            editor@jpsa-journal.org.in
          </a>.
          Please follow the instructions below when preparing your email.
        </p>
      </div>

      <section className="prose">
        <h2>1. Before submitting</h2>

        <p>
          Authors should first confirm that their manuscript
          falls within the aims and scope of JPSTA. The work
          should fall within one or more of the journal's approved areas:
          physical sciences, chemical sciences, mathematical sciences,
          computer science and information technology, electrical and
          electronics engineering, mechanical engineering, or civil
          engineering. Interdisciplinary research is welcome.
        </p>

        <p>
          Before submission, authors should review the
          journal's Author Guidelines and Manuscript Preparation
          instructions to ensure that the manuscript is
          appropriately organised and complete.
        </p>

        <h2>2. Originality and exclusive submission</h2>

        <p>
          A manuscript submitted to JPSTA should represent
          original scholarly work and should not be under
          consideration for publication by another journal
          at the same time.
        </p>

        <p>
          Authors must disclose substantial overlap with
          previously published work, related manuscripts
          and preprints. All sources and reused material
          should be appropriately acknowledged.
        </p>

        <h2>3. Author approval</h2>

        <p>
          All listed authors should have made an appropriate
          contribution to the research, reviewed the final
          manuscript and approved its submission to the journal.
        </p>

        <p>
          The corresponding author is responsible for
          coordinating communication with the editorial
          office and confirming that all co-authors agree
          with the submitted version and author list.
        </p>

        <h2>4. Files required for submission</h2>

        <p>
          Authors should prepare the following materials,
          as applicable to the manuscript:
        </p>

        <ul>
          <li>
            <strong>Main manuscript:</strong> The complete
            manuscript, including its title, abstract,
            keywords, main text and references.
          </li>
          <li>
            <strong>Figures and tables:</strong> Relevant
            illustrations, tables and captions in suitable
            formats and resolution.
          </li>
          <li>
            <strong>Author information:</strong> Full names,
            institutional affiliations and contact details
            of all contributors.
          </li>
          <li>
            <strong>Declarations:</strong> Statements
            concerning authorship, competing interests,
            funding, data availability and research ethics,
            where applicable.
          </li>
          <li>
            <strong>Supplementary material:</strong> Supporting
            datasets, computational files, additional figures
            or other relevant research materials.
          </li>
          <li>
            <strong>Permissions:</strong> Evidence of permission
            to reproduce copyrighted figures, tables or
            other third-party material, where required.
          </li>
        </ul>

        <h2>5. Submission of manuscript details</h2>

        <p>
          Authors should include the relevant manuscript
          information in their submission email. This should
          include the manuscript title, abstract, keywords,
          article category where applicable, author names and
          institutional affiliations.
        </p>

        <p>
          The corresponding author should ensure that the
          information provided in the email matches the details
          in the manuscript and that all listed authors have
          approved the submitted version.
        </p>

        <h2>6. Required declarations</h2>

        <p>
          Authors should be prepared to provide declarations
          relevant to the integrity and transparency of
          their research. These may include:
        </p>

        <ul>
          <li>Confirmation of originality and exclusive submission.</li>
          <li>Approval of the manuscript by all listed authors.</li>
          <li>Disclosure of financial and non-financial competing interests.</li>
          <li>Funding and financial support information.</li>
          <li>Author contribution statements.</li>
          <li>Data availability statements, where relevant.</li>
          <li>Research ethics approval and consent information, where applicable.</li>
        </ul>

        <h2>7. Initial editorial checks</h2>

        <p>
          After a manuscript is submitted, the editorial
          office may conduct an initial completeness check.
          This may include verification of the required files,
          author information, declarations and basic
          presentation requirements.
        </p>

        <p>
          If information is missing or corrections are
          necessary, the corresponding author may be
          contacted to provide the required material.
        </p>

        <h2>8. Editorial assessment and peer review</h2>

        <p>
          Submissions that satisfy the initial requirements
          may proceed to editorial assessment. The editor
          evaluates the manuscript's relevance, originality
          and suitability for further consideration.
        </p>

        <p>
          Manuscripts considered suitable may be sent for
          external peer review. The resulting editorial
          decision may involve acceptance, revision or
          rejection, depending on the assessment.
        </p>

        <p>
          Submission does not guarantee acceptance or
          publication.
        </p>

        <h2>9. Revised manuscripts</h2>

        <p>
          Where revision is requested, authors should
          carefully address the comments provided by
          reviewers and editors. A revised manuscript
          should be accompanied by a point-by-point
          response explaining the changes made.
        </p>

        <p>
          If additional time is required to prepare a
          revision, the corresponding author should
          communicate with the editorial office before
          the specified deadline.
        </p>

        <h2>10. Correspondence with the Editorial Office</h2>

        <p>
          The corresponding author should monitor
          communications from the editorial office and
          provide any requested clarifications or
          additional information within the indicated
          timeframe.
        </p>

        <p>
          The corresponding author should use the email address
          provided in the submission for all communication with
          the editorial office. Any enquiries about a submitted
          manuscript should be sent to{" "}
          <a href="mailto:editor@jpsa-journal.org.in">
            editor@jpsa-journal.org.in
          </a>.
        </p>

        <h2>11. Publication after acceptance</h2>

        <p>
          Manuscripts accepted for publication may proceed
          to editorial preparation, proofreading and
          production. Authors may be asked to review
          proofs and verify the accuracy of the final
          publication details.
        </p>

        <p>
          Any applicable publication charges and payment
          arrangements should be communicated transparently
          under the journal's approved APC policy.
        </p>

        <h2>12. Submission checklist</h2>

        <p>
          Before submitting a manuscript, authors should
          confirm that:
        </p>

        <ul>
          <li>The manuscript falls within the scope of JPSTA.</li>
          <li>The manuscript is original and not under consideration elsewhere.</li>
          <li>All authors have approved the final version.</li>
          <li>Author names and affiliations are accurate.</li>
          <li>Figures, tables and references are complete.</li>
          <li>Required declarations have been prepared.</li>
          <li>Necessary permissions have been obtained.</li>
          <li>Supplementary files are ready, where applicable.</li>
        </ul>

        <h2>Related information</h2>

        <p>
          Authors should review the following resources
          before preparing a submission:
        </p>

        <ul>
          <li>
            <Link href="/authors/guidelines">
              Author Guidelines
            </Link>
          </li>
          <li>
            <Link href="/authors/manuscript-preparation">
              Manuscript Preparation
            </Link>
          </li>
          <li>
            <Link href="/authors/peer-review">
              Peer Review Process
            </Link>
          </li>
          <li>
            <Link href="/policies/authorship">
              Authorship Policy
            </Link>
          </li>
          <li>
            <Link href="/policies/plagiarism">
              Plagiarism Policy
            </Link>
          </li>
          <li>
            <Link href="/policies/publication-ethics">
              Publication Ethics
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
