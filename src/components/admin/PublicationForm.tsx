"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";

type AcceptedSubmission = {
  id: string;
  title: string;
  authors: string;
  abstract: string;
  keywords: string;
  articleType: string;
  manuscriptUrl: string | null;
};

function makeSlug(value: string) {
  return value.toLowerCase().normalize("NFKD")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim().replace(/[\s-]+/g, "-");
}

export default function PublicationForm({
  acceptedSubmissions,
}: {
  acceptedSubmissions: AcceptedSubmission[];
}) {
  const [selectedId, setSelectedId] = useState("");
  const selected = acceptedSubmissions.find((item) => item.id === selectedId);
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [abstract, setAbstract] = useState("");
  const [keywords, setKeywords] = useState("");
  const [type, setType] = useState("Research Article");
  const [slug, setSlug] = useState("");
  const [volume, setVolume] = useState("1");
  const [issue, setIssue] = useState("1");
  const [year, setYear] = useState(String(new Date().getFullYear()));
  const [publishedAt, setPublishedAt] = useState(new Date().toISOString().slice(0, 10));
  const [issueTitle, setIssueTitle] = useState("January");
  const [doi, setDoi] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  const preview = useMemo(() => ({
    volume: Number(volume),
    issue: Number(issue),
    year: Number(year),
    slug: slug || makeSlug(title),
  }), [volume, issue, year, slug, title]);

  function chooseSubmission(id: string) {
    setSelectedId(id);
    const item = acceptedSubmissions.find((submission) => submission.id === id);
    if (!item) return;
    setTitle(item.title);
    setAuthors(item.authors);
    setAbstract(item.abstract);
    setKeywords(item.keywords);
    setType(item.articleType || "Research Article");
    setSlug(makeSlug(item.title));
    setPdfUrl(item.manuscriptUrl || "");
  }

  async function publish(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setBusy(true);
    const finalSlug = slug || makeSlug(title);
    try {
      const response = await fetch("/api/admin/publications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submissionId: selectedId || undefined,
          title, authors, abstract, keywords, type,
          slug: finalSlug,
          volume: preview.volume,
          issue: preview.issue,
          year: preview.year,
          publishedAt,
          issueTitle,
          doi: doi || undefined,
          pdfUrl: pdfUrl || undefined,
        }),
      });
      const result = await response.json();
      if (!response.ok) {
        setMessage(result.error || "Publication could not be created.");
        return;
      }
      setMessage("Article published successfully. Opening the article page…");
      window.location.href = `/articles/${result.article.slug}`;
    } catch {
      setMessage("Unable to connect. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="publication-form" onSubmit={publish}>
      <section className="admin-panel publication-form-section">
        <div className="admin-panel-heading">
          <div>
            <h2>Article information</h2>
            <p>Enter the final details exactly as they should appear in the journal.</p>
          </div>
        </div>

        <label>
          Accepted submission <span>(optional)</span>
          <select value={selectedId} onChange={(event) => chooseSubmission(event.target.value)}>
            <option value="">Publish a new article record</option>
            {acceptedSubmissions.map((item) => (
              <option key={item.id} value={item.id}>{item.title}</option>
            ))}
          </select>
        </label>

        <label>
          Article title
          <input required maxLength={500} value={title} onChange={(event) => { setTitle(event.target.value); if (!slug) setSlug(makeSlug(event.target.value)); }} />
        </label>

        <label>
          Authors <span>(separate names with semicolons)</span>
          <input required maxLength={2000} value={authors} onChange={(event) => setAuthors(event.target.value)} placeholder="Author One; Author Two" />
        </label>

        <label>
          Abstract
          <textarea required rows={7} maxLength={20000} value={abstract} onChange={(event) => setAbstract(event.target.value)} />
        </label>

        <label>
          Keywords <span>(comma-separated)</span>
          <input maxLength={2000} value={keywords} onChange={(event) => setKeywords(event.target.value)} />
        </label>

        <label>
          Article type
          <select value={type} onChange={(event) => setType(event.target.value)}>
            <option>Research Article</option>
            <option>Review Article</option>
            <option>Short Communication</option>
            <option>Technical Note</option>
          </select>
        </label>

        <label>
          Article page slug
          <input required maxLength={180} value={slug} onChange={(event) => setSlug(makeSlug(event.target.value))} />
          <small>Public URL: /articles/{slug || "article-title"}</small>
        </label>
      </section>

      <section className="admin-panel publication-form-section">
        <h2>Volume and issue</h2>
        <p>Assign the article to the issue in which it will appear.</p>

        <div className="publication-field-grid">
          <label>Volume<input type="number" required min="1" value={volume} onChange={(event) => setVolume(event.target.value)} /></label>
          <label>Issue<input type="number" required min="1" value={issue} onChange={(event) => setIssue(event.target.value)} /></label>
          <label>Publication year<input type="number" required min="1900" max="2200" value={year} onChange={(event) => setYear(event.target.value)} /></label>
        </div>

        <label>
          Issue title / month
          <input maxLength={250} value={issueTitle} onChange={(event) => setIssueTitle(event.target.value)} placeholder="January" />
        </label>

        <label>
          Publication date
          <input type="date" required value={publishedAt} onChange={(event) => setPublishedAt(event.target.value)} />
        </label>

        <label>
          DOI <span>(optional; enter only if registered)</span>
          <input maxLength={300} value={doi} onChange={(event) => setDoi(event.target.value)} placeholder="10.xxxx/..." />
        </label>

        <label>
          Published PDF storage path or URL
          <input value={pdfUrl} onChange={(event) => setPdfUrl(event.target.value)} placeholder="Required for a downloadable article PDF" />
          <small>When linked to a submission, its manuscript file path is prefilled. Use the final publication PDF.</small>
        </label>
      </section>

      <section className="admin-panel publication-preview">
        <span className="admin-eyebrow">PUBLICATION PREVIEW</span>
        <h2>{title || "Article title will appear here"}</h2>
        <p>{authors || "Author names"}</p>
        <div className="article-meta">Volume {preview.volume || "—"} · Issue {preview.issue || "—"} · {preview.year || "—"}</div>
        <p>{abstract || "The article abstract will appear here."}</p>
        <strong>Keywords: {keywords || "—"}</strong>
      </section>

      {message && <p role="status" className="publication-message">{message}</p>}

      <div className="publication-submit-row">
        <button type="submit" disabled={busy}>{busy ? "Publishing…" : "Publish article"}</button>
        <span>The article and issue will become publicly visible immediately.</span>
      </div>
    </form>
  );
}
