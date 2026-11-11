import { notFound } from "next/navigation";
import { articles } from "@/data/articles";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) notFound();

  return <article className="container page article-page">
    <div className="eyebrow">{article.type.toUpperCase()}</div>
    <h1>{article.title}</h1>
    <p className="authors">{article.authors.join(" · ")}</p>
    <div className="article-meta">Volume {article.volume} · Issue {article.issue} · {article.year}</div>
    <div className="article-actions"><button className="button button-dark">Download PDF</button><button className="button button-light">Cite this article</button></div>
    <hr />
    <h2>Abstract</h2><p>{article.abstract}</p>
    <h2>Keywords</h2><p>{article.keywords.join(" · ")}</p>
    <h2>1. Introduction</h2><p>Development content demonstrating the final article layout. Replace this with the published article record.</p>
    <h2>References</h2><p>References will be displayed here for published articles.</p>
  </article>;
}