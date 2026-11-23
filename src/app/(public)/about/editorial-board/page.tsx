
import type { Metadata } from "next";
import Image from "next/image";
import { editorialBoard } from "@/lib/journal-content";

export const metadata: Metadata = {
  title: "Editorial Board | JPSTA",
  description:
    "Meet the editorial leadership and academic contributors of the Journal of Physical Sciences and Technological Advances.",
};

type Editor = {
  name: string;
  country: string;
  designation?: string;
  department?: string;
  institution?: string;
  city?: string;
  email?: string;
  photoUrl?: string;
};

function EditorSection({
  title,
  members,
}: {
  title: string;
  members: Editor[];
}) {
  return (
    <section className="editorial-section">
      <h2>{title}</h2>

      <div className="editorial-grid">
        {members.map((member) => {
          const initials = member.name
            .replace(/^(Prof\.|Professor|Dr\.)\s*/i, "")
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part.charAt(0).toUpperCase())
            .join("");

          return (
            <article className="editorial-card" key={member.name}>
              <div className="editorial-photo">
                {member.photoUrl ? (
                  <Image
                    src={member.photoUrl}
                    alt={`Portrait of ${member.name}`}
                    width={140}
                    height={160}
                    className="editorial-photo-image"
                  />
                ) : (
                  <div
                    className="editorial-photo-placeholder"
                    aria-label={`Photograph unavailable for ${member.name}`}
                  >
                    <span aria-hidden="true">{initials}</span>
                  </div>
                )}
              </div>

              <div className="editorial-card-content">
                <h3>{member.name}</h3>

                {member.designation && (
                  <p className="editorial-designation">
                    {member.designation}
                  </p>
                )}

                {member.department && (
                  <p className="editorial-affiliation">
                    {member.department}
                  </p>
                )}

                {member.institution && (
                  <p className="editorial-affiliation">
                    {member.institution}
                  </p>
                )}

                {(member.city || member.country) && (
                  <p className="editorial-location">
                    {[member.city, member.country]
                      .filter(Boolean)
                      .join(", ")}
                  </p>
                )}

                {member.email && (
                  <a
                    className="editorial-email"
                    href={`mailto:${member.email}`}
                  >
                    {member.email}
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
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
        Journal of Physical Sciences and Technological Advances.
      </p>

      <section className="prose">
        <h2>Editorial leadership</h2>

        <p>
          The editorial board comprises the following members who
          contribute to the journal&apos;s academic and editorial direction.
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

        <section className="editorial-section">
          <h2>Journal Secretariat</h2>

          <article className="editorial-card editorial-secretariat">
            <div className="editorial-card-content">
              <h3>{editorialBoard.secretary.name}</h3>

              <p className="editorial-designation">
                {editorialBoard.secretary.designation}
              </p>

              <p className="editorial-affiliation">
                {editorialBoard.secretary.office}
              </p>
            </div>
          </article>
        </section>

        <section className="editorial-section editorial-responsibilities">
          <h2>Editorial responsibilities</h2>

          <p>
            The editorial team oversees the following responsibilities:
          </p>

          <ul>
            <li>
              Assess whether submitted manuscripts fall within the
              journal&apos;s aims and scope.
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
        </section>

        <section className="editorial-section">
          <h2>Editorial independence</h2>

          <p>
            Editorial decisions should be based on the academic quality,
            relevance and integrity of a manuscript. Financial
            considerations, including any applicable publication charges,
            must not influence acceptance or rejection decisions.
          </p>
        </section>
      </section>
    </main>
  );
}
