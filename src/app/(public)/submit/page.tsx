"use client";

import { useState, FormEvent } from "react";
import { supabaseBrowser } from "@/lib/supabase-browser";

type UploadResult = {
  path: string;
};

const BUCKET =
  process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET ||
  "jpsa-manuscript";

async function uploadPdf(file: File): Promise<UploadResult> {
  if (file.type !== "application/pdf") {
    throw new Error("Only PDF files are accepted.");
  }

  if (file.size > 10 * 1024 * 1024) {
    throw new Error("Each PDF must be 10 MB or smaller.");
  }

  const response = await fetch("/api/uploads/presign", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fileName: file.name,
      contentType: "application/pdf",
      fileSize: file.size,
    }),
  });

  const authorization = await response.json();

  if (!response.ok || !authorization.success) {
    throw new Error(
      authorization.error || "Unable to authorize file upload."
    );
  }

  const { error } = await supabaseBrowser.storage
    .from(BUCKET)
    .uploadToSignedUrl(
      authorization.path,
      authorization.token,
      file,
      {
        contentType: "application/pdf",
        upsert: false,
      }
    );

  if (error) {
    throw new Error(`File upload failed: ${error.message}`);
  }

  return { path: authorization.path };
}

export default function SubmitManuscriptPage() {
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [email, setEmail] = useState("");
  const [abstract, setAbstract] = useState("");
  const [keywords, setKeywords] = useState("");
  const [articleType, setArticleType] = useState("Research Article");

  const [manuscript, setManuscript] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submissionId, setSubmissionId] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setMessage("");
    setSubmissionId("");

    if (!manuscript) {
      setError("Please select your manuscript PDF.");
      return;
    }

    setLoading(true);

    try {
      const manuscriptUpload = await uploadPdf(manuscript);

      let coverLetterPath = "";

      if (coverLetter) {
        const coverUpload = await uploadPdf(coverLetter);
        coverLetterPath = coverUpload.path;
      }

      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          authors,
          email,
          abstract,
          keywords,
          articleType,
          manuscriptPath: manuscriptUpload.path,
          coverLetterPath,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Your submission could not be completed."
        );
      }

      setSubmissionId(result.submissionId);
      setMessage(
        "Your manuscript has been successfully submitted to JPSA."
      );

      setTitle("");
      setAuthors("");
      setEmail("");
      setAbstract("");
      setKeywords("");
      setArticleType("Research Article");
      setManuscript(null);
      setCoverLetter(null);

      const form = event.currentTarget;
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const fieldStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 15px",
    border: "1px solid #d7dee8",
    borderRadius: "6px",
    fontSize: "15px",
    marginTop: "8px",
    background: "#fff",
    color: "#172b45",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontWeight: 600,
    color: "#263b55",
    marginTop: "22px",
  };

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "65px 24px 90px",
        color: "#172b45",
      }}
    >
      <p
        style={{
          color: "#a88743",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "2px",
        }}
      >
        JPSA · AUTHOR PORTAL
      </p>

      <h1
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "42px",
          margin: "12px 0",
        }}
      >
        Submit Your Manuscript
      </h1>

      <p style={{ color: "#64748b", lineHeight: 1.8 }}>
        Complete the information below and upload your manuscript
        in PDF format.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "35px",
          padding: "32px",
          border: "1px solid #e0e6ee",
          borderRadius: "10px",
          background: "#fff",
        }}
      >
        <label style={labelStyle}>
          Manuscript title *
          <input
            required
            maxLength={500}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={fieldStyle}
            placeholder="Enter the full title of your paper"
          />
        </label>

        <label style={labelStyle}>
          Author name(s) *
          <textarea
            required
            maxLength={2000}
            value={authors}
            onChange={(e) => setAuthors(e.target.value)}
            style={{ ...fieldStyle, minHeight: "85px" }}
            placeholder="Enter all authors and their affiliations"
          />
        </label>

        <label style={labelStyle}>
          Corresponding author email *
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={fieldStyle}
            placeholder="author@example.com"
          />
        </label>

        <label style={labelStyle}>
          Article type *
          <select
            value={articleType}
            onChange={(e) => setArticleType(e.target.value)}
            style={fieldStyle}
          >
            <option>Research Article</option>
            <option>Review Article</option>
            <option>Short Communication</option>
            <option>Case Study</option>
          </select>
        </label>

        <label style={labelStyle}>
          Abstract *
          <textarea
            required
            maxLength={20000}
            value={abstract}
            onChange={(e) => setAbstract(e.target.value)}
            style={{ ...fieldStyle, minHeight: "180px" }}
            placeholder="Enter your manuscript abstract"
          />
        </label>

        <label style={labelStyle}>
          Keywords
          <input
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            style={fieldStyle}
            placeholder="Separate keywords with commas"
          />
        </label>

        <div style={{ marginTop: "30px" }}>
          <label style={labelStyle}>
            Manuscript PDF *
          </label>
          <p style={{ color: "#64748b", fontSize: "13px" }}>
            PDF only · Maximum 10 MB
          </p>
          <input
            required
            type="file"
            accept="application/pdf,.pdf"
            onChange={(e) =>
              setManuscript(e.target.files?.[0] || null)
            }
            style={{ marginTop: "10px" }}
          />
        </div>

        <div style={{ marginTop: "25px" }}>
          <label style={labelStyle}>
            Cover letter PDF
          </label>
          <p style={{ color: "#64748b", fontSize: "13px" }}>
            Optional · PDF only · Maximum 10 MB
          </p>
          <input
            type="file"
            accept="application/pdf,.pdf"
            onChange={(e) =>
              setCoverLetter(e.target.files?.[0] || null)
            }
            style={{ marginTop: "10px" }}
          />
        </div>

        {error && (
          <div
            role="alert"
            style={{
              marginTop: "25px",
              padding: "14px",
              background: "#fff1f0",
              color: "#b42318",
              borderRadius: "6px",
            }}
          >
            {error}
          </div>
        )}

        {message && (
          <div
            role="status"
            style={{
              marginTop: "25px",
              padding: "18px",
              background: "#ecfdf3",
              color: "#067647",
              borderRadius: "6px",
            }}
          >
            <strong>{message}</strong>
            {submissionId && (
              <p style={{ marginBottom: 0 }}>
                Submission reference: {submissionId}
              </p>
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            marginTop: "30px",
            padding: "16px",
            background: loading ? "#718096" : "#102b48",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: 700,
            fontSize: "16px",
            cursor: loading ? "wait" : "pointer",
          }}
        >
          {loading ? "Uploading and submitting..." : "Submit Manuscript"}
        </button>

        <p
          style={{
            color: "#64748b",
            fontSize: "12px",
            marginTop: "18px",
            lineHeight: 1.7,
          }}
        >
          Submission does not guarantee acceptance or publication.
          All manuscripts are subject to the journal's editorial
          assessment and review process.
        </p>
      </form>
    </main>
  );
}