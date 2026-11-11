
import { journalInfo } from "@/lib/journal-content";

const researchContributions = [
  {
    title: "Theoretical Research",
    description:
      "The journal welcomes theoretical investigations that contribute to the understanding of physical systems and scientific phenomena. This includes the development of analytical models, mathematical formulations, theoretical frameworks, and interpretations based on established physical principles.",
    details:
      "Relevant contributions may address the behaviour of matter, interactions between physical systems, quantum phenomena, thermodynamic processes, and theoretical descriptions of material properties. Research should make its underlying assumptions, mathematical treatment, and scientific contribution clear.",
  },
  {
    title: "Experimental Research",
    description:
      "Experimental studies involving the observation, measurement, and investigation of physical and material systems fall within the journal's scope. Such work may involve the development or application of experimental techniques to examine physical properties and scientific behaviour.",
    details:
      "Contributions may include experimental investigations of materials, measurement methodologies, characterization techniques, and the interpretation of observed results. The relationship between the experimental approach, collected evidence, and conclusions should be clearly established.",
  },
  {
    title: "Computational Research",
    description:
      "JPSA considers computational investigations that use numerical techniques, simulation methods, algorithms, and mathematical models to examine problems in physical and allied sciences.",
    details:
      "Areas of interest include computational physics, numerical modelling, simulation of material systems, computational chemistry, and data-driven scientific analysis. Submissions should explain the computational approach and demonstrate how it contributes to understanding the problem under investigation.",
  },
  {
    title: "Interdisciplinary Research",
    description:
      "The journal encourages research that brings together concepts, techniques, or methodologies from multiple scientific disciplines. Interdisciplinary work is particularly relevant when the combination of different approaches provides a meaningful contribution to a scientific problem.",
    details:
      "Examples include the application of mathematical methods to physical systems, the study of materials through combined physical and chemical approaches, and computational techniques applied to problems in quantum science, energy research, or materials science.",
  },
];

const articleTypes = [
  {
    title: "Original Research Articles",
    description:
      "Original research articles present new scientific findings, theoretical developments, experimental observations, or computational results. They should communicate a clearly defined research problem, explain the methodology adopted, present the results, and discuss their scientific significance.",
    note:
      "The contribution should demonstrate originality and provide sufficient information for readers to understand the research approach and its findings.",
  },
  {
    title: "Review Articles",
    description:
      "Review articles provide a structured examination of research developments within a specific scientific subject. They may bring together findings from different studies, discuss established theories, examine emerging directions, and identify unresolved questions.",
    note:
      "A useful review should go beyond listing previous publications and provide a meaningful synthesis of the available scientific literature.",
  },
  {
    title: "Short Communications",
    description:
      "Short communications are intended for concise presentation of focused scientific findings, observations, or developments. They may communicate a specific result, a new observation, or a limited but significant contribution within the journal's subject areas.",
    note:
      "The presentation should remain focused on the central finding while providing adequate scientific context and supporting evidence.",
  },
  {
    title: "Theoretical and Computational Studies",
    description:
      "These contributions focus on the use of theoretical frameworks, mathematical analysis, numerical methods, and computational techniques to investigate scientific problems.",
    note:
      "Relevant studies may include model development, computational analysis, numerical investigation, and theoretical interpretation of physical or material systems.",
  },
];

const interdisciplinaryExamples = [
  {
    title: "Physics and Chemistry",
    description:
      "Research examining the relationship between physical principles and chemical behaviour, including physical chemistry, chemical physics, molecular interactions, and the properties of materials.",
  },
  {
    title: "Physics and Mathematics",
    description:
      "Studies using mathematical structures, analytical techniques, differential equations, numerical methods, and mathematical modelling to describe physical systems and scientific processes.",
  },
  {
    title: "Physics and Materials Science",
    description:
      "Investigations of the structural, electronic, optical, magnetic, thermal, and other physical properties of materials, including their theoretical description and experimental characterization.",
  },
  {
    title: "Physics and Computational Science",
    description:
      "Research employing computational modelling, numerical simulation, scientific algorithms, and data analysis to investigate complex physical and material systems.",
  },
  {
    title: "Physics and Energy Research",
    description:
      "Scientific studies concerning energy-related materials, functional materials, energy conversion principles, and the physical processes relevant to sustainable technologies.",
  },
];

export default function Page() {
  return (
    <div className="container page journal-content-page">
      <div className="eyebrow">JOURNAL INFORMATION</div>
      <h1>Aims &amp; Scope</h1>

      <section className="journal-content-section">
        <h2>Aims of the Journal</h2>

        <p>
          Journal of Physical Science Advances (JPSA) aims to provide a
          scholarly platform for the communication of significant research
          findings in Physics and its allied scientific disciplines. The
          journal focuses on the advancement of scientific understanding
          through theoretical investigation, experimental observation,
          computational analysis, and interdisciplinary research.
        </p>

        <p>
          An important objective of the journal is to encourage the
          development and application of physical concepts in addressing
          scientific questions across different areas of research. This
          includes investigations into the fundamental behaviour of matter,
          interactions between physical systems, material properties,
          mathematical descriptions of natural phenomena, and the use of
          computational approaches in scientific analysis.
        </p>

        <p>
          JPSA seeks to facilitate the exchange of scientific knowledge
          between researchers working in related and emerging fields.
          By providing coverage across multiple disciplines, the journal
          aims to encourage research that connects established scientific
          principles with new methodologies, interpretations, and
          applications.
        </p>

        <p>
          The journal also aims to provide an academic publication
          opportunity for researchers at different stages of their
          scientific careers. It encourages contributions that are
          scientifically relevant, clearly presented, and capable of
          contributing to further investigation in their respective
          subject areas.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>Subject Scope</h2>

        <p>
          The scope of JPSA encompasses a broad range of subjects in
          physical sciences and their allied disciplines. The areas
          outlined below represent the principal fields covered by
          the journal. Research may fall within one of these areas or
          address questions that involve more than one discipline.
        </p>

        <div className="subject-area-grid">
          {journalInfo.subjectAreas.map((area, index) => (
            <article className="subject-area-card" key={area.title}>
              <div className="eyebrow">
                SUBJECT AREA {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{area.title}</h3>

              <ul>
                {area.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p>
          These subject classifications are intended to describe the
          journal's principal areas of interest rather than establish
          rigid disciplinary boundaries. Research involving emerging
          topics or closely related scientific fields may also be
          considered where there is a clear connection to the journal's
          overall scope.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>Nature of Research Contributions</h2>

        <p>
          JPSA recognises that scientific advancement takes place through
          different forms of investigation. The journal therefore covers
          theoretical, experimental, computational, and interdisciplinary
          approaches. The suitability of a contribution depends on its
          relationship to the journal's subject areas and the scientific
          value of the work presented.
        </p>

        <div className="subject-area-grid">
          {researchContributions.map((item) => (
            <article className="subject-area-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="journal-content-section">
        <h2>Interdisciplinary Orientation</h2>

        <p>
          Many contemporary scientific problems cannot be adequately
          investigated through the methods of a single discipline.
          Developments in materials research, computational modelling,
          energy science, and quantum technologies increasingly involve
          the combined application of concepts from Physics, Chemistry,
          Mathematics, and computational sciences.
        </p>

        <p>
          In this context, JPSA encourages contributions that establish
          meaningful connections between disciplines. Interdisciplinary
          research should demonstrate how the participating fields
          contribute to the investigation and how their integration
          advances the understanding of the problem.
        </p>

        <div className="subject-area-grid">
          {interdisciplinaryExamples.map((item) => (
            <article className="subject-area-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <p>
          The journal's interdisciplinary orientation is intended to
          support scientific exchange across conventional subject
          boundaries while maintaining a clear emphasis on the physical
          sciences and their applications.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>Article Categories</h2>

        <p>
          The journal publishes different forms of scholarly contributions
          to facilitate the communication of original findings, critical
          discussions, and focused scientific developments.
        </p>

        <div className="subject-area-grid">
          {articleTypes.map((item) => (
            <article className="subject-area-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="journal-content-section">
        <h2>Scientific Relevance and Scope Considerations</h2>

        <p>
          Contributions submitted to JPSA should demonstrate a clear
          relationship to at least one of the scientific areas identified
          in this scope statement. The subject of a manuscript, its
          research objectives, and the methods used should collectively
          establish its relevance to the journal.
        </p>

        <p>
          Research addressing more than one discipline should explain
          the scientific relationship between those disciplines and
          identify the contribution made by their combined approach.
          Interdisciplinary terminology alone does not establish
          interdisciplinary relevance; the connection should be evident
          in the research itself.
        </p>

        <p>
          The journal's scope is not restricted to the specific examples
          listed on this page. Related and emerging research topics may
          fall within its coverage when they make a substantive
          contribution to Physics or an allied scientific discipline.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>Relationship with the Editorial Process</h2>

        <p>
          The stated aims and scope provide the subject framework for
          considering manuscripts submitted to the journal. The
          relationship of a manuscript to the journal's disciplinary
          coverage is an important consideration during editorial
          assessment.
        </p>

        <p>
          Scope relevance should be considered alongside the scientific
          content, originality, clarity, and suitability of the
          submission. Inclusion of a subject within this scope does not
          itself imply acceptance or guarantee publication.
        </p>
      </section>
    </div>
  );
}
