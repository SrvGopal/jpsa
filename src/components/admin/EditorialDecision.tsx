"use client";

import { useState } from "react";

type Decision =
  | "ACCEPT"
  | "MINOR_REVISION"
  | "MAJOR_REVISION"
  | "REJECT";

type EditorialDecisionProps = {
  submissionId: string;
  currentStatus: string;
  currentDecision: string | null;
  currentReason: string | null;
  decisionDate: string | null;
};

const decisionOptions: {
  value: Decision;
  label: string;
  description: string;
}[] = [
  {
    value: "ACCEPT",
    label: "Accept",
    description: "Accept the manuscript for publication.",
  },
  {
    value: "MINOR_REVISION",
    label: "Minor Revision",
    description: "Request limited changes before a final decision.",
  },
  {
    value: "MAJOR_REVISION",
    label: "Major Revision",
    description: "Request substantial changes and further evaluation.",
  },
  {
    value: "REJECT",
    label: "Reject",
    description: "Decline the manuscript.",
  },
];

const decisionLabels: Record<string, string> = {
  ACCEPT: "Accepted",
  MINOR_REVISION: "Minor Revision",
  MAJOR_REVISION: "Major Revision",
  REJECT: "Rejected",
};

export default function EditorialDecision({
  submissionId,
  currentStatus,
  currentDecision,
  currentReason,
  decisionDate,
}: EditorialDecisionProps) {
  const [decision, setDecision] = useState<Decision | "">("");
  const [reason, setReason] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const terminal =
    currentStatus === "ACCEPTED" || currentStatus === "REJECTED";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("");
    setError("");

    if (!decision) {
      setError("Please select a decision.");
      return;
    }

    if (!reason.trim()) {
      setError("Please enter the decision reason.");
      return;
    }

    const confirmed = window.confirm(
      `Record the decision "${decisionLabels[decision]}" for this submission?`
    );

    if (!confirmed) return;

    setSaving(true);

    try {
      const response = await fetch(
        `/api/admin/submissions/${submissionId}/decision`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            decision,
            reason: reason.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to save the decision.");
      }

      setMessage("Editorial decision recorded successfully.");
      window.location.reload();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="editorial-decision">
      <div className="editorial-decision-heading">
        <h3>Editorial Decision</h3>
        <p>
          Record the editor&apos;s formal decision for this manuscript.
        </p>
      </div>

      {currentDecision && (
        <div className="current-decision">
          <span className="current-decision-label">
            Latest recorded decision
          </span>

          <strong>
            {decisionLabels[currentDecision] || currentDecision}
          </strong>

          {decisionDate && (
            <span>
              {new Date(decisionDate).toLocaleDateString()}
            </span>
          )}

          {currentReason && <p>{currentReason}</p>}
        </div>
      )}

      {terminal ? (
        <p className="editorial-decision-locked">
          This submission has reached a final status. No further decision
          can be recorded.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="editorial-decision-select">
            Decision
          </label>

          <select
            id="editorial-decision-select"
            value={decision}
            onChange={(event) =>
              setDecision(event.target.value as Decision | "")
            }
            required
          >
            <option value="">Select a decision</option>
            {decisionOptions
              .filter(
                (option) =>
                  currentStatus !== "SCREENING" ||
                  option.value === "REJECT"
              )
              .map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>

          {decision && (
            <p className="editorial-decision-description">
              {
                decisionOptions.find(
                  (option) => option.value === decision
                )?.description
              }
            </p>
          )}

          <label htmlFor="editorial-decision-reason">
            Decision reason
          </label>

          <textarea
            id="editorial-decision-reason"
            value={reason}
            onChange={(event) => setReason(event.target.value)}
            placeholder="Explain the reasoning behind this editorial decision..."
            rows={5}
            maxLength={10000}
            required
          />

          <div className="editorial-decision-footer">
            <span>{reason.length}/10000 characters</span>

            <button type="submit" disabled={saving}>
              {saving ? "Recording..." : "Record Decision"}
            </button>
          </div>

          {error && (
            <p className="editorial-error">{error}</p>
          )}

          {message && (
            <p className="editorial-success">{message}</p>
          )}
        </form>
      )}
    </section>
  );
}