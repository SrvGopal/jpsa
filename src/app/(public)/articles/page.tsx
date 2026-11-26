import type { Metadata } from "next";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Published Articles | JPSTA",
  description: "Browse scholarly publications in the Journal of Physical Sciences and Technological Advances.",
};

type ArticlesPageProps = { searchParams: Promise<{ q?: string }> };

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const records = await prisma.article.findMany({
    where: { status: "PUBLISHED" },
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
  });

  const normalizedQuery = query.toLowerCase();
  const filteredArticles = records.filter((article) => {
    if (!normalizedQuery) return true;
    return [
      article.title,
      article.type,
      article.abstract,
      article.authors,
      article.keywords,
    ].join(" ").toLowerCase().includes(normalizedQuery);
  }).map((article) => ({
    slug: article.slug,
    type: article.type,
    title: article.title,
    authors: article.authors.split(";").map((author) => author.trim()).filter(Boolean),
    abstract: article.abstract,
    keywords: article.keywords.split(",").map((keyword) => keyword.trim()).filter(Boolean),
    volume: article.volume,
    issue: article.issue,
    year: article.year,
    published: article.publishedAt?.toISOString() ?? "",
    doi: article.doi ?? undefined,
    pdfUrl: article.pdfUrl ?? undefined,
  }));

  return (
    <main className="container page">
      <div className="eyebrow">JPSTA · SCHOLARLY PUBLICATIONS</div>
      <h1>Published Articles</h1>
      <p className="lead">Explore published research in the Journal of Physical Sciences and Technological Advances. Search by title, author, subject or keyword.</p>

      <section className="article-catalogue">
        <div className="catalogue-heading">
          <div>
            <h2>Research Catalogue</h2>
            <p className="results-count">{filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"} found</p>
          </div>
          <Link href="/issues" className="text-link">Browse issues →</Link>
        </div>

        <form action="/articles" method="GET" className="search-box catalogue-search">
          <label htmlFor="article-search">Search publications</label>
          <div className="search-controls">
            <input id="article-search" type="search" name="q" placeholder="Article title, author or keyword…" defaultValue={query} />
            <button type="submit" className="button button-dark">Search</button>
          </div>
        </form>

        {query && <div className="active-search"><span>Search results for: <strong>{query}</strong></span><Link href="/articles" className="text-link">Clear search</Link></div>}

        {filteredArticles.length ? (
          <div className="article-list">
            {filteredArticles.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        ) : (
          <div className="empty-state catalogue-empty">
            <div className="eyebrow">{query ? "NO MATCHING PUBLICATIONS" : "PUBLICATION ARCHIVE"}</div>
            <h3>{query ? "No articles match your search" : "The publication catalogue is being prepared"}</h3>
            <p>{query ? "Try another title, author name or research keyword." : "Published research will appear here when the journal begins publishing its articles."}</p>
            {query ? <Link href="/articles" className="text-link">View all publications →</Link> : <Link href="/issues" className="text-link">Browse journal archive →</Link>}
          </div>
        )}
      </section>
    </main>
  );
}
