import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { journal } from "@/config/journal";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Issues and Archives | JPSTA",
  description: "Browse published volumes and issues of the Journal of Physical Sciences and Technological Advances.",
};

export default async function IssuesPage() {
  const issues = await prisma.issue.findMany({
    where: { status: "PUBLISHED" },
    orderBy: [{ year: "desc" }, { volume: "desc" }, { issue: "desc" }],
  });

  const publishedIssues = await Promise.all(issues.map(async (issueRecord) => ({
    ...issueRecord,
    articleCount: await prisma.article.count({
      where: {
        volume: issueRecord.volume,
        issue: issueRecord.issue,
        year: issueRecord.year,
        status: "PUBLISHED",
      },
    }),
  })));

  const volumeMap = new Map<number, typeof publishedIssues>();
  for (const issueRecord of publishedIssues) {
    const existing = volumeMap.get(issueRecord.volume) || [];
    existing.push(issueRecord);
    volumeMap.set(issueRecord.volume, existing);
  }

  const volumes = Array.from(volumeMap.entries()).sort((a, b) => b[0] - a[0]);

  return (
    <main className="container page">
      <div className="eyebrow">{journal.shortName} · PUBLICATION ARCHIVE</div>
      <h1>Volumes and Issues</h1>
      <p className="lead">Browse published volumes, monthly issues, and the articles included in each issue of {journal.name}.</p>

      <section className="archive-section">
        <div className="archive-summary">
          <div>
            <h2>Journal Archive</h2>
            <p className="results-count">{publishedIssues.length} published {publishedIssues.length === 1 ? "issue" : "issues"}</p>
          </div>
          <Link href="/articles" className="text-link">Browse all articles →</Link>
        </div>

        {volumes.length > 0 ? (
          <div className="archive-volumes">
            {volumes.map(([volume, volumeIssues]) => (
              <section className="archive-volume" key={volume}>
                <div className="archive-volume-heading">
                  <h2><Link href={`/issues/${volume}`}>Volume {volume} →</Link></h2>
                  <span>{volumeIssues.length} {volumeIssues.length === 1 ? "issue" : "issues"}</span>
                </div>
                <div className="issue-list">
                  {volumeIssues.map((issueRecord) => (
                    <article className="issue-card" key={issueRecord.id}>
                      <div>
                        <div className="eyebrow">PUBLICATION YEAR · {issueRecord.year}</div>
                        <h3>{issueRecord.title || `Issue ${issueRecord.issue}`}</h3>
                        <p>Volume {issueRecord.volume} · Issue {issueRecord.issue} · {issueRecord.articleCount} {issueRecord.articleCount === 1 ? "article" : "articles"}</p>
                      </div>
                      <Link className="text-link" href={`/issues/${issueRecord.volume}/${issueRecord.issue}`}>View issue →</Link>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="empty-state archive-empty">
            <div className="eyebrow">PUBLICATION ARCHIVE</div>
            <h3>The first issue is being prepared</h3>
            <p>JPSTA's volumes, monthly issues, and article contents will appear here as each issue is formally published.</p>
            <Link href="/about/journal-information" className="text-link">View journal information →</Link>
          </div>
        )}
      </section>
    </main>
  );
}
