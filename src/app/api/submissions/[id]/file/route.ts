import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";

export const runtime = "nodejs";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Require an authenticated, active admin.
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json(
        { error: "Authentication required." },
        { status: 401 }
      );
    }

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

    const { id } = await params;
    const kind = request.nextUrl.searchParams.get("kind");

    if (kind !== "manuscript" && kind !== "coverLetter") {
      return NextResponse.json(
        { error: "Invalid file type." },
        { status: 400 }
      );
    }

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
        { error: "This file is not available." },
        { status: 404 }
      );
    }

    const bucket = process.env.SUPABASE_STORAGE_BUCKET;

    if (!bucket) {
      throw new Error("SUPABASE_STORAGE_BUCKET is not configured.");
    }

    const { data, error } = await supabase.storage
      .from(bucket)
      .createSignedUrl(filePath, 60 * 5);

    if (error || !data?.signedUrl) {
      console.error("Signed URL generation failed:", error);

      return NextResponse.json(
        { error: "Unable to open this document." },
        { status: 500 }
      );
    }

    return NextResponse.redirect(data.signedUrl);
  } catch (error) {
    console.error("Admin file access error:", error);

    return NextResponse.json(
      { error: "Unable to open this document." },
      { status: 500 }
    );
  }
}