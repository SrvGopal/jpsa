
const violations = [
  {
    title: "Direct Plagiarism",
    description:
      "Reproducing sentences, paragraphs, research findings, figures, tables, or other material from another source without appropriate acknowledgement or quotation. Presenting another person's work as one's own is unacceptable, irrespective of the amount of material reproduced.",
  },
  {
    title: "Mosaic and Patchwork Plagiarism",
    description:
      "Combining phrases, sentences, or passages taken from multiple sources, with only minor changes to wording or sentence structure, without proper attribution. Changing a few words or rearranging sentences does not make copied material original.",
  },
  {
    title: "Paraphrasing Without Attribution",
    description:
      "Restating another author's ideas, arguments, interpretations, or findings in different words without acknowledging the original source. Proper paraphrasing requires both genuine re-expression and appropriate citation.",
  },
  {
    title: "Self-Plagiarism and Redundant Publication",
    description:
      "Reusing substantial portions of one's previously published work without appropriate disclosure and acknowledgement. Submitting substantially overlapping manuscripts or republishing the same research as a new contribution without transparent disclosure is not acceptable.",
  },
  {
    title: "Unauthorized Use of Figures and Data",
    description:
      "Using another researcher's figures, photographs, illustrations, tables, datasets, experimental results, or other research materials without proper acknowledgement and, where required, permission from the rights holder.",
  },
  {
    title: "Authorship and Source Misrepresentation",
    description:
      "Claiming another person's intellectual contribution as one's own, concealing the original source of research material, or misrepresenting the origin, ownership, or development of submitted work.",
  },
];

const authorResponsibilities = [
  "Ensure that the submitted manuscript represents original work and that all sources have been appropriately acknowledged.",
  "Provide accurate citations for ideas, statements, methods, data, figures, tables, and other material obtained from external sources.",
  "Use quotation marks and appropriate references when reproducing exact text from another source.",
  "Obtain permission for copyrighted material wherever permission is required and retain evidence of such permission.",
  "Disclose any substantial overlap with the authors' previously published work, manuscripts under consideration elsewhere, or related publications.",
  "Ensure that all listed references genuinely support the claims and information attributed to them.",
  "Cooperate with editorial enquiries concerning the originality, ownership, and provenance of submitted material.",
];

const editorialActions = [
  {
    stage: "Before publication",
    description:
      "When potential plagiarism or substantial textual overlap is identified during initial screening or peer review, the editorial office may request an explanation, clarification, original source material, or a revised manuscript. The manuscript may be placed on hold while the concern is examined.",
  },
  {
    stage: "Rejection of a manuscript",
    description:
      "Where plagiarism or an unacceptable level of unattributed reuse is established, JPSA may reject the manuscript. Serious cases may also result in restrictions on further submissions by the responsible authors, subject to editorial review.",
  },
  {
    stage: "After publication",
    description:
      "If plagiarism is identified after publication, the journal may investigate the matter and take appropriate corrective action. Depending on the seriousness and extent of the violation, this may include publication of a correction, an expression of concern, or retraction of the article.",
  },
  {
    stage: "Institutional notification",
    description:
      "In serious cases, or where further investigation is necessary, the journal may communicate with the authors' affiliated institutions, research supervisors, or other relevant authorities, where appropriate.",
  },
];

export default function Page() {
  return (
    <div className="container page journal-content-page">
      <div className="eyebrow">PUBLICATION ETHICS</div>
      <h1>Plagiarism Policy</h1>

      <section className="journal-content-section">
        <h2>1. Policy Statement</h2>

        <p>
          Journal of Physical Science Advances (JPSA) maintains a strict
          position against plagiarism and all forms of unattributed
          appropriation of intellectual work. The journal expects every
          manuscript submitted for publication to demonstrate academic
          integrity, originality, appropriate attribution, and respect
          for the intellectual contributions of other researchers.
        </p>

        <p>
          Plagiarism, whether intentional or resulting from inadequate
          citation practices, is treated as a serious breach of
          publication ethics. Authors are responsible for ensuring
          that their manuscripts do not contain copied, improperly
          paraphrased, misrepresented, or otherwise unattributed
          material.
        </p>

        <p>
          The journal does not consider the deliberate presentation
          of another person's research, language, ideas, data, or
          intellectual contribution as original work to be acceptable.
          A manuscript may be rejected if an ethical violation is
          established, regardless of the academic qualifications,
          institutional affiliation, or professional position of
          its authors, and author may be restricted from submitting future manuscripts and will be responsible for copyright infringement and plagiarism.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>2. What Constitutes Plagiarism?</h2>

        <p>
          Plagiarism involves using another person's intellectual
          work without appropriate acknowledgement and presenting
          that material in a manner that misrepresents its origin
          or ownership. It can occur in written text as well as in
          research results, mathematical formulations, illustrations,
          experimental material, and other scholarly contributions.
        </p>

        <p>
          The following practices are considered unacceptable:
        </p>

        <div className="subject-area-grid">
          {violations.map((item, index) => (
            <article className="subject-area-card" key={item.title}>
              <div className="eyebrow">
                VIOLATION {String(index + 1).padStart(2, "0")}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="journal-content-section">
        <h2>3. Originality and Manuscript Requirements</h2>

        <p>
          Every manuscript submitted to JPSA must represent a genuine
          scholarly contribution and must appropriately acknowledge
          the work on which it is based. Authors must not submit
          material that has been copied from other publications or
          that conceals the origin of previously published research.
        </p>

        <p>
          Authors are expected to distinguish clearly between their
          own contributions and the work of other researchers.
          Statements, theories, methods, experimental findings,
          numerical results, and interpretations derived from existing
          literature must be supported by appropriate references.
        </p>

        <p>
          Where a manuscript contains material from an author's own
          earlier publication, the earlier work must be acknowledged
          and the relationship between the two contributions must
          be made clear. Reuse must not create a misleading impression
          of new or independent research.
        </p>

        <p>
          Submission of a manuscript to JPSA also requires authors
          to disclose relevant overlapping publications and related
          submissions. A manuscript must not be presented as an
          entirely new contribution when substantially the same work
          has already been published or is under consideration
          elsewhere.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>4. Similarity Screening and Editorial Assessment</h2>

        <p>
          Manuscripts may be examined for textual similarity as
          part of the journal's editorial assessment. Similarity
          screening is intended to identify passages that may
          require closer examination, including text matching
          published research, online material, and other available
          sources.
        </p>

        <p>
          A similarity report is an assessment aid and does not,
          by itself, establish the presence or absence of plagiarism.
          Editorial evaluation must consider the nature, location,
          extent, and context of the matched material.
        </p>

        <p>
          For example, properly cited technical terminology,
          standard methodological descriptions, bibliographic
          entries, and commonly used scientific expressions may
          produce text matches that do not necessarily constitute
          plagiarism. Conversely, a relatively small amount of
          copied material may represent a serious ethical violation
          if it involves another researcher's central findings,
          original interpretation, or intellectual contribution.
        </p>

        <p>
          Accordingly, JPSA does not treat a numerical similarity
          percentage as the sole basis for an editorial decision.
          The editorial assessment focuses on whether the manuscript
          demonstrates appropriate attribution and genuine scholarly
          originality.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>5. Responsibilities of Authors</h2>

        <p>
          Authors bear primary responsibility for the originality
          and ethical integrity of the manuscripts they submit.
          All authors associated with a submission are expected
          to ensure that the work complies with the journal's
          plagiarism requirements.
        </p>

        <p>Authors must:</p>

        <ul>
          {authorResponsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p>
          Failure to disclose relevant overlap or provide appropriate
          attribution may result in editorial action, even where
          the material was included through an oversight or
          misunderstanding of citation practices.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>6. Editorial Action in Cases of Plagiarism</h2>

        <p>
          Allegations and indications of plagiarism will be
          considered by the editorial team. The nature of the
          concern, available evidence, author explanations, and
          the stage of the publication process will be considered
          before an appropriate decision is made.
        </p>

        <div className="subject-area-grid">
          {editorialActions.map((item) => (
            <article className="subject-area-card" key={item.stage}>
              <h3>{item.stage}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <p>
          The journal reserves the right to withhold publication
          while an ethical concern is under examination. The
          seriousness of the violation and its impact on the
          integrity of the scholarly record will guide the
          editorial response.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>7. Plagiarism Discovered After Publication</h2>

        <p>
          Publication does not prevent the journal from examining
          concerns about plagiarism that arise at a later stage.
          Allegations concerning a published article may be
          investigated when supported by relevant information
          or evidence.
        </p>

        <p>
          Where an investigation establishes that an article
          contains plagiarism or serious unattributed material,
          JPSA may take corrective action to protect the accuracy
          and integrity of the published scholarly record.
        </p>

        <p>
          Depending on the circumstances, such action may include
          a correction, an expression of concern, or retraction.
          Any action taken should be communicated through an
          appropriate editorial notice so that readers are
          informed of the issue.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>8. Allegations and Reporting Concerns</h2>

        <p>
          Researchers, readers, reviewers, and other interested
          individuals who identify possible plagiarism in a
          manuscript or published article may bring the matter
          to the attention of the journal's editorial office.
        </p>

        <p>
          Reports should include sufficient information to allow
          the concern to be examined, such as the title or
          identification of the relevant JPSA article, the
          suspected source material, and a description of the
          passages or research content in question.
        </p>

        <p>
          The journal may request additional documentation
          where necessary. Reports will be considered on the
          basis of the information available, and appropriate
          steps may be taken following editorial assessment.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>9. Editorial Commitment</h2>

        <p>
          JPSA considers originality, accurate attribution, and
          responsible research conduct essential to scholarly
          communication. The journal expects authors, reviewers,
          and editors to uphold these principles throughout
          the submission, review, and publication process.
        </p>

        <p>
          The purpose of this policy is not only to address
          instances of plagiarism but also to protect the
          reliability of the scientific literature and maintain
          confidence in the research published by the journal.
        </p>
      </section>
    </div>
  );
}
