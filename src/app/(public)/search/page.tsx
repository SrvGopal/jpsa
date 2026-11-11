
import type { Metadata } from "next";

import ArticleSearch from "@/components/ArticleSearch";
import { prisma } from "@/lib/prisma";
import { journal } from "@/config/journal";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Search Publications | ${journal.shortName}`,
  description:
    "Discover published research articles by title, author, abstract and subject keyword."
};

export default async function SearchPage() {
  const rows = await prisma.article.findMany({
    where: {
      status: "PUBLISHED"
    },
    orderBy: [
      {
        publishedAt: "desc"
      },
      {
        createdAt: "desc"
      }
    ],
    select: {
      slug: true,
      type: true,
      title: true,
      authors: true,
      abstract: true,
      keywords: true,
      volume: true,
      issue: true,
      year: true,
      publishedAt: true
    }
  });

  const items = rows.map((article) => ({
    slug: article.slug,
    type: article.type,
    title: article.title,
    authors: article.authors
      .split(";")
      .map((author) => author.trim())
      .filter(Boolean),
    abstract: article.abstract,
    keywords: article.keywords
      .split(",")
      .map((keyword) => keyword.trim())
      .filter(Boolean),
    volume: article.volume,
    issue: article.issue,
    year: article.year,
    published: article.publishedAt?.toISOString() ?? ""
  }));

  return (
    <div className="container page">
      <div className="eyebrow">
        {journal.shortName} · RESEARCH DISCOVERY
      </div>

      <h1>Search Publications</h1>

      <p className="lead">
        Discover published scholarly research in the
        {` ${journal.name}`}. Search by article title,
        author, abstract or research keyword.
      </p>

      <div className="search-page-intro">
        <div>
          <span className="search-stat-number">
            {rows.length}
          </span>

          <span className="search-stat-label">
            Published {rows.length === 1 ? "article" : "articles"}
          </span>
        </div>

        <p>
          Only formally published records are included
          in the public search catalogue.
        </p>
      </div>

      <section className="search-results-section">
        <h2>Publication Discovery</h2>

        <ArticleSearch items={items} />
      </section>
    </div>
  );
}
