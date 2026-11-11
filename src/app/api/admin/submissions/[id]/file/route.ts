
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import { storage, STORAGE_BUCKET } from "@/lib/storage";

export const runtime = "nodejs";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // Verify admin session
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized." },
        { status: 401 }
      );
    }

    // Verify that the admin account is still active
    const admin = await prisma.adminUser.findUnique({
      where: { id: session.id },
      select: { active: true },
    });

    if (!admin?.active) {
      return NextResponse.json(
        { error: "Admin account is inactive." },
        { status: 403 }
      );
    }

    const { id } = await context.params;
    const kind = request.nextUrl.searchParams.get("kind");

    if (kind !== "manuscript" && kind !== "coverLetter") {
      return NextResponse.json(
        { error: "Invalid file type." },
        { status: 400 }
      );
    }

    // Retrieve the submission and its stored file path
    const submission = await prisma.submission.findUnique({
      where: { id },
      select: {
        manuscriptUrl: true,
        coverLetterUrl: true,
      },
    });

    if (!submission) {
      return NextResponse.json(
        { error: "Submission not found." },
        { status: 404 }
      );
    }

    const filePath =
      kind === "manuscript"
        ? submission.manuscriptUrl
        : submission.coverLetterUrl;

    if (!filePath) {
      return NextResponse.json(
        { error: "Requested file does not exist." },
        { status: 404 }
      );
    }

    // Generate a temporary signed URL for the private PDF
    const { data, error } = await storage
      .storage
      .from(STORAGE_BUCKET)
      .createSignedUrl(filePath, 300);

    if (error || !data?.signedUrl) {
      console.error("Supabase signed URL error:", error);

      return NextResponse.json(
        { error: "Unable to open the requested file." },
        { status: 500 }
      );
    }

    return NextResponse.redirect(data.signedUrl, {
      headers: {
        "Cache-Control": "no-store, private",
      },
    });
  } catch (error) {
    console.error("Submission file access error:", error);

    return NextResponse.json(
      { error: "Unable to retrieve the file." },
      { status: 500 }
    );
  }
}
