
import type { Metadata } from "next";
import Link from "next/link";

import { articles } from "@/data/articles";
import { journal } from "@/config/journal";

export const metadata: Metadata = {
  title: "Issues and Archives | JPSA",
  description:
    "Browse published volumes and issues of the Journal of Physical Sciences Advances."
};

export default function IssuesPage() {
  const issueMap = new Map<
    string,
    {
      volume: number;
      issue: number;
      year: number;
      articles: typeof articles;
    }
  >();

  for (const article of articles) {
    const key = `${article.volume}-${article.issue}`;

    const existing = issueMap.get(key);

    if (existing) {
      existing.articles.push(article);
    } else {
      issueMap.set(key, {
        volume: article.volume,
        issue: article.issue,
        year: article.year,
        articles: [article]
      });
    }
  }

  const publishedIssues = Array.from(issueMap.values()).sort(
    (a, b) =>
      b.year - a.year ||
      b.volume - a.volume ||
      b.issue - a.issue
  );

  return (
    <div className="container page">
      <div className="eyebrow">
        {journal.shortName} · PUBLICATION ARCHIVE
      </div>

      <h1>Volumes and Issues</h1>

      <p className="lead">
        Browse the published volumes and individual issues
        of the {journal.name}.
      </p>

      <section className="archive-section">
        <div className="archive-summary">
          <div>
            <h2>Journal Archive</h2>

            <p className="results-count">
              {publishedIssues.length}{" "}
              {publishedIssues.length === 1
                ? "published issue"
                : "published issues"}
            </p>
          </div>

          <Link
            href="/articles"
            className="text-link"
          >
            Browse all articles →
          </Link>
        </div>

        {publishedIssues.length > 0 ? (
          <div className="issue-list">
            {publishedIssues.map((issue) => (
              <article
                className="issue-card"
                key={`${issue.volume}-${issue.issue}`}
              >
                <div>
                  <div className="eyebrow">
                    PUBLICATION YEAR · {issue.year}
                  </div>

                  <h2>
                    Volume {issue.volume} · Issue {issue.issue}
                  </h2>

                  <p>
                    {issue.articles.length}{" "}
                    {issue.articles.length === 1
                      ? "published article"
                      : "published articles"}
                  </p>
                </div>

                <Link
                  className="text-link"
                  href={`/issues/${issue.volume}/${issue.issue}`}
                >
                  View issue →
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state archive-empty">
            <div className="eyebrow">
              ARCHIVE NOT YET ESTABLISHED
            </div>

            <h3>
              No published issues are currently available
            </h3>

            <p>
              The journal's volume and issue archive will
              appear here after its first issue has been
              formally published.
            </p>

            <p>
              No unpublished or planned issues are presented
              as completed publications.
            </p>

            <Link
              href="/about/journal-information"
              className="text-link"
            >
              View journal information →
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
