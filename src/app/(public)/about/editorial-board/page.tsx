
import type { Metadata } from "next";
import Link from "next/link";
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
};

function EditorSection({
  title,
  members,
}: {
  title: string;
  members: Editor[];
}) {
  return (
    <section className="editorial-list-section">
      <h2 className="editorial-list-heading">{title}</h2>

      {members.length > 0 ? (
        <div className="editorial-members">
          {members.map((member) => (
            <article className="editorial-member" key={member.name}>
              <h3>{member.name}</h3>

              {member.designation && (
                <p>{member.designation}</p>
              )}

              {member.department && (
                <p>{member.department}</p>
              )}

              {member.institution && (
                <p>{member.institution}</p>
              )}

              {(member.city || member.country) && (
                <p>
                  {[member.city, member.country]
                    .filter(Boolean)
                    .join(", ")}
                </p>
              )}

              {member.email && (
                <p className="editorial-member-email">
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${member.email}`}>
                    {member.email}
                  </a>
                </p>
              )}
            </article>
          ))}
        </div>
      ) : (
        <p className="editorial-coming-soon">
          Information will be announced shortly.
        </p>
      )}
    </section>
  );
}

export default function EditorialBoardPage() {
  return (
    <main className="container page editorial-page">
      <div className="editorial-layout">
        <div className="editorial-main">
          <header className="editorial-header">
            <h1>Editorial Board</h1>
            <p>
              The editorial board of the Journal of Physical Sciences
              and Technological Advances provides academic leadership
              and oversees the journal&apos;s editorial and scholarly
              activities.
            </p>
          </header>

          <EditorSection
            title="Editor-in-Chief"
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

          <section className="editorial-list-section">
            <h2 className="editorial-list-heading">
              Journal Secretariat
            </h2>

            <article className="editorial-member">
              <h3>{editorialBoard.secretary.name}</h3>
              <p>{editorialBoard.secretary.designation}</p>
              <p>{editorialBoard.secretary.office}</p>
            </article>
          </section>
        </div>

        <aside className="editorial-sidebar">
          <section className="editorial-sidebar-section">
            <h2>Journal Information</h2>
            <div className="editorial-sidebar-links">
              <Link href="/about/journal-information">
                Journal Details
              </Link>
              <Link href="/about/aims-and-scope">
                Aims and Scope
              </Link>
              <Link href="/indexing">
                Abstracting and Indexing
              </Link>
            </div>
          </section>

          <section className="editorial-sidebar-section">
            <h2>For Authors</h2>
            <div className="editorial-sidebar-links">
              <Link href="/authors/guidelines">
                Author Guidelines
              </Link>
              <Link href="/authors/manuscript-preparation">
                Manuscript Preparation
              </Link>
              <Link href="/authors/peer-review">
                Peer Review Process
              </Link>
              <Link href="/submit">
                Submit a Manuscript
              </Link>
            </div>
          </section>

          <section className="editorial-sidebar-section">
            <h2>Editorial Contact</h2>
            <p>
              For editorial correspondence and journal-related
              enquiries, please contact the editorial office.
            </p>
            <a
              className="editorial-sidebar-email"
              href="mailto:editor@jpsa-journal.org.in"
            >
              editor@jpsa-journal.org.in
            </a>
          </section>
        </aside>
      </div>
    </main>
  );
}
