import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";

export const runtime = "nodejs";

function cleanText(value: unknown, max = 20000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: NextRequest) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Authentication required." }, { status: 401 });
    }

    const admin = await prisma.adminUser.findUnique({
      where: { id: session.id },
      select: { active: true },
    });
    if (!admin?.active) {
      return NextResponse.json({ error: "Your admin account is inactive." }, { status: 403 });
    }

    const body = await request.json();
    const title = cleanText(body.title, 500);
    const authors = cleanText(body.authors, 2000);
    const abstract = cleanText(body.abstract, 20000);
    const keywords = cleanText(body.keywords, 2000);
    const type = cleanText(body.type, 100) || "Research Article";
    const slug = cleanText(body.slug, 180)
      .toLowerCase()
      .replace(/[^a-z0-9-]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    const volume = Number(body.volume);
    const issue = Number(body.issue);
    const year = Number(body.year);
    const submissionId = cleanText(body.submissionId, 200) || null;
    const doi = cleanText(body.doi, 300) || null;
    const pdfUrlInput = cleanText(body.pdfUrl, 2000);
    const publishedAt = body.publishedAt ? new Date(body.publishedAt) : new Date();

    if (!title || !authors || !abstract || !slug) {
      return NextResponse.json({ error: "Title, authors, abstract and article URL slug are required." }, { status: 400 });
    }
    if (![volume, issue, year].every(Number.isInteger) || volume < 1 || issue < 1 || year < 1900 || year > 2200) {
      return NextResponse.json({ error: "Enter a valid volume, issue and publication year." }, { status: 400 });
    }
    if (Number.isNaN(publishedAt.getTime())) {
      return NextResponse.json({ error: "Enter a valid publication date." }, { status: 400 });
    }

    let submission = null;
    if (submissionId) {
      submission = await prisma.submission.findUnique({
        where: { id: submissionId },
        select: { id: true, title: true, authors: true, abstract: true, keywords: true, articleType: true, manuscriptUrl: true, status: true, article: { select: { id: true } } },
      });
      if (!submission) {
        return NextResponse.json({ error: "The selected submission was not found." }, { status: 404 });
      }
      if (submission.article) {
        return NextResponse.json({ error: "This submission has already been published as an article." }, { status: 409 });
      }
      if (submission.status !== "ACCEPTED") {
        return NextResponse.json({ error: "Only accepted submissions can be published. Update the submission status first." }, { status: 400 });
      }
    }

    const pdfUrl = pdfUrlInput || submission?.manuscriptUrl || null;
    const result = await prisma.$transaction(async (tx) => {
      await tx.issue.upsert({
        where: { volume_issue_year: { volume, issue, year } },
        create: {
          volume,
          issue,
          year,
          title: cleanText(body.issueTitle, 250) || null,
          publishedAt,
          status: "PUBLISHED",
        },
        update: {
          title: cleanText(body.issueTitle, 250) || undefined,
          publishedAt,
          status: "PUBLISHED",
        },
      });

      const article = await tx.article.create({
        data: {
          submissionId,
          slug,
          title,
          type,
          authors,
          abstract,
          keywords,
          volume,
          issue,
          year,
          publishedAt,
          doi,
          pdfUrl,
          status: "PUBLISHED",
        },
        select: { id: true, slug: true, title: true, volume: true, issue: true, year: true },
      });

      return article;
    });

    return NextResponse.json({ success: true, article: result }, { status: 201 });
  } catch (error) {
    console.error("Publication creation error:", error);
    const message = error instanceof Error ? error.message : "";
    if (message.includes("Unique constraint")) {
      return NextResponse.json({ error: "An article with this slug or DOI already exists." }, { status: 409 });
    }
    return NextResponse.json({ error: "Unable to publish this article. Please check the details and try again." }, { status: 500 });
  }
}
