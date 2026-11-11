
import Link from "next/link";

const responsibilities = [
  {
    title: "Authors",
    description:
      "Authors are responsible for the accuracy, originality, and integrity of their submitted work. They must provide an honest account of the research undertaken, acknowledge relevant sources, report findings accurately, disclose competing interests, and ensure that all listed authors have approved the manuscript.",
  },
  {
    title: "Editors",
    description:
      "Editors are responsible for evaluating submissions on their scholarly merit, relevance, and suitability for the journal. Editorial decisions must be based on the quality and scientific content of a manuscript rather than the authors' identity, institutional affiliation, nationality, personal relationships, or other irrelevant considerations.",
  },
  {
    title: "Reviewers",
    description:
      "Reviewers are expected to provide objective, constructive, and evidence-based assessments. They should identify relevant work that has not been cited, explain concerns about methodology or interpretation, disclose potential conflicts of interest, and maintain the confidentiality of manuscripts under review.",
  },
  {
    title: "Editorial Office",
    description:
      "The editorial office is responsible for maintaining appropriate submission records, communicating editorial decisions, handling confidential manuscript information, and supporting the consistent application of the journal's publication policies.",
  },
];

const misconduct = [
  {
    title: "Fabrication of Research Data",
    description:
      "Inventing experimental observations, measurements, results, or other research information and presenting them as genuine findings.",
  },
  {
    title: "Falsification and Manipulation",
    description:
      "Manipulating research materials, equipment, procedures, images, data, or results in a way that misrepresents the actual research or its findings.",
  },
  {
    title: "Plagiarism",
    description:
      "Using another person's language, ideas, research, data, or intellectual contribution without appropriate acknowledgement. Such cases are addressed under the journal's Plagiarism Policy.",
  },
  {
    title: "Improper Authorship",
    description:
      "Misrepresenting who contributed to a manuscript, including honorary authorship, ghost authorship, omission of eligible contributors, or inaccurate contribution statements.",
  },
  {
    title: "Duplicate or Redundant Submission",
    description:
      "Submitting substantially the same manuscript to multiple journals simultaneously or presenting previously published work as a new and independent contribution without appropriate disclosure.",
  },
  {
    title: "Manipulation of the Editorial Process",
    description:
      "Attempting to influence editorial decisions through fabricated reviewer identities, undisclosed relationships, coercion, inappropriate communication, or other improper means.",
  },
];

const editorialActions = [
  {
    title: "Initial Assessment",
    description:
      "When a potential ethical concern is identified, the editorial team may examine the available information and request clarification or supporting documentation from the relevant authors or other parties.",
  },
  {
    title: "Further Examination",
    description:
      "Where necessary, the journal may seek additional evidence, consult relevant editorial expertise, or contact an author's affiliated institution or another appropriate authority. The nature of the concern will determine the appropriate course of examination.",
  },
  {
    title: "Editorial Decision",
    description:
      "Following consideration of the available evidence and explanations, the journal may decide to proceed with the manuscript, request clarification or revision, suspend processing, reject the submission, or take another appropriate action.",
  },
  {
    title: "Post-Publication Action",
    description:
      "Where a concern relates to an already published article, the journal may consider a correction, an expression of concern, or retraction, depending on the seriousness of the issue and its effect on the scholarly record.",
  },
];

export default function Page() {
  return (
    <div className="container page journal-content-page">
      <div className="eyebrow">PUBLICATION POLICIES</div>
      <h1>Publication Ethics</h1>

      <section className="journal-content-section">
        <h2>1. Ethical Framework</h2>

        <p>
          Journal of Physical Science Advances (JPSA) recognises that
          responsible scholarly publishing depends on honesty,
          transparency, accountability, and respect for the scientific
          record. Every stage of publication, from manuscript preparation
          and submission to peer review, editorial decision-making, and
          post-publication correction, should be conducted with these
          principles in mind.
        </p>

        <p>
          The journal expects authors, editors, reviewers, and all
          individuals involved in the publication process to act
          professionally and uphold accepted standards of research
          integrity. Ethical requirements apply to all submissions,
          irrespective of the subject area, institution, or professional
          standing of the individuals involved.
        </p>

        <p>
          This policy describes the journal's general expectations
          concerning ethical conduct. It should be read together with
          the individual policies governing plagiarism, authorship,
          conflicts of interest, and copyright.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>2. Responsibilities of Participants</h2>

        <p>
          Maintaining publication ethics is a shared responsibility.
          Each participant in the publication process has a distinct
          role in protecting the integrity and reliability of scholarly
          communication.
        </p>

        <div className="subject-area-grid">
          {responsibilities.map((item) => (
            <article className="subject-area-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="journal-content-section">
        <h2>3. Ethical Responsibilities in Research</h2>

        <p>
          Research submitted to JPSA should be conducted and reported
          honestly. Authors are expected to preserve the accuracy of
          their research records and present methods, observations,
          results, and interpretations without deliberate distortion.
        </p>

        <p>
          Where research involves human participants, animals, personal
          information, or other activities requiring formal ethical
          oversight, authors should obtain the relevant approvals before
          conducting the research and report applicable approval
          information in the manuscript.
        </p>

        <p>
          Authors should also ensure that appropriate consent,
          confidentiality, and safeguards have been observed wherever
          the nature of the research requires them. The journal may
          request supporting information concerning ethical approval
          or consent when relevant.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>4. Research Misconduct</h2>

        <p>
          JPSA does not accept research practices that compromise
          the reliability of scientific findings or misrepresent
          the contributions of researchers. Potential forms of
          misconduct include:
        </p>

        <div className="subject-area-grid">
          {misconduct.map((item, index) => (
            <article className="subject-area-card" key={item.title}>
              <div className="eyebrow">
                CONCERN {String(index + 1).padStart(2, "0")}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <p>
          The presence of an allegation does not automatically
          establish misconduct. Concerns should be examined
          on the basis of relevant evidence and the circumstances
          of the particular case.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>5. Peer Review Integrity</h2>

        <p>
          Peer review is an important part of the scholarly
          assessment of submitted manuscripts. Reviewers should
          assess the scientific content independently and provide
          comments that are relevant, reasoned, and constructive.
        </p>

        <p>
          Reviewers must not use unpublished information obtained
          through the review process for personal research,
          professional advantage, or any other unauthorised purpose.
          Manuscripts and associated information must be treated
          as confidential.
        </p>

        <p>
          Editors should ensure that reviewer selection and
          editorial decisions are not improperly influenced by
          personal relationships, competing interests, or
          external pressure. Suspected manipulation of peer
          review should be examined as a publication-ethics concern.
        </p>

        <p>
          The journal's detailed review arrangements, including
          the applicable review model and submission procedure,
          are described in its separate peer-review policy.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>6. Confidentiality</h2>

        <p>
          Information contained in submitted manuscripts,
          reviewer reports, editorial correspondence, and
          associated records should be handled with appropriate
          confidentiality.
        </p>

        <p>
          Editors and reviewers must not disclose unpublished
          manuscript content to unauthorised individuals.
          Information obtained through editorial duties must
          not be used for personal benefit or to disadvantage
          authors.
        </p>

        <p>
          Confidentiality may be subject to appropriate
          exceptions where disclosure is necessary to
          investigate a serious ethical concern or comply
          with a legitimate institutional or legal requirement.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>7. Conflicts of Interest</h2>

        <p>
          Authors, reviewers, and editors must disclose
          relationships or interests that could influence,
          or reasonably be perceived to influence, their
          professional judgement.
        </p>

        <p>
          Relevant interests may be financial, professional,
          institutional, personal, or academic. A disclosed
          conflict does not necessarily prevent participation
          in the publication process; it should be assessed
          and managed appropriately.
        </p>

        <p>
          Further requirements are provided in the journal's{" "}
          <Link href="/policies/conflict-of-interest">
            Conflict of Interest Policy
          </Link>.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>8. Corrections, Expressions of Concern, and Retractions</h2>

        <p>
          The integrity of the published scholarly record
          must be maintained even after an article has
          appeared in the journal. Where significant errors
          or ethical concerns are identified, the editorial
          team may assess whether a formal post-publication
          notice is required.
        </p>

        <p>
          A correction may be appropriate where an error
          can be addressed without invalidating the central
          findings or conclusions of an article. An expression
          of concern may be considered when a serious issue
          requires further examination but the available
          information is not yet sufficient for a final
          conclusion.
        </p>

        <p>
          Retraction may be considered where the reliability
          of an article is seriously compromised, including
          cases involving established plagiarism, fabricated
          or falsified results, or other substantial
          publication-ethics violations.
        </p>

        <p>
          Editorial notices should clearly identify the
          affected publication and explain the reason for
          the action to the extent appropriate.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>9. Handling Ethical Allegations</h2>

        <p>
          Concerns about possible ethical misconduct may
          be brought to the attention of the editorial office
          by authors, reviewers, readers, researchers, or
          other relevant parties. Reports should include
          sufficient information to allow the concern to
          be examined.
        </p>

        <div className="subject-area-grid">
          {editorialActions.map((item) => (
            <article className="subject-area-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <p>
          The journal may request explanations from the
          individuals concerned and, where appropriate,
          consult relevant institutions or authorities.
          Any editorial action should be proportionate
          to the available evidence and the seriousness
          of the issue.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>10. Editorial Independence</h2>

        <p>
          Editorial decisions should be based on scholarly
          merit, relevance to the journal's scope, and
          applicable publication requirements. Commercial,
          personal, institutional, or other external
          considerations should not improperly determine
          whether a manuscript is accepted or rejected.
        </p>

        <p>
          Individuals involved in editorial decisions
          must disclose relevant competing interests
          and should not participate in decisions where
          their impartiality may reasonably be questioned.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>11. Related Policies</h2>

        <p>
          The following policies provide additional
          requirements concerning specific areas of
          publication ethics:
        </p>

        <ul>
          <li>
            <Link href="/policies/plagiarism-policy">
              Plagiarism Policy
            </Link>
          </li>
          <li>
            <Link href="/policies/authorship-policy">
              Authorship Policy
            </Link>
          </li>
          <li>
            <Link href="/policies/conflict-of-interest">
              Conflict of Interest Policy
            </Link>
          </li>
          <li>
            <Link href="/policies/copyright">
              Copyright Policy
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
