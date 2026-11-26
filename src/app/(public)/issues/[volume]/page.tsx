import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { journal } from "@/config/journal";

export const dynamic = "force-dynamic";

type VolumePageProps = { params: Promise<{ volume: string }> };

export async function generateMetadata({ params }: VolumePageProps): Promise<Metadata> {
  const { volume } = await params;
  return {
    title: `Volume ${volume} | ${journal.shortName} Archives`,
    description: `Browse published issues and articles in Volume ${volume} of ${journal.name}.`,
  };
}

export default async function VolumePage({ params }: VolumePageProps) {
  const { volume } = await params;
  const volumeNumber = Number(volume);
  if (!Number.isInteger(volumeNumber) || volumeNumber < 1) notFound();

  const issues = await prisma.issue.findMany({
    where: { volume: volumeNumber, status: "PUBLISHED" },
    orderBy: [{ issue: "asc" }, { year: "asc" }],
  });
  if (!issues.length) notFound();

  const withCounts = await Promise.all(issues.map(async (issueRecord) => ({
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

  return (
    <main className="container page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/issues">Archives</Link><span>/</span><span>Volume {volumeNumber}</span>
      </nav>
      <div className="eyebrow">JPSTA · JOURNAL ARCHIVE</div>
      <h1>Volume {volumeNumber}</h1>
      <p className="lead">Browse the published issues and their tables of contents in Volume {volumeNumber}.</p>

      <section className="archive-section">
        <div className="archive-summary">
          <div><h2>Issues in this volume</h2><p className="results-count">{withCounts.length} published {withCounts.length === 1 ? "issue" : "issues"}</p></div>
          <Link href="/issues" className="text-link">← All volumes</Link>
        </div>
        <div className="issue-list">
          {withCounts.map((issueRecord) => (
            <article className="issue-card" key={issueRecord.id}>
              <div>
                <div className="eyebrow">YEAR · {issueRecord.year}</div>
                <h2>{issueRecord.title || `Issue ${issueRecord.issue}`}</h2>
                <p>Issue {issueRecord.issue} · {issueRecord.articleCount} {issueRecord.articleCount === 1 ? "published article" : "published articles"}</p>
              </div>
              <Link className="text-link" href={`/issues/${issueRecord.volume}/${issueRecord.issue}`}>View table of contents →</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
