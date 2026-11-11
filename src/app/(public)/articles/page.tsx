
import type { Metadata } from "next";
import Link from "next/link";

import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Published Articles | JPSA",
  description:
    "Browse and search scholarly publications in the Journal of Physical Sciences Advances."
};

type ArticlesPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function ArticlesPage({
  searchParams
}: ArticlesPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const normalizedQuery = query.toLowerCase();

  const filteredArticles = normalizedQuery
    ? articles.filter((article) => {
        const searchableContent = [
          article.title,
          article.type,
          article.abstract,
          ...article.authors,
          ...article.keywords
        ]
          .join(" ")
          .toLowerCase();

        return searchableContent.includes(normalizedQuery);
      })
    : articles;

  return (
    <div className="container page">
      <div className="eyebrow">
        JPSA · SCHOLARLY PUBLICATIONS
      </div>

      <h1>Published Articles</h1>

      <p className="lead">
        Explore the scholarly publication record of the
        Journal of Physical Sciences Advances. Search
        articles by title, author, subject or keyword.
      </p>

      <section className="article-catalogue">
        <div className="catalogue-heading">
          <div>
            <h2>Research Catalogue</h2>
            <p className="results-count">
              {filteredArticles.length}{" "}
              {filteredArticles.length === 1
                ? "article"
                : "articles"}{" "}
              found
            </p>
          </div>

          <Link
            href="/issues"
            className="text-link"
          >
            Browse issues →
          </Link>
        </div>

        <form
          action="/articles"
          method="GET"
          className="search-box catalogue-search"
        >
          <label htmlFor="article-search">
            Search publications
          </label>

          <div className="search-controls">
            <input
              id="article-search"
              type="search"
              name="q"
              placeholder="Enter article title, author or keyword..."
              defaultValue={query}
            />

            <button
              type="submit"
              className="button button-dark"
            >
              Search
            </button>
          </div>
        </form>

        {query && (
          <div className="active-search">
            <span>
              Search results for: <strong>{query}</strong>
            </span>

            <Link
              href="/articles"
              className="text-link"
            >
              Clear search
            </Link>
          </div>
        )}

        {filteredArticles.length > 0 ? (
          <div className="article-list">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state catalogue-empty">
            <div className="eyebrow">
              {query
                ? "NO MATCHING PUBLICATIONS"
                : "PUBLICATION ARCHIVE"}
            </div>

            <h3>
              {query
                ? "No articles match your search"
                : "The publication catalogue is being prepared"}
            </h3>

            <p>
              {query
                ? "Try a different title, author name or research keyword."
                : "Published research articles will appear in this catalogue once the journal begins publishing."}
            </p>

            {query ? (
              <Link
                href="/articles"
                className="text-link"
              >
                View all publications →
              </Link>
            ) : (
              <Link
                href="/about/journal-information"
                className="text-link"
              >
                Journal information →
              </Link>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
