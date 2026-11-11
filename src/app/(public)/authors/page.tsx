
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Authors | JPSA",
  description:
    "Author resources, manuscript preparation guidance and publication information for JPSA.",
};

const resources = [
  {
    number: "01",
    title: "Author Guidelines",
    description:
      "Understand the journal's manuscript requirements, declarations and publication process.",
    href: "/authors/guidelines",
    action: "Read guidelines",
  },
  {
    number: "02",
    title: "Manuscript Preparation",
    description:
      "Review the recommended structure and preparation of text, references, tables and figures.",
    href: "/authors/manuscript-preparation",
    action: "Prepare manuscript",
  },
  {
    number: "03",
    title: "Peer Review",
    description:
      "Understand editorial screening, independent review, revisions and editorial decisions.",
    href: "/authors/peer-review",
    action: "Understand peer review",
  },
  {
    number: "04",
    title: "Submission Process",
    description:
      "Learn about manuscript submission, editorial communication and subsequent stages.",
    href: "/authors/submission-process",
    action: "View process",
  },
];

export default function AuthorsPage() {
  return (
    <main className="container page">
      <div className="eyebrow">INFORMATION FOR CONTRIBUTORS</div>

      <h1>For Authors</h1>

      <p className="lead">
        JPSA welcomes scholarly contributions in physics and
        interdisciplinary physical sciences. Authors should review
        the journal's requirements before preparing a manuscript.
      </p>

      <section className="prose">
        <h2>Before submitting</h2>

        <p>
          Authors should ensure that their manuscript is original,
          relevant to the journal's scope and prepared in accordance
          with the applicable author instructions.
        </p>

        <ul>
          <li>Confirm that the manuscript fits the journal's scope.</li>
          <li>Ensure that all listed authors have approved the manuscript.</li>
          <li>Prepare accurate author affiliations and contact details.</li>
          <li>Include relevant funding and conflict-of-interest declarations.</li>
          <li>Ensure that figures, tables and references are properly documented.</li>
        </ul>
      </section>

      <section className="section">
        <div className="eyebrow">AUTHOR RESOURCES</div>
        <h2>Submission resources</h2>

        <div className="link-grid">
          {resources.map((resource) => (
            <Link
              href={resource.href}
              key={resource.number}
              className="resource-card"
            >
              <span className="eyebrow">{resource.number}</span>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <span className="resource-action">
                {resource.action} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="prose">
        <h2>Editorial evaluation and publication charges</h2>

        <p>
          Manuscripts are subject to editorial assessment and the
          journal's applicable peer-review process. An editorial
          decision is made independently of any publication charge.
        </p>

        <p>
          Where an Article Processing Charge (APC) applies, the
          applicable amount, payment terms and refund conditions
          should be communicated transparently to authors. Any
          applicable charge is handled separately from the editorial
          acceptance decision.
        </p>

        <h2>Online submission</h2>

        <div className="notice">
          <strong>Online submission is not yet available.</strong>
          <p>
            The manuscript submission portal is being prepared.
            Please do not treat this informational page as confirmation
            that a manuscript has been formally submitted.
          </p>
        </div>
      </section>
    </main>
  );
}
