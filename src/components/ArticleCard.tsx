import Link from "next/link";
import type { Article } from "@/data/articles";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="article-card">
      <div className="eyebrow">{article.type}</div>
      <h3><Link href={`/articles/${article.slug}`}>{article.title}</Link></h3>
      <p className="authors">{article.authors.join(" · ")}</p>
      <p>{article.abstract}</p>
      <div className="article-meta">
        Vol. {article.volume} · Issue {article.issue} · {article.year}
      </div>
      <Link className="text-link" href={`/articles/${article.slug}`}>Read article →</Link>
    </article>
  );
}
