
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import ArticleCard from "@/components/ArticleCard";
import { prisma } from "@/lib/prisma";
import { journal } from "@/config/journal";

type IssuePageProps = {
  params: Promise<{
    volume: string;
    issue: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params
}: IssuePageProps): Promise<Metadata> {
  const { volume, issue } = await params;

  return {
    title: `Volume ${volume}, Issue ${issue} | ${journal.shortName}`,
    description:
      `Published research articles in Volume ${volume}, Issue ${issue} of ${journal.name}.`
  };
}

export default async function IssuePage({
  params
}: IssuePageProps) {
  const { volume, issue } = await params;

  const volumeNumber = Number(volume);
  const issueNumber = Number(issue);

  if (
    !Number.isInteger(volumeNumber) ||
    !Number.isInteger(issueNumber) ||
    volumeNumber < 1 ||
    issueNumber < 1
  ) {
    notFound();
  }

  const issueRecord = await prisma.issue.findFirst({
    where: {
      volume: volumeNumber,
      issue: issueNumber,
      status: "PUBLISHED"
    },
    orderBy: {
      year: "desc"
    }
  });

  if (!issueRecord) {
    notFound();
  }

  const publishedArticles = await prisma.article.findMany({
    where: {
      volume: volumeNumber,
      issue: issueNumber,
      year: issueRecord.year,
      status: "PUBLISHED"
    },
    orderBy: {
      publishedAt: "asc"
    }
  });

  const articles = publishedArticles.map((article) => ({
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
    published: article.publishedAt?.toISOString() ?? "",
    doi: article.doi ?? undefined,
    pdfUrl: article.pdfUrl ?? undefined
  }));

  const formattedDate = issueRecord.publishedAt
    ? new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }).format(issueRecord.publishedAt)
    : "Publication date unavailable";

  return (
    <div className="container page">
      <nav
        className="breadcrumbs"
        aria-label="Breadcrumb"
      >
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/issues">Issues</Link>
        <span>/</span>
        <span>
          Volume {volumeNumber}, Issue {issueNumber}
        </span>
      </nav>

      <div className="eyebrow">
        {journal.shortName} · PUBLISHED ISSUE
      </div>

      <h1>
        {issueRecord.title ||
          `Volume ${volumeNumber} · Issue ${issueNumber}`}
      </h1>

      <p className="lead">
        {journal.name}
      </p>

      <div className="issue-metadata">
        <div>
          <span>Volume</span>
          <strong>{volumeNumber}</strong>
        </div>

        <div>
          <span>Issue</span>
          <strong>{issueNumber}</strong>
        </div>

        <div>
          <span>Publication year</span>
          <strong>{issueRecord.year}</strong>
        </div>

        <div>
          <span>Published on</span>
          <strong>{formattedDate}</strong>
        </div>
      </div>

      <section className="issue-articles">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              CONTENTS
            </div>

            <h2>Articles in this issue</h2>

            <p className="results-count">
              {articles.length} published{" "}
              {articles.length === 1 ? "article" : "articles"}
            </p>
          </div>
        </div>

        {articles.length > 0 ? (
          <div className="article-list">
            {articles.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No article records available</h3>

            <p>
              This published issue currently has no
              associated published article records.
              Please contact the editorial office for
              further information.
            </p>
          </div>
        )}
      </section>

      <div className="issue-navigation">
        <Link
          href="/issues"
          className="text-link"
        >
          ← Back to journal archives
        </Link>
      </div>
    </div>
  );
}
