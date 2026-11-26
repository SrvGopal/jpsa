import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { journal } from "@/config/journal";

export const dynamic = "force-dynamic";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await prisma.article.findUnique({
    where: { slug },
    select: { title: true, abstract: true, status: true, authors: true },
  });
  if (!article || article.status !== "PUBLISHED") return { title: "Article | JPSTA" };
  return {
    title: `${article.title} | ${journal.shortName}`,
    description: article.abstract.slice(0, 160),
    authors: article.authors.split(";").map((name) => ({ name: name.trim() })).filter((author) => author.name),
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await prisma.article.findUnique({ where: { slug } });

  if (!article || article.status !== "PUBLISHED") notFound();

  const authors = article.authors.split(";").map((author) => author.trim()).filter(Boolean);
  const keywords = article.keywords.split(",").map((keyword) => keyword.trim()).filter(Boolean);
  const publishedDate = article.publishedAt
    ? new Intl.DateTimeFormat("en-IN", { dateStyle: "long" }).format(article.publishedAt)
    : "Publication date not specified";

  const citation = `${authors.join(", ")}. "${article.title}." ${journal.name}, vol. ${article.volume}, no. ${article.issue}, ${article.year}.${article.doi ? ` DOI: ${article.doi}` : ""}`;

  return (
    <main className="container page article-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span>
        <Link href="/issues">Journal archive</Link><span>/</span>
        <Link href={`/issues/${article.volume}/${article.issue}`}>Volume {article.volume}, Issue {article.issue}</Link>
      </nav>

      <div className="eyebrow">{article.type.toUpperCase()} · JPSTA</div>
      <h1>{article.title}</h1>
      <p className="authors">{authors.join(" · ")}</p>

      <div className="article-meta">
        Volume {article.volume} · Issue {article.issue} · {article.year}
        <span> · Published {publishedDate}</span>
      </div>

      <div className="article-actions">
        <a className="button button-dark" href={`/api/articles/${article.slug}/pdf`} target="_blank" rel="noopener noreferrer">Download PDF</a>
        {article.doi && <a className="button button-light" href={article.doi.startsWith("http") ? article.doi : `https://doi.org/${article.doi}`} target="_blank" rel="noopener noreferrer">DOI</a>}
      </div>

      <section className="article-abstract">
        <h2>Abstract</h2>
        <p>{article.abstract}</p>
      </section>

      {keywords.length > 0 && (
        <section className="article-keywords">
          <h2>Keywords</h2>
          <p>{keywords.join(" · ")}</p>
        </section>
      )}

      <section className="article-citation">
        <h2>How to cite</h2>
        <p>{citation}</p>
      </section>

      <div className="issue-navigation">
        <Link className="text-link" href={`/issues/${article.volume}/${article.issue}`}>← Back to this issue</Link>
      </div>
    </main>
  );
}
