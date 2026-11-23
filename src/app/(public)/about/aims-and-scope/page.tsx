import { journalInfo } from "@/lib/journal-content";

const contributionTypes = [
  ["Theoretical and Mathematical Research", "Analytical, mathematical and theoretical studies that advance understanding within the journal's approved subject areas."],
  ["Experimental and Applied Research", "Experimental, laboratory, field and applied studies with clearly described methods, evidence and conclusions."],
  ["Computational and Data-Driven Research", "Computational modelling, simulation, algorithms, software, data analysis and numerical methods applied to relevant research problems."],
  ["Engineering and Technological Research", "Research on the analysis, design, development, testing or improvement of engineering systems and technological applications."],
  ["Interdisciplinary Research", "Work that makes a meaningful connection between two or more approved scientific, engineering or technological fields."],
] as const;

const articleTypes = [
  ["Original Research Articles", "Complete reports of original research, with a clear question, methods, results and discussion."],
  ["Review Articles", "Structured and critical syntheses of research developments in a defined area."],
  ["Short Communications", "Concise reports of focused findings, observations or methodological advances."],
  ["Theoretical and Computational Studies", "Studies centred on model development, analysis, simulation or theoretical interpretation."],
] as const;

export default function AimsAndScopePage() {
  return (
    <main className="container page journal-content-page">
      <div className="eyebrow">JOURNAL INFORMATION</div>
      <h1>Aims &amp; Scope</h1>

      <section className="journal-content-section">
        <h2>Aims of the Journal</h2>
        <p>
          The {journalInfo.name} ({journalInfo.abbreviation}) provides a
          scholarly platform for significant research across science,
          engineering and technology. The journal welcomes theoretical,
          experimental, computational, applied and interdisciplinary work.
        </p>
        <p>
          JPSTA supports research that develops knowledge, methods, systems
          and technologies within its approved subject areas. Manuscripts
          should state their research contribution clearly and present their
          methods, evidence and conclusions responsibly.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>Approved Subject Areas</h2>
        <p>
          JPSTA considers submissions in the following seven major
          categories. Environmental Engineering is included within Civil
          Engineering.
        </p>
        <div className="subject-area-grid">
          {journalInfo.subjectAreas.map((area, index) => (
            <article className="subject-area-card" key={area.title}>
              <div className="eyebrow">SUBJECT AREA {String(index + 1).padStart(2, "0")}</div>
              <h3>{area.title}</h3>
              <ul>
                {area.areas.map((topic) => <li key={topic}>{topic}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="journal-content-section">
        <h2>Nature of Research Contributions</h2>
        <div className="subject-area-grid">
          {contributionTypes.map(([title, description]) => (
            <article className="subject-area-card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="journal-content-section">
        <h2>Article Categories</h2>
        <div className="subject-area-grid">
          {articleTypes.map(([title, description]) => (
            <article className="subject-area-card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="journal-content-section">
        <h2>Scope Considerations</h2>
        <p>
          A submission should demonstrate clear relevance to at least one
          approved subject area. Interdisciplinary work should explain how
          the participating fields contribute to the research question and
          its contribution. Inclusion within the scope does not guarantee
          acceptance or publication.
        </p>
      </section>
    </main>
  );
}
