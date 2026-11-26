import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-guard";
import PublicationForm from "@/components/admin/PublicationForm";

export const dynamic = "force-dynamic";

export default async function PublicationsAdminPage() {
  await requireAdmin();

  const [acceptedSubmissions, publishedArticles] = await Promise.all([
    prisma.submission.findMany({
      where: { status: "ACCEPTED", article: { is: null } },
      orderBy: { updatedAt: "desc" },
      select: {
        id: true,
        title: true,
        authors: true,
        abstract: true,
        keywords: true,
        articleType: true,
        manuscriptUrl: true,
      },
    }),
    prisma.article.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { publishedAt: "desc" },
      take: 10,
      select: { id: true, title: true, slug: true, volume: true, issue: true, year: true, publishedAt: true },
    }),
  ]);

  return (
    <main className="admin-dashboard">
      <header className="admin-dashboard-header">
        <div>
          <span className="admin-eyebrow">JPSTA PUBLICATION DESK</span>
          <h1>Publish an article</h1>
          <p>Create a published article and assign it to a journal volume and issue.</p>
        </div>
        <Link className="admin-back-link" href="/admin/dashboard">← Dashboard</Link>
      </header>

      <div className="admin-panel publication-help">
        <strong>Publication workflow</strong>
        <p>Choose an accepted submission or enter a new article record. Review the preview, confirm the volume and issue, and publish. The issue and article become visible in the public archive immediately.</p>
      </div>

      <PublicationForm acceptedSubmissions={acceptedSubmissions} />

      <section className="admin-panel publication-recent">
        <div className="admin-panel-heading">
          <div>
            <h2>Recently published</h2>
            <p>Articles already available in the public journal archive.</p>
          </div>
          <Link href="/issues">View public archive →</Link>
        </div>
        {publishedArticles.length ? (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead><tr><th>Article</th><th>Issue</th><th>Publication date</th><th>Link</th></tr></thead>
              <tbody>
                {publishedArticles.map((article) => (
                  <tr key={article.id}>
                    <td><strong>{article.title}</strong></td>
                    <td>Vol. {article.volume}, Issue {article.issue} ({article.year})</td>
                    <td>{article.publishedAt ? new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(article.publishedAt) : "—"}</td>
                    <td><Link className="submission-open-link" href={`/articles/${article.slug}`}>Open →</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : <p>No articles have been published yet.</p>}
      </section>
    </main>
  );
}
