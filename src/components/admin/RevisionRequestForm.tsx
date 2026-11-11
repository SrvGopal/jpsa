
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RevisionRequestForm({
  submissionId,
  decision
}: {
  submissionId: string;
  decision: string | null;
}) {
  const router = useRouter();

  const [comments, setComments] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  if (
    decision !== "MINOR_REVISION" &&
    decision !== "MAJOR_REVISION"
  ) {
    return null;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!comments.trim()) {
      setError("Please enter revision instructions.");
      return;
    }

    if (
      !window.confirm(
        "Create this revision request for the author?"
      )
    ) {
      return;
    }

    setSaving(true);

    try {
      const response = await fetch(
        `/api/admin/submissions/${submissionId}/revisions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            editorComments: comments.trim()
          })
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to create revision request."
        );
      }

      setSuccess("Revision request created successfully.");
      setComments("");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="admin-panel revision-request-panel">
      <span className="admin-eyebrow">AUTHOR REVISION</span>
      <h2>Request manuscript revision</h2>

      <p>
        Decision:{" "}
        <strong>
          {decision === "MINOR_REVISION"
            ? "Minor Revision"
            : "Major Revision"}
        </strong>
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="revision-instructions">
          Revision instructions for the author
        </label>

        <textarea
          id="revision-instructions"
          value={comments}
          onChange={(event) => setComments(event.target.value)}
          placeholder="Explain the changes the author must make..."
          rows={7}
          maxLength={10000}
          required
        />

        <p className="editorial-help">
          {comments.length}/10000 characters
        </p>

        {error && <p className="editorial-error">{error}</p>}
        {success && <p className="editorial-success">{success}</p>}

        <button type="submit" disabled={saving}>
          {saving ? "Creating request..." : "Create Revision Request"}
        </button>
      </form>
    </section>
  );
}
