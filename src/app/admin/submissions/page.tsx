
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-guard";

export const dynamic = "force-dynamic";

const statuses = [
  "RECEIVED",
  "SCREENING",
  "UNDER_REVIEW",
  "REVISION_REQUIRED",
  "ACCEPTED",
  "REJECTED"
];

function formatStatus(status: string) {
  return status.replaceAll("_", " ");
}

export default async function SubmissionsPage({
  searchParams
}: {
  searchParams: Promise<{ q?: string; status?: string }>;
}) {
  await requireAdmin();

  const params = await searchParams;
  const query = params.q?.trim() || "";
  const selectedStatus = statuses.includes(params.status || "")
    ? params.status!
    : "ALL";

  const where = {
    ...(selectedStatus !== "ALL" ? { status: selectedStatus } : {}),
    ...(query
      ? {
          OR: [
            { title: { contains: query, mode: "insensitive" as const } },
            { authors: { contains: query, mode: "insensitive" as const } },
            { email: { contains: query, mode: "insensitive" as const } }
          ]
        }
      : {})
  };

  const submissions = await prisma.submission.findMany({
    where,
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      authors: true,
      email: true,
      articleType: true,
      status: true,
      createdAt: true
    }
  });

  return (
    <main className="admin-dashboard">
      <header className="admin-dashboard-header">
        <div>
          <span className="admin-eyebrow">JPSA ADMINISTRATION</span>
          <h1>Submissions</h1>
          <p>Review and manage manuscripts submitted to the journal.</p>
        </div>

        <Link className="admin-back-link" href="/admin/dashboard">
          ← Dashboard
        </Link>
      </header>

      <section className="admin-panel">
        <div className="submission-toolbar">
          <form method="GET" className="submission-filter-form">
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search title, author or email..."
              aria-label="Search submissions"
            />

            <select
              name="status"
              defaultValue={selectedStatus}
              aria-label="Filter by status"
            >
              <option value="ALL">All statuses</option>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {formatStatus(status)}
                </option>
              ))}
            </select>

            <button type="submit">Apply filters</button>
            <Link href="/admin/submissions">Clear</Link>
          </form>
        </div>

        <div className="submission-results-heading">
          <h2>Manuscript records</h2>
          <span>{submissions.length} result{submissions.length === 1 ? "" : "s"}</span>
        </div>

        {submissions.length === 0 ? (
          <div className="admin-empty-state">
            <h3>No submissions found</h3>
            <p>
              Try changing your search or status filter. New manuscripts will
              appear here after authors submit them.
            </p>
          </div>
        ) : (
          <div className="admin-table-wrapper">
            <table className="admin-table submissions-table">
              <thead>
                <tr>
                  <th>Manuscript</th>
                  <th>Author / Correspondence</th>
                  <th>Article type</th>
                  <th>Status</th>
                  <th>Received</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {submissions.map((submission) => (
                  <tr key={submission.id}>
                    <td>
                      <strong>{submission.title}</strong>
                      <span>ID: {submission.id.slice(-8)}</span>
                    </td>
                    <td>
                      <strong>{submission.authors}</strong>
                      <span>{submission.email}</span>
                    </td>
                    <td>{submission.articleType}</td>
                    <td>
                      <span className={`admin-status status-${submission.status.toLowerCase()}`}>
                        {formatStatus(submission.status)}
                      </span>
                    </td>
                    <td>
                      {new Intl.DateTimeFormat("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                      }).format(submission.createdAt)}
                    </td>
                    <td>
                      <Link
                        className="submission-open-link"
                        href={`/admin/submissions/${submission.id}`}
                      >
                        Open →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
