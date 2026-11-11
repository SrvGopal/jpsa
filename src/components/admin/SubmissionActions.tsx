
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const allowedStatuses: Record<string, string[]> = {
  RECEIVED: ["SCREENING"],
  SCREENING: ["UNDER_REVIEW"],
  UNDER_REVIEW: ["REVISION_REQUIRED"],
  REVISION_REQUIRED: ["UNDER_REVIEW"],
  ACCEPTED: [],
  REJECTED: []
};

const labels: Record<string, string> = {
  RECEIVED: "Received",
  SCREENING: "Initial screening",
  UNDER_REVIEW: "Under review",
  REVISION_REQUIRED: "Revision required",
  ACCEPTED: "Accepted",
  REJECTED: "Rejected"
};

export default function SubmissionActions({
  submissionId,
  currentStatus,
  initialNotes
}: {
  submissionId: string;
  currentStatus: string;
  initialNotes: string;
}) {
  const router = useRouter();

  const [status, setStatus] = useState(currentStatus);
  const [notes, setNotes] = useState(initialNotes);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const nextStatuses = allowedStatuses[currentStatus] || [];

  async function saveChanges() {
    setSaving(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch(
        `/api/admin/submissions/${submissionId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            status,
            editorNotes: notes
          })
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to save changes.");
      }

      setMessage("Editorial changes saved successfully.");
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
    <section className="admin-panel editorial-actions">
      <span className="admin-eyebrow">EDITORIAL CONTROLS</span>
      <h2>Manage submission</h2>

      <div className="editorial-current-status">
        <span>Current status</span>
        <strong>{labels[currentStatus] || currentStatus}</strong>
      </div>

      <label htmlFor="editorial-status">Change status</label>

      <select
        id="editorial-status"
        value={status}
        onChange={(event) => setStatus(event.target.value)}
        disabled={saving || nextStatuses.length === 0}
      >
        <option value={currentStatus}>
          {labels[currentStatus] || currentStatus}
        </option>

        {nextStatuses.map((nextStatus) => (
          <option key={nextStatus} value={nextStatus}>
            {labels[nextStatus]}
          </option>
        ))}
      </select>

      {nextStatuses.length === 0 && (
        <p className="editorial-help">
          {currentStatus === "ACCEPTED" || currentStatus === "REJECTED"
            ? "This submission has reached a final editorial status."
            : "No further status transitions are available at this stage."}
        </p>
      )}

      <label htmlFor="editorial-notes">Internal editorial notes</label>

      <textarea
        id="editorial-notes"
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
        placeholder="Write internal notes about screening, reviewer feedback or editorial decisions..."
        rows={8}
        maxLength={10000}
        disabled={saving}
      />

      <p className="editorial-help">
        These notes are for the editorial office and are not sent to authors.
      </p>

      {message && <p className="editorial-success">{message}</p>}
      {error && <p className="editorial-error">{error}</p>}

      <button
        type="button"
        onClick={saveChanges}
        disabled={
          saving ||
          (status === currentStatus && notes === initialNotes)
        }
      >
        {saving ? "Saving..." : "Save editorial changes"}
      </button>
    </section>
  );
}
