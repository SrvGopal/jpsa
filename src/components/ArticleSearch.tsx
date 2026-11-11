
"use client";

import { useMemo, useState } from "react";
import ArticleCard from "@/components/ArticleCard";

type Item = {
  slug: string;
  type: string;
  title: string;
  authors: string[];
  abstract: string;
  keywords: string[];
  volume: number;
  issue: number;
  year: number;
  published: string;
};

export default function ArticleSearch({ items }: { items: Item[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();

    if (!q) return items;

    return items.filter((article) =>
      [
        article.title,
        article.abstract,
        ...article.authors,
        ...article.keywords,
      ]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [items, query]);

  return (
    <>
      <div className="search-box">
        <label htmlFor="article-search">
          Search by title, author or keyword
        </label>

        <input
          id="article-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. condensed matter, author name…"
        />
      </div>

      <p className="results-count">
        {filtered.length} article{filtered.length === 1 ? "" : "s"} found
      </p>

      <div className="article-list">
        {filtered.map((article) => (
          <ArticleCard
            key={article.slug}
            article={{ ...article, published: article.published || "" }}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="empty-state">
          <h3>No matching articles</h3>
          <p>
            Try another title, author or keyword. Published records will
            appear here once added by the editorial team.
          </p>
        </div>
      )}
    </>
  );
}
