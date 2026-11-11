
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-guard";
import SubmissionActions from "@/components/admin/SubmissionActions";
import ReviewerForm from "@/components/admin/ReviewerForm";
import EditorialDecision from "@/components/admin/EditorialDecision";

export const dynamic = "force-dynamic";

function formatStatus(status: string) {
  return status.replaceAll("_", " ");
}

export default async function SubmissionDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();

  const { id } = await params;

  const submission = await prisma.submission.findUnique({
    where: { id },
    include: {
      reviews: {
        orderBy: { invitedAt: "desc" }
      },
      invoice: {
        select: {
          id: true,
          invoiceNumber: true,
          status: true,
          amount: true,
          currency: true
        }
      }
    }
  });

  if (!submission) {
    notFound();
  }

  return (
    <main className="admin-dashboard">
      <header className="admin-dashboard-header">
        <div>
          <span className="admin-eyebrow">JPSA EDITORIAL OFFICE</span>
          <h1>Manuscript details</h1>
          <p>
            Review submission information and manage its editorial progress.
          </p>
        </div>

        <Link className="admin-back-link" href="/admin/submissions">
          ← Submissions
        </Link>
      </header>

      <div className="submission-detail-layout">
        <div className="submission-main-column">
          <section className="admin-panel detail-panel">
            <div className="detail-heading">
              <div>
                <span className="admin-eyebrow">MANUSCRIPT</span>
                <h2>{submission.title}</h2>
              </div>

              <span
                className={`admin-status status-${submission.status.toLowerCase()}`}
              >
                {formatStatus(submission.status)}
              </span>
            </div>

            <div className="detail-metadata">
              <div>
                <span>Submission ID</span>
                <strong>{submission.id}</strong>
              </div>

              <div>
                <span>Article type</span>
                <strong>{submission.articleType}</strong>
              </div>

              <div>
                <span>Date received</span>
                <strong>
                  {new Intl.DateTimeFormat("en-IN", {
                    dateStyle: "long"
                  }).format(submission.createdAt)}
                </strong>
              </div>
            </div>

            <div className="detail-section">
              <h3>Authors</h3>
              <p>{submission.authors}</p>
            </div>

            <div className="detail-section">
              <h3>Corresponding author email</h3>
              <p>
                <a href={`mailto:${submission.email}`}>
                  {submission.email}
                </a>
              </p>
            </div>

            <div className="detail-section">
              <h3>Abstract</h3>
              <p className="abstract-text">{submission.abstract}</p>
            </div>

            <div className="detail-section">
              <h3>Keywords</h3>
              <p>{submission.keywords || "No keywords provided."}</p>
            </div>

            <div className="detail-section manuscript-files">
              <h3>Manuscript files</h3>

              {submission.manuscriptUrl ? (
                <a
                  href={`/api/admin/submissions/${submission.id}/file?kind=manuscript`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open manuscript ↗
                </a>
              ) : (
                <p>No manuscript file attached.</p>
              )}

              {submission.coverLetterUrl && (
                <a
                  href={`/api/admin/submissions/${submission.id}/file?kind=coverLetter`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open cover letter ↗
                </a>
              )}
            </div>
          </section>

          <section className="admin-panel detail-panel">
            <h2>Editorial history</h2>

            {submission.reviews.length === 0 ? (
              <p className="detail-muted">No reviewer records yet.</p>
            ) : (
              <div className="review-record-list">
                {submission.reviews.map((review) => (
                  <div className="review-record" key={review.id}>
                    <strong>{review.reviewerName}</strong>
                    <span>{review.reviewerEmail}</span>
                    <span>Status: {formatStatus(review.status)}</span>

                    {review.recommendation && (
                      <span>
                        Recommendation: {formatStatus(review.recommendation)}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>

          {submission.invoice && (
            <section className="admin-panel detail-panel">
              <h2>APC invoice</h2>
              <p>Invoice: {submission.invoice.invoiceNumber}</p>
              <p>
                Amount: {submission.invoice.currency}{" "}
                {submission.invoice.amount.toString()}
              </p>
              <p>Status: {formatStatus(submission.invoice.status)}</p>
            </section>
          )}
        </div>

        <aside className="submission-side-column">
          <SubmissionActions
            submissionId={submission.id}
            currentStatus={submission.status}
            initialNotes={submission.editorNotes || ""}
          />

          <EditorialDecision
            submissionId={submission.id}
            currentStatus={submission.status}
            currentDecision={submission.decision}
            currentReason={submission.decisionReason}
            decisionDate={submission.decisionDate?.toISOString() ?? null}
          />

          <ReviewerForm
            submissionId={submission.id}
            reviews={submission.reviews.map((review) => ({
              id: review.id,
              reviewerName: review.reviewerName,
              reviewerEmail: review.reviewerEmail,
              status: review.status,
              recommendation: review.recommendation,
              confidentialComments: review.confidentialComments,
              authorComments: review.authorComments
            }))}
          />
        </aside>
      </div>
    </main>
  );
}
