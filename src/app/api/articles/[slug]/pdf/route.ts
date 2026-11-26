import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { storage, STORAGE_BUCKET } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const article = await prisma.article.findUnique({
      where: { slug },
      select: { status: true, pdfUrl: true, title: true },
    });

    if (!article || article.status !== "PUBLISHED" || !article.pdfUrl) {
      return NextResponse.json({ error: "Published PDF not found." }, { status: 404 });
    }

    if (/^https?:\/\//i.test(article.pdfUrl)) {
      const url = new URL(article.pdfUrl);
      if (url.protocol !== "https:" && url.protocol !== "http:") {
        return NextResponse.json({ error: "Invalid PDF destination." }, { status: 400 });
      }
      return NextResponse.redirect(url.toString(), { headers: { "Cache-Control": "no-store" } });
    }

    const { data, error } = await storage.storage
      .from(STORAGE_BUCKET)
      .createSignedUrl(article.pdfUrl, 300, {
        download: `${slug}.pdf`,
      });

    if (error || !data?.signedUrl) {
      console.error("Published article PDF signing error:", error);
      return NextResponse.json({ error: "Unable to open this article PDF." }, { status: 500 });
    }

    return NextResponse.redirect(data.signedUrl, {
      headers: { "Cache-Control": "no-store, private" },
    });
  } catch (error) {
    console.error("Published article PDF error:", error);
    return NextResponse.json({ error: "Unable to retrieve the article PDF." }, { status: 500 });
  }
}
