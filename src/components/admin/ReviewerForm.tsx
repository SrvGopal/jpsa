
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type ReviewRecord = {
  id: string;
  reviewerName: string;
  reviewerEmail: string;
  status: string;
  recommendation: string | null;
  confidentialComments: string | null;
  authorComments: string | null;
};

const statusLabels: Record<string, string> = {
  INVITED: "Invited",
  ACCEPTED: "Accepted",
  DECLINED: "Declined",
  COMPLETED: "Completed",
};

const recommendationLabels: Record<string, string> = {
  ACCEPT: "Accept",
  MINOR_REVISION: "Minor revision",
  MAJOR_REVISION: "Major revision",
  REJECT: "Reject",
};

function ReviewerRecord({
  review,
  submissionId,
}: {
  review: ReviewRecord;
  submissionId: string;
}) {
  const router = useRouter();

  const [status, setStatus] = useState(review.status);
  const [recommendation, setRecommendation] = useState(
    review.recommendation || ""
  );
  const [confidentialComments, setConfidentialComments] = useState(
    review.confidentialComments || ""
  );
  const [authorComments, setAuthorComments] = useState(
    review.authorComments || ""
  );
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function saveReview() {
    setSaving(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch(
        `/api/admin/submissions/${submissionId}/reviewers`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            reviewId: review.id,
            status,
            recommendation: recommendation || null,
            confidentialComments,
            authorComments,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to save review.");
      }

      setMessage("Reviewer record updated successfully.");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="review-record">
      <div>
        <strong>{review.reviewerName}</strong>
        <p>{review.reviewerEmail}</p>
      </div>

      <label htmlFor={`review-status-${review.id}`}>
        Review status
      </label>

      <select
        id={`review-status-${review.id}`}
        value={status}
        onChange={(event) => setStatus(event.target.value)}
        disabled={saving}
      >
        {Object.entries(statusLabels).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <label htmlFor={`review-recommendation-${review.id}`}>
        Recommendation
      </label>

      <select
        id={`review-recommendation-${review.id}`}
        value={recommendation}
        onChange={(event) => setRecommendation(event.target.value)}
        disabled={saving}
      >
        <option value="">Not recorded</option>
        {Object.entries(recommendationLabels).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <label htmlFor={`review-confidential-${review.id}`}>
        Confidential comments (editor only)
      </label>

      <textarea
        id={`review-confidential-${review.id}`}
        value={confidentialComments}
        onChange={(event) => setConfidentialComments(event.target.value)}
        rows={4}
        maxLength={10000}
        placeholder="Comments visible only to the editorial office..."
        disabled={saving}
      />

      <label htmlFor={`review-author-${review.id}`}>
        Comments for the author
      </label>

      <textarea
        id={`review-author-${review.id}`}
        value={authorComments}
        onChange={(event) => setAuthorComments(event.target.value)}
        rows={4}
        maxLength={10000}
        placeholder="Feedback intended for the manuscript author..."
        disabled={saving}
      />

      {message && <p className="editorial-success">{message}</p>}
      {error && <p className="editorial-error">{error}</p>}

      <button type="button" onClick={saveReview} disabled={saving}>
        {saving ? "Saving..." : "Save review"}
      </button>
    </div>
  );
}

export default function ReviewerForm({
  submissionId,
  reviews,
}: {
  submissionId: string;
  reviews: ReviewRecord[];
}) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function assignReviewer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch(
        `/api/admin/submissions/${submissionId}/reviewers`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to assign reviewer.");
      }

      setName("");
      setEmail("");
      setMessage("Reviewer assigned successfully.");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="admin-panel">
      <form className="reviewer-form" onSubmit={assignReviewer}>
        <h3>Assign a reviewer</h3>

        <label htmlFor="reviewer-name">Reviewer name</label>
        <input
          id="reviewer-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Dr. Reviewer Name"
          maxLength={150}
          required
          disabled={saving}
        />

        <label htmlFor="reviewer-email">Reviewer email</label>
        <input
          id="reviewer-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="reviewer@example.com"
          maxLength={254}
          required
          disabled={saving}
        />

        {message && <p className="editorial-success">{message}</p>}
        {error && <p className="editorial-error">{error}</p>}

        <button type="submit" disabled={saving}>
          {saving ? "Assigning..." : "Assign reviewer"}
        </button>
      </form>

      <div className="reviewer-management">
        <h3>Assigned reviewers ({reviews.length})</h3>

        {reviews.length === 0 ? (
          <p className="detail-muted">No reviewers assigned yet.</p>
        ) : (
          reviews.map((review) => (
            <ReviewerRecord
              key={review.id}
              review={review}
              submissionId={submissionId}
            />
          ))
        )}
      </div>
    </section>
  );
}
