
import type { Metadata } from "next";
import { editorialBoard } from "@/lib/journal-content";

export const metadata: Metadata = {
  title: "Editorial Board | JPSA",
  description:
    "Meet the editorial leadership and academic contributors of the Journal of Physical Sciences Advances.",
};

type Editor = {
  name: string;
  country: string;
};

function EditorSection({
  title,
  members,
}: {
  title: string;
  members: Editor[];
}) {
  return (
    <>
      <h2>{title}</h2>

      <div className="editorial-grid">
        {members.map((member) => (
          <article className="editorial-card" key={member.name}>
            <div className="editorial-avatar" aria-hidden="true">
              {member.name
                .replace(/^(Prof\.|Dr\.)\s*/, "")
                .charAt(0)
                .toUpperCase()}
            </div>

            <div>
              <h3>{member.name}</h3>
              <p>{member.country}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default function EditorialBoardPage() {
  return (
    <main className="container page">
      <div className="eyebrow">JOURNAL GOVERNANCE</div>

      <h1>Editorial Board</h1>

      <p className="lead">
        The editorial board is responsible for maintaining the academic
        standards, editorial integrity and scholarly direction of the
        Journal of Physical Sciences Advances.
      </p>

      <section className="prose">
        <h2>Editorial leadership</h2>

        <p>
          The editorial board comprises the following members who
          contribute to the journal's academic and editorial direction.
        </p>

        <EditorSection
          title="Chief Editor"
          members={editorialBoard.chiefEditor}
        />

        <EditorSection
          title="Executive Editors"
          members={editorialBoard.executiveEditors}
        />

        <EditorSection
          title="Technical Editor"
          members={editorialBoard.technicalEditor}
        />

        <EditorSection
          title="Editors"
          members={editorialBoard.editors}
        />

        <h2>Journal Secretariat</h2>

        <div className="editorial-card">
          <div>
            <h3>{editorialBoard.secretary.name}</h3>
            <p>{editorialBoard.secretary.designation}</p>
            <p>{editorialBoard.secretary.office}</p>
          </div>
        </div>

        <h2>Editorial responsibilities</h2>

        <p>
          The editorial team oversees the following responsibilities:
        </p>

        <ul>
          <li>
            Assess whether submitted manuscripts fall within the
            journal's aims and scope.
          </li>
          <li>
            Coordinate independent peer review and evaluate reviewer
            recommendations.
          </li>
          <li>
            Make editorial decisions based on scholarly merit and
            applicable publication policies.
          </li>
          <li>
            Manage revisions, corrections and publication-related
            concerns.
          </li>
          <li>
            Support transparency, research integrity and responsible
            scholarly communication.
          </li>
        </ul>

        <h2>Editorial independence</h2>

        <p>
          Editorial decisions should be based on the academic quality,
          relevance and integrity of a manuscript. Financial
          considerations, including any applicable publication charges,
          must not influence acceptance or rejection decisions.
        </p>
      </section>
    </main>
  );
}
