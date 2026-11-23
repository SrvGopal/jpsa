
import Link from "next/link";

const policies = [
  ["Publication Ethics", "/policies/publication-ethics"],
  ["Authorship", "/policies/authorship"],
  ["Plagiarism", "/policies/plagiarism"],
  ["Conflicts of Interest", "/policies/conflicts-of-interest"],
  ["Copyright", "/policies/copyright"],
  ["Corrections and Retractions", "/policies/corrections-and-retractions"],
];

export default function Page() {
  return (
    <main className="container page">
      <div className="eyebrow">JPSTA · GOVERNANCE</div>

      <h1>Publishing Policies</h1>

      <p className="lead">
        The Journal of Physical Sciences and Technological Advances
        (JPSTA) maintains publication policies intended to promote
        research integrity, transparency and responsible scholarly
        communication.
      </p>

      <div className="prose">
        <p>
          Authors, editors and reviewers are expected to follow the
          applicable policies throughout the submission, review and
          publication process.
        </p>
      </div>

      <div className="link-grid">
        {policies.map(([title, href]) => (
          <Link href={href} className="resource-card" key={href}>
            <h3>{title}</h3>
            <span>Read policy →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
