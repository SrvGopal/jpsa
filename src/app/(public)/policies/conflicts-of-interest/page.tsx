
import Link from "next/link";

const conflictTypes = [
  {
    title: "Financial Interests",
    description:
      "Financial relationships that may influence or appear to influence research or editorial judgement. These may include employment, consultancy, honoraria, paid advisory roles, shareholdings, patents, royalties, research grants, or other financial benefits connected with the subject of the manuscript.",
  },
  {
    title: "Personal and Family Relationships",
    description:
      "Personal relationships, family connections, close friendships, personal disputes, or other circumstances involving individuals connected with a manuscript that may affect impartial assessment.",
  },
  {
    title: "Professional and Institutional Relationships",
    description:
      "Current or recent employment, institutional affiliation, supervisory relationships, collaborative arrangements, or professional dependencies involving an author, reviewer, editor, or another person participating in the publication process.",
  },
  {
    title: "Academic and Intellectual Interests",
    description:
      "Strong academic positions, direct competition, intellectual commitments, or ongoing research disputes that could affect an individual's ability to assess a manuscript objectively.",
  },
  {
    title: "Other Relevant Interests",
    description:
      "Any other circumstance that could reasonably be perceived as influencing professional judgement, even where no direct financial or personal benefit is involved.",
  },
];

const authorDisclosures = [
  "Relevant employment, consultancy, and paid professional relationships.",
  "Research funding, grants, sponsorship, and other financial support related to the work.",
  "Financial interests, patents, royalties, or commercial relationships connected with the subject of the research.",
  "Relevant personal, professional, or institutional relationships that could reasonably be perceived as influencing the research.",
  "Any other interest that could affect, or appear to affect, the interpretation or presentation of the findings.",
];

const reviewerRequirements = [
  "Inform the editorial office if they have a financial, personal, professional, or academic conflict involving the manuscript or its authors.",
  "Declare current or recent collaborations, supervisory relationships, institutional connections, or direct research competition where relevant.",
  "Avoid reviewing a manuscript when their impartiality could reasonably be questioned.",
  "Maintain confidentiality and refrain from using unpublished information obtained through the review process.",
  "Notify the editor if a potential conflict becomes apparent after accepting the review invitation.",
];

const managementActions = [
  {
    title: "Disclosure and Assessment",
    description:
      "The relevant individual should disclose the interest to the editorial office as soon as it becomes apparent. The editor will consider the nature of the relationship, its relevance to the manuscript, and whether it could affect impartiality.",
  },
  {
    title: "Reassignment of Review",
    description:
      "Where a reviewer has a significant conflict, the editor may decline the review or appoint another suitably qualified reviewer. A replacement reviewer should be selected without the same relevant conflict wherever reasonably possible.",
  },
  {
    title: "Editorial Recusal",
    description:
      "An editor with a relevant competing interest should not participate in the assessment or decision-making process for the affected manuscript. The manuscript may be assigned to another editor who can handle it independently.",
  },
  {
    title: "Disclosure in the Published Article",
    description:
      "Where a declared interest is relevant to readers' interpretation of the research, the journal may require an appropriate conflict-of-interest statement to appear in the published article.",
  },
];

export default function Page() {
  return (
    <div className="container page journal-content-page">
      <div className="eyebrow">PUBLICATION ETHICS</div>
      <h1>Conflict of Interest Policy</h1>

      <section className="journal-content-section">
        <h2>1. Policy Statement</h2>

        <p>
          Journal of Physical Science Advances (JPSA) expects authors,
          reviewers, editors, and other individuals involved in the
          publication process to disclose interests that could
          influence, or reasonably be perceived to influence,
          their professional judgement.
        </p>

        <p>
          A conflict of interest may arise when personal, financial,
          professional, institutional, or academic considerations
          interfere with an individual's ability to act objectively.
          Such interests may be direct or indirect and may exist
          even when the individual believes that their judgement
          has not actually been affected.
        </p>

        <p>
          The purpose of disclosure is to ensure transparency and
          allow potential conflicts to be assessed and managed
          appropriately. The existence of a declared conflict
          does not automatically imply misconduct or invalidate
          a research contribution.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>2. What Constitutes a Conflict of Interest?</h2>

        <p>
          A conflict of interest exists when an individual's
          interests or relationships could compromise, or
          reasonably appear to compromise, their independence
          and impartiality in relation to a manuscript or
          editorial decision.
        </p>

        <div className="subject-area-grid">
          {conflictTypes.map((item, index) => (
            <article className="subject-area-card" key={item.title}>
              <div className="eyebrow">
                CATEGORY {String(index + 1).padStart(2, "0")}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <p>
          The categories above are illustrative rather than
          exhaustive. Individuals should disclose any other
          relevant circumstance where a reasonable reader
          might question the independence of their judgement.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>3. Responsibilities of Authors</h2>

        <p>
          Authors must disclose relevant competing interests
          at the time of manuscript submission. The declaration
          should be complete, accurate, and applicable to all
          authors listed on the manuscript.
        </p>

        <p>Relevant disclosures may include:</p>

        <ul>
          {authorDisclosures.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p>
          Where no competing interests exist, authors should
          provide an explicit declaration stating that they
          have no conflicts of interest to disclose.
        </p>

        <p>
          Authors should not assume that a relationship is
          irrelevant merely because it did not directly
          influence the research. If the relationship could
          reasonably be perceived as relevant, it should
          be disclosed for editorial assessment.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>4. Financial and Non-Financial Interests</h2>

        <p>
          Financial conflicts may arise from relationships
          involving funding, employment, consultancy,
          commercial interests, intellectual property,
          or other forms of financial benefit.
        </p>

        <p>
          Non-financial conflicts may arise from personal
          relationships, academic competition, professional
          rivalries, institutional responsibilities, or
          strongly held intellectual positions.
        </p>

        <p>
          Both forms of conflict are relevant to the journal's
          assessment. A conflict does not need to involve
          direct financial compensation to require disclosure.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>5. Responsibilities of Reviewers</h2>

        <p>
          Reviewers must be able to assess a manuscript
          independently and without inappropriate influence.
          Before accepting a review invitation, reviewers
          should consider whether any existing relationship
          or competing interest could affect their impartiality.
        </p>

        <p>Reviewers are expected to:</p>

        <ul>
          {reviewerRequirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p>
          A reviewer who identifies a potential conflict
          should inform the handling editor promptly rather
          than making an independent assumption that the
          conflict is insignificant.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>6. Responsibilities of Editors</h2>

        <p>
          Editors must exercise independent judgement when
          evaluating manuscripts and making editorial
          recommendations or decisions. They should
          disclose any interest or relationship that could
          compromise their ability to handle a submission
          impartially.
        </p>

        <p>
          Editors should not handle manuscripts involving
          close personal relationships, direct research
          collaborations, financial interests, or other
          circumstances that create a significant competing
          interest.
        </p>

        <p>
          Where a conflict is identified, the manuscript
          should be reassigned to an appropriate editor
          who can conduct the assessment independently.
          An editor must not use confidential manuscript
          information for personal research or advantage.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>7. Disclosure and Management of Conflicts</h2>

        <p>
          Disclosure allows the journal to evaluate a
          potential conflict before it affects the
          editorial process or the interpretation of
          published research.
        </p>

        <div className="subject-area-grid">
          {managementActions.map((item) => (
            <article className="subject-area-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <p>
          The appropriate response depends on the nature,
          seriousness, and relevance of the conflict.
          Some interests may be managed through disclosure,
          while others may require reassignment or
          withdrawal from a particular editorial role.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>8. Conflict-of-Interest Statement in Published Articles</h2>

        <p>
          Authors may be required to include a conflict-of-interest
          declaration in the manuscript. Where relevant,
          the statement should identify the nature of the
          interest and provide sufficient information for
          readers to understand its relationship to the work.
        </p>

        <p>
          Where no competing interests are declared, an
          appropriate statement may read:
        </p>

        <blockquote>
          The authors declare that they have no competing
          interests relevant to this work.
        </blockquote>

        <p>
          Where funding or sponsorship has been received,
          the relevant information should also be reported
          accurately in the appropriate funding or
          acknowledgement statement.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>9. Failure to Disclose</h2>

        <p>
          Failure to disclose a relevant competing interest,
          whether intentional or arising from an oversight,
          may require editorial examination. The journal
          may request clarification or supporting
          information from the individuals concerned.
        </p>

        <p>
          Depending on the circumstances and the stage of
          publication, appropriate action may include
          requesting a revised disclosure, replacing a
          conflicted reviewer or editor, delaying editorial
          processing, rejecting a submission, or publishing
          a correction to an existing article.
        </p>

        <p>
          Deliberate concealment or misrepresentation of
          a material competing interest may be treated
          as a publication-ethics concern.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>10. Post-Publication Concerns</h2>

        <p>
          If a previously undisclosed conflict is identified
          after publication, the journal may assess whether
          the interest is relevant to the published work
          and whether readers require additional information.
        </p>

        <p>
          Depending on the findings, the journal may publish
          an additional disclosure, issue a correction, or
          take other appropriate action to maintain
          transparency in the scholarly record.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>11. Editorial Commitment</h2>

        <p>
          JPSA considers transparency in competing interests
          essential to maintaining confidence in scientific
          publication. The journal expects all participants
          to disclose relevant relationships honestly and
          cooperate with reasonable requests for clarification.
        </p>

        <p>
          The disclosure and management of conflicts are
          intended to protect the independence of peer
          review, the fairness of editorial decisions,
          and the credibility of published research.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>Related Policies</h2>

        <p>
          Authors and reviewers should also consult the
          journal's{" "}
          <Link href="/policies/publication-ethics">
            Publication Ethics Policy
          </Link>
          ,{" "}
          <Link href="/policies/authorship-policy">
            Authorship Policy
          </Link>
          , and{" "}
          <Link href="/policies/plagiarism-policy">
            Plagiarism Policy
          </Link>.
        </p>
      </section>
    </div>
  );
}
