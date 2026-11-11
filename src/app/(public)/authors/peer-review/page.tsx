
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Peer Review Process | JPSA",
  description:
    "Understand the editorial assessment and peer review process of the Journal of Physical Sciences Advances.",
};

export default function PeerReviewPage() {
  return (
    <main className="container page">
      <div className="eyebrow">EDITORIAL PROCESS</div>

      <h1>Peer Review Process</h1>

      <p className="lead">
        The Journal of Physical Sciences Advances (JPSA) considers
        peer review an essential part of maintaining the scientific
        quality, reliability and academic integrity of published
        research.
      </p>

      <section className="prose">
        <h2>1. Purpose of peer review</h2>

        <p>
          The peer review process provides an independent assessment
          of submitted manuscripts by individuals with relevant
          subject expertise. It helps evaluate the scientific
          contribution, methodological soundness, originality and
          overall quality of research submitted to the journal.
        </p>

        <p>
          The process also provides authors with constructive
          feedback that may improve the clarity, accuracy and
          presentation of their work.
        </p>

        <h2>2. Initial editorial assessment</h2>

        <p>
          Every submission is subject to an initial assessment by
          the editorial office or an appropriate editor. This
          assessment considers whether the manuscript falls within
          the journal's scope and whether it satisfies basic
          submission and presentation requirements.
        </p>

        <p>
          The editor may consider the manuscript's originality,
          completeness, scientific relevance and compliance with
          applicable publication ethics requirements.
        </p>

        <p>
          Manuscripts that are incomplete, outside the journal's
          scope or unsuitable for further consideration may be
          declined at this stage.
        </p>

        <h2>3. Selection of reviewers</h2>

        <p>
          Manuscripts considered suitable for external assessment
          may be assigned to reviewers with relevant academic
          qualifications, research experience or subject expertise.
        </p>

        <p>
          Reviewer selection should take into account the
          manuscript's research area and the expertise necessary
          for a meaningful scientific evaluation. Individuals
          with relevant competing interests should not participate
          in the review of that manuscript.
        </p>

        <h2>4. Evaluation criteria</h2>

        <p>
          Reviewers may evaluate a manuscript on the basis of
          the following considerations, as applicable to its
          article type:
        </p>

        <ul>
          <li>Originality and significance of the research.</li>
          <li>Relevance to the aims and scope of JPSA.</li>
          <li>Scientific accuracy and technical soundness.</li>
          <li>Appropriateness of theoretical, experimental or computational methods.</li>
          <li>Quality of data analysis and interpretation.</li>
          <li>Clarity of scientific arguments and presentation.</li>
          <li>Accuracy and relevance of references and citations.</li>
          <li>Compliance with research and publication ethics.</li>
        </ul>

        <h2>5. Reviewer recommendations</h2>

        <p>
          Reviewers may provide comments, identify limitations,
          request clarification and recommend improvements. Their
          assessments are communicated to the editor for
          consideration.
        </p>

        <p>
          Reviewer recommendations may include acceptance,
          minor revision, major revision or rejection. These
          recommendations are advisory, and the final editorial
          decision rests with the responsible editor.
        </p>

        <h2>6. Editorial decisions</h2>

        <p>
          After considering the available reviews and the
          manuscript's overall scientific merit, the editor may
          communicate one of the following decisions:
        </p>

        <ul>
          <li>
            <strong>Accept:</strong> The manuscript is considered
            suitable for publication, subject to any remaining
            editorial or production requirements.
          </li>
          <li>
            <strong>Minor Revision:</strong> Limited corrections
            or clarifications are required before further
            consideration.
          </li>
          <li>
            <strong>Major Revision:</strong> Substantial changes
            or additional explanations are required.
          </li>
          <li>
            <strong>Reject:</strong> The manuscript is not
            considered suitable for publication in the journal.
          </li>
        </ul>

        <h2>7. Revision and author response</h2>

        <p>
          When revision is requested, authors should carefully
          consider the comments provided by the reviewers and
          editor. A revised manuscript should be accompanied
          by a response explaining how each comment has been
          addressed.
        </p>

        <p>
          Where authors disagree with a particular recommendation,
          they should provide a clear and scientifically
          reasoned explanation. Revised manuscripts may be
          returned to the original reviewers or assessed by
          the editor, as appropriate.
        </p>

        <h2>8. Responsibilities of reviewers</h2>

        <p>
          Reviewers are expected to conduct their evaluations
          objectively, professionally and within their area
          of expertise. They should:
        </p>

        <ul>
          <li>Maintain the confidentiality of submitted manuscripts.</li>
          <li>Provide constructive and evidence-based comments.</li>
          <li>Disclose any potential competing interests.</li>
          <li>Identify relevant published work that may have been overlooked.</li>
          <li>Report suspected ethical concerns to the editor.</li>
          <li>Avoid using unpublished information for personal advantage.</li>
        </ul>

        <h2>9. Confidentiality and editorial independence</h2>

        <p>
          Manuscripts and communications received during the
          review process should be treated as confidential.
          Reviewers and editors must not disclose unpublished
          material or use information obtained through review
          for purposes unrelated to their editorial responsibilities.
        </p>

        <p>
          Editorial decisions should be based on scientific
          merit, relevance and compliance with journal policies.
          Personal, institutional or commercial considerations
          should not improperly influence the evaluation of
          submitted work.
        </p>

        <h2>10. Review timelines</h2>

        <p>
          The duration of the review process may vary depending
          on reviewer availability, manuscript complexity,
          subject area and the extent of revisions required.
          The journal aims to process submissions as efficiently
          as reasonably possible.
        </p>

        <p>
          Authors should understand that a specific review
          duration cannot be guaranteed unless formally
          communicated by the editorial office.
        </p>

        <h2>11. Appeals and concerns</h2>

        <p>
          Authors who believe that an editorial decision
          involved a significant procedural error or a
          misunderstanding of the scientific content may
          submit a reasoned appeal to the editorial office.
          Appeals should identify the specific grounds for
          reconsideration and provide supporting explanations.
        </p>

        <p>
          An appeal does not guarantee reversal of the
          original decision. The matter should be considered
          in accordance with the journal's editorial
          procedures and publication ethics requirements.
        </p>

        <h2>12. Review process and publication ethics</h2>

        <p>
          The peer review process operates in conjunction
          with the journal's publication ethics requirements.
          Concerns involving plagiarism, authorship,
          competing interests or research misconduct should
          be handled under the applicable journal policies.
        </p>

        <h2>Related information</h2>

        <p>
          Authors should also consult:
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
            <Link href="/authors/submission-process">
              Submission Process
            </Link>
          </li>
          <li>
            <Link href="/policies/publication-ethics">
              Publication Ethics
            </Link>
          </li>
          <li>
            <Link href="/policies/conflict-of-interest">
              Conflict of Interest Policy
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
