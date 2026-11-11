
import Link from "next/link";

const authorshipCriteria = [
  {
    title: "Substantial Intellectual Contribution",
    description:
      "The individual must have made a significant contribution to the conception or design of the research, or to the acquisition, analysis, or interpretation of the data. Contributions should involve meaningful intellectual or scientific involvement rather than routine assistance alone.",
  },
  {
    title: "Participation in Manuscript Preparation",
    description:
      "The individual must have participated in drafting the manuscript or critically revising it for important intellectual content. Merely reviewing the manuscript for grammar, formatting, or language corrections does not independently establish authorship.",
  },
  {
    title: "Approval of the Final Manuscript",
    description:
      "Every author must review and approve the final version of the manuscript before submission or publication. Authors should be satisfied that the work accurately represents the research and the contributions made by the authors.",
  },
  {
    title: "Accountability for the Research",
    description:
      "Each author must agree to take responsibility for their own contributions and cooperate in addressing questions concerning the accuracy, integrity, or reliability of any part of the work. Authors should understand the overall research sufficiently to identify which co-authors are responsible for other specific contributions.",
  },
];

const unacceptablePractices = [
  {
    title: "Gift or Honorary Authorship",
    description:
      "Including an individual as an author solely because of their academic position, seniority, institutional authority, financial support, or personal relationship with the research team, without a qualifying intellectual contribution.",
  },
  {
    title: "Guest Authorship",
    description:
      "Adding a person's name to a manuscript to increase its perceived credibility, influence, or likelihood of acceptance when that individual has not made a qualifying contribution.",
  },
  {
    title: "Ghost Authorship",
    description:
      "Excluding an individual who has made a substantial contribution to the research or manuscript, particularly where that person's involvement is deliberately concealed or their contribution is not appropriately acknowledged.",
  },
  {
    title: "Omission of Eligible Contributors",
    description:
      "Failing to include a researcher who satisfies the journal's authorship criteria, without a legitimate reason or the individual's agreement.",
  },
  {
    title: "Misrepresentation of Contributions",
    description:
      "Providing inaccurate or misleading information about the role, responsibility, or contribution of an individual listed as an author.",
  },
];

const nonAuthorContributions = [
  "Providing general supervision or administrative assistance without a qualifying intellectual contribution.",
  "Obtaining funding or institutional resources without participating substantially in the research.",
  "Providing routine technical assistance, equipment access, or laboratory facilities.",
  "Performing isolated data collection or routine testing without meaningful involvement in the research design, analysis, or interpretation.",
  "Providing proofreading, language editing, formatting, or reference-management assistance alone.",
];

const authorResponsibilities = [
  "Ensure that the submitted manuscript represents work in which they have made a genuine and qualifying contribution.",
  "Review and approve the complete manuscript before it is submitted to JPSA.",
  "Ensure that the research findings, data, references, and descriptions of contributions are accurately presented.",
  "Agree on the author list and the order in which authors are presented before submission.",
  "Disclose relevant conflicts of interest and any overlapping publications or related manuscripts.",
  "Cooperate with editorial enquiries concerning the research and their individual contributions.",
  "Notify the corresponding author and editorial office if a significant error or ethical concern is identified after submission or publication.",
];

const authorChanges = [
  {
    title: "Addition of an Author",
    description:
      "A request to add an author after initial submission must include a written explanation of the person's contribution and confirmation that the proposed author satisfies the journal's authorship criteria. Agreement from all existing authors and the proposed author must be obtained.",
  },
  {
    title: "Removal of an Author",
    description:
      "A request to remove an author must include an explanation and written confirmation from all authors concerned. The journal may seek clarification where the removal raises questions about contribution, consent, or the integrity of the author list.",
  },
  {
    title: "Change in Author Order",
    description:
      "Changes to author order after submission must be justified and agreed upon by all authors. The editorial office may request written confirmation before considering the proposed change.",
  },
  {
    title: "Changes After Acceptance",
    description:
      "Changes to authorship after manuscript acceptance require particular scrutiny. The journal may suspend the production process while the request is examined. Changes after publication may require a formal correction to the published record.",
  },
];

const contributionRoles = [
  "Conceptualization",
  "Methodology",
  "Investigation",
  "Formal analysis",
  "Software",
  "Validation",
  "Data curation",
  "Visualization",
  "Writing – original draft",
  "Writing – review and editing",
  "Resources",
  "Supervision",
  "Project administration",
  "Funding acquisition",
];

export default function Page() {
  return (
    <div className="container page journal-content-page">
      <div className="eyebrow">PUBLICATION ETHICS</div>
      <h1>Authorship Policy</h1>

      <section className="journal-content-section">
        <h2>1. Policy Statement</h2>

        <p>
          Journal of Physical Science Advances (JPSA) considers authorship
          an important recognition of intellectual contribution and
          responsibility in scientific publication. The designation
          of an individual as an author indicates that the person has
          made a meaningful contribution to the research and accepts
          responsibility for the integrity of their contribution.
        </p>

        <p>
          Authorship must be based on genuine academic and scientific
          involvement. An individual's position, designation, institutional
          affiliation, financial contribution, or professional relationship
          with the research team does not, by itself, establish eligibility
          for authorship.
        </p>

        <p>
          All individuals listed as authors must satisfy the journal's
          authorship requirements. The author list must accurately reflect
          the people who contributed to the work, and individuals who
          do not qualify as authors should be acknowledged appropriately
          where their contributions are relevant.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>2. Criteria for Authorship</h2>

        <p>
          JPSA expects every listed author to satisfy all four of the
          following criteria. These requirements are intended to ensure
          that authorship reflects both meaningful involvement in the
          research and responsibility for the resulting publication.
        </p>

        <div className="subject-area-grid">
          {authorshipCriteria.map((item, index) => (
            <article className="subject-area-card" key={item.title}>
              <div className="eyebrow">
                CRITERION {String(index + 1).padStart(2, "0")}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <p>
          Individuals who have made a substantial contribution to the
          research but have not participated in manuscript preparation,
          final approval, or accountability should be invited to fulfil
          the relevant requirements where appropriate. Authorship should
          not be assigned solely on the basis of a single isolated activity.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>3. Unacceptable Authorship Practices</h2>

        <p>
          JPSA does not accept practices that distort the actual
          contributions of individuals involved in scientific research.
          The following practices are considered inappropriate and
          may constitute breaches of publication ethics.
        </p>

        <div className="subject-area-grid">
          {unacceptablePractices.map((item, index) => (
            <article className="subject-area-card" key={item.title}>
              <div className="eyebrow">
                PRACTICE {String(index + 1).padStart(2, "0")}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <p>
          Any indication that authorship has been manipulated,
          misrepresented, or deliberately concealed may be examined
          by the editorial team. Depending on the circumstances,
          the journal may request an explanation, suspend editorial
          processing, or take further action.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>4. Contributions That Do Not Independently Qualify for Authorship</h2>

        <p>
          Certain forms of assistance are valuable to scientific
          research but do not independently establish eligibility
          for authorship. Such contributions should normally be
          recognised in the acknowledgements section, with the
          individual's consent.
        </p>

        <ul>
          {nonAuthorContributions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p>
          The distinction between authorship and acknowledgement
          depends on the actual nature and extent of an individual's
          contribution. For example, technical assistance may form
          part of a qualifying authorship contribution when accompanied
          by substantial intellectual involvement and fulfilment
          of the other authorship criteria.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>5. Author Order and Contribution</h2>

        <p>
          The order of authors should be determined collectively
          by the research team before manuscript submission.
          Authors are responsible for discussing and agreeing upon
          the order based on the relative nature and extent of their
          contributions to the research and manuscript.
        </p>

        <p>
          JPSA does not automatically prescribe a universal
          interpretation of first, middle, or last authorship
          positions, since conventions may differ across scientific
          disciplines and research groups. The author order should
          reflect an agreement among the contributors and should
          not be used to misrepresent individual involvement.
        </p>

        <p>
          Where a manuscript includes equal contributions, the
          authors may provide an appropriate equal-contribution
          statement. Similarly, a corresponding author or senior
          author designation should accurately reflect the agreed
          responsibilities and actual role of the individual.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>6. Corresponding Author Responsibilities</h2>

        <p>
          The corresponding author acts as the principal point of
          communication between the authors and the journal throughout
          the submission and publication process. The corresponding
          author is responsible for coordinating communication and
          ensuring that the submission accurately represents the
          collective agreement of the author group.
        </p>

        <p>The corresponding author is expected to:</p>

        <ul>
          <li>
            Obtain the agreement of all authors before submitting
            the manuscript.
          </li>
          <li>
            Confirm that every listed author has reviewed and
            approved the submitted version.
          </li>
          <li>
            Provide complete and accurate author names,
            affiliations, and contact details.
          </li>
          <li>
            Communicate editorial decisions, reviewer comments,
            and requests for revision to the co-authors.
          </li>
          <li>
            Coordinate the preparation and submission of revised
            manuscripts.
          </li>
          <li>
            Disclose any relevant authorship changes and obtain
            the required written agreement.
          </li>
          <li>
            Ensure that all authors are informed of the final
            publication decision and publication-stage corrections.
          </li>
        </ul>

        <p>
          Designation as corresponding author does not remove the
          responsibility of other authors for their respective
          contributions or for the integrity of the research.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>7. Author Contributions Statement</h2>

        <p>
          JPSA may request a statement describing the individual
          contributions of each author. This statement is intended
          to make the responsibilities of the research team
          transparent and to provide a clear record of how the
          work was conducted.
        </p>

        <p>
          Where applicable, contributions may be described using
          recognised contributor roles, including:
        </p>

        <ul>
          {contributionRoles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>

        <p>
          A contribution statement should identify the roles
          performed by each author accurately. Not every role
          needs to be assigned to every author, and listing a
          contributor role does not independently establish
          eligibility for authorship.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>8. Acknowledgements</h2>

        <p>
          Individuals and organisations that have provided
          meaningful assistance but do not meet the authorship
          criteria may be recognised in the acknowledgements
          section. Such recognition may include technical
          assistance, laboratory support, access to facilities,
          language editing, administrative assistance, or
          other relevant contributions.
        </p>

        <p>
          Authors should obtain permission from individuals
          before including their names in the acknowledgements.
          Financial support, institutional assistance, and
          relevant research facilities should be acknowledged
          accurately and transparently.
        </p>

        <p>
          Acknowledgement must not be used as a substitute
          for authorship where an individual has made a
          qualifying intellectual contribution and satisfies
          the journal's authorship requirements.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>9. Changes to Authorship</h2>

        <p>
          The author list should be finalised before submission.
          Any subsequent change must be supported by a legitimate
          explanation and the agreement of all individuals
          affected by the change.
        </p>

        <div className="subject-area-grid">
          {authorChanges.map((item) => (
            <article className="subject-area-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <p>
          JPSA reserves the right to delay further processing
          until the authorship request has been adequately
          explained and documented. The journal may decline
          a proposed change where the necessary agreement
          or supporting information is not provided.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>10. Use of Artificial Intelligence Tools</h2>

        <p>
          Artificial intelligence tools and other automated
          systems may assist researchers with activities such
          as language improvement, formatting, coding support,
          literature organisation, and data analysis. However,
          such tools cannot be listed as authors of a manuscript.
        </p>

        <p>
          Authorship requires the ability to take responsibility
          for research contributions, approve the final manuscript,
          and respond to questions concerning the integrity of
          the work. AI systems cannot independently fulfil
          these responsibilities.
        </p>

        <p>
          Authors remain fully responsible for the accuracy,
          originality, references, interpretations, and integrity
          of material included in their manuscripts, including
          content generated or assisted by AI tools.
        </p>

        <p>
          Where AI tools have been used in a manner that
          materially contributes to the research or manuscript,
          authors should disclose their use in accordance
          with the journal's applicable submission requirements.
          AI-generated or AI-assisted material must not be
          used to fabricate research findings, references,
          data, images, or other scholarly evidence.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>11. Authorship Disputes</h2>

        <p>
          Disagreements concerning author eligibility, author
          order, omitted contributors, or changes to the author
          list should initially be addressed by the authors
          and their research team.
        </p>

        <p>
          Where an authorship dispute is brought to the
          attention of JPSA, the editorial office may request
          written explanations, contribution statements, and
          confirmation from the individuals involved. The
          journal may suspend the processing or publication
          of the manuscript while the matter remains unresolved.
        </p>

        <p>
          The journal is not expected to determine employment,
          institutional, contractual, or other personal disputes
          between researchers. Where necessary, the matter
          may be referred to the relevant institution or
          appropriate research authority for investigation.
        </p>

        <p>
          Editorial processing may resume when sufficient
          clarification or an appropriate resolution has
          been provided.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>12. Post-Publication Authorship Concerns</h2>

        <p>
          If an authorship concern is identified after an
          article has been published, the journal may examine
          the available evidence and seek explanations from
          the authors or relevant institutions.
        </p>

        <p>
          Depending on the findings, appropriate action may
          include a correction to the author list, an
          authorship clarification, an expression of concern,
          or another corrective notice where necessary.
          Any amendment to the published record should be
          documented through an appropriate editorial notice.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>13. Editorial Responsibility</h2>

        <p>
          The editorial team is responsible for considering
          authorship-related concerns in a fair, consistent,
          and evidence-based manner. The journal may request
          additional documentation when the author list or
          reported contributions require clarification.
        </p>

        <p>
          JPSA expects all authors to act honestly when
          identifying contributors and describing their
          respective roles. The purpose of this policy is
          to ensure that academic credit is assigned
          appropriately and that every published article
          has a transparent record of responsibility.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>Related Policies</h2>

        <p>
          Authors should also consult the journal's{" "}
          <Link href="/policies/plagiarism-policy">
            Plagiarism Policy
          </Link>{" "}
          and other applicable publication ethics and
          submission requirements before submitting
          a manuscript.
        </p>
      </section>
    </div>
  );
}
