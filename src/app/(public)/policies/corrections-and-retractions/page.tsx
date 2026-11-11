
import Link from "next/link";

const postPublicationActions = [
  {
    title: "Correction",
    description:
      "A correction is published when an error is identified in an article but the issue does not invalidate the overall research findings or conclusions. Corrections may concern author information, affiliations, figures, tables, references, typographical errors, or specific statements requiring amendment.",
    note:
      "The original article generally remains available, with a clear link to the published correction notice.",
  },
  {
    title: "Expression of Concern",
    description:
      "An expression of concern may be issued when a potentially serious problem has been identified but the available evidence is insufficient for an immediate final decision. It may also be appropriate when an investigation is ongoing or requires clarification from an institution or other relevant authority.",
    note:
      "The notice informs readers that the reliability or integrity of an article is under examination.",
  },
  {
    title: "Retraction",
    description:
      "Retraction is considered when the findings or integrity of a published article are substantially compromised. This may arise from established plagiarism, fabricated or falsified data, serious methodological or analytical errors, unethical research practices, or other significant publication-ethics violations.",
    note:
      "A retracted article remains identifiable in the scholarly record, but its retracted status must be clearly indicated.",
  },
];

const correctionGrounds = [
  {
    title: "Errors in Author Information",
    description:
      "Incorrect author names, affiliations, institutional details, or other publication information may require correction where the error affects the accuracy of the published record.",
  },
  {
    title: "Errors in Figures and Tables",
    description:
      "Incorrect figure labels, table entries, captions, or other graphical or tabular information may be corrected where the underlying research remains reliable.",
  },
  {
    title: "Errors in References and Citations",
    description:
      "Incorrect bibliographic information, missing citations, or inaccurate references may be amended where the correction improves the accuracy and traceability of the article.",
  },
  {
    title: "Errors in Scientific Content",
    description:
      "An error in a calculation, equation, description, or interpretation may warrant correction when its effect on the article's conclusions is limited and can be clearly addressed.",
  },
  {
    title: "Errors in Publication Information",
    description:
      "Errors introduced during manuscript preparation, editing, typesetting, or publication may be corrected to maintain the accuracy and clarity of the final published version.",
  },
];

const retractionGrounds = [
  {
    title: "Fabrication or Falsification of Data",
    description:
      "Evidence that research observations, measurements, images, or results have been invented, manipulated, or deliberately misrepresented.",
  },
  {
    title: "Substantial Plagiarism",
    description:
      "Established plagiarism involving another researcher's intellectual contribution, research findings, or substantial portions of published work.",
  },
  {
    title: "Unreliable Research Findings",
    description:
      "Serious errors in research design, methodology, analysis, or interpretation that invalidate the central findings or conclusions of the article.",
  },
  {
    title: "Unethical Research Practices",
    description:
      "Research conducted or reported in violation of essential ethical requirements, including serious issues involving consent, research approval, or the treatment of research participants where applicable.",
  },
  {
    title: "Duplicate or Redundant Publication",
    description:
      "Publication of substantially overlapping material without appropriate disclosure where the duplication materially compromises the integrity of the scholarly record.",
  },
  {
    title: "Compromised Publication Process",
    description:
      "Evidence of manipulated peer review, fraudulent authorship, fabricated reviewer identities, or other serious interference with the editorial and publication process.",
  },
];

const investigationStages = [
  {
    title: "Receipt of Concern",
    description:
      "A concern may be raised by an author, reader, reviewer, researcher, institution, or another relevant party. The report should identify the affected article and provide sufficient information or supporting evidence for examination.",
  },
  {
    title: "Preliminary Editorial Assessment",
    description:
      "The editorial team examines the reported issue, identifies the nature of the alleged error or misconduct, and determines whether additional information or investigation is necessary.",
  },
  {
    title: "Request for Explanation",
    description:
      "Where appropriate, the journal may contact the corresponding author and other relevant individuals to request clarification, supporting records, original data, or an explanation of the concern.",
  },
  {
    title: "Further Investigation",
    description:
      "For complex or serious cases, the journal may seek additional evidence, consult appropriate subject experts, or communicate with the authors' affiliated institutions or other relevant authorities.",
  },
  {
    title: "Editorial Decision",
    description:
      "After reviewing the available information and responses, the editorial team determines whether a correction, expression of concern, retraction, or no further action is appropriate.",
  },
  {
    title: "Publication of Notice",
    description:
      "Where corrective action is required, the journal publishes an appropriate notice identifying the affected article and explaining the reason for the action.",
  },
];

export default function Page() {
  return (
    <div className="container page journal-content-page">
      <div className="eyebrow">PUBLICATION ETHICS</div>
      <h1>Corrections and Retractions Policy</h1>

      <section className="journal-content-section">
        <h2>1. Policy Statement</h2>

        <p>
          Journal of Physical Science Advances (JPSA) recognises
          its responsibility to maintain the accuracy, reliability,
          and integrity of the scholarly record. The journal
          acknowledges that errors and concerns may occasionally
          be identified after an article has been accepted or
          published.
        </p>

        <p>
          Publication does not prevent the journal from examining
          concerns about the accuracy, originality, ethical
          compliance, or reliability of a published article.
          Where an error or serious concern is established,
          appropriate corrective action may be taken to ensure
          that readers are informed and the published record
          is maintained responsibly.
        </p>

        <p>
          The nature and extent of the issue will determine
          the appropriate editorial response. JPSA distinguishes
          between corrections, expressions of concern, and
          retractions to ensure that the action taken is
          proportionate to the seriousness of the matter.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>2. Types of Post-Publication Action</h2>

        <p>
          Depending on the circumstances, the journal may
          take one of the following actions:
        </p>

        <div className="subject-area-grid">
          {postPublicationActions.map((item) => (
            <article className="subject-area-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="journal-content-section">
        <h2>3. Corrections to Published Articles</h2>

        <p>
          A correction may be considered when an error is
          identified in a published article and an amendment
          is necessary to maintain the accuracy and clarity
          of the publication.
        </p>

        <p>
          Corrections are generally appropriate when the
          affected information can be amended without
          undermining the central scientific findings
          or conclusions of the research.
        </p>

        <p>Examples of matters that may require correction include:</p>

        <div className="subject-area-grid">
          {correctionGrounds.map((item) => (
            <article className="subject-area-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <p>
          A correction notice should identify the article,
          describe the error, provide the corrected
          information, and explain the amendment where
          necessary. The correction should be linked to
          the original article so that readers can identify
          the relationship between the two records.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>4. Expressions of Concern</h2>

        <p>
          An expression of concern may be issued when
          credible information raises questions about
          the reliability or integrity of a published
          article, but the available evidence does not
          yet justify a final editorial conclusion.
        </p>

        <p>
          This may occur when an investigation is
          incomplete, when relevant documentation
          is unavailable, or when the journal is
          awaiting clarification from authors or
          their affiliated institutions.
        </p>

        <p>
          An expression of concern is intended to
          provide transparency to readers while
          the matter is examined. It does not,
          by itself, establish that misconduct
          has occurred.
        </p>

        <p>
          Following further examination, the journal
          may decide to issue a correction, retract
          the article, replace the expression of
          concern with another appropriate notice,
          or take no further action.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>5. Grounds for Retraction</h2>

        <p>
          Retraction may be considered when the
          reliability, originality, or ethical
          integrity of a published article is
          substantially compromised. The purpose
          of retraction is to alert readers that
          the article should no longer be treated
          as a reliable contribution to the
          scientific literature.
        </p>

        <p>Potential grounds for retraction include:</p>

        <div className="subject-area-grid">
          {retractionGrounds.map((item, index) => (
            <article className="subject-area-card" key={item.title}>
              <div className="eyebrow">
                GROUND {String(index + 1).padStart(2, "0")}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <p>
          Retraction is not intended as a punishment
          for honest mistakes that can be adequately
          corrected. The decision should be based
          on the seriousness of the issue and its
          effect on the validity or integrity of
          the published work.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>6. Procedure for Investigating Concerns</h2>

        <p>
          JPSA aims to examine post-publication
          concerns through a fair, documented,
          and evidence-based editorial process.
          The following stages describe the
          general procedure:
        </p>

        <div className="subject-area-grid">
          {investigationStages.map((item, index) => (
            <article className="subject-area-card" key={item.title}>
              <div className="eyebrow">
                STAGE {String(index + 1).padStart(2, "0")}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <p>
          The steps may vary depending on the
          nature and urgency of the concern.
          The journal may take interim measures,
          including temporarily suspending
          publication-related activity or issuing
          an expression of concern, where
          circumstances warrant such action.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>7. Responsibilities of Authors</h2>

        <p>
          Authors are expected to notify the
          editorial office promptly when they
          identify a significant error in their
          published work. This responsibility
          applies even when the error is discovered
          after publication and was not identified
          during the review or production process.
        </p>

        <p>Authors should:</p>

        <ul>
          <li>
            Inform the editorial office when a
            significant error is identified.
          </li>
          <li>
            Provide a clear explanation of the
            error and identify the affected
            sections, figures, tables, or results.
          </li>
          <li>
            Supply corrected information and
            relevant supporting evidence.
          </li>
          <li>
            Explain whether the error affects
            the research findings, interpretation,
            or conclusions.
          </li>
          <li>
            Cooperate with reasonable editorial
            enquiries and requests for supporting
            research records.
          </li>
          <li>
            Inform relevant co-authors about
            the concern and any proposed
            corrective action.
          </li>
        </ul>

        <p>
          Prompt and transparent reporting of
          honest errors is an important part
          of responsible scientific conduct.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>8. Retraction Notices and the Published Record</h2>

        <p>
          Where an article is retracted, JPSA
          should publish a separate retraction
          notice that clearly identifies the
          affected article and explains the
          reason for retraction.
        </p>

        <p>
          The notice should provide sufficient
          information for readers to understand
          why the article has been retracted.
          Where appropriate, it should identify
          whether the retraction arose from
          research errors, misconduct, ethical
          concerns, or another significant issue.
        </p>

        <p>
          A retracted article should remain
          identifiable in the publication
          record, with its retracted status
          clearly displayed. The original
          scholarly record should not be
          silently removed or altered in a
          manner that conceals the retraction.
        </p>

        <p>
          The retraction notice should be
          connected to the original article
          so that readers accessing either
          record can identify the relevant
          editorial action.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>9. Requests for Corrections or Retractions</h2>

        <p>
          Authors, readers, researchers, reviewers,
          and other interested individuals may
          bring potential errors or publication
          integrity concerns to the attention
          of the editorial office.
        </p>

        <p>
          A request should include the title
          of the article, its publication
          details or DOI where available,
          a description of the concern,
          and relevant supporting evidence.
        </p>

        <p>
          The journal may request additional
          information before determining
          whether a formal correction,
          expression of concern, or
          retraction is warranted.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>10. Editorial Independence and Fairness</h2>

        <p>
          Decisions concerning corrections
          and retractions should be based
          on the available evidence and
          the effect of the identified
          issue on the scholarly record.
        </p>

        <p>
          Such decisions should not be
          influenced by the professional
          position of the authors, their
          institutional affiliation,
          commercial interests, or
          external pressure.
        </p>

        <p>
          Authors should be given a reasonable
          opportunity to provide an explanation
          where appropriate. However, failure
          to obtain a response does not
          prevent the journal from taking
          necessary action when sufficient
          evidence is available.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>11. Editorial Commitment</h2>

        <p>
          JPSA considers the reliability of
          the published scientific record
          an ongoing responsibility. The
          journal is committed to addressing
          significant errors and ethical
          concerns through transparent
          editorial action.
        </p>

        <p>
          Corrections and retractions are
          intended to preserve the accuracy
          of scholarly communication,
          inform readers about material
          changes, and maintain confidence
          in the integrity of published
          research.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>Related Policies</h2>

        <p>
          This policy should be read alongside
          the journal's{" "}
          <Link href="/policies/publication-ethics">
            Publication Ethics Policy
          </Link>
          ,{" "}
          <Link href="/policies/plagiarism-policy">
            Plagiarism Policy
          </Link>
          ,{" "}
          <Link href="/policies/authorship-policy">
            Authorship Policy
          </Link>
          , and{" "}
          <Link href="/policies/conflict-of-interest">
            Conflict of Interest Policy
          </Link>.
        </p>
      </section>
    </div>
  );
}
