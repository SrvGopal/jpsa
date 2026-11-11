
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-guard";
import LogoutButton from "@/components/admin/LogoutButton";

export const dynamic = "force-dynamic";

function StatCard({
  label,
  value,
  description
}: {
  label: string;
  value: number;
  description: string;
}) {
  return (
    <div className="admin-stat-card">
      <p>{label}</p>
      <strong>{value}</strong>
      <span>{description}</span>
    </div>
  );
}

export default async function AdminDashboard() {
  const admin = await requireAdmin();

  const [
    totalSubmissions,
    received,
    underReview,
    accepted,
    rejected,
    revisionRequired,
    pendingPayments,
    recentSubmissions
  ] = await Promise.all([
    prisma.submission.count(),
    prisma.submission.count({ where: { status: "RECEIVED" } }),
    prisma.submission.count({ where: { status: "UNDER_REVIEW" } }),
    prisma.submission.count({ where: { status: "ACCEPTED" } }),
    prisma.submission.count({ where: { status: "REJECTED" } }),
    prisma.submission.count({ where: { status: "REVISION_REQUIRED" } }),
    prisma.payment.count({ where: { status: "PENDING" } }),
    prisma.submission.findMany({
      orderBy: { createdAt: "desc" },
      take: 8,
      select: {
        id: true,
        title: true,
        authors: true,
        email: true,
        status: true,
        createdAt: true
      }
    })
  ]);

  return (
    <main className="admin-dashboard">
      <header className="admin-dashboard-header">
        <div>
          <span className="admin-eyebrow">JPSA ADMINISTRATION</span>
          <h1>Dashboard</h1>
          <p>Welcome back, {admin.name}.</p>
        </div>

        <LogoutButton />
      </header>

      <section className="admin-stats-grid">
        <StatCard
          label="Total submissions"
          value={totalSubmissions}
          description="All manuscripts received"
        />
        <StatCard
          label="New submissions"
          value={received}
          description="Awaiting initial screening"
        />
        <StatCard
          label="Under review"
          value={underReview}
          description="Currently in peer review"
        />
        <StatCard
          label="Accepted"
          value={accepted}
          description="Editorially accepted"
        />
        <StatCard
          label="Revision required"
          value={revisionRequired}
          description="Awaiting author revisions"
        />
        <StatCard
          label="Rejected"
          value={rejected}
          description="Editorially rejected"
        />
        <StatCard
          label="Pending payments"
          value={pendingPayments}
          description="Awaiting payment verification"
        />
      </section>

      <section className="admin-panel">
        <div className="admin-panel-heading">
          <div>
            <h2>Recent submissions</h2>
            <p>The latest manuscripts received by JPSA.</p>
          </div>
          <Link href="/admin/submissions">View all submissions →</Link>
        </div>

        {recentSubmissions.length === 0 ? (
          <div className="admin-empty-state">
            <h3>No submissions yet</h3>
            <p>
              New manuscript submissions will appear here when authors submit
              their papers.
            </p>
          </div>
        ) : (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Manuscript</th>
                  <th>Corresponding email</th>
                  <th>Status</th>
                  <th>Received</th>
                </tr>
              </thead>
              <tbody>
                {recentSubmissions.map((submission) => (
                  <tr key={submission.id}>
                    <td>
                      <strong>{submission.title}</strong>
                      <span>{submission.authors}</span>
                    </td>
                    <td>{submission.email}</td>
                    <td>
                      <span className="admin-status">
                        {submission.status.replaceAll("_", " ")}
                      </span>
                    </td>
                    <td>
                      {new Intl.DateTimeFormat("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                      }).format(submission.createdAt)}
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
