import Link from "next/link";

const manuscriptSections = [
  {
    title: "Title",
    description:
      "The title should be concise, informative and accurately reflect the central subject of the research. Avoid unnecessary abbreviations and overly broad statements.",
  },
  {
    title: "Abstract",
    description:
      "Provide a self-contained summary of the research objective, methodology, principal findings and conclusions. The abstract should allow readers to understand the contribution without consulting the full manuscript.",
  },
  {
    title: "Keywords",
    description:
      "Provide relevant keywords that represent the principal concepts, methods and subject areas of the work. Choose terms that will help readers discover the article.",
  },
  {
    title: "Introduction",
    description:
      "Introduce the research problem, explain its scientific background, identify the relevant research gap and state the objectives of the study.",
  },
  {
    title: "Methodology",
    description:
      "Describe the theoretical framework, experimental procedures, computational methods, materials, instruments and analytical techniques in sufficient detail to support evaluation and reproducibility.",
  },
  {
    title: "Results and Discussion",
    description:
      "Present the principal findings clearly and interpret them in relation to the research objectives and relevant published work. Figures, tables and equations should support the discussion rather than duplicate it.",
  },
  {
    title: "Conclusion",
    description:
      "Summarise the principal findings, explain their scientific significance and identify relevant limitations or possible directions for further research.",
  },
  {
    title: "References",
    description:
      "Include complete and accurate bibliographic details for all works cited in the manuscript. Every in-text citation should correspond to an entry in the reference list.",
  },
];

const preparationPoints = [
  {
    title: "Language and presentation",
    description:
      "Manuscripts should be written in clear, formal scientific English. Authors should check grammar, terminology, notation and consistency before submission.",
  },
  {
    title: "Equations and mathematical notation",
    description:
      "Equations should be created using an appropriate equation editor or equivalent typesetting method. Symbols, variables and abbreviations should be defined when first introduced.",
  },
  {
    title: "Figures and illustrations",
    description:
      "Figures should be relevant, clearly labelled and of sufficient resolution for publication. Each figure must have a descriptive caption and should be cited in the manuscript.",
  },
  {
    title: "Tables",
    description:
      "Tables should have descriptive titles, clearly identified columns and appropriate units. Avoid presenting the same information in both a table and a figure unless necessary.",
  },
  {
    title: "Units and symbols",
    description:
      "Use standard scientific notation and internationally recognised units wherever applicable. Maintain consistent notation throughout the manuscript.",
  },
  {
    title: "Abbreviations",
    description:
      "Define abbreviations at their first occurrence and use them consistently throughout the manuscript. Avoid introducing abbreviations that are not necessary.",
  },
];

export default function ManuscriptPreparationPage() {
  return (
    <div className="container page journal-content-page">
      <div className="eyebrow">AUTHOR GUIDELINES</div>
      <h1>Manuscript Preparation</h1>

      <section className="journal-content-section">
        <h2>Preparing Your Manuscript</h2>
        <div className="prose">
          <p>
            Authors submitting manuscripts to the Journal of Physical Science
            Advances (JPSA) are expected to prepare their work in a clear,
            organised and scientifically rigorous manner. A well-prepared
            manuscript helps editors and reviewers assess the quality,
            originality and relevance of the research.
      
            Authors should ensure that the manuscript is complete, properly
            structured, appropriately referenced and consistent with the
            journal&apos;s subject scope before beginning the submission
            process.
          </p>
        </div>
      </section>

      <section className="journal-content-section">
        <h2>Recommended Manuscript Structure</h2>
        <p>
          Research manuscripts should generally follow the structure below,
          where appropriate to the article type and nature of the research.
        </p>

        <div className="subject-area-grid">
          {manuscriptSections.map((item, index) => (
            <article className="subject-area-card" key={item.title}>
              <div className="eyebrow">SECTION {String(index + 1).padStart(2, "0")}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="journal-content-section">
        <h2>Formatting and Presentation</h2>
        <p>
          Manuscripts should be consistently formatted and presented in a
          readable academic style. Authors should pay particular attention to
          the following elements:
        </p>

        <div className="subject-area-grid">
          {preparationPoints.map((item) => (
            <article className="subject-area-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="journal-content-section">
        <h2>Research Data and Reproducibility</h2>
        <div className="prose">
          <p>
            Authors should provide sufficient information about the data,
            methods, calculations and experimental conditions used in their
            research to allow readers to understand and evaluate the reported
            findings.
          </p>
          <p>
            Where relevant, authors are encouraged to make supporting datasets,
            computational codes, supplementary calculations and other research
            materials available through appropriate repositories or as
            supplementary files.
          </p>
          <p>
            Any restrictions on access to research data should be explained
            clearly.
          </p>
        </div>
      </section>

      <section className="journal-content-section">
        <h2>References and Citations</h2>
        <div className="prose">
          <p>
            All sources used in the preparation of a manuscript must be
            acknowledged through appropriate citations. Authors are
            responsible for checking the accuracy and completeness of their
            references.
          </p>
          <p>
            References should be presented consistently throughout the
            manuscript. Authors should ensure that cited works are relevant
            and that the original sources have been consulted wherever
            possible.
          </p>
        </div>
      </section>

      <section className="journal-content-section">
        <h2>Figures, Tables and Supplementary Material</h2>
        <div className="prose">
          <p>
            Figures, tables and supplementary files should be numbered
            consistently and referred to in the main text. Captions should
            explain the content sufficiently for readers to understand the
            material.
          </p>
          <p>
            Authors must have the necessary rights and permissions to use
            third-party figures, photographs, datasets or other copyrighted
            material included in their submissions.
          </p>
        </div>
      </section>

      <section className="journal-content-section">
        <h2>Before Submission</h2>
        <p>Authors should check that:</p>
        <ul>
          <li>The manuscript falls within the scope of JPSA.</li>
          <li>The work is original and is not under consideration elsewhere.</li>
          <li>All authors have reviewed and approved the submitted version.</li>
          <li>Author details and affiliations are accurate.</li>
          <li>Figures, tables, equations and references are complete.</li>
          <li>Required declarations and supporting files are prepared.</li>
          <li>Permissions have been obtained for any third-party material.</li>
        </ul>
      </section>

      <section className="journal-content-section">
        <h2>Related Information</h2>
        <div className="prose">
          <p>
            Please also consult the{" "}
            <Link href="/policies/plagiarism-policy">Plagiarism Policy</Link>,{" "}
            <Link href="/policies/authorship-policy">Authorship Policy</Link>{" "}
            and{" "}
            <Link href="/policies/conflict-of-interest">
              Conflict of Interest Policy
            </Link>{" "}
            before submitting your manuscript.
          </p>
          <p>
            For instructions on sending a manuscript to the journal, see the{" "}
            <Link href="/author-guidelines/submission-process">
              Submission Process
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}